# Algoritmos y estructuras de datos (A&D)

> **Complejidad, secuencias, árboles, grafos, búsqueda, ordenación y optimización.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `algorithms` |
| **Grupo Arquitectonico** | [Fundamentos](Grupo-Fundamentals) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `prolog` |
| **Total de Conceptos** | **120 conceptos** |
| **Capitulos / Secciones** | **20 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/algoritmos)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/algoritmos-en-accion)


## Estudio de Caso Practico: Optimizar las rutas de una brigada

> **Caso integrado de Algoritmos y estructuras de datos:** Un grafo urbano pasa de una búsqueda costosa a una ruta justificable, detectando pesos inválidos y recuperando el modelo antes de comparar soluciones.  
> La ruta elegida conserva distancia, predecesores, complejidad y evidencia del benchmark.

### Fases de Ejecucion:
1. **Modelar el grafo** (Optimizar las rutas de una brigada: etapa 1 de 5): `G.agregar(arista, minutos)` -> Workload representado. *La etapa conserva un contrato explícito para que el siguiente paso de Algoritmos y estructuras de datos no dependa de supuestos ocultos.*
2. **Calcular candidatos** (Optimizar las rutas de una brigada: etapa 2 de 5): `ruta = dijkstra(G, origen)` -> Rutas y predecesores calculados. *La etapa conserva un contrato explícito para que el siguiente paso de Algoritmos y estructuras de datos no dependa de supuestos ocultos.*
3. **Encontrar peso negativo** (Optimizar las rutas de una brigada: etapa 3 de 5): `assert minutos >= 0` -> Resultado rechazado. *El caso hace visible el fallo de Algoritmos y estructuras de datos; no continúa como si la evidencia fuera válida.*
4. **Sanear y recalcular** (Optimizar las rutas de una brigada: etapa 4 de 5): `G = validar_pesos(G)
ruta = dijkstra(G, origen)` -> Invariante restaurado. *La recuperación de Algoritmos y estructuras de datos corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Comparar y publicar** (Optimizar las rutas de una brigada: etapa 5 de 5): `benchmark(dijkstra, dataset_real)` -> Elección defendible. *La etapa conserva un contrato explícito para que el siguiente paso de Algoritmos y estructuras de datos no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (120)

### Seccion: Modelos de costo (5 conceptos)

- **Corrección y terminación**  
  *Familia:* `pasaporte del artefacto`  
  Corrección y terminación procesa datos identificables junto con esquema, restricciones y procedencia: valida, representa y recorre cada valor preservando relaciones para entregar información consultable con integridad y significado estables.

- **Notación O, Ω y Θ**  
  *Familia:* `consulta e índice`  
  Para entender Notación O, Ω y Θ, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.

- **Mejor, promedio y peor caso**  
  *Familia:* `telar relacional`  
  El mecanismo de Mejor, promedio y peor caso recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **Tiempo frente a espacio**  
  *Familia:* `mapa de memoria`  
  Tiempo frente a espacio conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Análisis amortizado**  
  *Familia:* `comparativa técnica`  
  En Análisis amortizado, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.


### Seccion: Estructuras esenciales (5 conceptos)

- **Arrays y listas enlazadas**  
  *Familia:* `tabla de estados`  
  Arrays y listas enlazadas estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Pilas, colas y deques**  
  *Familia:* `cola y consumidor`  
  El recorrido de Pilas, colas y deques toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Tablas hash**  
  *Familia:* `jerarquía y dependencias`  
  Tablas hash procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Árboles de búsqueda**  
  *Familia:* `capas internas`  
  Para entender Árboles de búsqueda, se delimita una instancia acotada, sus invariantes y una medida de costo. La operación explora estados manteniendo la propiedad que garantiza corrección hasta producir una solución acompañada de complejidad y límites conocidos.

- **Heaps y colas de prioridad**  
  *Familia:* `tabla de estados`  
  El mecanismo de Heaps y colas de prioridad recibe valores con representación, dirección y tiempo de vida definidos y reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime, asegurando estado accesible sin referencias colgantes ni corrupción.


### Seccion: Técnicas algorítmicas (5 conceptos)

