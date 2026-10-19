import type { QuizQuestion } from "@/data/quizTypes";

export const javaQuestions: QuizQuestion[] = [
  {
    id: "java-q-01",
    collectionId: "java",
    question: "¿Cómo organiza la JVM la memoria del Heap en los recolectores generacionales (como G1 y Parallel GC)?",
    options: [
      "En dos zonas continuas llamadas Memoria de Usuario y Memoria del Kernel.",
      "En Young Generation (dividida en Eden y dos espacios Survivor S0 y S1) y Old/Tenured Generation, además del Metaspace para metadatos de clases fuera del heap.",
      "En una matriz de bloques estáticos de 64 KB indexados por el registro de Windows.",
      "En una pila LIFO administrada por el procesador sin intermediación del runtime."
    ],
    correctAnswerIndex: 1,
    explanation: "La hipótesis generacional dicta que la mayoría de los objetos mueren jóvenes. Por eso se asignan en Eden; los que sobreviven ciclos de Minor GC pasan por los Survivors (S0/S1) incrementando su edad hasta ser promovidos a la Old Generation.",
    topic: "JVM y Memoria",
    difficulty: "intermedio"
  },
  {
    id: "java-q-02",
    collectionId: "java",
    question: "¿Qué garantías semánticas proporciona la palabra clave 'volatile' según el Java Memory Model (JMM)?",
    options: [
      "Garantiza atomicidad completa en operaciones compuestas como 'count++'.",
      "Garantiza visibilidad inmediata entre hilos (toda lectura lee el valor más reciente escrito en memoria principal) y establece una relación happens-before impidiendo el reordenamiento de instrucciones.",
      "Bloquea la variable en el disco SSD para evitar que se pierda tras un reinicio.",
      "Convierte la variable en un objeto inmutable de solo lectura."
    ],
    correctAnswerIndex: 1,
    explanation: "'volatile' inserta barreras de memoria (memory barriers): asegura que las lecturas y escrituras no se almacenen únicamente en registros o cachés locales de CPU, garantizando visibilidad y prohibiendo reordenamientos de instrucciones, pero no provee atomicidad en operaciones compuestas.",
    topic: "JMM y Concurrencia",
    difficulty: "avanzado"
  },
  {
    id: "java-q-03",
    collectionId: "java",
    question: "¿Cómo maneja 'HashMap' las colisiones de hash a partir de Java 8 cuando un bucket supera el umbral de elementos?",
    options: [
      "Descarta los elementos más antiguos aplicando una política LRU.",
      "Cuando la lista enlazada de un bucket alcanza TREEIFY_THRESHOLD (8 elementos) y la capacidad total es >= 64, transforma la lista en un Árbol Rojo-Negro balanceado (TreeNode), reduciendo la búsqueda de O(N) a O(log N).",
      "Duplica el tamaño del heap inmediatamente mediante una llamada al sistema.",
      "Lanza una excepción irrecuperable ConcurrentModificationException."
    ],
    correctAnswerIndex: 1,
    explanation: "Para mitigar ataques de degradación por colisiones intencionales (HashDoS), Java 8 convierte las listas enlazadas largas de un bucket en árboles rojo-negro cuando la cuenta llega a 8, garantizando que el peor caso sea O(log N) en lugar de O(N).",
    topic: "Estructuras de Datos",
    difficulty: "intermedio"
  },
  {
    id: "java-q-04",
    collectionId: "java",
    question: "¿Cuál es la diferencia fundamental entre los Virtual Threads (Project Loom, Java 21) y los Platform Threads tradicionales?",
    options: [
      "Los Virtual Threads solo se ejecutan en microprocesadores cuánticos.",
      "Los Platform Threads son hilos 1:1 del sistema operativo con stacks fijos de ~1 MB; los Virtual Threads son hilos ultraligeros administrados por la JVM (con stacks dinámicos en el heap) montados sobre Carrier Threads, permitiendo millones de hilos concurrentes sin bloquear hilos del SO en operaciones de I/O.",
      "Los Virtual Threads no permiten ejecutar código con sentencias try-catch.",
      "Los Virtual Threads se ejecutan de forma exclusiva en el preprocesador antes del bytecode."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Virtual Threads desacoplan la concurrencia de la aplicación de los hilos del kernel. Cuando un virtual thread se bloquea en una operación de I/O de red o disco, la JVM lo desmonta del carrier thread subyacente, permitiendo que otro hilo virtual continúe ejecutándose sin consumo de recursos del SO.",
    topic: "Virtual Threads (Java 21)",
    difficulty: "avanzado"
  },
  {
    id: "java-q-05",
    collectionId: "java",
    question: "¿Por qué agrupar Virtual Threads en un pool de conexiones (Thread Pool) se considera un antipatrón en Java moderno?",
    options: [
      "Porque los pools de hilos virtuales consumen toda la batería del procesador.",
      "Porque los Virtual Threads son tan baratos de crear y destruir (casi sin sobrecosto de memoria) que están diseñados para crearse por tarea ('un hilo por petición') y descartarse al finalizar, en lugar de reutilizarse en pools.",
      "Porque la JVM arroja un error IllegalThreadStateException si se crea un ExecutorService para ellos.",
      "Porque los Virtual Threads no admiten llamadas a bases de datos relacionales."
    ],
    correctAnswerIndex: 1,
    explanation: "Los pools de hilos existían para amortizar el altísimo costo de creación y memoria (~1 MB) de los hilos del SO. Con Virtual Threads (pesan pocos bytes), el modelo idiomático es 'task-per-thread': crear un hilo virtual por tarea y dejarlo morir.",
    topic: "Virtual Threads (Java 21)",
    difficulty: "intermedio"
  },
  {
    id: "java-q-06",
    collectionId: "java",
    question: "¿Qué establece el principio PECS (Producer Extends, Consumer Super) al utilizar comodines en genéricos de Java?",
    options: [
      "Que los productores deben ejecutarse en hilos secundarios y los consumidores en el hilo principal.",
      "Si una colección genérica solo produce valores para lectura se debe usar '? extends T' (covarianza); si la colección solo consume/recibe valores para escritura se debe usar '? super T' (contravarianza).",
      "Que los métodos que producen excepciones deben heredar de Error.",
      "Que las clases con constructores privados deben consumir parámetros de tipo Object."
    ],
    correctAnswerIndex: 1,
    explanation: "PECS es la regla mnemotécnica de Joshua Bloch para comodines acotados: use '? extends T' cuando lea datos de la estructura (Producer Extends), y '? super T' cuando escriba o agregue elementos a la estructura (Consumer Super).",
    topic: "Genéricos y Tipos",
    difficulty: "avanzado"
  },
  {
    id: "java-q-07",
    collectionId: "java",
    question: "¿Por qué el recolector ZGC (Z Garbage Collector) puede garantizar pausas de Stop-The-World (STW) menores a un milisegundo?",
    options: [
      "Porque nunca libera memoria y deja que el sistema operativo maneje el swap.",
      "Porque realiza casi todo el trabajo (marcado, reubicación y compactación) concurrentemente con los hilos de la aplicación mediante 'colored pointers' (bits de metadatos en las direcciones de 64 bits) y 'load barriers'.",
      "Porque detiene la ejecución del programa solo durante las horas de la madrugada.",
      "Porque solo funciona con aplicaciones que usan menos de 512 MB de memoria RAM."
    ],
    correctAnswerIndex: 1,
    explanation: "ZGC utiliza punteros coloreados (usando bits libres en referencias de 64 bits para estado de GC) y barreras de carga (load barriers) que interceptan desreferencias de objetos para autoreparar punteros al vuelo, logrando que el ciclo completo sea concurrente.",
    topic: "JVM y Garbage Collection",
    difficulty: "avanzado"
  },
  {
    id: "java-q-08",
    collectionId: "java",
    question: "¿Qué es el 'Type Erasure' (borrado de tipos) en el compilador de Java y qué implicación tiene en tiempo de ejecución?",
    options: [
      "Un algoritmo para eliminar tipos de datos no utilizados antes de empaquetar el JAR.",
      "La eliminación de toda la información de argumentos genéricos durante la compilación a bytecode (reemplazándolos por sus cotas superiores o Object e insertando casts automáticos), haciendo que 'List<String>' y 'List<Integer>' sean indistinguibles para la JVM en runtime.",
      "Un mecanismo de seguridad que cifra los nombres de las clases para evitar ingeniería inversa.",
      "Una optimización para ejecutar código Java en navegadores antiguos."
    ],
    correctAnswerIndex: 1,
    explanation: "Para mantener retrocompatibilidad con Java 1.4, los genéricos en Java se implementaron mediante Type Erasure. En runtime, la información de tipo paramétrico no existe en la instancia (salvo metadatos de firmas de clases/métodos reflejados en el bytecode).",
    topic: "Genéricos y Compilación",
    difficulty: "intermedio"
  },
  {
    id: "java-q-09",
    collectionId: "java",
    question: "¿Por qué es obligatorio que dos objetos con 'equals() == true' tengan exactamente el mismo 'hashCode()'?",
    options: [
      "Porque de lo contrario el recolector de basura destruye el primer objeto en el siguiente ciclo.",
      "Para respetar el contrato general de Object: las colecciones basadas en hash (como HashMap o HashSet) usan hashCode() para ubicar el bucket; si los objetos iguales tienen hashes distintos, la colección no encontrará el elemento.",
      "Para que el compilador pueda serializar las clases a formato XML de forma transparente.",
      "Porque la JVM arrojará una excepción IncompatibleClassChangeError en tiempo de arranque."
    ],
    correctAnswerIndex: 1,
    explanation: "El contrato de Object establece: si a.equals(b) es true, a.hashCode() DEBE ser igual a b.hashCode(). Si se sobreescribe equals sin sobreescribir hashCode, dos objetos con los mismos datos caerán en buckets diferentes y HashSet/HashMap no podrán recuperarlos.",
    topic: "Contratos de Object",
    difficulty: "básico"
  },
  {
    id: "java-q-10",
    collectionId: "java",
    question: "¿Qué optimización introduce la función 'Compact Strings' implementada desde Java 9?",
    options: [
      "Comprime las cadenas utilizando el algoritmo zlib antes de guardarlas en el heap.",
      "Almacena las cadenas internamente como 'byte[]' con un flag de codificación (coder byte) en lugar de 'char[]', ocupando 1 byte por carácter para cadenas codificadas en Latin-1 en vez de 2 bytes, ahorrando hasta un 50% de memoria.",
      "Elimina todos los espacios en blanco redundantes de forma automática.",
      "Convierte cadenas idénticas en identificadores numéricos de 32 bits."
    ],
    correctAnswerIndex: 1,
    explanation: "Antes de Java 9, String usaba 'char[]' (2 bytes UTF-16 por carácter). Compact Strings analiza los caracteres: si todos caben en ISO-8859-1 (Latin-1), se almacenan en un byte[] usando solo 1 byte por carácter, reduciendo enormemente la huella de memoria.",
    topic: "Rendimiento y Memoria",
    difficulty: "intermedio"
  },
  {
    id: "java-q-11",
    collectionId: "java",
    question: "¿Qué diferencia existe entre 'ConcurrentHashMap' y una colección envuelta con 'Collections.synchronizedMap'?",
    options: [
      "synchronizedMap se almacena en memoria Flash y ConcurrentHashMap en RAM.",
      "synchronizedMap bloquea toda la colección con un único cerrojo global para cada operación; ConcurrentHashMap permite lecturas concurrentes sin locks y sincroniza escrituras a nivel de nodo o bucket individual mediante CAS y cerrojos granulares.",
      "ConcurrentHashMap no permite iterar sobre sus elementos.",
      "synchronizedMap es más rápido en entornos con alta concurrencia."
    ],
    correctAnswerIndex: 1,
    explanation: "Collections.synchronizedMap introduce contención masiva al usar un mutex único para todo el mapa. ConcurrentHashMap utiliza primitivas atómicas no bloqueantes (CAS) y sincronización fina por bucket individual, permitiendo múltiples lecturas y escrituras concurrentes sin estrangular el throughput.",
    topic: "Colecciones Concurrentes",
    difficulty: "avanzado"
  },
  {
    id: "java-q-12",
    collectionId: "java",
    question: "¿Qué sucede internamente durante la fase de 'Tiered Compilation' (C1 y C2) en HotSpot JVM?",
    options: [
      "El código se traduce a JavaScript antes de ser ejecutado en el servidor.",
      "El código se interpreta inicialmente; si un método se vuelve caliente, C1 lo compila rápidamente con instrumentación ligera; si continúa siendo muy ejecutado, C2 (Server Compiler) aplica optimizaciones agresivas basadas en perfiles de ejecución (PGO).",
      "La JVM ejecuta el código en dos servidores físicos diferentes simultáneamente.",
      "El recolector de basura compila las clases durante las pausas del sistema."
    ],
    correctAnswerIndex: 1,
    explanation: "La compilación escalonada (Tiered Compilation) combina la rápida latencia de arranque del compilador cliente C1 con las profundas optimizaciones de máxima velocidad pico del compilador servidor C2 (como inlining especulativo y eliminación de comprobaciones de tipo).",
    topic: "JVM JIT Compilation",
    difficulty: "avanzado"
  },
  {
    id: "java-q-13",
    collectionId: "java",
    question: "¿Qué es un 'Record' introducido formalmente en Java 16?",
    options: [
      "Un archivo de log que registra todas las excepciones lanzadas por el programa.",
      "Una clase inmutable transparente (portador de datos puro) donde el compilador sintetiza automáticamente el constructor canónico, getters con el nombre de los componentes, equals(), hashCode() y toString().",
      "Una interfaz que permite registrar escuchadores de eventos en swing.",
      "Una base de datos integrada en el motor de ejecución de la JVM."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Records son portadores de datos transparentes e inmutables. Al declarar 'record Point(int x, int y) {}', Java genera automáticamente campos finales privados, métodos de acceso 'x()' e 'y()', y métodos canónicos de comparación e impresión libres de boilerplate.",
    topic: "Lenguaje Moderno (Java 16+)",
    difficulty: "básico"
  },
  {
    id: "java-q-14",
    collectionId: "java",
    question: "¿Qué garantiza el uso de 'Sealed Classes' (clases selladas con 'permits') introducidas en Java 17?",
    options: [
      "Que la clase no puede contener campos públicos ni métodos abstractos.",
      "Que solo un conjunto cerrado y explícito de subclases declaradas en la cláusula 'permits' puede heredar de ella, habilitando comprobaciones exhaustivas en tiempo de compilación con pattern matching en switch.",
      "Que el código compilado no puede descompilarse con herramientas de ingeniería inversa.",
      "Que la clase solo puede instanciarse una única vez durante la vida del programa."
    ],
    correctAnswerIndex: 1,
    explanation: "Las clases selladas limitan qué otras clases pueden extenderlas. Esto permite al compilador razonar de forma exhaustiva sobre todas las alternativas posibles en una jerarquía (similar a tipos algebraicos/enums), evitando cláusulas 'default' redundantes en sentencias switch.",
    topic: "Lenguaje Moderno (Java 17+)",
    difficulty: "intermedio"
  },
  {
    id: "java-q-15",
    collectionId: "java",
    question: "¿Por qué el almacenamiento de 'ThreadLocal' en aplicaciones que utilizan Thread Pools puede causar graves fugas de memoria (memory leaks)?",
    options: [
      "Porque los hilos del pool destruyen automáticamente la memoria swap del sistema operativo.",
      "Porque los hilos de los pools de servidores de aplicaciones son reutilizados indefinidamente; si no se invoca explícitamente 'threadLocal.remove()', los objetos retenidos permanecen anclados a la instancia del Thread vivo.",
      "Porque ThreadLocal siempre cifra los objetos con contraseñas que expiran tras 24 horas.",
      "Porque la JVM solo admite un único ThreadLocal por proceso."
    ],
    correctAnswerIndex: 1,
    explanation: "En un pool de hilos, los hilos nunca mueren. El mapa interno ThreadLocalMap mantiene referencias a los valores asociados; si la aplicación no llama a 'remove()' tras procesar la petición, esos objetos (y sus ClassLoaders en redeploys) jamás podrán ser recolectados por el GC.",
    topic: "Concurrencia y Fugas de Memoria",
    difficulty: "avanzado"
  },
  {
    id: "java-q-16",
    collectionId: "java",
    question: "¿Cuál es la función del 'ForkJoinPool' y en qué consiste su técnica de 'work-stealing'?",
    options: [
      "Eliminar procesos zombies del sistema operativo para liberar descriptores de sockets.",
      "Es un pool diseñado para tareas divide-y-vencerás (como parallel streams): cada hilo de trabajo tiene su propia cola doble (deque); cuando un hilo agota sus tareas, 'roba' tareas pendientes del final de la cola de otro hilo ocupado para balancear la carga.",
      "Copiar archivos de forma distribuida a través de la red local.",
      "Interrumpir hilos que consuman más del 80% de un núcleo de procesador."
    ],
    correctAnswerIndex: 1,
    explanation: "ForkJoinPool minimiza la contención de colas compartidas. Cada hilo empuja y toma subtareas de su propia cola por un extremo (LIFO); cuando queda inactivo, roba trabajo del extremo opuesto de la cola de otro hilo (FIFO), manteniendo saturados todos los núcleos.",
    topic: "Concurrencia Avanzada",
    difficulty: "avanzado"
  },
  {
    id: "java-q-17",
    collectionId: "java",
    question: "¿Qué ventaja ofrece 'LongAdder' frente a 'AtomicLong' en escenarios de alta contención concurrente?",
    options: [
      "LongAdder permite números infinitamente grandes sin límite de 64 bits.",
      "AtomicLong sufre de contención de bus por reintentos constantes de CAS sobre una sola variable de memoria; LongAdder mantiene internamente un arreglo de celdas por hilo para dispersar las actualizaciones concurrentes y calcula la suma solo cuando se solicita.",
      "LongAdder consume la mitad de memoria que un entero primitivo.",
      "AtomicLong solo funciona en sistemas operativos de 32 bits."
    ],
    correctAnswerIndex: 1,
    explanation: "Bajo altísima concurrencia, AtomicLong estrangula los núcleos con fallos de caché debido a que todos compiten por la misma dirección de memoria. LongAdder dispersa los hilos en un array de contadores individuales independientes (striping), eliminando la contención.",
    topic: "Concurrencia Atómica",
    difficulty: "avanzado"
  },
  {
    id: "java-q-18",
    collectionId: "java",
    question: "¿Cómo funciona la optimización de 'Scalar Replacement' facilitada por el 'Escape Analysis' del compilador JIT?",
    options: [
      "Convierte arreglos bidimensionales en matrices dispersas de compresión lineal.",
      "Si el compilador comprueba que un objeto no escapa del método en el que se instancia, no lo asigna en el Heap; en su lugar, descompone el objeto en sus campos primitivos individuales y los aloja directamente en registros de CPU o en la pila.",
      "Reemplaza llamadas a funciones por operaciones aritméticas de multiplicación.",
      "Sustituye variables de tipo float por dobles para aumentar la precisión de punto flotante."
    ],
    correctAnswerIndex: 1,
    explanation: "El análisis de escape permite al compilador C2 demostrar que un objeto es privado a un método. En lugar de crear un objeto en el heap y forzar al GC a limpiarlo, desglosa sus campos en variables escalares locales, logrando cero asignaciones heap.",
    topic: "JVM JIT Optimization",
    difficulty: "avanzado"
  },
  {
    id: "java-q-19",
    collectionId: "java",
    question: "¿Cuál es el propósito del bloque 'try-with-resources' introducido en Java 7 y qué interfaz exige a los recursos administrados?",
    options: [
      "Acelera las peticiones HTTP concurrentes exigiendo la interfaz Runnable.",
      "Garantiza el cierre determinista de recursos que implementan 'java.lang.AutoCloseable' o 'Closeable' al salir del bloque (incluso si ocurre una excepción), preservando las excepciones originales y agregando excepciones suprimidas.",
      "Obliga a que los archivos leídos se guarden en el Portapapeles de Windows.",
      "Evita que se capturen excepciones de tipo RuntimeException."
    ],
    correctAnswerIndex: 1,
    explanation: "try-with-resources garantiza que el método close() se invoque automáticamente en orden inverso al de apertura. Si ocurren excepciones tanto en el cuerpo como al cerrar el recurso, la excepción del cuerpo prevalece y la de cierre se registra como suprimida (getSuppressed()).",
    topic: "Manejo de Recursos",
    difficulty: "básico"
  },
  {
    id: "java-q-20",
    collectionId: "java",
    question: "¿Qué peligro presenta el 'Autoboxing' involuntario dentro de bucles de cómputo intensivo?",
    options: [
      "Produce un error de enlace en el ClassLoader del sistema.",
      "Asigna millones de instancias intermedias de clases envolventes (ej. Long o Integer) en el Heap administrado, saturando la generación joven del GC y degradando exponencialmente el rendimiento frente a tipos primitivos puros.",
      "Provoca que las variables primitivas se conviertan en arreglos de bytes.",
      "Detiene el temporizador del sistema impidiendo la ejecución de cronjobs."
    ],
    correctAnswerIndex: 1,
    explanation: "Escribir 'Long sum = 0L; sum += i;' dentro de un bucle grande crea una nueva instancia de 'java.lang.Long' en cada iteración debido al autoboxing. Esto genera millones de asignaciones inútiles en el heap que disparan pausas frecuentes de Garbage Collection.",
    topic: "Rendimiento y Tipos Primitivos",
    difficulty: "intermedio"
  },
  {
    id: "java-q-21",
    collectionId: "java",
    question: "¿Qué es el 'Integer Cache' en la clase 'java.lang.Integer' y qué resultado produce 'Integer.valueOf(100) == Integer.valueOf(100)' frente a 'Integer.valueOf(200) == Integer.valueOf(200)'?",
    options: [
      "Ambas comparaciones siempre devuelven false porque son objetos distintos en el heap.",
      "La primera es 'true' porque Java almacena en caché las instancias de Integer entre -128 y 127 por defecto; la segunda es 'false' porque valores fuera de ese rango instancian nuevos objetos distintos en el heap.",
      "Ambas comparaciones son 'true' debido a que el compilador unifica todas las constantes numéricas.",
      "El compilador genera un error de tipos incompatibles al comparar objetos con el operador '=='."
    ],
    correctAnswerIndex: 1,
    explanation: "Java mantiene un caché interno para enteros pequeños [-128, 127]. Por ello, dos llamadas a valueOf(100) devuelven exactamente la misma referencia de objeto (== true); pero para 200 se crean dos objetos distintos en el heap (== false), requiriendo usar .equals().",
    topic: "Sistema de Tipos y Caché",
    difficulty: "intermedio"
  },
  {
    id: "java-q-22",
    collectionId: "java",
    question: "¿Qué introduce la API 'Foreign Function & Memory' (Project Panama, Java 22) como reemplazo de JNI (Java Native Interface)?",
    options: [
      "Un compilador de código fuente Rust directamente dentro del compilador javac.",
      "Una API fuertemente tipada y segura (MemorySegment, Arena, Linker) para acceder a memoria fuera del heap (off-heap) e invocar bibliotecas nativas de C sin necesidad de escribir código puente JNI ni bibliotecas de pegamento en C/C++.",
      "Un emulador de Windows para ejecutar binarios .exe dentro de contenedores Linux.",
      "Una interfaz para interactuar con bases de datos NoSQL sin usar JDBC."
    ],
    correctAnswerIndex: 1,
    explanation: "Project Panama reemplaza el frágil y peligroso JNI por una API pura en Java: permite reservar memoria nativa determinista mediante Arenas con ciclos de vida explícitos e invocar símbolos de bibliotecas nativas con verificaciones de límites seguras.",
    topic: "FFI e Interoperabilidad (Java 22)",
    difficulty: "avanzado"
  },
  {
    id: "java-q-23",
    collectionId: "java",
    question: "¿Cuál es la diferencia entre un 'Stream' intermedio (como .filter() o .map()) y una operación terminal (como .collect() o .reduce()) en Java?",
    options: [
      "Las intermedias se ejecutan en la GPU y las terminales en la CPU.",
      "Las operaciones intermedias son perezosas (lazy) y devuelven un nuevo Stream sin procesar datos; las operaciones terminales disparan la ejecución del pipeline y producen un resultado final o efecto colateral consumiendo el Stream.",
      "Las terminales solo pueden invocarse si el Stream contiene menos de 100 elementos.",
      "No existe diferencia; ambas ejecutan el procesamiento de forma sincrónica e inmediata."
    ],
    correctAnswerIndex: 1,
    explanation: "Un Stream en Java no ejecuta nada hasta que se llama a una operación terminal. Las operaciones intermedias simplemente configuran la cadena de procesamiento; la operación terminal recorre la fuente aplicando las transformaciones de manera combinada en una sola pasada.",
    topic: "Streams API",
    difficulty: "básico"
  },
  {
    id: "java-q-24",
    collectionId: "java",
    question: "¿Por qué no se debe utilizar 'parallelStream()' de forma indiscriminada en operaciones que involucran llamadas de red o I/O bloqueante?",
    options: [
      "Porque los Streams paralelos borran las tablas de la base de datos si la conexión se interrumpe.",
      "Porque 'parallelStream()' utiliza por defecto el pool estático común 'ForkJoinPool.commonPool()', compartido por toda la JVM; bloquear sus hilos con I/O agota el pool y paraliza todas las demás tareas paralelas de la aplicación.",
      "Porque los Streams paralelos solo funcionan con arrays de números enteros.",
      "Porque la JVM arroja una excepción SecurityException en entornos multi-core."
    ],
    correctAnswerIndex: 1,
    explanation: "ForkJoinPool.commonPool() tiene un número limitado de hilos fijado al total de cores de la CPU. Si se ejecutan operaciones bloqueantes de red dentro de un parallelStream, se saturarán todos los hilos del pool compartido, degradando el rendimiento general de toda la aplicación.",
    topic: "Streams API y Concurrencia",
    difficulty: "avanzado"
  },
  {
    id: "java-q-25",
    collectionId: "java",
    question: "¿Cómo optimiza 'HikariCP' el acceso a conexiones JDBC frente a otros Connection Pools más antiguos?",
    options: [
      "Utiliza llamadas nativas en lenguaje ensamblador para comunicarse con la tarjeta de red.",
      "Elimina sincronizaciones innecesarias mediante FastList (un reemplazo de ArrayList que evita comprobaciones de rango) y un ConcurrentBag lock-free de alto rendimiento, optimizando el bytecode al límite de inlining de la JVM.",
      "Mantiene abiertas millones de conexiones simultáneas sin autenticar.",
      "Descarga todos los datos de la base de datos a la memoria RAM al iniciar el servidor."
    ],
    correctAnswerIndex: 1,
    explanation: "HikariCP fue diseñado analizando el bytecode emitido por la JVM: redujo el número de campos en clases críticas para caber en una sola línea de caché de CPU, creó colecciones especializadas como FastList y ConcurrentBag, logrando latencias de adquisición sub-microsegundo.",
    topic: "Acceso a Datos y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "java-q-26",
    collectionId: "java",
    question: "¿Qué es el 'Metaspace' en la arquitectura de memoria de Java 8+ y cómo sustituyó al antiguo 'PermGen'?",
    options: [
      "Un espacio de almacenamiento virtual para enviar datos a la nube de AWS.",
      "El área donde se almacenan metadatos de clases cargadas; a diferencia de PermGen (que residía dentro del heap de tamaño fijo y provocaba frecuentes OutOfMemoryError: PermGen space), Metaspace se asigna en memoria nativa del sistema operativo y crece dinámicamente por defecto.",
      "Una base de datos de claves y valores para guardar sesiones de Spring Boot.",
      "Una capa de software para emular procesadores RISC-V."
    ],
    correctAnswerIndex: 1,
    explanation: "PermGen tenía un tamaño máximo fijo en el heap continuo y desbordaba fácilmente con frameworks que generan clases dinámicas (CGLIB, Spring). Metaspace usa memoria nativa directa fuera del heap, con recolección de metadatos cuando se descargan sus ClassLoaders.",
    topic: "JVM y Memoria",
    difficulty: "intermedio"
  },
  {
    id: "java-q-27",
    collectionId: "java",
    question: "¿Qué herramienta oficial de la JVM permite capturar eventos de diagnóstico, rendimiento y telemetría de bajísimo sobrecosto en entornos de producción?",
    options: [
      "Wireshark.",
      "JDK Flight Recorder (JFR) combinado con JDK Mission Control (JMC).",
      "Postman API Client.",
      "Notepad++ con plugins de telemetría."
    ],
    correctAnswerIndex: 1,
    explanation: "JFR está integrado directamente en el núcleo del motor HotSpot de la JVM. Registra eventos internos del runtime (pausas de GC, contención de locks, asignaciones heap, I/O) con un sobrecosto inferior al 1%, siendo totalmente seguro para su uso continuo en producción.",
    topic: "Diagnóstico y Observabilidad",
    difficulty: "intermedio"
  },
  {
    id: "java-q-28",
    collectionId: "java",
    question: "¿Qué es 'JMH' (Java Microbenchmark Harness) y por qué es indispensable para medir rendimiento en Java?",
    options: [
      "Un compilador alternativo a OpenJDK creado por Google.",
      "Un framework de benchmarking riguroso que mitiga los efectos distorsionadores de la JVM (calentamiento del JIT, inlining, eliminación de código muerto mediante Blackholes y optimizaciones especulativas de bucles).",
      "Una herramienta para verificar que el código cumpla con el estándar de formato Google Java Format.",
      "Un servidor de integración continua para proyectos Gradle."
    ],
    correctAnswerIndex: 1,
    explanation: "Medir código Java ingenuamente con System.currentTimeMillis() es inútil debido a las optimizaciones del JIT (que puede borrar un bucle entero si detecta que el resultado no se usa). JMH controla iteraciones de calentamiento y consume resultados con 'Blackhole' para evitar eliminación de código muerto.",
    topic: "Benchmarking y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "java-q-29",
    collectionId: "java",
    question: "¿Qué problema presentan los métodos 'finalize()' y por qué fueron deprecados en favor de 'java.lang.ref.Cleaner'?",
    options: [
      "Hacían que los programas se ejecutaran más rápido de lo permitido por la licencia de Oracle.",
      "Los finalizadores retrasan la liberación de memoria (los objetos sobreviven al menos un ciclo adicional de GC en una cola lenta), no garantizan cuándo ni si se ejecutarán, y pueden resucitar objetos zombies desestabilizando el runtime.",
      "Solo funcionaban en sistemas operativos Windows XP.",
      "Obligaban a que todas las variables de la clase fuesen públicas."
    ],
    correctAnswerIndex: 1,
    explanation: "finalize() es impredecible, degrada el rendimiento del GC y puede provocar bloqueos o resucitación de objetos. java.lang.ref.Cleaner y PhantomReference proporcionan mecanismos de limpieza seguros y desacoplados del ciclo de vida del objeto.",
    topic: "Ciclo de Vida y Limpieza",
    difficulty: "intermedio"
  },
  {
    id: "java-q-30",
    collectionId: "java",
    question: "¿Cuál es el rol de la instrucción 'invokedynamic' (indy) introducida en Java 7 y fundamental para las expresiones lambda?",
    options: [
      "Permite llamar a scripts de Python desde la consola de comandos de Java.",
      "Permite diferir la vinculación de un método hasta el primer momento de ejecución mediante un método bootstrap (BSM), evitando generar clases anónimas estáticas en disco para cada lambda y permitiendo que la JVM optimice la llamada al vuelo.",
      "Es una instrucción para desactivar la seguridad de red en sockets TCP.",
      "Fuerza a que un método se ejecute en un único ciclo de reloj del procesador."
    ],
    correctAnswerIndex: 1,
    explanation: "invokedynamic permite al compilador emitir una llamada sin atarla rígidamente a una clase o interfaz específica en tiempo de compilación. En el primer uso, un Bootstrap Method vincula la llamada (usando LambdaMetafactory), reduciendo la huella de memoria y permitiendo optimizaciones dinámicas del JIT.",
    topic: "Bytecode y JVM",
    difficulty: "avanzado"
  }
];
