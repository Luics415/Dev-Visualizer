"use client";

import { Fragment, useRef, type CSSProperties } from "react";
import { motion } from "motion/react";
import { useScenePlayback } from "@/components/visual/useScenePlayback";
import { isNewLearningActionSceneId, type NewLearningActionSceneId } from "@/data/newLearningActionScenes";
import styles from "./NewLearningActionScene.module.css";

type Motif =
  | "trail"
  | "graph"
  | "field"
  | "stage"
  | "pipeline"
  | "forge"
  | "channels"
  | "runtime"
  | "ledger"
  | "manuscript";

type SceneConfig = {
  label: string;
  motif: Motif;
  glyph: string;
  accent: string;
  accentAlt: string;
  input: string;
  result: string;
  failure: string;
  recovery: string;
  nodes: readonly [string, string, string, string, string, string];
  code: readonly [string, string];
  evidence: readonly [string, string, string];
  metric: string;
  easterEgg?: string;
};

const configs: Record<NewLearningActionSceneId, SceneConfig> = {
  "programming-fundamentals": {
    label: "Del problema ambiguo a una solución comprobable",
    motif: "trail",
    glyph: "01",
    accent: "#49d7ff",
    accentAlt: "#a66cff",
    input: "necesidad: calcular tarifa",
    result: "programa correcto · pruebas verdes",
    failure: "el límite exacto cobra dos veces",
    recovery: "traza manual → condición <= → prueba",
    nodes: ["PROBLEMA", "DATOS", "ALGORITMO", "CÓDIGO", "PRUEBA", "ENTREGA"],
    code: ["si minutos <= 30: base", "assert tarifa(30) == base"],
    evidence: ["casos límite", "salida explicable", "requisito cubierto"],
    metric: "6 pasos · 1 ciclo",
    easterEgg: "Primero entiende; después invoca",
  },
  algorithms: {
    label: "Ruta óptima dentro de una ciudad cambiante",
    motif: "graph",
    glyph: "A*",
    accent: "#61e6a8",
    accentAlt: "#ffcf5a",
    input: "origen A · destino F",
    result: "ruta A→C→E→F · costo 17",
    failure: "arista C→D bloqueada",
    recovery: "recalcular frontera + heurística admisible",
    nodes: ["ENTRADA", "GRAFO", "FRONTERA", "VISITADOS", "RUTA", "COSTO"],
    code: ["pop mínimo f(n)=g(n)+h(n)", "reconstruir(parent, destino)"],
    evidence: ["óptimo verificado", "sin ciclos", "12 nodos explorados"],
    metric: "O(E log V)",
  },
  mathematics: {
    label: "Descenso controlado hacia el mínimo",
    motif: "field",
    glyph: "∇",
    accent: "#c779ff",
    accentAlt: "#56ddff",
    input: "f(x,y) + punto inicial",
    result: "mínimo estable · error < ε",
    failure: "learning rate salta el valle",
    recovery: "normalizar → reducir α → continuar",
    nodes: ["FUNCIÓN", "DOMINIO", "GRADIENTE", "PASO", "ERROR", "CONVERGE"],
    code: ["θₙ₊₁ = θₙ − α∇f(θₙ)", "detener si |Δf| < 10⁻⁶"],
    evidence: ["derivada revisada", "error monótono", "42 iteraciones"],
    metric: "ε = 0.000001",
  },
  methodologies: {
    label: "Una necesidad convertida en evidencia entregable",
    motif: "trail",
    glyph: "↻",
    accent: "#ffb454",
    accentAlt: "#ff6cae",
    input: "historia: pago recuperable",
    result: "incremento aceptado · aprendizaje registrado",
    failure: "criterio ambiguo llega a revisión",
    recovery: "refinar ejemplo → dividir → replanificar",
    nodes: ["DESCUBRIR", "REFINAR", "PLANEAR", "CONSTRUIR", "VALIDAR", "APRENDER"],
    code: ["Dado un pago pendiente", "Entonces reintenta sin duplicar"],
    evidence: ["DoD cumplida", "demo verificable", "retro accionable"],
    metric: "lead time 2.4 d",
  },
  scratch: {
    label: "Rescate cooperativo guiado por eventos",
    motif: "stage",
    glyph: "🐱",
    accent: "#ff9f43",
    accentAlt: "#7c8dff",
    input: "bandera verde",
    result: "portal abierto · nivel completo",
    failure: "dos sprites consumen la misma llave",
    recovery: "mensaje LLAVE_TOMADA + estado compartido",
    nodes: ["EVENTO", "SPRITE", "MOVIMIENTO", "COLISIÓN", "MENSAJE", "ESCENA"],
    code: ["al recibir [LLAVE_TOMADA]", "fijar [puerta] a [abierta]"],
    evidence: ["score consistente", "sin clon fantasma", "60 ciclos/s"],
    metric: "3 sprites · 1 mundo",
    easterEgg: "El poro vigila el portal",
  },
  ruby: {
    label: "Registros ruidosos convertidos en señales",
    motif: "pipeline",
    glyph: "◆",
    accent: "#ff5575",
    accentAlt: "#ffb34f",
    input: "access.log · 84 MB",
    result: "incident_report.json",
    failure: "línea truncada rompe el parser",
    recovery: "pattern match → quarantine → resume",
    nodes: ["ENUMERATOR", "REGEX", "STRUCT", "GROUP_BY", "RANK", "REPORT"],
    code: ["lines.lazy.filter_map { |line| parse(line) }", "events.group_by(&:service)"],
    evidence: ["memoria estable", "17 anomalías", "entrada preservada"],
    metric: "128k líneas/s",
  },
  rust: {
    label: "Ingesta concurrente sin carreras ni fugas",
    motif: "forge",
    glyph: "R",
    accent: "#ff8b55",
    accentAlt: "#5ee7c5",
    input: "frames de telemetría",
    result: "batches durables · shutdown limpio",
    failure: "writer conserva préstamo durante await",
    recovery: "acotar borrow → canal bounded → retry",
    nodes: ["OWNERSHIP", "BORROW", "CHANNEL", "TASK", "RESULT", "DROP"],
    code: ["let frame = decode(bytes)?;", "tx.send(frame).await?;"],
    evidence: ["Miri limpio", "0 data races", "Drop ejecutado"],
    metric: "p99 11 ms",
    easterEgg: "Forjado en el Freljord",
  },
  php: {
    label: "Petición web segura de extremo a extremo",
    motif: "pipeline",
    glyph: "PHP",
    accent: "#8f9cff",
    accentAlt: "#d784ff",
    input: "POST /reservations",
    result: "201 · reserva confirmada",
    failure: "token CSRF vencido",
    recovery: "rotar sesión → formulario nuevo → reintento",
    nodes: ["FRONT", "ROUTER", "MIDDLEWARE", "SERVICE", "DATABASE", "RESPONSE"],
    code: ["$request->validate($rules);", "$db->transaction($reserve);"],
    evidence: ["escape correcto", "commit único", "sesión rotada"],
    metric: "TTFB 73 ms",
  },
  haskell: {
    label: "Configuración inválida rechazada por construcción",
    motif: "runtime",
    glyph: "λ",
    accent: "#b985ff",
    accentAlt: "#62dfff",
    input: "config.toml",
    result: "ValidatedConfig · servicio iniciado",
    failure: "puerto fuera de rango + clave ausente",
    recovery: "Either acumula errores → corregir → pure",
    nodes: ["PARSE", "ADT", "VALIDATE", "EFFECT", "RESOURCE", "RESULT"],
    code: ["decode >=> validate >=> boot", "bracket acquire release use"],
    evidence: ["total functions", "recursos cerrados", "tipos preservados"],
    metric: "2 errores · 1 reporte",
  },
  go: {
    label: "Crawler concurrente con presión controlada",
    motif: "channels",
    glyph: "GO",
    accent: "#4fe4ed",
    accentAlt: "#62ee9a",
    input: "seed URLs",
    result: "índice completo · workers cerrados",
    failure: "servidor lento bloquea una rama",
    recovery: "context deadline + select + retry budget",
    nodes: ["SEEDS", "CHANNEL", "WORKERS", "CONTEXT", "DEDUPE", "INDEX"],
    code: ["select { case job := <-jobs:", "case <-ctx.Done(): return }"],
    evidence: ["sin goroutine leak", "robots respetado", "cola acotada"],
    metric: "24 workers",
  },
  kotlin: {
    label: "Sincronización offline estructurada",
    motif: "channels",
    glyph: "K",
    accent: "#a86bff",
    accentAlt: "#ff6f91",
    input: "12 cambios locales",
    result: "estado reconciliado · UI actualizada",
    failure: "scope de pantalla se cancela",
    recovery: "WorkManager + supervisorScope",
    nodes: ["FLOW", "CACHE", "DIFF", "COROUTINE", "REMOTE", "STATE"],
    code: ["changes.buffer().retry(3)", "state.emit(repository.snapshot())"],
    evidence: ["main thread libre", "conflicto resuelto", "retry persistente"],
    metric: "12 → 0 pendientes",
  },
  java: {
    label: "Orden transaccional observada dentro de la JVM",
    motif: "runtime",
    glyph: "JVM",
    accent: "#ffb35e",
    accentAlt: "#57b9ff",
    input: "OrderCommand",
    result: "evento persistido · heap estable",
    failure: "pool de conexiones agotado",
    recovery: "timeout → rollback → bulkhead",
    nodes: ["BYTECODE", "CLASSLOAD", "JIT", "THREADS", "HEAP", "GC"],
    code: ["try (var tx = begin()) {", "  repository.save(order); }"],
    evidence: ["commit atómico", "JFR sin fuga", "p95 recuperado"],
    metric: "GC pause 8 ms",
  },
  r: {
    label: "Análisis reproducible de una campaña",
    motif: "field",
    glyph: "R",
    accent: "#5ca7ff",
    accentAlt: "#62dfb4",
    input: "observations.csv",
    result: "modelo validado · informe HTML",
    failure: "NA sesga el promedio",
    recovery: "perfil → imputación declarada → sensibilidad",
    nodes: ["IMPORT", "TIDY", "EXPLORE", "MODEL", "VALIDATE", "REPORT"],
    code: ["model <- lm(y ~ x, data = clean)", "broom::glance(model)"],
    evidence: ["seed fijada", "renv.lock", "intervalo reportado"],
    metric: "R² ajustado .81",
  },
  assembly: {
    label: "Rutina crítica trazada registro por registro",
    motif: "forge",
    glyph: "ASM",
    accent: "#75f0b1",
    accentAlt: "#ffd05a",
    input: "buffer + longitud",
    result: "checksum SIMD · ABI intacta",
    failure: "R12 no restaurado al retornar",
    recovery: "prologue/epilogue + prueba de ABI",
    nodes: ["FETCH", "DECODE", "REGISTERS", "ALU", "STACK", "RETURN"],
    code: ["push r12    ; callee-saved", "pop r12     ; restore"],
    evidence: ["stack alineada", "flags revisadas", "2.7× speedup"],
    metric: "4 ciclos/bloque",
  },
  erlang: {
    label: "Servicio que falla y vuelve sin contaminar al resto",
    motif: "channels",
    glyph: "OTP",
    accent: "#ff6f8f",
    accentAlt: "#63e6c2",
    input: "{charge, Order}",
    result: "actor reiniciado · mensaje recuperado",
    failure: "worker exit: provider_timeout",
    recovery: "supervisor one_for_one + replay",
    nodes: ["MAILBOX", "RECEIVE", "PROCESS", "LINK", "SUPERVISOR", "RESTART"],
    code: ["handle_call(Request, From, State)", "{restart, ChildSpec}"],
    evidence: ["árbol estable", "estado aislado", "SLA conservado"],
    metric: "restart 34 ms",
  },
  lisp: {
    label: "Regla de negocio extendida mediante macros",
    motif: "graph",
    glyph: "()",
    accent: "#d78aff",
    accentAlt: "#63e7ef",
    input: "(when-valid order …)",
    result: "forma expandida · evaluación correcta",
    failure: "captura accidental de símbolo",
    recovery: "gensym + macroexpand → reevaluar",
    nodes: ["READ", "LIST", "MACRO", "EXPAND", "EVAL", "PRINT"],
    code: ["(let ((tmp (gensym)))", "  `(let ((,tmp ,value)) ...))"],
    evidence: ["higiene visible", "AST inspeccionado", "REPL verde"],
    metric: "3 formas → 1 valor",
  },
  perl: {
    label: "Flujo de texto reparado sin cargarlo completo",
    motif: "pipeline",
    glyph: "PL",
    accent: "#67a9ff",
    accentAlt: "#ff82c8",
    input: "legacy-feed.txt",
    result: "feed normalizado · resumen",
    failure: "backtracking catastrófico",
    recovery: "regex atómica + límite de longitud",
    nodes: ["HANDLE", "DECODE", "REGEX", "CAPTURE", "TRANSFORM", "WRITE"],
    code: ["while (my $line = <$fh>) {", "  emit(normalize($line)); }"],
    evidence: ["UTF-8 estricto", "stream constante", "casos hostiles"],
    metric: "310 MB · 18 MB RAM",
  },
  raku: {
    label: "Mini lenguaje interpretado por una gramática",
    motif: "manuscript",
    glyph: "RAKU",
    accent: "#7de7bf",
    accentAlt: "#c785ff",
    input: "rule: priority > 7",
    result: "AST tipado · regla ejecutada",
    failure: "token ambiguo en columna 14",
    recovery: "proto token + mensaje contextual",
    nodes: ["GRAMMAR", "TOKEN", "MATCH", "ACTIONS", "AST", "EVALUATE"],
    code: ["grammar Rule { token TOP { ... } }", "class Actions { method TOP($/) { ... } }"],
    evidence: ["posición exacta", "árbol visible", "round-trip verde"],
    metric: "14 reglas",
  },
  scala: {
    label: "Eventos transformados con tipos y efectos",
    motif: "runtime",
    glyph: "SC",
    accent: "#ff5f6f",
    accentAlt: "#6bdcff",
    input: "Stream[Event]",
    result: "proyección consistente · offset guardado",
    failure: "partición reiniciada a mitad de lote",
    recovery: "Resource + checkpoint transaccional",
    nodes: ["ADT", "PATTERN", "STREAM", "EFFECT", "CHECKPOINT", "SINK"],
    code: ["events.evalMap(process)", "  .through(commitAfterBatch)"],
    evidence: ["exhaustive match", "efecto acotado", "offset exacto"],
    metric: "48k eventos/s",
  },
  blockchain: {
    label: "Transferencia seguida hasta su finalidad",
    motif: "ledger",
    glyph: "⛓",
    accent: "#e6b95f",
    accentAlt: "#72dfff",
    input: "transacción firmada",
    result: "bloque final · estado verificable",
    failure: "nonce reutilizado / bloque huérfano",
    recovery: "reemplazar transacción → esperar finalidad",
    nodes: ["SIGN", "MEMPOOL", "VALIDATE", "PROPOSE", "CONSENSUS", "FINALITY"],
    code: ["verify(signature, payload)", "stateRoot(n) == recompute(block)"],
    evidence: ["firma válida", "12 confirmaciones", "raíz coincide"],
    metric: "finalidad 72 s",
    easterEgg: "Cadena de custodia hextech",
  },
  android: {
    label: "Carga offline que sobrevive al ciclo de vida",
    motif: "stage",
    glyph: "AND",
    accent: "#75d77d",
    accentAlt: "#55c8ff",
    input: "foto capturada sin red",
    result: "subida confirmada · UI consistente",
    failure: "proceso termina en segundo plano",
    recovery: "Room + WorkManager + saved state",
    nodes: ["ACTIVITY", "STATE", "ROOM", "WORK", "NETWORK", "COMPOSE"],
    code: ["workManager.enqueueUniqueWork(...)", "uiState.collectAsStateWithLifecycle()"],
    evidence: ["rotación segura", "permiso mínimo", "retry durable"],
    metric: "1 tarea · 0 pérdidas",
  },
  qwik: {
    label: "Interfaz reanudada justo donde se interactúa",
    motif: "stage",
    glyph: "Q",
    accent: "#19e6d5",
    accentAlt: "#a86cff",
    input: "HTML serializado",
    result: "contador interactivo · chunk mínimo",
    failure: "listener referencia estado no serializable",
    recovery: "QRL boundary + estado serializable",
    nodes: ["SSR", "SERIALIZE", "HTML", "EVENT", "QRL", "RESUME"],
    code: ["const count = useSignal(0)", "onClick$={() => count.value++}"],
    evidence: ["sin hidratación global", "chunk 3.1 kB", "evento recuperado"],
    metric: "resume 18 ms",
  },
  angular: {
    label: "Panel reactivo construido desde dependencias explícitas",
    motif: "graph",
    glyph: "A",
    accent: "#ff426d",
    accentAlt: "#a96cff",
    input: "route /orders/421",
    result: "vista estable · estado derivado",
    failure: "effect escribe sobre su propia señal",
    recovery: "computed puro + frontera de servicio",
    nodes: ["ROUTER", "INJECTOR", "SERVICE", "SIGNAL", "TEMPLATE", "RENDER"],
    code: ["order = resource(() => this.id())", "total = computed(() => sum(this.order()))"],
    evidence: ["DI acotada", "cambio predecible", "a11y verde"],
    metric: "2 renders",
  },
  django: {
    label: "Reserva íntegra desde formulario hasta tarea",
    motif: "trail",
    glyph: "DJ",
    accent: "#4ad39b",
    accentAlt: "#69bfff",
    input: "POST /bookings",
    result: "reserva creada · correo encolado",
    failure: "dos clientes toman el último cupo",
    recovery: "atomic + select_for_update + retry",
    nodes: ["FORM", "VIEW", "SERVICE", "ORM", "COMMIT", "TASK"],
    code: ["with transaction.atomic():", "  slot = Slot.objects.select_for_update().get(...)"],
    evidence: ["CSRF activo", "cupo no negativo", "on_commit usado"],
    metric: "201 · job #421",
  },
  sql: {
    label: "Consulta trazada desde el texto hasta el commit",
    motif: "ledger",
    glyph: "SQL",
    accent: "#63cfff",
    accentAlt: "#f3c85f",
    input: "SELECT + UPDATE atómico",
    result: "plan eficiente · saldo consistente",
    failure: "scan completo + actualización perdida",
    recovery: "índice compuesto + aislamiento + retry",
    nodes: ["PARSE", "BIND", "OPTIMIZE", "EXECUTE", "LOCK", "COMMIT"],
    code: ["UPDATE account SET balance = balance - 20", "WHERE id = 7 AND balance >= 20;"],
    evidence: ["index seek", "1 fila afectada", "ACID conservado"],
    metric: "cost 84 → 3",
  },
  nosql: {
    label: "Timeline distribuido reconstruido bajo partición",
    motif: "ledger",
    glyph: "NQ",
    accent: "#64e3a2",
    accentAlt: "#b979ff",
    input: "evento post.created",
    result: "feed convergente · lectura disponible",
    failure: "réplica oeste queda aislada",
    recovery: "quorum + vector clock + repair",
    nodes: ["KEY", "PARTITION", "REPLICA", "QUORUM", "MERGE", "REPAIR"],
    code: ["partition = hash(user_id)", "merge(events, vector_clock)"],
    evidence: ["R+W>N", "conflicto visible", "réplicas convergen"],
    metric: "3 réplicas · W=2",
  },
  "operating-systems": {
    label: "Proceso interactivo atendido por todo el sistema",
    motif: "forge",
    glyph: "OS",
    accent: "#58d9ff",
    accentAlt: "#ff718e",
    input: "read(fd, buffer, 4096)",
    result: "datos entregados · CPU reasignada",
    failure: "page fault mientras espera E/S",
    recovery: "scheduler cambia tarea → DMA → wakeup",
    nodes: ["SYSCALL", "SCHEDULER", "VM", "DRIVER", "INTERRUPT", "WAKE"],
    code: ["user → trap → kernel", "blocked → ready → running"],
    evidence: ["contexto salvado", "página cargada", "fd liberado"],
    metric: "switch 2.1 μs",
  },
  "artificial-intelligence": {
    label: "Modelo llevado de datos crudos a inferencia vigilada",
    motif: "field",
    glyph: "AI",
    accent: "#ff70c7",
    accentAlt: "#69dbff",
    input: "dataset etiquetado v7",
    result: "modelo desplegado · drift observado",
    failure: "recall cae para un subgrupo",
    recovery: "auditar slices → rebalancear → recalibrar",
    nodes: ["DATA", "FEATURES", "TRAIN", "EVALUATE", "SERVE", "MONITOR"],
    code: ["fit(train, validation_split=.2)", "alert_if(drift > threshold)"],
    evidence: ["lineage completa", "slices reportados", "rollback listo"],
    metric: "recall .91 · Δ .02",
  },
  latex: {
    label: "Documento técnico compuesto con referencias estables",
    motif: "manuscript",
    glyph: "TeX",
    accent: "#70d8c8",
    accentAlt: "#ffb659",
    input: "report.tex + bibliography.bib",
    result: "PDF accesible · referencias resueltas",
    failure: "cita indefinida y figura flotante",
    recovery: "biber → segunda pasada → límites de float",
    nodes: ["SOURCE", "MACROS", "ENGINE", "AUX", "BIBER", "PDF"],
    code: ["\\autoref{fig:architecture}", "\\printbibliography"],
    evidence: ["0 undefined refs", "fuentes embebidas", "build reproducible"],
    metric: "3 pasadas",
  },
  subversion: {
    label: "Cambio centralizado integrado sin pisar historia",
    motif: "manuscript",
    glyph: "SVN",
    accent: "#6da8df",
    accentAlt: "#9ee6ff",
    input: "working copy r184",
    result: "commit r186 · copia limpia",
    failure: "tree conflict tras mover config/",
    recovery: "update → inspect → resolve → commit",
    nodes: ["CHECKOUT", "EDIT", "UPDATE", "CONFLICT", "RESOLVE", "COMMIT"],
    code: ["svn status --show-updates", "svn resolve --accept working config"],
    evidence: ["base intacta", "log auditable", "working copy limpia"],
    metric: "r184 → r186",
  },
};

