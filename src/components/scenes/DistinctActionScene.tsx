"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

export type DistinctActionSceneId =
  | "python"
  | "prolog"
  | "xml"
  | "xsd"
  | "json"
  | "sql-server"
  | "c"
  | "cpp"
  | "c-sharp"
  | "objective-c"
  | "c-star"
  | "cweb"
  | "embedded-c"
  | "visual-basic"
  | "ux-ui"
  | "bootstrap"
  | "angularjs"
  | "apis"
  | "nodejs"
  | "laravel"
  | "n8n"
  | "dotnet"
  | "deployment"
  | "git"
  | "github";

type VisualKind =
  | "python-runtime"
  | "proof-constellation"
  | "xml-document"
  | "xsd-gates"
  | "json-values"
  | "transaction-rail"
  | "memory-forensics"
  | "ownership-rail"
  | "channel-plant"
  | "runtime-switchboard"
  | "thermal-grid"
  | "literate-book"
  | "embedded-scope"
  | "winforms-theatre"
  | "ux-blueprint"
  | "responsive-desk"
  | "digest-clock"
  | "protocol-harbor"
  | "event-port"
  | "transaction-palace"
  | "workflow-airport"
  | "runtime-orbit"
  | "canary-rollout"
  | "history-strata"
  | "governance-chamber";

type SceneConfig = {
  label: string;
  visual: VisualKind;
  input: string;
  result: string;
  failure: string;
  recovery: string;
  nodes: readonly string[];
  evidence: readonly string[];
  easterEgg?: string;
};

