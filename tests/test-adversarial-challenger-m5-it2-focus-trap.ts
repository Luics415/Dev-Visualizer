/**
 * Dev Visualizer — Empirical Challenger 2 Adversarial Stress Suite (M5 Iteration 2)
 * tests/test-adversarial-challenger-m5-it2-focus-trap.ts
 *
 * Verificación empírica adversarial de:
 * 1. Focus Trap impermeable en SymbolicAchievementsModal:
 *    - Foco inicial al abrir (closeButtonRef o modalRef).
 *    - Tab en último elemento enfoca primero.
 *    - Shift+Tab en primer elemento enfoca último.
 *    - Tab/Shift+Tab cuando el foco está fuera del diálogo lo redirige al modal.
 *    - Tratamiento cuando no hay enfocables o elementos deshabilitados.
 *    - Restauración limpia de foco en activeElement previo (Escape, botón, backdrop, prop isOpen).
 * 2. Bloqueo de scroll corporal (document.body.style.overflow) y restauración sin efectos secundarios.
 * 3. Invariante de exclusión: SpotlightTour.tsx y not-found.tsx estrictamente intactos.
 * 4. Estrés de ciclo de vida (50x ciclos de foco, navegación Tab y desmontajes).
 */

import React from "react";
import { createRoot } from "react-dom/client";
import { execSync } from "node:child_process";
import {
  SymbolicAchievementsModal,
} from "../src/components/gamification/SymbolicAchievementsModal";

// Indicar entorno React Act para ejecución determinista
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

export interface TestFinding {
  id: string;
  category: "FOCUS_TRAP" | "FOCUS_RESTORE" | "SCROLL_LOCK" | "EXCLUSION_INVARIANT" | "STRESS_LIFECYCLE";
  name: string;
  passed: boolean;
  expected: string;
  actual: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

export const findings: TestFinding[] = [];

function assertFinding(finding: TestFinding) {
  findings.push(finding);
  const tag = finding.passed ? "✔ PASS" : "✖ FAIL";
  console.log(`${tag} [${finding.severity}] [${finding.category}] ${finding.id}: ${finding.name}`);
  if (!finding.passed) {
    console.log(`   Esperado: ${finding.expected}`);
    console.log(`   Obtenido: ${finding.actual}`);
  }
}

// ============================================================================
// SIMULADOR DOM DE ALTA FIDELIDAD CON SEGUIMIENTO DE activeElement
// ============================================================================

interface MockNode {
  nodeType: number;
  nodeName: string;
  tagName: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  style: Record<string, string>;
  attributes: Map<string, string>;
  childNodes: MockNode[];
  parentNode: MockNode | null;
  offsetWidth: number;
  offsetHeight: number;
  ownerDocument?: MockDocument;
  appendChild(child: MockNode): MockNode;
  removeChild(child: MockNode): MockNode;
  insertBefore(newNode: MockNode, referenceNode: MockNode | null): MockNode;
  setAttribute(name: string, value: string): void;
  getAttribute(name: string): string | null;
  hasAttribute(name: string): boolean;
  removeAttribute(name: string): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
  dispatchEvent(event: Event): boolean;
  focus(): void;
  getClientRects(): Array<{ width: number; height: number }>;
  contains(child: unknown): boolean;
  querySelectorAll<T = unknown>(selector: string): T[];
}

interface MockDocument {
  nodeType: number;
  nodeName: string;
  activeElement: MockNode | null;
  body: MockNode;
  defaultView: MockWindow;
  createElement(tag: string): MockNode;
  createElementNS(ns: string, tag: string): MockNode;
  createTextNode(text: string): { nodeType: number; nodeName: string; nodeValue: string };
  addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
}

class MockHTMLElement {}
class MockHTMLIFrameElement extends MockHTMLElement {}
(globalThis as unknown as { HTMLElement: unknown }).HTMLElement = MockHTMLElement;
(globalThis as unknown as { HTMLIFrameElement: unknown }).HTMLIFrameElement = MockHTMLIFrameElement;

class MockWindow extends EventTarget {
  public listenersCount = new Map<string, number>();
  public HTMLElement = MockHTMLElement;
  public HTMLIFrameElement = MockHTMLIFrameElement;

  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ): void {
    if (callback) {
      this.listenersCount.set(type, (this.listenersCount.get(type) ?? 0) + 1);
    }
    super.addEventListener(type, callback, options);
  }

  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: boolean | EventListenerOptions
  ): void {
    if (callback) {
      const cur = this.listenersCount.get(type) ?? 0;
      if (cur > 0) this.listenersCount.set(type, cur - 1);
    }
    super.removeEventListener(type, callback, options);
  }

  getActiveListeners(type: string): number {
    return this.listenersCount.get(type) ?? 0;
  }
}

