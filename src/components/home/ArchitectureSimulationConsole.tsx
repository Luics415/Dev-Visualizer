"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type SimulationMode = "quicksort" | "telemetry-chart" | "event-loop" | "circuit-breaker";

interface SimulationTab {
  id: SimulationMode;
  label: string;
  category: string;
  badge: string;
  complexity: string;
}

const SIMULATION_TABS: readonly SimulationTab[] = [
  {
    id: "quicksort",
    label: "Quicksort & Punteros L/R",
    category: "Algoritmos",
    badge: "Partición Hoare",
    complexity: "O(N log N)",
  },
  {
    id: "telemetry-chart",
    label: "Telemetría y Curva de Tráfico",
    category: "Sistemas",
    badge: "Throughput & p95",
    complexity: "Tiempo Real",
  },
  {
    id: "event-loop",
    label: "Event Loop & Call Stack V8",
    category: "Runtime",
    badge: "Microtasks vs Macros",
    complexity: "Tick Asíncrono",
  },
  {
    id: "circuit-breaker",
    label: "Circuit Breaker Resiliente",
    category: "Resiliencia",
    badge: "Closed / Open / Half",
    complexity: "Fallo Controlado",
  },
];

// 1. Quicksort Steps with array bars, pointers and explanation
interface QuicksortStep {
  array: { val: number; state: "default" | "pivot" | "comparing" | "swapping" | "sorted" }[];
  leftIdx: number;
  rightIdx: number;
  pivotIdx: number;
  desc: string;
  codeSnippet: string;
  comparisons: number;
  swaps: number;
}

const QS_STEPS: readonly QuicksortStep[] = [
  {
    array: [
      { val: 42, state: "pivot" },
      { val: 18, state: "default" },
      { val: 65, state: "default" },
      { val: 27, state: "default" },
      { val: 84, state: "default" },
      { val: 33, state: "default" },
    ],
    leftIdx: 0,
    rightIdx: 5,
    pivotIdx: 0,
    desc: "Inicializando partición de Hoare. Seleccionamos array[0] = 42 como PIVOTE. Puntero L inicia en 0 y puntero R en 5.",
    codeSnippet: "const pivot = arr[low]; let L = low, R = high;",
    comparisons: 0,
    swaps: 0,
  },
  {
    array: [
      { val: 42, state: "pivot" },
      { val: 18, state: "default" },
      { val: 65, state: "comparing" },
      { val: 27, state: "default" },
      { val: 84, state: "default" },
      { val: 33, state: "comparing" },
    ],
    leftIdx: 2,
    rightIdx: 5,
    pivotIdx: 0,
    desc: "Avanzando punteros: L busca un elemento >= pivote (encuentra 65 en índice 2). R busca un elemento <= pivote (encuentra 33 en índice 5).",
    codeSnippet: "while (arr[L] < pivot) L++; while (arr[R] > pivot) R--;",
    comparisons: 4,
    swaps: 0,
  },
  {
    array: [
      { val: 42, state: "pivot" },
      { val: 18, state: "default" },
      { val: 33, state: "swapping" },
      { val: 27, state: "default" },
      { val: 84, state: "default" },
      { val: 65, state: "swapping" },
    ],
    leftIdx: 2,
    rightIdx: 5,
    pivotIdx: 0,
    desc: "¡Intercambio (SWAP)! Como L < R (2 < 5), intercambiamos arr[2] (65) con arr[5] (33). Ahora los menores quedan a la izquierda.",
    codeSnippet: "if (L < R) { [arr[L], arr[R]] = [arr[R], arr[L]]; }",
    comparisons: 5,
    swaps: 1,
  },
  {
    array: [
      { val: 42, state: "pivot" },
      { val: 18, state: "default" },
      { val: 33, state: "default" },
      { val: 27, state: "default" },
      { val: 84, state: "comparing" },
      { val: 65, state: "default" },
    ],
    leftIdx: 4,
    rightIdx: 3,
    pivotIdx: 0,
    desc: "Punteros se cruzan: L avanza a índice 4 (84 > 42) y R retrocede a índice 3 (27 < 42). Condición de parada cumplida: L > R.",
    codeSnippet: "if (L >= R) return R; // Partición finalizada",
    comparisons: 8,
    swaps: 1,
  },
  {
    array: [
      { val: 27, state: "default" },
      { val: 18, state: "default" },
      { val: 33, state: "default" },
      { val: 42, state: "sorted" },
      { val: 84, state: "default" },
      { val: 65, state: "default" },
    ],
    leftIdx: 3,
    rightIdx: 3,
    pivotIdx: 3,
    desc: "Partición concluida con éxito. El pivote 42 queda en su posición definitiva ordenada (índice 3). Sub-arreglos recursivos listos.",
    codeSnippet: "quicksort(arr, low, p); quicksort(arr, p + 1, high);",
    comparisons: 9,
    swaps: 2,
  },
];

