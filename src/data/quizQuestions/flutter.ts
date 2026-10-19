import type { QuizQuestion } from "@/data/quizTypes";

export const flutterQuestions: QuizQuestion[] = [
  {
    id: "flt-01",
    collectionId: "flutter",
    question: "En la arquitectura interna de Flutter, ¿cuáles son los tres árboles que colaboran de manera concurrente para transformar código declarativo en píxeles?",
    options: [
      "Widget Tree (configuración inmutable y efímera), Element Tree (gestor del ciclo de vida y estructura persistente) y RenderObject Tree (cálculo de layout geométrico, hit-testing y pintura directa).",
      "DOM Tree, Shadow Tree y CSSOM Tree.",
      "Source Tree, Bytecode Tree y Native View Hierarchy.",
      "State Tree, Provider Tree y Dispatcher Tree."
    ],
    correctAnswerIndex: 0,
    explanation: "Los widgets son planos inmutables y baratos que se destruyen y recrean constantemente. El Element Tree vincula los widgets con los RenderObjects correspondientes, reutilizando y actualizando las instancias de RenderObject de forma quirúrgica para máxima eficiencia.",
    topic: "Arquitectura Interna y Tres Árboles",
    difficulty: "intermedio"
  },
  {
    id: "flt-02",
    collectionId: "flutter",
    question: "¿Qué problema crítico resolvió la introducción del nuevo motor de renderizado 'Impeller' en Flutter frente al motor histórico 'Skia'?",
    options: [
      "La eliminación completa del 'Shader Compilation Jank' (tirones de animación en el primer render) mediante la precompilación estática AOT (Ahead-of-Time) de una colección cerrada de shaders para Metal y Vulkan.",
      "La necesidad de compilar la app con el compilador de Java en Android.",
      "La imposibilidad de ejecutar código Dart en sistemas embebidos.",
      "El soporte de bases de datos relacionales en la memoria GPU del dispositivo."
    ],
    correctAnswerIndex: 0,
    explanation: "Skia compilaba shaders en tiempo de ejecución (JIT) la primera vez que se encontraba una combinación gráfica nueva, provocando saltos de fotogramas perceptibles. Impeller precompila todos los shaders a formato binario (MSL/SPIR-V) durante la fase de build.",
    topic: "Motor de Renderizado Impeller",
    difficulty: "avanzado"
  },
  {
    id: "flt-03",
    collectionId: "flutter",
    question: "¿Cuál es la regla de oro que resume formalmente el sistema de dimensionamiento y layout en Flutter?",
    options: [
      "\"Constraints go down. Sizes go up. Parent sets position.\"",
      "\"Parents take all available space, children adapt their margin, siblings align vertically.\"",
      "\"Widgets define width and height, elements calculate padding, canvas scales linearly.\"",
      "\"Roots declare pixels, flex items calculate ratios, painters clip overflows.\""
    ],
    correctAnswerIndex: 0,
    explanation: "El padre pasa restricciones (`BoxConstraints`: minWidth, maxWidth, minHeight, maxHeight) al hijo; el hijo decide su propio tamaño dentro de esas restricciones y lo devuelve al padre; finalmente el padre asigna la posición relativa del hijo.",
    topic: "Sistema de Layout y BoxConstraints",
    difficulty: "básico"
  },
  {
    id: "flt-04",
    collectionId: "flutter",
    question: "En el ciclo de vida de un `StatefulWidget`, ¿en qué orden estricto se invocan los métodos durante la inicialización de su `State`?",
    options: [
      "`createState()` $\\to$ `initState()` $\\to$ `didChangeDependencies()` $\\to$ `build()`",
      "`initState()` $\\to$ `createState()` $\\to$ `build()` $\\to$ `didUpdateWidget()`",
      "`build()` $\\to$ `initState()` $\\to$ `didChangeDependencies()` $\\to$ `dispose()`",
      "`createState()` $\\to$ `build()` $\\to$ `initState()` $\\to$ `deactivate()`"
    ],
    correctAnswerIndex: 0,
    explanation: "Flutter llama primero a `createState()`. Luego se ejecuta `initState()` una única vez (aquí no se puede acceder a `InheritedWidgets` que dependan de context con cambios). Inmediatamente después se llama a `didChangeDependencies()` y por último a `build()`.",
    topic: "Ciclo de Vida de StatefulWidget",
    difficulty: "intermedio"
  },
  {
    id: "flt-05",
    collectionId: "flutter",
    question: "¿Qué representa técnicamente el objeto `BuildContext` recibido como parámetro en el método `build(BuildContext context)`?",
    options: [
      "Es una referencia directa a la instancia del `Element` en el Element Tree correspondiente a ese widget específico, que define su ubicación y relaciones en el árbol.",
      "Un objeto singleton que almacena la memoria RAM total disponible del teléfono.",
      "El contexto de dibujo 2D del Canvas de la GPU.",
      "Un diccionario estático de pares clave-valor provenientes del archivo `pubspec.yaml`."
    ],
    correctAnswerIndex: 0,
    explanation: "`BuildContext` es una interfaz implementada directamente por la clase abstracta `Element`. Permite al widget consultar el árbol hacia arriba (por ejemplo buscando un `InheritedWidget` con `Theme.of(context)` o `MediaQuery.of(context)`).",
    topic: "BuildContext y Element Tree",
    difficulty: "intermedio"
  },
  {
    id: "flt-06",
    collectionId: "flutter",
    question: "¿Cuál es la causa habitual de la excepción 'Vertical viewport was given unbounded height' en Flutter?",
    options: [
      "Colocar un `ListView` (que por defecto intenta expandirse infinitamente en el eje de scroll) dentro de un `Column` sin envolverlo en un `Expanded` o `Flexible`, o sin activar `shrinkWrap: true`.",
      "Asignar un color RGBA con canal alfa igual a 0.",
      "Usar fuentes tipográficas de más de 32 puntos en pantallas móviles.",
      "Compilar la aplicación en modo Debug en lugar de Release."
    ],
    correctAnswerIndex: 0,
    explanation: "Un `Column` pasa restricciones de altura no acotada (`maxHeight: double.infinity`) a sus hijos. Si un `ListView` sin restricción intenta expandirse al infinito dentro de un contenedor no acotado, el motor de layout no puede calcular su tamaño y lanza este error clásico.",
    topic: "Layout y RenderFlex",
    difficulty: "intermedio"
  },
  {
    id: "flt-07",
    collectionId: "flutter",
    question: "¿Por qué el uso de constructores `const` en la instanciación de widgets mejora drásticamente el rendimiento de una aplicación Flutter?",
    options: [
      "Permite a Dart canonicalizar las instancias en tiempo de compilación creando una única instancia en memoria global, permitiendo a Flutter omitir por completo el re-renderizado (`rebuild`) de ese subárbol cuando el padre se reconstruye.",
      "Compila los widgets a código ensamblador nativo en tiempo de ejecución.",
      "Desactiva las animaciones automáticas de Material 3 para ahorrar ciclos de CPU.",
      "Guarda los widgets en la memoria caché del disco duro para restaurarlos tras un reinicio del móvil."
    ],
    correctAnswerIndex: 0,
    explanation: "Al ser constantes e inmutables canonicalizadas, Flutter compara sus identidades por puntero (`identical(oldWidget, newWidget)`). Si son idénticos, Flutter sabe con certeza matemática que no han cambiado y se salta su método `build()`.",
    topic: "Optimización y Widgets Const",
    difficulty: "básico"
  },
  {
    id: "flt-08",
    collectionId: "flutter",
    question: "¿Para qué sirve el widget `RepaintBoundary` en la optimización de interfaces complejas con animaciones intensas?",
    options: [
      "Aísla a su subárbol en una capa de visualización separada (`Layer`), de modo que cuando el contenido interno cambia o se anima, solo se repinta ese subárbol sin obligar al resto de la pantalla exterior a repintarse.",
      "Impide que los usuarios puedan interactuar con la pantalla mediante toques táctiles.",
      "Establece una barrera criptográfica que impide la inspección del DOM con Flutter Inspector.",
      "Elimina los bordes redondeados de todos los botones de la pantalla."
    ],
    correctAnswerIndex: 0,
    explanation: "Si un contador numérico o aguja de reloj se anima rápidamente, envolverlo en `RepaintBoundary` evita que el fondo estático pesado y otros widgets circundantes tengan que volver a ser rasterizados en cada fotograma.",
    topic: "Rendimiento y RepaintBoundary",
    difficulty: "avanzado"
  },
  {
    id: "flt-09",
    collectionId: "flutter",
    question: "¿Cómo comunica un `InheritedWidget` a sus descendientes que deben reconstruirse cuando sus datos internos sufren una modificación?",
    options: [
      "A través de la implementación del método booleano `updateShouldNotify(covariant InheritedWidget oldWidget)`.",
      "Enviando una señal HTTP POST al servidor localhost de Flutter.",
      "Invocando recursivamente `setState()` en todos los widgets registrados en el árbol.",
      "Mediante una notificación push silenciosa despachada por el sistema operativo."
    ],
    correctAnswerIndex: 0,
    explanation: "Cuando un `InheritedWidget` es reconstruido con nuevos datos, Flutter ejecuta `updateShouldNotify`. Si retorna `true`, notifica exclusivamente a aquellos elementos descendientes que se registraron como dependientes mediante `dependOnInheritedWidgetOfExactType`.",
    topic: "Gestión de Estado e InheritedWidget",
    difficulty: "intermedio"
  },
  {
    id: "flt-10",
    collectionId: "flutter",
    question: "En el patrón de arquitectura BLoC (Business Logic Component), ¿cuál es el contrato estricto de entrada y salida entre la interfaz de usuario y la lógica de negocio?",
    options: [
      "La UI envía 'Eventos' (Events) al BLoC a través de un canal Sink/Event Stream, y el BLoC emite 'Estados' (States) inmutables a la UI a través de un Stream reactivo.",
      "La UI invoca directamente métodos síncronos de mutación que alteran variables globales públicas.",
      "El BLoC manipula directamente los píxeles del Canvas mediante llamadas a Skia/Impeller.",
      "La comunicación se realiza guardando y leyendo archivos JSON en el directorio temporal del dispositivo."
    ],
    correctAnswerIndex: 0,
    explanation: "BLoC garantiza separación absoluta de responsabilidades: los widgets disparan intenciones (eventos) y reaccionan de forma pasiva a los estados entrantes (`BlocBuilder` / `BlocListener`), facilitando pruebas unitarias de lógica pura sin mocks de interfaz.",
    topic: "Arquitectura BLoC",
    difficulty: "intermedio"
  },
  {
    id: "flt-11",
    collectionId: "flutter",
    question: "¿Qué ventaja fundamental ofrece la librería 'Riverpod' sobre el paquete 'Provider' clásico en Flutter?",
    options: [
      "Riverpod no depende de `BuildContext` para resolver dependencias, es completamente seguro en tiempo de compilación (evita el runtime `ProviderNotFoundException`), y permite múltiples providers del mismo tipo sin colisiones.",
      "Riverpod elimina la necesidad de usar el lenguaje Dart permitiendo escribir lógica en Rust nativo.",
      "Riverpod almacena todo el estado de la app en la blockchain de Ethereum.",
      "Riverpod funciona exclusivamente en aplicaciones web sin soporte móvil."
    ],
    correctAnswerIndex: 0,
    explanation: "Riverpod fue creado por Remi Rousselet (autor de Provider) para superar los fallos de diseño inherentes a la dependencia del árbol de widgets (`BuildContext`), ofreciendo providers declarativos globales, autodestrucción con `.autoDispose` y manejo asíncrono con `AsyncValue`.",
    topic: "Gestión de Estado y Riverpod",
    difficulty: "intermedio"
  },
  {
    id: "flt-12",
    collectionId: "flutter",
    question: "¿Bajo qué circunstancias es estrictamente necesario proporcionar una 'Key' (como `ValueKey` u `ObjectKey`) a los widgets en una lista dinámica o modificable?",
    options: [
      "Cuando los elementos de la lista son `StatefulWidgets` y la lista puede cambiar de orden, eliminarse o insertarse elementos, permitiendo a Flutter emparejar correctamente el Element con su State correspondiente según su identidad y no solo por su posición u orden en el árbol.",
      "Solo cuando los widgets tienen estilos con gradientes lineales.",
      "Para que el motor de búsqueda de Google pueda indexar la pantalla.",
      "Para cifrar los textos mostrados en pantalla con AES-256."
    ],
    correctAnswerIndex: 0,
    explanation: "Flutter preserva el estado en el Element Tree comparando `runtimeType` y `key`. Si dos widgets tienen el mismo tipo y carecen de clave explícita, al reordenar la lista Flutter asignará por error el estado del widget previo al nuevo elemento en esa posición numérica.",
    topic: "Claves (Keys) y Preservación de Estado",
    difficulty: "intermedio"
  },
  {
    id: "flt-13",
    collectionId: "flutter",
    question: "¿Qué diferencia funcional existe entre `MethodChannel` y `EventChannel` en la interoperabilidad de Flutter con la plataforma nativa (Android/iOS)?",
    options: [
      "`MethodChannel` está diseñado para llamadas RPC bidireccionales discretas de tipo solicitud/respuesta; `EventChannel` está especializado en transmisión unidireccional de flujos continuos de datos (Streams) desde la plataforma nativa hacia Flutter (e.g. sensores, GPS, conectividad).",
      "`EventChannel` solo funciona a través de conexiones de red inalámbricas Bluetooth.",
      "`MethodChannel` requiere reiniciar la aplicación cada vez que se invoca un método.",
      "`EventChannel` compila el código nativo a JavaScript antes de enviarlo."
    ],
    correctAnswerIndex: 0,
    explanation: "`MethodChannel` permite invocar un método nativo y esperar un `Future` de respuesta. `EventChannel` conecta un `Stream` de Dart con un listener nativo continuo (como `SensorEventListener` en Android o `CLLocationManagerDelegate` en iOS).",
    topic: "Platform Channels",
    difficulty: "intermedio"
  },
  {
    id: "flt-14",
    collectionId: "flutter",
    question: "¿Qué función cumple el compilador FFI (`dart:ffi`) frente a los tradicionales Platform Channels en Flutter?",
    options: [
      "Permite invocar bibliotecas nativas de C/C++/Rust directamente en el mismo espacio de memoria de forma síncrona y con sobrecarga de serialización cero (cero copias), sin cruzar el hilo de la plataforma del SO.",
      "Permite ejecutar código PHP dentro del simulador de iPhone.",
      "Descarga fuentes tipográficas en una cuadrícula paralela en segundo plano.",
      "Genera interfaces de usuario automáticas a partir de esquemas GraphQL."
    ],
    correctAnswerIndex: 0,
    explanation: "Mientras que los Platform Channels serializan datos binarios asíncronamente con `StandardMessageCodec` a través de sockets nativos de la plataforma, `dart:ffi` permite enlazar dinámicamente librerías C nativas con punteros directos para cómputo intensivo (e.g. machine learning, procesamiento de audio o SQLite).",
    topic: "Dart FFI y Rendimiento Nativo",
    difficulty: "avanzado"
  },
  {
    id: "flt-15",
    collectionId: "flutter",
    question: "En las pruebas de widgets de Flutter (`WidgetTester`), ¿cuál es la diferencia entre invocar `tester.pump()` y `tester.pumpAndSettle()`?",
    options: [
      "`tester.pump()` avanza el tiempo simulado un único frame o duración discreta; `tester.pumpAndSettle()` ejecuta repetidamente frames sucesivos hasta que no queden microtareas pendientes ni animaciones en progreso (el árbol se 'asienta' por completo).",
      "`pumpAndSettle()` reinicia el sistema operativo del emulador en cada aserción.",
      "`tester.pump()` solo puede llamarse al final del test para liberar memoria.",
      "`tester.pumpAndSettle()` lanza una excepción si el widget utiliza constructores `const`."
    ],
    correctAnswerIndex: 0,
    explanation: "`tester.pump()` dispara un nuevo frame para procesar un cambio puntual. Si hay animaciones activas (como una transición de página o animación infinita), `pumpAndSettle()` esperará hasta que concluyan (o arrojará timeout si la animación no termina nunca).",
    topic: "Testing de Widgets",
    difficulty: "intermedio"
  },
  {
    id: "flt-16",
    collectionId: "flutter",
    question: "¿Qué rol desempeña el widget `CustomPaint` junto con la clase abstracta `CustomPainter` en Flutter?",
    options: [
      "Proporciona un lienzo de dibujo vectorial de bajo nivel (`Canvas`) y un objeto `Size` que permite pintar figuras geométricas, líneas, arcos, rutas complejas (`Path`) y efectos visuales personalizados directamente en el RenderObject.",
      "Permite editar fotos mediante herramientas de retoque digital con inteligencia artificial.",
      "Convierte la aplicación en un editor de imágenes rasterizadas similar a Photoshop.",
      "Aplica un filtro sepia automático a todas las pantallas de la app."
    ],
    correctAnswerIndex: 0,
    explanation: "`CustomPainter` implementa `paint(Canvas canvas, Size size)` y `shouldRepaint(covariant CustomPainter oldDelegate)`. Es el mecanismo estándar para crear gráficos personalizados, medidores, ondas y visualizaciones de alto rendimiento en Flutter.",
    topic: "CustomPainter y Gráficos",
    difficulty: "intermedio"
  },
  {
    id: "flt-17",
    collectionId: "flutter",
    question: "En Flutter, ¿cuál es el propósito de la propiedad `shrinkWrap: true` en un `ListView` o `GridView` y qué costo acarrea su uso indebido?",
    options: [
      "Fuerza a la lista a calcular y ajustar su tamaño total a la suma de las dimensiones de todos sus hijos en lugar de ocupar todo el espacio disponible; su uso indebido destruye la virtualización perezosa al forzar el cálculo de layout de todos los elementos.",
      "Comprime las imágenes contenidas en la lista en formato WebP.",
      "Oculta la barra de scroll cuando el usuario deja de interactuar con la pantalla.",
      "Desactiva los eventos de toque táctil en todos los elementos excepto el primero."
    ],
    correctAnswerIndex: 0,
    explanation: "`shrinkWrap: true` obliga a medir el tamaño de toda la colección de elementos de golpe para conocer la altura total del contenedor, eliminando el beneficio de reciclaje bajo demanda (`ListView.builder`) y penalizando gravemente el rendimiento en listas largas.",
    topic: "Virtualización y ListView",
    difficulty: "intermedio"
  },
  {
    id: "flt-18",
    collectionId: "flutter",
    question: "En el sistema de animación de Flutter, ¿cuál es la función de una `CurvedAnimation`?",
    options: [
      "Aplica una curva de aceleración o deceleración no lineal (e.g. `Curves.easeInOut`, `Curves.bounceOut`) a un `AnimationController` lineal subyacente.",
      "Dibuja una línea curva de Bezier en el fondo de la pantalla.",
      "Modifica la frecuencia de actualización de la pantalla del dispositivo a 144 Hz.",
      "Ajusta el volumen del sonido de reproducción de los efectos táctiles."
    ],
    correctAnswerIndex: 0,
    explanation: "`AnimationController` produce valores estrictamente lineales de 0.0 a 1.0 en función del tiempo. `CurvedAnimation(parent: controller, curve: Curves.easeOut)` transforma esa tasa lineal para crear movimientos naturales y orgánicos.",
    topic: "Animaciones y Curvas",
    difficulty: "básico"
  },
  {
    id: "flt-19",
    collectionId: "flutter",
    question: "¿Qué es una animación 'Hero' en Flutter y cómo coordina la transición visual entre dos pantallas distintas?",
    options: [
      "Anima un widget compartido entre dos rutas marcadas con el mismo identificador de etiqueta (`tag`), volando y transformando suavemente su tamaño y posición desde la pantalla de origen a la de destino durante la transición del Navigator.",
      "Una animación de cómic que reproduce efectos de sonido de superhéroes al hacer tap.",
      "Un script de compilación que optimiza los binarios para arquitecturas ARM v8.",
      "Un botón flotante principal de Material Design que no puede ser ocultado."
    ],
    correctAnswerIndex: 0,
    explanation: "El widget `Hero(tag: 'id-producto', child: ...)` en ambas rutas permite al Navigator orquestar una superposición temporal (Overlay) que interpola tamaño y posición entre pantallas dispares ofreciendo continuidad visual fluida.",
    topic: "Hero Animations y Transiciones",
    difficulty: "básico"
  },
  {
    id: "flt-20",
    collectionId: "flutter",
    question: "¿Por qué en Flutter es preferible usar `ListView.builder` en lugar del constructor por defecto `ListView(children: [...])` para listas de datos extensas o desconocidas?",
    options: [
      "`ListView.builder` construye y renderiza únicamente aquellos elementos que están actualmente visibles dentro del viewport (más una pequeña zona de pre-renderizado de caché), reciclando memoria y optimizando CPU.",
      "`ListView.builder` traduce el texto de los elementos a 10 idiomas automáticamente.",
      "`ListView(children: [...])` solo soporta un máximo de 10 elementos en total.",
      "`ListView.builder` desactiva la barra de scroll para evitar tirones de GPU."
    ],
    correctAnswerIndex: 0,
    explanation: "Pasar un array con miles de widgets en `ListView(children: ...)` instancia todos los objetos y elementos a la vez en memoria. `ListView.builder` proporciona virtualización perezosa (lazy windowing) instanciando solo las celdas en pantalla.",
    topic: "Rendimiento y Listas",
    difficulty: "básico"
  },
  {
    id: "flt-21",
    collectionId: "flutter",
    question: "En la gestión de dependencias y paquetes de Flutter, ¿qué archivo garantiza que todo el equipo y el pipeline de CI/CD compilen exactamente las mismas versiones de las bibliotecas?",
    options: [
      "`pubspec.lock`",
      "`pubspec.yaml`",
      "`.metadata`",
      "`analysis_options.yaml`"
    ],
    correctAnswerIndex: 0,
    explanation: "Mientras que `pubspec.yaml` define rangos de versiones semánticas deseados (e.g. `^2.4.0`), `pubspec.lock` registra los hashes criptográficos y las versiones exactas resueltas de cada paquete transitivo garantizando reproducibilidad absoluta del build.",
    topic: "Tooling y Gestión de Paquetes",
    difficulty: "básico"
  },
  {
    id: "flt-22",
    collectionId: "flutter",
    question: "¿Qué realiza la herramienta 'Dart Obfuscation' (`--obfuscate --split-debug-info=...`) al generar un release en Flutter?",
    options: [
      "Oculta identificadores de símbolos, clases y nombres de métodos en el código AOT nativo compilado, reduciendo el tamaño del binario y extrayendo las tablas de símbolos para desofuscar stack traces en producción.",
      "Cifra el código fuente con contraseña que el usuario debe ingresar al instalar la app.",
      "Convierte la aplicación en una extensión de navegador web.",
      "Genera pruebas unitarias automatizadas con cobertura de ramas del 100%."
    ],
    correctAnswerIndex: 0,
    explanation: "La ofuscación dificulta la ingeniería inversa del binario compilado de Flutter. El parámetro `--split-debug-info` genera archivos de símbolos de depuración esenciales para traducir reportes de errores ofuscados (crash symbolication) en Crashlytics o Sentry.",
    topic: "Seguridad y Compilación de Releases",
    difficulty: "intermedio"
  },
  {
    id: "flt-23",
    collectionId: "flutter",
    question: "¿Cuál es la función del widget `FutureBuilder` en Flutter y qué patrón de estado maneja?",
    options: [
      "Se suscribe a un `Future` y reconstruye su interfaz visual de forma declarativa según el estado asíncrono actual provisto por el objeto `AsyncSnapshot` (`ConnectionState.waiting`, `hasError`, `hasData`).",
      "Permite enviar transacciones financieras a una pasarela de pago en el futuro.",
      "Detiene el hilo de ejecución principal de la aplicación hasta que la petición HTTP finaliza.",
      "Genera predicciones con modelos de aprendizaje automático sobre acciones del usuario."
    ],
    correctAnswerIndex: 0,
    explanation: "`FutureBuilder` conecta la naturaleza asíncrona de Dart con el paradigma reactivo de Flutter: evita manejar manualmente booleanos `isLoading` y suscripciones imperativas en el ciclo de vida del State.",
    topic: "Asincronía y UI Reactiva",
    difficulty: "básico"
  },
  {
    id: "flt-24",
    collectionId: "flutter",
    question: "En la navegación moderna de Flutter con `go_router`, ¿qué ventaja proporciona el soporte de navegación declarativa basada en rutas sobre el Navigator 1.0 imperativo?",
    options: [
      "Soporte transparente y bidireccional para URLs en la web (deep linking, sincronización con el historial del navegador, parámetros de consulta y rutas anidadas / ShellRoute).",
      "Elimina la necesidad de definir widgets en la aplicación.",
      "Permite ejecutar rutas en diferentes servidores web distribuidos.",
      "Duplica la velocidad de renderizado de las fuentes tipográficas."
    ],
    correctAnswerIndex: 0,
    explanation: "`go_router` implementa la API de Router (Navigator 2.0) de forma ergonómica: sincroniza de forma nativa el estado de navegación de la app con la barra de direcciones de la web y deep links en iOS/Android sin escribir boilerplate manual.",
    topic: "Navegación y go_router",
    difficulty: "intermedio"
  },
  {
    id: "flt-25",
    collectionId: "flutter",
    question: "¿Qué utilidad tiene la clase `GlobalKey` en Flutter y por qué debe usarse con moderación?",
    options: [
      "Permite acceder al `State` o al `RenderBox` de un widget desde cualquier lugar de la app y mover widgets entre diferentes posiciones del árbol sin perder su estado; es costosa porque el framework debe recorrer y reorganizar el árbol globalmente.",
      "Almacena las variables de sesión del usuario en el disco duro.",
      "Es una clave pública de cifrado para conexiones TLS.",
      "Genera identificadores universales únicos (UUID) para bases de datos relacionales."
    ],
    correctAnswerIndex: 0,
    explanation: "Una `GlobalKey` es una clave globalmente única que permite acceder a `currentState` (e.g. `formKey.currentState!.validate()`). Sin embargo, su uso excesivo ralentiza la fase de reconciliation porque Flutter debe verificar la unicidad global en cada frame.",
    topic: "GlobalKey y Arquitectura",
    difficulty: "intermedio"
  },
  {
    id: "flt-26",
    collectionId: "flutter",
    question: "¿Cómo funciona el mecanismo de accesibilidad de Flutter para transmitir la interfaz visual a lectores de pantalla como TalkBack y VoiceOver?",
    options: [
      "Flutter genera un árbol semántico paralelo ('Semantics Tree') compuesto por nodos `SemanticsNode` que describen etiquetas, acciones (tap, scroll, dismiss) y estados a los servicios de accesibilidad del sistema operativo nativo.",
      "Flutter lee en voz alta el código fuente de los archivos `.dart` mediante síntesis de voz.",
      "Los lectores de pantalla analizan capturas de pantalla de la app mediante OCR en la nube.",
      "Flutter no soporta lectores de pantalla nativos y requiere auriculares especiales."
    ],
    correctAnswerIndex: 0,
    explanation: "Flutter no utiliza vistas nativas de Android o iOS, por lo que construye su propio Semantics Tree. Widgets como `Semantics` o propiedades semánticas en botones traducen la UI a la API nativa de accesibilidad de cada plataforma.",
    topic: "Accesibilidad (A11y)",
    difficulty: "intermedio"
  },
  {
    id: "flt-27",
    collectionId: "flutter",
    question: "En Flutter, ¿qué ocurre si se invoca `setState()` después de que el método `dispose()` de un `State` ya ha sido ejecutado?",
    options: [
      "Flutter lanza una excepción `FlutterError`: \"setState() called after dispose()\", indicando que se intentó actualizar el estado de un widget que ya fue desmontado permanentemente del árbol.",
      "El dispositivo móvil se reinicia automáticamente en modo seguro.",
      "La pantalla se vuelve completamente blanca de forma permanente.",
      "El estado se guarda silenciosamente en la base de datos local SQLite."
    ],
    correctAnswerIndex: 0,
    explanation: "Este error ocurre comúnmente cuando una petición asíncrona (como un `Future` o listener) concluye tras la salida del usuario de la pantalla. Para prevenirlo se comprueba la propiedad booleana `if (mounted) setState(...)`.",
    topic: "Ciclo de Vida y Manejo de Errores",
    difficulty: "básico"
  },
  {
    id: "flt-28",
    collectionId: "flutter",
    question: "¿Qué diferencia existe entre un widget `Flexible` y un widget `Expanded` dentro de un `Row` o `Column`?",
    options: [
      "`Expanded` es una subclase de `Flexible` que tiene su propiedad `fit` preconfigurada de forma estricta como `FlexFit.tight`, obligando al hijo a ocupar todo el espacio sobrante asignado; `Flexible` por defecto usa `FlexFit.loose` permitiendo al hijo ser más pequeño si así lo desea.",
      "`Expanded` solo funciona en orientación vertical, mientras que `Flexible` solo funciona en horizontal.",
      "`Flexible` no admite el uso del parámetro `flex` numérico.",
      "`Expanded` solo permite widgets de texto, mientras que `Flexible` admite imágenes."
    ],
    correctAnswerIndex: 0,
    explanation: "En términos de implementación: `class Expanded extends Flexible { const Expanded({ ... }) : super(fit: FlexFit.tight); }`. Con `FlexFit.loose`, el widget hijo puede no consumir todo el espacio que se le otorga.",
    topic: "Layout y Flexibilidad",
    difficulty: "básico"
  },
  {
    id: "flt-29",
    collectionId: "flutter",
    question: "En la herramienta Flutter DevTools, ¿qué vista permite diagnosticar y detectar fugas de memoria y acumulación indebida de objetos?",
    options: [
      "La pestaña 'Memory' con herramientas de instantáneas de heap (Heap Snapshot), rastreo de asignaciones de objetos y análisis de retenedores de referencias.",
      "La consola de depuración del terminal de comandos.",
      "El visor de registros de Firebase Analytics.",
      "La herramienta de inspección de red de Chrome DevTools."
    ],
    correctAnswerIndex: 0,
    explanation: "La pestaña Memory de Flutter DevTools permite tomar snapshots del heap de la máquina virtual de Dart, comparar dos estados para ver qué objetos no fueron recolectados por el Garbage Collector y rastrear quién mantiene la referencia activa.",
    topic: "DevTools y Profiling",
    difficulty: "intermedio"
  },
  {
    id: "flt-30",
    collectionId: "flutter",
    question: "¿Qué rol desempeña la función `didUpdateWidget(covariant T oldWidget)` en el ciclo de vida de un `StatefulWidget`?",
    options: [
      "Se ejecuta cuando el widget padre se reconstruye y suministra nuevos parámetros o configuración al widget actual conservando el mismo `Element` y `State` en el árbol, permitiendo comparar los campos antiguos con los nuevos y reaccionar adecuadamente.",
      "Se invoca exclusivamente cuando la pantalla cambia de resolución o tasa de refresco.",
      "Borra permanentemente la base de datos local de la aplicación.",
      "Descarga las actualizaciones de código OTA desde el servidor de Google."
    ],
    correctAnswerIndex: 0,
    explanation: "`didUpdateWidget` es el gancho idóneo para suscribirse a nuevos flujos o reiniciar animaciones si un parámetro crítico pasado por el padre ha cambiado: `if (oldWidget.id != widget.id) { _reconnect(widget.id); }`.",
    topic: "Ciclo de Vida de StatefulWidget",
    difficulty: "intermedio"
  }
];
