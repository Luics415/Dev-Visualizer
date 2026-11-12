"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface RadialNode {
  id: string;
  number: string;
  badge: string;
  title: string;
  summary: string;
  route: string;
  accent: string;
  icon: string;
  angleDeg: number;
}

const RADIAL_NODES: readonly RadialNode[] = [
  {
    id: "fundamentos",
    number: "01",
    badge: "FUNDAMENTOS",
    title: "Fundamentos & Runtimes",
    summary: "Call Stack, Event Loop y complejidad Big-O",
    route: "/javascript",
    accent: "var(--cyan)",
    icon: "💻",
    angleDeg: -90, // 12 en punto (arriba)
  },
  {
    id: "colecciones",
    number: "02",
    badge: "CATÁLOGO",
    title: "73 Colecciones",
    summary: "7,410 conceptos canónicos interactivos",
    route: "/colecciones",
    accent: "#2dd4bf",
    icon: "🌐",
    angleDeg: -30, // 2 en punto
  },
  {
    id: "en-accion",
    number: "03",
    badge: "PRODUCCIÓN",
    title: "Casos «En Acción»",
    summary: "Docker, fallos de red y Circuit Breakers",
    route: "/docker-en-accion",
    accent: "var(--green)",
    icon: "⚡",
    angleDeg: 30, // 4 en punto
  },
  {
    id: "trofeos",
    number: "04",
    badge: "METAS",
    title: "Trofeos por Área",
    summary: "7 medallas oficiales de maestría técnica",
    route: "#trofeos-areas",
    accent: "var(--yellow)",
    icon: "🏆",
    angleDeg: 90, // 6 en punto (abajo)
  },
  {
    id: "libreria",
    number: "05",
    badge: "ESTÁNDARES",
    title: "Librería Oficial",
    summary: "266 normas formales TC39, RFCs y fuentes",
    route: "/libreria",
    accent: "var(--jinx-rose)",
    icon: "📚",
    angleDeg: 150, // 8 en punto
  },
  {
    id: "quizzes",
    number: "06",
    badge: "EVALUACIÓN",
    title: "Quizzes Senior",
    summary: "Evalúa tus modelos mentales con cuestionarios",
    route: "/javascript/quiz",
    accent: "var(--violet)",
    icon: "🎯",
    angleDeg: 210, // 10 en punto
  },
];

export function StartGuideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState(1200);

  // Escuchar redimensionamiento para radio responsivo
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Radio adaptativo según ancho de pantalla
  const radius = useMemo(() => {
    if (viewportWidth >= 1024) return 260;
    if (viewportWidth >= 768) return 210;
    if (viewportWidth >= 480) return 165;
    return 135;
  }, [viewportWidth]);

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Bloqueo suave de scroll al abrir
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

  const handleNodeClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, route: string) => {
      if (route.startsWith("#")) {
        e.preventDefault();
        setIsOpen(false);
        const el = document.querySelector(route);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        setIsOpen(false);
      }
    },
    [],
  );

  return (
    <>
      {/* ── Botón Fijo en el Borde Izquierdo (Disparador) ── */}
      <aside
        id="tour-start-bar"
        className={`start-edge-bar ${isOpen ? "start-edge-bar--hidden" : ""}`}
        aria-label="Acceso rápido lateral"
      >
        <button
          type="button"
          id="tour-start-btn"
          className="start-edge-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir guía: ¿Por dónde empezar?"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <span className="start-edge-dot" aria-hidden="true" />
          <span>¿Por dónde empezar?</span>
          <span className="start-edge-badge" aria-hidden="true">
            Brújula
          </span>
        </button>
      </aside>

      {/* ── Menú Radial Animado en Pantalla Completa ── */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="radial-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Menú radial interactivo: ¿Por dónde empezar?"
          >
            {/* Backdrop oscuro con desenfoque */}
            <motion.div
              className="radial-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Lienzo Central de la Órbita */}
            <div className="radial-menu-stage">
              {/* Líneas y Anillo Orbital SVG */}
              <svg
                className="radial-menu-svg"
                viewBox={`-${radius + 120} -${radius + 120} ${(radius + 120) * 2} ${(radius + 120) * 2}`}
                aria-hidden="true"
              >
                {/* Anillo Orbital Exterior */}
                <circle
                  cx="0"
                  cy="0"
                  r={radius}
                  className="radial-orbit-circle"
                />

                {/* Rayos Conectores del Núcleo a cada Satélite */}
                {RADIAL_NODES.map((node, idx) => {
                  const rad = (node.angleDeg * Math.PI) / 180;
                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);
                  const isHovered = hoveredIndex === idx;

                  return (
                    <line
                      key={node.id}
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      className={`radial-ray-line ${isHovered ? "radial-ray-line--active" : ""}`}
                      style={{
                        stroke: isHovered ? node.accent : undefined,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Núcleo Central: El Botón que Viajó al Centro */}
              <motion.div
                className="radial-menu-core"
                initial={{ x: "-46vw", y: 0, scale: 0.8, opacity: 0 }}
                animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                exit={{ x: "-46vw", y: 0, scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
              >
                <div className="radial-core__orb">
                  <div className="radial-core__icon-box" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                    </svg>
                  </div>
                  <h2 className="radial-core__title">¿Por dónde empezar?</h2>
                  <span className="radial-core__sub">Selecciona tu Ruta</span>
                  <button
                    type="button"
                    className="radial-core__close-btn"
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar menú radial"
                  >
                    <span>✕ Cerrar</span>
                  </button>
                </div>
              </motion.div>

              {/* Los 6 Satélites Radiales Desprendidos */}
              {RADIAL_NODES.map((node, idx) => {
                const rad = (node.angleDeg * Math.PI) / 180;
                const targetX = Math.round(radius * Math.cos(rad));
                const targetY = Math.round(radius * Math.sin(rad));

                return (
                  <motion.div
                    key={node.id}
                    className="radial-node-satellite"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{ x: targetX, y: targetY, scale: 1, opacity: 1 }}
                    exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    transition={{
                      delay: 0.12 + idx * 0.035,
                      type: "spring",
                      stiffness: 220,
                      damping: 22,
                    }}
                    whileHover={{ scale: 1.07 }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ "--node-accent": node.accent } as React.CSSProperties}
                  >
                    <Link
                      href={node.route}
                      className="radial-node-card"
                      onClick={(e) => handleNodeClick(e, node.route)}
                    >
                      <div className="radial-node-card__header">
                        <span className="radial-node-card__badge">
                          {node.number} · {node.badge}
                        </span>
                        <span className="radial-node-card__icon" aria-hidden="true">
                          {node.icon}
                        </span>
                      </div>

                      <h3 className="radial-node-card__title">{node.title}</h3>
                      <p className="radial-node-card__summary">{node.summary}</p>

                      <div className="radial-node-card__action">
                        <span>Iniciar</span>
                        <span aria-hidden="true">→</span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
