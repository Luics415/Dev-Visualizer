export const NEW_LEARNING_ACTION_SCENE_IDS = [
  "programming-fundamentals",
  "algorithms",
  "mathematics",
  "methodologies",
  "scratch",
  "ruby",
  "rust",
  "php",
  "haskell",
  "go",
  "kotlin",
  "java",
  "r",
  "assembly",
  "erlang",
  "lisp",
  "perl",
  "raku",
  "scala",
  "blockchain",
  "android",
  "qwik",
  "angular",
  "django",
  "sql",
  "nosql",
  "operating-systems",
  "artificial-intelligence",
  "latex",
  "subversion",
] as const;

export type NewLearningActionSceneId = (typeof NEW_LEARNING_ACTION_SCENE_IDS)[number];

const newLearningActionSceneIdSet = new Set<string>(NEW_LEARNING_ACTION_SCENE_IDS);

export function isNewLearningActionSceneId(id: string): id is NewLearningActionSceneId {
  return newLearningActionSceneIdSet.has(id);
}
