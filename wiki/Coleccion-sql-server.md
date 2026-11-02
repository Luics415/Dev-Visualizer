# 📘 [SQL] Microsoft SQL Server

> **T-SQL, almacenamiento, optimizador, concurrencia, seguridad, operación y alta disponibilidad.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `sql-server` |
| **Grupo Arquitectónico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `sql-server` |
| **Total de Conceptos** | **120 conceptos** |
| **Capítulos / Secciones** | **24 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/sql-server)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/sql-server-en-accion)**


## 🔬 Caso Práctico en Acción: Microsoft SQL Server en acción

> **Caso integrado · Reserva de inventario sin ventas duplicadas:** Una API confirma una orden contra inventario compartido. SQL Server valida identidad y esquema, reserva unidades de forma atómica, registra el movimiento y publica una respuesta durable. La concurrencia provoca un deadlock y una regresión de plan; el sistema diagnostica ambos con evidencia y se recupera sin duplicar la operación.  
> El mismo flujo conecta modelado, constraints, T-SQL parametrizado, transacciones, locks, row versioning, transaction log, índices, Query Store, seguridad, backup y failover. Cada repetición termina comprobando que reservado, vendido y disponible conservan una sola verdad.

### Fases de Ejecución:
1. **Definir la invariante** (La corrección antes que el código): `available >= 0 AND reserved = SUM(open_lines)` → contrato verificable. *La transacción se diseña alrededor de una invariante observable, no alrededor de una secuencia casual de pantallas.*
2. **Construir el esquema** (Relaciones y constraints protegen el dominio): `Stock(Sku PK, Available CHECK >= 0) · Orders · Ledger` → estado representable. *El motor impide duplicados e inventario negativo incluso cuando otro cliente omite una validación.*
3. **Autenticar el workload** (Identidad mínima y canal cifrado): `TLS + login → user → role checkout_writer` → frontera autorizada. *La aplicación no recibe db_owner ni credenciales personales; su permiso expresa exactamente la operación permitida.*
4. **Enlazar parámetros** (Los valores no se convierten en código): `EXEC ReserveStock @request_id, @sku, @quantity` → solicitud segura. *Parametrizar reduce inyección y conversiones inesperadas, pero los constraints aún son la autoridad final.*
5. **Abrir la unidad de trabajo** (Todo o nada, durante poco tiempo): `SET XACT_ABORT ON; BEGIN TRAN` → transacción delimitada. *La unidad incluye solo lecturas y escrituras necesarias para conservar la invariante.*
6. **Reservar atómicamente** (Una escritura condicional decide): `UPDATE Stock SET Available -= @q WHERE Sku=@sku AND Available>=@q` → stock adjudicado una vez. *Leer y después escribir abriría una carrera; el predicado y la modificación forman una sola operación protegida.*
7. **Registrar la evidencia** (Orden y ledger nacen juntos): `INSERT Orders ...; INSERT Ledger ... OUTPUT inserted.Id` → historial trazable. *El ledger conserva por qué cambió el inventario y la clave idempotente vincula cualquier reintento con el mismo efecto.*
8. **Confirmar y endurecer** (El log antecede a las páginas): `COMMIT TRAN` → orden durable. *Write-ahead logging permite confirmar sin exigir que cada página de datos ya haya llegado a disco.*
9. **Servir lecturas consistentes** (Snapshot evita bloquear el seguimiento): `READ_COMMITTED_SNAPSHOT + SELECT order status` → estado legible sin espera innecesaria. *Row versioning cambia el modo de leer; no elimina conflictos entre dos escrituras sobre el mismo inventario.*
10. **Detectar el deadlock** (Dos órdenes toman recursos en orden inverso): `T1: Stock A → B · T2: Stock B → A` → ciclo roto con una solicitud fallida. *SQL Server resuelve el ciclo, pero la aplicación todavía debe reconocer el error y conservar la intención del usuario.*
11. **Reordenar y reintentar** (Orden estable e idempotencia): `ORDER BY Sku; retry error 1205 with request_id` → concurrencia recuperada. *Un orden global reduce el ciclo y la clave idempotente hace seguro repetir después del rollback.*
12. **Encontrar la regresión** (La distribución cambia y el plan deja de servir): `query_id 418 · estimate 12 · actual 240000` → causa de rendimiento demostrada. *El síntoma se explica con filas, waits y plan real; no se agrega un índice hasta saber qué cambió.*
13. **Estabilizar el plan** (Mitigación medida y corrección durable): `UPDATE STATISTICS; compare; Query Store hint if needed` → consulta recuperada. *Query Store permite contener la regresión mientras estadísticas, consulta e índice reciben una corrección revisable.*
14. **Probar recuperación y failover** (Durabilidad también se ensaya): `restore chain → CHECKDB → AG planned failover` → continuidad demostrada. *Un backup no cuenta como estrategia hasta restaurarlo y comparar el resultado con los objetivos acordados.*
15. **Cerrar el ciclo operativo** (Métricas, auditoría e invariante final): `accepted + rejected + retried = requests` → servicio comprobable y repetible. *El loop termina con una verdad contable y evidencia de operación; la siguiente animación comienza desde un estado válido, no desde elementos opacos.*


