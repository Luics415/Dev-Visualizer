# 📘 [Java] Java

> **JVM, tipos, objetos, colecciones, concurrencia, GC, tooling y producción.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `java` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `objective-c` |
| **Total de Conceptos** | **115 conceptos** |
| **Capítulos / Secciones** | **20 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/java)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/java-en-accion)**


## 🔬 Caso Práctico en Acción: Procesar pedidos dentro de la JVM

> **Caso integrado de Java:** Un servicio valida y procesa órdenes con un executor; una cola ilimitada provoca presión de memoria y se recupera con capacidad, rechazo y métricas.  
> El servicio final relaciona cada pedido con thread, transacción, latencia, GC y resultado de negocio.

### Fases de Ejecución:
1. **Definir dominio** (Procesar pedidos dentro de la JVM: etapa 1 de 5): `record Order(String id, List<Item> items) {}` → Entrada modelada. *La etapa conserva un contrato explícito para que el siguiente paso de Java no dependa de supuestos ocultos.*
2. **Ejecutar trabajo** (Procesar pedidos dentro de la JVM: etapa 2 de 5): `executor.submit(() -> process(order));` → Procesamiento concurrente. *La etapa conserva un contrato explícito para que el siguiente paso de Java no dependa de supuestos ocultos.*
3. **Detectar cola infinita** (Procesar pedidos dentro de la JVM: etapa 3 de 5): `newFixedThreadPool(8)` → Presión de memoria confirmada. *El caso hace visible el fallo de Java; no continúa como si la evidencia fuera válida.*
4. **Aplicar backpressure** (Procesar pedidos dentro de la JVM: etapa 4 de 5): `new ThreadPoolExecutor(8, 8, 0, MILLISECONDS, new ArrayBlockingQueue<>(200))` → Servicio estabilizado. *La recuperación de Java corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Observar y cerrar** (Procesar pedidos dentro de la JVM: etapa 5 de 5): `executor.shutdown(); executor.awaitTermination(30, SECONDS);` → Cierre verificable. *La etapa conserva un contrato explícito para que el siguiente paso de Java no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (115)

### 📑 Sección: Java esencial (5 conceptos)

- **Tipos primitivos y referencias**  
  *Familia:* `análisis y emisión`  
  La función de Tipos primitivos y referencias parte de valores con representación, dirección y tiempo de vida definidos. Su ejecución reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime y produce estado accesible sin referencias colgantes ni corrupción.

- **Clases y records**  
  *Familia:* `despacho de runtime`  
  Clases y records estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Interfaces**  
  *Familia:* `contratos coordinados`  
  El recorrido de Interfaces toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Excepciones**  
  *Familia:* `análisis y emisión`  
  Excepciones procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Paquetes y módulos**  
  *Familia:* `despacho de runtime`  
  Para entender Paquetes y módulos, se delimita fuentes versionadas, dependencias fijadas y configuración declarativa. La operación resuelve, construye y empaqueta el artefacto de forma repetible hasta producir una unidad identificable que puede verificarse antes de promoverse.


### 📑 Sección: JVM (5 conceptos)

- **Bytecode**  
  *Familia:* `capas internas`  
  Bytecode conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Class loading**  
  *Familia:* `análisis y emisión`  
  En Class loading, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Verificación**  
  *Familia:* `despacho de runtime`  
  La función de Verificación parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **JIT**  
  *Familia:* `capas internas`  
  JIT estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Heap y garbage collection**  
  *Familia:* `análisis y emisión`  
  El recorrido de Heap y garbage collection toma valores con representación, dirección y tiempo de vida definidos. Posteriormente reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para validar estado accesible sin referencias colgantes ni corrupción.


### 📑 Sección: Biblioteca y diseño (5 conceptos)

