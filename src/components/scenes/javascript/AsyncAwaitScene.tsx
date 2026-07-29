"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 11;

export function AsyncAwaitScene() {
  return (
    <div
      className="scene async-scene"
      aria-label="Animación de async await: la función espera una respuesta mientras otro código continúa ejecutándose"
    >
      <CodePill>const data = await fetchData()</CodePill>

      <div className="async-scene__workspace">
        <motion.div
          className="async-function-node"
          animate={{
            borderColor: [
              "rgba(35, 197, 232, .7)",
              "rgba(247, 200, 67, .72)",
              "rgba(38, 217, 162, .72)",
              "rgba(35, 197, 232, .7)",
            ],
          }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.25, 0.72, 1] }}
        >
          <strong>async load()</strong>
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.2, 0.25, 1] }}
          >
            ejecutando
          </motion.span>
          <motion.span
            className="async-status--waiting"
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.22, 0.28, 0.65, 0.7, 1] }}
          >
            pausada en await
          </motion.span>
          <motion.span
            className="async-status--done"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.68, 0.74, 0.9, 1] }}
          >
            reanudada ✓
          </motion.span>
        </motion.div>

        <div className="async-connection" aria-hidden="true" />

        <motion.div
          className="async-api-node"
          animate={{ opacity: [0.65, 1, 1, 0.65] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Web API</span>
          <small>fetchData()</small>
        </motion.div>

        <motion.span
          className="async-request-token"
          animate={{ opacity: [0, 1, 1, 0, 0], x: [0, 0, 100, 100, 100] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.16, 0.28, 0.34, 1] }}
        >
          request →
        </motion.span>

        <motion.span
          className="async-response-token"
          animate={{ opacity: [0, 0, 1, 1, 0], x: [100, 100, 100, 0, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.57, 0.63, 0.72, 1] }}
        >
          ← data
        </motion.span>

        <div className="async-other-work">
          <span className="scene-mini-label">el programa continúa</span>
          <motion.span
            className="async-work-token"
            animate={{ x: [-54, 54], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 0.4, times: [0, 0.15, 0.85, 1] }}
          >
            otro código
          </motion.span>
        </div>
      </div>
    </div>
  );
}
