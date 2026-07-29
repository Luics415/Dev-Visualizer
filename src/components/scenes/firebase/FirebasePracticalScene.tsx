"use client";

import { motion, useReducedMotion } from "motion/react";

const LOOP = 32;
const stages = [
  "initialize",
  "Auth",
  "App Check",
  "listener",
  "local write",
  "Rules",
  "commit",
  "Function",
  "Storage",
  "FCM",
  "offline",
  "reconnect",
  "Remote Config",
  "Crashlytics",
] as const;

const cloudNodes = [
  ["Auth", "uid: jinx_42"],
  ["App Check", "valid attestation"],
  ["Firestore", "workshops/jinx"],
  ["Rules", "owner == request.auth.uid"],
  ["Functions", "onDocumentWritten"],
  ["Storage", "blueprints/fishbones.png"],
  ["FCM", "topic workshop_updates"],
] as const;

export function FirebasePracticalScene() {
  const reducedMotion = useReducedMotion();
  const repeat = { duration: LOOP, repeat: reducedMotion ? 0 : Infinity } as const;

  return (
    <div className="system-action system-action--firebase" aria-label="Jinx actualiza el plano de Fishbones en una app Firebase: autenticación, App Check, escritura optimista de Firestore, reglas, función, Storage, notificación, offline y observabilidad">
      <header className="system-action__toolbar">
        <div>
          <span><i /> realtime session live</span>
          <b>Jinx Workshop · plano de Fishbones sincronizado entre móvil y nube</b>
        </div>
        <div>
          {stages.map((stage, index) => (
            <motion.em key={stage} animate={{ opacity: [.2, .2, 1, 1, .32] }} transition={{ ...repeat, times: [0, .015 + index * .047, .05 + index * .047, .83, .98] }}>
              {String(index + 1).padStart(2, "0")} {stage}
            </motion.em>
          ))}
        </div>
      </header>

      <div className="firebase-action__grid">
        <section className="firebase-action__phone">
          <header><b>Cliente React Native</b><span>online → offline → online</span></header>
          <div className="firebase-action__screen">
            <div className="firebase-action__status"><span>9:41</span><b>Jinx Workshop</b><i>●</i></div>
            <div className="firebase-action__profile"><em>JX</em><div><b>Jinx</b><small>uid jinx_42 · verified</small></div></div>
            <article>
              <span>FISHBONES / BLUEPRINT</span>
              <b>Stabilizer calibration</b>
              <small>power = 88%</small>
              <motion.div className="firebase-action__progress" animate={{ width: ["42%", "42%", "88%", "88%", "88%"] }} transition={{ ...repeat, times: [0, .22, .35, .86, 1] }} />
            </article>
            <motion.button animate={{ scale: [1, 1, .96, 1, 1], borderColor: ["#3b4554", "#3b4554", "#ffca28", "#ffca28", "#3b4554"] }} transition={{ ...repeat, times: [0, .17, .22, .31, .5] }}>Guardar calibración</motion.button>
            <motion.p animate={{ color: ["#8294aa", "#ffca28", "#49e1a8", "#49e1a8", "#8294aa"] }} transition={{ ...repeat, times: [0, .25, .45, .82, .98] }}>pending writes: 1 → 0</motion.p>
          </div>
          <div className="firebase-action__local-cache">
            <small>local cache</small>
            <motion.code animate={{ opacity: [.3, 1, 1, .35] }} transition={{ ...repeat, times: [0, .25, .78, .96] }}>&#123; power: 88, pending: true &#125;</motion.code>
            <motion.b animate={{ color: ["#8294aa", "#8294aa", "#ffca28", "#49e1a8"] }} transition={{ ...repeat, times: [0, .59, .66, .82] }}>offline queue → synced</motion.b>
          </div>
        </section>

        <section className="firebase-action__cloud">
          <header><b>Firebase event graph</b><span>client SDK + managed services</span></header>
          <div className="firebase-action__rail" aria-hidden="true" />
          {cloudNodes.map(([title, detail], index) => (
            <motion.div className="firebase-action__node" key={title} animate={{ opacity: [.25, .25, 1, 1, .35], x: [index % 2 ? 7 : -7, index % 2 ? 7 : -7, 0, 0, 0] }} transition={{ ...repeat, times: [0, .06 + index * .08, .12 + index * .08, .78, .95] }}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              <div><b>{title}</b><small>{detail}</small></div>
              <motion.em animate={{ color: index === 3 ? ["#8294aa", "#8294aa", "#49e1a8", "#49e1a8"] : ["#8294aa", "#ffca28", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .2 + index * .065, .31 + index * .065, .86] }}>✓</motion.em>
            </motion.div>
          ))}
          <motion.span className="firebase-action__event" animate={{ top: [58, 58, 407, 407], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.04, .09, .73, .8] }}>write:jx_42</motion.span>
        </section>

        <aside className="firebase-action__inspector">
          <section>
            <header><b>Rules evaluation</b><span>client request</span></header>
            <div className="firebase-action__rules">
              <code>match /workshops/&#123;uid&#125;</code>
              <motion.code animate={{ opacity: [.28, .28, 1, 1, .38] }} transition={{ ...repeat, times: [0, .27, .36, .77, .94] }}>allow update: if request.auth.uid == uid</motion.code>
              <motion.code animate={{ opacity: [.25, .25, 1, 1, .38] }} transition={{ ...repeat, times: [0, .31, .41, .79, .95] }}>&& request.resource.data.power &lt;= 100</motion.code>
              <motion.b animate={{ color: ["#8294aa", "#8294aa", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .34, .44, .88] }}>ALLOW · 2 reads · 4 ms</motion.b>
            </div>
          </section>

          <section>
            <header><b>Quality and control</b><span>release prod-2026.07</span></header>
            <div className="firebase-action__metrics">
              <p><small>listener</small><b>fromCache=false</b></p>
              <p><small>function</small><b>87 ms · warm</b></p>
              <p><small>storage</small><b>1.8 MB resumable</b></p>
              <p><small>FCM</small><b>message accepted</b></p>
              <p><small>Remote Config</small><b>new_editor=true</b></p>
              <p><small>Crashlytics</small><b>0 new issues</b></p>
            </div>
          </section>

          <section>
            <header><b>Event log</b><span>trace workshop_42</span></header>
            <div className="firebase-action__logs">
              <motion.code animate={{ opacity: [.2, .2, 1, 1, .45] }} transition={{ ...repeat, times: [0, .38, .49, .92, 1] }}>firestore.write uid=jinx_42 pending=false</motion.code>
              <motion.code animate={{ opacity: [.2, .2, 1, 1, .45] }} transition={{ ...repeat, times: [0, .48, .58, .93, 1] }}>function.blueprintSync eventId=evt_powpow</motion.code>
              <motion.code animate={{ opacity: [.2, .2, 1, 1, .45] }} transition={{ ...repeat, times: [0, .58, .68, .94, 1] }}>fcm.send topic=workshop_updates</motion.code>
            </div>
          </section>
        </aside>

        <motion.section className="firebase-action__sync" animate={{ opacity: [.4, .4, 1, 1, .52] }} transition={{ ...repeat, times: [0, .65, .76, .96, 1] }}>
          <div><b>local write</b><small>la UI muestra 88% antes del round trip</small></div><i>→</i>
          <div><b>security boundary</b><small>Auth identifica · App Check atesta · Rules autorizan</small></div><i>→</i>
          <div><b>server event</b><small>Function genera thumbnail y notificación</small></div><i>→</i>
          <div><b>reconnect</b><small>la cola se confirma y el listener entrega metadata final</small></div>
        </motion.section>
      </div>

      <p className="system-action__takeaway">La configuración pública identifica el proyecto, pero la seguridad real está en identidad, App Check y Rules. El cliente escribe primero en su caché, Firestore sincroniza después, una Function reacciona de forma idempotente y FCM notifica a otros dispositivos. El flujo sigue funcionando offline porque el SDK conserva snapshots y escrituras pendientes, no porque la nube deje de existir.</p>
    </div>
  );
}
