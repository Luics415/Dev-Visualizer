"use client";

import { motion, useReducedMotion } from "motion/react";

const LOOP = 34;
const stages = [
  "symptom",
  "scope",
  "reproduce",
  "request ID",
  "network",
  "breakpoint",
  "stack",
  "trace",
  "hypothesis",
  "experiment",
  "root cause",
  "fix",
  "regression",
  "canary",
] as const;

const evidence = [
  ["UI", "Jinx sees two repair orders"],
  ["Network", "POST /repairs ×2"],
  ["Frontend", "listener registered twice"],
  ["Backend", "same body · different idempotency key"],
  ["DB", "two committed rows"],
  ["Trace", "effect setup → setup without cleanup"],
] as const;

export function DebuggingPracticalScene() {
  const reducedMotion = useReducedMotion();
  const repeat = { duration: LOOP, repeat: reducedMotion ? 0 : Infinity } as const;

  return (
    <div className="system-action system-action--debugging" aria-label="Caitlyn investiga por qué Jinx crea dos órdenes de reparación: reproduce, correlaciona red y trazas, usa breakpoints, prueba una hipótesis, corrige cleanup e idempotencia y valida con regresión y canary">
      <header className="system-action__toolbar">
        <div>
          <span><i /> investigation live</span>
          <b>Caso Caitlyn · una pulsación, dos órdenes de reparación de Fishbones</b>
        </div>
        <div>
          {stages.map((stage, index) => (
            <motion.em key={stage} animate={{ opacity: [.2, .2, 1, 1, .32] }} transition={{ ...repeat, times: [0, .014 + index * .046, .05 + index * .046, .84, .98] }}>
              {String(index + 1).padStart(2, "0")} {stage}
            </motion.em>
          ))}
        </div>
      </header>

      <div className="debug-action__grid">
        <section className="debug-action__symptom">
          <header><b>Lo observado</b><span>prod · app 2.18.0</span></header>
          <div className="debug-action__ui">
            <div><span>Repair Fishbones</span><b>stabilizer calibration</b></div>
            <motion.button animate={{ scale: [1, 1, .95, 1, 1] }} transition={{ ...repeat, times: [0, .14, .18, .24, .42] }}>Crear orden</motion.button>
            <motion.p animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .25, .33, .85, .96] }}><b>#421</b> creada</motion.p>
            <motion.p animate={{ opacity: [0, 0, 1, 1, 0], color: ["#ff7185", "#ff7185"] }} transition={{ ...repeat, times: [0, .29, .37, .85, .96] }}><b>#422</b> creada</motion.p>
          </div>
          <div className="debug-action__scope">
            <small>scope confirmado</small>
            <p><b>usuarios</b><span>12% Android · sesión reanudada</span></p>
            <p><b>inicio</b><span>release 2.18.0</span></p>
            <p><b>impacto</b><span>31 órdenes duplicadas</span></p>
          </div>
        </section>

        <section className="debug-action__board">
          <header><b>Evidence board</b><span>request_id repair_powpow_42</span></header>
          <svg viewBox="0 0 520 410" aria-hidden="true">
            <path d="M95 75 C170 75 160 155 250 155" />
            <path d="M425 75 C350 75 360 155 270 155" />
            <path d="M95 315 C170 315 160 225 250 225" />
            <path d="M425 315 C350 315 360 225 270 225" />
          </svg>
          {evidence.map(([title, detail], index) => (
            <motion.div className={`debug-action__evidence debug-action__evidence--${index}`} key={title} animate={{ opacity: [.24, .24, 1, 1, .38], scale: [.96, .96, 1, 1, .98] }} transition={{ ...repeat, times: [0, .07 + index * .075, .14 + index * .075, .78, .95] }}>
              <i>{String(index + 1).padStart(2, "0")}</i><b>{title}</b><small>{detail}</small>
            </motion.div>
          ))}
          <motion.div className="debug-action__hypothesis" animate={{ borderColor: ["#3a4557", "#3a4557", "#ff8a65", "#49e1a8"], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 0 rgba(0,0,0,0)", "0 0 18px rgba(255,138,101,.14)", "0 0 18px rgba(73,225,168,.12)"] }} transition={{ ...repeat, times: [0, .42, .55, .82] }}>
            <small>hypothesis H3</small><b>effect adds listener twice</b><span>missing cleanup + no idempotency</span>
          </motion.div>
          <motion.span className="debug-action__cursor" animate={{ left: [40, 40, 250, 250, 410, 410], top: [72, 72, 188, 188, 310, 310], opacity: [0, 1, 1, 1, 1, 0] }} transition={{ ...repeat, times: [.04, .08, .36, .48, .7, .78] }}>inspect</motion.span>
        </section>

        <aside className="debug-action__tools">
          <section>
            <header><b>Debugger</b><span>paused on event listener</span></header>
            <div className="debug-action__source">
              <code>useEffect(() =&gt; &#123;</code>
              <motion.code animate={{ backgroundColor: ["transparent", "transparent", "rgba(255,202,40,.11)", "rgba(255,202,40,.11)"] }} transition={{ ...repeat, times: [0, .34, .44, .72] }}>  button.addEventListener("click", submit)</motion.code>
              <motion.code animate={{ color: ["#718298", "#718298", "#ff7185", "#ff7185", "#49e1a8"] }} transition={{ ...repeat, times: [0, .42, .54, .67, .82] }}>  // return () =&gt; removeEventListener(...)</motion.code>
              <code>&#125;, [])</code>
            </div>
            <div className="debug-action__stack">
              <p><b>submit()</b><span>RepairForm.tsx:48</span></p>
              <p><b>HTMLButtonElement</b><span>listener #2</span></p>
              <p><b>effect setup</b><span>commit 7</span></p>
            </div>
          </section>

          <section>
            <header><b>Network + trace</b><span>same click · two branches</span></header>
            <div className="debug-action__waterfall">
              <p><small>POST #1</small><motion.i animate={{ width: ["0%", "0%", "72%", "72%"] }} transition={{ ...repeat, times: [0, .24, .39, .88] }} /><b>201 · 86 ms</b></p>
              <p><small>POST #2</small><motion.i animate={{ width: ["0%", "0%", "64%", "64%"] }} transition={{ ...repeat, times: [0, .29, .44, .88] }} /><b>201 · 79 ms</b></p>
            </div>
            <div className="debug-action__trace">
              <span>click</span><i>→</i><span>submit ×2</span><i>→</i><span>DB commit ×2</span>
            </div>
          </section>

          <section>
            <header><b>Experiment</b><span>one variable changed</span></header>
            <div className="debug-action__experiment">
              <p><b>control</b><span>2 requests / click</span></p>
              <motion.p animate={{ borderColor: ["#34435a", "#34435a", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .61, .72, .96] }}><b>cleanup added</b><span>1 request / click</span></motion.p>
              <p><b>server key</b><span>duplicate retry → same order</span></p>
            </div>
          </section>
        </aside>

        <motion.section className="debug-action__verification" animate={{ opacity: [.38, .38, 1, 1, .5] }} transition={{ ...repeat, times: [0, .72, .81, .97, 1] }}>
          <div><b>root cause</b><small>listener sin cleanup tras remount de la pantalla</small></div><i>→</i>
          <div><b>fix</b><small>cleanup simétrico + Idempotency-Key por intención</small></div><i>→</i>
          <div><b>regression</b><small>test monta, desmonta y vuelve a montar</small></div><i>→</i>
          <div><b>canary</b><small>duplicate_order_rate 3.1% → 0%</small></div>
        </motion.section>
      </div>

      <p className="system-action__takeaway">La investigación no comenzó cambiando código: primero acotó versión, plataforma e impacto; luego un request ID conectó UI, red, backend y filas de base de datos. El breakpoint demostró dos listeners, el experimento con cleanup redujo el flujo a una sola request y la idempotencia del backend protegió reintentos legítimos. La prueba de regresión reproduce el lifecycle, no solo el resultado final.</p>
    </div>
  );
}
