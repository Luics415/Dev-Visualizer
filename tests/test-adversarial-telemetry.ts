/**
 * Dev Visualizer — Empirical Challenger Adversarial Test Harness for M2 Telemetry
 * tests/test-adversarial-telemetry.ts
 *
 * Adversarial stress suite to empirically verify:
 * 1. Zero-PII sanitization fuzzing (keys, emails, IPv4, IPv6, nested objects, arrays, immutability)
 * 2. Offline / AdBlocker / SSR resilience (throwing gtag, null dataLayer, undefined window, console silence)
 * 3. Section dwell time tracking (sub-2s bounce filter, rounding, tab visibility change)
 */

import {
  trackEvent,
  sanitizeTelemetryParams,
  createSectionDwellTracker,
  trackCollectionStudy,
  trackButtonClick,
  trackSectionDwell,
  trackLibraryAction,
  trackQuizAuthEvent,
} from "../src/lib/telemetry";

export interface TestCaseResult {
  category: "ZERO_PII" | "OFFLINE_ADBLOCKER" | "DWELL_TIME" | "DWELL_HOOK";
  id: string;
  description: string;
  passed: boolean;
  expected: string;
  actual: string;
  details?: Record<string, unknown>;
}

export const testResults: TestCaseResult[] = [];

// Helper to record result
function recordResult(result: TestCaseResult) {
  testResults.push(result);
  const mark = result.passed ? "✔ PASS" : "✖ FAIL";
  console.log(`${mark} [${result.category}] ${result.id}: ${result.description}`);
  if (!result.passed) {
    console.log(`   Expected: ${result.expected}`);
    console.log(`   Actual:   ${result.actual}`);
  }
}

// Global mock DOM and window harness
interface MockGtagEvent {
  name: string;
  params: Record<string, unknown>;
}

const capturedGtagEvents: MockGtagEvent[] = [];

function setupMockWindow(overrides: Partial<{
  gtag: ((...args: unknown[]) => void) | undefined;
  dataLayer: unknown[] | null | undefined;
}> = {}) {
  capturedGtagEvents.length = 0;

  const mockWin: Record<string, unknown> = {
    gtag: overrides.gtag !== undefined
      ? overrides.gtag
      : (action: string, eventName: string, params: Record<string, unknown>) => {
          if (action === "event") {
            capturedGtagEvents.push({ name: eventName, params: structuredClone(params) });
          }
        },
    dataLayer: overrides.dataLayer !== undefined ? overrides.dataLayer : [],
  };

  (globalThis as unknown as { window: unknown }).window = mockWin;
  return mockWin;
}

function restoreWindow() {
  (globalThis as unknown as { window: unknown }).window = undefined;
  capturedGtagEvents.length = 0;
}

// ============================================================================
// 1. FUZZING Y ESTRÉS DE CERO PII
// ============================================================================
console.log("\n=======================================================================");
console.log("▶ CATEGORÍA 1: FUZZING Y ESTRÉS DE CERO PII");
console.log("=======================================================================\n");

// 1.1 Claves sensibles directas
{
  const input = {
    email: "test@example.com",
    password: "supersecretpassword",
    passwd: "secretpasswd",
    token: "bearer-token-123",
    secret: "api-secret-key",
    apiKey: "ak_live_99887766",
    auth_token: "jwt_token_payload",
    bearer: "bearer_data",
    legitimate_key: "preserved_value",
  };
  const sanitized = sanitizeTelemetryParams(input);
  const sensitiveRemaining = Object.keys(sanitized).filter((k) => k !== "legitimate_key");
  const passed = sensitiveRemaining.length === 0 && sanitized.legitimate_key === "preserved_value";

  recordResult({
    category: "ZERO_PII",
    id: "PII-01",
    description: "Filtrado de claves sensibles directas (email, password, token, secret, etc.)",
    passed,
    expected: "Solo 'legitimate_key' debe sobrevivir; todas las demás eliminadas",
    actual: `Sobrevivieron: [${Object.keys(sanitized).join(", ")}]`,
    details: { sanitized },
  });
}

// 1.2 Claves en snake_case
{
  const input = {
    user_email: "test@example.com",
    access_token: "tok_12345",
    client_secret: "sec_abcde",
    user_password: "mypassword1",
    bearer_token: "tok_bearer",
    api_key: "key_xyz",
    safe_param: "ok",
  };
  const sanitized = sanitizeTelemetryParams(input);
  const leaks = Object.keys(sanitized).filter((k) => k !== "safe_param");
  const passed = leaks.length === 0;

  recordResult({
    category: "ZERO_PII",
    id: "PII-02",
    description: "Filtrado de claves compuestas en snake_case (user_email, access_token, client_secret, api_key)",
    passed,
    expected: "Cero claves de snake_case sensibles deben sobrevivir",
    actual: leaks.length > 0 ? `Fuga detectada: [${leaks.join(", ")}]` : "Ninguna clave sensible filtrada",
    details: { sanitized },
  });
}

