/**
 * Dev Visualizer — Motor Central de Quests y Logros Didácticos (Feature F20)
 * src/lib/questsEngine.ts
 *
 * Motor cliente determinista para el seguimiento del progreso educativo organizado
 * por las 7 áreas temáticas oficiales de Dev Visualizer.
 *
 * Características:
 * - Cálculo matemático proporcional y deduplicado por área temática.
 * - Persistencia segura en localStorage bajo clave única con soporte para eventos multi-pestaña.
 * - Tolerancia completa a QuotaExceededError y sandbox restringido mediante estado en memoria.
 * - Compatibilidad total con entornos SSR / SSG en Next.js 16 y React 19.
 */

import { collectionManifest } from "@/data/collectionManifest";
import { type ThematicAreaId } from "@/data/symbolicAchievements";

export type { ThematicAreaId };

export const QUESTS_STORAGE_KEY = "dev_visualizer_quests_progress";

export const THEMATIC_AREAS: readonly ThematicAreaId[] = [
  "fundamentals",
  "languages",
  "interfaces",
  "platforms",
  "data",
  "versioning",
  "delivery",
] as const;

export interface QuestProgress {
  areaId: ThematicAreaId;
  totalQuizzes: number;
  completedQuizzes: number;
  percentage: number;
  isUnlocked: boolean;
  unlockedAt?: string;
}

export interface StoredAreaQuests {
  completedCollections: string[];
  unlockedAt?: string;
}

export type StoredQuestsMap = Partial<Record<ThematicAreaId, StoredAreaQuests>>;

// Estado de respaldo en memoria ante fallos de cuota o almacenamiento no disponible
let memoryFallbackQuests: StoredQuestsMap = {};
let isQuotaExceededActive = false;

// Registro de observadores para reactividad interna
const questsSubscribers = new Set<() => void>();

/**
 * Lee de manera segura los datos persistidos en localStorage con degradación a memoria en SSR/fallos.
 */
function readStorageData(): StoredQuestsMap {
  if (isQuotaExceededActive) {
    return memoryFallbackQuests;
  }

  if (typeof window === "undefined" || typeof globalThis.localStorage === "undefined") {
    return memoryFallbackQuests;
  }

  try {
    const raw = globalThis.localStorage.getItem(QUESTS_STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      const result: StoredQuestsMap = {};
      const source = (parsed.areas && typeof parsed.areas === "object") ? parsed.areas : parsed;

      for (const area of THEMATIC_AREAS) {
        const areaData = source[area];
        if (areaData && typeof areaData === "object") {
          const completed = Array.isArray(areaData.completedCollections)
            ? areaData.completedCollections.filter((id: unknown): id is string => typeof id === "string")
            : (Array.isArray(areaData) ? areaData.filter((id: unknown): id is string => typeof id === "string") : []);
          const unlockedAt = typeof areaData.unlockedAt === "string" ? areaData.unlockedAt : undefined;
          result[area] = {
            completedCollections: completed,
            unlockedAt,
          };
        }
      }
      return result;
    }

    return memoryFallbackQuests;
  } catch {
    return memoryFallbackQuests;
  }
}

/**
 * Persiste los datos en localStorage con captura defensiva de QuotaExceededError.
 */
function writeStorageData(data: StoredQuestsMap): void {
  memoryFallbackQuests = data;

  if (typeof window === "undefined" || typeof globalThis.localStorage === "undefined") {
    return;
  }

  try {
    globalThis.localStorage.setItem(QUESTS_STORAGE_KEY, JSON.stringify(data));
    isQuotaExceededActive = false;
  } catch (err: unknown) {
    isQuotaExceededActive = true;
    if (typeof console !== "undefined" && console.warn) {
      console.warn(
        "[QuestsEngine] QuotaExceededError detectado al guardar quests. Estado preservado en memoria:",
        err
      );
    }
  }
}

/**
 * Notifica a los observadores internos del progreso de quests.
 */
function notifyQuestsSubscribers(): void {
  questsSubscribers.forEach((cb) => {
    try {
      cb();
    } catch {
      // Ignorar fallos de observadores individuales
    }
  });
}

/**
 * Suscribe un callback a cambios en el progreso de quests.
 */
export function subscribeToQuests(callback: () => void): () => void {
  questsSubscribers.add(callback);

  const handleStorage = (event: StorageEvent | Event) => {
    if ("key" in event && event.key === QUESTS_STORAGE_KEY) {
      callback();
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("storage", handleStorage);
  }

  return () => {
    questsSubscribers.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorage);
    }
  };
}

/**
 * Calcula determinísticamente el progreso de un área temática a partir de las colecciones aprobadas.
 */
