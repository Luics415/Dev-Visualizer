import { createStudyScene } from "@/data/atlasConceptFactory";
import type { AudioTrack } from "@/lib/audioNarrator";

type ConceptInput = {
  title: string;
  description: string;
  section?: string;
  family?: string;
  scene?: {
    variant?: string;
    code?: string;
    nodes?: readonly string[];
    outcome?: string;
    caption?: string;
  };
};

type PracticalModuleInput = {
  title: string;
  subtitle: string;
  visible: readonly string[];
  internal: readonly string[];
  result: string;
  note: string;
};

/**
 * Explicaciones informativas y descriptivas de las animaciones visuales para los 55 conceptos de JavaScript.
 * Cada una describe qué sucede en pantalla (variables, operaciones, transiciones de estado y resultados).
 */
const JAVASCRIPT_VISUAL_EXPLANATIONS: Record<string, string> = {
  // Fundamentos del lenguaje
  Variables:
    "en el caso de let score = 10, la variable conserva su referencia en memoria mientras la asignación posterior sustituye el valor de 10 a 20.",
  "Tipos primitivos":
    "en el caso de typeof value, la animación desglosa los tipos primitivos copiados por valor e identifica el caso histórico de null, confirmando los 7 tipos primitivos.",
  "typeof y detección de valores":
    "en el caso de Array.isArray(value), el flujo analiza el valor y aplica detectores específicos más allá de typeof para confirmar con precisión un array.",
  "Truthy y falsy":
    "en el caso de if (value), el evaluador aplica coerción booleana sobre ceros, cadenas vacías y colecciones para seleccionar la rama activa correspondiente.",
  "Coerción de tipos":
    'en el caso de Number("42"), la animación contrasta la conversión explícita frente a la coerción implícita de dos más dos en texto, asegurando una conversión numérica predecible.',
  "Igualdad estricta y flexible":
    "en el caso de comparar cero con false, el operador estricto devuelve false sin conversión mientras el flexible convierte tipos, demostrando por qué se prefiere el triple igual.",
  "Operadores y precedencia":
    "en el caso de 2 + 3 * 4, la secuencia evalúa primero la multiplicación de tres por cuatro dando doce, y luego suma dos para obtener 14 según la precedencia.",
  "Control de flujo":
    'en el caso de status === "ready" ? play() : wait() se ejecuta de ida y vuelta evaluando la condición para activar únicamente la ruta lista y descartar la alterna, concluyendo con una ruta ejecutada.',
  "Bucles e iteración":
    "en el caso de for (const champion of roster), el planificador recorre secuencialmente cada valor iterable extrayendo a los integrantes sin alterar sus índices.",

  // Funciones y contexto
  Funciones:
    "en el caso de sum(3, 5), la función recibe 3 y 5 por sus puertos de entrada, ejecuta la suma interna y emite 8 por el puerto de retorno.",
  "Parámetros por defecto":
    'en el caso de function greet(name = "Powder"), el parámetro asigna el valor por defecto solo cuando recibe undefined, conservando los argumentos reales recibidos.',
  "Rest parameters":
    "en el caso de function sum(...values), la firma agrupa dinámicamente los argumentos independientes en un verdadero array local de valores.",
  "Arrow functions":
    "en el caso de const run = () => this.speed, la función flecha captura el contexto léxico del ámbito exterior en lugar de crear su propio this.",
  Scope:
    "en la jerarquía de global, función y bloque, el ámbito interior puede leer hacia afuera variables como app, pero el acceso inverso queda bloqueado.",
  "Hoisting y TDZ":
    "en el caso de console.log(score) antes de let score, el identificador entra en zona temporal muerta y lanza un ReferenceError antes de su inicialización.",
  Closures:
    "en el caso de const increment = createCounter(), la función interna mantiene vivo el enlace a la variable count del entorno exterior, incrementándola a 1 y 2 en llamadas sucesivas.",
  "this, call, apply y bind":
    'en el caso de attack.call(jinx, "rocket"), el método vincula explícitamente a jinx como receptor inmediato garantizando que this apunte al objeto deseado.',

  // Estructuras de datos
  Objetos:
    "en el caso de user.age = 25, se actualiza la propiedad age de 24 a 25 en la memoria del objeto conservando intactas todas las demás claves.",
  "Acceso y propiedades computadas":
    "en el caso de champion[key], la animación evalúa dinámicamente el valor de la variable de la clave para resolver y devolver la propiedad solicitada.",
  "Desestructuración de objetos":
    'en el caso de const { name, role = "mid" } = champion, la desestructuración extrae directamente las claves requeridas y crea variables locales aplicando respaldos si faltan.',
  "Spread y copia superficial":
    "en el caso de const next = { ...user, level: 18 }, el operador expande las propiedades en un contenedor nuevo sobrescribiendo el nivel a 18 sin mutar el objeto original.",
  Arrays:
    "en el caso de numbers.push(40) y pop(), la cinta ordenada accede al índice 1, añade 40 al final de la colección y luego lo retira dinámicamente.",
  "Desestructuración de arrays":
    "en el caso de const [first, , third] = roster, la asignación posicional extrae el primer y tercer elemento omitiendo el segundo mediante un espacio vacío.",
  "Spread en arrays":
    "en el caso de const team = [...blue, ...red], el operador expande ambos iterables para combinarlos en un nuevo array consolidado sin mutar las fuentes.",

  // Transformaciones de colecciones
  map:
    "en el caso de [1, 2, 3].map(n => n * 2), cada elemento avanza por su propio carril multiplicándose por dos para producir el nuevo array [2, 4, 6] sin alterar el original.",
  filter:
    "en el caso de numbers.filter(n => n % 2 === 0), la compuerta de decisión evalúa cada elemento, dejando pasar únicamente los pares 2 y 4 y descartando los impares.",
  reduce:
    "en el caso de [1, 2, 3, 4].reduce((acc, n) => acc + n, 0), los valores orbitan hacia el acumulador central sumándose paso a paso hasta consolidar el resultado final de 10.",
  "find, some y every":
    "en el caso de find(), some() y every(), la animación evalúa los elementos aplicando cortocircuito para detener la búsqueda en cuanto se satisface la condición.",
  "Ordenamiento y métodos de copia":
    "en el caso de roster.sort() frente a toSorted(), se contrasta la mutación directa del array original contra la creación de una copia ordenada inmutable.",

  // Colecciones especializadas
  Set:
    "en el caso de new Set con elementos repetidos, la colección detecta y descarta el duplicado conservando únicamente dos valores únicos en orden de llegada.",
  Map:
    'en el caso de roles.set(jinx, "ADC"), la tabla asocia un objeto directamente como clave sin forzarlo a convertirse en string y preservando su valor.',
  "WeakMap y WeakSet":
    "en el caso de metadata.set(node, info), la referencia débil permite asociar datos a un nodo sin impedir que el recolector de basura lo libere al quedar huérfano.",
  Symbols:
    "en el caso de crear dos Symbol con la misma etiqueta, la animación confirma que cada símbolo genera un identificador único en memoria que nunca colisiona.",

  // Datos y representación
  JSON:
    "en el caso de JSON.stringify(order), el objeto se serializa en una cadena de texto interoperable para red o almacenamiento, reconstruyéndose luego con parse.",
  structuredClone:
    "en el caso de structuredClone(state), el algoritmo recorre el grafo de datos duplicando fechas y mapas anidados en un nuevo estado sin referencias compartidas.",

  // Objetos, clases y metaprogramación
  Prototipos:
    "en el caso de invocar attack en jinx, la búsqueda asciende por la cadena de prototipos hasta localizar el método compartido en Champion.prototype.",
  Clases:
    "en el caso de class Champion, el constructor inicializa la nueva instancia con su nombre propio mientras los métodos quedan centralizados en el prototipo compartido.",
  "Herencia y campos privados":
    "en el caso de class Marksman extends Champion, la subclase hereda la estructura de la base con super() y encapsula con seguridad el campo privado #ammo.",
  "Proxy y Reflect":
    "en el caso de new Proxy(target, { get }), la trampa intercepta la lectura de una propiedad, ejecuta la política de observación y delega la operación base a Reflect.",

  // Asincronía y runtime
  "Event Loop":
    "en la secuencia A, setTimeout B, Promise C y D, el Call Stack ejecuta A y D, luego atiende la microtarea de la promesa C, y finalmente la tarea del temporizador B, produciendo la salida ordenada A, D, C, B.",
  Promesas:
    "en el caso de fetchData().then().catch(), la máquina de estados inicia en espera y transita de forma definitiva hacia resuelta con resolve o rechazada con reject.",
  "Combinadores de promesas":
    "en el caso de los combinadores de promesas, se comparan las políticas de all para éxito total, allSettled para reporte completo, race para el más rápido y any para el primer cumplimiento.",
  "Async / Await":
    "en el caso de const data = await fetchData(), la ejecución de la función se suspende en el await mientras el hilo principal continúa respondiendo a eventos y renderizado hasta recibir la respuesta.",
  "Manejo de errores":
    "en el bloque try catch finally, la ejecución bifurca entre la ruta de éxito o captura de excepción en catch, pasando en ambos casos por finally para la limpieza de recursos.",
  "Cancelación con AbortController":
    "en el caso de controller.abort(), la señal viaja hacia las peticiones activas interrumpiendo la descarga obsoleta y liberando recursos sin procesar respuestas tardías.",

  // Módulos y carga
  "Módulos ES":
    "en el grafo de export e import, los módulos independientes envían sus funciones hacia la aplicación principal, combinando sus contratos de forma declarativa.",
  "Importación dinámica":
    'en el caso de await import("./arcane.js"), la aplicación solicita el módulo bajo demanda únicamente al activarse el evento, descargando y evaluando el fragmento necesario.',

  // Protocolos avanzados
  "Iteradores y protocolos iterable":
    "en el caso de iterator.next(), el protocolo solicita valores paso a paso recibiendo un objeto con el valor actual y la bandera done que indica el final de la secuencia.",
  Generadores:
    "en el caso de function* waves() con yield, la función suspende su marco de ejecución tras emitir cada valor y se reanuda limpiamente en la siguiente llamada a next().",
  "TypedArray y ArrayBuffer":
    "en el caso de new Uint8Array(buffer), múltiples vistas tipadas interpretan el mismo búfer binario continuo como enteros o flotantes sin copiar la memoria.",

  // Texto, tiempo e internacionalización
  "Expresiones regulares":
    "en el caso del patrón de expresión regular evaluado con test(name), el motor verifica la estructura del texto validando mayúsculas, minúsculas y banderas Unicode.",
  "Intl y formato local":
    "en el caso de new Intl.NumberFormat para moneda, el formateador transforma un número neutro en una cadena localizada con símbolo de moneda y separadores según la región.",
  "Date, zonas horarias y timestamps":
    "en el caso de new Date en formato ISO UTC, el mismo instante temporal se proyecta con precisión en la hora local correspondiente a la zona horaria del usuario.",

  // Memoria y recursos
  "Gestión explícita de recursos":
    "en el caso de using file = openFile(), el recurso externo se adquiere para el bloque de trabajo y se libera de forma garantizada y determinista al salir del ámbito.",
  "Memoria y garbage collection":
    "en el caso de la cadena de referencias desde la raíz, el recolector de basura conserva los objetos alcanzables y libera la memoria en cuanto se desvinculan los listeners y cachés.",
};

