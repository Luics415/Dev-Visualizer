"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import Link from "next/link";
import { trackButtonClick } from "@/lib/telemetry";
import { useQuests } from "@/hooks/useQuests";
import { type ThematicAreaId } from "@/data/symbolicAchievements";

interface ArchitectureAreaSpec {
  id: ThematicAreaId;
  name: string;
  shortName: string;
  badge: string;
  collectionsCount: number;
  actionCount: number;
  routesCount: number;
  trophyTitle: string;
  concept: string;
  technologies: readonly string[];
}

const ARCHITECTURE_AREAS: readonly ArchitectureAreaSpec[] = [
  {
    id: "fundamentals",
    name: "Fundamentos de Software",
    shortName: "Fundamentos",
    badge: "5 COL · 10 RUTAS",
    collectionsCount: 5,
    actionCount: 5,
    routesCount: 10,
    trophyTitle: "Iniciador de Algoritmos y Lógica",
    concept: "Algoritmos esenciales, estructuras de datos, lógica computacional y complejidad Big-O.",
    technologies: ["Algoritmos", "Matemáticas", "Lógica", "Grafos", "Big-O"],
  },
  {
    id: "languages",
    name: "Lenguajes de Programación",
    shortName: "Lenguajes",
    badge: "27 COL · 54 RUTAS",
    collectionsCount: 27,
    actionCount: 27,
    routesCount: 54,
    trophyTitle: "Políglota de Código",
    concept: "Sintaxis, modelos de memoria (Stack vs Heap), ciclo de eventos V8 y paradigmas.",
    technologies: ["JavaScript", "TypeScript", "Python", "Rust", "Go", "C++", "Java", "C#"],
  },
  {
    id: "interfaces",
    name: "Diseño e Interfaces",
    shortName: "Interfaces",
    badge: "9 COL · 18 RUTAS",
    collectionsCount: 9,
    actionCount: 9,
    routesCount: 18,
    trophyTitle: "Arquitecto de Experiencias y UI",
    concept: "Sistemas de diseño, reconciliación DOM, tokens, accesibilidad WCAG y apps móviles.",
    technologies: ["HTML/CSS", "React", "Vue", "Svelte", "Tailwind", "React Native", "WCAG 2.1"],
  },
  {
    id: "platforms",
    name: "Plataforma y Servidor",
    shortName: "Servidor",
    badge: "10 COL · 20 RUTAS",
    collectionsCount: 10,
    actionCount: 10,
    routesCount: 20,
    trophyTitle: "Especialista en Sistemas y Backend",
    concept: "Runtimes de backend, APIs concurrentes, microservicios y patrones de resiliencia.",
    technologies: ["Node.js", "Express", "Fastify", "Next.js", "NestJS", "Bun", "GraphQL"],
  },
  {
    id: "data",
    name: "Datos y Persistencia",
    shortName: "Datos",
    badge: "10 COL · 20 RUTAS",
    collectionsCount: 10,
    actionCount: 10,
    routesCount: 20,
    trophyTitle: "Maestro de Datos y Persistencia",
    concept: "Modelado relacional ACID, motores NoSQL, índices B-Tree y persistencia distribuida.",
    technologies: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "SQLite", "Esquemas ACID"],
  },
  {
    id: "versioning",
    name: "Control de Versiones y Calidad",
    shortName: "Calidad",
    badge: "4 COL · 8 RUTAS",
    collectionsCount: 4,
    actionCount: 4,
    routesCount: 8,
    trophyTitle: "Guardián de Integración y Calidad",
    concept: "Grafo histórico de Git, flujo en GitHub, compuertas CI, análisis SAST y depuración.",
    technologies: ["Git", "GitHub", "Chrome DevTools", "SAST", "Compuertas CI"],
  },
  {
    id: "delivery",
    name: "Infraestructura y Entrega",
    shortName: "DevOps",
    badge: "8 COL · 16 RUTAS",
    collectionsCount: 8,
    actionCount: 8,
    routesCount: 16,
    trophyTitle: "Ingeniero de Despliegue y DevOps",
    concept: "Aislamiento en contenedores OCI, Linux, nubes públicas, Kubernetes y CI/CD.",
    technologies: ["Docker", "Kubernetes", "Linux", "NGINX", "AWS", "Pipelines CI/CD"],
  },
];

