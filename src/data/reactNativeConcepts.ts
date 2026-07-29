import type { StudyConcept } from "./conceptTypes";

export const reactNativeConcepts = [
  {
    "title": "Renderizado nativo",
    "description": "Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM.",
    "section": "Arquitectura y runtime",
    "family": "pipeline nativo",
    "layout": "feature"
  },
  {
    "title": "Componentes base",
    "description": "View, Text, Image, ScrollView y otras primitivas se enlazan con controles de cada plataforma.",
    "section": "Arquitectura y runtime",
    "family": "traducción de primitivas",
    "layout": "standard"
  },
  {
    "title": "Nueva Arquitectura",
    "description": "Coordina Fabric, TurboModules, JSI y Codegen como base moderna del runtime de React Native.",
    "section": "Arquitectura y runtime",
    "family": "capas del runtime",
    "layout": "feature",
    "scene": {
      "variant": "layers",
      "code": "React → Fabric / TurboModules → iOS · Android",
      "nodes": [
        "React renderer|element tree",
        "Fabric|native UI",
        "TurboModules|native APIs",
        "JSI|interfaz C++",
        "Codegen|contratos"
      ],
      "outcome": "arquitectura sin bridge legado",
      "caption": "Las piezas comparten contratos generados y comunicación directa con el runtime."
    }
  },
  {
    "title": "Fabric",
    "description": "Implementa el renderer nativo moderno, calcula árboles y commits y coordina montaje con las plataformas.",
    "section": "Arquitectura y runtime",
    "family": "renderer concurrente",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "React tree → Shadow Tree → Mounting",
      "nodes": [
        "React render|elements",
        "Shadow Tree|layout props",
        "commit|revision",
        "mount|native views"
      ],
      "outcome": "vista nativa actualizada",
      "caption": "Fabric integra el modelo concurrente de React con el pipeline de UI nativa."
    }
  },
  {
    "title": "TurboModules",
    "description": "Carga módulos nativos de forma perezosa y con interfaces tipadas generadas.",
    "section": "Arquitectura y runtime",
    "family": "módulos bajo demanda",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "NativeModules.Camera.capture()",
      "nodes": [
        "JS call|Camera",
        "JSI|binding",
        "TurboModule|lazy load",
        "native API|capture"
      ],
      "outcome": "resultado a JavaScript",
      "caption": "Solo se inicializa el módulo cuando el código lo necesita."
    }
  },
  {
    "title": "JSI",
    "description": "Permite que JavaScript se comunique con objetos C++ y capacidades nativas sin serializar cada mensaje por un puente JSON.",
    "section": "Arquitectura y runtime",
    "family": "interfaz directa",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "Legacy Bridge vs JSI",
      "nodes": [
        "bridge|colas + serialización",
        "JSI|bindings directos",
        "async only|legado",
        "sync capability|cuando es seguro"
      ],
      "outcome": "menos intermediarios",
      "caption": "La disponibilidad síncrona no significa que todo deba ejecutarse en el hilo principal."
    }
  },
  {
    "title": "Codegen",
    "description": "Genera interfaces nativas desde especificaciones tipadas para módulos y componentes.",
    "section": "Arquitectura y runtime",
    "family": "contrato generado",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "NativeCamera.ts → Codegen → Kotlin / Obj-C++",
      "nodes": [
        "spec|tipos",
        "schema|normalizado",
        "generated code|bindings",
        "build|compila"
      ],
      "outcome": "contrato compartido",
      "caption": "Codegen detecta incompatibilidades antes de ejecutar y reduce glue code manual."
    }
  },
  {
    "title": "Hermes",
    "description": "Ejecuta JavaScript con un motor optimizado para aplicaciones React Native y herramientas de depuración integradas.",
    "section": "Arquitectura y runtime",
    "family": "motor JavaScript",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "bundle JS → bytecode → Hermes VM",
      "nodes": [
        "Metro bundle|source",
        "compile|bytecode",
        "Hermes|execute",
        "GC|memory",
        "DevTools|inspect"
      ],
      "outcome": "runtime móvil",
      "caption": "El motor afecta arranque, memoria, profiling y compatibilidad de ciertas APIs."
    }
  },
  {
    "title": "Metro",
    "description": "Resuelve módulos, transforma código y construye bundles para desarrollo y producción.",
    "section": "Arquitectura y runtime",
    "family": "pipeline de bundling",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "entry.js → Metro graph → bundle",
      "nodes": [
        "entry|App.tsx",
        "resolver|imports",
        "transformer|TS/JSX",
        "serializer|bundle"
      ],
      "outcome": "grafo empaquetado",
      "caption": "Metro también administra Fast Refresh y assets estáticos."
    }
  },
  {
    "title": "Hilos y colas de trabajo",
    "description": "Distingue JavaScript, UI, render y trabajo nativo para evitar bloquear gestos o frames.",
    "section": "Arquitectura y runtime",
    "family": "carriles de ejecución",
    "layout": "feature",
    "scene": {
      "variant": "compare",
      "code": "JS thread ↔ UI thread",
      "nodes": [
        "JS|lógica React",
        "UI|gestos + dibujo",
        "native worker|I/O",
        "frame budget|≈16.7 ms"
      ],
      "outcome": "trabajo distribuido",
      "caption": "Una tarea larga en JavaScript puede congelar respuestas aunque la vista sea nativa."
    }
  },
  {
    "title": "React Compiler en móvil",
    "description": "Optimiza componentes y Hooks en build mediante memoización automática también en React Native.",
    "section": "Arquitectura y runtime",
    "family": "compilador de renders",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "component source → React Compiler → optimized RN",
      "nodes": [
        "source|código normal",
        "analysis|data flow",
        "memoization|automática",
        "device|menos renders"
      ],
      "outcome": "UI más estable",
      "caption": "El compilador complementa, pero no reemplaza, medir listas, imágenes y trabajo del hilo JS."
    }
  },
  {
    "title": "StyleSheet",
    "description": "Organiza estilos con objetos de JavaScript y referencias reutilizables.",
    "section": "Layout y presentación",
    "family": "hoja de estilo",
    "layout": "standard"
  },
  {
    "title": "Flexbox",
    "description": "Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible.",
    "section": "Layout y presentación",
    "family": "distribución flexible",
    "layout": "standard"
  },
  {
    "title": "Yoga y cálculo de layout",
    "description": "Resuelve tamaños y posiciones desde reglas Flexbox antes de montar la geometría nativa.",
    "section": "Layout y presentación",
    "family": "motor de cajas",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "style props → Yoga → layout metrics",
      "nodes": [
        "width / flex|constraints",
        "Yoga|calcula",
        "x y w h|metrics",
        "Fabric|commit"
      ],
      "outcome": "geometría nativa",
      "caption": "React Native usa un modelo Flexbox similar al web, con defaults y propiedades propias."
    }
  },
  {
    "title": "Unidades y densidad",
    "description": "Interpreta números como píxeles lógicos independientes de densidad y adapta recursos físicos.",
    "section": "Layout y presentación",
    "family": "escala de pantalla",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "100 dp → px según PixelRatio",
      "nodes": [
        "layout unit|100",
        "@2x|200 px",
        "@3x|300 px",
        "same size|visual"
      ],
      "outcome": "tamaño consistente",
      "caption": "Los assets necesitan variantes o escalado para conservar nitidez."
    }
  },
  {
    "title": "useWindowDimensions y orientación",
    "description": "Recalcula ancho, alto y escala cuando cambia el espacio disponible.",
    "section": "Layout y presentación",
    "family": "viewport reactivo",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "const { width } = useWindowDimensions()",
      "nodes": [
        "portrait|390",
        "rotate|evento",
        "landscape|844",
        "render|layout nuevo"
      ],
      "outcome": "UI adaptable",
      "caption": "Es preferible a leer Dimensions una sola vez cuando la ventana puede cambiar."
    }
  },
  {
    "title": "Diseño responsivo",
    "description": "Combina flex, límites, breakpoints propios y composición para teléfonos, tablets y ventanas redimensionables.",
    "section": "Layout y presentación",
    "family": "rutas de composición",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "width < 600 ? Stack : SplitView",
      "nodes": [
        "window|constraint",
        "phone|stack",
        "tablet|two panes",
        "desktop mode|wide"
      ],
      "outcome": "composición apropiada",
      "caption": "No basta escalar todo; a veces cambia la jerarquía visual."
    }
  },
  {
    "title": "Safe Area y teclado",
    "description": "Ajusta contenido alrededor de sensores, barras del sistema y teclado virtual.",
    "section": "Layout y presentación",
    "family": "zonas seguras",
    "layout": "standard"
  },
  {
    "title": "KeyboardAvoidingView y gestión de foco",
    "description": "Desplaza contenido y coordina scroll para que el campo activo permanezca visible.",
    "section": "Layout y presentación",
    "family": "ventana sobre teclado",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "focus → keyboard show → inset → scroll",
      "nodes": [
        "TextInput|focus",
        "keyboard|appears",
        "inset|layout adapts",
        "scroll|field visible"
      ],
      "outcome": "entrada accesible",
      "caption": "iOS y Android tienen comportamientos distintos que deben probarse en dispositivo."
    }
  },
  {
    "title": "Appearance y color scheme",
    "description": "Reacciona al tema claro, oscuro o configuración del sistema.",
    "section": "Layout y presentación",
    "family": "doble paleta",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "useColorScheme()",
      "nodes": [
        "light|tokens claros",
        "dark|tokens oscuros",
        "system|cambia",
        "render|aplica tema"
      ],
      "outcome": "tema coherente",
      "caption": "Usa tokens semánticos para no repartir colores fijos por los componentes."
    }
  },
  {
    "title": "Código por plataforma",
    "description": "Selecciona archivos, valores o implementaciones específicos cuando iOS y Android difieren.",
    "section": "Layout y presentación",
    "family": "bifurcación de plataforma",
    "layout": "standard"
  },
  {
    "title": "Text y tipografía",
    "description": "Controla jerarquía, escalado de fuente, truncado, selección y herencia dentro de componentes Text.",
    "section": "Layout y presentación",
    "family": "líneas tipográficas",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "<Text numberOfLines={2} allowFontScaling>",
      "nodes": [
        "font family|asset",
        "font scale|accessibility",
        "line height|rhythm",
        "ellipsis|overflow"
      ],
      "outcome": "texto legible",
      "caption": "El texto nativo responde a preferencias de accesibilidad y métricas de plataforma."
    }
  },
  {
    "title": "Fuentes personalizadas",
    "description": "Empaqueta y carga familias tipográficas respetando nombres y configuración de cada plataforma.",
    "section": "Layout y presentación",
    "family": "pipeline de asset",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "font file → native bundle → fontFamily",
      "nodes": [
        ".ttf|asset",
        "build|embed",
        "platform name|resolve",
        "Text|render"
      ],
      "outcome": "fuente disponible",
      "caption": "Una familia faltante puede usar fallback diferente en iOS y Android."
    }
  },
  {
    "title": "Sombras, elevación y clipping",
    "description": "Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan.",
    "section": "Layout y presentación",
    "family": "capas visuales",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "shadow* · elevation · overflow",
      "nodes": [
        "content|layer",
        "border radius|clip",
        "shadow|iOS props",
        "elevation|Android"
      ],
      "outcome": "profundidad consistente",
      "caption": "Una composición idéntica puede requerir estilos distintos por plataforma."
    }
  },
  {
    "title": "TextInput",
    "description": "Conecta teclado nativo, eventos y estado para campos controlados.",
    "section": "Interacción, gestos y medios",
    "family": "circuito controlado",
    "layout": "standard"
  },
  {
    "title": "Pressable",
    "description": "Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress.",
    "section": "Interacción, gestos y medios",
    "family": "máquina de pulsación",
    "layout": "standard"
  },
  {
    "title": "Responder System",
    "description": "Negocia qué vista recibe un gesto cuando varias capas quieren responder.",
    "section": "Interacción, gestos y medios",
    "family": "arbitraje de gesto",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "touch start → shouldSetResponder",
      "nodes": [
        "touch|finger",
        "child|wants responder",
        "parent|capture",
        "grant|winner"
      ],
      "outcome": "un receptor activo",
      "caption": "Comprender la negociación ayuda a depurar scrolls y controles anidados."
    }
  },
  {
    "title": "Gestos complejos",
    "description": "Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI.",
    "section": "Interacción, gestos y medios",
    "family": "gramática de gestos",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "pan + pinch + tap",
      "nodes": [
        "tap",
        "long press",
        "pan",
        "pinch"
      ],
      "outcome": "interacción compuesta",
      "caption": "Los gestos deben definir prioridades, áreas activas y cancelación."
    }
  },
  {
    "title": "Animated",
    "description": "Modela valores animados y los conecta con propiedades compatibles para interpolar en el tiempo.",
    "section": "Interacción, gestos y medios",
    "family": "grafo de animación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Animated.Value → interpolation → style",
      "nodes": [
        "value|0→1",
        "timing / spring|driver",
        "interpolate|scale",
        "view|frame"
      ],
      "outcome": "movimiento continuo",
      "caption": "El native driver puede ejecutar ciertas animaciones sin depender de cada frame de JavaScript."
    }
  },
  {
    "title": "LayoutAnimation",
    "description": "Anima cambios globales de layout en el siguiente commit con una configuración declarativa.",
    "section": "Interacción, gestos y medios",
    "family": "transición de layout",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "configureNext → setState → commit",
      "nodes": [
        "configure|spring",
        "state|toggle",
        "layout|new metrics",
        "native animation|between"
      ],
      "outcome": "cambio suave",
      "caption": "Es apropiado para transiciones simples; gestos interactivos requieren control más detallado."
    }
  },
  {
    "title": "Animaciones en el hilo de UI",
    "description": "Mantienen gestos y transformaciones fluidos mediante worklets o soluciones que evitan round trips por JavaScript.",
    "section": "Interacción, gestos y medios",
    "family": "carril de frames",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "JS-driven vs UI-driven",
      "nodes": [
        "JS-driven|puede bloquearse",
        "UI-driven|frame local",
        "gesture|shared value",
        "render|transform"
      ],
      "outcome": "60 fps más resilientes",
      "caption": "La lógica compleja aún debe respetar límites y sincronización entre hilos."
    }
  },
  {
    "title": "Imágenes",
    "description": "Resuelve recursos locales o remotos, dimensiones, caché y decodificación.",
    "section": "Interacción, gestos y medios",
    "family": "pipeline de imagen",
    "layout": "standard"
  },
  {
    "title": "ImageBackground, resizeMode y aspectRatio",
    "description": "Controla cómo una imagen llena su caja sin deformar el diseño.",
    "section": "Interacción, gestos y medios",
    "family": "encaje de medio",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "cover vs contain",
      "nodes": [
        "cover|llena + recorta",
        "contain|completa + espacio",
        "center|sin escalar",
        "aspectRatio|reserva caja"
      ],
      "outcome": "presentación predecible",
      "caption": "Reservar dimensiones evita saltos de layout durante la carga."
    }
  },
  {
    "title": "Audio, video y cámara",
    "description": "Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos.",
    "section": "Interacción, gestos y medios",
    "family": "pipeline multimedia",
    "layout": "feature",
    "scene": {
      "variant": "flow",
      "code": "permission → native session → media result",
      "nodes": [
        "permission|solicitar",
        "camera / player|native",
        "encoding|process",
        "URI / frames|JavaScript",
        "UI|preview"
      ],
      "outcome": "medio disponible",
      "caption": "Las sesiones multimedia tienen ciclo de vida, recursos y diferencias por plataforma."
    }
  },
  {
    "title": "Haptics y feedback nativo",
    "description": "Añade vibración o respuesta táctil alineada con acciones significativas.",
    "section": "Interacción, gestos y medios",
    "family": "pulso de sistema",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "onPress → haptic impact → state update",
      "nodes": [
        "gesture|press",
        "native haptic|pulse",
        "handler|update",
        "UI|confirm"
      ],
      "outcome": "feedback multisensorial",
      "caption": "Debe respetar preferencias, disponibilidad y no usarse como único indicador."
    }
  },
  {
    "title": "ScrollView y FlatList",
    "description": "Distingue render completo de una ventana virtual para colecciones grandes.",
    "section": "Listas y navegación",
    "family": "ventana virtual",
    "layout": "standard"
  },
  {
    "title": "SectionList",
    "description": "Virtualiza datos agrupados y conserva encabezados de sección.",
    "section": "Listas y navegación",
    "family": "lista jerárquica",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "sections=[Piltover, Zaun]",
      "nodes": [
        "header|Piltover",
        "rows|Caitlyn · Vi",
        "header|Zaun",
        "rows|Jinx · Ekko"
      ],
      "outcome": "grupos virtualizados",
      "caption": "Comparte la infraestructura de VirtualizedList con FlatList."
    }
  },
  {
    "title": "Virtualización y windowing",
    "description": "Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza.",
    "section": "Listas y navegación",
    "family": "ventana móvil",
    "layout": "feature",
    "scene": {
      "variant": "browser",
      "code": "FlatList windowSize / maxToRenderPerBatch",
      "nodes": [
        "viewport|visible",
        "ahead|prefetch",
        "behind|retained",
        "unmounted|outside"
      ],
      "outcome": "memoria acotada",
      "caption": "Virtualizar mejora memoria, pero parámetros agresivos pueden crear huecos visibles."
    }
  },
  {
    "title": "Keys, getItemLayout y renderItem",
    "description": "Estabiliza identidad, evita mediciones repetidas y reduce trabajo por fila.",
    "section": "Listas y navegación",
    "family": "optimización de filas",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "keyExtractor + getItemLayout + memo(Row)",
      "nodes": [
        "data|stable id",
        "renderItem|row",
        "getItemLayout|offset",
        "memo|skip"
      ],
      "outcome": "scroll predecible",
      "caption": "Optimiza después de medir: filas simples y referencias estables suelen ser suficientes."
    }
  },
  {
    "title": "Refresh y carga incremental",
    "description": "Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes.",
    "section": "Listas y navegación",
    "family": "doble dirección",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "refreshControl ↕ onEndReached",
      "nodes": [
        "top pull|refresh",
        "reset cursor|page 1",
        "bottom threshold|next page",
        "dedupe|request lock"
      ],
      "outcome": "colección actualizada",
      "caption": "La paginación debe manejar carreras, errores y fin de datos."
    }
  },
  {
    "title": "Navegación",
    "description": "Mantiene historial de pantallas y transiciones entre rutas.",
    "section": "Listas y navegación",
    "family": "pila de pantallas",
    "layout": "standard"
  },
  {
    "title": "Stacks, tabs y drawers",
    "description": "Componen patrones de navegación con estados y ciclos de vida distintos.",
    "section": "Listas y navegación",
    "family": "contenedores de rutas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "RootStack > MainTabs > ChampionStack",
      "nodes": [
        "RootStack|auth / app",
        "Tabs|home · roster",
        "Stack|list · detail",
        "Drawer|global"
      ],
      "outcome": "jerarquía navegable",
      "caption": "La estructura debe reflejar tareas del usuario, no solo la estructura de archivos."
    }
  },
  {
    "title": "Parámetros y tipos de rutas",
    "description": "Transportan identificadores serializables y pueden comprobarse con TypeScript.",
    "section": "Listas y navegación",
    "family": "contrato de ruta",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "navigate(\"Champion\", { id: \"jinx\" })",
      "nodes": [
        "route name|Champion",
        "params|id string",
        "navigation|push",
        "screen|load id"
      ],
      "outcome": "destino tipado",
      "caption": "Pasa IDs y opciones pequeñas; evita transportar objetos vivos que pueden quedar obsoletos."
    }
  },
  {
    "title": "Deep links y universal links",
    "description": "Transforman URLs externas en rutas internas y verifican dominios asociados.",
    "section": "Listas y navegación",
    "family": "enrutador de enlaces",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "arcane://champions/jinx",
      "nodes": [
        "OS|opens URL",
        "Linking|receives",
        "parser|route + params",
        "navigator|Champion"
      ],
      "outcome": "pantalla directa",
      "caption": "Los links deben funcionar con la app cerrada, en background y ya abierta."
    }
  },
  {
    "title": "Estado de navegación y restauración",
    "description": "Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos.",
    "section": "Listas y navegación",
    "family": "snapshot de router",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "nav state → storage → cold start",
      "nodes": [
        "navigate|stack changes",
        "serialize|safe state",
        "app killed|memory gone",
        "restore|validate"
      ],
      "outcome": "continuidad controlada",
      "caption": "No restaures pantallas sensibles o estados incompatibles con una nueva sesión."
    }
  },
  {
    "title": "Permisos",
    "description": "Solicita capacidades protegidas y adapta la experiencia a concedido, denegado o bloqueado.",
    "section": "Sistema operativo y dispositivo",
    "family": "diálogo del sistema",
    "layout": "standard"
  },
  {
    "title": "Linking y apertura de aplicaciones",
    "description": "Abre URLs, teléfono, correo, ajustes u otras apps mediante esquemas soportados.",
    "section": "Sistema operativo y dispositivo",
    "family": "puerta a otras apps",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "Linking.canOpenURL(url)",
      "nodes": [
        "url|mailto:",
        "canOpenURL|consulta",
        "openURL|sistema",
        "fallback|si no"
      ],
      "outcome": "acción externa",
      "caption": "Valida esquemas y muestra una alternativa cuando el destino no está disponible."
    }
  },
  {
    "title": "AppState",
    "description": "Observa si la app está activa, en background o transicionando para pausar y reanudar trabajo.",
    "section": "Sistema operativo y dispositivo",
    "family": "ciclo de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "active → background → active",
      "nodes": [
        "active|UI visible",
        "inactive|transition",
        "background|suspend work",
        "active|refresh"
      ],
      "outcome": "recursos coordinados",
      "caption": "El sistema puede terminar el proceso en background; no dependas de recibir siempre un evento final."
    }
  },
  {
    "title": "Notificaciones push",
    "description": "Conecta token del dispositivo, proveedor remoto, payload del sistema y navegación al abrir.",
    "section": "Sistema operativo y dispositivo",
    "family": "ruta de notificación",
    "layout": "feature",
    "scene": {
      "variant": "flow",
      "code": "server → APNs/FCM → device → app",
      "nodes": [
        "backend|event",
        "push provider|routes",
        "OS|displays",
        "tap|deep link",
        "app|screen"
      ],
      "outcome": "usuario llega al contexto",
      "caption": "Permisos, tokens, canales, datos sensibles y estados foreground/background requieren manejo separado."
    }
  },
  {
    "title": "Tareas en background",
    "description": "Ejecutan trabajo limitado bajo políticas del sistema, no como procesos permanentes libres.",
    "section": "Sistema operativo y dispositivo",
    "family": "ventana de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "schedule background sync",
      "nodes": [
        "app|requests work",
        "OS|decides when",
        "task|time budget",
        "finish|signal completion"
      ],
      "outcome": "trabajo oportunista",
      "caption": "iOS y Android imponen restricciones distintas de energía, red y duración."
    }
  },
  {
    "title": "Geolocalización",
    "description": "Obtiene posición con precisión y coste energético variables, sujeto a permisos y ciclo de vida.",
    "section": "Sistema operativo y dispositivo",
    "family": "señal satelital",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "watchPosition(options)",
      "nodes": [
        "GPS|precise",
        "network|coarse",
        "permission|policy",
        "watch|updates"
      ],
      "outcome": "coordenada + accuracy",
      "caption": "Solicita la precisión mínima necesaria y detén observadores al terminar."
    }
  },
  {
    "title": "Share y clipboard",
    "description": "Intercambian texto o archivos con otras apps usando hojas y servicios del sistema.",
    "section": "Sistema operativo y dispositivo",
    "family": "transferencia del sistema",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "Share.share({ message })",
      "nodes": [
        "content|payload",
        "native sheet|targets",
        "user|selects app",
        "result|shared/dismissed"
      ],
      "outcome": "flujo delegado",
      "caption": "El sistema controla destinos y puede devolver resultados diferentes por plataforma."
    }
  },
  {
    "title": "Accesibilidad",
    "description": "Expone roles, nombres, estados, acciones y orden comprensible a VoiceOver y TalkBack.",
    "section": "Sistema operativo y dispositivo",
    "family": "árbol accesible",
    "layout": "feature",
    "scene": {
      "variant": "tree",
      "code": "accessible · accessibilityLabel · role",
      "nodes": [
        "component|visual",
        "semantic props|meaning",
        "accessibility tree|node",
        "screen reader|announcement"
      ],
      "outcome": "interfaz operable",
      "caption": "La experiencia debe funcionar con lector, tamaño de texto, contraste y navegación por foco."
    }
  },
  {
    "title": "Anuncios y foco accesible",
    "description": "Comunica cambios importantes y mueve foco solo cuando la tarea lo requiere.",
    "section": "Sistema operativo y dispositivo",
    "family": "ruta de foco",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "AccessibilityInfo.announceForAccessibility()",
      "nodes": [
        "state change|error",
        "announcement|message",
        "screen reader|speaks",
        "focus|target control"
      ],
      "outcome": "cambio percibido",
      "caption": "No anuncies cada actualización; prioriza información necesaria para continuar."
    }
  },
  {
    "title": "Internacionalización y RTL",
    "description": "Adapta texto, formatos, dirección, imágenes y layout a idioma y cultura.",
    "section": "Sistema operativo y dispositivo",
    "family": "espejo cultural",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "I18nManager.isRTL",
      "nodes": [
        "LTR|left→right",
        "RTL|right→left",
        "logical layout|start/end",
        "locale|formats"
      ],
      "outcome": "UI localizada",
      "caption": "Traducir strings no basta: longitud, plurales y dirección cambian la composición."
    }
  },
  {
    "title": "Peticiones de red",
    "description": "Envía solicitudes HTTP y actualiza estado sin bloquear la interfaz.",
    "section": "Datos, offline y seguridad",
    "family": "cliente servidor",
    "layout": "standard"
  },
  {
    "title": "Timeouts y cancelación",
    "description": "Cancela fetch y trabajo dependiente cuando cambia una pantalla o vence el presupuesto.",
    "section": "Datos, offline y seguridad",
    "family": "señal de cancelación",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "AbortController + fetch",
      "nodes": [
        "screen|mount",
        "request|pending",
        "navigate away|abort",
        "catch|AbortError",
        "cleanup|done"
      ],
      "outcome": "sin respuesta obsoleta",
      "caption": "La cancelación evita setState tardío y consumo innecesario de radio o batería."
    }
  },
  {
    "title": "Persistencia local",
    "description": "Guarda datos fuera de la memoria del componente y los recupera en otra sesión.",
    "section": "Datos, offline y seguridad",
    "family": "memoria persistente",
    "layout": "standard"
  },
  {
    "title": "Almacenamiento seguro",
    "description": "Protege tokens o secretos pequeños usando servicios cifrados del sistema operativo.",
    "section": "Datos, offline y seguridad",
    "family": "bóveda nativa",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "secureStore.set(\"token\", value)",
      "nodes": [
        "token|sensitive",
        "Keychain / Keystore|vault",
        "biometric|optional gate",
        "read"
      ],
      "outcome": "secreto protegido",
      "caption": "No guardes credenciales en almacenamiento plano ni incluyas secretos en el bundle."
    }
  },
  {
    "title": "Offline-first",
    "description": "Mantiene una copia local, registra cambios y sincroniza cuando regresa la conectividad.",
    "section": "Datos, offline y seguridad",
    "family": "doble fuente coordinada",
    "layout": "feature",
    "scene": {
      "variant": "compare",
      "code": "local database ↔ remote API",
      "nodes": [
        "local|read immediately",
        "queue|pending mutations",
        "network|sync",
        "conflict|reconcile"
      ],
      "outcome": "app útil sin red",
      "caption": "Offline-first necesita IDs, timestamps, estados de sincronización y reglas de conflicto."
    }
  },
  {
    "title": "Caché de datos",
    "description": "Evita solicitudes repetidas y decide frescura, invalidación y revalidación.",
    "section": "Datos, offline y seguridad",
    "family": "capas de caché",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "memory → disk → network",
      "nodes": [
        "memory|fast",
        "disk|persistent",
        "network|source",
        "stale policy|refresh"
      ],
      "outcome": "dato disponible",
      "caption": "Una caché sin política de invalidación se convierte en una fuente de errores."
    }
  },
  {
    "title": "Estado global",
    "description": "Comparte sesión o dominio entre pantallas mediante contexto o stores, sin globalizar estado efímero.",
    "section": "Datos, offline y seguridad",
    "family": "mapa de propiedad",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "local UI · context · store · server cache",
      "nodes": [
        "component|input value",
        "context|theme/session",
        "store|client domain",
        "server cache|remote"
      ],
      "outcome": "responsabilidad correcta",
      "caption": "Elige la herramienta según propiedad, frecuencia y persistencia del dato."
    }
  },
  {
    "title": "Seguridad de red",
    "description": "Usa HTTPS, validación del servidor, almacenamiento seguro y políticas de autenticación defensivas.",
    "section": "Datos, offline y seguridad",
    "family": "capas de defensa",
    "layout": "feature",
    "scene": {
      "variant": "layers",
      "code": "TLS + auth + validation + least privilege",
      "nodes": [
        "transport|TLS",
        "identity|token",
        "authorization|scope",
        "input|validate",
        "logs|redact"
      ],
      "outcome": "defensa en profundidad",
      "caption": "La app cliente no puede guardar secretos verdaderos ni ser la única autoridad."
    }
  },
  {
    "title": "Biometría",
    "description": "Solicita autenticación local para desbloquear una acción o secreto, sin sustituir la identidad del backend.",
    "section": "Datos, offline y seguridad",
    "family": "puerta biométrica",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "authenticateAsync()",
      "nodes": [
        "user|touch/face",
        "OS prompt|secure UI",
        "success|unlock local",
        "backend|still authorize"
      ],
      "outcome": "presencia confirmada",
      "caption": "La biometría confirma al usuario del dispositivo, no emite por sí sola permisos del servidor."
    }
  },
  {
    "title": "React Native DevTools",
    "description": "Inspecciona componentes, props, estado, red y rendimiento con herramientas integradas al runtime Hermes.",
    "section": "Calidad, performance y entrega",
    "family": "panel de depuración",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "React Native DevTools",
      "nodes": [
        "Components|tree",
        "Profiler|commits",
        "Console|logs",
        "Network|requests"
      ],
      "outcome": "estado observable",
      "caption": "Depurar con DevTools evita depender únicamente de console.log."
    }
  },
  {
    "title": "Fast Refresh",
    "description": "Actualiza módulos durante desarrollo intentando preservar estado compatible.",
    "section": "Calidad, performance y entrega",
    "family": "ciclo de edición",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "edit → Metro → refresh",
      "nodes": [
        "save file|change",
        "transform|module",
        "refresh|patch",
        "state|preserve/reset"
      ],
      "outcome": "feedback rápido",
      "caption": "Cambios fuera de componentes o errores de firma pueden forzar recarga completa."
    }
  },
  {
    "title": "Performance de frames",
    "description": "Mide si los hilos JS y UI cumplen el presupuesto de cada frame durante interacción.",
    "section": "Calidad, performance y entrega",
    "family": "presupuesto de frame",
    "layout": "feature",
    "scene": {
      "variant": "compare",
      "code": "JS FPS vs UI FPS",
      "nodes": [
        "JS frame|logic",
        "UI frame|draw",
        "16.7 ms|60 Hz",
        "dropped|jank"
      ],
      "outcome": "interacción fluida",
      "caption": "Optimizar requiere identificar qué hilo y qué etapa pierden frames."
    }
  },
  {
    "title": "Arranque y tiempo a interacción",
    "description": "Reduce trabajo, módulos, fuentes y datos requeridos antes de mostrar una pantalla útil.",
    "section": "Calidad, performance y entrega",
    "family": "ruta crítica",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "process start → JS bundle → first render → interactive",
      "nodes": [
        "native startup|process",
        "Hermes|load bytecode",
        "React|initial render",
        "data|defer noncritical"
      ],
      "outcome": "pantalla útil antes",
      "caption": "Mide cold, warm y hot start por separado."
    }
  },
  {
    "title": "Memoria e imágenes",
    "description": "Controla tamaño de bitmaps, cachés, listas y referencias que pueden provocar presión o terminación.",
    "section": "Calidad, performance y entrega",
    "family": "presupuesto de memoria",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "image decode + list window + caches",
      "nodes": [
        "bitmap|width×height×bytes",
        "list rows|mounted",
        "cache|bounded",
        "GC / native memory|monitor"
      ],
      "outcome": "uso acotado",
      "caption": "La memoria nativa de imágenes no siempre aparece igual que el heap JavaScript."
    }
  },
  {
    "title": "Logging, crashes y observabilidad",
    "description": "Conecta errores, breadcrumbs, versiones y métricas para reconstruir fallos reales.",
    "section": "Calidad, performance y entrega",
    "family": "traza móvil",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "event → logs → crash → release",
      "nodes": [
        "user action|breadcrumb",
        "network|request id",
        "exception|stack",
        "build|version",
        "dashboard|group"
      ],
      "outcome": "fallo reproducible",
      "caption": "Redacta datos personales y etiqueta plataforma, dispositivo y release."
    }
  },
  {
    "title": "Pruebas unitarias y de componentes",
    "description": "Verifican lógica y comportamiento de UI con mocks mínimos de APIs nativas.",
    "section": "Calidad, performance y entrega",
    "family": "ciclo de prueba",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "render → event → state → assertion",
      "nodes": [
        "component|render",
        "user|press/type",
        "React|update",
        "query|visible result"
      ],
      "outcome": "comportamiento protegido",
      "caption": "Prueba lo que el usuario observa y reserva mocks para fronteras realmente externas."
    }
  },
  {
    "title": "Pruebas end-to-end",
    "description": "Ejecutan la aplicación compilada y automatizan recorridos críticos sobre simuladores o dispositivos.",
    "section": "Calidad, performance y entrega",
    "family": "viaje completo",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "launch → login → report → confirmation",
      "nodes": [
        "build|app binary",
        "device|install",
        "automation|gestures",
        "backend|test env",
        "assert|screen"
      ],
      "outcome": "flujo real validado",
      "caption": "Las E2E son costosas; prioriza pocas rutas críticas y datos controlados."
    }
  },
  {
    "title": "Módulos nativos propios",
    "description": "Implementan capacidades no disponibles en JavaScript mediante specs, Codegen y código de plataforma.",
    "section": "Calidad, performance y entrega",
    "family": "frontera nativa",
    "layout": "feature",
    "scene": {
      "variant": "pipeline",
      "code": "TS spec → Codegen → Swift/Kotlin → JS",
      "nodes": [
        "spec|methods/events",
        "generated interface|bindings",
        "native impl|platform",
        "package|autolink"
      ],
      "outcome": "capacidad integrada",
      "caption": "El contrato debe manejar threading, errores, lifecycle y compatibilidad."
    }
  },
  {
    "title": "Componentes nativos propios",
    "description": "Exponen vistas de plataforma como componentes React con props, eventos y comandos tipados.",
    "section": "Calidad, performance y entrega",
    "family": "vista puenteada",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "NativeComponent spec → Fabric component",
      "nodes": [
        "props|typed",
        "events|native→JS",
        "shadow node|layout",
        "view|UIKit/Android"
      ],
      "outcome": "control nativo declarativo",
      "caption": "Úsalo cuando una vista web o composición de primitivas no cubre el requisito."
    }
  },
  {
    "title": "Expo y Community CLI",
    "description": "Representan flujos de proyecto distintos para acceder a servicios, builds y personalización nativa.",
    "section": "Calidad, performance y entrega",
    "family": "comparativa de toolchains",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "Expo workflow vs Community CLI",
      "nodes": [
        "Expo|servicios + config",
        "CLI|proyectos nativos directos",
        "prebuild|genera native",
        "modules|compatibilidad"
      ],
      "outcome": "elige por restricciones",
      "caption": "Ambos construyen React Native; la decisión depende de módulos, equipo y operación."
    }
  },
  {
    "title": "Configuración por entornos",
    "description": "Separa endpoints, flags y capacidades por build sin introducir secretos en JavaScript.",
    "section": "Calidad, performance y entrega",
    "family": "matriz de variantes",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "dev · staging · production",
      "nodes": [
        "bundle id",
        "API base URL",
        "feature flags",
        "signing"
      ],
      "outcome": "build identificable",
      "caption": "Las variables incluidas en el bundle son públicas para quien inspecciona la app."
    }
  },
  {
    "title": "Builds, signing y releases",
    "description": "Compila artefactos, aplica certificados o keystores y distribuye por canales de prueba y tiendas.",
    "section": "Calidad, performance y entrega",
    "family": "pipeline de release",
    "layout": "feature",
    "scene": {
      "variant": "pipeline",
      "code": "source → native build → sign → store",
      "nodes": [
        "JS + native|source",
        "Gradle / Xcode|compile",
        "signing|identity",
        "store|review",
        "users|rollout"
      ],
      "outcome": "versión distribuida",
      "caption": "Versiona código, build number, símbolos y artefactos para poder diagnosticar y revertir."
    }
  },
  {
    "title": "Actualizaciones OTA",
    "description": "Entrega cambios de JavaScript y assets compatibles sin reemplazar binarios nativos, según políticas de plataforma.",
    "section": "Calidad, performance y entrega",
    "family": "doble versión",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "binary runtime ↔ OTA bundle",
      "nodes": [
        "native binary|capabilities",
        "JS update|compatible runtime",
        "rollback|previous bundle",
        "store rules|policy"
      ],
      "outcome": "actualización segura",
      "caption": "Un bundle que requiere un módulo nativo nuevo necesita una versión de tienda."
    }
  },
  {
    "title": "CI/CD móvil",
    "description": "Automatiza lint, pruebas, builds, firma protegida, distribución y publicación.",
    "section": "Calidad, performance y entrega",
    "family": "cadena automatizada",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "commit → checks → build → test device → release",
      "nodes": [
        "source|commit",
        "CI|lint + tests",
        "secure runner|sign",
        "distribution|beta",
        "approval|store"
      ],
      "outcome": "release reproducible",
      "caption": "Credenciales, caches y artefactos deben administrarse como infraestructura sensible."
    }
  },
  {
    "title": "Actualizaciones de React Native",
    "description": "Planifican saltos de versión, cambios nativos, dependencias y pruebas sobre ambas plataformas.",
    "section": "Calidad, performance y entrega",
    "family": "ruta de migración",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "current → upgrade helper → native diffs → test",
      "nodes": [
        "release notes|breaking",
        "dependencies|compatibility",
        "iOS / Android|merge diffs",
        "regression suite|verify"
      ],
      "outcome": "upgrade controlado",
      "caption": "Actualizar con frecuencia reduce el tamaño de cada migración."
    }
  }
] satisfies readonly StudyConcept[];
