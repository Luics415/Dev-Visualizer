export const restApiConcepts = [
  { title: "Recursos", description: "Modela entidades del dominio como representaciones accesibles mediante URLs estables.", family: "representación", layout: "standard" },
  { title: "Endpoints", description: "Combina una ruta y una operación para exponer una capacidad concreta de la API.", family: "mapa de rutas", layout: "wide" },
  { title: "Métodos HTTP", description: "GET, POST, PUT, PATCH y DELETE expresan la intención de cada solicitud.", family: "carriles semánticos", layout: "wide" },
  { title: "Parámetros y query", description: "Los parámetros identifican recursos; la query modifica búsqueda, filtros o paginación.", family: "descomposición URL", layout: "standard" },
  { title: "Headers", description: "Transportan metadatos como autenticación, formato aceptado, caché y trazabilidad.", family: "sobre de metadatos", layout: "compact" },
  { title: "Cuerpo JSON", description: "Serializa datos estructurados para enviarlos y reconstruirlos en el servidor.", family: "serialización", layout: "standard" },
  { title: "Códigos de estado", description: "Resumen el resultado HTTP antes de que el cliente interprete el cuerpo.", family: "espectro de respuesta", layout: "wide" },
  { title: "CRUD", description: "Relaciona crear, leer, actualizar y eliminar con operaciones sobre un mismo recurso.", family: "ciclo de recurso", layout: "standard" },
  { title: "Stateless", description: "Cada solicitud contiene el contexto necesario; el servidor no depende de una conversación oculta.", family: "solicitudes autónomas", layout: "standard" },
  { title: "Autenticación", description: "Un token acompaña solicitudes protegidas y el servidor verifica identidad y permisos.", family: "credencial", layout: "standard" },
  { title: "Filtros y paginación", description: "Reduce colecciones grandes mediante ventanas, criterios y orden definidos por la URL.", family: "ventana de colección", layout: "wide" },
  { title: "Caché HTTP", description: "Evita transferir de nuevo una representación cuando el cliente ya conserva una copia vigente.", family: "validación de copia", layout: "standard" },
  { title: "Idempotencia", description: "Repetir una operación idempotente produce el mismo estado final, aunque la red reintente.", family: "comparativa", layout: "standard" },
  { title: "Errores y límites", description: "Devuelve fallos estructurados y comunica cuándo el cliente debe corregir o esperar.", family: "control de tráfico", layout: "wide" },
  {
    title: "Content negotiation", description: "Accept y Content-Type permiten acordar la representación que el cliente envía y desea recibir.", family: "negociación", layout: "standard",
    scene: { variant: "compare", code: "Accept: application/json", nodes: ["cliente|acepta JSON", "servidor|puede JSON", "Content-Type|cuerpo enviado", "406 / 415|si no coincide"], outcome: "200 · application/json", caption: "El formato no se adivina: cliente y servidor lo declaran mediante headers." }
  },
  {
    title: "Versionado", description: "Permite evolucionar contratos sin romper de inmediato a clientes que todavía dependen de una versión anterior.", family: "líneas de evolución", layout: "wide",
    scene: { variant: "timeline", code: "GET /v1/orders → /v2/orders", nodes: ["v1|contrato estable", "v2 beta|campo nuevo", "migración|clientes actualizan", "v1 sunset|retiro anunciado"], outcome: "evolución compatible", caption: "Una versión tiene ciclo de vida, documentación y fechas de migración; no es solo cambiar el número de la URL." }
  },
  {
    title: "Validación de entrada", description: "Comprueba forma, tipos, restricciones y reglas antes de ejecutar lógica o escribir en la base de datos.", family: "puerta de esquema", layout: "standard",
    scene: { variant: "gate", code: "OrderInput.safeParse(body)", nodes: ["quantity: 2", "productId: jinx-01", "coupon?: ARCANE", "schema"], outcome: "datos confiables", caption: "La validación transforma entrada no confiable en una estructura segura o devuelve errores precisos." }
  },
  {
    title: "CORS", description: "El navegador aplica una política de origen y puede enviar una solicitud preflight antes de la operación real.", family: "frontera del navegador", layout: "wide",
    scene: { variant: "pipeline", code: "OPTIONS → Access-Control-Allow-Origin", nodes: ["app.example|origin", "preflight|OPTIONS", "API|reglas CORS", "request real|autorizado"], outcome: "origen permitido", caption: "CORS es una protección del navegador; no sustituye autenticación ni permisos en el servidor." }
  },
  {
    title: "Rate limiting", description: "Controla cuántas solicitudes acepta la plataforma por identidad, IP, token o ventana de tiempo.", family: "cubo de capacidad", layout: "standard",
    scene: { variant: "matrix", code: "100 requests / minute", nodes: ["✓", "✓", "✓", "429"], outcome: "Retry-After: 30", caption: "El límite protege recursos compartidos y debe comunicar cuándo y cómo reintentar." }
  },
  {
    title: "Timeouts y cancelación", description: "Evitan que cliente y servidor esperen indefinidamente cuando una dependencia tarda demasiado.", family: "reloj de petición", layout: "standard",
    scene: { variant: "timeline", code: "AbortController · timeout 5s", nodes: ["request|0 ms", "espera|2 s", "deadline|5 s", "abort|liberar recursos"], outcome: "petición cancelada", caption: "Un timeout define un presupuesto; cancelar también evita trabajo inútil en capas posteriores." }
  },
  {
    title: "Reintentos y backoff", description: "Repite fallos transitorios con espera creciente y aleatoriedad para no saturar aún más al servicio.", family: "onda de recuperación", layout: "wide",
    scene: { variant: "flow", code: "retry: 250ms → 500ms → 1s", nodes: ["503|fallo temporal", "esperar|250 ms", "503|segundo fallo", "esperar + jitter|620 ms", "200|recuperado"], outcome: "reintento controlado", caption: "No todos los errores se reintentan y las operaciones mutables necesitan idempotencia." }
  },
  {
    title: "Offset vs cursor", description: "Son estrategias de paginación con compromisos distintos de simplicidad, estabilidad y rendimiento.", family: "comparación de ventanas", layout: "wide",
    scene: { variant: "compare", code: "?page=3  vs  ?after=ord_42", nodes: ["offset|salta N filas", "cursor|continúa desde una posición", "simple|puede desplazarse", "estable|ideal para feeds"], outcome: "elige según la colección", caption: "El cursor conserva continuidad cuando la colección cambia; el offset facilita saltar a una página concreta." }
  },
  {
    title: "Orden, búsqueda y filtros", description: "Convierte una colección general en una vista reproducible mediante parámetros explícitos.", family: "refinamiento", layout: "standard",
    scene: { variant: "pipeline", code: "?q=jinx&status=active&sort=-createdAt", nodes: ["colección|240 registros", "search|jinx", "filter|active", "sort|newest", "window|20 resultados"], outcome: "consulta determinista", caption: "Los parámetros deben documentar nombres, operadores, valores permitidos y orden por defecto." }
  },
  {
    title: "Peticiones condicionales", description: "ETag y fechas permiten validar una copia o ejecutar una actualización solo si la versión aún coincide.", family: "comparador de versión", layout: "standard",
    scene: { variant: "gate", code: "If-Match: \"order-v3\"", nodes: ["cliente|v3", "servidor|v3", "PATCH|status", "compare"], outcome: "204 actualizado", caption: "If-None-Match optimiza lecturas; If-Match protege escrituras frente a cambios concurrentes." }
  },
  {
    title: "Concurrencia optimista", description: "Detecta que otra operación modificó el recurso antes de aceptar una escritura basada en datos antiguos.", family: "carreras de edición", layout: "wide",
    scene: { variant: "tree", code: "412 Precondition Failed", nodes: ["order v3|estado compartido", "cliente A|guarda v4", "cliente B|envía v3", "API|rechaza conflicto"], outcome: "recargar y reconciliar", caption: "La API no bloquea durante toda la edición; verifica la versión justo al escribir." }
  },
  {
    title: "Archivos y multipart", description: "Separa campos y binarios en partes con metadatos, límites y procesamiento especializado.", family: "paquete multipart", layout: "standard",
    scene: { variant: "stack", code: "multipart/form-data", nodes: ["description|texto", "photo.jpg|2.4 MB", "boundary|separador", "storage|objeto", "record|URL final"], outcome: "201 report created", caption: "Un upload implica tamaño máximo, tipo permitido, almacenamiento y manejo de cargas incompletas." }
  },
  {
    title: "Webhooks", description: "Permiten que un servicio notifique eventos a otro sin que el receptor consulte continuamente.", family: "evento saliente", layout: "wide",
    scene: { variant: "orbit", code: "POST /webhooks/payment.succeeded", nodes: ["payment|evento", "signature|HMAC", "receiver|200 rápido", "worker|procesa después"], outcome: "entrega verificable", caption: "Un webhook debe firmarse, tolerar duplicados, reintentarse y procesarse de forma idempotente." }
  },
  {
    title: "OpenAPI y documentación", description: "Describe rutas, parámetros, esquemas y respuestas en un contrato legible por personas y herramientas.", family: "documento ejecutable", layout: "wide",
    scene: { variant: "document", code: "openapi: 3.1.0", nodes: ["paths|/orders", "requestBody|OrderInput", "responses|201 · 422", "schemas|Order", "examples|casos reales"], outcome: "docs + cliente generado", caption: "La documentación útil se mantiene junto al contrato y muestra ejemplos, errores y autenticación." }
  },
  {
    title: "Trazabilidad", description: "Conecta logs, métricas y spans de una misma operación mediante identificadores compartidos.", family: "traza distribuida", layout: "wide",
    scene: { variant: "pipeline", code: "X-Request-ID: req_7f", nodes: ["gateway|req_7f", "auth|span 01", "orders|span 02", "database|span 03", "response|32 ms"], outcome: "una historia observable", caption: "Sin correlación, cada servicio produce piezas aisladas; con una traza se reconstruye el recorrido completo." }
  },
  {
    title: "Autorización y seguridad", description: "Decide qué acciones puede ejecutar una identidad y reduce superficie de ataque en cada capa.", family: "matriz de permisos", layout: "wide",
    scene: { variant: "matrix", code: "can(user, 'update', order)", nodes: ["owner ✓", "admin ✓", "viewer ✕", "scope"], outcome: "mínimo privilegio", caption: "Autenticarse responde quién eres; autorizar responde qué puedes hacer sobre este recurso concreto." }
  },
  {
    title: "Deprecación y ciclo de vida", description: "Comunica reemplazos y fechas de retiro para que los consumidores migren sin interrupciones sorpresivas.", family: "calendario de retiro", layout: "standard",
    scene: { variant: "timeline", code: "Deprecation: true · Sunset: ...", nodes: ["announce|documentar", "dual support|v1 + v2", "warnings|telemetría", "sunset|retirar v1"], outcome: "migración predecible", caption: "Una API pública necesita políticas de compatibilidad, soporte y comunicación, no solo código nuevo." }
  },
  {
    title: "Pruebas de contrato", description: "Verifican que proveedor y consumidores mantengan compatibles las formas y comportamientos acordados.", family: "contrato compartido", layout: "standard",
    scene: { variant: "compare", code: "consumer pact ↔ provider verification", nodes: ["cliente|espera Order", "API|produce Order", "schema|campos y tipos", "CI|bloquea ruptura"], outcome: "cambio compatible", caption: "Las pruebas de contrato detectan rupturas antes del despliegue sin depender únicamente de pruebas end-to-end." }
  },
  {
    title: "Operaciones bulk", description: "Procesan múltiples elementos con resultados parciales, límites y semántica explícita de atomicidad.", family: "lote de trabajo", layout: "wide",
    scene: { variant: "cards", code: "POST /orders/bulk", nodes: ["order 41|201", "order 42|201", "order 43|422", "summary|2 ok · 1 error"], outcome: "resultado por elemento", caption: "Un lote debe explicar si todo revierte, si acepta éxito parcial y cómo identifica cada fallo." }
  },
  {
    title: "Links y descubribilidad", description: "Una representación puede incluir enlaces a acciones y recursos relacionados disponibles desde su estado actual.", family: "grafo hipermedia", layout: "standard",
    scene: { variant: "tree", code: "_links: { self, pay, cancel }", nodes: ["order #42|pending", "self|GET /42", "pay|POST /42/pay", "cancel|POST /42/cancel"], outcome: "siguientes acciones visibles", caption: "Los enlaces reducen conocimiento hardcodeado, aunque no todas las APIs necesitan adoptar HATEOAS por completo." }
  },
] as const;
