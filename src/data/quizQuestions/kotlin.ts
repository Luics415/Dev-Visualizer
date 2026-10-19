import type { QuizQuestion } from "@/data/quizTypes";

export const kotlinQuestions: QuizQuestion[] = [
  {
    id: "kotlin-q-01",
    collectionId: "kotlin",
    question: "¿Cómo implementa el compilador de Kotlin las funciones suspendibles ('suspend') de las corrutinas?",
    options: [
      "Creando un nuevo hilo del sistema operativo para cada llamada a la función suspendible.",
      "Mediante transformación CPS (Continuation-Passing Style): agrega un parámetro implícito 'Continuation<T>' a la firma del bytecode y genera una máquina de estados para suspender y reanudar sin bloquear hilos.",
      "Ejecutando el código en un subproceso de Node.js mediante WebAssembly.",
      "Serializando la función en un archivo temporal de base de datos."
    ],
    correctAnswerIndex: 1,
    explanation: "El compilador de Kotlin compila las funciones suspendibles transformándolas a CPS (Continuation-Passing Style). La función recibe un objeto Continuation y se estructura internamente como una máquina de estados con etiquetas de suspensión (switch/tableswitch), permitiendo liberar el hilo subyacente hasta que la tarea asíncrona notifique su reanudación.",
    topic: "Corrutinas e Internals",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-02",
    collectionId: "kotlin",
    question: "¿Cuál es la diferencia crítica entre 'launch' y 'async' como constructores de corrutinas?",
    options: [
      "launch solo funciona en Android y async en servidores backend Ktor.",
      "launch inicia una corrutina de tipo 'fire-and-forget' que devuelve un 'Job' (sin resultado de retorno directo); async devuelve un 'Deferred<T>' (una subclase de Job) cuyo resultado se obtiene asíncronamente invocando '.await()'.",
      "async bloquea el hilo llamador hasta que la tarea concluye.",
      "launch no propaga excepciones a los scopes padre."
    ],
    correctAnswerIndex: 1,
    explanation: "launch está pensado para efectos colaterales (retorna Job para cancelar o monitorear); async está diseñado para producir un cómputo asíncrono con valor, encapsulándolo en un Deferred<T> que expone await() para sincronizar el resultado.",
    topic: "Constructores de Corrutinas",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-03",
    collectionId: "kotlin",
    question: "¿Qué efecto tiene el uso de 'SupervisorJob' frente a un 'Job' estándar dentro de un CoroutineScope?",
    options: [
      "Duplica la velocidad del procesador desactivando comprobaciones de tipos.",
      "En un Job estándar, el fallo de una corrutina hija cancela inmediatamente al padre y a todas sus hermanas; con SupervisorJob, el fallo de una hija no cancela a las demás hermanas ni al supervisor.",
      "Permite ejecutar corrutinas con privilegios de administrador del sistema operativo.",
      "Impide que las corrutinas se cancelen mediante llamadas a cancel()."
    ],
    correctAnswerIndex: 1,
    explanation: "La concurrencia estructurada normal cancela todo el árbol si un nodo hijo falla. Un SupervisorJob rompe esa propagación bidireccional descendente: si una tarea falla, el error puede ser manejado localmente sin interrumpir las demás operaciones concurrentes del scope.",
    topic: "Concurrencia Estructurada",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-04",
    collectionId: "kotlin",
    question: "¿Qué ventaja ofrece 'inline' con 'reified' en los parámetros de tipo genéricos de una función en Kotlin?",
    options: [
      "Permite que los tipos genéricos se almacenen en disco duro cifrados.",
      "Al inlinear el cuerpo de la función en el punto de llamada, el compilador puede conservar el tipo de clase concreto de T en tiempo de ejecución (ej. 'T::class.java'), superando el borrado de tipos (Type Erasure) de la JVM.",
      "Convierte la función en un método nativo de C++.",
      "Deshabilita el recolector de basura de la máquina virtual."
    ],
    correctAnswerIndex: 1,
    explanation: "En la JVM los genéricos se borran en compilación. Al marcar una función como 'inline fun <reified T> foo()', el compilador copia el código en el invocador donde el tipo exacto ya se conoce, permitiendo inspeccionar 'T::class.java' o hacer 'is T' sin pasar un Class<T> explícito.",
    topic: "Genéricos y Funciones Inline",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-05",
    collectionId: "kotlin",
    question: "¿Cómo se resuelve una llamada a una 'Extension Function' (función de extensión) bajo el capó en el bytecode de la JVM?",
    options: [
      "Modifica dinámicamente la tabla de métodos de la clase en memoria mediante reflexión.",
      "Se compila como un método estático estricto donde el objeto receptor (receiver) se pasa como el primer argumento formal del método estático, resolviéndose estáticamente en tiempo de compilación sin despacho polimórfico.",
      "Hereda automáticamente de la clase receptora mediante herencia oculta.",
      "Crea un proxy dinámico utilizando java.lang.reflect.Proxy."
    ],
    correctAnswerIndex: 1,
    explanation: "Las funciones de extensión no modifican la clase original. En bytecode, 'fun String.miExtension()' es simplemente 'public static final void miExtension(String $this$miExtension)'. Por ello se resuelven estáticamente según el tipo declarado de la variable y no polimórficamente.",
    topic: "Bytecode e Interoperabilidad",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-06",
    collectionId: "kotlin",
    question: "¿Qué diferencia existe entre un 'Flow' frío (cold stream) y un 'StateFlow' caliente (hot stream)?",
    options: [
      "Un Flow frío se ejecuta solo en invierno y StateFlow en verano.",
      "Un Flow frío no ejecuta el bloque del productor hasta que un consumidor invoca un operador terminal como '.collect()'; StateFlow es un flujo caliente que siempre retiene un valor de estado actual en memoria y lo emite inmediatamente a cualquier nuevo suscriptor.",
      "StateFlow solo permite emitir cadenas de texto.",
      "Un Flow frío solo admite un suscriptor simultáneo por proceso."
    ],
    correctAnswerIndex: 1,
    explanation: "Los flujos estándar (cold flows) son bajo demanda: el código del bloque 'flow { ... }' se ejecuta de nuevo para cada recolector. StateFlow es un hot flow: mantiene un valor actual activo en memoria ('value'), nunca se detiene y comparte las actualizaciones con múltiples suscriptores.",
    topic: "Kotlin Coroutines Flow",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-07",
    collectionId: "kotlin",
    question: "¿Cuál es el propósito y comportamiento de una '@JvmInline value class' en Kotlin?",
    options: [
      "Hacer que la clase se guarde en un registro volátil de la CPU.",
      "Proporcionar una envoltura fuertemente tipada de un solo valor en tiempo de compilación sin incurrir en la sobrecarga de instanciar un objeto en el Heap en runtime (salvo cuando se requiere boxing como interfaz o genérico).",
      "Permitir herencia múltiple de múltiples clases base.",
      "Evitar que la clase sea deserializada desde archivos JSON."
    ],
    correctAnswerIndex: 1,
    explanation: "Las value classes (antes inline classes) introducen tipos de dominio expresivos (ej. value class UserId(val id: Long)) con costo cero en runtime: la JVM opera directamente con el tipo primitivo subyacente sin reservar memoria para la instancia envolvente.",
    topic: "Value Classes y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-08",
    collectionId: "kotlin",
    question: "¿Por qué un 'data class' en Kotlin no puede heredar de otro 'data class'?",
    options: [
      "Porque el compilador no permite más de 10 clases en el mismo paquete.",
      "Porque generaría contradicciones insalvables y asimetría en el contrato de 'equals()' y 'hashCode()' generado automáticamente al comparar subclases con superclases.",
      "Porque los data classes se compilan a interfaces puras en la JVM.",
      "Porque el recolector de basura no puede rastrear jerarquías de datos inmutables."
    ],
    correctAnswerIndex: 1,
    explanation: "El compilador genera automáticamente equals() comparando todos los campos declarados en el constructor primario. Si un data class heredara de otro data class con campos adicionales, violaría la simetría o transitividad de equals() exigida por la especificación de Java.",
    topic: "Diseño de Clases y Data Classes",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-09",
    collectionId: "kotlin",
    question: "¿Qué diferencia existe entre las funciones de ámbito 'let', 'apply', 'also', 'run' y 'with' en cuanto a su objeto de contexto y valor de retorno?",
    options: [
      "Todas devuelven exactamente Unit sin importar la lambda.",
      "'apply' y 'also' devuelven el propio objeto de contexto ('apply' usa 'this' y 'also' usa 'it'); 'let' y 'run' devuelven el resultado evaluado de la lambda ('let' usa 'it' y 'run' usa 'this').",
      "'let' solo puede usarse con variables numéricas y 'run' con cadenas.",
      "'with' se ejecuta en un hilo separado del sistema operativo."
    ],
    correctAnswerIndex: 1,
    explanation: "La matriz canónica de funciones de ámbito: apply (this) y also (it) retornan el objeto receptor (ideales para configuración e inspección/logging); let (it) y run (this) retornan el resultado de la última expresión de la lambda (ideales para transformación y cómputo).",
    topic: "Scope Functions",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-10",
    collectionId: "kotlin",
    question: "¿Qué es el modificador 'crossinline' en los parámetros de una función inline?",
    options: [
      "Permite ejecutar la lambda en sistemas operativos multiplataforma.",
      "Indica que la lambda puede inlinearse pero NO permite retornos no locales ('non-local returns'), indispensable cuando la lambda se ejecutará dentro de un objeto anónimo o un contexto de ejecución anidado.",
      "Fuerza a que la función se ejecute en el hilo principal de la interfaz de usuario.",
      "Deshabilita la captura de variables del ámbito contenedor."
    ],
    correctAnswerIndex: 1,
    explanation: "En una función inline, las lambdas pueden hacer 'return' que sale de la función externa llamadora (non-local return). Si esa lambda se pasa a un Runnable o contexto donde no se ejecuta inmediatamente en el frame actual, 'crossinline' prohíbe el retorno no local manteniendo el inlining.",
    topic: "Funciones Inline y Lambdas",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-11",
    collectionId: "kotlin",
    question: "¿Qué diferencia existe entre una 'Sequence' y un 'Iterable' al encadenar operaciones como filter y map?",
    options: [
      "Iterable no admite expresiones lambda en Kotlin.",
      "Iterable evalúa cada paso de forma impaciente (eagerly), creando colecciones intermedias en cada paso de la cadena; Sequence evalúa los elementos de forma perezosa (lazily) elemento por elemento, evitando asignaciones de colecciones temporales.",
      "Sequence solo funciona con números enteros menores a 1000.",
      "Iterable se ejecuta en paralelo en todos los núcleos de CPU por defecto."
    ],
    correctAnswerIndex: 1,
    explanation: "Con Iterable, 'list.filter().map()' produce una lista intermedia completa tras filter y otra tras map. Con 'list.asSequence().filter().map().toList()', cada elemento fluye verticalmente por todo el pipeline uno a uno, eliminando la sobrecarga de buffers intermedios.",
    topic: "Colecciones y Sequences",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-12",
    collectionId: "kotlin",
    question: "¿Qué representa el tipo 'Nothing' en el sistema de tipos de Kotlin?",
    options: [
      "Un sinónimo de void en Java que retorna una referencia nula.",
      "El tipo inferior (bottom type) de toda la jerarquía de tipos de Kotlin: no tiene instancias y representa expresiones que nunca terminan normalmente (como funciones que siempre lanzan excepciones o bucles infinitos).",
      "Una interfaz para componentes que no tienen estado.",
      "Un contenedor opcional similar a java.util.Optional."
    ],
    correctAnswerIndex: 1,
    explanation: "Nothing es un subtipo de todos los demás tipos en Kotlin (incluso de Int, String, etc.). Debido a esto, una llamada a 'throw Exception()' o 'TODO()' tiene tipo Nothing, lo que permite que el compilador acepte expresiones como 'val x = foo ?: throw Error()' infiriendo el tipo de foo.",
    topic: "Sistema de Tipos",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-13",
    collectionId: "kotlin",
    question: "¿Cómo previene Kotlin problemas de concurrencia al inicializar un 'object' (singleton)?",
    options: [
      "Bloqueando el hilo principal con Thread.sleep() durante 100 milisegundos.",
      "Aprovechando la garantía de inicialización estática de clases de la JVM (clinit): la instancia singleton se inicializa de forma perezosa la primera vez que se accede a la clase, con seguridad de hilos garantizada por el propio ClassLoader.",
      "Utilizando un cerrojo distribuido de Redis.",
      "Creando una copia local en cada hilo de ejecución."
    ],
    correctAnswerIndex: 1,
    explanation: "Una declaración 'object MySingleton' se compila como una clase con un campo 'public static final MySingleton INSTANCE' inicializado en su bloque estático '<clinit>'. El ClassLoader de la JVM garantiza que la carga de clases sea atómica y thread-safe.",
    topic: "Patrones de Diseño y Singleton",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-14",
    collectionId: "kotlin",
    question: "¿Qué es la 'Varianza en el sitio de declaración' (Declaration-site variance) con 'out' e 'in' en Kotlin?",
    options: [
      "Una directiva de compilación para exportar código a JavaScript.",
      "Permite anotar la varianza en la definición de la clase/interfaz ('interface Source<out T>' para covarianza, 'interface Comparable<in T>' para contravarianza), eliminando la necesidad de comodines verbosos (? extends / ? super) en cada firma de método que la use.",
      "Un mecanismo para renombrar paquetes sin romper el enlace estático.",
      "Una forma de restringir la memoria RAM máxima que puede ocupar un struct."
    ],
    correctAnswerIndex: 1,
    explanation: "A diferencia de Java donde la varianza se declara en cada uso (? extends T), Kotlin permite declarar en la propia interfaz: 'out T' significa que T solo se produce/retorna (covariante); 'in T' significa que T solo se consume/pasa como argumento (contravariante).",
    topic: "Genéricos y Varianza",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-15",
    collectionId: "kotlin",
    question: "¿Qué hace la función 'withContext(NonCancellable)' en la gestión del ciclo de vida de una corrutina?",
    options: [
      "Impide que la aplicación móvil se cierre si el usuario apaga el teléfono.",
      "Permite ejecutar bloques de limpieza esenciales dentro de bloques 'finally' cuando la corrutina ya ha sido cancelada, evitando que operaciones suspendibles (como cerrar sockets o transacciones) fallen con CancellationException.",
      "Convierte la corrutina en un servicio en segundo plano perpetuo.",
      "Deshabilita todas las alertas de red del sistema operativo."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando una corrutina se cancela, su contexto entra en estado cancelado y cualquier función suspendible subsiguiente lanzará CancellationException inmediatamente. Para invocar funciones suspendibles de limpieza en un finally, se debe envolver en withContext(NonCancellable).",
    topic: "Corrutinas y Cancelación",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-16",
    collectionId: "kotlin",
    question: "¿Cuál es la función de 'tailrec' y qué optimización efectúa el compilador de Kotlin?",
    options: [
      "Permite calcular la longitud del texto de una función recursiva.",
      "Si la llamada recursiva es la última instrucción de la función (recursión de cola), transforma la recursión en un bucle 'while' iterativo en bytecode, garantizando cero consumo adicional de stack frames y previniendo StackOverflowError.",
      "Ejecuta la función recursiva en un clúster remoto.",
      "Obliga a que la función retorne un valor nulo si la lista está vacía."
    ],
    correctAnswerIndex: 1,
    explanation: "tailrec optimiza funciones recursivas terminales. El compilador sustituye los saltos de llamada a función por un bucle plano en bytecode, logrando la velocidad y seguridad de memoria de un bucle iterativo sin sacrificar la elegancia declarativa.",
    topic: "Optimizaciones de Compilador",
    difficulty: "básico"
  },
  {
    id: "kotlin-q-17",
    collectionId: "kotlin",
    question: "¿Qué es un 'Platform Type' (denotado con un signo de exclamación: 'String!') en Kotlin?",
    options: [
      "Un tipo de dato exclusivo para la plataforma iOS en Kotlin Multiplatform.",
      "Un tipo que proviene de código Java interoperable sin anotaciones de nulabilidad (@Nullable / @NotNull); el compilador de Kotlin relaja la comprobación estática de nulabilidad trasladando la responsabilidad al desarrollador.",
      "Un tipo primitivo asignado directamente en registros de la CPU.",
      "Una clase sellada que solo puede instanciarse en el hilo principal."
    ],
    correctAnswerIndex: 1,
    explanation: "Al llamar a métodos Java sin metadatos de nulabilidad, Kotlin no puede asegurar si el retorno es null o no. Trata el tipo como 'T!' (platform type), permitiendo tratarlo como T o T? sin forzar comprobaciones, pero pudiendo arrojar NullPointerException si resulta ser nulo.",
    topic: "Interoperabilidad Java/Kotlin",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-18",
    collectionId: "kotlin",
    question: "¿Qué ventaja ofrece KSP (Kotlin Symbol Processing) frente al antiguo KAPT (Annotation Processing Tool)?",
    options: [
      "KSP compila el código en lenguajes ensambladores nativos de 16 bits.",
      "KSP comprende directamente el árbol de sintaxis y la semántica de Kotlin sin necesidad de generar costosos 'Java stubs', acelerando la velocidad de compilación hasta 2x o 4x en frameworks como Room o Moshi.",
      "KSP es una herramienta gráfica de depuración en Android Studio.",
      "KSP elimina la necesidad de escribir pruebas unitarias."
    ],
    correctAnswerIndex: 1,
    explanation: "KAPT obligaba al compilador a generar archivos fuente Java ficticios ('stubs') de todo el código Kotlin para que los procesadores de anotaciones estándar de Java (APT) pudieran leerlos. KSP lee los símbolos del AST de Kotlin directamente, multiplicando la velocidad de compilación.",
    topic: "Compilación y Tooling",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-19",
    collectionId: "kotlin",
    question: "¿Cómo implementa Kotlin la delegación de propiedades mediante la palabra clave 'by' (ej. 'val x by lazy { ... }')?",
    options: [
      "Crea un hilo secundario que recalcula el valor cada segundo.",
      "El compilador genera un campo oculto privado que contiene la instancia del delegado y redirige las llamadas al getter/setter invocando 'getValue()' y 'setValue()' con la referencia del receptor y un metadato 'KProperty'.",
      "Delega el cálculo al servidor de bases de datos mediante llamadas JDBC.",
      "Convierte la propiedad en una variable global inmutable."
    ],
    correctAnswerIndex: 1,
    explanation: "La delegación de propiedades es azúcar sintáctico de compilador: 'val prop: Type by Delegate()' se traduce en un campo oculto '$$prop$delegate' y el getter generado ejecuta '$$prop$delegate.getValue(this, ::prop)', permitiendo patrones limpios como lazy u observable.",
    topic: "Delegación y Propiedades",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-20",
    collectionId: "kotlin",
    question: "¿Qué diferencia existe entre 'SharedFlow' y 'StateFlow' en la biblioteca de corrutinas?",
    options: [
      "SharedFlow solo funciona en servidores Apache Tomcat.",
      "StateFlow es una especialización de SharedFlow con capacidad de retención de 1 elemento (conflación de emisiones idénticas mediante equals y siempre con valor inicial); SharedFlow permite configurar búferes, políticas de descarte y 'replay cache' arbitrario para eventos.",
      "StateFlow no admite recolectores concurrentes.",
      "SharedFlow se ejecuta únicamente en el hilo de procesamiento gráfico."
    ],
    correctAnswerIndex: 1,
    explanation: "StateFlow modela estado puro (siempre tiene un valor actual T y no emite si el nuevo valor es igual al anterior). SharedFlow modela secuencias de eventos (como clics de navegación o mensajes de snackbar) donde se pueden emitir valores duplicados con repetición configurable.",
    topic: "Kotlin Coroutines Flow",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-21",
    collectionId: "kotlin",
    question: "¿Qué efecto tiene anotar una función o propiedad de un 'companion object' con '@JvmStatic'?",
    options: [
      "Hace que la función no pueda ser modificada en tiempo de ejecución.",
      "Le indica al compilador que genere un método estático real en la clase contenedora Java en el bytecode, permitiendo a los clientes Java invocarlo limpiamente como 'Clase.metodo()' en vez de 'Clase.Companion.metodo()'.",
      "Asigna memoria fija en la sección .data del binario compilado.",
      "Convierte el método en una macro del preprocesador."
    ],
    correctAnswerIndex: 1,
    explanation: "Por defecto, los miembros de companion object se compilan como métodos de instancia de una clase estática interna llamada 'Companion'. @JvmStatic le ordena al compilador emitir además un método estático sintético en la clase contenedora externa para compatibilidad natural con Java.",
    topic: "Interoperabilidad Java/Kotlin",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-22",
    collectionId: "kotlin",
    question: "¿Qué garantiza el uso de 'Contracts API' (contratos de compilador) en funciones de Kotlin?",
    options: [
      "Que el código cumpla con los términos legales de la licencia Apache 2.0.",
      "Permite a una función comunicar formalmente al compilador sus efectos de flujo de control (ej. 'returns() implies (arg != null)' o 'callsInPlace(lambda, InvocationKind.EXACTLY_ONCE)'), habilitando smart casts avanzados y asignaciones de variables val.",
      "Que el código se ejecute dentro de una transacción bancaria ACID.",
      "Que la función no lance excepciones de tipo OutOfMemoryError."
    ],
    correctAnswerIndex: 1,
    explanation: "Los contratos de Kotlin le informan al analizador estático sobre garantías que la función cumple: por ejemplo, 'CharSequence?.isNullOrEmpty()' usa un contrato para que el compilador sepa que si la función devuelve false, la variable receptor es no nula con smart-cast.",
    topic: "Contracts y Smart Casts",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-23",
    collectionId: "kotlin",
    question: "¿Cuál es la diferencia entre el operador '==' y '===' en Kotlin?",
    options: [
      "No existe el operador === en la gramática de Kotlin.",
      "'==' comprueba igualdad estructural invocando de forma segura '.equals()' (manejando nulos sin arrojar NPE); '===' comprueba igualdad referencial verificando si dos referencias apuntan exactamente al mismo objeto en memoria.",
      "'===' comprueba si dos números son del mismo tipo primitivo.",
      "'==' solo puede usarse con cadenas de texto."
    ],
    correctAnswerIndex: 1,
    explanation: "En Kotlin, 'a == b' se traduce automáticamente en 'a?.equals(b) ?: (b === null)' (igualdad de contenido o valor). El operador '===' evalúa si las referencias físicas en memoria son idénticas (equivalente al == de Java en objetos).",
    topic: "Operadores y Comparación",
    difficulty: "básico"
  },
  {
    id: "kotlin-q-24",
    collectionId: "kotlin",
    question: "¿Qué sucede si una corrutina en ejecución no es cooperativa y no verifica puntos de cancelación?",
    options: [
      "El sistema operativo detiene el microprocesador automáticamente.",
      "La llamada a 'job.cancel()' marca la corrutina como cancelada en estado, pero esta continuará ejecutando su bucle activo indefinidamente hasta que invoque una función suspendible o verifique explícitamente 'isActive' o 'ensureActive()'.",
      "El runtime de Kotlin lanza un error fatal en el ClassLoader.",
      "La corrutina se reinicia inmediatamente desde el principio."
    ],
    correctAnswerIndex: 1,
    explanation: "La cancelación en corrutinas de Kotlin es cooperativa. Si una corrutina ejecuta un bucle computacional pesado de CPU sin invocar funciones de suspensión cooperativas (como delay o yield) ni verificar 'coroutineContext.isActive', no se detendrá.",
    topic: "Corrutinas y Cancelación",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-25",
    collectionId: "kotlin",
    question: "¿Qué ventaja ofrece el nuevo compilador K2 de Kotlin introducido a partir de Kotlin 2.0?",
    options: [
      "Permite escribir aplicaciones que no consumen energía eléctrica.",
      "Unifica los frontends de todas las plataformas (JVM, JS, Native, WASM) en una única arquitectura de representación intermedia (FIR - Frontend Intermediate Representation), duplicando la velocidad de compilación y habilitando plugins de compilador consistentes.",
      "Elimina por completo la necesidad de instalar el SDK de Java.",
      "Sustituye el recolector de basura de Android por uno propio en C."
    ],
    correctAnswerIndex: 1,
    explanation: "K2 reescribió el frontend del compilador de Kotlin desde cero. Al basarse en la arquitectura FIR, acelera los tiempos de compilación hasta un 50-100%, proporciona análisis semánticos más rápidos y estabiliza la API de plugins de compilador para todo el ecosistema.",
    topic: "Compilación y Kotlin 2.0",
    difficulty: "avanzado"
  },
  {
    id: "kotlin-q-26",
    collectionId: "kotlin",
    question: "¿Cómo se implementan los 'DSL Builders' con sintaxis fluida y legible en Kotlin?",
    options: [
      "Escribiendo scripts en lenguaje bash que generan archivos de configuración XML.",
      "Combinando funciones de orden superior, lambdas con receptor ('T.() -> Unit') y operadores convención como 'invoke()', permitiendo que el cuerpo de la lambda acceda a los métodos de T como si estuviera dentro de su propio ámbito.",
      "Sobrecargando el operador de división para concatenar cadenas.",
      "Utilizando macros de C a través de llamadas FFI nativas."
    ],
    correctAnswerIndex: 1,
    explanation: "Las 'lambdas con receptor' (ej. 'fun html(init: HTML.() -> Unit)') definen un tipo receptor que se convierte en el 'this' implícito dentro del bloque. Esto permite invocar métodos del constructor directamente sin prefijos, creando DSLs idiomáticos y seguros.",
    topic: "DSL y Lambdas con Receptor",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-27",
    collectionId: "kotlin",
    question: "¿Qué efecto tiene el operador 'not-null assertion' ('!!') y por qué debe evitarse en código de producción?",
    options: [
      "Convierte el valor en una cadena de texto encriptada.",
      "Fuerza al compilador a tratar el tipo como no nulo; si el valor en tiempo de ejecución resulta ser 'null', lanza inmediatamente una excepción 'NullPointerException' (KotlinNullPointerException), anulando las garantías de seguridad de tipos del lenguaje.",
      "Comprueba la velocidad de lectura de la variable en memoria caché.",
      "Imprime una advertencia silenciosa en la consola del desarrollador."
    ],
    correctAnswerIndex: 1,
    explanation: "El operador '!!' es un cast forzado de nulabilidad. Si la suposición del programador es errónea, el programa hace crash con NullPointerException en tiempo de ejecución. En su lugar, deben utilizarse operadores seguros como '?.', '?:' o smart casts condicionales.",
    topic: "Null Safety",
    difficulty: "básico"
  },
  {
    id: "kotlin-q-28",
    collectionId: "kotlin",
    question: "¿Qué rol desempeña el despachador 'Dispatchers.Default' frente a 'Dispatchers.IO' en el runtime de corrutinas?",
    options: [
      "Dispatchers.Default maneja conexiones USB y Dispatchers.IO maneja audio Bluetooth.",
      "Dispatchers.Default está respaldado por un pool de hilos del tamaño de los núcleos de CPU (óptimo para trabajo intensivo de cálculo); Dispatchers.IO comparte hilos con Default pero puede expandirse hasta 64 hilos o más para operaciones bloqueantes de entrada/salida sin saturar el procesamiento computacional.",
      "Dispatchers.IO se ejecuta exclusivamente en el hilo de interfaz gráfica de usuario.",
      "No existe diferencia; son sinónimos con nombres alternativos."
    ],
    correctAnswerIndex: 1,
    explanation: "Default está dimensionado para no sobrecargar la CPU (hilos = cantidad de núcleos). IO está diseñado para llamadas de disco o red que duermen en el kernel esperando datos, permitiendo elasticidad para crear hilos adicionales según la demanda sin congelar cálculos de Default.",
    topic: "Despachadores y Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "kotlin-q-29",
    collectionId: "kotlin",
    question: "¿Cuál es la función del operador de desestructuración ('component1()', 'component2()') en Kotlin?",
    options: [
      "Desmontar componentes de hardware del procesador del cliente.",
      "Permite extraer múltiples propiedades de una instancia en variables locales independientes mediante sintaxis como 'val (id, nombre) = usuario', mapeando posicionalmente a las funciones 'operator fun componentN()' generadas por el compilador.",
      "Borrar las variables de la memoria del proceso para evitar fugas.",
      "Dividir un archivo de imagen en mapas de bits individuales."
    ],
    correctAnswerIndex: 1,
    explanation: "La desestructuración en Kotlin no se basa en nombres de propiedades sino en funciones convención 'componentN()'. Los data classes las generan automáticamente para los campos del constructor primario, permitiendo desglosar tuplas, pares y entidades limpiamente.",
    topic: "Sintaxis y Convenciones",
    difficulty: "básico"
  },
  {
    id: "kotlin-q-30",
    collectionId: "kotlin",
    question: "¿Cómo resuelve Kotlin Multiplatform (KMP) la vinculación entre código común y código dependiente del sistema operativo?",
    options: [
      "Incrustando emuladores de Android y Windows dentro de cada archivo compilado.",
      "Mediante el mecanismo 'expect / actual': el código común en 'commonMain' declara la firma requerida con la palabra clave 'expect', y cada plataforma destino (androidMain, iosMain, jvmMain) proporciona la implementación concreta mediante 'actual'.",
      "Compilando todo el código fuente exclusivamente a lenguaje C# de .NET.",
      "Enviando el código fuente a un servidor remoto que realiza la compilación cruzada en la nube."
    ],
    correctAnswerIndex: 1,
    explanation: "El paradigma 'expect / actual' permite diseñar abstracciones nativas en KMP: se define 'expect class Platform()' en el módulo compartido y los targets específicos suministran 'actual class Platform()' usando APIs de Android (JVM) o iOS (Objective-C/Swift) con verificación estática de compatibilidad.",
    topic: "Kotlin Multiplatform (KMP)",
    difficulty: "avanzado"
  }
];
