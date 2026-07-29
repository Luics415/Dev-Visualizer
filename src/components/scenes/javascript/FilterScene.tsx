"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function FilterScene() {
  return (
    <div className="scene js-filter" aria-label="filter examina números y conserva únicamente los pares">
      <div className="scene-code">numbers.filter(n =&gt; n % 2 === 0)</div>
      <div className="filter-gate">
        <div className="filter-gate__input">[1, 2, 3, 4]</div>
        <motion.div className="filter-gate__diamond" animate={{rotate:[45,45,225,225,45]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.35,.45,.86,1]}}><span>?</span></motion.div>
        <div className="filter-gate__yes"><small>true</small><motion.b animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.48,.58,.9,1]}}>[2, 4]</motion.b></div>
        <div className="filter-gate__no"><small>false</small><motion.b animate={{opacity:[0,0,1,1,0],y:[-8,-8,0,12,12]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.38,.48,.76,1]}}>1 · 3</motion.b></div>
        {[1,2,3,4].map((n,i)=><motion.i className="filter-gate__token" key={n} animate={{x:[0,92,92],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.05+i*.08,.18+i*.08,.32+i*.08]}}>{n}</motion.i>)}
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>La condición decide por elemento: true continúa; false queda fuera.</motion.p>
    </div>
  );
}
