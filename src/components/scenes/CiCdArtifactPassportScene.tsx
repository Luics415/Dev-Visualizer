"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

const LOOP = 12;

const gates = [
  ["LINT", "sintaxis"],
  ["TEST", "comportamiento"],
  ["SAST", "seguridad"],
] as const;

export function CiCdArtifactPassportScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const repeat = { duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0 } as const;

  return (
    <div className="cicd-passport" ref={sceneRef} data-playback={playback} aria-label="Un commit atraviesa integración continua y produce un artefacto firmado que puede entregarse o desplegarse">
      <header className="cicd-passport__legend">
        <span><i /> Integración continua</span>
        <span><i /> Evidencia del artefacto</span>
        <span><i /> Entrega y despliegue</span>
      </header>

      <Fragment key={playback}>
        <div className="cicd-passport__board">
          <motion.div className="cicd-passport__commit" animate={{ opacity: [.76, 1, 1, .76], scale: [.96, 1.06, 1, .96] }} transition={{ ...repeat, times: [0, .08, .2, 1] }}>
            <i />
            <b>COMMIT</b>
            <small>7f3a91c</small>
          </motion.div>

          <section className="cicd-passport__ci" aria-label="Controles de integración continua">
            <em>CI</em>
            {gates.map(([name, detail], index) => (
              <motion.div
                key={name}
                animate={{ opacity: [.7, .7, 1, 1, .76], borderColor: ["rgba(255,255,255,.12)", "rgba(255,255,255,.12)", "rgba(73,225,168,.78)", "rgba(73,225,168,.78)", "rgba(255,255,255,.14)"] }}
                transition={{ ...repeat, times: [0, .12 + index * .1, .2 + index * .1, .58, .92] }}
              >
                <span>{name}</span>
                <small>{detail}</small>
                <motion.i animate={{ scale: [.7, .7, 1.2, 1, .7], opacity: [.35, .35, 1, .72, .35] }} transition={{ ...repeat, delay: index * .35 }}>✓</motion.i>
              </motion.div>
            ))}
          </section>

          <motion.section className="cicd-passport__artifact" animate={{ opacity: [.72, .72, 1, 1, .8], boxShadow: ["0 0 0 transparent", "0 0 34px rgba(59,211,255,.3)", "0 0 0 transparent"] }} transition={{ ...repeat, times: [0, .42, .55, .84, 1] }} aria-label="Pasaporte verificable del artefacto">
            <span>ARTEFACTO INMUTABLE</span>
            <strong>sha256:24b9…</strong>
            <div><b>SBOM</b><b>FIRMA</b><b>PROVENANCE</b></div>
            <em>VERIFICADO</em>
          </motion.section>

          <section className="cicd-passport__promotion" aria-label="Dos políticas de promoción">
            <motion.div animate={{ opacity: [.7, .7, 1, 1, .76], x: [-4, -4, 0, 0, 3] }} transition={{ ...repeat, times: [0, .58, .67, .9, 1] }}>
              <span>ENTREGA CONTINUA</span><b>APROBACIÓN</b><small>lista para promover</small>
            </motion.div>
            <motion.div animate={{ opacity: [.7, .7, 1, 1, .76], x: [-4, -4, 0, 0, 3] }} transition={{ ...repeat, times: [0, .68, .76, .94, 1] }}>
              <span>DESPLIEGUE CONTINUO</span><b>POLÍTICA AUTOMÁTICA</b><small>producción sin rebuild</small>
            </motion.div>
          </section>

          <motion.i className="cicd-passport__token" aria-hidden="true" animate={{ left: ["7%", "7%", "38%", "64%", "92%", "92%"], opacity: [0, 1, 1, 1, 1, 0] }} transition={{ ...repeat, ease: "linear", times: [0, .05, .38, .58, .9, 1] }} />
        </div>

        <motion.footer className="cicd-passport__telemetry" animate={{ opacity: [.55, .55, 1, 1, .68] }} transition={{ ...repeat, times: [0, .78, .86, .96, 1] }}>
          <span>PRODUCCIÓN</span><i /><i /><i /><b>telemetría → siguiente commit</b>
        </motion.footer>
      </Fragment>
    </div>
  );
}
