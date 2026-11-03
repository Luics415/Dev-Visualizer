"use client";

import { useState, useEffect } from "react";

interface StepData {
  line: number;
  array: { val: number; state: "default" | "comparing" | "swapping" | "sorted" | "pivot" }[];
  leftIdx: number;
  rightIdx: number;
  pivotIdx: number;
  desc: string;
}

const CODE_LINES: readonly string[] = [
  "function quicksort(arr, low, high) {",
  "  if (low < high) {",
  "    const p = partition(arr, low, high);",
  "    quicksort(arr, low, p);",
  "    quicksort(arr, p + 1, high);",
  "  }",
  "}",
  "// Partición Hoare en tiempo real:",
];

const WORKBENCH_STEPS: readonly StepData[] = [
  {
    line: 3,
    array: [
      { val: 45, state: "pivot" },
      { val: 18, state: "default" },
      { val: 62, state: "default" },
      { val: 24, state: "default" },
      { val: 88, state: "default" },
      { val: 33, state: "default" },
    ],
    leftIdx: 0,
    rightIdx: 5,
    pivotIdx: 0,
    desc: "Pivote = 45. Inicializando punteros L = 0 y R = 5.",
  },
  {
    line: 3,
    array: [
      { val: 45, state: "pivot" },
      { val: 18, state: "default" },
      { val: 62, state: "comparing" },
      { val: 24, state: "default" },
      { val: 88, state: "default" },
      { val: 33, state: "comparing" },
    ],
    leftIdx: 2,
    rightIdx: 5,
    pivotIdx: 0,
    desc: "Comparación: L se detiene en 62 (>= 45); R se detiene en 33 (<= 45).",
  },
  {
    line: 4,
    array: [
      { val: 45, state: "pivot" },
      { val: 18, state: "default" },
      { val: 33, state: "swapping" },
      { val: 24, state: "default" },
      { val: 88, state: "default" },
      { val: 62, state: "swapping" },
    ],
    leftIdx: 2,
    rightIdx: 5,
    pivotIdx: 0,
    desc: "¡Intercambio (Swap)! arr[2] (62) ↔ arr[5] (33).",
  },
  {
    line: 4,
    array: [
      { val: 45, state: "pivot" },
      { val: 18, state: "default" },
      { val: 33, state: "default" },
      { val: 24, state: "default" },
      { val: 88, state: "comparing" },
      { val: 62, state: "default" },
    ],
    leftIdx: 4,
    rightIdx: 3,
    pivotIdx: 0,
    desc: "Punteros se cruzan (L = 4, R = 3). Fin de la partición de Hoare.",
  },
  {
    line: 5,
    array: [
      { val: 24, state: "default" },
      { val: 18, state: "default" },
      { val: 33, state: "default" },
      { val: 45, state: "sorted" },
      { val: 88, state: "default" },
      { val: 62, state: "default" },
    ],
    leftIdx: 3,
    rightIdx: 3,
    pivotIdx: 3,
    desc: "Pivote 45 en posición definitiva. Complejidad media: O(N log N).",
  },
];

