/**
 * Dev Visualizer — Modal y Galería de Logros Simbólicos por Áreas Temáticas (Feature F21)
 * src/components/gamification/SymbolicAchievementsModal.tsx
 *
 * Visualiza el avance de quests y logros obtenidos organizados estrictamente
 * por las 7 áreas temáticas oficiales de Dev Visualizer.
 *
 * Cumplimiento de estándares y accesibilidad (WCAG 2.1 AA):
 * - Semántica dialog accesible (role="dialog", aria-modal="true", aria-label="Galería de Logros Simbólicos").
 * - Botón de cierre con etiqueta explícita (aria-label="Cerrar modal de logros").
 * - Captura y cierre con tecla Escape registrada en window.
 * - Bloqueo de scroll corporal (document.body.style.overflow = "hidden") restaurado a "" al cerrar.
 * - Diferenciación visual de estados bloqueado y desbloqueado con alto contraste.
 * - Barras de progreso semánticas (role="progressbar") con porcentaje por área.
 * - Disclaimer visible y explícito de carácter didáctico, simbólico y no oficial.
 */

"use client";

import { useEffect, useRef } from "react";
import { useQuests } from "@/hooks/useQuests";
import type { SymbolicAchievement, ThematicAreaId } from "@/data/symbolicAchievements";
import type { QuestProgress } from "@/lib/questsEngine";

export interface SymbolicAchievementsModalProps {
  isOpen: boolean;
  onClose: () => void;
  achievements?: SymbolicAchievement[];
  questsProgress?: Record<ThematicAreaId, QuestProgress>;
}

