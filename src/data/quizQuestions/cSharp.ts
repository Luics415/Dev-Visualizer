import type { QuizQuestion } from "@/data/quizTypes";

export const cSharpQuestions: QuizQuestion[] = [
  {
    id: "csharp-q-01",
    collectionId: "c-sharp",
    question: "¿Cómo clasifica el Garbage Collector (GC) de .NET la memoria administrada y cuál es el rol de cada generación?",
    options: [
      "Divide la memoria en 10 niveles concéntricos donde cada nivel corresponde a un namespace diferente.",
      "Utiliza 3 generaciones para objetos efímeros y de larga vida (Gen 0 para objetos nuevos, Gen 1 como búfer intermedio, Gen 2 para larga vida), más LOH (Large Object Heap) y POH (Pinned Object Heap).",
      "Asigna memoria linealmente sin generaciones, liberando bloques secuenciales al terminar cada hilo de ejecución.",
      "Delega toda la administración al kernel de Windows mediante llamadas directas a GlobalAlloc."
    ],
    correctAnswerIndex: 1,
    explanation: "El GC de .NET es generacional: Gen 0 almacena objetos recién creados de corta vida; los que sobreviven promocionan a Gen 1 y luego a Gen 2. Objetos >= 85,000 bytes van al LOH para evitar costosas compactaciones, y objetos anclados van al POH.",
    topic: "CLR y Garbage Collection",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-02",
    collectionId: "c-sharp",
    question: "¿Cuál es la diferencia de asignación y semántica entre un 'struct' (value type) y una 'class' (reference type) en C#?",
    options: [
      "Las clases siempre se asignan en la pila y los structs siempre en el disco duro.",
      "Un struct reside directamente donde se declara (comúnmente la pila o dentro de otro objeto) y se pasa por copia de valor, mientras que una class se asigna en el heap administrado y se pasa por referencia a un puntero.",
      "Un struct no admite métodos ni constructores parametrizados.",
      "Las clases no pueden heredar de interfaces en C# moderno."
    ],
    correctAnswerIndex: 1,
    explanation: "Los 'value types' (structs, enums) almacenan su valor directamente en el contexto donde se declaran (generalmente la pila de llamadas) y sus asignaciones crean copias completas. Los 'reference types' (class, record class, string) residen en el heap y se manipulan mediante referencias.",
    topic: "Sistema de Tipos",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-03",
    collectionId: "c-sharp",
    question: "¿Qué ventaja ofrece 'ValueTask<T>' frente a 'Task<T>' en métodos asíncronos de alto rendimiento?",
    options: [
      "Permite ejecutar código en la GPU sin requerir librerías externas.",
      "Es un struct que evita la asignación de memoria en el heap cuando la operación asíncrona se completa de forma sincrónica (por ejemplo, desde un caché en memoria).",
      "Permite esperar tareas en paralelo sin necesidad de 'Task.WhenAll'.",
      "Fuerza a que el método se ejecute en el hilo principal de la interfaz gráfica."
    ],
    correctAnswerIndex: 1,
    explanation: "Task<T> es una clase y siempre asigna un objeto en el heap administrado. ValueTask<T> es un struct (value type); si el resultado ya está disponible sincrónicamente, no incurre en ninguna asignación de memoria, aliviando la presión sobre el Garbage Collector.",
    topic: "Asincronía y Tareas",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-04",
    collectionId: "c-sharp",
    question: "¿Por qué se recomienda invocar '.ConfigureAwait(false)' en código de bibliotecas y capas de infraestructura?",
    options: [
      "Porque cancela la ejecución si la operación demora más de 10 milisegundos.",
      "Para evitar reanudar la ejecución en el 'SynchronizationContext' original, previniendo posibles deadlocks y eliminando sobrecostos innecesarios de cambio de contexto.",
      "Para forzar que el GC recolecte la tarea antes de retornar el resultado.",
      "Porque convierte la llamada en una invocación sincrónica bloqueante."
    ],
    correctAnswerIndex: 1,
    explanation: "En entornos con SynchronizationContext (WPF, WinForms, ASP.NET clásico), esperar sincrónicamente sin ConfigureAwait(false) puede provocar deadlocks. En bibliotecas, ConfigureAwait(false) desvincula la continuación del contexto de origen, mejorando rendimiento.",
    topic: "Asincronía y Tareas",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-05",
    collectionId: "c-sharp",
    question: "¿Qué representa 'Span<T>' y por qué es una revolución en la gestión de memoria en C# moderno?",
    options: [
      "Una lista enlazada distribuida que serializa objetos a formato JSON automáticamente.",
      "Un ref struct que proporciona una vista contigua y tipada de memoria arbitraria (stack, heap administrado o memoria nativa) con seguridad de tipos y cero asignaciones intermedias.",
      "Un contenedor que almacena cadenas cifradas con curvas elípticas en el sistema operativo.",
      "Una extensión de Entity Framework para consultar tablas particionadas en bases de datos relacionales."
    ],
    correctAnswerIndex: 1,
    explanation: "Span<T> es un 'ref struct' que puede apuntar a cualquier bloque contiguo de memoria (arrays administrados, punteros nativos o memoria en la pila con stackalloc) garantizando bounds-checking sin asignaciones heap (zero-allocation slicing).",
    topic: "Rendimiento y Memoria",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-06",
    collectionId: "c-sharp",
    question: "¿Qué ocurre internamente durante el proceso de 'Boxing' y 'Unboxing' en C#?",
    options: [
      "Se comprime un archivo ejecutable mediante compresión zip al compilar.",
      "Boxing envuelve un value type dentro de un objeto en el heap administrado; Unboxing extrae explícitamente el valor tipado desde la instancia del heap de vuelta a la pila.",
      "Se ejecuta una conversión de código C# a binario nativo mediante RyuJIT.",
      "Se asigna un hilo exclusivo del ThreadPool para atender solicitudes HTTP."
    ],
    correctAnswerIndex: 1,
    explanation: "El Boxing asigna una nueva caja en el heap administrado y copia el contenido del tipo por valor dentro de ella, generando presión en el Garbage Collector. El Unboxing verifica el tipo de la caja y copia el valor a una variable de tipo por valor en la pila.",
    topic: "Sistema de Tipos",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-07",
    collectionId: "c-sharp",
    question: "¿Cuál es el propósito del patrón 'IDisposable' y de la llamada 'GC.SuppressFinalize(this)'?",
    options: [
      "Reiniciar el servidor web cuando la memoria del proceso excede el 90%.",
      "Liberar determinísticamente recursos no administrados (handles de SO, sockets, archivos) y ordenar al Garbage Collector que omita la ejecución de la cola de finalización para ese objeto.",
      "Impedir que otras clases hereden de la clase actual mediante herencia sellada.",
      "Eliminar los datos del usuario en la base de datos tras cerrar sesión."
    ],
    correctAnswerIndex: 1,
    explanation: "IDisposable permite liberar recursos no administrados de forma inmediata mediante Dispose(). Invocar GC.SuppressFinalize(this) le dice al CLR que el recurso ya fue limpiado manualmente, evitando el sobrecosto de enviar el objeto a la cola de finalización de Gen 2.",
    topic: "Ciclo de Vida y Limpieza",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-08",
    collectionId: "c-sharp",
    question: "¿Cómo se manifiesta la ejecución diferida (deferred execution) en consultas LINQ con 'IEnumerable<T>'?",
    options: [
      "La consulta se ejecuta en segundo plano tan pronto como se escribe la línea de código.",
      "La consulta no procesa los datos al definirse, sino únicamente cuando se itera sobre ella (ej. con foreach, ToList() o Count()), evaluando cada elemento bajo demanda mediante yield return.",
      "Los datos se almacenan temporalmente en el registro de Windows hasta que se invoca SaveChanges().",
      "El compilador transforma la consulta en un procedimiento almacenado de SQL antes de ejecutar el binario."
    ],
    correctAnswerIndex: 1,
    explanation: "Las operaciones de LINQ sobre IEnumerable<T> (como Where o Select) son perezosas: la máquina de estados iteradora solo evalúa los elementos a medida que el consumidor los solicita, ahorrando cómputo si la iteración se detiene anticipadamente.",
    topic: "LINQ y Colecciones",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-09",
    collectionId: "c-sharp",
    question: "¿Qué diferencia semántica introduce un 'record' (o 'record class') frente a una 'class' convencional en C#?",
    options: [
      "Los records no pueden tener métodos ni propiedades públicas.",
      "Los records implementan por defecto igualdad basada en valores (value-based equality), inmutabilidad idiomática (init-only properties), soporte para expresión 'with' y desestructuración automática.",
      "Los records solo pueden compilarse en plataformas de 32 bits.",
      "Los records residen estrictamente en la memoria RAM compartida de hardware."
    ],
    correctAnswerIndex: 1,
    explanation: "Un record genera automáticamente igualdad por valor (dos instancias con datos idénticos son iguales con Equals y ==), ToString formateado, métodos GetHashCode deterministas y permite clonado no destructivo mediante 'objeto with { Prop = nuevoValor }'.",
    topic: "Diseño de Clases y Records",
    difficulty: "básico"
  },
  {
    id: "csharp-q-10",
    collectionId: "c-sharp",
    question: "¿En qué consiste el 'Captive Dependency Problem' al registrar servicios en el contenedor de Inyección de Dependencias de .NET?",
    options: [
      "Cuando dos servicios se llaman mutuamente provocando un desbordamiento de pila en el constructor.",
      "Cuando un servicio con ciclo de vida largo (ej. Singleton) retiene como dependencia a un servicio con ciclo de vida más corto (ej. Scoped), manteniendo viva la instancia Scoped de forma indebida.",
      "Cuando una base de datos bloquea las conexiones entrantes debido a un pool agotado.",
      "Cuando un servicio no puede deserializar paquetes JSON con campos requeridos."
    ],
    correctAnswerIndex: 1,
    explanation: "Una dependencia cautiva ocurre cuando un Singleton consume un servicio Scoped o Transient. Al permanecer vivo el Singleton durante toda la vida de la app, el servicio Scoped jamás se destruye, provocando fugas de memoria o problemas de concurrencia en contextos como DbContext.",
    topic: "Inyección de Dependencias",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-11",
    collectionId: "c-sharp",
    question: "¿Qué son los 'Source Generators' de Roslyn introducidos en .NET 5/6?",
    options: [
      "Generadores de energía para servidores en centros de datos con certificación ecológica.",
      "Componentes de compilación que inspeccionan el código del usuario durante la fase de análisis y emiten nuevo código fuente C# directamente al árbol de compilación, eliminando la necesidad de reflexión lenta en runtime.",
      "Scripts de PowerShell que descargan paquetes NuGet obsoletos.",
      "Herramientas de migración automática de código C++ a C#."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Source Generators inspeccionan la sintaxis y semántica del proyecto durante la compilación y sintetizan código C# adicional en tiempo de compilación. Esto reemplaza la reflexión dinámica pesada (System.Reflection) con código tipado de máxima velocidad (ej. serializadores JSON y regex compiladas).",
    topic: "Compilación y Roslyn",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-12",
    collectionId: "c-sharp",
    question: "¿Qué diferencia a 'IAsyncEnumerable<T>' de 'Task<IEnumerable<T>>'?",
    options: [
      "IAsyncEnumerable solo funciona en arquitecturas ARM64.",
      "IAsyncEnumerable permite transmitir y consumir elementos uno a uno de forma asíncrona a medida que están disponibles (streaming perezoso), mientras que Task<IEnumerable<T>> debe esperar a que toda la colección se complete antes de entregar el primer elemento.",
      "Task<IEnumerable<T>> no admite operaciones LINQ.",
      "IAsyncEnumerable requiere que todos los elementos se serialicen en disco antes de leerlos."
    ],
    correctAnswerIndex: 1,
    explanation: "Con IAsyncEnumerable<T> y 'await foreach', el cliente procesa cada ítem individualmente en cuanto se produce, ideal para pipelines de streaming, lecturas de bases de datos por lotes y respuestas de telemetría sin acaparar memoria en búferes completos.",
    topic: "Asincronía y Streaming",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-13",
    collectionId: "c-sharp",
    question: "¿Qué garantía ofrece la palabra clave 'lock' en C# y qué ocurre bajo el capó?",
    options: [
      "Bloquea la escritura en disco duro para evitar errores de IO concurrentes.",
      "Adquiere una exclusión mutua sobre un objeto de sincronización utilizando 'Monitor.Enter' y garantiza su liberación en un bloque finally con 'Monitor.Exit'.",
      "Pone en pausa todos los procesos del sistema operativo mientras se ejecuta el bloque.",
      "Convierte la variable compartida en un valor volátil inmutable."
    ],
    correctAnswerIndex: 1,
    explanation: "La sentencia 'lock(syncObj)' es una abreviatura sintáctica de un bloque try/finally que llama a Monitor.Enter(syncObj, ref lockTaken) y Monitor.Exit(syncObj), impidiendo que múltiples hilos ejecuten la sección crítica simultáneamente.",
    topic: "Concurrencia y Sincronización",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-14",
    collectionId: "c-sharp",
    question: "¿Por qué no se debe usar 'lock(this)' o 'lock(typeof(MyClass))' como objeto de sincronización?",
    options: [
      "Porque el compilador genera un error de sintaxis CS0103 inmediatamente.",
      "Porque tanto la instancia actual como el objeto Type son accesibles públicamente desde el exterior, permitiendo que código externo bloquee sobre el mismo objeto y provoque deadlocks incontrolables.",
      "Porque los tipos Type se recolectan automáticamente por el GC en la generación 0.",
      "Porque reduce la velocidad del procesador al desactivar la instrucción hyper-threading."
    ],
    correctAnswerIndex: 1,
    explanation: "Bloquear sobre instancias públicas o sobre el objeto Type expone el mecanismo de sincronización a código externo. La mejor práctica es utilizar un objeto privado dedicado: 'private readonly object _lock = new();' o 'Lock' en C# 13.",
    topic: "Concurrencia y Sincronización",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-15",
    collectionId: "c-sharp",
    question: "¿Qué es el 'ThreadPool' de .NET y cómo gestiona la carga de trabajo?",
    options: [
      "Una lista de servidores en la nube que balancean tráfico DNS.",
      "Un pool de hilos administrado que utiliza colas de trabajo globales y locales con un algoritmo de 'work-stealing' e inyección adaptativa de hilos por 'hill-climbing' según el rendimiento.",
      "Un contenedor Docker que ejecuta microservicios en clústeres de Kubernetes.",
      "Una base de datos en memoria para almacenar sesiones de usuarios activos."
    ],
    correctAnswerIndex: 1,
    explanation: "El ThreadPool de .NET mantiene una reserva de hilos reutilizables para evitar el alto costo de crear y destruir hilos del SO. Cada hilo del pool tiene su cola de trabajo local y puede 'robar' tareas de otras colas (work-stealing), ajustando dinámicamente el total de hilos con hill-climbing.",
    topic: "CLR y Multithreading",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-16",
    collectionId: "c-sharp",
    question: "¿Qué son los 'Nullable Reference Types' (NRT) habilitados con '<Nullable>enable</Nullable>' en C#?",
    options: [
      "Un cambio en el runtime que transforma todos los punteros nulos en ceros binarios.",
      "Una característica del compilador en tiempo de compilación que emite advertencias estáticas sobre posibles desreferencias de valores nulos sin alterar el comportamiento binario del runtime.",
      "Un paquete NuGet externo que sustituye los strings por tipos Option de F#.",
      "Un sistema de formateo de excepciones para depurar fallos en Visual Studio."
    ],
    correctAnswerIndex: 1,
    explanation: "Los tipos de referencia anulables son una verificación estática del compilador. Si un string puede ser null, debe declararse 'string?'; si se declara 'string', el compilador advierte de posibles violaciones de no-nulidad sin alterar el CLR subyacente.",
    topic: "Sistema de Tipos y Nulabilidad",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-17",
    collectionId: "c-sharp",
    question: "¿Cuál es la diferencia entre 'System.Threading.Channels' y una colección 'BlockingCollection<T>'?",
    options: [
      "BlockingCollection utiliza WebSockets mientras que Channels utiliza named pipes.",
      "Channels está completamente diseñado para flujos asíncronos de alto rendimiento y cero asignaciones (async/await nativo sin bloqueo de hilos), mientras que BlockingCollection utiliza primitivas de sincronización bloqueantes de hilos.",
      "BlockingCollection solo admite tipos primitivos enteros.",
      "Channels solo puede utilizarse en aplicaciones de consola."
    ],
    correctAnswerIndex: 1,
    explanation: "System.Threading.Channels proporciona colas concurrentes no bloqueantes (asíncronas) ideales para patrones productor-consumidor en arquitecturas asíncronas modernas, superando ampliamente a las estructuras bloqueantes clásicas de hilos.",
    topic: "Concurrencia y Streaming",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-18",
    collectionId: "c-sharp",
    question: "¿Qué ventaja tiene usar 'ArrayPool<T>.Shared' en operaciones de procesamiento de datos por lotes?",
    options: [
      "Duplica el tamaño del disco duro mediante desduplicación de sectores.",
      "Alquila arreglos reutilizables del pool en lugar de asignar y desechar buffers continuos en el heap, reduciendo drásticamente las pausas del Garbage Collector.",
      "Permite enviar arrays por Bluetooth a otros dispositivos de la red.",
      "Convierte arrays en matrices tridimensionales sin necesidad de bucles anidados."
    ],
    correctAnswerIndex: 1,
    explanation: "ArrayPool<T>.Shared permite alquilar (Rent) y devolver (Return) arrays preasignados. Al reutilizar buffers temporales para tareas como parsing o serialización, se evita asignar memoria en el heap y se previene la fragmentación del LOH.",
    topic: "Rendimiento y Memoria",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-19",
    collectionId: "c-sharp",
    question: "¿Cómo optimiza Entity Framework Core una consulta cuando se agrega '.AsNoTracking()'?",
    options: [
      "Guarda los resultados en un archivo de texto plano en el directorio temporal.",
      "Le indica al ChangeTracker que no registre las entidades devueltas en su memoria de seguimiento, ahorrando memoria y acelerando significativamente las consultas de solo lectura.",
      "Deshabilita los índices primarios de la base de datos durante la consulta.",
      "Convierte la consulta SQL en un procedimiento en lenguaje C nativo."
    ],
    correctAnswerIndex: 1,
    explanation: "Por defecto, EF Core rastrea las entidades cargadas para detectar mutaciones y enviar SaveChanges. En lecturas donde no se van a modificar los datos, .AsNoTracking() evita crear las instantáneas del ChangeTracker, reduciendo memoria y CPU.",
    topic: "Acceso a Datos y EF Core",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-20",
    collectionId: "c-sharp",
    question: "¿Qué problema resuelve la división de consultas ('AsSplitQuery') en Entity Framework Core?",
    options: [
      "Evita que la base de datos se apague durante cortes de energía.",
      "Mitiga la explosión cartesiana (cartesian explosion) provocada por múltiples JOINs en una sola consulta SQL grande, ejecutando consultas SQL separadas por cada relación incluida.",
      "Permite partir la base de datos físicamente en múltiples discos SSD.",
      "Divide un archivo PDF en páginas individuales antes de almacenarlo en la base de datos."
    ],
    correctAnswerIndex: 1,
    explanation: "Cargar múltiples colecciones hijas con .Include() en una sola consulta produce un producto cartesiano con filas duplicadas masivas. AsSplitQuery genera varias consultas independientes optimizadas, transportando drásticamente menos bytes por la red.",
    topic: "Acceso a Datos y EF Core",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-21",
    collectionId: "c-sharp",
    question: "¿Qué introduce la característica de miembros abstractos estáticos en interfaces ('static abstract') en C# 11?",
    options: [
      "Permite crear constructores privados para clases anónimas.",
      "Habilita el diseño de APIs genéricas que pueden invocar operadores matemáticos (+, -, *, /) y factorías estáticas directamente sobre parámetros de tipo genérico (Generic Math).",
      "Elimina la necesidad de utilizar interfaces en aplicaciones web.",
      "Fuerza a que todos los métodos de una clase sean estáticos por defecto."
    ],
    correctAnswerIndex: 1,
    explanation: "Con 'static abstract' en interfaces, C# 11 introdujo 'Generic Math': interfaces como INumber<T> definen operadores estáticos obligatorios, permitiendo escribir algoritmos matemáticos universales que operan sobre int, double, float o tipos numéricos propios.",
    topic: "Genéricos y Matemáticas",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-22",
    collectionId: "c-sharp",
    question: "¿Cómo funciona el pipeline de Middleware en ASP.NET Core?",
    options: [
      "Ejecuta todas las solicitudes HTTP como subprocesos independientes del shell de Linux.",
      "Encadena delegados (RequestDelegate) en una secuencia bidireccional donde cada middleware procesa la petición entrante, invoca al siguiente con 'next()' y procesa la respuesta saliente.",
      "Envía cada petición directamente al navegador sin pasar por el servidor web Kestrel.",
      "Convierte todas las llamadas REST en eventos de Apache Kafka antes de responder."
    ],
    correctAnswerIndex: 1,
    explanation: "El pipeline de ASP.NET Core es una cadena de componentes de middleware. Cada componente recibe el HttpContext, puede ejecutar lógica antes de invocar a next(), delegar el control al siguiente middleware en la cadena, y reanudar la ejecución cuando la respuesta regresa.",
    topic: "ASP.NET Core Architecture",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-23",
    collectionId: "c-sharp",
    question: "¿Qué son los 'Pattern Matching List Patterns' introducidos en C# 11?",
    options: [
      "Reglas CSS para ordenar elementos en listas no numeradas.",
      "Patrones que permiten verificar la longitud y la posición de elementos específicos dentro de arrays y listas mediante sintaxis como '[var primero, .., 10]'.",
      "Algoritmos de ordenamiento rápido para bases de datos relacionales.",
      "Un compilador alternativo para transformar listas en tuplas estáticas."
    ],
    correctAnswerIndex: 1,
    explanation: "Los 'list patterns' permiten realizar coincidencias de patrones directamente sobre secuencias: comprobar el primer elemento, usar '..' (slice pattern) para descartar o capturar un rango intermedio y verificar el elemento final de manera concisa y expresiva.",
    topic: "Pattern Matching",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-24",
    collectionId: "c-sharp",
    question: "¿Cuál es la ventaja de 'Native AOT' (Ahead-Of-Time compilation) disponible a partir de .NET 7/8?",
    options: [
      "Permite ejecutar código sin procesador físico en la nube.",
      "Compila la aplicación directamente a código máquina nativo y una biblioteca de soporte mínima, eliminando el compilador JIT y produciendo tiempos de arranque instantáneos y mínimo consumo de memoria.",
      "Aumenta el tamaño del ejecutable en un 500% para incorporar todas las versiones del CLR.",
      "Deshabilita la recolección de basura para convertir C# en C puro."
    ],
    correctAnswerIndex: 1,
    explanation: "Native AOT precompila el código C# a binario de máquina específico para el sistema operativo destino. No requiere un JIT en tiempo de ejecución, lo que ofrece arranque en milisegundos, menor huella de memoria RAM y contenedores ultra ligeros.",
    topic: "Compilación y Runtime",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-25",
    collectionId: "c-sharp",
    question: "¿Qué diferencia existe entre covarianza ('out') y contravarianza ('in') en genéricos de C#?",
    options: [
      "Covarianza se utiliza para tipos por valor y contravarianza para tipos por referencia exclusivamente.",
      "La covarianza ('out T') permite utilizar un tipo más derivado que el especificado originalmente (solo lectura/salida); la contravarianza ('in T') permite utilizar un tipo menos derivado (solo escritura/entrada).",
      "La covarianza solo se aplica en constructores y la contravarianza en destructores.",
      "No existe ninguna diferencia práctica en el compilador de C#."
    ],
    correctAnswerIndex: 1,
    explanation: "En interfaces y delegados genéricos: 'out T' (covarianza) permite asignar IEnumerable<Derived> a IEnumerable<Base> porque T solo sale de la interfaz. 'in T' (contravarianza) permite asignar IComparer<Base> a IComparer<Derived> porque T solo entra.",
    topic: "Genéricos Avanzados",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-26",
    collectionId: "c-sharp",
    question: "¿Por qué suscribirse a un 'event' de C# sin desuscribirse puede provocar fugas de memoria (memory leaks)?",
    options: [
      "Porque el evento destruye la tabla de descriptores de archivos del proceso.",
      "Porque el objeto emisor mantiene una referencia fuerte en su lista interna de invocación al delegado del suscriptor, impidiendo que el Garbage Collector recolecte al suscriptor mientras el emisor siga vivo.",
      "Porque los eventos siempre se instancian en la memoria no administrada de la tarjeta gráfica.",
      "Porque cada invocación del evento duplica la memoria del proceso indefinidamente."
    ],
    correctAnswerIndex: 1,
    explanation: "Un evento en C# mantiene un MulticastDelegate que referencia fuertemente la instancia del método suscriptor. Si el suscriptor tiene menor ciclo de vida que el emisor y no se desuscribe (-=), el emisor mantendrá vivo al suscriptor indefinidamente.",
    topic: "Eventos y Memoria",
    difficulty: "intermedio"
  },
  {
    id: "csharp-q-27",
    collectionId: "c-sharp",
    question: "¿Qué permite la directiva 'file class' introducida en C# 11?",
    options: [
      "Obliga a que la clase se guarde en formato binario cifrado en el disco duro.",
      "Restringe la visibilidad de un tipo únicamente al archivo de código fuente en el que está declarado, ideal para evitar colisiones en código generado por Source Generators.",
      "Convierte la clase en un archivo ejecutable independiente .exe.",
      "Habilita el acceso directo a puertos de red sin usar sockets."
    ],
    correctAnswerIndex: 1,
    explanation: "El modificador de acceso 'file' limita el alcance del tipo al archivo actual. Esto es esencial para generadores de código fuente que necesitan crear clases auxiliares sin riesgo de colisión de nombres con otros archivos del mismo proyecto o namespace.",
    topic: "Sintaxis Moderna",
    difficulty: "básico"
  },
  {
    id: "csharp-q-28",
    collectionId: "c-sharp",
    question: "¿Cuál es la ventaja de 'String.Create' combinado con 'Span<char>' frente a la concatenación tradicional?",
    options: [
      "Permite traducir cadenas a múltiples idiomas mediante inteligencia artificial automática.",
      "Permite inicializar y rellenar directamente el búfer interno del string de destino sin crear objetos 'string' temporales intermedios ni utilizar 'StringBuilder'.",
      "Convierte automáticamente todos los caracteres a formato ASCII de 7 bits.",
      "Almacena las cadenas en un registro estático global fuera del proceso."
    ],
    correctAnswerIndex: 1,
    explanation: "String.Create(length, state, action) reserva la memoria exacta de la cadena final y expone un Span<char> mutable para que el delegado rellene sus caracteres directamente, logrando concatenaciones y formateos complejos con cero asignaciones intermedias.",
    topic: "Rendimiento y Memoria",
    difficulty: "avanzado"
  },
  {
    id: "csharp-q-29",
    collectionId: "c-sharp",
    question: "¿Qué efecto tiene el atributo '[Flags]' aplicado sobre un 'enum' en C#?",
    options: [
      "Impide que el enum se pueda usar en sentencias switch.",
      "Indica que el enum puede tratarse como un campo de bits (máscara binaria), permitiendo combinar múltiples valores mediante operadores a nivel de bits (| y &) y formateando ToString como una lista delimitada por comas.",
      "Convierte todos los valores del enum en números negativos de 64 bits.",
      "Fuerza a que el enum se serialice obligatoriamente como un booleano."
    ],
    correctAnswerIndex: 1,
    explanation: "El atributo [Flags] señala que la enumeración representa banderas de bits combinables con OR (|) y AND (&). Afecta a métodos como ToString() y HasFlag(), mostrando la combinación legible de valores (ej. 'Read, Write') en lugar de un número entero opaco.",
    topic: "Sistema de Tipos",
    difficulty: "básico"
  },
  {
    id: "csharp-q-30",
    collectionId: "c-sharp",
    question: "¿Qué optimización introduce 'System.Text.Json' con Source Generation frente a serializadores basados en reflexión como Newtonsoft.Json?",
    options: [
      "Comprime los datos en formato .zip antes de transmitirlos por HTTP.",
      "Precalcula metadatos y código de serialización/deserialización en tiempo de compilación, eliminando llamadas lentas a Reflection, reduciendo drásticamente las asignaciones de memoria y habilitando compatibilidad con Native AOT.",
      "Convierte JSON en XML para compatibilidad con sistemas legados.",
      "Bloquea la conexión si el payload contiene caracteres no alfanuméricos."
    ],
    correctAnswerIndex: 1,
    explanation: "La generación de código en tiempo de compilación con JsonSerializerContext produce serializadores y deserializadores fuertemente tipados sin recurrir a System.Reflection. Esto acelera el throughput, minimiza el consumo de RAM y es 100% compatible con Native AOT (sin generación dinámica de IL).",
    topic: "Serialización y Rendimiento",
    difficulty: "avanzado"
  }
];
