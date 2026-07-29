"use client";

import { motion } from "motion/react";

const LOOP = 11;
const T = { duration: LOOP, repeat: Infinity } as const;

export function RepositoryScene() {
  return (
    <div className="scene git-repository" aria-label="Un repositorio contiene archivos visibles y una base interna punto git con objetos e historial">
      <div className="scene-code">git init</div>
      <div className="git-repo-cutaway">
        <div className="git-repo-cutaway__work"><small>project/</small><span>src/</span><span>README.md</span><span>package.json</span></div>
        <motion.div className="git-repo-cutaway__git" animate={{ height: [34, 34, 96, 96, 34], opacity: [.5, .5, 1, 1, .5] }} transition={{ ...T, times: [0, .2, .34, .78, 1] }}><small>.git/</small><span>objects</span><span>refs</span><span>HEAD</span></motion.div>
        <motion.i animate={{ rotate: [0, 0, 360, 360] }} transition={{ ...T, times: [0, .25, .78, 1] }}>↻</motion.i>
      </div>
      <p className="scene-caption">El repositorio es el proyecto más la base interna donde Git guarda snapshots, referencias y configuración.</p>
    </div>
  );
}

export function ThreeAreasScene() {
  return (
    <div className="scene git-areas" aria-label="Un archivo cambia en el working tree, pasa al staging area y termina dentro de un commit">
      <div className="scene-code">edit → git add → git commit</div>
      <div className="git-area-conveyor">
        {[['Working tree','app.ts','modified'],['Staging area','app.ts','selected'],['Repository','c4a92f','snapshot']].map(([title,value,state],index)=><div key={title}><small>{title}</small><b>{value}</b><span>{state}</span><i /></div>)}
        <motion.em animate={{ x: [0, 0, 94, 94, 188, 188], opacity: [0, 1, 1, 1, 1, 0] }} transition={{ ...T, times: [.08,.15,.37,.48,.7,.84] }}>app.ts</motion.em>
      </div>
      <p className="scene-caption">Git no envía cada cambio directo al historial: primero eliges exactamente qué formará el próximo snapshot.</p>
    </div>
  );
}

export function CommitsScene() {
  return (
    <div className="scene git-commits" aria-label="Cada commit guarda un snapshot y apunta al commit anterior formando una historia">
      <div className="scene-code">git log --oneline</div>
      <div className="git-filmstrip">
        {['a1f0','b72c','c4a9','d91e'].map((hash,index)=><motion.div key={hash} animate={{ opacity: [.25,.25,1,1,.25], y:[4,4,0,0,-3] }} transition={{...T,times:[0,.1+index*.15,.17+index*.15,.65+index*.08,.8+index*.05]}}><b>{hash}</b><span>{['init','add cart','fix total','ship'][index]}</span><small>snapshot {index+1}</small></motion.div>)}
        <motion.i animate={{ width: ['0%','0%','88%','88%'] }} transition={{...T,times:[0,.12,.72,1]}} />
      </div>
      <p className="scene-caption">Un commit no es solo un mensaje: identifica un snapshot, autor, fecha y enlace con su padre.</p>
    </div>
  );
}

export function BranchesScene() {
  return (
    <div className="scene git-branches" aria-label="Una rama es una referencia móvil que permite crear una línea de trabajo independiente">
      <div className="scene-code">git switch -c feature/search</div>
      <svg className="git-branch-rail" viewBox="0 0 300 140" aria-hidden="true"><path d="M18 96 H282"/><path d="M96 96 C122 96 122 38 154 38 H282"/></svg>
      {['a1','b2','c3'].map((x,i)=><span key={x} className={`git-commit-dot git-commit-dot--main-${i}`}>{x}</span>)}
      {['f1','f2'].map((x,i)=><motion.span key={x} className={`git-commit-dot git-commit-dot--feature-${i}`} animate={{opacity:[0,0,1,1,.25]}} transition={{...T,times:[0,.27+i*.18,.37+i*.18,.78,1]}}>{x}</motion.span>)}
      <motion.div className="git-branch-label" animate={{ x:[0,0,112,112], y:[0,0,-58,-58] }} transition={{...T,times:[0,.2,.34,1]}}>feature/search</motion.div>
      <p className="scene-caption">Crear una rama no copia todos los archivos: crea un nombre que apunta a un commit y después avanza.</p>
    </div>
  );
}