---

## 📚 Desglose Exhaustivo de Conceptos (120)

### 📑 Sección: Producto, edición y ecosistema (5 conceptos)

- **Database Engine**  
  *Familia:* `consulta e índice`  
  Identifica el servicio que procesa consultas, persiste bases de datos y aplica transacciones, seguridad y recuperación.

- **SQL Server 2025 y versión 17.x**  
  *Familia:* `jerarquía y dependencias`  
  Relaciona versión de producto, build, actualización acumulativa y documentación sin asumir que todas las instancias tienen las mismas capacidades.

- **Ediciones y licenciamiento**  
  *Familia:* `evidencia y latencia`  
  Compara Developer, Express, Standard y Enterprise por derechos de uso, límites y funciones antes de diseñar una dependencia.

- **T-SQL, SSMS y herramientas**  
  *Familia:* `consulta e índice`  
  Separa el lenguaje ejecutado por el motor de clientes vigentes como SQL Server Management Studio, sqlcmd y drivers, conservando Azure Data Studio solo como contexto histórico de migración.

- **SQL Server, Azure SQL y Fabric**  
  *Familia:* `jerarquía y dependencias`  
  Distingue producto instalable, servicios administrados y superficies analíticas para no prometer portabilidad perfecta entre destinos.


### 📑 Sección: Instalación, instancia y configuración (5 conceptos)

- **Instancia predeterminada y con nombre**  
  *Familia:* `topología y tráfico`  
  Comprende que una instalación puede hospedar varias instancias aisladas con servicios, puertos y configuración propios.

- **Componentes y cuentas de servicio**  
  *Familia:* `constelación de mecanismos`  
  Instala solo capacidades necesarias y asigna identidades con permisos mínimos a Database Engine, Agent y servicios auxiliares.

- **Conectividad y protocolos**  
  *Familia:* `análisis y emisión`  
  Configura TCP, puerto, DNS, firewall y cifrado sin depender de descubrimiento implícito o puertos abiertos innecesarios.

- **Configuración de servidor**  
  *Familia:* `configuración declarativa`  
  Administra opciones mediante sp_configure con change control y diferencia valores configurados, activos y pendientes de reinicio.

- **Collation y compatibilidad**  
  *Familia:* `evidencia y latencia`  
  Decide comparación, orden, sensibilidad y nivel de compatibilidad sabiendo que afectan semántica, optimizador y migraciones.


### 📑 Sección: Fundamentos de T-SQL (5 conceptos)

