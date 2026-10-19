"use client";

import { useState, useEffect, useMemo, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import type { QuizQuestion, QuizResult } from "@/data/quizTypes";
import {
  sampleRandomQuizQuestions,
  evaluateQuiz,
  saveQuizBadge,
  isBadgeUnlocked,
  QUIZ_SAMPLE_SIZE,
  QUIZ_PASS_PERCENTAGE,
} from "@/lib/quizEngine";
import { QuizAnchorBadge } from "./QuizAnchorBadge";

type QuizRunnerProps = {
  collectionId: string;
  collectionTitle: string;
  collectionHref: string;
  allQuestions: readonly QuizQuestion[];
};

export function QuizRunner({
  collectionId,
  collectionTitle,
  collectionHref,
  allQuestions,
}: QuizRunnerProps) {
  // Muestrear 15 preguntas aleatorias por intento
  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    sampleRandomQuizQuestions(allQuestions, QUIZ_SAMPLE_SIZE)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const hasBadge = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      return () => window.removeEventListener("storage", onStoreChange);
    },
    () => isBadgeUnlocked(collectionId),
    () => false
  );

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedOption !== null;

  const handleSelectOption = useCallback((optionIndex: number) => {
    setSelectedOption((prevSelected) => {
      if (prevSelected !== null) return prevSelected;
      setAnswers((prev) => ({
        ...prev,
        [currentIndex]: optionIndex,
      }));
      return optionIndex;
    });
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 < questions.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedOption(answers[nextIndex] ?? null);
    } else {
      // Finalizar quiz y evaluar
      const evaluated = evaluateQuiz(questions, answers);
      setResult(evaluated);
      setIsCompleted(true);

      if (evaluated.passed) {
        saveQuizBadge({
          collectionId,
          collectionTitle,
          unlockedAt: new Date().toISOString(),
          score: evaluated.score,
          totalQuestions: evaluated.totalQuestions,
          percentage: evaluated.percentage,
        });
      }
    }
  }, [currentIndex, questions, answers, collectionId, collectionTitle]);

  const handleRestart = () => {
    const newSample = sampleRandomQuizQuestions(allQuestions, QUIZ_SAMPLE_SIZE);
    setQuestions(newSample);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setIsCompleted(false);
    setResult(null);
  };

  // Atajos de teclado para responder cómodamente
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCompleted || !currentQuestion) return;

      if (!isAnswered) {
        if (e.key === "1" || e.key.toLowerCase() === "a") handleSelectOption(0);
        else if (e.key === "2" || e.key.toLowerCase() === "b") handleSelectOption(1);
        else if (e.key === "3" || e.key.toLowerCase() === "c") handleSelectOption(2);
        else if (e.key === "4" || e.key.toLowerCase() === "d") handleSelectOption(3);
      } else {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnswered, isCompleted, currentQuestion, handleSelectOption, handleNext]);

  const progressPct = useMemo(() => {
    if (questions.length === 0) return 0;
    return Math.round(((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100);
  }, [currentIndex, isAnswered, questions.length]);

  if (questions.length === 0) {
    return (
      <div className="quiz-card quiz-card--loading">
        <p>Preparando preguntas didácticas para {collectionTitle}...</p>
      </div>
    );
  }

  if (isCompleted && result) {
    return (
      <div className="quiz-card quiz-card--finished" role="region" aria-label="Resultados del quiz">
        <header className="quiz-finished__header">
          <span className="quiz-finished__badge-flag">
            {result.passed ? "🏆 Reto Superado" : "📚 Práctica Completada"}
          </span>
          <h2>{result.passed ? "¡Excelente dominio técnico!" : "Continúa practicando"}</h2>
          <p>
            {result.passed
              ? `Has superado con éxito la evaluación técnica de ${collectionTitle}.`
              : `Has completado el cuestionario. Para desbloquear la insignia de la colección necesitas al menos el ${QUIZ_PASS_PERCENTAGE}% (11 de 15).`}
          </p>
        </header>

        <div className="quiz-score-meter">
          <div className="quiz-score-meter__circle">
            <strong>{result.percentage}%</strong>
            <small>{result.score} de {result.totalQuestions}</small>
          </div>
          <div className="quiz-score-meter__details">
            <div className="quiz-stat">
              <span>Aciertos</span>
              <b>{result.score}</b>
            </div>
            <div className="quiz-stat">
              <span>Errores</span>
              <b>{result.totalQuestions - result.score}</b>
            </div>
            <div className="quiz-stat">
              <span>Estado</span>
              <b style={{ color: result.passed ? "var(--green)" : "var(--rose)" }}>
                {result.passed ? "Aprobado ✓" : "Repasar"}
              </b>
            </div>
          </div>
        </div>

        {result.passed ? (
          <QuizAnchorBadge
            collectionTitle={collectionTitle}
            score={result.score}
            totalQuestions={result.totalQuestions}
            percentage={result.percentage}
          />
        ) : null}

        <div className="quiz-finished__actions">
          <button type="button" className="quiz-btn quiz-btn--primary" onClick={handleRestart}>
            Intentar con otras 15 preguntas aleatorias ↺
          </button>
          <Link href={collectionHref} className="quiz-btn quiz-btn--outline">
            Volver a {collectionTitle} ➔
          </Link>
        </div>
      </div>
    );
  }

  const optionLetters = ["A", "B", "C", "D"] as const;

  return (
    <div className="quiz-card" role="region" aria-label={`Pregunta ${currentIndex + 1} de ${questions.length}`}>
      <header className="quiz-header">
        <div className="quiz-header__meta">
          <span className="quiz-header__count">
            Pregunta <b>{currentIndex + 1}</b> de {questions.length}
          </span>
          <span className="quiz-header__topic">{currentQuestion.topic}</span>
          <span className={`quiz-header__diff quiz-header__diff--${currentQuestion.difficulty}`}>
            {currentQuestion.difficulty}
          </span>
          {hasBadge ? (
            <span className="quiz-header__unlocked-badge" title="Insignia ya desbloqueada en este navegador">
              🎖️ Insignia conseguida
            </span>
          ) : null}
        </div>

        <div className="quiz-progress-bar" aria-hidden="true">
          <div className="quiz-progress-bar__fill" style={{ width: `${progressPct}%` }} />
        </div>
      </header>

      <div className="quiz-body">
        <h3 className="quiz-question-text">{currentQuestion.question}</h3>

        <div className="quiz-options-grid" role="radiogroup" aria-label="Opciones de respuesta">
          {currentQuestion.options.map((optionText, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = currentQuestion.correctAnswerIndex === idx;

            let optionClassName = "quiz-option";
            if (isAnswered) {
              if (isCorrect) {
                optionClassName += " quiz-option--correct";
              } else if (isSelected) {
                optionClassName += " quiz-option--wrong";
              } else {
                optionClassName += " quiz-option--dimmed";
              }
            } else if (isSelected) {
              optionClassName += " quiz-option--selected";
            }

            return (
              <button
                key={`${currentQuestion.id}-opt-${idx}`}
                type="button"
                className={optionClassName}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                aria-pressed={isSelected}
              >
                <span className="quiz-option__letter">{optionLetters[idx]}</span>
                <span className="quiz-option__text">{optionText}</span>
                {isAnswered && isCorrect ? (
                  <span className="quiz-option__icon quiz-option__icon--correct" aria-label="Correcto">✓</span>
                ) : null}
                {isAnswered && isSelected && !isCorrect ? (
                  <span className="quiz-option__icon quiz-option__icon--wrong" aria-label="Incorrecto">×</span>
                ) : null}
              </button>
            );
          })}
        </div>

        {isAnswered ? (
          <aside className="quiz-explanation" role="alert">
            <header className="quiz-explanation__header">
              <strong>
                {selectedOption === currentQuestion.correctAnswerIndex ? "¡Correcto! ✓" : "Explicación Técnica"}
              </strong>
            </header>
            <p>{currentQuestion.explanation}</p>
          </aside>
        ) : (
          <p className="quiz-helper-text">
            Selecciona una opción o presiona las teclas 1, 2, 3 o 4 (A, B, C, D) en tu teclado.
          </p>
        )}
      </div>

      <footer className="quiz-footer">
        <button
          type="button"
          className="quiz-btn quiz-btn--next"
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {currentIndex + 1 === questions.length ? "Ver resultados finales ➔" : "Siguiente pregunta ➔"}
        </button>
      </footer>
    </div>
  );
}
