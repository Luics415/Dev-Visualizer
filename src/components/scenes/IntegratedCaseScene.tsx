"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import type { IntegratedCaseStep } from "@/data/expandedCollectionTypes";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

type IntegratedCaseSceneProps = {
  title: string;
  steps: readonly IntegratedCaseStep[];
};

const LOOP = 16;

export function IntegratedCaseScene({ title, steps }: IntegratedCaseSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);

  return (
    <div className="integrated-case" ref={sceneRef} data-playback={playback} aria-label={`Historia visual: ${title}`}>
      <header className="integrated-case__legend">
        <span><i /> Lo que percibe la persona</span>
        <span><i /> Lo que procesa el sistema</span>
        <span><i /> Recuperación y evidencia</span>
      </header>

      <Fragment key={playback}>
      <div className="integrated-case__track" style={{ "--case-steps": steps.length } as React.CSSProperties}>
        <div className="integrated-case__rail" aria-hidden="true" />
        <motion.i
          className="integrated-case__token"
          aria-hidden="true"
          animate={{ left: ["2%", "96%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0, ease: "linear", times: [0, .06, .94, 1] }}
        />

        {steps.map((stage, index) => {
          const reveal = .06 + index * (.8 / Math.max(steps.length, 1));
          return (
            <motion.article
              className={`integrated-case__step integrated-case__step--${stage.state ?? "normal"}`}
              key={stage.title}
              animate={{ opacity: [.72, .72, 1, 1, .76], y: [5, 5, 0, 0, -2] }}
              transition={{ duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0, times: [0, reveal, Math.min(reveal + .06, .9), Math.min(reveal + .22, .95), 1] }}
            >
              <header><em>{String(index + 1).padStart(2, "0")}</em><div><strong>{stage.title}</strong><small>{stage.subtitle}</small></div></header>
              <div className="integrated-case__boundary">
                <span>{stage.visible[0]}</span><i>→</i><span>{stage.internal[0]}</span>
              </div>
              <code>{stage.code}</code>
              <b>{stage.result}</b>
            </motion.article>
          );
        })}
      </div>
      </Fragment>
    </div>
  );
}
