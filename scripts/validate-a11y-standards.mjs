import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const outputDirectory = "out";

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

if (!existsSync(outputDirectory)) {
  throw new Error("No existe out/. Ejecuta npm run build antes de validar accesibilidad.");
}

const htmlFiles = walk(outputDirectory).filter((file) => file.endsWith(".html"));
const violations = [];
let imgCount = 0;
let buttonCount = 0;

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, "utf8");

  // 1. Auditar etiquetas <img>: deben tener atributo alt (descriptivo o alt="")
  const imgMatches = html.matchAll(/<img\b([^>]*)>/gi);
  for (const match of imgMatches) {
    imgCount++;
    const attributes = match[1];
    if (!/\balt\s*=/i.test(attributes)) {
      violations.push(`${htmlFile}: <img> sin atributo alt: "${match[0].slice(0, 80)}"`);
    }
  }

  // 2. Auditar etiquetas <button>: deben tener nombre accesible (aria-label o contenido)
  const buttonMatches = html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi);
  for (const match of buttonMatches) {
    buttonCount++;
    const attributes = match[1];
    const content = match[2].trim();
    const hasAriaLabel = /\baria-label\s*=\s*(?:"[^"]+"|'[^']+')/i.test(attributes);
    const hasTitle = /\btitle\s*=\s*(?:"[^"]+"|'[^']+')/i.test(attributes);
    const hasTextContent = content.length > 0 && !/^<svg[\s\S]*<\/svg>$/i.test(content);

    if (!hasAriaLabel && !hasTitle && !hasTextContent) {
      violations.push(`${htmlFile}: <button> sin nombre accesible detectable: "${match[0].slice(0, 80)}"`);
    }
  }
}

if (violations.length > 0) {
  console.error(`[a11y-audit] Se encontraron ${violations.length} infracciones de accesibilidad:`);
  console.error(violations.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`[a11y-audit] OK: ${htmlFiles.length} páginas HTML auditadas.`);
  console.log(`[a11y-audit] ${imgCount} imágenes con atributo alt y ${buttonCount} botones accesibles verificados.`);
}
