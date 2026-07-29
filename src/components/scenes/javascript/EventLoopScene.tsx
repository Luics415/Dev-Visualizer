"use client";

import { motion } from "motion/react";

const LOOP = 14;

export function EventLoopScene() {
  return (
    <div className="scene js-event-loop" aria-label="El Event Loop coordina Call Stack, Web APIs, microtareas y tareas para producir A, D, C, B">
      <div className="scene-code">A · setTimeout(B) · Promise(C) · D</div>
      <div className="event-board">
        <div className="event-zone event-zone--stack"><small>CALL STACK</small>{["A","D","C","B"].map((x,i)=><motion.b key={x} animate={{opacity:[0,1,1,0],y:[10,0,0,-8]}} transition={{duration:LOOP,repeat:Infinity,times:[.05+i*.18,.09+i*.18,.17+i*.18,.22+i*.18]}}>{x}</motion.b>)}</div>
        <div className="event-zone event-zone--api"><small>WEB API</small><motion.b animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.14,.22,.54,.62]}}>timer B</motion.b></div>
        <div className="event-zone event-zone--micro"><small>MICROTASK</small><motion.b animate={{x:[-18,0,0],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.25,.36,.5]}}>C</motion.b></div>
        <div className="event-zone event-zone--task"><small>TASK</small><motion.b animate={{x:[-18,0,0],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.46,.58,.76]}}>B</motion.b></div>
        <motion.div className="event-rotor" animate={{rotate:[0,360]}} transition={{duration:3,repeat:Infinity,ease:"linear"}}>↻</motion.div>
        <motion.div className="event-output" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.72,.8,.94,1]}}>salida: A → D → C → B</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>Al vaciarse el stack, las microtareas tienen prioridad sobre la cola de tareas.</motion.p>
    </div>
  );
}
