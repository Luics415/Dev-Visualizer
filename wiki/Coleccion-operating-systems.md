# Sistemas operativos (OS)

> **Procesos, scheduling, memoria virtual, archivos, E/S, concurrencia y seguridad.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `operating-systems` |
| **Grupo Arquitectonico** | [Infraestructura y entrega](Grupo-Delivery) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `linux` |
| **Total de Conceptos** | **130 conceptos** |
| **Capitulos / Secciones** | **20 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/sistemas-operativos)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/sistemas-operativos-en-accion)


## Estudio de Caso Practico: Diagnosticar un servicio detenido

> **Caso integrado de Sistemas operativos:** Un proceso deja de responder por un deadlock entre dos locks; la traza revela el ciclo y la recuperación impone orden y límites.  
> El informe final conecta síntoma, scheduler, stacks, locks, corrección y una prueba de estrés reproducible.

### Fases de Ejecucion:
1. **Observar el proceso** (Diagnosticar un servicio detenido: etapa 1 de 5): `ps / tasklist; inspect cpu, memory, state` -> Síntoma delimitado. *La etapa conserva un contrato explícito para que el siguiente paso de Sistemas operativos no dependa de supuestos ocultos.*
2. **Capturar stacks** (Diagnosticar un servicio detenido: etapa 2 de 5): `trace threads and wait objects` -> Dependencias visibles. *La etapa conserva un contrato explícito para que el siguiente paso de Sistemas operativos no dependa de supuestos ocultos.*
3. **Confirmar deadlock** (Diagnosticar un servicio detenido: etapa 3 de 5): `T1: lock(A)->lock(B); T2: lock(B)->lock(A)` -> Causa demostrada. *El caso hace visible el fallo de Sistemas operativos; no continúa como si la evidencia fuera válida.*
4. **Imponer orden** (Diagnosticar un servicio detenido: etapa 4 de 5): `lock(min(A,B)); lock(max(A,B));` -> Ejecución recuperada. *La recuperación de Sistemas operativos corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Probar bajo carga** (Diagnosticar un servicio detenido: etapa 5 de 5): `stress --workers N --timeout 60s` -> Servicio estable. *La etapa conserva un contrato explícito para que el siguiente paso de Sistemas operativos no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (130)

### Seccion: Arquitectura (5 conceptos)

- **Kernel y user space**  
  *Familia:* `capas internas`  
  En Kernel y user space, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **System calls**  
  *Familia:* `planificación de trabajo`  
  La función de System calls parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Interrupciones**  
  *Familia:* `matriz de señales`  
  Interrupciones estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Privilegios**  
  *Familia:* `capas internas`  
  El recorrido de Privilegios toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Boot**  
  *Familia:* `planificación de trabajo`  
  Boot procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Ejecución (5 conceptos)

- **Procesos**  
  *Familia:* `cola y consumidor`  
  Para entender Procesos, se delimita tareas con dependencias, recursos compartidos y una señal de cancelación. La operación ordena trabajo y sincronización sin ocultar intercalados posibles hasta producir progreso concurrente con ownership y terminación observables.

- **Threads**  
  *Familia:* `secuencia operativa`  
  El mecanismo de Threads recibe tareas con dependencias, recursos compartidos y una señal de cancelación y ordena trabajo y sincronización sin ocultar intercalados posibles, asegurando progreso concurrente con ownership y terminación observables.

- **Scheduling**  
  *Familia:* `capas internas`  
  Scheduling conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Context switch**  
  *Familia:* `planificación de trabajo`  
  En Context switch, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Sincronización**  
  *Familia:* `cola y consumidor`  
  La función de Sincronización parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Memoria y almacenamiento (5 conceptos)

- **Memoria virtual**  
  *Familia:* `mapa de memoria`  
  Memoria virtual procesa valores con representación, dirección y tiempo de vida definidos: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para entregar estado accesible sin referencias colgantes ni corrupción.

- **Paging**  
  *Familia:* `despacho de runtime`  
  Para entender Paging, se delimita valores con representación, dirección y tiempo de vida definidos. La operación reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime hasta producir estado accesible sin referencias colgantes ni corrupción.

