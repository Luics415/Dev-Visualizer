"use client";

import { motion } from "motion/react";

const LOOP = 8;

export function FunctionsScene() {
  return (
    <div className="scene js-function" aria-label="La función sum recibe 3 y 5, ejecuta una suma y devuelve 8">
      <div className="scene-code">sum(3, 5)</div>
      <div className="function-ports">
        <div className="function-ports__inputs"><motion.span animate={{ x: [0,54,54], opacity: [0,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.08,.28,.4] }}>3</motion.span><motion.span animate={{ x: [0,54,54], opacity: [0,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.16,.34,.44] }}>5</motion.span></div>
        <motion.div className="function-core" animate={{ scale: [1,1.06,1], borderColor: ["rgba(59,211,255,.35)","rgba(59,211,255,.95)","rgba(59,211,255,.35)"] }} transition={{ duration: LOOP, repeat: Infinity, times: [.35,.48,.62] }}><small>function</small><strong>sum</strong><code>a + b</code></motion.div>
        <motion.div className="function-ports__result" animate={{ x: [-34,-34,0,0], opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.5,.64,.86,.96] }}>8</motion.div>
        <div className="function-ports__line function-ports__line--in" /><div className="function-ports__line function-ports__line--out" />
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.05,.12,.88,.98] }}>Los argumentos entran por parámetros; return entrega un resultado nuevo.</motion.p>
    </div>
  );
}
