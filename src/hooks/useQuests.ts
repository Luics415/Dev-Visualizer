/**
 * Dev Visualizer — Hook Reactivo de Quests y Logros Simbólicos (Feature F20)
 * src/hooks/useQuests.ts
 *
 * Hook de React 19 / Next.js 16 basado en `useSyncExternalStore`.
 * Garantiza:
 * - Cero discrepancias de hidratación ("hydration mismatch") en SSR/SSG.
 * - Sincronización automática multi-componente y multi-pestaña.
 * - Snapshot referencialmente estable para evitar loops de renderizado.
 * - Funciones de acción estables memorizadas con useCallback.
 */

"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  type ThematicAreaId,
  type QuestProgress,
  getAllQuestsProgress,
  getStoredCompletedCollections,
  recordCompletedQuiz as coreRecordCompletedQuiz,
  subscribeToQuests,
  THEMATIC_AREAS,
} from "@/lib/questsEngine";
import {
  type SymbolicAchievement,
  symbolicAchievements,
} from "@/data/symbolicAchievements";
import { collectionManifest } from "@/data/collectionManifest";

interface QuestsSnapshot {
  readonly questsProgress: Record<ThematicAreaId, QuestProgress>;
  readonly completedCollections: readonly string[];
}

function buildInitialServerProgress(): Record<ThematicAreaId, QuestProgress> {
  const result = {} as Record<ThematicAreaId, QuestProgress>;
  for (const area of THEMATIC_AREAS) {
    const total = collectionManifest.filter((col) => col.group === area).length;
    result[area] = {
      areaId: area,
      totalQuizzes: total,
      completedQuizzes: 0,
      percentage: 0,
      isUnlocked: false,
      unlockedAt: undefined,
    };
  }
  return result;
}

const SERVER_SNAPSHOT: QuestsSnapshot = Object.freeze({
  questsProgress: Object.freeze(buildInitialServerProgress()),
  completedCollections: Object.freeze([]),
});

let cachedSnapshot: QuestsSnapshot | null = null;

function areProgressMapsEqual(
  a: Record<ThematicAreaId, QuestProgress>,
  b: Record<ThematicAreaId, QuestProgress>
): boolean {
  if (a === b) return true;
  for (const area of THEMATIC_AREAS) {
    const pa = a[area];
    const pb = b[area];
    if (!pa || !pb) return false;
    if (
      pa.completedQuizzes !== pb.completedQuizzes ||
      pa.totalQuizzes !== pb.totalQuizzes ||
      pa.percentage !== pb.percentage ||
      pa.isUnlocked !== pb.isUnlocked ||
      pa.unlockedAt !== pb.unlockedAt
    ) {
      return false;
    }
  }
  return true;
}

function areStringArraysEqual(a: readonly string[], b: readonly string[]): boolean {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function getClientSnapshot(): QuestsSnapshot {
  const currentProgress = getAllQuestsProgress();
  const currentCompleted = getStoredCompletedCollections();

  if (
    cachedSnapshot &&
    areProgressMapsEqual(cachedSnapshot.questsProgress, currentProgress) &&
    areStringArraysEqual(cachedSnapshot.completedCollections, currentCompleted)
  ) {
    return cachedSnapshot;
  }

  cachedSnapshot = Object.freeze({
    questsProgress: Object.freeze(currentProgress),
    completedCollections: Object.freeze(currentCompleted),
  });

  return cachedSnapshot;
}

function getServerSnapshot(): QuestsSnapshot {
  return SERVER_SNAPSHOT;
}

/**
 * Hook reactivo para acceder al progreso de quests temáticos y medallas simbólicas.
 */
export function useQuests(): {
  questsProgress: Record<ThematicAreaId, QuestProgress>;
  achievements: SymbolicAchievement[];
  completedCollections: string[];
  markQuizCompleted: (collectionId: string) => void;
  isAreaUnlocked: (areaId: ThematicAreaId) => boolean;
} {
  const snapshot = useSyncExternalStore(
    subscribeToQuests,
    getClientSnapshot,
    getServerSnapshot
  );

  const markQuizCompleted = useCallback((collectionId: string): void => {
    coreRecordCompletedQuiz(collectionId);
  }, []);

  const isAreaUnlocked = useCallback(
    (areaId: ThematicAreaId): boolean => {
      return snapshot.questsProgress[areaId]?.isUnlocked === true;
    },
    [snapshot.questsProgress]
  );

  return {
    questsProgress: snapshot.questsProgress,
    achievements: symbolicAchievements as SymbolicAchievement[],
    completedCollections: snapshot.completedCollections as string[],
    markQuizCompleted,
    isAreaUnlocked,
  };
}
