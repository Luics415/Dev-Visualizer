import type { SceneVariant, StudyConcept, StudyScene } from "./conceptTypes";

export type ConceptSeed = readonly [title: string, description: string];
export type ConceptChapterSeed = {
  section: string;
  concepts: readonly ConceptSeed[];
};

const allVariants: readonly SceneVariant[] = [
  "pipeline", "layers", "compare", "timeline", "tree", "gate", "stack", "orbit", "matrix", "browser", "flow", "cards", "terminal", "document",
  "anatomy", "request", "queue", "cache", "state-machine", "network", "filesystem", "compiler", "container", "database", "scheduler", "signal", "lifecycle", "trace",
  "memory-map", "runtime-dispatch", "parallel-grid", "workflow", "interface-flow", "literate-weave",
  "signal-matrix", "relation-loom", "concept-constellation", "assurance-rack", "event-fabric", "artifact-passport",
];

const families: Record<SceneVariant, string> = {
  pipeline: "flujo de transformación",
  layers: "capas internas",
  compare: "comparativa técnica",
  timeline: "secuencia operativa",
  tree: "jerarquía y dependencias",
  gate: "validación y decisión",
  stack: "acumulación de recursos",
  orbit: "ecosistema coordinado",
  matrix: "tabla de estados",
  browser: "superficie de aplicación",
  flow: "flujo de ejecución",
  cards: "contratos coordinados",
  terminal: "diagnóstico operativo",
  document: "configuración declarativa",
  anatomy: "anatomía del concepto",
  request: "ida y vuelta",
  queue: "cola y consumidor",
  cache: "memoria intermedia",
  "state-machine": "máquina de estados",
  network: "topología y tráfico",
  filesystem: "árbol de recursos",
  compiler: "análisis y emisión",
  container: "aislamiento sobre host",
  database: "consulta e índice",
  scheduler: "planificación de trabajo",
  signal: "propagación de eventos",
  lifecycle: "ciclo de vida",
  trace: "evidencia y latencia",
  "memory-map": "mapa de memoria",
  "runtime-dispatch": "despacho de runtime",
  "parallel-grid": "cuadrícula paralela",
  workflow: "workflow y decisiones",
  "interface-flow": "flujo de interfaz",
  "literate-weave": "tejido literario",
  "signal-matrix": "matriz de señales",
  "relation-loom": "telar relacional",
  "concept-constellation": "constelación de mecanismos",
  "assurance-rack": "espectro de verificación",
  "event-fabric": "tejido de eventos",
  "artifact-passport": "pasaporte del artefacto",
};

const layouts = ["standard", "wide", "standard", "compact", "wide", "standard", "feature"] as const;

