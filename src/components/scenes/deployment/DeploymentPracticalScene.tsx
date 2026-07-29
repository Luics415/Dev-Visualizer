"use client";

import { motion } from "motion/react";

const LOOP = 30;
const repeat = { duration: LOOP, repeat: Infinity } as const;
const jobs = [
  ["source","Commit","7f2a9c1"],
  ["test","Quality","lint · unit · contract"],
  ["build","Image","map-api@sha256:24b"],
  ["secure","Supply chain","SBOM · scan · sign"],
  ["auth","OIDC","short-lived cloud role"],
  ["migrate","Expand","add nullable anomaly_id"],
] as const;

export function DeploymentPracticalScene() {
  return (
    <div className="system-action system-action--deployment" aria-label="Pipeline de deployment canary con build firmado, OIDC, migración compatible, análisis de métricas y rollback automático">
      <header className="system-action__toolbar">
        <div><span><i /> rollout live</span><b>Chronobreak Map v2.4.0 · Ekko observa cada promoción</b></div>
        <div>{["commit","tests","image","SBOM","sign","OIDC","expand","deploy","5%","25%","analysis","abort","rollback","learn"].map((label,index)=><motion.em key={label} animate={{opacity:[.25,.25,1,1,.35]}} transition={{...repeat,times:[0,.02+index*.056,.055+index*.056,.73+index*.014,.97]}}>{String(index+1).padStart(2,"0")} {label}</motion.em>)}</div>
      </header>

      <div className="system-action__grid system-action__grid--deployment">
        <section className="deploy-action__pipeline">
          <header><b>GitHub Actions</b><span>release/2.4.0</span></header>
          {jobs.map(([key,title,detail],index)=><motion.div className={`deploy-action__job deploy-action__job--${key}`} key={key} animate={{opacity:[.25,.25,1,1,.4],x:[-7,-7,0,0,2]}} transition={{...repeat,times:[0,.06+index*.075,.11+index*.075,.7,.95]}}><i>{index+1}</i><div><b>{title}</b><small>{detail}</small></div><em>✓</em></motion.div>)}
          <motion.span className="deploy-action__artifact" animate={{top:[58,58,334,334],opacity:[0,1,1,0]}} transition={{...repeat,times:[.04,.08,.58,.64]}}>sha256:24b</motion.span>
        </section>

        <section className="deploy-action__rollout">
          <header><b>Progressive delivery</b><small>stable v2.3.4 · candidate v2.4.0</small></header>
          <div className="deploy-action__traffic">
            <div className="deploy-action__users">{Array.from({length:20},(_,index)=><motion.i key={index} animate={{backgroundColor:index<5?["#4d7290","#4d7290","#c850a6","#c850a6","#4d7290"]:["#4d7290","#4d7290","#835f86","#835f86","#4d7290"]}} transition={{...repeat,times:[0,.53,.62,.73,.9]}} />)}</div>
            <div className="deploy-action__router"><b>traffic router</b><motion.span animate={{width:["5%","5%","25%","25%","5%"]}} transition={{...repeat,times:[0,.48,.59,.73,.84]}} /></div>
            <div className="deploy-action__versions">
              <motion.div animate={{opacity:[1,1,.7,.7,1]}} transition={{...repeat,times:[0,.5,.6,.8,.9]}}><b>stable</b><strong>v2.3.4</strong><small>95% → 75% → 100%</small></motion.div>
              <motion.div animate={{opacity:[.45,.45,1,1,.25]}} transition={{...repeat,times:[0,.48,.56,.77,.88]}}><b>canary</b><strong>v2.4.0</strong><small>5% → 25% → aborted</small></motion.div>
            </div>
          </div>
          <div className="deploy-action__pods"><span>stable</span>{[1,2,3,4].map(n=><i key={`s${n}`}>S</i>)}<span>canary</span>{[1,2].map(n=><motion.i key={`c${n}`} animate={{borderColor:["#33425a","#c850a6","#c850a6","#f06474"],color:["#8293a8","#c080bb","#c080bb","#f06474"]}} transition={{...repeat,times:[0,.52,.69,.78]}}>C</motion.i>)}</div>
        </section>

        <aside className="deploy-action__analysis">
          <section>
            <header><b>Canary analysis</b><span>candidate vs baseline</span></header>
            <p><small>error rate</small><b>0.3%</b><em>pass</em></p>
            <p><small>CPU</small><b>61%</b><em>pass</em></p>
            <motion.p animate={{borderColor:["#202c40","#202c40","#f06474","#f06474"]}} transition={{...repeat,times:[0,.65,.74,.86]}}><small>p95 latency</small><motion.b animate={{color:["#49e1a8","#49e1a8","#f06474","#f06474"]}} transition={{...repeat,times:[0,.65,.74,.86]}}>680 ms</motion.b><motion.em animate={{color:["#49e1a8","#49e1a8","#f06474","#f06474"]}} transition={{...repeat,times:[0,.65,.74,.86]}}>fail</motion.em></motion.p>
            <p><small>SLO budget</small><b>99.92%</b><em>guarded</em></p>
          </section>
          <section>
            <header><b>Decision log</b><span>automated</span></header>
            {["5% healthy · promote","25% latency regression","analysis failed","abort candidate","route 100% stable","open incident dep_42"].map((event,index)=><motion.p key={event} animate={{opacity:[.18,.18,1,1,.38]}} transition={{...repeat,times:[0,.5+index*.045,.55+index*.045,.9,.98]}}><time>{String(index+1).padStart(2,"0")}</time><code>{event}</code></motion.p>)}
          </section>
        </aside>

        <motion.section className="deploy-action__data" animate={{opacity:[0,1,1,1,0]}} transition={{...repeat,times:[.05,.1,.88,.96,1]}}>
          <div><b>Schema expand</b><small>anomaly_id nullable · old + new app compatible</small></div><i>→</i><div><b>Canary write</b><small>dual-write guarded by flag</small></div><i>→</i><div><b>Abort</b><small>no contract step executed</small></div><i>→</i><div><b>Safe rollback</b><small>stable code reads the expanded schema</small></div>
        </motion.section>
      </div>

      <p className="system-action__takeaway">El mismo digest pasa por tests, scanning, firma y autenticación OIDC. La base se amplía antes del rollout para que ambas versiones coexistan. El canary llega a 25%, el p95 rompe el límite y el controller devuelve tráfico a stable; como todavía no ocurrió contract, rollback de código y datos sigue siendo seguro.</p>
    </div>
  );
}
