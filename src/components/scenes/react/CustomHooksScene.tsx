"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function CustomHooksScene() {
  return (
    <div className="scene react-custom-hook" aria-label="useOnlineStatus encapsula lógica compartida y la reutilizan Header y Checkout">
      <div className="scene-code">const online = useOnlineStatus()</div>
      <div className="hook-extraction">
        <div className="hook-extraction__pieces"><span>state</span><span>effect</span><span>events</span></div>
        <motion.div className="hook-extraction__hook" animate={{ scale: [.9, 1, 1, .9], opacity: [.4, 1, 1, .4] }} transition={{ duration: LOOP, repeat: Infinity, times: [.12, .3, .78, .94] }}>useOnlineStatus</motion.div>
        <div className="hook-extraction__consumers"><b>Header</b><b>Checkout</b></div>
        <motion.i animate={{ x: [0, 78, 156, 156], opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.18, .4, .68, .86] }}>online</motion.i>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .92, .99] }}>Un custom hook comparte lógica con estado, no una instancia única del estado entre componentes.</motion.p>
    </div>
  );
}