- **Divide y vencerás**  
  *Familia:* `acumulación de recursos`  
  La función de Divide y vencerás parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Programación dinámica**  
  *Familia:* `memoria intermedia`  
  Programación dinámica estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Estrategias voraces**  
  *Familia:* `consulta e índice`  
  El recorrido de Estrategias voraces toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Backtracking y poda**  
  *Familia:* `acumulación de recursos`  
  Backtracking y poda procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Aleatorización**  
  *Familia:* `matriz de señales`  
  Para entender Aleatorización, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Grafos y diagnóstico (5 conceptos)

- **BFS y DFS**  
  *Familia:* `topología y tráfico`  
  En BFS y DFS, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Caminos mínimos**  
  *Familia:* `jerarquía y dependencias`  
  La función de Caminos mínimos parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Orden topológico**  
  *Familia:* `workflow y decisiones`  
  Orden topológico estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Componentes y ciclos**  
  *Familia:* `constelación de mecanismos`  
  El recorrido de Componentes y ciclos toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.

- **Trazas, invariantes y contraejemplos**  
  *Familia:* `espectro de verificación`  
  Trazas, invariantes y contraejemplos procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.


### Seccion: Algoritmos en producción (5 conceptos)

- **Ordenamiento estable**  
  *Familia:* `pasaporte del artefacto`  
  Ordenamiento estable procesa una instancia acotada, sus invariantes y una medida de costo: explora estados manteniendo la propiedad que garantiza corrección para entregar una solución acompañada de complejidad y límites conocidos.

- **Localidad de caché**  
  *Familia:* `memoria intermedia`  
  Para entender Localidad de caché, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.

- **Entradas adversariales**  
  *Familia:* `capas internas`  
  El mecanismo de Entradas adversariales recibe una instancia acotada, sus invariantes y una medida de costo y explora estados manteniendo la propiedad que garantiza corrección, asegurando una solución acompañada de complejidad y límites conocidos.

- **Benchmarks reproducibles**  
  *Familia:* `comparativa técnica`  
  Benchmarks reproducibles conecta un workload representativo, un presupuesto y una línea base con su runtime interno: mide la ruta crítica y cambia una variable por vez hasta exponer una mejora cuantificada sin intercambiar corrección por velocidad.

- **Elección basada en workload**  
  *Familia:* `pasaporte del artefacto`  
  En Elección basada en workload, una instancia acotada, sus invariantes y una medida de costo ingresa al flujo donde explora estados manteniendo la propiedad que garantiza corrección para consolidar una solución acompañada de complejidad y límites conocidos.


### Seccion: Secuencias y almacenamiento (8 conceptos)

- **Vectores dinámicos**  
  *Familia:* `cuadrícula paralela`  
  Reservan capacidad contigua y crecen por bloques para ofrecer acceso constante y anexado amortizado.

- **Listas con centinela**  
  *Familia:* `consulta e índice`  
  Usan nodos ficticios para eliminar casos especiales al insertar o borrar en los extremos.

- **Buffers circulares**  
  *Familia:* `telar relacional`  
  Reutilizan un arreglo mediante índices modulares para mantener una cola acotada sin desplazar elementos.

- **Matrices dispersas**  
  *Familia:* `flujo de transformación`  
  Guardan solo entradas no nulas mediante coordenadas o filas comprimidas cuando el espacio denso sería prohibitivo.

- **Representaciones compactas**  
  *Familia:* `mapa de memoria`  
  Empaquetan campos y valores para reducir memoria sin perder las operaciones necesarias del workload.

- **Ropes para texto extenso**  
  *Familia:* `tejido literario`  
  Para Ropes / texto / extenso, el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos, manteniendo una solución cuya corrección y complejidad pueden justificarse con la traza.

- **Gap buffers**  
  *Familia:* `consulta e índice`  
  Gap / buffers coordina la ejecución: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales hasta obtener una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Succinct data structures**  
  *Familia:* `telar relacional`  
  Al operar con Succinct / data / structures, el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos, produciendo una solución cuya corrección y complejidad pueden justificarse con la traza.


### Seccion: Árboles avanzados (5 conceptos)

- **Árboles AVL**  
  *Familia:* `jerarquía y dependencias`  
  Mantienen alturas casi iguales mediante rotaciones para garantizar búsqueda logarítmica estricta.

