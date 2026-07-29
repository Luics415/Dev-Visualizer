"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const input = [1, 2, 3];
const output = [2, 4, 6];
const LOOP_SECONDS = 7;

export function MapScene() {
  return (
    <div className="scene map-scene" aria-label="Animación de map transformando cada número por dos">
      <CodePill>numbers.map(n =&gt; n * 2)</CodePill>

      <div className="map-scene__pipeline">
        <div className="array-row">
          {input.map((value, index) => (
            <motion.span
              key={`input-${value}`}
              animate={{ opacity: [0.3, 1, 1, 0.3], y: [0, -3, -3, 0] }}
              transition={{
                duration: LOOP_SECONDS,
                repeat: Infinity,
                delay: index * 0.24,
                times: [0, 0.18, 0.55, 1],
              }}
            >
              {value}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="map-machine"
          animate={{ boxShadow: ["0 0 0 rgba(33, 200, 246, 0)", "0 0 22px rgba(33, 200, 246, .24)", "0 0 0 rgba(33, 200, 246, 0)"] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.46, 1] }}
        >
          × 2
        </motion.div>

        <div className="array-row array-row--output">
          {output.map((value, index) => (
            <motion.span
              key={`output-${value}`}
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.7, 0.7, 1, 1, 0.7] }}
              transition={{
                duration: LOOP_SECONDS,
                repeat: Infinity,
                delay: index * 0.24,
                times: [0, 0.38, 0.52, 0.86, 1],
              }}
            >
              {value}
            </motion.span>
          ))}
        </div>

        <span className="map-arrow map-arrow--one">→</span>
        <span className="map-arrow map-arrow--two">→</span>
      </div>
    </div>
  );
}
