"use client";

import { motion } from "motion/react";

const LOOP = 25;
const repeat = { duration: LOOP, repeat: Infinity } as const;

export function DatabasePracticalScene() {
  return (
    <div className="system-action system-action--database" aria-label="Caso integrado de base de datos para reservar piezas de una reparación con índice, transacción, control de concurrencia, WAL y réplica">
      <header className="system-action__toolbar">
        <div><span><i /> database trace</span><b>Reservar piezas sin vender la última dos veces</b></div>
        <div>{["plan","snapshot","lock/version","write","commit","replicate"].map((label,index)=><motion.em key={label} animate={{opacity:[.28,.28,1,1,.36]}} transition={{...repeat,times:[0,.05+index*.13,.1+index*.13,.68+index*.04,.93]}}>{String(index+1).padStart(2,"0")} {label}</motion.em>)}</div>
      </header>

      <div className="system-action__grid system-action__grid--database">
        <section className="system-action__query-plan">
          <header><b>QUERY + PLAN</b><span>tx_901</span></header>
          <code>{`SELECT * FROM parts WHERE sku = 'HEX-CORE' FOR UPDATE;`}</code>
          <div className="system-action__plan-tree">
            <motion.div animate={{opacity:[.35,1,1,.4]}} transition={repeat}><b>LockRows</b><small>rows=1</small></motion.div>
            <i />
            <motion.div animate={{opacity:[.25,.25,1,1,.35]}} transition={{...repeat,times:[0,.12,.2,.8,.95]}}><b>Index Scan</b><small>parts_sku_idx</small></motion.div>
            <i />
            <motion.div animate={{opacity:[.2,.2,1,1,.35]}} transition={{...repeat,times:[0,.18,.27,.8,.95]}}><b>Index Cond</b><small>sku = HEX-CORE</small></motion.div>
          </div>
          <div className="system-action__plan-metrics"><span>cost 0.28..8.30</span><span>actual 0.14 ms</span><span>buffers 3</span></div>
        </section>

        <section className="system-action__transactions">
          <header><b>CONCURRENT TRANSACTIONS</b><small>READ COMMITTED + row lock</small></header>
          <div className="system-action__tx-lane"><span>T1</span><motion.b animate={{width:["8%","8%","91%","91%"]}} transition={{...repeat,times:[0,.12,.68,1]}}>BEGIN · lock row · stock 1→0 · COMMIT</motion.b></div>
          <div className="system-action__tx-lane"><span>T2</span><motion.b animate={{width:["8%","8%","54%","54%","91%"]}} transition={{...repeat,times:[0,.22,.42,.7,.9]}}>BEGIN · wait · recheck · no stock · ROLLBACK</motion.b></div>
          <motion.div className="system-action__row-lock" animate={{opacity:[0,0,1,1,0],scale:[.94,.94,1.04,1,.94]}} transition={{...repeat,times:[0,.24,.3,.66,.75]}}>🔒 parts[HEX-CORE]</motion.div>
          <div className="system-action__versions"><span>v7 · stock=1</span><motion.i animate={{opacity:[0,0,1,1]}} transition={{...repeat,times:[0,.45,.53,1]}}>v8 · stock=0</motion.i></div>
        </section>

        <aside className="system-action__storage">
          <section>
            <header><b>TABLE + INDEX</b><span>primary</span></header>
            <div className="system-action__index"><b>B-tree</b><span>HEX-CORE → page 18</span><span>GEAR-08 → page 31</span></div>
            <div className="system-action__table"><b>parts</b><p><code>HEX-CORE</code><span>stock</span><motion.strong animate={{color:["#f5c742","#f5c742","#49e1a8","#49e1a8"]}} transition={{...repeat,times:[0,.44,.52,1]}}>0</motion.strong></p></div>
          </section>
          <section>
            <header><b>WAL + REPLICA</b><span>lag 18 ms</span></header>
            {["BEGIN tx_901","UPDATE parts v8","INSERT repair #42","COMMIT LSN 0/4A91"].map((line,index)=><motion.p key={line} animate={{opacity:[.18,.18,1,1,.38]}} transition={{...repeat,times:[0,.38+index*.08,.44+index*.08,.82,.94]}}><code>{line}</code></motion.p>)}
            <motion.div className="system-action__replica" animate={{opacity:[.3,.3,1,1,.45]}} transition={{...repeat,times:[0,.62,.7,.94,1]}}><b>replica</b><span>replay LSN 0/4A91</span><em>stock=0</em></motion.div>
          </section>
        </aside>
      </div>

      <p className="system-action__takeaway">El índice localiza la fila; la transacción protege la invariante; el segundo escritor espera y vuelve a comprobar; COMMIT vuelve durable el cambio en el log y la réplica lo aplica después. Rendimiento y consistencia aparecen en la misma historia.</p>
    </div>
  );
}
