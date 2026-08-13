import { createConceptCollection } from "./atlasConceptFactory";
import type { ConceptChapterSeed, ConceptSeed } from "./atlasConceptFactory";
import type { CollectionPrimer } from "./collectionPrimers";
import type { ExpandedCollectionDefinition, IntegratedCaseDefinition, IntegratedCaseStep, OfficialSource } from "./expandedCollectionTypes";

export function concepts(...items: readonly string[]): readonly ConceptSeed[] {
  return items.map((item) => {
    const separator = item.indexOf("::");
    if (separator < 0) return [item, `Explica ${item} mediante su flujo, estado interno y resultado observable.`] as const;
    return [item.slice(0, separator), item.slice(separator + 2)] as const;
  });
}

export function chapter(section: string, ...items: readonly string[]): ConceptChapterSeed {
  return { section, concepts: concepts(...items) };
}

export function primer(
  name: string,
  definition: string,
  purpose: string,
  mentalModel: string,
  useCases: readonly string[],
  boundary: string,
  visual: CollectionPrimer["visual"],
): CollectionPrimer {
  return { name, definition, purpose, mentalModel, useCases, boundary, visual };
}

export function step(
  title: string,
  subtitle: string,
  code: string,
  visible: readonly string[],
  internal: readonly string[],
  result: string,
  note: string,
  state: IntegratedCaseStep["state"] = "normal",
): IntegratedCaseStep {
  return { title, subtitle, code, visible, internal, result, note, state };
}

type CollectionInput = Omit<ExpandedCollectionDefinition, "concepts">;

export function defineExpandedCollection(input: CollectionInput): ExpandedCollectionDefinition {
  return { ...input, concepts: createConceptCollection(input.chapters) };
}

export function source(label: string, href: string): OfficialSource {
  return { label, href };
}

export function caseStudy(
  title: string,
  eyebrow: string,
  description: string,
  footer: string,
  steps: readonly IntegratedCaseStep[],
): IntegratedCaseDefinition {
  return { title, eyebrow, description, footer, steps };
}
