import type { QuizQuestion } from "@/data/quizTypes";

export const cQuestions: QuizQuestion[] = [
  {
    id: "c-q-01",
    collectionId: "c",
    question: "¿Qué segmentos componen el mapa de memoria virtual estándar de un proceso compilado en C?",
    options: [
      "Texto (código), Data (inicializadas), BSS (no inicializadas a cero), Heap (crecimiento hacia arriba) y Stack (crecimiento hacia abajo).",
      "Heap, Garbage Collector, Virtual DOM y Thread Pool.",
      "Registro de activación, tablas hash globales y partición swap exclusivamente.",
      "Segmento de bytecodes, metadata JVM y memoria compartida POSIX."
    ],
    correctAnswerIndex: 0,
    explanation: "El layout de memoria en C consta de Text (código máquina en solo lectura), Data (variables globales/estáticas inicializadas), BSS (estáticas a cero), Heap (memoria dinámica gestionada con malloc) y Stack (marcos de llamada locales).",
    topic: "Layout de Memoria & Arquitectura",
    difficulty: "intermedio"
  },
  {
    id: "c-q-02",
    collectionId: "c",
    question: "¿Por qué el operador 'sizeof' aplicado sobre una estructura (struct) a menudo devuelve un tamaño mayor que la suma de sus campos?",
    options: [
      "Por el alineamiento de memoria y relleno (padding) introducido por el compilador para alinear campos a límites de palabra de la CPU.",
      "Porque añade una cabecera oculta con la tabla virtual de funciones (vtable).",
      "Porque cada estructura reserva automáticamente 16 bytes para el puntero 'this'.",
      "Es un fallo de redondeo dependiente del formato de coma flotante IEEE-754."
    ],
    correctAnswerIndex: 0,
    explanation: "Las arquitecturas de CPU leen datos más rápido en direcciones múltiplos de su tamaño de palabra (2, 4 u 8 bytes). El compilador inserta bytes de 'padding' entre miembros para cumplir los requisitos de alineación natural del hardware.",
    topic: "Estructuras & Padding",
    difficulty: "intermedio"
  },
  {
    id: "c-q-03",
    collectionId: "c",
    question: "¿Qué peligro crítico presenta reasignar el puntero de origen directamente con 'ptr = realloc(ptr, new_size)'?",
    options: [
      "Si realloc() falla y retorna NULL, el puntero original se sobreescribe y el bloque previo queda inaccesible, causando una fuga de memoria.",
      "realloc() borra automáticamente todos los datos del bloque previo aunque la reasignación tenga éxito.",
      "Fuerza un fallo de segmentación inmediato en el kernel al cambiar el tamaño de un puntero.",
      "Provoca un desbordamiento de búfer al copiar datos a una dirección no alineada."
    ],
    correctAnswerIndex: 0,
    explanation: "Si realloc() no encuentra memoria disponible, devuelve NULL pero deja el bloque original intacto en el Heap. Si asignas directamente 'ptr = realloc(ptr, ...)', pierdes la referencia al bloque previo y no puedes liberarlo con free().",
    topic: "Gestión de Memoria Dinámica",
    difficulty: "avanzado"
  },
  {
    id: "c-q-04",
    collectionId: "c",
    question: "¿Cuál es la función del calificador de tipo 'volatile' en C?",
    options: [
      "Indica al optimizador del compilador que la variable puede cambiar fuera del control del flujo del programa (hardware I/O, señales), forzando lecturas directas de memoria.",
      "Almacena la variable temporalmente en la memoria swap del disco duro.",
      "Convierte la variable en un hilo asíncrono gestionado por pthreads.",
      "Marca la variable como constante de solo lectura protegida contra escritura."
    ],
    correctAnswerIndex: 0,
    explanation: "'volatile' previene que el compilador optimice lecturas o escrituras almacenando el valor en registros de la CPU. Cada acceso a una variable volatile obliga a emitir una instrucción de carga/almacenamiento real en la RAM física o registro mapeado.",
    topic: "Calificadores de Tipo",
    difficulty: "intermedio"
  },
  {
    id: "c-q-05",
    collectionId: "c",
    question: "¿Qué estipula la 'Strict Aliasing Rule' en el estándar C?",
    options: [
      "Dos punteros de tipos incompatibles no pueden apuntar al mismo bloque de memoria, permitiendo al compilador reordenar accesos asumiendo independencia.",
      "Todos los punteros deben ser declarados en la misma función donde se reservó la memoria dinámica.",
      "Prohíbe que una variable local tenga el mismo nombre que una variable global en el mismo archivo.",
      "Obliga a que todos los punteros sean casteados a (void*) antes de ser liberados con free()."
    ],
    correctAnswerIndex: 0,
    explanation: "El estándar permite a los compiladores asumir que dos punteros de distinto tipo básico (ej. int* y float*) nunca se solapan en memoria. Violar esta regla (type punning sin uniones ni char*) es Undefined Behavior y genera optimizaciones erróneas.",
    topic: "Punteros & Aliasing",
    difficulty: "avanzado"
  },
  {
    id: "c-q-06",
    collectionId: "c",
    question: "¿Qué efecto tiene declarar una función o variable global con la palabra clave 'static' a nivel de archivo?",
    options: [
      "Otorga enlace interno (internal linkage): el símbolo solo es visible y accesible dentro de esa unidad de traducción (.c).",
      "Almacena la variable en la memoria de solo lectura del microprocesador.",
      "Convierte la función en una macro evaluada por el preprocesador.",
      "Fuerza a que la variable sea compartida entre múltiples procesos del sistema operativo."
    ],
    correctAnswerIndex: 0,
    explanation: "A nivel de archivo (file scope), 'static' restringe la visibilidad del símbolo al archivo de código fuente actual, impidiendo colisiones de nombres durante el enlazado (linking) con otros módulos del proyecto.",
    topic: "Enlace & Ámbitos",
    difficulty: "básico"
  },
  {
    id: "c-q-07",
    collectionId: "c",
    question: "¿Cuál es la semántica del calificador 'restrict' introducido en C99?",
    options: [
      "Garantiza al compilador que durante el ciclo de vida del puntero, solo se accederá al objeto apuntado a través de ese puntero específico.",
      "Impide que el puntero sea desreferenciado fuera de bloques de control de excepciones.",
      "Limita el número máximo de lecturas por segundo que pueden realizarse sobre un array.",
      "Bloquea la variable para que no pueda ser compartida entre hilos de ejecución."
    ],
    correctAnswerIndex: 0,
    explanation: "'restrict' es una promesa al optimizador: afirma que no hay solapamiento (no aliasing) con otros punteros. Esto permite vectorizaciones avanzadas con instrucciones SIMD y mantener valores en registros sin recargas defensivas.",
    topic: "Optimizaciones & C99",
    difficulty: "avanzado"
  },
  {
    id: "c-q-08",
    collectionId: "c",
    question: "¿Qué consecuencia define el estándar C para el desbordamiento de enteros con signo (Signed Integer Overflow)?",
    options: [
      "Es Comportamiento Indefinido (Undefined Behavior); el compilador puede asumir que nunca ocurre y eliminar ramas enteras de código.",
      "Aplica obligatoriamente aritmética modular en complemento a dos con wraparound predecible.",
      "Lanza una excepción de punto flotante SIGFPE que termina el proceso.",
      "Convierte automáticamente el entero en un número de coma flotante de 64 bits."
    ],
    correctAnswerIndex: 0,
    explanation: "A diferencia de los enteros sin signo (unsigned, donde el desbordamiento es modular según 2^N), el desbordamiento con signo es Undefined Behavior (UB). Compiladores como GCC y Clang eliminan chequeos como 'if (x + 1 < x)' asumiendo que nunca desborda.",
    topic: "Undefined Behavior & Seguridad",
    difficulty: "avanzado"
  },
  {
    id: "c-q-09",
    collectionId: "c",
    question: "¿Cómo escala la aritmética de punteros en una expresión como 'ptr + 3' donde ptr es de tipo 'int*' en una plataforma de 32 bits (sizeof(int) = 4)?",
    options: [
      "Avanza la dirección de memoria física en 12 bytes (3 * sizeof(int)).",
      "Avanza la dirección de memoria física en exactamente 3 bytes.",
      "Multiplica el valor del puntero por 3 mediante desplazamiento de bits.",
      "Accede al elemento en el índice 3 de la tabla hash de símbolos."
    ],
    correctAnswerIndex: 0,
    explanation: "La aritmética de punteros en C se escala automáticamente por el tamaño del tipo de dato apuntado: ptr + n desplaza la dirección de memoria en 'n * sizeof(*ptr)' bytes.",
    topic: "Aritmética de Punteros",
    difficulty: "básico"
  },
  {
    id: "c-q-10",
    collectionId: "c",
    question: "¿Cuál es el operador del preprocesador utilizado para concatenar tokens ('token pasting') en macros de C?",
    options: [
      "##",
      "#",
      "@@",
      "$$"
    ],
    correctAnswerIndex: 0,
    explanation: "El operador '##' fusiona dos tokens en uno solo durante la fase de preprocesamiento (ej. COMMAND(quit) expande a cmd_quit mediante cmd_ ## name). El operador '#' individual se utiliza para convertir un argumento en una cadena de texto (stringification).",
    topic: "Preprocesador & Macros",
    difficulty: "intermedio"
  },
  {
    id: "c-q-11",
    collectionId: "c",
    question: "¿Qué ocurre con el array en la mayoría de las expresiones al pasarlo como argumento a una función en C ('Array Decay')?",
    options: [
      "Decae (decay) automáticamente a un puntero que apunta a la dirección del primer elemento del array.",
      "Se copia íntegramente por valor en la pila de llamadas de la función receptora.",
      "Se transforma en una estructura de lista doblemente enlazada en el Heap.",
      "Lanza un error de compilación a menos que se especifique su longitud en tiempo de ejecución."
    ],
    correctAnswerIndex: 0,
    explanation: "En la mayoría de las expresiones (salvo con sizeof y &), el identificador de un array decae a un puntero al primer elemento (&arr[0]). Por ello, 'void fn(int arr[])' es idéntico a 'void fn(int *arr)', perdiéndose la información de tamaño del array original.",
    topic: "Arrays & Punteros",
    difficulty: "básico"
  },
  {
    id: "c-q-12",
    collectionId: "c",
    question: "¿Qué vulnerabilidad histórica provocó que la función 'gets()' fuera declarada obsoleta en C99 y eliminada por completo del estándar en C11?",
    options: [
      "No acepta un parámetro de longitud máxima, permitiendo desbordamientos de búfer en la pila (Stack Buffer Overflow) con entradas largas.",
      "Cifra los caracteres en memoria con un algoritmo débil vulnerable a criptoanálisis.",
      "Bloquea el hilo del sistema operativo impidiendo recibir señales del temporizador.",
      "Solo admite caracteres en minúscula arrojando excepciones con mayúsculas."
    ],
    correctAnswerIndex: 0,
    explanation: "'gets()' lee de stdin hasta encontrar un salto de línea sin verificar el tamaño del búfer de destino, facilitando la sobreescritura de la dirección de retorno en el stack frame y ejecución remota de código. Se sustituye por 'fgets()' o 'getline()'.",
    topic: "Seguridad & Buffer Overflows",
    difficulty: "básico"
  },
  {
    id: "c-q-13",
    collectionId: "c",
    question: "¿Cuál es la diferencia entre 'malloc()' y 'calloc()' en la asignación dinámica de memoria?",
    options: [
      "'calloc()' inicializa todos los bytes del bloque reservado a cero; 'malloc()' deja la memoria sin inicializar con contenido residual previo.",
      "'malloc()' reserva memoria en el Heap y 'calloc()' en el Stack de llamadas.",
      "'calloc()' solo puede reservar memoria para estructuras de más de 1024 bytes.",
      "Son sinónimos con firmas idénticas mantenidos por retrocompatibilidad con C89."
    ],
    correctAnswerIndex: 0,
    explanation: "malloc(size) solo asigna memoria sin alterar los bytes existentes. calloc(num, size) calcula num * size con protección contra desbordamiento de enteros e inicializa todos los bytes a cero (bits 0).",
    topic: "Gestión de Memoria Dinámica",
    difficulty: "básico"
  },
  {
    id: "c-q-14",
    collectionId: "c",
    question: "¿Qué mecanismo de selección por tipo en tiempo de compilación introdujo el estándar C11?",
    options: [
      "_Generic",
      "template<typename T>",
      "typeid()",
      "typeof_unqual()"
    ],
    correctAnswerIndex: 0,
    explanation: "C11 incorporó '_Generic(control_expr, type1: result1, type2: result2, default: default_result)', permitiendo sobrecarga ad-hoc en macros basada en el tipo de dato de la expresión evaluada en compilación.",
    topic: "Estándar C11 & Metaprogramación",
    difficulty: "avanzado"
  },
  {
    id: "c-q-15",
    collectionId: "c",
    question: "¿Por qué una expresión como 'i = i++' produce Comportamiento Indefinido (Undefined Behavior) en C?",
    options: [
      "Viola las reglas de puntos de secuencia (sequence points): una variable escalar no puede modificarse más de una vez sin un punto de secuencia intermedio.",
      "El compilador prohíbe que el operador de post-incremento se use en el lado derecho de una asignación.",
      "Genera un bucle infinito que bloquea el registro del acumulador en el microprocesador.",
      "Provoca una excepción de división por cero en la unidad aritmético-lógica."
    ],
    correctAnswerIndex: 0,
    explanation: "Entre dos puntos de secuencia sucesivos, un valor escalar solo puede tener su valor almacenado modificado una vez por la evaluación de una expresión. En 'i = i++', el valor de 'i' se escribe dos veces de forma no secuenciada.",
    topic: "Sequence Points & Evaluación",
    difficulty: "avanzado"
  },
  {
    id: "c-q-16",
    collectionId: "c",
    question: "¿Cómo se define un puntero a una función que recibe dos enteros y devuelve un entero en C?",
    options: [
      "int (*fn_ptr)(int, int);",
      "int *fn_ptr(int, int);",
      "fn_ptr<int, int> -> int;",
      "int &fn_ptr(int, int);"
    ],
    correctAnswerIndex: 0,
    explanation: "Los paréntesis alrededor de (*fn_ptr) son obligatorios: 'int (*fn_ptr)(int, int)' declara un puntero a función. Sin los paréntesis, 'int *fn_ptr(int, int)' declara una función ordinaria que devuelve un puntero a entero (int*).",
    topic: "Punteros a Funciones",
    difficulty: "intermedio"
  },
  {
    id: "c-q-17",
    collectionId: "c",
    question: "¿Cuál es la función del archivo de cabecera 'stdbool.h' en C99?",
    options: [
      "Define las macros 'bool' expandida a '_Bool', 'true' a 1 y 'false' a 0 para soporte booleano estandarizado.",
      "Implementa operaciones de lógica difusa para sistemas de control en tiempo real.",
      "Provee algoritmos de optimización booleana mediante mapas de Karnaugh.",
      "Configura los permisos de acceso a variables booleanas en memoria compartida."
    ],
    correctAnswerIndex: 0,
    explanation: "En C99, el tipo primitivo nativo es '_Bool'. Para mantener compatibilidad con C++ y legibilidad, 'stdbool.h' provee las definiciones convenientes 'bool', 'true' y 'false'.",
    topic: "Estándar C99 & Tipos",
    difficulty: "básico"
  },
  {
    id: "c-q-18",
    collectionId: "c",
    question: "¿Qué diferencia existe entre un 'Little-Endian' y un 'Big-Endian' al almacenar un entero de 32 bits (0x12345678) en memoria?",
    options: [
      "Little-Endian almacena el byte menos significativo primero (78 56 34 12); Big-Endian almacena el byte más significativo primero (12 34 56 78).",
      "Little-Endian utiliza compresión de ceros a la izquierda; Big-Endian duplica los bits de paridad.",
      "Big-Endian solo es compatible con procesadores ARM; Little-Endian solo funciona en mainframes IBM.",
      "Little-Endian almacena los números como enteros con signo; Big-Endian como enteros sin signo."
    ],
    correctAnswerIndex: 0,
    explanation: "Endianness define el orden de los bytes de palabras multisitio en memoria. En Little-Endian (x86, x86_64, la mayoría de ARM), el byte de menor peso se sitúa en la dirección de memoria más baja.",
    topic: "Endianness & Hardware",
    difficulty: "intermedio"
  },
  {
    id: "c-q-19",
    collectionId: "c",
    question: "¿Qué efecto tiene utilizar 'union' en lugar de 'struct' en C?",
    options: [
      "Todos los miembros de la unión comparten la misma dirección base de memoria, y su tamaño total es el del miembro más grande.",
      "Los miembros se almacenan de forma contigua uno tras otro sumando sus tamaños individuales.",
      "Una unión solo puede almacenar datos de tipo texto codificados en ASCII.",
      "Las uniones se destruyen automáticamente al salir de la función mediante recolección de basura."
    ],
    correctAnswerIndex: 0,
    explanation: "Una 'union' superpone todos sus miembros en la misma ubicación física de memoria. Modificar un miembro altera el valor interpretado de los otros, utilizándose para ahorro de memoria o 'type punning' controlado.",
    topic: "Uniones & Gestión de Memoria",
    difficulty: "intermedio"
  },
  {
    id: "c-q-20",
    collectionId: "c",
    question: "¿Qué problema previene el uso de 'snprintf()' en lugar de 'sprintf()'?",
    options: [
      "Desbordamientos de búfer (Buffer Overflows), al recibir un parámetro de tamaño máximo 'size' que limita los bytes escritos.",
      "Errores de formato de precisión en números de coma flotante.",
      "Interrupciones no capturadas de señales del sistema operativo.",
      "Fugas de descriptores de archivo en sockets de red abiertos."
    ],
    correctAnswerIndex: 0,
    explanation: "'sprintf()' no conoce la capacidad del búfer receptor y continúa escribiendo indefinidamente si la cadena formateada es extensa. 'snprintf(buf, sizeof(buf), ...)' trunca la salida si excede el tamaño, evitando desbordamientos de memoria.",
    topic: "Seguridad & Entrada/Salida",
    difficulty: "básico"
  },
  {
    id: "c-q-21",
    collectionId: "c",
    question: "¿Qué directiva del preprocesador se utiliza tradicionalmente como 'Include Guard' para evitar inclusiones múltiples de un archivo de cabecera?",
    options: [
      "#ifndef HEADER_H / #define HEADER_H / #endif",
      "#import <header.h>",
      "#pragma ignore_duplicates",
      "#include_once <header.h>"
    ],
    correctAnswerIndex: 0,
    explanation: "Los include guards basados en #ifndef / #define / #endif previenen que las definiciones de tipos o constantes sean procesadas repetidamente en la misma unidad de compilación, evitando errores de redefinición.",
    topic: "Preprocesador & Cabeceras",
    difficulty: "básico"
  },
  {
    id: "c-q-22",
    collectionId: "c",
    question: "¿Qué ocurre si se intenta escribir sobre un literal de cadena como 'char *str = \"hola\"; str[0] = 'H';'?",
    options: [
      "Provoca un fallo de segmentación (Segmentation Fault / SIGSEGV) porque los literales de cadena residen en el segmento Text de solo lectura.",
      "El compilador convierte automáticamente la cadena a mayúsculas sin arrojar error.",
      "La cadena se reubica automáticamente en el Heap mediante una copia profunda.",
      "Se sobreescribe la variable global 'errno' con el código de error EACCES."
    ],
    correctAnswerIndex: 0,
    explanation: "Los literales de cadena se almacenan en memoria de solo lectura (.rodata / text segment). Intentar mutar sus bytes es Undefined Behavior y genera un fallo de protección de memoria (SIGSEGV) en sistemas operativos modernos.",
    topic: "Cadenas & Memoria de Solo Lectura",
    difficulty: "intermedio"
  },
  {
    id: "c-q-23",
    collectionId: "c",
    question: "¿Para qué se utiliza la función 'setjmp()' y 'longjmp()' en la biblioteca estándar de C?",
    options: [
      "Implementar saltos no locales (non-local jumps) guardando y restaurando el contexto de la CPU (registros y puntero de pila), emulando excepciones.",
      "Asignar bloques contiguos de memoria en la caché L1 del procesador.",
      "Saltar a una línea específica dentro de la misma función como alternativa a goto.",
      "Crear un nuevo proceso en segundo plano similar a fork() en sistemas POSIX."
    ],
    correctAnswerIndex: 0,
    explanation: "'setjmp(env)' guarda el estado de los registros y el stack pointer en un búfer jmp_buf. 'longjmp(env, val)' restaura ese contexto inmediatamente desenrollando la pila, permitiendo saltar fuera de funciones profundas ante errores graves.",
    topic: "Control de Flujo No Local",
    difficulty: "avanzado"
  },
  {
    id: "c-q-24",
    collectionId: "c",
    question: "¿Cuál es el propósito de la función 'free()' y qué ocurre si se invoca dos veces sobre el mismo puntero sin reasignar ('Double Free')?",
    options: [
      "Libera el bloque de memoria dinámica asociado; un double-free corrompe las estructuras del heap de malloc y abre vulnerabilidades de seguridad graves.",
      "Lanza una excepción estandarizada de tipo MemoryException capturable por el programa.",
      "free() es idempotente; invocarlo dos veces no produce ningún efecto secundario.",
      "Reinicia automáticamente el proceso volviendo al inicio de la función main()."
    ],
    correctAnswerIndex: 0,
    explanation: "free() informa al allocator del Heap que el bloque está disponible. Un 'double free' intenta liberar un bloque ya libre, corrompiendo las listas enlazadas internas del allocator (fastbins/tcache), lo que atacantes aprovechan para sobreescribir punteros de función.",
    topic: "Seguridad & Gestión del Heap",
    difficulty: "avanzado"
  },
  {
    id: "c-q-25",
    collectionId: "c",
    question: "¿Qué define la convención de llamadas 'cdecl' en la arquitectura x86 de 32 bits?",
    options: [
      "Los argumentos se apilan de derecha a izquierda y el llamador (caller) es responsable de limpiar la pila tras el retorno.",
      "Los argumentos se pasan exclusivamente por registros del procesador y el receptor limpia la pila.",
      "Los argumentos se almacenan en un array global compartido en el segmento BSS.",
      "El primer argumento se pasa en el registro EAX y el segundo en EDX obligatoriamente."
    ],
    correctAnswerIndex: 0,
    explanation: "En la convención 'cdecl' estándar de C en x86-32, los parámetros se empujan al stack de derecha a izquierda. Dado que el llamador conoce la cantidad exacta de argumentos, limpia la pila (add esp, N), lo que hace posibles funciones variádicas como printf.",
    topic: "ABI & Convenciones de Llamada",
    difficulty: "avanzado"
  },
  {
    id: "c-q-26",
    collectionId: "c",
    question: "¿Cuál es el comportamiento de las 'Variable-Length Arrays' (VLA) introducidas en C99 y hechas opcionales en C11?",
    options: [
      "Permiten reservar arrays en la pila con una dimensión determinada en tiempo de ejecución, con riesgo de Stack Overflow sin captura de errores.",
      "Permiten que los arrays crezcan dinámicamente en el Heap como vectores de C++.",
      "Asignan memoria en un archivo temporal en disco si la pila supera 1 MB.",
      "Solo admiten arrays de tipos de datos de coma flotante de doble precisión."
    ],
    correctAnswerIndex: 0,
    explanation: "Los VLAs reservan espacio en el Stack según una variable 'int arr[n]'. Si 'n' es desmedido, provocan un desbordamiento de pila fatal sin posibilidad de comprobación previa como con malloc(), razón por la cual C11 las hizo opcionales (__STDC_NO_VLA__).",
    topic: "Estándar C99/C11 & Pila",
    difficulty: "intermedio"
  },
  {
    id: "c-q-27",
    collectionId: "c",
    question: "¿Para qué se utiliza la macro 'va_start', 'va_arg' y 'va_end' de 'stdarg.h'?",
    options: [
      "Implementar funciones que aceptan un número variable de argumentos (funciones variádicas como printf).",
      "Validar firmas criptográficas de bibliotecas dinámicas compartidas.",
      "Medir el tiempo de ejecución de una función en microsegundos.",
      "Gestionar la sincronización de hilos mediante mutexes y semáforos."
    ],
    correctAnswerIndex: 0,
    explanation: "'stdarg.h' provee las macros para recorrer parámetros variables: va_start inicializa el puntero va_list a partir del último argumento con nombre, va_arg extrae el siguiente parámetro del tipo especificado y va_end limpia el estado.",
    topic: "Funciones Variádicas",
    difficulty: "intermedio"
  },
  {
    id: "c-q-28",
    collectionId: "c",
    question: "¿Qué garantía ofrece 'int32_t' y 'uint64_t' del archivo de cabecera 'stdint.h' frente a 'int' o 'long'?",
    options: [
      "Garantizan un ancho de bits exacto e invariable independientemente de la arquitectura del procesador o del compilador.",
      "Permiten realizar operaciones aritméticas a velocidad cuántica mediante aceleración por hardware.",
      "Evitan desbordamientos numéricos convirtiendo los excesos en ceros silenciosos.",
      "Cifran los enteros en memoria con algoritmos conformes al estándar FIPS 140-2."
    ],
    correctAnswerIndex: 0,
    explanation: "En C, los tamaños de 'int' o 'long' varían según el modelo de datos (ILP32, LP64, LLP64). 'stdint.h' provee tipos con ancho exacto garantizado (int32_t son siempre 32 bits en complemento a dos), vital para portabilidad y protocolos de red.",
    topic: "Tipos de Ancho Fijo & Portabilidad",
    difficulty: "básico"
  },
  {
    id: "c-q-29",
    collectionId: "c",
    question: "¿Cuál es la función del comando 'fflush(stdout)' en la biblioteca de entrada/salida estándar?",
    options: [
      "Fuerza la escritura inmediata de cualquier dato acumulado en el búfer de salida hacia el dispositivo o archivo destino.",
      "Limpia el búfer de entrada de stdin descartando caracteres pendientes.",
      "Cierra el descriptor de archivo de salida estándar liberando su memoria.",
      "Reinicia los contadores de líneas leídas por la función scanf()."
    ],
    correctAnswerIndex: 0,
    explanation: "Los streams de salida de C son normalmente almacenados en búfer (línea o bloque) para rendimiento. 'fflush(stream)' vacía el búfer hacia el kernel inmediatamente. (Nota: usar fflush en streams de entrada como stdin es Undefined Behavior en el estándar).",
    topic: "Entrada/Salida & Búfers",
    difficulty: "básico"
  },
  {
    id: "c-q-30",
    collectionId: "c",
    question: "¿Qué palabra clave introduce el nuevo estándar C23 para representar punteros nulos de forma segura y tipada?",
    options: [
      "nullptr (de tipo nullptr_t)",
      "NULL_PTR",
      "void_null",
      "nil"
    ],
    correctAnswerIndex: 0,
    explanation: "Históricamente, 'NULL' en C se definía como '((void*)0)' o '0', lo que causaba ambigüedades en macros y sobrecargas genéricas. C23 adopta 'nullptr' con tipo propio 'nullptr_t', alineándose con el estándar moderno de C++.",
    topic: "Estándar C23 & Evolución",
    difficulty: "intermedio"
  }
];