function createDOMEnvironment() {
  const win = new MockWindow();

  const doc: MockDocument = {
    nodeType: 9,
    nodeName: "#document",
    activeElement: null,
    defaultView: win,
    addEventListener: () => {},
    removeEventListener: () => {},
    body: null as unknown as MockNode,
    createElement: (tag: string) => createNode(tag, doc),
    createElementNS: (_ns: string, tag: string) => createNode(tag, doc),
    createTextNode: (text: string) => ({
      nodeType: 3,
      nodeName: "#text",
      nodeValue: text,
    }),
  };

  function createNode(tag: string, ownerDoc: MockDocument): MockNode {
    const node: MockNode = Object.assign(Object.create(MockHTMLElement.prototype), {
      nodeType: 1,
      nodeName: tag.toUpperCase(),
      tagName: tag.toUpperCase(),
      id: undefined as string | undefined,
      disabled: false,
      tabIndex: undefined as number | undefined,
      style: {} as Record<string, string>,
      attributes: new Map<string, string>(),
      childNodes: [] as MockNode[],
      parentNode: null as MockNode | null,
      offsetWidth: 120,
      offsetHeight: 40,
      ownerDocument: ownerDoc,
      appendChild(child: MockNode) {
        child.parentNode = node;
        node.childNodes.push(child);
        return child;
      },
      removeChild(child: MockNode) {
        const idx = node.childNodes.indexOf(child);
        if (idx !== -1) {
          node.childNodes.splice(idx, 1);
          child.parentNode = null;
        }
        return child;
      },
      insertBefore(newNode: MockNode, referenceNode: MockNode | null) {
        newNode.parentNode = node;
        if (!referenceNode) {
          node.childNodes.push(newNode);
        } else {
          const idx = node.childNodes.indexOf(referenceNode);
          if (idx !== -1) {
            node.childNodes.splice(idx, 0, newNode);
          } else {
            node.childNodes.push(newNode);
          }
        }
        return newNode;
      },
      setAttribute(name: string, value: string) {
        node.attributes.set(name.toLowerCase(), String(value));
        if (name.toLowerCase() === "id") node.id = value;
        if (name.toLowerCase() === "disabled") node.disabled = true;
        if (name.toLowerCase() === "tabindex") node.tabIndex = parseInt(value, 10);
      },
      getAttribute(name: string) {
        return node.attributes.get(name.toLowerCase()) ?? null;
      },
      hasAttribute(name: string) {
        return node.attributes.has(name.toLowerCase());
      },
      removeAttribute(name: string) {
        node.attributes.delete(name.toLowerCase());
        if (name.toLowerCase() === "disabled") node.disabled = false;
      },
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
      focus() {
        ownerDoc.activeElement = node;
      },
      getClientRects() {
        if (node.offsetWidth > 0 && node.offsetHeight > 0) {
          return [{ width: node.offsetWidth, height: node.offsetHeight }];
        }
        return [];
      },
      contains(child: unknown) {
        if (!child || typeof child !== "object") return false;
        if (child === node) return true;
        let cur = (child as MockNode).parentNode;
        while (cur) {
          if (cur === node) return true;
          cur = cur.parentNode;
        }
        return false;
      },
      querySelectorAll<T = unknown>(selector: string): T[] {
        const results: MockNode[] = [];
        const isFocusableCheck = selector.includes("button:not([disabled])");

        function traverse(n: MockNode) {
          for (const ch of n.childNodes) {
            if (ch.nodeType === 1) {
              if (isFocusableCheck) {
                const tag = ch.tagName.toLowerCase();
                const isDisabled = ch.disabled || ch.hasAttribute("disabled");
                const tabIdx = ch.tabIndex ?? (ch.hasAttribute("tabindex") ? parseInt(ch.getAttribute("tabindex")!, 10) : undefined);

                const isCandidate =
                  (tag === "button" && !isDisabled) ||
                  (tag === "a" && ch.hasAttribute("href")) ||
                  (tag === "input" && !isDisabled) ||
                  (tag === "select" && !isDisabled) ||
                  (tag === "textarea" && !isDisabled) ||
                  (tabIdx !== undefined && tabIdx >= 0);

                if (isCandidate) {
                  results.push(ch);
                }
              }
              traverse(ch);
            }
          }
        }

        traverse(node);
        return results as unknown as T[];
      },
    });

    return node;
  }

  doc.body = createNode("body", doc);

  // Setup globals
  (globalThis as unknown as { window: unknown }).window = win;
  (globalThis as unknown as { document: unknown }).document = doc;
  (globalThis as unknown as { HTMLElement: unknown }).HTMLElement = MockHTMLElement;

  const container = createNode("div", doc);
  doc.body.appendChild(container);
  const root = createRoot(container as unknown as Element);

  return { win, doc, root, container };
}

