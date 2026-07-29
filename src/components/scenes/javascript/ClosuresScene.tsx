"use client";

import { motion } from "motion/react";

const LOOP = 11;

export function ClosuresScene() {
  return (
    <div className="scene js-closure" aria-label="La función increment conserva acceso a count aunque createCounter ya terminó">
      <div className="scene-code">const increment = createCounter()</div>
      <div className="closure-shell">
        <motion.div className="closure-shell__outer" animate={{opacity:[0,1,1,.18,.18,0],scale:[.9,1,1,1,1,.9]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.1,.36,.48,.9,1]}}><small>createCounter()</small><div className="closure-env"><span>count</span><motion.b animate={{opacity:[1,0,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.1,.52,1]}}>0</motion.b>{[1,2].map((n,i)=><motion.b key={n} animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.48+i*.18,.56+i*.18,.7+i*.18,.78+i*.18]}}>{n}</motion.b>)}</div></motion.div>
        <motion.div className="closure-shell__inner" animate={{x:[0,0,78,78],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.2,.42,.9,1]}}><strong>increment()</strong><small>mantiene el enlace</small></motion.div>
        <motion.div className="closure-shell__link" animate={{width:[0,78,78,78],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.36,.48,.9,1]}} />
        <motion.div className="closure-shell__calls" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.5,.58,.9,1]}}>increment() → 1 → 2</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>El entorno léxico sobrevive porque la función interna todavía lo referencia.</motion.p>
    </div>
  );
}
