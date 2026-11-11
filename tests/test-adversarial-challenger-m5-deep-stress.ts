/**
 * Dev Visualizer — Empirical Challenger M5 Deep Stress Suite (Iteration 2)
 * tests/test-adversarial-challenger-m5-deep-stress.ts
 *
 * Verificación empírica exhaustiva de:
 * 1. Simulación extrema de QuotaExceededError con datos previos acumulativos,
 *    recuperación de cuota y persistencia resiliente multizona.
 * 2. Invocaciones de suscriptores reactivos, desuscripción dinámica y
 *    filtrado estricto de eventos multi-pestaña (StorageEvent).
 */

import {
  QUESTS_STORAGE_KEY,
  THEMATIC_AREAS,
  saveQuestProgress,
  getStoredProgress,
  getAllQuestsProgress,
  recordCompletedQuiz,
  getStoredCompletedCollections,
  resetQuestsProgress,
  subscribeToQuests,
} from "../src/lib/questsEngine";

interface DeepFinding {
  id: string;
  name: string;
  passed: boolean;
  expected: string;
  actual: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "NONE";
}

const deepFindings: DeepFinding[] = [];

function recordDeepFinding(f: DeepFinding) {
  deepFindings.push(f);
  const tag = f.passed ? "✔ PASS" : "✖ FAIL";
  console.log(`${tag} [${f.severity}] ${f.id}: ${f.name}`);
  if (!f.passed) {
    console.log(`   Esperado: ${f.expected}`);
    console.log(`   Obtenido: ${f.actual}`);
  }
}

class DeepMockLocalStorage implements Storage {
  private store: Map<string, string> = new Map();
  public shouldThrowQuotaError = false;
  public shouldThrowSecurityError = false;
  public shouldThrowOnGet = false;

  getItem(key: string): string | null {
    if (this.shouldThrowOnGet) {
      throw new Error("SecurityError: Access to localStorage is denied.");
    }
    return this.store.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    if (this.shouldThrowQuotaError) {
      const err = new Error("QuotaExceededError: The quota has been exceeded.");
      err.name = "QuotaExceededError";
      throw err;
    }
    if (this.shouldThrowSecurityError) {
      const err = new Error("SecurityError: Storage is disabled in private browsing.");
      err.name = "SecurityError";
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

  // Helper para inspección de pruebas
  peekRaw(key: string): string | null {
    return this.store.get(key) ?? null;
  }
}

class DeepMockEventTarget {
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
      // Clona para permitir mutaciones seguras en el conjunto durante la iteración
      Array.from(set).forEach((cb) => {
        try {
          if (typeof cb === "function") {
            cb(event);
          } else if (cb && typeof cb.handleEvent === "function") {
            cb.handleEvent(event);
          }
        } catch {
          // Ignorar fallos de listener
        }
      });
    }
    return true;
  }

  listenerCount(type: string): number {
    return this.listeners.get(type)?.size ?? 0;
  }
}

