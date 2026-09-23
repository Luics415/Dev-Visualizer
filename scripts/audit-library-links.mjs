import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const libraryDirectory = join("out", "libreria");
const reportDirectory = ".artifacts";
const reportPath = join(reportDirectory, "library-link-report.json");
const concurrency = 8;
const timeoutMs = 10_000;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }));
  return nested.flat();
}

function externalLinks(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref=(?:"([^"]+)"|'([^']+)')/g)]
    .map((match) => match[1] ?? match[2])
    .filter((href) => /^https?:\/\//i.test(href));
}

async function probe(url) {
  const startedAt = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const headers = { "User-Agent": "Dev-Visualizer-Library-Audit/1.0 (+https://github.com/Luics415/Dev-Visualizer)" };
    let response = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal, headers });
    if (!response.ok) {
      await response.body?.cancel();
      response = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal, headers: { ...headers, Range: "bytes=0-0" } });
    }
    const result = { url, ok: response.ok, status: response.status, finalUrl: response.url, elapsedMs: Date.now() - startedAt };
    await response.body?.cancel();
    return result;
  } catch (error) {
    return { url, ok: false, status: null, error: error instanceof Error ? error.message : String(error), elapsedMs: Date.now() - startedAt };
  } finally {
    clearTimeout(timeout);
  }
}

const htmlFiles = (await walk(libraryDirectory)).filter((path) => path.endsWith(".html"));
const links = new Set();
for (const file of htmlFiles) {
  externalLinks(await readFile(file, "utf8")).forEach((href) => links.add(href));
}

const queue = [...links];
const results = [];
await Promise.all(Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
  while (queue.length) {
    const url = queue.shift();
    if (url) results.push(await probe(url));
  }
}));

results.sort((left, right) => left.url.localeCompare(right.url));
const summary = {
  checkedAt: new Date().toISOString(),
  pages: htmlFiles.length,
  links: results.length,
  available: results.filter((result) => result.ok).length,
  unavailable: results.filter((result) => !result.ok).length,
};

await mkdir(reportDirectory, { recursive: true });
await writeFile(reportPath, `${JSON.stringify({ summary, results }, null, 2)}\n`, "utf8");
console.log(`Librería: ${summary.available}/${summary.links} enlaces externos respondieron correctamente.`);
if (summary.unavailable) console.warn(`Hay ${summary.unavailable} enlaces para revisión editorial. El informe no bloquea la publicación.`);
