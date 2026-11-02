# 📘 [SQL] SQL

> **Modelo relacional, DDL, consultas, joins, transacciones, optimización y portabilidad.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `sql` |
| **Grupo Arquitectónico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `databases` |
| **Total de Conceptos** | **130 conceptos** |
| **Capítulos / Secciones** | **20 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/sql)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/sql-en-accion)**


## 🔬 Caso Práctico en Acción: Optimizar una consulta de pedidos

> **Caso integrado de SQL:** Una consulta une pedidos y eventos, el planner elige un scan costoso por una expresión no indexable y se recupera el acceso sin cambiar resultados.  
> La entrega conserva query, parámetros, plan real, índices, cardinalidad y prueba de equivalencia.

### Fases de Ejecución:
1. **Expresar resultado** (Optimizar una consulta de pedidos: etapa 1 de 5): `SELECT customer_id, count(*) FROM orders GROUP BY customer_id` → Resultado lógico. *La etapa conserva un contrato explícito para que el siguiente paso de SQL no dependa de supuestos ocultos.*
2. **Inspeccionar plan** (Optimizar una consulta de pedidos: etapa 2 de 5): `EXPLAIN (ANALYZE, BUFFERS) SELECT ...` → Cuello localizado. *La etapa conserva un contrato explícito para que el siguiente paso de SQL no dependa de supuestos ocultos.*
3. **Detectar filtro no sargable** (Optimizar una consulta de pedidos: etapa 3 de 5): `WHERE lower(email) = lower($1)` → Latencia fuera de objetivo. *El caso hace visible el fallo de SQL; no continúa como si la evidencia fuera válida.*
4. **Crear acceso adecuado** (Optimizar una consulta de pedidos: etapa 4 de 5): `CREATE INDEX ON customers (lower(email));` → Acceso recuperado. *La recuperación de SQL corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Verificar transacción** (Optimizar una consulta de pedidos: etapa 5 de 5): `BEGIN; run_equivalence_tests(); COMMIT;` → Consulta promovible. *La etapa conserva un contrato explícito para que el siguiente paso de SQL no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (130)

### 📑 Sección: Modelo relacional (5 conceptos)

- **Relaciones y tuplas**  
  *Familia:* `telar relacional`  
  Para entender Relaciones y tuplas, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.

- **Claves**  
  *Familia:* `consulta e índice`  
  El mecanismo de Claves recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **NULL y lógica ternaria**  
  *Familia:* `mapa de memoria`  
  NULL y lógica ternaria conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Constraints**  
  *Familia:* `telar relacional`  
  En Constraints, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.

- **Normalización**  
  *Familia:* `consulta e índice`  
  La función de Normalización parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.


### 📑 Sección: Consultas (5 conceptos)

- **SELECT**  
  *Familia:* `flujo de transformación`  
  Para entender SELECT, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.

- **Joins**  
  *Familia:* `telar relacional`  
  El mecanismo de Joins recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **Agregaciones**  
  *Familia:* `mapa de memoria`  
  Agregaciones conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Subqueries**  
  *Familia:* `consulta e índice`  
  En Subqueries, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.

- **Window functions**  
  *Familia:* `telar relacional`  
  La función de Window functions parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.


### 📑 Sección: Cambios y concurrencia (5 conceptos)

- **INSERT UPDATE DELETE**  
  *Familia:* `planificación de trabajo`  
  INSERT UPDATE DELETE estructura tareas con dependencias, recursos compartidos y una señal de cancelación en el sistema: ordena trabajo y sincronización sin ocultar intercalados posibles, garantizando progreso concurrente con ownership y terminación observables.

- **Transactions**  
  *Familia:* `consulta e índice`  
  El recorrido de Transactions toma tareas con dependencias, recursos compartidos y una señal de cancelación. Posteriormente ordena trabajo y sincronización sin ocultar intercalados posibles para validar progreso concurrente con ownership y terminación observables.

- **Isolation**  
  *Familia:* `aislamiento sobre host`  
  Isolation procesa tareas con dependencias, recursos compartidos y una señal de cancelación: ordena trabajo y sincronización sin ocultar intercalados posibles para entregar progreso concurrente con ownership y terminación observables.

