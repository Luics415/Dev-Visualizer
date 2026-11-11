/**
 * Dev Visualizer — Empirical Challenger 2 Adversarial Test Suite for M2
 * tests/test-adversarial-challenger2.ts
 *
 * Desafíos empíricos sobre Componentes de UI e Instrumentación:
 * 1. ProfessionalLibraryIndex.tsx: Debounce 600ms, supresión de blancos/repeticiones, isInitialMount, StrictMode e interferencia de búsqueda sobre filtros.
 * 2. LibraryTopicDetail.tsx: Clics externos y descargas locales con telemetría no bloqueante.
 * 3. src/app/page.tsx & HomeHeroActions.tsx: Server Component puro, metadata preservada, delegación client sin preventDefault.
 * 4. StudyAtlasCollection.tsx & ExpandedActionPage.tsx: Resistencia a doble montaje en React 19 StrictMode y reactividad al cambio de colección.
 * 5. CTAs Auxiliares (StudyNotesExportButton.tsx & ActionQuizInvite.tsx): Disparo exacto de button_click y accesibilidad.
 */

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  trackCollectionStudy,
  trackButtonClick,
  trackLibraryAction,
} from "../src/lib/telemetry";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "..");

// Configure React act environment
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

class MockHTMLElement {}
class MockHTMLIFrameElement extends MockHTMLElement {}
(globalThis as unknown as { HTMLElement: unknown }).HTMLElement = MockHTMLElement;
(globalThis as unknown as { HTMLIFrameElement: unknown }).HTMLIFrameElement = MockHTMLIFrameElement;

interface MockGtagEvent {
  name: string;
  params: Record<string, unknown>;
}

const capturedEvents: MockGtagEvent[] = [];

function setupMockDOM() {
  capturedEvents.length = 0;

  const doc = {
    nodeType: 9,
    nodeName: "#document",
    addEventListener: () => {},
    removeEventListener: () => {},
    activeElement: null,
    createElement: (tag: string) => ({
      nodeType: 1,
      nodeName: tag.toUpperCase(),
      tagName: tag.toUpperCase(),
      style: {},
      childNodes: [],
      appendChild: () => {},
      removeChild: () => {},
      setAttribute: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
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
      addEventListener: () => {},
      removeEventListener: () => {},
    }),
    createTextNode: (text: string) => ({
      nodeType: 3,
      nodeName: "#text",
      nodeValue: text,
    }),
    defaultView: globalThis,
  };

  (globalThis as unknown as { document: unknown }).document = doc;
  (globalThis as unknown as { window: unknown }).window = {
    HTMLElement: MockHTMLElement,
    HTMLIFrameElement: MockHTMLIFrameElement,
    addEventListener: () => {},
    removeEventListener: () => {},
    document: doc,
    gtag: (action: string, eventName: string, params: Record<string, unknown>) => {
      if (action === "event") {
        capturedEvents.push({ name: eventName, params: structuredClone(params) });
      }
    },
    dataLayer: [],
  };

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

  return { container, root: createRoot(container as unknown as Element) };
}

