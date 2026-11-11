/**
 * Dev Visualizer — Tier 1 E2E Tests: SEO & Metadata (F1 - F5)
 * tests/e2e/tier1/tier1-seo-metadata.test.mjs
 * 
 * 25 Independent Test Cases covering:
 * - F1: robots.txt indexable (T1-F1-01 to T1-F1-05)
 * - F2: Sitemap canónico completo (T1-F2-01 to T1-F2-05)
 * - F3: Metadatos y títulos optimizados (T1-F3-01 to T1-F3-05)
 * - F4: Soporte para Search Console y Business Profile (T1-F4-01 to T1-F4-05)
 * - F5: Archivo .env.example completo (T1-F5-01 to T1-F5-05)
 */

import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
require.extensions[".css"] = () => {};

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "../../..");

describe("Tier 1: SEO, Indexación y Variables de Entorno (F1 - F5)", () => {

  // ==========================================================================
  // F1: robots.txt indexable (5 casos)
  // ==========================================================================
  describe("F1: robots.txt indexable", () => {
    const robotsPath = resolve(PROJECT_ROOT, "public/robots.txt");

    it("T1-F1-01: Verificación de existencia física de robots.txt en public/", () => {
      assert.ok(existsSync(robotsPath), "El archivo robots.txt debe existir en public/");
    });

    it("T1-F1-02: Directiva de rastreo universal permisiva (User-agent: *)", () => {
      const content = readFileSync(robotsPath, "utf-8");
      assert.match(content, /User-agent:\s*\*/i, "Debe declarar la directiva universal User-agent: *");
    });

    it("T1-F1-03: Permiso de indexación explícito (Allow: /)", () => {
      const content = readFileSync(robotsPath, "utf-8");
      assert.match(content, /Allow:\s*\//i, "Debe declarar Allow: / para permitir el rastreo libre");
    });

    it("T1-F1-04: Ausencia de reglas de bloqueo global (Disallow: /)", () => {
      const content = readFileSync(robotsPath, "utf-8");
      assert.doesNotMatch(content, /Disallow:\s*\/\s*$/m, "No debe contener reglas de bloqueo global Disallow: /");
    });

    it("T1-F1-05: Declaración canónica del Sitemap con protocolo HTTPS", () => {
      const content = readFileSync(robotsPath, "utf-8");
      assert.match(content, /Sitemap:\s*https:\/\/[^\s]+\/sitemap\.xml/i, "Debe incluir enlace canónico HTTPS a sitemap.xml");
    });
  });

  // ==========================================================================
  // F2: Sitemap canónico completo (5 casos)
  // ==========================================================================
  describe("F2: Sitemap canónico completo", () => {
    it("T1-F2-01: Generación de la ruta raíz canónica ('/') en el Sitemap", async () => {
      const sitemapModule = await import("@/app/sitemap");
      const sitemapFn = sitemapModule.default;
      assert.equal(typeof sitemapFn, "function", "sitemap.ts debe exportar una función default");
      const items = sitemapFn();
      assert.ok(Array.isArray(items), "sitemap() debe devolver un arreglo");
      const hasRoot = items.some((item) => item.url.endsWith("/Dev-Visualizer/") || item.url.endsWith("/Dev-Visualizer") || item.url === "https://luics415.github.io/Dev-Visualizer/");
      assert.ok(hasRoot, "El sitemap debe incluir explícitamente la página de inicio canónica");
    });

    it("T1-F2-02: Inclusión de rutas institucionales y de catálogo principales", async () => {
      const sitemapModule = await import("@/app/sitemap");
      const items = sitemapModule.default();
      const requiredRoutes = ["/colecciones", "/libreria", "/acerca", "/privacidad", "/terminos", "/cookies"];
      for (const route of requiredRoutes) {
        const found = items.some((item) => item.url.includes(route));
        assert.ok(found, `El sitemap debe incluir la ruta institucional: ${route}`);
      }
    });

    it("T1-F2-03: Cobertura total de las 73 colecciones canónicas y rutas 'en acción'", async () => {
      const sitemapModule = await import("@/app/sitemap");
      const items = sitemapModule.default();
      const actionItems = items.filter((item) => item.url.includes("-en-accion"));
      assert.ok(actionItems.length >= 73, `Deben existir al menos 73 rutas de acción en el sitemap (encontradas: ${actionItems.length})`);
      assert.ok(items.length >= 150, `El sitemap debe contener al menos 150 URLs en total (encontradas: ${items.length})`);
    });

    it("T1-F2-04: Asignación de prioridades de rastreo dentro del rango normalizado [0.0, 1.0]", async () => {
      const sitemapModule = await import("@/app/sitemap");
      const items = sitemapModule.default();
      for (const item of items) {
        assert.ok(typeof item.priority === "number", `priority debe ser numérico en ${item.url}`);
        assert.ok(item.priority >= 0 && item.priority <= 1, `priority debe estar en [0, 1] en ${item.url}`);
      }
      const rootItem = items.find((i) => i.url.endsWith("/Dev-Visualizer/") || i.url.endsWith("/Dev-Visualizer"));
      assert.equal(rootItem?.priority, 1, "La ruta raíz debe tener prioridad máxima 1.0");
    });

    it("T1-F2-05: Frecuencias de cambio (changeFrequency) conformes al estándar", async () => {
      const sitemapModule = await import("@/app/sitemap");
      const items = sitemapModule.default();
      const validFrequencies = new Set(["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"]);
      for (const item of items) {
        assert.ok(validFrequencies.has(item.changeFrequency), `changeFrequency inválido: "${item.changeFrequency}" en ${item.url}`);
      }
    });
  });

  // ==========================================================================
  // F3: Metadatos y títulos optimizados (5 casos)
  // ==========================================================================
  describe("F3: Metadatos y títulos optimizados", () => {
    it("T1-F3-01: Configuración de título por defecto y plantilla en el Layout Raíz", async () => {
      const layoutModule = await import("@/app/layout");
      const { metadata } = layoutModule;
      assert.ok(metadata, "layout.tsx debe exportar metadata");
      assert.equal(metadata.title?.default, "Dev Visualizer", "El título por defecto debe ser 'Dev Visualizer'");
      assert.equal(metadata.title?.template, "%s · Dev Visualizer", "El template de título debe ser '%s · Dev Visualizer'");
    });

    it("T1-F3-02: Descripción global del servicio enriquecida y representativa", async () => {
      const layoutModule = await import("@/app/layout");
      const { metadata } = layoutModule;
      assert.ok(typeof metadata.description === "string", "metadata.description debe ser una cadena");
      assert.ok(metadata.description.length > 50, "La descripción global debe tener al menos 50 caracteres");
      assert.ok(metadata.description.toLowerCase().includes("colecciones"), "La descripción debe mencionar colecciones didácticas");
    });

    it("T1-F3-03: Metadatos específicos en catálogo de colecciones (/colecciones)", async () => {
      const coleccionesModule = await import("@/app/colecciones/page");
      const { metadata } = coleccionesModule;
      assert.ok(metadata, "/colecciones debe exportar su propio metadata");
      assert.equal(metadata.title, "Colecciones", "El título de /colecciones debe ser 'Colecciones'");
      assert.ok(typeof metadata.description === "string" && metadata.description.length > 30, "La descripción de colecciones debe ser descriptiva");
    });

    it("T1-F3-04: Metadatos institucionales y de proyecto en /acerca", async () => {
      const acercaModule = await import("@/app/acerca/page");
      const { metadata } = acercaModule;
      assert.ok(metadata, "/acerca debe exportar su propio metadata");
      assert.equal(metadata.title, "Acerca de", "El título de /acerca debe ser 'Acerca de'");
      assert.ok(typeof metadata.description === "string" && metadata.description.length > 30, "La descripción de acerca debe ser descriptiva");
    });

    it("T1-F3-05: Configuración completa de tarjetas OpenGraph y Twitter Card", async () => {
      const layoutModule = await import("@/app/layout");
      const { metadata } = layoutModule;
      assert.ok(metadata.openGraph, "Debe configurar openGraph");
      assert.equal(metadata.openGraph.type, "website", "OpenGraph type debe ser website");
      assert.equal(metadata.openGraph.locale, "es_MX", "OpenGraph locale debe ser es_MX");
      assert.ok(metadata.openGraph.images?.length > 0, "OpenGraph debe incluir al menos una imagen social");
      assert.ok(metadata.twitter, "Debe configurar twitter");
      assert.equal(metadata.twitter.card, "summary_large_image", "Twitter card debe ser summary_large_image");
    });
  });

  // ==========================================================================
  // F4: Soporte para Search Console y Business Profile (5 casos)
  // ==========================================================================
  describe("F4: Soporte para Search Console y Business Profile", () => {
    const layoutPath = resolve(PROJECT_ROOT, "src/app/layout.tsx");

    it("T1-F4-01: Soporte para metatag de verificación en Google Search Console", async () => {
      const layoutModule = await import("@/app/layout");
      const content = readFileSync(layoutPath, "utf-8");
      const hasVerificationMeta = layoutModule.metadata.verification !== undefined || content.includes("verificationConfig") || content.includes("google-site-verification");
      assert.ok(hasVerificationMeta, "layout.tsx debe soportar verificación de Google Search Console");
    });

    it("T1-F4-02: Entidad de organización didáctica en grafo JSON-LD", () => {
      const content = readFileSync(layoutPath, "utf-8");
      const hasOrgEntity = content.includes('"EducationalOrganization"') || content.includes('"Organization"');
      assert.ok(hasOrgEntity, "El JSON-LD debe contener la entidad EducationalOrganization u Organization");
    });

    it("T1-F4-03: Atributos mandatorios de entidad en JSON-LD (nombre, url, idioma)", () => {
      const content = readFileSync(layoutPath, "utf-8");
      assert.ok(content.includes('"Dev Visualizer"'), "JSON-LD debe contener el nombre 'Dev Visualizer'");
      assert.ok(content.includes("es-MX"), "JSON-LD debe declarar inLanguage: 'es-MX'");
      assert.ok(content.includes("https://schema.org"), "JSON-LD debe declarar @context: https://schema.org");
    });

    it("T1-F4-04: Declaración de WebApplication educativa con costo cero", () => {
      const content = readFileSync(layoutPath, "utf-8");
      assert.ok(content.includes("WebApplication"), "JSON-LD debe incluir WebApplication");
      assert.ok(content.includes("EducationalApplication"), "JSON-LD debe declarar EducationalApplication");
      assert.ok(/offers:\s*\{[\s\S]*?price:\s*"0"/.test(content), "JSON-LD debe definir oferta gratuita con price '0'");
    });

    it("T1-F4-05: Directivas de robots permisivas para GoogleBot en Layout", async () => {
      const layoutModule = await import("@/app/layout");
      const { metadata } = layoutModule;
      assert.ok(metadata.robots, "metadata.robots debe estar configurado");
      assert.equal(metadata.robots.index, true, "robots.index debe ser true");
      assert.equal(metadata.robots.follow, true, "robots.follow debe ser true");
      const googleBot = metadata.robots.googleBot;
      assert.ok(googleBot, "metadata.robots.googleBot debe estar configurado");
      assert.equal(googleBot.index, true, "googleBot.index debe ser true");
      assert.equal(googleBot["max-image-preview"], "large", "max-image-preview debe ser 'large'");
    });
  });

  // ==========================================================================
  // F5: Archivo .env.example completo (5 casos)
  // ==========================================================================
  describe("F5: Archivo .env.example completo", () => {
    const envPath = resolve(PROJECT_ROOT, ".env.example");

    it("T1-F5-01: Existencia física del archivo .env.example en la raíz del repositorio", () => {
      assert.ok(existsSync(envPath), "El archivo .env.example debe existir en la raíz del repositorio");
    });

    it("T1-F5-02: Documentación de la variable NEXT_PUBLIC_GA_ID para Google Analytics", () => {
      const content = readFileSync(envPath, "utf-8");
      assert.match(content, /^NEXT_PUBLIC_GA_ID=/m, "Debe declarar y documentar NEXT_PUBLIC_GA_ID");
    });

    it("T1-F5-03: Documentación de la variable NEXT_PUBLIC_SITE_URL para la URL base canónica", () => {
      const content = readFileSync(envPath, "utf-8");
      assert.match(content, /^NEXT_PUBLIC_SITE_URL=/m, "Debe declarar y documentar NEXT_PUBLIC_SITE_URL");
    });

    it("T1-F5-04: Documentación del token de verificación de Search Console", () => {
      const content = readFileSync(envPath, "utf-8");
      const hasVerificationVar = /NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION|NEXT_PUBLIC_GOOGLE_VERIFICATION|GOOGLE_SITE_VERIFICATION/m.test(content);
      assert.ok(hasVerificationVar, "Debe documentar variable de verificación de Google Search Console");
    });

    it("T1-F5-05: Ausencia de secretos reales o credenciales privadas en .env.example", () => {
      const content = readFileSync(envPath, "utf-8");
      assert.doesNotMatch(content, /AIza[0-9A-Za-z-_]{35}/, "No debe contener API keys reales de Firebase o Google Cloud");
      assert.doesNotMatch(content, /ghp_[a-zA-Z0-9]{36}/, "No debe contener tokens personales activos de GitHub");
    });
  });

});