export function SymbolicAchievementsModal({
  isOpen,
  onClose,
  achievements: customAchievements,
  questsProgress: customProgress,
}: SymbolicAchievementsModalProps) {
  const questsHook = useQuests();
  const achievements = customAchievements ?? questsHook.achievements;
  const questsProgress = customProgress ?? questsHook.questsProgress;

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Implementación de Focus Trap accesible (WCAG 2.1 AA Criterios 2.1.2 y 2.4.3) y Escape
  useEffect(() => {
    if (!isOpen) return;

    // Guardar elemento activo previo para restaurar el foco al cerrar
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      previousActiveElementRef.current = document.activeElement;
    }

    // Foco inicial accesible en el botón de cierre o en el modal
    const focusTimer = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      } else if (modalRef.current) {
        modalRef.current.focus();
      }
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab") {
        if (!modalRef.current) return;

        const focusableSelectors = [
          'button:not([disabled])',
          '[href]',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])',
        ].join(", ");

        const focusableElements = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
        ).filter((el) => {
          return (
            el.offsetWidth > 0 ||
            el.offsetHeight > 0 ||
            (typeof el.getClientRects === "function" && el.getClientRects().length > 0)
          );
        });

        if (focusableElements.length === 0) {
          event.preventDefault();
          modalRef.current.focus();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement;

        if (event.shiftKey) {
          // Shift + Tab: ciclar hacia atrás
          if (activeElement === firstElement || !modalRef.current.contains(activeElement)) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: ciclar hacia adelante
          if (activeElement === lastElement || !modalRef.current.contains(activeElement)) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      // Restauración de foco al elemento previo
      if (
        previousActiveElementRef.current &&
        typeof previousActiveElementRef.current.focus === "function"
      ) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  // Manejo de bloqueo de scroll corporal (Scroll Lock)
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="symbolic-modal-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(4, 8, 15, 0.78)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "16px",
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Galería de Logros Simbólicos"
        className="symbolic-achievements-modal"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        style={{
          backgroundColor: "#0d131f",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "18px",
          width: "100%",
          maxWidth: "880px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.65)",
          color: "#e2e8f0",
          overflow: "hidden",
        }}
      >
        {/* Cabecera del Diálogo Modal */}
        <header
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "1.35rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#f8fafc",
              }}
            >
              <span>🏅</span> Galería de Logros Simbólicos
            </h2>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: "0.85rem",
                color: "#8d9bb1",
              }}
            >
              Progreso formativo en quests técnicos por las 7 áreas oficiales de Dev Visualizer
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal de logros"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "8px",
              color: "#cbd5e1",
              cursor: "pointer",
              padding: "6px 14px",
              fontSize: "1rem",
              lineHeight: 1,
              transition: "all 0.2s ease",
            }}
          >
            ✕
          </button>
        </header>

        {/* Disclaimer Pedagógico de No Oficialidad Visible */}
        <aside
          role="note"
          aria-label="Aviso pedagógico y de carácter simbólico"
          style={{
            margin: "16px 24px 0",
            padding: "12px 18px",
            backgroundColor: "rgba(56, 139, 253, 0.1)",
            border: "1px solid rgba(56, 139, 253, 0.35)",
            borderRadius: "10px",
            fontSize: "0.82rem",
            lineHeight: 1.5,
            color: "#60a5fa",
          }}
        >
          <strong>Aviso didáctico y pedagógico:</strong> Los logros, medallas y barras de progreso visualizados en esta galería son de carácter estrictamente simbólico y no oficial. Su propósito es exclusivamente formativo para incentivar la autoevaluación continua. No constituyen certificaciones formales ni avales profesionales de terceros.
        </aside>

        {/* Cuadrícula de las 7 Tarjetas con Scroll Interno */}
        <div
          style={{
            padding: "20px 24px",
            overflowY: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "16px",
          }}
        >
          {achievements.map((achievement) => {
            const progress = questsProgress[achievement.areaId] ?? {
              areaId: achievement.areaId,
              totalQuizzes: 0,
              completedQuizzes: 0,
              percentage: 0,
              isUnlocked: false,
            };

            const isUnlocked = progress.isUnlocked;

            return (
              <article
                key={achievement.id}
                id={achievement.id}
                className={`quest-card ${isUnlocked ? "quest-card--unlocked" : "quest-card--locked"}`}
                style={{
                  backgroundColor: isUnlocked
                    ? "rgba(34, 197, 94, 0.12)"
                    : "rgba(15, 23, 42, 0.8)",
                  border: isUnlocked
                    ? "1px solid #22c55e"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "14px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: isUnlocked
                    ? "0 0 16px rgba(34, 197, 94, 0.22)"
                    : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {/* Cabecera de la Tarjeta */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div
                    style={{
                      fontSize: "2.1rem",
                      lineHeight: 1,
                      filter: isUnlocked ? "none" : "grayscale(0.85)",
                      opacity: isUnlocked ? 1 : 0.6,
                    }}
                    aria-hidden="true"
                  >
                    {achievement.badgeIcon}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: isUnlocked ? "#4ade80" : "#94a3b8",
                        }}
                      >
                        {achievement.areaTitle}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: "12px",
                          backgroundColor: isUnlocked ? "rgba(34, 197, 94, 0.2)" : "rgba(148, 163, 184, 0.18)",
                          color: isUnlocked ? "#4ade80" : "#94a3b8",
                          border: isUnlocked ? "1px solid rgba(34, 197, 94, 0.4)" : "1px solid rgba(148, 163, 184, 0.25)",
                        }}
                      >
                        {isUnlocked ? "🏆 Desbloqueado" : "🔒 En progreso"}
                      </span>
                    </div>

                    <h3
                      style={{
                        margin: "4px 0 0",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: isUnlocked ? "#f8fafc" : "#cbd5e1",
                      }}
                    >
                      {achievement.badgeTitle}
                    </h3>
                  </div>
                </div>

                {/* Descripción Pedagógica */}
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.82rem",
                    color: "#94a3b8",
                    lineHeight: 1.45,
                  }}
                >
                  {achievement.description}
                </p>

                {/* Barra de Progreso y Métricas */}
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem" }}>
                    <span style={{ color: "#94a3b8" }}>
                      Quizzes: <b>{progress.completedQuizzes}</b> / <b>{progress.totalQuizzes}</b>
                    </span>
                    <span style={{ fontWeight: 700, color: isUnlocked ? "#4ade80" : "#60a5fa" }}>
                      {progress.percentage}%
                    </span>
                  </div>

                  <div
                    role="progressbar"
                    aria-valuenow={progress.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Progreso de quests en ${achievement.areaTitle}`}
                    style={{
                      height: "8px",
                      width: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${progress.percentage}%`,
                        backgroundColor: isUnlocked ? "#22c55e" : "#3b82f6",
                        borderRadius: "4px",
                        transition: "width 0.4s ease",
                      }}
                    />
                  </div>

                  {isUnlocked && progress.unlockedAt ? (
                    <small
                      style={{
                        fontSize: "0.7rem",
                        color: "#86efac",
                        marginTop: "2px",
                      }}
                    >
                      ✓ Desbloqueado el {new Date(progress.unlockedAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                    </small>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {/* Pie del Modal con Acción de Cierre */}
        <footer
          style={{
            padding: "16px 24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "rgba(10, 15, 26, 0.6)",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal de logros"
            style={{
              padding: "8px 20px",
              fontSize: "0.88rem",
              fontWeight: 600,
              backgroundColor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              color: "#f1f5f9",
              cursor: "pointer",
            }}
          >
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  );
}
