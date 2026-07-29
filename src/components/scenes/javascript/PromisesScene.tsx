"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function PromisesScene() {
  return (
    <div className="scene js-promise" aria-label="Una promesa nace pending y termina fulfilled o rejected">
      <div className="scene-code">fetchData().then(...).catch(...)</div>
      <div className="promise-machine">
        <motion.div className="promise-state promise-state--pending" animate={{scale:[1,1.08,1],borderColor:["rgba(245,199,66,.35)","rgba(245,199,66,.95)","rgba(245,199,66,.35)"]}} transition={{duration:LOOP,repeat:Infinity,times:[.05,.18,.3]}}>pending<small>esperando</small></motion.div>
        <motion.div className="promise-state promise-state--ok" animate={{opacity:[.35,.35,1,1,.35]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.28,.4,.55,.62]}}>fulfilled<small>resolve(data)</small></motion.div>
        <motion.div className="promise-state promise-state--bad" animate={{opacity:[.35,.35,1,1,.35]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.62,.72,.88,1]}}>rejected<small>reject(error)</small></motion.div>
        <svg className="promise-machine__routes" viewBox="0 0 280 150" aria-hidden="true"><path d="M140 58 C110 72 88 80 66 102"/><path d="M140 58 C170 72 192 80 214 102"/></svg>
        <motion.i className="promise-machine__packet promise-machine__packet--ok" animate={{offsetDistance:["0%","100%"],opacity:[0,1,0]}} transition={{duration:3,repeat:Infinity,repeatDelay:9}} />
        <motion.div className="promise-machine__rule" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.05,.1,.9,.98]}}>solo cambia una vez</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>Pending es temporal; la promesa queda fijada al resolverse o rechazarse.</motion.p>
    </div>
  );
}
