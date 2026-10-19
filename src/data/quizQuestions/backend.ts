import type { QuizQuestion } from "@/data/quizTypes";

export const backendQuestions: QuizQuestion[] = [
  {
    id: "backend-q-01",
    collectionId: "backend",
    question: "¿Qué problema crítico resuelve el patrón 'Transactional Outbox' en arquitecturas orientadas a eventos y microservicios?",
    options: [
      "Permite enviar correos electrónicos sin configurar servidores SMTP.",
      "Garantiza atomicidad entre la mutación de la base de datos de negocio y la publicación del evento en el message broker, escribiendo ambos en la misma transacción ACID local y usando un proceso CDC (como Debezium) para emitir el evento sin pérdidas.",
      "Comprime los mensajes del bus utilizando algoritmos zstandard.",
      "Elimina la necesidad de utilizar bases de datos relacionales en el backend."
    ],
    correctAnswerIndex: 1,
    explanation: "El 'dual-write problem' ocurre cuando se escribe en la BD y luego se publica en Kafka: si el broker falla, la BD queda actualizada pero el evento nunca se emitió. El Transactional Outbox guarda el evento en una tabla 'outbox' dentro de la misma transacción de negocio, asegurando consistencia estricta.",
    topic: "Patrones de Arquitectura Distribuida",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-02",
    collectionId: "backend",
    question: "¿En qué se diferencian las transacciones distribuidas basadas en 2PC (Two-Phase Commit) del patrón Saga?",
    options: [
      "2PC solo funciona en teléfonos móviles y Saga en la nube.",
      "2PC es un protocolo bloqueante coordinado centralmente que asegura consistencia inmediata ACID bloqueando recursos distribuidos; Saga coordina una secuencia de transacciones locales desacopladas con consistencia eventual y transacciones compensatorias en caso de fallo.",
      "Saga prohíbe el uso de colas de mensajes como RabbitMQ.",
      "2PC no requiere conexión de red entre los nodos participantes."
    ],
    correctAnswerIndex: 1,
    explanation: "2PC impone cerrojos globales en todos los nodos durante las fases Prepare y Commit, lo que no escala en la nube y reduce la disponibilidad. Saga descompone la operación en transacciones locales independientes: si un paso falla, se ejecutan transacciones compensatorias para revertir el estado.",
    topic: "Transacciones Distribuidas",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-03",
    collectionId: "backend",
    question: "¿Cómo opera el patrón 'Circuit Breaker' (disyuntor) ante fallos reiterados en servicios dependientes?",
    options: [
      "Apaga el servidor físico para evitar sobrecalentamiento del centro de datos.",
      "Transita de estado 'Closed' (normal) a 'Open' al superar un umbral de errores, fallando inmediatamente las llamadas entrantes sin invocar al servicio caído; tras un tiempo de enfriamiento pasa a 'Half-Open' para probar con tráfico reducido si el servicio se recuperó.",
      "Redirige todo el tráfico a un servidor proxy en otra región geográfica.",
      "Reinicia la base de datos de forma automática en cada fallo."
    ],
    correctAnswerIndex: 1,
    explanation: "El Circuit Breaker previene cascadas de fallos catastróficas. Al abrir el circuito, evita saturar el servicio degradado con peticiones condenadas al fracaso y ahorra recursos en el cliente retornando un fallback rápido, probando gradualmente su recuperación en Half-Open.",
    topic: "Resiliencia y Confiabilidad",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-04",
    collectionId: "backend",
    question: "¿Qué es el 'Thundering Herd Problem' (o Cache Stampede) en sistemas backend de alto tráfico y cómo se mitiga?",
    options: [
      "Cuando miles de microservicios intentan registrarse simultáneamente en el Consul Discovery.",
      "Cuando una clave de caché de altísima demanda expira simultáneamente y miles de solicitudes concurrentes golpean la base de datos al mismo tiempo para recalcular el valor; se mitiga con cerrojos distribuidos (mutex) o expiración probabilística temprana (XFetch).",
      "Una sobrecarga en la tarjeta de red provocada por tormentas de broadcast ARP.",
      "La saturación de discos duros debido a logs no rotados de Nginx."
    ],
    correctAnswerIndex: 1,
    explanation: "Si un elemento en caché leído por miles de hilos expira, todos fallan en caché e intentan regenerarlo a la vez, colapsando la base de datos. Se soluciona haciendo que solo un hilo adquiera un cerrojo para recalcular el valor mientras los demás esperan o consumen el valor anterior con stale-while-revalidate.",
    topic: "Caché y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-05",
    collectionId: "backend",
    question: "¿Qué establece el teorema PACELC como extensión del Teorema CAP para sistemas distribuidos?",
    options: [
      "Que la potencia de cálculo se duplica cada 18 meses según la ley de Moore.",
      "Si hay partición (P), se elige entre Disponibilidad (A) o Consistencia (C); ELSE (si el sistema opera normalmente sin particiones), se debe elegir entre Latencia (L) o Consistencia (C).",
      "Que el protocolo TCP siempre prevalecerá sobre el protocolo UDP en redes WAN.",
      "Que los microservicios no deben comunicarse mediante arquitecturas síncronas."
    ],
    correctAnswerIndex: 1,
    explanation: "El teorema CAP solo describe el comportamiento durante particiones de red. PACELC explica que incluso en operación normal sin fallos (Else), existe un compromiso inevitable: sincronizar réplicas para consistencia estricta aumenta la latencia, o replicar asíncronamente para baja latencia relaja la consistencia.",
    topic: "Sistemas Distribuidos y CAP/PACELC",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-06",
    collectionId: "backend",
    question: "¿Por qué es imprescindible incluir 'Jitter' (aleatoriedad) al aplicar reintentos con retroceso exponencial (Exponential Backoff)?",
    options: [
      "Para encriptar los paquetes de red y evitar ataques Man-in-the-Middle.",
      "Para desincronizar los reintentos periódicos de múltiples clientes; sin jitter, todos los clientes reintentan en los mismos intervalos exactos produciendo picos recurrentes que vuelven a colapsar el servicio recuperado.",
      "Porque los servidores HTTP rechazan peticiones con intervalos deterministas.",
      "Para reducir el tamaño de las cabeceras HTTP en un 50%."
    ],
    correctAnswerIndex: 1,
    explanation: "Si 1,000 clientes fallan al mismo tiempo y usan backoff puro (ej. reintentar a los 2s, 4s, 8s), todos reintentarán sincronizados en olas idénticas. Agregar jitter (un delta aleatorio al tiempo de espera) dispersa las peticiones de manera uniforme en el tiempo.",
    topic: "Resiliencia y Confiabilidad",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-07",
    collectionId: "backend",
    question: "¿Cómo garantiza una API REST la idempotencia en operaciones no idempotentes (como 'POST /orders') mediante cabeceras?",
    options: [
      "Configurando la cabecera 'Cache-Control: no-cache'.",
      "Exigiendo una cabecera 'Idempotency-Key' con un UUID único generado por el cliente: el servidor registra la clave y el resultado de la transacción en una base de datos; si recibe la misma clave de nuevo, retorna la respuesta previa sin reejecutar la orden ni cobrar dos veces.",
      "Exigiendo que la petición sea firmada con certificado digital X.509.",
      "Forzando el uso de HTTP/3 exclusivamente."
    ],
    correctAnswerIndex: 1,
    explanation: "Las pasarelas de pago y APIs financieras (como Stripe) utilizan Idempotency-Key. Si un fallo de red impide al cliente saber si el POST se completó, reintentar la solicitud con la misma clave garantiza que el backend reconozca la operación y devuelva el resultado original sin duplicar cobros.",
    topic: "Diseño de APIs e Idempotencia",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-08",
    collectionId: "backend",
    question: "¿Cuál es la vulnerabilidad número 1 de APIs según OWASP: BOLA (Broken Object Level Authorization / IDOR)?",
    options: [
      "Un desbordamiento de búfer en el servidor web Nginx.",
      "Cuando un endpoint acepta un identificador de objeto (ej. '/api/users/123/invoices') y no valida que el usuario autenticado actualmente sea el dueño legítimo de dicho recurso, permitiendo a cualquier usuario leer o mutar datos ajenos cambiando el ID.",
      "La ausencia de compresión gzip en payloads JSON superiores a 1 MB.",
      "El envío de contraseñas sin cifrar a través de conexiones SSL obsoletas."
    ],
    correctAnswerIndex: 1,
    explanation: "BOLA (antes conocido como Insecure Direct Object Reference - IDOR) ocurre cuando el código asume que el usuario autenticado solo pedirá sus propios recursos y omite la verificación de autorización a nivel de fila o de objeto en la capa de negocio.",
    topic: "Seguridad de APIs y OWASP",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-09",
    collectionId: "backend",
    question: "¿Cuál es la diferencia de arquitectura y consumo entre Apache Kafka y RabbitMQ?",
    options: [
      "RabbitMQ solo funciona en Windows y Kafka solo en Linux.",
      "RabbitMQ es un message broker tradicional basado en colas inteligentes y consumidores tontos (borra mensajes tras confirmación ACK); Kafka es un log de eventos distribuido inmutable basado en append-only donde los consumidores mantienen su propio offset de lectura y los mensajes persisten en disco.",
      "Kafka no admite múltiples suscriptores para el mismo tema.",
      "RabbitMQ requiere clústeres de Zookeeper obligatoriamente."
    ],
    correctAnswerIndex: 1,
    explanation: "RabbitMQ gestiona el ciclo de vida del mensaje (lo enruta por exchanges y lo elimina al confirmarse). Kafka es un commit log particionado: los mensajes persisten según retención temporal o de tamaño, y múltiples consumer groups independientes pueden leer y rebobinar a su propio ritmo sin interferirse.",
    topic: "Mensajería y Event Streaming",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-10",
    collectionId: "backend",
    question: "¿Cómo funciona el algoritmo de 'Consistent Hashing' para el balanceo y particionamiento de claves en clústeres de almacenamiento en caché?",
    options: [
      "Calcula un hash MD5 sobre el nombre del usuario y lo envía por correo electrónico.",
      "Mapea tanto los nodos del clúster como las claves de datos en un anillo circular virtual (hash ring); al agregar o retirar un nodo, solo una pequeña fracción de claves (K/N) se reubican, a diferencia del módulo hash tradicional (hash % N) que invalidaría casi todo el caché.",
      "Ordena los nodos alfabéticamente según su dirección MAC.",
      "Asigna cada clave al servidor con menor temperatura física de CPU."
    ],
    correctAnswerIndex: 1,
    explanation: "En un clúster distribuido, usar 'hash(key) % N' significa que cambiar N (escalar de 4 a 5 nodos) redistribuye el ~80% de las claves colapsando el sistema. Consistent Hashing con nodos virtuales distribuye la carga uniformemente y solo migra las claves adyacentes al nuevo nodo.",
    topic: "Algoritmos Distribuidos",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-11",
    collectionId: "backend",
    question: "¿Qué diferencia existe entre una sonda de 'Liveness' y una sonda de 'Readiness' en orquestadores de backend como Kubernetes?",
    options: [
      "Liveness se ejecuta en entornos de desarrollo y Readiness en producción.",
      "Liveness determina si el contenedor sigue vivo (si falla, Kubernetes reinicia el contenedor para recuperarse de deadlocks); Readiness determina si el contenedor está listo para recibir tráfico de red (si falla, retira el pod del Service sin reiniciarlo).",
      "Readiness formatea los volúmenes de almacenamiento del pod.",
      "Liveness comprueba la velocidad de la memoria RAM del nodo físico."
    ],
    correctAnswerIndex: 1,
    explanation: "Una sonda de liveness defectuosa que verifica dependencias externas (como la BD caída) reiniciará el contenedor infinitamente en un crashloop inútil. Liveness debe chequear salud interna del proceso; Readiness verifica si puede atender peticiones (ej. caches precargadas, conexiones listas).",
    topic: "Infraestructura y Kubernetes",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-12",
    collectionId: "backend",
    question: "¿Qué es el 'W3C Trace Context' (con cabeceras 'traceparent' y 'tracestate') en sistemas de observabilidad distribuida?",
    options: [
      "Un estándar para hojas de estilo CSS en aplicaciones web móviles.",
      "Un estándar universal de cabeceras HTTP que propaga el identificador global de traza (trace-id), el identificador de tramo padre (parent-id) y banderas de muestreo a través de múltiples microservicios, permitiendo correlacionar una petición de extremo a extremo.",
      "Un protocolo de cifrado simétrico para bases de datos SQLite.",
      "Un archivo de configuración para el compilador de TypeScript."
    ],
    correctAnswerIndex: 1,
    explanation: "El estándar traceparent (ej. '00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01') permite que herramientas como OpenTelemetry, Jaeger o Datadog reconstruyan el árbol jerárquico de llamadas y midan la latencia exacta de cada servicio participante en la solicitud.",
    topic: "Observabilidad y Distributed Tracing",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-13",
    collectionId: "backend",
    question: "¿Qué fórmula heurística recomienda PostgreSQL y HikariCP para calcular el tamaño óptimo de un Connection Pool de base de datos?",
    options: [
      "Número de usuarios concurrentes divididos entre 10.",
      "Conexiones = (número de núcleos de CPU * 2) + cantidad de discos efectivos para I/O.",
      "El número máximo de hilos que admita el sistema operativo dividido por 2.",
      "Siempre fijar exactamente 1,000 conexiones sin importar el hardware."
    ],
    correctAnswerIndex: 1,
    explanation: "Asignar cientos de conexiones en el pool es un error que produce contención destructiva de contexto y saturación del scheduler de la BD. Una base de datos relacional opera con máxima velocidad cuando el número de conexiones activas es cercano a los cores reales de CPU de la máquina.",
    topic: "Bases de Datos y Connection Pools",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-14",
    collectionId: "backend",
    question: "¿Qué es el patrón 'Strangler Fig' (higuera estranguladora) en la modernización de sistemas legacy?",
    options: [
      "Un virus informático que agota la memoria de servidores antiguos.",
      "Una estrategia de migración incremental donde se reemplaza gradualmente la funcionalidad de una aplicación monolítica creando nuevos microservicios alrededor de ella y redirigiendo el tráfico con un proxy hasta que el monolito queda vacío y puede retirarse.",
      "Un algoritmo de compresión de árboles binarios en memoria.",
      "Un protocolo para apagar servidores desactualizados sin previo aviso."
    ],
    correctAnswerIndex: 1,
    explanation: "El patrón Strangler Fig evita el alto riesgo de las migraciones 'Big Bang'. Se coloca una fachada o API Gateway que intercepta peticiones: las rutas migradas van a los nuevos servicios y las restantes van al monolito, migrando pieza por pieza de forma segura y continua.",
    topic: "Arquitectura y Migración",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-15",
    collectionId: "backend",
    question: "¿Cuál es el riesgo de seguridad de firmar tokens JWT con el algoritmo simétrico HMAC (HS256) cuando el token es verificado por múltiples servicios de terceros?",
    options: [
      "Que el token expira después de 5 minutos obligatoriamente.",
      "Que todas las partes que verifican el token deben conocer la clave secreta compartida; si cualquiera de los servicios que verifican la firma se ve comprometido, el atacante puede forjar nuevos tokens válidos con privilegios arbitrarios (se debe usar RSA/ECDSA asimétrico: RS256/ES256).",
      "Que los tokens firmados con HS256 ocupan más de 50 KB en cabeceras HTTP.",
      "Que el navegador web rechaza las cookies que contienen algoritmos HMAC."
    ],
    correctAnswerIndex: 1,
    explanation: "Con HS256, la misma clave privada se usa para firmar y verificar. En arquitecturas distribuidas, si un microservicio consumidor necesita validar el token, conocer la clave le permite emitir tokens falsos a voluntad. Se debe usar criptografía asimétrica donde el auth server firma con clave privada y los demás verifican con clave pública.",
    topic: "Autenticación y Seguridad JWT",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-16",
    collectionId: "backend",
    question: "¿En qué consiste el patrón 'Event Sourcing' en la persistencia de datos?",
    options: [
      "Almacenar el código fuente de la aplicación dentro de una base de datos relacional.",
      "En lugar de almacenar únicamente el estado actual mutable de una entidad en una tabla, se persiste una secuencia inmutable de todos los eventos de dominio que han ocurrido a lo largo del tiempo; el estado actual se reconstruye recalculando los eventos.",
      "Capturar capturas de pantalla de la interfaz de usuario en cada clic.",
      "Enviar todos los errores de la aplicación a un canal de Slack."
    ],
    correctAnswerIndex: 1,
    explanation: "En Event Sourcing, los eventos son la fuente de verdad inmutable (ej. 'CuentaCreada', 'DineroDepositado', 'DineroRetirado'). Esto otorga una auditoría perfecta y completa de negocio, elimina la pérdida de información de los updates y permite reconstruir el estado en cualquier punto histórico.",
    topic: "Event-Driven y Event Sourcing",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-17",
    collectionId: "backend",
    question: "¿Qué problema resuelve 'CQRS' (Command Query Responsibility Segregation)?",
    options: [
      "Evita que se escriban sentencias SQL con letras mayúsculas.",
      "Separa el modelo de datos de escritura (Commands: orientado a invariantes de negocio y transacciones) del modelo de datos de lectura (Queries: optimizado con vistas materializadas o bases de datos especializadas para consulta rápida sin joins complejos).",
      "Permite compilar código Java en servidores sin JVM.",
      "Restringe el acceso a bases de datos a conexiones SSH."
    ],
    correctAnswerIndex: 1,
    explanation: "En aplicaciones complejas, el modelo óptimo para transaccionar y validar reglas de negocio rara vez es el modelo óptimo para renderizar pantallas o reportes. CQRS desacopla ambos caminos, permitiendo escalar lecturas y escrituras de forma independiente.",
    topic: "Patrones de Arquitectura",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-18",
    collectionId: "backend",
    question: "¿Cómo funciona el algoritmo de limitación de tasa 'Token Bucket' frente a 'Leaky Bucket'?",
    options: [
      "Token Bucket se usa para criptomonedas y Leaky Bucket para almacenar agua en servidores.",
      "Token Bucket agrega tokens a una tasa constante hasta una capacidad máxima y permite ráfagas controladas de tráfico consumiendo tokens acumulados; Leaky Bucket procesa las peticiones a una tasa de salida estrictamente constante, suavizando el tráfico sin permitir ráfagas.",
      "Leaky Bucket descarta todas las solicitudes que superen los 100 bytes.",
      "No existe ninguna diferencia en su comportamiento matemático."
    ],
    correctAnswerIndex: 1,
    explanation: "Token Bucket es ideal para APIs de propósito general porque tolera ráfagas breves de tráfico legítimo (mientras haya tokens en el balde). Leaky Bucket es un 'traffic shaper' que impone una cadencia de salida fija y regular, ideal para proteger servicios backend downstream extremadamente sensibles a picos.",
    topic: "Rate Limiting y Tráfico",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-19",
    collectionId: "backend",
    question: "¿Cuál es la diferencia entre RPO (Recovery Point Objective) y RTO (Recovery Time Objective) en planes de recuperación ante desastres (Disaster Recovery)?",
    options: [
      "RPO mide el costo financiero y RTO mide el número de servidores destruidos.",
      "RPO define la cantidad máxima tolerable de datos perdidos medida en tiempo (ej. backups cada 1 hora implican RPO de 1 hora); RTO define el tiempo máximo aceptable que el sistema puede permanecer caído antes de ser restaurado y operativo.",
      "RTO se aplica solo a bases de datos y RPO solo a servidores de correo.",
      "Ambos deben ser siempre exactamente cero en cualquier aplicación web."
    ],
    correctAnswerIndex: 1,
    explanation: "RPO es la tolerancia a pérdida de transacciones (delta de tiempo entre el último backup/réplica y el fallo). RTO es el tiempo de reloj que demora el equipo de operaciones o la automatización en levantar la infraestructura y reanudar el servicio para los usuarios.",
    topic: "Confiabilidad y Disaster Recovery",
    difficulty: "básico"
  },
  {
    id: "backend-q-20",
    collectionId: "backend",
    question: "¿Cómo se implementa de forma segura el patrón 'Expand and Contract' (Parallel Run) para migraciones de esquemas de bases de datos sin tiempo de inactividad?",
    options: [
      "Renombrando las columnas de la tabla directamente en producción con ALTER TABLE.",
      "Fase 1 (Expand): agregar la nueva columna o tabla sin tocar la vieja; Fase 2: la aplicación realiza doble escritura en ambas estructuras y lee de la vieja mientras se migran los datos históricos; Fase 3: la lectura conmuta a la nueva estructura; Fase 4 (Contract): se elimina la columna o tabla vieja.",
      "Apagando el servidor web durante la madrugada para ejecutar el script SQL.",
      "Creando una copia completa de la base de datos en una hoja de cálculo."
    ],
    correctAnswerIndex: 1,
    explanation: "El patrón Expand/Contract evita locks de tabla prolongados y permite rollbacks seguros en cualquier momento sin romper versiones viejas del código de la app que todavía estén corriendo en pods durante un rolling deployment.",
    topic: "Bases de Datos y Migraciones Zero-Downtime",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-21",
    collectionId: "backend",
    question: "¿Qué es un 'Dead Letter Queue' (DLQ) en arquitecturas de colas y mensajería?",
    options: [
      "Una cola donde se almacenan correos electrónicos marcados como SPAM.",
      "Una cola secundaria dedicada donde se desvían automáticamente los mensajes que no pudieron procesarse con éxito tras agotar el número máximo de reintentos configurados (poison pills), evitando bloquear la cola principal de producción.",
      "Una lista de servidores que han sido desconectados de la red.",
      "Un búfer en memoria para almacenar mensajes no leídos por más de 1 año."
    ],
    correctAnswerIndex: 1,
    explanation: "Si un mensaje malformado causa una excepción no controlada, un reintento infinito saturaría los consumidores (head-of-line blocking). El DLQ aísla los mensajes defectuosos para que los ingenieros los inspeccionen, corrijan el bug y los reinyecten sin detener el flujo general.",
    topic: "Mensajería y Colas",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-22",
    collectionId: "backend",
    question: "¿Por qué un cerrojo distribuido (Distributed Lock) implementado ingenuamente con 'SETNX' en Redis puede fallar catastróficamente ante pausas de Garbage Collection o red?",
    options: [
      "Porque Redis apaga sus puertos de red si detecta llamadas concurrentes.",
      "Si el cliente adquiere el lock con un TTL de 10s pero entra en una pausa larga de GC de 12s, el lock expira en Redis; otro cliente adquiere el lock y ambos ejecutan concurrentemente la sección crítica; se mitiga usando 'Fencing Tokens' con incremento monótono en la base de datos destino.",
      "Porque SETNX solo puede almacenar valores booleanos.",
      "Porque Redis no permite más de 100 locks simultáneos en memoria."
    ],
    correctAnswerIndex: 1,
    explanation: "Martin Kleppmann demostró que los locks basados en tiempo no garantizan exclusión mutua en sistemas asíncronos reales. Sin un 'fencing token' (un contador que incrementa con cada lock y que la BD verifica rechazando escrituras con tokens viejos), dos clientes pueden mutar datos a la vez.",
    topic: "Algoritmos y Consenso Distribuido",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-23",
    collectionId: "backend",
    question: "¿Qué es 'Backpressure' (contrapresión) en sistemas reactivos y streaming de backend?",
    options: [
      "La presión física de los ventiladores del servidor en el rack.",
      "Un mecanismo de control de flujo que permite al consumidor señalar al productor cuántos elementos es capaz de procesar actualmente ('request(N)'), evitando que un consumidor lento se quede sin memoria ante un productor veloz.",
      "La compresión de datos mediante sockets UDP.",
      "El descarte aleatorio de peticiones HTTP en horas pico."
    ],
    correctAnswerIndex: 1,
    explanation: "Si un productor genera 10,000 eventos/seg y el consumidor solo procesa 1,000, los búferes del consumidor se desbordan produciendo OutOfMemoryError. La especificación Reactive Streams invierte el control: el consumidor solicita explícitamente la cantidad de ítems que puede digerir.",
    topic: "Sistemas Reactivos y Streaming",
    difficulty: "avanzado"
  },
  {
    id: "backend-q-24",
    collectionId: "backend",
    question: "¿Qué diferencia existe entre un flujo de autenticación 'OAuth 2.0 Authorization Code Flow con PKCE' y el obsoleto 'Implicit Flow'?",
    options: [
      "PKCE solo funciona con teléfonos Android antiguos.",
      "Implicit Flow devolvía los tokens de acceso directamente en el fragmento de la URL (#access_token) exponiéndolos en el historial del navegador; Authorization Code con PKCE usa un desafío criptográfico (code_verifier / code_challenge) para intercambiar el código vía POST seguro sin exponer tokens en la URL.",
      "Implicit Flow requiere una conexión VPN dedicada.",
      "PKCE elimina la necesidad de contar con un servidor de identidad."
    ],
    correctAnswerIndex: 1,
    explanation: "El Implicit Flow fue deprecado por la especificación OAuth Security Best Current Practice debido al riesgo de filtración de tokens en logs y referrers. PKCE (Proof Key for Code Exchange) protege a Single Page Apps y clientes móviles contra la interceptación del código de autorización.",
    topic: "Seguridad y OAuth 2.0",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-25",
    collectionId: "backend",
    question: "¿Cómo se verifica la autenticidad e integridad de una notificación 'Webhook' entrante de un tercero (ej. GitHub o Stripe)?",
    options: [
      "Comprobando que el encabezado User-Agent contenga el nombre de la empresa.",
      "Calculando un hash HMAC (típicamente HMAC-SHA256) sobre el cuerpo en crudo (raw body) de la petición entrante utilizando un secreto compartido preconfigurado y comparándolo en tiempo constante contra la firma enviada en la cabecera.",
      "Enviando un correo de confirmación al remitente antes de responder.",
      "Confiando ciegamente si la dirección IP pertenece a los Estados Unidos."
    ],
    correctAnswerIndex: 1,
    explanation: "Cualquiera puede enviar un POST HTTP simulando ser Stripe o GitHub. El emisor firma el payload exacto con un secreto compartido; el receptor calcula el HMAC sobre los mismos bytes brutos y usa una comparación resistente a timing attacks para verificar su autenticidad.",
    topic: "Integraciones y Webhooks",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-26",
    collectionId: "backend",
    question: "¿Qué son los 'RED Metrics' en el monitoreo de microservicios según Brendan Gregg?",
    options: [
      "Registros de color rojo para errores críticos de hardware.",
      "Las tres métricas fundamentales centradas en el usuario para servicios orientados a peticiones: Rate (peticiones atendidas por segundo), Errors (cantidad de peticiones fallidas por segundo) y Duration (tiempo o distribución de latencia que tardan las peticiones).",
      "Una lista de servidores en riesgo de apagón inminente.",
      "El consumo de RAM, Espacio en Disco y Energía eléctrica de los nodos."
    ],
    correctAnswerIndex: 1,
    explanation: "El método RED (Rate, Errors, Duration) es el estándar de oro en observabilidad para servicios HTTP/RPC. Mide directamente la experiencia del cliente, a diferencia del método USE (Utilization, Saturation, Errors) que está orientado a recursos de infraestructura (CPU, memoria, red).",
    topic: "Monitoreo y Métricas",
    difficulty: "básico"
  },
  {
    id: "backend-q-27",
    collectionId: "backend",
    question: "¿Qué es un 'Anti-Corruption Layer' (ACL) en el diseño guiado por el dominio (DDD)?",
    options: [
      "Un programa de auditoría financiera para detectar fraudes corporativos.",
      "Una capa de traducción y adaptación que se coloca entre un subsistema moderno y un sistema legado o externo, traduciendo conceptos y modelos para evitar que la semántica y complejidad del sistema externo contamine el modelo de dominio propio.",
      "Un firewall de red que bloquea paquetes malformados de la dark web.",
      "Un módulo que limpia la base de datos de registros nulos."
    ],
    correctAnswerIndex: 1,
    explanation: "En DDD, cuando dos contextos delimitados (Bounded Contexts) interactúan, el ACL traduce los datos del modelo externo al modelo puro local, permitiendo que la nueva arquitectura prospere sin verse forzada a reflejar el diseño defectuoso del sistema legado.",
    topic: "Domain-Driven Design (DDD)",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-28",
    collectionId: "backend",
    question: "¿Cuál es el beneficio de la cabecera 'Cache-Control: stale-while-revalidate' en APIs públicas?",
    options: [
      "Obliga al usuario a reiniciar su navegador tras 30 segundos.",
      "Indica que el cliente o CDN puede servir inmediatamente una respuesta caducada (stale) sin latencia, mientras dispara de forma asíncrona una petición en segundo plano al servidor backend para revalidar y actualizar el caché.",
      "Deshabilita por completo el almacenamiento en memoria del cliente.",
      "Borra las cookies de sesión del usuario."
    ],
    correctAnswerIndex: 1,
    explanation: "stale-while-revalidate elimina la penalización de latencia en peticiones periódicas. El usuario obtiene una respuesta instantánea desde el borde (edge) mientras la infraestructura se actualiza de fondo sin impacto visible.",
    topic: "Caché y HTTP Caching",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-29",
    collectionId: "backend",
    question: "¿Qué ocurre durante el procedimiento de 'Graceful Shutdown' en un servidor web backend al recibir SIGTERM?",
    options: [
      "El servidor corta todas las conexiones activas inmediatamente y se apaga.",
      "El servidor deja de aceptar nuevas conexiones entrantes, completa las peticiones HTTP que ya están en vuelo respetando un tiempo límite (timeout), drena las conexiones de la base de datos, confirma los mensajes pendientes y finalmente finaliza el proceso de forma limpia con código 0.",
      "El servidor borra los archivos temporales del sistema operativo.",
      "Envía un volcado de memoria por correo electrónico al administrador."
    ],
    correctAnswerIndex: 1,
    explanation: "Un apagado abrupto aborta pagos a medias, corrompe transacciones y produce errores 502/504 en el balanceador. El graceful shutdown garantiza que todo el trabajo en curso se complete con éxito antes de liberar el socket y cerrar los pools de recursos.",
    topic: "Operación y Despliegue",
    difficulty: "intermedio"
  },
  {
    id: "backend-q-30",
    collectionId: "backend",
    question: "¿Cuál es la premisa de la arquitectura 'Zero Trust' en redes de microservicios?",
    options: [
      "No confiar en que ningún empleado de la empresa acceda al código fuente.",
      "Asumir que la red perimetral interna ya está comprometida; por lo tanto, no otorgar confianza implícita por estar dentro de la red corporativa y exigir autenticación y autorización mutua estricta en cada petición entre microservicios (mediante mTLS e identidades criptográficas SPIFFE).",
      "Prohibir el uso de tarjetas de crédito en compras por Internet.",
      "Eliminar los permisos de escritura en todos los servidores de producción."
    ],
    correctAnswerIndex: 1,
    explanation: "El modelo de seguridad tradicional tipo castillo (perímetro seguro, adentro todo en texto plano) es vulnerable a movimientos laterales tras una brecha. En Zero Trust ('nunca confíes, siempre verifica'), cada conexión inter-servicio se cifra y autentica con certificados mTLS de corta duración.",
    topic: "Seguridad y Arquitectura de Red",
    difficulty: "avanzado"
  }
];