export function HeadScene() {
  return (
    <div className="scene git-head" aria-label="HEAD indica qué rama o commit está actualmente seleccionado">
      <div className="scene-code">HEAD → main → c4a9</div>
      <div className="git-head-map">
        <div className="git-head-map__commits"><span>a1</span><span>b2</span><span>c4</span><span>d9</span></div>
        <motion.div className="git-head-map__branch" animate={{ x:[0,0,62,62,124,124] }} transition={{...T,times:[0,.14,.28,.46,.62,1]}}>main</motion.div>
        <motion.div className="git-head-map__pointer" animate={{ x:[0,0,62,62,124,124], rotate:[0,0,0,0,8,8] }} transition={{...T,times:[0,.14,.28,.46,.62,1]}}>HEAD ↓</motion.div>
        <motion.small animate={{opacity:[0,0,1,1,0]}} transition={{...T,times:[0,.66,.72,.9,1]}}>detached HEAD = apunta directo a un commit</motion.small>
      </div>
      <p className="scene-caption">HEAD es el cursor de Git: define desde dónde lees y dónde avanzará el siguiente commit.</p>
    </div>
  );
}

export function MergeScene() {
  return (
    <div className="scene git-merge" aria-label="Merge combina dos líneas de historia conservando ambos padres">
      <div className="scene-code">git merge feature/search</div>
      <svg className="git-merge-map" viewBox="0 0 300 150" aria-hidden="true"><path d="M20 105 H118 C155 105 151 42 188 42 H235"/><path d="M20 105 H178 C204 105 205 75 235 75"/><path d="M235 42 C270 42 270 75 282 75"/></svg>
      <span className="git-merge-dot git-merge-dot--base">base</span><span className="git-merge-dot git-merge-dot--main">main</span><span className="git-merge-dot git-merge-dot--feature">feature</span>
      <motion.span className="git-merge-dot git-merge-dot--result" animate={{scale:[.6,.6,1.18,1,1],opacity:[0,0,1,1,0]}} transition={{...T,times:[0,.48,.6,.82,1]}}>M</motion.span>
      <motion.b animate={{opacity:[0,0,1,1,0]}} transition={{...T,times:[0,.62,.7,.9,1]}}>2 parents · historia preservada</motion.b>
      <p className="scene-caption">Un merge commit conecta las dos historias y deja visible que ambas líneas convergieron.</p>
    </div>
  );
}

export function RebaseScene() {
  return (
    <div className="scene git-rebase" aria-label="Rebase toma commits de una rama y los reproduce sobre una base nueva creando commits nuevos">
      <div className="scene-code">git rebase main</div>
      <div className="git-rebase-stage">
        <div className="git-rebase-stage__base"><span>a</span><span>b</span><motion.span animate={{opacity:[0,1,1,1]}} transition={{...T,times:[0,.22,.3,1]}}>c</motion.span></div>
        <div className="git-rebase-stage__old"><motion.span animate={{x:[0,0,104,104],y:[0,0,54,54],opacity:[1,1,1,0]}} transition={{...T,times:[0,.28,.55,.78]}}>x</motion.span><motion.span animate={{x:[0,0,104,104],y:[0,0,54,54],opacity:[1,1,1,0]}} transition={{...T,times:[0,.38,.66,.84]}}>y</motion.span></div>
        <div className="git-rebase-stage__new"><motion.span animate={{opacity:[0,0,1,1,0]}} transition={{...T,times:[0,.5,.62,.88,1]}}>x′</motion.span><motion.span animate={{opacity:[0,0,1,1,0]}} transition={{...T,times:[0,.61,.73,.91,1]}}>y′</motion.span></div>
        <motion.b animate={{opacity:[0,0,1,1,0]}} transition={{...T,times:[0,.72,.8,.93,1]}}>historia lineal · hashes nuevos</motion.b>
      </div>
      <p className="scene-caption">Rebase reescribe la línea local: reaplica cambios sobre otra base y por eso genera nuevos identificadores.</p>
    </div>
  );
}

