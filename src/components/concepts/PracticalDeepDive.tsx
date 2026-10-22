"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import type { PracticalModule } from "@/data/practicalDeepDives";
import { useScenePlayback } from "@/components/visual/useScenePlayback";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { buildPracticalModuleAudioTrack } from "@/lib/audioTrackHelper";
import { useAudioNarrator } from "@/hooks/useAudioNarrator";

type PracticalDeepDiveProps = {
  modules: readonly PracticalModule[];
  startAt?: number;
  collectionId?: string;
};

const LOOP = 10;

export function PracticalDeepDive({ modules, startAt = 7, collectionId }: PracticalDeepDiveProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sectionRef);
  const { activeTrack, status } = useAudioNarrator();
  const isSpeaking = status === "speaking";
  const transition = { duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0 } as const;

  return (
    <section ref={sectionRef} className="practical-deep-dive" data-playback={playback} aria-labelledby="practical-deep-dive-title">
      <header className="practical-deep-dive__intro">
        <span>Profundización del caso</span>
        <h2 id="practical-deep-dive-title">Lo visible y lo que ocurre por dentro</h2>
        <p>Las etapas principales cuentan la historia. Estas cajas dobles abren las decisiones que convierten una demo en un flujo robusto de producción.</p>
      </header>

      <Fragment key={playback}>
      <div className="practical-deep-dive__grid">
        {modules.map((module, index) => {
          const track = collectionId
            ? buildPracticalModuleAudioTrack(collectionId, module, startAt + index)
            : null;
          const isCurrentActive = Boolean(track && isSpeaking && activeTrack?.id === track.id);

          return (
            <article
              className={`practical-module ${isCurrentActive ? "practical-module--audio-active" : ""}`}
              key={module.title}
            >
              <header>
                <span>{String(startAt + index).padStart(2, "0")}</span>
                <div>
                  <h3>
                    {module.title}
                    {isCurrentActive ? (
                      <span className="practical-module__audio-live-pill" aria-label="Locución activa por voz">
                        ● NARRANDO
                      </span>
                    ) : null}
                  </h3>
                  <p>{module.subtitle}</p>
                </div>
                {track ? (
                  <ConceptAudioTrigger
                    track={track}
                    compact
                    className="practical-module__audio-trigger"
                  />
                ) : null}
              </header>

              <div className="practical-module__pair">
                <div className="practical-module__box practical-module__box--visible">
                  <small>Lo que percibe el usuario</small>
                  {module.visible.map((item, itemIndex) => (
                    <motion.b
                      key={item}
                      animate={{ opacity: [.28, .28, 1, 1, .4], x: [-5, -5, 0, 0, 4] }}
                      transition={{ ...transition, times: [0, .08 + itemIndex * .12, .18 + itemIndex * .12, .72, .92] }}
                    >{item}</motion.b>
                  ))}
                </div>

                <motion.i
                  aria-hidden="true"
                  animate={{ opacity: [0, 1, 1, 0], x: [-10, 0, 10, 18] }}
                  transition={{ ...transition, times: [.1, .22, .68, .82] }}
                >→</motion.i>

                <div className="practical-module__box practical-module__box--internal">
                  <small>Lo que sucede internamente</small>
                  {module.internal.map((item, itemIndex) => (
                    <motion.b
                      key={item}
                      animate={{ opacity: [.25, .25, 1, 1, .35], y: [4, 4, 0, 0, -2] }}
                      transition={{ ...transition, times: [0, .22 + itemIndex * .1, .3 + itemIndex * .1, .75, .94] }}
                    >{item}</motion.b>
                  ))}
                </div>
              </div>

              <motion.div className="practical-module__result" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...transition, times: [0, .68, .76, .92, 1] }}>
                {module.result}
              </motion.div>
              <code>{module.code}</code>
              <p className="practical-module__note">{module.note}</p>
            </article>
          );
        })}
      </div>
      </Fragment>
    </section>
  );
}