- **Batches y GO**  
  *Familia:* `pasaporte del artefacto`  
  Distingue unidades enviadas al servidor de la directiva que una herramienta cliente usa para separar lotes.

- **SELECT y proyección**  
  *Familia:* `telar relacional`  
  Solicita solo columnas necesarias, asigna aliases comprensibles y evita tratar el orden de filas como implícito.

- **Variables y expresiones**  
  *Familia:* `consulta e índice`  
  Declara valores escalares, aplica precedencia de operadores y controla conversiones antes de formar una decisión.

- **Control de flujo**  
  *Familia:* `flujo de transformación`  
  Usa IF, WHILE, BEGIN y END para coordinación acotada sin reemplazar operaciones relacionales por loops fila a fila.

- **Errores y mensajes**  
  *Familia:* `cola y consumidor`  
  Combina THROW, TRY/CATCH y XACT_STATE para conservar causa, severidad y estado real de una transacción.


### 📑 Sección: Tipos, NULL y conversiones (5 conceptos)

- **Tipos numéricos**  
  *Familia:* `matriz de señales`  
  Elige enteros, decimal y float por rango y exactitud, evitando dinero o mediciones sobre aproximaciones accidentales.

- **Texto y Unicode**  
  *Familia:* `tejido literario`  
  Dimensiona varchar o nvarchar por datos reales, codificación, collation e impacto sobre filas, índices y parámetros.

- **Fecha y tiempo**  
  *Familia:* `análisis y emisión`  
  Modela instantes y tiempo civil con date, time, datetime2 y datetimeoffset, conservando precisión y zona cuando corresponde.

- **NULL y lógica ternaria**  
  *Familia:* `validación y decisión`  
  Trata desconocido como un tercer estado, usa IS NULL y anticipa su efecto en filtros, joins, constraints y agregados.

- **Conversiones y precedencia**  
  *Familia:* `jerarquía y dependencias`  
  Usa CAST, CONVERT o TRY_CONVERT de forma explícita para evitar errores, pérdida de precisión y predicados no sargables.


### 📑 Sección: Modelado relacional (5 conceptos)

- **Entidades y relaciones**  
  *Familia:* `configuración declarativa`  
  Convierte hechos del dominio en tablas y relaciones sin copiar la forma temporal de una pantalla o documento.

- **Claves candidatas y primaria**  
  *Familia:* `consulta e índice`  
  Identifica la unicidad del negocio y elige una clave primaria estable sin ocultar duplicados reales.

- **Claves sustitutas**  
  *Familia:* `evidencia y latencia`  
  Introduce una identidad técnica cuando facilita referencias, manteniendo constraints para las claves naturales que aún importan.

- **Normalización**  
  *Familia:* `telar relacional`  
  Reduce dependencias y anomalías de inserción, actualización o borrado, desnormalizando solo con una medición y sincronización explícitas.

- **Esquemas y ownership**  
  *Familia:* `mapa de memoria`  
  Agrupa objetos por límite funcional y administra autorización mediante propietarios y roles, no solo como prefijo de nombres.


### 📑 Sección: Integridad declarativa (5 conceptos)

- **PRIMARY KEY y UNIQUE**  
  *Familia:* `capas internas`  
  Hace cumplir identidad y claves alternativas dentro del motor incluso cuando varios clientes escriben a la vez.

- **FOREIGN KEY**  
  *Familia:* `consulta e índice`  
  Protege relaciones entre filas y diseña acciones de borrado o actualización de forma deliberada.

- **CHECK constraints**  
  *Familia:* `evidencia y latencia`  
  Expresa reglas locales deterministas para impedir estados inválidos antes de que alcancen otras capas.

- **DEFAULT y nulabilidad**  
  *Familia:* `telar relacional`  
  Distingue ausencia permitida de un valor predeterminado y evita defaults que escondan datos desconocidos.

