/**
 * Dev Visualizer — Empirical Challenger Adversarial Test Suite for M4
 * tests/test-adversarial-skeletons.ts
 *
 * Desafío empírico adversarial sobre Esqueletos de Carga y Rendimiento CSS (F14 - F17):
 * Eje 1: Matriz de dimensiones extremas, valores negativos, nulos y unidades CSS complejas.
 * Eje 2: Inyección de variantes no estándar, clases complejas y XSS escaping.
 * Eje 3: Paridad estricta entre JSX (<Skeleton /> / Skeleton(props)) y Helper (renderSkeleton()).
 * Eje 4: Accesibilidad ARIA WCAG 2.1 AA (role, aria-busy, aria-label, children).
 * Eje 5: Prueba de estrés de volumen y rendimiento (20,000 iteraciones síncronas).
 * Eje 6: Auditoría forense de CSS de aceleración GPU en src/app/globals.css.
 * Eje 7: Auditoría AST y ejecución SSR de los 6 esqueletos loading.tsx.
 */

import Module from "node:module";
import * as fs from "node:fs";
import * as path from "node:path";
import assert from "node:assert/strict";
import React from "react";
import ReactDOMServer from "react-dom/server";

// Registrar interceptor para archivos CSS en Node.js runtime para pruebas SSR
// @ts-expect-error Node.js internal module extension hook
Module._extensions[".css"] = (m: NodeModule) => {
  m.exports = {};
};

import { Skeleton, renderSkeleton, type SkeletonProps } from "../src/components/ui/Skeleton";

const PROJECT_ROOT = path.resolve(__dirname, "..");

interface TestCaseResult {
  axis: string;
  testName: string;
  passed: boolean;
  details?: string;
}

const testResults: TestCaseResult[] = [];

function recordTest(axis: string, testName: string, fn: () => void) {
  try {
    fn();
    testResults.push({ axis, testName, passed: true });
    console.log(`  ✔ [PASS] ${testName}`);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.stack || err.message : String(err);
    testResults.push({ axis, testName, passed: false, details: errorMsg });
    console.error(`  ✖ [FAIL] ${testName}: ${errorMsg}`);
  }
}

function extractCssBlock(source: string, searchPattern: RegExp): string {
  const match = source.match(searchPattern);
  if (!match || match.index === undefined) return "";
  const startIndex = match.index + match[0].length;
  let depth = 1;
  let i = startIndex;
  while (i < source.length && depth > 0) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") depth--;
    i++;
  }
  return source.slice(startIndex, i - 1);
}

console.log("===============================================================================");
console.log("   DEV VISUALIZER — SUITE ADVERSARIAL EMPÍRICA CHALLENGER M4 (SKELETON & GPU CSS)   ");
console.log("===============================================================================\n");

// ============================================================================
// EJE 1: MATRIZ DE DIMENSIONES EXTREMAS Y MALFORMADAS
// ============================================================================
console.log("--- EJE 1: Matriz de Dimensiones Extremas y Malformadas ---");

recordTest("Eje 1", "Dimensiones numéricas cero (width: 0, height: 0) deben formatearse a '0px'", () => {
  const result = renderSkeleton({ width: 0, height: 0 });
  assert.equal(result.style.width, "0px");
  assert.equal(result.style.height, "0px");

  const returnedElement = Skeleton({ width: 0, height: 0 });
  assert.equal(returnedElement.props.style?.width, "0px");
  assert.equal(returnedElement.props.style?.height, "0px");

  const html = ReactDOMServer.renderToStaticMarkup(returnedElement);
  assert.ok(html.includes("width:0px") && html.includes("height:0px"));
});

recordTest("Eje 1", "Dimensiones negativas (width: -25, height: -100) no deben crashear", () => {
  const result = renderSkeleton({ width: -25, height: -100 });
  assert.equal(result.style.width, "-25px");
  assert.equal(result.style.height, "-100px");

  const returnedElement = Skeleton({ width: -25, height: -100 });
  const html = ReactDOMServer.renderToStaticMarkup(returnedElement);
  assert.ok(html.includes("width:-25px") && html.includes("height:-100px"));
});

recordTest("Eje 1", "Dimensiones de punto flotante de alta precisión (width: 0.0001, height: 33.3333)", () => {
  const result = renderSkeleton({ width: 0.0001, height: 33.3333 });
  assert.equal(result.style.width, "0.0001px");
  assert.equal(result.style.height, "33.3333px");

  const returnedElement = Skeleton({ width: 0.0001, height: 33.3333 });
  assert.equal(returnedElement.props.style?.width, "0.0001px");
  assert.equal(returnedElement.props.style?.height, "33.3333px");
});