- **Árboles rojo-negro**  
  *Familia:* `capas internas`  
  Codifican restricciones de color que limitan altura con menos rotaciones durante actualizaciones.

- **B-trees y B+ trees**  
  *Familia:* `ecosistema coordinado`  
  Agrupan muchas claves por nodo para reducir accesos de página en almacenamiento secundario.

- **Tries y radix trees**  
  *Familia:* `tabla de estados`  
  Recorren prefijos por componentes de clave y comprimen caminos para búsquedas textuales predecibles.

- **Árboles de intervalos**  
  *Familia:* `jerarquía y dependencias`  
  Anotan máximos de subárbol para localizar solapamientos sin revisar todos los rangos.


### Seccion: Hashing en profundidad (7 conceptos)

- **Funciones hash y distribución**  
  *Familia:* `mapa de memoria`  
  Dispersan claves de forma estable para limitar colisiones y evitar patrones adversariales.

- **Encadenamiento separado**  
  *Familia:* `tabla de estados`  
  Mantiene una colección por bucket, conservando inserciones aun cuando varias claves colisionan.

- **Direccionamiento abierto**  
  *Familia:* `consulta e índice`  
  Busca ranuras alternativas dentro de la tabla y depende de una carga controlada para rendir bien.

- **Cuckoo hashing**  
  *Familia:* `mapa de memoria`  
  Ofrece pocas posiciones candidatas y desplaza claves hasta encontrar espacio o detectar un ciclo.

- **Filtros de Bloom**  
  *Familia:* `tabla de estados`  
  Combinan bits y varios hashes para descartar ausencias sin falsos negativos, aceptando falsos positivos.

- **Robin Hood hashing**  
  *Familia:* `consulta e índice`  
  Para Robin / Hood / hashing, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, manteniendo una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Hash flooding defensivo**  
  *Familia:* `mapa de memoria`  
  Hash / flooding / defensivo coordina la ejecución: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas hasta obtener una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.


### Seccion: Conjuntos y particiones (5 conceptos)

- **Disjoint-set union**  
  *Familia:* `tabla de estados`  
  Representa componentes disjuntos con árboles cuyos representantes permiten unir y consultar conectividad.

- **Compresión de caminos**  
  *Familia:* `consulta e índice`  
  Reescribe padres durante find para acercar cada nodo directamente a su representante.

- **Union por rango**  
  *Familia:* `mapa de memoria`  
  Adjunta el árbol menos profundo al más profundo para impedir cadenas largas. Para entender Union por rango, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Bitsets**  
  *Familia:* `tabla de estados`  
  Representan pertenencia con bits contiguos y aceleran operaciones de conjuntos mediante palabras de máquina.

- **Estructuras persistentes**  
  *Familia:* `consulta e índice`  
  Conservan versiones anteriores compartiendo nodos inmutables en lugar de copiar la estructura completa.


### Seccion: Ordenamiento y selección (7 conceptos)

- **Quicksort y particionado**  
  *Familia:* `mapa de memoria`  
  Coloca elementos respecto a un pivote y controla su peor caso con selección y profundidad defensivas.

- **Mergesort externo**  
  *Familia:* `tabla de estados`  
  Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio.

- **Counting y radix sort**  
  *Familia:* `consulta e índice`  
  Aprovechan dominios discretos o dígitos para superar el límite de algoritmos basados en comparación.

- **Selección de orden k**  
  *Familia:* `mapa de memoria`  
  Encuentra el elemento de rango solicitado sin ordenar necesariamente toda la entrada.

- **Límites inferiores de comparación**  
  *Familia:* `tabla de estados`  
  Usan árboles de decisión para demostrar cuántas comparaciones exige cualquier ordenamiento general.

- **Introsort**  
  *Familia:* `consulta e índice`  
  Para Introsort, el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos, manteniendo una solución cuya corrección y complejidad pueden justificarse con la traza.

- **Ordenamiento adaptativo**  
  *Familia:* `mapa de memoria`  
  Ordenamiento / adaptativo coordina la ejecución: el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos hasta obtener una solución cuya corrección y complejidad pueden justificarse con la traza.


### Seccion: Grafos ponderados y redes (8 conceptos)

