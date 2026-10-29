import type { QuizQuestion } from "@/data/quizTypes";

export const stateManagementQuestions: QuizQuestion[] = [
  {
    id: "stm-q-01",
    collectionId: "state-management",
    question: "¿Qué define fundamentalmente al 'estado' en una aplicación frontend o de software?",
    options: [
      "Información mutable que cambia a lo largo del tiempo y determina el comportamiento o la apariencia visual de la interfaz.",
      "El código binario inmutable generado tras la compilación estática de la suite de estilos CSS.",
      "La dirección IP fija del socket TCP establecida entre el navegador y el balanceador de carga.",
      "Una estructura de datos que solo puede existir temporalmente dentro del Call Stack de V8."
    ],
    correctAnswerIndex: 0,
    explanation: "El estado representa cualquier dato sujeto a cambios temporales que condiciona cómo se comporta una aplicación o qué elementos se renderizan en pantalla ante los eventos del usuario o del sistema.",
    topic: "Modelado y propiedad del estado",
    difficulty: "básico"
  },
  {
    id: "stm-q-02",
    collectionId: "state-management",
    question: "¿Por qué el principio de 'Estado Mínimo' recomienda calcular los datos derivados en lugar de guardarlos en el estado?",
    options: [
      "Porque almacenar datos derivados duplica la fuente de verdad y genera estados inconsistentes e imposibles ante sincronizaciones parciales.",
      "Porque los navegadores web modernos no permiten almacenar más de 128 variables en memoria.",
      "Porque el recolector de basura de JavaScript bloquea la ejecución al detectar más de dos copias del mismo valor.",
      "Porque los datos derivados requieren obligatoriamente certificados criptográficos para persistir."
    ],
    correctAnswerIndex: 0,
    explanation: "Mantener una única fuente de verdad y derivar totales o filtros previene desincronizaciones donde el dato base cambia pero el derivado retiene un valor obsoleto.",
    topic: "Modelado y propiedad del estado",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-03",
    collectionId: "state-management",
    question: "¿En qué consiste el principio de 'Fuente Única de Verdad' (Single Source of Truth)?",
    options: [
      "Asignar una única entidad o modelo con autoridad exclusiva sobre cada dato para evitar copias mutables compitiendo entre sí.",
      "Almacenar obligatoriamente toda la información del usuario en una sola tabla SQL sin relaciones.",
      "Restringir la lectura de variables de entorno únicamente al hilo principal del servidor NGINX.",
      "Forzar a que todos los componentes de la aplicación hereden de una clase singleton global."
    ],
    correctAnswerIndex: 0,
    explanation: "Tener una fuente única de verdad garantiza que exista un dueño inequívoco de cada pieza de información, eliminando colisiones y discrepancias entre vistas o módulos.",
    topic: "Modelado y propiedad del estado",
    difficulty: "básico"
  },
  {
    id: "stm-q-04",
    collectionId: "state-management",
    question: "¿Cuál es la diferencia arquitectónica crítica entre 'Estado Local' y 'Estado Global'?",
    options: [
      "El estado local pertenece al ciclo de vida de un componente aislado, mientras que el global es coordinado por múltiples subsistemas desacoplados.",
      "El estado local se almacena en el disco duro físico del cliente y el global reside exclusivamente en la GPU.",
      "El estado global nunca puede modificarse tras la hidratación inicial del documento HTML.",
      "El estado local no soporta tipos booleanos ni arrays en TypeScript."
    ],
    correctAnswerIndex: 0,
    explanation: "El estado local debe residir lo más cerca posible de donde se utiliza para minimizar el alcance de los re-renders; el estado global solo se justifica cuando múltiples árboles o subsistemas requieren acceso y sincronización simultánea.",
    topic: "Alcance y propiedad",
    difficulty: "básico"
  },
  {
    id: "stm-q-05",
    collectionId: "state-management",
    question: "¿Qué ventaja crítica aporta la 'Inmutabilidad' en las transiciones de estado de aplicaciones reactivas?",
    options: [
      "Permite comparaciones por referencia superficial (shallow equality O(1)) para detectar cambios instantáneamente sin recorrer árboles profundos.",
      "Reduce a cero el consumo de memoria heap de la máquina virtual al sobrescribir punteros de hardware.",
      "Elimina por completo la necesidad de escribir pruebas unitarias o de integración.",
      "Permite mutar arrays y objetos congelados mediante Object.assign() sin generar nuevos objetos."
    ],
    correctAnswerIndex: 0,
    explanation: "Al no modificar los objetos existentes sino generar referencias nuevas, las herramientas y frameworks pueden comparar por referencia `prev !== next` en tiempo constante, optimizando memorización y renders.",
    topic: "Inmutabilidad & Transiciones",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-06",
    collectionId: "state-management",
    question: "¿Cómo evita una Máquina de Estados Finitos (FSM) que la interfaz entre en 'estados imposibles'?",
    options: [
      "Define formalmente un conjunto cerrado de estados válidos y transiciones permitidas mediante eventos explícitos.",
      "Convierte todas las promesas asíncronas en ejecuciones síncronas bloqueantes.",
      "Bloquea la entrada de teclado del usuario cuando la conexión a internet cae por debajo de 1 Mbps.",
      "Reemplaza el router de URLs por un autómata determinista en WebAssembly."
    ],
    correctAnswerIndex: 0,
    explanation: "Una FSM garantiza que solo se pueda estar en un estado a la vez (ej: idle, loading, success, failure), imposibilitando combinaciones incoherentes como mostrar simultáneamente un loader de carga y un mensaje de error fatal.",
    topic: "Máquinas de estado & FSM",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-07",
    collectionId: "state-management",
    question: "¿Por qué el 'Estado de Servidor' (Server State / Caché Remota) difiere fundamentalmente del estado del cliente?",
    options: [
      "El estado de servidor no nos pertenece: es una instantánea remota asíncrona, compartida y potencialmente obsoleta (stale).",
      "El estado de servidor solo puede transportar cadenas de texto sin formato JSON.",
      "El estado de servidor requiere obligatoriamente una suscripción WebRTC punto a punto.",
      "El estado de servidor se destruye automáticamente cada vez que el usuario hace scroll vertical."
    ],
    correctAnswerIndex: 0,
    explanation: "El estado de servidor es en realidad una caché local de datos que residen en una base de datos externa. Puede ser alterado por otros usuarios en cualquier momento, exigiendo estrategias de revalidación, expiración y sincronización.",
    topic: "Server State & Caché",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-08",
    collectionId: "state-management",
    question: "¿Qué problema resuelve la estrategia 'Stale-While-Revalidate' (SWR) en la gestión de datos remotos?",
    options: [
      "Entrega inmediatamente los datos cacheados para una respuesta instantánea en UI mientras revalida en segundo plano con el servidor.",
      "Invalida la caché del navegador eliminando todas las cookies de sesión tras 5 segundos de inactividad.",
      "Fuerza a la base de datos a bloquear todas las transacciones de escritura durante las consultas SELECT.",
      "Genera certificados TLS temporales para validar la firma de cada respuesta HTTP GET."
    ],
    correctAnswerIndex: 0,
    explanation: "SWR ofrece una experiencia instantánea mostrando datos previos de la memoria local, y actualiza la vista de forma transparente una vez que la petición en background devuelve el contenido más fresco.",
    topic: "Server State & Caché",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-09",
    collectionId: "state-management",
    question: "¿En qué consiste una 'Actualización Optimista' (Optimistic Update) y cuál es su requisito indispensable?",
    options: [
      "Actualizar la interfaz inmediatamente asumiendo éxito en la mutación, con una estrategia explícita de rollback si el servidor rechaza la operación.",
      "Predecir qué botón pulsará el usuario mediante modelos de machine learning y ejecutarlo antes del clic.",
      "Desactivar el manejo de errores en el cliente para acelerar la tasa de cuadros por segundo.",
      "Retrasar todas las confirmaciones visuales hasta que la base de datos complete un backup diario."
    ],
    correctAnswerIndex: 0,
    explanation: "La actualización optimista hace que la app se sienta instantánea al aplicar el cambio en UI al instante; sin embargo, es obligatorio retener el estado previo para poder revertir ordenadamente ante un error de red o de validación.",
    topic: "Optimismo & Rollback",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-10",
    collectionId: "state-management",
    question: "¿Cómo se produce una 'Condición de Carrera' (Race Condition) en peticiones asíncronas de búsqueda?",
    options: [
      "Una petición rápida iniciada posteriormente resuelve antes que una petición lenta anterior, sobreescribiendo el estado con datos desactualizados.",
      "Dos hilos Web Worker intentan acceder a la misma dirección física de memoria RAM sin usar SharedArrayBuffer.",
      "El compilador de TypeScript reordena las funciones de forma impredecible en producción.",
      "La red Wi-Fi conmuta de 2.4 GHz a 5 GHz durante la transmisión de un paquete TCP SYN."
    ],
    correctAnswerIndex: 0,
    explanation: "Si el usuario busca 'A' y luego 'AB', la respuesta para 'A' puede tardar más y llegar después de 'AB', reemplazando incorrectamente el estado final si no se cancelan o descartan peticiones obsoletas.",
    topic: "Concurrencia & Asincronía",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-11",
    collectionId: "state-management",
    question: "¿Qué mecanismo de la plataforma web es el estándar para cancelar peticiones de red obsoletas en el gestor de estado?",
    options: [
      "AbortController y su propiedad asociada AbortSignal.",
      "window.stopNavigation() en el objeto History del DOM.",
      "El método process.kill(SIGTERM) en el navegador.",
      "Limpiar la variable de estado asignándola a null en el siguiente microtask."
    ],
    correctAnswerIndex: 0,
    explanation: "`AbortController` permite enviar una señal (`signal`) a la API `fetch` u operaciones asíncronas para abortar la conexión activa e ignorar el resultado sin procesar callbacks innecesarios.",
    topic: "Concurrencia & Asincronía",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-12",
    collectionId: "state-management",
    question: "¿Por qué los 'Selectores con Memoización' (como reselect o getters memoizados) son esenciales en almacenes globales?",
    options: [
      "Calculan datos derivados reteniendo el resultado previo mientras los argumentos de entrada mantengan su identidad referencial.",
      "Encriptan los datos sensibles en memoria utilizando cifrado AES-256 en cada lectura.",
      "Convierten las consultas de estado en sentencias SQL nativas ejecutadas por el motor Blink.",
      "Obligan a que todas las funciones de renderizado se ejecuten dentro de un requestAnimationFrame."
    ],
    correctAnswerIndex: 0,
    explanation: "Los selectores memoizados calculan derivaciones costosas únicamente cuando las entradas cambian, evitando re-cálculos superfluos y re-renders de componentes suscritos.",
    topic: "Selectores & Derivaciones",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-13",
    collectionId: "state-management",
    question: "¿Qué riesgo operativo presenta la persistencia descontrolada de todo el estado en 'localStorage'?",
    options: [
      "Límite de cuota síncrono (~5MB), bloqueo del hilo principal y persistencia de schemas antiguos incompatibles con nuevas versiones.",
      "Pérdida de la clave privada SSH del servidor donde se hospedan las imágenes Docker.",
      "Corrupción instantánea del registro maestro de arranque del sistema operativo del cliente.",
      "Imposibilidad de utilizar funciones asíncronas en el código de la aplicación."
    ],
    correctAnswerIndex: 0,
    explanation: "`localStorage` es síncrono (puede congelar la UI con objetos grandes), tiene cuota estricta y, si el schema cambia entre despliegues, cargar datos viejos sin migración o validación romperá la aplicación.",
    topic: "Persistencia & Hidratación",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-14",
    collectionId: "state-management",
    question: "¿Cuál es la función del patrón 'Redux / Flux' con reducers puros y acciones despachadas?",
    options: [
      "Hacer predecibles y trazables las mutaciones de estado mediante una función pura `(state, action) => newState` sin efectos colaterales.",
      "Permitir la mutación directa de cualquier propiedad anidada desde los eventos onClick del DOM.",
      "Sustituir las peticiones HTTP por sockets binarios unidireccionales.",
      "Garantizar que todo el código TypeScript se compile a WebAssembly."
    ],
    correctAnswerIndex: 0,
    explanation: "El flujo unidireccional y las funciones reductoras puras aseguran que cada transición de estado sea determinista, testeable y reproducible mediante bitácoras de acciones.",
    topic: "Patrones arquitectónicos",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-15",
    collectionId: "state-management",
    question: "¿En qué se diferencia el enfoque de reactividad basado en 'Señales' (Signals) frente al ciclo de reconciliación basado en Virtual DOM?",
    options: [
      "Las señales trackean dependencias a nivel de valor y actualizan quirúrgicamente los nodos DOM suscritos sin re-ejecutar componentes enteros.",
      "Las señales requieren un servidor intermediario de WebSockets para notificar los cambios de variables.",
      "El Virtual DOM no utiliza memoria RAM mientras que las señales consumen el 100% de la GPU.",
      "Las señales impiden que el navegador ejecute código JavaScript en segundo plano."
    ],
    correctAnswerIndex: 0,
    explanation: "Los sistemas de señales rastrean qué lecturas ocurren en cada efecto o binding y aplican mutaciones quirúrgicas directas al nodo específico cuando cambia el valor, evitando recorrer o re-evaluar el árbol del componente.",
    topic: "Reactividad fina & Señales",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-16",
    collectionId: "state-management",
    question: "¿Cómo debe gestionarse el 'Estado de Formulario' complejo con validaciones asíncronas para preservar la fluidez?",
    options: [
      "Mantener el valor crudo en estado inmediato y desacoplar la validación pesada o asíncrona mediante debounce o transiciones diferidas.",
      "Bloquear la entrada de texto hasta que la API confirme cada tecla pulsada por el usuario.",
      "Almacenar cada pulsación en una cookie HttpOnly separada.",
      "Ejecutar la validación directamente en el evento onBeforeUnload de la ventana."
    ],
    correctAnswerIndex: 0,
    explanation: "La tipificación en inputs debe responder a 60 fps; validaciones costosas (como comprobar nombres de usuario disponibles) deben aplazarse con debounce para no degradar la latencia de entrada (INP).",
    topic: "Casos de Uso Complejos",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-17",
    collectionId: "state-management",
    question: "¿Qué es el 'Prop Drilling' y cuál es el momento adecuado para refactorizar hacia un contexto o store?",
    options: [
      "Pasar props a través de múltiples niveles de componentes intermedios que no las usan; se refactoriza cuando la jerarquía intermedia no tiene relación lógica con los datos.",
      "La técnica de duplicar funciones reductoras en cada archivo del proyecto.",
      "Un fallo de seguridad en el que un atacante inyecta scripts mediante propiedades no tipadas.",
      "La exportación de variables de entorno de Node.js al bundle público del cliente."
    ],
    correctAnswerIndex: 0,
    explanation: "El prop drilling añade acoplamiento y mantenimiento innecesario cuando varios niveles solo actúan como mensajeros; solucionarlo con composición de componentes o un store desacopla la arquitectura.",
    topic: "Arquitectura & Composición",
    difficulty: "básico"
  },
  {
    id: "stm-q-18",
    collectionId: "state-management",
    question: "¿Por qué los 'Efectos Secundarios' (Side Effects) deben mantenerse estrictamente fuera de las funciones reductoras?",
    options: [
      "Porque los reducers deben ser deterministas y puros para permitir repetición, auditoría y time-travel debugging confiable.",
      "Porque las promesas de JavaScript son incompatibles con el tipo de retorno de las funciones normales.",
      "Porque invocar un fetch dentro de un reducer provoca el reinicio del servidor de desarrollo.",
      "Porque los reducers se ejecutan en un hilo de WebAssembly sin acceso al objeto Window."
    ],
    correctAnswerIndex: 0,
    explanation: "Si un reducer ejecutara llamadas de red o fechas aleatorias, el mismo estado inicial con la misma acción produciría resultados dispares, destruyendo la predictibilidad de la aplicación.",
    topic: "Pureza & Efectos Colaterales",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-19",
    collectionId: "state-management",
    question: "¿Qué función cumple el hook 'useSyncExternalStore' introducido en React 18 para bibliotecas de estado?",
    options: [
      "Permite suscribirse a almacenes externos concurrentes sin riesgo de inconsistencias de lectura ('tearing') durante renderizados interrumpibles.",
      "Reemplaza el sistema de eventos del navegador por un protocolo binario UDP.",
      "Sincroniza automáticamente los datos de la app con el servicio Firebase Cloud Firestore.",
      "Convierte cualquier función sincrónica en una Promesa nativa no cancelable."
    ],
    correctAnswerIndex: 0,
    explanation: "`useSyncExternalStore` garantiza lecturas atómicas y consistentes de stores mutables externos durante el render concurrente de React, impidiendo que distintas partes de la UI lean snapshots discordantes.",
    topic: "Concurrencia & Stores",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-20",
    collectionId: "state-management",
    question: "¿En qué consiste la técnica de 'Normalización del Estado' (State Normalization)?",
    options: [
      "Estructurar los datos relacionales como una base de datos en memoria (entidades indexadas por ID con arrays de IDs para orden y relaciones).",
      "Convertir todos los textos a mayúsculas y eliminar espacios en blanco repetidos.",
      "Reducir todos los números flotantes a enteros de 32 bits antes de enviarlos a la API.",
      "Dividir el código JavaScript en fragmentos de menos de 50 KB."
    ],
    correctAnswerIndex: 0,
    explanation: "Normalizar evita anidaciones profundas y datos duplicados; al actualizar un elemento por su ID, todos los lugares que lo referencian se reflejan inmediatamente sin necesidad de mutaciones en árbol.",
    topic: "Estructuras & Normalización",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-21",
    collectionId: "state-management",
    question: "¿Cómo se previene una fuga de memoria (Memory Leak) al suscribirse a un store de eventos o estado global?",
    options: [
      "Retornando y ejecutando la función de desuscripción (cleanup) al desmontar el componente o cancelar el efecto.",
      "Reiniciando el navegador web del usuario cada 10 minutos de navegación.",
      "Declarando todas las variables del componente con la palabra clave `globalThis`.",
      "Asignando el objeto window a una nueva referencia vacía en cada navegación."
    ],
    correctAnswerIndex: 0,
    explanation: "Si un componente se suscribe a un store y no remueve su listener al desmontarse, el store mantendrá referencias vivas al componente en memoria, impidiendo que el garbage collector lo libere.",
    topic: "Ciclo de vida & Fugas de Memoria",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-22",
    collectionId: "state-management",
    question: "¿Qué es el 'Time-Travel Debugging' en el ecosistema de herramientas de desarrollo de estado?",
    options: [
      "La capacidad de reproducir, pausar y retroceder el estado de la aplicación paso a paso navegando por el historial de acciones inmutables.",
      "La sincronización horaria de los servidores mediante el protocolo NTP de alta precisión.",
      "Una extensión para simular el reloj del sistema operativo en el año 2038.",
      "La compilación anticipada de componentes antes de que el usuario abra la página web."
    ],
    correctAnswerIndex: 0,
    explanation: "Dado que cada transición genera un nuevo snapshot inmutable registrado por una acción, las DevTools pueden reinyectar estados pasados y observar cómo la interfaz regresa exactamente a ese momento histórico.",
    topic: "Herramientas & Diagnóstico",
    difficulty: "básico"
  },
  {
    id: "stm-q-23",
    collectionId: "state-management",
    question: "¿Qué problema aborda el 'Atomic State Management' (como en Jotai o Recoil) frente a un store monolítico?",
    options: [
      "Permite dividir el estado en átomos independientes y combinables, minimizando renders solo a los consumidores de cada átomo individual.",
      "Garantiza que todas las variables del sistema se ejecuten en transacciones ACID sobre disco magnético.",
      "Elimina la necesidad de utilizar TypeScript en proyectos empresariales.",
      "Obliga a que cada componente tenga exactamente un único elemento HTML div."
    ],
    correctAnswerIndex: 0,
    explanation: "El modelo atómico descompone el estado en piezas mínimas de datos (átomos); los componentes solo se suscriben a átomos concretos, evitando el cuello de botella de recomputar árboles monolíticos enteros.",
    topic: "Modelos Atómicos",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-24",
    collectionId: "state-management",
    question: "¿Cómo debe abordarse la reconciliación de estado cuando una aplicación móvil o web trabaja 'Offline-First'?",
    options: [
      "Almacenar mutaciones en una cola persistente con identificadores idempotentes y resolver conflictos mediante marcas de tiempo lógicas o CRDTs.",
      "Descartar todas las acciones del usuario y reiniciar la aplicación en cuanto se pierda la señal de red.",
      "Bloquear la pantalla con un cartel modal impidiendo cualquier interacción mientras dure el modo offline.",
      "Enviar peticiones HTTP continuas a 1000 requests por segundo hasta que regrese la conexión."
    ],
    correctAnswerIndex: 0,
    explanation: "Offline-first requiere encolar intenciones con claves idempotentes (evitar duplicados) y aplicar estrategias deterministas (como last-write-wins o tipos libres de conflictos) para fusionar cambios con el servidor.",
    topic: "Offline & Resiliencia",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-25",
    collectionId: "state-management",
    question: "¿Qué papel desempeñan los 'Parámetros de Búsqueda de la URL' (URL Search Params) en la jerarquía de estado?",
    options: [
      "Son la fuente de verdad idónea para estado compartible y navegable (filtros, paginación, pestañas y términos de búsqueda).",
      "Solo deben utilizarse para transmitir contraseñas y tokens de autorización OAuth.",
      "Son un mecanismo obsoleto que ya no soportan los navegadores con HTTP/3.",
      "Se almacenan en el registro de Windows del cliente para persistir entre reinicios del equipo."
    ],
    correctAnswerIndex: 0,
    explanation: "La URL es una forma excelente de estado: permite compartir enlaces exactos con filtros aplicados, soporta el botón 'Atrás'/'Adelante' del navegador y sobrevive a recargas sin necesidad de bases de datos locales.",
    topic: "URL como Estado",
    difficulty: "básico"
  },
  {
    id: "stm-q-26",
    collectionId: "state-management",
    question: "¿Por qué mezclar el 'Estado Efímero de Animación' en el store global suele degradar el rendimiento?",
    options: [
      "Porque actualizar un store global a 60-120 fps genera renders de reactividad en cascada en hilos no optimizados para animación.",
      "Porque los almacenes globales no pueden almacenar valores decimales con coma flotante.",
      "Porque las animaciones en CSS no pueden leer propiedades JavaScript.",
      "Porque el protocolo HTTP/2 prohíbe el tráfico de coordenadas de puntero en tiempo real."
    ],
    correctAnswerIndex: 0,
    explanation: "El estado de alta frecuencia (como posición del ratón o scroll) debe vivir en refs o drivers de animación fuera del ciclo reactivo global para evitar disparar renders innecesarios en decenas de componentes.",
    topic: "Rendimiento & Frecuencia",
    difficulty: "intermedio"
  },
  {
    id: "stm-q-27",
    collectionId: "state-management",
    question: "¿Qué es la 'Inversión de Dependencias' aplicada a los servicios de estado en arquitecturas desacopladas?",
    options: [
      "Los componentes dependen de interfaces o contratos abstractos de estado en lugar de importar directamente la instancia concreta de un vendor.",
      "El servidor backend depende del código del cliente para iniciar su proceso Node.js.",
      "Las hojas de estilo CSS definen la lógica del motor de base de datos.",
      "Los módulos secundarios se cargan antes que el kernel del sistema operativo."
    ],
    correctAnswerIndex: 0,
    explanation: "Desacoplar la UI de la librería concreta (Redux, Zustand, MobX, etc.) mediante hooks o puertos permite cambiar la implementación subyacente sin reescribir la capa de presentación ni las pruebas.",
    topic: "Arquitectura & Mantenibilidad",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-28",
    collectionId: "state-management",
    question: "¿Qué peligro entraña el uso de 'Clonado Profundo Incondicional' (structuredClone o JSON.parse(JSON.stringify)) en cada mutación de estado?",
    options: [
      "Penalización masiva de rendimiento por asignación excesiva de memoria y pérdida de referencias compartidas en objetos no modificados.",
      "Eliminación permanente de todos los estilos CSS del árbol de render.",
      "Generación de errores de sintaxis en el intérprete de JavaScript durante el bucle de eventos.",
      "Conversión involuntaria de arrays en colecciones WeakMap no iterables."
    ],
    correctAnswerIndex: 0,
    explanation: "El clonado profundo copia indiscriminadamente miles de propiedades que no cambiaron, destruyendo la memorización por referencia e imponiendo una carga de CPU y recolección de basura severa.",
    topic: "Rendimiento & Inmutabilidad",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-29",
    collectionId: "state-management",
    question: "¿En qué consiste la técnica de 'Suspense for Data Fetching' en relación con el estado asíncrono?",
    options: [
      "Los componentes pausan su render declarativamente lanzando una promesa hasta que el dato esté resuelto, delegando la vista de carga a una frontera superior.",
      "Un mecanismo para detener la ejecución de JavaScript en todo el navegador hasta que responda la API.",
      "Un algoritmo de compresión de imágenes aplicado en tiempo real durante la lectura de datos.",
      "Una directiva de compilación en C++ que traduce llamadas REST a instrucciones ensamblador."
    ],
    correctAnswerIndex: 0,
    explanation: "Suspense desacopla la lógica de visualización del estado intermedio de carga: los componentes asumen que el dato está disponible y un `<Suspense fallback={...}>` superior maneja el estado de espera ordenadamente.",
    topic: "React & Estado Asíncrono",
    difficulty: "avanzado"
  },
  {
    id: "stm-q-30",
    collectionId: "state-management",
    question: "¿Cuál es el criterio definitivo para considerar que un esquema de gestión de estado es escalable y saludable en producción?",
    options: [
      "Flujo unidireccional claro, fuente única de verdad, datos derivados no duplicados, límites explícitos entre cliente y servidor, y facilidad de prueba.",
      "Uso obligatorio de al menos cinco librerías diferentes de gestión de estado en el mismo proyecto.",
      "Almacenamiento de todos los datos en variables globales no tipadas accesibles desde la consola.",
      "Desactivación total del recolector de basura de la máquina virtual para evitar pausas."
    ],
    correctAnswerIndex: 0,
    explanation: "Una arquitectura de estado saludable se distingue por su simplicidad: cada dato tiene un único responsable, las mutaciones son predecibles, no existen redundancias y el sistema es observable y testeable con facilidad.",
    topic: "Resumen Arquitectónico",
    difficulty: "intermedio"
  }
];
