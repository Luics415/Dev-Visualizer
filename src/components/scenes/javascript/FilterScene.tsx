"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 10;
const values = [1, 2, 3, 4] as const;

export function FilterScene() {
  return (
    <div
      className="scene filter-scene"
      aria-label="Animación de filter: los números pares 2 y 4 pasan la condición y forman un array nuevo"
    >
      <CodePill>[1, 2, 3, 4].filter(n =&gt; n % 2 === 0)</CodePill>

      <div className="filter-scene__workspace">
        <span className="scene-mini-label filter-scene__input-label">entrada</span>
        <span className="scene-mini-label filter-scene__output-label">nuevo array</span>

        <motion.div
          className="filter-gate"
          animate={{
            borderColor: [
              "rgba(35, 197, 232, .45)",
              "rgba(35, 197, 232, .9)",
              "rgba(35, 197, 232, .45)",
            ],
          }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span>¿par?</span>
          <small>n % 2 === 0</small>
        </motion.div>

        {values.map((value, index) => {
          const accepted = value % 2 === 0;
          const start = 0.08 + index * 0.17;
          const atGate = start + 0.09;
          const decision = atGate + 0.07;
          const exit = decision + 0.09;

          return (
            <motion.span
              className={`filter-token ${accepted ? "filter-token--accepted" : "filter-token--rejected"}`}
              key={value}
              style={{ top: 29 + index * 30 }}
              animate={
                accepted
                  ? {
                      opacity: [0, 1, 1, 1, 0, 0],
                      x: [0, 0, 92, 92, 178, 178],
                      scale: [0.8, 1, 1, 1.08, 0.86, 0.86],
                    }
                  : {
                      opacity: [0, 1, 1, 1, 0, 0],
                      x: [0, 0, 92, 92, 92, 92],
                      y: [0, 0, 0, 0, 22, 22],
                      scale: [0.8, 1, 1, 1, 0.7, 0.7],
                    }
              }
              transition={{
                duration: LOOP_SECONDS,
                repeat: Infinity,
                times: [0, start, atGate, decision, exit, 1],
              }}
            >
              {value}
              <motion.i
                aria-hidden="true"
                animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                transition={{
                  duration: LOOP_SECONDS,
                  repeat: Infinity,
                  times: [0, atGate, decision - 0.02, decision, exit, 1],
                }}
              >
                {accepted ? "✓" : "×"}
              </motion.i>
            </motion.span>
          );
        })}

        {[2, 4].map((value, index) => (
          <motion.span
            className="filter-result-cell"
            key={value}
            style={{ top: 42 + index * 48 }}
            animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.75, 0.75, 1, 1, 0.8] }}
            transition={{
              duration: LOOP_SECONDS,
              repeat: Infinity,
              times: index === 0 ? [0, 0.34, 0.44, 0.88, 1] : [0, 0.68, 0.78, 0.88, 1],
            }}
          >
            {value}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
