import type { NewLearningExtensionRegistry } from "./newLearningExtensionTypes";

const rawNewLearningExtensionsPlatformsData: NewLearningExtensionRegistry = {
  lisp: [
    {
      section: "Representación y lectura avanzada",
      concepts: ["Cons cells y listas impropias", "Símbolos e internado", "Readtable", "Paquetes de lectura segura", "Impresión legible y circular"],
    },
    {
      section: "Programación funcional",
      concepts: ["Recursión de cola", "Funciones de orden superior", "Aplicación parcial", "Composición funcional", "Estructuras persistentes"],
    },
    {
      section: "Common Lisp Object System",
      concepts: ["Generic functions", "Multiple dispatch", "Method combinations", "Metaclasses", "Metaobject Protocol"],
    },
    {
      section: "Condiciones y recuperación",
      concepts: ["Condition hierarchy", "Handlers dinámicos", "Restart protocols", "Unwind-protect", "Reinicio interactivo en producción"],
    },
    {
      section: "Compilador y rendimiento",
      concepts: ["Declarations de tipos", "Compiler macros", "Disassembly", "Optimización por safety y speed", "Profiling de asignaciones"],
    },
    {
      section: "Testing y calidad",
      concepts: ["Pruebas unitarias con FiveAM", "Property-based testing", "Expansiones verificables", "Fixtures de imágenes Lisp", "Análisis estático con linter"],
    },
    {
      section: "Concurrencia",
      concepts: ["Threads por implementación", "Mutexes y semáforos", "Variables dinámicas por thread", "Mailbox y actores", "Procesamiento paralelo de secuencias"],
    },
    {
      section: "Persistencia y datos",
      concepts: ["Pathnames portables", "Streams binarios", "Serialización de formas", "Bases de datos de objetos", "Transacciones desde Lisp"],
    },
    {
      section: "Interoperabilidad",
      concepts: ["CFFI", "Callbacks nativos", "Gestión de memoria extranjera", "Protocolos de red", "Embebido del runtime"],
    },
    {
      section: "Seguridad del lenguaje extensible",
      concepts: ["Lectura de formas no confiables", "Evaluación restringida", "Validación de macros", "Límites de recursos", "Cadena de suministro de Quicklisp"],
    },
    {
      section: "Entrega y operación",
      concepts: ["ASDF systems", "Quicklisp dist", "Executable images", "Cold start de imagen", "Actualización sin perder estado"],
    },
  ],
  perl: [
    {
      section: "Semántica de datos",
      concepts: ["Autovivification", "Typeglobs", "Tied variables", "Bless y referencias", "Wantarray y propagación de contexto"],
    },
    {
      section: "Expresiones regulares avanzadas",
      concepts: ["Lookaround", "Backtracking y atomic groups", "Named captures", "Regex code assertions", "Límites de complejidad regex"],
    },
    {
      section: "Orientación a objetos moderna",
      concepts: ["Moo", "Moose", "Roles y composición", "Métodos BUILD y DEMOLISH", "Inmutabilidad de objetos"],
    },
    {
      section: "Distribución con CPAN",
      concepts: ["Distribución con Dist-Zilla", "Metadatos META.json", "Semantic versioning en módulos", "Entornos con local-lib", "Carton y dependencias reproducibles"],
    },
    {
      section: "Testing profundo",
      concepts: ["Test2", "Subtests", "Mocking de fronteras", "Cobertura con Devel-Cover", "Pruebas de compatibilidad multiplataforma"],
    },
    {
      section: "Seguridad",
      concepts: ["Untainting explícito", "Ejecución segura de procesos", "Three-argument open", "Validación de rutas", "Auditoría de módulos CPAN"],
    },
    {
      section: "Rendimiento y memoria",
      concepts: ["Benchmark", "Profiling con Devel-NYTProf", "Copy-on-write", "Optimización de regex", "XS para rutas críticas"],
    },
    {
      section: "Interoperabilidad y servicios",
      concepts: ["DBI", "PSGI y Plack", "JSON y formatos estructurados", "Sockets asíncronos", "Bindings con XS"],
    },
    {
      section: "Operación de sistemas Perl",
      concepts: ["Señales robustas", "Daemonización", "Gestión de subprocesses", "Logging estructurado", "Despliegue de workers persistentes"],
    },
  ],
  raku: [
    {
      section: "Modelo de objetos y metamodelo",
      concepts: ["HOW y WHAT", "Mixins en runtime", "Submethods", "Delegación con handles", "Metaclases personalizadas"],
    },
    {
      section: "Sistema de tipos expresivo",
      concepts: ["Subset types", "Coercion types", "Parametric roles", "Definite y undefined values", "Contratos where"],
    },
    {
      section: "Despacho avanzado",
      concepts: ["Proto candidates", "Constraints de candidatos", "Samewith y nextwith", "Redispatch", "Ambigüedad de multi dispatch"],
    },
    {
      section: "Gramáticas de producción",
      concepts: ["Proto regex y alternación longest-token", "Backtracking controlado", "Dynamic variables en actions", "Errores de parsing localizados", "Optimización de grammars"],
    },
    {
      section: "Concurrencia reactiva",
      concepts: ["Supply live y on-demand", "Tap y multicasting", "React y whenever", "Races con Promise.anyof", "Backpressure explícita"],
    },
    {
      section: "Testing y diagnóstico",
      concepts: ["Test plans", "Pruebas de gramáticas", "Rakudo debugger", "MoarVM profiler", "Detección de leaks"],
    },
    {
      section: "NativeCall e interoperabilidad",
      concepts: ["Firmas NativeCall", "Structs y unions nativos", "Callbacks hacia Raku", "Gestión de buffers", "Compatibilidad ABI"],
    },
    {
      section: "Módulos y distribución",
      concepts: ["META6.json", "Zef", "Repositorios de módulos", "Versiones y auth", "Compunits y carga dinámica"],
    },
    {
      section: "Operación sobre MoarVM",
      concepts: ["Specialization de MoarVM", "JIT logging", "Precomp repositories", "Telemetría de GC", "Empaquetado reproducible"],
    },
  ],
  scala: [
    {
      section: "Fundamentos funcionales",
      concepts: ["Funciones puras", "Referential transparency", "Option y Either", "Recursión con tailrec", "Type classes"],
    },
    {
      section: "Tipos avanzados de Scala 3",
      concepts: ["Opaque types", "Match types", "Dependent function types", "Higher-kinded types", "Type lambdas"],
    },
    {
      section: "Metaprogramación",
      concepts: ["Inline methods", "Compile-time operations", "Quoted code", "Splicing", "Derivación con Mirror"],
    },
    {
      section: "Efectos y recursos",
      concepts: ["IO como descripción", "Resource safety", "Cancelación estructurada", "Errores tipados", "Fibers"],
    },
    {
      section: "Streams",
      concepts: ["Streams funcionales", "Pull y push", "Backpressure", "Ventanas de eventos", "Procesamiento exactly-once"],
    },
    {
      section: "Concurrencia distribuida",
      concepts: ["Actor model", "Supervisión", "Cluster sharding", "Event sourcing", "Consistencia de mensajes"],
    },
    {
      section: "Testing",
      concepts: ["MUnit", "ScalaTest", "ScalaCheck", "Testcontainers", "Pruebas de leyes algebraicas"],
    },
    {
      section: "Build y dependencias",
      concepts: ["sbt task graph", "Cross-building", "Resolvers", "Dependency eviction", "Build reproducible"],
    },
    {
      section: "Rendimiento JVM",
      concepts: ["JIT warmup", "Boxing especializado", "Allocation profiling", "JMH benchmarks", "GraalVM native image"],
    },
    {
      section: "Interoperabilidad robusta",
      concepts: ["SAM conversion", "Nullability de Java", "Checked exceptions", "Converters de colecciones", "Publicación para consumidores Java"],
    },
    {
      section: "Seguridad y servicios",
      concepts: ["Validación de configuración", "TLS en clientes HTTP", "Deserialización segura", "Secret management", "Autorización por capacidades"],
    },
    {
      section: "Operación en producción",
      concepts: ["Structured logging", "Métricas JVM", "Distributed tracing", "Thread dump analysis", "Rolling upgrades"],
    },
  ],
  blockchain: [
    {
      section: "Criptografía aplicada",
      concepts: ["Curvas elípticas", "Esquemas de firma", "Funciones derivadoras de claves", "Pruebas de inclusión", "Agregación de firmas"],
    },
    {
      section: "Modelo de transacción",
      concepts: ["UTXO", "Account model", "Nonces", "Transaction fees", "Transacciones reemplazables"],
    },
    {
      section: "Protocolos de consenso",
      concepts: ["Nakamoto consensus", "BFT clásico", "Selección de proposer", "Slashing", "Liveness y safety"],
    },
    {
      section: "Red peer-to-peer",
      concepts: ["Peer discovery", "Gossip", "Propagación de bloques", "Sybil resistance", "Eclipse attacks"],
    },
    {
      section: "Máquinas virtuales y contratos",
      concepts: ["Bytecode de contratos", "Storage layout", "ABI de contrato", "Eventos y logs", "Upgradability patterns"],
    },
    {
      section: "Seguridad de contratos inteligentes",
      concepts: ["Reentrancy", "Integer y precision errors", "Access control defects", "Front-running y MEV", "Formal verification"],
    },
    {
      section: "Privacidad",
      concepts: ["Pseudonimato", "Coin mixing y límites", "Zero-knowledge proofs", "Commitment schemes", "Selective disclosure"],
    },
    {
      section: "Escalamiento",
      concepts: ["Payment channels", "Optimistic rollups", "ZK rollups", "Data availability", "Bridges entre redes"],
    },
    {
      section: "Economía del protocolo",
      concepts: ["Token issuance", "Fee markets", "Staking incentives", "Liquidity y riesgos", "Ataques económicos"],
    },
    {
      section: "Testing y desarrollo",
      concepts: ["Red local determinista", "Fork testing", "Property tests de invariantes", "Fuzzing de contratos", "Simulación de reorgs"],
    },
    {
      section: "Datos e interoperabilidad",
      concepts: ["RPC de nodo", "Event indexing", "Oracles descentralizados", "Cross-chain messaging", "Identidad descentralizada"],
    },
    {
      section: "Operación y gobierno",
      concepts: ["Node synchronization", "Pruning y archive nodes", "Gestión segura de validadores", "Governance attacks", "Respuesta a incidentes on-chain"],
    },
  ],
  android: [
    {
      section: "Arquitectura de aplicación",
      concepts: ["Unidirectional data flow", "Repository pattern", "Domain layer", "State holders", "Modularización por feature"],
    },
    {
      section: "Compose profundo",
      concepts: ["Recomposition scopes", "State hoisting", "Snapshot system", "Side-effect APIs", "Layouts personalizados"],
    },
    {
      section: "Interfaz clásica",
      concepts: ["View hierarchy", "ConstraintLayout", "RecyclerView", "Fragments", "View binding"],
    },
    {
      section: "Datos locales",
      concepts: ["Room schema", "DataStore", "Storage Access Framework", "Encrypted storage", "Migraciones de datos locales"],
    },
    {
      section: "Red y sincronización",
      concepts: ["Conectividad cambiante", "Offline-first", "Paginación remota", "Conflictos de sincronización", "Certificados y network security config"],
    },
    {
      section: "Coroutines en Android",
      concepts: ["Structured concurrency", "Lifecycle scopes", "Flow hot y cold", "Dispatchers", "Cancelación cooperativa"],
    },
    {
      section: "Multimedia y sensores",
      concepts: ["CameraX", "Media3", "SensorManager", "Bluetooth Low Energy", "Ubicación con límites de privacidad"],
    },
    {
      section: "Accesibilidad e internacionalización",
      concepts: ["Semantics de Compose", "TalkBack traversal", "Dynamic type", "Recursos localizados", "Layouts bidireccionales"],
    },
    {
      section: "Testing por capas",
      concepts: ["JUnit local", "Compose UI tests", "Espresso", "Macrobenchmark", "Fake services y test doubles"],
    },
    {
      section: "Rendimiento",
      concepts: ["Baseline Profiles", "Startup tracing", "Jank analysis", "Memory leak detection", "Battery Historian"],
    },
    {
      section: "Seguridad móvil",
      concepts: ["Android Keystore", "BiometricPrompt", "Intent spoofing", "Deep link validation", "Play Integrity API"],
    },
    {
      section: "Procesos y Binder",
      concepts: ["Binder IPC", "Parcelables", "Process lifecycle priority", "Bound services", "ANR internals"],
    },
    {
      section: "Tooling y build",
      concepts: ["Android Gradle Plugin", "Build variants", "Version catalogs", "R8 shrinking", "Reproducible APK y AAB"],
    },
    {
      section: "Entrega y compatibilidad",
      concepts: ["App Bundles", "Dynamic feature delivery", "Staged rollout", "Backward compatibility", "Behavior changes por API level"],
    },
    {
      section: "Diagnóstico en producción",
      concepts: ["Crash reporting", "Application Not Responding reports", "Vitals de Play", "Tombstones nativos", "Rollback de versión móvil"],
    },
  ],
  qwik: [
    {
      section: "Modelo de ejecución",
      concepts: ["Lexical scope extraction", "QRL references", "Event serialization", "Proxy state", "Fine-grained subscriptions"],
    },
    {
      section: "Tareas y ciclo reactivo",
      concepts: ["useTask$", "useVisibleTask$", "Tracking explícito", "Cleanup de tareas", "Server tasks"],
    },
    {
      section: "Composición de interfaz",
      concepts: ["Slots", "Context providers", "Head metadata", "Styles scoped", "Component boundaries"],
    },
    {
      section: "Qwik City avanzado",
      concepts: ["Nested layouts", "Route middleware", "Typed route loaders", "Server functions", "Static site generation"],
    },
    {
      section: "Datos y mutaciones",
      concepts: ["Optimistic forms", "Validation con schemas", "Route action failures", "Cookies seguras", "Invalidación de loaders"],
    },
    {
      section: "Testing",
      concepts: ["Unit testing de componentes", "Pruebas de loaders", "Browser interaction tests", "SSR snapshots", "Pruebas de serialización"],
    },
    {
      section: "Seguridad web",
      concepts: ["Escapado SSR", "CSRF en actions", "Content Security Policy", "Validación de redirect", "Secretos solo en servidor"],
    },
    {
      section: "Optimización",
      concepts: ["Bundle graph", "Prefetch strategies", "Resource hints", "Image optimization", "Partytown para terceros"],
    },
    {
      section: "Operación multiplataforma",
      concepts: ["Node adapter", "Edge adapters", "Serverless cold starts", "Observabilidad SSR", "Migraciones de versión"],
    },
  ],
  angular: [
    {
      section: "Templates avanzados",
      concepts: ["Template type checking", "Host bindings", "Queries de vista", "Deferrable views", "Directivas estructurales personalizadas"],
    },
    {
      section: "Arquitectura reactiva",
      concepts: ["Signal stores", "RxJS scheduling", "Resource API", "Interop Observable Signal", "Estado derivado sin efectos"],
    },
    {
      section: "Inyección de dependencias profunda",
      concepts: ["Hierarchical injectors", "Injection tokens", "Environment providers", "Injection context", "Multi providers"],
    },
    {
      section: "Router avanzado",
      concepts: ["Functional guards", "Resolvers", "Route reuse", "Auxiliary outlets", "Preloading strategies"],
    },
    {
      section: "Formularios tipados",
      concepts: ["Typed controls", "Cross-field validation", "Async validators", "ControlValueAccessor", "Estado de envío accesible"],
    },
    {
      section: "HTTP y datos",
      concepts: ["Functional interceptors", "Cancellation de requests", "Transfer cache", "Retry con política", "Streaming de respuestas"],
    },
    {
      section: "Renderizado",
      concepts: ["Incremental hydration", "Event replay", "Prerender parameters", "Server routes", "Hydration mismatch diagnosis"],
    },
    {
      section: "Testing unitario",
      concepts: ["TestBed", "Component harnesses", "FakeAsync scheduler", "HTTP testing controller", "Signal effect testing"],
    },
    {
      section: "Testing integral",
      concepts: ["Contract tests", "End-to-end journeys", "Visual regression", "Accessibility automation", "SSR integration tests"],
    },
    {
      section: "Seguridad de aplicación",
      concepts: ["Sanitization contexts", "Trusted Types", "XSRF protection", "Route authorization limits", "Dependency vulnerability review"],
    },
    {
      section: "Rendimiento",
      concepts: ["OnPush strategy", "Track expressions", "Virtual scrolling", "Bundle analysis", "Runtime performance marks"],
    },
    {
      section: "Design systems",
      concepts: ["Angular CDK", "Overlay primitives", "Theming tokens", "Form field semantics", "Component API stability"],
    },
    {
      section: "Tooling y monorepos",
      concepts: ["Angular CLI builders", "Workspace libraries", "Incremental builds", "Code generation schematics", "Dependency boundaries"],
    },
    {
      section: "Interoperabilidad",
      concepts: ["Custom elements", "Web components", "Microfrontends con Module Federation", "Integración de librerías no Angular", "Fronteras con AngularJS"],
    },
    {
      section: "Operación y evolución",
      concepts: ["ErrorHandler global", "Telemetría del router", "Source maps protegidos", "Migrations con ng update", "Canary y rollback frontend"],
    },
  ],
  django: [
    {
      section: "ORM avanzado",
      concepts: ["Expressions F y Q", "Annotations", "Subquery y Exists", "select_related y prefetch_related", "Bulk operations"],
    },
    {
      section: "Diseño de modelos",
      concepts: ["Constraints declarativas", "Custom fields", "Model inheritance", "Managers", "Signals y sus límites"],
    },
    {
      section: "Ciclo HTTP profundo",
      concepts: ["ASGI request scope", "Middleware ordering", "Streaming responses", "Content negotiation", "Conditional responses"],
    },
    {
      section: "Plantillas y presentación",
      concepts: ["Template inheritance", "Context processors", "Custom template tags", "Escapado automático", "Fragment caching"],
    },
    {
      section: "Autenticación y autorización",
      concepts: ["Custom user model", "Password hashers", "Permissions y groups", "Session security", "Object-level authorization"],
    },
    {
      section: "Seguridad web",
      concepts: ["CSRF internals", "Clickjacking protection", "Host header validation", "File upload hardening", "Secret key rotation"],
    },
    {
      section: "APIs con Django",
      concepts: ["Serialización explícita", "API versioning", "Pagination", "Rate limiting", "OpenAPI contracts"],
    },
    {
      section: "Procesamiento asíncrono",
      concepts: ["Async views", "Async ORM boundaries", "Task queues", "Idempotent jobs", "Transactional outbox"],
    },
    {
      section: "Testing",
      concepts: ["TestCase y TransactionTestCase", "Factories", "Override settings", "Database query assertions", "Browser tests"],
    },
    {
      section: "Rendimiento",
      concepts: ["N+1 detection", "QuerySet evaluation", "Connection pooling", "Cache invalidation", "Load testing"],
    },
    {
      section: "Archivos y contenido",
      concepts: ["Storage backends", "Upload handlers", "Media authorization", "Image processing isolation", "Static asset hashing"],
    },
    {
      section: "Internacionalización y accesibilidad",
      concepts: ["Translation catalogs", "Lazy translations", "Time zones", "Locale-aware formats", "Form error semantics"],
    },
    {
      section: "Observabilidad",
      concepts: ["Request correlation", "Structured logging", "Error reporting", "Database tracing", "Health y readiness checks"],
    },
    {
      section: "Entrega y evolución",
      concepts: ["Zero-downtime migrations", "Collectstatic deployment", "Worker lifecycle", "Feature flags", "Rollback compatible con esquema"],
    },
  ],
  sql: [
    {
      section: "Álgebra y cálculo relacional",
      concepts: ["Selección y proyección", "Producto y join relacional", "División relacional", "Cálculo de tuplas", "Equivalencia de expresiones"],
    },
    {
      section: "Diseño lógico avanzado",
      concepts: ["Dependencias funcionales", "Forma normal de Boyce-Codd", "Dependencias multivaluadas", "Descomposición sin pérdida", "Integridad referencial diferida"],
    },
    {
      section: "Expresiones de consulta",
      concepts: ["Common table expressions", "Recursive queries", "LATERAL joins", "Grouping sets", "Pivotado portable"],
    },
    {
      section: "Semántica de ventanas",
      concepts: ["Window partitions", "Frames ROWS y RANGE", "Ranking", "Running aggregates", "Gaps and islands"],
    },
    {
      section: "Tipos y dominios",
      concepts: ["Tipos exactos y aproximados", "Temporal data", "Intervals", "JSON en SQL", "User-defined domains"],
    },
    {
      section: "Procedimientos y automatización",
      concepts: ["Stored routines", "Triggers", "Generated columns", "Sequences e identity", "Event scheduling"],
    },
    {
      section: "Internals de almacenamiento",
      concepts: ["Heap pages", "B-tree internals", "Write-ahead log", "Buffer pool", "Vacuum y garbage collection"],
    },
    {
      section: "Optimización de consultas",
      concepts: ["Cardinality estimation", "Join ordering", "Cost model", "Predicate pushdown", "Plan cache y parameter sensitivity"],
    },
    {
      section: "Índices especializados",
      concepts: ["Covering indexes", "Partial indexes", "Expression indexes", "Hash indexes", "Full-text indexes"],
    },
    {
      section: "Concurrencia avanzada",
      concepts: ["Snapshot isolation", "Serializable anomalies", "Predicate locks", "Optimistic concurrency", "Advisory locks"],
    },
    {
      section: "Particionado y distribución",
      concepts: ["Range partitioning", "Hash partitioning", "Partition pruning", "Read replicas", "Distributed transactions"],
    },
    {
      section: "Testing de datos",
      concepts: ["Constraint tests", "Migration tests", "Query result contracts", "Concurrency tests", "Production-like fixtures"],
    },
    {
      section: "Seguridad",
      concepts: ["Least-privilege grants", "Row-level security", "Column masking", "SQL injection defenses", "Encryption at rest and transit"],
    },
    {
      section: "Recuperación y continuidad",
      concepts: ["Point-in-time recovery", "Backup consistency", "Replication failover", "Recovery objectives", "Restore drills"],
    },
    {
      section: "Observabilidad y operación",
      concepts: ["Wait events", "Slow query logging", "Connection saturation", "Data growth forecasting", "Online schema changes"],
    },
  ],
  nosql: [
    {
      section: "Teoría de sistemas distribuidos",
      concepts: ["CAP con particiones reales", "PACELC", "Linearizability", "Causal consistency", "Read-your-writes"],
    },
    {
      section: "Motores clave-valor",
      concepts: ["In-memory keyspace", "Persistence logs", "Eviction policies", "Atomic commands", "Distributed locks y límites"],
    },
    {
      section: "Bases documentales",
      concepts: ["Document boundaries", "Schema validation", "Nested indexing", "Aggregation pipelines", "Atomic document updates"],
    },
    {
      section: "Columnas anchas",
      concepts: ["Partition keys", "Clustering columns", "LSM trees", "SSTables", "Compaction strategies"],
    },
    {
      section: "Bases de grafos",
      concepts: ["Property graph", "Graph traversals", "Cypher patterns", "Graph indexes", "Supernodes"],
    },
    {
      section: "Series temporales y búsqueda",
      concepts: ["Time bucketing", "Downsampling", "Inverted indexes", "Relevance scoring", "Retention tiers"],
    },
    {
      section: "Replicación interna",
      concepts: ["Leader-follower", "Leaderless replication", "Vector clocks", "Read repair", "Anti-entropy"],
    },
    {
      section: "Transacciones no relacionales",
      concepts: ["Single-partition transactions", "Multi-document transactions", "Compare-and-swap", "Sagas", "Idempotency records"],
    },
    {
      section: "Evolución del modelo",
      concepts: ["Versioned documents", "Dual reads and writes", "Backfills online", "Index rebuilds", "Tombstone management"],
    },
    {
      section: "Testing distribuido",
      concepts: ["Fault injection", "Clock skew simulation", "Network partition tests", "Consistency verification", "Capacity benchmarks"],
    },
    {
      section: "Seguridad",
      concepts: ["Network isolation", "Role-based access", "Field-level encryption", "Audit trails", "Backup credential separation"],
    },
    {
      section: "Rendimiento y capacidad",
      concepts: ["Working set", "Write amplification", "Cache hit ratio", "Shard rebalancing", "Tail latency"],
    },
    {
      section: "Integración de datos",
      concepts: ["Change data capture", "Connectors", "Materialized views", "Search synchronization", "Polyglot persistence"],
    },
    {
      section: "Operación y recuperación",
      concepts: ["Rolling maintenance", "Cross-region replication", "Disaster recovery", "Consistency-aware monitoring", "Safe decommissioning"],
    },
  ],
  "operating-systems": [
    {
      section: "Arranque y arquitectura de kernel",
      concepts: ["Firmware y bootloader", "Kernel initialization", "Monolithic y microkernel", "Kernel modules", "Init y service manager"],
    },
    {
      section: "Planificación avanzada",
      concepts: ["Scheduling classes", "Preemption", "CPU affinity", "Priority inversion", "Real-time scheduling"],
    },
    {
      section: "Sincronización del kernel",
      concepts: ["Atomic operations", "Spinlocks", "Read-copy-update", "Futexes", "Memory barriers"],
    },
    {
      section: "Memoria virtual profunda",
      concepts: ["Page tables", "Translation lookaside buffer", "Copy-on-write", "Memory-mapped files", "NUMA placement"],
    },
    {
      section: "Gestión de memoria física",
      concepts: ["Buddy allocator", "Slab allocation", "Huge pages", "Swap", "Out-of-memory handling"],
    },
    {
      section: "Sistemas de archivos",
      concepts: ["VFS layer", "Inodes", "Journaling", "Copy-on-write filesystems", "Crash consistency"],
    },
    {
      section: "Entrada y salida",
      concepts: ["Device drivers", "DMA", "I/O schedulers", "Interrupt coalescing", "Asynchronous I/O"],
    },
    {
      section: "Red dentro del sistema",
      concepts: ["Socket buffers", "Network stack traversal", "Packet filtering", "Routing tables", "Zero-copy networking"],
    },
    {
      section: "Aislamiento y virtualización",
      concepts: ["Namespaces", "Control groups", "Hypervisors", "Virtual devices", "Container escape boundaries"],
    },
    {
      section: "Seguridad del sistema",
      concepts: ["Discretionary access control", "Mandatory access control", "Capabilities", "Secure boot", "Kernel attack surface"],
    },
    {
      section: "Comunicación entre procesos",
      concepts: ["Pipes", "Shared memory", "Message queues", "Signals", "Local sockets"],
    },
    {
      section: "Tiempo y energía",
      concepts: ["Monotonic clocks", "Timer interrupts", "Clock synchronization", "CPU frequency scaling", "Suspend and resume"],
    },
    {
      section: "Testing de bajo nivel",
      concepts: ["Kernel unit testing", "System call fuzzing", "Race detectors", "Fault injection", "Boot regression testing"],
    },
    {
      section: "Observabilidad",
      concepts: ["Performance counters", "Dynamic tracing", "eBPF programs", "Core dumps", "Flame graphs"],
    },
    {
      section: "Operación y recuperación",
      concepts: ["Patch management", "Kernel live patching", "Filesystem recovery", "Capacity limits", "Postmortem de kernel panic"],
    },
  ],
  "artificial-intelligence": [
    {
      section: "Búsqueda y planificación",
      concepts: ["Búsqueda heurística", "A star", "Constraint satisfaction", "Planning graphs", "Monte Carlo tree search"],
    },
    {
      section: "Representación del conocimiento",
      concepts: ["Lógica proposicional", "Lógica de primer orden", "Ontologías", "Knowledge graphs", "Razonamiento probabilístico"],
    },
    {
      section: "Preparación de datos",
      concepts: ["Data provenance", "Sampling bias", "Missing values", "Feature encoding", "Dataset versioning"],
    },
    {
      section: "Aprendizaje supervisado",
      concepts: ["Regularización", "Ensembles", "Calibration", "Class imbalance", "Hyperparameter search"],
    },
    {
      section: "Aprendizaje no supervisado",
      concepts: ["Clustering", "Dimensionality reduction", "Anomaly detection", "Topic modeling", "Representation learning"],
    },
    {
      section: "Aprendizaje por refuerzo",
      concepts: ["Markov decision processes", "Value functions", "Policy gradients", "Exploration versus exploitation", "Offline reinforcement learning"],
    },
    {
      section: "Deep learning internals",
      concepts: ["Backpropagation", "Activation functions", "Normalization layers", "Attention mechanism", "Gradient stability"],
    },
    {
      section: "Visión, audio y lenguaje",
      concepts: ["Convolutional models", "Vision transformers", "Speech representations", "Tokenization", "Multimodal alignment"],
    },
    {
      section: "Modelos generativos",
      concepts: ["Autoregressive generation", "Diffusion models", "Retrieval-augmented generation", "Prompt injection", "Hallucination evaluation"],
    },
    {
      section: "Evaluación rigurosa",
      concepts: ["Cross-validation", "Confidence intervals", "Out-of-distribution tests", "Human evaluation", "Causal versus predictive metrics"],
    },
    {
      section: "Testing de sistemas de IA",
      concepts: ["Data validation tests", "Metamorphic testing", "Model contract tests", "Red teaming", "Shadow deployment"],
    },
    {
      section: "Seguridad y privacidad",
      concepts: ["Adversarial examples", "Data poisoning", "Model extraction", "Differential privacy", "Federated learning"],
    },
    {
      section: "MLOps",
      concepts: ["Experiment tracking", "Feature stores", "Model registry", "Reproducible training", "Continuous evaluation"],
    },
    {
      section: "Inferencia eficiente",
      concepts: ["Batching", "Quantization", "Pruning", "Knowledge distillation", "Hardware accelerators"],
    },
    {
      section: "Gobernanza e impacto",
      concepts: ["Model cards", "Algorithmic impact assessment", "Human oversight", "Incident response for AI", "Retirement de modelos"],
    },
  ],
  latex: [
    {
      section: "TeX y expansión profunda",
      concepts: ["Tokens y category codes", "Expansion order", "TeX groups", "Registers", "Robust commands"],
    },
    {
      section: "Diseño de clases y paquetes",
      concepts: ["Document class options", "Package interfaces", "Key-value configuration", "Hooks de LaTeX", "Expl3 conventions"],
    },
    {
      section: "Tipografía",
      concepts: ["Microtypography", "Hyphenation", "Line breaking", "Font encodings", "OpenType features"],
    },
    {
      section: "Matemáticas avanzadas",
      concepts: ["Equation alignment", "Theorem environments", "Custom operators", "Semantic math macros", "Math font selection"],
    },
    {
      section: "Gráficos y datos",
      concepts: ["TikZ paths", "PGFPlots", "Data-driven tables", "Float placement", "Vector asset workflow"],
    },
    {
      section: "Bibliografías complejas",
      concepts: ["BibLaTeX data model", "Biber processing", "Citation styles", "Multilingual bibliographies", "Reference data validation"],
    },
    {
      section: "Documentos extensos",
      concepts: ["Multi-file projects", "Glossaries", "Multiple indexes", "Cross-document references", "Incremental compilation"],
    },
    {
      section: "Accesibilidad y estándares",
      concepts: ["Tagged PDF", "Logical reading order", "Alternative text", "PDF/A", "Accessible mathematics"],
    },
    {
      section: "Testing y automatización",
      concepts: ["l3build", "Visual regression of PDFs", "Continuous compilation", "Dependency pinning", "Font license checks"],
    },
    {
      section: "Seguridad y publicación",
      concepts: ["Shell escape boundaries", "Untrusted TeX input", "Reproducible PDF metadata", "Preflight de imprenta", "Archivo de fuentes y artefactos"],
    },
  ],
  subversion: [
    {
      section: "Working copy profunda",
      concepts: ["Pristine store", "Mixed-revision working copies", "Changelists", "Sparse directories", "Externals definitions"],
    },
    {
      section: "Integración avanzada",
      concepts: ["Three-way merge", "Eligible revisions", "Subtree mergeinfo", "Reintegración de ramas", "Cherry-pick centralizado"],
    },
    {
      section: "Propiedades y metadatos",
      concepts: ["Versioned properties", "Automatic properties", "Executable y MIME properties", "Keywords", "Inheritance de propiedades"],
    },
    {
      section: "Protocolos y servidores",
      concepts: ["HTTP con mod_dav_svn", "svnserve", "FSFS backend", "FSX backend", "Repository hotcopy"],
    },
    {
      section: "Seguridad y gobierno",
      concepts: ["Path-based authorization", "Authentication backends", "Hook sandboxing", "Secret detection pre-commit", "Audit de revisiones"],
    },
    {
      section: "Testing y automatización",
      concepts: ["Hook contract tests", "Merge rehearsal", "Working copy fixtures", "CI por revisión", "Validación de svn:externals"],
    },
    {
      section: "Rendimiento y mantenimiento",
      concepts: ["Repository packing", "Revision caching", "Network compression", "Working copy cleanup internals", "Large repository tuning"],
    },
    {
      section: "Continuidad y migración",
      concepts: ["Dump y load", "Incremental backups", "svnsync failover", "History filtering", "Migración verificable a otro VCS"],
    },
  ],
};