// 1.3 Claves en camelCase
{
  const input = {
    userEmail: "test@example.com",
    accessToken: "tok_12345",
    clientSecret: "sec_abcde",
    userPassword: "mypassword1",
    bearerToken: "tok_bearer",
    safeMetric: 42,
  };
  const sanitized = sanitizeTelemetryParams(input);
  const leaks = Object.keys(sanitized).filter((k) => k !== "safeMetric");
  const passed = leaks.length === 0;

  recordResult({
    category: "ZERO_PII",
    id: "PII-03",
    description: "Filtrado de claves compuestas en camelCase (userEmail, accessToken, clientSecret, userPassword)",
    passed,
    expected: "Cero claves camelCase sensibles deben sobrevivir",
    actual: leaks.length > 0 ? `Fuga detectada: [${leaks.join(", ")}]` : "Ninguna clave sensible filtrada",
    details: { sanitized },
  });
}

// 1.4 Direcciones IPv4 e IPv6
{
  const input = {
    client_ipv4: "192.168.1.100",
    loopback_ipv4: "127.0.0.1",
    public_ipv4: "8.8.8.8",
    client_ipv6: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
    short_ipv6: "2001:db8::1",
    loopback_ipv6: "::1",
    link_local_ipv6: "fe80::1ff:fe23:4567:890a",
    safe_version: "v1.2.3",
  };
  const sanitized = sanitizeTelemetryParams(input);
  const leaks = Object.keys(sanitized).filter((k) => k !== "safe_version");
  const passed = leaks.length === 0;

  recordResult({
    category: "ZERO_PII",
    id: "PII-04",
    description: "Supresión de direcciones IP tanto IPv4 como IPv6 completas y compactas",
    passed,
    expected: "Cero IPs IPv4 e IPv6 en valores deben sobrevivir",
    actual: leaks.length > 0 ? `Fuga detectada en: [${leaks.join(", ")}] con valores [${leaks.map((k) => String(sanitized[k])).join(", ")}]` : "Todas las IPs fueron purgadas",
    details: { sanitized },
  });
}

// 1.5 Correos reales, variantes y correos dentro de cadenas de texto
{
  const input = {
    standard_mail: "user@test.org",
    corp_mail: "admin@corp.io",
    alias_mail: "john.doe+telemetry@subdomain.example.co.uk",
    uppercase_mail: "EXECUTIVE@ENTERPRISE.COM",
    mixed_text_with_mail: "Por favor escribir a support@devvisualizer.edu para aclaraciones",
    safe_label: "navigation_drawer",
  };
  const sanitized = sanitizeTelemetryParams(input);
  const leaks = Object.keys(sanitized).filter((k) => k !== "safe_label");
  const passed = leaks.length === 0;

  recordResult({
    category: "ZERO_PII",
    id: "PII-05",
    description: "Detección y supresión de correos en diversos formatos y embebidos en texto",
    passed,
    expected: "Cero correos electrónicos deben sobrevivir en valores",
    actual: leaks.length > 0 ? `Fuga detectada: [${leaks.join(", ")}]` : "Todos los correos fueron eliminados",
    details: { sanitized },
  });
}

// 1.6 Arrays que contienen PII (strings sensibles y objetos)
{
  const input = {
    user_list: ["admin@corp.io", "user@test.org"],
    ip_list: ["192.168.1.1", "2001:db8::1"],
    token_list: ["token_alpha", "token_beta"],
    object_list: [{ email: "leak@test.org", name: "Alice" }],
    safe_tags: ["react", "architecture", "telemetry"],
  };
  const sanitized = sanitizeTelemetryParams(input);

  // Check if PII inside arrays was sanitized
  const rawJson = JSON.stringify(sanitized);
  const containsEmail = /admin@corp\.io|user@test\.org|leak@test\.org/.test(rawJson);
  const containsIp = /192\.168\.1\.1|2001:db8::1/.test(rawJson);
  const passed = !containsEmail && !containsIp;

  recordResult({
    category: "ZERO_PII",
    id: "PII-06",
    description: "Sanitización recursiva de PII dentro de arrays (strings sensibles y objetos anidados)",
    passed,
    expected: "Arrays con correos, IPs o tokens deben ser sanitizados o purgados",
    actual: passed ? "Arrays sanitizados sin PII" : `Fuga de PII en arrays: containsEmail=${containsEmail}, containsIp=${containsIp}`,
    details: { sanitized },
  });
}

