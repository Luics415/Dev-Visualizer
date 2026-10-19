import type { QuizQuestion } from "@/data/quizTypes";

export const rustQuestions: QuizQuestion[] = [
  {
    id: "rust-q-01",
    collectionId: "rust",
    question: "¿Cuál es la regla fundamental de aliasing y mutabilidad que impone el Borrow Checker en Rust?",
    options: [
      "Se pueden tener tantas referencias mutables (&mut T) simultáneas como núcleos tenga la CPU.",
      "Para cualquier recurso en un instante dado, se pueden tener o bien cualquier número de referencias inmutables (&T), o bien exactamente una única referencia mutable (&mut T), pero nunca ambas simultáneamente.",
      "Las referencias solo son válidas si el tipo implementa el trait Copy.",
      "Toda referencia debe liberarse explícitamente mediante una llamada a free() antes de salir de ámbito."
    ],
    correctAnswerIndex: 1,
    explanation: "El invariante central de Rust es 'Aliasing XOR Mutability'. Garantizar en tiempo de compilación que una referencia mutable sea exclusiva previene por completo las carreras de datos (data races) e invalidaciones de punteros en memoria.",
    topic: "Borrow Checker y Ownership",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-02",
    collectionId: "rust",
    question: "¿Qué diferencia existe entre los traits 'Copy' y 'Clone' en el sistema de tipos de Rust?",
    options: [
      "Copy solo funciona en heap y Clone solo en stack.",
      "Copy realiza una duplicación bit a bit implícita en la pila (memcpy trivial) sin costo en tiempo de ejecución, mientras que Clone requiere una invocación explícita (x.clone()) que puede ejecutar asignaciones costosas en el heap.",
      "Clone solo está disponible para tipos primitivos enteros.",
      "Copy destruye la variable original para transferir la propiedad al clon."
    ],
    correctAnswerIndex: 1,
    explanation: "Copy es un marker trait para tipos cuyo duplicado es un simple copiado de bits (como i32 o tuplas de tipos Copy) sin alterar recursos externos. Clone es una duplicación explícita que puede involucrar reservas dinámicas de memoria (como String o Vec).",
    topic: "Sistema de Tipos",
    difficulty: "básico"
  },
  {
    id: "rust-q-03",
    collectionId: "rust",
    question: "¿Qué es un 'fat pointer' (puntero gordo) en el contexto de 'dyn Trait' (trait objects)?",
    options: [
      "Un puntero que ocupa 64 bytes para almacenar datos criptográficos.",
      "Una estructura de dos palabras máquina: un puntero a los datos concretos de la instancia en memoria y un puntero a la 'vtable' que contiene las funciones del trait para despacho dinámico.",
      "Un puntero que se niega a ser liberado por el destructor Drop.",
      "Un puntero administrado por el Garbage Collector en runtime."
    ],
    correctAnswerIndex: 1,
    explanation: "A diferencia de un puntero simple a tipo concreto (1 palabra: 8 bytes en 64-bit), los trait objects 'dyn Trait' usan fat pointers de 2 palabras (16 bytes): la dirección del objeto concreto y la dirección de su tabla virtual (vtable).",
    topic: "Polimorfismo Dinámico",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-04",
    collectionId: "rust",
    question: "¿Cuál es la diferencia de concurrencia y seguridad entre 'Rc<T>' y 'Arc<T>'?",
    options: [
      "Rc comprime los datos con gzip y Arc con lz4.",
      "Rc<T> utiliza un contador de referencias no atómico y no implementa Send/Sync (restringido a un solo hilo); Arc<T> utiliza operaciones atómicas en hardware para el contador, permitiendo compartir propiedad de forma segura entre múltiples hilos.",
      "Arc solo puede almacenar tipos primitivos enteros y flotantes.",
      "Rc se libera automáticamente al 50% de memoria del sistema."
    ],
    correctAnswerIndex: 1,
    explanation: "Rc (Reference Counted) incurre en menor sobrecosto pero no es thread-safe. Arc (Atomic Reference Counted) usa instrucciones atómicas para incrementar/decrementar la cuenta de referencias de forma concurrente sin condiciones de carrera.",
    topic: "Smart Pointers y Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-05",
    collectionId: "rust",
    question: "¿Qué problema resuelve 'RefCell<T>' mediante el patrón de 'Interior Mutability'?",
    options: [
      "Permite ejecutar código sin compilarlo previamente a código binario.",
      "Permite mutar datos incluso cuando solo se dispone de una referencia inmutable (&T), desplazando las comprobaciones del Borrow Checker de tiempo de compilación a tiempo de ejecución (haciendo panic si se violan las reglas).",
      "Permite que dos hilos escriban en la misma posición de memoria sin locks.",
      "Convierte punteros nulos en valores por defecto de tipo Option::None."
    ],
    correctAnswerIndex: 1,
    explanation: "RefCell<T> aplica el patrón de mutabilidad interior en un solo hilo: ofrece 'borrow()' y 'borrow_mut()'. Si se intenta solicitar un préstamo mutable mientras existe otro préstamo activo, RefCell produce un panic en tiempo de ejecución.",
    topic: "Interior Mutability",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-06",
    collectionId: "rust",
    question: "¿Qué significan los marker traits 'Send' y 'Sync' en el modelo de concurrencia de Rust?",
    options: [
      "Send indica que el tipo puede enviarse por la red y Sync que puede sincronizarse con una base de datos.",
      "Send indica que la propiedad del tipo puede transferirse de forma segura entre hilos; Sync indica que es seguro compartir referencias inmutables (&T) al tipo entre múltiples hilos concurrentes (T es Sync si y solo si &T es Send).",
      "Send fuerza la serialización a formato JSON y Sync a protocolo Protobuf.",
      "Indican que el tipo no puede ser clonado bajo ninguna circunstancia."
    ],
    correctAnswerIndex: 1,
    explanation: "Send y Sync son la base de la 'concurrencia sin temor' en Rust. El compilador los implementa automáticamente: casi todos los tipos puros son Send/Sync a menos que contengan punteros crudos, Rc o RefCell.",
    topic: "Concurrencia",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-07",
    collectionId: "rust",
    question: "¿En qué orden se invocan los destructores 'Drop' de los campos dentro de un 'struct' de Rust?",
    options: [
      "En orden alfabético según el nombre de los campos.",
      "En el orden exacto en el que fueron declarados en el struct (de arriba hacia abajo).",
      "En orden inverso al de su declaración en el struct.",
      "De forma aleatoria dependiendo de la fragmentación del heap."
    ],
    correctAnswerIndex: 1,
    explanation: "En Rust, los campos de un struct se destruyen en el orden en que fueron declarados en la definición del tipo. Sin embargo, las variables locales en un bloque de función se destruyen en orden inverso al de su declaración (LIFO).",
    topic: "Ciclo de Vida y Drop",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-08",
    collectionId: "rust",
    question: "¿Qué superpoderes otorga un bloque 'unsafe' en Rust y qué cosas NO desactiva?",
    options: [
      "Desactiva el Borrow Checker y el tipado estático por completo.",
      "Permite desreferenciar punteros crudos, llamar funciones unsafe/FFI, implementar traits unsafe y mutar estáticos mutables; NO desactiva el Borrow Checker para referencias regulares ni las reglas de tipos del compilador.",
      "Permite ejecutar código sin que el procesador verifique límites de privilegios en el kernel.",
      "Evita que se produzcan excepciones de desbordamiento de enteros."
    ],
    correctAnswerIndex: 1,
    explanation: "Un bloque 'unsafe' solo desbloquea 5 operaciones específicas de bajo nivel (como desreferenciar punteros crudos o FFI). El Borrow Checker y todas las reglas de tipos normales de Rust continúan funcionando con rigor dentro del bloque unsafe.",
    topic: "Unsafe Rust",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-09",
    collectionId: "rust",
    question: "¿Cuál es el propósito de 'Pin<P>' y el marker trait 'Unpin' en Rust asíncrono?",
    options: [
      "Fijar el proceso en un núcleo de CPU dedicado para evitar cambios de contexto.",
      "Garantizar que el objeto en memoria al que apunta el puntero P no será movido de su dirección de memoria física, requisito indispensable para structs auto-referenciales generados por generadores async/await.",
      "Deshabilitar las optimizaciones del compilador en funciones criptográficas.",
      "Impedir que un hilo sea interrumpido por señales del sistema operativo."
    ],
    correctAnswerIndex: 1,
    explanation: "Las máquinas de estado async generan tipos auto-referenciales (punteros internos a sus propios campos). Si la estructura se moviera en memoria, esos punteros internos quedarían colgando. Pin garantiza que el objeto no se moverá a menos que implemente Unpin.",
    topic: "Async y Pinning",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-10",
    collectionId: "rust",
    question: "¿Qué diferencia existe entre los traits de closures 'Fn', 'FnMut' y 'FnOnce'?",
    options: [
      "Fn solo funciona con enteros, FnMut con floats y FnOnce con strings.",
      "FnOnce consume el closure capturando por valor (solo puede invocarse una vez); FnMut toma prestado el entorno mutablemente (puede invocarse múltiples veces y modificar estado capturado); Fn toma prestado el entorno inmutablemente.",
      "FnOnce se ejecuta en paralelo, FnMut en serie y Fn en tiempo de compilación.",
      "No existe diferencia; son sinónimos por razones históricas."
    ],
    correctAnswerIndex: 1,
    explanation: "La jerarquía es: Fn hereda de FnMut, que a su vez hereda de FnOnce. FnOnce puede tomar propiedad del entorno, FnMut puede mutarlo sin consumirlo, y Fn solo requiere acceso de lectura inmutable, permitiendo invocaciones concurrentes.",
    topic: "Closures y Funciones",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-11",
    collectionId: "rust",
    question: "¿Qué garantiza el modificador 'repr(C)' sobre un struct en Rust?",
    options: [
      "Que el struct se compilará con GCC en lugar de LLVM.",
      "Que el compilador organizará los campos en memoria siguiendo estrictamente las reglas de layout y alineación de la ABI estándar de C para interoperabilidad predecible vía FFI.",
      "Que los campos del struct no pueden contener más de 256 bytes.",
      "Que todos los campos se inicializarán automáticamente en NULL."
    ],
    correctAnswerIndex: 1,
    explanation: "Por defecto, Rust tiene 'repr(Rust)', donde el compilador puede reordenar campos libremente para optimizar espacio y padding. 'repr(C)' obliga al compilador a respetar el orden y alineación exactos de la convención de C.",
    topic: "FFI y Layout de Memoria",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-12",
    collectionId: "rust",
    question: "¿Qué es la 'Regla del Huérfano' (Orphan Rule) en la implementación de traits en Rust?",
    options: [
      "Un struct no puede heredar de más de dos traits si no tiene constructor.",
      "Para implementar un trait T para un tipo X, al menos uno de los dos (el trait T o el tipo X) debe haber sido definido en el crate local actual, impidiendo colisiones entre crates externos.",
      "Los módulos secundarios no pueden acceder a funciones del módulo raíz sin permiso del administrador.",
      "Los tipos sin destructor Drop son eliminados por el recolector de basura."
    ],
    correctAnswerIndex: 1,
    explanation: "La regla de coherencia u orphan rule garantiza que nunca existan dos implementaciones distintas del mismo trait para el mismo tipo en todo el grafo de dependencias de un programa (evitando ambigüedad en la resolución de métodos).",
    topic: "Traits y Coherencia",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-13",
    collectionId: "rust",
    question: "¿Qué es 'PhantomData<T>' en la biblioteca estándar de Rust?",
    options: [
      "Un puntero fantasma que accede a memoria virtual fuera del espacio del proceso.",
      "Un tipo de tamaño cero (ZST) que le comunica al compilador que un struct actúa lógicamente como si poseyera o referenciara un tipo T con un lifetime específico, aunque físicamente no almacene ningún campo de ese tipo.",
      "Un módulo para escribir pruebas unitarias con mocks automáticos.",
      "Una estructura para serializar datos invisibles al usuario final."
    ],
    correctAnswerIndex: 1,
    explanation: "PhantomData<T> consume 0 bytes en tiempo de ejecución pero informa al sistema de tipos y al análisis de lifetimes y varianzas sobre la relación semántica con T (ej. en punteros crudos o colecciones personalizadas de bajo nivel).",
    topic: "Zero-Sized Types y Avanzado",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-14",
    collectionId: "rust",
    question: "¿Qué ocurre internamente cuando un programa en Rust entra en 'panic!' con la estrategia por defecto 'unwind'?",
    options: [
      "El sistema operativo apaga la máquina inmediatamente.",
      "El runtime desenrolla la pila (stack unwinding), ejecutando los destructores Drop de todas las variables locales en cada frame de la llamada hasta ser atrapado por catch_unwind o finalizar el hilo.",
      "Envía un volcado de memoria a los servidores de la Fundación Rust.",
      "Transforma el error en un valor Result::Ok con campos vacíos."
    ],
    correctAnswerIndex: 1,
    explanation: "Con 'panic = unwind', Rust recorre la pila hacia atrás invocando el trait Drop de cada objeto para liberar recursos de forma limpia. Si se compila con 'panic = abort', el proceso termina inmediatamente con código de error sin desenrollar.",
    topic: "Manejo de Errores y Pánico",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-15",
    collectionId: "rust",
    question: "¿Cuál es la función del operador '?' en expresiones que retornan 'Result' u 'Option'?",
    options: [
      "Realiza una búsqueda difusa en la base de datos de errores.",
      "Si el valor es Ok/Some desempaqueta el valor interno; si es Err/None retorna inmediatamente de la función actual propagando el error (convirtiéndolo vía trait From si es necesario).",
      "Indica que el resultado es opcional y puede ser ignorado por el compilador.",
      "Evalúa la expresión en un hilo en segundo plano con baja prioridad."
    ],
    correctAnswerIndex: 1,
    explanation: "El operador '?' es azúcar sintáctico de alto rendimiento para propagación temprana de errores: desenvuelve el valor exitoso o ejecuta un 'return Err(From::from(e))' automático hacia el llamador.",
    topic: "Manejo de Errores",
    difficulty: "básico"
  },
  {
    id: "rust-q-16",
    collectionId: "rust",
    question: "¿Qué es la 'monomorfización' (monomorphization) al compilar código genérico en Rust?",
    options: [
      "La conversión de múltiples hilos en un único hilo secuencial.",
      "El proceso en el que el compilador genera una copia especializada de la función o struct genérico para cada tipo concreto con el que se instancie, logrando despacho estático y cero sobrecoste de abstracción a expensas de mayor tamaño del binario.",
      "La traducción de código Rust a instrucciones WebAssembly exclusivamente.",
      "La fusión de varios archivos fuente en una sola unidad de compilación."
    ],
    correctAnswerIndex: 1,
    explanation: "Al usar genéricos estáticos (fn foo<T: Trait>(x: T)), el compilador crea versiones especializadas en código máquina para cada T (ej. una para i32 y otra para String), permitiendo optimizaciones agressivas como inlining sin costo de vtable.",
    topic: "Compilación y Rendimiento",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-17",
    collectionId: "rust",
    question: "¿Cuál es la diferencia entre '&str' y 'String' en Rust?",
    options: [
      "String solo contiene caracteres ASCII y &str contiene caracteres UTF-16.",
      "String es un búfer mutable y redimensionable con propiedad de memoria en el heap (puntero, len, cap); &str es una vista no propietaria de longitud fija (fat pointer: puntero + longitud) a una secuencia válida de bytes UTF-8 en cualquier lugar de memoria.",
      "&str se almacena siempre en la memoria de la tarjeta de video.",
      "No hay diferencia; String es simplemente un alias de tipo para &str."
    ],
    correctAnswerIndex: 1,
    explanation: "String es dueño de la memoria que aloja en el heap y es dinámicamente extensible. &str (string slice) es solo una referencia prestada (un puntero y una longitud) que puede apuntar a un literal estático, una porción de String o la pila.",
    topic: "Cadenas y Tipos",
    difficulty: "básico"
  },
  {
    id: "rust-q-18",
    collectionId: "rust",
    question: "¿Por qué Rust utiliza por defecto el algoritmo SipHash 1-3 en 'std::collections::HashMap'?",
    options: [
      "Porque es el algoritmo de hash más rápido jamás inventado en la literatura académica.",
      "Para proporcionar protección criptográfica nativa contra ataques de denegación de servicio por colisiones de hash (HashDoS), priorizando seguridad de red sobre velocidad pura.",
      "Porque SipHash comprime las cadenas a la mitad de su tamaño antes de indexar.",
      "Porque es el único algoritmo compatible con la arquitectura x86."
    ],
    correctAnswerIndex: 1,
    explanation: "Para prevenir ataques HashDoS donde un atacante envía claves artesanales que colisionan forzando el HashMap a degradarse a complejidad O(N), Rust incluye SipHash por defecto con claves aleatorias por instancia, permitiendo sustituirlo con Hasher más rápidos si se requiere.",
    topic: "Estructuras de Datos y Seguridad",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-19",
    collectionId: "rust",
    question: "¿Qué es el 'Typestate Pattern' y cómo se implementa idiomáticamente en Rust?",
    options: [
      "Un patrón para definir estilos visuales en frameworks de interfaz gráfica.",
      "Un patrón de diseño donde los estados de una máquina de estados se codifican como tipos distintos en tiempo de compilación mediante genéricos y ZSTs, haciendo que transiciones inválidas no compilen.",
      "Un analizador sintáctico para interpretar expresiones regulares en runtime.",
      "Un formateador de código fuente integrado en cargo."
    ],
    correctAnswerIndex: 1,
    explanation: "El typestate pattern utiliza el sistema de tipos de Rust para garantizar correctitud de protocolos: métodos válidos solo existen en tipos que representan el estado actual (ej. Connection<Connected> vs Connection<Disconnected>), eliminando comprobaciones runtime.",
    topic: "Patrones Idiomáticos",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-20",
    collectionId: "rust",
    question: "¿Qué hace la herramienta 'Miri' en el ecosistema de desarrollo de Rust?",
    options: [
      "Es un framework para desarrollar microservicios web concurrentes.",
      "Es un intérprete de MIR (Mid-level Intermediate Representation) que ejecuta código Rust para detectar comportamiento indefinido (Undefined Behavior), violaciones del modelo de punteros Stacked Borrows/Tree Borrows y fugas de memoria.",
      "Es un generador de documentación API en formato HTML y PDF.",
      "Es un gestor de versiones del compilador alternativo a rustup."
    ],
    correctAnswerIndex: 1,
    explanation: "Miri ejecuta programas Rust a nivel de su representación intermedia MIR. Rastrea la procedencia de cada byte y puntero para detectar UB sutil en código unsafe: desalineación, accesos fuera de rango y violaciones del modelo de alias.",
    topic: "Tooling y Verificación",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-21",
    collectionId: "rust",
    question: "¿Cuál es la semántica del lifetime estático ''static' cuando se aplica a una referencia (&'static T) versus un límite de tipo (T: 'static)?",
    options: [
      "Son estrictamente idénticos y denotan que la variable reside en la memoria flash de la CPU.",
      "&'static T significa que el dato referenciado vive durante toda la ejecución del programa; T: 'static significa que el tipo T es capaz de vivir tanto como se desee (no contiene referencias con lifetimes no estáticos prestadas de un scope efímero).",
      "T: 'static indica que el tipo no puede tener métodos destructores Drop.",
      "&'static T obliga a que el valor sea una constante inmutable evaluada en tiempo de compilación."
    ],
    correctAnswerIndex: 1,
    explanation: "La distinción es vital: &'static str vive permanentemente en memoria de solo lectura. Sin embargo, un 'String' creado en el heap satisface el trait bound 'T: 'static' porque no contiene ninguna referencia prestada de corta vida, permitiendo moverlo a otros hilos.",
    topic: "Lifetimes y Bounds",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-22",
    collectionId: "rust",
    question: "¿Qué diferencia existe entre un 'macro_rules!' declarativo y un 'Procedural Macro' en Rust?",
    options: [
      "macro_rules! solo opera en archivos de prueba y las macros procedurales en código de producción.",
      "macro_rules! opera por coincidencia de patrones sintácticos con reglas de sustitución (declarativo); las macros procedurales son funciones de Rust que reciben un TokenStream de código fuente y retornan un nuevo TokenStream transformado programáticamente.",
      "Las macros procedurales se ejecutan en el navegador mediante WebAssembly.",
      "macro_rules! es interpretado en tiempo de ejecución mientras que las procedurales son estáticas."
    ],
    correctAnswerIndex: 1,
    explanation: "Las macros declarativas (macro_rules!) usan pattern-matching sobre tokens de sintaxis. Las macros procedurales (derive, attribute, function-like) son compiladores en miniatura escritos en Rust que manipulan el AST usando librerías como syn y quote.",
    topic: "Metaprogramación y Macros",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-23",
    collectionId: "rust",
    question: "¿Por qué no se debe implementar 'Deref' o 'DerefMut' para simular herencia orientada a objetos en Rust?",
    options: [
      "Porque el compilador prohíbe explícitamente definir más de un struct por módulo.",
      "Porque Deref está diseñado exclusivamente para punteros inteligentes (como Box, Rc, Arc); abusar de él confunde la resolución de métodos y oculta conversiones implícitas que violan la claridad del modelo de ownership.",
      "Porque Deref duplica el tamaño de los structs en memoria.",
      "Porque la implementación de Deref deshabilita las advertencias del linter clippy."
    ],
    correctAnswerIndex: 1,
    explanation: "El antipatrón 'Deref polymorphism' oculta qué tipos poseen realmente los métodos llamados y dificulta el razonamiento sobre mutabilidad y lifetimes. En Rust se debe preferir composición explícita o implementación de traits compartidos.",
    topic: "Diseño Idiomático",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-24",
    collectionId: "rust",
    question: "¿Cómo funciona el modelo de evaluación de iteradores en Rust ('lazy evaluation')?",
    options: [
      "Cada llamada a .map() genera inmediatamente un nuevo vector clonado en el heap.",
      "Los adaptadores de iteradores (como map, filter, take) no ejecutan ninguna computación al invocarse; la computación solo ocurre cuando un método consumidor (como collect, sum, for_each) exige avanzar el iterador mediante .next().",
      "Los iteradores se ejecutan de forma asíncrona en un hilo del sistema operativo.",
      "La iteración se posterga hasta que el programa realiza una llamada al sistema de I/O."
    ],
    correctAnswerIndex: 1,
    explanation: "Los iteradores en Rust son 'zero-cost abstractions' perezosas. Los adaptadores simplemente componen structs anidados; el bucle solo avanza cuando un consumidor llama a .next(), permitiendo al compilador fusionar bucles e inlinear el código.",
    topic: "Iteradores y Rendimiento",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-25",
    collectionId: "rust",
    question: "¿Qué efecto tiene la función 'std::mem::forget' sobre una variable en Rust?",
    options: [
      "Borra de forma segura los datos de la memoria RAM sobrescribiéndolos con ceros criptográficos.",
      "Toma posesión del objeto pero omite intencionalmente la ejecución de su destructor 'Drop', dejando sus recursos (memoria, descriptores) asignados sin liberar.",
      "Reinicia la variable a su valor predeterminado Default::default().",
      "Fuerza a que la variable sea recogida por el recolector de basura del sistema operativo."
    ],
    correctAnswerIndex: 1,
    explanation: "std::mem::forget desactiva la invocación del destructor Drop. Es seguro en el sentido de que no produce comportamiento indefinido inmediato (las fugas de memoria no son consideradas UB en Rust), y se utiliza en construcciones de bajo nivel como ManuallyDrop.",
    topic: "Gestión de Memoria de Bajo Nivel",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-26",
    collectionId: "rust",
    question: "¿Qué diferencia existe entre 'const fn' y una función ordinaria en Rust?",
    options: [
      "const fn solo puede invocarse desde hilos secundarios del procesador.",
      "const fn puede ser evaluada tanto en tiempo de compilación (si se invoca en contextos constantes como inicializadores de arrays o constantes estáticas) como en tiempo de ejecución ordinario.",
      "const fn no puede tener parámetros de entrada.",
      "const fn obliga a que el valor de retorno sea de tipo booleano."
    ],
    correctAnswerIndex: 1,
    explanation: "Una función marcada con 'const fn' impone un subconjunto restringido y determinista del lenguaje que permite al compilador ejecutarla en compilación para calcular valores de constantes estáticas, inicializar tipos o calcular tablas matemáticas fijas.",
    topic: "Compile-Time Rust",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-27",
    collectionId: "rust",
    question: "¿Qué ventaja ofrece el 'Newtype Pattern' (struct Wrapper(UnderlyingType)) en Rust?",
    options: [
      "Reduce el tiempo de descarga de dependencias en crates.io.",
      "Otorga seguridad de tipos en tiempo de compilación distinguiendo valores semánticamente dispares (ej. Kilómetros vs Millas) y permite esquivar la Regla del Huérfano para implementar traits externos sobre tipos externos con cero sobrecosto en runtime.",
      "Permite herencia múltiple de campos entre estructuras de datos.",
      "Transforma automáticamente funciones bloqueantes en asíncronas."
    ],
    correctAnswerIndex: 1,
    explanation: "El patrón newtype es una envoltura de tipo cero-coste: en tiempo de compilación es un tipo nominal completamente nuevo (impidiendo sumar accidentally Millas con Kilómetros), y al ser un tipo local permite implementar traits de terceros.",
    topic: "Patrones Idiomáticos",
    difficulty: "básico"
  },
  {
    id: "rust-q-28",
    collectionId: "rust",
    question: "¿Cuál es el propósito del trait 'AsRef<T>' frente a 'Borrow<T>' en la biblioteca estándar?",
    options: [
      "AsRef solo funciona con arrays numéricos y Borrow con cadenas de texto.",
      "AsRef<T> es para conversiones baratas y generalizadas a referencias de tipo T; Borrow<T> añade la estricta garantía semántica de que Hash, Eq y Ord del tipo prestado deben comportarse de forma idéntica al original (crucial para búsquedas en HashMaps).",
      "Borrow destruye la variable original tras la conversión.",
      "AsRef se ejecuta en tiempo de ejecución y Borrow en tiempo de compilación."
    ],
    correctAnswerIndex: 1,
    explanation: "Borrow impone una equivalencia de comportamiento para hashing y ordenamiento (vital para que HashMap pueda buscar una clave String usando &str sin asignar memoria). AsRef es simplemente una conversión idiomática genérica a referencia.",
    topic: "Traits de Conversión",
    difficulty: "avanzado"
  },
  {
    id: "rust-q-29",
    collectionId: "rust",
    question: "¿Por qué el uso de 'std::sync::Mutex' en Rust previene naturalmente condiciones de carrera en el acceso a datos compartidos?",
    options: [
      "Porque bloquea el reloj del procesador hasta que el hilo termina su función.",
      "Porque el Mutex es el dueño del dato protegido (Mutex<T>), obligando al hilo a adquirir un lock con '.lock()' que retorna un 'MutexGuard<T>', el cual implementa Deref para acceder al dato y libera automáticamente el lock cuando el guard sale de ámbito (RAII).",
      "Porque convierte todos los datos en variables inmutables de solo lectura.",
      "Porque delega la sincronización al servidor web en segundo plano."
    ],
    correctAnswerIndex: 1,
    explanation: "En otros lenguajes, un mutex es una entidad separada del dato que protege, permitiendo olvidar bloquearlo. En Rust, es imposible acceder al valor T sin llamar a lock() y obtener el MutexGuard, haciendo físicamente imposible leer o mutar T sin exclusión mutua.",
    topic: "Concurrencia Segura",
    difficulty: "intermedio"
  },
  {
    id: "rust-q-30",
    collectionId: "rust",
    question: "¿Cómo garantizan los tipos algebraicos (Enums) y el operador 'match' la ausencia de estados no controlados?",
    options: [
      "Rellenando automáticamente con valores nulos los casos no contemplados.",
      "Exigiendo verificación exhaustiva en tiempo de compilación: el compilador rechaza el programa si existe al menos una variante del enum no manejada explícitamente en el patrón match.",
      "Lanzando una advertencia opcional en el navegador web.",
      "Delegando la resolución de casos desconocidos al operador de bases de datos."
    ],
    correctAnswerIndex: 1,
    explanation: "El compilador de Rust exige exhaustividad: cada variante posible de un enum debe tener una rama correspondiente en la expresión match (o un comodín '_' consciente), garantizando matemáticamente que ningún caso quede sin manejar.",
    topic: "Pattern Matching y Enums",
    difficulty: "básico"
  }
];
