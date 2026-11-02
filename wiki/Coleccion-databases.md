# 📘 [DB] Bases de datos

> **Modelado, SQL, índices, concurrencia, distribución y backups.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `databases` |
| **Grupo Arquitectónico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `databases` |
| **Total de Conceptos** | **113 conceptos** |
| **Capítulos / Secciones** | **10 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/bases-datos)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/bases-datos-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (113)

### 📑 Sección: Fundamentos y modelado (11 conceptos)

- **Qué es una base de datos**  
  *Familia:* `anatomía del concepto`  
  Sistema que organiza, persiste y consulta información con reglas de consistencia.

- **DBMS**  
  *Familia:* `cola y consumidor`  
  Software que administra almacenamiento, consultas, transacciones, seguridad y recuperación.

- **Esquema**  
  *Familia:* `ecosistema coordinado`  
  Define estructuras, tipos, relaciones y restricciones esperadas.

- **Modelo conceptual, lógico y físico**  
  *Familia:* `evidencia y latencia`  
  Separa significado del negocio, estructura de datos e implementación de almacenamiento.

- **Entidades y atributos**  
  *Familia:* `consulta e índice`  
  Representan objetos con identidad y propiedades.

- **Relaciones**  
  *Familia:* `validación y decisión`  
  Modelan asociaciones uno a uno, uno a muchos y muchos a muchos.

- **Claves primarias**  
  *Familia:* `contratos coordinados`  
  Identifican cada fila de forma única y estable.

- **Claves foráneas**  
  *Familia:* `topología y tráfico`  
  Garantizan que una referencia apunte a una fila existente.

- **Normalización**  
  *Familia:* `diagnóstico operativo`  
  Reduce redundancia separando hechos que cambian de forma independiente.

- **Desnormalización**  
  *Familia:* `máquina de estados`  
  Duplica datos de forma deliberada para lecturas específicas y exige sincronización.

- **Tipos de datos**  
  *Familia:* `análisis y emisión`  
  Eligen representación, rango, precisión y operaciones válidas.


### 📑 Sección: SQL y operaciones relacionales (12 conceptos)

- **DDL**  
  *Familia:* `ida y vuelta`  
  Crea y modifica tablas, índices, constraints y otros objetos.

- **DML**  
  *Familia:* `contratos coordinados`  
  Inserta, actualiza y elimina filas.

- **SELECT**  
  *Familia:* `anatomía del concepto`  
  Proyecta columnas y filtra filas desde una o más relaciones.

- **WHERE**  
  *Familia:* `flujo de transformación`  
  Filtra filas antes de agrupación.

- **ORDER BY y LIMIT**  
  *Familia:* `planificación de trabajo`  
  Ordenan resultados y restringen la ventana devuelta.

- **INSERT**  
  *Familia:* `cola y consumidor`  
  Crea filas y puede devolver valores generados.

- **UPDATE**  
  *Familia:* `ciclo de vida`  
  Cambia columnas de filas seleccionadas por un predicado.

- **DELETE**  
  *Familia:* `máquina de estados`  
  Elimina filas respetando relaciones y reglas de cascada.

- **UPSERT**  
  *Familia:* `análisis y emisión`  
  Inserta o actualiza según una restricción de conflicto.

- **NULL**  
  *Familia:* `aislamiento sobre host`  
  Representa ausencia o desconocimiento y usa lógica de tres valores.

- **Expresiones y funciones**  
  *Familia:* `propagación de eventos`  
  Transforman columnas con operadores y funciones del motor.

- **CTEs**  
  *Familia:* `consulta e índice`  
  Nombran subconsultas para componer pasos legibles y, según el motor, recursivos.


### 📑 Sección: Joins, agregación y análisis (10 conceptos)

- **INNER JOIN**  
  *Familia:* `capas internas`  
  Conserva combinaciones que coinciden en ambos lados.

- **LEFT JOIN**  
  *Familia:* `memoria intermedia`  
  Conserva todas las filas izquierdas aunque no exista coincidencia.

- **Self join**  
  *Familia:* `superficie de aplicación`  
  Relaciona una tabla consigo misma para jerarquías o comparaciones.

- **Muchos a muchos**  
  *Familia:* `comparativa técnica`  
  Usa una tabla puente con dos claves foráneas y restricciones.

