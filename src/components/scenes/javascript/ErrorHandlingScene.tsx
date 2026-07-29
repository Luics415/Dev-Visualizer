"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 12;

export function ErrorHandlingScene() {
  return (
    <div
      className="scene error-scene"
      aria-label="Animación de manejo de errores: una ejecución exitosa pasa por try y finally, y otra ejecución fallida pasa por catch y finally"
    >
      <CodePill>{"try { parse() } catch { recover() } finally { cleanup() }"}</CodePill>

      <div className="error-scene__workspace">
        <motion.div
          className="error-node error-node--try"
          animate={{ borderColor: ["rgba(35, 197, 232, .5)", "rgba(35, 197, 232, .9)", "rgba(35, 197, 232, .5)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          try
          <small>parse()</small>
        </motion.div>

        <div className="error-path error-path--success" aria-hidden="true">↗</div>
        <div className="error-path error-path--failure" aria-hidden="true">↘</div>

        <motion.div
          className="error-node error-node--result"
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.18, 0.25, 0.42, 0.48, 1] }}
        >
          resultado ✓
        </motion.div>

        <motion.div
          className="error-node error-node--catch"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.62, 0.69, 0.86, 1] }}
        >
          catch
          <small>recover()</small>
        </motion.div>

        <motion.div
          className="error-node error-node--finally"
          animate={{
            opacity: [0.35, 0.35, 1, 1, 0.35, 0.35, 1, 1, 0.35],
            borderColor: [
              "rgba(247, 200, 67, .35)",
              "rgba(247, 200, 67, .35)",
              "rgba(247, 200, 67, .78)",
              "rgba(247, 200, 67, .78)",
              "rgba(247, 200, 67, .35)",
              "rgba(247, 200, 67, .35)",
              "rgba(247, 200, 67, .78)",
              "rgba(247, 200, 67, .78)",
              "rgba(247, 200, 67, .35)",
            ],
          }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.35, 0.42, 0.5, 0.56, 0.79, 0.86, 0.94, 1] }}
        >
          finally
          <small>cleanup()</small>
        </motion.div>

        <motion.span
          className="error-run-label error-run-label--success"
          animate={{ opacity: [0, 1, 1, 0, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.08, 0.48, 0.54, 1] }}
        >
          ejecución 1 · éxito
        </motion.span>

        <motion.span
          className="error-run-label error-run-label--failure"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.56, 0.62, 0.94, 1] }}
        >
          ejecución 2 · error
        </motion.span>

        <motion.span
          className="error-packet"
          animate={{
            opacity: [0, 1, 1, 0, 0, 1, 1, 0, 0],
            x: [0, 0, 86, 150, 0, 0, 86, 150, 150],
            y: [0, 0, -34, 0, 0, 0, 34, 0, 0],
          }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.1, 0.28, 0.49, 0.55, 0.62, 0.72, 0.93, 1] }}
        >
          •
        </motion.span>
      </div>
    </div>
  );
}
