import type { QuizQuestion } from "@/data/quizTypes";

export const reactNativeQuestions: QuizQuestion[] = [
  {
    "id": "react-native-q-01",
    "collectionId": "react-native",
    "question": "En React Native (Arquitectura y runtime), ¿qué función técnica cumple «Renderizado nativo»?",
    "options": [
      "Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM.",
      "Carga módulos nativos de forma perezosa y con interfaces tipadas generadas al operar.",
      "Genera interfaces nativas desde especificaciones tipadas para módulos y componentes.",
      "Resuelve módulos, transforma código y construye bundles para desarrollo y producción."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Renderizado nativo (Arquitectura y runtime): Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-02",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «Componentes base» en arquitectura y runtime?",
    "options": [
      "Distingue JavaScript, UI, render y trabajo nativo para evitar bloquear gestos o frames al operar.",
      "View, Text, Image, ScrollView y otras primitivas se enlazan con controles de cada plataforma.",
      "Resuelve módulos, transforma código y construye bundles para desarrollo y producción al operar.",
      "Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Componentes base (Arquitectura y runtime): View, Text, Image, ScrollView y otras primitivas se enlazan con controles de cada plataforma.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-03",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «Nueva Arquitectura»?",
    "options": [
      "Resuelve módulos, transforma código y construye bundles para desarrollo y producción al operar.",
      "Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM al operar.",
      "Coordina Fabric, TurboModules, JSI y Codegen como base moderna del runtime de React Native.",
      "Genera interfaces nativas desde especificaciones tipadas para módulos y componentes al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Nueva Arquitectura (Arquitectura y runtime): Coordina Fabric, TurboModules, JSI y Codegen como base moderna del runtime de React Native.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-04",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Fabric»?",
    "options": [
      "Optimiza componentes y Hooks en build mediante memoización automática también en React Native en ejecución.",
      "View, Text, Image, ScrollView y otras primitivas se enlazan con controles de cada plataforma al evaluar.",
      "Coordina Fabric, TurboModules, JSI y Codegen como base moderna del runtime de React Native en ejecución.",
      "Implementa el renderer nativo moderno, calcula árboles y commits y coordina montaje con las plataformas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Fabric (Arquitectura y runtime): Implementa el renderer nativo moderno, calcula árboles y commits y coordina montaje con las plataformas.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-05",
    "collectionId": "react-native",
    "question": "Respecto a arquitectura y runtime en React Native, ¿cuál es el propósito de «TurboModules»?",
    "options": [
      "Carga módulos nativos de forma perezosa y con interfaces tipadas generadas en ejecución.",
      "Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM.",
      "Genera interfaces nativas desde especificaciones tipadas para módulos y componentes.",
      "Resuelve módulos, transforma código y construye bundles para desarrollo y producción."
    ],
    "correctAnswerIndex": 0,
    "explanation": "TurboModules (Arquitectura y runtime): Carga módulos nativos de forma perezosa y con interfaces tipadas generadas.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-06",
    "collectionId": "react-native",
    "question": "En React Native (Arquitectura y runtime), ¿qué función técnica cumple «JSI»?",
    "options": [
      "Ejecuta JavaScript con un motor optimizado para aplicaciones React Native y herramientas de depuración integradas al operar.",
      "Permite que JavaScript se comunique con objetos C++ y capacidades nativas sin serializar cada mensaje por un puente JSON.",
      "Implementa el renderer nativo moderno, calcula árboles y commits y coordina montaje con las plataformas dentro del flujo.",
      "Mantiene gestos y transformaciones fluidos mediante worklets o soluciones que evitan round trips por JavaScript al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "JSI (Arquitectura y runtime): Permite que JavaScript se comunique con objetos C++ y capacidades nativas sin serializar cada mensaje por un puente JSON.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-07",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «Codegen» en arquitectura y runtime?",
    "options": [
      "Carga módulos nativos de forma perezosa y con interfaces tipadas generadas en el flujo.",
      "Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM.",
      "Genera interfaces nativas desde especificaciones tipadas para módulos y componentes.",
      "Resuelve módulos, transforma código y construye bundles para desarrollo y producción."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Codegen (Arquitectura y runtime): Genera interfaces nativas desde especificaciones tipadas para módulos y componentes.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-08",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «Hermes»?",
    "options": [
      "Implementa el renderer nativo moderno, calcula árboles y commits y coordina montaje con las plataformas en ejecución.",
      "Optimiza componentes y Hooks en build mediante memoización automática también en React Native de modo predecible.",
      "View, Text, Image, ScrollView y otras primitivas se enlazan con controles de cada plataforma durante la ejecución.",
      "Ejecuta JavaScript con un motor optimizado para aplicaciones React Native y herramientas de depuración integradas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Hermes (Arquitectura y runtime): Ejecuta JavaScript con un motor optimizado para aplicaciones React Native y herramientas de depuración integradas.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-09",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Metro»?",
    "options": [
      "Resuelve módulos, transforma código y construye bundles para desarrollo y producción.",
      "Carga módulos nativos de forma perezosa y con interfaces tipadas generadas al operar.",
      "Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM.",
      "Genera interfaces nativas desde especificaciones tipadas para módulos y componentes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Metro (Arquitectura y runtime): Resuelve módulos, transforma código y construye bundles para desarrollo y producción.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-10",
    "collectionId": "react-native",
    "question": "Respecto a arquitectura y runtime en React Native, ¿cuál es el propósito de «Hilos»?",
    "options": [
      "Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM al operar.",
      "Distingue JavaScript, UI, render y trabajo nativo para evitar bloquear gestos o frames.",
      "Genera interfaces nativas desde especificaciones tipadas para módulos y componentes.",
      "Resuelve módulos, transforma código y construye bundles para desarrollo y producción."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Hilos y colas de trabajo (Arquitectura y runtime): Distingue JavaScript, UI, render y trabajo nativo para evitar bloquear gestos o frames.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-11",
    "collectionId": "react-native",
    "question": "En React Native (Arquitectura y runtime), ¿qué función técnica cumple «React Compiler en móvil»?",
    "options": [
      "Distingue JavaScript, UI, render y trabajo nativo para evitar bloquear gestos o frames al operar.",
      "Coordina Fabric, TurboModules, JSI y Codegen como base moderna del runtime de React Native.",
      "Optimiza componentes y Hooks en build mediante memoización automática también en React Native.",
      "Resuelve módulos, transforma código y construye bundles para desarrollo y producción al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "React Compiler en móvil (Arquitectura y runtime): Optimiza componentes y Hooks en build mediante memoización automática también en React Native.",
    "topic": "Arquitectura y runtime",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-12",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «StyleSheet» en layout y presentación?",
    "options": [
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan al operar.",
      "Desplaza contenido y coordina scroll para que el campo activo permanezca visible al operar.",
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible.",
      "Organiza estilos con objetos de JavaScript y referencias reutilizables dentro del flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "StyleSheet (Layout y presentación): Organiza estilos con objetos de JavaScript y referencias reutilizables.",
    "topic": "Layout y presentación",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-13",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «Flexbox»?",
    "options": [
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible al operar.",
      "Ajusta contenido alrededor de sensores, barras del sistema y teclado virtual al operar.",
      "Desplaza contenido y coordina scroll para que el campo activo permanezca visible.",
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Flexbox (Layout y presentación): Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible.",
    "topic": "Layout y presentación",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-14",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Yoga y cálculo de layout»?",
    "options": [
      "Desplaza contenido y coordina scroll para que el campo activo permanezca visible al operar.",
      "Resuelve tamaños y posiciones desde reglas Flexbox antes de montar la geometría nativa.",
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan al operar.",
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Yoga y cálculo de layout (Layout y presentación): Resuelve tamaños y posiciones desde reglas Flexbox antes de montar la geometría nativa.",
    "topic": "Layout y presentación",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-15",
    "collectionId": "react-native",
    "question": "Respecto a layout y presentación en React Native, ¿cuál es el propósito de «Unidades»?",
    "options": [
      "Resuelve tamaños y posiciones desde reglas Flexbox antes de montar la geometría nativa al operar.",
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible al operar.",
      "Interpreta números como píxeles lógicos independientes de densidad y adapta recursos físicos.",
      "Selecciona archivos, valores o implementaciones específicos cuando iOS y Android difieren."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Unidades y densidad (Layout y presentación): Interpreta números como píxeles lógicos independientes de densidad y adapta recursos físicos.",
    "topic": "Layout y presentación",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-16",
    "collectionId": "react-native",
    "question": "En React Native (Layout y presentación), ¿qué función técnica cumple «useWindowDimensions y orientación»?",
    "options": [
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan al operar.",
      "Desplaza contenido y coordina scroll para que el campo activo permanezca visible al operar.",
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible.",
      "Recalcula ancho, alto y escala cuando cambia el espacio disponible durante la ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "useWindowDimensions y orientación (Layout y presentación): Recalcula ancho, alto y escala cuando cambia el espacio disponible.",
    "topic": "Layout y presentación",
    "difficulty": "básico"
  },
  {
    "id": "react-native-q-17",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «Diseño responsivo» en layout y presentación?",
    "options": [
      "Combina flex, límites, breakpoints propios y composición para teléfonos, tablets y ventanas redimensionables.",
      "Controla jerarquía, escalado de fuente, truncado, selección y herencia dentro de componentes Text al operar.",
      "Empaqueta y carga familias tipográficas respetando nombres y configuración de cada plataforma en ejecución.",
      "Interpreta números como píxeles lógicos independientes de densidad y adapta recursos físicos con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Diseño responsivo (Layout y presentación): Combina flex, límites, breakpoints propios y composición para teléfonos, tablets y ventanas redimensionables.",
    "topic": "Layout y presentación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-18",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «Safe Area»?",
    "options": [
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan al operar.",
      "Ajusta contenido alrededor de sensores, barras del sistema y teclado virtual al evaluar.",
      "Desplaza contenido y coordina scroll para que el campo activo permanezca visible al operar.",
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Safe Area y teclado (Layout y presentación): Ajusta contenido alrededor de sensores, barras del sistema y teclado virtual.",
    "topic": "Layout y presentación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-19",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «KeyboardAvoidingView y gestión de foco»?",
    "options": [
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible al operar.",
      "Resuelve tamaños y posiciones desde reglas Flexbox antes de montar la geometría nativa.",
      "Desplaza contenido y coordina scroll para que el campo activo permanezca visible al operar.",
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "KeyboardAvoidingView y gestión de foco (Layout y presentación): Desplaza contenido y coordina scroll para que el campo activo permanezca visible.",
    "topic": "Layout y presentación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-20",
    "collectionId": "react-native",
    "question": "Respecto a layout y presentación en React Native, ¿cuál es el propósito de «Appearance y color scheme»?",
    "options": [
      "Desplaza contenido y coordina scroll para que el campo activo permanezca visible al operar.",
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan al operar.",
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible.",
      "Reacciona al tema claro, oscuro o configuración del sistema respetando las invariantes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Appearance y color scheme (Layout y presentación): Reacciona al tema claro, oscuro o configuración del sistema.",
    "topic": "Layout y presentación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-21",
    "collectionId": "react-native",
    "question": "En React Native (Layout y presentación), ¿qué función técnica cumple «Código por plataforma»?",
    "options": [
      "Selecciona archivos, valores o implementaciones específicos cuando iOS y Android difieren al operar.",
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible.",
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan al operar.",
      "Resuelve tamaños y posiciones desde reglas Flexbox antes de montar la geometría nativa."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Código por plataforma (Layout y presentación): Selecciona archivos, valores o implementaciones específicos cuando iOS y Android difieren.",
    "topic": "Layout y presentación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-22",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «Text y tipografía» en layout y presentación?",
    "options": [
      "Interpreta números como píxeles lógicos independientes de densidad y adapta recursos físicos al operar.",
      "Controla jerarquía, escalado de fuente, truncado, selección y herencia dentro de componentes Text.",
      "Selecciona archivos, valores o implementaciones específicos cuando iOS y Android difieren al operar.",
      "Empaqueta y carga familias tipográficas respetando nombres y configuración de cada plataforma."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Text y tipografía (Layout y presentación): Controla jerarquía, escalado de fuente, truncado, selección y herencia dentro de componentes Text.",
    "topic": "Layout y presentación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-23",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «Fuentes personalizadas»?",
    "options": [
      "Resuelve tamaños y posiciones desde reglas Flexbox antes de montar la geometría nativa al operar.",
      "Selecciona archivos, valores o implementaciones específicos cuando iOS y Android difieren.",
      "Empaqueta y carga familias tipográficas respetando nombres y configuración de cada plataforma.",
      "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fuentes personalizadas (Layout y presentación): Empaqueta y carga familias tipográficas respetando nombres y configuración de cada plataforma.",
    "topic": "Layout y presentación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-24",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Sombras, elevación y clipping»?",
    "options": [
      "Ajusta contenido alrededor de sensores, barras del sistema y teclado virtual al operar.",
      "Organiza estilos con objetos de JavaScript y referencias reutilizables al evaluar.",
      "Desplaza contenido y coordina scroll para que el campo activo permanezca visible.",
      "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sombras, elevación y clipping (Layout y presentación): Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan.",
    "topic": "Layout y presentación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-25",
    "collectionId": "react-native",
    "question": "Respecto a interacción, gestos y medios en React Native, ¿cuál es el propósito de «TextInput»?",
    "options": [
      "Conecta teclado nativo, eventos y estado para campos controlados sin degradar el flujo.",
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos.",
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress.",
      "Resuelve recursos locales o remotos, dimensiones, caché y decodificación en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "TextInput (Interacción, gestos y medios): Conecta teclado nativo, eventos y estado para campos controlados.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-26",
    "collectionId": "react-native",
    "question": "En React Native (Interacción, gestos y medios), ¿qué función técnica cumple «Pressable»?",
    "options": [
      "Resuelve recursos locales o remotos, dimensiones, caché y decodificación en ejecución.",
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress.",
      "Negocia qué vista recibe un gesto cuando varias capas quieren responder al evaluar.",
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pressable (Interacción, gestos y medios): Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-27",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «Responder System» en interacción, gestos y medios?",
    "options": [
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos al operar.",
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress al operar.",
      "Negocia qué vista recibe un gesto cuando varias capas quieren responder de forma segura.",
      "Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Responder System (Interacción, gestos y medios): Negocia qué vista recibe un gesto cuando varias capas quieren responder.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-28",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «Gestos complejos»?",
    "options": [
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress al operar.",
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos al operar.",
      "Anima cambios globales de layout en el siguiente commit con una configuración declarativa.",
      "Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Gestos complejos (Interacción, gestos y medios): Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-29",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Animated»?",
    "options": [
      "Modela valores animados y los conecta con propiedades compatibles para interpolar en el tiempo.",
      "Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI.",
      "Anima cambios globales de layout en el siguiente commit con una configuración declarativa.",
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Animated (Interacción, gestos y medios): Modela valores animados y los conecta con propiedades compatibles para interpolar en el tiempo.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-30",
    "collectionId": "react-native",
    "question": "Respecto a interacción, gestos y medios en React Native, ¿cuál es el propósito de «LayoutAnimation»?",
    "options": [
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress al operar.",
      "Anima cambios globales de layout en el siguiente commit con una configuración declarativa.",
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos al operar.",
      "Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI."
    ],
    "correctAnswerIndex": 1,
    "explanation": "LayoutAnimation (Interacción, gestos y medios): Anima cambios globales de layout en el siguiente commit con una configuración declarativa.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-31",
    "collectionId": "react-native",
    "question": "En React Native (Interacción, gestos y medios), ¿qué función técnica cumple «Animaciones en el hilo de UI»?",
    "options": [
      "Modela valores animados y los conecta con propiedades compatibles para interpolar en el tiempo de modo predecible.",
      "Implementa el renderer nativo moderno, calcula árboles y commits y coordina montaje con las plataformas al operar.",
      "Mantiene gestos y transformaciones fluidos mediante worklets o soluciones que evitan round trips por JavaScript.",
      "Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI sin degradar el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Animaciones en el hilo de UI (Interacción, gestos y medios): Mantienen gestos y transformaciones fluidos mediante worklets o soluciones que evitan round trips por JavaScript.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-32",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «Imágenes» en interacción, gestos y medios?",
    "options": [
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos al operar.",
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress al operar.",
      "Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI.",
      "Resuelve recursos locales o remotos, dimensiones, caché y decodificación de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Imágenes (Interacción, gestos y medios): Resuelve recursos locales o remotos, dimensiones, caché y decodificación.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-33",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «ImageBackground, resizeMode y aspectRatio»?",
    "options": [
      "Controla cómo una imagen llena su caja sin deformar el diseño manteniendo consistencia.",
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos.",
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress.",
      "Resuelve recursos locales o remotos, dimensiones, caché y decodificación en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "ImageBackground, resizeMode y aspectRatio (Interacción, gestos y medios): Controla cómo una imagen llena su caja sin deformar el diseño.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-34",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Audio, video y cámara»?",
    "options": [
      "Resuelve recursos locales o remotos, dimensiones, caché y decodificación en el flujo.",
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos.",
      "Negocia qué vista recibe un gesto cuando varias capas quieren responder al operar.",
      "Añade vibración o respuesta táctil alineada con acciones significativas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Audio, video y cámara (Interacción, gestos y medios): Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "intermedio"
  },
  {
    "id": "react-native-q-35",
    "collectionId": "react-native",
    "question": "Respecto a interacción, gestos y medios en React Native, ¿cuál es el propósito de «Haptics y feedback nativo»?",
    "options": [
      "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos al operar.",
      "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress al operar.",
      "Añade vibración o respuesta táctil alineada con acciones significativas de forma segura.",
      "Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Haptics y feedback nativo (Interacción, gestos y medios): Añade vibración o respuesta táctil alineada con acciones significativas.",
    "topic": "Interacción, gestos y medios",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-36",
    "collectionId": "react-native",
    "question": "En React Native (Listas y navegación), ¿qué función técnica cumple «ScrollView y FlatList»?",
    "options": [
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes al operar.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos al operar.",
      "Distingue render completo de una ventana virtual para colecciones grandes con precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "ScrollView y FlatList (Listas y navegación): Distingue render completo de una ventana virtual para colecciones grandes.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-37",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «SectionList» en listas y navegación?",
    "options": [
      "Virtualiza datos agrupados y conserva encabezados de sección durante la ejecución del módulo.",
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "SectionList (Listas y navegación): Virtualiza datos agrupados y conserva encabezados de sección.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-38",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «Virtualización y windowing»?",
    "options": [
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes al evaluar.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos al evaluar.",
      "Transportan identificadores serializables y pueden comprobarse con TypeScript en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Virtualización y windowing (Listas y navegación): Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-39",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Keys, getItemLayout y renderItem»?",
    "options": [
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes al operar.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Estabiliza identidad, evita mediciones repetidas y reduce trabajo por fila en ejecución.",
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Keys, getItemLayout y renderItem (Listas y navegación): Estabiliza identidad, evita mediciones repetidas y reduce trabajo por fila.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-40",
    "collectionId": "react-native",
    "question": "Respecto a listas y navegación en React Native, ¿cuál es el propósito de «Refresh»?",
    "options": [
      "Estabiliza identidad, evita mediciones repetidas y reduce trabajo por fila al operar.",
      "Distingue render completo de una ventana virtual para colecciones grandes al operar.",
      "Transportan identificadores serializables y pueden comprobarse con TypeScript.",
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Refresh y carga incremental (Listas y navegación): Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-41",
    "collectionId": "react-native",
    "question": "En React Native (Listas y navegación), ¿qué función técnica cumple «Navegación»?",
    "options": [
      "Mantiene historial de pantallas y transiciones entre rutas dentro de la arquitectura activa.",
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Navegación (Listas y navegación): Mantiene historial de pantallas y transiciones entre rutas.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-42",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «Stacks, tabs y drawers» en listas y navegación?",
    "options": [
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes al operar.",
      "Componen patrones de navegación con estados y ciclos de vida distintos dentro del flujo.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Stacks, tabs y drawers (Listas y navegación): Componen patrones de navegación con estados y ciclos de vida distintos.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-43",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «Parámetros y tipos de rutas»?",
    "options": [
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes al operar.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Transportan identificadores serializables y pueden comprobarse con TypeScript al operar.",
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Parámetros y tipos de rutas (Listas y navegación): Transportan identificadores serializables y pueden comprobarse con TypeScript.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-44",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Deep links y universal links»?",
    "options": [
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes al operar.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos al operar.",
      "Transforma URLs externas en rutas internas y verifican dominios asociados con precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Deep links y universal links (Listas y navegación): Transforman URLs externas en rutas internas y verifican dominios asociados.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-45",
    "collectionId": "react-native",
    "question": "Respecto a listas y navegación en React Native, ¿cuál es el propósito de «Estado de navegación y restauración»?",
    "options": [
      "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos de forma segura.",
      "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes al operar.",
      "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza al operar.",
      "Transportan identificadores serializables y pueden comprobarse con TypeScript al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Estado de navegación y restauración (Listas y navegación): Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos.",
    "topic": "Listas y navegación",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-46",
    "collectionId": "react-native",
    "question": "En React Native (Sistema operativo y dispositivo), ¿qué función técnica cumple «Permisos»?",
    "options": [
      "Abre URLs, teléfono, correo, ajustes u otras apps mediante esquemas soportados con precisión.",
      "Solicita capacidades protegidas y adapta la experiencia a concedido, denegado o bloqueado.",
      "Ejecuta trabajo limitado bajo políticas del sistema, no como procesos permanentes libres.",
      "Conecta token del dispositivo, proveedor remoto, payload del sistema y navegación al abrir."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Permisos (Sistema operativo y dispositivo): Solicita capacidades protegidas y adapta la experiencia a concedido, denegado o bloqueado.",
    "topic": "Sistema operativo y dispositivo",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-47",
    "collectionId": "react-native",
    "question": "Dentro de React Native, ¿cómo opera el mecanismo de «Linking y apertura de aplicaciones» en sistema operativo y dispositivo?",
    "options": [
      "Ejecuta trabajo limitado bajo políticas del sistema, no como procesos permanentes libres.",
      "Solicita capacidades protegidas y adapta la experiencia a concedido, denegado o bloqueado.",
      "Abre URLs, teléfono, correo, ajustes u otras apps mediante esquemas soportados al operar.",
      "Conecta token del dispositivo, proveedor remoto, payload del sistema y navegación al abrir."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Linking y apertura de aplicaciones (Sistema operativo y dispositivo): Abre URLs, teléfono, correo, ajustes u otras apps mediante esquemas soportados.",
    "topic": "Sistema operativo y dispositivo",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-48",
    "collectionId": "react-native",
    "question": "Al trabajar con React Native, ¿qué responsabilidad define a «AppState»?",
    "options": [
      "Ejecuta trabajo limitado bajo políticas del sistema, no como procesos permanentes libres al operar.",
      "Solicita capacidades protegidas y adapta la experiencia a concedido, denegado o bloqueado.",
      "Conecta token del dispositivo, proveedor remoto, payload del sistema y navegación al abrir.",
      "Observa si la app está activa, en background o transicionando para pausar y reanudar trabajo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "AppState (Sistema operativo y dispositivo): Observa si la app está activa, en background o transicionando para pausar y reanudar trabajo.",
    "topic": "Sistema operativo y dispositivo",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-49",
    "collectionId": "react-native",
    "question": "En la arquitectura de React Native, ¿qué caracteriza técnicamente a «Notificaciones push»?",
    "options": [
      "Conecta token del dispositivo, proveedor remoto, payload del sistema y navegación al abrir.",
      "Ejecuta trabajo limitado bajo políticas del sistema, no como procesos permanentes libres.",
      "Solicita capacidades protegidas y adapta la experiencia a concedido, denegado o bloqueado.",
      "Abre URLs, teléfono, correo, ajustes u otras apps mediante esquemas soportados al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Notificaciones push (Sistema operativo y dispositivo): Conecta token del dispositivo, proveedor remoto, payload del sistema y navegación al abrir.",
    "topic": "Sistema operativo y dispositivo",
    "difficulty": "avanzado"
  },
  {
    "id": "react-native-q-50",
    "collectionId": "react-native",
    "question": "Respecto a sistema operativo y dispositivo en React Native, ¿cuál es el propósito de «Tareas en background»?",
    "options": [
      "Abre URLs, teléfono, correo, ajustes u otras apps mediante esquemas soportados en ejecución.",
      "Ejecuta trabajo limitado bajo políticas del sistema, no como procesos permanentes libres.",
      "Solicita capacidades protegidas y adapta la experiencia a concedido, denegado o bloqueado.",
      "Conecta token del dispositivo, proveedor remoto, payload del sistema y navegación al abrir."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tareas en background (Sistema operativo y dispositivo): Ejecutan trabajo limitado bajo políticas del sistema, no como procesos permanentes libres.",
    "topic": "Sistema operativo y dispositivo",
    "difficulty": "avanzado"
  }
];