type SupplementalSeed = readonly [section: string, concepts: readonly string[]];

/**
 * Ampliaciones deliberadamente desiguales. Los capítulos estrechos reciben un
 * concepto adicional y los que cruzan varias fronteras reciben dos o tres.
 * La clave por nombre de sección evita que una reordenación silenciosa mueva
 * conceptos a un capítulo que no les corresponde.
 */
const supplementalConceptTitles: Readonly<Record<string, readonly SupplementalSeed[]>> = {
  lisp: [
    ["Representación y lectura avanzada", ["Circular reader labels", "Read-time evaluation control"]],
    ["Programación funcional", ["Memoization con igualdad explícita"]],
    ["Common Lisp Object System", ["Slot allocation protocol", "Class redefinition"]],
    ["Condiciones y recuperación", ["Restart-case orchestration"]],
    ["Compilador y rendimiento", ["Type proclamations across compilation units", "Tail-call diagnostics"]],
    ["Testing y calidad", ["Random-state reproducibility"]],
    ["Concurrencia", ["Condition variables", "Atomic memory operations"]],
    ["Persistencia y datos", ["External formats and transcoding"]],
    ["Interoperabilidad", ["ABI alignment and calling conventions", "Foreign resource finalization"]],
    ["Seguridad del lenguaje extensible", ["Package locks", "Disabling read-time evaluation"]],
    ["Entrega y operación", ["Source registry configuration", "Image provenance manifests"]],
  ],
  perl: [
    ["Semántica de datos", ["Magic variables and scalar flags", "Weak references"]],
    ["Expresiones regulares avanzadas", ["Recursive patterns", "Backtracking control verbs"]],
    ["Orientación a objetos moderna", ["Method modifiers"]],
    ["Distribución con CPAN", ["CPAN metadata validation", "Reproducible distribution archives"]],
    ["Testing profundo", ["TAP protocol", "prove harness orchestration"]],
    ["Seguridad", ["Safe compartment limitations", "Unicode canonicalization attacks"]],
    ["Rendimiento y memoria", ["OP tree inspection"]],
    ["Interoperabilidad y servicios", ["DBI transaction boundaries", "PSGI streaming lifecycle"]],
    ["Operación de sistemas Perl", ["Safe signal semantics", "ithreads deployment trade-offs"]],
  ],
  raku: [
    ["Modelo de objetos y metamodelo", ["Role composition conflicts", "BUILD and TWEAK lifecycle"]],
    ["Sistema de tipos expresivo", ["Native numeric types"]],
    ["Despacho avanzado", ["Multi dispatch cache invalidation", "callsame candidate traversal"]],
    ["Gramáticas de producción", ["Actions object separation", "Backtracking control in protoregexes"]],
    ["Concurrencia reactiva", ["react and whenever cancellation", "Scheduler selection"]],
    ["Testing y diagnóstico", ["Test plan contracts", "Concurrent failure reproducibility"]],
    ["NativeCall e interoperabilidad", ["CStruct memory layout", "Foreign memory ownership"]],
    ["Módulos y distribución", ["CompUnit repositories", "Version auth and api resolution"]],
    ["Operación sobre MoarVM", ["Spesh optimizer", "Nursery garbage-collection tuning", "MoarVM telemetry frames"]],
  ],
  scala: [
    ["Fundamentos funcionales", ["Referential transparency boundaries"]],
    ["Tipos avanzados de Scala 3", ["Match type termination", "Opaque type ABI boundaries"]],
    ["Metaprogramación", ["Inline recursion budgets", "Quote staging levels", "Compile-time reflection boundaries"]],
    ["Efectos y recursos", ["Bracketed resource safety", "Cancellation masks"]],
    ["Streams", ["Demand signaling"]],
    ["Concurrencia distribuida", ["Cluster split-brain resolution", "Serializer schema evolution"]],
    ["Testing", ["Effectful test control", "Deterministic asynchronous tests"]],
    ["Build y dependencias", ["Zinc incremental compilation", "Dependency eviction analysis"]],
    ["Rendimiento JVM", ["Allocation sampling profiles", "JIT warmup methodology"]],
    ["Interoperabilidad robusta", ["Checked exception modeling", "Collection conversion ownership"]],
    ["Seguridad y servicios", ["Parser size limits", "TLS context lifecycle"]],
    ["Operación en producción", ["Thread-pool saturation", "Structured telemetry context", "Blocked-thread detection"]],
  ],
  blockchain: [
    ["Criptografía aplicada", ["Domain separation tags"]],
    ["Modelo de transacción", ["Signature hash modes", "Transaction malleability controls"]],
    ["Protocolos de consenso", ["Safety and liveness proofs", "Validator-set rotation", "Finality checkpoint transitions"]],
    ["Red peer-to-peer", ["Eclipse attack resistance", "Peer scoring"]],
    ["Máquinas virtuales y contratos", ["Deterministic gas metering", "Upgradeable storage layouts"]],
    ["Seguridad de contratos inteligentes", ["Access-control invariants", "Integer precision boundaries"]],
    ["Privacidad", ["Metadata leakage"]],
    ["Escalamiento", ["Data-availability sampling", "Sequencer fault proofs"]],
    ["Economía del protocolo", ["MEV auction design", "Governance capture resistance"]],
    ["Testing y desarrollo", ["Fork simulation", "Stateful invariant fuzzing"]],
    ["Datos e interoperabilidad", ["Chain-reorganization indexing", "Bridge light-client validation"]],
    ["Operación y gobierno", ["Validator key rotation", "Incident pause governance", "Emergency upgrade timelocks"]],
  ],
  android: [
    ["Arquitectura de aplicación", ["Process-death state restoration"]],
    ["Compose profundo", ["Stability inference", "Snapshot state conflicts", "Snapshot apply observers"]],
    ["Interfaz clásica", ["Window insets"]],
    ["Datos locales", ["WAL checkpoint behavior", "Schema export verification"]],
    ["Red y sincronización", ["Network Security Config", "Offline conflict resolution"]],
    ["Coroutines en Android", ["Dispatcher injection", "Supervisor scope boundaries"]],
    ["Multimedia y sensores", ["Sensor coordinate transforms", "Camera use-case binding"]],
    ["Accesibilidad e internacionalización", ["Touch target geometry", "Locale plural rules"]],
    ["Testing por capas", ["Idling-resource synchronization", "Hermetic device fixtures"]],
    ["Rendimiento", ["Frame jank budgets", "Heap leak analysis"]],
    ["Seguridad móvil", ["Exported component attack surface", "Credential Manager lifecycle"]],
    ["Procesos y Binder", ["Binder transaction size limits", "DeathRecipient recovery"]],
    ["Tooling y build", ["R8 keep-rule diagnostics", "Baseline Profile installation"]],
    ["Entrega y compatibilidad", ["Signing key rotation", "Staged rollout halt criteria"]],
    ["Diagnóstico en producción", ["Native tombstone symbolication", "ANR trace correlation", "Play Console symbol uploads"]],
  ],
  qwik: [
    ["Modelo de ejecución", ["Lexical-scope serialization"]],
    ["Tareas y ciclo reactivo", ["Task cleanup and resource disposal", "Server and client task boundaries", "Visibility-triggered task scheduling"]],
    ["Composición de interfaz", ["Slot projection ownership"]],
    ["Qwik City avanzado", ["Route-loader cache policy", "Middleware ordering"]],
    ["Datos y mutaciones", ["CSRF action tokens", "Optimistic update reconciliation"]],
    ["Testing", ["Resumability round-trip tests", "Chunk loading assertions"]],
    ["Seguridad web", ["Serialization allowlists", "CSP nonce propagation"]],
    ["Optimización", ["Symbol graph budgets", "Measured prefetch heuristics"]],
    ["Operación multiplataforma", ["Adapter capability matrix", "Edge cold-start telemetry", "Adapter environment validation"]],
  ],
  angular: [
    ["Templates avanzados", ["DOM sanitization contexts"]],
    ["Arquitectura reactiva", ["Signal write cycles", "Custom equality functions", "Untracked dependency reads"]],
    ["Inyección de dependencias profunda", ["EnvironmentInjector lifecycle"]],
    ["Router avanzado", ["RouteReuseStrategy contracts", "Navigation cancellation"]],
    ["Formularios tipados", ["Async validator cancellation", "ControlValueAccessor disabled propagation"]],
    ["HTTP y datos", ["Interceptor ordering", "Request cancellation"]],
    ["Renderizado", ["Hydration mismatch recovery", "TransferState leakage boundaries"]],
    ["Testing unitario", ["Zoneless fixture stability", "Fake timer boundaries"]],
    ["Testing integral", ["Harness environment contracts", "Network contract fixtures"]],
    ["Seguridad de aplicación", ["Trusted Types policies", "CSP nonce handling"]],
    ["Rendimiento", ["Change-detection profiling", "Deferrable view budgets"]],
    ["Design systems", ["Component token contracts", "Overlay accessibility"]],
    ["Tooling y monorepos", ["Affected project graphs", "Builder cache keys"]],
    ["Interoperabilidad", ["Custom-element event contracts", "Zone boundary adapters"]],
    ["Operación y evolución", ["Version-skew detection", "Rollback-compatible migrations", "Deprecation budget enforcement"]],
  ],
  django: [
    ["ORM avanzado", ["select_for_update semantics"]],
    ["Diseño de modelos", ["Constraint deferrability", "Natural-key migrations"]],
    ["Ciclo HTTP profundo", ["Async and sync boundaries", "Streaming response transactions", "Request body stream ownership"]],
    ["Plantillas y presentación", ["Autoescape contexts"]],
    ["Autenticación y autorización", ["Session fixation rotation", "Permission cache invalidation"]],
    ["Seguridad web", ["Allowed-host normalization", "Content Security Policy middleware"]],
    ["APIs con Django", ["Conditional requests with ETags", "Stable pagination contracts"]],
    ["Procesamiento asíncrono", ["Task idempotency keys", "Durable outbox relay"]],
    ["Testing", ["Database transaction test isolation", "Deterministic timezone fixtures"]],
    ["Rendimiento", ["Query budget assertions", "Cache stampede controls"]],
    ["Archivos y contenido", ["Upload handler size limits", "Content-type sniffing defenses"]],
    ["Internacionalización y accesibilidad", ["Language negotiation", "Form error announcement"]],
    ["Observabilidad", ["Trace-correlation middleware", "Slow-query sampling"]],
    ["Entrega y evolución", ["Migration lock strategy", "Deployment system checks", "Backward-compatible deployment contracts"]],
  ],
  sql: [
    ["Álgebra y cálculo relacional", ["Relational division"]],
    ["Diseño lógico avanzado", ["Join dependencies", "Temporal normalization"]],
    ["Expresiones de consulta", ["Correlated lateral evaluation", "Recursive cycle detection"]],
    ["Semántica de ventanas", ["Window frame exclusion", "Deterministic peer ordering", "Null ordering contracts"]],
    ["Tipos y dominios", ["Collation semantics"]],
    ["Procedimientos y automatización", ["Trigger recursion guards", "Idempotent scheduled routines"]],
    ["Internals de almacenamiento", ["Buffer-pool replacement", "Write-ahead log record lifecycle"]],
    ["Optimización de consultas", ["Parameter-sensitive plans", "Extended statistics"]],
    ["Índices especializados", ["Block-range indexes", "Index-only visibility"]],
    ["Concurrencia avanzada", ["Key-range predicate locking", "Deadlock victim selection"]],
    ["Particionado y distribución", ["Global uniqueness across partitions", "Partition pruning proofs"]],
    ["Testing de datos", ["Differential result-set testing", "Transaction anomaly tests"]],
    ["Seguridad", ["Definer and invoker rights", "Dynamic SQL escaping"]],
    ["Recuperación y continuidad", ["Recovery-point validation", "Backup checksum verification"]],
    ["Observabilidad y operación", ["Wait-graph reconstruction", "Plan regression baselines", "Deadlock graph retention"]],
  ],
  nosql: [
    ["Teoría de sistemas distribuidos", ["Dotted version vectors"]],
    ["Motores clave-valor", ["Compare-and-set tokens", "Lease expiration semantics"]],
    ["Bases documentales", ["Document schema enforcement", "Array-index explosion"]],
    ["Columnas anchas", ["Tombstone compaction", "Partition-key cardinality", "Repair and compaction interaction"]],
    ["Bases de grafos", ["Traversal fan-out"]],
    ["Series temporales y búsqueda", ["Inverted-index segment merges", "Time-bucket sizing"]],
    ["Replicación interna", ["Hinted handoff", "Foreground read repair"]],
    ["Transacciones no relacionales", ["Saga compensation", "Conditional-write retries"]],
    ["Evolución del modelo", ["Dual-write migrations", "Backfill checkpoints"]],
    ["Testing distribuido", ["Jepsen history analysis", "Nemesis fault profiles"]],
    ["Seguridad", ["Tenant partition keys", "Encrypted-field query limits"]],
    ["Rendimiento y capacidad", ["Hotspot heatmaps", "Compaction debt"]],
    ["Integración de datos", ["Change-data-capture ordering", "Connector offset recovery"]],
    ["Operación y recuperación", ["Anti-entropy audits", "Restore into an isolated cluster", "Recovery-point verification"]],
  ],
  "operating-systems": [
    ["Arranque y arquitectura de kernel", ["initramfs root pivot"]],
    ["Planificación avanzada", ["Scheduler affinity masks", "Deadline scheduling"]],
    ["Sincronización del kernel", ["Priority-inversion protocols", "Lock dependency graphs", "Memory barrier placement"]],
    ["Memoria virtual profunda", ["Page-table shootdowns", "Huge-page fragmentation"]],
    ["Gestión de memoria física", ["NUMA page migration", "Memory compaction"]],
    ["Sistemas de archivos", ["fsync durability boundaries", "Copy-on-write snapshots"]],
    ["Entrada y salida", ["Device queue depth", "Interrupt affinity"]],
    ["Red dentro del sistema", ["TCP receive offload"]],
    ["Aislamiento y virtualización", ["seccomp filters", "Virtual-machine escape threat model"]],
    ["Seguridad del sistema", ["LSM hook ordering", "Measured boot"]],
    ["Comunicación entre procesos", ["Zero-copy IPC", "File-descriptor passing"]],
    ["Tiempo y energía", ["Clocksource selection", "Timer slack"]],
    ["Testing de bajo nivel", ["Deterministic fault campaigns", "System-call ABI conformance"]],
    ["Observabilidad", ["Scheduler latency histograms", "Kernel trace correlation"]],
    ["Operación y recuperación", ["Crash-dump capture", "Rollback kernel selection", "Boot fallback watchdog"]],
  ],
  "artificial-intelligence": [
    ["Búsqueda y planificación", ["Heuristic admissibility proofs"]],
    ["Representación del conocimiento", ["Description-logic consistency", "Rule provenance"]],
    ["Preparación de datos", ["Label-noise estimation", "Train-serving skew", "Annotation agreement measurement"]],
    ["Aprendizaje supervisado", ["Probability calibration curves", "Cost-sensitive learning"]],
    ["Aprendizaje no supervisado", ["Cluster stability", "Representation collapse"]],
    ["Aprendizaje por refuerzo", ["Off-policy evaluation"]],
    ["Deep learning internals", ["Automatic differentiation graphs", "Mixed-precision loss scaling"]],
    ["Visión, audio y lenguaje", ["Sequence padding masks", "Dataset modality alignment"]],
    ["Modelos generativos", ["Constrained decoding", "Retrieval freshness"]],
    ["Evaluación rigurosa", ["Statistical power analysis", "Benchmark contamination"]],
    ["Testing de sistemas de IA", ["Shadow-model disagreement", "Invariant oracle design"]],
    ["Seguridad y privacidad", ["Membership inference", "Prompt data exfiltration"]],
    ["MLOps", ["End-to-end lineage graphs", "Model reproducibility signatures"]],
    ["Inferencia eficiente", ["Speculative decoding", "KV-cache memory budgets"]],
    ["Gobernanza e impacto", ["Decision appeal workflows", "Model decommission evidence", "High-risk use approval gates"]],
  ],
  latex: [
    ["TeX y expansión profunda", ["Expansion tracing"]],
    ["Diseño de clases y paquetes", ["Option-clash prevention", "Public macro compatibility"]],
    ["Tipografía", ["Widow and orphan control", "Variable font axes", "Optical sizing validation"]],
    ["Matemáticas avanzadas", ["MathML tagging maps"]],
    ["Gráficos y datos", ["Externalization cache keys", "Color-space management"]],
    ["Bibliografías complejas", ["DOI normalization", "Citation disambiguation"]],
    ["Documentos extensos", ["includeonly build graphs", "Cross-document version alignment"]],
    ["Accesibilidad y estándares", ["Structure-tree validation", "Alternative-text ownership"]],
    ["Testing y automatización", ["PDF object normalization", "Golden baseline thresholds"]],
    ["Seguridad y publicación", ["Restricted shell-escape policy", "Embedded-file audits", "PDF active-content inspection"]],
  ],
  subversion: [
    ["Working copy profunda", ["wc.db schema recovery"]],
    ["Integración avanzada", ["Mergeinfo elision", "Operative revision selection", "Reintegration eligibility validation"]],
    ["Propiedades y metadatos", ["Inherited-property precedence"]],
    ["Protocolos y servidores", ["HTTPv2 bulk updates", "Repository filesystem verification"]],
    ["Seguridad y gobierno", ["Authz rule shadowing", "Hook execution timeouts"]],
    ["Testing y automatización", ["Dump-load golden fixtures", "Server compatibility matrix"]],
    ["Rendimiento y mantenimiento", ["Revision-property packing", "Cache invalidation"]],
    ["Continuidad y migración", ["Repository UUID preservation", "Mirror promotion drills", "Hot-standby lag thresholds"]],
  ],
};

