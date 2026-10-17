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
 * Colecciones con audio narraciones didácticas activas.
 * PR 1: Interfaces, Web y Móvil (9 colecciones + javascript base).
 * PR 2: Plataformas y Servidores (10 colecciones).
 * PR 3: Datos y Bases de Datos (10 colecciones).
 * PR 4: Fundamentos de la Computación (5 colecciones).
 * PR 5: Lenguajes Web y Modernos (6 colecciones).
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
    MODERN_LANGUAGES_VISUAL_EXPLANATIONS[concept.title];
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


