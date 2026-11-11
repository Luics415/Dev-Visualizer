/**
 * Dev Visualizer — Empirical Challenger Adversarial Test Harness for M1
 * tests/test-adversarial-sitemap.ts
 *
 * Exhaustively stress-tests sitemap.ts, robots.txt, and out/sitemap.xml.
 */

import sitemap from "../src/app/sitemap";
import { collectionManifest } from "../src/data/collectionManifest";
import * as fs from "node:fs";
import * as path from "node:path";

const siteUrlVariants: Array<{ label: string; value: string | undefined }> = [
  { label: "undefined (default)", value: undefined },
  { label: "https://luics415.github.io/Dev-Visualizer (no trailing)", value: "https://luics415.github.io/Dev-Visualizer" },
  { label: "https://luics415.github.io/Dev-Visualizer/ (with trailing)", value: "https://luics415.github.io/Dev-Visualizer/" },
  { label: "https://luics415.github.io (no trailing, no base)", value: "https://luics415.github.io" },
  { label: "https://luics415.github.io/ (with trailing, no base)", value: "https://luics415.github.io/" },
  { label: "https://dev-visualizer.com (custom domain, no trailing)", value: "https://dev-visualizer.com" },
  { label: "https://dev-visualizer.com/ (custom domain, with trailing)", value: "https://dev-visualizer.com/" },
  { label: "http://localhost:3000 (localhost, no trailing)", value: "http://localhost:3000" },
  { label: "http://localhost:3000/ (localhost, with trailing)", value: "http://localhost:3000/" },
];

const basePathVariants: Array<{ label: string; value: string | undefined }> = [
  { label: "undefined", value: undefined },
  { label: "empty string ''", value: "" },
  { label: "single slash '/'", value: "/" },
  { label: "/Dev-Visualizer (leading slash, no trailing)", value: "/Dev-Visualizer" },
  { label: "/Dev-Visualizer/ (leading and trailing slash)", value: "/Dev-Visualizer/" },
  { label: "Dev-Visualizer (NO leading slash, no trailing)", value: "Dev-Visualizer" },
  { label: "Dev-Visualizer/ (NO leading slash, with trailing)", value: "Dev-Visualizer/" },
  { label: "/custom-base (leading slash)", value: "/custom-base" },
  { label: "custom-base (NO leading slash)", value: "custom-base" },
];

interface Failure {
  scenario: string;
  siteUrl: string | undefined;
  basePath: string | undefined;
  type: string;
  details: string;
  sampleUrl?: string;
}

const failures: Failure[] = [];
let totalCombinationsTested = 0;
let totalUrlsInspected = 0;

console.log("===============================================================================");
console.log("▶ EJECUTANDO HARNESS ADVERSARIAL DE SITEMAP Y VARIABLES DE ENTORNO (M1)");
console.log("===============================================================================\n");

// Backup original env
const origSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const origBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