// 2. Real-time Telemetry Data Points
interface TelemetryPoint {
  time: string;
  rps: number;
  p50: number;
  p95: number;
  p99: number;
  errorRate: string;
  status: "NORMAL" | "ALTA CARGA" | "PICO DE ESTRÉS" | "RECUPERANDO" | "ESTABLE";
  svgX: number;
  svgRpsY: number;
  svgLatY: number;
}

const TELEMETRY_STREAM: readonly TelemetryPoint[] = [
  { time: "12:00:00", rps: 1850, p50: 5.2, p95: 14.8, p99: 28.4, errorRate: "0.00%", status: "NORMAL", svgX: 50, svgRpsY: 135, svgLatY: 138 },
  { time: "12:00:06", rps: 2420, p50: 6.8, p95: 19.2, p99: 36.1, errorRate: "0.01%", status: "NORMAL", svgX: 130, svgRpsY: 115, svgLatY: 125 },
  { time: "12:00:12", rps: 3890, p50: 11.4, p95: 32.5, p99: 68.2, errorRate: "0.03%", status: "ALTA CARGA", svgX: 210, svgRpsY: 75, svgLatY: 95 },
  { time: "12:00:18", rps: 5120, p50: 24.1, p95: 78.4, p99: 142.0, errorRate: "0.12%", status: "PICO DE ESTRÉS", svgX: 290, svgRpsY: 42, svgLatY: 52 },
  { time: "12:00:24", rps: 3210, p50: 14.2, p95: 38.6, p99: 72.3, errorRate: "0.02%", status: "RECUPERANDO", svgX: 370, svgRpsY: 92, svgLatY: 102 },
  { time: "12:00:30", rps: 2100, p50: 7.1, p95: 18.0, p99: 32.5, errorRate: "0.00%", status: "ESTABLE", svgX: 450, svgRpsY: 128, svgLatY: 132 },
];

