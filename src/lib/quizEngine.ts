import type { QuizQuestion, QuizBadge, QuizResult } from "@/data/quizTypes";

export const QUIZ_SAMPLE_SIZE = 15;
export const QUIZ_PASS_PERCENTAGE = 70; // 70% de aciertos para superar el reto
export const QUIZ_STORAGE_KEY = "dev-visualizer-quiz-badges";

/**
 * Selecciona aleatoriamente N preguntas del banco general usando el algoritmo Fisher-Yates
 * para que cada intento ofrezca una combinación fresca de desafíos.
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
  return copy.slice(0, Math.min(count, copy.length));
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
    }
  } catch {
    // Almacenamiento local bloqueado o cuota excedida
  }
}
