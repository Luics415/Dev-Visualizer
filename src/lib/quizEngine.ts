import type { QuizQuestion, QuizBadge, QuizResult } from "@/data/quizTypes";

export const QUIZ_POOL_SIZE = 50;
export const QUIZ_SAMPLE_SIZE = 15;
export const QUIZ_PASS_PERCENTAGE = 70;
export const QUIZ_STORAGE_KEY = "dev-visualizer-quiz-badges";
export const BADGES_CHANGE_EVENT = "dev_visualizer_badges_change";

export function shuffleQuestionOptions(question: QuizQuestion): QuizQuestion {
  const items = question.options.map((text, idx) => ({
    text,
    isCorrect: idx === question.correctAnswerIndex,
  }));

  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = items[i]!;
    items[i] = items[j]!;
    items[j] = temp;
  }

  const shuffledOptions = items.map((item) => item.text) as unknown as [string, string, string, string];
  const foundIndex = items.findIndex((item) => item.isCorrect);
  const newCorrectIndex = (foundIndex >= 0 && foundIndex <= 3 ? foundIndex : 0) as 0 | 1 | 2 | 3;

  return {
    ...question,
    options: shuffledOptions,
    correctAnswerIndex: newCorrectIndex,
  };
}

export function sampleRandomQuizQuestions(
  pool: readonly QuizQuestion[],
  count: number = QUIZ_SAMPLE_SIZE
): QuizQuestion[] {
  if (!pool || pool.length === 0) return [];
  const seenIds = new Set<string>();
  const seenQuestions = new Set<string>();
  const uniquePool: QuizQuestion[] = [];

  for (const item of pool) {
    if (!seenIds.has(item.id) && !seenQuestions.has(item.question)) {
      seenIds.add(item.id);
      seenQuestions.add(item.question);
      uniquePool.push(item);
    }
  }

  for (let i = uniquePool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = uniquePool[i]!;
    uniquePool[i] = uniquePool[j]!;
    uniquePool[j] = temp;
  }

  const selected = uniquePool.slice(0, Math.min(count, uniquePool.length));
  return selected.map(shuffleQuestionOptions);
}

export function evaluateQuiz(
  questions: readonly QuizQuestion[],
  answers: Record<number, number>
): QuizResult {
  const totalQuestions = questions.length;
  if (totalQuestions === 0) {
    return { score: 0, totalQuestions: 0, percentage: 0, passed: false, badgeAwarded: false };
  }

  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] === q.correctAnswerIndex) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= QUIZ_PASS_PERCENTAGE;

  return {
    score: correctCount,
    totalQuestions,
    percentage,
    passed,
    badgeAwarded: passed,
  };
}

export function getUnlockedBadges(): Record<string, QuizBadge> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, QuizBadge>;
  } catch {
    return {};
  }
}

export function isBadgeUnlocked(collectionId: string): boolean {
  const badges = getUnlockedBadges();
  return Boolean(badges[collectionId]);
}

export function saveQuizBadge(badge: QuizBadge): void {
  if (typeof window === "undefined") return;
  try {
    const badges = getUnlockedBadges();
    const prev = badges[badge.collectionId];
    if (!prev || badge.score >= prev.score) {
      badges[badge.collectionId] = badge;
      localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(badges));
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new Event(BADGES_CHANGE_EVENT));
    }
  } catch {
  }
}

export function replaceUnlockedBadges(badges: Record<string, QuizBadge>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(badges));
    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event(BADGES_CHANGE_EVENT));
  } catch {
  }
}

export function clearUnlockedBadges(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(QUIZ_STORAGE_KEY);
    window.dispatchEvent(new Event("storage"));
    window.dispatchEvent(new Event(BADGES_CHANGE_EVENT));
  } catch {
  }
}