- **Locks**  
  *Familia:* `planificación de trabajo`  
  Para entender Locks, se delimita tareas con dependencias, recursos compartidos y una señal de cancelación. La operación ordena trabajo y sincronización sin ocultar intercalados posibles hasta producir progreso concurrente con ownership y terminación observables.

- **MVCC**  
  *Familia:* `cola y consumidor`  
  El mecanismo de MVCC recibe tareas con dependencias, recursos compartidos y una señal de cancelación y ordena trabajo y sincronización sin ocultar intercalados posibles, asegurando progreso concurrente con ownership y terminación observables.


### 📑 Sección: Diagnóstico (5 conceptos)

- **Execution plans**  
  *Familia:* `consulta e índice`  
  Execution plans conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Statistics**  
  *Familia:* `tabla de estados`  
  En Statistics, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Indexes**  
  *Familia:* `jerarquía y dependencias`  
  La función de Indexes parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Sargability**  
  *Familia:* `evidencia y latencia`  
  Sargability estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Bloqueos y deadlocks**  
  *Familia:* `pasaporte del artefacto`  
  El recorrido de Bloqueos y deadlocks toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### 📑 Sección: Producción (5 conceptos)

- **Schemas y migrations**  
  *Familia:* `validación y decisión`  
  El mecanismo de Schemas y migrations recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **Roles**  
  *Familia:* `mapa de memoria`  
  Roles conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Backups**  
  *Familia:* `secuencia operativa`  
  En Backups, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Portabilidad de dialectos**  
  *Familia:* `pasaporte del artefacto`  
  La función de Portabilidad de dialectos parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Auditoría**  
  *Familia:* `capas internas`  
  Auditoría estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Álgebra y cálculo relacional (6 conceptos)

- **Selección y proyección**  
  *Familia:* `telar relacional`  
  Selección y proyección en Álgebra y cálculo relacional: parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices, asegurando filas correctas y cambios durables bajo el aislamiento solicitado.

- **Producto y join relacional**  
  *Familia:* `consulta e índice`  
  En Álgebra y cálculo relacional, Producto y join relacional reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores para entregar conjunto de filas correcto acompañado por costo y orden conocidos.

- **División relacional**  
  *Familia:* `flujo de transformación`  
  División relacional aplica este mecanismo en Álgebra y cálculo relacional: parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices, con filas correctas y cambios durables bajo el aislamiento solicitado.

- **Cálculo de tuplas**  
  *Familia:* `telar relacional`  
  El mecanismo de Cálculo de tuplas dentro de Álgebra y cálculo relacional parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices y consolida filas correctas y cambios durables bajo el aislamiento solicitado.

- **Equivalencia de expresiones**  
  *Familia:* `consulta e índice`  
  Para Equivalencia de expresiones, la arquitectura de Álgebra y cálculo relacional parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices, garantizando filas correctas y cambios durables bajo el aislamiento solicitado.

- **Relational division**  
  *Familia:* `flujo de transformación`  
  Relational division gestiona Álgebra y cálculo relacional de modo que reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, produciendo conjunto de filas correcto acompañado por costo y orden conocidos.


### 📑 Sección: Diseño lógico avanzado (7 conceptos)

- **Dependencias funcionales**  
  *Familia:* `telar relacional`  
  Dependencias funcionales en Diseño lógico avanzado: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, asegurando artefacto versionado cuya composición puede reproducirse.

- **Forma normal de Boyce-Codd**  
  *Familia:* `consulta e índice`  
  En Diseño lógico avanzado, Forma normal de Boyce-Codd parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices para entregar filas correctas y cambios durables bajo el aislamiento solicitado.

- **Dependencias multivaluadas**  
  *Familia:* `flujo de transformación`  
  Dependencias multivaluadas aplica este mecanismo en Diseño lógico avanzado: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, con artefacto versionado cuya composición puede reproducirse.

- **Descomposición sin pérdida**  
  *Familia:* `telar relacional`  
  El mecanismo de Descomposición sin pérdida dentro de Diseño lógico avanzado compone aplicaciones y propaga resultado o error sin mutar la entrada y consolida valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Integridad referencial diferida**  
  *Familia:* `consulta e índice`  
  Para Integridad referencial diferida, la arquitectura de Diseño lógico avanzado evalúa precondiciones y combina restricciones antes de comprometer estado, garantizando valor aceptado con garantía explícita o error localizado.

