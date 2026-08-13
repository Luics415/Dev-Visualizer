import { collectionManifest } from "./collectionManifest";
import { phase1Collections } from "./phase1Collections";
import type { ExpandedCollectionDefinition } from "./expandedCollectionTypes";

export const expandedCollections: readonly ExpandedCollectionDefinition[] = [
  ...phase1Collections,
];

export const expandedCollectionById = new Map(expandedCollections.map((collection) => [collection.id, collection]));

export type ExpandedRoute = {
  slug: string;
  kind: "collection" | "action";
  collection: ExpandedCollectionDefinition;
};

export const expandedRoutes: readonly ExpandedRoute[] = expandedCollections.flatMap((collection) => {
  const manifest = collectionManifest.find((entry) => entry.id === collection.id);
  if (!manifest) throw new Error(`La colección ${collection.id} no existe en el manifiesto.`);
  return [
    { slug: manifest.href.slice(1), kind: "collection" as const, collection },
    { slug: manifest.actionHref.slice(1), kind: "action" as const, collection },
  ];
});

export const expandedRouteBySlug = new Map(expandedRoutes.map((route) => [route.slug, route]));

for (const collection of expandedCollections) {
  if (collection.chapters.length === 0 || collection.concepts.length === 0) throw new Error(`La colección ${collection.id} no tiene capítulos o conceptos.`);
  if (collection.caseStudy.steps.length === 0) throw new Error(`La colección ${collection.id} no tiene caso integrado.`);
  if (collection.concepts.some((concept) => !concept.scene || !concept.section.trim())) throw new Error(`La colección ${collection.id} contiene un concepto sin escena o capítulo.`);
}