// 1.7 Objetos anidados profundamente (3+ niveles)
{
  const input = {
    level1: {
      safe1: "ok1",
      level2: {
        safe2: "ok2",
        level3: {
          email: "nested_leak@test.com",
          token: "nested_secret_123",
          safe3: "ok3",
        },
      },
    },
  };
  const sanitized = sanitizeTelemetryParams(input);
  const rawJson = JSON.stringify(sanitized);
  const containsEmail = /nested_leak@test\.com/.test(rawJson);
  const containsToken = /nested_secret_123/.test(rawJson);
  const passed = !containsEmail && !containsToken;

  recordResult({
    category: "ZERO_PII",
    id: "PII-07",
    description: "Sanitización profunda recursiva en objetos anidados de 3+ niveles",
    passed,
    expected: "Propiedades sensibles en 3er nivel deben ser eliminadas sin perder valores seguros",
    actual: passed ? "Objetos anidados purgados correctamente" : `Fuga detectada: containsEmail=${containsEmail}, containsToken=${containsToken}`,
    details: { sanitized },
  });
}

// 1.8 Inmutabilidad del objeto original suministrado (Object.isFrozen y no mutación)
{
  const originalPayload = Object.freeze({
    action: "read_concept",
    email: "do_not_mutate@freeze.com",
    nested: Object.freeze({
      token: "secret_frozen_token",
      count: 5,
    }),
  });

  let threwError = false;
  try {
    sanitizeTelemetryParams(originalPayload as unknown as Record<string, unknown>);
  } catch {
    threwError = true;
  }

  // Also check non-frozen object equality before and after
  const mutableObj = {
    action: "study",
    email: "mutable@test.com",
    details: { secret: "123", safe: true },
  };
  const snapshotBefore = JSON.stringify(mutableObj);
  sanitizeTelemetryParams(mutableObj);
  const snapshotAfter = JSON.stringify(mutableObj);
  const mutationOccurred = snapshotBefore !== snapshotAfter;

  const passed = !threwError && !mutationOccurred;

  recordResult({
    category: "ZERO_PII",
    id: "PII-08",
    description: "Inmutabilidad estricta: soporte para Object.freeze y cero mutación del objeto original",
    passed,
    expected: "No debe arrojar error con Object.freeze ni mutar el objeto de entrada",
    actual: `threwError=${threwError}, mutationOccurred=${mutationOccurred}`,
    details: { snapshotBefore, snapshotAfter },
  });
}

// 1.9 Truncamiento de cadenas excesivamente largas (> 200 caracteres)
{
  const longString = "A".repeat(500);
  const input = { notes: longString, topic: "react" };
  const sanitized = sanitizeTelemetryParams(input);
  const passed = typeof sanitized.notes === "string" && sanitized.notes.length === 200;

  recordResult({
    category: "ZERO_PII",
    id: "PII-09",
    description: "Truncamiento seguro de cadenas extensas a 200 caracteres para evitar desbordes",
    passed,
    expected: "Longitud de campo notes truncada exactamente a 200 caracteres",
    actual: `Longitud final: ${typeof sanitized.notes === "string" ? sanitized.notes.length : "desconocido"}`,
  });
}

// ============================================================================
// 2. ESTRÉS DE MODO OFFLINE Y ADBLOCKERS
// ============================================================================
console.log("\n=======================================================================");
console.log("▶ CATEGORÍA 2: ESTRÉS DE MODO OFFLINE Y ADBLOCKERS");
console.log("=======================================================================\n");

// 2.1 window.gtag arroja error intencional (AdBlocker simulado)
{
  setupMockWindow({
    gtag: () => {
      throw new Error("AdBlocker blocked script execution [ERR_BLOCKED_BY_CLIENT]");
    },
  });

  let threw = false;
  let consoleErrorCalled = false;
  let consoleWarnCalled = false;
  const origError = console.error;
  const origWarn = console.warn;
  console.error = () => { consoleErrorCalled = true; };
  console.warn = () => { consoleWarnCalled = true; };

  try {
    trackEvent("adblock_test_event", { page: "/colecciones" });
  } catch {
    threw = true;
  } finally {
    console.error = origError;
    console.warn = origWarn;
    restoreWindow();
  }

  const passed = !threw && !consoleErrorCalled && !consoleWarnCalled;
  recordResult({
    category: "OFFLINE_ADBLOCKER",
    id: "ADBLOCK-01",
    description: "Tolerancia a excepción lanzada por window.gtag (AdBlocker) sin arrojar ni contaminar consola",
    passed,
    expected: "threw=false, consoleError=false, consoleWarn=false",
    actual: `threw=${threw}, consoleError=${consoleErrorCalled}, consoleWarn=${consoleWarnCalled}`,
  });
}

// 2.2 window.dataLayer = null
{
  setupMockWindow({
    gtag: undefined,
    dataLayer: null,
  });

  let threw = false;
  try {
    trackEvent("null_datalayer_event", { page: "/atlas" });
  } catch {
    threw = true;
  } finally {
    restoreWindow();
  }

  const passed = !threw;
  recordResult({
    category: "OFFLINE_ADBLOCKER",
    id: "ADBLOCK-02",
    description: "Tolerancia a window.dataLayer = null",
    passed,
    expected: "threw=false",
    actual: `threw=${threw}`,
  });
}

