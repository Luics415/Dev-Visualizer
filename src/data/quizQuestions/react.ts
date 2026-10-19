import type { QuizQuestion } from "@/data/quizTypes";

export const reactQuestions: QuizQuestion[] = [
  {
    id: "rct-q-01",
    collectionId: "react",
    question: "¿Cómo estructura internamente la arquitectura 'Fiber' de React el árbol de componentes para permitir el renderizado concurrente?",
    options: [
      "Como una lista enlazada de nodos Fiber conectados por punteros 'child', 'sibling' y 'return' que permite pausar y reanudar el trabajo.",
      "Como un árbol binario balanceado de solo lectura almacenado en la memoria caché del navegador.",
      "Como un array unidimensional plano que se reconstruye completamente en cada llamada a setState.",
      "Como un grafo de dependencias cíclico gestionado por Web Workers en segundo plano."
    ],
    correctAnswerIndex: 0,
    explanation: "React Fiber reemplazó la pila recursiva síncrona por una lista enlazada de nodos con punteros 'child' (primer hijo), 'sibling' (siguiente hermano) y 'return' (padre). Esto permite que el Scheduler pause, descarte o reanude fragmentos de trabajo según su prioridad.",
    topic: "Arquitectura Fiber & Concurrencia",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-02",
    collectionId: "react",
    question: "¿Cuál es la diferencia fundamental entre la fase de 'Render' y la fase de 'Commit' en React?",
    options: [
      "La fase de Render es pura, asíncrona y puede pausarse o descartarse; la fase de Commit es síncrona y aplica las mutaciones al DOM real.",
      "La fase de Render escribe en el DOM del navegador; la fase de Commit descarga los bundles JavaScript.",
      "La fase de Commit solo se ejecuta en servidores Node.js; la fase de Render es exclusiva del cliente.",
      "Ambas fases son idénticas y se ejecutan en un único paso atómico e indivisible."
    ],
    correctAnswerIndex: 0,
    explanation: "En la fase de Render, React computa el diff y planifica cambios (sin efectos secundarios en el DOM, por lo que puede reintentarse concurrentemente). En la fase de Commit, React aplica de forma síncrona e ininterrumpida las mutaciones al DOM y ejecuta efectos de layout.",
    topic: "Fases del Ciclo de Vida",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-03",
    collectionId: "react",
    question: "¿Por qué React 18 introdujo 'useSyncExternalStore' en lugar de suscribirse a stores externos en 'useEffect'?",
    options: [
      "Evita el fenómeno de 'tearing' (inconsistencia visual) garantizando lecturas síncronas del store durante el renderizado concurrente.",
      "Permite sincronizar el estado directamente con bases de datos MySQL remotas vía WebSockets.",
      "Convierte automáticamente stores basados en Redux en señales de Solid.js.",
      "Reduce el consumo de batería en dispositivos móviles al espaciar las suscripciones."
    ],
    correctAnswerIndex: 0,
    explanation: "En Concurrent Mode, React puede pausar un renderizado; si un store externo muta mientras el render está en pausa, diferentes componentes podrían renderizar datos inconsistentes ('tearing'). useSyncExternalStore previene esto forzando consistencia síncrona.",
    topic: "Hooks Avanzados & Concurrencia",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-04",
    collectionId: "react",
    question: "¿Cómo almacena React el estado de múltiples Hooks invocados dentro de un mismo componente funcional?",
    options: [
      "En una lista enlazada simple de objetos de Hook dentro de la propiedad 'memoizedState' del nodo Fiber correspondiente.",
      "En un mapa hash global indexado por el nombre literal de la variable del hook.",
      "En el almacenamiento local 'sessionStorage' serializado como cadenas JSON.",
      "En variables de entorno temporales del proceso Node.js."
    ],
    correctAnswerIndex: 0,
    explanation: "Cada nodo Fiber tiene una lista enlazada en 'fiber.memoizedState'. Cada llamada a useState o useEffect avanza al siguiente nodo de la lista. Esta es la razón estricta por la cual los hooks no pueden llamarse condicionalmente ni dentro de bucles.",
    topic: "Internales de Hooks & Memoria",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-05",
    collectionId: "react",
    question: "¿Cuál es la función del hook 'useTransition' en React 18+?",
    options: [
      "Marca una actualización de estado como una transición no urgente, permitiendo que eventos de usuario urgentes (como teclear) la interrumpan.",
      "Añade animaciones CSS de transición entre páginas al utilizar React Router.",
      "Convierte componentes de cliente en React Server Components estáticos.",
      "Transfiere el estado del componente a un Service Worker para almacenamiento offline."
    ],
    correctAnswerIndex: 0,
    explanation: "useTransition devuelve [isPending, startTransition]. Las actualizaciones envueltas en startTransition se marcan con prioridad baja, manteniendo la interfaz receptiva ante entradas de teclado o clics mientras se computan cálculos pesados.",
    topic: "Concurrencia & Scheduling",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-06",
    collectionId: "react",
    question: "¿Cómo opera el 'Automatic Batching' introducido en React 18 frente a versiones previas?",
    options: [
      "Agrupa múltiples actualizaciones de estado en un único render, incluyendo promesas, setTimeout y controladores de eventos nativos.",
      "Solo agrupa actualizaciones dentro de controladores de eventos sintéticos de React como onClick.",
      "Ejecuta un render independiente inmediatamente por cada invocación a setState sin importar el contexto.",
      "Batching se desactiva por defecto a menos que se configure el plugin de Babel correspondiente."
    ],
    correctAnswerIndex: 0,
    explanation: "Antes de React 18, el batching solo ocurría dentro de synthetic event handlers. En React 18, todas las actualizaciones dentro de Promises, setTimeout, fetch callbacks o listeners nativos se agrupan automáticamente en un solo render.",
    topic: "Estado & Batching",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-07",
    collectionId: "react",
    question: "¿Qué ocurre si se utiliza el índice de un array como prop 'key' en una lista de elementos que puede reordenarse o filtrarse?",
    options: [
      "Provoca errores de estado cruzado e incoherencias visuales, ya que React asume que los elementos conservan la misma identidad por su posición.",
      "Lanza un error de compilación fatal en TypeScript impidiendo construir la aplicación.",
      "Desactiva el recolector de basura para los nodos DOM hijos.",
      "Obliga al navegador a repintar la ventana completa en cada frame de animación."
    ],
    correctAnswerIndex: 0,
    explanation: "Las 'keys' indican a React la identidad de un elemento entre renders. Si se usa el índice y la lista se filtra o reordena, un componente puede recibir el estado interno (inputs, foco, animaciones) del elemento previo que ocupaba esa misma posición numérica.",
    topic: "Reconciliación & Diffing",
    difficulty: "básico"
  },
  {
    id: "rct-q-08",
    collectionId: "react",
    question: "¿Cuál es la diferencia fundamental entre React Server Components (RSC) y Server-Side Rendering (SSR) clásico?",
    options: [
      "RSC se ejecutan exclusivamente en el servidor y su código nunca se incluye en el bundle cliente; SSR genera HTML inicial de componentes cliente que luego deben hidratarse.",
      "RSC solo funciona con bases de datos GraphQL; SSR solo admite peticiones REST.",
      "SSR no requiere Node.js en el backend, mientras que RSC necesita microservicios en Go.",
      "Son términos exactamente sinónimos promovidos por diferentes herramientas de compilación."
    ],
    correctAnswerIndex: 0,
    explanation: "En SSR tradicional, todos los componentes se empaquetan y envían al cliente para hidratación. En RSC, los Server Components ejecutan lógica en el servidor (acceso a DB, fs) y emiten una descripción en formato stream/JSON especial, con 0 KB de JavaScript añadido al bundle cliente.",
    topic: "React Server Components (RSC)",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-09",
    collectionId: "react",
    question: "¿Dónde delega React los eventos sintéticos ('SyntheticEvent') a partir de React 17?",
    options: [
      "En el nodo raíz del contenedor del DOM donde se monta la aplicación (root element), en lugar de en el objeto 'document'.",
      "En el objeto global 'window' para capturar eventos de pestañas secundarias.",
      "Directamente en cada elemento individual del DOM mediante addEventListener inline.",
      "En un Service Worker que intercepta eventos de teclado y ratón."
    ],
    correctAnswerIndex: 0,
    explanation: "En React 16 y anteriores, los eventos se delegaban en 'document'. React 17 cambió la delegación al contenedor raíz donde se llama a createRoot/render, permitiendo anidar de forma segura múltiples aplicaciones de React con versiones distintas en una misma página.",
    topic: "Eventos Sintéticos & DOM",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-10",
    collectionId: "react",
    question: "¿Qué problema resuelve 'useDeferredValue' frente a 'useTransition'?",
    options: [
      "Difiere la propagación de un valor recibido por props cuando el consumidor no tiene acceso directo a la función que dispara la actualización del estado.",
      "Pausa la descarga de imágenes en el navegador hasta que entran en el viewport visual.",
      "Añade un retardo de debounce fijo de 300 milisegundos en peticiones HTTP.",
      "Convierte promesas rechazadas en valores indefinidos silenciosamente."
    ],
    correctAnswerIndex: 0,
    explanation: "Mientras 'useTransition' se usa cuando tú controlas la llamada a setState que inicia la actualización, 'useDeferredValue' se usa cuando recibes un valor derivado (como props de un componente padre) y deseas aplazar su re-renderizado sin bloquear la UI.",
    topic: "Concurrencia & Scheduling",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-11",
    collectionId: "react",
    question: "¿Por qué una función en 'useEffect' puede sufrir de 'Stale Closures' (clausuras obsoletas)?",
    options: [
      "Porque la función de efecto captura las variables del render en que fue creada; si el array de dependencias no se actualiza, sigue leyendo valores viejos.",
      "Porque el navegador vacía la memoria de closures cada cinco segundos automáticamente.",
      "Porque React clona las funciones en memoria de solo lectura durante la fase de commit.",
      "Ocurre exclusivamente cuando se utiliza el modo estricto de React en producción."
    ],
    correctAnswerIndex: 0,
    explanation: "Las closures en JavaScript capturan variables léxicas. Si un useEffect o useCallback omite una dependencia en su array, la función seguirá ejecutando con los valores del render original en el que se instanció, generando comportamientos erráticos.",
    topic: "Hooks & Closures",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-12",
    collectionId: "react",
    question: "¿Cuál es el propósito del método estático 'getDerivedStateFromError' en un Error Boundary?",
    options: [
      "Actualizar el estado del componente para que el siguiente renderizado muestre una interfaz de reserva (fallback UI) tras un error.",
      "Registrar el error en un servicio externo de telemetría como Sentry o Datadog.",
      "Reiniciar automáticamente el árbol de componentes intentando montar la vista tres veces.",
      "Suprimir el error en la consola del desarrollador para evitar alertas en producción."
    ],
    correctAnswerIndex: 0,
    explanation: "'static getDerivedStateFromError(error)' se invoca durante la fase de Render tras lanzarse un error en un hijo. Debe retornar el nuevo estado (ej. { hasError: true }) para que React dibuje la UI de contingencia de inmediato.",
    topic: "Error Boundaries & Resiliencia",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-13",
    collectionId: "react",
    question: "¿Cómo optimiza el nuevo 'React Compiler' (React Forget) el rendimiento de componentes?",
    options: [
      "Analiza el código estáticamente y aplica memoización granular a nivel de expresiones en tiempo de compilación, eliminando la necesidad de useMemo y useCallback manuales.",
      "Convierte los componentes en código C++ compilado a WebAssembly en el navegador.",
      "Desactiva el Virtual DOM y manipula directamente el DOM mediante referencias directas como Svelte.",
      "Elimina todas las etiquetas JSX y las sustituye por llamadas a document.createElement."
    ],
    correctAnswerIndex: 0,
    explanation: "El React Compiler comprende las reglas de React y transforma el código en tiempo de compilación. Genera estructuras de memoización automáticas para valores y componentes, garantizando que solo se re-ejecute lo estrictamente necesario sin sobrecarga manual.",
    topic: "React Compiler & Futuro",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-14",
    collectionId: "react",
    question: "¿Qué efecto tiene invocar 'flushSync()' en React 18?",
    options: [
      "Fuerza a React a vaciar inmediatamente las actualizaciones pendientes y sincronizar el DOM de forma síncrona y bloqueante.",
      "Borra todas las entradas almacenadas en la caché de peticiones de red del navegador.",
      "Sincroniza el estado del componente con el LocalStorage del cliente de forma atómica.",
      "Cancela todas las transiciones concurrentes activas arrojando una excepción."
    ],
    correctAnswerIndex: 0,
    explanation: "'flushSync' es una vía de escape excepcional. Obliga a React a abandonar el batching y forzar una actualización inmediata del DOM síncronamente, necesario únicamente para integraciones con bibliotecas de terceros o mediciones de layout imperativas.",
    topic: "Estado & Batching",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-15",
    collectionId: "react",
    question: "¿Cuál es la función del componente '<Suspense>' en el flujo de renderizado de React?",
    options: [
      "Coordina la carga declarativa de recursos (código diferido o datos asíncronos), mostrando una UI de reserva hasta que el recurso esté listo.",
      "Pausa la ejecución de scripts en pestañas secundarias para ahorrar batería en el cliente.",
      "Intercepta errores no controlados actuando como un Error Boundary de bajo nivel.",
      "Convierte peticiones HTTP síncronas en transmisiones bidireccionales por WebSockets."
    ],
    correctAnswerIndex: 0,
    explanation: "Suspense permite atrapar la 'suspensión' de un componente que espera un recurso asíncrono (mediante lazy loading o lectura de datos con soporte de Suspense) y proyectar un 'fallback' declarativamente sin gestionar estados booleanos 'isLoading' manuales.",
    topic: "Suspense & Streaming",
    difficulty: "básico"
  },
  {
    id: "rct-q-16",
    collectionId: "react",
    question: "¿Qué ventaja ofrece el hook 'useId' introducido en React 18 para accesibilidad (a11y)?",
    options: [
      "Genera identificadores estables y únicos compartidos de forma coherente entre el servidor y el cliente, evitando fallos de hidratación.",
      "Asigna un identificador UUID v4 criptográfico a cada usuario autenticado en la sesión.",
      "Crea identificadores numéricos que se incrementan secuencialmente en la base de datos.",
      "Genera claves hash para optimizar el renderizado de listas sin usar la prop key."
    ],
    correctAnswerIndex: 0,
    explanation: "Si el servidor genera un ID aleatorio (como Math.random()) y el cliente genera otro, la hidratación falla por discrepancia. useId genera strings estables basados en la posición del componente en el árbol Fiber, ideal para aria-labelledby o htmlFor.",
    topic: "Hooks & Accesibilidad",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-17",
    collectionId: "react",
    question: "¿Cuál es la diferencia entre 'useLayoutEffect' y 'useEffect'?",
    options: [
      "'useLayoutEffect' se dispara de forma síncrona después de todas las mutaciones del DOM pero antes de que el navegador pinte en pantalla; 'useEffect' se ejecuta tras el pintado.",
      "'useLayoutEffect' solo funciona en aplicaciones móviles con React Native; 'useEffect' es para la web.",
      "'useLayoutEffect' se ejecuta en un hilo separado de Web Workers; 'useEffect' en el hilo principal.",
      "No existe diferencia; son sinónimos con nombres adaptados para diferentes patrones de diseño."
    ],
    correctAnswerIndex: 0,
    explanation: "useLayoutEffect bloquea el pintado visual del navegador y corre inmediatamente tras modificar el DOM, ideal para medir dimensiones o posiciones de nodos y evitar parpadeos visuales (flicker). useEffect se ejecuta de forma diferida tras el pintado.",
    topic: "Hooks de Efectos",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-18",
    collectionId: "react",
    question: "¿Qué simplificación introduce React 19 en el manejo de 'ref' en componentes funcionales?",
    options: [
      "Permite pasar 'ref' directamente como una prop ordinaria en componentes funcionales, deprecando gradualmente 'forwardRef'.",
      "Prohíbe el uso de referencias mutables forzando el uso de selectores CSS universales.",
      "Convierte todas las referencias en observables reactivos basados en RxJS.",
      "Hace obligatorio el uso de useRef en todas las etiquetas HTML del JSX."
    ],
    correctAnswerIndex: 0,
    explanation: "En React 19, 'ref' es simplemente una prop más en componentes funcionales (function MyInput({ placeholder, ref })), eliminando la necesidad de envolver componentes en la compleja función forwardRef().",
    topic: "Refs & React 19",
    difficulty: "básico"
  },
  {
    id: "rct-q-19",
    collectionId: "react",
    question: "¿Cuál es la regla de oro del 'Diffing Algorithm' de React con respecto a elementos de distinto tipo?",
    options: [
      "Si dos elementos tienen tipos diferentes (ej. de <div> a <span> o de <Header> a <Footer>), React desmonta todo el subárbol anterior y lo reconstruye desde cero.",
      "React intenta preservar los hijos mutando dinámicamente los estilos CSS del nodo.",
      "El compilador genera una advertencia en tiempo de ejecución pero mantiene el mismo nodo del DOM.",
      "Delega la decisión al algoritmo de renderizado nativo del navegador."
    ],
    correctAnswerIndex: 0,
    explanation: "El diffing de React asume complejidad O(n). Dos elementos de tipos diferentes producen árboles diferentes: React destruye el nodo viejo y todos sus hijos (invocando cleanups de efectos) y crea el nuevo nodo desde cero.",
    topic: "Reconciliación & Algoritmo Diff",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-20",
    collectionId: "react",
    question: "¿Qué garantiza el uso de 'createPortal()' en aplicaciones React?",
    options: [
      "Permite renderizar hijos en un nodo del DOM que existe fuera de la jerarquía física del DOM del componente padre, manteniendo la propagación de eventos de React.",
      "Crea un túnel de comunicación cifrado entre dos pestañas del navegador en tiempo real.",
      "Duplica el árbol de componentes dentro de un iframe aislado de forma segura.",
      "Genera ventanas emergentes del sistema operativo sin pasar por la barra de tareas."
    ],
    correctAnswerIndex: 0,
    explanation: "createPortal(children, domNode) monta el marcado en cualquier lugar del documento (ideal para modales, tooltips o menús flotantes), pero preserva el árbol de React para contextos y propagación de eventos sintéticos.",
    topic: "Portals & Renderizado Avanzado",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-21",
    collectionId: "react",
    question: "¿Por qué envolver un componente en 'React.memo' no garantiza que nunca se vuelva a renderizar si su componente padre lo hace?",
    options: [
      "Si el componente recibe props que son objetos, arrays o funciones recreadas en cada render sin memoizar, la comparación superficial (shallow compare) detecta diferencias.",
      "Porque React.memo solo funciona con componentes de clase heredados de PureComponent.",
      "Porque React.memo se desactiva automáticamente si el navegador tiene habilitado el modo de ahorro de energía.",
      "React.memo solo previene renderizados en servidores Node.js pero no en el cliente."
    ],
    correctAnswerIndex: 0,
    explanation: "React.memo realiza por defecto una comparación superficial (shallow equality: Object.is). Si el padre le pasa una función inline '() => {}' o un objeto literal '{}', las referencias cambian en cada render y el componente hijo se re-renderiza igualmente.",
    topic: "Rendimiento & Memoización",
    difficulty: "básico"
  },
  {
    id: "rct-q-22",
    collectionId: "react",
    question: "¿Cuál es el propósito del nuevo hook 'useActionState' en React 19 (anteriormente useFormState)?",
    options: [
      "Gestiona el estado derivado de una acción (Server Action o cliente), retornando el estado actual, la función disparadora y el flag 'isPending'.",
      "Reemplaza por completo a Redux Toolkit para gestión de estado global en microfrontends.",
      "Valida esquemas de bases de datos PostgreSQL antes de enviar formularios.",
      "Registra los clics del usuario en un almacén de analíticas de Google Analytics."
    ],
    correctAnswerIndex: 0,
    explanation: "useActionState(action, initialState) simplifica el manejo de formularios y Server Actions. Recibe la acción y retorna [state, formAction, isPending], integrando transiciones concurrentes y estado reactivo sin boilerplate manual.",
    topic: "React 19 & Actions",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-23",
    collectionId: "react",
    question: "¿Para qué sirve el hook 'useImperativeHandle' en combinación con 'ref'?",
    options: [
      "Personaliza y restringe la instancia de valor o los métodos que un componente hijo expone hacia el ref del componente padre.",
      "Permite ejecutar llamadas AJAX síncronas que bloquean el renderizado del componente.",
      "Otorga permisos de administrador para modificar las variables de estado de otros componentes hermanos.",
      "Fuerza a que un componente de clase implemente interfaces de TypeScript."
    ],
    correctAnswerIndex: 0,
    explanation: "En lugar de exponer el nodo DOM nativo crudo al padre, useImperativeHandle(ref, () => ({ focus, scrollIntoView })) permite filtrar la API expuesta, ofreciendo una interfaz limpia y encapsulada.",
    topic: "Refs & Encapsulamiento",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-24",
    collectionId: "react",
    question: "¿Qué efecto produce renderizar en 'Strict Mode' ('<React.StrictMode>') en entornos de desarrollo?",
    options: [
      "Ejecuta intencionadamente dos veces los efectos de montaje y funciones puras para ayudar a detectar efectos secundarios no idempotentes y fugas de memoria.",
      "Compila la aplicación con comprobación estricta de tipos de Rust en segundo plano.",
      "Bloquea cualquier llamada a APIs externas que no utilicen el protocolo HTTPS.",
      "Desactiva las advertencias de ESLint en la consola del navegador."
    ],
    correctAnswerIndex: 0,
    explanation: "En desarrollo, StrictMode monta, desmonta y remonta componentes (simulando navegación concurrente rápida) e invoca doblemente constructores y efectos para evidenciar si un efecto carece de función de limpieza (cleanup).",
    topic: "Buenas Prácticas & Depuración",
    difficulty: "básico"
  },
  {
    id: "rct-q-25",
    collectionId: "react",
    question: "¿Cómo optimiza 'Streaming SSR con Suspense' la métrica Time to First Byte (TTFB) y First Contentful Paint (FCP)?",
    options: [
      "Envía fragmentos de HTML tempranos del shell inmediatamente y transmite porciones suspendidas a medida que sus datos se resuelven sin esperar al render completo.",
      "Comprime los archivos JavaScript en formato WebP antes de enviarlos por HTTP/2.",
      "Almacena las páginas en la memoria caché del router doméstico del usuario.",
      "Elimina todo el código JavaScript de la aplicación sirviendo únicamente archivos de texto plano."
    ],
    correctAnswerIndex: 0,
    explanation: "En lugar de esperar a que todos los datos del backend se resuelvan antes de enviar el primer byte (SSR tradicional), Streaming SSR envía el esqueleto HTML de inmediato. Cuando los componentes suspendidos terminan, React transmite su HTML y pequeños scripts que los colocan en su lugar.",
    topic: "Streaming & Core Web Vitals",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-26",
    collectionId: "react",
    question: "¿Por qué los Hooks en React deben declararse siempre en el nivel superior y nunca dentro de condicionales o bucles?",
    options: [
      "Porque React depende del orden idéntico de invocación en cada render para vincular cada Hook con su nodo correspondiente en la lista enlazada del Fiber.",
      "Porque el intérprete de JavaScript V8 optimiza únicamente funciones con menos de diez líneas de código.",
      "Porque los bucles generan fugas de memoria en la pila del recolector de basura de React.",
      "Porque los condicionales provocan errores de sintaxis en el transpilador JSX de Babel."
    ],
    correctAnswerIndex: 0,
    explanation: "React no identifica los hooks por nombre, sino por el índice en la lista enlazada interna de la instancia Fiber. Si un hook se llama condicionalmente, el orden de los hooks se desfasa respecto a renders previos, corrompiendo el estado interno.",
    topic: "Reglas de los Hooks",
    difficulty: "básico"
  },
  {
    id: "rct-q-27",
    collectionId: "react",
    question: "¿Qué ocurre durante la 'Hidratación' (Hydration) en una aplicación React con renderizado en servidor?",
    options: [
      "React adjunta los listeners de eventos y sincroniza el árbol de componentes en memoria con el DOM estático preexistente renderizado por el servidor.",
      "El navegador descarga una copia completa del código fuente del backend en formato C#.",
      "El servidor limpia la memoria RAM del contenedor Docker tras enviar la respuesta HTTP.",
      "Se eliminan los estilos CSS en cascada para sustituirlos por estilos calculados en tiempo real."
    ],
    correctAnswerIndex: 0,
    explanation: "La hidratación toma el HTML estático emitido por el servidor y le añade interactividad en el cliente: inicializa el estado de los componentes, conecta los controladores de eventos y prepara el árbol Fiber sin recrear los nodos DOM.",
    topic: "SSR & Hidratación",
    difficulty: "intermedio"
  },
  {
    id: "rct-q-28",
    collectionId: "react",
    question: "¿Cuál es la función del hook 'useOptimistic' introducido en React 19?",
    options: [
      "Presentar de forma optimista un estado esperado en la interfaz mientras una operación asíncrona está en progreso, revirtiendo si la acción falla.",
      "Aumentar la tasa de cuadros por segundo forzando renderizados a 120Hz en pantallas compatibles.",
      "Reintentar peticiones fallidas hasta que el servidor responda con un código HTTP 200.",
      "Comprimir imágenes antes de enviarlas al servidor en formularios multimedia."
    ],
    correctAnswerIndex: 0,
    explanation: "useOptimistic(state, updateFn) permite actualizar la UI instantáneamente asumiendo que la Server Action tendrá éxito (ej. añadir un like o un mensaje al chat). Si la acción falla o concluye, React sincroniza automáticamente con el estado real.",
    topic: "React 19 & UI Optimista",
    difficulty: "avanzado"
  },
  {
    id: "rct-q-29",
    collectionId: "react",
    question: "¿Cómo previene React los bucles infinitos de renderizado al actualizar estado dentro de 'useEffect'?",
    options: [
      "Exigiendo un array de dependencias exhaustivo y lanzando advertencias de lint si las variables causantes de la mutación no están declaradas.",
      "Deteniendo el navegador tras alcanzar exactamente diez re-renderizados consecutivos.",
      "Convirtiendo automáticamente los efectos en promesas diferidas con setTimeout.",
      "Prohibiendo taxativamente cualquier llamada a setState dentro de la función de efecto."
    ],
    correctAnswerIndex: 0,
    explanation: "Si un efecto actualiza una variable de estado que a su vez figura como su propia dependencia sin condiciones de guarda, React re-ejecuta el render y el efecto en bucle continuo, hasta que el guardián de seguridad de React arroja 'Maximum update depth exceeded'.",
    topic: "Efectos & Render Loops",
    difficulty: "básico"
  },
  {
    id: "rct-q-30",
    collectionId: "react",
    question: "¿Qué patrón de arquitectura en React resuelve la necesidad de compartir lógica de renderizado sin recurrir a Higher-Order Components (HOC)?",
    options: [
      "Custom Hooks (Hooks personalizados), que extraen y componen lógica de estado reutilizable conservando la firma de funciones puras.",
      "Mixins globales inyectados en el prototipo de React.Component.",
      "Variables globales accesibles en el objeto window.",
      "Event Bus basado en eventos nativos del navegador con CustomEvent."
    ],
    correctAnswerIndex: 0,
    explanation: "Los Custom Hooks son la forma canónica de compartir lógica con estado en React moderno. A diferencia de los HOCs o Render Props, no introducen 'wrapper hell' ni alteran la jerarquía del árbol de componentes en el DOM.",
    topic: "Patrones de Arquitectura",
    difficulty: "básico"
  }
];
