import type { QuizQuestion } from "@/data/quizTypes";

export const algorithmsQuestions: QuizQuestion[] = [
  {
    "id": "algorithms-q-01",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Secuencias y almacenamiento), ¿qué función técnica cumple «Vectores dinámicos»?",
    "options": [
      "Reserva capacidad contigua y crece por bloques para ofrecer acceso constante y anexado amortizado.",
      "Usa nodos ficticios para eliminar casos especiales al insertar o borrar en los extremos al operar.",
      "Empaqueta campos y valores para reducir memoria sin perder las operaciones necesarias del workload.",
      "Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Vectores dinámicos (Secuencias y almacenamiento): Reservan capacidad contigua y crecen por bloques para ofrecer acceso constante y anexado amortizado.",
    "topic": "Secuencias y almacenamiento",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-02",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Listas con centinela» en secuencias y almacenamiento?",
    "options": [
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales al operar.",
      "Usa nodos ficticios para eliminar casos especiales al insertar o borrar en los extremos.",
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada al operar.",
      "Encuentra el polígono mínimo que contiene un conjunto descartando giros interiores al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Listas con centinela (Secuencias y almacenamiento): Usan nodos ficticios para eliminar casos especiales al insertar o borrar en los extremos.",
    "topic": "Secuencias y almacenamiento",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-03",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «Buffers circulares»?",
    "options": [
      "Reserva capacidad contigua y crece por bloques para ofrecer acceso constante y anexado amortizado al operar.",
      "Empaqueta campos y valores para reducir memoria sin perder las operaciones necesarias del workload al operar.",
      "Reutilizan un arreglo mediante índices modulares para mantener una cola acotada sin desplazar elementos.",
      "Usa nodos ficticios para eliminar casos especiales al insertar o borrar en los extremos de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Buffers circulares (Secuencias y almacenamiento): Reutilizan un arreglo mediante índices modulares para mantener una cola acotada sin desplazar elementos.",
    "topic": "Secuencias y almacenamiento",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-04",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Matrices dispersas»?",
    "options": [
      "Reutilizan un arreglo mediante índices modulares para mantener una cola acotada sin desplazar elementos en ejecución.",
      "Empaqueta campos y valores para reducir memoria sin perder las operaciones necesarias del workload de forma clara.",
      "Reserva capacidad contigua y crece por bloques para ofrecer acceso constante y anexado amortizado de forma segura.",
      "Guardan solo entradas no nulas mediante coordenadas o filas comprimidas cuando el espacio denso sería prohibitivo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Matrices dispersas (Secuencias y almacenamiento): Guardan solo entradas no nulas mediante coordenadas o filas comprimidas cuando el espacio denso sería prohibitivo.",
    "topic": "Secuencias y almacenamiento",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-05",
    "collectionId": "algorithms",
    "question": "Respecto a secuencias y almacenamiento en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Representaciones compactas»?",
    "options": [
      "Empaqueta campos y valores para reducir memoria sin perder las operaciones necesarias del workload al operar.",
      "Reserva capacidad contigua y crece por bloques para ofrecer acceso constante y anexado amortizado.",
      "Usa nodos ficticios para eliminar casos especiales al insertar o borrar en los extremos al operar.",
      "Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Representaciones compactas (Secuencias y almacenamiento): Empaquetan campos y valores para reducir memoria sin perder las operaciones necesarias del workload.",
    "topic": "Secuencias y almacenamiento",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-06",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Árboles avanzados), ¿qué función técnica cumple «Árboles AVL»?",
    "options": [
      "Agrupa muchas claves por nodo para reducir accesos de página en almacenamiento secundario al operar.",
      "Mantiene alturas casi iguales mediante rotaciones para garantizar búsqueda logarítmica estricta.",
      "Anotan máximos de subárbol para localizar solapamientos sin revisar todos los rangos al evaluar.",
      "Codifica restricciones de color que limitan altura con menos rotaciones durante actualizaciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Árboles AVL (Árboles avanzados): Mantienen alturas casi iguales mediante rotaciones para garantizar búsqueda logarítmica estricta.",
    "topic": "Árboles avanzados",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-07",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Árboles rojo-negro» en árboles avanzados?",
    "options": [
      "Agrupa muchas claves por nodo para reducir accesos de página en almacenamiento secundario al operar.",
      "Anotan máximos de subárbol para localizar solapamientos sin revisar todos los rangos al evaluar.",
      "Codifica restricciones de color que limitan altura con menos rotaciones durante actualizaciones.",
      "Mantiene alturas casi iguales mediante rotaciones para garantizar búsqueda logarítmica estricta."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Árboles rojo-negro (Árboles avanzados): Codifican restricciones de color que limitan altura con menos rotaciones durante actualizaciones.",
    "topic": "Árboles avanzados",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-08",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «B-trees y B+ trees»?",
    "options": [
      "Anotan máximos de subárbol para localizar solapamientos sin revisar todos los rangos al operar.",
      "Minimiza inserciones, borrados y sustituciones con estados de programación dinámica al operar.",
      "Divide el plano o consulta un índice espacial para reducir candidatos por distancia al operar.",
      "Agrupa muchas claves por nodo para reducir accesos de página en almacenamiento secundario."
    ],
    "correctAnswerIndex": 3,
    "explanation": "B-trees y B+ trees (Árboles avanzados): Agrupan muchas claves por nodo para reducir accesos de página en almacenamiento secundario.",
    "topic": "Árboles avanzados",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-09",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Tries y radix trees»?",
    "options": [
      "Recorren prefijos por componentes de clave y comprimen caminos para búsquedas textuales predecibles.",
      "Mantiene alturas casi iguales mediante rotaciones para garantizar búsqueda logarítmica estricta.",
      "Codifica restricciones de color que limitan altura con menos rotaciones durante actualizaciones.",
      "Agrupa muchas claves por nodo para reducir accesos de página en almacenamiento secundario al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tries y radix trees (Árboles avanzados): Recorren prefijos por componentes de clave y comprimen caminos para búsquedas textuales predecibles.",
    "topic": "Árboles avanzados",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-10",
    "collectionId": "algorithms",
    "question": "Respecto a árboles avanzados en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Árboles de intervalos»?",
    "options": [
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al operar.",
      "Anotan máximos de subárbol para localizar solapamientos sin revisar todos los rangos.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.",
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Árboles de intervalos (Árboles avanzados): Anotan máximos de subárbol para localizar solapamientos sin revisar todos los rangos.",
    "topic": "Árboles avanzados",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-11",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Hashing en profundidad), ¿qué función técnica cumple «Funciones hash y distribución»?",
    "options": [
      "Minimiza inserciones, borrados y sustituciones con estados de programación dinámica al operar.",
      "Divide el plano o consulta un índice espacial para reducir candidatos por distancia al operar.",
      "Dispersan claves de forma estable para limitar colisiones y evitar patrones adversariales.",
      "Superponen niveles aleatorios para buscar e insertar con costo esperado logarítmico al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Funciones hash y distribución (Hashing en profundidad): Dispersan claves de forma estable para limitar colisiones y evitar patrones adversariales.",
    "topic": "Hashing en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-12",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Encadenamiento separado» en hashing en profundidad?",
    "options": [
      "Dispersan claves de forma estable para limitar colisiones y evitar patrones adversariales al operar.",
      "Busca ranuras alternativas dentro de la tabla y depende de una carga controlada para rendir bien.",
      "Ofrece pocas posiciones candidatas y desplaza claves hasta encontrar espacio o detectar un ciclo.",
      "Mantiene una colección por bucket, conservando inserciones aun cuando varias claves colisionan."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Encadenamiento separado (Hashing en profundidad): Mantiene una colección por bucket, conservando inserciones aun cuando varias claves colisionan.",
    "topic": "Hashing en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-13",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «Direccionamiento abierto»?",
    "options": [
      "Busca ranuras alternativas dentro de la tabla y depende de una carga controlada para rendir bien al operar.",
      "Dispersan claves de forma estable para limitar colisiones y evitar patrones adversariales al operar.",
      "Mantiene una colección por bucket, conservando inserciones aun cuando varias claves colisionan.",
      "Ofrece pocas posiciones candidatas y desplaza claves hasta encontrar espacio o detectar un ciclo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Direccionamiento abierto (Hashing en profundidad): Busca ranuras alternativas dentro de la tabla y depende de una carga controlada para rendir bien.",
    "topic": "Hashing en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-14",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Cuckoo hashing»?",
    "options": [
      "Dispersan claves de forma estable para limitar colisiones y evitar patrones adversariales al operar.",
      "Ofrece pocas posiciones candidatas y desplaza claves hasta encontrar espacio o detectar un ciclo.",
      "Mantiene una colección por bucket, conservando inserciones aun cuando varias claves colisionan.",
      "Busca ranuras alternativas dentro de la tabla y depende de una carga controlada para rendir bien."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cuckoo hashing (Hashing en profundidad): Ofrece pocas posiciones candidatas y desplaza claves hasta encontrar espacio o detectar un ciclo.",
    "topic": "Hashing en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-15",
    "collectionId": "algorithms",
    "question": "Respecto a hashing en profundidad en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Filtros de Bloom»?",
    "options": [
      "Busca ranuras alternativas dentro de la tabla y depende de una carga controlada para rendir bien al operar.",
      "Ofrece pocas posiciones candidatas y desplaza claves hasta encontrar espacio o detectar un ciclo al operar.",
      "Combina bits y varios hashes para descartar ausencias sin falsos negativos, aceptando falsos positivos.",
      "Mantiene una colección por bucket, conservando inserciones aun cuando varias claves colisionan al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Filtros de Bloom (Hashing en profundidad): Combinan bits y varios hashes para descartar ausencias sin falsos negativos, aceptando falsos positivos.",
    "topic": "Hashing en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-16",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Conjuntos y particiones), ¿qué función técnica cumple «Disjoint-set union»?",
    "options": [
      "Conservan versiones anteriores compartiendo nodos inmutables en lugar de copiar la estructura completa al operar.",
      "Representa pertenencia con bits contiguos y aceleran operaciones de conjuntos mediante palabras de máquina.",
      "Empaqueta campos y valores para reducir memoria sin perder las operaciones necesarias del workload al operar.",
      "Representa componentes disjuntos con árboles cuyos representantes permiten unir y consultar conectividad."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Disjoint-set union (Conjuntos y particiones): Representa componentes disjuntos con árboles cuyos representantes permiten unir y consultar conectividad.",
    "topic": "Conjuntos y particiones",
    "difficulty": "básico"
  },
  {
    "id": "algorithms-q-17",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Compresión de caminos» en conjuntos y particiones?",
    "options": [
      "Reescribe padres durante find para acercar cada nodo directamente a su representante.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.",
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Compresión de caminos (Conjuntos y particiones): Reescribe padres durante find para acercar cada nodo directamente a su representante.",
    "topic": "Conjuntos y particiones",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-18",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «Bitsets»?",
    "options": [
      "Conservan versiones anteriores compartiendo nodos inmutables en lugar de copiar la estructura completa al operar.",
      "Representa pertenencia con bits contiguos y aceleran operaciones de conjuntos mediante palabras de máquina.",
      "Representa componentes disjuntos con árboles cuyos representantes permiten unir y consultar conectividad.",
      "Coloca elementos respecto a un pivote y controla su peor caso con selección y profundidad defensivas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bitsets (Conjuntos y particiones): Representan pertenencia con bits contiguos y aceleran operaciones de conjuntos mediante palabras de máquina.",
    "topic": "Conjuntos y particiones",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-19",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Estructuras persistentes»?",
    "options": [
      "Representa componentes disjuntos con árboles cuyos representantes permiten unir y consultar conectividad.",
      "Reescribe padres durante find para acercar cada nodo directamente a su representante sin perder estado.",
      "Conservan versiones anteriores compartiendo nodos inmutables en lugar de copiar la estructura completa.",
      "Busca ranuras alternativas dentro de la tabla y depende de una carga controlada para rendir bien al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Estructuras persistentes (Conjuntos y particiones): Conservan versiones anteriores compartiendo nodos inmutables en lugar de copiar la estructura completa.",
    "topic": "Conjuntos y particiones",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-20",
    "collectionId": "algorithms",
    "question": "Respecto a ordenamiento y selección en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Quicksort y particionado»?",
    "options": [
      "Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio en el flujo.",
      "Usa árboles de decisión para demostrar cuántas comparaciones exige cualquier ordenamiento general.",
      "Aprovechan dominios discretos o dígitos para superar el límite de algoritmos basados en comparación.",
      "Coloca elementos respecto a un pivote y controla su peor caso con selección y profundidad defensivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Quicksort y particionado (Ordenamiento y selección): Coloca elementos respecto a un pivote y controla su peor caso con selección y profundidad defensivas.",
    "topic": "Ordenamiento y selección",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-21",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Ordenamiento y selección), ¿qué función técnica cumple «Mergesort externo»?",
    "options": [
      "Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio al operar.",
      "Encuentra el elemento de rango solicitado sin ordenar necesariamente toda la entrada al operar.",
      "Ordena sufijos por índice y permite búsquedas binarias sin almacenar un trie completo.",
      "Mantiene estadísticas de datos recientes expulsando elementos según tiempo o cantidad."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Mergesort externo (Ordenamiento y selección): Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio.",
    "topic": "Ordenamiento y selección",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-22",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Counting y radix sort» en ordenamiento y selección?",
    "options": [
      "Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio al evaluar.",
      "Aprovechan dominios discretos o dígitos para superar el límite de algoritmos basados en comparación.",
      "Usa árboles de decisión para demostrar cuántas comparaciones exige cualquier ordenamiento general.",
      "Coloca elementos respecto a un pivote y controla su peor caso con selección y profundidad defensivas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Counting y radix sort (Ordenamiento y selección): Aprovechan dominios discretos o dígitos para superar el límite de algoritmos basados en comparación.",
    "topic": "Ordenamiento y selección",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-23",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «Selección de orden k»?",
    "options": [
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al operar.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.",
      "Encuentra el elemento de rango solicitado sin ordenar necesariamente toda la entrada.",
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Selección de orden k (Ordenamiento y selección): Encuentra el elemento de rango solicitado sin ordenar necesariamente toda la entrada.",
    "topic": "Ordenamiento y selección",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-24",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Límites inferiores de comparación»?",
    "options": [
      "Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio al operar.",
      "Encuentra el elemento de rango solicitado sin ordenar necesariamente toda la entrada en ejecución.",
      "Aprovechan dominios discretos o dígitos para superar el límite de algoritmos basados en comparación.",
      "Usa árboles de decisión para demostrar cuántas comparaciones exige cualquier ordenamiento general."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Límites inferiores de comparación (Ordenamiento y selección): Usan árboles de decisión para demostrar cuántas comparaciones exige cualquier ordenamiento general.",
    "topic": "Ordenamiento y selección",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-25",
    "collectionId": "algorithms",
    "question": "Respecto a grafos ponderados y redes en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Floyd-Warshall»?",
    "options": [
      "Construye caminos mínimos entre todos los pares admitiendo progresivamente vértices intermedios.",
      "Aumenta flujo residual hasta que un corte certifica que no existe una solución mayor al operar.",
      "Asigna pares sin compartir extremos mediante caminos aumentantes o reducción a flujo al operar.",
      "Agrupa muchas claves por nodo para reducir accesos de página en almacenamiento secundario."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Floyd-Warshall (Grafos ponderados y redes): Construye caminos mínimos entre todos los pares admitiendo progresivamente vértices intermedios.",
    "topic": "Grafos ponderados y redes",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-26",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Grafos ponderados y redes), ¿qué función técnica cumple «Flujo máximo»?",
    "options": [
      "Asigna pares sin compartir extremos mediante caminos aumentantes o reducción a flujo.",
      "Aumenta flujo residual hasta que un corte certifica que no existe una solución mayor.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Flujo máximo y corte mínimo (Grafos ponderados y redes): Aumenta flujo residual hasta que un corte certifica que no existe una solución mayor.",
    "topic": "Grafos ponderados y redes",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-27",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Emparejamiento bipartito» en grafos ponderados y redes?",
    "options": [
      "Aumenta flujo residual hasta que un corte certifica que no existe una solución mayor.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse.",
      "Asigna pares sin compartir extremos mediante caminos aumentantes o reducción a flujo.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Emparejamiento bipartito (Grafos ponderados y redes): Asigna pares sin compartir extremos mediante caminos aumentantes o reducción a flujo.",
    "topic": "Grafos ponderados y redes",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-28",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «Búsqueda Knuth-Morris-Pratt»?",
    "options": [
      "Ordena sufijos por índice y permite búsquedas binarias sin almacenar un trie completo al operar.",
      "Compara hashes rodantes de ventanas y verifica coincidencias para tolerar colisiones al operar.",
      "Minimiza inserciones, borrados y sustituciones con estados de programación dinámica al operar.",
      "Reutiliza prefijos ya comparados mediante una tabla de fallo y evita retroceder en el texto."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Búsqueda Knuth-Morris-Pratt (Procesamiento de texto): Reutiliza prefijos ya comparados mediante una tabla de fallo y evita retroceder en el texto.",
    "topic": "Procesamiento de texto",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-29",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Algoritmo Rabin-Karp»?",
    "options": [
      "Compara hashes rodantes de ventanas y verifica coincidencias para tolerar colisiones.",
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada.",
      "Minimiza inserciones, borrados y sustituciones con estados de programación dinámica.",
      "Ordena sufijos por índice y permite búsquedas binarias sin almacenar un trie completo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Algoritmo Rabin-Karp (Procesamiento de texto): Compara hashes rodantes de ventanas y verifica coincidencias para tolerar colisiones.",
    "topic": "Procesamiento de texto",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-30",
    "collectionId": "algorithms",
    "question": "Respecto a procesamiento de texto en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Autómatas de patrones»?",
    "options": [
      "Minimiza inserciones, borrados y sustituciones con estados de programación dinámica.",
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada.",
      "Compara hashes rodantes de ventanas y verifica coincidencias para tolerar colisiones.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Autómatas de patrones (Procesamiento de texto): Precompilan transiciones por carácter para reconocer secuencias en una sola pasada.",
    "topic": "Procesamiento de texto",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-31",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Procesamiento de texto), ¿qué función técnica cumple «Suffix arrays»?",
    "options": [
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada al operar.",
      "Minimiza inserciones, borrados y sustituciones con estados de programación dinámica.",
      "Ordena sufijos por índice y permite búsquedas binarias sin almacenar un trie completo.",
      "Compara hashes rodantes de ventanas y verifica coincidencias para tolerar colisiones."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Suffix arrays (Procesamiento de texto): Ordenan sufijos por índice y permiten búsquedas binarias sin almacenar un trie completo.",
    "topic": "Procesamiento de texto",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-32",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Distancia de edición» en procesamiento de texto?",
    "options": [
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada al operar.",
      "Compara hashes rodantes de ventanas y verifica coincidencias para tolerar colisiones.",
      "Ordena sufijos por índice y permite búsquedas binarias sin almacenar un trie completo.",
      "Minimiza inserciones, borrados y sustituciones con estados de programación dinámica."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Distancia de edición (Procesamiento de texto): Minimiza inserciones, borrados y sustituciones con estados de programación dinámica.",
    "topic": "Procesamiento de texto",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-33",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «Envolvente convexa»?",
    "options": [
      "Encuentra el polígono mínimo que contiene un conjunto descartando giros interiores.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.",
      "Divide el plano o consulta un índice espacial para reducir candidatos por distancia.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Envolvente convexa (Geometría computacional): Encuentra el polígono mínimo que contiene un conjunto descartando giros interiores.",
    "topic": "Geometría computacional",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-34",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Intersección de segmentos»?",
    "options": [
      "Encuentra el polígono mínimo que contiene un conjunto descartando giros interiores.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.",
      "Divide el plano o consulta un índice espacial para reducir candidatos por distancia.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Intersección de segmentos (Geometría computacional): Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.",
    "topic": "Geometría computacional",
    "difficulty": "intermedio"
  },
  {
    "id": "algorithms-q-35",
    "collectionId": "algorithms",
    "question": "Respecto a geometría computacional en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Barrido de línea»?",
    "options": [
      "Divide el plano o consulta un índice espacial para reducir candidatos por distancia de forma segura.",
      "Encuentra el polígono mínimo que contiene un conjunto descartando giros interiores con precisión.",
      "Ordena eventos geométricos y mantiene una estructura activa para evitar comparar todos los pares.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Barrido de línea (Geometría computacional): Ordena eventos geométricos y mantiene una estructura activa para evitar comparar todos los pares.",
    "topic": "Geometría computacional",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-36",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Geometría computacional), ¿qué función técnica cumple «Vecino más cercano»?",
    "options": [
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales al operar.",
      "Encuentra el polígono mínimo que contiene un conjunto descartando giros interiores.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse.",
      "Divide el plano o consulta un índice espacial para reducir candidatos por distancia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Vecino más cercano (Geometría computacional): Divide el plano o consulta un índice espacial para reducir candidatos por distancia.",
    "topic": "Geometría computacional",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-37",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Diseño de estados» en programación dinámica avanzada?",
    "options": [
      "Captura la información mínima del prefijo necesaria para tomar las decisiones restantes.",
      "Contrasta evaluación bajo demanda con llenado iterativo según densidad y profundidad.",
      "Descarta capas que ya no influyen sin destruir información requerida para el resultado.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Diseño de estados (Programación dinámica avanzada): Captura la información mínima del prefijo necesaria para tomar las decisiones restantes.",
    "topic": "Programación dinámica avanzada",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-38",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «Memoización frente a tabulación»?",
    "options": [
      "Descarta capas que ya no influyen sin destruir información requerida para el resultado.",
      "Contrasta evaluación bajo demanda con llenado iterativo según densidad y profundidad.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Memoización frente a tabulación (Programación dinámica avanzada): Contrasta evaluación bajo demanda con llenado iterativo según densidad y profundidad.",
    "topic": "Programación dinámica avanzada",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-39",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Optimización de espacio»?",
    "options": [
      "Contrasta evaluación bajo demanda con llenado iterativo según densidad y profundidad al operar.",
      "Captura la información mínima del prefijo necesaria para tomar las decisiones restantes.",
      "Descarta capas que ya no influyen sin destruir información requerida para el resultado.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Optimización de espacio (Programación dinámica avanzada): Descarta capas que ya no influyen sin destruir información requerida para el resultado.",
    "topic": "Programación dinámica avanzada",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-40",
    "collectionId": "algorithms",
    "question": "Respecto a programación dinámica avanzada en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Reconstrucción de soluciones»?",
    "options": [
      "Contrasta evaluación bajo demanda con llenado iterativo según densidad y profundidad al operar.",
      "Descarta capas que ya no influyen sin destruir información requerida para el resultado al operar.",
      "Captura la información mínima del prefijo necesaria para tomar las decisiones restantes.",
      "Conserva decisiones o retrocede por la tabla para recuperar una respuesta, no solo su costo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Reconstrucción de soluciones (Programación dinámica avanzada): Conserva decisiones o retrocede por la tabla para recuperar una respuesta, no solo su costo.",
    "topic": "Programación dinámica avanzada",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-41",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Algoritmos probabilísticos), ¿qué función técnica cumple «Monte Carlo frente a Las Vegas»?",
    "options": [
      "Distingue error probabilístico acotado de tiempo aleatorio con respuesta siempre correcta al operar.",
      "Superponen niveles aleatorios para buscar e insertar con costo esperado logarítmico.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al operar.",
      "Aproxima similitud de Jaccard mediante firmas que preservan la probabilidad de coincidencia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Monte Carlo frente a Las Vegas (Algoritmos probabilísticos): Distingue error probabilístico acotado de tiempo aleatorio con respuesta siempre correcta.",
    "topic": "Algoritmos probabilísticos",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-42",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Skip lists» en algoritmos probabilísticos?",
    "options": [
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al operar.",
      "Superponen niveles aleatorios para buscar e insertar con costo esperado logarítmico.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.",
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Skip lists (Algoritmos probabilísticos): Superponen niveles aleatorios para buscar e insertar con costo esperado logarítmico.",
    "topic": "Algoritmos probabilísticos",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-43",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «MinHash»?",
    "options": [
      "Superponen niveles aleatorios para buscar e insertar con costo esperado logarítmico al evaluar.",
      "Distingue error probabilístico acotado de tiempo aleatorio con respuesta siempre correcta.",
      "Aproxima similitud de Jaccard mediante firmas que preservan la probabilidad de coincidencia.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "MinHash (Algoritmos probabilísticos): Aproxima similitud de Jaccard mediante firmas que preservan la probabilidad de coincidencia.",
    "topic": "Algoritmos probabilísticos",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-44",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Conteo aproximado»?",
    "options": [
      "Superponen niveles aleatorios para buscar e insertar con costo esperado logarítmico al operar.",
      "Distingue error probabilístico acotado de tiempo aleatorio con respuesta siempre correcta.",
      "Aproxima similitud de Jaccard mediante firmas que preservan la probabilidad de coincidencia.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Conteo aproximado (Algoritmos probabilísticos): Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse.",
    "topic": "Algoritmos probabilísticos",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-45",
    "collectionId": "algorithms",
    "question": "Respecto a datos masivos y streaming en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Algoritmos de memoria externa»?",
    "options": [
      "Organiza bloques para minimizar transferencias entre memoria principal y almacenamiento al operar.",
      "Agrupa operaciones para amortizar coordinación e I/O sin exceder latencia o memoria.",
      "Mantiene estadísticas de datos recientes expulsando elementos según tiempo o cantidad.",
      "Identifica elementos muy frecuentes con memoria sublineal y tolerancia de error declarada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Algoritmos de memoria externa (Datos masivos y streaming): Organizan bloques para minimizar transferencias entre memoria principal y almacenamiento.",
    "topic": "Datos masivos y streaming",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-46",
    "collectionId": "algorithms",
    "question": "En Algoritmos y estructuras de datos (Datos masivos y streaming), ¿qué función técnica cumple «Ventanas deslizantes»?",
    "options": [
      "Agrupa operaciones para amortizar coordinación e I/O sin exceder latencia o memoria al operar.",
      "Mantiene estadísticas de datos recientes expulsando elementos según tiempo o cantidad.",
      "Organiza bloques para minimizar transferencias entre memoria principal y almacenamiento.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ventanas deslizantes (Datos masivos y streaming): Mantienen estadísticas de datos recientes expulsando elementos según tiempo o cantidad.",
    "topic": "Datos masivos y streaming",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-47",
    "collectionId": "algorithms",
    "question": "Dentro de Algoritmos y estructuras de datos, ¿cómo opera el mecanismo de «Heavy hitters» en datos masivos y streaming?",
    "options": [
      "Agrupa operaciones para amortizar coordinación e I/O sin exceder latencia o memoria al operar.",
      "Mantiene estadísticas de datos recientes expulsando elementos según tiempo o cantidad.",
      "Identifica elementos muy frecuentes con memoria sublineal y tolerancia de error declarada.",
      "Organiza bloques para minimizar transferencias entre memoria principal y almacenamiento."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Heavy hitters (Datos masivos y streaming): Identifican elementos muy frecuentes con memoria sublineal y tolerancia de error declarada.",
    "topic": "Datos masivos y streaming",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-48",
    "collectionId": "algorithms",
    "question": "Al trabajar con Algoritmos y estructuras de datos, ¿qué responsabilidad define a «Sketches de frecuencia»?",
    "options": [
      "Agrupa operaciones para amortizar coordinación e I/O sin exceder latencia o memoria al operar.",
      "Mantiene estadísticas de datos recientes expulsando elementos según tiempo o cantidad.",
      "Organiza bloques para minimizar transferencias entre memoria principal y almacenamiento.",
      "Proyectan conteos en tablas hash pequeñas y estiman frecuencias con cotas probabilísticas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sketches de frecuencia (Datos masivos y streaming): Proyectan conteos en tablas hash pequeñas y estiman frecuencias con cotas probabilísticas.",
    "topic": "Datos masivos y streaming",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-49",
    "collectionId": "algorithms",
    "question": "En la arquitectura de Algoritmos y estructuras de datos, ¿qué caracteriza técnicamente a «Procesamiento por lotes»?",
    "options": [
      "Agrupa operaciones para amortizar coordinación e I/O sin exceder latencia o memoria al operar.",
      "Mantiene estadísticas de datos recientes expulsando elementos según tiempo o cantidad.",
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Procesamiento por lotes (Datos masivos y streaming): Agrupa operaciones para amortizar coordinación e I/O sin exceder latencia o memoria.",
    "topic": "Datos masivos y streaming",
    "difficulty": "avanzado"
  },
  {
    "id": "algorithms-q-50",
    "collectionId": "algorithms",
    "question": "Respecto a concurrencia algorítmica en Algoritmos y estructuras de datos, ¿cuál es el propósito de «Trabajo y profundidad»?",
    "options": [
      "Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse al operar.",
      "Separa operaciones totales del camino crítico para estimar el paralelismo disponible.",
      "Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.",
      "Precompilan transiciones por carácter para reconocer secuencias en una sola pasada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Trabajo y profundidad (Concurrencia algorítmica): Separa operaciones totales del camino crítico para estimar el paralelismo disponible.",
    "topic": "Concurrencia algorítmica",
    "difficulty": "avanzado"
  }
];