- **Allocators**  
  *Familia:* `capas internas`  
  El mecanismo de Allocators recibe valores con representación, dirección y tiempo de vida definidos y reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime, asegurando estado accesible sin referencias colgantes ni corrupción.

- **Filesystems**  
  *Familia:* `árbol de recursos`  
  Filesystems conecta valores con representación, dirección y tiempo de vida definidos con su runtime interno: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime hasta exponer estado accesible sin referencias colgantes ni corrupción.

- **Page cache**  
  *Familia:* `memoria intermedia`  
  En Page cache, valores con representación, dirección y tiempo de vida definidos ingresa al flujo donde reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para consolidar estado accesible sin referencias colgantes ni corrupción.


### Seccion: Diagnóstico (5 conceptos)

- **Deadlocks**  
  *Familia:* `planificación de trabajo`  
  Deadlocks conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Starvation**  
  *Familia:* `evidencia y latencia`  
  En Starvation, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Memory pressure**  
  *Familia:* `memoria intermedia`  
  La función de Memory pressure parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **I/O latency**  
  *Familia:* `secuencia operativa`  
  I/O latency estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Tracing**  
  *Familia:* `evidencia y latencia`  
  El recorrido de Tracing toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### Seccion: Operación (5 conceptos)

- **Permisos**  
  *Familia:* `validación y decisión`  
  Para entender Permisos, se delimita una identidad, un recurso protegido y una política explícita. La operación evalúa confianza, privilegios y datos antes de autorizar cada efecto hasta producir una decisión mínima y trazable que no revela secretos.

- **Aislamiento**  
  *Familia:* `aislamiento sobre host`  
  El mecanismo de Aislamiento recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Networking**  
  *Familia:* `topología y tráfico`  
  Networking conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Virtualización**  
  *Familia:* `capas internas`  
  En Virtualización, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Recuperación**  
  *Familia:* `máquina de estados`  
  La función de Recuperación parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Arranque y arquitectura de kernel (6 conceptos)

- **Firmware y bootloader**  
  *Familia:* `planificación de trabajo`  
  Firmware y bootloader en Arranque y arquitectura de kernel: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, asegurando recurso visible al proceso con límites y accounting correctos.

- **Kernel initialization**  
  *Familia:* `cola y consumidor`  
  En Arranque y arquitectura de kernel, Kernel initialization kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización para entregar recurso visible al proceso con límites y accounting correctos.

- **Monolithic y microkernel**  
  *Familia:* `tejido de eventos`  
  Monolithic y microkernel aplica este mecanismo en Arranque y arquitectura de kernel: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, con recurso visible al proceso con límites y accounting correctos.

- **Kernel modules**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Kernel modules dentro de Arranque y arquitectura de kernel resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado y consolida artefacto versionado cuya composición puede reproducirse.

- **Init y service manager**  
  *Familia:* `planificación de trabajo`  
  Para Init y service manager, la arquitectura de Arranque y arquitectura de kernel kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, garantizando recurso visible al proceso con límites y accounting correctos.

- **initramfs root pivot**  
  *Familia:* `cola y consumidor`  
  initramfs root pivot gestiona Arranque y arquitectura de kernel de modo que kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, produciendo recurso visible al proceso con límites y accounting correctos.


### Seccion: Planificación avanzada (7 conceptos)

- **Scheduling classes**  
  *Familia:* `secuencia operativa`  
  Scheduling classes en Planificación avanzada: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Preemption**  
  *Familia:* `planificación de trabajo`  
  En Planificación avanzada, Preemption kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización para entregar recurso visible al proceso con límites y accounting correctos.

- **CPU affinity**  
  *Familia:* `despacho de runtime`  
  CPU affinity aplica este mecanismo en Planificación avanzada: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, con recurso visible al proceso con límites y accounting correctos.

- **Priority inversion**  
  *Familia:* `cola y consumidor`  
  El mecanismo de Priority inversion dentro de Planificación avanzada kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización y consolida recurso visible al proceso con límites y accounting correctos.