/**
 * Explicaciones informativas y didácticas para conceptos clave de interfaces, web y móvil.
 */
const INTERFACES_VISUAL_EXPLANATIONS: Record<string, string> = {
  // HTML y CSS
  "Anatomía del documento":
    "en el caso de <!doctype html>, el motor del navegador valida el DOCTYPE y separa en memoria los metadatos del head frente al árbol visual del body.",
  "HTML semántico":
    "en el caso de header, nav, main y article, el navegador proyecta una estructura con significado explícito para motores de búsqueda y tecnologías de asistencia.",
  "Encabezados y texto":
    "en la jerarquía de h1 a p, la animación ordena los niveles de importancia estructural guiando la lectura lógica del documento.",
  "Enlaces y navegación":
    "en el caso de a href hacia champions/jinx, el enlace asocia la intención de navegación conectando la ruta destino sin recargar innecesariamente la aplicación.",
  "Imágenes responsivas":
    "en el caso de picture con source avif y webp, el navegador evalúa el ancho del viewport descargando la variante óptima y reservando el espacio con aspect ratio.",
  Formularios:
    "en el caso de form method POST, los controles con name serializan sus valores en un paquete de datos listo para su procesamiento en el servidor.",
  "Validación nativa":
    "en el caso de required y pattern, el navegador intercepta la entrada inválida bloqueando el envío antes de alcanzar la red.",
  DOM:
    "en el flujo de bytes a tokens, el parser construye el árbol de nodos vivos en memoria que scripts y hojas de estilo consultan y modifican.",
  Cascade:
    "en la evaluación de origin, importance, layers y specificity, el motor resuelve el valor computado final propiedad por propiedad.",
  "Box model":
    "en el caso de box-sizing border-box, el ancho declarado encapsula el contenido, padding y borde, manteniendo el margen en el exterior.",
  Flexbox:
    "en el caso de display flex con gap y flex 1, los elementos calculan su tamaño sobre el eje principal y distribuyen el espacio libre de forma elástica.",
  "CSS Grid":
    "en el caso de grid-template-columns repeat(3, 1fr), la cuadrícula bidimensional alinea elementos en filas y columnas simultáneas.",
  "Responsive design":
    "en el paso de 360 a 1280 píxeles, la interfaz reconfigura su composición pasando de una columna a una cuadrícula con barra lateral.",
  "Media queries":
    "en el caso de media width >= 48rem y prefers-reduced-motion, las reglas se activan según las capacidades y preferencias del usuario.",
  "Container queries":
    "en el caso de container card width > 32rem, la tarjeta adapta su propio diseño según el tamaño de su contenedor sin depender del viewport global.",
  "Custom properties":
    "en el caso de var(--accent), la variable CSS participa en la cascade propagando tokens de diseño y temas dinámicos en tiempo de ejecución.",

  // React
  Componentes:
    "en el caso de function ChampionCard, la función retorna la descripción declarativa de la interfaz que React transforma en elementos de pantalla.",
  JSX:
    "en el caso de JSX compilado a jsxDEV, la sintaxis declarativa se transforma en llamadas a objetos que describen el árbol de render.",
  Props:
    "en el paso de datos del padre al hijo, las propiedades viajan de forma inmutable garantizando un flujo unidireccional y predecible.",
  Estado:
    "en el caso de const [count, setCount] = useState(0), la llamada a setCount encola un nuevo valor y solicita la re-ejecución del componente con un snapshot actualizado.",
  Eventos:
    "en el caso de onClick, React envuelve el evento nativo del navegador en un SyntheticEvent garantizando coherencia entre plataformas y delegación eficiente.",
  useEffect:
    "en el caso de useEffect con array de dependencias, la sincronización se ejecuta después del commit al DOM y ejecuta su función de limpieza antes de la siguiente corrida.",
  useMemo:
    "en el caso de useMemo, el cálculo costoso se memoriza y solo se recalcula cuando cambian sus dependencias declaradas.",
  useCallback:
    "en el caso de useCallback, la referencia de la función se conserva estable entre renders evitando re-renderizados innecesarios en componentes hijos optimizados.",
  Refs:
    "en el caso de useRef, el contenedor mutable conserva su referencia a través de múltiples renders sin disparar una nueva actualización de la vista.",
  Context:
    "en el caso de createContext y useContext, los datos se propagan verticalmente a través del árbol de componentes sin necesidad de pasar props manualmente por cada nivel.",
  "Custom Hooks":
    "en el caso de useChampionFilter, la lógica de estado y efectos se encapsula en una función reutilizable que comparte comportamiento sin duplicar código.",
  "Ciclo de render":
    "en la secuencia de render, reconciliación y commit, React calcula las diferencias en el Virtual DOM y aplica únicamente los cambios necesarios al DOM real.",

  // React Native
  "Renderizado nativo":
    "en la arquitectura nativa, los componentes de React se comunican con los widgets nativos del sistema operativo a través del hilo de renderizado.",
  "Componentes base":
    "en el caso de View, Text e Image, los elementos declarativos se proyectan directamente en sus equivalentes nativos de iOS y Android.",
  StyleSheet:
    "en el caso de StyleSheet.create, los estilos se validan y envían al motor de layout Yoga optimizando el cálculo de geometría sin sobrecarga de CSS web.",
  "Flexbox nativo":
    "en el motor Yoga, Flexbox orienta la dirección de columna por defecto calculando anchos y altos adaptados a la densidad de píxeles del dispositivo.",
  TextInput:
    "en el caso de TextInput nativo, las pulsaciones del teclado virtual interactúan directamente con el componente del sistema operativo sincronizando el texto.",
  Pressable:
    "en el caso de Pressable con onPress, el componente detecta gestos táctiles proporcionando estados visuales inmediatos de pulsación y soltado.",
  "ScrollView y FlatList":
    "en el caso de FlatList, la lista virtualiza los elementos en pantalla reciclando memoria y renderizando solo los nodos visibles durante el scroll.",
  Navegación:
    "en el stack de navegación, las transiciones entre pantallas aprovechan las animaciones y gestos nativos de navegación de cada plataforma.",
  "Safe Area y teclado":
    "en la gestión de safe area, el contenedor ajusta sus márgenes automáticamente respetando el notch, la barra de inicio y el teclado en pantalla.",

  // UX/UI
  "Problema y outcome":
    "en la definición del outcome, el objetivo separa la necesidad real de la persona usuaria de las soluciones técnicas iniciales.",
  "User flow":
    "en el diagrama de flujo, las decisiones, estados y bifurcaciones se conectan asegurando una ruta clara y reversible para cada tarea.",
  "Tokens de diseño":
    "en el catálogo de tokens, variables de color, tipografía y espaciado sincronizan las decisiones de diseño con el código de producción.",
  POUR:
    "en los principios WCAG, la interfaz se audita para garantizar que sea perceptible, operable, comprensible y robusta ante cualquier capacidad humana.",
  "Teclado y foco":
    "en el recorrido con tecla Tab, los elementos interactivos muestran un foco visible y un orden secuencial coherente sin trampas de teclado.",
  "Ley de Fitts y zonas de toque":
    "en la distribución táctil, los botones primarios se ubican dentro de la zona ergonómica del pulgar con tamaños mínimos de toque.",
  "Heurísticas de Nielsen":
    "en la evaluación heurística, la interfaz visibiliza el estado actual del sistema y provee libertad de control y salida de emergencia.",

  // Bootstrap
  "Containers y sistema de rejilla (Grid)":
    "en el grid de 12 columnas, los contenedores fluidos distribuyen el espacio entre filas y columnas adaptando el layout al ancho disponible.",
  "Breakpoints responsive":
    "en los puntos de quiebre sm, md, lg y xl, las clases de utilidad reorganizan los bloques según las dimensiones del viewport.",
  "Flexbox y utilidades de alineación":
    "en las utilidades d-flex y justify-content-between, los elementos se alinean y distribuyen sin escribir reglas CSS adicionales.",
  "Sistema de espaciado (Margin y Padding)":
    "en las clases de espaciado con escala de 1 a 5, los márgenes y rellenos conservan un ritmo visual uniforme en toda la página.",
  "Modales y ventanas emergentes":
    "en el componente Modal, la ventana modal aparece con backdrop interactivo, gestión de foco accesible y cierre mediante Escape.",

  // AngularJS
  "Scopes y prototipos":
    "en el árbol de scopes, los scopes hijos heredan propiedades del padre mediante la cadena de prototipos de JavaScript.",
  "Digest cycle":
    "en el ciclo digest, el motor evalúa iterativamente los watchers hasta que ningún modelo cambie o se alcance el límite de iteraciones.",
  Watchers:
    "en el registro de watchers, cada expresión $watch almacena su valor anterior y nuevo comparándolos en cada ciclo de dirty checking.",
  "Dependency injection":
    "en el inyector de dependencias, los servicios y fábricas se resuelven por nombre inyectando instancias singleton configuradas.",
  "Directivas y componentes":
    "en la compilación de directivas, la fase compile transforma la plantilla y la fase link asocia el scope y los manejadores de eventos.",

  // Angular
  "Standalone components":
    "en los componentes Standalone, el decorador importa directamente sus dependencias eliminando la necesidad de módulos intermedios.",
  Signals:
    "en el modelo de signals, una señal almacena un valor reactivo y notifica de forma precisa y quirúrgica a sus consumidores cuando sufre mutaciones.",
  Computed:
    "en una señal computed, el valor se deriva de forma perezosa memorizando el resultado hasta que alguna de sus señales de entrada cambie.",
  Effects:
    "en un effect reactivo, la función se suscribe a las señales leídas ejecutando efectos secundarios de forma sincronizada con el ciclo de vida.",

  // Qwik
  "Component$":
    "en el componente con símbolo de dólar, el optimizador divide el código en fragmentos independientes descargables bajo demanda al interactuar.",
  QRL:
    "en el QRL, el puntero serializable referencia la función y su ámbito permitiendo al navegador descargarla y ejecutarla sin hidratación global.",
  Resumibilidad:
    "en la resumibilidad, la aplicación continúa su ejecución en el navegador exactamente en el estado que dejó el servidor al renderizar el HTML.",

  // Flutter
  "UI declarativa como función del estado":
    "en la fórmula de Flutter, la interfaz visual es el resultado determinista del estado actual de datos recalculado reactivamente.",
  "StatelessWidget e inmutabilidad estricta":
    "en el StatelessWidget, el widget representa una configuración inmutable que no preserva estado interno entre reconstrucciones.",
  "StatefulWidget y objeto State persistente":
    "en el StatefulWidget, el objeto State sobrevive a las reconstrucciones del widget conservando datos y animaciones en memoria.",
  "El Árbol Tripartito: Widget, Element y RenderObject":
    "en la jerarquía tripartita, el Widget define la configuración, el Element mantiene la identidad y el RenderObject calcula la geometría y pinta.",
  "Aislamiento de pintura con RepaintBoundary":
    "en el RepaintBoundary, el sub-árbol se aísla en su propia textura de composición en GPU evitando repintados innecesarios en widgets vecinos.",
  "Motor Gráfico Impeller & Shaders AOT":
    "en el motor Impeller, los shaders se compilan por adelantado en el build eliminando tirones y logrando 120 fotogramas por segundo fluidos.",
};

