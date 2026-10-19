import type { QuizQuestion } from "@/data/quizTypes";

export const firebaseQuestions: QuizQuestion[] = [
  {
    id: "fb-01",
    collectionId: "firebase",
    question: "En las Reglas de Seguridad de Cloud Firestore (`firestore.rules`), ¿cuál es la diferencia crítica entre los objetos `resource` y `request.resource`?",
    options: [
      "`resource` representa el documento que ya existe en la base de datos antes de la operación solicitada (susceptible a operaciones de lectura, actualización o borrado); `request.resource` representa el nuevo documento que resultaría tras aplicar la escritura solicitada (datos entrantes).",
      "`request.resource` contiene las credenciales de red del cliente, mientras que `resource` contiene los índices de la base de datos.",
      "`resource` es de solo lectura y solo existe en Cloud Storage, a diferencia de `request.resource` que existe en Realtime Database.",
      "`resource` representa las cabeceras HTTP de la petición REST y `request.resource` el cuerpo JSON decodificado."
    ],
    correctAnswerIndex: 0,
    explanation: "Para validar que un campo no se pueda decrementar o que el autor no se modifique en un update: `allow update: if request.resource.data.authorId == resource.data.authorId`. En operaciones de `create`, `resource` es `null`; en `delete`, `request.resource` es `null`.",
    topic: "Reglas de Seguridad (Firestore Rules)",
    difficulty: "intermedio"
  },
  {
    id: "fb-02",
    collectionId: "firebase",
    question: "¿Qué garantía y modelo de aislamiento ofrecen las 'Transacciones' en Cloud Firestore frente a las 'Batch Writes' (Escrituras por Lotes)?",
    options: [
      "Las transacciones ofrecen aislamiento ACID mediante bloqueo optimista (Optimistic Concurrency Control): si algún documento leído durante la transacción se modifica concurrentemente antes del commit, la transacción completa se reintenta automáticamente; las Batch Writes son atómicas (todo o nada) pero no ejecutan lecturas ni reintentos basados en condiciones previas.",
      "Las Batch Writes permiten ejecutar hasta 50,000 operaciones simultáneas, mientras que las transacciones están limitadas a 5.",
      "Las transacciones solo funcionan con números enteros y no admiten campos de texto.",
      "Las Batch Writes ejecutan transacciones de dos fases (2PC) a través de múltiples proyectos de Google Cloud."
    ],
    correctAnswerIndex: 0,
    explanation: "Una transacción en Firestore exige que todas las operaciones de lectura precedan a las de escritura (`get()` antes de `set()`/`update()`). Si los datos cambian bajo sus pies, Firestore reejecuta la función transacción hasta 5 veces antes de abortar.",
    topic: "Firestore Transacciones y Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "fb-03",
    collectionId: "firebase",
    question: "En la gestión de roles y control de acceso basado en atributos (RBAC/ABAC) en Firebase Authentication, ¿cuál es la mejor práctica recomendada para asignar roles a un usuario?",
    options: [
      "Inyectar 'Custom Claims' en el token de autenticación del usuario mediante el Firebase Admin SDK en el backend (`admin.auth().setCustomUserClaims(uid, { role: 'admin' })`), los cuales se propagan criptográficamente en el JWT y se validan en `request.auth.token.role` en las reglas de seguridad sin costo de lectura en la BD.",
      "Crear un campo de texto `isAdmin: true` en el documento público del usuario en Firestore y permitir que el cliente lo actualice.",
      "Almacenar los nombres de los administradores en un archivo de texto en el bucket de Cloud Storage.",
      "Comprobar si el correo electrónico del usuario termina en `@gmail.com` directamente en el código de la app móvil."
    ],
    correctAnswerIndex: 0,
    explanation: "Las Custom Claims forman parte del token JWT firmado por Google. Tienen un límite de 1000 bytes y permiten evaluar permisos en las reglas de Firestore/Storage instantáneamente sin incurrir en cuotas de lectura `get()` adicionales.",
    topic: "Firebase Authentication y Custom Claims",
    difficulty: "intermedio"
  },
  {
    id: "fb-04",
    collectionId: "firebase",
    question: "¿Cuál es el límite rígido de tamaño máximo permitido para un único documento en Cloud Firestore?",
    options: [
      "1 MiB (1,048,576 bytes).",
      "10 MiB.",
      "512 KB.",
      "Ilimitado, siempre que el número de campos no exceda los 20,000."
    ],
    correctAnswerIndex: 0,
    explanation: "Un documento individual en Firestore no puede exceder 1 MiB. Si un documento almacena arrays infinitos o historiales que crecen sin límite, se debe modelar como una subcolección para evitar saturar este límite físico.",
    topic: "Firestore Modelado y Límites",
    difficulty: "básico"
  },
  {
    id: "fb-05",
    collectionId: "firebase",
    question: "¿Qué es una consulta 'Collection Group' en Cloud Firestore y qué requisito de indexación impone?",
    options: [
      "Permite realizar consultas sobre todas las subcolecciones que comparten el mismo nombre en toda la jerarquía de la base de datos (independientemente del documento padre donde residan), requiriendo obligatoriamente la creación previa de un índice de grupo de colecciones (Collection Group Index).",
      "Una consulta que fusiona tablas SQL externas con documentos NoSQL en un único cursor.",
      "Una consulta que descarga todos los documentos de la base de datos a la memoria RAM del cliente.",
      "Un comando para eliminar múltiples colecciones en una sola operación."
    ],
    correctAnswerIndex: 0,
    explanation: "Por ejemplo, consultar `db.collectionGroup('comentarios').where('autorId', '==', uid)` buscará en todas las subcolecciones `comentarios` anidadas dentro de cualquier documento `articulos` o `posts`, requiriendo un índice especial a nivel de grupo.",
    topic: "Firestore Consultas Avanzadas",
    difficulty: "intermedio"
  },
  {
    id: "fb-06",
    collectionId: "firebase",
    question: "En Cloud Functions for Firebase v2, ¿cuál es la ventaja arquitectónica principal sobre las funciones v1?",
    options: [
      "Están construidas sobre Google Cloud Run y Eventarc, lo que permite que una única instancia procese múltiples peticiones concurrentemente (hasta 80 solicitudes simultáneas por instancia), timeouts de hasta 60 minutos, acceso nativo a GPUs, y mayor control de escalabilidad con menor costo.",
      "Permiten compilar código C++ en tiempo de ejecución en el navegador del usuario.",
      "Eliminan por completo la necesidad de tener una cuenta de Google Cloud.",
      "Las funciones v2 no requieren conexión a Internet para ser invocadas."
    ],
    correctAnswerIndex: 0,
    explanation: "Cloud Functions v1 solo admitía 1 petición por instancia a la vez (concurrency = 1). Cloud Functions v2 aprovecha Cloud Run con concurrencia masiva, reduciendo drásticamente los cold starts y optimizando los costos de CPU/RAM.",
    topic: "Cloud Functions v2",
    difficulty: "avanzado"
  },
  {
    id: "fb-07",
    collectionId: "firebase",
    question: "En Firebase Authentication con Cloud Functions v2, ¿qué son las 'Blocking Functions' (`beforeUserCreated` y `beforeUserSignedIn`)?",
    options: [
      "Funciones que interceptan síncronamente el proceso de registro o inicio de sesión antes de que el usuario sea guardado en la base de datos o reciba su token, permitiendo validar dominios de email, bloquear registros no autorizados o inyectar Custom Claims inmediatamente.",
      "Funciones que bloquean la pantalla del teléfono del usuario durante 10 minutos.",
      "Scripts que detienen la ejecución de todas las demás Cloud Functions del proyecto.",
      "Reglas de firewall que filtran direcciones IP a nivel de kernel."
    ],
    correctAnswerIndex: 0,
    explanation: "A diferencia de los triggers tradicionales asíncronos (`onCreate`), las funciones de bloqueo se ejecutan de forma síncrona en el flujo de autenticación de Google Cloud Identity Platform, pudiendo rechazar la creación de cuenta lanzando un `HttpsError`.",
    topic: "Autenticación y Blocking Functions",
    difficulty: "avanzado"
  },
  {
    id: "fb-08",
    collectionId: "firebase",
    question: "¿Cuál es la regla fundamental de escalabilidad de escrituras en Cloud Firestore conocida como el límite de contención ('1 write per second limit per document')?",
    options: [
      "Intentar escribir o actualizar el mismo documento individual a una tasa superior a 1 escritura por segundo genera contención severa y errores de timeout; para contadores globales de alta frecuencia se debe implementar un patrón de 'Contador Distribuido' (Distributed Counter) repartido en múltiples shards.",
      "Un usuario solo puede enviar un formulario cada 60 segundos.",
      "Firestore apaga automáticamente la base de datos si se supera 1 MB/s de tráfico de red.",
      "El límite de escritura se aplica únicamente si el servidor se encuentra en la región de Tokio."
    ],
    correctAnswerIndex: 0,
    explanation: "Debido a la replicación distribuida de quórum basada en Paxos/Spanner, escribir repetidamente en una misma clave causa bloqueos de concurrencia. Un contador distribuido con $N$ subdocumentos multiplica la tasa máxima por $N$.",
    topic: "Firestore Escalabilidad y Contención",
    difficulty: "intermedio"
  },
  {
    id: "fb-09",
    collectionId: "firebase",
    question: "¿En qué se diferencia fundamentalmente Firebase Realtime Database (RTDB) de Cloud Firestore en cuanto a estructura de datos y consultas?",
    options: [
      "RTDB almacena los datos como un único árbol gigante monolítico en formato JSON con consultas profundas que descargan subárboles completos por defecto; Firestore organiza los datos en colecciones y documentos con consultas 'shallow' (planas) que nunca descargan subcolecciones anidadas.",
      "RTDB es una base de datos relacional compatible con SQL ANSI-92, mientras que Firestore es NoSQL.",
      "Firestore solo funciona en dispositivos iOS, mientras que RTDB es multiplataforma.",
      "RTDB requiere servidores dedicados y no es serverless."
    ],
    correctAnswerIndex: 0,
    explanation: "En RTDB solicitar `/usuarios` descarga a todos los usuarios junto con todos sus posts, mensajes y configuraciones anidadas. En Firestore las consultas son superficiales: consultar `/usuarios` solo devuelve los campos del documento usuario, ignorando subcolecciones.",
    topic: "Firestore vs Realtime Database",
    difficulty: "intermedio"
  },
  {
    id: "fb-10",
    collectionId: "firebase",
    question: "En las Reglas de Seguridad de Cloud Firestore, ¿cuántas llamadas a funciones externas de lectura (`get()` o `exists()`) se permiten como máximo por cada evaluación de regla?",
    options: [
      "Un máximo de 10 llamadas combinadas entre `get()` y `exists()` por solicitud para prevenir degradaciones de rendimiento y facturación descontrolada.",
      "Un máximo de 100 llamadas.",
      "Exactamente 1 llamada.",
      "Ilimitadas, siempre que las llamadas se realicen dentro de un bucle `for`."
    ],
    correctAnswerIndex: 0,
    explanation: "Firestore limita estrictamente a 10 las lecturas externas en reglas. Cada llamada `get()` o `exists()` cuenta además como una lectura facturable en la cuota mensual de Firestore.",
    topic: "Reglas de Seguridad y Límites",
    difficulty: "avanzado"
  },
  {
    id: "fb-11",
    collectionId: "firebase",
    question: "¿Cómo previene la directiva `hasOnly()` en las reglas de seguridad de Firestore que un usuario malicioso inyecte campos no autorizados durante un `create` o `update`?",
    options: [
      "Verifica que el mapa de datos entrante solo contenga los nombres de campos explícitamente permitidos: `request.resource.data.keys().hasOnly(['titulo', 'cuerpo', 'fecha'])`.",
      "Comprueba que el documento no contenga valores de tipo booleano.",
      "Fuerza a que todos los campos del documento tengan exactamente el mismo valor de texto.",
      "Cifra los campos adicionales con una contraseña provista por el cliente."
    ],
    correctAnswerIndex: 0,
    explanation: "`hasOnly` es una de las defensas más críticas auditadas por seguridad: sin esta comprobación, un atacante podría inyectar campos como `role: 'admin'` o `isVerified: true` en una llamada directa de cliente.",
    topic: "Seguridad y Auditoría de Reglas",
    difficulty: "intermedio"
  },
  {
    id: "fb-12",
    collectionId: "firebase",
    question: "En Firebase Cloud Messaging (FCM), ¿cuál es la diferencia entre un mensaje de tipo 'Notification' y un mensaje de tipo 'Data' (Data-Only Payload)?",
    options: [
      "Los mensajes 'Notification' son gestionados automáticamente por el subsistema del SO mostrando una alerta visual directamente cuando la app está en segundo plano; los mensajes 'Data' entregan el payload JSON crudo directamente al código de la aplicación (en primer o segundo plano) para procesamiento silencioso personalizado.",
      "Los mensajes Data solo se pueden enviar a través de mensajes de texto SMS.",
      "Los mensajes Notification solo admiten hasta 16 caracteres de longitud.",
      "Los mensajes Data requieren una suscripción de pago a Google Workspace."
    ],
    correctAnswerIndex: 0,
    explanation: "Los mensajes Data-only otorgan control total al desarrollador: despiertan el worker o servicio en segundo plano (e.g. `onBackgroundMessage`) para sincronizar bases de datos locales o emitir notificaciones personalizadas sin que el SO fuerce la UI por defecto.",
    topic: "Notificaciones y FCM",
    difficulty: "intermedio"
  },
  {
    id: "fb-13",
    collectionId: "firebase",
    question: "¿Para qué sirve el archivo `firebase-messaging-sw.js` en una aplicación Web que integra notificaciones push con Firebase?",
    options: [
      "Es el Service Worker estándar que escucha eventos `push` y `notificationclick` en segundo plano en el navegador web cuando la pestaña está cerrada o inactiva, gestionando la recepción y visualización de notificaciones push.",
      "Un script de WebAssembly que compila la base de datos SQLite en el navegador.",
      "Un archivo de configuración de TypeScript que compila las dependencias de npm.",
      "Un certificado SSL autofirmado para el dominio localhost."
    ],
    correctAnswerIndex: 0,
    explanation: "En la web moderna, recibir notificaciones con la página cerrada solo es posible mediante un Service Worker. Firebase Messaging busca y registra automáticamente este archivo en la raíz del dominio público para despachar eventos push.",
    topic: "Web Push y Service Workers",
    difficulty: "básico"
  },
  {
    id: "fb-14",
    collectionId: "firebase",
    question: "¿Cuál es la función del 'Firebase Emulator Suite' en el flujo de desarrollo moderno?",
    options: [
      "Permite ejecutar emuladores locales completos e interconectados de Firestore, Auth, Functions, Storage, Realtime Database y Hosting en la máquina de desarrollo con una UI web interactiva, permitiendo desarrollo offline y pruebas unitarias rápidas con coste de facturación cero.",
      "Simula la pantalla de un teléfono Android en un televisor mediante Chromecast.",
      "Convierte la aplicación en un paquete ejecutable para Nintendo Switch.",
      "Descarga una copia completa de toda la nube de Google Cloud en un pendrive USB."
    ],
    correctAnswerIndex: 0,
    explanation: "`firebase emulators:start` es el pilar de la productividad en Firebase: permite escribir y validar reglas de seguridad, Cloud Functions y flujos de frontend sin tocar el proyecto cloud de producción ni generar costes de lectura/escritura.",
    topic: "Herramientas y Emulator Suite",
    difficulty: "básico"
  },
  {
    id: "fb-15",
    collectionId: "firebase",
    question: "En Cloud Storage for Firebase, ¿cómo se concede acceso a un archivo privado a un cliente sin autenticar mediante una 'Download URL'?",
    options: [
      "Generando una URL pública HTTPS que incluye un token criptográfico revocable de descarga (`token=UUID`); si el token se revoca o se regenera en la consola o API, la URL previa deja de funcionar de inmediato.",
      "Abriendo el bucket completo para que cualquier persona del mundo pueda leerlo con `allow read: if true;`.",
      "Enviando el archivo adjunto en un correo electrónico cifrado por PGP.",
      "Compartiendo la contraseña del proyecto de Google Cloud con el cliente."
    ],
    correctAnswerIndex: 0,
    explanation: "Las Download URLs de Firebase son URLs firmadas respaldadas por tokens integrados en los metadatos del objeto en Google Cloud Storage. Permiten servir imágenes o archivos multimedia sin exponer el bucket completo a lecturas públicas no restringidas.",
    topic: "Cloud Storage for Firebase",
    difficulty: "intermedio"
  },
  {
    id: "fb-16",
    collectionId: "firebase",
    question: "¿Qué diferencia existe entre el clásico 'Firebase Hosting' y el moderno 'Firebase App Hosting' introducido recientemente por Google?",
    options: [
      "Firebase Hosting tradicional está especializado en sitios estáticos y SPAs alojadas en una CDN global con rewrites a Cloud Functions; Firebase App Hosting está diseñado para aplicaciones full-stack modernas con Server-Side Rendering (SSR) dinámico (como Next.js y Angular) integradas con Cloud Run.",
      "App Hosting solo funciona en servidores Apache antiguos.",
      "Firebase Hosting tradicional cobra por cada letra del código HTML desplegado.",
      "App Hosting prohíbe el uso de certificados SSL personalizados."
    ],
    correctAnswerIndex: 0,
    explanation: "Firebase App Hosting se integra con repositorios GitHub y detecta automáticamente frameworks modernos como Next.js, desplegando el backend de SSR en contenedores gestionados de Cloud Run y los assets estáticos en la CDN global.",
    topic: "Hosting y App Hosting",
    difficulty: "intermedio"
  },
  {
    id: "fb-17",
    collectionId: "firebase",
    question: "En Firebase Remote Config, ¿cuál es la mejor práctica recomendada para actualizar parámetros dinámicos sin causar tirones o cambios bruscos de interfaz ante los ojos del usuario?",
    options: [
      "Implementar la estrategia de 'Fetch and Activate' en momentos controlados del ciclo de vida (como el arranque inicial o transiciones de pantalla) o utilizar los listeners en tiempo real (`onConfigUpdate`) para aplicar actualizaciones sutiles que no destruyan la experiencia en curso.",
      "Descargar los nuevos parámetros cada 100 milisegundos mediante un temporizador infinito.",
      "Reiniciar forzosamente la aplicación del usuario cada vez que se publica un cambio en la consola.",
      "Borrar todos los datos de la base de datos local SQLite al recibir un parámetro nuevo."
    ],
    correctAnswerIndex: 0,
    explanation: "Llamar a `fetchAndActivate()` en mitad de una interacción del usuario puede provocar saltos visuales desconcertantes (e.g. un botón cambia de color o de lugar). Se deben definir valores por defecto en la app (`setDefaults`) y activar los cambios en momentos seguros.",
    topic: "Remote Config y Feature Flags",
    difficulty: "básico"
  },
  {
    id: "fb-18",
    collectionId: "firebase",
    question: "¿Cómo optimiza Firebase Crashlytics el análisis de errores fatales en aplicaciones Android y iOS compiladas en modo Release?",
    options: [
      "Mediante la subida automatizada de archivos de símbolos de depuración (`dSYM` en iOS y archivos de mapeo `mapping.txt` de ProGuard/R8 en Android) para desofuscar y traducir los stack traces ilegibles a líneas y métodos concretos del código fuente original.",
      "Grabando vídeo continuo de la pantalla del usuario y subiéndolo a YouTube.",
      "Cifrando los reportes de error con un algoritmo cuántico no reversible.",
      "Enviando un mensaje SMS al teléfono del desarrollador principal cada vez que ocurre un crash."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin los archivos de símbolos (dSYM/mapping.txt), los reportes de Crashlytics solo mostrarían direcciones de memoria hexadecimales o clases ofuscadas como `a.b.c()`. El proceso de symbolication traduce esos volcados al código fuente comprensible.",
    topic: "Crashlytics y Desofuscación",
    difficulty: "intermedio"
  },
  {
    id: "fb-19",
    collectionId: "firebase",
    question: "En Cloud Firestore, ¿qué es un 'Índice Compuesto' (Composite Index) y en qué situaciones es estrictamente obligatorio crearlo?",
    options: [
      "Un índice que indexa múltiples campos combinados; es obligatorio cuando una consulta contiene filtros de igualdad combinados con filtros de rango en campos diferentes, o cuando se combinan filtros con cláusulas de ordenación (`orderBy`) sobre campos distintos.",
      "Un índice que traduce los textos a tres idiomas simultáneamente.",
      "Un índice que comprime los datos utilizando el algoritmo LZ4.",
      "Un índice que solo se puede crear desde la terminal de comandos de Google Cloud."
    ],
    correctAnswerIndex: 0,
    explanation: "Por defecto, Firestore crea índices de un solo campo automáticamente. Pero consultas como `where('categoria', '==', 'tech').where('precio', '>', 50).orderBy('fecha', 'desc')` requieren un índice compuesto explícito; de lo contrario, el SDK arroja un error con un enlace directo para crearlo.",
    topic: "Firestore Índices Compuestos",
    difficulty: "intermedio"
  },
  {
    id: "fb-20",
    collectionId: "firebase",
    question: "En Firebase Performance Monitoring, ¿qué es una 'Traza Personalizada' (Custom Trace) y qué tipo de métricas permite registrar?",
    options: [
      "Un temporizador de código que mide la duración entre un `trace.start()` y un `trace.stop()`, permitiendo adjuntar métricas personalizadas (`putMetric`) y atributos para medir operaciones de negocio (e.g. tiempo de carga de un nivel en un juego o renderizado de checkout).",
      "Un archivo de log que registra las pulsaciones de teclado del usuario.",
      "Una herramienta que monitoriza el consumo de electricidad del centro de datos.",
      "Un script que cuenta el número de líneas comentadas en el código fuente."
    ],
    correctAnswerIndex: 0,
    explanation: "Mientras que Performance Monitoring rastrea tiempos de arranque de app y peticiones HTTP de forma automática, las Custom Traces permiten instrumentar operaciones de dominio específicas para detectar cuellos de botella reales en la experiencia de usuario.",
    topic: "Performance Monitoring",
    difficulty: "básico"
  },
  {
    id: "fb-21",
    collectionId: "firebase",
    question: "¿Qué funcionalidad proporciona 'Firebase App Check' en la protección de recursos backend (Firestore, Cloud Functions, Cloud Storage)?",
    options: [
      "Valida que las peticiones entrantes provengan exclusivamente de instancias auténticas y legítimas de tu aplicación (mediante proveedores de atestación de hardware como DeviceCheck/App Attest en Apple, Play Integrity en Android y reCAPTCHA Enterprise en web), bloqueando bots, emuladores maliciosos y scrapers.",
      "Comprueba la ortografía de los textos en la interfaz de usuario.",
      "Verifica que el usuario haya pagado la suscripción mensual de la app.",
      "Desactiva las capturas de pantalla en dispositivos móviles."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin App Check, un atacante que extraiga las claves de configuración de Firebase de la app web o móvil podría enviar peticiones directas a las APIs con scripts automatizados. App Check atestigua criptográficamente que la petición proviene de un binario no manipulado en un dispositivo real.",
    topic: "Seguridad y Firebase App Check",
    difficulty: "avanzado"
  },
  {
    id: "fb-22",
    collectionId: "firebase",
    question: "En Cloud Firestore, ¿qué operador de transformación permite agregar o eliminar elementos de un array de forma atómica sin necesidad de usar una transacción completa?",
    options: [
      "`FieldValue.arrayUnion()` y `FieldValue.arrayRemove()`",
      "`Array.push()` y `Array.splice()`",
      "`FieldValue.append()` y `FieldValue.delete()`",
      "`Firestore.mutateArray()`"
    ],
    correctAnswerIndex: 0,
    explanation: "`FieldValue.arrayUnion('nuevoElemento')` añade el elemento si no existe (idempotencia de conjunto) y `arrayRemove` lo elimina directamente en el servidor sin tener que leer el array completo al cliente, ahorrando lecturas y evitando condiciones de carrera.",
    topic: "Firestore Transformaciones Atómicas",
    difficulty: "básico"
  },
  {
    id: "fb-23",
    collectionId: "firebase",
    question: "¿Qué utilidad tiene `FieldValue.serverTimestamp()` al guardar una marca de tiempo en Cloud Firestore?",
    options: [
      "Asigna la hora y fecha exacta del servidor de Google en el momento en que se procesa la escritura, evitando discrepancias, trampas o incorrecciones causadas por relojes locales mal configurados en los dispositivos clientes.",
      "Calcula la hora en formato Unix timestamp de 32 bits.",
      "Convierte la fecha al calendario lunar automáticamente.",
      "Sincroniza el reloj del teléfono móvil del usuario con los satélites GPS."
    ],
    correctAnswerIndex: 0,
    explanation: "Los relojes de los clientes son inherentemente no confiables (el usuario puede cambiar la hora de su teléfono para engañar a la app). `serverTimestamp()` garantiza una fuente de tiempo canónica, justa y consistente.",
    topic: "Firestore Buenas Prácticas",
    difficulty: "básico"
  },
  {
    id: "fb-24",
    collectionId: "firebase",
    question: "En las Cloud Functions for Firebase, ¿cuál es la diferencia entre los tipos de invocación 'Callable Functions' (`onCall`) y funciones HTTP estándar (`onRequest`)?",
    options: [
      "Las 'Callable Functions' gestionan automáticamente la serialización y deserialización de JSON, validan tokens de autenticación de Firebase inyectando `request.auth`, verifican App Check y manejan tokens CORS de forma transparente; las funciones `onRequest` requieren gestionar manualmente CORS, cabeceras y decodificación de tokens.",
      "Las Callable Functions solo se pueden ejecutar desde teléfonos con conexión 5G.",
      "Las funciones `onRequest` no tienen acceso a bases de datos de Google Cloud.",
      "Son idénticas y solo difieren en el nombre del paquete importado."
    ],
    correctAnswerIndex: 0,
    explanation: "`https.onCall` está profundamente integrado con los SDKs cliente de Firebase (Web, iOS, Android, Flutter): el cliente invoca la función como si fuera un método local, pasando y recibiendo objetos nativos sin lidiar con cabeceras `Authorization: Bearer` manuales.",
    topic: "Cloud Functions Callable vs HTTP",
    difficulty: "intermedio"
  },
  {
    id: "fb-25",
    collectionId: "firebase",
    question: "En las reglas de seguridad de Firestore, ¿cómo se implementa el principio de que 'las reglas no son filtros' (Rules are not filters)?",
    options: [
      "Firestore evalúa las reglas contra la consulta del cliente (query) y no contra los documentos individuales: si la consulta tiene el potencial de retornar un solo documento que el usuario no tiene permiso de ver, la consulta entera falla de inmediato con error de permisos.",
      "Las reglas filtran silenciosamente los documentos no autorizados devolviendo solo los permitidos.",
      "Las reglas solo se evalúan cuando el usuario inicia sesión por primera vez.",
      "Las consultas deben incluir una copia en texto plano de las reglas de seguridad."
    ],
    correctAnswerIndex: 0,
    explanation: "Si una regla dice `allow read: if resource.data.public == true;` y el cliente ejecuta `collection('posts').get()` (sin filtrar por `where('public', '==', true)`), la petición falla por completo porque Firestore no inspecciona documento por documento tras la consulta.",
    topic: "Reglas de Seguridad y Consultas",
    difficulty: "intermedio"
  },
  {
    id: "fb-26",
    collectionId: "firebase",
    question: "¿Qué característica de Cloud Firestore permite que las aplicaciones continúen funcionando sin conexión a Internet (Offline Persistence)?",
    options: [
      "El SDK de Firestore incluye una caché local en disco (usando IndexedDB en la web o SQLite en móviles) que intercepta lecturas y encola escrituras locales; cuando la conexión se restablece, sincroniza y reconcilia automáticamente los cambios pendientes con la nube.",
      "Descarga una copia completa de toda la infraestructura de Google Cloud al navegador.",
      "Conecta el teléfono a la red satelital Starlink automáticamente.",
      "Desactiva las reglas de seguridad mientras la app esté desconectada."
    ],
    correctAnswerIndex: 0,
    explanation: "La persistencia offline de Firestore es transparente: los listeners reciben instantáneamente los datos de la caché local con metadatos `snapshot.metadata.fromCache: true` y las escrituras se persisten en cola hasta que vuelve la conectividad.",
    topic: "Firestore Persistencia Offline",
    difficulty: "básico"
  },
  {
    id: "fb-27",
    collectionId: "firebase",
    question: "En Firebase Extensions, ¿qué es y qué beneficio aporta instalar una extensión preconfigurada (e.g. 'Resize Images' o 'Translate Text')?",
    options: [
      "Son soluciones preempaquetadas y probadas por Google y partners que despliegan automáticamente la infraestructura necesaria (Cloud Functions, buckets, APIs) configurada mediante un archivo `extensions.yaml`, ahorrando semanas de desarrollo en tareas comunes de backend.",
      "Son plugins para el navegador Google Chrome que aceleran la carga de páginas web.",
      "Archivos de fuentes tipográficas para personalizar la consola de Firebase.",
      "Extensiones de hardware para conectar discos duros externos a los servidores de Google."
    ],
    correctAnswerIndex: 0,
    explanation: "Las Firebase Extensions implementan infraestructura como código prefabricada: por ejemplo, al subir una imagen a Storage, la extensión la redimensiona automáticamente a 3 tamaños diferentes sin escribir código de Cloud Functions a mano.",
    topic: "Firebase Extensions",
    difficulty: "básico"
  },
  {
    id: "fb-28",
    collectionId: "firebase",
    question: "¿Qué utilidad tiene la herramienta 'BigQuery Export' integrada en Firebase para proyectos a gran escala?",
    options: [
      "Sincroniza continuamente datos en streaming desde Google Analytics for Firebase, Crashlytics, Firestore o FCM directamente hacia tablas particionadas en Google BigQuery para análisis masivos con SQL, data warehousing y modelos de Machine Learning.",
      "Exporta las fotos de los usuarios a formato JPEG de 8 bits.",
      "Genera hojas de cálculo en formato Excel que se envían por correo electrónico.",
      "Elimina los datos antiguos de la base de datos cada 30 días para ahorrar espacio."
    ],
    correctAnswerIndex: 0,
    explanation: "Para consultas analíticas pesadas (e.g. '¿Cuál es el embudo de conversión de usuarios por país cruzado con caídas de Crashlytics en los últimos 2 años?'), BigQuery procesa terabytes en segundos sin sobrecargar ni pagar por lecturas en Firestore.",
    topic: "Analítica y BigQuery Export",
    difficulty: "intermedio"
  },
  {
    id: "fb-29",
    collectionId: "firebase",
    question: "¿Cómo protege Firebase Authentication contra ataques de fuerza bruta y saturación en el registro de usuarios por SMS (Phone Auth)?",
    options: [
      "Exigiendo verificación obligatoria mediante reCAPTCHA o integración con SafetyNet/Play Integrity antes de permitir el envío del código SMS, además de cuotas estrictas de envío de SMS por número de teléfono y por dirección IP.",
      "Cobrando 1 dólar por cada SMS enviado al usuario.",
      "Permitiendo registrarse únicamente a números telefónicos de Estados Unidos.",
      "Desactivando el servicio de autenticación durante los fines de semana."
    ],
    correctAnswerIndex: 0,
    explanation: "El fraude de SMS (SMS toll fraud) es un vector de ataque común donde atacantes usan scripts para inflar facturas de SMS. Firebase mitiga esto forzando tokens de atestación de dispositivo y reCAPTCHA antes de disparar el SMS de verificación.",
    topic: "Seguridad en Autenticación Telefónica",
    difficulty: "intermedio"
  },
  {
    id: "fb-30",
    collectionId: "firebase",
    question: "En el ciclo de vida de desarrollo de Cloud Functions, ¿cómo se gestionan de forma segura las claves de API secretas (como una clave de OpenAI o Stripe) en Cloud Functions v2?",
    options: [
      "Utilizando la integración nativa con Google Cloud Secret Manager mediante la directiva `{ secrets: [stripeSecret] }` y la función `defineSecret()`, inyectando el valor descifrado directamente en tiempo de ejecución sin exponerlo en texto plano en variables de entorno ni en el código fuente.",
      "Escribiendo la clave secreta directamente en el archivo `package.json`.",
      "Subiendo la clave como un archivo de texto público en Firebase Hosting.",
      "Almacenando la clave en el LocalStorage del navegador de los usuarios administradores."
    ],
    correctAnswerIndex: 0,
    explanation: "`defineSecret` almacena la clave con cifrado de grado militar en Secret Manager. Solo las funciones explícitamente autorizadas en su configuración reciben acceso en memoria a la clave durante su ejecución.",
    topic: "Seguridad y Gestión de Secretos en Cloud Functions",
    difficulty: "avanzado"
  }
];