export function calculateAreaProgress(
  areaId: ThematicAreaId,
  completedQuizCollectionIds: string[],
  existingUnlockedAt?: string
): QuestProgress {
  const areaCollections = collectionManifest.filter((col) => col.group === areaId);
  const totalQuizzes = areaCollections.length;
  const areaCollectionIds = new Set(areaCollections.map((col) => col.id));

  const validCompletedInArea = new Set(
    completedQuizCollectionIds.filter((id) => areaCollectionIds.has(id))
  );
  const completedQuizzes = validCompletedInArea.size;

  const percentage = totalQuizzes > 0
    ? Math.min(100, Math.round((completedQuizzes / totalQuizzes) * 100))
    : 0;

  const isUnlocked = totalQuizzes > 0 && completedQuizzes >= totalQuizzes;

  let unlockedAt: string | undefined = undefined;
  if (isUnlocked) {
    unlockedAt = existingUnlockedAt || new Date().toISOString();
  }

  return {
    areaId,
    totalQuizzes,
    completedQuizzes,
    percentage,
    isUnlocked,
    unlockedAt,
  };
}

/**
 * Guarda el progreso de un área temática específica y notifica a los suscriptores.
 */
export function saveQuestProgress(
  areaId: ThematicAreaId,
  completedQuizCollectionIds: string[]
): void {
  const currentData = readStorageData();
  const previousRecord = currentData[areaId];

  const progress = calculateAreaProgress(
    areaId,
    completedQuizCollectionIds,
    previousRecord?.unlockedAt
  );

  currentData[areaId] = {
    completedCollections: Array.from(new Set(completedQuizCollectionIds)),
    unlockedAt: progress.unlockedAt,
  };

  writeStorageData(currentData);
  notifyQuestsSubscribers();
}

/**
 * Recupera el progreso almacenado para un área temática específica.
 */
export function getStoredProgress(areaId: ThematicAreaId): QuestProgress {
  const currentData = readStorageData();
  const areaRecord = currentData[areaId];

  const completed = areaRecord ? areaRecord.completedCollections : [];
  const existingUnlockedAt = areaRecord?.unlockedAt;

  return calculateAreaProgress(areaId, completed, existingUnlockedAt);
}

/**
 * Recupera un mapa con el progreso de las 7 áreas temáticas oficiales.
 */
export function getAllQuestsProgress(): Record<ThematicAreaId, QuestProgress> {
  const result = {} as Record<ThematicAreaId, QuestProgress>;
  for (const area of THEMATIC_AREAS) {
    result[area] = getStoredProgress(area);
  }
  return result;
}

/**
 * Registra atómicamente la aprobación de un quiz individual para su colección correspondiente.
 */
export function recordCompletedQuiz(collectionId: string): void {
  const entry = collectionManifest.find((c) => c.id === collectionId);
  if (!entry) return;

  const areaId = entry.group as ThematicAreaId;
  const currentData = readStorageData();
  const currentCompleted = currentData[areaId]?.completedCollections ?? [];

  if (!currentCompleted.includes(collectionId)) {
    const updated = [...currentCompleted, collectionId];
    saveQuestProgress(areaId, updated);
  }
}

/**
 * Obtiene la lista completa de identificadores de colecciones con quiz aprobado.
 */
export function getStoredCompletedCollections(areaId?: ThematicAreaId): string[] {
  const data = readStorageData();
  if (areaId) {
    return data[areaId]?.completedCollections ? [...data[areaId]!.completedCollections] : [];
  }
  const allIds = new Set<string>();
  for (const area of THEMATIC_AREAS) {
    const list = data[area]?.completedCollections;
    if (list) {
      for (const id of list) allIds.add(id);
    }
  }
  return Array.from(allIds);
}

export function exportRawQuestsMap(): StoredQuestsMap {
  const data = readStorageData();
  const copy: StoredQuestsMap = {};
  for (const area of THEMATIC_AREAS) {
    const entry = data[area];
    if (entry) {
      copy[area] = {
        completedCollections: [...entry.completedCollections],
        ...(entry.unlockedAt ? { unlockedAt: entry.unlockedAt } : {}),
      };
    }
  }
  return copy;
}

export function replaceQuestsProgress(data: StoredQuestsMap): void {
  const sanitized: StoredQuestsMap = {};
  for (const area of THEMATIC_AREAS) {
    const record = data[area];
    if (record && Array.isArray(record.completedCollections)) {
      const progress = calculateAreaProgress(
        area,
        record.completedCollections,
        record.unlockedAt
      );
      sanitized[area] = {
        completedCollections: Array.from(new Set(record.completedCollections)),
        ...(progress.unlockedAt ? { unlockedAt: progress.unlockedAt } : {}),
      };
    }
  }
  writeStorageData(sanitized);
  notifyQuestsSubscribers();
}

export function resetQuestsProgress(): void {
  memoryFallbackQuests = {};
  isQuotaExceededActive = false;
  if (typeof window !== "undefined" && typeof globalThis.localStorage !== "undefined") {
    try {
      globalThis.localStorage.removeItem(QUESTS_STORAGE_KEY);
    } catch {
    }
  }
  notifyQuestsSubscribers();
}
