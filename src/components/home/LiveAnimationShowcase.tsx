"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

type ShowcaseSceneId = "event-loop" | "memory-map" | "bst-search" | "circuit-breaker" | "container-oci";

type SceneMeta = {
  id: ShowcaseSceneId;
  badge: string;
  title: string;
  technology: string;
  collectionHref: string;
  codeSnippet: string;
  explanation: string;
  totalSteps: number;
};

const SHOWCASE_SCENES: readonly SceneMeta[] = [
  {
    id: "event-loop",
    badge: "Runtime & Asincronía",
    title: "V8 Event Loop & Call Stack",
    technology: "JavaScript ES6+ / Node.js",
    collectionHref: "/javascript",
    codeSnippet: `console.log("1. Sync");
setTimeout(() => console.log("3. Macro (Timer)"), 0);
Promise.resolve().then(() => console.log("2. Micro (Promise)"));`,
    explanation: "El Call Stack procesa el código síncrono. Al vaciarse, la cola de Microtareas (Promises) tiene prioridad absoluta sobre la cola de Macrotareas (setTimeout/I/O).",
    totalSteps: 4,
  },
  {
    id: "memory-map",
    badge: "Sistemas & Memoria",
    title: "Stack, Heap & Punteros",
    technology: "C / C++ / Rust",
    collectionHref: "/c",
    codeSnippet: `int *ptr = (int*)malloc(sizeof(int));
*ptr = 0x42;
/* Stack: ptr -> 0x7ffd9a | Heap: [0x42] */
free(ptr);`,
    explanation: "Variables locales viven en el Stack (gestión LIFO automática). Bloques dinámicos residen en el Heap, indexados por punteros que requieren liberación explícita para evitar fugas.",
    totalSteps: 4,
  },
  {
    id: "bst-search",
    badge: "Algoritmos & Estructuras",
    title: "Búsqueda Binaria BST · O(log N)",
    technology: "Algoritmos y Estructuras",
    collectionHref: "/algoritmos",
    codeSnippet: `function search(node, val) {
  if (!node || node.val === val) return node;
  return val < node.val ? search(node.left, val) : search(node.right, val);
}`,
    explanation: "Cada comparación descarta la mitad del árbol restante. En un árbol balanceado de 1,000,000 elementos, el valor se localiza en un máximo de 20 comparaciones.",
    totalSteps: 3,
  },
  {
    id: "circuit-breaker",
    badge: "Sistemas Distribuidos",
    title: "Circuit Breaker & Fallback",
    technology: "Arquitectura Microservicios",
    collectionHref: "/apis",
    codeSnippet: `const breaker = new CircuitBreaker(paymentGateway, {
  failureThreshold: 5,
  cooldownPeriod: 10000
});
// CLOSED (Normal) -> OPEN (Aislamiento) -> HALF-OPEN (Sondeo)`,
    explanation: "Previene cascadas de fallos en arquitecturas distribuidas: al superar el umbral de errores, interrumpe el tráfico externo de inmediato y sirve respuestas degradadas desde caché.",
    totalSteps: 4,
  },
  {
    id: "container-oci",
    badge: "Infraestructura Cloud",
    title: "Aislamiento OCI & OverlayFS",
    technology: "Docker & Linux Namespaces",
    collectionHref: "/docker",
    codeSnippet: `unshare --pid --net --mount-proc /bin/sh
# Kernel namespaces: PID, NET, MNT, IPC, UTS
# OverlayFS: LowerDir (RO) + UpperDir (RW Copy-On-Write)`,
    explanation: "Un contenedor no es una máquina virtual: es un proceso nativo aislado por Linux Namespaces, limitado por Cgroups en CPU/RAM y unificado por capas OverlayFS.",
    totalSteps: 4,
  },
];

