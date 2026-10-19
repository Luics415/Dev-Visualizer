import type { QuizQuestion } from "@/data/quizTypes";

export const javascriptQuestions: QuizQuestion[] = [
  {
    id: "js-q-01",
    collectionId: "javascript",
    question: "¿En qué orden se procesan las tareas del Event Loop cuando la pila de ejecución (Call Stack) queda vacía?",
    options: [
      "Todas las microtareas en la cola (Promises, queueMicrotask) antes de la siguiente macrotarea.",
      "Una macrotarea seguida de todas las macrotareas pendientes antes de evaluar microtareas.",
      "Las tareas del temporizador (setTimeout) siempre tienen prioridad absoluta sobre las promesas.",
      "Microtareas y macrotareas se alternan estrictamente una a una de manera intercalada."
    ],
    correctAnswerIndex: 0,
    explanation: "El Event Loop drena por completo la cola de microtareas (incluyendo microtareas encoladas por otras microtareas) en cada punto de control antes de tomar la siguiente macrotarea del Task Queue.",
    topic: "Event Loop & Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "js-q-02",
    collectionId: "javascript",
    question: "¿Qué ocurre si una función flecha (arrow function) intenta utilizar la palabra clave 'this'?",
    options: [
      "Hereda el valor de 'this' léxicamente del ámbito envolvente donde fue declarada.",
      "Crea su propio enlace dinámico de 'this' según el objeto que invoque el método.",
      "Lanza un TypeError en tiempo de ejecución a menos que se vincule con Function.prototype.bind().",
      "Siempre apunta al objeto global 'window' o 'globalThis', independientemente del contexto."
    ],
    correctAnswerIndex: 0,
    explanation: "Las arrow functions no poseen su propio enlace 'this' ni 'arguments'. Su 'this' es léxico, resuelto estáticamente a partir del entorno en el que se define la función.",
    topic: "Ámbitos & Closures",
    difficulty: "básico"
  },
  {
    id: "js-q-03",
    collectionId: "javascript",
    question: "¿Cuál es la principal diferencia semántica entre 'Object.freeze()' y 'Object.seal()'?",
    options: [
      "freeze() impide modificar el valor de propiedades existentes; seal() permite mutar valores existentes si son modificables.",
      "freeze() solo funciona en objetos anidados mientras que seal() es estrictamente superficial.",
      "seal() elimina los prototipos del objeto, mientras que freeze() congela solo las funciones.",
      "Ambos métodos son idénticos y solo varían por retrocompatibilidad con navegadores antiguos."
    ],
    correctAnswerIndex: 0,
    explanation: "Object.seal() evita agregar o eliminar propiedades y marca configurable: false, pero permite reescribir propiedades existentes con writable: true. Object.freeze() hace todo lo de seal() y además marca writable: false en todas las propiedades.",
    topic: "Objetos & Prototipos",
    difficulty: "intermedio"
  },
  {
    id: "js-q-04",
    collectionId: "javascript",
    question: "¿Qué garantiza el uso de 'WeakMap' frente a un 'Map' estándar en la gestión de memoria?",
    options: [
      "Las claves deben ser objetos y permiten que el recolector de basura (GC) las libere si no hay otras referencias fuertes.",
      "Permite iterar sus claves en paralelo sin bloquear el hilo principal de ejecución.",
      "Serializa automáticamente las claves en memoria persistente de IndexedDB.",
      "Evita colisiones hash forzando claves de tipo string o symbol exclusivamente."
    ],
    correctAnswerIndex: 0,
    explanation: "En un WeakMap, las referencias a las claves son débiles; si el objeto clave no tiene otras referencias en el grafo de memoria, puede ser recolectado por el GC evitando fugas de memoria.",
    topic: "Memoria & Garbage Collection",
    difficulty: "avanzado"
  },
  {
    id: "js-q-05",
    collectionId: "javascript",
    question: "¿Cuál es el comportamiento de 'Promise.allSettled()' frente a 'Promise.all()' cuando una de las promesas es rechazada?",
    options: [
      "allSettled() espera a que todas concluyan y entrega el estado individual de cada una sin cortocircuitar por rechazos.",
      "allSettled() rechaza de inmediato abortando las demás solicitudes mediante señal SIGINT.",
      "allSettled() reintenta automáticamente la promesa fallida tres veces con retroceso exponencial.",
      "allSettled() devuelve únicamente las promesas que tuvieron éxito descartando los rechazos."
    ],
    correctAnswerIndex: 0,
    explanation: "Promise.all() cortocircuita y rechaza inmediatamente ante el primer error. Promise.allSettled() espera a que todas terminen y retorna un array con objetos { status: 'fulfilled', value } o { status: 'rejected', reason }.",
    topic: "Asincronía & Promesas",
    difficulty: "intermedio"
  },
  {
    id: "js-q-06",
    collectionId: "javascript",
    question: "¿Qué es la 'Temporal Dead Zone' (TDZ) en JavaScript?",
    options: [
      "El periodo entre la entrada en el ámbito y la declaración inicializada donde acceder a 'let' o 'const' arroja ReferenceError.",
      "El retraso introducido por setTimeout cuando el hilo principal ejecuta scripts intensivos de CPU.",
      "El tiempo que tarda el recolector de basura en compactar las generaciones jóvenes en el Heap.",
      "La ventana de tiempo donde un Service Worker bloquea las peticiones de red por falta de caché."
    ],
    correctAnswerIndex: 0,
    explanation: "Las variables declaradas con 'let' y 'const' son elevadas (hoisted), pero no inicializadas. Acceder a ellas antes de su línea de inicialización arroja un ReferenceError debido a la TDZ.",
    topic: "Ámbitos & Closures",
    difficulty: "intermedio"
  },
  {
    id: "js-q-07",
    collectionId: "javascript",
    question: "¿Para qué sirve el método 'Object.create(null)' en comparación con el literal de objeto '{}'?",
    options: [
      "Crea un diccionario puro que no hereda propiedades ni métodos de Object.prototype como toString o hasOwnProperty.",
      "Crea un objeto inmutable almacenado en la memoria de solo lectura de V8.",
      "Genera un proxy que intercepta automáticamente cualquier intento de asignación indefinida.",
      "Es una directiva para obligar a que el objeto sea liberado inmediatamente al salir de la función."
    ],
    correctAnswerIndex: 0,
    explanation: "Object.create(null) crea un objeto con su enlace [[Prototype]] apuntando a null. Esto previene ataques de Prototype Pollution y colisiones con claves como 'toString' o 'constructor'.",
    topic: "Objetos & Prototipos",
    difficulty: "avanzado"
  },
  {
    id: "js-q-08",
    collectionId: "javascript",
    question: "¿Qué efecto tiene 'queueMicrotask(fn)' en la ejecución de código en JavaScript?",
    options: [
      "Programa la función para ejecutarse inmediatamente después del código síncrono actual y antes de repintar la UI.",
      "Delega la función a un Web Worker secundario para computación intensiva en paralelo.",
      "Equivale a un setTimeout con 0 milisegundos ejecutándose en la cola de macrotareas.",
      "Fuerza una pausa asíncrona de 1 milisegundo esperando el siguiente tick del sistema operativo."
    ],
    correctAnswerIndex: 0,
    explanation: "queueMicrotask encola una función directamente en la cola de microtareas, ejecutándose antes de que el Event Loop ceda el control para renderizado, I/O o la siguiente macrotarea.",
    topic: "Event Loop & Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "js-q-09",
    collectionId: "javascript",
    question: "¿Cómo resuelve el motor V8 el acceso a propiedades en objetos mediante 'Hidden Classes' (Shapes)?",
    options: [
      "Asigna transiciones de clase interna fija para predecir los desplazamientos de memoria (offsets) de las propiedades.",
      "Convierte todas las claves de los objetos en un árbol balanceado AVL en tiempo de compilación.",
      "Mantiene una tabla hash dinámica global que busca las propiedades mediante algoritmos de cifrado SHA-256.",
      "Interpola el código fuente de los objetos en cadenas binarias ejecutadas por WebAssembly."
    ],
    correctAnswerIndex: 0,
    explanation: "V8 utiliza Hidden Classes (Shapes o Maps). Si dos objetos reciben las mismas propiedades en el mismo orden, comparten la misma Shape, permitiendo Inline Caching y acceso a memoria en O(1).",
    topic: "Memoria & V8",
    difficulty: "avanzado"
  },
  {
    id: "js-q-10",
    collectionId: "javascript",
    question: "¿Cuál es la principal ventaja de 'structuredClone()' sobre el clásico 'JSON.parse(JSON.stringify(obj))'?",
    options: [
      "Soporta referencias circulares, Map, Set, Date, RegExp y TypedArrays sin pérdida de datos ni conversiones espurias.",
      "Permite clonar funciones ejecutables e instancias de clases reteniendo sus enlaces a prototipos originales.",
      "Es un algoritmo completamente asíncrono que no bloquea la interfaz de usuario durante clonaciones pesadas.",
      "Comprime los datos en formato GZIP antes de alojarlos en la memoria RAM del navegador."
    ],
    correctAnswerIndex: 0,
    explanation: "structuredClone implementa el algoritmo oficial HTML Structured Clone, soportando referencias cíclicas y tipos de datos complejos como Set, Map, ArrayBuffer y Date que fallan o se corrompen con JSON.",
    topic: "Objetos & Prototipos",
    difficulty: "intermedio"
  },
  {
    id: "js-q-11",
    collectionId: "javascript",
    question: "¿Qué mecanismo permite a 'AbortController' cancelar peticiones de red 'fetch' o listeners asíncronos?",
    options: [
      "Expone un objeto 'AbortSignal' que emite el evento 'abort' y conmuta su propiedad 'aborted' a true.",
      "Envía un paquete TCP RST directamente desde el navegador a la tarjeta de red del sistema operativo.",
      "Fuerza un 'process.exit(0)' en el hilo donde se originó la petición HTTP.",
      "Sobrescribe el prototipo de Promise para rechazar con una excepción de tipo SecurityError."
    ],
    correctAnswerIndex: 0,
    explanation: "AbortController provee un AbortSignal (controller.signal) que se asocia a fetch() o a addEventListener(). Al invocar controller.abort(), se dispara el evento 'abort' y se cancela la operación.",
    topic: "Asincronía & Promesas",
    difficulty: "intermedio"
  },
  {
    id: "js-q-12",
    collectionId: "javascript",
    question: "¿Cuál es la diferencia fundamental entre 'null' e 'undefined' en JavaScript?",
    options: [
      "'undefined' representa una variable declarada sin asignación; 'null' es un valor de asignación intencional que denota ausencia de objeto.",
      "'undefined' es un objeto especial del DOM, mientras que 'null' es un tipo primitivo del lenguaje.",
      "'null' arroja TypeError si se evalúa con el operador typeof, mientras que 'undefined' devuelve 'string'.",
      "No existe diferencia semántica alguna; ambos representan exactamente el mismo puntero en memoria."
    ],
    correctAnswerIndex: 0,
    explanation: "'undefined' es el valor por defecto que asigna el runtime a variables no inicializadas. 'null' es un primitivo que el programador asigna explícitamente para indicar que un puntero o propiedad carece de valor.",
    topic: "Fundamentos & Tipos",
    difficulty: "básico"
  },
  {
    id: "js-q-13",
    collectionId: "javascript",
    question: "¿Qué ocurre cuando una función generadora asíncrona ('async function*') produce valores con 'yield'?",
    options: [
      "Retorna un 'AsyncGenerator' que implementa el protocolo Symbol.asyncIterator, consumible mediante 'for await...of'.",
      "Bloquea el hilo del Event Loop hasta que el consumidor invoque el callback de retorno sincrónicamente.",
      "Almacena todos los valores generados en un array estático en memoria antes de permitir la iteración.",
      "Convierte automáticamente el código en un stream de Node.js de tipo WritableStream."
    ],
    correctAnswerIndex: 0,
    explanation: "Los async generators combinan generadores y promesas. Cada invocación a .next() devuelve una Promise que se resuelve con { value, done }, permitiendo consumir flujos asíncronos con 'for await...of'.",
    topic: "Asincronía & Promesas",
    difficulty: "avanzado"
  },
  {
    id: "js-q-14",
    collectionId: "javascript",
    question: "¿Qué peligro de seguridad mitiga el sellado o congelamiento de prototipos contra 'Prototype Pollution'?",
    options: [
      "Evita que un atacante inyecte propiedades maliciosas en Object.prototype que alteren la lógica de todos los objetos de la aplicación.",
      "Impide que el navegador descargue scripts de orígenes cruzados (CORS) sin cabeceras autorizadas.",
      "Previene que los tokens JWT almacenados en cookies sean legibles por JavaScript en el DOM.",
      "Bloquea el acceso a la base de datos SQL desde llamadas AJAX en el frontend."
    ],
    correctAnswerIndex: 0,
    explanation: "Prototype Pollution ocurre cuando la mutación de Object.prototype o del prototipo raíz inyecta claves no deseadas. Congelar el prototipo o usar diccionarios con null previene la escalada de privilegios.",
    topic: "Objetos & Prototipos",
    difficulty: "avanzado"
  },
  {
    id: "js-q-15",
    collectionId: "javascript",
    question: "¿Cuál es la función del objeto 'Reflect' en ECMAScript?",
    options: [
      "Provee métodos interceptores con el mismo nombre y signatura que los traps de Proxy, facilitando delegaciones limpias.",
      "Permite introspección de hardware para determinar la cantidad de núcleos de CPU disponibles.",
      "Sirve para clonar el DOM del navegador en un contexto de renderizado de Canvas WebGL.",
      "Es una biblioteca de expresiones regulares avanzada para parsing de sintaxis compleja."
    ],
    correctAnswerIndex: 0,
    explanation: "Reflect es un objeto global que agrupa métodos para operaciones interceptables internas (get, set, has, deleteProperty) con la misma signatura que los traps de un Proxy, simplificando reenvíos.",
    topic: "Metaprogramación & Proxies",
    difficulty: "intermedio"
  },
  {
    id: "js-q-16",
    collectionId: "javascript",
    question: "¿Cómo gestiona ECMAScript los módulos (ESM) con respecto a las dependencias circulares frente a CommonJS?",
    options: [
      "ESM utiliza 'live bindings' estáticos; las referencias se resuelven antes de la ejecución y reflejan mutaciones dinámicas.",
      "ESM arroja siempre una excepción 'CircularDependencyError' fatal impidiendo que el paquete compile.",
      "ESM duplica el módulo en memoria creando dos instancias completamente aisladas.",
      "ESM revierte silenciosamente al formato CommonJS reemplazando import por require()."
    ],
    correctAnswerIndex: 0,
    explanation: "En ESM, los módulos se enlazan estáticamente en la fase de instanciación con 'live bindings'. Esto permite que módulos con dependencias circulares accedan a las exportaciones una vez evaluadas.",
    topic: "Módulos & Arquitectura",
    difficulty: "avanzado"
  },
  {
    id: "js-q-17",
    collectionId: "javascript",
    question: "¿Qué es una 'closure' (clausura) en JavaScript y cuándo se genera?",
    options: [
      "La combinación de una función junto con el entorno léxico en el que fue declarada, reteniendo acceso a sus variables.",
      "Una instrucción especial que cierra la conexión a una base de datos tras ejecutar una consulta.",
      "Un método que fuerza el recolector de basura a liberar un contexto de ejecución inmediatamente.",
      "Un bloque 'try...finally' que garantiza la ejecución del código de limpieza al salir."
    ],
    correctAnswerIndex: 0,
    explanation: "Una closure es la unión de una función y las referencias a su entorno léxico circundante. Permite a una función interna acceder al ámbito de una función externa incluso después de que esta retornó.",
    topic: "Ámbitos & Closures",
    difficulty: "básico"
  },
  {
    id: "js-q-18",
    collectionId: "javascript",
    question: "¿Qué diferencia existe entre el operador '==' (coerción débil) y '===' (igualdad estricta)?",
    options: [
      "'==' realiza coerción de tipos mediante el algoritmo Abstract Equality Comparison; '===' compara tipos y valores sin coerción.",
      "'===' convierte ambos operandos a cadenas antes de verificar sus valores en la tabla ASCII.",
      "'==' compara únicamente referencias de memoria en el Heap ignorando los valores primitivos.",
      "No existe diferencia desde ES2020 puesto que '==' quedó completamente deprecado por el estándar."
    ],
    correctAnswerIndex: 0,
    explanation: "'==' ejecuta coerción implícita de tipos si los operandos difieren (ej: '0' == 0 es true). '===' requiere que tanto el tipo de dato como el valor sean estrictamente idénticos.",
    topic: "Fundamentos & Tipos",
    difficulty: "básico"
  },
  {
    id: "js-q-19",
    collectionId: "javascript",
    question: "¿Qué devuelve el operador 'typeof null' y a qué se debe este resultado en el motor de JavaScript?",
    options: [
      "Devuelve 'object'; es un bug histórico del primer diseño del motor donde los tipos se identificaban con etiquetas binarias.",
      "Devuelve 'null' de forma nativa desde la aprobación formal de ECMAScript 2015.",
      "Devuelve 'undefined' porque null no tiene constructor ni prototipo accesible.",
      "Devuelve 'boolean' puesto que null es un valor falso en contextos de control de flujo."
    ],
    correctAnswerIndex: 0,
    explanation: "En la primera implementación de JavaScript, los valores se almacenaban con etiquetas de tipo; 000 indicaba un objeto y null era una referencia nula (0x00), produciendo erróneamente 'object'. Se mantiene por compatibilidad.",
    topic: "Fundamentos & Tipos",
    difficulty: "intermedio"
  },
  {
    id: "js-q-20",
    collectionId: "javascript",
    question: "¿Cuál es el propósito del objeto global 'FinalizationRegistry' introducido en ES2021?",
    options: [
      "Registrar una función callback que se ejecutará después de que un objeto registrado haya sido recolectado por el GC.",
      "Garantizar que una transacción en IndexedDB se confirme antes de cerrar la pestaña del navegador.",
      "Interceptar el evento de descarga de la página ('beforeunload') para enviar métricas analíticas.",
      "Ejecutar pruebas unitarias de limpieza de memoria al compilar el proyecto en modo producción."
    ],
    correctAnswerIndex: 0,
    explanation: "FinalizationRegistry permite solicitar un callback de limpieza cuando un objeto destino es recolectado por el recolector de basura, útil para liberar recursos de bajo nivel en WebAssembly o WebGL.",
    topic: "Memoria & Garbage Collection",
    difficulty: "avanzado"
  },
  {
    id: "js-q-21",
    collectionId: "javascript",
    question: "¿Qué diferencia principal presenta un 'ArrayBuffer' respecto a un Array tradicional en JavaScript?",
    options: [
      "ArrayBuffer representa una porción fija y contigua de memoria binaria pura sin métodos directos de mutación salvo vistas tipadas.",
      "ArrayBuffer solo puede almacenar texto codificado en UTF-16 con tamaño variable dinámico.",
      "ArrayBuffer se aloja exclusivamente en la tarjeta gráfica del usuario para cómputo por sombreadores.",
      "ArrayBuffer se sincroniza automáticamente con el LocalStorage en intervalos de 100 milisegundos."
    ],
    correctAnswerIndex: 0,
    explanation: "Un ArrayBuffer es una estructura de longitud fija que almacena bytes binarios en bruto. Para leer o escribir en él es obligatorio usar vistas como DataView o TypedArrays (Uint8Array, Float64Array).",
    topic: "Memoria & Tipos Binarios",
    difficulty: "intermedio"
  },
  {
    id: "js-q-22",
    collectionId: "javascript",
    question: "¿Cuál es la función del símbolo bien conocido 'Symbol.iterator' en un objeto?",
    options: [
      "Define el método que devuelve el iterador por defecto del objeto, habilitando su uso en bucles 'for...of' y desestructuración.",
      "Permite clonar el objeto mediante el algoritmo de clonación profunda del motor V8.",
      "Indica al recolector de basura que debe examinar las propiedades en orden inverso al de inserción.",
      "Habilita el bloqueo de lectura concurrente sobre las claves privadas del objeto."
    ],
    correctAnswerIndex: 0,
    explanation: "Cualquier objeto que implemente un método bajo la clave [Symbol.iterator] que devuelva un objeto con el método .next() cumple con el protocolo iterable de ECMAScript y puede consumirse con for...of o [...spread].",
    topic: "Metaprogramación & Símbolos",
    difficulty: "intermedio"
  },
  {
    id: "js-q-23",
    collectionId: "javascript",
    question: "¿Cómo opera el encadenamiento opcional ('?.') si la referencia izquierda es 'null' o 'undefined'?",
    options: [
      "Cortocircuita inmediatamente la evaluación y retorna 'undefined' sin lanzar un TypeError.",
      "Lanza una excepción personalizada 'NullReferenceException' capturable con try...catch.",
      "Asigna un objeto vacío {} de forma reactiva y continúa evaluando la cadena de propiedades.",
      "Convierte la expresión en una promesa rechazada que emite un error de advertencia en consola."
    ],
    correctAnswerIndex: 0,
    explanation: "El operador de encadenamiento opcional (?.) verifica si el valor de la izquierda es nullish (null o undefined); de ser así, detiene la evaluación de la expresión y produce undefined sin arrojar error.",
    topic: "Fundamentos & Sintaxis Moderna",
    difficulty: "básico"
  },
  {
    id: "js-q-24",
    collectionId: "javascript",
    question: "¿Qué es el fenómeno de 'Megamorphic Inline Cache' en el motor de ejecución de JavaScript?",
    options: [
      "Ocurre cuando un punto de acceso a propiedad observa más de 4 Shapes diferentes, degradándose a una búsqueda lenta genérica.",
      "Un mecanismo de compresión de imágenes que amplía el tamaño de memoria asignado al hilo del Canvas.",
      "Una técnica que compila funciones puras directamente a lenguaje máquina sin pasar por el bytecode de Ignition.",
      "Una caché global compartida entre múltiples pestañas del navegador mediante Web Locks API."
    ],
    correctAnswerIndex: 0,
    explanation: "El Inline Caching (IC) optimiza llamadas observando Shapes. Si observa 1 forma es monomórfico (rápido); 2-4 es polimórfico; más de 4 se vuelve megamórfico, perdiendo la optimización y recurriendo a tablas lentas.",
    topic: "Memoria & V8",
    difficulty: "avanzado"
  },
  {
    id: "js-q-25",
    collectionId: "javascript",
    question: "¿Qué garantiza el uso del modo estricto ('use strict') con respecto a variables no declaradas?",
    options: [
      "Lanza un ReferenceError en tiempo de ejecución al asignar a una variable no declarada, impidiendo contaminar el objeto global.",
      "Convierte automáticamente las variables no declaradas en constantes protegidas inmutables.",
      "Envía una advertencia silenciosa al panel de telemetría sin detener la ejecución del script.",
      "Asigna la variable al almacenamiento de sesión del navegador con alcance temporal."
    ],
    correctAnswerIndex: 0,
    explanation: "En modo no estricto, asignar a 'x = 10' sin declarar 'x' creaba una propiedad en el objeto global (window.x). En 'use strict', esto arroja inmediatamente un ReferenceError.",
    topic: "Fundamentos & Strict Mode",
    difficulty: "básico"
  },
  {
    id: "js-q-26",
    collectionId: "javascript",
    question: "¿Cuál es la diferencia entre 'Function.prototype.call()' y 'Function.prototype.apply()'?",
    options: [
      "call() acepta argumentos individuales separados por comas; apply() acepta los argumentos contenidos en un array o pseudocódigo.",
      "call() ejecuta la función asíncronamente; apply() la ejecuta de manera síncrona en el hilo principal.",
      "call() solo funciona con funciones flecha; apply() solo opera con funciones generadoras tradicionales.",
      "apply() devuelve una nueva función vinculada de forma permanente; call() la ejecuta de forma transitoria."
    ],
    correctAnswerIndex: 0,
    explanation: "Ambos invocan una función asignando explícitamente el valor de 'this'. La diferencia es puramente sintáctica: fn.call(ctx, arg1, arg2) recibe lista separada por comas, mientras fn.apply(ctx, [arg1, arg2]) recibe un array.",
    topic: "Funciones & Ejecución",
    difficulty: "básico"
  },
  {
    id: "js-q-27",
    collectionId: "javascript",
    question: "¿Qué efecto tiene el método 'Promise.race()' cuando compiten múltiples promesas?",
    options: [
      "Se resuelve o rechaza inmediatamente con el resultado de la primera promesa que cambie de estado.",
      "Espera a que todas las promesas finalicen y selecciona la que haya consumido menor tiempo de CPU.",
      "Devuelve un array ordenado por orden de finalización de todas las promesas participantes.",
      "Cancela automáticamente las promesas más lentas invocando sus métodos de limpieza internos."
    ],
    correctAnswerIndex: 0,
    explanation: "Promise.race() devuelve una promesa que se resuelve o rechaza tan pronto como cualquiera de las promesas del iterable se resuelva o rechace, con su valor o razón correspondiente.",
    topic: "Asincronía & Promesas",
    difficulty: "intermedio"
  },
  {
    id: "js-q-28",
    collectionId: "javascript",
    question: "¿Para qué se utiliza el trap 'handler.get()' dentro de un objeto 'Proxy'?",
    options: [
      "Interceptar cualquier lectura de propiedades sobre el objeto destino, permitiendo validaciones, registros o valores virtuales.",
      "Descargar datos de una API externa mediante una petición HTTP de tipo GET automáticamente.",
      "Comprobar si el objeto destino tiene permisos de lectura otorgados por la política de seguridad CSP.",
      "Forzar una lectura sincronizada desde el almacenamiento en disco antes de acceder a la memoria."
    ],
    correctAnswerIndex: 0,
    explanation: "El trap get(target, property, receiver) permite interceptar el acceso a cualquier propiedad del objeto proxy, posibilitando patrones como logging, reactividad, validación o creación de propiedades dinámicas.",
    topic: "Metaprogramación & Proxies",
    difficulty: "intermedio"
  },
  {
    id: "js-q-29",
    collectionId: "javascript",
    question: "¿Qué causa habitualmente una fuga de memoria por 'Detached DOM Tree' en aplicaciones web con JavaScript?",
    options: [
      "Retener referencias de JavaScript a nodos del DOM que ya fueron eliminados del árbol visual por el navegador.",
      "Definir demasiadas variables globales con valores primitivos de tipo string o número.",
      "Utilizar más de tres fuentes web tipográficas personalizadas simultáneamente en un mismo documento.",
      "Ejecutar peticiones WebSocket sin cerrar la conexión tras recibir un código de estado 1000."
    ],
    correctAnswerIndex: 0,
    explanation: "Un nodo DOM desconectado ocurre cuando un elemento se remueve del DOM visible pero sigue referenciado en variables o closures de JavaScript. Esto impide que el recolector de basura libere el nodo y sus descendientes.",
    topic: "Memoria & Garbage Collection",
    difficulty: "avanzado"
  },
  {
    id: "js-q-30",
    collectionId: "javascript",
    question: "¿Cuál es el resultado de evaluar '[] + {}' frente a '{} + []' en la consola de JavaScript en contexto de expresión?",
    options: [
      "'[object Object]' en el primer caso debido a coerción de tipos con ToPrimitive; el segundo puede variar según se interprete como bloque.",
      "Ambas expresiones devuelven siempre NaN debido a incompatibilidad estricta de tipos de datos.",
      "Ambas expresiones generan un SyntaxError porque los operadores aritméticos solo admiten números primitivos.",
      "Devuelven 0 en ambos casos porque las referencias a objetos vacíos se evalúan numéricamente a cero."
    ],
    correctAnswerIndex: 0,
    explanation: "[] + {} convierte [] a '' y {} a '[object Object]', sumando '[object Object]'. En consola, si {} se interpreta como bloque de código vacío seguido de +[], evalúa +[] que es el número 0. En una expresión pura con paréntesis, ambas dan '[object Object]'.",
    topic: "Fundamentos & Coerción",
    difficulty: "avanzado"
  }
];
