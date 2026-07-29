"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function GenericsScene() {
  return (
    <div className="scene ts-generics" aria-label="Identity recibe un valor T y devuelve el mismo tipo sin perder información">
      <div className="scene-code">function identity&lt;T&gt;(value: T): T</div>
      <div className="generic-tunnel">
        <div className="generic-tunnel__machine">identity&lt;T&gt;<small>preserva T</small></div>
        <div className="generic-tunnel__lane generic-tunnel__lane--number"><motion.span animate={{x:[0,0,164,164],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.08,.34,.48,.58]}}>10 <small>number</small></motion.span></div>
        <div className="generic-tunnel__lane generic-tunnel__lane--string"><motion.span animate={{x:[0,0,164,164],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.52,.72,.86,.96]}}>"A" <small>string</small></motion.span></div>
        <motion.div className="generic-tunnel__trace" animate={{width:[0,164,0],opacity:[0,1,0]}} transition={{duration:LOOP/2,repeat:Infinity}} />
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>T se adapta al dato de entrada y mantiene esa relación en la salida.</motion.p>
    </div>
  );
}
