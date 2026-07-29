"use client";

import { motion } from "motion/react";

const LOOP = 11;

export function UseRefScene() {
  return (
    <div className="scene react-ref" aria-label="useRef conserva current entre renders y puede apuntar a un nodo del DOM sin provocar otro render">
      <div className="scene-code">const inputRef = useRef&lt;HTMLInputElement&gt;(null)</div>
      <div className="ref-vault">
        <div className="ref-vault__render">renders <motion.b animate={{ opacity: [1, 1, 0, 0, 1] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .42, .5, .9, 1] }}>1</motion.b><motion.b animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .46, .55, .9, 1] }}>2</motion.b></div>
        <div className="ref-vault__cell">ref.current<small>input DOM node</small></div>
        <div className="ref-vault__input">cursor|</div>
        <motion.span animate={{ width: [0, 92, 92], opacity: [0, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.18, .42, .72] }} />
        <motion.div className="ref-vault__note" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .5, .62, .88, .98] }}>current cambió · sin render extra</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .92, .99] }}>La referencia persiste, pero cambiar current no participa en el flujo reactivo del estado.</motion.p>
    </div>
  );
}
