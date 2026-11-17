import type { QuizQuestion } from "@/data/quizTypes";

export const sqlQuestions: QuizQuestion[] = [
  {
    "id": "sql-q-01",
    "collectionId": "sql",
    "question": "En SQL (Optimización de consultas), ¿qué función técnica cumple «Cost model»?",
    "options": [
      "Estima el gasto de entrada, salida y procesador de distintos caminos para elegir el mejor plan.",
      "Reutiliza planes compilados cuidando que un primer parámetro atípico no degrade al resto.",
      "Mantiene múltiples variantes de plan según la selectividad del valor pasado al parámetro.",
      "Registra correlación y dependencias funcionales entre columnas para corregir estimaciones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cost model (Optimización de consultas): Estima el gasto de entrada, salida y procesador de distintos caminos para elegir el mejor plan.",
    "topic": "Optimización de consultas",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-02",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Predicate pushdown» en optimización de consultas?",
    "options": [
      "Reutiliza planes compilados cuidando que un primer parámetro atípico no degrade al resto al operar.",
      "Traslada filtros hacia las hojas del árbol de ejecución para descartar filas lo antes posible.",
      "Mantiene múltiples variantes de plan según la selectividad del valor pasado al parámetro al operar.",
      "Registra correlación y dependencias funcionales entre columnas para corregir estimaciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Predicate pushdown (Optimización de consultas): Traslada filtros hacia las hojas del árbol de ejecución para descartar filas lo antes posible.",
    "topic": "Optimización de consultas",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-03",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Plan cache y parameter sensitivity»?",
    "options": [
      "Mantiene múltiples variantes de plan según la selectividad del valor pasado al parámetro.",
      "Registra correlación y dependencias funcionales entre columnas para corregir estimaciones.",
      "Reutiliza planes compilados cuidando que un primer parámetro atípico no degrade al resto.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Plan cache y parameter sensitivity (Optimización de consultas): Reutiliza planes compilados cuidando que un primer parámetro atípico no degrade al resto.",
    "topic": "Optimización de consultas",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-04",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Parameter-sensitive plans»?",
    "options": [
      "Reutiliza planes compilados cuidando que un primer parámetro atípico no degrade al resto.",
      "Registra correlación y dependencias funcionales entre columnas para corregir estimaciones.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar.",
      "Mantiene múltiples variantes de plan según la selectividad del valor pasado al parámetro."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Parameter-sensitive plans (Optimización de consultas): Mantiene múltiples variantes de plan según la selectividad del valor pasado al parámetro.",
    "topic": "Optimización de consultas",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-05",
    "collectionId": "sql",
    "question": "Respecto a optimización de consultas en SQL, ¿cuál es el propósito de «Extended statistics»?",
    "options": [
      "Registra correlación y dependencias funcionales entre columnas para corregir estimaciones.",
      "Reutiliza planes compilados cuidando que un primer parámetro atípico no degrade al resto.",
      "Mantiene múltiples variantes de plan según la selectividad del valor pasado al parámetro.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Extended statistics (Optimización de consultas): Registra correlación y dependencias funcionales entre columnas para corregir estimaciones.",
    "topic": "Optimización de consultas",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-06",
    "collectionId": "sql",
    "question": "En SQL (Índices especializados), ¿qué función técnica cumple «Covering indexes»?",
    "options": [
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas al operar.",
      "Incluye todas las columnas solicitadas en el índice para responder sin tocar la tabla base.",
      "Indexa únicamente el subconjunto de filas que cumple una condición frecuente de filtrado.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Covering indexes (Índices especializados): Incluye todas las columnas solicitadas en el índice para responder sin tocar la tabla base.",
    "topic": "Índices especializados",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-07",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Partial indexes» en índices especializados?",
    "options": [
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas al operar.",
      "Incluye todas las columnas solicitadas en el índice para responder sin tocar la tabla base.",
      "Indexa únicamente el subconjunto de filas que cumple una condición frecuente de filtrado.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Partial indexes (Índices especializados): Indexa únicamente el subconjunto de filas que cumple una condición frecuente de filtrado.",
    "topic": "Índices especializados",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-08",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Expression indexes»?",
    "options": [
      "Incluye todas las columnas solicitadas en el índice para responder sin tocar la tabla base al operar.",
      "Indexa únicamente el subconjunto de filas que cumple una condición frecuente de filtrado al operar.",
      "Resuelve comparaciones exactas de igualdad en tiempo constante mediante cubetas de dispersión.",
      "Almacena el resultado precalculado de una función o expresión para acelerar búsquedas sobre ella."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Expression indexes (Índices especializados): Almacena el resultado precalculado de una función o expresión para acelerar búsquedas sobre ella.",
    "topic": "Índices especializados",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-09",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Hash indexes»?",
    "options": [
      "Resuelve comparaciones exactas de igualdad en tiempo constante mediante cubetas de dispersión al operar.",
      "Indexa únicamente el subconjunto de filas que cumple una condición frecuente de filtrado.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas al operar.",
      "Incluye todas las columnas solicitadas en el índice para responder sin tocar la tabla base."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hash indexes (Índices especializados): Resuelve comparaciones exactas de igualdad en tiempo constante mediante cubetas de dispersión.",
    "topic": "Índices especializados",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-10",
    "collectionId": "sql",
    "question": "Respecto a índices especializados en SQL, ¿cuál es el propósito de «Full-text indexes»?",
    "options": [
      "Incluye todas las columnas solicitadas en el índice para responder sin tocar la tabla base al operar.",
      "Construye diccionarios invertidos de lexemas normalizados para buscar documentos por relevancia.",
      "Indexa únicamente el subconjunto de filas que cumple una condición frecuente de filtrado al operar.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Full-text indexes (Índices especializados): Construye diccionarios invertidos de lexemas normalizados para buscar documentos por relevancia.",
    "topic": "Índices especializados",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-11",
    "collectionId": "sql",
    "question": "En SQL (Índices especializados), ¿qué función técnica cumple «Block-range indexes»?",
    "options": [
      "Indexa únicamente el subconjunto de filas que cumple una condición frecuente de filtrado.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Block-range indexes (Índices especializados): Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas.",
    "topic": "Índices especializados",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-12",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Index-only visibility» en índices especializados?",
    "options": [
      "Incluye todas las columnas solicitadas en el índice para responder sin tocar la tabla base al operar.",
      "Resuelve comparaciones exactas de igualdad en tiempo constante mediante cubetas de dispersión.",
      "Indexa únicamente el subconjunto de filas que cumple una condición frecuente de filtrado al operar.",
      "Consulta el mapa de visibilidad de páginas para confirmar lecturas desde el índice sin ir al heap."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Index-only visibility (Índices especializados): Consulta el mapa de visibilidad de páginas para confirmar lecturas desde el índice sin ir al heap.",
    "topic": "Índices especializados",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-13",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Snapshot isolation»?",
    "options": [
      "Entrega a cada transacción una fotografía consistente de los datos confirmados al iniciar.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
      "Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma.",
      "Aborta la transacción de menor costo de reversión cuando el grafo de espera forma un ciclo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Snapshot isolation (Concurrencia avanzada): Entrega a cada transacción una fotografía consistente de los datos confirmados al iniciar.",
    "topic": "Concurrencia avanzada",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-14",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Serializable anomalies»?",
    "options": [
      "Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Serializable anomalies (Concurrencia avanzada): Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
    "topic": "Concurrencia avanzada",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-15",
    "collectionId": "sql",
    "question": "Respecto a concurrencia avanzada en SQL, ¿cuál es el propósito de «Predicate locks»?",
    "options": [
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes al operar.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red.",
      "Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Predicate locks (Concurrencia avanzada): Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma.",
    "topic": "Concurrencia avanzada",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-16",
    "collectionId": "sql",
    "question": "En SQL (Concurrencia avanzada), ¿qué función técnica cumple «Optimistic concurrency»?",
    "options": [
      "Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma al operar.",
      "Entrega a cada transacción una fotografía consistente de los datos confirmados al iniciar.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes al operar.",
      "Valida al confirmar que ninguna otra transacción haya modificado las filas leídas previamente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Optimistic concurrency (Concurrencia avanzada): Valida al confirmar que ninguna otra transacción haya modificado las filas leídas previamente.",
    "topic": "Concurrencia avanzada",
    "difficulty": "básico"
  },
  {
    "id": "sql-q-17",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Advisory locks» en concurrencia avanzada?",
    "options": [
      "Coordina bloqueos cooperativos definidos por la aplicación usando identificadores en memoria al operar.",
      "Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes al operar.",
      "Entrega a cada transacción una fotografía consistente de los datos confirmados al iniciar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Advisory locks (Concurrencia avanzada): Coordina bloqueos cooperativos definidos por la aplicación usando identificadores en memoria.",
    "topic": "Concurrencia avanzada",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-18",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Key-range predicate locking»?",
    "options": [
      "Entrega a cada transacción una fotografía consistente de los datos confirmados al iniciar al operar.",
      "Protege el intervalo entre dos claves de índice adyacentes para evitar inserciones concurrentes.",
      "Aborta la transacción de menor costo de reversión cuando el grafo de espera forma un ciclo al operar.",
      "Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Key-range predicate locking (Concurrencia avanzada): Protege el intervalo entre dos claves de índice adyacentes para evitar inserciones concurrentes.",
    "topic": "Concurrencia avanzada",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-19",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Deadlock victim selection»?",
    "options": [
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes al operar.",
      "Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma.",
      "Aborta la transacción de menor costo de reversión cuando el grafo de espera forma un ciclo.",
      "Entrega a cada transacción una fotografía consistente de los datos confirmados al iniciar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deadlock victim selection (Concurrencia avanzada): Aborta la transacción de menor costo de reversión cuando el grafo de espera forma un ciclo.",
    "topic": "Concurrencia avanzada",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-20",
    "collectionId": "sql",
    "question": "Respecto a particionado y distribución en SQL, ¿cuál es el propósito de «Range partitioning»?",
    "options": [
      "Distribuye filas de manera uniforme entre divisiones físicas aplicando una función de dispersión al operar.",
      "Excluye del plan de lectura todas las divisiones físicas que no pueden contener filas del filtro.",
      "Desvía consultas analíticas o de lectura hacia nodos secundarios alimentados por el registro al operar.",
      "Divide una tabla grande en divisiones físicas físicas según intervalos continuos de fechas o números."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Range partitioning (Particionado y distribución): Divide una tabla grande en particiones físicas según intervalos continuos de fechas o números.",
    "topic": "Particionado y distribución",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-21",
    "collectionId": "sql",
    "question": "En SQL (Particionado y distribución), ¿qué función técnica cumple «Hash partitioning»?",
    "options": [
      "Distribuye filas de manera uniforme entre divisiones físicas aplicando una función de dispersión.",
      "Desvía consultas analíticas o de lectura hacia nodos secundarios alimentados por el registro.",
      "Coordina confirmaciones en dos fases entre múltiples nodos asegurando atomicidad global al operar.",
      "Excluye del plan de lectura todas las divisiones físicas que no pueden contener filas del filtro."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hash partitioning (Particionado y distribución): Distribuye filas de manera uniforme entre particiones aplicando una función de dispersión.",
    "topic": "Particionado y distribución",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-22",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Partition pruning» en particionado y distribución?",
    "options": [
      "Desvía consultas analíticas o de lectura hacia nodos secundarios alimentados por el registro al operar.",
      "Excluye del plan de lectura todas las divisiones físicas que no pueden contener filas del filtro.",
      "Coordina confirmaciones en dos fases entre múltiples nodos asegurando atomicidad global al operar.",
      "Distribuye filas de manera uniforme entre divisiones físicas aplicando una función de dispersión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Partition pruning (Particionado y distribución): Excluye del plan de lectura todas las particiones que no pueden contener filas del filtro.",
    "topic": "Particionado y distribución",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-23",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Read replicas»?",
    "options": [
      "Coordina confirmaciones en dos fases entre múltiples nodos asegurando atomicidad global al operar.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas al operar.",
      "Desvía consultas analíticas o de lectura hacia nodos secundarios alimentados por el registro.",
      "Bloquea rangos lógicos de búsqueda para impedir que otra sesión inserte filas fantasma al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Read replicas (Particionado y distribución): Desvía consultas analíticas o de lectura hacia nodos secundarios alimentados por el registro.",
    "topic": "Particionado y distribución",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-24",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Distributed transactions»?",
    "options": [
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas.",
      "Coordina confirmaciones en dos fases entre múltiples nodos asegurando atomicidad global."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Distributed transactions (Particionado y distribución): Coordina confirmaciones en dos fases entre múltiples nodos asegurando atomicidad global.",
    "topic": "Particionado y distribución",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-25",
    "collectionId": "sql",
    "question": "Respecto a particionado y distribución en SQL, ¿cuál es el propósito de «Global uniqueness across partitions»?",
    "options": [
      "Exige que la clave de fragmentación lógica forme parte de toda restricción única o clave primaria.",
      "Desvía consultas analíticas o de lectura hacia nodos secundarios alimentados por el registro.",
      "Coordina confirmaciones en dos fases entre múltiples nodos asegurando atomicidad global al operar.",
      "Distribuye filas de manera uniforme entre divisiones físicas aplicando una función de dispersión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Global uniqueness across partitions (Particionado y distribución): Exige que la clave de particionado forme parte de toda restricción única o clave primaria.",
    "topic": "Particionado y distribución",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-26",
    "collectionId": "sql",
    "question": "En SQL (Particionado y distribución), ¿qué función técnica cumple «Partition pruning proofs»?",
    "options": [
      "Exige que la clave de fragmentación lógica forme parte de toda restricción única o clave primaria al operar.",
      "Verifica en el plan explicado que el optimizador descarte divisiones físicas en compilación o ejecución.",
      "Distribuye filas de manera uniforme entre divisiones físicas aplicando una función de dispersión al operar.",
      "Excluye del plan de lectura todas las divisiones físicas que no pueden contener filas del filtro al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Partition pruning proofs (Particionado y distribución): Verifica en el plan explicado que el optimizador descarte particiones en compilación o ejecución.",
    "topic": "Particionado y distribución",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-27",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Constraint tests» en testing de datos?",
    "options": [
      "Valida que vistas y consultas críticas mantengan columnas, tipos y semántica esperados al operar.",
      "Compara fila por fila la salida de una consulta optimizada contra su versión de referencia.",
      "Comprueba que claves foráneas, unicidad y reglas de dominio rechacen inserciones inválidas.",
      "Genera volúmenes y distribuciones de datos realistas para probar planes de ejecución reales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Constraint tests (Testing de datos): Comprueba que claves foráneas, unicidad y reglas de dominio rechacen inserciones inválidas.",
    "topic": "Testing de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-28",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Migration tests»?",
    "options": [
      "Comprueba que claves foráneas, unicidad y reglas de dominio rechacen inserciones inválidas al operar.",
      "Compara fila por fila la salida de una consulta optimizada contra su versión de referencia al operar.",
      "Genera volúmenes y distribuciones de datos realistas para probar planes de ejecución reales.",
      "Aplica y revierte cambios de esquema sobre datos representativos verificando tiempos de bloqueo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Migration tests (Testing de datos): Aplica y revierte cambios de esquema sobre datos representativos verificando tiempos de bloqueo.",
    "topic": "Testing de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-29",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Query result contracts»?",
    "options": [
      "Valida que vistas y consultas críticas mantengan columnas, tipos y semántica esperados.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Query result contracts (Testing de datos): Valida que vistas y consultas críticas mantengan columnas, tipos y semántica esperados.",
    "topic": "Testing de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-30",
    "collectionId": "sql",
    "question": "Respecto a testing de datos en SQL, ¿cuál es el propósito de «Concurrency tests»?",
    "options": [
      "Genera volúmenes y distribuciones de datos realistas para probar planes de ejecución reales al operar.",
      "Ejecuta sesiones entrelazadas para verificar que no ocurran pérdidas de actualización ni bloqueos.",
      "Comprueba que claves foráneas, unicidad y reglas de dominio rechacen inserciones inválidas al operar.",
      "Compara fila por fila la salida de una consulta optimizada contra su versión de referencia al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Concurrency tests (Testing de datos): Ejecuta sesiones entrelazadas para verificar que no ocurran pérdidas de actualización ni bloqueos.",
    "topic": "Testing de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-31",
    "collectionId": "sql",
    "question": "En SQL (Testing de datos), ¿qué función técnica cumple «Production-like fixtures»?",
    "options": [
      "Valida que vistas y consultas críticas mantengan columnas, tipos y semántica esperados al operar.",
      "Comprueba que claves foráneas, unicidad y reglas de dominio rechacen inserciones inválidas.",
      "Genera volúmenes y distribuciones de datos realistas para probar planes de ejecución reales.",
      "Compara fila por fila la salida de una consulta optimizada contra su versión de referencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Production-like fixtures (Testing de datos): Genera volúmenes y distribuciones de datos realistas para probar planes de ejecución reales.",
    "topic": "Testing de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-32",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Differential result-set testing» en testing de datos?",
    "options": [
      "Valida que vistas y consultas críticas mantengan columnas, tipos y semántica esperados al operar.",
      "Comprueba que claves foráneas, unicidad y reglas de dominio rechacen inserciones inválidas.",
      "Genera volúmenes y distribuciones de datos realistas para probar planes de ejecución reales.",
      "Compara fila por fila la salida de una consulta optimizada contra su versión de referencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Differential result-set testing (Testing de datos): Compara fila por fila la salida de una consulta optimizada contra su versión de referencia.",
    "topic": "Testing de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-33",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Transaction anomaly tests»?",
    "options": [
      "Reproduce historias concurrentes específicas para comprobar el nivel de aislamiento configurado.",
      "Comprueba que claves foráneas, unicidad y reglas de dominio rechacen inserciones inválidas.",
      "Compara fila por fila la salida de una consulta optimizada contra su versión de referencia.",
      "Genera volúmenes y distribuciones de datos realistas para probar planes de ejecución reales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Transaction anomaly tests (Testing de datos): Reproduce historias concurrentes específicas para comprobar el nivel de aislamiento configurado.",
    "topic": "Testing de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-34",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Least-privilege grants»?",
    "options": [
      "Aplica políticas automáticas por consulta para que cada usuario vea solo sus propias filas al operar.",
      "Concede a cada rol de aplicación únicamente los permisos mínimos sobre tablas o vistas necesarias.",
      "Separa estrictamente la estructura del comando respecto a los datos mediante parámetros ligados.",
      "Controla si una rutina almacenada se ejecuta con los permisos de su creador o de quien la llama."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Least-privilege grants (Seguridad): Concede a cada rol de aplicación únicamente los permisos mínimos sobre tablas o vistas necesarias.",
    "topic": "Seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-q-35",
    "collectionId": "sql",
    "question": "Respecto a seguridad en SQL, ¿cuál es el propósito de «Row-level security»?",
    "options": [
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar.",
      "Oculta o transforma columnas sensibles según el rol que ejecuta la consulta de lectura.",
      "Aplica políticas automáticas por consulta para que cada usuario vea solo sus propias filas.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Row-level security (Seguridad): Aplica políticas automáticas por consulta para que cada usuario vea solo sus propias filas.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-36",
    "collectionId": "sql",
    "question": "En SQL (Seguridad), ¿qué función técnica cumple «Column masking»?",
    "options": [
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas.",
      "Oculta o transforma columnas sensibles según el rol que ejecuta la consulta de lectura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Column masking (Seguridad): Oculta o transforma columnas sensibles según el rol que ejecuta la consulta de lectura.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-37",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «SQL injection defenses» en seguridad?",
    "options": [
      "Separa estrictamente la estructura del comando respecto a los datos mediante parámetros ligados.",
      "Aplica políticas automáticas por consulta para que cada usuario vea solo sus propias filas.",
      "Oculta o transforma columnas sensibles según el rol que ejecuta la consulta de lectura al operar.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "SQL injection defenses (Seguridad): Separa estrictamente la estructura del comando respecto a los datos mediante parámetros ligados.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-38",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Encryption at rest and transit»?",
    "options": [
      "Oculta o transforma columnas sensibles según el rol que ejecuta la consulta de lectura.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Encryption at rest and transit (Seguridad): Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-39",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Definer and invoker rights»?",
    "options": [
      "Aplica políticas automáticas por consulta para que cada usuario vea solo sus propias filas al operar.",
      "Oculta o transforma columnas sensibles según el rol que ejecuta la consulta de lectura al operar.",
      "Controla si una rutina almacenada se ejecuta con los permisos de su creador o de quien la llama.",
      "Separa estrictamente la estructura del comando respecto a los datos mediante parámetros ligados."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Definer and invoker rights (Seguridad): Controla si una rutina almacenada se ejecuta con los permisos de su creador o de quien la llama.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-40",
    "collectionId": "sql",
    "question": "Respecto a seguridad en SQL, ¿cuál es el propósito de «Dynamic SQL escaping»?",
    "options": [
      "Separa estrictamente la estructura del comando respecto a los datos mediante parámetros ligados al operar.",
      "Controla si una rutina almacenada se ejecuta con los permisos de su creador o de quien la llama.",
      "Aplica políticas automáticas por consulta para que cada usuario vea solo sus propias filas al operar.",
      "Cita identificadores de tablas o columnas con funciones nativas cuando se arman consultas dinámicas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dynamic SQL escaping (Seguridad): Cita identificadores de tablas o columnas con funciones nativas cuando se arman consultas dinámicas.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-41",
    "collectionId": "sql",
    "question": "En SQL (Recuperación y continuidad), ¿qué función técnica cumple «Point-in-time recovery»?",
    "options": [
      "Restaura un respaldo base y reproduce el registro de transacciones hasta un segundo exacto.",
      "Toma instantáneas atómicas coordinadas con el punto de control del registro transaccional.",
      "Comprueba las sumas de verificación de cada página de datos al crear y al restaurar copias.",
      "Define la pérdida máxima de datos aceptable y el tiempo límite para restablecer el servicio."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Point-in-time recovery (Recuperación y continuidad): Restaura un respaldo base y reproduce el registro de transacciones hasta un segundo exacto.",
    "topic": "Recuperación y continuidad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-42",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Backup consistency» en recuperación y continuidad?",
    "options": [
      "Restaura un respaldo base y reproduce el registro de transacciones hasta un segundo exacto.",
      "Toma instantáneas atómicas coordinadas con el punto de control del registro transaccional.",
      "Comprueba las sumas de verificación de cada página de datos al crear y al restaurar copias.",
      "Define la pérdida máxima de datos aceptable y el tiempo límite para restablecer el servicio."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Backup consistency (Recuperación y continuidad): Toma instantáneas atómicas coordinadas con el punto de control del registro transaccional.",
    "topic": "Recuperación y continuidad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-43",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Replication failover»?",
    "options": [
      "Toma instantáneas atómicas coordinadas con el punto de control del registro transaccional al operar.",
      "Restaura un respaldo base y reproduce el registro de transacciones hasta un segundo exacto al operar.",
      "Promueve una réplica actualizada a nodo primario cuando el servidor principal deja de responder.",
      "Comprueba las sumas de verificación de cada página de datos al crear y al restaurar copias al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Replication failover (Recuperación y continuidad): Promueve una réplica actualizada a nodo primario cuando el servidor principal deja de responder.",
    "topic": "Recuperación y continuidad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-44",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Recovery objectives»?",
    "options": [
      "Toma instantáneas atómicas coordinadas con el punto de control del registro transaccional al operar.",
      "Restaura un respaldo base y reproduce el registro de transacciones hasta un segundo exacto.",
      "Comprueba las sumas de verificación de cada página de datos al crear y al restaurar copias.",
      "Define la pérdida máxima de datos aceptable y el tiempo límite para restablecer el servicio."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Recovery objectives (Recuperación y continuidad): Define la pérdida máxima de datos aceptable y el tiempo límite para restablecer el servicio.",
    "topic": "Recuperación y continuidad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-45",
    "collectionId": "sql",
    "question": "Respecto a recuperación y continuidad en SQL, ¿cuál es el propósito de «Restore drills»?",
    "options": [
      "Ejecuta simulacros periódicos de restauración completa para comprobar que los respaldos sirven.",
      "Toma instantáneas atómicas coordinadas con el punto de control del registro transaccional.",
      "Restaura un respaldo base y reproduce el registro de transacciones hasta un segundo exacto.",
      "Comprueba las sumas de verificación de cada página de datos al crear y al restaurar copias."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Restore drills (Recuperación y continuidad): Ejecuta simulacros periódicos de restauración completa para comprobar que los respaldos sirven.",
    "topic": "Recuperación y continuidad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-46",
    "collectionId": "sql",
    "question": "En SQL (Recuperación y continuidad), ¿qué función técnica cumple «Recovery-point validation»?",
    "options": [
      "Restaura un respaldo base y reproduce el registro de transacciones hasta un segundo exacto al operar.",
      "Mide el desfase real de archivos de registro archivados respecto a las transacciones confirmadas.",
      "Comprueba las sumas de verificación de cada página de datos al crear y al restaurar copias al operar.",
      "Toma instantáneas atómicas coordinadas con el punto de control del registro transaccional al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Recovery-point validation (Recuperación y continuidad): Mide el desfase real de archivos de registro archivados respecto a las transacciones confirmadas.",
    "topic": "Recuperación y continuidad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-47",
    "collectionId": "sql",
    "question": "Dentro de SQL, ¿cómo opera el mecanismo de «Backup checksum verification» en recuperación y continuidad?",
    "options": [
      "Toma instantáneas atómicas coordinadas con el punto de control del registro transaccional al operar.",
      "Restaura un respaldo base y reproduce el registro de transacciones hasta un segundo exacto.",
      "Comprueba las sumas de verificación de cada página de datos al crear y al restaurar copias.",
      "Define la pérdida máxima de datos aceptable y el tiempo límite para restablecer el servicio."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Backup checksum verification (Recuperación y continuidad): Comprueba las sumas de verificación de cada página de datos al crear y al restaurar copias.",
    "topic": "Recuperación y continuidad",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-48",
    "collectionId": "sql",
    "question": "Al trabajar con SQL, ¿qué responsabilidad define a «Wait events»?",
    "options": [
      "Controla el agotamiento de procesos del motor interponiendo concentradores de sesiones al operar.",
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
      "Muestra en qué recurso exacto están detenidas las sesiones activas: disco, cerrojos o red."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Wait events (Observabilidad y operación): Muestra en qué recurso exacto están detenidas las sesiones activas: disco, cerrojos o red.",
    "topic": "Observabilidad y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-49",
    "collectionId": "sql",
    "question": "En la arquitectura de SQL, ¿qué caracteriza técnicamente a «Slow query logging»?",
    "options": [
      "Captura en bitácora las sentencias cuya duración supera el umbral junto con sus estadísticas.",
      "Controla el agotamiento de procesos del motor interponiendo concentradores de sesiones.",
      "Muestra en qué recurso exacto están detenidas las sesiones activas: disco, cerrojos o red.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Slow query logging (Observabilidad y operación): Captura en bitácora las sentencias cuya duración supera el umbral junto con sus estadísticas.",
    "topic": "Observabilidad y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-q-50",
    "collectionId": "sql",
    "question": "Respecto a observabilidad y operación en SQL, ¿cuál es el propósito de «Connection saturation»?",
    "options": [
      "Protege archivos de datos y respaldos en disco mientras cifra las conexiones de red al operar.",
      "Controla el agotamiento de procesos del motor interponiendo concentradores de sesiones.",
      "Detecta dependencias cíclicas de lectura y escritura entre transacciones concurrentes.",
      "Guarda solo el valor mínimo y máximo de cada bloque físico en tablas enormes ordenadas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Connection saturation (Observabilidad y operación): Controla el agotamiento de procesos del motor interponiendo concentradores de sesiones.",
    "topic": "Observabilidad y operación",
    "difficulty": "avanzado"
  }
];