- **Collections**  
  *Familia:* `despacho de runtime`  
  Collections conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Generics**  
  *Familia:* `contratos coordinados`  
  En Generics, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Streams**  
  *Familia:* `análisis y emisión`  
  La función de Streams parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **I/O y NIO**  
  *Familia:* `despacho de runtime`  
  I/O y NIO estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Fecha y tiempo**  
  *Familia:* `contratos coordinados`  
  El recorrido de Fecha y tiempo toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Concurrencia y diagnóstico (5 conceptos)

- **Threads**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Threads recibe tareas con dependencias, recursos compartidos y una señal de cancelación y ordena trabajo y sincronización sin ocultar intercalados posibles, asegurando progreso concurrente con ownership y terminación observables.

- **Executors**  
  *Familia:* `cola y consumidor`  
  Executors conecta tareas con dependencias, recursos compartidos y una señal de cancelación con su runtime interno: ordena trabajo y sincronización sin ocultar intercalados posibles hasta exponer progreso concurrente con ownership y terminación observables.

- **CompletableFuture**  
  *Familia:* `tejido de eventos`  
  En CompletableFuture, tareas con dependencias, recursos compartidos y una señal de cancelación ingresa al flujo donde ordena trabajo y sincronización sin ocultar intercalados posibles para consolidar progreso concurrente con ownership y terminación observables.

- **Java Flight Recorder**  
  *Familia:* `análisis y emisión`  
  La función de Java Flight Recorder parte de tareas con dependencias, recursos compartidos y una señal de cancelación. Su ejecución ordena trabajo y sincronización sin ocultar intercalados posibles y produce progreso concurrente con ownership y terminación observables.

- **Thread dumps**  
  *Familia:* `planificación de trabajo`  
  Thread dumps estructura tareas con dependencias, recursos compartidos y una señal de cancelación en el sistema: ordena trabajo y sincronización sin ocultar intercalados posibles, garantizando progreso concurrente con ownership y terminación observables.


### 📑 Sección: Producción (5 conceptos)

- **Testing**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Testing recibe un comportamiento esperado, una entrada mínima y un síntoma observable y aísla variables y contrasta hipótesis con instrumentación repetible, asegurando una causa demostrada y una regresión protegida.

- **Builds reproducibles**  
  *Familia:* `análisis y emisión`  
  Builds reproducibles conecta fuentes versionadas, dependencias fijadas y configuración declarativa con su runtime interno: resuelve, construye y empaqueta el artefacto de forma repetible hasta exponer una unidad identificable que puede verificarse antes de promoverse.

- **Seguridad**  
  *Familia:* `validación y decisión`  
  En Seguridad, una identidad, un recurso protegido y una política explícita ingresa al flujo donde evalúa confianza, privilegios y datos antes de autorizar cada efecto para consolidar una decisión mínima y trazable que no revela secretos.

- **Contenedores**  
  *Familia:* `aislamiento sobre host`  
  La función de Contenedores parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Actualización de LTS**  
  *Familia:* `pasaporte del artefacto`  
  Actualización de LTS estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Sistema de tipos (5 conceptos)

- **Conversión primitiva**  
  *Familia:* `análisis y emisión`  
  Conversión / primitiva: el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, asegurando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Boxing y unboxing**  
  *Familia:* `validación y decisión`  
  En Boxing / unboxing, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código para entregar una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Sobrecarga y resolución**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Sobrecarga / resolución logra que el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código y garantiza una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Sealed hierarchies**  
  *Familia:* `despacho de runtime`  
  A través de Sealed / hierarchies, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, consolidando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Pattern matching exhaustivo**  
  *Familia:* `validación y decisión`  
  Pattern / matching / exhaustivo estructura el flujo donde scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, logrando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.


### 📑 Sección: Diseño de objetos (6 conceptos)

- **Identidad y value objects**  
  *Familia:* `configuración declarativa`  
  Identidad / value / objects: el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, asegurando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Inmutabilidad**  
  *Familia:* `análisis y emisión`  
  En Inmutabilidad, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Composición frente a herencia**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Composición / a / herencia logra que la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas y garantiza un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Records como portadores**  
  *Familia:* `validación y decisión`  
  A través de Records / como / portadores, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, consolidando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Contratos equals y hashCode**  
  *Familia:* `tabla de estados`  
  Contratos / equals / hash / Code estructura el flujo donde la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, logrando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Defensive copying**  
  *Familia:* `análisis y emisión`  
  Para Defensive / copying, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, manteniendo el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.