- **Bellman-Ford**  
  *Familia:* `topología y tráfico`  
  Relaja todas las aristas repetidamente y detecta ciclos negativos alcanzables. Para entender Bellman-Ford, se delimita un mensaje versionado, un destino y límites de tiempo. La operación serializa, transporta y valida el intercambio a través de una frontera remota hasta producir una respuesta correlacionada o un estado convergente verificable.

- **Floyd-Warshall**  
  *Familia:* `jerarquía y dependencias`  
  Construye caminos mínimos entre todos los pares admitiendo progresivamente vértices intermedios.

- **Árbol de expansión mínima**  
  *Familia:* `workflow y decisiones`  
  Conecta todos los vértices con peso total mínimo mediante cortes seguros. Árbol de expansión mínima conecta un mensaje versionado, un destino y límites de tiempo con su runtime interno: serializa, transporta y valida el intercambio a través de una frontera remota hasta exponer una respuesta correlacionada o un estado convergente verificable.

- **Flujo máximo y corte mínimo**  
  *Familia:* `topología y tráfico`  
  Aumenta flujo residual hasta que un corte certifica que no existe una solución mayor.

- **Emparejamiento bipartito**  
  *Familia:* `jerarquía y dependencias`  
  Asigna pares sin compartir extremos mediante caminos aumentantes o reducción a flujo.

- **A-star**  
  *Familia:* `workflow y decisiones`  
  Para A-star, el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos, manteniendo una solución cuya corrección y complejidad pueden justificarse con la traza.

- **Johnson para todos los pares**  
  *Familia:* `topología y tráfico`  
  Johnson / todos / pares coordina la ejecución: el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos hasta obtener una solución cuya corrección y complejidad pueden justificarse con la traza.

- **Dominators en grafos de flujo**  
  *Familia:* `jerarquía y dependencias`  
  Al operar con Dominators / en / grafos / flujo, el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos, produciendo una solución cuya corrección y complejidad pueden justificarse con la traza.


### Seccion: Procesamiento de texto (6 conceptos)

- **Búsqueda Knuth-Morris-Pratt**  
  *Familia:* `análisis y emisión`  
  Reutiliza prefijos ya comparados mediante una tabla de fallo y evita retroceder en el texto.

- **Algoritmo Rabin-Karp**  
  *Familia:* `flujo de transformación`  
  Compara hashes rodantes de ventanas y verifica coincidencias para tolerar colisiones.

- **Autómatas de patrones**  
  *Familia:* `máquina de estados`  
  Precompilan transiciones por carácter para reconocer secuencias en una sola pasada.

- **Suffix arrays**  
  *Familia:* `análisis y emisión`  
  Ordenan sufijos por índice y permiten búsquedas binarias sin almacenar un trie completo.

- **Distancia de edición**  
  *Familia:* `flujo de transformación`  
  Minimiza inserciones, borrados y sustituciones con estados de programación dinámica.

- **Aho-Corasick**  
  *Familia:* `máquina de estados`  
  Para Aho-Corasick, el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos, manteniendo una solución cuya corrección y complejidad pueden justificarse con la traza.


### Seccion: Geometría computacional (7 conceptos)

- **Orientación y producto cruz**  
  *Familia:* `cuadrícula paralela`  
  Determina el giro de tres puntos cuidando precisión y desbordamiento numérico. El recorrido de Orientación y producto cruz toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Envolvente convexa**  
  *Familia:* `tabla de estados`  
  Encuentra el polígono mínimo que contiene un conjunto descartando giros interiores.

- **Intersección de segmentos**  
  *Familia:* `flujo de ejecución`  
  Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.

- **Barrido de línea**  
  *Familia:* `cuadrícula paralela`  
  Ordena eventos geométricos y mantiene una estructura activa para evitar comparar todos los pares.

- **Vecino más cercano**  
  *Familia:* `tabla de estados`  
  Divide el plano o consulta un índice espacial para reducir candidatos por distancia.

- **Triangulación de Delaunay**  
  *Familia:* `flujo de ejecución`  
  Para Triangulación / Delaunay, el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos, manteniendo una solución cuya corrección y complejidad pueden justificarse con la traza.

