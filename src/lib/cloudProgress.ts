import {
  doc,
  onSnapshot,
  runTransaction,
  setDoc,
  type Unsubscribe,
} from "firebase/firestore";
import type { AuthUser } from "./auth";
import { getFirebaseFirestore } from "./firebase";
import { collectionManifest } from "@/data/collectionManifest";
import type { QuizBadge } from "@/data/quizTypes";
import {
  clearUnlockedBadges,
  getUnlockedBadges,
  replaceUnlockedBadges,
} from "./quizEngine";
import {
  THEMATIC_AREAS,
  calculateAreaProgress,
  exportRawQuestsMap,
  replaceQuestsProgress,
  resetQuestsProgress,
  type StoredQuestsMap,
  type ThematicAreaId,
} from "./questsEngine";

export type CloudSyncStatus = "idle" | "syncing" | "synced" | "error";

export interface CloudUserProgressDocument {
  uid: string;
  displayName: string;
  email: string;
  provider: "google" | "email";
  badges: Record<string, QuizBadge>;
  areas: StoredQuestsMap;
  updatedAt: string;
}

const SESSION_OWNER_KEY = "dev_visualizer_session_owner";

let currentSyncedUid: string | null = null;
let unsubscribeSnapshot: Unsubscribe | null = null;
let syncStatus: CloudSyncStatus = "idle";
const syncListeners = new Set<() => void>();

function notifySyncListeners(): void {
  syncListeners.forEach((cb) => {
    try {
      cb();
    } catch {
    }
  });
}

function setSyncStatus(next: CloudSyncStatus): void {
  if (syncStatus === next) return;
  syncStatus = next;
  notifySyncListeners();
}

export function getCloudSyncStatus(): CloudSyncStatus {
  return syncStatus;
}

export function subscribeToCloudSync(callback: () => void): () => void {
  syncListeners.add(callback);
  return () => {
    syncListeners.delete(callback);
  };
}

function readSessionOwner(): string | null {
  if (typeof window === "undefined" || typeof globalThis.localStorage === "undefined") {
    return null;
  }
  try {
    return globalThis.localStorage.getItem(SESSION_OWNER_KEY);
  } catch {
    return null;
  }
}

function writeSessionOwner(uid: string | null): void {
  if (typeof window === "undefined" || typeof globalThis.localStorage === "undefined") {
    return;
  }
  try {
    if (uid === null) {
      globalThis.localStorage.removeItem(SESSION_OWNER_KEY);
    } else {
      globalThis.localStorage.setItem(SESSION_OWNER_KEY, uid);
    }
  } catch {
  }
}

function sanitizeBadge(badge: QuizBadge): QuizBadge {
  return {
    collectionId: String(badge.collectionId),
    collectionTitle: String(badge.collectionTitle),
    unlockedAt: String(badge.unlockedAt),
    score: Number(badge.score),
    totalQuestions: Number(badge.totalQuestions),
    percentage: Number(badge.percentage),
  };
}

function sanitizeBadgesRecord(raw: unknown): Record<string, QuizBadge> {
  if (!raw || typeof raw !== "object") {
    return {};
  }
  const result: Record<string, QuizBadge> = {};
  for (const [key, val] of Object.entries(raw as Record<string, unknown>)) {
    if (val && typeof val === "object") {
      const candidate = val as Partial<QuizBadge>;
      if (
        typeof candidate.collectionId === "string" &&
        typeof candidate.collectionTitle === "string" &&
        typeof candidate.unlockedAt === "string" &&
        typeof candidate.score === "number" &&
        typeof candidate.totalQuestions === "number" &&
        typeof candidate.percentage === "number"
      ) {
        result[key] = sanitizeBadge(candidate as QuizBadge);
      }
    }
  }
  return result;
}

function sanitizeAreasMap(raw: unknown): StoredQuestsMap {
  if (!raw || typeof raw !== "object") {
    return {};
  }
  const input = raw as Record<string, unknown>;
  const result: StoredQuestsMap = {};
  for (const area of THEMATIC_AREAS) {
    const entry = input[area];
    if (entry && typeof entry === "object") {
      const rec = entry as { completedCollections?: unknown; unlockedAt?: unknown };
      const completed = Array.isArray(rec.completedCollections)
        ? Array.from(
            new Set(
              rec.completedCollections.filter((id): id is string => typeof id === "string")
            )
          )
        : [];
      const progress = calculateAreaProgress(
        area,
        completed,
        typeof rec.unlockedAt === "string" ? rec.unlockedAt : undefined
      );
      if (completed.length > 0 || progress.unlockedAt) {
        result[area] = {
          completedCollections: completed,
          ...(progress.unlockedAt ? { unlockedAt: progress.unlockedAt } : {}),
        };
      }
    }
  }
  return result;
}

function mergeBadges(
  primary: Record<string, QuizBadge>,
  secondary: Record<string, QuizBadge>
): Record<string, QuizBadge> {
  const merged: Record<string, QuizBadge> = {};
  for (const [id, badge] of Object.entries(primary)) {
    merged[id] = sanitizeBadge(badge);
  }
  for (const [id, badge] of Object.entries(secondary)) {
    const existing = merged[id];
    if (!existing || badge.score > existing.score) {
      merged[id] = sanitizeBadge(badge);
    }
  }
  return merged;
}

