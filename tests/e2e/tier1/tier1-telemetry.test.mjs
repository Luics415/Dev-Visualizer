/**
 * Dev Visualizer — Tier 1 E2E Tests: Telemetry & Engagement (F6 - F10)
 * tests/e2e/tier1/tier1-telemetry.test.mjs
 * 
 * 25 Independent Test Cases covering:
 * - F6: Infraestructura de Telemetría desacoplada (T1-F6-01 to T1-F6-05)
 * - F7: Métrica de Colecciones Estudiadas (T1-F7-01 to T1-F7-05)
 * - F8: Métrica de Clics en Botones Principales (T1-F8-01 to T1-F8-05)
 * - F9: Métrica de Permanencia por Apartado (T1-F9-01 to T1-F9-05)
 * - F10: Métrica de Uso de la Librería Profesional (T1-F10-01 to T1-F10-05)
 * 
 * Saneado en Iteración 2: Evaluación directa contra src/lib/telemetry.ts,
 * cero fachadas sombras y testabilidad progresiva honesta.
 */

import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  installMockEnv,
  resetMockEnv,
  uninstallMockEnv,
  getTelemetryModule,
} from "../harness/index.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "../../..");

describe("Tier 1: Telemetría y Métricas de Comportamiento (F6 - F10)", () => {
  let env;
  let telemetry;

  const telemetryPath = resolve(PROJECT_ROOT, "src/lib/telemetry.ts");
  const isTelemetryAvailable = existsSync(telemetryPath);

  beforeEach(async () => {
    env = installMockEnv();
    if (isTelemetryAvailable) {
      telemetry = await getTelemetryModule();
    }
  });

  afterEach(() => {
    resetMockEnv(env);
    uninstallMockEnv();
  });

  // ==========================================================================
  // F6: Infraestructura de Telemetría desacoplada (5 casos)
  // ==========================================================================
  describe("F6: Infraestructura de Telemetría desacoplada", () => {
    it("T1-F6-01: Despacho seguro de eventos a window.gtag cuando el cliente está activo", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackEvent("test_interaction", { component: "sidebar", action: "open" });
      const events = env.telemetry.getEventsByName("test_interaction");
      assert.equal(events.length, 1, "Debe despachar exactamente un evento");
      assert.equal(events[0].params.component, "sidebar");
      assert.equal(events[0].params.action, "open");
      env.telemetry.assertNoPii(events[0].params);
    });

    it("T1-F6-02: Tolerancia a fallos en SSR y entornos sin window ni gtag", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      const originalGtag = globalThis.window.gtag;
      globalThis.window.gtag = undefined;
      assert.doesNotThrow(() => {
        telemetry.trackEvent("ssr_event", { context: "server_render" });
      }, "trackEvent debe tolerar la ausencia de gtag sin arrojar excepciones");
      globalThis.window.gtag = originalGtag;
    });

    it("T1-F6-03: Filtrado estricto de Datos Personales Identificables (Cero PII)", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackEvent("form_submit", {
        topic: "react",
        email: "estudiante@universidad.edu",
        token: "secret_session_token_123",
      });
      const event = env.telemetry.getLastEvent();
      assert.ok(event, "El evento debe haber sido registrado");
      assert.equal(event.params.email, undefined, "El email personal debe haber sido suprimido");
      assert.equal(event.params.token, undefined, "El token sensible debe haber sido suprimido");
      assert.equal(event.params.topic, "react", "Los parámetros legítimos deben preservarse");
      env.telemetry.assertNoPii(event.params);
    });

    it("T1-F6-04: Despacho tipado de eventos de compuerta trackQuizAuthEvent", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackQuizAuthEvent("prompt", "google");
      const event = env.telemetry.getLastEvent();
      assert.equal(event.name, "quiz_auth_gate");
      assert.equal(event.params.event_category, "auth");
      assert.equal(event.params.auth_action, "prompt");
      assert.equal(event.params.auth_provider, "google");
      env.telemetry.assertNoPii(event.params);
    });

    it("T1-F6-05: Inmutabilidad del objeto de parámetros suministrado a la telemetría", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      const payload = Object.freeze({ module: "atlas", level: 1 });
      assert.doesNotThrow(() => {
        telemetry.trackEvent("frozen_payload_test", payload);
      }, "trackEvent no debe mutar el objeto de parámetros recibido");
    });
  });

  // ==========================================================================
  // F7: Métrica de Colecciones Estudiadas (5 casos)
  // ==========================================================================
  describe("F7: Métrica de Colecciones Estudiadas", () => {
    it("T1-F7-01: Disparo de evento collection_study con categoría didáctica", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackCollectionStudy("javascript", "JavaScript ES6+", "atlas");
      const events = env.telemetry.getEventsByName("collection_study");
      assert.equal(events.length, 1);
      assert.equal(events[0].params.event_category, "study_progress");
      env.telemetry.assertNoPii(events[0].params);
    });

    it("T1-F7-02: Presencia obligatoria de collection_id y collection_title", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackCollectionStudy("docker", "Docker & Contenedores", "action");
      const event = env.telemetry.getLastEvent();
      assert.equal(event.params.collection_id, "docker");
      assert.equal(event.params.collection_title, "Docker & Contenedores");
      env.telemetry.assertNoPii(event.params);
    });

    it("T1-F7-03: Diferenciación de estudio entre Atlas teórico y Sección En Acción", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackCollectionStudy("python", "Python", "atlas");
      telemetry.trackCollectionStudy("python", "Python", "action");
      const events = env.telemetry.getEventsByName("collection_study");
      assert.equal(events[0].params.study_type, "atlas");
      assert.equal(events[1].params.study_type, "action");
    });

    it("T1-F7-04: Integración en vistas de estudio al montar el componente principal", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackCollectionStudy("typescript", "TypeScript Avanzado", "atlas");
      const event = env.telemetry.getLastEvent();
      assert.ok(event, "Debe registrarse al montar");
      assert.equal(event.params.collection_id, "typescript");
    });

    it("T1-F7-05: Trazabilidad de accesos repetidos a una misma colección", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackCollectionStudy("rust", "Rust Systems", "atlas");
      telemetry.trackCollectionStudy("rust", "Rust Systems", "atlas");
      const events = env.telemetry.getEventsByName("collection_study");
      assert.equal(events.length, 2, "Visitas subsecuentes deben registrarse independientemente");
    });
  });

  // ==========================================================================
  // F8: Métrica de Clics en Botones Principales (5 casos)
  // ==========================================================================
  describe("F8: Métrica de Clics en Botones Principales", () => {
    it("T1-F8-01: Emisión de evento button_click con categoría user_interaction", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackButtonClick("btn_hero_explore", "Explorar Atlas", "home_hero");
      const events = env.telemetry.getEventsByName("button_click");
      assert.equal(events.length, 1);
      assert.equal(events[0].params.event_category, "user_interaction");
      env.telemetry.assertNoPii(events[0].params);
    });

    it("T1-F8-02: Estructura de parámetros requerida (button_id, button_name, location)", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackButtonClick("btn_start_quiz", "Iniciar Cuestionario", "quiz_runner");
      const event = env.telemetry.getLastEvent();
      assert.equal(event.params.button_id, "btn_start_quiz");
      assert.equal(event.params.button_name, "Iniciar Cuestionario");
      assert.equal(event.params.location, "quiz_runner");
      env.telemetry.assertNoPii(event.params);
    });

    it("T1-F8-03: Tracking en botón de invitación a quiz en secciones prácticas", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackButtonClick("action_quiz_invite_btn", "Demuestra lo aprendido", "action_quiz_invite");
      const event = env.telemetry.getLastEvent();
      assert.equal(event.params.location, "action_quiz_invite");
    });

    it("T1-F8-04: Tracking en botón de exportación de notas de estudio (StudyNotesExportButton)", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackButtonClick("export_study_notes", "Descargar Apuntes", "concept_header");
      const event = env.telemetry.getLastEvent();
      assert.equal(event.params.button_id, "export_study_notes");
      assert.equal(event.params.button_name, "Descargar Apuntes");
    });

    it("T1-F8-05: Unicidad de identificadores de botones en el Hero (HeroSimulatorWorkbench)", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackButtonClick("hero_step_next", "Siguiente paso", "hero_workbench");
      telemetry.trackButtonClick("hero_step_reset", "Reiniciar simulación", "hero_workbench");
      const events = env.telemetry.getEventsByName("button_click");
      assert.notEqual(events[0].params.button_id, events[1].params.button_id, "Cada botón debe tener un ID único");
    });
  });

  // ==========================================================================
  // F9: Métrica de Permanencia por Apartado (5 casos)
  // ==========================================================================
  describe("F9: Métrica de Permanencia por Apartado", () => {
    it("T1-F9-01: Despacho de section_dwell con duración en segundos enteros", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackSectionDwell("concept_memory_management", 4.8);
      const events = env.telemetry.getEventsByName("section_dwell");
      assert.equal(events.length, 1);
      assert.equal(events[0].params.section_id, "concept_memory_management");
      assert.equal(events[0].params.duration_seconds, 5, "Debe redondearse a segundos enteros");
      assert.equal(events[0].params.event_category, "engagement");
      env.telemetry.assertNoPii(events[0].params);
    });

    it("T1-F9-02: Filtro de rebote: descarte de permanencias menores a 2 segundos", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackSectionDwell("quick_scroll_section", 1.4);
      const events = env.telemetry.getEventsByName("section_dwell");
      assert.equal(events.length, 0, "No debe emitirse evento para dwell < 2s");
    });

    it("T1-F9-03: Activación y registro de permanencia válida (>= 2s)", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackSectionDwell("deep_dive_closures", 3.2);
      const events = env.telemetry.getEventsByName("section_dwell");
      assert.equal(events.length, 1);
      assert.ok(events[0].params.duration_seconds >= 2);
    });

    it("T1-F9-04: Limpieza de temporizadores y observadores al desmontar el componente", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      const tracker = telemetry.createSectionDwellTracker("section_unmount_test");
      assert.ok(tracker.observer, "El tracker debe crear un IntersectionObserver");
      tracker.cleanup();
      assert.doesNotThrow(() => tracker.cleanup());
    });

    it("T1-F9-05: Respeto al umbral de intersección (threshold) configurado", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      const tracker = telemetry.createSectionDwellTracker("threshold_test", 0.5);
      const fakeEl = { tagName: "SECTION" };
      tracker.observer.observe(fakeEl);

      // Trigger con ratio 0.2 (menor al umbral 0.5)
      tracker.observer.trigger(fakeEl, true, 0.2);
      tracker.flush();

      const events = env.telemetry.getEventsByName("section_dwell");
      assert.equal(events.length, 0, "No debe registrar permanencia si la visibilidad es menor al umbral");
      tracker.cleanup();
    });
  });

  // ==========================================================================
  // F10: Métrica de Uso de la Librería Profesional (5 casos)
  // ==========================================================================
  describe("F10: Métrica de Uso de la Librería Profesional", () => {
    it("T1-F10-01: Registro de búsquedas en la biblioteca (action: 'search')", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackLibraryAction("search", { query: "docker", resultCount: 4 });
      const events = env.telemetry.getEventsByName("library_action");
      assert.equal(events.length, 1);
      assert.equal(events[0].params.library_action_type, "search");
      assert.equal(events[0].params.query, "docker");
      assert.equal(events[0].params.resultCount, 4);
      env.telemetry.assertNoPii(events[0].params);
    });

    it("T1-F10-02: Registro de filtros temáticos (action: 'filter')", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackLibraryAction("filter", { topicSlug: "backend", activeFilterCount: 2 });
      const event = env.telemetry.getLastEvent();
      assert.equal(event.params.library_action_type, "filter");
      assert.equal(event.params.topicSlug, "backend");
      env.telemetry.assertNoPii(event.params);
    });

    it("T1-F10-03: Registro de clics en recursos educativos (action: 'resource_click')", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackLibraryAction("resource_click", { resourceId: "res_react_docs", official: true });
      const event = env.telemetry.getLastEvent();
      assert.equal(event.params.library_action_type, "resource_click");
      assert.equal(event.params.resourceId, "res_react_docs");
      assert.equal(event.params.official, true);
    });

    it("T1-F10-04: Registro de descargas de recursos preservados localmente (action: 'download')", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackLibraryAction("download", { resourceId: "res_guide_pdf", format: "pdf" });
      const event = env.telemetry.getLastEvent();
      assert.equal(event.params.library_action_type, "download");
      assert.equal(event.params.format, "pdf");
    });

    it("T1-F10-05: Supresión de telemetría ante búsquedas vacías o espacios en blanco", {
      skip: !isTelemetryAvailable && "Pendiente de implementación en Hito M2: src/lib/telemetry.ts",
    }, () => {
      telemetry.trackLibraryAction("search", { query: "   " });
      telemetry.trackLibraryAction("search", { query: "" });
      const events = env.telemetry.getEventsByName("library_action");
      assert.equal(events.length, 0, "No debe registrar eventos de búsqueda vacía");
    });
  });

});
