export type QuizDifficulty = "básico" | "intermedio" | "avanzado";

export type QuizQuestion = {
  id: string;
  collectionId: string;
  question: string;
  options: readonly [string, string, string, string];
  correctAnswerIndex: 0 | 1 | 2 | 3;
  explanation: string;
  topic: string;
  difficulty: QuizDifficulty;
};

export type QuizBadge = {
  collectionId: string;
  collectionTitle: string;
  unlockedAt: string;
  score: number;
  totalQuestions: number;
  percentage: number;
};

export type QuizResult = {
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean; // >= 70% (11/15)
  badgeAwarded: boolean;
};
