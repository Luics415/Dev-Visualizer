"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function AsyncAwaitScene() {
  return (
    <div className="scene js-async" aria-label="Await pausa la función asíncrona mientras otras tareas continúan">
      <div className="scene-code">const data = await fetchData()</div>
      <div className="async-timeline">
        <div className="async-lane"><strong>async function</strong><div className="async-track"><motion.span animate={{x:[0,72,72,190,190],opacity:[0,1,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.18,.58,.76,.94]}}>run</motion.span><motion.i animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.18,.24,.58,.66]}}>await</motion.i></div></div>
        <div className="async-lane"><strong>programa</strong><div className="async-track async-track--main">{["click","render","timer"].map((x,i)=><motion.span key={x} animate={{opacity:[0,0,1,1,0],x:[-12,-12,0,0,8]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.27+i*.08,.34+i*.08,.56+i*.08,.64+i*.08]}}>{x}</motion.span>)}</div></div>
        <motion.div className="async-response" animate={{y:[22,0,0],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.56,.66,.78]}}>respuesta ✓</motion.div>
        <motion.div className="async-bracket" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.18,.24,.58,.66]}}>pausa solo esta función</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>Await suspende la continuación de la función, no todo JavaScript.</motion.p>
    </div>
  );
}
