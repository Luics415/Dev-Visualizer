# NoSQL (NoSQL)

> **Documentos, clave-valor, columnas, grafos, partición, replicación y consistencia.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `nosql` |
| **Grupo Arquitectonico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `databases` |
| **Total de Conceptos** | **123 conceptos** |
| **Capitulos / Secciones** | **19 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/nosql)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/nosql-en-accion)


## Estudio de Caso Practico: Repartir un flujo de telemetría

> **Caso integrado de NoSQL:** Eventos de dispositivos se particionan y replican; una clave temporal concentra todo el tráfico y el sistema recupera distribución sin perder orden por dispositivo.  
> El diseño final declara clave, consultas soportadas, consistencia, retención, reparación y procedimiento de expansión.

### Fases de Ejecucion:
1. **Definir consultas** (Repartir un flujo de telemetría: etapa 1 de 5): `get(device_id, from, to)` -> Contrato de lectura. *La etapa conserva un contrato explícito para que el siguiente paso de NoSQL no dependa de supuestos ocultos.*
2. **Escribir eventos** (Repartir un flujo de telemetría: etapa 2 de 5): `partition = hash(device_id)` -> Ingesta distribuida. *La etapa conserva un contrato explícito para que el siguiente paso de NoSQL no dependa de supuestos ocultos.*
3. **Detectar partición caliente** (Repartir un flujo de telemetría: etapa 3 de 5): `partition = current_date` -> Latencia y throttling. *El caso hace visible el fallo de NoSQL; no continúa como si la evidencia fuera válida.*
4. **Rediseñar clave** (Repartir un flujo de telemetría: etapa 4 de 5): `partition = hash(device_id, day_bucket)` -> Capacidad recuperada. *La recuperación de NoSQL corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Verificar consistencia** (Repartir un flujo de telemetría: etapa 5 de 5): `read(CL=QUORUM); repair();` -> Modelo operable. *La etapa conserva un contrato explícito para que el siguiente paso de NoSQL no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (123)

### Seccion: Familias de modelos (5 conceptos)

- **Clave-valor**  
  *Familia:* `mapa de memoria`  
  Clave-valor conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Documentos**  
  *Familia:* `consulta e índice`  
  En Documentos, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.

- **Columnas anchas**  
  *Familia:* `telar relacional`  
  La función de Columnas anchas parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.

- **Grafos**  
  *Familia:* `topología y tráfico`  
  Grafos estructura datos identificables junto con esquema, restricciones y procedencia en el sistema: valida, representa y recorre cada valor preservando relaciones, garantizando información consultable con integridad y significado estables.

- **Series temporales**  
  *Familia:* `consulta e índice`  
  El recorrido de Series temporales toma datos identificables junto con esquema, restricciones y procedencia. Posteriormente valida, representa y recorre cada valor preservando relaciones para validar información consultable con integridad y significado estables.


### Seccion: Distribución (5 conceptos)

- **Particionado**  
  *Familia:* `tejido de eventos`  
  En Particionado, un mensaje versionado, un destino y límites de tiempo ingresa al flujo donde serializa, transporta y valida el intercambio a través de una frontera remota para consolidar una respuesta correlacionada o un estado convergente verificable.

- **Replicación**  
  *Familia:* `topología y tráfico`  
  La función de Replicación parte de un mensaje versionado, un destino y límites de tiempo. Su ejecución serializa, transporta y valida el intercambio a través de una frontera remota y produce una respuesta correlacionada o un estado convergente verificable.

- **Consistent hashing**  
  *Familia:* `tabla de estados`  
  Consistent hashing estructura un mensaje versionado, un destino y límites de tiempo en el sistema: serializa, transporta y valida el intercambio a través de una frontera remota, garantizando una respuesta correlacionada o un estado convergente verificable.

- **Quorums**  
  *Familia:* `consulta e índice`  
  El recorrido de Quorums toma un mensaje versionado, un destino y límites de tiempo. Posteriormente serializa, transporta y valida el intercambio a través de una frontera remota para validar una respuesta correlacionada o un estado convergente verificable.

- **Consistencia eventual**  
  *Familia:* `propagación de eventos`  
  Consistencia eventual procesa un mensaje versionado, un destino y límites de tiempo: serializa, transporta y valida el intercambio a través de una frontera remota para entregar una respuesta correlacionada o un estado convergente verificable.


### Seccion: Modelado por acceso (5 conceptos)