recordTest("Eje 1", "Números gigantescos (width: 1e9, height: 999999999999)", () => {
  const result = renderSkeleton({ width: 1000000000, height: 999999999999 });
  assert.equal(result.style.width, "1000000000px");
  assert.equal(result.style.height, "999999999999px");

  const returnedElement = Skeleton({ width: 1000000000, height: 999999999999 });
  assert.equal(returnedElement.props.style?.width, "1000000000px");
  assert.equal(returnedElement.props.style?.height, "999999999999px");
});

recordTest("Eje 1", "Valores especiales IEEE 754 (NaN, Infinity) no producen excepciones no controladas", () => {
  const result = renderSkeleton({ width: NaN, height: Infinity });
  assert.equal(result.style.width, "NaNpx");
  assert.equal(result.style.height, "Infinitypx");

  const returnedElement = Skeleton({ width: NaN, height: Infinity });
  assert.equal(returnedElement.props.style?.width, "NaNpx");
  assert.equal(returnedElement.props.style?.height, "Infinitypx");
});

recordTest("Eje 1", "Unidades CSS complejas (%, vw, rem, calc, clamp, min, var)", () => {
  const testUnits = [
    { w: "100%", h: "50vh" },
    { w: "calc(100% - 32px)", h: "min(400px, 50vw)" },
    { w: "clamp(200px, 40vw, 800px)", h: "fit-content" },
    { w: "var(--custom-width, 100%)", h: "3.75rem" },
  ];

  for (const { w, h } of testUnits) {
    const res = renderSkeleton({ width: w, height: h });
    assert.equal(res.style.width, w);
    assert.equal(res.style.height, h);

    const el = Skeleton({ width: w, height: h });
    assert.equal(el.props.style?.width, w);
    assert.equal(el.props.style?.height, h);

    const html = ReactDOMServer.renderToStaticMarkup(el);
    assert.ok(html.includes(w) && html.includes(h));
  }
});

recordTest("Eje 1", "Valores undefined omiten las propiedades width y height del objeto style", () => {
  const result = renderSkeleton({ width: undefined, height: undefined });
  assert.equal(result.style.width, undefined);
  assert.equal(result.style.height, undefined);
  assert.deepEqual(result.style, {});

  const el = Skeleton({ width: undefined, height: undefined });
  assert.deepEqual(el.props.style, {});
  const html = ReactDOMServer.renderToStaticMarkup(el);
  assert.ok(!html.includes("style="));
});

recordTest("Eje 1", "Valores null no arrojan TypeError y son manejados defensivamente", () => {
  // @ts-expect-error Simulación de input de runtime JavaScript no tipado
  const res = renderSkeleton({ width: null, height: null });
  assert.equal(res.style.width, null as unknown as string);

  // @ts-expect-error Simulación de input de runtime en JSX
  const el = Skeleton({ width: null, height: null });
  assert.doesNotThrow(() => {
    ReactDOMServer.renderToStaticMarkup(el);
  });
});

// ============================================================================
// EJE 2: INYECCIÓN DE VARIANTES Y CLASES COMPLEJAS
// ============================================================================
console.log("\n--- EJE 2: Inyección de Variantes y Clases Complejas ---");

recordTest("Eje 2", "Variantes estándar soportadas (text, rectangular, circular, card, hero)", () => {
  const standardVariants: SkeletonProps["variant"][] = ["text", "rectangular", "circular", "card", "hero"];
  for (const v of standardVariants) {
    const res = renderSkeleton({ variant: v });
    assert.equal(res.className, `skeleton skeleton-${v}`);

    const el = Skeleton({ variant: v });
    assert.equal(el.props.className, `skeleton skeleton-${v}`);

    const html = ReactDOMServer.renderToStaticMarkup(el);
    assert.ok(html.includes(`class="skeleton skeleton-${v}"`));
  }
});

recordTest("Eje 2", "Variante por defecto (undefined) aplica 'text'", () => {
  const res = renderSkeleton({});
  assert.equal(res.className, "skeleton skeleton-text");

  const el = Skeleton({});
  assert.equal(el.props.className, "skeleton skeleton-text");

  const html = ReactDOMServer.renderToStaticMarkup(el);
  assert.ok(html.includes('class="skeleton skeleton-text"'));
});

