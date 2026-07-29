"use client";

import { motion } from "motion/react";

const LOOP = 13;

export function UtilityTypesScene() {
  return (
    <div className="scene ts-utility" aria-label="Partial, Pick y Omit transforman un tipo User sin volver a escribirlo">
      <div className="scene-code">Partial&lt;User&gt; · Pick&lt;User, "name"&gt; · Omit&lt;User, "id"&gt;</div>
      <div className="utility-workshop">
        <div className="utility-workshop__source"><small>User</small><span>id</span><span>name</span><span>email</span></div>
        <div className="utility-tools">{["Partial","Pick","Omit"].map((x,i)=><motion.b key={x} animate={{opacity:[.3,1,.3],scale:[1,1.08,1]}} transition={{duration:LOOP,repeat:Infinity,times:[.1+i*.23,.2+i*.23,.34+i*.23]}}>{x}</motion.b>)}</div>
        <div className="utility-workshop__outputs"><motion.div animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.15,.25,.36,.44]}}><small>Partial</small><span>id?</span><span>name?</span><span>email?</span></motion.div><motion.div animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.4,.5,.62,.7]}}><small>Pick</small><span>name</span></motion.div><motion.div animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.66,.76,.9,.98]}}><small>Omit</small><span>name</span><span>email</span></motion.div></div>
      </div>
      <motion.p className="scene-caption" animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.04,.1,.9,.98]}}>Los utility types derivan contratos nuevos a partir de uno existente.</motion.p>
    </div>
  );
}