type DescriptionProfile = {
  subject: string;
  state: string;
  runtime: string;
  failure: string;
  evidence: string;
};

const descriptionProfiles: Readonly<Record<string, DescriptionProfile>> = {
  lisp: { subject: "formas, símbolos y objetos Lisp", state: "entornos léxicos, packages y estado de imagen", runtime: "reader, macroexpansor, compilador, evaluator y CLOS", failure: "captura de símbolos, expansión insegura o recurso extranjero sin dueño", evidence: "macroexpand, inspector, disassembly, condition trace y perfil de asignaciones" },
  perl: { subject: "scalars, referencias y streams Perl", state: "contexto escalar o lista, flags internos y recursos del proceso", runtime: "parser, árbol de opcodes, regex engine, módulos y adaptadores XS", failure: "coerción implícita, backtracking explosivo, taint omitido o efecto global", evidence: "warnings, TAP, Devel::NYTProf, perldebug y logs estructurados" },
  raku: { subject: "valores, candidatos y flujos Raku", state: "tipos graduales, metamodelo, Match objects y schedulers", runtime: "grammar engine, multi dispatch, Rakudo y MoarVM", failure: "candidato ambiguo, backtracking no acotado o promesa sin cancelación", evidence: "AST de grammar, Test, profiler, telemetry y trazas de scheduler" },
  scala: { subject: "valores tipados, efectos y streams Scala", state: "tipos, recursos, fibers y objetos residentes en la JVM", runtime: "compilador Scala 3, bytecode, JIT, librerías de efectos y sbt", failure: "inferencia inesperada, recurso filtrado, bloqueo o incompatibilidad binaria", evidence: "TASTy, tests de leyes, JFR, perfiles y telemetría de efectos" },
  blockchain: { subject: "transacciones, pruebas y estado replicado", state: "mempool, ledger, conjunto validador y almacenamiento de contratos", runtime: "criptografía, red peer-to-peer, consenso y máquina virtual", failure: "reorganización, doble gasto, captura de gobernanza o ejecución adversarial", evidence: "hashes, recibos, pruebas de estado, trazas de nodo y simulación de forks" },
  android: { subject: "componentes, estado y recursos Android", state: "lifecycle, saved state, proceso, permisos y datos persistentes", runtime: "framework Android, Binder, ART, Compose y servicios del sistema", failure: "muerte de proceso, ANR, fuga, permiso excesivo o incompatibilidad de dispositivo", evidence: "tests instrumentados, Perfetto, Logcat, Android Vitals y trazas de Binder" },
  qwik: { subject: "componentes, símbolos y estado serializable Qwik", state: "closures capturadas, QRL, loaders y caché por ruta", runtime: "optimizer, servidor SSR, navegador resumible y adaptador de despliegue", failure: "estado no serializable, chunk innecesario, tarea sin cleanup o frontera insegura", evidence: "manifest de símbolos, pruebas SSR, waterfall de chunks y telemetría de navegación" },
  angular: { subject: "componentes, señales y dependencias Angular", state: "árbol de inyectores, router, forms y vistas renderizadas", runtime: "compiler, change detection, renderer, HttpClient y plataforma de hidratación", failure: "ciclo reactivo, provider mal acotado, fuga de suscripción o render divergente", evidence: "template diagnostics, TestBed, profiler, harnesses y trazas de navegación" },
  django: { subject: "requests, modelos y políticas Django", state: "sesión, transacción, QuerySet, caché y tareas diferidas", runtime: "middleware, URL resolver, ORM, template engine y servidor ASGI", failure: "consulta N+1, carrera transaccional, autorización omitida o tarea duplicada", evidence: "system checks, tests transaccionales, query plans, logs y traces correlacionados" },
  sql: { subject: "relaciones, expresiones y transacciones SQL", state: "catálogo, páginas, índices, locks, WAL y snapshots", runtime: "parser, rewriter, optimizer, executor y storage engine", failure: "resultado no determinista, anomalía de aislamiento, plan regresivo o pérdida recuperable", evidence: "constraints, plan real, wait graph, métricas del motor y restore verificado" },
  nosql: { subject: "agregados, particiones y réplicas no relacionales", state: "topología, índices, tombstones, offsets y versiones concurrentes", runtime: "router, protocolo de réplica, compactación y motor de consulta", failure: "hotspot, lectura obsoleta, conflicto perdido o deuda de compactación", evidence: "historiales Jepsen, métricas por partición, repair status y pruebas de restore" },
  "operating-systems": { subject: "procesos, memoria y dispositivos del sistema", state: "run queues, tablas de páginas, buffers, handles y credenciales", runtime: "kernel, scheduler, virtual memory, filesystem y drivers", failure: "deadlock, carrera, starvation, corrupción o agotamiento de recursos", evidence: "tracing, counters, dumps, fault injection y pruebas de ABI" },
  "artificial-intelligence": { subject: "datos, representaciones y decisiones de IA", state: "dataset versionado, parámetros, features, métricas y artefactos del modelo", runtime: "pipeline de preparación, entrenamiento, evaluación e inferencia", failure: "fuga de datos, sesgo, deriva, ataque o generalización no demostrada", evidence: "lineage, intervalos, pruebas por segmento, model cards y monitoreo continuo" },
  latex: { subject: "tokens, nodos y estructura documental TeX", state: "catcodes, registers, auxiliares, fuentes y árbol lógico del PDF", runtime: "mouth, expansión, stomach, motor tipográfico y pasadas de herramientas", failure: "expansión frágil, referencia inconsistente, PDF inaccesible o build irreproducible", evidence: "log, tracing, l3build, preflight, árbol etiquetado y hash del artefacto" },
  subversion: { subject: "working copies, rutas y revisiones Subversion", state: "wc.db, propiedades, mergeinfo, revprops y filesystem del repositorio", runtime: "cliente, RA layer, servidor, hooks y backend FSFS o FSX", failure: "conflicto oculto, autorización por ruta incorrecta, mirror divergente o metadata perdida", evidence: "svn status, mergeinfo, verify, dump-load y pruebas entre versiones" },
};

