"use client";

import { motion } from "motion/react";

const LOOP = 9;

export function InferenceScene() {
  return (
    <div className="scene ts-inference" aria-label="TypeScript escanea el valor 42 e infiere number, luego rechaza un string">
      <div className="scene-code">let score = 42</div>
      <div className="type-scanner">
        <motion.div className="type-scanner__token" animate={{x:[0,86,86],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.08,.26,.4]}}>42</motion.div>
        <div className="type-scanner__machine"><motion.i animate={{x:[-32,32,-32]}} transition={{duration:2,repeat:Infinity,ease:"linear"}} /><small>TYPE SCAN</small></div>
        <motion.div className="type-scanner__result" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.34,.46,.72,.8]}}>score: <b>number</b></motion.div>
        <motion.div className="type-scanner__reject" animate={{x:[36,0,0,14],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.58,.7,.84,.96]}}>"hola" <b>✕</b></motion.div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>El valor inicial basta para deducir el contrato de la variable.</motion.p>
    </div>
  );
}