### 📑 Sección: Genéricos (5 conceptos)

- **Type erasure**  
  *Familia:* `validación y decisión`  
  Type / erasure: el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, asegurando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Bounds**  
  *Familia:* `jerarquía y dependencias`  
  En Bounds, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código para entregar una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Wildcards PECS**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Wildcards / PECS logra que el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código y garantiza una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Bridge methods**  
  *Familia:* `validación y decisión`  
  A través de Bridge / methods, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, consolidando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Heap pollution**  
  *Familia:* `tabla de estados`  
  Heap / pollution estructura el flujo donde el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, logrando memoria válida durante toda la operación y recuperada al terminar su último uso.


### 📑 Sección: Metadatos y reflexión (6 conceptos)

- **Annotations**  
  *Familia:* `mapa de memoria`  
  Annotations: el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, asegurando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Reflection API**  
  *Familia:* `despacho de runtime`  
  En Reflection / API, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible para entregar el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Method handles**  
  *Familia:* `capas internas`  
  El mecanismo de Method / handles logra que el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible y garantiza el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Dynamic proxies**  
  *Familia:* `mapa de memoria`  
  A través de Dynamic / proxies, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, consolidando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Annotation processing**  
  *Familia:* `despacho de runtime`  
  Annotation / processing estructura el flujo donde el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, logrando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Hidden classes**  
  *Familia:* `análisis y emisión`  
  Para Hidden / classes, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, manteniendo el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.


### 📑 Sección: Class files y carga (7 conceptos)

- **Constant pool**  
  *Familia:* `capas internas`  
  Constant / pool: el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, asegurando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Class loader delegation**  
  *Familia:* `despacho de runtime`  
  En Class / loader / delegation, frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias para entregar un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Linking y initialization**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Linking / initialization logra que el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida y garantiza un artefacto reproducible, verificable y promovible entre entornos.

- **Module layers**  
  *Familia:* `capas internas`  
  A través de Module / layers, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, consolidando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Agents e instrumentation**  
  *Familia:* `despacho de runtime`  
  Agents / e / instrumentation estructura el flujo donde frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, logrando un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Class unloading**  
  *Familia:* `análisis y emisión`  
  Para Class / unloading, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, manteniendo el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Split packages**  
  *Familia:* `capas internas`  
  Split / packages coordina la ejecución: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida hasta obtener un artefacto reproducible, verificable y promovible entre entornos.


### 📑 Sección: Memoria de la JVM (6 conceptos)

- **Object layout**  
  *Familia:* `mapa de memoria`  
  Object / layout: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, asegurando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Generational heaps**  
  *Familia:* `tabla de estados`  
  En Generational / heaps, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación para entregar memoria válida durante toda la operación y recuperada al terminar su último uso.

- **G1 collector**  
  *Familia:* `análisis y emisión`  
  El mecanismo de G1 / collector logra que la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas y garantiza una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **ZGC y pausas**  
  *Familia:* `validación y decisión`  
  A través de ZGC / pausas, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, consolidando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Native memory tracking**  
  *Familia:* `ida y vuelta`  
  Native / memory / tracking estructura el flujo donde el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, logrando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Reference objects and reachability**  
  *Familia:* `análisis y emisión`  
  Para Reference / objects / and / reachability, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, manteniendo memoria válida durante toda la operación y recuperada al terminar su último uso.


### 📑 Sección: Modelo de memoria concurrente (8 conceptos)

