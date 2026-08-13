export type SceneVariant =
  | "pipeline"
  | "layers"
  | "compare"
  | "timeline"
  | "tree"
  | "gate"
  | "stack"
  | "orbit"
  | "matrix"
  | "browser"
  | "flow"
  | "cards"
  | "terminal"
  | "document"
  | "anatomy"
  | "request"
  | "queue"
  | "cache"
  | "state-machine"
  | "network"
  | "filesystem"
  | "compiler"
  | "container"
  | "database"
  | "scheduler"
  | "signal"
  | "lifecycle"
  | "trace"
  | "memory-map"
  | "runtime-dispatch"
  | "parallel-grid"
  | "workflow"
  | "interface-flow"
  | "literate-weave"
  | "signal-matrix"
  | "relation-loom"
  | "concept-constellation"
  | "assurance-rack"
  | "event-fabric"
  | "artifact-passport";

export type StudyScene = {
  variant: SceneVariant;
  code: string;
  nodes: readonly string[];
  outcome: string;
  caption: string;
};

export type StudyConcept = {
  title: string;
  description: string;
  section: string;
  family: string;
  layout: "standard" | "wide" | "compact" | "feature";
  scene?: StudyScene;
};
