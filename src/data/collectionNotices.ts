/**
 * Registro canónico y centralizado de avisos técnicos para las 73 colecciones de Dev Visualizer.
 * Permite presentar:
 * - "Contexto tecnológico" para tecnologías vigentes (versión estable, runtime, estándares).
 * - "Tecnología heredada" para tecnologías en fase de legado o migración (como AngularJS, Objective-C, Subversion).
 * - "Tecnología histórica" para tecnologías fundacionales o de hardware previo (como C*, CWEB).
 */
export const collectionNotices: Record<string, string> = {
  // --- Lenguajes ---
  javascript:
    "Referencia técnica verificada según el estándar ECMAScript (ECMA-262 2026). Cubre la semántica del lenguaje, el modelo asíncrono con Event Loop y microtasks, motores de ejecución modernos (V8, SpiderMonkey, JavaScriptCore) y estándares web complementarios de la W3C/WHATWG.",

  typescript:
    "Referencia tecnológica verificada para TypeScript 5.8+. El chequeo de tipos opera exclusivamente en tiempo de compilación y se borra completamente en la emisión a JavaScript; las fronteras de red y almacenamiento requieren validación de runtime defensiva independiente.",

  python:
    "Referencia tecnológica verificada el 21 de agosto de 2026: Python 3.14.7 es la versión estable documentada. Python es el lenguaje y CPython su implementación de referencia; frameworks, bibliotecas, runtimes alternativos y modelos conservan versiones, licencias y compatibilidad independientes.",

  prolog:
    "Referencia verificada el 20 de septiembre de 2026. El núcleo se contrasta con ISO/IEC 13211-1, módulos con ISO/IEC 13211-2 y DCG con ISO/IEC TS 13211-3:2025. Los ejemplos operativos usan SWI-Prolog 10.0.2 estable; las extensiones de implementación se identifican para no prometer portabilidad inexistente.",

  c:
    "Referencia verificada según ISO/IEC 9899:2024 (C23). La colección enseña el modelo de memoria lineal, punteros, lifetimes y comportamiento indefinido (Undefined Behavior), distinguiendo estándares normativos de extensiones específicas de GCC, Clang o MSVC.",

  cpp:
    "Referencia técnica verificada para C++23 (ISO/IEC 14882:2023) con perspectiva hacia C++26. Enfatiza RAII estricto, gestión de recursos con semántica de movimiento, conceptos (Concepts), rangos, concurrencia atómica y exclusión de punteros crudos no administrados.",

  "c-sharp":
    "Referencia tecnológica verificada para C# 13 y .NET 9. Cubre el sistema de tipos unificado, tipos por valor y referencia (ref structs), pattern matching avanzado, concurrencia asíncrona con Task/ValueTask y compilación Ahead-Of-Time (Native AOT).",

  "objective-c":
    "Tecnología heredada: Objective-C continúa soportado en plataformas Apple, pero esta ruta está orientada principalmente a mantenimiento, interoperabilidad y migración gradual; para código nuevo suele preferirse Swift.",

  "c-star":
    "Tecnología histórica: C* fue una extensión de C para sistemas Connection Machine de Thinking Machines. Esta colección es histórica y no implica disponibilidad de un toolchain moderno o hardware actual.",

  cweb:
    "Tecnología histórica: CWEB es un sistema estable e histórico de programación literaria creado por Donald Knuth y Silvio Levy. Se estudia por su modelo documental, no como sustituto general de toolchains modernos.",

  "embedded-c":
    "Referencia técnica para sistemas embebidos de tiempo real bajo lineamientos MISRA C:2023. Aborda microcontroladores ARM Cortex-M, RISC-V y AVR, acceso directo a registros de memoria mapeada, rutinas de interrupción (ISR) y temporización determinista.",

  "visual-basic":
    "Referencia para Visual Basic .NET sobre el runtime de .NET 9. Mantiene soporte oficial de Microsoft para aplicaciones existentes con interoperabilidad completa con el ecosistema CLR; el desarrollo de nuevos proyectos suele orientarse hacia C# o F#.",

  ruby:
    "Referencia tecnológica para Ruby 3.4+. Explica el modelo puramente orientado a objetos donde todo valor es un objeto, bloques y closures con Procs/Lambdas, metaprogramación reflexiva y concurrencia sin GVL mediante Ractors y Fibers asíncronos.",

  rust:
    "Referencia tecnológica verificada para Rust 2024 Edition (1.85+). Detalla las garantías de compilación sin recolector de basura mediante ownership, borrowing y lifetimes explícitos, abstracciones de coste cero y concurrencia segura contra carreras de datos.",

  php:
    "Referencia tecnológica verificada para PHP 8.4+. Cubre tipado estricto, property hooks, asimetría de visibilidad, compilador JIT, atributos nativos, estándares de interoperabilidad PSR y arquitecturas web modernas con despliegue de alto rendimiento.",

  haskell:
    "Referencia formal basada en el estándar Haskell 2010 y extensiones vigentes del compilador GHC 9.10+. Presenta funciones puras sin efectos secundarios implícitos, tipos algebraicos de datos (ADT), evaluación perezosa y modelado monádico de I/O.",

  go:
    "Referencia tecnológica verificada para Go 1.24+. Examina el modelo de concurrencia CSP (Communicating Sequential Processes) con goroutines y canales, tipos e interfaces implícitas, genéricos, recolector de basura de baja pausa y compilación a binarios estáticos autónomos.",

  kotlin:
    "Referencia tecnológica verificada para Kotlin 2.1+ con motor de compilación K2. Explora el sistema de tipos con Sound Null Safety, coroutines para asincronía estructurada, programación funcional/orientada a objetos e interoperabilidad nativa y JVM.",

  java:
    "Referencia tecnológica verificada para Java SE 23 / JDK 21 LTS. Abarca Project Loom (hilos virtuales ligeros), Pattern Matching para switch y records, tipos sellados (sealed classes), recolección de basura ZGC de milisegundos y optimizaciones en la JVM HotSpot.",

  r:
    "Referencia verificada para R 4.4+. Modela el cálculo matricial y vectorial nativo, sistemas de objetos S3/S4/R6, gramática de datos y gráficos reproducibles para estadística rigurosa, ciencia de datos y bioinformática.",

  assembly:
    "La colección estudia x86-64 y AArch64 como ejemplos vigentes y separa cuidadosamente ISA, sintaxis del ensamblador, formato de objetos y ABI; fragmentos antiguos se presentan solo con contexto histórico.",

  erlang:
    "Referencia de arquitectura concurrente para Erlang/OTP 27. Explica la máquina virtual BEAM, procesos aislados con memoria independiente, paso de mensajes inmutables, árboles de supervisión jerárquicos y tolerancia a fallos distribuida sin estado compartido.",

  lisp:
    "Lisp nació en 1958, pero no es una tecnología extinta. La colección distingue raíces históricas de Common Lisp y Scheme modernos, y etiqueta las extensiones de cada implementación.",

  perl:
    "Referencia técnica para Perl 5.40+. Presenta la sintaxis moderna para procesamiento avanzado de cadenas, motor de expresiones regulares de alto rendimiento, referencias a estructuras complejas, el nuevo sistema nativo de clases y automatización robusta de sistemas.",

  raku:
    "Referencia tecnológica para Raku (especificación Roast 6.d). Destaca su sistema de gramáticas integradas para análisis sintáctico de texto, tipos graduales, operadores junction para evaluación paralela y capacidades de metaprogramación expansiva.",

  scala:
    "Referencia técnica verificada para Scala 3.6+. Integra programación funcional pura y orientación a objetos avanzada en la JVM, con tipos de unión e intersección, contextual abstractions (using/given) y metaprogramación basada en macros seguras.",

  dart:
    "Referencia técnica verificada para Dart 3.x. Incluye Sound Null Safety garantizado por el compilador, desestructuración mediante Patterns, registros inmutables, modificadores de clase (sealed, base, interface) y concurrencia sin hilos compartidos mediante Isolates.",

  // --- Fundamentos ---
  "programming-fundamentals":
    "Referencia pedagógica agnóstica de lenguaje. Fundamentada en ciencias de la computación, abstracción de datos, modularidad, diseño procedimental y funcional, y construcción de modelos mentales antes de adoptar un framework específico.",

  algorithms:
    "Referencia analítica basada en análisis asintótico formal (notación Big-O). Contrasta estructuras de datos lineales y no lineales con técnicas algorítmicas canónicas (divide y vencerás, programación dinámica, algoritmos voraces y recorrido de grafos).",

  mathematics:
    "Referencia de matemática discreta y aplicada para ciencias de la computación. Incluye lógica proposicional y de predicados, álgebra lineal para gráficos y aprendizaje automático, combinatoria, teoría de números y cálculo computacional.",

  methodologies:
    "Referencia sobre metodologías de ingeniería de software. Contrasta el marco Scrum (Guía Scrum 2020), Kanban, eXtreme Programming (XP) y entrega continua basada en telemetría de producción y ciclos de feedback iterativos.",

  scratch:
    "Referencia educativa para Scratch 3.0 (MIT Media Lab). Modela programación dirigida por eventos, concurrencia de hilos cooperativos visuales, paso de mensajes mediante broadcast y pensamiento algorítmico sin fricción sintáctica.",

  // --- Interfaces y Diseño ---
  "ux-ui":
    "Referencia metodológica de diseño de producto y experiencia de usuario. Enlaza investigación de usuarios, arquitectura de información, pruebas de usabilidad, diseño responsivo, diseño atómico y cumplimiento riguroso de accesibilidad universal (WCAG 2.2 AA).",

  "html-css":
    "Referencia verificada contra los estándares vivos WHATWG HTML y W3C CSS. Conecta el árbol semántico del DOM y la accesibilidad (AOM) con el algoritmo de Cascade, capas (@layer), maquetación con Grid/Subgrid/Flexbox y consultas de contenedor.",

  bootstrap:
    "Referencia tecnológica: Bootstrap 5.3.8, versión publicada en el sitio oficial al documentar esta colección (agosto de 2026).",

  angularjs:
    "Tecnología heredada: el soporte oficial de AngularJS 1.x terminó en enero de 2022. Esta colección enseña mantenimiento y migración; para proyectos nuevos conviene evaluar frameworks con soporte activo.",

  react:
    "Referencia tecnológica verificada para React 19.x. Incorpora el paradigma de Server Components (RSC) y Server Actions, renderizado concurrente, Suspense para carga asíncrona, optimizaciones automáticas con React Compiler y gestión granular de efectos.",

  "react-native":
    "Referencia tecnológica verificada para React Native 0.78+. Integra la Nueva Arquitectura habilitada por defecto: renderizador Fabric, TurboModules para puente C++ directo, motor JavaScript Hermes y cálculo sincrónico de layouts con Yoga.",

  qwik:
    "Referencia tecnológica verificada para Qwik 1.x. Presenta la arquitectura de resumibilidad (resumability) que elimina el coste de hidratación en el cliente, serializando el estado completo en el HTML y cargando código JavaScript bajo demanda ante interacción.",

  angular:
    "Referencia tecnológica verificada para Angular 19+. Desarrolla la arquitectura reactiva basada en Signals, componentes standalone sin NgModules obligatorios, nuevo control flow declarativo (@if, @for) y renderizado híbrido SSR/SSG de alto rendimiento.",

  flutter:
    "Referencia tecnológica verificada para Flutter 3.x. Incorpora el motor gráfico Impeller por defecto en iOS y Android con shaders precompilados AOT, arquitectura tripartita desacoplada, gestión reactiva de estado y perfilado avanzado en DevTools.",

  // --- Plataformas y Servidor ---
  apis:
    "Referencia técnica de diseño de interfaces de servicios. Integra contratos declarativos con OpenAPI 3.1, esquemas GraphQL, servicios RPC de baja latencia con gRPC sobre HTTP/2 y arquitecturas de eventos asíncronos con AsyncAPI.",

  backend:
    "Referencia de arquitectura de software para servidores. Abarca patrones multicapa y limpios (Clean Architecture), persistencia transaccional ACID, capas de caché distribuida, seguridad OWASP en endpoints y observabilidad integral con OpenTelemetry.",

  nodejs:
    "Referencia tecnológica: Node.js 24 LTS (Krypton), línea LTS activa al documentar esta colección en agosto de 2026. Para producción se recomiendan líneas Active LTS o Maintenance LTS.",

  laravel:
    "Referencia tecnológica: Laravel 13.x, versión actual documentada al comenzar esta fase en agosto de 2026. La colección enlaza documentación primaria para revisar soporte y cambios.",

  n8n:
    "Referencia tecnológica: n8n 2.34.5, release estable publicada el 12 de agosto de 2026 y vigente al cerrar esta fase.",

  dotnet:
    "Referencia tecnológica verificada para .NET 9.x LTS. Modela la arquitectura unificada de la Common Language Runtime (CLR), compilador JIT (RyuJIT), compilación Native AOT para microservicios y APIs web de alto rendimiento con ASP.NET Core.",

  mediapipe:
    "Referencia tecnológica verificada el 21 de agosto de 2026. La documentación pública de MediaPipe distingue Tasks para Python, Web, Android e iOS, además del framework y sus modelos. La versión del paquete, la superficie API, el modelo y la plataforma deben comprobarse juntas dentro de un entorno reproducible.",

  firebase:
    "Referencia tecnológica para Firebase SDK v11+. Integra bases de datos en tiempo real y offline con Cloud Firestore, autenticación multi-proveedor, funciones serverless en Cloud Functions, hosting global y reglas de seguridad declarativas comprobadas en compilación.",

  android:
    "Referencia tecnológica para Android 15 (API level 35). Aplica desarrollo declarativo moderno con Jetpack Compose, arquitectura recomendada de capas (UI, Domain, Data), coroutines de Kotlin para concurrencia y gestión estricta del ciclo de vida.",

  django:
    "Referencia tecnológica verificada para Django 5.1+. Explica el patrón Modelo-Template-Vista (MTV), el ORM con soporte asíncrono, sistema de migraciones transaccionales, panel de administración seguro y defensas automáticas contra CSRF, XSS y SQL injection.",

  // --- Datos ---
  xml:
    "Referencia normativa basada en XML 1.0 (Fifth Edition) y Namespaces in XML 1.0 (Third Edition) del W3C. Modela la estructura jerárquica de árboles de nodos, procesamiento con DOM, SAX y StAX, y mitigaciones esenciales contra ataques XXE.",

  xsd:
    "XSD 1.1 es una Recomendación W3C, pero no todos los procesadores implementan assertions, type alternatives u open content. Cada proyecto debe declarar la versión objetivo y comprobar el schema set con el validador real.",

  json:
    "JSON y JSON Schema son estándares distintos. JSON define sintaxis; JSON Schema define dialectos, vocabularios y evaluación. Un parser JSON no valida automáticamente un schema ni una regla de negocio.",

  "state-management":
    "Referencia arquitectónica sobre gestión de estado en clientes web y móviles. Diferencia estado efímero de interfaz, estado global compartido, caché remota de servidor con invalidación inteligente y sincronización bidireccional offline.",

  databases:
    "Referencia fundamental de persistencia de datos. Contrasta modelos relacionales ANSI SQL con bases de datos NoSQL documentales, clave-valor, columnares y de grafos, evaluando propiedades ACID vs BASE, teorema CAP y estrategias de particionado y replicación.",

  "sql-server":
    "Referencia tecnológica verificada el 20 de septiembre de 2026: Microsoft SQL Server 2025 (17.x) es la versión principal vigente documentada. Las funciones disponibles dependen de la edición, el sistema operativo, el nivel de compatibilidad y el servicio administrado; esta colección distingue el motor SQL Server, el dialecto T-SQL y productos relacionados de Azure o Microsoft Fabric.",

  sql:
    "Referencia formal basada en el estándar ANSI/ISO/IEC 9075:2023 (SQL:2023). Detalla el álgebra relacional, DDL, consultas analíticas con Window Functions, planes de ejecución de costo y semántica transaccional con bloqueos MVCC.",

  nosql:
    "Referencia de bases de datos no relacionales y distribuidas. Explora almacenes orientados a documentos, bases de grafos, familias de columnas y clave-valor en memoria, evaluando consistencia eventual, sharding y tolerancia a particiones de red.",

  blockchain:
    "Referencia de sistemas distribuidos con ledger inmutable. Explica criptografía de clave pública, árboles de Merkle, mecanismos de consenso deterministas (Proof of Work y Proof of Stake), ejecución de contratos inteligentes (EVM) y auditoría de estado.",

  "artificial-intelligence":
    "Referencia de fundamentos y despliegue de Inteligencia Artificial. Cubre modelos estadísticos, deep learning, arquitecturas Transformer, pipelines de entrenamiento, inferencia local y en la nube, y métricas de evaluación ética y desempeño computacional.",

  // --- Control de Versiones y Calidad ---
  git:
    "Referencia técnica verificada para Git 2.48+. Explica el almacén direccionado por contenido (blobs, trees, commits, tags anotados), la mecánica del índice/staging, punteros móviles de ramas y comandos de rescate y reescritura segura como reflog y rebase.",

  github:
    "Referencia tecnológica para la plataforma GitHub. Modela flujos colaborativos mediante Pull Requests y revisiones de código, automatización con GitHub Actions, escaneo de vulnerabilidades con CodeQL, gobernanza de ramas y distribución de releases.",

  debugging:
    "Referencia metodológica de resolución sistemática de anomalías. Presenta formulación y descarte de hipótesis con evidencia, instrumentación de registros, análisis de volcados de memoria (heap dumps), profiling de CPU y depuración remota de incidentes.",

  subversion:
    "Tecnología heredada: Subversion continúa mantenido por Apache. Se presenta como tecnología vigente en entornos concretos y con contexto de migración, no como sustituto automático de Git.",

  // --- Infraestructura y Entrega ---
  linux:
    "Referencia de sistemas operativos basada en Linux Kernel 6.x+. Cubre llamadas al sistema POSIX, espacio de usuario y espacio de kernel, gestión de procesos con systemd, memoria virtual, aislamiento con cgroups v2/namespaces y políticas de seguridad DAC/MAC.",

  aws:
    "Referencia de arquitectura cloud bajo el AWS Well-Architected Framework. Estructura el diseño de soluciones con aislamiento de redes en VPC, compute escalable (ECS/Fargate, Lambda), bases de datos administradas y permisos de menor privilegio con AWS IAM.",

  "ci-cd":
    "Referencia metodológica y técnica de entrega continua. Modela pipelines reproducibles como código, suites de pruebas automatizadas, compilación determinista, firmas de artefactos (SLSA/Sigstore), análisis de seguridad SAST/DAST y compuertas de promoción.",

  deployment:
    "Referencia de operaciones y puesta en producción. Diseña estrategias de despliegue zero-downtime (blue-green, canary, rolling updates), externalización de configuraciones según The Twelve-Factor App, migraciones de esquemas seguras y procedimientos de rollback.",

  nginx:
    "Referencia tecnológica verificada para NGINX Mainline / Stable 1.26+. Explica la arquitectura no bloqueante dirigida por eventos con epoll/kqueue, balanceo de carga L4/L7, terminación TLS 1.3 de alto rendimiento, HTTP/2, HTTP/3 (QUIC) y aceleración por caché reversa.",

  docker:
    "Referencia tecnológica verificada para Docker Engine 27.x y especificación OCI. Profundiza en el motor BuildKit, imágenes multi-etapa mínimas, capas de almacenamiento copy-on-write (overlay2), redes virtuales y aislamiento mediante namespaces y control groups.",

  "operating-systems":
    "Referencia teórica y práctica de sistemas operativos modernos. Detalla la gestión de memoria virtual con paginación y TLB, planificación preventiva de CPU, comunicación entre procesos (IPC), sincronización con semáforos/mutexes y sistemas de archivos con journaling.",

  latex:
    "Referencia tipográfica verificada para TeX Live 2026 y LaTeX2e. Desarrolla la composición tipográfica de alta precisión para documentos científicos, renderizado de fórmulas matemáticas complejas con AMS-LaTeX, gestión bibliográfica con BibLaTeX y compilación con pdfTeX y LuaLaTeX.",
};

export function noticeForCollection(collectionId: string): string | undefined {
  return collectionNotices[collectionId];
}
