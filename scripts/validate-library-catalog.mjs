import { readFile } from "node:fs/promises";
import ts from "typescript";

const snapshotPath = new URL("../src/data/libraryResources.snapshot.json", import.meta.url);
const supplementalPath = new URL("../src/data/supplementalLibraryResources.ts", import.meta.url);
const topicsPath = new URL("../src/data/libraryTopics.ts", import.meta.url);
const officialSourcePaths = [
  new URL("../src/data/officialReferences.ts", import.meta.url),
  new URL("../src/data/newLearningCollections.ts", import.meta.url),
  new URL("../src/data/newLearningSourceExtensions.ts", import.meta.url),
  topicsPath,
];
const snapshot = JSON.parse(await readFile(snapshotPath, "utf8"));
const expectedTopicCount = 42;
const expectedResourceCount = 179;
const expectedSupplementalTopicCount = 29;
const expectedSupplementalResourceCount = 87;
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

const supplementalText = await readFile(supplementalPath, "utf8");
const supplementalSource = ts.createSourceFile(
  supplementalPath.pathname,
  supplementalText,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS,
);

function stringProperty(object, name) {
  const property = object.properties.find((entry) =>
    ts.isPropertyAssignment(entry) && entry.name.getText(supplementalSource).replaceAll('"', "") === name,
  );
  return property && ts.isPropertyAssignment(property) && ts.isStringLiteral(property.initializer)
    ? property.initializer.text
    : undefined;
}

const supplementalResources = [];
function visit(node) {
  if (
    ts.isCallExpression(node)
    && node.expression.getText(supplementalSource) === "resource"
    && ts.isObjectLiteralExpression(node.arguments[0])
  ) {
    const object = node.arguments[0];
    supplementalResources.push({
      topicSlug: stringProperty(object, "topicSlug"),
      slug: stringProperty(object, "slug"),
      level: stringProperty(object, "level"),
      primaryUrl: stringProperty(object, "primaryUrl"),
    });
  }
  ts.forEachChild(node, visit);
}
visit(supplementalSource);

if (supplementalResources.length !== expectedSupplementalResourceCount) {
  fail(`La curaduría complementaria debe contener exactamente ${expectedSupplementalResourceCount} recursos; contiene ${supplementalResources.length}.`);
}

const supplementalIds = new Set();
const supplementalUrls = new Set();
const levelsByTopic = new Map();
const importedUrls = new Set(snapshot.resources.map((resource) => resource.primaryUrl));
const registeredOfficialUrls = new Set();
for (const path of officialSourcePaths) {
  const text = await readFile(path, "utf8");
  const source = ts.createSourceFile(path.pathname, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  function collectOfficialUrls(node) {
    if (ts.isStringLiteral(node) && node.text.startsWith("https://")) registeredOfficialUrls.add(node.text);
    ts.forEachChild(node, collectOfficialUrls);
  }
  collectOfficialUrls(source);
}
for (const resource of supplementalResources) {
  if (!resource.topicSlug || !resource.slug || !resource.level || !resource.primaryUrl) fail("Una ficha complementaria tiene metadatos obligatorios incompletos.");
  const id = `supplemental--${resource.topicSlug}--${resource.slug}`;
  if (ids.has(id) || supplementalIds.has(id)) fail(`ID complementario duplicado: ${id}.`);
  if (supplementalUrls.has(resource.primaryUrl) || importedUrls.has(resource.primaryUrl) || registeredOfficialUrls.has(resource.primaryUrl)) fail(`URL complementaria duplicada: ${resource.primaryUrl}.`);
  if (!isAbsoluteHttpUrl(resource.primaryUrl)) fail(`URL complementaria no absoluta en ${id}.`);
  supplementalIds.add(id);
  supplementalUrls.add(resource.primaryUrl);
  const topicLevels = levelsByTopic.get(resource.topicSlug) ?? new Set();
  topicLevels.add(resource.level);
  levelsByTopic.set(resource.topicSlug, topicLevels);
}

if (levelsByTopic.size !== expectedSupplementalTopicCount) fail(`Se esperaban 29 temas complementarios y se encontraron ${levelsByTopic.size}.`);
for (const [topic, levels] of levelsByTopic) {
  if (!levels.has("beginner") || !levels.has("intermediate") || !levels.has("advanced")) fail(`El tema complementario ${topic} no cubre los tres niveles.`);
}

const topicsText = await readFile(topicsPath, "utf8");
const topicsSource = ts.createSourceFile(topicsPath.pathname, topicsText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const topicsWithoutReferenceCatalog = new Set();
function visitTopics(node) {
  if (ts.isCallExpression(node) && node.expression.getText(topicsSource) === "topic") {
    const slug = node.arguments[0];
    const sourceTopicSlug = node.arguments[6];
    if (ts.isStringLiteral(slug) && !sourceTopicSlug) topicsWithoutReferenceCatalog.add(slug.text);
  }
  ts.forEachChild(node, visitTopics);
}
visitTopics(topicsSource);
if (topicsWithoutReferenceCatalog.size !== expectedSupplementalTopicCount) fail(`El manifiesto debe contener 29 temas sin Catálogo de referencia; contiene ${topicsWithoutReferenceCatalog.size}.`);
for (const topic of levelsByTopic.keys()) {
  if (!topicsWithoutReferenceCatalog.has(topic)) fail(`La curaduría complementaria invade el tema atribuido ${topic}.`);
}

console.log(`[library-catalog] OK: ${sourceTopics.size} temas fuente/${ids.size} recursos y ${levelsByTopic.size} temas complementarios/${supplementalIds.size} recursos; IDs, niveles y URLs válidos.`);