type MechanismFamily =
  | "semantics"
  | "structure"
  | "contract"
  | "topology"
  | "learning"
  | "optimization"
  | "transformation"
  | "lifecycle"
  | "resources"
  | "internals"
  | "data"
  | "concurrency"
  | "security"
  | "verification"
  | "integration"
  | "operations";

type NarrativeShape =
  | "pipeline"
  | "state-delta"
  | "boundary"
  | "decision"
  | "lifecycle"
  | "timeline"
  | "counterexample"
  | "plan-comparison"
  | "dataflow"
  | "proof"
  | "observability"
  | "resource-balance";

type MechanismTemplate = {
  family: MechanismFamily;
  shape: NarrativeShape;
  input: string;
  transformation: string;
  result: string;
  failure: string;
  evidence: string;
};

type MechanismRule = MechanismTemplate & {
  pattern: RegExp;
  collections?: readonly string[];
};

type ConceptNarrative = MechanismTemplate & {
  title: string;
  section: string;
};

function normalizeTechnicalText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Los términos de una sola palabra necesitan una definición propia: repetir el
 * nombre no explica el mecanismo y, al normalizar el título, volvería a dejar
 * una plantilla vacía. Estas glosas son deliberadamente operativas.
 */
const singleTermSemantics: Readonly<Record<string, string>> = {
  readtable: "tabla que decide cómo cada carácter se convierte en token o macro de lectura",
  metaclasses: "clases cuyos objetos son otras clases y que controlan creación, slots y herencia",
  disassembly: "traducción del código compilado a instrucciones de máquina inspeccionables",
  cffi: "frontera que declara tipos y llamadas C para transferir valores entre runtimes",
  autovivification: "creación automática de contenedores intermedios al escribir una ruta aún inexistente",
  typeglobs: "entradas de la tabla de símbolos que agrupan scalar, array, hash, handle y subrutina",
  lookaround: "aserción regex que comprueba contexto sin consumir caracteres",
  moo: "sistema de objetos mínimo que instala constructores, atributos y modificadores de método",
  moose: "metasistema de objetos que compone roles, tipos, atributos y protocolo de metaclases",
  test2: "motor de eventos de prueba que separa aserciones, contexto, formato y herramientas",
  subtests: "ámbitos de prueba anidados que producen un único resultado agregado para su padre",
  benchmark: "medición repetida con calentamiento y control de variación para comparar alternativas",
  dbi: "capa uniforme de drivers, statements, parámetros y transacciones de base de datos",
  daemonizacion: "desacoplamiento controlado de terminal, sesión, directorio y descriptores de un proceso",
  submethods: "métodos no heredables usados para inicialización o comportamiento local de una clase Raku",
  redispatch: "continuación de un multi dispatch desde el candidato actual hacia otro candidato válido",
  "meta6.json": "manifiesto Raku que declara identidad, dependencias, autoridad, versión y unidades provistas",
  zef: "cliente que resuelve, obtiene, prueba e instala distribuciones Raku desde repositorios",
  splicing: "inserción de un árbol de código citado dentro de otra etapa de compilación",
  fibers: "tareas cooperativas ligeras con cancelación y resultado administrados por un runtime de efectos",
  backpressure: "señal de demanda que impide que un productor desborde a un consumidor lento",
  supervision: "árbol de responsables que observa fallos y decide reinicio, parada o escalamiento",
  munit: "runner Scala que delimita fixtures, aserciones y efectos por caso",
  scalatest: "framework Scala de estilos de prueba, matchers, fixtures y ejecución configurable",
  scalacheck: "generación de entradas y reducción de contraejemplos para propiedades Scala",
  testcontainers: "dependencias reales efímeras levantadas en contenedores y destruidas al terminar la prueba",
  resolvers: "orígenes ordenados donde el build busca metadatos y artefactos por coordenadas",
  utxo: "salidas no gastadas consumidas completas para crear nuevas salidas y cambio",
  nonces: "contadores o valores únicos que impiden repetición y fijan orden de transacciones",
  slashing: "pérdida verificable de stake ante evidencia de conducta incompatible con el consenso",
  gossip: "difusión epidémica en la que pares reenvían mensajes nuevos hasta cubrir la red",
  reentrancy: "reentrada externa antes de cerrar el estado que permite observar o modificar una transición parcial",
  pseudonimato: "identidad representada por direcciones enlazables sin revelar necesariamente una persona",
  constraintlayout: "solver de restricciones que posiciona vistas a partir de relaciones y dimensiones",
  recyclerview: "lista virtualizada que recicla holders y enlaza solo los elementos visibles",
  fragments: "controladores de interfaz con lifecycle propio alojados dentro de una actividad",
  datastore: "persistencia Android transaccional basada en Flow para preferencias o mensajes tipados",
  dispatchers: "políticas que eligen el pool o hilo donde continúa una coroutine",
  camerax: "capa de casos de uso que vincula preview, captura y análisis al lifecycle",
  media3: "componentes Android para reproducir, transformar y servir multimedia",
  sensormanager: "registro de listeners que entrega muestras de sensores con timestamp y precisión",
  espresso: "sincronización de acciones y aserciones de UI con el estado ocioso de la aplicación",
  macrobenchmark: "medición fuera del proceso de arranque, frames y trazas sobre builds cercanos a producción",
  biometricprompt: "diálogo del sistema que autentica biometría o credencial sin exponer el secreto",
  parcelables: "representaciones planas y versionables enviadas a través de transacciones Binder",
  "usetask$": "tarea Qwik serializable que rastrea señales y puede ejecutarse en servidor o navegador",
  "usevisibletask$": "tarea de navegador activada por visibilidad que debe cancelar sus recursos al ocultarse",
  slots: "puntos de proyección cuyo contenido conserva ownership en el componente consumidor",
  controlvalueaccessor: "adaptador entre un control personalizado y el protocolo de valor, touched y disabled de Forms",
  testbed: "entorno Angular que construye inyectores, componentes y overrides aislados para una prueba",
  annotations: "expresiones SQL calculadas que el ORM incorpora como columnas del QuerySet",
  managers: "puerta de entrada que concentra políticas y consultas reutilizables de un modelo Django",
  pagination: "contrato que divide una colección estable y transporta cursor o posición entre solicitudes",
  factories: "constructores de fixtures que controlan defaults, relaciones y variación de datos de prueba",
  ranking: "funciones de ventana que asignan posición según orden y tratamiento de empates",
  intervals: "valores SQL de duración con componentes y reglas de normalización propias",
  triggers: "rutinas ejecutadas por eventos de tabla dentro de la misma transacción",
  pacelc: "elección entre consistencia y latencia tanto durante particiones como en operación normal",
  linearizability: "garantía de que cada operación parece ocurrir en un único instante entre llamada y respuesta",
  "leader-follower": "réplica líder que ordena escrituras y seguidores que reproducen el log antes de servirlas",
  "anti-entropy": "comparación periódica de resúmenes y reparación de rangos divergentes entre réplicas",
  sstables: "archivos ordenados e inmutables creados por flush y fusionados posteriormente por compactación",
  supernodes: "vértices con grado extremo que amplifican fan-out, memoria y costo de recorridos",
  downsampling: "agregación de muestras en ventanas más gruesas para reducir retención preservando tendencia",
  sagas: "secuencia de transacciones locales acompañadas por compensaciones ante fallo posterior",
  connectors: "procesos que traducen cambios y checkpoints entre una fuente y un sistema destino",
  preemption: "interrupción del proceso activo para ceder CPU según prioridad o quantum",
  spinlocks: "locks de espera activa adecuados solo cuando la sección crítica es muy breve",
  futexes: "sincronización que permanece en espacio de usuario sin contención y duerme mediante el kernel al competir",
  swap: "respaldo de páginas anónimas en almacenamiento para liberar memoria física",
  inodes: "metadatos persistentes que identifican un archivo aparte de sus nombres de directorio",
  journaling: "registro previo de cambios que permite reconstruir consistencia tras una caída",
  dma: "transferencia entre dispositivo y memoria sin copiar cada palabra mediante la CPU",
  namespaces: "vistas aisladas de recursos del kernel asignadas por proceso",
  hypervisors: "capa que arbitra CPU, memoria e interrupciones entre máquinas virtuales",
  capabilities: "privilegios de kernel divididos en capacidades concedibles por proceso",
  pipes: "canales FIFO de bytes conectados mediante descriptores entre productores y consumidores",
  signals: "notificaciones asíncronas que interrumpen o marcan eventos para un proceso",
  ontologias: "vocabularios formales de clases, relaciones y axiomas usados para inferir conocimiento",
  regularizacion: "penalización o restricción que reduce complejidad para mejorar generalización",
  ensembles: "combinación de predictores diversos mediante voto, promedio o modelo apilado",
  calibration: "ajuste que alinea probabilidades pronosticadas con frecuencias observadas",
  clustering: "agrupación no supervisada por similitud, densidad o estructura latente",
  backpropagation: "propagación inversa de derivadas desde la pérdida hasta cada parámetro",
  tokenization: "segmentación de texto o señal en unidades indexables por el modelo",
  batching: "agrupación de solicitudes para compartir cómputo a costa de espera adicional",
  quantization: "representación de pesos o activaciones con menor precisión y escala explícita",
  pruning: "eliminación estructurada o dispersa de parámetros con baja contribución",
  registers: "almacenamientos TeX numerados o asignados que conservan dimensiones, contadores y tokens",
  microtypography: "ajustes finos de protrusión y expansión para mejorar color y borde tipográfico",
  hyphenation: "cálculo de puntos de división según idioma y patrones léxicos",
  pgfplots: "motor declarativo que convierte tablas y funciones en ejes y primitivas TikZ",
  glossaries: "índices semánticos generados en pasadas auxiliares y enlazados al documento",
  l3build: "harness reproducible para desempaquetar, probar y comparar salidas de paquetes LaTeX",
  changelists: "agrupaciones locales de rutas de working copy para operar sobre un subconjunto",
  keywords: "marcadores de archivo sustituidos desde metadatos de revisión bajo reglas explícitas",
  svnserve: "servidor del protocolo svn que autentica y expone repositorios sin capa HTTP",
};