export function HomeArchitectureExplorer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [, startTransition] = useTransition();
  const quests = useQuests();

  const activeArea = ARCHITECTURE_AREAS[selectedIndex];
  const areaProgress = quests.questsProgress[activeArea.id];
  const isAreaUnlocked = areaProgress?.isUnlocked ?? false;
  const completedQuizzes = areaProgress?.completedQuizzes ?? 0;
  const totalQuizzes = areaProgress?.totalQuizzes ?? activeArea.collectionsCount;
  const percentage = areaProgress?.percentage ?? 0;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % ARCHITECTURE_AREAS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const selectArea = useCallback(
    (index: number) => {
      startTransition(() => {
        setSelectedIndex(index);
      });
      setIsAutoPlaying(false);
      const chosen = ARCHITECTURE_AREAS[index];
      trackButtonClick(
        `hero_area_tab_${chosen.id}`,
        `Pestaña de Área: ${chosen.name}`,
        "hero_architecture_explorer"
      );
    },
    []
  );

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % ARCHITECTURE_AREAS.length);
    setIsAutoPlaying(false);
    trackButtonClick("hero_step_next", "Siguiente área de arquitectura", "hero_workbench");
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + ARCHITECTURE_AREAS.length) % ARCHITECTURE_AREAS.length);
    setIsAutoPlaying(false);
    trackButtonClick("hero_step_prev", "Área anterior de arquitectura", "hero_workbench");
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => {
      const next = !prev;
      trackButtonClick(
        next ? "hero_autoplay_resume" : "hero_autoplay_pause",
        next ? "Reanudar rotación automática" : "Pausar rotación automática",
        "hero_workbench"
      );
      return next;
    });
  }, []);

  return (
    <div
      id="hero-simulator-workbench"
      className="hero-workbench"
      aria-label="Explorador visual de las 7 áreas canónicas de Dev Visualizer"
    >
      <div className="hero-workbench__titlebar">
        <div className="hero-workbench__dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="hero-workbench__filename">
          Atlas de Arquitectura · 7 Áreas
        </span>
        <span className="hero-workbench__badge">
          <span className="hero-workbench__badge-dot" aria-hidden="true" />
          146 RUTAS CANÓNICAS
        </span>
      </div>

      <div
        className="hero-workbench__tabs"
        role="tablist"
        aria-label="Áreas de arquitectura de software"
      >
        {ARCHITECTURE_AREAS.map((area, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <button
              key={area.id}
              role="tab"
              aria-selected={isSelected}
              className={`hero-workbench__tab ${isSelected ? "hero-workbench__tab--active" : ""}`}
              onClick={() => selectArea(idx)}
              title={`${area.name} (${area.collectionsCount} colecciones)`}
            >
              <span className="hero-workbench__tab-num" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="hero-workbench__tab-name">{area.shortName}</span>
            </button>
          );
        })}
      </div>

      <div className="hero-workbench__showcase">
        <div className="hero-workbench__showcase-header">
          <div className="hero-workbench__area-icon-box" aria-hidden="true">
            {String(selectedIndex + 1).padStart(2, "0")}
          </div>
          <div className="hero-workbench__area-title-wrap">
            <span className="hero-workbench__area-tag">
              ÁREA {selectedIndex + 1} DE 7
            </span>
            <h3 className="hero-workbench__area-heading">
              {activeArea.name}
            </h3>
            <p className="hero-workbench__area-desc">
              {activeArea.concept}
            </p>
          </div>
        </div>

        <div className="hero-workbench__stats-row">
          <div className="hero-workbench__stat-card">
            <span className="hero-workbench__stat-num">{activeArea.collectionsCount}</span>
            <span className="hero-workbench__stat-label">Colecciones Teóricas</span>
          </div>
          <div className="hero-workbench__stat-card">
            <span className="hero-workbench__stat-num">{activeArea.actionCount}</span>
            <span className="hero-workbench__stat-label">Casos «En Acción»</span>
          </div>
          <div className="hero-workbench__stat-card hero-workbench__stat-card--highlight">
            <span className="hero-workbench__stat-num">{activeArea.routesCount}</span>
            <span className="hero-workbench__stat-label">Rutas Canónicas</span>
          </div>
        </div>

        <div className="hero-workbench__tech-row">
          <span className="hero-workbench__tech-title">Tecnologías:</span>
          <div className="hero-workbench__tech-tags">
            {activeArea.technologies.map((tech) => (
              <span key={tech} className="hero-workbench__tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-workbench__action-footer">
          <div
            className={`hero-workbench__trophy-banner ${
              isAreaUnlocked ? "hero-workbench__trophy-banner--unlocked" : ""
            }`}
          >
            <span className="hero-workbench__trophy-icon" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
                <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
              </svg>
            </span>
            <div className="hero-workbench__trophy-details">
              <span className="hero-workbench__trophy-tag">
                {isAreaUnlocked ? "¡TROFEO DESBLOQUEADO!" : "TROFEO DE COMPLETADO"}
              </span>
              <strong className="hero-workbench__trophy-name">
                {activeArea.trophyTitle}
              </strong>
              <small className="hero-workbench__trophy-progress">
                {completedQuizzes} / {totalQuizzes} quizzes aprobados ({percentage}%)
              </small>
            </div>
          </div>

          <Link
            href="/colecciones"
            className="hero-workbench__direct-btn"
            onClick={() => {
              trackButtonClick(
                `hero_explore_area_${activeArea.id}`,
                `Explorar área ${activeArea.name}`,
                "hero_workbench"
              );
            }}
          >
            <span>Explorar Colecciones</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="hero-workbench__controls">
        <div className="hero-workbench__step-info">
          <span>Área {selectedIndex + 1} de {ARCHITECTURE_AREAS.length}</span>
          <span className="hero-workbench__step-dot" aria-hidden="true">·</span>
          <span>{activeArea.badge}</span>
        </div>

        <div className="hero-workbench__buttons">
          <button
            type="button"
            className="hero-workbench__btn"
            onClick={handlePrev}
            aria-label="Área anterior"
            title="Área anterior"
          >
            ←
          </button>
          <button
            type="button"
            className={`hero-workbench__btn ${isAutoPlaying ? "hero-workbench__btn--active" : ""}`}
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? "Pausar rotación" : "Reproducir rotación"}
            title={isAutoPlaying ? "Pausar rotación" : "Reproducir rotación"}
          >
            {isAutoPlaying ? "Pausar" : "Girar"}
          </button>
          <button
            type="button"
            className="hero-workbench__btn"
            onClick={handleNext}
            aria-label="Siguiente área"
            title="Siguiente área"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