- **Agregados**  
  *Familia:* `telar relacional`  
  Agregados conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Desnormalización**  
  *Familia:* `consulta e índice`  
  En Desnormalización, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Índices**  
  *Familia:* `memoria intermedia`  
  La función de Índices parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.

- **TTL**  
  *Familia:* `telar relacional`  
  TTL estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Change streams**  
  *Familia:* `consulta e índice`  
  El recorrido de Change streams toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Diagnóstico (5 conceptos)

- **Hot partitions**  
  *Familia:* `tejido de eventos`  
  Hot partitions conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Replica lag**  
  *Familia:* `evidencia y latencia`  
  En Replica lag, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Conflictos**  
  *Familia:* `secuencia operativa`  
  La función de Conflictos parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Consultas lentas**  
  *Familia:* `consulta e índice`  
  Consultas lentas estructura datos identificables junto con esquema, restricciones y procedencia en el sistema: valida, representa y recorre cada valor preservando relaciones, garantizando información consultable con integridad y significado estables.

- **Capacidad**  
  *Familia:* `capas internas`  
  El recorrido de Capacidad toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### Seccion: Producción (5 conceptos)

- **Durabilidad**  
  *Familia:* `pasaporte del artefacto`  
  El mecanismo de Durabilidad recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Backups**  
  *Familia:* `secuencia operativa`  
  Backups conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Seguridad**  
  *Familia:* `validación y decisión`  
  En Seguridad, una identidad, un recurso protegido y una política explícita ingresa al flujo donde evalúa confianza, privilegios y datos antes de autorizar cada efecto para consolidar una decisión mínima y trazable que no revela secretos.

- **Migraciones**  
  *Familia:* `jerarquía y dependencias`  
  La función de Migraciones parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Selección de motor**  
  *Familia:* `pasaporte del artefacto`  
  Selección de motor estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Teoría de sistemas distribuidos (6 conceptos)

- **CAP con particiones reales**  
  *Familia:* `flujo de interfaz`  
  CAP con particiones reales en Teoría de sistemas distribuidos: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, asegurando una lectura o escritura cuyo alcance y frescura están cuantificados.

- **PACELC**  
  *Familia:* `capas internas`  
  En Teoría de sistemas distribuidos, PACELC elige responsables, propaga versión y reconcilia respuestas según quorum o reloj para entregar una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Linearizability**  
  *Familia:* `superficie de aplicación`  
  Linearizability aplica este mecanismo en Teoría de sistemas distribuidos: router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, con respuesta con frescura, alcance y durabilidad conocidas.

- **Causal consistency**  
  *Familia:* `flujo de interfaz`  
  El mecanismo de Causal consistency dentro de Teoría de sistemas distribuidos router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor y consolida respuesta con frescura, alcance y durabilidad conocidas.

- **Read-your-writes**  
  *Familia:* `ciclo de vida`  
  Para Read-your-writes, la arquitectura de Teoría de sistemas distribuidos router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, garantizando respuesta con frescura, alcance y durabilidad conocidas.

- **Dotted version vectors**  
  *Familia:* `cuadrícula paralela`  
  Dotted version vectors gestiona Teoría de sistemas distribuidos de modo que router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, produciendo respuesta con frescura, alcance y durabilidad conocidas.


### Seccion: Motores clave-valor (7 conceptos)

- **In-memory keyspace**  
  *Familia:* `memoria intermedia`  
  In-memory keyspace en Motores clave-valor: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, asegurando reutilización medible sin cambiar el resultado funcional.

- **Persistence logs**  
  *Familia:* `evidencia y latencia`  
  En Motores clave-valor, Persistence logs router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor para entregar respuesta con frescura, alcance y durabilidad conocidas.

- **Eviction policies**  
  *Familia:* `flujo de transformación`  
  Eviction policies aplica este mecanismo en Motores clave-valor: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, con reutilización medible sin cambiar el resultado funcional.

- **Atomic commands**  
  *Familia:* `secuencia operativa`  
  El mecanismo de Atomic commands dentro de Motores clave-valor router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor y consolida respuesta con frescura, alcance y durabilidad conocidas.

- **Distributed locks y límites**  
  *Familia:* `planificación de trabajo`  
  Para Distributed locks y límites, la arquitectura de Motores clave-valor adquiere o señaliza sincronización, publica cambios y libera en un orden definido, garantizando estado visible sin carreras y progreso dentro del límite acordado.

