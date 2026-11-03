"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface StartStep {
  number: string;
  phase: string;
  duration: string;
  title: string;
  summary: string;
  route: string;
}

const START_STEPS: readonly StartStep[] = [
  {
    number: "01",
    phase: "FASE 1",
    duration: "1-2 sem",
    title: "Lenguajes y Runtimes",
    summary: "JavaScript (V8), Python, Rust y Go.",
    route: "/javascript",
  },
  {
    number: "02",
    phase: "FASE 2",
    duration: "2-4 sem",
    title: "Memoria y Fundamentos",
    summary: "Stack vs Heap, Event Loop y complejidad Big-O.",
    route: "/colecciones",
  },
  {
    number: "03",
    phase: "FASE 3",
    duration: "3-4 sem",
    title: "Algoritmos y Estructuras (DSA)",
    summary: "Quicksort Hoare, árboles AVL y Dijkstra.",
    route: "/colecciones",
  },
  {
    number: "04",
    phase: "FASE 4",
    duration: "4-6 sem",
    title: "Sistemas Distribuidos",
    summary: "Redes TCP/QUIC, contenedores y resiliencia.",
    route: "/docker-en-accion",
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
      {/* ── Botón Fijo en el Borde Izquierdo (Único, sin Roadmap) ── */}
      <aside className="start-edge-bar" aria-label="Acceso rápido lateral">
        <button
          type="button"
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

      {/* ── Panel Desplegable Lateral Izquierdo (Compacto y Resumido) ── */}
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
            <p>Ruta secuencial resumida para dominar arquitectura paso a paso.</p>
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

        {/* Fases Resumidas (Tarjetas Nativas Compactas) */}
        <div className="start-drawer__body">
          {START_STEPS.map((step) => (
            <article className="start-phase-card" key={step.number}>
              <div className="start-phase-card__header">
                <span className="start-phase-card__badge">{step.phase}</span>
                <span className="start-phase-card__duration">{step.duration}</span>
                <span className="start-phase-card__num">{step.number}</span>
              </div>

              <h3 className="start-phase-card__title">{step.title}</h3>
              <p className="start-phase-card__summary">{step.summary}</p>

              <div className="start-phase-card__footer">
                <Link
                  href={step.route}
                  className="start-phase-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Iniciar {step.phase}</span>
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
            <span>Explorar las 73 Colecciones</span>
            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </>
  );
}
