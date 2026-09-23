import type { StudyConcept } from "./conceptTypes";

type SourcePair = readonly [string, string];

type CoverageMatch = {
  sections?: readonly string[];
  titles?: readonly string[];
};

type CoverageRule = {
  id: string;
  match: CoverageMatch;
  urls: SourcePair;
  evidence: string;
};

type CoveragePlan = {
  baseline: {
    urls: SourcePair;
    evidence: string;
  };
  rules: readonly CoverageRule[];
};

type ChapterCoverage = {
  section: string;
  urls: SourcePair;
  evidence: string;
};

export type NewLearningSourceResolution = {
  urls: SourcePair;
  ruleIds: readonly string[];
  evidence: readonly string[];
  usedFallback: boolean;
};

const rule = (
  id: string,
  match: CoverageMatch,
  urls: SourcePair,
  evidence: string,
): CoverageRule => ({ id, match, urls, evidence });

const chapters = (
  urls: SourcePair,
  evidence: string,
  sections: readonly string[],
): readonly ChapterCoverage[] => sections.map((section) => ({
  section,
  urls,
  evidence: `${evidence} Para el capítulo «${section}», este par respalda el marco primario —definiciones, modelo y prácticas dentro del alcance citado—; cualquier afirmación de mecanismo más estrecha exige una regla semántica prioritaria.`,
}));

