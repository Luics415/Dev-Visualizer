"use client";

import { motion } from "motion/react";

const LOOP = 29;
const repeat = { duration: LOOP, repeat: Infinity } as const;
const path = [
  ["dns","Route 53","latency record"],
  ["edge","CloudFront","edge cache + TLS"],
  ["waf","AWS WAF","managed + rate rules"],
  ["alb","ALB","host/path routing"],
  ["ecs","ECS Fargate","private subnets · 2 AZ"],
  ["cache","ElastiCache","session + hot reads"],
  ["db","Aurora","writer + reader"],
] as const;

export function AwsPracticalScene() {
  return (
    <div className="system-action system-action--aws" aria-label="Arquitectura AWS multi-AZ para un portal web con CloudFront, WAF, load balancer, ECS Fargate, Aurora, caché y cola">
      <header className="system-action__toolbar">
        <div><span><i /> architecture live</span><b>Piltover Security Portal · request, event y operación</b></div>
        <div>{["DNS","edge","WAF","routing","compute","identity","cache","database","queue","worker","metrics","alarm","cost","recovery"].map((label,index)=><motion.em key={label} animate={{opacity:[.25,.25,1,1,.35]}} transition={{...repeat,times:[0,.02+index*.057,.055+index*.057,.74+index*.012,.97]}}>{String(index+1).padStart(2,"0")} {label}</motion.em>)}</div>
      </header>

      <div className="system-action__grid system-action__grid--aws">
        <section className="aws-action__request">
          <header><b>Viewer request</b><span>zaun-mobile-42</span></header>
          <div className="aws-action__client"><span>C</span><div><b>Caitlyn</b><small>GET /security/advisories</small></div></div>
          <div className="aws-action__dns"><small>DNS</small><code>portal.piltover.dev</code><b>→ d3edge.cloudfront.net</b></div>
          <div className="aws-action__headers"><p><b>x-request-id</b><code>hex_42</code></p><p><b>authorization</b><code>Bearer …</code></p><p><b>accept</b><code>application/json</code></p></div>
          <motion.div className="aws-action__response" animate={{opacity:[0,0,1,1,0]}} transition={{...repeat,times:[0,.72,.79,.95,1]}}><strong>200</strong><div><b>advisories: 8</b><small>x-cache: Hit from CloudFront</small></div></motion.div>
        </section>

        <section className="aws-action__map">
          <header><b>AWS REGION · us-east-1</b><small>public edge · private workloads · managed data</small></header>
          <div className="aws-action__region">
            <div className="aws-action__az aws-action__az--a"><span>AZ-a</span><i>task A</i><i>Aurora writer</i></div>
            <div className="aws-action__az aws-action__az--b"><span>AZ-b</span><i>task B</i><i>Aurora reader</i></div>
            <svg viewBox="0 0 460 330" aria-hidden="true"><path d="M45 45 C120 45 95 92 175 92 S275 92 326 92 S390 136 390 176 S325 225 282 225 S232 282 170 282" /></svg>
            <div className="aws-action__path">
              {path.map(([key,title,detail],index)=><motion.div className={`aws-action__node aws-action__node--${key}`} key={key} animate={{opacity:[.3,.3,1,1,.45],scale:[.97,.97,1.035,1,.97]}} transition={{...repeat,times:[0,.06+index*.09,.11+index*.09,.75,.96]}}><b>{title}</b><small>{detail}</small></motion.div>)}
            </div>
            <motion.span className="aws-action__packet" animate={{offsetDistance:["0%","0%","100%","100%"],opacity:[0,1,1,0]}} transition={{...repeat,times:[.04,.08,.72,.78]}}>hex_42</motion.span>
          </div>
        </section>

        <aside className="aws-action__ops">
          <section>
            <header><b>CloudWatch</b><span>service lens</span></header>
            <div className="aws-action__metrics"><p><small>requests</small><b>2.4k/min</b></p><p><small>p95</small><b>118 ms</b></p><p><small>5xx</small><b>0.08%</b></p><p><small>cache hit</small><b>87%</b></p></div>
            <div className="aws-action__spark">{[35,48,42,61,58,72,67,83,75,88,80,76].map((h,index)=><motion.i key={index} style={{height:`${h}%`}} animate={{opacity:[.3,1,.55,.3]}} transition={{duration:3,repeat:Infinity,delay:index*.12}} />)}</div>
          </section>
          <section>
            <header><b>Identity + cost</b><span>guardrails</span></header>
            <p><code>taskRole</code><b>read advisories</b></p>
            <p><code>executionRole</code><b>pull image + logs</b></p>
            <p><code>Budget</code><b>$640 / $900</b></p>
            <p><code>Config</code><b>0 critical drift</b></p>
          </section>
        </aside>

        <motion.section className="aws-action__async" animate={{opacity:[0,0,1,1,0]}} transition={{...repeat,times:[0,.62,.69,.95,1]}}>
          <div><b>POST advisory</b><small>API task writes transaction</small></div><i>→</i><div><b>Outbox event</b><small>AdvisoryPublished</small></div><i>→</i><div><b>SQS</b><small>visibility + DLQ</small></div><i>→</i><div><b>Lambda worker</b><small>invalidate edge + notify</small></div>
        </motion.section>
      </div>

      <p className="system-action__takeaway">El request atraviesa edge, controles HTTP y compute privado; la task obtiene permisos temporales mediante un role, Aurora conserva autoridad, ElastiCache reduce lecturas y SQS desacopla el trabajo posterior. Multi-AZ, métricas, alarmas, backups y budgets forman parte de la arquitectura, no un añadido.</p>
    </div>
  );
}
