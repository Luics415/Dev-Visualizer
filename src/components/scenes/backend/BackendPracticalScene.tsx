"use client";

import { motion } from "motion/react";

const LOOP = 25;
const repeat = { duration: LOOP, repeat: Infinity } as const;
const pipeline = [
  ["edge","Gateway","request id · rate limit"],
  ["auth","Auth guard","principal · permission"],
  ["schema","Validation","CreateRepairInput"],
  ["domain","Repair service","stock · invariants"],
  ["tx","Transaction","repair + outbox"],
  ["worker","Worker","analyze blueprint"],
] as const;

export function BackendPracticalScene() {
  return (
    <div className="system-action system-action--backend" aria-label="Caso integrado de backend para crear una orden de reparación del arma Fishbones, validar la solicitud, aplicar autorización, guardar una transacción y procesar un job asíncrono">
      <header className="system-action__toolbar">
        <div><span><i /> request live</span><b>Reparación de Fishbones · una petición, dos ritmos</b></div>
        <div>{["HTTP","políticas","dominio","transacción","evento","respuesta"].map((label,index)=><motion.em key={label} animate={{opacity:[.3,.3,1,1,.35]}} transition={{...repeat,times:[0,.04+index*.13,.1+index*.13,.68+index*.035,.92]}}>{String(index+1).padStart(2,"0")} {label}</motion.em>)}</div>
      </header>

      <div className="system-action__grid system-action__grid--backend">
        <section className="system-action__request">
          <header><b>POST /v1/repairs</b><span>req_hex_42</span></header>
          <div className="system-action__request-line"><strong>POST</strong><code>/v1/repairs</code><em>HTTP/2</em></div>
          <div className="system-action__headers">
            <p><b>Authorization</b><code>Bearer eyJ…</code></p>
            <p><b>Idempotency-Key</b><code>fishbones-42</code></p>
            <p><b>Content-Type</b><code>application/json</code></p>
          </div>
          <div className="system-action__body"><small>body</small><code>{`{ item: "Fishbones", issue: "core unstable" }`}</code></div>
          <motion.div className="system-action__request-status" animate={{opacity:[0,1,1,0,0,1,1,0]}} transition={{...repeat,times:[.04,.08,.69,.73,.77,.81,.94,.99]}}><span>processing…</span><b>202 Accepted · repair #42</b></motion.div>
        </section>

        <section className="system-action__pipeline">
          <header><b>REQUEST LIFECYCLE</b><small>sync path + async continuation</small></header>
          <div className="system-action__rail" />
          {pipeline.map(([key,title,detail],index)=><motion.div className={`system-action__backend-node system-action__backend-node--${key}`} key={key} animate={{opacity:[.35,.35,1,1,.5],x:[index%2?8:-8,index%2?8:-8,0,0,0]}} transition={{...repeat,times:[0,.1+index*.095,.15+index*.095,.72,.92]}}><i>{index+1}</i><div><b>{title}</b><small>{detail}</small></div><em>✓</em></motion.div>)}
          <motion.span className="system-action__backend-packet" animate={{top:[54,54,375,375],opacity:[0,1,1,0]}} transition={{...repeat,times:[.07,.11,.63,.69]}}>req_hex_42</motion.span>
        </section>

        <aside className="system-action__inspector">
          <section>
            <header><b>Structured logs</b><span>trace 42</span></header>
            {[["00.0","route matched"],["02.4","token verified"],["05.8","schema valid"],["12.1","stock reserved"],["18.9","transaction committed"],["22.0","job enqueued"]].map(([time,event],index)=><motion.p key={time} animate={{opacity:[.18,.18,1,1,.4]}} transition={{...repeat,times:[0,.12+index*.09,.17+index*.09,.82,.95]}}><time>{time}</time><code>{event}</code></motion.p>)}
          </section>
          <section className="system-action__backend-metrics">
            <header><b>RED signals</b><span>healthy</span></header>
            <div><small>rate</small><b>38 rps</b></div><div><small>errors</small><b>0.2%</b></div><div><small>p95</small><b>74 ms</b></div><div><small>queue</small><b>3 jobs</b></div>
          </section>
        </aside>

        <motion.section className="system-action__async" animate={{opacity:[0,0,1,1,0]}} transition={{...repeat,times:[0,.68,.73,.94,1]}}>
          <div><b>OUTBOX</b><small>RepairCreated · #42</small></div><i>→</i><div><b>QUEUE</b><small>analyze-blueprint</small></div><i>→</i><div><b>WORKER</b><small>status: inspecting</small></div>
        </motion.section>
      </div>

      <p className="system-action__takeaway">La respuesta síncrona termina después de autenticar, validar y confirmar una transacción. El trabajo lento continúa mediante outbox y cola; request-id, logs, métricas y spans mantienen ambas partes conectadas.</p>
    </div>
  );
}