- **Constraints confiables**  
  *Familia:* `consulta e índice`  
  Verifica datos existentes al habilitar reglas para que el optimizador pueda usar su verdad y no queden filas históricas fuera del contrato.


### 📑 Sección: Consultas relacionales (5 conceptos)

- **Filtrado sargable**  
  *Familia:* `flujo de transformación`  
  Formula predicados que permitan buscar por índices sin aplicar funciones innecesarias sobre la columna filtrada.

- **INNER y OUTER JOIN**  
  *Familia:* `telar relacional`  
  Combina relaciones preservando o descartando filas con una condición que no multiplica resultados accidentalmente.

- **EXISTS y pertenencia**  
  *Familia:* `espectro de verificación`  
  Expresa pruebas de existencia sin materializar columnas ni confundir duplicados o NULL con la intención del filtro.

- **UNION, INTERSECT y EXCEPT**  
  *Familia:* `análisis y emisión`  
  Compone conjuntos compatibles comprendiendo deduplicación, tipos resultantes y costo de ordenamiento.

- **ORDER BY y paginación**  
  *Familia:* `consulta e índice`  
  Define orden total estable y usa OFFSET/FETCH o búsqueda por clave según volumen, consistencia y patrón de navegación.


### 📑 Sección: Agregación, ventanas y composición (5 conceptos)

- **GROUP BY y HAVING**  
  *Familia:* `telar relacional`  
  Resume grupos y filtra agregados sin mezclar columnas que no pertenecen al nivel de detalle resultante.

- **Funciones de ventana**  
  *Familia:* `flujo de transformación`  
  Calcula ranking, acumulados y comparaciones conservando cada fila mediante PARTITION BY, ORDER BY y un frame explícito.

- **CTE y recursión**  
  *Familia:* `acumulación de recursos`  
  Nombra una expresión de consulta y recorre jerarquías con ancla, miembro recursivo, condición de salida y profundidad controlada.

- **APPLY**  
  *Familia:* `jerarquía y dependencias`  
  Evalúa una fuente tabular correlacionada por fila y hace visibles patrones que un JOIN convencional no expresa con claridad.

- **Subconsultas y tablas derivadas**  
  *Familia:* `secuencia operativa`  
  Encapsula un resultado intermedio comprendiendo que su forma lógica no obliga al optimizador a materializarlo.


### 📑 Sección: Programabilidad en el motor (5 conceptos)

- **Stored procedures**  
  *Familia:* `topología y tráfico`  
  Publica operaciones parametrizadas con permisos y contratos estables, evitando convertir el procedimiento en una capa monolítica.

- **Funciones escalares y tabulares**  
  *Familia:* `flujo de transformación`  
  Encapsula cálculo reutilizable atendiendo determinismo, inlining, cardinalidad y costo por fila.

- **Views**  
  *Familia:* `análisis y emisión`  
  Expone una proyección lógica y segura sin asumir que guarda resultados ni garantiza orden.

- **Triggers e inserted/deleted**  
  *Familia:* `planificación de trabajo`  
  Reacciona a conjuntos de filas dentro de la transacción, sin lógica fila a fila ni efectos externos frágiles.

- **SQL dinámico seguro**  
  *Familia:* `consulta e índice`  
  Construye solo la estructura variable indispensable y enlaza valores con sp_executesql para reducir inyección y reutilizar planes.


### 📑 Sección: Páginas, archivos y almacenamiento (5 conceptos)

- **Páginas y extents**  
  *Familia:* `telar relacional`  
  Visualiza cómo filas e índices ocupan páginas de 8 KB agrupadas para asignación y lectura física.

- **Data files y filegroups**  
  *Familia:* `evidencia y latencia`  
  Distribuye estructuras y ciclos de administración sin tratar varios archivos como sustituto automático de rendimiento.

- **Filas in-row, row-overflow y LOB**  
  *Familia:* `consulta e índice`  
  Comprende cuándo una fila conserva datos en la página y cuándo usa estructuras separadas con más lecturas.

