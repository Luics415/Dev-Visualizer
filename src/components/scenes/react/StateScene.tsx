"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function StateScene() {
  return (
    <div className="scene react-state" aria-label="setCount crea un nuevo estado y React produce un nuevo snapshot de la interfaz">
      <div className="scene-code">const [count, setCount] = useState(0)</div>
      <div className="state-snapshots">
        <div className="state-snapshots__cell"><small>state</small><motion.b animate={{ opacity: [1, 1, 0, 0, 1] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .38, .48, .88, 1] }}>0</motion.b><motion.b animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .42, .52, .9, 1] }}>1</motion.b></div>
        <motion.div className="state-snapshots__setter" animate={{ x: [-8, 0, 0, 8], opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.2, .3, .45, .54] }}>setCount(1)</motion.div>
        <div className="state-snapshots__frames"><motion.i animate={{ opacity: [1, 1, .2, .2, 1], x: [0, 0, -8, -8, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .4, .52, .9, 1] }}>UI 0</motion.i><motion.i animate={{ opacity: [0, 0, 1, 1, 0], x: [8, 8, 0, 0, -8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .47, .6, .9, 1] }}>UI 1</motion.i></div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .9, .98] }}>Actualizar estado solicita otro render; cada render observa su propio snapshot.</motion.p>
    </div>
  );
}
