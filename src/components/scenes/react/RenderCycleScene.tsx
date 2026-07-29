"use client";

import { motion } from "motion/react";

const LOOP = 13;

export function RenderCycleScene() {
  return (
    <div className="scene react-render-cycle" aria-label="Una actualización pasa por render, comparación del árbol y commit del cambio mínimo al DOM">
      <div className="scene-code">setState → render → diff → commit</div>
      <div className="render-orbit">
        {["update", "render", "diff", "commit"].map((label, index) => (
          <div className={`render-orbit__node render-orbit__node--${index + 1}`} key={label}>{label}</div>
        ))}
        <motion.div className="render-orbit__token" animate={{ rotate: [0, 360] }} transition={{ duration: LOOP, repeat: Infinity, ease: "linear" }}><i /></motion.div>
        <div className="render-orbit__trees"><span>old tree</span><b>1 cambio</b><span>new tree</span></div>
        <motion.div className="render-orbit__dom" animate={{ opacity: [.35, .35, 1, 1, .35] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .68, .78, .94, 1] }}>DOM +1</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .93, .99] }}>React vuelve a calcular la descripción y aplica al DOM únicamente las diferencias necesarias.</motion.p>
    </div>
  );
}