for (const siteUrlVar of siteUrlVariants) {
  for (const basePathVar of basePathVariants) {
    totalCombinationsTested++;
    const scenarioName = `[SITE_URL: ${siteUrlVar.label}] × [BASE_PATH: ${basePathVar.label}]`;

    // Set environment
    if (siteUrlVar.value === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = siteUrlVar.value;
    }

    if (basePathVar.value === undefined) {
      delete process.env.NEXT_PUBLIC_BASE_PATH;
    } else {
      process.env.NEXT_PUBLIC_BASE_PATH = basePathVar.value;
    }

    let items;
    try {
      items = sitemap();
    } catch (err) {
      failures.push({
        scenario: scenarioName,
        siteUrl: siteUrlVar.value,
        basePath: basePathVar.value,
        type: "RUNTIME_EXCEPTION",
        details: String(err),
      });
      continue;
    }

    // Check count
    if (items.length !== 226) {
      failures.push({
        scenario: scenarioName,
        siteUrl: siteUrlVar.value,
        basePath: basePathVar.value,
        type: "INVALID_COUNT",
        details: `Esperado 226 URLs, obtenido ${items.length}`,
      });
    }

    // Check root presence and position
    const firstItem = items[0];
    if (!firstItem) {
      failures.push({
        scenario: scenarioName,
        siteUrl: siteUrlVar.value,
        basePath: basePathVar.value,
        type: "EMPTY_SITEMAP",
        details: "El sitemap no retornó elementos",
      });
      continue;
    }

    // Check double slashes in each URL
    for (const item of items) {
      totalUrlsInspected++;
      const urlWithoutScheme = item.url.replace(/^https?:\/\//, "");

      // Check double slashes (//)
      if (urlWithoutScheme.includes("//")) {
        failures.push({
          scenario: scenarioName,
          siteUrl: siteUrlVar.value,
          basePath: basePathVar.value,
          type: "DOUBLE_SLASH_DETECTED",
          details: `URL contiene doble barra: ${item.url}`,
          sampleUrl: item.url,
        });
        break; // Record once per combination
      }

      // Check for missing slash between host and path/basePath
      // If basePath was provided without leading slash, e.g. "github.ioDev-Visualizer"
      try {
        const parsed = new URL(item.url);
        // If basePath was "Dev-Visualizer" and host ends with "Dev-Visualizer" because of missing slash
        if (
          basePathVar.value &&
          !basePathVar.value.startsWith("/") &&
          parsed.host.includes(basePathVar.value) &&
          !siteUrlVar.value?.includes(parsed.host)
        ) {
          failures.push({
            scenario: scenarioName,
            siteUrl: siteUrlVar.value,
            basePath: basePathVar.value,
            type: "CORRUPTED_HOST_MISSING_SLASH",
            details: `El host fue corrompido por falta de barra inicial en basePath: host='${parsed.host}', url='${item.url}'`,
            sampleUrl: item.url,
          });
          break;
        }
      } catch (e) {
        failures.push({
          scenario: scenarioName,
          siteUrl: siteUrlVar.value,
          basePath: basePathVar.value,
          type: "INVALID_URL_SYNTAX",
          details: `URL no parseable: ${item.url} (${e})`,
          sampleUrl: item.url,
        });
        break;
      }

      // Check priorities
      if (typeof item.priority !== "number" || item.priority < 0 || item.priority > 1) {
        failures.push({
          scenario: scenarioName,
          siteUrl: siteUrlVar.value,
          basePath: basePathVar.value,
          type: "INVALID_PRIORITY",
          details: `Prioridad fuera de rango [0, 1]: ${item.priority} en ${item.url}`,
          sampleUrl: item.url,
        });
        break;
      }
    }

    // Check root priority is 1
    if (firstItem.priority !== 1) {
      failures.push({
        scenario: scenarioName,
        siteUrl: siteUrlVar.value,
        basePath: basePathVar.value,
        type: "ROOT_PRIORITY_NOT_1",
        details: `Prioridad de raíz es ${firstItem.priority}, esperada 1.0`,
        sampleUrl: firstItem.url,
      });
    }

    // Check that root ends with /
    if (!firstItem.url.endsWith("/")) {
      failures.push({
        scenario: scenarioName,
        siteUrl: siteUrlVar.value,
        basePath: basePathVar.value,
        type: "ROOT_MISSING_TRAILING_SLASH",
        details: `La URL raíz no termina con barra: ${firstItem.url}`,
        sampleUrl: firstItem.url,
      });
    }
  }
}

// Restore original env
if (origSiteUrl !== undefined) process.env.NEXT_PUBLIC_SITE_URL = origSiteUrl;
else delete process.env.NEXT_PUBLIC_SITE_URL;
if (origBasePath !== undefined) process.env.NEXT_PUBLIC_BASE_PATH = origBasePath;
else delete process.env.NEXT_PUBLIC_BASE_PATH;

console.log(`Combinaciones probadas: ${totalCombinationsTested}`);
console.log(`Total URLs inspeccionadas: ${totalUrlsInspected}`);
console.log(`Fallos / Anomalías detectadas: ${failures.length}\n`);

if (failures.length > 0) {
  console.log("══════════════════════════════════════════════════════════════════════");
  console.log("✖ ANOMALÍAS DETECTADAS EN PRUEBAS ADVERSARIALES:");
  console.log("══════════════════════════════════════════════════════════════════════");
  for (const f of failures) {
    console.log(`- Tipo: ${f.type}`);
    console.log(`  Escenario: ${f.scenario}`);
    console.log(`  Detalle: ${f.details}`);
    if (f.sampleUrl) console.log(`  URL muestra: ${f.sampleUrl}`);
    console.log("");
  }
} else {
  console.log("✔ TODAS las combinaciones pasaron sin dobles barras ni malformaciones.");
}

// Check collection coverage against collectionManifest
console.log("\n===============================================================================");
console.log("▶ VERIFICACIÓN DE COBERTURA COMPLETA DE RUTAS DEL CATÁLOGO");
console.log("===============================================================================\n");

process.env.NEXT_PUBLIC_SITE_URL = "https://luics415.github.io/Dev-Visualizer";
process.env.NEXT_PUBLIC_BASE_PATH = "/Dev-Visualizer";
const standardItems = sitemap();

const institutionalRoutes = [
  "/",
  "/colecciones",
  "/libreria",
  "/acerca",
  "/privacidad",
  "/terminos",
  "/cookies",
];

let allInstitutionalFound = true;
for (const r of institutionalRoutes) {
  const expectedUrl = `https://luics415.github.io/Dev-Visualizer${r === "/" ? "/" : r}`;
  const found = standardItems.some((i) => i.url === expectedUrl);
  if (!found) {
    console.log(`✖ Ruta institucional faltante: ${expectedUrl}`);
    allInstitutionalFound = false;
  }
}
if (allInstitutionalFound) {
  console.log(`✔ Las 7 rutas institucionales están presentes con URLs canónicas exactas.`);
}

let collectionsVerified = 0;
let actionRoutesVerified = 0;
let libraryRoutesVerified = 0;

for (const col of collectionManifest) {
  const colUrl = `https://luics415.github.io/Dev-Visualizer${col.href}`;
  const actUrl = `https://luics415.github.io/Dev-Visualizer${col.actionHref}`;
  const libUrl = `https://luics415.github.io/Dev-Visualizer/libreria/${col.librarySlug}`;

  if (standardItems.some((i) => i.url === colUrl)) collectionsVerified++;
  if (standardItems.some((i) => i.url === actUrl)) actionRoutesVerified++;
  if (standardItems.some((i) => i.url === libUrl)) libraryRoutesVerified++;
}

console.log(`Colecciones principales encontradas: ${collectionsVerified}/${collectionManifest.length}`);
console.log(`Rutas 'en acción' encontradas: ${actionRoutesVerified}/${collectionManifest.length}`);
console.log(`Rutas de librería temática encontradas: ${libraryRoutesVerified}/${collectionManifest.length}`);
console.log(`Total URLs de colecciones: ${collectionsVerified + actionRoutesVerified + libraryRoutesVerified} (73 × 3 = 219)`);
console.log(`Total general: ${institutionalRoutes.length} + 219 = ${institutionalRoutes.length + collectionsVerified + actionRoutesVerified + libraryRoutesVerified}`);

// Inspect public/robots.txt
console.log("\n===============================================================================");
console.log("▶ INSPECCIÓN DE public/robots.txt");
console.log("===============================================================================\n");
const robotsTxtPath = path.resolve(process.cwd(), "public/robots.txt");
if (fs.existsSync(robotsTxtPath)) {
  const robotsContent = fs.readFileSync(robotsTxtPath, "utf-8");
  console.log("Contenido de public/robots.txt:\n" + robotsContent.trim());
  const hasUserAgent = /User-agent:\s*\*/i.test(robotsContent);
  const hasAllow = /Allow:\s*\//i.test(robotsContent);
  const hasDisallow = /Disallow:\s*\//i.test(robotsContent);
  const hasSitemap = /Sitemap:\s*https:\/\/[^\s]+/i.test(robotsContent);

  console.log(`\nValidación de directivas:`);
  console.log(`- User-agent universal (*): ${hasUserAgent}`);
  console.log(`- Allow: / presente: ${hasAllow}`);
  console.log(`- Disallow bloqueante ausente: ${!hasDisallow}`);
  console.log(`- Sitemap canónico declarado: ${hasSitemap}`);
} else {
  console.log("✖ public/robots.txt no existe!");
}

// Inspect out/sitemap.xml
console.log("\n===============================================================================");
console.log("▶ INSPECCIÓN DE out/sitemap.xml");
console.log("===============================================================================\n");
const sitemapXmlPath = path.resolve(process.cwd(), "out/sitemap.xml");
if (fs.existsSync(sitemapXmlPath)) {
  const xmlContent = fs.readFileSync(sitemapXmlPath, "utf-8");
  const locMatches = xmlContent.match(/<loc>(.*?)<\/loc>/g) || [];
  console.log(`Total <loc> encontrados en out/sitemap.xml: ${locMatches.length}`);
  console.log(`Primer <loc>: ${locMatches[0]}`);
  console.log(`Segundo <loc>: ${locMatches[1]}`);
  console.log(`Último <loc>: ${locMatches[locMatches.length - 1]}`);

  // Check double slashes in out/sitemap.xml
  const xmlDoubleSlashes = locMatches.filter((loc) => {
    const raw = loc.replace(/<\/?loc>/g, "").replace(/^https?:\/\//, "");
    return raw.includes("//");
  });
  console.log(`URLs con doble barra en out/sitemap.xml: ${xmlDoubleSlashes.length}`);
  if (xmlDoubleSlashes.length > 0) {
    console.log(`Ejemplos de doble barra:`, xmlDoubleSlashes.slice(0, 3));
  }
} else {
  console.log("✖ out/sitemap.xml no existe en el sistema de archivos!");
}

// Inspect out HTML files
console.log("\n===============================================================================");
console.log("▶ INSPECCIÓN DE METADATOS EN HTML ESTÁTICO DE out/");
console.log("===============================================================================\n");

const outIndexPath = path.resolve(process.cwd(), "out/index.html");
const outColPath = path.resolve(process.cwd(), "out/colecciones/index.html");
const outAcercaPath = path.resolve(process.cwd(), "out/acerca/index.html");

if (fs.existsSync(outIndexPath)) {
  const iHtml = fs.readFileSync(outIndexPath, "utf-8");
  const iTitle = iHtml.match(/<title>(.*?)<\/title>/)?.[1];
  const iCanon = iHtml.match(/<link\s+rel="canonical"\s+href="(.*?)"/)?.[1];
  const hasOrg = iHtml.includes('"EducationalOrganization"');
  const hasEmptyVerif = iHtml.includes('name="google-site-verification" content=""') || iHtml.includes('name="google-site-verification" content=');
  console.log(`Portada (out/index.html):`);
  console.log(`- Título: ${iTitle}`);
  console.log(`- Enlace canónico: ${iCanon}`);
  console.log(`- Incluye EducationalOrganization en JSON-LD: ${hasOrg}`);
  console.log(`- Emite etiqueta vacía de verificación: ${hasEmptyVerif}`);
}

if (fs.existsSync(outColPath)) {
  const cHtml = fs.readFileSync(outColPath, "utf-8");
  const cTitle = cHtml.match(/<title>(.*?)<\/title>/)?.[1];
  const cCanon = cHtml.match(/<link\s+rel="canonical"\s+href="(.*?)"/)?.[1];
  const cDesc = cHtml.match(/<meta\s+name="description"\s+content="(.*?)"/)?.[1];
  console.log(`\nColecciones (out/colecciones/index.html):`);
  console.log(`- Título: ${cTitle}`);
  console.log(`- Enlace canónico: ${cCanon}`);
  console.log(`- Descripción: ${cDesc}`);
}

if (fs.existsSync(outAcercaPath)) {
  const aHtml = fs.readFileSync(outAcercaPath, "utf-8");
  const aTitle = aHtml.match(/<title>(.*?)<\/title>/)?.[1];
  const aCanon = aHtml.match(/<link\s+rel="canonical"\s+href="(.*?)"/)?.[1];
  const aDesc = aHtml.match(/<meta\s+name="description"\s+content="(.*?)"/)?.[1];
  console.log(`\nAcerca de (out/acerca/index.html):`);
  console.log(`- Título: ${aTitle}`);
  console.log(`- Enlace canónico: ${aCanon}`);
  console.log(`- Descripción: ${aDesc}`);
}
