"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function ReadonlyScene() {
  return (
    <div className="scene ts-readonly" aria-label="Readonly bloquea la reasignación de id después de crear el objeto">
      <div className="scene-code">readonly id: number</div>
      <div className="readonly-vault">
        <div className="readonly-vault__object"><small>user</small><span>id</span><b>101</b></div>
        <motion.div className="readonly-vault__lock" animate={{y:[-18,-18,0,0],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.12,.3,.86,.96]}}><i>⌁</i><span>readonly</span></motion.div>
        <motion.div className="readonly-vault__write" animate={{x:[0,82,62],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.48,.68,.84]}}>id = 202</motion.div>
        <motion.div className="readonly-vault__error" animate={{opacity:[0,0,1,1,0],scale:[.8,.8,1,1,.8]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.66,.74,.9,1]}}>Cannot assign to id ✕</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>Readonly impide la reasignación mediante TypeScript durante el desarrollo.</motion.p>
    </div>
  );
}
