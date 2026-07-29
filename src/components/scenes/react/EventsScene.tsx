"use client";

import { motion } from "motion/react";

const LOOP = 9;

export function EventsScene() {
  return (
    <div className="scene react-events" aria-label="Un clic genera un evento que llega al manejador y termina actualizando el estado">
      <div className="scene-code">&lt;button onClick=&#123;handleAdd&#125;&gt;</div>
      <div className="event-signal">
        <div className="event-signal__button">Agregar</div>
        <div className="event-signal__handler">handleAdd()<small>event handler</small></div>
        <div className="event-signal__state">cart + 1</div>
        <span className="event-signal__rail event-signal__rail--one" /><span className="event-signal__rail event-signal__rail--two" />
        <motion.i animate={{ x: [0, 75, 150, 150], opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.12, .38, .66, .82] }}>click</motion.i>
        <motion.b animate={{ scale: [1, .84, 1] }} transition={{ duration: LOOP, repeat: Infinity, times: [.14, .2, .28] }}>↖</motion.b>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .9, .98] }}>El evento transporta la intención del usuario hasta la lógica que cambia la aplicación.</motion.p>
    </div>
  );
}
