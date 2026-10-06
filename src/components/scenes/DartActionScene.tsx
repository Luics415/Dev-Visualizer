"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

const LOOP = 10;

export function DartActionScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const repeat = { duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0 } as const;

  return (
    <div
      className="dart-action"
      ref={sceneRef}
      data-playback={playback}
      role="img"
      aria-label="Arquitectura del lenguaje Dart: el Event Loop coordina microtareas y eventos, los Isolates procesan en memoria aislada, los Records se desestructuran mediante Pattern Matching y el compilador AOT genera código máquina nativo"
    >
      <header className="dart-action__legend">
        <span><i className="dart-dot dart-dot--loop" /> Event Loop (Microtasks vs Events)</span>
        <span><i className="dart-dot dart-dot--isolate" /> Worker Isolate (Zero Locks)</span>
        <span><i className="dart-dot dart-dot--pattern" /> Records & Pattern Matching</span>
        <span><i className="dart-dot dart-dot--aot" /> Compilación Nativa AOT</span>
      </header>

      <Fragment key={playback}>
        <div className="dart-action__board">
          {/* Etapa 1: Event Loop con colas duales */}
          <section className="dart-action__stage dart-action__stage--loop" aria-label="Event Loop de Dart">
            <header>
              <em>01</em>
              <div>
                <strong>EVENT LOOP</strong>
                <small>microtask queue prioritaria</small>
              </div>
            </header>
            <div className="dart-action__queue-box">
              <div className="dart-action__queue dart-action__queue--micro">
                <span className="dart-action__queue-label">Microtask Queue</span>
                <motion.div
                  className="dart-action__token dart-action__token--micro"
                  animate={{ x: [-15, 0, 15, 0, -15], opacity: [0.7, 1, 1, 0.7, 0.7] }}
                  transition={{ ...repeat, times: [0, 0.25, 0.5, 0.75, 1] }}
                >
                  scheduleMicrotask()
                </motion.div>
              </div>
              <div className="dart-action__queue dart-action__queue--event">
                <span className="dart-action__queue-label">Event Queue (I/O, Timers)</span>
                <motion.div
                  className="dart-action__token dart-action__token--event"
                  animate={{ x: [15, 0, -15, 0, 15], opacity: [0.6, 1, 1, 0.6, 0.6] }}
                  transition={{ ...repeat, times: [0, 0.3, 0.6, 0.8, 1] }}
                >
                  Timer / I/O Socket
                </motion.div>
              </div>
              <div className="dart-action__loop-indicator">
                <motion.span
                  className="dart-action__spinner"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: shouldAnimate ? 3 : 0, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }}
                >
                  ↻
                </motion.span>
                <code>Loop Tick: 0.8 ms</code>
              </div>
            </div>
          </section>

          {/* Etapa 2: Worker Isolate sin memoria compartida */}
          <section className="dart-action__stage dart-action__stage--isolate" aria-label="Worker Isolate concurrente">
            <header>
              <em>02</em>
              <div>
                <strong>ISOLATE CONCURRENTE</strong>
                <small>memoria aislada sin locks</small>
              </div>
            </header>
            <div className="dart-action__isolate-box">
              <div className="dart-action__isolate-heap">
                <span>HEAP AISLADO B</span>
                <motion.div
                  className="dart-action__payload-pill"
                  animate={{ scale: [0.96, 1.03, 1, 0.96] }}
                  transition={{ ...repeat, times: [0, 0.35, 0.7, 1] }}
                >
                  <code>Batch (10k items)</code>
                </motion.div>
              </div>
              <div className="dart-action__ports">
                <div className="dart-action__port-lane">
                  <span>SendPort</span>
                  <motion.i
                    className="dart-action__msg-dot"
                    animate={{ x: [0, 48, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ ...repeat, duration: 2, repeat: Infinity }}
                  />
                  <span>ReceivePort</span>
                </div>
                <small className="dart-action__status-tag">Cero Mutex · Sin Deadlocks</small>
              </div>
            </div>
          </section>

          {/* Etapa 3: Records y Pattern Matching Moderno */}
          <section className="dart-action__stage dart-action__stage--pattern" aria-label="Records y Pattern Matching">
            <header>
              <em>03</em>
              <div>
                <strong>PATTERNS & RECORDS</strong>
                <small>desestructuración exhaustiva</small>
              </div>
            </header>
            <div className="dart-action__pattern-box">
              <div className="dart-action__record-def">
                <code>(sensor: #A1, v: 4.82)</code>
              </div>
              <span className="dart-action__eval-arrow">↓ switch (data)</span>
              <motion.div
                className="dart-action__switch-branch"
                animate={{ borderColor: ["rgba(0,180,171,.3)", "rgba(19,185,253,.8)", "rgba(0,180,171,.3)"] }}
                transition={{ ...repeat, times: [0, 0.5, 1] }}
              >
                <em>case</em> <code>(:v when v &gt; 4.0)</code>
                <b>→ Validated</b>
              </motion.div>
              <small className="dart-action__pattern-guarantee">Sound Null Safety Garantizada</small>
            </div>
          </section>

          {/* Etapa 4: Compilación Nativa AOT */}
          <section className="dart-action__stage dart-action__stage--aot" aria-label="Compilación AOT de Dart">
            <header>
              <em>04</em>
              <div>
                <strong>COMPILACIÓN AOT</strong>
                <small>código máquina nativo directo</small>
              </div>
            </header>
            <div className="dart-action__aot-box">
              <div className="dart-action__aot-metrics">
                <span className="dart-action__metric-item">
                  <strong>Arranque</strong>
                  <em>&lt; 15 ms</em>
                </span>
                <span className="dart-action__metric-item">
                  <strong>Throughput</strong>
                  <em>112k ops/s</em>
                </span>
                <span className="dart-action__metric-item">
                  <strong>Binario</strong>
                  <em>ELF/Mach-O</em>
                </span>
              </div>
              <motion.div
                className="dart-action__binary-stream"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ ...repeat, duration: 2, repeat: Infinity }}
              >
                <code>01000100 01100001 01110010 01110100 [ARM64]</code>
              </motion.div>
              <div className="dart-action__badge">Tree-Shaking Activo</div>
            </div>
          </section>
        </div>
      </Fragment>
    </div>
  );
}