const semanticTokenGlossary: Readonly<Record<string, string>> = {
  abi: "representación binaria, alineación y convención de llamada",
  access: "decisión de acceso sobre una identidad y un recurso",
  actor: "buzón y estado privado procesados por un único actor",
  async: "trabajo que finaliza después y propaga cancelación o error",
  atomic: "cambio indivisible con orden de memoria explícito",
  auth: "prueba de identidad y decisión de autorización",
  authorization: "capacidad concedida tras evaluar principal, acción y recurso",
  backtracking: "exploración de alternativas con punto de retorno",
  buffer: "capacidad temporal entre productor y consumidor",
  cache: "reutilización por clave con política de invalidez",
  callback: "control devuelto al llamador mediante una función registrada",
  cancellation: "señal cooperativa que detiene trabajo y libera recursos",
  cancelacion: "señal cooperativa que detiene trabajo y libera recursos",
  checkpoint: "estado durable desde el que puede reanudarse procesamiento",
  compiler: "transformación de fuente a representación ejecutable",
  compilacion: "traducción y enlace de unidades con dependencias declaradas",
  concurrency: "intercalado de operaciones con orden y ownership explícitos",
  concurrencia: "intercalado de operaciones con orden y ownership explícitos",
  consistency: "regla que limita qué estados pueden observar los lectores",
  contract: "precondición, garantía y error representable",
  contratos: "precondiciones, garantías y errores representables",
  data: "valores con identidad, esquema y ciclo de vida",
  datos: "valores con identidad, esquema y ciclo de vida",
  dependency: "arista versionada entre consumidor y proveedor",
  dependencias: "grafo versionado entre consumidores y proveedores",
  detection: "clasificación o localización a partir de evidencia de entrada",
  dispatch: "selección de implementación entre candidatos aplicables",
  distributed: "estado repartido que debe converger pese a fallos parciales",
  event: "hecho inmutable con identidad, orden y consumidor",
  failure: "condición de error que debe propagarse o recuperarse",
  graph: "nodos y aristas recorridos bajo una política",
  index: "estructura auxiliar que reduce búsqueda a cambio de escritura y espacio",
  indexes: "estructuras auxiliares que reducen búsqueda a cambio de escritura y espacio",
  injection: "entrada externa introducida en un intérprete o dependencia",
  isolation: "límite que oculta cambios parciales entre operaciones",
  lifecycle: "creación, uso, cancelación y liberación del recurso",
  lock: "exclusión con adquisición, orden y liberación",
  logging: "eventos serializados con nivel, contexto y correlación",
  memory: "direcciones, ownership, visibilidad y reclamación",
  model: "representación parametrizada que transforma entradas en decisiones",
  network: "mensajes parciales, latencia, reintentos y autenticación",
  optimization: "búsqueda medible de una alternativa bajo restricciones",
  optimizacion: "búsqueda medible de una alternativa bajo restricciones",
  package: "unidad versionada con exports y dependencias",
  partition: "asignación de claves o trabajo entre fragmentos",
  profiling: "muestreo o instrumentación que atribuye costo a una ruta",
  recovery: "restauración desde evidencia durable y comprobación posterior",
  reproducible: "mismo artefacto obtenido desde entradas y entorno fijados",
  route: "selección de destino a partir de una clave o patrón",
  runtime: "motor que representa y ejecuta el programa",
  schema: "contrato de forma, tipos, cardinalidad e identidad",
  security: "frontera de confianza con actor, activo y capacidad",
  serializacion: "codificación y reconstrucción conservando significado",
  signal: "notificación observable que despierta o invalida trabajo",
  state: "estado con dueño, transición y observadores",
  storage: "persistencia con formato, durabilidad y recuperación",
  stream: "secuencia temporal con demanda, orden y cierre",
  synchronization: "coordinación de orden y visibilidad entre participantes",
  task: "unidad cancelable con resultado y dueño",
  test: "experimento repetible con oráculo y aislamiento",
  testing: "experimentos repetibles con oráculos y aislamiento",
  tracing: "spans causales que enlazan una operación distribuida",
  transaction: "unidad atómica que confirma o revierte su write set",
  transactions: "unidades atómicas que confirman o revierten su write set",
  type: "conjunto de valores y operaciones admitidas",
  types: "conjuntos de valores y operaciones admitidas",
  validation: "rechazo de entradas que incumplen un contrato",
  validacion: "rechazo de entradas que incumplen un contrato",
  version: "identidad de compatibilidad y orden de evolución",
  versioning: "evolución compatible con consumidores anteriores",
  views: "proyecciones derivadas que se actualizan desde estado fuente",
};

const semanticStopWords = new Set(["a", "al", "and", "con", "de", "del", "desde", "e", "el", "en", "for", "from", "la", "las", "los", "of", "on", "para", "por", "the", "to", "with", "y"]);

