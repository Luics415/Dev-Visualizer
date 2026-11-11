/**
 * Dev Visualizer — Empirical Challenger M5-1 Adversarial Stress Suite
 * tests/test-adversarial-challenger-m5-1.ts
 *
 * Pruebas adversariales empíricas sobre:
 * 1. Límites numéricos y matemáticos de progreso (0%, 1%, 99%, 100%, >100%, listas vacías, colecciones de otras áreas).
 * 2. Invariante estricta de unlockedAt (undefined cuando < 100, timestamp ISO válido cuando === 100).
 * 3. Simulación de QuotaExceededError en localStorage y fallback en memoria.
 * 4. Sincronización multi-pestaña y ciclo de vida de suscripciones reactivas.
 * 5. Corrupción de datos y sandbox SSR/restringido.
 */

import { collectionManifest, collectionGroupMeta } from "../src/data/collectionManifest";
import {
  symbolicAchievements,
  getSymbolicAchievementByArea,
  getSymbolicAchievementById,
  type ThematicAreaId,
} from "../src/data/symbolicAchievements";
import {
  QUESTS_STORAGE_KEY,
  THEMATIC_AREAS,
  calculateAreaProgress,
  saveQuestProgress,
  getStoredProgress,
  recordCompletedQuiz,
  getStoredCompletedCollections,
  resetQuestsProgress,
  subscribeToQuests,
} from "../src/lib/questsEngine";

export interface StressFinding {
  id: string;
  name: string;
  passed: boolean;
  expected: string;
  actual: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "NONE";
}

export const findings: StressFinding[] = [];

function recordFinding(f: StressFinding) {
  findings.push(f);
  const tag = f.passed ? "✔ PASS" : "✖ FAIL";
  console.log(`${tag} [${f.severity}] ${f.id}: ${f.name}`);
  if (!f.passed) {
    console.log(`   Esperado: ${f.expected}`);
    console.log(`   Obtenido: ${f.actual}`);
  }
}

// Simulador de Mock Storage para aislamiento
class MockLocalStorage {
  private store: Map<string, string> = new Map();
  public shouldThrowQuotaError = false;

  getItem(key: string): string | null {
    return this.store.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    if (this.shouldThrowQuotaError) {
      const err = new Error("QuotaExceededError: The quota has been exceeded.");
      err.name = "QuotaExceededError";
      throw err;
    }
    this.store.set(key, String(value));
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }

  get length(): number {
    return this.store.size;
  }

  key(index: number): string | null {
    return Array.from(this.store.keys())[index] ?? null;
  }
}

class MockEventTarget {
  private listeners: Map<string, Set<EventListenerOrEventListenerObject>> = new Map();

  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    _options?: boolean | AddEventListenerOptions
  ): void {
    if (!listener) return;
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type)!.add(listener);
  }

  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    _options?: boolean | EventListenerOptions
  ): void {
    if (!listener) return;
    this.listeners.get(type)?.delete(listener);
  }

  dispatchEvent(event: Event): boolean {
    const set = this.listeners.get(event.type);
    if (set) {
      set.forEach((cb) => {
        try {
          if (typeof cb === "function") {
            cb(event);
          } else if (cb && typeof cb.handleEvent === "function") {
            cb.handleEvent(event);
          }
        } catch {
          // ignore error in handler
        }
      });
    }
    return true;
  }
}

