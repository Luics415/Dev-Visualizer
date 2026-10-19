import type { QuizQuestion } from "@/data/quizTypes";

export const reactNativeQuestions: QuizQuestion[] = [
  {
    id: "rn-01",
    collectionId: "react-native",
    question: "¿En qué consiste la 'JavaScript Interface' (JSI) dentro de la Nueva Arquitectura de React Native frente al puente (Bridge) tradicional?",
    options: [
      "JSI permite que el motor de JavaScript mantenga referencias directas en memoria a objetos C++ del host y los invoque de forma síncrona sin necesidad de serializar y deserializar mensajes en cadenas JSON a través de un canal asíncrono.",
      "JSI reemplaza la máquina virtual de JavaScript por un emulador completo del kernel de Linux dentro de la app móvil.",
      "JSI compila la interfaz de usuario en archivos binarios SVG estáticos antes de enviarlos a la tienda de aplicaciones.",
      "JSI es un protocolo de red TCP que sincroniza el estado de la aplicación con un servidor central de Meta en tiempo real."
    ],
    correctAnswerIndex: 0,
    explanation: "El Bridge heredado introducía latencia y serialización JSON asíncrona entre hilos. JSI expone objetos C++ nativos directamente al entorno JavaScript como funciones y objetos de primer orden invocables sin sobrecarga de serialización.",
    topic: "Nueva Arquitectura y JSI",
    difficulty: "avanzado"
  },
  {
    id: "rn-02",
    collectionId: "react-native",
    question: "En la Nueva Arquitectura de React Native, ¿qué función desempeña el nuevo motor de renderizado denominado 'Fabric'?",
    options: [
      "Es un renderer concurrente implementado en C++ que unifica la creación de árboles de componentes nativos en iOS y Android, permitiendo renderizado síncrono para eventos prioritarios y soporte pleno de React 18 Concurrent Features.",
      "Un transpilador que convierte código JSX en plantillas de Android XML y guiones de Objective-C.",
      "Una base de datos SQLite integrada optimizada para almacenar tokens JWT de sesión.",
      "Un módulo que gestiona los pagos dentro de la aplicación con Apple Pay y Google Wallet."
    ],
    correctAnswerIndex: 0,
    explanation: "Fabric unifica la lógica de renderizado en C++, posibilitando operaciones síncronas requeridas para responder a gestos táctiles inmediatos, integración con React Suspense y concurrencia directa compartida entre plataformas.",
    topic: "Fabric Renderer",
    difficulty: "avanzado"
  },
  {
    id: "rn-03",
    collectionId: "react-native",
    question: "¿Cuál es el beneficio de los 'TurboModules' frente a los módulos nativos heredados de React Native?",
    options: [
      "Se cargan de forma perezosa (lazy-loading) bajo demanda mediante JSI únicamente cuando el código JavaScript los invoca por primera vez, reduciendo drásticamente el tiempo de arranque de la aplicación (TTI).",
      "Permiten ejecutar código Swift sin necesidad de compilar en Xcode.",
      "Convierten todas las peticiones Bluetooth en llamadas de microservicios gRPC.",
      "Eliminan la necesidad de configurar permisos en `AndroidManifest.xml` e `Info.plist`."
    ],
    correctAnswerIndex: 0,
    explanation: "En la arquitectura previa, todos los módulos nativos se instanciaban y configuraban de golpe al arrancar la app. TurboModules aprovecha JSI para instanciar bajo demanda solo los módulos que realmente se utilizan.",
    topic: "TurboModules",
    difficulty: "intermedio"
  },
  {
    id: "rn-04",
    collectionId: "react-native",
    question: "¿Qué optimizaciones clave aporta el motor de JavaScript 'Hermes' en React Native para aplicaciones móviles?",
    options: [
      "Precompilación del código JS a bytecode binario optimizado en tiempo de compilación (AOT), arranque casi instantáneo, bajo consumo de memoria y un recolector de basura generacional (Hades).",
      "Soporte nativo para ejecutar scripts de Python y Ruby dentro del hilo de interfaz gráfica.",
      "Compilación de código fuente directamente a ensamblador ARM64 en el servidor web.",
      "Desactivación permanente de las promesas y del event loop para evitar fugas de memoria."
    ],
    correctAnswerIndex: 0,
    explanation: "Hermes fue diseñado específicamente por Meta para optimizar React Native: el móvil no pierde tiempo parseando código fuente JavaScript al iniciar, sino que carga directamente bytecode binario empaquetado (Hermes Bytecode).",
    topic: "Hermes Engine",
    difficulty: "intermedio"
  },
  {
    id: "rn-05",
    collectionId: "react-native",
    question: "¿Qué motor de cálculo de diseño (Layout Engine) utiliza React Native para traducir propiedades Flexbox a coordenadas de pantalla absolutas en iOS y Android?",
    options: [
      "Yoga, un motor de layout Flexbox de código abierto escrito en C++ altamente optimizado.",
      "WebKit LayoutEngine extraído de Safari.",
      "Blink RenderCore utilizado en Chromium.",
      "Android ConstraintLayout Engine."
    ],
    correctAnswerIndex: 0,
    explanation: "Yoga es el motor en C++ que interpreta las reglas de Flexbox en React Native y calcula las dimensiones y posiciones exactas de cada elemento para transferirlas a las vistas nativas correspondientes.",
    topic: "Yoga Layout Engine",
    difficulty: "intermedio"
  },
  {
    id: "rn-06",
    collectionId: "react-native",
    question: "En el componente `<FlatList>`, ¿qué propiedad crítica permite optimizar el scroll de elementos de tamaño constante omitiendo la medición dinámica asíncrona de cada elemento?",
    options: [
      "`getItemLayout`",
      "`removeClippedSubviews`",
      "`initialNumToRender`",
      "`windowSize`"
    ],
    correctAnswerIndex: 0,
    explanation: "Si los elementos tienen altura fija (o predecible), proveer `getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}` permite a FlatList saltar cálculos de layout en el hilo principal y hacer scroll instantáneo a índices lejanos.",
    topic: "Rendimiento en Listas (FlatList)",
    difficulty: "intermedio"
  },
  {
    id: "rn-07",
    collectionId: "react-native",
    question: "¿Qué limitación arquitectónica fundamental resuelve la librería 'React Native Reanimated' (v2/v3) respecto a la Animated API tradicional con `useNativeDriver: true`?",
    options: [
      "Permite ejecutar código JavaScript interactivo (animaciones y gestos) directamente en el hilo de UI (UI thread) mediante 'Worklets' a 60/120 FPS sin depender de la latencia ni bloqueos del hilo principal de JS.",
      "Permite renderizar vistas 3D nativas con sombras dinámicas en monitores CRT antiguos.",
      "Permite utilizar la sintaxis de animaciones CSS `@keyframes` dentro del archivo `Podfile`.",
      "Evita que el sistema operativo suspenda la app al entrar en segundo plano."
    ],
    correctAnswerIndex: 0,
    explanation: "Mientras `useNativeDriver: true` solo anima propiedades básicas predefinidas (transform y opacity), Reanimated compila funciones JS ('worklets') que corren en un contexto secundario en el UI thread, calculando físicas de resortes y gestos fluidos incluso si el hilo de JS está saturado.",
    topic: "Animaciones y Reanimated",
    difficulty: "avanzado"
  },
  {
    id: "rn-08",
    collectionId: "react-native",
    question: "¿Cuál es la diferencia entre el navegador de pila estándar `@react-navigation/stack` y `@react-navigation/native-stack`?",
    options: [
      "`native-stack` utiliza los componentes nativos reales de cada plataforma (`UINavigationController` en iOS y `Fragment` / `CoordinatorLayout` en Android), ofreciendo mejor rendimiento y transiciones nativas auténticas con menor consumo de memoria.",
      "`native-stack` solo se puede usar en proyectos desarrollados exclusivamente con Objective-C.",
      "`stack` no permite pasar parámetros entre pantallas, mientras que `native-stack` serializa los parámetros en la nube.",
      "`native-stack` requiere una suscripción de pago a Meta Enterprise."
    ],
    correctAnswerIndex: 0,
    explanation: "Mientras que JS Stack recrea animaciones y cabeceras en JavaScript/React, Native Stack (basado en `react-native-screens`) delega la gestión de pantallas a las vistas primitivas del SO, respetando gestos de deslizamiento nativos y optimizando memoria.",
    topic: "Navegación Móvil",
    difficulty: "intermedio"
  },
  {
    id: "rn-09",
    collectionId: "react-native",
    question: "En la biblioteca 'React Native MMKV', ¿por qué su rendimiento supera a `AsyncStorage` por más de 30x en operaciones de lectura y escritura?",
    options: [
      "MMKV utiliza C++ mapeado directamente en memoria (`mmap`) con JSI, permitiendo lecturas y escrituras síncronas instantáneas sin overhead de serialización ni llamadas asíncronas a SQLite.",
      "MMKV comprime todos los datos con el algoritmo ZIP antes de transmitirlos por Bluetooth.",
      "MMKV solo almacena números enteros de 8 bits en la memoria de la tarjeta SIM.",
      "MMKV sustituye el sistema de archivos del móvil por una partición en la nube de AWS."
    ],
    correctAnswerIndex: 0,
    explanation: "AsyncStorage guarda datos en SQLite o archivos planos a través de llamadas asíncronas del Bridge. MMKV (desarrollado por WeChat) usa memoria virtual mapeada (`mmap`) con llamadas C++ síncronas vía JSI, haciendo la persistencia prácticamente instantánea.",
    topic: "Persistencia y Rendimiento",
    difficulty: "intermedio"
  },
  {
    id: "rn-10",
    collectionId: "react-native",
    question: "¿Cuál es la regla fundamental de herencia de estilos de texto en React Native en comparación con el navegador web?",
    options: [
      "Los estilos de texto (e.g. `color`, `fontSize`) no se heredan automáticamente desde un contenedor `<View>` a sus componentes `<Text>` hijos; solo se heredan entre componentes `<Text>` anidados dentro de otro `<Text>`.",
      "Todos los estilos de texto son globales y se configuran en el archivo `package.json`.",
      "Los estilos de texto solo se aplican si se utiliza TailwindCSS en lugar de `StyleSheet.create`.",
      "Un componente `<Text>` hereda siempre las propiedades de margen y borde del `<View>` más cercano."
    ],
    correctAnswerIndex: 0,
    explanation: "En React Native no existe la cascada de estilos web. Un `<View style={{ color: 'red' }}><Text>Hola</Text></View>` ignorará el color. Solo `<Text style={{ color: 'red' }}><Text>Hola</Text></Text>` propagará el estilo al texto anidado.",
    topic: "Estilos y Componentes Primitivos",
    difficulty: "básico"
  },
  {
    id: "rn-11",
    collectionId: "react-native",
    question: "¿Cómo monitorea una aplicación React Native los cambios de visibilidad o suspensión del sistema operativo (primer plano / segundo plano)?",
    options: [
      "A través de la API `AppState` escuchando eventos como `'change'` con estados `'active'`, `'background'` o `'inactive'`. ",
      "Mediante un temporizador `setInterval` que comprueba periódicamente el nivel de batería.",
      "Leyendo directamente el registro `/proc/cpuinfo` mediante una directiva de preprocesador.",
      "Solicitando al usuario que presione un botón de confirmación antes de bloquear el terminal."
    ],
    correctAnswerIndex: 0,
    explanation: "La API `AppState` proporciona el estado actual y permite suscribirse con `AppState.addEventListener('change', nextState => ...)` para pausar peticiones de red o cancelar temporizadores cuando la app pasa a segundo plano.",
    topic: "Ciclo de Vida de la Aplicación",
    difficulty: "básico"
  },
  {
    id: "rn-12",
    collectionId: "react-native",
    question: "¿Para qué sirve el sistema 'Codegen' en la Nueva Arquitectura de React Native?",
    options: [
      "Lee las especificaciones de TypeScript o Flow para generar automáticamente código C++ con interfaces seguras (type-safe) y código base de bindings para Android (Java/Kotlin) e iOS (Obj-C++/Swift).",
      "Genera iconos de aplicación en 15 resoluciones diferentes mediante inteligencia artificial generativa.",
      "Traduce el código fuente a binarios de Apple Watch automáticamente.",
      "Crea cuentas de desarrollador en Google Play Console de forma automatizada."
    ],
    correctAnswerIndex: 0,
    explanation: "Codegen elimina los errores de desajuste de tipos en tiempo de ejecución entre JavaScript y el código nativo: a partir de contratos estáticos estrictos genera la infraestructura C++ que conecta ambos mundos.",
    topic: "Codegen y Herramientas",
    difficulty: "avanzado"
  },
  {
    id: "rn-13",
    collectionId: "react-native",
    question: "¿Cuál es la diferencia primordial entre el flujo gestionado de Expo (Managed Workflow) y el flujo tradicional (Bare Workflow / Prebuild)?",
    options: [
      "En Managed Workflow, el desarrollador no manipula carpetas nativas `android/` e `ios/` directamente, generándose de forma determinista mediante configuración y plugins (`npx expo prebuild`); en Bare Workflow se gestionan los proyectos nativos en Xcode y Android Studio de forma manual.",
      "Managed Workflow no permite escribir código JavaScript, limitando el desarrollo a bloques gráficos.",
      "Bare Workflow prohíbe el uso de librerías de terceros publicadas en npm.",
      "Managed Workflow solo es compatible con dispositivos Android con versión inferior a 8.0."
    ],
    correctAnswerIndex: 0,
    explanation: "Con el enfoque moderno de Continuous Native Generation (CNG) y Prebuild de Expo, los proyectos se configuran mediante `app.json` y Config Plugins, manteniendo el código nativo como un artefacto generado que se puede regenerar limpiamente.",
    topic: "Ecosistema Expo",
    difficulty: "intermedio"
  },
  {
    id: "rn-14",
    collectionId: "react-native",
    question: "En React Native, ¿qué problema de seguridad presenta almacenar tokens JWT sensibles o credenciales bancarias en `AsyncStorage`?",
    options: [
      "`AsyncStorage` almacena los datos en texto plano no cifrado en el sistema de archivos del dispositivo, haciéndolos vulnerables a extracción en dispositivos rooteados/jailbroken o mediante copias de seguridad de la app.",
      "`AsyncStorage` transmite todos los valores guardados a los servidores públicos de Facebook por defecto.",
      "`AsyncStorage` borra los datos cada vez que la batería del teléfono desciende del 20%.",
      "`AsyncStorage` solo permite almacenar cadenas alfanuméricas de hasta 16 caracteres."
    ],
    correctAnswerIndex: 0,
    explanation: "`AsyncStorage` no está cifrado. Para tokens de sesión o secretos críticos, se debe recurrir a almacenamiento respaldado por hardware seguro como iOS Keychain o Android Keystore (e.g. vía `expo-secure-store` o `react-native-keychain`).",
    topic: "Seguridad Móvil",
    difficulty: "intermedio"
  },
  {
    id: "rn-15",
    collectionId: "react-native",
    question: "¿Cuál es la función del empaquetador 'Metro' (Metro Bundler) en el flujo de desarrollo de React Native?",
    options: [
      "Es el bundler de JavaScript especializado de React Native que compila código JS/TS, resuelve assets y sirve el bundle en tiempo real con soporte de Fast Refresh mediante WebSockets.",
      "Un simulador de hardware que emula pantallas táctiles en terminales de texto plano.",
      "Un compilador de kernels de Android que genera imágenes OTA de firmware.",
      "Una herramienta de base de datos para sincronizar esquemas relacionales."
    ],
    correctAnswerIndex: 0,
    explanation: "Metro es el servidor de desarrollo y empaquetador ultrarrápido creado por Meta para manejar miles de módulos con tiempos de recarga sub-segundo (Fast Refresh) y generación de bundles para release.",
    topic: "Metro Bundler",
    difficulty: "básico"
  },
  {
    id: "rn-16",
    collectionId: "react-native",
    question: "¿Qué optimización realiza la propiedad `removeClippedSubviews={true}` en listas `<FlatList>` de Android?",
    options: [
      "Separa físicamente de la jerarquía de vistas nativas aquellas celdas que han salido fuera del área visible de la pantalla para reducir el consumo de memoria de la GPU y agilizar el scroll.",
      "Elimina permanentemente los elementos del array de datos para liberar espacio en disco.",
      "Convierte las fuentes de texto en trazados vectoriales estáticos.",
      "Recorta las esquinas de los elementos para simular un borde circular de 50%."
    ],
    correctAnswerIndex: 0,
    explanation: "`removeClippedSubviews` desmonta las subvistas nativas que caen fuera de los límites de la ventana visible en listas muy densas, reduciendo significativamente la memoria de dibujo en dispositivos Android con recursos limitados.",
    topic: "Rendimiento en Listas",
    difficulty: "intermedio"
  },
  {
    id: "rn-17",
    collectionId: "react-native",
    question: "En React Native Gesture Handler, ¿por qué es preferible usar sus componentes de interacción (como `GestureDetector` con `Gesture.Pan()`) en lugar del sistema tradicional `PanResponder` de React Native?",
    options: [
      "Porque Gesture Handler procesa el reconocimiento y seguimiento del gesto directamente en el hilo nativo del sistema operativo en lugar de enviar cada evento táctil al hilo de JavaScript a través del puente.",
      "Porque Gesture Handler no requiere que el dispositivo disponga de acelerómetro ni giroscopio.",
      "Porque `PanResponder` solo funciona si el usuario utiliza un lápiz óptico Stylus.",
      "Porque Gesture Handler bloquea las capturas de pantalla de la aplicación."
    ],
    correctAnswerIndex: 0,
    explanation: "El sistema tradicional `PanResponder` satura el hilo de JS enviando decenas de eventos táctiles por segundo (`touchMove`), produciendo retrasos si el hilo de JS está ocupado. Gesture Handler evalúa estados de gestos en el UI thread enlazándose con Reanimated.",
    topic: "Gestos y Tacto",
    difficulty: "avanzado"
  },
  {
    id: "rn-18",
    collectionId: "react-native",
    question: "¿Cómo se maneja el área segura de la pantalla (Safe Area) para evitar que la interfaz quede tapada por el 'Notch', la 'Dynamic Island' o la barra inferior de gestos en iOS y Android?",
    options: [
      "Utilizando la biblioteca `react-native-safe-area-context` mediante el hook `useSafeAreaInsets()` o el componente `<SafeAreaView>` para aplicar paddings dinámicos según los insets de hardware reales.",
      "Fijando un margen superior estático de exactamente 44 píxeles en todas las pantallas de la app.",
      "Desactivando el hardware de la cámara frontal mediante permisos en el manifiesto.",
      "Obligando al usuario a rotar el teléfono a posición horizontal para ver la pantalla completa."
    ],
    correctAnswerIndex: 0,
    explanation: "`react-native-safe-area-context` es el estándar de la industria, ya que lee dinámicamente los insets del sistema operativo nativo (top, bottom, left, right) adaptándose a cualquier forma de pantalla, orientación y tamaño de barra de navegación.",
    topic: "Diseño y Safe Area",
    difficulty: "básico"
  },
  {
    id: "rn-19",
    collectionId: "react-native",
    question: "¿Qué papel cumple el archivo `Podfile` en el entorno de desarrollo de iOS para React Native?",
    options: [
      "Define y gestiona las dependencias nativas en Objective-C, Swift y C++ del proyecto iOS a través del gestor de paquetes CocoaPods.",
      "Configura los estilos CSS globales que se importan en el navegador Safari.",
      "Almacena las claves secretas de la API de producción de Stripe.",
      "Contiene la lista de usuarios administradores de la organización de GitHub."
    ],
    correctAnswerIndex: 0,
    explanation: "En los proyectos React Native con soporte iOS, CocoaPods utiliza el `Podfile` para vincular automáticamente librerías nativas con el workspace de Xcode (`.xcworkspace`), configurando parámetros como soporte de Hermes y Fabric.",
    topic: "Tooling Nativo y iOS",
    difficulty: "intermedio"
  },
  {
    id: "rn-20",
    collectionId: "react-native",
    question: "En Android, ¿qué archivo de configuración define los permisos de hardware solicitados (cámara, ubicación, almacenamiento) por la aplicación?",
    options: [
      "`android/app/src/main/AndroidManifest.xml`",
      "`android/build.gradle`",
      "`android/gradle.properties`",
      "`android/app/proguard-rules.pro`"
    ],
    correctAnswerIndex: 0,
    explanation: "El `AndroidManifest.xml` describe la estructura esencial de la aplicación Android al sistema operativo, incluyendo permisos (`<uses-permission android:name=\"...\" />`), actividades, servicios y esquemas de deep linking.",
    topic: "Tooling Nativo y Android",
    difficulty: "básico"
  },
  {
    id: "rn-21",
    collectionId: "react-native",
    question: "¿Cuál es la función de `ProGuard` / `R8` al generar un release APK o Android App Bundle (AAB) en React Native?",
    options: [
      "Optimizar el tamaño del binario eliminando código muerto de librerías Java/Kotlin (tree shaking) y ofuscar los nombres de clases y métodos nativos para dificultar la ingeniería inversa.",
      "Cifrar el código fuente JavaScript con un algoritmo cuántico de 512 bits.",
      "Generar certificados SSL autofirmados para comunicaciones locales.",
      "Duplicar la memoria RAM asignada al proceso de la máquina virtual Dalvik/ART."
    ],
    correctAnswerIndex: 0,
    explanation: "R8/ProGuard es la herramienta oficial de Android que reduce sustancialmente el tamaño del APK y dificulta el desensamblado del bytecode Java/Kotlin eliminando clases y métodos no utilizados de los módulos nativos.",
    topic: "Compilación de Releases",
    difficulty: "intermedio"
  },
  {
    id: "rn-22",
    collectionId: "react-native",
    question: "¿Cómo se implementa 'Deep Linking' en React Native para abrir una pantalla específica desde una URL externa o notificación push?",
    options: [
      "Configurando un esquema personalizado (e.g. `myapp://`) o enlaces universales (iOS Universal Links / Android App Links) vinculados a la configuración de rutas de React Navigation (`linking` config).",
      "Insertando un iframe oculto en el archivo `index.js` que escucha cambios en el DNS del teléfono.",
      "Creando un servidor web HTTP dentro del teléfono que atiende en el puerto 8080.",
      "Invocando la función `window.location.reload()` cuando llega una notificación."
    ],
    correctAnswerIndex: 0,
    explanation: "React Navigation provee el objeto `linking` (con `prefixes` y mapeo de rutas) que intercepta URLs nativas y navega automáticamente al stack o pantalla correspondiente con los parámetros de consulta mapeados.",
    topic: "Deep Linking y Navegación",
    difficulty: "intermedio"
  },
  {
    id: "rn-23",
    collectionId: "react-native",
    question: "¿Qué ventaja ofrece utilizar la librería `expo-image` o `react-native-fast-image` frente al componente nativo básico `<Image>` de React Native?",
    options: [
      "Soporte avanzado de caché agresiva en disco/memoria, precarga de imágenes prioritarias (prefetching), renderizado de formatos modernos (AVIF, WebP) y prevención de parpadeos (flicker) al actualizar la fuente de la imagen.",
      "Generación automática de fotos con modelos de inteligencia artificial en local.",
      "Compresión de fotos con pérdida irreversible para reducir el costo de suscripción a iCloud.",
      "Capacidad de mostrar imágenes sin tener una pantalla física conectada al dispositivo."
    ],
    correctAnswerIndex: 0,
    explanation: "El componente estándar `<Image>` de React Native tiene deficiencias de caching y parpadeo al remontar. Las alternativas como `expo-image` (basada en Glide en Android y SDWebImage en iOS) gestionan cachés multinivel y transiciones suaves.",
    topic: "Optimización Multimedia",
    difficulty: "intermedio"
  },
  {
    id: "rn-24",
    collectionId: "react-native",
    question: "¿Cuál es la causa habitual de los llamados 'Micro-janks' (tirones de interfaz) durante las animaciones en React Native si no se utiliza el hilo de UI?",
    options: [
      "El hilo único de JavaScript (JS Thread) se satura procesando renders de React, parsing de JSON o lógica de negocio pesada, impidiendo despachar los fotogramas de la animación a 60 FPS a tiempo para el pulso de V-Sync.",
      "El procesador del dispositivo móvil entra en modo de hibernación automática.",
      "La tarjeta de red inalámbrica Wi-Fi interrumpe el bus de memoria del procesador gráfico.",
      "El motor Hermes detecta variables tipadas como `any` y detiene la ejecución durante 1 segundo."
    ],
    correctAnswerIndex: 0,
    explanation: "El hilo de JS es single-threaded. Si se produce un render pesado mientras ocurre una animación conducida por JS, el hilo se bloquea temporalmente perdiendo frames (frame drops), lo que provoca el clásico tartamudeo o jank.",
    topic: "Rendimiento y Profiling",
    difficulty: "intermedio"
  },
  {
    id: "rn-25",
    collectionId: "react-native",
    question: "En el ecosistema React Native, ¿qué significa una actualización 'Over-The-Air' (OTA) mediante herramientas como EAS Update o CodePush?",
    options: [
      "Desplegar correcciones de código JavaScript y assets directamente a los dispositivos de los usuarios sin necesidad de pasar por el proceso de revisión y publicación de una nueva versión binaria en Apple App Store o Google Play Store.",
      "Actualizar el firmware de radio y Bluetooth del módem del dispositivo móvil por satélite.",
      "Reemplazar el procesador físico del dispositivo enviando impulsos electromagnéticos.",
      "Actualizar las librerías nativas escritas en Swift y Kotlin sin recompilar el proyecto en Xcode."
    ],
    correctAnswerIndex: 0,
    explanation: "Las actualizaciones OTA aprovechan que el bundle de JavaScript y los assets son interpretados en tiempo de ejecución. Siempre que no se modifique código nativo (Java/Kotlin/Swift), el bundle se puede actualizar de inmediato vía CDN.",
    topic: "Distribución y Actualizaciones OTA",
    difficulty: "intermedio"
  },
  {
    id: "rn-26",
    collectionId: "react-native",
    question: "En React Native, ¿qué utilidad tiene el hook `useWindowDimensions` frente a la API estática `Dimensions.get('window')`?",
    options: [
      "`useWindowDimensions` se suscribe automáticamente a cambios en las dimensiones de la pantalla (rotación entre vertical y horizontal, modo multitarea o ventana dividida en tablets) y provoca un re-render con los nuevos valores.",
      "`useWindowDimensions` calcula las dimensiones físicas del monitor del desarrollador en lugar del teléfono.",
      "`Dimensions.get('window')` solo funciona en sistemas operativos de 32 bits.",
      "`useWindowDimensions` convierte las dimensiones a pulgadas en lugar de puntos lógicos."
    ],
    correctAnswerIndex: 0,
    explanation: "`Dimensions.get('window')` toma una instantánea estática al momento de su ejecución y no avisa si la orientación cambia. `useWindowDimensions` es reactivo y actualiza el componente dinámicamente ante cualquier cambio de pantalla.",
    topic: "Diseño Responsivo",
    difficulty: "básico"
  },
  {
    id: "rn-27",
    collectionId: "react-native",
    question: "¿Qué es un 'Config Plugin' en el flujo prebuild de Expo?",
    options: [
      "Un script de Node.js que personaliza programáticamente los proyectos nativos de Android e iOS (modificando `AndroidManifest.xml`, `Info.plist`, `build.gradle` o `Podfile`) durante la ejecución de `npx expo prebuild`.",
      "Un archivo binario que acelera la velocidad de descarga de dependencias en npm.",
      "Un módulo que traduce las cadenas de texto de la aplicación a 40 idiomas diferentes.",
      "Un plugin de WordPress que sincroniza artículos con una base de datos Firebase."
    ],
    correctAnswerIndex: 0,
    explanation: "Los Config Plugins permiten integrar cualquier SDK nativo en proyectos Expo manteniendo el código nativo generado de forma efímera, automatizando las modificaciones manuales que tradicionalmente se hacían en Xcode o Android Studio.",
    topic: "Expo Config Plugins",
    difficulty: "avanzado"
  },
  {
    id: "rn-28",
    collectionId: "react-native",
    question: "¿Por qué en React Native se desaconseja utilizar animaciones basadas en cambiar propiedades de diseño como `width`, `height`, `margin` o `top`?",
    options: [
      "Porque cambiar esas propiedades obliga al motor Yoga a recalcular el árbol de layout completo en cada fotograma y transferir nuevas coordenadas a las vistas nativas, provocando caídas severas de FPS.",
      "Porque los dispositivos Android no reconocen cambios de margen en números impares.",
      "Porque el consorcio React prohíbe el uso de dimensiones fijas en dispositivos móviles.",
      "Porque las propiedades geométricas no pueden recibir valores en píxeles."
    ],
    correctAnswerIndex: 0,
    explanation: "Recalcular el layout de Yoga en cada frame consume muchísimos ciclos de CPU. En su lugar se debe animar `transform: [{ scaleX: ... }, { translateY: ... }]`, lo cual se calcula puramente en GPU sin afectar el layout de los elementos hermanos.",
    topic: "Rendimiento y Animaciones",
    difficulty: "intermedio"
  },
  {
    id: "rn-29",
    collectionId: "react-native",
    question: "En React Native, ¿qué función cumple el componente `<KeyboardAvoidingView>`?",
    options: [
      "Ajusta automáticamente la posición, altura o padding de la pantalla cuando el teclado virtual del dispositivo móvil aparece, impidiendo que los campos de entrada de texto (`<TextInput>`) queden ocultos detrás del teclado.",
      "Bloquea el teclado para impedir que el usuario ingrese caracteres especiales o emojis.",
      "Convierte el teclado en un mando de videojuegos táctil con controles direccionales.",
      "Desactiva las sugerencias de autocorrección ortográfica del sistema operativo."
    ],
    correctAnswerIndex: 0,
    explanation: "En móviles el teclado ocupa casi la mitad de la pantalla. `<KeyboardAvoidingView behavior=\"padding\" | \"height\" | \"position\">` reacciona a la aparición del teclado reposicionando los controles para que permanezcan visibles.",
    topic: "UX Móvil y Formularios",
    difficulty: "básico"
  },
  {
    id: "rn-30",
    collectionId: "react-native",
    question: "¿Cómo se gestionan las fuentes tipográficas personalizadas (custom fonts) en React Native de forma multiplataforma?",
    options: [
      "Asegurando que el nombre de la familia (`fontFamily`) en el archivo de estilos coincida exactamente con el nombre de PostScript de la fuente en iOS y con el nombre del archivo de la fuente (sin extensión) en Android.",
      "Incrustando las fuentes en archivos CSS globales importados con `<link rel=\"stylesheet\">`.",
      "Descargando las fuentes dinámicamente desde Google Fonts en cada apertura de la app.",
      "Convirtiendo las tipografías a formato de imagen PNG antes de compilar el proyecto."
    ],
    correctAnswerIndex: 0,
    explanation: "iOS identifica las fuentes instaladas mediante su 'PostScript name' embebido en los metadatos de la fuente, mientras que Android las busca por el nombre físico del archivo colocado en `android/app/src/main/assets/fonts/`. Expo Font abstrae esta discrepancia mediante hooks unificados.",
    topic: "Tipografías y Assets",
    difficulty: "intermedio"
  }
];
