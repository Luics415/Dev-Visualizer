export type NewLearningExtensionChapter = {
  section: string;
  concepts: readonly string[];
};

export type NewLearningExtensionRegistry = Readonly<Record<string, readonly NewLearningExtensionChapter[]>>;