export async function runAdversarialStressSuite() {
  console.log("╔══════════════════════════════════════════════════════════════════════╗");
  console.log("║ DEV VISUALIZER — CHALLENGER M5-1: SUITE ADVERSARIAL DE ESTRÉS        ║");
  console.log("╚══════════════════════════════════════════════════════════════════════╝\n");

  const originalWindow = globalThis.window;
  const originalLocalStorage = globalThis.localStorage;

  function setupMockDom() {
    const mockStorage = new MockLocalStorage();
    const mockWindow = new MockEventTarget() as unknown as Window & typeof globalThis;
    (mockWindow as unknown as { localStorage: Storage }).localStorage = mockStorage as unknown as Storage;
    mockWindow.dispatchEvent = mockWindow.dispatchEvent.bind(mockWindow);
    mockWindow.addEventListener = mockWindow.addEventListener.bind(mockWindow);
    mockWindow.removeEventListener = mockWindow.removeEventListener.bind(mockWindow);

    globalThis.window = mockWindow;
    globalThis.localStorage = mockStorage as unknown as Storage;
    return { mockStorage, mockWindow };
  }

  function teardownMockDom() {
    globalThis.window = originalWindow;
    globalThis.localStorage = originalLocalStorage;
  }

  // ==========================================================================
  // BLOQUE 1: ESTRÉS MATEMÁTICO Y LÍMITES NUMÉRICOS (0%, 1%, 99%, 100%, >100%)
  // ==========================================================================
  console.log("--- BLOQUE 1: ESTRÉS MATEMÁTICO Y LÍMITES NUMÉRICOS ---");

  // 1.1 Límites de lista vacía y 0%
  for (const area of THEMATIC_AREAS) {
    const prog = calculateAreaProgress(area, []);
    const pass = prog.percentage === 0 && !prog.isUnlocked && prog.completedQuizzes === 0 && prog.unlockedAt === undefined;
    recordFinding({
      id: `MATH-01-EMPTY-${area}`,
      name: `Progreso 0% en lista vacía para área ${area}`,
      passed: pass,
      expected: "percentage: 0, isUnlocked: false, completedQuizzes: 0, unlockedAt: undefined",
      actual: JSON.stringify(prog),
      severity: pass ? "NONE" : "CRITICAL",
    });
  }

  // 1.2 Colecciones de otras áreas ajenas (infiltración cruzada)
  {
    const fundamentalsCollections = collectionManifest.filter((c) => c.group === "fundamentals").map((c) => c.id);
    const alienCollections = collectionManifest.filter((c) => c.group !== "fundamentals").map((c) => c.id);

    // Pasar colecciones ajenas al área fundamentals
    const progAlien = calculateAreaProgress("fundamentals", alienCollections);
    const passAlien = progAlien.completedQuizzes === 0 && progAlien.percentage === 0 && !progAlien.isUnlocked;
    recordFinding({
      id: "MATH-02-CROSS-AREA-POLLUTION",
      name: "Infiltración de colecciones de otras áreas no debe sumar avance",
      passed: passAlien,
      expected: "completedQuizzes: 0, percentage: 0, isUnlocked: false",
      actual: `completedQuizzes: ${progAlien.completedQuizzes}, percentage: ${progAlien.percentage}`,
      severity: passAlien ? "NONE" : "HIGH",
    });

    // Mezcla de 1 válida de fundamentals con 20 ajenas
    const mixed = [fundamentalsCollections[0], ...alienCollections];
    const progMixed = calculateAreaProgress("fundamentals", mixed);
    const passMixed = progMixed.completedQuizzes === 1 && progMixed.percentage === 20;
    recordFinding({
      id: "MATH-03-MIXED-COLLECTIONS",
      name: "Mezcla de colecciones válidas y ajenas filtra con exactitud",
      passed: passMixed,
      expected: "completedQuizzes: 1, percentage: 20",
      actual: `completedQuizzes: ${progMixed.completedQuizzes}, percentage: ${progMixed.percentage}`,
      severity: passMixed ? "NONE" : "HIGH",
    });
  }

  // 1.3 Sobresaturación y duplicados masivos (>100% de inputs)
  {
    const fundamentalsCollections = collectionManifest.filter((c) => c.group === "fundamentals").map((c) => c.id);
    const bloatedList = Array(50).fill(fundamentalsCollections).flat();
    bloatedList.push("fake-id-1", "fake-id-2", "undefined", "null", "");

    const progBloated = calculateAreaProgress("fundamentals", bloatedList);
    const passBloated =
      progBloated.completedQuizzes === fundamentalsCollections.length &&
      progBloated.percentage === 100 &&
      progBloated.isUnlocked === true &&
      typeof progBloated.unlockedAt === "string";

    recordFinding({
      id: "MATH-04-DUPLICATE-SATURATION",
      name: "Saturación con 250+ duplicados e IDs inventados no supera el 100%",
      passed: passBloated,
      expected: "completedQuizzes: 5, percentage: 100, isUnlocked: true",
      actual: `completedQuizzes: ${progBloated.completedQuizzes}, percentage: ${progBloated.percentage}, unlocked: ${progBloated.isUnlocked}`,
      severity: passBloated ? "NONE" : "CRITICAL",
    });
  }

  // 1.4 Verificación de límites de redondeo: ¿Puede (N-1)/N redondear a 100% en alguna de las 7 áreas?
  for (const area of THEMATIC_AREAS) {
    const collections = collectionManifest.filter((c) => c.group === area).map((c) => c.id);
    const total = collections.length;
    const almostAll = collections.slice(0, total - 1);
    const prog = calculateAreaProgress(area, almostAll);

    const passAlmost = prog.percentage < 100 && prog.isUnlocked === false && prog.unlockedAt === undefined;
    recordFinding({
      id: `MATH-05-ALMOST-COMPLETE-${area}`,
      name: `Caso límite (N-1)/N en área ${area} (${total - 1}/${total}) nunca redondea a 100%`,
      passed: passAlmost,
      expected: "percentage < 100, isUnlocked: false, unlockedAt: undefined",
      actual: `percentage: ${prog.percentage}, isUnlocked: ${prog.isUnlocked}, unlockedAt: ${String(prog.unlockedAt)}`,
      severity: passAlmost ? "NONE" : "CRITICAL",
    });
  }

  // 1.5 Avance mínimo (1 de N) no redondea a 0%
  for (const area of THEMATIC_AREAS) {
    const collections = collectionManifest.filter((c) => c.group === area).map((c) => c.id);
    const total = collections.length;
    const singleOne = collections.slice(0, 1);
    const prog = calculateAreaProgress(area, singleOne);

    const expectedPct = Math.round((1 / total) * 100);
    const passSingle = prog.percentage === expectedPct && prog.completedQuizzes === 1 && !prog.isUnlocked;
    recordFinding({
      id: `MATH-06-MINIMUM-PROGRESS-${area}`,
      name: `Progreso mínimo (1/${total}) en ${area} equivale a ${expectedPct}%`,
      passed: passSingle,
      expected: `percentage: ${expectedPct}, completedQuizzes: 1`,
      actual: `percentage: ${prog.percentage}, completedQuizzes: ${prog.completedQuizzes}`,
      severity: passSingle ? "NONE" : "MEDIUM",
    });
  }

  // ==========================================================================
  // BLOQUE 2: INVARIANTE ESTRICTA DE unlockedAt
  // ==========================================================================
  console.log("\n--- BLOQUE 2: INVARIANTE ESTRICTA DE unlockedAt ---");

  // 2.1 unlockedAt DEBE ser undefined si isUnlocked es false
  {
    const fakeTimestamp = "2025-01-01T00:00:00.000Z";
    const progInjected = calculateAreaProgress("fundamentals", ["algorithms"], fakeTimestamp);
    const passInjected = progInjected.unlockedAt === undefined && !progInjected.isUnlocked;
    recordFinding({
      id: "INV-01-PREVENT-FORCED-UNLOCKEDAT",
      name: "Inyección espuria de existingUnlockedAt con progreso incompleto debe resultar en undefined",
      passed: passInjected,
      expected: "unlockedAt: undefined",
      actual: `unlockedAt: ${String(progInjected.unlockedAt)}`,
      severity: passInjected ? "NONE" : "CRITICAL",
    });
  }

  // 2.2 unlockedAt DEBE preservar existingUnlockedAt cuando isUnlocked es true
  {
    const originalTimestamp = "2026-05-10T14:30:00.000Z";
    const allFundamentals = collectionManifest.filter((c) => c.group === "fundamentals").map((c) => c.id);
    const progPreserved = calculateAreaProgress("fundamentals", allFundamentals, originalTimestamp);
    const passPreserved = progPreserved.unlockedAt === originalTimestamp && progPreserved.isUnlocked === true;
    recordFinding({
      id: "INV-02-PRESERVE-GENUINE-UNLOCKEDAT",
      name: "Preservación del timestamp ISO original al recalcular progreso 100%",
      passed: passPreserved,
      expected: `unlockedAt: ${originalTimestamp}`,
      actual: `unlockedAt: ${String(progPreserved.unlockedAt)}`,
      severity: passPreserved ? "NONE" : "HIGH",
    });
  }

  // 2.3 unlockedAt generado debe ser un ISO 8601 válido y reciente
  {
    const allDelivery = collectionManifest.filter((c) => c.group === "delivery").map((c) => c.id);
    const beforeTime = Date.now();
    const progNew = calculateAreaProgress("delivery", allDelivery);
    const afterTime = Date.now();

    const parsedTime = Date.parse(progNew.unlockedAt ?? "");
    const isValidIso = !isNaN(parsedTime) && parsedTime >= beforeTime - 1000 && parsedTime <= afterTime + 1000;
    recordFinding({
      id: "INV-03-VALID-ISO8601-FORMAT",
      name: "Generación de timestamp ISO 8601 válido y congruente en nuevo desbloqueo",
      passed: isValidIso,
      expected: "Timestamp ISO 8601 parseable en rango actual",
      actual: `unlockedAt: ${String(progNew.unlockedAt)}`,
      severity: isValidIso ? "NONE" : "CRITICAL",
    });
  }

  // ==========================================================================
  // BLOQUE 3: SIMULACIÓN DE QuotaExceededError Y MEMORY FALLBACK
  // ==========================================================================
  console.log("\n--- BLOQUE 3: SIMULACIÓN DE QuotaExceededError Y FALLBACK EN MEMORIA ---");

  // 3.1 Fallback inmediato ante QuotaExceededError en storage limpio
  {
    const { mockStorage } = setupMockDom();
    resetQuestsProgress();
    mockStorage.shouldThrowQuotaError = true;

    let didThrow = false;
    try {
      saveQuestProgress("data", ["databases", "sql"]);
    } catch {
      didThrow = true;
    }

    const storedProg = getStoredProgress("data");
    const storedCompleted = getStoredCompletedCollections("data");

    const passQuotaClean = !didThrow && storedProg.completedQuizzes === 2 && storedCompleted.length === 2;
    recordFinding({
      id: "QUOTA-01-STORAGE-CLEAN-FALLBACK",
      name: "QuotaExceededError en almacenamiento inicial degrada transparentemente a memoria sin crasheo",
      passed: passQuotaClean,
      expected: "didThrow: false, completedQuizzes: 2, storedCompleted: 2",
      actual: `didThrow: ${didThrow}, completedQuizzes: ${storedProg.completedQuizzes}, storedCompleted: ${storedCompleted.length}`,
      severity: passQuotaClean ? "NONE" : "CRITICAL",
    });

    teardownMockDom();
  }

  // 3.2 QuotaExceededError tras guardado previo (Actualización con cuota excedida)
  {
    const { mockStorage } = setupMockDom();
    resetQuestsProgress();

    // Paso A: Guardar 1 colección exitosamente en localStorage
    saveQuestProgress("fundamentals", ["algorithms"]);

    // Paso B: Activar fallo de cuota en subsecuentes setItem
    mockStorage.shouldThrowQuotaError = true;

    // Guardar segunda colección
    let threwOnUpdate = false;
    try {
      saveQuestProgress("fundamentals", ["algorithms", "mathematics"]);
    } catch {
      threwOnUpdate = true;
    }

    // Paso C: Consultar progreso almacenado
    const afterQuota = getStoredProgress("fundamentals");
    const afterCompleted = getStoredCompletedCollections("fundamentals");

    const passQuotaUpdate = !threwOnUpdate && afterQuota.completedQuizzes === 2 && afterCompleted.includes("mathematics");
    recordFinding({
      id: "QUOTA-02-SUBSEQUENT-UPDATE-FALLBACK",
      name: "Actualización bajo QuotaExceededError refleja el estado en memoria sin revertir a datos viejos de storage",
      passed: passQuotaUpdate,
      expected: "completedQuizzes: 2, completedCollections includes 'mathematics'",
      actual: `completedQuizzes: ${afterQuota.completedQuizzes}, collections: ${JSON.stringify(afterCompleted)}`,
      severity: passQuotaUpdate ? "NONE" : "HIGH",
    });

    teardownMockDom();
  }

  // 3.3 Tolerancia a JSON corrupto en localStorage
  {
    const { mockStorage } = setupMockDom();
    resetQuestsProgress();

    mockStorage.setItem(QUESTS_STORAGE_KEY, "{MALFORMED_JSON_CORRUPTED_DATA!!");

    let corruptThrow = false;
    let fallbackProg;
    try {
      fallbackProg = getStoredProgress("languages");
    } catch {
      corruptThrow = true;
    }

    const passCorrupt = !corruptThrow && fallbackProg?.percentage === 0 && fallbackProg?.completedQuizzes === 0;
    recordFinding({
      id: "QUOTA-03-CORRUPTED-JSON-TOLERANCE",
      name: "JSON corrupto en localStorage no provoca excepción y retorna estado seguro",
      passed: passCorrupt,
      expected: "corruptThrow: false, percentage: 0",
      actual: `corruptThrow: ${corruptThrow}, percentage: ${String(fallbackProg?.percentage)}`,
      severity: passCorrupt ? "NONE" : "HIGH",
    });

    teardownMockDom();
  }

  // 3.4 Entorno SSR puro (window y localStorage undefined)
  {
    const originalWin = globalThis.window;
    const originalLS = globalThis.localStorage;

    (globalThis as unknown as { window?: Window }).window = undefined;
    (globalThis as unknown as { localStorage?: Storage }).localStorage = undefined;

    let ssrThrow = false;
    let ssrProg;
    try {
      resetQuestsProgress();
      saveQuestProgress("versioning", ["git"]);
      ssrProg = getStoredProgress("versioning");
    } catch {
      ssrThrow = true;
    }

    const passSsr = !ssrThrow && ssrProg?.completedQuizzes === 1;
    recordFinding({
      id: "QUOTA-04-SSR-UNDEFINED-SAFETY",
      name: "Compatibilidad en SSR sin window ni localStorage",
      passed: passSsr,
      expected: "ssrThrow: false, completedQuizzes: 1",
      actual: `ssrThrow: ${ssrThrow}, completedQuizzes: ${String(ssrProg?.completedQuizzes)}`,
      severity: passSsr ? "NONE" : "CRITICAL",
    });

    globalThis.window = originalWin;
    globalThis.localStorage = originalLS;
  }

  // ==========================================================================
  // BLOQUE 4: SINCRONIZACIÓN MULTI-PESTAÑA Y EVENTOS REACTIVOS
  // ==========================================================================
  console.log("\n--- BLOQUE 4: SINCRONIZACIÓN MULTI-PESTAÑA Y EVENTOS REACTIVOS ---");

  // 4.1 Notificación limpia (sin duplicados) a suscriptores locales al guardar progreso
  {
    setupMockDom();
    resetQuestsProgress();

    let notificationCount = 0;
    const unsubscribe = subscribeToQuests(() => {
      notificationCount++;
    });

    saveQuestProgress("data", ["databases"]);
    recordCompletedQuiz("algorithms");

    // Exactamente 2 operaciones -> exactamente 2 notificaciones (1 por cada mutación)
    const passNotify = notificationCount === 2;
    recordFinding({
      id: "SYNC-01-LOCAL-SUBSCRIBERS-TRIGGERED",
      name: "Los suscriptores locales se invocan exactamente una vez por cada guardado sin doble notificación",
      passed: passNotify,
      expected: "notificationCount: 2",
      actual: `notificationCount: ${notificationCount}`,
      severity: passNotify ? "NONE" : "HIGH",
    });

    unsubscribe();
    teardownMockDom();
  }

  // 4.2 Reacción a eventos StorageEvent externos (multi-pestaña)
  {
    const { mockWindow } = setupMockDom();
    resetQuestsProgress();

    let multiTabCount = 0;
    const unsubscribe = subscribeToQuests(() => {
      multiTabCount++;
    });

    // Simular evento storage de otra pestaña para QUESTS_STORAGE_KEY
    const storageEvent = { type: "storage", key: QUESTS_STORAGE_KEY } as unknown as Event;
    mockWindow.dispatchEvent(storageEvent);

    // Simular evento storage para una clave no relacionada (ej. "theme")
    const unrelatedEvent = { type: "storage", key: "unrelated_theme_key" } as unknown as Event;
    mockWindow.dispatchEvent(unrelatedEvent);

    const passMultiTab = multiTabCount === 1;
    recordFinding({
      id: "SYNC-03-MULTI-TAB-STORAGE-FILTERING",
      name: "StorageEvent multi-pestaña solo activa suscripción para la clave de quests",
      passed: passMultiTab,
      expected: "multiTabCount: 1",
      actual: `multiTabCount: ${multiTabCount}`,
      severity: passMultiTab ? "NONE" : "HIGH",
    });

    unsubscribe();
    teardownMockDom();
  }

  // 4.3 Resiliencia ante suscriptores erróneos
  {
    setupMockDom();
    resetQuestsProgress();

    let healthyCalled = false;
    const unsubFaulty = subscribeToQuests(() => {
      throw new Error("Simulated buggy consumer error");
    });
    const unsubHealthy = subscribeToQuests(() => {
      healthyCalled = true;
    });

    let saveFailed = false;
    try {
      saveQuestProgress("platforms", ["node"]);
    } catch {
      saveFailed = true;
    }

    const passResilient = !saveFailed && healthyCalled;
    recordFinding({
      id: "SYNC-04-FAULTY-SUBSCRIBER-ISOLATION",
      name: "Excepción en un suscriptor no rompe el flujo ni evita la notificación de los demás",
      passed: passResilient,
      expected: "saveFailed: false, healthyCalled: true",
      actual: `saveFailed: ${saveFailed}, healthyCalled: ${healthyCalled}`,
      severity: passResilient ? "NONE" : "MEDIUM",
    });

    unsubFaulty();
    unsubHealthy();
    teardownMockDom();
  }

  // ==========================================================================
  // BLOQUE 5: CATÁLOGO DE LOGROS Y BIYECTIVIDAD (src/data/symbolicAchievements.ts)
  // ==========================================================================
  console.log("\n--- BLOQUE 5: INTEGRIDAD DEL CATÁLOGO DE LOGROS ---");

  // 5.1 Biyectividad estricta contra collectionGroupMeta
  {
    const metaKeys = Object.keys(collectionGroupMeta);
    const achievementAreaIds = symbolicAchievements.map((a) => a.areaId);
    const matchMeta =
      metaKeys.length === 7 &&
      achievementAreaIds.length === 7 &&
      metaKeys.every((k) => achievementAreaIds.includes(k as ThematicAreaId));

    recordFinding({
      id: "CAT-01-BIJECTIVE-AREAS",
      name: "Biyectividad exacta 1:1 entre colección de áreas y catálogo de medallas",
      passed: matchMeta,
      expected: "7 áreas correspondientes biyectivamente",
      actual: `meta: ${metaKeys.length}, achievements: ${achievementAreaIds.length}`,
      severity: matchMeta ? "NONE" : "CRITICAL",
    });
  }

  // 5.2 Helper methods: getSymbolicAchievementByArea y getSymbolicAchievementById
  {
    let allHelpersWork = true;
    for (const a of symbolicAchievements) {
      const byArea = getSymbolicAchievementByArea(a.areaId);
      const byId = getSymbolicAchievementById(a.id);
      if (byArea?.id !== a.id || byId?.areaId !== a.areaId) {
        allHelpersWork = false;
        break;
      }
    }

    const invalidAreaLookup = getSymbolicAchievementByArea("invalid-area" as unknown as ThematicAreaId);
    const invalidIdLookup = getSymbolicAchievementById("invalid-id");
    const passHelpers = allHelpersWork && invalidAreaLookup === undefined && invalidIdLookup === undefined;

    recordFinding({
      id: "CAT-02-HELPER-METHODS",
      name: "Funciones getSymbolicAchievementByArea y getSymbolicAchievementById son robustas",
      passed: passHelpers,
      expected: "allHelpersWork: true, lookups inválidos retornan undefined",
      actual: `passHelpers: ${passHelpers}`,
      severity: passHelpers ? "NONE" : "HIGH",
    });
  }

  // ==========================================================================
  // RESUMEN Y DICTAMEN FINAL
  // ==========================================================================
  console.log("\n======================================================================");
  console.log("RESUMEN DE PRUEBAS ADVERSARIALES:");
  const total = findings.length;
  const passed = findings.filter((f) => f.passed).length;
  const failed = findings.filter((f) => !f.passed).length;
  console.log(`Total pruebas: ${total} | Aprobadas: ${passed} | Fallidas: ${failed}`);

  if (failed > 0) {
    console.log("\nFALLOS DETECTADOS:");
    for (const f of findings.filter((f) => !f.passed)) {
      console.log(`- [${f.severity}] ${f.id}: ${f.name} (Esperado: ${f.expected} | Obtenido: ${f.actual})`);
    }
  }
  console.log("======================================================================\n");

  return { total, passed, failed, findings };
}

runAdversarialStressSuite().then(() => {
  process.exit(0);
}).catch((err) => {
  console.error("Error fatal durante ejecución:", err);
  process.exit(1);
});
