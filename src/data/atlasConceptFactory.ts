import type { SceneVariant, StudyConcept, StudyScene } from "./conceptTypes";

export type ConceptSeed = readonly [title: string, description: string];
export type ConceptChapterSeed = {
  section: string;
  concepts: readonly ConceptSeed[];
};

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

function pushUnique(target: SceneVariant[], variants: readonly SceneVariant[]) {
  variants.forEach((variant) => {
    if (!target.includes(variant)) target.push(variant);
  });
}

export function semanticCandidates(title: string, description: string, section: string, includeNeutralFallback = true): readonly SceneVariant[] {
  const titleText = title.toLocaleLowerCase("es");
  const sectionText = section.toLocaleLowerCase("es");
  const text = `${title} ${description} ${section}`.toLocaleLowerCase("es");
  const titleHas = (...words: string[]) => words.some((word) => titleText.includes(word));
  const sectionIs = (...names: string[]) => names.some((name) => sectionText === name);
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
  if (has("datos, estructura y significado", "fronteras entre xml, xsd y json", "anatomía de un documento xml", "xml bien formado", "modelo de información xml", "namespaces xml", "entidades, dtd y estructura física")) {
    pushUnique(candidates, ["document", "tree", "anatomy", "concept-constellation", "compare", "layers", "gate", "literate-weave"]);
  }
  if (has("modelos de parsing xml", "xpath 3.1", "transformación con xslt", "serialización y canonicalización xml", "vocabularios y protocolos xml", "seguridad xml", "xml en producción")) {
    pushUnique(candidates, ["compiler", "pipeline", "tree", "literate-weave", "assurance-rack", "trace", "signal-matrix", "artifact-passport"]);
  }
  if (has("propósito y anatomía de xsd", "tipos simples de xsd", "restricciones y facets xsd", "tipos complejos y modelos de contenido", "cardinalidad, ausencia y nil", "reutilización y composición xsd", "namespaces y conjuntos de schemas xsd")) {
    pushUnique(candidates, ["gate", "assurance-rack", "matrix", "tree", "relation-loom", "document", "layers", "concept-constellation"]);
  }
  if (has("derivación y polimorfismo xsd", "identidad y relaciones xsd", "capacidades de xsd 1.1", "psvi y semántica de validación", "evolución de schemas xsd", "patrones de diseño xsd")) {
    pushUnique(candidates, ["relation-loom", "tree", "gate", "runtime-dispatch", "assurance-rack", "compare", "lifecycle", "concept-constellation"]);
  }
  if (has("sintaxis json desde cero", "strings, unicode y escapes json", "números json", "objetos, arrays y estados json", "parsing y serialización json")) {
    pushUnique(candidates, ["document", "cards", "matrix", "compiler", "anatomy", "compare", "pipeline", "signal-matrix"]);
  }
  if (has("fundamentos de json schema 2020-12", "tipos y restricciones json schema", "objetos en json schema", "arrays y composición json schema", "referencias y vocabularios json schema", "resultado y evolución json schema")) {
    pushUnique(candidates, ["gate", "assurance-rack", "concept-constellation", "orbit", "tree", "matrix", "document", "trace"]);
  }
  if (has("json pointer, patch y merge patch", "consultas, perfiles y secuencias json", "json-ld y semántica enlazada", "seguridad json", "json en producción", "mapeo entre xml y json", "contratos en apis, configuración y eventos", "validación, pruebas y operación integral")) {
    pushUnique(candidates, ["timeline", "state-machine", "trace", "artifact-passport", "relation-loom", "assurance-rack", "pipeline", "event-fabric"]);
  }

  // Currículos extensos: cada regla parte de un capítulo o mecanismo real.
  // Los grupos se mantienen separados para que la escena represente la causa
  // interna del concepto y no una familia neutra elegida para satisfacer cifras.
  if (sectionIs("pensamiento computacional", "control y composición", "diseño paso a paso", "modularidad y contratos")) {
    pushUnique(candidates, ["flow", "tree", "cards", "gate", "anatomy", "workflow", "assurance-rack", "timeline"]);
  }
  if (sectionIs("estado, efectos y tiempo")) {
    pushUnique(candidates, ["state-machine", "timeline", "signal", "lifecycle", "matrix", "flow", "trace"]);
  }
  if (sectionIs("estrategias de prueba")) {
    pushUnique(candidates, ["assurance-rack", "gate", "matrix", "trace", "compare", "workflow", "artifact-passport"]);
  }

  if (sectionIs("hashing en profundidad", "conjuntos y particiones", "ordenamiento y selección")) {
    pushUnique(candidates, ["matrix", "memory-map", "database", "tree", "cache", "compare", "trace"]);
  }
  if (sectionIs("grafos ponderados y redes")) {
    pushUnique(candidates, ["network", "tree", "workflow", "trace", "matrix", "queue", "timeline"]);
  }
  if (sectionIs("procesamiento de texto")) {
    pushUnique(candidates, ["compiler", "pipeline", "state-machine", "tree", "trace", "matrix", "flow"]);
  }
  if (sectionIs("geometría computacional")) {
    pushUnique(candidates, ["parallel-grid", "matrix", "flow", "anatomy", "trace", "compare", "tree"]);
  }
  if (sectionIs("programación dinámica avanzada")) {
    pushUnique(candidates, ["matrix", "cache", "tree", "pipeline", "trace", "timeline", "memory-map"]);
  }
  if (sectionIs("complejidad computacional")) {
    pushUnique(candidates, ["assurance-rack", "tree", "compare", "gate", "workflow", "matrix", "timeline"]);
  }

  if (sectionIs("lenguaje matemático", "teoría de números", "combinatoria aplicada")) {
    pushUnique(candidates, ["assurance-rack", "tree", "relation-loom", "matrix", "flow", "gate", "document"]);
  }
  if (sectionIs("representación numérica")) {
    pushUnique(candidates, ["memory-map", "matrix", "compare", "signal-matrix", "trace", "anatomy", "gate"]);
  }
  if (sectionIs("álgebra booleana y circuitos")) {
    pushUnique(candidates, ["signal-matrix", "gate", "matrix", "flow", "anatomy", "compiler", "parallel-grid"]);
  }
  if (sectionIs("teoría de grafos")) {
    pushUnique(candidates, ["network", "tree", "relation-loom", "matrix", "workflow", "compare", "assurance-rack"]);
  }
  if (sectionIs("probabilidad discreta", "inferencia estadística", "azar y evidencia")) {
    pushUnique(candidates, ["signal-matrix", "assurance-rack", "matrix", "timeline", "compare", "parallel-grid", "trace"]);
  }
  if (sectionIs("álgebra lineal computacional", "estructuras y cambio")) {
    pushUnique(candidates, ["parallel-grid", "matrix", "pipeline", "relation-loom", "memory-map", "trace", "compare"]);
  }
  if (sectionIs("cálculo numérico")) {
    pushUnique(candidates, ["timeline", "pipeline", "trace", "parallel-grid", "matrix", "state-machine", "compare"]);
  }
  if (sectionIs("optimización avanzada", "optimización computacional")) {
    pushUnique(candidates, ["timeline", "parallel-grid", "trace", "pipeline", "compare", "gate", "matrix"]);
  }
  if (sectionIs("fundamentos criptográficos")) {
    pushUnique(candidates, ["assurance-rack", "artifact-passport", "gate", "matrix", "signal-matrix", "pipeline", "compare"]);
  }

  if (sectionIs("principios y contexto", "scrum aplicado")) {
    pushUnique(candidates, ["cards", "workflow", "timeline", "gate", "orbit", "interface-flow"]);
  }
  if (sectionIs("sistema de trabajo", "kanban aplicado", "lean y teoría de colas")) {
    pushUnique(candidates, ["queue", "state-machine", "trace", "matrix", "workflow", "timeline", "compare"]);
  }
  if (sectionIs("cadencias y colaboración", "equipos y organizaciones")) {
    pushUnique(candidates, ["orbit", "signal", "interface-flow", "timeline", "cards", "event-fabric", "workflow"]);
  }
  if (sectionIs("extreme programming", "entrega y operaciones")) {
    pushUnique(candidates, ["pipeline", "assurance-rack", "artifact-passport", "workflow", "gate", "trace", "lifecycle"]);
  }
  if (sectionIs("descubrimiento de producto", "requisitos y alcance")) {
    pushUnique(candidates, ["interface-flow", "browser", "gate", "document", "cards", "workflow", "compare"]);
  }
  if (sectionIs("riesgo y gobernanza")) {
    pushUnique(candidates, ["assurance-rack", "gate", "trace", "workflow", "matrix", "artifact-passport", "document"]);
  }
  if (sectionIs("métricas orientadas a resultados")) {
    pushUnique(candidates, ["trace", "matrix", "compare", "timeline", "assurance-rack", "signal-matrix"]);
  }

  if (sectionIs("escenario y bloques", "geometría con sprites")) {
    pushUnique(candidates, ["interface-flow", "browser", "parallel-grid", "anatomy", "flow", "signal", "timeline"]);
  }
  if (sectionIs("estado y control", "modelo de eventos")) {
    pushUnique(candidates, ["state-machine", "signal", "event-fabric", "timeline", "matrix", "flow", "scheduler"]);
  }
  if (sectionIs("patrones con clones", "animación y audio", "física para juegos")) {
    pushUnique(candidates, ["lifecycle", "scheduler", "parallel-grid", "signal", "state-machine", "flow", "trace"]);
  }
  if (sectionIs("extensiones y mundo físico")) {
    pushUnique(candidates, ["signal-matrix", "network", "interface-flow", "request", "lifecycle", "gate", "trace"]);
  }
  if (sectionIs("interacción")) {
    pushUnique(candidates, ["interface-flow", "signal", "state-machine", "browser", "event-fabric", "flow", "gate"]);
  }

  if (sectionIs("ruby esencial", "semántica del lenguaje")) {
    pushUnique(candidates, ["runtime-dispatch", "anatomy", "flow", "compiler", "cards", "memory-map"]);
  }
  if (sectionIs("composición idiomática", "datos y enumeración")) {
    pushUnique(candidates, ["pipeline", "tree", "flow", "runtime-dispatch", "cards", "compare"]);
  }
  if (sectionIs("despacho dinámico", "metaprogramación")) {
    pushUnique(candidates, ["runtime-dispatch", "compiler", "tree", "literate-weave", "trace", "anatomy"]);
  }
  if (sectionIs("empaquetado y operación")) {
    pushUnique(candidates, ["artifact-passport", "lifecycle", "trace", "workflow", "layers", "terminal"]);
  }

  if (sectionIs("fundamentos", "abstracciones", "sistema de tipos expresivo", "traits y coherencia", "abstracciones de costo cero")) {
    pushUnique(candidates, ["compiler", "tree", "gate", "concept-constellation", "runtime-dispatch", "compare", "assurance-rack"]);
  }
  if (sectionIs("préstamos en diseños reales", "unsafe con invariantes")) {
    pushUnique(candidates, ["memory-map", "gate", "lifecycle", "assurance-rack", "trace", "layers", "state-machine"]);
  }
  if (sectionIs("ownership avanzado")) {
    pushUnique(candidates, ["memory-map", "lifecycle", "gate", "tree", "runtime-dispatch", "trace", "state-machine"]);
  }
  if (sectionIs("macros y generación")) {
    pushUnique(candidates, ["compiler", "literate-weave", "tree", "document", "artifact-passport", "pipeline"]);
  }
  if (sectionIs("asincronía en profundidad")) {
    pushUnique(candidates, ["scheduler", "event-fabric", "queue", "state-machine", "lifecycle", "trace", "flow"]);
  }
  if (sectionIs("interoperabilidad")) {
    pushUnique(candidates, ["runtime-dispatch", "memory-map", "layers", "gate", "trace", "artifact-passport", "compare"]);
  }

  if (sectionIs("lenguaje moderno", "orientación a objetos")) {
    pushUnique(candidates, ["runtime-dispatch", "compiler", "tree", "cards", "gate", "anatomy", "flow"]);
  }
  if (sectionIs("despliegue", "operación y evolución")) {
    pushUnique(candidates, ["lifecycle", "artifact-passport", "workflow", "trace", "layers", "terminal", "gate"]);
  }

  if (sectionIs("evaluación", "composición", "typeclasses avanzadas", "efectos componibles")) {
    pushUnique(candidates, ["pipeline", "runtime-dispatch", "tree", "compiler", "flow", "assurance-rack", "memory-map"]);
  }

  if (sectionIs("go esencial", "tipos e interfaces")) {
    pushUnique(candidates, ["compiler", "anatomy", "cards", "runtime-dispatch", "memory-map", "flow"]);
  }
  if (sectionIs("patrones concurrentes", "cancelación y límites")) {
    pushUnique(candidates, ["scheduler", "event-fabric", "queue", "lifecycle", "state-machine", "trace", "workflow"]);
  }
  if (sectionIs("servicios de red")) {
    pushUnique(candidates, ["request", "network", "signal-matrix", "pipeline", "trace", "gate", "lifecycle"]);
  }
  if (sectionIs("toolchain")) {
    pushUnique(candidates, ["compiler", "artifact-passport", "pipeline", "document", "workflow", "trace"]);
  }
  if (sectionIs("operación de servicios")) {
    pushUnique(candidates, ["trace", "lifecycle", "terminal", "signal-matrix", "workflow", "gate", "network"]);
  }

  if (sectionIs("lenguaje", "aplicación", "objetos y composición")) {
    pushUnique(candidates, ["compiler", "runtime-dispatch", "interface-flow", "tree", "cards", "flow", "gate"]);
  }
  if (sectionIs("interoperabilidad jvm")) {
    pushUnique(candidates, ["layers", "runtime-dispatch", "compare", "compiler", "gate", "trace"]);
  }

  if (sectionIs("java esencial", "biblioteca y diseño")) {
    pushUnique(candidates, ["compiler", "runtime-dispatch", "cards", "tree", "flow", "gate", "anatomy"]);
  }
  if (sectionIs("jvm", "class files y carga")) {
    pushUnique(candidates, ["runtime-dispatch", "compiler", "layers", "memory-map", "lifecycle", "trace", "artifact-passport"]);
  }
  if (sectionIs("i/o y networking")) {
    pushUnique(candidates, ["request", "network", "filesystem", "pipeline", "signal-matrix", "trace", "queue"]);
  }

  if (sectionIs("r esencial", "semántica", "evaluación del lenguaje")) {
    pushUnique(candidates, ["matrix", "runtime-dispatch", "memory-map", "pipeline", "anatomy", "trace", "compare"]);
  }
  if (sectionIs("análisis", "modelado estadístico")) {
    pushUnique(candidates, ["matrix", "parallel-grid", "assurance-rack", "pipeline", "signal-matrix", "compare", "trace"]);
  }
  if (sectionIs("series temporales")) {
    pushUnique(candidates, ["timeline", "signal", "matrix", "trace", "pipeline", "compare", "state-machine"]);
  }
  if (sectionIs("aprendizaje automático")) {
    pushUnique(candidates, ["pipeline", "parallel-grid", "matrix", "assurance-rack", "trace", "workflow", "artifact-passport"]);
  }

  if (sectionIs("familias de arquitectura", "codificación y secciones", "modos de direccionamiento", "aritmética de bajo nivel")) {
    pushUnique(candidates, ["memory-map", "compiler", "anatomy", "signal-matrix", "flow", "matrix", "trace"]);
  }
  if (sectionIs("enlazado y carga")) {
    pushUnique(candidates, ["artifact-passport", "compiler", "memory-map", "layers", "lifecycle", "trace", "pipeline"]);
  }
  if (sectionIs("cómputo vectorial")) {
    pushUnique(candidates, ["parallel-grid", "memory-map", "scheduler", "matrix", "pipeline", "trace", "compare"]);
  }
  if (sectionIs("depuración binaria")) {
    pushUnique(candidates, ["terminal", "trace", "memory-map", "timeline", "tree", "signal-matrix", "assurance-rack"]);
  }

  if (sectionIs("erlang esencial", "semántica funcional")) {
    pushUnique(candidates, ["runtime-dispatch", "tree", "pipeline", "flow", "anatomy", "compiler"]);
  }
  if (sectionIs("otp", "árboles de supervisión")) {
    pushUnique(candidates, ["tree", "lifecycle", "state-machine", "workflow", "event-fabric", "trace", "orbit"]);
  }
  if (sectionIs("protocolos entre procesos")) {
    pushUnique(candidates, ["event-fabric", "queue", "network", "signal", "state-machine", "trace", "timeline"]);
  }

  if (sectionIs("entornos", "extensión del lenguaje")) {
    pushUnique(candidates, ["tree", "runtime-dispatch", "memory-map", "compiler", "literate-weave", "anatomy", "flow"]);
  }
  if (sectionIs("perl esencial", "motor del lenguaje", "trabajo cotidiano", "orientación a objetos moderna", "operación de sistemas perl")) {
    pushUnique(candidates, ["runtime-dispatch", "compiler", "pipeline", "tree", "filesystem", "scheduler", "trace", "artifact-passport"]);
  }
  if (sectionIs("despacho y objetos", "parsing", "nativecall e interoperabilidad")) {
    pushUnique(candidates, ["runtime-dispatch", "compiler", "tree", "memory-map", "pipeline", "gate", "trace"]);
  }
  if (sectionIs("scala esencial", "composición")) {
    pushUnique(candidates, ["compiler", "runtime-dispatch", "tree", "pipeline", "scheduler", "cards", "flow"]);
  }

  if (sectionIs("fundamentos criptográficos") && titleHas("direcciones", "claves y custody")) {
    pushUnique(candidates, ["artifact-passport", "gate", "memory-map", "network", "assurance-rack", "lifecycle"]);
  }
  if (
    sectionIs("primer contacto", "resumibilidad", "aplicación")
    && titleHas("component$", "jsx", "props", "signals", "qrl", "serialización", "optimizer", "qwik city", "loaders", "actions")
  ) {
    pushUnique(candidates, ["interface-flow", "runtime-dispatch", "lifecycle", "signal", "browser", "compiler", "request"]);
  }
  if (titleHas("rxjs interop")) {
    pushUnique(candidates, ["event-fabric", "signal", "pipeline", "runtime-dispatch", "interface-flow", "trace"]);
  }
  if (sectionIs("proyecto django", "trabajo cotidiano")) {
    pushUnique(candidates, ["layers", "request", "workflow", "database", "document", "filesystem", "trace"]);
  }
  if (sectionIs("álgebra y cálculo relacional", "diseño lógico avanzado", "semántica de ventanas", "procedimientos y automatización", "recuperación y continuidad")) {
    pushUnique(candidates, ["relation-loom", "database", "pipeline", "tree", "matrix", "timeline", "artifact-passport", "trace"]);
  }
  if (sectionIs("modelado por acceso")) {
    pushUnique(candidates, ["database", "relation-loom", "cache", "tree", "matrix", "lifecycle", "trace"]);
  }
  if (sectionIs("arquitectura", "ejecución") && titleHas("kernel", "interrupciones", "privilegios", "boot", "scheduling")) {
    pushUnique(candidates, ["layers", "scheduler", "signal-matrix", "memory-map", "lifecycle", "trace", "terminal"]);
  }
  if (sectionIs("mapa de la ia")) {
    pushUnique(candidates, ["concept-constellation", "pipeline", "tree", "parallel-grid", "matrix", "assurance-rack", "workflow"]);
  }
  if (sectionIs("documento mínimo", "motor de composición", "trabajo técnico")) {
    pushUnique(candidates, ["literate-weave", "document", "compiler", "pipeline", "tree", "artifact-passport", "trace"]);
  }
  if (sectionIs("cambios", "historia y líneas") && titleHas("diff", "add delete move", "commit atómico", "update", "copy", "tags")) {
    pushUnique(candidates, ["timeline", "tree", "workflow", "compare", "trace", "filesystem", "artifact-passport"]);
  }

  if (titleHas("recurs", "divide y vencerás", "backtracking", "pila de llamadas")) pushUnique(candidates, ["stack", "tree", "timeline", "flow", "trace"]);
  if (titleHas("función pura", "funciones puras", "currying", "aplicación parcial", "composición funcional", "función de orden superior", "referential transparency")) pushUnique(candidates, ["pipeline", "tree", "flow", "compiler", "compare"]);
  if (titleHas("excepción", "exception", "panic", "rescue", "restart", "recuperación de error")) pushUnique(candidates, ["state-machine", "trace", "gate", "workflow", "timeline"]);
  if (titleHas("s-expression", "s-expressions", "cons cell", "lista impropia", "car y cdr")) pushUnique(candidates, ["tree", "anatomy", "memory-map", "literate-weave", "runtime-dispatch"]);
  if (titleHas("grafo", "bfs", "dfs", "dijkstra", "camino", "topológico", "componente conex")) pushUnique(candidates, ["network", "tree", "workflow", "matrix", "trace"]);
  if (titleHas("hash", "heap", "trie", "skip list", "bloom", "union-find", "disjoint set")) pushUnique(candidates, ["matrix", "tree", "database", "memory-map", "anatomy"]);
  if (titleHas("complejidad", "big o", "amortizado", "benchmark", "cota", "trade-off algorítmico")) pushUnique(candidates, ["compare", "trace", "timeline", "matrix", "assurance-rack"]);
  if (titleHas("np-complet", "np completo", "reducción polinómica", "decidibilidad", "computabilidad")) pushUnique(candidates, ["tree", "assurance-rack", "compare", "workflow", "gate"]);
  if (titleHas("envolvente convexa", "geometría computacional", "producto cruzado")) pushUnique(candidates, ["matrix", "parallel-grid", "tree", "pipeline", "compare"]);
  if (titleHas("programación dinámica", "memoización", "tabulación", "subproblema")) pushUnique(candidates, ["matrix", "cache", "tree", "pipeline", "trace"]);

  if (titleHas("vector", "matriz", "tensor", "transformación lineal", "producto escalar")) pushUnique(candidates, ["parallel-grid", "matrix", "pipeline", "relation-loom", "trace"]);
  if (titleHas("probabilidad", "distribución", "bayes", "monte carlo", "muestreo", "variable aleatoria")) pushUnique(candidates, ["signal-matrix", "parallel-grid", "matrix", "timeline", "assurance-rack"]);
  if (titleHas("gradiente", "optimización", "derivada", "convergencia", "función objetivo")) pushUnique(candidates, ["timeline", "parallel-grid", "trace", "pipeline", "compare"]);
  if (titleHas("demostración", "inducción", "invariante", "teorema", "lógica proposicional")) pushUnique(candidates, ["assurance-rack", "tree", "gate", "flow", "document"]);
  if (titleHas("lógica de hoare", "precondición", "postcondición", "tripla de hoare")) pushUnique(candidates, ["assurance-rack", "gate", "flow", "state-machine", "document"]);

  if (titleHas("ownership", "borrowing", "préstamo", "lifetime", "tiempo de vida", "move semantics")) pushUnique(candidates, ["memory-map", "gate", "lifecycle", "runtime-dispatch", "trace"]);
  if (titleHas("unboxed value", "unboxed values", "valor sin boxing", "valores sin boxing")) pushUnique(candidates, ["memory-map", "runtime-dispatch", "compiler", "anatomy", "trace"]);
  if (titleHas("operadores de combinación", "combination operators", "combinator")) pushUnique(candidates, ["pipeline", "flow", "tree", "compiler", "compare"]);
  if (titleHas("optional sin abuso", "optional", "option type", "maybe type")) pushUnique(candidates, ["gate", "state-machine", "tree", "assurance-rack", "flow"]);
  if (titleHas("tipo algebraico", "sum type", "product type", "trait", "typeclass", "genérico", "variance", "varianza")) pushUnique(candidates, ["compiler", "gate", "tree", "compare", "concept-constellation"]);
  if (titleHas("pattern matching", "unificación", "desestructuración", "exhaustividad")) pushUnique(candidates, ["tree", "gate", "compiler", "relation-loom", "assurance-rack"]);
  if (titleHas("lazy", "perezosa", "thunk", "functor", "applicative", "mónada", "monad", "efecto algebraico")) pushUnique(candidates, ["pipeline", "runtime-dispatch", "tree", "lifecycle", "flow"]);
  if (titleHas("macro", "macroexpansión", "metaprogramación", "quote", "quasiquote", "ast")) pushUnique(candidates, ["compiler", "literate-weave", "tree", "runtime-dispatch", "document"]);
  if (titleHas("bytecode", "máquina virtual", "jvm", "beam", "jit", "garbage collector", "recolector")) pushUnique(candidates, ["runtime-dispatch", "memory-map", "scheduler", "layers", "trace"]);
  if (titleHas("actor", "mailbox", "supervisor", "supervisión", "goroutine", "coroutine", "corrutina", "channel", "canal")) pushUnique(candidates, ["event-fabric", "queue", "scheduler", "tree", "signal"]);
  if (titleHas("mvar", "stm", "mutex", "semáforo", "semaphore", "lock-free")) pushUnique(candidates, ["queue", "state-machine", "scheduler", "event-fabric", "trace"]);
  if (titleHas("cffi", "ffi", "foreign function", "interoperabilidad nativa")) pushUnique(candidates, ["runtime-dispatch", "memory-map", "layers", "gate", "trace"]);

  if (titleHas("consenso", "finalidad", "merkle", "bloque", "transacción firmada", "smart contract", "contrato inteligente")) pushUnique(candidates, ["artifact-passport", "relation-loom", "event-fabric", "gate", "timeline"]);
  if (titleHas("entrenamiento", "inferencia", "modelo de aprendizaje", "modelo predictivo", "feature engineering", "embedding", "atención", "transformer")) pushUnique(candidates, ["pipeline", "parallel-grid", "matrix", "assurance-rack", "trace"]);
  if (titleHas("regresión", "clasificación", "clustering", "agrupamiento", "función de pérdida", "loss function", "métrica de evaluación")) pushUnique(candidates, ["parallel-grid", "matrix", "pipeline", "compare", "assurance-rack"]);
  if (titleHas("sesgo", "drift", "deriva", "fairness", "explicabilidad", "evaluación de modelo")) pushUnique(candidates, ["assurance-rack", "compare", "trace", "matrix", "gate"]);

  if (titleHas("system call", "syscall", "interrupción", "context switch", "cambio de contexto", "memoria virtual", "page fault", "fallo de página")) pushUnique(candidates, ["scheduler", "memory-map", "signal-matrix", "layers", "trace"]);
  if (titleHas("resumibilidad", "hydration", "hidratación", "reactividad", "signals reactivos", "señal reactiva", "inyección de dependencias")) pushUnique(candidates, ["runtime-dispatch", "lifecycle", "interface-flow", "signal", "concept-constellation"]);
  if (titleHas("activity", "fragment", "intent", "compose", "workmanager", "binder")) pushUnique(candidates, ["lifecycle", "interface-flow", "runtime-dispatch", "workflow", "signal"]);
  if (titleHas("camerax", "camera2", "sensor", "captura de cámara", "image capture")) pushUnique(candidates, ["signal-matrix", "pipeline", "interface-flow", "lifecycle", "trace"]);
  if (titleHas("room schema", "room database", "room migration")) pushUnique(candidates, ["database", "layers", "gate", "lifecycle", "trace"]);
  if (titleHas("tipografía", "composición tipográfica", "bibliografía", "referencia cruzada", "latexmk", "tex engine")) pushUnique(candidates, ["literate-weave", "document", "compiler", "artifact-passport", "pipeline"]);
  if (titleHas("checkout", "working copy", "revisión", "merge", "conflicto", "branch", "rama", "commit centralizado")) pushUnique(candidates, ["timeline", "tree", "workflow", "compare", "trace"]);
  if (titleHas("select", "where", "group by", "having", "window function", "cte")) pushUnique(candidates, ["relation-loom", "database", "pipeline", "tree", "matrix"]);
  if (titleHas("execution plan", "plan de ejecución", "explain", "query planner", "optimizador")) pushUnique(candidates, ["database", "tree", "trace", "pipeline", "compare"]);
  if (titleHas("statistics", "estadísticas del optimizador", "cardinality estimation")) pushUnique(candidates, ["matrix", "database", "trace", "compare", "relation-loom"]);
  if (titleHas("point-in-time", "pitr", "write-ahead log", "wal", "backup", "restore")) pushUnique(candidates, ["timeline", "database", "artifact-passport", "trace", "lifecycle"]);
  if (titleHas("row-level security", "rls", "política de fila")) pushUnique(candidates, ["gate", "database", "relation-loom", "assurance-rack", "trace"]);
  if (titleHas("rack", "middleware chain", "http middleware")) pushUnique(candidates, ["request", "pipeline", "layers", "workflow", "trace"]);
  if (titleHas("cargo audit", "cargo deny", "dependency audit", "auditoría de dependencias")) pushUnique(candidates, ["assurance-rack", "artifact-passport", "gate", "trace", "workflow"]);
  if (titleHas("preloading", "opcache", "bytecode cache")) pushUnique(candidates, ["cache", "memory-map", "runtime-dispatch", "lifecycle", "trace"]);
  if (titleHas("array", "arrays", "lista enlazada", "listas enlazadas")) pushUnique(candidates, ["matrix", "memory-map", "pipeline", "tree", "anatomy"]);
  if (titleHas("aleatoriz", "azar", "random", "seed", "seeds", "semilla", "monte carlo")) pushUnique(candidates, ["signal-matrix", "matrix", "parallel-grid", "timeline", "assurance-rack"]);
  if (titleHas("puntuación", "vidas", "score", "marcador", "game loop", "juego", "sprites")) pushUnique(candidates, ["interface-flow", "cards", "signal", "timeline", "state-machine"]);
  if (titleHas("quarto", "r markdown", "rmarkdown", "informe reproducible")) pushUnique(candidates, ["document", "literate-weave", "compiler", "pipeline", "artifact-passport"]);
  if (titleHas("aislamiento", "isolation", "sandboxing", "virtualiz", "virtualización")) pushUnique(candidates, ["container", "layers", "gate", "memory-map", "scheduler"]);
  if (titleHas("recuperación", "recovery", "reinicio", "tolerancia a fallos")) pushUnique(candidates, ["state-machine", "trace", "lifecycle", "timeline", "gate"]);
  if (titleHas("svnsync", "sincronización de repositorio", "migración de repositorio", "migracion", "migración")) pushUnique(candidates, ["timeline", "tree", "workflow", "compare", "trace"]);

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
  if (titleHas("xml", "elemento", "atributo", "namespace", "qname", "infoset", "doctype", "entidad")) pushUnique(candidates, ["document", "tree", "anatomy", "literate-weave", "concept-constellation"]);
  if (titleHas("xsd", "schema", "facet", "complextype", "sequence", "choice", "keyref", "psvi")) pushUnique(candidates, ["gate", "assurance-rack", "matrix", "relation-loom", "tree"]);
  if (titleHas("json pointer", "json patch", "merge patch", "revision")) pushUnique(candidates, ["timeline", "state-machine", "trace", "workflow", "gate"]);
  if (titleHas("canonical", "digest", "firma", "jcs")) pushUnique(candidates, ["artifact-passport", "pipeline", "document", "assurance-rack", "trace"]);

  // Las secciones aportan una segunda señal semántica cuando el título es
  // breve o propio de una API. Estas familias son compatibles con el
  // mecanismo descrito; no se usan para perseguir variedad estadística.
  if (has("funcional", "lambda", "cálculo", "combinador", "composición", "evaluación", "reducción", "expresión", "currying", "monad", "functor")) {
    pushUnique(candidates, ["pipeline", "tree", "runtime-dispatch", "flow", "compiler"]);
  }
  if (has("tipo", "tipos", "type", "types", "generic", "genérico", "objeto", "object", "clase", "class", "trait", "alias", "proyección", "wildcard", "erasure", "record", "enum", "metaclass", "protocol", "pecs")) {
    pushUnique(candidates, ["compiler", "gate", "tree", "compare", "assurance-rack", "runtime-dispatch"]);
  }
  if (has("concurrencia", "paralelismo", "proceso", "thread", "coroutine", "actor", "mensajes", "sincronización", "lock", "mutex", "channel", "canal")) {
    pushUnique(candidates, ["scheduler", "queue", "event-fabric", "state-machine", "trace"]);
  }
  if (has("memoria", "memory", "heap", "stack", "pila", "runtime", "internals", "compilador", "compiler", "máquina virtual", "recolección", "gc", "leak", "thunk", "pointer", "puntero", "registro", "black-hole", "black hole", "space leak")) {
    pushUnique(candidates, ["memory-map", "runtime-dispatch", "layers", "scheduler", "trace"]);
  }
  if (has("prueba", "pruebas", "test", "testing", "calidad", "verificación", "seguridad", "security", "assert", "fuzz")) {
    pushUnique(candidates, ["assurance-rack", "gate", "trace", "matrix", "workflow"]);
  }
  if (has("rendimiento", "performance", "profiling", "observabilidad", "diagnóstico", "métrica", "optimización", "latencia")) {
    pushUnique(candidates, ["trace", "timeline", "matrix", "terminal", "compare"]);
  }
  if (has("paquete", "paquetes", "módulo", "módulos", "tooling", "toolchain", "herramienta", "build", "gradle", "entrega", "producción", "deploy", "release", "jlink", "assembly", "ensamblador", "variadic", "resource")) {
    pushUnique(candidates, ["artifact-passport", "layers", "workflow", "pipeline", "trace"]);
  }
  if (has("persistencia", "almacenamiento", "orm", "consulta", "consultas", "modelo relacional", "datos", "data", "database", "sql", "tabla", "índice")) {
    pushUnique(candidates, ["database", "relation-loom", "pipeline", "matrix", "trace"]);
  }
  if (has("web", "http", "servidor", "server", "request", "middleware", "api", "rest", "endpoint", "socket")) {
    pushUnique(candidates, ["request", "pipeline", "network", "layers", "trace"]);
  }
  if (has("interfaz", "componente", "componentes", "render", "layout", "experiencia", "ui", "view", "vista", "pantalla", "css", "html")) {
    pushUnique(candidates, ["interface-flow", "browser", "lifecycle", "flow", "cards"]);
  }
  if (has("distribuido", "distribuidos", "distribución", "cluster", "replicación", "consenso", "nodo", "network", "red")) {
    pushUnique(candidates, ["network", "event-fabric", "relation-loom", "timeline", "trace"]);
  }
  if (has("candidato", "candidate", "proto", "dispatch", "despacho", "resolution", "resolución")) {
    pushUnique(candidates, ["runtime-dispatch", "compare", "tree", "gate"]);
  }
  if (has("task", "tarea", "usetask", "hook", "job", "worker", "efecto")) {
    pushUnique(candidates, ["scheduler", "timeline", "lifecycle", "queue", "trace"]);
  }
  if (has("document", "documento", "frontera", "boundary", "nosql", "bucket", "fan-out", "traversal", "entrop", "entropy", "recorrido")) {
    pushUnique(candidates, ["document", "tree", "database", "layers", "relation-loom"]);
  }
  if (has("calibración", "calibration", "probab", "curva", "curve", "score", "métrica", "modelo", "model", "ia", "ai")) {
    pushUnique(candidates, ["trace", "timeline", "matrix", "compare", "gate"]);
  }
  if (has("device", "dispositivo", "driver", "kernel", "os", "hardware", "io", "i/o", "periférico")) {
    pushUnique(candidates, ["layers", "terminal", "anatomy", "memory-map", "trace"]);
  }
  if (has("código", "lenguaje", "función", "método", "variable", "constante", "operador", "control", "flujo", "valor", "estado", "mecanismo", "sistema", "patrón", "algoritmo", "estructura")) {
    pushUnique(candidates, ["flow", "layers", "anatomy", "trace", "gate", "state-machine"]);
  }

  if (candidates.length === 0 && includeNeutralFallback) {
    pushUnique(candidates, ["anatomy", "flow", "layers", "trace", "compare", "gate"]);
  }

  return candidates;
}

export function hasSemanticSceneMatch(title: string, description: string, section: string) {
  return semanticCandidates(title, description, section, false).length > 0;
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
      (sectionCounts.get(variant) ?? 0) * .45 +
      (globalCounts.get(variant) ?? 0) * .04 +
      (recent.includes(variant) ? 6 : 0) +
      candidates.indexOf(variant) * 1.35;
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
