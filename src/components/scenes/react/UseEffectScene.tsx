"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function UseEffectScene() {
  return (
    <div className="scene react-effect" aria-label="React renderiza y confirma la interfaz, luego ejecuta el efecto; antes del siguiente efecto ejecuta cleanup">
      <div className="scene-code">useEffect(() =&gt; subscribe(id), [id])</div>
      <div className="effect-timeline">
        {[
          ["render", .08], ["commit", .25], ["effect", .42], ["cleanup", .64], ["effect", .79],
        ].map(([label, time], index) => (
          <motion.div key={`${label}-${index}`} animate={{ opacity: [.25, .25, 1, 1, .25], scale: [.95, .95, 1.06, 1, .95] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, Number(time) - .025, Number(time), Number(time) + .09, Math.min(Number(time) + .15, 1)] }}><i>{index + 1}</i><span>{label}</span></motion.div>
        ))}
        <span />
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .92, .99] }}>El efecto sincroniza después del commit y limpia la sincronización anterior cuando corresponde.</motion.p>
    </div>
  );
}
