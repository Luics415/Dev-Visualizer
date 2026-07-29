"use client";

import { motion } from "motion/react";

const LOOP = 27;

function stageTransition(start: number, end: number) {
  return {
    duration: LOOP,
    repeat: Infinity,
    times: [0, start, Math.min(start + 0.025, 0.98), end, Math.min(end + 0.025, 1), 1],
  };
}

export function ReactPracticalScene() {
  return (
    <div
      className="react-story"
      aria-label="Historia visual de React: evento de búsqueda, actualización de estado, render, reconciliación, efecto asíncrono y commit de resultados"
    >
      <div className="practical-story__legend">
        <span><i /> señal</span><span><i /> cálculo</span><span><i /> cambio visible</span>
      </div>

      <div className="react-story__grid">
        <motion.section
          className="react-story-stage react-story-stage--event"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.02, .16)}
        >
          <header><span>01</span><div><b>Evento</b><small>El usuario escribe una búsqueda</small></div></header>
          <div className="react-event-visual">
            <div className="react-event-visual__input">
              <span>Buscar productos</span>
              <motion.b
                animate={{ width: [0, 0, 58, 58], opacity: [0, 1, 1, 0] }}
                transition={{ duration: LOOP, repeat: Infinity, times: [.03, .055, .125, .165] }}
              >jinx</motion.b>
              <motion.i
                animate={{ opacity: [0, 1, 1, 0], x: [0, 0, 55, 55] }}
                transition={{ duration: LOOP, repeat: Infinity, times: [.035, .055, .125, .165] }}
              />
            </div>
            <motion.div
              className="react-event-visual__signal"
              animate={{ x: [0, 0, 104, 104], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.075, .09, .145, .17] }}
            >onChange</motion.div>
            <div className="react-event-visual__handler">handleChange()</div>
          </div>
          <code>{"onChange={(event) => setQuery(event.target.value)}"}</code>
        </motion.section>

        <motion.section
          className="react-story-stage react-story-stage--state"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.16, .32)}
        >
          <header><span>02</span><div><b>Estado en cola</b><small>setQuery solicita otro render</small></div></header>
          <div className="react-state-visual">
            <div className="react-state-visual__snapshot"><small>snapshot actual</small><b>query = &quot;&quot;</b></div>
            <div className="react-state-visual__queue"><small>cola</small><span>setQuery(&quot;jinx&quot;)</span></div>
            <motion.div
              className="react-state-visual__next"
              animate={{ opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, -5] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [0, .22, .255, .31, .335] }}
            ><small>próximo snapshot</small><b>query = &quot;jinx&quot;</b></motion.div>
            <motion.i
              animate={{ x: [0, 0, 88, 88], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.175, .205, .27, .32] }}
            />
          </div>
          <code>setQuery(&quot;jinx&quot;) no cambia el snapshot que ya se está ejecutando</code>
        </motion.section>

        <motion.section
          className="react-story-stage react-story-stage--render"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.32, .49)}
        >
          <header><span>03</span><div><b>Render</b><small>El componente calcula el siguiente JSX</small></div></header>
          <div className="react-render-visual">
            <div className="react-render-visual__fn">SearchPage()<small>query = &quot;jinx&quot;</small></div>
            <div className="react-render-visual__branches">
              <motion.span
                animate={{ opacity: [.25, .25, 1, 1, .25], scale: [.96, .96, 1.03, 1, .96] }}
                transition={{ duration: LOOP, repeat: Infinity, times: [0, .36, .39, .46, .5] }}
              >SearchInput</motion.span>
              <motion.span
                animate={{ opacity: [.25, .25, 1, 1, .25], scale: [.96, .96, 1.03, 1, .96] }}
                transition={{ duration: LOOP, repeat: Infinity, times: [0, .385, .415, .47, .5] }}
              >Loading</motion.span>
              <motion.span
                animate={{ opacity: [.18, .18, .55, .55, .18] }}
                transition={{ duration: LOOP, repeat: Infinity, times: [0, .39, .42, .47, .5] }}
              >Results</motion.span>
            </div>
            <motion.b
              animate={{ y: [0, 0, 76, 76], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.335, .365, .45, .495] }}
            >JSX</motion.b>
          </div>
          <code>La función se ejecuta de nuevo; renderizar no significa tocar el DOM</code>
        </motion.section>

        <motion.section
          className="react-story-stage react-story-stage--reconcile"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.49, .66)}
        >
          <header><span>04</span><div><b>Reconciliación</b><small>React compara el árbol anterior con el nuevo</small></div></header>
          <div className="react-diff-visual">
            <div className="react-diff-visual__tree react-diff-visual__tree--old"><small>anterior</small><span>Page</span><span>Input</span><span>Empty</span></div>
            <div className="react-diff-visual__scanner">diff</div>
            <div className="react-diff-visual__tree react-diff-visual__tree--new"><small>siguiente</small><span>Page</span><span>Input</span><motion.span
              animate={{ borderColor: ["#34425a", "#34425a", "#49e1a8", "#49e1a8", "#34425a"], color: ["#8798ad", "#8798ad", "#49e1a8", "#49e1a8", "#8798ad"] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [0, .54, .58, .64, .67] }}
            >Loading</motion.span></div>
            <motion.i
              animate={{ x: [0, 0, 105, 105], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.505, .535, .62, .665] }}
            />
          </div>
          <code>El tipo de elemento y las keys permiten conservar identidad entre árboles</code>
        </motion.section>

        <motion.section
          className="react-story-stage react-story-stage--effect"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.66, .83)}
        >
          <header><span>05</span><div><b>Commit y efecto</b><small>Primero se pinta Loading; luego corre useEffect</small></div></header>
          <div className="react-effect-visual">
            <div className="react-effect-visual__lane">
              <span>commit</span><span>paint</span><span>effect</span><span>fetch</span><span>JSON</span>
            </div>
            <motion.div
              className="react-effect-visual__token"
              animate={{ x: [0, 0, 204, 204], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.67, .7, .805, .84] }}
            />
            <div className="react-effect-visual__ui">UI<small>Loading…</small></div>
            <div className="react-effect-visual__api">API<small>/products?q=jinx</small></div>
          </div>
          <code>useEffect se ejecuta después del commit y puede limpiar la solicitud anterior</code>
        </motion.section>

        <motion.section
          className="react-story-stage react-story-stage--commit"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.83, .985)}
        >
          <header><span>06</span><div><b>Segundo commit</b><small>Los datos actualizan solo la lista</small></div></header>
          <div className="react-commit-visual">
            <div className="react-commit-visual__screen">
              <span className="react-commit-visual__search">jinx</span>
              {["powder-01", "rocket-02", "arcade-03"].map((key, index) => (
                <motion.div
                  key={key}
                  animate={{ opacity: [0, 0, 1, 1, 0], x: [16, 16, 0, 0, -5] }}
                  transition={{ duration: LOOP, repeat: Infinity, times: [0, .865 + index * .018, .895 + index * .018, .975, 1] }}
                >
                  <i>{key}</i><b>{["Powder Hoodie", "Rocket Bag", "Arcade Tee"][index]}</b>
                </motion.div>
              ))}
            </div>
            <motion.span
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [.9, .9, 1.04, 1, .9] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [0, .89, .93, .98, 1] }}
            >3 resultados · Input preservado</motion.span>
          </div>
          <code>setProducts(data) → render → diff por key → commit mínimo</code>
        </motion.section>
      </div>

      <motion.p
        className="react-story__summary"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: LOOP, repeat: Infinity, times: [0, .91, .95, .988, 1] }}
      >
        Una interacción puede producir varios renders y commits; React mantiene la interfaz declarativa mientras coordina cálculo, efectos e identidad.
      </motion.p>
    </div>
  );
}
