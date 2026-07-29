"use client";

import { motion } from "motion/react";

const LOOP = 30;
const repeat = { duration: LOOP, repeat: Infinity } as const;

const chapters = [
  ["01", "Issue", "definir el cambio"],
  ["02", "Branch", "aislar trabajo"],
  ["03", "Commits", "historia enfocada"],
  ["04", "Sync", "integrar base"],
  ["05", "Push", "publicar rama"],
  ["06", "PR", "revisión humana"],
  ["07", "CI", "validación automática"],
  ["08", "Merge", "entregar y trazar"],
] as const;

export function GitGithubPracticalScene() {
  return (
    <div className="git-action" aria-label="Flujo completo de una funcionalidad desde un issue de GitHub hasta merge, release y despliegue">
      <header className="git-action__toolbar">
        <div><span><i /> workflow live</span><b>Agregar filtro de campeones · Issue #42</b></div>
        <small>local Git ↔ GitHub ↔ CI</small>
      </header>

      <div className="git-action__timeline">
        {chapters.map(([number, title, detail], index) => (
          <motion.div
            key={number}
            animate={{ opacity: [.3, .3, 1, 1, .3], scale: [.97, .97, 1.04, 1, .97] }}
            transition={{ ...repeat, times: [0, .04 + index * .105, .08 + index * .105, .17 + index * .105, .23 + index * .105] }}
          ><em>{number}</em><b>{title}</b><small>{detail}</small></motion.div>
        ))}
        <motion.i animate={{ width: ["0%", "0%", "100%", "100%"] }} transition={{ ...repeat, times: [.03, .07, .91, .98] }} />
      </div>

      <div className="git-action__grid">
        <section className="git-action__panel git-action__panel--issue">
          <header><span>GITHUB</span><b>Issue #42</b></header>
          <div className="git-action__issue-card">
            <strong>Filtrar campeones por rol</strong>
            <p>Como jugador, quiero buscar a Jinx por “ADC”.</p>
            <div><span>feature</span><span>frontend</span><span>assigned: Luics415</span></div>
            <motion.i animate={{ width: ["0%", "0%", "100%", "100%"] }} transition={{ ...repeat, times: [.02, .05, .12, .2] }} />
          </div>
          <motion.code animate={{ opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.03, .06, .16, .22] }}>git switch -c feature/jinx-role-filter</motion.code>
        </section>

        <section className="git-action__panel git-action__panel--local">
          <header><span>LOCAL</span><b>Working tree → staging → history</b></header>
          <div className="git-action__three-areas">
            {["Working tree", "Staging", "Commits"].map((label, index) => (
              <div key={label}><small>{label}</small><b>{index === 0 ? "Filter.tsx" : index === 1 ? "2 hunks" : "c4a92f"}</b><span>{index === 0 ? "modified" : index === 1 ? "selected" : "snapshot"}</span></div>
            ))}
            <motion.i animate={{ left: ["4%", "4%", "43%", "43%", "82%", "82%"], opacity: [0, 1, 1, 1, 1, 0] }} transition={{ ...repeat, times: [.16, .19, .27, .31, .39, .43] }}>Δ</motion.i>
          </div>
          <div className="git-action__commits">
            {[["a1f0", "feat: add role filter"], ["b72c", "test: filter behavior"], ["c4a9", "docs: explain query"]].map(([hash, text], index) => (
              <motion.div key={hash} animate={{ opacity: [.2, .2, 1, 1, .3] }} transition={{ ...repeat, times: [0, .22 + index * .07, .27 + index * .07, .49, .56] }}><i>{hash}</i><span>{text}</span></motion.div>
            ))}
          </div>
        </section>

        <section className="git-action__panel git-action__panel--sync">
          <header><span>SYNC</span><b>Actualizar antes de publicar</b></header>
          <div className="git-action__sync-map">
            <div className="git-action__repo git-action__repo--local"><b>feature</b><small>3 commits</small></div>
            <div className="git-action__repo git-action__repo--origin"><b>origin/main</b><small>2 commits nuevos</small></div>
            <motion.div className="git-action__fetch" animate={{ x: [0, 0, -125, -125, 0], opacity: [0, 1, 1, 0, 0] }} transition={{ ...repeat, times: [.4, .43, .49, .53, .58] }}>fetch</motion.div>
            <motion.div className="git-action__rebase" animate={{ opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, -5] }} transition={{ ...repeat, times: [0, .49, .53, .61, .66] }}>rebase · commits reproducidos</motion.div>
          </div>
          <code>git fetch origin && git rebase origin/main</code>
        </section>

        <section className="git-action__panel git-action__panel--remote">
          <header><span>REMOTE</span><b>Push y Pull Request</b></header>
          <div className="git-action__push">
            <div><b>local branch</b><small>feature/jinx-role-filter</small></div>
            <motion.i animate={{ left: ["15%", "15%", "78%", "78%"], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.58, .61, .68, .72] }}>push</motion.i>
            <div><b>origin</b><small>new branch</small></div>
          </div>
          <motion.div className="git-action__pr" animate={{ opacity: [0, 0, 1, 1, .35] }} transition={{ ...repeat, times: [0, .68, .72, .91, .96] }}>
            <header><b>PR #58 · Add champion role filter</b><span>Open</span></header>
            <div><small>3 commits</small><small>+128 −18</small><small>Issue #42 linked</small></div>
          </motion.div>
        </section>

        <section className="git-action__panel git-action__panel--review">
          <header><span>REVIEW</span><b>Personas + reglas</b></header>
          <div className="git-action__review-thread">
            <motion.div animate={{ opacity: [0, 0, 1, 1, .4] }} transition={{ ...repeat, times: [0, .72, .75, .86, .93] }}><b>Reviewer</b><p>¿Podemos extraer el filtro a un hook?</p></motion.div>
            <motion.div animate={{ opacity: [0, 0, 1, 1, .4] }} transition={{ ...repeat, times: [0, .76, .79, .87, .94] }}><b>Author</b><p>Listo en commit e82b.</p></motion.div>
          </div>
          <div className="git-action__checks">
            {["review approved", "branch up to date", "no conflicts"].map((check, index) => <motion.span key={check} animate={{ opacity: [.25, .25, 1, 1, .25] }} transition={{ ...repeat, times: [0, .77 + index * .025, .8 + index * .025, .9, .96] }}>✓ {check}</motion.span>)}
          </div>
        </section>

        <section className="git-action__panel git-action__panel--ci">
          <header><span>ACTIONS</span><b>CI pipeline</b></header>
          <div className="git-action__jobs">
            {["lint", "typecheck", "tests", "build"].map((job, index) => <motion.div key={job} animate={{ borderColor: ["#34425a", "#34425a", "rgba(73,225,168,.7)", "rgba(73,225,168,.35)"], opacity: [.45, .45, 1, .65] }} transition={{ ...repeat, times: [0, .75 + index * .035, .79 + index * .035, .96] }}><b>{job}</b><span>✓</span></motion.div>)}
          </div>
          <motion.code animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .84, .87, .94, .98] }}>all required checks passed</motion.code>
        </section>

        <section className="git-action__panel git-action__panel--merge">
          <header><span>DELIVERY</span><b>Merge, tag y deploy</b></header>
          <div className="git-action__merge-graph">
            <span>A</span><span>B</span><span>C</span><motion.span animate={{ opacity: [.2, .2, 1, 1] }} transition={{ ...repeat, times: [0, .87, .91, 1] }}>M</motion.span>
            <i />
          </div>
          <motion.div className="git-action__release" animate={{ opacity: [0, 0, 1, 1, 0], y: [6, 6, 0, 0, -4] }} transition={{ ...repeat, times: [0, .9, .93, .98, 1] }}><b>v1.8.0</b><span>deployed · Issue #42 closed</span></motion.div>
        </section>

        <aside className="git-action__inspector">
          <header><b>Traceability</b><span>one change · one story</span></header>
          {[
            ["Issue", "#42"], ["Branch", "feature/jinx-role-filter"], ["Commits", "4 focused snapshots"], ["PR", "#58"], ["Checks", "4/4"], ["Merge", "main@f91d"], ["Release", "v1.8.0"],
          ].map(([key, value], index) => <motion.div key={key} animate={{ opacity: [.22, .22, 1, 1, .45] }} transition={{ ...repeat, times: [0, .06 + index * .12, .11 + index * .12, .92, .98] }}><small>{key}</small><b>{value}</b></motion.div>)}
        </aside>
      </div>

      <p className="git-action__takeaway">El flujo no es “subir archivos”: cada etapa preserva intención, contexto, calidad y trazabilidad. Git modela el historial; GitHub coordina la conversación y automatiza las puertas antes de entregar.</p>
    </div>
  );
}