- **Real-time scheduling**  
  *Familia:* `planificación de trabajo`  
  Para Real-time scheduling, la arquitectura de Planificación avanzada kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, garantizando recurso visible al proceso con límites y accounting correctos.

- **Scheduler affinity masks**  
  *Familia:* `despacho de runtime`  
  Scheduler affinity masks gestiona Planificación avanzada de modo que encola, planifica y reanuda unidades conservando causalidad y propagación de error, produciendo resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Deadline scheduling**  
  *Familia:* `cola y consumidor`  
  A través de Deadline scheduling en Planificación avanzada, el sistema kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización manteniendo recurso visible al proceso con límites y accounting correctos.


### Seccion: Sincronización del kernel (8 conceptos)

- **Atomic operations**  
  *Familia:* `planificación de trabajo`  
  Atomic operations en Sincronización del kernel: adquiere o señaliza sincronización, publica cambios y libera en un orden definido, asegurando estado visible sin carreras y progreso dentro del límite acordado.

- **Spinlocks**  
  *Familia:* `tejido de eventos`  
  En Sincronización del kernel, Spinlocks adquiere o señaliza sincronización, publica cambios y libera en un orden definido para entregar estado visible sin carreras y progreso dentro del límite acordado.

- **Read-copy-update**  
  *Familia:* `cola y consumidor`  
  Read-copy-update aplica este mecanismo en Sincronización del kernel: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, con recurso visible al proceso con límites y accounting correctos.

- **Futexes**  
  *Familia:* `tejido literario`  
  El mecanismo de Futexes dentro de Sincronización del kernel adquiere o señaliza sincronización, publica cambios y libera en un orden definido y consolida estado visible sin carreras y progreso dentro del límite acordado.

- **Memory barriers**  
  *Familia:* `memoria intermedia`  
  Para Memory barriers, la arquitectura de Sincronización del kernel adquiere o señaliza sincronización, publica cambios y libera en un orden definido, garantizando estado visible sin carreras y progreso dentro del límite acordado.

- **Priority-inversion protocols**  
  *Familia:* `análisis y emisión`  
  Priority-inversion protocols gestiona Sincronización del kernel de modo que serializa, negocia, transmite y traduce errores u ownership en la frontera, produciendo respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Lock dependency graphs**  
  *Familia:* `jerarquía y dependencias`  
  A través de Lock dependency graphs en Sincronización del kernel, el sistema adquiere o señaliza sincronización, publica cambios y libera en un orden definido manteniendo estado visible sin carreras y progreso dentro del límite acordado.

- **Memory barrier placement**  
  *Familia:* `memoria intermedia`  
  En el flujo operativo de Sincronización del kernel, Memory barrier placement adquiere o señaliza sincronización, publica cambios y libera en un orden definido para obtener estado visible sin carreras y progreso dentro del límite acordado.


### Seccion: Memoria virtual profunda (7 conceptos)

- **Page tables**  
  *Familia:* `mapa de memoria`  
  Page tables en Memoria virtual profunda: reserva, mapea o mueve memoria y registra quién debe reclamarla, asegurando datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Translation lookaside buffer**  
  *Familia:* `despacho de runtime`  
  En Memoria virtual profunda, Translation lookaside buffer propaga elementos, aplica ventana o transformación y regula producción con demanda para entregar salida ordenada con memoria y latencia acotadas.

- **Copy-on-write**  
  *Familia:* `capas internas`  
  Copy-on-write aplica este mecanismo en Memoria virtual profunda: mide cuello de botella, cambia una variable y repite con calentamiento suficiente, con mejora atribuible que conserva corrección y percentiles importantes.

- **Memory-mapped files**  
  *Familia:* `memoria intermedia`  
  El mecanismo de Memory-mapped files dentro de Memoria virtual profunda consulta, calcula ausencias y publica el nuevo valor junto con su invalidador y consolida reutilización medible sin cambiar el resultado funcional.

