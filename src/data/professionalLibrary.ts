import rawSnapshot from "./libraryResources.snapshot.json";
import { collectionManifest } from "./collectionManifest";
import { officialReferencesForCollection } from "./officialReferences";
import { additionalOfficialSources, libraryTopicBySlug, libraryTopics } from "./libraryTopics";
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
export const sourceTopicCount = 42;
export const sourceResourceCount = 179;
export const libraryTopicCount = libraryTopics.length;

const referenceKindMap = {
  standard: "specification",
  specification: "specification",
  "official-docs": "official-docs",
  "official-api": "official-docs",
  "primary-manual": "reference",
  "archival-primary": "reference",
} as const satisfies Record<string, LibraryResourceKind>;

export function officialLibraryResourcesForTopic(topic: LibraryTopic): readonly LibraryResource[] {
  const fromCollection = officialReferencesForCollection(topic.collectionId).map<LibraryResource>((reference) => ({
    id: `official--${topic.slug}--${reference.id}`,
    topicSlug: topic.slug,
    title: reference.label,
    author: reference.authority,
    authority: reference.authority,
    formats: ["HTML"],
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
  const fallback = seed ? [{
    id: `official--${topic.slug}--primary`,
    topicSlug: topic.slug,
    title: seed.title,
    author: seed.authority,
    authority: seed.authority,
    formats: ["HTML"] as readonly LibraryFormat[],
    kind: seed.kind,
    level: "general" as const,
    primaryUrl: seed.url,
    version: seed.version,
    reviewedAt: librarySourceSnapshot.importedAt,
    preservationStatus: "official-external" as const,
    licenseStatus: "external-only" as const,
  }] : [];

  return [...new Map([...fromCollection, ...fallback].map((resource) => [resource.primaryUrl, resource])).values()];
}

export function importedResourcesForTopic(topicSlug: string) {
  return importedLibraryResources.filter((resource) => resource.topicSlug === topicSlug);
}

export function allResourcesForTopic(topicSlug: string) {
  const topic = libraryTopicBySlug.get(topicSlug);
  if (!topic) return [];
  const combined = [...officialLibraryResourcesForTopic(topic), ...importedResourcesForTopic(topicSlug)];
  return [...new Map(combined.map((resource) => [resource.primaryUrl, resource])).values()];
}

export type LibraryIndexEntry = LibraryTopic & {
  resourceCount: number;
  officialCount: number;
  importedCount: number;
  formats: readonly LibraryFormat[];
  levels: readonly LibraryResourceLevel[];
  preservationStatuses: readonly LibraryPreservationStatus[];
  searchText: string;
};

export const libraryIndexEntries: readonly LibraryIndexEntry[] = libraryTopics.map((topic) => {
  const resources = allResourcesForTopic(topic.slug);
  const importedCount = importedResourcesForTopic(topic.slug).length;
  return {
    ...topic,
    resourceCount: resources.length,
    officialCount: resources.filter((resource) => resource.kind === "official-docs" || resource.kind === "specification" || resource.kind === "reference").length,
    importedCount,
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

export const totalLibraryResourceCount = libraryIndexEntries.reduce((total, topic) => total + topic.resourceCount, 0);

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
  for (const resource of importedLibraryResources) {
    if (resourceIds.has(resource.id)) throw new Error(`ID de recurso duplicado: ${resource.id}`);
    resourceIds.add(resource.id);
    if (!topicSlugs.has(resource.topicSlug)) throw new Error(`El recurso ${resource.id} apunta a un tema inexistente.`);
    if (!resource.sourceTopicSlug || !sourceTopicSlugs.has(resource.sourceTopicSlug)) throw new Error(`El recurso ${resource.id} perdió su tema de procedencia.`);
    if (!isAbsoluteHttpUrl(resource.primaryUrl)) throw new Error(`URL principal no absoluta en ${resource.id}.`);
    for (const mirror of resource.mirrors ?? []) {
      if (!isAbsoluteHttpUrl(mirror)) throw new Error(`Espejo no absoluto en ${resource.id}.`);
    }
    if (resource.localFile) {
      if (resource.preservationStatus !== "local-redistributable") throw new Error(`El adjunto ${resource.id} no está marcado como redistribuible.`);
      if (!resource.localFile.sha256 || !resource.localFile.licenseUrl || !resource.localFile.sourceUrl) throw new Error(`El adjunto ${resource.id} no tiene evidencia de licencia e integridad.`);
    }
  }
}

validateProfessionalLibrary();
