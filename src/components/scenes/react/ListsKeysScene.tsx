"use client";

import { motion } from "motion/react";

const LOOP = 11;

const items = [
  { key: "A", start: 0, end: 52 },
  { key: "B", start: 52, end: 0 },
  { key: "C", start: 104, end: 104 },
];

export function ListsKeysScene() {
  return (
    <div className="scene react-lists" aria-label="Las keys conservan la identidad de A, B y C cuando la lista cambia de orden">
      <div className="scene-code">items.map(item =&gt; &lt;Row key=&#123;item.id&#125; /&gt;)</div>
      <div className="keys-board">
        <small>reordenar B antes de A</small>
        {items.map((item) => (
          <motion.div
            className="keys-board__item"
            key={item.key}
            initial={{ x: item.start }}
            animate={{ x: [item.start, item.start, item.end, item.end, item.start] }}
            transition={{ duration: LOOP, repeat: Infinity, times: [0, .34, .52, .84, 1] }}
          >
            <i>key:{item.key}</i><b>{item.key}</b>
          </motion.div>
        ))}
        <motion.div className="keys-board__identity" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .46, .6, .88, 1] }}>misma identidad ✓</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .9, .98] }}>La posición cambia, pero la key permite reconocer qué elemento sigue siendo cuál.</motion.p>
    </div>
  );
}
