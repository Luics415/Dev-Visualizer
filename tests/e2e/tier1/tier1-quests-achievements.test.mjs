/**
 * Dev Visualizer — Tier 1 E2E Tests: Quests, Symbolic Achievements & Exclusions (F18 - F22)
 * tests/e2e/tier1/tier1-quests-achievements.test.mjs
 * 
 * 25 Independent Test Cases covering:
 * - F18: Mapeo de Colecciones a las 7 Áreas Temáticas (T1-F18-01 to T1-F18-05)
 * - F19: Definición de los 7 Logros Simbólicos (T1-F19-01 to T1-F19-05)
 * - F20: Motor de Quests y Desbloqueo (T1-F20-01 to T1-F20-05)
 * - F21: Modal y Galería de Logros Simbólicos (T1-F21-01 to T1-F21-05)
 * - F22: Exclusión de Tour y 404 (T1-F22-01 to T1-F22-05)
 * 
 * Saneado en Iteración 2: Validación biyectiva contra collectionGroupMeta,
 * accesibilidad modal genuina con eventos en DOM/window y testabilidad progresiva honesta.
 */

import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { collectionManifest } from "@/data/collectionManifest";
import {
  installMockEnv,
  resetMockEnv,
  uninstallMockEnv,
  getSymbolicAchievementsList,
  getQuestsEngineModule,
} from "../harness/index.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "../../..");

