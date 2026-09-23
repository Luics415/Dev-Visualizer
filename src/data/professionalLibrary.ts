import rawSnapshot from "./libraryResources.snapshot.json";
import { collectionManifest } from "./collectionManifest";
import { officialReferenceCatalog, officialReferencesForCollection } from "./officialReferences";
import { additionalOfficialSources, libraryTopicBySlug, libraryTopics } from "./libraryTopics";
import { supplementalLibraryResources } from "./supplementalLibraryResources";
import type {
  LibraryFormat,
  LibraryPreservationStatus,
  LibraryResource,
  LibraryResourceKind,
  LibraryResourceLevel,
  LibrarySourceSnapshot,
  LibraryTopic,
} from "./libraryTypes";

type SnapshotFile = {
  snapshot: LibrarySourceSnapshot;
  resources: LibraryResource[];
};

const importedSnapshot = rawSnapshot as unknown as SnapshotFile;

export const librarySourceSnapshot = importedSnapshot.snapshot;
export const importedLibraryResources: readonly LibraryResource[] = importedSnapshot.resources;
export { supplementalLibraryResources };
export const sourceTopicCount = 42;
export const sourceResourceCount = 179;
export const supplementalResourceCount = supplementalLibraryResources.length;
export const libraryTopicCount = libraryTopics.length;

const referenceKindMap = {
  standard: "specification",
  specification: "specification",
  "official-docs": "official-docs",
  "official-api": "official-docs",
  "primary-manual": "reference",
  "archival-primary": "reference",
} as const satisfies Record<string, LibraryResourceKind>;

const officialReferenceByUrl = new Map(
  [...officialReferenceCatalog.values()].map((reference) => [reference.href, reference]),
);

function formatsForOfficialReference(label: string, href: string): readonly LibraryFormat[] {
  const url = new URL(href);
  if (url.pathname.toLocaleLowerCase("en-US").endsWith(".pdf")) return ["PDF"];
  if (url.hostname === "github.com" || /repository|repositorio|source code/i.test(label)) return ["Repositorio"];
  return ["HTML"];
}

export function officialLibraryResourcesForTopic(topic: LibraryTopic): readonly LibraryResource[] {
  const fromCollection = officialReferencesForCollection(topic.collectionId).map<LibraryResource>((reference) => ({
    // La referencia conserva una identidad global aunque sea pertinente para
    // varias bibliotecas. `topicSlug` representa aquí la asociación de vista.
    id: `official--${reference.id}`,
    topicSlug: topic.slug,
    title: reference.label,
    author: reference.authority,
    authority: reference.authority,
    formats: formatsForOfficialReference(reference.label, reference.href),
    kind: referenceKindMap[reference.kind],
    level: "general",
    primaryUrl: reference.href,
    note: reference.coverage,
    version: reference.version,
    reviewedAt: reference.verifiedAt,
    preservationStatus: "official-external",
    licenseStatus: "external-only",
  }));

  const seed = additionalOfficialSources[topic.slug];
  const registeredSeed = seed ? officialReferenceByUrl.get(seed.url) : undefined;
  const fallback = seed && !fromCollection.some((resource) => resource.primaryUrl === seed.url) ? [{
    id: registeredSeed ? `official--${registeredSeed.id}` : `official--${topic.slug}--primary`,
    topicSlug: topic.slug,
    title: registeredSeed?.label ?? seed.title,
    author: registeredSeed?.authority ?? seed.authority,
    authority: registeredSeed?.authority ?? seed.authority,
    formats: registeredSeed ? formatsForOfficialReference(registeredSeed.label, registeredSeed.href) : ["HTML"] as readonly LibraryFormat[],
    kind: registeredSeed ? referenceKindMap[registeredSeed.kind] : seed.kind,
    level: "general" as const,
    primaryUrl: seed.url,
    note: registeredSeed?.coverage,
    version: registeredSeed?.version ?? seed.version,
    reviewedAt: registeredSeed?.verifiedAt ?? librarySourceSnapshot.importedAt,
    preservationStatus: "official-external" as const,
    licenseStatus: "external-only" as const,
  }] : [];

  return [...fromCollection, ...fallback];
}

export function importedResourcesForTopic(topicSlug: string) {
  return importedLibraryResources.filter((resource) => resource.topicSlug === topicSlug);
}

export function supplementalResourcesForTopic(topicSlug: string) {
  return supplementalLibraryResources.filter((resource) => resource.topicSlug === topicSlug);
}

