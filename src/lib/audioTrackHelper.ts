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
 * Explicaciones informativas y didácticas para conceptos clave de plataformas y servidores.
 */
const PLATFORMS_VISUAL_EXPLANATIONS: Record<string, string> = {
  // Backend
  "Qué hace un backend":
    "en el caso de request a rules y response, el servidor recibe la solicitud, comprueba invariantes de negocio y emite un contrato seguro sin confiar en el cliente.",
  "Cliente y servidor":
    "en la separación de responsabilidades, la animación contrasta el dispositivo emisor frente a la autoridad central que posee los datos y la lógica.",
  "Protocolo HTTP":
    "en la trama HTTP, el flujo visualiza cabeceras, códigos de estado y cuerpo de respuesta sincronizando la comunicación sobre conexiones TCP o TLS seguras.",
  Middleware:
    "en la cadena de middleware, la petición atraviesa capas secuenciales de logging, autenticación y rate limiting antes de alcanzar el controlador.",
  "Inyección de dependencias":
    "en el contenedor de dependencias, las interfaces se resuelven en instancias desacopladas facilitando pruebas aisladas y sustitución de adaptadores.",
  "Patrón Repository":
    "en el repositorio de datos, la capa de dominio solicita entidades mediante métodos limpios abstrayendo si provienen de base de datos o memoria.",
  "Transacciones y ACID":
    "en el bloque transaccional, todas las operaciones de base de datos se confirman en conjunto con commit o se deshacen limpiamente con rollback ante cualquier error.",
  "Caché distribuida":
    "en la lectura con Redis o Memcached, el backend atiende solicitudes frecuentes directamente en memoria reduciendo la carga y latencia de la base de datos.",
  "Colas y workers":
    "en el encolado de mensajes, el proceso principal libera la respuesta al cliente inmediatamente mientras workers en segundo plano ejecutan el trabajo pesado.",
  "Idempotencia y deduplicación":
    "en el ledger con clave de idempotencia, peticiones repetidas por fallos de red devuelven el resultado almacenado sin duplicar transacciones ni cargos.",
  "Circuit breaker y resiliencia":
    "en la máquina de estados del circuit breaker, fallos sucesivos en un servicio externo abren el circuito protegiendo el sistema general contra caídas en cascada.",
  "Observabilidad y métricas":
    "en la telemetría distribuida, trazas, métricas p95 y logs estructurados correlacionan cada solicitud a través de múltiples microservicios.",

  // APIs
  "REST y recursos":
    "en el diseño REST, los endpoints se modelan como sustantivos y recursos con representaciones JSON y URI predecibles.",
  "Verbos y semántica HTTP":
    "en los métodos GET, POST, PUT, PATCH y DELETE, el flujo asocia cada verbo con su semántica idempotente o de creación de recursos.",
  "GraphQL y esquemas":
    "en la consulta GraphQL tipada, el cliente solicita en un único viaje exactamente los campos necesarios eliminando sobrecarga de red.",
  "gRPC y Protocol Buffers":
    "en la conexión gRPC, los mensajes binarios serializados con Protobuf se transmiten por HTTP/2 con mínima latencia y validación estricta de contratos.",
  "WebSockets y tiempo real":
    "en el handshake WebSocket, la conexión TCP bidireccional permanente transmite eventos en ambos sentidos con cero latencia de sondeo.",
  "Webhooks y firmas HMAC":
    "en el webhook saliente, el payload se firma con secreto criptográfico HMAC permitiendo al receptor autenticar la procedencia del evento.",

  // Node.js
  "Event loop y fases":
    "en las fases del Event Loop, timers, I/O callbacks, poll, check y microtareas de Promise se procesan ordenadamente sin bloquear el hilo de ejecución.",
  "Streams y piping":
    "en el flujo de streams con pipe, fragmentos de datos continuos viajan del origen al destino procesándose con memoria constante.",
  "Buffers y datos binarios":
    "en la memoria fuera de V8, Buffer asigna bloques contiguos de bytes para procesar sockets de red y archivos de disco a máxima velocidad.",
  "Cluster y Worker Threads":
    "en el escalado multiproceso, Worker Threads distribuyen cálculos intensivos en hilos paralelos mientras Cluster clona el proceso en cada CPU disponible.",
  "Señales del sistema y graceful shutdown":
    "en la señal SIGTERM, el servidor deja de aceptar conexiones nuevas, drena las activas y libera sockets antes de terminar de forma controlada.",

  // Laravel
  "Contenedor de servicios":
    "en el Service Container de Laravel, la inyección automática por reflexión resuelve dependencias tipadas en controladores y comandos.",
  "Eloquent ORM y relaciones":
    "en las relaciones de Eloquent, llamadas fluidas traducen consultas con eager loading evitando el cuello de botella de consultas N+1.",
  "Migrations y rollback":
    "en el versionado de base de datos, las migraciones aplican esquemas reproducibles y permiten regresar al estado anterior con rollback seguro.",
  "Políticas de autorización (Policies)":
    "en la evaluación de Policies, el método can intercepta la acción comprobando si el usuario autenticado tiene permisos específicos sobre el modelo.",

  // n8n
  "Nodos y flujo de ejecución":
    "en el lienzo de n8n, datos estructurados en matrices JSON fluyen nodo a nodo transformándose y enriqueciéndose visualmente.",
  "Gestión segura de credenciales":
    "en el almacén encriptado de credenciales, las claves de API y OAuth se autentican en tiempo de ejecución sin exponer secretos en los nodos.",
  "Nodos condicionales y conmutadores":
    "en el nodo If y Switch, las expresiones evalúan propiedades del ítem derivando el flujo hacia diferentes ramas de acción según el caso.",

  // .NET
  "Common Language Runtime (CLR)":
    "en el motor CLR, la máquina virtual gestiona la ejecución del código intermedio, la seguridad de tipos, el aislamiento y la memoria.",
  "JIT y compilación Ahead-Of-Time (AOT)":
    "en la compilación AOT de .NET, el ensamblado se convierte en binario nativo antes de la ejecución eliminando tiempo de calentamiento y reduciendo memoria.",
  "Garbage Collector y generaciones":
    "en las generaciones 0, 1 y 2 del GC, los objetos efímeros se limpian con mínima pausa mientras los objetos longevos se promueven eficientemente.",

  // MediaPipe
  "Tasks API y preprocesamiento":
    "en la pipeline de MediaPipe Tasks, la imagen de entrada se recorta y normaliza automáticamente antes de entrar al grafo de inferencia neuronal.",
  "Detección y seguimiento de manos":
    "en el modelo de manos, la GPU predice en tiempo real 21 puntos articulares tridimensionales superponiendo la estructura anatómica sobre el vídeo.",
  "Modelos On-Device y aceleración GPU":
    "en la ejecución en el borde, los pesos de TensorFlow Lite se ejecutan directamente en la GPU local garantizando privacidad y baja latencia.",

  // Firebase
  "Firebase Authentication y tokens":
    "en el flujo de autenticación, el SDK emite tokens JWT seguros con reclamaciones personalizadas que viajan en cada petición a la base de datos.",
  "Cloud Firestore y modelo NoSQL":
    "en las colecciones y documentos de Firestore, los índices compuestos resuelven consultas complejas en tiempo constante proporcional al resultado.",
  "Security Rules y validación":
    "en las Security Rules, el servidor evalúa request.auth y resource.data denegando por defecto cualquier lectura o escritura no autorizada.",
  "Sincronización y persistencia offline":
    "en la persistencia local de Firestore, los cambios se escriben en disco local y se transmiten automáticamente al servidor en cuanto se reconecta la red.",

  // Android
  "Jetpack Compose y UI declarativa":
    "en el árbol de composición de Compose, funciones anotadas con Composable recalculan reactivamente únicamente los nodos visuales afectados por el nuevo estado.",
  "ViewModel y StateFlow reactivo":
    "en el ViewModel de Android, el StateFlow emite estados inmutables que sobreviven a rotaciones de pantalla y recreaciones de la actividad.",
  "WorkManager y tareas en background":
    "en el planificador WorkManager, las tareas en diferido se garantizan mediante alarmas del sistema respetando restricciones de batería y red.",

  // Django
  "Arquitectura MVT y WSGI/ASGI":
    "en el ciclo de Django, la petición atraviesa WSGI o ASGI, se despacha mediante la URLconf y se procesa en la vista renderizando el template final.",
  "Django ORM y QuerySets":
    "en las consultas perezosas de QuerySets, SQL se compila únicamente al iterar los resultados optimizándose con select_related y prefetch_related.",
  "Formularios y protección CSRF":
    "en los formularios de Django, el token CSRF valida la procedencia de la petición POST previniendo ataques de falsificación de peticiones en sitios cruzados.",
};

/**
 * Explicaciones informativas y descriptivas de las animaciones visuales para colecciones de Datos y Bases de Datos (PR 3).
 */
const DATA_VISUAL_EXPLANATIONS: Record<string, string> = {
  // Bases de datos y SQL
  "Qué es una base de datos":
    "en el flujo de datos persistentes, la aplicación emite una petición de escritura que el motor coordina en memoria y confirma en disco con reglas de consistencia.",
  "DBMS":
    "en la arquitectura del DBMS, el cliente envía la consulta que el planner optimiza antes de consultar el buffer pool y acceder a las páginas de almacenamiento.",
  "Esquema":
    "en el esquema relacional, tablas, columnas y constraints imponen reglas estructurales que rechazan datos malformados antes de su persistencia.",
  "Modelado relacional y normalización":
    "en el diagrama de entidades, las relaciones eliminan dependencias transitivas y anomalías de inserción manteniendo claves primarias estables.",
  "Índices y B-Trees":
    "en el árbol B-Tree, el puntero navega desde el nodo raíz hasta las páginas hoja reduciendo el costo de búsqueda de O(N) a O(log N).",
  "Transacciones y ACID":
    "en la unidad de trabajo ACID, todas las modificaciones se confirman juntas en el log de transacciones o se revierten por completo ante cualquier fallo.",
  "MVCC y niveles de aislamiento":
    "en el control de concurrencia multiversión, las lecturas consultan un snapshot temporal evitando bloquear a las transacciones que escriben simultáneamente.",
  "Optimizador de consultas y Execution Plans":
    "en el árbol del plan de ejecución, el optimizador compara el costo estimado de escaneos de índice frente a escaneos secuenciales eligiendo la ruta más eficiente.",
  "Replicación y alta disponibilidad":
    "en el cluster distribuido, el nodo primario transmite el flujo de registros de transacción a los secundarios asegurando failover inmediato.",

  // Gestión de estado
  "Estado local y elevación de estado":
    "en el árbol de componentes, el estado de un input se eleva al ancestro común más cercano para sincronizar reactivamente las vistas dependientes.",
  "Redux y patrón Flux":
    "en el flujo unidireccional de Redux, la acción despachada atraviesa un reducer puro que calcula el siguiente estado inmutable sin efectos colaterales.",
  "Context API y sus límites":
    "en el proveedor de contexto, cualquier cambio en el valor notifica a todos los consumidores suscritos, destacando por qué datos de alta frecuencia requieren stores atómicos.",
  "Zustand y stores ligeros":
    "en el store de Zustand, selectores granulares suscriben componentes únicamente a las propiedades que consumen evitando re-renders innecesarios.",
  "TanStack Query y server state":
    "en la caché remota, el gestor de queries deduplica peticiones en vuelo, sirve datos de caché instantáneamente y revalida en segundo plano.",
  "Actualizaciones optimistas":
    "en la interfaz optimista, el estado visual se actualiza de inmediato al hacer clic y se revierte suavemente si el servidor rechaza la mutación.",
  "Persistencia y offline-first":
    "en el motor offline, las mutaciones se guardan en IndexedDB y se despachan en cola ordenada en cuanto se restablece la conectividad.",

  // SQL Server
  "Database Engine de SQL Server":
    "en el Database Engine de SQL Server, el analizador compila T-SQL, el gestor de memoria administra el buffer pool y el transaction log garantiza durabilidad.",
  "Batches y directiva GO":
    "en el editor de T-SQL, GO separa lotes de instrucciones que se envían y compilan independientemente en el motor de base de datos.",
  "Locks, Deadlocks y modo víctima":
    "en el grafo de bloqueo, cuando dos sesiones intentan acceder a recursos cruzados, SQL Server detecta el ciclo y aborta a la transacción con menor costo como víctima 1205.",
  "Query Store y regresión de planes":
    "en el catálogo de Query Store, el historial de consultas expone variaciones de tiempo de CPU permitiendo fijar un plan óptimo anterior.",
  "Always On Availability Groups":
    "en el grupo de disponibilidad, el listener de red enruta lecturas a réplicas secundarias mientras las escrituras sincronizan transacciones en el primario.",

  // NoSQL
  "Modelo clave-valor":
    "en el almacén clave-valor, una función hash mapea la clave directamente a un bloque de memoria para lecturas y escrituras de latencia submilimétrica.",
  "Bases de datos documentales":
    "en el almacén documental, registros JSON semiestructurados se consultan mediante índices secundarios flexibles sin migraciones rígidas de esquema.",
  "Columnas anchas y Cassandra":
    "en la tabla de columnas anchas, la clave de partición distribuye datos en el anillo mientras la clave de clustering ordena las filas dentro del nodo.",
  "Grafos y traversal":
    "en la base de grafos, las relaciones se recorren mediante punteros directos entre nodos sin costosas operaciones de join matricial.",
  "Consistencia eventual y quórum":
    "en el modelo distribuido, lecturas y escrituras con quórum mayoritario R + W > N garantizan que al menos una réplica devuelva el valor más reciente.",

  // XML, XSD y JSON
  "Documento XML e Infoset":
    "en el documento XML, el parser jerárquico valida el elemento raíz único y construye un árbol de nodos Infoset bien formado.",
  "Namespaces en XML":
    "en la resolución de namespaces, cada prefijo se asocia a su URI única evitando colisiones entre vocabularios de distinto origen en el mismo documento.",
  "XPath y expresiones de selección":
    "en la evaluación XPath, la ruta navega por ejes de ancestros y atributos seleccionando quirúrgicamente conjuntos de nodos coincidentes.",
  "XSLT y hojas de estilo de transformación":
    "en el motor XSLT, plantillas por coincidencia de patrones transforman recursivamente el árbol XML en HTML accesible o JSON.",
  "Schema set y validación XSD":
    "en el validador XSD, el documento XML se contrasta con las declaraciones de tipos y restricciones del schema produciendo un resultado conforme.",
  "Tipos simples y facetas XSD":
    "en las facetas XSD, valores de texto se restringen mediante expresiones regulares, longitudes y rangos numéricos estrictos.",
  "JSON text y tipos primitivos":
    "en el parser JSON, la cadena UTF-8 se decodifica en los seis valores estándar: objeto, array, string, number, boolean y null.",
  "JSON Schema 2020-12":
    "en la validación JSON Schema, el payload se verifica contra palabras clave de propiedades requeridas, tipos y esquemas dependientes.",
  "JSON Pointer y JSON Patch":
    "en la actualización JSON Patch, operaciones atómicas de test, add y replace navegan mediante rutas Pointer aplicando mutaciones seguras.",
  "Canonicalización JCS":
    "en el esquema JCS, las claves del objeto JSON se ordenan lexicográficamente para producir un hash criptográfico determinista e inequívoco.",

  // Blockchain
  "Hash criptográfico y Merkle trees":
    "en el árbol de Merkle, pares de hashes de transacciones se combinan recursivamente hasta formar la raíz de Merkle en la cabecera del bloque.",
  "Transacciones y firmas digitales":
    "en la firma criptográfica, la clave privada produce una firma ECDSA que los nodos validan con la clave pública sin exponer la llave secreta.",
  "Mempool y propagación de bloques":
    "en el nodo distribuido, las transacciones válidas esperan en la mempool hasta que un minero o validador las empaqueta en el siguiente bloque.",
  "Consenso Proof of Work y Proof of Stake":
    "en el mecanismo de consenso, la red converge hacia la cadena con mayor trabajo acumulado o mayor participación validada por los nodos.",
  "Reorganizaciones de cadena y finalidad":
    "en la resolución de forks, cuando una rama alternativa supera a la actual, el nodo revierte los bloques huérfanos y adopta la cadena ganadora.",

  // Inteligencia Artificial
  "Aprendizaje supervisado y datasets":
    "en el pipeline de entrenamiento, los datos de entrada se dividen en conjuntos de entrenamiento, validación y prueba preservando la distribución real.",
  "Función de pérdida y gradiente descendente":
    "en la optimización del modelo, el descenso de gradiente calcula la derivada de la pérdida y actualiza los pesos hacia el mínimo error global.",
  "Sobreajuste y regularización":
    "en las curvas de aprendizaje, la divergencia entre la pérdida de entrenamiento y la de validación evidencia sobreajuste corregido con dropout.",
  "Data leakage y validación cruzada":
    "en la detección de leakage, retirar variables espurias que contienen información futura restablece una evaluación honesta y generalizable.",
  "Monitoreo de deriva de datos y gobernanza":
    "en la consola de observabilidad, métricas estadísticas comparan la distribución de inferencias en producción contra el dataset base detectando drift.",
};

/**
 * Explicaciones informativas y descriptivas de las animaciones visuales para colecciones de Fundamentos de la Computación (PR 4).
 */
const FUNDAMENTALS_VISUAL_EXPLANATIONS: Record<string, string> = {
  // Fundamentos de programación
  "Problema, entrada y salida":
    "en la descomposición computacional, el problema se divide en puertos explícitos de entrada de datos, reglas de transformación y resultados esperados.",
  "Valores, tipos y representación":
    "en la representación de tipos básicos, enteros, cadenas y booleanos reservan espacio diferenciado en memoria según su semántica.",
  "Variables y constantes":
    "en la memoria de variables, identificadores simbólicos apuntan a celdas cuyo valor puede mutar o permanecer congelado como constante.",
  "Condiciones y ramas":
    "en la bifurcación condicional, la evaluación booleana activa el camino verdadero y descarta ordenadamente la rama falsa alternativa.",
  "Bucles e invariantes":
    "en la iteración estructurada, el contador avanza preservando la condición de invariante hasta alcanzar el criterio de terminación.",
  "Funciones y parámetros":
    "en el marco de pila de la función, los argumentos se transfieren por valor aislando las variables locales del ámbito llamador.",
  "Depuración por evidencia":
    "en el diagnóstico sistemático, trazas de ejecución e inspección de variables localizan la discrepancia lógica antes de aplicar correcciones.",

  // Algoritmos y estructuras de datos
  "Corrección y terminación":
    "en el análisis formal, la prueba por inducción demuestra que el algoritmo produce la respuesta correcta y termina en un número finito de pasos.",
  "Notación O, Ω y Θ":
    "en la curva de complejidad asintótica, el orden de crecimiento clasifica el tiempo de ejecución ignorando constantes menores y términos de bajo orden.",
  "Arrays y listas enlazadas":
    "en la comparativa de acceso, los arrays acceden por índice en O(1) contiguo en memoria mientras las listas recorren punteros encadenados.",
  "Pilas, colas y deques":
    "en las estructuras secuenciales, la pila opera con disciplina LIFO en su tope mientras la cola despacha en orden FIFO estricto.",
  "Tablas hash":
    "en la tabla hash, la función de dispersión mapea claves a índices de cubetas resolviendo colisiones mediante encadenamiento o sondeo abierto.",
  "Árboles de búsqueda":
    "en el árbol binario de búsqueda, cada nodo mantiene a su izquierda subclaves menores y a su derecha mayores permitiendo búsquedas en O(log N).",
  "Heaps y colas de prioridad":
    "en el montículo binario min-heap, el elemento de menor valor asciende a la raíz permitiendo extracciones prioritarias en tiempo logarítmico.",
  "Caminos mínimos y Dijkstra":
    "en la relajación de aristas de Dijkstra, la frontera de exploración actualiza iterativamente las distancias mínimas desde el nodo de origen.",

  // Matemáticas para programación
  "Lógica proposicional":
    "en las tablas de verdad, conectores lógicos evalúan conjunciones, disyunciones e implicaciones determinando tautologías y contingencias.",
  "Enteros y modularidad":
    "en la aritmética modular, los números enteros se envuelven cíclicamente dentro del anillo del módulo base para operaciones criptográficas seguras.",
  "Punto flotante IEEE 754":
    "en el estándar IEEE 754, bit de signo, exponente sesgado y mantisa normalizada representan números reales exhibiendo límites de precisión finita.",
  "Vectores y matrices":
    "en el espacio vectorial, multiplicaciones y transformaciones lineales rotan y escalan puntos en el plano conservando el origen.",
  "Derivadas y gradientes":
    "en el campo escalar multivariable, el vector gradiente apunta en la dirección de máxima pendiente guiando algoritmos de optimización continua.",
  "Conteo y combinatoria":
    "en el análisis combinatorio, permutaciones y combinaciones calculan el espacio muestral de configuraciones posibles sin enumeración exhaustiva.",
  "Descenso de gradiente":
    "en la optimización convexa, el paso proporcional a la derivada desciende suavemente por la cuenca hacia el mínimo global de la función.",

  // Metodologías de desarrollo
  "Valores ágiles":
    "en el manifiesto ágil, individuos e interacciones y software funcionando se priorizan sobre procesos rígidos y documentación exhaustiva.",
  "Entrega incremental":
    "en el ciclo iterativo, incrementos pequeños y verticales entregan valor operable a producción reduciendo el riesgo de integración tardía.",
  "Backlog y objetivos":
    "en la priorización del backlog, los elementos se ordenan por valor de negocio y riesgo técnico asegurando foco en el objetivo del sprint.",
  "Límites de trabajo en curso":
    "en el tablero Kanban, los límites WIP restringen la cantidad de tareas activas simultáneamente eliminando atascos y sobrecarga cognitiva.",
  "Lead time y cycle time":
    "en las métricas de flujo, el tiempo de entrega mide desde la concepción hasta producción y el tiempo de ciclo cronometra el trabajo activo.",
  "Daily y coordinación":
    "en la sincronización diaria, el equipo inspecciona el progreso hacia el objetivo del sprint identificando impedimentos de forma inmediata.",

  // Scratch
  "Proyecto, escenario y sprites":
    "en el escenario de Scratch, los sprites responden a coordenadas X e Y ejecutando guiones visuales apilados en bloques encajables.",
  "Eventos de inicio":
    "en el disparador de eventos, pulsar la bandera verde envía la señal de arranque sincronizando el inicio de todos los personajes.",
  "Variables y listas en Scratch":
    "en los bloques de datos, variables naranjas almacenan puntuaciones y listas acumulan inventarios dinámicos durante la partida.",
  "Mensajes broadcast":
    "en la mensajería interna, un sprite emite un broadcast que despierta guiones receptores en otros personajes sin acoplamiento directo.",
  "Clones y concurrencia":
    "en el generador de clones, duplicados temporales heredan el aspecto del sprite base y ejecutan comportamientos concurrentes independientes.",
  "Sensores y colisiones":
    "en la detección de contacto, bloques sensores evalúan intersección de bordes o colores disparando respuestas de rebote o daño.",
};

/**
 * Explicaciones informativas y descriptivas de las animaciones visuales para colecciones de Lenguajes Web y Modernos (PR 5).
 */
const MODERN_LANGUAGES_VISUAL_EXPLANATIONS: Record<string, string> = {
  // TypeScript
  "Inferencia de tipos":
    "en el motor de inferencia de TypeScript, la asignación de un valor inicial determina el tipo estático sin necesidad de anotaciones redundantes.",
  "Uniones y Narrowing":
    "en la bifurcación de narrowing, comprobaciones con typeof o in reducen la unión al tipo concreto exacto dentro de cada rama del código.",
  "Genéricos":
    "en la función genérica, el parámetro de tipo T captura la forma exacta del argumento entrante devolviendo el mismo tipo preservado.",
  "Interfaces y Type Aliases":
    "en la definición estructural, interfaces y type aliases declaran las propiedades y métodos requeridos para satisfacer el contrato del objeto.",
  "Tipos de utilidad":
    "en transformaciones con Partial, Pick o Omit, tipos derivados modifican la opcionalidad y selección de campos de forma programática.",
  "Satisfies y validación de tipos":
    "en el operador satisfies, el compilador valida la conformidad contra el tipo sin ensanchar los tipos literales inferidos.",

  // Python
  "Indentación significativa":
    "en el analizador de Python, bloques delimitados por espacios determinan el alcance y la estructura jerárquica del flujo de ejecución.",
  "Objetos y referencias":
    "en el modelo de objetos de CPython, identificadores apuntan a instancias en memoria gestionadas mediante conteo de referencias y recolector de ciclos.",
  "Asyncio y event loop":
    "en el bucle de eventos asyncio, tareas cooperativas ceden el control con await permitiendo alta concurrencia de entrada y salida en un solo hilo.",
  "Generadores e iteradores":
    "en la función generadora, yield suspende la ejecución y emite valores perezosamente bajo demanda preservando el estado de la pila.",
  "Context managers y with":
    "en el bloque with, los métodos enter y exit garantizan la adquisición y liberación determinista de recursos incluso ante excepciones.",

  // Go
  "Goroutines y scheduler G-M-P":
    "en el scheduler de Go, goroutines livianas se multiplexan sobre hilos del sistema operativo logrando concurrencia masiva con sobrecarga mínima.",
  "Canales y select":
    "en la comunicación por canales, select espera concurrentemente sobre múltiples operaciones despachando el mensaje disponible o atendiendo la cancelación.",
  "Interfaces implícitas":
    "en el sistema de tipos de Go, cualquier struct que implemente los métodos requeridos satisface la interfaz automáticamente sin declaraciones explicitas.",
  "Context y propagación de plazos":
    "en la jerarquía de context, la llamada a cancel o el vencimiento de timeout propaga la señal de interrupción a todas las goroutines dependientes.",

  // Rust
  "Ownership y borrowing":
    "en el comprobador de préstamos de Rust, las referencias exclusivas mutables o compartidas inmutables previenen carreras de datos en tiempo de compilación.",
  "Lifetimes y ciclo de vida":
    "en las anotaciones de lifetime, el compilador garantiza que ninguna referencia sobreviva a los datos sobre los que apunta en memoria.",
  "Tipos Option y Result":
    "en el manejo de errores sin excepciones, Option y Result encapsulan presencia o fallo obligando al desarrollador a desestructurarlos exhaustivamente.",
  "Traits y despacho estático":
    "en la implementación de traits, monomorfización genera código especializado en tiempo de compilación logrando polimorfismo con costo cero.",

  // Ruby
  "Objetos y mensajes":
    "en el modelo dinámico de Ruby, toda operación es un mensaje enviado a un objeto cuya clase resuelve el método en la cadena de ancestros.",
  "Bloques, Proc y lambda":
    "en la iteración idiomática, bloques pasados a métodos con yield ejecutan código contextual con semántica de clausura léxica.",
  "Módulo Enumerable":
    "en el módulo Enumerable, colecciones componen transformaciones encadenadas de filter, map y reduce sin mutar la fuente original.",

  // PHP
  "Ciclo request-response en PHP":
    "en el modelo de PHP-FPM, cada petición web inicializa su propio entorno de memoria aislado y lo destruye completamente al emitir la respuesta.",
  "PDO y consultas parametrizadas":
    "en la abstracción de base de datos PDO, marcadores de posición separan la consulta de los parámetros neutralizando ataques de inyección SQL.",
  "Autoloading PSR-4 y Composer":
    "en la resolución de clases PSR-4, namespaces mapean directamente a rutas del sistema de archivos cargando código bajo demanda.",
};

