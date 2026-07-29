"use client";

import { motion } from "motion/react";

const LOOP = 11;

export function ArraysScene() {
  return (
    <div className="scene js-array" aria-label="Un array ordenado accede al índice 1, agrega 40 y luego lo elimina">
      <div className="scene-code">numbers.push(40) · numbers.pop()</div>
      <div className="array-conveyor">
        <div className="array-conveyor__rail" />
        {[10,20,30].map((value,index)=><motion.div className="array-conveyor__cell" key={value} animate={index===1?{y:[0,-8,-8,0]}:{}} transition={{ duration: LOOP, repeat: Infinity, times: [0,.28,.42,.54] }}><small>{index}</small><b>{value}</b></motion.div>)}
        <motion.div className="array-conveyor__cell array-conveyor__cell--new" animate={{ opacity:[0,0,1,1,0,0], x:[18,18,0,0,24,24], scale:[.8,.8,1,1,.8,.8] }} transition={{duration:LOOP,repeat:Infinity,times:[0,.44,.54,.72,.82,1]}}><small>3</small><b>40</b></motion.div>
        <motion.div className="array-conveyor__access" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.16,.24,.4,.48]}}>numbers[1] → 20</motion.div>
        <motion.div className="array-conveyor__event" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.48,.56,.86,1]}}>push agrega · pop retira el último</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>El orden define los índices y las operaciones del final modifican la longitud.</motion.p>
    </div>
  );
}
