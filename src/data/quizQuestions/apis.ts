import type { QuizQuestion } from "@/data/quizTypes";

export const apisQuestions: QuizQuestion[] = [
  {
    id: "apis-q-01",
    collectionId: "apis",
    question: "¿Qué nivel del Modelo de Madurez de Richardson (Richardson Maturity Model) introduce HATEOAS (Hypermedia As The Engine Of Application State)?",
    options: [
      "Nivel 0 (The Swamp of POX / RPC único).",
      "Nivel 1 (Recursos URI individuales).",
      "Nivel 2 (Verbos y códigos de estado HTTP estándar).",
      "Nivel 3 (Controles de hipermedios donde las respuestas incluyen enlaces dinámicos con las siguientes acciones posibles)."
    ],
    correctAnswerIndex: 3,
    explanation: "El Nivel 3 representa la visión completa de REST: el cliente navega la API descubriendo transiciones de estado a través de hiperenlaces proporcionados en la propia carga útil (como enlaces '_links' en HAL o JSON:API), desacoplando al cliente de URIs cableadas.",
    topic: "REST y Modelo de Richardson",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-02",
    collectionId: "apis",
    question: "¿Cuál es la diferencia de semántica y payload entre 'JSON Patch' (RFC 6902) y 'JSON Merge Patch' (RFC 7396) en peticiones HTTP PATCH?",
    options: [
      "JSON Patch solo funciona con bases de datos MySQL y JSON Merge Patch con PostgreSQL.",
      "JSON Patch describe una secuencia explícita de operaciones atómicas (add, remove, replace, move, copy, test); JSON Merge Patch envía un documento JSON parcial donde las claves enviadas sobrescriben y una clave con valor 'null' elimina el campo.",
      "JSON Merge Patch requiere cifrado asimétrico con claves RSA.",
      "No existe diferencia; son sinónimos del estándar ECMAScript."
    ],
    correctAnswerIndex: 1,
    explanation: "JSON Patch (RFC 6902) es una lista de comandos atómicos rigurosos ('op': 'replace', 'path': '/email', 'value': 'x@y.com'). JSON Merge Patch (RFC 7396) es un JSON directo que imita la estructura: solo envía lo que muta y usa null explícito para borrar campos.",
    topic: "HTTP PATCH y Modificación Parcial",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-03",
    collectionId: "apis",
    question: "¿Cómo soluciona 'DataLoader' el problema de las 'N+1 consultas' (N+1 query problem) en servidores GraphQL?",
    options: [
      "Duplicando la memoria asignada a la base de datos relacional.",
      "Mediante 'Batching' (agrupa todas las peticiones de claves individuales en un solo turno del event loop y las resuelve con una única consulta 'WHERE id IN (...)') y 'Memoization Caching' a nivel de solicitud individual.",
      "Convirtiendo automáticamente consultas GraphQL en procedimientos almacenados de SQL.",
      "Impidiendo que los clientes soliciten campos anidados en la misma consulta."
    ],
    correctAnswerIndex: 1,
    explanation: "Si 50 autores tienen libros y cada resolver individual consulta 'SELECT * FROM author WHERE id = ?', ocurren 1+50 consultas. DataLoader pospone la ejecución al siguiente microtick del event loop, unifica los 50 IDs y ejecuta una sola consulta por lote eficiente.",
    topic: "GraphQL y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-04",
    collectionId: "apis",
    question: "¿Por qué la paginación basada en Cursores (Cursor-based pagination) es superior a la paginación con Offset ('limit/offset') en conjuntos de datos masivos y dinámicos?",
    options: [
      "Porque los cursores comprimen las respuestas con el algoritmo Brotli.",
      "Porque 'OFFSET N' fuerza a la base de datos a escanear y descartar secuencialmente N filas (degradándose a O(N)), además de sufrir de desplazamiento de elementos ('page drift') cuando se insertan registros concurrentes; la paginación por cursor usa un índice B-Tree ordenado logrando búsquedas deterministas O(1).",
      "Porque la paginación con Offset no admite solicitudes HTTPS.",
      "Porque los cursores solo funcionan en bases de datos NoSQL basadas en grafos."
    ],
    correctAnswerIndex: 1,
    explanation: "Con OFFSET 1000000, la base de datos lee un millón de registros antes de devolver 20. Con cursor (WHERE id > last_seen_id ORDER BY id LIMIT 20), el motor salta directamente a la posición usando el índice en tiempo constante y nunca repite ni omite filas recién añadidas.",
    topic: "Diseño de APIs y Paginación",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-05",
    collectionId: "apis",
    question: "¿Qué estándar de la IETF define el formato canónico de errores enriquecidos en APIs HTTP modernas mediante 'application/problem+json'?",
    options: [
      "RFC 2616.",
      "RFC 7807 (Problem Details for HTTP APIs).",
      "RFC 1918.",
      "RFC 8259."
    ],
    correctAnswerIndex: 1,
    explanation: "RFC 7807 define un formato estructurado y predecible para respuestas de error HTTP (con campos estándar: type, title, status, detail, instance y extensiones como invalid-params), eliminando formatos improvisados e incompatibles entre diferentes servicios.",
    topic: "Manejo de Errores y Estándares HTTP",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-06",
    collectionId: "apis",
    question: "¿Qué ventaja clave ofrece gRPC sobre HTTP/2 frente a las APIs REST tradicionales sobre HTTP/1.1?",
    options: [
      "Que no requiere conexión de red TCP para funcionar.",
      "Serialización binaria compacta con Protocol Buffers, multiplexación de múltiples llamadas concurrentes en una única conexión TCP (sin head-of-line blocking en capa HTTP), compresión de cabeceras HPACK y soporte nativo para streaming bidireccional.",
      "Que las respuestas se visualizan como páginas HTML en el navegador de forma automática.",
      "Que elimina la necesidad de contar con servidores backend."
    ],
    correctAnswerIndex: 1,
    explanation: "Protobuf es fuertemente tipado y genera cargas binarias mucho más pequeñas y rápidas de deserializar que JSON. Al montarse sobre HTTP/2, gRPC reutiliza una única conexión para cientos de llamadas simultáneas y permite streaming bidireccional continuo.",
    topic: "gRPC y Protocol Buffers",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-07",
    collectionId: "apis",
    question: "¿Cómo protege el mecanismo 'If-Match' con 'ETags' contra el problema de las 'actualizaciones perdidas' (Lost Updates) en operaciones concurrentes?",
    options: [
      "Bloqueando la tabla de la base de datos durante 1 hora.",
      "Implementa control de concurrencia optimista (Optimistic Locking): el cliente envía el ETag obtenido previamente en la cabecera 'If-Match'; si otro usuario modificó el recurso mientras tanto, el ETag habrá cambiado y el servidor rechazará la mutación con '412 Precondition Failed'.",
      "Impidiendo que dos usuarios inicien sesión con la misma cuenta simultáneamente.",
      "Cifrando el cuerpo de la respuesta con claves de sesión efímeras."
    ],
    correctAnswerIndex: 1,
    explanation: "Si el usuario A y B leen el recurso a la vez, ambos tienen el ETag 'v1'. Si A guarda primero, el ETag cambia a 'v2'. Cuando B intenta guardar con 'If-Match: v1', el servidor detecta el conflicto y devuelve 412, evitando que B sobrescriba silenciosamente los cambios de A.",
    topic: "HTTP Semantics y Concurrencia",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-08",
    collectionId: "apis",
    question: "¿Por qué una petición CORS con 'Access-Control-Allow-Origin: *' falla cuando la solicitud incluye 'credentials' (cookies de sesión o cabecera Authorization)?",
    options: [
      "Porque el navegador web se bloquea automáticamente por un error de sintaxis.",
      "Porque la especificación oficial de CORS prohíbe explícitamente el uso de comodines ('*') cuando 'Access-Control-Allow-Credentials' es true, obligando al servidor a validar el origen y devolver exactamente el dominio autorizado en el encabezado de respuesta.",
      "Porque las cookies solo pueden enviarse mediante solicitudes de tipo POST.",
      "Porque los comodines requieren que la conexión sea a través de puertos no estándar."
    ],
    correctAnswerIndex: 1,
    explanation: "Por razones de seguridad estricta para evitar ataques cross-site, los navegadores rechazan responder a orígenes arbitrarios con credenciales de usuario activas. El servidor debe verificar dinámicamente si el 'Origin' es confiable y reflejarlo de forma explícita.",
    topic: "Seguridad y CORS",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-09",
    collectionId: "apis",
    question: "¿Qué diferencia existe entre los códigos de estado de redirección HTTP 301/302 y 307/308?",
    options: [
      "301 y 302 solo funcionan en servidores Apache, mientras que 307 y 308 solo en Nginx.",
      "Históricamente, los navegadores cambiaban el método de la petición a GET tras recibir 301 o 302 (convirtiendo un POST en GET); 307 (Temporary Redirect) y 308 (Permanent Redirect) prohíben explícitamente alterar el método HTTP original de la petición.",
      "307 y 308 solo se aplican a archivos descargables en formato PDF.",
      "301 y 302 no admiten redirecciones entre dominios con protocolo HTTPS."
    ],
    correctAnswerIndex: 1,
    explanation: "El estándar HTTP/1.1 clarificó el comportamiento con 307 y 308: garantizan que si un cliente envió un 'POST /orders' con cuerpo, reenvíe exactamente el mismo 'POST' con el mismo cuerpo a la nueva URI de redirección sin transformarlo en un GET.",
    topic: "Códigos de Estado HTTP",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-10",
    collectionId: "apis",
    question: "¿Cuál es la función del encabezado HTTP 'Sunset' (RFC 8594) en la gobernanza de APIs?",
    options: [
      "Indicar la hora exacta del ocaso solar en la zona horaria del servidor.",
      "Comunicar formalmente a los clientes y consumidores de la API la fecha y hora exacta en la que un endpoint deprecado dejará de estar disponible y será desactivado de forma definitiva.",
      "Configurar el modo oscuro en la interfaz web de documentación Swagger.",
      "Cerrar las conexiones WebSocket al finalizar la jornada laboral."
    ],
    correctAnswerIndex: 1,
    explanation: "El header 'Sunset: Wed, 11 Nov 2026 00:00:00 GMT' estandariza la política de retiro de endpoints. Permite a los clientes automatizados alertar a los equipos sobre la obsolescencia programada antes de que las llamadas comiencen a responder con 404 o 410 Gone.",
    topic: "Gobernanza y Ciclo de Vida de APIs",
    difficulty: "básico"
  },
  {
    id: "apis-q-11",
    collectionId: "apis",
    question: "¿Cómo mitiga el protocolo de Webhooks los ataques de repetición (Replay Attacks)?",
    options: [
      "Cambiando la dirección IP del servidor emisor en cada notificación.",
      "Incluyendo una marca de tiempo (timestamp) en la cabecera del webhook y firmando tanto el timestamp como el cuerpo del payload con HMAC; el receptor rechaza cualquier petición cuya marca de tiempo difiera en más de un margen de tolerancia (ej. 5 minutos).",
      "Exigiendo que el usuario ingrese un código CAPTCHA antes de recibir el webhook.",
      "Enviando los webhooks únicamente a través de túneles SSH autenticados."
    ],
    correctAnswerIndex: 1,
    explanation: "Si un atacante intercepta una petición de webhook válida, podría reenviarla múltiples veces para duplicar transacciones. Firmar el timestamp junto con el payload garantiza que si el atacante reenvía la petición vieja, el receptor la descarte por expiración de tiempo.",
    topic: "Webhooks y Seguridad",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-12",
    collectionId: "apis",
    question: "¿Qué es una prueba de contrato guiada por el consumidor (Consumer-Driven Contract Testing) utilizando herramientas como Pact?",
    options: [
      "Una prueba de estrés para verificar cuántas peticiones por segundo soporta un balanceador.",
      "Una metodología donde los consumidores de una API definen formalmente las expectativas y contratos de las peticiones/respuestas que realmente necesitan, los cuales se ejecutan en los pipelines de CI del proveedor para garantizar que los cambios en el backend no rompan a los clientes.",
      "Un formulario legal que firman los clientes antes de acceder a una API privada.",
      "Un análisis de seguridad para buscar contraseñas en repositorios de Git."
    ],
    correctAnswerIndex: 1,
    explanation: "Las pruebas de contrato desacoplan el testing en microservicios sin requerir entornos end-to-end complejos. Si el backend realiza un cambio que viola las expectativas registradas en los contratos de los consumidores, el pipeline de CI del backend falla antes del despliegue.",
    topic: "Pruebas de APIs y Calidad",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-13",
    collectionId: "apis",
    question: "¿Qué diferencia existe entre Server-Sent Events (SSE) y WebSockets para la comunicación en tiempo real?",
    options: [
      "WebSockets solo funciona en redes locales y SSE en Internet.",
      "SSE es un protocolo unidireccional (del servidor al cliente) basado en HTTP estándar ('text/event-stream') con reconexión automática y compatibilidad nativa con HTTP/2; WebSockets es un protocolo bidireccional full-duplex independiente sobre TCP que requiere un handshake de actualización (Upgrade).",
      "SSE requiere la instalación de plugins propietarios en el navegador web.",
      "WebSockets no permite transmitir datos en formato de texto plano."
    ],
    correctAnswerIndex: 1,
    explanation: "Para casos donde solo el servidor envía actualizaciones (notificaciones, feeds, cotizaciones, streaming de respuestas de LLM), SSE es mucho más simple, atraviesa firewalls y proxies sin problemas, reanuda conexiones automáticamente con Last-Event-ID y aprovecha la multiplexación de HTTP/2.",
    topic: "Protocolos en Tiempo Real",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-14",
    collectionId: "apis",
    question: "¿Qué regla de compatibilidad hacia atrás impone Protocol Buffers sobre los números de campo (tags) en los archivos '.proto'?",
    options: [
      "Los números de campo deben cambiarse en cada nueva versión del software.",
      "Los números de campo nunca deben modificarse ni reasignarse, ya que son el identificador binario único con el que se serializan y deserializan los datos en el cable; cambiar un número altera la interpretación de campos existentes provocando corrupción de datos.",
      "Todos los campos deben ser numerados exclusivamente con múltiplos de 10.",
      "Los números de campo solo se utilizan como comentarios de documentación."
    ],
    correctAnswerIndex: 1,
    explanation: "A diferencia de JSON donde los campos se identifican por sus nombres textuales, Protobuf usa los tag numbers numéricos en el flujo binario. Si se renombra un campo pero se conserva su tag number, la compatibilidad se mantiene intacta; si se altera el tag, se rompe el protocolo.",
    topic: "Protocol Buffers y Evolución de Esquemas",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-15",
    collectionId: "apis",
    question: "¿Cuál es la función del encabezado HTTP 'Accept' en el mecanismo de negociación de contenido (Content Negotiation)?",
    options: [
      "Aceptar los términos y condiciones de uso de la plataforma del proveedor.",
      "Permite al cliente especificar qué formatos o tipos MIME de respuesta es capaz de interpretar (ej. 'application/json, application/xml;q=0.9'), permitiendo al servidor responder con el formato óptimo o devolver un error '406 Not Acceptable' si no puede satisfacerlo.",
      "Autorizar al servidor para escribir archivos en el disco duro del cliente.",
      "Establecer la velocidad máxima de subida de paquetes de red."
    ],
    correctAnswerIndex: 1,
    explanation: "El header Accept comunica las preferencias de formato del cliente. Los factores de calidad ('q=0.9') permiten ponderar prioridades, haciendo posible que una misma URI exponga representaciones en JSON, XML, Protocol Buffers o CSV según el consumidor.",
    topic: "Negociación de Contenido HTTP",
    difficulty: "básico"
  },
  {
    id: "apis-q-16",
    collectionId: "apis",
    question: "¿Cómo mitigan los servidores GraphQL los ataques de denegación de servicio (DoS) por consultas anidadas maliciosas?",
    options: [
      "Bloqueando el tráfico proveniente de direcciones IP desconocidas.",
      "Mediante análisis de profundidad máxima (Query Depth Limiting) y cálculo de complejidad de consulta (Query Complexity Analysis), rechazando en la fase de validación del AST cualquier consulta que supere un umbral de coste antes de ejecutar los resolvers.",
      "Obligando a que las consultas se envíen en archivos PDF comprimidos.",
      "Limitando la cantidad de caracteres del archivo schema.graphql."
    ],
    correctAnswerIndex: 1,
    explanation: "Una consulta circular maliciosa (ej. autor -> libros -> autor -> libros...) puede saturar la CPU y base de datos con un payload pequeño. Los servidores GraphQL analizan el AST antes de ejecutarlo para calcular su coste y descartar consultas con excesiva profundidad o complejidad.",
    topic: "Seguridad en GraphQL",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-17",
    collectionId: "apis",
    question: "¿Qué es 'AsyncAPI' y qué rol desempeña frente a OpenAPI en la arquitectura empresarial moderna?",
    options: [
      "Un compilador de JavaScript para funciones asíncronas en Node.js.",
      "Un estándar abierto inspirado en OpenAPI diseñado específicamente para describir y documentar APIs orientadas a eventos y arquitecturas de mensajería asíncrona (Kafka, RabbitMQ, WebSockets, MQTT), estandarizando canales, operaciones de publish/subscribe y esquemas de mensajes.",
      "Una herramienta para depurar llamadas REST sincrónicas.",
      "Un protocolo de transferencia de archivos por streaming entre servidores FTP."
    ],
    correctAnswerIndex: 1,
    explanation: "Mientras OpenAPI se centra en el modelo petición-respuesta síncrono (HTTP endpoints y verbos), AsyncAPI define contratos para sistemas dirigidos por eventos: describe canales (tópicos/colas), productores, consumidores y los formatos de los mensajes que viajan por el bus.",
    topic: "Contratos de APIs y AsyncAPI",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-18",
    collectionId: "apis",
    question: "¿Qué diferencia existe entre un 'Weak ETag' (W/\"...\") y un 'Strong ETag' según la especificación HTTP?",
    options: [
      "El Weak ETag utiliza algoritmos de hash menos seguros como MD5.",
      "Un Strong ETag garantiza identidad byte por byte estricta de la representación completa (incluyendo compresión o codificación); un Weak ETag (con prefijo W/) solo garantiza equivalencia semántica de los datos de negocio aunque la representación física varíe ligeramente.",
      "Los Strong ETags solo pueden generarse en servidores con hardware criptográfico HSM.",
      "Los Weak ETags solo son válidos durante 60 segundos tras su emisión."
    ],
    correctAnswerIndex: 1,
    explanation: "Un Strong ETag asegura que el contenido es idéntico a nivel binario (vital para peticiones de rangos parciales de bytes con 206 Partial Content). Un Weak ETag certifica que el significado semántico es el mismo, aunque por ejemplo cambie el espaciado en blanco o la compresión gzip.",
    topic: "HTTP Caching y ETags",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-19",
    collectionId: "apis",
    question: "¿Cómo opera el protocolo 'Connect' (creado por Buf) frente a gRPC tradicional en entornos web?",
    options: [
      "Elimina por completo el uso de certificados SSL.",
      "Permite que un único servicio RPC exponga compatibilidad nativa tanto con gRPC estándar sobre HTTP/2, como con clientes web modernos mediante fetch/XHR puro sobre HTTP/1.1 y HTTP/2 utilizando JSON o Protobuf, sin necesidad de proxies intermedios como Envoy.",
      "Sustituye todas las bases de datos relacionales por archivos CSV.",
      "Convierte código gRPC en páginas HTML estáticas."
    ],
    correctAnswerIndex: 1,
    explanation: "gRPC nativo requiere funciones avanzadas de HTTP/2 (como trailers HTTP) que los navegadores web no exponen en su API de fetch. Connect resuelve esto soportando streaming y peticiones unarias sobre HTTP estándar sin requerir la pesada infraestructura de Envoy gRPC-Web.",
    topic: "gRPC y Tecnologías Modernas de Conexión",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-20",
    collectionId: "apis",
    question: "¿Qué es el ataque 'Broken Function Level Authorization' (BFLA) en APIs según el OWASP API Top 10?",
    options: [
      "Un fallo de sintaxis en el intérprete de funciones de Node.js.",
      "Cuando un endpoint administrativo o con privilegios elevados (ej. 'DELETE /api/users/123' o 'POST /api/admin/roles') es accesible por usuarios con roles estándar o no autorizados porque el backend no valida adecuadamente el nivel de permisos para esa función concreta.",
      "Un ataque de denegación de servicio por saturación de ancho de banda de red.",
      "La interceptación de claves API mediante sniffing de paquetes Wi-Fi."
    ],
    correctAnswerIndex: 1,
    explanation: "BFLA se diferencia de BOLA en que no se refiere a la propiedad de un dato específico, sino a la autorización de acceso a una capacidad o función del sistema (por ejemplo, permitir que un usuario regular invoque endpoints pensados exclusivamente para administradores).",
    topic: "Seguridad en APIs y OWASP",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-21",
    collectionId: "apis",
    question: "¿Cuál es el propósito del mecanismo 'Refresh Token Rotation' (RTR) en arquitecturas de autenticación para SPAs y móviles?",
    options: [
      "Cambiar la contraseña del usuario cada vez que inicia sesión.",
      "Emitir un nuevo refresh token de un solo uso cada vez que se utiliza el refresh token actual para obtener un nuevo access token; si un refresh token reutilizado es detectado, el servidor asume que fue robado e invalida inmediatamente toda la familia de tokens del usuario.",
      "Rotar los puertos de escucha del servidor web cada 24 horas.",
      "Generar tokens criptográficos con claves de cifrado variables."
    ],
    correctAnswerIndex: 1,
    explanation: "La rotación de refresh tokens evita que la filtración de un token persistente otorgue acceso perpetuo a un atacante. Si se detecta un intento de reutilizar un token ya consumido, el sistema detecta la brecha y revoca toda la cadena de sesiones del usuario de inmediato.",
    topic: "Autenticación y Seguridad OAuth",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-22",
    collectionId: "apis",
    question: "¿Qué cabecera HTTP estándar permite al servidor indicar al cliente cuándo puede reintentar una petición tras recibir un código '429 Too Many Requests'?",
    options: [
      "X-Try-Again-Later.",
      "Retry-After (que puede contener un número entero de segundos o una fecha HTTP completa).",
      "Rate-Limit-Resume.",
      "Cache-Control: retry."
    ],
    correctAnswerIndex: 1,
    explanation: "La cabecera 'Retry-After' es el estándar oficial (RFC 7231 / RFC 6585) para comunicar el tiempo de espera obligatorio antes de enviar nuevas peticiones, tanto en códigos 429 (Too Many Requests) como en códigos 503 (Service Unavailable).",
    topic: "Rate Limiting y Cabeceras HTTP",
    difficulty: "básico"
  },
  {
    id: "apis-q-23",
    collectionId: "apis",
    question: "¿Cómo se previene el 'Server-Side Request Forgery' (SSRF) en APIs que permiten a los usuarios registrar URLs de webhooks?",
    options: [
      "Bloqueando las peticiones que contengan la palabra 'localhost' en la ruta.",
      "Validando y resolviendo la IP en tiempo de ejecución (evitando ataques de DNS rebinding) y bloqueando conexiones hacia rangos de IPs privadas/reservadas (RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, loopback 127.0.0.1 y endpoints de metadatos de la nube como 169.254.169.254).",
      "Permitiendo únicamente URLs que comiencen con http en lugar de https.",
      "Deshabilitando el protocolo IPv6 en los routers de la empresa."
    ],
    correctAnswerIndex: 1,
    explanation: "Un atacante puede registrar como webhook una IP interna de la infraestructura de la empresa (o el servicio de metadatos de AWS/GCP para robar credenciales IAM). La mitigación requiere resolver el DNS, comprobar que la IP sea pública y deshabilitar redirecciones inseguras.",
    topic: "Seguridad en APIs y SSRF",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-24",
    collectionId: "apis",
    question: "¿Qué diferencia existe entre un 'schema-first' (diseño primero) y un 'code-first' (código primero) en el desarrollo de APIs?",
    options: [
      "Schema-first solo se usa en lenguajes compilados y Code-first en lenguajes interpretados.",
      "Schema-first define formalmente el contrato (en OpenAPI, Protobuf o GraphQL SDL) antes de escribir código, sirviendo como contrato único de verdad y facilitando el trabajo paralelo de frontend/backend; Code-first escribe las funciones de la aplicación primero e infiere la documentación automáticamente.",
      "Code-first genera código máquina nativo y Schema-first genera código de depuración.",
      "Schema-first prohíbe el uso de pruebas automatizadas."
    ],
    correctAnswerIndex: 1,
    explanation: "En Schema-First el contrato es la fuente única de verdad: permite revisión de diseño colaborativo, generación automática de stubs, tipados TypeScript para el cliente y mocks inmediatos. En Code-First, el código es el líder y la especificación es un artefacto secundario derivado.",
    topic: "Diseño de APIs y OpenAPI",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-25",
    collectionId: "apis",
    question: "¿Qué estructura formal tienen los mensajes de 'Server-Sent Events' (SSE) en el protocolo 'text/event-stream'?",
    options: [
      "Documentos XML cifrados con etiquetas <event> y <data> obligatorias.",
      "Líneas de texto plano separadas por retornos de carro delimitadas por saltos de línea dobles ('\\n\\n'), compuestas por campos como 'event:', 'data:', 'id:' y 'retry:'.",
      "Paquetes binarios UDP con checksum CRC32 en la cabecera.",
      "Objetos JSON serializados en base64 de longitud fija."
    ],
    correctAnswerIndex: 1,
    explanation: "El formato de SSE es sumamente simple y legible: cada bloque de evento termina con un doble salto de línea (\\n\\n). Los campos estándar son 'data:' para la carga útil, 'event:' para nombrar el tipo de evento, 'id:' para el seguimiento de reconexión y 'retry:' para ajustar el intervalo de reintento.",
    topic: "Protocolos en Tiempo Real y SSE",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-26",
    collectionId: "apis",
    question: "¿Qué es el 'Head-of-Line Blocking' (bloqueo de cabeza de línea) y cómo lo soluciona HTTP/3 frente a HTTP/2?",
    options: [
      "Un fallo de memoria en la caché del navegador al cargar fuentes tipográficas.",
      "En HTTP/2, todos los flujos se multiplexan sobre una sola conexión TCP; si se pierde un solo paquete en la red, TCP pausa TODOS los flujos hasta que se retransmite el paquete faltante. HTTP/3 utiliza QUIC sobre UDP, haciendo que los flujos sean independientes a nivel de transporte.",
      "La saturación de los servidores DNS al resolver nombres de dominio largos.",
      "La espera obligatoria de 60 segundos antes de realizar una nueva llamada REST."
    ],
    correctAnswerIndex: 1,
    explanation: "Aunque HTTP/2 solucionó el bloqueo de cabeza de línea en la capa HTTP, la abstracción de flujo continuo ordenado de TCP reproduce el problema en la capa de transporte ante pérdidas de paquetes. QUIC/HTTP/3 aísla los streams sobre UDP: perder un paquete solo afecta al flujo específico involucrado.",
    topic: "Protocolos de Red: HTTP/2 vs HTTP/3 QUIC",
    difficulty: "avanzado"
  },
  {
    id: "apis-q-27",
    collectionId: "apis",
    question: "¿Qué es la técnica de 'Field Masking' (o Sparse Fieldsets) y qué beneficio aporta en APIs con modelos de datos extensos?",
    options: [
      "Ocultar contraseñas sustituyendo los caracteres por asteriscos en la pantalla del usuario.",
      "Permitir al cliente solicitar explícitamente solo los campos necesarios (ej. '?fields=id,name,status'), reduciendo el volumen de bytes transmitidos por la red, acelerando la serialización JSON y optimizando las consultas SQL subyacentes con proyecciones SELECT específicas.",
      "Bloquear la edición de campos de base de datos durante auditorías financieras.",
      "Asignar valores por defecto a campos numéricos que contienen nulos."
    ],
    correctAnswerIndex: 1,
    explanation: "Al consultar una entidad compleja con 80 columnas (como un perfil de usuario o producto), enviar todo el payload consume ancho de banda y memoria innecesarios. Sparse Fieldsets permite al cliente pedir únicamente los atributos que su vista necesita renderizar.",
    topic: "Optimización de Cargas Útiles y REST",
    difficulty: "intermedio"
  },
  {
    id: "apis-q-28",
    collectionId: "apis",
    question: "¿Qué papel desempeña un 'API Gateway' en una arquitectura empresarial con decenas de microservicios?",
    options: [
      "Reemplazar a los desarrolladores de backend mediante algoritmos de inteligencia artificial.",
      "Actuar como punto de entrada único (Single Entry Point) que centraliza responsabilidades transversales: autenticación y validación de tokens, terminación TLS, limitación de tasa, enrutamiento dinámico, agregación de respuestas y observabilidad.",
      "Almacenar copias de seguridad de las bases de datos en cintas magnéticas.",
      "Compilar el código fuente de los microservicios en tiempo real."
    ],
    correctAnswerIndex: 1,
    explanation: "Sin un API Gateway, cada microservicio tendría que reimplementar autenticación, CORS, rate limiting y telemetría, y los clientes externos tendrían que lidiar con múltiples URLs y formatos internos. El gateway aísla la topología interna del exterior.",
    topic: "Patrones de API Gateway",
    difficulty: "básico"
  },
  {
    id: "apis-q-29",
    collectionId: "apis",
    question: "¿Cómo se define una relación de tipo 'Unary RPC' en un archivo de definición de servicio de Protocol Buffers (Protobuf)?",
    options: [
      "rpc GetUser (UserRequest) returns (stream UserResponse);",
      "rpc GetUser (UserRequest) returns (UserResponse);",
      "rpc GetUser (stream UserRequest) returns (stream UserResponse);",
      "function GetUser(UserRequest): UserResponse;"
    ],
    correctAnswerIndex: 1,
    explanation: "Una llamada 'Unary' es el modelo clásico petición-respuesta síncrono en gRPC: el cliente envía un único mensaje y recibe una única respuesta. Las palabras clave 'stream' se reservan para llamadas con streaming de servidor, streaming de cliente o bidireccional.",
    topic: "gRPC y Sintaxis Protobuf",
    difficulty: "básico"
  },
  {
    id: "apis-q-30",
    collectionId: "apis",
    question: "¿Qué vulnerabilidad explota el ataque 'Mass Assignment' (asignación masiva) en endpoints de API REST?",
    options: [
      "Asignar demasiadas direcciones IP a la misma tarjeta de red física.",
      "Cuando un endpoint toma los datos del cuerpo JSON y los enlaza automáticamente a los atributos de un modelo de dominio o base de datos sin filtrado de lista blanca (whitelist), permitiendo a un atacante inyectar campos privilegiados como 'role: admin' o 'is_verified: true'.",
      "La saturación de peticiones de tipo OPTIONS en servidores proxy.",
      "La modificación de encabezados de cookies en sesiones compartidas."
    ],
    correctAnswerIndex: 1,
    explanation: "Los frameworks web modernos a menudo mapean automáticamente el body de una petición a la entidad. Si no se usan DTOs dedicados con validación estricta de campos permitidos (whitelisting), un usuario puede elevar sus privilegios enviando propiedades internas ocultas.",
    topic: "Seguridad en APIs y OWASP",
    difficulty: "intermedio"
  }
];
