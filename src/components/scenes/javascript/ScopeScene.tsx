"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 11;

export function ScopeScene() {
  return (
    <div
      className="scene scope-scene"
      aria-label="Animación de scope: un bloque accede a variables externas, pero el scope global no puede acceder a una variable del bloque"
    >
      <CodePill>global → function → block</CodePill>

      <div className="scope-scene__workspace">
        <motion.div
          className="scope-box scope-box--global"
          animate={{ borderColor: ["rgba(51, 65, 85, 1)", "rgba(35, 197, 232, .65)", "rgba(51, 65, 85, 1)"] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.2, 1] }}
        >
          <span className="scope-label">Global</span>
          <span className="scope-variable scope-variable--global">app</span>

          <motion.div
            className="scope-box scope-box--function"
            animate={{ borderColor: ["rgba(51, 65, 85, 1)", "rgba(247, 200, 67, .65)", "rgba(51, 65, 85, 1)"] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.34, 1] }}
          >
            <span className="scope-label">Function</span>
            <span className="scope-variable scope-variable--function">user</span>

            <motion.div
              className="scope-box scope-box--block"
              animate={{ borderColor: ["rgba(51, 65, 85, 1)", "rgba(38, 217, 162, .72)", "rgba(51, 65, 85, 1)"] }}
              transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.46, 1] }}
            >
              <span className="scope-label">Block</span>
              <span className="scope-variable scope-variable--block">message</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.span
          className="scope-access scope-access--valid"
          animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [4, 4, 0, 0, -4, -4] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.32, 0.4, 0.62, 0.68, 1] }}
        >
          block accede a app + user ✓
        </motion.span>

        <motion.span
          className="scope-access scope-access--invalid"
          animate={{ opacity: [0, 0, 1, 1, 0], y: [4, 4, 0, 0, -4] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.68, 0.75, 0.91, 1] }}
        >
          global → message ✕
        </motion.span>

        <motion.span
          className="scope-probe"
          animate={{ opacity: [0, 1, 1, 1, 0], y: [85, 85, 45, 8, 8] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.18, 0.34, 0.52, 1] }}
        >
          acceso ↑
        </motion.span>
      </div>
    </div>
  );
}