- **NUMA placement**  
  *Familia:* `mapa de memoria`  
  Para NUMA placement, la arquitectura de Memoria virtual profunda reserva, mapea o mueve memoria y registra quién debe reclamarla, garantizando datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Page-table shootdowns**  
  *Familia:* `despacho de runtime`  
  Page-table shootdowns gestiona Memoria virtual profunda de modo que reserva, mapea o mueve memoria y registra quién debe reclamarla, produciendo datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Huge-page fragmentation**  
  *Familia:* `ciclo de vida`  
  A través de Huge-page fragmentation en Memoria virtual profunda, el sistema reserva, mapea o mueve memoria y registra quién debe reclamarla manteniendo datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.


### Seccion: Gestión de memoria física (7 conceptos)

- **Buddy allocator**  
  *Familia:* `mapa de memoria`  
  Buddy allocator en Gestión de memoria física: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, asegurando reutilización medible sin cambiar el resultado funcional.

- **Slab allocation**  
  *Familia:* `capas internas`  
  En Gestión de memoria física, Slab allocation reserva, mapea o mueve memoria y registra quién debe reclamarla para entregar datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Huge pages**  
  *Familia:* `despacho de runtime`  
  Huge pages aplica este mecanismo en Gestión de memoria física: reserva, mapea o mueve memoria y registra quién debe reclamarla, con datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Swap**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Swap dentro de Gestión de memoria física reserva, mapea o mueve memoria y registra quién debe reclamarla y consolida datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Out-of-memory handling**  
  *Familia:* `memoria intermedia`  
  Para Out-of-memory handling, la arquitectura de Gestión de memoria física consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, garantizando reutilización medible sin cambiar el resultado funcional.

- **NUMA page migration**  
  *Familia:* `despacho de runtime`  
  NUMA page migration gestiona Gestión de memoria física de modo que reserva, mapea o mueve memoria y registra quién debe reclamarla, produciendo datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Memory compaction**  
  *Familia:* `comparativa técnica`  
  A través de Memory compaction en Gestión de memoria física, el sistema consulta, calcula ausencias y publica el nuevo valor junto con su invalidador manteniendo reutilización medible sin cambiar el resultado funcional.


### Seccion: Sistemas de archivos (7 conceptos)

- **VFS layer**  
  *Familia:* `capas internas`  
  VFS layer en Sistemas de archivos: normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, asegurando contenido persistido con identidad, metadatos y ownership verificables.

- **Inodes**  
  *Familia:* `árbol de recursos`  
  En Sistemas de archivos, Inodes normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde para entregar contenido persistido con identidad, metadatos y ownership verificables.

- **Journaling**  
  *Familia:* `consulta e índice`  
  Journaling aplica este mecanismo en Sistemas de archivos: normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, con contenido persistido con identidad, metadatos y ownership verificables.

- **Copy-on-write filesystems**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Copy-on-write filesystems dentro de Sistemas de archivos normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde y consolida contenido persistido con identidad, metadatos y ownership verificables.

- **Crash consistency**  
  *Familia:* `telar relacional`  
  Para Crash consistency, la arquitectura de Sistemas de archivos normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, garantizando contenido persistido con identidad, metadatos y ownership verificables.

- **fsync durability boundaries**  
  *Familia:* `consulta e índice`  
  fsync durability boundaries gestiona Sistemas de archivos de modo que normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, produciendo contenido persistido con identidad, metadatos y ownership verificables.

- **Copy-on-write snapshots**  
  *Familia:* `flujo de transformación`  
  A través de Copy-on-write snapshots en Sistemas de archivos, el sistema consulta, calcula ausencias y publica el nuevo valor junto con su invalidador manteniendo reutilización medible sin cambiar el resultado funcional.


### Seccion: Entrada y salida (7 conceptos)

- **Device drivers**  
  *Familia:* `planificación de trabajo`  
  Device drivers en Entrada y salida: serializa, negocia, transmite y traduce errores u ownership en la frontera, asegurando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **DMA**  
  *Familia:* `mapa de memoria`  
  En Entrada y salida, DMA kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización para entregar recurso visible al proceso con límites y accounting correctos.

- **I/O schedulers**  
  *Familia:* `cola y consumidor`  
  I/O schedulers aplica este mecanismo en Entrada y salida: encola, planifica y reanuda unidades conservando causalidad y propagación de error, con resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Interrupt coalescing**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Interrupt coalescing dentro de Entrada y salida kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización y consolida recurso visible al proceso con límites y accounting correctos.