export function allResourcesForTopic(topicSlug: string) {
  const topic = libraryTopicBySlug.get(topicSlug);
  if (!topic) return [];
  const combined = [
    ...officialLibraryResourcesForTopic(topic),
    ...importedResourcesForTopic(topicSlug),
    ...supplementalResourcesForTopic(topicSlug),
  ];
  return [...new Map(combined.map((resource) => [resource.primaryUrl, resource])).values()];
}

export type LibraryIndexEntry = LibraryTopic & {
  resourceCount: number;
  officialCount: number;
  importedCount: number;
  supplementalCount: number;
  formats: readonly LibraryFormat[];
  levels: readonly LibraryResourceLevel[];
  preservationStatuses: readonly LibraryPreservationStatus[];
  searchText: string;
};

export const libraryIndexEntries: readonly LibraryIndexEntry[] = libraryTopics.map((topic) => {
  const resources = allResourcesForTopic(topic.slug);
  const officialResources = officialLibraryResourcesForTopic(topic);
  const importedCount = importedResourcesForTopic(topic.slug).length;
  const supplementalCount = supplementalResourcesForTopic(topic.slug).length;
  return {
    ...topic,
    resourceCount: resources.length,
    officialCount: officialResources.length,
    importedCount,
    supplementalCount,
    formats: [...new Set(resources.flatMap((resource) => resource.formats))],
    levels: [...new Set(resources.map((resource) => resource.level))],
    preservationStatuses: [...new Set(resources.map((resource) => resource.preservationStatus))],
    searchText: [
      topic.title,
      topic.short,
      topic.description,
      ...resources.flatMap((resource) => [resource.title, resource.author ?? "", resource.authority ?? ""]),
    ].join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es"),
  };
});

// El encabezado cuenta obras y fuentes únicas, no sus asociaciones temáticas.
export const totalLibraryResourceCount = new Set(
  libraryTopics.flatMap((topic) => allResourcesForTopic(topic.slug).map((resource) => resource.primaryUrl)),
).size;

function isAbsoluteHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function validateProfessionalLibrary() {
  if (libraryTopics.length !== 71) throw new Error(`La Librería profesional debe contener 71 temas; contiene ${libraryTopics.length}.`);
  if (libraryTopics.filter((topic) => topic.sourceTopicSlug).length !== sourceTopicCount) throw new Error("La instantánea no representa exactamente los 42 temas de origen.");
  if (importedLibraryResources.length !== sourceResourceCount) throw new Error(`La instantánea debe contener 179 recursos; contiene ${importedLibraryResources.length}.`);
  if (supplementalLibraryResources.length !== 87) throw new Error(`La curaduría complementaria debe contener exactamente 87 recursos; contiene ${supplementalLibraryResources.length}.`);
  if (librarySourceSnapshot.expectedTopics !== sourceTopicCount || librarySourceSnapshot.expectedResources !== sourceResourceCount) throw new Error("Las cifras declaradas por la instantánea no coinciden con el contrato del catálogo.");

  const topicSlugs = new Set<string>();
  const collectionIds = new Set<string>();
  const sourceTopicSlugs = new Set<string>();
  for (const topic of libraryTopics) {
    if (topicSlugs.has(topic.slug)) throw new Error(`Slug de librería duplicado: ${topic.slug}`);
    if (collectionIds.has(topic.collectionId)) throw new Error(`Colección de librería duplicada: ${topic.collectionId}`);
    topicSlugs.add(topic.slug);
    collectionIds.add(topic.collectionId);
    if (topic.sourceTopicSlug) {
      if (sourceTopicSlugs.has(topic.sourceTopicSlug)) throw new Error(`Tema fuente duplicado: ${topic.sourceTopicSlug}`);
      sourceTopicSlugs.add(topic.sourceTopicSlug);
    }
    if (officialLibraryResourcesForTopic(topic).length === 0) throw new Error(`Falta una fuente oficial o primaria para ${topic.slug}.`);
    const collection = collectionManifest.find((entry) => entry.id === topic.collectionId);
    if (!collection) throw new Error(`La biblioteca ${topic.slug} no corresponde a una colección.`);
    if (collection.librarySlug !== topic.slug) throw new Error(`La colección ${topic.collectionId} debe enlazar a /libreria/${topic.slug}.`);
    if (collection.group !== topic.group) throw new Error(`La biblioteca ${topic.slug} debe pertenecer al grupo ${collection.group}.`);
  }

  const resourceIds = new Set<string>();
  const importedUrls = new Set<string>();
  for (const resource of importedLibraryResources) {
    if (resourceIds.has(resource.id)) throw new Error(`ID de recurso duplicado: ${resource.id}`);
    resourceIds.add(resource.id);
    if (!topicSlugs.has(resource.topicSlug)) throw new Error(`El recurso ${resource.id} apunta a un tema inexistente.`);
    if (!resource.sourceTopicSlug || !sourceTopicSlugs.has(resource.sourceTopicSlug)) throw new Error(`El recurso ${resource.id} perdió su tema de procedencia.`);
    if (!isAbsoluteHttpUrl(resource.primaryUrl)) throw new Error(`URL principal no absoluta en ${resource.id}.`);
    importedUrls.add(resource.primaryUrl);
    for (const mirror of resource.mirrors ?? []) {
      if (!isAbsoluteHttpUrl(mirror)) throw new Error(`Espejo no absoluto en ${resource.id}.`);
    }
    if (resource.localFile) {
      if (resource.preservationStatus !== "local-redistributable") throw new Error(`El adjunto ${resource.id} no está marcado como redistribuible.`);
      if (!resource.localFile.sha256 || !resource.localFile.licenseUrl || !resource.localFile.sourceUrl) throw new Error(`El adjunto ${resource.id} no tiene evidencia de licencia e integridad.`);
    }
  }

  const registeredOfficialUrls = new Set(libraryTopics.flatMap((topic) => [
    ...officialReferencesForCollection(topic.collectionId).map((reference) => reference.href),
    ...(additionalOfficialSources[topic.slug] ? [additionalOfficialSources[topic.slug].url] : []),
  ]));
  const supplementalUrls = new Set<string>();
  for (const resource of supplementalLibraryResources) {
    if (resourceIds.has(resource.id)) throw new Error(`ID de recurso complementario duplicado: ${resource.id}`);
    resourceIds.add(resource.id);
    if (!topicSlugs.has(resource.topicSlug)) throw new Error(`El recurso complementario ${resource.id} apunta a un tema inexistente.`);
    if (libraryTopicBySlug.get(resource.topicSlug)?.sourceTopicSlug) throw new Error(`El recurso complementario ${resource.id} invade un tema del Catálogo de referencia.`);
    if (!isAbsoluteHttpUrl(resource.primaryUrl)) throw new Error(`URL principal no absoluta en ${resource.id}.`);
    if (supplementalUrls.has(resource.primaryUrl)) throw new Error(`URL complementaria duplicada: ${resource.primaryUrl}`);
    if (importedUrls.has(resource.primaryUrl) || registeredOfficialUrls.has(resource.primaryUrl)) throw new Error(`El recurso complementario ${resource.id} duplica una fuente ya registrada.`);
    supplementalUrls.add(resource.primaryUrl);
    if (resource.localFile) throw new Error(`El recurso complementario ${resource.id} no puede declarar un adjunto sin auditoría de licencia.`);
  }

  const topicsWithoutReferenceCatalog = libraryTopics.filter((topic) => !topic.sourceTopicSlug);
  if (topicsWithoutReferenceCatalog.length !== 29) throw new Error(`La curaduría complementaria debe cubrir 29 temas; contiene ${topicsWithoutReferenceCatalog.length}.`);
  for (const topic of topicsWithoutReferenceCatalog) {
    const resources = supplementalResourcesForTopic(topic.slug);
    const levels = new Set(resources.map((resource) => resource.level));
    if (resources.length < 3 || !levels.has("beginner") || !levels.has("intermediate") || !levels.has("advanced")) {
      throw new Error(`La biblioteca complementaria ${topic.slug} no cubre los niveles principiante, intermedio y avanzado.`);
    }
  }

  const identitiesByUrl = new Map<string, Set<string>>();
  for (const topic of libraryTopics) {
    for (const resource of allResourcesForTopic(topic.slug)) {
      const identities = identitiesByUrl.get(resource.primaryUrl) ?? new Set<string>();
      identities.add(resource.id);
      identitiesByUrl.set(resource.primaryUrl, identities);
    }
  }
  const conflictingIdentities = [...identitiesByUrl.entries()]
    .filter(([, identities]) => identities.size > 1)
    .map(([url, identities]) => `${url} (${[...identities].join(", ")})`);
  if (conflictingIdentities.length > 0) {
    throw new Error(`Una misma URL representa identidades bibliográficas distintas: ${conflictingIdentities.join("; ")}.`);
  }
}

validateProfessionalLibrary();
