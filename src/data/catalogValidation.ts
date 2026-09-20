import { canonicalConceptCollections, canonicalConceptCount } from "./canonicalConceptCollections";
import { collectionManifest } from "./collectionManifest";
import { officialReferencesForConcept } from "./officialReferences";
import { createStudyScene } from "./atlasConceptFactory";
import { slugify } from "@/lib/slugify";

export type CatalogValidationReport = {
  collections: number;
  concepts: number;
  sourcedConcepts: number;
  unresolvedReferences: number;
};

function validateCatalog(): CatalogValidationReport {
  if (canonicalConceptCollections.size !== collectionManifest.length) {
    throw new Error(`El registro canónico contiene ${canonicalConceptCollections.size}/${collectionManifest.length} colecciones.`);
  }

  let sourcedConcepts = 0;
  let unresolvedReferences = 0;

  for (const collection of collectionManifest) {
    const concepts = canonicalConceptCollections.get(collection.id);
    if (!concepts?.length) throw new Error(`La colección ${collection.id} no tiene conceptos canónicos.`);
    for (const [conceptIndex, concept] of concepts.entries()) {
      const identity = `${collection.id}:${String(conceptIndex + 1).padStart(3, "0")}:${slugify(concept.title)}`;
      if (!concept.section.trim()) throw new Error(`El concepto ${identity} no tiene capítulo.`);
      const scene = concept.scene ?? createStudyScene(concept.title, concept.description, concept.section);
      if (!scene.variant || scene.nodes.length === 0) throw new Error(`El concepto ${identity} no tiene una escena efectiva.`);

      const references = officialReferencesForConcept(collection.id, concept);
      if (references.length < 2) {
        unresolvedReferences += 1;
        continue;
      }
      sourcedConcepts += 1;
    }
  }

  if (canonicalConceptCount !== 3697) throw new Error(`Se esperaban 3,697 conceptos canónicos; existen ${canonicalConceptCount}.`);
  if (sourcedConcepts !== canonicalConceptCount || unresolvedReferences > 0) {
    throw new Error(`Cobertura de fuentes incompleta: ${sourcedConcepts}/${canonicalConceptCount}; conceptos con menos de dos referencias: ${unresolvedReferences}.`);
  }

  return {
    collections: canonicalConceptCollections.size,
    concepts: canonicalConceptCount,
    sourcedConcepts,
    unresolvedReferences,
  };
}

export const catalogValidationReport = validateCatalog();