- **Asynchronous I/O**  
  *Familia:* `flujo de interfaz`  
  Para Asynchronous I/O, la arquitectura de Entrada y salida encola, planifica y reanuda unidades conservando causalidad y propagación de error, garantizando resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Device queue depth**  
  *Familia:* `cola y consumidor`  
  Device queue depth gestiona Entrada y salida de modo que propaga elementos, aplica ventana o transformación y regula producción con demanda, produciendo salida ordenada con memoria y latencia acotadas.

- **Interrupt affinity**  
  *Familia:* `despacho de runtime`  
  A través de Interrupt affinity en Entrada y salida, el sistema kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización manteniendo recurso visible al proceso con límites y accounting correctos.


### Seccion: Red dentro del sistema (6 conceptos)

- **Socket buffers**  
  *Familia:* `topología y tráfico`  
  Socket buffers en Red dentro del sistema: propaga elementos, aplica ventana o transformación y regula producción con demanda, asegurando salida ordenada con memoria y latencia acotadas.

- **Network stack traversal**  
  *Familia:* `ida y vuelta`  
  En Red dentro del sistema, Network stack traversal reserva, mapea o mueve memoria y registra quién debe reclamarla para entregar datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Packet filtering**  
  *Familia:* `tejido de eventos`  
  Packet filtering aplica este mecanismo en Red dentro del sistema: serializa, negocia, transmite y traduce errores u ownership en la frontera, con respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Routing tables**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Routing tables dentro de Red dentro del sistema filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones y consolida un candidato trazable cuya precedencia explica el comportamiento.

- **Zero-copy networking**  
  *Familia:* `ida y vuelta`  
  Para Zero-copy networking, la arquitectura de Red dentro del sistema serializa, negocia, transmite y traduce errores u ownership en la frontera, garantizando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **TCP receive offload**  
  *Familia:* `jerarquía y dependencias`  
  TCP receive offload gestiona Red dentro del sistema de modo que serializa, negocia, transmite y traduce errores u ownership en la frontera, produciendo respuesta tipada o efecto confirmado con compatibilidad conocida.


### Seccion: Aislamiento y virtualización (7 conceptos)

- **Namespaces**  
  *Familia:* `aislamiento sobre host`  
  Namespaces en Aislamiento y virtualización: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, asegurando recurso visible al proceso con límites y accounting correctos.

- **Control groups**  
  *Familia:* `planificación de trabajo`  
  En Aislamiento y virtualización, Control groups kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización para entregar recurso visible al proceso con límites y accounting correctos.

- **Hypervisors**  
  *Familia:* `cola y consumidor`  
  Hypervisors aplica este mecanismo en Aislamiento y virtualización: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, con recurso visible al proceso con límites y accounting correctos.

- **Virtual devices**  
  *Familia:* `tejido de eventos`  
  El mecanismo de Virtual devices dentro de Aislamiento y virtualización kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización y consolida recurso visible al proceso con límites y accounting correctos.

- **Container escape boundaries**  
  *Familia:* `aislamiento sobre host`  
  Para Container escape boundaries, la arquitectura de Aislamiento y virtualización autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **seccomp filters**  
  *Familia:* `planificación de trabajo`  
  seccomp filters gestiona Aislamiento y virtualización de modo que kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, produciendo recurso visible al proceso con límites y accounting correctos.

- **Virtual-machine escape threat model**  
  *Familia:* `validación y decisión`  
  A través de Virtual-machine escape threat model en Aislamiento y virtualización, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### Seccion: Seguridad del sistema (7 conceptos)