export async function runDeepAdversarialSuite() {
  console.log("╔══════════════════════════════════════════════════════════════════════╗");
  console.log("║ DEV VISUALIZER — CHALLENGER 1: DEEP STRESS HARNESS (ITERACIÓN 2)      ║");
  console.log("╚══════════════════════════════════════════════════════════════════════╝\n");

  const originalWindow = globalThis.window;
  const originalLocalStorage = globalThis.localStorage;

  function setupDeepDom() {
    const mockStorage = new DeepMockLocalStorage();
    const mockWindow = new DeepMockEventTarget() as unknown as Window & typeof globalThis;
    (mockWindow as unknown as { localStorage: Storage }).localStorage = mockStorage;
    mockWindow.dispatchEvent = mockWindow.dispatchEvent.bind(mockWindow);
    mockWindow.addEventListener = mockWindow.addEventListener.bind(mockWindow);
    mockWindow.removeEventListener = mockWindow.removeEventListener.bind(mockWindow);

    globalThis.window = mockWindow;
    globalThis.localStorage = mockStorage;
    return { mockStorage, mockWindow, mockTarget: mockWindow as unknown as DeepMockEventTarget };
  }

  function teardownDeepDom() {
    globalThis.window = originalWindow;
    globalThis.localStorage = originalLocalStorage;
  }

  // ==========================================================================
  // DIMENSIÓN 1: ESTRÉS DE CUOTA, FALLBACKS EN MEMORIA Y RECUPERACIÓN
  // ==========================================================================
  console.log("--- DIMENSIÓN 1: ESTRÉS DE CUOTA Y PERSISTENCIA RESILIENTE ---");

  // 1.1 Multi-Área acumulativo bajo QuotaExceededError
  {
    const { mockStorage } = setupDeepDom();
    resetQuestsProgress();

    // Guardar progreso inicial en storage normal para Fundamentals
    saveQuestProgress("fundamentals", ["algorithms"]);
    const initialRaw = mockStorage.peekRaw(QUESTS_STORAGE_KEY);

    // Activar cuota excedida
    mockStorage.shouldThrowQuotaError = true;

    // Mutar fundamentals y además agregar progreso en languages y data bajo cuota excedida
    saveQuestProgress("fundamentals", ["algorithms", "mathematics"]);
    saveQuestProgress("languages", ["typescript", "python"]);
    recordCompletedQuiz("databases"); // Colección en 'data'

    // Consultas individuales y agregadas
    const pFundamentals = getStoredProgress("fundamentals");
    const pLanguages = getStoredProgress("languages");
    const pData = getStoredProgress("data");
    const allProgress = getAllQuestsProgress();
    const allCompleted = getStoredCompletedCollections();

    // Verificar que storage todavía conserva solo los datos viejos de fundamentals (no se actualizó por error)
    const storageRawStillOld = mockStorage.peekRaw(QUESTS_STORAGE_KEY) === initialRaw;

    const passMultiArea =
      pFundamentals.completedQuizzes === 2 &&
      pLanguages.completedQuizzes === 2 &&
      pData.completedQuizzes === 1 &&
      allProgress.fundamentals.completedQuizzes === 2 &&
      allProgress.languages.completedQuizzes === 2 &&
      allProgress.data.completedQuizzes === 1 &&
      allCompleted.includes("algorithms") &&
      allCompleted.includes("mathematics") &&
      allCompleted.includes("typescript") &&
      allCompleted.includes("python") &&
      allCompleted.includes("databases") &&
      storageRawStillOld;

    recordDeepFinding({
      id: "DEEP-QUOTA-01-MULTI-AREA-ACCUMULATION",
      name: "Acumulación multi-área bajo QuotaExceededError refleja 100% el estado en memoria para todas las áreas",
      passed: passMultiArea,
      expected: "fundamentals: 2, languages: 2, data: 1 en progreso individual y getAllQuestsProgress, con storage congelado en estado previo",
      actual: `fundamentals: ${pFundamentals.completedQuizzes}, languages: ${pLanguages.completedQuizzes}, data: ${pData.completedQuizzes}, allCompleted: ${allCompleted.length}, storageOld: ${storageRawStillOld}`,
      severity: passMultiArea ? "NONE" : "CRITICAL",
    });

    teardownDeepDom();
  }

  // 1.2 Recuperación transparente de almacenamiento cuando la cuota se libera
  {
    const { mockStorage } = setupDeepDom();
    resetQuestsProgress();

    // Estado inicial en storage
    saveQuestProgress("fundamentals", ["algorithms"]);

    // Activar error de cuota
    mockStorage.shouldThrowQuotaError = true;
    saveQuestProgress("fundamentals", ["algorithms", "mathematics"]);
    recordCompletedQuiz("nodejs"); // pertenece a 'platforms'

    // Verificar que está en memoria
    const beforeRecovery = getStoredProgress("fundamentals");
    const beforeRecoveryPlatforms = getStoredProgress("platforms");

    // LIBERACIÓN DE CUOTA (el usuario liberó espacio en disco/browser)
    mockStorage.shouldThrowQuotaError = false;

    // Próxima mutación exitosa
    saveQuestProgress("versioning", ["git"]);

    // Ahora localStorage DEBE contener todos los datos acumulados previamente en memoria
    const rawAfterRecovery = mockStorage.peekRaw(QUESTS_STORAGE_KEY);
    const parsedAfterRecovery = rawAfterRecovery ? JSON.parse(rawAfterRecovery) : null;

    const passRecovery =
      beforeRecovery.completedQuizzes === 2 &&
      beforeRecoveryPlatforms.completedQuizzes === 1 &&
      parsedAfterRecovery !== null &&
      parsedAfterRecovery.fundamentals?.completedCollections?.includes("mathematics") &&
      parsedAfterRecovery.platforms?.completedCollections?.includes("nodejs") &&
      parsedAfterRecovery.versioning?.completedCollections?.includes("git");

    recordDeepFinding({
      id: "DEEP-QUOTA-02-QUOTA-RECOVERY-SYNC",
      name: "Al restaurarse la cuota de almacenamiento, la siguiente mutación sincroniza fielmente el estado íntegro en disco",
      passed: Boolean(passRecovery),
      expected: "fundamentals, platforms y versioning persistidos en disco tras recuperación de cuota",
      actual: `parsed: ${JSON.stringify(parsedAfterRecovery)}`,
      severity: passRecovery ? "NONE" : "CRITICAL",
    });

    teardownDeepDom();
  }

  // 1.3 Excepciones no de cuota (SecurityError / Private Browsing / DOMException)
  {
    const { mockStorage } = setupDeepDom();
    resetQuestsProgress();

    mockStorage.shouldThrowSecurityError = true;

    let caughtSecurityError = false;
    try {
      saveQuestProgress("delivery", ["docker"]);
    } catch {
      caughtSecurityError = true;
    }

    const progSecurity = getStoredProgress("delivery");
    const passSecurity = !caughtSecurityError && progSecurity.completedQuizzes === 1;

    recordDeepFinding({
      id: "DEEP-QUOTA-03-SECURITY-ERROR-RESILIENCE",
      name: "SecurityError (navegación privada estricta o iframe sin permisos) degrada a memoria sin lanzar excepción no controlada",
      passed: passSecurity,
      expected: "caughtSecurityError: false, completedQuizzes: 1",
      actual: `caughtSecurityError: ${caughtSecurityError}, completedQuizzes: ${progSecurity.completedQuizzes}`,
      severity: passSecurity ? "NONE" : "HIGH",
    });

    teardownDeepDom();
  }

  // 1.4 Excepción al leer de storage (localStorage.getItem lanza)
  {
    const { mockStorage } = setupDeepDom();
    resetQuestsProgress();

    // Guardar en memoria limpia
    saveQuestProgress("data", ["sql"]);

    // Ahora simular que getItem falla
    mockStorage.shouldThrowOnGet = true;

    let readFailed = false;
    let progRead;
    try {
      progRead = getStoredProgress("data");
    } catch {
      readFailed = true;
    }

    const passReadCatch = !readFailed && progRead?.completedQuizzes === 1;

    recordDeepFinding({
      id: "DEEP-QUOTA-04-STORAGE-GET-ERROR-SAFETY",
      name: "Excepción al invocar getItem en localStorage es capturada defensivamente y devuelve memoria",
      passed: passReadCatch,
      expected: "readFailed: false, completedQuizzes: 1",
      actual: `readFailed: ${readFailed}, completedQuizzes: ${progRead?.completedQuizzes}`,
      severity: passReadCatch ? "NONE" : "HIGH",
    });

    teardownDeepDom();
  }

  // 1.5 Reset completo durante estado de cuota excedida
  {
    const { mockStorage } = setupDeepDom();
    resetQuestsProgress();

    mockStorage.shouldThrowQuotaError = true;
    saveQuestProgress("fundamentals", ["algorithms", "mathematics"]);

    // Ejecutar reset
    resetQuestsProgress();

    const afterResetFundamentals = getStoredProgress("fundamentals");
    const allAfterReset = getAllQuestsProgress();
    const passReset =
      afterResetFundamentals.completedQuizzes === 0 &&
      THEMATIC_AREAS.every((a) => allAfterReset[a].completedQuizzes === 0);

    recordDeepFinding({
      id: "DEEP-QUOTA-05-RESET-UNDER-QUOTA-ERROR",
      name: "resetQuestsProgress restablece totalmente el estado en memoria aun cuando localStorage está en cuota excedida",
      passed: passReset,
      expected: "completedQuizzes: 0 para todas las áreas tras reset",
      actual: `fundamentals: ${afterResetFundamentals.completedQuizzes}`,
      severity: passReset ? "NONE" : "CRITICAL",
    });

    teardownDeepDom();
  }

  // ==========================================================================
  // DIMENSIÓN 2: REACTIVIDAD, CONTEO EXACTO Y FILTRADO MULTI-PESTAÑA
  // ==========================================================================
  console.log("\n--- DIMENSIÓN 2: REACTIVIDAD Y SINCRONIZACIÓN DE OBSERVADORES ---");

  // 2.1 Conteo exacto 1:1 con múltiples observadores simultáneos
  {
    setupDeepDom();
    resetQuestsProgress();

    const observerCounts = [0, 0, 0, 0, 0];
    const unsubs: (() => void)[] = [];

    for (let i = 0; i < 5; i++) {
      const idx = i;
      unsubs.push(
        subscribeToQuests(() => {
          observerCounts[idx]++;
        })
      );
    }

    // Ejecutar 10 mutaciones sucesivas: 5 saveQuestProgress, 4 recordCompletedQuiz nuevos, 1 repetido (no debe mutar), 1 inexistente (no debe mutar)
    saveQuestProgress("fundamentals", ["algorithms"]); // 1
    saveQuestProgress("fundamentals", ["algorithms", "mathematics"]); // 2
    saveQuestProgress("languages", ["typescript"]); // 3
    saveQuestProgress("languages", ["typescript", "python"]); // 4
    saveQuestProgress("interfaces", ["react"]); // 5

    recordCompletedQuiz("nodejs"); // 6 (nuevo en platforms)
    recordCompletedQuiz("laravel"); // 7 (nuevo en platforms)
    recordCompletedQuiz("nodejs"); // repetido: NO debe disparar notificación adicional
    recordCompletedQuiz("non-existent-collection-id"); // inexistente: NO debe disparar notificación
    recordCompletedQuiz("databases"); // 8 (nuevo en data)
    recordCompletedQuiz("git"); // 9 (nuevo en versioning)

    // Desuscribir el observador índice 2
    unsubs[2]();

    // 1 mutación más
    recordCompletedQuiz("docker"); // 10 (nuevo en delivery)

    // Los observadores 0, 1, 3, 4 deben tener 10 llamadas exactas.
    // El observador 2 debe tener exactamente 9 llamadas.
    const passExactCount =
      observerCounts[0] === 10 &&
      observerCounts[1] === 10 &&
      observerCounts[2] === 9 &&
      observerCounts[3] === 10 &&
      observerCounts[4] === 10;

    recordDeepFinding({
      id: "DEEP-SYNC-01-EXACT-1-TO-1-INVOCATION-COUNT",
      name: "Conteo exacto 1:1 de notificaciones para múltiples observadores concurrentes con desuscripción intermedia",
      passed: passExactCount,
      expected: "[10, 10, 9, 10, 10]",
      actual: JSON.stringify(observerCounts),
      severity: passExactCount ? "NONE" : "CRITICAL",
    });

    unsubs.forEach((u) => u());
    teardownDeepDom();
  }

  // 2.2 Desuscripción durante la ejecución del callback (invariante de mutación segura de Set)
  {
    setupDeepDom();
    resetQuestsProgress();

    let unsubSelfCalled = 0;
    let otherCalled = 0;

    let unsubSelf: () => void = () => {};
    unsubSelf = subscribeToQuests(() => {
      unsubSelfCalled++;
      unsubSelf(); // se desuscribe a sí mismo en la primera llamada
    });

    const unsubOther = subscribeToQuests(() => {
      otherCalled++;
    });

    // Mutación 1
    saveQuestProgress("fundamentals", ["algorithms"]);
    // Mutación 2
    saveQuestProgress("fundamentals", ["algorithms", "mathematics"]);

    const passSelfUnsub = unsubSelfCalled === 1 && otherCalled === 2;

    recordDeepFinding({
      id: "DEEP-SYNC-02-SELF-UNSUBSCRIBE-SAFE",
      name: "Un suscriptor que se auto-desuscribe dentro de su callback no altera la iteración ni recibe mutaciones posteriores",
      passed: passSelfUnsub,
      expected: "unsubSelfCalled: 1, otherCalled: 2",
      actual: `unsubSelfCalled: ${unsubSelfCalled}, otherCalled: ${otherCalled}`,
      severity: passSelfUnsub ? "NONE" : "HIGH",
    });

    unsubOther();
    teardownDeepDom();
  }

  // 2.3 Matriz de eventos multi-pestaña: filtrado exhaustivo de tipos de StorageEvent
  {
    const { mockWindow } = setupDeepDom();
    resetQuestsProgress();

    let storageNotificationCount = 0;
    const unsub = subscribeToQuests(() => {
      storageNotificationCount++;
    });

    // Casos que NO deben disparar la suscripción:
    const spuriousEvents: unknown[] = [
      { type: "storage", key: "other_app_key" },
      { type: "storage", key: null }, // spec: clear() produce key: null
      { type: "storage", key: undefined },
      { type: "storage", key: "" },
      { type: "storage", key: `${QUESTS_STORAGE_KEY}_backup` },
      { type: "storage", key: `prefix_${QUESTS_STORAGE_KEY}` },
      { type: "custom_event" },
      { type: "storage" }, // sin propiedad key
      { type: "storage", key: 12345 },
    ];

    for (const evt of spuriousEvents) {
      mockWindow.dispatchEvent(evt as unknown as Event);
    }

    const spuriousCount = storageNotificationCount;

    // Caso legítimo que SÍ debe disparar:
    const genuineEvent = { type: "storage", key: QUESTS_STORAGE_KEY } as unknown as Event;
    mockWindow.dispatchEvent(genuineEvent);

    const passMatrix = spuriousCount === 0 && storageNotificationCount === 1;

    recordDeepFinding({
      id: "DEEP-SYNC-03-STORAGE-EVENT-KEY-EXHAUSTIVE-MATRIX",
      name: "Matriz exhaustiva de StorageEvent ignora claves nulas, vacías, prefijadas y no relacionadas",
      passed: passMatrix,
      expected: "spuriousCount: 0, finalCount: 1",
      actual: `spuriousCount: ${spuriousCount}, finalCount: ${storageNotificationCount}`,
      severity: passMatrix ? "NONE" : "CRITICAL",
    });

    unsub();
    teardownDeepDom();
  }

  // 2.4 Ciclo de vida y limpieza de EventListeners en Window al desuscribir
  {
    const { mockTarget } = setupDeepDom();
    resetQuestsProgress();

    const initialListeners = mockTarget.listenerCount("storage");
    const unsub1 = subscribeToQuests(() => {});
    const unsub2 = subscribeToQuests(() => {});

    const listenersActive = mockTarget.listenerCount("storage");
    unsub1();
    const listenersAfterOne = mockTarget.listenerCount("storage");
    unsub2();
    const listenersFinal = mockTarget.listenerCount("storage");

    const passCleanup =
      initialListeners === 0 &&
      listenersActive === 2 &&
      listenersAfterOne === 1 &&
      listenersFinal === 0;

    recordDeepFinding({
      id: "DEEP-SYNC-04-EVENT-LISTENER-LIFECYCLE-CLEANUP",
      name: "Al invocar las funciones de desuscripción se remueven limpiamente los listeners del objeto window",
      passed: passCleanup,
      expected: "initial: 0, active: 2, afterOne: 1, final: 0",
      actual: `initial: ${initialListeners}, active: ${listenersActive}, afterOne: ${listenersAfterOne}, final: ${listenersFinal}`,
      severity: passCleanup ? "NONE" : "HIGH",
    });

    teardownDeepDom();
  }

  // 2.5 Simulación de Concurrencia Cruzada Multi-Pestaña
  {
    const { mockStorage, mockWindow } = setupDeepDom();
    resetQuestsProgress();

    let tab1Notified = false;
    let tab1SeenProgress = 0;

    // En Pestaña 1 se escucha
    const unsubTab1 = subscribeToQuests(() => {
      tab1Notified = true;
      const prog = getStoredProgress("languages");
      tab1SeenProgress = prog.completedQuizzes;
    });

    // En Pestaña 2 ocurre una mutación directa a localStorage
    const p2Data = {
      languages: {
        completedCollections: ["typescript", "javascript", "python"],
      },
    };
    mockStorage.setItem(QUESTS_STORAGE_KEY, JSON.stringify(p2Data));

    // El navegador despacha StorageEvent a la ventana de Pestaña 1
    const crossTabEvent = {
      type: "storage",
      key: QUESTS_STORAGE_KEY,
      newValue: JSON.stringify(p2Data),
    } as unknown as Event;
    mockWindow.dispatchEvent(crossTabEvent);

    const passCrossTab = tab1Notified && tab1SeenProgress === 3;

    recordDeepFinding({
      id: "DEEP-SYNC-05-CROSS-TAB-DATA-CONSISTENCY",
      name: "Pestaña 1 lee correctamente el estado actualizado escrito por Pestaña 2 al recibir StorageEvent",
      passed: passCrossTab,
      expected: "tab1Notified: true, tab1SeenProgress: 3",
      actual: `tab1Notified: ${tab1Notified}, tab1SeenProgress: ${tab1SeenProgress}`,
      severity: passCrossTab ? "NONE" : "CRITICAL",
    });

    unsubTab1();
    teardownDeepDom();
  }

  // ==========================================================================
  // RESUMEN Y REPORTE
  // ==========================================================================
  console.log("\n======================================================================");
  console.log("RESUMEN DE PRUEBAS DE ESTRÉS PROFUNDO (CHALLENGER 1):");
  const total = deepFindings.length;
  const passed = deepFindings.filter((f) => f.passed).length;
  const failed = deepFindings.filter((f) => !f.passed).length;
  console.log(`Total pruebas: ${total} | Aprobadas: ${passed} | Fallidas: ${failed}`);

  if (failed > 0) {
    console.log("\nFALLOS DETECTADOS:");
    for (const f of deepFindings.filter((f) => !f.passed)) {
      console.log(`- [${f.severity}] ${f.id}: ${f.name} (Esperado: ${f.expected} | Obtenido: ${f.actual})`);
    }
  }
  console.log("======================================================================\n");

  return { total, passed, failed, findings: deepFindings };
}

runDeepAdversarialSuite().then((result) => {
  if (result.failed > 0) {
    process.exit(1);
  }
  process.exit(0);
}).catch((err) => {
  console.error("Error fatal en deep stress suite:", err);
  process.exit(1);
});