function short(value: string, fallback: string) {
  const cleaned = value
    .replace(/[()\/:;.]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .join(" ");
  return cleaned || fallback;
}

function stableIndex(value: string, length: number) {
  let hash = 0;
  for (const character of value) hash = ((hash << 5) - hash + character.charCodeAt(0)) | 0;
  return Math.abs(hash) % length;
}

function pushUnique(target: SceneVariant[], variants: readonly SceneVariant[]) {
  variants.forEach((variant) => {
    if (!target.includes(variant)) target.push(variant);
  });
}

export function semanticCandidates(title: string, description: string, section: string): readonly SceneVariant[] {
  const titleText = title.toLocaleLowerCase("es");
  const text = `${title} ${description} ${section}`.toLocaleLowerCase("es");
  const titleHas = (...words: string[]) => words.some((word) => titleText.includes(word));
  const has = (...words: string[]) => words.some((word) => text.includes(word));
  const candidates: SceneVariant[] = [];

  if (has("investigación y definición", "arquitectura de información", "interacción y flujos", "sistema visual y componentes", "accesibilidad e inclusión", "prototipado y validación", "entrega y operación")) {
    pushUnique(candidates, ["interface-flow", "browser", "cards", "flow", "state-machine", "gate", "compare", "timeline"]);
  }
  if (has("base y configuración", "grid y layout", "utilidades y tokens", "componentes y formularios", "plugins y conducta", "personalización y producción")) {
    pushUnique(candidates, ["interface-flow", "browser", "cards", "document", "layers", "flow", "gate", "compare"]);
  }
  if (has("arquitectura 1.x", "templates y digest", "directivas y componentes", "datos y navegación", "calidad y seguridad", "migración gradual")) {
    pushUnique(candidates, ["runtime-dispatch", "state-machine", "lifecycle", "signal", "browser", "layers", "trace", "workflow"]);
  }
  if (has("runtime y event loop", "módulos y paquetes", "asincronía y errores", "buffers, streams y red", "paralelismo y procesos", "operación y seguridad")) {
    pushUnique(candidates, ["runtime-dispatch", "scheduler", "queue", "network", "pipeline", "flow", "layers", "trace"]);
  }
  if (has("ciclo y contenedor", "http y entrada", "datos y consistencia", "identidad y seguridad", "trabajo asíncrono", "calidad y producción")) {
    pushUnique(candidates, ["workflow", "request", "database", "gate", "queue", "layers", "runtime-dispatch", "trace"]);
  }
  if (has("modelo de ejecución", "entrada y contratos", "datos y control", "composición y personas", "credenciales y seguridad", "errores y confiabilidad", "operación y escala")) {
    pushUnique(candidates, ["workflow", "flow", "gate", "queue", "trace", "state-machine", "cards", "network"]);
  }

  if (titleHas("qué es", "introducción", "fundamento", "arquitectura", "anatomía") || has("partes de", "componentes de")) pushUnique(candidates, ["anatomy", "layers", "tree", "orbit", "cards"]);
  if (titleHas("request", "response", "http", "endpoint", "petición", "respuesta", "proxy", "upstream", "webhook") || has("solicitud HTTP", "cliente y servidor")) pushUnique(candidates, ["request", "network", "pipeline", "flow", "timeline"]);
  if (titleHas("queue", "cola", "worker", "job", "mensaje", "sqs", "pub/sub", "stream") || has("consumidor", "productor")) pushUnique(candidates, ["queue", "scheduler", "pipeline", "flow", "stack"]);
  if (titleHas("cache", "caché", "memo", "etag", "stale", "cdn") || has("copia vigente", "cache hit")) pushUnique(candidates, ["cache", "compare", "gate", "timeline", "database"]);
  if (titleHas("estado", "state", "status", "transition", "transición", "promise") || has("máquina de estados")) pushUnique(candidates, ["state-machine", "timeline", "matrix", "flow", "lifecycle"]);
  if (titleHas("vpc", "subnet", "network", "red", "tcp", "udp", "socket", "dns", "route", "routing", "puerto", "load balancer") || has("topología de red")) pushUnique(candidates, ["network", "request", "tree", "orbit", "flow"]);
  if (titleHas("filesystem", "archivo", "directorio", "path", "ruta", "inode", "mount", "volumen") || has("sistema de archivos")) pushUnique(candidates, ["filesystem", "tree", "layers", "document", "terminal"]);
  if (titleHas("typescript", "compiler", "compil", "checker", "parser", "ast", "source map", "build") || has("análisis estático")) pushUnique(candidates, ["compiler", "pipeline", "layers", "document", "trace"]);
  if (titleHas("docker", "container", "contenedor", "imagen", "pod", "namespace", "cgroup", "máquina virtual", "vm") || has("aislamiento del host")) pushUnique(candidates, ["container", "layers", "stack", "network", "lifecycle"]);
  if (titleHas("database", "base de datos", "sql", "query", "consulta", "índice", "index", "tabla", "transaction", "firestore", "redis") || has("persistencia de datos")) pushUnique(candidates, ["database", "tree", "matrix", "gate", "trace"]);
  if (titleHas("scheduler", "event loop", "cpu", "thread", "proceso", "concurrencia", "batching") || has("planificación")) pushUnique(candidates, ["scheduler", "queue", "timeline", "flow", "state-machine"]);
  if (titleHas("evento", "event", "callback", "listener", "hook", "señal", "notification", "notificación") || has("propaga un evento")) pushUnique(candidates, ["signal", "orbit", "flow", "timeline", "network"]);
  if (titleHas("lifecycle", "ciclo de vida", "mount", "unmount", "rollout", "release", "deployment", "render cycle") || has("etapas de vida")) pushUnique(candidates, ["lifecycle", "timeline", "state-machine", "flow", "orbit"]);
  if (titleHas("debug", "log", "trace", "métrica", "metric", "observabilidad", "error", "diagnóstico", "profil") || has("evidencia operativa")) pushUnique(candidates, ["trace", "terminal", "timeline", "tree", "matrix"]);
  if (titleHas("puntero", "pointer", "memoria", "heap", "stack", "malloc", "alloc", "registro", "dma", "layout")) pushUnique(candidates, ["memory-map", "layers", "filesystem", "anatomy", "trace"]);
  if (titleHas("runtime", "dispatch", "selector", "mensaje", "arc", "jit", "aot", "garbage collector", "vtable")) pushUnique(candidates, ["runtime-dispatch", "signal", "scheduler", "layers", "lifecycle"]);
  if (titleHas("paralel", "simd", "vector", "processor", "procesador", "domain", "grid")) pushUnique(candidates, ["parallel-grid", "scheduler", "matrix", "flow", "timeline"]);
  if (titleHas("workflow", "pipeline", "node", "nodo", "approval", "aprobación", "reintento")) pushUnique(candidates, ["workflow", "flow", "gate", "queue", "trace"]);
  if (titleHas("wireframe", "prototipo", "usuario", "usabilidad", "interfaz", "grid", "componente visual")) pushUnique(candidates, ["interface-flow", "browser", "flow", "cards", "anatomy"]);
  if (titleHas("cweb", "ctangle", "cweave", "literaria", "literate", "change file", "tex")) pushUnique(candidates, ["literate-weave", "document", "compiler", "pipeline", "tree"]);
  if (titleHas("join", "relación", "relacional", "clave foránea", "cardinalidad", "tupla", "normalización") || has("filas coincidentes", "álgebra relacional")) pushUnique(candidates, ["relation-loom", "database", "matrix", "pipeline", "compare"]);
  if (titleHas("test", "prueba", "testing", "fuzz", "cobertura", "sast", "dast", "contract", "contrato") || has("verificación automática", "quality gate")) pushUnique(candidates, ["assurance-rack", "gate", "trace", "matrix", "pipeline"]);
  if (titleHas("evento", "event", "broker", "partición", "partition", "consumer", "consumidor", "producer", "productor", "kafka", "webhook", "offset", "replay") || has("arquitectura dirigida por eventos")) pushUnique(candidates, ["event-fabric", "queue", "signal", "network", "workflow"]);
  if (titleHas("ip", "dns", "nat", "dhcp", "cidr", "subnet", "puerto", "tcp", "udp", "tls", "firewall", "vpn", "routing") || has("tráfico de red", "segmentación de red")) pushUnique(candidates, ["signal-matrix", "network", "request", "matrix", "trace"]);
  if (titleHas("artefacto", "artifact", "sbom", "firma", "attestation", "provenance", "digest", "promoción", "supply chain") || has("build reproducible", "binario inmutable")) pushUnique(candidates, ["artifact-passport", "pipeline", "gate", "document", "trace"]);
  if (titleHas("ecosistema", "plataforma", "módulo", "biblioteca", "runtime", "componentes") || has("mecanismos coordinados")) pushUnique(candidates, ["concept-constellation", "orbit", "anatomy", "cards", "layers"]);
  if (titleHas("auth", "valid", "permission", "permiso", "policy", "política", "rule", "schema", "cors", "guard") || has("autoriza", "rechaza", "condición")) pushUnique(candidates, ["gate", "compare", "matrix", "document", "flow"]);
  if (titleHas("versus", " vs ", "compar", "trade-off", "elegir", "cuándo usar")) pushUnique(candidates, ["compare", "cards", "matrix", "tree", "timeline"]);
  if (titleHas("jerarqu", "árbol", "tree", "dependenc", "herencia")) pushUnique(candidates, ["tree", "layers", "orbit", "filesystem", "cards"]);
  if (titleHas("layer", "capa", "stack")) pushUnique(candidates, ["layers", "stack", "anatomy", "tree", "container"]);
  if (titleHas("config", "manifest", "yaml", "json", "declar", "archivo de configuración")) pushUnique(candidates, ["document", "cards", "compiler", "gate", "flow"]);

  if (candidates.length < 6) {
    const start = stableIndex(text, allVariants.length);
    for (let offset = 0; offset < allVariants.length && candidates.length < 8; offset += 1) {
      pushUnique(candidates, [allVariants[(start + offset * 5) % allVariants.length] ?? "pipeline"]);
    }
  }

  return candidates;
}

export function semanticVariant(title: string, description: string, section: string): SceneVariant {
  return semanticCandidates(title, description, section)[0] ?? "pipeline";
}

function chooseBalancedVariant(
  candidates: readonly SceneVariant[],
  globalCounts: Map<SceneVariant, number>,
  sectionCounts: Map<SceneVariant, number>,
  recent: readonly SceneVariant[],
) {
  return [...candidates].sort((a, b) => {
    const score = (variant: SceneVariant) =>
      (sectionCounts.get(variant) ?? 0) * 1.6 +
      (globalCounts.get(variant) ?? 0) * .24 +
      (recent.includes(variant) ? 3.2 : 0) +
      candidates.indexOf(variant) * .13;
    return score(a) - score(b);
  })[0] ?? "pipeline";
}

function sceneNodes(variant: SceneVariant, title: string, section: string): readonly string[] {
  const concept = short(title, "concepto");
  const context = short(section, "contexto");

  switch (variant) {
    case "pipeline": return [`entrada|${concept}`, `motor|${context}`, "transformación|estado", "resultado|salida"];
    case "layers": return [`interfaz|${concept}`, `servicio|${context}`, "runtime|mecanismo", "sistema|recurso"];
    case "compare": return [`${concept}|opción A`, "alternativa|opción B", "trade-off|criterio", "elección|contexto"];
    case "timeline": return ["inicio|señal", `${concept}|proceso`, "transición|cambio", "fin|evidencia"];
    case "tree": return [`${concept}|raíz`, "regla|rama", "recurso|rama", "resultado|hoja"];
    case "gate": return ["dato|entrada", "contexto|metadato", "política|condición", `${concept}|check`];
    case "stack": return ["base|recurso", `${concept}|capa`, "estado|capa", "salida|capa"];
    case "orbit": return [`${concept}|núcleo`, "cliente|actor", "servicio|actor", "operación|actor"];
    case "matrix": return ["entrada|variable", "estado|variable", "regla|variable", `${concept}|resultado`];
    case "browser": return [`${concept}|vista`, "evento|entrada", "runtime|proceso", "respuesta|salida"];
    case "flow": return ["config|entrada", `${concept}|proceso`, "runtime|aplicación", "evidencia|resultado"];
    case "cards": return [`${concept}|contrato`, "config|opción", "runtime|efecto", "operación|evidencia"];
    case "terminal": return [`inspect ${concept}|observar`, "status|estado", "logs|evidencia", "verify|confirmar"];
    case "document": return [`${concept}|declaración`, "propiedad|valor", "regla|alcance", "runtime|resultado"];
    case "anatomy": return [`${concept}|núcleo`, "entrada|parte", "mecanismo|parte", "salida|parte"];
    case "request": return ["cliente|origen", `${concept}|request`, "servidor|destino", "response|resultado"];
    case "queue": return ["productor|envía", "mensaje|espera", "buffer|ordena", "worker|consume"];
    case "cache": return ["cliente|consulta", "cache|lookup", "origen|fallback", "dato|reutilizado"];
    case "state-machine": return ["idle|inicio", "pending|transición", "success|resultado", "error|alternativa"];
    case "network": return ["cliente|nodo", "gateway|ruta", "servicio|nodo", "recurso|destino"];
    case "filesystem": return ["/|raíz", `${context}|directorio`, `${concept}|recurso`, "metadata|inode"];
    case "compiler": return ["source|entrada", "checker|análisis", "emit|salida", `${concept}|evidencia`];
    case "container": return ["host|máquina", "kernel|compartido", `${concept}|aislado`, "proceso|runtime"];
    case "database": return ["query|intención", "index|camino", "table|datos", `${concept}|resultado`];
    case "scheduler": return ["ready|cola", "task|trabajo", "CPU|ejecuta", `${concept}|estado`];
    case "signal": return ["source|evento", "listener|suscriptor", "handler|reacción", `${concept}|efecto`];
    case "lifecycle": return ["crear|inicio", "activar|uso", "actualizar|cambio", "retirar|fin"];
    case "trace": return ["entrada|span", `${concept}|span`, "dependencia|span", "resultado|evidencia"];
    case "memory-map": return ["0x1000|entrada", `${concept}|dirección`, "0x1008|estado", "0x1010|resultado"];
    case "runtime-dispatch": return ["caller|mensaje", `${concept}|dispatch`, "runtime|resolución", "method|ejecución"];
    case "parallel-grid": return ["domain|datos", "PE 0|trabajo", "PE 1|trabajo", `${concept}|reduce`];
    case "workflow": return ["trigger|inicio", `${concept}|nodo`, "policy|decisión", "output|evidencia"];
    case "interface-flow": return ["necesidad|entrada", `${concept}|interfaz`, "feedback|estado", "tarea|resultado"];
    case "literate-weave": return ["narrativa|secciones", `${concept}|WEB`, "CTANGLE|programa", "CWEAVE|documento"];
    case "signal-matrix": return ["origen|señal", `${concept}|ruta`, "control|política", "destino|respuesta"];
    case "relation-loom": return ["tabla A|tuplas", `${concept}|predicado`, "tabla B|tuplas", "resultado|filas"];
    case "concept-constellation": return [`${concept}|núcleo`, "mecanismo|órbita", "contrato|órbita", "evidencia|órbita"];
    case "assurance-rack": return ["smoke|rápida", "contract|frontera", `${concept}|profunda`, "security|adversarial"];
    case "event-fabric": return ["producer|evento", "broker|partición", "consumer|offset", `${concept}|evidencia`];
    case "artifact-passport": return ["commit|entrada", "checks|evidencia", "digest|identidad", `${concept}|promoción`];
  }
}

export function createStudyScene(title: string, description: string, section: string): StudyScene {
  const variant = semanticVariant(title, description, section);
  return {
    variant,
    code: title,
    nodes: sceneNodes(variant, title, section),
    outcome: title.toLocaleLowerCase("es"),
    caption: description,
  };
}

export function createConceptCollection(chapters: readonly ConceptChapterSeed[]): readonly StudyConcept[] {
  let globalIndex = 0;
  const globalCounts = new Map<SceneVariant, number>();
  const recent: SceneVariant[] = [];

  return chapters.flatMap((chapter) => {
    const sectionCounts = new Map<SceneVariant, number>();

    return chapter.concepts.map(([title, description], conceptIndex) => {
      const candidates = semanticCandidates(title, description, chapter.section);
      const variant = chooseBalancedVariant(candidates, globalCounts, sectionCounts, recent.slice(-2));
      const layout = layouts[(globalIndex + conceptIndex) % layouts.length] ?? "standard";
      globalIndex += 1;
      globalCounts.set(variant, (globalCounts.get(variant) ?? 0) + 1);
      sectionCounts.set(variant, (sectionCounts.get(variant) ?? 0) + 1);
      recent.push(variant);

      return {
        title,
        description,
        section: chapter.section,
        family: families[variant],
        layout,
        scene: {
          variant,
          code: title,
          nodes: sceneNodes(variant, title, chapter.section),
          outcome: title.toLocaleLowerCase("es"),
          caption: description,
        },
      } satisfies StudyConcept;
    });
  });
}
