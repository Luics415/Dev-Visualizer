import { canonicalConceptCollections, canonicalConceptCount } from "./canonicalConceptCollections";
import { collectionManifest } from "./collectionManifest";
import { officialReferencesForConcept } from "./officialReferences";
import { createStudyScene, hasSemanticSceneMatch } from "./atlasConceptFactory";
import { NEW_LEARNING_ACTION_SCENE_IDS } from "./newLearningActionScenes";
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
  const conceptsWithoutSemanticScene: string[] = [];
  const deepCurriculumIds = new Set<string>(NEW_LEARNING_ACTION_SCENE_IDS);

  for (const collection of collectionManifest) {
    const concepts = canonicalConceptCollections.get(collection.id);
    if (!concepts?.length) throw new Error(`La colección ${collection.id} no tiene conceptos canónicos.`);
    const conceptTitles = new Set<string>();
    const sceneVariants = new Set<string>();
    const descriptionSkeletonsBySection = new Map<string, Map<string, number>>();
    let repeatedVariantRun = 0;
    let previousVariant = "";
    for (const [conceptIndex, concept] of concepts.entries()) {
      const identity = `${collection.id}:${String(conceptIndex + 1).padStart(3, "0")}:${slugify(concept.title)}`;
      if (!concept.section.trim()) throw new Error(`El concepto ${identity} no tiene capítulo.`);
      const normalizedTitle = slugify(concept.title);
      if (deepCurriculumIds.has(collection.id) && conceptTitles.has(normalizedTitle)) throw new Error(`La colección ${collection.id} repite el concepto ${concept.title}.`);
      if (deepCurriculumIds.has(collection.id) && concept.description.trim().length < 80) {
        throw new Error(`El concepto ${identity} necesita una explicación específica de al menos 80 caracteres.`);
      }
      if (deepCurriculumIds.has(collection.id)) {
        const skeleton = slugify(concept.description)
          .replaceAll(slugify(concept.title), "concepto")
          .replaceAll(slugify(concept.section), "capitulo")
          .replaceAll(slugify(collection.label), "tecnologia")
          .replaceAll(/\d+/g, "numero");
        const sectionSkeletons = descriptionSkeletonsBySection.get(concept.section) ?? new Map<string, number>();
        sectionSkeletons.set(skeleton, (sectionSkeletons.get(skeleton) ?? 0) + 1);
        descriptionSkeletonsBySection.set(concept.section, sectionSkeletons);
      }
      if (deepCurriculumIds.has(collection.id) && !hasSemanticSceneMatch(concept.title, concept.description, concept.section)) {
        conceptsWithoutSemanticScene.push(identity);
      }
      conceptTitles.add(normalizedTitle);
      const scene = concept.scene ?? createStudyScene(concept.title, concept.description, concept.section);
      if (!scene.variant || scene.nodes.length === 0) throw new Error(`El concepto ${identity} no tiene una escena efectiva.`);
      sceneVariants.add(scene.variant);
      repeatedVariantRun = scene.variant === previousVariant ? repeatedVariantRun + 1 : 1;
      previousVariant = scene.variant;
      if (deepCurriculumIds.has(collection.id) && repeatedVariantRun > 2) throw new Error(`La colección ${collection.id} repite ${scene.variant} en más de dos escenas consecutivas.`);

      const references = officialReferencesForConcept(collection.id, concept);
      if (references.length < 2) {
        unresolvedReferences += 1;
        continue;
      }
      sourcedConcepts += 1;
    }

    if (deepCurriculumIds.has(collection.id)) {
      const sectionCount = new Set(concepts.map((concept) => concept.section)).size;
      if (concepts.length < 60 || sectionCount < 12) {
        throw new Error(`La colección ampliada ${collection.id} necesita al menos 60 conceptos distribuidos en 12 capítulos; contiene ${concepts.length}/${sectionCount}.`);
      }
      if (sceneVariants.size < 14) {
        throw new Error(`La colección ampliada ${collection.id} solo utiliza ${sceneVariants.size} familias visuales; se requieren al menos 14.`);
      }
      for (const [section, skeletons] of descriptionSkeletonsBySection) {
        const repeatedSkeleton = [...skeletons.entries()].sort((left, right) => right[1] - left[1])[0];
        if (repeatedSkeleton && repeatedSkeleton[1] > 2) {
          throw new Error(`La colección ampliada ${collection.id} repite una misma plantilla descriptiva ${repeatedSkeleton[1]} veces dentro de ${section}.`);
        }
      }
    }
  }

  if (conceptsWithoutSemanticScene.length > 0) {
    throw new Error(`${conceptsWithoutSemanticScene.length} conceptos ampliados no tienen una familia visual vinculada a su mecanismo: ${conceptsWithoutSemanticScene.slice(0, 20).join(", ")}.`);
  }
  if (canonicalConceptCount < 6881) throw new Error(`El catálogo perdió conceptos respecto de la base validada: existen ${canonicalConceptCount}.`);
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