/**
 * Colecciones con audio narraciones didácticas activas.
 * PR 1: Interfaces, Web y Móvil (9 colecciones + javascript base).
 */
export const AUDIO_ENABLED_COLLECTIONS = new Set<string>([
  "javascript",
  "html-css",
  "react",
  "react-native",
  "ux-ui",
  "bootstrap",
  "angularjs",
  "angular",
  "qwik",
  "flutter",
]);

export function isCollectionAudioEnabled(collectionId: string): boolean {
  return AUDIO_ENABLED_COLLECTIONS.has(collectionId);
}

function decapitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Obtiene la explicación informativa del resultado visual para un concepto.
 */
function getVisualExplanation(concept: ConceptInput): string {
  const bespoke =
    JAVASCRIPT_VISUAL_EXPLANATIONS[concept.title] ??
    INTERFACES_VISUAL_EXPLANATIONS[concept.title];
  if (bespoke) {
    return bespoke;
  }

  const family = concept.family ?? "concepto visual";
  const scene =
    concept.scene ??
    createStudyScene(concept.title, concept.description, concept.section ?? "General");

  const codePart = scene.code ? `en el caso de ${scene.code} ` : "";
  const captionPart = scene.caption ? `, donde ${decapitalize(scene.caption)}` : "";
  const outcomePart = scene.outcome ? ` concluyendo con ${scene.outcome}` : "";

  return `${codePart}se ejecuta una animación de ${family}${captionPart}${outcomePart}.`;
}

