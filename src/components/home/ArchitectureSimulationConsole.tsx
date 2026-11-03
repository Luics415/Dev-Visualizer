"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type SimulationMode = "quicksort" | "telemetry-chart" | "event-loop" | "memory-map" | "circuit-breaker";

type SimulationTab = {
  id: SimulationMode;
  label: string;
  category: string;
  badge: string;
  complexity?: string;
};

const SIMULATION_TABS: readonly SimulationTab[] = [
  {
    id: "quicksort",
    label: "Quicksort & Punteros L/R",
    category: "Algoritmos",
    badge: "Estructuras de Datos",
    complexity: "O(N log N)",
  },
  {
    id: "telemetry-chart",
    label: "Gráfica de Rendimiento y Latencia",
    category: "Métricas",
    badge: "Gráficas de Datos",
    complexity: "Tiempo Real",
  },
  {
    id: "event-loop",
    label: "V8 Event Loop & Call Stack",
    category: "Runtimes",
    badge: "JavaScript ES6+",
    complexity: "Micro vs Macro",
  },
  {
    id: "memory-map",
    label: "Punteros Stack vs Heap",
    category: "Sistemas",
    badge: "C / C++ / Rust",
    complexity: "0x7ffd9a",
  },
  {
    id: "circuit-breaker",
    label: "Circuit Breaker Resiliente",
    category: "Distribuidos",
    badge: "Cloud & APIs",
    complexity: "Fail-Fast",
  },
];

