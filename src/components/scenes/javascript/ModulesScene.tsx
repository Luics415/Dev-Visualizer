"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function ModulesScene() {
  return (
    <div className="scene js-modules" aria-label="Archivos exportan funciones que otro módulo importa y utiliza">
      <div className="scene-code">{'export { sum } · import { sum } from "./math"'}</div>
      <div className="module-graph">
        <div className="module-file module-file--math"><small>math.js</small><b>sum()</b><em>export</em></div>
        <div className="module-file module-file--format"><small>format.js</small><b>money()</b><em>export</em></div>
        <div className="module-file module-file--app"><small>app.js</small><b>checkout()</b><em>import</em></div>
        <svg className="module-graph__lines" viewBox="0 0 280 145" aria-hidden="true"><path d="M72 44 C115 44 116 98 154 98"/><path d="M72 118 C112 118 120 102 154 102"/></svg>
        <motion.span className="module-packet module-packet--one" animate={{x:[0,86,86],y:[0,52,52],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.14,.34,.48]}}>sum</motion.span>
        <motion.span className="module-packet module-packet--two" animate={{x:[0,86,86],y:[0,-18,-18],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.38,.58,.72]}}>money</motion.span>
        <motion.div className="module-graph__result" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.68,.76,.92,1]}}>app combina ambos contratos</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>Cada archivo expone solo lo necesario y declara qué dependencias utiliza.</motion.p>
    </div>
  );
}