- **Buffer pool**  
  *Familia:* `mapa de memoria`  
  Distingue lectura lógica de física y entiende que memoria disponible, presión y patrón de acceso condicionan I/O.

- **Transaction log y WAL**  
  *Familia:* `secuencia operativa`  
  Registra cambios antes de páginas de datos para permitir rollback, recuperación y continuidad del historial.


### 📑 Sección: Índices y estadísticas (5 conceptos)

- **Clustered index y heap**  
  *Familia:* `tabla de estados`  
  Elige organización física por patrón de acceso y mantenimiento, sin asumir que clustered significa orden global permanente.

- **Nonclustered index**  
  *Familia:* `topología y tráfico`  
  Crea una ruta alternativa por claves que apunta a la fila base y paga costo adicional en cada escritura.

- **Columnas INCLUDE y cobertura**  
  *Familia:* `espectro de verificación`  
  Evita lookups cuando el beneficio medido compensa espacio, memoria y mantenimiento adicionales.

- **Índices filtrados y especializados**  
  *Familia:* `consulta e índice`  
  Reduce estructura para subconjuntos y evalúa columnstore, XML, spatial o full-text según el tipo de consulta.

- **Estadísticas y cardinalidad**  
  *Familia:* `telar relacional`  
  Representa distribución mediante histogramas y densidad para que el optimizador estime filas y elija recursos.


### 📑 Sección: Optimizador y planes de ejecución (5 conceptos)

- **Compilación y algebrizer**  
  *Familia:* `análisis y emisión`  
  Resuelve nombres y tipos, transforma la consulta y prepara alternativas físicas válidas.

- **Estimador de cardinalidad**  
  *Familia:* `consulta e índice`  
  Predice filas a partir de estadísticas y supuestos; un error temprano puede amplificarse por todo el plan.

- **Operadores físicos**  
  *Familia:* `mapa de memoria`  
  Interpreta scans, seeks, joins, sorts, aggregates, exchanges y spools por flujo de filas, memoria y costo real.

- **Plan cache y parámetros**  
  *Familia:* `memoria intermedia`  
  Reutiliza planes para reducir compilación y reconoce cuándo distribución desigual produce parameter sensitivity.

- **Plan estimado y actual**  
  *Familia:* `capas internas`  
  Compara expectativas con filas, tiempos, spills y warnings observados sin usar el porcentaje de costo como verdad absoluta.


### 📑 Sección: Transacciones y durabilidad (5 conceptos)

- **ACID**  
  *Familia:* `planificación de trabajo`  
  Relaciona atomicidad, consistencia, aislamiento y durabilidad con invariantes, concurrencia y recuperación del dominio.

- **BEGIN, COMMIT y ROLLBACK**  
  *Familia:* `diagnóstico operativo`  
  Delimita una unidad de trabajo corta y completa, incluyendo cada cambio que debe confirmarse o deshacerse junto.

- **Autocommit e implicit transactions**  
  *Familia:* `consulta e índice`  
  Distingue quién abre y cierra la transacción para evitar sesiones que retienen locks sin intención.

- **Savepoints y XACT_STATE**  
  *Familia:* `máquina de estados`  
  Recupera partes permitidas solo cuando el estado de la transacción aún admite commit y el contrato no exige rollback total.

- **Recovery models**  
  *Familia:* `evidencia y latencia`  
  Conecta simple, full y bulk-logged con cadena de log, backups disponibles y objetivos reales de recuperación.


### 📑 Sección: Concurrencia, locks y versiones (5 conceptos)

- **Niveles de aislamiento**  
  *Familia:* `aislamiento sobre host`  
  Elige protección frente a lecturas sucias, no repetibles y phantoms según la invariante, no por costumbre.

- **Locks y compatibilidad**  
  *Familia:* `análisis y emisión`  
  Sigue modos shared, update, exclusive e intent sobre filas, claves, páginas u objetos para explicar espera y bloqueo.