type BodyProps = {
  config: SceneConfig;
  shouldAnimate: boolean;
};

function pulse(shouldAnimate: boolean, index: number) {
  if (!shouldAnimate) return { opacity: 1, scale: 1, y: 0 };
  return {
    opacity: [.55, .55, 1, 1, .7],
    scale: [.96, .96, 1.04, 1, .98],
    y: [3, 3, 0, 0, 1],
    transition: {
      duration: 16,
      repeat: Infinity,
      ease: "linear" as const,
      times: [0, .08 + index * .115, .13 + index * .115, .82, 1],
    },
  };
}

function TrailBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.trail}>
      <div className={styles.trailRail} aria-hidden="true" />
      {config.nodes.map((node, index) => (
        <motion.span key={node} animate={pulse(shouldAnimate, index)}>
          <b>{String(index + 1).padStart(2, "0")}</b>{node}
        </motion.span>
      ))}
      <motion.i
        aria-hidden="true"
        animate={shouldAnimate ? { left: ["3%", "3%", "91%", "91%", "3%"] } : { left: "91%" }}
        transition={{ duration: 16, repeat: shouldAnimate ? Infinity : 0, ease: "linear", times: [0, .06, .76, .92, 1] }}
      >{config.glyph}</motion.i>
    </div>
  );
}

