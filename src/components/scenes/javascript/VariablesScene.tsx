"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 7;

export function VariablesScene() {
  return (
    <div className="scene variables-scene" aria-label="Animación de una variable que cambia de 10 a 20">
      <CodePill>let score = 10</CodePill>

      <div className="variables-scene__memory">
        <motion.span
          className="variables-scene__name"
          animate={{ opacity: [0, 1, 1, 1, 0], y: [8, 0, 0, 0, -6] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.12, 0.55, 0.88, 1] }}
        >
          score
        </motion.span>

        <div className="memory-cell">
          <motion.span
            className="memory-value memory-value--first"
            animate={{ opacity: [0, 1, 1, 0, 0], scale: [0.7, 1, 1, 0.85, 0.85] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.18, 0.48, 0.58, 1] }}
          >
            10
          </motion.span>
          <motion.span
            className="memory-value memory-value--second"
            animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.85, 0.85, 0.85, 1, 1, 0.8] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.5, 0.58, 0.68, 0.9, 1] }}
          >
            20
          </motion.span>
        </div>

        <motion.span
          className="variables-scene__assignment"
          animate={{ opacity: [0, 0, 1, 1, 0], x: [-6, -6, 0, 0, 6] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.48, 0.6, 0.84, 1] }}
        >
          score = 20
        </motion.span>
      </div>
    </div>
  );
}
