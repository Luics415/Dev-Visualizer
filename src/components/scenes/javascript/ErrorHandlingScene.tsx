"use client";

import { motion } from "motion/react";

const LOOP = 12;

export function ErrorHandlingScene() {
  return (
    <div className="scene js-errors" aria-label="try sigue por éxito o catch en caso de error y ambas rutas pasan por finally">
      <div className="scene-code">{"try { request() } catch (error) { ... } finally { ... }"}</div>
      <div className="error-routes">
        <div className="error-node error-node--try">try<small>request()</small></div>
        <motion.div className="error-node error-node--success" animate={{opacity:[.25,1,1,.25]}} transition={{duration:LOOP,repeat:Infinity,times:[.12,.26,.44,.54]}}>result<small>200 OK</small></motion.div>
        <motion.div className="error-node error-node--catch" animate={{opacity:[.25,.25,1,1,.25]}} transition={{duration:LOOP,repeat:Infinity,times:[0,.54,.66,.84,.94]}}>catch<small>500 error</small></motion.div>
        <div className="error-node error-node--finally">finally<small>cleanup</small></div>
        <svg className="error-routes__svg" viewBox="0 0 280 150" aria-hidden="true"><path d="M56 70 C94 46 110 42 138 42"/><path d="M56 80 C92 110 110 112 138 112"/><path d="M188 42 C220 54 220 64 238 72"/><path d="M188 112 C220 98 220 88 238 80"/></svg>
        <motion.i className="error-packet error-packet--success" animate={{x:[0,82,174,174],y:[0,-32,5,5],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.12,.28,.46,.56]}} />
        <motion.i className="error-packet error-packet--failure" animate={{x:[0,82,174,174],y:[0,32,-5,-5],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.56,.68,.84,.94]}} />
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>Catch intercepta fallos; finally se ejecuta al final de cualquiera de las rutas.</motion.p>
    </div>
  );
}
