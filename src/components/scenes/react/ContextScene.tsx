"use client";

import { motion } from "motion/react";

const LOOP = 11;

export function ContextScene() {
  return (
    <div className="scene react-context" aria-label="ThemeProvider distribuye el tema hasta un botón profundo sin pasar props por cada componente intermedio">
      <div className="scene-code">&lt;ThemeProvider value="dark"&gt;…&lt;/ThemeProvider&gt;</div>
      <div className="context-broadcast">
        <div className="context-broadcast__provider">Provider<small>theme: dark</small></div>
        <div className="context-broadcast__tree"><span>Layout</span><span>Panel</span><b>Button</b></div>
        <motion.i animate={{ scale: [.2, 2.8, 2.8], opacity: [.8, 0, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }} />
        <motion.div className="context-broadcast__value" animate={{ y: [0, 100, 100], opacity: [0, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.14, .58, .76] }}>dark</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .92, .99] }}>Los consumidores leen el valor del provider más cercano sin prop drilling intermedio.</motion.p>
    </div>
  );
}
