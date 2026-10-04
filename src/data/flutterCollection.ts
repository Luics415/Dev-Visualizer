import { caseStudy, chapter, defineExpandedCollection, primer, source, step } from "./expandedCollectionFactory";

export const flutterCollection = defineExpandedCollection({
  id: "flutter",
  eyebrow: "UI declarativa multiplataforma, motor nativo Impeller y lenguaje Dart fuertemente tipado",
  title: "Flutter & Dart visualizados",
  description: "Una inmersión profunda desde los fundamentos de Dart y Sound Null Safety hasta el árbol tripartito (Widget, Element, RenderObject), gestión reactiva de estado, concurrencia con Isolates, compilación nativa AOT/JIT, motor Impeller y despliegue multiplataforma en iOS, Android, Web y Desktop.",
  counterLabel: "conceptos de Flutter & Dart",
  footer: "Flutter dibuja cada píxel de forma autónoma sobre su propio canvas acelerado por GPU; Dart proporciona la seguridad de tipos, la asincronía basada en eventos y la concurrencia aislada que sostienen aplicaciones fluidas a 120 FPS.",
  notice: "Referencia tecnológica verificada para Flutter 3.x y Dart 3.x. La arquitectura moderna utiliza el motor gráfico Impeller por defecto en iOS/Android y Dart con Sound Null Safety, Records, Patterns e Isolates modernos.",
  primer: primer(
    "Flutter & Dart",
    "Flutter es un framework UI multiplataforma de Google con su propio motor de renderizado gráfico, y Dart es su lenguaje orientado a objetos, fuertemente tipado y optimizado para interfaces de usuario reactivas.",
    "Sirve para construir aplicaciones de alto rendimiento para móviles, web y escritorio compartiendo una única base de código sin recurrir a puentes de serialización lenta ni wrappers web.",
    "Los Widgets configuran de forma inmutable la intención visual; los Elements coordinan el ciclo de vida y la identidad en memoria; los RenderObjects calculan geometría y dibujan en la GPU a través de Impeller.",
    ["Apps móviles iOS y Android", "Aplicaciones de escritorio fluidas", "PWAs y dashboards web", "Diseño interactivo a 120 FPS"],
    "Flutter no envuelve componentes nativos de la plataforma como React Native ni genera HTML/DOM tradicional; pinta directamente en un canvas GPU dedicado mediante su propio motor gráfico.",
    "mobile",
  ),
  chapters: [
    chapter(
      "Sintaxis de Dart & Sound Null Safety",
      "Inferencia var, final y const::Distingue entre inferencia de tipo en asignación, inmutabilidad de referencia y constantes evaluadas en tiempo de compilación.",
      "Sound Null Safety y análisis de flujo::Garantiza que un tipo no anulable nunca contenga null mediante análisis de flujo estático y promoción de tipos.",
      "Operadores de nulabilidad seguros::Usa navegación condicional, coalescencia nula y asignación protegida para manejar ausencia de valor sin excepciones de puntero nulo.",
      "Records y tuplas heterogéneas::Agrupa múltiples valores con nombres o posiciones fijas conservando tipado estricto e inmutabilidad garantizada.",
      "Pattern Matching y Switch Expressions::Desestructura registros, listas y objetos evaluando ramas exhaustivas de forma declarativa con validación del compilador.",
    ),
    chapter(
      "Programación Orientada a Objetos en Dart",
      "Constructores generativos y factory::Define constructores constantes, redireccionados y factorías con listas de inicialización previas a la ejecución del cuerpo.",
      "Modificadores de clase modernos::Controla herencia, implementación y exhaustividad mediante las palabras clave base, interface, final, sealed y mixin class.",
      "Mixins y composición de conducta::Aplica reutilización de métodos sin herencia múltiple mediante with y restricciones de tipo con la cláusula on.",
      "Extension Methods sobre tipos externos::Agrega funcionalidad y operadores a bibliotecas de terceros y tipos primitivos sin herencia ni alterar el código fuente.",
      "Generics reificados en tiempo de ejecución::Parametriza clases y métodos conservando la identidad del tipo genérico durante la ejecución para comprobaciones seguras.",
    ),
    chapter(
      "Asincronía & Event Loop en Dart",
      "Arquitectura del Event Loop::Coordina la cola de eventos de I/O y la cola de microtareas para priorizar trabajo crítico sin bloquear el hilo principal.",
      "Futures y flujos async/await::Representa cómputos asíncronos diferidos con propagación declarativa de errores y sincronización sin callbacks anidados.",
      "Streams y programación reactiva::Produce secuencias continuas de datos asíncronos consumibles mediante transformadores, filtros y suscripciones activas.",
      "Generadores sync* y async*::Genera iterables bajo demanda y flujos continuos mediante yield y yield* con evaluación perezosa y memoria acotada.",
      "Broadcast Streams vs Single-Subscription::Distingue flujos de un único consumidor de eventos de interfaz y sensores que requieren múltiples oyentes independientes.",
    ),
    chapter(
      "Concurrencia & Isolates",
      "Memoria aislada en Isolates::Ejecuta cómputos intensivos en hilos separados con pilas y heaps independientes para evitar condiciones de carrera por memoria compartida.",
      "SendPort y ReceivePort bidireccionales::Establece canales de comunicación asíncrona entre isolates transfiriendo mensajes primitivos y referencias de puerto.",
      "Isolate.run para tareas puntuales::Despacha funciones computacionales pesadas en segundo plano retornando el resultado al hilo principal con liberación automática de recursos.",
      "Transferencia de buffers sin copia::Transfiere búferes de memoria y datos inmutables entre isolates sin costo de serialización mediante punteros controlados.",
      "Prevención de Jank en el UI Thread::Deriva el parseo de JSON masivo, compresión y criptografía fuera del hilo de la interfaz para conservar 120 FPS continuos.",
    ),
    chapter(
      "Filosofía de Widgets en Flutter",
      "UI declarativa como función del estado::Expresa la interfaz de usuario como una función matemática donde el estado de la aplicación produce la configuración visual observable.",
      "StatelessWidget inmutable::Describe interfaces estáticas cuya configuración visual depende exclusivamente de parámetros inmutables provistos en su construcción.",
      "StatefulWidget y objeto State persistente::Mantiene estado mutable a lo largo de múltiples reconstrucciones delegando la persistencia a un objeto State duradero.",
      "Ciclo de vida de State::Orquesta initState, didChangeDependencies, build, didUpdateWidget y dispose de forma determinista ante cambios del entorno.",
      "Composición de widgets atómicos::Construye pantallas sofisticadas combinando pequeños widgets de responsabilidad única en lugar de árboles monolíticos extensos.",
    ),
    chapter(
      "El Árbol Tripartito: Widget, Element y RenderObject",
      "Widget Tree como especificación::Genera estructuras inmutables y ultraligeras que Flutter crea, compara y descarta a alta velocidad sin penalización gráfica.",
      "Element Tree como administrador de ciclo de vida::Vincula los widgets efímeros con los nodos visuales persistentes, gestionando la identidad en memoria y la reconciliación.",
      "RenderObject Tree como ejecutor de geometría::Calcula restricciones de tamaño, posiciones absolutas en pantalla, hit-testing y emisión de primitivas de dibujo.",
      "Claves y preservación de identidad (Keys)::Usa ValueKey, ObjectKey y GlobalKey para preservar el estado interno de elementos al reordenar o filtrar colecciones dinámicas.",
      "BuildContext como referencia de ubicación::Representa la ubicación exacta de un widget dentro del árbol de elementos y permite consultar temas y ancestros heredados.",
    ),
    chapter(
      "Layout y Sistema de Restricciones (Constraints)",
      "Regla de oro de Constraints::Las restricciones bajan desde el padre, los tamaños suben desde el hijo, y el padre determina la posición geométrica final.",
      "BoxConstraints tight y loose::Establece rangos mínimos y máximos de ancho y alto que gobiernan de forma estricta o flexible las dimensiones de cada RenderBox.",
      "Flex, Row y Column::Distribuye espacio disponible en ejes principal y cruzado controlando alineación, expansión proporcional y envoltura elástica.",
      "CustomScrollView y Slivers::Implementa desplazamiento bidireccional de alto rendimiento virtualizando la creación de elementos visuales bajo demanda de scroll.",
      "LayoutBuilder para diseño responsivo::Inspecciona las restricciones espaciales entrantes en tiempo de ejecución para alternar layouts de móvil, tableta o escritorio.",
    ),
    chapter(
      "Gestión de Estado (State Management)",
      "Estado efímero vs Estado de aplicación::Diferencia variables locales de vista (animaciones, campos de texto) de modelos de dominio globales compartidos entre rutas.",
      "InheritedWidget para inyección contextual::Propaga datos hacia abajo en el árbol de widgets permitiendo que los descendientes escuchen cambios sin pasar propiedades manualmente.",
      "ValueNotifier y ChangeNotifier reactivos::Emite notificaciones livianas cuando cambia un valor encapsulado para reconstruir únicamente las áreas suscritas de la pantalla.",
      "Patrón BLoC y flujos unidireccionales::Separa lógica de negocio y presentación procesando flujos de eventos entrantes y emitiendo estados inmutables estructurados.",
      "Riverpod y reactividad sin BuildContext::Proporciona inyección de dependencias tipada, cacheada y segura en tiempo de compilación independiente del ciclo de vida del widget.",
    ),
    chapter(
      "Navegación & Routing Declarativo",
      "Navigator 1.0 y pila imperativa::Administra pilas de pantallas mediante push y pop tradicionales para flujos secuenciales cerrados en dispositivos móviles.",
      "Navigator 2.0 y Router API::Sincroniza el estado interno de la aplicación con la barra de direcciones del navegador y el historial de navegación de la plataforma.",
      "go_router y Deep Linking unificado::Declara rutas jerárquicas, redirecciones automáticas por autenticación y análisis de parámetros de consulta tipados.",
      "Hero Animations entre pantallas::Interpola suavemente la posición y dimensiones de un elemento visual compartido durante transiciones entre páginas independientes.",
      "Modales, BottomSheets y Diálogos::Despliega superficies flotantes y capas contextuales con barreras transparentes y captura accesible de enfoque.",
    ),
    chapter(
      "Animaciones & Motion System",
      "AnimationController y TickerProvider::Sincroniza el avance temporal de una animación con el refresco de pantalla del dispositivo para garantizar suavidad absoluta.",
      "CurvedAnimation y Tweens matemáticos::Interpola valores de posición, escala o color entre límites específicos aplicando curvas de aceleración y elasticidad física.",
      "AnimatedBuilder y aislamiento de pintura::Reconstruye únicamente el fragmento visual en movimiento evitando la ejecución innecesaria del método build de widgets ancestros.",
      "Animaciones implícitas declarativas::Anima transiciones automáticas de propiedades de estilo mediante AnimatedContainer, AnimatedOpacity y AnimatedPositioned.",
      "Transformaciones matriciales 4D::Aplica rotaciones tridimensionales, sesgos y proyecciones espaciales aceleradas por GPU sin alterar el layout de los elementos vecinos.",
    ),
    chapter(
      "Gestos, Entrada y Gráficos CustomPainter",
      "GestureArena y resolución de conflictos::Coordina múltiples reconocedores de gestos simultáneos mediante un sistema de competencia que asigna el evento al ganador.",
      "Listener y eventos crudos de puntero::Captura información detallada de contacto, presión y coordenadas directas antes de que la arena de gestos filtre la interacción.",
      "CustomPainter y primitivas de Canvas::Dibuja trazados vectoriales, gradientes, sombras y curvas complejas mediante llamadas directas al motor gráfico del dispositivo.",
      "CustomClipper y máscaras geométricas::Recorta la superficie gráfica de cualquier widget usando trayectorias Bezier, elipses o polígonos arbitrarios.",
      "Hit Testing en jerarquías RenderBox::Determina qué objetos del árbol interceptan las coordenadas del puntero para despachar eventos de interacción con precisión.",
    ),
    chapter(
      "Compilación, Impeller & Producción",
      "Modos de compilación JIT y AOT::Aprovecha compilación JIT para recarga en caliente instantánea en desarrollo y AOT para código máquina nativo optimizado en release.",
      "Motor gráfico Impeller sin Shader Jank::Elimina tirones visuales precompilando shaders AOT y optimizando el despacho de primitivas gráficas hacia Vulkan y Metal.",
      "Platform Channels y MethodChannel::Comunica la aplicación Flutter con código nativo en Swift, Kotlin o C++ mediante paso asíncrono de mensajes binarios codificados.",
      "Dart FFI para llamadas nativas directas::Invoca funciones exportadas en bibliotecas dinámicas de C o Rust sin sobrecarga de serialización ni puentes de mensajes.",
      "Flutter DevTools y perfilado de frames::Mide presupuestos de tiempo de cuadro, detecta reconstrucciones superfluas y diagnostica fugas de memoria en tiempo real.",
    ),
  ],
  sources: [
    source("Documentación oficial de Flutter", "https://docs.flutter.dev/"),
    source("Guías de lenguaje y biblioteca estándar de Dart", "https://dart.dev/guides"),
    source("Referencia API de Flutter", "https://api.flutter.dev/"),
    source("Arquitectura interna del motor de Flutter", "https://docs.flutter.dev/resources/architectural-overview"),
  ],
  caseStudy: caseStudy(
    "Telemetría reactiva en tiempo real y renderizado fluido a 120 FPS",
    "Caso práctico integrado de Flutter & Dart",
    "Construcción de un monitor de telemetría IoT de alta frecuencia: ingesta asíncrona en un Isolate secundario, normalización tipada con Records y Sound Null Safety, despacho de estado con BLoC, y renderizado en pantalla sin jank mediante CustomPainter e Impeller.",
    "El caso demuestra cómo la combinación de Isolates de Dart y el pipeline de renderizado de Flutter permite mantener 120 FPS estables procesando miles de muestras por segundo sin bloquear el hilo principal.",
    [
      step(
        "Aislamiento de ingesta con Isolate",
        "Hilo secundario para recepción y parseo",
        `// spawn isolate secundario con SendPort
final receivePort = ReceivePort();
await Isolate.spawn(telemetryWorker, receivePort.sendPort);
final sendPort = await receivePort.first as SendPort;`,
        ["Spawn de Isolate dedicado", "Canal SendPort/ReceivePort activo", "Zero-jank en hilo principal"],
        ["El worker procesa streams WebSocket sin competir por el ciclo de reloj de la UI", "La memoria entre isolates no se comparte, eliminando locks"],
        "Isolate inicializado procesando paquetes de telemetría a 1000 Hz",
        "El hilo principal de Flutter queda 100% libre para procesar gestos y animación de cuadros.",
      ),
      step(
        "Normalización tipada con Records y Sound Null Safety",
        "Desestructuración exhaustiva sin sobrecarga de objetos",
        `typedef TelemetryRecord = ({int deviceId, double voltage, double temp, DateTime timestamp});

TelemetryRecord parsePacket(Map<String, dynamic> raw) {
  final deviceId = raw['id'] as int;
  final voltage = (raw['v'] as num).toDouble();
  final temp = (raw['t'] as num).toDouble();
  return (deviceId: deviceId, voltage: voltage, temp: temp, timestamp: DateTime.now());
}`,
        ["Records inmutables con tipado estricto", "Validación estática exhaustiva", "Desestructuración en una sola línea"],
        ["El compilador Dart optimiza los records evitando asignaciones de heap innecesarias", "Sound Null Safety previene excepciones en tiempo de ejecución"],
        "Estructura tipada compacta lista para transferir al hilo de UI",
        "Dart promueve los tipos automáticamente tras las aserciones de tipado estricto.",
      ),
      step(
        "Despacho de estado reactivo con BLoC",
        "Flujo unidireccional desacoplado",
        `class TelemetryBloc extends Bloc<TelemetryEvent, TelemetryState> {
  TelemetryBloc(Stream<TelemetryRecord> stream) : super(TelemetryInitial()) {
    on<DataReceived>((event, emit) => emit(TelemetryActive(event.record)));
    stream.listen((record) => add(DataReceived(record)));
  }
}`,
        ["Patrón BLoC desacoplado", "Eventos entrantes deterministas", "Estados inmutables emitidos hacia la UI"],
        ["StreamBuilder y BlocBuilder escuchan únicamente cambios pertinentes", "Los eventos se serializan en el loop de eventos sin bloquear la vista"],
        "Flujo de datos reactivo y predecible conectado a la interfaz",
        "La interfaz sólo se redibuja ante transiciones de estado reales.",
      ),
      step(
        "Detección de sobrecosto en rebuild global",
        "Reconstrucción innecesaria del árbol completo",
        `// ALERTA: setState() en la raíz o falta de RepaintBoundary
// provoca relayout y repintado de toda la pantalla a 1000 Hz:
// Frame time: 24.2 ms > 8.33 ms (Jank detectado, caída a 41 FPS)
debugProfileBuildsEnabled = true;`,
        ["Pérdida de cuadros en la UI", "DevTools marca barras rojas en el hilo UI", "Relayout en cascada de widgets hijos"],
        ["El RenderTree entero invalida capas rasterizadas previas", "La GPU satura su cola esperando el envío de DisplayList"],
        "Degradación del rendimiento por repintado masivo no aislado",
        "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía.",
        "warning",
      ),
      step(
        "Aislamiento con RepaintBoundary y Rebuild selectivo",
        "Recuperación del presupuesto de fotogramas",
        `Widget build(BuildContext context) {
  return RepaintBoundary(
    child: BlocBuilder<TelemetryBloc, TelemetryState>(
      buildWhen: (prev, curr) => curr is TelemetryActive,
      builder: (context, state) => CustomPaint(
        painter: WaveformPainter(state.samples),
      ),
    ),
  );
}`,
        ["RepaintBoundary para aislar la capa GPU", "buildWhen para filtrar reconstrucciones", "Cero relayout en nodos hermanos"],
        ["El Element Tree retiene instancias y el RenderObject reutiliza su textura de composición", "Impeller sólo actualiza el DisplayList del sub-árbol vectorial"],
        "Estabilidad restaurada: tiempo de frame reducido a 3.8 ms",
        "El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva.",
        "recovery",
      ),
      step(
        "Auditoría final y renderizado a 120 FPS con Impeller",
        "Presupuesto de 8.33 ms por fotograma verificado",
        `// Auditoría en Flutter DevTools:
// Frame time: 3.8 ms / 8.33 ms (Objetivo 120 FPS)
// UI Thread: 1.4 ms | Raster Thread: 2.4 ms | Shader Jank: 0 ms
assert(frameDuration < const Duration(milliseconds: 8));`,
        ["Tiempos de cuadro < 8.33 ms estables", "Zero shader compilation jank", "Estabilidad a 120 FPS sostenidos"],
        ["Impeller utiliza shaders precompilados AOT eliminando retrasos en primer arranque", "El recolector de basura generacional de Dart evita pausas largas en el heap"],
        "Pipeline de telemetría validado en producción a máxima velocidad",
        "La telemetría fluye en tiempo real con una experiencia visual de respuesta instantánea.",
      ),
    ],
  ),
});
