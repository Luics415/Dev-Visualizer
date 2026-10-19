import type { QuizQuestion } from "@/data/quizTypes";

export const nodejsQuestions: QuizQuestion[] = [
  {
    id: "nodejs-q-01",
    collectionId: "nodejs",
    question: "¿En qué orden exacto recorre el Event Loop de libuv sus fases principales durante cada iteración (tick)?",
    options: [
      "Check -> Poll -> Timers -> Close -> Pending -> Idle.",
      "Timers (setTimeout/setInterval) -> Pending Callbacks (I/O diferido) -> Idle/Prepare -> Poll (espera y recuperación de I/O) -> Check (setImmediate) -> Close Callbacks.",
      "Microtasks -> Macrotasks -> Garbage Collection -> Disk I/O.",
      "Poll -> Sockets -> Timers -> Database -> Threadpool."
    ],
    correctAnswerIndex: 1,
    explanation: "El bucle de libuv ejecuta estrictamente: 1. Timers (expirados por reloj); 2. Pending callbacks (errores del sistema como ECONNREFUSED); 3. Idle/Prepare (interno); 4. Poll (espera I/O y procesa eventos); 5. Check (callbacks de setImmediate); 6. Close callbacks (ej. socket.on('close')).",
    topic: "Event Loop y Libuv",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-02",
    collectionId: "nodejs",
    question: "¿Qué operaciones de Node.js se delegan al 'Libuv Threadpool' en lugar de ejecutarse de forma asíncrona no bloqueante en el kernel mediante epoll/kqueue?",
    options: [
      "Todas las peticiones HTTP y conexiones entrantes de sockets TCP.",
      "Operaciones del sistema de archivos ('fs'), resolución DNS síncrona ('dns.lookup'), compresión ('zlib') y funciones criptográficas intensivas de CPU (como 'crypto.pbkdf2' y 'crypto.scrypt').",
      "Las llamadas a setTimeout y setInterval únicamente.",
      "El renderizado de componentes HTML en el servidor."
    ],
    correctAnswerIndex: 1,
    explanation: "Los sistemas operativos no ofrecen interfaces asíncronas no bloqueantes verdaderamente universales para operaciones de disco como sí lo hacen para sockets de red. Por eso libuv usa un pool de hilos (tamaño 4 por defecto, ajustable con UV_THREADPOOL_SIZE) para fs, dns.lookup, zlib y crypto pesado.",
    topic: "Libuv Threadpool",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-03",
    collectionId: "nodejs",
    question: "¿Cuál es la diferencia de prioridad de ejecución entre 'process.nextTick()' y 'setImmediate()'?",
    options: [
      "setImmediate se ejecuta antes que cualquier otra función en JavaScript.",
      "'process.nextTick()' no forma parte del Event Loop: se vacía en su propia cola de microtareas de máxima prioridad inmediatamente después de que concluye la operación actual antes de que el Event Loop continúe; 'setImmediate()' se ejecuta en la fase 'Check' del Event Loop.",
      "process.nextTick() se ejecuta únicamente tras 1 segundo de inactividad.",
      "Ambos son idénticos y se alternan aleatoriamente."
    ],
    correctAnswerIndex: 1,
    explanation: "nextTickQueue se procesa inmediatamente después de que termina la función en ejecución actual, incluso antes de otras microtareas y antes de que el bucle avance de fase. El abuso recursivo de process.nextTick() puede causar inanición completa (starvation) del Event Loop bloqueando todo el I/O.",
    topic: "Microtareas y Prioridad",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-04",
    collectionId: "nodejs",
    question: "¿Qué riesgo crítico de seguridad introduce el uso de 'Buffer.allocUnsafe(size)' frente a 'Buffer.alloc(size)'?",
    options: [
      "Provoca un fallo de segmentación en la máquina virtual V8 inmediatamente.",
      "'Buffer.allocUnsafe' no inicializa la memoria reservada con ceros; por lo tanto, el segmento asignado puede contener fragmentos de datos residuales confidenciales previamente alojados en la memoria del proceso (como contraseñas, tokens JWT o claves privadas), filtrándolos si no se sobrescriben.",
      "Limita el tamaño máximo del búfer a 256 bytes.",
      "Deshabilita la recolección de basura para todo el hilo de ejecución."
    ],
    correctAnswerIndex: 1,
    explanation: "Buffer.allocUnsafe es más rápido porque omite la puesta a cero de los bytes asignados. Sin embargo, si ese búfer se expone o envía sin reescribir cada byte, puede transmitir información residual de la memoria del proceso a usuarios no autorizados.",
    topic: "Buffers y Seguridad en Memoria",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-05",
    collectionId: "nodejs",
    question: "¿Cómo gestiona un 'Stream' de Node.js la contrapresión (Backpressure) cuando un Writable stream no puede seguir el ritmo de un Readable stream?",
    options: [
      "Descartando paquetes de datos aleatorios en el buffer de red.",
      "El método 'writable.write(chunk)' devuelve 'false' cuando su búfer interno excede 'highWaterMark'; el Readable stream debe pausar la lectura hasta que el Writable emita el evento 'drain' indicando que su búfer se ha vaciado.",
      "Cerrando la conexión TCP de forma unilateral.",
      "Duplicando la velocidad del procesador mediante llamadas nativas de C++."
    ],
    correctAnswerIndex: 1,
    explanation: "La contrapresión evita que la memoria del proceso crezca indefinidamente ante desequilibrios de velocidad. Si write() retorna false, el productor se pausa; una vez que el consumidor procesa los datos y vacía su búfer por debajo de highWaterMark, emite 'drain' y el flujo se reanuda.",
    topic: "Streams y Backpressure",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-06",
    collectionId: "nodejs",
    question: "¿Por qué se debe preferir 'stream.pipeline()' en lugar de 'readable.pipe(writable)' en código moderno de Node.js?",
    options: [
      "Porque pipe() no funciona con archivos en formato JSON.",
      "'readable.pipe(writable)' no destruye automáticamente todos los streams participantes ni cierra descriptores de archivo si ocurre un error a mitad de la cadena; 'pipeline()' garantiza el cierre, limpieza adecuada y propagación centralizada del callback de error para todos los streams.",
      "Porque pipeline() comprime los datos con Gzip de forma transparente.",
      "Porque pipe() fue completamente eliminado a partir de Node.js 18."
    ],
    correctAnswerIndex: 1,
    explanation: "El método tradicional pipe() deja streams colgando y recursos sin liberar ante fallos a mitad del flujo, provocando fugas de memoria y de descriptores de archivos. 'stream.pipeline()' gestiona el ciclo de vida completo y garantiza la destrucción de toda la cadena si ocurre cualquier error.",
    topic: "Streams y Manejo de Errores",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-07",
    collectionId: "nodejs",
    question: "¿Qué diferencia existe entre 'child_process.fork()' y 'worker_threads' en Node.js?",
    options: [
      "fork() solo funciona en sistemas Windows y worker_threads en Linux.",
      "fork() crea un proceso de sistema operativo completamente nuevo e independiente con su propia instancia de V8, memoria separada y comunicación por serialización IPC; 'worker_threads' crea hilos dentro del mismo proceso que comparten memoria mediante 'SharedArrayBuffer' y reducen drásticamente el consumo de RAM.",
      "worker_threads no permite ejecutar código JavaScript.",
      "fork() no permite pasar argumentos por línea de comandos."
    ],
    correctAnswerIndex: 1,
    explanation: "Un proceso hijo creado con fork() cuesta al menos 30-50 MB de memoria por instancia (requiere su propio motor V8 y libuv). Los Worker Threads ejecutan múltiples hilos de Node.js compartiendo el mismo proceso nativo, permitiendo intercambio ultrarrápido de buffers y menor huella de memoria.",
    topic: "Concurrencia: Procesos vs Threads",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-08",
    collectionId: "nodejs",
    question: "¿Qué es 'AsyncLocalStorage' (del módulo 'node:async_hooks') y qué problema de ingeniería resuelve?",
    options: [
      "Una base de datos SQLite embebida en el runtime de Node.js.",
      "Permite almacenar y propagar un estado de contexto (como un ID de correlación de traza, usuario autenticado o transacción de BD) a través de toda la cadena de callbacks y promesas asíncronas sin necesidad de pasar el contexto manualmente como parámetro en cada función.",
      "Un mecanismo para persistir variables en el LocalStorage del navegador desde el servidor.",
      "Un sistema para comprimir cadenas de texto asíncronas."
    ],
    correctAnswerIndex: 1,
    explanation: "AsyncLocalStorage es el equivalente al ThreadLocal de Java en el modelo asíncrono de Node.js. Rastrea la continuidad del contexto a lo largo de operaciones asíncronas (async/await, timers, I/O), esencial para logging distribuido y trazabilidad sin ensuciar las firmas de métodos.",
    topic: "Async Context Tracking",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-09",
    collectionId: "nodejs",
    question: "¿Por qué una aplicación en Node.js DEBE finalizar su proceso ('process.exit(1)') tras capturar un evento 'uncaughtException' en lugar de continuar operando?",
    options: [
      "Porque el sistema operativo penaliza a los servidores que no cierran con código 1.",
      "Porque una excepción no capturada indica que la aplicación ha entrado en un estado corrupto e indeterminado; reanudar la ejecución puede provocar fallos silenciosos, transacciones bancarias corruptas, fugas masivas de memoria o deadlocks.",
      "Porque V8 desinstala el módulo npm que provocó el error de forma automática.",
      "Porque la consola de comandos se bloquea de forma permanente."
    ],
    correctAnswerIndex: 1,
    explanation: "La documentación oficial de Node.js es explícita: 'uncaughtException' nunca debe usarse para reanudar la aplicación. El estado interno del proceso ya no es confiable. La práctica correcta es registrar el error, realizar un cierre limpio (graceful shutdown) y dejar que un orquestador (PM2, K8s) reinicie el contenedor.",
    topic: "Ciclo de Vida y Recuperación de Fallos",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-10",
    collectionId: "nodejs",
    question: "¿Cuál es el funcionamiento de la función envolvente (module wrapper) que Node.js aplica internamente a los archivos CommonJS (.cjs)?",
    options: [
      "Cifra el código fuente utilizando el algoritmo AES-256.",
      "Envuelve el código del archivo en una función: '(function (exports, require, module, __filename, __dirname) { ... })', proporcionando variables con alcance local al módulo e inyectando las herramientas de exportación e importación.",
      "Convierte el código en instrucciones de ensamblador x86_64.",
      "Elimina todos los comentarios y espacios en blanco antes de compilar."
    ],
    correctAnswerIndex: 1,
    explanation: "En CommonJS, las variables no son globales por defecto gracias al wrapper: Node.js evalúa el archivo envolviéndolo en una función anónima que pasa los 5 argumentos canónicos (exports, require, module, __filename, __dirname), aislando el ámbito del archivo.",
    topic: "Módulos CommonJS",
    difficulty: "básico"
  },
  {
    id: "nodejs-q-11",
    collectionId: "nodejs",
    question: "¿Qué es el 'Dual Package Hazard' en el ecosistema de paquetes de Node.js?",
    options: [
      "Comprar dos licencias de software comercial para el mismo proyecto.",
      "Cuando un paquete exporta versiones simultáneas en CJS y ESM pero un consumidor termina cargando ambas versiones en el mismo proceso (ej. una dependencia transitiva usa require() y otra usa import()), duplicando el estado singleton del paquete y rompiendo comprobaciones 'instanceof'.",
      "Un conflicto de versiones entre Node.js y npm.",
      "Un error al instalar paquetes en sistemas operativos de 32 bits."
    ],
    correctAnswerIndex: 1,
    explanation: "Dado que el cargador de CJS y el de ESM son subsistemas distintos en Node.js, cargar el mismo módulo por ambas vías genera dos instancias de módulo totalmente separadas en memoria. Si el módulo mantiene un estado global o clases exportadas, 'instanceof' falla y el estado se duplica.",
    topic: "Módulos y Dual Packages",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-12",
    collectionId: "nodejs",
    question: "¿Cómo optimiza el motor V8 el acceso a propiedades de objetos en Node.js mediante 'Hidden Classes' (Shapes) y 'Inline Caches' (IC)?",
    options: [
      "Almacenando todas las propiedades en una tabla hash global del sistema.",
      "Asigna dinámicamente un descriptor de forma (Hidden Class) a cada objeto según el orden en que se agregan sus propiedades; si múltiples objetos comparten la misma secuencia de creación, V8 memoriza el desplazamiento en memoria en la llamada (Inline Cache), accediendo a las propiedades en tiempo de acceso a memoria O(1) similar a structs en C.",
      "Convirtiendo todos los objetos en arrays numéricos indexados por ceros.",
      "Reemplazando los objetos por cadenas de texto serializadas."
    ],
    correctAnswerIndex: 1,
    explanation: "V8 no busca propiedades recorriendo un hash en cada acceso. Crea clases ocultas en función del orden de inicialización de campos. Inicializar propiedades en orden diferente crea transiciones de formas divergentes, degradando los Inline Caches a estados polimórficos o megamórficos lentos.",
    topic: "Motor V8 y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-13",
    collectionId: "nodejs",
    question: "¿Qué ocurre si una instancia de 'EventEmitter' emite un evento de tipo 'error' ('emitter.emit(\"error\", err)') y no hay ningún escuchador registrado para ese evento?",
    options: [
      "El error se registra silenciosamente en el archivo debug.log.",
      "Node.js lanza el error como una excepción no controlada en el hilo principal, imprimiendo la traza en stderr y finalizando el proceso si no se captura con process.on('uncaughtException').",
      "El emisor reintenta la emisión automáticamente cada 5 segundos.",
      "Convierte el error en una advertencia de consola informativa."
    ],
    correctAnswerIndex: 1,
    explanation: "Por convención estricta en Node.js, el evento 'error' es un caso especial en EventEmitter. Si no existe al menos un listener para 'error', Node.js asume un fallo catastrófico y lanza la excepción, abortando la ejecución.",
    topic: "EventEmitter e Idiomas de Node.js",
    difficulty: "básico"
  },
  {
    id: "nodejs-q-14",
    collectionId: "nodejs",
    question: "¿Qué es el 'Modelo de Permisos' (Permission Model) introducido experimentalmente con '--experimental-permission' en Node.js 20+?",
    options: [
      "Un sistema para gestionar roles de usuario en aplicaciones web con Passport.js.",
      "Un mecanismo de seguridad en el runtime que restringe el acceso del proceso a recursos del sistema host (como '--allow-fs-read', '--allow-fs-write', '--allow-child-process'), previniendo que dependencias maliciosas accedan arbitrariamente al disco o lancen comandos del sistema.",
      "Una directiva de compilación para validar licencias de paquetes npm.",
      "Un protocolo para solicitar contraseñas de administrador en cada petición HTTP."
    ],
    correctAnswerIndex: 1,
    explanation: "Inspirado en navegadores y Deno, el Permission Model de Node.js permite a los operadores restringir las capacidades del proceso en tiempo de ejecución: aislar qué carpetas pueden leerse/escribirse y prohibir la creación de procesos hijos para proteger la cadena de suministro.",
    topic: "Seguridad y Hardening",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-15",
    collectionId: "nodejs",
    question: "¿Por qué el uso del módulo 'node:vm' (ej. 'vm.runInNewContext') NO se considera un sandbox de seguridad confiable para ejecutar código de terceros no confiable?",
    options: [
      "Porque vm solo puede ejecutar código escrito en lenguaje Python.",
      "Porque el código dentro del contexto VM puede escapar fácilmente al ámbito del proceso anfitrión accediendo a los constructores de objetos ('this.constructor.constructor(\"return process\")().exit()'), comprometiendo completamente el sistema operativo.",
      "Porque vm reduce la velocidad del procesador en un 90%.",
      "Porque vm no admite la sintaxis moderna de ES6."
    ],
    correctAnswerIndex: 1,
    explanation: "La documentación oficial de Node.js advierte explícitamente: 'The node:vm module is not a security mechanism. Do not use it to run untrusted code'. Las cadenas de prototipos de JavaScript permiten saltar del sandbox al contexto del proceso raíz con suma facilidad.",
    topic: "Seguridad y Virtual Machines",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-16",
    collectionId: "nodejs",
    question: "¿Qué ventaja ofrece N-API (Node-API) para la creación de complementos nativos en C/C++/Rust frente a NAN (Native Abstractions for Node.js)?",
    options: [
      "Permite ejecutar código sin compilar en el procesador.",
      "Proporciona una ABI (Application Binary Interface) estable e independiente de la versión del motor V8 subyacente; un binario compilado contra Node-API puede cargarse en versiones posteriores de Node.js sin necesidad de recompilación.",
      "Obliga a que todos los addons se escriban en lenguaje ensamblador puro.",
      "Elimina el uso de memoria RAM en la máquina host."
    ],
    correctAnswerIndex: 1,
    explanation: "Históricamente, los addons nativos estaban fuertemente acoplados a la API interna de V8, obligando a recompilarlos con cada actualización mayor de Node.js. Node-API define una interfaz C estable (ABI stable): compila una vez y corre en cualquier versión moderna de Node.js.",
    topic: "Addons Nativos e Interoperabilidad",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-17",
    collectionId: "nodejs",
    question: "¿Qué impacto tiene la opción 'keepAlive: true' en un 'http.Agent' de Node.js?",
    options: [
      "Evita que la computadora entre en modo de suspensión automática.",
      "Reutiliza las conexiones TCP existentes para múltiples peticiones HTTP subsiguientes hacia el mismo host, eliminando la latencia del handshake TCP de 3 vías y la negociación TLS en cada solicitud.",
      "Mantiene el servidor web activo incluso si se corta el suministro eléctrico.",
      "Fuerza a que las peticiones se transmitan únicamente mediante WebSockets."
    ],
    correctAnswerIndex: 1,
    explanation: "Crear una nueva conexión TCP y negociar TLS para cada llamada saliente introduce una penalización masiva de tiempo y recursos. http.Agent(keepAlive: true) mantiene sockets abiertos en un pool de conexiones reutilizables, multiplicando el throughput en arquitecturas de microservicios.",
    topic: "Redes y Rendimiento HTTP",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-18",
    collectionId: "nodejs",
    question: "¿Cuál es la causa del warning 'MaxListenersExceededWarning: Possible EventEmitter memory leak detected'?",
    options: [
      "El proceso superó el límite de memoria física RAM disponible en el servidor.",
      "Se registraron más de 10 escuchadores (por defecto) en una misma instancia de EventEmitter; suele indicar que se están suscribiendo nuevos callbacks recurrentemente (ej. en cada petición HTTP) sin desuscribirse con 'removeListener()'.",
      "La aplicación intentó enviar un mensaje a más de 10 usuarios simultáneamente.",
      "Se creó un archivo con más de 10 líneas de código en la misma carpeta."
    ],
    correctAnswerIndex: 1,
    explanation: "Para ayudar a detectar fugas de memoria por listeners olvidados que retienen closures y variables en el heap, EventEmitter emite una advertencia cuando los suscriptores a un solo evento superan 10 (configurable con setMaxListeners).",
    topic: "EventEmitter y Fugas de Memoria",
    difficulty: "básico"
  },
  {
    id: "nodejs-q-19",
    collectionId: "nodejs",
    question: "¿Qué es el 'Diagnostics Channel' ('node:diagnostics_channel') introducido en Node.js?",
    options: [
      "Un canal de video para transmitir tutoriales de programación en vivo.",
      "Una API de publicación y suscripción de mensajería sincrónica interna que permite a módulos de instrumentación y trazabilidad (como OpenTelemetry) consumir métricas y eventos de diagnóstico de subsistemas de Node.js sin necesidad de aplicar parches en tiempo de ejecución (monkey-patching).",
      "Un puerto serie para conectar osciloscopios electrónicos.",
      "Un protocolo para enviar reportes de errores a los desarrolladores de V8."
    ],
    correctAnswerIndex: 1,
    explanation: "Históricamente, los agentes APM tenían que interceptar métodos modificando el prototipo de bibliotecas (monkey-patching peligroso). diagnostics_channel proporciona un canal oficial y desacoplado para emitir eventos de rendimiento con costo cero cuando no hay suscriptores activos.",
    topic: "Observabilidad y Tooling",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-20",
    collectionId: "nodejs",
    question: "¿Qué ocurre si una tarea en JavaScript ejecuta un cálculo síncrono intensivo de CPU (como calcular números primos en un bucle for de 10 segundos)?",
    options: [
      "Node.js distribuye automáticamente el bucle entre los 4 hilos del pool de libuv.",
      "Bloquea por completo el hilo principal de ejecución; el Event Loop se detiene y la aplicación deja de responder a todas las demás peticiones HTTP, eventos de red o temporizadores durante esos 10 segundos.",
      "El sistema operativo asigna una tarjeta gráfica para acelerar la computación.",
      "El motor V8 divide el proceso en dos procesos hijos independientes."
    ],
    correctAnswerIndex: 1,
    explanation: "El código JavaScript en Node.js se ejecuta en un único hilo. Una tarea computacional síncrona acapara la CPU y congela el hilo: ninguna otra petición, callback de I/O o timer podrá procesarse hasta que el cálculo finalice. Estas tareas deben delegarse a Worker Threads o microservicios externos.",
    topic: "Arquitectura Monohilo y Event Loop",
    difficulty: "básico"
  },
  {
    id: "nodejs-q-21",
    collectionId: "nodejs",
    question: "¿Cómo optimiza Node.js la asignación de pequeños objetos Buffer mediante el 'Slab Allocator'?",
    options: [
      "Comprimiendo los buffers en memoria mediante zlib.",
      "Asigna un único bloque contiguo de memoria de 8 KB ('Buffer.poolSize'); las reservas de buffers menores a la mitad de dicho tamaño se cortan directamente de esa porción compartida sin realizar costosas llamadas al asignador de memoria de bajo nivel por cada buffer individual.",
      "Guardando los buffers en el disco duro antes de enviarlos.",
      "Eliminando los buffers que no contengan caracteres legibles."
    ],
    correctAnswerIndex: 1,
    explanation: "Pedir memoria al sistema operativo para cada pequeño fragmento de datos (ej. un string de 20 bytes) saturaría al asignador. Node.js reserva un 'slab' de 8 KB y entrega sub-rebanadas (slices) del mismo buffer padre para operaciones ultraeficientes.",
    topic: "Buffers y Asignación de Memoria",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-22",
    collectionId: "nodejs",
    question: "¿Cuál es el rol del campo 'exports' en el archivo 'package.json' frente al tradicional campo 'main'?",
    options: [
      "Permite especificar a qué países se puede exportar el software legalmente.",
      "Define formalmente los puntos de entrada públicos del paquete con encapsulación estricta (impidiendo a los consumidores importar archivos internos no expuestos explícitamente) y admite exportaciones condicionales según el entorno (import, require, types, node).",
      "Establece los servidores DNS autorizados para descargar el paquete.",
      "Fuerza a que el código se compile exclusivamente con TypeScript."
    ],
    correctAnswerIndex: 1,
    explanation: "El campo 'exports' revoluciona los módulos en Node.js: introduce encapsulación real en paquetes (cualquier ruta interna no listada en exports arroja ERR_PACKAGE_PATH_NOT_EXPORTED) y permite resolver condicionalmente si el consumidor usa 'require' o 'import'.",
    topic: "Gestión de Paquetes y Módulos",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-23",
    collectionId: "nodejs",
    question: "¿Qué efecto tiene el flag de V8 '--max-old-space-size' al iniciar una aplicación Node.js?",
    options: [
      "Limita la cantidad de archivos antiguos que el sistema puede almacenar en disco.",
      "Establece el límite máximo de memoria física (en megabytes) que el Garbage Collector de V8 tiene permitido asignar para el espacio de objetos antiguos (Old Generation) antes de lanzar un error Out Of Memory (OOM).",
      "Controla la velocidad del ventilador del procesador.",
      "Determina la cantidad de días que un log puede permanecer activo en el servidor."
    ],
    correctAnswerIndex: 1,
    explanation: "Por defecto, Node.js solía limitar el heap de V8 a ~1.4 GB en arquitecturas de 64 bits. Para aplicaciones backend con grandes volúmenes de datos en memoria, '--max-old-space-size=4096' permite expandir el heap a 4 GB para evitar caídas por OOM.",
    topic: "V8 y Gestión de Memoria",
    difficulty: "básico"
  },
  {
    id: "nodejs-q-24",
    collectionId: "nodejs",
    question: "¿Qué es el 'Cluster Module' en la biblioteca estándar de Node.js y cómo distribuye las conexiones entrantes?",
    options: [
      "Un módulo para crear bases de datos distribuidas con consistencia ACID.",
      "Permite bifurcar el proceso en un proceso maestro y múltiples trabajadores (workers) que comparten el mismo puerto de red del servidor, distribuyendo las conexiones entrantes mediante un algoritmo de Round-Robin en el maestro.",
      "Una herramienta para compilar código fuente en múltiples computadoras conectadas por LAN.",
      "Un protocolo para sincronizar archivos con servicios de almacenamiento en la nube."
    ],
    correctAnswerIndex: 1,
    explanation: "Para aprovechar todos los núcleos de CPU de una máquina física sin cambiar la arquitectura monohilo de Node.js, el módulo cluster lanza un proceso hijo worker por cada núcleo. El proceso maestro escucha en el puerto de red y entrega los sockets entrantes a los trabajadores.",
    topic: "Cluster y Escalabilidad",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-25",
    collectionId: "nodejs",
    question: "¿Qué es 'Top-Level Await' en ECMAScript Modules (ESM) de Node.js y qué precaución exige su uso?",
    options: [
      "Una directiva para pausar la ejecución del sistema operativo.",
      "Permite usar la palabra clave 'await' directamente en el cuerpo raíz del módulo sin envolverlo en una función async; sin embargo, pospone la resolución de la importación para todos los módulos dependientes y puede causar bloqueos si hay dependencias circulares complejas.",
      "Un comando para reiniciar el servidor web cuando la CPU supera el 90%.",
      "Una función para esperar a que el usuario presione una tecla en la consola."
    ],
    correctAnswerIndex: 1,
    explanation: "Top-level await permite inicializaciones asíncronas limpias en el arranque de módulos (como conectar a la base de datos antes de exportar clientes). No obstante, bloquea la ejecución de los módulos que lo importan hasta que su promesa se resuelve.",
    topic: "Módulos ESM",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-26",
    collectionId: "nodejs",
    question: "¿Cómo se transfieren datos de forma compartida y sin sobrecarga de copia (zero-copy) entre hilos con 'Worker Threads'?",
    options: [
      "Enviando archivos JSON a través de sockets TCP locales.",
      "Utilizando instancias de 'SharedArrayBuffer' acompañadas de operaciones atómicas del objeto 'Atomics' para coordinar lecturas y escrituras seguras en memoria compartida sin incurrir en clonado estructurado.",
      "Escribiendo los datos en una tabla de MySQL compartida.",
      "Mediante el uso de la función postMessage sin argumentos."
    ],
    correctAnswerIndex: 1,
    explanation: "Por defecto, postMessage clona los datos usando el algoritmo Structured Clone (copia profunda). Para comunicación de ultra alto rendimiento, SharedArrayBuffer mapea la misma región física de memoria entre ambos hilos, requiriendo Atomics para evitar data races.",
    topic: "Worker Threads y Memoria Compartida",
    difficulty: "avanzado"
  },
  {
    id: "nodejs-q-27",
    collectionId: "nodejs",
    question: "¿Qué es un ataque de 'ReDoS' (Regular Expression Denial of Service) en aplicaciones Node.js?",
    options: [
      "Un ataque de fuerza bruta contra las contraseñas de los usuarios de una base de datos.",
      "La explotación de una expresión regular vulnerable con 'backtracking catastrófico' donde una entrada diseñada maliciosamente fuerza al motor regex a evaluar combinaciones exponenciales O(2^N), monopolizando el único hilo de la CPU y congelando el servidor para todos los demás clientes.",
      "La saturación de la memoria RAM mediante la creación de millones de arrays vacíos.",
      "La alteración de la configuración de red DNS en el archivo /etc/resolv.conf."
    ],
    correctAnswerIndex: 1,
    explanation: "Dado que Node.js es monohilo, una sola expresión regular con patrones ambiguos (como (a+)+$) evaluando una cadena adversaria puede consumir el 100% de la CPU durante horas. Durante ese tiempo, ningún otro evento o cliente puede ser atendido.",
    topic: "Seguridad y Rendimiento de CPU",
    difficulty: "intermedio"
  },
  {
    id: "nodejs-q-28",
    collectionId: "nodejs",
    question: "¿Cuál es la función del módulo nativo 'node:test' introducido formalmente en Node.js 18+?",
    options: [
      "Probar la velocidad de la tarjeta de red de la máquina host.",
      "Proporcionar un framework de testing nativo, tipado y de alto rendimiento (con soporte para describe, it/test, mocks, timers virtuales, suites asíncronas y reportes TAP/spec) directamente integrado en el binario sin dependencias externas pesadas como Jest o Mocha.",
      "Analizar el código fuente en busca de errores ortográficos.",
      "Medir el consumo de batería de aplicaciones móviles."
    ],
    correctAnswerIndex: 1,
    explanation: "'node:test' elimina la necesidad de configurar pesadas herramientas externas para pruebas básicas o complejas. Está altamente optimizado, admite paralelismo nativo, mocking integrado y se ejecuta directamente con el comando 'node --test'.",
    topic: "Tooling Nativo y Pruebas",
    difficulty: "básico"
  },
  {
    id: "nodejs-q-29",
    collectionId: "nodejs",
    question: "¿Qué diferencia existe entre 'path.resolve()' y 'path.join()' en el módulo 'node:path'?",
    options: [
      "path.resolve() solo funciona en sistemas Linux y path.join() en Windows.",
      "'path.join()' simplemente concatena los segmentos de ruta utilizando el separador del sistema operativo y normaliza el resultado; 'path.resolve()' procesa los segmentos de derecha a izquierda construyendo una ruta absoluta completa utilizando el directorio de trabajo actual (cwd) como raíz si no se proporciona una ruta raíz.",
      "path.resolve() comprueba si el archivo existe físicamente en el disco duro.",
      "No existe diferencia; son nombres alternativos para la misma función."
    ],
    correctAnswerIndex: 1,
    explanation: "path.join('a', 'b') resulta en 'a/b'. path.resolve('a', 'b') simula una secuencia de comandos 'cd' y produce una ruta absoluta '/home/user/proyecto/a/b'. Si un argumento intermedio empieza con '/', resolve reinicia la ruta absoluta desde ese punto.",
    topic: "Sistema de Archivos y Rutas",
    difficulty: "básico"
  },
  {
    id: "nodejs-q-30",
    collectionId: "nodejs",
    question: "¿Qué es el 'Scavenge' (Minor GC) en la recolección de basura del motor V8 de Node.js?",
    options: [
      "Un proceso que elimina archivos temporales del directorio /tmp.",
      "Un algoritmo de recolección de basura ultrarrápido basado en 'Cheney's Copying Algorithm' que opera exclusivamente en la generación joven (Semi-space From y To), copiando los objetos sobrevivientes al espacio activo y liberando de golpe el resto de la memoria con pausas sub-milisegundo.",
      "Una optimización para desfragmentar el disco duro en caliente.",
      "Un recolector que solo se ejecuta cuando la memoria del servidor alcanza el 100%."
    ],
    correctAnswerIndex: 1,
    explanation: "El recolector de V8 es generacional. La mayoría de los objetos en Node.js mueren inmediatamente. El recolector joven (Scavenge) divide el espacio joven en dos mitades (From/To): copia los objetos vivos a la otra mitad contiguamente y descarta todo lo demás en un solo paso hiperveloz.",
    topic: "V8 y Garbage Collection",
    difficulty: "avanzado"
  }
];