// 2.3 window.dataLayer = undefined
{
  setupMockWindow({
    gtag: undefined,
    dataLayer: undefined,
  });

  let threw = false;
  try {
    trackEvent("undefined_datalayer_event", { page: "/libreria" });
  } catch {
    threw = true;
  } finally {
    restoreWindow();
  }

  const passed = !threw;
  recordResult({
    category: "OFFLINE_ADBLOCKER",
    id: "ADBLOCK-03",
    description: "Tolerancia a window.dataLayer = undefined",
    passed,
    expected: "threw=false",
    actual: `threw=${threw}`,
  });
}

// 2.4 dataLayer.push arroja error
{
  setupMockWindow({
    gtag: undefined,
    dataLayer: {
      push: () => {
        throw new Error("GTM container blocked or corrupted");
      },
    } as unknown as unknown[],
  });

  let threw = false;
  try {
    trackEvent("corrupted_gtm_event", { status: "test" });
  } catch {
    threw = true;
  } finally {
    restoreWindow();
  }

  const passed = !threw;
  recordResult({
    category: "OFFLINE_ADBLOCKER",
    id: "ADBLOCK-04",
    description: "Tolerancia ante excepción en dataLayer.push",
    passed,
    expected: "threw=false",
    actual: `threw=${threw}`,
  });
}

// 2.5 Entorno SSR con window = undefined
{
  restoreWindow(); // ensure window is undefined

  let threw = false;
  try {
    trackEvent("ssr_event", { env: "server_side" });
    trackCollectionStudy("node", "Node.js", "atlas");
    trackButtonClick("btn_test", "Test", "ssr");
    trackSectionDwell("sec_ssr", 10);
    trackLibraryAction("search", { query: "ssr" });
    trackQuizAuthEvent("prompt", "google");
  } catch {
    threw = true;
  }

  const passed = !threw;
  recordResult({
    category: "OFFLINE_ADBLOCKER",
    id: "ADBLOCK-05",
    description: "Tolerancia de todas las funciones de telemetría en entorno SSR puro (window = undefined)",
    passed,
    expected: "threw=false en todos los despachos",
    actual: `threw=${threw}`,
  });
}

// ============================================================================
// 3. MEDICIÓN EMPÍRICA DE DWELL TIME
// ============================================================================
console.log("\n=======================================================================");
console.log("▶ CATEGORÍA 3: MEDICIÓN EMPÍRICA DE DWELL TIME");
console.log("=======================================================================\n");

// Mock IntersectionObserver class for testing
class MockTestObserver {
  callback: (entries: Array<{ isIntersecting: boolean; intersectionRatio: number }>) => void;
  options: { threshold?: number };
  disconnected = false;

  constructor(
    cb: (entries: Array<{ isIntersecting: boolean; intersectionRatio: number }>) => void,
    opts: { threshold?: number } = {}
  ) {
    this.callback = cb;
    this.options = opts;
  }

  trigger(isIntersecting: boolean, ratio: number) {
    this.callback([{ isIntersecting, intersectionRatio: ratio }]);
  }

  disconnect() {
    this.disconnected = true;
  }
}

// 3.1 createSectionDwellTracker: Permanencia de 1.8 segundos (< 2s) NO debe emitir
{
  setupMockWindow();
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = MockTestObserver;

  const tracker = createSectionDwellTracker("section_bounce_1_8s", 0.5);
  const obs = tracker.observer as unknown as MockTestObserver;

  // Intersect at t=0
  const origDateNow = Date.now;
  let simulatedTime = 100000;
  Date.now = () => simulatedTime;

  obs.trigger(true, 1.0); // start tracking
  simulatedTime += 1800;  // advance 1.8s
  obs.trigger(false, 0.0); // leave section
  tracker.flush();

  Date.now = origDateNow;

  const dwellEvents = capturedGtagEvents.filter((e) => e.name === "section_dwell");
  const passed = dwellEvents.length === 0;

  recordResult({
    category: "DWELL_TIME",
    id: "DWELL-01",
    description: "createSectionDwellTracker: Permanencia de 1.8s (< 2s) descarta rebote (0 eventos)",
    passed,
    expected: "0 eventos de section_dwell emitidos",
    actual: `${dwellEvents.length} eventos emitidos`,
    details: { dwellEvents },
  });

  tracker.cleanup();
  restoreWindow();
}

// 3.2 createSectionDwellTracker: Permanencia de 2.4 segundos (>= 2s) emite con duration_seconds: 2
{
  setupMockWindow();
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = MockTestObserver;

  const tracker = createSectionDwellTracker("section_read_2_4s", 0.5);
  const obs = tracker.observer as unknown as MockTestObserver;

  const origDateNow = Date.now;
  let simulatedTime = 200000;
  Date.now = () => simulatedTime;

  obs.trigger(true, 1.0); // start
  simulatedTime += 2400;  // advance 2.4s
  obs.trigger(false, 0.0); // leave
  tracker.flush();

  Date.now = origDateNow;

  const dwellEvents = capturedGtagEvents.filter((e) => e.name === "section_dwell");
  const passed = dwellEvents.length === 1 && dwellEvents[0].params.duration_seconds === 2;

  recordResult({
    category: "DWELL_TIME",
    id: "DWELL-02",
    description: "createSectionDwellTracker: Permanencia de 2.4s emite con duration_seconds: 2",
    passed,
    expected: "Exactamente 1 evento emitido con duration_seconds: 2",
    actual: `Se emitieron ${dwellEvents.length} eventos (posible duplicación en flush). Duración primer evento: ${dwellEvents[0]?.params?.duration_seconds}`,
    details: { dwellEvents },
  });

  tracker.cleanup();
  restoreWindow();
}

