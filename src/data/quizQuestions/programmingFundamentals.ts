import type { QuizQuestion } from "@/data/quizTypes";

export const programmingFundamentalsQuestions: QuizQuestion[] = [
  {
    id: "fund-01",
    collectionId: "programming-fundamentals",
    question: "¿En qué se diferencia fundamentalmente la arquitectura Von Neumann de la arquitectura Harvard en el procesamiento computacional?",
    options: [
      "Von Neumann comparte el mismo bus físico y memoria para instrucciones y datos, mientras que Harvard utiliza buses y memorias físicamente separados para cada uno.",
      "Von Neumann requiere compilación estática obligatoria, mientras que Harvard ejecuta código exclusivamente mediante interpretación dinámica.",
      "Harvard solo soporta operaciones aritméticas enteras, mientras que Von Neumann integra coprocesadores de coma flotante por hardware.",
      "Von Neumann no utiliza registros en la CPU y depende de memoria RAM directa, a diferencia de Harvard que posee jerarquías de caché L1/L2/L3."
    ],
    correctAnswerIndex: 0,
    explanation: "El cuello de botella de Von Neumann (Von Neumann bottleneck) surge precisamente porque el ancho de banda entre CPU y memoria se comparte para buscar instrucciones y transferir datos, a diferencia de Harvard donde dos buses separados permiten paralelismo en la lectura.",
    topic: "Arquitectura de Computadores",
    difficulty: "intermedio"
  },
  {
    id: "fund-02",
    collectionId: "programming-fundamentals",
    question: "En la representación numérica en computación, ¿por qué el sistema de 'Complemento a Dos' (Two's Complement) es el estándar universal para enteros con signo frente a 'Signo y Magnitud'?",
    options: [
      "Permite representar números primos con mayor densidad de empaquetado en registros de 64 bits.",
      "Elimina la ambigüedad del cero doble (+0 y -0) y permite que los circuitos de suma y resta sean idénticos a nivel de puertas lógicas.",
      "Reduce a la mitad el número de transistores requeridos en la memoria DRAM del sistema.",
      "Evita de forma absoluta los desbordamientos de enteros (integer overflow) en operaciones aritméticas."
    ],
    correctAnswerIndex: 1,
    explanation: "En complemento a dos solo existe un único cero (00...00), y las operaciones de resta se ejecutan como la suma del complemento a dos del sustraendo, simplificando radicalmente la ALU sin necesidad de circuitos subtractores separados.",
    topic: "Sistemas Numéricos",
    difficulty: "intermedio"
  },
  {
    id: "fund-03",
    collectionId: "programming-fundamentals",
    question: "Según el estándar IEEE 754 de punto flotante, ¿cuál es la causa raíz de que la expresión `0.1 + 0.2 === 0.3` resulte falsa en la mayoría de los lenguajes de programación?",
    options: [
      "El compilador trunca automáticamente las operaciones decimales a 16 bits de precisión.",
      "El número 0.1 y el número 0.2 son fracciones periódicas binarias infinitas que sufren error de redondeo al almacenarse en una mantisa finita binaria.",
      "El procesador convierte los números decimales a formato BCD (Binary Coded Decimal) introduciendo desfases de paridad.",
      "Los estándares de hardware reservan los últimos 4 bits de la mantisa exclusivamente para bits de paridad y checksum."
    ],
    correctAnswerIndex: 1,
    explanation: "Al igual que 1/3 es un decimal periódico infinito en base 10 (0.333...), fracciones como 1/10 (0.1) y 1/5 (0.2) son números periódicos infinitos en base 2 (0.000110011...), lo que genera errores de representación en la mantisa de 53 bits de IEEE 754 float64.",
    topic: "Aritmética Computacional",
    difficulty: "básico"
  },
  {
    id: "fund-04",
    collectionId: "programming-fundamentals",
    question: "¿Cuál es la distinción fundamental entre el 'Call Stack' (Pila de llamadas) y el 'Heap' (Montículo de memoria) en el modelo de ejecución de un programa?",
    options: [
      "El Stack almacena variables globales dinámicas sin orden estricto, mientras que el Heap organiza las funciones mediante una cola FIFO sincronizada.",
      "El Stack gestiona la memoria de frames de llamada de forma LIFO con asignación/liberación ultrarrápida y tamaño fijo por hilo, mientras que el Heap aloja memoria dinámica de tiempo de vida arbitrario.",
      "El Heap reside físicamente en la memoria caché del procesador (L1/L2), mientras que el Stack se persiste directamente en disco como memoria virtual paginada.",
      "El Stack requiere un recolector de basura (Garbage Collector) permanente, mientras que el Heap se autogestiona mediante registros del kernel del sistema operativo."
    ],
    correctAnswerIndex: 1,
    explanation: "El Stack gestiona marcos de pila (stack frames con variables locales y dirección de retorno) con puntero de pila (SP) contiguo LIFO. El Heap proporciona asignación arbitraria y persistente en memoria que requiere liberación manual o automática.",
    topic: "Gestión de Memoria",
    difficulty: "intermedio"
  },
  {
    id: "fund-05",
    collectionId: "programming-fundamentals",
    question: "¿En qué consiste el 'Paso de Parámetros por Compartición' (Call by Sharing / Call by Object Reference) característico de lenguajes como Python, JavaScript o Java con objetos?",
    options: [
      "El compilador copia byte a byte la estructura completa del objeto en el stack frame del receptor.",
      "Se pasa una copia del valor de la referencia; el receptor puede mutar el estado interno del objeto original, pero reasignar el parámetro no afecta la variable original exterior.",
      "Cualquier modificación o reasignación del parámetro dentro de la función sobrescribe automáticamente el puntero de la variable en el ámbito invocador.",
      "El objeto pasa a ser de solo lectura (read-only) durante toda la ejecución de la subrutina para prevenir condiciones de carrera."
    ],
    correctAnswerIndex: 1,
    explanation: "En Call by Sharing se evalúa el argumento y se pasa una copia del puntero/referencia. Se pueden invocar mutaciones sobre el objeto referenciado, pero reasignar la variable local no modifica el enlace de la variable que tenía la función invocadora.",
    topic: "Semántica de Lenguajes",
    difficulty: "intermedio"
  },
  {
    id: "fund-06",
    collectionId: "programming-fundamentals",
    question: "¿Qué condición técnica define a una función para beneficiarse de la 'Optimización de Llamada de Cola' (Tail Call Optimization / TCO)?",
    options: [
      "La función debe ser pura y no realizar ninguna operación de entrada/salida (I/O).",
      "La llamada recursiva debe ser la última instrucción ejecutada y su valor devuelto inmediatamente sin requerir operaciones pendientes en el marco de pila actual.",
      "La recursión debe ejecutarse dentro de un bloque protegido `try-catch` con memoria preasignada en el Heap.",
      "El algoritmo debe utilizar invariablemente un número par de argumentos tipados como enteros no negativos."
    ],
    correctAnswerIndex: 1,
    explanation: "TCO permite que el compilador o runtime reemplace el marco de pila actual por el de la nueva función invocada (un salto o jump) en lugar de apilar un nuevo marco, evitando el desbordamiento de pila (Stack Overflow) en algoritmos recursivos profundos.",
    topic: "Recursión y Optimización",
    difficulty: "avanzado"
  },
  {
    id: "fund-07",
    collectionId: "programming-fundamentals",
    question: "¿Cuál es la diferencia entre el alcance léxico (Lexical Scope) y el alcance dinámico (Dynamic Scope) en la resolución de variables?",
    options: [
      "El alcance léxico resuelve nombres según la estructura estática del código fuente al momento de escribirlo, mientras que el dinámico los busca en la cadena de llamadas de la pila de ejecución actual.",
      "El alcance léxico solo permite variables globales, mientras que el alcance dinámico restringe las variables a bloques anidados de 256 bytes.",
      "El alcance dinámico es verificado en tiempo de compilación mediante el árbol de sintaxis abstracta (AST), mientras que el léxico depende del estado del Garbage Collector.",
      "El alcance léxico requiere declaración explícita de punteros en memoria heap, a diferencia del alcance dinámico que utiliza registros CPU volátiles."
    ],
    correctAnswerIndex: 0,
    explanation: "En el alcance léxico (estático), la resolución de una variable depende de dónde está declarada la función en el texto del código fuente. En el dinámico, se busca hacia atrás en la pila de funciones invocadas activas.",
    topic: "Ámbitos y Clausuras",
    difficulty: "intermedio"
  },
  {
    id: "fund-08",
    collectionId: "programming-fundamentals",
    question: "En sistemas de tipos, ¿cuál es la distinción precisa entre 'Tipado Nominal' y 'Tipado Estructural' (Duck Typing formalizado)?",
    options: [
      "El tipado nominal evalúa la compatibilidad según los nombres explícitos y declaraciones jerárquicas de los tipos; el estructural evalúa la compatibilidad según la forma, propiedades y métodos que componen los tipos.",
      "El tipado nominal se ejecuta exclusivamente en el navegador web, mientras que el estructural se implementa en kernels de sistemas operativos.",
      "El tipado estructural requiere que todos los tipos implementen una interfaz única llamada `Object`, a diferencia del nominal que prohíbe interfaces.",
      "El tipado nominal impide el polimorfismo, mientras que el estructural obliga a usar herencia múltiple de clases abstractas."
    ],
    correctAnswerIndex: 0,
    explanation: "En tipado nominal (como en C++ o Java), dos clases con idénticos campos pero nombres distintos son incompatibles. En tipado estructural (como TypeScript o Go), si los miembros coinciden en estructura, los tipos son mutuamente asignables.",
    topic: "Sistemas de Tipos",
    difficulty: "intermedio"
  },
  {
    id: "fund-09",
    collectionId: "programming-fundamentals",
    question: "¿Qué formaliza la 'Evaluación de Cortocircuito' (Short-circuit Evaluation) en operadores lógicos como `AND` (`&&`) y `OR` (`||`)?",
    options: [
      "Fuerza a la CPU a interrumpir el flujo del programa con una excepción si un operando resulta nulo o indefinido.",
      "Garantiza que el segundo operando solo se evalúa si el resultado de la expresión global no puede ser determinado unívocamente por el primer operando.",
      "Evalúa todos los operandos concurrentemente en diferentes núcleos del procesador combinando los resultados mediante una barrera de sincronización.",
      "Convierte todas las expresiones booleanas a números enteros de 32 bits antes de aplicar operaciones a nivel de bits."
    ],
    correctAnswerIndex: 1,
    explanation: "En `A && B`, si `A` es falso, la expresión nunca puede ser verdadera, por lo que `B` no se ejecuta. En `A || B`, si `A` es verdadero, la expresión siempre es verdadera, ahorrando cómputo y evitando errores al verificar precondiciones.",
    topic: "Estructuras de Control",
    difficulty: "básico"
  },
  {
    id: "fund-10",
    collectionId: "programming-fundamentals",
    question: "En el análisis formal de algoritmos, ¿qué garantiza matemáticamente la demostración de un 'Invariante de Bucle' (Loop Invariant)?",
    options: [
      "Que el bucle alcanzará una tasa de aciertos de caché del 100% en el procesador.",
      "La corrección lógica del algoritmo mediante tres propiedades: Inicialización (antes del bucle), Mantenimiento (entre iteraciones) y Terminación (al finalizar).",
      "Que el tiempo de ejecución del algoritmo será estrictamente polinomial de grado menor o igual a O(N log N).",
      "Que el compilador convertirá el bucle en una operación vectorial SIMD de forma determinista."
    ],
    correctAnswerIndex: 1,
    explanation: "Un invariante de bucle es una propiedad lógica análoga a la inducción matemática: si se cumple antes de entrar, se preserva tras cada iteración y es verdadera al salir, demostrando la corrección del resultado final.",
    topic: "Algoritmia y Corrección",
    difficulty: "avanzado"
  },
  {
    id: "fund-11",
    collectionId: "programming-fundamentals",
    question: "¿Cuál es la diferencia formal entre la cota superior asintótica Big-O ($O$), la cota inferior Big-Omega ($\Omega$) y la cota ajustada Big-Theta ($\Theta$)?",
    options: [
      "Big-O representa el mejor caso absoluto, Big-Omega el peor caso, y Big-Theta el promedio estadístico de la distribución normal.",
      "Big-O define una cota superior para la tasa de crecimiento ($f(n) \\le c \\cdot g(n)$); Big-Omega una cota inferior ($f(n) \\ge c \\cdot g(n)$); y Big-Theta indica que ambas cotas coinciden en el mismo orden asintótico.",
      "Big-O mide consumo de memoria RAM, Big-Omega mide ancho de banda de red, y Big-Theta mide ciclos de reloj del procesador.",
      "Big-Theta solo es aplicable a algoritmos con estructuras no lineales como grafos y árboles binarios balanceados."
    ],
    correctAnswerIndex: 1,
    explanation: "$O(g(n))$ delimita el crecimiento por arriba, $\\Omega(g(n))$ por abajo, y $\\Theta(g(n))$ indica que el algoritmo está acotado tanto superior como inferiormente por la misma clase funcional multiplicada por constantes positivas.",
    topic: "Complejidad Computacional",
    difficulty: "intermedio"
  },
  {
    id: "fund-12",
    collectionId: "programming-fundamentals",
    question: "¿Cuáles son las tres variantes fundamentales del polimorfismo identificadas por Luca Cardelli y Peter Wegner?",
    options: [
      "Polimorfismo estático, polimorfismo dinámico y polimorfismo asíncrono.",
      "Polimorfismo paramétrico (generics), polimorfismo ad-hoc (sobrecarga/type classes) y polimorfismo de subtipado (subtyping/herencia).",
      "Polimorfismo lineal, polimorfismo cuadrático y polimorfismo exponencial.",
      "Polimorfismo de valor, polimorfismo de puntero y polimorfismo de registro."
    ],
    correctAnswerIndex: 1,
    explanation: "La taxonomía de Cardelli-Wegner (1985) clasifica el polimorfismo universal en paramétrico e inclusión (subtipado), y el polimorfismo ad-hoc en sobrecarga y coerción implícita.",
    topic: "Paradigmas de Programación",
    difficulty: "avanzado"
  },
  {
    id: "fund-13",
    collectionId: "programming-fundamentals",
    question: "En el diseño de software orientado a objetos, ¿qué establece rigurosamente el Principio de Sustitución de Liskov (LSP)?",
    options: [
      "Toda clase hija debe sobrescribir obligatoriamente todos los métodos virtuales definidos en su clase base.",
      "Si $S$ es un subtipo de $T$, los objetos de tipo $T$ deben poder ser reemplazados por objetos de tipo $S$ sin alterar la corrección o propiedades esperadas del programa.",
      "Una clase solo debe tener una única razón para cambiar a lo largo del ciclo de vida del software.",
      "Los módulos de alto nivel no deben importar módulos de bajo nivel sin un contenedor de inyección de dependencias."
    ],
    correctAnswerIndex: 1,
    explanation: "Formulado por Barbara Liskov (1987), el LSP exige que los subtipos respeten las precondiciones (no pueden ser más estrictas) y postcondiciones (no pueden ser más débiles) del tipo base, garantizando la consistencia del comportamiento.",
    topic: "Principios SOLID",
    difficulty: "intermedio"
  },
  {
    id: "fund-14",
    collectionId: "programming-fundamentals",
    question: "¿Cuál es la relación canónica entre 'Alta Cohesión' y 'Bajo Acoplamiento' en la ingeniería de software?",
    options: [
      "Alta cohesión significa que un módulo realiza una única tarea bien delimitada con responsabilidades fuertemente relacionadas; bajo acoplamiento minimiza las dependencias e interconexiones directas entre módulos distintos.",
      "Alta cohesión exige que todas las clases hereden de la misma clase raíz; bajo acoplamiento exige eliminar todas las interfaces intermedias.",
      "Alta cohesión duplica el código en varios archivos para acelerar el despliegue; bajo acoplamiento enlaza dinámicamente las bibliotecas en tiempo de ejecución.",
      "Ambos términos son sinónimos e indican que el software debe ser compilado en un único binario monolítico sin subprocesos."
    ],
    correctAnswerIndex: 0,
    explanation: "Un sistema con alta cohesión y bajo acoplamiento resulta altamente mantenible, comprobable y reutilizable, ya que cada componente tiene un propósito enfocado y sus cambios no provocan efectos secundarios en componentes externos.",
    topic: "Diseño de Software",
    difficulty: "básico"
  },
  {
    id: "fund-15",
    collectionId: "programming-fundamentals",
    question: "¿Por qué en programación funcional se prioriza la 'Transparencia Referencial' de las expresiones?",
    options: [
      "Porque permite compilar el código fuente sin generar archivos objeto intermedios.",
      "Porque una expresión puede ser sustituida por su valor evaluado en cualquier momento sin cambiar el comportamiento del programa, facilitando el razonamiento formal, memoización y paralelización.",
      "Porque elimina la necesidad de tipar los argumentos de las funciones de primer orden.",
      "Porque fuerza a que todas las variables del sistema sean almacenadas en formato de texto plano legible por humanos."
    ],
    correctAnswerIndex: 1,
    explanation: "Una función pura posee transparencia referencial si para los mismos argumentos siempre produce el mismo resultado sin efectos secundarios observables (mutación de variables externas, I/O no controlada, etc.).",
    topic: "Programación Funcional",
    difficulty: "intermedio"
  },
  {
    id: "fund-16",
    collectionId: "programming-fundamentals",
    question: "¿Qué es una 'Condición de Carrera' (Race Condition) y bajo qué circunstancias se produce en concurrencia?",
    options: [
      "Un conflicto de compilación cuando dos archivos fuente contienen clases con el mismo nombre y paquete.",
      "Un fallo donde el resultado de un programa depende del orden impredecible o temporización con la que múltiples hilos o procesos acceden y mutan un recurso compartido sin la debida sincronización.",
      "Una optimización del procesador que acelera los bucles `for` mediante desenrollado predictivo.",
      "El bloqueo mutuo e irreversible donde dos subprocesos quedan esperando indefinidamente los recursos del otro."
    ],
    correctAnswerIndex: 1,
    explanation: "Una race condition ocurre cuando dos o más hilos leen y escriben sobre la misma ubicación de memoria de forma concurrente y al menos una operación es de escritura sin exclusión mutua, derivando en estados inconsistentes.",
    topic: "Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "fund-17",
    collectionId: "programming-fundamentals",
    question: "¿Qué representa el problema del 'Puntero Colgante' (Dangling Pointer) en la gestión manual de memoria?",
    options: [
      "Un puntero inicializado con valor `NULL` que causa una violación de acceso al ser declarado.",
      "Un puntero que continúa apuntando a una dirección de memoria cuya asignación previa ya ha sido liberada o cuyo ámbito de vida ha expirado.",
      "Una referencia cíclica entre dos nodos de una lista doblemente enlazada que satura el recolector de basura.",
      "Un identificador reservado por el kernel para gestionar las páginas de intercambio (swap) en memoria secundaria."
    ],
    correctAnswerIndex: 1,
    explanation: "Si se desreferencia un puntero colgante, el programa puede leer datos corruptos, corromper otra estructura que haya sido reasignada en esa misma dirección de memoria o sufrir una terminación abrupta (Segmentation Fault).",
    topic: "Gestión de Memoria",
    difficulty: "intermedio"
  },
  {
    id: "fund-18",
    collectionId: "programming-fundamentals",
    question: "¿Cómo opera un compilador con tecnología JIT (Just-In-Time) a diferencia de un compilador puramente AOT (Ahead-Of-Time)?",
    options: [
      "El compilador JIT compila bytecode o código intermedio a código máquina nativo durante el tiempo de ejecución, optimizándolo según perfiles de uso en caliente (hot spots).",
      "El compilador JIT traduce el código fuente a ensamblador únicamente cuando el usuario presiona una tecla en el entorno de desarrollo.",
      "El compilador AOT requiere que el código sea interpretado línea por línea en el navegador web mediante un motor de expresiones regulares.",
      "El compilador JIT descarta las comprobaciones de tipos y los límites de arrays para maximizar la velocidad de inicio."
    ],
    correctAnswerIndex: 0,
    explanation: "Los compiladores JIT (como HotSpot en Java o V8 en JavaScript) ejecutan inicialmente por interpretación o código base, detectan funciones frecuentemente invocadas ('hot spots') y las recompilan a instrucciones nativas altamente optimizadas con información del perfil dinámico.",
    topic: "Compilación y Runtimes",
    difficulty: "intermedio"
  },
  {
    id: "fund-19",
    collectionId: "programming-fundamentals",
    question: "En términos de hardware y jerarquía de memoria, ¿por qué iterar un arreglo contiguo en memoria suele ser drásticamente más rápido que recorrer una lista enlazada equivalente?",
    options: [
      "Porque los arreglos contiguos se ejecutan directamente en la unidad aritmética de coma flotante (FPU).",
      "Por el principio de localidad espacial y temporal: los arreglos residen en direcciones contiguas, permitiendo al hardware prefetcher cargar líneas de caché L1/L2 completas de forma óptima.",
      "Porque las listas enlazadas requieren siempre una llamada al sistema (`syscall`) por cada nodo inspeccionado.",
      "Porque los elementos de una lista enlazada deben serializarse a JSON en cada iteración del bucle."
    ],
    correctAnswerIndex: 1,
    explanation: "Las líneas de caché típicas (64 bytes) cargan múltiples elementos contiguos adyacentes de un array en un solo ciclo de memoria. En listas enlazadas, los nodos dispersos por el heap provocan constantes fallos de caché (cache misses) y esperas a la RAM principal.",
    topic: "Estructuras de Datos y Rendimiento",
    difficulty: "intermedio"
  },
  {
    id: "fund-20",
    collectionId: "programming-fundamentals",
    question: "¿En qué consiste la técnica de resolución de colisiones mediante 'Direccionamiento Abierto con Sondeo Lineal' (Open Addressing with Linear Probing) en una Tabla Hash?",
    options: [
      "Cada cubeta (bucket) contiene una lista enlazada que crece indefinidamente para acomodar todos los elementos colisionados.",
      "Si la celda calculada por el hash está ocupada, se examina secuencialmente la siguiente celda disponible (índice `(h + i) % M`) en el arreglo contiguo.",
      "Se invoca una función criptográfica SHA-256 secundaria para redimensionar inmediatamente la tabla completa al doble de su capacidad.",
      "Se descarta el valor previo reemplazándolo de forma destructiva por el nuevo elemento insertado."
    ],
    correctAnswerIndex: 1,
    explanation: "En linear probing, todos los elementos se almacenan directamente en la tabla contigua. La colisión busca el siguiente índice contiguo libre, sufriendo potencialmente de agrupamiento primario (primary clustering) a medida que aumenta el factor de carga.",
    topic: "Estructuras de Datos",
    difficulty: "intermedio"
  },
  {
    id: "fund-21",
    collectionId: "programming-fundamentals",
    question: "¿Qué propiedad intrínseca cumple un Árbol Binario de Búsqueda (BST - Binary Search Tree) bien formado?",
    options: [
      "Todos los nodos hoja deben encontrarse en el mismo nivel de profundidad exacta $h = \\log_2 N$.",
      "Para cualquier nodo $X$, todas las claves del subárbol izquierdo son menores que la clave de $X$, y todas las claves del subárbol derecho son mayores que la clave de $X$.",
      "Cada nodo padre debe tener exactamente tres punteros hijos: izquierdo, derecho y central.",
      "El número total de nodos pares debe ser igual al número total de nodos impares para mantener balance estricto."
    ],
    correctAnswerIndex: 1,
    explanation: "La propiedad BST dicta que para todo nodo $u$, cualquier nodo en su subárbol izquierdo tiene clave $\\le u.key$ (o estrictamente menor en BSTs sin duplicados) y cualquier nodo en el subárbol derecho tiene clave $\\ge u.key$. Esto permite búsquedas en tiempo $O(h)$.",
    topic: "Estructuras Jerárquicas",
    difficulty: "básico"
  },
  {
    id: "fund-22",
    collectionId: "programming-fundamentals",
    question: "¿Qué significa que un algoritmo de ordenación sea 'Estable' (Stable Sort)?",
    options: [
      "Que su consumo de memoria RAM adicional nunca excede $O(1)$ en el peor de los casos.",
      "Que preserva el orden relativo original de aquellos elementos que poseen claves de comparación idénticas tras finalizar la ordenación.",
      "Que no puede lanzar excepciones de desbordamiento ni fallos de segmentación bajo ninguna entrada.",
      "Que su tiempo de ejecución es constante e idéntico para cualquier permutación de entrada de tamaño $N$."
    ],
    correctAnswerIndex: 1,
    explanation: "La estabilidad garantiza que si dos registros tienen el mismo valor de comparación (por ejemplo, ordenar usuarios por apellido cuando ya estaban ordenados por nombre), su secuencia relativa previa se mantiene intacta (e.g. MergeSort es estable, QuickSort estándar no lo es).",
    topic: "Ordenación y Algoritmos",
    difficulty: "intermedio"
  },
  {
    id: "fund-23",
    collectionId: "programming-fundamentals",
    question: "En la codificación de texto universal, ¿por qué UTF-8 se consolidó como el estándar dominante frente a UCS-2 y UTF-16 en la web y el software moderno?",
    options: [
      "Porque limita todos los caracteres del mundo a exactamente 7 bits de longitud fija.",
      "Porque utiliza codificación de longitud variable (1 a 4 bytes) totalmente retrocompatible con ASCII estándar de 1 byte, siendo independiente de la endianness (Little/Big Endian).",
      "Porque comprime automáticamente los caracteres chinos y cirílicos a 4 bits por símbolo.",
      "Porque almacena los emojis en una partición de hardware separada en la tarjeta gráfica."
    ],
    correctAnswerIndex: 1,
    explanation: "UTF-8 representa los 128 caracteres ASCII originales exactamente en los mismos bytes (0x00 a 0x7F) que el código ASCII histórico de 1 byte, y expande de forma variable hasta 4 bytes para el resto de code points de Unicode, sin problemas de orden de bytes de UTF-16 (BOM/endianness).",
    topic: "Codificación y Representación de Datos",
    difficulty: "intermedio"
  },
  {
    id: "fund-24",
    collectionId: "programming-fundamentals",
    question: "¿Qué caracteriza al patrón de manejo de errores basado en tipos `Result<T, E>` / `Either` en comparación con las excepciones tradicionales (`throw` / `try-catch`)?",
    options: [
      "Ignora silenciosamente cualquier condición errónea continuando la ejecución sin registrar eventos.",
      "Convierte los errores en valores explícitos modelados en el sistema de tipos, obligando al compilador y al desarrollador a tratar exhaustivamente los casos de fallo sin desenrollado no local de la pila (stack unwinding).",
      "Obliga a que todos los errores terminen inmediatamente el proceso mediante una llamada a `abort()` del sistema operativo.",
      "Delega el manejo de las excepciones a un hilo demonio en segundo plano que reintenta la operación de forma asíncrona."
    ],
    correctAnswerIndex: 1,
    explanation: "El patrón `Result<T, E>` (popularizado por Haskell, Rust y functional programming) elimina el salto implícito y costoso del unwinding de pila de las excepciones, haciendo que los posibles fallos formen parte visible del contrato de tipos de la función.",
    topic: "Manejo de Errores",
    difficulty: "intermedio"
  },
  {
    id: "fund-25",
    collectionId: "programming-fundamentals",
    question: "En la disciplina de Pruebas Automatizadas (Software Testing), ¿cuál es el postulado fundamental de la 'Pirámide de Pruebas' (Test Pyramid)?",
    options: [
      "La base debe estar constituida mayoritariamente por pruebas manuales de aceptación del cliente, reduciendo las pruebas unitarias a menos del 5%.",
      "Una base amplia de pruebas unitarias rápidas y aisladas, una capa intermedia moderada de pruebas de integración de módulos/componentes, y una cúspide reducida de pruebas End-to-End (E2E) integrales y lentas.",
      "Un número equivalente y exactamente simétrico de pruebas unitarias, de integración, de carga y de penetración de seguridad.",
      "Invertir la mayor parte del presupuesto y tiempo de ejecución en pruebas de interfaz gráfica (UI) automatizadas con navegadores reales."
    ],
    correctAnswerIndex: 1,
    explanation: "Propuesta por Mike Cohn y popularizada por Martin Fowler, la pirámide de pruebas equilibra velocidad, costo de mantenimiento y retroalimentación: las pruebas unitarias son baratas, ultra rápidas y deterministas, mientras las E2E son frágiles, costosas y lentas.",
    topic: "Metodologías de Pruebas",
    difficulty: "básico"
  },
  {
    id: "fund-26",
    collectionId: "programming-fundamentals",
    question: "¿Cuál es el riesgo de aplicar el principio DRY (Don't Repeat Yourself) de forma prematura en una base de código?",
    options: [
      "El compilador no podrá generar código de 64 bits y quedará limitado a 32 bits.",
      "Crear acoplamiento artificial entre componentes no relacionados ('acoplamiento accidental'), haciendo que una abstracción forzada e incorrecta sea mucho más costosa de mantener que una duplicación temporal tolerable.",
      "Provocar que la memoria RAM se sature debido a la creación excesiva de constantes numéricas.",
      "Inhabilitar el uso de ramas y fusiones en sistemas de control de versiones como Git."
    ],
    correctAnswerIndex: 1,
    explanation: "Sandi Metz popularizó la máxima: 'La duplicación es mucho más barata que la abstracción equivocada'. Unificar código idéntico en forma pero diferente en razón de cambio genera acoplamiento frágil entre dominios dispares.",
    topic: "Refactorización y Arquitectura",
    difficulty: "intermedio"
  },
  {
    id: "fund-27",
    collectionId: "programming-fundamentals",
    question: "¿En qué se diferencia una llamada a operación de Entrada/Salida (I/O) 'Bloqueante' de una 'No Bloqueante' (Non-blocking I/O)?",
    options: [
      "La bloqueante suspende la ejecución del hilo actual hasta que los datos están listos o la operación se completa en el kernel; la no bloqueante retorna de inmediato un código de estado (e.g. `EWOULDBLOCK`) si no hay datos disponibles.",
      "La no bloqueante solo se puede utilizar para transmisiones satelitales militares cifradas.",
      "La bloqueante requiere que el disco duro sea de estado sólido (SSD) en lugar de magnético.",
      "La no bloqueante deshabilita el protocolo TCP forzando conexiones directas sin control de flujo por UDP."
    ],
    correctAnswerIndex: 0,
    explanation: "En I/O bloqueante, el planificador del SO pone al hilo en estado 'dormido' (waiting/blocked) hasta que el driver del dispositivo o socket notifica la llegada de datos. En non-blocking I/O, el hilo continúa ejecutándose y consulta o recibe eventos asíncronos (e.g. via epoll/kqueue).",
    topic: "Entrada/Salida y Runtimes",
    difficulty: "intermedio"
  },
  {
    id: "fund-28",
    collectionId: "programming-fundamentals",
    question: "¿Cuál es el propósito y comportamiento de una sentencia 'Assert' (Aserción) en el paradigma de programación defensiva?",
    options: [
      "Formatear cadenas de texto para mostrarlas con estilos enriquecidos en la consola de usuario.",
      "Verificar un invariante o suposición crítica que debe ser invariablemente verdadera durante el desarrollo; si se evalúa como falsa, el programa aborta inmediatamente indicando un error lógico interno del programador.",
      "Atrapar excepciones de red y reintentar la solicitud HTTP con backoff exponencial.",
      "Asignar dinámicamente nuevos permisos de superusuario (root) al proceso actual."
    ],
    correctAnswerIndex: 1,
    explanation: "Las aserciones verifican condiciones que 'nunca deberían ocurrir' si el software está libre de fallos lógicos (invariantes internos). No deben usarse para validación de entrada de usuario o errores operativos recuperables.",
    topic: "Programación Defensiva",
    difficulty: "básico"
  },
  {
    id: "fund-29",
    collectionId: "programming-fundamentals",
    question: "¿En qué consiste la técnica de optimización denominada 'Desenrrollado de Bucles' (Loop Unrolling) implementada por compiladores modernos?",
    options: [
      "Sustituir bucles iterativos por llamadas recursivas profundas en el stack.",
      "Replicar el cuerpo del bucle varias veces en código secuencial directo para reducir la sobrecarga de evaluación de la condición de salto y favorecer la ejecución especulativa de instrucciones por hardware.",
      "Convertir las variables del bucle en punteros volátiles no cacheados.",
      "Ejecutar el bucle de atrás hacia adelante para invertir el sentido de los vectores de memoria."
    ],
    correctAnswerIndex: 1,
    explanation: "El desenrollado de bucles reduce las comparaciones de condición e instrucciones de salto condicional por iteración, incrementando el tamaño del binario pero aumentando drásticamente la tasa de procesamiento por ciclo de reloj.",
    topic: "Optimización de Compiladores",
    difficulty: "avanzado"
  },
  {
    id: "fund-30",
    collectionId: "programming-fundamentals",
    question: "¿Qué es el 'Deadlock' (Interbloqueo) y cuáles son las cuatro condiciones necesarias de Coffman para que se produzca?",
    options: [
      "Un fallo de memoria donde un puntero es liberado dos veces seguidas por el recolector de basura.",
      "Una situación de bloqueo permanente entre procesos que compiten por recursos, requerida por: Exclusión mutua, Retención y espera, No expropiación y Espera circular.",
      "Una sobrecarga del bus PCI Express causada por tasas de transferencia superiores a 128 GB/s.",
      "Un estado donde el procesador detiene sus núcleos debido a temperaturas térmicas críticas que superan los 100°C."
    ],
    correctAnswerIndex: 1,
    explanation: "Edward G. Coffman Jr. demostró en 1971 que el deadlock ocurre si y solo si se cumplen simultáneamente cuatro condiciones: Mutual exclusion, Hold and wait, No preemption y Circular wait. Romper cualquiera de las cuatro previene el interbloqueo.",
    topic: "Sistemas Concurrentes",
    difficulty: "avanzado"
  }
];
