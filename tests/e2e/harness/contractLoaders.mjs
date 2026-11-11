/**
 * Dev Visualizer — Strict Production Contract Loaders
 * tests/e2e/harness/contractLoaders.mjs
 * 
 * Dynamically loads and strictly validates production modules directly from src/.
 * Zero shadow mocks. Zero silent fallbacks. Zero self-certification.
 */

import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "../../..");

/**
 * Comprueba de forma no intrusiva si un archivo de producción existe físicamente en el repositorio.
 */
export function isModuleAvailable(relativePath) {
  return existsSync(resolve(PROJECT_ROOT, relativePath));
}

/**
 * Carga y valida el módulo de telemetría de producción (src/lib/telemetry.ts).
 * Contrato exigido por PROJECT.md §1.
 */
export async function getTelemetryModule() {
  const filePath = resolve(PROJECT_ROOT, "src/lib/telemetry.ts");
  if (!existsSync(filePath)) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] El archivo de producción 'src/lib/telemetry.ts' no existe en el repositorio.\n` +
      `Las pruebas de telemetría (F6 a F10) requieren la implementación real en src/lib/telemetry.ts.\n` +
      `El arnés E2E no suministra implementaciones simuladas como sustituto de código de producción ausente.`
    );
  }

  let mod;
  try {
    mod = await import("@/lib/telemetry");
  } catch (err) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] Error fatal al importar '@/lib/telemetry': ${err.message}`
    );
  }

  const requiredMethods = [
    "trackEvent",
    "trackCollectionStudy",
    "trackButtonClick",
    "trackSectionDwell",
    "trackLibraryAction",
    "trackQuizAuthEvent",
  ];

  for (const method of requiredMethods) {
    if (typeof mod[method] !== "function") {
      throw new Error(
        `[CONTRACT VIOLATION] El módulo '@/lib/telemetry' no exporta la función obligatoria '${method}' ` +
        `especificada en PROJECT.md §1.`
      );
    }
  }

  return mod;
}

/**
 * Carga y valida el módulo de autenticación client-side (src/lib/auth.ts).
 * Contrato exigido por PROJECT.md §2.
 */
export async function getAuthModule() {
  const filePath = resolve(PROJECT_ROOT, "src/lib/auth.ts");
  if (!existsSync(filePath)) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] El archivo de producción 'src/lib/auth.ts' no existe en el repositorio.\n` +
      `Las pruebas de autenticación (F12 y F13) requieren la implementación real en src/lib/auth.ts.`
    );
  }

  let mod;
  try {
    mod = await import("@/lib/auth");
  } catch (err) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] Error fatal al importar '@/lib/auth': ${err.message}`
    );
  }

  const requiredMethods = [
    "signInWithGoogle",
    "signInWithEmail",
    "signOut",
  ];

  for (const method of requiredMethods) {
    if (typeof mod[method] !== "function") {
      throw new Error(
        `[CONTRACT VIOLATION] El módulo '@/lib/auth' no exporta la función obligatoria '${method}' ` +
        `especificada en PROJECT.md §2.`
      );
    }
  }

  return mod;
}

/**
 * Carga y valida el motor de quests y logros (src/lib/questsEngine.ts).
 * Contrato exigido por PROJECT.md §3.
 */
export async function getQuestsEngineModule() {
  const filePath = resolve(PROJECT_ROOT, "src/lib/questsEngine.ts");
  if (!existsSync(filePath)) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] El archivo de producción 'src/lib/questsEngine.ts' no existe en el repositorio.\n` +
      `Las pruebas del motor de quests (F20) requieren la implementación real en src/lib/questsEngine.ts.`
    );
  }

  let mod;
  try {
    mod = await import("@/lib/questsEngine");
  } catch (err) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] Error fatal al importar '@/lib/questsEngine': ${err.message}`
    );
  }

  const requiredMethods = [
    "calculateAreaProgress",
  ];

  for (const method of requiredMethods) {
    if (typeof mod[method] !== "function") {
      throw new Error(
        `[CONTRACT VIOLATION] El módulo '@/lib/questsEngine' no exporta la función obligatoria '${method}' ` +
        `especificada en PROJECT.md §3.`
      );
    }
  }

  return mod;
}

/**
 * Carga y valida el catálogo oficial de logros simbólicos (src/data/symbolicAchievements.ts).
 * Contrato exigido por PROJECT.md §3 y ORIGINAL_REQUEST §R4.
 */
export async function getSymbolicAchievementsList() {
  const filePath = resolve(PROJECT_ROOT, "src/data/symbolicAchievements.ts");
  if (!existsSync(filePath)) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] El archivo de datos 'src/data/symbolicAchievements.ts' no existe en el repositorio.\n` +
      `Las pruebas de definición de logros (F19 y F21) requieren los datos oficiales de producción.`
    );
  }

  let mod;
  try {
    mod = await import("@/data/symbolicAchievements");
  } catch (err) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] Error fatal al importar '@/data/symbolicAchievements': ${err.message}`
    );
  }

  const list = mod.symbolicAchievements;
  if (!Array.isArray(list) || list.length !== 7) {
    throw new Error(
      `[CONTRACT VIOLATION] '@/data/symbolicAchievements' debe exportar un arreglo 'symbolicAchievements' ` +
      `con exactamente 7 logros correspondientes a las 7 áreas temáticas oficiales.`
    );
  }

  return list;
}

/**
 * Carga y valida el componente primitivo Skeleton (src/components/ui/Skeleton.tsx).
 * Contrato exigido por PROJECT.md §4 y ORIGINAL_REQUEST §R3.
 */
export async function getSkeletonModule() {
  const filePath = resolve(PROJECT_ROOT, "src/components/ui/Skeleton.tsx");
  if (!existsSync(filePath)) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] El archivo del componente 'src/components/ui/Skeleton.tsx' no existe en el repositorio.\n` +
      `Las pruebas del componente primitivo de carga (F14) requieren el componente real en src/.`
    );
  }

  let mod;
  try {
    mod = await import("@/components/ui/Skeleton");
  } catch (err) {
    throw new Error(
      `[CONTRACT INTEGRITY ERROR] Error fatal al importar '@/components/ui/Skeleton': ${err.message}`
    );
  }

  if (typeof mod.Skeleton !== "function" && typeof mod.default !== "function") {
    throw new Error(
      `[CONTRACT VIOLATION] '@/components/ui/Skeleton' debe exportar un componente funcional de React ` +
      `(Skeleton o default export).`
    );
  }

  return mod;
}
