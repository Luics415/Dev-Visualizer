"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function UseMemoScene() {
  return (
    <div className="scene react-memo" aria-label="useMemo calcula cuando cambia la dependencia y reutiliza el valor cuando permanece igual">
      <div className="scene-code">const total = useMemo(calc, [items])</div>
      <div className="memo-cache">
        <div className="memo-cache__input">items<small>hash A</small></div>
        <div className="memo-cache__cpu"><motion.i animate={{ rotate: [0, 360] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}>⚙</motion.i><span>calc()</span></div>
        <div className="memo-cache__box">cache<small>$225</small></div>
        <motion.b className="memo-cache__miss" animate={{ opacity: [0, 1, 1, 0, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.08, .14, .38, .46, 1] }}>MISS → calcular</motion.b>
        <motion.b className="memo-cache__hit" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .54, .62, .88, .98] }}>HIT → reutilizar</motion.b>
        <motion.span animate={{ x: [0, 70, 140, 140], opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.12, .32, .55, .7] }}>$225</motion.span>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .92, .99] }}>La caché evita repetir un cálculo, pero solo mientras las dependencias sean equivalentes.</motion.p>
    </div>
  );
}
