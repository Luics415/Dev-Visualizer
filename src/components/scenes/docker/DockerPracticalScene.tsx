"use client";

import { motion, useReducedMotion } from "motion/react";

const LOOP = 30;
const stages = [
  "context",
  "Dockerfile",
  "deps cache",
  "test stage",
  "runtime stage",
  "SBOM",
  "digest",
  "Compose",
  "network DNS",
  "volume",
  "secret",
  "healthcheck",
  "non-root",
  "rollback",
] as const;

const buildSteps = [
  ["context", ".dockerignore → 184 KB"],
  ["deps", "npm ci · cache mount"],
  ["tests", "lint + unit · target=test"],
  ["builder", "next build · output standalone"],
  ["runtime", "node:slim · USER 10001"],
  ["attest", "SBOM + provenance"],
] as const;

export function DockerPracticalScene() {
  const reducedMotion = useReducedMotion();
  const repeat = { duration: LOOP, repeat: reducedMotion ? 0 : Infinity } as const;

  return (
    <div className="system-action system-action--docker" aria-label="Jinx empaqueta la API de telemetría de Fishbones mediante un build multi-stage, la prueba, publica por digest y ejecuta una aplicación Compose con red, volumen, secretos y healthcheck">
      <header className="system-action__toolbar">
        <div>
          <span><i /> image build live</span>
          <b>fishbones-telemetry · del commit a un runtime reproducible</b>
        </div>
        <div>
          {stages.map((stage, index) => (
            <motion.em
              key={stage}
              animate={{ opacity: [.2, .2, 1, 1, .32] }}
              transition={{ ...repeat, times: [0, .02 + index * .047, .055 + index * .047, .82, .98] }}
            >{String(index + 1).padStart(2, "0")} {stage}</motion.em>
          ))}
        </div>
      </header>

      <div className="docker-action__grid">
        <section className="docker-action__source">
          <header><b>Fuente y Dockerfile</b><span>commit 8ac7f2e</span></header>
          <div className="docker-action__tree">
            <p><b>src/</b><span>application</span></p>
            <p><b>package-lock.json</b><span>locked deps</span></p>
            <p><b>Dockerfile</b><span>4 stages</span></p>
            <p><b>.dockerignore</b><span>node_modules · .git</span></p>
          </div>
          <div className="docker-action__dockerfile">
            <motion.code animate={{ opacity: [.35, 1, 1, .4] }} transition={{ ...repeat, times: [0, .08, .54, .9] }}>FROM node:24-slim AS deps</motion.code>
            <motion.code animate={{ opacity: [.25, .25, 1, 1, .35] }} transition={{ ...repeat, times: [0, .1, .17, .59, .91] }}>RUN --mount=type=cache npm ci</motion.code>
            <motion.code animate={{ opacity: [.2, .2, 1, 1, .32] }} transition={{ ...repeat, times: [0, .2, .28, .65, .92] }}>FROM deps AS test · RUN npm test</motion.code>
            <motion.code animate={{ opacity: [.2, .2, 1, 1, .32] }} transition={{ ...repeat, times: [0, .29, .37, .71, .94] }}>FROM node:24-slim AS runtime</motion.code>
            <motion.code animate={{ opacity: [.2, .2, 1, 1, .32] }} transition={{ ...repeat, times: [0, .37, .45, .77, .95] }}>USER 10001 · CMD ["node","server.js"]</motion.code>
          </div>
          <motion.div className="docker-action__context" animate={{ borderColor: ["#34435a", "#34435a", "#2496ed", "#2496ed"] }} transition={{ ...repeat, times: [0, .08, .16, .88] }}>
            <small>build context</small><b>184 KB</b><span>2.8 GB excluded</span>
          </motion.div>
        </section>

        <section className="docker-action__build">
          <header><b>BuildKit DAG</b><span>parallel · cached · content-addressed</span></header>
          <div className="docker-action__rail" aria-hidden="true" />
          {buildSteps.map(([title, detail], index) => (
            <motion.div
              className="docker-action__build-node"
              key={title}
              animate={{ opacity: [.26, .26, 1, 1, .36], x: [index % 2 ? 8 : -8, index % 2 ? 8 : -8, 0, 0, 0] }}
              transition={{ ...repeat, times: [0, .07 + index * .09, .13 + index * .09, .76, .94] }}
            >
              <i>{String(index + 1).padStart(2, "0")}</i>
              <div><b>{title}</b><small>{detail}</small></div>
              <motion.em animate={{ color: index === 1 ? ["#8294aa", "#8294aa", "#f5c742", "#49e1a8"] : ["#8294aa", "#8294aa", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .22 + index * .07, .32 + index * .07, .78] }}>
                {index === 1 ? "HIT" : "✓"}
              </motion.em>
            </motion.div>
          ))}
          <motion.span className="docker-action__layer-packet" animate={{ top: [56, 56, 360, 360], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.04, .09, .69, .76] }}>sha256:9f2…</motion.span>
        </section>

        <aside className="docker-action__runtime">
          <section>
            <header><b>Registry y supply chain</b><span>registry.hexgate.dev</span></header>
            <div className="docker-action__artifact">
              <motion.div animate={{ rotateY: [0, 0, 360, 360] }} transition={{ ...repeat, times: [0, .48, .62, .98] }}><b>image</b><small>62 MB</small></motion.div>
              <p><span>digest</span><code>sha256:24b9…</code></p>
              <p><span>SBOM</span><code>314 packages</code></p>
              <p><span>signature</span><code>verified</code></p>
              <p><span>platforms</span><code>amd64 · arm64</code></p>
            </div>
          </section>

          <section>
            <header><b>Compose runtime</b><span>project fishbones</span></header>
            <div className="docker-action__compose">
              <motion.div className="docker-action__service docker-action__service--web" animate={{ borderColor: ["#34435a", "#2496ed", "#2496ed", "#49e1a8"] }} transition={{ ...repeat, times: [0, .57, .72, .88] }}><b>web</b><small>10001 · read-only</small></motion.div>
              <motion.div className="docker-action__service docker-action__service--redis" animate={{ opacity: [.45, .45, 1, 1] }} transition={{ ...repeat, times: [0, .58, .67, .96] }}><b>redis</b><small>volume cache_data</small></motion.div>
              <svg viewBox="0 0 260 118" aria-hidden="true"><path d="M80 36 C130 36 128 82 182 82" /><path d="M80 36 C130 36 128 36 182 36" /></svg>
              <motion.span animate={{ left: [72, 72, 190, 190], top: [39, 39, 39, 39], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.56, .62, .77, .83] }}>telemetry</motion.span>
            </div>
            <div className="docker-action__runtime-signals">
              <p><small>DNS</small><b>redis → 172.23.0.3</b></p>
              <p><small>secret</small><b>/run/secrets/api_key</b></p>
              <p><small>health</small><motion.b animate={{ color: ["#f5c742", "#f5c742", "#49e1a8", "#49e1a8"] }} transition={{ ...repeat, times: [0, .69, .79, .97] }}>starting → healthy</motion.b></p>
              <p><small>memory</small><b>86 / 256 MB</b></p>
            </div>
          </section>
        </aside>

        <motion.section className="docker-action__release" animate={{ opacity: [.38, .38, 1, 1, .5] }} transition={{ ...repeat, times: [0, .72, .8, .96, 1] }}>
          <div><b>image@sha256:24b9</b><small>la misma referencia pasa CI → staging → prod</small></div>
          <i>→</i>
          <div><b>healthcheck</b><small>curl localhost:3000/health</small></div>
          <i>→</i>
          <div><b>logs</b><small>stdout · request_id=powpow_42</small></div>
          <i>→</i>
          <div><b>rollback</b><small>reapunta al digest anterior, sin rebuild</small></div>
        </motion.section>
      </div>

      <p className="system-action__takeaway">La imagen no es una carpeta comprimida: BuildKit construye un grafo de capas por contenido, las pruebas viven en una etapa descartable, la imagen final ejecuta como usuario no root y el digest aprobado es el mismo que se promueve. Compose conecta nombres, red, volumen y secretos sin convertir el contenedor en la fuente de verdad de los datos.</p>
    </div>
  );
}