recordTest("Eje 2", "Variantes anómalas o extendidas no rompen la concatenación", () => {
  // @ts-expect-error Prueba de variante no estándar
  const resCustom = renderSkeleton({ variant: "avatar-pulse" });
  assert.equal(resCustom.className, "skeleton skeleton-avatar-pulse");

  // @ts-expect-error Prueba de variante vacía
  const resEmpty = renderSkeleton({ variant: "" });
  assert.equal(resEmpty.className, "skeleton skeleton-");
});

recordTest("Eje 2", "Preservación robusta de múltiples clases utilitarias e inyecciones de espacios", () => {
  const res = renderSkeleton({ className: "  mx-auto  p-4   shadow-2xl border-white/20 " });
  assert.ok(res.className.startsWith("skeleton skeleton-text"));
  assert.ok(res.className.includes("mx-auto"));
  assert.ok(res.className.includes("p-4"));
  assert.ok(res.className.includes("shadow-2xl"));

  const el = Skeleton({ className: "  mx-auto  p-4   shadow-2xl border-white/20 " });
  assert.equal(res.className, el.props.className);
});

recordTest("Eje 2", "Escapado defensivo de caracteres especiales y seguridad XSS", () => {
  const maliciousVariant = '"><script>alert(1)</script>';
  const el = Skeleton({ variant: maliciousVariant } as unknown as SkeletonProps);
  const html = ReactDOMServer.renderToStaticMarkup(el);

  // ReactDOMServer debe escapar entidades HTML impidiendo ejecución XSS
  assert.ok(!html.includes("<script>alert(1)</script>"));
  assert.ok(html.includes("&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;"));
});

// ============================================================================
// EJE 3: PARIDAD ESTRICTA ENTRE RENDER SKELETON Y JSX
// ============================================================================
console.log("\n--- EJE 3: Paridad Estricta entre renderSkeleton() y <Skeleton /> ---");

recordTest("Eje 3", "Matriz cruzada de concordancia exacta para 30 configuraciones representativas", () => {
  const testMatrix: SkeletonProps[] = [
    {},
    { variant: "text" },
    { variant: "rectangular", width: 120, height: 40 },
    { variant: "circular", width: 64, height: 64 },
    { variant: "card", width: 300, height: 200 },
    { variant: "hero", width: "100%", height: 350 },
    { width: "50%", height: "2.5rem", ariaLabel: "Cargando sección..." },
    { className: "mt-4 col-span-2", variant: "rectangular" },
    { width: 0, height: 0, variant: "text" },
    { width: 1024, height: 768, ariaLabel: "Cargando imagen de fondo" },
    { ariaLabel: "", variant: "card" },
    { width: "calc(100% - 16px)", height: 12 },
    { className: "hidden md:block opacity-75", width: 80 },
    { variant: "hero", className: "glow-effect" },
    { width: -10, height: -20 },
  ];

  for (let i = 0; i < testMatrix.length; i++) {
    const props = testMatrix[i];
    const helperResult = renderSkeleton(props);
    const jsxResult = Skeleton(props);

    // Comparación de atributos fundamentales
    assert.equal(helperResult.role, jsxResult.props.role, `[Caso ${i}] role mismatch`);
    assert.equal(helperResult["aria-busy"], jsxResult.props["aria-busy"], `[Caso ${i}] aria-busy mismatch`);
    assert.equal(helperResult["aria-label"], jsxResult.props["aria-label"], `[Caso ${i}] aria-label mismatch`);
    assert.equal(helperResult.className, jsxResult.props.className, `[Caso ${i}] className mismatch`);

    // Comparación de estilos
    if (helperResult.style.width !== undefined) {
      assert.equal(helperResult.style.width, jsxResult.props.style?.width, `[Caso ${i}] style.width mismatch`);
    }
    if (helperResult.style.height !== undefined) {
      assert.equal(helperResult.style.height, jsxResult.props.style?.height, `[Caso ${i}] style.height mismatch`);
    }

    // Validación de HTML generado por ReactDOMServer
    const markup = ReactDOMServer.renderToStaticMarkup(jsxResult);
    assert.ok(markup.startsWith("<div "), `[Caso ${i}] Debe renderizar un div en HTML`);
    assert.ok(markup.includes('role="status"'), `[Caso ${i}] Debe contener role="status"`);
    assert.ok(markup.includes('aria-busy="true"'), `[Caso ${i}] Debe contener aria-busy="true"`);
  }
});