export function ArchitectureSimulationConsole() {
  const [activeTab, setActiveTab] = useState<SimulationMode>("quicksort");
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Maximum steps depending on active tab
  const totalSteps = activeTab === "quicksort" ? QS_STEPS.length : TELEMETRY_STREAM.length;

  const handleNext = useCallback(() => {
    setStep((prev) => (prev + 1) % totalSteps);
  }, [totalSteps]);

  const handleReset = () => {
    setStep(0);
  };

  const handleSelectTab = (tabId: SimulationMode) => {
    setActiveTab(tabId);
    setStep(0);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % totalSteps);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying, totalSteps]);

  const currentQs = QS_STEPS[step % QS_STEPS.length];
  const currentMetric = TELEMETRY_STREAM[step % TELEMETRY_STREAM.length];

  return (
    <div className="system-action" aria-label="Consola de simulación de arquitectura y algoritmos">
      {/* ── Toolbar Superior de Ingeniería ── */}
      <div className="system-action__toolbar">
        <div>
          <span>
            <i /> CONSOLA DE ARQUITECTURA & EJECUCIÓN OBSERVABLE
          </span>
          <b>Modo: {SIMULATION_TABS.find((t) => t.id === activeTab)?.label}</b>
        </div>
        <div>
          <em>ESTADO: {isPlaying ? "EJECUTANDO" : "PAUSADO"}</em>
          <em>PASO: {step + 1}/{totalSteps}</em>
          <em>FPS: 60 HIDPI</em>
          <em>RIGOR: 100%</em>
        </div>
      </div>

      {/* ── Selector de Pestañas de Simulación ── */}
      <div className="system-action__tabs-bar">
        {SIMULATION_TABS.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              className={`system-action__tab-btn ${isActive ? "system-action__tab-btn--active" : ""}`}
              onClick={() => handleSelectTab(t.id)}
              aria-selected={isActive}
              role="tab"
            >
              <small>{t.category}</small>
              <strong>{t.label}</strong>
              <span>{t.complexity}</span>
            </button>
          );
        })}
      </div>

      {/* ── Barra de Controles de Reproducción ── */}
      <div className="system-action__control-strip">
        <div className="system-action__buttons-group">
          <button
            type="button"
            className="system-action__btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pausar simulación" : "Reanudar simulación"}
          >
            {isPlaying ? "⏸ Pausar" : "▶ Reanudar"}
          </button>
          <button
            type="button"
            className="system-action__btn"
            onClick={handleNext}
            aria-label="Avanzar al siguiente paso de la simulación"
          >
            ⏭ Paso Siguiente ({step + 1}/{totalSteps})
          </button>
          <button
            type="button"
            className="system-action__btn system-action__btn--muted"
            onClick={handleReset}
            aria-label="Reiniciar simulación actual"
          >
            ↺ Reiniciar
          </button>
        </div>
        <div className="system-action__telemetry-chip">
          <span>FRECUENCIA DE MUESTREO: 2.8s</span>
          <span>MOTOR DETERMINISTA V8</span>
        </div>
      </div>

      {/* ── Rejilla Principal de 3 Columnas ── */}
      <div className="system-action__grid">
        {/* Columna 1: Código Invariante y Estado Matemático */}
        <section className="system-action__code-pane" aria-label="Código e invariantes matemáticos">
          <header>
            <b>Código Observable & Estado</b>
            <span>Paso {step + 1}</span>
          </header>
          <div className="system-action__code-content">
            {activeTab === "quicksort" && (
              <pre>
                <code>{`// Partición de Hoare · O(N log N)
${currentQs.codeSnippet}

// Estado de Punteros:
L_index = ${currentQs.leftIdx}  (valor: ${currentQs.array[currentQs.leftIdx]?.val})
R_index = ${currentQs.rightIdx}  (valor: ${currentQs.array[currentQs.rightIdx]?.val})
Pivote  = ${currentQs.array[currentQs.pivotIdx]?.val} (fijo en índice ${currentQs.pivotIdx})

// Invariantes:
Comparaciones = ${currentQs.comparisons}
Intercambios  = ${currentQs.swaps}
Profundidad Recursiva = O(log N)`}</code>
              </pre>
            )}

            {activeTab === "telemetry-chart" && (
              <pre>
                <code>{`// Métricas de Rendimiento en Tiempo Real
Timestamp:     ${currentMetric.time}
Throughput:    ${currentMetric.rps.toLocaleString("es-MX")} req/sec
Latencia p50:  ${currentMetric.p50} ms
Latencia p95:  ${currentMetric.p95} ms (Percentil crítico)
Latencia p99:  ${currentMetric.p99} ms (Cola de distribución)
Tasa de Error: ${currentMetric.errorRate}
Estado SLA:    ${currentMetric.status}`}</code>
              </pre>
            )}

            {activeTab === "event-loop" && (
              <pre>
                <code>{`// Ciclo de Eventos V8 & Microtasks
console.log("1. Sincrónico: CallStack");
setTimeout(() => console.log("4. Macrotask"), 0);
Promise.resolve().then(() => {
  console.log("2. Microtask Queue");
  queueMicrotask(() => console.log("3. Microtask drenada"));
});

// Regla: TODAS las microtareas drenan
// antes de la siguiente macrotarea.`}</code>
              </pre>
            )}

            {activeTab === "circuit-breaker" && (
              <pre>
                <code>{`// Máquina de Estados Circuit Breaker
class ResilientGateway {
  threshold = 0.50; // 50% fallos
  cooldown  = 5000; // 5s timeout
  
  // Transiciones:
  // CLOSED    -> Error > 50% -> OPEN
  // OPEN      -> Cooldown    -> HALF_OPEN
  // HALF_OPEN -> Éxito       -> CLOSED
}`}</code>
              </pre>
            )}
          </div>
          <footer className="system-action__pane-footer">
            <small>Verificación de invariantes en memoria activa</small>
          </footer>
        </section>

        {/* Columna 2: Escenario Visual Principal */}
        <section className="system-action__stage-pane" aria-label="Visualización interactiva activa">
          <header>
            <b>Escenario de Simulación Activo</b>
            <span>Renderizado Reactivo</span>
          </header>

          <div className="system-action__canvas-wrap">
            {/* 1. Algoritmo Quicksort */}
            {activeTab === "quicksort" && (
              <div className="sim-quicksort-stage">
                <div className="sim-quicksort-header">
                  <span className="sim-badge-pill">PARTICIONAMIENTO HOARE</span>
                  <span className="sim-meta-text">Pivote: <strong>{currentQs.array[currentQs.pivotIdx]?.val}</strong></span>
                </div>

                <div className="sim-quicksort-bars-container">
                  {currentQs.array.map((item, idx) => {
                    const isLeft = idx === currentQs.leftIdx;
                    const isRight = idx === currentQs.rightIdx;
                    const isPivot = idx === currentQs.pivotIdx;
                    const heightPercent = Math.round((item.val / 90) * 100);

                    return (
                      <div key={idx} className="sim-bar-column">
                        {/* Puntero Superior R */}
                        <div className="sim-pointer-slot sim-pointer-slot--top">
                          {isRight && <span className="sim-pointer-badge sim-pointer-badge--r">▼ R</span>}
                        </div>

                        {/* Barra Vertical y Caja de Valor */}
                        <div
                          className={`sim-bar-box sim-bar-box--${item.state} ${isPivot ? "sim-bar-box--pivot" : ""} ${isLeft ? "sim-bar-box--l" : ""} ${isRight ? "sim-bar-box--r" : ""}`}
                          style={{ height: `${Math.max(48, heightPercent * 1.3)}px` }}
                        >
                          <span className="sim-bar-val">{item.val}</span>
                        </div>

                        {/* Índice del Array */}
                        <span className="sim-bar-idx">[{idx}]</span>

                        {/* Puntero Inferior L */}
                        <div className="sim-pointer-slot sim-pointer-slot--bottom">
                          {isLeft && <span className="sim-pointer-badge sim-pointer-badge--l">▲ L</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="sim-stage-desc">
                  <strong>Paso {step + 1}:</strong>
                  <p>{currentQs.desc}</p>
                </div>
              </div>
            )}

            {/* 2. Gráfica de Telemetría SVG Dinámica */}
            {activeTab === "telemetry-chart" && (
              <div className="sim-chart-stage">
                <div className="sim-chart-header">
                  <strong>Curva de Tráfico & Latencia Percentil (Producción)</strong>
                  <span className="sim-chart-legend">
                    <i className="sim-legend-dot sim-legend-dot--cyan" /> RPS Throughput
                    <i className="sim-legend-dot sim-legend-dot--yellow" /> Latencia p95 (ms)
                  </span>
                </div>

                <div className="sim-chart-container">
                  <svg className="sim-chart-svg" viewBox="0 0 500 180" aria-label="Curva de telemetría de rendimiento y latencia">
                    <defs>
                      <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#35d7ff" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#35d7ff" stopOpacity="0.00" />
                      </linearGradient>
                    </defs>

                    {/* Guías de Cuadrícula */}
                    <line x1="40" y1="30" x2="480" y2="30" stroke="#1d293d" strokeDasharray="4 4" />
                    <line x1="40" y1="75" x2="480" y2="75" stroke="#1d293d" strokeDasharray="4 4" />
                    <line x1="40" y1="120" x2="480" y2="120" stroke="#1d293d" strokeDasharray="4 4" />

                    {/* Ejes Coordenados */}
                    <line x1="40" y1="150" x2="480" y2="150" stroke="#2a3c58" strokeWidth="1.5" />
                    <line x1="40" y1="20" x2="40" y2="150" stroke="#2a3c58" strokeWidth="1.5" />

                    {/* Rótulos de Eje */}
                    <text x="12" y="34" fill="#627794" fontSize="10" fontFamily="var(--mono)">6k</text>
                    <text x="12" y="79" fill="#627794" fontSize="10" fontFamily="var(--mono)">3k</text>
                    <text x="12" y="124" fill="#627794" fontSize="10" fontFamily="var(--mono)">1k</text>

                    {/* Área bajo la Curva de Throughput */}
                    <polygon
                      fill="url(#area-grad)"
                      points="50,150 50,135 130,115 210,75 290,42 370,92 450,128 450,150"
                    />

                    {/* Curva de Throughput (RPS) */}
                    <polyline
                      fill="none"
                      stroke="#35d7ff"
                      strokeWidth="3"
                      points="50,135 130,115 210,75 290,42 370,92 450,128"
                    />

                    {/* Curva de Latencia p95 */}
                    <polyline
                      fill="none"
                      stroke="#ffd166"
                      strokeWidth="2.5"
                      strokeDasharray="5 3"
                      points="50,138 130,125 210,95 290,52 370,102 450,132"
                    />

                    {/* Cursor Temporal del Paso Actual */}
                    <line
                      x1={currentMetric.svgX}
                      y1="20"
                      x2={currentMetric.svgX}
                      y2="150"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeOpacity="0.8"
                    />
                    <circle cx={currentMetric.svgX} cy={currentMetric.svgRpsY} r="5" fill="#35d7ff" stroke="#ffffff" strokeWidth="2" />
                    <circle cx={currentMetric.svgX} cy={currentMetric.svgLatY} r="4" fill="#ffd166" stroke="#ffffff" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="sim-chart-kpi-grid">
                  <div className="sim-kpi-item">
                    <span>RPS ACTUAL</span>
                    <strong>{currentMetric.rps.toLocaleString("es-MX")}</strong>
                  </div>
                  <div className="sim-kpi-item">
                    <span>LATENCIA p50</span>
                    <strong>{currentMetric.p50} ms</strong>
                  </div>
                  <div className="sim-kpi-item">
                    <span>LATENCIA p95</span>
                    <strong className="text-yellow">{currentMetric.p95} ms</strong>
                  </div>
                  <div className="sim-kpi-item">
                    <span>ESTADO SLA</span>
                    <strong className="text-green">{currentMetric.status}</strong>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Event Loop V8 */}
            {activeTab === "event-loop" && (
              <div className="sim-eventloop-stage">
                <div className="sim-eventloop-grid">
                  <div className="sim-el-panel">
                    <span className="sim-el-title">CALL STACK (SINCRÓNICO)</span>
                    <div className="sim-el-stack">
                      <div className="sim-el-frame sim-el-frame--active">processPayload()</div>
                      <div className="sim-el-frame">authenticateRequest()</div>
                      <div className="sim-el-frame">main()</div>
                    </div>
                  </div>

                  <div className="sim-el-panel">
                    <span className="sim-el-title">MICROTASKS QUEUE (PRIORIDAD)</span>
                    <div className="sim-el-queue">
                      <div className="sim-el-item sim-el-item--micro">Promise.then() #1</div>
                      <div className="sim-el-item sim-el-item--micro">queueMicrotask() #2</div>
                    </div>
                    <small className="sim-el-caption">Se drenan antes de renderizar</small>
                  </div>

                  <div className="sim-el-panel">
                    <span className="sim-el-title">MACROTASKS (EVENT LOOP)</span>
                    <div className="sim-el-queue">
                      <div className="sim-el-item sim-el-item--macro">setTimeout(handler, 0)</div>
                      <div className="sim-el-item sim-el-item--macro">Network I/O Callback</div>
                    </div>
                    <small className="sim-el-caption">1 macrotarea por ciclo (tick)</small>
                  </div>
                </div>
                <div className="sim-stage-desc">
                  <strong>Determinismo del Event Loop:</strong>
                  <p>
                    JavaScript nunca ejecuta una macrotarea mientras la cola de microtareas contenga promesas pendientes. Este comportamiento previene condiciones de carrera en el estado de la aplicación.
                  </p>
                </div>
              </div>
            )}

            {/* 4. Circuit Breaker */}
            {activeTab === "circuit-breaker" && (
              <div className="sim-circuit-stage">
                <div className="sim-circuit-nodes">
                  <div className={`sim-circuit-node ${step % 3 === 0 ? "sim-circuit-node--active-closed" : ""}`}>
                    <span className="sim-node-state">CLOSED</span>
                    <strong>Saludable (100%)</strong>
                    <p>Tráfico fluye normalmente hacia la base de datos.</p>
                  </div>

                  <div className="sim-circuit-arrow">→</div>

                  <div className={`sim-circuit-node ${step % 3 === 1 ? "sim-circuit-node--active-open" : ""}`}>
                    <span className="sim-node-state">OPEN</span>
                    <strong>Disparado (&gt;50% fallos)</strong>
                    <p>Corte inmediato: fallback en sub-milisegundo sin sobrecargar el cluster.</p>
                  </div>

                  <div className="sim-circuit-arrow">→</div>

                  <div className={`sim-circuit-node ${step % 3 === 2 ? "sim-circuit-node--active-half" : ""}`}>
                    <span className="sim-node-state">HALF-OPEN</span>
                    <strong>Prueba Canario (10%)</strong>
                    <p>Se envían peticiones sonda para verificar si el backend se recuperó.</p>
                  </div>
                </div>
                <div className="sim-stage-desc">
                  <strong>Protección contra Fallos en Cascada:</strong>
                  <p>
                    El patrón Circuit Breaker desacopla los servicios en degradación, impidiendo que el colapso de un microservicio secundario propague caídas a la pasarela principal.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Columna 3: Traza de Ejecución y Enlace de Estudio */}
        <section className="system-action__trace-pane" aria-label="Traza de ejecución en vivo">
          <header>
            <b>Traza del Motor</b>
            <span>Logs de Evento</span>
          </header>
          <div className="system-action__trace-body">
            <div className="system-action__trace-row">
              <span className="sim-prompt">&gt;</span>
              <span>[KERNEL] CPU Scheduler: Affinity Core #0</span>
            </div>
            <div className="system-action__trace-row">
              <span className="sim-prompt">&gt;</span>
              <span>[SIMULATOR] Modo activo: {activeTab}</span>
            </div>
            <div className="system-action__trace-row system-action__trace-row--ok">
              <span className="sim-prompt">&gt;</span>
              <span>[ASSERT] Estado verificable paso {step + 1}/{totalSteps} OK</span>
            </div>
            <div className="system-action__trace-row">
              <span className="sim-prompt">&gt;</span>
              <span>[MEMORY] Heap: 34.2 MB · Garbage Collector inactivo</span>
            </div>
            <div className="system-action__trace-row">
              <span className="sim-prompt">&gt;</span>
              <span>[TELEMETRY] Latencia P95 calculada en {currentMetric.p95}ms</span>
            </div>
          </div>
          <div className="system-action__action-link-wrap">
            <Link href="/colecciones" className="system-action__nav-link">
              <span>Explorar las 73 Colecciones Canónicas</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
