import { createStudyScene } from "@/data/atlasConceptFactory";
import type { AudioTrack } from "@/lib/audioNarrator";

type ConceptInput = {
  title: string;
  description: string;
  section: string;
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

function decapitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Obtiene la explicación informativa del resultado visual para un concepto.
 */
function getVisualExplanation(concept: ConceptInput): string {
  const bespoke = JAVASCRIPT_VISUAL_EXPLANATIONS[concept.title];
  if (bespoke) {
    return bespoke;
  }

  const family = concept.family ?? "concepto visual";
  const scene =
    concept.scene ??
    createStudyScene(concept.title, concept.description, concept.section);

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
  const visualExplanation = getVisualExplanation(concept);
  const text = `${concept.title}, familia ${family}. ${concept.description}. Resultado visual: ${visualExplanation}`;

  return {
    id: `${collectionId}-${index}-${concept.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: concept.title,
    subtitle: `Concepto ${String(index).padStart(2, "0")}`,
    family,
    section: concept.section,
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
