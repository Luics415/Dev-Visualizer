"use client";

import { motion } from "motion/react";

const LOOP = 24;
const repeat = { duration: LOOP, repeat: Infinity } as const;

const topology = [
  ["local", "selectedId", "componente"],
  ["url", "role=adc", "navegación"],
  ["global", "favorites", "cliente"],
  ["query", "champions", "servidor"],
  ["persist", "preferences", "storage"],
] as const;

export function StateManagementPracticalScene() {
  return (
    <div className="system-action system-action--state" aria-label="Caso integrado de gestión de estado para buscar a Jinx, seleccionar un campeón, sincronizar la URL, consultar el servidor y guardar un favorito de forma optimista">
      <header className="system-action__toolbar">
        <div><span><i /> state trace</span><b>Armar una escuadra sin convertir todo en estado global</b></div>
        <div>{["evento","clasificar","consultar","optimismo","persistir","sincronizar"].map((label, index) => (
          <motion.em key={label} animate={{ opacity: [.28,.28,1,1,.35] }} transition={{ ...repeat, times: [0,.05+index*.13,.1+index*.13,.62+index*.045,.9] }}>{String(index+1).padStart(2,"0")} {label}</motion.em>
        ))}</div>
      </header>

      <div className="system-action__grid">
        <section className="system-action__device">
          <header><b>TEAM BUILDER</b><small>cliente React</small></header>
          <div className="system-action__screen">
            <label>Buscar campeón</label>
            <motion.div className="system-action__input" animate={{ borderColor: ["#33425a","#33425a","#3bd3ff","#3bd3ff","#33425a"] }} transition={{ ...repeat, times: [0,.06,.11,.24,.32] }}>
              <span>Jinx</span><i>⌕</i>
            </motion.div>
            <div className="system-action__chips"><b>ADC</b><span>Zaun</span><span>rango</span></div>
            <motion.article animate={{ opacity: [.25,.25,1,1,.45], y: [8,8,0,0,-2] }} transition={{ ...repeat, times: [0,.26,.34,.94,1] }}>
              <div className="system-action__avatar">J</div>
              <div><strong>Jinx</strong><small>ADC · 650 range</small></div>
              <motion.button type="button" animate={{ scale: [1,1,.9,1,1], color: ["#9aa9bb","#9aa9bb","#f5c742","#f5c742","#9aa9bb"] }} transition={{ ...repeat, times: [0,.55,.59,.68,1] }}>★</motion.button>
            </motion.article>
            <motion.p animate={{ opacity: [0,0,1,1,0] }} transition={{ ...repeat, times: [0,.72,.78,.94,1] }}>Guardado · sincronización pendiente 0</motion.p>
          </div>
        </section>

        <section className="system-action__topology">
          <header><b>STATE OWNERSHIP MAP</b><small>una autoridad por dato</small></header>
          <div className="system-action__hub"><b>UI</b><small>render</small></div>
          {topology.map(([kind,title,detail], index) => (
            <motion.div className={`system-action__state-node system-action__state-node--${kind}`} key={kind}
              animate={{ opacity: [.35,.35,1,1,.48], scale: [.98,.98,1.04,1,.98] }}
              transition={{ ...repeat, times: [0,.11+index*.11,.16+index*.11,.72+index*.04,.93] }}>
              <i>{kind}</i><b>{title}</b><small>{detail}</small>
            </motion.div>
          ))}
          <svg viewBox="0 0 420 300" aria-hidden="true"><path d="M210 145 L88 60 M210 145 L330 62 M210 145 L75 228 M210 145 L345 220 M210 145 L210 274" /></svg>
          <motion.span className="system-action__packet system-action__packet--state" animate={{ left: ["50%","50%","22%","22%","79%","79%","50%"], top: ["48%","48%","19%","19%","20%","20%","48%"], opacity: [0,1,1,0,0,1,0] }} transition={{ ...repeat, times: [.05,.1,.2,.28,.34,.43,.5] }}>query=Jinx</motion.span>
          <motion.span className="system-action__packet system-action__packet--favorite" animate={{ left: ["50%","50%","18%","18%","50%"], top: ["48%","48%","75%","75%","48%"], opacity: [0,1,1,1,0] }} transition={{ ...repeat, times: [.52,.56,.66,.78,.86] }}>favorite(jinx)</motion.span>
        </section>

        <aside className="system-action__inspector">
          <section>
            <header><b>Snapshot inspector</b><span>v18</span></header>
            {[ ["local.selectedId","jinx"], ["url.role","adc"], ["global.favorites","[jinx]"], ["query.status","success"], ["query.stale","false"] ].map(([key,value], index) => (
              <motion.div key={key} animate={{ opacity: [.28,.28,1,1,.45] }} transition={{ ...repeat, times: [0,.18+index*.08,.24+index*.08,.86,.96] }}><code>{key}</code><b>{value}</b></motion.div>
            ))}
          </section>
          <section>
            <header><b>Event log</b><span>observable</span></header>
            {["searchChanged('Jinx')","urlReplaced('?role=adc')","queryCacheHit(champions)","favoriteOptimistic(jinx)","mutationConfirmed(jinx)","snapshotPersisted(v3)"].map((event,index)=>(
              <motion.p key={event} animate={{ opacity: [.16,.16,1,1,.38] }} transition={{ ...repeat, times: [0,.08+index*.12,.14+index*.12,.83,.95] }}><time>{String(index+1).padStart(2,"0")}</time><code>{event}</code></motion.p>
            ))}
          </section>
        </aside>
      </div>

      <p className="system-action__takeaway">La misma pantalla usa cinco clases de estado. El diseño mejora cuando selectedId permanece local, los filtros viven en la URL, los favoritos usan un store compartido, los campeones pertenecen a una caché remota y solo las preferencias necesarias se persisten.</p>
    </div>
  );
}