/**
 * Explicaciones informativas y descriptivas de las animaciones visuales para colecciones de Familia C, Embebidos y Compilados (PR 6).
 */
const C_FAMILY_VISUAL_EXPLANATIONS: Record<string, string> = {
  // C
  "Fases de traducción":
    "en el pipeline del compilador, el preprocesador expande macros, la unidad de compilación genera ensamblador y el linker unifica símbolos en el ejecutable final.",
  "Función main y entorno hospedado":
    "en el inicio del programa, el entorno pasa argc y argv inicializando descriptores estándar antes de transferir el control a la función principal.",
  "Declaraciones y definiciones":
    "en la tabla de símbolos, las declaraciones reservan el tipo e identificador mientras la definición asigna el bloque de almacenamiento físico.",
  "Headers y linkage":
    "en las cabeceras protegidas por include guards, declaraciones públicas comparten contratos entre unidades sin duplicar definiciones en el binario.",
  "Preprocesador":
    "en el analizador léxico previo, directivas hash sustituyen texto y evalúan condiciones de compilación antes de la fase de análisis sintáctico.",
  "Pragmas y extensiones del compilador":
    "en las directivas de compilador, pragmas y atributos afinan optimizaciones, alineaciones y empaquetado de memoria específicos de la arquitectura.",
  "Tipos enteros y promociones":
    "en la unidad aritmético-lógica, enteros de menor rango sufren promoción automática a int conservando signo antes de la operación binaria.",
  "Punto flotante":
    "en el registro de coma flotante, la mantisa y el exponente sesgado aproximan magnitudes continuas evidenciando límites de precisión finita.",
  "Arrays y decaimiento a puntero":
    "en la expresión de acceso, el identificador del array decae a un puntero hacia su elemento inicial conservando contigüidad en memoria.",
  "Struct, union y padding":
    "en la disposición de memoria, bytes de relleno alinean campos a múltiplos de su tamaño natural según el ABI de la arquitectura.",
  "Enum, typedef y qualifiers":
    "en el sistema de tipos de C, calificadores const y volatile imponen restricciones de mutabilidad sin introducir sobrecoste en el binario.",
  "Enteros de ancho fijo stdint":
    "en las definiciones stdint, tipos exactos de 8, 16, 32 y 64 bits garantizan portabilidad binaria determinista en tramas de red.",
  "Direcciones y aritmética de punteros":
    "en la cuadrícula de memoria contigua, sumar una unidad al puntero desplaza la dirección exactamente el tamaño en bytes del tipo apuntado.",
  "Punteros void y alineación":
    "en el transporte genérico de memoria, el puntero void almacena la dirección pura requiriendo un cast estricto al tipo con alineación compatible.",
  "Punteros nulos y comprobación":
    "en la compuerta defensiva, la evaluación de puntero nulo previene la desreferenciación fatal bifurcando el flujo hacia la ruta de manejo de error.",
  "Puntero a puntero y mutación":
    "en la llamada a función, pasar la dirección de un puntero permite mutar la referencia original del llamador sin variables globales.",
  "Punteros a funciones y callbacks":
    "en la tabla de despacho dinámico, el puntero de función salta a la dirección de memoria de la rutina destino invocándola con los argumentos dados.",
  "Punteros constantes y restrict":
    "en la optimización de punteros, restrict garantiza ausencia de solapamiento de memoria permitiendo al compilador vectorizar operaciones contiguas.",
  "Stack, static storage y heap":
    "en la segmentación de memoria, variables automáticas residen en marcos de pila temporales mientras el heap administra bloques dinámicos.",
  "malloc, calloc, realloc y free":
    "en el gestor del heap, malloc reserva bytes sin inicializar, calloc los limpia a cero y free devuelve el bloque contiguo al sistema.",
  "Ownership y responsabilidad de liberación":
    "en la política de propiedad, un único módulo asume la responsabilidad de liberar el buffer adquirido evitando fugas o dobles liberaciones.",
  "Doble liberación y use-after-free":
    "en la trampa de memoria, acceder o liberar un puntero ya destruido corrompe el heap o dispara una señal de fallo de segmentación inmediata.",
  "Fragmentación del heap":
    "en el mapa de asignaciones, patrones dispares de reservas y liberaciones fragmentan la memoria impidiendo alojar bloques contiguos extensos.",
  "Asignadores de arena y pools":
    "en la asignación por arenas, múltiples objetos de vida idéntica se reservan en un bloque contiguo y se liberan simultáneamente a costo constante.",
  "Aliasing y effective type":
    "en el análisis de aliasing, el compilador verifica qué accesos pueden observar un objeto garantizando la validez de optimizaciones de registro.",
  "Strict aliasing rule":
    "en el optimizador del compilador, dos punteros de tipos incompatibles se asumen como regiones independientes salvo casts autorizados como char.",
  "El calificador restrict":
    "en la firma de la función, restrict promete que el puntero es el acceso exclusivo a su bloque habilitando vectorización agresiva.",
  "Casts de tipos y type punning":
    "en la reinterpretación de representación binaria, uniones bien definidas o llamadas a memcpy transfieren bits sin violar reglas de aliasing.",
  "Memory clobbers y optimizaciones":
    "en la barrera del optimizador, una directiva de clobber fuerza a releer valores desde memoria descartando cachés obsoletas en registros.",
  "Punteros volátiles en hardware":
    "en la interacción con periféricos mapeados, volatile obliga a emitir lecturas y escrituras físicas sin omisiones del compilador.",
  "Expresiones y sequence rules":
    "en los puntos de secuencia, el estándar garantiza que todos los efectos secundarios previos se hayan completado antes de avanzar.",
  "Control de flujo condicional":
    "en la bifurcación condicional, la evaluación booleana dirige el flujo hacia el bloque verdadero descartando la rama alterna.",
  "Sentencias switch y fallthrough":
    "en la tabla de salto del switch, la ejecución cae secuencialmente entre casos salvo que una instrucción break interrumpa el control.",
  "Loops while, for y do-while":
    "en los bucles estructurados, la condición de parada evalúa invariantes garantizando terminación determinista sin ciclos infinitos.",
  "Saltos locales y goto de limpieza":
    "en la salida de la función, una etiqueta común centraliza la desasignación de recursos adquiridos sin código duplicado.",
  "setjmp y longjmp en recuperación":
    "en la restauración del entorno, longjmp desenrolla la pila restaurando registros y contexto guardados previamente por setjmp.",
  "Funciones y calling convention":
    "en el prólogo y epílogo de la llamada, argumentos y retornos se colocan en registros específicos o en el stack según la convención ABI.",
  "Pila de llamadas y frame pointers":
    "en el registro de activación, el frame pointer conserva la base de la pila permitiendo desenrollado y depuración precisos.",
  "Argumentos variables con stdarg":
    "en la lista variádica, macros va_start y va_arg recorren argumentos consecutivos en memoria terminando en va_end.",
  "Funciones inline y linkage interno":
    "en la optimización de código, funciones inline sustituyen el cuerpo directamente en el sitio de llamada reduciendo el sobrecoste.",
  "Recursión y límites de stack":
    "en la recursión profunda, llamadas sucesivas consumen marcos de pila hasta aproximarse a la guardia de memoria del sistema.",
  "Estabilidad de ABI y exportación":
    "en la interfaz binaria pública, estructuras opacas y convenciones fijas permiten enlazar bibliotecas compartidas sin romper compatibilidad.",
  "stdio y buffering":
    "en el canal de entrada y salida, buffers intermedios acumulan caracteres antes de emitir la llamada al sistema de escritura por bloques.",
  "Archivos y descriptores del sistema":
    "en el acceso a disco, descriptores de archivo gestionan handles del kernel garantizando su cierre seguro en todas las rutas de salida.",
  "Lecturas binarias fread y fwrite":
    "en la transferencia por bloques, buffers estructurados leen y escriben registros continuos verificando la cantidad de elementos procesados.",
  "Posicionamiento con fseek y ftell":
    "en el cursor del archivo, desplazamientos numéricos navegan offsets binarios respetando límites de tipo off_t.",
  "Formateo seguro con snprintf":
    "en la construcción de cadenas delimitadas, snprintf trunca el texto al límite del buffer evitando desbordamientos de memoria.",
  "Errores, errno y códigos de retorno":
    "en el reporte de fallos, códigos de error en errno capturan la causa inmediata de la llamada al sistema antes de que otra operación la sobrescriba.",
  "Atomics y memory order":
    "en el bus de memoria compartida, operaciones atómicas con barreras de memoria sincronizan hilos sin riesgo de estados intermedios inconsistentes.",
  "Tipos atómicos y operaciones lock-free":
    "en la sincronización sin bloqueos, primitivas compare-and-swap actualizan punteros y contadores concurrentes sin adquirir cerrojos.",
  "Threads estándar de C11":
    "en la gestión de hilos nativos, thrd_create inicializa la ejecución concurrente y thrd_join sincroniza su terminación.",
  "Mutexes y variables de condición":
    "en la exclusión mutua, un mutex protege la sección crítica mientras la variable de condición coordina señales de espera.",
  "Memory barriers y sequential consistency":
    "en la sincronización multiprocesador, barreras de memoria impiden el reordenamiento de lecturas y escrituras en el hardware.",
  "Data races y comportamiento indefinido":
    "en el acceso concurrente no sincronizado, dos hilos que acceden a la misma celda de memoria causan comportamiento indefinido.",
  "Warnings como contrato estricto":
    "en la compilación estricta, banderas de advertencia elevan potenciales discrepancias a errores deteniendo el build.",
  "Sanitizers de memoria ASan y UBSan":
    "en la ejecución instrumentada, AddressSanitizer coloca zonas rojas alrededor de reservas detectando desbordamientos de buffer al instante.",
  "Mitigación de desbordamientos de buffer":
    "en la codificación defensiva, funciones con límites explícitos de longitud impiden corromper memoria adyacente en el stack o heap.",
  "Protección de stack canaries y FORTIFY_SOURCE":
    "en la seguridad del compilador, valores centinela en la pila interceptan la corrupción del puntero de retorno antes de saltar.",
  "Debugger LLDB/GDB y core dumps":
    "en el análisis post-mortem, el debugger reconstruye el estado de registros, pila y memoria en la línea exacta del fallo.",
  "Fuzzing con libFuzzer y AFL":
    "en las pruebas de robustez, mutaciones guiadas por cobertura inyectan entradas anómalas descubriendo excepciones no controladas.",

  // C++
  "Compilación y One Definition Rule":
    "en la fase de enlace de C++, la regla de definición única garantiza que cada plantilla y clase compartan una representación idéntica entre bibliotecas.",
  "Inicialización":
    "en la construcción de objetos, inicialización por lista previene conversiones con pérdida y garantiza el orden estricto de miembros.",
  "const y constexpr":
    "en la evaluación de expresiones, const protege variables contra mutaciones en runtime mientras constexpr calcula valores directamente en compilación.",
  "Namespaces y lookup":
    "en la resolución de nombres, el mecanismo ADL busca sobrecargas en los espacios de nombres de los tipos de los argumentos pasados.",
  "Modules y headers":
    "en la arquitectura de módulos de C++20, unidades de interfaz exportan símbolos compilados reduciendo tiempos de construcción textual.",
  "Linkage y visibilidad de símbolos":
    "en la tabla de exportación, atributos de visibilidad controlan qué clases y funciones trascienden la frontera de la biblioteca compartida.",
  "Storage y object lifetime":
    "en el ciclo de vida de C++, el objeto comienza formalmente su existencia al completar su constructor y concluye con su destructor.",
  "Constructores y destructores":
    "en la adquisición y liberación simétrica, constructores establecen invariantes válidas y destructores retornan recursos al sistema.",
  "RAII":
    "en el patrón de adquisición determinista, el constructor adquiere el recurso del sistema y el destructor lo libera automáticamente al salir del ámbito léxico.",
  "Smart pointers":
    "en la gestión moderna de memoria, unique_ptr asegura propiedad exclusiva sin sobrecoste mientras shared_ptr mantiene conteo atómico de referencias.",
  "Regla del cero, tres y cinco":
    "en el diseño de clases, implementar destructores o constructores de copia obliga a definir explícitamente operaciones de movimiento y asignación.",
  "Invariantes de clase y estado válido":
    "en la encapsulación estricta, métodos públicos garantizan que el estado interno nunca quede inconsistente ante excepciones.",
  "Lvalues, prvalues y xvalues":
    "en la categorización de valores, expresiones temporales xvalues se identifican para habilitar el robo de recursos mediante semántica de movimiento.",
  "Constructores y asignación de movimiento":
    "en la transferencia eficiente, los punteros internos del objeto origen se asignan al nuevo contenedor dejándolo en estado nulo válido.",
  "std::move y casts incondicionales":
    "en la conversión estática, std::move castea un lvalue a rvalue reference permitiendo invocar la sobrecarga de movimiento.",
  "Perfect forwarding con std::forward":
    "en el reenvío de argumentos en plantillas, std::forward preserva si la entidad original era un lvalue o un rvalue temporal.",
  "Referencias a rvalues (T&&)":
    "en la deducción de plantillas, referencias universales colapsan enlaces preservando la naturaleza original de los argumentos pasados.",
  "Movimiento sin excepciones noexcept":
    "en la reubicación de vectores, el calificador noexcept asegura que los elementos se muevan en lugar de copiarse durante el crecimiento.",
  "Elisión de copia y RVO":
    "en la optimización del compilador, la elisión de copia construye el objeto directamente en el almacenamiento de destino del llamador.",
  "Clases e invariantes":
    "en la estructura de datos orientada a objetos, constructores y métodos privados protegen la coherencia de los campos de datos.",
  "Herencia y substitución":
    "en el principio de sustitución de Liskov, clases derivadas honran el contrato de la clase base sin debilitar precondiciones ni alterar invariantes.",
  "Virtual dispatch y vtables":
    "en el despacho polimórfico dinámico, el puntero vptr consulta la tabla virtual para resolver la implementación correspondiente en runtime.",
  "Destructores virtuales":
    "en la destrucción polimórfica, un destructor virtual en la clase base asegura que se invoque el destructor de la clase derivada al eliminar mediante puntero.",
  "Herencia múltiple y clases virtuales":
    "en el problema del diamante, la herencia virtual unifica el subobjeto base compartido previniendo duplicaciones de estado en memoria.",
  "std::variant y polimorfismo cerrado":
    "en las uniones discriminadas seguras, std::variant almacena alternativas tipadas y std::visit aplica visitantes exhaustivos sin vtables.",
  "Function y class templates":
    "en la instanciación de plantillas, el compilador genera código de máquina especializado para cada tipo concreto sin costo de indirección.",
  "Type deduction":
    "en la deducción de tipos con auto y plantillas, el compilador resuelve la estructura estática descartando o conservando referencias según la regla aplicada.",
  "Especialización explícita y parcial":
    "en la personalización de plantillas, ramas especializadas optimizan algoritmos para tipos específicos como punteros o estructuras empaquetadas.",
  "Variadic templates y parameter packs":
    "en las plantillas variádicas, paquetes de parámetros desglosan argumentos de longitud variable recursivamente o mediante fold expressions.",
  "Fold expressions":
    "en la reducción de paquetes de parámetros de C++17, operadores binarios pliegan secuencias de argumentos en una única expresión compacta.",
  "SFINAE y std::enable_if":
    "en la resolución de sobrecargas, la sustitución fallida descarta silenciosamente candidatos de plantilla inválidos sin emitir error.",
  "Template template parameters":
    "en la composición de tipos genéricos, plantillas de plantillas aceptan contenedores paramétricos como argumentos de abstracciones superiores.",
  "Concepts como contratos de tipos":
    "en el análisis estático de C++20, los conceptos validan que los tipos genéricos satisfagan operaciones requeridas antes de compilar.",
  "Cláusula requires":
    "en la restricción de plantillas, la cláusula requires declara expresiones válidas, tipos asociados y conversiones obligatorias.",
  "Type traits en std::type_traits":
    "en la metaprogramación estática, constantes booleanas evalúan propiedades de tipos en compilación para bifurcar algoritmos.",
  "Concepts estándar en std::concepts":
    "en la biblioteca estándar de C++20, conceptos predefinidos como movable, invocable o regular imponen interfaces estandarizadas.",
  "Sobrecargas restringidas por conceptos":
    "en el motor de overload resolution, el compilador elige la sobrecarga más restringida según la subsunción de predicados.",
  "Diagnósticos claros del compilador":
    "en la compilación moderna, las restricciones no satisfechas emiten trazas de error legibles y directas sobre la propiedad faltante.",
  "Contenedores y localidad de memoria":
    "en la jerarquía de memoria, std::vector almacena datos contiguos maximizando aciertos de caché frente a listas de punteros dispersos.",
  "Iteradores y categorías de acceso":
    "en el puente de la STL, iteradores de acceso aleatorio o continuo permiten a algoritmos genéricos operar sobre secuencias con costos predecibles.",
  "Vistas y pipelines en std::ranges":
    "en las canalizaciones de rangos, transformaciones y filtros se componen con el operador pipe evaluándose de forma perezosa bajo demanda.",
  "Polymorphic memory resources (PMR)":
    "en los asignadores polimórficos, contenedores desacoplan su tipo estático del mecanismo de reserva de memoria en tiempo de ejecución.",
  "std::string_view y std::span":
    "en el acceso no propietario, vistas contiguas referencian secuencias existentes con puntero y longitud sin realizar copias en memoria.",
  "Algoritmos paralelos de la STL":
    "en la ejecución paralela, políticas std::execution::par distribuyen iteraciones entre múltiples núcleos de la CPU de forma transparente.",
  "Estructuras asociadas planas (flat_map)":
    "en los contenedores planos modernos, claves y valores residen en vectores contiguos ordenados mejorando la velocidad de búsqueda binaria.",
  "Hilos nativos con std::jthread":
    "en la concurrencia moderna, jthread solicita cancelación cooperativa mediante stop_token y une el hilo automáticamente en su destrucción.",
  "Locks RAII y mutexes":
    "en la sincronización de hilos, std::scoped_lock adquiere múltiples cerrojos sin riesgo de deadlocks liberándolos deterministamente.",
  "Variables de condición":
    "en la coordinación de hilos, predicados asociados a la variable de condición evitan despertares espurios manteniendo los hilos suspendidos.",
  "Modelo de memoria atómica std::atomic":
    "en las operaciones atómicas de C++, órdenes de memoria relaxed, acquire y release coordinan sincronización fina sin cerrojos pesados.",
  "Coroutines y co_await":
    "en la suspensión cooperativa de C++20, co_await preserva el estado en el frame de la corutina cediendo la CPU sin bloquear hilos del sistema.",
  "Generadores con co_yield":
    "en las secuencias asíncronas, co_yield emite valores sucesivos bajo demanda preservando la pila de la corutina.",
  "std::future y std::promise":
    "en la transferencia asíncrona, promesas canalizan resultados computados hacia futuros que bloquean o consultan su disponibilidad.",
  "Funciones constexpr":
    "en la evaluación temprana, funciones constexpr se ejecutan durante la compilación cuando reciben argumentos constantes inmutables.",
  "Funciones consteval (immediate functions)":
    "en la evaluación forzada, la función consteval se resuelve obligatoriamente en tiempo de compilación produciendo una constante pura.",
  "if constexpr y compilación condicional":
    "en el metaprogramming, if constexpr descarta ramas que no coinciden con las propiedades de los tipos simplificando plantillas.",
  "Variables y estructuras constexpr":
    "en los datos estáticos, tablas precalculadas se incrustan en el segmento de solo lectura del binario con cero sobrecoste de inicialización.",
  "std::is_constant_evaluated":
    "en la detección de contexto, la función identifica si el código se ejecuta en compilación para elegir algoritmos ultraoptimizados.",
  "Reflexión estática emergente":
    "en la inspección estática, metadatos de tipos y miembros permiten serialización y registro automatizados sin macros invasivas.",
  "Metaprogramación basada en valores":
    "en la programación moderna en compilación, algoritmos imperativos constexpr sustituyen trucos históricos de tipos basados en recursión.",
  "CMake y targets modernos":
    "en el sistema de construcción, targets de CMake propagan opciones de compilación, cabeceras y dependencias de forma transitiva y limpia.",
  "Sanitizers de Clang y GCC":
    "en la verificación continua, AddressSanitizer y ThreadSanitizer instrumentan el ejecutable revelando accesos ilegales y carreras en tiempo real.",
  "Perfilado de CPU y memoria":
    "en el análisis de rendimiento, herramientas como perf y heaptrack identifican cuellos de botella y exceso de reservas en el heap.",
  "Control de ABI y compatibilidad binaria":
    "en la exportación de librerías, visibilidad oculta por defecto y versionado de símbolos garantizan estabilidad binaria entre versiones.",
  "Fuzz testing con libFuzzer":
    "en las pruebas de resistencia, entradas aleatorias mutadas descubren violaciones de aserciones e invariantes no contempladas.",
  "Hardening de binarios y directivas de seguridad":
    "en la protección de producción, banderas RELRO, canary y control de flujo fortalecen el binario contra exploits de memoria.",
  "Auditoría con C++ Core Guidelines y Clang-Tidy":
    "en el control de calidad, analizadores estáticos aplican reglas automáticas erradicando patrones inseguros u obsoletos.",

  // Objective-C
  "Clases, objetos e isa":
    "en el modelo dinámico de Objective-C, el puntero isa de cada objeto referencia su clase para guiar la búsqueda de selectores en runtime.",
  "Mensajes y selectors (SEL)":
    "en la sintaxis de corchetes, un selector representa el nombre del mensaje desacoplado de la implementación de la función en memoria.",
  "Métodos de instancia y clase":
    "en la jerarquía de clases, métodos de instancia atienden a objetos mientras métodos de clase operan sobre la metaclase correspondiente.",
  "Properties e ivars":
    "en la encapsulación de Cocoa, propiedades sintetizan getters y setters con semántica explícita de retención, copia o referencia débil.",
  "Inicializadores y ciclo de vida":
    "en la construcción de instancias, inicializadores designados invocan a super antes de configurar el estado propio de la clase.",
  "Literales de Foundation":
    "en la sintaxis abreviada, literales con arroba crean instancias de NSArray, NSDictionary y NSNumber de forma limpia y directa.",
  "Función objc_msgSend":
    "en el motor de despacho de Apple, objc_msgSend consulta la caché de métodos y despacha el puntero de función IMP correspondiente.",
  "Method lookup y cache interno":
    "en la resolución de llamadas, una tabla hash rápida reutiliza punteros IMP cacheados evitando recorridos repetidos de la jerarquía.",
  "Method Swizzling":
    "en la modificación en caliente del runtime, se intercambian las implementaciones de dos métodos para interceptar o instrumentar llamadas de Cocoa.",
  "Punteros de implementación IMP":
    "en la optimización crítica, la obtención directa del puntero de función IMP elude el despacho dinámico en bucles intensivos.",
  "Resolución dinámica de métodos":
    "en el manejo dinámico, resolveInstanceMethod permite añadir funciones en tiempo de ejecución antes de considerar un selector no reconocido.",
  "Estructura objc_class y metaclases":
    "en las entrañas del runtime, metaclases almacenan la tabla de métodos de clase completando la arquitectura de objetos de Objective-C.",
  "Introspección con isKindOfClass y respondsToSelector":
    "en la verificación de tipos, la consulta en runtime comprueba la compatibilidad de clases y la existencia de métodos antes de invocarlos.",
  "Fast forwarding con forwardingTargetForSelector":
    "en el reenvío liviano de mensajes, el objeto delega la atención del selector a un segundo destino sin construir un NSInvocation completo.",
  "Normal forwarding con forwardInvocation":
    "en el reenvío completo, un objeto NSInvocation captura argumentos y firma permitiendo reescribir y despachar el mensaje dinámicamente.",
  "Clasificación NSMethodSignature":
    "en la introspección de firmas, NSMethodSignature describe los tipos de retorno y argumentos codificados según convenciones de Objective-C.",
  "Manejo de doesNotRecognizeSelector":
    "en la última frontera de fallo, un selector no atendido lanza una excepción NSInvalidArgumentException con diagnóstico del mensaje no reconocido.",
  "Dynamic proxying con NSProxy":
    "en la arquitectura de intermediación, subclases de NSProxy interceptan todos los mensajes entrantes para logging o llamadas remotas.",
  "Strong, weak y unsafe references":
    "en la gestión de memoria ARC, referencias strong incrementan retención, weak se limpian a nil automáticamente y assign opera sin gestión.",
  "Autorelease pools y @autoreleasepool":
    "en la gestión de referencias diferidas, el bloque autoreleasepool drena y libera los objetos temporales al cerrar el ámbito.",
  "Retain cycles en bloques y delegates":
    "en la prevención de ciclos, referencias débiles capturadas en bloques rompen la retención mutua permitiendo el dealloc oportuno.",
  "Bridging con Core Foundation":
    "en el cruce de APIs de Apple, directivas bridge transfieren ownership entre objetos administrados por ARC y punteros de memoria opacos C.",
  "Semántica de copia para bloques":
    "en la persistencia de bloques, copiar un bloque traslada su frame del stack al heap permitiendo ejecuciones asíncronas seguras.",
  "Método dealloc y limpieza de recursos":
    "en la destrucción de la instancia, dealloc desuscribe observers y cierra handles del sistema sin invocar llamadas manuales a retain o release.",
  "Protocols y métodos requeridos u opcionales":
    "en los contratos de interfaz, protocolos declaran métodos obligatorios y directivas optional para capacidades condicionales.",
  "Categories y class extensions":
    "en la modularización de clases, categorías añaden métodos a tipos existentes sin necesidad de subclases ni acceso al código fuente.",
  "Patrón Delegation":
    "en la arquitectura Cocoa, delegados con referencias débiles reciben eventos y toman decisiones operativas desacopladas de la vista.",
  "Key-Value Coding (KVC)":
    "en el acceso por reflexión, métodos valueForKey y setValueForKey leen y escriben propiedades mediante nombres de cadena en runtime.",
  "Key-Value Observing (KVO)":
    "en la observación reactiva, observadores registrados reciben notificaciones automáticas ante mutaciones en las propiedades supervisadas.",
  "Associated Objects":
    "en la extensión en runtime, claves arbitrarias vinculan estado adicional a instancias existentes sin modificar su estructura física.",
  "Colas seriales y concurrentes en GCD":
    "en Grand Central Dispatch, bloques de código se despachan a colas del sistema distribuyendo trabajo en paralelo sin gestión manual de hilos.",
  "Main Queue y actualizaciones de interfaz":
    "en la manipulación de UI, dispatch_async hacia la cola principal garantiza que modificaciones visuales se ejecuten en el hilo de pantalla.",
  "Dispatch groups y sincronización":
    "en la orquestación asíncrona, dispatch_group rastrea la conclusión de múltiples tareas concurrentes notificando al completarse todas.",
  "Dispatch barriers y patrón reader-writer":
    "en la concurrencia segura, barreras de despacho permiten lecturas paralelas simultáneas bloqueando accesos durante escrituras exclusivas.",
  "Bloques como callbacks de finalización":
    "en la asincronía idiomática, bloques pasados como argumento encapsulan respuestas y errores ejecutándose al finalizar operaciones remotas.",
  "Operaciones NSOperation y NSOperationQueue":
    "en la gestión avanzada de tareas, NSOperation modela dependencias de ejecución, prioridades y estados de cancelación cooperativos.",
  "Nullability annotations (_Nonnull, _Nullable)":
    "en la frontera con Swift, anotaciones explícitas definen si los punteros admiten ausencia eliminando opcionales implícitos dudosos.",
  "Generics ligeros en colecciones":
    "en la interoperabilidad tipada, NSArray y NSDictionary parametrizados exponen tipos concretos al compilador de Swift.",
  "Bridging headers de proyecto":
    "en la integración mixta, cabeceras puente exponen clases y métodos de Objective-C al espacio de trabajo de Swift.",
  "Atributos NS_SWIFT_NAME y NS_REFINED_FOR_SWIFT":
    "en la adaptación idiomática, macroatributos redefinen nombres de métodos haciéndolos naturales en la sintaxis moderna de Swift.",
  "NS_ENUM y NS_OPTIONS":
    "en las enumeraciones tipadas, macros de Foundation unifican enteros C con enums y conjuntos de opciones exhaustivos de Swift.",
  "Aislamiento de módulos legados detrás de protocolos":
    "en la modernización incremental, fachadas basadas en protocolos aíslan código histórico de Cocoa permitiendo su reemplazo progresivo.",
  "Depuración con LLDB y comandos po":
    "en la consola de depuración, el comando po evalúa e imprime descripciones de objetos de Foundation en tiempo real.",
  "Herramienta Leaks y Allocations en Instruments":
    "en el análisis de memoria de Xcode, Instruments traza el grafo de objetos identificando retenciones cíclicas y fugas no reclamadas.",
  "Time Profiler y cuellos de botella de CPU":
    "en el perfilado de rendimiento, muestreos estadísticos identifican métodos de Cocoa que saturan el hilo principal.",
  "Zombies y depuración de memoria liberada":
    "en la detección de errores de memoria, activar NSZombieEnabled convierte objetos liberados en centinelas que reportan selectores ilegales.",
  "Clang Static Analyzer integrado":
    "en el análisis estático de código, el analizador detecta posibles fugas de memoria, nulos accidentales y lógicas inconsistentes antes del build.",
  "Pruebas unitarias con XCTest":
    "en la suite de pruebas, casos de XCTest verifican invariantes y aserciones sobre clases históricas garantizando ausencia de regresiones.",

  // C*
  "Front end y processing elements":
    "en la arquitectura de la Connection Machine, el ordenador anfitrión emite órdenes escalares hacia miles de procesadores elementales paralelos.",
  "Modelo SIMD puro":
    "en el cómputo masivamente paralelo, una única instrucción se propaga y ejecuta simultáneamente sobre todos los procesadores activos de la máquina.",
  "Memoria distribuida masiva":
    "en la organización física, cada procesador elemental gestiona su propia memoria local comunicándose con otros a través de la red interna.",
  "Máquinas CM-2 y CM-5":
    "en la evolución de supercomputadores, la arquitectura transitó desde procesadores SIMD bit-serial hacia nodos SPARC MIMD con red sincronizada.",
  "Microcódigo del secuenciador":
    "en el control de hardware, el secuenciador traduce instrucciones paralelas de alto nivel en microinstrucciones de ciclo elemental.",
  "Toolchain de compilación C*":
    "en la construcción de software, el compilador cs traduce código paralelo separando el flujo escalar del host de las instrucciones de nodos.",
  "Definición de shapes":
    "en la topología de datos de C*, el shape define las dimensiones geométricas de la cuadrícula sobre la que residen las variables paralelas.",
  "Coordenadas intrínsecas pcoord":
    "en la localización espacial, la función pcoord devuelve a cada procesador su coordenada en la dimensión de la cuadrícula consultada.",
  "Mapeo de shapes físicos y virtuales":
    "en la virtualización de procesadores, el runtime asigna millones de celdas lógicas sobre miles de procesadores físicos repartiendo ciclos.",
  "Dimensiones múltiples en shapes":
    "en el modelado espacial, shapes bidimensionales y tridimensionales representan mallas de elementos finitos y matrices densas.",
  "Variables paralelas (poly)":
    "en la asignación distribuida, las variables poly residen con una instancia independiente en la memoria local de cada procesador.",
  "Alineación de shapes compatibles":
    "en las operaciones paralelas, variables poly que comparten el mismo shape se combinan aritméticamente elemento a elemento sin comunicación.",
  "Calificador poly":
    "en la semántica de tipos de C*, poly declara que el dato existe paralelamente en todos los elementos activos del dominio actual.",
  "Active set de procesadores":
    "en la selección paralela, las compuertas lógicas activan o inhiben procesadores según su estado local antes de aplicar la instrucción.",
  "Contextos de ejecución paralela":
    "en la delimitación de alcance, bloques with establecen el shape activo sobre el que se ejecutan las expresiones paralelas siguientes.",
  "Operaciones mono sobre poly":
    "en el intercambio de datos, valores escalares mono se difunden a procesadores paralelos o se reducen a un resultado único.",
  "Punteros paralelos a memoria poly":
    "en el direccionamiento distribuido, punteros paralelos permiten a un elemento referenciar memoria ubicada en otros nodos de la máquina.",
  "Persistencia de estado en memoria local":
    "en la memoria distribuida, variables poly conservan su valor entre llamadas sucesivas sin necesidad de guardarse en almacenamiento externo.",
  "Sentencia where paralela":
    "en el filtrado condicional, la cláusula where evalúa una máscara booleana reduciendo el active set sin saltos en el contador de programa.",
  "Cláusula elsewhere":
    "en la bifurcación paralela, elsewhere invierte la máscara condicional ejecutando la rama alternativa en los nodos previamente inhibidos.",
  "Anidamiento de bloques where":
    "en la restricción sucesiva, where anidados aplican conjunciones lógicas de máscaras acotando progresivamente los procesadores participantes.",
  "Condiciones sin saltos de programa":
    "en la ejecución SIMD, las sentencias condicionales deshabilitan escrituras en procesadores sin desviar el flujo secuencial del anfitrión.",
  "Impacto en rendimiento por divergencia":
    "en la ejecución paralela, caminos condicionales dispares se evalúan secuencialmente sumando los tiempos de ejecución de cada rama.",
  "Máscaras de borde y fronteras":
    "en simulaciones físicas, máscaras geométricas aíslan celdas perimetrales aplicando condiciones de contorno fijas.",
  "Operador de reducción += y suma global":
    "en el árbol de hardware, operadores de reducción suman los valores de todos los procesadores en un único escalar en tiempo logarítmico.",
  "Reducciones de mínimo y máximo":
    "en el análisis global, reducciones de extremos encuentran el valor límite o mayor divergencia en toda la cuadrícula distribuida.",
  "Reducción lógica and y or":
    "en la evaluación de criterios globales, reducciones lógicas verifican si todos o algún procesador han alcanzado la condición de parada.",
  "Scans de prefijos y sumas acumuladas":
    "en el paralelismo de datos, operaciones de escaneo calculan sumas prefijas a lo largo de ejes coordenados en tiempo logarítmico.",
  "Segmented scans con banderas de reinicio":
    "en los escaneos segmentados, banderas booleanas reinician el acumulador calculando prefijos independientes por partición.",
  "Árboles de reducción por hardware":
    "en los circuitos integrados de la Connection Machine, redes combinacionales dedicadas resuelven sumas globales a velocidad de silicio.",
  "Red de interconexión Hypercube":
    "en el enrutador de Thinking Machines, paquetes cruzan un hipercubo de múltiples dimensiones resolviendo comunicaciones arbitrarias.",
  "Comunicación con vecinos NEWS":
    "en la cuadrícula contigua, procesadores intercambian valores con vecinos de norte, sur, este y oeste a través de enlaces rápidos de red.",
  "El router general de la CM":
    "en la conmutación de paquetes, el router resuelve transferencias punto a punto arbitrarias gestionando colisiones y desvíos en tránsito.",
  "Conflictos de envío y combinadores":
    "en la recepción de colisiones, combinadores aritméticos suman o eligen el valor ganador cuando múltiples mensajes convergen en el mismo destino.",
  "Latencia de comunicación vs cálculo local":
    "en la optimización masivamente paralela, algoritmos eficientes priorizan cómputo local y comunicación con vecinos cercanos sobre el router general.",
  "Permutaciones y transposiciones de matrices":
    "en el álgebra paralela, patrones de comunicación precalculados rotan y transponen matrices distribuidas sin contención de red.",
  "Arquitectura DataVault de I/O paralelo":
    "en el almacenamiento masivo, múltiples cabezales de disco leen y escriben simultáneamente hacia arreglos de procesadores a gigabytes por segundo.",
  "Instrucciones de bajo nivel Paris":
    "en el lenguaje de interfaz del secuenciador, primitivas Paris manipulan directamente registros y operaciones de los procesadores de la máquina.",
  "Entorno de visualización Prism":
    "en la consola gráfica de Thinking Machines, Prism visualiza mapas térmicos y estados de procesamiento de la máquina en tiempo real.",
  "Influencia de C* en CUDA y compute shaders":
    "en la genealogía computacional, conceptos de shapes, variables poly y máscaras de C* anticiparon los hilos, warps y kernels de las GPUs modernas.",
  "Paralelismo de datos moderno":
    "en la computación contemporánea, instrucciones vectoriales AVX-512 y tensores heredan la semántica SIMD unificada de las supercomputadoras históricas.",
  "Lecciones de diseño en HPC":
    "en el diseño de supercómputo, el balance entre ancho de banda de comunicación y densidad de cálculo local permanece como principio rector inmutable.",

  // CWEB
  "Filosofía de la programación literaria":
    "en la propuesta de Knuth, el código y la narrativa ensayística coexisten como un libro técnico estructurado para la comprensión humana.",
  "Dualidad fuente única (.w)":
    "en el archivo fuente unificado, un solo documento contiene tanto el texto tipográfico con fórmulas como la implementación de software.",
  "Inversión de orden estructural":
    "en la composición literaria, los conceptos se exponen en el orden conceptual más comprensible sin atarse a las restricciones top-down del compilador.",
  "Prosa intercalada y tipografía":
    "en la documentación técnica, TeX renderiza expresiones matemáticas, diagramas y descripciones precisas intercaladas entre fragmentos de código.",
  "Fragmentos nombrados como abstracción":
    "en la descomposición literaria, bloques de código nombrados reemplazan comentarios y se ensamblan en cualquier orden explicativo.",
  "Indexación automática de identificadores":
    "en el procesamiento documental, cada variable y función se cataloga en un índice alfabético exhaustivo con referencias a todas sus apariciones.",
  "Secciones numeradas automáticamente":
    "en la estructura del libro, secciones secuenciales dividen el razonamiento algorítmico sirviendo como anclas precisas para referencias cruzadas.",
  "Sintaxis @<Fragmento@>=":
    "en la definición literaria, delimitadores con arroba definen el nombre descriptivo de un fragmento de código reutilizable.",
  "Fragmentos acumulativos":
    "en la construcción progresiva, múltiples bloques bajo el mismo nombre acumulan código secuencialmente a medida que se explican detalles adicionales.",
  "Secciones estrella @* (capítulos)":
    "en la jerarquía del libro, secciones mayores encabezan partes y capítulos principales organizando programas de gran escala.",
  "Fragmentos sin nombre @c":
    "en el punto de entrada de compilación, bloques arroba-c declaran código inicial que servirá como raíz para el ensamblado del archivo C.",
  "Comentarios y texto verbatim @=":
    "en la tipografía de TeX, secuencias verbatim presentan caracteres especiales y símbolos de código sin interpretación de comandos.",
  "Proceso de Tangling":
    "en la herramienta CTANGLE, los fragmentos se leen y reordenan recursivamente eliminando la prosa para emitir código C válido con directivas de línea.",
  "Directivas #line de sincronización":
    "en la integración con herramientas, CTANGLE inyecta números de línea del archivo .w original permitiendo que depuradores apunten a la fuente literaria.",
  "Eliminación de prosa explicativa":
    "en la generación del compilador, toda la narrativa y fórmulas se omiten entregando al preprocesador de C un archivo limpio y optimizado.",
  "Manejo de macros de preprocesador":
    "en las definiciones literarias, la directiva arroba-d define constantes y macros tipográficas sincronizadas con el código generado.",
  "Soporte para código C++ (@+ y @-)":
    "en el formateador de CWEB, directivas especiales controlan indentaciones y formatos propios de clases y operadores de C++.",
  "Automatización en Makefiles y build systems":
    "en el flujo de compilación, reglas de Makefile automatizan la llamada a CTANGLE para compilar y CWEAVE para producir la documentación PDF.",
  "Proceso de Weaving":
    "en la herramienta CWEAVE, la prosa y el código se transforman en un documento TeX con resaltado sintáctico, referencias cruzadas e índices automáticos.",
  "Pretty printing automático":
    "en la presentación visual, palabras clave en negrita, identificadores en cursiva y operadores alineados embellecen el código fuente.",
  "Referencias cruzadas de fragmentos":
    "en el índice tipográfico, cada fragmento documenta las secciones precisas donde se define y todos los lugares donde es consumido.",
  "Construcción de tablas de contenido":
    "en la encuadernación digital, CWEAVE genera el sumario temático navegable de capítulos, secciones y apéndices del programa.",
  "El archivo de formato cwebmac.tex":
    "en el diseño tipográfico, un paquete de macros de TeX define dimensiones de página, fuentes y encabezados del libro de código.",
  "Generación de PDF interactivo":
    "en la publicación moderna, pdfTeX compila la salida de CWEAVE produciendo un documento con hipervínculos bidireccionales interactivos.",
  "El concepto de change file (.ch)":
    "en el control de parches literarios, bloques de sustitución adaptan el programa a plataformas específicas sin bifurcar el documento principal.",
  "Bloques de reemplazo @x, @y, @z":
    "en la aplicación de parches, el change file busca el bloque coincidente entre x e y sustituyéndolo quirúrgicamente por el contenido de y a z.",
  "Validación estricta de contexto":
    "en la seguridad del parche, CTANGLE y CWEAVE rechazan cambios si el texto original no coincide carácter por carácter previniendo parches desalineados.",
  "Capas de adaptación multiplataforma":
    "en el soporte de sistemas, archivos .ch separados mantienen variantes para Linux, Windows o embebidos conservando un único .w maestro.",
  "Facilidad de actualización del original":
    "en la evolución de software, correcciones en el archivo principal .w se propagan automáticamente mientras los change files conservan sus diferencias locales.",
  "Auditoría transparente de parches":
    "en la revisión de código, la lectura del archivo .ch expone con total transparencia las adaptaciones mínimas exigidas por el entorno.",
  "Directiva de definición @d":
    "en la parametrización literaria, directivas arroba-d declaran constantes documentadas que CTANGLE traduce como directivas define de C.",
  "Directiva de formato @f":
    "en el análisis tipográfico, arroba-f enseña a CWEAVE a tratar identificadores nuevos con el mismo estilo tipográfico de tipos nativos o palabras clave.",
  "Exclusión de términos del índice @!":
    "en la curaduría documental, marcadores especiales excluyen variables triviales para mantener el índice analítico enfocado en conceptos clave.",
  "Citas tipográficas en prosa |variable|":
    "en la integración textual, encerrar identificadores entre barras verticales aplica el formato tipográfico exacto del código dentro de la prosa.",
  "Manejo de caracteres especiales TeX":
    "en la sintaxis de escape, secuencias dobles protegen caracteres reservados permitiendo escribir fórmulas complejas sin errores de compilación.",
  "Garantía de completitud del índice":
    "en la exhaustividad literaria, ningún identificador declarado escapa al índice garantizando trazabilidad total de la obra.",
  "Depuración con LLDB y GDB sobre .w":
    "en la sesión de depuración, el depurador salta a los párrafos del archivo literario original gracias a las directivas line generadas por CTANGLE.",
  "Pruebas de software literarias":
    "en la verificación formal, casos de prueba y condiciones de borde se explican como teoremas dentro del texto antes de su ejecución.",
  "CWEB frente a herramientas docgen (Doxygen)":
    "en el contraste arquitectónico, CWEB organiza el programa alrededor de la narrativa humana mientras Doxygen extrae comentarios de estructuras técnicas.",
  "CWEB frente a Notebooks modernos (Jupyter)":
    "en la comparación evolutiva, CWEB prioriza una obra unificada e inmutable para lectura y compilación frente a la naturaleza interactiva de celdas ejecutables.",
  "Mantenibilidad a largo plazo":
    "en la preservación de software, programas escritos en CWEB continúan siendo legibles y compilables con absoluta precisión décadas después de su creación.",
  "El legado de Donald Knuth":
    "en la historia de la informática, TeX y METAFONT permanecen como monumentos vivientes del poder de la programación literaria para crear software libre de errores.",

  // Embedded C
  "CPU, buses y periféricos":
    "en la placa de silicio, el procesador se comunica con temporizadores, conversores y puertos mediante buses AHB y APB de alta velocidad.",
  "Flash, SRAM y memoria no volátil":
    "en la partición física, la memoria Flash almacena instrucciones inmutables mientras la SRAM sostiene variables de trabajo y pilas de ejecución.",
  "Startup code y vector table":
    "en el arranque eléctrico, el código de inicialización configura la tabla de vectores y copia segmentos antes de transferir el control a main.",
  "Linker scripts (.ld)":
    "en el mapa de enlace, directivas del script colocan secciones de texto, datos y bss en direcciones físicas específicas de Flash y RAM.",
  "Puntero de pila (MSP/PSP) y límites de RAM":
    "en la gestión de pila de ARM Cortex, el Main Stack Pointer y Process Stack Pointer aíslan excepciones del sistema de tareas de aplicación.",
  "Sistemas de reloj y PLL":
    "en el árbol de reloj, lazos de seguimiento de fase multiplican la frecuencia del oscilador de cristal para sincronizar periféricos y núcleos.",
  "Memory-mapped I/O (MMIO)":
    "en el mapa de memoria del microcontrolador, escribir en una dirección física concreta conmuta señales eléctricas de los pines de entrada y salida.",
  "El calificador volatile en hardware":
    "en registros de hardware que mutan fuera del hilo de la CPU, volatile fuerza lecturas directas evitando que el compilador las almacene en caché.",
  "Máscaras de bits y operaciones atómicas":
    "en la manipulación de registros, operaciones lógicas or, and y not activan banderas de control sin corromper campos adyacentes.",
  "Bit-banding y acceso directo a bits":
    "en la arquitectura Cortex-M, regiones de bit-banding mapean celdas de palabra a bits individuales permitiendo mutaciones atómicas sin lecturas previas.",
  "Barreras de memoria de hardware (DMB, DSB, ISB)":
    "en el pipeline de instrucciones, barreras de datos e instrucciones fuerzan la finalización de transferencias antes de continuar la ejecución.",
  "Definiciones CMSIS y estructuras periféricas":
    "en las cabeceras estandarizadas de ARM, estructuras de C representan registros periféricos contiguos facilitando el acceso tipado y portable.",
  "Rutinas de servicio de interrupción (ISR)":
    "en la respuesta a eventos eléctricos, la CPU interrumpe el flujo principal, ejecuta la rutina prioritaria y reanuda el superloop.",
  "Controlador de interrupciones NVIC":
    "en la gestión de prioridades, el NVIC arbitra interrupciones concurrentes y anidadas determinando la prioridad inmediata de ejecución.",
  "Latencia de interrupción y jitter":
    "en los sistemas de tiempo real, el guardado de contexto de registros introduce una latencia predecible de pocos ciclos de reloj.",
  "Interrupciones anidadas y priorización":
    "en la jerarquía de eventos, interrupciones de mayor prioridad interrumpen la atención de eventos menores asegurando respuesta a fallos críticos.",
  "Secciones críticas y desactivación temporal":
    "en la protección de recursos compartidos, desactivar momentáneamente interrupciones previene condiciones de carrera durante escrituras críticas.",
  "Compartición de datos atómica con ISRs":
    "en la comunicación con interrupciones, colas circulares sin cerrojos o variables atómicas transfieren información de forma segura a main.",
  "Controlador DMA (Direct Memory Access)":
    "en transferencias de alta velocidad, el DMA traslada bloques de datos entre periféricos y RAM sin consumir ciclos del procesador.",
  "Modo circular de DMA":
    "en la captura continua de streams, el DMA reinicia automáticamente el puntero de memoria al alcanzar el final del buffer asignado.",
  "Interrupciones Half-Transfer y Transfer-Complete":
    "en la coordinación de buffers, banderas de mitad y completitud señalan cuándo procesar una porción sin detener la adquisición.",
  "Double buffering sin carreras":
    "en la recepción continua de muestras, el DMA escribe en la mitad libre de la memoria mientras la CPU procesa la mitad ya completada.",
  "Coherencia de caché y atributos de memoria":
    "en microcontroladores con caché de datos, operaciones de limpieza e invalidación sincronizan memorias intermedias con transferencias DMA.",
  "Manejo de errores de bus en DMA":
    "en la robustez del bus, excepciones de error de transferencia capturan colisiones o accesos a regiones desalineadas en hardware.",
  "Protocolo UART y framing de bytes":
    "en la comunicación serie asíncrona, bits de inicio, datos, paridad y parada estructuran la recepción en registros FIFO de hardware.",
  "Bus serie SPI síncrono":
    "en la transferencia de alta velocidad, líneas de reloj, datos de entrada y salida transmiten paquetes en modo full-duplex sincronizados por Chip Select.",
  "Bus I2C bifilar y direccionamiento":
    "en el bus serie direccionable, señales de reloj SCL y datos SDA coordinan múltiples periféricos mediante arbitraje de maestro y esclavo.",
  "Detección de timeouts y bus hang":
    "en la recuperación de bus, temporizadores de guardia detectan líneas de datos atascadas en bajo forzando secuencias de desbloqueo manual.",
  "Control de flujo por hardware (RTS/CTS)":
    "en las líneas eléctricas serie, señales de control pausan la transmisión del transmisor cuando el receptor satura su capacidad de búfer.",
  "Superloop y máquinas de estado":
    "en el firmware determinista, un bucle continuo interroga banderas de tiempo ejecutando transiciones de estado sin sobrecoste de SO.",
  "Planificador preemptivo de FreeRTOS":
    "en el sistema operativo en tiempo real, el timer de SysTick evalúa prioridades conmutando contextos de tarea con latencia mínima.",
  "Colas de mensajes inter-tarea":
    "en la mensajería entre hilos, colas protegidas por el RTOS copian descriptores desacoplando tareas productoras de consumidoras.",
  "Semáforos binarios y mutexes en RTOS":
    "en la sincronización de tareas, primitivas de RTOS garantizan exclusión mutua de puertos físicos coordinando señales de finalización.",
  "Inversión de prioridad y herencia":
    "en la prevención de bloqueos, el mecanismo de herencia de prioridad eleva temporalmente la tarea que retiene un cerrojo compartido.",
  "Worst-Case Execution Time (WCET)":
    "en el diseño temporal estricto, el cálculo del peor camino de ejecución asegura que todas las tareas completen dentro de su plazo fatal.",
  "Modos de bajo consumo (Sleep, Stop, Standby)":
    "en la conservación energética, apagar osciladores y desenergizar periféricos reduce el consumo de microamperios en periodos de inactividad.",
  "Fuentes de despertar (Wake-up sources)":
    "en la reanudación de actividad, pulsos en pines de GPIO o alarmas de RTC despiertan al procesador devolviéndolo a su frecuencia nominal.",
  "Instrucciones WFI (Wait For Interrupt) y WFE":
    "en la detención de núcleos, instrucciones WFI suspenden el reloj de la CPU hasta la llegada de la siguiente interrupción de hardware.",
  "Presupuesto energético y duty cycling":
    "en dispositivos autónomos, ráfagas breves de procesamiento alternadas con sueño profundo extienden la vida útil de baterías por años.",
  "Restauración de relojes al despertar":
    "en la secuencia de reactivación, el firmware reconfigura multiplicadores de frecuencia antes de comunicarse con sensores externos.",
  "Watchdog independiente (IWDG)":
    "en la seguridad de hardware, un oscilador independiente fuerza el reinicio del sistema si el firmware no restablece la cuenta a tiempo.",
  "Watchdog con ventana (WWDG)":
    "en la vigilancia temporal estricta, la tarea debe refrescar el temporizador dentro de una ventana de tiempo predefinida ni antes ni después.",
  "Detector de caídas de tensión (Brown-out Reset)":
    "en la protección de alimentación, circuitos de brown-out congelan el microcontrolador en estado de reset seguro ante caídas de voltaje.",
  "Registro de causas de reinicio (RCC CSR)":
    "en la trazabilidad de arranque, banderas en registros de control identifican si el inicio se debió a reinicio manual, caída eléctrica o watchdog.",
  "Estado seguro físico ante fallo (Fail-Safe)":
    "en la seguridad funcional, resistencias pull-down y salidas desconectadas llevan la maquinaria a una postura pasiva ante fallos críticos.",
  "Bootloaders primarios y secundarios":
    "en la gestión de imágenes de software, el cargador de arranque valida firmas criptográficas antes de saltar a la aplicación en Flash.",
  "Esquema de doble partición (A/B updates)":
    "en actualizaciones inalámbricas, el firmware nuevo se escribe en el slot alterno permitiendo rollback automático si falla el arranque.",
  "Comprobación de integridad CRC32 y SHA-256":
    "en la verificación de memoria, aceleradores de hardware calculan sumas de verificación asegurando que el binario en Flash no se haya corrompido.",
  "Protección de lectura de Flash (RDP)":
    "en la protección contra ingeniería inversa, niveles de protección RDP bloquean el acceso al código a través de puertos de depuración física.",
  "Reglas MISRA-C en firmware crítico":
    "en el desarrollo automotriz e industrial, estándares MISRA-C eliminan construcciones ambiguas y operadores peligrosos del lenguaje.",
  "Protocolos de depuración SWD y JTAG":
    "en la interfaz de desarrollo, sondas de depuración leen y escriben registros de CPU y memoria mediante dos o cuatro líneas de señal.",
  "Puntos de ruptura por hardware (Hardware Breakpoints)":
    "en la inspección en vivo, comparadores de hardware detienen el procesador en direcciones específicas de Flash sin alterar el código grabado.",
  "HardFault Handler y análisis de stack":
    "en el diagnóstico de caídas, la rutina de excepción captura los registros PC y LR apilados localizando la instrucción exacta del fallo.",
  "Instrumentación ligera con Segger RTT":
    "en la telemetría sin latencia, buffers circulares en RAM transmiten texto a la PC en microsegundos sin frenar el flujo del procesador.",
  "Pruebas Hardware-in-the-Loop (HIL)":
    "en la validación física, bancos de prueba electrónicos inyectan señales de sensores reales evaluando la respuesta del firmware bajo estrés.",

  // C#
  "Value y reference types":
    "en la gestión de tipos de .NET, tipos de valor encapsulan datos directamente mientras tipos de referencia manejan punteros al heap administrado.",
  "Variables nullable y análisis de flujo":
    "en el compilador de C#, el análisis estático alerta sobre accesos a variables que podrían contener null antes de su desreferenciación.",
  "Conversiones y pattern variables":
    "en la comprobación de tipos, pattern matching evalúa la compatibilidad asignando variables fuertemente tipadas en una sola expresión.",
  "Tuples y deconstruction":
    "en la manipulación de datos ligeros, tuplas nombradas agrupan valores y los deconstruyen limpiamente en variables independientes.",
  "Enums y flags con operaciones de bits":
    "en los conjuntos de opciones, enumeraciones con atributo Flags combinan máscaras de bits mediante operadores lógicos or y and.",
  "Sintaxis Target-typed new":
    "en la simplificación de código, la palabra clave new omite la repetición del tipo cuando este se infiere directamente del contexto.",
  "Raw string literals e interpolación avanzada":
    "en el formateo de texto, literales de cadena sin formato permiten incrustar bloques de JSON multilínea sin caracteres de escape.",
  "Classes y encapsulación":
    "en la arquitectura de objetos, modificadores de acceso y constructores aseguran que las propiedades cumplan invariantes del dominio.",
  "Structs readonly y ref structs":
    "en la optimización de memoria, ref structs se confinan estrictamente a la pila impidiendo que sean promovidos al heap administrado.",
  "Records y records struct":
    "en el modelado inmutable, los records ofrecen igualdad por valor, constructores primarios y mutación no destructiva con la cláusula with.",
  "Interfaces y default interface methods":
    "en la evolución de APIs, métodos por defecto en interfaces proporcionan implementaciones de respaldo sin romper implementadores existentes.",
  "Required members y modificador init":
    "en la inicialización de objetos, modificadores required exigen inicializar propiedades clave al instanciar la clase.",
  "Primary constructors en clases y structs":
    "en la sintaxis moderna de C#, parámetros de constructor declarados en la cabecera de la clase se asignan directamente al estado interno.",
  "Jerarquías selladas (sealed)":
    "en la optimización del compilador, la palabra clave sealed bloquea la herencia permitiendo que llamadas virtuales se desvirtualicen en llamadas directas.",
  "Switch expressions exhaustivas":
    "en el control funcional, expresiones switch emparejan patrones de tipos y propiedades garantizando cobertura total de casos.",
  "Property y relational patterns":
    "en la evaluación de condiciones, patrones de propiedades comparan campos anidados y rangos numéricos sin encadenar múltiples sentencias if.",
  "List patterns y slices":
    "en el emparejamiento de colecciones, patrones de lista identifican prefijos, sufijos y elementos centrales mediante operadores de rango.",
  "Type testing y cast seguro (is/as)":
    "en la verificación de tipos, el operador is comprueba la clase y enlaza una variable tipada descartando conversiones inválidas.",
  "Patrones posicionales y Tuple patterns":
    "en el análisis multidimensional, tuplas deconstruidas evalúan combinaciones de estado de forma tabular y legible.",
  "Exceptions y exception filters (when)":
    "en la captura de fallos, cláusulas when inspeccionan el contenido del error sin desenrollar el marco de pila innecesariamente.",
  "Using declarations y await using":
    "en la gestión determinista de recursos, declaraciones using invocan automáticamente a Dispose o DisposeAsync al salir del ámbito.",
  "Generic constraints (where)":
    "en los contratos genéricos, cláusulas where restringen parámetros de tipo a interfaces, clases no administradas o constructores públicos.",
  "Varianza en interfaces (in/out)":
    "en el polimorfismo genérico, modificadores in y out habilitan covarianza y contravarianza para intercambiar colecciones de forma segura.",
  "Delegates, acciones, funciones y lambdas":
    "en la programación funcional de C#, expresiones lambda capturan estado léxico permitiendo despachar funciones como parámetros de primer orden.",
  "LINQ deferred execution":
    "en las consultas LINQ, la expresión define una canalización perezosa que solo se evalúa al recorrerla con foreach o materializarla con ToList.",
  "IEnumerable e IQueryable":
    "en la ejecución de consultas, IEnumerable opera en memoria mientras IQueryable traduce árboles de expresiones a sentencias SQL remotas.",
  "Expresiones de colección y spread operator":
    "en la inicialización unificada de C# 12, corchetes y el operador de propagación combinan arrays, listas y spans con sintaxis uniforme.",
  "Métodos de extensión y composición funcional":
    "en la modularización fluida, métodos de extensión añaden operaciones a tipos existentes sin modificar sus definiciones originales.",
  "Task y async/await":
    "en el modelo asíncrono basado en tareas, await cede el hilo al ThreadPool y reanuda la continuación una vez completada la operación de red o disco.",
  "CancellationToken y cancelación cooperativa":
    "en la propagación de interrupciones, el token de cancelación notifica a todas las tareas asíncronas para abortar limpiamente.",
  "ConfigureAwait y sincronización de contexto":
    "en la optimización de librerías, ConfigureAwait false evita el regreso forzado al hilo de UI reduciendo contención de sincronización.",
  "IAsyncEnumerable y streams asíncronos":
    "en el procesamiento reactivo de flujos, await foreach consume elementos uno a uno a medida que se generan de forma asíncrona.",
  "ValueTask e IValueTaskSource":
    "en operaciones de alto rendimiento, ValueTask evita reservar objetos Task en el heap cuando las operaciones concluyen de forma síncrona.",
  "Manejo de excepciones en Task.WhenAll":
    "en la ejecución paralela, Task.WhenAll espera todas las operaciones agregando cualquier fallo en una AggregateException trazable.",
  "Channels para productor-consumidor":
    "en la arquitectura asíncrona, canales con límite de capacidad coordinan productores y consumidores aplicando backpressure natural.",
  "Span<T>, ReadOnlySpan<T> y memoria contigua":
    "en el procesamiento de alto rendimiento, Span permite inspeccionar segmentos de memoria contigua en la pila con cero asignaciones en el heap.",
  "Memory<T> e IMemoryOwner<T>":
    "en buffers asíncronos que cruzan métodos, IMemoryOwner garantiza que la memoria alquilada vuelva ordenadamente al pool tras su consumo.",
  "ArrayPool<T> y alquiler de buffers":
    "en la mitigación de presión de recolección de basura, ArrayPool alquila y recicla matrices de bytes evitando fragmentar el Large Object Heap.",
  "Boxing y unboxing de Value Types":
    "en el rendimiento del runtime, evitar envolver tipos de valor en objetos de referencia previene asignaciones innecesarias de memoria.",
  "Source Generators en compilación":
    "en la generación estática de código, generadores de código de Roslyn analizan la sintaxis y emiten clases auxiliares en tiempo de compilación.",
  "Modificador unsafe y punteros nativos":
    "en interoperabilidad y algoritmos críticos, bloques unsafe permiten aritmética de punteros directa bajo supervisión explícita del desarrollador.",
  "Interlocked y primitivas de bajo nivel":
    "en operaciones atómicas de CPU, métodos Interlocked incrementan contadores e intercambian referencias sin coste de exclusión mutua pesada.",
  "Analizadores Roslyn y reglas de estilo":
    "en la calidad de código, analizadores estáticos inspeccionan el código en vivo aplicando reglas arquitectónicas y sugerencias de rendimiento.",
  "Pruebas unitarias con xUnit y FluentAssertions":
    "en la suite de pruebas, aserciones declarativas y verificaciones de comportamiento comprueban el cumplimiento estricto de las reglas de negocio.",
  "Falsos y mocks con interfaces pequeñas":
    "en el desacoplamiento para pruebas, dobles de prueba simulan servicios externos garantizando ejecuciones unitarias veloces y deterministas.",
  "Diseño guiado por el dominio (DDD) en C#":
    "en el modelado empresarial, entidades, objetos de valor y eventos de dominio encapsulan la lógica central del negocio con tipado riguroso.",
  "Arquitectura limpia y puertos/adaptadores":
    "en la estructura por capas, dependencias apuntan exclusivamente hacia el núcleo de la aplicación aislando interfaces de usuario y bases de datos.",
  "Pruebas de arquitectura con NetArchTest":
    "en el cumplimiento arquitectónico, pruebas unitarias verifican que ninguna capa interna referencie componentes de infraestructura externa.",
  "Benchmarking con BenchmarkDotNet":
    "en la medición de rendimiento, BenchmarkDotNet calcula con rigor estadístico nanosegundos y consumo de memoria de rutinas críticas.",

  // Visual Basic
  "Option Strict y tipado estricto":
    "en el compilador de Visual Basic, Option Strict bloquea conversiones de tipo con estrechamiento implícito exigiendo casts explícitos y seguros.",
  "Option Explicit y declaración obligatoria":
    "en la validación sintáctica, Option Explicit exige declarar todas las variables previniendo la creación de campos accidentales por erratas.",
  "Option Infer y tipos deducidos":
    "en la inferencia local de tipos, Option Infer deduce el tipo estático de la variable según su expresión inicial conservando seguridad.",
  "Variables, Dim y alcance (Scope)":
    "en la visibilidad de datos, la instrucción Dim y modificadores de acceso delimitan el ciclo de vida de variables en bloques y módulos.",
  "Procedures y Functions":
    "en la modularización del código, Sub ejecuta acciones sin retorno mientras Function devuelve un valor fuertemente tipado al llamador.",
  "Módulos estándar frente a Clases":
    "en la organización de miembros, los módulos exponen funciones estáticas accesibles globalmente mientras las clases requieren instanciación.",
  "Properties con Get y Set explícitos":
    "en la encapsulación orientada a objetos, los bloques Get y Set aplican validaciones de rango antes de mutar los campos privados de la clase.",
  "Auto-implemented Properties":
    "en la sintaxis concisa, propiedades automáticas crean getters y setters estándar sin requerir la declaración manual del campo de respaldo.",
  "Constructores Sub New y sobrecargas":
    "en la inicialización de objetos, Sub New establece invariantes obligatorias invocando a MyBase.New para clases derivadas.",
  "Herencia con Inherits y Overrides":
    "en el polimorfismo de VB.NET, Overrides permite a clases hijas especializar métodos marcados como Overridable en la clase padre.",
  "Interfaces con Implements explícito":
    "en la adhesión a contratos, la cláusula Implements vincula explícitamente procedimientos de la clase a los métodos declarados por la interfaz.",
  "Estructuras (Structure) y Value Types":
    "en los datos ligeros, estructuras se transmiten por valor en la memoria de la pila siendo ideales para coordenadas y unidades matemáticas.",
  "Eventos con Event y RaiseEvent":
    "en el patrón de observación, RaiseEvent despacha notificaciones tipadas a todos los delegados suscritos en el entorno de la aplicación.",
  "Cláusula Handles declarativa":
    "en los formularios de Windows, la instrucción Handles conecta eventos de botones y controles a métodos gestores en tiempo de compilación.",
  "Suscripción dinámica con AddHandler y RemoveHandler":
    "en la gestión de listeners en runtime, AddHandler y RemoveHandler conectan y desconectan eventos previniendo fugas por referencias retenidas.",
  "Custom Events y almacenamiento de delegates":
    "en la optimización de memoria, Custom Events almacenan suscriptores en estructuras especializadas reduciendo el sobrecoste en listas masivas.",
  "WithEvents y variables con eventos":
    "en los campos con escucha de eventos, WithEvents habilita la conexión automática de eventos mediante la sintaxis Handles en la clase.",
  "Eliminación de suscripciones en Dispose":
    "en la limpieza del ciclo de vida, desvincular handlers en el método Dispose garantiza que formularios antiguos sean reclamados por el recolector de basura.",
  "Colecciones genéricas List(Of T) y Dictionary":
    "en las colecciones tipadas, listas y diccionarios genéricos almacenan elementos sin sobrecoste de boxing ni riesgo de conversión inválida.",
  "Sintaxis declarativa de LINQ (From ... In ... Select)":
    "en la manipulación de colecciones, consultas legibles similares a SQL filtran y proyectan datos tipados en memoria.",
  "Operadores Where, Order By y Group By":
    "en el procesamiento de datos, cláusulas de LINQ ordenan y agrupan colecciones estructuradas con sintaxis declarativa limpia.",
  "Ejecución diferida en LINQ":
    "en la evaluación de consultas, la ejecución diferida garantiza que el filtrado ocurra al iterar el resultado y no en la definición.",
  "Anonymous Types y proyecciones":
    "en la proyección de datos, tipos anónimos seleccionan columnas y cálculos intermedios sin crear clases de modelo manuales.",
  "Funciones Lambda multilínea y de una línea":
    "en las expresiones funcionales, operadores Function y Sub anónimos pasan comportamiento encapsulado a métodos y eventos.",
  "Literales XML incrustados en código":
    "en la integración de datos de VB.NET, árboles XML se escriben directamente en el editor con validación de sintaxis en tiempo de diseño.",
  "Expresiones embebidas <%= %> en XML":
    "en la interpolación de datos XML, expresiones embebidas insertan variables dinámicas dentro de nodos y atributos de forma tipada.",
  "Ejes XML y navegación de nodos (...<nodo>)":
    "en la consulta de documentos XML, operadores de eje permiten navegar hijos y atributos directamente mediante sintaxis nativa.",
  "LINQ to XML y transformaciones de datos":
    "en la manipulación documental, objetos XElement y XDocument leen, modifican y serializan estructuras XML con facilidad expresiva.",
  "Serialización tipada de esquemas":
    "en la persistencia de datos, la validación contra esquemas garantiza que los documentos XML generados cumplan contratos formales.",
  "Casos de uso en configuración y Office":
    "en la automatización de escritorio, literales XML simplifican la generación de documentos para suites ofimáticas y archivos de configuración.",
  "Modificador Async y operador Await":
    "en la asincronía de Visual Basic, Async y Await delegan operaciones de entrada y salida liberando el hilo principal de la interfaz.",
  "Task y Task(Of TResult)":
    "en las promesas asíncronas, objetos Task representan trabajos pendientes en segundo plano integrándose con el ecosistema de .NET.",
  "CancellationToken en bucles asíncronos":
    "en la cancelación de tareas, tokens de cancelación verifican solicitudes de parada abortando bucles asíncronos de forma ordenada.",
  "Control de SynchronizationContext en WinForms":
    "en la respuesta a interfaces de usuario, Await retoma la ejecución en el contexto de sincronización de UI actualizando controles de pantalla sin Invoke.",
  "Manejo de excepciones con Try...Catch...Finally":
    "en la robustez del código, bloques Try y Catch capturan fallos y Finally asegura la liberación obligatoria de recursos abiertos.",
  "Uso de bloques Using en recursos asíncronos":
    "en la desasignación garantizada, bloques Using llaman a Dispose automáticamente incluso si ocurren excepciones durante la ejecución.",
  "Ciclo de vida del Form (Load, Shown, FormClosing)":
    "en el ciclo de ventanas WinForms, eventos Load y FormClosing coordinan la inicialización de controles y la persistencia de cambios.",
  "Data Binding tipado con BindingSource":
    "en el enlace de datos, componentes BindingSource sincronizan colecciones de objetos de dominio con grillas y cajas de texto automáticamente.",
  "Patrón Model-View-Presenter (MVP)":
    "en la arquitectura de escritorio, el Presenter coordina las reglas del negocio desacoplando los formularios de la lógica de prueba.",
  "Evitar congelamiento de UI con BackgroundWorker o Task":
    "en la fluidez de ventanas, tareas en segundo plano procesan operaciones pesadas evitando que la interfaz gráfica deje de responder.",
  "Validación de controles con ErrorProvider":
    "en la experiencia de usuario, componentes ErrorProvider muestran iconos de alerta visual junto a campos con datos inválidos.",
  "Arquitectura por componentes y UserControls":
    "en la reutilización visual, controles de usuario modulares empaquetan paneles interactivos para integrarse en múltiples formularios.",
  "Bibliotecas de clases interoperables con C#":
    "en el ecosistema .NET unificado, ensamblados generados en Visual Basic se consumen transparentemente desde proyectos en C# y viceversa.",
  "Consumo de metadatos Nullable de C#":
    "en la compatibilidad entre lenguajes, el compilador interpreta anotaciones de nulabilidad de C# alertando sobre posibles referencias nulas.",
  "Interoperabilidad con COM nativo y ActiveX":
    "en la modernización gradual, wrappers de interoperabilidad COM permiten a aplicaciones .NET comunicarse con componentes antiguos de Windows.",
  "Pruebas unitarias con MSTest y xUnit":
    "en la garantía de calidad, pruebas automatizadas validan métodos de presentadores y servicios de datos de forma aislada.",
  "Estrategia de modernización desde VB6":
    "en la evolución empresarial, aislar llamadas COM y migrar formularios hacia clases tipadas de .NET asegura continuidad operativa.",
  "Perfilado de memoria y compilación cruzada":
    "en el diagnóstico de producción, analizadores de memoria de Visual Studio detectan formularios retenidos y optimizan el consumo de RAM.",
};

