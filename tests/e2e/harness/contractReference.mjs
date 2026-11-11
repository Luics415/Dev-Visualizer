/**
 * Dev Visualizer — Interface Contract Specifications Reference (Metadata Only)
 * tests/e2e/harness/contractReference.mjs
 * 
 * Formal interface contracts derived from PROJECT.md and ORIGINAL_REQUEST.md.
 * 
 * NOTA DE AUDITORÍA FORENSE:
 * Se erradicó por completo la fachada sombra auto-certificante.
 * Este archivo no contiene implementaciones ficticias, mocks ejecutables ni oráculos simulados.
 * Las pruebas E2E evalúan directamente los módulos reales en src/.
 */

/**
 * Rutas canónicas donde Next.js App Router requiere esqueletos jerárquicos (loading.tsx).
 * Especificación de Hito M4 (PROJECT.md § Code Layout).
 */
export const REQUIRED_LOADING_ROUTES = Object.freeze([
  "src/app/loading.tsx",
  "src/app/colecciones/loading.tsx",
  "src/app/libreria/loading.tsx",
  "src/app/libreria/[tema]/loading.tsx",
  "src/app/[slug]/loading.tsx",
  "src/app/[slug]/quiz/loading.tsx",
]);

/**
 * Las 7 áreas temáticas oficiales canónicas (ORIGINAL_REQUEST §R4).
 */
export const OFFICIAL_THEMATIC_AREAS = Object.freeze([
  "fundamentals",
  "languages",
  "interfaces",
  "platforms",
  "data",
  "versioning",
  "delivery",
]);
