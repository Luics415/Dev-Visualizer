"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function FunctionTypesScene() {
  return (
    <div className="scene ts-function" aria-label="Una función tipada tiene puertos number para dos parámetros y devuelve number">
      <div className="scene-code">(a: number, b: number) =&gt; number</div>
      <div className="typed-sockets">
        <div className="typed-sockets__port typed-sockets__port--a"><small>a</small><b>number</b></div>
        <div className="typed-sockets__port typed-sockets__port--b"><small>b</small><b>number</b></div>
        <motion.div className="typed-sockets__core" animate={{scale:[1,1.05,1]}} transition={{duration:LOOP,repeat:Infinity,times:[.32,.46,.6]}}>sum<small>a + b</small></motion.div>
        <div className="typed-sockets__port typed-sockets__port--return"><small>return</small><b>number</b></div>
        <motion.span className="typed-sockets__token typed-sockets__token--a" animate={{x:[0,60,60],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.08,.24,.38]}}>3</motion.span>
        <motion.span className="typed-sockets__token typed-sockets__token--b" animate={{x:[0,60,60],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.14,.3,.42]}}>5</motion.span>
        <motion.span className="typed-sockets__token typed-sockets__token--out" animate={{x:[-42,0,0],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.48,.62,.84]}}>8</motion.span>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>Parámetros y retorno forman un contrato completo de llamada.</motion.p>
    </div>
  );
}
