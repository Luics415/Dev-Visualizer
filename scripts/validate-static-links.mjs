import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";

const outputDirectory = "out";
const projectBasePath = "/Dev-Visualizer";

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function resolveCandidates(href) {
  const pathWithoutSuffix = href.split("#", 1)[0].split("?", 1)[0];
  const normalizedPath = decodeURIComponent(pathWithoutSuffix)
    .replace(new RegExp(`^${projectBasePath}`), "")
    .replace(/^\/+/, "");

  if (!normalizedPath) return [join(outputDirectory, "index.html")];
  if (extname(normalizedPath)) return [join(outputDirectory, normalizedPath)];

  return [
    join(outputDirectory, normalizedPath),
    join(outputDirectory, normalizedPath, "index.html"),
    join(outputDirectory, `${normalizedPath}.html`),
  ];
}

if (!existsSync(outputDirectory)) {
  throw new Error("No existe out/. Ejecuta npm run build antes de comprobar enlaces.");
}

const htmlFiles = walk(outputDirectory).filter((file) => file.endsWith(".html"));
const brokenLinks = new Set();

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, "utf8");
  const hrefPattern = /<(?:a|link)\b[^>]*\bhref=(?:"([^"]+)"|'([^']+)')/g;

  for (const match of html.matchAll(hrefPattern)) {
    const href = match[1] ?? match[2];
    if (!href.startsWith("/") || href.startsWith("//")) continue;

    const candidates = resolveCandidates(href);
    if (!candidates.some((candidate) => existsSync(candidate))) {
      brokenLinks.add(`${htmlFile} -> ${href}`);
    }
  }
}

if (brokenLinks.size > 0) {
  console.error(`Se encontraron ${brokenLinks.size} enlaces internos rotos:`);
  console.error([...brokenLinks].join("\n"));
  process.exitCode = 1;
} else {
  console.log(`${htmlFiles.length} páginas HTML verificadas; 0 enlaces internos rotos.`);
}