/**
 * Explicaciones informativas y descriptivas de las animaciones visuales para colecciones de Paradigmas Funcionales y JVM (PR 7).
 */
const FUNCTIONAL_JVM_VISUAL_EXPLANATIONS: Record<string, string> = {
  // Dart
  "Inferencia var, final y const":
    "en la asignación de variables de Dart, var infiere el tipo dinámico inicial, final congela la referencia en runtime y const materializa el valor en tiempo de compilación.",
  "Sound Null Safety y sistema de tipos":
    "en el analizador estático de Dart, el sistema de tipos garantiza que variables no anulables nunca alojen null previniendo fallos en tiempo de ejecución.",
  "Promoción de tipos y análisis de flujo":
    "en la comprobación condicional, comprobar que una variable no sea nula promueve automáticamente su tipo al subtipo concreto en esa rama léxica.",
  "Operadores de navegación y asignación segura":
    "en la navegación condicional, operadores signo de interrogación punto y doble interrogación acceden a miembros o inyectan valores de respaldo seguros.",
  "Inicialización tardía con late":
    "en la asignación diferida de Dart, el modificador late posterga la inicialización del campo no anulable hasta su primer acceso verificándolo en runtime.",
  "Records posicionales y nombrados":
    "en las estructuras inmutables de Dart 3, records agrupan valores heterogéneos con tipado estricto sin sobrecoste de clases auxiliares.",
  "Desestructuración de tuplas y objetos":
    "en la extracción declarativa, la desestructuración asigna campos de records y colecciones directamente a variables locales en una sola sentencia.",
  "Pattern Matching en Switch Expressions":
    "en el control funcional, expresiones switch emparejan patrones de datos exhaustivos devolviendo un valor calculado sin sentencias break imperativas.",
  "Guard Clauses con cláusula when":
    "en los filtros de patrones, la cláusula when añade condiciones booleanas adicionales refinando la coincidencia antes de activar la rama.",
  "Clases Sealed para jerarquías cerradas":
    "en el modelado algebraico de Dart, el modificador sealed obliga a que todos los subtipos residan en la misma biblioteca habilitando switches exhaustivos.",
  "Mixins y reutilización con with":
    "en la composición de clases, mixins inyectan comportamiento y métodos reutilizables mediante linealización limpia sin herencia múltiple.",
  "Extension Methods sobre bibliotecas":
    "en la extensión fluida de APIs, métodos de extensión añaden operaciones convenientes a clases cerradas sin mutar el código fuente original.",
  "Arquitectura de dos colas del Event Loop":
    "en el bucle de eventos de Dart, la cola de microtareas se vacía prioritariamente antes de que el motor atienda la cola de eventos de temporizadores e I/O.",
  "Microtasks y scheduleMicrotask":
    "en la programación de microtareas, scheduleMicrotask encola cómputos inmediatos que se ejecutan antes del siguiente ciclo del bucle de eventos.",
  "Futures y estados uncompleted/completed":
    "en el modelo asíncrono de Dart, un Future transita de estado pendiente a completado con valor exitoso o excepción mediante async y await.",
  "StreamController y despacho reactivo":
    "en el flujo de datos reactivo, el StreamController gestiona oyentes, pausas y emisiones de eventos continuos a través de un canal tipado.",
  "Generadores asíncronos async* y yield":
    "en las secuencias asíncronas, funciones generadoras async* emiten valores perezosamente con yield a medida que se demandan por el consumidor.",
  "Arquitectura de Isolates sin memoria compartida":
    "en la concurrencia de Dart, los isolates se ejecutan en hilos nativos independientes con sus propios montículos de memoria evitando carreras de datos.",
  "Canales de comunicación SendPort y ReceivePort":
    "en la mensajería entre isolates, puertos de envío y recepción transfieren mensajes inmutables serializados con cero contención de cerrojos.",
  "Isolate.spawn para workers persistentes":
    "en los procesos secundarios, Isolate.spawn inicia un worker de larga vida que procesa eventos continuos en segundo plano.",
  "Isolate.run para cómputo intensivo puntual":
    "en las tareas pesadas de CPU, Isolate.run despacha una función a un hilo temporal retornando el resultado al isolate principal con liberación automática.",
  "Modo JIT para desarrollo iterativo rápido":
    "en el entorno de desarrollo, la máquina virtual de Dart compila Just-In-Time permitiendo inyectar cambios de código con recarga en caliente en milisegundos.",
  "Modo AOT a código binario nativo":
    "en la compilación de producción, Dart AOT genera código máquina optimizado para procesadores ARM64 y x86_64 con arranque instantáneo.",
  "Arquitectura de Foreign Function Interface (FFI)":
    "en la interoperabilidad nativa, dart:ffi enlaza y ejecuta funciones compiladas en C o Rust directamente con acceso tipado a punteros y structs.",

  // Prolog
  "SWI-Prolog estable":
    "en el entorno de ejecución lógica, la máquina virtual de SWI-Prolog carga la base de conocimiento y resuelve consultas interactivas.",
  "Top level":
    "en la consola interactiva de Prolog, la consulta busca sustituciones unificables mostrando bindings y permitiendo pedir soluciones alternativas.",
  "Átomos y números":
    "en los términos primitivos de Prolog, constantes simbólicas y literales numéricos representan identidades inmutables en la base de datos lógica.",
  "Variables":
    "en las variables lógicas, identificadores en mayúscula representan incógnitas que reciben bindings universales durante la unificación.",
  "Términos compuestos":
    "en las estructuras de Prolog, un functor con aridad fija agrupa argumentos modelando entidades relacionales y árboles sintácticos.",
  "Listas, pares y colas abiertas":
    "en las secuencias lógicas, la sintaxis cabeza-cola descompone listas y colas abiertas cuya cola sin instanciar permite extensiones en tiempo constante.",
  "Hechos":
    "en la base de conocimiento, los hechos afirman relaciones verdaderas incondicionales que sirven como axiomas elementales de la demostración.",
  "Reglas":
    "en el razonamiento deductivo, una regla declara una conclusión válida cuando todos los objetivos de su cuerpo se demuestran secuencialmente.",
  "Consultas y objetivos":
    "en la resolución de preguntas, el motor busca cláusulas cuyas cabezas unifiquen con la meta avanzando por el árbol de prueba.",
  "Unificación implícita":
    "en el emparejamiento de términos, la unificación resuelve ecuaciones simbólicas ligando variables libres a valores compatibles.",
  "dif/2 frente a \\=/2":
    "en la restricción declarativa, dif impone una desigualdad permanente entre variables libres que persiste incluso tras unificaciones futuras.",
  "Puntos de elección y trail":
    "en la pila de elección de Prolog, los choice points registran ramas alternas mientras el trail almacena bindings a deshacer en backtracking.",
  "Búsqueda en profundidad":
    "en el recorrido del árbol SLD, el motor desciende rama por rama explorando primero el subobjetivo más a la izquierda.",
  "Generadores y verificadores":
    "en el diseño relacional, un predicado genera candidatos sucesivos mientras metas subsiguientes verifican restricciones de dominio.",
  "Relaciones reversibles":
    "en la programación lógica pura, un predicado opera bidireccionalmente deduciendo entradas a partir de salidas o comprobando relaciones.",
  "Caso base":
    "en la recursión lógica, la cláusula base establece la condición de parada resolviendo el problema para la estructura mínima.",
  "Paso recursivo":
    "en la inducción computacional, el paso recursivo reduce el argumento estructural manteniendo invariantes demostrables en cada paso.",
  "Listas diferencia":
    "en la concatenación en O(1), un par de listas con cola abierta conecta secuencias sin recorrer elementos intermedios.",
  "Cuts verdes y rojos":
    "en el operador de poda cut, los cuts verdes eliminan alternativas redundantes sin cambiar respuestas mientras los rojos alteran la semántica lógica.",
  "Evaluación con is/2":
    "en la aritmética de Prolog, el operador is fuerza la evaluación numérica de la expresión derecha ligando el resultado a la variable izquierda.",
  "findall/3":
    "en la agregación de soluciones, findall agota el backtracking reuniendo todas las sustituciones exitosas en una lista de resultados.",
  "Reglas -->":
    "en las gramáticas de cláusulas definidas, la notación de flecha expande reglas gramaticales a predicados con pares de listas diferencia.",
  "Variables de dominio finito":
    "en CLP(FD), las variables delimitan rangos enteros permitiendo que los propagadores de restricciones reduzcan dominios antes de enumerar.",
  "Warren Abstract Machine":
    "en la arquitectura interna de Prolog, la WAM implementa registros, marcos de entorno y choice points para ejecutar lógica a alta velocidad.",
  "Modelo Byrd de cuatro puertos":
    "en el depurador de Prolog, el modelo de cuatro puertos rastrea eventos de call, exit, redo y fail a lo largo del árbol de resolución.",

  // Haskell
  "Funciones puras":
    "en el paradigma funcional puro de Haskell, una función produce siempre el mismo resultado para las mismas entradas sin efectos colaterales observables.",
  "Currying":
    "en la aplicación parcial, toda función toma un único argumento devolviendo una nueva función que espera los argumentos restantes.",
  "Inferencia Hindley-Milner":
    "en el sistema de tipos estático, el algoritmo de inferencia deduce los tipos más generales posibles sin exigir anotaciones explícitas.",
  "Tipos algebraicos":
    "en el modelado algebraico de Haskell, tipos suma y producto modelan alternativas y tuplas con precisión formal matemáticamente cerrada.",
  "Pattern matching":
    "en la desestructuración funcional, el emparejamiento de patrones examina la estructura del constructor bifurcando hacia la rama correspondiente.",
  "No estricta y perezosa":
    "en la evaluación perezosa de Haskell, las expresiones no se calculan hasta que su resultado es estrictamente requerido por la salida.",
  "Thunks":
    "en el runtime de GHC, los thunks encapsulan cómputos suspendidos en el heap que se evalúan solo cuando su valor se demanda.",
  "Normal forms":
    "en la reducción de expresiones, la forma normal débilmente evaluada reduce el valor hasta el constructor exterior sin evaluar argumentos internos.",
  "Typeclasses":
    "en el polimorfismo ad-hoc, las typeclasses definen contratos de comportamiento que distintos tipos concretos implementan independientemente.",
  "Functor":
    "en la abstracción de Functor, la función fmap proyecta transformaciones puras sobre estructuras preservando su forma exterior inmutable.",
  "Applicative":
    "en la computación de Applicative, funciones envueltas en un contexto se aplican sobre valores dentro del mismo contexto combinando efectos.",
  "Monad":
    "en la secuenciación de efectos, el operador bind encadena transformaciones dependientes donde el siguiente paso depende del valor extraído previo.",
  "Maybe y Either":
    "en el manejo de errores sin excepciones, Maybe representa presencia opcional y Either transporta diagnósticos de fallo en su rama Left.",
  "IO":
    "en la separación de pureza, la mónada IO encapsula efectos de entrada y salida manteniéndolos aislados del núcleo computacional puro.",
  "STM y concurrencia":
    "en la memoria transaccional de software, bloques atómicos STM coordinan accesos concurrentes revirtiendo transacciones ante conflictos.",
  "QuickCheck":
    "en las pruebas basadas en propiedades, QuickCheck genera cientos de casos aleatorios verificando invariantes y reduciendo contraejemplos mínimos.",

  // Kotlin
  "Val, var e inferencia":
    "en la declaración de variables de Kotlin, val impone referencias inmutables mientras var admite reasignaciones con inferencia estática.",
  "Null safety":
    "en el sistema de tipos de Kotlin, tipos anulables con interrogación exigen verificación explícita antes de desreferenciar métodos.",
  "Funciones y lambdas":
    "en la programación idiomática, funciones de orden superior y trailing lambdas permiten componer transformaciones fluidas y DSLs limpias.",
  "Clases de datos":
    "en el modelado inmutable, data classes generan automáticamente métodos equals, hashCode, toString y operaciones copy con sintaxis concisa.",
  "Sealed classes":
    "en las jerarquías algebraicas de Kotlin, sealed classes restringen herencia permitiendo que sentencias when evalúen todos los subtipos sin else.",
  "Tipos plataforma":
    "en la interoperabilidad con Java, tipos con signo de exclamación advierten sobre contratos de nulabilidad no especificados en la biblioteca externa.",
  "Inline functions":
    "en la optimización del compilador, funciones inline incrustan el cuerpo de la lambda en el sitio de llamada eliminando sobrecostes de objetos temporales.",
  "Extension functions":
    "en la ampliación de contratos, funciones de extensión dotan de nuevas operaciones a clases existentes respetando la visibilidad del paquete.",
  "Generics y variance":
    "en los tipos genéricos de Kotlin, modificadores out e in controlan covarianza y contravarianza en el sitio de declaración de la interfaz.",
  "Coroutines":
    "en la asincronía ligera de Kotlin, corutinas suspenden la ejecución sin bloquear hilos del sistema operativo conmutando tareas en microsegundos.",
  "Flow":
    "en los streams asíncronos reactivos, Flow emite valores secuenciales de forma fría suspendiendo el productor si el consumidor no está listo.",
  "Structured concurrency":
    "en la concurrencia estructurada, coroutineScope garantiza que tareas hijas completen o cancelen limpiamente antes de que retorne el padre.",
  "Dispatchers":
    "en la asignación de hilos, dispatchers Main, IO y Default canalizan corutinas hacia pools de procesador o interfaces según la naturaleza del trabajo.",
  "Kotlin Multiplatform":
    "en la arquitectura compartida, código común de lógica y dominio se compila nativamente a JVM, Android, iOS y JavaScript sin duplicación.",

  // Java
  "Tipos primitivos y referencias":
    "en la representación de datos de la JVM, tipos primitivos residen directamente en la pila mientras referencias manejan punteros al heap.",
  "Clases y records":
    "en el modelado moderno de Java, records introducen portadores de datos inmutables y transparentes con constructores canónicos automáticos.",
  "Interfaces":
    "en los contratos polimórficos de Java, interfaces declaran métodos abstractos y default methods asegurando evolución binaria compatible.",
  "Bytecode":
    "en la portabilidad de Java, el compilador javac transforma el código fuente en instrucciones estándar de bytecode ejecutadas por la JVM.",
  "Class loading":
    "en la carga dinámica, cargadores jerárquicos de clases localizan, verifican y enlazan bytecode en memoria antes de permitir su ejecución.",
  "Heap y garbage collection":
    "en la administración de memoria, recolectores generacionales como G1 y ZGC recuperan objetos inalcanzables con pausas submilimétricas.",
  "Collections":
    "en la biblioteca estándar de colecciones, interfaces List, Set y Map proveen estructuras indexadas y tablas hash con soporte de inmutabilidad.",
  "Generics":
    "en el sistema de tipos de Java, comodines de tipo con extends y super aplican el principio PECS garantizando seguridad en colecciones genéricas.",
  "Streams":
    "en el procesamiento declarativo, canalizaciones de Streams componen filtros, mapas y reducciones evaluándose de forma perezosa sobre colecciones.",
  "I/O y NIO":
    "en la entrada y salida de alto rendimiento, buffers y canales no bloqueantes de Java NIO transfieren bloques de datos sin bloqueo de hilos.",
  "Threads":
    "en la concurrencia nativa, hilos de plataforma gestionan stacks dedicados del sistema operativo para ejecutar tareas independientes.",
  "Executors":
    "en la administración de pools, ExecutorService desacopla la sumisión de tareas de la asignación y reciclaje de hilos de procesamiento.",
  "CompletableFuture":
    "en la programación asíncrona no bloqueante, CompletableFuture compone promesas de ejecución reactiva encadenando transformaciones y recuperaciones.",
  "Java Flight Recorder":
    "en el diagnóstico de producción, JFR registra eventos de bajo nivel de la JVM sobre allocations, pausas de GC y bloqueos con impacto casi nulo.",

  // R
  "Vectores":
    "en la unidad elemental de R, vectores homogéneos almacenan secuencias numéricas, lógicas o textuales sobre las que operan todas las funciones.",
  "Tipos y NA":
    "en los datos incompletos de R, el valor centinela NA propaga ausencia de forma segura en cálculos matemáticos sin convertirse en cero.",
  "Matrices y arrays":
    "en la estructura multidimensional, matrices ordenan vectores en filas y columnas mediante atributos de dimensión optimizados para álgebra lineal.",
  "Data frames":
    "en el almacenamiento tabular, un data frame agrupa vectores de igual longitud como columnas heterogéneas representando observaciones estadísticas.",
  "Recycling":
    "en las operaciones vectoriales, R reutiliza y extiende automáticamente vectores de menor longitud para emparejarlos con secuencias mayores.",
  "Vectorización":
    "en el cómputo de alto rendimiento, funciones vectorizadas aplican transformaciones en bucles nativos de C internos sin loops manuales en R.",
  "Lexical scoping":
    "en la búsqueda de variables, entornos anidados resuelven identificadores buscando hacia los marcos padres según el punto de definición léxica.",
  "Lazy evaluation":
    "en los argumentos de función de R, las promesas se evalúan únicamente en el instante en que el valor es consultado por primera vez.",
  "Copy-on-modify":
    "en la mutación de objetos, R duplica la estructura de datos únicamente cuando un objeto compartido sufre una modificación conservando inmutabilidad.",
  "Modelos lineales":
    "en el ajuste estadístico, la función lm resuelve mínimos cuadrados ordinarios ajustando coeficientes a partir de fórmulas sintácticas.",
  "Quarto y R Markdown":
    "en la publicación científica reproducible, documentos unificados entrelazan prosa, código estadístico y gráficos generados dinámicamente.",

  // Assembly / Ensamblador
  "ISA y microarquitectura":
    "en la frontera de hardware, la arquitectura de conjunto de instrucciones define las instrucciones binarias y registros visibles para el programador.",
  "Registros":
    "en el procesador de alta velocidad, registros de propósito general sostienen operandos inmediatos con latencia de acceso de un solo ciclo.",
  "Flags":
    "en el registro de estado RFLAGS, banderas de cero, acarreo y signo registran el resultado de la última operación aritmética guiando saltos.",
  "Memoria direccionable":
    "en el direccionamiento por registros, cálculos de desplazamiento base y escala resuelven la dirección lineal en bytes del operando en memoria.",
  "Ciclo fetch-decode-execute":
    "en la unidad de control de la CPU, la instrucción se extrae de la caché, se decodifica en microoperaciones y se ejecuta en las ALUs.",
  "Pila":
    "en la memoria de ejecución LIFO, el puntero rsp desciende al apilar registros y asciende al restaurar valores mediante instrucciones push y pop.",
  "Call y return":
    "en el salto a subrutinas, call apila la dirección de retorno antes de transferir el control y ret desapila la dirección para reanudar el flujo.",
  "Calling convention":
    "en la convención System V AMD64, los primeros seis argumentos enteros se transfieren en registros rdi, rsi, rdx, rcx, r8 y r9 antes de recurrir a la pila.",
  "Syscalls":
    "en la transición a modo kernel, la instrucción syscall conmuta el nivel de privilegio de la CPU invocando servicios del sistema operativo.",
  "SIMD":
    "en el procesamiento vectorial de CPU, instrucciones AVX aplican la misma operación aritmética sobre múltiples datos en registros anchos simultáneamente.",
  "Atomics":
    "en la sincronización de hardware, el prefijo lock bloquea el bus de memoria garantizando atomicidad indivisible en instrucciones de modificación.",

  // Erlang
  "Términos":
    "en los tipos de datos de la BEAM, átomos, tuplas, listas y binarios representan información inmutable empaquetada para paso de mensajes.",
  "Procesos ligeros":
    "en el runtime de Erlang, procesos livianos gestionan unos pocos kilobytes de memoria aislada conmutando contextos a velocidad masiva.",
  "Mailboxes":
    "en la recepción de mensajes, cada proceso almacena eventos entrantes en un buzón privado en cola ordenada esperando su lectura.",
  "Selective receive":
    "en la extracción de eventos, pattern matching en la cláusula receive selecciona mensajes prioritarios dejando los demás pendientes en el buzón.",
  "Schedulers":
    "en el motor de la BEAM, un scheduler por núcleo de CPU planifica procesos de forma expulsiva con recolección de basura completamente aislada.",
  "GenServer":
    "en el patrón cliente-servidor de OTP, GenServer estandariza el manejo de llamadas síncronas, emisiones asíncronas y ciclo de vida de procesos.",
  "Supervisors":
    "en la tolerancia a fallos, árboles de supervisores monitorean procesos hijos reiniciándolos automáticamente según estrategias de resiliencia predefinidas.",
  "Links y monitors":
    "en la supervisión de procesos, enlaces bidireccionales propagan fallos mientras monitores unidireccionales reciben notificaciones ante caídas.",
  "Crash reports":
    "en el diagnóstico de fallos, cuando un proceso falla la BEAM emite un reporte con stack trace, estado interno y causas del error.",
  "Hot code loading":
    "en la disponibilidad continua, la máquina virtual carga módulos nuevos en caliente permitiendo que procesos activos migren de versión sin detenerse.",

  // Lisp
  "S-expressions":
    "en la sintaxis homoicónica de Lisp, listas entre paréntesis representan tanto los datos del programa como el código fuente ejecutable.",
  "Átomos y listas":
    "en los bloques constructores, símbolos atómicos y celdas cons encadenadas forman las estructuras jerárquicas universales del lenguaje.",
  "Quote":
    "en el control de evaluación, la comilla simple o quote previene que el evaluador interprete una lista como llamada a función conservándola como dato puro.",
  "Evaluación":
    "en el evaluador de Lisp, el primer elemento de la lista se resuelve como operador y los elementos restantes se evalúan como argumentos pasados.",
  "REPL":
    "en el ciclo de desarrollo interactivo, el bucle de lectura, evaluación, impresión y repetición permite redefinir funciones en caliente en la imagen viva.",
  "Bindings léxicos":
    "en el alcance de variables, la forma let establece ligaduras léxicas privadas que aíslan el entorno interno de modificaciones externas.",
  "Macros":
    "en la metaprogramación de Lisp, las macros reciben formas sintácticas como datos y las reescriben antes de la fase de compilación del programa.",
  "Macroexpansion":
    "en la inspección sintáctica, macroexpand-1 expone el código generado por la macro permitiendo verificar transformaciones antes de su ejecución.",
  "Hygiene en Scheme":
    "en la higiene sintáctica de Scheme, syntax-rules renombra identificadores automáticamente impidiendo colisiones accidentales de variables con el llamador.",
  "Conditions":
    "en el sistema de señalización de errores, condiciones notifican discrepancias sin desenrollar el marco de pila permitiendo recuperaciones flexibles.",
  "Restarts":
    "en la recuperación guiada de Common Lisp, manejadores seleccionan estrategias de reinicio interactivas retomando la ejecución en el punto del fallo.",

  // Perl
  "Scalars":
    "en los tipos elementales de Perl, escalares con prefijo dólar almacenan números, cadenas de texto o referencias opacas de memoria.",
  "Arrays":
    "en las listas indexadas, arrays con arroba administran secuencias ordenadas de escalares con operaciones rápidas de inserción y extracción.",
  "Hashes":
    "en las tablas asociativas, hashes con porcentaje mapean claves de texto a valores escalares con búsquedas inmediatas en memoria.",
  "Contexto escalar y lista":
    "en la semántica de evaluación de Perl, una misma expresión devuelve un conteo numérico o una secuencia completa según el contexto donde se invoca.",
  "Regex":
    "en el motor de expresiones regulares, patrones textuales avanzados buscan y sustituyen secuencias complejas con soporte nativo en el lenguaje.",
  "Capture groups":
    "en la extracción de cadenas, paréntesis en la expresión regular capturan fragmentos de texto asignándolos a variables posicionales numeradas.",
  "Referencias":
    "en el direccionamiento indirecto, barras invertidas crean punteros a estructuras existentes permitiendo anidar arrays y hashes multidimensionales.",
  "strict y warnings":
    "en la programación segura, pragmas strict y warnings obligan a declarar variables con my alertando sobre errores potenciales en tiempo de compilación.",
  "Pruebas TAP":
    "en el protocolo de pruebas de Perl, Test Anything Protocol emite líneas estandarizadas con diagnósticos de aserciones para integración continua.",

  // Raku
  "Sigils y containers":
    "en la semántica de contenedores de Raku, sigilos denotan la forma estructural del dato mientras contenedores escalares gestionan mutabilidad.",
  "Tipos graduales":
    "en el sistema de tipos de Raku, anotaciones de tipo opcionales combinan la flexibilidad dinámica con la verificación estática estricta.",
  "Junctions":
    "en la lógica multivariante, uniones all, any y one evalúan combinaciones de condiciones simultáneas con sintaxis matemática declarativa.",
  "Signatures":
    "en las firmas de subrutinas, contratos avanzados validan tipos de argumentos, valores por defecto y parámetros nombrados automáticamente.",
  "Multi dispatch":
    "en el despacho múltiple de Raku, el motor evalúa las firmas de todos los candidatos invocando la implementación más específica para los argumentos.",
  "Grammars":
    "en el motor de análisis sintáctico de Raku, gramáticas estructuradas descomponen reglas lingüísticas en componentes modulares y legibles.",
  "Tokens":
    "en el reconocimiento léxico, tokens emparejan secuencias de caracteres sin retroceso automático optimizando la velocidad del parser.",
  "Rules":
    "en el parsing avanzado, rules manejan espacios en blanco y retroceso controlado estructurando gramáticas complejas de lenguajes formales.",
  "Promise":
    "en la asincronía composable, objetos Promise representan valores futuros que pueden combinarse con operadores start, then y anyof.",
  "Supply":
    "en los flujos reactivos de Raku, canales Supply transmiten streams asíncronos de eventos a oyentes suscritos mediante el operador tap.",

  // Scala
  "Vals y vars":
    "en la declaración de identificadores de Scala, val establece ligaduras inmutables constantes mientras var permite mutaciones de estado.",
  "Classes y case classes":
    "en el modelado orientado a objetos, case classes proveen constructores primarios, inmutabilidad por defecto y desestructuración en patrones.",
  "Enums":
    "en las definiciones algebraicas de Scala 3, enums declaran familias de casos cerrados con soporte integrado para tipos algebraicos de datos.",
  "Traits":
    "en la composición de comportamiento, traits permiten herencia múltiple modular resolviendo linealizaciones de métodos sin conflictos.",
  "Contextual abstractions":
    "en la resolución de contexto de Scala 3, cláusulas given y using inyectan dependencias y typeclasses de forma limpia en tiempo de compilación.",
  "For comprehensions":
    "en la composición monádica, for comprehensions transforman sintaxis imperativa en llamadas encadenadas de flatMap, map y withFilter.",
  "Futures":
    "en la asincronía sobre la JVM, Futures representan cómputos asíncronos concurrentes que se completan en ExecutionContexts dedicados.",
};