const configs: Record<DistinctActionSceneId, SceneConfig> = {
  python: {
    label: "Observatorio de telemetría reproducible",
    visual: "python-runtime",
    input: "telemetry_042.csv",
    result: "wheel + report + trace",
    failure: "checksum mismatch",
    recovery: "resume(offset) · idempotent",
    nodes: ["SOURCE", "AST", "BYTECODE", "ASYNC I/O", "PROCESS POOL", "ARTIFACT"],
    evidence: ["TaskGroup cerrado", "p95 84 ms", "digest verificado"],
    easterEgg: "Visión antes del efecto",
  },
  prolog: {
    label: "Observatorio de inferencia explicable",
    visual: "proof-constellation",
    input: "?- best_plan(i17, Plan)",
    result: "plan óptimo · prueba auditable",
    failure: "all_distinct([4,4,_]) → fail",
    recovery: "trail rewind → next choice",
    nodes: ["QUERY", "FACTS", "RULES", "UNIFY", "CLP(FD)", "PROOF"],
    evidence: ["roles completos", "responders únicos", "ETA ≤ 45"],
    easterEgg: "Ruta discreta: nexo_sur",
  },
  xml: {
    label: "Manual técnico multilingüe y firmado",
    visual: "xml-document",
    input: "manual-v3.xml",
    result: "HTML accesible · firma válida",
    failure: "XInclude externo bloqueado",
    recovery: "XML Catalog local",
    nodes: ["BYTES", "INFOSET", "NAMESPACES", "XPATH", "XSLT", "C14N + SIGN"],
    evidence: ["network off", "xml:lang es-MX", "digest coincide"],
  },
  xsd: {
    label: "Certificado de calibración verificable",
    visual: "xsd-gates",
    input: "certificate-421.xml",
    result: "PSVI · VALID",
    failure: "xs:key M-17 duplicada",
    recovery: "M-18 + re-assessment",
    nodes: ["ROOT", "DATATYPE", "FACETS", "SEQUENCE", "KEY/KEYREF", "ASSERT"],
    evidence: ["schema digest", "XSD 1.0/1.1", "corpus verde"],
  },
  json: {
    label: "Orden offline con actualización concurrente",
    visual: "json-values",
    input: "order.offline.json",
    result: "revision 9 · JCS digest",
    failure: "test /revision 7 ✕",
    recovery: "reload → test 8 ✓",
    nodes: ["TOKENS", "DUPLICATES", "SCHEMA", "DECIMAL", "JSON PATCH", "JCS"],
    evidence: ["UTF-8", "atomic patch", "JSON sequence"],
  },
  "sql-server": {
    label: "Patio ferroviario de transacciones",
    visual: "transaction-rail",
    input: "request_id=CENTINELA-42",
    result: "COMMIT durable · réplica sincronizada",
    failure: "deadlock 1205 · A→B / B→A",
    recovery: "ROLLBACK → orden canónico → retry",
    nodes: ["PARSE", "OPTIMIZE", "B-TREE SEEK", "LOCKS", "WAL / LSN", "ALWAYS ON"],
    evidence: ["stock ≥ 0", "request_id único", "restore probado"],
    easterEgg: "WARD_AZUL reservado",
  },
  c: {
    label: "Parser seguro de telemetría binaria",
    visual: "memory-forensics",
    input: "A7 10 00 2C …",
    result: "Packet{temp=21.4} · CRC ✓",
    failure: "length + header overflow",
    recovery: "bounds gate → reject → fuzz seed",
    nodes: ["HEADER", "LENGTH", "ENDIAN", "BOUNDS", "PAYLOAD", "FREE"],
    evidence: ["0 bytes out-of-bounds", "ownership cerrado", "seed #421"],
    easterEgg: "Visión antes del acceso",
  },
  cpp: {
    label: "Simulador concurrente con ownership explícito",
    visual: "ownership-rail",
    input: "Scenario<128 agents>",
    result: "deterministic reduction",
    failure: "shared write race",
    recovery: "local buffers + jthread join",
    nodes: ["RAII KEY", "RANGES", "JTHREAD", "FUTURE", "REDUCE", "DTOR"],
    evidence: ["TSAN clean", "zero leaks", "same seed → same result"],
    easterEgg: "Punto Nexo",
  },
  "c-sharp": {
    label: "Agregador asíncrono de telemetría",
    visual: "channel-plant",
    input: "ReadOnlyMemory<byte>",
    result: "MetricBatch · buffer returned",
    failure: "cancelled with rented buffer",
    recovery: "finally + CompleteAsync",
    nodes: ["SPAN", "PATTERN", "CHANNEL", "LINQ", "CANCEL", "ARRAYPOOL"],
    evidence: ["bounded=32", "cancellation observed", "pool balanced"],
  },
  "objective-c": {
    label: "Módulo iOS legado con puente Swift",
    visual: "runtime-switchboard",
    input: "-[Panel refresh:]",
    result: "Swift protocol callback · dealloc ✓",
    failure: "retain cycle + duplicate observer",
    recovery: "weak edge + observer token",
    nodes: ["SELECTOR", "OBJC_MSGSEND", "IMP", "ARC", "BLOCK", "SWIFT BRIDGE"],
    evidence: ["one observer", "main queue", "dealloc visible"],
  },
  "c-star": {
    label: "Difusión térmica sobre Connection Machine",
    visual: "thermal-grid",
    input: "heat[64×64]",
    result: "max Δ < ε · converged",
    failure: "border mask leaks heat",
    recovery: "restore buffer + mask edges",
    nodes: ["SHAPE", "MASK", "NEWS", "STENCIL", "DOUBLE BUFFER", "REDUCE"],
    evidence: ["all PEs aligned", "edge fixed", "42 iterations"],
    easterEgg: "Visión completa del mapa",
  },
  cweb: {
    label: "Programa literario compilable y documentado",
    visual: "literate-book",
    input: "telemetry.w + change.ch",
    result: "binary + indexed PDF",
    failure: "change file misses section",
    recovery: "update named fragment",
    nodes: ["PROSE", "NAMED PARTS", "CTANGLE", "C COMPILER", "CWEAVE", "TEX/PDF"],
    evidence: ["same source", "cross-reference", "tangled test green"],
  },
  "embedded-c": {
    label: "Controlador de adquisición con DMA",
    visual: "embedded-scope",
    input: "timer → ADC",
    result: "sample batch · CPU sleep",
    failure: "ring buffer high-water",
    recovery: "decimate + safe mode",
    nodes: ["TIMER", "ADC", "DMA HALF", "ISR", "RING", "WATCHDOG"],
    evidence: ["ISR 3.2 μs", "margin 41%", "watchdog fed"],
    easterEgg: "Torre en modo seguro",
  },
  "visual-basic": {
    label: "WinForms mantenible con biblioteca C#",
    visual: "winforms-theatre",
    input: "GuardarButton.Click",
    result: "UI responsive · record saved",
    failure: "duplicate event subscription",
    recovery: "RemoveHandler + Dispose",
    nodes: ["FORM", "EVENT", "PRESENTER", "DOMAIN", "ASYNC REPO", "REFRESH"],
    evidence: ["single handler", "UI thread free", "shared assembly"],
  },
  "ux-ui": {
    label: "Flujo de reparación accesible y validado",
    visual: "ux-blueprint",
    input: "objetivo: solicitar reparación",
    result: "task success 92% · handoff",
    failure: "focus lost inside modal",
    recovery: "inert + trap + return focus",
    nodes: ["RESEARCH", "IA", "PROTOTYPE", "KEYBOARD", "TEST", "MEASURE"],
    evidence: ["WCAG path", "5/5 keyboard", "evidence linked"],
    easterEgg: "Ruta de regreso a base",
  },
  bootstrap: {
    label: "Consola responsive con tokens propios",
    visual: "responsive-desk",
    input: "$theme-colors + grid",
    result: "390 / 768 / 1200 intactos",
    failure: "table widens document",
    recovery: ".table-responsive local scroll",
    nodes: ["SASS TOKENS", "CONTAINER", "GRID", "UTILITIES", "COMPONENT", "A11Y"],
    evidence: ["no global overflow", "focus visible", "bundle audited"],
    easterEgg: "GG: viewport intacto",
  },
  angularjs: {
    label: "Módulo 1.x estabilizado para migrar",
    visual: "digest-clock",
    input: "$routeChangeSuccess",
    result: "watchers 742 → 118",
    failure: "$rootScope listener survives",
    recovery: "$destroy cleanup + boundary",
    nodes: ["ROUTE", "SCOPE", "WATCHERS", "$DIGEST", "DOM", "$DESTROY"],
    evidence: ["digest 8 ms", "zero ghost listeners", "strangler seam"],
    easterEgg: "Carril legado",
  },
  apis: {
    label: "Seguimiento multiparadigma de una orden",
    visual: "protocol-harbor",
    input: "POST /orders",
    result: "delivered · customer notified",
    failure: "duplicate webhook/event",
    recovery: "HMAC + idempotency ledger",
    nodes: ["REST", "GRAPHQL", "gRPC", "EVENT", "WEBSOCKET", "WEBHOOK"],
    evidence: ["one trace-id", "contract compatible", "dedupe hit"],
    easterEgg: "Nexo de protocolos",
  },
  nodejs: {
    label: "Ingesta de telemetría con backpressure",
    visual: "event-port",
    input: "gzip stream",
    result: "batch committed · graceful close",
    failure: "write() ignored drain",
    recovery: "pipeline waits + SIGTERM drain",
    nodes: ["STREAM", "GUNZIP", "PARSER", "BACKPRESSURE", "WORKERS", "SHUTDOWN"],
    evidence: ["heap stable", "event loop 7 ms", "zero lost batches"],
    easterEgg: "Faro de visión",
  },
  laravel: {
    label: "Orden transaccional con evento afterCommit",
    visual: "transaction-palace",
    input: "POST /orders",
    result: "201 + queued notification",
    failure: "job dispatched before commit",
    recovery: "afterCommit + idempotent job",
    nodes: ["VALIDATE", "POLICY", "TRANSACTION", "ELOQUENT", "EVENT", "QUEUE"],
    evidence: ["one truth", "policy allowed", "job attempt 1"],
  },
  n8n: {
    label: "Solicitud enriquecida, aprobada y enrutada",
    visual: "workflow-airport",
    input: "webhook execution #421",
    result: "routed · audit recorded",
    failure: "provider timeout / approval expiry",
    recovery: "retry → human lane → error workflow",
    nodes: ["WEBHOOK", "NORMALIZE", "ENRICH", "APPROVAL", "SWITCH", "ERROR FLOW"],
    evidence: ["credentials sealed", "execution id", "manual decision"],
    easterEgg: "Ruta segura",
  },
  dotnet: {
    label: "Servicio multiplataforma dentro del runtime",
    visual: "runtime-orbit",
    input: "solution graph",
    result: "linux-x64 artifact · healthy",
    failure: "LOH pressure raises p95",
    recovery: "ArrayPool + bounded buffers",
    nodes: ["MSBUILD", "IL", "CLR", "JIT", "TASKS", "GC"],
    evidence: ["GC pause −63%", "AOT checked", "host stopped"],
    easterEgg: "Retorno al pool",
  },
  deployment: {
    label: "Del digest aprobado al tráfico seguro",
    visual: "canary-rollout",
    input: "sha256:24b9… + attestation",
    result: "stable 100% · p95 recovered",
    failure: "canary p95 420 ms > 250 ms",
    recovery: "traffic rollback + connection drain",
    nodes: ["VERIFY", "CONFIG", "EXPAND DB", "CANDIDATE", "CANARY 5%", "ROLLBACK"],
    evidence: ["same digest", "schema compatible", "baseline restored"],
    easterEgg: "Regreso seguro a base",
  },
  git: {
    label: "Hotfix recuperado sin perder el experimento",
    visual: "history-strata",
    input: "dirty working tree",
    result: "tag v3.4.1 + stash restored",
    failure: "rebase conflict / hidden commit",
    recovery: "resolve + reflog breadcrumb",
    nodes: ["WORKTREE", "INDEX", "COMMIT", "REBASE", "REFLOG", "TAG/PUSH"],
    evidence: ["DAG intact", "hash recovered", "remote fast-forward"],
    easterEgg: "Eco temporal",
  },
  github: {
    label: "Contribución externa gobernada hasta release",
    visual: "governance-chamber",
    input: "issue #421 + fork",
    result: "squash merge · release published",
    failure: "secret scan closes gate",
    recovery: "revoke + purge + clean commit",
    nodes: ["ISSUE", "FORK", "DRAFT PR", "CHECKS", "REVIEW", "RULESET"],
    evidence: ["2 approvals", "CodeQL green", "signed artifact"],
    easterEgg: "GG: checks verdes",
  },
};