function GraphBody({ config, shouldAnimate }: BodyProps) {
  const points = [[8, 48], [24, 18], [43, 54], [62, 20], [78, 62], [92, 34]];
  return (
    <div className={styles.graph}>
      <svg aria-hidden="true" viewBox="0 0 100 80" preserveAspectRatio="none">
        <path d="M8 48 L24 18 L43 54 L62 20 L78 62 L92 34 M24 18 L62 20 M43 54 L78 62" />
        <motion.circle
          r="2.4"
          animate={shouldAnimate ? { cx: [8, 8, 24, 43, 62, 78, 92, 92, 8], cy: [48, 48, 18, 54, 20, 62, 34, 34, 48] } : { cx: 92, cy: 34 }}
          transition={{ duration: 16, repeat: shouldAnimate ? Infinity : 0, ease: "linear", times: [0, .05, .2, .35, .5, .65, .8, .94, 1] }}
        />
      </svg>
      {config.nodes.map((node, index) => (
        <motion.span key={node} style={{ left: `${points[index][0]}%`, top: `${points[index][1]}%` }} animate={pulse(shouldAnimate, index)}>
          <i>{index === 2 ? config.glyph : "•"}</i>{node}
        </motion.span>
      ))}
    </div>
  );
}

function FieldBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.field}>
      <div className={styles.fieldGrid} aria-hidden="true">
        {Array.from({ length: 48 }, (_, index) => (
          <motion.i
            key={index}
            animate={shouldAnimate ? { opacity: [.16 + (index % 6) * .07, .9, .24], scale: [.96, 1.04, .98] } : { opacity: .34 + (index % 5) * .08, scale: 1 }}
            transition={{ duration: 3.2 + (index % 7) * .31, repeat: shouldAnimate ? Infinity : 0, delay: index * .025 }}
          />
        ))}
      </div>
      <motion.div className={styles.fieldSweep} aria-hidden="true" animate={shouldAnimate ? { left: ["0%", "100%", "0%"] } : { left: "72%" }} transition={{ duration: 8, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }} />
      <div className={styles.fieldNodes}>{config.nodes.map((node, index) => <motion.span key={node} animate={pulse(shouldAnimate, index)}>{node}</motion.span>)}</div>
      <b className={styles.fieldMetric}>{config.glyph} · {config.metric}</b>
    </div>
  );
}

function StageBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.stageScreen}>
        <header><i /><i /><i /><span>{config.glyph} · LIVE</span></header>
        <div className={styles.stageWorld}>
          <motion.b animate={shouldAnimate ? { x: [0, 0, 178, 178, 0], y: [0, 0, -34, -34, 0], rotate: [0, 0, 8, 8, 0] } : { x: 178, y: -34 }} transition={{ duration: 16, repeat: shouldAnimate ? Infinity : 0, ease: "linear", times: [0, .08, .7, .92, 1] }}>{config.glyph}</motion.b>
          <motion.i animate={shouldAnimate ? { opacity: [.32, .32, 1, 1, .32], scale: [.8, .8, 1.15, 1, .8] } : { opacity: 1, scale: 1 }} transition={{ duration: 16, repeat: shouldAnimate ? Infinity : 0, times: [0, .55, .64, .9, 1] }} />
        </div>
      </div>
      <div className={styles.stageStack}>{config.nodes.map((node, index) => <motion.span key={node} animate={pulse(shouldAnimate, index)}>{node}<i style={{ width: `${28 + index * 11}%` }} /></motion.span>)}</div>
    </div>
  );
}

function PipelineBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.pipeline}>
      <div className={styles.pipelinePipe} aria-hidden="true"><motion.i animate={shouldAnimate ? { left: ["0%", "0%", "94%", "94%", "0%"] } : { left: "94%" }} transition={{ duration: 16, repeat: shouldAnimate ? Infinity : 0, ease: "linear", times: [0, .04, .78, .94, 1] }}>{config.glyph}</motion.i></div>
      <div className={styles.pipelineGates}>{config.nodes.map((node, index) => <motion.span key={node} animate={pulse(shouldAnimate, index)}><b>{index + 1}</b>{node}</motion.span>)}</div>
      <code>{config.code[0]}</code>
    </div>
  );
}