/**
 * Colecciones con audio narraciones didácticas activas.
 * PR 1: Interfaces, Web y Móvil (9 colecciones + javascript base).
 * PR 2: Plataformas y Servidores (10 colecciones).
 * PR 3: Datos y Bases de Datos (10 colecciones).
 * PR 4: Fundamentos de la Computación (5 colecciones).
 * PR 5: Lenguajes Web y Modernos (6 colecciones).
 * PR 6: Familia C, Embebidos y Compilados (8 colecciones).
 * PR 7: Paradigmas Funcionales y JVM (12 colecciones).
 */
export const AUDIO_ENABLED_COLLECTIONS = new Set<string>([
  // Base y PR 1
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
  // PR 2: Plataformas y Servidores
  "backend",
  "apis",
  "nodejs",
  "laravel",
  "n8n",
  "dotnet",
  "mediapipe",
  "firebase",
  "android",
  "django",
  // PR 3: Datos y Bases de Datos
  "databases",
  "bases-datos",
  "sql",
  "sql-server",
  "nosql",
  "state-management",
  "gestion-estado",
  "xml",
  "xsd",
  "json",
  "blockchain",
  "artificial-intelligence",
  "ia",
  "inteligencia-artificial",
  "xml-xsd-json",
  // PR 4: Fundamentos de la Computación
  "programming-fundamentals",
  "fundamentos-programacion",
  "algorithms",
  "algoritmos",
  "mathematics",
  "matematicas-programacion",
  "math-cs",
  "methodologies",
  "metodologias-desarrollo",
  "scratch",
  // PR 5: Lenguajes Web y Modernos
  "typescript",
  "python",
  "go",
  "rust",
  "ruby",
  "php",
  // PR 6: Familia C, Embebidos y Compilados
  "c",
  "cpp",
  "c-sharp",
  "objective-c",
  "c-star",
  "cweb",
  "embedded-c",
  "visual-basic",
  // PR 7: Paradigmas Funcionales y JVM
  "dart",
  "prolog",
  "haskell",
  "kotlin",
  "java",
  "r",
  "assembly",
  "ensamblador",
  "erlang",
  "lisp",
  "perl",
  "raku",
  "scala",
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
    INTERFACES_VISUAL_EXPLANATIONS[concept.title] ??
    PLATFORMS_VISUAL_EXPLANATIONS[concept.title] ??
    DATA_VISUAL_EXPLANATIONS[concept.title] ??
    FUNDAMENTALS_VISUAL_EXPLANATIONS[concept.title] ??
    MODERN_LANGUAGES_VISUAL_EXPLANATIONS[concept.title] ??
    C_FAMILY_VISUAL_EXPLANATIONS[concept.title] ??
    FUNCTIONAL_JVM_VISUAL_EXPLANATIONS[concept.title];
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

    case "backend":
      return buildPracticalPresentationAudioTrack("backend", {
        title: practical?.title ?? "Backend en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado ampliado: Reparación de Fishbones en producción",
        family: "arquitectura distribuida y transactional outbox",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una orden de reparación para Fishbones recorre el ciclo de vida de backend en producción a través de ocho etapas coordinadas. Primero, en Gateway, el punto de entrada valida TLS y aplica limitación de tasa antes de distribuir el tráfico. Segundo, en Autenticación, se verifica la identidad criptográfica y se extrae el contexto seguro del token JWT. Tercero, en Autorización, las políticas de control de acceso comprueban los permisos sobre el recurso solicitado. Cuarto, en Validación de Schema, se analizan los datos de entrada rechazando cualquier payload malformado antes de tocar la lógica de negocio. Quinto, en Servicio de Dominio, se aplican las reglas puras del negocio garantizando los invariantes del sistema. Sexto, en Transacción ACID, la base de datos registra el estado y escribe el evento en la tabla Outbox de forma atómica. Séptimo, en Transactional Outbox, un proceso en segundo plano lee el evento persistido y lo publica de forma garantizada en el broker de mensajería. Y octavo, en Workers asíncronos, los consumidores procesan el trabajo pesado y la telemetría en paralelo con idempotencia y trazabilidad distribuida.",
        visualOutcome:
          "la animación traza el viaje de la solicitud desde el edge de la red hasta el almacenamiento transaccional y los consumidores asíncronos, demostrando una arquitectura tolerante a fallos con cero pérdida de órdenes.",
      });

    case "apis":
      return buildPracticalPresentationAudioTrack("apis", {
        title: practical?.title ?? "APIs en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Seguimiento multiparadigma de una orden",
        family: "contratos multiparadigma y ledger idempotente",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, el ciclo de vida de una orden interactúa simultáneamente a través de seis protocolos de comunicación en el nexo de APIs. Primero, en REST, el cliente emite una petición POST para crear la orden con semántica de estado HTTP estandarizada. Segundo, en GraphQL, el panel de control consulta exactamente los campos requeridos del cliente y los productos en un único grafo sin sobre-descarga. Tercero, en gRPC, los microservicios internos transmiten la confirmación en binario tipado de alta velocidad mediante Protocol Buffers. Cuarto, en Eventos, el bus de mensajería emite el cambio de estado a los sistemas suscritos. Quinto, en WebSockets, la interfaz del usuario recibe actualizaciones de ubicación en tiempo real sin sondeo repetitivo. Y sexto, en Webhooks con firmas HMAC, el sistema despacha notificaciones seguras hacia servicios externos con ledger de deduplicación que previene eventos duplicados.",
        visualOutcome:
          "la animación representa la coordinación armónica entre REST, GraphQL, gRPC, WebSockets y webhooks autenticados, manteniendo un único identificador de traza y compatibilidad de contratos en todo el ecosistema.",
      });

    case "nodejs":
      return buildPracticalPresentationAudioTrack("nodejs", {
        title: practical?.title ?? "Node.js en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Ingesta de telemetría con backpressure",
        family: "runtime asíncrono, streams y workers",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un flujo masivo de telemetría es procesado por el motor de Node.js a través de seis etapas de alto rendimiento. Primero, en Streams, la carga comprimida entra como un flujo continuo procesado en pequeños fragmentos de memoria. Segundo, en Descompresión, el parser procesa la estructura JSON sin almacenar el archivo completo en el heap. Tercero, en Backpressure, el buffer de escritura detecta saturación en el destino y suspende la lectura hasta recibir el evento drain, evitando desbordamientos de memoria. Cuarto, en Worker Threads, los cálculos matemáticos pesados se transfieren a hilos de CPU secundarios manteniendo el bucle de eventos desahogado. Quinto, en Base de datos, los lotes de datos se insertan de forma agrupada y transaccional. Y sexto, en Apagado elegante con SIGTERM, el servidor drena las conexiones activas y libera recursos de forma segura sin interrumpir lotes en vuelo.",
        visualOutcome:
          "la animación visualiza el control de flujo por backpressure y el desvío de trabajo hacia hilos trabajadores, manteniendo la latencia del bucle de eventos en 7 milisegundos y un uso de memoria perfectamente estable.",
      });

    case "laravel":
      return buildPracticalPresentationAudioTrack("laravel", {
        title: practical?.title ?? "Laravel en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Orden transaccional con evento afterCommit",
        family: "pipeline HTTP, Eloquent y colas",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una transacción de comercio electrónico se orquesta mediante el framework Laravel en seis etapas integradas. Primero, en Validación con Form Request, los datos entrantes se sanean y verifican contra reglas de negocio. Segundo, en Políticas de autorización con Policies, el contenedor evalúa si el usuario autenticado tiene permiso sobre la entidad. Tercero, en Transacción de base de datos, el gestor de transacciones ejecuta las consultas de Eloquent asegurando atomicidad estricta. Cuarto, en Modelo Eloquent, los hooks del ciclo de vida y los casts transforman los atributos de forma transparente. Quinto, en Eventos afterCommit, la emisión del evento de orden creada se pospone hasta que la transacción se confirma de forma definitiva en disco. Y sexto, en Colas de trabajo, un Job asíncrono e idempotente se encola para enviar la notificación y actualizar inventarios sin retrasar la respuesta HTTP doscientos uno al cliente.",
        visualOutcome:
          "la animación refleja el flujo limpio entre el pipeline HTTP, las políticas de seguridad y la garantía de que ningún trabajo en cola se despache antes de la confirmación exitosa de la transacción en la base de datos.",
      });

    case "n8n":
      return buildPracticalPresentationAudioTrack("n8n", {
        title: practical?.title ?? "n8n en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Solicitud enriquecida, aprobada y enrutada",
        family: "automatización de flujos y orquestación visual",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un flujo automatizado de n8n procesa una solicitud operativa crítica a través de seis nodos conectados. Primero, en Nodo Webhook, la ejecución se dispara al recibir una carga HTTP externa autenticada con credenciales seguras. Segundo, en Normalización, un nodo de código mapea y limpia las propiedades JSON preparando una estructura de datos estándar. Tercero, en Enriquecimiento, múltiples peticiones a servicios cloud complementan la solicitud con información de contexto. Cuarto, en Aprobación humana, el flujo detiene su ejecución emitiendo una notificación interactiva y esperando la decisión de un supervisor en el carril manual. Quinto, en Nodo Switch condicional, la decisión dirige el flujo por la rama de aprobación o rechazo. Y sexto, en Recuperación y auditoría, los reintentos automáticos y el subflujo de errores registran la evidencia completa de la transacción.",
        visualOutcome:
          "la animación ilustra el movimiento de datos entre los nodos del flujo, mostrando cómo las credenciales encriptadas, la intervención humana y el manejo defensivo de errores garantizan una automatización robusta y auditable.",
      });

    case "dotnet":
      return buildPracticalPresentationAudioTrack("dotnet", {
        title: practical?.title ?? ".NET en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Servicio multiplataforma dentro del runtime .NET",
        family: "runtime CLR, compilación AOT y memoria gestionada",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un microservicio de alto rendimiento se ejecuta dentro del Common Language Runtime de punto net a través de seis etapas clave. Primero, en MSBuild, la solución compila el código fuente en ensamblados estándar de Código Intermedio. Segundo, en Motor de Ejecución CLR, el runtime inicializa el host, el inyector de dependencias nativo y el pipeline HTTP optimizado con Kestrel. Tercero, en Compilación JIT y AOT, las instrucciones intermedias se transforman en código de máquina nativo para la arquitectura destino. Cuarto, en Asignación de memoria y buffers, el uso de ArrayPool reduce la fragmentación en el Large Object Heap mitigando pausas del recolector de basura. Quinto, en Tareas asíncronas con ValueTask, el manejo de I O sin asignaciones excesivas maximiza el rendimiento por núcleo. Y sexto, en Diagnóstico y recolección de basura, las métricas confirman una reducción del 63% en pausas del Garbage Collector con un binario autónomo y seguro.",
        visualOutcome:
          "la animación visualiza la órbita de ejecución del runtime, evidenciando el reciclaje eficiente de buffers y el desempeño constante sin degradación en aplicaciones de alta concurrencia.",
      });

    case "mediapipe":
      return buildPracticalPresentationAudioTrack("mediapipe", {
        title: practical?.title ?? "MediaPipe en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Inferencia on-device y tracking multimodal a 60 FPS",
        family: "visión computacional on-device y grafos de inferencia",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una secuencia de vídeo en tiempo real se analiza mediante el motor On-Device de MediaPipe en seis etapas fluidas. Primero, en Ingesta de vídeo, los cuadros de la cámara se reciben y decodifican a 60 cuadros por segundo en el hilo gráfico. Segundo, en Preprocesamiento de tensores, la imagen se normaliza, recorta y ajusta de color según los requisitos del modelo de aprendizaje automático. Tercero, en Grafo de inferencia, los calculadores canalizan los datos hacia la GPU del dispositivo para ejecutar la inferencia de forma totalmente local sin enviar datos a la nube. Cuarto, en Detección de manos y landmarks, el modelo predice las coordenadas tridimensionales de veintiún puntos articulares en cada mano. Quinto, en Malla facial y postura, la inferencia simultánea extrae puntos clave de expresión y orientación corporal. Y sexto, en Renderizado y telemetría, las capas vectoriales se superponen instantáneamente sobre la imagen en pantalla con una latencia de inferencia menor a diez milisegundos.",
        visualOutcome:
          "la animación exhibe el rastreo vectorial tridimensional de landmarks articulares en tiempo real sobre la GPU del dispositivo, demostrando privacidad total y cero latencia de red.",
      });

    case "firebase":
      return buildPracticalPresentationAudioTrack("firebase", {
        title: practical?.title ?? "Firebase en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado ampliado: Calibración de Fishbones y sincronización offline",
        family: "BaaS reactivo, reglas de seguridad y sincronización cloud",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, la actualización de calibración de un taller se propaga a través de la infraestructura administrada de Firebase en ocho etapas sincronizadas. Primero, en Autenticación, Firebase Auth valida el token de sesión inyectando el identificador del usuario. Segundo, en Atestación con App Check, se verifica que la solicitud provenga de una aplicación genuina no alterada. Tercero, en Escritura local con Firestore, el dato se escribe de forma optimista en la base de datos local con latencia cero. Cuarto, en Security Rules, las reglas declarativas en el servidor verifican la propiedad del documento y la estructura del payload rechazando modificaciones no autorizadas. Quinto, en Triggers de Cloud Functions, el evento onCreate dispara una función en la nube que procesa los cálculos de calibración. Sexto, en Cloud Storage, se almacena el plano vectorial resultante con enlaces de descarga firmados. Séptimo, en Firebase Cloud Messaging, se envía una notificación push al dispositivo del operador. Y octavo, en Reconciliación offline, si la conexión a internet se interrumpe durante el proceso, la caché local retiene las mutaciones y las sincroniza en orden sin pérdida al restablecerse la red.",
        visualOutcome:
          "la animación ilustra la interacción continua entre el dispositivo móvil, la caché offline, las compuertas de Security Rules y las funciones en la nube, garantizando coherencia de datos y una experiencia sin interrupciones.",
      });

    case "android":
      return buildPracticalPresentationAudioTrack("android", {
        title: practical?.title ?? "Android en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Flujo de trabajo en segundo plano con WorkManager y Jetpack Compose",
        family: "componentes del sistema, Compose y sincronización en background",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una tarea crítica de sincronización móvil se ejecuta en el sistema Android a través de seis etapas nativas. Primero, en UI declarativa con Jetpack Compose, la interfaz reacciona automáticamente a los estados emitidos sin manipulación manual de vistas XML. Segundo, en ViewModel y StateFlow, el estado de la pantalla se preserva ante rotaciones y cambios de configuración del dispositivo. Tercero, en Base de datos Room, los registros se almacenan localmente en SQLite mediante una interfaz reactiva y tipada. Cuarto, en WorkManager, la tarea de sincronización en segundo plano se programa respetando restricciones de batería y conectividad a red no medida. Quinto, en Ejecución de Worker, el sistema operativo despierta el worker de forma confiable incluso si la aplicación se cierra o el dispositivo se reinicia. Y sexto, en Actualización y confirmación, el resultado se persiste de forma idempotente y el StateFlow notifica a la interfaz de Compose que la orden ha sido sincronizada.",
        visualOutcome:
          "la animación muestra la conexión entre la interfaz de Jetpack Compose, el almacenamiento en Room y la persistencia de tareas en WorkManager, asegurando que ningún trabajo se pierda ante caídas de red o suspensión del sistema.",
      });

    case "django":
      return buildPracticalPresentationAudioTrack("django", {
        title: practical?.title ?? "Django en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Modelo, vistas y operación web en Python",
        family: "patrón MVT, ORM y transacciones en servidor",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una solicitud web recorre el pipeline completo del framework Django a través de seis etapas robustas. Primero, en Enrutamiento y URLconf, la URL entrante se resuelve asociando la petición con la vista correspondiente. Segundo, en Middleware de seguridad, se aplican protecciones contra ataques CSRF, Clickjacking y validación de sesiones seguras. Tercero, en Vistas y formularios, los Form classes sanean los datos y validan las restricciones del dominio. Cuarto, en Django ORM, las consultas se optimizan con select_related y prefetch_related eliminando el problema de consultas n más uno en la base de datos. Quinto, en Transacciones atómicas, la operación se encapsula en un bloque atomic que garantiza consistencia o rollback ante excepciones. Y sexto, en Tareas asíncronas con Celery, los envíos de correos y procesos de análisis se delegan a workers asíncronos respondiendo rápidamente con el renderizado final de la plantilla.",
        visualOutcome:
          "la animación representa la secuencia segura de middlewares, consultas optimizadas al ORM y delegación de tareas en segundo plano, evidenciando la solidez de una arquitectura web basada en convenciones probadas.",
      });

    case "databases":
    case "bases-datos":
      return buildPracticalPresentationAudioTrack("databases", {
        title: practical?.title ?? "Bases de datos en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Reserva Hextech concurrente: índices, snapshots, transacciones ACID y replicación",
        family: "concurrencia transaccional, MVCC y durabilidad WAL",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, dos solicitudes concurrentes intentan reservar la última pieza Hextech en el taller. Primero, en Consulta e índice, el planner utiliza un índice B-Tree para ubicar la tupla sin realizar un escaneo secuencial de toda la tabla. Segundo, en Snapshot MVCC, el motor genera una vista aislada de los datos para garantizar lecturas consistentes. Tercero, en Bloqueo y concurrencia, una de las solicitudes adquiere un lock exclusivo sobre la fila mientras la segunda entra en espera controlada. Cuarto, en Ejecución de la transacción, se descuenta la unidad disponible y se valida la restricción de que el stock nunca sea negativo. Quinto, en Registro Write-Ahead Logging, la modificación se escribe de forma síncrona en el log antes de tocar las páginas de datos en disco. Sexto, en Commit durable, la transacción se confirma devolviendo éxito a la primera solicitud y rechazando ordenadamente a la segunda por falta de inventario. Y séptimo, en Replicación y failover, el cambio confirmado se transmite a los nodos secundarios preservando la invariante en todo el cluster.",
        visualOutcome:
          "la animación sincroniza las dos peticiones entrantes, evidenciando la protección del lock de fila, la persistencia en el log de transacciones y la réplica hacia nodos secundarios sin sobreventa de inventario.",
      });

    case "state-management":
    case "gestion-estado":
      return buildPracticalPresentationAudioTrack("state-management", {
        title: practical?.title ?? "Gestión de estado en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Constructor de equipos: ownership, stores, mutación optimista y caché remota",
        family: "ownership de estado, sincronización unidireccional y actualización optimista",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un constructor de equipos interactúa con el estado de la aplicación distribuyendo cada dato en su frontera correcta. Primero, en Estado local de UI, la selección de inputs temporales y pestañas activas se confina al componente sin contaminar el resto del árbol. Segundo, en Estado de URL, los filtros de búsqueda y paginación se serializan en los parámetros de la dirección web permitiendo enlaces compartibles. Tercero, en Store global de cliente, la lista del equipo seleccionado se gestiona mediante un store inmutable con reducers predecibles. Cuarto, en Caché de servidor, los datos remotos de campeones se consultan mediante una librería de query cache que gestiona reintentos y deduplicación. Quinto, en Mutación optimista, al marcar a Jinx como favorita la interfaz actualiza el icono instantáneamente mientras dispara la mutación a la red. Sexto, en Reversión por error, una caída de red simulada activa el rollback restaurando el estado anterior sin inconsistencias visuales. Y séptimo, en Sincronización offline y persistencia, los cambios validados se guardan en IndexedDB para disponibilidad inmediata sin conexión.",
        visualOutcome:
          "la animación traza la frontera de cada dato a través del componente, la URL, el store global y la caché remota, destacando la respuesta instantánea del favorito optimista y su recuperación ante fallos de red.",
      });

    case "sql-server":
      return buildPracticalPresentationAudioTrack("sql-server", {
        title: practical?.title ?? "Microsoft SQL Server en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Reserva de inventario sin ventas duplicadas en T-SQL transaccional",
        family: "Database Engine, transacciones T-SQL, Query Store y durabilidad",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una orden de compra se procesa en Microsoft SQL Server 2025 protegiendo el inventario contra concurrencia destructiva. Primero, en Definición de invariantes y esquema, tablas con claves primarias y constraints CHECK garantizan que el stock nunca sea menor a cero. Segundo, en Autenticación y permisos, la conexión segura TLS aplica el principio de mínimo privilegio ejecutando procedimientos almacenados específicos. Tercero, en Enlace de parámetros y transacción, la solicitud se envía parametrizada abriendo una transacción atómica con SET XACT_ABORT ON. Cuarto, en Reserva atómica, un UPDATE condicional descuenta las unidades directamente sobre la fila protegiendo la operación con un lock exclusivo. Quinto, en Registro en Ledger y Commit, la orden y el movimiento se confirman en el transaction log asegurando durabilidad inmediata. Sexto, en Detección de Deadlock y reintento, dos transacciones cruzadas provocan un interbloqueo donde el motor elige una víctima 1205 y la aplicación reintenta con backoff ordenado. Séptimo, en Estabilización de plan con Query Store, una regresión de rendimiento por estadísticas desactualizadas se mitiga fijando un plan óptimo. Y octavo, en Recuperación y Always On, se verifica la cadena de backups y la conmutación por error hacia la réplica secundaria.",
        visualOutcome:
          "la animación exhibe el procesamiento de la orden en el motor relacional, mostrando la resolución de bloqueos, la escritura en el transaction log y la estabilización del plan de ejecución mediante Query Store.",
      });

    case "sql":
      return buildPracticalPresentationAudioTrack("sql", {
        title: practical?.title ?? "SQL en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Optimización declarativa de consultas, índices y planes de ejecución",
        family: "álgebra relacional, optimizador de costos y transacciones ACID",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una consulta de agregación sobre millones de registros es diagnosticada y optimizada en cinco etapas de ingeniería relacional. Primero, en Expresión declarativa, la consulta SELECT agrupa pedidos por cliente definiendo el resultado deseado mediante operadores lógicos. Segundo, en Inspección del plan de ejecución, el comando EXPLAIN ANALYZE desglosa el árbol de operadores contrastando las filas estimadas contra las reales. Tercero, en Detección de filtro no sargable, se descubre que una función envolvente sobre la columna de correo anula el uso de índices obligando al motor a realizar un escaneo secuencial masivo. Cuarto, en Creación de índice sargable, se define un índice funcional sobre la expresión exacta transformando el escaneo en una búsqueda directa por índice. Y quinto, en Verificación transaccional, una suite de pruebas comprueba la equivalencia estricta de resultados considerando valores nulos, duplicados y tiempos de respuesta.",
        visualOutcome:
          "la animación visualiza la sustitución del costoso Sequential Scan por un Index Scan optimizado, reduciendo drásticamente el consumo de buffers y el tiempo de ejecución de la consulta.",
      });

    case "nosql":
      return buildPracticalPresentationAudioTrack("nosql", {
        title: practical?.title ?? "NoSQL en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Particionamiento distribuido, quórums y consistencia eventual",
        family: "escalabilidad horizontal, quórum de lectura y particionado hash",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un flujo masivo de telemetría de dispositivos se distribuye a través de un cluster NoSQL en cinco fases clave. Primero, en Definición de patrones de acceso, el modelo de datos se diseña en torno a las consultas exactas que la aplicación necesita ejecutar. Segundo, en Ingesta particionada, una función de hash consistente distribuye las claves de dispositivo uniformemente entre los nodos del cluster. Tercero, en Detección de partición caliente, el uso de una fecha de baja cardinalidad concentra todas las escrituras en un único nodo saturándolo. Cuarto, en Rediseño con clave compuesta, la partición se combina con cubos horarios dispersando la carga sin perder la capacidad de consulta por dispositivo. Y quinto, en Consistencia de quórum y reparación, lecturas con quórum mayoritario y procesos de reparación en segundo plano reconcilian discrepancias entre réplicas.",
        visualOutcome:
          "la animación ilustra la dispersión balanceada de lecturas y escrituras en el cluster distribuido, mostrando la eliminación del cuello de botella en la partición caliente y la convergencia de réplicas.",
      });

    case "xml":
      return buildPracticalPresentationAudioTrack("xml", {
        title: practical?.title ?? "XML en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Procesamiento seguro de manuales técnicos, namespaces, XSLT y firmas digitales",
        family: "Infoset documental, transformación XSLT y firma canónica XML-DSig",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un manual técnico multilingüe se procesa y publica a través de diez etapas de procesamiento documental seguro. Primero, en Recepción e Infoset, se validan los límites de tamaño y la codificación UTF-8. Segundo, en Parseo seguro, se deshabilitan entidades externas para prevenir vulnerabilidades de inyección XXE. Tercero, en Resolución de namespaces, cada elemento y atributo se asocia a su URI canónica. Cuarto, en Contexto e idioma, se evalúan atributos reservados como xml:lang y xml:base calculando el alcance efectivo de los enlaces. Quinto, en Selección con XPath, se filtran los capítulos requeridos preservando el orden jerárquico. Sexto, en Detección de XInclude hostil, el resolver bloquea una inclusión remota fuera de la lista de permitidos. Séptimo, en Recuperación con catalog local, el recurso faltante se obtiene de forma determinista desde el almacenamiento local. Octavo, en Transformación con XSLT 3.0, el árbol de nodos se transforma en un documento HTML accesible. Noveno, en Verificación de firma XML-DSig, el subárbol publicado se canonicaliza mediante C14N confirmando su integridad criptográfica. Y décimo, en Publicación y traza, el artefacto resultante se emite con trazabilidad completa.",
        visualOutcome:
          "la animación muestra el análisis del árbol Infoset, el bloqueo de llamadas externas no autorizadas y la transformación limpia a HTML firmada digitalmente sin alteración documental.",
      });

    case "xsd":
      return buildPracticalPresentationAudioTrack("xsd", {
        title: practical?.title ?? "XSD en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Validación estructural, tipos simples, facetas, identidades y reglas XSD 1.1",
        family: "schema assessment, validación tipada y reglas de co-ocurrencia",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un certificado de calibración industrial se valida mediante un conjunto de schemas XSD a lo largo de diez etapas de evaluación. Primero, en Recepción de la instancia, el documento XML bien formado entra al pipeline de validación. Segundo, en Carga del schema set, se compilan las definiciones locales resolviendo imports e includes autorizados. Tercero, en Resolución de declaraciones globales, el elemento raíz se asocia con su tipo complejo en el namespace de calibración. Cuarto, en Validación de tipos y facetas, valores de fecha, decimales y cadenas se verifican contra patrones y rangos tipados. Quinto, en Secuencia y cardinalidad, se comprueba el orden de los elementos y las restricciones de ocurrencias mínimas y máximas. Sexto, en Detección de identidad duplicada, una compuerta xs:key señala una colisión de identificadores de medición. Séptimo, en Corrección de key y keyref, la asignación de claves únicas restablece la integridad referencial. Octavo, en Evaluación de assertion XSD 1.1, una regla XPath comprueba que la desviación de calibración no supere la tolerancia permitida. Noveno, en Generación de PSVI, el documento se enriquece con el Post-Schema-Validation Infoset aportando tipos y valores normalizados. Y décimo, en Matriz de compatibilidad, se comprueba la interoperabilidad entre validadores 1.0 y 1.1.",
        visualOutcome:
          "la animación exhibe el paso del documento por las compuertas de validación de XSD, resaltando la corrección de claves duplicadas y la emisión del Infoset post-validación enriquecido con tipos fuertes.",
      });

    case "json":
      return buildPracticalPresentationAudioTrack("json", {
        title: practical?.title ?? "JSON en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Ciclo offline de órdenes, JSON Schema 2020-12, precisión y JSON Patch atómico",
        family: "contratos de intercambio, JSON Pointer/Patch y canonicalización JCS",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una orden de compra creada en modo sin conexión se procesa y sincroniza a través de diez etapas de ingeniería JSON. Primero, en Recepción y límites, el payload se limita en bytes descomprimidos para mitigar ataques de denegación de servicio. Segundo, en Decodificación y lexer, los bytes UTF-8 se convierten en tokens identificando llaves, corchetes y tipos de valor. Tercero, en Detección de nombres duplicados, el parser intercepta miembros con la misma clave rechazando la entrada ambigua. Cuarto, en Validación con JSON Schema 2020-12, se comprueban propiedades requeridas y se restringen campos no evaluados. Quinto, en Detección de pérdida de precisión, un número entero que excede 2 elevado a la 53 genera una alerta de interoperabilidad. Sexto, en Recuperación con formato decimal, el importe se modela como cadena tipada preservando exactitud contable absoluta. Séptimo, en Detección de colisión de parche, una prueba compare-and-set con JSON Pointer rechaza un patch aplicado sobre una revisión obsoleta. Octavo, en Aplicación de JSON Patch, el documento se actualiza atómicamente incrementando el número de versión. Noveno, en Canonicalización JCS y digest, las propiedades se ordenan determinísticamente emitiendo una firma SHA-256. Y décimo, en Secuencia observable, la orden aprobada se emite como flujo delimitado en un stream de eventos.",
        visualOutcome:
          "la animación ilustra el filtrado de números fuera de rango, el rechazo preventivo del patch ante colisiones de versión y la confirmación final del documento canonicalizado con hash SHA-256.",
      });

    case "blockchain":
      return buildPracticalPresentationAudioTrack("blockchain", {
        title: practical?.title ?? "Blockchain en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Ciclo de vida de una transferencia: firmas criptográficas, mempool, reorg y finalidad",
        family: "registro distribuido, consenso de mayor peso y finalidad económica",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una transferencia de activos recorre el ciclo de vida de un registro distribuido a través de cinco etapas críticas. Primero, en Firma criptográfica de la transacción, el remitente utiliza su clave privada para autorizar el valor, destino y nonce sin revelar su secreto criptográfico. Segundo, en Validación e inclusión en bloque, los nodos de la red verifican saldos y reglas de consenso incluyendo la transacción en un bloque candidato. Tercero, en Observación de reorganización de cadena, una cadena competidora con mayor dificultad acumulada supera la rama actual, convirtiendo el bloque en huérfano y devolviendo la transferencia al estado pendiente. Cuarto, en Reversión y reaplicación de estado, el nodo deshace ordenadamente los cambios de la rama descartada y reaplica los bloques de la cadena ganadora recuperando consistencia. Y quinto, en Espera de finalidad, la transacción acumula confirmaciones y alcanza un punto de control irreversible donde la interfaz eleva su estado de confirmada a definitiva.",
        visualOutcome:
          "la animación traza el camino de la transacción entre los nodos, destacando la resolución del reorg mediante la cadena más larga y el cambio de color al alcanzar la finalidad criptográfica.",
      });

    case "artificial-intelligence":
    case "ia":
    case "inteligencia-artificial":
      return buildPracticalPresentationAudioTrack("artificial-intelligence", {
        title: practical?.title ?? "Inteligencia artificial en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Entrenamiento de clasificadores: baseline, detección de data leakage y gobierno de modelos",
        family: "aprendizaje automático, diagnóstico de fugas de datos y gobernanza de IA",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, el ciclo de desarrollo de un modelo de aprendizaje automático para clasificación de incidentes se ejecuta en cinco etapas rigurosas. Primero, en Definición de la tarea y métricas, se delimita el problema, se seleccionan los datos de entrenamiento y se define una función de pérdida alineada al impacto de falsos positivos y falsos negativos. Segundo, en Entrenamiento del modelo base, el pipeline de preprocesamiento ajusta los pesos del algoritmo evaluando el rendimiento en conjuntos de validación aislados. Tercero, en Detección de fuga de datos, se identifica que una variable del dataset contiene información que solo existe después de resuelto el incidente, inflando artificialmente la precisión del modelo. Cuarto, en Saneamiento del pipeline, se elimina la variable contaminada y se reentrena el modelo asegurando transformaciones estrictamente previas a la predicción. Y quinto, en Evaluación responsable y gobernanza, el clasificador validado se documenta en una ficha técnica con métricas por subgrupo, umbrales de decisión y monitoreo continuo contra deriva de datos.",
        visualOutcome:
          "la animación visualiza las curvas de entrenamiento y validación, evidenciando la caída de la métrica inflada al retirar la fuga de datos y la estabilización de un modelo con generalización real y trazabilidad ética.",
      });

    case "programming-fundamentals":
    case "fundamentos-programacion":
      return buildPracticalPresentationAudioTrack("programming-fundamentals", {
        title: practical?.title ?? "Fundamentos de programación en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "De una necesidad a un programa comprobable",
        family: "descomposición algorítmica, contratos de datos y ejecución verificable",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una calculadora de consumo doméstico convierte requisitos de usuario en un programa formal a través de cinco etapas. Primero, en Definición del contrato, se especifican entradas de lectura y tarifas con precondiciones claras separando datos, reglas de cálculo y presentación. Segundo, en Diseño del algoritmo, el pseudocódigo desglosa las transformaciones matemáticas conservando unidades explícitas. Tercero, en Detección de lectura inválida, la precondición de que la lectura actual sea mayor o igual a la anterior falla al detectar consumo negativo, deteniendo la ejecución con diagnóstico. Cuarto, en Recuperación del dato, la interfaz solicita la confirmación de la lectura corregida e invalida el cálculo previo repitiendo el flujo de forma trazable. Y quinto, en Verificación del resultado, aserciones automáticas validan el cálculo final cubriendo casos normales, cero y bordes extremos emitiendo un resumen comprobable.",
        visualOutcome:
          "la animación traza el flujo de ejecución desde la definición del contrato hasta la corrección interactiva del dato inválido y la confirmación final de resultados con aserciones automáticas.",
      });

    case "algorithms":
    case "algoritmos":
      return buildPracticalPresentationAudioTrack("algorithms", {
        title: practical?.title ?? "Algoritmos y estructuras de datos en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Optimizar las rutas de una brigada con Dijkstra y grafos ponderados",
        family: "teoría de grafos, cola de prioridad y complejidad asintótica",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un sistema de ruteo urbano optimiza la trayectoria de una brigada en cinco etapas algorítmicas. Primero, en Modelado del grafo, una lista de adyacencia mapea intersecciones y tiempos de traslado urbanos en memoria con consumo óptimo. Segundo, en Cálculo con Dijkstra, una cola de prioridad basada en min-heap extrae iterativamente la menor distancia acumulada explorando la frontera de nodos. Tercero, en Detección de peso negativo, el algoritmo detecta una arista anómala con tiempo negativo que rompería la invariante de relajación de Dijkstra. Cuarto, en Saneamiento y recálculo, el módulo aísla y sanea los pesos del grafo reconstruyendo distancias desde un estado matemáticamente válido. Y quinto, en Comparativa y benchmark, mediciones empíricas comparan tiempo y memoria contra alternativas garantizando una solución óptima en O((V + E) log V).",
        visualOutcome:
          "la animación ilustra la exploración del grafo urbano mediante la frontera de prioridad de Dijkstra, el rechazo preventivo del ciclo con peso negativo y la convergencia en la ruta más rápida verificada.",
      });

    case "mathematics":
    case "matematicas-programacion":
    case "math-cs":
      return buildPracticalPresentationAudioTrack("mathematics", {
        title: practical?.title ?? "Matemáticas para programación en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Ajustar una función de error mediante descenso de gradiente numéricamente estable",
        family: "optimización continua, cálculo multivariable y estabilidad numérica IEEE 754",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un modelo predictivo optimiza sus parámetros minimizando el error en cinco fases matemáticas. Primero, en Definición de la función objetivo, se formula el error cuadrático medio estableciendo variables de dominio, escala y unidades físicas. Segundo, en Cálculo del gradiente, derivadas parciales orientan iterativamente el vector de parámetros en la dirección de máximo descenso. Tercero, en Detección de divergencia numérica, una tasa de aprendizaje excesiva provoca oscilaciones descontroladas y desbordamiento en coma flotante. Cuarto, en Normalización y reintento, se aplica normalización z-score a las variables de entrada y se reduce la tasa de aprendizaje restaurando la trayectoria hacia el mínimo. Y quinto, en Verificación de convergencia, el algoritmo comprueba que la norma del gradiente sea inferior al umbral de tolerancia prescrito con resultados deterministas y semilla fija.",
        visualOutcome:
          "la animación exhibe la superficie tridimensional de pérdida, la trayectoria errática provocada por la tasa de aprendizaje divergente y la suave convergencia al mínimo global tras la normalización numérica.",
      });

    case "methodologies":
    case "metodologias-desarrollo":
      return buildPracticalPresentationAudioTrack("methodologies", {
        title: practical?.title ?? "Metodologías de desarrollo en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Recuperar el flujo de entrega: límites WIP, swarming y feedback empírico",
        family: "sistemas de feedback, flujo continuo Kanban y mejora empírica",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un equipo de ingeniería estabiliza su cadencia de entrega de software en cinco fases ágiles. Primero, en Alineación del objetivo, el tablero Kanban vincula la hipótesis de valor con criterios de aceptación observables y medibles. Segundo, en División en incrementos verticales, las historias de usuario se dividen en rebanadas delgadas operables de punta a punta con definición de terminado explícita. Tercero, en Detección de saturación WIP, la columna en desarrollo supera el límite asignado provocando bloqueos, esperas y aumento exponencial del lead time. Cuarto, en Desbloqueo mediante swarming, el equipo detiene nuevos inicios para colaborar en resolver el bloqueo activo drenando las colas acumuladas. Y quinto, en Revisión y aprendizaje, métricas de cycle time y diagramas de flujo acumulado guían la retrospectiva para institucionalizar políticas operativas mejoradas.",
        visualOutcome:
          "la animación modela el movimiento de tarjetas a través del tablero Kanban, evidenciando la alerta visual por desbordamiento del límite WIP y el restablecimiento del flujo ágil mediante trabajo colaborativo.",
      });

    case "scratch":
      return buildPracticalPresentationAudioTrack("scratch", {
        title: practical?.title ?? "Scratch en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Construir un videojuego interactivo: eventos, clones concurrentes y colisiones",
        family: "programación visual orientada a eventos y concurrencia cooperativa",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un videojuego arcade interactivo se construye paso a paso en cinco fases de programación por bloques. Primero, en Preparación del mundo y variables, el bloque al presionar bandera verde reinicia puntuaciones globales, vidas y posiciones iniciales de los sprites. Segundo, en Coordinación con mensajes broadcast, el emisor despacha eventos asíncronos para generar objetos en pantalla desacoplando lógica y renderizado. Tercero, en Detección de fuga de clones, un bucle sin condición genera clones continuos saturando el límite de trescientos clones y congelando el escenario. Cuarto, en Eliminación controlada de clones, sensores de colisión contra el borde activan el bloque borrar este clon estabilizando el consumo de memoria. Y quinto, en Verificación de victoria, al alcanzar diez puntos se dispara el mensaje de victoria congelando entradas para evitar trampas o puntuaciones espurias.",
        visualOutcome:
          "la animación recrea el escenario de Scratch mostrando el despacho de mensajes entre personajes, la saturación por proliferación de clones y la recuperación de una tasa fluida de cuadros por segundo.",
      });

    case "typescript":
      return buildPracticalPresentationAudioTrack("typescript", {
        title: practical?.title ?? "TypeScript en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Contratos de tipos, genéricos, uniones discriminadas y verificación de runtime",
        family: "sistema de tipos estructural, narrowing y tipado estático verificable",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, el procesamiento de una orden comercial se valida a través de catorce capas de seguridad de tipos en TypeScript. Primero, en Contrato de tipos, se declaran interfaces estrictas para la entidad de compra. Segundo, en Parámetros genéricos, funciones tipadas capturan y preservan la estructura del dato sin degradar a tipo any. Tercero, en Uniones discriminadas, el estado del pedido utiliza una propiedad tag para garantizar cobertura exhaustiva en sentencias switch. Cuarto, en Narrowing y comprobaciones de tipo, operadores type-guards afinan tipos desconocidos hacia contratos verificados en tiempo de ejecución. Quinto, en Operador satisfies, los objetos validan su adhesión a un esquema sin perder los literales inferidos. Sexto, en Importaciones type-only, el compilador purga dependencias de solo tipo reduciendo el tamaño del bundle generado. Y séptimo, en Integración con esquemas de validación, la frontera de entrada analiza los datos externos asegurando que el runtime refleje fielmente las garantías del analizador estático.",
        visualOutcome:
          "la animación guía el payload por las compuertas de análisis estático de TypeScript, mostrando la eliminación de tipos en la compilación a JavaScript limpio y la protección total contra valores indefinidos.",
      });

    case "python":
      return buildPracticalPresentationAudioTrack("python", {
        title: practical?.title ?? "Python en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Observatorio de telemetría reproducible: streams asíncronos, multiprocessing y resiliencia",
        family: "runtime CPython, concurrencia asyncio y procesamiento multiproceso",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un observatorio de telemetría en Python procesa mediciones heterogéneas a través de catorce etapas coordinadas. Primero, en Definición del contrato y entorno, un entorno virtual aislado con dependencias fijadas y hashes criptográficos asegura reproducibilidad total. Segundo, en Lectura como stream con asyncio, el consumo se realiza por fragmentos continuos con control de backpressure sin desbordar la memoria del proceso. Tercero, en Decodificación y validación de modelos, cadenas UTF-8 se convierten en objetos inmutables con tipos y zonas horarias explícitas. Cuarto, en Normalización y cálculo paralelo, transformaciones puras en funciones desacopladas se despachan a un ProcessPoolExecutor liberando el Global Interpreter Lock para trabajo pesado de CPU. Quinto, en Detección de lote corrupto y cuarentena, un fallo de checksum aísla la carga defectuosa sin detener el resto del flujo. Sexto, en Reanudación idempotente y persistencia atómica, checkpoints persistidos en disco y escrituras mediante archivos temporales con fsync garantizan que ningún dato quede a medio escribir. Y séptimo, en Observabilidad y empaquetado, métricas estructuradas y el empaquetado en formato wheel culminan un ciclo de producción robusto.",
        visualOutcome:
          "la animación sigue el flujo de eventos desde la ingesta asíncrona hasta la delegación en hilos de procesamiento secundarios, destacando la recuperación automática ante lotes corruptos y la escritura atómica en disco.",
      });

    case "go":
      return buildPracticalPresentationAudioTrack("go", {
        title: practical?.title ?? "Go en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Rastrear sitios con concurrencia acotada: scheduler G-M-P, canales y context cancelable",
        family: "concurrencia CSP, scheduler de goroutines y sincronización por canales",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un rastreador web concurrente en Go procesa URLs mediante el modelo CSP en cinco etapas de alto rendimiento. Primero, en Preparación de frontera con Context, se establece un temporizador de timeout que viaja a través de todas las llamadas para gobernar el tiempo de vida de la operación. Segundo, en Lanzamiento de workers concurrentes, el scheduler multiplexa goroutines livianas sobre núcleos de procesador repartiendo el trabajo a través de un canal con búfer. Tercero, en Detección de bloqueo de goroutine, un canal sin receptor activo durante la cancelación amenaza con provocar una fuga de recursos. Cuarto, en Envío cancelable con Select, la instrucción select evalúa simultáneamente el envío de datos o la señal del contexto interrumpiendo limpiamente a los workers cancelados. Y quinto, en Drenaje y cierre con WaitGroup, un grupo de espera sincroniza la finalización de todas las tareas activas permitiendo al productor cerrar el canal de salida sin condiciones de carrera.",
        visualOutcome:
          "la animación visualiza el despacho de goroutines en el scheduler de Go, mostrando la interacción con canales tipados y el rescate de workers bloqueados mediante la interrupción controlada por Context.",
      });

    case "rust":
      return buildPracticalPresentationAudioTrack("rust", {
        title: practical?.title ?? "Rust en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Ingerir telemetría sin carreras: ownership, borrowing, hilos y tipos algebraicos",
        family: "seguridad de memoria estática, ownership y concurrencia sin carreras de datos",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un servicio de ingesta de telemetría en Rust procesa paquetes de red sin necesidad de recolector de basura en cinco etapas deterministas. Primero, en Modelado de paquetes con tipos de datos algebraicos, un struct tipado asume la propiedad directa del vector de bytes asignado en el heap. Segundo, en Distribución de trabajo por canales, la propiedad de cada paquete se transfiere de forma segura entre hilos a través de un canal MPSC sin copias innecesarias en memoria. Tercero, en Detección de préstamo fugitivo, el compilador intercepta un intento de transferir una referencia prestada que podría sobrevivir al búfer de origen, deteniendo la compilación con mensaje explícito. Cuarto, en Transferencia de ownership seguro, el paquete se convierte en un vector con propiedad completa que satisface la restricción estática permitiendo la ejecución segura en el hilo trabajador. Y quinto, en Cierre ordenado y join de hilos, el cierre del emisor drena los paquetes en tránsito y unifica los hilos secundarios asegurando que no se pierdan datos ni existan recursos huérfanos.",
        visualOutcome:
          "la animación demuestra la gestión de memoria en Rust, evidenciando el paso de pertenencia entre hilos, el bloqueo en compilación ante referencias no válidas y la ejecución libre de fugas de memoria o condiciones de carrera.",
      });

    case "ruby":
      return buildPracticalPresentationAudioTrack("ruby", {
        title: practical?.title ?? "Ruby en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Analizar registros con una tubería expresiva: Enumerable, bloques y manejo de encoding",
        family: "diseño orientado a objetos dinámico, bloques iterativos y pipelines Enumerable",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una herramienta de línea de comandos en Ruby analiza un flujo masivo de eventos del sistema en cinco fases expresivas. Primero, en Apertura del stream de datos, el método foreach lee el archivo línea por línea evitando cargar el conjunto completo en memoria. Segundo, en Transformación con Enumerable, bloques pasados a filter_map extraen y estructuran los registros válidos preservando el contexto léxico. Tercero, en Detección de codificación corrupta, una secuencia de bytes inválida en UTF-8 detiene el análisis señalando con precisión el número de línea. Cuarto, en Aislamiento y recuperación con scrub, el registro anómalo se sanea sustituyendo caracteres rotos y enviando el evento dudoso a cuarentena con trazabilidad del byte offset. Y quinto, en Emisión del reporte ordenado, métodos como tally y sort_by agregan las estadísticas sin mutar los datos originales, emitiendo un resumen claro y reproducible.",
        visualOutcome:
          "la animación ilustra el viaje de las líneas de texto por el pipeline funcional de Ruby, mostrando la detección visual de bytes mal codificados y su posterior recuperación en una tabla ordenada de incidencias.",
      });

    case "php":
      return buildPracticalPresentationAudioTrack("php", {
        title: practical?.title ?? "PHP en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Procesar una solicitud web segura: ciclo request-response, PDO parametrizado y transacciones",
        family: "arquitectura request-response, persistencia segura PDO y tipos modernos",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una orden comercial se procesa a través del ciclo de vida web de PHP en cinco etapas de seguridad. Primero, en Recepción de la petición HTTP, el flujo procesa el cuerpo JSON entrante dentro de un espacio de memoria completamente aislado por el servidor PHP-FPM. Segundo, en Validación del contrato con DTOs tipados, una clase inmutable castea atributos y rechaza campos ausentes o valores fuera de rango antes de tocar la base de datos. Tercero, en Detección de concatenación SQL insegura, el analizador detecta una consulta dinámica vulnerable a inyección deteniendo la persistencia. Cuarto, en Preparación con PDO, la sentencia se separa de los datos mediante consultas preparadas donde el driver enlaza los valores de forma segura sin interpretar código malicioso. Y quinto, en Confirmación transaccional y respuesta 201, una transacción atómica confirma los cambios en la base de datos emitiendo una respuesta HTTP estructurada con identificador de correlación.",
        visualOutcome:
          "la animación recrea el ciclo de vida de la petición web en PHP, resaltando la neutralización de la inyección SQL mediante sentencias preparadas y la confirmación atómica de la transacción con código de estado doscientos uno.",
      });

    case "c":
      return buildPracticalPresentationAudioTrack("c", {
        title: practical?.title ?? "C en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · Parser binario seguro",
        family: "control explícito de memoria, ABI y programación defensiva de sistemas",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un parser de telemetría binaria no confiable procesa paquetes en ocho etapas defensivas en C. Primero, en Recibir bytes, la función read captura un fragmento en un buffer acotado sin bloquear el proceso ante lecturas parciales. Segundo, en Validar cabecera, se verifican números mágicos, versión y longitud mínima rechazando tramas cortas antes de interpretar campos. Tercero, en Calcular capacidad, una suma comprobada con control de desbordamiento de size_t previene reservas insuficientes ante entradas maliciosas. Cuarto, en Reservar ownership, calloc adquiere memoria limpia en el heap con un único dueño responsable y bloque de limpieza explícito. Quinto, en Decodificar campos, memcpy transfiere los bytes a estructuras alineadas evitando accesos ilegales por aliasing o desalineación de hardware. Sexto, en Validar semántica, se comprueba que lecturas físicas como temperatura caigan dentro de rangos operativos reales descartando valores corruptos. Séptimo, en Probar entradas hostiles, compilación instrumentada con AddressSanitizer y UndefinedBehaviorSanitizer verifica que el parser resista fuzzing sin caídas silenciosas ni corrupción de memoria. Y octavo, en Liberar y observar, una función de limpieza idempotente libera la memoria adquirida y registra métricas sin fugar recursos ni dejar punteros colgantes.",
        visualOutcome:
          "la animación traza el flujo de bytes a través de las compuertas de validación de C, evidenciando el rechazo preventivo de tramas desbordadas, la decodificación segura en memoria contigua y la liberación limpia de recursos sin fugas.",
      });

    case "cpp":
      return buildPracticalPresentationAudioTrack("cpp", {
        title: practical?.title ?? "C++ en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · Simulador concurrente con RAII",
        family: "abstracciones de costo cero, RAII determinista y concurrencia moderna",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un simulador de rutas concurrente en C++ procesa escenarios en ocho fases de alto rendimiento. Primero, en Modelar el dominio, tipos fuertes inmutables expresan unidades físicas impidiendo mezclar costos o distancias por error. Segundo, en Adquirir recursos con RAII, un mapeo de archivo en memoria vincula la vida del descriptor al objeto liberando recursos automáticamente al salir del scope. Tercero, en Preparar trabajo con Ranges, vistas perezosas componen transformaciones y filtros sin copias temporales. Cuarto, en Ejecutar en paralelo con jthread, hilos modernos coordinan tareas independientes con unión automática y señales de parada cooperativa. Quinto, en Detectar carrera, la instrumentación con ThreadSanitizer localiza accesos concurrentes no coordinados en un vector compartido. Sexto, en Reducir sin compartir, el diseño migra hacia tareas que devuelven resultados mediante futuros evitando contención por cerrojos globales. Séptimo, en Perfilar localidad de datos, mediciones con perf y heaptrack optimizan el layout contiguo en caché reduciendo accesos indirectos a memoria. Y octavo, en Empaquetar y probar, CMake y pruebas automatizadas con CTest fijan la compatibilidad del ABI y garantizan resultados reproducibles.",
        visualOutcome:
          "la animación expone la orquestación de tareas en C++, destacando la eliminación de condiciones de carrera con ThreadSanitizer, el ordenamiento contiguo en caché y la gestión automática de recursos gobernada por RAII.",
      });

    case "objective-c":
      return buildPracticalPresentationAudioTrack("objective-c", {
        title: practical?.title ?? "Objective-C en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · Módulo iOS legado con frontera Swift",
        family: "runtime dinámico de mensajes, semántica ARC y puentes con Swift",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un módulo heredado de carga de imágenes en iOS se estabiliza y moderniza en ocho etapas de ingeniería en Objective-C. Primero, en Reproducir la fuga, una secuencia repetible en Instruments identifica que el controlador no se libera al cerrar la pantalla. Segundo, en Inspeccionar ownership, el grafo de retención revela un ciclo fuerte entre la operación de fondo, el bloque de callback y la instancia del controlador. Tercero, en Romper el ciclo, una referencia weakSelf combinada con strongSelf temporal en el bloque permite a ARC desasignar la vista si la pantalla se cierra antes de terminar la descarga. Cuarto, en Ordenar callbacks, una cola serial de Grand Central Dispatch coordina el estado interno y despacha actualizaciones de interfaz estrictamente en el Main Thread. Quinto, en Sanear el observer, tokens simétricos de notificación se desuscriben explícitamente en el método dealloc evitando llamadas fantasmas. Sexto, en Definir protocolo, una interfaz limpia con anotaciones de nullability oculta el runtime dinámico detrás de contratos estables. Séptimo, en Probar el puente, pruebas unitarias verifican la interoperabilidad bidireccional entre Objective-C y Swift a través del bridging header. Y octavo, en Migrar por módulo, la implementación interna se reemplaza gradualmente por componentes nativos de Swift sin alterar los consumidores externos.",
        visualOutcome:
          "la animación sigue el grafo de retención de memoria en Instruments, visualizando la ruptura del retain cycle mediante referencias débiles y la encapsulación limpia del código de Objective-C tras un protocolo consumible por Swift.",
      });

    case "c-star":
      return buildPracticalPresentationAudioTrack("c-star", {
        title: practical?.title ?? "C* en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · Difusión térmica paralela",
        family: "arquitectura Connection Machine, shapes y paralelismo de datos SIMD",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una simulación de difusión térmica sobre la Connection Machine se ejecuta en ocho etapas de computación paralela en C*. Primero, en Definir el shape, una cuadrícula bidimensional de ciento veintiocho por ciento veintiocho celdas asigna topología y coordenadas espaciales pcoord a dieciséis mil trescientos ochenta y cuatro procesadores elementales. Segundo, en Cargar condiciones, una sentencia where selecciona el active set perimetral fijando la temperatura de borde en veinte grados mientras el interior inicia caliente. Tercero, en Leer vecinos, el enrutador traslada simultáneamente lecturas de norte, sur, este y oeste entre procesadores adyacentes. Cuarto, en Actualizar en paralelo, todos los nodos activos calculan el promedio ponderado en un búfer secundario sin interferir con la iteración en curso. Quinto, en Detectar el borde inválido, una máscara incompleta contamina una franja perimetral deteniendo la simulación y ajustando las condiciones de contorno. Sexto, en Reducir el error, el árbol de reducción por hardware calcula en tiempo logarítmico el mayor delta de cambio consolidando el valor en el host escalar. Séptimo, en Iterar hasta converger, el procesador anfitrión evalúa el criterio de parada mientras los procesadores masivos continúan el recálculo paralelo. Y octavo, en Exportar evidencia, el sistema de entrada y salida masiva vuelca el mapa térmico estabilizado con checksum y trazabilidad de parámetros.",
        visualOutcome:
          "la animación recrea el tapiz bidimensional de la Connection Machine, exhibiendo la propagación coordinada de calor, el filtrado de procesadores mediante la máscara where y la reducción instantánea del error en el árbol de hardware.",
      });

    case "cweb":
      return buildPracticalPresentationAudioTrack("cweb", {
        title: practical?.title ?? "CWEB en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · Parser explicado y compilado",
        family: "programación literaria Knuth, fragmentos tangling y documentos weaving TeX",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, la construcción de un analizador de comandos mediante programación literaria en CWEB se desarrolla en ocho etapas documentales. Primero, en Plantear el contrato, la prosa tipográfica define los invariantes, gramática y casos de uso antes de escribir la primera línea de código. Segundo, en Nombrar fragmentos, bloques de código descriptivos descomponen el problema según la lógica del razonamiento humano y no según el orden del compilador. Tercero, en Implementar scanner, el bucle de lectura se contextualiza junto a la explicación formal del manejo de caracteres de escape. Cuarto, en Tangle a C, la herramienta CTANGLE extrae y reordena recursivamente los fragmentos generando código C limpio con directivas de sincronización de línea. Quinto, en Encontrar una divergencia, un change file desfasado no coincide con el texto base emitiendo un diagnóstico preciso que impide aplicar parches en ubicaciones incorrectas. Sexto, en Actualizar la variante, directivas x, y y z aplican las adaptaciones multiplataforma necesarias conservando intacto el archivo maestro. Séptimo, en Weave a TeX, la herramienta CWEAVE transforma la fuente en un documento tipográfico con referencias cruzadas e índices automáticos. Y octavo, en Verificar ambas salidas, el binario compilado y el libro técnico en PDF se contrastan con casos de prueba demostrando reproducibilidad total.",
        visualOutcome:
          "la animación ilustra la bifurcación simétrica desde un único archivo .w hacia el código ejecutable generado por CTANGLE y el documento tipografiado indexado producido por CWEAVE, demostrando la elegancia de la programación literaria.",
      });

    case "embedded-c":
      return buildPracticalPresentationAudioTrack("embedded-c", {
        title: practical?.title ?? "Embedded C en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · Controlador de sensor resiliente",
        family: "firmware bare-metal, DMA circular, interrupciones y watchdogs de hardware",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un controlador de adquisición de vibración para maquinaria industrial se ejecuta en ocho etapas de firmware en Embedded C. Primero, en Arrancar con seguridad, el código de startup inicializa el stack pointer, copia el segmento de datos, limpia bss y lee el registro de causa del último reinicio manteniendo las salidas en estado pasivo seguro. Segundo, en Configurar el muestreo, un temporizador de hardware dispara periódicamente conversiones del ADC a diez kilohercios sin consumir ciclos de CPU. Tercero, en Transferir con DMA, un canal en modo circular llena un búfer doble emitiendo interrupciones de mitad y final de transferencia. Cuarto, en Cruzar la ISR, la rutina de interrupción reconoce la bandera y encola un descriptor liviano difiriendo el procesamiento pesado fuera del contexto de interrupción. Quinto, en Detectar overflow, el sistema identifica que el consumidor se ha retrasado impidiendo la sobreescritura accidental del búfer circular. Sexto, en Reducir la carga, el algoritmo conmuta a cálculo de media cuadrática en punto fijo con decimación asegurando el cumplimiento estricto del tiempo de ejecución en el peor de los casos. Séptimo, en Vigilar salud, el perro guardián independiente se alimenta únicamente si todas las tareas del sistema reportan latidos válidos dentro de su ventana temporal. Y octavo, en Dormir y reanudar, el microcontrolador entra en modo de bajo consumo apagando osciladores periféricos hasta que el temporizador despierta el núcleo para el siguiente ciclo.",
        visualOutcome:
          "la animación sincroniza la actividad del microcontrolador en tiempo real, exhibiendo la adquisición autónoma por DMA, la protección del perro guardián ante bloqueos y la alternancia eficiente entre procesamiento y suspensión de bajo consumo.",
      });

    case "c-sharp":
      return buildPracticalPresentationAudioTrack("c-sharp", {
        title: practical?.title ?? "C# en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · Agregador asíncrono de telemetría",
        family: "modelado inmutable con records, Span de alto rendimiento y canales asíncronos .NET",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un agregador de telemetría de alto rendimiento en C# procesa corrientes masivas de sensores en ocho etapas coordinadas sobre .NET. Primero, en Modelar la lectura, un record inmutable con constructores primarios y tipos fuertemente tipados garantiza igualdad por valor e integridad de unidades físicas. Segundo, en Analizar paquetes con Span, segmentos de memoria contigua en la pila decodifican tramas binarias con cero asignaciones en el heap. Tercero, en Validar con patterns, pattern matching relacional y de propiedades clasifica las lecturas descartando temperaturas fuera del rango operativo. Cuarto, en Publicar al Channel, un canal asíncrono delimitado aplica contrapresión automática suspendiendo al emisor cuando el búfer alcanza su capacidad. Quinto, en Agrupar con LINQ, consultas expresivas agrupan los eventos por identificador de dispositivo y calculan agregados materializando el resultado en una frontera temporal concreta. Sexto, en Propagar cancelación, señales cooperativas con CancellationToken atraviesan las expresiones await foreach cerrando los bucles sin dejar tareas huérfanas. Séptimo, en Resolver buffer retenido, la encapsulación de buffers en bloques using con IMemoryOwner garantiza la devolución inmediata de la memoria al ArrayPool. Y octavo, en Verificar el contrato, pruebas basadas en propiedades y contadores de telemetría comprueban que cada lectura recibida fue aceptada, rechazada o agregada exactamente una vez.",
        visualOutcome:
          "la animación visualiza la ingesta de telemetría a través del runtime de .NET, destacando el procesamiento de bajo consumo de memoria con Span, la amortiguación del Channel delimitado y la cancelación limpia sin pérdida de eventos.",
      });

    case "visual-basic":
      return buildPracticalPresentationAudioTrack("visual-basic", {
        title: practical?.title ?? "Visual Basic en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · WinForms y biblioteca compartida",
        family: "arquitectura MVP de escritorio, tipado estricto e interoperabilidad .NET",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una aplicación empresarial de escritorio en Visual Basic .NET se moderniza en ocho etapas arquitectónicas. Primero, en Activar tipos estrictos, la directiva Option Strict On deshabilita el enlace tardío y conversiones implícitas dudosas forzando contratos tipados en tiempo de compilación. Segundo, en Modelar la orden, una clase de dominio encapsula reglas de validación en propiedades Get y Set evitando que formularios manipulen estados inconsistentes. Tercero, en Separar el presenter mediante el patrón MVP, la cláusula Handles intercepta clics del botón delegando la lógica del caso de uso a un presentador desacoplado y comprobable. Cuarto, en Validar y proyectar con LINQ, una consulta declarativa filtra órdenes activas y proyecta los datos en una vista de grilla sin recálculos redundantes. Quinto, en Guardar sin bloquear, el operador Await delega la persistencia asíncrona a un repositorio en segundo plano liberando el hilo principal para mantener la ventana interactiva. Sexto, en Encontrar suscripción doble, la inspección detecta que AddHandler registró suscriptores múltiples sin desvincularlos reteniendo ventanas en memoria. Séptimo, en Cerrar el lifecycle, la llamada simétrica a RemoveHandler dentro del método Dispose elimina la referencia del recolector de basura corrigiendo la fuga. Y octavo, en Compartir con C#, el ensamblado de dominio compilado en VB.NET se consume directamente desde un worker concurrente en C# compartiendo tipos en el mismo runtime de .NET.",
        visualOutcome:
          "la animación modela la arquitectura de la ventana WinForms, mostrando la fluidez de la interfaz gracias a tareas asíncronas, la corrección de suscripciones en Dispose y la interoperabilidad transparente con ensamblados de C#.",
      });

    case "dart":
      return buildPracticalPresentationAudioTrack("dart", {
        title: practical?.title ?? "Dart en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Ingesta masiva y serialización concurrente con Dart Isolates",
        family: "memoria aislada con Isolates, Sound Null Safety y compilación dual JIT/AOT",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un pipeline de telemetría de alta frecuencia se ejecuta en seis etapas de alto rendimiento en Dart. Primero, en Inicialización de Worker Isolate, se spawnea un hilo independiente sin memoria compartida coordinado por puertos SendPort y ReceivePort sin bloqueos de mutex. Segundo, en Normalización tipada con Records y Sound Null Safety, tuplas inmutables y contratos estrictos empaquetan los datos sin sobrecoste de asignaciones redundantes en el heap. Tercero, en Transformación reactiva con Streams y async*, generadores asíncronos procesan el flujo continuo con consumo perezoso mediante await for. Cuarto, en Detección de saturación en Microtask Queue, llamadas recursivas a microtareas monopolizan el event loop disparando alertas por inanición de eventos de I/O. Quinto, en Desacoplamiento y balanceo con Isolate.run, cómputos pesados se delegan a un worker temporal restaurando la latencia del bucle principal a menos de tres milisegundos. Y sexto, en Compilación nativa AOT y verificación de rendimiento, el compilador genera un binario ELF optimizado que procesa más de cien mil eventos por segundo con recolección generacional submilimétrica.",
        visualOutcome:
          "la animación ilustra la coordinación de isolates de Dart, la mitigación de sobrecarga en la cola de microtareas y el flujo ininterrumpido de telemetría procesado por el binario compilado en modo Ahead-Of-Time.",
      });

    case "prolog":
      return buildPracticalPresentationAudioTrack("prolog", {
        title: practical?.title ?? "Prolog en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Caso integrado · Planificador explicable de respuesta a incidentes",
        family: "programación lógica relacional, CLP(FD), tabling y derivación de pruebas",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un planificador de respuesta a incidentes en Prolog deduce la asignación óptima de equipos en quince etapas deductivas. Primero, en Definir el contrato, un módulo encapsula la interfaz pública. Segundo, en Cargar hechos versionados, integrantes y habilidades se modelan como axiomas relacionales. Tercero, en Analizar la solicitud, una gramática de cláusulas definidas (DCG) convierte texto en un AST tipado. Cuarto, en Validar la frontera, se exige que los términos sean cerrados y seguros. Quinto, en Derivar requisitos, reglas lógicas deducen los roles obligatorios. Sexto, en Generar candidatos, cláusulas reversibles proponen integrantes según turnos y destrezas. Séptimo, en Construir el plan, la recursión acumula parejas rol-persona. Octavo, en Propagar restricciones, CLP(FD) acota dominios enteros y cotas de tiempo de respuesta antes de enumerar. Noveno, en Resolver rutas, tabling memoiza búsquedas evitando ciclos infinitos. Décimo, en Detectar contradicción, la unificación falla al detectar una persona duplicada. Undécimo, en Retroceder, el trail desata bindings explorando ramas alternas. Duodécimo, en Completar soluciones, labeling materializa planes válidos. Decimotercero, en Elegir el menor costo, setof selecciona el plan de menor tiempo. Decimocuarto, en Construir la explicación, el árbol de derivación se expone como prueba auditable. Y decimoquinto, en Publicar el resultado, un endpoint seguro entrega la solución y justificación en formato JSON estructurado.",
        visualOutcome:
          "la animación despliega el árbol de búsqueda SLD de Prolog, visualizando la propagación de restricciones, el retroceso tras detectar la asignación duplicada y la derivación de la prueba lógica completa.",
      });

    case "haskell":
      return buildPracticalPresentationAudioTrack("haskell", {
        title: practical?.title ?? "Haskell en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Interpretar expresiones con tipos: AST, Applicative y QuickCheck",
        family: "pureza funcional estricta, tipos algebraicos y evaluación perezosa",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un intérprete de expresiones aritméticas se construye en cinco etapas funcionales puras en Haskell. Primero, en Definir el AST, tipos de datos algebraicos modelan literales, sumas y divisiones excluyendo estados sintácticos inválidos en tiempo de compilación. Segundo, en Evaluar composición, functores aplicativos combinan ramas de evaluación propagando contextos puros sin mutación. Tercero, en Encontrar división por cero, la rama anómala se captura como un constructor Left dentro del tipo Either sin lanzar excepciones no controladas ni usar centinelas. Cuarto, en Recuperar en frontera, la interfaz traduce el error explícito en un mensaje de diagnóstico manteniendo el núcleo matemático libre de efectos secundarios. Y quinto, en Probar propiedades con QuickCheck, generadores automáticos someten el evaluador a cientos de combinaciones aleatorias verificando la preservación de identidades algebraicas.",
        visualOutcome:
          "la animación recorre el árbol de sintaxis abstracta en Haskell, mostrando la reducción de thunks perezosos, la canalización del error en la mónada Either y la verificación formal con pruebas de propiedades QuickCheck.",
      });

    case "kotlin":
      return buildPracticalPresentationAudioTrack("kotlin", {
        title: practical?.title ?? "Kotlin en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Sincronizar datos sin perder cancelación: Flow y concurrencia estructurada",
        family: "null safety estricto, coroutines reactivas y concurrencia estructurada",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un servicio de sincronización móvil offline-first se ejecuta en cinco etapas coordinadas en Kotlin. Primero, en Modelar estados, una interfaz sellada (sealed interface) define estados discretos de pendiente, éxito y error forzando cobertura exhaustiva en sentencias when. Segundo, en Combinar cambios con Flow, un stream asíncrono emite mutaciones locales aplicando suspensión sin bloquear hilos. Tercero, en Detectar trabajo huérfano, el lanzamiento de tareas en GlobalScope provoca que una carga continúe en segundo plano tras abandonar la pantalla poniendo en riesgo la consistencia. Cuarto, en Vincular al scope, coroutineScope restaura la concurrencia estructurada garantizando que la cancelación del padre interrumpa ordenadamente a todas las tareas hijas. Y quinto, en Confirmar persistencia, la transacción local se confirma y la UI recibe el evento de éxito en orden estricto y trazable.",
        visualOutcome:
          "la animación traza el ciclo de vida de las coroutines de Kotlin, evidenciando la interrupción de la tarea huérfana al cerrar la vista y la confirmación reactiva del estado sincronizado a través de Flow.",
      });

    case "java":
      return buildPracticalPresentationAudioTrack("java", {
        title: practical?.title ?? "Java en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Procesar pedidos dentro de la JVM: Records, ThreadPools y Java Flight Recorder",
        family: "runtime JVM, concurrencia administrada, records y observabilidad JFR",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un motor de procesamiento de pedidos comerciales se opera en cinco fases de ingeniería sobre la JVM de Java. Primero, en Definir dominio, records inmutables declaran la estructura de la orden y sus líneas de compra con constructores canónicos transparentes. Segundo, en Ejecutar trabajo en ThreadPool, un executor administra workers para procesar transacciones concurrentes desacopladas del hilo principal. Tercero, en Detectar cola infinita, el uso de una LinkedBlockingQueue no acotada provoca saturación de memoria al acumular solicitudes más rápido de lo que se procesan. Cuarto, en Aplicar backpressure, un ThreadPoolExecutor reconfigurado con ArrayBlockingQueue de capacidad fija y política de descarte controlado protege el heap estabilizando el consumo de RAM. Y quinto, en Observar y cerrar, Java Flight Recorder registra métricas de pausas de recolección de basura y latencia, concluyendo con un apagado elegante (shutdown) y drenaje ordenado de tareas en vuelo.",
        visualOutcome:
          "la animación reproduce la actividad interna de la JVM, visualizando la saturación del heap por la cola ilimitada, la estabilización del buffer con backpressure y el análisis de telemetría de hilos mediante Java Flight Recorder.",
      });

    case "r":
      return buildPracticalPresentationAudioTrack("r", {
        title: practical?.title ?? "R en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Publicar un análisis reproducible: vectores, modelos lineales y Quarto",
        family: "cómputo estadístico vectorial, fórmulas lineales y publicación reproducible",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un estudio bioestadístico se procesa a través de cinco etapas rigurosas en R. Primero, en Importar con esquema, un archivo CSV se carga en un data frame preservando tipos y tipificando valores ausentes como centinelas NA sin inventar ceros. Segundo, en Explorar distribución, resúmenes estadísticos y gráficos vectoriales examinan la varianza y rangos intercuartiles. Tercero, en Detectar sesgo, la aplicación imprudente de na.omit descarta una gran proporción de registros alterando la representatividad poblacional del ajuste lineal. Cuarto, en Explicar y recuperar, variables de cobertura analizan la distribución de los faltantes por estrato y aplican imputaciones documentadas y justificadas. Y quinto, en Renderizar evidencia con Quarto, el script genera un reporte reproducible unificando prosa, tablas, modelos y entorno sessionInfo con semilla determinista.",
        visualOutcome:
          "la animación ilustra las transformaciones tabulares de R, alertando sobre el sesgo de selección introducido por el descarte ingenuo de datos y culminando en el renderizado del informe interactivo en Quarto.",
      });

    case "assembly":
    case "ensamblador":
      return buildPracticalPresentationAudioTrack("assembly", {
        title: practical?.title ?? "Ensamblador en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Corregir una rutina de suma nativa: ABI System V, alineación de pila y SIMD",
        family: "arquitectura de procesador, registros x86-64, pila y alineación de ABI",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una rutina crítica de procesamiento en ensamblador x86-64 se depura en cinco etapas a nivel de máquina. Primero, en Fijar contrato ABI, los registros de entrada rdi y rsi reciben el puntero al buffer y su longitud, designando a rax como acumulador del retorno según la convención System V. Segundo, en Recorrer el buffer, instrucciones aritméticas iteran por el vector de memoria leyendo palabras contiguas de ocho bytes. Tercero, en Detectar pila desalineada, una instrucción call hacia una función auxiliar falla estrepitosamente debido a que el puntero rsp no respeta la frontera obligatoria de alineación a dieciséis bytes. Cuarto, en Restaurar frame, ajustes en el prólogo mediante sub rsp de ocho bytes realinean la pila satisfaciendo el estándar de la ABI y preservando registros del llamador. Y quinto, en Contrastar implementación, aserciones automatizadas comparan la salida de la subrutina en ensamblador contra una función de referencia escrita en C verificando equivalencia binaria y casos de borde.",
        visualOutcome:
          "la animación expone los registros de la CPU y el stack frame en memoria, evidenciando el desajuste del puntero de pila y su corrección quirúrgica para cumplir estrictamente con la ABI de 64 bits.",
      });

    case "erlang":
      return buildPracticalPresentationAudioTrack("erlang", {
        title: practical?.title ?? "Erlang en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Supervisar un procesador de mensajes: procesos BEAM, GenServer y OTP",
        family: "máquina virtual BEAM, modelo de actores y árboles de supervisión tolerantes a fallos",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un servicio de mensajería tolerante a fallos se orquesta en cinco etapas sobre la máquina virtual BEAM de Erlang. Primero, en Iniciar aplicación OTP, el supervisor raíz arranca registrando especificaciones de procesos hijos con estrategia de resiliencia one_for_one. Segundo, en Procesar mensaje, un proceso GenServer recibe eventos en su buzón privado extrayéndolos secuencialmente sin memoria compartida. Tercero, en Provocar crash aislado, un paquete de datos malformado dispara una excepción interna derribando únicamente al worker afectado mientras un enlace supervisado emite el reporte de caída. Cuarto, en Reiniciar desde checkpoint, el supervisor detecta la señal de salida e instancia inmediatamente un nuevo worker que retoma el procesamiento desde el último offset confirmado en disco. Y quinto, en Verificar entrega, el sistema confirma que no se produjeron duplicaciones de eventos y que el árbol de procesos permanece saludable y disponible.",
        visualOutcome:
          "la animación recrea el árbol de supervisión de Erlang/OTP, mostrando el aislamiento de la caída del proceso defectuoso, la intervención inmediata del supervisor y la reanudación del flujo sin afectar al resto del sistema.",
      });

    case "lisp":
      return buildPracticalPresentationAudioTrack("lisp", {
        title: practical?.title ?? "Lisp en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Construir una DSL con macros: S-expressions, gensym y evaluación",
        family: "homoiconicidad, macroexpansión sintáctica y entornos léxicos interactivos",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un lenguaje específico de dominio (DSL) para evaluación de reglas se construye en cinco etapas metaprogramadas en Lisp. Primero, en Leer la regla, el reader traduce la sintaxis en un árbol de listas y símbolos (S-expressions) tratándolos como datos de primera clase. Segundo, en Expandir la DSL, una macro reescribe la estructura de la regla transformándola en una función evaluable antes de la compilación. Tercero, en Detectar captura, un identificador auxiliar introducido por la macro colisiona accidentalmente con una variable del entorno llamador alterando el resultado. Cuarto, en Generar símbolo fresco, la función gensym genera un identificador único e irrepetible eliminando la interferencia léxica y garantizando una macroexpansión higiénica. Y quinto, en Compilar y probar, la función resultante se compila en memoria nativa y una suite de pruebas verifica la evaluación correcta de condiciones normales y límites.",
        visualOutcome:
          "la animación exhibe la metamorfosis de las S-expressions durante la fase de macroexpansión en Lisp, revelando la resolución de la colisión de variables con gensym y la ejecución optimizada en el REPL.",
      });

    case "perl":
      return buildPracticalPresentationAudioTrack("perl", {
        title: practical?.title ?? "Perl en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Transformar un log como stream: expresiones regulares, Unicode y TAP",
        family: "procesamiento de streams de texto, regex nativas y pruebas TAP",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, una tubería de procesamiento de bitácoras del sistema se opera en cinco fases de texto en Perl. Primero, en Abrir de forma segura, el descriptor de archivo se inicializa con la capa de codificación UTF-8 procesando el archivo línea por línea sin cargar gigabytes en memoria. Segundo, en Extraer campos, expresiones regulares con grupos de captura extraen identificadores y estados en variables numéricas sin copias superfluas. Tercero, en Detectar byte inválido, una secuencia de bytes malformada que viola el estándar Unicode detiene el analizador alertando sobre la corrupción. Cuarto, en Separar cuarentena, un bloque defensivo con eval y el módulo Encode captura la excepción enviando el registro anómalo a un archivo de auditoría mientras el stream principal continúa sin interrupciones. Y quinto, en Comprobar resumen con TAP, pruebas automatizadas validan los agregados y conteos emitiendo diagnósticos bajo el protocolo estándar Test Anything Protocol.",
        visualOutcome:
          "la animación sigue el flujo de líneas de registro a través de las expresiones regulares de Perl, destacando el aislamiento defensivo de la línea corrupta en cuarentena y la generación del reporte final verificado.",
      });

    case "raku":
      return buildPracticalPresentationAudioTrack("raku", {
        title: practical?.title ?? "Raku en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Parsear una configuración con Grammar: tokens, rules y AST",
        family: "gramáticas integradas, despacho múltiple y árboles sintácticos declarativos",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un analizador de archivos de configuración se implementa en cinco etapas gramaticales en Raku. Primero, en Definir grammar, bloques estructurados de tokens y rules descomponen pares de clave y valor con coincidencia declarativa. Segundo, en Construir AST, una clase de acciones separada intercepta capturas sintácticas y las traduce en un árbol de objetos fuertemente tipado. Tercero, en Detectar ambigüedad, una entrada con operadores duplicados produce un emparejamiento parcial con residuo no consumido señalando la inconsistencia del formato. Cuarto, en Ajustar regla y mensaje, la regla gramatical incorpora anclas de fin de línea y mensajes de error claros delimitando con precisión los valores admitidos. Y quinto, en Aplicar con pruebas, el parser se valida contra un banco de casos válidos y extremos confirmando que la configuración resultante es segura antes de alimentar al sistema operativo.",
        visualOutcome:
          "la animación modela el árbol de parsing de la gramática de Raku, evidenciando la separación limpia entre el reconocimiento sintáctico de la regla y la instanciación del árbol de sintaxis abstracta en la clase de acciones.",
      });

    case "scala":
      return buildPracticalPresentationAudioTrack("scala", {
        title: practical?.title ?? "Scala en acción",
        subtitle: practical?.subtitle ?? practical?.eyebrow ?? "Procesar un flujo de eventos tipado: Enums, case classes y JVM",
        family: "orientación a objetos y programación funcional, Scala 3 y sistema de tipos JVM",
        section: "Presentación interactiva",
        stagesExplanation:
          "En esta presentación interactiva, un flujo de eventos transaccionales se procesa a través de cinco etapas tipadas en Scala 3 sobre la JVM. Primero, en Modelar eventos, un enum algebraico define los eventos posibles de apertura y cierre estableciendo una jerarquía sellada para análisis exhaustivo. Segundo, en Transformar colección, métodos funcionales como groupMapReduce agregan transacciones por identificador componiendo mapas y reducciones en una sola pasada. Tercero, en Añadir caso sin manejar, la incorporación de un nuevo evento de reintento activa una advertencia del compilador por pattern matching no exhaustivo impidiendo generar un build incompleto. Cuarto, en Recuperar semántica, el caso faltante se incorpora explícitamente en la función de mapeo garantizando la coherencia del contrato de negocio. Y quinto, en Publicar evidencia, pruebas unitarias automatizadas con sbt validan la integridad de las transformaciones y la compatibilidad binaria del artefacto generado.",
        visualOutcome:
          "la animación ilustra la agregación funcional de eventos en Scala, destacando la protección del compilador ante patrones no exhaustivos y la compilación exitosa a bytecode optimizado para la máquina virtual de Java.",
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


