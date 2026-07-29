"use client";

import { motion } from "motion/react";

const LOOP = 24;
const stage = (start: number, end: number) => ({
  duration: LOOP,
  repeat: Infinity,
  times: [0, start, Math.min(start + 0.035, 0.96), end, Math.min(end + 0.04, 1), 1],
});

export function JavaScriptPracticalScene() {
  return (
    <div
      className="practical-story"
      aria-label="Historia visual de una compra: evento de usuario, actualización de estado, transformación de datos, petición al servidor, espera asíncrona y renderizado final"
    >
      <div className="practical-story__legend">
        <span><i /> dato</span><span><i /> ejecución</span><span><i /> resultado</span>
      </div>

      <div className="practical-story__grid">
        <motion.section className="story-stage story-stage--event" animate={{ opacity: [.42,.42,1,1,.42,.42] }} transition={stage(.02,.16)}>
          <header><span>01</span><div><b>Evento</b><small>La intención entra al programa</small></div></header>
          <div className="story-event-ui">
            <div className="story-product"><span>Teclado</span><b>$45</b></div>
            <div className="story-event-ui__button">Agregar</div>
            <motion.i animate={{ x: [20,0,0,0], y: [18,0,0,0], scale: [1,1,.76,1], opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.02,.07,.1,.16] }}>↖</motion.i>
            <motion.em animate={{ scale: [0,1.8,1.8], opacity: [0,.7,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.09,.105,.13] }} />
          </div>
          <code>onClick → addToCart(product)</code>
        </motion.section>

        <motion.section className="story-stage story-stage--state" animate={{ opacity: [.42,.42,1,1,.42,.42] }} transition={stage(.16,.31)}>
          <header><span>02</span><div><b>Estado</b><small>El array recibe un objeto nuevo</small></div></header>
          <div className="story-state-store">
            <small>cart[]</small>
            <motion.div animate={{ opacity: [0,0,1,1,0], y: [-18,-18,0,0,8] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.18,.22,.92,1] }}><span>Teclado</span><b>qty: 1</b><em>$45</em></motion.div>
            <motion.div animate={{ opacity: [0,0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0,.24,.27,.92,1] }}><span>Monitor</span><b>qty: 1</b><em>$180</em></motion.div>
          </div>
          <code>setCart([...cart, product])</code>
        </motion.section>

        <motion.section className="story-stage story-stage--transform" animate={{ opacity: [.42,.42,1,1,.42,.42] }} transition={stage(.31,.52)}>
          <header><span>03</span><div><b>Transformación</b><small>Cada método resuelve una tarea</small></div></header>
          <div className="story-pipeline">
            {[['filter','stock'],['map','price × qty'],['reduce','subtotal']].map(([name,label],index)=><div key={name} className="story-pipeline__machine"><motion.i animate={{ scale:[1,1.18,1], opacity:[.3,1,.3] }} transition={{duration:LOOP,repeat:Infinity,times:[.32+index*.055,.36+index*.055,.42+index*.055]}} /> <b>{name}()</b><small>{label}</small></div>)}
            <motion.span animate={{ x: [0,0,164,164], opacity: [0,1,1,0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.32,.39,.48,.53] }}>$45 + $180</motion.span>
          </div>
          <code>items.filter(...).map(...).reduce(...)</code>
        </motion.section>

        <motion.section className="story-stage story-stage--network" animate={{ opacity: [.42,.42,1,1,.42,.42] }} transition={stage(.52,.67)}>
          <header><span>04</span><div><b>Red</b><small>El subtotal sale del navegador</small></div></header>
          <div className="story-network">
            <div>browser<small>$225</small></div><div>API<small>/discount</small></div>
            <span className="story-network__line" />
            <motion.i animate={{ x:[0,120,120], opacity:[0,1,0] }} transition={{duration:LOOP,repeat:Infinity,times:[.53,.59,.66]}}>POST</motion.i>
            <motion.em animate={{ x:[0,-120,-120], opacity:[0,1,0] }} transition={{duration:LOOP,repeat:Infinity,times:[.62,.67,.73]}}>$25</motion.em>
          </div>
          <code>fetch(&quot;/discount&quot;, &#123; body: subtotal &#125;)</code>
        </motion.section>

        <motion.section className="story-stage story-stage--async" animate={{ opacity: [.42,.42,1,1,.42,.42] }} transition={stage(.67,.82)}>
          <header><span>05</span><div><b>Asincronía</b><small>La función espera; la UI continúa</small></div></header>
          <div className="story-async">
            <div className="story-async__lane"><small>checkout()</small><motion.span animate={{ width:[42,92,92,150], opacity:[1,1,1,0] }} transition={{duration:LOOP,repeat:Infinity,times:[.67,.7,.76,.83]}} /><motion.b animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.69,.72,.78,.82]}}>await</motion.b></div>
            <div className="story-async__lane"><small>UI</small>{['spinner','clock','hover'].map((item,index)=><motion.i key={item} animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.69+index*.025,.72+index*.025,.78+index*.025,.82+index*.025]}}>{item}</motion.i>)}</div>
          </div>
          <code>const discount = await response.json()</code>
        </motion.section>

        <motion.section className="story-stage story-stage--render" animate={{ opacity: [.42,.42,1,1,.42,.42] }} transition={stage(.82,.97)}>
          <header><span>06</span><div><b>Render</b><small>El nuevo estado cambia la interfaz</small></div></header>
          <div className="story-receipt">
            <div><span>Subtotal</span><b>$225</b></div>
            <motion.div animate={{opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.83,.87,.96,1]}}><span>Descuento</span><b>−$25</b></motion.div>
            <motion.div className="story-receipt__total" animate={{scale:[.9,.9,1.05,1],opacity:[0,1,1,0]}} transition={{duration:LOOP,repeat:Infinity,times:[.86,.9,.96,1]}}><span>Total</span><b>$200</b></motion.div>
          </div>
          <code>setTotal(subtotal - discount)</code>
        </motion.section>
      </div>

      <motion.div className="practical-story__summary" animate={{ opacity:[0,0,1,1,0] }} transition={{duration:LOOP,repeat:Infinity,times:[0,.9,.94,.98,1]}}>
        Un clic produce una cadena: evento → estado → datos → red → espera → interfaz.
      </motion.div>
    </div>
  );
}