- **GROUP BY**  
  *Familia:* `propagación de eventos`  
  Agrupa filas para calcular agregados por clave.

- **Funciones agregadas**  
  *Familia:* `secuencia operativa`  
  Calculan COUNT, SUM, AVG, MIN y MAX sobre conjuntos.

- **HAVING**  
  *Familia:* `ciclo de vida`  
  Filtra grupos después de agregar.

- **Window functions**  
  *Familia:* `diagnóstico operativo`  
  Calculan valores sobre una ventana sin colapsar filas.

- **Subqueries**  
  *Familia:* `ecosistema coordinado`  
  Anidan consultas escalares, correlacionadas o de conjunto.

- **Set operations**  
  *Familia:* `árbol de recursos`  
  Combinan resultados compatibles mediante UNION, INTERSECT o EXCEPT.


### 📑 Sección: Integridad y reglas de datos (10 conceptos)

- **NOT NULL**  
  *Familia:* `contratos coordinados`  
  Impide ausencia cuando el atributo es obligatorio.

- **UNIQUE**  
  *Familia:* `planificación de trabajo`  
  Evita duplicados según una o varias columnas.

- **CHECK**  
  *Familia:* `validación y decisión`  
  Expresa invariantes locales mediante una condición booleana.

- **DEFAULT**  
  *Familia:* `tabla de estados`  
  Proporciona un valor cuando la columna se omite.

- **Referential actions**  
  *Familia:* `flujo de transformación`  
  Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres.

- **Constraints diferibles**  
  *Familia:* `configuración declarativa`  
  Posponen ciertas comprobaciones hasta el final de la transacción.

- **Dominios y enums**  
  *Familia:* `flujo de ejecución`  
  Centralizan conjuntos de valores o reglas reutilizables.

- **Triggers**  
  *Familia:* `máquina de estados`  
  Ejecutan lógica dentro del motor ante cambios de filas o statements.

- **Generated columns**  
  *Familia:* `ida y vuelta`  
  Calculan una columna desde otras según una expresión definida.

- **Auditoría de cambios**  
  *Familia:* `consulta e índice`  
  Registra quién, cuándo y qué cambió mediante tablas o logs especializados.


### 📑 Sección: Índices y optimización de consultas (12 conceptos)

- **Qué es un índice**  
  *Familia:* `jerarquía y dependencias`  
  Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura.

- **B-tree**  
  *Familia:* `capas internas`  
  Índice ordenado útil para igualdad, rangos y ordenación.

- **Hash index**  
  *Familia:* `tabla de estados`  
  Optimiza igualdad en motores que lo soportan, sin ordenar rangos.

- **Índices compuestos**  
  *Familia:* `consulta e índice`  
  Indexan varias columnas en un orden específico.

- **Índices parciales**  
  *Familia:* `evidencia y latencia`  
  Incluyen solo filas que cumplen un predicado.

- **Índices de expresión**  
  *Familia:* `validación y decisión`  
  Indexan el resultado de una función o expresión.

- **Covering index**  
  *Familia:* `acumulación de recursos`  
  Incluye columnas suficientes para responder sin visitar la tabla.

- **Selectividad**  
  *Familia:* `planificación de trabajo`  
  Mide cuánto reduce un predicado el conjunto de filas.

- **Estadísticas**  
  *Familia:* `superficie de aplicación`  
  Describen distribución y cardinalidad para que el planner estime costos.

- **Query planner**  
  *Familia:* `jerarquía y dependencias`  
  Compara alternativas de acceso, joins y orden según costos estimados.

- **EXPLAIN ANALYZE**  
  *Familia:* `topología y tráfico`  
  Ejecuta y compara estimaciones con tiempos y filas reales.

- **Sargabilidad**  
  *Familia:* `anatomía del concepto`  
  Escribe predicados que permitan usar un índice sin transformar la columna innecesariamente.


### 📑 Sección: Transacciones y concurrencia (13 conceptos)

- **ACID**  
  *Familia:* `acumulación de recursos`  
  Resume atomicidad, consistencia, aislamiento y durabilidad.

- **BEGIN, COMMIT y ROLLBACK**  
  *Familia:* `secuencia operativa`  
  Controlan una unidad explícita de trabajo.

