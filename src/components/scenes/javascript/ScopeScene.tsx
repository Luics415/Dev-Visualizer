"use client";

import { motion } from "motion/react";

const LOOP = 10;

export function ScopeScene() {
  return (
    <div className="scene js-scope" aria-label="Los ámbitos global, función y bloque controlan desde dónde se puede acceder a cada variable">
      <div className="scene-code">global → function → block</div>
      <div className="scope-rings">
        <div className="scope-ring scope-ring--global"><span>global</span><b>app</b>
          <div className="scope-ring scope-ring--function"><span>function</span><b>user</b>
            <div className="scope-ring scope-ring--block"><span>block</span><b>token</b></div>
          </div>
        </div>
        <motion.div className="scope-access scope-access--in" animate={{opacity:[0,1,1,0],x:[-20,0,0,12]}} transition={{duration:LOOP,repeat:Infinity,times:[.16,.28,.48,.58]}}>block lee app ✓</motion.div>
        <motion.div className="scope-access scope-access--out" animate={{opacity:[0,1,1,0],x:[16,0,0,-12]}} transition={{duration:LOOP,repeat:Infinity,times:[.54,.64,.84,.94]}}>global lee token ✕</motion.div>
      </div>
      <motion.p className="scene-caption" animate={{ opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.04,.1,.9,.98] }}>Los ámbitos internos ven hacia afuera; el acceso inverso queda bloqueado.</motion.p>
    </div>
  );
}
