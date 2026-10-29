import type { QuizQuestion, QuizBadge, QuizResult } from "@/data/quizTypes";

export const QUIZ_SAMPLE_SIZE = 15;
export const QUIZ_PASS_PERCENTAGE = 70; // 70% de aciertos para superar el reto
export const QUIZ_STORAGE_KEY = "dev-visualizer-quiz-badges";

/**
 * Baraja aleatoriamente las 4 opciones de una pregunta utilizando Fisher-Yates
 * y reasigna `correctAnswerIndex` de manera estricta y matemáticamente uniforme,
 * eliminando cualquier sesgo hacia una posición fija (como la segunda opción).
 */
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

/**
 * Selecciona aleatoriamente N preguntas del banco general usando el algoritmo Fisher-Yates
 * y baraja independientemente las 4 opciones de cada una para que cada intento ofrezca
 * una combinación fresca y una distribución equilibrada de respuestas (A, B, C, D).
 */
export function sampleRandomQuizQuestions(
  pool: readonly QuizQuestion[],
  count: number = QUIZ_SAMPLE_SIZE
): QuizQuestion[] {
  if (!pool || pool.length === 0) return [];
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = temp;
  }
  const selected = copy.slice(0, Math.min(count, copy.length));
  return selected.map(shuffleQuestionOptions);
}

/**
 * Evalúa las respuestas del usuario contra las preguntas del cuestionario.
 */
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

/**
 * Obtiene todas las insignias desbloqueadas guardadas en el almacenamiento local del cliente.
 */
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

/**
 * Verifica si una colección en particular ya tiene insignia desbloqueada.
 */
export function isBadgeUnlocked(collectionId: string): boolean {
  const badges = getUnlockedBadges();
  return Boolean(badges[collectionId]);
}

/**
 * Guarda una nueva insignia desbloqueada en localStorage sin requerir inicio de sesión ni base de datos externa.
 */
export function saveQuizBadge(badge: QuizBadge): void {
  if (typeof window === "undefined") return;
  try {
    const badges = getUnlockedBadges();
    // Guardar si no existe o si la puntuación actual es mayor
    const prev = badges[badge.collectionId];
    if (!prev || badge.score >= prev.score) {
      badges[badge.collectionId] = badge;
      localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(badges));
      window.dispatchEvent(new Event("storage"));
    }
  } catch {
    // Almacenamiento local bloqueado o cuota excedida
  }
}