export function RemotesScene() {
  return (
    <div className="scene git-remotes" aria-label="El repositorio local puede registrar origin y upstream como destinos remotos distintos">
      <div className="scene-code">git remote -v</div>
      <div className="git-remote-orbit">
        <div className="git-remote-orbit__local">local<small>.git</small></div>
        <motion.div className="git-remote-orbit__origin" animate={{opacity:[.35,1,1,.35]}} transition={{...T,times:[.1,.22,.68,.85]}}>origin<small>tu fork</small></motion.div>
        <motion.div className="git-remote-orbit__upstream" animate={{opacity:[.35,.35,1,1,.35]}} transition={{...T,times:[0,.28,.4,.78,.92]}}>upstream<small>proyecto base</small></motion.div>
        <svg viewBox="0 0 290 140"><path d="M145 70 L45 28"/><path d="M145 70 L246 28"/></svg>
        <motion.i animate={{offsetDistance:['0%','100%']}} transition={{...T,times:[0,1]}} />
      </div>
      <p className="scene-caption">Un remoto es un alias para otra ubicación del repositorio; no es una rama ni una copia automática.</p>
    </div>
  );
}

export function SyncScene() {
  const ops = [['fetch','descarga referencias'],['pull','fetch + integrar'],['push','publica commits']];
  return (
    <div className="scene git-sync" aria-label="Fetch, pull y push realizan movimientos diferentes entre repositorio local y remoto">
      <div className="scene-code">fetch ≠ pull ≠ push</div>
      <div className="git-sync-radar"><div className="git-sync-radar__local">LOCAL</div><div className="git-sync-radar__remote">REMOTE</div>{ops.map(([op,desc],i)=><motion.div key={op} className={`git-sync-op git-sync-op--${i}`} animate={{opacity:[.2,.2,1,1,.2]}} transition={{...T,times:[0,.1+i*.25,.18+i*.25,.31+i*.25,.44+i*.25]}}><b>{op}</b><small>{desc}</small><i>{i===2?'→':'←'}</i></motion.div>)}</div>
      <p className="scene-caption">Fetch actualiza conocimiento remoto; pull además integra; push envía tu historia publicada.</p>
    </div>
  );
}

export function CloneForkScene() {
  return (
    <div className="scene git-clone-fork" aria-label="Fork crea un repositorio en otra cuenta de GitHub y clone crea una copia local con historial">
      <div className="scene-code">Fork en GitHub · git clone en tu máquina</div>
      <div className="git-copy-map">
        <div className="git-copy-map__upstream">octo/project<small>GitHub original</small></div>
        <motion.div className="git-copy-map__fork" animate={{opacity:[0,0,1,1,.4]}} transition={{...T,times:[0,.24,.34,.8,1]}}>luics/project<small>fork remoto</small></motion.div>
        <motion.div className="git-copy-map__local" animate={{opacity:[0,0,1,1,.4],y:[8,8,0,0,4]}} transition={{...T,times:[0,.5,.62,.86,1]}}>C:\dev\project<small>clone local + .git</small></motion.div>
        <motion.i animate={{height:[0,0,44,44]}} transition={{...T,times:[0,.29,.43,1]}} /><motion.em animate={{height:[0,0,44,44]}} transition={{...T,times:[0,.55,.69,1]}} />
      </div>
      <p className="scene-caption">Fork ocurre entre cuentas remotas; clone descarga archivos e historial para trabajar localmente.</p>
    </div>
  );
}

export function PullRequestScene() {
  return (
    <div className="scene git-pr" aria-label="Una pull request propone comparar ramas, revisar cambios, ejecutar checks y decidir un merge">
      <div className="scene-code">feature/search → main</div>
      <div className="git-pr-board">
        <header><b>PR #18 · Add search</b><span>Open</span></header>
        <div className="git-pr-board__diff"><small>Files changed</small><b>+42</b><em>−8</em></div>
        <div className="git-pr-board__checks">{['lint','test','build'].map((x,i)=><motion.span key={x} animate={{opacity:[.25,.25,1,1,.25]}} transition={{...T,times:[0,.16+i*.14,.25+i*.14,.72,.88]}}>✓ {x}</motion.span>)}</div>
        <motion.div className="git-pr-board__review" animate={{opacity:[0,0,1,1,0],x:[8,8,0,0,-4]}} transition={{...T,times:[0,.56,.65,.86,1]}}>Approved by Ana</motion.div>
        <motion.button tabIndex={-1} type="button" animate={{scale:[1,1,1.04,1]}} transition={{...T,times:[0,.7,.79,.9]}}>Merge pull request</motion.button>
      </div>
      <p className="scene-caption">GitHub rodea la comparación de Git con conversación, permisos, automatización y una decisión explícita.</p>
    </div>
  );
}