- **Happens-before**  
  *Familia:* `validación y decisión`  
  Happens-before: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, asegurando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Volatile**  
  *Familia:* `jerarquía y dependencias`  
  En Volatile, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación para entregar memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Intrinsic locks**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Intrinsic / locks logra que el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable y garantiza progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Atomic variables**  
  *Familia:* `cola y consumidor`  
  A través de Atomic / variables, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, consolidando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **False sharing**  
  *Familia:* `análisis y emisión`  
  False / sharing estructura el flujo donde el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, logrando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Safe publication**  
  *Familia:* `validación y decisión`  
  Para Safe / publication, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, manteniendo memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Final field semantics**  
  *Familia:* `jerarquía y dependencias`  
  Final / field / semantics coordina la ejecución: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación hasta obtener memoria válida durante toda la operación y recuperada al terminar su último uso.

- **VarHandle access modes**  
  *Familia:* `análisis y emisión`  
  Al operar con Var / Handle / access / modes, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, produciendo memoria válida durante toda la operación y recuperada al terminar su último uso.


### 📑 Sección: Concurrencia moderna (6 conceptos)

- **Virtual threads**  
  *Familia:* `planificación de trabajo`  
  Virtual / threads: el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, asegurando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Structured concurrency**  
  *Familia:* `topología y tráfico`  
  En Structured / concurrency, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable para entregar progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Concurrent collections**  
  *Familia:* `cola y consumidor`  
  El mecanismo de Concurrent / collections logra que el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable y garantiza progreso concurrente con ownership y terminación comprobables para cada tarea.

- **ForkJoinPool**  
  *Familia:* `telar relacional`  
  A través de Fork / Join / Pool, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, consolidando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Reactive streams**  
  *Familia:* `planificación de trabajo`  
  Reactive / streams estructura el flujo donde la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, logrando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Scoped values**  
  *Familia:* `cola y consumidor`  
  Para Scoped / values, el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, manteniendo un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.


### 📑 Sección: Procesamiento de colecciones (5 conceptos)

- **Spliterators**  
  *Familia:* `análisis y emisión`  
  Spliterators: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, asegurando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Collectors**  
  *Familia:* `validación y decisión`  
  En Collectors, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas para entregar una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Parallel streams**  
  *Familia:* `cola y consumidor`  
  El mecanismo de Parallel / streams logra que el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable y garantiza progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Primitive streams**  
  *Familia:* `planificación de trabajo`  
  A través de Primitive / streams, la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, consolidando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Optional sin abuso**  
  *Familia:* `validación y decisión`  
  Optional / sin / abuso estructura el flujo donde el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, logrando un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.


### 📑 Sección: I/O y networking (7 conceptos)

- **Byte y character streams**  
  *Familia:* `ida y vuelta`  
  Byte / character / streams: la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, asegurando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **NIO buffers y channels**  
  *Familia:* `topología y tráfico`  
  En NIO / buffers / channels, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable para entregar progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Asynchronous I/O**  
  *Familia:* `árbol de recursos`  
  El mecanismo de Asynchronous / I / O logra que la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar y garantiza un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **HTTP Client**  
  *Familia:* `ida y vuelta`  
  A través de HTTP / Client, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, consolidando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **TLS sockets**  
  *Familia:* `topología y tráfico`  
  TLS / sockets estructura el flujo donde el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, logrando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Direct byte buffers**  
  *Familia:* `árbol de recursos`  
  Para Direct / byte / buffers, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, manteniendo una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **ALPN protocol negotiation**  
  *Familia:* `ida y vuelta`  
  ALPN / protocol / negotiation coordina la ejecución: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales hasta obtener una respuesta o estructura interna completa que conserva correlación y estado del intercambio.


### 📑 Sección: Persistencia (5 conceptos)

- **JDBC**  
  *Familia:* `consulta e índice`  
  JDBC: el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, asegurando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Connection pools**  
  *Familia:* `pasaporte del artefacto`  
  En Connection / pools, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar para entregar estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Transaction boundaries**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Transaction / boundaries logra que el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar y garantiza estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **JPA entity lifecycle**  
  *Familia:* `ciclo de vida`  
  A través de JPA / entity / lifecycle, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, consolidando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Query plan awareness**  
  *Familia:* `consulta e índice`  
  Query / plan / awareness estructura el flujo donde el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, logrando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### 📑 Sección: Construcción modular (5 conceptos)