- **Join dependencies**  
  *Familia:* `flujo de transformación`  
  Join dependencies gestiona Diseño lógico avanzado de modo que reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, produciendo conjunto de filas correcto acompañado por costo y orden conocidos.

- **Temporal normalization**  
  *Familia:* `telar relacional`  
  A través de Temporal normalization en Diseño lógico avanzado, el sistema parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices manteniendo filas correctas y cambios durables bajo el aislamiento solicitado.


### 📑 Sección: Expresiones de consulta (7 conceptos)

- **Common table expressions**  
  *Familia:* `jerarquía y dependencias`  
  Common table expressions en Expresiones de consulta: reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, asegurando conjunto de filas correcto acompañado por costo y orden conocidos.

- **Recursive queries**  
  *Familia:* `acumulación de recursos`  
  En Expresiones de consulta, Recursive queries reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores para entregar conjunto de filas correcto acompañado por costo y orden conocidos.

- **LATERAL joins**  
  *Familia:* `telar relacional`  
  LATERAL joins aplica este mecanismo en Expresiones de consulta: reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, con conjunto de filas correcto acompañado por costo y orden conocidos.

- **Grouping sets**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Grouping sets dentro de Expresiones de consulta reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores y consolida conjunto de filas correcto acompañado por costo y orden conocidos.

- **Pivotado portable**  
  *Familia:* `jerarquía y dependencias`  
  Para Pivotado portable, la arquitectura de Expresiones de consulta reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, garantizando conjunto de filas correcto acompañado por costo y orden conocidos.

- **Correlated lateral evaluation**  
  *Familia:* `despacho de runtime`  
  Correlated lateral evaluation gestiona Expresiones de consulta de modo que reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, produciendo conjunto de filas correcto acompañado por costo y orden conocidos.

- **Recursive cycle detection**  
  *Familia:* `acumulación de recursos`  
  A través de Recursive cycle detection en Expresiones de consulta, el sistema reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores manteniendo conjunto de filas correcto acompañado por costo y orden conocidos.


### 📑 Sección: Semántica de ventanas (8 conceptos)

- **Window partitions**  
  *Familia:* `telar relacional`  
  Window partitions en Semántica de ventanas: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, asegurando una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Frames ROWS y RANGE**  
  *Familia:* `consulta e índice`  
  En Semántica de ventanas, Frames ROWS y RANGE parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices para entregar filas correctas y cambios durables bajo el aislamiento solicitado.

- **Ranking**  
  *Familia:* `flujo de transformación`  
  Ranking aplica este mecanismo en Semántica de ventanas: reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, con conjunto de filas correcto acompañado por costo y orden conocidos.

- **Running aggregates**  
  *Familia:* `telar relacional`  
  El mecanismo de Running aggregates dentro de Semántica de ventanas reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores y consolida conjunto de filas correcto acompañado por costo y orden conocidos.

- **Gaps and islands**  
  *Familia:* `consulta e índice`  
  Para Gaps and islands, la arquitectura de Semántica de ventanas parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices, garantizando filas correctas y cambios durables bajo el aislamiento solicitado.

- **Window frame exclusion**  
  *Familia:* `flujo de transformación`  
  Window frame exclusion gestiona Semántica de ventanas de modo que propaga elementos, aplica ventana o transformación y regula producción con demanda, produciendo salida ordenada con memoria y latencia acotadas.

- **Deterministic peer ordering**  
  *Familia:* `telar relacional`  
  A través de Deterministic peer ordering en Semántica de ventanas, el sistema parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices manteniendo filas correctas y cambios durables bajo el aislamiento solicitado.

- **Null ordering contracts**  
  *Familia:* `consulta e índice`  
  En el flujo operativo de Semántica de ventanas, Null ordering contracts evalúa precondiciones y combina restricciones antes de comprometer estado para obtener valor aceptado con garantía explícita o error localizado.


### 📑 Sección: Tipos y dominios (6 conceptos)

