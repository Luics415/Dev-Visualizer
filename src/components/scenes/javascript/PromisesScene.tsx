"use client";

import { motion } from "motion/react";
import { CodePill } from "@/components/visual/CodePill";

const LOOP_SECONDS = 12;

export function PromisesScene() {
  return (
    <div
      className="scene promises-scene"
      aria-label="Animación de una promesa que primero se resuelve y luego se rechaza en el siguiente ciclo interno"
    >
      <CodePill>fetchData().then(onSuccess).catch(onError)</CodePill>

      <div className="promises-scene__workspace">
        <motion.div
          className="promise-box"
          animate={{
            borderColor: [
              "rgba(247, 200, 67, .65)",
              "rgba(247, 200, 67, .65)",
              "rgba(38, 217, 162, .72)",
              "rgba(247, 200, 67, .65)",
              "rgba(255, 102, 122, .72)",
              "rgba(247, 200, 67, .65)",
            ],
          }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.18, 0.34, 0.52, 0.74, 1] }}
        >
          <span className="promise-box__title">Promise</span>

          <motion.span
            className="promise-state promise-state--pending"
            animate={{ opacity: [1, 1, 0, 0, 1, 1, 0, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.18, 0.24, 0.43, 0.5, 0.62, 0.68, 0.78, 1] }}
          >
            pending
          </motion.span>

          <motion.span
            className="promise-state promise-state--fulfilled"
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.22, 0.3, 0.42, 0.48, 1] }}
          >
            fulfilled
            <small>{`{ data: "OK" }`}</small>
          </motion.span>

          <motion.span
            className="promise-state promise-state--rejected"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.66, 0.73, 0.88, 1] }}
          >
            rejected
            <small>Error: timeout</small>
          </motion.span>
        </motion.div>

        <motion.span
          className="promise-handler promise-handler--then"
          animate={{ opacity: [0, 0, 1, 1, 0, 0], x: [-6, -6, 0, 0, 6, 6] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.28, 0.34, 0.43, 0.49, 1] }}
        >
          .then(onSuccess)
        </motion.span>

        <motion.span
          className="promise-handler promise-handler--catch"
          animate={{ opacity: [0, 0, 1, 1, 0], x: [-6, -6, 0, 0, 6] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.72, 0.78, 0.89, 1] }}
        >
          .catch(onError)
        </motion.span>

        <motion.span
          className="promise-reset"
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: LOOP_SECONDS, repeat: Infinity, times: [0, 0.44, 0.48, 0.52, 0.56, 1] }}
        >
          nueva operación
        </motion.span>
      </div>
    </div>
  );
}