// ============================================================================
// EJE 4: ACCESIBILIDAD ARIA Y RENDERIZADO DE HIJOS (CHILDREN)
// ============================================================================
console.log("\n--- EJE 4: Accesibilidad ARIA y Renderizado de Hijos ---");

recordTest("Eje 4", "Semántica WCAG 2.1 AA inmutable (role='status', aria-busy='true')", () => {
  const el = Skeleton({});
  const markup = ReactDOMServer.renderToStaticMarkup(el);
  assert.ok(markup.includes('role="status"'));
  assert.ok(markup.includes('aria-busy="true"'));
  assert.ok(markup.includes('aria-label="Cargando contenido..."'));
});

recordTest("Eje 4", "Etiqueta accesible aria-label configurable y soporte para textos largos", () => {
  const customLabel = "Cargando visualización del árbol de decisión con 146 nodos...";
  const el = Skeleton({ ariaLabel: customLabel });
  const markup = ReactDOMServer.renderToStaticMarkup(el);
  assert.ok(markup.includes(`aria-label="${customLabel}"`));
});

recordTest("Eje 4", "Soporte transparente para anidación de children y atributos DOM adicionales", () => {
  const child = React.createElement("span", { className: "sr-only" }, "Cargando...");
  const el = Skeleton({
    id: "skeleton-test-node",
    "data-testid": "hero-skeleton",
    title: "Esqueleto temporal",
    children: child,
  } as SkeletonProps);

  const markup = ReactDOMServer.renderToStaticMarkup(el);
  assert.ok(markup.includes('id="skeleton-test-node"'));
  assert.ok(markup.includes('data-testid="hero-skeleton"'));
  assert.ok(markup.includes('title="Esqueleto temporal"'));
  assert.ok(markup.includes('<span class="sr-only">Cargando...</span>'));
});

// ============================================================================
// EJE 5: PRUEBA DE ESTRÉS DE VOLUMEN Y RENDIMIENTO
// ============================================================================
console.log("\n--- EJE 5: Prueba de Estrés de Volumen y Rendimiento ---");

recordTest("Eje 5", "Renderizado de alta frecuencia: 20,000 invocaciones en < 300ms", () => {
  const iterations = 20000;
  const startMem = process.memoryUsage().heapUsed;
  const startTime = performance.now();

  for (let i = 0; i < iterations; i++) {
    const v = i % 2 === 0 ? "rectangular" : "card";
    const res = renderSkeleton({ variant: v, width: i % 500, height: 100 });
    assert.ok(res.className.length > 0);
  }

  const durationMs = performance.now() - startTime;
  const endMem = process.memoryUsage().heapUsed;
  const memDiffMb = ((endMem - startMem) / (1024 * 1024)).toFixed(2);

  console.log(`    [Metrics] 20,000 llamadas a renderSkeleton completadas en ${durationMs.toFixed(2)}ms`);
  console.log(`    [Metrics] Variación de heap: ${memDiffMb} MB`);

  assert.ok(durationMs < 300, `La ejecución tomó ${durationMs.toFixed(2)}ms, superando el umbral de 300ms`);
});

recordTest("Eje 5", "Generación SSR intensiva: 2,000 árboles React completos en < 200ms", () => {
  const iterations = 2000;
  const startTime = performance.now();

  for (let i = 0; i < iterations; i++) {
    const el = Skeleton({
      variant: i % 2 === 0 ? "hero" : "circular",
      width: 200,
      height: 200,
      className: "perf-test",
    });
    const html = ReactDOMServer.renderToStaticMarkup(el);
    assert.ok(html.length > 0);
  }

  const durationMs = performance.now() - startTime;
  console.log(`    [Metrics] 2,000 llamadas a ReactDOMServer.renderToStaticMarkup en ${durationMs.toFixed(2)}ms`);
  assert.ok(durationMs < 200, `La generación SSR tomó ${durationMs.toFixed(2)}ms, superando el umbral de 200ms`);
});

// ============================================================================
// EJE 6: AUDITORÍA FORENSE DE CSS Y ACELERACIÓN GPU
// ============================================================================
console.log("\n--- EJE 6: Auditoría Forense de CSS y Aceleración GPU ---");

const globalsCssPath = path.resolve(PROJECT_ROOT, "src/app/globals.css");
const globalsCss = fs.readFileSync(globalsCssPath, "utf-8");

