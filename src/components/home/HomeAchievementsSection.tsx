/**
 * Dev Visualizer — Sección de Trofeos de Completado por Área (Feature F20/F21)
 * src/components/home/HomeAchievementsSection.tsx
 *
 * Muestra las 7 áreas de arquitectura de software, sus 146 rutas canónicas
 * (73 colecciones teóricas + 73 casos prácticos en acción) y los trofeos
 * simbólicos de completado otorgados al superar el 100% de los quizzes de cada área.
 *
 * Accesible según WCAG 2.1 AA (contrastes altos, barras de progreso semánticas,
 * etiquetas claras sin muros de texto abrumadores).
 */

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useQuests } from "@/hooks/useQuests";
import { symbolicAchievements, type ThematicAreaId } from "@/data/symbolicAchievements";
import { trackButtonClick } from "@/lib/telemetry";
import { SymbolicAchievementsModal } from "@/components/gamification/SymbolicAchievementsModal";

interface AreaMeta {
  id: ThematicAreaId;
  name: string;
  icon: string;
  collectionsCount: number;
  actionCount: number;
  routesCount: number;
  description: string;
  technologiesSample: string;
}

const AREAS_CATALOG: readonly AreaMeta[] = [
  {
    id: "fundamentals",
    name: "Fundamentos",
    icon: "🧩",
    collectionsCount: 5,
    actionCount: 5,
    routesCount: 10,
    description: "Algoritmos esenciales, matemáticas para programación, lógica y complejidad Big-O.",
    technologiesSample: "Algoritmos · Pensamiento Lógico · Estructuras",
  },
  {
    id: "languages",
    name: "Lenguajes",
    icon: "🌐",
    collectionsCount: 27,
    actionCount: 27,
    routesCount: 54,
    description: "Sintaxis, gestión de memoria (Stack vs Heap) y modelos de ejecución de 27 lenguajes.",
    technologiesSample: "JavaScript, TypeScript, Python, Rust, Go, C++, C#, Java…",
  },
  {
    id: "interfaces",
    name: "Diseño e interfaces",
    icon: "🎨",
    collectionsCount: 9,
    actionCount: 9,
    routesCount: 18,
    description: "Sistemas de diseño, reconciliación DOM, accesibilidad WCAG y apps móviles.",
    technologiesSample: "HTML, CSS, React, Vue, Svelte, Tailwind, React Native…",
  },
  {
    id: "platforms",
    name: "Plataforma y servidor",
    icon: "⚙️",
    collectionsCount: 10,
    actionCount: 10,
    routesCount: 20,
    description: "Runtimes de servidor, APIs concurrentes, arquitectura backend y resiliencia.",
    technologiesSample: "Node.js, Deno, Bun, Express, Fastify, Next.js, NestJS…",
  },
  {
    id: "data",
    name: "Datos",
    icon: "🗄️",
    collectionsCount: 10,
    actionCount: 10,
    routesCount: 20,
    description: "Modelado relacional ACID, motores NoSQL, caché en memoria y persistencia distribuida.",
    technologiesSample: "PostgreSQL, MySQL, Redis, MongoDB, GraphQL, SQLite…",
  },
  {
    id: "versioning",
    name: "Control de versiones y calidad",
    icon: "🛡️",
    collectionsCount: 4,
    actionCount: 4,
    routesCount: 8,
    description: "Grafo DAG de Git, colaboración con GitHub, análisis estático SAST y depuración.",
    technologiesSample: "Git, GitHub, Chrome DevTools, Testing & CI",
  },
  {
    id: "delivery",
    name: "Infraestructura y entrega",
    icon: "🚀",
    collectionsCount: 8,
    actionCount: 8,
    routesCount: 16,
    description: "Aislamiento de contenedores, Linux, nubes públicas, CI/CD y despliegue continuo.",
    technologiesSample: "Docker, Kubernetes, Linux, NGINX, AWS, Cloudflare…",
  },
];