- **Compare-and-set tokens**  
  *Familia:* `comparativa técnica`  
  Compare-and-set tokens gestiona Motores clave-valor de modo que tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, produciendo árbol, match o diagnóstico consumible por la siguiente etapa.

- **Lease expiration semantics**  
  *Familia:* `evidencia y latencia`  
  A través de Lease expiration semantics en Motores clave-valor, el sistema router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor manteniendo respuesta con frescura, alcance y durabilidad conocidas.


### Seccion: Bases documentales (7 conceptos)

- **Document boundaries**  
  *Familia:* `configuración declarativa`  
  Document boundaries en Bases documentales: router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, asegurando respuesta con frescura, alcance y durabilidad conocidas.

- **Schema validation**  
  *Familia:* `validación y decisión`  
  En Bases documentales, Schema validation resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Nested indexing**  
  *Familia:* `consulta e índice`  
  Nested indexing aplica este mecanismo en Bases documentales: router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, con respuesta con frescura, alcance y durabilidad conocidas.

- **Aggregation pipelines**  
  *Familia:* `workflow y decisiones`  
  El mecanismo de Aggregation pipelines dentro de Bases documentales router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor y consolida respuesta con frescura, alcance y durabilidad conocidas.

- **Atomic document updates**  
  *Familia:* `flujo de interfaz`  
  Para Atomic document updates, la arquitectura de Bases documentales router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, garantizando respuesta con frescura, alcance y durabilidad conocidas.

- **Document schema enforcement**  
  *Familia:* `validación y decisión`  
  Document schema enforcement gestiona Bases documentales de modo que resuelve composición, restricciones y representación antes de aceptar la instancia, produciendo estructura válida cuyas operaciones permitidas están explícitas.

- **Array-index explosion**  
  *Familia:* `tabla de estados`  
  A través de Array-index explosion en Bases documentales, el sistema router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor manteniendo respuesta con frescura, alcance y durabilidad conocidas.


### Seccion: Columnas anchas (8 conceptos)

- **Partition keys**  
  *Familia:* `tejido de eventos`  
  Partition keys en Columnas anchas: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, asegurando una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Clustering columns**  
  *Familia:* `cuadrícula paralela`  
  En Columnas anchas, Clustering columns ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida para entregar lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **LSM trees**  
  *Familia:* `jerarquía y dependencias`  
  LSM trees aplica este mecanismo en Columnas anchas: ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, con lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **SSTables**  
  *Familia:* `consulta e índice`  
  El mecanismo de SSTables dentro de Columnas anchas ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida y consolida lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Compaction strategies**  
  *Familia:* `telar relacional`  
  Para Compaction strategies, la arquitectura de Columnas anchas ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, garantizando lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Tombstone compaction**  
  *Familia:* `flujo de interfaz`  
  Tombstone compaction gestiona Columnas anchas de modo que instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, produciendo señal que permite localizar componente, versión y duración del problema.

- **Partition-key cardinality**  
  *Familia:* `tejido de eventos`  
  A través de Partition-key cardinality en Columnas anchas, el sistema elige responsables, propaga versión y reconcilia respuestas según quorum o reloj manteniendo una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Repair and compaction interaction**  
  *Familia:* `evidencia y latencia`  
  En el flujo operativo de Columnas anchas, Repair and compaction interaction elige responsables, propaga versión y reconcilia respuestas según quorum o reloj para obtener una lectura o escritura cuyo alcance y frescura están cuantificados.


### Seccion: Bases de grafos (6 conceptos)

- **Property graph**  
  *Familia:* `consulta e índice`  
  Property graph en Bases de grafos: ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, asegurando lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Graph traversals**  
  *Familia:* `pasaporte del artefacto`  
  En Bases de grafos, Graph traversals ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida para entregar lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Cypher patterns**  
  *Familia:* `evidencia y latencia`  
  Cypher patterns aplica este mecanismo en Bases de grafos: router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, con respuesta con frescura, alcance y durabilidad conocidas.

- **Graph indexes**  
  *Familia:* `consulta e índice`  
  El mecanismo de Graph indexes dentro de Bases de grafos reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores y consolida conjunto de filas correcto acompañado por costo y orden conocidos.

- **Supernodes**  
  *Familia:* `workflow y decisiones`  
  Para Supernodes, la arquitectura de Bases de grafos router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, garantizando respuesta con frescura, alcance y durabilidad conocidas.

