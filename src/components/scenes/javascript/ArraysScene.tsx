"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 10;
const values = [10, 20, 30] as const;

export function ArraysScene() {
  return (
    <div
      className="scene arrays-scene"
      aria-label="Animación de un array: se accede al índice uno, se agrega el valor 40 con push y luego se elimina con pop"
    >
      <CodePill>const numbers = [10, 20, 30]</CodePill>

      <div className="arrays-scene__workspace">
        <motion.span
          className="arrays-scene__name"
          animate={{ opacity: [0, 1, 1, 1, 0], x: [-8, 0, 0, 0, 8] }}
          transition={{
            duration: LOOP_SECONDS,
            repeat: Infinity,
            times: [0, 0.08, 0.88, 0.96, 1],
          }}
        >
          numbers
        </motion.span>

        <div className="arrays-scene__collection">
          <motion.span
            className="array-bracket"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.08, 0.92, 1] }}
          >
            [
          </motion.span>

          <div className="array-cells">
            {values.map((value, index) => (
              <motion.div
                className={`array-cell ${index === 1 ? "array-cell--selected" : ""}`}
                key={value}
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                  y: [8, 8, 0, 0, -5],
                  borderColor:
                    index === 1
                      ? [
                          "rgba(51, 65, 85, 1)",
                          "rgba(51, 65, 85, 1)",
                          "rgba(247, 200, 67, .8)",
                          "rgba(51, 65, 85, 1)",
                          "rgba(51, 65, 85, 1)",
                        ]
                      : "rgba(51, 65, 85, 1)",
                }}
                transition={{
                  duration: LOOP_SECONDS,
                  repeat: Infinity,
                  delay: index * 0.12,
                  times: [0, 0.08, 0.18, 0.9, 1],
                }}
              >
                <span className="array-cell__index">{index}</span>
                <span className="array-cell__value">{value}</span>

                {index === 1 ? (
                  <motion.span
                    className="array-cell__focus"
                    animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                    transition={{
                      duration: LOOP_SECONDS,
                      repeat: Infinity,
                      times: [0, 0.2, 0.28, 0.4, 0.48, 1],
                    }}
                  />
                ) : null}
              </motion.div>
            ))}

            <motion.div
              className="array-cell array-cell--appended"
              animate={{
                opacity: [0, 0, 0, 1, 1, 1, 0, 0],
                x: [24, 24, 24, 0, 0, 0, 0, 0],
                y: [0, 0, 0, 0, 0, 0, -30, -30],
                scale: [0.82, 0.82, 0.82, 1, 1, 1, 0.8, 0.8],
              }}
              transition={{
                duration: LOOP_SECONDS,
                repeat: Infinity,
                times: [0, 0.48, 0.54, 0.62, 0.72, 0.8, 0.88, 1],
              }}
            >
              <span className="array-cell__index">3</span>
              <span className="array-cell__value">40</span>
            </motion.div>
          </div>

          <motion.span
            className="array-bracket"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.08, 0.92, 1] }}
          >
            ]
          </motion.span>
        </div>

        <div className="arrays-scene__events">
          <motion.span
            className="array-event array-event--read"
            animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [5, 5, 0, 0, -4, -4] }}
            transition={{
              duration: LOOP_SECONDS,
              repeat: Infinity,
              times: [0, 0.2, 0.28, 0.4, 0.48, 1],
            }}
          >
            numbers[1] → 20
          </motion.span>

          <motion.span
            className="array-event array-event--push"
            animate={{ opacity: [0, 0, 1, 1, 0, 0], y: [5, 5, 0, 0, -4, -4] }}
            transition={{
              duration: LOOP_SECONDS,
              repeat: Infinity,
              times: [0, 0.48, 0.56, 0.68, 0.74, 1],
            }}
          >
            push(40) · length 4
          </motion.span>

          <motion.span
            className="array-event array-event--pop"
            animate={{ opacity: [0, 0, 1, 1, 0], y: [5, 5, 0, 0, -5] }}
            transition={{
              duration: LOOP_SECONDS,
              repeat: Infinity,
              times: [0, 0.73, 0.79, 0.9, 1],
            }}
          >
            pop() → 40 · length 3
          </motion.span>
        </div>
      </div>
    </div>
  );
}