export function ArchitectureSimulationConsole() {
  const [activeTab, setActiveTab] = useState<SimulationMode>("quicksort");
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Quicksort state
  const quicksortSteps = [
    {
      code: "int pivot = arr[high]; // Pivot = 56",
      array: [
        { val: 42, role: "none" },
        { val: 17, role: "none" },
        { val: 89, role: "none" },
        { val: 33, role: "none" },
        { val: 56, role: "pivot" },
      ],
      leftIdx: 0,
      rightIdx: 3,
      desc: "Se selecciona 56 como pivote. Los punteros Left (L) y Right (R) inician la partición de Hoare.",
    },
    {
      code: "while (arr[L] < pivot) L++; // L avanza a arr[2] = 89",
      array: [
        { val: 42, role: "sorted-left" },
        { val: 17, role: "sorted-left" },
        { val: 89, role: "swap-candidate" },
        { val: 33, role: "none" },
        { val: 56, role: "pivot" },
      ],
      leftIdx: 2,
      rightIdx: 3,
      desc: "arr[0]=42 y arr[1]=17 son menores al pivote. L se detiene en arr[2]=89 (mayor al pivote).",
    },
    {
      code: "while (arr[R] > pivot) R--; // R se detiene en arr[3] = 33",
      array: [
        { val: 42, role: "sorted-left" },
        { val: 17, role: "sorted-left" },
        { val: 89, role: "swap-candidate" },
        { val: 33, role: "swap-candidate" },
        { val: 56, role: "pivot" },
      ],
      leftIdx: 2,
      rightIdx: 3,
      desc: "arr[3]=33 es menor al pivote. Ambos punteros han localizado elementos fuera de lugar.",
    },
    {
      code: "swap(&arr[L], &arr[R]); // Intercambia 89 <-> 33",
      array: [
        { val: 42, role: "sorted-left" },
        { val: 17, role: "sorted-left" },
        { val: 33, role: "sorted-left" },
        { val: 89, role: "sorted-right" },
        { val: 56, role: "pivot" },
      ],
      leftIdx: 3,
      rightIdx: 2,
      desc: "Swap ejecutado en O(1). Sub-partición izquierda reordenada. Los punteros se cruzan (L > R).",
    },
    {
      code: "swap(&arr[L], &arr[high]); // Pivote en su posición canónica",
      array: [
        { val: 42, role: "sorted-left" },
        { val: 17, role: "sorted-left" },
        { val: 33, role: "sorted-left" },
        { val: 56, role: "pivot-final" },
        { val: 89, role: "sorted-right" },
      ],
      leftIdx: 3,
      rightIdx: 3,
      desc: "Pivote 56 fijado en su índice final definitivo. Partición completada con éxito.",
    },
  ];

  // Telemetry chart data points
  const telemetryPoints = [
    { sec: "00s", rps: 1200, p50: 12, p95: 35, p99: 80, cacheHit: 92 },
    { sec: "05s", rps: 2400, p50: 14, p95: 42, p99: 95, cacheHit: 94 },
    { sec: "10s", rps: 4800, p50: 18, p95: 65, p99: 140, cacheHit: 88 },
    { sec: "15s", rps: 7600, p50: 25, p95: 110, p99: 290, cacheHit: 82 },
    { sec: "20s", rps: 9200, p50: 38, p95: 185, p99: 420, cacheHit: 76 },
    { sec: "25s", rps: 5100, p50: 19, p95: 72, p99: 160, cacheHit: 91 },
    { sec: "30s", rps: 3200, p50: 15, p95: 48, p99: 98, cacheHit: 96 },
  ];

  const totalSteps = activeTab === "quicksort" ? 5 : activeTab === "telemetry-chart" ? 7 : 4;

  const handleNext = useCallback(() => {
    setStep((prev) => (prev + 1) % totalSteps);
  }, [totalSteps]);

  const handleReset = useCallback(() => {
    setStep(0);
  }, []);

  const handleSelectTab = (tab: SimulationMode) => {
    setActiveTab(tab);
    setStep(0);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % totalSteps);
    }, 2600);
    return () => clearInterval(interval);
  }, [isPlaying, totalSteps]);

  const currentQs = quicksortSteps[step % quicksortSteps.length];
  const currentMetric = telemetryPoints[step % telemetryPoints.length];

  return (
    <div className="system-action" aria-label="Simulación de arquitectura y ejecución observable">
      {/* ── Toolbar Canónico del Proyecto ── */}
      <div className="system-action__toolbar">
        <div>
          <span>
            <i /> SIMULACIÓN DE ARQUITECTURA Y EJECUCIÓN OBSERVABLE
          </span>
          <b>Modo: {SIMULATION_TABS.find((t) => t.id === activeTab)?.label}</b>
        </div>
        <div>
          <em>ESTADO: {isPlaying ? "EJECUTANDO" : "PAUSADO"}</em>
          <em>PASO: {step + 1}/{totalSteps}</em>
          <em>FPS: 60</em>
          <em>CANON: 100%</em>
        </div>
      </div>

      {/* ── Selector de Pestañas Técnicas ── */}
      <div className="system-action__tabs-bar">
        {SIMULATION_TABS.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              className={`system-action__tab-btn ${isActive ? "system-action__tab-btn--active" : ""}`}
              onClick={() => handleSelectTab(t.id)}
            >
              <small>{t.category}</small>
              <strong>{t.label}</strong>
              <span>{t.complexity}</span>
            </button>
          );
        })}
      </div>

      {/* ── Controles de Ejecución Determinista ── */}
      <div className="system-action__control-strip">
        <div className="system-action__buttons-group">
          <button
            type="button"
            className="system-action__btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pausar animación" : "Iniciar animación"}
          >
            {isPlaying ? "⏸ Pausar" : "▶ Reanudar"}
          </button>
          <button
            type="button"
            className="system-action__btn"
            onClick={handleNext}
            aria-label="Avanzar paso en la simulación"
          >
            ⏭ Paso Siguiente ({step + 1}/{totalSteps})
          </button>
          <button
            type="button"
            className="system-action__btn system-action__btn--muted"
            onClick={handleReset}
            aria-label="Reiniciar simulación"
          >
            ↺ Reiniciar
          </button>
        </div>
        <div className="system-action__telemetry-chip">
          <span>TICK TIME: 2600ms</span>
          <span>MEMORIA V8: 34.2 MB</span>
        </div>
      </div>

      {/* ── Rejilla Canónica de 3 Columnas (Inspector, Escena, Trazas) ── */}
      <div className="system-action__grid">
        {/* Columna 1: Código e Invariantes */}
        <section className="system-action__code-pane">
          <header>
            <b>Código Observable</b>
            <span>Paso {step + 1}</span>
          </header>
          <div className="system-action__code-content">
            {activeTab === "quicksort" && (
              <pre>
                <code>{`// Partición de Hoare · O(N log N)
${currentQs.code}

L_index: ${currentQs.leftIdx} | R_index: ${currentQs.rightIdx}
swap_count: ${step >= 3 ? "1" : "0"}`}</code>
              </pre>
            )}

            {activeTab === "telemetry-chart" && (
              <pre>
                <code>{`// Métricas de Tráfico & Throughput
RPS: ${currentMetric.rps} req/s
Latencia p50: ${currentMetric.p50} ms
Latencia p95: ${currentMetric.p95} ms
Latencia p99: ${currentMetric.p99} ms
Cache Hit Ratio: ${currentMetric.cacheHit}%`}</code>
              </pre>
            )}

            {activeTab === "event-loop" && (
              <pre>
                <code>{`// V8 Event Loop & Priority
console.log("1. Sync");
setTimeout(() => log("3. Macro"), 0);
Promise.resolve().then(() => log("2. Micro"));

// CallStack -> Microtask -> Macrotask`}</code>
              </pre>
            )}

            {activeTab === "memory-map" && (
              <pre>
                <code>{`// Memory Bounds & Allocation
int *ptr = (int*)malloc(sizeof(int));
*ptr = 0x42;
// Stack ptr: 0x7ffd9a -> Heap: 0x55a100
free(ptr);`}</code>
              </pre>
            )}

            {activeTab === "circuit-breaker" && (
              <pre>
                <code>{`// Circuit Breaker State Machine
const breaker = new CircuitBreaker(svc, {
  failureRateThreshold: 50,
  waitDurationInOpenState: 5000
});
// CLOSED -> OPEN -> HALF-OPEN`}</code>
              </pre>
            )}
          </div>
          <footer className="system-action__pane-footer">
            <small>Modelo determinista verificado</small>
          </footer>
        </section>

        {/* Columna 2: Escena Visual Principal */}
        <section className="system-action__stage-pane">
          <header>
            <b>Escenario de Ejecución Activo</b>
            <span>Lienzo HiDPI</span>
          </header>

          <div className="system-action__canvas-wrap">
            {/* 1. Algoritmo Quicksort */}
            {activeTab === "quicksort" && (
              <div className="sim-quicksort-stage">
                <div className="sim-quicksort-array">
                  {currentQs.array.map((item, idx) => (
                    <div
                      key={idx}
                      className={`sim-qs-box sim-qs-box--${item.role} ${idx === currentQs.leftIdx ? "sim-qs-box--l" : ""} ${idx === currentQs.rightIdx ? "sim-qs-box--r" : ""}`}
                    >
                      <span className="sim-qs-idx">[{idx}]</span>
                      <strong className="sim-qs-val">{item.val}</strong>
                      <div className="sim-qs-pointers">
                        {idx === currentQs.leftIdx && <em className="sim-pointer-l">L</em>}
                        {idx === currentQs.rightIdx && <em className="sim-pointer-r">R</em>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="sim-stage-desc">
                  <span>Operación Actual:</span>
                  <p>{currentQs.desc}</p>
                </div>
              </div>
            )}

            {/* 2. Gráfica de Datos y Telemetría SVG */}
            {activeTab === "telemetry-chart" && (
              <div className="sim-chart-stage">
                <div className="sim-chart-header">
                  <strong>Curva de Tráfico en Tiempo Real (RPS y Latencia p95)</strong>
                  <span>Ventana: 30 segundos</span>
                </div>

                <svg className="sim-chart-svg" viewBox="0 0 500 180" aria-label="Gráfica de telemetría de rendimiento">
                  {/* Grid Lines */}
                  <line x1="40" y1="30" x2="480" y2="30" stroke="#222f44" strokeDasharray="3 3" />
                  <line x1="40" y1="80" x2="480" y2="80" stroke="#222f44" strokeDasharray="3 3" />
                  <line x1="40" y1="130" x2="480" y2="130" stroke="#222f44" strokeDasharray="3 3" />

                  {/* Axes */}
                  <line x1="40" y1="150" x2="480" y2="150" stroke="#354968" strokeWidth="1.5" />
                  <line x1="40" y1="20" x2="40" y2="150" stroke="#354968" strokeWidth="1.5" />

                  {/* Axis labels */}
                  <text x="10" y="35" fill="#71849a" fontSize="10" fontFamily="var(--mono)">10k</text>
                  <text x="10" y="85" fill="#71849a" fontSize="10" fontFamily="var(--mono)">5k</text>
                  <text x="10" y="135" fill="#71849a" fontSize="10" fontFamily="var(--mono)">1k</text>

                  {/* Data Polyline (RPS) */}
                  <polyline
                    fill="none"
                    stroke="var(--cyan)"
                    strokeWidth="3"
                    points="60,135 120,120 180,95 240,65 300,45 360,90 420,115"
                  />

                  {/* Data Polyline (Latency p95) */}
                  <polyline
                    fill="none"
                    stroke="var(--yellow)"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    points="60,142 120,138 180,125 240,95 300,60 360,118 420,132"
                  />

                  {/* Active time cursor */}
                  {step < 7 && (
                    <g transform={`translate(${60 + step * 60}, 0)`}>
                      <line x1="0" y1="20" x2="0" y2="150" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7" />
                      <circle cx="0" cy={135 - (telemetryPoints[step].rps / 10000) * 100} r="5" fill="var(--cyan)" />
                    </g>
                  )}
                </svg>

                <div className="sim-chart-legend">
                  <span><i style={{ background: "var(--cyan)" }} /> Throughput (RPS): {currentMetric.rps} req/s</span>
                  <span><i style={{ background: "var(--yellow)" }} /> Latencia p95: {currentMetric.p95} ms</span>
                  <span><i style={{ background: "var(--green)" }} /> Cache Hit: {currentMetric.cacheHit}%</span>
                </div>
              </div>
            )}

            {/* 3. Event Loop */}
            {activeTab === "event-loop" && (
              <div className="sim-event-loop-stage">
                <div className="sim-loop-lane">
                  <strong>Call Stack</strong>
                  <div className="sim-token sim-token--cyan">
                    {step === 0 && "console.log('1. Sync')"}
                    {step === 1 && "setTimeout(cb, 0)"}
                    {step === 2 && "Microtask: PromiseReaction"}
                    {step === 3 && "Macrotask: TimerCallback"}
                  </div>
                </div>
                <div className="sim-loop-lane">
                  <strong>Microtask Queue</strong>
                  <div className={`sim-token sim-token--green ${step >= 1 ? "sim-token--active" : "sim-token--dim"}`}>
                    [Promise] log(&quot;2. Micro&quot;)
                  </div>
                </div>
                <div className="sim-loop-lane">
                  <strong>Macrotask Queue</strong>
                  <div className={`sim-token sim-token--yellow ${step >= 2 ? "sim-token--active" : "sim-token--dim"}`}>
                    [Timer] log(&quot;3. Macro&quot;)
                  </div>
                </div>
              </div>
            )}

            {/* 4. Memory Map */}
            {activeTab === "memory-map" && (
              <div className="sim-mem-stage">
                <div className="sim-mem-block">
                  <strong>Stack (0x7ffd9a)</strong>
                  <div className="sim-mem-row">
                    <span>ptr</span>
                    <em>{step === 0 ? "0x0" : step < 3 ? "→ 0x55a100" : "0x0"}</em>
                  </div>
                </div>
                <div className="sim-mem-arrow">
                  <span>{step >= 1 && step < 3 ? "DEREFERENCIANDO" : "LIBRE"}</span>
                  <div className="sim-arrow-bar" />
                </div>
                <div className="sim-mem-block">
                  <strong>Heap (0x55a100)</strong>
                  <div className="sim-mem-row">
                    <span>[4 bytes]</span>
                    <em>{step === 0 ? "NULL" : step === 1 ? "malloc(4)" : step === 2 ? "0x42" : "free()"}</em>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Circuit Breaker */}
            {activeTab === "circuit-breaker" && (
              <div className="sim-breaker-stage">
                <div className={`sim-breaker-box ${step === 0 ? "sim-breaker-box--closed" : ""}`}>
                  <strong>CLOSED</strong>
                  <small>Tráfico normal</small>
                </div>
                <div className={`sim-breaker-box ${step === 1 || step === 2 ? "sim-breaker-box--open" : ""}`}>
                  <strong>OPEN</strong>
                  <small>Fail-Fast activo</small>
                </div>
                <div className={`sim-breaker-box ${step === 3 ? "sim-breaker-box--half" : ""}`}>
                  <strong>HALF-OPEN</strong>
                  <small>Canario de sondeo</small>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Columna 3: Trazas e Inspección de Salida */}
        <aside className="system-action__inspector">
          <section>
            <header>
              <b>Telemetría y Traza</b>
              <span>Consola</span>
            </header>
            <div className="system-action__trace-body">
              <div className="system-action__trace-row">
                <span className="sim-prompt">&gt;</span>
                <span>EVENTO: {activeTab.toUpperCase()}</span>
              </div>
              <div className="system-action__trace-row">
                <span className="sim-prompt">&gt;</span>
                <span>PASO: {step + 1} de {totalSteps}</span>
              </div>
              <div className="system-action__trace-row system-action__trace-row--ok">
                <span className="sim-prompt">&gt;</span>
                <span>COMPROBACIÓN: INVARIANTE VERIFICADO</span>
              </div>
              <div className="system-action__trace-row">
                <span className="sim-prompt">&gt;</span>
                <span>DESTINO: {activeTab === "quicksort" ? "/algoritmos" : activeTab === "event-loop" ? "/javascript" : activeTab === "memory-map" ? "/c" : "/apis"}</span>
              </div>
            </div>
            <div className="system-action__action-link-wrap">
              <Link
                href={activeTab === "quicksort" ? "/algoritmos" : activeTab === "event-loop" ? "/javascript" : activeTab === "memory-map" ? "/c" : "/apis"}
                className="system-action__nav-link"
              >
                Abrir colección técnica canónica <span>→</span>
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