- **Diagramas de Voronoi**  
  *Familia:* `cuadrícula paralela`  
  Diagramas / Voronoi coordina la ejecución: el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos hasta obtener una solución cuya corrección y complejidad pueden justificarse con la traza.


### Seccion: Programación dinámica avanzada (6 conceptos)

- **Diseño de estados**  
  *Familia:* `tabla de estados`  
  Captura la información mínima del prefijo necesaria para tomar las decisiones restantes.

- **Transiciones y dependencias**  
  *Familia:* `memoria intermedia`  
  Relaciona cada subproblema con estados más pequeños y fija un orden evaluable. El recorrido de Transiciones y dependencias toma fuentes versionadas, dependencias fijadas y configuración declarativa. Posteriormente resuelve, construye y empaqueta el artefacto de forma repetible para validar una unidad identificable que puede verificarse antes de promoverse.

- **Memoización frente a tabulación**  
  *Familia:* `jerarquía y dependencias`  
  Contrasta evaluación bajo demanda con llenado iterativo según densidad y profundidad.

- **Optimización de espacio**  
  *Familia:* `tabla de estados`  
  Descarta capas que ya no influyen sin destruir información requerida para el resultado.

- **Reconstrucción de soluciones**  
  *Familia:* `memoria intermedia`  
  Conserva decisiones o retrocede por la tabla para recuperar una respuesta, no solo su costo.

- **Optimización por divide and conquer**  
  *Familia:* `jerarquía y dependencias`  
  Para Optimización / por / divide / and, el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, manteniendo una mejora medible con distribución, entorno y comparación documentados.


### Seccion: Algoritmos probabilísticos (5 conceptos)

- **Monte Carlo frente a Las Vegas**  
  *Familia:* `matriz de señales`  
  Distingue error probabilístico acotado de tiempo aleatorio con respuesta siempre correcta.

- **Reservoir sampling**  
  *Familia:* `mapa de memoria`  
  Mantiene una muestra uniforme de un flujo cuyo tamaño total aún se desconoce. Reservoir sampling conecta una instancia acotada, sus invariantes y una medida de costo con su runtime interno: explora estados manteniendo la propiedad que garantiza corrección hasta exponer una solución acompañada de complejidad y límites conocidos.

- **Skip lists**  
  *Familia:* `tabla de estados`  
  Superponen niveles aleatorios para buscar e insertar con costo esperado logarítmico.

- **MinHash**  
  *Familia:* `jerarquía y dependencias`  
  Aproxima similitud de Jaccard mediante firmas que preservan la probabilidad de coincidencia.

- **Conteo aproximado**  
  *Familia:* `mapa de memoria`  
  Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse.


### Seccion: Datos masivos y streaming (7 conceptos)

- **Algoritmos de memoria externa**  
  *Familia:* `memoria intermedia`  
  Organizan bloques para minimizar transferencias entre memoria principal y almacenamiento.

- **Ventanas deslizantes**  
  *Familia:* `consulta e índice`  
  Mantienen estadísticas de datos recientes expulsando elementos según tiempo o cantidad.

- **Heavy hitters**  
  *Familia:* `mapa de memoria`  
  Identifican elementos muy frecuentes con memoria sublineal y tolerancia de error declarada.

- **Sketches de frecuencia**  
  *Familia:* `telar relacional`  
  Proyectan conteos en tablas hash pequeñas y estiman frecuencias con cotas probabilísticas.

- **Procesamiento por lotes**  
  *Familia:* `despacho de runtime`  
  Agrupa operaciones para amortizar coordinación e I/O sin exceder latencia o memoria.

- **K-way merge**  
  *Familia:* `secuencia operativa`  
  Para K-way / merge, la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, manteniendo un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Count-min sketch con conservative update**  
  *Familia:* `planificación de trabajo`  
  Count-min / sketch / conservative / update coordina la ejecución: la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar hasta obtener un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.


### Seccion: Concurrencia algorítmica (5 conceptos)

- **Trabajo y profundidad**  
  *Familia:* `cola y consumidor`  
  Separa operaciones totales del camino crítico para estimar el paralelismo disponible.

- **Fork-join**  
  *Familia:* `telar relacional`  
  Divide tareas independientes y sincroniza sus resultados manteniendo un árbol de dependencias.