- **Savepoints**  
  *Familia:* `topología y tráfico`  
  Permiten revertir una parte sin cancelar toda la transacción.

- **Aislamiento**  
  *Familia:* `configuración declarativa`  
  Define qué efectos de transacciones concurrentes puede observar una sesión.

- **Dirty read**  
  *Familia:* `cola y consumidor`  
  Una transacción observa cambios aún no confirmados.

- **Non-repeatable read**  
  *Familia:* `memoria intermedia`  
  La misma fila cambia entre dos lecturas de una transacción.

- **Phantom read**  
  *Familia:* `comparativa técnica`  
  Una consulta por rango devuelve filas nuevas o desaparecidas en otra lectura.

- **MVCC**  
  *Familia:* `capas internas`  
  Mantiene versiones para que lectores y escritores reduzcan bloqueos mutuos.

- **Locks**  
  *Familia:* `flujo de ejecución`  
  Protegen filas, tablas o recursos contra operaciones incompatibles.

- **Deadlocks**  
  *Familia:* `árbol de recursos`  
  Ocurren cuando transacciones esperan recursos en ciclo.

- **Optimistic concurrency**  
  *Familia:* `flujo de transformación`  
  Detecta versiones cambiadas al escribir en lugar de bloquear antes.

- **Lost update**  
  *Familia:* `análisis y emisión`  
  Dos escritores sobrescriben cambios porque leen la misma versión.

- **Transacciones distribuidas**  
  *Familia:* `diagnóstico operativo`  
  Coordinan cambios en múltiples recursos con costo y fallos adicionales.


### 📑 Sección: Evolución de esquema y acceso (10 conceptos)

- **Migraciones**  
  *Familia:* `máquina de estados`  
  Versionan cambios de esquema y datos en orden reproducible.

- **Expand and contract**  
  *Familia:* `planificación de trabajo`  
  Añade compatibilidad nueva antes de retirar la antigua.

- **Backfills**  
  *Familia:* `acumulación de recursos`  
  Rellenan datos existentes por lotes controlando locks y carga.

- **Compatibilidad hacia atrás**  
  *Familia:* `árbol de recursos`  
  Diseña cambios que clientes o procesos antiguos puedan seguir usando.

- **ORM**  
  *Familia:* `flujo de ejecución`  
  Mapea objetos y relaciones a operaciones de base de datos.

- **Unit of Work**  
  *Familia:* `comparativa técnica`  
  Agrupa cambios de entidades y los confirma juntos.

- **Lazy vs eager loading**  
  *Familia:* `tabla de estados`  
  Decide cuándo cargar relaciones y evita consultas sorpresa.

- **Query builder**  
  *Familia:* `análisis y emisión`  
  Compone SQL con parámetros manteniendo control explícito de la consulta.

- **Repositorios**  
  *Familia:* `flujo de transformación`  
  Ofrecen operaciones de persistencia orientadas al dominio.

- **Seed y fixtures**  
  *Familia:* `contratos coordinados`  
  Crean datos reproducibles para desarrollo, demo o pruebas.


### 📑 Sección: NoSQL y modelos especializados (12 conceptos)

- **Bases documentales**  
  *Familia:* `capas internas`  
  Guardan documentos con campos y arrays anidados.

- **Embedding vs references**  
  *Familia:* `comparativa técnica`  
  Elige entre datos juntos o referencias separadas.

- **Atomicidad por documento**  
  *Familia:* `topología y tráfico`  
  Aprovecha operaciones atómicas dentro de un documento agregado.

- **Aggregation pipeline**  
  *Familia:* `aislamiento sobre host`  
  Transforma documentos mediante etapas como match, group y project.

- **Key-value stores**  
  *Familia:* `anatomía del concepto`  
  Acceden a valores mediante una clave exacta y operaciones simples.

- **Redis data types**  
  *Familia:* `ida y vuelta`  
  Ofrece strings, hashes, sets, sorted sets, streams y más.

- **TTL y expiración**  
  *Familia:* `superficie de aplicación`  
  Elimina claves automáticamente después de una duración.

- **Pub/Sub**  
  *Familia:* `cola y consumidor`  
  Entrega mensajes a suscriptores conectados sin conservar historial duradero.

