"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 11;

export function ClosuresScene() {
  return (
    <div
      className="scene closures-scene"
      aria-label="Animación de un closure: una función interna conserva acceso a count después de terminar la función externa"
    >
      <CodePill>const increment = createCounter()</CodePill>

      <div className="closures-scene__workspace">
        <motion.div
          className="closure-outer"
          animate={{ opacity: [0, 1, 1, 0.28, 0.28, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.08, 0.3, 0.4, 0.9, 1] }}
        >
          <span>createCounter()</span>
          <div className="closure-memory">
            count =
            <span className="closure-count">
              <motion.b
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.54, 0.6, 1] }}
              >
                0
              </motion.b>
              <motion.b
                animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.56, 0.62, 0.73, 0.78, 1] }}
              >
                1
              </motion.b>
              <motion.b
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.76, 0.82, 0.93, 1] }}
              >
                2
              </motion.b>
            </span>
          </div>
          <div className="closure-inner">increment()</div>
        </motion.div>

        <motion.span
          className="closure-return"
          animate={{ opacity: [0, 0, 1, 1, 0], x: [-4, -4, 0, 0, 5] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.28, 0.34, 0.44, 1] }}
        >
          return increment
        </motion.span>

        <motion.div
          className="closure-preserved"
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.92, 0.92, 1, 1, 0.94] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.36, 0.43, 0.94, 1] }}
        >
          <span className="scene-mini-label">closure preservado</span>
          <strong>increment()</strong>
          <small>↳ count sigue accesible</small>
        </motion.div>

        <motion.span
          className="closure-call closure-call--one"
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.52, 0.58, 0.7, 0.75, 1] }}
        >
          increment() → 1
        </motion.span>

        <motion.span
          className="closure-call closure-call--two"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.74, 0.8, 0.92, 1] }}
        >
          increment() → 2
        </motion.span>
      </div>
    </div>
  );
}
