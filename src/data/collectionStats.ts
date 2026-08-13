import { javascriptConcepts } from "./javascriptConcepts";
import { typescriptConcepts } from "./typescriptConcepts";
import { reactConcepts } from "./reactConcepts";
import { reactNativeConcepts } from "./reactNativeConcepts";
import { stateManagementConcepts } from "./stateManagementConcepts";
import { backendConcepts } from "./backendConcepts";
import { databaseConcepts } from "./databaseConcepts";
import { htmlCssConcepts } from "./htmlCssConcepts";
import { linuxConcepts } from "./linuxConcepts";
import { awsConcepts } from "./awsConcepts";
import { deploymentConcepts } from "./deploymentConcepts";
import { nginxConcepts } from "./nginxConcepts";
import { dockerConcepts } from "./dockerConcepts";
import { firebaseConcepts } from "./firebaseConcepts";
import { debuggingConcepts } from "./debuggingConcepts";
import { expandedCollectionById } from "./expandedCollections";

export type CollectionStats = { concepts: number; chapters: number; stages: number };

function chaptersOf(items: readonly unknown[], fallback: number) {
  const sections = new Set(
    items.flatMap((item) => typeof item === "object" && item && "section" in item && typeof item.section === "string" ? [item.section] : []),
  );
  return sections.size || fallback;
}

const existingStats = new Map<string, CollectionStats>([
  ["javascript", { concepts: javascriptConcepts.length, chapters: chaptersOf(javascriptConcepts, 12), stages: 14 }],
  ["typescript", { concepts: typescriptConcepts.length, chapters: chaptersOf(typescriptConcepts, 7), stages: 14 }],
  ["react", { concepts: reactConcepts.length, chapters: chaptersOf(reactConcepts, 7), stages: 14 }],
  ["react-native", { concepts: reactNativeConcepts.length, chapters: chaptersOf(reactNativeConcepts, 7), stages: 14 }],
  ["state-management", { concepts: stateManagementConcepts.length, chapters: chaptersOf(stateManagementConcepts, 7), stages: 14 }],
  ["backend", { concepts: backendConcepts.length, chapters: chaptersOf(backendConcepts, 9), stages: 14 }],
  ["databases", { concepts: databaseConcepts.length, chapters: chaptersOf(databaseConcepts, 10), stages: 14 }],
  ["html-css", { concepts: htmlCssConcepts.length, chapters: chaptersOf(htmlCssConcepts, 7), stages: 8 }],
  ["linux", { concepts: linuxConcepts.length, chapters: chaptersOf(linuxConcepts, 10), stages: 14 }],
  ["aws", { concepts: awsConcepts.length, chapters: chaptersOf(awsConcepts, 12), stages: 14 }],
  ["deployment", { concepts: deploymentConcepts.length, chapters: chaptersOf(deploymentConcepts, 8), stages: 8 }],
  ["nginx", { concepts: nginxConcepts.length, chapters: chaptersOf(nginxConcepts, 12), stages: 14 }],
  ["docker", { concepts: dockerConcepts.length, chapters: chaptersOf(dockerConcepts, 13), stages: 14 }],
  ["firebase", { concepts: firebaseConcepts.length, chapters: chaptersOf(firebaseConcepts, 12), stages: 14 }],
  ["debugging", { concepts: debuggingConcepts.length, chapters: chaptersOf(debuggingConcepts, 12), stages: 14 }],
]);

export function statsForCollection(id: string): CollectionStats {
  const expanded = expandedCollectionById.get(id);
  if (expanded) {
    return {
      concepts: expanded.concepts.length,
      chapters: new Set(expanded.concepts.map((concept) => concept.section)).size,
      stages: expanded.caseStudy.steps.length,
    };
  }
  return existingStats.get(id) ?? { concepts: 0, chapters: 0, stages: 0 };
}