function ForgeBody({ config, shouldAnimate }: BodyProps) {
  const positions = [[0, -102], [88, -51], [88, 51], [0, 102], [-88, 51], [-88, -51]] as const;
  return (
    <div className={styles.forge}>
      <div className={styles.forgeCore}><motion.i animate={shouldAnimate ? { rotate: [0, 360], scale: [.94, 1.08, .94] } : { rotate: 300, scale: 1 }} transition={{ duration: 7, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }}>{config.glyph}</motion.i><b>{config.metric}</b></div>
      <div className={styles.forgeNodes}>{config.nodes.map((node, index) => <motion.span key={node} animate={pulse(shouldAnimate, index)} style={{ left: positions[index][0] - 43, top: positions[index][1] - 25 }}>{node}</motion.span>)}</div>
      <motion.div className={styles.forgeBeam} aria-hidden="true" animate={shouldAnimate ? { opacity: [.15, .85, .2], scaleX: [.2, 1, .2] } : { opacity: .7, scaleX: 1 }} transition={{ duration: 4, repeat: shouldAnimate ? Infinity : 0 }} />
    </div>
  );
}

function ChannelsBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.channels}>
      {config.nodes.slice(0, 3).map((node, index) => (
        <div key={node} className={styles.channelLane}><b>{node}</b><motion.i animate={shouldAnimate ? { left: ["0%", "0%", "86%", "86%", "0%"] } : { left: `${68 + index * 8}%` }} transition={{ duration: 10 + index * 2, repeat: shouldAnimate ? Infinity : 0, delay: index * .65, ease: "linear", times: [0, .08, .74, .94, 1] }}>{index + 1}</motion.i></div>
      ))}
      <div className={styles.channelHub}>{config.glyph}<small>{config.nodes[3]}</small></div>
      <div className={styles.channelRecovery}>{config.nodes.slice(4).map((node, index) => <motion.span key={node} animate={pulse(shouldAnimate, index + 4)}>{node}</motion.span>)}</div>
    </div>
  );
}

function RuntimeBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.runtime}>
      <div className={styles.runtimeCore}>{config.glyph}<small>{config.metric}</small></div>
      {config.nodes.map((node, index) => (
        <motion.span key={node} className={styles.runtimeOrbit} style={{ width: `${112 + index * 34}px`, height: `${112 + index * 34}px` }} animate={shouldAnimate ? { rotate: [index * 37, 360 + index * 37] } : { rotate: 38 + index * 43 }} transition={{ duration: 8 + index * 2.4, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }}><b>{node}</b></motion.span>
      ))}
    </div>
  );
}

function LedgerBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.ledger}>
      <div className={styles.ledgerChain}>{config.nodes.map((node, index) => <motion.span key={node} animate={pulse(shouldAnimate, index)}><i>{index === 0 ? config.glyph : String(index).padStart(2, "0")}</i><b>{node}</b><small>{index < 5 ? "hash →" : "✓"}</small></motion.span>)}</div>
      <motion.div className={styles.ledgerSeal} animate={shouldAnimate ? { left: ["2%", "2%", "88%", "88%", "2%"], opacity: [.5, 1, 1, .65, .5] } : { left: "88%", opacity: 1 }} transition={{ duration: 16, repeat: shouldAnimate ? Infinity : 0, ease: "linear", times: [0, .05, .8, .94, 1] }}>VALID</motion.div>
      <code>{config.code[1]}</code>
    </div>
  );
}

function ManuscriptBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.manuscript}>
      <div className={styles.manuscriptPage}><b>FUENTE</b><code>{config.code[0]}</code><code>{config.code[1]}</code><span>{config.nodes[0]} → {config.nodes[1]}</span></div>
      <motion.div className={styles.manuscriptSpine} animate={shouldAnimate ? { scaleY: [.74, 1, .82], opacity: [.5, 1, .66] } : { scaleY: 1, opacity: 1 }} transition={{ duration: 4.5, repeat: shouldAnimate ? Infinity : 0 }}>{config.glyph}</motion.div>
      <div className={styles.manuscriptPage}><b>SALIDA</b>{config.nodes.slice(2).map((node, index) => <motion.span key={node} animate={pulse(shouldAnimate, index + 2)}>{node}<i>✓</i></motion.span>)}</div>
    </div>
  );
}

function SceneBody(props: BodyProps) {
  switch (props.config.motif) {
    case "trail": return <TrailBody {...props} />;
    case "graph": return <GraphBody {...props} />;
    case "field": return <FieldBody {...props} />;
    case "stage": return <StageBody {...props} />;
    case "pipeline": return <PipelineBody {...props} />;
    case "forge": return <ForgeBody {...props} />;
    case "channels": return <ChannelsBody {...props} />;
    case "runtime": return <RuntimeBody {...props} />;
    case "ledger": return <LedgerBody {...props} />;
    case "manuscript": return <ManuscriptBody {...props} />;
  }
}