// Contrato editorial explícito: cada capítulo declara el par de fuentes que
// respalda su alcance. Las reglas por mecanismo pueden reemplazar este par,
// pero la resolución nunca lo deduce del baseline general de la colección.
const chapterCoverageByCollection: Readonly<Record<string, readonly ChapterCoverage[]>> = {
  "programming-fundamentals": chapters(
    ["https://csed.acm.org/final-report/", "https://www.acm.org/education/curricula-recommendations"],
    "CS2023 y las recomendaciones curriculares ACM/IEEE describen el cuerpo transversal de conocimientos y prácticas de computación.",
    [
    "Pensamiento computacional",
    "Datos y ejecución",
    "Control y composición",
    "Errores y diagnóstico",
    "Calidad y crecimiento",
    "Representación de información",
    "Diseño paso a paso",
    "Modelado de datos",
    "Estado, efectos y tiempo",
    "Modularidad y contratos",
    "Estrategias de prueba",
    "Herramientas de desarrollo",
    "Seguridad desde el inicio",
    "Recursos y rendimiento",
    "Entrega y mantenimiento",
    ],
  ),
  algorithms: chapters(
    ["https://xlinux.nist.gov/dads/", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/"],
    "NIST DADS y el curso oficial de MIT cubren estructuras, análisis, diseño algorítmico y corrección.",
    [
    "Modelos de costo",
    "Estructuras esenciales",
    "Técnicas algorítmicas",
    "Grafos y diagnóstico",
    "Algoritmos en producción",
    "Secuencias y almacenamiento",
    "Árboles avanzados",
    "Hashing en profundidad",
    "Conjuntos y particiones",
    "Ordenamiento y selección",
    "Grafos ponderados y redes",
    "Procesamiento de texto",
    "Geometría computacional",
    "Programación dinámica avanzada",
    "Algoritmos probabilísticos",
    "Datos masivos y streaming",
    "Concurrencia algorítmica",
    "Algoritmos distribuidos",
    "Complejidad computacional",
    "Ingeniería y verificación",
    ],
  ),
  mathematics: chapters(
    ["https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/", "https://dlmf.nist.gov/"],
    "MIT Mathematics for Computer Science y NIST DLMF cubren razonamiento discreto, estructuras y cálculo numérico verificable.",
    [
    "Lenguaje matemático",
    "Representación numérica",
    "Estructuras y cambio",
    "Azar y evidencia",
    "Optimización computacional",
    "Álgebra booleana y circuitos",
    "Teoría de números",
    "Combinatoria aplicada",
    "Teoría de grafos",
    "Probabilidad discreta",
    "Inferencia estadística",
    "Álgebra lineal computacional",
    "Geometría y transformaciones",
    "Cálculo numérico",
    "Optimización avanzada",
    "Teoría de la información",
    "Fundamentos criptográficos",
    "Métodos formales",
    ],
  ),
  methodologies: chapters(
    ["https://agilemanifesto.org/", "https://scrumguides.org/scrum-guide.html"],
    "El Manifesto Ágil y Scrum Guide son fuentes primarias de valores, empirismo, eventos y responsabilidades de entrega iterativa.",
    [
    "Principios y contexto",
    "Sistema de trabajo",
    "Cadencias y colaboración",
    "Diagnóstico del flujo",
    "Gobierno y mejora",
    "Scrum aplicado",
    "Kanban aplicado",
    "Extreme Programming",
    "Lean y teoría de colas",
    "Descubrimiento de producto",
    "Requisitos y alcance",
    "Entrega y operaciones",
    "Riesgo y gobernanza",
    "Equipos y organizaciones",
    "Métricas orientadas a resultados",
    ],
  ),
  scratch: chapters(
    ["https://scratch.mit.edu/ideas", "https://www.scratchfoundation.org/learn/learning-library"],
    "Scratch Ideas y la Learning Library oficial cubren bloques, eventos, medios, proyectos y progresión pedagógica.",
    [
    "Escenario y bloques",
    "Estado y control",
    "Interacción",
    "Abstracción y diagnóstico",
    "Proyecto completo",
    "Geometría con sprites",
    "Modelo de eventos",
    "Datos persistentes y compartidos",
    "Patrones con clones",
    "Animación y audio",
    "Física para juegos",
    "Extensiones y mundo físico",
    "Calidad y publicación",
    ],
  ),
  ruby: chapters(
    ["https://docs.ruby-lang.org/en/", "https://docs.ruby-lang.org/en/master/syntax_rdoc.html"],
    "La documentación y referencia de sintaxis oficiales de Ruby cubren semántica, objetos, bloques, excepciones y biblioteca base.",
    [
    "Ruby esencial",
    "Modelo de objetos",
    "Composición idiomática",
    "Diagnóstico",
    "Producción",
    "Semántica del lenguaje",
    "Despacho dinámico",
    "Metaprogramación",
    "Datos y enumeración",
    "Memoria y runtime",
    "Concurrencia y asincronía",
    "Web y red",
    "Persistencia y formatos",
    "Pruebas y diseño",
    "Seguridad del ecosistema",
    "Empaquetado y operación",
    ],
  ),
  rust: chapters(
    ["https://doc.rust-lang.org/book/", "https://doc.rust-lang.org/reference/"],
    "The Rust Book y Rust Reference cubren lenguaje, ownership, tipos, concurrencia y semántica normativa.",
    [
    "Fundamentos",
    "Memoria",
    "Abstracciones",
    "Errores y diagnóstico",
    "Producción",
    "Sistema de tipos expresivo",
    "Ownership avanzado",
    "Préstamos en diseños reales",
    "Traits y coherencia",
    "Abstracciones de costo cero",
    "Macros y generación",
    "Colecciones e iteración",
    "Concurrencia sin carreras",
    "Asincronía en profundidad",
    "Unsafe con invariantes",
    "Interoperabilidad",
    "Pruebas y calidad",
    "Rendimiento y diagnóstico",
    "Cadena de suministro y entrega",
    ],
  ),
  php: chapters(
    ["https://www.php.net/manual/en/", "https://www.php.net/manual/en/langref.php"],
    "El manual y la referencia oficial de PHP cubren sintaxis, runtime, extensiones, HTTP, errores y despliegue.",
    [
    "Lenguaje moderno",
    "Modelo de ejecución",
    "Aplicación web",
    "Errores y calidad",
    "Producción segura",
    "Tipos y semántica moderna",
    "Orientación a objetos",
    "Internals de Zend",
    "Estándares e interoperabilidad",
    "HTTP y APIs",
    "Persistencia segura",
    "Seguridad web",
    "Trabajo asíncrono",
    "Verificación automatizada",
    "Rendimiento",
    "Despliegue",
    "Operación y evolución",
    ],
  ),
  haskell: chapters(
    ["https://www.haskell.org/onlinereport/haskell2010/", "https://downloads.haskell.org/ghc/latest/docs/users_guide/"],
    "Haskell 2010 Report y GHC User's Guide cubren semántica, tipos, evaluación, extensiones y compilación.",
    [
    "Expresiones y tipos",
    "Evaluación",
    "Composición",
    "Errores y diagnóstico",
    "Producción",
    "Cálculo funcional",
    "Diseño con tipos algebraicos",
    "Typeclasses avanzadas",
    "Tipos de orden superior",
    "Efectos componibles",
    "Evaluación interna",
    "Optimización con GHC",
    "Concurrencia robusta",
    "Paralelismo",
    "Parsing y lenguajes",
    "Pruebas y verificación",
    "Construcción y distribución",
    "Interoperabilidad",
    "Producción observable",
    ],
  ),
  go: chapters(
    ["https://go.dev/ref/spec", "https://go.dev/doc/"],
    "La especificación y documentación oficial de Go cubren lenguaje, runtime, biblioteca, módulos y operación.",
    [
    "Go esencial",
    "Runtime",
    "Trabajo cotidiano",
    "Diagnóstico",
    "Producción",
    "Tipos e interfaces",
    "Memoria",
    "Runtime en profundidad",
    "Patrones concurrentes",
    "Cancelación y límites",
    "I/O y formatos",
    "Servicios de red",
    "Datos y consistencia",
    "Pruebas avanzadas",
    "Toolchain",
    "Seguridad",
    "Rendimiento",
    "Operación de servicios",
    ],
  ),
  kotlin: chapters(
    ["https://kotlinlang.org/docs/home.html", "https://kotlinlang.org/spec/introduction.html"],
    "La documentación y especificación de Kotlin cubren lenguaje, tipos, interoperabilidad y plataformas.",
    [
    "Lenguaje",
    "Modelo interno",
    "Aplicación",
    "Diagnóstico",
    "Producción",
    "Tipos y nulabilidad avanzada",
    "Objetos y composición",
    "Genéricos expresivos",
    "Programación funcional",
    "Compilador y bytecode",
    "Coroutines en profundidad",
    "Flujos reactivos",
    "Interoperabilidad JVM",
    "Servidor y persistencia",
    "Multiplataforma",
    "Pruebas",
    "Build y calidad",
    "Producción y rendimiento",
    ],
  ),
  java: chapters(
    ["https://docs.oracle.com/javase/specs/jls/se25/html/", "https://docs.oracle.com/en/java/javase/25/"],
    "JLS y la documentación JDK 25 cubren lenguaje, biblioteca estándar, herramientas y APIs de producción.",
    [
    "Java esencial",
    "JVM",
    "Biblioteca y diseño",
    "Concurrencia y diagnóstico",
    "Producción",
    "Sistema de tipos",
    "Diseño de objetos",
    "Genéricos",
    "Metadatos y reflexión",
    "Class files y carga",
    "Memoria de la JVM",
    "Modelo de memoria concurrente",
    "Concurrencia moderna",
    "Procesamiento de colecciones",
    "I/O y networking",
    "Persistencia",
    "Construcción modular",
    "Pruebas y calidad",
    "Seguridad",
    "Operación y rendimiento",
    ],
  ),
  r: chapters(
    ["https://cran.r-project.org/doc/manuals/r-release/R-lang.html", "https://cran.r-project.org/doc/manuals/r-release/R-intro.html"],
    "R Language Definition e Introduction to R cubren semántica, datos, evaluación, estadística y gráficos base.",
    [
    "R esencial",
    "Semántica",
    "Análisis",
    "Diagnóstico",
    "Reproducibilidad",
    "Objetos y atributos",
    "Evaluación del lenguaje",
    "Manipulación tabular",
    "Modelado estadístico",
    "Visualización",
    "Datos faltantes y calidad",
    "Series temporales",
    "Datos espaciales",
    "Aprendizaje automático",
    "Simulación e inferencia bayesiana",
    "Paquetes profesionales",
    "Pruebas y contratos",
    "Rendimiento",
    "Productos de datos",
    "Gobierno y producción",
    ],
  ),
  assembly: chapters(
    ["https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html", "https://developer.arm.com/Architectures"],
    "Los manuales oficiales Intel y Arm especifican ISA, memoria, privilegios, excepciones y ejecución de instrucciones.",
    [
    "Modelo de máquina",
    "Datos e instrucciones",
    "Control y ABI",
    "Toolchain y diagnóstico",
    "Producción segura",
    "Familias de arquitectura",
    "Codificación y secciones",
    "Modos de direccionamiento",
    "Aritmética de bajo nivel",
    "Pila y marcos de llamada",
    "Enlazado y carga",
    "Interfaz con el sistema",
    "Cómputo vectorial",
    "Concurrencia y memoria",
    "Depuración binaria",
    "Rendimiento microarquitectónico",
    "Seguridad binaria",
    "Firmware y arranque",
    ],
  ),
  erlang: chapters(
    ["https://www.erlang.org/docs", "https://www.erlang.org/doc/system/reference_manual.html"],
    "La documentación Erlang/OTP y su Reference Manual cubren lenguaje, procesos, distribución y runtime.",
    [
    "Erlang esencial",
    "BEAM y procesos",
    "OTP",
    "Fallo y diagnóstico",
    "Distribución",
    "Semántica funcional",
    "Internals de BEAM",
    "Protocolos entre procesos",
    "Servidores OTP avanzados",
    "Árboles de supervisión",
    "Aplicaciones y releases",
    "Sistemas distribuidos",
    "Datos y persistencia",
    "Pruebas de sistemas concurrentes",
    "Observabilidad",
    "Seguridad y operación",
    ],
  ),
  lisp: chapters(
    ["https://www.lispworks.com/documentation/HyperSpec/Front/", "https://www.sbcl.org/manual/"],
    "Common Lisp HyperSpec y SBCL Manual cubren lenguaje, CLOS, condiciones, compilación y runtime.",
    [
    "Formas y evaluación",
    "Entornos",
    "Extensión del lenguaje",
    "Diagnóstico interactivo",
    "Producción",
    "Representación y lectura avanzada",
    "Programación funcional",
    "Common Lisp Object System",
    "Condiciones y recuperación",
    "Compilador y rendimiento",
    "Testing y calidad",
    "Concurrencia",
    "Persistencia y datos",
    "Interoperabilidad",
    "Seguridad del lenguaje extensible",
    "Entrega y operación",
    ],
  ),
  perl: chapters(
    ["https://perldoc.perl.org/", "https://perldoc.perl.org/perlsyn"],
    "Perldoc y perlsyn cubren lenguaje, contextos, regex, módulos, I/O y semántica de ejecución.",
    [
    "Perl esencial",
    "Motor del lenguaje",
    "Trabajo cotidiano",
    "Diagnóstico",
    "Producción",
    "Semántica de datos",
    "Expresiones regulares avanzadas",
    "Orientación a objetos moderna",
    "Distribución con CPAN",
    "Testing profundo",
    "Seguridad",
    "Rendimiento y memoria",
    "Interoperabilidad y servicios",
    "Operación de sistemas Perl",
    ],
  ),
  raku: chapters(
    ["https://docs.raku.org/", "https://rakudo.org/docs"],
    "Raku Documentation y Rakudo cubren lenguaje, tipos, despacho, concurrencia y VM.",
    [
    "Lenguaje",
    "Despacho y objetos",
    "Parsing",
    "Errores y diagnóstico",
    "Producción",
    "Modelo de objetos y metamodelo",
    "Sistema de tipos expresivo",
    "Despacho avanzado",
    "Gramáticas de producción",
    "Concurrencia reactiva",
    "Testing y diagnóstico",
    "NativeCall e interoperabilidad",
    "Módulos y distribución",
    "Operación sobre MoarVM",
    ],
  ),
  scala: chapters(
    ["https://docs.scala-lang.org/scala3/reference/", "https://docs.scala-lang.org/scala3/book/introduction.html"],
    "Scala 3 Reference y Scala 3 Book cubren lenguaje, tipos, objetos y programación funcional.",
    [
    "Scala esencial",
    "Sistema de tipos",
    "Composición",
    "Diagnóstico",
    "Producción",
    "Fundamentos funcionales",
    "Tipos avanzados de Scala 3",
    "Metaprogramación",
    "Efectos y recursos",
    "Streams",
    "Concurrencia distribuida",
    "Testing",
    "Build y dependencias",
    "Rendimiento JVM",
    "Interoperabilidad robusta",
    "Seguridad y servicios",
    "Operación en producción",
    ],
  ),
  blockchain: chapters(
    ["https://csrc.nist.gov/pubs/ir/8202/final", "https://ethereum.org/en/developers/docs/"],
    "NIST IR 8202 y Ethereum Developer Docs cubren registro distribuido, consenso, contratos, seguridad y operación.",
    [
    "Fundamentos criptográficos",
    "Registro distribuido",
    "Consenso y ejecución",
    "Fallo y seguridad",
    "Producción",
    "Criptografía aplicada",
    "Modelo de transacción",
    "Protocolos de consenso",
    "Red peer-to-peer",
    "Máquinas virtuales y contratos",
    "Seguridad de contratos inteligentes",
    "Privacidad",
    "Escalamiento",
    "Economía del protocolo",
    "Testing y desarrollo",
    "Datos e interoperabilidad",
    "Operación y gobierno",
    ],
  ),
  android: chapters(
    ["https://developer.android.com/docs", "https://developer.android.com/guide/components/fundamentals"],
    "Android Developers y App Fundamentals cubren componentes, lifecycle, recursos, procesos y plataforma.",
    [
    "Plataforma",
    "Componentes y runtime",
    "Interfaz y estado",
    "Diagnóstico",
    "Producción",
    "Arquitectura de aplicación",
    "Compose profundo",
    "Interfaz clásica",
    "Datos locales",
    "Red y sincronización",
    "Coroutines en Android",
    "Multimedia y sensores",
    "Accesibilidad e internacionalización",
    "Testing por capas",
    "Rendimiento",
    "Seguridad móvil",
    "Procesos y Binder",
    "Tooling y build",
    "Entrega y compatibilidad",
    "Diagnóstico en producción",
    ],
  ),
  qwik: chapters(
    ["https://qwik.dev/docs/", "https://github.com/QwikDev/qwik"],
    "La documentación y repositorio oficiales de Qwik cubren resumibilidad, componentes, QRL y ejecución.",
    [
    "Primer contacto",
    "Resumibilidad",
    "Aplicación",
    "Diagnóstico",
    "Producción",
    "Modelo de ejecución",
    "Tareas y ciclo reactivo",
    "Composición de interfaz",
    "Qwik City avanzado",
    "Datos y mutaciones",
    "Testing",
    "Seguridad web",
    "Optimización",
    "Operación multiplataforma",
    ],
  ),
  angular: chapters(
    ["https://angular.dev/overview", "https://angular.dev/guide/signals"],
    "Angular Overview y Signals cubren componentes, templates, reactividad, estado y arquitectura moderna.",
    [
    "Componentes",
    "Reactividad e internals",
    "Aplicación",
    "Diagnóstico",
    "Producción",
    "Templates avanzados",
    "Arquitectura reactiva",
    "Inyección de dependencias profunda",
    "Router avanzado",
    "Formularios tipados",
    "HTTP y datos",
    "Renderizado",
    "Testing unitario",
    "Testing integral",
    "Seguridad de aplicación",
    "Rendimiento",
    "Design systems",
    "Tooling y monorepos",
    "Interoperabilidad",
    "Operación y evolución",
    ],
  ),
  django: chapters(
    ["https://docs.djangoproject.com/en/stable/", "https://docs.djangoproject.com/en/stable/intro/tutorial01/"],
    "La documentación y tutorial oficiales de Django cubren HTTP, modelos, ORM, templates, auth y administración.",
    [
    "Proyecto Django",
    "Datos e internals",
    "Trabajo cotidiano",
    "Diagnóstico",
    "Producción",
    "ORM avanzado",
    "Diseño de modelos",
    "Ciclo HTTP profundo",
    "Plantillas y presentación",
    "Autenticación y autorización",
    "Seguridad web",
    "APIs con Django",
    "Procesamiento asíncrono",
    "Testing",
    "Rendimiento",
    "Archivos y contenido",
    "Internacionalización y accesibilidad",
    "Observabilidad",
    "Entrega y evolución",
    ],
  ),
  sql: chapters(
    ["https://www.iso.org/standard/76583.html", "https://www.postgresql.org/docs/current/sql.html"],
    "ISO SQL:2023 y PostgreSQL SQL Language cubren modelo relacional, sintaxis, consultas, tipos y transacciones.",
    [
    "Modelo relacional",
    "Consultas",
    "Cambios y concurrencia",
    "Diagnóstico",
    "Producción",
    "Álgebra y cálculo relacional",
    "Diseño lógico avanzado",
    "Expresiones de consulta",
    "Semántica de ventanas",
    "Tipos y dominios",
    "Procedimientos y automatización",
    "Internals de almacenamiento",
    "Optimización de consultas",
    "Índices especializados",
    "Concurrencia avanzada",
    "Particionado y distribución",
    "Testing de datos",
    "Seguridad",
    "Recuperación y continuidad",
    "Observabilidad y operación",
    ],
  ),
  nosql: chapters(
    ["https://www.mongodb.com/docs/", "https://cassandra.apache.org/doc/latest/"],
    "MongoDB y Cassandra documentan dos familias principales de modelado, distribución, replicación y operación NoSQL.",
    [
    "Familias de modelos",
    "Distribución",
    "Modelado por acceso",
    "Diagnóstico",
    "Producción",
    "Teoría de sistemas distribuidos",
    "Motores clave-valor",
    "Bases documentales",
    "Columnas anchas",
    "Bases de grafos",
    "Series temporales y búsqueda",
    "Replicación interna",
    "Transacciones no relacionales",
    "Evolución del modelo",
    "Testing distribuido",
    "Seguridad",
    "Rendimiento y capacidad",
    "Integración de datos",
    "Operación y recuperación",
    ],
  ),
  "operating-systems": chapters(
    ["https://pubs.opengroup.org/onlinepubs/9799919799/", "https://docs.kernel.org/"],
    "POSIX.1-2024 y Linux Kernel Documentation cubren interfaces, procesos, memoria, archivos, red y operación.",
    [
    "Arquitectura",
    "Ejecución",
    "Memoria y almacenamiento",
    "Diagnóstico",
    "Operación",
    "Arranque y arquitectura de kernel",
    "Planificación avanzada",
    "Sincronización del kernel",
    "Memoria virtual profunda",
    "Gestión de memoria física",
    "Sistemas de archivos",
    "Entrada y salida",
    "Red dentro del sistema",
    "Aislamiento y virtualización",
    "Seguridad del sistema",
    "Comunicación entre procesos",
    "Tiempo y energía",
    "Testing de bajo nivel",
    "Observabilidad",
    "Operación y recuperación",
    ],
  ),
  "artificial-intelligence": chapters(
    ["https://www.nist.gov/itl/ai-risk-management-framework", "https://scikit-learn.org/stable/user_guide.html"],
    "NIST AI RMF y scikit-learn User Guide cubren ciclo de vida, datos, modelos, evaluación y riesgos de IA.",
    [
    "Mapa de la IA",
    "Datos y aprendizaje",
    "Modelos",
    "Evaluación y diagnóstico",
    "Producción responsable",
    "Búsqueda y planificación",
    "Representación del conocimiento",
    "Preparación de datos",
    "Aprendizaje supervisado",
    "Aprendizaje no supervisado",
    "Aprendizaje por refuerzo",
    "Deep learning internals",
    "Visión, audio y lenguaje",
    "Modelos generativos",
    "Evaluación rigurosa",
    "Testing de sistemas de IA",
    "Seguridad y privacidad",
    "MLOps",
    "Inferencia eficiente",
    "Gobernanza e impacto",
    ],
  ),
  latex: chapters(
    ["https://www.latex-project.org/help/documentation/", "https://latexref.xyz/"],
    "LaTeX Project Documentation y la referencia LaTeX2e cubren lenguaje, composición, matemáticas, referencias y errores.",
    [
    "Documento mínimo",
    "Motor de composición",
    "Trabajo técnico",
    "Diagnóstico",
    "Producción",
    "TeX y expansión profunda",
    "Diseño de clases y paquetes",
    "Tipografía",
    "Matemáticas avanzadas",
    "Gráficos y datos",
    "Bibliografías complejas",
    "Documentos extensos",
    "Accesibilidad y estándares",
    "Testing y automatización",
    "Seguridad y publicación",
    ],
  ),
  subversion: chapters(
    ["https://subversion.apache.org/docs/", "https://svnbook.red-bean.com/"],
    "Apache Subversion Documentation y SVN Book cubren working copies, revisiones, merge, administración y protocolos.",
    [
    "Modelo centralizado",
    "Cambios",
    "Historia y líneas",
    "Conflictos y diagnóstico",
    "Administración",
    "Working copy profunda",
    "Integración avanzada",
    "Propiedades y metadatos",
    "Protocolos y servidores",
    "Seguridad y gobierno",
    "Testing y automatización",
    "Rendimiento y mantenimiento",
    "Continuidad y migración",
    ],
  ),
};

const plans: Readonly<Record<string, CoveragePlan>> = {
  "programming-fundamentals": {
    baseline: {
      urls: ["https://csed.acm.org/final-report/", "https://www.acm.org/education/curricula-recommendations"],
      evidence: "CS2023 y las recomendaciones curriculares ACM/IEEE describen el cuerpo transversal de conocimientos y prácticas de computación.",
    },
    rules: [
      rule("first-programs", { sections: ["pensamiento", "datos", "control", "herramientas"] }, ["https://docs.python.org/3/tutorial/appetite.html", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started"], "Los tutoriales oficiales de Python y MDN documentan la traducción de problemas, valores y control a programas ejecutables."),
      rule("secure-lifecycle", { sections: ["seguridad", "calidad", "entrega", "mantenimiento", "prueba"] }, ["https://csrc.nist.gov/pubs/sp/800/218/final", "https://csed.acm.org/final-report/"], "NIST SSDF y CS2023 respaldan seguridad, verificación y mantenimiento durante el ciclo completo del software."),
    ],
  },
  algorithms: {
    baseline: {
      urls: ["https://xlinux.nist.gov/dads/", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/"],
      evidence: "NIST DADS y el curso oficial de MIT cubren estructuras, análisis, diseño algorítmico y corrección.",
    },
    rules: [
      rule("computational-geometry", { sections: ["geometría"], titles: ["envolvente convexa", "orientación", "segmentos", "barrido"] }, ["https://doc.cgal.org/latest/Convex_hull_2/index.html", "https://xlinux.nist.gov/dads/"], "El manual oficial de CGAL especifica algoritmos, precondiciones y complejidad para convex hull y primitivas geométricas."),
      rule("complexity-theory", { sections: ["complejidad computacional"], titles: ["clases p", "np-completitud", "reducciones"] }, ["https://xlinux.nist.gov/dads/HTML/npcomplete.html", "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/"], "La definición NIST de NP-complete y la referencia editorial de CLRS sustentan clases, reducciones y límites de resolución."),
      rule("measurement", { sections: ["ingeniería", "producción"], titles: ["benchmark", "rendimiento"] }, ["https://google.github.io/benchmark/", "https://docs.python.org/3/library/timeit.html"], "Google Benchmark y timeit documentan medición repetible, calentamiento y comparación de costos observados."),
    ],
  },
  mathematics: {
    baseline: {
      urls: ["https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/", "https://dlmf.nist.gov/"],
      evidence: "MIT Mathematics for Computer Science y NIST DLMF cubren razonamiento discreto, estructuras y cálculo numérico verificable.",
    },
    rules: [
      rule("numeric-representation", { sections: ["representación numérica", "cálculo numérico"], titles: ["punto flotante", "error numérico"] }, ["https://standards.ieee.org/ieee/754/6210/", "https://docs.python.org/3/tutorial/floatingpoint.html"], "IEEE 754 y la explicación oficial de Python documentan representación, redondeo y límites de punto flotante."),
      rule("optimization", { sections: ["optimización"], titles: ["gradiente", "convexidad", "lagrange"] }, ["https://docs.scipy.org/doc/scipy/tutorial/optimize.html", "https://dlmf.nist.gov/"], "SciPy y NIST aportan algoritmos de optimización, criterios de convergencia y funciones matemáticas de referencia."),
      rule("linear-algebra", { sections: ["álgebra lineal", "geometría y transformaciones"], titles: ["vectores", "matrices"] }, ["https://numpy.org/doc/stable/user/basics.types.html", "https://dlmf.nist.gov/"], "NumPy documenta representaciones numéricas concretas y NIST respalda las operaciones matemáticas subyacentes."),
      rule("formal-methods", { sections: ["métodos formales"], titles: ["lógica de hoare"] }, ["https://isabelle.in.tum.de/website-Isabelle2025-2/dist/library/HOL/HOL-Hoare/index.html", "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/"], "La sesión oficial HOL-Hoare de Isabelle ofrece teorías y ejemplos comprobables; MIT respalda la lógica discreta previa."),
    ],
  },
  methodologies: {
    baseline: {
      urls: ["https://agilemanifesto.org/", "https://scrumguides.org/scrum-guide.html"],
      evidence: "El Manifesto Ágil y Scrum Guide son fuentes primarias de valores, empirismo, eventos y responsabilidades de entrega iterativa.",
    },
    rules: [
      rule("kanban-flow", { sections: ["kanban", "flujo", "colas"] }, ["https://kanbanguides.org/english/", "https://dora.dev/capabilities/"], "Kanban Guide y DORA cubren políticas de flujo, límites, medición y capacidades de entrega."),
      rule("evidence-and-outcomes", { sections: ["métricas", "gobernanza", "resultados", "descubrimiento"] }, ["https://www.scrum.org/resources/evidence-based-management-guide", "https://dora.dev/capabilities/"], "Evidence-Based Management y DORA conectan resultados, experimentos y señales operativas."),
      rule("delivery-operations", { sections: ["entrega y operaciones"] }, ["https://opengitops.dev/", "https://dora.dev/capabilities/"], "OpenGitOps y DORA documentan operación declarativa, feedback y confiabilidad de entrega."),
    ],
  },
  scratch: {
    baseline: {
      urls: ["https://scratch.mit.edu/ideas", "https://www.scratchfoundation.org/learn/learning-library"],
      evidence: "Scratch Ideas y la Learning Library oficial cubren bloques, eventos, medios, proyectos y progresión pedagógica.",
    },
    rules: [
      rule("runtime-internals", { sections: ["modelo de eventos", "clones", "datos persistentes"] }, ["https://github.com/scratchfoundation/scratch-vm", "https://github.com/scratchfoundation/scratch-blocks"], "Los repositorios oficiales de Scratch VM y Scratch Blocks son evidencia primaria de eventos, estado y ejecución de bloques."),
      rule("teaching-and-publishing", { sections: ["calidad", "publicación", "proyecto completo"] }, ["https://scratch.mit.edu/educators", "https://www.scratchfoundation.org/learn/learning-library"], "Los recursos oficiales para educadores documentan creación, revisión y publicación responsable de proyectos."),
    ],
  },
  ruby: {
    baseline: {
      urls: ["https://docs.ruby-lang.org/en/", "https://docs.ruby-lang.org/en/master/syntax_rdoc.html"],
      evidence: "La documentación y referencia de sintaxis oficiales de Ruby cubren semántica, objetos, bloques, excepciones y biblioteca base.",
    },
    rules: [
      rule("rack-http", { sections: ["web y red"], titles: ["contrato rack", "rack"] }, ["https://rack.github.io/rack/main/SPEC_rdoc.html", "https://docs.ruby-lang.org/en/"], "La especificación oficial Rack define el environment y la tripleta de respuesta que conecta Ruby con servidores web."),
      rule("packages", { sections: ["empaquetado", "ecosistema"], titles: ["bundler", "gema"] }, ["https://guides.rubygems.org/", "https://bundler.io/docs.html"], "RubyGems y Bundler documentan empaquetado, resolución y despliegue reproducible de dependencias."),
      rule("quality-security", { sections: ["pruebas", "seguridad"], titles: ["test", "auditoría"] }, ["https://test-unit.github.io/", "https://www.ruby-lang.org/en/security/"], "Las fuentes de test-unit y seguridad de Ruby respaldan pruebas y respuesta ante vulnerabilidades."),
    ],
  },
  rust: {
    baseline: {
      urls: ["https://doc.rust-lang.org/book/", "https://doc.rust-lang.org/reference/"],
      evidence: "The Rust Book y Rust Reference cubren lenguaje, ownership, tipos, concurrencia y semántica normativa.",
    },
    rules: [
      rule("unsafe-and-compiler", { sections: ["unsafe", "interoperabilidad", "abstracciones de costo cero"] }, ["https://doc.rust-lang.org/nomicon/", "https://rustc-dev-guide.rust-lang.org/"], "Rustonomicon y rustc-dev-guide documentan invariantes unsafe, layout y transformaciones del compilador."),
      rule("cargo", { sections: ["cadena de suministro", "entrega"], titles: ["cargo", "dependencias"] }, ["https://github.com/rustsec/rustsec/blob/main/cargo-audit/README.md", "https://embarkstudios.github.io/cargo-deny/"], "RustSec cargo-audit y cargo-deny documentan advisories, licencias, procedencia y políticas de dependencias para la cadena de suministro Rust."),
      rule("linting", { sections: ["pruebas y calidad"], titles: ["clippy"] }, ["https://doc.rust-lang.org/clippy/", "https://doc.rust-lang.org/book/"], "Clippy y The Rust Book respaldan diagnóstico estático y prácticas verificables de calidad."),
    ],
  },
  php: {
    baseline: {
      urls: ["https://www.php.net/manual/en/", "https://www.php.net/manual/en/langref.php"],
      evidence: "El manual y la referencia oficial de PHP cubren sintaxis, runtime, extensiones, HTTP, errores y despliegue.",
    },
    rules: [
      rule("opcache-preloading", { sections: ["internals de zend", "rendimiento", "modelo de ejecución"], titles: ["opcache", "preloading"] }, ["https://www.php.net/manual/en/book.opcache.php", "https://www.php.net/manual/en/opcache.preloading.php"], "El manual OPcache y la sección Preloading documentan bytecode compartido, configuración, reinicios y costo de memoria."),
      rule("web-security", { sections: ["seguridad"], titles: ["xss", "csrf", "inyección"] }, ["https://www.php.net/manual/en/security.php", "https://www.php.net/manual/en/"], "El manual de seguridad de PHP cubre entrada, sesiones, filesystem y configuración segura."),
      rule("fpm-operation", { sections: ["despliegue", "operación"], titles: ["fpm", "workers"] }, ["https://www.php.net/manual/en/install.fpm.php", "https://www.php.net/manual/en/"], "La documentación FPM respalda pools, ciclo de procesos y operación de servicios PHP."),
      rule("testing-and-packages", { sections: ["verificación", "calidad", "estándares"], titles: ["phpunit", "composer"] }, ["https://docs.phpunit.de/en/12.4/", "https://getcomposer.org/doc/"], "PHPUnit y Composer documentan pruebas, autoloading y dependencias reproducibles."),
    ],
  },
  haskell: {
    baseline: {
      urls: ["https://www.haskell.org/onlinereport/haskell2010/", "https://downloads.haskell.org/ghc/latest/docs/users_guide/"],
      evidence: "Haskell 2010 Report y GHC User's Guide cubren semántica, tipos, evaluación, extensiones y compilación.",
    },
    rules: [
      rule("concurrency-mvar", { sections: ["concurrencia"], titles: ["mvar"] }, ["https://hackage.haskell.org/package/base/docs/Control-Concurrent-MVar.html", "https://ghc.gitlab.haskell.org/ghc/doc/users_guide/runtime_control.html"], "Control.Concurrent.MVar documenta sincronización, orden y excepciones; GHC respalda la operación del runtime."),
      rule("profiling-cost-centres", { sections: ["producción observable", "optimización"], titles: ["cost centres", "heap residency", "runtime system options"] }, ["https://downloads.haskell.org/ghc/latest/docs/users_guide/", "https://ghc.gitlab.haskell.org/ghc/doc/users_guide/runtime_control.html"], "GHC User's Guide y Runtime System Options documentan cost centres, residencia de heap, flags RTS y evidencia de profiling en producción."),
      rule("testing", { sections: ["pruebas", "verificación"], titles: ["quickcheck"] }, ["https://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html", "https://downloads.haskell.org/ghc/latest/docs/users_guide/"], "QuickCheck y GHC documentan propiedades, generación y diagnósticos del compilador."),
      rule("distribution", { sections: ["construcción", "distribución", "producción"] }, ["https://cabal.readthedocs.io/en/stable/", "https://www.haskell.org/ghcup/"], "Cabal y GHCup documentan paquetes, resolución de toolchains y builds reproducibles para distribuir aplicaciones Haskell."),
    ],
  },
  go: {
    baseline: { urls: ["https://go.dev/ref/spec", "https://go.dev/doc/"], evidence: "La especificación y documentación oficial de Go cubren lenguaje, runtime, biblioteca, módulos y operación." },
    rules: [
      rule("memory-and-concurrency", { sections: ["runtime", "memoria", "concurrente"], titles: ["race", "ordering"] }, ["https://go.dev/ref/mem", "https://go.dev/doc/articles/race_detector"], "El modelo de memoria y race detector oficiales respaldan sincronización, visibilidad y detección de carreras."),
      rule("diagnostics", { sections: ["diagnóstico", "rendimiento"] }, ["https://go.dev/doc/diagnostics", "https://go.dev/doc/"], "Go Diagnostics documenta profiling, tracing y señales observables del runtime con procedimientos de captura y análisis."),
      rule("security", { sections: ["seguridad"] }, ["https://go.dev/doc/security/best-practices", "https://go.dev/doc/"], "Las prácticas oficiales de seguridad de Go cubren dependencias, fuzzing y superficies de entrada."),
    ],
  },
  kotlin: {
    baseline: { urls: ["https://kotlinlang.org/docs/home.html", "https://kotlinlang.org/spec/introduction.html"], evidence: "La documentación y especificación de Kotlin cubren lenguaje, tipos, interoperabilidad y plataformas." },
    rules: [
      rule("coroutines", { sections: ["coroutines", "flujos reactivos"] }, ["https://kotlinlang.org/docs/coroutines-guide.html", "https://kotlinlang.org/docs/home.html"], "La guía oficial de coroutines cubre cancelación, dispatchers, Flow y structured concurrency."),
      rule("platform-build-test", { sections: ["multiplataforma", "build", "pruebas"] }, ["https://kotlinlang.org/docs/gradle-configure-project.html", "https://kotlinlang.org/docs/jvm-test-using-junit.html"], "Las guías Kotlin de Gradle y testing documentan builds multiplataforma, suites verificables y configuración reproducible."),
      rule("native-memory", { sections: ["native", "memoria"], titles: ["memory manager", "memoria nativa", "kotlin/native", "native memory"] }, ["https://kotlinlang.org/docs/native-memory-manager.html", "https://kotlinlang.org/docs/home.html"], "La guía de memoria Kotlin/Native y la documentación principal explican administración, ciclo de vida e interoperabilidad fuera de la JVM."),
    ],
  },
  java: {
    baseline: { urls: ["https://docs.oracle.com/javase/specs/jls/se25/html/", "https://docs.oracle.com/en/java/javase/25/"], evidence: "JLS y la documentación JDK 25 cubren lenguaje, biblioteca estándar, herramientas y APIs de producción." },
    rules: [
      rule("jvm-runtime", { sections: ["jvm", "class files", "memoria de la jvm"], titles: ["bytecode", "collector"] }, ["https://docs.oracle.com/javase/specs/jvms/se25/html/", "https://docs.oracle.com/en/java/javase/25/gctuning/"], "JVMS y GC Tuning Guide documentan class files, ejecución, memoria y recolectores."),
      rule("security", { sections: ["seguridad"] }, ["https://docs.oracle.com/en/java/javase/25/security/security-developer-guide.pdf", "https://docs.oracle.com/en/java/javase/25/"], "La guía oficial de seguridad JDK respalda APIs, proveedores, permisos y criptografía."),
      rule("observability", { sections: ["operación", "rendimiento", "diagnóstico"] }, ["https://docs.oracle.com/en/java/javase/25/jfapi/index.html", "https://docs.oracle.com/en/java/javase/25/gctuning/"], "Flight Recorder y GC Tuning aportan eventos, perfiles y evidencia operativa para diagnosticar el runtime de la JVM."),
    ],
  },
  r: {
    baseline: { urls: ["https://cran.r-project.org/doc/manuals/r-release/R-lang.html", "https://cran.r-project.org/doc/manuals/r-release/R-intro.html"], evidence: "R Language Definition e Introduction to R cubren semántica, datos, evaluación, estadística y gráficos base." },
    rules: [
      rule("internals", { sections: ["semántica", "evaluación", "rendimiento", "objetos"] }, ["https://cran.r-project.org/doc/manuals/r-release/R-ints.html", "https://cran.r-project.org/doc/manuals/r-release/R-lang.html"], "R Internals y Language Definition documentan representación, atributos, evaluación y memoria."),
      rule("packages-and-operation", { sections: ["paquetes", "producción", "reproducibilidad"] }, ["https://cran.r-project.org/doc/manuals/r-release/R-exts.html", "https://cran.r-project.org/doc/manuals/r-release/R-admin.html"], "Writing R Extensions y R Administration cubren paquetes, instalación y operación reproducible."),
      rule("testing", { sections: ["pruebas", "contratos"] }, ["https://testthat.r-lib.org/", "https://cran.r-project.org/doc/manuals/r-release/R-exts.html"], "testthat y Writing R Extensions respaldan pruebas automatizadas, contratos de paquetes y comprobaciones reproducibles."),
    ],
  },
  assembly: {
    baseline: { urls: ["https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html", "https://developer.arm.com/Architectures"], evidence: "Los manuales oficiales Intel y Arm especifican ISA, memoria, privilegios, excepciones y ejecución de instrucciones." },
    rules: [
      rule("abi-and-linking", { sections: ["abi", "enlazado", "pila"] }, ["https://gitlab.com/x86-psABIs/x86-64-ABI", "https://dwarfstd.org/dwarf5std.html"], "System V AMD64 ABI y DWARF especifican llamadas, objetos, unwind y metadatos de depuración."),
      rule("toolchain-debug", { sections: ["toolchain", "depuración"] }, ["https://nasm.us/doc/", "https://sourceware.org/gdb/current/onlinedocs/gdb"], "NASM y GDB documentan ensamblado, símbolos, ejecución paso a paso y diagnóstico binario."),
    ],
  },
  erlang: {
    baseline: { urls: ["https://www.erlang.org/docs", "https://www.erlang.org/doc/system/reference_manual.html"], evidence: "La documentación Erlang/OTP y su Reference Manual cubren lenguaje, procesos, distribución y runtime." },
    rules: [
      rule("otp", { sections: ["otp", "supervisión", "releases"] }, ["https://www.erlang.org/doc/system/design_principles.html", "https://www.erlang.org/docs"], "OTP Design Principles documenta behaviours, supervision trees, applications y releases."),
      rule("runtime-efficiency", { sections: ["beam", "observabilidad", "rendimiento"] }, ["https://www.erlang.org/doc/apps/erts/", "https://www.erlang.org/doc/system/efficiency_guide.html"], "ERTS y Efficiency Guide documentan internals de BEAM, medición y decisiones de rendimiento observables."),
      rule("common-test", { sections: ["pruebas"], titles: ["common test", "test"] }, ["https://www.erlang.org/doc/apps/common_test/basics_chapter.html", "https://www.erlang.org/docs"], "Common Test Basics y Erlang/OTP Documentation describen suites, grupos, configuración y resultados verificables."),
    ],
  },
  lisp: {
    baseline: { urls: ["https://www.lispworks.com/documentation/HyperSpec/Front/", "https://www.sbcl.org/manual/"], evidence: "Common Lisp HyperSpec y SBCL Manual cubren lenguaje, CLOS, condiciones, compilación y runtime." },
    rules: [
      rule("scheme", { titles: ["scheme", "hygiene"], sections: ["programación funcional"] }, ["https://small.r7rs.org/attachment/r7rs.pdf", "https://www.lispworks.com/documentation/HyperSpec/Front/"], "R7RS y HyperSpec permiten distinguir contratos Scheme y Common Lisp sin fusionar dialectos."),
      rule("systems", { sections: ["entrega", "operación", "persistencia"] }, ["https://asdf.common-lisp.dev/asdf.html", "https://www.quicklisp.org/beta/"], "ASDF y Quicklisp documentan sistemas, dependencias, carga y distribución reproducible de aplicaciones Common Lisp."),
      rule("testing", { sections: ["testing", "calidad"] }, ["https://lispcookbook.github.io/cl-cookbook/testing.html", "https://www.sbcl.org/manual/"], "El cookbook y SBCL aportan prácticas verificables y soporte del runtime para testing."),
      rule("cffi", { sections: ["interoperabilidad"], titles: ["cffi", "callbacks nativos"] }, ["https://cffi.common-lisp.dev/manual/", "https://www.sbcl.org/manual/"], "El manual oficial CFFI documenta tipos extranjeros, callbacks, memoria y fronteras con C."),
    ],
  },
  perl: {
    baseline: { urls: ["https://perldoc.perl.org/", "https://perldoc.perl.org/perlsyn"], evidence: "Perldoc y perlsyn cubren lenguaje, contextos, regex, módulos, I/O y semántica de ejecución." },
    rules: [
      rule("distribution", { sections: ["cpan", "operación"] }, ["https://www.cpan.org/modules/INSTALL.html", "https://perldoc.perl.org/"], "CPAN y Perldoc documentan instalación, resolución de módulos y operación portable del ecosistema Perl."),
      rule("security-debug", { sections: ["seguridad", "diagnóstico"] }, ["https://perldoc.perl.org/perlsec", "https://perldoc.perl.org/perldebug"], "perlsec y perldebug son manuales primarios para amenazas, modo taint, inspección y diagnóstico reproducible."),
      rule("testing", { sections: ["testing", "pruebas"] }, ["https://perldoc.perl.org/Test::More", "https://perldoc.perl.org/"], "Test::More y Perldoc documentan aserciones, planes, diagnósticos y convenciones de pruebas Perl."),
    ],
  },
  raku: {
    baseline: { urls: ["https://docs.raku.org/", "https://rakudo.org/docs"], evidence: "Raku Documentation y Rakudo cubren lenguaje, tipos, despacho, concurrencia y VM." },
    rules: [
      rule("grammars", { sections: ["parsing", "gramáticas"] }, ["https://docs.raku.org/language/grammars", "https://docs.raku.org/"], "La guía oficial de grammars cubre tokens, rules, actions y construcción verificable de árboles de sintaxis abstracta."),
      rule("quality-performance", { sections: ["testing", "rendimiento"] }, ["https://docs.raku.org/language/testing", "https://docs.raku.org/language/performance"], "Las guías oficiales de testing y performance respaldan verificación, perfiles y decisiones de rendimiento en Raku."),
      rule("distribution", { sections: ["distribución", "operación"], titles: ["zef", "módulo"] }, ["https://github.com/ugexe/zef", "https://docs.raku.org/"], "Zef y la documentación Raku cubren resolución, instalación y operación reproducible de módulos."),
    ],
  },
  scala: {
    baseline: { urls: ["https://docs.scala-lang.org/scala3/reference/", "https://docs.scala-lang.org/scala3/book/introduction.html"], evidence: "Scala 3 Reference y Scala 3 Book cubren lenguaje, tipos, objetos y programación funcional." },
    rules: [
      rule("language-spec", { sections: ["tipos avanzados", "metaprogramación"] }, ["https://scala-lang.org/files/archive/spec/3.4/", "https://docs.scala-lang.org/scala3/reference/"], "La especificación y referencia Scala 3 documentan reglas de tipos y metaprogramación."),
      rule("quality-runtime", { sections: ["testing", "build", "jvm"] }, ["https://www.scala-sbt.org/1.x/docs/Testing.html", "https://docs.scala-lang.org/overviews/jdk-compatibility/overview.html"], "sbt y la guía de compatibilidad JDK respaldan testing, build e interoperabilidad del runtime Scala."),
      rule("safe-initialization", { sections: ["seguridad"], titles: ["safe initialization", "inicialización"] }, ["https://docs.scala-lang.org/scala3/reference/other-new-features/safe-initialization.html", "https://docs.scala-lang.org/scala3/reference/"], "Safe Initialization y Scala 3 Reference explican el análisis de inicialización y las garantías que evita accesos prematuros."),
    ],
  },
  blockchain: {
    baseline: { urls: ["https://csrc.nist.gov/pubs/ir/8202/final", "https://ethereum.org/en/developers/docs/"], evidence: "NIST IR 8202 y Ethereum Developer Docs cubren registro distribuido, consenso, contratos, seguridad y operación." },
    rules: [
      rule("bitcoin", { titles: ["bitcoin", "proof of work", "utxo"], sections: ["modelo de transacción"] }, ["https://bitcoin.org/bitcoin.pdf", "https://developer.bitcoin.org/reference/"], "El white paper y la referencia de Bitcoin documentan transacciones, bloques, red y proof of work."),
      rule("ethereum-execution", { sections: ["máquinas virtuales", "contratos", "consenso", "escalamiento"] }, ["https://ethereum.github.io/execution-specs/", "https://ethereum.github.io/yellowpaper/paper.pdf"], "Execution Specs y Yellow Paper respaldan estado, EVM, transición de bloques y ejecución de contratos."),
    ],
  },
  android: {
    baseline: { urls: ["https://developer.android.com/docs", "https://developer.android.com/guide/components/fundamentals"], evidence: "Android Developers y App Fundamentals cubren componentes, lifecycle, recursos, procesos y plataforma." },
    rules: [
      rule("room", { sections: ["datos locales"], titles: ["room"] }, ["https://developer.android.com/training/data-storage/room", "https://developer.android.com/docs"], "La guía oficial Room documenta entidades, DAOs, migraciones y persistencia local verificable."),
      rule("camerax", { sections: ["multimedia y sensores"], titles: ["camerax"] }, ["https://developer.android.com/media/camera/camerax", "https://developer.android.com/docs"], "CameraX overview documenta casos de uso, integración con lifecycle y compatibilidad de cámara entre dispositivos Android."),
      rule("quality-security", { sections: ["testing", "seguridad"] }, ["https://developer.android.com/training/testing/fundamentals", "https://developer.android.com/privacy-and-security/security-best-practices"], "Testing Fundamentals y Security Best Practices cubren verificación, aislamiento, permisos y hardening Android."),
      rule("runtime-health", { sections: ["diagnóstico", "rendimiento", "producción"], titles: ["application not responding", "anr", "crash reporting", "vitals"] }, ["https://developer.android.com/google/play/vitals", "https://developer.android.com/docs"], "Android Vitals y Android Developers documentan ANR, crashes, señales de estabilidad y criterios operativos observables."),
      rule("platform-internals", { sections: ["procesos y binder", "runtime", "tooling"] }, ["https://source.android.com/docs", "https://developer.android.com/docs"], "AOSP y Android Developers documentan internals del sistema, Binder, build y compatibilidad."),
    ],
  },
  qwik: {
    baseline: { urls: ["https://qwik.dev/docs/", "https://github.com/QwikDev/qwik"], evidence: "La documentación y repositorio oficiales de Qwik cubren resumibilidad, componentes, QRL y ejecución." },
    rules: [
      rule("resumability", { sections: ["resumibilidad", "modelo de ejecución"] }, ["https://qwik.dev/docs/concepts/resumable/", "https://qwik.dev/docs/advanced/optimizer/"], "Resumable y Optimizer documentan serialización, límites de símbolos y carga selectiva durante la reanudación del cliente."),
      rule("testing", { sections: ["testing"] }, ["https://qwik.dev/docs/integrations/vitest/", "https://qwik.dev/docs/"], "La integración oficial de Vitest y Qwik Docs cubren montaje, aserciones y verificación de componentes resumibles."),
      rule("deploy-middleware", { sections: ["operación", "producción", "qwik city"] }, ["https://qwik.dev/docs/deployments/", "https://qwik.dev/docs/middleware/"], "Las guías Qwik de deployments y middleware cubren adaptadores, fronteras de request y operación productiva."),
    ],
  },
  angular: {
    baseline: { urls: ["https://angular.dev/overview", "https://angular.dev/guide/signals"], evidence: "Angular Overview y Signals cubren componentes, templates, reactividad, estado y arquitectura moderna." },
    rules: [
      rule("dependency-injection", { sections: ["inyección de dependencias"] }, ["https://angular.dev/guide/di", "https://angular.dev/overview"], "La guía DI documenta providers, injectors, jerarquías y fronteras de ciclo de vida entre componentes Angular."),
      rule("testing-security", { sections: ["testing", "seguridad"] }, ["https://angular.dev/guide/testing", "https://angular.dev/best-practices/security"], "Las guías oficiales de testing y seguridad respaldan pruebas, sanitización y despliegue seguro."),
      rule("rendering", { sections: ["renderizado", "operación", "rendimiento"] }, ["https://angular.dev/guide/ssr", "https://angular.dev/guide/signals"], "SSR y Signals documentan render híbrido, hidratación y propagación observable de cambios en aplicaciones Angular."),
    ],
  },
  django: {
    baseline: { urls: ["https://docs.djangoproject.com/en/stable/", "https://docs.djangoproject.com/en/stable/intro/tutorial01/"], evidence: "La documentación y tutorial oficiales de Django cubren HTTP, modelos, ORM, templates, auth y administración." },
    rules: [
      rule("quality-security", { sections: ["testing", "seguridad", "autenticación"] }, ["https://docs.djangoproject.com/en/stable/topics/testing/", "https://docs.djangoproject.com/en/stable/topics/security/"], "Las guías Django de testing y seguridad respaldan verificación, auth y defensas web."),
      rule("performance-deploy", { sections: ["rendimiento", "entrega", "producción", "observabilidad"] }, ["https://docs.djangoproject.com/en/stable/topics/performance/", "https://docs.djangoproject.com/en/stable/howto/deployment/checklist/"], "Performance y Deployment Checklist cubren caché, consultas, configuración y operación segura."),
    ],
  },
  sql: {
    baseline: { urls: ["https://www.iso.org/standard/76583.html", "https://www.postgresql.org/docs/current/sql.html"], evidence: "ISO SQL:2023 y PostgreSQL SQL Language cubren modelo relacional, sintaxis, consultas, tipos y transacciones." },
    rules: [
      rule("syntax", { sections: ["consultas", "expresiones", "ventanas", "tipos"] }, ["https://www.postgresql.org/docs/current/sql-syntax.html", "https://www.sqlite.org/lang.html"], "PostgreSQL SQL Syntax y SQLite Language ofrecen dos implementaciones documentadas de expresiones y consultas SQL."),
      rule("optimizer-statistics", { sections: ["optimización"], titles: ["statistics", "estadísticas", "execution plans", "cardinality"] }, ["https://www.postgresql.org/docs/current/planner-stats.html", "https://www.postgresql.org/docs/current/using-explain.html"], "Planner Statistics y EXPLAIN documentan selectividad, cardinalidad, planes y evidencia para optimización."),
      rule("runtime-monitoring", { sections: ["diagnóstico", "observabilidad", "producción"], titles: ["wait events", "esperas", "actividad", "sesiones"] }, ["https://www.postgresql.org/docs/current/monitoring-stats.html", "https://www.postgresql.org/docs/current/sql.html"], "Monitoring Database Activity y SQL Language documentan wait events, sesiones, actividad y consultas observables durante la operación."),
      rule("transactions", { sections: ["concurrencia"], titles: ["isolation", "mvcc", "locks"] }, ["https://www.postgresql.org/docs/current/transaction-iso.html", "https://www.postgresql.org/docs/current/sql.html"], "Transaction Isolation y SQL Language respaldan anomalías, locks y límites transaccionales."),
      rule("row-security", { sections: ["seguridad"], titles: ["row-level security"] }, ["https://www.postgresql.org/docs/current/ddl-rowsecurity.html", "https://www.iso.org/standard/76583.html"], "Row Security Policies documenta evaluación de políticas por fila y su relación con privilegios SQL."),
      rule("pitr", { sections: ["recuperación", "continuidad"], titles: ["point-in-time recovery", "backup"] }, ["https://www.postgresql.org/docs/current/continuous-archiving.html", "https://www.postgresql.org/docs/current/sql.html"], "Continuous Archiving and PITR documenta WAL, backups base, recuperación temporal y failover comprobable."),
    ],
  },
  nosql: {
    baseline: { urls: ["https://www.mongodb.com/docs/", "https://cassandra.apache.org/doc/latest/"], evidence: "MongoDB y Cassandra documentan dos familias principales de modelado, distribución, replicación y operación NoSQL." },
    rules: [
      rule("key-value", { sections: ["clave-valor", "motores clave-valor"] }, ["https://redis.io/docs/latest/", "https://www.mongodb.com/docs/"], "Redis y MongoDB permiten contrastar contratos clave-valor y documentales con fuentes de cada motor."),
      rule("graphs", { sections: ["bases de grafos"], titles: ["grafo"] }, ["https://neo4j.com/docs/", "https://www.mongodb.com/docs/"], "Neo4j Documentation aporta el modelo de propiedades y recorridos; MongoDB documenta el contraste documental."),
      rule("time-series", { sections: ["series temporales"] }, ["https://docs.influxdata.com/", "https://www.mongodb.com/docs/"], "InfluxData y MongoDB documentan almacenamiento, consulta y retención para series temporales."),
      rule("security", { sections: ["seguridad"] }, ["https://www.mongodb.com/docs/manual/security/", "https://redis.io/docs/latest/operate/oss_and_stack/management/security/"], "Las guías de seguridad MongoDB y Redis cubren autenticación, transporte y mínimos privilegios."),
      rule("distribution", { sections: ["distribución", "replicación", "columnas anchas"] }, ["https://cassandra.apache.org/doc/latest/cassandra/architecture/overview.html", "https://www.mongodb.com/docs/"], "Cassandra Architecture y MongoDB documentan partición, réplica y consistencia en motores distribuidos."),
    ],
  },
  "operating-systems": {
    baseline: { urls: ["https://pubs.opengroup.org/onlinepubs/9799919799/", "https://docs.kernel.org/"], evidence: "POSIX.1-2024 y Linux Kernel Documentation cubren interfaces, procesos, memoria, archivos, red y operación." },
    rules: [
      rule("windows", { titles: ["windows", "driver"] }, ["https://learn.microsoft.com/en-us/windows-hardware/drivers/", "https://pubs.opengroup.org/onlinepubs/9799919799/"], "Windows Driver Documentation aporta el modelo del kernel Windows y POSIX ofrece el contraste portable."),
      rule("tracing", { sections: ["observabilidad", "diagnóstico"] }, ["https://docs.kernel.org/trace/index.html", "https://docs.kernel.org/"], "Kernel Tracing documenta ftrace, eventos y evidencia temporal para diagnosticar scheduling, interrupciones y operaciones de E/S."),
      rule("security-and-kernels", { sections: ["seguridad", "aislamiento"], titles: ["microkernel"] }, ["https://sel4.systems/Info/Docs/seL4-manual-latest.pdf", "https://docs.freebsd.org/en/books/handbook/"], "seL4 y FreeBSD aportan manuales primarios sobre aislamiento, capacidades y operación segura."),
    ],
  },
  "artificial-intelligence": {
    baseline: { urls: ["https://www.nist.gov/itl/ai-risk-management-framework", "https://scikit-learn.org/stable/user_guide.html"], evidence: "NIST AI RMF y scikit-learn User Guide cubren ciclo de vida, datos, modelos, evaluación y riesgos de IA." },
    rules: [
      rule("deep-learning", { sections: ["deep learning", "visión", "audio", "lenguaje", "generativos", "inferencia"] }, ["https://www.tensorflow.org/guide", "https://www.tensorflow.org/responsible_ai"], "TensorFlow Guide y Responsible AI documentan entrenamiento, inferencia y controles para modelos profundos."),
      rule("security", { sections: ["seguridad", "privacidad"] }, ["https://csrc.nist.gov/pubs/ai/100/2/e2025/final", "https://www.nist.gov/itl/ai-risk-management-framework"], "NIST AML Taxonomy y AI RMF cubren ataques, mitigaciones, evaluación y gobierno de riesgo durante el ciclo de vida de IA."),
      rule("evaluation-mlops", { sections: ["evaluación", "mlops", "producción"] }, ["https://mlcommons.org/benchmarks/", "https://scikit-learn.org/stable/user_guide.html"], "MLCommons y scikit-learn respaldan benchmarks, métricas y evaluación reproducible."),
      rule("high-risk-governance", { sections: ["gobernanza", "impacto"], titles: ["high-risk", "approval gate", "aprobación", "riesgo alto"] }, ["https://www.nist.gov/itl/ai-risk-management-framework", "https://www.tensorflow.org/responsible_ai"], "NIST AI RMF y Responsible AI Toolkit documentan clasificación de riesgo, controles, revisión humana y evidencia para aprobar usos de alto impacto."),
    ],
  },
  latex: {
    baseline: { urls: ["https://www.latex-project.org/help/documentation/", "https://latexref.xyz/"], evidence: "LaTeX Project Documentation y la referencia LaTeX2e cubren lenguaje, composición, matemáticas, referencias y errores." },
    rules: [
      rule("packages", { sections: ["clases", "paquetes"] }, ["https://ctan.org/", "https://www.latex-project.org/help/documentation/"], "CTAN y LaTeX Project documentan clases, paquetes, dependencias y contratos de extensión del sistema tipográfico."),
      rule("build-publication", { sections: ["automatización", "publicación"] }, ["https://ctan.org/pkg/latexmk", "https://tug.org/texlive/doc/texlive-en/texlive-en.html"], "latexmk y TeX Live documentan resolución del toolchain, múltiples pasadas y compilaciones repetibles de documentos LaTeX."),
      rule("accessibility", { sections: ["accesibilidad", "estándares"] }, ["https://latex3.github.io/tagging-project/", "https://www.latex-project.org/help/documentation/"], "Tagged PDF Project y LaTeX Project documentan estructura etiquetada y evolución de accesibilidad."),
    ],
  },
  subversion: {
    baseline: { urls: ["https://subversion.apache.org/docs/", "https://svnbook.red-bean.com/"], evidence: "Apache Subversion Documentation y SVN Book cubren working copies, revisiones, merge, administración y protocolos." },
    rules: [
      rule("merge", { sections: ["integración", "historia", "conflictos"] }, ["https://svnbook.red-bean.com/en/1.8/svn.branchmerge.basicmerging.html", "https://subversion.apache.org/faq.html"], "SVN Book Basic Merging y FAQ documentan merge tracking, conflictos y recuperación."),
      rule("security-governance", { sections: ["seguridad", "gobierno", "administración"] }, ["https://subversion.apache.org/security/", "https://subversion.apache.org/docs/community-guide/"], "Security y Community Guide respaldan avisos, authz, hooks y gobierno del proyecto."),
    ],
  },
};

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

function matchScore(ruleEntry: CoverageRule, concept: Pick<StudyConcept, "title" | "section">) {
  const section = normalize(concept.section);
  const title = normalize(concept.title);
  const titleMatches = (ruleEntry.match.titles ?? [])
    .map(normalize)
    .filter((term) => title.includes(term));
  const sectionMatches = (ruleEntry.match.sections ?? [])
    .map(normalize)
    .filter((term) => section.includes(term));
  const titleScore = titleMatches.reduce((score, term) => Math.max(score, 100 + term.length), 0);
  const sectionScore = sectionMatches.reduce((score, term) => Math.max(score, section === term ? 40 + term.length : 20 + term.length), 0);
  return titleScore + sectionScore;
}

function uniqueUrls(urls: readonly string[]) {
  return [...new Set(urls)];
}

function planFor(collectionId: string) {
  const coveragePlan = plans[collectionId];
  if (!coveragePlan) throw new Error(`Falta el plan explícito de cobertura documental para ${collectionId}.`);
  return coveragePlan;
}

export function resolveNewLearningSourceCoverage(
  collectionId: string,
  concept: Pick<StudyConcept, "title" | "section">,
  registeredUrls: ReadonlySet<string>,
): NewLearningSourceResolution {
  const coveragePlan = planFor(collectionId);
  const selectedRule = coveragePlan.rules
    .map((entry, order) => ({ entry, order, score: matchScore(entry, concept) }))
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score || left.order - right.order)[0]?.entry;
  const chapterCoverage = (chapterCoverageByCollection[collectionId] ?? [])
    .find((entry) => normalize(entry.section) === normalize(concept.section));
  const urls = selectedRule?.urls ?? chapterCoverage?.urls ?? coveragePlan.baseline.urls;
  const usedFallback = !selectedRule && !chapterCoverage;

  if (urls.length !== 2) throw new Error(`La cobertura explícita de ${collectionId}/${concept.title} debe devolver exactamente dos fuentes.`);
  for (const url of urls) {
    if (!registeredUrls.has(url)) throw new Error(`La regla documental de ${collectionId}/${concept.title} usa una URL no registrada: ${url}`);
  }

  return {
    urls,
    ruleIds: selectedRule
      ? [`${collectionId}:${selectedRule.id}`]
      : chapterCoverage
        ? [`${collectionId}:chapter:${chapterCoverage.section}`]
        : [],
    evidence: [selectedRule?.evidence ?? chapterCoverage?.evidence ?? coveragePlan.baseline.evidence],
    usedFallback,
  };
}

export function newLearningSourceMetadata(collectionId: string, url: string) {
  const coveragePlan = planFor(collectionId);
  const chapterCoverage = chapterCoverageByCollection[collectionId] ?? [];
  const evidence = [
    ...(coveragePlan.baseline.urls.includes(url) ? [coveragePlan.baseline.evidence] : []),
    ...coveragePlan.rules.filter((entry) => entry.urls.includes(url)).map((entry) => entry.evidence),
    ...chapterCoverage.filter((entry) => entry.urls.includes(url)).map((entry) => entry.evidence),
  ];
  const terms = coveragePlan.rules
    .filter((entry) => entry.urls.includes(url))
    .flatMap((entry) => [...(entry.match.sections ?? []), ...(entry.match.titles ?? [])]);
  return {
    evidence: [...new Set(evidence)],
    terms: [...new Set([
      ...terms,
      ...chapterCoverage.filter((entry) => entry.urls.includes(url)).map((entry) => entry.section),
    ])],
  };
}

export function validateNewLearningSourceCoverage(
  collections: readonly {
    id: string;
    sources: readonly { href: string }[];
    chapters: readonly { section: string; concepts: readonly (readonly [string, string])[] }[];
  }[],
) {
  const collectionIds = new Set(collections.map((collection) => collection.id));
  const planIds = Object.keys(plans);
  const chapterCoverageIds = Object.keys(chapterCoverageByCollection);
  const unusedRuleIds: string[] = [];
  if (planIds.length !== collections.length || planIds.some((id) => !collectionIds.has(id))) {
    throw new Error(`Los planes documentales no corresponden uno a uno con las ${collections.length} colecciones ampliadas.`);
  }
  if (chapterCoverageIds.length !== collections.length || chapterCoverageIds.some((id) => !collectionIds.has(id))) {
    throw new Error(`Los registros documentales por capítulo no corresponden uno a uno con las ${collections.length} colecciones ampliadas.`);
  }

  for (const collection of collections) {
    const coveragePlan = planFor(collection.id);
    if (coveragePlan.baseline.evidence.trim().length < 80) throw new Error(`La cobertura transversal de ${collection.id} no explica su evidencia.`);
    if (coveragePlan.baseline.urls.length !== 2) throw new Error(`La cobertura transversal de ${collection.id} debe declarar exactamente dos fuentes.`);
    if (coveragePlan.baseline.urls[0] === coveragePlan.baseline.urls[1]) throw new Error(`La cobertura transversal de ${collection.id} repite la misma fuente.`);
    const registeredUrls = new Set(collection.sources.map((entry) => entry.href));
    const declaredChapters = chapterCoverageByCollection[collection.id] ?? [];
    const declaredSections = declaredChapters.map((entry) => entry.section);
    const declaredEvidence = declaredChapters.map((entry) => normalize(entry.evidence));
    const actualSections = collection.chapters.map((chapter) => chapter.section);
    const declaredSectionKeys = new Set(declaredSections.map(normalize));
    const actualSectionKeys = new Set(actualSections.map(normalize));
    if (declaredSectionKeys.size !== declaredSections.length) {
      throw new Error(`El registro documental de ${collection.id} repite un capítulo.`);
    }
    if (new Set(declaredEvidence).size !== declaredEvidence.length) {
      throw new Error(`El registro documental de ${collection.id} repite evidencia genérica entre capítulos.`);
    }
    if (declaredSections.length !== actualSections.length
      || declaredSectionKeys.size !== actualSectionKeys.size
      || [...actualSectionKeys].some((section) => !declaredSectionKeys.has(section))
      || [...declaredSectionKeys].some((section) => !actualSectionKeys.has(section))) {
      throw new Error(`El registro de capítulos documentales de ${collection.id} no coincide con su currículo actual.`);
    }
    for (const chapterCoverage of declaredChapters) {
      if (chapterCoverage.urls.length !== 2) throw new Error(`El capítulo ${collection.id}/${chapterCoverage.section} debe declarar exactamente dos fuentes.`);
      if (chapterCoverage.urls[0] === chapterCoverage.urls[1]) throw new Error(`El capítulo ${collection.id}/${chapterCoverage.section} repite la misma fuente.`);
      if (chapterCoverage.evidence.trim().length < 80) throw new Error(`El capítulo ${collection.id}/${chapterCoverage.section} no justifica su cobertura documental.`);
      if (!normalize(chapterCoverage.evidence).includes(normalize(chapterCoverage.section))) {
        throw new Error(`La evidencia de ${collection.id}/${chapterCoverage.section} no nombra el capítulo que justifica.`);
      }
      for (const url of chapterCoverage.urls) {
        if (!url.startsWith("https://")) throw new Error(`El capítulo ${collection.id}/${chapterCoverage.section} debe usar HTTPS: ${url}`);
        if (!registeredUrls.has(url)) throw new Error(`El capítulo ${collection.id}/${chapterCoverage.section} usa una URL no registrada: ${url}`);
      }
    }
    const configuredUrls = uniqueUrls([
      ...coveragePlan.baseline.urls,
      ...declaredChapters.flatMap((entry) => entry.urls),
      ...coveragePlan.rules.flatMap((entry) => entry.urls),
    ]);
    for (const url of configuredUrls) {
      if (!url.startsWith("https://")) throw new Error(`La cobertura de ${collection.id} debe usar HTTPS: ${url}`);
      if (!registeredUrls.has(url)) throw new Error(`La cobertura de ${collection.id} usa una URL no registrada: ${url}`);
    }
    const ruleUsage = new Map(coveragePlan.rules.map((entry) => [entry.id, 0]));
    if (ruleUsage.size !== coveragePlan.rules.length) throw new Error(`La cobertura de ${collection.id} contiene IDs de regla duplicados.`);
    for (const ruleEntry of coveragePlan.rules) {
      if (ruleEntry.urls.length !== 2) throw new Error(`La regla ${collection.id}/${ruleEntry.id} debe declarar exactamente dos fuentes.`);
      if (ruleEntry.urls[0] === ruleEntry.urls[1]) throw new Error(`La regla ${collection.id}/${ruleEntry.id} repite la misma fuente.`);
      if ((ruleEntry.match.sections?.length ?? 0) + (ruleEntry.match.titles?.length ?? 0) === 0) throw new Error(`La regla ${collection.id}/${ruleEntry.id} no declara un alcance semántico.`);
      if (ruleEntry.evidence.trim().length < 80) throw new Error(`La regla ${collection.id}/${ruleEntry.id} no aporta evidencia editorial suficiente.`);
    }
    for (const chapter of collection.chapters) {
      for (const [title] of chapter.concepts) {
        const resolution = resolveNewLearningSourceCoverage(collection.id, { title, section: chapter.section }, registeredUrls);
        if (resolution.usedFallback || resolution.urls.length !== 2 || resolution.ruleIds.length !== 1) throw new Error(`La cobertura de ${collection.id}/${title} cayó en fallback o quedó incompleta.`);
        const ruleId = resolution.ruleIds[0]?.slice(collection.id.length + 1);
        if (ruleId && ruleUsage.has(ruleId)) ruleUsage.set(ruleId, (ruleUsage.get(ruleId) ?? 0) + 1);
      }
    }
    const unusedRules = [...ruleUsage.entries()].filter(([, uses]) => uses === 0).map(([id]) => id);
    unusedRuleIds.push(...unusedRules.map((id) => `${collection.id}/${id}`));
  }
  if (unusedRuleIds.length > 0) throw new Error(`La cobertura contiene reglas sin conceptos: ${unusedRuleIds.join(", ")}.`);

  const fixtures = [
    {
      collectionId: "haskell",
      title: "Cost centres",
      expectedUrls: ["https://downloads.haskell.org/ghc/latest/docs/users_guide/", "https://ghc.gitlab.haskell.org/ghc/doc/users_guide/runtime_control.html"],
    },
    {
      collectionId: "android",
      title: "Application Not Responding reports",
      expectedUrls: ["https://developer.android.com/google/play/vitals", "https://developer.android.com/docs"],
    },
    {
      collectionId: "sql",
      title: "Wait events",
      expectedUrls: ["https://www.postgresql.org/docs/current/monitoring-stats.html", "https://www.postgresql.org/docs/current/sql.html"],
    },
    {
      collectionId: "artificial-intelligence",
      title: "High-risk use approval gates",
      expectedUrls: ["https://www.nist.gov/itl/ai-risk-management-framework", "https://www.tensorflow.org/responsible_ai"],
    },
  ] as const;
  for (const fixture of fixtures) {
    const collection = collections.find((entry) => entry.id === fixture.collectionId);
    const chapter = collection?.chapters.find((entry) => entry.concepts.some(([title]) => title === fixture.title));
    if (!collection || !chapter) throw new Error(`No existe el fixture documental ${fixture.collectionId}/${fixture.title}.`);
    const resolution = resolveNewLearningSourceCoverage(
      fixture.collectionId,
      { title: fixture.title, section: chapter.section },
      new Set(collection.sources.map((entry) => entry.href)),
    );
    if (resolution.urls.some((url, index) => url !== fixture.expectedUrls[index])) {
      throw new Error(`El fixture documental ${fixture.collectionId}/${fixture.title} resolvió fuentes no pertinentes.`);
    }
  }
}

export const newLearningSourceCoveragePlanIds = Object.freeze(Object.keys(plans));