export function LiveAnimationShowcase() {
  const [activeSceneId, setActiveSceneId] = useState<ShowcaseSceneId>("event-loop");
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scene = SHOWCASE_SCENES.find((s) => s.id === activeSceneId) ?? SHOWCASE_SCENES[0];

  const handleNextStep = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % scene.totalSteps);
  }, [scene.totalSteps]);

  const handleReset = useCallback(() => {
    setCurrentStep(0);
  }, []);

  const handleSelectScene = (id: ShowcaseSceneId) => {
    setActiveSceneId(id);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % scene.totalSteps);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying, scene.totalSteps]);

  return (
    <div className="live-showcase-container" aria-label="Banco interactivo de animaciones técnicas">
      {/* ── Barra Superior de Selección Técnica ── */}
      <div className="live-showcase-tabs" role="tablist" aria-label="Seleccionar mecanismo interactivo">
        {SHOWCASE_SCENES.map((s) => {
          const isActive = s.id === activeSceneId;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`live-showcase-tab-btn ${isActive ? "live-showcase-tab-btn--active" : ""}`}
              onClick={() => handleSelectScene(s.id)}
            >
              <span className="live-showcase-tab-badge">{s.technology.split("/")[0].trim()}</span>
              <span className="live-showcase-tab-title">{s.title.split("·")[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* ── Lienzo Principal de Simulación ── */}
      <div className="live-showcase-workbench">
        {/* Cabecera del Workbench */}
        <div className="live-showcase-header">
          <div className="live-showcase-title-block">
            <span className="live-showcase-meta-tag">{scene.badge}</span>
            <h3 className="live-showcase-title">{scene.title}</h3>
            <span className="live-showcase-tech-label">Tecnología: {scene.technology}</span>
          </div>

          <div className="live-showcase-controls">
            <button
              type="button"
              className="live-control-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pausar animación" : "Reanudar animación"}
            >
              {isPlaying ? (
                <>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                  <span>Pausa</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>Reproducir</span>
                </>
              )}
            </button>

            <button
              type="button"
              className="live-control-btn"
              onClick={handleNextStep}
              aria-label="Avanzar un paso en la simulación"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polygon points="5 4 15 12 5 20 5 4" />
                <line x1="19" y1="5" x2="19" y2="19" />
              </svg>
              <span>Paso ({currentStep + 1}/{scene.totalSteps})</span>
            </button>

            <button
              type="button"
              className="live-control-btn live-control-btn--muted"
              onClick={handleReset}
              aria-label="Reiniciar simulación desde el inicio"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        {/* Rejilla de Visualización y Código */}
        <div className="live-showcase-grid">
          {/* Panel Izquierdo: Código Fuente Observable */}
          <div className="live-showcase-code-panel">
            <div className="live-panel-header">
              <span className="live-panel-header-dot" />
              <span className="live-panel-header-title">Código en Ejecución</span>
              <span className="live-panel-step-indicator">Paso {currentStep + 1} de {scene.totalSteps}</span>
            </div>
            <pre className="live-code-block">
              <code>{scene.codeSnippet}</code>
            </pre>
            <div className="live-explanation-box">
              <div className="live-explanation-header">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--cyan)" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <strong>Modelo Mental:</strong>
              </div>
              <p>{scene.explanation}</p>
            </div>
          </div>

          {/* Panel Derecho: Escena Animada Determinista */}
          <div className="live-showcase-stage-panel">
            <div className="live-panel-header">
              <span className="live-panel-header-dot live-panel-header-dot--cyan" />
              <span className="live-panel-header-title">Estado Interno del Sistema</span>
              <span className="live-panel-clock-tag">STATUS: {isPlaying ? "EJECUTANDO" : "PAUSADO"}</span>
            </div>

            <div className="live-stage-canvas">
              {/* ── Escena 1: Event Loop ── */}
              {scene.id === "event-loop" && (
                <div className="stage-event-loop">
                  <div className="stage-loop-col">
                    <div className="stage-col-header">Call Stack (LIFO)</div>
                    <div className="stage-col-body">
                      {currentStep === 0 && <div className="stage-token stage-token--cyan stage-token--active">main() → console.log(&quot;1. Sync&quot;)</div>}
                      {currentStep === 1 && <div className="stage-token stage-token--violet stage-token--active">setTimeout() registrado en Timers API</div>}
                      {currentStep === 2 && <div className="stage-token stage-token--green stage-token--active">Microtask: Promise.then callback</div>}
                      {currentStep === 3 && <div className="stage-token stage-token--yellow stage-token--active">Macrotask: Timer callback ejecutado</div>}
                    </div>
                  </div>

                  <div className="stage-loop-col">
                    <div className="stage-col-header">Microtask Queue (Prioridad 1)</div>
                    <div className="stage-col-body">
                      <div className={`stage-token stage-token--green ${currentStep >= 1 && currentStep <= 2 ? "stage-token--active" : "stage-token--dimmed"}`}>
                        [PromiseReaction] console.log(&quot;2. Micro&quot;)
                      </div>
                      <span className="stage-subtext">Se vacía completamente antes de pasar al render o timer</span>
                    </div>
                  </div>

                  <div className="stage-loop-col">
                    <div className="stage-col-header">Macrotask Queue (Prioridad 2)</div>
                    <div className="stage-col-body">
                      <div className={`stage-token stage-token--yellow ${currentStep >= 2 ? "stage-token--active" : "stage-token--dimmed"}`}>
                        [TimerCallback] console.log(&quot;3. Macro&quot;)
                      </div>
                      <span className="stage-subtext">Espera hasta que el Call Stack y Microtasks estén en cero</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Escena 2: Memory Map ── */}
              {scene.id === "memory-map" && (
                <div className="stage-memory-map">
                  <div className="stage-mem-section">
                    <div className="stage-mem-header">Stack Frame (Direcciones Altas: 0x7ffd...)</div>
                    <div className="stage-mem-cells">
                      <div className="stage-mem-cell">
                        <span className="stage-mem-addr">0x7ffd9a</span>
                        <span className="stage-mem-var">int *ptr</span>
                        <span className={`stage-mem-val ${currentStep >= 1 ? "stage-mem-val--highlight" : ""}`}>
                          {currentStep === 0 ? "0x0 (NULL)" : currentStep < 3 ? "→ 0x55a100 (Heap)" : "0x0 (LIBERADO)"}
                        </span>
                      </div>
                      <div className="stage-mem-cell">
                        <span className="stage-mem-addr">0x7ffd94</span>
                        <span className="stage-mem-var">int return_addr</span>
                        <span className="stage-mem-val">0x401020</span>
                      </div>
                    </div>
                  </div>

                  <div className="stage-mem-arrow" aria-hidden="true">
                    <span>{currentStep === 1 || currentStep === 2 ? "REFERENCIANDO HEAP" : "SIN REFERENCIA ACTIVA"}</span>
                    <div className={`stage-arrow-line ${currentStep === 1 || currentStep === 2 ? "stage-arrow-line--active" : ""}`} />
                  </div>

                  <div className="stage-mem-section">
                    <div className="stage-mem-header">Heap (Memoria Dinámica: 0x55a1...)</div>
                    <div className="stage-mem-cells">
                      <div className={`stage-mem-cell stage-mem-cell--heap ${currentStep >= 1 && currentStep < 3 ? "stage-mem-cell--allocated" : ""}`}>
                        <span className="stage-mem-addr">0x55a100</span>
                        <span className="stage-mem-var">Bloque [4 bytes]</span>
                        <span className="stage-mem-val">
                          {currentStep === 0 && "[NO ALOCADO]"}
                          {currentStep === 1 && "0x00000000 (malloc)"}
                          {currentStep === 2 && "0x00000042 (*ptr = 0x42)"}
                          {currentStep === 3 && "[LIBERADO - free()]"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Escena 3: BST Search ── */}
              {scene.id === "bst-search" && (
                <div className="stage-bst">
                  <div className="stage-bst-target">
                    <span>Buscando valor objetivo:</span>
                    <strong>TARGET = 63</strong>
                  </div>
                  <div className="stage-bst-tree">
                    {/* Raíz */}
                    <div className={`stage-bst-node ${currentStep === 0 ? "stage-bst-node--active" : "stage-bst-node--visited"}`}>
                      <span>42</span>
                      <small>Raíz (63 &gt; 42 → DERECHA)</small>
                    </div>

                    <div className="stage-bst-level">
                      {/* Subárbol Izquierdo descartado */}
                      <div className="stage-bst-node stage-bst-node--pruned">
                        <span>21</span>
                        <small>Descartado</small>
                      </div>

                      {/* Subárbol Derecho evaluado */}
                      <div className={`stage-bst-node ${currentStep === 1 ? "stage-bst-node--active" : currentStep > 1 ? "stage-bst-node--visited" : ""}`}>
                        <span>75</span>
                        <small>Paso 2 (63 &lt; 75 → IZQUIERDA)</small>
                      </div>
                    </div>

                    <div className="stage-bst-level">
                      <div className="stage-bst-node stage-bst-node--empty" />
                      <div className={`stage-bst-node stage-bst-node--success ${currentStep === 2 ? "stage-bst-node--active" : ""}`}>
                        <span>63</span>
                        <small>¡ENCONTRADO EN O(log N)!</small>
                      </div>
                      <div className="stage-bst-node stage-bst-node--pruned">
                        <span>89</span>
                        <small>Descartado</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Escena 4: Circuit Breaker ── */}
              {scene.id === "circuit-breaker" && (
                <div className="stage-circuit-breaker">
                  <div className="stage-breaker-states">
                    <div className={`stage-state-card ${currentStep === 0 ? "stage-state-card--active-green" : ""}`}>
                      <span className="stage-state-badge">ESTADO 1</span>
                      <strong>CLOSED</strong>
                      <p>Tráfico 100% admitido. Tasa de fallos &lt; 5%. Salud normal.</p>
                    </div>

                    <div className={`stage-state-card ${currentStep === 1 || currentStep === 2 ? "stage-state-card--active-red" : ""}`}>
                      <span className="stage-state-badge">ESTADO 2</span>
                      <strong>OPEN</strong>
                      <p>Umbral superado (5 errores). Aislamiento total: respuestas inmediatas con fallback.</p>
                    </div>

                    <div className={`stage-state-card ${currentStep === 3 ? "stage-state-card--active-yellow" : ""}`}>
                      <span className="stage-state-badge">ESTADO 3</span>
                      <strong>HALF-OPEN</strong>
                      <p>Sondeo de canario: 1 solicitud de prueba enviada para verificar recuperación.</p>
                    </div>
                  </div>

                  <div className="stage-breaker-telemetry">
                    <span>TELEMETRÍA EN VIVO:</span>
                    <code>
                      {currentStep === 0 && "REQ #1042: HTTP 200 OK | Latencia: 14ms | Circuit: CLOSED"}
                      {currentStep === 1 && "REQ #1043: HTTP 504 GATEWAY TIMEOUT | Error count: 5/5 -> TRIP CIRCUIT"}
                      {currentStep === 2 && "REQ #1044: FAST-FAIL [CIRCUIT OPEN] | Fallback servido en 1ms"}
                      {currentStep === 3 && "REQ #1045: CANARY PROBE -> HTTP 200 OK | Auto-Resetting to CLOSED"}
                    </code>
                  </div>
                </div>
              )}

              {/* ── Escena 5: Container OCI ── */}
              {scene.id === "container-oci" && (
                <div className="stage-container-oci">
                  <div className="stage-oci-layers">
                    <div className={`stage-oci-layer stage-oci-layer--rw ${currentStep >= 2 ? "stage-oci-layer--highlight" : ""}`}>
                      <div className="stage-layer-label">
                        <strong>Layer RW (Container Layer)</strong>
                        <span>Copy-On-Write · /var/log/app.log modificado</span>
                      </div>
                      <span className="stage-layer-status">LEÍBLE / ESCRIBIBLE</span>
                    </div>

                    <div className="stage-oci-layer stage-oci-layer--ro">
                      <div className="stage-layer-label">
                        <strong>Layer RO (Node.js &amp; App Code)</strong>
                        <span>SHA: 4a2b9f1... · /usr/src/app</span>
                      </div>
                      <span className="stage-layer-status">SÓLO LECTURA</span>
                    </div>

                    <div className="stage-oci-layer stage-oci-layer--ro">
                      <div className="stage-layer-label">
                        <strong>Base Image (Alpine Linux)</strong>
                        <span>SHA: 8c3d11e... · Kernel ABI compatible</span>
                      </div>
                      <span className="stage-layer-status">SÓLO LECTURA</span>
                    </div>
                  </div>

                  <div className="stage-oci-namespaces">
                    <div className="stage-ns-pill"><span>PID:</span> In-Container PID 1 (Host PID: 18402)</div>
                    <div className="stage-ns-pill"><span>NET:</span> veth0 172.17.0.2 (Port 8080:80)</div>
                    <div className="stage-ns-pill"><span>CGROUP:</span> RAM limit: 512 MB | CPU: 100%</div>
                  </div>
                </div>
              )}
            </div>

            {/* Pie del Workbench con Acción Canónica */}
            <div className="live-workbench-footer">
              <div className="live-footer-metric">
                <span className="live-footer-dot" />
                <span>Modelo determinista sin cajas negras ni suposiciones</span>
              </div>
              <Link href={scene.collectionHref} className="live-footer-cta-btn">
                <span>Ver colección completa de {scene.technology.split("/")[0].trim()}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
