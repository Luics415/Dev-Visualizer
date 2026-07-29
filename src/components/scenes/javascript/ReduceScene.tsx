"use client";

import { motion } from "motion/react";

const LOOP = 10;
const values=[1,2,3,4];
const totals=[1,3,6,10];

export function ReduceScene() {
  return (
    <div className="scene js-reduce" aria-label="reduce combina 1, 2, 3 y 4 en un acumulador hasta obtener 10">
      <div className="scene-code">[1,2,3,4].reduce((acc, n) =&gt; acc + n, 0)</div>
      <div className="reduce-orbit">
        <div className="reduce-orbit__ring" />
        {values.map((value,index)=><motion.span className={`reduce-orbit__value reduce-orbit__value--${index}`} key={value} animate={{scale:[1,1.2,0],opacity:[1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.12+index*.13,.22+index*.13,.34+index*.13]}}>{value}</motion.span>)}
        <div className="reduce-orbit__acc"><small>acc</small>{totals.map((total,index)=><motion.b key={total} animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.18+index*.13,.25+index*.13,.34+index*.13,.4+index*.13]}}>{total}</motion.b>)}</div>
        <motion.div className="reduce-orbit__result" animate={{opacity:[0,0,1,1,0],scale:[.8,.8,1,1,.8]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.7,.78,.92,1]}}>resultado <b>10</b></motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>El acumulador transporta el resultado parcial hasta producir un solo valor.</motion.p>
    </div>
  );
}