export function NewLearningActionScene({ id }: { id: string }) {
  const sceneRef = useRef<HTMLElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const resolvedId = isNewLearningActionSceneId(id) ? id : "programming-fundamentals";
  const config = configs[resolvedId];
  const sceneStyle = { "--scene-accent": config.accent, "--scene-accent-alt": config.accentAlt } as CSSProperties;
  const loopTransition = { duration: 16, repeat: shouldAnimate ? Infinity : 0, ease: "linear" as const };

  return (
    <figure
      className={styles.scene}
      data-action-scene={resolvedId}
      data-motif={config.motif}
      data-playback={playback}
      ref={sceneRef}
      role="img"
      aria-label={`${config.label}. Entra ${config.input}; aparece ${config.failure}; se recupera mediante ${config.recovery}; produce ${config.result} y el ciclo vuelve a comenzar.`}
      style={sceneStyle}
    >
      <figcaption className={styles.legend}>
        <span><i />ENTRADA · {config.input}</span>
        <span><i />INCIDENTE · {config.failure}</span>
        <span><i />RESULTADO · {config.result}</span>
      </figcaption>

      <Fragment key={playback}>
        <div className={styles.canvas}>
          <header className={styles.header}>
            <span className={styles.badge}>{config.glyph}</span>
            <div><strong>{config.label}</strong><small>{config.easterEgg ?? `${config.motif} · caso integrado`}</small></div>
            <b>{config.metric}</b>
          </header>

          <SceneBody config={config} shouldAnimate={shouldAnimate} />

          <div className={styles.incident}>
            <motion.span animate={shouldAnimate ? { opacity: [.5, .5, 1, 1, .6], y: [3, 3, 0, 0, 2] } : { opacity: 1, y: 0 }} transition={{ ...loopTransition, times: [0, .4, .48, .62, 1] }}><b>FALLO</b>{config.failure}</motion.span>
            <motion.span animate={shouldAnimate ? { opacity: [.4, .4, .4, 1, 1, .7], y: [3, 3, 3, 0, 0, 1] } : { opacity: 1, y: 0 }} transition={{ ...loopTransition, times: [0, .54, .61, .69, .94, 1] }}><b>RECUPERACIÓN</b>{config.recovery}</motion.span>
          </div>

          <motion.div className={styles.result} animate={shouldAnimate ? { opacity: [.65, .65, 1, 1, .78], scale: [.98, .98, 1.025, 1, .99] } : { opacity: 1, scale: 1 }} transition={{ ...loopTransition, times: [0, .77, .84, .95, 1] }}>
            <span>RESULTADO VERIFICABLE</span><strong>{config.result}</strong>
          </motion.div>
        </div>

        <footer className={styles.evidence}>
          {config.evidence.map((item) => <span key={item}><b>✓</b>{item}</span>)}
          <motion.span animate={shouldAnimate ? { opacity: [.7, 1, .78] } : { opacity: 1 }} transition={{ duration: 3, repeat: shouldAnimate ? Infinity : 0 }}><b>↻</b>nuevo ciclo</motion.span>
        </footer>
      </Fragment>
    </figure>
  );
}
