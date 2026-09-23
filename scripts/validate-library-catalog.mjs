import { readFile } from "node:fs/promises";

const snapshotPath = new URL("../src/data/libraryResources.snapshot.json", import.meta.url);
const snapshot = JSON.parse(await readFile(snapshotPath, "utf8"));
const expectedTopicCount = 42;
const expectedResourceCount = 179;
const validStatuses = new Set([
  "local-redistributable",
  "official-external",
  "external-preserved",
  "permission-required",
  "unavailable",
]);

function fail(message) {
  throw new Error(`[library-catalog] ${message}`);
}

function isAbsoluteHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

if (snapshot.snapshot?.expectedTopics !== expectedTopicCount) fail("La instantánea no declara 42 temas fuente.");
if (snapshot.snapshot?.expectedResources !== expectedResourceCount) fail("La instantánea no declara 179 recursos fuente.");
if (!Array.isArray(snapshot.resources) || snapshot.resources.length !== expectedResourceCount) fail(`Se esperaban 179 recursos y se encontraron ${snapshot.resources?.length ?? 0}.`);

const ids = new Set();
const sourceTopics = new Set();
for (const resource of snapshot.resources) {
  if (!resource.id || ids.has(resource.id)) fail(`ID ausente o duplicado: ${resource.id ?? "(vacío)"}.`);
  ids.add(resource.id);
  if (!resource.topicSlug || !resource.sourceTopicSlug) fail(`El recurso ${resource.id} no conserva su relación temática.`);
  sourceTopics.add(resource.sourceTopicSlug);
  if (!isAbsoluteHttpUrl(resource.primaryUrl)) fail(`URL principal no absoluta en ${resource.id}.`);
  for (const mirror of resource.mirrors ?? []) {
    if (!isAbsoluteHttpUrl(mirror)) fail(`Espejo no absoluto en ${resource.id}.`);
  }
  if (!validStatuses.has(resource.preservationStatus)) fail(`Estado de preservación inválido en ${resource.id}.`);
  if (resource.localFile) {
    if (resource.preservationStatus !== "local-redistributable") fail(`El adjunto ${resource.id} no está marcado como redistribuible.`);
    if (!resource.localFile.sha256 || !resource.localFile.licenseUrl || !resource.localFile.sourceUrl) fail(`El adjunto ${resource.id} no registra hash, licencia y procedencia.`);
  }
}

if (sourceTopics.size !== expectedTopicCount) fail(`Se esperaban 42 temas fuente y se encontraron ${sourceTopics.size}.`);

console.log(`[library-catalog] OK: ${sourceTopics.size} temas fuente, ${ids.size} recursos, IDs y URLs válidos.`);