- **Tipos exactos y aproximados**  
  *Familia:* `matriz de señales`  
  Tipos exactos y aproximados en Tipos y dominios: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Temporal data**  
  *Familia:* `flujo de transformación`  
  En Tipos y dominios, Temporal data resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Intervals**  
  *Familia:* `jerarquía y dependencias`  
  Intervals aplica este mecanismo en Tipos y dominios: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **JSON en SQL**  
  *Familia:* `consulta e índice`  
  El mecanismo de JSON en SQL dentro de Tipos y dominios codifica campos en orden definido y reconstruye validando versión y rangos y consolida representación interoperable que conserva significado al hacer round trip.

- **User-defined domains**  
  *Familia:* `cuadrícula paralela`  
  Para User-defined domains, la arquitectura de Tipos y dominios resuelve composición, restricciones y representación antes de aceptar la instancia, garantizando estructura válida cuyas operaciones permitidas están explícitas.

- **Collation semantics**  
  *Familia:* `flujo de transformación`  
  Collation semantics gestiona Tipos y dominios de modo que reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, produciendo conjunto de filas correcto acompañado por costo y orden conocidos.


### 📑 Sección: Procedimientos y automatización (7 conceptos)

- **Stored routines**  
  *Familia:* `telar relacional`  
  Stored routines en Procedimientos y automatización: serializa, negocia, transmite y traduce errores u ownership en la frontera, asegurando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Triggers**  
  *Familia:* `consulta e índice`  
  En Procedimientos y automatización, Triggers parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices para entregar filas correctas y cambios durables bajo el aislamiento solicitado.

- **Generated columns**  
  *Familia:* `flujo de transformación`  
  Generated columns aplica este mecanismo en Procedimientos y automatización: ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, con lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Sequences e identity**  
  *Familia:* `telar relacional`  
  El mecanismo de Sequences e identity dentro de Procedimientos y automatización parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices y consolida filas correctas y cambios durables bajo el aislamiento solicitado.

- **Event scheduling**  
  *Familia:* `consulta e índice`  
  Para Event scheduling, la arquitectura de Procedimientos y automatización parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices, garantizando filas correctas y cambios durables bajo el aislamiento solicitado.

- **Trigger recursion guards**  
  *Familia:* `flujo de transformación`  
  Trigger recursion guards gestiona Procedimientos y automatización de modo que compone aplicaciones y propaga resultado o error sin mutar la entrada, produciendo valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Idempotent scheduled routines**  
  *Familia:* `telar relacional`  
  A través de Idempotent scheduled routines en Procedimientos y automatización, el sistema parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices manteniendo filas correctas y cambios durables bajo el aislamiento solicitado.


### 📑 Sección: Internals de almacenamiento (7 conceptos)

- **Heap pages**  
  *Familia:* `tabla de estados`  
  Heap pages en Internals de almacenamiento: reserva, mapea o mueve memoria y registra quién debe reclamarla, asegurando datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **B-tree internals**  
  *Familia:* `jerarquía y dependencias`  
  En Internals de almacenamiento, B-tree internals parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices para entregar filas correctas y cambios durables bajo el aislamiento solicitado.

- **Write-ahead log**  
  *Familia:* `secuencia operativa`  
  Write-ahead log aplica este mecanismo en Internals de almacenamiento: registra intención, valida conflictos y confirma o compensa la unidad completa, con un estado durable que satisface aislamiento e invariantes declarados.

- **Buffer pool**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Buffer pool dentro de Internals de almacenamiento propaga elementos, aplica ventana o transformación y regula producción con demanda y consolida salida ordenada con memoria y latencia acotadas.

- **Vacuum y garbage collection**  
  *Familia:* `despacho de runtime`  
  Para Vacuum y garbage collection, la arquitectura de Internals de almacenamiento parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices, garantizando filas correctas y cambios durables bajo el aislamiento solicitado.

- **Buffer-pool replacement**  
  *Familia:* `capas internas`  
  Buffer-pool replacement gestiona Internals de almacenamiento de modo que propaga elementos, aplica ventana o transformación y regula producción con demanda, produciendo salida ordenada con memoria y latencia acotadas.