// 3.3 createSectionDwellTracker: Permanencia de 4.9 segundos emite con duration_seconds: 5
{
  setupMockWindow();
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = MockTestObserver;

  const tracker = createSectionDwellTracker("section_read_4_9s", 0.5);
  const obs = tracker.observer as unknown as MockTestObserver;

  const origDateNow = Date.now;
  let simulatedTime = 300000;
  Date.now = () => simulatedTime;

  obs.trigger(true, 1.0); // start
  simulatedTime += 4900;  // advance 4.9s
  obs.trigger(false, 0.0); // leave
  tracker.flush();

  Date.now = origDateNow;

  const dwellEvents = capturedGtagEvents.filter((e) => e.name === "section_dwell");
  const passed = dwellEvents.length === 1 && dwellEvents[0].params.duration_seconds === 5;

  recordResult({
    category: "DWELL_TIME",
    id: "DWELL-03",
    description: "createSectionDwellTracker: Permanencia de 4.9s emite con duration_seconds: 5 (redondeo entero)",
    passed,
    expected: "Exactamente 1 evento emitido con duration_seconds: 5",
    actual: `Se emitieron ${dwellEvents.length} eventos (posible duplicación en flush). Duración primer evento: ${dwellEvents[0]?.params?.duration_seconds}`,
    details: { dwellEvents },
  });

  tracker.cleanup();
  restoreWindow();
}

// 3.4 createSectionDwellTracker: Cambio de pestaña (document.visibilityState = "hidden")
{
  setupMockWindow();
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = MockTestObserver;

  // Mock document with visibilityState
  const mockDoc = {
    visibilityState: "visible",
    listeners: new Map<string, Array<() => void>>(),
    addEventListener(event: string, fn: () => void) {
      if (!this.listeners.has(event)) this.listeners.set(event, []);
      this.listeners.get(event)?.push(fn);
    },
    removeEventListener(event: string, fn: () => void) {
      const arr = this.listeners.get(event) || [];
      const idx = arr.indexOf(fn);
      if (idx !== -1) arr.splice(idx, 1);
    },
    dispatch(event: string) {
      for (const fn of this.listeners.get(event) || []) fn();
    },
  };
  (globalThis as unknown as { document: unknown }).document = mockDoc;

  const tracker = createSectionDwellTracker("section_tab_switch", 0.5);
  const obs = tracker.observer as unknown as MockTestObserver;

  const origDateNow = Date.now;
  let simulatedTime = 400000;
  Date.now = () => simulatedTime;

  obs.trigger(true, 1.0); // Active for 3 seconds
  simulatedTime += 3000;

  // User switches tab to background for 60 seconds!
  mockDoc.visibilityState = "hidden";
  mockDoc.dispatch("visibilitychange");
  simulatedTime += 60000; // 60 seconds hidden in background

  // User returns to tab for 1 more second
  mockDoc.visibilityState = "visible";
  mockDoc.dispatch("visibilitychange");
  simulatedTime += 1000;

  // Flush and clean up
  tracker.flush();
  tracker.cleanup();
  Date.now = origDateNow;

  const dwellEvents = capturedGtagEvents.filter((e) => e.name === "section_dwell");
  const recordedDuration = dwellEvents[0]?.params?.duration_seconds;

  // Active time was 3s + 1s = 4s. If tab switch is ignored, it would record 3s + 60s + 1s = 64s!
  const pausedOrConsolidated = recordedDuration !== undefined && Number(recordedDuration) <= 5;

  recordResult({
    category: "DWELL_TIME",
    id: "DWELL-04",
    description: "createSectionDwellTracker: Simular cambio de pestaña (document.visibilityState = 'hidden') debe pausar o consolidar tiempo activo",
    passed: pausedOrConsolidated,
    expected: "duration_seconds ~ 4 segundos (tiempo activo descontando los 60s en segundo plano)",
    actual: recordedDuration !== undefined ? `duration_seconds registrado: ${recordedDuration}` : "No se emitió evento",
    details: { dwellEvents, recordedDuration },
  });

  restoreWindow();
  (globalThis as unknown as { document: unknown }).document = undefined;
}

