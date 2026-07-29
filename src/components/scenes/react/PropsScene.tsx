"use client";

import { motion } from "motion/react";

const LOOP = 9;

export function PropsScene() {
  return (
    <div className="scene react-props" aria-label="El componente padre envía name y price al hijo mediante props en una sola dirección">
      <div className="scene-code">&lt;Product name="Teclado" price={45} /&gt;</div>
      <div className="props-flow">
        <div className="props-flow__parent">Shop<small>parent</small></div>
        <div className="props-flow__child">Product<small>child</small></div>
        <span className="props-flow__rail" />
        <motion.b className="props-flow__token props-flow__token--name" animate={{ x: [0, 120, 120], opacity: [0, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.12, .42, .58] }}>name</motion.b>
        <motion.b className="props-flow__token props-flow__token--price" animate={{ x: [0, 120, 120], opacity: [0, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.3, .6, .76] }}>price</motion.b>
        <motion.div className="props-flow__render" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .56, .7, .9, 1] }}>Teclado <b>$45</b></motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .9, .98] }}>Las props bajan desde el padre; el hijo las usa sin modificar su origen.</motion.p>
    </div>
  );
}
