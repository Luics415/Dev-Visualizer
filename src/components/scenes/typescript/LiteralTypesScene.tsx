"use client";

import { motion } from "motion/react";

const LOOP = 11;

export function LiteralTypesScene() {
  return (
    <div className="scene ts-literal" aria-label="Solo draft, published y archived pueden cruzar el selector de estados">
      <div className="scene-code">type Status = "draft" | "published" | "archived"</div>
      <div className="literal-wheel">
        <div className="literal-wheel__allowed">{["draft","published","archived"].map((x,i)=><motion.span key={x} animate={{opacity:[.35,1,.35]}} transition={{duration:LOOP,repeat:Infinity,times:[.1+i*.2,.22+i*.2,.34+i*.2]}}>{x}</motion.span>)}</div>
        <div className="literal-wheel__slot">status</div>
        <motion.div className="literal-wheel__bad" animate={{y:[0,36,28],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.7,.84,.96]}}>"deleted" ✕</motion.div>
        <motion.div className="literal-wheel__note" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.46,.56,.74,.82]}}>solo valores exactos</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>Un tipo literal funciona como una lista cerrada de valores permitidos.</motion.p>
    </div>
  );
}
