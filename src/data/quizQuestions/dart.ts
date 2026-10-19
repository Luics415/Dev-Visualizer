import type { QuizQuestion } from "@/data/quizTypes";

export const dartQuestions: QuizQuestion[] = [
  {
    id: "dart-01",
    collectionId: "dart",
    question: "¿Qué garantiza el sistema 'Sound Null Safety' de Dart a nivel de compilación y optimización de código máquina?",
    options: [
      "Garantiza que una expresión tipada como no anulable (`T`) nunca podrá evaluar a `null` en tiempo de ejecución, permitiendo al compilador AOT eliminar comprobaciones defensivas de puntero nulo y generar binarios nativos más compactos y veloces.",
      "Convierte automáticamente todos los valores `null` en ceros numéricos de 64 bits.",
      "Obliga al compilador a envolver cada variable en un contenedor de tipo `Option<T>` en el heap.",
      "Prohíbe el uso de estructuras de datos mutables en todo el programa."
    ],
    correctAnswerIndex: 0,
    explanation: "La palabra 'Sound' (sólido) significa que el sistema de tipos no tiene fisuras: si un tipo es no nulo, jamás podrá contener `null`, lo que permite al compilador omitir bifurcaciones condicionales de verificación nula a nivel de procesador.",
    topic: "Sound Null Safety",
    difficulty: "intermedio"
  },
  {
    id: "dart-02",
    collectionId: "dart",
    question: "¿En qué se diferencia el modelo de concurrencia basado en 'Isolates' de Dart del modelo tradicional de hilos compartidos (threads) de C++ o Java?",
    options: [
      "Cada Isolate posee su propio heap de memoria completamente aislado y su propio bucle de eventos (Event Loop) independiente; no existe memoria mutable compartida y la comunicación se realiza exclusivamente mediante paso de mensajes serializados o transferencia de búferes a través de puertos (`SendPort` / `ReceivePort`).",
      "Los Isolates se ejecutan exclusivamente en servidores en la nube y no en el hardware local.",
      "Los Isolates comparten todas las variables globales y sincronizan escrituras con candados `mutex` automáticos a nivel de SO.",
      "Dart no soporta concurrencia y todos los programas son monohilo bloqueantes sin excepciones."
    ],
    correctAnswerIndex: 0,
    explanation: "Al no compartir memoria, los Isolates previenen de raíz las condiciones de carrera (race conditions) y eliminan la necesidad de bloqueos o primitivas de sincronización complejas como semáforos o mutexes.",
    topic: "Concurrencia e Isolates",
    difficulty: "intermedio"
  },
  {
    id: "dart-03",
    collectionId: "dart",
    question: "En el Event Loop de Dart, ¿cuál es el orden estricto de precedencia entre la 'Microtask Queue' y la 'Event Queue'?",
    options: [
      "La Microtask Queue tiene prioridad absoluta: el bucle procesará todas las microtareas pendientes hasta vaciar la cola por completo antes de extraer y despachar el siguiente evento ordinario de la Event Queue.",
      "La Event Queue se ejecuta siempre antes que las microtareas para garantizar que los clics de usuario no sufran retraso.",
      "Ambas colas se alternan en una ronda estricta Round-Robin de 1 a 1.",
      "Las microtareas se descartan automáticamente si el teléfono reduce su tasa de refresco a 60 Hz."
    ],
    correctAnswerIndex: 0,
    explanation: "Cualquier microtarea programada con `scheduleMicrotask(...)` se ejecuta inmediatamente tras el código síncrono actual. Si se encolan microtareas de forma ininterrumpida, la Event Queue puede sufrir inanición (starvation), congelando la respuesta a eventos de UI o temporizadores.",
    topic: "Event Loop y Asincronía",
    difficulty: "intermedio"
  },
  {
    id: "dart-04",
    collectionId: "dart",
    question: "En Dart 3, ¿qué restricción arquitectónica impone declarar una clase con el modificador `sealed`?",
    options: [
      "La clase es implícitamente abstracta y todos sus subtipos directos deben ser declarados obligatoriamente dentro de la misma biblioteca o archivo fuente, permitiendo al compilador verificar exhaustividad (exhaustiveness checking) en expresiones `switch`.",
      "La clase no puede tener constructores ni métodos de instancia.",
      "La clase se almacena en memoria ROM de solo lectura en el dispositivo móvil.",
      "Impide que cualquier método de la clase sea invocado de forma asíncrona."
    ],
    correctAnswerIndex: 0,
    explanation: "Una clase `sealed` define un conjunto cerrado de variantes. Al evaluar una instancia con un `switch`, el compilador de Dart 3 exige contemplar todos los subtipos posibles, evitando la necesidad de ramas `default` y avisando en tiempo de compilación si falta algún caso.",
    topic: "Dart 3 Modificadores de Clases",
    difficulty: "avanzado"
  },
  {
    id: "dart-05",
    collectionId: "dart",
    question: "¿Qué son los 'Records' introducidos en Dart 3 y cuál es su beneficio principal frente a crear clases tradicionales?",
    options: [
      "Son tipos compuestos anónimos, inmutables y agregados de primera clase que permiten agrupar múltiples valores heterogéneos (posicionales y con nombre) sin el boilerplate de declarar una clase formal, con igualdad por valor intrínseca.",
      "Archivos de registro en disco que graban las sesiones de depuración en formato CSV.",
      "Estructuras mutables utilizadas exclusivamente para almacenar audio del micrófono.",
      "Punteros de bajo nivel a registros de memoria física de la CPU."
    ],
    correctAnswerIndex: 0,
    explanation: "Por ejemplo, `(int x, {String label}) pair = (42, label: 'test');`. Los Records permiten retornar múltiples valores desde una función de manera elegante, con tipado estricto y desestructuración inmediata vía pattern matching.",
    topic: "Dart 3 Records y Patrones",
    difficulty: "básico"
  },
  {
    id: "dart-06",
    collectionId: "dart",
    question: "¿Qué es un 'Extension Type' (`extension type Id(int value)`) introducido en Dart 3.3?",
    options: [
      "Una abstracción de coste cero (zero-cost abstraction) en tiempo de compilación que envuelve un tipo subyacente proporcionando una interfaz estática completamente nueva sin la sobrecarga de instanciar un objeto envoltorio (wrapper) en el heap en tiempo de ejecución.",
      "Un plugin que permite ejecutar código Dart dentro de Microsoft Excel.",
      "Un tipo que solo se puede compilar a formato WebAssembly.",
      "Una directiva para importar archivos con extensiones `.c` y `.cpp`."
    ],
    correctAnswerIndex: 0,
    explanation: "Los Extension Types son reemplazos estáticos transparentes: en tiempo de ejecución el objeto es idéntico a su tipo subyacente (un simple `int`), pero en tiempo de compilación el sistema de tipos previene mezclar identificadores o añade métodos semánticos con cero sobrecarga.",
    topic: "Dart 3 Extension Types",
    difficulty: "avanzado"
  },
  {
    id: "dart-07",
    collectionId: "dart",
    question: "En Dart, ¿cuál es el comportamiento de una variable declarada con el modificador `late`?",
    options: [
      "Difiere la inicialización de la variable hasta su primer acceso en tiempo de ejecución; si se accede antes de ser asignada y no posee inicializador, arroja un `LateInitializationError` en lugar de evaluar a nulo.",
      "Fuerza a la variable a actualizar su valor cada 1000 milisegundos.",
      "Indica al recolector de basura que libere la variable únicamente al cerrar el proceso.",
      "Hace que la variable sea accesible desde cualquier hilo sin importar el Isolate."
    ],
    correctAnswerIndex: 0,
    explanation: "`late` permite declarar campos no anulables que no pueden inicializarse en el constructor, o implementar cálculos diferidos costosos (lazy loading) que solo se evalúan si el campo es realmente consultado.",
    topic: "Sound Null Safety y Modificador late",
    difficulty: "intermedio"
  },
  {
    id: "dart-08",
    collectionId: "dart",
    question: "¿Cómo opera un constructor de tipo factoría (`factory`) en una clase Dart frente a un constructor generativo ordinario?",
    options: [
      "No crea obligatoriamente una nueva instancia de su clase en cada llamada, pudiendo retornar una instancia preexistente desde una caché, una instancia de una subclase o inicializar un objeto complejo con lógica condicional previa.",
      "Genera código Java nativo mediante reflexión en tiempo de ejecución.",
      "Es un método que se ejecuta en segundo plano en un Isolate separado.",
      "Requiere que todos los parámetros sean constantes globales numéricas."
    ],
    correctAnswerIndex: 0,
    explanation: "Un constructor factory se comporta sintácticamente como un constructor al instanciarse (`new MyClass()`), pero internamente puede usar la sentencia `return` para devolver un singleton o una subclase apropiada según los argumentos.",
    topic: "POO y Constructores",
    difficulty: "intermedio"
  },
  {
    id: "dart-09",
    collectionId: "dart",
    question: "En Dart, ¿cuál es la diferencia fundamental entre un generador sincrónico (`sync*`) y uno asincrónico (`async*`)?",
    options: [
      "`sync*` retorna un `Iterable<T>` perezoso evaluado bajo demanda con `yield`; `async*` retorna un `Stream<T>` asíncrono que emite una secuencia continua de eventos a medida que están disponibles con `yield` o `yield*`.",
      "`sync*` bloquea permanentemente el hilo de ejecución hasta calcular un millón de valores.",
      "`async*` solo puede emitir errores de red HTTP.",
      "Ambos son idénticos y solo difieren en la versión del SDK en que fueron introducidos."
    ],
    correctAnswerIndex: 0,
    explanation: "`sync*` produce valores bajo demanda (pull) según el consumidor avanza con `.moveNext()`. `async*` produce un flujo reactivo (push) que despacha valores mediante un Stream en el bucle de eventos.",
    topic: "Generadores e Iterables",
    difficulty: "intermedio"
  },
  {
    id: "dart-10",
    collectionId: "dart",
    question: "¿Qué distingue a un `Stream` de suscripción única (Single-Subscription) de un `Stream` de difusión (Broadcast Stream) en Dart?",
    options: [
      "Un Stream de suscripción única solo permite un único oyente (`listen`) durante todo su ciclo de vida y amortigua eventos hasta que se conecta; un Broadcast Stream permite múltiples oyentes simultáneos y descarta eventos si no hay suscriptores activos al momento de emitir.",
      "Un Broadcast Stream transmite datos a través de ondas de radio FM.",
      "Un Stream de suscripción única solo puede transportar cadenas de texto de hasta 256 bytes.",
      "El Broadcast Stream requiere una cuenta de desarrollador de Google Cloud."
    ],
    correctAnswerIndex: 0,
    explanation: "Intentar añadir un segundo listener a un Single-Subscription Stream arroja `StateError: Bad state: Stream has already been listened to`. Para eventos de UI o sensores que múltiples componentes deben observar se utiliza `asBroadcastStream()`.",
    topic: "Streams y Asincronía",
    difficulty: "intermedio"
  },
  {
    id: "dart-11",
    collectionId: "dart",
    question: "¿Cómo se implementa la composición de comportamiento mediante `mixin` en Dart y qué restricción introduce la cláusula `on` (`mixin M on SuperClass`)?",
    options: [
      "La cláusula `on` restringe el mixin para que únicamente pueda ser aplicado (con la palabra clave `with`) en clases que extiendan o implementen la clase especificada, otorgando al mixin acceso a los miembros de dicha superclase.",
      "Obliga al mixin a ejecutarse en un hilo secundario del procesador.",
      "Convierte todos los métodos del mixin en funciones recursivas de cola.",
      "Impide que la clase resultante sea instanciada fuera del archivo fuente."
    ],
    correctAnswerIndex: 0,
    explanation: "Los mixins son una forma de reutilizar código en múltiples jerarquías de clases. La cláusula `on` define los requisitos de tipo base para el mixin, permitiendo invocar métodos de `super` dentro del cuerpo del mixin de forma segura.",
    topic: "Mixins y Composición",
    difficulty: "intermedio"
  },
  {
    id: "dart-12",
    collectionId: "dart",
    question: "En Dart 3, ¿qué permite hacer una 'Switch Expression' en comparación con la tradicional sentencia imperativa `switch`?",
    options: [
      "Produce un valor como una expresión evaluable que puede asignarse directamente a una variable o retornarse, utilizando sintaxis compacta con flechas `=>`, comas de separación y garantía estricta de exhaustividad.",
      "Permite intercambiar físicamente dos variables en memoria sin variable temporal.",
      "Ejecuta todas las ramas en paralelo utilizando múltiples núcleos de la CPU.",
      "Solo evalúa valores enteros entre 0 y 9."
    ],
    correctAnswerIndex: 0,
    explanation: "Por ejemplo: `final label = switch (status) { Status.ok => 'Éxito', Status.error(code: final c) => 'Fallo $c' };`. Las switch expressions transforman el control de flujo en evaluación funcional sin necesidad de `break`.",
    topic: "Dart 3 Switch Expressions",
    difficulty: "básico"
  },
  {
    id: "dart-13",
    collectionId: "dart",
    question: "¿Cuál es la función del método `Isolate.run()` introducido en Dart 2.19 / Dart 3 para tareas computacionales pesadas?",
    options: [
      "Engloba la creación de un Isolate efímero, la transferencia de la función y sus argumentos, la ejecución del cómputo intensivo, el retorno del resultado a través de un canal seguro y la terminación automática del Isolate en una única llamada asíncrona ergonómica.",
      "Ejecuta un script de Bash en la consola del sistema operativo.",
      "Descarga paquetes desde pub.dev en tiempo de ejecución.",
      "Convierte la aplicación en un servicio daemon de Windows."
    ],
    correctAnswerIndex: 0,
    explanation: "`Isolate.run(() => heavyCalculation())` simplifica enormemente el uso de Isolates, evitando el engorroso boilerplate manual de instanciar `ReceivePort`, `SendPort`, `spawn` y `kill` para tareas aisladas como parseo de JSON gigante o procesamiento de imágenes.",
    topic: "Concurrencia e Isolates",
    difficulty: "intermedio"
  },
  {
    id: "dart-14",
    collectionId: "dart",
    question: "¿Qué optimización realiza el compilador 'dart2wasm' en comparación con el clásico 'dart2js' para aplicaciones web?",
    options: [
      "Compila el código Dart a módulos WebAssembly binarios con soporte de Garbage Collection nativo de Wasm (WasmGC), logrando tiempos de carga más rápidos, ejecución cercana a velocidad nativa y rendimiento predecible sin pasar por transpilación a JavaScript.",
      "Genera código Java para ser interpretado por Applets de navegador.",
      "Comprime las imágenes PNG a vectores SVG en tiempo real.",
      "Elimina todas las llamadas de red para que la app funcione siempre offline."
    ],
    correctAnswerIndex: 0,
    explanation: "Con el soporte de WasmGC en navegadores modernos, `dart2wasm` permite compilar Flutter Web y código Dart directamente a WebAssembly sin emular un recolector de basura en Wasm lineal, duplicando la fluidez y reduciendo tiempos de fotograma.",
    topic: "Compilación Web y Wasm",
    difficulty: "avanzado"
  },
  {
    id: "dart-15",
    collectionId: "dart",
    question: "En el sistema de tipos de Dart, ¿cuál es el tipo raíz supremo (Top Type) de la jerarquía de tipos de la cual derivan todos los valores?",
    options: [
      "`Object?`",
      "`dynamic`",
      "`void`",
      "`Never`"
    ],
    correctAnswerIndex: 0,
    explanation: "En Dart con Sound Null Safety, el Top Type absoluto es `Object?`, el cual abarca tanto `Object` (cualquier valor no nulo) como `Null`. En el extremo inferior de la jerarquía, el Bottom Type es `Never` (un tipo sin valores posibles, usado para funciones que nunca retornan).",
    topic: "Jerarquía de Tipos",
    difficulty: "avanzado"
  },
  {
    id: "dart-16",
    collectionId: "dart",
    question: "¿Cuál es la diferencia sustancial entre los tipos `dynamic` y `Object?` en Dart?",
    options: [
      "`dynamic` desactiva todas las comprobaciones estáticas de tipos del compilador permitiendo invocar cualquier método o propiedad en tiempo de compilación arriesgando un `NoSuchMethodError` en tiempo de ejecución; `Object?` obliga a realizar narrowing o comprobaciones de tipo (`is`) antes de acceder a miembros específicos.",
      "`Object?` solo puede almacenar números enteros, mientras que `dynamic` solo admite cadenas.",
      "`dynamic` se asigna en el stack y `Object?` en la memoria del disco.",
      "Son sinónimos exactos a nivel de código máquina."
    ],
    correctAnswerIndex: 0,
    explanation: "`dynamic` apaga el análisis estático para esa variable, tratando cada invocación de método como llamada dinámica tardía. `Object?` mantiene el rigor del compilador exigiendo comprobaciones de tipo explícitas antes de su uso.",
    topic: "Sistema de Tipos",
    difficulty: "intermedio"
  },
  {
    id: "dart-17",
    collectionId: "dart",
    question: "¿Qué papel cumple el operador de cascada (`..` y `?..`) en Dart?",
    options: [
      "Permite realizar una secuencia de operaciones, invocaciones a métodos y asignaciones de campos sobre el mismo objeto retornando al final la instancia original receptora en lugar del valor del método llamado.",
      "Concatena dos listas inmutables creando un nuevo conjunto hash.",
      "Calcula la división entera modular de dos flotantes de 64 bits.",
      "Cancela una llamada asíncrona si tarda más de 5 segundos."
    ],
    correctAnswerIndex: 0,
    explanation: "El operador de cascada facilita la inicialización fluida de objetos: `final paint = Paint()..color = Colors.black..strokeWidth = 2.0;`. El resultado de la expresión global es el objeto `Paint`, no el valor de retorno de las asignaciones individuales.",
    topic: "Operadores y Sintaxis",
    difficulty: "básico"
  },
  {
    id: "dart-18",
    collectionId: "dart",
    question: "¿Cómo opera el operador de desestructuración y coalescencia nula `??=` en Dart?",
    options: [
      "Asigna el valor del operando derecho a la variable del operando izquierdo única y exclusivamente si dicha variable es actualmente `null`.",
      "Compara dos cadenas ignorando mayúsculas y minúsculas.",
      "Calcula la raíz cuadrada del operando izquierdo.",
      "Lanza una excepción si el operando derecho no es un booleano."
    ],
    correctAnswerIndex: 0,
    explanation: "`x ??= valor;` equivale semánticamente a `if (x == null) { x = valor; }`, simplificando la inicialización condicional perezosa de campos y cachés.",
    topic: "Operadores y Sound Null Safety",
    difficulty: "básico"
  },
  {
    id: "dart-19",
    collectionId: "dart",
    question: "¿Para qué sirve el archivo `analysis_options.yaml` en un proyecto Dart?",
    options: [
      "Configura el analizador estático de Dart, definiendo el conjunto de reglas de linting habilitadas (e.g. `package:lints/recommended.yaml`), advertencias estrictas de tipos (`strict-casts`, `strict-inference`) y exclusiones de archivos generados.",
      "Establece las credenciales de despliegue para la tienda de aplicaciones.",
      "Define la versión del sistema operativo del servidor de producción.",
      "Almacena las traducciones a diferentes idiomas de la interfaz."
    ],
    correctAnswerIndex: 0,
    explanation: "El analizador estático de Dart lee `analysis_options.yaml` para asegurar consistencia arquitectónica, estilo y prevención de bugs en todo el equipo antes de que el código sea compilado o commiteado.",
    topic: "Tooling y Análisis Estático",
    difficulty: "básico"
  },
  {
    id: "dart-20",
    collectionId: "dart",
    question: "En Dart 3, ¿qué prohíbe el modificador de clase `base` a los desarrolladores externos que importan el paquete desde otra biblioteca?",
    options: [
      "Prohíbe que la clase sea implementada mediante `implements` (forzando a que únicamente pueda ser extendida mediante herencia `extends`), garantizando que los nuevos métodos agregados por el autor en el futuro no rompan el código de los consumidores.",
      "Prohíbe crear subclases dentro del mismo archivo fuente.",
      "Impide que la clase tenga campos privados que comiencen con guion bajo (`_`).",
      "Obliga a que todos los constructores sean marcados como `const`."
    ],
    correctAnswerIndex: 0,
    explanation: "El modificador `base` asegura la integridad de la interfaz pública de una clase: al impedir `implements`, el autor del paquete puede añadir métodos con implementación concreta en futuras versiones menores sin causar fallos de compilación en librerías cliente.",
    topic: "Dart 3 Modificadores de Clases",
    difficulty: "avanzado"
  },
  {
    id: "dart-21",
    collectionId: "dart",
    question: "¿Qué ventaja ofrece el modificador de clase `interface` en Dart 3?",
    options: [
      "Permite que bibliotecas externas implementen la interfaz mediante `implements`, pero prohíbe que la extiendan mediante `extends`, impidiendo la reutilización frágil de implementación interna.",
      "Convierte la clase en un socket de red TCP para comunicación con bases de datos.",
      "Fuerza a que todos los métodos devuelvan una cadena en formato JSON.",
      "Desactiva el recolector de basura para las instancias de esa clase."
    ],
    correctAnswerIndex: 0,
    explanation: "Una `interface class` define un contrato puro para el exterior. Si se desea permitir tanto herencia de código como implementación de interfaz libremente, se usa una clase estándar sin modificadores restrictivos.",
    topic: "Dart 3 Modificadores de Clases",
    difficulty: "avanzado"
  },
  {
    id: "dart-22",
    collectionId: "dart",
    question: "¿Cuál es el propósito del operador `identical(a, b)` en Dart frente al operador de comparación de igualdad `a == b`?",
    options: [
      "`identical(a, b)` comprueba si ambas referencias apuntan exactamente al mismo objeto físico en memoria (identidad de puntero), mientras que `==` puede ser sobrescrito por la clase para evaluar igualdad estructural o por valor.",
      "`identical` compara el tamaño en bytes de los archivos en disco.",
      "`==` solo funciona con números enteros impares.",
      "`identical` convierte automáticamente ambas variables a formato binario base64 antes de compararlas."
    ],
    correctAnswerIndex: 0,
    explanation: "`identical(a, b)` es una función fundamental de la biblioteca `dart:core` que verifica identidad referencial pura en la memoria heap, siendo la base del chequeo de widgets `const` en Flutter.",
    topic: "Modelo de Memoria y Comparación",
    difficulty: "intermedio"
  },
  {
    id: "dart-23",
    collectionId: "dart",
    question: "En la gestión de colecciones de Dart, ¿qué utilidad tiene el operador de propagación con verificación nula (`...?`) (Null-aware spread operator)?",
    options: [
      "Desempaqueta e inserta todos los elementos de una colección dentro de otra lista o mapa, pero si la colección evaluada es `null`, simplemente no inserta nada en lugar de lanzar una excepción.",
      "Elimina todos los elementos duplicados de un conjunto en tiempo $O(1)$.",
      "Calcula la media geométrica de una lista de enteros.",
      "Ordena la colección de forma descendente en un hilo paralelo."
    ],
    correctAnswerIndex: 0,
    explanation: "`final lista = [1, 2, ...?posibleListaNula];` evita escribir engorrosas comprobaciones `if (posibleListaNula != null) ...posibleListaNula` dentro de literales de colecciones.",
    topic: "Colecciones y Control de Flujo",
    difficulty: "básico"
  },
  {
    id: "dart-24",
    collectionId: "dart",
    question: "¿Qué caracteriza a una 'Native Asset' en Dart mediante el sistema de hooks (`hook/build.dart`) introducido en versiones recientes del SDK?",
    options: [
      "Permite compilar y empaquetar código fuente de C/C++/Rust automáticamente durante la fase de compilación del paquete Dart, resolviendo herramientas nativas y enlazando dinámicamente las bibliotecas compiladas con `dart:ffi` de forma transparente.",
      "Es un script que descarga imágenes PNG desde Google Cloud Storage.",
      "Convierte la aplicación Dart en una imagen de Docker de forma obligatoria.",
      "Añade soporte para compilar proyectos en procesadores PowerPC de 1995."
    ],
    correctAnswerIndex: 0,
    explanation: "Native Assets reemplaza la necesidad de orquestaciones manuales con CMake, Makefiles o scripts de Gradle para compilar librerías C nativas: el compilador de Dart ejecuta `hook/build.dart` y enlaza el binario nativo directamente al artefacto final.",
    topic: "Dart Native Assets y FFI",
    difficulty: "avanzado"
  },
  {
    id: "dart-25",
    collectionId: "dart",
    question: "En Dart, ¿cuál es la diferencia entre un constructor constante (`const Constructor(...)`) y uno no constante?",
    options: [
      "Un constructor `const` exige que todas las variables de instancia de la clase sean finales (`final`), permitiendo crear instancias inmutables en tiempo de compilación que residen en una memoria compartida única canonicalizada.",
      "Un constructor `const` no puede recibir argumentos en su invocación.",
      "Un constructor constante solo puede usarse en archivos de prueba unitaria.",
      "Un constructor constante genera automáticamente getters y setters mutables para todos los campos."
    ],
    correctAnswerIndex: 0,
    explanation: "Los constructores constantes permiten canonicalización: `const Point(1, 2)` instanciado 1000 veces en diferentes partes del código fuente apunta siempre a la misma dirección física de memoria, ahorrando memoria RAM.",
    topic: "Constructores y Constantes",
    difficulty: "básico"
  },
  {
    id: "dart-26",
    collectionId: "dart",
    question: "¿Cómo funciona el desmantelamiento de patrones (Pattern Destructuring) con Records en Dart 3?",
    options: [
      "Permite extraer y vincular simultáneamente múltiples campos posicionales o con nombre en variables locales individuales mediante la sintaxis: `var (x, y) = getCoords();` o `var (:name, :age) = getUser();`.",
      "Elimina permanentemente el objeto de la memoria RAM del sistema.",
      "Cifra los valores con el algoritmo criptográfico SHA-256.",
      "Convierte los campos en claves primarias de una base de datos SQL."
    ],
    correctAnswerIndex: 0,
    explanation: "El pattern destructuring reduce drásticamente el código boilerplate: se pueden extraer valores directamente en asignaciones o verificarlos condicionalmente en sentencias `if-case`.",
    topic: "Dart 3 Records y Patrones",
    difficulty: "básico"
  },
  {
    id: "dart-27",
    collectionId: "dart",
    question: "En Dart, ¿qué es un constructor de redireccionamiento (Redirecting Constructor)?",
    options: [
      "Un constructor cuyo cuerpo está vacío y delega la inicialización invocando a otro constructor de la misma clase mediante `: this(...)` o `: this.named(...)` en la lista de inicialización.",
      "Un constructor que redirige las solicitudes HTTP a un puerto proxy.",
      "Un constructor que abre una nueva pestaña en el navegador web.",
      "Un constructor que captura excepciones de puntero nulo y las envía a Sentry."
    ],
    correctAnswerIndex: 0,
    explanation: "El redireccionamiento permite centralizar la inicialización en un único constructor generativo principal y ofrecer constructores nombrados de conveniencia que redirigen con valores predeterminados.",
    topic: "Constructores",
    difficulty: "intermedio"
  },
  {
    id: "dart-28",
    collectionId: "dart",
    question: "¿Qué excepción lanza la máquina virtual de Dart cuando se invoca un método inexistente sobre una variable tipada como `dynamic`?",
    options: [
      "`NoSuchMethodError`",
      "`NullPointerException`",
      "`TypeError`",
      "`UnsupportedError`"
    ],
    correctAnswerIndex: 0,
    explanation: "En variables `dynamic`, las llamadas a métodos no se comprueban en tiempo de compilación. Si el objeto subyacente carece del método en tiempo de ejecución (y no sobrescribe `noSuchMethod`), la VM lanza `NoSuchMethodError`.",
    topic: "Manejo de Errores y Runtimes",
    difficulty: "básico"
  },
  {
    id: "dart-29",
    collectionId: "dart",
    question: "¿Qué optimización y utilidad ofrecen los 'Extension Methods' tradicionales (`extension NumberParsing on String`) introducidos en Dart 2.7?",
    options: [
      "Permiten agregar nuevos métodos y propiedades computadas a clases existentes (incluso de bibliotecas externas o del SDK como `String` o `List`) sin modificar su código fuente original ni recurrir a herencia de clases.",
      "Permiten modificar el hardware de la tarjeta gráfica del terminal.",
      "Descargan automáticamente dependencias de Gradle.",
      "Permiten usar variables sin declarar su tipo en tiempo de compilación."
    ],
    correctAnswerIndex: 0,
    explanation: "Las extensiones son azúcar sintáctico estático resuelto en tiempo de compilación: no mutan la clase original ni añaden campos de almacenamiento en el objeto, pero proporcionan APIs fluidas y legibles (e.g. `'42'.parseInt()`).",
    topic: "Extension Methods",
    difficulty: "básico"
  },
  {
    id: "dart-30",
    collectionId: "dart",
    question: "¿Qué herramienta oficial de Dart se utiliza para aplicar correcciones automáticas y refactorizaciones de linter en toda una base de código?",
    options: [
      "`dart fix --apply`",
      "`dart compile exe`",
      "`dart test --coverage`",
      "`dart doc --dry-run`"
    ],
    correctAnswerIndex: 0,
    explanation: "`dart fix` consulta las advertencias del analizador y las recetas de migración de versiones del SDK para corregir mecánicamente cambios de API obsoleta y reglas de estilo en un solo comando determinista.",
    topic: "Tooling y Productividad",
    difficulty: "básico"
  }
];
