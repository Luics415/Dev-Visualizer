"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

export type TourStep = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  actionText?: string;
  actionHref?: string;
  icon: ReactNode;
};

export const TOUR_STEPS: readonly TourStep[] = [
  {
    id: "philosophy",
    badge: "01 · Arquitectura Didáctica",
    title: "Bienvenido a Dev Visualizer",
    subtitle: "Modelos mentales rigurosos y ejecución observable",
    description:
      "Dev Visualizer es una enciclopedia interactiva concebida para erradicar la ambigüedad en el aprendizaje técnico. Cada tecnología se descompone en sus mecanismos internos elementales mediante animaciones vectoriales deterministas que hacen visible cómo operan la memoria, la pila de llamadas, los hilos y los protocolos en tiempo de ejecución.",
    metric: "7,410",
    metricLabel: "Conceptos técnicos catalogados sin ambigüedades",
    actionText: "Explorar catálogo completo",
    actionHref: "/colecciones",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "duality",
    badge: "02 · Dualidad de Aprendizaje",
    title: "Teoría Canónica y Casos en Acción",
    subtitle: "Rutas complementarias para dominar cada tecnología",
    description:
      "Cada colección del sistema dispone de dos dimensiones vinculadas: la ruta de fundamentos teóricos con animaciones conceptuales paso a paso, y el entorno de integración práctica ('En acción') que sitúa la tecnología en un caso de producción real con métricas, trazas e interacción directa.",
    metric: "73",
    metricLabel: "Colecciones estructuradas con 146 rutas canónicas",
    actionText: "Ver JavaScript ES6+",
    actionHref: "/javascript",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: "search",
    badge: "03 · Localización Inmediata",
    title: "Buscador Global Indexado en Memoria",
    subtitle: "Acceso sub-milisegundo a todo el conocimiento",
    description:
      "La plataforma cuenta con un motor de búsqueda difusa precompilado que opera de forma completamente local en el navegador. Puedes abrirlo desde cualquier vista usando la barra superior o el atajo de teclado para saltar de inmediato a cualquier concepto, capítulo o área técnica.",
    metric: "< 5 ms",
    metricLabel: "Tiempo medio de respuesta en consultas difusas",
    actionText: "Abrir buscador en colecciones",
    actionHref: "/colecciones",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "audio",
    badge: "04 · Accesibilidad Multimodal",
    title: "Narración Auditiva Inteligente",
    subtitle: "Síntesis de voz Web Speech API integrada",
    description:
      "Todas las colecciones incorporan una burbuja de narración flotante que verbaliza las explicaciones técnicas mediante la Web Speech API nativa. El sistema segmenta el texto, maneja la puntuación y admite tres niveles de velocidad (1.0x, 1.25x, 1.5x) para posibilitar el estudio auditivo sin dependencias de red.",
    metric: "100%",
    metricLabel: "Cobertura multimodal accesible con controles de velocidad",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    id: "quizzes",
    badge: "05 · Evaluación Continua",
    title: "Evaluaciones Formativas y Quizzes",
    subtitle: "Validación de retención y comprensión técnica",
    description:
      "Cada módulo dispone de quizzes interactivos diseñados para evaluar la asimilación conceptual. Las preguntas ofrecen retroalimentación técnica exhaustiva con justificación de opciones correctas e incorrectas, evitando dinámicas artificiales para centrarse en el rigor profesional.",
    metric: "73",
    metricLabel: "Módulos evaluativos con retroalimentación explicada",
    actionText: "Ir a Quiz de JavaScript",
    actionHref: "/javascript/quiz",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: "preservation",
    badge: "06 · Rigor y Preservación",
    title: "Librería y Fuentes Oficiales",
    subtitle: "Integridad criptográfica SHA-256 y estándares formales",
    description:
      "Dev Visualizer se fundamenta estrictamente en la documentación canónica: especificaciones de la W3C, RFCs de la IETF, normativas ECMA e ISO. Asimismo, la plataforma alberga una biblioteca local de libros y manuales técnicos verificados con sumas de comprobación SHA-256.",
    metric: "179",
    metricLabel: "Manuales y libros técnicos preservados con hash verificado",
    actionText: "Visitar Librería Profesional",
    actionHref: "/libreria",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

type WelcomeTourModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function WelcomeTourModal({ isOpen, onClose }: WelcomeTourModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        setCurrentStep((prev) => Math.min(prev + 1, TOUR_STEPS.length - 1));
      } else if (event.key === "ArrowLeft") {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const step = TOUR_STEPS[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === TOUR_STEPS.length - 1;
  const progressPercent = Math.round(((currentStep + 1) / TOUR_STEPS.length) * 100);

  return (
    <div
      className="tour-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-step-title"
      aria-describedby="tour-step-desc"
    >
      <div className="tour-modal-panel">
        <header className="tour-modal-header">
          <div className="tour-modal-step-indicator">
            <span className="tour-modal-badge">{step.badge}</span>
            <span className="tour-modal-counter">
              Paso {currentStep + 1} de {TOUR_STEPS.length}
            </span>
          </div>
          <button
            type="button"
            className="tour-modal-close"
            onClick={onClose}
            aria-label="Cerrar tour interactivo"
            title="Cerrar tour"
          >
            ×
          </button>
        </header>

        <div className="tour-modal-progress-track" aria-hidden="true">
          <div className="tour-modal-progress-bar" style={{ width: `${progressPercent}%` }} />
        </div>

        <div className="tour-modal-body">
          <div className="tour-modal-icon-badge" aria-hidden="true">
            {step.icon}
          </div>

          <div className="tour-modal-content">
            <h2 id="tour-step-title" className="tour-modal-title">
              {step.title}
            </h2>
            <p className="tour-modal-subtitle">{step.subtitle}</p>
            <p id="tour-step-desc" className="tour-modal-description">
              {step.description}
            </p>

            <div className="tour-modal-metric-card">
              <strong>{step.metric}</strong>
              <span>{step.metricLabel}</span>
            </div>

            {step.actionText && step.actionHref ? (
              <div className="tour-modal-link-box">
                <Link
                  href={step.actionHref}
                  className="tour-modal-inline-link"
                  onClick={onClose}
                >
                  {step.actionText} →
                </Link>
              </div>
            ) : null}
          </div>
        </div>

        <footer className="tour-modal-footer">
          <button
            type="button"
            className="tour-btn tour-btn--secondary"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={isFirst}
            aria-label="Ir al paso anterior del tour"
          >
            ← Anterior
          </button>

          <div className="tour-modal-dots" aria-hidden="true">
            {TOUR_STEPS.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                className={`tour-dot ${idx === currentStep ? "tour-dot--active" : ""}`}
                onClick={() => setCurrentStep(idx)}
                aria-label={`Ir al paso ${idx + 1}: ${s.title}`}
              />
            ))}
          </div>

          {isLast ? (
            <button
              type="button"
              className="tour-btn tour-btn--primary"
              onClick={onClose}
              aria-label="Finalizar tour interactivo y explorar Dev Visualizer"
            >
              Comenzar Exploración ✓
            </button>
          ) : (
            <button
              type="button"
              className="tour-btn tour-btn--primary"
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, TOUR_STEPS.length - 1))}
              aria-label="Ir al siguiente paso del tour"
            >
              Siguiente →
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