- **Traversal fan-out**  
  *Familia:* `configuración declarativa`  
  Traversal fan-out gestiona Bases de grafos de modo que router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, produciendo respuesta con frescura, alcance y durabilidad conocidas.


### Seccion: Series temporales y búsqueda (7 conceptos)

- **Time bucketing**  
  *Familia:* `jerarquía y dependencias`  
  Time bucketing en Series temporales y búsqueda: router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, asegurando respuesta con frescura, alcance y durabilidad conocidas.

- **Downsampling**  
  *Familia:* `pasaporte del artefacto`  
  En Series temporales y búsqueda, Downsampling router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor para entregar respuesta con frescura, alcance y durabilidad conocidas.

- **Inverted indexes**  
  *Familia:* `consulta e índice`  
  Inverted indexes aplica este mecanismo en Series temporales y búsqueda: reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, con conjunto de filas correcto acompañado por costo y orden conocidos.

- **Relevance scoring**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Relevance scoring dentro de Series temporales y búsqueda router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor y consolida respuesta con frescura, alcance y durabilidad conocidas.

- **Retention tiers**  
  *Familia:* `flujo de interfaz`  
  Para Retention tiers, la arquitectura de Series temporales y búsqueda router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, garantizando respuesta con frescura, alcance y durabilidad conocidas.

- **Inverted-index segment merges**  
  *Familia:* `secuencia operativa`  
  Inverted-index segment merges gestiona Series temporales y búsqueda de modo que ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, produciendo lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Time-bucket sizing**  
  *Familia:* `consulta e índice`  
  A través de Time-bucket sizing en Series temporales y búsqueda, el sistema ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida manteniendo lectura predecible y almacenamiento recuperable dentro del presupuesto.


### Seccion: Replicación interna (7 conceptos)

- **Leader-follower**  
  *Familia:* `topología y tráfico`  
  Leader-follower en Replicación interna: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, asegurando una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Leaderless replication**  
  *Familia:* `pasaporte del artefacto`  
  En Replicación interna, Leaderless replication elige responsables, propaga versión y reconcilia respuestas según quorum o reloj para entregar una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Vector clocks**  
  *Familia:* `cuadrícula paralela`  
  Vector clocks aplica este mecanismo en Replicación interna: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, con una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Read repair**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Read repair dentro de Replicación interna elige responsables, propaga versión y reconcilia respuestas según quorum o reloj y consolida una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Anti-entropy**  
  *Familia:* `flujo de interfaz`  
  Para Anti-entropy, la arquitectura de Replicación interna elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, garantizando una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Hinted handoff**  
  *Familia:* `tejido de eventos`  
  Hinted handoff gestiona Replicación interna de modo que elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, produciendo una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Foreground read repair**  
  *Familia:* `topología y tráfico`  
  A través de Foreground read repair en Replicación interna, el sistema elige responsables, propaga versión y reconcilia respuestas según quorum o reloj manteniendo una lectura o escritura cuyo alcance y frescura están cuantificados.


### Seccion: Transacciones no relacionales (7 conceptos)

- **Single-partition transactions**  
  *Familia:* `consulta e índice`  
  Single-partition transactions en Transacciones no relacionales: elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, asegurando una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Multi-document transactions**  
  *Familia:* `jerarquía y dependencias`  
  En Transacciones no relacionales, Multi-document transactions registra intención, valida conflictos y confirma o compensa la unidad completa para entregar un estado durable que satisface aislamiento e invariantes declarados.

- **Compare-and-swap**  
  *Familia:* `comparativa técnica`  
  Compare-and-swap aplica este mecanismo en Transacciones no relacionales: reserva, mapea o mueve memoria y registra quién debe reclamarla, con datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Sagas**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Sagas dentro de Transacciones no relacionales registra intención, valida conflictos y confirma o compensa la unidad completa y consolida un estado durable que satisface aislamiento e invariantes declarados.

- **Idempotency records**  
  *Familia:* `análisis y emisión`  
  Para Idempotency records, la arquitectura de Transacciones no relacionales registra intención, valida conflictos y confirma o compensa la unidad completa, garantizando un estado durable que satisface aislamiento e invariantes declarados.

- **Saga compensation**  
  *Familia:* `secuencia operativa`  
  Saga compensation gestiona Transacciones no relacionales de modo que registra intención, valida conflictos y confirma o compensa la unidad completa, produciendo un estado durable que satisface aislamiento e invariantes declarados.

