"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function ObjectTypesScene() {
  return (
    <div className="scene ts-object" aria-label="Un plano de tipo se superpone al objeto y valida cada propiedad">
      <div className="scene-code">{`type User = { name: string; age: number }`}</div>
      <div className="object-blueprint">
        <motion.div className="object-blueprint__schema" animate={{x:[-24,-24,0,0],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.08,.24,.84,.96]}}><small>TYPE USER</small><span>name : string</span><span>age : number</span></motion.div>
        <div className="object-blueprint__instance"><small>VALUE</small><span>name : "Ana"</span><span>age : 24</span></div>
        <motion.div className="object-blueprint__scan" animate={{y:[0,0,72,0],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.24,.48,.76,.88]}} />
        <motion.div className="object-blueprint__result" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.64,.72,.9,1]}}>forma compatible ✓</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>El tipo valida la forma: nombres de propiedades y tipos de sus valores.</motion.p>
    </div>
  );
}
