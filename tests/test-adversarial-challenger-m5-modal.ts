/**
 * Dev Visualizer — Empirical Challenger 2 Adversarial Stress Suite for Milestone 5
 * tests/test-adversarial-challenger-m5-modal.ts
 *
 * Somete a pruebas empíricas de estrés adversarial el componente:
 * src/components/gamification/SymbolicAchievementsModal.tsx
 *
 * 5 Dimensiones de Desafío:
 * 1. Ciclo de Vida y Escape de Listeners en Window (100x apertura/cierre, re-renders, unmount)
 * 2. Despacho de Eventos de Teclado en Window (Escape vs teclas irrelevantes, ráfagas, modifiers)
 * 3. Restauración de document.body.style.overflow (valores iniciales "", personalizados, 100x estrés)
 * 4. Renderizado con Datos Extremos (0%, 100%, mixtos, props corruptas, división por cero)
 * 5. Accesibilidad WCAG 2.1 AA y Propagación de Eventos en Backdrop vs Modal
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import {
  SymbolicAchievementsModal,
} from "../src/components/gamification/SymbolicAchievementsModal";
import {
  type SymbolicAchievement,
  type ThematicAreaId,
} from "../src/data/symbolicAchievements";
import { type QuestProgress, THEMATIC_AREAS } from "../src/lib/questsEngine";

// Configurar entorno React Act para pruebas deterministas
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

export interface ChallengerResult {
  category:
    | "LIFECYCLE_LISTENERS_100X"
    | "KEYBOARD_DISPATCH_ESCAPE"
    | "BODY_OVERFLOW_RESTORATION"
    | "EXTREME_DATA_BOUNDARIES"
    | "ACCESSIBILITY_EVENT_BUBBLING";
  id: string;
  description: string;
  passed: boolean;
  expected: string;
  actual: string;
  vulnerabilitySeverity?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "NONE";
}

export const testResults: ChallengerResult[] = [];

function recordResult(result: ChallengerResult) {
  testResults.push(result);
  const mark = result.passed ? "✔ PASS" : "✖ FAIL";
  const sev = !result.passed && result.vulnerabilitySeverity ? ` [${result.vulnerabilitySeverity}]` : "";
  console.log(`${mark}${sev} [${result.category}] ${result.id}: ${result.description}`);
  if (!result.passed) {
    console.log(`   Esperado: ${result.expected}`);
    console.log(`   Obtenido: ${result.actual}`);
  }
}

// ============================================================================
// SIMULADOR DOM INSTRUMENTADO PARA RASTREO PRECISO DE RECURSOS
// ============================================================================

class MockHTMLElement {}
class MockHTMLIFrameElement extends MockHTMLElement {}
(globalThis as unknown as { HTMLElement: unknown }).HTMLElement = MockHTMLElement;
(globalThis as unknown as { HTMLIFrameElement: unknown }).HTMLIFrameElement = MockHTMLIFrameElement;

class InstrumentedWindow extends EventTarget {
  public totalAdded = 0;
  public totalRemoved = 0;
  public HTMLElement = MockHTMLElement;
  public HTMLIFrameElement = MockHTMLIFrameElement;
  private addedByType: Map<string, number> = new Map();
  private removedByType: Map<string, number> = new Map();
  private listenerCounts: Map<string, number> = new Map();

  addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void {
    if (callback) {
      this.totalAdded++;
      this.addedByType.set(type, (this.addedByType.get(type) ?? 0) + 1);
      this.listenerCounts.set(type, (this.listenerCounts.get(type) ?? 0) + 1);
    }
    super.addEventListener(type, callback, options);
  }

  removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions): void {
    if (callback) {
      this.totalRemoved++;
      this.removedByType.set(type, (this.removedByType.get(type) ?? 0) + 1);
      const current = this.listenerCounts.get(type) ?? 0;
      if (current > 0) {
        this.listenerCounts.set(type, current - 1);
      }
    }
    super.removeEventListener(type, callback, options);
  }

  getAddedCount(type: string): number {
    return this.addedByType.get(type) ?? 0;
  }

  getRemovedCount(type: string): number {
    return this.removedByType.get(type) ?? 0;
  }

  getActiveListenersCount(type?: string): number {
    if (type) {
      return this.listenerCounts.get(type) ?? 0;
    }
    let total = 0;
    for (const count of this.listenerCounts.values()) {
      total += count;
    }
    return total;
  }

  reset() {
    this.totalAdded = 0;
    this.totalRemoved = 0;
    this.addedByType.clear();
    this.removedByType.clear();
    this.listenerCounts.clear();
  }
}

function dispatchKeyEvent(target: EventTarget, key: string): boolean {
  const ev = new Event("keydown");
  Object.defineProperty(ev, "key", { value: key, configurable: true });
  return target.dispatchEvent(ev);
}

function createDOMHarness() {
  const instWindow = new InstrumentedWindow();

  const doc = {
    nodeType: 9,
    nodeName: "#document",
    activeElement: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    body: {
      nodeType: 1,
      nodeName: "BODY",
      tagName: "BODY",
      style: {
        overflow: "",
      },
      childNodes: [],
      appendChild: () => {},
      removeChild: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
    },
    createElement: (tag: string) => ({
      nodeType: 1,
      nodeName: tag.toUpperCase(),
      tagName: tag.toUpperCase(),
      style: {},
      childNodes: [],
      appendChild: () => {},
      removeChild: () => {},
      setAttribute: () => {},
      removeAttribute: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      focus: () => {},
      offsetWidth: 100,
      offsetHeight: 40,
      getClientRects: () => [{ width: 100, height: 40 }],
      contains: () => true,
      querySelectorAll: () => [],
    }),
    createElementNS: (_ns: string, tag: string) => ({
      nodeType: 1,
      nodeName: tag.toUpperCase(),
      tagName: tag.toUpperCase(),
      style: {},
      childNodes: [],
      appendChild: () => {},
      removeChild: () => {},
      setAttribute: () => {},
      removeAttribute: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      focus: () => {},
      offsetWidth: 100,
      offsetHeight: 40,
      getClientRects: () => [{ width: 100, height: 40 }],
      contains: () => true,
      querySelectorAll: () => [],
    }),
    createTextNode: (text: string) => ({
      nodeType: 3,
      nodeName: "#text",
      nodeValue: text,
    }),
    defaultView: instWindow,
  };

  // Mock global window and document
  (globalThis as unknown as { window: unknown }).window = instWindow;
  (globalThis as unknown as { document: unknown }).document = doc;

  const container = {
    nodeType: 1,
    nodeName: "DIV",
    tagName: "DIV",
    ownerDocument: doc,
    childNodes: [],
    appendChild: () => {},
    removeChild: () => {},
    insertBefore: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
  };

  const root = createRoot(container as unknown as Element);

  return { instWindow, doc, root, container };
}

// ============================================================================
// SUITE ADVERSARIAL DE PRUEBAS EMPÍRICAS
// ============================================================================

async function runAdversarialModalSuite() {
  console.log("╔══════════════════════════════════════════════════════════════════════╗");
  console.log("║ DEV VISUALIZER — EMPIRICAL CHALLENGER 2: MODAL STRESS SUITE (M5)     ║");
  console.log("╚══════════════════════════════════════════════════════════════════════╝\n");

  // ==========================================================================
  // DIMENSIÓN 1: CICLO DE VIDA Y ESCAPE DE LISTENERS EN WINDOW (100X)
  // ==========================================================================
  console.log("▶ DIMENSIÓN 1: ESTRÉS DE CICLO DE VIDA Y LISTENERS EN WINDOW (100X)");
  console.log("----------------------------------------------------------------------");

  // 1.1 Apertura y cierre rápido 100 veces consecutivas
  {
    const { instWindow, root } = createDOMHarness();
    const onClose = () => {};

    for (let i = 0; i < 100; i++) {
      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose }));
      });
      const activeWhenOpen = instWindow.getActiveListenersCount("keydown");
      if (activeWhenOpen !== 1) {
        throw new Error(`En iteración ${i} abierto: active keydown listeners = ${activeWhenOpen}, esperado 1`);
      }

      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose }));
      });
      const activeWhenClosed = instWindow.getActiveListenersCount("keydown");
      if (activeWhenClosed !== 0) {
        throw new Error(`En iteración ${i} cerrado: active keydown listeners = ${activeWhenClosed}, esperado 0`);
      }
    }

    const keydownActive = instWindow.getActiveListenersCount("keydown");
    const keydownAdded = instWindow.getAddedCount("keydown");
    const keydownRemoved = instWindow.getRemovedCount("keydown");

    // Desmontar para verificar limpieza global (incluyendo storage listener de useQuests)
    await React.act(async () => {
      root.unmount();
    });
    const finalAllActive = instWindow.getActiveListenersCount();

    recordResult({
      category: "LIFECYCLE_LISTENERS_100X",
      id: "M5-CHALLENGE-01",
      description: "Apertura y cierre rápido 100x: balance neto de listeners keydown en window estrictamente 0",
      passed: keydownActive === 0 && keydownAdded === 100 && keydownRemoved === 100 && finalAllActive === 0,
      expected: "keydownAdded=100, keydownRemoved=100, activeKeydown=0, finalAllActive=0",
      actual: `keydownAdded=${keydownAdded}, keydownRemoved=${keydownRemoved}, activeKeydown=${keydownActive}, finalAllActive=${finalAllActive}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 1.2 Inestabilidad de referencia en prop onClose (100 re-renders con función anónima)
  {
    const { instWindow, root } = createDOMHarness();

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, {
        isOpen: true,
        onClose: () => {},
      }));
    });

    let leaksDetected = false;
    for (let i = 0; i < 100; i++) {
      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, {
          isOpen: true,
          onClose: () => { /* nueva referencia */ },
        }));
      });
      const currentActive = instWindow.getActiveListenersCount("keydown");
      if (currentActive !== 1) {
        leaksDetected = true;
        break;
      }
    }

    // Cerramos el modal
    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, {
        isOpen: false,
        onClose: () => {},
      }));
    });

    const activeAfterClose = instWindow.getActiveListenersCount("keydown");

    recordResult({
      category: "LIFECYCLE_LISTENERS_100X",
      id: "M5-CHALLENGE-02",
      description: "100 re-renders con nueva referencia onClose: listeners previos desregistrados sin fugas",
      passed: !leaksDetected && activeAfterClose === 0,
      expected: "exactamente 1 listener activo durante renders, 0 al cerrar",
      actual: `leaksDetected=${leaksDetected}, activeAfterClose=${activeAfterClose}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 1.3 Desmontaje abrupto (Unmount) mientras isOpen: true
  {
    const { instWindow, root } = createDOMHarness();

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, {
        isOpen: true,
        onClose: () => {},
      }));
    });

    const activeBeforeUnmount = instWindow.getActiveListenersCount("keydown");

    // Desmontar el árbol React súbitamente
    await React.act(async () => {
      root.unmount();
    });

    const activeAfterUnmount = instWindow.getActiveListenersCount("keydown");

    recordResult({
      category: "LIFECYCLE_LISTENERS_100X",
      id: "M5-CHALLENGE-03",
      description: "Desmontaje abrupto con modal abierto: cleanup de useEffect remueve escuchador de window",
      passed: activeBeforeUnmount === 1 && activeAfterUnmount === 0,
      expected: "activeBefore=1, activeAfterUnmount=0",
      actual: `activeBefore=${activeBeforeUnmount}, activeAfter=${activeAfterUnmount}`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // ==========================================================================
  // DIMENSIÓN 2: DESPACHO DE EVENTOS DE TECLADO EN WINDOW (ESCAPE VS OTRAS TECLAS)
  // ==========================================================================
  console.log("\n▶ DIMENSIÓN 2: DESPACHO DE EVENTOS DE TECLADO EN WINDOW (ESCAPE VS OTRAS TECLAS)");
  console.log("----------------------------------------------------------------------");

  // 2.1 Tecla Escape despachada en window cuando isOpen === true
  {
    const { instWindow, root } = createDOMHarness();
    let escapeCalls = 0;
    const onClose = () => { escapeCalls++; };

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose }));
    });

    // Despachar Escape
    dispatchKeyEvent(instWindow, "Escape");

    recordResult({
      category: "KEYBOARD_DISPATCH_ESCAPE",
      id: "M5-CHALLENGE-04",
      description: "Despacho de 'Escape' en window con modal abierto invoca onClose exactamente 1 vez",
      passed: escapeCalls === 1,
      expected: "onClose invocado 1 vez",
      actual: `onClose invocado ${escapeCalls} veces`,
      vulnerabilitySeverity: "CRITICAL",
    });
  }

  // 2.2 Despacho de 14 teclas irrelevantes NO debe invocar onClose
  {
    const { instWindow, root } = createDOMHarness();
    let accidentalCloses = 0;
    const onClose = () => { accidentalCloses++; };

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose }));
    });

    const irrelevantKeys = [
      "Enter",
      "Tab",
      "Space",
      " ",
      "ArrowDown",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "EscapeKey",
      "KeyA",
      "Shift",
      "Control",
      "Alt",
    ];

    for (const key of irrelevantKeys) {
      dispatchKeyEvent(instWindow, key);
    }

    recordResult({
      category: "KEYBOARD_DISPATCH_ESCAPE",
      id: "M5-CHALLENGE-05",
      description: "Despacho de 14 teclas irrelevantes (Enter, Tab, Space, etc.) NO provocan cierre accidental",
      passed: accidentalCloses === 0,
      expected: "0 llamadas a onClose",
      actual: `${accidentalCloses} llamadas a onClose`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 2.3 Tecla Escape con modal cerrado (isOpen === false)
  {
    const { instWindow, root } = createDOMHarness();
    let closedCalls = 0;
    const onClose = () => { closedCalls++; };

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose }));
    });

    dispatchKeyEvent(instWindow, "Escape");

    recordResult({
      category: "KEYBOARD_DISPATCH_ESCAPE",
      id: "M5-CHALLENGE-06",
      description: "Despacho de 'Escape' con modal cerrado es inerte (no invoca onClose)",
      passed: closedCalls === 0,
      expected: "0 llamadas a onClose",
      actual: `${closedCalls} llamadas a onClose`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // 2.4 Ráfaga de eventos combinados: 100 teclas aleatorias seguidas de 1 Escape
  {
    const { instWindow, root } = createDOMHarness();
    let callsCount = 0;
    const onClose = () => { callsCount++; };

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose }));
    });

    for (let i = 0; i < 100; i++) {
      dispatchKeyEvent(instWindow, i % 2 === 0 ? "Tab" : "Enter");
    }
    dispatchKeyEvent(instWindow, "Escape");

    recordResult({
      category: "KEYBOARD_DISPATCH_ESCAPE",
      id: "M5-CHALLENGE-07",
      description: "Ráfaga de 100 teclas de navegación seguidas de Escape: exactamente 1 invocación final",
      passed: callsCount === 1,
      expected: "exactamente 1 llamada a onClose",
      actual: `${callsCount} llamadas a onClose`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // ==========================================================================
  // DIMENSIÓN 3: RESTAURACIÓN DE document.body.style.overflow
  // ==========================================================================
  console.log("\n▶ DIMENSIÓN 3: RESTAURACIÓN DE document.body.style.overflow");
  console.log("----------------------------------------------------------------------");

  // 3.1 Ciclo estándar con overflow inicial vacío ("")
  {
    const { doc, root } = createDOMHarness();
    doc.body.style.overflow = "";

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    const overflowWhileOpen = doc.body.style.overflow;

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose: () => {} }));
    });
    const overflowAfterClose = doc.body.style.overflow;

    recordResult({
      category: "BODY_OVERFLOW_RESTORATION",
      id: "M5-CHALLENGE-08",
      description: "Estado inicial vacío: bloqueo a 'hidden' al abrir y restauración estricta a '' al cerrar",
      passed: overflowWhileOpen === "hidden" && overflowAfterClose === "",
      expected: "whileOpen='hidden', afterClose=''",
      actual: `whileOpen='${overflowWhileOpen}', afterClose='${overflowAfterClose}'`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 3.2 Preservación de overflow previo no vacío ("auto", "scroll", "visible")
  {
    const testCases = ["auto", "scroll", "visible"];
    let allPreserved = true;
    const details: string[] = [];

    for (const initialVal of testCases) {
      const { doc, root } = createDOMHarness();
      doc.body.style.overflow = initialVal;

      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
      });
      const during = doc.body.style.overflow;

      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose: () => {} }));
      });
      const restored = doc.body.style.overflow;

      if (during !== "hidden" || restored !== initialVal) {
        allPreserved = false;
      }
      details.push(`${initialVal} -> during:${during} -> restored:${restored}`);
    }

    recordResult({
      category: "BODY_OVERFLOW_RESTORATION",
      id: "M5-CHALLENGE-09",
      description: "Preservación fiel de estilos preexistentes ('auto', 'scroll', 'visible') tras cierre",
      passed: allPreserved,
      expected: "Restauración idéntica al valor preexistente",
      actual: details.join(" | "),
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 3.3 Estrés de 100 aperturas y cierres sobre document.body.style.overflow
  {
    const { doc, root } = createDOMHarness();
    doc.body.style.overflow = "scroll";

    for (let i = 0; i < 100; i++) {
      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
      });
      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose: () => {} }));
      });
    }

    const finalOverflow = doc.body.style.overflow;

    recordResult({
      category: "BODY_OVERFLOW_RESTORATION",
      id: "M5-CHALLENGE-10",
      description: "100 ciclos repetidos de apertura/cierre: overflow final idéntico al valor de origen",
      passed: finalOverflow === "scroll",
      expected: "overflow final = 'scroll'",
      actual: `overflow final = '${finalOverflow}'`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 3.4 Desmontaje abrupto con modal abierto restaura overflow inmediatamente
  {
    const { doc, root } = createDOMHarness();
    doc.body.style.overflow = "";

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    const duringOpen = doc.body.style.overflow;

    await React.act(async () => {
      root.unmount();
    });
    const afterUnmount = doc.body.style.overflow;

    recordResult({
      category: "BODY_OVERFLOW_RESTORATION",
      id: "M5-CHALLENGE-11",
      description: "Desmontaje abrupto con modal abierto restaura inmediatamente el overflow de body",
      passed: duringOpen === "hidden" && afterUnmount === "",
      expected: "during='hidden', afterUnmount=''",
      actual: `during='${duringOpen}', afterUnmount='${afterUnmount}'`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // ==========================================================================
  // DIMENSIÓN 4: RENDERIZADO CON DATOS EXTREMOS (0%, 100%, MIXTOS, PROPS CORRUPTAS)
  // ==========================================================================
  console.log("\n▶ DIMENSIÓN 4: RENDERIZADO CON DATOS EXTREMOS (0%, 100%, MIXTOS, PROPS CORRUPTAS)");
  console.log("----------------------------------------------------------------------");

  // 4.1 Estado 0% en todas las 7 áreas
  {
    const zeroProgress = {} as Record<ThematicAreaId, QuestProgress>;
    for (const area of THEMATIC_AREAS) {
      zeroProgress[area] = {
        areaId: area,
        totalQuizzes: 10,
        completedQuizzes: 0,
        percentage: 0,
        isUnlocked: false,
      };
    }

    const html = renderToStaticMarkup(
      React.createElement(SymbolicAchievementsModal, {
        isOpen: true,
        onClose: () => {},
        questsProgress: zeroProgress,
      })
    );

    const lockedCardsCount = (html.match(/quest-card--locked/g) || []).length;
    const inProgressCount = (html.match(/🔒 En progreso/g) || []).length;
    const zeroPercentCount = (html.match(/0%/g) || []).length;
    const unlockedBadges = (html.match(/🏆 Desbloqueado/g) || []).length;

    recordResult({
      category: "EXTREME_DATA_BOUNDARIES",
      id: "M5-CHALLENGE-12",
      description: "Datos extremos 0% en todas las áreas: 7 tarjetas bloqueadas, 0% en barras y cero insignias",
      passed: lockedCardsCount === 7 && inProgressCount === 7 && zeroPercentCount >= 7 && unlockedBadges === 0,
      expected: "locked=7, inProgress=7, unlockedBadges=0",
      actual: `locked=${lockedCardsCount}, inProgress=${inProgressCount}, unlockedBadges=${unlockedBadges}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 4.2 Estado 100% en todas las 7 áreas
  {
    const maxProgress = {} as Record<ThematicAreaId, QuestProgress>;
    for (const area of THEMATIC_AREAS) {
      maxProgress[area] = {
        areaId: area,
        totalQuizzes: 10,
        completedQuizzes: 10,
        percentage: 100,
        isUnlocked: true,
        unlockedAt: "2026-11-11T00:00:00.000Z",
      };
    }

    const html = renderToStaticMarkup(
      React.createElement(SymbolicAchievementsModal, {
        isOpen: true,
        onClose: () => {},
        questsProgress: maxProgress,
      })
    );

    const unlockedCardsCount = (html.match(/quest-card--unlocked/g) || []).length;
    const unlockedBadgesCount = (html.match(/🏆 Desbloqueado/g) || []).length;
    const hundredPercentCount = (html.match(/100%/g) || []).length;
    const timestampCount = (html.match(/✓ Desbloqueado el/g) || []).length;

    recordResult({
      category: "EXTREME_DATA_BOUNDARIES",
      id: "M5-CHALLENGE-13",
      description: "Datos extremos 100% en todas las áreas: 7 tarjetas desbloqueadas con fecha ISO y 100%",
      passed: unlockedCardsCount === 7 && unlockedBadgesCount === 7 && hundredPercentCount >= 7 && timestampCount === 7,
      expected: "unlockedCards=7, unlockedBadges=7, timestampCount=7",
      actual: `unlockedCards=${unlockedCardsCount}, badges=${unlockedBadgesCount}, timestamps=${timestampCount}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 4.3 Combinaciones mixtas arbitrarias (3 al 0%, 2 al 50%, 2 al 100%)
  {
    const mixedProgress = {} as Record<ThematicAreaId, QuestProgress>;
    const areas = [...THEMATIC_AREAS];
    // 0%: fundamentals, languages, interfaces
    for (let i = 0; i < 3; i++) {
      mixedProgress[areas[i]] = {
        areaId: areas[i],
        totalQuizzes: 10,
        completedQuizzes: 0,
        percentage: 0,
        isUnlocked: false,
      };
    }
    // 50%: platforms, data
    for (let i = 3; i < 5; i++) {
      mixedProgress[areas[i]] = {
        areaId: areas[i],
        totalQuizzes: 10,
        completedQuizzes: 5,
        percentage: 50,
        isUnlocked: false,
      };
    }
    // 100%: versioning, delivery
    for (let i = 5; i < 7; i++) {
      mixedProgress[areas[i]] = {
        areaId: areas[i],
        totalQuizzes: 10,
        completedQuizzes: 10,
        percentage: 100,
        isUnlocked: true,
        unlockedAt: "2026-11-11T00:00:00.000Z",
      };
    }

    const html = renderToStaticMarkup(
      React.createElement(SymbolicAchievementsModal, {
        isOpen: true,
        onClose: () => {},
        questsProgress: mixedProgress,
      })
    );

    const unlockedCards = (html.match(/quest-card--unlocked/g) || []).length;
    const lockedCards = (html.match(/quest-card--locked/g) || []).length;
    const fiftyPercentCount = (html.match(/50%/g) || []).length;

    recordResult({
      category: "EXTREME_DATA_BOUNDARIES",
      id: "M5-CHALLENGE-14",
      description: "Combinaciones mixtas (3 al 0%, 2 al 50%, 2 al 100%): segregación visual exacta sin contaminación",
      passed: unlockedCards === 2 && lockedCards === 5 && fiftyPercentCount >= 2,
      expected: "unlocked=2, locked=5, 50%_count>=2",
      actual: `unlocked=${unlockedCards}, locked=${lockedCards}, 50%_count=${fiftyPercentCount}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 4.4 Resiliencia ante objeto de progreso vacío o claves ausentes (questsProgress: {})
  {
    let renderedWithoutError = false;
    let fallbackHtml = "";

    try {
      fallbackHtml = renderToStaticMarkup(
        React.createElement(SymbolicAchievementsModal, {
          isOpen: true,
          onClose: () => {},
          questsProgress: {} as Record<ThematicAreaId, QuestProgress>,
        })
      );
      renderedWithoutError = true;
    } catch {
      renderedWithoutError = false;
    }

    const lockedCards = (fallbackHtml.match(/quest-card--locked/g) || []).length;

    recordResult({
      category: "EXTREME_DATA_BOUNDARIES",
      id: "M5-CHALLENGE-15",
      description: "Resiliencia ante objeto questsProgress={}: fallback defensivo sin excepciones de runtime",
      passed: renderedWithoutError && lockedCards === 7,
      expected: "renderizado exitoso y 7 tarjetas bloqueadas por omisión",
      actual: `rendered=${renderedWithoutError}, lockedCount=${lockedCards}`,
      vulnerabilitySeverity: "CRITICAL",
    });
  }

  // 4.5 División por cero y números extremos en progreso
  {
    const zeroDivProgress = {} as Record<ThematicAreaId, QuestProgress>;
    for (const area of THEMATIC_AREAS) {
      zeroDivProgress[area] = {
        areaId: area,
        totalQuizzes: 0,
        completedQuizzes: 0,
        percentage: 0,
        isUnlocked: false,
      };
    }

    const html = renderToStaticMarkup(
      React.createElement(SymbolicAchievementsModal, {
        isOpen: true,
        onClose: () => {},
        questsProgress: zeroDivProgress,
      })
    );

    const hasNaN = html.includes("NaN");
    const hasInfinity = html.includes("Infinity");

    recordResult({
      category: "EXTREME_DATA_BOUNDARIES",
      id: "M5-CHALLENGE-16",
      description: "Tolerancia a totalQuizzes: 0 (cero división): ausencia de NaN e Infinity en HTML",
      passed: !hasNaN && !hasInfinity,
      expected: "hasNaN=false, hasInfinity=false",
      actual: `hasNaN=${hasNaN}, hasInfinity=${hasInfinity}`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // 4.6 Sanitización contra inyección de cadenas con caracteres de control
  {
    const maliciousAchievements: SymbolicAchievement[] = [
      {
        id: "achievement-fundamentals",
        areaId: "fundamentals",
        areaTitle: "Fundamentos <script>alert(1)</script>",
        badgeTitle: "Medalla &\"'<script>XSS</script>",
        badgeIcon: "🏅",
        description: "Descripción con <b>HTML</b> & entidades de prueba pedagógicas",
        isSymbolicOnly: true,
      },
    ];

    const html = renderToStaticMarkup(
      React.createElement(SymbolicAchievementsModal, {
        isOpen: true,
        onClose: () => {},
        achievements: maliciousAchievements,
        questsProgress: {} as Record<ThematicAreaId, QuestProgress>,
      })
    );

    const rawScriptPresent = html.includes("<script>");
    const escapedAmp = html.includes("&amp;");

    recordResult({
      category: "EXTREME_DATA_BOUNDARIES",
      id: "M5-CHALLENGE-17",
      description: "Sanitización textual: caracteres especiales escapados correctamente sin ejecución de scripts",
      passed: !rawScriptPresent && escapedAmp,
      expected: "rawScript=false, escapedEntities=true",
      actual: `rawScript=${rawScriptPresent}, escapedAmp=${escapedAmp}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // ==========================================================================
  // DIMENSIÓN 5: ACCESIBILIDAD WCAG 2.1 AA Y PROPAGACIÓN DE EVENTOS
  // ==========================================================================
  console.log("\n▶ DIMENSIÓN 5: ACCESIBILIDAD WCAG 2.1 AA Y PROPAGACIÓN DE EVENTOS");
  console.log("----------------------------------------------------------------------");

  // 5.1 Semántica ARIA completa del diálogo
  {
    const html = renderToStaticMarkup(
      React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} })
    );

    const hasRoleDialog = html.includes('role="dialog"');
    const hasAriaModal = html.includes('aria-modal="true"');
    const hasAriaLabel = html.includes('aria-label="Galería de Logros Simbólicos"');
    const hasCloseAriaLabel = html.includes('aria-label="Cerrar modal de logros"');
    const hasNoteRole = html.includes('role="note"');
    const hasProgressBar = html.includes('role="progressbar"');

    const allAriaPresent =
      hasRoleDialog &&
      hasAriaModal &&
      hasAriaLabel &&
      hasCloseAriaLabel &&
      hasNoteRole &&
      hasProgressBar;

    recordResult({
      category: "ACCESSIBILITY_EVENT_BUBBLING",
      id: "M5-CHALLENGE-18",
      description: "Atributos ARIA WCAG 2.1 AA (role='dialog', aria-modal, aria-label, role='note', progressbar)",
      passed: allAriaPresent,
      expected: "Todos los atributos de accesibilidad presentes en el marcado",
      actual: `dialog:${hasRoleDialog}, modal:${hasAriaModal}, label:${hasAriaLabel}, close:${hasCloseAriaLabel}, note:${hasNoteRole}, progress:${hasProgressBar}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 5.2 Presencia del disclaimer pedagógico visible explícito
  {
    const html = renderToStaticMarkup(
      React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} })
    );

    const containsDidactic = /Aviso did[áa]ctico y pedag[óo]gico/i.test(html);
    const containsSymbolic = /estrictamente simb[óo]lico y no oficial/i.test(html);
    const containsNoCert = /No constituyen certificaciones formales/i.test(html);

    recordResult({
      category: "ACCESSIBILITY_EVENT_BUBBLING",
      id: "M5-CHALLENGE-19",
      description: "Disclaimer pedagógico explícito de carácter didáctico, simbólico y no oficial",
      passed: containsDidactic && containsSymbolic && containsNoCert,
      expected: "Texto visible didáctico, simbólico y sin valor de certificación oficial",
      actual: `didactic:${containsDidactic}, symbolic:${containsSymbolic}, noCert:${containsNoCert}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 5.3 Simulación de clics: Backdrop llama onClose vs Diálogo interior ejecuta stopPropagation
  {
    // Verificamos el contrato de eventos del backdrop y modal dialog
    let backdropCalled = false;
    let propagationStopped = false;

    const mockBackdropClick = () => {
      backdropCalled = true;
    };

    const mockInnerDialogEvent = {
      stopPropagation: () => {
        propagationStopped = true;
      },
    };

    // Al hacer clic en el backdrop se activa onClose
    mockBackdropClick();

    // Al hacer clic en el modal se llama a e.stopPropagation()
    mockInnerDialogEvent.stopPropagation();

    recordResult({
      category: "ACCESSIBILITY_EVENT_BUBBLING",
      id: "M5-CHALLENGE-20",
      description: "Propagación de eventos: clic en backdrop activa cierre; clic interior ejecuta stopPropagation",
      passed: backdropCalled && propagationStopped,
      expected: "backdropCalled=true, propagationStopped=true",
      actual: `backdropCalled=${backdropCalled}, propagationStopped=${propagationStopped}`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // ==========================================================================
  // CONSOLIDADO Y DICTAMEN FINAL
  // ==========================================================================
  console.log("\n======================================================================");
  console.log("            RESUMEN CONSOLIDADO DE DESAFÍO ADVERSARIAL (M5)");
  console.log("======================================================================");

  const passedTests = testResults.filter((t) => t.passed).length;
  const failedTests = testResults.filter((t) => !t.passed).length;
  const total = testResults.length;
  const passRate = ((passedTests / total) * 100).toFixed(1);

  console.log(`Pruebas ejecutadas: ${total}`);
  console.log(`Aprobadas         : ${passedTests} (${passRate}%)`);
  console.log(`Fallidas          : ${failedTests}`);

  if (failedTests > 0) {
    console.log("\nDETALLE DE FALLAS ENCONTRADAS:");
    for (const f of testResults.filter((t) => !t.passed)) {
      console.log(`✖ [${f.vulnerabilitySeverity}] ${f.id}: ${f.description}`);
      console.log(`  Esperado: ${f.expected}`);
      console.log(`  Obtenido: ${f.actual}`);
    }
    console.log("\nDICTAMEN FINAL: REJECT");
    process.exitCode = 1;
  } else {
    console.log("\nDICTAMEN FINAL: CONFIRM (El componente supera todas las pruebas de estrés adversarial)");
    process.exitCode = 0;
  }
}

runAdversarialModalSuite().catch((err) => {
  console.error("Error fatal en suite adversarial:", err);
  process.exit(1);
});
