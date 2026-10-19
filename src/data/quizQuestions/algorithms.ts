import type { QuizQuestion } from "@/data/quizTypes";

export const algorithmsQuestions: QuizQuestion[] = [
  {
    id: "algo-q-01",
    collectionId: "algorithms",
    question: "¿Cuál es la complejidad temporal asintótica en el peor de los casos del algoritmo QuickSort y cómo la previene el algoritmo híbrido IntroSort?",
    options: [
      "El peor caso es O(N) y se previene convirtiendo los datos a una lista enlazada.",
      "El peor caso es O(N²) (cuando los pivotes dividen el arreglo de forma extremadamente desbalanceada); IntroSort comienza ejecutando QuickSort, pero conmuta automáticamente a HeapSort O(N log N) si la profundidad de recursión supera 2 * log(N).",
      "El peor caso es O(log N) y se resuelve mediante tablas hash.",
      "QuickSort no tiene peor caso; siempre ejecuta en O(1)."
    ],
    correctAnswerIndex: 1,
    explanation: "QuickSort degrada a O(N²) con pivotes patológicos (ej. arreglo ordenado con pivote extremo). IntroSort (usado en std::sort de C++) aprovecha la velocidad promedio de QuickSort y monitorea la profundidad de la pila de recursión: si supera un umbral, cambia a HeapSort garantizando un peor caso O(N log N).",
    topic: "Algoritmos de Ordenamiento",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-02",
    collectionId: "algorithms",
    question: "¿Por qué el algoritmo de Dijkstra no puede calcular caminos mínimos correctamente en grafos que contienen aristas con pesos negativos?",
    options: [
      "Porque Dijkstra solo funciona en grafos con menos de 10 vértices.",
      "Porque Dijkstra es un algoritmo voraz (greedy) que asume irrevocablemente que una vez que un nodo es extraído de la cola de prioridad su distancia mínima ya es definitiva; una arista con peso negativo posterior podría reducir la distancia de un nodo ya procesado invalidando la invariante.",
      "Porque los pesos negativos provocan un desbordamiento de búfer en memoria.",
      "Porque la cola de prioridad no admite números menores a cero."
    ],
    correctAnswerIndex: 1,
    explanation: "Dijkstra asume que añadir más aristas solo puede incrementar el costo acumulado. Con pesos negativos, un camino más largo en aristas podría tener menor coste total tras haber marcado un nodo como 'visitado definitivo'. Para grafos con pesos negativos se debe usar Bellman-Ford o SPFA.",
    topic: "Algoritmos de Grafos y Caminos Mínimos",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-03",
    collectionId: "algorithms",
    question: "¿Cuál es la complejidad temporal de la estructura Disjoint Set Union (DSU / Union-Find) cuando implementa 'Compresión de Caminos' (Path Compression) y 'Unión por Rango' (Union by Rank)?",
    options: [
      "O(N²).",
      "O(α(N)) por operación (donde α es la función inversa de Ackermann, la cual crece tan lentamente que para cualquier N concebible en el universo es estrictamente menor a 5, comportándose como tiempo casi constante amortizado).",
      "O(N log N).",
      "O(√N)."
    ],
    correctAnswerIndex: 1,
    explanation: "La combinación de aplanar el árbol en cada find (path compression) y colgar el árbol más bajo del más alto en union (union by rank) reduce la cota superior por operación a O(α(N)), convirtiendo a DSU en una de las estructuras de datos más eficientes jamás descubiertas.",
    topic: "Estructuras de Datos Avanzadas y DSU",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-04",
    collectionId: "algorithms",
    question: "¿Qué diferencia existe entre un Árbol AVL y un Árbol Rojo-Negro (Red-Black Tree) en cuanto a balanceo y rendimiento?",
    options: [
      "Los árboles AVL se guardan en archivos de texto y los Rojo-Negro en memoria RAM.",
      "Los AVL imponen un balanceo más estricto (|altura_izq - altura_der| ≤ 1), resultando en árboles más compactos con búsquedas más rápidas; los Rojo-Negro relajan el balanceo (la rama más larga es a lo sumo el doble de la más corta), requiriendo menos rotaciones durante inserciones y eliminaciones masivas.",
      "Los árboles Rojo-Negro solo permiten almacenar números pares.",
      "Los árboles AVL no admiten eliminaciones de nodos."
    ],
    correctAnswerIndex: 1,
    explanation: "AVL es óptimo para escenarios con alta tasa de lecturas (lookup-heavy) gracias a su menor altura estricta. Red-Black Tree es preferido en bibliotecas estándar (std::map en C++, TreeMap en Java) para propósitos generales porque amortiza mejor los costos de rotación en inserciones y borrados continuos.",
    topic: "Árboles Binarios Balanceados",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-05",
    collectionId: "algorithms",
    question: "¿Cómo calcula un 'Fenwick Tree' (Binary Indexed Tree / BIT) sumas acumuladas por rango y actualizaciones puntuales en tiempo O(log N)?",
    options: [
      "Almacenando todas las combinaciones posibles en una matriz bidimensional.",
      "Aprovechando la representación binaria de los índices mediante la operación a nivel de bits 'i & (-i)' para aislar el bit menos significativo activo (LSB), permitiendo que cada posición almacene la suma de un rango de tamaño 2^k.",
      "Ordenando el arreglo en cada actualización con QuickSort.",
      "Dividiendo el arreglo en bloques fijos de tamaño √N."
    ],
    correctAnswerIndex: 1,
    explanation: "El Fenwick Tree es una genialidad de manipulación de bits: 'i & (-i)' extrae la potencia de 2 más baja presente en el índice. Sumar hacia atrás saltando LSB acumula el prefijo en O(log N), y avanzar sumando LSB propaga actualizaciones puntuales en O(log N) con memoria O(N) idéntica a un array plano.",
    topic: "Estructuras de Datos y Fenwick Tree",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-06",
    collectionId: "algorithms",
    question: "¿Cuál es la complejidad temporal óptima para resolver el problema de la 'Subsecuencia Creciente Más Larga' (Longest Increasing Subsequence - LIS) y qué técnica la logra?",
    options: [
      "O(N³) con fuerza bruta recursiva.",
      "O(N log N) combinando Programación Dinámica con Búsqueda Binaria (técnica de 'Patience Sorting' manteniendo un arreglo de colas con el elemento final mínimo).",
      "O(N) mediante una sola pasada con dos punteros.",
      "O(2^N) utilizando backtracking con poda."
    ],
    correctAnswerIndex: 1,
    explanation: "La solución clásica con programación dinámica simple es O(N²). Al mantener un arreglo auxiliar 'tails' ordenado donde tails[i] almacena el valor final más pequeño de una subsecuencia creciente de longitud i+1, cada nuevo elemento puede insertarse o actualizarse mediante búsqueda binaria en O(log N), logrando O(N log N).",
    topic: "Programación Dinámica y Optimización",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-07",
    collectionId: "algorithms",
    question: "¿Qué propiedad matemática debe cumplir la función heurística h(n) en el algoritmo A* para garantizar que el camino encontrado sea estrictamente óptimo (admisibilidad)?",
    options: [
      "h(n) debe ser siempre mayor que el costo real para acelerar la convergencia.",
      "h(n) debe ser admisible: nunca debe sobreestimar el costo real para alcanzar el nodo objetivo desde n (h(n) ≤ h*(n), con h(objetivo) = 0).",
      "h(n) debe ser un número entero negativo.",
      "h(n) debe calcularse exclusivamente mediante funciones trigonométricas."
    ],
    correctAnswerIndex: 1,
    explanation: "Si la heurística de A* es admisible (optimista, nunca sobreestima el costo remanente), el algoritmo garantiza matemáticamente encontrar el camino de menor costo posible. Si además cumple la condición de consistencia (desigualdad triangular), nunca necesitará reabrir nodos cerrados.",
    topic: "Búsqueda Heurística y Algoritmo A*",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-08",
    collectionId: "algorithms",
    question: "¿Qué truco a nivel de bits (Bitwise manipulation) permite comprobar de forma instantánea si un número entero positivo N es una potencia de dos exacta?",
    options: [
      "N | (N + 1) == 0",
      "(N & (N - 1)) == 0",
      "N ^ (N >> 1) == 1",
      "~N == N"
    ],
    correctAnswerIndex: 1,
    explanation: "Una potencia de 2 tiene exactamente un solo bit en 1 en binario (ej. 8 es 1000₂). Al restarle 1, todos los bits inferiores se vuelven 1 y ese bit se vuelve 0 (7 es 0111₂). Aplicar AND bit a bit entre ambos resulta en 0 exactamente si y solo si N es potencia de 2.",
    topic: "Manipulación de Bits",
    difficulty: "básico"
  },
  {
    id: "algo-q-09",
    collectionId: "algorithms",
    question: "¿Cuál es la complejidad temporal de construir un 'Binary Heap' (Montículo Binario) a partir de un arreglo no ordenado de N elementos mediante 'buildHeap' (heapify bottom-up)?",
    options: [
      "O(N log N) porque se realizan N inserciones consecutivas.",
      "O(N) (tiempo lineal, demostrado por la suma de la serie geométrica que pondera la altura de cada nivel por la cantidad de nodos en ese nivel).",
      "O(N²).",
      "O(1)."
    ],
    correctAnswerIndex: 1,
    explanation: "Insertar N elementos uno a uno cuesta O(N log N). Sin embargo, construir el heap de abajo hacia arriba (desde n/2 hacia 0 llamando siftDown) aprovecha que la mayoría de los nodos están en las hojas con altura 0 o 1; la suma matemática de h * (n / 2^(h+1)) converge a O(N).",
    topic: "Heaps y Complejidad Amortizada",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-10",
    collectionId: "algorithms",
    question: "¿Cómo resuelve el algoritmo KMP (Knuth-Morris-Pratt) la búsqueda de subcadenas en tiempo lineal O(N + M)?",
    options: [
      "Ordenando los caracteres de la cadena alfabéticamente.",
      "Precalcula un arreglo de prefijos (tabla π o función de fallo LPS) sobre el patrón que indica la longitud del prefijo propio más largo que también es sufijo; ante una discrepancia, salta caracteres del patrón sin retroceder jamás el puntero del texto principal.",
      "Calcula sumas hash rodantes sobre la cadena.",
      "Convierte la cadena en un árbol B+Tree en disco."
    ],
    correctAnswerIndex: 1,
    explanation: "El algoritmo ingenuo retrocede el cursor del texto principal ante un fallo, degradándose a O(N * M). KMP analiza las repeticiones internas del patrón en la tabla LPS (Longest Prefix Suffix), sabiendo exactamente qué prefijo del patrón coincide con lo que ya se leyó.",
    topic: "Algoritmos de Cadenas y KMP",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-11",
    collectionId: "algorithms",
    question: "¿Qué es la técnica de 'Lazy Propagation' (propagación perezosa) en un 'Segment Tree'?",
    options: [
      "Postergar la compilación del código fuente hasta la ejecución.",
      "Una optimización para actualizaciones de rangos completos en O(log N): en lugar de actualizar todos los nodos descendientes de inmediato, almacena el valor pendiente en una bandera 'lazy' y solo propaga el cambio a los hijos cuando una consulta futura desciende específicamente a ellos.",
      "Ejecutar las consultas en un hilo secundario con baja prioridad.",
      "Descartar las actualizaciones que ocurran fuera del horario laboral."
    ],
    correctAnswerIndex: 1,
    explanation: "Sin propagación perezosa, actualizar un rango [L, R] en un Segment Tree exigiría tocar todas las hojas individuales en O(N). Lazy propagation pospone la actualización en los subárboles no consultados, logrando que tanto lecturas como actualizaciones de rango operen en O(log N).",
    topic: "Segment Trees y Lazy Propagation",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-12",
    collectionId: "algorithms",
    question: "¿Cómo encuentra el algoritmo de Tarjan los 'Componentes Fuertemente Conexos' (SCC) de un grafo dirigido en una sola pasada O(V + E)?",
    options: [
      "Ejecutando Dijkstra desde cada vértice del grafo.",
      "Utilizando un recorrido DFS que mantiene una pila de nodos y asigna a cada nodo un índice de descubrimiento (dfn) y un valor de enlace inferior ('lowlink' que representa el nodo alcanzable con menor índice accesible por aristas del árbol o aristas cruzadas en la pila).",
      "Calculando la matriz inversa de adyacencia mediante eliminación gaussiana.",
      "Eliminando las aristas con pesos impares sucesivamente."
    ],
    correctAnswerIndex: 1,
    explanation: "El algoritmo de Tarjan identifica SCCs en una sola búsqueda en profundidad: cuando DFS concluye un nodo cuyo lowlink coincide con su propio índice de descubrimiento, todos los nodos apilados por encima de él forman un Componente Fuertemente Conexo.",
    topic: "Grafos y Componentes Fuertemente Conexos",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-13",
    collectionId: "algorithms",
    question: "¿Qué estructura de datos permite calcular el valor máximo en una 'Ventana Deslizante' (Sliding Window Maximum) de tamaño K en tiempo amortizado O(N)?",
    options: [
      "Una lista enlazada simple sin índices.",
      "Una Cola Monótona Doble (Monotonic Deque) que almacena índices y mantiene los elementos en orden estrictamente decreciente, expulsando por atrás los elementos menores al nuevo valor y por delante los índices que salen de la ventana.",
      "Una matriz de adyacencia de tamaño K × K.",
      "Un árbol binario no balanceado."
    ],
    correctAnswerIndex: 1,
    explanation: "Usar un heap para la ventana deslizante costaría O(N log K). Con un Monotonic Deque, cada elemento ingresa y se expulsa a lo sumo una vez; el frente de la cola siempre contiene el índice del elemento máximo de la ventana actual en tiempo O(1) por paso.",
    topic: "Estructuras Monótonas y Ventana Deslizante",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-14",
    collectionId: "algorithms",
    question: "¿Qué establece el Teorema Maestro (Master Theorem) para resolver recurrencias de divide y vencerás de la forma T(N) = a * T(N / b) + f(N)?",
    options: [
      "Que todos los algoritmos recursivos pueden convertirse en funciones iterativas en O(1).",
      "Compara el crecimiento polinómico de f(N) contra N^(log_b(a)): si N^(log_b(a)) domina polinómicamente, T(N) = Θ(N^(log_b(a))); si coinciden, T(N) = Θ(N^(log_b(a)) * log N); si f(N) domina y cumple la condición de regularidad, T(N) = Θ(f(N)).",
      "Que el número de operaciones nunca puede ser impar.",
      "Que la memoria utilizada por la pila recursiva es inversamente proporcional a la constante b."
    ],
    correctAnswerIndex: 1,
    explanation: "El Teorema Maestro categoriza en 3 casos deterministas el balance entre el trabajo de dividir en 'a' subproblemas de tamaño 'N/b' frente al trabajo de combinar 'f(N)', proveyendo la cota asintótica de algoritmos como MergeSort o Strassen instantáneamente.",
    topic: "Análisis de Algoritmos y Complejidad",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-15",
    collectionId: "algorithms",
    question: "¿Cuál es la diferencia fundamental entre el algoritmo de Kruskal y el algoritmo de Prim para encontrar el Árbol de Expansión Mínima (MST)?",
    options: [
      "Kruskal solo funciona en grafos dirigidos y Prim en no dirigidos.",
      "Kruskal es un algoritmo basado en aristas (ordena todas las aristas globalmente y las agrega codiciosamente usando DSU para evitar ciclos: O(E log E)); Prim es un algoritmo basado en vértices (hace crecer un único árbol conectado agregando la arista más barata con una cola de prioridad: O(E log V)).",
      "Prim genera árboles que no conectan todos los nodos del grafo.",
      "Kruskal requiere que el grafo sea bipartito."
    ],
    correctAnswerIndex: 1,
    explanation: "Kruskal procesa aristas globalmente sin importar si están desconectadas al inicio (crea un bosque que se va unificando con DSU, ideal para grafos dispersos). Prim expande un único componente continuo desde un nodo semilla con min-heap (ideal para grafos densos).",
    topic: "Árboles de Expansión Mínima (MST)",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-16",
    collectionId: "algorithms",
    question: "¿Qué es el 'Reservoir Sampling' (Muestreo de Reservorio) y en qué contexto es el algoritmo idóneo?",
    options: [
      "Un método para medir la cantidad de agua utilizada en la refrigeración de servidores.",
      "Un algoritmo probabilístico que selecciona al azar una muestra de K elementos con probabilidad uniforme idéntica (K/N) a partir de un flujo continuo de datos de longitud N desconocida o infinita en una sola pasada y utilizando solo O(K) de memoria.",
      "Un algoritmo para encontrar el camino más corto en tuberías hidráulicas.",
      "Un sistema para comprimir bases de datos relacionales sin pérdida."
    ],
    correctAnswerIndex: 1,
    explanation: "Para muestrear K elementos de un flujo masivo sin saber cuántos elementos llegarán en total (sin poder guardarlos todos en RAM), Reservoir Sampling almacena los primeros K; para el elemento i-ésimo, lo reemplaza con probabilidad K/i. Al final, cada elemento tuvo exactamente K/N de probabilidad.",
    topic: "Algoritmos Probabilísticos y Streaming",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-17",
    collectionId: "algorithms",
    question: "¿En qué consiste la técnica de 'Pila Monótona' (Monotonic Stack) para resolver el problema del 'Próximo Elemento Mayor' (Next Greater Element)?",
    options: [
      "En ordenar toda la pila en orden alfabético antes de cada lectura.",
      "Mantiene una pila donde los elementos se almacenan en orden estrictamente creciente o decreciente; al procesar un nuevo número, desapila todos los elementos que violen el orden, resolviendo para cada elemento desapilado su próximo elemento mayor en O(N) total.",
      "En utilizar memoria no volátil para evitar perder datos si se apaga la máquina.",
      "En duplicar los valores impares para evitar divisiones fraccionarias."
    ],
    correctAnswerIndex: 1,
    explanation: "En lugar de buscar con un bucle anidado O(N²), la pila monótona mantiene una secuencia ordenada de candidatos. Como cada elemento entra a la pila una sola vez y sale a lo sumo una vez, la complejidad temporal agregada es estrictamente O(N).",
    topic: "Estructuras Monótonas",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-18",
    collectionId: "algorithms",
    question: "¿Qué problema clásico de flujo en redes resuelve el algoritmo de Edmonds-Karp y qué cota temporal garantiza?",
    options: [
      "El ordenamiento de paquetes de red en tiempo O(1).",
      "Calcula el Flujo Máximo (Max Flow) en una red utilizando BFS para encontrar siempre el camino aumentante más corto en número de aristas dentro del algoritmo de Ford-Fulkerson, garantizando una complejidad polinómica estricta de O(V * E²).",
      "La detección de virus informáticos en flujos HTTP.",
      "La asignación de frecuencias de radio en redes celulares."
    ],
    correctAnswerIndex: 1,
    explanation: "Ford-Fulkerson genérico puede converger infinitamente con pesos irracionales o requerir O(E * MaxFlow) con DFS. Edmonds-Karp utiliza BFS para elegir el camino aumentante con menos aristas en la red residual, demostrando que la distancia al sumidero crece monótonamente en O(V * E²).",
    topic: "Flujo en Redes y Algoritmos Polinómicos",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-19",
    collectionId: "algorithms",
    question: "¿Cómo opera el algoritmo de 'Floyd de la Tortuga y la Liebre' (Cycle Detection) para detectar ciclos en una lista enlazada o secuencia generadora?",
    options: [
      "Midiendo el tiempo de respuesta del servidor con un cronómetro.",
      "Avanza dos punteros a diferentes velocidades: la 'Tortuga' avanza 1 nodo por paso y la 'Liebre' avanza 2 nodos por paso; si existe un ciclo en la secuencia, la liebre eventualmente alcanzará a la tortuga dentro del ciclo en O(N) tiempo y O(1) espacio adicional.",
      "Comparando el valor de cada nodo con una tabla hash de 1 millón de entradas.",
      "Eliminando los nodos que contengan punteros nulos."
    ],
    correctAnswerIndex: 1,
    explanation: "El algoritmo de detección de ciclos de Floyd no requiere memoria auxiliar (O(1) memoria, a diferencia de un HashSet de punteros O(N)). La diferencia de velocidad relativa es 1 paso por iteración, garantizando que el puntero rápido alcance al lento en a lo sumo una vuelta completa al ciclo.",
    topic: "Algoritmos de Dos Punteros",
    difficulty: "básico"
  },
  {
    id: "algo-q-20",
    collectionId: "algorithms",
    question: "¿Qué garantiza el 'Algoritmo de Huffman' en la teoría de compresión de datos sin pérdida?",
    options: [
      "Que todos los archivos comprimidos ocuparán exactamente el 50% de su tamaño original.",
      "Construye un árbol binario voraz (greedy) combinando los nodos de menor frecuencia para generar un código prefijo óptimo de longitud variable, donde los símbolos más frecuentes reciben códigos con menos bits, minimizando la longitud ponderada esperada del mensaje.",
      "Que los datos comprimidos no pueden ser leídos por usuarios no autorizados.",
      "Que el proceso de descompresión requiere menos de 1 KB de memoria RAM."
    ],
    correctAnswerIndex: 1,
    explanation: "La codificación de Huffman produce un código prefijo libre de ambigüedad (ningún código es prefijo de otro). Al asignar los caminos más cortos del árbol a los caracteres más habituales, alcanza la entropía teórica de compresión de símbolos independientes.",
    topic: "Algoritmos Voraces y Compresión",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-21",
    collectionId: "algorithms",
    question: "¿Qué es un 'Trie' (Árbol de Prefijos) y cuál es su complejidad temporal para buscar una palabra de longitud L entre N palabras?",
    options: [
      "O(N * L).",
      "O(L) (depende estrictamente de la longitud de la clave buscada y es completamente independiente de la cantidad total N de palabras almacenadas en la estructura).",
      "O(log N).",
      "O(N²)."
    ],
    correctAnswerIndex: 1,
    explanation: "En un Trie cada arista representa un carácter y los nodos representan prefijos compartidos. Buscar o insertar una cadena de longitud L toma L transiciones de nodos (O(L)), superando a tablas hash al permitir autocompletado y búsquedas de prefijos naturales.",
    topic: "Estructuras de Cadenas y Tries",
    difficulty: "básico"
  },
  {
    id: "algo-q-22",
    collectionId: "algorithms",
    question: "¿Cómo optimiza el algoritmo 'QuickSelect' la búsqueda del k-ésimo elemento menor de un arreglo frente a ordenar el arreglo completo?",
    options: [
      "Ordenando el arreglo con MergeSort en O(N log N).",
      "Aplica la partición de QuickSort pero solo desciende recursivamente a la mitad que contiene el índice K buscado (descartando la otra mitad), logrando una complejidad temporal promedio de O(N) lineal en lugar de O(N log N).",
      "Calculando la media aritmética de los extremos.",
      "Utilizando un contador atómico de hardware."
    ],
    correctAnswerIndex: 1,
    explanation: "A diferencia de QuickSort que recurre en ambas mitades (N + N/2 + N/4... = 2N para QuickSelect promedio vs N log N para QuickSort), QuickSelect descarta una partición en cada paso, sumando una serie geométrica que converge a O(N) lineal promedio.",
    topic: "Algoritmos de Selección",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-23",
    collectionId: "algorithms",
    question: "¿Qué es el 'Algoritmo de Mo' (Mo's Algorithm) para consultas de rango en arreglos?",
    options: [
      "Un algoritmo para resolver ecuaciones diferenciales en tiempo real.",
      "Una técnica fuera de línea (offline) que ordena las Q consultas por bloques de tamaño √N (ordenando por L / √N y luego por R), reduciendo los movimientos totales de los punteros L y R a O((N + Q) * √N).",
      "Un método de cifrado de contraseñas bancarias.",
      "Un protocolo para transferir imágenes por satélite."
    ],
    correctAnswerIndex: 1,
    explanation: "Si las consultas son estáticas (sin actualizaciones), responderlas en el orden que llegan movería punteros desordenadamente en O(Q * N). Al agruparlas por bloques de tamaño √N, el puntero izquierdo se mueve poco dentro del bloque y el derecho avanza monótonamente, optimizando a O((N+Q)√N).",
    topic: "Descomposición Sqrt y Consultas Offline",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-24",
    collectionId: "algorithms",
    question: "¿Qué es un 'Treap' (Cartesian Tree) en estructuras de datos?",
    options: [
      "Una trampa de software para capturar excepciones en tiempo de ejecución.",
      "Un árbol binario híbrido que satisface simultáneamente dos invariantes: es un Árbol Binario de Búsqueda (BST) respecto a las claves de los elementos y es un Heap respecto a prioridades asignadas aleatoriamente a cada nodo, garantizando balance probabilístico O(log N).",
      "Una estructura para comprimir archivos de audio MP3.",
      "Una cola circular implementada en registros del kernel."
    ],
    correctAnswerIndex: 1,
    explanation: "El nombre proviene de Tree + Heap. Al asignar prioridades aleatorias independientes a cada nodo y mantener la propiedad de Heap con rotaciones locales mientras se preserva el orden de BST de las claves, el Treap tiene forma equivalente a haber insertado las claves en orden aleatorio, logrando altura esperada O(log N).",
    topic: "Estructuras de Datos Aleatorizadas",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-25",
    collectionId: "algorithms",
    question: "¿Qué permite calcular el 'Algoritmo de Manacher' en tiempo lineal estricto O(N)?",
    options: [
      "El número de ciclos Hamiltonianos en un grafo no dirigido.",
      "Encuentra la subcadena palíndroma más larga (y los radios de todos los palíndromos centrados en cada posición) de una cadena de texto en O(N) aprovechando las simetrías de los palíndromos previamente detectados para evitar comparaciones repetidas.",
      "El flujo de potencia eléctrica en una red de distribución.",
      "La solución a un laberinto tridimensional sin ciclos."
    ],
    correctAnswerIndex: 1,
    explanation: "La expansión ingenua alrededor de centros palíndromos toma O(N²). Manacher mantiene el palíndromo que se extiende más a la derecha (centro C y borde R): cualquier nuevo centro dentro de él puede reutilizar el radio de su imagen especular, avanzando el límite sin reiniciar desde cero.",
    topic: "Algoritmos de Cadenas y Palíndromos",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-26",
    collectionId: "algorithms",
    question: "¿Qué diferencia existe entre 'Memorización' (Memoization) y 'Tabulación' (Tabulation) en Programación Dinámica?",
    options: [
      "La memorización solo se puede programar en lenguaje C y la tabulación en Python.",
      "La memorización es un enfoque descendente (Top-Down) con recursión que almacena los resultados de subproblemas en un mapa o arreglo a medida que se computan; la tabulación es un enfoque ascendente (Bottom-Up) iterativo que llena una tabla desde los casos base evitando sobrecostos de la pila de llamadas.",
      "La tabulación solo funciona con matrices de tres dimensiones.",
      "No existe diferencia; son sinónimos absolutos."
    ],
    correctAnswerIndex: 1,
    explanation: "Top-down (memoization) solo calcula los estados estrictamente necesarios para la respuesta final pero incurre en la sobrecarga de frames de recursión. Bottom-up (tabulation) computa todos los estados secuencialmente en bucles planos, permitiendo optimizaciones de espacio (como retener solo las últimas dos filas).",
    topic: "Programación Dinámica",
    difficulty: "básico"
  },
  {
    id: "algo-q-27",
    collectionId: "algorithms",
    question: "¿Cuál es la complejidad temporal del 'Algoritmo de Floyd-Warshall' para caminos mínimos entre todos los pares de vértices?",
    options: [
      "O(V * E).",
      "O(V³) (tres bucles anidados sobre el número de vértices k, i, j evaluando si 'dist[i][j] > dist[i][k] + dist[k][j]').",
      "O(E log V).",
      "O(V + E)."
    ],
    correctAnswerIndex: 1,
    explanation: "Floyd-Warshall utiliza programación dinámica de forma elegante: en cada paso k, actualiza las distancias considerando el vértice k como nodo intermedio potencial. Opera en O(V³) para todos los pares y puede detectar ciclos negativos si dist[i][i] < 0.",
    topic: "Algoritmos de Grafos y Programación Dinámica",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-28",
    collectionId: "algorithms",
    question: "¿Qué es el 'Algoritmo de Búsqueda Binaria de Respuestas' (Binary Search on Answer)?",
    options: [
      "Buscar una palabra en el diccionario de la Real Academia Española.",
      "Un patrón donde en lugar de buscar un elemento en un arreglo, se realiza búsqueda binaria sobre el rango numérico de respuestas posibles evaluando una función de predicado monotónica 'esPosible(X)'; si es posible, se acota el rango hacia un extremo para encontrar el mínimo o máximo óptimo en O(log(Rango) * Costo_Verificación).",
      "Buscar un registro en una base de datos mediante su clave foránea.",
      "Un método para responder preguntas en exámenes de opción múltiple."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando un problema de optimización 'minimizar el valor máximo' tiene la propiedad monótona de que si X es factible entonces cualquier valor > X también lo es, se puede buscar binariamente el valor exacto de la solución evaluando la factibilidad en cada paso.",
    topic: "Técnicas de Búsqueda Binaria",
    difficulty: "intermedio"
  },
  {
    id: "algo-q-29",
    collectionId: "algorithms",
    question: "¿Qué es 'Heavy-Light Decomposition' (HLD) en árboles?",
    options: [
      "Un método para talar árboles en ingeniería forestal.",
      "Una técnica que particiona las aristas de un árbol en cadenas 'pesadas' (hacia el hijo con mayor subárbol) y aristas 'ligeras', permitiendo descomponer cualquier camino entre dos nodos del árbol en a lo sumo O(log N) caminos continuos mapeables a un Segment Tree para consultas y actualizaciones en O(log² N).",
      "Un algoritmo para calcular el peso molecular de proteínas.",
      "Un formato de compresión para archivos gráficos en formato SVG."
    ],
    correctAnswerIndex: 1,
    explanation: "HLD aplana los caminos de un árbol en una estructura lineal donde las cadenas pesadas ocupan rangos continuos contiguos en el recorrido de Euler. Esto permite aplicar Segment Trees o Fenwick Trees para responder consultas de caminos entre cualquier par de nodos en O(log² N).",
    topic: "Algoritmos Avanzados en Árboles",
    difficulty: "avanzado"
  },
  {
    id: "algo-q-30",
    collectionId: "algorithms",
    question: "¿Cuál es la característica definitoria de la clase de complejidad 'NP-Completo' (NP-Complete)?",
    options: [
      "Problemas que ninguna computadora moderna puede resolver bajo ninguna circunstancia.",
      "Un problema está en NP-Completo si está en NP (una solución propuesta puede verificarse en tiempo polinómico) Y es NP-Duro (cualquier otro problema en NP puede reducirse polinómicamente a él); si se encontrara un algoritmo polinómico para uno solo de ellos, se demostraría P = NP.",
      "Algoritmos que solo pueden ejecutarse en computadoras cuánticas.",
      "Problemas matemáticos que no admiten representación binaria."
    ],
    correctAnswerIndex: 1,
    explanation: "Los problemas NP-Completos (como SAT, Clique, TSP decision, Mochila 0/1) son los problemas más difíciles de la clase NP. Por el Teorema de Cook-Levin, resolver cualquiera de ellos en tiempo polinómico O(N^k) resolvería simultáneamente miles de problemas computacionales fundamentales.",
    topic: "Teoría de la Computación y Complejidad",
    difficulty: "intermedio"
  }
];