- **Discretionary access control**  
  *Familia:* `comparativa técnica`  
  Discretionary access control en Seguridad del sistema: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, asegurando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Mandatory access control**  
  *Familia:* `tabla de estados`  
  En Seguridad del sistema, Mandatory access control autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Capabilities**  
  *Familia:* `validación y decisión`  
  Capabilities aplica este mecanismo en Seguridad del sistema: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, con decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Secure boot**  
  *Familia:* `comparativa técnica`  
  El mecanismo de Secure boot dentro de Seguridad del sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima y consolida decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Kernel attack surface**  
  *Familia:* `tabla de estados`  
  Para Kernel attack surface, la arquitectura de Seguridad del sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **LSM hook ordering**  
  *Familia:* `propagación de eventos`  
  LSM hook ordering gestiona Seguridad del sistema de modo que autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, produciendo decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Measured boot**  
  *Familia:* `topología y tráfico`  
  A través de Measured boot en Seguridad del sistema, el sistema serializa, negocia, transmite y traduce errores u ownership en la frontera manteniendo respuesta tipada o efecto confirmado con compatibilidad conocida.


### Seccion: Comunicación entre procesos (7 conceptos)

- **Pipes**  
  *Familia:* `matriz de señales`  
  Pipes en Comunicación entre procesos: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, asegurando recurso visible al proceso con límites y accounting correctos.

- **Shared memory**  
  *Familia:* `memoria intermedia`  
  En Comunicación entre procesos, Shared memory consulta, calcula ausencias y publica el nuevo valor junto con su invalidador para entregar reutilización medible sin cambiar el resultado funcional.

- **Message queues**  
  *Familia:* `cola y consumidor`  
  Message queues aplica este mecanismo en Comunicación entre procesos: encola, planifica y reanuda unidades conservando causalidad y propagación de error, con resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Signals**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Signals dentro de Comunicación entre procesos kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización y consolida recurso visible al proceso con límites y accounting correctos.

- **Local sockets**  
  *Familia:* `topología y tráfico`  
  Para Local sockets, la arquitectura de Comunicación entre procesos serializa, negocia, transmite y traduce errores u ownership en la frontera, garantizando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Zero-copy IPC**  
  *Familia:* `matriz de señales`  
  Zero-copy IPC gestiona Comunicación entre procesos de modo que serializa, negocia, transmite y traduce errores u ownership en la frontera, produciendo respuesta tipada o efecto confirmado con compatibilidad conocida.

- **File-descriptor passing**  
  *Familia:* `ida y vuelta`  
  A través de File-descriptor passing en Comunicación entre procesos, el sistema normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde manteniendo contenido persistido con identidad, metadatos y ownership verificables.


### Seccion: Tiempo y energía (7 conceptos)

- **Monotonic clocks**  
  *Familia:* `planificación de trabajo`  
  Monotonic clocks en Tiempo y energía: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, asegurando recurso visible al proceso con límites y accounting correctos.

- **Timer interrupts**  
  *Familia:* `cola y consumidor`  
  En Tiempo y energía, Timer interrupts kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización para entregar recurso visible al proceso con límites y accounting correctos.

- **Clock synchronization**  
  *Familia:* `tejido de eventos`  
  Clock synchronization aplica este mecanismo en Tiempo y energía: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, con recurso visible al proceso con límites y accounting correctos.

- **CPU frequency scaling**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de CPU frequency scaling dentro de Tiempo y energía kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización y consolida recurso visible al proceso con límites y accounting correctos.

- **Suspend and resume**  
  *Familia:* `cola y consumidor`  
  Para Suspend and resume, la arquitectura de Tiempo y energía kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, garantizando recurso visible al proceso con límites y accounting correctos.

- **Clocksource selection**  
  *Familia:* `telar relacional`  
  Clocksource selection gestiona Tiempo y energía de modo que kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, produciendo recurso visible al proceso con límites y accounting correctos.

- **Timer slack**  
  *Familia:* `planificación de trabajo`  
  A través de Timer slack en Tiempo y energía, el sistema kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización manteniendo recurso visible al proceso con límites y accounting correctos.


### Seccion: Testing de bajo nivel (7 conceptos)

