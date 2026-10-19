import type { QuizQuestion } from "@/data/quizTypes";

export const nosqlQuestions: QuizQuestion[] = [
  {
    id: "nosql-q-01",
    collectionId: "nosql",
    question: "¿Qué propiedad arquitectónica distingue a las bases de datos de grafos nativas (como Neo4j) gracias a la 'Adyacencia Libre de Índices' (Index-Free Adjacency)?",
    options: [
      "Que no requieren ningún tipo de memoria RAM para ejecutar consultas.",
      "Cada nodo almacena punteros de memoria directos a sus nodos adyacentes; por lo tanto, el tiempo de recorrido de una relación es constante O(1) por salto, totalmente independiente del número total de nodos o aristas en todo el grafo.",
      "Que los datos se almacenan exclusivamente en archivos de texto CSV planos.",
      "Que prohíbe el uso de propiedades en los nodos."
    ],
    correctAnswerIndex: 1,
    explanation: "En una base de datos relacional, recorrer relaciones entre N entidades requiere joins que consultan índices B-Tree (O(log N) por join). Con Index-Free Adjacency, el motor desreferencia punteros físicos en memoria directamente a los vecinos, haciendo que la latencia dependa solo del subgrafo recorrido.",
    topic: "Bases de Datos de Grafos",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-02",
    collectionId: "nosql",
    question: "¿Cómo garantiza una base de datos distribuida basada en el modelo Dynamo (como Cassandra) una 'Lectura Fuertemente Consistente'?",
    options: [
      "Bloqueando todos los servidores del clúster antes de leer.",
      "Cumpliendo la fórmula de quórum 'R + W > N', donde la suma de réplicas leídas (R) más las réplicas escritas (W) supera el factor total de replicación (N), garantizando matemáticamente que el conjunto de lectura se solape con al menos una réplica con el dato más reciente.",
      "Reiniciando el nodo primario antes de cada operación.",
      "Almacenando todas las copias en una sola máquina física."
    ],
    correctAnswerIndex: 1,
    explanation: "Por el principio de casillas o quórum estricto (R + W > N), si hay 3 réplicas (N=3) y se escribe con Quorum (W=2) y se lee con Quorum (R=2), R + W = 4 > 3. El conjunto de lectura siempre intersectará al menos un nodo que recibió la escritura más reciente.",
    topic: "Consistencia y Quórum Distribuido",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-03",
    collectionId: "nosql",
    question: "¿Cómo opera internamente un motor de almacenamiento 'LSM-Tree' (Log-Structured Merge-Tree) en bases de datos como Cassandra, RocksDB o ScyllaDB?",
    options: [
      "Escribe directamente en árboles B-Tree en disco sobrescribiendo bloques aleatorios.",
      "Las escrituras se añaden secuencialmente a un CommitLog en disco para durabilidad y se insertan ordenadas en una estructura en memoria (Memtable); cuando la Memtable se llena, se vuelca a disco como una tabla inmutable (SSTable), consolidándose periódicamente mediante compactación.",
      "Borra físicamente los registros de la base de datos tan pronto como se confirma la transacción.",
      "Convierte todos los datos en documentos XML comprimidos."
    ],
    correctAnswerIndex: 1,
    explanation: "LSM-Tree transforma escrituras aleatorias lentas en escrituras secuenciales continuas de máxima velocidad (escritura en Memtable + flush secuencial a SSTables inmutables). Los registros obsoletos y borrados (tombstones) se depuran de fondo durante la compactación de SSTables.",
    topic: "LSM-Trees y Motores NoSQL",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-04",
    collectionId: "nosql",
    question: "¿Qué es un 'Tombstone' en Apache Cassandra y qué problema de rendimiento causa si se acumulan masivamente?",
    options: [
      "Un registro que almacena las contraseñas antiguas de los usuarios.",
      "Un marcador de borrado que se escribe cuando se elimina una fila o columna; si una consulta de lectura debe escanear miles de tombstones antes de encontrar datos vivos, consume CPU y memoria excesivos, pudiendo abortar la consulta con un TombstoneOverwhelmingException.",
      "Un índice secundario para ordenar fechas de defunción en bases de datos hospitalarias.",
      "Un archivo corrupto que destruye el clúster de base de datos."
    ],
    correctAnswerIndex: 1,
    explanation: "Debido a que las SSTables son inmutables en los LSM-Trees, un DELETE no puede borrar físicamente los bytes del archivo existente. Escribe un 'tombstone' (lápida). Si la aplicación borra millones de filas frecuentemente, las consultas se degradan leyendo lápidas hasta que la compactación las purga tras el gc_grace_seconds.",
    topic: "Apache Cassandra Internals",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-05",
    collectionId: "nosql",
    question: "¿Cuál es la estructura interna utilizada por Redis para implementar el tipo de datos 'Sorted Set' (ZSET)?",
    options: [
      "Un array lineal no ordenado con búsqueda por fuerza bruta.",
      "Una combinación de una Tabla Hash (dict para búsquedas por miembro O(1)) y una Skip List (lista por saltos probabilística para ordenamiento y consultas por rango O(log N)).",
      "Un árbol B+Tree almacenado en un archivo binario temporal.",
      "Una pila LIFO asignada en memoria compartida."
    ],
    correctAnswerIndex: 1,
    explanation: "Redis combina un diccionario hash (para saber el score de cualquier miembro instantáneamente en O(1)) con una Skip List (para mantener los elementos perfectamente ordenados por score y permitir operaciones como ZRANGEBYSCORE en O(log N + M)).",
    topic: "Estructuras de Datos en Redis",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-06",
    collectionId: "nosql",
    question: "¿Cuál es la diferencia crítica entre la persistencia 'RDB' y 'AOF' en Redis?",
    options: [
      "RDB solo funciona en Linux y AOF en macOS.",
      "RDB toma instantáneas puntuales compactas de toda la memoria mediante 'fork()' cada cierto intervalo (recuperación rápida, pero riesgo de perder los últimos minutos de datos); AOF registra cada comando de escritura en un log append-only (mínima pérdida de datos, pero archivos más grandes y arranque más lento).",
      "AOF borra la memoria RAM cada 10 segundos.",
      "RDB requiere duplicar el hardware físico del servidor."
    ],
    correctAnswerIndex: 1,
    explanation: "RDB genera un volcado binario completo (.rdb) de bajo peso ideal para desastres, pero si el servidor muere entre snapshots se pierden las escrituras intermedias. AOF registra cada mutación en el archivo de comandos, ofreciendo durabilidad máxima a costa de mayor I/O.",
    topic: "Persistencia en Redis",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-07",
    collectionId: "nosql",
    question: "¿Qué diferencia existe entre la 'Partition Key' y la 'Clustering Key' en el modelado de datos de Apache Cassandra?",
    options: [
      "La Partition Key es para números y la Clustering Key para cadenas de texto.",
      "La Partition Key determina en qué nodo físico del clúster se almacenarán los datos (mediante hash en el anillo); la Clustering Key determina el orden físico en disco en el que se ordenan los registros dentro de esa misma partición.",
      "La Clustering Key no admite consultas de igualdad.",
      "No existe diferencia; son sinónimos del estándar CQL."
    ],
    correctAnswerIndex: 1,
    explanation: "En Cassandra: PRIMARY KEY ((user_id), created_at). 'user_id' es la Partition Key (envía la partición a un nodo del anillo). 'created_at' es la Clustering Key (los registros de ese usuario se almacenan contiguos y preordenados por fecha en el disco, permitiendo lecturas secuenciales ultrarrápidas).",
    topic: "Modelado de Datos en Cassandra",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-08",
    collectionId: "nosql",
    question: "¿Qué es el 'Oplog' (Operations Log) en un Replica Set de MongoDB y cuál es su rol?",
    options: [
      "Un archivo donde se guardan los errores de autenticación de usuarios.",
      "Una colección acotada (capped collection) especial que registra todas las operaciones de modificación de datos en el nodo primario de forma idempotente, la cual es leída continuamente por los nodos secundarios para replicar el estado de forma asíncrona.",
      "Un índice que acelera búsquedas geoespaciales.",
      "Un registro de auditoría legal exigido por el estándar PCI-DSS."
    ],
    correctAnswerIndex: 1,
    explanation: "El oplog es el corazón de la alta disponibilidad en MongoDB. Los nodos secundarios aplican los eventos del oplog del primario. Al ser idempotente, aplicar una misma entrada varias veces produce el mismo estado, facilitando la recuperación ante reconexiones.",
    topic: "Replicación en MongoDB",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-09",
    collectionId: "nosql",
    question: "¿Qué garantiza un 'Write Concern' de '{ w: \"majority\", j: true }' en MongoDB?",
    options: [
      "Que los datos se escribirán en un servidor de correo electrónico.",
      "Que el servidor no confirmará el éxito de la escritura al cliente hasta que la operación haya sido confirmada por la mayoría estricta de nodos del Replica Set Y haya sido escrita físicamente en el journal no volátil del disco, garantizando durabilidad absoluta ante caídas simultáneas.",
      "Que la escritura se realizará únicamente en nodos secundarios.",
      "Que el documento será encriptado con una clave de 512 bits."
    ],
    correctAnswerIndex: 1,
    explanation: "'w: majority' asegura que la mutación sobrevivirá a una elección si el primario se cae inmediatamente después. 'j: true' asegura que se hizo fsync en el journal de disco, evitando pérdida de datos por corte de energía simultáneo en los nodos.",
    topic: "Durabilidad y Consistencia en MongoDB",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-10",
    collectionId: "nosql",
    question: "¿Qué es un 'Filtro de Bloom' (Bloom Filter) y por qué es indispensable en los motores de almacenamiento NoSQL basados en SSTables?",
    options: [
      "Un filtro óptico para pantallas de centros de datos.",
      "Una estructura de datos probabilística y compacta en memoria que puede responder con certeza absoluta si una clave 'DEFINITIVAMENTE NO existe' en una SSTable específica de disco (evitando I/O innecesario), o que 'posiblemente existe' (pudiendo tener falsos positivos pero jamás falsos negativos).",
      "Un algoritmo para eliminar spam de comentarios de usuarios.",
      "Un sistema para comprimir colecciones BSON a mitad de tamaño."
    ],
    correctAnswerIndex: 1,
    explanation: "Si una base de datos tiene 50 SSTables en disco para una partición, buscar una clave requeriría 50 lecturas a disco. El Bloom Filter en RAM descarta el 99% de las SSTables sin tocar el disco: si el filtro dice 'no está', es 100% seguro que no está.",
    topic: "Estructuras de Datos Probabilísticas",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-11",
    collectionId: "nosql",
    question: "¿Cuál es la diferencia fundamental entre un GSI (Global Secondary Index) y un LSI (Local Secondary Index) en Amazon DynamoDB?",
    options: [
      "GSI solo funciona en Estados Unidos y LSI en Europa.",
      "Un LSI comparte la misma Partition Key que la tabla base y solo varía el Sort Key (se actualiza de forma síncrona con consistencia fuerte opcional); un GSI puede tener una Partition Key y Sort Key totalmente diferentes, particionándose de forma independiente y replicándose de forma asíncrona.",
      "Los LSI solo pueden crearse después de que la tabla tiene más de 1 millón de registros.",
      "Los GSI no consumen capacidad de lectura ni de escritura."
    ],
    correctAnswerIndex: 1,
    explanation: "Un LSI está confinado a la misma partición física que el registro original (debe crearse al crear la tabla). Un GSI es prácticamente una tabla paralela separada con su propia clave de partición y throughput aprovisionado independiente, sincronizada asíncronamente.",
    topic: "Amazon DynamoDB e Índices Secundarios",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-12",
    collectionId: "nosql",
    question: "¿Cómo distribuye Redis Cluster las claves entre sus diferentes nodos maestros?",
    options: [
      "Dividiendo el rango de direcciones IP de los clientes.",
      "Asignando el espacio de claves a 16,384 'hash slots' virtuales fijos mediante la fórmula 'CRC16(key) % 16384'; cada nodo maestro del clúster es responsable de un subconjunto de esos 16,384 slots.",
      "Enviando cada comando al nodo con menor porcentaje de uso de memoria.",
      "Duplicando todas las claves en todos los nodos maestros por igual."
    ],
    correctAnswerIndex: 1,
    explanation: "Redis Cluster no usa consistent hashing puro con miles de vnodes, sino un espacio fijo de 16,384 hash slots. Cuando un cliente consulta un nodo equivocado, el servidor responde con '-MOVED slot ip:puerto' para que el cliente redirija la llamada.",
    topic: "Redis Cluster y Particionamiento",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-13",
    collectionId: "nosql",
    question: "¿Qué es un 'HyperLogLog' en Redis y cuál es su consumo de memoria característico?",
    options: [
      "Un registro de logs de auditoría que consume 500 MB por hora.",
      "Una estructura probabilística para estimar la cardinalidad de conjuntos masivos (conteo de elementos únicos) con un error estándar típico del 0.81%, consumiendo una cantidad de memoria fija y diminuta de solo 12 KB sin importar si se cuentan millones o miles de millones de elementos.",
      "Un algoritmo de ordenamiento rápido para listas enlazadas.",
      "Una biblioteca para procesar eventos en tiempo real con WebSockets."
    ],
    correctAnswerIndex: 1,
    explanation: "Contar millones de usuarios únicos con un Set tradicional requeriría gigabytes de RAM para almacenar cada UUID. HyperLogLog (PFADD/PFCOUNT) estima la cardinalidad basándose en patrones de ceros iniciales en el hash de los elementos usando solo 12 KB de memoria fija.",
    topic: "Estructuras de Datos Probabilísticas en Redis",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-14",
    collectionId: "nosql",
    question: "¿Qué peligro representa el uso de una clave de partición monótonamente creciente (como un timestamp secuencial) en bases de datos distribuidas como DynamoDB o Bigtable?",
    options: [
      "Provoca un desbordamiento del búfer en los clientes HTTP.",
      "Genera un grave 'punto caliente de escritura' (Write Hotspotting): todas las escrituras concurrentes se dirigen a la misma partición física individual correspondiente al rango de tiempo actual, saturando un solo nodo mientras el resto del clúster permanece inactivo.",
      "Obliga a cambiar la clave de partición cada 24 horas.",
      "Impide la creación de respaldos automáticos en la nube."
    ],
    correctAnswerIndex: 1,
    explanation: "En sistemas particionados por rango o hash, si la clave es secuencial (ej. fecha actual), todas las operaciones del instante presente caen en la misma partición física. Se soluciona aplicando 'salting' (prefijo aleatorio o hash del usuario) para dispersar los datos uniformemente.",
    topic: "Particionamiento y Hotspotting",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-15",
    collectionId: "nosql",
    question: "¿Qué es un CRDT (Conflict-Free Replicated Data Type) en bases de datos distribuidas y aplicaciones offline-first?",
    options: [
      "Un certificado digital para encriptar bases de datos en reposo.",
      "Una estructura de datos que puede ser replicada concurrentemente en múltiples nodos sin coordinación centralizada ni bloqueos, garantizando matemáticamente que cualquier réplica convergerá de forma determinista y autónoma al mismo estado idéntico resolviendo conflictos automáticamente.",
      "Un protocolo para apagar servidores durante picos de energía.",
      "Una herramienta para transformar bases de datos relacionales en NoSQL."
    ],
    correctAnswerIndex: 1,
    explanation: "Los CRDTs (como PN-Counters o RGA para texto colaborativo como Google Docs) tienen operaciones semilattice conmutativas y asociativas. No importa en qué orden o con qué retraso de red lleguen las mutaciones de los nodos, todas las réplicas convergen al mismo estado exacto sin bloqueos.",
    topic: "Sistemas Distribuidos y CRDTs",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-16",
    collectionId: "nosql",
    question: "¿Cuál es el límite máximo de tamaño estricto para un documento BSON individual en MongoDB?",
    options: [
      "1 MB.",
      "16 MB (para almacenar archivos más grandes se debe utilizar la especificación GridFS, que divide el archivo en fragmentos de 255 KB almacenados en colecciones 'chunks').",
      "512 MB.",
      "No existe límite de tamaño en MongoDB."
    ],
    correctAnswerIndex: 1,
    explanation: "El límite de 16 MB por documento previene que documentos individuales monopolicen la memoria RAM o saturen la red durante transferencias. Para archivos multimedia o grandes binarios, GridFS divide automáticamente el contenido en pequeños trozos vinculados.",
    topic: "MongoDB y Formato BSON",
    difficulty: "básico"
  },
  {
    id: "nosql-q-17",
    collectionId: "nosql",
    question: "¿Qué es 'Index HNSW' (Hierarchical Navigable Small World) en las bases de datos vectoriales modernas?",
    options: [
      "Un sistema para comprimir imágenes PNG sin pérdida de calidad.",
      "Un grafo multicapa de proximidad utilizado para la búsqueda eficiente de vecinos más cercanos aproximados (ANN - Approximate Nearest Neighbors) en espacios vectoriales de alta dimensión (embeddings de IA), ofreciendo búsquedas ultrarrápidas con complejidad O(log N).",
      "Un método de encriptación cuántica para contraseñas de bases de datos.",
      "Un protocolo para balancear tráfico web en clústeres de servidores."
    ],
    correctAnswerIndex: 1,
    explanation: "HNSW organiza los vectores en capas jerárquicas similares a una Skip List pero en forma de grafo. La búsqueda salta distancias largas en las capas superiores y afina la búsqueda en las capas inferiores densas, esencial para RAG y búsqueda semántica en IA a gran escala.",
    topic: "Bases de Datos Vectoriales y embeddings",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-18",
    collectionId: "nosql",
    question: "¿Cómo previene Redis el 'Cache Penetration' (penetración de caché provocada por consultas a claves inexistentes)?",
    options: [
      "Apagando el servidor Redis cuando se producen más de 100 fallos de clave.",
      "Almacenando en caché los valores nulos con un TTL corto ('cache null values') o utilizando un Filtro de Bloom por delante de la consulta a la base de datos para interceptar y rechazar de inmediato solicitudes de identificadores que nunca han existido.",
      "Reiniciando la base de datos relacional downstream.",
      "Cambiando las contraseñas de acceso a la red."
    ],
    correctAnswerIndex: 1,
    explanation: "La penetración de caché ocurre cuando atacantes solicitan millones de claves inexistentes (ej. id=-9999). Como no están en caché, todas las peticiones traspasan y golpean la base de datos relacional. Un Bloom Filter previo o guardar claves vacías con TTL corto evita el colapso.",
    topic: "Patrones de Caché con Redis",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-19",
    collectionId: "nosql",
    question: "¿Qué política de desalojo (Eviction Policy) de Redis descarta las claves que se han utilizado con menor frecuencia estadística cuando se alcanza el límite 'maxmemory'?",
    options: [
      "noeviction.",
      "allkeys-lfu (Least Frequently Used, que penaliza claves con menor frecuencia de accesos en el tiempo frente a LRU que solo mide el tiempo transcurrido desde el último acceso).",
      "volatile-random.",
      "allkeys-fifo."
    ],
    correctAnswerIndex: 1,
    explanation: "LRU (Least Recently Used) puede expulsar una clave que fue consultada un millón de veces solo porque nadie la consultó en el último minuto. LFU (Least Frequently Used) mide la frecuencia acumulada con decaimiento logarítmico, protegiendo las claves verdaderamente populares.",
    topic: "Políticas de Memoria en Redis",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-20",
    collectionId: "nosql",
    question: "¿Qué es el 'Gossip Protocol' (protocolo de chismes) en clústeres descentralizados como Apache Cassandra?",
    options: [
      "Un canal de chat entre los operadores del centro de datos.",
      "Un protocolo descentralizado entre pares (peer-to-peer) donde cada nodo intercambia información periódica del estado del clúster con unos pocos nodos aleatorios cada segundo, logrando convergencia rápida sobre la topología y detección de caídas de nodos sin requerir un maestro central.",
      "Un sistema para filtrar comentarios tóxicos en redes sociales.",
      "Un mecanismo para sincronizar el reloj del procesador mediante NTP."
    ],
    correctAnswerIndex: 1,
    explanation: "Cassandra no tiene un nodo maestro (arquitectura masterless). Los nodos utilizan Gossip para descubrirse mutuamente, monitorear la salud de sus compañeros mediante detectores de fallos phi-accrual y propagar cambios de topología de forma descentralizada.",
    topic: "Arquitectura Peer-to-Peer y Gossip",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-21",
    collectionId: "nosql",
    question: "¿Qué diferencia existe entre el lenguaje de consultas Cypher (usado en Neo4j) y SQL tradicional?",
    options: [
      "Cypher solo admite números enteros y no permite cadenas de texto.",
      "Cypher utiliza patrones visuales intuitivos basados en arte ASCII (como '(u:User)-[:AMIGO_DE]->(f:Friend)') para expresar recorridos y caminos en grafos sin necesidad de encadenar múltiples sentencias complejas de JOIN relacional.",
      "SQL solo puede ejecutarse en sistemas operativos de 16 bits.",
      "Cypher se compila a lenguaje ensamblador en cada consulta."
    ],
    correctAnswerIndex: 1,
    explanation: "Cypher es declarativo y visual: los nodos se representan con paréntesis '(nodo)' y las aristas dirigidas con flechas '-[:RELACION]->'. Esto simplifica radicalmente consultas de caminos, grafos de dependencias y análisis de redes frente a consultas SQL plagadas de joins recursivos.",
    topic: "Grafos y Lenguaje Cypher",
    difficulty: "básico"
  },
  {
    id: "nosql-q-22",
    collectionId: "nosql",
    question: "¿Cómo gestiona MongoDB las consultas de lectura cuando se configura un 'Read Preference' de 'secondaryPreferred'?",
    options: [
      "Rechaza todas las consultas si el nodo primario no está apagado.",
      "Dirige las consultas de lectura a un nodo secundario disponible para distribuir la carga de lecturas; si ningún secundario está disponible o accesible, redirige la consulta al nodo primario.",
      "Obliga a que las lecturas se sincronicen con el disco duro antes de retornar.",
      "Envía la consulta por correo electrónico al administrador del sistema."
    ],
    correctAnswerIndex: 1,
    explanation: "Read Preference controla cómo el driver enruta las lecturas en un Replica Set: 'primary' (por defecto, consistencia estricta), 'secondary' (solo secundarios), 'secondaryPreferred' (alivia al primario en lecturas tolerantes a cierta latencia de replicación eventual) y 'nearest'.",
    topic: "Lecturas y Enrutamiento en MongoDB",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-23",
    collectionId: "nosql",
    question: "¿Qué ventaja ofrece el uso de 'Hashtags' (ej. '{usuario_123}:perfil' y '{usuario_123}:pedidos') en las claves de Redis Cluster?",
    options: [
      "Permite publicar las claves directamente en la red social Twitter/X.",
      "Fuerza a que Redis Cluster calcule el hash slot utilizando únicamente el texto contenido dentro de las llaves '{...}', garantizando que ambas claves caigan en el mismo nodo físico del clúster para permitir operaciones multi-clave y transacciones atómicas.",
      "Comprime el nombre de la clave en formato Base64.",
      "Asigna automáticamente una contraseña criptográfica a la clave."
    ],
    correctAnswerIndex: 1,
    explanation: "Redis Cluster rechaza operaciones que involucren múltiples claves (ej. MGET, transacciones MULTI/EXEC) si las claves pertenecen a diferentes hash slots. Los Hashtags aseguran que múltiples claves relacionadas residan en el mismo slot y en el mismo nodo.",
    topic: "Redis Cluster y Hash Tags",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-24",
    collectionId: "nosql",
    question: "¿Cómo opera el mecanismo de 'Hinted Handoff' en bases de datos descentralizadas como DynamoDB o Cassandra?",
    options: [
      "Envía pistas al programador cuando escribe consultas SQL incorrectas.",
      "Si un nodo réplica destinado a recibir una escritura no está accesible temporalmente, el nodo coordinador guarda una nota ('hint') en su almacenamiento local; cuando el nodo caído vuelve a estar en línea, el coordinador le entrega los datos pendientes para restaurar la consistencia.",
      "Reinicia los routers de red para reparar la conexión física.",
      "Elimina las claves que contengan caracteres especiales."
    ],
    correctAnswerIndex: 1,
    explanation: "Hinted Handoff permite que el sistema continúe aceptando escrituras con alta disponibilidad (Sloppy Quorum) incluso durante caídas de red transitorias. El nodo que recibió la petición cuida los datos temporalmente hasta que el dueño legítimo se reincorpora al clúster.",
    topic: "Tolerancia a Fallos y Hinted Handoff",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-25",
    collectionId: "nosql",
    question: "¿Cuál es el propósito de los 'Change Streams' en MongoDB?",
    options: [
      "Cambiar el nombre de las colecciones de base de datos de forma aleatoria.",
      "Permitir a las aplicaciones suscribirse en tiempo real a todas las modificaciones de datos (inserciones, actualizaciones, borrados) que ocurren en colecciones, bases de datos o en todo el clúster, aprovechando el Oplog sin necesidad de realizar costosos sondeos periódicos (polling).",
      "Convertir bases de datos relacionales en colecciones NoSQL automáticamente.",
      "Medir la velocidad de transferencia de la conexión a internet."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Change Streams proporcionan una interfaz reactiva nativa para implementar arquitecturas orientadas a eventos y sincronizaciones de datos: cada mutación emite un evento estructurado con el documento modificado y su token de reanudación.",
    topic: "Change Data Capture (CDC) en MongoDB",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-26",
    collectionId: "nosql",
    question: "¿Qué es un 'Vector Clock' (o Version Vector) en sistemas de almacenamiento clave-valor distribuidos sin maestro?",
    options: [
      "Un reloj físico de cuarzo integrado en la placa madre del servidor.",
      "Un mecanismo para capturar la causalidad y detectar escrituras concurrentes conflictivas entre réplicas distribuidas, representando el reloj como un vector de contadores por nodo (ej. [NodoA:2, NodoB:1]); si dos vectores no son mutuamente dominantes, se detecta un conflicto que debe ser resuelto.",
      "Un temporizador que mide la latencia de las consultas de red.",
      "Un sistema para ordenar alfabéticamente las claves de la base de datos."
    ],
    correctAnswerIndex: 1,
    explanation: "Los relojes físicos sufren de desfase de reloj (clock skew). Los Vector Clocks no dependen del tiempo físico: modelan la relación de causalidad 'sucede-antes-de' (happens-before), permitiendo a la base de datos saber si una versión desciende de otra o si hubo escrituras concurrentes conflictivas.",
    topic: "Causalidad y Relojes Distribuidos",
    difficulty: "avanzado"
  },
  {
    id: "nosql-q-27",
    collectionId: "nosql",
    question: "¿Cuál es el antipatrón más común al modelar relaciones 'uno-a-muchos' en bases de datos de documentos como MongoDB?",
    options: [
      "Utilizar cadenas de texto para los nombres de los atributos.",
      "Embeber un array que crece indefinidamente (unbounded array) dentro de un único documento (ej. un producto con un array de millones de reseñas), lo que puede exceder el límite de 16 MB de BSON y degradar severamente el rendimiento de I/O por realocación de documentos.",
      "Crear más de dos índices en la misma colección.",
      "Almacenar números enteros en formato flotante."
    ],
    correctAnswerIndex: 1,
    explanation: "Embeber es ideal para relaciones con cardinalidad acotada (ej. direcciones de un usuario: 2 o 3). Pero para relaciones sin límite superior (ej. comentarios, sensores), embeber satura el límite de 16 MB del documento BSON; se debe modelar usando referencias o particionamiento por lotes.",
    topic: "Modelado de Datos en Document DBs",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-28",
    collectionId: "nosql",
    question: "¿Qué es el 'Inverted Index' (Índice Invertido) que impulsa los motores de búsqueda basados en documentos como Elasticsearch?",
    options: [
      "Un índice que ordena los números de mayor a menor obligatoriamente.",
      "Una estructura de datos que mapea cada término o palabra tokenizada hacia una lista de identificadores de documentos (posting list) que la contienen, junto con su posición y frecuencia, permitiendo búsquedas de texto completo en tiempo sub-segundo.",
      "Un archivo de configuración para invertir los colores de la pantalla.",
      "Un protocolo para enviar mensajes cifrados a través de la red."
    ],
    correctAnswerIndex: 1,
    explanation: "En lugar de buscar palabras leyendo cada documento secuencialmente, el índice invertido actúa como el índice analítico de un libro: para la palabra 'distribuido', tiene una lista directa de los documentos [12, 45, 98] donde aparece, logrando búsquedas instantáneas.",
    topic: "Motores de Búsqueda y Elasticsearch",
    difficulty: "básico"
  },
  {
    id: "nosql-q-29",
    collectionId: "nosql",
    question: "¿Qué diferencia existe entre el protocolo 'Redis Streams' y las listas de Redis ('RPUSH/BLPOP') para mensajería?",
    options: [
      "Redis Streams solo funciona con microprocesadores ARM.",
      "Las listas tradicionales consumen y destruyen el mensaje al leerlo (un solo consumidor por mensaje); Redis Streams modela un log append-only persistente con soporte para Grupos de Consumidores (Consumer Groups), confirmaciones ACK explícitas, lectura por rangos históricos y distribución balanceada de mensajes.",
      "Las listas de Redis admiten hasta 1 millón de mensajes y Streams solo 100.",
      "No existe diferencia; Streams es solo un alias sintáctico."
    ],
    correctAnswerIndex: 1,
    explanation: "Redis Streams proporciona una semántica de streaming de eventos muy similar a Apache Kafka dentro de Redis: los eventos permanecen en memoria ordenados por ID de tiempo, y múltiples grupos de consumidores pueden procesar y confirmar mensajes independientemente.",
    topic: "Mensajería y Redis Streams",
    difficulty: "intermedio"
  },
  {
    id: "nosql-q-30",
    collectionId: "nosql",
    question: "¿Cómo resuelve Apache Cassandra la consistencia entre réplicas en segundo plano mediante 'Read Repair'?",
    options: [
      "Reinstalando el sistema operativo en las réplicas secundarias.",
      "Durante una lectura con quórum, el coordinador compara los hashes o timestamps de los datos retornados por las réplicas; si detecta que una réplica tiene una versión anticuada de los datos, responde inmediatamente con la versión más reciente al cliente y de forma asíncrona envía una actualización a la réplica rezagada.",
      "Borrando todas las réplicas que no coincidan con el nodo primario.",
      "Bloqueando el tráfico de red hasta que el administrador intervenga."
    ],
    correctAnswerIndex: 1,
    explanation: "Read Repair es una técnica pasiva de auto-sanación (self-healing): cada operación de lectura aprovecha la consulta a múltiples nodos para detectar divergencias y enviar escrituras correctivas en segundo plano a las réplicas atrasadas, manteniendo saludable el clúster.",
    topic: "Consistencia y Auto-sanación en Cassandra",
    difficulty: "avanzado"
  }
];
