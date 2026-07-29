"use client";

import { motion } from "motion/react";

const LOOP = 8;

export function VariablesScene() {
  return (
    <div className="scene js-variable" aria-label="La variable score apunta a una celda de memoria cuyo valor cambia de 10 a 20">
      <div className="scene-code">let score = 10</div>
      <div className="memory-map">
        <div className="memory-map__addresses"><span>0x01</span><span>0x02</span><span>0x03</span></div>
        <div className="memory-map__cells"><i /><motion.i className="memory-map__active" animate={{ boxShadow: ["0 0 0 rgba(59,211,255,0)", "0 0 20px rgba(59,211,255,.28)", "0 0 0 rgba(59,211,255,0)"] }} transition={{ duration: LOOP, repeat: Infinity }}><motion.b animate={{ opacity: [0,1,1,0,0], y: [8,0,0,-8,-8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.12,.48,.58,1] }}>10</motion.b><motion.b className="memory-map__new" animate={{ opacity: [0,0,1,1,0], y: [8,8,0,0,-8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.52,.64,.9,1] }}>20</motion.b></motion.i><i /></div>
        <motion.div className="memory-map__pointer" animate={{ opacity: [0,1,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.08,.9,.95,1] }}><span>score</span><em>ref</em></motion.div>
        <motion.div className="memory-map__write" animate={{ x: [45,0,0], opacity: [0,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.5,.64,.76] }}>score = 20</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.05,.12,.88,.98] }}>El nombre conserva la referencia; la asignación sustituye el valor.</motion.p>
    </div>
  );
}