function mergeAreas(
  primary: StoredQuestsMap,
  secondary: StoredQuestsMap,
  badges: Record<string, QuizBadge>
): StoredQuestsMap {
  const combined: StoredQuestsMap = {};
  const collectionsByArea = new Map<ThematicAreaId, Set<string>>();
  for (const area of THEMATIC_AREAS) {
    collectionsByArea.set(area, new Set<string>());
  }

  for (const area of THEMATIC_AREAS) {
    const set = collectionsByArea.get(area)!;
    primary[area]?.completedCollections.forEach((id) => set.add(id));
    secondary[area]?.completedCollections.forEach((id) => set.add(id));
  }

  for (const collectionId of Object.keys(badges)) {
    const entry = collectionManifest.find((c) => c.id === collectionId);
    if (entry) {
      const set = collectionsByArea.get(entry.group as ThematicAreaId);
      set?.add(collectionId);
    }
  }

  for (const area of THEMATIC_AREAS) {
    const list = Array.from(collectionsByArea.get(area)!);
    if (list.length === 0) continue;
    const existingUnlockedAt = primary[area]?.unlockedAt ?? secondary[area]?.unlockedAt;
    const progress = calculateAreaProgress(area, list, existingUnlockedAt);
    combined[area] = {
      completedCollections: list,
      ...(progress.unlockedAt ? { unlockedAt: progress.unlockedAt } : {}),
    };
  }

  return combined;
}

function buildPayload(
  user: AuthUser,
  badges: Record<string, QuizBadge>,
  areas: StoredQuestsMap
): CloudUserProgressDocument {
  return {
    uid: user.id,
    displayName: (user.displayName || "Estudiante").slice(0, 120),
    email: (user.email || "").slice(0, 254),
    provider: user.provider,
    badges,
    areas,
    updatedAt: new Date().toISOString(),
  };
}

export function stopCloudProgressSync(clearLocalProgress = false): void {
  if (unsubscribeSnapshot) {
    unsubscribeSnapshot();
    unsubscribeSnapshot = null;
  }
  currentSyncedUid = null;
  setSyncStatus("idle");

  if (clearLocalProgress) {
    writeSessionOwner(null);
    resetQuestsProgress();
    clearUnlockedBadges();
  }
}

function enforceAccountSessionIsolation(uid: string): boolean {
  const previousOwner = readSessionOwner();
  const isSameAccountSession = previousOwner === uid;
  if (previousOwner !== null && !isSameAccountSession) {
    resetQuestsProgress();
    clearUnlockedBadges();
  }
  writeSessionOwner(uid);
  return isSameAccountSession;
}

export function startCloudProgressSync(user: AuthUser): void {
  const isSameAccountSession = enforceAccountSessionIsolation(user.id);

  const db = getFirebaseFirestore();
  if (!db) {
    return;
  }

  if (currentSyncedUid === user.id && unsubscribeSnapshot) {
    return;
  }

  stopCloudProgressSync(false);
  writeSessionOwner(user.id);
  currentSyncedUid = user.id;
  setSyncStatus("syncing");

  const userDocRef = doc(db, "users", user.id);
  let hasCompletedInitialCloudLoad = false;

  unsubscribeSnapshot = onSnapshot(
    userDocRef,
    (snapshot) => {
      const canMergeLocal = isSameAccountSession || hasCompletedInitialCloudLoad;
      hasCompletedInitialCloudLoad = true;

      if (snapshot.exists()) {
        const data = snapshot.data() as Record<string, unknown>;
        const cloudBadges = sanitizeBadgesRecord(data.badges);
        const cloudAreas = sanitizeAreasMap(data.areas);

        const localBadges = canMergeLocal ? getUnlockedBadges() : {};
        const localAreas = canMergeLocal ? exportRawQuestsMap() : {};

        const mergedBadges = mergeBadges(cloudBadges, localBadges);
        const mergedAreas = mergeAreas(cloudAreas, localAreas, mergedBadges);

        replaceUnlockedBadges(mergedBadges);
        replaceQuestsProgress(mergedAreas);

        const cloudBadgeCount = Object.keys(cloudBadges).length;
        const mergedBadgeCount = Object.keys(mergedBadges).length;
        if (mergedBadgeCount > cloudBadgeCount) {
          void setDoc(userDocRef, buildPayload(user, mergedBadges, mergedAreas), {
            merge: true,
          }).catch(() => {});
        }
      } else {
        const initialBadges = canMergeLocal ? getUnlockedBadges() : {};
        const initialAreas = canMergeLocal
          ? mergeAreas(exportRawQuestsMap(), {}, initialBadges)
          : {};
        replaceUnlockedBadges(initialBadges);
        replaceQuestsProgress(initialAreas);
        void setDoc(userDocRef, buildPayload(user, initialBadges, initialAreas)).catch(
          () => {}
        );
      }
      setSyncStatus("synced");
    },
    () => {
      setSyncStatus("error");
    }
  );
}

export async function syncQuizCompletionToCloud(
  user: AuthUser,
  badge: QuizBadge
): Promise<void> {
  const db = getFirebaseFirestore();
  if (!db) {
    return;
  }

  const sanitizedBadge = sanitizeBadge(badge);
  const userDocRef = doc(db, "users", user.id);
  setSyncStatus("syncing");

  try {
    await runTransaction(db, async (transaction) => {
      const snap = await transaction.get(userDocRef);
      let nextBadges: Record<string, QuizBadge> = {};
      let nextAreas: StoredQuestsMap = {};

      if (snap.exists()) {
        const data = snap.data() as Record<string, unknown>;
        nextBadges = sanitizeBadgesRecord(data.badges);
        nextAreas = sanitizeAreasMap(data.areas);
      }

      const prevBadge = nextBadges[sanitizedBadge.collectionId];
      if (!prevBadge || sanitizedBadge.score >= prevBadge.score) {
        nextBadges[sanitizedBadge.collectionId] = sanitizedBadge;
      }

      const mergedAreas = mergeAreas(nextAreas, {}, nextBadges);
      transaction.set(userDocRef, buildPayload(user, nextBadges, mergedAreas));
    });
    setSyncStatus("synced");
  } catch {
    setSyncStatus("error");
  }
}
