"use client";

import { motion } from "motion/react";

const LOOP = 9;

export function MapScene() {
  return (
    <div className="scene js-map" aria-label="map envía cada elemento por la misma transformación y crea un array nuevo">
      <div className="scene-code">[1, 2, 3].map(n =&gt; n * 2)</div>
      <div className="map-lanes">
        {[1,2,3].map((value,index)=><div className="map-lane" key={value}><span className="map-lane__input">{value}</span><div className="map-lane__track"><motion.i animate={{x:[0,0,88,176],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.06+index*.07,.18+index*.07,.46+index*.07,.6+index*.07]}}>{value}</motion.i><b>×2</b></div><motion.span className="map-lane__output" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.42+index*.07,.52+index*.07,.84,1]}}>{value*2}</motion.span></div>)}
        <motion.div className="map-lanes__new" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.63,.7,.9,1]}}>nuevo array [2, 4, 6]</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>La función se aplica por elemento; el array original permanece intacto.</motion.p>
    </div>
  );
}