type BodyProps = {
  config: SceneConfig;
  shouldAnimate: boolean;
  transition: (times?: number[]) => { duration: number; repeat?: number; ease?: "linear"; times?: number[] };
};

function stageMotion(shouldAnimate: boolean, index: number) {
  if (!shouldAnimate) return { opacity: 1, scale: 1, y: 0 };
  const start = .06 + index * .11;
  return {
    opacity: [.8, .8, 1, 1, .86],
    scale: [.96, .96, 1.05, 1, .98],
    y: [2, 2, 0, 0, -1],
    transition: { duration: 18, repeat: Infinity, ease: "linear" as const, times: [0, start, Math.min(start + .05, .88), .9, 1] },
  };
}

function LinearMechanism({ config, shouldAnimate, transition }: BodyProps) {
  return (
    <div className="distinct-scene__linear">
      {config.nodes.map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}<small>{String(index + 1).padStart(2, "0")}</small></motion.span>)}
      <motion.i animate={shouldAnimate ? { left: ["2%", "2%", "98%", "98%", "2%"] } : { left: "98%" }} transition={transition([0, .05, .78, .94, 1])} />
    </div>
  );
}

function SceneBody(props: BodyProps) {
  const { config, shouldAnimate, transition } = props;
  switch (config.visual) {
    case "memory-forensics":
      return <div className="distinct-memory"><div className="distinct-memory__bytes">{config.input.split(" ").map((byte, index) => <motion.b key={`${byte}-${index}`} animate={stageMotion(shouldAnimate, index)}>{byte}</motion.b>)}</div><motion.i animate={shouldAnimate ? { x: [0, 0, 292, 292, 0] } : { x: 292 }} transition={transition([0, .08, .54, .92, 1])}>PTR</motion.i><div className="distinct-memory__gates">{config.nodes.slice(1, 5).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index + 1)}>{node}</motion.span>)}</div><code>SIZE_MAX - header ≥ payload</code></div>;
    case "ownership-rail":
      return <div className="distinct-rail"><motion.i className="distinct-rail__train" animate={shouldAnimate ? { offsetDistance: ["0%", "0%", "100%", "100%", "0%"], rotate: [0, 0, 360, 360, 0] } : { offsetDistance: "72%", rotate: 300 }} transition={transition([0, .06, .78, .94, 1])}>◆</motion.i>{config.nodes.map((node, index) => <motion.span key={node} style={{ transform: `rotate(${index * 60}deg) translateY(-104px) rotate(${-index * 60}deg)` }} animate={shouldAnimate ? { opacity: [.68, 1, .76], scale: [.96, 1.06, .98] } : { opacity: 1, scale: 1 }} transition={{ duration: 3.4, repeat: shouldAnimate ? Infinity : 0, delay: index * .42 }}>{node}</motion.span>)}<b>OWNERSHIP TURNTABLE</b></div>;
    case "channel-plant":
      return <div className="distinct-plant"><div className="distinct-plant__pipe"><motion.i animate={shouldAnimate ? { x: [0, 0, 310, 310, 0] } : { x: 310 }} transition={transition([0, .04, .8, .94, 1])} /></div>{config.nodes.map((node, index) => <motion.span key={node} className={index === 2 ? "distinct-plant__tank" : ""} animate={stageMotion(shouldAnimate, index)}>{node}{index === 2 ? <motion.em animate={shouldAnimate ? { height: ["24%", "82%", "38%", "24%"] } : { height: "38%" }} transition={{ duration: 6, repeat: shouldAnimate ? Infinity : 0 }} /> : null}</motion.span>)}</div>;
    case "runtime-switchboard":
      return <div className="distinct-switchboard"><div className="distinct-switchboard__phone">iOS EVENT<small>{config.input}</small></div><div className="distinct-switchboard__selectors">{config.nodes.slice(0, 3).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}</motion.span>)}</div><div className="distinct-switchboard__retain">{["VIEW", "BLOCK", "OWNER", "weak"].map((node, index) => <motion.b key={node} animate={shouldAnimate ? { opacity: [.62, 1, .76], rotate: [0, index % 2 ? 4 : -4, 0] } : { opacity: 1, rotate: 0 }} transition={{ duration: 4 + index, repeat: shouldAnimate ? Infinity : 0 }}>{node}</motion.b>)}</div><motion.code animate={shouldAnimate ? { opacity: [.35, .35, 1, 1, .7] } : { opacity: 1 }} transition={transition([0, .62, .7, .94, 1])}>Swift protocol → callback</motion.code></div>;
    case "thermal-grid":
      return <div className="distinct-thermal"><div>{Array.from({ length: 36 }, (_, index) => <motion.i key={index} animate={shouldAnimate ? { opacity: [.42 + (index % 5) * .08, 1, .58], scale: [.96, 1.04, .98] } : { opacity: .72 + (index % 4) * .07, scale: 1 }} transition={{ duration: 3.4 + (index % 7) * .28, repeat: shouldAnimate ? Infinity : 0, delay: index * .03 }} />)}</div><motion.span animate={shouldAnimate ? { x: [0, 0, 192, 192, 0], y: [0, 0, 94, 94, 0] } : { x: 192, y: 94 }} transition={transition([0, .08, .72, .9, 1])}>NEWS ROUTE</motion.span><b>max Δ → REDUCE</b></div>;
    case "literate-book":
      return <div className="distinct-book"><div className="distinct-book__page"><b>PROSA</b><span>invariante de lectura</span><span>«parse packet»</span><span>prueba y evidencia</span></div><motion.div className="distinct-book__spine" animate={shouldAnimate ? { scaleY: [.7, 1, .84], opacity: [.62, 1, .74] } : { scaleY: 1, opacity: 1 }} transition={{ duration: 4, repeat: shouldAnimate ? Infinity : 0 }}>§</motion.div><div className="distinct-book__page"><b>FRAGMENTOS</b><span>@&lt;parser seguro@&gt;</span><span>@&lt;validar CRC@&gt;</span><span>@&lt;cerrar recurso@&gt;</span></div><div className="distinct-book__outputs"><motion.code animate={stageMotion(shouldAnimate, 3)}>CTANGLE → .c → binary</motion.code><motion.code animate={stageMotion(shouldAnimate, 5)}>CWEAVE → TeX → PDF</motion.code></div></div>;
    case "embedded-scope":
      return <div className="distinct-scope"><motion.div className="distinct-scope__wave" animate={shouldAnimate ? { backgroundPositionX: ["0px", "180px"] } : { backgroundPositionX: "120px" }} transition={{ duration: 3.8, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }}><i /><i /><i /><i /><i /></motion.div><div className="distinct-scope__chip">MCU<small>sleep 61%</small></div><div className="distinct-scope__lanes">{config.nodes.map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}<i style={{ width: `${28 + index * 9}%` }} /></motion.span>)}</div></div>;
    case "winforms-theatre":
      return <div className="distinct-theatre"><div className="distinct-theatre__form"><header>RepairForm.vb</header><span className="distinct-theatre__field">Orden <b>#421</b></span><span className="distinct-theatre__button">Guardar</span></div><div className="distinct-theatre__curtain">TELÓN</div><div className="distinct-theatre__backstage">{config.nodes.slice(2).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index + 1)}>{node}</motion.span>)}</div><motion.i animate={shouldAnimate ? { x: [0, 0, 236, 236, 0], y: [0, 0, 46, 46, 0] } : { x: 236, y: 46 }} transition={transition([0, .06, .73, .92, 1])}>EVENT</motion.i></div>;
    case "ux-blueprint":
      return <div className="distinct-blueprint">{["PERSONA", "INTERFAZ", "SISTEMA", "EVIDENCIA"].map((lane, laneIndex) => <div key={lane}><b>{lane}</b>{config.nodes.slice(laneIndex, laneIndex + 3).map((node, index) => <motion.span key={`${lane}-${node}`} animate={stageMotion(shouldAnimate, laneIndex + index)}>{node}</motion.span>)}</div>)}<motion.i animate={shouldAnimate ? { left: ["8%", "8%", "91%", "91%", "8%"], top: ["18%", "18%", "66%", "66%", "18%"] } : { left: "91%", top: "66%" }} transition={transition([0, .05, .78, .93, 1])}>FOCUS</motion.i></div>;
    case "responsive-desk":
      return <div className="distinct-responsive">{[["390", 1], ["768", 2], ["1200", 4]].map(([width, columns], index) => <motion.div key={width} animate={shouldAnimate ? { scale: [.96, 1.02, .98], opacity: [.65, 1, .76] } : { scale: 1, opacity: 1 }} transition={{ duration: 4.5, repeat: shouldAnimate ? Infinity : 0, delay: index * 1.2 }}><header>{width}px</header><section style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}>{Array.from({ length: 4 }, (_, cell) => <i key={cell} />)}</section><footer>{index === 0 ? "local scroll ↔" : `${columns} cols`}</footer></motion.div>)}</div>;
    case "digest-clock":
      return <div className="distinct-digest"><div className="distinct-digest__clock"><motion.i animate={shouldAnimate ? { rotate: [0, 1440] } : { rotate: 280 }} transition={{ duration: 9, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }} /><b>$digest</b></div><div className="distinct-digest__watchers">{[742, 621, 388, 118].map((count, index) => <motion.span key={count} animate={stageMotion(shouldAnimate, index)}><b>{count}</b><small>watchers</small></motion.span>)}</div><code>$destroy → off() → boundary</code></div>;
    case "protocol-harbor":
      return <div className="distinct-harbor"><div className="distinct-harbor__hub">ORDER<small>trace 421</small></div>{config.nodes.map((node, index) => <motion.span key={node} style={{ transform: `rotate(${index * 60}deg) translateY(-112px) rotate(${-index * 60}deg)` }} animate={stageMotion(shouldAnimate, index)}>{node}</motion.span>)}<motion.i animate={shouldAnimate ? { rotate: [0, 0, 360, 360, 0], scale: [.8, 1, 1, .8, .8] } : { rotate: 320, scale: 1 }} transition={transition([0, .05, .76, .93, 1])}>◆</motion.i></div>;
    case "event-port":
      return <div className="distinct-port"><div className="distinct-port__water"><motion.i animate={shouldAnimate ? { x: [-18, 320, -18] } : { x: 272 }} transition={{ duration: 7.4, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }} /></div><div className="distinct-port__locks">{config.nodes.slice(0, 4).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}<i style={{ height: `${28 + index * 13}%` }} /></motion.span>)}</div><div className="distinct-port__workers"><b>WORKER 1</b><b>WORKER 2</b><code>SIGTERM → DRAIN</code></div></div>;
    case "transaction-palace":
      return <div className="distinct-palace"><div className="distinct-palace__gate">REQUEST</div><div className="distinct-palace__walk">{config.nodes.map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}</motion.span>)}</div><div className="distinct-palace__vault">COMMIT<small>afterCommit → queue</small></div><motion.i animate={shouldAnimate ? { left: ["3%", "3%", "88%", "88%", "3%"] } : { left: "88%" }} transition={transition([0, .05, .78, .93, 1])}>ORDER</motion.i></div>;
    case "workflow-airport":
      return <div className="distinct-airport"><div className="distinct-airport__belt">{config.nodes.map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}</motion.span>)}</div><motion.i animate={shouldAnimate ? { offsetDistance: ["0%", "0%", "100%", "100%", "0%"], rotate: [0, 0, 18, 18, 0] } : { offsetDistance: "84%", rotate: 12 }} transition={transition([0, .04, .8, .94, 1])}>▣ #421</motion.i><div className="distinct-airport__tower">HUMAN<br />APPROVAL</div><code>ERROR WORKFLOW ↗ black box</code></div>;
    case "runtime-orbit":
      return <div className="distinct-orbit"><div className="distinct-orbit__core">CLR<small>Generic Host</small></div>{config.nodes.slice(0, 5).map((node, index) => <motion.span key={node} className={`distinct-orbit__ring distinct-orbit__ring--${index}`} animate={shouldAnimate ? { rotate: [index * 31, 360 + index * 31] } : { rotate: 40 + index * 47 }} transition={{ duration: 8 + index * 2.3, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }}><b>{node}</b></motion.span>)}<div className="distinct-orbit__gc">GEN0 → GEN1 → GEN2<small>ArrayPool return ✓</small></div></div>;
    case "canary-rollout":
      return <div className="distinct-rollout"><div className="distinct-rollout__artifact"><b>APPROVED</b><code>sha256:24b9…</code><small>signature + SBOM</small></div><div className="distinct-rollout__schema"><b>EXPAND</b><code>priority NULL</code><small>old + new compatible</small></div><div className="distinct-rollout__lanes"><span>STABLE <b>100 → 95 → 100%</b></span><span>CANDIDATE <b>0 → 5 → 0%</b></span></div><div className="distinct-rollout__gates">{config.nodes.slice(1, 5).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}</motion.span>)}</div><motion.i animate={shouldAnimate ? { left: ["8%", "8%", "78%", "78%", "8%"], backgroundColor: ["#55d6ff", "#55d6ff", "#ff7f85", "#49e1a8", "#55d6ff"] } : { left: "8%", backgroundColor: "#49e1a8" }} transition={transition([0, .08, .58, .8, 1])}>TRAFFIC</motion.i><code className="distinct-rollout__signal">p95 420 ms ✕ → drain → baseline 184 ms ✓</code></div>;
    case "history-strata":
      return <div className="distinct-strata"><div className="distinct-strata__layers"><span>WORKTREE <b>M</b></span><span>INDEX <b>hunk 2/3</b></span><span>HEAD <b>hotfix</b></span></div><div className="distinct-strata__dag">{["a1", "b7", "c4", "e9", "f2"].map((hash, index) => <motion.i key={hash} animate={stageMotion(shouldAnimate, index)}>{hash}</motion.i>)}</div><motion.code animate={shouldAnimate ? { opacity: [.4, .4, 1, 1, .72] } : { opacity: 1 }} transition={transition([0, .55, .62, .95, 1])}>reflog: HEAD@{"{2}"} → c4 ✓</motion.code></div>;
    case "governance-chamber":
      return <div className="distinct-governance"><div className="distinct-governance__docket">ISSUE #421<small>external contribution</small></div><div className="distinct-governance__arches">{config.nodes.slice(1).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}{index > 1 ? <i>✓</i> : null}</motion.span>)}</div><div className="distinct-governance__release">RELEASE<small>signed · notes · assets</small></div><motion.i animate={shouldAnimate ? { x: [0, 0, 318, 318, 0] } : { x: 318 }} transition={transition([0, .04, .8, .94, 1])}>PR</motion.i></div>;
    case "python-runtime":
      return <div className="distinct-python"><div className="distinct-python__code"><b>telemetry.py</b><code>async with TaskGroup()</code><code>match measurement:</code><code>await publish(report)</code></div><div className="distinct-python__compiler">AST<motion.i animate={shouldAnimate ? { rotate: [0, 360] } : { rotate: 280 }} transition={{ duration: 5, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }}>⌘</motion.i>BYTECODE</div><div className="distinct-python__runtime">{config.nodes.slice(3).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index + 2)}>{node}</motion.span>)}</div><motion.code animate={shouldAnimate ? { opacity: [.35, .35, 1, 1, .74] } : { opacity: 1 }} transition={transition([0, .72, .8, .96, 1])}>checksum fail → quarantine → resume(offset)</motion.code></div>;
    case "xml-document":
      return <div className="distinct-xml"><div className="distinct-xml__source"><code>&lt;m:manual xml:lang=&quot;es-MX&quot;&gt;</code><code>  &lt;xi:include href=&quot;part.xml&quot;/&gt;</code><code>&lt;/m:manual&gt;</code></div><div className="distinct-xml__tree">{config.nodes.slice(1, 4).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)} style={{ marginLeft: `${index * 24}px` }}>└ {node}</motion.span>)}</div><div className="distinct-xml__loom"><b>XSLT</b><i>→</i><b>HTML</b><i>→</i><b>SIGN</b></div><motion.code animate={shouldAnimate ? { opacity: [.3, 1, .3], borderColor: ["#ff6f86", "#49e1a8", "#ff6f86"] } : { opacity: 1, borderColor: "#49e1a8" }} transition={{ duration: 8, repeat: shouldAnimate ? Infinity : 0 }}>catalog://manual/v3 ✓</motion.code></div>;
    case "xsd-gates":
      return <div className="distinct-xsd"><div className="distinct-xsd__schema">xs:schema<small>targetNamespace v3</small></div><div className="distinct-xsd__gates">{config.nodes.slice(1).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)} className={index === 3 ? "distinct-xsd__gate--fault" : ""}>{node}<i>{index === 3 ? "M-17 → M-18" : "✓"}</i></motion.span>)}</div><motion.i animate={shouldAnimate ? { x: [0, 0, 326, 326, 0] } : { x: 326 }} transition={transition([0, .05, .8, .94, 1])}>INSTANCE</motion.i><code>PSVI · validity=true · type=CertificateType</code></div>;
    case "json-values":
      return <div className="distinct-json"><div className="distinct-json__object"><span>{"{"}</span><code>&quot;orderId&quot;: &quot;DV-421&quot;,</code><code>&quot;total&quot;: &quot;9007199254740993.00&quot;,</code><code>&quot;revision&quot;: 8</code><span>{"}"}</span></div><div className="distinct-json__ops">{config.nodes.slice(1).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}</motion.span>)}</div><motion.code animate={shouldAnimate ? { opacity: [.3, .3, 1, 1, .72] } : { opacity: 1 }} transition={transition([0, .65, .74, .96, 1])}>test /revision 8 ✓ → JCS sha256:8f31…</motion.code></div>;
    case "proof-constellation":
      return <div className="distinct-proof"><div className="distinct-proof__query">?- best_plan(i17, Plan)<small>objetivo</small></div><svg aria-hidden="true" viewBox="0 0 720 230"><path d="M80 112 L220 48 L354 112 L495 48 L640 112" /><path d="M220 48 L220 182 L354 112 L495 182 L640 112" /><motion.circle r="7" animate={shouldAnimate ? { cx: [80, 80, 220, 354, 495, 495, 354, 495, 640, 640, 80], cy: [112, 112, 48, 112, 48, 182, 112, 182, 112, 112, 112], opacity: [.7, 1, 1, 1, 1, .35, .5, 1, 1, .7, .7] } : { cx: 640, cy: 112, opacity: 1 }} transition={transition([0, .05, .19, .34, .46, .55, .63, .72, .84, .94, 1])} /></svg><div className="distinct-proof__stars">{config.nodes.slice(1).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)} className={index === 3 ? "distinct-proof__star--fault" : ""}>{node}<small>{index === 2 ? "X = 4" : index === 3 ? "dominio ∅" : "✓"}</small></motion.span>)}</div><motion.code className="distinct-proof__trail" animate={shouldAnimate ? { opacity: [.35, .35, 1, .45, 1, .72] } : { opacity: 1 }} transition={transition([0, .43, .5, .62, .72, 1])}>TRAIL ↶ deshace X=4 · activa alternativa · proof([r2,r7,r9])</motion.code></div>;
    case "transaction-rail":
      return <div className="distinct-sqlrail"><div className="distinct-sqlrail__planner">{config.nodes.slice(0, 3).map((node, index) => <motion.span key={node} animate={stageMotion(shouldAnimate, index)}>{node}</motion.span>)}<motion.i animate={shouldAnimate ? { left: ["3%", "3%", "91%", "91%", "3%"] } : { left: "91%" }} transition={transition([0, .05, .31, .92, 1])}>Q</motion.i></div><div className="distinct-sqlrail__locks"><span>SKU A <b>T1</b><i /></span><span>SKU B <b>T2</b><i /></span><motion.em animate={shouldAnimate ? { rotate: [0, 0, 360, 360, 0], opacity: [.25, .25, 1, 1, .25] } : { rotate: 320, opacity: 1 }} transition={transition([0, .34, .48, .62, 1])}>1205</motion.em></div><div className="distinct-sqlrail__log"><b>WAL / LSN</b>{[421, 422, 423, 424].map((lsn, index) => <motion.code key={lsn} animate={stageMotion(shouldAnimate, index + 2)}>LSN {lsn}</motion.code>)}<motion.i animate={shouldAnimate ? { left: ["2%", "2%", "88%", "88%", "2%"], opacity: [.4, 1, 1, .65, .4] } : { left: "88%", opacity: 1 }} transition={transition([0, .08, .78, .94, 1])} /></div><motion.div className="distinct-sqlrail__replica" animate={shouldAnimate ? { boxShadow: ["0 0 0 rgba(73,225,168,0)", "0 0 24px rgba(73,225,168,.55)", "0 0 0 rgba(73,225,168,0)"] } : { boxShadow: "0 0 18px rgba(73,225,168,.45)" }} transition={{ duration: 3.8, repeat: shouldAnimate ? Infinity : 0 }}>PRIMARY → SECONDARY<small>hardened_lsn ✓</small></motion.div></div>;
    default:
      return <LinearMechanism {...props} />;
  }
}

