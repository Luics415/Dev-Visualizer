"use client";

import { motion } from "motion/react";

const LOOP = 11;

export function ArraysTuplesScene() {
  return (
    <div className="scene ts-arrays-tuples" aria-label="Un array acepta varios números y una tupla fija la cantidad, posición y tipo de cada elemento">
      <div className="scene-code">number[] vs [string, number]</div>
      <div className="collection-compare">
        <section><header>array<small>mismo tipo · longitud variable</small></header><div className="collection-compare__cells">{[10,20,30].map((n,i)=><motion.span key={n} animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.05+i*.05,.12+i*.05,.86,.96]}}>{n}</motion.span>)}<motion.span className="collection-compare__extra" animate={{width:[0,36,36,0],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.34,.46,.7,.82]}}>40</motion.span></div></section>
        <section><header>tupla<small>posiciones fijas</small></header><div className="tuple-slots"><motion.span animate={{borderColor:["rgba(59,211,255,.3)","rgba(59,211,255,.9)","rgba(59,211,255,.3)"]}} transition={{duration:LOOP,repeat:Infinity,times:[.15,.3,.45]}}>"Ana"<small>string</small></motion.span><motion.span animate={{borderColor:["rgba(245,199,66,.3)","rgba(245,199,66,.9)","rgba(245,199,66,.3)"]}} transition={{duration:LOOP,repeat:Infinity,times:[.45,.6,.75]}}>24<small>number</small></motion.span></div></section>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>El array repite un tipo; la tupla describe cada posición.</motion.p>
    </div>
  );
}