- **Escalation y locking optimizado**  
  *Familia:* `planificación de trabajo`  
  Comprende cuándo muchos locks cambian de granularidad y cómo capacidades modernas reducen memoria sin eliminar contención.

- **Row versioning y snapshot**  
  *Familia:* `cola y consumidor`  
  Permite lecturas consistentes sobre versiones atendiendo tempdb, conflictos de actualización y duración de transacciones.

- **Deadlocks**  
  *Familia:* `tejido de eventos`  
  Lee el grafo, identifica orden de recursos y diseña transacciones consistentes, breves e idempotentes para recuperarse.


### 📑 Sección: Memoria, tempdb y recursos (5 conceptos)

- **Memory grants**  
  *Familia:* `memoria intermedia`  
  Reserva memoria para sorts y hashes según estimaciones, detectando exceso, espera o spill cuando la predicción falla.

- **tempdb**  
  *Familia:* `mapa de memoria`  
  Sostiene temporales, versiones, spills y trabajo interno; su latencia y capacidad afectan muchas bases de la instancia.

- **Temporary tables y table variables**  
  *Familia:* `despacho de runtime`  
  Elige estructuras por estadísticas, alcance, recompilación y volumen en lugar de una regla universal.

- **Resource Governor**  
  *Familia:* `capas internas`  
  Clasifica workloads y limita CPU, memoria o I/O en ediciones compatibles sin sustituir capacity planning.

- **Wait statistics**  
  *Familia:* `tabla de estados`  
  Interpreta dónde esperan workers como síntoma contextual y correlaciona la espera con consultas, recursos y tiempo.


### 📑 Sección: Identidad, autorización y protección (5 conceptos)

- **Logins, users y contained users**  
  *Familia:* `evidencia y latencia`  
  Separa autenticación de servidor, identidad dentro de la base y opciones que reducen dependencias de instancia.

- **Roles y permisos**  
  *Familia:* `validación y decisión`  
  Concede la acción mínima sobre el recurso preciso y prefiere grupos y roles a autorizaciones individuales acumuladas.

- **Ownership chaining y EXECUTE AS**  
  *Familia:* `mapa de memoria`  
  Controla acceso indirecto por módulos comprendiendo cuándo se rompe la cadena y qué identidad evalúa el motor.

- **Cifrado en tránsito y reposo**  
  *Familia:* `comparativa técnica`  
  Combina TLS, TDE y cifrado de backups sabiendo qué amenaza cubre cada capa y quién custodia sus claves.

- **Row-Level Security, masking y auditoría**  
  *Familia:* `validación y decisión`  
  Limita filas, reduce exposición y registra actividad sin confundir enmascaramiento con autorización o cifrado.


### 📑 Sección: Backup, restore y recuperación (5 conceptos)

- **Full, differential y log backup**  
  *Familia:* `secuencia operativa`  
  Construye una cadena que equilibre tiempo, espacio y frecuencia con los RPO y RTO declarados.

- **Point-in-time restore**  
  *Familia:* `consulta e índice`  
  Restaura full, differential y logs en secuencia hasta un instante o marca sin romper la cadena requerida.

- **Verificación y restore drills**  
  *Familia:* `pasaporte del artefacto`  
  Usa checksums, valida medios y practica restauraciones; un job exitoso no demuestra que la base sea recuperable.

- **Tail-log y emergencia**  
  *Familia:* `secuencia operativa`  
  Captura el tramo final cuando es posible y preserva evidencia antes de iniciar una recuperación destructiva.

- **DBCC CHECKDB**  
  *Familia:* `consulta e índice`  
  Detecta corrupción lógica o física y prioriza restaurar una copia sana sobre reparar con pérdida de datos.


### 📑 Sección: Alta disponibilidad y continuidad (5 conceptos)

