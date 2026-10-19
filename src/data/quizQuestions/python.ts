import type { QuizQuestion } from "@/data/quizTypes";

export const pythonQuestions: QuizQuestion[] = [
  {
    id: "py-q-01",
    collectionId: "python",
    question: "¿Cuál es el propósito del Global Interpreter Lock (GIL) en la implementación estándar CPython?",
    options: [
      "Evitar condiciones de carrera sincronizando el acceso a estructuras internas de CPython y conteo de referencias.",
      "Impedir que múltiples procesos del sistema operativo ejecuten scripts de Python simultáneamente.",
      "Optimizar el cálculo vectorial en librerías científicas compiladas como NumPy y PyTorch.",
      "Bloquear la ejecución de código no firmado descargado a través del gestor pip."
    ],
    correctAnswerIndex: 0,
    explanation: "El GIL es un mutex que protege la gestión de memoria de CPython (especialmente el conteo de referencias), garantizando que solo un hilo nativo ejecute bytecode de Python a la vez.",
    topic: "CPython & Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "py-q-02",
    collectionId: "python",
    question: "¿Cómo optimiza la directiva '__slots__' el uso de memoria en instancias de clases en Python?",
    options: [
      "Sustituye el diccionario dinámico '__dict__' de cada instancia por un array de punteros de tamaño fijo.",
      "Comprime los valores de los atributos utilizando el algoritmo Zstandard en tiempo de ejecución.",
      "Almacena las instancias directamente en la memoria caché L2 del procesador.",
      "Convierte la clase en una estructura inmutable de solo lectura en C."
    ],
    correctAnswerIndex: 0,
    explanation: "Por defecto, cada objeto en Python posee un diccionario __dict__ para atributos arbitrarios. Declarar __slots__ reserva espacio directo para un conjunto cerrado de atributos, ahorrando memoria masivamente.",
    topic: "Modelo de Objetos & Memoria",
    difficulty: "avanzado"
  },
  {
    id: "py-q-03",
    collectionId: "python",
    question: "¿Qué métodos componen el 'Descriptor Protocol' en el modelo de datos de Python?",
    options: [
      "__get__(), __set__() y __delete__()",
      "__enter__(), __exit__() y __close__()",
      "__iter__(), __next__() y __aiter__()",
      "__init__(), __new__() y __del__()"
    ],
    correctAnswerIndex: 0,
    explanation: "Un descriptor es un objeto que define al menos uno de los métodos __get__(), __set__() o __delete__(). Mecanismos como @property, classmethod y staticmethod se construyen sobre este protocolo.",
    topic: "Metaprogramación & Descriptores",
    difficulty: "avanzado"
  },
  {
    id: "py-q-04",
    collectionId: "python",
    question: "¿Cuál es la diferencia principal entre '__new__()' e '__init__()' en el ciclo de vida de un objeto?",
    options: [
      "'__new__()' es el constructor estático que crea y retorna la instancia física; '__init__()' es el inicializador de atributos.",
      "'__init__()' asigna memoria en el Heap de CPython; '__new__()' compila los métodos de la clase.",
      "'__new__()' solo se ejecuta en subclases que heredan de Exception; '__init__()' es universal.",
      "No existe diferencia; son sinónimos mantenidos por retrocompatibilidad con Python 2."
    ],
    correctAnswerIndex: 0,
    explanation: "__new__(cls) es el método que efectivamente instancia y reserva memoria para el objeto en el Heap de C, devolviendo la nueva instancia. Luego, __init__(self) se encarga de inicializar su estado.",
    topic: "Modelo de Objetos",
    difficulty: "intermedio"
  },
  {
    id: "py-q-05",
    collectionId: "python",
    question: "¿Qué ventaja introduce 'asyncio.TaskGroup' (introducido en Python 3.11) frente a 'asyncio.gather()'?",
    options: [
      "Manejo estructurado de concurrencia: si una tarea falla, cancela automáticamente las demás y agrupa errores en un ExceptionGroup.",
      "Permite ejecutar corrutinas en hilos nativos del kernel sin necesidad de un bucle de eventos.",
      "Multiplica por diez el rendimiento de las llamadas de red I/O mediante llamadas directas a epoll.",
      "Garantiza que las tareas se ejecuten estrictamente en orden secuencial sin paralelismo."
    ],
    correctAnswerIndex: 0,
    explanation: "TaskGroup implementa Structured Concurrency. Entra como context manager (async with asyncio.TaskGroup() as tg); si una tarea lanza una excepción, las tareas hijas pendientes se cancelan limpiamente y se propaga un ExceptionGroup.",
    topic: "Asincronía & Asyncio",
    difficulty: "avanzado"
  },
  {
    id: "py-q-06",
    collectionId: "python",
    question: "¿Cómo gestiona CPython la recolección de basura ante referencias circulares?",
    options: [
      "Utiliza un recolector cíclico generacional (Generations 0, 1 y 2) que rastrea grafos de punteros de objetos contenedores.",
      "Fuerza un error de recursión profunda ('RecursionError') y termina el intérprete de forma inmediata.",
      "Convierte automáticamente las referencias cíclicas en referencias débiles (weakref).",
      "Delega la recolección al recolector de basura de la máquina virtual de Java o del sistema operativo."
    ],
    correctAnswerIndex: 0,
    explanation: "CPython usa primariamente conteo de referencias (liberación inmediata en refcount = 0). Para referencias cíclicas donde el refcount nunca llega a cero, un recolector generacional (gc) analiza grafos aislados periódicamente.",
    topic: "Gestión de Memoria & GC",
    difficulty: "avanzado"
  },
  {
    id: "py-q-07",
    collectionId: "python",
    question: "¿Qué regla de resolución de ámbitos sigue Python para resolver el valor de una variable?",
    options: [
      "Regla LEGB: Local -> Enclosing -> Global -> Built-in",
      "Regla LIFO: Última variable declarada en memoria tiene prioridad absoluta",
      "Regla GLBE: Global -> Local -> Built-in -> Enclosing",
      "Regla BASH: Busca en el entorno de shell antes de evaluar variables internas"
    ],
    correctAnswerIndex: 0,
    explanation: "Python busca identificadores siguiendo el orden LEGB: primero en el ámbito local de la función, luego en funciones envolventes (closures), después en el módulo global, y finalmente en los built-ins nativos.",
    topic: "Ámbitos & Namespaces",
    difficulty: "básico"
  },
  {
    id: "py-q-08",
    collectionId: "python",
    question: "¿Para qué se utiliza la palabra clave 'nonlocal' en una función anidada?",
    options: [
      "Permite reasignar una variable definida en el ámbito envolvente más cercano que no sea global.",
      "Convierte la variable en un hilo secundario independiente del intérprete.",
      "Declara que la variable reside en una biblioteca dinámica compartida (.so o .dll).",
      "Impide que la variable sea modificada por closures posteriores marcándola como inmutable."
    ],
    correctAnswerIndex: 0,
    explanation: "Por defecto, asignar a una variable dentro de una función crea una variable local. 'nonlocal' indica que la asignación debe modificar la variable del ámbito envolvente (enclosing) de la closure externa.",
    topic: "Ámbitos & Closures",
    difficulty: "intermedio"
  },
  {
    id: "py-q-09",
    collectionId: "python",
    question: "¿Cuál es la función del decorador '@functools.wraps(fn)' al construir un decorador personalizado?",
    options: [
      "Preserva los metadatos de la función original como '__name__', '__doc__' y '__annotations__' en la función wrapper.",
      "Bloquea la función para que no pueda ser invocada por más de un hilo simultáneamente.",
      "Convierte automáticamente funciones síncronas en corrutinas asíncronas de asyncio.",
      "Compila la función con optimizaciones numéricas mediante LLVM antes de su llamada."
    ],
    correctAnswerIndex: 0,
    explanation: "Al reemplazar una función por un wrapper, los atributos introspectivos (__name__, __doc__, __module__) se perderían. @functools.wraps copia estos metadatos manteniendo intacta la introspección y documentación.",
    topic: "Decoradores & Metaprogramación",
    difficulty: "básico"
  },
  {
    id: "py-q-10",
    collectionId: "python",
    question: "¿Qué define el 'Method Resolution Order' (MRO) en Python y qué algoritmo utiliza?",
    options: [
      "El orden de búsqueda de atributos en herencia múltiple, calculado mediante el algoritmo C3 Linearization.",
      "El orden cronológico en que los métodos son compilados por el optimizador peephole.",
      "La prioridad con la que las excepciones son capturadas en bloques 'try...except'.",
      "Un algoritmo de ordenación por burbuja aplicado sobre las funciones de un módulo."
    ],
    correctAnswerIndex: 0,
    explanation: "El MRO determina cómo se buscan métodos en jerarquías con herencia múltiple. Desde Python 2.3 se utiliza el algoritmo C3 Linearization, que garantiza monotonicidad y consistencia de orden local.",
    topic: "Herencia & MRO",
    difficulty: "avanzado"
  },
  {
    id: "py-q-11",
    collectionId: "python",
    question: "¿Cuál es el propósito del método de clase '__init_subclass__' introducido en Python 3.6?",
    options: [
      "Permite a una clase base personalizar y validar la creación de sus subclases sin necesidad de escribir una metaclase compleja.",
      "Fuerza a que todas las subclases inicialicen sus propiedades antes de compilar el módulo.",
      "Genera automáticamente la documentación de las subclases en formato Markdown.",
      "Impide que otras clases puedan heredar de la clase base convirtiéndola en una clase 'final'."
    ],
    correctAnswerIndex: 0,
    explanation: "__init_subclass__ es un gancho simplificado que se ejecuta cada vez que una nueva subclase se define, permitiendo registrar subclases, validar atributos o inyectar lógica sin el sobrecoste de una metaclase completa.",
    topic: "Metaprogramación & Clases",
    difficulty: "avanzado"
  },
  {
    id: "py-q-12",
    collectionId: "python",
    question: "¿Qué efecto tiene utilizar 'yield from iterable' dentro de una función generadora?",
    options: [
      "Delega la generación y canaliza bidireccionalmente valores, excepciones y retornos entre el llamador y el subgenerador.",
      "Cierra de forma irreversible el generador liberando sus variables de la pila.",
      "Transforma el iterable en un archivo temporal en disco para evitar sobrecargar la memoria.",
      "Convierte el generador en una función pura que no mantiene estado interno."
    ],
    correctAnswerIndex: 0,
    explanation: "'yield from' no solo emite elementos de un iterable, sino que abre un canal bidireccional transparente que reenvía llamadas a .send() y .throw() directamente al subgenerador subyacente.",
    topic: "Generadores & Corrutinas",
    difficulty: "intermedio"
  },
  {
    id: "py-q-13",
    collectionId: "python",
    question: "¿Qué diferencia existe entre '__repr__()' y '__str__()' en el modelo de objetos de Python?",
    options: [
      "'__repr__()' busca una representación inequívoca para desarrolladores (idealmente código ejecutable); '__str__()' es legible para el usuario final.",
      "'__repr__()' se utiliza únicamente para serialización binaria; '__str__()' para salida por consola.",
      "'__str__()' es obligatorio en todas las clases; '__repr__()' solo se utiliza en decoradores.",
      "No existe diferencia; si ambos se definen, Python selecciona uno al azar."
    ],
    correctAnswerIndex: 0,
    explanation: "La convención de Python establece que __repr__ debe ser explícito y detallado (facilitando depuración o incluso eval(repr(obj)) == obj), mientras que __str__ está pensado para una lectura amigable en interfaces y logs.",
    topic: "Modelo de Objetos",
    difficulty: "básico"
  },
  {
    id: "py-q-14",
    collectionId: "python",
    question: "¿Cómo funciona un 'Context Manager' implementado mediante la sentencia 'with'?",
    options: [
      "Ejecuta '__enter__()' al ingresar al bloque y garantiza la ejecución de '__exit__()' al salir, incluso ante excepciones.",
      "Crea un hilo aislado del sistema operativo que se destruye al finalizar el bloque.",
      "Suspende la ejecución del recolector de basura durante todo el bloque de código.",
      "Registra una transacción ACID en el sistema de archivos del sistema operativo."
    ],
    correctAnswerIndex: 0,
    explanation: "El protocolo de context managers llama a __enter__() al inicio. Al terminar el bloque (sea con éxito o por excepción), se invoca __exit__(exc_type, exc_val, exc_tb), asegurando la liberación de recursos.",
    topic: "Context Managers",
    difficulty: "básico"
  },
  {
    id: "py-q-15",
    collectionId: "python",
    question: "¿Qué es el 'Duck Typing' y cómo se promueve en Python según el principio EAFP?",
    options: [
      "'Easier to Ask for Forgiveness than Permission': asumir que el objeto tiene los métodos necesarios y capturar excepciones si falla.",
      "Comprobar exhaustivamente los tipos de todas las variables con 'isinstance()' antes de cualquier operación.",
      "Prohibir que los métodos acepten más de dos tipos de argumentos distintos.",
      "Compilar el código fuente a archivos estáticos .pyc antes de ejecutar comprobaciones de tipos."
    ],
    correctAnswerIndex: 0,
    explanation: "EAFP ('Es más fácil pedir perdón que permiso') promueve intentar la operación directamente y manejar las excepciones correspondientes (ej. AttributeError o KeyError), en lugar de verificaciones previas intensivas (LBYL).",
    topic: "Filosofía & Diseño en Python",
    difficulty: "básico"
  },
  {
    id: "py-q-16",
    collectionId: "python",
    question: "¿Cuál es la función de 'typing.Protocol' (PEP 544) en el sistema de tipos de Python?",
    options: [
      "Permite tipado estructural (duck typing estático): una clase satisface el Protocol si implementa sus métodos, sin herencia explícita.",
      "Define las reglas de encriptación TLS utilizadas por las conexiones HTTP de urllib.",
      "Obliga a que las clases hereden de una clase base abstracta de forma nominal obligatoria.",
      "Es una interfaz que optimiza la serialización de datos hacia sockets Unix."
    ],
    correctAnswerIndex: 0,
    explanation: "typing.Protocol habilita el tipado estructural estático. Si una clase define los atributos y métodos requeridos por el Protocol, type checkers como mypy o pyright la aceptan sin necesidad de subclasear explícitamente.",
    topic: "Type Annotations & Tipado Estático",
    difficulty: "intermedio"
  },
  {
    id: "py-q-17",
    collectionId: "python",
    question: "¿Qué peligro presenta utilizar objetos mutables (como listas o diccionarios) como argumentos por defecto en funciones?",
    options: [
      "El valor por defecto se evalúa una sola vez al cargar la función, compartiéndose la misma instancia mutable entre todas las llamadas.",
      "Provoca un fallo de segmentación (Segmentation Fault) en CPython al tercer intento de mutación.",
      "Inhabilita el recolector de basura para todos los argumentos de la función.",
      "Obliga a que la función deba llamarse obligatoriamente con argumentos nombrados (kwargs)."
    ],
    correctAnswerIndex: 0,
    explanation: "Las expresiones de argumentos por defecto se evalúan cuando la función se define, no cuando se invoca. Si se usa una lista 'def fn(x=[])', cualquier mutación dentro de la función persistirá en llamadas futuras.",
    topic: "Funciones & Trampas Comunes",
    difficulty: "básico"
  },
  {
    id: "py-q-18",
    collectionId: "python",
    question: "¿Qué módulo de la biblioteca estándar permite inspeccionar el bytecode generado por CPython para una función?",
    options: [
      "dis (disassembler)",
      "sys (system inspector)",
      "ast (abstract syntax tree)",
      "types (typing module)"
    ],
    correctAnswerIndex: 0,
    explanation: "El módulo 'dis' analiza y desensambla código de Python en instrucciones de bytecode de CPython (ej. LOAD_FAST, BINARY_OP, RETURN_VALUE), permitiendo auditar el funcionamiento interno del intérprete.",
    topic: "Bytecode & Compilación Interna",
    difficulty: "intermedio"
  },
  {
    id: "py-q-19",
    collectionId: "python",
    question: "¿Qué es una 'Metaclase' en Python y de cuál hereda 'type' por defecto?",
    options: [
      "Una clase cuya instancia es otra clase; en Python, la metaclase por defecto es 'type'.",
      "Una función decoradora que transforma métodos en generadores de corrutinas.",
      "Una estructura de datos que reside en el núcleo del sistema operativo.",
      "Un archivo especial .pyi que contiene anotaciones de tipo para CPython."
    ],
    correctAnswerIndex: 0,
    explanation: "En Python, las clases son objetos y se crean a partir de una metaclase. 'type' es la metaclase universal por defecto que construye todas las clases estándar en tiempo de ejecución.",
    topic: "Metaprogramación & Metaclases",
    difficulty: "avanzado"
  },
  {
    id: "py-q-20",
    collectionId: "python",
    question: "¿Cómo opera el desempaquetado extendido (extended unpacking) con el operador '*'?",
    options: [
      "Captura el remanente de elementos no asignados en una lista (ej: 'head, *tail = items').",
      "Multiplica los valores de la tupla por el número de variables en el lado izquierdo.",
      "Fuerza a que todos los elementos sean convertidos a cadenas UTF-8.",
      "Genera una copia profunda inmutable del iterable original."
    ],
    correctAnswerIndex: 0,
    explanation: "El operador estrella en asignaciones múltiples (*tail) captura todos los elementos restantes que no coincidan con las variables fijas posicionales, empaquetándolos automáticamente en una lista.",
    topic: "Sintaxis & Operadores",
    difficulty: "básico"
  },
  {
    id: "py-q-21",
    collectionId: "python",
    question: "¿Qué garantía ofrece 'dataclasses.dataclass(frozen=True)' sobre las instancias generadas?",
    options: [
      "Impide la reasignación o adición de atributos lanzando FrozenInstanceError y genera un método '__hash__' válido.",
      "Cifra los campos del objeto en memoria para prevenir ataques de lectura no autorizada.",
      "Convierte la clase en una extensión nativa en lenguaje C compilada dinámicamente.",
      "Obliga a que todos los atributos sean strings o tuplas inmutables."
    ],
    correctAnswerIndex: 0,
    explanation: "'frozen=True' intercepta las asignaciones (__setattr__ y __delattr__) arrojando FrozenInstanceError. Al ser inmutable, genera automáticamente un __hash__() que permite usar la instancia en sets o como clave de diccionarios.",
    topic: "Data Classes & Inmutabilidad",
    difficulty: "intermedio"
  },
  {
    id: "py-q-22",
    collectionId: "python",
    question: "¿Qué diferencia existe entre 'concurrent.futures.ThreadPoolExecutor' y 'ProcessPoolExecutor'?",
    options: [
      "ThreadPoolExecutor comparte memoria y está limitado por el GIL para tareas CPU-bound; ProcessPoolExecutor usa procesos aislados con memoria propia.",
      "ProcessPoolExecutor solo funciona en sistemas operativos Unix/Linux; ThreadPoolExecutor solo en Windows.",
      "ThreadPoolExecutor requiere que los datos sean serializables con pickle; ProcessPoolExecutor no.",
      "ProcessPoolExecutor no admite el envío de funciones lambda o asíncronas."
    ],
    correctAnswerIndex: 0,
    explanation: "ThreadPoolExecutor utiliza hilos del SO que comparten el espacio de memoria del proceso (ideal para I/O-bound). ProcessPoolExecutor crea procesos independientes que eluden el GIL para paralelismo real en múltiples núcleos de CPU.",
    topic: "Concurrencia & Paralelismo",
    difficulty: "intermedio"
  },
  {
    id: "py-q-23",
    collectionId: "python",
    question: "¿Cuál es el rol de '__getitem__' y '__setitem__' en una clase personalizada?",
    options: [
      "Implementar la sintaxis de indexación por corchetes (ej: obj[key] y obj[key] = value).",
      "Definir el orden de serialización de atributos en formato JSON.",
      "Determinar qué propiedades pueden ser leídas a través del operador punto.",
      "Controlar la cantidad máxima de elementos que pueden ser insertados en una lista."
    ],
    correctAnswerIndex: 0,
    explanation: "__getitem__(self, key) y __setitem__(self, key, value) permiten que cualquier clase emule el comportamiento de secuencias (listas/tuplas) o mapeos (diccionarios) mediante la notación de corchetes.",
    topic: "Modelo de Objetos",
    difficulty: "básico"
  },
  {
    id: "py-q-24",
    collectionId: "python",
    question: "¿Qué es el 'walrus operator' (:=) introducido en Python 3.8?",
    options: [
      "El operador de expresión de asignación: permite asignar un valor a una variable dentro de una expresión.",
      "Un operador de comparación que verifica igualdad estricta de punteros en memoria.",
      "Un operador de concatenación asíncrona para generadores de flujos de datos.",
      "Un modificador que marca variables como protegidas ante sobreescritura externa."
    ],
    correctAnswerIndex: 0,
    explanation: "El operador de morsa (:=) asigna valores a variables como parte de una expresión más grande (por ejemplo: if (n := len(items)) > 10: print(n)), evitando cálculos redundantes.",
    topic: "Sintaxis & Operadores Modernos",
    difficulty: "básico"
  },
  {
    id: "py-q-25",
    collectionId: "python",
    question: "¿Qué función cumple el módulo 'weakref' en Python?",
    options: [
      "Crear referencias débiles a objetos sin incrementar su contador de referencias, permitiendo al GC recolectarlos.",
      "Reducir la precisión de números de coma flotante para acelerar operaciones matemáticas.",
      "Eliminar variables globales de forma forzada cuando la memoria RAM supera el 90%.",
      "Crear copias superficiales de objetos grandes sin duplicar arrays internos."
    ],
    correctAnswerIndex: 0,
    explanation: "Un weakref.ref(obj) permite acceder a un objeto mientras esté vivo, pero no impide que su refcount llegue a cero y sea destruido, ideal para cachés o grafos circulares.",
    topic: "Gestión de Memoria",
    difficulty: "avanzado"
  },
  {
    id: "py-q-26",
    collectionId: "python",
    question: "¿Cuál es la función del método '__call__' en una instancia de clase?",
    options: [
      "Permite que la instancia del objeto pueda ser invocada directamente como si fuera una función (ej: obj()).",
      "Llama al recolector de basura para validar que la instancia sea serializable.",
      "Invoca el constructor de la clase base sin requerir la palabra clave super().",
      "Registra la instancia en la tabla de procesos activos del sistema operativo."
    ],
    correctAnswerIndex: 0,
    explanation: "Al definir __call__(self, *args, **kwargs), las instancias de la clase se vuelven 'callables', permitiendo crear closures orientadas a objetos, decoradores basados en clases o factorías de estado.",
    topic: "Modelo de Objetos",
    difficulty: "básico"
  },
  {
    id: "py-q-27",
    collectionId: "python",
    question: "¿Qué ocurre cuando una función generadora llega a una sentencia 'return value' en Python 3.3+?",
    options: [
      "Lanza 'StopIteration' adjuntando 'value' en el atributo 'value' de la excepción.",
      "Descarta silenciosamente el valor devuelto ya que los generadores solo admiten yield.",
      "Convierte el generador en una corrutina asíncrona que emite un evento al bucle de eventos.",
      "Imprime el valor en la salida estándar de errores (stderr) como mensaje de diagnóstico."
    ],
    correctAnswerIndex: 0,
    explanation: "En generadores, 'return x' finaliza la iteración lanzando StopIteration(x). Cuando el generador se consume con 'val = yield from subgen()', la variable 'val' recibe el valor retornado por el subgenerador.",
    topic: "Generadores & Corrutinas",
    difficulty: "avanzado"
  },
  {
    id: "py-q-28",
    collectionId: "python",
    question: "¿Qué optimización realiza el compilador de CPython sobre cadenas pequeñas y enteros (-5 a 256)?",
    options: [
      "Interning (internamiento): reutiliza las mismas instancias fijas singleton en memoria (is devuelve True).",
      "Compresión LZ4 en tiempo de carga para reducir el tamaño del ejecutable.",
      "Conversión a enteros de 16 bits sin signo en registros del microprocesador.",
      "Asignación en la pila de llamadas (Stack) en lugar del montículo (Heap)."
    ],
    correctAnswerIndex: 0,
    explanation: "CPython pre-crea y mantiene una tabla de singletons para enteros en el rango [-5, 256] y aplica string interning para identificadores. De este modo, múltiples referencias a 42 o 'abc' apuntan al mismo bloque de memoria.",
    topic: "CPython Internals & Optimización",
    difficulty: "intermedio"
  },
  {
    id: "py-q-29",
    collectionId: "python",
    question: "¿Cómo resuelve Python las anotaciones de tipo con referencias circulares o forward references?",
    options: [
      "Usando 'from __future__ import annotations' (PEP 563) para almacenar las anotaciones como cadenas diferidas evaluadas en tiempo de análisis.",
      "Declarando las clases dentro de un bloque try...except circular.",
      "Reemplazando las anotaciones con comentarios '# type: ignore' en cada línea afectada.",
      "Compilando los módulos con una bandera especial '--forward-refs' de mypy."
    ],
    correctAnswerIndex: 0,
    explanation: "Con 'from __future__ import annotations', el compilador no evalúa las expresiones de tipo al definir la clase, sino que las almacena como cadenas de texto simples, permitiendo referenciar clases antes de su definición o en ciclos.",
    topic: "Type Annotations & PEPs",
    difficulty: "intermedio"
  },
  {
    id: "py-q-30",
    collectionId: "python",
    question: "¿Qué define la propuesta PEP 703 implementada experimentalmente en Python 3.13?",
    options: [
      "La opción de compilar CPython sin el Global Interpreter Lock (Free-threaded Python) para paralelismo real multinúcleo en hilos.",
      "La deprecación total de los tipos de datos mutables en la biblioteca estándar.",
      "La adopción obligatoria del compilador Rust para los módulos internos de CPython.",
      "Un protocolo de empaquetado que sustituye pip y wheel por formatos binarios propietarios."
    ],
    correctAnswerIndex: 0,
    explanation: "PEP 703 ('Making the Global Interpreter Lock Optional in CPython') introduce el soporte para compilar CPython en modo 'free-threaded' sin GIL, reemplazando el lock global con mecanismos de bloqueo granular y conteo de referencias atómico.",
    topic: "Evolución del Lenguaje & PEPs",
    difficulty: "avanzado"
  }
];