- **Conditional-write retries**  
  *Familia:* `tabla de estados`  
  A través de Conditional-write retries en Transacciones no relacionales, el sistema registra intención, valida conflictos y confirma o compensa la unidad completa manteniendo un estado durable que satisface aislamiento e invariantes declarados.


### Seccion: Evolución del modelo (7 conceptos)

- **Versioned documents**  
  *Familia:* `flujo de transformación`  
  Versioned documents en Evolución del modelo: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Dual reads and writes**  
  *Familia:* `jerarquía y dependencias`  
  En Evolución del modelo, Dual reads and writes resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Backfills online**  
  *Familia:* `despacho de runtime`  
  Backfills online aplica este mecanismo en Evolución del modelo: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **Index rebuilds**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Index rebuilds dentro de Evolución del modelo resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Tombstone management**  
  *Familia:* `flujo de interfaz`  
  Para Tombstone management, la arquitectura de Evolución del modelo instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, garantizando señal que permite localizar componente, versión y duración del problema.

- **Dual-write migrations**  
  *Familia:* `consulta e índice`  
  Dual-write migrations gestiona Evolución del modelo de modo que promueve por etapas, observa señales y conserva una ruta de reversión, produciendo versión activa con tráfico y datos dentro del contrato.

- **Backfill checkpoints**  
  *Familia:* `flujo de transformación`  
  A través de Backfill checkpoints en Evolución del modelo, el sistema resuelve composición, restricciones y representación antes de aceptar la instancia manteniendo estructura válida cuyas operaciones permitidas están explícitas.


### Seccion: Testing distribuido (7 conceptos)

- **Fault injection**  
  *Familia:* `espectro de verificación`  
  Fault injection en Testing distribuido: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Clock skew simulation**  
  *Familia:* `planificación de trabajo`  
  En Testing distribuido, Clock skew simulation ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **Network partition tests**  
  *Familia:* `topología y tráfico`  
  Network partition tests aplica este mecanismo en Testing distribuido: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **Consistency verification**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Consistency verification dentro de Testing distribuido ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Capacity benchmarks**  
  *Familia:* `comparativa técnica`  
  Para Capacity benchmarks, la arquitectura de Testing distribuido ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Jepsen history analysis**  
  *Familia:* `validación y decisión`  
  Jepsen history analysis gestiona Testing distribuido de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **Nemesis fault profiles**  
  *Familia:* `evidencia y latencia`  
  A través de Nemesis fault profiles en Testing distribuido, el sistema instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución manteniendo señal que permite localizar componente, versión y duración del problema.


### Seccion: Seguridad (7 conceptos)

- **Network isolation**  
  *Familia:* `aislamiento sobre host`  
  Network isolation en Seguridad: registra intención, valida conflictos y confirma o compensa la unidad completa, asegurando un estado durable que satisface aislamiento e invariantes declarados.

- **Role-based access**  
  *Familia:* `flujo de transformación`  
  En Seguridad, Role-based access resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Field-level encryption**  
  *Familia:* `validación y decisión`  
  Field-level encryption aplica este mecanismo en Seguridad: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, con decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Audit trails**  
  *Familia:* `comparativa técnica`  
  El mecanismo de Audit trails dentro de Seguridad autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima y consolida decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Backup credential separation**  
  *Familia:* `secuencia operativa`  
  Para Backup credential separation, la arquitectura de Seguridad autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Tenant partition keys**  
  *Familia:* `tejido de eventos`  
  Tenant partition keys gestiona Seguridad de modo que elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, produciendo una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Encrypted-field query limits**  
  *Familia:* `consulta e índice`  
  A través de Encrypted-field query limits en Seguridad, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### Seccion: Rendimiento y capacidad (7 conceptos)

- **Working set**  
  *Familia:* `evidencia y latencia`  
  Working set en Rendimiento y capacidad: mide cuello de botella, cambia una variable y repite con calentamiento suficiente, asegurando mejora atribuible que conserva corrección y percentiles importantes.

- **Write amplification**  
  *Familia:* `secuencia operativa`  
  En Rendimiento y capacidad, Write amplification mide cuello de botella, cambia una variable y repite con calentamiento suficiente para entregar mejora atribuible que conserva corrección y percentiles importantes.

- **Cache hit ratio**  
  *Familia:* `memoria intermedia`  
  Cache hit ratio aplica este mecanismo en Rendimiento y capacidad: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, con reutilización medible sin cambiar el resultado funcional.

