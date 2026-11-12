"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from "react";
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

/** Medidas de referencia sincronizadas con los breakpoints de globals.css. */
interface OrbitLayout {
  rx: number;
  ry: number;
}

const DEFAULT_LAYOUT: OrbitLayout = { rx: 260, ry: 250 };

function computeOrbitLayout(vw: number, vh: number): OrbitLayout {
  const tier =
    vw > 768
      ? { rx: vw >= 1024 ? 260 : 220, cardW: 185, cardH: 128, core: 154 }
      : vw > 480
        ? { rx: 175, cardW: 148, cardH: 112, core: 124 }
        : { rx: 140, cardW: 116, cardH: 86, core: 105 };

  // Los nodos laterales (±30°, 150°, 210°) no deben salirse horizontalmente.
  const maxRx = (vw / 2 - tier.cardW / 2 - 10) / Math.cos(Math.PI / 6);
  const rx = Math.max(100, Math.min(tier.rx, maxRx));

  // En vertical (móvil) la órbita se estira en elipse para separar las tarjetas.
  const stretch = vh > vw ? 1.3 : 1;
  const maxRy = vh / 2 - tier.cardH / 2 - 14;
  const minRy = tier.core / 2 + tier.cardH / 2 + 8;
  const ry = Math.max(minRy, Math.min(rx * stretch, maxRy));

  return { rx: Math.round(rx), ry: Math.round(ry) };
}

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function StartGuideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [layout, setLayout] = useState<OrbitLayout>(DEFAULT_LAYOUT);
  const [origin, setOrigin] = useState({ x: -600, y: 0 });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);

  const { rx, ry } = layout;

  const openMenu = useCallback(() => {
    // Calcula desde dónde "despega" el núcleo: centro real del botón respecto al centro del viewport.
    const btn = triggerRef.current;
    if (btn) {
      const r = btn.getBoundingClientRect();
      setOrigin({
        x: Math.round(r.left + r.width / 2 - window.innerWidth / 2),
        y: Math.round(r.top + r.height / 2 - window.innerHeight / 2),
      });
    }
    setLayout(computeOrbitLayout(window.innerWidth, window.innerHeight));
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback((returnFocus: boolean) => {
    restoreFocusRef.current = returnFocus;
    setActiveIndex(null);
    setIsOpen(false);
  }, []);

  // Recalcula la órbita al redimensionar mientras está abierto
  useEffect(() => {
    if (!isOpen) return;
    let frame = 0;
    const handleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setLayout(computeOrbitLayout(window.innerWidth, window.innerHeight)));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu(true);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Bloqueo de scroll sin salto de layout (compensa el ancho de la barra de desplazamiento)
  useEffect(() => {
    if (!isOpen) return;
    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [isOpen]);

  // Gestión de foco: entra al diálogo al abrir y vuelve al disparador al cerrar
  useEffect(() => {
    if (isOpen) {
      const id = window.setTimeout(() => closeBtnRef.current?.focus({ preventScroll: true }), 60);
      return () => window.clearTimeout(id);
    }
    if (restoreFocusRef.current) {
      restoreFocusRef.current = false;
      triggerRef.current?.focus({ preventScroll: true });
    }
  }, [isOpen]);

  // Trampa de foco con Tab dentro del menú radial
  const handleDialogKeyDown = useCallback((e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  const handleNodeClick = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>, route: string) => {
      if (route.startsWith("#")) {
        e.preventDefault();
        closeMenu(false);
        // Espera a que se libere el bloqueo de scroll antes de desplazarse
        window.setTimeout(() => {
          document.querySelector(route)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 220);
      } else {
        closeMenu(false);
      }
    },
    [closeMenu],
  );

  const svgW = (rx + 40) * 2;
  const svgH = (ry + 40) * 2;
  const lastIdx = RADIAL_NODES.length - 1;

  return (
    <>
      {/* ── Botón Fijo en el Borde Izquierdo (Disparador) ── */}
      <aside
        id="tour-start-bar"
        className={`start-edge-bar ${isOpen ? "start-edge-bar--hidden" : ""}`}
        aria-label="Acceso rápido lateral"
      >
        <button
          ref={triggerRef}
          type="button"
          id="tour-start-btn"
          className="start-edge-btn"
          onClick={openMenu}
          aria-label="Abrir guía: ¿Por dónde empezar?"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          tabIndex={isOpen ? -1 : 0}
        >
          <span className="start-edge-dot" aria-hidden="true" />
          <span>¿Por dónde empezar?</span>
        </button>
      </aside>

      {/* ── Menú Radial Animado en Pantalla Completa ── */}
      <AnimatePresence>
        {isOpen && (
          <div
            key="radial-menu"
            ref={dialogRef}
            className="radial-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Menú radial interactivo: ¿Por dónde empezar?"
            onKeyDown={handleDialogKeyDown}
          >
            {/* Backdrop oscuro con desenfoque */}
            <motion.div
              className="radial-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.22, delay: 0.08 } }}
              transition={{ duration: 0.26, ease: "easeOut" }}
              onClick={() => closeMenu(true)}
              aria-hidden="true"
            />

            {/* Lienzo Central de la Órbita (punto 0,0 = centro del viewport) */}
            <div className="radial-menu-stage">
              {/* Anillo orbital y rayos conectores (escala 1:1 con las coordenadas de los nodos) */}
              <svg
                className="radial-menu-svg"
                width={svgW}
                height={svgH}
                viewBox={`${-svgW / 2} ${-svgH / 2} ${svgW} ${svgH}`}
                aria-hidden="true"
              >
                <motion.ellipse
                  cx="0"
                  cy="0"
                  rx={rx}
                  ry={ry}
                  className="radial-orbit-ring"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.18 } }}
                  transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                />

                {RADIAL_NODES.map((node, idx) => {
                  const rad = (node.angleDeg * Math.PI) / 180;
                  const isActive = activeIndex === idx;
                  return (
                    <motion.line
                      key={node.id}
                      x1="0"
                      y1="0"
                      x2={Math.round(rx * Math.cos(rad))}
                      y2={Math.round(ry * Math.sin(rad))}
                      className={`radial-ray-line ${isActive ? "radial-ray-line--active" : ""}`}
                      style={isActive ? { stroke: node.accent, color: node.accent } : undefined}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0, transition: { duration: 0.16 } }}
                      transition={{ duration: 0.38, delay: 0.16 + idx * 0.04, ease: "easeOut" }}
                    />
                  );
                })}
              </svg>

              {/* Núcleo Central: el botón despega desde su posición real y aterriza en el centro */}
              <motion.div
                className="radial-menu-core"
                initial={{ x: origin.x, y: origin.y, scale: 0.35, opacity: 0 }}
                animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                exit={{
                  x: origin.x,
                  y: origin.y,
                  scale: 0.35,
                  opacity: 0,
                  transition: { duration: 0.28, delay: 0.06, ease: [0.4, 0, 1, 1] },
                }}
                transition={{ type: "spring", stiffness: 240, damping: 24, mass: 0.9 }}
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
                    ref={closeBtnRef}
                    type="button"
                    className="radial-core__close-btn"
                    onClick={() => closeMenu(true)}
                    aria-label="Cerrar menú radial"
                  >
                    <span aria-hidden="true">✕</span> Cerrar
                  </button>
                </div>
              </motion.div>

              {/* Los 6 satélites: brotan del núcleo en escalonado y regresan en orden inverso */}
              {RADIAL_NODES.map((node, idx) => {
                const rad = (node.angleDeg * Math.PI) / 180;
                const targetX = Math.round(rx * Math.cos(rad));
                const targetY = Math.round(ry * Math.sin(rad));

                return (
                  <motion.div
                    key={node.id}
                    className="radial-node-satellite"
                    initial={{ x: 0, y: 0, scale: 0.2, opacity: 0 }}
                    animate={{ x: targetX, y: targetY, scale: 1, opacity: 1 }}
                    exit={{
                      x: 0,
                      y: 0,
                      scale: 0.2,
                      opacity: 0,
                      transition: { duration: 0.2, delay: (lastIdx - idx) * 0.018, ease: [0.4, 0, 1, 1] },
                    }}
                    transition={{
                      delay: 0.14 + idx * 0.045,
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                    onHoverStart={() => setActiveIndex(idx)}
                    onHoverEnd={() => setActiveIndex((cur) => (cur === idx ? null : cur))}
                    style={{ "--node-accent": node.accent } as CSSProperties}
                  >
                    <Link
                      href={node.route}
                      className="radial-node-card"
                      onClick={(e) => handleNodeClick(e, node.route)}
                      onFocus={() => setActiveIndex(idx)}
                      onBlur={() => setActiveIndex((cur) => (cur === idx ? null : cur))}
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
                        <span className="radial-node-card__arrow" aria-hidden="true">→</span>
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
