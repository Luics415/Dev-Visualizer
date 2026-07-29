"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function UnionTypesScene() {
  return (
    <div className="scene ts-union" aria-label="String y number son rutas válidas hacia id, mientras boolean queda bloqueado">
      <div className="scene-code">let id: string | number</div>
      <div className="union-routes">
        <div className="union-route union-route--string"><span>string</span><motion.i animate={{x:[0,106,106],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.08,.28,.42]}}>"A7"</motion.i></div>
        <div className="union-route union-route--number"><span>number</span><motion.i animate={{x:[0,106,106],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.34,.54,.68]}}>42</motion.i></div>
        <div className="union-route union-route--boolean"><span>boolean</span><motion.i animate={{x:[0,62,48],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.62,.78,.92]}}>true</motion.i><b>×</b></div>
        <div className="union-routes__target">id<small>string | number</small></div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>La unión abre varias rutas válidas sin aceptar cualquier tipo.</motion.p>
    </div>
  );
}
