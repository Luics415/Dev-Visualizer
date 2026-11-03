"use client";

import { useState } from "react";
import Link from "next/link";

interface TourStep {
  title: string;
  description: string;
  tag: string;
  linkHref?: string;
  linkLabel?: string;
}

const TOUR_STEPS: readonly TourStep[] = [
  {
    title: "Bienvenido a Dev Visualizer",
    description:
      "Comprende arquitectura de software, runtimes y algoritmos viéndolos ejecutarse en tiempo real con animaciones deterministas que puedes pausar, retroceder e inspeccionar variable por variable.",
    tag: "INTRODUCCIÓN",
  },
  {
    title: "Consola de Ejecución Observable",
    description:
      "Explora simulaciones interactivas de código y memoria: particionamiento de Quicksort, la traza del Call Stack y colas de Microtareas en V8, y curvas de telemetría de latencia en sistemas distribuidos.",
    tag: "SIMULADORES EN VIVO",
    linkHref: "#que-se-aprende",
    linkLabel: "Ir al simulador",
  },
  {
    title: "73 Colecciones & Casos «En Acción»",
    description:
      "Cada una de las 73 colecciones teóricas conecta con un escenario de producción real: inyección de anomalías de red, saturación de conexiones y patrones de mitigación resiliente.",
    tag: "CASOS REALES",
    linkHref: "/colecciones",
    linkLabel: "Ver catálogo de 73 temas",
  },
  {
    title: "Quizzes Técnicos & Insignia de Ancla",
    description:
      "Pon a prueba tus modelos mentales con preguntas de arquitectura de nivel senior. Responde los quizzes de cada tecnología y desbloquea la Insignia de Ancla de Dev Visualizer.",
    tag: "EVALUACIÓN SENIOR",
    linkHref: "/javascript/quiz",
    linkLabel: "Probar quiz de JavaScript",
  },
];

export function FloatingWelcomeCard() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) {
    return (
      <button
        type="button"
        className="floating-tour-reopen-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Reabrir tour guiado de bienvenida"
      >
        <span className="floating-tour-reopen-icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </span>
        <span>Tour de Bienvenida</span>
      </button>
    );
  }

  const step = TOUR_STEPS[currentStep];
  const isLast = currentStep === TOUR_STEPS.length - 1;

  const handleNext = () => {
    if (isLast) {
      setIsOpen(false);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  return (
    <div
      className="floating-welcome-card"
      role="region"
      aria-label="Tour guiado de bienvenida a Dev Visualizer"
    >
      {/* Cabecera del Tour */}
      <div className="floating-welcome-card__header">
        <div className="floating-welcome-card__icon-and-dots">
          <span className="floating-welcome-card__icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </span>
          <div className="floating-welcome-card__dots" aria-label={`Paso ${currentStep + 1} de ${TOUR_STEPS.length}`}>
            {TOUR_STEPS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`floating-welcome-dot ${idx === currentStep ? "floating-welcome-dot--active" : ""}`}
                onClick={() => setCurrentStep(idx)}
                aria-label={`Ir al paso ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="floating-welcome-card__close-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar tour de bienvenida"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Contenido del Paso */}
      <div className="floating-welcome-card__body">
        <span className="floating-welcome-card__tag">{step.tag}</span>
        <h3 className="floating-welcome-card__title">{step.title}</h3>
        <p className="floating-welcome-card__text">{step.description}</p>
        {step.linkHref && step.linkLabel && (
          <div className="floating-welcome-card__link-wrap">
            <Link
              href={step.linkHref}
              className="floating-welcome-card__action-link"
              onClick={() => setIsOpen(false)}
            >
              <span>{step.linkLabel}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>

      {/* Pie con Controles Siguiente / Omitir */}
      <div className="floating-welcome-card__footer">
        <button
          type="button"
          className="floating-welcome-card__skip-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Omitir el tour de bienvenida"
        >
          Omitir tour
        </button>

        <div className="floating-welcome-card__nav-group">
          {currentStep > 0 && (
            <button
              type="button"
              className="floating-welcome-card__prev-btn"
              onClick={handlePrev}
              aria-label="Paso anterior del tour"
            >
              ←
            </button>
          )}
          <button
            type="button"
            className="floating-welcome-card__next-btn"
            onClick={handleNext}
            aria-label={isLast ? "Finalizar tour" : "Siguiente paso del tour"}
          >
            {isLast ? "Comenzar →" : "Siguiente →"}
          </button>
        </div>
      </div>
    </div>
  );
}
