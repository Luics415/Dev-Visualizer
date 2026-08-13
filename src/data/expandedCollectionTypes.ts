import type { CollectionPrimer } from "./collectionPrimers";
import type { ConceptChapterSeed } from "./atlasConceptFactory";
import type { StudyConcept } from "./conceptTypes";
import type { PracticalModule } from "./practicalDeepDives";

export type OfficialSource = {
  label: string;
  href: string;
};

export type IntegratedCaseStep = PracticalModule & {
  state?: "normal" | "warning" | "recovery";
};

export type IntegratedCaseDefinition = {
  title: string;
  eyebrow: string;
  description: string;
  footer: string;
  steps: readonly IntegratedCaseStep[];
};

export type ExpandedCollectionDefinition = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  counterLabel: string;
  footer: string;
  primer: CollectionPrimer;
  chapters: readonly ConceptChapterSeed[];
  concepts: readonly StudyConcept[];
  sources: readonly OfficialSource[];
  notice?: string;
  caseStudy: IntegratedCaseDefinition;
};
