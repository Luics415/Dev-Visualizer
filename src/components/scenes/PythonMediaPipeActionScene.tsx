"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

const LOOP_SECONDS = 16;

const queueFrames = ["F104", "F105", "F106"] as const;
const landmarks = [
  [50, 15],
  [50, 31],
  [34, 38],
  [66, 38],
  [27, 57],
  [73, 57],
  [41, 60],
  [59, 60],
  [37, 82],
  [63, 82],
] as const;

export function PythonMediaPipeActionScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const transition = (times?: number[]) =>
    shouldAnimate
      ? { duration: LOOP_SECONDS, repeat: Infinity, ease: "linear" as const, ...(times ? { times } : {}) }
      : { duration: 0 };

  return (
    <figure
      className="python-mediapipe"
      ref={sceneRef}
      data-playback={playback}
      role="img"
      aria-label="Un entrenador postural en Python captura video con OpenCV, regula la cola, obtiene landmarks con MediaPipe, calcula el ángulo de la rodilla, cuenta una repetición, recupera una pérdida de tracking y conserva los fotogramas en el dispositivo."
    >
      <figcaption className="python-mediapipe__legend">
        <span><i /> Percepción</span>
        <span><i /> Decisión temporal</span>
        <span><i /> Evidencia y privacidad</span>
      </figcaption>

      <Fragment key={playback}>
        <div className="python-mediapipe__canvas">
          <section className="python-mediapipe__capture" aria-label="Captura y preprocesamiento con OpenCV">
            <header><em>01</em><div><strong>CÁMARA + OPENCV</strong><small>captura, color y tamaño</small></div></header>
            <motion.div
              className="python-mediapipe__camera"
              animate={shouldAnimate ? { opacity: [.78, 1, 1, .82], scale: [.98, 1.025, 1, .98] } : { opacity: 1, scale: 1 }}
              transition={transition([0, .06, .19, 1])}
            >
              <i className="python-mediapipe__lens" aria-hidden="true" />
              <strong>FRAME BGR</strong>
              <small>1280 × 720</small>
            </motion.div>
            <motion.code
              className="python-mediapipe__preprocess"
              animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .8], x: [-3, -3, 0, 0, 2] } : { opacity: 1, x: 0 }}
              transition={transition([0, .06, .11, .26, 1])}
            >
              cv2.cvtColor(frame, COLOR_BGR2RGB)
            </motion.code>
          </section>

          <section className="python-mediapipe__queue" aria-label="Cola acotada y control de backpressure">
            <header><em>02</em><div><strong>COLA ACOTADA</strong><small>backpressure sin acumular latencia</small></div></header>
            <div className="python-mediapipe__queue-track">
              {queueFrames.map((frame, index) => {
                const start = .1 + index * .035;
                return (
                  <motion.span
                    className="python-mediapipe__queue-frame"
                    key={frame}
                    animate={shouldAnimate
                      ? { opacity: [.7, .7, 1, 1, .78], x: [0, 0, 8, 8, 0] }
                      : { opacity: 1, x: 0 }}
                    transition={transition([0, start, start + .045, .34, 1])}
                  >
                    {frame}
                  </motion.span>
                );
              })}
            </div>
            <motion.div
              className="python-mediapipe__drop-event"
              animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .8], y: [0, 0, 4, 8, 0] } : { opacity: 1, y: 0 }}
              transition={transition([0, .19, .23, .31, 1])}
            >
              <b>DESCARTAR F104</b>
              <small>se procesa el frame más reciente</small>
            </motion.div>
            <div className="python-mediapipe__queue-policy">
              <span>capacidad: 2</span>
              <span>política: drop oldest</span>
            </div>
          </section>

          <section className="python-mediapipe__graph" aria-label="Detector y tracker dentro del grafo de MediaPipe">
            <header><em>03</em><div><strong>MEDIAPIPE GRAPH</strong><small>detectar una vez, seguir mientras haya confianza</small></div></header>
            <div className="python-mediapipe__graph-nodes">
              <motion.article
                className="python-mediapipe__detector"
                animate={shouldAnimate
                  ? { opacity: [.76, 1, .8, .8, 1, 1, .8], scale: [.98, 1.04, 1, 1, 1.05, 1, .98] }
                  : { opacity: 1, scale: 1 }}
                transition={transition([0, .26, .34, .53, .62, .69, 1])}
              >
                <span>DETECTOR</span>
                <strong>persona localizada</strong>
                <small>se reactiva si cae la confianza</small>
              </motion.article>
              <i className="python-mediapipe__graph-edge" aria-hidden="true">→</i>
              <motion.article
                className="python-mediapipe__tracker"
                animate={shouldAnimate
                  ? { opacity: [.76, .76, 1, 1, .42, 1, 1, .8], scale: [.98, .98, 1.03, 1, .97, 1.04, 1, .98] }
                  : { opacity: 1, scale: 1 }}
                transition={transition([0, .29, .34, .52, .57, .67, .73, 1])}
              >
                <span>TRACKER</span>
                <strong>33 landmarks</strong>
                <small>confianza 0.94</small>
              </motion.article>
            </div>
            <motion.div
              className="python-mediapipe__tracking-loss"
              animate={shouldAnimate
                ? { opacity: [.7, .7, .7, 1, 1, .25, .78], x: [0, 0, 0, 4, -4, 0, 0] }
                : { opacity: 1, x: 0 }}
              transition={transition([0, .47, .53, .56, .61, .7, 1])}
            >
              <b>TRACKING PERDIDO</b>
              <span>confianza 0.31</span>
              <strong>→ REDETECTAR → REANUDAR</strong>
            </motion.div>
          </section>

          <section className="python-mediapipe__pose" aria-label="Landmarks y transformación de coordenadas">
            <header><em>04</em><div><strong>POSE LANDMARKS</strong><small>normalizado → píxel → mundo</small></div></header>
            <motion.svg
              className="python-mediapipe__skeleton"
              viewBox="0 0 100 100"
              aria-label="Esqueleto simplificado con cadera, rodilla y tobillo destacados"
              animate={shouldAnimate ? { opacity: [.75, .75, 1, 1, .82] } : { opacity: 1 }}
              transition={transition([0, .31, .38, .92, 1])}
            >
              <motion.path
                d="M50 15 L50 31 M50 31 L34 38 L27 57 M50 31 L66 38 L73 57 M50 31 L41 60 L37 82 M50 31 L59 60 L63 82"
                fill="none"
                pathLength="1"
                animate={shouldAnimate ? { pathLength: [.2, .2, 1, 1, .82] } : { pathLength: 1 }}
                transition={transition([0, .32, .42, .9, 1])}
              />
              {landmarks.map(([cx, cy], index) => (
                <motion.circle
                  key={`${cx}-${cy}`}
                  cx={cx}
                  cy={cy}
                  r={index > 5 ? 3.2 : 2.5}
                  animate={shouldAnimate
                    ? { opacity: [.7, .7, 1, 1, .8], scale: [.9, .9, 1.22, 1, .94] }
                    : { opacity: 1, scale: 1 }}
                  transition={transition([0, .34 + index * .01, .39 + index * .01, .86, 1])}
                />
              ))}
              <motion.path
                className="python-mediapipe__knee-angle"
                d="M41 60 Q49 68 37 82"
                fill="none"
                pathLength="1"
                animate={shouldAnimate ? { pathLength: [.15, .15, 1, 1, .78] } : { pathLength: 1 }}
                transition={transition([0, .43, .5, .88, 1])}
              />
            </motion.svg>
            <div className="python-mediapipe__coordinates">
              <span><b>NORMALIZADO</b> x .41 · y .60</span>
              <span><b>PÍXEL</b> 525 · 432</span>
              <span><b>MUNDO</b> −.18 · .72 · .06 m</span>
            </div>
          </section>

          <section className="python-mediapipe__decision" aria-label="Máquina de estados para contar una repetición completa">
            <header><em>05</em><div><strong>ÁNGULO + ESTADO</strong><small>suavizado temporal y debounce</small></div></header>
            <motion.div
              className="python-mediapipe__angle"
              animate={shouldAnimate ? { opacity: [.74, .74, 1, 1, .82], scale: [.96, .96, 1.05, 1, .98] } : { opacity: 1, scale: 1 }}
              transition={transition([0, .43, .51, .87, 1])}
            >
              <span>RODILLA</span>
              <strong>88°</strong>
              <small>media móvil: 5 frames</small>
            </motion.div>
            <div className="python-mediapipe__state-machine">
              <motion.span animate={shouldAnimate ? { opacity: [.72, 1, 1, .74], scale: [.98, 1.04, 1, .98] } : { opacity: 1, scale: 1 }} transition={transition([0, .49, .58, 1])}>DESCENSO</motion.span>
              <i aria-hidden="true">→</i>
              <motion.span animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .76], scale: [.98, .98, 1.05, 1, .98] } : { opacity: 1, scale: 1 }} transition={transition([0, .56, .62, .7, 1])}>FONDO</motion.span>
              <i aria-hidden="true">→</i>
              <motion.span animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .78], scale: [.98, .98, 1.05, 1, .98] } : { opacity: 1, scale: 1 }} transition={transition([0, .65, .72, .83, 1])}>ASCENSO</motion.span>
            </div>
            <div className="python-mediapipe__counter">
              <span>REPETICIONES</span>
              <motion.b
                className="python-mediapipe__counter-before"
                animate={shouldAnimate ? { opacity: [1, 1, 1, 0, 0, .78] } : { opacity: .5 }}
                transition={transition([0, .68, .73, .76, .94, 1])}
              >12</motion.b>
              <motion.b
                className="python-mediapipe__counter-after"
                animate={shouldAnimate ? { opacity: [.25, .25, .25, 1, 1, .86], scale: [.9, .9, .9, 1.2, 1, .96] } : { opacity: 1, scale: 1 }}
                transition={transition([0, .68, .73, .76, .91, 1])}
              >13</motion.b>
            </div>
          </section>

          <section className="python-mediapipe__feedback" aria-label="Resultado perceptible para la persona">
            <header><em>06</em><div><strong>FEEDBACK</strong><small>claro, inmediato y accesible</small></div></header>
            <motion.div
              className="python-mediapipe__feedback-card"
              animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .82], y: [3, 3, 0, 0, -1] } : { opacity: 1, y: 0 }}
              transition={transition([0, .71, .77, .94, 1])}
            >
              <strong>REPETICIÓN VÁLIDA ✓</strong>
              <span>profundidad y control correctos</span>
              <small>señal visual + alternativa sonora</small>
            </motion.div>
          </section>
        </div>

        <footer className="python-mediapipe__telemetry" aria-label="Diagnóstico y límites de privacidad">
          <span><b>LOCAL</b> los fotogramas no salen del dispositivo</span>
          <span><b>29.8 FPS</b> captura estable</span>
          <span><b>33 ms</b> latencia extremo a extremo</span>
          <motion.span
            className="python-mediapipe__optional-https"
            animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .82] } : { opacity: 1 }}
            transition={transition([0, .8, .86, .97, 1])}
          >
            <b>HTTPS OPCIONAL</b> solo métricas agregadas: conteo y latencia
          </motion.span>
        </footer>
      </Fragment>
    </figure>
  );
}