- **Streams**  
  *Familia:* `planificación de trabajo`  
  Conservan una secuencia ordenada de eventos y grupos de consumidores.

- **Bases de grafos**  
  *Familia:* `acumulación de recursos`  
  Modelan nodos y relaciones como ciudadanos de primera clase.

- **Series temporales**  
  *Familia:* `validación y decisión`  
  Optimizan eventos ordenados por tiempo, retención y agregación por ventanas.

- **Búsqueda full-text**  
  *Familia:* `flujo de transformación`  
  Usa índices invertidos, análisis lingüístico y ranking.


### 📑 Sección: Distribución, replicación y particionado (11 conceptos)

- **Replicación**  
  *Familia:* `configuración declarativa`  
  Mantiene copias de datos para disponibilidad o lecturas.

- **Primary-replica**  
  *Familia:* `tabla de estados`  
  Dirige escrituras a un líder y replica cambios a seguidores.

- **Synchronous vs asynchronous replication**  
  *Familia:* `jerarquía y dependencias`  
  Intercambia latencia de commit por garantías de copia.

- **Failover**  
  *Familia:* `máquina de estados`  
  Promueve una réplica cuando el líder falla.

- **Read replicas**  
  *Familia:* `flujo de ejecución`  
  Escalan lecturas y separan cargas analíticas del primario.

- **Sharding**  
  *Familia:* `ciclo de vida`  
  Divide filas o documentos entre nodos por una clave.

- **Hash vs range partitioning**  
  *Familia:* `comparativa técnica`  
  Distribuye uniformemente o conserva localidad por rango.

- **Rebalancing**  
  *Familia:* `acumulación de recursos`  
  Mueve particiones cuando cambia capacidad o distribución.

- **Consistent hashing**  
  *Familia:* `consulta e índice`  
  Reduce movimiento de claves al cambiar nodos.

- **CAP y particiones**  
  *Familia:* `validación y decisión`  
  Explica decisiones de consistencia y disponibilidad cuando la red divide nodos.

- **Consistencia de lectura**  
  *Familia:* `ida y vuelta`  
  Define strong, eventual, monotonic o read-your-writes.


### 📑 Sección: Operación, respaldo y seguridad (12 conceptos)

- **Backups lógicos y físicos**  
  *Familia:* `secuencia operativa`  
  Copian objetos o archivos del motor con propiedades distintas.

- **RPO y RTO**  
  *Familia:* `cola y consumidor`  
  Definen pérdida máxima de datos y tiempo máximo de recuperación.

- **Point-in-time recovery**  
  *Familia:* `propagación de eventos`  
  Restaura un backup y reproduce logs hasta un instante.

- **Alta disponibilidad**  
  *Familia:* `topología y tráfico`  
  Combina redundancia, failover y automatización para reducir downtime.

- **Monitoreo de consultas**  
  *Familia:* `jerarquía y dependencias`  
  Registra latencia, frecuencia, filas y planes costosos.

- **Pool de conexiones**  
  *Familia:* `contratos coordinados`  
  Limita sesiones concurrentes y reutiliza conexiones.

- **Vacuum y mantenimiento**  
  *Familia:* `superficie de aplicación`  
  Recupera espacio, actualiza metadatos o reorganiza estructuras según el motor.

- **Cifrado en tránsito y reposo**  
  *Familia:* `capas internas`  
  Protege datos durante transporte y almacenamiento.

- **Usuarios y privilegios**  
  *Familia:* `planificación de trabajo`  
  Aplica mínimo privilegio mediante roles y grants.

- **Row-level security**  
  *Familia:* `acumulación de recursos`  
  Filtra filas según políticas evaluadas por el motor.

- **Retención y borrado**  
  *Familia:* `flujo de ejecución`  
  Define cuánto tiempo conservar datos y cómo eliminar copias derivadas.

- **Capacity planning**  
  *Familia:* `aislamiento sobre host`  
  Proyecta crecimiento de almacenamiento, IOPS, memoria, conexiones y throughput.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html)** (`tutorial` | Nivel: `beginner`): 
- **[MIT OpenCourseWare: Database Systems](https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/)** (`course` | Nivel: `intermediate`): 
- **[CMU 15-445/645: Intro to Database Systems](https://15445.courses.cs.cmu.edu/)** (`course` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
