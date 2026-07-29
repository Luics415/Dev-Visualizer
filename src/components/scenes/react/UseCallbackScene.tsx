"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function UseCallbackScene() {
  return (
    <div className="scene react-callback" aria-label="useCallback conserva la referencia de una función para que un hijo memoizado pueda omitir un render">
      <div className="scene-code">const onSave = useCallback(save, [id])</div>
      <div className="callback-reference">
        <div className="callback-reference__parent">Parent<small>render 1 → 2</small></div>
        <motion.div className="callback-reference__fn" animate={{ rotate: [0, 0, 360, 360] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .45, .58, 1] }}>fn#A</motion.div>
        <div className="callback-reference__child">MemoChild<small>props compare</small></div>
        <motion.div className="callback-reference__result" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .38, .5, .82, .92] }}>misma referencia → skip</motion.div>
        <motion.span animate={{ x: [0, 126, 126], opacity: [0, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.16, .42, .58] }} />
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .92, .99] }}>La función puede conservar su identidad; eso solo es útil cuando otra optimización depende de ella.</motion.p>
    </div>
  );
}
