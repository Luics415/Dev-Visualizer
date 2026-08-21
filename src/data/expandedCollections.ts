import { collectionManifest } from "./collectionManifest";
import { pythonCollection } from "./pythonCollection";
import { mediapipeCollection } from "./mediapipeCollection";
import { jsonCollection, xmlCollection, xsdCollection } from "./structuredCollections";
import { phase1Collections } from "./phase1Collections";
import { cFamilyCollections } from "./cFamilyCollections";
import { dotnetCollections } from "./dotnetCollections";
import { webAutomationCollections } from "./webAutomationCollections";
import type { ExpandedCollectionDefinition } from "./expandedCollectionTypes";

export const expandedCollections: readonly ExpandedCollectionDefinition[] = [
  pythonCollection,
  mediapipeCollection,
  xmlCollection,
  xsdCollection,
  jsonCollection,
  ...phase1Collections,
  ...cFamilyCollections,
  ...dotnetCollections,
  ...webAutomationCollections,
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
  const { caseStudy } = collection;
  if (!caseStudy.title.trim() || !caseStudy.description.trim() || !caseStudy.footer.trim() || caseStudy.steps.length === 0) {
    throw new Error(`La colección ${collection.id} no tiene un caso integrado completo.`);
  }
  for (const [index, caseStep] of caseStudy.steps.entries()) {
    if (
      !caseStep.title.trim()
      || !caseStep.subtitle.trim()
      || !caseStep.code.trim()
      || caseStep.visible.length === 0
      || caseStep.internal.length === 0
      || !caseStep.result.trim()
      || !caseStep.note.trim()
    ) {
      throw new Error(`El caso ${collection.id} tiene una etapa incompleta en la posición ${index + 1}.`);
    }
  }
  if (!caseStudy.steps.some((caseStep) => caseStep.state === "warning")) throw new Error(`El caso ${collection.id} no muestra un fallo.`);
  if (!caseStudy.steps.some((caseStep) => caseStep.state === "recovery")) throw new Error(`El caso ${collection.id} no muestra recuperación.`);
  if (collection.concepts.some((concept) => !concept.scene || !concept.section.trim())) throw new Error(`La colección ${collection.id} contiene un concepto sin escena o capítulo.`);
}