export function ConflictScene() {
  return (
    <div className="scene git-conflict" aria-label="Un conflicto aparece cuando dos ramas cambian la misma región y Git no puede elegir automáticamente">
      <div className="scene-code">CONFLICT (content): Merge conflict in app.ts</div>
      <div className="git-conflict-editor">
        <div className="git-conflict-editor__ours"><small>HEAD · main</small><code>const theme = &quot;jinx&quot;;</code></div>
        <motion.div className="git-conflict-editor__marker" animate={{opacity:[.25,1,1,.25]}} transition={{...T,times:[.1,.22,.72,.9]}}>same line</motion.div>
        <div className="git-conflict-editor__theirs"><small>feature/theme</small><code>const theme = &quot;arcane&quot;;</code></div>
        <motion.div className="git-conflict-editor__resolution" animate={{opacity:[0,0,1,1,0],y:[7,7,0,0,-4]}} transition={{...T,times:[0,.55,.65,.88,1]}}><small>resolved</small><code>const theme = userTheme;</code><b>git add app.ts</b></motion.div>
      </div>
      <p className="scene-caption">Git detecta la ambigüedad; una persona debe construir el resultado correcto y marcarlo como resuelto.</p>
    </div>
  );
}

export function GitignoreScene() {
  return (
    <div className="scene git-ignore" aria-label="Gitignore actúa como un filtro que evita que archivos generados o secretos entren al seguimiento">
      <div className="scene-code">.gitignore</div>
      <div className="git-ignore-sieve">
        <div className="git-ignore-sieve__input">{['src/','node_modules/','.env','dist/','README.md'].map((x,i)=><motion.span key={x} animate={{y:[0,0,72,72],opacity:[0,1,1,0]}} transition={{...T,times:[.03+i*.08,.1+i*.08,.52+i*.06,.63+i*.06]}}>{x}</motion.span>)}</div>
        <div className="git-ignore-sieve__filter"><b>patterns</b><small>node_modules/</small><small>.env</small><small>dist/</small></div>
        <div className="git-ignore-sieve__tracked"><b>tracked candidates</b><motion.span animate={{opacity:[0,0,1,1,0]}} transition={{...T,times:[0,.56,.64,.9,1]}}>src/ · README.md</motion.span></div>
        <motion.div className="git-ignore-sieve__blocked" animate={{opacity:[0,0,1,1,0]}} transition={{...T,times:[0,.48,.58,.84,1]}}>.env blocked</motion.div>
      </div>
      <p className="scene-caption">.gitignore evita nuevos archivos no deseados; no deja de seguir archivos que ya estaban versionados.</p>
    </div>
  );
}

export function ActionsScene() {
  return (
    <div className="scene git-actions" aria-label="GitHub Actions ejecuta un workflow de lint, test, build y deploy después de un push">
      <div className="scene-code">on: [push, pull_request]</div>
      <div className="git-actions-pipeline">
        <div className="git-actions-pipeline__trigger">push<small>main</small></div>
        {['lint','test','build','deploy'].map((job,index)=><motion.div key={job} className={`git-actions-job git-actions-job--${index}`} animate={{opacity:[.25,.25,1,1,.25],scale:[.98,.98,1.04,1,.98]}} transition={{...T,times:[0,.12+index*.16,.2+index*.16,.31+index*.16,.43+index*.16]}}><i>{index<3?'✓':'↗'}</i><b>{job}</b><small>{['ESLint','Vitest','Next.js','production'][index]}</small></motion.div>)}
        <motion.div className="git-actions-pipeline__artifact" animate={{opacity:[0,0,1,1,0],y:[5,5,0,0,-3]}} transition={{...T,times:[0,.72,.8,.93,1]}}>release ready</motion.div>
      </div>
      <p className="scene-caption">Un workflow convierte eventos del repositorio en jobs reproducibles y deja evidencia de cada resultado.</p>
    </div>
  );
}
