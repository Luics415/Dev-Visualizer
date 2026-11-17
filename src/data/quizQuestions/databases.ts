import type { QuizQuestion } from "@/data/quizTypes";

export const databasesQuestions: QuizQuestion[] = [
  {
    "id": "databases-q-01",
    "collectionId": "databases",
    "question": "En Bases de datos (Fundamentos y modelado), ¿qué función técnica cumple «Qué es una base de datos»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia de forma clara.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Software que administra almacenamiento, consultas, transacciones, seguridad y recuperación."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Qué es una base de datos (Fundamentos y modelado): Sistema que organiza, persiste y consulta información con reglas de consistencia.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-02",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «DBMS» en fundamentos y modelado?",
    "options": [
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento al operar.",
      "Software que administra almacenamiento, consultas, transacciones, seguridad y recuperación.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "DBMS (Fundamentos y modelado): Software que administra almacenamiento, consultas, transacciones, seguridad y recuperación.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-03",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «Esquema»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Define estructuras, tipos, relaciones y restricciones esperadas dentro de la aplicación.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Esquema (Fundamentos y modelado): Define estructuras, tipos, relaciones y restricciones esperadas.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-04",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «Modelo conceptual, lógico y físico»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Reduce redundancia separando hechos que cambian de forma independiente de forma segura.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Modelo conceptual, lógico y físico (Fundamentos y modelado): Separa significado del negocio, estructura de datos e implementación de almacenamiento.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-05",
    "collectionId": "databases",
    "question": "Respecto a fundamentos y modelado en Bases de datos, ¿cuál es el propósito de «Entidades y atributos»?",
    "options": [
      "Representa objetos con identidad y propiedades dentro del ciclo operativo del sistema.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Entidades y atributos (Fundamentos y modelado): Representan objetos con identidad y propiedades.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-06",
    "collectionId": "databases",
    "question": "En Bases de datos (Fundamentos y modelado), ¿qué función técnica cumple «Relaciones»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Modela asociaciones uno a uno, uno a muchos y muchos a muchos manteniendo consistencia.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Relaciones (Fundamentos y modelado): Modelan asociaciones uno a uno, uno a muchos y muchos a muchos.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-07",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «Claves primarias» en fundamentos y modelado?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Identifica cada fila de forma única y estable dentro del ciclo operativo del sistema.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Claves primarias (Fundamentos y modelado): Identifican cada fila de forma única y estable.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-08",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «Claves foráneas»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento.",
      "Garantiza que una referencia apunte a una fila existente manteniendo el contrato activo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Claves foráneas (Fundamentos y modelado): Garantizan que una referencia apunte a una fila existente.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-09",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «Normalización»?",
    "options": [
      "Reduce redundancia separando hechos que cambian de forma independiente sin degradar el flujo.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Normalización (Fundamentos y modelado): Reduce redundancia separando hechos que cambian de forma independiente.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-10",
    "collectionId": "databases",
    "question": "Respecto a fundamentos y modelado en Bases de datos, ¿cuál es el propósito de «Desnormalización»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Reduce redundancia separando hechos que cambian de forma independiente en el flujo.",
      "Define estructuras, tipos, relaciones y restricciones esperadas de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Desnormalización (Fundamentos y modelado): Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-11",
    "collectionId": "databases",
    "question": "En Bases de datos (Fundamentos y modelado), ¿qué función técnica cumple «Tipos de datos»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Eligen representación, rango, precisión y operaciones válidas manteniendo consistencia.",
      "Separa significado del negocio, estructura de datos e implementación de almacenamiento."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tipos de datos (Fundamentos y modelado): Eligen representación, rango, precisión y operaciones válidas.",
    "topic": "Fundamentos y modelado",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-12",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «DDL» en sql y operaciones relacionales?",
    "options": [
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al evaluar.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Crea y modifica tablas, índices, constraints y otros objetos respetando las invariantes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "DDL (SQL y operaciones relacionales): Crea y modifica tablas, índices, constraints y otros objetos.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-13",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «DML»?",
    "options": [
      "Inserta, actualiza y elimina filas dentro del ciclo operativo del sistema.",
      "Representa ausencia o desconocimiento y usa lógica de tres valores al operar.",
      "Crea y modifica tablas, índices, constraints y otros objetos al evaluar.",
      "Proyecta columnas y filtra filas desde una o más relaciones en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "DML (SQL y operaciones relacionales): Inserta, actualiza y elimina filas.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-14",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «SELECT»?",
    "options": [
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar.",
      "Proyecta columnas y filtra filas desde una o más relaciones respetando las invariantes.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Representa ausencia o desconocimiento y usa lógica de tres valores de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SELECT (SQL y operaciones relacionales): Proyecta columnas y filtra filas desde una o más relaciones.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-15",
    "collectionId": "databases",
    "question": "Respecto a sql y operaciones relacionales en Bases de datos, ¿cuál es el propósito de «WHERE»?",
    "options": [
      "Representa ausencia o desconocimiento y usa lógica de tres valores al operar.",
      "Crea y modifica tablas, índices, constraints y otros objetos al evaluar.",
      "Filtra filas antes de agrupación dentro del ciclo operativo del sistema.",
      "Proyecta columnas y filtra filas desde una o más relaciones en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "WHERE (SQL y operaciones relacionales): Filtra filas antes de agrupación.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-16",
    "collectionId": "databases",
    "question": "En Bases de datos (SQL y operaciones relacionales), ¿qué función técnica cumple «ORDER BY y LIMIT»?",
    "options": [
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al evaluar.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Ordena resultados y restringen la ventana devuelta respetando las restricciones de tipo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "ORDER BY y LIMIT (SQL y operaciones relacionales): Ordenan resultados y restringen la ventana devuelta.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "básico"
  },
  {
    "id": "databases-q-17",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «INSERT» en sql y operaciones relacionales?",
    "options": [
      "Crea filas y puede devolver valores generados dentro del ciclo operativo del sistema.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos.",
      "Representa ausencia o desconocimiento y usa lógica de tres valores de forma segura.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "INSERT (SQL y operaciones relacionales): Crea filas y puede devolver valores generados.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-18",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «UPDATE»?",
    "options": [
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al evaluar.",
      "Cambia columnas de filas seleccionadas por un predicado durante la ejecución del módulo.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "UPDATE (SQL y operaciones relacionales): Cambia columnas de filas seleccionadas por un predicado.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-19",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «DELETE»?",
    "options": [
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al evaluar.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Elimina filas respetando relaciones y reglas de cascada durante la ejecución del módulo.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "DELETE (SQL y operaciones relacionales): Elimina filas respetando relaciones y reglas de cascada.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-20",
    "collectionId": "databases",
    "question": "Respecto a sql y operaciones relacionales en Bases de datos, ¿cuál es el propósito de «UPSERT»?",
    "options": [
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al evaluar.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Inserta o actualiza según una restricción de conflicto dentro de la arquitectura activa."
    ],
    "correctAnswerIndex": 3,
    "explanation": "UPSERT (SQL y operaciones relacionales): Inserta o actualiza según una restricción de conflicto.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-21",
    "collectionId": "databases",
    "question": "En Bases de datos (SQL y operaciones relacionales), ¿qué función técnica cumple «NULL»?",
    "options": [
      "Representa ausencia o desconocimiento y usa lógica de tres valores respetando las invariantes.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización."
    ],
    "correctAnswerIndex": 0,
    "explanation": "NULL (SQL y operaciones relacionales): Representa ausencia o desconocimiento y usa lógica de tres valores.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-22",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «Expresiones» en sql y operaciones relacionales?",
    "options": [
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al evaluar.",
      "Transforma columnas con operadores y funciones del motor manteniendo el contrato activo.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Expresiones y funciones (SQL y operaciones relacionales): Transforman columnas con operadores y funciones del motor.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-23",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «CTEs»?",
    "options": [
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "CTEs (SQL y operaciones relacionales): Nombran subconsultas para componer pasos legibles y, según el motor, recursivos.",
    "topic": "SQL y operaciones relacionales",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-24",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «INNER JOIN»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar.",
      "Conserva combinaciones que coinciden en ambos lados manteniendo la trazabilidad técnica."
    ],
    "correctAnswerIndex": 3,
    "explanation": "INNER JOIN (Joins, agregación y análisis): Conserva combinaciones que coinciden en ambos lados.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-25",
    "collectionId": "databases",
    "question": "Respecto a joins, agregación y análisis en Bases de datos, ¿cuál es el propósito de «LEFT JOIN»?",
    "options": [
      "Conserva todas las filas izquierdas aunque no exista coincidencia respetando las invariantes.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "LEFT JOIN (Joins, agregación y análisis): Conserva todas las filas izquierdas aunque no exista coincidencia.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-26",
    "collectionId": "databases",
    "question": "En Bases de datos (Joins, agregación y análisis), ¿qué función técnica cumple «Self join»?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Relaciona una tabla consigo misma para jerarquías o comparaciones sin degradar el flujo.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Self join (Joins, agregación y análisis): Relaciona una tabla consigo misma para jerarquías o comparaciones.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-27",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «Muchos a muchos» en joins, agregación y análisis?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Usa una tabla puente con dos claves foráneas y restricciones respetando las invariantes.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Muchos a muchos (Joins, agregación y análisis): Usa una tabla puente con dos claves foráneas y restricciones.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-28",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «GROUP BY»?",
    "options": [
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar.",
      "Conserva todas las filas izquierdas aunque no exista coincidencia de modo predecible.",
      "Relaciona una tabla consigo misma para jerarquías o comparaciones de modo predecible.",
      "Agrupa filas para calcular agregados por clave dentro del ciclo operativo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "GROUP BY (Joins, agregación y análisis): Agrupa filas para calcular agregados por clave.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-29",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «Funciones agregadas»?",
    "options": [
      "Calcula COUNT, SUM, AVG, MIN y MAX sobre conjuntos dentro del ciclo operativo del sistema.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Funciones agregadas (Joins, agregación y análisis): Calculan COUNT, SUM, AVG, MIN y MAX sobre conjuntos.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-30",
    "collectionId": "databases",
    "question": "Respecto a joins, agregación y análisis en Bases de datos, ¿cuál es el propósito de «HAVING»?",
    "options": [
      "Conserva todas las filas izquierdas aunque no exista coincidencia al operar.",
      "Filtra grupos después de agregar dentro del ciclo operativo del sistema.",
      "Relaciona una tabla consigo misma para jerarquías o comparaciones al operar.",
      "Combina resultados compatibles mediante UNION, INTERSECT o EXCEPT al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "HAVING (Joins, agregación y análisis): Filtra grupos después de agregar.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-31",
    "collectionId": "databases",
    "question": "En Bases de datos (Joins, agregación y análisis), ¿qué función técnica cumple «Window functions»?",
    "options": [
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar.",
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura al operar.",
      "Calcula valores sobre una ventana sin colapsar filas manteniendo la trazabilidad técnica.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Window functions (Joins, agregación y análisis): Calculan valores sobre una ventana sin colapsar filas.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-32",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «Subqueries» en joins, agregación y análisis?",
    "options": [
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar.",
      "Conserva todas las filas izquierdas aunque no exista coincidencia durante la ejecución.",
      "Anidan consultas escalares, correlacionadas o de conjunto bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Subqueries (Joins, agregación y análisis): Anidan consultas escalares, correlacionadas o de conjunto.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-33",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «Set operations»?",
    "options": [
      "Combina resultados compatibles mediante UNION, INTERSECT o EXCEPT respetando las invariantes.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Set operations (Joins, agregación y análisis): Combinan resultados compatibles mediante UNION, INTERSECT o EXCEPT.",
    "topic": "Joins, agregación y análisis",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-34",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «NOT NULL»?",
    "options": [
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados de forma segura.",
      "Impide ausencia cuando el atributo es obligatorio respetando las restricciones de tipo.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres sin perder estado.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "NOT NULL (Integridad y reglas de datos): Impide ausencia cuando el atributo es obligatorio.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "databases-q-35",
    "collectionId": "databases",
    "question": "Respecto a integridad y reglas de datos en Bases de datos, ¿cuál es el propósito de «UNIQUE»?",
    "options": [
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados en ejecución.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres de forma clara.",
      "Evita duplicados según una o varias columnas dentro del ciclo operativo del sistema.",
      "Ejecuta lógica dentro del motor ante cambios de filas o statements dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "UNIQUE (Integridad y reglas de datos): Evita duplicados según una o varias columnas.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-36",
    "collectionId": "databases",
    "question": "En Bases de datos (Integridad y reglas de datos), ¿qué función técnica cumple «CHECK»?",
    "options": [
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados de forma segura.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres sin perder estado.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Expresa invariantes locales mediante una condición booleana respetando las invariantes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "CHECK (Integridad y reglas de datos): Expresa invariantes locales mediante una condición booleana.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-37",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «DEFAULT» en integridad y reglas de datos?",
    "options": [
      "Proporciona un valor cuando la columna se omite dentro del ciclo operativo del sistema.",
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados al evaluar.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres de forma segura.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "DEFAULT (Integridad y reglas de datos): Proporciona un valor cuando la columna se omite.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-38",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «Referential actions»?",
    "options": [
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados dentro del flujo.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres de modo predecible.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Referential actions (Integridad y reglas de datos): Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-39",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «Constraints diferibles»?",
    "options": [
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados de forma segura.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres sin perder estado.",
      "Posponen ciertas comprobaciones hasta el final de la transacción sin degradar el flujo.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Constraints diferibles (Integridad y reglas de datos): Posponen ciertas comprobaciones hasta el final de la transacción.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-40",
    "collectionId": "databases",
    "question": "Respecto a integridad y reglas de datos en Bases de datos, ¿cuál es el propósito de «Dominios y enums»?",
    "options": [
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados dentro del flujo.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres de modo predecible.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Centralizan conjuntos de valores o reglas reutilizables durante la ejecución del módulo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dominios y enums (Integridad y reglas de datos): Centralizan conjuntos de valores o reglas reutilizables.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-41",
    "collectionId": "databases",
    "question": "En Bases de datos (Integridad y reglas de datos), ¿qué función técnica cumple «Triggers»?",
    "options": [
      "Ejecuta lógica dentro del motor ante cambios de filas o statements respetando las invariantes.",
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados en el flujo.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres dentro del flujo.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Triggers (Integridad y reglas de datos): Ejecutan lógica dentro del motor ante cambios de filas o statements.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-42",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «Generated columns» en integridad y reglas de datos?",
    "options": [
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados dentro del flujo.",
      "Calcula una columna desde otras según una expresión definida respetando las invariantes.",
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres de modo predecible.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Generated columns (Integridad y reglas de datos): Calculan una columna desde otras según una expresión definida.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-43",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «Auditoría de cambios»?",
    "options": [
      "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres sin degradar el flujo.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Registra quién, cuándo y qué cambió mediante tablas o logs especializados con precisión.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Auditoría de cambios (Integridad y reglas de datos): Registra quién, cuándo y qué cambió mediante tablas o logs especializados.",
    "topic": "Integridad y reglas de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-44",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «Qué es un índice»?",
    "options": [
      "Optimiza igualdad en motores que lo soportan, sin ordenar rangos sin degradar el flujo.",
      "Incluye columnas suficientes para responder sin visitar la tabla de modo predecible.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos.",
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Qué es un índice (Índices y optimización de consultas): Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura.",
    "topic": "Índices y optimización de consultas",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-45",
    "collectionId": "databases",
    "question": "Respecto a índices y optimización de consultas en Bases de datos, ¿cuál es el propósito de «B-tree»?",
    "options": [
      "Índice ordenado útil para igualdad, rangos y ordenación respetando las restricciones de tipo.",
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Duplica datos de forma deliberada para lecturas específicas y exige sincronización."
    ],
    "correctAnswerIndex": 0,
    "explanation": "B-tree (Índices y optimización de consultas): Índice ordenado útil para igualdad, rangos y ordenación.",
    "topic": "Índices y optimización de consultas",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-46",
    "collectionId": "databases",
    "question": "En Bases de datos (Índices y optimización de consultas), ¿qué función técnica cumple «Hash index»?",
    "options": [
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura al operar.",
      "Optimiza igualdad en motores que lo soportan, sin ordenar rangos sin degradar el flujo.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Hash index (Índices y optimización de consultas): Optimiza igualdad en motores que lo soportan, sin ordenar rangos.",
    "topic": "Índices y optimización de consultas",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-47",
    "collectionId": "databases",
    "question": "Dentro de Bases de datos, ¿cómo opera el mecanismo de «Índices compuestos» en índices y optimización de consultas?",
    "options": [
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura al operar.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar.",
      "Indexan varias columnas en un orden específico dentro del ciclo operativo del sistema.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Índices compuestos (Índices y optimización de consultas): Indexan varias columnas en un orden específico.",
    "topic": "Índices y optimización de consultas",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-48",
    "collectionId": "databases",
    "question": "Al trabajar con Bases de datos, ¿qué responsabilidad define a «Índices parciales»?",
    "options": [
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura.",
      "Optimiza igualdad en motores que lo soportan, sin ordenar rangos sin perder estado.",
      "Incluye columnas suficientes para responder sin visitar la tabla sin perder estado.",
      "Incluye solo filas que cumplen un predicado dentro del ciclo operativo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Índices parciales (Índices y optimización de consultas): Incluyen solo filas que cumplen un predicado.",
    "topic": "Índices y optimización de consultas",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-49",
    "collectionId": "databases",
    "question": "En la arquitectura de Bases de datos, ¿qué caracteriza técnicamente a «Índices de expresión»?",
    "options": [
      "Indexan el resultado de una función o expresión dentro del ciclo operativo del sistema.",
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Índices de expresión (Índices y optimización de consultas): Indexan el resultado de una función o expresión.",
    "topic": "Índices y optimización de consultas",
    "difficulty": "avanzado"
  },
  {
    "id": "databases-q-50",
    "collectionId": "databases",
    "question": "Respecto a índices y optimización de consultas en Bases de datos, ¿cuál es el propósito de «Covering index»?",
    "options": [
      "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura al operar.",
      "Incluye columnas suficientes para responder sin visitar la tabla sin degradar el flujo.",
      "Sistema que organiza, persiste y consulta información con reglas de consistencia al operar.",
      "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Covering index (Índices y optimización de consultas): Incluye columnas suficientes para responder sin visitar la tabla.",
    "topic": "Índices y optimización de consultas",
    "difficulty": "avanzado"
  }
];