- **Kernel unit testing**  
  *Familia:* `espectro de verificación`  
  Kernel unit testing en Testing de bajo nivel: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **System call fuzzing**  
  *Familia:* `mapa de memoria`  
  En Testing de bajo nivel, System call fuzzing ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **Race detectors**  
  *Familia:* `validación y decisión`  
  Race detectors aplica este mecanismo en Testing de bajo nivel: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **Fault injection**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Fault injection dentro de Testing de bajo nivel ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Boot regression testing**  
  *Familia:* `evidencia y latencia`  
  Para Boot regression testing, la arquitectura de Testing de bajo nivel ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Deterministic fault campaigns**  
  *Familia:* `validación y decisión`  
  Deterministic fault campaigns gestiona Testing de bajo nivel de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **System-call ABI conformance**  
  *Familia:* `espectro de verificación`  
  A través de System-call ABI conformance en Testing de bajo nivel, el sistema serializa, negocia, transmite y traduce errores u ownership en la frontera manteniendo respuesta tipada o efecto confirmado con compatibilidad conocida.


### Seccion: Observabilidad (7 conceptos)

- **Performance counters**  
  *Familia:* `evidencia y latencia`  
  Performance counters en Observabilidad: mide cuello de botella, cambia una variable y repite con calentamiento suficiente, asegurando mejora atribuible que conserva corrección y percentiles importantes.

- **Dynamic tracing**  
  *Familia:* `secuencia operativa`  
  En Observabilidad, Dynamic tracing instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución para entregar señal que permite localizar componente, versión y duración del problema.

- **eBPF programs**  
  *Familia:* `planificación de trabajo`  
  eBPF programs aplica este mecanismo en Observabilidad: kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización, con recurso visible al proceso con límites y accounting correctos.

- **Core dumps**  
  *Familia:* `cola y consumidor`  
  El mecanismo de Core dumps dentro de Observabilidad kernel valida, planifica y actualiza tablas, colas o drivers bajo sincronización y consolida recurso visible al proceso con límites y accounting correctos.

- **Flame graphs**  
  *Familia:* `evidencia y latencia`  
  Para Flame graphs, la arquitectura de Observabilidad ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, garantizando lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Scheduler latency histograms**  
  *Familia:* `planificación de trabajo`  
  Scheduler latency histograms gestiona Observabilidad de modo que encola, planifica y reanuda unidades conservando causalidad y propagación de error, produciendo resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Kernel trace correlation**  
  *Familia:* `diagnóstico operativo`  
  A través de Kernel trace correlation en Observabilidad, el sistema instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución manteniendo señal que permite localizar componente, versión y duración del problema.


### Seccion: Operación y recuperación (8 conceptos)

- **Patch management**  
  *Familia:* `ida y vuelta`  
  Patch management en Operación y recuperación: aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, asegurando servicio recuperado con pérdida y tiempo medidos.

- **Kernel live patching**  
  *Familia:* `pasaporte del artefacto`  
  En Operación y recuperación, Kernel live patching aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro para entregar servicio recuperado con pérdida y tiempo medidos.

- **Filesystem recovery**  
  *Familia:* `máquina de estados`  
  Filesystem recovery aplica este mecanismo en Operación y recuperación: normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, con contenido persistido con identidad, metadatos y ownership verificables.

- **Capacity limits**  
  *Familia:* `capas internas`  
  El mecanismo de Capacity limits dentro de Operación y recuperación aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro y consolida servicio recuperado con pérdida y tiempo medidos.

- **Postmortem de kernel panic**  
  *Familia:* `evidencia y latencia`  
  Para Postmortem de kernel panic, la arquitectura de Operación y recuperación aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, garantizando servicio recuperado con pérdida y tiempo medidos.

- **Crash-dump capture**  
  *Familia:* `secuencia operativa`  
  Crash-dump capture gestiona Operación y recuperación de modo que tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, produciendo árbol, match o diagnóstico consumible por la siguiente etapa.

- **Rollback kernel selection**  
  *Familia:* `telar relacional`  
  A través de Rollback kernel selection en Operación y recuperación, el sistema registra intención, valida conflictos y confirma o compensa la unidad completa manteniendo un estado durable que satisface aislamiento e invariantes declarados.

- **Boot fallback watchdog**  
  *Familia:* `ida y vuelta`  
  En el flujo operativo de Operación y recuperación, Boot fallback watchdog aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro para obtener servicio recuperado con pérdida y tiempo medidos.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Infraestructura y entrega](Grupo-Delivery) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
