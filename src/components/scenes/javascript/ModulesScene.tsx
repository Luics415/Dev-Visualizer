"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 9;

export function ModulesScene() {
  return (
    <div
      className="scene modules-scene"
      aria-label="Animación de módulos: math.js exporta sum y app.js la importa y utiliza"
    >
      <CodePill>{"export { sum } → import { sum }"}</CodePill>

      <div className="modules-scene__workspace">
        <motion.div
          className="module-file module-file--source"
          animate={{ opacity: [0, 1, 1, 1, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.08, 0.86, 0.94, 1] }}
        >
          <span className="module-file__tab">math.js</span>
          <code>function sum(a, b)</code>
          <motion.code
            className="module-export-line"
            animate={{ color: ["#a9b7c9", "#26d9a2", "#26d9a2", "#a9b7c9"] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.22, 0.42, 1] }}
          >
            export {`{ sum }`}
          </motion.code>
        </motion.div>

        <div className="module-link" aria-hidden="true">→</div>

        <motion.div
          className="module-file module-file--target"
          animate={{ opacity: [0, 0.45, 1, 1, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.28, 0.42, 0.92, 1] }}
        >
          <span className="module-file__tab">app.js</span>
          <motion.code
            animate={{ opacity: [0.35, 0.35, 1, 1, 0.35] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.32, 0.45, 0.82, 1] }}
          >
            import {`{ sum }`}
          </motion.code>
          <motion.code
            className="module-use-line"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.5, 0.58, 0.82, 1] }}
          >
            sum(2, 3) → 5
          </motion.code>
        </motion.div>

        <motion.span
          className="module-packet"
          animate={{ opacity: [0, 1, 1, 1, 0], x: [0, 0, 74, 148, 148], scale: [0.8, 1, 1, 1, 0.8] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.2, 0.34, 0.46, 1] }}
        >
          sum
        </motion.span>
      </div>
    </div>
  );
}