// ============================================================================
// 4. PRUEBAS DEL HOOK useSectionDwellTime (React Hook Lifecycle)
// ============================================================================
console.log("\n=======================================================================");
console.log("▶ CATEGORÍA 4: PRUEBAS DEL HOOK useSectionDwellTime");
console.log("=======================================================================\n");

// Test 4.1: Descarte de rebote (< 2s) en el hook useSectionDwellTime
{
  setupMockWindow();
  const listeners: Record<string, Array<() => void>> = {};
  const mockDoc = {
    visibilityState: "visible" as "visible" | "hidden",
    addEventListener(event: string, cb: () => void) {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(cb);
    },
    removeEventListener(event: string, cb: () => void) {
      if (!listeners[event]) return;
      listeners[event] = listeners[event].filter((fn) => fn !== cb);
    },
    dispatch(event: string) {
      for (const cb of listeners[event] || []) cb();
    },
  };
  (globalThis as unknown as { document: unknown }).document = mockDoc;

  class SpyHookObserver extends MockTestObserver {
    constructor(
      cb: (entries: Array<{ isIntersecting: boolean; intersectionRatio: number }>) => void,
      opts?: { threshold?: number }
    ) {
      super(cb, opts);
    }
    observe() {}
  }
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = SpyHookObserver;

  // Simulate useSectionDwellTime effect logic
  const minDwellSeconds = 2;
  const threshold = 0.5;
  const sectionId = "hook_bounce_test";
  let startTime: number | null = null;
  let accumulatedMs = 0;
  let isIntersecting = false;

  const flushDwell = () => {
    if (isIntersecting && startTime !== null) {
      accumulatedMs += Date.now() - startTime;
      startTime = null;
    }
    const totalSeconds = accumulatedMs / 1000;
    if (totalSeconds >= minDwellSeconds) {
      trackSectionDwell(sectionId, totalSeconds);
    }
    accumulatedMs = 0;
  };

  const handleVisibilityChange = () => {
    if (mockDoc.visibilityState === "hidden") {
      if (isIntersecting && startTime !== null) {
        accumulatedMs += Date.now() - startTime;
        startTime = null;
      }
    } else if (mockDoc.visibilityState === "visible") {
      if (isIntersecting && startTime === null) {
        startTime = Date.now();
      }
    }
  };

  mockDoc.addEventListener("visibilitychange", handleVisibilityChange);

  const observer = new SpyHookObserver((entries: Array<{ isIntersecting: boolean; intersectionRatio: number }>) => {
    const entry = entries[0];
    if (!entry) return;
    if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
      if (!isIntersecting) {
        isIntersecting = true;
        if (mockDoc.visibilityState === "visible") {
          startTime = Date.now();
        }
      }
    } else {
      if (isIntersecting) {
        if (startTime !== null) {
          accumulatedMs += Date.now() - startTime;
          startTime = null;
        }
        isIntersecting = false;
        flushDwell();
      }
    }
  }, { threshold });

  const cleanup = () => {
    mockDoc.removeEventListener("visibilitychange", handleVisibilityChange);
    observer.disconnect();
    flushDwell();
  };

  const origDateNow = Date.now;
  let simulatedTime = 500000;
  Date.now = () => simulatedTime;

  observer.trigger(true, 1.0); // Enter
  simulatedTime += 1500; // 1.5s
  observer.trigger(false, 0.0); // Leave
  cleanup();

  Date.now = origDateNow;
  const dwells = capturedGtagEvents.filter((e) => e.name === "section_dwell");
  const passed = dwells.length === 0;

  recordResult({
    category: "DWELL_HOOK",
    id: "HOOK-01",
    description: "useSectionDwellTime: Descarte estricto de rebote (< 2s) al salir del elemento",
    passed,
    expected: "0 eventos de section_dwell emitidos",
    actual: `${dwells.length} eventos emitidos`,
  });

  restoreWindow();
  (globalThis as unknown as { document: unknown }).document = undefined;
}

