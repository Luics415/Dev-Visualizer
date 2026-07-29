"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function OptionalPropsScene() {
  return (
    <div className="scene ts-optional" aria-label="Name es obligatorio, avatar es opcional y el objeto sigue siendo válido sin él">
      <div className="scene-code">{`type Profile = { name: string; avatar?: string }`}</div>
      <div className="optional-plugs">
        <div className="optional-plugs__object">profile</div>
        <div className="optional-plug optional-plug--required"><small>required</small><b>name</b><motion.i animate={{x:[-32,0,0],opacity:[0,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.1,.26,.4]}}>"Ana"</motion.i></div>
        <div className="optional-plug optional-plug--optional"><small>optional ?</small><b>avatar</b><motion.i animate={{x:[-32,0,0,-32],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.42,.58,.72,.84]}}>"ana.png"</motion.i></div>
        <motion.div className="optional-plugs__valid" animate={{opacity:[0,0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.7,.78,.92,1]}}>válido con o sin avatar ✓</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>El signo ? permite ausencia; no convierte la propiedad requerida en opcional.</motion.p>
    </div>
  );
}