export function DistinctActionScene({ id }: { id: DistinctActionSceneId }) {
  const sceneRef = useRef<HTMLElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const config = configs[id];
  const transition = (times?: number[]) => shouldAnimate
    ? { duration: 18, repeat: Infinity, ease: "linear" as const, ...(times ? { times } : {}) }
    : { duration: 0 };

  return (
    <figure
      className="distinct-scene"
      data-visual={config.visual}
      data-playback={playback}
      ref={sceneRef}
      role="img"
      aria-label={`${config.label}. Entra ${config.input}; ocurre ${config.failure}; el sistema se recupera mediante ${config.recovery}; termina en ${config.result} y reinicia el ciclo.`}
    >
      <figcaption className="distinct-scene__legend"><span><i /> {config.input}</span><span><i /> {config.failure}</span><span><i /> {config.result}</span></figcaption>
      <Fragment key={playback}>
        <div className="distinct-scene__canvas">
          <header><span>{id.toUpperCase()}</span><div><strong>{config.label}</strong><small>{config.easterEgg ?? "caso integrado · loop verificable"}</small></div></header>
          <SceneBody config={config} shouldAnimate={shouldAnimate} transition={transition} />
          <div className="distinct-scene__incident"><motion.span animate={shouldAnimate ? { opacity: [.52, .52, 1, 1, .52], y: [3, 3, 0, 0, 3] } : { opacity: 1, y: 0 }} transition={transition([0, .42, .48, .59, 1])}><b>FALLO</b>{config.failure}</motion.span><motion.span animate={shouldAnimate ? { opacity: [.5, .5, .5, 1, 1, .72], y: [3, 3, 3, 0, 0, 0] } : { opacity: 1, y: 0 }} transition={transition([0, .55, .62, .68, .94, 1])}><b>RECUPERACIÓN</b>{config.recovery}</motion.span></div>
          <motion.div className="distinct-scene__result" animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .86], scale: [.98, .98, 1.03, 1, .99] } : { opacity: 1, scale: 1 }} transition={transition([0, .78, .84, .95, 1])}><span>RESULTADO</span><strong>{config.result}</strong></motion.div>
        </div>
        <footer className="distinct-scene__evidence">{config.evidence.map((item) => <span key={item}><b>✓</b>{item}</span>)}<motion.span animate={shouldAnimate ? { opacity: [.78, 1, .84] } : { opacity: 1 }} transition={{ duration: 3.2, repeat: shouldAnimate ? Infinity : 0 }}><b>↻</b> siguiente ciclo</motion.span></footer>
      </Fragment>
    </figure>
  );
}
