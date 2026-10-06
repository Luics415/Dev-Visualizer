import { caseStudy, chapter, defineExpandedCollection, primer, source, step } from "./expandedCollectionFactory";

export const flutterCollection = defineExpandedCollection({
  id: "flutter",
  eyebrow: "UI declarativa multiplataforma, árbol tripartito, motor gráfico Impeller y renderizado autónomo por GPU",
  title: "Flutter visualizado",
  description: "Una inmersión técnica profunda en el framework de interfaces multiplataforma de Google: desde la filosofía inmutable de Widgets y el árbol tripartito (Widget, Element, RenderObject) hasta el protocolo de restricciones BoxConstraints, composición de capas con RepaintBoundary, trazado vectorial con CustomPainter, el nuevo motor gráfico Impeller y rendimiento fluido a 120 FPS sin shader jank.",
  counterLabel: "conceptos de Flutter",
  footer: "Flutter no traduce widgets a controles nativos del sistema ni genera HTML/DOM tradicional; dibuja cada píxel de forma totalmente autónoma sobre un canvas acelerado por GPU a través de su propio pipeline gráfico nativo.",
  notice: "Referencia tecnológica verificada para Flutter 3.x. Incorpora el motor gráfico Impeller por defecto en iOS y Android con shaders precompilados AOT, arquitectura tripartita desacoplada, gestión reactiva de estado y perfilado avanzado en DevTools.",
  primer: primer(
    "Flutter",
    "Flutter es un framework UI declarativo y multiplataforma de Google que contiene su propio motor de renderizado gráfico de alto rendimiento para pintar interfaces en iOS, Android, Web, macOS, Windows y Linux.",
    "Sirve para construir aplicaciones interactivas fluidas compartiendo una única base de código y garantizando consistencia visual idéntica y tiempos de respuesta nativos a 120 FPS.",
    "Los Widgets definen la configuración inmutable deseada; los Elements preservan la identidad y el ciclo de vida en memoria; los RenderObjects calculan las geometrías y emiten primitivas de dibujo directo a la GPU.",
    ["Apps móviles de alta gama en iOS y Android", "Aplicaciones de escritorio para Windows, macOS y Linux", "Experiencias interactivas fluidas a 120 FPS", "Sistemas de diseño multiplataforma consistentes"],
    "Flutter no utiliza puentes asíncronos lentos con la plataforma ni depende de componentes nativos de interfaz de usuario; controla cada píxel de la pantalla directamente desde su motor gráfico.",
    "mobile",
  ),
  chapters: [
    chapter(
      "Filosofía de Widgets & UI Declarativa",
      "UI declarativa como función del estado::Expresa la interfaz de usuario como una función matemática pura donde cualquier transición del estado de datos produce de forma reactiva una nueva configuración visual.",
      "StatelessWidget e inmutabilidad estricta::Describe interfaces estáticas cuya apariencia depende exclusivamente de parámetros inmutables provistos en su llamada constructora constante.",
      "StatefulWidget y objeto State persistente::Conserva estado mutable entre múltiples reconstrucciones desacoplando la configuración efímera del widget de un objeto State de larga vida en memoria.",
      "Ciclo de vida del objeto State::Orquesta initState, didChangeDependencies, build, didUpdateWidget y dispose de forma determinista conforme el widget interactúa con su entorno.",
      "Composición atómica sobre herencia::Construye pantallas y componentes sofisticados combinando múltiples widgets pequeños de responsabilidad única en lugar de extender clases monolíticas complejas.",
    ),
    chapter(
      "El Árbol Tripartito: Widget, Element y RenderObject",
      "Widget Tree como especificación efímera::Genera jerarquías inmutables y ultraligeras que Flutter crea, compara y descarta a altísima velocidad sin penalización de memoria ni de renderizado.",
      "Element Tree como administrador de ciclo de vida::Vincula los widgets inmutables con los nodos gráficos reales, gestionando la identidad en memoria, el ciclo de vida y la reconciliación eficiente.",
      "RenderObject Tree como ejecutor de geometría::Calcula restricciones de tamaño, posiciones cartesianas absolutas en pantalla, hit-testing de eventos táctiles y emisión de primitivas de dibujo.",
      "Claves y preservación de identidad (Keys)::Usa ValueKey, ObjectKey y GlobalKey para preservar el estado interno de elementos al reordenar, insertar o filtrar colecciones dinámicas de widgets.",
      "BuildContext como coordenada en el árbol::Representa la ubicación exacta de un widget dentro del árbol de elementos y permite consultar temas heredados, medios de pantalla y ancestros en la jerarquía.",
    ),
    chapter(
      "Protocolo de Layout, BoxConstraints & RenderBox",
      "Regla cardinal de Constraints::Las restricciones geométricas bajan desde el padre, los tamaños finales suben desde el hijo, y el padre determina la posición cartesiana absoluta del elemento.",
      "BoxConstraints tight y loose::Aplica restricciones donde el ancho y alto están fijados en valores exactos inamovibles o en rangos abiertos con valores mínimos en cero.",
      "RenderFlex, Row y Column::Distribuye el espacio disponible en los ejes principal y transversal controlando alineación, expansión elástica con Flexible y ajuste estricto con Expanded.",
      "Stack, Positioned y apilamiento z-index::Superpone múltiples widgets en capas tridimensionales ordenadas posicionando elementos de forma absoluta o relativa a los límites del contenedor.",
      "LayoutBuilder para adaptación responsiva::Inspecciona las restricciones espaciales entrantes en tiempo de ejecución para alternar dinámicamente entre layouts de móvil, tableta o escritorio.",
    ),
    chapter(
      "Composición Gráfica, Capas & RepaintBoundary",
      "Aislamiento de pintura con RepaintBoundary::Separa un sub-árbol en su propia capa de rasterización GPU evitando que sus actualizaciones invaliden y redibujen los widgets circundantes.",
      "Layer Tree y composición en la GPU::Genera una jerarquía de capas de dibujo que el motor gráfico compone de forma acelerada por hardware aprovechando texturas independientes.",
      "RenderParagraph y formateo de texto nativo::Mide y dibuja tipografías vectoriales complejas gestionando saltos de línea, selección de glifos y aceleración bidireccional de texto.",
      "OverflowBox y control de desbordamiento visual::Permite que un widget hijo ignore las restricciones del padre y dibuje fuera de su límite sin generar errores de RenderFlex overflow.",
      "IntrinsicHeight e IntrinsicWidth como costo controlado::Calcula el tamaño natural de un sub-árbol realizando múltiples pasadas de medición cuando se requiere simetría forzada entre columnas.",
    ),
    chapter(
      "Dibujo a Bajo Nivel con CustomPainter & Canvas",
      "CustomPainter y emisión de DisplayList::Dibuja primitivas gráficas vectoriales personalizadas invocando directamente la API de Canvas sin sobrecarga de widgets intermedios.",
      "Paint y configuración de renderizado gráfico::Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas.",
      "Path vectorial y curvas de Bezier::Traza polígonos, arcos elípticos y curvas cuadráticas y cúbicas complejas para generar interfaces gráficas personalizadas de alta precisión.",
      "CustomClipper y máscaras geométricas::Recorta el contorno visible de cualquier widget hijo aplicando formas vectoriales arbitrarias con antialiasing por hardware.",
      "Optimización shouldRepaint para rendimiento::Evita invocar el método de pintado cuando los parámetros y datos del lienzo no han cambiado respecto a la iteración anterior.",
    ),
    chapter(
      "Motor Gráfico Impeller & Shaders AOT",
      "Arquitectura moderna del motor Impeller::Sustituye a Skia empleando una arquitectura gráfica orientada a APIs modernas (Vulkan en Android, Metal en iOS) para renderizado ultrarrápido.",
      "Eliminación de Shader Compilation Jank::Precompila todos los fragment y vertex shaders durante el build AOT evitando tirones en el primer renderizado de cualquier pantalla o animación.",
      "Teselado dinámico de curvas y polígonos::Convierte trazados vectoriales complejos en triángulos simples directamente en la GPU acelerando el renderizado de curvas Bezier masivas.",
      "RenderPass y canalización de comandos gráficos::Agrupa instrucciones de dibujo en pases de renderizado que maximizan la concurrencia del hardware gráfico y minimizan cambios de estado.",
      "Shaders personalizados con Flutter GPU::Carga y ejecuta archivos SPIR-V de shaders HLSL/GLSL personalizados para efectos visuales avanzados, deformaciones e iluminación en tiempo real.",
    ),
    chapter(
      "Gestión de Estado, Inyección Contextual & BLoC",
      "InheritedWidget para propagación contextual::Distribuye modelos de datos hacia abajo en el árbol de widgets permitiendo suscripciones automáticas sin paso manual de props.",
      "ChangeNotifier y ValueNotifier reactivos::Implementa patrones de notificación ligera que reconstruyen selectivamente únicamente los widgets suscritos a la mutación del valor.",
      "Patrón BLoC y flujo unidireccional de eventos::Separa estrictamente la lógica de negocio de la UI procesando flujos asíncronos de eventos entrantes y emitiendo estados inmutables.",
      "BlocBuilder, BlocListener y buildWhen::Controla con precisión quirúrgica qué widgets se reconstruyen y cuáles ejecutan efectos secundarios ante transiciones de estado específicas.",
      "Inyección de dependencias con Provider y Riverpod::Administra el ciclo de vida de los servicios de la aplicación con resolución tipada y pruebas unitarias aisladas sin BuildContext.",
    ),
    chapter(
      "Sistema de Animaciones, Tweens & Física",
      "AnimationController y sincronización con Ticker::Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa (60 Hz a 120 Hz) de la pantalla.",
      "Tweens matemáticos y curvas de aceleración::Interpola valores de posición, escala, rotación o color aplicando curvas elásticas, cinéticas o desaceleradas mediante CurvedAnimation.",
      "AnimatedBuilder para aislamiento de frames::Aísla la reconstrucción del widget animado de sus componentes estáticos evitando llamadas redundantes al método build de toda la vista.",
      "Animaciones implícitas declarativas::Anima cambios de propiedades visuales automáticamente con AnimatedContainer, AnimatedOpacity y AnimatedAlign sin controladores manuales.",
      "Física de resortes con SpringSimulation::Simula comportamientos físicos de masa, rigidez y amortiguamiento realistas para elementos que rebotan o responden al arrastre del usuario.",
    ),
    chapter(
      "Reconocimiento de Gestos, Arena & Hit-Testing",
      "GestureDetector y eventos semánticos::Reconoce toques, pulsaciones largas, doble toques, arrastres direccionales y gestos de escala con coordenadas cartesianas normalizadas.",
      "GestureArena y resolución de conflictos::Resuelve disputas cuando múltiples reconocedores reclaman el mismo gesto físico decidiendo el ganador según la dirección del movimiento.",
      "Listener y eventos crudos de puntero (PointerEvents)::Captura eventos de bajo nivel de puntero (PointerDown, PointerMove, PointerUp) directamente desde el pipeline de entrada de la plataforma.",
      "Hit-Testing en el árbol de RenderObjects::Verifica qué objetos geométricos del árbol colisionan con las coordenadas del toque del usuario para despachar los eventos al objetivo correcto.",
      "AbsorbPointer e IgnorePointer::Controla si un sub-árbol consume los toques bloqueando la interacción o permite que los eventos pasen transparentemente a los widgets que están detrás.",
    ),
    chapter(
      "Scroll Profundo, Slivers & Viewports Virtualizados",
      "CustomScrollView y composición de Slivers::Combina múltiples efectos de desplazamiento en una única superficie unificada compartiendo la misma posición de scroll relativa.",
      "SliverList y SliverGrid con creación perezosa::Virtualiza la construcción de listas y cuadrículas instanciando en memoria únicamente los widgets que intersectan el viewport visible.",
      "SliverAppBar y cabeceras colapsables::Implementa barras de navegación superiores que se expanden, colapsan, fijan o flotan suavemente en respuesta al desplazamiento del usuario.",
      "ScrollController y escucha de posiciones::Monitorea el desplazamiento en píxeles, detecta umbrales de paginación infinita y permite animar saltos programáticos a cualquier posición.",
      "NestedScrollView y coordinación de vistas::Sincroniza el scroll de una cabecera externa con vistas de pestañas internas conservando la inercia física en transiciones continuas.",
    ),
    chapter(
      "Navegación Declarativa, Router API & Deep Linking",
      "Navigator 2.0 y arquitectura declarativa::Sincroniza la pila visual de pantallas con el estado interno de la aplicación permitiendo restauración confiable de la historia de navegación.",
      "go_router y rutas jerárquicas tipadas::Declara rutas complejas, parámetros de ruta, sub-rutas anidadas y guardias de autenticación centralizadas con configuración limpia.",
      "Deep Linking en iOS, Android y Web::Abre pantallas específicas de la aplicación a partir de URLs universales conservando la jerarquía completa de navegación hacia atrás.",
      "Hero Animations entre pantallas::Transforma visualmente un elemento compartido interpolando su posición geométrica y escala de forma fluida durante transiciones de ruta.",
      "Modales, Diálogos y Sheets accesibles::Despliega superficies flotantes contextuales con barreras transparentes, animaciones de entrada y manejo accesible de foco de teclado.",
    ),
    chapter(
      "Plataformas Nativas, MethodChannels & DevTools",
      "MethodChannel y mensajería binaria asíncrona::Comunica la aplicación Flutter con código nativo en Kotlin/Java (Android) y Swift/Objective-C (iOS) mediante serialización binaria estándar.",
      "EventChannel para streams nativos::Transmite flujos continuos de datos desde sensores nativos (acelerómetro, GPS, Bluetooth) hacia la aplicación Flutter como un Stream reactivo.",
      "Pigeon para contratos tipados seguros::Genera código de comunicación nativa tipado en tiempo de compilación eliminando errores manuales de serialización en platform channels.",
      "Flutter DevTools y Performance Profiler::Inspecciona la tasa de cuadros por segundo, detecta frames lentos en UI o Raster thread y mide tiempos de ejecución de layouts y pintados.",
      "Widget Rebuild Tracker e inspección de memoria::Identifica qué widgets se reconstruyen innecesariamente en la aplicación y detecta fugas de memoria en imágenes y controladores.",
    ),
  ],
  sources: [
    source("Documentación oficial de Flutter", "https://docs.flutter.dev/"),
    source("Referencia API oficial de widgets y clases de Flutter", "https://api.flutter.dev/"),
    source("Arquitectura interna del motor de Flutter", "https://docs.flutter.dev/resources/architectural-overview"),
    source("Guía técnica y arquitectura del motor Impeller", "https://docs.flutter.dev/perf/impeller"),
  ],
  caseStudy: caseStudy(
    "Renderizado de instrumentación crítica y telemetría a 120 FPS",
    "Caso práctico integrado de Flutter",
    "Construcción de un panel de telemetría e instrumentación gráfica en tiempo real: dibujo de osciloscopio vectorial con CustomPainter, gestión reactiva de estado con BLoC, aislamiento de capas de pintado con RepaintBoundary, detección de degradación por reconstrucción no aislada y validación continua a 120 FPS sostenidos con el motor Impeller.",
    "El caso demuestra cómo el pipeline de renderizado de Flutter y el motor Impeller permiten dibujar visualizaciones complejas de alta frecuencia garantizando tiempos de cuadro inferiores a 8.33 ms sin shader compilation jank.",
    [
      step(
        "Configuración del canvas con CustomPainter",
        "Emisión directa de DisplayList sobre el motor gráfico",
        `class WaveformPainter extends CustomPainter {
  final List<double> samples;
  WaveformPainter(this.samples);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFF02569B)
      ..strokeWidth = 2.0
      ..style = PaintingStyle.stroke;
    final path = Path();
    for (var i = 0; i < samples.length; i++) {
      final x = (i / samples.length) * size.width;
      final y = size.height - (samples[i] * size.height);
      i == 0 ? path.moveTo(x, y) : path.lineTo(x, y);
    }
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(WaveformPainter old) => old.samples != samples;
}`,
        ["CustomPainter vectorial directo", "Trazado de Path sin sobrecarga DOM", "shouldRepaint optimizado por valor"],
        ["El RenderCustomPaint emite comandos DisplayList directos", "La geometría se tesela de forma eficiente en hardware"],
        "Osciloscopio gráfico listo para renderizar muestras de alta frecuencia",
        "La interfaz prescinde de puentes lentos de serialización interactuando directamente con el motor gráfico.",
      ),
      step(
        "Despacho reactivo de estado con BLoC",
        "Recepción desacoplada de eventos de telemetría",
        `class TelemetryBloc extends Bloc<TelemetryEvent, TelemetryState> {
  TelemetryBloc(Stream<List<double>> stream) : super(TelemetryInitial()) {
    on<TelemetryUpdated>((event, emit) => emit(TelemetryActive(event.samples)));
    stream.listen((data) => add(TelemetryUpdated(data)));
  }
}`,
        ["Patrón BLoC con flujo unidireccional", "Eventos atómicos en cola reactiva", "Estados inmutables emitidos a la interfaz"],
        ["BlocBuilder escucha exclusivamente cambios de estado relevantes", "Los eventos se procesan en el bucle de eventos sin congelar la UI"],
        "Flujo de datos reactivo conectado al árbol de widgets",
        "La interfaz gráfica sólo se redibuja ante transiciones de estado explícitas.",
      ),
      step(
        "Aislamiento de capas GPU con RepaintBoundary",
        "Creación de textura independiente en el Layer Tree",
        `Widget build(BuildContext context) {
  return RepaintBoundary(
    child: BlocBuilder<TelemetryBloc, TelemetryState>(
      buildWhen: (prev, curr) => curr is TelemetryActive,
      builder: (context, state) => CustomPaint(
        painter: WaveformPainter(state.samples),
        size: const Size(double.infinity, 120),
      ),
    ),
  );
}`,
        ["RepaintBoundary para aislar la capa GPU", "buildWhen para filtrar reconstrucciones", "Cero relayout en widgets vecinos"],
        ["El Element Tree retiene instancias y el RenderObject reutiliza su textura de composición", "Impeller sólo actualiza el DisplayList del sub-árbol vectorial"],
        "Sub-árbol de pintado encapsulado en textura GPU propia",
        "Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz.",
      ),
      step(
        "Detección de sobrecosto por rebuild global",
        "Invalidación masiva del árbol y caída de cuadros",
        `// ALERTA: invocación de setState() en el widget raíz o remoción de RepaintBoundary
// invalida todo el RenderTree a 1000 Hz saturando el pipeline:
// Frame time: 24.2 ms > 8.33 ms (Jank severo, caída de 120 FPS a 41 FPS)
debugProfileBuildsEnabled = true;`,
        ["Pérdida perceptible de fluidez en pantalla", "DevTools Performance marca barras rojas en UI Thread", "Relayout masivo en cascada en toda la jerarquía"],
        ["El RenderTree entero invalida capas rasterizadas previas", "La GPU satura su cola esperando el envío de comandos de dibujo globales"],
        "Degradación del rendimiento por repintado masivo no aislado",
        "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla.",
        "warning",
      ),
      step(
        "Restauración con RepaintBoundary y Rebuild selectivo",
        "Recuperación del presupuesto de fotogramas",
        `// Corrección: reincorporar RepaintBoundary y filtrar con buildWhen selectivo
// Aislamiento completo de la superficie de renderizado del osciloscopio
// Frame time restablecido: 3.8 ms (Presupuesto 120 FPS: 8.33 ms)`,
        ["RepaintBoundary activo en el nodo vectorial", "Tiempo de frame reducido a 3.8 ms", "Cero invalidación en widgets hermanos"],
        ["La composición por hardware reutiliza las texturas cacheadas de la interfaz estática", "Impeller procesa únicamente los comandos del DisplayList modificado"],
        "Fluidez restaurada con estabilidad a 120 FPS",
        "El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva.",
        "recovery",
      ),
      step(
        "Auditoría en Flutter DevTools y verificación con Impeller",
        "Presupuesto de 8.33 ms por fotograma verificado en producción",
        `// Perfilado en Flutter DevTools:
// Frame time: 3.8 ms / 8.33 ms (Objetivo 120 FPS cumplido)
// UI Thread: 1.4 ms | Raster Thread: 2.4 ms | Shader Jank: 0 ms
assert(frameDuration < const Duration(milliseconds: 8));`,
        ["Tiempos de cuadro < 8.33 ms sostenidos", "Zero shader compilation jank con shaders AOT", "Consumo óptimo de GPU y memoria"],
        ["Impeller utiliza shaders precompilados AOT eliminando pausas de compilación", "El recolector de basura generacional de Dart evita pausas largas en el heap"],
        "Aplicación validada en producción con métricas de rendimiento óptimas",
        "La instrumentación fluye en tiempo real con una experiencia visual de respuesta instantánea a 120 FPS.",
      ),
    ],
  ),
});
