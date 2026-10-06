import { caseStudy, chapter, defineExpandedCollection, primer, source, step } from "./expandedCollectionFactory";

export const dartCollection = defineExpandedCollection({
  id: "dart",
  eyebrow: "Lenguaje fuertemente tipado, Sound Null Safety, isolates sin memoria compartida y compilación JIT/AOT",
  title: "Dart visualizado",
  description: "Una exploración técnica exhaustiva del lenguaje de Google optimizado para interfaces y servicios de alta velocidad: desde Sound Null Safety, records y pattern matching moderno hasta la arquitectura del event loop, streams reactivos, concurrencia aislada con isolates, interoperabilidad nativa C-FFI y optimización de código máquina AOT.",
  counterLabel: "conceptos de Dart",
  footer: "Dart combina la velocidad de desarrollo de un lenguaje dinámico con la solidez de tipos estáticos estrictos, ejecutando cómputos paralelos en memoria aislada sin contención de bloqueos ni pausas largas de recolección de basura.",
  notice: "Referencia técnica verificada para Dart 3.x. Incluye Sound Null Safety garantizado por el compilador, desestructuración mediante Patterns, registros inmutables, modificadores de clase (sealed, base, interface) y concurrencia sin hilos compartidos mediante Isolates.",
  primer: primer(
    "Dart",
    "Dart es un lenguaje de programación orientado a objetos, fuertemente tipado y multiplataforma diseñado para crear aplicaciones rápidas en cualquier dispositivo con soporte para compilación dual JIT y AOT.",
    "Sirve para construir aplicaciones de cliente con alta tasa de refresco, herramientas de línea de comandos, servidores concurrentes y algoritmos de alto rendimiento sin sobrecarga de memoria compartida.",
    "El runtime ejecuta un bucle de eventos asíncrono sobre un hilo principal; las tareas pesadas se delegan a Isolates independientes con su propia memoria y recolector de basura sin bloqueos entre hilos.",
    ["Aplicaciones móviles y de escritorio", "Servidores backend asíncronos", "Procesamiento concurrente con Isolates", "CLI y utilidades con compilación nativa"],
    "Dart no es un subconjunto de JavaScript ni comparte estado global entre hilos; su modelo de concurrencia es de memoria aislada con paso asíncrono de mensajes y garantías formales de Sound Null Safety.",
    "language",
  ),
  chapters: [
    chapter(
      "Sintaxis Moderna & Sound Null Safety",
      "Inferencia var, final y const::Distingue entre inferencia automática de tipo en asignación, inmutabilidad de referencia en tiempo de ejecución y constantes evaluadas en tiempo de compilación.",
      "Sound Null Safety y sistema de tipos::Garantiza que una variable no anulable nunca contenga null en ningún momento de la ejecución mediante análisis estático formal del compilador.",
      "Promoción de tipos y análisis de flujo::Promueve variables a subtipos específicos o elimina su nulabilidad tras comprobaciones condicionales sin requerir conversiones forzadas manuales.",
      "Operadores de navegación y asignación segura::Aplica ?. para invocación condicional, ?? para valor de fallback por defecto y ??= para asignación condicionada a la ausencia previa de valor.",
      "Inicialización tardía con late::Difiere la inicialización de variables de instancia no anulables hasta su primer acceso verificando su asignación en tiempo de ejecución.",
    ),
    chapter(
      "Records, Tuplas & Pattern Matching",
      "Records posicionales y nombrados::Empaqueta múltiples valores heterogéneos en estructuras anónimas inmutables de primera clase con tipado estricto garantizado por el compilador.",
      "Desestructuración de tuplas y objetos::Extrae campos de registros, listas, mapas e instancias directamente en variables locales dentro de una única sentencia declarativa.",
      "Pattern Matching en Switch Expressions::Evalúa patrones de datos exhaustivos en expresiones switch concisas retornando un valor calculado sin requerir sentencias break.",
      "Guard Clauses con cláusula when::Añade condiciones booleanas adicionales a una rama de patrón permitiendo filtrar evaluaciones complejas antes de ejecutar la acción.",
      "Exhaustividad estática de patrones::Comprueba en tiempo de compilación que todas las ramas y combinaciones posibles de datos están cubiertas sin dejar casos sin manejar.",
    ),
    chapter(
      "Programación Orientada a Objetos en Dart",
      "Constructores generativos y azucar sintáctico::Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor.",
      "Listas de inicialización y aserciones::Ejecuta asignaciones de campos finales y verificaciones de invariantes con assert antes de que se invoque el cuerpo del constructor.",
      "Constructores Named y Redirigidos::Declara múltiples puntos de entrada constructores con nombres semánticos que pueden redirigir a otros constructores de la misma clase.",
      "Constructores Factory y caché de instancias::Implementa constructores que no crean necesariamente una nueva instancia retornando objetos preexistentes o subtipos polimórficos.",
      "Constructores Const y canonicidad::Crea instancias inmutables compartidas en memoria canónica si todos los campos son finales y se construyen con valores constantes.",
    ),
    chapter(
      "Jerarquía de Tipos & Modificadores de Clase",
      "Clases Sealed para jerarquías cerradas::Define familias de tipos donde todos los subtipos directos deben residir en la misma biblioteca permitiendo validación exhaustiva de switches.",
      "Modificador Base y control de subtipado::Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria.",
      "Modificador Interface para contratos puros::Exige que los consumidores externos sólo puedan implementar la interfaz de la clase sin heredar su implementación concreta.",
      "Modificador Final para sellar clases::Impide totalmente la herencia o implementación de una clase fuera de su archivo de definición garantizando estabilidad binaria.",
      "Clases Abstractas y contratos polimórficos::Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución.",
    ),
    chapter(
      "Mixins, Extensión & Composición Funcional",
      "Mixins y reutilización con with::Inyecta métodos y estado en una jerarquía de clases mediante linealización de mixins sin incurrir en problemas de herencia múltiple.",
      "Restricciones de mixin con la cláusula on::Limita la aplicación de un mixin a clases que extiendan o implementen un tipo base determinado para acceder a sus miembros protegidos.",
      "Mixin Class para uso dual::Declara una estructura que puede emplearse simultáneamente como clase regular instanciable y como mixin reutilizable en otras clases.",
      "Extension Methods sobre bibliotecas::Añade métodos de conveniencia, propiedades y operadores a clases cerradas de terceros o tipos primitivos sin modificar el código fuente original.",
      "Extension Types sin sobrecarga en runtime::Proporciona contratos tipados específicos sobre tipos subyacentes existentes con cero costo de memoria y sin crear objetos wrapper en el heap.",
    ),
    chapter(
      "Colecciones Declarativas & Operadores de Flujo",
      "List, Set y Map con tipado genérico::Administra colecciones indexadas, conjuntos únicos de elementos y diccionarios clave-valor fuertemente tipados con búsquedas eficientes.",
      "Collection-If para construcción condicional::Inserta o excluye elementos dentro de literales de colección evaluando expresiones booleanas de forma declarativa y limpia.",
      "Collection-For para generación declarativa::Genera secuencias dinámicas de elementos aplicando bucles de repetición directamente dentro de la definición del literal de colección.",
      "Spread Operator y fusiones seguras::Expande colecciones dentro de otras mediante los operadores ... y ...? evitando excepciones ante listas anulables.",
      "Inmutabilidad con List.unmodifiable::Empaqueta colecciones en vistas de sólo lectura que arrojan excepciones ante intentos de inserción o mutación en tiempo de ejecución.",
    ),
    chapter(
      "Genéricos Reificados & Sistema de Tipos",
      "Genéricos reificados en runtime::Conserva la información exacta de los argumentos de tipo genérico durante la ejecución para permitir comprobaciones seguras con el operador is.",
      "Restricciones de tipo acotadas (Bounded Generics)::Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles.",
      "Funciones genéricas de primera clase::Parametriza funciones y métodos independientes con tipos genéricos preservando la inferencia entre parámetros y retorno.",
      "Typedefs genéricos para firmas complejas::Crea alias de tipo expresivos y reutilizables para firmas de callbacks, transformadores y estructuras de datos anidadas.",
      "Covarianza y contravarianza en Dart::Maneja la sustitución segura de subtipos en colecciones y jerarquías controlando asignaciones de tipos con comprobaciones del compilador.",
    ),
    chapter(
      "Asincronía & Event Loop en Dart",
      "Arquitectura de dos colas del Event Loop::Organiza la ejecución asíncrona priorizando la cola de microtareas sobre la cola de eventos de temporizadores y peticiones de I/O.",
      "Microtasks y scheduleMicrotask::Encola tareas breves y críticas que se ejecutan inmediatamente al concluir la instrucción actual antes de atender nuevos eventos externos.",
      "Futures y estados uncompleted/completed::Modela cómputos asíncronos diferidos que completan con un valor de éxito o una excepción mediante callbacks o sintaxis async/await.",
      "Propagación y captura de errores asíncronos::Gestiona excepciones en flujos asíncronos mediante bloques try/catch transparentes o encadenamiento funcional con .catchError().",
      "Completer para control imperativo de Futures::Crea y completa promesas manualmente desde fuentes externas, suscripciones de bajo nivel o llamadas a hardware.",
    ),
    chapter(
      "Streams, Transformaciones & Programación Reactiva",
      "StreamController y despacho reactivo::Crea emisores de datos que gestionan suscripciones de oyentes, pausa, reanudación y cierre ordenado de flujos de información.",
      "Single-Subscription vs Broadcast Streams::Distingue flujos diseñados para un único consumidor secuencial de flujos multidifusión que soportan múltiples oyentes concurrentes.",
      "Generadores asíncronos async* y yield::Produce secuencias infinitas o diferidas de datos emitiendo valores perezosamente con yield y delegando flujos con yield*.",
      "Consumo declarativo con await for::Itera sobre los elementos sucesivos de un Stream procesando cada evento en orden conforme arriba desde la fuente asíncrona.",
      "StreamTransformers y operadores de filtrado::Transforma flujos aplicando map, where, debounce, buffer y combinación de múltiples canales reactivos en un único flujo resultante.",
    ),
    chapter(
      "Concurrencia, Memoria Aislada & Isolates",
      "Arquitectura de Isolates sin memoria compartida::Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes.",
      "Canales de comunicación SendPort y ReceivePort::Transfiere mensajes inmutables entre isolates mediante puertos serializados sin riesgo de carreras de datos ni deadlocks.",
      "Isolate.spawn para workers persistentes::Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos.",
      "Isolate.run para cómputo intensivo puntual::Ejecuta una función pesada en un isolate temporal y retorna el resultado al isolate principal con recolección automática.",
      "Transferencia de búferes de memoria sin copia::Envía grandes estructuras binarias entre isolates transfiriendo la propiedad del búfer directamente sin costo de copia.",
    ),
    chapter(
      "Compilación, Modos JIT/AOT & Optimización VM",
      "Modo JIT para desarrollo iterativo rápido::Ejecuta código en la máquina virtual de Dart con compilación Just-In-Time permitiendo recarga en caliente de estado en milisegundos.",
      "Modo AOT a código binario nativo::Compila la aplicación Ahead-Of-Time a binarios máquina directos (ARM64, x86_64) con arranque instantáneo y uso eficiente de CPU.",
      "Tree-Shaking y poda de código no utilizado::Elimina del binario final todas las clases, métodos y bibliotecas a las que no se accede reduciendo drásticamente el tamaño final.",
      "Garbage Collector generacional de Dart::Recupera memoria rápidamente mediante un Young Space para objetos de vida corta y un Old Space compacto para datos longevos.",
      "Dart VM Service y métricas de profiling::Expone puertos de telemetría para inspeccionar asignaciones de memoria, rastrear microsegundos de CPU y depurar el heap.",
    ),
    chapter(
      "Interoperabilidad Nativa con Dart FFI & Tooling",
      "Arquitectura de Foreign Function Interface (FFI)::Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas (.so, .dylib, .dll).",
      "Mapeo de Structs y memoria nativa con dart:ffi::Declara representaciones exactas de estructuras en memoria de C gestionando asignación con malloc y liberación con free.",
      "Punteros nativos y punteros opacos::Manipula direcciones de memoria física y buffers de bytes directos con comprobaciones de tipado estricto en la capa de Dart.",
      "package:ffigen para enlaces automáticos::Genera enlaces y tipos de Dart automáticamente a partir de archivos de cabecera (.h) de C mediante el analizador de LLVM/Clang.",
      "dart analyze, format y compilación multiplataforma::Garantiza estándares de calidad de código, formato unificado y verificación estática en flujos de integración continua.",
    ),
  ],
  sources: [
    source("Guías de lenguaje y biblioteca estándar de Dart", "https://dart.dev/guides"),
    source("Referencia API oficial de bibliotecas Dart", "https://api.dart.dev/"),
    source("Especificación formal del lenguaje Dart", "https://dart.dev/guides/language/spec"),
    source("Guía de concurrencia e Isolates de Dart", "https://dart.dev/language/concurrency"),
  ],
  caseStudy: caseStudy(
    "Ingesta masiva y serialización concurrente con Dart Isolates",
    "Caso práctico integrado de Dart",
    "Construcción de un pipeline de procesamiento de telemetría IoT de alta frecuencia: recepción masiva en segundo plano con Isolates de Dart, normalización tipada estricta mediante Records y Sound Null Safety, procesamiento reactivo con Streams, resolución de saturación en la cola de microtareas y compilación AOT nativa.",
    "El caso demuestra cómo la arquitectura de memoria aislada sin bloqueos y el sistema de tipos Sound Null Safety de Dart garantizan estabilidad y predictibilidad procesando más de 100,000 eventos concurrentes por segundo.",
    [
      step(
        "Inicialización de Worker Isolate",
        "Spawn de hilo independiente sin memoria compartida",
        `// Inicialización de Isolate secundario con ReceivePort
final receivePort = ReceivePort();
await Isolate.spawn(telemetryProcessorWorker, receivePort.sendPort);
final sendPort = await receivePort.first as SendPort;`,
        ["Worker Isolate ejecutando en paralelo", "Canal SendPort/ReceivePort enlazado", "Zero contención de locks en el hilo principal"],
        ["La memoria del isolate secundario es completamente independiente", "No hay colisiones de heap ni sincronización con mutex"],
        "Isolate inicializado listo para recibir paquetes de red",
        "El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario.",
      ),
      step(
        "Normalización tipada con Records y Sound Null Safety",
        "Modelado de datos inmutables y desestructuración exhaustiva",
        `typedef TelemetryData = ({int sensorId, double value, DateTime stamp});

TelemetryData parsePayload(Map<String, dynamic> raw) {
  final id = raw['id'] as int;
  final val = (raw['v'] as num).toDouble();
  return (sensorId: id, value: val, stamp: DateTime.now());
}`,
        ["Records inmutables evaluados estáticamente", "Tipado estricto sin null pointer exceptions", "Desestructuración en una sola línea"],
        ["El compilador Dart optimiza los records evitando asignaciones superfluas de heap", "Sound Null Safety elimina validaciones redundantes de null en runtime"],
        "Estructura tipada de alta densidad empaquetada para el pipeline",
        "El analizador estático verifica la conformidad del contrato antes de compilar.",
      ),
      step(
        "Transformación reactiva con Streams y async*",
        "Pipeline continuo de datos con generadores asíncronos",
        `Stream<TelemetryData> processStream(Stream<TelemetryData> input) async* {
  await for (final packet in input) {
    if (packet.value > 0.0) {
      yield packet;
    }
  }
}`,
        ["Generador asíncrono con yield perezoso", "Consumo ordenado mediante await for", "Filtrado declarativo sin buffers acumulados"],
        ["La máquina virtual de Dart suspende la ejecución cuando no hay consumidores activos", "Los eventos fluyen sin generar copias intermedias en memoria"],
        "Flujo continuo de telemetría procesado en tiempo real",
        "La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos.",
      ),
      step(
        "Detección de saturación en Microtask Queue",
        "Starvation del Event Loop por acumulación de microtareas",
        `// ALERTA: scheduleMicrotask invocada recursivamente dentro del bucle
// agota la cola de microtareas e impide atender eventos de I/O y temporizadores:
// Latencia de I/O: 68 ms > 5 ms (Starvation detectada en el loop)
scheduleMicrotask(() => processNextPacket());`,
        ["Eventos de temporizador e I/O congelados", "La latencia del hilo de procesamiento supera 68 ms", "Alerta de saturación en DevTools CPU Profiler"],
        ["La cola de microtareas tiene prioridad absoluta sobre la cola de eventos ordinaria", "El bucle de eventos no atiende sockets de red hasta vaciar las microtareas"],
        "Degradación del servicio por inanición del Event Loop",
        "Un uso desmedido de microtareas monopoliza el hilo de ejecución e impide procesar eventos externos.",
        "warning",
      ),
      step(
        "Desacoplamiento y balanceo con Isolate.run",
        "Recuperación del tiempo de respuesta del Event Loop",
        `// Corrección: delegar cómputo pesado a Isolate.run con retorno diferido
final result = await Isolate.run(() {
  return computeAggregates(pendingBatch);
});`,
        ["Cómputo trasladado a hilo nativo secundario", "Cola de eventos restablecida a latencia normal (< 3 ms)", "Liberación automática de recursos del worker temporal"],
        ["Isolate.run ejecuta la función en un worker pool con paso de retorno limpio", "El Event Loop principal vuelve a responder de forma balanceada y continua"],
        "Rendimiento restaurado con Event Loop libre de bloqueos",
        "El balanceo entre Isolates y el bucle de eventos garantiza una arquitectura reactiva sostenible.",
        "recovery",
      ),
      step(
        "Compilación nativa AOT y verificación de rendimiento",
        "Código máquina directo ejecutando a 100,000 eventos/s",
        `// Compilación con dart compile exe:
// Binario ELF/Mach-O nativo independiente sin dependencia de VM externa
// Throughput: 112,000 ops/sec | Heap Resident: 18 MB | CPU Load: Óptimo
assert(processedCount >= 100000);`,
        ["Arranque instantáneo en < 15 ms", "Binario nativo optimizado sin sobrecarga de interpretación", "Rendimiento sostenido a más de 100,000 ops/s"],
        ["El compilador AOT aplicó tree-shaking agresivo y desvirtualización de llamadas", "El GC generacional procesa el Young Space en menos de 1 milisegundo"],
        "Servicio de telemetría Dart validado en producción a máxima velocidad",
        "La arquitectura de memoria aislada ofrece máxima fiabilidad y rendimiento constante bajo carga masiva.",
      ),
    ],
  ),
});
