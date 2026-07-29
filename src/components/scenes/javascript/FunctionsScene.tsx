"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 6;

export function FunctionsScene() {
  return (
    <div className="scene function-scene" aria-label="Animación de una función que recibe 5 y devuelve 10">
      <CodePill>double(5)</CodePill>

      <div className="function-scene__flow">
        <motion.div
          className="data-token"
          animate={{ x: [0, 52, 52, 188], opacity: [0, 1, 1, 1, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.14, 0.42, 0.75, 1] }}
        >
          <motion.span
            animate={{ opacity: [1, 1, 0, 1, 1] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.38, 0.46, 0.52, 1] }}
          >
            5
          </motion.span>
          <motion.span
            className="data-token__replacement"
            animate={{ opacity: [0, 0, 1, 1, 1] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.43, 0.51, 0.75, 1] }}
          >
            10
          </motion.span>
        </motion.div>

        <div className="function-machine">
          <span>double()</span>
          <motion.small
            animate={{ opacity: [0.35, 0.35, 1, 1, 0.35] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.28, 0.42, 0.58, 1] }}
          >
            × 2
          </motion.small>
        </div>

        <span className="flow-line flow-line--left" />
        <span className="flow-line flow-line--right" />
      </div>
    </div>
  );
}
