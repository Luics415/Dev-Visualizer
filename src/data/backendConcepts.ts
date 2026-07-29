import type { StudyConcept } from "./conceptTypes";

export const backendConcepts = [
  {
    "title": "Qué hace un backend",
    "description": "Recibe solicitudes, aplica reglas, coordina datos y devuelve respuestas confiables.",
    "section": "Fundamentos del backend",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "request → rules → response",
      "nodes": [
        "client|request",
        "backend|rules",
        "data|state",
        "response|contract"
      ],
      "outcome": "servicio coordinado",
      "caption": "El backend protege invariantes que no deben depender del cliente."
    }
  },
  {
    "title": "Cliente y servidor",
    "description": "Separa quien inicia la solicitud de quien posee recursos y lógica.",
    "section": "Fundamentos del backend",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "client ↔ server",
      "nodes": [
        "client|initiates",
        "network|transports",
        "server|decides",
        "response|returns"
      ],
      "outcome": "responsabilidades separadas",
      "caption": "La latencia y los fallos aparecen entre ambos extremos."
    }
  },
  {
    "title": "Proceso y runtime",
    "description": "Ejecuta el código del servidor dentro de un proceso con memoria, recursos y ciclo de vida.",
    "section": "Fundamentos del backend",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "node app.js",
      "nodes": [
        "process|pid",
        "heap|memory",
        "event loop|work",
        "signals|shutdown"
      ],
      "outcome": "runtime activo",
      "caption": "Un proceso puede terminar, reiniciar o quedarse sin recursos."
    }
  },
  {
    "title": "Node.js",
    "description": "Usa un runtime JavaScript orientado a I/O asíncrono y APIs de sistema.",
    "section": "Fundamentos del backend",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "node:http",
      "nodes": [
        "JS|application",
        "libuv|I/O",
        "OS|sockets",
        "callbacks|resume"
      ],
      "outcome": "I/O coordinado",
      "caption": "Node no convierte automáticamente trabajo CPU-intensivo en paralelo."
    }
  },
  {
    "title": "Event loop del servidor",
    "description": "Coordina timers, I/O, callbacks y microtasks mientras el proceso permanece activo.",
    "section": "Fundamentos del backend",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "event loop phases",
      "nodes": [
        "timers|ready",
        "poll|I/O",
        "check|immediate",
        "microtasks|between"
      ],
      "outcome": "trabajo programado",
      "caption": "Bloquear el hilo principal retrasa todas las conexiones."
    }
  },
  {
    "title": "Concurrencia y paralelismo",
    "description": "Distingue muchas operaciones en progreso de trabajo ejecutado simultáneamente.",
    "section": "Fundamentos del backend",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "concurrency vs parallelism",
      "nodes": [
        "concurrency|interleaved",
        "parallelism|multiple cores",
        "I/O|wait",
        "CPU|compute"
      ],
      "outcome": "modelo elegido",
      "caption": "I/O asíncrono y workers resuelven problemas diferentes."
    }
  },
  {
    "title": "Puertos y sockets",
    "description": "Expone un proceso en una dirección y puerto para aceptar conexiones.",
    "section": "Fundamentos del backend",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "server.listen(3000)",
      "nodes": [
        "host|0.0.0.0",
        "port|3000",
        "socket|connection",
        "process|listener"
      ],
      "outcome": "servidor accesible",
      "caption": "Escuchar localmente y exponer públicamente no son lo mismo."
    }
  },
  {
    "title": "Configuración de entorno",
    "description": "Separa valores por despliegue sin codificar secretos ni URLs dentro del código.",
    "section": "Fundamentos del backend",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "process.env.DATABASE_URL",
      "nodes": [
        "code|stable",
        "env|deployment",
        "secret|external",
        "config|validated"
      ],
      "outcome": "configuración válida",
      "caption": "Las variables deben validarse al iniciar para fallar pronto."
    }
  },
  {
    "title": "Dependencias y paquetes",
    "description": "Gestiona librerías, versiones, lockfiles y superficie de suministro.",
    "section": "Fundamentos del backend",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "package-lock.json",
      "nodes": [
        "app|root",
        "direct|dependencies",
        "transitive|nested",
        "audit|risk"
      ],
      "outcome": "build reproducible",
      "caption": "Actualizar dependencias requiere revisar compatibilidad y seguridad."
    }
  },
  {
    "title": "Ciclo de vida del servidor",
    "description": "Incluye arranque, readiness, tráfico, señales y apagado ordenado.",
    "section": "Fundamentos del backend",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "boot → ready → serve → drain → stop",
      "nodes": [
        "boot|load config",
        "ready|health",
        "serve|requests",
        "drain|finish",
        "stop|exit"
      ],
      "outcome": "apagado limpio",
      "caption": "Cerrar conexiones y jobs evita datos incompletos."
    }
  },
  {
    "title": "Servidor HTTP",
    "description": "Convierte bytes de una conexión en mensajes de solicitud y respuesta.",
    "section": "HTTP, rutas y middleware",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "createServer((req,res)=>{})",
      "nodes": [
        "socket|bytes",
        "parser|headers",
        "handler|logic",
        "response|bytes"
      ],
      "outcome": "mensaje procesado",
      "caption": "El módulo HTTP es de bajo nivel; frameworks añaden estructura."
    }
  },
  {
    "title": "Request",
    "description": "Contiene método, URL, headers, cuerpo y contexto de transporte.",
    "section": "HTTP, rutas y middleware",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "req.method + req.url",
      "nodes": [
        "method|POST",
        "path|/orders",
        "headers|metadata",
        "body|payload"
      ],
      "outcome": "entrada completa",
      "caption": "No confíes en ninguna parte de la solicitud sin validarla."
    }
  },
  {
    "title": "Response",
    "description": "Define status, headers y cuerpo que forman el contrato de salida.",
    "section": "HTTP, rutas y middleware",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "res.status(201).json(order)",
      "nodes": [
        "status|201",
        "headers|Location",
        "body|JSON",
        "end|complete"
      ],
      "outcome": "respuesta cerrada",
      "caption": "Una respuesta solo puede enviarse una vez."
    }
  },
  {
    "title": "Routing",
    "description": "Relaciona método y patrón de URL con un handler.",
    "section": "HTTP, rutas y middleware",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "router.get('/users/:id', handler)",
      "nodes": [
        "GET|method",
        "/users/:id|pattern",
        "params|id",
        "handler|selected"
      ],
      "outcome": "handler encontrado",
      "caption": "Rutas más específicas deben evitar colisiones ambiguas."
    }
  },
  {
    "title": "Parámetros de ruta",
    "description": "Extrae identidad del recurso desde segmentos de la URL.",
    "section": "HTTP, rutas y middleware",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "/orders/:orderId",
      "nodes": [
        "orders|collection",
        "42|orderId",
        "parser|params",
        "handler|input"
      ],
      "outcome": "id disponible",
      "caption": "El valor sigue siendo texto hasta validarlo o transformarlo."
    }
  },
  {
    "title": "Query params",
    "description": "Representan filtros, orden, búsqueda y paginación opcionales.",
    "section": "HTTP, rutas y middleware",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "?status=open&limit=20",
      "nodes": [
        "status|open",
        "limit|20",
        "sort|createdAt",
        "parser|query"
      ],
      "outcome": "opciones interpretadas",
      "caption": "Los límites deben tener defaults y máximos."
    }
  },
  {
    "title": "Middleware",
    "description": "Ejecuta una cadena de funciones antes o después del handler.",
    "section": "HTTP, rutas y middleware",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "req → middleware → route",
      "nodes": [
        "request|start",
        "logger|observe",
        "auth|check",
        "route|handle"
      ],
      "outcome": "cadena completada",
      "caption": "Cada middleware debe continuar, responder o propagar un error."
    }
  },
  {
    "title": "Orden del middleware",
    "description": "Determina qué funciones ven la solicitud y en qué secuencia.",
    "section": "HTTP, rutas y middleware",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "app.use(auth); app.use(routes)",
      "nodes": [
        "requestId|first",
        "body parser|before routes",
        "auth|protected",
        "error handler|last"
      ],
      "outcome": "orden correcto",
      "caption": "Un middleware bien escrito en el lugar equivocado puede fallar."
    }
  },
  {
    "title": "Controladores",
    "description": "Traducen HTTP a comandos o consultas del dominio.",
    "section": "HTTP, rutas y middleware",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "controller.create(req)",
      "nodes": [
        "HTTP|transport",
        "DTO|validated",
        "service|call",
        "response|map"
      ],
      "outcome": "frontera delgada",
      "caption": "Un controlador no debería contener toda la lógica de negocio."
    }
  },
  {
    "title": "Serialización",
    "description": "Transforma objetos internos en representaciones seguras para el cliente.",
    "section": "HTTP, rutas y middleware",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "serialize(order)",
      "nodes": [
        "entity|internal",
        "mapper|shape",
        "JSON|public",
        "secret|excluded"
      ],
      "outcome": "contrato público",
      "caption": "No expongas entidades de persistencia directamente."
    }
  },
  {
    "title": "CORS",
    "description": "Controla qué orígenes de navegador pueden leer respuestas mediante headers.",
    "section": "HTTP, rutas y middleware",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "Access-Control-Allow-Origin",
      "nodes": [
        "origin|browser",
        "preflight|OPTIONS",
        "policy|check",
        "response|headers"
      ],
      "outcome": "origen permitido",
      "caption": "CORS es una política del navegador, no autenticación."
    }
  },
  {
    "title": "DTOs y schemas",
    "description": "Describen la forma esperada de entrada y salida.",
    "section": "Validación, errores y contratos",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "OrderInput schema",
      "nodes": [
        "raw body|unknown",
        "schema|shape",
        "DTO|typed",
        "service|safe"
      ],
      "outcome": "entrada modelada",
      "caption": "Un tipo de TypeScript no valida datos de red en runtime."
    }
  },
  {
    "title": "Validación de entrada",
    "description": "Rechaza datos incompletos, mal formados o fuera de rango antes del dominio.",
    "section": "Validación, errores y contratos",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "schema.parse(req.body)",
      "nodes": [
        "unknown|body",
        "rules|required",
        "coerce|optional",
        "valid|DTO"
      ],
      "outcome": "dato aceptado",
      "caption": "Los mensajes deben ser útiles sin revelar internals."
    }
  },
  {
    "title": "Transformación y coerción",
    "description": "Convierte strings de HTTP a números, fechas o enums de forma explícita.",
    "section": "Validación, errores y contratos",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "Number(query.limit)",
      "nodes": [
        "\"20\"|string",
        "parser|number",
        "20|validated",
        "NaN|reject"
      ],
      "outcome": "tipo correcto",
      "caption": "La coerción silenciosa puede esconder entradas inválidas."
    }
  },
  {
    "title": "Errores de dominio",
    "description": "Representan reglas incumplidas sin depender de HTTP.",
    "section": "Validación, errores y contratos",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "throw new InsufficientStock()",
      "nodes": [
        "domain|rule",
        "error|semantic",
        "controller|maps",
        "HTTP|409"
      ],
      "outcome": "fallo significativo",
      "caption": "Separar dominio y transporte permite reutilizar la lógica."
    }
  },
  {
    "title": "Manejo centralizado de errores",
    "description": "Convierte excepciones conocidas en respuestas consistentes y registra las desconocidas.",
    "section": "Validación, errores y contratos",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "error middleware",
      "nodes": [
        "handler|throws",
        "mapper|classify",
        "logger|record",
        "response|problem"
      ],
      "outcome": "error uniforme",
      "caption": "Un solo punto evita formatos distintos por endpoint."
    }
  },
  {
    "title": "Problem Details",
    "description": "Devuelve errores estructurados con tipo, título, status y detalles.",
    "section": "Validación, errores y contratos",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "application/problem+json",
      "nodes": [
        "type|URI",
        "title|summary",
        "status|422",
        "errors|fields"
      ],
      "outcome": "error legible",
      "caption": "El contrato de error también debe versionarse y documentarse."
    }
  },
  {
    "title": "Códigos de estado",
    "description": "Comunican la categoría del resultado sin depender del cuerpo.",
    "section": "Validación, errores y contratos",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "200 · 201 · 400 · 404 · 409 · 500",
      "nodes": [
        "2xx|success",
        "4xx|client",
        "5xx|server",
        "status|signal"
      ],
      "outcome": "semántica visible",
      "caption": "Elegir un código preciso mejora clientes, métricas y cachés."
    }
  },
  {
    "title": "Content negotiation",
    "description": "Selecciona representación según Accept y Content-Type.",
    "section": "Validación, errores y contratos",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Accept: application/json",
      "nodes": [
        "client|accept",
        "server|supports",
        "negotiation|match",
        "response|content-type"
      ],
      "outcome": "formato acordado",
      "caption": "415 y 406 expresan formatos incompatibles."
    }
  },
  {
    "title": "Versionado de contratos",
    "description": "Permite evolucionar APIs sin romper consumidores existentes.",
    "section": "Validación, errores y contratos",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "/v1/orders → /v2/orders",
      "nodes": [
        "v1|stable",
        "v2|new",
        "deprecation|notice",
        "migration|client"
      ],
      "outcome": "evolución controlada",
      "caption": "Versionar tarde obliga a mantener comportamientos accidentales."
    }
  },
  {
    "title": "OpenAPI",
    "description": "Describe rutas, schemas, seguridad y respuestas en un contrato legible por herramientas.",
    "section": "Validación, errores y contratos",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "openapi.yaml",
      "nodes": [
        "paths|routes",
        "schemas|models",
        "security|auth",
        "clients|generate"
      ],
      "outcome": "contrato compartido",
      "caption": "La especificación debe coincidir con la implementación real."
    }
  },
  {
    "title": "Capas de aplicación",
    "description": "Separa transporte, casos de uso, dominio e infraestructura.",
    "section": "Arquitectura y dominio",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "controller → service → repository",
      "nodes": [
        "transport|HTTP",
        "application|use case",
        "domain|rules",
        "infra|DB"
      ],
      "outcome": "responsabilidades aisladas",
      "caption": "Las dependencias deben apuntar hacia reglas estables."
    }
  },
  {
    "title": "Servicios de aplicación",
    "description": "Orquestan un caso de uso y coordinan puertos externos.",
    "section": "Arquitectura y dominio",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "placeOrder(command)",
      "nodes": [
        "command|input",
        "domain|rules",
        "repository|save",
        "events|publish"
      ],
      "outcome": "caso completado",
      "caption": "Un servicio de aplicación no debería conocer detalles HTTP."
    }
  },
  {
    "title": "Entidades y value objects",
    "description": "Modelan identidad, invariantes y conceptos del dominio.",
    "section": "Arquitectura y dominio",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "Order + Money",
      "nodes": [
        "entity|identity",
        "value object|value",
        "invariant|rule",
        "behavior|method"
      ],
      "outcome": "modelo expresivo",
      "caption": "No todo objeto del dominio es una fila de base de datos."
    }
  },
  {
    "title": "Invariantes",
    "description": "Condiciones que siempre deben cumplirse antes y después de una operación.",
    "section": "Arquitectura y dominio",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "quantity > 0",
      "nodes": [
        "command|request",
        "invariant|check",
        "valid|transition",
        "invalid|error"
      ],
      "outcome": "estado válido",
      "caption": "La UI puede ayudar, pero el backend debe hacer cumplir la regla."
    }
  },
  {
    "title": "Repositorios",
    "description": "Ocultan detalles de persistencia detrás de una interfaz orientada al dominio.",
    "section": "Arquitectura y dominio",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "orders.save(order)",
      "nodes": [
        "service|use case",
        "repository|port",
        "ORM/SQL|adapter",
        "database|storage"
      ],
      "outcome": "persistencia desacoplada",
      "caption": "Un repositorio no debe convertirse en un servicio genérico de consultas arbitrarias."
    }
  },
  {
    "title": "Inyección de dependencias",
    "description": "Entrega implementaciones desde fuera para reducir acoplamiento y facilitar pruebas.",
    "section": "Arquitectura y dominio",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "constructor(repo, clock)",
      "nodes": [
        "service|consumer",
        "repo|dependency",
        "clock|dependency",
        "container|wire"
      ],
      "outcome": "dependencias explícitas",
      "caption": "La DI no elimina dependencias; las vuelve visibles y reemplazables."
    }
  },
  {
    "title": "Módulos",
    "description": "Agrupan capacidades cohesivas y controlan qué se exporta.",
    "section": "Arquitectura y dominio",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "OrdersModule",
      "nodes": [
        "controllers|entry",
        "providers|logic",
        "exports|public",
        "imports|dependencies"
      ],
      "outcome": "módulo cohesivo",
      "caption": "Módulos grandes recrean un monolito desordenado dentro del framework."
    }
  },
  {
    "title": "Arquitectura hexagonal",
    "description": "Conecta el dominio con adaptadores mediante puertos.",
    "section": "Arquitectura y dominio",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "port ← domain → port",
      "nodes": [
        "HTTP adapter|input",
        "domain|core",
        "DB adapter|output",
        "queue adapter|output"
      ],
      "outcome": "núcleo independiente",
      "caption": "Cambiar infraestructura no debería reescribir reglas centrales."
    }
  },
  {
    "title": "Monolito modular",
    "description": "Despliega una unidad con límites internos explícitos.",
    "section": "Arquitectura y dominio",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "users | orders | billing",
      "nodes": [
        "one process|deploy",
        "modules|boundaries",
        "transactions|simple",
        "scale|whole"
      ],
      "outcome": "unidad organizada",
      "caption": "Suele ser más simple que microservicios al inicio."
    }
  },
  {
    "title": "Microservicios",
    "description": "Divide capacidades desplegables con datos y fallos independientes.",
    "section": "Arquitectura y dominio",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "orders → payments → shipping",
      "nodes": [
        "service A|owner",
        "service B|owner",
        "network|boundary",
        "events|sync"
      ],
      "outcome": "autonomía con costo",
      "caption": "La distribución añade latencia, observabilidad y consistencia eventual."
    }
  },
  {
    "title": "BFF y API Gateway",
    "description": "Adapta múltiples servicios a las necesidades de un cliente y centraliza políticas de borde.",
    "section": "Arquitectura y dominio",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "mobile → BFF → services",
      "nodes": [
        "mobile|client",
        "BFF|shape",
        "gateway|policy",
        "services|sources"
      ],
      "outcome": "contrato orientado al cliente",
      "caption": "Evita convertir el gateway en el lugar de toda la lógica."
    }
  },
  {
    "title": "Hash de contraseñas",
    "description": "Almacena verificadores lentos y salados, nunca contraseñas reversibles.",
    "section": "Autenticación, autorización y seguridad",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "hash(password, salt)",
      "nodes": [
        "password|input",
        "salt|unique",
        "KDF|slow",
        "hash|stored"
      ],
      "outcome": "secreto no recuperable",
      "caption": "El costo debe poder actualizarse con el tiempo."
    }
  },
  {
    "title": "Sesiones",
    "description": "Mantienen identidad del usuario mediante un id opaco asociado a estado del servidor.",
    "section": "Autenticación, autorización y seguridad",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "cookie sid → session store",
      "nodes": [
        "cookie|sid",
        "store|session",
        "user|identity",
        "expiry|rotate"
      ],
      "outcome": "sesión localizada",
      "caption": "La cookie necesita flags Secure, HttpOnly y SameSite adecuados."
    }
  },
  {
    "title": "Tokens",
    "description": "Transportan claims firmados y requieren expiración, validación y rotación.",
    "section": "Autenticación, autorización y seguridad",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "verify(accessToken)",
      "nodes": [
        "header|alg",
        "claims|sub+exp",
        "signature|verify",
        "policy|accept"
      ],
      "outcome": "identidad verificada",
      "caption": "Firmado no significa cifrado; el payload puede ser visible."
    }
  },
  {
    "title": "Refresh tokens",
    "description": "Renuevan credenciales cortas y deben rotarse o revocarse de forma segura.",
    "section": "Autenticación, autorización y seguridad",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "refresh → access",
      "nodes": [
        "access|short",
        "refresh|longer",
        "rotation|new",
        "reuse|detect"
      ],
      "outcome": "sesión renovada",
      "caption": "Un refresh token robado tiene alto impacto."
    }
  },
  {
    "title": "Autenticación",
    "description": "Comprueba quién realiza la solicitud.",
    "section": "Autenticación, autorización y seguridad",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "authenticate(req)",
      "nodes": [
        "credentials|input",
        "verifier|check",
        "principal|user",
        "request|context"
      ],
      "outcome": "principal conocido",
      "caption": "Autenticación no decide qué puede hacer el usuario."
    }
  },
  {
    "title": "Autorización",
    "description": "Evalúa permisos sobre una acción y un recurso concreto.",
    "section": "Autenticación, autorización y seguridad",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "can(user, action, resource)",
      "nodes": [
        "principal|who",
        "action|what",
        "resource|which",
        "policy|decision"
      ],
      "outcome": "acceso decidido",
      "caption": "Verificar solo el rol sin el recurso causa fallos de autorización por objeto."
    }
  },
  {
    "title": "Roles, permisos y políticas",
    "description": "Modelan RBAC, ABAC o reglas específicas del dominio.",
    "section": "Autenticación, autorización y seguridad",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "role + attributes + resource",
      "nodes": [
        "role|editor",
        "permission|orders:update",
        "attribute|team",
        "policy|evaluate"
      ],
      "outcome": "regla aplicada",
      "caption": "La política debe estar centralizada y probada."
    }
  },
  {
    "title": "Validación de propiedad",
    "description": "Asegura que el usuario puede acceder a ese objeto específico.",
    "section": "Autenticación, autorización y seguridad",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "order.userId === principal.id",
      "nodes": [
        "principal|user_9",
        "order|42",
        "owner|user_9",
        "decision|allow"
      ],
      "outcome": "BOLA evitado",
      "caption": "Un id válido no implica permiso sobre el recurso."
    }
  },
  {
    "title": "Protección contra inyección",
    "description": "Mantiene datos separados de código mediante parámetros y APIs seguras.",
    "section": "Autenticación, autorización y seguridad",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "db.query(sql, [userInput])",
      "nodes": [
        "query|template",
        "input|data",
        "driver|bind",
        "database|execute"
      ],
      "outcome": "consulta segura",
      "caption": "Escapar manualmente es más frágil que parametrizar."
    }
  },
  {
    "title": "Headers de seguridad",
    "description": "Configura políticas del navegador como CSP, HSTS y protección de framing.",
    "section": "Autenticación, autorización y seguridad",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "helmet()",
      "nodes": [
        "CSP|sources",
        "HSTS|HTTPS",
        "frame|deny",
        "nosniff|types"
      ],
      "outcome": "navegador endurecido",
      "caption": "Los headers complementan, no reemplazan, controles del servidor."
    }
  },
  {
    "title": "Rate limiting",
    "description": "Limita consumo por identidad, ruta o costo para proteger capacidad.",
    "section": "Autenticación, autorización y seguridad",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "limit(key, window)",
      "nodes": [
        "request|arrives",
        "key|user/IP",
        "bucket|tokens",
        "429|reject"
      ],
      "outcome": "capacidad protegida",
      "caption": "Límites globales pueden castigar usuarios detrás de una misma IP."
    }
  },
  {
    "title": "Gestión de secretos",
    "description": "Mantiene credenciales fuera del repositorio y rota accesos comprometidos.",
    "section": "Autenticación, autorización y seguridad",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "secret manager → runtime",
      "nodes": [
        "vault|source",
        "identity|authorize",
        "runtime|inject",
        "rotation|replace"
      ],
      "outcome": "secreto controlado",
      "caption": "Variables de entorno son transporte, no una bóveda por sí mismas."
    }
  },
  {
    "title": "Conexiones a base de datos",
    "description": "Reutiliza un pool limitado en lugar de abrir una conexión por solicitud.",
    "section": "Persistencia, caché y consistencia",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "pool.acquire()",
      "nodes": [
        "requests|many",
        "pool|limited",
        "connection|lease",
        "release|return"
      ],
      "outcome": "capacidad compartida",
      "caption": "Un pool demasiado grande puede saturar la base de datos."
    }
  },
  {
    "title": "Transacciones",
    "description": "Agrupan operaciones que deben confirmar o revertir juntas.",
    "section": "Persistencia, caché y consistencia",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "BEGIN → COMMIT / ROLLBACK",
      "nodes": [
        "begin|start",
        "write A|change",
        "write B|change",
        "commit|publish"
      ],
      "outcome": "todo o nada",
      "caption": "La frontera transaccional debe seguir una regla de negocio."
    }
  },
  {
    "title": "ORM y query builder",
    "description": "Traducen modelos o expresiones a SQL con distintos niveles de abstracción.",
    "section": "Persistencia, caché y consistencia",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "repository → SQL",
      "nodes": [
        "entity|model",
        "ORM|mapping",
        "SQL|query",
        "rows|result"
      ],
      "outcome": "acceso productivo",
      "caption": "La abstracción no elimina la necesidad de entender SQL e índices."
    }
  },
  {
    "title": "N+1 queries",
    "description": "Detecta múltiples consultas repetidas causadas por cargar relaciones una a una.",
    "section": "Persistencia, caché y consistencia",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "1 query + N queries",
      "nodes": [
        "orders|1 query",
        "items|N queries",
        "latency|grows",
        "join/batch|fix"
      ],
      "outcome": "consultas agrupadas",
      "caption": "El problema aparece en logs y perfiles, no siempre en el código."
    }
  },
  {
    "title": "Caché",
    "description": "Guarda resultados costosos con una política de clave, expiración e invalidación.",
    "section": "Persistencia, caché y consistencia",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "cache.get(key) ?? load()",
      "nodes": [
        "request|key",
        "cache|lookup",
        "miss|load",
        "hit|return"
      ],
      "outcome": "latencia menor",
      "caption": "Una caché añade coherencia eventual y nuevos modos de fallo."
    }
  },
  {
    "title": "Cache-aside",
    "description": "La aplicación consulta caché, carga origen en miss y escribe la copia.",
    "section": "Persistencia, caché y consistencia",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "cache-aside",
      "nodes": [
        "GET|request",
        "cache|miss",
        "database|load",
        "cache|set"
      ],
      "outcome": "copia poblada",
      "caption": "La invalidación sigue siendo responsabilidad de la aplicación."
    }
  },
  {
    "title": "Write-through y write-behind",
    "description": "Actualizan caché y origen de forma síncrona o diferida.",
    "section": "Persistencia, caché y consistencia",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "write-through vs write-behind",
      "nodes": [
        "through|DB now",
        "behind|queue",
        "durability|tradeoff",
        "latency|tradeoff"
      ],
      "outcome": "política elegida",
      "caption": "Write-behind necesita recuperación ante pérdida del worker."
    }
  },
  {
    "title": "Bloqueos distribuidos",
    "description": "Coordinan acceso exclusivo entre procesos con expiración y ownership.",
    "section": "Persistencia, caché y consistencia",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "lock(resource, token, ttl)",
      "nodes": [
        "client A|acquire",
        "token|owner",
        "client B|wait",
        "ttl|expire"
      ],
      "outcome": "sección protegida",
      "caption": "Un lock sin fencing puede permitir escrituras tardías."
    }
  },
  {
    "title": "Consistencia eventual",
    "description": "Acepta retraso entre escrituras y lecturas de proyecciones o réplicas.",
    "section": "Persistencia, caché y consistencia",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "v1 → event → v2",
      "nodes": [
        "write|source",
        "event|transport",
        "projection|lag",
        "read|eventual"
      ],
      "outcome": "convergencia",
      "caption": "La UI debe comunicar estados pendientes y reconciliación."
    }
  },
  {
    "title": "Idempotencia",
    "description": "Hace seguro repetir comandos cuando la red no confirma el primer resultado.",
    "section": "Persistencia, caché y consistencia",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Idempotency-Key",
      "nodes": [
        "request|key",
        "store|lookup",
        "first|execute",
        "retry|replay"
      ],
      "outcome": "sin duplicados",
      "caption": "La clave debe asociarse al usuario, operación y payload."
    }
  },
  {
    "title": "Jobs en background",
    "description": "Mueve trabajo lento fuera de la respuesta síncrona.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "enqueue(job)",
      "nodes": [
        "request|accept",
        "queue|persist",
        "worker|process",
        "status|update"
      ],
      "outcome": "respuesta rápida",
      "caption": "Aceptar un job requiere un recurso o estado consultable."
    }
  },
  {
    "title": "Colas",
    "description": "Desacoplan productores y consumidores y conservan mensajes pendientes.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "producer → queue → worker",
      "nodes": [
        "producer|send",
        "queue|store",
        "worker|receive",
        "ack|remove"
      ],
      "outcome": "trabajo desacoplado",
      "caption": "La cola cambia el problema de llamada a entrega."
    }
  },
  {
    "title": "Acknowledgement",
    "description": "Confirma procesamiento para que el broker elimine o reentregue el mensaje.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "receive → process → ack",
      "nodes": [
        "message|delivered",
        "worker|process",
        "ack|success",
        "timeout|redeliver"
      ],
      "outcome": "entrega confirmada",
      "caption": "Ack antes de persistir puede perder trabajo."
    }
  },
  {
    "title": "At-least-once delivery",
    "description": "Permite duplicados para evitar pérdida y exige consumidores idempotentes.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "message may repeat",
      "nodes": [
        "delivery 1|timeout",
        "redelivery|same id",
        "consumer|dedupe",
        "result|once"
      ],
      "outcome": "duplicado tolerado",
      "caption": "Exactamente una vez suele requerir límites y definiciones muy precisas."
    }
  },
  {
    "title": "Dead-letter queue",
    "description": "Aparta mensajes que exceden reintentos para análisis o corrección.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "retry → DLQ",
      "nodes": [
        "job|fails",
        "backoff|retry",
        "max attempts|reached",
        "DLQ|inspect"
      ],
      "outcome": "fallo visible",
      "caption": "Una DLQ sin monitoreo es solo un cementerio silencioso."
    }
  },
  {
    "title": "Eventos de integración",
    "description": "Comunican hechos entre módulos o servicios sin exponer su modelo interno.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "OrderPlaced v1",
      "nodes": [
        "producer|orders",
        "event|public",
        "broker|transport",
        "consumer|shipping"
      ],
      "outcome": "hecho publicado",
      "caption": "Los eventos deben ser estables, versionados y observables."
    }
  },
  {
    "title": "Outbox pattern",
    "description": "Guarda cambio de negocio y evento en la misma transacción antes de publicar.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "orders + outbox",
      "nodes": [
        "transaction|begin",
        "order|insert",
        "outbox|insert",
        "publisher|send"
      ],
      "outcome": "sin evento perdido",
      "caption": "Evita confirmar datos sin registrar el evento asociado."
    }
  },
  {
    "title": "Webhooks",
    "description": "Notifican a sistemas externos mediante HTTP firmado y reintentos.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "POST partner/webhook",
      "nodes": [
        "event|created",
        "sign|HMAC",
        "delivery|HTTP",
        "retry|backoff"
      ],
      "outcome": "integración notificada",
      "caption": "El receptor debe deduplicar y verificar firma y timestamp."
    }
  },
  {
    "title": "Cron y scheduling",
    "description": "Programa tareas periódicas con timezone, solapamiento y ownership definidos.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "0 2 * * *",
      "nodes": [
        "schedule|02:00",
        "leader|owner",
        "job|run",
        "lock|no overlap"
      ],
      "outcome": "tarea periódica",
      "caption": "En múltiples instancias, cada proceso no debe ejecutar el mismo job accidentalmente."
    }
  },
  {
    "title": "Streaming y backpressure",
    "description": "Procesa datos por partes y regula productores cuando consumidores van más lento.",
    "section": "Procesamiento asíncrono y eventos",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "readable.pipe(writable)",
      "nodes": [
        "source|chunks",
        "buffer|capacity",
        "consumer|drain",
        "pause|backpressure"
      ],
      "outcome": "memoria estable",
      "caption": "Ignorar backpressure convierte streams en acumulación descontrolada."
    }
  },
  {
    "title": "Timeouts",
    "description": "Ponen un límite a cada dependencia para no esperar indefinidamente.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "withTimeout(call, 2_000)",
      "nodes": [
        "request|start",
        "dependency|pending",
        "deadline|hit",
        "abort|fail"
      ],
      "outcome": "fallo acotado",
      "caption": "Cada salto necesita presupuesto dentro del timeout total."
    }
  },
  {
    "title": "Retries con backoff",
    "description": "Reintentan fallos transitorios espaciando intentos y agregando jitter.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "100ms → 300ms → 900ms",
      "nodes": [
        "attempt 1|fail",
        "backoff|wait",
        "attempt 2|fail",
        "attempt 3|ok"
      ],
      "outcome": "recuperación gradual",
      "caption": "Reintentar errores permanentes solo aumenta carga."
    }
  },
  {
    "title": "Circuit breaker",
    "description": "Deja de llamar temporalmente a una dependencia que falla repetidamente.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "closed → open → half-open",
      "nodes": [
        "closed|calls",
        "failures|threshold",
        "open|reject fast",
        "half-open|probe"
      ],
      "outcome": "falla aislada",
      "caption": "El breaker necesita métricas y una alternativa útil."
    }
  },
  {
    "title": "Bulkhead",
    "description": "Aísla pools o colas para que una dependencia lenta no consuma toda la capacidad.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "pool A | pool B",
      "nodes": [
        "payments|pool 5",
        "email|pool 2",
        "slow email|contained",
        "payments|healthy"
      ],
      "outcome": "fallo contenido",
      "caption": "Compartir todos los recursos propaga saturación."
    }
  },
  {
    "title": "Health, liveness y readiness",
    "description": "Distingue proceso vivo de instancia lista para recibir tráfico.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "/live · /ready",
      "nodes": [
        "live|process",
        "ready|dependencies",
        "startup|warming",
        "orchestrator|route"
      ],
      "outcome": "tráfico seguro",
      "caption": "Readiness no debe ejecutar pruebas destructivas o excesivamente costosas."
    }
  },
  {
    "title": "Logging estructurado",
    "description": "Registra eventos como datos con contexto estable.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "logger.info({ requestId, userId })",
      "nodes": [
        "timestamp|when",
        "level|severity",
        "requestId|trace",
        "message|event"
      ],
      "outcome": "log consultable",
      "caption": "Texto libre dificulta correlación y alertas."
    }
  },
  {
    "title": "Correlation ID",
    "description": "Propaga un identificador para unir logs de una solicitud entre capas y servicios.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "x-request-id",
      "nodes": [
        "gateway|create",
        "service A|propagate",
        "DB log|attach",
        "response|return"
      ],
      "outcome": "traza conectada",
      "caption": "El id debe cruzar jobs y mensajes cuando el trabajo continúa asíncronamente."
    }
  },
  {
    "title": "Métricas",
    "description": "Miden volumen, errores, latencia y saturación.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "rate · errors · duration",
      "nodes": [
        "rate|requests",
        "errors|failures",
        "duration|latency",
        "saturation|capacity"
      ],
      "outcome": "salud cuantificada",
      "caption": "Los promedios esconden colas; usa percentiles."
    }
  },
  {
    "title": "Tracing distribuido",
    "description": "Representa una solicitud como spans relacionados entre servicios.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "trace → spans",
      "nodes": [
        "gateway|root",
        "orders|child",
        "database|child",
        "queue|async"
      ],
      "outcome": "ruta temporal",
      "caption": "Un trace explica dónde se gastó el tiempo."
    }
  },
  {
    "title": "Profiling",
    "description": "Identifica CPU, memoria, bloqueos y hot paths bajo carga.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "cpu profile + heap snapshot",
      "nodes": [
        "CPU|samples",
        "heap|retainers",
        "event loop|lag",
        "flamegraph|hot"
      ],
      "outcome": "cuello localizado",
      "caption": "Optimizar sin perfil suele mover complejidad al lugar equivocado."
    }
  },
  {
    "title": "Load shedding",
    "description": "Rechaza trabajo temprano cuando la capacidad está agotada.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "if overloaded → 503",
      "nodes": [
        "queue|full",
        "priority|classify",
        "reject|fast",
        "recover|capacity"
      ],
      "outcome": "sistema estable",
      "caption": "Aceptar todo puede hacer que ninguna solicitud termine."
    }
  },
  {
    "title": "SLO y error budget",
    "description": "Define un objetivo medible de confiabilidad y cuánto fallo tolera el producto.",
    "section": "Confiabilidad, observabilidad y rendimiento",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "99.9% availability",
      "nodes": [
        "SLI|measure",
        "SLO|target",
        "budget|allowed",
        "release|decision"
      ],
      "outcome": "riesgo gobernado",
      "caption": "El presupuesto conecta ingeniería de confiabilidad con velocidad de cambio."
    }
  },
  {
    "title": "Pruebas unitarias",
    "description": "Aíslan funciones, servicios y reglas de dominio.",
    "section": "Pruebas, despliegue y escalado",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "test(service)",
      "nodes": [
        "arrange|inputs",
        "act|call",
        "assert|result",
        "fake|dependency"
      ],
      "outcome": "regla verificada",
      "caption": "Un mock excesivo puede probar una implementación imaginaria."
    }
  },
  {
    "title": "Pruebas de integración",
    "description": "Verifican adaptadores reales como base de datos, router o broker.",
    "section": "Pruebas, despliegue y escalado",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "test app + database",
      "nodes": [
        "app|real wiring",
        "database|test",
        "request|execute",
        "assert|effects"
      ],
      "outcome": "fronteras verificadas",
      "caption": "Contenedores efímeros permiten dependencias cercanas a producción."
    }
  },
  {
    "title": "Pruebas end-to-end",
    "description": "Ejercitan el sistema desplegado desde la interfaz pública.",
    "section": "Pruebas, despliegue y escalado",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "client → API → DB",
      "nodes": [
        "request|public",
        "auth|real",
        "service|real",
        "database|real"
      ],
      "outcome": "flujo validado",
      "caption": "Deben ser pocas, valiosas y diagnósticas."
    }
  },
  {
    "title": "Contract testing",
    "description": "Comprueba compatibilidad entre consumidores y proveedores.",
    "section": "Pruebas, despliegue y escalado",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "consumer contract ↔ provider",
      "nodes": [
        "consumer|expects",
        "contract|examples",
        "provider|verify",
        "CI|gate"
      ],
      "outcome": "cambio compatible",
      "caption": "Reduce sorpresas sin reemplazar integración real."
    }
  },
  {
    "title": "Build reproducible",
    "description": "Produce el mismo artefacto desde código y lockfile controlados.",
    "section": "Pruebas, despliegue y escalado",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "source → artifact",
      "nodes": [
        "source|commit",
        "dependencies|locked",
        "build|deterministic",
        "image|digest"
      ],
      "outcome": "artefacto identificable",
      "caption": "El despliegue debe promover el mismo artefacto, no recompilarlo."
    }
  },
  {
    "title": "Contenedores",
    "description": "Empaquetan proceso, runtime y dependencias con límites explícitos.",
    "section": "Pruebas, despliegue y escalado",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "Docker image",
      "nodes": [
        "image|immutable",
        "container|runtime",
        "ports|expose",
        "resources|limit"
      ],
      "outcome": "entorno consistente",
      "caption": "Un contenedor no reemplaza observabilidad ni configuración segura."
    }
  },
  {
    "title": "Despliegues graduales",
    "description": "Reduce riesgo con rolling, canary o blue/green.",
    "section": "Pruebas, despliegue y escalado",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "90% stable · 10% canary",
      "nodes": [
        "old|stable",
        "new|canary",
        "metrics|compare",
        "promote|rollback"
      ],
      "outcome": "cambio controlado",
      "caption": "La estrategia necesita señales automáticas de éxito y fallo."
    }
  },
  {
    "title": "Escalado horizontal",
    "description": "Añade instancias y distribuye tráfico mediante un balanceador.",
    "section": "Pruebas, despliegue y escalado",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "load balancer → replicas",
      "nodes": [
        "client|traffic",
        "LB|route",
        "instance A|serve",
        "instance B|serve"
      ],
      "outcome": "capacidad ampliada",
      "caption": "El proceso debe ser stateless o externalizar estado compartido."
    }
  },
  {
    "title": "Graceful shutdown",
    "description": "Deja de aceptar tráfico, termina trabajo y cierra recursos antes de salir.",
    "section": "Pruebas, despliegue y escalado",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "SIGTERM → drain → close",
      "nodes": [
        "signal|SIGTERM",
        "readiness|false",
        "requests|finish",
        "connections|close"
      ],
      "outcome": "salida limpia",
      "caption": "El orquestador impone un tiempo máximo; el proceso debe respetarlo."
    }
  },
  {
    "title": "Migraciones y compatibilidad",
    "description": "Coordina cambios de código y esquema para permitir despliegues sin downtime.",
    "section": "Pruebas, despliegue y escalado",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "expand → migrate → contract",
      "nodes": [
        "add column|compatible",
        "dual write|transition",
        "backfill|data",
        "remove old|later"
      ],
      "outcome": "evolución segura",
      "caption": "Código viejo y nuevo pueden convivir durante el rollout."
    }
  }
] as const satisfies readonly StudyConcept[];
