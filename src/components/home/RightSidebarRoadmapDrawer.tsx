"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface RoadmapPhase {
  number: string;
  phase: string;
  duration: string;
  title: string;
  summary: string;
  topics: { name: string; note: string }[];
  route: string;
}

const ROADMAP_PHASES: readonly RoadmapPhase[] = [
  {
    number: "01",
    phase: "FASE 1",
    duration: "1-2 Semanas",
    title: "Elige un Lenguaje y su Runtime",
    summary: "No intentes aprender múltiples lenguajes a la vez. Elige uno y domina su motor por dentro.",
    topics: [
      { name: "JavaScript / TypeScript", note: "Ideal para frontend, backend y Event Loop V8" },
      { name: "Python", note: "CPython, GIL, estructuras y ciencia de datos" },
      { name: "Rust / C++", note: "Control de memoria física, punteros y concurrencia sin GC" },
      { name: "Go", note: "Sistemas distribuidos, Goroutines y concurrencia CSP" },
    ],
    route: "/javascript",
  },
  {
    number: "02",
    phase: "FASE 2",
    duration: "2-4 Semanas",
    title: "Fundamentos y Gestión de Memoria",
    summary: "Antes de algoritmos complejos, comprende cómo opera la CPU y la memoria.",
    topics: [
      { name: "Stack vs Heap", note: "Asignación de punteros, marcos y variables locales" },
      { name: "Flujo y Condicionales", note: "Bucles, saltos de instrucción y recursión base" },
      { name: "Ciclos de Eventos", note: "Call Stack, Microtareas y tareas asíncronas" },
      { name: "Complejidad Asintótica", note: "Notación Big-O teórica y observable" },
    ],
    route: "/programming-fundamentals",
  },
  {
    number: "03",
    phase: "FASE 3",
    duration: "3-4 Semanas",
    title: "Algoritmos y Estructuras de Datos (DSA)",
    summary: "Desarrolla modelos mentales visuales para resolver problemas de ingeniería.",
    topics: [
      { name: "Ordenamiento y Partición", note: "Quicksort Hoare, Mergesort y búsqueda binaria" },
      { name: "Árboles y Heaps", note: "Árboles AVL balanceados, B-Trees para índices" },
      { name: "Grafos y Redes", note: "Algoritmo de Dijkstra, BFS, DFS y topológico" },
      { name: "Tablas Hash", note: "Resolución de colisiones y funciones criptográficas" },
    ],
    route: "/algorithms",
  },
  {
    number: "04",
    phase: "FASE 4",
    duration: "4-6 Semanas",
    title: "Sistemas Distribuidos y Contenedores",
    summary: "Aprende a diseñar sistemas resilientes que escalan en producción.",
    topics: [
      { name: "Protocolos de Red", note: "TCP Handshake, TLS 1.3, HTTP/2 y QUIC en HTTP/3" },
      { name: "Contenedores Linux", note: "Namespaces de aislamiento, cgroups v2 y OverlayFS" },
      { name: "Patrones de Resiliencia", note: "Circuit Breakers, Rate Limiting y Retry con Jitter" },
      { name: "Bases de Datos ACID", note: "Aislamiento transaccional, MVCC y EXPLAIN ANALYZE" },
    ],
    route: "/backend",
  },
];

export function RightSidebarRoadmapDrawer() {
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
      {/* ── Botones Verticales Fijos en el Borde Derecho ── */}
      <aside className="roadmap-edge-bar" aria-label="Accesos rápidos laterales">
        <button
          type="button"
          className="roadmap-edge-btn roadmap-edge-btn--start"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir guía: ¿Por dónde empezar?"
        >
          <span className="roadmap-edge-dot" aria-hidden="true" />
          <span>¿Por dónde empezar?</span>
        </button>

        <button
          type="button"
          className="roadmap-edge-btn roadmap-edge-btn--roadmap"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir Hoja de Ruta de Especialización (Roadmap)"
        >
          <span className="roadmap-edge-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
              <line x1="9" y1="3" x2="9" y2="18" />
              <line x1="15" y1="6" x2="15" y2="21" />
            </svg>
          </span>
          <span>Roadmap</span>
        </button>
      </aside>

      {/* ── Backdrop / Telón de Fondo ── */}
      {isOpen && (
        <div
          className="roadmap-drawer-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Panel Desplegable Lateral (Slide-over Drawer) ── */}
      <div
        className={`roadmap-drawer ${isOpen ? "roadmap-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Hoja de ruta recomendada de arquitectura y algoritmos"
      >
        {/* Cabecera del Cajón */}
        <header className="roadmap-drawer__header">
          <div className="roadmap-drawer__header-text">
            <span className="roadmap-drawer__eyebrow">SECUENCIA FORMATIVA OFICIAL</span>
            <h2>Hoja de Ruta (Roadmap)</h2>
            <p>Sigue esta secuencia exacta para construir modelos mentales sólidos desde cero.</p>
          </div>
          <button
            type="button"
            className="roadmap-drawer__close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar hoja de ruta lateral"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* Lista de Fases de Aprendizaje */}
        <div className="roadmap-drawer__body">
          {ROADMAP_PHASES.map((phase) => (
            <article className="roadmap-phase-card" key={phase.number}>
              <div className="roadmap-phase-card__header">
                <span className="roadmap-phase-card__badge">{phase.phase}</span>
                <span className="roadmap-phase-card__duration">{phase.duration}</span>
                <span className="roadmap-phase-card__num">{phase.number}</span>
              </div>

              <h3 className="roadmap-phase-card__title">{phase.title}</h3>
              <p className="roadmap-phase-card__summary">{phase.summary}</p>

              <ul className="roadmap-phase-card__topics">
                {phase.topics.map((t, idx) => (
                  <li key={idx}>
                    <strong>{t.name}</strong>
                    <span>{t.note}</span>
                  </li>
                ))}
              </ul>

              <div className="roadmap-phase-card__footer">
                <Link
                  href={phase.route}
                  className="roadmap-phase-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Iniciar {phase.phase}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pie Fijo con Llamado a la Acción */}
        <footer className="roadmap-drawer__footer">
          <span className="roadmap-drawer__footer-note">
            Domina cada fase conceptual antes de avanzar a la siguiente.
          </span>
          <Link
            href="/colecciones"
            className="roadmap-drawer__footer-cta"
            onClick={() => setIsOpen(false)}
          >
            <span>Explorar las 73 Colecciones Canónicas</span>
            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </>
  );
}