- **Estructuras lock-free**  
  *Familia:* `máquina de estados`  
  Garantizan progreso global mediante operaciones atómicas aunque un thread quede suspendido.

- **Particionado paralelo**  
  *Familia:* `cuadrícula paralela`  
  Distribuye datos equilibrando carga y reduciendo comunicación y contención. Particionado paralelo conecta tareas con dependencias, recursos compartidos y una señal de cancelación con su runtime interno: ordena trabajo y sincronización sin ocultar intercalados posibles hasta exponer progreso concurrente con ownership y terminación observables.

- **Determinismo reproducible**  
  *Familia:* `flujo de transformación`  
  Controla orden de reducción, semillas y efectos para obtener resultados repetibles.


### Seccion: Algoritmos distribuidos (6 conceptos)

- **Relojes lógicos**  
  *Familia:* `flujo de interfaz`  
  Ordenan causalmente eventos sin asumir un reloj físico perfectamente sincronizado.

- **Elección de líder**  
  *Familia:* `superficie de aplicación`  
  Escoge un coordinador único por término y resuelve empates tras fallos o particiones.

- **Consenso y quórums**  
  *Familia:* `pasaporte del artefacto`  
  Replica una decisión cuando mayorías intersectadas impiden confirmar valores incompatibles.

- **Gossip**  
  *Familia:* `matriz de señales`  
  Propaga estado de forma epidémica con mensajes parciales y convergencia eventual.

- **Detección de fallos**  
  *Familia:* `flujo de interfaz`  
  Interpreta timeouts como sospechas porque una red asíncrona no distingue demora de caída.

- **Vector clocks**  
  *Familia:* `cuadrícula paralela`  
  Para Vector / clocks, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, manteniendo progreso concurrente con ownership y terminación comprobables para cada tarea.


### Seccion: Complejidad computacional (5 conceptos)

- **Clases P y NP**  
  *Familia:* `espectro de verificación`  
  Diferencia problemas resolubles eficientemente de soluciones verificables en tiempo polinomial.

- **Reducciones polinomiales**  
  *Familia:* `jerarquía y dependencias`  
  Transforman instancias conservando respuesta para transferir dificultad entre problemas.

- **NP-completitud**  
  *Familia:* `comparativa técnica`  
  Identifica problemas en NP tan difíciles como cualquier otro de la clase mediante reducciones.

- **Algoritmos de aproximación**  
  *Familia:* `espectro de verificación`  
  Sacrifican optimalidad con una cota demostrable cuando resolver exactamente es intratable.

- **Complejidad parametrizada**  
  *Familia:* `jerarquía y dependencias`  
  Aísla una dimensión pequeña para buscar algoritmos eficientes respecto a ese parámetro.


### Seccion: Ingeniería y verificación (8 conceptos)

- **Propiedades metamórficas**  
  *Familia:* `validación y decisión`  
  Comprueban relaciones entre ejecuciones cuando no existe una respuesta esperada fácil de calcular.

- **Oráculos diferenciales**  
  *Familia:* `espectro de verificación`  
  Comparan implementaciones independientes para revelar desacuerdos ante la misma entrada.

- **Fuzzing de estructuras**  
  *Familia:* `evidencia y latencia`  
  Genera secuencias de operaciones y verifica invariantes después de cada mutación.

- **Contadores de rendimiento**  
  *Familia:* `validación y decisión`  
  Miden comparaciones, asignaciones y fallos de caché además del tiempo de pared. En Contadores de rendimiento, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Validación contra una referencia**  
  *Familia:* `comparativa técnica`  
  Contrasta casos pequeños con una solución simple y obviamente correcta antes de escalar.

- **Differential performance testing**  
  *Familia:* `espectro de verificación`  
  Para Differential / performance / testing, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, manteniendo estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Invariant checking in production**  
  *Familia:* `planificación de trabajo`  
  Invariant / checking / in / production coordina la ejecución: el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada hasta obtener servicio disponible con estado, versión y camino de rollback verificables.

- **Adversarial workload generation**  
  *Familia:* `validación y decisión`  
  Al operar con Adversarial / workload / generation, el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos, produciendo una solución cuya corrección y complejidad pueden justificarse con la traza.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Fundamentos](Grupo-Fundamentals) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
