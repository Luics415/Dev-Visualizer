"use client";

import { motion, useReducedMotion } from "motion/react";

const LOOP = 32;
const stages = [
  "QUIC + TLS",
  "server_name",
  "location",
  "real IP",
  "rate limit",
  "cache lookup",
  "upstream A",
  "retry",
  "upstream B",
  "buffer",
  "gzip",
  "access log",
  "200 OK",
  "graceful reload",
] as const;

const pipeline = [
  ["TLS / HTTP/3", "SNI hexgate.dev · ALPN h3"],
  ["server", "listen 443 quic · server_name"],
  ["location", "^~ /api/ → @fishbones"],
  ["policy", "real_ip · limit_req · request_id"],
  ["cache", "key = host + URI + args"],
  ["upstream", "least_conn · keepalive 64"],
  ["filters", "buffer → gzip → headers → log"],
] as const;

export function NginxPracticalScene() {
  const reducedMotion = useReducedMotion();
  const repeat = { duration: LOOP, repeat: reducedMotion ? 0 : Infinity } as const;

  return (
    <div className="system-action system-action--nginx" aria-label="Una petición HTTP/3 atraviesa TLS, selección de server y location, límites, caché, balanceo con retry, filtros, logging y reload graceful de NGINX">
      <header className="system-action__toolbar">
        <div>
          <span><i /> edge request live</span>
          <b>hexgate.dev · Jinx consulta el inventario de Fishbones</b>
        </div>
        <div>
          {stages.map((stage, index) => (
            <motion.em
              key={stage}
              animate={{ opacity: [.22, .22, 1, 1, .35] }}
              transition={{ ...repeat, times: [0, .015 + index * .052, .055 + index * .052, .79 + index * .01, .98] }}
            >
              {String(index + 1).padStart(2, "0")} {stage}
            </motion.em>
          ))}
        </div>
      </header>

      <div className="system-action__grid system-action__grid--nginx">
        <section className="nginx-action__request">
          <header><b>Cliente y configuración</b><span>HTTP/3 · UDP 443</span></header>

          <div className="nginx-action__request-line">
            <strong>GET</strong>
            <code>/api/fishbones?region=zaun</code>
            <em>h3</em>
          </div>

          <div className="nginx-action__headers">
            <p><b>host</b><code>hexgate.dev</code></p>
            <p><b>authorization</b><code>Bearer jinx_42</code></p>
            <p><b>x-request-id</b><code>req_powpow_7</code></p>
            <p><b>accept-encoding</b><code>gzip, br</code></p>
          </div>

          <div className="nginx-action__config">
            <motion.code animate={{ opacity: [.3, 1, 1, .45] }} transition={{ ...repeat, times: [0, .08, .54, .86] }}>server_name hexgate.dev;</motion.code>
            <motion.code animate={{ opacity: [.25, .25, 1, 1, .35] }} transition={{ ...repeat, times: [0, .12, .18, .59, .88] }}>location ^~ /api/ &#123;</motion.code>
            <motion.code animate={{ opacity: [.2, .2, 1, 1, .3] }} transition={{ ...repeat, times: [0, .2, .27, .67, .9] }}>limit_req zone=api burst=20;</motion.code>
            <motion.code animate={{ opacity: [.2, .2, 1, 1, .3] }} transition={{ ...repeat, times: [0, .27, .34, .72, .92] }}>proxy_cache hextech;</motion.code>
            <motion.code animate={{ opacity: [.2, .2, 1, 1, .3] }} transition={{ ...repeat, times: [0, .34, .41, .76, .94] }}>proxy_pass http://inventory;</motion.code>
            <code>&#125;</code>
          </div>

          <motion.div className="nginx-action__client-result" animate={{ borderColor: ["#324159", "#324159", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .64, .76, .94] }}>
            <span>client sees</span>
            <motion.b animate={{ color: ["#8294aa", "#8294aa", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .64, .76, .94] }}>200 · 18 ms</motion.b>
          </motion.div>
        </section>

        <section className="nginx-action__pipeline">
          <header><b>NGINX request pipeline</b><small>master + 4 event-driven workers</small></header>
          <div className="nginx-action__rail" aria-hidden="true" />

          {pipeline.map(([title, detail], index) => (
            <motion.div
              className="nginx-action__node"
              key={title}
              animate={{ opacity: [.28, .28, 1, 1, .38], x: [index % 2 ? 5 : -5, index % 2 ? 5 : -5, 0, 0, 0] }}
              transition={{ ...repeat, times: [0, .06 + index * .075, .11 + index * .075, .74, .95] }}
            >
              <i>{String(index + 1).padStart(2, "0")}</i>
              <div><b>{title}</b><small>{detail}</small></div>
              <motion.em animate={{ color: index === 4 ? ["#f5c742", "#f5c742", "#ff9f55", "#49e1a8"] : ["#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .35, .48, .72] }}>
                {index === 4 ? "MISS" : "✓"}
              </motion.em>
            </motion.div>
          ))}

          <motion.span
            className="nginx-action__packet"
            animate={{ top: [58, 58, 375, 375], opacity: [0, 1, 1, 0] }}
            transition={{ ...repeat, times: [.035, .075, .73, .79] }}
          >req_powpow_7</motion.span>
        </section>

        <aside className="nginx-action__operations">
          <section className="nginx-action__upstreams">
            <header><b>upstream inventory</b><span>least_conn · keepalive</span></header>
            <div className="nginx-action__upstream-map">
              <div className="nginx-action__load-balancer"><b>NGINX</b><small>selector</small></div>
              <svg viewBox="0 0 250 125" aria-hidden="true">
                <path d="M125 18 C125 52 58 44 58 88" />
                <path d="M125 18 C125 52 192 44 192 88" />
              </svg>
              <motion.div className="nginx-action__upstream nginx-action__upstream--a" animate={{ borderColor: ["#34435a", "#34435a", "#ff6f86", "#ff6f86", "#34435a"] }} transition={{ ...repeat, times: [0, .38, .48, .62, .88] }}>
                <b>inventory-a</b><small>10.0.2.11:3000</small><motion.em animate={{ color: ["#49e1a8", "#49e1a8", "#ff6f86", "#ff6f86", "#8294aa"] }} transition={{ ...repeat, times: [0, .38, .48, .62, .88] }}>timeout</motion.em>
              </motion.div>
              <motion.div className="nginx-action__upstream nginx-action__upstream--b" animate={{ borderColor: ["#34435a", "#34435a", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .5, .61, .94] }}>
                <b>inventory-b</b><small>10.0.3.18:3000</small><motion.em animate={{ color: ["#8294aa", "#8294aa", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .5, .61, .94] }}>200 · 11 ms</motion.em>
              </motion.div>
              <motion.span className="nginx-action__retry" animate={{ opacity: [0, 0, 1, 1, 0], x: [-18, -18, 24, 24, 34] }} transition={{ ...repeat, times: [0, .46, .54, .66, .72] }}>retry safe GET →</motion.span>
            </div>
          </section>

          <section className="nginx-action__signals">
            <header><b>Observabilidad</b><span>request-id req_powpow_7</span></header>
            <div className="nginx-action__metrics">
              <p><small>cache</small><motion.b animate={{ color: ["#f5c742", "#f5c742", "#49e1a8"] }} transition={{ ...repeat, times: [0, .58, .77] }}>MISS → stored</motion.b></p>
              <p><small>upstream</small><b>2 attempts</b></p>
              <p><small>request time</small><b>18 ms</b></p>
              <p><small>gzip ratio</small><b>3.8×</b></p>
            </div>
            <div className="nginx-action__log">
              <motion.code animate={{ opacity: [.2, .2, 1, 1, .45] }} transition={{ ...repeat, times: [0, .62, .7, .95, 1] }}>
                200 req_powpow_7 cache=MISS upstream=10.0.2.11:3000,10.0.3.18:3000 status=504,200 rt=.018
              </motion.code>
            </div>
          </section>
        </aside>

        <motion.section className="nginx-action__reload" animate={{ opacity: [.4, .4, 1, 1, .5] }} transition={{ ...repeat, times: [0, .72, .8, .95, 1] }}>
          <div><b>nginx -t</b><small>syntax is ok · test successful</small></div>
          <i>→</i>
          <div><b>master receives HUP</b><small>opens new logs, certs and sockets</small></div>
          <i>→</i>
          <div><b>new workers</b><small>serve new connections</small></div>
          <i>→</i>
          <div><b>old workers</b><small>finish active requests, then exit</small></div>
        </motion.section>
      </div>

      <p className="system-action__takeaway">La petición no “pasa por una caja negra”: el socket y SNI eligen contexto, server_name selecciona el virtual host, location decide el handler, las políticas restauran IP y aplican presupuesto, el cache evita trabajo cuando puede y el upstream conserva un historial de intentos. El reload valida primero y cambia workers sin cortar las conexiones que todavía están terminando.</p>
    </div>
  );
}