- **RPO, RTO y failure domains**  
  *Familia:* `cuadrícula paralela`  
  Define pérdida y tiempo tolerables antes de elegir tecnología, número de réplicas o región.

- **Always On availability groups**  
  *Familia:* `flujo de interfaz`  
  Replica un conjunto de bases entre instancias con modos síncrono o asíncrono y roles primario/secundario.

- **Listener y failover**  
  *Familia:* `propagación de eventos`  
  Entrega un nombre estable al cliente y coordina cambio de rol con health, quorum y configuración de conexión.

- **Failover Cluster Instance**  
  *Familia:* `consulta e índice`  
  Protege una instancia mediante clustering y almacenamiento compatible, diferenciándola de replicar bases con AG.

- **Log shipping y recuperación geográfica**  
  *Familia:* `máquina de estados`  
  Transporta backups de log como opción simple y comprobable para standby y desastre distante.


### 📑 Sección: Observabilidad y diagnóstico (5 conceptos)

- **Dynamic Management Views**  
  *Familia:* `evidencia y latencia`  
  Obtiene snapshots de sesiones, solicitudes, waits, I/O y planes sabiendo que muchos datos se reinician con el servicio.

- **Extended Events**  
  *Familia:* `propagación de eventos`  
  Captura eventos específicos con filtros y targets controlados, evitando trazas amplias que distorsionen el sistema.

- **Query Store**  
  *Familia:* `consulta e índice`  
  Conserva consultas, planes, métricas y waits por ventanas para detectar regresiones y comparar antes y después.

- **Logs y error numbers**  
  *Familia:* `evidencia y latencia`  
  Correlaciona SQL Server error log, Agent, Windows o Linux y aplicación mediante tiempo, sesión y contexto.

- **Baseline y SLO**  
  *Familia:* `secuencia operativa`  
  Registra throughput, latencia percentil, errores, bloqueos y capacidad normal para reconocer degradación útil al usuario.


### 📑 Sección: Metodología de rendimiento (5 conceptos)

- **Medir antes de cambiar**  
  *Familia:* `tabla de estados`  
  Reproduce una carga representativa y conserva consulta, parámetros, plan, waits y métricas antes de proponer una causa.

- **CPU, I/O, memoria y red**  
  *Familia:* `memoria intermedia`  
  Localiza el recurso limitante y distingue saturación del servidor de una consulta ineficiente o un cliente lento.

- **Blocking y long transactions**  
  *Familia:* `consulta e índice`  
  Encuentra cabeza de bloqueo y unidad de trabajo responsable en vez de terminar sesiones sin entender su efecto.

- **Parameter Sensitive Plan y recompilación**  
  *Familia:* `análisis y emisión`  
  Evalúa variantes de plan, hints o RECOMPILE cuando una distribución sesgada justifica el costo.

- **Query Store hints y plan forcing**  
  *Familia:* `jerarquía y dependencias`  
  Estabiliza temporalmente un plan con evidencia, monitorea efectos y conserva una solución de código o datos sostenible.


### 📑 Sección: Automatización y mantenimiento (5 conceptos)

- **SQL Server Agent**  
  *Familia:* `consulta e índice`  
  Programa jobs, steps, schedules, alerts y operadores con cuentas proxy y manejo explícito de reintentos.

- **Integridad e index maintenance**  
  *Familia:* `tabla de estados`  
  Ejecuta CHECKDB y mantenimiento según cambios, fragmentación y carga, no mediante una receta diaria universal.

- **Actualización de estadísticas**  
  *Familia:* `topología y tráfico`  
  Ajusta muestreo y frecuencia cuando auto-update no representa a tiempo una distribución cambiante.

- **Policy-Based Management**  
  *Familia:* `validación y decisión`  
  Evalúa configuración contra políticas declaradas y distingue comprobación de corrección automática.