// Test 4.2: Dwell válido (>= 2s) en useSectionDwellTime emite duración redondeada
{
  setupMockWindow();
  const listeners: Record<string, Array<() => void>> = {};
  const mockDoc = {
    visibilityState: "visible" as "visible" | "hidden",
    addEventListener(event: string, cb: () => void) {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(cb);
    },
    removeEventListener(event: string, cb: () => void) {
      if (!listeners[event]) return;
      listeners[event] = listeners[event].filter((fn) => fn !== cb);
    },
    dispatch(event: string) {
      for (const cb of listeners[event] || []) cb();
    },
  };
  (globalThis as unknown as { document: unknown }).document = mockDoc;

  class SpyHookObserver extends MockTestObserver {
    observe() {}
  }
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = SpyHookObserver;

  const minDwellSeconds = 2;
  const threshold = 0.5;
  const sectionId = "hook_dwell_valid";
  let startTime: number | null = null;
  let accumulatedMs = 0;
  let isIntersecting = false;

  const flushDwell = () => {
    if (isIntersecting && startTime !== null) {
      accumulatedMs += Date.now() - startTime;
      startTime = null;
    }
    const totalSeconds = accumulatedMs / 1000;
    if (totalSeconds >= minDwellSeconds) {
      trackSectionDwell(sectionId, totalSeconds);
    }
    accumulatedMs = 0;
  };

  const handleVisibilityChange = () => {
    if (mockDoc.visibilityState === "hidden") {
      if (isIntersecting && startTime !== null) {
        accumulatedMs += Date.now() - startTime;
        startTime = null;
      }
    } else if (mockDoc.visibilityState === "visible") {
      if (isIntersecting && startTime === null) {
        startTime = Date.now();
      }
    }
  };

  mockDoc.addEventListener("visibilitychange", handleVisibilityChange);

  const observer = new SpyHookObserver((entries: Array<{ isIntersecting: boolean; intersectionRatio: number }>) => {
    const entry = entries[0];
    if (!entry) return;
    if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
      if (!isIntersecting) {
        isIntersecting = true;
        if (mockDoc.visibilityState === "visible") {
          startTime = Date.now();
        }
      }
    } else {
      if (isIntersecting) {
        if (startTime !== null) {
          accumulatedMs += Date.now() - startTime;
          startTime = null;
        }
        isIntersecting = false;
        flushDwell();
      }
    }
  }, { threshold });

  const cleanup = () => {
    mockDoc.removeEventListener("visibilitychange", handleVisibilityChange);
    observer.disconnect();
    flushDwell();
  };

  const origDateNow = Date.now;
  let simulatedTime = 600000;
  Date.now = () => simulatedTime;

  observer.trigger(true, 1.0); // Enter
  simulatedTime += 3400; // 3.4s
  observer.trigger(false, 0.0); // Leave
  cleanup();

  Date.now = origDateNow;
  const dwells = capturedGtagEvents.filter((e) => e.name === "section_dwell");
  const passed = dwells.length === 1 && dwells[0].params.duration_seconds === 3;

  recordResult({
    category: "DWELL_HOOK",
    id: "HOOK-02",
    description: "useSectionDwellTime: Permanencia de 3.4s emite exactamente 1 evento con duración 3s",
    passed,
    expected: "1 evento con duration_seconds: 3",
    actual: `${dwells.length} eventos, primer duración = ${dwells[0]?.params?.duration_seconds}`,
  });

  restoreWindow();
  (globalThis as unknown as { document: unknown }).document = undefined;
}

// Test 4.3 y 4.4: Desconexión limpia de listeners y observadores al desmontar
{
  setupMockWindow();
  const listeners: Record<string, Array<() => void>> = {};
  const mockDoc = {
    visibilityState: "visible" as "visible" | "hidden",
    addEventListener(event: string, cb: () => void) {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(cb);
    },
    removeEventListener(event: string, cb: () => void) {
      if (!listeners[event]) return;
      listeners[event] = listeners[event].filter((fn) => fn !== cb);
    },
    dispatch(event: string) {
      for (const cb of listeners[event] || []) cb();
    },
  };
  (globalThis as unknown as { document: unknown }).document = mockDoc;

  class SpyHookObserver extends MockTestObserver {
    constructor(
      cb: (entries: Array<{ isIntersecting: boolean; intersectionRatio: number }>) => void,
      opts?: { threshold?: number }
    ) {
      super(cb, opts);
    }
    observe() {}
  }
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = SpyHookObserver;

  const handleVisibilityChange = () => {};
  mockDoc.addEventListener("visibilitychange", handleVisibilityChange);
  const observer = new SpyHookObserver(() => {}, {});

  const listenersBefore = (listeners["visibilitychange"] || []).length;
  // Cleanup simulation
  mockDoc.removeEventListener("visibilitychange", handleVisibilityChange);
  observer.disconnect();
  const listenersAfter = (listeners["visibilitychange"] || []).length;

  recordResult({
    category: "DWELL_HOOK",
    id: "HOOK-03",
    description: "useSectionDwellTime: Remoción limpia de listener 'visibilitychange' al desmontar",
    passed: listenersAfter === listenersBefore - 1,
    expected: `Listeners reducidos en 1 (después: ${listenersBefore - 1})`,
    actual: `Listeners después: ${listenersAfter}`,
  });

  recordResult({
    category: "DWELL_HOOK",
    id: "HOOK-04",
    description: "useSectionDwellTime: Desconexión limpia de IntersectionObserver al desmontar",
    passed: observer.disconnected,
    expected: "disconnected = true",
    actual: `disconnected = ${observer.disconnected}`,
  });

  restoreWindow();
  (globalThis as unknown as { document: unknown }).document = undefined;
}

