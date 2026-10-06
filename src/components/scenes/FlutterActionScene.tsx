"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

const LOOP = 12;

export function FlutterActionScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const repeat = { duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0 } as const;

  return (
    <div
      className="flutter-action"
      ref={sceneRef}
      data-playback={playback}
      role="img"
      aria-label="Pipeline gráfico y arquitectura de Flutter: el árbol tripartito coordina la reconciliación, el frame pipeline ejecuta build-layout-paint, RepaintBoundary aísla capas y el motor Impeller dibuja a 120 FPS sin shader jank"
    >
      <header className="flutter-action__legend">
        <span><i className="flutter-dot flutter-dot--tree" /> Árbol Tripartito (Flutter)</span>
        <span><i className="flutter-dot flutter-dot--pipeline" /> Frame Pipeline (120 Hz)</span>
        <span><i className="flutter-dot flutter-dot--layer" /> Capa RepaintBoundary</span>
        <span><i className="flutter-dot flutter-dot--gpu" /> Motor Impeller (Vulkan/Metal)</span>
      </header>

      <Fragment key={playback}>
        <div className="flutter-action__board">
          {/* Etapa 1: El Árbol Tripartito (Widget -> Element -> RenderObject) */}
          <section className="flutter-action__stage flutter-action__stage--tree" aria-label="Árbol tripartito de Flutter">
            <header>
              <em>01</em>
              <div>
                <strong>ÁRBOL TRIPARTITO</strong>
                <small>intención, identidad y geometría</small>
              </div>
            </header>
            <div className="flutter-action__tri-tree">
              <motion.div
                className="flutter-action__node flutter-action__node--widget"
                animate={{ opacity: [0.6, 1, 1, 0.6] }}
                transition={{ ...repeat, times: [0, 0.25, 0.75, 1] }}
              >
                <span>WIDGET</span>
                <small>const Waveform()</small>
                <em>Inmutable</em>
              </motion.div>
              <span className="flutter-action__connector">→</span>
              <motion.div
                className="flutter-action__node flutter-action__node--element"
                animate={{ scale: [0.98, 1.04, 1, 0.98] }}
                transition={{ ...repeat, times: [0, 0.3, 0.7, 1] }}
              >
                <span>ELEMENT</span>
                <small>StatefulElement</small>
                <em>Identidad</em>
              </motion.div>
              <span className="flutter-action__connector">→</span>
              <motion.div
                className="flutter-action__node flutter-action__node--render"
                animate={{ borderColor: ["rgba(2,86,155,.3)", "rgba(73,225,168,.7)", "rgba(2,86,155,.3)"] }}
                transition={{ ...repeat, times: [0, 0.35, 1] }}
              >
                <span>RENDER</span>
                <small>RenderWaveform</small>
                <em>BoxConstraints</em>
              </motion.div>
            </div>
          </section>

          {/* Etapa 2: Frame Pipeline (Animate -> Build -> Layout -> Paint -> Composite) */}
          <section className="flutter-action__stage flutter-action__stage--pipeline" aria-label="Pipeline de fotograma">
            <header>
              <em>02</em>
              <div>
                <strong>FRAME PIPELINE</strong>
                <small>fases ordenadas del cuadro</small>
              </div>
            </header>
            <div className="flutter-action__pipeline-flow">
              <div className="flutter-action__steps-track">
                <span className="flutter-action__pill">Animate</span>
                <i>→</i>
                <span className="flutter-action__pill">Build</span>
                <i>→</i>
                <span className="flutter-action__pill">Layout</span>
                <i>→</i>
                <span className="flutter-action__pill">Paint</span>
              </div>
              <motion.div
                className="flutter-action__pulse-bar"
                animate={{ width: ["15%", "100%", "15%"], opacity: [0.5, 1, 0.5] }}
                transition={{ ...repeat, duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <small className="flutter-action__notice">Restricciones bajan · Tamaños suben</small>
            </div>
          </section>

          {/* Etapa 3: Aislamiento con RepaintBoundary */}
          <section className="flutter-action__stage flutter-action__stage--boundary" aria-label="Aislamiento con RepaintBoundary">
            <header>
              <em>03</em>
              <div>
                <strong>REPAINT BOUNDARY</strong>
                <small>textura GPU aislada</small>
              </div>
            </header>
            <div className="flutter-action__boundary-box">
              <span className="flutter-action__tag">Capa Gráfica Independiente</span>
              <motion.div
                className="flutter-action__layer-preview"
                animate={{ borderColor: ["rgba(2,86,155,.3)", "rgba(64,196,255,.8)", "rgba(2,86,155,.3)"] }}
                transition={{ ...repeat, times: [0, 0.4, 1] }}
              >
                <code>LayerTree.add(OffsetLayer)</code>
                <small>Cero invalidación en widgets hermanos</small>
              </motion.div>
              <div className="flutter-action__status-tag">Relayout Aislado · Cero Jank</div>
            </div>
          </section>

          {/* Etapa 4: Impeller GPU Engine (120 FPS Canvas) */}
          <section className="flutter-action__stage flutter-action__stage--gpu" aria-label="Motor Impeller y pantalla">
            <header>
              <em>04</em>
              <div>
                <strong>IMPELLER GPU</strong>
                <small>DisplayList a 120 FPS</small>
              </div>
            </header>
            <div className="flutter-action__canvas-wrap">
              <div className="flutter-action__hud">
                <span className="flutter-action__fps">120 FPS</span>
                <span className="flutter-action__latency">3.8 ms / 8.33 ms</span>
                <span className="flutter-action__jank">Jank: 0 ms</span>
              </div>
              <svg className="flutter-action__waveform" viewBox="0 0 200 60" aria-hidden="true">
                <motion.path
                  d="M 0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30"
                  fill="none"
                  stroke="#40c4ff"
                  strokeWidth="2.5"
                  animate={{
                    d: [
                      "M 0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30",
                      "M 0 30 Q 25 50 50 30 T 100 30 T 150 15 T 200 30",
                      "M 0 30 Q 25 20 50 30 T 100 45 T 150 30 T 200 30",
                      "M 0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30",
                    ],
                  }}
                  transition={{ ...repeat, duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
              <div className="flutter-action__badge">Shaders Precompilados AOT</div>
            </div>
          </section>
        </div>
      </Fragment>
    </div>
  );
}