- **Write-ahead log record lifecycle**  
  *Familia:* `secuencia operativa`  
  A través de Write-ahead log record lifecycle en Internals de almacenamiento, el sistema registra intención, valida conflictos y confirma o compensa la unidad completa manteniendo un estado durable que satisface aislamiento e invariantes declarados.


### 📑 Sección: Optimización de consultas (7 conceptos)

- **Cardinality estimation**  
  *Familia:* `tabla de estados`  
  Cardinality estimation en Optimización de consultas: estima cardinalidades, compara accesos y conserva alternativas sensibles a la distribución, asegurando plan ejecutable cuyo costo observado corresponde al conjunto de parámetros.

- **Join ordering**  
  *Familia:* `telar relacional`  
  En Optimización de consultas, Join ordering estima cardinalidades, compara accesos y conserva alternativas sensibles a la distribución para entregar plan ejecutable cuyo costo observado corresponde al conjunto de parámetros.

- **Cost model**  
  *Familia:* `flujo de transformación`  
  Cost model aplica este mecanismo en Optimización de consultas: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **Predicate pushdown**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Predicate pushdown dentro de Optimización de consultas reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores y consolida conjunto de filas correcto acompañado por costo y orden conocidos.

- **Plan cache y parameter sensitivity**  
  *Familia:* `memoria intermedia`  
  Para Plan cache y parameter sensitivity, la arquitectura de Optimización de consultas consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, garantizando reutilización medible sin cambiar el resultado funcional.

- **Parameter-sensitive plans**  
  *Familia:* `evidencia y latencia`  
  Parameter-sensitive plans gestiona Optimización de consultas de modo que estima cardinalidades, compara accesos y conserva alternativas sensibles a la distribución, produciendo plan ejecutable cuyo costo observado corresponde al conjunto de parámetros.

- **Extended statistics**  
  *Familia:* `tabla de estados`  
  A través de Extended statistics en Optimización de consultas, el sistema reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores manteniendo conjunto de filas correcto acompañado por costo y orden conocidos.


### 📑 Sección: Índices especializados (7 conceptos)

- **Covering indexes**  
  *Familia:* `consulta e índice`  
  Covering indexes en Índices especializados: reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, asegurando conjunto de filas correcto acompañado por costo y orden conocidos.

- **Partial indexes**  
  *Familia:* `jerarquía y dependencias`  
  En Índices especializados, Partial indexes reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores para entregar conjunto de filas correcto acompañado por costo y orden conocidos.

- **Expression indexes**  
  *Familia:* `tabla de estados`  
  Expression indexes aplica este mecanismo en Índices especializados: reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, con conjunto de filas correcto acompañado por costo y orden conocidos.

- **Hash indexes**  
  *Familia:* `consulta e índice`  
  El mecanismo de Hash indexes dentro de Índices especializados reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores y consolida conjunto de filas correcto acompañado por costo y orden conocidos.

- **Full-text indexes**  
  *Familia:* `jerarquía y dependencias`  
  Para Full-text indexes, la arquitectura de Índices especializados reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, garantizando conjunto de filas correcto acompañado por costo y orden conocidos.

- **Block-range indexes**  
  *Familia:* `tabla de estados`  
  Block-range indexes gestiona Índices especializados de modo que reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, produciendo conjunto de filas correcto acompañado por costo y orden conocidos.

- **Index-only visibility**  
  *Familia:* `consulta e índice`  
  A través de Index-only visibility en Índices especializados, el sistema reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores manteniendo conjunto de filas correcto acompañado por costo y orden conocidos.


### 📑 Sección: Concurrencia avanzada (7 conceptos)

- **Snapshot isolation**  
  *Familia:* `aislamiento sobre host`  
  Snapshot isolation en Concurrencia avanzada: registra intención, valida conflictos y confirma o compensa la unidad completa, asegurando un estado durable que satisface aislamiento e invariantes declarados.

- **Serializable anomalies**  
  *Familia:* `planificación de trabajo`  
  En Concurrencia avanzada, Serializable anomalies codifica campos en orden definido y reconstruye validando versión y rangos para entregar representación interoperable que conserva significado al hacer round trip.

- **Predicate locks**  
  *Familia:* `topología y tráfico`  
  Predicate locks aplica este mecanismo en Concurrencia avanzada: adquiere o señaliza sincronización, publica cambios y libera en un orden definido, con estado visible sin carreras y progreso dentro del límite acordado.

