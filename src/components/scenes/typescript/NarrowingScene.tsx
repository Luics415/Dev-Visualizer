"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function NarrowingScene() {
  return (
    <div className="scene ts-narrowing" aria-label="typeof separa una unión string o number y habilita operaciones seguras en cada rama">
      <div className="scene-code">typeof value === "string"</div>
      <div className="narrow-tree">
        <div className="narrow-tree__root">value<small>string | number</small></div>
        <div className="narrow-tree__test">typeof</div>
        <motion.div className="narrow-tree__branch narrow-tree__branch--string" animate={{opacity:[.25,1,1,.25]}} transition={{duration:LOOP,repeat:Infinity,times:[.12,.26,.48,.58]}}>string<small>toUpperCase() ✓</small></motion.div>
        <motion.div className="narrow-tree__branch narrow-tree__branch--number" animate={{opacity:[.25,.25,1,1,.25]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.56,.68,.88,.98]}}>number<small>toFixed() ✓</small></motion.div>
        <svg className="narrow-tree__lines" viewBox="0 0 280 150" aria-hidden="true"><path d="M140 42 L140 68"/><path d="M140 86 C112 98 92 106 64 118"/><path d="M140 86 C168 98 188 106 216 118"/></svg>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>La comprobación en runtime reduce la unión dentro de cada rama.</motion.p>
    </div>
  );
}