export function HomeAchievementsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { questsProgress, achievements } = useQuests();

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
    trackButtonClick("btn_open_trophies_modal", "Abrir Galería de Trofeos", "home_trophies_section");
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Conteo total de trofeos desbloqueados por el usuario
  const unlockedCount = Object.values(questsProgress).filter((p) => p.isUnlocked).length;

  return (
    <section
      className="home-trophies-section"
      id="trofeos-areas"
      aria-label="Metas de aprendizaje y trofeos de completado por área"
    >
      {/* Encabezado con Títulos Grandes y Confortables */}
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">METAS Y RECONOCIMIENTOS DE ARQUITECTURA</span>
        <h2 className="home-trophies__main-title">
          Trofeos de Completado por Área
        </h2>
        <p className="home-section-lead">
          Dev Visualizer cuenta con <strong>146 rutas canónicas</strong> (73 colecciones teóricas y 73 casos prácticos «En Acción») organizadas en <strong>7 áreas oficiales</strong>. Resuelve los quizzes de cada área para desbloquear su trofeo de completado.
        </p>

        {/* Resumen de Trofeos Desbloqueados */}
        <div className="home-trophies__status-pill">
          <span className="home-trophies__status-icon" aria-hidden="true">🏆</span>
          <span>
            {unlockedCount === 0
              ? "Aún no has desbloqueado trofeos. ¡Comienza con tu primera área!"
              : `${unlockedCount} de 7 trofeos canónicos desbloqueados`}
          </span>
          <button
            type="button"
            className="home-trophies__view-all-btn"
            onClick={handleOpenModal}
          >
            Ver Galería Completa
          </button>
        </div>
      </div>

      {/* Cuadrícula de las 7 Áreas con Tarjetas Cómodas y Fáciles de Leer */}
      <div className="home-trophies-grid">
        {AREAS_CATALOG.map((area) => {
          const progress = questsProgress[area.id];
          const isUnlocked = progress?.isUnlocked ?? false;
          const completedQuizzes = progress?.completedQuizzes ?? 0;
          const totalQuizzes = progress?.totalQuizzes ?? area.collectionsCount;
          const percentage = progress?.percentage ?? 0;

          // Buscar el logro asociado a esta área
          const achievement =
            achievements.find((a) => a.areaId === area.id) ??
            symbolicAchievements.find((a) => a.areaId === area.id);

          return (
            <article
              key={area.id}
              className={`home-trophy-card ${
                isUnlocked ? "home-trophy-card--unlocked" : ""
              }`}
              id={`trophy-card-${area.id}`}
            >
              {/* Encabezado de la Tarjeta */}
              <div className="home-trophy-card__top">
                <div className="home-trophy-card__icon-wrap" aria-hidden="true">
                  <span className="home-trophy-card__icon">{area.icon}</span>
                </div>
                <div className="home-trophy-card__badge-wrap">
                  {isUnlocked ? (
                    <span className="home-trophy-card__badge home-trophy-card__badge--unlocked">
                      🏆 ¡COMPLETADO!
                    </span>
                  ) : percentage > 0 ? (
                    <span className="home-trophy-card__badge home-trophy-card__badge--progress">
                      ⚡ {percentage}% COMPLETADO
                    </span>
                  ) : (
                    <span className="home-trophy-card__badge home-trophy-card__badge--pending">
                      🔒 META DE ÁREA
                    </span>
                  )}
                </div>
              </div>

              {/* Título de Área Grande y Cómodo */}
              <h3 className="home-trophy-card__area-name">{area.name}</h3>

              {/* Título del Trofeo Simbólico */}
              <div className="home-trophy-card__trophy-title">
                <span className="home-trophy-card__trophy-label">Trofeo Simbólico:</span>
                <strong>{achievement?.badgeTitle ?? "Maestro del Área"}</strong>
              </div>

              {/* Descripción Sencilla sin Muro de Texto */}
              <p className="home-trophy-card__desc">{area.description}</p>

              {/* Desglose de Números Canónicos */}
              <div className="home-trophy-card__breakdown">
                <div className="home-trophy-card__stat">
                  <strong>{area.collectionsCount}</strong>
                  <span>Colecciones</span>
                </div>
                <span className="home-trophy-card__stat-sep" aria-hidden="true">·</span>
                <div className="home-trophy-card__stat">
                  <strong>{area.actionCount}</strong>
                  <span>En Acción</span>
                </div>
                <span className="home-trophy-card__stat-sep" aria-hidden="true">·</span>
                <div className="home-trophy-card__stat">
                  <strong>{area.routesCount}</strong>
                  <span>Rutas Canónicas</span>
                </div>
              </div>

              {/* Barra de Progreso Semántica Accesible */}
              <div className="home-trophy-card__progress-wrap">
                <div className="home-trophy-card__progress-labels">
                  <span>Progreso de Quizzes</span>
                  <strong>{completedQuizzes} / {totalQuizzes} ({percentage}%)</strong>
                </div>
                <div
                  className="home-trophy-card__progress-track"
                  role="progressbar"
                  aria-valuenow={percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Progreso del área ${area.name}`}
                >
                  <div
                    className="home-trophy-card__progress-fill"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {/* Botón de Enlace para Explorar */}
              <div className="home-trophy-card__footer">
                <Link
                  href="/colecciones"
                  className="home-trophy-card__action"
                  onClick={() => {
                    trackButtonClick(
                      `trophy_card_explore_${area.id}`,
                      `Explorar área ${area.name}`,
                      "home_trophies_section"
                    );
                  }}
                >
                  <span>Explorar {area.name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal Accesible de Reconocimientos */}
      <SymbolicAchievementsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