/**
 * Genera la pista de audio didáctica según la Opción B enriquecida:
 * [Título], familia [Familia]. [Descripción]. Resultado visual: [Explicación informativa de la animación].
 */
export function buildConceptAudioTrack(
  collectionId: string,
  concept: ConceptInput,
  index: number
): AudioTrack {
  const family = concept.family ?? "concepto visual";
  const section = concept.section ?? "General";
  const visualExplanation = getVisualExplanation(concept);
  const text = `${concept.title}, familia ${family}. ${concept.description}. Resultado visual: ${visualExplanation}`;

  return {
    id: `${collectionId}-${index}-${concept.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: concept.title,
    subtitle: `Concepto ${String(index).padStart(2, "0")}`,
    family,
    section,
    text,
  };
}

/**
 * Genera la pista de audio didáctica para una etapa del caso práctico integrado:
 * Etapa [X]: [Título]. [Subtítulo]. Lo que percibe el usuario: [...]. Lo que sucede internamente: [...]. Resultado visual: [...].
 */
export function buildPracticalModuleAudioTrack(
  collectionId: string,
  module: PracticalModuleInput,
  index: number
): AudioTrack {
  const visibleText = module.visible.join(", ");
  const internalText = module.internal.join(", ");
  const text = `Etapa ${index}: ${module.title}. ${module.subtitle}. Lo que percibe el usuario: ${visibleText}. Lo que sucede internamente: ${internalText}. Resultado visual: ${module.result}, donde ${decapitalize(module.note)}`;

  return {
    id: `${collectionId}-practical-${index}-${module.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: module.title,
    subtitle: `Etapa ${String(index).padStart(2, "0")} · ${module.subtitle}`,
    family: "Caso práctico integrado",
    section: "Profundización didáctica",
    text,
  };
}

type PracticalPresentationInput = {
  title: string;
  subtitle: string;
  family: string;
  section?: string;
  stagesExplanation: string;
  visualOutcome: string;
};

/**
 * Genera la pista de audio explicativa para la presentación interactiva integrada de "en acción".
 * [Título]: [Subtítulo], familia [Familia]. [Explicación de etapas animadas]. Resultado visual: [Resultado visual].
 */
export function buildPracticalPresentationAudioTrack(
  collectionId: string,
  config: PracticalPresentationInput
): AudioTrack {
  const text = `${config.title}: ${config.subtitle}, familia ${config.family}. ${config.stagesExplanation} Resultado visual: ${config.visualOutcome}`;

  return {
    id: `${collectionId}-presentation`,
    title: config.title,
    subtitle: config.subtitle,
    family: config.family,
    section: config.section ?? "Presentación interactiva",
    text,
  };
}

/**
 * Pista de audio para la presentación interactiva del caso práctico integrado ("en acción").
 */
export function getActionPresentationTrack(
  collectionId: string,
  practical?: {
    title?: string;
    subtitle?: string;
    eyebrow?: string;
    description?: string;
    steps?: readonly { title: string; subtitle: string; result: string; note: string }[];
  }
): AudioTrack {
  switch (collectionId) {
    case "javascript":
      return buildPracticalPresentationAudioTrack("javascript", {
        title: "JavaScript en acción",
        subtitle: "Flujo integrado de una compra",
        family: "flujo general coordinado",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un clic del usuario desencadena el ciclo de vida completo del dato a través de seis etapas animadas. Primero, en Evento, el clic en el botón Agregar activa el handler onClick. Segundo, en Estado, el array del carrito se actualiza inmutablemente mediante spread incorporando el teclado junto al monitor. Tercero, en Transformación, el pipeline ejecuta filter para validar stock, map para calcular precio por cantidad y reduce para consolidar el subtotal de $225. Cuarto, en Red, una petición POST envía el subtotal a la API y recibe un cupón de descuento de $25. Quinto, en Asincronía, la función se suspende en el await sin bloquear el hilo principal, permitiendo que la interfaz siga respondiendo a eventos y animaciones. Y sexto, en Render, el estado recalcula el total final en $200 y actualiza reactivamente el recibo en pantalla.",
        visualOutcome:
          "la animación ilumina secuencialmente cada una de las seis etapas sincronizadas, demostrando cómo JavaScript procesa eventos, transforma datos en memoria y coordina la red de forma asíncrona sin congelar la experiencia del usuario.",
      });

    case "html-css":
      return buildPracticalPresentationAudioTrack("html-css", {
        title: "HTML y CSS en acción",
        subtitle: "Del código fuente a la pantalla: Champion card de Jinx",
        family: "pipeline del motor del navegador",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, el código fuente de una tarjeta de campeón de Jinx recorre las ocho etapas del pipeline del motor del navegador. Primero, en Source, el marcado index.html y styles.css proveen la estructura semántica y reglas visuales. Segundo, en Parser, el navegador tokeniza los caracteres construyendo el árbol DOM y el CSSOM en paralelo. Tercero, en Cascade, el motor resuelve especificidad, herencia y variables CSS calculando valores computados. Cuarto, en Layout, se calculan las cajas geométricas y coordenadas exactas en píxeles. Quinto, en Paint, se genera la lista de comandos de dibujo vectorial en el DisplayList. Sexto, en Composite, las capas aceleradas por hardware se envían a la GPU para su composición final. Séptimo, en Responsive, las consultas de contenedor y media queries reconfiguran la distribución según el espacio. Y octavo, en Accesibilidad, el árbol paralelo AOM expone roles, estados y nombres accesibles a tecnologías de asistencia.",
        visualOutcome:
          "la animación traza el flujo de bytes desde los editores de código hasta el renderizado final de la tarjeta de Jinx, mostrando en tiempo real cómo interactúan el DOM, el CSSOM, la cascade y las capas de GPU para producir una interfaz responsiva y accesible.",
      });

    case "react":
      return buildPracticalPresentationAudioTrack("react", {
        title: "React en acción",
        subtitle: "Caso integrado ampliado: Búsqueda reactiva de Jinx",
        family: "reconciliación y ciclo de vida declarativo",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, la búsqueda de Jinx recorre seis fases continuas del ciclo de vida declarativo de React. Primero, en Evento, la pulsación en el input emite el evento onChange disparando el gestor handleChange. Segundo, en Estado en cola, la función setQuery encola una actualización inmutable que solicita un nuevo render. Tercero, en Render, la función del componente se ejecuta de nuevo generando un nuevo snapshot del Virtual DOM con los campeones filtrados. Cuarto, en Reconciliación, el motor compara el árbol anterior con el nuevo árbol calculando el diff exacto de nodos afectados. Quinto, en Efecto asíncrono, useEffect sincroniza la consulta con la API externa cancelando peticiones previas sin bloquear la interfaz. Y sexto, en Commit al DOM, React aplica de forma atómica y quirúrgica únicamente las mutaciones mínimas al DOM real.",
        visualOutcome:
          "la animación ilustra la sincronización continua entre el input de búsqueda, las colas de estado, la comparación de árboles virtuales y la actualización atómica del DOM sin saltos de render.",
      });

    case "react-native":
      return buildPracticalPresentationAudioTrack("react-native", {
        title: "React Native en acción",
        subtitle: "Caso integrado ampliado: Reporte fotográfico y hardware móvil",
        family: "frontera móvil, sistema y APIs nativas",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un reporte de campo con foto atraviesa seis fronteras entre JavaScript, la plataforma nativa y la red. Primero, en Pulsación nativa, el toque del usuario en la pantalla táctil viaja desde el sistema operativo iOS o Android hacia el hilo de JavaScript como un evento semántico onPress. Segundo, en Estado y render, React calcula el formulario y prepara el despacho de la acción. Tercero, en Permiso del sistema, el motor consulta las políticas de privacidad del dispositivo solicitando acceso seguro a la cámara. Cuarto, en Cámara y hardware, el módulo nativo toma la captura fotográfica y devuelve un URI local en el almacenamiento del dispositivo. Quinto, en Petición HTTP, la API de red emite la carga multipart en segundo plano con reintentos idempotentes. Y sexto, en Navegación y confirmación, el stack de navegación móvil transiciona fluidamente a la pantalla del recibo con feedback háptico.",
        visualOutcome:
          "la animación visualiza el paso de mensajes a través del puente nativo de la arquitectura móvil, coordinando hilos de UI, procesos del sistema y respuestas de red sin perder la fluidez de 60 cuadros por segundo.",
      });

    case "ux-ui":
      return buildPracticalPresentationAudioTrack("ux-ui", {
        title: practical?.title ?? "UX/UI en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado: Reparación accesible y validada",
        family: "diseño de interacción y arquitectura de información",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, el rediseño de un flujo de solicitud de reparación transforma una experiencia confusa en un recorrido inclusivo y medible a través de seis etapas clave. Primero, en Research y definición, se identifica el outcome real separando la necesidad de reportar un fallo de la imposición de jerga técnica. Segundo, en Arquitectura de información, se estructura un flujo progresivo que conserva el contexto y el progreso guardado. Tercero, en Prototipado accesible, se aplican tokens de diseño, contraste conforme a WCAG y etiquetas semánticas desde el primer wireframe. Cuarto, en Detección con teclado, una prueba con tecla Tab revela una trampa de foco crítica en un modal de diagnóstico. Quinto, en Corrección y recuperación, se implementa una trampa de foco accesible con inert y retorno al disparador original. Y sexto, en Medición y validación con usuarios, se confirma un 92% de éxito en tareas y cero barreras para tecnologías de asistencia.",
        visualOutcome:
          "la animación recorre el blueprint de interacción evidenciando cómo la investigación de usuarios, el orden de foco y las heurísticas de usabilidad garantizan un producto digital universalmente operable.",
      });

    case "bootstrap":
      return buildPracticalPresentationAudioTrack("bootstrap", {
        title: practical?.title ?? "Bootstrap en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado: Consola responsive y accesible con tokens propios",
        family: "grid, utilidades y componentes adaptables",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, se construye una consola de monitoreo operativa combinando el grid de doce columnas, variables Sass y componentes interactivos de Bootstrap 5.3. Primero, en Inventario y jerarquía, se define la estructura de navegación, resumen y tabla de datos. Segundo, en Tokens y Sass, se personalizan colores primarios, espaciados y radios de borde mediante variables CSS y mapas Sass sin overrides destructivos. Tercero, en Mobile-First, el grid adapta el diseño desde una sola columna en pantallas táctiles de 390 píxeles hasta múltiples paneles en monitores de escritorio. Cuarto, en Formulario y filtros, se agrupan controles accesibles con validación visual inmediata. Quinto, en Detección de overflow, una tabla ancha desborda el viewport horizontal en móvil. Sexto, en Corrección con table-responsive, se encapsula la tabla en su propio contenedor de desplazamiento manteniendo el viewport global intacto. Y séptimo, en Componentes dinámicos, el modal se instancia mediante la API modular con gestión de foco accesible.",
        visualOutcome:
          "la animación demuestra cómo los breakpoints responsivos, el sistema de utilidades y la encapsulación de tablas mantienen la consola perfectamente legible y operable en cualquier resolución de pantalla.",
      });

    case "angularjs":
      return buildPracticalPresentationAudioTrack("angularjs", {
        title: practical?.title ?? "AngularJS en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado: Diagnóstico de digest y frontera de migración",
        family: "digest cycle y patrón strangler",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un panel de gestión heredado en AngularJS 1.x es auditado, estabilizado y preparado para su migración gradual. Primero, en Reproducción del síntoma, la navegación repetida entre vistas acumula peticiones duplicadas y ralentiza el scroll. Segundo, en Perfilado del digest, se detectan más de dos mil watchers activos y ciclos digest que superan los 120 milisegundos. Tercero, en Detección de fuga, se descubre un listener en rootScope que no se desuscribe al destruir el controlador. Cuarto, en Limpieza de ciclo de vida, se asocia la desuscripción al evento destroy liberando memoria y temporizadores. Quinto, en Optimización de watchers, se aplica enlace unidireccional y track by en listas reduciendo los observadores drásticamente. Sexto, en Encapsulación de componente, se aíslan scopes con bindings explícitos de entrada y salida. Y séptimo, en Frontera Strangler, la ruta modernizada se conecta a la aplicación mediante adaptadores permitiendo el retiro paulatino del código legado sin interrumpir la operación.",
        visualOutcome:
          "la animación representa el reloj del ciclo digest reduciendo su tiempo de 120 a 8 milisegundos y desvinculando listeners huérfanos para dar paso a una arquitectura desacoplada y migrable.",
      });

    case "angular":
      return buildPracticalPresentationAudioTrack("angular", {
        title: practical?.title ?? "Angular en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado: Panel reactivo con Signals e inyector jerárquico",
        family: "reactividad basada en señales y componentes standalone",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un flujo de gestión de reparaciones se orquesta mediante componentes Standalone, Signals reactivas e inyección de dependencias moderna. Primero, en Composición de formulario, FormGroup vincula controles y validadores garantizando un contrato de entrada tipado. Segundo, en Derivación con Signals, los valores computados recalculan subtotales y presupuestos automáticamente al mutar las señales de origen. Tercero, en Detección de ciclo, un effect erróneo intenta escribir sobre su propia señal dependiente bloqueando la detección de cambios. Cuarto, en Corrección reactiva, la mutación circular se transforma en un computed puro restaurando el flujo unidireccional del grafo de reactividad. Quinto, en Inyección y servicios, un servicio centralizado coordina el transporte HTTP con interceptores tipados. Y sexto, en Envío y navegación, la confirmación se procesa de forma segura navegando a la vista de éxito con accesibilidad y estado sincronizados.",
        visualOutcome:
          "la animación ilustra el grafo de señales de Angular propagando cambios de forma quirúrgica hacia los nodos del template, eliminando comprobaciones de cambio innecesarias y asegurando un renderizado ultra eficiente.",
      });

    case "qwik":
      return buildPracticalPresentationAudioTrack("qwik", {
        title: practical?.title ?? "Qwik en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado: Resumibilidad y activación bajo demanda con QRL",
        family: "resumibilidad y carga quirúrgica de código",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una ficha interactiva de producto demuestra la filosofía de resumibilidad sin hidratación global de Qwik. Primero, en Renderizado de servidor, el servidor emite HTML completo junto con el grafo de estado serializado y punteros QRL para cada manejador de eventos. Segundo, en Activación bajo demanda, la página aparece instantáneamente interactiva con cero JavaScript de arranque; al pulsar un botón de compra, el navegador descarga únicamente el micro-chunk de 3 kilobytes correspondiente al listener específico. Tercero, en Detección de error de frontera, se detecta un intento de serializar un objeto WebSocket no serializable en useStore. Cuarto, en Recuperación de estado, se separa el descriptor de URL serializable del recurso de red vivo, el cual se inicializa en una tarea en cliente. Y quinto, en Medición de rendimiento, se confirma una métrica INP óptima y un tiempo de reanudación inferior a 20 milisegundos.",
        visualOutcome:
          "la animación visualiza el salto directo desde el HTML renderizado en servidor hacia la reanudación del listener en cliente mediante símbolos QRL, evitando el pesado proceso tradicional de rehidratación en el navegador.",
      });

    case "flutter":
      return buildPracticalPresentationAudioTrack("flutter", {
        title: practical?.title ?? "Flutter en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado: Telemetría vectorial a 120 FPS con motor Impeller",
        family: "pipeline gráfico tripartito y renderizado GPU autónomo",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una consola de telemetría de alta frecuencia demuestra el pipeline gráfico autónomo de Flutter. Primero, en el Árbol Tripartito, los Widgets declaran la configuración inmutable, los Elements administran la identidad y el ciclo de vida en memoria, y los RenderObjects calculan las geometrías y emiten primitivas de dibujo. Segundo, en el Frame Pipeline, se sincroniza el ciclo continuo de build, layout y paint a 120 hercios con el hardware de la pantalla. Tercero, en Aislamiento de capas, un RepaintBoundary confina la gráfica del osciloscopio en su propia textura de composición en GPU evitando que las oscilaciones invaliden los widgets circundantes. Cuarto, en Detección de sobrecosto, un setState inexperto intenta reconstruir la pantalla entera provocando caída de cuadros. Quinto, en Despacho reactivo, el patrón BLoC con streams filtra y restringe las actualizaciones exclusivamente a la gráfica vectorial. Y sexto, en Motor Impeller, los comandos DisplayList se envían a la GPU mediante Vulkan o Metal con shaders precompilados AOT, logrando una animación fluida sin shader jank.",
        visualOutcome:
          "la animación exhibe la canalización de órdenes desde el árbol de widgets hacia la GPU, destacando la capa aislada de RepaintBoundary y el renderizado suave a 120 cuadros por segundo impulsado por el motor Impeller.",
      });

    default: {
      const title = practical?.title ?? `${collectionId} en acción`;
      const subtitle = practical?.subtitle ?? practical?.eyebrow ?? "Presentación interactiva";
      const family = "caso práctico integrado";
      const steps = practical?.steps ?? [];
      const stepsSummary =
        steps.length > 0
          ? steps.map((s, i) => `Etapa ${i + 1}, ${s.title}: ${s.subtitle}.`).join(" ")
          : practical?.description ?? "Flujo interactivo paso a paso.";
      return buildPracticalPresentationAudioTrack(collectionId, {
        title,
        subtitle,
        family,
        section: "Presentación interactiva",
        stagesExplanation: `En esta presentación interactiva se recorren las etapas del flujo: ${stepsSummary}`,
        visualOutcome: `la animación coordina las transiciones visuales demostrando la arquitectura integrada de ${title}.`,
      });
    }
  }
}