- **PowerShell, sqlcmd y dbatools**  
  *Familia:* `consulta e índice`  
  Automatiza inventario y operación con parámetros, credenciales seguras, dry runs y resultados auditables.


### 📑 Sección: Integración, formatos y capacidades modernas (5 conceptos)

- **JSON en T-SQL**  
  *Familia:* `jerarquía y dependencias`  
  Genera, consulta y modifica documentos JSON validando su forma sin abandonar constraints sobre datos relacionales críticos.

- **XML y XML Schema Collections**  
  *Familia:* `validación y decisión`  
  Almacena XML tipado o no tipado y usa índices especializados cuando consultas XQuery justifican su costo.

- **Change Tracking, CDC y replicación**  
  *Familia:* `ida y vuelta`  
  Elige mecanismo de cambios por latencia, historial, topología y responsabilidad del consumidor.

- **Linked servers, PolyBase y external data**  
  *Familia:* `espectro de verificación`  
  Cruza fuentes con límites visibles de seguridad, pushdown, transacción y rendimiento distribuido.

- **Vectores, búsqueda y funciones 2025**  
  *Familia:* `cuadrícula paralela`  
  Evalúa tipos vectoriales, índices DiskANN, regex y mejoras JSON por compatibilidad, edición y caso medido, no por novedad.


### 📑 Sección: Desarrollo, pruebas y entrega de esquema (5 conceptos)

- **Database projects y estado deseado**  
  *Familia:* `máquina de estados`  
  Versiona definiciones de esquema para comparar, compilar y publicar cambios revisables.

- **Migraciones incrementales**  
  *Familia:* `secuencia operativa`  
  Diseña pasos forward-only o reversibles con expansión, backfill y contracción compatibles con versiones concurrentes.

- **Pruebas de base de datos**  
  *Familia:* `consulta e índice`  
  Verifica constraints, procedimientos, concurrencia, permisos y planes críticos sobre datos pequeños y escenarios límite.

- **Datos de prueba y privacidad**  
  *Familia:* `espectro de verificación`  
  Genera fixtures representativas sin copiar información personal o secretos de producción a entornos inferiores.

- **CI y drift detection**  
  *Familia:* `comparativa técnica`  
  Compila, analiza y prueba cada cambio, bloqueando diferencias no autorizadas entre repositorio y destino.


### 📑 Sección: Despliegue, nube y ciclo de vida (5 conceptos)

- **Windows, Linux y contenedores**  
  *Familia:* `aislamiento sobre host`  
  Elige host por soporte, persistencia, identidad, operación y licenciamiento, no solo por facilidad de arranque.

- **Azure Arc y administración híbrida**  
  *Familia:* `despacho de runtime`  
  Proyecta inventario, seguridad y gobierno a instancias conectadas sin confundir control plane con data plane.

- **Azure SQL Managed Instance y Database**  
  *Familia:* `consulta e índice`  
  Evalúa compatibilidad, operación delegada y límites antes de migrar una carga SQL Server.

- **Upgrade y compatibility level**  
  *Familia:* `capas internas`  
  Separa actualización del motor de cambios del optimizador, valida workload y conserva rollback antes de elevar compatibilidad.

- **Runbooks, ownership y retiro**  
  *Familia:* `mapa de memoria`  
  Documenta responsables, backups, failover, alertas, parches, secretos y eliminación verificable de datos y recursos.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Get Started with SQL Server](https://learn.microsoft.com/en-us/training/modules/introduction-to-sql-server/)** (`course` | Nivel: `beginner`): 
- **[SQL Server query processing architecture guide](https://learn.microsoft.com/en-us/sql/relational-databases/query-processing-architecture-guide?view=sql-server-ver17)** (`official-docs` | Nivel: `intermediate`): 
- **[Monitor and tune SQL Server performance](https://learn.microsoft.com/en-us/sql/relational-databases/performance/monitor-and-tune-for-performance?view=sql-server-ver17)** (`reference` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
