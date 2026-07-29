"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function JsxScene() {
  return (
    <div className="scene react-jsx" aria-label="JSX se transforma en un elemento de React y después produce un botón en el DOM">
      <div className="scene-code">&lt;Button label="Comprar" /&gt;</div>
      <div className="jsx-transform">
        <div className="jsx-transform__source">JSX<small>&lt;Button /&gt;</small></div>
        <div className="jsx-transform__machine"><motion.i animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>✦</motion.i><span>transform</span></div>
        <div className="jsx-transform__element">React element<small>{`{ type, props }`}</small></div>
        <div className="jsx-transform__dom">Comprar</div>
        <motion.span animate={{ x: [0, 58, 116, 174], opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.08, .27, .55, .82] }}>●</motion.span>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .9, .98] }}>JSX es una descripción declarativa que el compilador convierte en valores de JavaScript.</motion.p>
    </div>
  );
}
