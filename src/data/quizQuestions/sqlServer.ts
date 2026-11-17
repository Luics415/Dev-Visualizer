import type { QuizQuestion } from "@/data/quizTypes";

export const sqlServerQuestions: QuizQuestion[] = [
  {
    "id": "sql-server-q-01",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Producto, edición y ecosistema), ¿qué función técnica cumple «Database Engine»?",
    "options": [
      "Identifica el servicio que procesa consultas, persiste bases de datos y aplica transacciones, seguridad y recuperación al operar.",
      "Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión.",
      "Distingue lectura lógica de física y entiende que memoria disponible, presión y patrón de acceso condicionan I/O.",
      "Solicita solo columnas necesarias, asigna aliases comprensibles y evita tratar el orden de filas como implícito al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Database Engine (Producto, edición y ecosistema): Identifica el servicio que procesa consultas, persiste bases de datos y aplica transacciones, seguridad y recuperación.",
    "topic": "Producto, edición y ecosistema",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-02",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «Ediciones y licenciamiento» en producto, edición y ecosistema?",
    "options": [
      "Identifica el servicio que procesa consultas, persiste bases de datos y aplica transacciones, seguridad y recuperación al operar.",
      "Compara Developer, Express, Standard y Enterprise por derechos de uso, límites y funciones antes de diseñar una dependencia.",
      "Define orden total estable y usa OFFSET/FETCH o búsqueda por clave según volumen, consistencia y patrón de navegación al operar.",
      "Distribuye estructuras y ciclos de administración sin tratar varios archivos como sustituto automático de rendimiento al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ediciones y licenciamiento (Producto, edición y ecosistema): Compara Developer, Express, Standard y Enterprise por derechos de uso, límites y funciones antes de diseñar una dependencia.",
    "topic": "Producto, edición y ecosistema",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-03",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Instancia predeterminada y con nombre»?",
    "options": [
      "Configura TCP, puerto, DNS, firewall y cifrado sin depender de descubrimiento implícito o puertos abiertos innecesarios.",
      "Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión al operar.",
      "Comprende que una instalación puede hospedar varias instancias aisladas con servicios, puertos y configuración propios.",
      "Distingue lectura lógica de física y entiende que memoria disponible, presión y patrón de acceso condicionan I/O al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Instancia predeterminada y con nombre (Instalación, instancia y configuración): Comprende que una instalación puede hospedar varias instancias aisladas con servicios, puertos y configuración propios.",
    "topic": "Instalación, instancia y configuración",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-04",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «Conectividad y protocolos»?",
    "options": [
      "Comprende que una instalación puede hospedar varias instancias aisladas con servicios, puertos y configuración propios al operar.",
      "Combina relaciones preservando o descartando filas con una condición que no multiplica resultados accidentalmente al operar.",
      "Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión al operar.",
      "Configura TCP, puerto, DNS, firewall y cifrado sin depender de descubrimiento implícito o puertos abiertos innecesarios."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Conectividad y protocolos (Instalación, instancia y configuración): Configura TCP, puerto, DNS, firewall y cifrado sin depender de descubrimiento implícito o puertos abiertos innecesarios.",
    "topic": "Instalación, instancia y configuración",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-05",
    "collectionId": "sql-server",
    "question": "Respecto a instalación, instancia y configuración en Microsoft SQL Server, ¿cuál es el propósito de «Collation»?",
    "options": [
      "Decide comparación, orden, sensibilidad y nivel de compatibilidad sabiendo que afectan semántica, optimizador y migraciones.",
      "Comprende que una instalación puede hospedar varias instancias aisladas con servicios, puertos y configuración propios.",
      "Configura TCP, puerto, DNS, firewall y cifrado sin depender de descubrimiento implícito o puertos abiertos innecesarios.",
      "Define orden total estable y usa OFFSET/FETCH o búsqueda por clave según volumen, consistencia y patrón de navegación."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Collation y compatibilidad (Instalación, instancia y configuración): Decide comparación, orden, sensibilidad y nivel de compatibilidad sabiendo que afectan semántica, optimizador y migraciones.",
    "topic": "Instalación, instancia y configuración",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-06",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Fundamentos de T-SQL), ¿qué función técnica cumple «Batches y GO»?",
    "options": [
      "Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción al operar.",
      "Distingue unidades enviadas al servidor de la directiva que una herramienta cliente usa para separar lotes.",
      "Compone conjuntos compatibles comprendiendo deduplicación, tipos resultantes y costo de ordenamiento al operar.",
      "Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Batches y GO (Fundamentos de T-SQL): Distingue unidades enviadas al servidor de la directiva que una herramienta cliente usa para separar lotes.",
    "topic": "Fundamentos de T-SQL",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-07",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «SELECT y proyección» en fundamentos de t-sql?",
    "options": [
      "Distingue unidades enviadas al servidor de la directiva que una herramienta cliente usa para separar lotes al operar.",
      "Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción al operar.",
      "Solicita solo columnas necesarias, asigna aliases comprensibles y evita tratar el orden de filas como implícito.",
      "Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "SELECT y proyección (Fundamentos de T-SQL): Solicita solo columnas necesarias, asigna aliases comprensibles y evita tratar el orden de filas como implícito.",
    "topic": "Fundamentos de T-SQL",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-08",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Variables y expresiones»?",
    "options": [
      "Distingue unidades enviadas al servidor de la directiva que una herramienta cliente usa para separar lotes al operar.",
      "Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción al operar.",
      "Solicita solo columnas necesarias, asigna aliases comprensibles y evita tratar el orden de filas como implícito.",
      "Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Variables y expresiones (Fundamentos de T-SQL): Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión.",
    "topic": "Fundamentos de T-SQL",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-09",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «Control de flujo»?",
    "options": [
      "Usa IF, WHILE, BEGIN y END para coordinación acotada sin reemplazar operaciones relacionales por loops fila a fila al operar.",
      "Distingue unidades enviadas al servidor de la directiva que una herramienta cliente usa para separar lotes al operar.",
      "Solicita solo columnas necesarias, asigna aliases comprensibles y evita tratar el orden de filas como implícito.",
      "Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Control de flujo (Fundamentos de T-SQL): Usa IF, WHILE, BEGIN y END para coordinación acotada sin reemplazar operaciones relacionales por loops fila a fila.",
    "topic": "Fundamentos de T-SQL",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-10",
    "collectionId": "sql-server",
    "question": "Respecto a fundamentos de t-sql en Microsoft SQL Server, ¿cuál es el propósito de «Errores y mensajes»?",
    "options": [
      "Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física al operar.",
      "Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada al operar.",
      "Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Errores y mensajes (Fundamentos de T-SQL): Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción.",
    "topic": "Fundamentos de T-SQL",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-11",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Tipos, NULL y conversiones), ¿qué función técnica cumple «Tipos numéricos»?",
    "options": [
      "Dimensiona varchar o nvarchar por datos reales, codificación, collation e impacto sobre filas, índices y parámetros al operar.",
      "Trata desconocido como un tercer estado, usa IS NULL y anticipa su efecto en filtros, joins, constraints y agregados.",
      "Elige enteros, decimal y float por rango y exactitud, evitando dinero o mediciones sobre aproximaciones accidentales.",
      "Usa CAST, CONVERT o TRY_CONVERT de forma explícita para evitar errores, pérdida de precisión y predicados no sargables."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tipos numéricos (Tipos, NULL y conversiones): Elige enteros, decimal y float por rango y exactitud, evitando dinero o mediciones sobre aproximaciones accidentales.",
    "topic": "Tipos, NULL y conversiones",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-12",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «Texto y Unicode» en tipos, null y conversiones?",
    "options": [
      "Elige enteros, decimal y float por rango y exactitud, evitando dinero o mediciones sobre aproximaciones accidentales.",
      "Trata desconocido como un tercer estado, usa IS NULL y anticipa su efecto en filtros, joins, constraints y agregados.",
      "Encapsula un resultado intermedio comprendiendo que su forma lógica no obliga al optimizador a materializarlo al operar.",
      "Dimensiona varchar o nvarchar por datos reales, codificación, collation e impacto sobre filas, índices y parámetros."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Texto y Unicode (Tipos, NULL y conversiones): Dimensiona varchar o nvarchar por datos reales, codificación, collation e impacto sobre filas, índices y parámetros.",
    "topic": "Tipos, NULL y conversiones",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-13",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Fecha»?",
    "options": [
      "Modela instantes y tiempo civil con date, time, datetime2 y datetimeoffset, conservando precisión y zona cuando corresponde al operar.",
      "Elige enteros, decimal y float por rango y exactitud, evitando dinero o mediciones sobre aproximaciones accidentales al operar.",
      "Trata desconocido como un tercer estado, usa IS NULL y anticipa su efecto en filtros, joins, constraints y agregados al operar.",
      "Usa CAST, CONVERT o TRY_CONVERT de forma explícita para evitar errores, pérdida de precisión y predicados no sargables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fecha y tiempo (Tipos, NULL y conversiones): Modela instantes y tiempo civil con date, time, datetime2 y datetimeoffset, conservando precisión y zona cuando corresponde.",
    "topic": "Tipos, NULL y conversiones",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-14",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «NULL y lógica ternaria»?",
    "options": [
      "Dimensiona varchar o nvarchar por datos reales, codificación, collation e impacto sobre filas, índices y parámetros al operar.",
      "Trata desconocido como un tercer estado, usa IS NULL y anticipa su efecto en filtros, joins, constraints y agregados.",
      "Elige enteros, decimal y float por rango y exactitud, evitando dinero o mediciones sobre aproximaciones accidentales.",
      "Usa CAST, CONVERT o TRY_CONVERT de forma explícita para evitar errores, pérdida de precisión y predicados no sargables."
    ],
    "correctAnswerIndex": 1,
    "explanation": "NULL y lógica ternaria (Tipos, NULL y conversiones): Trata desconocido como un tercer estado, usa IS NULL y anticipa su efecto en filtros, joins, constraints y agregados.",
    "topic": "Tipos, NULL y conversiones",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-15",
    "collectionId": "sql-server",
    "question": "Respecto a tipos, null y conversiones en Microsoft SQL Server, ¿cuál es el propósito de «Conversiones y precedencia»?",
    "options": [
      "Dimensiona varchar o nvarchar por datos reales, codificación, collation e impacto sobre filas, índices y parámetros al operar.",
      "Elige enteros, decimal y float por rango y exactitud, evitando dinero o mediciones sobre aproximaciones accidentales.",
      "Usa CAST, CONVERT o TRY_CONVERT de forma explícita para evitar errores, pérdida de precisión y predicados no sargables.",
      "Trata desconocido como un tercer estado, usa IS NULL y anticipa su efecto en filtros, joins, constraints y agregados."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Conversiones y precedencia (Tipos, NULL y conversiones): Usa CAST, CONVERT o TRY_CONVERT de forma explícita para evitar errores, pérdida de precisión y predicados no sargables.",
    "topic": "Tipos, NULL y conversiones",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-16",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Modelado relacional), ¿qué función técnica cumple «Entidades»?",
    "options": [
      "Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales en el flujo.",
      "Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción al operar.",
      "Resume grupos y filtra agregados sin mezclar columnas que no pertenecen al nivel de detalle resultante al operar.",
      "Convierte hechos del dominio en tablas y relaciones sin copiar la forma temporal de una pantalla o documento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Entidades y relaciones (Modelado relacional): Convierte hechos del dominio en tablas y relaciones sin copiar la forma temporal de una pantalla o documento.",
    "topic": "Modelado relacional",
    "difficulty": "básico"
  },
  {
    "id": "sql-server-q-17",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «Claves candidatas» en modelado relacional?",
    "options": [
      "Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada.",
      "Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Claves candidatas y primaria (Modelado relacional): Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales.",
    "topic": "Modelado relacional",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-18",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Esquemas y ownership»?",
    "options": [
      "Convierte hechos del dominio en tablas y relaciones sin copiar la forma temporal de una pantalla o documento de modo predecible.",
      "Agrupa objetos por límite funcional y administra autorización mediante propietarios y roles, no solo como prefijo de nombres.",
      "Identifica el servicio que procesa consultas, persiste bases de datos y aplica transacciones, seguridad y recuperación al operar.",
      "Comprende que una instalación puede hospedar varias instancias aisladas con servicios, puertos y configuración propios al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Esquemas y ownership (Modelado relacional): Agrupa objetos por límite funcional y administra autorización mediante propietarios y roles, no solo como prefijo de nombres.",
    "topic": "Modelado relacional",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-19",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «PRIMARY KEY y UNIQUE»?",
    "options": [
      "Distingue ausencia permitida de un valor predeterminado y evita defaults que escondan datos desconocidos al operar.",
      "Expresa reglas locales deterministas para impedir estados inválidos antes de que alcancen otras capas al operar.",
      "Hace cumplir identidad y claves alternativas dentro del motor incluso cuando varios clientes escriben a la vez.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "PRIMARY KEY y UNIQUE (Integridad declarativa): Hace cumplir identidad y claves alternativas dentro del motor incluso cuando varios clientes escriben a la vez.",
    "topic": "Integridad declarativa",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-20",
    "collectionId": "sql-server",
    "question": "Respecto a integridad declarativa en Microsoft SQL Server, ¿cuál es el propósito de «FOREIGN KEY»?",
    "options": [
      "Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden al operar.",
      "Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas al operar.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada."
    ],
    "correctAnswerIndex": 3,
    "explanation": "FOREIGN KEY (Integridad declarativa): Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada.",
    "topic": "Integridad declarativa",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-21",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Integridad declarativa), ¿qué función técnica cumple «CHECK constraints»?",
    "options": [
      "Expresa reglas locales deterministas para impedir estados inválidos antes de que alcancen otras capas.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada.",
      "Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila.",
      "Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CHECK constraints (Integridad declarativa): Expresa reglas locales deterministas para impedir estados inválidos antes de que alcancen otras capas.",
    "topic": "Integridad declarativa",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-22",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «DEFAULT y nulabilidad» en integridad declarativa?",
    "options": [
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada en el flujo.",
      "Distingue ausencia permitida de un valor predeterminado y evita defaults que escondan datos desconocidos.",
      "Expresa reglas locales deterministas para impedir estados inválidos antes de que alcancen otras capas.",
      "Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "DEFAULT y nulabilidad (Integridad declarativa): Distingue ausencia permitida de un valor predeterminado y evita defaults que escondan datos desconocidos.",
    "topic": "Integridad declarativa",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-23",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Filtrado sargable»?",
    "options": [
      "Compone conjuntos compatibles comprendiendo deduplicación, tipos resultantes y costo de ordenamiento con precisión.",
      "Combina relaciones preservando o descartando filas con una condición que no multiplica resultados accidentalmente.",
      "Formula predicados que permitan buscar por índices sin aplicar funciones innecesarias sobre la columna filtrada.",
      "Comprende cuándo una fila conserva datos en la página y cuándo usa estructuras separadas con más lecturas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Filtrado sargable (Consultas relacionales): Formula predicados que permitan buscar por índices sin aplicar funciones innecesarias sobre la columna filtrada.",
    "topic": "Consultas relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-24",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «INNER y OUTER JOIN»?",
    "options": [
      "Formula predicados que permitan buscar por índices sin aplicar funciones innecesarias sobre la columna filtrada al operar.",
      "Expresa pruebas de existencia sin materializar columnas ni confundir duplicados o NULL con la intención del filtro.",
      "Compone conjuntos compatibles comprendiendo deduplicación, tipos resultantes y costo de ordenamiento en ejecución.",
      "Combina relaciones preservando o descartando filas con una condición que no multiplica resultados accidentalmente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "INNER y OUTER JOIN (Consultas relacionales): Combina relaciones preservando o descartando filas con una condición que no multiplica resultados accidentalmente.",
    "topic": "Consultas relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-25",
    "collectionId": "sql-server",
    "question": "Respecto a consultas relacionales en Microsoft SQL Server, ¿cuál es el propósito de «EXISTS y pertenencia»?",
    "options": [
      "Expresa pruebas de existencia sin materializar columnas ni confundir duplicados o NULL con la intención del filtro.",
      "Formula predicados que permitan buscar por índices sin aplicar funciones innecesarias sobre la columna filtrada.",
      "Combina relaciones preservando o descartando filas con una condición que no multiplica resultados accidentalmente.",
      "Compone conjuntos compatibles comprendiendo deduplicación, tipos resultantes y costo de ordenamiento en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "EXISTS y pertenencia (Consultas relacionales): Expresa pruebas de existencia sin materializar columnas ni confundir duplicados o NULL con la intención del filtro.",
    "topic": "Consultas relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-26",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Consultas relacionales), ¿qué función técnica cumple «UNION, INTERSECT y EXCEPT»?",
    "options": [
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales al operar.",
      "Compone conjuntos compatibles comprendiendo deduplicación, tipos resultantes y costo de ordenamiento.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada al operar.",
      "Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "UNION, INTERSECT y EXCEPT (Consultas relacionales): Compone conjuntos compatibles comprendiendo deduplicación, tipos resultantes y costo de ordenamiento.",
    "topic": "Consultas relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-27",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «ORDER BY y paginación» en consultas relacionales?",
    "options": [
      "Formula predicados que permitan buscar por índices sin aplicar funciones innecesarias sobre la columna filtrada al operar.",
      "Combina relaciones preservando o descartando filas con una condición que no multiplica resultados accidentalmente.",
      "Define orden total estable y usa OFFSET/FETCH o búsqueda por clave según volumen, consistencia y patrón de navegación.",
      "Expresa pruebas de existencia sin materializar columnas ni confundir duplicados o NULL con la intención del filtro."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ORDER BY y paginación (Consultas relacionales): Define orden total estable y usa OFFSET/FETCH o búsqueda por clave según volumen, consistencia y patrón de navegación.",
    "topic": "Consultas relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-28",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «GROUP BY y HAVING»?",
    "options": [
      "Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física al operar.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada al operar.",
      "Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila al operar.",
      "Resume grupos y filtra agregados sin mezclar columnas que no pertenecen al nivel de detalle resultante."
    ],
    "correctAnswerIndex": 3,
    "explanation": "GROUP BY y HAVING (Agregación, ventanas y composición): Resume grupos y filtra agregados sin mezclar columnas que no pertenecen al nivel de detalle resultante.",
    "topic": "Agregación, ventanas y composición",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-29",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «Funciones de ventana»?",
    "options": [
      "Calcula ranking, acumulados y comparaciones conservando cada fila mediante PARTITION BY, ORDER BY y un frame explícito.",
      "Encapsula un resultado intermedio comprendiendo que su forma lógica no obliga al optimizador a materializarlo al operar.",
      "Resume grupos y filtra agregados sin mezclar columnas que no pertenecen al nivel de detalle resultante con precisión.",
      "Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Funciones de ventana (Agregación, ventanas y composición): Calcula ranking, acumulados y comparaciones conservando cada fila mediante PARTITION BY, ORDER BY y un frame explícito.",
    "topic": "Agregación, ventanas y composición",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-30",
    "collectionId": "sql-server",
    "question": "Respecto a agregación, ventanas y composición en Microsoft SQL Server, ¿cuál es el propósito de «APPLY»?",
    "options": [
      "Calcula ranking, acumulados y comparaciones conservando cada fila mediante PARTITION BY, ORDER BY y un frame explícito al operar.",
      "Evalúa una fuente tabular correlacionada por fila y hace visibles patrones que un JOIN convencional no expresa con claridad.",
      "Encapsula un resultado intermedio comprendiendo que su forma lógica no obliga al optimizador a materializarlo con precisión.",
      "Define orden total estable y usa OFFSET/FETCH o búsqueda por clave según volumen, consistencia y patrón de navegación al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "APPLY (Agregación, ventanas y composición): Evalúa una fuente tabular correlacionada por fila y hace visibles patrones que un JOIN convencional no expresa con claridad.",
    "topic": "Agregación, ventanas y composición",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-31",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Agregación, ventanas y composición), ¿qué función técnica cumple «Subconsultas y tablas derivadas»?",
    "options": [
      "Resume grupos y filtra agregados sin mezclar columnas que no pertenecen al nivel de detalle resultante al operar.",
      "Crea una ruta alternativa por claves que apunta a la fila base y paga costo adicional en cada escritura al operar.",
      "Encapsula un resultado intermedio comprendiendo que su forma lógica no obliga al optimizador a materializarlo.",
      "Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Subconsultas y tablas derivadas (Agregación, ventanas y composición): Encapsula un resultado intermedio comprendiendo que su forma lógica no obliga al optimizador a materializarlo.",
    "topic": "Agregación, ventanas y composición",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-32",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «Funciones escalares y tabulares» en programabilidad en el motor?",
    "options": [
      "Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden al operar.",
      "Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas al operar.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales.",
      "Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Funciones escalares y tabulares (Programabilidad en el motor): Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila.",
    "topic": "Programabilidad en el motor",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-33",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Views»?",
    "options": [
      "Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden al operar.",
      "Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas.",
      "Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Views (Programabilidad en el motor): Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden.",
    "topic": "Programabilidad en el motor",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-34",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «Triggers e inserted/deleted»?",
    "options": [
      "Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila de forma segura.",
      "Reacciona a conjuntos de filas dentro de la transacción, sin lógica fila a fila ni efectos externos frágiles.",
      "Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden de modo predecible.",
      "Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Triggers e inserted/deleted (Programabilidad en el motor): Reacciona a conjuntos de filas dentro de la transacción, sin lógica fila a fila ni efectos externos frágiles.",
    "topic": "Programabilidad en el motor",
    "difficulty": "intermedio"
  },
  {
    "id": "sql-server-q-35",
    "collectionId": "sql-server",
    "question": "Respecto a páginas, archivos y almacenamiento en Microsoft SQL Server, ¿cuál es el propósito de «Páginas y extents»?",
    "options": [
      "Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden al operar.",
      "Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas al operar.",
      "Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Páginas y extents (Páginas, archivos y almacenamiento): Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física.",
    "topic": "Páginas, archivos y almacenamiento",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-36",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Páginas, archivos y almacenamiento), ¿qué función técnica cumple «Data files y filegroups»?",
    "options": [
      "Distingue lectura lógica de física y entiende que memoria disponible, presión y patrón de acceso condicionan I/O al operar.",
      "Registra cambios antes de páginas de datos para permitir rollback, recuperación y continuidad del historial al operar.",
      "Comprende cuándo una fila conserva datos en la página y cuándo usa estructuras separadas con más lecturas en el flujo.",
      "Distribuye estructuras y ciclos de administración sin tratar varios archivos como sustituto automático de rendimiento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Data files y filegroups (Páginas, archivos y almacenamiento): Distribuye estructuras y ciclos de administración sin tratar varios archivos como sustituto automático de rendimiento.",
    "topic": "Páginas, archivos y almacenamiento",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-37",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «Filas in-row, row-overflow y LOB» en páginas, archivos y almacenamiento?",
    "options": [
      "Comprende cuándo una fila conserva datos en la página y cuándo usa estructuras separadas con más lecturas al operar.",
      "Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física al operar.",
      "Registra cambios antes de páginas de datos para permitir rollback, recuperación y continuidad del historial.",
      "Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Filas in-row, row-overflow y LOB (Páginas, archivos y almacenamiento): Comprende cuándo una fila conserva datos en la página y cuándo usa estructuras separadas con más lecturas.",
    "topic": "Páginas, archivos y almacenamiento",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-38",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Buffer pool»?",
    "options": [
      "Comprende cuándo una fila conserva datos en la página y cuándo usa estructuras separadas con más lecturas al operar.",
      "Distingue lectura lógica de física y entiende que memoria disponible, presión y patrón de acceso condicionan I/O.",
      "Registra cambios antes de páginas de datos para permitir rollback, recuperación y continuidad del historial al operar.",
      "Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física de forma segura."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Buffer pool (Páginas, archivos y almacenamiento): Distingue lectura lógica de física y entiende que memoria disponible, presión y patrón de acceso condicionan I/O.",
    "topic": "Páginas, archivos y almacenamiento",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-39",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «Transaction log y WAL»?",
    "options": [
      "Comprende cuándo una fila conserva datos en la página y cuándo usa estructuras separadas con más lecturas al operar.",
      "Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física al evaluar.",
      "Registra cambios antes de páginas de datos para permitir rollback, recuperación y continuidad del historial.",
      "Expresa reglas locales deterministas para impedir estados inválidos antes de que alcancen otras capas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Transaction log y WAL (Páginas, archivos y almacenamiento): Registra cambios antes de páginas de datos para permitir rollback, recuperación y continuidad del historial.",
    "topic": "Páginas, archivos y almacenamiento",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-40",
    "collectionId": "sql-server",
    "question": "Respecto a índices y estadísticas en Microsoft SQL Server, ¿cuál es el propósito de «Clustered index y heap»?",
    "options": [
      "Representa distribución mediante histogramas y densidad para que el optimizador estime filas y elija recursos de forma segura.",
      "Reduce estructura para subconjuntos y evalúa columnstore, XML, spatial o full-text según el tipo de consulta con precisión.",
      "Crea una ruta alternativa por claves que apunta a la fila base y paga costo adicional en cada escritura de modo predecible.",
      "Elige organización física por patrón de acceso y mantenimiento, sin asumir que clustered significa orden global permanente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Clustered index y heap (Índices y estadísticas): Elige organización física por patrón de acceso y mantenimiento, sin asumir que clustered significa orden global permanente.",
    "topic": "Índices y estadísticas",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-41",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Índices y estadísticas), ¿qué función técnica cumple «Nonclustered index»?",
    "options": [
      "Crea una ruta alternativa por claves que apunta a la fila base y paga costo adicional en cada escritura al operar.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales al operar.",
      "Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física al operar.",
      "Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Nonclustered index (Índices y estadísticas): Crea una ruta alternativa por claves que apunta a la fila base y paga costo adicional en cada escritura.",
    "topic": "Índices y estadísticas",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-42",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «Columnas INCLUDE y cobertura» en índices y estadísticas?",
    "options": [
      "Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden al operar.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales.",
      "Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas al operar.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Columnas INCLUDE y cobertura (Índices y estadísticas): Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales.",
    "topic": "Índices y estadísticas",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-43",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Índices filtrados y especializados»?",
    "options": [
      "Crea una ruta alternativa por claves que apunta a la fila base y paga costo adicional en cada escritura al operar.",
      "Representa distribución mediante histogramas y densidad para que el optimizador estime filas y elija recursos.",
      "Reduce estructura para subconjuntos y evalúa columnstore, XML, spatial o full-text según el tipo de consulta.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Índices filtrados y especializados (Índices y estadísticas): Reduce estructura para subconjuntos y evalúa columnstore, XML, spatial o full-text según el tipo de consulta.",
    "topic": "Índices y estadísticas",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-44",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «Estadísticas y cardinalidad»?",
    "options": [
      "Crea una ruta alternativa por claves que apunta a la fila base y paga costo adicional en cada escritura al operar.",
      "Reduce estructura para subconjuntos y evalúa columnstore, XML, spatial o full-text según el tipo de consulta.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales de forma clara.",
      "Representa distribución mediante histogramas y densidad para que el optimizador estime filas y elija recursos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Estadísticas y cardinalidad (Índices y estadísticas): Representa distribución mediante histogramas y densidad para que el optimizador estime filas y elija recursos.",
    "topic": "Índices y estadísticas",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-45",
    "collectionId": "sql-server",
    "question": "Respecto a optimizador y planes de ejecución en Microsoft SQL Server, ¿cuál es el propósito de «Compilación y algebrizer»?",
    "options": [
      "Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas al evaluar.",
      "Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden.",
      "Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales.",
      "Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Compilación y algebrizer (Optimizador y planes de ejecución): Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas.",
    "topic": "Optimizador y planes de ejecución",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-46",
    "collectionId": "sql-server",
    "question": "En Microsoft SQL Server (Optimizador y planes de ejecución), ¿qué función técnica cumple «Estimador de cardinalidad»?",
    "options": [
      "Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas durante la ejecución.",
      "Predice filas a partir de estadísticas y supuestos; un error temprano puede amplificarse por todo el plan.",
      "Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales al operar.",
      "Compone conjuntos compatibles comprendiendo deduplicación, tipos resultantes y costo de ordenamiento al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Estimador de cardinalidad (Optimizador y planes de ejecución): Predice filas a partir de estadísticas y supuestos; un error temprano puede amplificarse por todo el plan.",
    "topic": "Optimizador y planes de ejecución",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-47",
    "collectionId": "sql-server",
    "question": "Dentro de Microsoft SQL Server, ¿cómo opera el mecanismo de «Operadores físicos» en optimizador y planes de ejecución?",
    "options": [
      "Predice filas a partir de estadísticas y supuestos; un error temprano puede amplificarse por todo el plan al operar.",
      "Reutiliza planes para reducir compilación y reconoce cuándo distribución desigual produce parameter sensitivity.",
      "Interpreta scans, seeks, joins, sorts, aggregates, exchanges y spools por flujo de filas, memoria y costo real.",
      "Distingue ausencia permitida de un valor predeterminado y evita defaults que escondan datos desconocidos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Operadores físicos (Optimizador y planes de ejecución): Interpreta scans, seeks, joins, sorts, aggregates, exchanges y spools por flujo de filas, memoria y costo real.",
    "topic": "Optimizador y planes de ejecución",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-48",
    "collectionId": "sql-server",
    "question": "Al trabajar con Microsoft SQL Server, ¿qué responsabilidad define a «Plan cache y parámetros»?",
    "options": [
      "Predice filas a partir de estadísticas y supuestos; un error temprano puede amplificarse por todo el plan al operar.",
      "Interpreta scans, seeks, joins, sorts, aggregates, exchanges y spools por flujo de filas, memoria y costo real.",
      "Comprende cuándo una fila conserva datos en la página y cuándo usa estructuras separadas con más lecturas al operar.",
      "Reutiliza planes para reducir compilación y reconoce cuándo distribución desigual produce parameter sensitivity."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Plan cache y parámetros (Optimizador y planes de ejecución): Reutiliza planes para reducir compilación y reconoce cuándo distribución desigual produce parameter sensitivity.",
    "topic": "Optimizador y planes de ejecución",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-49",
    "collectionId": "sql-server",
    "question": "En la arquitectura de Microsoft SQL Server, ¿qué caracteriza técnicamente a «Plan estimado y actual»?",
    "options": [
      "Compara expectativas con filas, tiempos, spills y warnings observados sin usar el porcentaje de costo como verdad absoluta.",
      "Reutiliza planes para reducir compilación y reconoce cuándo distribución desigual produce parameter sensitivity al operar.",
      "Interpreta scans, seeks, joins, sorts, aggregates, exchanges y spools por flujo de filas, memoria y costo real al operar.",
      "Predice filas a partir de estadísticas y supuestos; un error temprano puede amplificarse por todo el plan de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Plan estimado y actual (Optimizador y planes de ejecución): Compara expectativas con filas, tiempos, spills y warnings observados sin usar el porcentaje de costo como verdad absoluta.",
    "topic": "Optimizador y planes de ejecución",
    "difficulty": "avanzado"
  },
  {
    "id": "sql-server-q-50",
    "collectionId": "sql-server",
    "question": "Respecto a transacciones y durabilidad en Microsoft SQL Server, ¿cuál es el propósito de «ACID»?",
    "options": [
      "Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión al operar.",
      "Relaciona atomicidad, consistencia, aislamiento y durabilidad con invariantes, concurrencia y recuperación del dominio.",
      "Distingue lectura lógica de física y entiende que memoria disponible, presión y patrón de acceso condicionan I/O al operar.",
      "Solicita solo columnas necesarias, asigna aliases comprensibles y evita tratar el orden de filas como implícito al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "ACID (Transacciones y durabilidad): Relaciona atomicidad, consistencia, aislamiento y durabilidad con invariantes, concurrencia y recuperación del dominio.",
    "topic": "Transacciones y durabilidad",
    "difficulty": "avanzado"
  }
];
