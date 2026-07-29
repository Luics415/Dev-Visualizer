"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 12;

const output = [
  { value: "A", from: 0.12 },
  { value: "D", from: 0.38 },
  { value: "C", from: 0.66 },
  { value: "B", from: 0.84 },
] as const;

export function EventLoopScene() {
  return (
    <div
      className="scene event-loop-scene"
      aria-label="Animación del Event Loop: A y D se ejecutan primero, luego la microtarea C y finalmente la tarea B"
    >
      <CodePill>A · setTimeout(B) · Promise(C) · D</CodePill>

      <div className="event-loop-scene__workspace">
        <div className="event-loop-node event-loop-node--stack">
          <span>Call Stack</span>
          <motion.code
            animate={{ opacity: [0, 1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.08, 0.18, 0.24, 1] }}
          >
            console(A)
          </motion.code>
          <motion.code
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.2, 0.25, 0.34, 0.39, 1] }}
          >
            console(D)
          </motion.code>
          <motion.code
            className="event-stack-job"
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.58, 0.64, 0.71, 0.76, 1] }}
          >
            then(C)
          </motion.code>
          <motion.code
            className="event-stack-job"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.78, 0.84, 0.91, 1] }}
          >
            timeout(B)
          </motion.code>
        </div>

        <div className="event-loop-node event-loop-node--api">
          <span>Web APIs</span>
          <motion.code
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.18, 0.25, 0.48, 0.54, 1] }}
          >
            timer: B
          </motion.code>
        </div>

        <div className="event-loop-node event-loop-node--micro">
          <span>Microtask Queue</span>
          <motion.code
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.3, 0.37, 0.59, 0.65, 1] }}
          >
            C
          </motion.code>
        </div>

        <div className="event-loop-node event-loop-node--task">
          <span>Task Queue</span>
          <motion.code
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.46, 0.53, 0.79, 0.85, 1] }}
          >
            B
          </motion.code>
        </div>

        <motion.div
          className="event-loop-orbit"
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <span>↻</span>
        </motion.div>

        <div className="event-loop-output" aria-label="Salida A D C B">
          <span>console</span>
          {output.map((item) => (
            <motion.b
              key={item.value}
              animate={{ opacity: [0, 0, 1, 1, 0], y: [5, 5, 0, 0, -3] }}
              transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, item.from, item.from + 0.04, 0.94, 1] }}
            >
              {item.value}
            </motion.b>
          ))}
        </div>
      </div>
    </div>
  );
}