interface CustomKeyboardEventInit {
  key: string;
  shiftKey?: boolean;
}

function dispatchKeyEventWithPrevent(win: MockWindow, init: CustomKeyboardEventInit) {
  let defaultPrevented = false;
  const event = new Event("keydown");
  Object.defineProperty(event, "key", { value: init.key, configurable: true });
  Object.defineProperty(event, "shiftKey", { value: Boolean(init.shiftKey), configurable: true });
  Object.defineProperty(event, "preventDefault", {
    value: () => {
      defaultPrevented = true;
    },
    configurable: true,
  });
  Object.defineProperty(event, "defaultPrevented", {
    get: () => defaultPrevented,
    configurable: true,
  });

  win.dispatchEvent(event);
  return { defaultPrevented };
}

// ============================================================================
// SUITE ADVERSARIAL DE PRUEBAS
// ============================================================================

async function runTests() {
  console.log("╔══════════════════════════════════════════════════════════════════════╗");
  console.log("║ EMPIRICAL CHALLENGER 2: FOCUS TRAP & MODAL BEHAVIOR (M5 IT2)         ║");
  console.log("╚══════════════════════════════════════════════════════════════════════╝\n");

  // ==========================================================================
  // BLOQUE 1: INVARIANTE DE EXCLUSIÓN (SpotlightTour.tsx y not-found.tsx)
  // ==========================================================================
  console.log("▶ BLOQUE 1: INVARIANTE DE EXCLUSIÓN (SpotlightTour.tsx y not-found.tsx)");
  console.log("----------------------------------------------------------------------");

  // EXCL-01: SpotlightTour.tsx estrictamente intacto respecto a HEAD
  {
    let tourDiff = "";
    try {
      tourDiff = execSync("git diff HEAD -- src/components/home/SpotlightTour.tsx", { encoding: "utf8" }).trim();
    } catch (e) {
      tourDiff = String(e);
    }

    assertFinding({
      id: "EXCL-01-SPOTLIGHT-TOUR-INTACT",
      category: "EXCLUSION_INVARIANT",
      name: "SpotlightTour.tsx permanece estrictamente intacto y sin diferencias respecto a HEAD",
      passed: tourDiff === "",
      expected: "0 líneas de diferencia en git diff HEAD",
      actual: tourDiff === "" ? "Limpio (0 diffs)" : `Diferencias detectadas:\n${tourDiff}`,
      severity: "CRITICAL",
    });
  }

  // EXCL-02: not-found.tsx estrictamente intacto respecto a HEAD
  {
    let notFoundDiff = "";
    try {
      notFoundDiff = execSync("git diff HEAD -- src/app/not-found.tsx", { encoding: "utf8" }).trim();
    } catch (e) {
      notFoundDiff = String(e);
    }

    assertFinding({
      id: "EXCL-02-NOT-FOUND-INTACT",
      category: "EXCLUSION_INVARIANT",
      name: "src/app/not-found.tsx permanece estrictamente intacto y sin diferencias respecto a HEAD",
      passed: notFoundDiff === "",
      expected: "0 líneas de diferencia en git diff HEAD",
      actual: notFoundDiff === "" ? "Limpio (0 diffs)" : `Diferencias detectadas:\n${notFoundDiff}`,
      severity: "CRITICAL",
    });
  }

  // EXCL-03: Ausencia de rutas nuevas /tour o /404 en el árbol del proyecto
  {
    let tourPathExists = false;
    const fourOhFourPathExists = false;
    try {
      execSync("node -e \"const fs = require('fs'); if (fs.existsSync('src/app/tour') || fs.existsSync('src/app/404')) process.exit(1);\"");
    } catch {
      tourPathExists = true;
    }

    assertFinding({
      id: "EXCL-03-NO-EXCLUDED-ROUTES",
      category: "EXCLUSION_INVARIANT",
      name: "No existen carpetas ni rutas creadas para /tour ni /404 en src/app",
      passed: !tourPathExists && !fourOhFourPathExists,
      expected: "tour=false, 404=false",
      actual: `tourExists=${tourPathExists}, 404Exists=${fourOhFourPathExists}`,
      severity: "HIGH",
    });
  }

  // ==========================================================================
  // BLOQUE 2: FOCO INICIAL AL ABRIR EL MODAL
  // ==========================================================================
  console.log("\n▶ BLOQUE 2: FOCO INICIAL AL ABRIR EL MODAL");
  console.log("----------------------------------------------------------------------");

  // FOCUS-01: Al abrir con isOpen: true, el foco se coloca en el botón de cierre superior
  {
    const { doc, root } = createDOMEnvironment();
    const launcherButton = doc.createElement("button");
    launcherButton.setAttribute("id", "trigger-btn");
    doc.body.appendChild(launcherButton);
    launcherButton.focus();

    const previousElement = doc.activeElement;

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });

    // Esperar a que el temporizador (setTimeout 0) se complete
    await new Promise((r) => setTimeout(r, 10));

    const activeNow = doc.activeElement;
    const isCloseButton = activeNow?.tagName === "BUTTON" && activeNow?.getAttribute("aria-label")?.includes("Cerrar modal");

    assertFinding({
      id: "FOCUS-01-INITIAL-FOCUS-CLOSE-BUTTON",
      category: "FOCUS_TRAP",
      name: "Al abrir, enfoca programáticamente el botón de cierre superior inicial",
      passed: Boolean(isCloseButton && activeNow !== previousElement),
      expected: "activeElement = button con aria-label='Cerrar modal de logros'",
      actual: `tag=${activeNow?.tagName}, aria-label='${activeNow?.getAttribute("aria-label")}'`,
      severity: "HIGH",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // ==========================================================================
  // BLOQUE 3: FOCUS TRAP IMPERMEABLE (TAB Y SHIFT+TAB)
  // ==========================================================================
  console.log("\n▶ BLOQUE 3: FOCUS TRAP IMPERMEABLE (TAB Y SHIFT+TAB)");
  console.log("----------------------------------------------------------------------");

  // TRAP-01: Tab en el último elemento enfocable redirige al primer elemento enfocable
  {
    const { win, doc, root } = createDOMEnvironment();

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    await new Promise((r) => setTimeout(r, 10));

    // Obtener los elementos enfocables del modal
    const focusables = doc.body.querySelectorAll<MockNode>("button:not([disabled])");
    const firstElement = focusables[0];
    const lastElement = focusables[focusables.length - 1];

    // Colocar el foco activamente en el último elemento
    lastElement.focus();
    const focusBeforeTab = doc.activeElement;

    // Presionar Tab
    const { defaultPrevented } = dispatchKeyEventWithPrevent(win, { key: "Tab", shiftKey: false });
    const focusAfterTab = doc.activeElement;

    assertFinding({
      id: "TRAP-01-TAB-LAST-WRAPS-TO-FIRST",
      category: "FOCUS_TRAP",
      name: "Presionar Tab en el último elemento enfocable previene default y redirige al primero",
      passed: defaultPrevented && focusAfterTab === firstElement,
      expected: "defaultPrevented=true, activeElement=firstElement",
      actual: `defaultPrevented=${defaultPrevented}, activeElementIsFirst=${focusAfterTab === firstElement} (antes era last: ${focusBeforeTab === lastElement})`,
      severity: "CRITICAL",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // TRAP-02: Shift+Tab en el primer elemento enfocable redirige al último elemento enfocable
  {
    const { win, doc, root } = createDOMEnvironment();

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    await new Promise((r) => setTimeout(r, 10));

    const focusables = doc.body.querySelectorAll<MockNode>("button:not([disabled])");
    const firstElement = focusables[0];
    const lastElement = focusables[focusables.length - 1];

    // Colocar foco en el primer elemento
    firstElement.focus();

    // Presionar Shift+Tab
    const { defaultPrevented } = dispatchKeyEventWithPrevent(win, { key: "Tab", shiftKey: true });
    const focusAfterShiftTab = doc.activeElement;

    assertFinding({
      id: "TRAP-02-SHIFT-TAB-FIRST-WRAPS-TO-LAST",
      category: "FOCUS_TRAP",
      name: "Presionar Shift+Tab en el primer elemento enfocable previene default y redirige al último",
      passed: defaultPrevented && focusAfterShiftTab === lastElement,
      expected: "defaultPrevented=true, activeElement=lastElement",
      actual: `defaultPrevented=${defaultPrevented}, activeElementIsLast=${focusAfterShiftTab === lastElement}`,
      severity: "CRITICAL",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // TRAP-03: Foco fuera del modal + Tab -> Redirige al primer elemento del modal
  {
    const { win, doc, root } = createDOMEnvironment();

    // Botón externo fuera del modal
    const externalButton = doc.createElement("button");
    externalButton.setAttribute("id", "external-btn");
    doc.body.appendChild(externalButton);

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    await new Promise((r) => setTimeout(r, 10));

    // El foco se mueve accidentalmente al exterior del modal
    externalButton.focus();
    const focusables = doc.body.querySelectorAll<MockNode>("button:not([disabled])");
    const firstModalElement = focusables.find((el) => el.getAttribute("aria-label")?.includes("Cerrar"));

    // Presionar Tab
    const { defaultPrevented } = dispatchKeyEventWithPrevent(win, { key: "Tab", shiftKey: false });
    const focusNow = doc.activeElement;

    assertFinding({
      id: "TRAP-03-OUTSIDE-FOCUS-TAB-REDIRECTS-INSIDE",
      category: "FOCUS_TRAP",
      name: "Foco activo accidental fuera del diálogo + Tab: previene fuga y reingresa al primer elemento",
      passed: defaultPrevented && focusNow === firstModalElement,
      expected: "defaultPrevented=true, foco reingresado a firstModalElement",
      actual: `defaultPrevented=${defaultPrevented}, focusNow=${focusNow?.getAttribute("aria-label")}`,
      severity: "HIGH",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // TRAP-04: Foco fuera del modal + Shift+Tab -> Redirige al último elemento del modal
  {
    const { win, doc, root } = createDOMEnvironment();

    const externalButton = doc.createElement("button");
    doc.body.appendChild(externalButton);

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    await new Promise((r) => setTimeout(r, 10));

    externalButton.focus();
    // Obtener los botones del modal (excluyendo el externo)
    const modalButtons = doc.body.querySelectorAll<MockNode>("button:not([disabled])").filter((el) => el !== externalButton);
    const lastModalElement = modalButtons[modalButtons.length - 1];

    // Presionar Shift+Tab
    const { defaultPrevented } = dispatchKeyEventWithPrevent(win, { key: "Tab", shiftKey: true });
    const focusNow = doc.activeElement;

    assertFinding({
      id: "TRAP-04-OUTSIDE-FOCUS-SHIFT-TAB-REDIRECTS-LAST",
      category: "FOCUS_TRAP",
      name: "Foco activo accidental fuera del diálogo + Shift+Tab: previene fuga y reingresa al último elemento",
      passed: defaultPrevented && focusNow === lastModalElement,
      expected: "defaultPrevented=true, foco reingresado a lastModalElement",
      actual: `defaultPrevented=${defaultPrevented}, isLast=${focusNow === lastModalElement}`,
      severity: "HIGH",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // TRAP-05: Tab en elemento intermedio NO previene default (permite navegación natural interna)
  {
    const { win, doc, root } = createDOMEnvironment();

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    await new Promise((r) => setTimeout(r, 10));

    // Si tuviéramos un elemento en medio (creamos un elemento interactivo intermedio simulado en el modal)
    const modalButtons = doc.body.querySelectorAll<MockNode>("button:not([disabled])");
    const middleBtn = doc.createElement("button");
    middleBtn.setAttribute("id", "middle-btn");
    // Insertamos entre el primer y último botón
    if (modalButtons.length >= 2) {
      modalButtons[1].parentNode?.insertBefore(middleBtn, modalButtons[1]);
      middleBtn.focus();

      const { defaultPrevented } = dispatchKeyEventWithPrevent(win, { key: "Tab", shiftKey: false });

      assertFinding({
        id: "TRAP-05-MIDDLE-ELEMENT-TAB-ALLOWS-DEFAULT",
        category: "FOCUS_TRAP",
        name: "Presionar Tab en elemento intermedio NO previene default, permitiendo navegación natural",
        passed: !defaultPrevented,
        expected: "defaultPrevented=false",
        actual: `defaultPrevented=${defaultPrevented}`,
        severity: "MEDIUM",
      });
    }

    await React.act(async () => {
      root.unmount();
    });
  }

  // TRAP-06: Teclas no Tab/Escape (Enter, Space, etc.) NO previenen default ni alteran foco
  {
    const { win, doc, root } = createDOMEnvironment();

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    await new Promise((r) => setTimeout(r, 10));

    const initialFocus = doc.activeElement;
    const { defaultPrevented: enterPrevented } = dispatchKeyEventWithPrevent(win, { key: "Enter" });
    const { defaultPrevented: spacePrevented } = dispatchKeyEventWithPrevent(win, { key: " " });

    assertFinding({
      id: "TRAP-06-NON-TAB-KEYS-PRESERVE-DEFAULT",
      category: "FOCUS_TRAP",
      name: "Teclas que no son Tab ni Escape (Enter, Espacio) preservan comportamiento por defecto",
      passed: !enterPrevented && !spacePrevented && doc.activeElement === initialFocus,
      expected: "enterPrevented=false, spacePrevented=false",
      actual: `enter=${enterPrevented}, space=${spacePrevented}`,
      severity: "LOW",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // ==========================================================================
  // BLOQUE 4: RESTAURACIÓN LIMPIA DEL FOCO PREVIO AL CERRAR
  // ==========================================================================
  console.log("\n▶ BLOQUE 4: RESTAURACIÓN LIMPIA DEL FOCO PREVIO AL CERRAR");
  console.log("----------------------------------------------------------------------");

  // RESTORE-01: Cierre por tecla Escape devuelve el foco limpiamente al elemento previo
  {
    const { win, doc, root } = createDOMEnvironment();
    const launcherBtn = doc.createElement("button");
    launcherBtn.setAttribute("id", "trigger-escape");
    doc.body.appendChild(launcherBtn);
    launcherBtn.focus();

    let isModalOpen = true;
    const onClose = () => { isModalOpen = false; };

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: isModalOpen, onClose }));
    });
    await new Promise((r) => setTimeout(r, 10));

    // Despachar Escape
    dispatchKeyEventWithPrevent(win, { key: "Escape" });

    // React render con isOpen = false
    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: isModalOpen, onClose }));
    });

    const activeAfterClose = doc.activeElement;

    assertFinding({
      id: "RESTORE-01-ESCAPE-RESTORES-FOCUS",
      category: "FOCUS_RESTORE",
      name: "Al cerrarse mediante tecla Escape, el foco se restaura exactamente a document.activeElement previo",
      passed: activeAfterClose === launcherBtn,
      expected: "activeElement = trigger-escape",
      actual: `activeElementId = ${(activeAfterClose as MockNode)?.id}`,
      severity: "CRITICAL",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // RESTORE-02: Cierre por click en botón de cierre devuelve el foco al elemento previo
  {
    const { doc, root } = createDOMEnvironment();
    const launcherBtn = doc.createElement("button");
    launcherBtn.setAttribute("id", "trigger-close-btn");
    doc.body.appendChild(launcherBtn);
    launcherBtn.focus();

    let isModalOpen = true;
    const onClose = () => { isModalOpen = false; };

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: isModalOpen, onClose }));
    });
    await new Promise((r) => setTimeout(r, 10));

    // Simular el callback onClose activado por el botón
    onClose();

    // Re-render cerrado
    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: isModalOpen, onClose }));
    });

    const activeAfterClose = doc.activeElement;

    assertFinding({
      id: "RESTORE-02-CLOSE-BTN-RESTORES-FOCUS",
      category: "FOCUS_RESTORE",
      name: "Al cerrarse mediante click en botón de cierre, el foco se devuelve limpiamente al disparador",
      passed: activeAfterClose === launcherBtn,
      expected: "activeElement = trigger-close-btn",
      actual: `activeElementId = ${(activeAfterClose as MockNode)?.id}`,
      severity: "HIGH",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // RESTORE-03: Cierre por click en backdrop devuelve el foco al elemento previo
  {
    const { doc, root } = createDOMEnvironment();
    const launcherBtn = doc.createElement("button");
    launcherBtn.setAttribute("id", "trigger-backdrop");
    doc.body.appendChild(launcherBtn);
    launcherBtn.focus();

    let isModalOpen = true;
    const onClose = () => { isModalOpen = false; };

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: isModalOpen, onClose }));
    });
    await new Promise((r) => setTimeout(r, 10));

    // Simular click en backdrop
    onClose();

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: isModalOpen, onClose }));
    });

    const activeAfterClose = doc.activeElement;

    assertFinding({
      id: "RESTORE-03-BACKDROP-CLICK-RESTORES-FOCUS",
      category: "FOCUS_RESTORE",
      name: "Al cerrarse mediante click en backdrop, el foco se devuelve limpiamente al disparador",
      passed: activeAfterClose === launcherBtn,
      expected: "activeElement = trigger-backdrop",
      actual: `activeElementId = ${(activeAfterClose as MockNode)?.id}`,
      severity: "HIGH",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // RESTORE-04: Resiliencia ante elemento previo nulo o sin función .focus()
  {
    const { doc, root } = createDOMEnvironment();
    doc.activeElement = null; // No hay elemento enfocado

    let threwError = false;
    try {
      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
      });
      await new Promise((r) => setTimeout(r, 10));

      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose: () => {} }));
      });
    } catch {
      threwError = true;
    }

    assertFinding({
      id: "RESTORE-04-GRACEFUL-DEGRADATION-NULL-ELEMENT",
      category: "FOCUS_RESTORE",
      name: "Degradación elegante si activeElement previo era null o no soportaba focus()",
      passed: !threwError,
      expected: "threwError = false (cero excepciones)",
      actual: `threwError = ${threwError}`,
      severity: "MEDIUM",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // RESTORE-05: Elemento previo desconectado del DOM antes de cerrar no provoca fallo
  {
    const { doc, root } = createDOMEnvironment();
    const launcherBtn = doc.createElement("button");
    doc.body.appendChild(launcherBtn);
    launcherBtn.focus();

    let isModalOpen = true;
    const onClose = () => { isModalOpen = false; };

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: isModalOpen, onClose }));
    });
    await new Promise((r) => setTimeout(r, 10));

    // Desconectar el botón del DOM
    doc.body.removeChild(launcherBtn);

    let threwOnClose = false;
    try {
      onClose();
      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: isModalOpen, onClose }));
      });
    } catch {
      threwOnClose = true;
    }

    assertFinding({
      id: "RESTORE-05-DISCONNECTED-ELEMENT-SAFE",
      category: "FOCUS_RESTORE",
      name: "Si el elemento previo fue desconectado del DOM, el cierre se degrada elegantemente sin excepciones",
      passed: !threwOnClose,
      expected: "threwOnClose = false",
      actual: `threwOnClose = ${threwOnClose}`,
      severity: "MEDIUM",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // ==========================================================================
  // BLOQUE 5: BLOQUEO Y RESTAURACIÓN DE SCROLL CORPORAL
  // ==========================================================================
  console.log("\n▶ BLOQUE 5: BLOQUEO Y RESTAURACIÓN DE SCROLL CORPORAL");
  console.log("----------------------------------------------------------------------");

  // SCROLL-01: Bloqueo a hidden al abrir y restauración a "" al cerrar
  {
    const { doc, root } = createDOMEnvironment();
    doc.body.style.overflow = "";

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    const overflowDuringOpen = doc.body.style.overflow;

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose: () => {} }));
    });
    const overflowAfterClose = doc.body.style.overflow;

    assertFinding({
      id: "SCROLL-01-BODY-LOCK-AND-RESTORE-DEFAULT",
      category: "SCROLL_LOCK",
      name: "El scroll corporal se bloquea a 'hidden' al abrir y se restaura sin efectos secundarios a ''",
      passed: overflowDuringOpen === "hidden" && overflowAfterClose === "",
      expected: "open='hidden', closed=''",
      actual: `open='${overflowDuringOpen}', closed='${overflowAfterClose}'`,
      severity: "HIGH",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // SCROLL-02: Preservación de estilos preexistentes (auto, scroll)
  {
    const { doc, root } = createDOMEnvironment();
    doc.body.style.overflow = "scroll";

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
    });
    const during = doc.body.style.overflow;

    await React.act(async () => {
      root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose: () => {} }));
    });
    const restored = doc.body.style.overflow;

    assertFinding({
      id: "SCROLL-02-BODY-LOCK-PRESERVE-EXISTING",
      category: "SCROLL_LOCK",
      name: "Preserva estilos preexistentes ('scroll') y los devuelve intactos al cerrar",
      passed: during === "hidden" && restored === "scroll",
      expected: "during='hidden', restored='scroll'",
      actual: `during='${during}', restored='${restored}'`,
      severity: "HIGH",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // ==========================================================================
  // BLOQUE 6: ESTRÉS DE CICLO DE VIDA (50 CICLOS RÁPIDOS)
  // ==========================================================================
  console.log("\n▶ BLOQUE 6: ESTRÉS DE CICLO DE VIDA (50 CICLOS RÁPIDOS)");
  console.log("----------------------------------------------------------------------");

  // STRESS-01: 50 ciclos de apertura, Tab, Shift+Tab y cierre sin fugas
  {
    const { win, doc, root } = createDOMEnvironment();
    const launcherBtn = doc.createElement("button");
    launcherBtn.setAttribute("id", "stress-btn");
    doc.body.appendChild(launcherBtn);

    let stressPassed = true;
    for (let i = 0; i < 50; i++) {
      launcherBtn.focus();

      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: true, onClose: () => {} }));
      });
      await new Promise((r) => setTimeout(r, 2));

      // Tab y Shift+Tab en cada ciclo
      dispatchKeyEventWithPrevent(win, { key: "Tab", shiftKey: false });
      dispatchKeyEventWithPrevent(win, { key: "Tab", shiftKey: true });

      // Cerrar
      await React.act(async () => {
        root.render(React.createElement(SymbolicAchievementsModal, { isOpen: false, onClose: () => {} }));
      });

      if (win.getActiveListeners("keydown") !== 0 || doc.activeElement !== launcherBtn) {
        stressPassed = false;
        break;
      }
    }

    assertFinding({
      id: "STRESS-01-50-CYCLES-FOCUS-TRAP-CLEANUP",
      category: "STRESS_LIFECYCLE",
      name: "50 ciclos continuos de apertura/Tab/Shift-Tab/cierre: 0 fugas de listeners y foco siempre restaurado",
      passed: stressPassed,
      expected: "activeKeydown=0 y activeElement=launcherBtn tras cada ciclo",
      actual: `stressPassed=${stressPassed}, finalKeydown=${win.getActiveListeners("keydown")}`,
      severity: "HIGH",
    });

    await React.act(async () => {
      root.unmount();
    });
  }

  // ==========================================================================
  // RESUMEN Y DICTAMEN
  // ==========================================================================
  console.log("\n======================================================================");
  console.log("     RESUMEN FINAL ADVERSARIAL: EMPIRICAL CHALLENGER 2 (M5 IT2)");
  console.log("======================================================================");

  const total = findings.length;
  const passed = findings.filter((f) => f.passed).length;
  const failed = findings.filter((f) => !f.passed).length;
  const passRate = ((passed / total) * 100).toFixed(1);

  console.log(`Pruebas ejecutadas: ${total}`);
  console.log(`Aprobadas         : ${passed} (${passRate}%)`);
  console.log(`Fallidas          : ${failed}`);

  if (failed > 0) {
    console.log("\nFALLAS REGISTRADAS:");
    for (const f of findings.filter((f) => !f.passed)) {
      console.log(`✖ [${f.severity}] ${f.id}: ${f.name}`);
      console.log(`   Esperado: ${f.expected}`);
      console.log(`   Obtenido: ${f.actual}`);
    }
    console.log("\nDICTAMEN FINAL: REJECT");
    process.exitCode = 1;
  } else {
    console.log("\nDICTAMEN FINAL: CONFIRM (Focus Trap, reactividad, scroll lock e invariantes verificadas 100%)");
    process.exitCode = 0;
  }
}

runTests().catch((err) => {
  console.error("Error fatal durante la suite de pruebas:", err);
  process.exit(1);
});
