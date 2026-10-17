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
    easterEgg: "Primer teorema de Heimerdinger: entiende el problema antes de forjar la herramienta",
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
    easterEgg: "Navegación A* a través de los laberintos de Zaun y las torres de Piltover",
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
    easterEgg: "Fundamentos matemáticos de la resonancia Hextech",
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
    easterEgg: "Tablero Kanban para el sprint de ingeniería de las Hexgates",
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
    easterEgg: "El mono con platillos y el poro vigilan el portal interactivo",
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
    easterEgg: "Pipeline experimental de la Academia de Piltover",
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
    easterEgg: "Forjado en las fraguas de Piltover con seguridad de tipos garantizada",
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
    easterEgg: "Pool de workers gestionando el tráfico del puente de Piltover",
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
    easterEgg: "Demostración matemática pura de resonancia sin efectos secundarios",
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
    easterEgg: "Válvulas de presión de agua de Piltover con concurrencia CSP",
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
    easterEgg: "Sincronización con checkpoint temporal tipo Z-Drive de Ekko",
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
    easterEgg: "HotSpot JVM ejecutando el registro central de Piltover",
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
    easterEgg: "Telemetría ambiental del aire de Zaun y varianza estadística",
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
    easterEgg: "Sincronía de registros en el núcleo de Piltover",
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
    easterEgg: "Buzón de Zaun: un cable roto en Las Fauces levanta un nuevo nodo",
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
    easterEgg: "Runas ancestrales Hextech expandidas mediante macros homoicónicas",
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
    easterEgg: "Decodificador de grafiti de Zaun con captura de patrones rebeldes",
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
    easterEgg: "Gramática multi-dialecto descifrando inscripciones arcanas",
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
    easterEgg: "Álgebra funcional impulsando el transmutador Hextech",
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
    easterEgg: "Cadena de custodia Hextech sellada por el Consejo",
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
    easterEgg: "Comunicador de campo de Zaun resistente a cortes y caída de procesos",
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
    easterEgg: "Reactivación instantánea Hextech sin tiempo de calentamiento",
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
    easterEgg: "Árbol de mando del Consejo de Piltover con señales reactivas",
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
    easterEgg: "Portal comercial de Piltover con transacciones atómicas",
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
    easterEgg: "Aislamiento Hextech atómico: nada se filtra a las calles",
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
    easterEgg: "Red distribuida del bajo Zaun: tolerante a cortes de Chemtech",
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
    easterEgg: "Planificador de Heimerdinger: interrupciones de emergencia primero",
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
    easterEgg: "Monitor de telemetría Hextech detectando anomalías y drift",
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
    easterEgg: "Formato de manuscritos revisados por pares de la Academia de Piltover",
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
    easterEgg: "Archivo central del Consejo de Piltover con revisiones inmutables",
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

/* 1. SQL: Tablas relacionales, JOIN animado y COMMIT ACID */
function SqlBody({ config, shouldAnimate }: BodyProps) {
  return (
    <div className={styles.sqlLayout}>
      <div className={styles.sqlTables}>
        <div className={styles.sqlTable}>
          <header>users <i>PRIMARY</i></header>
          <div className={styles.sqlRow}><span>id: 42</span><b>name: Viktor</b><span>city: Zaun</span></div>
          <div className={styles.sqlRow}><span>id: 43</span><b>name: Jayce</b><span>city: Piltover</span></div>
        </div>
        <div className={styles.sqlJoin}>
          <motion.div
            className={styles.sqlJoinBeam}
            animate={shouldAnimate ? { scaleX: [.2, 1, 1, .2], opacity: [.3, 1, 1, .3] } : { scaleX: 1, opacity: 1 }}
            transition={{ duration: 6, repeat: shouldAnimate ? Infinity : 0 }}
          >
            <span>JOIN ON user_id = id</span>
          </motion.div>
        </div>
        <div className={styles.sqlTable}>
          <header>orders <i>FOREIGN KEY</i></header>
          <div className={`${styles.sqlRow} ${styles.sqlRowSelected}`}>
            <span>id: 101</span><b>user_id: 42</b><span>$850</span><small>PAID</small>
          </div>
          <div className={styles.sqlRow}>
            <span>id: 102</span><b>user_id: 43</b><span>$120</span><small>PENDING</small>
          </div>
        </div>
      </div>
      <div className={styles.sqlTx}>
        <div className={styles.sqlTxStep}>BEGIN TX</div>
        <motion.div
          className={styles.sqlTxStatus}
          animate={shouldAnimate ? { borderColor: ["#49d7ff", "#61e6a8", "#49d7ff"] } : { borderColor: "#61e6a8" }}
          transition={{ duration: 4, repeat: shouldAnimate ? Infinity : 0 }}
        >
          <span>ACID COMMIT</span>
          <small>Hextech isolation · atomic lock</small>
        </motion.div>
        <code>{config.code[1]}</code>
      </div>
    </div>
  );
}