- **Optimistic concurrency**  
  *Familia:* `cola y consumidor`  
  El mecanismo de Optimistic concurrency dentro de Concurrencia avanzada adquiere o señaliza sincronización, publica cambios y libera en un orden definido y consolida estado visible sin carreras y progreso dentro del límite acordado.

- **Advisory locks**  
  *Familia:* `planificación de trabajo`  
  Para Advisory locks, la arquitectura de Concurrencia avanzada adquiere o señaliza sincronización, publica cambios y libera en un orden definido, garantizando estado visible sin carreras y progreso dentro del límite acordado.

- **Key-range predicate locking**  
  *Familia:* `topología y tráfico`  
  Key-range predicate locking gestiona Concurrencia avanzada de modo que registra intención, valida conflictos y confirma o compensa la unidad completa, produciendo un estado durable que satisface aislamiento e invariantes declarados.

- **Deadlock victim selection**  
  *Familia:* `telar relacional`  
  A través de Deadlock victim selection en Concurrencia avanzada, el sistema adquiere o señaliza sincronización, publica cambios y libera en un orden definido manteniendo estado visible sin carreras y progreso dentro del límite acordado.


### 📑 Sección: Particionado y distribución (7 conceptos)

- **Range partitioning**  
  *Familia:* `tejido de eventos`  
  Range partitioning en Particionado y distribución: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, asegurando una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Hash partitioning**  
  *Familia:* `tabla de estados`  
  En Particionado y distribución, Hash partitioning elige responsables, propaga versión y reconcilia respuestas según quorum o reloj para entregar una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Partition pruning**  
  *Familia:* `cola y consumidor`  
  Partition pruning aplica este mecanismo en Particionado y distribución: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, con una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Read replicas**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Read replicas dentro de Particionado y distribución elige responsables, propaga versión y reconcilia respuestas según quorum o reloj y consolida una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Distributed transactions**  
  *Familia:* `consulta e índice`  
  Para Distributed transactions, la arquitectura de Particionado y distribución registra intención, valida conflictos y confirma o compensa la unidad completa, garantizando un estado durable que satisface aislamiento e invariantes declarados.

- **Global uniqueness across partitions**  
  *Familia:* `tejido de eventos`  
  Global uniqueness across partitions gestiona Particionado y distribución de modo que elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, produciendo una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Partition pruning proofs**  
  *Familia:* `cola y consumidor`  
  A través de Partition pruning proofs en Particionado y distribución, el sistema elige responsables, propaga versión y reconcilia respuestas según quorum o reloj manteniendo una lectura o escritura cuyo alcance y frescura están cuantificados.


### 📑 Sección: Testing de datos (7 conceptos)

- **Constraint tests**  
  *Familia:* `espectro de verificación`  
  Constraint tests en Testing de datos: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Migration tests**  
  *Familia:* `validación y decisión`  
  En Testing de datos, Migration tests ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **Query result contracts**  
  *Familia:* `consulta e índice`  
  Query result contracts aplica este mecanismo en Testing de datos: evalúa precondiciones y combina restricciones antes de comprometer estado, con valor aceptado con garantía explícita o error localizado.

- **Concurrency tests**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Concurrency tests dentro de Testing de datos ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Production-like fixtures**  
  *Familia:* `validación y decisión`  
  Para Production-like fixtures, la arquitectura de Testing de datos ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Differential result-set testing**  
  *Familia:* `evidencia y latencia`  
  Differential result-set testing gestiona Testing de datos de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **Transaction anomaly tests**  
  *Familia:* `consulta e índice`  
  A través de Transaction anomaly tests en Testing de datos, el sistema ejecuta camino normal, límite y fallo mientras captura todos los efectos observables manteniendo evidencia repetible que distingue comportamiento correcto de una regresión.


### 📑 Sección: Seguridad (7 conceptos)

