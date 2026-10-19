import type { QuizQuestion } from "@/data/quizTypes";

export const goQuestions: QuizQuestion[] = [
  {
    id: "go-q-01",
    collectionId: "go",
    question: "¿En qué consiste el modelo de scheduler G-M-P implementado en el runtime de Go?",
    options: [
      "G representa los Garbage collectors, M los Módulos del sistema y P los Puertos de red abiertos.",
      "G representa Goroutines (código y stack), M representa hilos del SO (Machine) y P representa Procesadores lógicos con colas de ejecución locales.",
      "G son variables Globales, M son Memoria compartida y P son Paquetes compilados.",
      "Es un protocolo de encriptación simétrica para transferencias gRPC."
    ],
    correctAnswerIndex: 1,
    explanation: "El runtime de Go multiplexa N goroutines (G) sobre M hilos del SO a través de P procesadores lógicos (GOMAXPROCS). Cada P tiene su propia cola de ejecución local ejecutable sin locks globales, recurriendo a un algoritmo de work-stealing cuando su cola queda vacía.",
    topic: "Runtime y Scheduler",
    difficulty: "avanzado"
  },
  {
    id: "go-q-02",
    collectionId: "go",
    question: "¿Qué ocurre al intentar escribir o leer de un canal ('chan') que tiene valor 'nil'?",
    options: [
      "Provoca un panic de tipo runtime error: nil channel dereference inmediatamente.",
      "La operación de lectura o escritura se bloquea permanentemente sin avanzar.",
      "Retorna el valor cero del tipo del canal sin bloquear.",
      "Cierra el canal de forma silenciosa."
    ],
    correctAnswerIndex: 1,
    explanation: "En Go, tanto la lectura como la escritura sobre un canal nil provocan un bloqueo perpetuo de la goroutine. Esta propiedad se utiliza intencionalmente en sentencias 'select' dinámicas para desactivar ramas asignando nil al canal.",
    topic: "Canales y Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "go-q-03",
    collectionId: "go",
    question: "¿Qué ocurre al intentar enviar datos a un canal que ya ha sido cerrado ('close(ch)')?",
    options: [
      "Los datos se descartan silenciosamente sin error.",
      "Lanza un pánico en tiempo de ejecución: 'panic: send on closed channel'.",
      "El canal se reabre automáticamente para aceptar la nueva carga.",
      "La goroutine emisora se bloquea hasta que otra goroutine cree un nuevo canal."
    ],
    correctAnswerIndex: 1,
    explanation: "Enviar datos a un canal cerrado o intentar cerrar un canal previamente cerrado produce un pánico inmediato ('send on closed channel' / 'close of closed channel'). Por regla idiomática en Go, solo el transmisor (emisor) debe cerrar el canal.",
    topic: "Canales y Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "go-q-04",
    collectionId: "go",
    question: "¿Cuál es la estructura interna de un 'slice' en Go en términos de layout en memoria?",
    options: [
      "Una lista doblemente enlazada con nodos de punteros hacia el heap.",
      "Un struct de tres palabras máquina: un puntero al array subyacente, una longitud ('len') y una capacidad máxima ('cap').",
      "Una tabla hash con claves enteras indexadas de forma dispersa.",
      "Un bloque de memoria fija inmutable administrado por el kernel."
    ],
    correctAnswerIndex: 1,
    explanation: "Un slice es una cabecera liviana (SliceHeader) de 24 bytes en arquitecturas de 64 bits: contiene Data (puntero al primer elemento del array), Len (elementos actualmente visibles) y Cap (capacidad máxima antes de realocar).",
    topic: "Estructuras de Datos",
    difficulty: "intermedio"
  },
  {
    id: "go-q-05",
    collectionId: "go",
    question: "¿Qué ocurre internamente cuando 'append' excede la capacidad ('cap') de un slice?",
    options: [
      "Se produce un desbordamiento de búfer con panic irrecuperable.",
      "El runtime asigna un nuevo array subyacente de mayor tamaño en el heap, copia los elementos anteriores y actualiza el puntero del slice devuelto.",
      "Sobreescribe la memoria adyacente del stack del hilo actual.",
      "Crea un archivo temporal en disco para almacenar los nuevos elementos."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando un slice supera su capacidad, append reserva un nuevo array con mayor capacidad (típicamente duplicando el tamaño para slices pequeños y aplicando un factor de crecimiento amortizado para arrays grandes), copia los datos y devuelve una nueva cabecera con el nuevo puntero.",
    topic: "Estructuras de Datos",
    difficulty: "intermedio"
  },
  {
    id: "go-q-06",
    collectionId: "go",
    question: "¿Qué es el 'Escape Analysis' realizado por el compilador de Go?",
    options: [
      "Un análisis de seguridad para detectar inyecciones SQL en consultas HTTP.",
      "El proceso estático donde el compilador determina si una variable puede alojarse de forma segura y barata en la pila (stack) o si debe escapar al heap administrado por el Garbage Collector.",
      "Un algoritmo para liberar conexiones TCP que quedaron colgadas.",
      "Una técnica de compresión para reducir el tamaño del binario ELF."
    ],
    correctAnswerIndex: 1,
    explanation: "Si el compilador comprueba que una variable no se referencia fuera del ámbito de la función que la creó, la asigna en la pila (stack frame), con costo de liberación nulo al retornar. Si la referencia sobrevive a la función (ej. retornar su puntero), la variable 'escapa' al heap.",
    topic: "Compilación y Memoria",
    difficulty: "avanzado"
  },
  {
    id: "go-q-07",
    collectionId: "go",
    question: "¿Qué diferencia existe internamente entre una interfaz vacía 'eface' y una interfaz con métodos 'iface'?",
    options: [
      "eface se guarda en el registro del procesador e iface en memoria swap.",
      "eface (interface{} o any) solo contiene punteros al tipo estático y al valor de datos; iface contiene un puntero a 'itab' (que almacena metadatos del tipo y la tabla de métodos implementados) y el puntero al dato concreto.",
      "iface solo admite tipos numéricos mientras que eface admite strings y structs.",
      "eface permite herencia múltiple e iface solo herencia simple."
    ],
    correctAnswerIndex: 1,
    explanation: "Una variable de interfaz en Go no es un puntero simple: ocupa 2 palabras. 'eface' maneja 'any' (_type + data), mientras que 'iface' maneja interfaces con métodos (itab con punteros a métodos y tipo + data).",
    topic: "Interfaces y Sistema de Tipos",
    difficulty: "avanzado"
  },
  {
    id: "go-q-08",
    collectionId: "go",
    question: "¿Por qué una interfaz que contiene un puntero 'nil' evaluará 'val != nil' como VERDADERO en Go?",
    options: [
      "Porque Go tiene un bug en el comparador de igualdad que no ha sido corregido por retrocompatibilidad.",
      "Porque una interfaz solo es idéntica a 'nil' cuando TANTO su tipo dinámico como su valor son 'nil'; si contiene un puntero tipado (*MyType) con valor nil, la interfaz contiene información de tipo válida.",
      "Porque el puntero nil se transforma en un entero 0 antes de la comparación.",
      "Porque las interfaces siempre retornan true en comparaciones de desigualdad."
    ],
    correctAnswerIndex: 1,
    explanation: "Una interfaz solo es nil cuando tanto el tipo concreto como el puntero de datos son nil. Si una función retorna un puntero nulo (*Error)(nil) asignado a la interfaz 'error', la interfaz NO es nil porque su itab/tipo contiene '*Error', lo que lleva a comprobaciones 'if err != nil' erróneas.",
    topic: "Interfaces y Errores",
    difficulty: "avanzado"
  },
  {
    id: "go-q-09",
    collectionId: "go",
    question: "¿Cómo reacciona el runtime de Go ante escrituras concurrentes no sincronizadas en un 'map' estándar?",
    options: [
      "Adquiere un mutex global transparente sin avisar al programador.",
      "Lanza un fallo fatal e irrecuperable: 'fatal error: concurrent map writes' que aborta el proceso de inmediato sin poder capturarse con recover().",
      "Ignora una de las escrituras de forma silenciosa aplicando la política LWW (Last-Write-Wins).",
      "Duplica el map en memoria para cada goroutine."
    ],
    correctAnswerIndex: 1,
    explanation: "Los maps estándar de Go no son concurrent-safe por diseño para maximizar rendimiento secuencial. Si el runtime detecta escrituras simultáneas sin sincronización, emite un error fatal que finaliza el proceso inmediatamente, sin permitir recover.",
    topic: "Concurrencia y Sincronización",
    difficulty: "intermedio"
  },
  {
    id: "go-q-10",
    collectionId: "go",
    question: "¿Cuándo se deben evaluar los argumentos pasados a una función diferida con 'defer'?",
    options: [
      "En el momento exacto en que la función contenedora finaliza su ejecución.",
      "En el momento en que se evalúa la sentencia 'defer', mientras que la ejecución del cuerpo de la función diferida ocurre al retornar.",
      "Solo si la función genera un pánico en tiempo de ejecución.",
      "En un hilo secundario asíncrono gestionado por el garbage collector."
    ],
    correctAnswerIndex: 1,
    explanation: "Los argumentos de una función diferida con 'defer' se calculan y congelan inmediatamente cuando se encuentra la instrucción defer, aunque la ejecución de la función se posponga hasta la salida de la función contenedora (siguiendo orden LIFO).",
    topic: "Control de Flujo",
    difficulty: "intermedio"
  },
  {
    id: "go-q-11",
    collectionId: "go",
    question: "¿Qué tipo de Garbage Collector utiliza Go y cuáles son sus objetivos primarios de diseño?",
    options: [
      "Un GC generacional con compactación periódica que maximiza el throughput a costa de pausas largas.",
      "Un recolector concurrente basado en Tri-Color Mark and Sweep con write-barrier, optimizado para minimizar las pausas de Stop-The-World (STW) a sub-milisegundos.",
      "Un sistema de conteo de referencias estricto similar a Objective-C ARC.",
      "No utiliza Garbage Collector; la memoria se libera mediante macros del preprocesador."
    ],
    correctAnswerIndex: 1,
    explanation: "El GC de Go prioriza latencia ultra baja sobre rendimiento máximo bruto. Utiliza el algoritmo tri-color concurrente con barreras de escritura activas durante la fase de marcado, manteniendo pausas STW usualmente por debajo del milisegundo.",
    topic: "Runtime y Garbage Collection",
    difficulty: "avanzado"
  },
  {
    id: "go-q-12",
    collectionId: "go",
    question: "¿Cómo funciona la propagación de cancelaciones en el paquete estándar 'context'?",
    options: [
      "Envía señales de terminación SIGTERM a todos los procesos del sistema operativo.",
      "Al cancelar un contexto padre (ej. vía context.WithCancel o WithTimeout), este cierra automáticamente su canal 'ctx.Done()', lo que propaga en cascada la señal de cierre a todos los contextos hijos derivados de él.",
      "Termina forzosamente los hilos de ejecución de la máquina virtual de Go.",
      "Escribe un código de estado 500 en todas las cabeceras HTTP activas."
    ],
    correctAnswerIndex: 1,
    explanation: "Los contextos forman un árbol de derivación. Cuando un nodo padre se cancela o expira, cierra su canal Done(), permitiendo que todas las goroutines descendientes que escuchan en un 'select case <-ctx.Done():' limpien recursos y terminen ordenadamente.",
    topic: "Context y Goroutine Lifecycle",
    difficulty: "intermedio"
  },
  {
    id: "go-q-13",
    collectionId: "go",
    question: "¿Cuál es la función y caso de uso óptimo de 'sync.Pool' en Go?",
    options: [
      "Administrar pools de conexiones a bases de datos PostgreSQL con transacciones atómicas.",
      "Almacenar y reciclar objetos temporales fuertemente asignados para reducir la presión sobre el Garbage Collector, teniendo en cuenta que los objetos del pool pueden ser purgados en cada ciclo de GC.",
      "Distribuir tareas computacionales entre diferentes clústeres de servidores físicos.",
      "Controlar la cantidad máxima de solicitudes HTTP concurrentes que un servidor puede recibir."
    ],
    correctAnswerIndex: 1,
    explanation: "sync.Pool es un caché concurrente de objetos asignados en memoria (ej. buffers bytes.Buffer). Permite reutilizarlos en lugar de crear nuevos en cada petición, aliviando el GC. El runtime puede vaciar el pool automáticamente durante ciclos de recolección.",
    topic: "Rendimiento y Sincronización",
    difficulty: "avanzado"
  },
  {
    id: "go-q-14",
    collectionId: "go",
    question: "¿Cómo opera la herramienta 'Race Detector' activada con la bandera '-race' al compilar o probar en Go?",
    options: [
      "Compara la velocidad de dos algoritmos y elige el más rápido mediante benchmarking sintético.",
      "Instrumenta el código en tiempo de compilación con ThreadSanitizer para monitorear todas las lecturas y escrituras de memoria en tiempo de ejecución, detectando colisiones concurrentes no sincronizadas.",
      "Optimiza los bucles for vectorizando instrucciones AVX-512.",
      "Analiza el código estáticamente sin necesidad de ejecutar los binarios."
    ],
    correctAnswerIndex: 1,
    explanation: "El detector de carreras de Go se basa en ThreadSanitizer de LLVM. Agrega instrumentación a cada acceso a memoria y sincronización, reportando de forma precisa la pila de llamadas de dos o más goroutines que acceden a la misma dirección sin sincronización.",
    topic: "Tooling y Diagnóstico",
    difficulty: "intermedio"
  },
  {
    id: "go-q-15",
    collectionId: "go",
    question: "¿Cuál es la forma canónica de desenvolver y comprobar tipos de error con 'errors.Is' y 'errors.As' introducidos en Go 1.13?",
    options: [
      "Comparar con operadores de igualdad estricta '==' sobre la cadena devuelta por err.Error().",
      "'errors.Is' comprueba recursivamente si un error coincide con un centinela en la cadena de errores envueltos con %w; 'errors.As' busca recursivamente y extrae un tipo de error específico asignándolo a un puntero destino.",
      "Invocar la función inspectError() del paquete runtime/debug.",
      "Utilizar bloques try-catch integrados en el compilador de Go."
    ],
    correctAnswerIndex: 1,
    explanation: "Al envolver errores con fmt.Errorf('fallo: %w', err), se crea un árbol de causas. errors.Is navega el árbol llamando a Unwrap() para buscar equivalencias con errores centinela; errors.As busca un error que satisfaga un tipo específico y lo desempaca.",
    topic: "Manejo Idiomático de Errores",
    difficulty: "intermedio"
  },
  {
    id: "go-q-16",
    collectionId: "go",
    question: "¿Cómo afecta el orden de los campos dentro de un 'struct' al consumo total de memoria en Go?",
    options: [
      "No afecta en absoluto porque el compilador reordena automáticamente todos los campos alfabéticamente.",
      "Afecta directamente el tamaño debido al padding de alineación de memoria según el tamaño de palabra de la arquitectura; ordenar los campos de mayor a menor tamaño puede reducir significativamente el tamaño del struct.",
      "Incrementa la memoria solo si los campos son cadenas de texto.",
      "Solo tiene impacto si el struct implementa la interfaz fmt.Stringer."
    ],
    correctAnswerIndex: 1,
    explanation: "Go respeta estrictamente el orden declarado de los campos en el struct e inserta bytes de relleno (padding) para cumplir las reglas de alineación de hardware (ej. campos de 8 bytes alineados a múltiplos de 8). Agrupar campos por tamaño minimiza el padding.",
    topic: "Estructuras y Memoria",
    difficulty: "avanzado"
  },
  {
    id: "go-q-17",
    collectionId: "go",
    question: "¿Cuál es la diferencia fundamental entre un método con 'value receiver' (func (t T) Foo()) y 'pointer receiver' (func (t *T) Foo())?",
    options: [
      "Un método con value receiver solo puede invocarse desde funciones del paquete main.",
      "El value receiver opera sobre una copia del struct (no puede mutar el original y causa sobrecosto de copia en estructuras grandes); el pointer receiver opera directamente sobre el objeto original permitiendo mutaciones y evitando copias.",
      "El pointer receiver no permite retornar valores.",
      "Solo los métodos con value receiver pueden satisfacer interfaces."
    ],
    correctAnswerIndex: 1,
    explanation: "Si el método necesita modificar el estado del struct o si el struct es grande, se debe usar un pointer receiver (*T). Además, un tipo *T implementa todos los métodos de T y *T, pero T solo satisface interfaces cuyos métodos tienen value receivers.",
    topic: "Métodos y Receptores",
    difficulty: "básico"
  },
  {
    id: "go-q-18",
    collectionId: "go",
    question: "¿Por qué es obligatorio cerrar 'resp.Body.Close()' al utilizar el cliente 'net/http' en Go?",
    options: [
      "Porque sin cerrarlo el compilador no genera el archivo binario final.",
      "Para evitar fugas de descriptores de archivos del sistema operativo y permitir que la conexión TCP subyacente pueda ser reutilizada en el pool de conexiones (Keep-Alive) tras leer todo el contenido.",
      "Porque de lo contrario el servidor web remoto reinicia la máquina del cliente.",
      "Porque el Garbage Collector no puede recolectar ningún objeto hasta que se invoque Close()."
    ],
    correctAnswerIndex: 1,
    explanation: "No cerrar el body de una respuesta HTTP causa agotamiento de file descriptors y sockets en el sistema operativo, e impide que net/http recicle la conexión TCP a través del Connection Pool, degradando drásticamente el throughput de la aplicación.",
    topic: "Redes y net/http",
    difficulty: "intermedio"
  },
  {
    id: "go-q-19",
    collectionId: "go",
    question: "¿Cómo resuelve Go las dependencias en 'go.mod' utilizando MVS (Minimal Version Selection)?",
    options: [
      "Siempre descarga la última versión mayor disponible en GitHub aunque introduzca breaking changes.",
      "Selecciona determinísticamente la versión mínima más antigua requerida que satisfaga los requisitos de todas las dependencias del grafo, garantizando builds 100% reproducibles.",
      "Elige de forma aleatoria entre las versiones compatibles registradas en go.sum.",
      "Delega la resolución de paquetes a npm o pip si están instalados en el sistema."
    ],
    correctAnswerIndex: 1,
    explanation: "A diferencia de algoritmos SAT complejos en otros gestores de paquetes que buscan la versión más reciente, MVS selecciona la versión más antigua permitida por los módulos que solicitan la dependencia, otorgando máxima predictibilidad y estabilidad.",
    topic: "Módulos y Tooling",
    difficulty: "avanzado"
  },
  {
    id: "go-q-20",
    collectionId: "go",
    question: "¿Qué restricción fundamental impone el compilador de Go sobre los tipos genéricos introducidos en Go 1.18?",
    options: [
      "No permiten el uso de tipos primitivos como int o float64.",
      "Los métodos de un struct no pueden declarar parámetros de tipo genéricos adicionales propios independientes de los declarados en el struct.",
      "Los genéricos solo pueden utilizarse en funciones anónimas.",
      "Requieren que todas las variables genéricas se declaren con punteros crudos de tipo uintptr."
    ],
    correctAnswerIndex: 1,
    explanation: "En Go 1.18+, los métodos de un struct genérico pueden usar los parámetros de tipo declarados en el tipo struct (ej. func (s *Stack[T]) Push(v T)), pero los métodos individuales no pueden declarar parámetros de tipo propios adicionales.",
    topic: "Genéricos",
    difficulty: "avanzado"
  },
  {
    id: "go-q-21",
    collectionId: "go",
    question: "¿Qué diferencia existe entre 'unsafe.Pointer' y 'uintptr' en el paquete 'unsafe' de Go?",
    options: [
      "unsafe.Pointer almacena números enteros y uintptr almacena cadenas de caracteres.",
      "unsafe.Pointer es un puntero reconocido por el Garbage Collector (el GC rastrea el objeto apuntado); uintptr es un simple entero numérico que no es reconocido como puntero, por lo que el objeto puede ser movido o recolectado por el GC mientras se opera como uintptr.",
      "uintptr es seguro contra carreras de memoria y unsafe.Pointer no.",
      "unsafe.Pointer solo puede usarse en sistemas operativos de 32 bits."
    ],
    correctAnswerIndex: 1,
    explanation: "El GC entiende unsafe.Pointer y no recolectará el objeto apuntado. En cambio, uintptr es un simple entero: si se almacena una dirección en uintptr y ocurre un ciclo de GC, el GC puede liberar o mover el objeto, convirtiendo el uintptr en una dirección inválida.",
    topic: "Unsafe y Punteros de Bajo Nivel",
    difficulty: "avanzado"
  },
  {
    id: "go-q-22",
    collectionId: "go",
    question: "¿Cómo se debe convertir una rebanada de bytes ([]byte) en una cadena de texto (string) sin incurrir en copia de memoria (zero-copy) en Go moderno?",
    options: [
      "Utilizando la función de biblioteca estándar 'unsafe.String(unsafe.SliceData(b), len(b))'.",
      "Utilizando la sintaxis ordinaria 'string(b)'.",
      "Escribiendo los bytes en un archivo temporal en disco y leyéndolo con os.ReadFile.",
      "Casteando directamente con '(string)(b)' sin importar el paquete unsafe."
    ],
    correctAnswerIndex: 0,
    explanation: "La conversión ordinaria 'string(b)' realiza una copia defensiva completa de los bytes al heap. En Go 1.20+, 'unsafe.String(unsafe.SliceData(b), len(b))' crea un string apuntando al mismo búfer sin ninguna asignación ni copia de memoria.",
    topic: "Rendimiento y Zero-Copy",
    difficulty: "avanzado"
  },
  {
    id: "go-q-23",
    collectionId: "go",
    question: "¿Qué garantiza el primitivo de sincronización 'sync.Once'?",
    options: [
      "Que una función se ejecute una sola vez en cada servidor de una arquitectura distribuida.",
      "Que la función pasada a '.Do(f)' se ejecute exactamente una sola vez durante todo el ciclo de vida del proceso, bloqueando concurrentemente a otros hilos hasta que dicha ejecución inicial concluya con éxito.",
      "Que una goroutine se destruya inmediatamente tras completar su primera iteración.",
      "Que un canal transmita exactamente un solo mensaje antes de cerrarse."
    ],
    correctAnswerIndex: 1,
    explanation: "sync.Once garantiza ejecución única y sincronizada mediante atomicidad y un mutex lento para la primera invocación: todos los hilos concurrentes que invoquen Once.Do esperarán hasta que la función haya terminado de ejecutarse por completo.",
    topic: "Concurrencia y Sincronización",
    difficulty: "intermedio"
  },
  {
    id: "go-q-24",
    collectionId: "go",
    question: "¿Qué es el 'Variable Shadowing' con ':=' dentro de bloques anidados y qué problema suele generar?",
    options: [
      "Una optimización del linker para eliminar variables no utilizadas del binario.",
      "Declarar accidentalmente una nueva variable local con el mismo nombre en un bloque if/for mediante ':=', ocultando la variable externa e impidiendo modificar el valor de la variable original.",
      "Un algoritmo de renderizado de sombras para interfaces gráficas con Fyne.",
      "Un mecanismo para crear variables globales accesibles desde cualquier paquete."
    ],
    correctAnswerIndex: 1,
    explanation: "Si se usa ':=' dentro de un bloque condicional 'if err := foo(); err != nil', se declara una nueva variable de ámbito local que oculta la externa; asignar a ella no muta la variable exterior, un error clásico de principiantes con retorno de errores.",
    topic: "Sintaxis y Errores Comunes",
    difficulty: "básico"
  },
  {
    id: "go-q-25",
    collectionId: "go",
    question: "¿Cómo se coordinan múltiples goroutines para esperar que todas finalicen utilizando 'sync.WaitGroup'?",
    options: [
      "Invocando wg.Add(1) dentro de la propia goroutine después de ser creada.",
      "Invocando wg.Add(1) en la goroutine creadora ANTES de lanzar la nueva goroutine con 'go func()', invocando 'defer wg.Done()' al inicio del cuerpo de la goroutine, y esperando con 'wg.Wait()'.",
      "Pasando el WaitGroup como valor por copia en cada llamada a función.",
      "Configurando una variable de entorno GOWAITGROUP=true antes de ejecutar el binario."
    ],
    correctAnswerIndex: 1,
    explanation: "Si wg.Add(1) se llama dentro de la nueva goroutine, existe una condición de carrera donde el hilo principal puede alcanzar wg.Wait() antes de que la goroutine hija siquiera comience a ejecutarse. Se debe llamar Add antes de invocar 'go'.",
    topic: "Concurrencia y Sincronización",
    difficulty: "intermedio"
  },
  {
    id: "go-q-26",
    collectionId: "go",
    question: "¿Qué impacto introdujo la variable de entorno 'GOMEMLIMIT' a partir de Go 1.19 en entornos de contenedores?",
    options: [
      "Restringe el uso de CPU al 50% de la capacidad de la máquina host.",
      "Establece un límite suave de memoria para el runtime, forzando al Garbage Collector a ejecutarse más agresivamente antes de que el proceso alcance el límite de memoria del cgroup y sea terminado por el OOM Killer del kernel.",
      "Limita la cantidad de hilos nativos que el sistema operativo puede asignar.",
      "Deshabilita por completo la asignación de buffers en el heap administrado."
    ],
    correctAnswerIndex: 1,
    explanation: "GOMEMLIMIT permite que el runtime conozca el límite de memoria del contenedor Docker/Kubernetes. Cuando el uso se aproxima al límite configurado, el GC dispara recolecciones proactivas para prevenir que el kernel destruya el contenedor con 'OOMKilled'.",
    topic: "Runtime y Producción",
    difficulty: "avanzado"
  },
  {
    id: "go-q-27",
    collectionId: "go",
    question: "¿Qué ocurre en un 'select' cuando múltiples casos de canales están listos simultáneamente para operar?",
    options: [
      "Siempre se ejecuta el primer caso declarado en orden de arriba a abajo.",
      "El runtime selecciona uno de los casos listos de forma pseudoaleatoria uniforme para evitar inanición (starvation).",
      "Se ejecutan todos los casos listos de forma secuencial en una misma iteración.",
      "Se produce un pánico por ambigüedad de canales en el scheduler."
    ],
    correctAnswerIndex: 1,
    explanation: "Si múltiples ramas de un 'select' pueden proceder simultáneamente, Go elige una de forma pseudoaleatoria. Esto previene que los primeros canales monopolicen el procesamiento o causen inanición en los canales declarados al final.",
    topic: "Canales y Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "go-q-28",
    collectionId: "go",
    question: "¿Cuándo y en qué orden se ejecutan las funciones 'init()' en los paquetes de Go?",
    options: [
      "Se ejecutan en paralelo en hilos secundarios cada vez que se importa un archivo.",
      "Se ejecutan secuencialmente en el hilo principal una sola vez tras inicializarse las variables de nivel de paquete, siguiendo el orden del árbol de dependencias de importación antes de invocar main().",
      "Solo se ejecutan si son llamadas explícitamente desde la función main().",
      "Se ejecutan de manera perezosa únicamente cuando se invoca una función exportada del paquete."
    ],
    correctAnswerIndex: 1,
    explanation: "Cada paquete puede definir una o más funciones init(). Se ejecutan automáticamente en el arranque en un solo hilo en orden topológico según el grafo de dependencias, garantizando que los paquetes base estén completamente inicializados antes que sus consumidores.",
    topic: "Inicialización y Paquetes",
    difficulty: "intermedio"
  },
  {
    id: "go-q-29",
    collectionId: "go",
    question: "¿Qué ventaja ofrece el paquete 'log/slog' introducido en Go 1.21 frente al paquete clásico 'log'?",
    options: [
      "Permite imprimir mensajes con colores fosforescentes en la consola sin bibliotecas externas.",
      "Proporciona logging estructurado nativo y de alto rendimiento (clave-valor, formato JSON o texto plano) con soporte para niveles de severidad y filtrado configurable.",
      "Envía automáticamente todos los registros a Elasticsearch a través de gRPC.",
      "Reemplaza el servidor web Kestrel en implementaciones backend."
    ],
    correctAnswerIndex: 1,
    explanation: "slog introduce logging estructurado oficial a la biblioteca estándar de Go. Permite emitir eventos como pares clave-valor fuertemente tipados o JSON estructurado con mínimas asignaciones de memoria, facilitando la ingesta directa por sistemas de observabilidad.",
    topic: "Biblioteca Estándar y Observabilidad",
    difficulty: "básico"
  },
  {
    id: "go-q-30",
    collectionId: "go",
    question: "¿Cómo previene Go que bucles infinitos en goroutines que no realizan llamadas a funciones bloqueen el scheduler (cooperative preemption)?",
    options: [
      "Deteniendo el reloj del sistema operativo hasta que la goroutine ceda el control.",
      "Mediante preemption no cooperativa basada en señales del sistema operativo (SIGURG en Unix) introducida en Go 1.14, que interrumpe la goroutine periódicamente sin requerir puntos de chequeo de stack.",
      "Obligando al desarrollador a escribir 'runtime.Gosched()' en cada línea de bucle.",
      "Terminando forzosamente el proceso tras 5 segundos de bucle continuo."
    ],
    correctAnswerIndex: 1,
    explanation: "Históricamente, Go solo cambiaba de contexto cooperativamente en los preámbulos de funciones (crecimiento de stack). Desde Go 1.14, el runtime usa señales del SO (SIGURG) para pausar e intercalar goroutines atrapadas en bucles computacionales intensivos sin llamadas a funciones.",
    topic: "Runtime y Scheduler",
    difficulty: "avanzado"
  }
];
