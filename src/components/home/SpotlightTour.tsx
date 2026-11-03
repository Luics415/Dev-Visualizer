"use client";

import { useState, useEffect, useCallback } from "react";

interface TourStep {
  id: string;
  title: string;
  description: string;
  target: string | null;
  tag: string;
}

const TOUR_STEPS: readonly TourStep[] = [
  {
    id: "welcome",
    title: "Bienvenido a Dev Visualizer",
    description:
      "Comprende la arquitectura de software y los runtimes viéndolos ejecutarse paso a paso con animaciones interactivas en memoria viva que puedes pausar e inspeccionar.",
    target: null,
    tag: "INTRODUCCIÓN",
  },
  {
    id: "workbench",
    title: "Simulador de Código y Memoria",
    description:
      "Inspecciona la ejecución de algoritmos frame a frame: código a la izquierda, punteros de partición L/R a la derecha y complejidad Big-O en tiempo real.",
    target: "#hero-simulator-workbench",
    tag: "SIMULADOR EN VIVO",
  },
  {
    id: "menu-01",
    title: "Colecciones Temáticas",
    description:
      "Explora 73 colecciones tecnológicas y 7,410 conceptos canónicos organizados por dominios de arquitectura con mapas visuales interactivos.",
    target: "#menu-card-01",
    tag: "APARTADO · 01",
  },
  {
    id: "menu-02",
    title: "Capacidades Operativas",
    description:
      "73 escenarios de producción simulados: inyección de fallos de red, saturación de pools de base de datos, aislamiento en Docker y mitigación con Circuit Breakers.",
    target: "#menu-card-02",
    tag: "APARTADO · 02",
  },
  {
    id: "menu-03",
    title: "Librería Profesional Preservada",
    description:
      "266 recursos y normas oficiales: especificaciones formales de TC39 (ECMA-262), RFCs del IETF y documentación primaria sin alucinaciones.",
    target: "#menu-card-03",
    tag: "APARTADO · 03",
  },
  {
    id: "start-guide",
    title: "¿Por dónde empezar?",
    description:
      "¿No sabes por dónde comenzar? Haz clic en esta pestaña lateral en cualquier momento para desplegar la ruta formativa en 6 secciones canónicas.",
    target: "#tour-start-btn",
    tag: "GUÍA LATERAL",
  },
];

interface RectState {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function SpotlightTour() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [spotlightRect, setSpotlightRect] = useState<RectState | null>(null);
  const [modalPos, setModalPos] = useState<{ top: number; left: number } | null>(null);

  const step = TOUR_STEPS[currentStep];

  const updatePosition = useCallback(() => {
    if (!isOpen) return;

    if (!step.target) {
      setSpotlightRect(null);
      setModalPos(null);
      return;
    }

    const el = document.querySelector(step.target);
    if (!el) {
      setSpotlightRect(null);
      setModalPos(null);
      return;
    }

    const rect = el.getBoundingClientRect();
    setSpotlightRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });

    const modalWidth = Math.min(420, window.innerWidth * 0.92);
    const modalHeight = 220;

    let targetLeft = rect.left + rect.width / 2 - modalWidth / 2;
    // Bound horizontally
    targetLeft = Math.max(16, Math.min(targetLeft, window.innerWidth - modalWidth - 16));

    let targetTop = rect.bottom + 16;
    // If not enough space below, place above
    if (targetTop + modalHeight > window.innerHeight && rect.top - modalHeight - 16 > 10) {
      targetTop = rect.top - modalHeight - 16;
    }
    // If target is wide or tall, clamp to visible viewport
    if (targetTop + modalHeight > window.innerHeight) {
      targetTop = window.innerHeight - modalHeight - 20;
    }

    setModalPos({ top: targetTop, left: targetLeft });
  }, [isOpen, step.target]);

  // Handle step change and scroll target into view
  useEffect(() => {
    if (!isOpen) return;

    if (step.target) {
      const el = document.querySelector(step.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    const timeout = setTimeout(updatePosition, 300);
    return () => clearTimeout(timeout);
  }, [isOpen, step.target, updatePosition]);

  // Update position on resize and scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleUpdate = () => {
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate, { passive: true });
    return () => {
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate);
    };
  }, [isOpen, updatePosition]);

  if (!isOpen) {
    return (
      <button
        type="button"
        className="floating-tour-reopen-btn"
        onClick={() => {
          setCurrentStep(0);
          setIsOpen(true);
        }}
        aria-label="Reabrir tour guiado interactivo"
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

  const isCentered = !step.target || !modalPos;

  return (
    <>
      {/* ── Overlay Completo Oscuro (Paso Inicial o Falla de Target) ── */}
      {!spotlightRect && (
        <div
          className="spotlight-full-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Spotlight Box: Marco Iluminado con Sombra Expansiva hacia el Resto de la Pantalla ── */}
      {spotlightRect && (
        <div
          className="spotlight-box"
          style={{
            top: `${Math.round(spotlightRect.top - 8)}px`,
            left: `${Math.round(spotlightRect.left - 8)}px`,
            width: `${Math.round(spotlightRect.width + 16)}px`,
            height: `${Math.round(spotlightRect.height + 16)}px`,
          }}
          aria-hidden="true"
        />
      )}

      {/* ── Tarjeta Modal del Tour ── */}
      <div
        className={`spotlight-modal ${isCentered ? "spotlight-modal--centered" : ""}`}
        style={
          modalPos
            ? {
                top: `${Math.round(modalPos.top)}px`,
                left: `${Math.round(modalPos.left)}px`,
              }
            : undefined
        }
        role="dialog"
        aria-modal="true"
        aria-label={step.title}
      >
        {/* Cabecera del Tour */}
        <div className="spotlight-modal__header">
          <div className="spotlight-modal__icon-and-dots">
            <span className="spotlight-modal__icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </span>
            <div className="spotlight-modal__dots" aria-label={`Paso ${currentStep + 1} de ${TOUR_STEPS.length}`}>
              {TOUR_STEPS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`spotlight-dot ${idx === currentStep ? "spotlight-dot--active" : ""}`}
                  onClick={() => setCurrentStep(idx)}
                  aria-label={`Ir al paso ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="spotlight-modal__close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar tour interactivo"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Contenido del Paso */}
        <div className="spotlight-modal__body">
          <span className="spotlight-modal__tag">{step.tag}</span>
          <h3 className="spotlight-modal__title">{step.title}</h3>
          <p className="spotlight-modal__text">{step.description}</p>
        </div>

        {/* Pie con Controles Siguiente / Omitir / Anterior */}
        <div className="spotlight-modal__footer">
          <button
            type="button"
            className="spotlight-modal__skip-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Omitir el tour"
          >
            Omitir tour
          </button>

          <div className="spotlight-modal__nav-group">
            {currentStep > 0 && (
              <button
                type="button"
                className="spotlight-modal__prev-btn"
                onClick={handlePrev}
                aria-label="Paso anterior del tour"
              >
                ← Anterior
              </button>
            )}
            <button
              type="button"
              className="spotlight-modal__next-btn"
              onClick={handleNext}
              aria-label={isLast ? "Finalizar tour y comenzar" : "Siguiente paso del tour"}
            >
              {isLast ? "¡Comenzar! →" : "Siguiente →"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
