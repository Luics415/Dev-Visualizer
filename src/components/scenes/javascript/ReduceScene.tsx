"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 10;
const values = [1, 2, 3, 4] as const;
const steps = [
  { equation: "0 + 1", result: "1", from: 0.13, to: 0.28 },
  { equation: "1 + 2", result: "3", from: 0.29, to: 0.44 },
  { equation: "3 + 3", result: "6", from: 0.45, to: 0.6 },
  { equation: "6 + 4", result: "10", from: 0.61, to: 0.8 },
] as const;

export function ReduceScene() {
  return (
    <div
      className="scene reduce-scene"
      aria-label="Animación de reduce: un acumulador suma 1, 2, 3 y 4 hasta obtener 10"
    >
      <CodePill>[1, 2, 3, 4].reduce((sum, n) =&gt; sum + n, 0)</CodePill>

      <div className="reduce-scene__workspace">
        <div className="reduce-input-row" aria-hidden="true">
          {values.map((value, index) => (
            <motion.span
              key={value}
              animate={{
                opacity: [1, 1, 0.2, 0.2, 1],
                y: [0, 0, 5, 5, 0],
              }}
              transition={{
                duration: LOOP_SECONDS,
                repeat: Infinity,
                times: [0, 0.12 + index * 0.16, 0.23 + index * 0.16, 0.88, 1],
              }}
            >
              {value}
            </motion.span>
          ))}
        </div>

        <span className="reduce-arrow" aria-hidden="true">↓</span>

        <motion.div
          className="reduce-accumulator"
          animate={{
            boxShadow: [
              "0 0 0 rgba(38, 217, 162, 0)",
              "0 0 22px rgba(38, 217, 162, .2)",
              "0 0 0 rgba(38, 217, 162, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="scene-mini-label">acumulador</span>
          <div className="reduce-accumulator__value">
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.12, 0.16, 1] }}
            >
              0
            </motion.span>
            {steps.map((step) => (
              <motion.span
                key={step.result}
                animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                transition={{
                  duration: LOOP_SECONDS,
                  repeat: Infinity,
                  times: [0, step.from - 0.03, step.from, step.to, step.to + 0.03, 1],
                }}
              >
                {step.result}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="reduce-equations">
          {steps.map((step) => (
            <motion.span
              key={step.equation}
              animate={{ opacity: [0, 0, 1, 1, 0, 0], x: [-5, -5, 0, 0, 5, 5] }}
              transition={{
                duration: LOOP_SECONDS,
                repeat: Infinity,
                times: [0, step.from - 0.04, step.from, step.to, step.to + 0.04, 1],
              }}
            >
              {step.equation} = {step.result}
            </motion.span>
          ))}
        </div>

        <motion.span
          className="reduce-final"
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.79, 0.84, 0.92, 1] }}
        >
          resultado → 10
        </motion.span>
      </div>
    </div>
  );
}