- **JPMS descriptors**  
  *Familia:* `matriz de señales`  
  JPMS / descriptors: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, asegurando un artefacto reproducible, verificable y promovible entre entornos.

- **Maven dependency mediation**  
  *Familia:* `jerarquía y dependencias`  
  En Maven / dependency / mediation, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida para entregar un artefacto reproducible, verificable y promovible entre entornos.

- **Gradle toolchains**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Gradle / toolchains logra que el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida y garantiza un artefacto reproducible, verificable y promovible entre entornos.

- **Multi-release JAR**  
  *Familia:* `ciclo de vida`  
  A través de Multi-release / JAR, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, consolidando un artefacto reproducible, verificable y promovible entre entornos.

- **jlink images**  
  *Familia:* `despacho de runtime`  
  jlink / images estructura el flujo donde el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, logrando un artefacto reproducible, verificable y promovible entre entornos.


### 📑 Sección: Pruebas y calidad (5 conceptos)

- **JUnit lifecycle**  
  *Familia:* `secuencia operativa`  
  JUnit / lifecycle: el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, asegurando un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Parameterized tests**  
  *Familia:* `espectro de verificación`  
  En Parameterized / tests, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo para entregar evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Property testing**  
  *Familia:* `validación y decisión`  
  El mecanismo de Property / testing logra que la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo y garantiza evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Static analysis**  
  *Familia:* `evidencia y latencia`  
  A través de Static / analysis, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, consolidando evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Mutation testing**  
  *Familia:* `espectro de verificación`  
  Mutation / testing estructura el flujo donde la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, logrando evidencia reproducible que distingue regresión, ruido y limitación conocida.


### 📑 Sección: Seguridad (6 conceptos)

- **Deserialization filters**  
  *Familia:* `validación y decisión`  
  Deserialization / filters: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, asegurando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Cryptography providers**  
  *Familia:* `comparativa técnica`  
  En Cryptography / providers, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos para entregar solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **Key stores**  
  *Familia:* `tabla de estados`  
  El mecanismo de Key / stores logra que el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos y garantiza solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **XML parser hardening**  
  *Familia:* `análisis y emisión`  
  A través de XML / parser / hardening, scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, consolidando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Dependency vulnerability scanning**  
  *Familia:* `validación y decisión`  
  Dependency / vulnerability / scanning estructura el flujo donde el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos, logrando solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **JAR signature verification**  
  *Familia:* `matriz de señales`  
  Para JAR / signature / verification, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos, manteniendo solo la capacidad permitida ejecutada con una decisión que puede auditarse.


### 📑 Sección: Operación y rendimiento (8 conceptos)

- **JIT warmup**  
  *Familia:* `despacho de runtime`  
  JIT / warmup: frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, asegurando un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **JMH benchmarks**  
  *Familia:* `comparativa técnica`  
  En JMH / benchmarks, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo para entregar evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **JDK Mission Control**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de JDK / Mission / Control logra que el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos y garantiza un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Class data sharing**  
  *Familia:* `análisis y emisión`  
  A través de Class / data / sharing, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, consolidando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Container-aware resource limits**  
  *Familia:* `aislamiento sobre host`  
  Container-aware / resource / limits estructura el flujo donde el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, logrando una mejora medible con distribución, entorno y comparación documentados.

- **Safepoint diagnostics**  
  *Familia:* `evidencia y latencia`  
  Para Safepoint / diagnostics, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, manteniendo evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Native memory leak triage**  
  *Familia:* `memoria intermedia`  
  Native / memory / leak / triage coordina la ejecución: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación hasta obtener memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Coordinated omission in benchmarks**  
  *Familia:* `comparativa técnica`  
  Al operar con Coordinated / omission / in / benchmarks, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, produciendo evidencia reproducible que distingue regresión, ruido y limitación conocida.




---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
