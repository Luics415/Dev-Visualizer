"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface GuideSection {
  number: string;
  badge: string;
  title: string;
  summary: string;
  route: string;
  actionText: string;
  accent: string;
}

const GUIDE_SECTIONS: readonly GuideSection[] = [
  {
    number: "01",
    badge: "CATÁLOGO CANÓNICO",
    title: "Colecciones Temáticas",
    summary: "73 tecnologías y 7,410 conceptos organizados por áreas de especialización y vigencia.",
    route: "/colecciones",
    actionText: "Explorar Colecciones",
    accent: "var(--cyan)",
  },
  {
    number: "02",
    badge: "DOCUMENTACIÓN",
    title: "Librería Profesional",
    summary: "266 recursos primarios, estándares formales de TC39, IETF RFCs y preservación digital.",
    route: "/libreria",
    actionText: "Consultar Librería",
    accent: "var(--jinx-rose)",
  },
  {
    number: "03",
    badge: "HERRAMIENTAS",
    title: "02 · Capacidades Operativas",
    summary: "Consolas de simulación, telemetría de latencia, diagnóstico de fallos y terminal interactiva.",
    route: "#capacidades-operativas",
    actionText: "Ver Capacidades",
    accent: "var(--green)",
  },
  {
    number: "04",
    badge: "FUNDAMENTOS",
    title: "01 · Currículum y Runtimes",
    summary: "Call Stack, Event Loop de V8, memoria física Stack vs Heap y complejidad Big-O.",
    route: "#que-se-aprende",
    actionText: "Ver Currículum",
    accent: "var(--yellow)",
  },
  {
    number: "05",
    badge: "AUDITORÍA SAST",
    title: "03 · Evidencia y Confianza",
    summary: "Garantías formales, auditoría SAST continua y accesibilidad internacional WCAG 2.1 AA.",
    route: "#puedo-confiar",
    actionText: "Ver Evidencia",
    accent: "var(--cyan)",
  },
  {
    number: "06",
    badge: "CERTIFICACIÓN",
    title: "04 · Rutas y Certificación",
    summary: "Quizzes de arquitectura de nivel senior para desbloquear la Insignia de Ancla.",
    route: "#que-hago-ahora",
    actionText: "Ver Certificación",
    accent: "var(--violet)",
  },
];

export function StartGuideDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── Botón Fijo en el Borde Izquierdo ── */}
      <aside id="tour-start-bar" className="start-edge-bar" aria-label="Acceso rápido lateral">
        <button
          type="button"
          id="tour-start-btn"
          className="start-edge-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir guía: ¿Por dónde empezar?"
        >
          <span className="start-edge-dot" aria-hidden="true" />
          <span>¿Por dónde empezar?</span>
        </button>
      </aside>

      {/* ── Backdrop / Telón de Fondo ── */}
      {isOpen && (
        <div
          className="start-drawer-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Panel Desplegable Lateral Izquierdo ── */}
      <div
        className={`start-drawer ${isOpen ? "start-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Guía rápida: ¿Por dónde empezar?"
      >
        {/* Cabecera Compacta */}
        <header className="start-drawer__header">
          <div className="start-drawer__header-text">
            <span className="start-drawer__eyebrow">SECUENCIA FORMATIVA SUGERIDA</span>
            <h2>¿Por dónde empezar?</h2>
            <p>Ruta secuencial resumida para dominar arquitectura paso a paso en 6 secciones.</p>
          </div>
          <button
            type="button"
            className="start-drawer__close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar guía lateral"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* 6 Secciones Sugeridas (Diseño Nativo de Tarjetas) */}
        <div className="start-drawer__body">
          {GUIDE_SECTIONS.map((sec) => (
            <article
              className="start-phase-card"
              key={sec.number}
              style={{ "--step-accent": sec.accent } as React.CSSProperties}
            >
              <div className="start-phase-card__header">
                <span className="start-phase-card__category">{sec.badge}</span>
                <b className="start-phase-card__badge">{sec.number}</b>
              </div>

              <h3 className="start-phase-card__title">{sec.title}</h3>
              <p className="start-phase-card__summary">{sec.summary}</p>

              <div className="start-phase-card__footer">
                <Link
                  href={sec.route}
                  className="start-phase-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{sec.actionText}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pie Compacto */}
        <footer className="start-drawer__footer">
          <Link
            href="/colecciones"
            className="start-drawer__footer-cta"
            onClick={() => setIsOpen(false)}
          >
            <span>Ver las 73 Colecciones Canónicas</span>
            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </>
  );
}