export function HeroSimulatorWorkbench() {
  const [stepIdx, setStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setStepIdx((prev) => (prev + 1) % WORKBENCH_STEPS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = WORKBENCH_STEPS[stepIdx];

  const handleNext = () => setStepIdx((prev) => (prev + 1) % WORKBENCH_STEPS.length);
  const handlePrev = () => setStepIdx((prev) => (prev - 1 + WORKBENCH_STEPS.length) % WORKBENCH_STEPS.length);
  const handleReset = () => setStepIdx(0);

  return (
    <div id="hero-simulator-workbench" className="hero-workbench" aria-label="Simulador interactivo de ejecución en vivo">
      {/* ── Barra de Título Estilo IDE / macOS ── */}
      <div className="hero-workbench__titlebar">
        <div className="hero-workbench__dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <div className="hero-workbench__filename">
          <span>quicksort-hoare.ts</span>
        </div>
        <div className="hero-workbench__status">
          <span className="hero-workbench__pulse" />
          <span>EJECUCIÓN EN VIVO</span>
        </div>
      </div>

      {/* ── Contenido Dividido: Código a la Izquierda, Barras a la Derecha ── */}
      <div className="hero-workbench__body">
        {/* Editor de Código */}
        <div className="hero-workbench__code-pane">
          <div className="hero-workbench__code-lines">
            {CODE_LINES.map((codeText, idx) => {
              const lineNum = idx + 1;
              const isHighlighted = lineNum === current.line;
              return (
                <div
                  key={idx}
                  className={`hero-workbench__line ${isHighlighted ? "hero-workbench__line--active" : ""}`}
                >
                  <span className="hero-workbench__line-num">{lineNum}</span>
                  <span className="hero-workbench__line-content">{codeText}</span>
                </div>
              );
            })}
          </div>
          <div className="hero-workbench__step-note">
            <span className="hero-workbench__mono-tag">L_idx={current.leftIdx}</span>
            <span className="hero-workbench__mono-tag">R_idx={current.rightIdx}</span>
            <span className="hero-workbench__mono-tag">Pivote={current.array[current.pivotIdx]?.val}</span>
          </div>
        </div>

        {/* Lienzo Visual de Barras Animadas */}
        <div className="hero-workbench__stage-pane">
          <div className="hero-workbench__bars-header">
            <span className="hero-workbench__bars-legend">
              <i className="dot-cyan" /> Array
              <i className="dot-purple" /> Pivote
              <i className="dot-yellow" /> Compara
              <i className="dot-pink" /> Swap
              <i className="dot-green" /> Ordenado
            </span>
          </div>

          <div className="hero-workbench__bars">
            {current.array.map((item, idx) => {
              const isPivot = idx === current.pivotIdx;
              const isL = idx === current.leftIdx;
              const isR = idx === current.rightIdx;
              const heightPx = Math.round((item.val / 90) * 110) + 30;

              return (
                <div key={idx} className="hero-workbench__bar-col">
                  {/* Puntero R superior */}
                  <div className="hero-workbench__ptr hero-workbench__ptr--r">
                    {isR && <span>▼ R</span>}
                  </div>

                  {/* Barra Vertical */}
                  <div
                    className={`hero-workbench__bar-box hero-workbench__bar-box--${item.state} ${isPivot ? "hero-workbench__bar-box--pivot" : ""}`}
                    style={{ height: `${heightPx}px` }}
                  >
                    <span className="hero-workbench__bar-val">{item.val}</span>
                  </div>

                  {/* Índice */}
                  <span className="hero-workbench__bar-idx">[{idx}]</span>

                  {/* Puntero L inferior */}
                  <div className="hero-workbench__ptr hero-workbench__ptr--l">
                    {isL && <span>▲ L</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hero-workbench__desc">
            <p>{current.desc}</p>
          </div>
        </div>
      </div>

      {/* ── Controles de Reproducción Inferiores ── */}
      <div className="hero-workbench__controls">
        <div className="hero-workbench__ctrl-group">
          <button
            type="button"
            className="hero-workbench__ctrl-btn"
            onClick={handlePrev}
            aria-label="Paso anterior de simulación"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="19 20 9 12 19 4 19 20" fill="currentColor" />
              <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="hero-workbench__ctrl-btn hero-workbench__ctrl-btn--primary"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pausar simulación" : "Reanudar simulación"}
          >
            {isPlaying ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="5" y="4" width="4" height="16" rx="1" />
                  <rect x="15" y="4" width="4" height="16" rx="1" />
                </svg>
                <span>Pausar</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Reproducir</span>
              </>
            )}
          </button>
          <button
            type="button"
            className="hero-workbench__ctrl-btn"
            onClick={handleNext}
            aria-label="Paso siguiente de simulación"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="5 4 15 12 5 20 5 4" fill="currentColor" />
              <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            className="hero-workbench__ctrl-btn hero-workbench__ctrl-btn--muted"
            onClick={handleReset}
            aria-label="Reiniciar simulación"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </button>
        </div>

        <div className="hero-workbench__ctrl-meta">
          <span className="hero-workbench__step-counter">
            Paso {stepIdx + 1} de {WORKBENCH_STEPS.length}
          </span>
          <span className="hero-workbench__complexity-badge">O(N log N)</span>
        </div>
      </div>
    </div>
  );
}