function splitTechnicalTitle(title: string) {
  return normalizeTechnicalText(title.replace(/([a-z0-9])([A-Z])/g, "$1 $2"))
    .split(/[^a-z0-9*+#.$-]+/)
    .filter((token) => token && !semanticStopWords.has(token));
}

export function semanticCue(title: string) {
  const normalizedTitle = normalizeTechnicalText(title);
  const exact = singleTermSemantics[normalizedTitle];
  if (exact) return exact;

  const fragments = splitTechnicalTitle(title).map((token) =>
    semanticTokenGlossary[token] ?? `el aspecto técnico «${token}»`,
  );
  return fragments.slice(0, 5).join("; ") || `el mecanismo técnico delimitado por «${title}»`;
}

const mechanismRules: readonly MechanismRule[] = [
  { pattern: /mergeinfo|working copy|wc\.db|revision|revprop|svn|changelist|dump-load|svnsync|repository uuid|operative revision/, collections: ["subversion"], family: "operations", shape: "state-delta", input: "una base versionada, cambios locales y metadatos de revisión", transformation: "calcula diferencias, aplica cambios y actualiza la identidad histórica sin reescribir revisiones ajenas", result: "una revisión o working copy cuyo origen y delta pueden reconstruirse", failure: "mergeinfo incompleto, conflicto oculto o metadato perdido producen una historia que ya no representa el cambio", evidence: "status, diff, mergeinfo, verify y una restauración dump-load" },
  { pattern: /tex|latex|macro|catcode|typograph|hyphen|font|math|tikz|pgf|bibliograph|citation|glossar|pdf|structure-tree|shell-escape|document/, collections: ["latex"], family: "transformation", shape: "pipeline", input: "fuente, macros, activos y archivos auxiliares de una pasada documental", transformation: "expande tokens, construye nodos, resuelve referencias y compone páginas", result: "un PDF tipográficamente estable, navegable y reproducible", failure: "una expansión frágil, referencia desfasada o activo inseguro cambia el artefacto entre pasadas", evidence: "log de TeX, archivos auxiliares, preflight PDF, árbol etiquetado y hash final" },
  { pattern: /.*/, collections: ["latex"], family: "transformation", shape: "pipeline", input: "fuente, configuración tipográfica, activos y archivos auxiliares de una pasada", transformation: "expande tokens, actualiza índices o referencias y compone cajas en páginas", result: "un PDF estable cuya estructura y procedencia pueden inspeccionarse", failure: "una pasada omitida, dependencia mutable o estructura sin etiquetar vuelve inconsistente el documento", evidence: "log, auxiliares, preflight, árbol etiquetado y comparación de PDF" },
  { pattern: /gradient|backprop|loss|regulari|hyperparameter|training|entrenamiento|fine-tun|optimizer|learning rate/, collections: ["artificial-intelligence"], family: "learning", shape: "dataflow", input: "dataset versionado, objetivo numérico y parámetros iniciales", transformation: "calcula predicciones y gradientes, actualiza parámetros y repite bajo una política de parada", result: "un artefacto de modelo acompañado por métricas fuera de muestra", failure: "fuga, sobreajuste, gradientes inestables o un objetivo sustituto producen una mejora aparente", evidence: "curvas de aprendizaje, particiones selladas, semillas y evaluación por segmento" },
  { pattern: /inference|inferencia|batch|quantiz|pruning|decoding|kv-cache|serving|latency/, collections: ["artificial-intelligence"], family: "optimization", shape: "plan-comparison", input: "modelo aprobado, solicitudes con presupuesto de latencia y recursos del dispositivo", transformation: "agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida", result: "predicciones con costo medido y degradación dentro del umbral aceptado", failure: "la optimización altera clases raras, agota memoria o incumple la latencia de cola", evidence: "benchmark por percentil, comparación con baseline y métricas de calidad por segmento" },
  { pattern: /dataset|label|annotation|feature|train-serving|contamination|drift|model card|lineage/, collections: ["artificial-intelligence"], family: "data", shape: "observability", input: "muestras identificadas con procedencia, etiqueta, consentimiento y versión", transformation: "valida, divide, transforma y registra linaje antes de entrenar o inferir", result: "datos reproducibles cuya población y transformaciones pueden auditarse", failure: "duplicados, etiqueta ruidosa, sesgo de selección o skew cambian silenciosamente la distribución", evidence: "estadísticas por cohorte, hashes, acuerdos de anotación y comparación train-serving" },
  { pattern: /heuristic|search|busqueda|planning|planificacion|a\*|minimax|constraint satisfaction|path/, collections: ["artificial-intelligence"], family: "transformation", shape: "decision", input: "estado inicial, acciones permitidas, costo y condición objetivo", transformation: "expande candidatos, puntúa la frontera y descarta estados dominados o inviables", result: "una ruta o plan con costo y condiciones de terminación explícitos", failure: "una heurística inadmisible, estado repetido o frontera sin límite pierde optimalidad o no termina", evidence: "traza de expansiones, costo contra baseline y caso sin solución" },
  { pattern: /ontology|ontologia|knowledge|conocimiento|logic|regla|rule|inference|provenance/, collections: ["artificial-intelligence"], family: "structure", shape: "proof", input: "hechos, vocabulario, axiomas y reglas con procedencia", transformation: "normaliza identidades y deriva consecuencias mediante el régimen lógico declarado", result: "conclusiones consultables junto con la cadena que las justifica", failure: "una inconsistencia, regla circular o supuesto cerrado inválido deriva conclusiones incompatibles", evidence: "reasoner, explicación de inferencia, prueba de consistencia y consultas negativas" },
  { pattern: /criptograf|signature|firma|hash|key deriv|clave|nonce|commitment|zero-knowledge|zk |elliptic|eliptic|merkle|proof of inclusion/, collections: ["blockchain"], family: "security", shape: "proof", input: "mensaje canónico, dominio criptográfico, clave o testigo y aleatoriedad segura", transformation: "codifica el dominio, calcula prueba o firma y verifica con parámetros públicos", result: "evidencia verificable que no requiere confiar en el transportista", failure: "reutilizar nonce, mezclar dominios, filtrar clave o aceptar codificación ambigua invalida la garantía", evidence: "vectores conocidos, verificación negativa y registro de parámetros o versión" },
  { pattern: /consensus|consenso|validator|proposer|finality|slashing|bft|nakamoto|fork|reorg|gossip|peer|sybil|eclipse/, collections: ["blockchain"], family: "topology", shape: "timeline", input: "mensajes firmados, vista local de cadena y conjunto de participantes", transformation: "propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia", result: "un estado aceptado con nivel de finalidad y participantes responsables", failure: "partición, equivocación, eclipse o cambio de conjunto rompe liveness o produce historias rivales", evidence: "traza por ronda, pesos de voto, prueba de fork y simulación de red adversarial" },
  { pattern: /security|seguridad|auth|permission|permiso|access control|privacidad|privacy|attack|escape|taint|sandbox|csp|secret|credential|capabilit|biometric|keystore|trusted types|allowed-host/, family: "security", shape: "counterexample", input: "actor, activo, acción solicitada y dato controlado por un adversario", transformation: "autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima", result: "decisión explícita y auditable que no expone secretos ni amplía privilegios", failure: "confusión de identidad, inyección, bypass de política o secreto en logs cruza la frontera", evidence: "caso permitido, caso negado, registro de decisión y prueba con entrada hostil" },
  { pattern: /\btests?\b|\btesting\b|test plan|prueba|fixture|assert|fuzz|benchmark|coverage|golden|property-based|testcontainer|idling-resource|harness|failure reproducib|race detector/, family: "verification", shape: "counterexample", input: "estado aislado, dato controlado, oráculo y semilla reproducible", transformation: "ejecuta camino normal, límite y fallo mientras captura todos los efectos observables", result: "evidencia repetible que distingue comportamiento correcto de una regresión", failure: "fixture compartido, reloj real, oráculo débil o dependencia no controlada produce un verde engañoso", evidence: "contraejemplo reducido, cobertura relevante, logs y repetición con la misma semilla" },
  { pattern: /trace|tracing|logging|metric|telemetry|profil|observability|monitor|vitals|anr|tombstone|thread dump|blocked-thread|deadlock graph|wait graph|symbolication/, family: "operations", shape: "observability", input: "evento operativo con tiempo, identidad, contexto causal y nivel de detalle", transformation: "instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución", result: "señal que permite localizar componente, versión y duración del problema", failure: "cardinalidad explosiva, muestreo sesgado o contexto perdido impide reconstruir el incidente", evidence: "trace completo, métrica enlazada, log estructurado y consulta de diagnóstico ensayada" },
  { pattern: /lectura|parse|parser|parsing|grammar|gramatica|regex|readtable|reader|token|lexer|xpath|match object|capture|lookaround|backtracking|atomic groups/, family: "transformation", shape: "pipeline", input: "texto o bytes con posición, codificación y límites de tamaño", transformation: "tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación", result: "árbol, match o diagnóstico consumible por la siguiente etapa", failure: "entrada ambigua, backtracking no acotado o recuperación voraz oculta el error real", evidence: "árbol producido, offsets, corpus positivo-negativo y límite de pasos" },
  { pattern: /partition|particion|shard|quorum|replica|replication|leader|follower|anti-entropy|repair|pacelc|consistent hash|topolog|hotspot/, family: "topology", shape: "boundary", input: "clave, topología, factor de réplica y nivel de consistencia solicitado", transformation: "elige responsables, propaga versión y reconcilia respuestas según quorum o reloj", result: "una lectura o escritura cuyo alcance y frescura están cuantificados", failure: "skew, partición o reparación incompleta deja réplicas divergentes o un nodo saturado", evidence: "mapa de particiones, versiones por réplica, latencia por percentil y prueba de convergencia" },
  { pattern: /actor|mailbox|supervis|message|mensaje|promise|fiber|coroutine|async|scheduler|dispatcher|whenever|supply/, family: "concurrency", shape: "timeline", input: "trabajo con dueño, mensaje o futuro y una política de cancelación", transformation: "encola, planifica y reanuda unidades conservando causalidad y propagación de error", result: "resultado, cancelación o reinicio visibles para el supervisor correcto", failure: "mensaje huérfano, starvation, carrera de cancelación o reinicio no idempotente duplica efectos", evidence: "timeline de scheduler, IDs causales, conteo de buzón y prueba con orden forzado" },
  { pattern: /\blocks?\b|\bmutex(?:es)?\b|\bsemaphores?\b|\bsemaforos?\b|\bspinlocks?\b|\bfutexes?\b|atomic memory|atomic operations?|\batomics\b|\brace\b|\bthreads?\b|memory barrier|condition variable|deadlock|concurr/, family: "concurrency", shape: "resource-balance", input: "operaciones competidoras, recurso compartido y orden de memoria requerido", transformation: "adquiere o señaliza sincronización, publica cambios y libera en un orden definido", result: "estado visible sin carreras y progreso dentro del límite acordado", failure: "orden inverso, espera perdida, prioridad invertida o barrera ausente termina en deadlock o dato obsoleto", evidence: "interleaving determinista, detector de carreras, wait graph y contador final" },
  { pattern: /stream|backpressure|window|buffer|queue|event loop|reactive|supply|tap|flow hot|flow cold/, family: "concurrency", shape: "dataflow", input: "secuencia temporal, demanda del consumidor y capacidad de cola", transformation: "propaga elementos, aplica ventana o transformación y regula producción con demanda", result: "salida ordenada con memoria y latencia acotadas", failure: "productor sin freno, cierre omitido o reloj mal definido pierde, reordena o retiene eventos", evidence: "marcas de agua, profundidad de cola, tasa entrada-salida y prueba de cierre" },
  { pattern: /transaction|transaccion|commit|rollback|wal|write-ahead|isolation|mvcc|locking|outbox|saga/, family: "contract", shape: "state-delta", input: "estado inicial, read set, write set y condición de commit", transformation: "registra intención, valida conflictos y confirma o compensa la unidad completa", result: "un estado durable que satisface aislamiento e invariantes declarados", failure: "commit parcial, lectura anómala, reintento no idempotente o compensación incompleta rompe consistencia", evidence: "historial concurrente, WAL, constraints y prueba de recuperación tras caída" },
  { pattern: /event sourcing|event index|cdc|change-data|offset|relay|log retention|replay/, family: "data", shape: "dataflow", input: "evento inmutable con identidad, posición y esquema versionado", transformation: "anexa, publica y proyecta en orden conservando checkpoint del consumidor", result: "vista reconstruible y consumidor capaz de reanudar sin perder hechos", failure: "offset adelantado, duplicado no idempotente o reordenamiento deriva la proyección", evidence: "comparación replay-live, lag, IDs de evento y checkpoint restaurado" },
  { pattern: /cache|memo|incremental|snapshot|recomposition|prefetch|warmup|reuse|eviction/, family: "optimization", shape: "state-delta", input: "clave, dependencias observadas, valor previo y política de frescura", transformation: "consulta, calcula ausencias y publica el nuevo valor junto con su invalidador", result: "reutilización medible sin cambiar el resultado funcional", failure: "clave incompleta, dependencia oculta o invalidación tardía sirve estado obsoleto", evidence: "hit ratio, grafo de dependencias y prueba que muta cada entrada relevante" },
  { pattern: /memory|memoria|heap|stack|page|pagina|gc|allocation|buffer|register|numa|swap|arena|ownership|foreign memory/, family: "resources", shape: "resource-balance", input: "solicitud de capacidad con tamaño, alineación, lifetime y propietario", transformation: "reserva, mapea o mueve memoria y registra quién debe reclamarla", result: "datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar", failure: "fuga, use-after-free, fragmentación, thrashing o visibilidad incorrecta corrompe el proceso", evidence: "perfil de asignaciones, mapas, presión, finalizadores y prueba bajo límite" },
  { pattern: /\bfiles?\b|archivo|\bpaths?\b|ruta|\binodes?\b|filesystem|fsync|journal|directory|storage access|upload|download/, family: "resources", shape: "lifecycle", input: "nombre no confiable, descriptor o bytes junto con permisos y destino", transformation: "normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde", result: "contenido persistido con identidad, metadatos y ownership verificables", failure: "traversal, enlace inesperado, write parcial o sync omitido publica el archivo equivocado", evidence: "descriptor resuelto, checksum, permisos, journal y lectura posterior a reinicio" },
  { pattern: /http|network|red |socket|tls|certificate|protocol|\brpc\b|websocket|webhook|binder|\bipc\b|\bffi\b|nativecall|\bcffi\b|\babi\b|callback|driver|bluetooth/, family: "integration", shape: "boundary", input: "mensaje, identidad del par, versión de protocolo y presupuesto de tiempo", transformation: "serializa, negocia, transmite y traduce errores u ownership en la frontera", result: "respuesta tipada o efecto confirmado con compatibilidad conocida", failure: "timeout ambiguo, ABI distinta, certificado inválido o reintento duplicado rompe la frontera", evidence: "captura de protocolo, contrato, trace correlacionado y prueba entre versiones" },
  { pattern: /camerax|media3|sensormanager|\bsensors?\b|\bcamera\b|\baudio\b|\bvideo\b|\blocation\b|ubicacion|bluetooth/, collections: ["android"], family: "integration", shape: "dataflow", input: "muestra con timestamp, permiso, lifecycle y sistema de coordenadas", transformation: "vincula el productor al lifecycle, transforma la muestra y entrega solo mientras el consumidor está activo", result: "frame, señal o ubicación con tiempo y precisión conocidos", failure: "permiso revocado, rotación, consumidor lento o coordenadas mal transformadas entrega datos obsoletos", evidence: "timestamps, estado de permiso, preview o señal grabada y prueba de pausa-reanudación" },
  { pattern: /serializ|encoding|format|json|binary|parcel|transcoding|canonical|external format/, family: "transformation", shape: "boundary", input: "valor tipado, versión de esquema, charset y límites de tamaño", transformation: "codifica campos en orden definido y reconstruye validando versión y rangos", result: "representación interoperable que conserva significado al hacer round trip", failure: "campo desconocido, encoding distinto, ciclo o número fuera de rango cambia el valor", evidence: "golden vectors, round trip, compatibilidad N-1 y prueba de entrada truncada" },
  { pattern: /dispatch|candidate|overload|resolver|routing|route|multimethod|generic function|method combination|samewith|nextwith/, family: "semantics", shape: "decision", input: "operación solicitada, argumentos efectivos y conjunto visible de candidatos", transformation: "filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones", result: "un candidato trazable cuya precedencia explica el comportamiento", failure: "empate, caché inválida o candidato demasiado general vuelve ambiguo el despacho", evidence: "lista de candidatos, orden calculado y casos frontera de especificidad" },
  { pattern: /type|tipo|schema|class|clase|trait|role|object|objeto|metaclass|generic|opaque|subset|coercion|layout|domain|dominio|model|modelo|ontology/, family: "structure", shape: "proof", input: "declaración y valores candidatos con identidad, cardinalidad y relaciones", transformation: "resuelve composición, restricciones y representación antes de aceptar la instancia", result: "estructura válida cuyas operaciones permitidas están explícitas", failure: "conflicto de composición, coerción sorpresiva o representación incompatible acepta un estado imposible", evidence: "inspección de tipo o esquema, ejemplos válidos y contraejemplos mínimos" },
  { pattern: /optimizer|\bplans?\b|cardinality|join ordering|parameter-sensitive|plan regression/, collections: ["sql"], family: "data", shape: "plan-comparison", input: "consulta parametrizada, estadísticas y planes candidatos", transformation: "estima cardinalidades, compara accesos y conserva alternativas sensibles a la distribución", result: "plan ejecutable cuyo costo observado corresponde al conjunto de parámetros", failure: "estimación sesgada o reutilización de un plan inadecuado dispara lecturas y latencia", evidence: "plan estimado-real, histogramas, parámetros contrastantes y baseline de ejecución" },
  { pattern: /\bqueries?\b|consulta|\bsql\b|\bjoins?\b|\bindexes?\b|indice|ranking|window frame|aggregate|collation|relational/, family: "data", shape: "plan-comparison", input: "relaciones, predicados, estadísticas y contrato de orden o nulabilidad", transformation: "reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores", result: "conjunto de filas correcto acompañado por costo y orden conocidos", failure: "estimación sesgada, empate no ordenado o índice inadecuado cambia costo o resultado observable", evidence: "plan real, conteos por operador, resultado diferencial y baseline de latencia" },
  { pattern: /database|base de datos|document schema|key-value|column|graph|sstable|tombstone|compaction|index segment|time-bucket/, family: "data", shape: "lifecycle", input: "registro o agregado con clave, versión, retención y patrón de acceso", transformation: "ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida", result: "lectura predecible y almacenamiento recuperable dentro del presupuesto", failure: "clave caliente, tombstones, fan-out o compactación atrasada degrada latencia y frescura", evidence: "traza de consulta, distribución de claves, deuda de compactación y restore" },
  { pattern: /compiler|compilador|bytecode|jit|aot|macro|expansion|inline|quoted|splicing|mirror|ast|disassembly|op tree|specialization|spesh/, family: "internals", shape: "pipeline", input: "fuente, tipos conocidos, entorno de expansión y opciones de compilación", transformation: "analiza, expande, especializa y baja a una representación ejecutable", result: "código cuyo origen y decisiones de optimización pueden inspeccionarse", failure: "captura de nombres, staging inválido, supuesto de tipos o deoptimización cambia semántica o costo", evidence: "árbol intermedio, expansión, disassembly y comparación optimizado-no optimizado" },
  { pattern: /\bui\b|\blayouts?\b|\bviews?\b|\bcomponents?\b|compose|render|\btemplates?\b|\bforms?\b|accessibility|talkback|\baria\b|touch target|\blocale\b|international|overlay|\bslots?\b|recycler|fragment/, family: "structure", shape: "state-delta", input: "estado de interfaz, restricciones geométricas, locale y tecnologías de asistencia", transformation: "mide, compone, renderiza y actualiza solo las dependencias invalidadas", result: "interfaz navegable cuyo estado visual y semántico coinciden", failure: "estado duplicado, foco perdido, target pequeño o hidratación divergente rompe interacción", evidence: "árbol semántico, captura de layout, navegación por teclado y prueba con texto ampliado" },
  { pattern: /\bbuild\b|package|paquete|dependency|dependencia|cpan|quicklisp|asdf|sbt|resolver|module|modulo|distribution|dist-zilla|meta6|zef|precomp|cross-building/, family: "operations", shape: "dataflow", input: "fuentes, manifiesto, constraints de versión y repositorios permitidos", transformation: "resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado", result: "artefacto versionado cuya composición puede reproducirse", failure: "dependencia mutable, resolución distinta o metadata incompleta introduce drift o código no auditado", evidence: "lockfile o grafo, hashes, SBOM, build limpio y comparación de artefactos" },
  { pattern: /deploy|deployment|release|rollout|promotion|rollback|upgrade|migration|migracion|signing key|store policy|adapter environment/, family: "operations", shape: "lifecycle", input: "artefacto aprobado, configuración versionada, estado compatible y criterio de salud", transformation: "promueve por etapas, observa señales y conserva una ruta de reversión", result: "versión activa con tráfico y datos dentro del contrato", failure: "migración irreversible, configuración divergente o señal tardía obliga a rollback incompleto", evidence: "manifest, health checks, métricas canary y simulacro de reversión" },
  { pattern: /backup|restore|recovery|recuperacion|failover|snapshot|crash-dump|fallback|mirror promotion|incident|continuity|continuidad/, family: "lifecycle", shape: "counterexample", input: "estado durable, punto objetivo, copia independiente y dependencia de arranque", transformation: "aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro", result: "servicio recuperado con pérdida y tiempo medidos", failure: "backup no verificable, lag oculto o dependencia ausente impide alcanzar el punto prometido", evidence: "restore en entorno aislado, checksum, RPO-RTO observado y prueba funcional" },
  { pattern: /performance|rendimiento|optimization|optimizacion|jank|latency|throughput|allocation sampling|warmup|copy-on-write|large repository tuning/, family: "optimization", shape: "plan-comparison", input: "workload representativo, baseline, presupuesto y ambiente controlado", transformation: "mide cuello de botella, cambia una variable y repite con calentamiento suficiente", result: "mejora atribuible que conserva corrección y percentiles importantes", failure: "microbenchmark sesgado, caché caliente o métrica promedio desplaza el costo a otra ruta", evidence: "perfil antes-después, intervalos, percentiles y prueba de regresión funcional" },
  { pattern: /lifecycle|cleanup|finaliz|resource|recurso|shutdown|restart|cold start|session|scope|unwind|demolish|build and tweak/, family: "lifecycle", shape: "lifecycle", input: "recurso recién adquirido, dueño, dependientes y señal de cancelación", transformation: "activa, usa y transfiere ownership solo bajo un protocolo explícito", result: "recurso cerrado exactamente una vez y estado final observable", failure: "salida excepcional, dueño ambiguo o cleanup tardío filtra o libera dos veces", evidence: "contadores de apertura-cierre, fallo inyectado y traza de cancelación" },
  { pattern: /constraint|restriccion|integrity|integridad|invariant|invariante|validation|validacion|null|contract|contrato|where|precondition|postcondition/, family: "contract", shape: "proof", input: "valor candidato, contexto y regla expresada como predicado comprobable", transformation: "evalúa precondiciones y combina restricciones antes de comprometer estado", result: "valor aceptado con garantía explícita o error localizado", failure: "regla parcial, orden dependiente o bypass acepta un estado que consumidores no manejan", evidence: "casos válidos, contraejemplo mínimo y constraint ejecutada en la frontera durable" },
  { pattern: /function|funcion|composition|composicion|recursion|tailrec|partial application|referential|persistent|immutable|option|either/, family: "semantics", shape: "dataflow", input: "valores y función sin efectos ocultos junto con su caso base", transformation: "compone aplicaciones y propaga resultado o error sin mutar la entrada", result: "valor reutilizable cuya evaluación puede sustituirse por su resultado", failure: "efecto encubierto, recursión sin progreso o alias mutable rompe razonamiento", evidence: "evaluación paso a paso, propiedad algebraica y prueba del caso límite" },
];

const familyTemplates: Readonly<Record<MechanismFamily, MechanismTemplate>> = {
  semantics: { family: "semantics", shape: "state-delta", input: "un ejemplo mínimo y su contexto de evaluación", transformation: "aplica la regla semántica paso a paso y registra cada decisión", result: "un valor y efecto observables que pueden predecirse antes de ejecutar", failure: "un supuesto implícito cambia la interpretación o propaga un efecto inesperado", evidence: "traza de evaluación y contraejemplo que separa reglas cercanas" },
  structure: { family: "structure", shape: "proof", input: "elementos, identidad, cardinalidad y relaciones candidatas", transformation: "compone la estructura y comprueba cada restricción representable", result: "representación navegable que excluye estados inválidos", failure: "una relación ambigua o restricción ausente permite un estado imposible", evidence: "inspección estructural y pares válido-inválido" },
  contract: { family: "contract", shape: "counterexample", input: "valor, precondición y frontera donde debe cumplirse la garantía", transformation: "evalúa la regla antes de aceptar el cambio", result: "éxito tipado o error localizado sin estado parcial", failure: "un camino alterno omite la comprobación", evidence: "contraejemplo mínimo y verificación en la frontera durable" },
  topology: { family: "topology", shape: "boundary", input: "participantes, ubicación, enlaces y versión conocida", transformation: "propaga cambios y reconcilia observaciones parciales", result: "estado convergente con frescura y alcance medidos", failure: "partición, nodo lento o topología sesgada impide convergencia", evidence: "mapa de participantes y prueba con fallo de red" },
  learning: { family: "learning", shape: "dataflow", input: "datos versionados, objetivo y partición de evaluación", transformation: "ajusta parámetros sin consultar el conjunto reservado", result: "modelo y métricas de generalización por segmento", failure: "fuga o sobreajuste presenta memorización como aprendizaje", evidence: "curvas, semillas y evaluación fuera de muestra" },
  optimization: { family: "optimization", shape: "plan-comparison", input: "baseline, workload y presupuesto medible", transformation: "compara una modificación aislada bajo el mismo entorno", result: "mejora atribuible sin pérdida de corrección", failure: "medición sesgada desplaza costo o degrada un caso raro", evidence: "perfil antes-después y distribución de resultados" },
  transformation: { family: "transformation", shape: "pipeline", input: "entrada conservada junto con formato y límites", transformation: "aplica etapas explícitas y registra decisiones intermedias", result: "salida comparable con la entrada y contrato de la etapa siguiente", failure: "una etapa acepta ambigüedad o pierde información necesaria", evidence: "representaciones intermedias y corpus de errores" },
  lifecycle: { family: "lifecycle", shape: "lifecycle", input: "recurso, dueño y condición de cancelación", transformation: "crea, activa, usa y cierra bajo un protocolo", result: "estado final y capacidad liberada exactamente una vez", failure: "una salida excepcional deja trabajo o recurso huérfano", evidence: "traza de adquisición-liberación y fallo inyectado" },
  resources: { family: "resources", shape: "resource-balance", input: "demanda de capacidad, límite y propietario", transformation: "asigna, usa, contabiliza y reclama capacidad", result: "servicio dentro del presupuesto sin retención residual", failure: "agotamiento, fuga o liberación prematura", evidence: "contadores, perfil y prueba bajo presión" },
  internals: { family: "internals", shape: "pipeline", input: "representación interna antes de ejecutar la operación", transformation: "atraviesa las etapas del runtime y anota cambios de estado", result: "representación final y costo atribuible a cada etapa", failure: "supuesto interno inválido cambia semántica o rendimiento", evidence: "IR, disassembly, dump o traza del motor" },
  data: { family: "data", shape: "state-delta", input: "dato con identidad, versión y regla de consistencia", transformation: "valida, transforma y persiste manteniendo procedencia", result: "estado consultable y recuperable", failure: "duplicación, pérdida o actualización fuera de orden", evidence: "consulta diferencial, constraints y restore" },
  concurrency: { family: "concurrency", shape: "timeline", input: "operaciones simultáneas, ownership y orden requerido", transformation: "coordina progreso, visibilidad y cancelación", result: "estado correcto para todos los interleavings admitidos", failure: "carrera, deadlock, starvation o trabajo huérfano", evidence: "timeline forzada y detector de concurrencia" },
  security: { family: "security", shape: "boundary", input: "actor, activo, capacidad y dato no confiable", transformation: "normaliza, autentica y autoriza antes del efecto", result: "decisión mínima y auditable", failure: "bypass, inyección o confusión de identidad", evidence: "prueba permitida-negada y registro de decisión" },
  verification: { family: "verification", shape: "counterexample", input: "fixture aislado, oráculo y semilla", transformation: "ejecuta casos normales, límites y fallos", result: "evidencia repetible que detecta regresión", failure: "oráculo débil o dependencia no controlada produce un falso verde", evidence: "contraejemplo, cobertura relevante y repetición" },
  integration: { family: "integration", shape: "boundary", input: "mensaje, versión, ownership y timeout de la frontera", transformation: "traduce formato, errores y ciclo de vida", result: "respuesta compatible o error tipado", failure: "mismatch, timeout ambiguo o reintento duplica efectos", evidence: "contrato, captura y prueba entre versiones" },
  operations: { family: "operations", shape: "observability", input: "artefacto, configuración, límites y criterio de salud", transformation: "ejecuta el cambio con telemetría y reversión preparada", result: "servicio estable y versión identificable", failure: "drift, señal tardía o rollback incompatible", evidence: "manifest, métricas, logs y simulacro de recuperación" },
};

const collectionTemplates: Readonly<Record<string, MechanismTemplate>> = {
  lisp: { family: "internals", shape: "pipeline", input: "forma Lisp, entorno léxico, package activo y estado previo de imagen", transformation: "lee, expande, compila o evalúa la forma conservando identidad de símbolos y condiciones", result: "valor, efecto y representación de imagen inspeccionables", failure: "captura de símbolos, evaluación en tiempo de lectura o recurso extranjero sin owner altera el programa", evidence: "macroexpand, inspector, condition trace, disassembly y perfil de asignaciones" },
  perl: { family: "semantics", shape: "state-delta", input: "scalar, referencia o stream junto con contexto y flags internos", transformation: "parsea al OP tree, propaga contexto y ejecuta magia, regex o módulo solicitado", result: "valor y efecto del proceso visibles bajo warnings estrictos", failure: "coerción implícita, backtracking, taint omitido o estado global cambia el resultado", evidence: "warnings, TAP, perldebug, OP dump y Devel::NYTProf" },
  raku: { family: "semantics", shape: "decision", input: "valor Raku, tipo, candidatos de despacho y scheduler activo", transformation: "Rakudo analiza y MoarVM resuelve metamodelo, grammar, multi dispatch o trabajo reactivo", result: "valor, Match, promesa o efecto con candidato y ownership identificados", failure: "ambigüedad, backtracking no acotado o cancelación perdida deja una decisión incorrecta", evidence: "AST, lista de candidatos, Test, profiler y telemetry de MoarVM" },
  scala: { family: "contract", shape: "proof", input: "expresión Scala, tipos inferidos, efectos declarados y recursos JVM", transformation: "Scala 3 comprueba tipos, baja a bytecode y el runtime ejecuta efectos o streams", result: "valor tipado y recursos cerrados con comportamiento binario observable", failure: "inferencia inesperada, cancelación mal acotada o incompatibilidad binaria rompe el contrato", evidence: "TASTy, tests de leyes, JFR, JMH y telemetría de efectos" },
  blockchain: { family: "topology", shape: "timeline", input: "transacción firmada, estado previo, reglas de protocolo y vista local de red", transformation: "valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido", result: "recibo y nuevo root de estado verificables por participantes independientes", failure: "reorganización, ejecución adversarial o incentivo mal alineado revierte o censura el cambio", evidence: "hashes, recibos, pruebas de inclusión, trazas de nodo y simulación de fork" },
  android: { family: "lifecycle", shape: "lifecycle", input: "evento de usuario o sistema, lifecycle, permisos y saved state", transformation: "el framework enruta el evento por componentes, Binder, ART y la capa de interfaz", result: "estado visible y persistente que sobrevive la transición de lifecycle prevista", failure: "muerte de proceso, ANR, fuga o permiso revocado deja UI y datos divergentes", evidence: "test instrumentado, Logcat, Perfetto, Binder trace y Android Vitals" },
  qwik: { family: "transformation", shape: "boundary", input: "HTML SSR, estado serializable, QRL y señal que puede despertar trabajo", transformation: "el optimizer separa símbolos y el navegador reanuda únicamente la frontera activada", result: "interacción disponible con chunks y listeners cargados bajo demanda", failure: "closure no serializable, tarea sin cleanup o prefetch excesivo elimina la ventaja de resumibilidad", evidence: "manifest de símbolos, HTML serializado, waterfall, prueba SSR y navegación medida" },
  angular: { family: "structure", shape: "state-delta", input: "componente, señal, inyector y estado de router o formulario", transformation: "compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada", result: "DOM, árbol de inyección y estado reactivo coherentes", failure: "ciclo de señales, provider mal acotado o hidratación divergente deja una vista obsoleta", evidence: "template diagnostics, TestBed, harness, profiler y traza de navegación" },
  django: { family: "data", shape: "pipeline", input: "request validado, identidad, parámetros y estado transaccional", transformation: "middleware, resolver, vista y ORM aplican política, consulta y render o serialización", result: "response y cambios de base de datos correlacionados y autorizados", failure: "N+1, carrera transaccional, autorización omitida o tarea duplicada rompe latencia o integridad", evidence: "system checks, tests transaccionales, query plan, logs y trace correlacionado" },
  sql: { family: "data", shape: "plan-comparison", input: "expresión relacional, catálogo, estadísticas, parámetros y snapshot", transformation: "parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices", result: "filas correctas y cambios durables bajo el aislamiento solicitado", failure: "orden no determinista, estimación sesgada o bloqueo inesperado cambia resultado o costo", evidence: "constraints, plan real, wait graph, métricas del motor y restore verificado" },
  nosql: { family: "topology", shape: "boundary", input: "operación, clave de partición, versión y nivel de consistencia", transformation: "router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor", result: "respuesta con frescura, alcance y durabilidad conocidas", failure: "hotspot, conflicto perdido, lectura obsoleta o deuda de compactación degrada la garantía", evidence: "historial Jepsen, métricas por partición, repair status y restore aislado" },
  "operating-systems": { family: "internals", shape: "resource-balance", input: "syscall, proceso, credenciales y recurso físico o virtual solicitado", transformation: "kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización", result: "recurso visible al proceso con límites y accounting correctos", failure: "carrera, deadlock, starvation o corrupción atraviesa el límite kernel-usuario", evidence: "trace de kernel, counters, dump, fault injection y prueba de ABI" },
  "artificial-intelligence": { family: "learning", shape: "dataflow", input: "datos versionados, objetivo, restricciones de uso y baseline", transformation: "prepara, entrena o infiere registrando parámetros, linaje y decisión", result: "predicción o política acompañada por incertidumbre y evaluación por segmento", failure: "fuga, sesgo, deriva, ataque o benchmark contaminado presenta evidencia inválida", evidence: "lineage, intervalos, pruebas por cohorte, model card y monitoreo" },
  latex: { family: "transformation", shape: "pipeline", input: "fuente TeX, activos, configuración del motor y archivos auxiliares", transformation: "expande tokens, construye nodos y compone páginas a través de pasadas reproducibles", result: "PDF tipográfico, navegable y estructuralmente verificable", failure: "macro frágil, referencia desfasada o activo inseguro cambia o compromete el artefacto", evidence: "log, l3build, preflight, árbol etiquetado y hash del PDF" },
  subversion: { family: "operations", shape: "state-delta", input: "working copy, revisión base, cambios locales, propiedades y autorización por ruta", transformation: "cliente y servidor calculan delta, validan hooks y crean una revisión central inmutable", result: "repositorio y working copy con historia y mergeinfo reconstruibles", failure: "conflicto oculto, authz incorrecta o metadata perdida separa contenido e historia", evidence: "status, diff, mergeinfo, verify, dump-load y prueba entre versiones" },
};

function mechanismFamily(title: string, section: string): MechanismFamily {
  const titleText = normalizeTechnicalText(title);
  if (/seguridad|security|auth|permission|privacidad|privacy|attack|escape|taint|csp|secret|firma|signature|keystore/.test(titleText)) return "security";
  if (/testing|test|prueba|verify|verification|quality|calidad|fuzz|assert|benchmark|validation/.test(titleText)) return "verification";
  if (/partition|particion|shard|replica|quorum|distributed|distribuid|leader|follower|topolog|gossip|anti-entropy|pacelc|routing/.test(titleText)) return "topology";
  if (/concurr|thread|scheduler|async|coroutine|stream|actor|mailbox|lock|mutex|parallel|ipc|signal/.test(titleText)) return "concurrency";
  if (/gradient|backprop|regularization|optimizacion|optimization|loss|hyperparameter|calibration|pruning|quantization/.test(titleText)) return "optimization";
  if (/learning|aprendizaje|training|entrenamiento|reinforcement|policy gradient|fine-tun/.test(titleText)) return "learning";
  if (/lifecycle|ciclo de vida|cancel|cleanup|resource|recurso|scope|session|shutdown|restart|recovery|recuperacion|rollback|migracion|migration/.test(titleText)) return "lifecycle";
  if (/memory|memoria|heap|stack|page|pagina|buffer|register|registro|filesystem|storage|almacenamiento|device|dispositivo|cpu|cache/.test(titleText)) return "resources";
  if (/intern|runtime|compiler|compilador|vm|gc|kernel|optimizer|bytecode|expansion|reader|dispatch|engine/.test(titleText)) return "internals";
  if (/constraint|restriccion|integrity|integridad|consisten|normaliz|isolation|serializ|durability|atomicity|null|collation|domain|dominio|invariant|invariante/.test(titleText)) return "contract";
  if (/datos|data|persist|sql|query|consulta|index|indice|schema|modelo|model|transaction|archivo|file|bibliograf|dataset/.test(titleText)) return "data";
  if (/interoper|network|red |http|api|native|ffi|binder|driver|protocol|protocolo|bridge|connector|integration/.test(titleText)) return "integration";
  if (/tipo|type|trait|generic|class|clase|object|objeto|component|componente|template|form|shape|layout|ontology|ontologia|grammar|gramatica|relacion|relational|tupla|clave|key-value|document|grafo|graph|column|aggregate|agregado|join|window|frame/.test(titleText)) return "structure";
  if (/search|busqueda|planning|planificacion|algorithm|algorit|inference|inferencia|regression|regresion|cluster|transform|render|parsing|evaluation|evaluacion/.test(titleText)) return "transformation";

  const sectionText = normalizeTechnicalText(section);
  if (/seguridad|privacy/.test(sectionText)) return "security";
  if (/testing|diagnostico|calidad/.test(sectionText)) return "verification";
  if (/concurr|distribuid|sincronizacion/.test(sectionText)) return "concurrency";
  if (/operacion|entrega|rendimiento|build|mantenimiento/.test(sectionText)) return "operations";
  if (/datos|persistencia|almacenamiento/.test(sectionText)) return "data";
  return "semantics";
}

function buildConceptNarrative(collectionId: string, title: string, section: string): ConceptNarrative {
  const profile = descriptionProfiles[collectionId];
  if (!profile) throw new Error(`Falta el perfil descriptivo de ${collectionId}.`);

  const normalizedTitle = normalizeTechnicalText(title);
  const normalizedSection = normalizeTechnicalText(section);
  const applicableRules = mechanismRules.filter((rule) =>
    !rule.collections || rule.collections.includes(collectionId),
  );
  const template = applicableRules.find((rule) => rule.pattern.test(normalizedTitle))
    ?? applicableRules.find((rule) => rule.pattern.test(normalizedSection))
    ?? collectionTemplates[collectionId]
    ?? familyTemplates[mechanismFamily(title, section)];

  return {
    ...template,
    title,
    section,
    input: template.input,
    transformation: template.transformation,
    result: template.result,
    failure: template.failure,
    evidence: template.evidence,
  };
}

function renderNarrative(narrative: ConceptNarrative, ordinal = 0) {
  const { title, section, transformation, result } = narrative;
  const t = transformation.trim().replace(/\.$/, "");
  const r = result.trim().replace(/\.$/, "");

  switch (ordinal % 8) {
    case 0:
      return `${title} en ${section}: ${t}, asegurando ${r}.`;
    case 1:
      return `En ${section}, ${title} ${t} para entregar ${r}.`;
    case 2:
      return `${title} aplica este mecanismo en ${section}: ${t}, con ${r}.`;
    case 3:
      return `El mecanismo de ${title} dentro de ${section} ${t} y consolida ${r}.`;
    case 4:
      return `Para ${title}, la arquitectura de ${section} ${t}, garantizando ${r}.`;
    case 5:
      return `${title} gestiona ${section} de modo que ${t}, produciendo ${r}.`;
    case 6:
      return `A través de ${title} en ${section}, el sistema ${t} manteniendo ${r}.`;
    case 7:
    default:
      return `En el flujo operativo de ${section}, ${title} ${t} para obtener ${r}.`;
  }
}

function describeConcept(collectionId: string, title: string, section: string, ordinal = 0) {
  return renderNarrative(buildConceptNarrative(collectionId, title, section), ordinal);
}

export const newLearningExtensionsPlatformsData: NewLearningExtensionRegistry = Object.fromEntries(
  Object.entries(rawNewLearningExtensionsPlatformsData).map(([collectionId, chapters]) => {
    const supplemental = new Map(supplementalConceptTitles[collectionId] ?? []);

    return [
      collectionId,
      chapters.map((chapter) => ({
        ...chapter,
        concepts: [...chapter.concepts, ...(supplemental.get(chapter.section) ?? [])].map((title, conceptIndex) =>
          `${title}::${describeConcept(collectionId, title, chapter.section, conceptIndex)}`,
        ),
      })),
    ];
  }),
);

export type PlatformDescriptionAudit = {
  collections: number;
  chapters: number;
  concepts: number;
  minimumDescriptionLength: number;
  maximumRepeatedSkeletonsInChapter: number;
  chaptersOverLimit: number;
};

function normalizedDescriptionSkeleton(description: string, title: string, section: string) {
  let skeleton = normalizeTechnicalText(description);
  for (const field of [title, section]) {
    const normalizedField = normalizeTechnicalText(field);
    if (normalizedField) skeleton = skeleton.split(normalizedField).join("<campo>");
  }
  return skeleton.replace(/[^a-z0-9<>*+#.$«»]+/g, " ").replace(/\s+/g, " ").trim();
}

function auditPlatformDescriptions(registry: NewLearningExtensionRegistry): PlatformDescriptionAudit {
  let chapters = 0;
  let concepts = 0;
  let minimumDescriptionLength = Number.POSITIVE_INFINITY;
  let maximumRepeatedSkeletonsInChapter = 0;
  let chaptersOverLimit = 0;

  for (const [collectionId, collectionChapters] of Object.entries(registry)) {
    for (const chapter of collectionChapters) {
      chapters += 1;
      const skeletonCounts = new Map<string, number>();
      for (const serializedConcept of chapter.concepts) {
        const separator = serializedConcept.indexOf("::");
        if (separator <= 0) throw new Error(`Concepto sin descripción en ${collectionId}/${chapter.section}.`);
        const title = serializedConcept.slice(0, separator);
        const description = serializedConcept.slice(separator + 2);
        if (description.length < 100) throw new Error(`Descripción insuficiente para ${collectionId}/${chapter.section}/${title}.`);

        concepts += 1;
        minimumDescriptionLength = Math.min(minimumDescriptionLength, description.length);
        const skeleton = normalizedDescriptionSkeleton(description, title, chapter.section);
        skeletonCounts.set(skeleton, (skeletonCounts.get(skeleton) ?? 0) + 1);
      }

      const chapterMaximum = Math.max(0, ...skeletonCounts.values());
      maximumRepeatedSkeletonsInChapter = Math.max(maximumRepeatedSkeletonsInChapter, chapterMaximum);
      if (chapterMaximum > 2) chaptersOverLimit += 1;
    }
  }

  if (chaptersOverLimit > 0) {
    throw new Error(`La autoauditoría encontró ${chaptersOverLimit} capítulos con más de dos esqueletos descriptivos iguales.`);
  }

  return {
    collections: Object.keys(registry).length,
    chapters,
    concepts,
    minimumDescriptionLength: Number.isFinite(minimumDescriptionLength) ? minimumDescriptionLength : 0,
    maximumRepeatedSkeletonsInChapter,
    chaptersOverLimit,
  };
}

export const platformDescriptionAudit = auditPlatformDescriptions(newLearningExtensionsPlatformsData);
