import type { QuizQuestion } from "@/data/quizTypes";

export const cppQuestions: QuizQuestion[] = [
  {
    id: "cpp-q-01",
    collectionId: "cpp",
    question: "¿Cuál es el principio fundamental detrás del patrón RAII (Resource Acquisition Is Initialization) en C++?",
    options: [
      "La memoria debe inicializarse siempre en 0 mediante memset en el constructor.",
      "La adquisición de recursos se ata al tiempo de vida de un objeto, liberándose automáticamente en su destructor cuando sale de ámbito.",
      "Los recursos deben registrarse en un Garbage Collector central al momento de instanciar la clase.",
      "Las variables solo pueden inicializarse mediante listas de inicialización en el encabezado de la función."
    ],
    correctAnswerIndex: 1,
    explanation: "RAII vincula el ciclo de vida de recursos críticos (memoria, handles de archivos, sockets, mutexes) a objetos con almacenamiento automático; cuando el objeto sale de ámbito (incluso por una excepción), su destructor se invoca garantizando liberación determinista sin fugas.",
    topic: "RAII y Memoria",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-02",
    collectionId: "cpp",
    question: "¿Por qué es crucial declarar el destructor como 'virtual' en una clase base diseñada para polimorfismo?",
    options: [
      "Para que el compilador permita la sobrecarga de métodos protegidos en las clases derivadas.",
      "Para obligar a que la clase base sea abstracta pura y no se pueda instanciar directamente.",
      "Para evitar comportamiento indefinido al destruir un objeto derivado a través de un puntero a la clase base, asegurando la invocación de la jerarquía completa de destructores.",
      "Porque sin destructor virtual la clase base ocupa el doble de memoria en la tabla de vptr."
    ],
    correctAnswerIndex: 2,
    explanation: "Si se invoca 'delete basePtr' donde basePtr apunta a un objeto derivado y el destructor de Base no es virtual, la llamada no se despacha polimórficamente, provocando comportamiento indefinido y omisión de los destructores de las clases derivadas.",
    topic: "Polimorfismo",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-03",
    collectionId: "cpp",
    question: "¿Qué diferencia fundamental existe entre 'std::unique_ptr' y 'std::shared_ptr'?",
    options: [
      "std::unique_ptr no admite arreglos continuos mientras que std::shared_ptr sí.",
      "std::unique_ptr modela propiedad exclusiva (movible pero no copiable) con cero overhead frente a puntero crudo, mientras que std::shared_ptr mantiene un bloque de control con conteo de referencias atómico.",
      "std::shared_ptr es seguro contra referencias cíclicas sin requerir ningún tipo auxiliar.",
      "std::unique_ptr solo puede usarse en tiempo de compilación con funciones constexpr."
    ],
    correctAnswerIndex: 1,
    explanation: "std::unique_ptr tiene semántica de propiedad única: su costo de abstracción es nulo (tamaño idéntico a un puntero crudo con default deleter). std::shared_ptr implementa propiedad compartida administrando un bloque de control heap con contadores de referencias atómicos.",
    topic: "Smart Pointers",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-04",
    collectionId: "cpp",
    question: "¿Qué problema resuelve 'std::weak_ptr' al utilizarse en conjunto con 'std::shared_ptr'?",
    options: [
      "Acelera las operaciones de clonado profundo eliminando bloqueos de mutex.",
      "Rompe ciclos de referencias circulares que causarían fugas de memoria al impedir que el contador de referencias llegue a cero.",
      "Permite transferir la propiedad exclusiva a un puntero único sin invalidar el bloque de control.",
      "Convierte referencias inválidas en excepciones de tipo std::bad_alloc de forma automática."
    ],
    correctAnswerIndex: 1,
    explanation: "Si dos objetos se referencian mutuamente mediante std::shared_ptr, sus contadores nunca llegarán a cero produciendo un leak permanente. std::weak_ptr mantiene una referencia no-propietaria, permitiendo liberar el recurso al llegar el conteo fuerte a 0.",
    topic: "Smart Pointers",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-05",
    collectionId: "cpp",
    question: "¿Qué hace exactamente la función de utilidad 'std::move' en la cabecera <utility>?",
    options: [
      "Copia físicamente los bytes del objeto origen a una nueva dirección y limpia la memoria origen.",
      "Ejecuta una llamada asíncrona al garbage collector del runtime.",
      "Realiza un cast incondicional de su argumento a una referencia rvalue (T&&), habilitando semántica de movimiento.",
      "Invalida inmediatamente el puntero y destruye el objeto subyacente en el acto."
    ],
    correctAnswerIndex: 2,
    explanation: "std::move no 'mueve' nada en tiempo de ejecución. Es simplemente un cast a referencia rvalue (static_cast<T&&>) que permite al compilador seleccionar el constructor o asignador por movimiento en lugar de copiar.",
    topic: "Move Semantics",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-06",
    collectionId: "cpp",
    question: "¿Qué establece la 'Regla de los Cinco' (Rule of Five) en C++ moderno?",
    options: [
      "Si una clase tiene 5 campos miembros, debe estructurarse obligatoriamente como una tupla.",
      "Si una clase define explícitamente destructor, copy constructor o copy assignment, usualmente necesita definir también move constructor y move assignment.",
      "Cada clase no debe heredar de más de 5 interfaces para preservar el principio de segregación.",
      "Las funciones inline no pueden contener más de cinco líneas de código compilable."
    ],
    correctAnswerIndex: 1,
    explanation: "La Rule of Five postula que si una clase gestiona manualmente un recurso y declara un destructor, constructor de copia o asignación de copia, probablemente debe implementar o declarar explícitamente los 5 miembros especiales para un comportamiento coherente.",
    topic: "Diseño de Clases",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-07",
    collectionId: "cpp",
    question: "¿Cuál es la ventaja de preferir 'std::make_shared<T>(args...)' sobre 'std::shared_ptr<T>(new T(args...))'?",
    options: [
      "Garantiza que el tipo T sea copiable en tiempo de ejecución.",
      "Realiza una única asignación contigua en el heap para el bloque de control y el objeto T, reduciendo fragmentación y mejorando localidad de caché.",
      "Permite especificar un deleter personalizado sin costo de memoria adicional.",
      "Permite que el weak count sea siempre cero independientemente de los observadores."
    ],
    correctAnswerIndex: 1,
    explanation: "std::make_shared realiza una sola asignación de memoria que aloja juntos el bloque de control y la instancia del objeto T, reduciendo overhead de asignador y mejorando localidad de caché, además de brindar seguridad ante excepciones.",
    topic: "Smart Pointers",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-08",
    collectionId: "cpp",
    question: "¿Qué es 'std::forward' y en qué contexto es fundamental su uso?",
    options: [
      "Es un iterador unidireccional que avanza sobre listas enlazadas en tiempo constante.",
      "Se utiliza en plantillas con referencias universales (forwarding references T&&) para preservar la categoría de valor original (lvalue o rvalue) del argumento (perfect forwarding).",
      "Reordena los argumentos de una función para cumplir con la convención de llamada de la arquitectura x86_64.",
      "Permite invocar métodos privados desde funciones amigas de manera diferida."
    ],
    correctAnswerIndex: 1,
    explanation: "std::forward<T>(arg) permite el reenvío perfecto (perfect forwarding): si el argumento original recibido en la plantilla era un rvalue se reenvía como rvalue, y si era un lvalue se preserva como lvalue sin copias superfluas.",
    topic: "Templates y Metaprogramación",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-09",
    collectionId: "cpp",
    question: "¿Cuál es la diferencia entre 'constexpr' y 'consteval' introducida en C++20?",
    options: [
      "constexpr evalúa solo en tiempo de ejecución, mientras que consteval evalúa solo en tiempo de linkeo.",
      "constexpr indica que una función PUEDE ser evaluada en compilación o ejecución, mientras que consteval OBLIGA a que la función se evalúe estrictamente en tiempo de compilación (immediate function).",
      "consteval solo es aplicable a punteros crudos y constexpr solo a tipos escalares.",
      "constexpr genera código ensamblador más grande porque duplica la tabla de símbolos."
    ],
    correctAnswerIndex: 1,
    explanation: "Una función constexpr puede ejecutarse en compilación o ejecución dependiendo del contexto. Una función consteval (función inmediata) debe resolverse estrictamente en tiempo de compilación; si no es posible, la compilación falla con error.",
    topic: "Compile-Time Programming",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-10",
    collectionId: "cpp",
    question: "¿Qué ventaja ofrece 'if constexpr' (C++17) sobre los condicionales 'if' tradicionales en plantillas?",
    options: [
      "Ejecuta ambas ramas en hilos separados en tiempo de ejecución.",
      "Descarta la rama no tomada durante la compilación, permitiendo que ramas descartadas contengan código que no sería sintácticamente válido para el tipo evaluado.",
      "Convierte variables de entorno del sistema operativo en constantes del preprocesador.",
      "Elimina la necesidad de utilizar funciones template en el código de aplicación."
    ],
    correctAnswerIndex: 1,
    explanation: "'if constexpr' evalúa la condición en tiempo de compilación y no genera código para la rama descartada, simplificando radicalmente el metaprogramming al reemplazar patrones engorrosos de SFINAE con sintaxis condicional estándar.",
    topic: "Templates y Metaprogramación",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-11",
    collectionId: "cpp",
    question: "¿Qué son los 'Concepts' (conceptos) introducidos en C++20?",
    options: [
      "Anotaciones de runtime para introspección y reflexión dinámica de clases.",
      "Predicados evaluados en tiempo de compilación que restringen los parámetros de plantillas, produciendo diagnósticos claros y sobrecargas más limpias.",
      "Punteros inteligentes diseñados para comunicarse con sistemas distribuidos.",
      "Módulos binarios que reemplazan las bibliotecas dinámicas .so y .dll."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Concepts definen requisitos semánticos y de tipos que deben satisfacer los argumentos de plantillas. Al fallar una restricción, el compilador genera un diagnóstico claro y directo en lugar de las extensas cascadas de errores crípticos de SFINAE.",
    topic: "C++20 Concepts",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-12",
    collectionId: "cpp",
    question: "¿Qué representa la 'vtable' (tabla virtual) y cuál es su costo en una clase con funciones virtuales?",
    options: [
      "Una lista de todas las variables locales creada en la pila de ejecución.",
      "Una tabla estática de punteros a funciones por clase que habilita el despacho dinámico; cada objeto almacena un puntero oculto (vptr) que incrementa su tamaño.",
      "Un mapa hash en memoria compartida que indexa todas las clases derivadas del binario.",
      "Una estructura de preprocesador que elimina código muerto antes de la optimización del linker."
    ],
    correctAnswerIndex: 1,
    explanation: "El polimorfismo dinámico en C++ se implementa habitualmente mediante una vtable por clase y un vptr por instancia (incrementando el tamaño del objeto en el tamaño de un puntero: 8 bytes en 64 bits), lo que introduce una indirección adicional al invocar métodos virtuales.",
    topic: "Polimorfismo",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-13",
    collectionId: "cpp",
    question: "¿Cuándo se invalidan los iteradores y referencias a elementos dentro de un 'std::vector'?",
    options: [
      "Únicamente cuando se llama al destructor del vector.",
      "Cuando se produce una realocación de capacidad al exceder 'capacity()', o al insertar/eliminar elementos antes del punto de referencia.",
      "Los iteradores de std::vector nunca se invalidan gracias a su almacenamiento enlazado.",
      "Solo cuando se ordena el vector mediante std::sort con un comparador descendente."
    ],
    correctAnswerIndex: 1,
    explanation: "Si una inserción requiere incrementar el tamaño más allá de capacity(), std::vector asigna un nuevo bloque en el heap, mueve los elementos existentes y destruye el bloque anterior, invalidando todos los punteros, referencias e iteradores existentes.",
    topic: "STL Containers",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-14",
    collectionId: "cpp",
    question: "¿Qué riesgo particular presenta el uso descuidado de 'std::string_view'?",
    options: [
      "Duplica la memoria consumida por cada cadena referenciada en el heap.",
      "Puede producir referencias colgantes (dangling pointers) si la cadena original subyacente es destruida mientras el string_view sigue activo.",
      "No puede utilizarse con funciones constexpr en tiempo de compilación.",
      "Fuerza a que toda cadena contenga obligatoriamente un byte nulo final '\\0' en una posición contigua."
    ],
    correctAnswerIndex: 1,
    explanation: "std::string_view es una vista no propietaria (puntero + longitud). Si se inicializa desde una cadena temporal, el objeto temporal se destruye al final de la expresión dejando al string_view apuntando a memoria liberada.",
    topic: "STL y Memoria",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-15",
    collectionId: "cpp",
    question: "¿En qué consiste la técnica CRTP (Curiously Recurring Template Pattern)?",
    options: [
      "Un patrón donde una clase base se hereda a sí misma mediante múltiples namespaces.",
      "Un patrón donde una clase derivada hereda de una clase base templada parametrizada con la propia derivada, logrando polimorfismo estático sin vtable.",
      "Un algoritmo de ordenamiento recursivo para contenedores de punteros crudos.",
      "Un sistema de macros para emular closures en C++98."
    ],
    correctAnswerIndex: 1,
    explanation: "CRTP permite lograr polimorfismo estático (sin vtable ni costo de despacho dinámico) haciendo que la clase Base invoque métodos de Derived casteando 'static_cast<Derived*>(this)->interface()', lo que permite inline agresivo por parte del compilador.",
    topic: "Idiomas y Patrones",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-16",
    collectionId: "cpp",
    question: "¿Por qué es crucial marcar los constructores de un solo argumento como 'explicit' a menos que se busque conversión implícita?",
    options: [
      "Porque sin explicit el constructor no puede instanciarse en la pila.",
      "Para prevenir conversiones de tipos implícitas accidentales que pueden ocultar bugs sutiles en llamadas a funciones.",
      "Porque explicit duplica la velocidad de copia en estructuras complejas.",
      "Para requerir que el argumento sea siempre una referencia constante."
    ],
    correctAnswerIndex: 1,
    explanation: "Un constructor de un solo parámetro sin la palabra clave 'explicit' actúa como un constructor de conversión implícito. El compilador lo utilizará silenciosamente para convertir tipos, lo que a menudo genera llamadas erróneas e inesperadas.",
    topic: "Diseño de Clases",
    difficulty: "básico"
  },
  {
    id: "cpp-q-17",
    collectionId: "cpp",
    question: "¿Qué garantía ofrece la especificación 'noexcept' cuando se declara en un constructor de movimiento?",
    options: [
      "Que el compilador capturará cualquier violación de segmento transformándola en un código de salida 0.",
      "Permite a contenedores como 'std::vector' reubicar elementos utilizando movimiento en lugar de copia durante una realocación, ofreciendo strong exception guarantee.",
      "Garantiza que la función siempre se ejecute en un hilo secundario sin interrumpir el hilo principal.",
      "Obliga a que todos los miembros del objeto residan en registros de CPU."
    ],
    correctAnswerIndex: 1,
    explanation: "Si el constructor de movimiento no está marcado como noexcept, std::vector optará por copiar los elementos durante una realocación para mantener la 'strong exception guarantee'. Declarar noexcept desbloquea el rendimiento óptimo del movimiento en la STL.",
    topic: "Excepciones y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-18",
    collectionId: "cpp",
    question: "¿Qué es el 'Argument-Dependent Lookup' (ADL o Koenig Lookup)?",
    options: [
      "Un proceso del linker que resuelve símbolos globales en bibliotecas compartidas.",
      "El mecanismo de búsqueda de nombres no calificados que busca funciones en los namespaces de los tipos de los argumentos pasados a la llamada.",
      "Una técnica de precálculo en tiempo de compilación para evaluar llamadas virtuales.",
      "Un validador de dependencias cíclicas en encabezados de C++."
    ],
    correctAnswerIndex: 1,
    explanation: "ADL permite que una llamada no calificada como 'swap(a, b)' busque la función swap en el namespace donde están definidos los tipos de 'a' y 'b', facilitando la extensibilidad de operadores y algoritmos genéricos sin forzar prefijos rígidos.",
    topic: "Resolución de Nombres",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-19",
    collectionId: "cpp",
    question: "¿Cuál es la diferencia de uso entre 'static_cast' y 'reinterpret_cast'?",
    options: [
      "static_cast solo funciona con punteros void* y reinterpret_cast con tipos primitivos int y float.",
      "static_cast realiza conversiones bien definidas y verificadas en compilación; reinterpret_cast reinterpreta el patrón de bits en bajo nivel sin conversión de representación.",
      "reinterpret_cast verifica el RTTI en tiempo de ejecución mientras que static_cast no.",
      "static_cast invalida la memoria si el tipo destino no coincide con la firma del constructor."
    ],
    correctAnswerIndex: 1,
    explanation: "static_cast efectúa conversiones válidas según el sistema de tipos del estándar. reinterpret_cast ignora las reglas de tipos e interpreta la secuencia binaria de bits de un tipo como si fuera otro, siendo altamente dependiente de la plataforma y propenso a violar strict aliasing.",
    topic: "Casting y Tipos",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-20",
    collectionId: "cpp",
    question: "¿Cuándo es indispensable utilizar 'dynamic_cast' y qué requisito impone sobre las clases involucradas?",
    options: [
      "Para convertir entre enteros y flotantes sin perder precisión; requiere que la clase sea abstracta.",
      "Para realizar downcasting seguro en tiempo de ejecución en jerarquías polimórficas; requiere que la clase base posea al menos una función virtual para contar con RTTI.",
      "Para convertir punteros crudos en std::shared_ptr en tiempo de compilación; requiere un default constructor.",
      "Para acceder a miembros privados desde subclases derivadas por herencia protegida."
    ],
    correctAnswerIndex: 1,
    explanation: "dynamic_cast verifica en tiempo de ejecución si el objeto apuntado es realmente de la clase derivada. Si falla con punteros retorna nullptr (o lanza std::bad_cast con referencias). Requiere que la clase base sea polimórfica (tenga al menos una función virtual).",
    topic: "Polimorfismo",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-21",
    collectionId: "cpp",
    question: "¿Qué es 'std::optional<T>' (C++17) y qué problema previene frente al uso tradicional de punteros nulos?",
    options: [
      "Un contenedor que solo admite valores asignados en tiempo de ejecución mediante concurrencia.",
      "Un tipo que representa un valor que puede o no existir de forma segura en la pila sin asignación dinámica en el heap ni ambigüedades con punteros nulos.",
      "Un puntero que se destruye automáticamente tras 60 segundos de inactividad.",
      "Un envoltorio de tipos exclusivo para operaciones de entrada y salida con archivos."
    ],
    correctAnswerIndex: 1,
    explanation: "std::optional<T> encapsula un valor que puede estar presente o vacío sin recurrir a punteros crudos o valores centinela. Almacena el valor internamente en su propio layout (sin heap allocation) y hace explícita la opcionalidad en la firma de funciones.",
    topic: "STL Types",
    difficulty: "básico"
  },
  {
    id: "cpp-q-22",
    collectionId: "cpp",
    question: "¿Qué garantiza 'std::variant' frente a las uniones ('union') tradicionales de C?",
    options: [
      "Permite almacenar infinitos elementos simultáneamente mediante una lista doblemente enlazada.",
      "Es una unión etiquetada (type-safe tagged union) que conoce el tipo activo actualmente, invoca constructores/destructores correctamente y previene accesos indebidos.",
      "Comprime los datos utilizando compresión gzip en tiempo de ejecución.",
      "Solo admite tipos escalares idénticos en tamaño de memoria."
    ],
    correctAnswerIndex: 1,
    explanation: "A diferencia de las uniones de C que no gestionan el ciclo de vida de objetos no triviales ni validan el tipo activo, std::variant sabe exactamente qué tipo contiene, ejecuta los destructores correctos al cambiar de estado y valida el acceso mediante std::get o std::visit.",
    topic: "STL Types",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-23",
    collectionId: "cpp",
    question: "¿Cómo resuelve C++ el 'problema del diamante' (diamond problem) en herencia múltiple?",
    options: [
      "Prohibiendo la herencia de más de dos clases simultáneamente en tiempo de compilación.",
      "Mediante herencia virtual ('virtual public Base'), asegurando que solo exista una única subinstancia compartida de la clase base común en el objeto final.",
      "Duplicando automáticamente el espacio de nombres de cada clase derivada.",
      "Delegando la resolución de nombres al enlazador dinámico mediante tablas GOT."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando dos clases intermedias heredan de una base común y una cuarta clase hereda de ambas, usar 'virtual public Base' en las clases intermedias garantiza que el objeto derivado final contenga una sola copia unificada de Base, eliminando ambigüedades.",
    topic: "Herencia Múltiple",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-24",
    collectionId: "cpp",
    question: "¿Qué es 'RVO' (Return Value Optimization) y 'Copy Elision' en C++17?",
    options: [
      "Una directiva de compilación que fuerza a guardar todas las variables locales en la caché L1.",
      "Una optimización donde el compilador construye el objeto de retorno directamente en el espacio asignado por el invocador, omitiendo copias o movimientos (garantizado en C++17 para prvalues).",
      "Un proceso de serialización binaria para enviar objetos entre sockets.",
      "Un mecanismo para comprimir el tamaño de las instrucciones de máquina en arquitecturas ARM."
    ],
    correctAnswerIndex: 1,
    explanation: "Copy Elision permite al compilador omitir constructores de copia o movimiento construyendo el objeto directamente en su destino final. Desde C++17, la elisión es obligatoria para prvalues devueltos por valor (garantizado por el estándar).",
    topic: "Optimización de Compilador",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-25",
    collectionId: "cpp",
    question: "¿Qué permite la sintaxis de 'generalized lambda capture' (o init-capture) introducida en C++14?",
    options: [
      "Capturar variables globales sin necesidad de incluirlas en el archivo de encabezado.",
      "Capturar objetos solo-movibles dentro del closure mediante semántica de movimiento, por ejemplo: '[p = std::move(ptr)]() { ... }'.",
      "Convertir automáticamente cualquier lambda en un hilo de ejecución independiente.",
      "Capturar funciones virtuales privadas de clases no derivadas."
    ],
    correctAnswerIndex: 1,
    explanation: "Antes de C++14, solo era posible capturar por valor o por referencia. Con init-capture se pueden crear nuevos miembros en el closure con inicializadores arbitrarios, permitiendo mover objetos no copiables (como std::unique_ptr) dentro de la lambda.",
    topic: "Lambdas y Closures",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-26",
    collectionId: "cpp",
    question: "¿Qué ventaja clave ofrecen los 'Módulos' (Modules) de C++20 frente al modelo clásico de '#include'?",
    options: [
      "Permiten ejecutar código C++ directamente en el navegador sin compilación previa.",
      "Aíslan macros y dependencias internas evitando la polución de símbolos, y se compilan una sola vez a una representación binaria intermedia acelerando drásticamente los tiempos de compilación.",
      "Reemplazan completamente la necesidad de un sistema de tipos estático.",
      "Eliminan el soporte para punteros crudos en favor de referencias obligatorias."
    ],
    correctAnswerIndex: 1,
    explanation: "El modelo clásico de #include copia textualmente encabezados en cada unidad de traducción. Los módulos se compilan de manera aislada una sola vez a interfaces binarias (BMI), no filtran macros no exportadas y aceleran exponencialmente la construcción de proyectos.",
    topic: "C++20 Modules",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-27",
    collectionId: "cpp",
    question: "¿Qué abstracción proporciona 'std::span<T>' introducida en C++20?",
    options: [
      "Un vector dinámico que duplica su tamaño automáticamente en bloques asíncronos.",
      "Una vista no propietaria de una secuencia contigua de objetos en memoria (puntero + tamaño), compatible con arrays C, std::vector y std::array sin copias ni asignaciones.",
      "Un despachador de tareas para paralelismo masivo en GPUs.",
      "Un temporizador de alta precisión para medir la latencia entre microservicios."
    ],
    correctAnswerIndex: 1,
    explanation: "std::span representa una secuencia continua de objetos contiguos sin tomar propiedad de la memoria. Permite a las funciones aceptar cualquier contenedor contiguo (vectores, arreglos nativos C, std::array) de manera uniforme y con costo nulo de copia.",
    topic: "C++20 Span",
    difficulty: "intermedio"
  },
  {
    id: "cpp-q-28",
    collectionId: "cpp",
    question: "¿Qué funcionalidad aporta el operador de tres vías '<=>' (spaceship operator) en C++20?",
    options: [
      "Permite calcular la distancia euclidiana entre dos puntos en un plano tridimensional.",
      "Genera automáticamente todas las comparaciones relacionales (<, <=, >, >=, ==, !=) implementando una sola función que determina ordenamiento estricto, fuerte o parcial.",
      "Ejecuta una operación de intercambio atómico entre tres variables concurrentes.",
      "Define una función lambda recursiva de tres argumentos posicionales."
    ],
    correctAnswerIndex: 1,
    explanation: "El operador <=> (tres vías o spaceship) permite que con una única definición (usualmente '= default') el compilador sintetice automáticamente todos los operadores de comparación de la clase según las categorías de ordenamiento del estándar.",
    topic: "C++20 Comparación",
    difficulty: "básico"
  },
  {
    id: "cpp-q-29",
    collectionId: "cpp",
    question: "¿Cuál es la semántica del modelo de memoria 'std::memory_order_acquire' y 'std::memory_order_release' en 'std::atomic'?",
    options: [
      "Bloquean todos los demás núcleos del procesador hasta que el hilo en cuestión finalice su ejecución.",
      "Establecen una relación de sincronización: una carga acquire observa todas las escrituras en memoria realizadas antes del correspondiente almacenamiento release en otro hilo.",
      "Formatean los registros de caché a ceros antes de cada lectura atómica.",
      "Convierten tipos no atómicos en punteros volátiles de hardware."
    ],
    correctAnswerIndex: 1,
    explanation: "El par acquire-release proporciona sincronización lock-free: operaciones previas a un store release no pueden reordenarse después de él, y operaciones posteriores a un load acquire no pueden reordenarse antes de él, garantizando visibilidad entre hilos.",
    topic: "Concurrencia y Memoria Atómica",
    difficulty: "avanzado"
  },
  {
    id: "cpp-q-30",
    collectionId: "cpp",
    question: "¿Qué son los 'Ranges' (std::ranges) introducidos en C++20?",
    options: [
      "Rangos de direcciones virtuales asignados por el kernel para la memoria compartida.",
      "Una biblioteca moderna de algoritmos y vistas componibles mediante el operador pipe ('|') que opera directamente sobre contenedores sin requerir pasar pares de iteradores begin() y end().",
      "Un conjunto de macros para restringir valores de enumeraciones a múltiplos de dos.",
      "Un sistema de profiling para medir el tiempo de respuesta de sockets TCP."
    ],
    correctAnswerIndex: 1,
    explanation: "std::ranges moderniza los algoritmos de la STL: permite pasar contenedores completos directamente, ofrece vistas perezosas componibles como 'v | std::views::filter(pred) | std::views::transform(fn)', y valida los tipos mediante Concepts en compilación.",
    topic: "C++20 Ranges",
    difficulty: "intermedio"
  }
];