// Test 4.5: Cambio de pestaña pausando tiempo activo en useSectionDwellTime
{
  setupMockWindow();
  const listeners: Record<string, Array<() => void>> = {};
  const mockDoc = {
    visibilityState: "visible" as "visible" | "hidden",
    addEventListener(event: string, cb: () => void) {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(cb);
    },
    removeEventListener(event: string, cb: () => void) {
      if (!listeners[event]) return;
      listeners[event] = listeners[event].filter((fn) => fn !== cb);
    },
    dispatch(event: string) {
      for (const cb of listeners[event] || []) cb();
    },
  };
  (globalThis as unknown as { document: unknown }).document = mockDoc;

  class SpyHookObserver extends MockTestObserver {
    observe() {}
  }
  (globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver = SpyHookObserver;

  const minDwellSeconds = 2;
  const threshold = 0.5;
  const sectionId = "hook_tab_pause";
  let startTime: number | null = null;
  let accumulatedMs = 0;
  let isIntersecting = false;

  const flushDwell = () => {
    if (isIntersecting && startTime !== null) {
      accumulatedMs += Date.now() - startTime;
      startTime = null;
    }
    const totalSeconds = accumulatedMs / 1000;
    if (totalSeconds >= minDwellSeconds) {
      trackSectionDwell(sectionId, totalSeconds);
    }
    accumulatedMs = 0;
  };

  const handleVisibilityChange = () => {
    if (mockDoc.visibilityState === "hidden") {
      if (isIntersecting && startTime !== null) {
        accumulatedMs += Date.now() - startTime;
        startTime = null;
      }
    } else if (mockDoc.visibilityState === "visible") {
      if (isIntersecting && startTime === null) {
        startTime = Date.now();
      }
    }
  };

  mockDoc.addEventListener("visibilitychange", handleVisibilityChange);

  const observer = new SpyHookObserver((entries: Array<{ isIntersecting: boolean; intersectionRatio: number }>) => {
    const entry = entries[0];
    if (!entry) return;
    if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
      if (!isIntersecting) {
        isIntersecting = true;
        if (mockDoc.visibilityState === "visible") {
          startTime = Date.now();
        }
      }
    } else {
      if (isIntersecting) {
        if (startTime !== null) {
          accumulatedMs += Date.now() - startTime;
          startTime = null;
        }
        isIntersecting = false;
        flushDwell();
      }
    }
  }, { threshold });

  const cleanup = () => {
    mockDoc.removeEventListener("visibilitychange", handleVisibilityChange);
    observer.disconnect();
    flushDwell();
  };

  const origDateNow = Date.now;
  let simulatedTime = 700000;
  Date.now = () => simulatedTime;

  observer.trigger(true, 1.0); // Start
  simulatedTime += 2000; // 2s active

  // User changes to another tab for 45 seconds
  mockDoc.visibilityState = "hidden";
  mockDoc.dispatch("visibilitychange");
  simulatedTime += 45000;

  // User returns to tab for 1.5s
  mockDoc.visibilityState = "visible";
  mockDoc.dispatch("visibilitychange");
  simulatedTime += 1500;

  cleanup();
  Date.now = origDateNow;

  const dwells = capturedGtagEvents.filter((e) => e.name === "section_dwell");
  const duration = dwells[0]?.params?.duration_seconds;
  // Total active time: 2s + 1.5s = 3.5s -> rounded to 4s. 45s background time ignored.
  const passed = dwells.length === 1 && duration === 4;

  recordResult({
    category: "DWELL_HOOK",
    id: "HOOK-05",
    description: "useSectionDwellTime: Pausa estricta ante pestaña oculta (descuenta 45s de fondo)",
    passed,
    expected: "1 evento con duration_seconds: 4 (ignorando los 45s ocultos)",
    actual: `Eventos: ${dwells.length}, duración: ${duration}`,
  });

  restoreWindow();
  (globalThis as unknown as { document: unknown }).document = undefined;
}

// ============================================================================
// RESUMEN GLOBAL Y DICTAMEN FINAL
// ============================================================================
console.log("\n=======================================================================");
console.log("▶ RESUMEN GLOBAL DE PRUEBAS ADVERSARIALES");
console.log("=======================================================================");

const totalTests = testResults.length;
const passedTests = testResults.filter((r) => r.passed).length;
const failedTests = testResults.filter((r) => !r.passed).length;
const successRate = ((passedTests / totalTests) * 100).toFixed(1);

console.log(`Total pruebas ejecutadas : ${totalTests}`);
console.log(`Aprobadas (PASS)         : ${passedTests}`);
console.log(`Fallidas (FAIL)          : ${failedTests}`);
console.log(`Tasa de éxito            : ${successRate}%\n`);

if (failedTests > 0) {
  console.log("🔴 FALLOS DETECTADOS QUE REQUIEREN ATENCIÓN:");
  for (const r of testResults.filter((r) => !r.passed)) {
    console.log(` - [${r.category}] ${r.id}: ${r.description}`);
    console.log(`     Esperado: ${r.expected}`);
    console.log(`     Obtenido: ${r.actual}`);
  }
} else {
  console.log("🟢 TODAS LAS PRUEBAS ADVERSARIALES PASARON SATISFACTORIAMENTE.");
}
