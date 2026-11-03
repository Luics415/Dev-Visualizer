"use client";

import { useState } from "react";
import Link from "next/link";
import { TOUR_STEPS, WelcomeTourModal } from "./WelcomeTourModal";

export function HomeTourSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = TOUR_STEPS[activeStepIndex];

  return (
    <section className="home-tour-section" id="tour" aria-label="Tour guiado de Dev Visualizer">
      <div className="home-tour-header">
        <span className="home-section-eyebrow">Onboarding Interactivo</span>
        <h2>Welcome to Dev Visualizer</h2>
        <p>
          Conoce los principios, herramientas y flujos de trabajo diseñados para transformar conceptos abstractos en modelos mentales sólidos.
        </p>
        <button
          type="button"
          className="home-tour-launch-btn"
          onClick={() => setModalOpen(true)}
          aria-label="Abrir tour interactivo guiado en ventana modal"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Iniciar Tour Guiado Completo
        </button>
      </div>

      <div className="home-tour-card-container">
        <nav className="home-tour-nav" aria-label="Pasos del tour de bienvenida">
          {TOUR_STEPS.map((step, idx) => (
            <button
              key={step.id}
              type="button"
              className={`home-tour-step-tab ${idx === activeStepIndex ? "home-tour-step-tab--active" : ""}`}
              onClick={() => setActiveStepIndex(idx)}
              aria-label={`Ver paso ${idx + 1}: ${step.title}`}
              aria-selected={idx === activeStepIndex}
              role="tab"
            >
              <span className="home-tour-tab-num">{String(idx + 1).padStart(2, "0")}</span>
              <span className="home-tour-tab-title">{step.title}</span>
            </button>
          ))}
        </nav>

        <div className="home-tour-content-card" role="tabpanel">
          <div className="home-tour-content-header">
            <span className="home-tour-step-badge">{activeStep.badge}</span>
            <div className="home-tour-icon-box" aria-hidden="true">
              {activeStep.icon}
            </div>
          </div>

          <h3 className="home-tour-title">{activeStep.title}</h3>
          <h4 className="home-tour-subtitle">{activeStep.subtitle}</h4>
          <p className="home-tour-description">{activeStep.description}</p>

          <div className="home-tour-metric-strip">
            <div className="home-tour-metric-item">
              <strong>{activeStep.metric}</strong>
              <span>{activeStep.metricLabel}</span>
            </div>
            {activeStep.actionText && activeStep.actionHref ? (
              <Link href={activeStep.actionHref} className="home-tour-action-link">
                {activeStep.actionText} →
              </Link>
            ) : null}
          </div>

          <footer className="home-tour-controls">
            <button
              type="button"
              className="home-tour-nav-btn"
              onClick={() => setActiveStepIndex((prev) => Math.max(prev - 1, 0))}
              disabled={activeStepIndex === 0}
              aria-label="Paso anterior del tour"
            >
              ← Anterior
            </button>
            <span className="home-tour-counter-text">
              Paso {activeStepIndex + 1} de {TOUR_STEPS.length}
            </span>
            <button
              type="button"
              className="home-tour-nav-btn home-tour-nav-btn--primary"
              onClick={() => setActiveStepIndex((prev) => Math.min(prev + 1, TOUR_STEPS.length - 1))}
              disabled={activeStepIndex === TOUR_STEPS.length - 1}
              aria-label="Siguiente paso del tour"
            >
              Siguiente →
            </button>
          </footer>
        </div>
      </div>

      <WelcomeTourModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
