"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function ObjectsScene() {
  return (
    <div className="scene js-object" aria-label="Un objeto agrupa propiedades, permite leer age y actualizarla de 24 a 25">
      <div className="scene-code">user.age = 25</div>
      <div className="object-orbit">
        <motion.div className="object-orbit__hub" animate={{ scale: [0.92,1,1,1,.92], opacity: [0,1,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.1,.88,.94,1] }}>user</motion.div>
        {[
          ["name", '"Ana"', "top"],
          ["active", "true", "left"],
          ["age", "24", "right"],
        ].map(([key,value,pos], index) => <motion.div className={`object-orbit__prop object-orbit__prop--${pos}`} key={key} animate={{ opacity: [0,0,1,1,0], scale: [.8,.8,1,1,.8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.1+index*.06,.2+index*.06,.9,1] }}><small>{key}</small><b>{value}</b></motion.div>)}
        <svg className="object-orbit__links" viewBox="0 0 260 150" aria-hidden="true"><path d="M130 72 L130 24"/><path d="M112 78 L48 106"/><path d="M148 78 L212 106"/></svg>
        <motion.div className="object-orbit__read" animate={{ opacity: [0,0,1,1,0], x: [-8,0,0,8,8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.42,.5,.62,.7] }}>user.age → 24</motion.div>
        <motion.div className="object-orbit__patch" animate={{ opacity: [0,0,1,1,0], scale: [.8,.8,1,1,.8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.64,.72,.88,1] }}>24 → <b>25</b></motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>Cada propiedad tiene su propia clave; actualizar una no reemplaza el objeto entero.</motion.p>
    </div>
  );
}
