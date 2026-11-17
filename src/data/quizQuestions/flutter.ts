import type { QuizQuestion } from "@/data/quizTypes";

export const flutterQuestions: QuizQuestion[] = [
  {
    "id": "flutter-q-01",
    "collectionId": "flutter",
    "question": "En Flutter (Dibujo a Bajo Nivel con CustomPainter & Canvas), ¿qué función técnica cumple «CustomClipper y máscaras geométricas»?",
    "options": [
      "Recorta el contorno visible de cualquier widget hijo aplicando formas vectoriales arbitrarias con antialiasing por hardware al operar.",
      "Evita invocar el método de pintado cuando los parámetros y datos del lienzo no han cambiado respecto a la iteración anterior.",
      "Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa de la pantalla al operar.",
      "Comunica la aplicación Flutter con código nativo en Kotlin/Java y Swift/Objective-C mediante serialización binaria estándar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CustomClipper y máscaras geométricas (Dibujo a Bajo Nivel con CustomPainter & Canvas): Recorta el contorno visible de cualquier widget hijo aplicando formas vectoriales arbitrarias con antialiasing por hardware.",
    "topic": "Dibujo a Bajo Nivel con CustomPainter & Canvas",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-02",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «Optimización shouldRepaint para rendimiento» en dibujo a bajo nivel con custompainter & canvas?",
    "options": [
      "Recorta el contorno visible de cualquier widget hijo aplicando formas vectoriales arbitrarias con antialiasing por hardware al operar.",
      "Evita invocar el método de pintado cuando los parámetros y datos del lienzo no han cambiado respecto a la iteración anterior.",
      "Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas.",
      "Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa de la pantalla al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Optimización shouldRepaint para rendimiento (Dibujo a Bajo Nivel con CustomPainter & Canvas): Evita invocar el método de pintado cuando los parámetros y datos del lienzo no han cambiado respecto a la iteración anterior.",
    "topic": "Dibujo a Bajo Nivel con CustomPainter & Canvas",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-03",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «Arquitectura moderna del motor Impeller»?",
    "options": [
      "La instrumentación fluye en tiempo real con una experiencia visual de respuesta instantánea a 120 FPS al operar.",
      "Captura eventos de bajo nivel de puntero directamente desde el pipeline de entrada de la plataforma al operar.",
      "Sustituye a Skia empleando una arquitectura gráfica orientada a APIs modernas para renderizado ultrarrápido.",
      "La interfaz prescinde de puentes lentos de serialización interactuando directamente con el motor gráfico."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Arquitectura moderna del motor Impeller (Motor Gráfico Impeller & Shaders AOT): Sustituye a Skia empleando una arquitectura gráfica orientada a APIs modernas (Vulkan en Android, Metal en iOS) para renderizado ultrarrápido.",
    "topic": "Motor Gráfico Impeller & Shaders AOT",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-04",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «AnimationController y sincronización con Ticker»?",
    "options": [
      "Transmite flujos continuos de datos desde sensores nativos hacia la aplicación Flutter como un Stream reactivo al operar.",
      "Sustituye a Skia empleando una arquitectura gráfica orientada a APIs modernas para renderizado ultrarrápido al operar.",
      "La interfaz prescinde de puentes lentos de serialización interactuando directamente con el motor gráfico en el flujo.",
      "Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa de la pantalla."
    ],
    "correctAnswerIndex": 3,
    "explanation": "AnimationController y sincronización con Ticker (Sistema de Animaciones, Tweens & Física): Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa (60 Hz a 120 Hz) de la pantalla.",
    "topic": "Sistema de Animaciones, Tweens & Física",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-05",
    "collectionId": "flutter",
    "question": "Respecto a reconocimiento de gestos, arena & hit-testing en Flutter, ¿cuál es el propósito de «Listener»?",
    "options": [
      "Captura eventos de bajo nivel de puntero directamente desde el pipeline de entrada de la plataforma.",
      "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla.",
      "Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz al operar.",
      "El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Listener y eventos crudos de puntero (PointerEvents) (Reconocimiento de Gestos, Arena & Hit-Testing): Captura eventos de bajo nivel de puntero (PointerDown, PointerMove, PointerUp) directamente desde el pipeline de entrada de la plataforma.",
    "topic": "Reconocimiento de Gestos, Arena & Hit-Testing",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-06",
    "collectionId": "flutter",
    "question": "En Flutter (Plataformas Nativas, MethodChannels & DevTools), ¿qué función técnica cumple «MethodChannel»?",
    "options": [
      "Transmite flujos continuos de datos desde sensores nativos hacia la aplicación Flutter como un Stream reactivo de forma segura.",
      "Comunica la aplicación Flutter con código nativo en Kotlin/Java y Swift/Objective-C mediante serialización binaria estándar.",
      "Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa de la pantalla al operar.",
      "Recorta el contorno visible de cualquier widget hijo aplicando formas vectoriales arbitrarias con antialiasing por hardware."
    ],
    "correctAnswerIndex": 1,
    "explanation": "MethodChannel y mensajería binaria asíncrona (Plataformas Nativas, MethodChannels & DevTools): Comunica la aplicación Flutter con código nativo en Kotlin/Java (Android) y Swift/Objective-C (iOS) mediante serialización binaria estándar.",
    "topic": "Plataformas Nativas, MethodChannels & DevTools",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-07",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «EventChannel para streams nativos» en plataformas nativas, methodchannels & devtools?",
    "options": [
      "La interfaz prescinde de puentes lentos de serialización interactuando directamente con el motor gráfico al operar.",
      "Sustituye a Skia empleando una arquitectura gráfica orientada a APIs modernas para renderizado ultrarrápido.",
      "Transmite flujos continuos de datos desde sensores nativos hacia la aplicación Flutter como un Stream reactivo.",
      "La instrumentación fluye en tiempo real con una experiencia visual de respuesta instantánea a 120 FPS al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "EventChannel para streams nativos (Plataformas Nativas, MethodChannels & DevTools): Transmite flujos continuos de datos desde sensores nativos (acelerómetro, GPS, Bluetooth) hacia la aplicación Flutter como un Stream reactivo.",
    "topic": "Plataformas Nativas, MethodChannels & DevTools",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-08",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «Configuración del canvas con CustomPainter»?",
    "options": [
      "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla en el flujo.",
      "La instrumentación fluye en tiempo real con una experiencia visual de respuesta instantánea a 120 FPS.",
      "Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz de forma segura.",
      "La interfaz prescinde de puentes lentos de serialización interactuando directamente con el motor gráfico."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Configuración del canvas con CustomPainter (Caso en acción): La interfaz prescinde de puentes lentos de serialización interactuando directamente con el motor gráfico.",
    "topic": "Caso en acción",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-09",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «Despacho reactivo de estado con BLoC»?",
    "options": [
      "La interfaz gráfica sólo se redibuja ante transiciones de estado explícitas sin degradar el flujo.",
      "El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva.",
      "Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz.",
      "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Despacho reactivo de estado con BLoC (Caso en acción): La interfaz gráfica sólo se redibuja ante transiciones de estado explícitas.",
    "topic": "Caso en acción",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-10",
    "collectionId": "flutter",
    "question": "Respecto a caso en acción en Flutter, ¿cuál es el propósito de «Aislamiento de capas GPU con RepaintBoundary»?",
    "options": [
      "El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva al operar.",
      "Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz.",
      "La interfaz gráfica sólo se redibuja ante transiciones de estado explícitas en ejecución.",
      "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Aislamiento de capas GPU con RepaintBoundary (Caso en acción): Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz.",
    "topic": "Caso en acción",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-11",
    "collectionId": "flutter",
    "question": "En Flutter (Caso en acción), ¿qué función técnica cumple «Detección de sobrecosto por rebuild global»?",
    "options": [
      "Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz al operar.",
      "El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva al operar.",
      "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla.",
      "La interfaz gráfica sólo se redibuja ante transiciones de estado explícitas de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Detección de sobrecosto por rebuild global (Caso en acción): Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla.",
    "topic": "Caso en acción",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-12",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «Restauración con RepaintBoundary y Rebuild selectivo» en caso en acción?",
    "options": [
      "La interfaz gráfica sólo se redibuja ante transiciones de estado explícitas de forma clara.",
      "Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz.",
      "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla.",
      "El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Restauración con RepaintBoundary y Rebuild selectivo (Caso en acción): El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva.",
    "topic": "Caso en acción",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-13",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «Auditoría en Flutter DevTools y verificación con Impeller»?",
    "options": [
      "La instrumentación fluye en tiempo real con una experiencia visual de respuesta instantánea a 120 FPS.",
      "Un árbol sin límites de repintado propaga mutaciones locales a toda la jerarquía de la pantalla.",
      "Las mutaciones de la gráfica vectorial no provocan repintados en el resto de la interfaz al evaluar.",
      "El aislamiento visual devuelve la fluidez continua sin alterar la arquitectura reactiva en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Auditoría en Flutter DevTools y verificación con Impeller (Caso en acción): La instrumentación fluye en tiempo real con una experiencia visual de respuesta instantánea a 120 FPS.",
    "topic": "Caso en acción",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-14",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «UI declarativa como función del estado»?",
    "options": [
      "Construye pantallas y componentes sofisticados combinando múltiples widgets pequeños de responsabilidad única en lugar de extender clases monolíticas complejas al evaluar.",
      "Expresa la interfaz de usuario como una función matemática pura donde cualquier transición del estado de datos produce de forma reactiva una nueva configuración visual.",
      "Conserva estado mutable entre múltiples reconstrucciones desacoplando la configuración efímera del widget de un objeto State de larga vida en memoria sin perder estado.",
      "Las restricciones geométricas bajan desde el padre, los tamaños finales suben desde el hijo, y el padre determina la posición cartesiana absoluta del elemento al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "UI declarativa como función del estado (Filosofía de Widgets & UI Declarativa): Expresa la interfaz de usuario como una función matemática pura donde cualquier transición del estado de datos produce de forma reactiva una nueva configuración visual.",
    "topic": "Filosofía de Widgets & UI Declarativa",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-15",
    "collectionId": "flutter",
    "question": "Respecto a filosofía de widgets & ui declarativa en Flutter, ¿cuál es el propósito de «StatelessWidget e inmutabilidad estricta»?",
    "options": [
      "Orquesta initState, didChangeDependencies, build, didUpdateWidget y dispose de forma determinista conforme el widget interactúa con su entorno.",
      "Interpola valores de posición, escala, rotación o color aplicando curvas elásticas, cinéticas o desaceleradas mediante CurvedAnimation al operar.",
      "Describe interfaces estáticas cuya apariencia depende exclusivamente de parámetros inmutables provistos en su llamada constructora constante.",
      "Aísla la reconstrucción del widget animado de sus componentes estáticos evitando llamadas redundantes al método build de toda la vista al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "StatelessWidget e inmutabilidad estricta (Filosofía de Widgets & UI Declarativa): Describe interfaces estáticas cuya apariencia depende exclusivamente de parámetros inmutables provistos en su llamada constructora constante.",
    "topic": "Filosofía de Widgets & UI Declarativa",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-16",
    "collectionId": "flutter",
    "question": "En Flutter (Filosofía de Widgets & UI Declarativa), ¿qué función técnica cumple «StatefulWidget»?",
    "options": [
      "Orquesta initState, didChangeDependencies, build, didUpdateWidget y dispose de forma determinista conforme el widget interactúa con su entorno al operar.",
      "Describe interfaces estáticas cuya apariencia depende exclusivamente de parámetros inmutables provistos en su llamada constructora constante al operar.",
      "Precompila todos los fragment y vertex shaders durante el build AOT evitando tirones en el primer renderizado de cualquier pantalla o animación al operar.",
      "Conserva estado mutable entre múltiples reconstrucciones desacoplando la configuración efímera del widget de un objeto State de larga vida en memoria."
    ],
    "correctAnswerIndex": 3,
    "explanation": "StatefulWidget y objeto State persistente (Filosofía de Widgets & UI Declarativa): Conserva estado mutable entre múltiples reconstrucciones desacoplando la configuración efímera del widget de un objeto State de larga vida en memoria.",
    "topic": "Filosofía de Widgets & UI Declarativa",
    "difficulty": "básico"
  },
  {
    "id": "flutter-q-17",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «Ciclo de vida del objeto State» en filosofía de widgets & ui declarativa?",
    "options": [
      "Orquesta initState, didChangeDependencies, build, didUpdateWidget y dispose de forma determinista conforme el widget interactúa con su entorno.",
      "Describe interfaces estáticas cuya apariencia depende exclusivamente de parámetros inmutables provistos en su llamada constructora constante.",
      "Aplica restricciones donde el ancho y alto están fijados en valores exactos inamovibles o en rangos abiertos con valores mínimos en cero.",
      "Convierte trazados vectoriales complejos en triángulos simples directamente en la GPU acelerando el renderizado de curvas Bezier masivas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Ciclo de vida del objeto State (Filosofía de Widgets & UI Declarativa): Orquesta initState, didChangeDependencies, build, didUpdateWidget y dispose de forma determinista conforme el widget interactúa con su entorno.",
    "topic": "Filosofía de Widgets & UI Declarativa",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-18",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «Composición atómica sobre herencia»?",
    "options": [
      "Conserva estado mutable entre múltiples reconstrucciones desacoplando la configuración efímera del widget de un objeto State de larga vida en memoria en ejecución.",
      "Construye pantallas y componentes sofisticados combinando múltiples widgets pequeños de responsabilidad única en lugar de extender clases monolíticas complejas.",
      "Orquesta initState, didChangeDependencies, build, didUpdateWidget y dispose de forma determinista conforme el widget interactúa con su entorno dentro del flujo.",
      "Describe interfaces estáticas cuya apariencia depende exclusivamente de parámetros inmutables provistos en su llamada constructora constante de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Composición atómica sobre herencia (Filosofía de Widgets & UI Declarativa): Construye pantallas y componentes sofisticados combinando múltiples widgets pequeños de responsabilidad única en lugar de extender clases monolíticas complejas.",
    "topic": "Filosofía de Widgets & UI Declarativa",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-19",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «Widget Tree como especificación efímera»?",
    "options": [
      "Calcula restricciones de tamaño, posiciones cartesianas absolutas en pantalla, hit-testing de eventos táctiles y emisión de primitivas de dibujo al operar.",
      "Vincula los widgets inmutables con los nodos gráficos reales, gestionando la identidad en memoria, el ciclo de vida y la reconciliación eficiente.",
      "Genera jerarquías inmutables y ultraligeras que Flutter crea, compara y descarta a altísima velocidad sin penalización de memoria ni de renderizado.",
      "Usa ValueKey, ObjectKey y GlobalKey para preservar el estado interno de elementos al reordenar, insertar o filtrar colecciones dinámicas de widgets."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Widget Tree como especificación efímera (El Árbol Tripartito: Widget, Element y RenderObject): Genera jerarquías inmutables y ultraligeras que Flutter crea, compara y descarta a altísima velocidad sin penalización de memoria ni de renderizado.",
    "topic": "El Árbol Tripartito: Widget, Element y RenderObject",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-20",
    "collectionId": "flutter",
    "question": "Respecto a el árbol tripartito: widget, element y renderobject en Flutter, ¿cuál es el propósito de «Element Tree como administrador de ciclo de vida»?",
    "options": [
      "Calcula restricciones de tamaño, posiciones cartesianas absolutas en pantalla, hit-testing de eventos táctiles y emisión de primitivas de dibujo al operar.",
      "Genera jerarquías inmutables y ultraligeras que Flutter crea, compara y descarta a altísima velocidad sin penalización de memoria ni de renderizado.",
      "Usa ValueKey, ObjectKey y GlobalKey para preservar el estado interno de elementos al reordenar, insertar o filtrar colecciones dinámicas de widgets.",
      "Vincula los widgets inmutables con los nodos gráficos reales, gestionando la identidad en memoria, el ciclo de vida y la reconciliación eficiente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Element Tree como administrador de ciclo de vida (El Árbol Tripartito: Widget, Element y RenderObject): Vincula los widgets inmutables con los nodos gráficos reales, gestionando la identidad en memoria, el ciclo de vida y la reconciliación eficiente.",
    "topic": "El Árbol Tripartito: Widget, Element y RenderObject",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-21",
    "collectionId": "flutter",
    "question": "En Flutter (El Árbol Tripartito: Widget, Element y RenderObject), ¿qué función técnica cumple «RenderObject Tree como ejecutor de geometría»?",
    "options": [
      "Calcula restricciones de tamaño, posiciones cartesianas absolutas en pantalla, hit-testing de eventos táctiles y emisión de primitivas de dibujo.",
      "Vincula los widgets inmutables con los nodos gráficos reales, gestionando la identidad en memoria, el ciclo de vida y la reconciliación eficiente.",
      "Separa un sub-árbol en su propia capa de rasterización GPU evitando que sus actualizaciones invaliden y redibujen los widgets circundantes.",
      "Simula comportamientos físicos de masa, rigidez y amortiguamiento realistas para elementos que rebotan o responden al arrastre del usuario."
    ],
    "correctAnswerIndex": 0,
    "explanation": "RenderObject Tree como ejecutor de geometría (El Árbol Tripartito: Widget, Element y RenderObject): Calcula restricciones de tamaño, posiciones cartesianas absolutas en pantalla, hit-testing de eventos táctiles y emisión de primitivas de dibujo.",
    "topic": "El Árbol Tripartito: Widget, Element y RenderObject",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-22",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «Claves y preservación de identidad (Keys)» en el árbol tripartito: widget, element y renderobject?",
    "options": [
      "Calcula restricciones de tamaño, posiciones cartesianas absolutas en pantalla, hit-testing de eventos táctiles y emisión de primitivas de dibujo al operar.",
      "Usa ValueKey, ObjectKey y GlobalKey para preservar el estado interno de elementos al reordenar, insertar o filtrar colecciones dinámicas de widgets.",
      "Vincula los widgets inmutables con los nodos gráficos reales, gestionando la identidad en memoria, el ciclo de vida y la reconciliación eficiente.",
      "Genera jerarquías inmutables y ultraligeras que Flutter crea, compara y descarta a altísima velocidad sin penalización de memoria ni de renderizado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Claves y preservación de identidad (Keys) (El Árbol Tripartito: Widget, Element y RenderObject): Usa ValueKey, ObjectKey y GlobalKey para preservar el estado interno de elementos al reordenar, insertar o filtrar colecciones dinámicas de widgets.",
    "topic": "El Árbol Tripartito: Widget, Element y RenderObject",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-23",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «BuildContext como coordenada en el árbol»?",
    "options": [
      "Genera jerarquías inmutables y ultraligeras que Flutter crea, compara y descarta a altísima velocidad sin penalización de memoria ni de renderizado en ejecución.",
      "Usa ValueKey, ObjectKey y GlobalKey para preservar el estado interno de elementos al reordenar, insertar o filtrar colecciones dinámicas de widgets al operar.",
      "Representa la ubicación exacta de un widget dentro del árbol de elementos y permite consultar temas heredados, medios de pantalla y ancestros en la jerarquía.",
      "Vincula los widgets inmutables con los nodos gráficos reales, gestionando la identidad en memoria, el ciclo de vida y la reconciliación eficiente en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "BuildContext como coordenada en el árbol (El Árbol Tripartito: Widget, Element y RenderObject): Representa la ubicación exacta de un widget dentro del árbol de elementos y permite consultar temas heredados, medios de pantalla y ancestros en la jerarquía.",
    "topic": "El Árbol Tripartito: Widget, Element y RenderObject",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-24",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «Regla cardinal de Constraints»?",
    "options": [
      "Distribuye el espacio disponible en los ejes principal y transversal controlando alineación, expansión elástica con Flexible y ajuste estricto con Expanded al operar.",
      "Inspecciona las restricciones espaciales entrantes en tiempo de ejecución para alternar dinámicamente entre layouts de móvil, tableta o escritorio en el flujo.",
      "Superpone múltiples widgets en capas tridimensionales ordenadas posicionando elementos de forma absoluta o relativa a los límites del contenedor con precisión.",
      "Las restricciones geométricas bajan desde el padre, los tamaños finales suben desde el hijo, y el padre determina la posición cartesiana absoluta del elemento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Regla cardinal de Constraints (Protocolo de Layout, BoxConstraints & RenderBox): Las restricciones geométricas bajan desde el padre, los tamaños finales suben desde el hijo, y el padre determina la posición cartesiana absoluta del elemento.",
    "topic": "Protocolo de Layout, BoxConstraints & RenderBox",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-25",
    "collectionId": "flutter",
    "question": "Respecto a protocolo de layout, boxconstraints & renderbox en Flutter, ¿cuál es el propósito de «BoxConstraints tight y loose»?",
    "options": [
      "Aplica restricciones donde el ancho y alto están fijados en valores exactos inamovibles o en rangos abiertos con valores mínimos en cero.",
      "Dibuja primitivas gráficas vectoriales personalizadas invocando directamente la API de Canvas sin sobrecarga de widgets intermedios.",
      "Implementa patrones de notificación ligera que reconstruyen selectivamente únicamente los widgets suscritos a la mutación del valor.",
      "Separa estrictamente la lógica de negocio de la UI procesando flujos asíncronos de eventos entrantes y emitiendo estados inmutables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "BoxConstraints tight y loose (Protocolo de Layout, BoxConstraints & RenderBox): Aplica restricciones donde el ancho y alto están fijados en valores exactos inamovibles o en rangos abiertos con valores mínimos en cero.",
    "topic": "Protocolo de Layout, BoxConstraints & RenderBox",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-26",
    "collectionId": "flutter",
    "question": "En Flutter (Protocolo de Layout, BoxConstraints & RenderBox), ¿qué función técnica cumple «RenderFlex, Row y Column»?",
    "options": [
      "Inspecciona las restricciones espaciales entrantes en tiempo de ejecución para alternar dinámicamente entre layouts de móvil, tableta o escritorio en el flujo.",
      "Distribuye el espacio disponible en los ejes principal y transversal controlando alineación, expansión elástica con Flexible y ajuste estricto con Expanded.",
      "Superpone múltiples widgets en capas tridimensionales ordenadas posicionando elementos de forma absoluta o relativa a los límites del contenedor al evaluar.",
      "Aplica restricciones donde el ancho y alto están fijados en valores exactos inamovibles o en rangos abiertos con valores mínimos en cero de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "RenderFlex, Row y Column (Protocolo de Layout, BoxConstraints & RenderBox): Distribuye el espacio disponible en los ejes principal y transversal controlando alineación, expansión elástica con Flexible y ajuste estricto con Expanded.",
    "topic": "Protocolo de Layout, BoxConstraints & RenderBox",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-27",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «Stack, Positioned y apilamiento z-index» en protocolo de layout, boxconstraints & renderbox?",
    "options": [
      "Aplica restricciones donde el ancho y alto están fijados en valores exactos inamovibles o en rangos abiertos con valores mínimos en cero al evaluar.",
      "Inspecciona las restricciones espaciales entrantes en tiempo de ejecución para alternar dinámicamente entre layouts de móvil, tableta o escritorio.",
      "Superpone múltiples widgets en capas tridimensionales ordenadas posicionando elementos de forma absoluta o relativa a los límites del contenedor.",
      "Separa un sub-árbol en su propia capa de rasterización GPU evitando que sus actualizaciones invaliden y redibujen los widgets circundantes al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Stack, Positioned y apilamiento z-index (Protocolo de Layout, BoxConstraints & RenderBox): Superpone múltiples widgets en capas tridimensionales ordenadas posicionando elementos de forma absoluta o relativa a los límites del contenedor.",
    "topic": "Protocolo de Layout, BoxConstraints & RenderBox",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-28",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «LayoutBuilder para adaptación responsiva»?",
    "options": [
      "Aplica restricciones donde el ancho y alto están fijados en valores exactos inamovibles o en rangos abiertos con valores mínimos en cero en ejecución.",
      "Superpone múltiples widgets en capas tridimensionales ordenadas posicionando elementos de forma absoluta o relativa a los límites del contenedor.",
      "Describe interfaces estáticas cuya apariencia depende exclusivamente de parámetros inmutables provistos en su llamada constructora constante al operar.",
      "Inspecciona las restricciones espaciales entrantes en tiempo de ejecución para alternar dinámicamente entre layouts de móvil, tableta o escritorio."
    ],
    "correctAnswerIndex": 3,
    "explanation": "LayoutBuilder para adaptación responsiva (Protocolo de Layout, BoxConstraints & RenderBox): Inspecciona las restricciones espaciales entrantes en tiempo de ejecución para alternar dinámicamente entre layouts de móvil, tableta o escritorio.",
    "topic": "Protocolo de Layout, BoxConstraints & RenderBox",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-29",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «Aislamiento de pintura con RepaintBoundary»?",
    "options": [
      "Separa un sub-árbol en su propia capa de rasterización GPU evitando que sus actualizaciones invaliden y redibujen los widgets circundantes.",
      "Permite que un widget hijo ignore las restricciones del padre y dibuje fuera de su límite sin generar errores de RenderFlex overflow.",
      "Mide y dibuja tipografías vectoriales complejas gestionando saltos de línea, selección de glifos y aceleración bidireccional de texto.",
      "Calcula el tamaño natural de un sub-árbol realizando múltiples pasadas de medición cuando se requiere simetría forzada entre columnas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Aislamiento de pintura con RepaintBoundary (Composición Gráfica, Capas & RepaintBoundary): Separa un sub-árbol en su propia capa de rasterización GPU evitando que sus actualizaciones invaliden y redibujen los widgets circundantes.",
    "topic": "Composición Gráfica, Capas & RepaintBoundary",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-30",
    "collectionId": "flutter",
    "question": "Respecto a composición gráfica, capas & repaintboundary en Flutter, ¿cuál es el propósito de «Layer Tree y composición en la GPU»?",
    "options": [
      "Permite que un widget hijo ignore las restricciones del padre y dibuje fuera de su límite sin generar errores de RenderFlex overflow al operar.",
      "Genera una jerarquía de capas de dibujo que el motor gráfico compone de forma acelerada por hardware aprovechando texturas independientes.",
      "Mide y dibuja tipografías vectoriales complejas gestionando saltos de línea, selección de glifos y aceleración bidireccional de texto.",
      "Calcula el tamaño natural de un sub-árbol realizando múltiples pasadas de medición cuando se requiere simetría forzada entre columnas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Layer Tree y composición en la GPU (Composición Gráfica, Capas & RepaintBoundary): Genera una jerarquía de capas de dibujo que el motor gráfico compone de forma acelerada por hardware aprovechando texturas independientes.",
    "topic": "Composición Gráfica, Capas & RepaintBoundary",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-31",
    "collectionId": "flutter",
    "question": "En Flutter (Composición Gráfica, Capas & RepaintBoundary), ¿qué función técnica cumple «RenderParagraph»?",
    "options": [
      "Permite que un widget hijo ignore las restricciones del padre y dibuje fuera de su límite sin generar errores de RenderFlex overflow al operar.",
      "Calcula el tamaño natural de un sub-árbol realizando múltiples pasadas de medición cuando se requiere simetría forzada entre columnas.",
      "Mide y dibuja tipografías vectoriales complejas gestionando saltos de línea, selección de glifos y aceleración bidireccional de texto.",
      "Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "RenderParagraph y formateo de texto nativo (Composición Gráfica, Capas & RepaintBoundary): Mide y dibuja tipografías vectoriales complejas gestionando saltos de línea, selección de glifos y aceleración bidireccional de texto.",
    "topic": "Composición Gráfica, Capas & RepaintBoundary",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-32",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «OverflowBox y control de desbordamiento visual» en composición gráfica, capas & repaintboundary?",
    "options": [
      "Mide y dibuja tipografías vectoriales complejas gestionando saltos de línea, selección de glifos y aceleración bidireccional de texto.",
      "Calcula el tamaño natural de un sub-árbol realizando múltiples pasadas de medición cuando se requiere simetría forzada entre columnas.",
      "Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas al operar.",
      "Permite que un widget hijo ignore las restricciones del padre y dibuje fuera de su límite sin generar errores de RenderFlex overflow."
    ],
    "correctAnswerIndex": 3,
    "explanation": "OverflowBox y control de desbordamiento visual (Composición Gráfica, Capas & RepaintBoundary): Permite que un widget hijo ignore las restricciones del padre y dibuje fuera de su límite sin generar errores de RenderFlex overflow.",
    "topic": "Composición Gráfica, Capas & RepaintBoundary",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-33",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «IntrinsicHeight e IntrinsicWidth como costo controlado»?",
    "options": [
      "Calcula el tamaño natural de un sub-árbol realizando múltiples pasadas de medición cuando se requiere simetría forzada entre columnas al operar.",
      "Permite que un widget hijo ignore las restricciones del padre y dibuje fuera de su límite sin generar errores de RenderFlex overflow.",
      "Mide y dibuja tipografías vectoriales complejas gestionando saltos de línea, selección de glifos y aceleración bidireccional de texto.",
      "Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "IntrinsicHeight e IntrinsicWidth como costo controlado (Composición Gráfica, Capas & RepaintBoundary): Calcula el tamaño natural de un sub-árbol realizando múltiples pasadas de medición cuando se requiere simetría forzada entre columnas.",
    "topic": "Composición Gráfica, Capas & RepaintBoundary",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-34",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «CustomPainter y emisión de DisplayList»?",
    "options": [
      "Evita invocar el método de pintado cuando los parámetros y datos del lienzo no han cambiado respecto a la iteración anterior al operar.",
      "Dibuja primitivas gráficas vectoriales personalizadas invocando directamente la API de Canvas sin sobrecarga de widgets intermedios.",
      "Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas al operar.",
      "Recorta el contorno visible de cualquier widget hijo aplicando formas vectoriales arbitrarias con antialiasing por hardware al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "CustomPainter y emisión de DisplayList (Dibujo a Bajo Nivel con CustomPainter & Canvas): Dibuja primitivas gráficas vectoriales personalizadas invocando directamente la API de Canvas sin sobrecarga de widgets intermedios.",
    "topic": "Dibujo a Bajo Nivel con CustomPainter & Canvas",
    "difficulty": "intermedio"
  },
  {
    "id": "flutter-q-35",
    "collectionId": "flutter",
    "question": "Respecto a dibujo a bajo nivel con custompainter & canvas en Flutter, ¿cuál es el propósito de «Paint y configuración de renderizado gráfico»?",
    "options": [
      "Recorta el contorno visible de cualquier widget hijo aplicando formas vectoriales arbitrarias con antialiasing por hardware al operar.",
      "Evita invocar el método de pintado cuando los parámetros y datos del lienzo no han cambiado respecto a la iteración anterior.",
      "Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas.",
      "Comunica la aplicación Flutter con código nativo en Kotlin/Java y Swift/Objective-C mediante serialización binaria estándar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Paint y configuración de renderizado gráfico (Dibujo a Bajo Nivel con CustomPainter & Canvas): Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas.",
    "topic": "Dibujo a Bajo Nivel con CustomPainter & Canvas",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-36",
    "collectionId": "flutter",
    "question": "En Flutter (Dibujo a Bajo Nivel con CustomPainter & Canvas), ¿qué función técnica cumple «Path vectorial»?",
    "options": [
      "Dibuja primitivas gráficas vectoriales personalizadas invocando directamente la API de Canvas sin sobrecarga de widgets intermedios al evaluar.",
      "Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas en ejecución.",
      "Evita invocar el método de pintado cuando los parámetros y datos del lienzo no han cambiado respecto a la iteración anterior de forma clara.",
      "Traza polígonos, arcos elípticos y curvas cuadráticas y cúbicas complejas para generar interfaces gráficas personalizadas de alta precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Path vectorial y curvas de Bezier (Dibujo a Bajo Nivel con CustomPainter & Canvas): Traza polígonos, arcos elípticos y curvas cuadráticas y cúbicas complejas para generar interfaces gráficas personalizadas de alta precisión.",
    "topic": "Dibujo a Bajo Nivel con CustomPainter & Canvas",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-37",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «Eliminación de Shader Compilation Jank» en motor gráfico impeller & shaders aot?",
    "options": [
      "Precompila todos los fragment y vertex shaders durante el build AOT evitando tirones en el primer renderizado de cualquier pantalla o animación al operar.",
      "Convierte trazados vectoriales complejos en triángulos simples directamente en la GPU acelerando el renderizado de curvas Bezier masivas al operar.",
      "Agrupa instrucciones de dibujo en pases de renderizado que maximizan la concurrencia del hardware gráfico y minimizan cambios de estado al operar.",
      "Carga y ejecuta archivos SPIR-V de shaders HLSL/GLSL personalizados para efectos visuales avanzados, deformaciones e iluminación en tiempo real."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Eliminación de Shader Compilation Jank (Motor Gráfico Impeller & Shaders AOT): Precompila todos los fragment y vertex shaders durante el build AOT evitando tirones en el primer renderizado de cualquier pantalla o animación.",
    "topic": "Motor Gráfico Impeller & Shaders AOT",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-38",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «Teselado dinámico de curvas y polígonos»?",
    "options": [
      "Agrupa instrucciones de dibujo en pases de renderizado que maximizan la concurrencia del hardware gráfico y minimizan cambios de estado al operar.",
      "Convierte trazados vectoriales complejos en triángulos simples directamente en la GPU acelerando el renderizado de curvas Bezier masivas.",
      "Dibuja primitivas gráficas vectoriales personalizadas invocando directamente la API de Canvas sin sobrecarga de widgets intermedios al operar.",
      "Implementa patrones de notificación ligera que reconstruyen selectivamente únicamente los widgets suscritos a la mutación del valor al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Teselado dinámico de curvas y polígonos (Motor Gráfico Impeller & Shaders AOT): Convierte trazados vectoriales complejos en triángulos simples directamente en la GPU acelerando el renderizado de curvas Bezier masivas.",
    "topic": "Motor Gráfico Impeller & Shaders AOT",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-39",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «RenderPass»?",
    "options": [
      "Convierte trazados vectoriales complejos en triángulos simples directamente en la GPU acelerando el renderizado de curvas Bezier masivas.",
      "Administra el ciclo de vida de los servicios de la aplicación con resolución tipada y pruebas unitarias aisladas sin BuildContext al operar.",
      "Agrupa instrucciones de dibujo en pases de renderizado que maximizan la concurrencia del hardware gráfico y minimizan cambios de estado.",
      "Dibuja primitivas gráficas vectoriales personalizadas invocando directamente la API de Canvas sin sobrecarga de widgets intermedios."
    ],
    "correctAnswerIndex": 2,
    "explanation": "RenderPass y canalización de comandos gráficos (Motor Gráfico Impeller & Shaders AOT): Agrupa instrucciones de dibujo en pases de renderizado que maximizan la concurrencia del hardware gráfico y minimizan cambios de estado.",
    "topic": "Motor Gráfico Impeller & Shaders AOT",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-40",
    "collectionId": "flutter",
    "question": "Respecto a motor gráfico impeller & shaders aot en Flutter, ¿cuál es el propósito de «Shaders personalizados con Flutter GPU»?",
    "options": [
      "Convierte trazados vectoriales complejos en triángulos simples directamente en la GPU acelerando el renderizado de curvas Bezier masivas al operar.",
      "Agrupa instrucciones de dibujo en pases de renderizado que maximizan la concurrencia del hardware gráfico y minimizan cambios de estado al operar.",
      "Precompila todos los fragment y vertex shaders durante el build AOT evitando tirones en el primer renderizado de cualquier pantalla o animación.",
      "Carga y ejecuta archivos SPIR-V de shaders HLSL/GLSL personalizados para efectos visuales avanzados, deformaciones e iluminación en tiempo real."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Shaders personalizados con Flutter GPU (Motor Gráfico Impeller & Shaders AOT): Carga y ejecuta archivos SPIR-V de shaders HLSL/GLSL personalizados para efectos visuales avanzados, deformaciones e iluminación en tiempo real.",
    "topic": "Motor Gráfico Impeller & Shaders AOT",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-41",
    "collectionId": "flutter",
    "question": "En Flutter (Gestión de Estado, Inyección Contextual & BLoC), ¿qué función técnica cumple «InheritedWidget para propagación contextual»?",
    "options": [
      "Distribuye modelos de datos hacia abajo en el árbol de widgets permitiendo suscripciones automáticas sin paso manual de props.",
      "Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa de la pantalla al operar.",
      "Recorta el contorno visible de cualquier widget hijo aplicando formas vectoriales arbitrarias con antialiasing por hardware.",
      "Comunica la aplicación Flutter con código nativo en Kotlin/Java y Swift/Objective-C mediante serialización binaria estándar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "InheritedWidget para propagación contextual (Gestión de Estado, Inyección Contextual & BLoC): Distribuye modelos de datos hacia abajo en el árbol de widgets permitiendo suscripciones automáticas sin paso manual de props.",
    "topic": "Gestión de Estado, Inyección Contextual & BLoC",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-42",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «ChangeNotifier y ValueNotifier reactivos» en gestión de estado, inyección contextual & bloc?",
    "options": [
      "Distribuye modelos de datos hacia abajo en el árbol de widgets permitiendo suscripciones automáticas sin paso manual de props al operar.",
      "Implementa patrones de notificación ligera que reconstruyen selectivamente únicamente los widgets suscritos a la mutación del valor.",
      "Administra el ciclo de vida de los servicios de la aplicación con resolución tipada y pruebas unitarias aisladas sin BuildContext.",
      "Separa estrictamente la lógica de negocio de la UI procesando flujos asíncronos de eventos entrantes y emitiendo estados inmutables."
    ],
    "correctAnswerIndex": 1,
    "explanation": "ChangeNotifier y ValueNotifier reactivos (Gestión de Estado, Inyección Contextual & BLoC): Implementa patrones de notificación ligera que reconstruyen selectivamente únicamente los widgets suscritos a la mutación del valor.",
    "topic": "Gestión de Estado, Inyección Contextual & BLoC",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-43",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «Patrón BLoC»?",
    "options": [
      "Distribuye modelos de datos hacia abajo en el árbol de widgets permitiendo suscripciones automáticas sin paso manual de props al operar.",
      "Administra el ciclo de vida de los servicios de la aplicación con resolución tipada y pruebas unitarias aisladas sin BuildContext.",
      "Separa estrictamente la lógica de negocio de la UI procesando flujos asíncronos de eventos entrantes y emitiendo estados inmutables.",
      "Implementa patrones de notificación ligera que reconstruyen selectivamente únicamente los widgets suscritos a la mutación del valor."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Patrón BLoC y flujo unidireccional de eventos (Gestión de Estado, Inyección Contextual & BLoC): Separa estrictamente la lógica de negocio de la UI procesando flujos asíncronos de eventos entrantes y emitiendo estados inmutables.",
    "topic": "Gestión de Estado, Inyección Contextual & BLoC",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-44",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «BlocBuilder, BlocListener y buildWhen»?",
    "options": [
      "Implementa patrones de notificación ligera que reconstruyen selectivamente únicamente los widgets suscritos a la mutación del valor al evaluar.",
      "Separa estrictamente la lógica de negocio de la UI procesando flujos asíncronos de eventos entrantes y emitiendo estados inmutables al operar.",
      "Administra el ciclo de vida de los servicios de la aplicación con resolución tipada y pruebas unitarias aisladas sin BuildContext al operar.",
      "Controla con precisión quirúrgica qué widgets se reconstruyen y cuáles ejecutan efectos secundarios ante transiciones de estado específicas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "BlocBuilder, BlocListener y buildWhen (Gestión de Estado, Inyección Contextual & BLoC): Controla con precisión quirúrgica qué widgets se reconstruyen y cuáles ejecutan efectos secundarios ante transiciones de estado específicas.",
    "topic": "Gestión de Estado, Inyección Contextual & BLoC",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-45",
    "collectionId": "flutter",
    "question": "Respecto a gestión de estado, inyección contextual & bloc en Flutter, ¿cuál es el propósito de «Inyección de dependencias con Provider y Riverpod»?",
    "options": [
      "Administra el ciclo de vida de los servicios de la aplicación con resolución tipada y pruebas unitarias aisladas sin BuildContext al operar.",
      "Distribuye modelos de datos hacia abajo en el árbol de widgets permitiendo suscripciones automáticas sin paso manual de props.",
      "Implementa patrones de notificación ligera que reconstruyen selectivamente únicamente los widgets suscritos a la mutación del valor.",
      "Separa estrictamente la lógica de negocio de la UI procesando flujos asíncronos de eventos entrantes y emitiendo estados inmutables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Inyección de dependencias con Provider y Riverpod (Gestión de Estado, Inyección Contextual & BLoC): Administra el ciclo de vida de los servicios de la aplicación con resolución tipada y pruebas unitarias aisladas sin BuildContext.",
    "topic": "Gestión de Estado, Inyección Contextual & BLoC",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-46",
    "collectionId": "flutter",
    "question": "En Flutter (Sistema de Animaciones, Tweens & Física), ¿qué función técnica cumple «Tweens matemáticos»?",
    "options": [
      "Aísla la reconstrucción del widget animado de sus componentes estáticos evitando llamadas redundantes al método build de toda la vista.",
      "Interpola valores de posición, escala, rotación o color aplicando curvas elásticas, cinéticas o desaceleradas mediante CurvedAnimation.",
      "Anima cambios de propiedades visuales automáticamente con AnimatedContainer, AnimatedOpacity y AnimatedAlign sin controladores manuales.",
      "Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa de la pantalla sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tweens matemáticos y curvas de aceleración (Sistema de Animaciones, Tweens & Física): Interpola valores de posición, escala, rotación o color aplicando curvas elásticas, cinéticas o desaceleradas mediante CurvedAnimation.",
    "topic": "Sistema de Animaciones, Tweens & Física",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-47",
    "collectionId": "flutter",
    "question": "Dentro de Flutter, ¿cómo opera el mecanismo de «AnimatedBuilder para aislamiento de frames» en sistema de animaciones, tweens & física?",
    "options": [
      "Interpola valores de posición, escala, rotación o color aplicando curvas elásticas, cinéticas o desaceleradas mediante CurvedAnimation.",
      "Anima cambios de propiedades visuales automáticamente con AnimatedContainer, AnimatedOpacity y AnimatedAlign sin controladores manuales.",
      "Aísla la reconstrucción del widget animado de sus componentes estáticos evitando llamadas redundantes al método build de toda la vista.",
      "Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa de la pantalla sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "AnimatedBuilder para aislamiento de frames (Sistema de Animaciones, Tweens & Física): Aísla la reconstrucción del widget animado de sus componentes estáticos evitando llamadas redundantes al método build de toda la vista.",
    "topic": "Sistema de Animaciones, Tweens & Física",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-48",
    "collectionId": "flutter",
    "question": "Al trabajar con Flutter, ¿qué responsabilidad define a «Animaciones implícitas declarativas»?",
    "options": [
      "Interpola valores de posición, escala, rotación o color aplicando curvas elásticas, cinéticas o desaceleradas mediante CurvedAnimation al operar.",
      "Aísla la reconstrucción del widget animado de sus componentes estáticos evitando llamadas redundantes al método build de toda la vista.",
      "Genera valores continuos entre 0.0 y 1.0 sincronizados cuadro a cuadro con la tasa de refresco nativa de la pantalla de modo predecible.",
      "Anima cambios de propiedades visuales automáticamente con AnimatedContainer, AnimatedOpacity y AnimatedAlign sin controladores manuales."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Animaciones implícitas declarativas (Sistema de Animaciones, Tweens & Física): Anima cambios de propiedades visuales automáticamente con AnimatedContainer, AnimatedOpacity y AnimatedAlign sin controladores manuales.",
    "topic": "Sistema de Animaciones, Tweens & Física",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-49",
    "collectionId": "flutter",
    "question": "En la arquitectura de Flutter, ¿qué caracteriza técnicamente a «Física de resortes con SpringSimulation»?",
    "options": [
      "Simula comportamientos físicos de masa, rigidez y amortiguamiento realistas para elementos que rebotan o responden al arrastre del usuario.",
      "Interpola valores de posición, escala, rotación o color aplicando curvas elásticas, cinéticas o desaceleradas mediante CurvedAnimation.",
      "Aísla la reconstrucción del widget animado de sus componentes estáticos evitando llamadas redundantes al método build de toda la vista.",
      "Anima cambios de propiedades visuales automáticamente con AnimatedContainer, AnimatedOpacity y AnimatedAlign sin controladores manuales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Física de resortes con SpringSimulation (Sistema de Animaciones, Tweens & Física): Simula comportamientos físicos de masa, rigidez y amortiguamiento realistas para elementos que rebotan o responden al arrastre del usuario.",
    "topic": "Sistema de Animaciones, Tweens & Física",
    "difficulty": "avanzado"
  },
  {
    "id": "flutter-q-50",
    "collectionId": "flutter",
    "question": "Respecto a reconocimiento de gestos, arena & hit-testing en Flutter, ¿cuál es el propósito de «GestureDetector y eventos semánticos»?",
    "options": [
      "Administra el ciclo de vida de los servicios de la aplicación con resolución tipada y pruebas unitarias aisladas sin BuildContext al operar.",
      "Reconoce toques, pulsaciones largas, doble toques, arrastres direccionales y gestos de escala con coordenadas cartesianas normalizadas.",
      "Configura color, grosor de trazo, estilos de pintura, filtros de desenfoque, máscaras y modos de mezcla shader sobre el canvas al operar.",
      "Dibuja primitivas gráficas vectoriales personalizadas invocando directamente la API de Canvas sin sobrecarga de widgets intermedios."
    ],
    "correctAnswerIndex": 1,
    "explanation": "GestureDetector y eventos semánticos (Reconocimiento de Gestos, Arena & Hit-Testing): Reconoce toques, pulsaciones largas, doble toques, arrastres direccionales y gestos de escala con coordenadas cartesianas normalizadas.",
    "topic": "Reconocimiento de Gestos, Arena & Hit-Testing",
    "difficulty": "avanzado"
  }
];