- **Shard rebalancing**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Shard rebalancing dentro de Rendimiento y capacidad elige responsables, propaga versión y reconcilia respuestas según quorum o reloj y consolida una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Tail latency**  
  *Familia:* `secuencia operativa`  
  Para Tail latency, la arquitectura de Rendimiento y capacidad mide cuello de botella, cambia una variable y repite con calentamiento suficiente, garantizando mejora atribuible que conserva corrección y percentiles importantes.

- **Hotspot heatmaps**  
  *Familia:* `tabla de estados`  
  Hotspot heatmaps gestiona Rendimiento y capacidad de modo que elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, produciendo una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Compaction debt**  
  *Familia:* `evidencia y latencia`  
  A través de Compaction debt en Rendimiento y capacidad, el sistema ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida manteniendo lectura predecible y almacenamiento recuperable dentro del presupuesto.


### Seccion: Integración de datos (7 conceptos)

- **Change data capture**  
  *Familia:* `secuencia operativa`  
  Change data capture en Integración de datos: tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, asegurando árbol, match o diagnóstico consumible por la siguiente etapa.

- **Connectors**  
  *Familia:* `pasaporte del artefacto`  
  En Integración de datos, Connectors router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor para entregar respuesta con frescura, alcance y durabilidad conocidas.

- **Materialized views**  
  *Familia:* `consulta e índice`  
  Materialized views aplica este mecanismo en Integración de datos: mide, compone, renderiza y actualiza solo las dependencias invalidadas, con interfaz navegable cuyo estado visual y semántico coinciden.

- **Search synchronization**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Search synchronization dentro de Integración de datos router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor y consolida respuesta con frescura, alcance y durabilidad conocidas.

- **Polyglot persistence**  
  *Familia:* `telar relacional`  
  Para Polyglot persistence, la arquitectura de Integración de datos router y réplicas ubican, aplican y reconcilian el agregado según el modelo del motor, garantizando respuesta con frescura, alcance y durabilidad conocidas.

- **Change-data-capture ordering**  
  *Familia:* `evidencia y latencia`  
  Change-data-capture ordering gestiona Integración de datos de modo que tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, produciendo árbol, match o diagnóstico consumible por la siguiente etapa.

- **Connector offset recovery**  
  *Familia:* `máquina de estados`  
  A través de Connector offset recovery en Integración de datos, el sistema anexa, publica y proyecta en orden conservando checkpoint del consumidor manteniendo vista reconstruible y consumidor capaz de reanudar sin perder hechos.


### Seccion: Operación y recuperación (8 conceptos)

- **Rolling maintenance**  
  *Familia:* `ida y vuelta`  
  Rolling maintenance en Operación y recuperación: aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, asegurando servicio recuperado con pérdida y tiempo medidos.

- **Cross-region replication**  
  *Familia:* `pasaporte del artefacto`  
  En Operación y recuperación, Cross-region replication elige responsables, propaga versión y reconcilia respuestas según quorum o reloj para entregar una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Disaster recovery**  
  *Familia:* `análisis y emisión`  
  Disaster recovery aplica este mecanismo en Operación y recuperación: analiza, expande, especializa y baja a una representación ejecutable, con código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Consistency-aware monitoring**  
  *Familia:* `flujo de interfaz`  
  El mecanismo de Consistency-aware monitoring dentro de Operación y recuperación instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución y consolida señal que permite localizar componente, versión y duración del problema.

- **Safe decommissioning**  
  *Familia:* `ida y vuelta`  
  Para Safe decommissioning, la arquitectura de Operación y recuperación aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, garantizando servicio recuperado con pérdida y tiempo medidos.

- **Anti-entropy audits**  
  *Familia:* `configuración declarativa`  
  Anti-entropy audits gestiona Operación y recuperación de modo que elige responsables, propaga versión y reconcilia respuestas según quorum o reloj, produciendo una lectura o escritura cuyo alcance y frescura están cuantificados.

- **Restore into an isolated cluster**  
  *Familia:* `secuencia operativa`  
  A través de Restore into an isolated cluster en Operación y recuperación, el sistema aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro manteniendo servicio recuperado con pérdida y tiempo medidos.

- **Recovery-point verification**  
  *Familia:* `máquina de estados`  
  En el flujo operativo de Operación y recuperación, Recovery-point verification aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro para obtener servicio recuperado con pérdida y tiempo medidos.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