- **Least-privilege grants**  
  *Familia:* `análisis y emisión`  
  Least-privilege grants en Seguridad: analiza, expande, especializa y baja a una representación ejecutable, asegurando código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Row-level security**  
  *Familia:* `validación y decisión`  
  En Seguridad, Row-level security autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Column masking**  
  *Familia:* `espectro de verificación`  
  Column masking aplica este mecanismo en Seguridad: ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, con lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **SQL injection defenses**  
  *Familia:* `consulta e índice`  
  El mecanismo de SQL injection defenses dentro de Seguridad reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores y consolida conjunto de filas correcto acompañado por costo y orden conocidos.

- **Encryption at rest and transit**  
  *Familia:* `validación y decisión`  
  Para Encryption at rest and transit, la arquitectura de Seguridad autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Definer and invoker rights**  
  *Familia:* `comparativa técnica`  
  Definer and invoker rights gestiona Seguridad de modo que autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, produciendo decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Dynamic SQL escaping**  
  *Familia:* `consulta e índice`  
  A través de Dynamic SQL escaping en Seguridad, el sistema reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores manteniendo conjunto de filas correcto acompañado por costo y orden conocidos.


### 📑 Sección: Recuperación y continuidad (7 conceptos)

- **Point-in-time recovery**  
  *Familia:* `telar relacional`  
  Point-in-time recovery en Recuperación y continuidad: aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, asegurando servicio recuperado con pérdida y tiempo medidos.

- **Backup consistency**  
  *Familia:* `flujo de transformación`  
  En Recuperación y continuidad, Backup consistency aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro para entregar servicio recuperado con pérdida y tiempo medidos.

- **Replication failover**  
  *Familia:* `consulta e índice`  
  Replication failover aplica este mecanismo en Recuperación y continuidad: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, con una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Recovery objectives**  
  *Familia:* `telar relacional`  
  El mecanismo de Recovery objectives dentro de Recuperación y continuidad resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Restore drills**  
  *Familia:* `flujo de transformación`  
  Para Restore drills, la arquitectura de Recuperación y continuidad aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, garantizando servicio recuperado con pérdida y tiempo medidos.

- **Recovery-point validation**  
  *Familia:* `consulta e índice`  
  Recovery-point validation gestiona Recuperación y continuidad de modo que aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, produciendo servicio recuperado con pérdida y tiempo medidos.

- **Backup checksum verification**  
  *Familia:* `telar relacional`  
  A través de Backup checksum verification en Recuperación y continuidad, el sistema aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro manteniendo servicio recuperado con pérdida y tiempo medidos.


### 📑 Sección: Observabilidad y operación (8 conceptos)

- **Wait events**  
  *Familia:* `propagación de eventos`  
  Wait events en Observabilidad y operación: parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices, asegurando filas correctas y cambios durables bajo el aislamiento solicitado.

- **Slow query logging**  
  *Familia:* `consulta e índice`  
  En Observabilidad y operación, Slow query logging instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución para entregar señal que permite localizar componente, versión y duración del problema.

- **Connection saturation**  
  *Familia:* `evidencia y latencia`  
  Connection saturation aplica este mecanismo en Observabilidad y operación: parser, rewriter, optimizer y executor convierten la intención en operadores sobre páginas e índices, con filas correctas y cambios durables bajo el aislamiento solicitado.

- **Data growth forecasting**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Data growth forecasting dentro de Observabilidad y operación analiza, expande, especializa y baja a una representación ejecutable y consolida código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Online schema changes**  
  *Familia:* `validación y decisión`  
  Para Online schema changes, la arquitectura de Observabilidad y operación resuelve composición, restricciones y representación antes de aceptar la instancia, garantizando estructura válida cuyas operaciones permitidas están explícitas.

- **Wait-graph reconstruction**  
  *Familia:* `evidencia y latencia`  
  Wait-graph reconstruction gestiona Observabilidad y operación de modo que ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, produciendo lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Plan regression baselines**  
  *Familia:* `secuencia operativa`  
  A través de Plan regression baselines en Observabilidad y operación, el sistema estima cardinalidades, compara accesos y conserva alternativas sensibles a la distribución manteniendo plan ejecutable cuyo costo observado corresponde al conjunto de parámetros.

- **Deadlock graph retention**  
  *Familia:* `planificación de trabajo`  
  En el flujo operativo de Observabilidad y operación, Deadlock graph retention instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución para obtener señal que permite localizar componente, versión y duración del problema.




---
[← Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
