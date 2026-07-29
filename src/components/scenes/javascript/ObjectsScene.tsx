"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 9;

const objectRows = [
  { property: "name", value: '"Ana"', className: "object-value--string" },
  { property: "age", value: "24", className: "object-value--number" },
  { property: "active", value: "true", className: "object-value--boolean" },
] as const;

export function ObjectsScene() {
  return (
    <div
      className="scene objects-scene"
      aria-label="Animación de un objeto user cuyas propiedades aparecen y cuya edad cambia de 24 a 25"
    >
      <CodePill>const user = {`{ name: "Ana", age: 24 }`}</CodePill>

      <div className="objects-scene__workspace">
        <motion.span
          className="objects-scene__reference"
          animate={{ opacity: [0, 1, 1, 1, 0], x: [-8, 0, 0, 0, 8] }}
          transition={{
            duration: LOOP_SECONDS,
            repeat: Infinity,
            times: [0, 0.1, 0.76, 0.92, 1],
          }}
        >
          user
        </motion.span>

        <motion.div
          className="object-card"
          animate={{
            opacity: [0, 1, 1, 1, 0],
            scale: [0.94, 1, 1, 1, 0.96],
          }}
          transition={{
            duration: LOOP_SECONDS,
            repeat: Infinity,
            times: [0, 0.1, 0.82, 0.94, 1],
          }}
        >
          <span className="object-card__brace" aria-hidden="true">
            {"{"}
          </span>

          <div className="object-card__rows">
            {objectRows.map((row, index) => {
              const isAge = row.property === "age";

              return (
                <motion.div
                  className={`object-row ${isAge ? "object-row--age" : ""}`}
                  key={row.property}
                  animate={{
                    opacity: [0, 0, 1, 1, 1, 0],
                    x: [-8, -8, 0, 0, 0, 6],
                  }}
                  transition={{
                    duration: LOOP_SECONDS,
                    repeat: Infinity,
                    delay: index * 0.2,
                    times: [0, 0.12, 0.22, 0.82, 0.94, 1],
                  }}
                >
                  <span className="object-key">{row.property}</span>
                  <span className="object-separator">:</span>

                  {isAge ? (
                    <span className="object-age-value">
                      <motion.span
                        className="object-value object-value--number"
                        animate={{ opacity: [1, 1, 1, 0, 0] }}
                        transition={{
                          duration: LOOP_SECONDS,
                          repeat: Infinity,
                          times: [0, 0.48, 0.62, 0.69, 1],
                        }}
                      >
                        24
                      </motion.span>
                      <motion.span
                        className="object-value object-value--updated"
                        animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                        transition={{
                          duration: LOOP_SECONDS,
                          repeat: Infinity,
                          times: [0, 0.6, 0.67, 0.74, 0.92, 1],
                        }}
                      >
                        25
                      </motion.span>
                    </span>
                  ) : (
                    <span className={`object-value ${row.className}`}>{row.value}</span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <span className="object-card__brace" aria-hidden="true">
            {"}"}
          </span>

          <motion.span
            className="object-card__focus"
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              scale: [0.96, 0.96, 1, 1, 1.02, 1.02],
            }}
            transition={{
              duration: LOOP_SECONDS,
              repeat: Infinity,
              times: [0, 0.32, 0.4, 0.58, 0.66, 1],
            }}
          />
        </motion.div>

        <div className="objects-scene__actions">
          <motion.span
            className="object-action object-action--read"
            animate={{ opacity: [0, 0, 1, 1, 0, 0], x: [8, 8, 0, 0, -4, -4] }}
            transition={{
              duration: LOOP_SECONDS,
              repeat: Infinity,
              times: [0, 0.32, 0.4, 0.54, 0.62, 1],
            }}
          >
            user.age → 24
          </motion.span>

          <motion.span
            className="object-action object-action--write"
            animate={{ opacity: [0, 0, 1, 1, 0], x: [8, 8, 0, 0, -5] }}
            transition={{
              duration: LOOP_SECONDS,
              repeat: Infinity,
              times: [0, 0.58, 0.66, 0.86, 1],
            }}
          >
            user.age = 25
          </motion.span>
        </div>
      </div>
    </div>
  );
}
