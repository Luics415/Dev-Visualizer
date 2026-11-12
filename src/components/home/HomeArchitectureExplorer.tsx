/**
 * Dev Visualizer — Explorador Interactivo de Arquitectura por Áreas (Feature F8/F20)
 * src/components/home/HomeArchitectureExplorer.tsx
 *
 * Reemplaza el antiguo simulador de Quicksort con una consola de arquitectura viva
 * que expone las 7 áreas canónicas del atlas, sus 146 rutas canónicas (73 colecciones
 * teóricas + 73 casos prácticos en acción) y los trofeos de completado asociados.
 *
 * Mantiene id="hero-simulator-workbench" para preservar compatibilidad con SpotlightTour.
 */

"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import Link from "next/link";
import { trackButtonClick } from "@/lib/telemetry";
import { useQuests } from "@/hooks/useQuests";
import { type ThematicAreaId } from "@/data/symbolicAchievements";

interface ArchitectureAreaSpec {
  id: ThematicAreaId;
  name: string;
  icon: string;
  badge: string;
  collectionsCount: number;
  actionCount: number;
  routesCount: number;
  trophyTitle: string;
  fileName: string;
  architectureConcept: string;
  codeSnippet: readonly string[];
}

const ARCHITECTURE_AREAS: readonly ArchitectureAreaSpec[] = [
  {
    id: "fundamentals",
    name: "Fundamentos",
    icon: "🧩",
    badge: "5 COL · 10 RUTAS",
    collectionsCount: 5,
    actionCount: 5,
    routesCount: 10,
    trophyTitle: "Iniciador de Algoritmos y Lógica",
    fileName: "fundamentos-algoritmos.ts",
    architectureConcept: "Estructuras de datos, complejidad temporal O(N) y grafos en memoria",
    codeSnippet: [
      "// ÁREA 01 · Fundamentos de Software y Lógica",
      "interface AlgorithmicNode<T> {",
      "  readonly value: T;",
      "  edges: Map<string, number>; // Grafo ponderado",
      "  complexity: 'O(1)' | 'O(log N)' | 'O(N)';",
      "}",
      "",
      "function traverseDAG<T>(root: AlgorithmicNode<T>): void {",
      "  // Recorrido topológico sin ciclos ni fugas de memoria",
      "  const visited = new Set<AlgorithmicNode<T>>();",
      "  const callStack: AlgorithmicNode<T>[] = [root];",
      "  while (callStack.length > 0) {",
      "    const current = callStack.pop()!;",
      "    if (!visited.has(current)) visited.add(current);",
      "  }",
      "}",
    ],
  },
  {
    id: "languages",
    name: "Lenguajes",
    icon: "🌐",
    badge: "27 COL · 54 RUTAS",
    collectionsCount: 27,
    actionCount: 27,
    routesCount: 54,
    trophyTitle: "Políglota de Código",
    fileName: "v8-runtime-engine.ts",
    architectureConcept: "Modelos de memoria (Stack vs Heap), ciclo de eventos V8 y tipado fuerte",
    codeSnippet: [
      "// ÁREA 02 · 27 Lenguajes: Sintaxis, Memoria y Paradigmas",
      "class V8RuntimeExecutionCoordinator {",
      "  private callStack: Frame[] = [];",
      "  private microtasks: Task[] = []; // Prioridad sobre macrotareas",
      "",
      "  public drainQueue(): void {",
      "    while (this.callStack.length > 0) {",
      "      const frame = this.callStack.pop()!;",
      "      frame.evaluate();",
      "    }",
      "    // Vaciado determinista de microtareas antes del próximo tick",
      "    this.microtasks.forEach((task) => task.run());",
      "  }",
      "}",
    ],
  },
  {
    id: "interfaces",
    name: "Diseño e interfaces",
    icon: "🎨",
    badge: "9 COL · 18 RUTAS",
    collectionsCount: 9,
    actionCount: 9,
    routesCount: 18,
    trophyTitle: "Arquitecto de Experiencias y UI",
    fileName: "ui-reconciliation-wcag.tsx",
    architectureConcept: "Reconciliación DOM, tokens de diseño y accesibilidad WCAG 2.1 AA",
    codeSnippet: [
      "// ÁREA 03 · Interfaces Accesibles y Sistemas de Diseño",
      "export function AccessibleComponent({ title, isLive }: Props) {",
      "  return (",
      "    <article",
      "      role='region'",
      "      aria-label={title}",
      "      aria-live={isLive ? 'polite' : 'off'}",
      "    >",
      "      <header className='design-tokens-header'>",
      "        <h2>{title}</h2>",
      "        <span className='contrast-ratio-badge'>WCAG AA · 4.5:1</span>",
      "      </header>",
      "    </article>",
      "  );",
      "}",
    ],
  },
  {
    id: "platforms",
    name: "Plataforma y servidor",
    icon: "⚙️",
    badge: "10 COL · 20 RUTAS",
    collectionsCount: 10,
    actionCount: 10,
    routesCount: 20,
    trophyTitle: "Especialista en Sistemas y Backend",
    fileName: "circuit-breaker-resilience.ts",
    architectureConcept: "Runtimes de servidor, APIs concurrentes y patrón Circuit Breaker",
    codeSnippet: [
      "// ÁREA 04 · Arquitectura Backend y Concurrencia de Servidor",
      "class ResilientCircuitBreaker {",
      "  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';",
      "  private failureThreshold = 5;",
      "  private failureCount = 0;",
      "",
      "  async execute<T>(operation: () => Promise<T>): Promise<T> {",
      "    if (this.state === 'OPEN') {",
      "      throw new Error('CircuitBreakerOpen: Fallback activado');",
      "    }",
      "    return await operation().catch((err) => this.recordFailure(err));",
      "  }",
      "}",
    ],
  },
  {
    id: "data",
    name: "Datos",
    icon: "🗄️",
    badge: "10 COL · 20 RUTAS",
    collectionsCount: 10,
    actionCount: 10,
    routesCount: 20,
    trophyTitle: "Maestro de Datos y Persistencia",
    fileName: "acid-storage-engine.ts",
    architectureConcept: "Transacciones ACID, índices B-Tree, particionado y persistencia NoSQL",
    codeSnippet: [
      "// ÁREA 05 · Modelado de Datos, Motor Relacional y Persistencia",
      "interface ACIDTransactionCoordinator {",
      "  begin(): TransactionContext;",
      "  writeAheadLog(entry: WALEntry): Promise<void>;",
      "  commit(tx: TransactionContext): Promise<CommitResult>;",
      "  rollback(tx: TransactionContext): Promise<void>;",
      "}",
      "",
      "// Aislamiento serializable con consistencia estricta",
      "const isolationLevel = 'SERIALIZABLE' as const;",
      "const storageReplicaSet = ['primary-rw', 'replica-01', 'replica-02'];",
    ],
  },
  {
    id: "versioning",
    name: "Control de versiones",
    icon: "🛡️",
    badge: "4 COL · 8 RUTAS",
    collectionsCount: 4,
    actionCount: 4,
    routesCount: 8,
    trophyTitle: "Guardián de Integración y Calidad",
    fileName: "git-dag-history.ts",
    architectureConcept: "Grafo acíclico dirigido (DAG) de Git, ramas atómicas y compuertas CI",
    codeSnippet: [
      "// ÁREA 06 · Control de Versiones con Git, GitHub y Análisis SAST",
      "interface GitCommitObject {",
      "  readonly hash: string; // SHA-1 / SHA-256",
      "  readonly tree: string;",
      "  readonly parents: readonly string[]; // Grafo DAG",
      "  readonly signature: 'GPG_VERIFIED' | 'UNSIGNED';",
      "}",
      "",
      "function enforceQualityGate(pr: PullRequest): boolean {",
      "  return pr.sastStatus === 'PASS' && pr.testCoverage >= 90;",
      "}",
    ],
  },
  {
    id: "delivery",
    name: "Infraestructura",
    icon: "🚀",
    badge: "8 COL · 16 RUTAS",
    collectionsCount: 8,
    actionCount: 8,
    routesCount: 16,
    trophyTitle: "Ingeniero de Despliegue y DevOps",
    fileName: "docker-namespaces-oci.ts",
    architectureConcept: "Aislamiento en contenedores, namespaces Linux, cgroups y pipelines",
    codeSnippet: [
      "// ÁREA 07 · Infraestructura, Docker y Despliegue Continuo",
      "interface ContainerIsolationProfile {",
      "  namespaces: ['pid', 'net', 'ipc', 'mnt', 'uts', 'user'];",
      "  cgroups: { cpuShares: 1024; memoryLimitMB: 512 };",
      "  securityOpts: ['no-new-privileges:true'];",
      "}",
      "",
      "function buildMultiStageOCIImage(targetStage: string): ImageDigest {",
      "  // Compilación hermética y contenedor final distroless",
      "  return digestFor(targetStage);",
      "}",
    ],
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

  // Auto-rotación didáctica entre las 7 áreas (pausable por el usuario)
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
      aria-label="Consola interactiva de las 7 áreas de arquitectura de software"
    >
      {/* Barra Superior con Controles de Ventana y Estado Canónico */}
      <div className="hero-workbench__titlebar">
        <div className="hero-workbench__dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="hero-workbench__filename">
          {activeArea.fileName}
        </span>
        <span className="hero-workbench__badge">
          🟢 7 ÁREAS · 146 RUTAS
        </span>
      </div>

      {/* Selector de Pestañas de las 7 Áreas Temáticas */}
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
              <span className="hero-workbench__tab-icon" aria-hidden="true">
                {area.icon}
              </span>
              <span className="hero-workbench__tab-name">{area.name}</span>
            </button>
          );
        })}
      </div>

      {/* Cuerpo Principal: Código y Modelo Arquitectónico */}
      <div className="hero-workbench__body">
        {/* Editor de Código y Modelo Mental */}
        <div className="hero-workbench__code-panel">
          <pre className="hero-workbench__code">
            <code>
              {activeArea.codeSnippet.map((line, lineIdx) => (
                <div key={lineIdx} className="hero-workbench__code-line">
                  <span className="hero-workbench__line-number" aria-hidden="true">
                    {lineIdx + 1}
                  </span>
                  <span className="hero-workbench__line-content">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Panel Lateral de Datos de Área, Métricas y Trofeos */}
        <div className="hero-workbench__meta-panel">
          <div className="hero-workbench__area-header">
            <span className="hero-workbench__area-tag">
              ÁREA {selectedIndex + 1} DE 7
            </span>
            <h3 className="hero-workbench__area-title">
              <span aria-hidden="true">{activeArea.icon}</span> {activeArea.name}
            </h3>
            <p className="hero-workbench__area-concept">
              {activeArea.architectureConcept}
            </p>
          </div>

          {/* Métricas Canónicas del Área */}
          <div className="hero-workbench__metrics-box">
            <div className="hero-workbench__metric">
              <strong>{activeArea.collectionsCount}</strong>
              <span>Colecciones</span>
            </div>
            <div className="hero-workbench__metric-divider" aria-hidden="true" />
            <div className="hero-workbench__metric">
              <strong>{activeArea.actionCount}</strong>
              <span>En Acción</span>
            </div>
            <div className="hero-workbench__metric-divider" aria-hidden="true" />
            <div className="hero-workbench__metric">
              <strong>{activeArea.routesCount}</strong>
              <span>Rutas</span>
            </div>
          </div>

          {/* Tarjeta de Trofeo de Completado del Área */}
          <div
            className={`hero-workbench__trophy-card ${
              isAreaUnlocked ? "hero-workbench__trophy-card--unlocked" : ""
            }`}
          >
            <div className="hero-workbench__trophy-icon" aria-hidden="true">
              {isAreaUnlocked ? "🏆" : activeArea.icon}
            </div>
            <div className="hero-workbench__trophy-info">
              <div className="hero-workbench__trophy-status">
                {isAreaUnlocked ? "TROFEO DESBLOQUEADO" : "META / TROFEO DE ÁREA"}
              </div>
              <div className="hero-workbench__trophy-name">
                {activeArea.trophyTitle}
              </div>
              <div className="hero-workbench__trophy-progress-label">
                {completedQuizzes} / {totalQuizzes} quizzes aprobados ({percentage}%)
              </div>
            </div>
          </div>

          {/* Enlace Directo a Colecciones de Esta Área */}
          <div className="hero-workbench__area-actions">
            <Link
              href="/colecciones"
              className="hero-workbench__explore-btn"
              onClick={() => {
                trackButtonClick(
                  `hero_explore_area_${activeArea.id}`,
                  `Explorar ${activeArea.name}`,
                  "hero_workbench"
                );
              }}
            >
              <span>Explorar {activeArea.name}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Barra de Controles Inferior */}
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
            ◀
          </button>
          <button
            type="button"
            className={`hero-workbench__btn ${isAutoPlaying ? "hero-workbench__btn--active" : ""}`}
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? "Pausar rotación" : "Reproducir rotación"}
            title={isAutoPlaying ? "Pausar rotación" : "Reproducir rotación"}
          >
            {isAutoPlaying ? "⏸ Pausar" : "▶ Girar"}
          </button>
          <button
            type="button"
            className="hero-workbench__btn"
            onClick={handleNext}
            aria-label="Siguiente área"
            title="Siguiente área"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
