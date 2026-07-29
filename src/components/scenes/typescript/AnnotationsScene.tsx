"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function AnnotationsScene() {
  return (
    <div className="scene ts-annotation" aria-label="La anotación string funciona como un contrato que acepta texto y rechaza números">
      <div className="scene-code">let username: string</div>
      <div className="contract-gate">
        <div className="contract-gate__seal">string<small>contrato</small></div>
        <motion.div className="contract-gate__value contract-gate__value--ok" animate={{x:[0,104,150,150],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.08,.28,.42,.5]}}>"Ana"</motion.div>
        <motion.div className="contract-gate__value contract-gate__value--bad" animate={{x:[0,92,72,72],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.54,.7,.84,.94]}}>24</motion.div>
        <motion.div className="contract-gate__ok" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.28,.38,.48,.56]}}>aceptado ✓</motion.div>
        <motion.div className="contract-gate__error" animate={{opacity:[0,1,1,0],scale:[.8,1,1,.8]}} transition={{duration:LOOP,repeat:Infinity,times:[.7,.78,.9,.98]}}>number ≠ string</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>La anotación declara qué valores pueden cruzar el límite.</motion.p>
    </div>
  );
}