/* 2. NoSQL: Documento BSON anidado, hash partition ring y shards */
function NosqlBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.nosqlLayout}>
      <div className={styles.nosqlDoc}>
        <div className={styles.nosqlDocHeader}>
          <span>BSON DOCUMENT</span>
          <code>pk: &quot;chem#42&quot;</code>
        </div>
        <pre className={styles.nosqlJson}>
          {`{
  "_id": "65b9f7a0421",
  "pilot": "Jinx",
  "zone": "The Undercity",
  "arsenal": ["Fishbones", "Pow-Pow"],
  "chemtech": { "flow": 98.4, "stable": true }
}`}
        </pre>
      </div>
      <div className={styles.nosqlSharding}>
        <div className={styles.nosqlRing}>
          <span>HASH PARTITION RING</span>
          <motion.div
            className={styles.nosqlHashPointer}
            animate={shouldAnimate ? { rotate: [0, 360] } : { rotate: 210 }}
            transition={{ duration: 8, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }}
          >
            <i>◆</i>
          </motion.div>
        </div>
        <div className={styles.nosqlShards}>
          {["Shard 01 (Zaun)", "Shard 02 (Piltover)", "Shard 03 (Lanes)"].map((shard, i) => (
            <div key={shard} className={`${styles.nosqlShard} ${i === 0 ? styles.nosqlShardActive : ""}`}>
              <b>{shard}</b>
              <small>{i === 0 ? "DIRECT HOP 3ms ✓" : "idle"}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 3. Blockchain: Bloques criptográficos con hashes y Merkle root */
function BlockchainBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.blockchainLayout}>
      <div className={styles.blockchainChain}>
        {[
          { num: "101", hash: "8f3a...09c", prev: "0000...000", txs: 4 },
          { num: "102", hash: "4e1b...d72", prev: "8f3a...09c", txs: 7 },
          { num: "103", hash: "2a9c...f44", prev: "4e1b...d72", txs: 3 },
        ].map((block, i) => (
          <motion.div
            key={block.num}
            className={styles.blockchainBlock}
            animate={pulse(shouldAnimate, i)}
          >
            <div className={styles.blockchainBlockHeader}>
              <strong>BLOCK #{block.num}</strong>
              <small>{block.txs} txs</small>
            </div>
            <div className={styles.blockchainData}>
              <span>hash: <b>{block.hash}</b></span>
              <span>prev: <i>{block.prev}</i></span>
            </div>
            <div className={styles.blockchainMerkle}>Merkle Root: verified ✓</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className={styles.blockchainConsensus}
        animate={shouldAnimate ? { opacity: [.7, 1, .7], scale: [.98, 1.02, .98] } : { opacity: 1, scale: 1 }}
        transition={{ duration: 4, repeat: shouldAnimate ? Infinity : 0 }}
      >
        <span>CONSENSO HEXTECH · INMUTABLE</span>
        <small>12 confirmaciones · Estado final</small>
      </motion.div>
    </div>
  );
}

/* 4. Operating Systems: Planificador Round-Robin, Context Switch y MMU */
function OperatingSystemsBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.osLayout}>
      <div className={styles.osScheduler}>
        <div className={styles.osSchedulerHeader}>
          <span>PLANIFICADOR PREEMPTIVO (ROUND-ROBIN)</span>
          <small>Quantum: 10ms</small>
        </div>
        <div className={styles.osQueue}>
          {["P1 (Heimerdinger Core)", "P2 (Zaun Telemetry)", "P3 (Hexgate Controller)"].map((proc, i) => (
            <motion.div
              key={proc}
              className={`${styles.osProcess} ${i === 0 ? styles.osProcessRunning : ""}`}
              animate={shouldAnimate ? { x: [0, 8, 0] } : { x: 0 }}
              transition={{ duration: 3, delay: i * 0.4, repeat: shouldAnimate ? Infinity : 0 }}
            >
              <b>{proc}</b>
              <small>{i === 0 ? "RUNNING (CPU 0)" : "READY IN QUEUE"}</small>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.osContextSwitch}>
        <div className={styles.osRegisters}>
          <span>CONTEXT SWITCH (2.1μs)</span>
          <code>SAVE RAX, RSP → RESTORE P2</code>
        </div>
        <div className={styles.osMmu}>
          <span>TABLA DE PÁGINAS (MMU)</span>
          <div className={styles.osPageRow}>
            <span>Virtual 0x7FFF1000</span>
            <i>→</i>
            <b>RAM Frame 0x1A4F</b>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. Assembly: Registros CPU, flujo de instrucciones y Stack Frame */
function AssemblyBody(_props: BodyProps) {
  return (
    <div className={styles.assemblyLayout}>
      <div className={styles.assemblyRegisters}>
        <div className={styles.assemblyRegGrid}>
          {["RAX: 0x0000002A", "RBX: 0x00001000", "RCX: 0x000000FF", "RDX: 0x00000000", "RSP: 0x7FFFFFFF", "RBP: 0x7FFFFFF0"].map((reg) => (
            <div key={reg} className={styles.assemblyReg}><code>{reg}</code></div>
          ))}
        </div>
      </div>
      <div className={styles.assemblyExecution}>
        <div className={styles.assemblyInstructions}>
          <header>INSTRUCTION STREAM</header>
          {[
            { asm: "MOV RAX, [RBP-8]", note: "load payload" },
            { asm: "ADD RAX, RBX", note: "hextech accumulate" },
            { asm: "CMP RAX, 100", note: "verify threshold" },
            { asm: "JNZ .stabilize", note: "branch if uncalibrated" },
          ].map((ins, i) => (
            <div key={ins.asm} className={`${styles.assemblyLine} ${i === 1 ? styles.assemblyLineActive : ""}`}>
              <code>{ins.asm}</code>
              <span>; {ins.note}</span>
            </div>
          ))}
        </div>
        <div className={styles.assemblyStack}>
          <header>STACK FRAME</header>
          <div className={styles.assemblyStackItem}>[RBP+16] arg2</div>
          <div className={styles.assemblyStackItem}>[RBP+8] ret addr</div>
          <div className={`${styles.assemblyStackItem} ${styles.assemblyStackTop}`}>[RBP-8] local var (RSP)</div>
        </div>
      </div>
    </div>
  );
}

/* 6. Rust: Fragua de memoria, turntable de préstamos y Drop determinista */
function RustBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.rustLayout}>
      <div className={styles.rustForgeCore}>
        <div className={styles.rustHexagon}>
          <motion.div
            className={styles.rustTurntable}
            animate={shouldAnimate ? { rotate: [0, 360] } : { rotate: 45 }}
            transition={{ duration: 12, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }}
          >
            <i>◆</i>
          </motion.div>
          <div className={styles.rustCoreText}>
            <strong>FRAGUA RUST</strong>
            <small>Borrow Checker Activo</small>
          </div>
        </div>
      </div>
      <div className={styles.rustOwnershipRules}>
        <div className={styles.rustRuleCard}>
          <b>EXCLUSIVE MUTABLE BORROW (&amp;mut T)</b>
          <code>let ref_mut = &amp;mut crystal;</code>
          <small>1 escritor exclusivo · sin carreras de datos</small>
        </div>
        <div className={styles.rustRuleCard}>
          <b>DETERMINISTIC DROP</b>
          <code>drop(stabilizer); // libera en salida de scope</code>
          <small>0 memory leaks · RAII a costo cero</small>
        </div>
      </div>
    </div>
  );
}

/* 7. Erlang: Árbol de supervisión BEAM, buzones de actores y aislamiento */
function ErlangBody(_props: BodyProps) {
  return (
    <div className={styles.erlangLayout}>
      <div className={styles.erlangSupervisor}>
        <div className={styles.erlangSuperHeader}>
          <span>SUPERVISION TREE (one_for_one)</span>
          <small>Erlang/OTP BEAM VM</small>
        </div>
        <div className={styles.erlangActors}>
          {[
            { id: "worker_1", status: "ONLINE", msgs: 3 },
            { id: "worker_2 (zaun_pipe)", status: "RESTARTED (34ms)", msgs: 1, recovered: true },
            { id: "worker_3", status: "ONLINE", msgs: 0 },
          ].map((act) => (
            <div key={act.id} className={`${styles.erlangActor} ${act.recovered ? styles.erlangActorRecovered : ""}`}>
              <header>
                <b>{act.id}</b>
                <span className={act.recovered ? styles.erlangBadgeOk : styles.erlangBadgeNorm}>{act.status}</span>
              </header>
              <div className={styles.erlangMailbox}>
                <span>Mailbox: {act.msgs} msgs</span>
                <div className={styles.erlangMsgDots}>
                  {Array.from({ length: act.msgs }).map((_, m) => <i key={m} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.erlangPhilosophy}>
        <code>&quot;Let it crash&quot; · Fallo aislado sin contaminar la red</code>
      </div>
    </div>
  );
}

/* 8. Kotlin: CoroutineScope estructurado, Dispatchers y Flow reactivo */
function KotlinBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.kotlinLayout}>
      <div className={styles.kotlinScope}>
        <div className={styles.kotlinScopeHeader}>
          <span>CoroutineScope(SupervisorJob() + Dispatchers.Default)</span>
          <small>Cancelación estructurada cooperativa</small>
        </div>
        <div className={styles.kotlinLanes}>
          <div className={styles.kotlinLane}>
            <header>Dispatchers.IO (Background I/O)</header>
            <div className={styles.kotlinTask}>fetchTelemetry() suspend</div>
            <div className={styles.kotlinTask}>writeToRoomDatabase()</div>
          </div>
          <div className={styles.kotlinBridge}>
            <motion.span
              animate={shouldAnimate ? { y: [-6, 6, -6] } : { y: 0 }}
              transition={{ duration: 3, repeat: shouldAnimate ? Infinity : 0 }}
            >
              Flow.emit() ➔
            </motion.span>
          </div>
          <div className={styles.kotlinLane}>
            <header>Dispatchers.Main (UI Thread)</header>
            <div className={`${styles.kotlinTask} ${styles.kotlinTaskUi}`}>
              collectAsStateWithLifecycle()
            </div>
          </div>
        </div>
      </div>
      <div className={styles.kotlinZDrive}>
        <code>Z-Drive Checkpoint: state.emit(snapshot) · UI intacta ante rotación</code>
      </div>
    </div>
  );
}

/* 9. Go: Goroutines concurrentes, canal acotado y select multiplexado */
function GoBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.goLayout}>
      <div className={styles.goProducers}>
        <span>Goroutines Productoras</span>
        <div className={styles.goRoutines}>
          <code>go scrape(url1)</code>
          <code>go scrape(url2)</code>
          <code>go scrape(url3)</code>
        </div>
      </div>
      <div className={styles.goChannel}>
        <div className={styles.goChanHeader}>
          <span>chan Job (buffer: 4)</span>
          <small>CSP Pipeline</small>
        </div>
        <div className={styles.goBufferSlots}>
          {[1, 2, 3, 4].map((slot, i) => (
            <motion.div
              key={slot}
              className={`${styles.goSlot} ${i < 3 ? styles.goSlotFilled : ""}`}
              animate={shouldAnimate ? { opacity: [.6, 1, .6] } : { opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.3, repeat: shouldAnimate ? Infinity : 0 }}
            >
              {i < 3 ? `job #${slot}` : "empty"}
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.goSelect}>
        <div className={styles.goSelectCode}>
          <code>select &#123;</code>
          <code>  case job := &lt;-jobs: process(job)</code>
          <code>  case &lt;-ctx.Done(): return // shutdown limpio</code>
          <code>&#125;</code>
        </div>
      </div>
    </div>
  );
}

/* 10. PHP: Worker pool FastCGI/PHP-FPM y OPcache */
function PhpBody(_props: BodyProps) {
  return (
    <div className={styles.phpLayout}>
      <div className={styles.phpFpm}>
        <div className={styles.phpHeader}>
          <span>PHP-FPM WORKER POOL</span>
          <small>pm.max_children = 4 · FastCGI Protocol</small>
        </div>
        <div className={styles.phpWorkers}>
          {[
            { id: "worker #1", state: "BUSY", req: "POST /reservations", time: "18ms" },
            { id: "worker #2", state: "IDLE", req: "waiting request", time: "--" },
            { id: "worker #3", state: "BUSY", req: "GET /api/inventory", time: "8ms" },
            { id: "worker #4", state: "IDLE", req: "waiting request", time: "--" },
          ].map((w) => (
            <div key={w.id} className={`${styles.phpWorker} ${w.state === "BUSY" ? styles.phpWorkerBusy : ""}`}>
              <b>{w.id}</b>
              <span>{w.state}</span>
              <code>{w.req}</code>
              <small>{w.time}</small>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.phpOpcache}>
        <div className={styles.phpOpcacheHit}>
          <b>OPCACHE HIT: 100%</b>
          <small>Bytecode precompilado en memoria compartida</small>
        </div>
        <code>Ciclo de vida efímero sin estado compartido entre peticiones</code>
      </div>
    </div>
  );
}

/* 11. Perl: Cinta de caracteres regex, autómata finito y grupos de captura */
function PerlBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.perlLayout}>
      <div className={styles.perlEngine}>
        <div className={styles.perlRegexHeader}>
          <span>MOTOR REGEX DFA/NFA</span>
          <code>/([A-Za-z]+)-(\d&#123;4&#125;)/</code>
        </div>
        <div className={styles.perlTape}>
          <span className={styles.perlTapeLabel}>TAPE:</span>
          {["P", "I", "L", "T", "O", "V", "E", "R", "-", "4", "2", "0", "1"].map((char, i) => (
            <motion.span
              key={i}
              className={`${styles.perlTapeChar} ${i === 8 ? styles.perlTapeDelimiter : i < 8 ? styles.perlTapeG1 : styles.perlTapeG2}`}
              animate={shouldAnimate ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1, repeat: shouldAnimate ? Infinity : 0 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className={styles.perlCaptures}>
          <div className={styles.perlCap}><b>$1</b>: &quot;PILTOVER&quot;</div>
          <div className={styles.perlCap}><b>$2</b>: &quot;4201&quot;</div>
          <small>Atomic matching sin backtracking catastrófico</small>
        </div>
      </div>
    </div>
  );
}

/* 12. Ruby: Enumerable lazy pipeline y resolución dinámica de métodos */
function RubyBody(_props: BodyProps) {
  return (
    <div className={styles.rubyLayout}>
      <div className={styles.rubyPipeline}>
        <div className={styles.rubyPipeHeader}>
          <span>ENUMERABLE PIPELINE EVALUATION</span>
          <code>access.log (84 MB)</code>
        </div>
        <div className={styles.rubyBlocks}>
          {[
            { step: ".lazy", desc: "procesamiento perezoso línea a línea" },
            { step: ".filter_map", desc: "parse(line) descartando líneas corruptas" },
            { step: ".group_by(&:service)", desc: "agrupación por servicio y severidad" },
          ].map((b) => (
            <div key={b.step} className={styles.rubyBlockStep}>
              <b>{b.step}</b>
              <span>{b.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rubyDispatch}>
        <span>Method Dispatch Ancestry:</span>
        <code>TelemetryParser ➔ Enumerable ➔ Object ➔ BasicObject</code>
      </div>
    </div>
  );
}

/* 13. Android: Pila de ciclo de vida de Activity y recomposición inteligente */
function AndroidBody(_props: BodyProps) {
  return (
    <div className={styles.androidLayout}>
      <div className={styles.androidLifecycle}>
        <div className={styles.androidHeader}>
          <span>ACTIVITY / FRAGMENT LIFECYCLE</span>
          <small>Supervivencia a rotación y background</small>
        </div>
        <div className={styles.androidStates}>
          {["onCreate()", "onStart()", "onResume() (Active)", "onPause()", "onStop()", "onDestroy()"].map((st, i) => (
            <div key={st} className={`${styles.androidState} ${i === 2 ? styles.androidStateActive : ""}`}>
              <span>{st}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.androidCompose}>
        <div className={styles.androidComposeHeader}>
          <span>JETPACK COMPOSE RECOMPOSITION</span>
          <small>Smart Recomposition (Skip no modificado)</small>
        </div>
        <div className={styles.androidTree}>
          <div className={styles.androidNodeSkipped}>OrderScreen (Skipped)</div>
          <div className={styles.androidNodeSkipped}>HeaderView (Skipped)</div>
          <div className={styles.androidNodeRecomposed}>StatusBadge (Recomposed ✓)</div>
        </div>
      </div>
    </div>
  );
}

/* 14. Qwik: Resumabilidad pura con símbolos QRL lazy sin hidratación */
function QwikBody(_props: BodyProps) {
  return (
    <div className={styles.qwikLayout}>
      <div className={styles.qwikResumability}>
        <div className={styles.qwikHeader}>
          <span>RESUMABILIDAD PURA (ZERO HYDRATION)</span>
          <small>Carga inmediata desde HTML serializado</small>
        </div>
        <div className={styles.qwikHtml}>
          <code>&lt;button on:click=&quot;chunk_42.js#handleClick&quot;&gt;Interact&lt;/button&gt;</code>
          <div className={styles.qwikStatus}>0kB JS ejecutado en render inicial</div>
        </div>
      </div>
      <div className={styles.qwikInteraction}>
        <div className={styles.qwikArrow}>⬇ Usuario hace Click</div>
        <div className={styles.qwikFetch}>
          <b>Descarga bajo demanda:</b>
          <code>fetch(&apos;/build/chunk_42.js&apos;) ➔ 3.1kB ejecutado en 18ms ✓</code>
        </div>
      </div>
    </div>
  );
}

/* 15. Scratch: Bloques de código visual y escenario interactivo 2D */
function ScratchBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.scratchLayout}>
      <div className={styles.scratchCodeBlocks}>
        <div className={styles.scratchBlockHat}>al presionar ⚑</div>
        <div className={styles.scratchBlockLoop}>
          <span>por siempre</span>
          <div className={styles.scratchBlockInner}>
            <div className={styles.scratchBlockAction}>mover (10) pasos</div>
            <div className={styles.scratchBlockCondition}>si &lt;tocando [Portal]?&gt; entonces</div>
            <div className={styles.scratchBlockInner2}>
              <div className={styles.scratchBlockEvent}>enviar [NIVEL_COMPLETO]</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scratchStageView}>
        <header>ESCENARIO 2D (480x360)</header>
        <div className={styles.scratchWorld}>
          <motion.div
            className={styles.scratchSprite}
            animate={shouldAnimate ? { x: [10, 140, 10], y: [30, 15, 30] } : { x: 140, y: 15 }}
            transition={{ duration: 6, repeat: shouldAnimate ? Infinity : 0 }}
          >
            🐱 Sprite
          </motion.div>
          <div className={styles.scratchTarget}>🌀 Portal</div>
        </div>
      </div>
    </div>
  );
}

/* 16. Angular: Inyección de dependencias jerárquica y Signals reactivas */
function AngularBody(_props: BodyProps) {
  return (
    <div className={styles.angularLayout}>
      <div className={styles.angularDi}>
        <div className={styles.angularDiHeader}>
          <span>JERARQUÍA DE INYECCIÓN DE DEPENDENCIAS (DI)</span>
          <small>provideIn: &apos;root&apos;</small>
        </div>
        <div className={styles.angularTree}>
          <div className={styles.angularNode}>EnvironmentInjector (Root)</div>
          <div className={styles.angularNodeIndent}>OrdersService (Singleton)</div>
          <div className={styles.angularNodeIndent2}>OrderDashboardComponent</div>
        </div>
      </div>
      <div className={styles.angularSignals}>
        <div className={styles.angularSignalsHeader}>
          <span>ANGULAR SIGNALS GRAPH</span>
          <small>Zoneless Change Detection</small>
        </div>
        <div className={styles.angularSignalFlow}>
          <div className={styles.angularSig}>id = signal(42)</div>
          <div className={styles.angularArrow}>➔</div>
          <div className={styles.angularSig}>order = resource(() =&gt; id())</div>
          <div className={styles.angularArrow}>➔</div>
          <div className={styles.angularSig}>total = computed(() =&gt; sum(order()))</div>
        </div>
      </div>
    </div>
  );
}

/* 17. Lisp: Árbol homoicónico de S-Expressions y expansión de macros */
function LispBody(_props: BodyProps) {
  return (
    <div className={styles.lispLayout}>
      <div className={styles.lispAst}>
        <div className={styles.lispAstHeader}>
          <span>S-EXPRESSIONS &amp; MACROEXPANSION</span>
          <code>(defmacro when-valid (cond &amp;body body) ...)</code>
        </div>
        <div className={styles.lispTree}>
          <div className={styles.lispNode}>LIST: (when-valid order (process order))</div>
          <div className={styles.lispExpandArrow}>⬇ macroexpand-1 (con gensym higiénico)</div>
          <div className={styles.lispExpanded}>
            <code>(let ((#:g104 order)) (if (valid-p #:g104) (process #:g104) nil))</code>
          </div>
        </div>
      </div>
      <div className={styles.lispRepl}>
        <span>REPL: READ ➔ EVAL ➔ PRINT ➔ LOOP</span>
      </div>
    </div>
  );
}

/* 18. Algorithms: Búsqueda de caminos A* en grafo con cola de prioridad */
function AlgorithmsBody(_props: BodyProps) {
  return (
    <div className={styles.algorithmsLayout}>
      <div className={styles.algorithmsGraph}>
        <div className={styles.algorithmsHeader}>
          <span>BÚSQUEDA A* (A-STAR PATHFINDING)</span>
          <code>f(n) = g(n) + h(n)</code>
        </div>
        <svg viewBox="0 0 400 160" className={styles.algorithmsSvg}>
          <line x1="50" y1="80" x2="140" y2="40" stroke="#243957" strokeWidth="2" />
          <line x1="50" y1="80" x2="140" y2="120" stroke="#243957" strokeWidth="2" />
          <line x1="140" y1="40" x2="260" y2="40" stroke="#61e6a8" strokeWidth="3" />
          <line x1="140" y1="120" x2="260" y2="120" stroke="#243957" strokeWidth="2" />
          <line x1="260" y1="40" x2="350" y2="80" stroke="#61e6a8" strokeWidth="3" />
          <line x1="260" y1="120" x2="350" y2="80" stroke="#243957" strokeWidth="2" />
          <circle cx="50" cy="80" r="14" fill="#49d7ff" />
          <text x="50" y="84" textAnchor="middle" fill="#04111f" fontSize="10" fontWeight="bold">A</text>
          <circle cx="140" cy="40" r="14" fill="#61e6a8" />
          <text x="140" y="44" textAnchor="middle" fill="#04111f" fontSize="10" fontWeight="bold">C</text>
          <circle cx="140" cy="120" r="14" fill="#243957" />
          <text x="140" y="124" textAnchor="middle" fill="#eef8ff" fontSize="10" fontWeight="bold">B</text>
          <circle cx="260" cy="40" r="14" fill="#61e6a8" />
          <text x="260" y="44" textAnchor="middle" fill="#04111f" fontSize="10" fontWeight="bold">E</text>
          <circle cx="260" cy="120" r="14" fill="#243957" />
          <text x="260" y="124" textAnchor="middle" fill="#eef8ff" fontSize="10" fontWeight="bold">D</text>
          <circle cx="350" cy="80" r="14" fill="#ffd05a" />
          <text x="350" y="84" textAnchor="middle" fill="#04111f" fontSize="10" fontWeight="bold">F</text>
        </svg>
      </div>
      <div className={styles.algorithmsQueue}>
        <span>OPEN SET: [C (f=7), B (f=11)] ➔ RUTA ÓPTIMA: A➔C➔E➔F (Costo: 17)</span>
      </div>
    </div>
  );
}

/* 19. Artificial Intelligence: Red neuronal multicapa con Forward Pass y Backprop */
function AiBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.aiLayout}>
      <div className={styles.aiNetwork}>
        <div className={styles.aiHeader}>
          <span>RED NEURONAL MULTICAPA &amp; BACKPROPAGATION</span>
          <small>Loss: 0.042 · Accuracy: 96.8%</small>
        </div>
        <div className={styles.aiLayers}>
          <div className={styles.aiLayer}>
            <header>ENTRADA (x)</header>
            {[1, 2, 3, 4].map((n) => <div key={n} className={styles.aiNeuron} />)}
          </div>
          <div className={styles.aiWeights}>
            <motion.div
              className={styles.aiForwardPass}
              animate={shouldAnimate ? { x: [-15, 80, -15], opacity: [0, 1, 0] } : { x: 35, opacity: 1 }}
              transition={{ duration: 4, repeat: shouldAnimate ? Infinity : 0 }}
            >
              Forward ➔
            </motion.div>
          </div>
          <div className={styles.aiLayer}>
            <header>OCULTA (h)</header>
            {[1, 2, 3, 4, 5, 6].map((n) => <div key={n} className={`${styles.aiNeuron} ${styles.aiNeuronHidden}`} />)}
          </div>
          <div className={styles.aiWeights}>
            <motion.div
              className={styles.aiBackwardPass}
              animate={shouldAnimate ? { x: [80, -15, 80], opacity: [0, 1, 0] } : { x: 35, opacity: 1 }}
              transition={{ duration: 4, delay: 2, repeat: shouldAnimate ? Infinity : 0 }}
            >
              ⬅ Backprop
            </motion.div>
          </div>
          <div className={styles.aiLayer}>
            <header>SALIDA (ŷ)</header>
            {[1, 2, 3].map((n) => <div key={n} className={`${styles.aiNeuron} ${styles.aiNeuronOutput}`} />)}
          </div>
        </div>
      </div>
      <div className={styles.aiMetrics}>
        <code>Optimizador Adam: W_new = W_old - lr * m_hat / (sqrt(v_hat) + eps)</code>
      </div>
    </div>
  );
}

/* 20. R: Dataframe estadístico, boxplot con cuartiles y regresión */
function RBody(_props: BodyProps) {
  return (
    <div className={styles.rLayout}>
      <div className={styles.rStats}>
        <div className={styles.rHeader}>
          <span>DATAFRAME VECTORIZADO &amp; DISTRIBUCIÓN ESTADÍSTICA</span>
          <code>model &lt;- lm(telemetry ~ pressure + temp, data = df)</code>
        </div>
        <div className={styles.rVisuals}>
          <div className={styles.rBoxplot}>
            <header>BOXPLOT &amp; QUARTILES</header>
            <div className={styles.rBoxWrapper}>
              <div className={styles.rWhiskerTop} />
              <div className={styles.rBox}>
                <span>Q3: 78.4</span>
                <b>Median: 62.1</b>
                <span>Q1: 45.8</span>
              </div>
              <div className={styles.rWhiskerBottom} />
              <div className={styles.rOutlier}>• Outlier: 104.2</div>
            </div>
          </div>
          <div className={styles.rRegression}>
            <header>RESUMEN DEL MODELO (broom::glance)</header>
            <div className={styles.rRow}><span>R² ajustado:</span><b>0.814</b></div>
            <div className={styles.rRow}><span>p-value:</span><b>&lt; 0.0001 (Significativo)</b></div>
            <div className={styles.rRow}><span>F-statistic:</span><b>142.6 en 2 y 198 DF</b></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 21. Mathematics: Superficie de gradiente y trayectoria de descenso de valle */
function MathematicsBody({ shouldAnimate }: BodyProps) {
  return (
    <div className={styles.mathLayout}>
      <div className={styles.mathContour}>
        <div className={styles.mathHeader}>
          <span>SUPERFICIE DE GRADIENTE &amp; DESCENSO DE VALLE</span>
          <code>θ(t+1) = θ(t) - α∇f(θ(t))</code>
        </div>
        <div className={styles.mathGrid}>
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.div
              key={i}
              className={styles.mathCell}
              animate={shouldAnimate ? { opacity: [.3 + (i % 5) * 0.1, .8, .3] } : { opacity: .5 }}
              transition={{ duration: 4, delay: i * 0.05, repeat: shouldAnimate ? Infinity : 0 }}
            />
          ))}
          <motion.div
            className={styles.mathBall}
            animate={shouldAnimate ? { x: [10, 120, 220], y: [10, 50, 80] } : { x: 220, y: 80 }}
            transition={{ duration: 6, repeat: shouldAnimate ? Infinity : 0, ease: "easeInOut" }}
          >
            ∇f
          </motion.div>
        </div>
      </div>
      <div className={styles.mathConvergence}>
        <span>Tolerancia de convergencia alcanzada: |Δf| &lt; 10⁻⁶ en 42 iteraciones</span>
      </div>
    </div>
  );
}

/* 22. Django: Arquitectura MTV, enrutador y QuerySet transaccional */
function DjangoBody(_props: BodyProps) {
  return (
    <div className={styles.djangoLayout}>
      <div className={styles.djangoMtv}>
        <div className={styles.djangoHeader}>
          <span>ARQUITECTURA MTV (MODEL - TEMPLATE - VIEW)</span>
          <small>POST /bookings/42</small>
        </div>
        <div className={styles.djangoSteps}>
          <div className={styles.djangoStep}>
            <b>1. URLconf</b>
            <code>path(&apos;bookings/&lt;id&gt;&apos;, view)</code>
          </div>
          <div className={styles.djangoStep}>
            <b>2. View &amp; ORM</b>
            <code>Booking.objects.select_for_update()</code>
          </div>
          <div className={styles.djangoStep}>
            <b>3. Template</b>
            <code>render(request, &apos;detail.html&apos;, ctx)</code>
          </div>
        </div>
      </div>
      <div className={styles.djangoTx}>
        <code>transaction.atomic() + on_commit(queue_notification) · Cupos consistentes</code>
      </div>
    </div>
  );
}

/* 23. Methodologies: Tablero Kanban interactivo con columnas y WIP */
function MethodologiesBody(_props: BodyProps) {
  return (
    <div className={styles.kanbanLayout}>
      <div className={styles.kanbanHeader}>
        <span>TABLERO AGILE / KANBAN</span>
        <small>Flujo continuo con límite WIP</small>
      </div>
      <div className={styles.kanbanColumns}>
        <div className={styles.kanbanCol}>
          <header>BACKLOG (3)</header>
          <div className={styles.kanbanCard}>US-101: Auth</div>
          <div className={styles.kanbanCard}>US-102: Telemetry</div>
        </div>
        <div className={styles.kanbanCol}>
          <header>READY (1)</header>
          <div className={styles.kanbanCard}>US-103: API Gate</div>
        </div>
        <div className={`${styles.kanbanCol} ${styles.kanbanColWip}`}>
          <header>WIP (LÍMITE: 2) [2/2]</header>
          <div className={`${styles.kanbanCard} ${styles.kanbanCardActive}`}>US-104: Payment Fix</div>
          <div className={`${styles.kanbanCard} ${styles.kanbanCardActive}`}>US-105: Hexgate Refactor</div>
        </div>
        <div className={styles.kanbanCol}>
          <header>HECHO (✓)</header>
          <div className={styles.kanbanCardDone}>US-99: Core Init</div>
        </div>
      </div>
      <div className={styles.kanbanMetric}>
        <span>Lead Time: 2.4 días · Cycle Time: 1.1 días · Sin cuellos de botella</span>
      </div>
    </div>
  );
}

/* 24. Programming Fundamentals: Diagrama de flujo estructurado */
function FundamentalsBody(_props: BodyProps) {
  return (
    <div className={styles.flowchartLayout}>
      <div className={styles.flowchartHeader}>
        <span>DIAGRAMA DE FLUJO ESTRUCTURADO</span>
        <small>Secuencia, Selección e Iteración</small>
      </div>
      <div className={styles.flowchartNodes}>
        <div className={styles.fcTerminal}>INICIO: Recibir Minutos</div>
        <div className={styles.fcArrow}>↓</div>
        <div className={styles.fcProcess}>base = 5.00</div>
        <div className={styles.fcArrow}>↓</div>
        <div className={styles.fcDecision}>
          <span>¿minutos &lt;= 30?</span>
          <div className={styles.fcBranches}>
            <div className={styles.fcBranchYes}>SÍ ➔ tarifa = base</div>
            <div className={styles.fcBranchNo}>NO ➔ tarifa = base + extra</div>
          </div>
        </div>
        <div className={styles.fcArrow}>↓</div>
        <div className={styles.fcTerminal}>FIN: Retornar Tarifa</div>
      </div>
    </div>
  );
}

/* 25. Java: Arquitectura HotSpot JVM con regiones de memoria GC */
function JavaBody(_props: BodyProps) {
  return (
    <div className={styles.jvmLayout}>
      <div className={styles.jvmHeader}>
        <span>HOTSPOT JVM ARCHITECTURE &amp; GENERATIONAL GC</span>
        <small>JDK 21 LTS · G1 / ZGC</small>
      </div>
      <div className={styles.jvmArchitecture}>
        <div className={styles.jvmSubsystem}>
          <header>CLASSLOADER &amp; JIT</header>
          <code>Bytecode ➔ C1 Compiler (Tier 3) ➔ C2 HotSpot (Tier 4)</code>
        </div>
        <div className={styles.jvmHeap}>
          <header>HEAP MEMORY REGIONS</header>
          <div className={styles.jvmSpaces}>
            <div className={styles.jvmEden}>
              <b>Eden Space</b>
              <small>New Objects (8ms GC)</small>
            </div>
            <div className={styles.jvmSurvivor}>
              <b>Survivor (S0/S1)</b>
              <small>Tenuring Threshold</small>
            </div>
            <div className={styles.jvmOld}>
              <b>Tenured (Old Gen)</b>
              <small>Long-lived singletons</small>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.jvmJfr}>
        <code>JDK Flight Recorder (JFR): Cero fugas · p95 latencia 11ms</code>
      </div>
    </div>
  );
}

/* 26. Scala: Case classes, pattern matching exhaustivo y linearización de traits */
function ScalaBody(_props: BodyProps) {
  return (
    <div className={styles.scalaLayout}>
      <div className={styles.scalaAdt}>
        <div className={styles.scalaHeader}>
          <span>CASE CLASSES &amp; PATTERN MATCHING EXHAUSTIVO</span>
          <code>sealed trait Event</code>
        </div>
        <div className={styles.scalaCodeBlock}>
          <code>case class OrderCreated(id: Long, total: BigDecimal) extends Event</code>
          <code>case class OrderCancelled(id: Long, reason: String) extends Event</code>
          <div className={styles.scalaMatch}>
            <code>event match &#123;</code>
            <code>  case OrderCreated(id, total) =&gt; emitPayment(id, total)</code>
            <code>  case OrderCancelled(id, r)   =&gt; rollback(id, r)</code>
            <code>&#125;</code>
          </div>
        </div>
      </div>
      <div className={styles.scalaTraits}>
        <span>Trait Linearization: EventStream with Checkpointing with Logging</span>
      </div>
    </div>
  );
}

/* 27. Haskell: Thunks de evaluación perezosa y encadenamiento monádico */
function HaskellBody(_props: BodyProps) {
  return (
    <div className={styles.haskellLayout}>
      <div className={styles.haskellThunks}>
        <div className={styles.haskellHeader}>
          <span>EVALUACIÓN PEREZOSA (LAZY EVALUATION) &amp; THUNKS</span>
          <code>pure functional · call-by-need</code>
        </div>
        <div className={styles.haskellNodes}>
          <div className={styles.haskellThunk}>Thunk: (map validate configs)</div>
          <div className={styles.haskellForceArrow}>⬇ Forzar a WHNF por demanda de I/O</div>
          <div className={styles.haskellValue}>ValidatedConfig [Port 8080, Mode Prod]</div>
        </div>
      </div>
      <div className={styles.haskellMonad}>
        <code>Monad Bind Pipeline: decode &gt;=&gt; validate &gt;=&gt; bootService (bracket safety)</code>
      </div>
    </div>
  );
}

/* 28. Subversion: Repositorio centralizado con árbol de rutas y revisiones atómicas */
function SubversionBody(_props: BodyProps) {
  return (
    <div className={styles.svnLayout}>
      <div className={styles.svnCentral}>
        <div className={styles.svnHeader}>
          <span>REPOSITORIO CENTRALIZADO APACHE SUBVERSION</span>
          <code>svn://repo.piltover.gov/project</code>
        </div>
        <div className={styles.svnTree}>
          <div className={styles.svnDir}>/trunk (Desarrollo activo)</div>
          <div className={styles.svnDir}>/branches/release-1.8 (Mantenimiento)</div>
          <div className={styles.svnDir}>/tags/v1.8.6 (Snapshot inmutable)</div>
        </div>
      </div>
      <div className={styles.svnRevisionLine}>
        <span>REVISIÓN GLOBAL ATÓMICA:</span>
        <div className={styles.svnRevs}>
          <div className={styles.svnRev}>r184</div>
          <i>➔</i>
          <div className={styles.svnRev}>r185</div>
          <i>➔</i>
          <div className={`${styles.svnRev} ${styles.svnRevActive}`}>r186 (HEAD)</div>
        </div>
      </div>
    </div>
  );
}

/* 29. Raku: Gramáticas con reglas y tokens, y evaluación cuántica por junctions */
function RakuBody(_props: BodyProps) {
  return (
    <div className={styles.rakuLayout}>
      <div className={styles.rakuGrammar}>
        <div className={styles.rakuHeader}>
          <span>GRAMÁTICAS FORMALES &amp; JUNCTIONS CUÁNTICAS</span>
          <code>grammar ArcaneSyntax &#123; ... &#125;</code>
        </div>
        <div className={styles.rakuTokens}>
          <div className={styles.rakuToken}>rule TOP &#123; &lt;command&gt; &lt;priority&gt; &#125;</div>
          <div className={styles.rakuToken}>token priority &#123; \d+ &#125;</div>
          <div className={styles.rakuJunction}>
            <span>Junction Superposition:</span>
            <code>if $level == any(1, 3, 7) &#123; trigger_alarm() &#125;</code>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 30. LaTeX: Tipografía matemática de dos pasadas con cajas y pegamento TeX */
function LatexBody(_props: BodyProps) {
  return (
    <div className={styles.latexLayout}>
      <div className={styles.latexEngine}>
        <div className={styles.latexHeader}>
          <span>MOTOR TIPOGRÁFICO TEX (ALGORITMO CAJA Y COLA)</span>
          <code>pdflatex / lualatex · 3 Pasadas</code>
        </div>
        <div className={styles.latexBoxes}>
          <div className={styles.latexBoxItem}>Horizontal Boxes (HBox: Palabras)</div>
          <div className={styles.latexGlueItem}>Glue (Espaciado elástico)</div>
          <div className={styles.latexBoxItem}>Vertical Boxes (VBox: Párrafos)</div>
        </div>
      </div>
      <div className={styles.latexOutput}>
        <span>Salida Vectorial: PDF accesible con referencias cruzadas resueltas sin citas huérfanas</span>
      </div>
    </div>
  );
}

/* Despacho individual sin duplicaciones para las 30 colecciones */
function SceneBody({ id, config, shouldAnimate }: { id: NewLearningActionSceneId; config: SceneConfig; shouldAnimate: boolean }) {
  const props = { config, shouldAnimate };
  switch (id) {
    case "sql": return <SqlBody {...props} />;
    case "nosql": return <NosqlBody {...props} />;
    case "blockchain": return <BlockchainBody {...props} />;
    case "operating-systems": return <OperatingSystemsBody {...props} />;
    case "assembly": return <AssemblyBody {...props} />;
    case "rust": return <RustBody {...props} />;
    case "erlang": return <ErlangBody {...props} />;
    case "kotlin": return <KotlinBody {...props} />;
    case "go": return <GoBody {...props} />;
    case "php": return <PhpBody {...props} />;
    case "perl": return <PerlBody {...props} />;
    case "ruby": return <RubyBody {...props} />;
    case "android": return <AndroidBody {...props} />;
    case "qwik": return <QwikBody {...props} />;
    case "scratch": return <ScratchBody {...props} />;
    case "angular": return <AngularBody {...props} />;
    case "lisp": return <LispBody {...props} />;
    case "algorithms": return <AlgorithmsBody {...props} />;
    case "artificial-intelligence": return <AiBody {...props} />;
    case "r": return <RBody {...props} />;
    case "mathematics": return <MathematicsBody {...props} />;
    case "django": return <DjangoBody {...props} />;
    case "methodologies": return <MethodologiesBody {...props} />;
    case "programming-fundamentals": return <FundamentalsBody {...props} />;
    case "java": return <JavaBody {...props} />;
    case "scala": return <ScalaBody {...props} />;
    case "haskell": return <HaskellBody {...props} />;
    case "subversion": return <SubversionBody {...props} />;
    case "raku": return <RakuBody {...props} />;
    case "latex": return <LatexBody {...props} />;
    default: return <FundamentalsBody {...props} />;
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

          <SceneBody id={resolvedId} config={config} shouldAnimate={shouldAnimate} />

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