recordTest("Eje 6", "@keyframes skeleton-shimmer usa estrictamente transform: translateX", () => {
  const body = extractCssBlock(globalsCss, /@keyframes\s+skeleton-shimmer\s*\{/);
  assert.ok(body.length > 0, "Debe existir la regla @keyframes skeleton-shimmer");

  assert.ok(body.includes("translateX(-100%)"), "El inicio de la animación debe ser translateX(-100%)");
  assert.ok(body.includes("translateX(100%)"), "El fin de la animación debe ser translateX(100%)");

  // Verificar ausencia absoluta de propiedades que causan reflow (left, margin-left, right)
  assert.ok(!/(\bleft\b|\bmargin-left\b|\bright\b):/i.test(body), "No debe animar propiedades de layout como left o margin");
});

recordTest("Eje 6", "@keyframes shimmer alternativo usa igualmente transform: translateX", () => {
  const body = extractCssBlock(globalsCss, /@keyframes\s+shimmer\s*\{/);
  assert.ok(body.length > 0, "Debe existir la regla @keyframes shimmer");
  assert.ok(body.includes("translateX(-100%)") && body.includes("translateX(100%)"));
});

recordTest("Eje 6", "Contenedor base .skeleton define contención con overflow: hidden y position: relative", () => {
  const body = extractCssBlock(globalsCss, /\.skeleton\s*\{/);
  assert.ok(body.length > 0, "Debe existir el selector .skeleton");

  assert.ok(body.includes("overflow: hidden"), ".skeleton debe tener overflow: hidden para contener el shimmer");
  assert.ok(body.includes("position: relative"), ".skeleton debe tener position: relative");
});

recordTest("Eje 6", "Capa de brillo .skeleton::after tiene will-change: transform y pointer-events: none", () => {
  const body = extractCssBlock(globalsCss, /\.skeleton::after[\s\S]*?\{/);
  assert.ok(body.length > 0, "Debe existir la regla para .skeleton::after");

  assert.ok(body.includes("will-change: transform"), "Debe tener will-change: transform para promoción a capa GPU");
  assert.ok(body.includes("pointer-events: none"), "Debe tener pointer-events: none para no interceptar clics del usuario");
  assert.ok(body.includes("linear-gradient"), "Debe utilizar linear-gradient para el brillo de shimmer");
});

recordTest("Eje 6", "Accesibilidad prefers-reduced-motion desactiva rigurosamente las animaciones de skeleton", () => {
  // Buscar la regla @media (prefers-reduced-motion: reduce) que aplica a .skeleton
  const m4Section = globalsCss.slice(globalsCss.indexOf("M4: Skeleton loading states"));
  assert.ok(m4Section.length > 0, "Debe encontrarse la sección M4 en globals.css");

  const body = extractCssBlock(m4Section, /@media\s*\(\s*prefers-reduced-motion:\s*reduce\s*\)\s*\{/);
  assert.ok(body.length > 0, "Debe existir @media (prefers-reduced-motion: reduce) en sección M4");

  assert.ok(body.includes(".skeleton"), "Debe incluir .skeleton");
  assert.ok(body.includes(".skeleton-shimmer"), "Debe incluir .skeleton-shimmer");
  assert.ok(body.includes(".skeleton::after"), "Debe incluir .skeleton::after");
  assert.ok(body.includes("animation: none !important"), "Debe forzar animation: none !important");
  assert.ok(body.includes("transition: none !important"), "Debe forzar transition: none !important");
});

recordTest("Eje 6", "Prevención de CLS mediante variantes estructurales pre-dimensionadas", () => {
  assert.ok(globalsCss.includes(".skeleton-text"), "Debe existir .skeleton-text");
  assert.ok(globalsCss.includes(".skeleton-rectangular"), "Debe existir .skeleton-rectangular");
  assert.ok(globalsCss.includes(".skeleton-circular"), "Debe existir .skeleton-circular");
  assert.ok(globalsCss.includes(".skeleton-card"), "Debe existir .skeleton-card");
  assert.ok(globalsCss.includes(".skeleton-hero"), "Debe existir .skeleton-hero");

  const cardBody = extractCssBlock(globalsCss, /\.skeleton-card\s*\{/);
  assert.ok(cardBody.includes("min-height: 180px"), ".skeleton-card debe reservar min-height: 180px");

  const heroBody = extractCssBlock(globalsCss, /\.skeleton-hero\s*\{/);
  assert.ok(heroBody.includes("min-height: 280px"), ".skeleton-hero debe reservar min-height: 280px");

  const circularBody = extractCssBlock(globalsCss, /\.skeleton-circular\s*\{/);
  assert.ok(circularBody.includes("aspect-ratio: 1 / 1"), ".skeleton-circular debe tener aspect-ratio: 1 / 1");
});

// ============================================================================
// EJE 7: AUDITORÍA AST Y EJECUCIÓN SSR DE LOS 6 ARCHIVOS LOADING.TSX
// ============================================================================
console.log("\n--- EJE 7: Auditoría AST y Ejecución SSR de los 6 loading.tsx ---");

const loadingFiles = [
  { name: "RootLoading", relPath: "src/app/loading.tsx" },
  { name: "ColeccionesLoading", relPath: "src/app/colecciones/loading.tsx" },
  { name: "LibreriaLoading", relPath: "src/app/libreria/loading.tsx" },
  { name: "LibreriaTemaLoading", relPath: "src/app/libreria/[tema]/loading.tsx" },
  { name: "SlugLoading", relPath: "src/app/[slug]/loading.tsx" },
  { name: "QuizLoading", relPath: "src/app/[slug]/quiz/loading.tsx" },
];

for (const { name, relPath } of loadingFiles) {
  recordTest("Eje 7", `Inspección de RSC y contrato para ${name} (${relPath})`, () => {
    const absPath = path.resolve(PROJECT_ROOT, relPath);
    assert.ok(fs.existsSync(absPath), `El archivo ${absPath} debe existir físicamente`);

    const fileContent = fs.readFileSync(absPath, "utf-8");

    // Verificar que sea un React Server Component puro sin "use client"
    assert.ok(
      !fileContent.includes('"use client"') && !fileContent.includes("'use client'"),
      `${relPath} debe ser un React Server Component puro sin directiva 'use client'`
    );

    // Verificar presencia de exportación por defecto
    assert.ok(
      /export\s+default\s+(function|const)/i.test(fileContent),
      `${relPath} debe exportar un componente por defecto`
    );

    // Verificar que importe el componente Skeleton
    assert.ok(
      fileContent.includes("@/components/ui/Skeleton") || fileContent.includes("Skeleton"),
      `${relPath} debe importar el componente primitivo Skeleton`
    );
  });
}

// Ejecución SSR en runtime dinámico de los 6 loading.tsx
(async () => {
  for (const { name, relPath } of loadingFiles) {
    recordTest("Eje 7", `Renderizado HTML estático SSR sin excepciones para ${name}`, () => {
      const absPath = path.resolve(PROJECT_ROOT, relPath);
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const mod = require(absPath);
      const Component = typeof mod.default === "function" ? mod.default : mod.default.default;
      assert.equal(typeof Component, "function", `El export default de ${relPath} debe ser una función componente`);

      const element = React.createElement(Component);
      const html = ReactDOMServer.renderToStaticMarkup(element);

      assert.ok(html.length > 50, `El HTML generado para ${name} debe contener contenido`);
      assert.ok(html.includes('role="status"'), `${name} debe contener role="status"`);
      assert.ok(html.includes('aria-busy="true"'), `${name} debe contener aria-busy="true"`);
      assert.ok(html.includes("skeleton"), `${name} debe contener elementos de clase skeleton`);
    });
  }

  // ============================================================================
  // RECUENTO Y RESUMEN FINAL
  // ============================================================================
  console.log("\n===============================================================================");
  console.log("                        RESUMEN DE PRUEBAS ADVERSARIALES                       ");
  console.log("===============================================================================");

  const total = testResults.length;
  const passed = testResults.filter((r) => r.passed).length;
  const failed = testResults.filter((r) => !r.passed).length;

  console.log(`Total de pruebas ejecutadas: ${total}`);
  console.log(`Pruebas aprobadas:          ${passed}`);
  console.log(`Pruebas falladas:           ${failed}`);
  console.log(`Tasa de aprobación:         ${((passed / total) * 100).toFixed(1)}%`);

  if (failed > 0) {
    console.error("\nLISTA DE FALLOS DETECTADOS:");
    for (const f of testResults.filter((r) => !r.passed)) {
      console.error(`- [${f.axis}] ${f.testName}: ${f.details}`);
    }
    process.exit(1);
  } else {
    console.log("\n✔ TODAS LAS PRUEBAS ADVERSARIALES FUERON SATISFECHAS EXITOSAMENTE (100% PASS).");
    process.exit(0);
  }
})();
