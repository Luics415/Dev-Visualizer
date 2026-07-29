"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function TypeAliasesScene() {
  return (
    <div className="scene ts-alias" aria-label="Un alias User actúa como plantilla reutilizable para varias variables">
      <div className="scene-code">{"type User = { id: number; name: string }"}</div>
      <div className="alias-stamp">
        <motion.div className="alias-stamp__template" animate={{y:[0,18,0],scale:[1,1.06,1]}} transition={{duration:LOOP,repeat:Infinity,times:[.12,.28,.42]}}>User<small>type alias</small></motion.div>
        <div className="alias-stamp__copies">{["admin","customer","author"].map((x,i)=><motion.div key={x} animate={{opacity:[0,0,1,1,0],y:[-8,-8,0,0,8]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.22+i*.1,.3+i*.1,.82,.94]}}><b>{x}</b><span>id · name</span></motion.div>)}</div>
        <motion.div className="alias-stamp__mark" animate={{scale:[.7,1,1,.7],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.26,.36,.74,.88]}}>mismo contrato</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>El alias nombra una estructura para reutilizarla sin duplicar su definición.</motion.p>
    </div>
  );
}
