"use client";

import { motion } from "motion/react";

const LOOP = 26;

function stageTransition(start: number, end: number) {
  return {
    duration: LOOP,
    repeat: Infinity,
    times: [0, start, Math.min(start + 0.035, 0.97), end, Math.min(end + 0.035, 1), 1],
  };
}

export function TypeScriptPracticalScene() {
  return (
    <div
      className="typescript-story"
      aria-label="Historia visual de TypeScript: captura de datos, contrato de dominio, cliente genérico, estado discriminado, narrowing y compilación a JavaScript"
    >
      <div className="practical-story__legend">
        <span><i /> dato</span><span><i /> comprobación</span><span><i /> ejecución</span>
      </div>

      <div className="typescript-story__grid">
        <motion.section
          className="ts-story-stage ts-story-stage--input"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.02, .16)}
        >
          <header><span>01</span><div><b>Entrada tipada</b><small>El formulario produce valores conocidos</small></div></header>
          <div className="ts-form-visual">
            <div>productId <b>"kbd-01"</b></div>
            <div>quantity <b>"2"</b></div>
            <motion.div
              className="ts-form-visual__conversion"
              animate={{ x: [0, 0, 92, 92], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.04, .08, .135, .17] }}
            >
              Number()
            </motion.div>
            <motion.em
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [0, .09, .12, .16, .18] }}
            >
              2 : number
            </motion.em>
          </div>
          <code>const quantity = Number(event.target.value)</code>
        </motion.section>

        <motion.section
          className="ts-story-stage ts-story-stage--contract"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.16, .32)}
        >
          <header><span>02</span><div><b>Contrato</b><small>La forma debe coincidir con OrderDraft</small></div></header>
          <div className="ts-contract-visual">
            <div className="ts-contract-visual__blueprint">
              <small>OrderDraft</small>
              <span>productId: string</span>
              <span>quantity: number</span>
              <span>coupon?: string</span>
            </div>
            <motion.div
              className="ts-contract-visual__payload"
              animate={{ x: [-78, -78, 5, 5, 65], opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.17, .2, .245, .29, .33] }}
            >
              <span>kbd-01</span><b>2</b>
            </motion.div>
            <motion.i
              animate={{ scale: [0, 0, 1.2, 1, 0], opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.18, .235, .25, .3, .33] }}
            >
              ✓
            </motion.i>
          </div>
          <code>const draft: OrderDraft = formData</code>
        </motion.section>

        <motion.section
          className="ts-story-stage ts-story-stage--generic"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.32, .49)}
        >
          <header><span>03</span><div><b>Cliente genérico</b><small>La solicitud conserva entrada y salida</small></div></header>
          <div className="ts-generic-visual">
            <div className="ts-generic-visual__node">draft<small>OrderDraft</small></div>
            <div className="ts-generic-visual__tunnel"><span>post&lt;In, Out&gt;</span><i /></div>
            <div className="ts-generic-visual__node">order<small>Order</small></div>
            <motion.b
              animate={{ x: [0, 0, 142, 142], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.33, .37, .455, .5] }}
            >
              T
            </motion.b>
          </div>
          <code>api.post&lt;OrderDraft, Order&gt;("/orders", draft)</code>
        </motion.section>

        <motion.section
          className="ts-story-stage ts-story-stage--union"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.49, .66)}
        >
          <header><span>04</span><div><b>Estado discriminado</b><small>Solo existen estados válidos</small></div></header>
          <div className="ts-union-state">
            {[
              ["idle", .5],
              ["loading", .545],
              ["success", .6],
              ["error", .635],
            ].map(([label, time], index) => (
              <motion.div
                key={label}
                animate={{ opacity: [.26, .26, 1, 1, .26], scale: [.96, .96, 1.05, 1, .96] }}
                transition={{ duration: LOOP, repeat: Infinity, times: [0, Number(time) - .015, Number(time), Number(time) + .04, Math.min(Number(time) + .075, 1)] }}
              >
                <i>{index + 1}</i><span>{label}</span>
              </motion.div>
            ))}
            <span className="ts-union-state__rail" />
          </div>
          <code>type RequestState = Idle | Loading | Success | Error</code>
        </motion.section>

        <motion.section
          className="ts-story-stage ts-story-stage--narrow"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.66, .82)}
        >
          <header><span>05</span><div><b>Narrowing</b><small>La propiedad discriminante abre una ruta</small></div></header>
          <div className="ts-narrow-visual">
            <div className="ts-narrow-visual__source">result<small>ok: boolean</small></div>
            <div className="ts-narrow-visual__fork">result.ok?</div>
            <motion.div
              className="ts-narrow-visual__path ts-narrow-visual__path--yes"
              animate={{ opacity: [.2, .2, 1, 1, .2] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [0, .69, .72, .79, .83] }}
            >
              true <b>result.data</b>
            </motion.div>
            <motion.div
              className="ts-narrow-visual__path ts-narrow-visual__path--no"
              animate={{ opacity: [.2, .2, .55, .55, .2] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [0, .69, .72, .79, .83] }}
            >
              false <b>result.error</b>
            </motion.div>
            <motion.i
              animate={{ y: [0, 0, 65, 65], x: [0, 0, -47, -47], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.67, .71, .77, .82] }}
            />
          </div>
          <code>if (result.ok) render(result.data)</code>
        </motion.section>

        <motion.section
          className="ts-story-stage ts-story-stage--compile"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.82, .98)}
        >
          <header><span>06</span><div><b>Compilación y ejecución</b><small>Los tipos desaparecen; JavaScript corre</small></div></header>
          <div className="ts-compile-visual">
            <div className="ts-compile-visual__file ts-compile-visual__file--ts">order.ts<small>: Order</small></div>
            <div className="ts-compile-visual__compiler">tsc<span>type check</span></div>
            <div className="ts-compile-visual__file ts-compile-visual__file--js">order.js<small>runtime</small></div>
            <motion.span
              animate={{ x: [0, 0, 116, 116], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.83, .87, .94, .98] }}
            >
              código
            </motion.span>
            <motion.b
              animate={{ opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, -5] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [0, .9, .94, .98, 1] }}
            >
              Pedido #104 confirmado
            </motion.b>
          </div>
          <code>TypeScript protege al desarrollar → JavaScript ejecuta</code>
        </motion.section>
      </div>

      <motion.p
        className="typescript-story__summary"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: LOOP, repeat: Infinity, times: [0, .89, .94, .985, 1] }}
      >
        El mismo flujo conserva contratos claros desde la entrada hasta la respuesta, sin confundir validación estática con validación en tiempo de ejecución.
      </motion.p>
    </div>
  );
}
