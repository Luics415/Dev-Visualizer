"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function ComponentsScene() {
  return (
    <div className="scene react-components" aria-label="Los componentes App, ProductCard y PriceTag se componen para formar una interfaz">
      <div className="scene-code">&lt;App&gt;&lt;ProductCard /&gt;&lt;/App&gt;</div>
      <div className="component-tree">
        <motion.div className="component-tree__node component-tree__node--app" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .12, .9, .98] }}>App</motion.div>
        <motion.div className="component-tree__node component-tree__node--card" animate={{ opacity: [0, 0, 1, 1, 0], y: [-8, -8, 0, 0, 8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .16, .27, .87, .98] }}>ProductCard</motion.div>
        <motion.div className="component-tree__node component-tree__node--price" animate={{ opacity: [0, 0, 1, 1, 0], y: [-8, -8, 0, 0, 8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .28, .39, .87, .98] }}>PriceTag</motion.div>
        <span className="component-tree__edge component-tree__edge--one" />
        <span className="component-tree__edge component-tree__edge--two" />
        <motion.div className="component-tree__ui" animate={{ opacity: [0, 0, 1, 1, 0], scale: [.94, .94, 1, 1, .94] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .45, .58, .9, 1] }}><small>Teclado</small><b>$45</b><i>Comprar</i></motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04, .1, .9, .98] }}>La interfaz final surge al componer piezas pequeñas con responsabilidades claras.</motion.p>
    </div>
  );
}