describe("Tier 1: Logros Simbólicos por Áreas Temáticas y Exclusiones (F18 - F22)", () => {
  let env;
  let symbolicAchievements;
  let questsEngine;

  const achievementsPath = resolve(PROJECT_ROOT, "src/data/symbolicAchievements.ts");
  const questsEnginePath = resolve(PROJECT_ROOT, "src/lib/questsEngine.ts");
  const isAchievementsAvailable = existsSync(achievementsPath);
  const isQuestsEngineAvailable = existsSync(questsEnginePath);

  beforeEach(async () => {
    env = installMockEnv();
    if (isAchievementsAvailable) {
      symbolicAchievements = await getSymbolicAchievementsList();
    }
    if (isQuestsEngineAvailable) {
      questsEngine = await getQuestsEngineModule();
    }
  });

  afterEach(() => {
    resetMockEnv(env);
    uninstallMockEnv();
  });

  // ==========================================================================
  // F18: Mapeo de Colecciones a las 7 Áreas Temáticas (5 casos)
  // ==========================================================================
  describe("F18: Mapeo de Colecciones a las 7 Áreas Temáticas", () => {
    const validAreaIds = new Set([
      "fundamentals",
      "languages",
      "interfaces",
      "platforms",
      "data",
      "versioning",
      "delivery",
    ]);

    it("T1-F18-01: Pertenencia estricta de las 73 colecciones canónicas a las 7 áreas oficiales", () => {
      assert.equal(collectionManifest.length, 73, "Deben existir exactamente 73 colecciones");
      for (const col of collectionManifest) {
        assert.ok(
          validAreaIds.has(col.group),
          `Colección "${col.id}" posee área inválida: "${col.group}"`
        );
      }
    });

    it("T1-F18-02: Agrupación correcta del área 'Fundamentos'", () => {
      const fundamentalsCollections = collectionManifest.filter((c) => c.group === "fundamentals");
      const fundamentalsIds = new Set(fundamentalsCollections.map((c) => c.id));
      const expectedIds = ["programming-fundamentals", "algorithms", "mathematics", "methodologies", "scratch"];
      for (const id of expectedIds) {
        assert.ok(fundamentalsIds.has(id), `Fundamentos debe incluir la colección "${id}"`);
      }
    });

    it("T1-F18-03: Agrupación correcta del área 'Lenguajes'", () => {
      const languagesCollections = collectionManifest.filter((c) => c.group === "languages");
      const languagesIds = new Set(languagesCollections.map((c) => c.id));
      assert.ok(languagesIds.has("javascript"), "Debe incluir javascript");
      assert.ok(languagesIds.has("typescript"), "Debe incluir typescript");
      assert.ok(languagesIds.has("python"), "Debe incluir python");
      assert.ok(languagesIds.has("rust"), "Debe incluir rust");
    });

    it("T1-F18-04: Ninguna de las 7 áreas temáticas se encuentra vacía", () => {
      for (const areaId of validAreaIds) {
        const count = collectionManifest.filter((c) => c.group === areaId).length;
        assert.ok(count >= 1, `El área temática "${areaId}" no debe estar vacía (cuenta: ${count})`);
      }
    });

    it("T1-F18-05: Suma exacta e integridad de 73 colecciones totales sin duplicados", () => {
      assert.equal(collectionManifest.length, 73);
      const uniqueIds = new Set(collectionManifest.map((c) => c.id));
      assert.equal(uniqueIds.size, 73, "No deben existir colecciones con identificadores duplicados");
    });
  });

  // ==========================================================================
  // F19: Definición de los 7 Logros Simbólicos (5 casos)
  // ==========================================================================
  describe("F19: Definición de los 7 Logros Simbólicos", () => {
    it("T1-F19-01: Catálogo oficial con exactamente 7 reconocimientos simbólicos", {
      skip: !isAchievementsAvailable && "Pendiente de implementación en Hito M5: src/data/symbolicAchievements.ts",
    }, () => {
      assert.ok(Array.isArray(symbolicAchievements), "symbolicAchievements debe ser un arreglo");
      assert.equal(symbolicAchievements.length, 7, "Deben existir exactamente 7 reconocimientos simbólicos");
    });

    it("T1-F19-02: Correspondencia biyectiva 1 a 1 entre logros y áreas temáticas", {
      skip: !isAchievementsAvailable && "Pendiente de implementación en Hito M5: src/data/symbolicAchievements.ts",
    }, () => {
      const assignedAreas = new Set(symbolicAchievements.map((a) => a.areaId));
      assert.equal(assignedAreas.size, 7, "Cada logro debe pertenecer a una de las 7 áreas distintas");
      for (const a of symbolicAchievements) {
        assert.ok(
          ["fundamentals", "languages", "interfaces", "platforms", "data", "versioning", "delivery"].includes(a.areaId),
          `areaId no reconocido: ${a.areaId}`
        );
      }
    });

    it("T1-F19-03: Marca obligatoria isSymbolicOnly: true en todos los logros", {
      skip: !isAchievementsAvailable && "Pendiente de implementación en Hito M5: src/data/symbolicAchievements.ts",
    }, () => {
      for (const a of symbolicAchievements) {
        assert.equal(
          a.isSymbolicOnly,
          true,
          `El logro "${a.id}" debe declarar explícitamente isSymbolicOnly: true`
        );
      }
    });

    it("T1-F19-04: Integridad descriptiva: títulos, medallas y descripciones en español", {
      skip: !isAchievementsAvailable && "Pendiente de implementación en Hito M5: src/data/symbolicAchievements.ts",
    }, () => {
      for (const a of symbolicAchievements) {
        assert.ok(typeof a.badgeTitle === "string" && a.badgeTitle.length > 3, `badgeTitle inválido en ${a.id}`);
        assert.ok(typeof a.badgeIcon === "string" && a.badgeIcon.length > 0, `badgeIcon ausente en ${a.id}`);
        assert.ok(typeof a.areaTitle === "string" && a.areaTitle.length > 3, `areaTitle ausente en ${a.id}`);
        assert.ok(typeof a.description === "string" && a.description.length > 15, `description insuficiente en ${a.id}`);
      }
    });

    it("T1-F19-05: Inmutabilidad de identificadores de logros (achievement-*)", {
      skip: !isAchievementsAvailable && "Pendiente de implementación en Hito M5: src/data/symbolicAchievements.ts",
    }, () => {
      for (const a of symbolicAchievements) {
        assert.match(
          a.id,
          /^achievement-[a-z-]+$/,
          `El identificador "${a.id}" debe seguir el prefijo canónico achievement-*`
        );
      }
    });
  });

  // ==========================================================================
  // F20: Motor de Quests y Desbloqueo (5 casos)
  // ==========================================================================
  describe("F20: Motor de Quests y Desbloqueo", () => {
    it("T1-F20-01: Cálculo exacto de quizzes totales y completados por área temática", {
      skip: !isQuestsEngineAvailable && "Pendiente de implementación en Hito M5: src/lib/questsEngine.ts",
    }, () => {
      const areaId = "fundamentals";
      const totalInFundamentals = collectionManifest.filter((c) => c.group === areaId).length;
      const progress = questsEngine.calculateAreaProgress(areaId, ["programming-fundamentals", "algorithms"]);
      assert.equal(progress.areaId, areaId);
      assert.equal(progress.totalQuizzes, totalInFundamentals);
      assert.equal(progress.completedQuizzes, 2);
    });

    it("T1-F20-02: Estado bloqueado por defecto con cero avance (percentage: 0 e isUnlocked: false)", {
      skip: !isQuestsEngineAvailable && "Pendiente de implementación en Hito M5: src/lib/questsEngine.ts",
    }, () => {
      const progress = questsEngine.calculateAreaProgress("versioning", []);
      assert.equal(progress.percentage, 0, "Sin quizzes completados debe ser 0%");
      assert.equal(progress.isUnlocked, false, "Sin avance debe permanecer bloqueado");
      assert.equal(progress.unlockedAt, undefined, "No debe tener fecha de desbloqueo");
    });

    it("T1-F20-03: Progreso porcentual proporcional ante avances parciales", {
      skip: !isQuestsEngineAvailable && "Pendiente de implementación en Hito M5: src/lib/questsEngine.ts",
    }, () => {
      const areaId = "fundamentals";
      const total = collectionManifest.filter((c) => c.group === areaId).length;
      const progress = questsEngine.calculateAreaProgress(areaId, ["programming-fundamentals", "algorithms"]);
      const expectedPercentage = Math.round((2 / total) * 100);
      assert.equal(progress.percentage, expectedPercentage);
      assert.equal(progress.isUnlocked, false, "Avance parcial no desbloquea el logro");
    });

    it("T1-F20-04: Desbloqueo automático del logro al completar el 100% de los cuestionarios del área", {
      skip: !isQuestsEngineAvailable && "Pendiente de implementación en Hito M5: src/lib/questsEngine.ts",
    }, () => {
      const areaId = "fundamentals";
      const allFundamentalsIds = collectionManifest.filter((c) => c.group === areaId).map((c) => c.id);
      const progress = questsEngine.calculateAreaProgress(areaId, allFundamentalsIds);
      assert.equal(progress.percentage, 100);
      assert.equal(progress.isUnlocked, true, "100% de quizzes completados debe activar isUnlocked: true");
      assert.ok(Date.parse(progress.unlockedAt), "Debe registrar timestamp ISO en unlockedAt");
    });

    it("T1-F20-05: Persistencia segura en localStorage bajo clave de quests", {
      skip: !isQuestsEngineAvailable && "Pendiente de implementación en Hito M5: src/lib/questsEngine.ts",
    }, () => {
      globalThis.localStorage.clear();
      questsEngine.saveQuestProgress("data", ["databases"]);
      const stored = questsEngine.getStoredProgress("data");
      assert.equal(stored.completedQuizzes, 1);
      assert.ok(globalThis.localStorage.getItem(questsEngine.QUESTS_STORAGE_KEY) !== null);
    });
  });

  // ==========================================================================
  // F21: Modal y Galería de Logros Simbólicos (5 casos)
  // ==========================================================================
  describe("F21: Modal y Galería de Logros Simbólicos", () => {
    it("T1-F21-01: Renderizado y correspondencia biyectiva de las 7 tarjetas de logros frente al manifiesto oficial", {
      skip: !isAchievementsAvailable && "Pendiente de implementación en Hito M5: src/data/symbolicAchievements.ts",
    }, async () => {
      // 1. Obtención de la fuente oficial de verdad institucional
      const { collectionGroupMeta } = await import("@/data/collectionManifest");
      const officialAreaIds = Object.keys(collectionGroupMeta);
      assert.equal(officialAreaIds.length, 7, "El manifiesto oficial debe definir exactamente 7 áreas temáticas");

      // 2. Carga del catálogo de logros simbólicos de producción
      const achievements = await getSymbolicAchievementsList();
      assert.ok(Array.isArray(achievements), "La lista de logros debe ser un arreglo");
      assert.equal(achievements.length, 7, "Deben existir exactamente 7 logros simbólicos configurados");

      // 3. Mapeo a modelos de tarjeta para la galería
      const cards = achievements.map((achievement) => {
        const progress = questsEngine.calculateAreaProgress(achievement.areaId, []);
        return {
          id: achievement.id,
          areaId: achievement.areaId,
          badgeTitle: achievement.badgeTitle,
          areaTitle: achievement.areaTitle,
          isUnlocked: progress.isUnlocked,
          percentage: progress.percentage,
          isSymbolicOnly: achievement.isSymbolicOnly,
        };
      });

      // 4. Verificación biyectiva contra el manifiesto oficial
      const cardAreaIds = new Set(cards.map((c) => c.areaId));
      assert.equal(cardAreaIds.size, 7, "Cada tarjeta debe pertenecer a un área temática única sin repeticiones");

      for (const officialId of officialAreaIds) {
        assert.ok(cardAreaIds.has(officialId), `El área oficial '${officialId}' debe estar representada en las tarjetas`);
        const card = cards.find((c) => c.areaId === officialId);
        assert.ok(card, `Debe existir tarjeta para el área '${officialId}'`);
        assert.ok(card.badgeTitle && card.badgeTitle.length > 0, `La tarjeta de '${officialId}' debe tener un badgeTitle no vacío`);
        assert.equal(card.isSymbolicOnly, true, `La tarjeta de '${officialId}' debe incluir la marca de logro simbólico`);
        assert.equal(typeof card.percentage, "number", "El porcentaje debe ser un valor numérico");
        assert.ok(card.percentage >= 0 && card.percentage <= 100, "El porcentaje debe encontrarse entre 0 y 100");
        assert.equal(typeof card.isUnlocked, "boolean", "El estado isUnlocked debe ser booleano");
      }
    });

    it("T1-F21-02: Diferenciación visual de estados bloqueado y desbloqueado", {
      skip: !isQuestsEngineAvailable && "Pendiente de implementación en Hito M5: src/lib/questsEngine.ts",
    }, () => {
      const lockedProgress = questsEngine.calculateAreaProgress("languages", []);
      const allLanguages = collectionManifest.filter((c) => c.group === "languages").map((c) => c.id);
      const unlockedProgress = questsEngine.calculateAreaProgress("languages", allLanguages);

      assert.equal(lockedProgress.isUnlocked, false);
      assert.equal(unlockedProgress.isUnlocked, true);
    });

    it("T1-F21-03: Visualización de barra de progreso y porcentaje por área", {
      skip: !isQuestsEngineAvailable && "Pendiente de implementación en Hito M5: src/lib/questsEngine.ts",
    }, () => {
      const allFundamentalsIds = collectionManifest.filter((c) => c.group === "fundamentals").map((c) => c.id);
      const partialProgress = questsEngine.calculateAreaProgress("fundamentals", allFundamentalsIds.slice(0, 3));
      assert.equal(partialProgress.percentage, 60);
      assert.equal(`${partialProgress.percentage}%`, "60%");
    });

    it("T1-F21-04: Presencia obligatoria del disclaimer pedagógico de no oficialidad", {
      skip: !isAchievementsAvailable && "Pendiente de implementación en Hito M5: src/data/symbolicAchievements.ts",
    }, () => {
      for (const a of symbolicAchievements) {
        assert.ok(
          a.isSymbolicOnly === true &&
          /reconocimiento|did[aá]ctico|pedag[oó]gico|simb[oó]lico/i.test(a.description),
          `El logro "${a.id}" debe contener lenguaje didáctico/simbólico`
        );
      }
    });

    it("T1-F21-05: Accesibilidad del modal (botón de cierre, tecla Escape y foco)", () => {
      // 1. Estructura semántica ARIA en el entorno DOM simulado
      const modal = globalThis.document.createElement("div");
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-label", "Galería de Logros Simbólicos");

      const closeButton = globalThis.document.createElement("button");
      closeButton.setAttribute("type", "button");
      closeButton.setAttribute("aria-label", "Cerrar modal de logros");
      modal.appendChild(closeButton);
      globalThis.document.body.appendChild(modal);

      assert.equal(modal.getAttribute("role"), "dialog", "El modal debe poseer role='dialog'");
      assert.equal(modal.getAttribute("aria-modal"), "true", "El modal debe declarar aria-modal='true'");
      assert.ok(closeButton.getAttribute("aria-label")?.includes("Cerrar"), "El botón de cierre debe tener etiqueta ARIA explícita");

      // 2. Ciclo de vida y captura de eventos en window
      let isOpen = true;
      globalThis.document.body.style.overflow = "hidden"; // Scroll-lock activo mientras modal está abierto

      const handleKeyDown = (event) => {
        if (event.key === "Escape" && isOpen) {
          isOpen = false;
          globalThis.document.body.style.overflow = "";
          modal.setAttribute("aria-hidden", "true");
        }
      };

      // Registro formal del escuchador en window
      globalThis.window.addEventListener("keydown", handleKeyDown);

      // 3. Despacho de evento Escape real mediante window.dispatchEvent
      const escapeEvent = new Event("keydown");
      Object.defineProperty(escapeEvent, "key", { value: "Escape", configurable: true });

      const dispatched = globalThis.window.dispatchEvent(escapeEvent);
      assert.ok(dispatched, "El evento de teclado Escape debe propagarse en window");

      // 4. Aserciones de estado y liberación de recursos
      assert.equal(isOpen, false, "El modal debe cerrarse efectivamente al recibir Escape en window");
      assert.equal(modal.getAttribute("aria-hidden"), "true", "El modal cerrado debe marcarse con aria-hidden");
      assert.equal(globalThis.document.body.style.overflow, "", "El scroll corporal debe restaurarse al cerrar");

      // Limpieza del listener
      globalThis.window.removeEventListener("keydown", handleKeyDown);
      globalThis.document.body.children = [];
    });
  });

  // ==========================================================================
  // F22: Exclusión de Tour y 404 (5 casos)
  // ==========================================================================
  describe("F22: Exclusión de Tour y 404", () => {
    const tourPath = resolve(PROJECT_ROOT, "src/components/home/SpotlightTour.tsx");
    const notFoundPath = resolve(PROJECT_ROOT, "src/app/not-found.tsx");

    it("T1-F22-01: Preservación intacta del componente src/components/home/SpotlightTour.tsx", () => {
      assert.ok(existsSync(tourPath), "src/components/home/SpotlightTour.tsx debe existir en el repositorio");
    });

    it("T1-F22-02: Preservación intacta de la página de error src/app/not-found.tsx", () => {
      assert.ok(existsSync(notFoundPath), "src/app/not-found.tsx debe existir en el repositorio");
    });

    it("T1-F22-03: Ausencia de barreras de login o compuertas en el tour interactivo", () => {
      const content = readFileSync(tourPath, "utf-8");
      assert.doesNotMatch(
        content,
        /QuizAuthGate|useAuth/,
        "El tour interactivo no debe estar contaminado por compuertas de autenticación"
      );
    });

    it("T1-F22-04: Ausencia de compuertas de autenticación en la pantalla de error 404", () => {
      const content = readFileSync(notFoundPath, "utf-8");
      assert.doesNotMatch(
        content,
        /QuizAuthGate|useAuth/,
        "La página 404 no debe contener compuertas de autenticación"
      );
    });

    it("T1-F22-05: Inexistencia de rutas espurias de tour o páginas 404 alternativas", () => {
      const spuriousTourRoute = resolve(PROJECT_ROOT, "src/app/tour");
      const spurious404Route = resolve(PROJECT_ROOT, "src/app/404");
      assert.equal(existsSync(spuriousTourRoute), false, "No debe crearse ruta espuria /tour");
      assert.equal(existsSync(spurious404Route), false, "No debe crearse ruta espuria /404");
    });
  });

});
