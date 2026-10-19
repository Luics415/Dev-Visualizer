import type { QuizQuestion } from "@/data/quizTypes";

export const databasesQuestions: QuizQuestion[] = [
  {
    id: "db-q-01",
    collectionId: "databases",
    question: "¿Qué anomalía de concurrencia previene el nivel de aislamiento 'Repeatable Read' que NO previene 'Read Committed' según el estándar SQL?",
    options: [
      "Dirty Read (Lectura Sucia).",
      "Non-Repeatable Read (Lectura No Repetible / Fuzzy Read: cuando una transacción relee una misma fila y observa que sus valores fueron modificados y confirmados por otra transacción concurrente).",
      "Write Skew (Desviación de Escritura).",
      "Divisiones por cero en sentencias aritméticas."
    ],
    correctAnswerIndex: 1,
    explanation: "Read Committed permite que una transacción vea los cambios confirmados de otros entre consultas sucesivas (Lectura No Repetible). Repeatable Read garantiza que cualquier fila leída permanezca con la misma instantánea durante toda la transacción.",
    topic: "Niveles de Aislamiento y Transacciones",
    difficulty: "intermedio"
  },
  {
    id: "db-q-02",
    collectionId: "databases",
    question: "¿Cómo implementa MVCC (Multi-Version Concurrency Control) el principio de que 'los lectores no bloquean a los escritores y los escritores no bloquean a los lectores'?",
    options: [
      "Guardando todos los datos en la memoria caché del navegador del cliente.",
      "Cuando se actualiza o borra una fila, el motor no sobrescribe los datos en su lugar; en su lugar, conserva la versión anterior marcando metadatos de visibilidad de transacción (como xmin/xmax en PostgreSQL o undo logs en InnoDB), sirviendo a cada transacción la versión histórica que le corresponde.",
      "Ejecutando todas las consultas en un solo hilo de la CPU de forma secuencial.",
      "Duplicando la base de datos en un disco duro secundario en cada escritura."
    ],
    correctAnswerIndex: 1,
    explanation: "MVCC desacopla lecturas de escrituras. Un lector ve un snapshot inmutable correspondiente al momento de inicio de su transacción (o sentencia), permitiendo que transacciones de escritura creen nuevas versiones de filas concurrentemente sin bloquear las lecturas.",
    topic: "MVCC y Motores de Almacenamiento",
    difficulty: "avanzado"
  },
  {
    id: "db-q-03",
    collectionId: "databases",
    question: "¿Qué es un 'Write-Ahead Log' (WAL o Redo Log) y por qué es indispensable para la Durabilidad y Rendimiento en bases de datos relacionales?",
    options: [
      "Un archivo de texto donde se anotan los nombres de los usuarios que han iniciado sesión.",
      "Un registro secuencial append-only en disco donde se registran todas las modificaciones antes de aplicarlas a las páginas de datos en memoria (búferes sucios); garantiza recuperación ante caídas sin forzar escrituras aleatorias lentas en las tablas durante cada commit.",
      "Un software antivirus para prevenir inyecciones SQL.",
      "Una copia de seguridad comprimida que se envía por correo electrónico cada noche."
    ],
    correctAnswerIndex: 1,
    explanation: "Escribir páginas de datos aleatorias en disco en cada transacción sería destructivo para el I/O. El WAL convierte escrituras dispersas en un flujo secuencial ultrarrápido: una transacción se confirma tan pronto como su registro entra en el WAL (con fsync), garantizando Durabilidad (D de ACID).",
    topic: "Arquitectura de Almacenamiento y WAL",
    difficulty: "avanzado"
  },
  {
    id: "db-q-04",
    collectionId: "databases",
    question: "¿Cómo opera el algoritmo de unión 'Hash Join' en el planificador de consultas de un motor relacional?",
    options: [
      "Ordena ambas tablas alfabéticamente y las fusiona mediante dos punteros simultáneos.",
      "Escanea la tabla más pequeña (Build Phase) y construye una tabla hash en memoria con la clave de unión; luego escanea la tabla más grande (Probe Phase) buscando coincidencias instantáneas en la tabla hash O(1).",
      "Ejecuta dos bucles anidados evaluando cada fila de la tabla A contra todas las filas de la tabla B.",
      "Calcula sumas criptográficas SHA-256 de todas las columnas."
    ],
    correctAnswerIndex: 1,
    explanation: "Hash Join es sumamente eficiente para unir conjuntos de datos masivos no indexados con operadores de igualdad (=). Se divide en construir la tabla hash con el conjunto menor en memoria y luego sondear (probe) con cada registro del conjunto mayor.",
    topic: "Algoritmos de Join y Optimizador",
    difficulty: "intermedio"
  },
  {
    id: "db-q-05",
    collectionId: "databases",
    question: "¿Por qué una consulta con 'WHERE YEAR(created_at) = 2026' no puede aprovechar un índice B-Tree estándar sobre 'created_at' (antipatrón no-SARGable)?",
    options: [
      "Porque los índices B-Tree no admiten columnas de fecha o timestamp.",
      "Porque envolver la columna indexada en una función obliga al motor a ejecutar 'YEAR()' sobre cada una de las filas de la tabla mediante un escaneo secuencial (Full Table Scan), en lugar de buscar directamente en el árbol ordenado (Index Seek con 'WHERE created_at >= ... AND created_at < ...').",
      "Porque el año 2026 excede el rango máximo de enteros de 32 bits.",
      "Porque los índices se eliminan automáticamente cuando finaliza el año en curso."
    ],
    correctAnswerIndex: 1,
    explanation: "Las expresiones SARGable (Search Argument Able) permiten al optimizador comparar directamente contra los valores indexados en el árbol. Aplicar funciones a la columna (ej. LOWER(email), YEAR(fecha)) destruye la posibilidad de un Index Seek salvo que exista un índice sobre la función.",
    topic: "Optimización de Consultas y SARGability",
    difficulty: "intermedio"
  },
  {
    id: "db-q-06",
    collectionId: "databases",
    question: "¿Cuál es la regla del 'Prefijo Más a la Izquierda' (Leftmost Prefix Rule) en un índice compuesto B-Tree sobre '(col_a, col_b, col_c)'?",
    options: [
      "Las columnas deben ordenarse de derecha a izquierda según la hora de creación.",
      "El índice solo puede ser utilizado para búsquedas de rango o igualdad si la consulta filtra por 'col_a' (o 'col_a' y 'col_b'); una consulta que solo filtre por 'col_b' o 'col_c' no podrá usar la estructura ordenada del índice.",
      "La primera columna del índice debe ser obligatoriamente de tipo VARCHAR.",
      "El índice solo almacena valores negativos de las columnas."
    ],
    correctAnswerIndex: 1,
    explanation: "Un índice B-Tree compuesto está ordenado primero por col_a, luego por col_b dentro de cada col_a, y luego por col_c. Es similar a una guía telefónica (Apellido, Nombre): buscar por 'Apellido = García' es inmediato, pero buscar solo por 'Nombre = Juan' exige leer todo el libro.",
    topic: "Estructuras de Índices B-Tree",
    difficulty: "intermedio"
  },
  {
    id: "db-q-07",
    collectionId: "databases",
    question: "¿Qué es un 'Covering Index' (Índice Cubridor) y qué ventaja proporciona el 'Index-Only Scan'?",
    options: [
      "Un índice que protege la base de datos contra ataques de ransomware.",
      "Un índice que contiene todas las columnas requeridas por una consulta (en su clave o mediante la cláusula 'INCLUDE'); el motor responde a la consulta extrayendo los datos directamente desde las páginas del índice sin necesidad de acceder a la tabla principal (Heap/Table Access).",
      "Un índice que cubre el 100% de las tablas del esquema relacional.",
      "Un índice temporal que se crea en la memoria RAM durante transacciones bancarias."
    ],
    correctAnswerIndex: 1,
    explanation: "El acceso a la tabla (Heap Fetch) es la parte más costosa de una consulta por índice. Si el índice ya contiene todas las columnas solicitadas en el SELECT y WHERE (Covering Index), el motor realiza un Index-Only Scan ahorrando millones de I/Os a disco.",
    topic: "Índices y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "db-q-08",
    collectionId: "databases",
    question: "¿Qué diferencia existe entre 'DENSE_RANK()' y 'RANK()' en las funciones de ventana (Window Functions) de SQL?",
    options: [
      "DENSE_RANK() solo opera sobre números flotantes y RANK() sobre enteros.",
      "Ambas asignan el mismo rango a valores empatados, pero 'RANK()' deja huecos numéricos en la secuencia tras un empate (ej. 1, 2, 2, 4), mientras que 'DENSE_RANK()' genera rangos continuos sin huecos (ej. 1, 2, 2, 3).",
      "RANK() ordena de forma descendente y DENSE_RANK() ascendente.",
      "DENSE_RANK() solo puede utilizarse en motores MySQL."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando existen empates, RANK() salta posiciones para reflejar la cantidad real de filas precedentes (1, 2, 2, 4). DENSE_RANK() no salta valores y mantiene la secuencia estrictamente densa y contigua (1, 2, 2, 3).",
    topic: "SQL Avanzado y Window Functions",
    difficulty: "básico"
  },
  {
    id: "db-q-09",
    collectionId: "databases",
    question: "¿Qué problema causa la omisión de un índice sobre una columna que tiene una restricción de Clave Foránea (Foreign Key) en bases de datos como PostgreSQL u Oracle?",
    options: [
      "Impide realizar consultas SELECT sobre la tabla hija.",
      "Operaciones de eliminación (DELETE) o actualización de la clave primaria en la tabla padre pueden provocar un bloqueo completo de la tabla hija (Full Table Lock) o costosos escaneos secuenciales para verificar la integridad referencial.",
      "Convierte la clave foránea en una cadena de texto vacía.",
      "Provoca que la base de datos se reinicie automáticamente tras 10 minutos."
    ],
    correctAnswerIndex: 1,
    explanation: "Muchas bases de datos crean índices automáticos para la clave primaria, pero NO para las claves foráneas. Si la columna foránea no está indexada, cada DELETE en la tabla padre requiere escanear toda la tabla hija para comprobar si existen huérfanos, generando bloqueos severos.",
    topic: "Diseño Físico e Integridad Referencial",
    difficulty: "avanzado"
  },
  {
    id: "db-q-10",
    collectionId: "databases",
    question: "¿Qué es el fenómeno de 'Tuplas Muertas' (Dead Tuples) y por qué es crítico el proceso 'VACUUM' en PostgreSQL?",
    options: [
      "Registros borrados por usuarios que intentan recuperar sus contraseñas.",
      "Debido al modelo MVCC de PostgreSQL, los UPDATE y DELETE no sobrescriben espacio físico sino que dejan versiones anteriores de filas marcadas como muertas; VACUUM reclama ese espacio para que pueda ser reutilizado por nuevas inserciones y evita el desbordamiento de identificadores de transacción (TXID Wraparound).",
      "Errores de conexión en el pool de PgBouncer.",
      "Particiones de tablas que han superado los 10 años de antigüedad."
    ],
    correctAnswerIndex: 1,
    explanation: "En Postgres, un UPDATE es un INSERT de una tupla nueva más la invalidación de la vieja. Si el autovacuum no limpia periódicamente esas filas muertas (bloat), las tablas y sus índices se inflan en gigabytes de datos obsoletos, ralentizando todas las consultas.",
    topic: "PostgreSQL Internals y Mantenimiento",
    difficulty: "avanzado"
  },
  {
    id: "db-q-11",
    collectionId: "databases",
    question: "¿Cuál es la diferencia fundamental entre un 'Clustered Index' (Índice Agrupado) y un 'Secondary Index' (Índice Secundario) en MySQL InnoDB?",
    options: [
      "El índice agrupado solo funciona en memoria RAM.",
      "La tabla física InnoDB ESTÁ organizada físicamente según el Clustered Index (habitualmente la Clave Primaria), almacenando los datos completos de las filas en sus nodos hoja; los índices secundarios no almacenan los datos de la fila, sino una copia de la clave primaria.",
      "Los índices secundarios se ordenan aleatoriamente para balancear la carga.",
      "Una tabla puede tener hasta 16 índices agrupados simultáneos."
    ],
    correctAnswerIndex: 1,
    explanation: "En InnoDB, una tabla es un índice agrupado (Index-Organized Table). Las hojas del árbol de la PK contienen la fila completa. Un índice secundario contiene el valor indexado y la PK; al buscar por secundario, el motor debe hacer un 'lookup' adicional en el clustered index para obtener el resto de columnas.",
    topic: "Motores de Almacenamiento e InnoDB",
    difficulty: "avanzado"
  },
  {
    id: "db-q-12",
    collectionId: "databases",
    question: "¿Qué anomalía de concurrencia representa el 'Write Skew' (Desviación de Escritura) en el nivel Repeatable Read?",
    options: [
      "Escribir texto en columnas de tipo entero numérico.",
      "Ocurre cuando dos transacciones concurrentes leen un estado común que satisface una restricción de negocio global, pero ambas realizan escrituras en filas separadas que conjuntamente violan la invariante del sistema, anomalía solo evitable con nivel 'Serializable' o cerrojos explícitos.",
      "La pérdida de datos por cortes de electricidad en el centro de datos.",
      "La corrupción de un archivo de log debido a una escritura parcial en disco."
    ],
    correctAnswerIndex: 1,
    explanation: "Ejemplo clásico: dos médicos de guardia intentan pedir baja a la vez (regla: debe quedar al menos 1 médico). Ambos leen que hay 2 médicos activos; el médico A pide baja y el médico B pide baja en registros distintos. Bajo Repeatable Read ambas confirman con éxito, dejando 0 médicos de guardia.",
    topic: "Anomalías de Concurrencia y Serializabilidad",
    difficulty: "avanzado"
  },
  {
    id: "db-q-13",
    collectionId: "databases",
    question: "¿Qué ventaja ofrece un índice BRIN (Block Range Index) en PostgreSQL frente a un índice B-Tree tradicional?",
    options: [
      "Permite búsquedas de texto completo en archivos PDF.",
      "Ocupa una fracción minúscula de memoria (órdenes de magnitud menor que un B-Tree) al registrar únicamente el valor mínimo y máximo de cada bloque físico de páginas en disco, ideal para tablas masivas de cientos de millones de filas cuyos datos se insertan ordenados por tiempo.",
      "Previene la duplicidad de valores nulos en columnas secundarias.",
      "Convierte la tabla relacional en una base de datos de grafos."
    ],
    correctAnswerIndex: 1,
    explanation: "Para tablas de series temporales o logs de 100 GB, un B-Tree puede ocupar 20 GB de RAM. Un índice BRIN puede ocupar apenas 500 KB porque solo anota 'en el bloque 1 las fechas van del 1 al 5 de enero'. Si la consulta busca 3 de enero, solo lee ese bloque físico.",
    topic: "Índices Especializados en PostgreSQL",
    difficulty: "avanzado"
  },
  {
    id: "db-q-14",
    collectionId: "databases",
    question: "¿Qué sucede internamente cuando se ejecuta una consulta con 'SELECT ... FOR UPDATE SKIP LOCKED'?",
    options: [
      "La consulta ignora todos los datos corruptos de la tabla.",
      "Adquiere un bloqueo exclusivo a nivel de fila sobre los registros coincidentes, pero en lugar de esperar a que otras transacciones concurrentes liberen sus cerrojos, omite silenciosamente las filas que ya estén bloqueadas por otros procesos, ideal para colas de trabajo distribuidas concurrentes.",
      "Desbloquea todas las tablas de la base de datos de forma forzada.",
      "Cancela la transacción si el tiempo de espera excede 1 milisegundo."
    ],
    correctAnswerIndex: 1,
    explanation: "SKIP LOCKED es la base para implementar colas de tareas hiperconcurrente en PostgreSQL o MySQL: múltiples workers pueden consultar 'SELECT id FROM jobs WHERE status = 'pending' LIMIT 1 FOR UPDATE SKIP LOCKED' y cada uno tomará un trabajo diferente sin bloquearse mutuamente.",
    topic: "Bloqueos y Concurrencia",
    difficulty: "intermedio"
  },
  {
    id: "db-q-15",
    collectionId: "databases",
    question: "¿Cuál es la diferencia entre el tipo 'JSON' y 'JSONB' en PostgreSQL?",
    options: [
      "JSON solo admite números enteros y JSONB admite cadenas de caracteres.",
      "'JSON' almacena una copia textual exacta del texto JSON (requiere reparsear en cada lectura y preserva espacios en blanco y orden de claves); 'JSONB' almacena una representación binaria descompuesta que es más rápida de consultar, elimina duplicados y admite índices GIN eficientes.",
      "JSONB comprime los datos con el algoritmo gzip al guardar en disco.",
      "JSON es nativo de PostgreSQL y JSONB es un plugin de terceros."
    ],
    correctAnswerIndex: 1,
    explanation: "JSONB incurre en una ligera penalización al escribir debido a la conversión a formato binario descompuesto, pero las lecturas son significativamente más rápidas y permite indexar claves o arrays internos mediante índices GIN, superando al tipo JSON crudo en casi cualquier aplicación.",
    topic: "Almacenamiento de Datos Semiestructurados",
    difficulty: "intermedio"
  },
  {
    id: "db-q-16",
    collectionId: "databases",
    question: "¿Qué optimización introduce la cláusula 'REFRESH MATERIALIZED VIEW CONCURRENTLY' en PostgreSQL?",
    options: [
      "Actualiza la vista materializada sin requerir conexión a internet.",
      "Permite refrescar el contenido de la vista materializada con los datos más recientes sin bloquear las consultas de lectura entrantes sobre la vista, requiriendo como condición previa que la vista posea al menos un índice único sobre una columna identificadora.",
      "Convierte la vista en una tabla temporal de sesión.",
      "Borra automáticamente los registros más antiguos de la vista."
    ],
    correctAnswerIndex: 1,
    explanation: "El refresco estándar bloquea la vista con un cerrojo exclusivo impidiendo todas las lecturas mientras se computan los datos. Con CONCURRENTLY, Postgres computa la diferencia y aplica los cambios atómicamente mientras los usuarios siguen leyendo de la vista sin interrupciones.",
    topic: "Vistas Materializadas",
    difficulty: "intermedio"
  },
  {
    id: "db-q-17",
    collectionId: "databases",
    question: "¿Qué es la Tercera Forma Normal (3NF) en el diseño de bases de datos relacionales?",
    options: [
      "Una regla que exige que cada tabla tenga exactamente tres columnas.",
      "Una tabla está en 3NF si está en 2NF y ninguna columna no primaria depende transitivamente de la clave primaria (es decir, cada atributo que no es clave depende únicamente de la clave primaria y de nada más que de la clave primaria).",
      "Un algoritmo para cifrar tablas con tres contraseñas distintas.",
      "Una política para crear tres réplicas exactas de cada fila en servidores distintos."
    ],
    correctAnswerIndex: 1,
    explanation: "La 3NF elimina redundancias derivadas de dependencias transitivas: si A determina B y B determina C, C no debe estar en la misma tabla que A. 'Cada atributo debe depender de la clave, de toda la clave y de nada más que de la clave, que me ayude Codd'.",
    topic: "Normalización de Datos",
    difficulty: "básico"
  },
  {
    id: "db-q-18",
    collectionId: "databases",
    question: "¿Cómo funciona la replicación semisincrónica (Semi-Synchronous Replication) frente a la replicación asincrónica pura?",
    options: [
      "La semisincrónica solo sincroniza los datos los días hábiles.",
      "En asincrónica, el nodo primario confirma la transacción al cliente inmediatamente tras escribir localmente (riesgo de pérdida ante caída); en semisincrónica, el primario espera la confirmación de que al menos una réplica secundaria haya recibido y escrito el evento en su relay log antes de confirmar al cliente.",
      "La semisincrónica requiere que todas las réplicas del clúster ejecuten commit local en disco.",
      "La semisincrónica borra los datos de la réplica si el nodo principal se apaga."
    ],
    correctAnswerIndex: 1,
    explanation: "La replicación semisincrónica ofrece un equilibrio perfecto entre rendimiento y durabilidad: protege contra pérdidas de transacciones si el nodo primario muere catastróficamente, sin sufrir la latencia masiva de esperar a que todas las réplicas hagan commit en sus motores locales.",
    topic: "Alta Disponibilidad y Replicación",
    difficulty: "avanzado"
  },
  {
    id: "db-q-19",
    collectionId: "databases",
    question: "¿Qué riesgo presenta la reutilización masiva de identificadores de transacción conocido como 'TXID Wraparound' en PostgreSQL?",
    options: [
      "Que el servidor se quede sin espacio libre en el disco rígido.",
      "Los identificadores de transacción son enteros de 32 bits (unos 4 mil millones de transacciones); si no se ejecuta VACUUM para 'congelar' (freeze) tuplas antiguas, el contador reinicia a 0 y las transacciones pasadas parecerían estar en el futuro, haciendo que datos históricos se vuelvan invisibles.",
      "Que los nombres de las tablas se renombren automáticamente con letras al azar.",
      "Que el puerto de red 5432 se cierre por sobrecalentamiento."
    ],
    correctAnswerIndex: 1,
    explanation: "PostgreSQL compara xmin de las filas contra el TXID actual con aritmética circular modular. Para evitar que filas muy viejas parezcan 'futuras' al dar la vuelta al reloj de 32 bits, autovacuum congela las tuplas convirtiendo su estado en universalmente visible.",
    topic: "PostgreSQL Internals y Confiabilidad",
    difficulty: "avanzado"
  },
  {
    id: "db-q-20",
    collectionId: "databases",
    question: "¿Qué es un 'Bitmap Index Scan' en un plan de ejecución de PostgreSQL?",
    options: [
      "Un algoritmo para procesar imágenes fotográficas dentro de columnas BLOB.",
      "Una estrategia en dos fases: primero consulta uno o varios índices para construir un mapa de bits en memoria con las direcciones de las páginas de disco relevantes (permitiendo combinar múltiples índices con operadores AND/OR lógicos), y luego lee las páginas de disco secuencialmente.",
      "Un análisis de la fragmentación de la memoria caché del procesador.",
      "Un escaneo que convierte todos los datos en formato hexadecimal."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando un Index Scan directo causaría demasiados saltos aleatorios en disco pero un Seq Scan sería demasiado lento, el Bitmap Index Scan combina las ventajas: crea un mapa de bits de las páginas físicas que contienen aciertos y las lee de forma contigua y ordenada.",
    topic: "Planes de Ejecución y EXPLAIN",
    difficulty: "avanzado"
  },
  {
    id: "db-q-21",
    collectionId: "databases",
    question: "¿Qué garantiza el uso de 'Row-Level Security' (RLS) en bases de datos relacionales modernas?",
    options: [
      "Cifra cada fila individual con una contraseña distinta.",
      "Aplica políticas de seguridad declarativas directamente en el motor de la base de datos que filtran y restringen de forma transparente qué filas puede ver o mutar cada usuario o sesión según su contexto de autenticación, independientemente de la consulta SQL ejecutada.",
      "Impide que se guarden más de 100 caracteres por columna.",
      "Bloquea la edición de tablas durante fines de semana."
    ],
    correctAnswerIndex: 1,
    explanation: "Con RLS habilitado (ej. 'CREATE POLICY user_isolation ON orders USING (user_id = current_user_id())'), el motor inyecta automáticamente la cláusula de seguridad en cada SELECT, UPDATE o DELETE, previniendo brechas de datos si la aplicación comete un error en el WHERE.",
    topic: "Seguridad y Control de Acceso",
    difficulty: "intermedio"
  },
  {
    id: "db-q-22",
    collectionId: "databases",
    question: "¿Cuál es la función del comando 'ANALYZE' en PostgreSQL o MySQL?",
    options: [
      "Buscar código malicioso o inyecciones SQL en los datos almacenados.",
      "Recopilar estadísticas actualizadas sobre la distribución de valores en las tablas y columnas (histogramas, frecuencias, cardinalidad), las cuales son fundamentales para que el Optimizador de Consultas pueda estimar costes y elegir el plan de ejecución más eficiente.",
      "Eliminar registros duplicados de las tablas de negocio.",
      "Desfragmentar los índices del disco duro en frío."
    ],
    correctAnswerIndex: 1,
    explanation: "El optimizador de consultas es ciego sin estadísticas precisas. Si las estadísticas están desactualizadas (ej. tras una carga masiva de datos), el motor puede estimar erróneamente que una tabla tiene 10 filas en vez de 10 millones, eligiendo un Nested Loop devastador en vez de un Hash Join.",
    topic: "Optimizador de Consultas y Estadísticas",
    difficulty: "intermedio"
  },
  {
    id: "db-q-23",
    collectionId: "databases",
    question: "¿Qué es una consulta 'CTE Recursiva' (Common Table Expression con RECURSIVE) en SQL estándar?",
    options: [
      "Una consulta que genera un bucle infinito que apaga el servidor.",
      "Una estructura que consta de un término ancla (anchor member) no recursivo y un término recursivo combinado con UNION ALL, permitiendo consultar y recorrer estructuras jerárquicas o en grafo (como árboles organizacionales o rutas de transporte) en SQL puro.",
      "Una vista que se actualiza automáticamente cada 5 segundos.",
      "Una función para calcular potencias matemáticas de números enteros."
    ],
    correctAnswerIndex: 1,
    explanation: "Las CTEs recursivas resuelven elegantemente problemas de jerarquías de profundidad arbitraria (como categorías anidadas o grafos de amigos) evaluando repetidamente el término recursivo contra los resultados del paso anterior hasta que se produce un conjunto vacío.",
    topic: "SQL Avanzado y Grafos",
    difficulty: "intermedio"
  },
  {
    id: "db-q-24",
    collectionId: "databases",
    question: "¿Qué diferencia existe entre un bloqueo de tipo 'Advisory Lock' en PostgreSQL y un bloqueo ordinario de fila ('FOR UPDATE')?",
    options: [
      "Los Advisory Locks solo pueden adquirirse por usuarios con permisos de superusuario.",
      "Los Advisory Locks son cerrojos de nivel de aplicación definidos puramente por números de 64 bits sin estar atados a ninguna fila o tabla física; la base de datos gestiona su concurrencia y liberación pero el significado semántico del lock lo dicta la lógica de la aplicación.",
      "Los bloqueos de fila se almacenan en el registro de Windows.",
      "Los Advisory Locks no son compatibles con transacciones ACID."
    ],
    correctAnswerIndex: 1,
    explanation: "pg_advisory_lock(int8) permite usar la base de datos como un sistema de cerrojos distribuidos de alto rendimiento para coordinar tareas en el backend (como cronjobs para evitar ejecuciones duplicadas) sin necesidad de crear tablas auxiliares ni bloquear filas de negocio.",
    topic: "Bloqueos y Concurrencia",
    difficulty: "avanzado"
  },
  {
    id: "db-q-25",
    collectionId: "databases",
    question: "¿Qué optimización realiza el motor de base de datos mediante 'Partition Pruning' (Poda de Particiones)?",
    options: [
      "Eliminar físicamente particiones que contengan datos de más de 5 años de antigüedad.",
      "El optimizador de consultas analiza las condiciones de filtrado en el WHERE y descarta en tiempo de planificación o ejecución las particiones que matemáticamente no pueden contener datos relevantes, leyendo únicamente las particiones necesarias en lugar de la tabla completa.",
      "Comprimir las particiones inactivas en formato tar.gz.",
      "Reorganizar las particiones alfabéticamente según su nombre."
    ],
    correctAnswerIndex: 1,
    explanation: "Si una tabla particionada por rangos de fecha tiene 365 particiones (una por día) y la consulta pide 'WHERE fecha = '2026-10-18'', el motor poda (prune) las otras 364 particiones y solo abre y busca en el archivo físico correspondiente a ese día.",
    topic: "Particionamiento de Tablas",
    difficulty: "intermedio"
  },
  {
    id: "db-q-26",
    collectionId: "databases",
    question: "¿Qué es el modo de pool 'Transaction Pooling' en PgBouncer y qué limitación impone sobre las sesiones de PostgreSQL?",
    options: [
      "Cancela todas las transacciones que demoren más de 1 segundo.",
      "Asigna una conexión física al cliente solo mientras dura una transacción activa y la devuelve al pool tan pronto como se ejecuta COMMIT o ROLLBACK; prohíbe el uso de características de nivel de sesión continua como tablas temporales o 'LISTEN / NOTIFY'.",
      "Duplica el consumo de memoria RAM por cada conexión entrante.",
      "Impide la ejecución de sentencias de tipo INSERT o UPDATE."
    ],
    correctAnswerIndex: 1,
    explanation: "El Transaction Pooling de PgBouncer permite soportar decenas de miles de conexiones cliente con solo unas pocas decenas de conexiones físicas a Postgres. Sin embargo, dado que dos transacciones del mismo cliente pueden ejecutarse en conexiones físicas distintas, no se pueden usar variables de sesión ni tablas temporales.",
    topic: "Connection Pooling y PgBouncer",
    difficulty: "avanzado"
  },
  {
    id: "db-q-27",
    collectionId: "databases",
    question: "¿Por qué el uso de 'Prepared Statements' (Sentencias Preparadas) protege de forma absoluta contra inyecciones SQL (SQL Injection)?",
    options: [
      "Porque eliminan las letras comillas de la cadena de texto de entrada.",
      "Porque separan completamente la compilación del código SQL del paso de los parámetros de datos: el motor de la base de datos compila el AST y el plan de ejecución primero con marcadores de posición ($1, ?), garantizando que los datos del usuario se traten estrictamente como literales y nunca como código ejecutable.",
      "Porque cifran las peticiones utilizando claves RSA de 4096 bits.",
      "Porque convierten todas las sentencias en procedimientos almacenados."
    ],
    correctAnswerIndex: 1,
    explanation: "La inyección SQL ocurre cuando los datos de usuario alteran la estructura sintáctica del comando SQL. Con sentencias preparadas, la consulta ya está parseada y compilada antes de recibir los valores de los parámetros; es estructuralmente imposible que un parámetro altere la semántica del comando.",
    topic: "Seguridad y SQL Injection",
    difficulty: "básico"
  },
  {
    id: "db-q-28",
    collectionId: "databases",
    question: "¿Qué es un índice 'GIN' (Generalized Inverted Index) y cuál es su caso de uso óptimo en bases de datos relacionales?",
    options: [
      "Un índice exclusivo para ordenar números negativos en tiempo constante.",
      "Un índice invertido que mapea elementos individuales dentro de estructuras compuestas hacia las filas donde aparecen, óptimo para columnas con múltiples valores internos como documentos JSONB, arrays, vectores de búsqueda de texto completo (tsvector) y trigonometría geoespacial.",
      "Un índice para acelerar operaciones matemáticas de multiplicación.",
      "Una estructura para compactar tablas históricas en sistemas OLAP."
    ],
    correctAnswerIndex: 1,
    explanation: "A diferencia de un B-Tree que indexa el valor completo de la columna, un índice GIN indexa los componentes internos: cada palabra o clave/valor de un JSONB apunta a una lista de filas que lo contienen, permitiendo consultas instantáneas con el operador de contención '@>'.",
    topic: "Índices GIN y Búsqueda Avanzada",
    difficulty: "avanzado"
  },
  {
    id: "db-q-29",
    collectionId: "databases",
    question: "¿Cómo resuelve la sintaxis 'INSERT ... ON CONFLICT DO UPDATE' (Upsert) las colisiones concurrentes frente a una verificación ingenua previa con SELECT?",
    options: [
      "Detiene el servidor durante 5 segundos antes de reintentar.",
      "Ejecuta la inserción de forma atómica a nivel de motor: si el índice único detecta una colisión de clave, ejecuta inmediatamente la actualización sin la condición de carrera (race condition) inherente a un 'SELECT y luego INSERT/UPDATE' en dos pasos.",
      "Borra la fila colisionada antes de insertar la nueva.",
      "Asigna una clave primaria aleatoria a la nueva fila."
    ],
    correctAnswerIndex: 1,
    explanation: "Verificar 'si existe registro con SELECT, entonces UPDATE, sino INSERT' es vulnerable a carreras: dos procesos pueden ver que no existe a la vez e intentar el INSERT, fallando uno con duplicate key. 'ON CONFLICT' garantiza atomicidad en una sola operación a nivel de motor.",
    topic: "Operaciones Atómicas y Upsert",
    difficulty: "intermedio"
  },
  {
    id: "db-q-30",
    collectionId: "databases",
    question: "¿Qué diferencia existe entre un respaldo lógico ('pg_dump') y un respaldo físico en caliente (como pgBackRest o Barman con WAL archiving)?",
    options: [
      "El respaldo lógico genera archivos de audio y el físico archivos de video.",
      "El respaldo lógico exporta las sentencias SQL necesarias para recrear el esquema y los datos (lento en bases de datos de varios terabytes y no permite PITR exacto); el respaldo físico copia los bloques de archivos de datos crudos a nivel de sistema operativo y los combina con el WAL archivado permitiendo Point-In-Time Recovery (PITR) a cualquier segundo exacto.",
      "El respaldo físico solo puede realizarse con el servidor apagado.",
      "El respaldo lógico no es compatible con versiones posteriores de PostgreSQL."
    ],
    correctAnswerIndex: 1,
    explanation: "Para bases de datos de producción críticas, los respaldos lógicos son insuficientes por tiempo de restauración. Los respaldos físicos en bloque combinados con streaming de WAL permiten Point-in-Time Recovery: restaurar la base de datos al estado exacto de las 14:32:15 antes de un error humano.",
    topic: "Backups, Disaster Recovery y PITR",
    difficulty: "avanzado"
  }
];
