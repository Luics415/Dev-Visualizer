"use client";

import { motion } from "motion/react";

const LOOP = 11;

export function ConditionalRenderingScene() {
  return (
    <div className="scene react-conditional" aria-label="isLoggedIn dirige el render hacia Login o Dashboard">
      <div className="scene-code">isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;</div>
      <div className="conditional-switch">
        <div className="conditional-switch__source">isLoggedIn</div>
        <motion.div className="conditional-switch__lever" animate={{ rotate: [-24, -24, 24, 24, -24] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .36, .48, .84, 1] }}><i /></motion.div>
        <motion.div className="conditional-switch__output conditional-switch__output--login" animate={{ opacity: [1, 1, .2, .2, 1], scale: [1, 1, .96, .96, 1] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .36, .48, .86, 1] }}>Login</motion.div>
        <motion.div className="conditional-switch__output conditional-switch__output--dashboard" animate={{ opacity: [.2, .2, 1, 1, .2], scale: [.96, .96, 1, 1, .96] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .4, .52, .86, 1] }}>Dashboard</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .9, .98] }}>React produce una rama u otra; no necesita ocultar ambas interfaces después.</motion.p>
    </div>
  );
}
