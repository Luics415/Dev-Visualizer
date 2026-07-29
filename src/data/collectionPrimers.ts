export type CollectionPrimerKey =
  | "javascript"
  | "typescript"
  | "react"
  | "react-native"
  | "state-management"
  | "rest"
  | "backend"
  | "databases"
  | "git"
  | "html-css"
  | "linux"
  | "aws"
  | "deployment"
  | "nginx"
  | "docker"
  | "firebase"
  | "debugging";

export type CollectionPrimer = {
  name: string;
  definition: string;
  purpose: string;
  mentalModel: string;
  useCases: readonly string[];
  boundary: string;
  visual: "language" | "compiler" | "interface" | "mobile" | "state" | "protocol" | "server" | "database" | "history" | "document" | "system" | "cloud" | "release" | "gateway" | "container" | "platform" | "investigation";
};

export const collectionPrimers: Record<CollectionPrimerKey, CollectionPrimer> = {
  javascript: {
    name: "JavaScript",
    definition: "Es un lenguaje de programación que los navegadores y otros runtimes ejecutan para transformar datos, responder a eventos y coordinar trabajo síncrono y asíncrono.",
    purpose: "Sirve para expresar comportamiento: desde una validación pequeña hasta una aplicación completa, una API, una herramienta de línea de comandos o un proceso de automatización.",
    mentalModel: "Piensa en valores y funciones que entran al runtime, ocupan memoria, usan una pila de llamadas y colaboran con colas, APIs del entorno y el recolector de basura.",
    useCases: ["Interfaces web", "Servidores Node.js", "Automatización", "Apps multiplataforma"],
    boundary: "JavaScript no es solamente sintaxis ni vive únicamente en el navegador; su comportamiento depende también del runtime que lo hospeda.",
    visual: "language",
  },
  typescript: {
    name: "TypeScript",
    definition: "Es un lenguaje que amplía JavaScript con un sistema de tipos estático y herramientas de análisis para describir contratos antes de ejecutar el programa.",
    purpose: "Sirve para detectar incompatibilidades temprano, documentar modelos, mejorar refactors y coordinar bases de código grandes sin cambiar el runtime final de JavaScript.",
    mentalModel: "El código entra al checker, los tipos se infieren o se declaran, las relaciones se validan y después se emite JavaScript; los tipos desaparecen durante la ejecución.",
    useCases: ["Aplicaciones grandes", "APIs tipadas", "Librerías", "Migraciones seguras"],
    boundary: "TypeScript no valida automáticamente datos externos en runtime; para eso todavía necesitas schemas o validadores ejecutables.",
    visual: "compiler",
  },
  react: {
    name: "React",
    definition: "Es una biblioteca para describir interfaces como componentes que calculan una vista a partir de props, estado y contexto.",
    purpose: "Sirve para dividir una interfaz compleja en piezas declarativas, conservar identidad entre renders y coordinar actualizaciones sin manipular el DOM manualmente en cada cambio.",
    mentalModel: "Un cambio solicita otro render; React calcula un árbol nuevo, lo compara con el anterior y realiza el commit mínimo necesario sobre el host.",
    useCases: ["Aplicaciones web", "Design systems", "SSR y streaming", "Interfaces interactivas"],
    boundary: "React no es un framework completo ni una base de datos: resuelve principalmente la composición y actualización de interfaces.",
    visual: "interface",
  },
  "react-native": {
    name: "React Native",
    definition: "Es un framework para construir aplicaciones iOS y Android con React, JavaScript o TypeScript y componentes que terminan representándose mediante vistas y servicios nativos.",
    purpose: "Sirve para compartir lógica y patrones de interfaz entre plataformas sin convertir la aplicación en una página web dentro de un navegador.",
    mentalModel: "React calcula el árbol; React Native coordina ese árbol con el runtime, Fabric, módulos nativos y las APIs del sistema operativo.",
    useCases: ["Apps iOS y Android", "Productos multiplataforma", "Integraciones nativas", "Equipos React"],
    boundary: "React Native no elimina las diferencias entre iOS y Android; las hace manejables mediante abstracciones y código específico cuando hace falta.",
    visual: "mobile",
  },
  "state-management": {
    name: "Gestión de estado",
    definition: "Es la disciplina de decidir qué información cambia, quién es su autoridad, dónde vive, cómo se deriva y qué partes de la aplicación deben observarla.",
    purpose: "Sirve para mantener coherencia cuando múltiples vistas, peticiones, sesiones o dispositivos necesitan leer y modificar datos relacionados.",
    mentalModel: "Clasifica primero el estado: local, compartido, remoto, persistido, de URL o derivado; después elige el mecanismo más pequeño que conserve una sola fuente de verdad.",
    useCases: ["Formularios complejos", "Caché remota", "Flujos multivista", "Trabajo offline"],
    boundary: "Una librería de estado no corrige un modelo mal clasificado; mover todo a un store global suele aumentar el acoplamiento.",
    visual: "state",
  },
  rest: {
    name: "API REST",
    definition: "Es una interfaz HTTP orientada a recursos, representaciones y mensajes autocontenidos que permiten a clientes y servidores evolucionar con límites claros.",
    purpose: "Sirve para exponer datos y operaciones mediante URLs, métodos, headers, cuerpos y códigos de estado comprensibles por distintas plataformas.",
    mentalModel: "El cliente envía una representación de su intención; el servidor interpreta el recurso, aplica reglas y devuelve otra representación con metadatos HTTP.",
    useCases: ["Apps móviles", "Frontends web", "Integraciones", "Servicios públicos"],
    boundary: "REST no significa solamente JSON sobre HTTP ni obliga a que cada endpoint sea CRUD; lo importante son los recursos y la semántica del protocolo.",
    visual: "protocol",
  },
  backend: {
    name: "Backend",
    definition: "Es la parte de un sistema que recibe solicitudes, aplica reglas de negocio, protege recursos, coordina datos y produce respuestas o eventos confiables.",
    purpose: "Sirve para centralizar autoridad, seguridad, consistencia y trabajo que no debe depender de un cliente específico.",
    mentalModel: "Una entrada atraviesa fronteras: transporte, autenticación, validación, dominio, persistencia, integración y observabilidad.",
    useCases: ["APIs", "Procesamiento asíncrono", "Autenticación", "Integración de servicios"],
    boundary: "Backend no es sinónimo de base de datos ni de un framework; es el conjunto de responsabilidades que sostienen el comportamiento del servidor.",
    visual: "server",
  },
  databases: {
    name: "Base de datos",
    definition: "Es un sistema especializado en almacenar, organizar, consultar y proteger información más allá de la vida de un proceso individual.",
    purpose: "Sirve para conservar hechos, relaciones e historial con mecanismos de integridad, concurrencia, recuperación y acceso eficiente.",
    mentalModel: "El modelo define la verdad; las consultas piden una vista; índices y planners deciden el camino; transacciones protegen cambios concurrentes.",
    useCases: ["Datos transaccionales", "Documentos", "Caché", "Analítica"],
    boundary: "Una base de datos no sustituye el modelado ni garantiza por sí sola consultas rápidas; el esquema, los índices y los patrones de acceso importan.",
    visual: "database",
  },
  git: {
    name: "Git y GitHub",
    definition: "Git es un sistema distribuido de control de versiones basado en snapshots; GitHub es una plataforma que agrega colaboración, revisión, automatización y gobierno alrededor de repositorios Git.",
    purpose: "Sirven para conservar historia, experimentar en ramas, colaborar sin sobrescribir trabajo y relacionar cambios con decisiones y entregas.",
    mentalModel: "Git mueve referencias sobre un grafo de commits; GitHub coordina conversaciones, políticas y automatizaciones alrededor de ese grafo.",
    useCases: ["Historial de código", "Pull requests", "CI/CD", "Releases"],
    boundary: "GitHub no reemplaza Git y un commit no es solamente un diff: representa un snapshot conectado a padres y metadatos.",
    visual: "history",
  },
  "html-css": {
    name: "HTML y CSS",
    definition: "HTML describe el significado y la estructura de un documento; CSS define cómo sus cajas, estados y relaciones se presentan en distintos contextos.",
    purpose: "Sirven para construir la superficie accesible, adaptable y visual de la web antes de añadir comportamiento con JavaScript.",
    mentalModel: "El navegador convierte HTML en DOM, CSS en CSSOM, resuelve cascade y valores, calcula layout, pinta píxeles y compone capas.",
    useCases: ["Sitios web", "Aplicaciones", "Email HTML", "Design systems"],
    boundary: "HTML no es solo contenedores y CSS no es solo decoración; ambos participan en semántica, accesibilidad, geometría y rendimiento.",
    visual: "document",
  },
  linux: {
    name: "Linux",
    definition: "Es un kernel y un ecosistema de sistemas operativos que administran CPU, memoria, procesos, dispositivos, archivos, red y aislamiento para programas de usuario.",
    purpose: "Sirve como plataforma para servidores, estaciones de trabajo, contenedores, dispositivos embebidos y gran parte de la infraestructura moderna.",
    mentalModel: "Las aplicaciones viven en user space y solicitan servicios al kernel mediante system calls; procesos, permisos, archivos y sockets conectan todas las capas.",
    useCases: ["Servidores", "Contenedores", "Automatización", "Sistemas embebidos"],
    boundary: "Linux no es una única distribución ni una colección de comandos; las herramientas cambian, pero el modelo de procesos y recursos permanece.",
    visual: "system",
  },
  aws: {
    name: "AWS",
    definition: "Es una plataforma de nube que ofrece servicios administrados de cómputo, red, datos, identidad, integración, observabilidad y operación bajo demanda.",
    purpose: "Sirve para construir sistemas sin poseer toda la infraestructura física, eligiendo niveles de control, responsabilidad, elasticidad y costo.",
    mentalModel: "Empieza por cuenta, identidad y región; diseña límites de red; elige servicios por workload; observa fallos, costos y responsabilidad compartida.",
    useCases: ["Aplicaciones globales", "Datos y analítica", "Serverless", "Recuperación ante desastres"],
    boundary: "AWS no es un solo servidor remoto ni elimina la operación: cambia qué administras tú y qué administra el proveedor.",
    visual: "cloud",
  },
  deployment: {
    name: "Deployment",
    definition: "Es el proceso controlado de convertir un cambio aprobado en una versión ejecutándose en un entorno real, observable y reversible.",
    purpose: "Sirve para entregar valor sin perder trazabilidad, compatibilidad, seguridad ni capacidad de recuperación cuando algo falla.",
    mentalModel: "Un commit produce un artefacto inmutable; ese artefacto se promueve, recibe tráfico gradualmente, demuestra salud y puede retirarse o revertirse.",
    useCases: ["Releases", "Canary", "Blue-green", "Migraciones"],
    boundary: "Deployment no termina cuando el pipeline está verde; termina cuando la versión opera con tráfico, señales y un camino de recuperación.",
    visual: "release",
  },
  nginx: {
    name: "NGINX",
    definition: "Es un servidor web y proxy de arquitectura orientada a eventos que acepta conexiones, selecciona configuración y sirve contenido o reenvía tráfico a otros procesos.",
    purpose: "Sirve como entrada para aplicaciones: termina TLS, enruta URLs, balancea upstreams, limita tráfico, cachea respuestas y registra evidencia operativa.",
    mentalModel: "Sigue una conexión desde el socket: server, location, fases, upstream, buffers, filtros y logs hasta construir la respuesta.",
    useCases: ["Reverse proxy", "Servidor estático", "Load balancing", "Gateway TLS"],
    boundary: "NGINX no reemplaza la lógica de negocio de una aplicación; controla cómo llega, circula y sale el tráfico.",
    visual: "gateway",
  },
  docker: {
    name: "Docker",
    definition: "Es una plataforma y conjunto de herramientas para construir imágenes y ejecutar procesos aislados que comparten el kernel del host.",
    purpose: "Sirve para empaquetar aplicación, runtime y dependencias como un artefacto reproducible que puede ejecutarse de forma consistente en distintos entornos.",
    mentalModel: "Una imagen es un conjunto inmutable de capas; un contenedor es un proceso vivo con namespaces, cgroups, red y almacenamiento conectados al host.",
    useCases: ["Desarrollo reproducible", "CI", "Microservicios", "Distribución de software"],
    boundary: "Docker no es una máquina virtual y una imagen no es un contenedor en ejecución; comparten identidad, pero tienen ciclos de vida distintos.",
    visual: "container",
  },
  firebase: {
    name: "Firebase",
    definition: "Es una plataforma de servicios administrados para aplicaciones cliente que integra identidad, datos en tiempo real, almacenamiento, funciones, hosting, mensajería y observabilidad.",
    purpose: "Sirve para construir productos rápidamente delegando infraestructura común mientras el equipo diseña Rules, modelo de datos, costos y límites de confianza.",
    mentalModel: "El SDK cliente se comunica con servicios administrados; Auth identifica, Rules autorizan, App Check atestigua y listeners sincronizan cambios.",
    useCases: ["Apps móviles", "Prototipos", "Tiempo real", "Push notifications"],
    boundary: "Firebase no convierte al cliente en un entorno confiable ni elimina el backend; cambia dónde viven sus fronteras y responsabilidades.",
    visual: "platform",
  },
  debugging: {
    name: "Debugging",
    definition: "Es el proceso sistemático de convertir un síntoma observable en una causa demostrada mediante evidencia, hipótesis y experimentos controlados.",
    purpose: "Sirve para reparar problemas sin depender de intuición, preservar aprendizaje y evitar que la misma clase de fallo vuelva a producción.",
    mentalModel: "Define el síntoma, reproduce, acota, observa, formula una hipótesis, cambia una variable y verifica causalidad antes de corregir.",
    useCases: ["Bugs funcionales", "Rendimiento", "Memoria", "Incidentes distribuidos"],
    boundary: "Debugging no es probar cambios al azar hasta que el error desaparece; una corrección sin causa demostrada puede ocultar el problema.",
    visual: "investigation",
  },
};

export function primerKeyFromHeroClass(heroClassName: string): CollectionPrimerKey {
  const normalized = heroClassName.replace(/^hero--/, "").replace(/-practical$/, "");
  if (normalized === "typescript") return "typescript";
  if (normalized === "react") return "react";
  if (normalized === "react-native") return "react-native";
  if (normalized === "state-management") return "state-management";
  if (normalized === "rest") return "rest";
  if (normalized === "backend") return "backend";
  if (normalized === "databases") return "databases";
  if (normalized === "git") return "git";
  if (normalized === "html-css") return "html-css";
  if (normalized === "linux") return "linux";
  if (normalized === "aws") return "aws";
  if (normalized === "deployment") return "deployment";
  if (normalized === "nginx") return "nginx";
  if (normalized === "docker") return "docker";
  if (normalized === "firebase") return "firebase";
  if (normalized === "debugging") return "debugging";
  return "javascript";
}
