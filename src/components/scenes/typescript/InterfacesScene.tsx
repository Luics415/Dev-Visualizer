"use client";

import { motion } from "motion/react";

const LOOP = 11;

export function InterfacesScene() {
  return (
    <div className="scene ts-interface" aria-label="Una interfaz base se extiende para añadir permisos a Admin">
      <div className="scene-code">interface Admin extends User</div>
      <div className="interface-layers">
        <div className="interface-layer interface-layer--base"><small>User</small><span>id: number</span><span>name: string</span></div>
        <motion.div className="interface-layer interface-layer--extension" animate={{x:[-28,-28,0,0],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.22,.38,.84,.96]}}><small>Admin</small><span>permissions: string[]</span></motion.div>
        <motion.div className="interface-layers__bridge" animate={{height:[0,42,42,0],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.3,.44,.82,.94]}} />
        <motion.div className="interface-layers__result" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.58,.68,.9,1]}}>Admin contiene User + permisos</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>Las interfaces describen contratos abiertos que pueden extenderse.</motion.p>
    </div>
  );
}