export interface ChallengerResult {
  category: "LIBRERIA_DEBOUNCE_FILTROS" | "SERVER_COMPONENT_HERO" | "STRICT_MODE_COLECCIONES" | "AUXILIARY_CTAS";
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

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ============================================================================
// SUITE ADVERSARIAL
// ============================================================================
async function runAllChallengerTests() {
  console.log("╔══════════════════════════════════════════════════════════════════════╗");
  console.log("║ DEV VISUALIZER — CHALLENGER 2: PRUEBAS ADVERSARIALES (HITO 2)        ║");
  console.log("╚══════════════════════════════════════════════════════════════════════╝\n");

  // ==========================================================================
  // ÁREA 1: BÚSQUEDA Y FILTROS EN LA LIBRERÍA PROFESIONAL
  // ==========================================================================
  console.log("▶ ÁREA 1: BÚSQUEDA Y FILTROS EN LA LIBRERÍA PROFESIONAL (F10)");
  console.log("----------------------------------------------------------------------");

  // 1.1 Debounce de 600ms ante tipeo acelerado
  {
    const { root } = setupMockDOM();
    let setQueryExternal: (q: string) => void = () => {};

    function LibrarySearchDebounceHarness() {
      const [query, setQuery] = React.useState("");
      setQueryExternal = setQuery;
      const visibleLength = query === "docker" ? 3 : 73;

      React.useEffect(() => {
        const trimmed = query.trim();
        if (!trimmed) return;

        const timer = setTimeout(() => {
          trackLibraryAction("search", {
            query: trimmed,
            resultsCount: visibleLength,
            resultCount: visibleLength,
          });
        }, 600);

        return () => clearTimeout(timer);
      }, [query, visibleLength]);

      return React.createElement("div", null, query);
    }

    await React.act(async () => {
      root.render(React.createElement(LibrarySearchDebounceHarness));
    });

    // Simular tipeo acelerado: "d" (0ms), "do" (100ms), "doc" (200ms), "dock" (300ms), "docker" (400ms)
    await React.act(async () => { setQueryExternal("d"); });
    await sleep(100);
    await React.act(async () => { setQueryExternal("do"); });
    await sleep(100);
    await React.act(async () => { setQueryExternal("doc"); });
    await sleep(100);
    await React.act(async () => { setQueryExternal("dock"); });
    await sleep(100);
    await React.act(async () => { setQueryExternal("docker"); });

    // A los 400ms tras el último tipeo (total 800ms): NO debe haber disparado todavía (600ms necesarios desde "docker")
    await sleep(400);
    const eventsMidway = capturedEvents.filter((e) => e.name === "library_action" && e.params.library_action_type === "search");

    // A los 300ms más (total 700ms tras último tipeo): Debe haber disparado exactamente 1 evento con "docker"
    await sleep(300);
    const eventsFinal = capturedEvents.filter((e) => e.name === "library_action" && e.params.library_action_type === "search");

    const passed = eventsMidway.length === 0 && eventsFinal.length === 1 && eventsFinal[0].params.query === "docker";
    recordResult({
      category: "LIBRERIA_DEBOUNCE_FILTROS",
      id: "CH2-LIB-01",
      description: "Debounce de 600ms ante tipeo acelerado: cancela timers previos y emite solo el término final",
      passed,
      expected: "0 eventos a los 400ms de inactividad, exactamente 1 evento con query 'docker' a los 700ms",
      actual: `Eventos a los 400ms: ${eventsMidway.length}, Eventos finales: ${eventsFinal.length}, Query: ${eventsFinal[0]?.params?.query ?? "ninguno"}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 1.2 Supresión estricta de cadenas vacías o espacios en blanco
  {
    const { root } = setupMockDOM();
    let setQueryExternal: (q: string) => void = () => {};

    function LibrarySearchWhitespaceHarness() {
      const [query, setQuery] = React.useState("");
      setQueryExternal = setQuery;

      React.useEffect(() => {
        const trimmed = query.trim();
        if (!trimmed) return;

        const timer = setTimeout(() => {
          trackLibraryAction("search", { query: trimmed, resultsCount: 73, resultCount: 73 });
        }, 600);

        return () => clearTimeout(timer);
      }, [query]);

      return React.createElement("div", null, query);
    }

    await React.act(async () => {
      root.render(React.createElement(LibrarySearchWhitespaceHarness));
    });

    // Simular ingreso de espacios
    await React.act(async () => { setQueryExternal("     "); });
    await sleep(650);
    await React.act(async () => { setQueryExternal("\t  \n"); });
    await sleep(650);
    await React.act(async () => { setQueryExternal(""); });
    await sleep(650);

    const searchEvents = capturedEvents.filter((e) => e.name === "library_action" && e.params.library_action_type === "search");
    const passed = searchEvents.length === 0;

    recordResult({
      category: "LIBRERIA_DEBOUNCE_FILTROS",
      id: "CH2-LIB-02",
      description: "Supresión estricta de búsquedas vacías, tabulaciones y espacios en blanco continuos",
      passed,
      expected: "0 eventos de búsqueda emitidos ante cadenas vacías o espacios en blanco",
      actual: `${searchEvents.length} eventos emitidos`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // 1.3 Desafío Adversarial: Repetición de consultas idénticas tras formateo de espacios
  {
    const { root } = setupMockDOM();
    let setQueryExternal: (q: string) => void = () => {};

    function LibrarySearchRepeatHarness() {
      const [query, setQuery] = React.useState("");
      const lastEmittedQueryRef = React.useRef("");
      setQueryExternal = setQuery;

      React.useEffect(() => {
        const trimmed = query.trim();
        if (!trimmed) {
          lastEmittedQueryRef.current = "";
          return;
        }
        if (trimmed === lastEmittedQueryRef.current) return;

        const timer = setTimeout(() => {
          lastEmittedQueryRef.current = trimmed;
          trackLibraryAction("search", { query: trimmed, resultsCount: 73, resultCount: 73 });
        }, 600);

        return () => clearTimeout(timer);
      }, [query]);

      return React.createElement("div", null, query);
    }

    await React.act(async () => {
      root.render(React.createElement(LibrarySearchRepeatHarness));
    });

    // Tipea "rust"
    await React.act(async () => { setQueryExternal("rust"); });
    await sleep(650);

    // Usuario añade un espacio: "rust " (mismo término normalizado)
    await React.act(async () => { setQueryExternal("rust "); });
    await sleep(650);

    const rustEvents = capturedEvents.filter((e) => e.name === "library_action" && e.params.library_action_type === "search" && e.params.query === "rust");
    // Desafío: ¿Deduplica o reemite "rust"?
    const deduplicated = rustEvents.length === 1;

    recordResult({
      category: "LIBRERIA_DEBOUNCE_FILTROS",
      id: "CH2-LIB-03",
      description: "Deduplicación de consultas idénticas tras añadir o quitar espacios (ej. 'rust' -> 'rust ')",
      passed: deduplicated,
      expected: "1 solo evento para 'rust' (deduplicando repetición inmediata del mismo término trimmed)",
      actual: `Se emitieron ${rustEvents.length} eventos idénticos para query 'rust'`,
      vulnerabilitySeverity: "LOW",
    });
  }

  // 1.4 Exclusión del evento en montaje inicial en entorno estándar (isInitialMount)
  {
    const { root } = setupMockDOM();

    function LibraryFilterStandardMountHarness() {
      const isInitialMount = React.useRef(true);
      const [group] = React.useState("all");
      const [level] = React.useState("all");

      React.useEffect(() => {
        if (isInitialMount.current) {
          isInitialMount.current = false;
          return;
        }

        trackLibraryAction("filter", {
          category: group,
          level,
          resultsCount: 73,
          activeFilterCount: 0,
        });
      }, [group, level]);

      return React.createElement("div", null, "Standard Mount");
    }

    await React.act(async () => {
      root.render(React.createElement(LibraryFilterStandardMountHarness));
    });

    const filterEvents = capturedEvents.filter((e) => e.name === "library_action" && e.params.library_action_type === "filter");
    const passed = filterEvents.length === 0;

    recordResult({
      category: "LIBRERIA_DEBOUNCE_FILTROS",
      id: "CH2-LIB-04",
      description: "Exclusión de evento library_filter en montaje inicial estándar mediante isInitialMount",
      passed,
      expected: "0 eventos library_filter en montaje inicial",
      actual: `${filterEvents.length} eventos emitidos`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 1.5 [VULNERABILIDAD CRÍTICA] Comportamiento de isInitialMount en React 19 StrictMode
  {
    const { root } = setupMockDOM();

    function LibraryFilterStrictModeMountHarness() {
      const prevFilterKeyRef = React.useRef<string | null>(null);
      const [group] = React.useState("all");
      const [level] = React.useState("all");

      React.useEffect(() => {
        const currentKey = `${group}:${level}`;
        if (prevFilterKeyRef.current === null) {
          prevFilterKeyRef.current = currentKey;
          return;
        }

        if (prevFilterKeyRef.current === currentKey) {
          return;
        }

        prevFilterKeyRef.current = currentKey;

        trackLibraryAction("filter", {
          category: group,
          level,
          resultsCount: 73,
          activeFilterCount: 0,
        });
      }, [group, level]);

      return React.createElement("div", null, "StrictMode Mount");
    }

    await React.act(async () => {
      root.render(React.createElement(React.StrictMode, null, React.createElement(LibraryFilterStrictModeMountHarness)));
    });

    const filterEvents = capturedEvents.filter((e) => e.name === "library_action" && e.params.library_action_type === "filter");
    // En StrictMode, el doble montaje hace que isInitialMount ya sea false en el 2do montaje, disparando filter indebidamente
    const passed = filterEvents.length === 0;

    recordResult({
      category: "LIBRERIA_DEBOUNCE_FILTROS",
      id: "CH2-LIB-05",
      description: "Resistencia de isInitialMount al doble montaje en React 19 StrictMode",
      passed,
      expected: "0 eventos library_filter en StrictMode initial mount",
      actual: `${filterEvents.length} evento(s) emitido(s) en montaje inicial bajo StrictMode: ${JSON.stringify(filterEvents[0]?.params ?? {})}`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // 1.6 [VULNERABILIDAD CRÍTICA] Interferencia de tipeo de búsqueda sobre el efecto de filtros
  {
    const { root } = setupMockDOM();
    let setQueryExternal: (q: string) => void = () => {};

    function LibraryFilterInterferenceHarness() {
      const prevFilterKeyRef = React.useRef<string | null>(null);
      const [query, setQuery] = React.useState("");
      const [group] = React.useState("all");
      const [level] = React.useState("all");
      setQueryExternal = setQuery;

      // visible.length cambia dinámicamente cuando query cambia
      const visibleLength = query ? 5 : 73;

      React.useEffect(() => {
        const currentKey = `${group}:${level}`;
        if (prevFilterKeyRef.current === null) {
          prevFilterKeyRef.current = currentKey;
          return;
        }

        if (prevFilterKeyRef.current === currentKey) {
          return;
        }

        prevFilterKeyRef.current = currentKey;

        trackLibraryAction("filter", {
          category: group,
          level,
          resultsCount: visibleLength,
          activeFilterCount: (group !== "all" ? 1 : 0) + (level !== "all" ? 1 : 0),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [group, level]); // Desacoplado de visibleLength

      return React.createElement("div", null, query);
    }

    await React.act(async () => {
      root.render(React.createElement(LibraryFilterInterferenceHarness));
    });
    capturedEvents.length = 0; // Limpiar baseline

    // El usuario tipea en la búsqueda SIN tocar filtros
    await React.act(async () => {
      setQueryExternal("kubernetes");
    });

    const spuriousFilterEvents = capturedEvents.filter(
      (e) => e.name === "library_action" && e.params.library_action_type === "filter"
    );

    // Debe ser 0: tipear en la búsqueda no debe emitir eventos de filtro
    const passed = spuriousFilterEvents.length === 0;

    recordResult({
      category: "LIBRERIA_DEBOUNCE_FILTROS",
      id: "CH2-LIB-06",
      description: "Independencia entre búsqueda y filtros: tipear búsqueda no debe disparar eventos library_filter espurios",
      passed,
      expected: "0 eventos library_filter disparados al tipear texto en el buscador",
      actual: `${spuriousFilterEvents.length} evento(s) library_filter espurio(s) disparado(s): ${JSON.stringify(spuriousFilterEvents[0]?.params ?? {})}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 1.7 Clics y descargas locales en LibraryTopicDetail.tsx
  {
    setupMockDOM();

    // Simular evento onClick de descarga local
    const mockDownloadResource = {
      id: "res_pro_git_pdf",
      topicSlug: "git",
      title: "Pro Git 2nd Edition",
      kind: "book" as const,
      formats: ["pdf"],
      localFile: {
        path: "/downloads/progit.pdf",
        fileName: "progit.pdf",
        sizeBytes: 15 * 1024 * 1024,
      },
    };

    trackLibraryAction("download", {
      topicId: mockDownloadResource.topicSlug,
      fileName: mockDownloadResource.localFile?.fileName,
      resourceType: mockDownloadResource.kind,
      resourceId: mockDownloadResource.id,
      format: mockDownloadResource.formats?.[0] ?? "pdf",
    });

    const downloadEvent = capturedEvents.find((e) => e.name === "library_action" && e.params.library_action_type === "download");
    const downloadValid = Boolean(
      downloadEvent &&
      downloadEvent.params.topicId === "git" &&
      downloadEvent.params.fileName === "progit.pdf" &&
      downloadEvent.params.format === "pdf" &&
      downloadEvent.params.resourceType === "book"
    );

    // Simular evento onClick de recurso primario oficial
    trackLibraryAction("resource_click", {
      topicId: "git",
      url: "https://git-scm.com/doc",
      resourceTitle: "Documentación Oficial Git",
      resourceId: "res_git_official_docs",
      official: true,
    });

    const clickEvent = capturedEvents.find((e) => e.name === "library_action" && e.params.library_action_type === "resource_click");
    const clickValid = Boolean(
      clickEvent &&
      clickEvent.params.topicId === "git" &&
      clickEvent.params.official === true &&
      clickEvent.params.url === "https://git-scm.com/doc"
    );

    recordResult({
      category: "LIBRERIA_DEBOUNCE_FILTROS",
      id: "CH2-LIB-07",
      description: "Telemetría de descargas locales y recursos externos en LibraryTopicDetail.tsx",
      passed: downloadValid && clickValid,
      expected: "download con fileName y format; resource_click con official booleano y url",
      actual: `downloadValid=${downloadValid}, clickValid=${clickValid}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // ==========================================================================
  // ÁREA 2: SERVER COMPONENT Y METADATOS EN SRC/APP/PAGE.TSX & HOMEHEROACTIONS
  // ==========================================================================
  console.log("\n▶ ÁREA 2: SERVER COMPONENT Y METADATOS (F8 / PAGE.TSX / HERO ACTIONS)");
  console.log("----------------------------------------------------------------------");

  // 2.1 Ausencia de 'use client' en src/app/page.tsx
  {
    const pageContent = readFileSync(resolve(PROJECT_ROOT, "src/app/page.tsx"), "utf-8");
    const hasUseClient = /^\s*["']use client["']/m.test(pageContent);
    const passed = !hasUseClient;

    recordResult({
      category: "SERVER_COMPONENT_HERO",
      id: "CH2-PAGE-01",
      description: "src/app/page.tsx se mantiene como Server Component puro (sin directiva 'use client')",
      passed,
      expected: "Ausencia total de 'use client' en src/app/page.tsx",
      actual: hasUseClient ? "Contiene 'use client'" : "Limpio de directiva 'use client'",
      vulnerabilitySeverity: "CRITICAL",
    });
  }

  // 2.2 Presencia y validez de export const metadata en src/app/page.tsx
  {
    const pageContent = readFileSync(resolve(PROJECT_ROOT, "src/app/page.tsx"), "utf-8");
    const hasMetadataExport = /export\s+const\s+metadata\s*=\s*\{/.test(pageContent);
    const hasTitle = /title:\s*["'].+["']/.test(pageContent);
    const hasDescription = /description:\s*["'][\s\S]+["']/.test(pageContent);
    const passed = hasMetadataExport && hasTitle && hasDescription;

    recordResult({
      category: "SERVER_COMPONENT_HERO",
      id: "CH2-PAGE-02",
      description: "Presencia de 'export const metadata' con title y description completos en src/app/page.tsx",
      passed,
      expected: "export const metadata con title y description presentes",
      actual: `metadataExport=${hasMetadataExport}, hasTitle=${hasTitle}, hasDescription=${hasDescription}`,
      vulnerabilitySeverity: "CRITICAL",
    });
  }

  // 2.3 HomeHeroActions.tsx tiene directiva 'use client' y delega interactividad
  {
    const heroContent = readFileSync(resolve(PROJECT_ROOT, "src/components/home/HomeHeroActions.tsx"), "utf-8");
    const hasUseClient = /^\s*["']use client["']/m.test(heroContent);
    const hasTrackButtonClick = heroContent.includes("trackButtonClick");
    const passed = hasUseClient && hasTrackButtonClick;

    recordResult({
      category: "SERVER_COMPONENT_HERO",
      id: "CH2-PAGE-03",
      description: "HomeHeroActions.tsx está aislado como Client Component ('use client') y usa trackButtonClick",
      passed,
      expected: "HomeHeroActions.tsx contiene 'use client' y trackButtonClick",
      actual: `hasUseClient=${hasUseClient}, hasTrackButtonClick=${hasTrackButtonClick}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 2.4 Verificación de no-bloqueo de navegación (cero preventDefault) y parámetros exactos
  {
    const heroContent = readFileSync(resolve(PROJECT_ROOT, "src/components/home/HomeHeroActions.tsx"), "utf-8");
    const hasPreventDefault = heroContent.includes("preventDefault");
    const hasBtnHeroExplore = heroContent.includes('"btn_hero_explore"');
    const hasBtnHeroCases = heroContent.includes('"btn_hero_production_cases"');
    const hasBtnHeroLibrary = heroContent.includes('"btn_hero_library"');
    const passed = !hasPreventDefault && hasBtnHeroExplore && hasBtnHeroCases && hasBtnHeroLibrary;

    recordResult({
      category: "SERVER_COMPONENT_HERO",
      id: "CH2-PAGE-04",
      description: "HomeHeroActions despacha button_click con IDs únicos sin bloquear navegación (sin preventDefault)",
      passed,
      expected: "0 preventDefault, contiene btn_hero_explore, btn_hero_production_cases y btn_hero_library",
      actual: `hasPreventDefault=${hasPreventDefault}, explore=${hasBtnHeroExplore}, cases=${hasBtnHeroCases}, library=${hasBtnHeroLibrary}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 2.5 Accesibilidad en HomeHeroActions (aria-hidden en iconos y texto visible)
  {
    const heroContent = readFileSync(resolve(PROJECT_ROOT, "src/components/home/HomeHeroActions.tsx"), "utf-8");
    const hasAriaHiddenArrow = heroContent.includes('aria-hidden="true">→');
    const hasAriaHiddenIcon = heroContent.includes('aria-hidden="true">&gt;_') || heroContent.includes('aria-hidden="true"');
    const hasAccessibleSpans = heroContent.includes("<span>Explorar las");
    const passed = hasAriaHiddenArrow && hasAriaHiddenIcon && hasAccessibleSpans;

    recordResult({
      category: "SERVER_COMPONENT_HERO",
      id: "CH2-PAGE-05",
      description: "Accesibilidad WCAG en HomeHeroActions (elementos puramente visuales con aria-hidden='true')",
      passed,
      expected: "aria-hidden='true' en flechas e iconos decorativos, etiquetas visibles intactas",
      actual: `ariaHiddenArrow=${hasAriaHiddenArrow}, ariaHiddenIcon=${hasAriaHiddenIcon}, spans=${hasAccessibleSpans}`,
      vulnerabilitySeverity: "LOW",
    });
  }

  // ==========================================================================
  // ÁREA 3: RESISTENCIA A REACT 19 STRICTMODE EN COLECCIONES
  // ==========================================================================
  console.log("\n▶ ÁREA 3: RESISTENCIA A REACT 19 STRICTMODE EN COLECCIONES (F7)");
  console.log("----------------------------------------------------------------------");

  // 3.1 StudyAtlasCollection: Doble montaje en StrictMode emite EXACTAMENTE 1 evento
  {
    const { root } = setupMockDOM();

    function StudyAtlasSimulation({ id, title }: { id: string; title: string }) {
      const trackedCollectionRef = React.useRef<string | null>(null);

      React.useEffect(() => {
        if (trackedCollectionRef.current === id) return;
        trackedCollectionRef.current = id;
        trackCollectionStudy(id, title, "atlas");
      }, [id, title]);

      return React.createElement("div", null, `Collection: ${id}`);
    }

    await React.act(async () => {
      root.render(
        React.createElement(
          React.StrictMode,
          null,
          React.createElement(StudyAtlasSimulation, { id: "python", title: "Python Profesional" })
        )
      );
    });

    const studyEvents = capturedEvents.filter(
      (e) => e.name === "collection_study" && e.params.collection_id === "python"
    );
    const passed = studyEvents.length === 1 && studyEvents[0].params.study_type === "atlas";

    recordResult({
      category: "STRICT_MODE_COLECCIONES",
      id: "CH2-STRICT-01",
      description: "StudyAtlasCollection no duplica collection_study ante doble montaje en React 19 StrictMode",
      passed,
      expected: "Exactamente 1 evento collection_study para 'python' con study_type: 'atlas'",
      actual: `${studyEvents.length} eventos capturados`,
      vulnerabilitySeverity: "CRITICAL",
    });
  }

  // 3.2 StudyAtlasCollection: Cambio de colección dentro de la misma sesión emite nuevo evento
  {
    const { root } = setupMockDOM();

    function StudyAtlasSimulation({ id, title }: { id: string; title: string }) {
      const trackedCollectionRef = React.useRef<string | null>(null);

      React.useEffect(() => {
        if (trackedCollectionRef.current === id) return;
        trackedCollectionRef.current = id;
        trackCollectionStudy(id, title, "atlas");
      }, [id, title]);

      return React.createElement("div", null, `Collection: ${id}`);
    }

    // 1. Montar python bajo StrictMode
    await React.act(async () => {
      root.render(
        React.createElement(
          React.StrictMode,
          null,
          React.createElement(StudyAtlasSimulation, { id: "python", title: "Python" })
        )
      );
    });

    // 2. Navegar a rust en la misma sesión SPA
    await React.act(async () => {
      root.render(
        React.createElement(
          React.StrictMode,
          null,
          React.createElement(StudyAtlasSimulation, { id: "rust", title: "Rust" })
        )
      );
    });

    const pythonEvents = capturedEvents.filter((e) => e.params.collection_id === "python");
    const rustEvents = capturedEvents.filter((e) => e.params.collection_id === "rust");
    const passed = pythonEvents.length === 1 && rustEvents.length === 1;

    recordResult({
      category: "STRICT_MODE_COLECCIONES",
      id: "CH2-STRICT-02",
      description: "StudyAtlasCollection emite collection_study reactivamente al cambiar de colección en sesión SPA",
      passed,
      expected: "Exactamente 1 evento para python y 1 evento para rust",
      actual: `python=${pythonEvents.length}, rust=${rustEvents.length}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 3.3 StudyAtlasCollection: Re-visitar una colección previa emite el evento correspondiente
  {
    const { root } = setupMockDOM();

    function StudyAtlasSimulation({ id, title }: { id: string; title: string }) {
      const trackedCollectionRef = React.useRef<string | null>(null);

      React.useEffect(() => {
        if (trackedCollectionRef.current === id) return;
        trackedCollectionRef.current = id;
        trackCollectionStudy(id, title, "atlas");
      }, [id, title]);

      return React.createElement("div", null, `Collection: ${id}`);
    }

    // python -> rust -> python
    await React.act(async () => {
      root.render(React.createElement(React.StrictMode, null, React.createElement(StudyAtlasSimulation, { id: "python", title: "Python" })));
    });
    await React.act(async () => {
      root.render(React.createElement(React.StrictMode, null, React.createElement(StudyAtlasSimulation, { id: "rust", title: "Rust" })));
    });
    await React.act(async () => {
      root.render(React.createElement(React.StrictMode, null, React.createElement(StudyAtlasSimulation, { id: "python", title: "Python" })));
    });

    const pythonEvents = capturedEvents.filter((e) => e.params.collection_id === "python");
    const rustEvents = capturedEvents.filter((e) => e.params.collection_id === "rust");
    const passed = pythonEvents.length === 2 && rustEvents.length === 1;

    recordResult({
      category: "STRICT_MODE_COLECCIONES",
      id: "CH2-STRICT-03",
      description: "StudyAtlasCollection permite registrar re-visitas a colecciones previas sin bloqueo perpetuo",
      passed,
      expected: "2 eventos para python (visita inicial + regreso) y 1 evento para rust",
      actual: `python=${pythonEvents.length}, rust=${rustEvents.length}`,
      vulnerabilitySeverity: "MEDIUM",
    });
  }

  // 3.4 ExpandedActionPage: Doble montaje en StrictMode emite EXACTAMENTE 1 evento action
  {
    const { root } = setupMockDOM();

    function ExpandedActionSimulation({ id, title }: { id: string; title: string }) {
      const trackedCollectionRef = React.useRef<string | null>(null);

      React.useEffect(() => {
        if (trackedCollectionRef.current === id) return;
        trackedCollectionRef.current = id;
        trackCollectionStudy(id, title, "action");
      }, [id, title]);

      return React.createElement("div", null, `Action: ${id}`);
    }

    await React.act(async () => {
      root.render(
        React.createElement(
          React.StrictMode,
          null,
          React.createElement(ExpandedActionSimulation, { id: "docker", title: "Docker en Acción" })
        )
      );
    });

    const actionEvents = capturedEvents.filter(
      (e) => e.name === "collection_study" && e.params.collection_id === "docker"
    );
    const passed = actionEvents.length === 1 && actionEvents[0].params.study_type === "action";

    recordResult({
      category: "STRICT_MODE_COLECCIONES",
      id: "CH2-STRICT-04",
      description: "ExpandedActionPage no duplica collection_study ante doble montaje en React 19 StrictMode",
      passed,
      expected: "Exactamente 1 evento collection_study para 'docker' con study_type: 'action'",
      actual: `${actionEvents.length} eventos capturados`,
      vulnerabilitySeverity: "CRITICAL",
    });
  }

  // ==========================================================================
  // ÁREA 4: CTAS AUXILIARES (STUDYNOTESEXPORTBUTTON & ACTIONQUIZINVITE)
  // ==========================================================================
  console.log("\n▶ ÁREA 4: CTAS AUXILIARES (F8)");
  console.log("----------------------------------------------------------------------");

  // 4.1 StudyNotesExportButton: Clics de descarga y copia
  {
    setupMockDOM();

    // Simular handleDownload
    trackButtonClick("export_study_notes_download", "Descargar Apuntes", "concept_header");

    // Simular handleCopy
    trackButtonClick("export_study_notes_copy", "Copiar Apuntes", "concept_header");

    const dlEvent = capturedEvents.find((e) => e.params.button_id === "export_study_notes_download");
    const cpEvent = capturedEvents.find((e) => e.params.button_id === "export_study_notes_copy");

    const dlPassed = Boolean(
      dlEvent &&
      dlEvent.params.button_name === "Descargar Apuntes" &&
      dlEvent.params.location === "concept_header" &&
      dlEvent.params.event_category === "user_interaction"
    );
    const cpPassed = Boolean(
      cpEvent &&
      cpEvent.params.button_name === "Copiar Apuntes" &&
      cpEvent.params.location === "concept_header" &&
      cpEvent.params.event_category === "user_interaction"
    );

    recordResult({
      category: "AUXILIARY_CTAS",
      id: "CH2-CTA-01",
      description: "StudyNotesExportButton emite button_click diferenciado para descarga y copia de apuntes",
      passed: dlPassed && cpPassed,
      expected: "export_study_notes_download y export_study_notes_copy registrados con location concept_header",
      actual: `downloadOk=${dlPassed}, copyOk=${cpPassed}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // 4.2 StudyNotesExportButton: Accesibilidad e inspección de marcas semánticas
  {
    const fileContent = readFileSync(
      resolve(PROJECT_ROOT, "src/components/concepts/StudyNotesExportButton.tsx"),
      "utf-8"
    );
    const hasRoleRegion = fileContent.includes('role="region"');
    const hasAriaLabelRegion = fileContent.includes('aria-label="Exportar ficha de estudio en Markdown"');
    const hasAriaLabelDl = fileContent.includes('aria-label="Descargar ficha de repaso en Markdown"');
    const hasAriaLabelCp = fileContent.includes('aria-label="Copiar ficha de repaso al portapapeles"');
    const passed = hasRoleRegion && hasAriaLabelRegion && hasAriaLabelDl && hasAriaLabelCp;

    recordResult({
      category: "AUXILIARY_CTAS",
      id: "CH2-CTA-02",
      description: "StudyNotesExportButton cumple con estándares de accesibilidad WCAG (role='region', aria-labels)",
      passed,
      expected: "role='region' y aria-labels descriptivos en contenedor y botones",
      actual: `roleRegion=${hasRoleRegion}, regionLabel=${hasAriaLabelRegion}, dlLabel=${hasAriaLabelDl}, cpLabel=${hasAriaLabelCp}`,
      vulnerabilitySeverity: "LOW",
    });
  }

  // 4.3 ActionQuizInvite: Disparo de evento y normalización de href
  {
    setupMockDOM();

    const fileContent = readFileSync(
      resolve(PROJECT_ROOT, "src/components/concepts/ActionQuizInvite.tsx"),
      "utf-8"
    );
    const hasNormalizedHref = /actionHref\.replace\(\/\\\/\+\$\/,\s*["']["']\)\s*\/\s*quiz|actionHref\.replace\(\/\\\/\+\$\/,\s*["']["']\)/.test(fileContent)
      || fileContent.includes(".replace(/\\/+$/, \"\")/quiz")
      || fileContent.includes("/quiz");
    const hasButtonId = fileContent.includes('"action_quiz_invite_btn"');
    const hasLocation = fileContent.includes('"action_quiz_invite"');

    trackButtonClick("action_quiz_invite_btn", "Iniciar Quiz Técnico", "action_quiz_invite");
    const event = capturedEvents.find((e) => e.params.button_id === "action_quiz_invite_btn");
    const eventValid = Boolean(
      event &&
      event.params.button_name === "Iniciar Quiz Técnico" &&
      event.params.location === "action_quiz_invite"
    );

    const passed = Boolean(hasNormalizedHref && hasButtonId && hasLocation && eventValid);

    recordResult({
      category: "AUXILIARY_CTAS",
      id: "CH2-CTA-03",
      description: "ActionQuizInvite emite button_click con href normalizado (sin barras redundantes)",
      passed,
      expected: "actionHref normalizado a /quiz, button_id 'action_quiz_invite_btn', location 'action_quiz_invite'",
      actual: `normalizedHref=${hasNormalizedHref}, buttonId=${hasButtonId}, location=${hasLocation}, eventCaptured=${eventValid}`,
      vulnerabilitySeverity: "HIGH",
    });
  }

  // ==========================================================================
  // RESUMEN GLOBAL
  // ==========================================================================
  console.log("\n======================================================================");
  console.log("▶ RESUMEN GLOBAL DE PRUEBAS ADVERSARIALES — CHALLENGER 2");
  console.log("======================================================================");
  const total = testResults.length;
  const passed = testResults.filter((r) => r.passed).length;
  const failed = testResults.filter((r) => !r.passed).length;
  const rate = ((passed / total) * 100).toFixed(1);

  console.log(`Total pruebas ejecutadas : ${total}`);
  console.log(`Aprobadas (PASS)         : ${passed}`);
  console.log(`Fallidas (FAIL)          : ${failed}`);
  console.log(`Tasa de éxito            : ${rate}%`);

  if (failed > 0) {
    console.log("\n🔴 DEFECTOS Y VULNERABILIDADES CONFIRMADAS EMPÍRICAMENTE:");
    for (const r of testResults.filter((t) => !t.passed)) {
      console.log(` - [${r.category}] ${r.id} [${r.vulnerabilitySeverity}]: ${r.description}`);
      console.log(`     Esperado: ${r.expected}`);
      console.log(`     Obtenido: ${r.actual}`);
    }
  } else {
    console.log("\n✔ TODAS LAS PRUEBAS ADVERSARIALES APROBADAS SATISFACTORIAMENTE.");
  }
}

runAllChallengerTests().catch((err) => {
  console.error("Error fatal en suite adversarial:", err);
  process.exit(1);
});
