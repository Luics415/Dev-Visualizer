"use client";

import { motion } from "motion/react";

const LOOP = 24;
const repeat = { duration: LOOP, repeat: Infinity } as const;

const steps = [
  ["edge", "API gateway", "ruta · rate limit"],
  ["auth", "Auth", "Bearer token"],
  ["validate", "Validation", "OrderInput"],
  ["service", "Order service", "reglas + idempotencia"],
  ["db", "Database", "transacción"],
] as const;

export function RestApiPracticalScene() {
  return (
    <div
      className="rest-action"
      aria-label="Trazabilidad visual de una petición POST para crear un pedido, su respuesta 201 y un reintento seguro mediante una clave de idempotencia"
    >
      <div className="rest-action__toolbar">
        <div>
          <span className="rest-action__live"><i /> trace live</span>
          <b>Crear un pedido sin duplicarlo</b>
        </div>
        <div className="rest-action__chapters" aria-hidden="true">
          <motion.span animate={{ opacity: [.35, 1, 1, .35] }} transition={{ ...repeat, times: [0, .05, .52, .62] }}>01 request</motion.span>
          <motion.span animate={{ opacity: [.35, .35, 1, 1, .35] }} transition={{ ...repeat, times: [0, .49, .55, .7, .78] }}>02 response</motion.span>
          <motion.span animate={{ opacity: [.35, .35, 1, 1, .35] }} transition={{ ...repeat, times: [0, .7, .76, .96, 1] }}>03 safe retry</motion.span>
        </div>
      </div>

      <div className="rest-action__canvas">
        <section className="rest-action__client" aria-label="Cliente móvil">
          <header><span>CLIENT</span><small>React Native</small></header>
          <div className="rest-action__phone">
            <span>Cart</span>
            <b>2 items</b>
            <small>Total · $1,280 MXN</small>
            <motion.i
              animate={{ scale: [1, 1, .94, .94, 1] }}
              transition={{ ...repeat, times: [0, .055, .075, .105, .13] }}
            >Confirmar compra</motion.i>
          </div>
          <motion.div
            className="rest-action__client-status"
            animate={{ opacity: [0, 1, 1, 0, 0, 1, 1, 0] }}
            transition={{ ...repeat, times: [.07, .1, .47, .54, .7, .75, .91, .98] }}
          >
            <motion.span animate={{ opacity: [1, 1, 0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [.07, .46, .54, .7, .75, .9, .98] }}>enviando…</motion.span>
            <motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .54, .59, .69, .75] }}>pedido #42 creado</motion.span>
            <motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .84, .88, .96, 1] }}>respuesta recuperada · sin duplicar</motion.span>
          </motion.div>
        </section>

        <section className="rest-action__route" aria-label="Ruta interna de la API">
          <div className="rest-action__route-title"><b>REQUEST PATH</b><span>una sola traza, cinco decisiones</span></div>
          <div className="rest-action__rail" />
          {steps.map(([key, title, detail], index) => {
            const start = .14 + index * .073;
            const end = start + .095;
            return (
              <motion.div
                className={`rest-action__node rest-action__node--${key}`}
                key={key}
                animate={{ opacity: [.42, .42, 1, 1, .58], scale: [.98, .98, 1.025, 1, .98] }}
                transition={{ ...repeat, times: [0, start, start + .025, end, Math.min(end + .08, 1)] }}
              >
                <i>{index + 1}</i><div><b>{title}</b><small>{detail}</small></div><em>✓</em>
              </motion.div>
            );
          })}

          <motion.div
            className="rest-action__packet rest-action__packet--request"
            animate={{ top: [46, 46, 347, 347], opacity: [0, 1, 1, 0] }}
            transition={{ ...repeat, times: [.08, .11, .48, .52] }}
          ><b>POST</b><small>req_7f</small></motion.div>

          <motion.div
            className="rest-action__packet rest-action__packet--response"
            animate={{ top: [347, 347, 46, 46], opacity: [0, 1, 1, 0] }}
            transition={{ ...repeat, times: [.51, .55, .68, .72] }}
          ><b>201</b><small>ord_42</small></motion.div>

          <motion.div
            className="rest-action__packet rest-action__packet--retry"
            animate={{ top: [46, 46, 116, 116, 46, 46], opacity: [0, 1, 1, 1, 1, 0] }}
            transition={{ ...repeat, times: [.73, .76, .82, .86, .94, .98] }}
          ><b>RETRY</b><small>same key</small></motion.div>

          <motion.div
            className="rest-action__dedupe"
            animate={{ opacity: [0, 0, 1, 1, 0], scale: [.95, .95, 1.04, 1, .95] }}
            transition={{ ...repeat, times: [0, .8, .84, .94, .99] }}
          ><b>idempotency hit</b><small>replay stored response</small></motion.div>
        </section>

        <aside className="rest-action__inspector" aria-label="Contenido HTTP y registro de ejecución">
          <section className="rest-action__envelope">
            <header><b>HTTP envelope</b><span>req_7f</span></header>
            <div className="rest-action__request-line"><strong>POST</strong><code>/v1/orders</code><em>HTTP/2</em></div>
            <div className="rest-action__headers">
              <span><b>Authorization</b><code>Bearer eyJ…</code></span>
              <span><b>Content-Type</b><code>application/json</code></span>
              <motion.span animate={{ opacity: [.45, .45, 1, 1, .45] }} transition={{ ...repeat, times: [0, .24, .33, .9, 1] }}><b>Idempotency-Key</b><code>checkout-7f</code></motion.span>
            </div>
            <div className="rest-action__body"><small>body</small><code>{`{ items: 2, total: 1280 }`}</code></div>
          </section>

          <section className="rest-action__log">
            <header><b>server trace</b><span>32 ms</span></header>
            {[
              ["00.0", "route matched", "POST /orders"],
              ["03.8", "token verified", "user_19"],
              ["06.1", "schema valid", "OrderInput"],
              ["12.4", "transaction", "order #42"],
              ["31.7", "response", "201 Created"],
            ].map(([time, title, detail], index) => (
              <motion.div
                key={time}
                animate={{ opacity: [.2, .2, 1, 1, .38] }}
                transition={{ ...repeat, times: [0, .14 + index * .072, .18 + index * .072, .66, .73] }}
              ><time>{time}</time><span><b>{title}</b><small>{detail}</small></span></motion.div>
            ))}
            <motion.div
              className="rest-action__log-replay"
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ ...repeat, times: [0, .82, .86, .96, 1] }}
            ><time>02.1</time><span><b>cached response replayed</b><small>database write skipped</small></span></motion.div>
          </section>
        </aside>

        <motion.section
          className="rest-action__response"
          animate={{ opacity: [0, 0, 1, 1, .35, .35, 1, 1, 0], y: [8, 8, 0, 0, 0, 0, 0, 0, -5] }}
          transition={{ ...repeat, times: [0, .54, .58, .7, .74, .84, .88, .96, 1] }}
          aria-label="Respuesta HTTP"
        >
          <header><strong>201 Created</strong><span>Location: /v1/orders/42</span></header>
          <div><code>{`{ id: 42, status: "confirmed" }`}</code><b>ETag: &quot;order-v1&quot;</b></div>
          <motion.small animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .85, .88, .96, 1] }}>replayed from idempotency store</motion.small>
        </motion.section>

        <section className="rest-action__database" aria-label="Estado persistido">
          <div className="rest-action__db-cylinder"><i /><i /><i /></div>
          <div><small>orders table</small><b>41 → <motion.span animate={{ opacity: [.25, .25, 1, 1] }} transition={{ ...repeat, times: [0, .43, .49, 1] }}>42</motion.span></b><em>retry leaves it at 42</em></div>
        </section>
      </div>

      <p className="rest-action__takeaway">
        Una petición REST real no es solo “frontend → backend”: método, ruta, headers, validación, reglas, persistencia y status forman un contrato observable. La clave de idempotencia permite repetir el intento sin crear dos pedidos.
      </p>
    </div>
  );
}
