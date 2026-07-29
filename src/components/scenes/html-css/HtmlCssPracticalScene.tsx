"use client";

import { motion } from "motion/react";

const LOOP = 30;
const repeat = { duration: LOOP, repeat: Infinity } as const;

const phases = [
  ["01", "Source", "HTML + CSS"],
  ["02", "Parse", "tokens + trees"],
  ["03", "Cascade", "computed values"],
  ["04", "Layout", "boxes + geometry"],
  ["05", "Paint", "display list"],
  ["06", "Composite", "layers"],
  ["07", "Responsive", "container changes"],
  ["08", "A11y", "parallel tree"],
] as const;

export function HtmlCssPracticalScene() {
  return (
    <div className="html-action" aria-label="Recorrido completo desde HTML y CSS fuente hasta una tarjeta de Jinx pintada, compuesta, responsiva y accesible en el navegador">
      <header className="html-action__toolbar">
        <div><span><i /> rendering pipeline</span><b>Construir una champion card de Jinx</b></div>
        <small>source → trees → pixels</small>
      </header>

      <div className="html-action__phases">
        {phases.map(([number, title, detail], index) => (
          <motion.div key={number} animate={{ opacity: [.3, .3, 1, 1, .3], y: [3, 3, 0, 0, -2] }} transition={{ ...repeat, times: [0, .035 + index * .108, .075 + index * .108, .16 + index * .108, .22 + index * .108] }}>
            <em>{number}</em><b>{title}</b><small>{detail}</small>
          </motion.div>
        ))}
        <motion.i animate={{ width: ["0%", "0%", "100%", "100%"] }} transition={{ ...repeat, times: [.02, .06, .92, .98] }} />
      </div>

      <div className="html-action__grid">
        <section className="html-action__panel html-action__panel--source">
          <header><span>SOURCE</span><b>Dos lenguajes, responsabilidades distintas</b></header>
          <div className="html-action__editors">
            <div><small>index.html</small><code>{`<article class="champion-card">\n  <h2>Jinx</h2>\n  <p>ADC · Zaun</p>\n  <button>Ver build</button>\n</article>`}</code></div>
            <div><small>styles.css</small><code>{`.champion-card {\n  display: grid;\n  gap: 1rem;\n  border-radius: 1rem;\n}`}</code></div>
          </div>
          <motion.div className="html-action__bytes" animate={{ left: ["4%", "4%", "88%", "88%"], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.03, .06, .15, .19] }}>UTF-8</motion.div>
        </section>

        <section className="html-action__panel html-action__panel--trees">
          <header><span>PARSER</span><b>DOM + CSSOM</b></header>
          <div className="html-action__tree-pair">
            <div className="html-action__mini-tree"><small>DOM</small><b>article</b><span>h2 · p · button</span><i /></div>
            <div className="html-action__mini-tree"><small>CSSOM</small><b>.champion-card</b><span>display · gap · radius</span><i /></div>
            <motion.em animate={{ opacity: [0, 0, 1, 1, .35] }} transition={{ ...repeat, times: [0, .15, .2, .32, .38] }}>match selector</motion.em>
          </div>
          <p>El DOM representa estructura; el CSSOM representa reglas. Todavía no existen píxeles.</p>
        </section>

        <section className="html-action__panel html-action__panel--cascade">
          <header><span>CASCADE</span><b>Resolver una propiedad a la vez</b></header>
          <div className="html-action__cascade-stack">
            {[
              ["user agent", "button { font: system; }", "low"],
              ["base layer", "button { color: white; }", "mid"],
              ["component", ".card button { color: #b8b0d1; }", "high"],
              ["state", ".card button:hover { color: #fff; }", "winner"],
            ].map(([source, rule, level], index) => (
              <motion.div key={source} className={`html-action__rule html-action__rule--${level}`} animate={{ opacity: [.25, .25, 1, 1, .35], x: [-7, -7, 0, 0, 4] }} transition={{ ...repeat, times: [0, .24 + index * .035, .28 + index * .035, .43, .48] }}><small>{source}</small><code>{rule}</code></motion.div>
            ))}
          </div>
          <motion.b animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .37, .41, .48, .52] }}>computed color: rgb(184 176 209)</motion.b>
        </section>

        <section className="html-action__panel html-action__panel--layout">
          <header><span>LAYOUT</span><b>Contenido → cajas → coordenadas</b></header>
          <div className="html-action__box-model">
            <motion.div className="html-action__margin" animate={{ padding: [4, 4, 14, 14, 4] }} transition={{ ...repeat, times: [0, .42, .48, .58, .64] }}>
              <div className="html-action__border"><div className="html-action__padding"><div className="html-action__content">Jinx<br/><small>240 × 168</small></div></div></div>
            </motion.div>
            <div className="html-action__metrics"><span>x 32</span><span>y 24</span><span>w 272</span><span>h 200</span></div>
          </div>
          <p>Grid resuelve tracks, gap y tamaño intrínseco antes de asignar geometría final.</p>
        </section>

        <section className="html-action__panel html-action__panel--paint">
          <header><span>PAINT</span><b>Ordenar instrucciones visuales</b></header>
          <div className="html-action__paint-list">
            {[
              ["01", "background", "#11182a"], ["02", "border", "1px"], ["03", "text", "Jinx"], ["04", "button", "Ver build"],
            ].map(([number, item, detail], index) => (
              <motion.div key={number} animate={{ opacity: [.2, .2, 1, 1, .32] }} transition={{ ...repeat, times: [0, .54 + index * .035, .58 + index * .035, .69, .74] }}><em>{number}</em><b>{item}</b><small>{detail}</small></motion.div>
            ))}
          </div>
          <motion.div className="html-action__paint-scan" animate={{ top: [8, 8, 152, 152], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.54, .57, .7, .74] }} />
        </section>

        <section className="html-action__panel html-action__panel--composite">
          <header><span>COMPOSITE</span><b>Capas que pueden moverse sin repintar todo</b></header>
          <div className="html-action__layers">
            <motion.div animate={{ x: [0, 0, 16, 16, 0], y: [0, 0, -10, -10, 0] }} transition={{ ...repeat, times: [0, .64, .7, .81, .88] }}><small>text + card</small></motion.div>
            <motion.div animate={{ x: [0, 0, 8, 8, 0], y: [0, 0, 7, 7, 0] }} transition={{ ...repeat, times: [0, .66, .72, .82, .89] }}><small>hover glow</small></motion.div>
            <motion.div animate={{ scale: [1, 1, 1.05, 1.05, 1] }} transition={{ ...repeat, times: [0, .68, .74, .82, .9] }}><small>transform layer</small></motion.div>
          </div>
          <code>transform + opacity → compositor</code>
        </section>

        <section className="html-action__panel html-action__panel--responsive">
          <header><span>RESPONSIVE</span><b>Mismo componente, espacio diferente</b></header>
          <div className="html-action__viewport-pair">
            <motion.div animate={{ width: [110, 110, 110, 175, 175, 110] }} transition={{ ...repeat, times: [0, .7, .76, .81, .9, 1] }}><small>sidebar · 280px</small><span>Jinx</span><b>stacked</b></motion.div>
            <motion.div animate={{ width: [175, 175, 175, 240, 240, 175] }} transition={{ ...repeat, times: [0, .72, .78, .83, .91, 1] }}><small>main · 640px</small><span>Jinx · ADC</span><b>horizontal</b></motion.div>
          </div>
          <code>@container (width &gt; 32rem)</code>
        </section>

        <section className="html-action__panel html-action__panel--a11y">
          <header><span>PARALLEL MODEL</span><b>Accessibility tree</b></header>
          <div className="html-action__a11y-tree">
            <div><b>article</b><small>Jinx champion card</small></div>
            <div><b>heading</b><small>Jinx</small></div>
            <div><b>button</b><small>Ver build</small><em>focusable</em></div>
            <motion.i animate={{ top: [10, 10, 112, 112], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.82, .85, .94, .98] }} />
          </div>
          <p>Semántica, nombre accesible y foco existen junto al resultado visual.</p>
        </section>

        <aside className="html-action__preview">
          <header><i/><i/><i/><span>localhost/champions/jinx</span></header>
          <motion.article animate={{ scale: [1, 1, 1, 1.025, 1.025, 1], opacity: [.35, .35, 1, 1, 1, .35] }} transition={{ ...repeat, times: [0, .38, .56, .72, .9, 1] }}>
            <small>THE LOOSE CANNON</small>
            <h3>Jinx</h3>
            <p>ADC · Zaun</p>
            <span>Ver build</span>
          </motion.article>
          <div className="html-action__preview-status"><b>DOM ✓</b><b>CSSOM ✓</b><b>Layout ✓</b><b>A11y ✓</b></div>
        </aside>
      </div>

      <p className="html-action__takeaway">El navegador no “muestra HTML con colores”: parsea dos lenguajes, resuelve la cascade, calcula cajas, crea instrucciones de pintura, compone capas y mantiene en paralelo un modelo accesible. Cada etapa puede cambiar sin repetir necesariamente todo el pipeline.</p>
    </div>
  );
}
