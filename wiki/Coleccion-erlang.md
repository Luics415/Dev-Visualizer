# Erlang (Erl)

> **BEAM, procesos, mensajes, supervisión, distribución y tolerancia a fallos.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `erlang` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `prolog` |
| **Total de Conceptos** | **94 conceptos** |
| **Capitulos / Secciones** | **16 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/erlang)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/erlang-en-accion)


## Estudio de Caso Practico: Supervisar un procesador de mensajes

> **Caso integrado de Erlang:** Un worker OTP consume eventos, falla ante un payload corrupto y es restaurado por su supervisor sin derribar la aplicación ni duplicar confirmaciones.  
> El árbol final muestra estrategia, intensidad de reinicios, estado recuperable y semántica de entrega.

### Fases de Ejecucion:
1. **Iniciar aplicación** (Supervisar un procesador de mensajes: etapa 1 de 5): `application:start(event_hub).` -> Árbol activo. *La etapa conserva un contrato explícito para que el siguiente paso de Erlang no dependa de supuestos ocultos.*
2. **Procesar mensaje** (Supervisar un procesador de mensajes: etapa 2 de 5): `gen_server:cast(worker, {event, Payload}).` -> Evento aplicado. *La etapa conserva un contrato explícito para que el siguiente paso de Erlang no dependa de supuestos ocultos.*
3. **Provocar crash aislado** (Supervisar un procesador de mensajes: etapa 3 de 5): `erlang:error({invalid_payload, Id}).` -> Fallo contenido. *El caso hace visible el fallo de Erlang; no continúa como si la evidencia fuera válida.*
4. **Reiniciar desde checkpoint** (Supervisar un procesador de mensajes: etapa 4 de 5): `{ok, State} = load_checkpoint().` -> Servicio recuperado. *La recuperación de Erlang corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Verificar entrega** (Supervisar un procesador de mensajes: etapa 5 de 5): `assert_no_duplicate(Id), supervisor:count_children(Sup).` -> Sistema disponible. *La etapa conserva un contrato explícito para que el siguiente paso de Erlang no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (94)

### Seccion: Erlang esencial (5 conceptos)

- **Términos**  
  *Familia:* `despacho de runtime`  
  El recorrido de Términos toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Pattern matching**  
  *Familia:* `jerarquía y dependencias`  
  Pattern matching procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Recursión**  
  *Familia:* `flujo de transformación`  
  Para entender Recursión, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Módulos**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Módulos recibe fuentes versionadas, dependencias fijadas y configuración declarativa y resuelve, construye y empaqueta el artefacto de forma repetible, asegurando una unidad identificable que puede verificarse antes de promoverse.

- **Funciones de orden superior**  
  *Familia:* `jerarquía y dependencias`  
  Funciones de orden superior conecta una instancia acotada, sus invariantes y una medida de costo con su runtime interno: explora estados manteniendo la propiedad que garantiza corrección hasta exponer una solución acompañada de complejidad y límites conocidos.


### Seccion: BEAM y procesos (5 conceptos)

- **Procesos ligeros**  
  *Familia:* `planificación de trabajo`  
  El recorrido de Procesos ligeros toma tareas con dependencias, recursos compartidos y una señal de cancelación. Posteriormente ordena trabajo y sincronización sin ocultar intercalados posibles para validar progreso concurrente con ownership y terminación observables.

- **Mailboxes**  
  *Familia:* `tejido de eventos`  
  Mailboxes procesa tareas con dependencias, recursos compartidos y una señal de cancelación: ordena trabajo y sincronización sin ocultar intercalados posibles para entregar progreso concurrente con ownership y terminación observables.

- **Selective receive**  
  *Familia:* `telar relacional`  
  Para entender Selective receive, se delimita tareas con dependencias, recursos compartidos y una señal de cancelación. La operación ordena trabajo y sincronización sin ocultar intercalados posibles hasta producir progreso concurrente con ownership y terminación observables.

- **Schedulers**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Schedulers recibe tareas con dependencias, recursos compartidos y una señal de cancelación y ordena trabajo y sincronización sin ocultar intercalados posibles, asegurando progreso concurrente con ownership y terminación observables.

- **Garbage collection por proceso**  
  *Familia:* `cola y consumidor`  
  Garbage collection por proceso conecta tareas con dependencias, recursos compartidos y una señal de cancelación con su runtime interno: ordena trabajo y sincronización sin ocultar intercalados posibles hasta exponer progreso concurrente con ownership y terminación observables.


### Seccion: OTP (5 conceptos)

- **GenServer**  
  *Familia:* `jerarquía y dependencias`  
  GenServer conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Supervisors**  
  *Familia:* `ciclo de vida`  
  En Supervisors, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Applications**  
  *Familia:* `máquina de estados`  
  La función de Applications parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Releases**  
  *Familia:* `jerarquía y dependencias`  
  Releases estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Behaviours**  
  *Familia:* `ciclo de vida`  
  El recorrido de Behaviours toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Fallo y diagnóstico (5 conceptos)

- **Links y monitors**  
  *Familia:* `mapa de memoria`  
  Links y monitors conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Crash reports**  
  *Familia:* `evidencia y latencia`  
  En Crash reports, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Observer**  
  *Familia:* `secuencia operativa`  
  La función de Observer parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Tracing**  
  *Familia:* `tabla de estados`  
  Tracing estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Common Test**  
  *Familia:* `espectro de verificación`  
  El recorrido de Common Test toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### Seccion: Distribución (5 conceptos)

- **Nodos**  
  *Familia:* `workflow y decisiones`  
  En Nodos, un mensaje versionado, un destino y límites de tiempo ingresa al flujo donde serializa, transporta y valida el intercambio a través de una frontera remota para consolidar una respuesta correlacionada o un estado convergente verificable.

- **Localización transparente**  
  *Familia:* `topología y tráfico`  
  La función de Localización transparente parte de un mensaje versionado, un destino y límites de tiempo. Su ejecución serializa, transporta y valida el intercambio a través de una frontera remota y produce una respuesta correlacionada o un estado convergente verificable.

- **Particiones**  
  *Familia:* `tejido de eventos`  
  Particiones estructura un mensaje versionado, un destino y límites de tiempo en el sistema: serializa, transporta y valida el intercambio a través de una frontera remota, garantizando una respuesta correlacionada o un estado convergente verificable.

- **Hot code loading**  
  *Familia:* `consulta e índice`  
  El recorrido de Hot code loading toma un mensaje versionado, un destino y límites de tiempo. Posteriormente serializa, transporta y valida el intercambio a través de una frontera remota para validar una respuesta correlacionada o un estado convergente verificable.

- **Backpressure**  
  *Familia:* `pasaporte del artefacto`  
  Backpressure procesa un mensaje versionado, un destino y límites de tiempo: serializa, transporta y valida el intercambio a través de una frontera remota para entregar una respuesta correlacionada o un estado convergente verificable.


### Seccion: Semántica funcional (5 conceptos)

- **Single assignment**  
  *Familia:* `despacho de runtime`  
  Single / assignment: el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, asegurando un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Guard expressions**  
  *Familia:* `jerarquía y dependencias`  
  En Guard / expressions, el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos para entregar un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **List comprehensions**  
  *Familia:* `flujo de transformación`  
  El mecanismo de List / comprehensions logra que la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas y garantiza una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Tail recursion**  
  *Familia:* `despacho de runtime`  
  A través de Tail / recursion, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, consolidando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Binary pattern matching**  
  *Familia:* `jerarquía y dependencias`  
  Binary / pattern / matching estructura el flujo donde scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, logrando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.


### Seccion: Internals de BEAM (6 conceptos)

- **BEAM bytecode**  
  *Familia:* `mapa de memoria`  
  BEAM / bytecode: frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, asegurando un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Reduction counting**  
  *Familia:* `topología y tráfico`  
  En Reduction / counting, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas para entregar un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Process heaps**  
  *Familia:* `tabla de estados`  
  El mecanismo de Process / heaps logra que el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación y garantiza memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Binary heap**  
  *Familia:* `jerarquía y dependencias`  
  A través de Binary / heap, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, consolidando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **JIT de BEAM**  
  *Familia:* `despacho de runtime`  
  JIT / BEAM estructura el flujo donde frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, logrando un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Literal and constant pools**  
  *Familia:* `mapa de memoria`  
  Para Literal / and / constant / pools, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, manteniendo estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### Seccion: Protocolos entre procesos (7 conceptos)

- **Process identifiers**  
  *Familia:* `tejido de eventos`  
  Process / identifiers: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, asegurando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Message ordering**  
  *Familia:* `cola y consumidor`  
  En Message / ordering, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales para entregar una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Request-reply correlation**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Request-reply / correlation logra que la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales y garantiza una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Timeouts de recepción**  
  *Familia:* `tejido de eventos`  
  A través de Timeouts / recepción, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, consolidando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Mailbox growth**  
  *Familia:* `cola y consumidor`  
  Mailbox / growth estructura el flujo donde el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, logrando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Selective receive performance**  
  *Familia:* `topología y tráfico`  
  Para Selective / receive / performance, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, manteniendo estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Protocol versioning**  
  *Familia:* `tejido de eventos`  
  Protocol / versioning coordina la ejecución: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales hasta obtener una respuesta o estructura interna completa que conserva correlación y estado del intercambio.


### Seccion: Servidores OTP avanzados (5 conceptos)

- **GenServer callbacks**  
  *Familia:* `propagación de eventos`  
  Gen / Server / callbacks: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, asegurando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **gen_statem**  
  *Familia:* `máquina de estados`  
  En gen / statem, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas para entregar un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **gen_event alternatives**  
  *Familia:* `ecosistema coordinado`  
  El mecanismo de gen / event / alternatives logra que el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible y garantiza interfaz sincronizada que comunica cambio, foco y acción disponible.

- **Continue callbacks**  
  *Familia:* `propagación de eventos`  
  A través de Continue / callbacks, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, consolidando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Process hibernation**  
  *Familia:* `matriz de señales`  
  Process / hibernation estructura el flujo donde el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, logrando progreso concurrente con ownership y terminación comprobables para cada tarea.


### Seccion: Árboles de supervisión (7 conceptos)

- **One-for-one strategy**  
  *Familia:* `jerarquía y dependencias`  
  One-for-one / strategy: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, asegurando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Rest-for-one strategy**  
  *Familia:* `ciclo de vida`  
  En Rest-for-one / strategy, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas para entregar una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Restart intensity**  
  *Familia:* `máquina de estados`  
  El mecanismo de Restart / intensity logra que la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas y garantiza una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Dynamic supervisors**  
  *Familia:* `jerarquía y dependencias`  
  A través de Dynamic / supervisors, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, consolidando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Shutdown ordering**  
  *Familia:* `ciclo de vida`  
  Shutdown / ordering estructura el flujo donde el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, logrando servicio disponible con estado, versión y camino de rollback verificables.

- **Significant children**  
  *Familia:* `máquina de estados`  
  Para Significant / children, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, manteniendo una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Automatic shutdown**  
  *Familia:* `jerarquía y dependencias`  
  Automatic / shutdown coordina la ejecución: el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada hasta obtener servicio disponible con estado, versión y camino de rollback verificables.


### Seccion: Aplicaciones y releases (6 conceptos)

- **Application resource files**  
  *Familia:* `mapa de memoria`  
  Application / resource / files: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, asegurando un artefacto reproducible, verificable y promovible entre entornos.

- **Release assembly**  
  *Familia:* `ciclo de vida`  
  En Release / assembly, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida para entregar un artefacto reproducible, verificable y promovible entre entornos.

- **Boot scripts**  
  *Familia:* `matriz de señales`  
  El mecanismo de Boot / scripts logra que la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema y garantiza estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Runtime configuration**  
  *Familia:* `despacho de runtime`  
  A través de Runtime / configuration, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, consolidando servicio disponible con estado, versión y camino de rollback verificables.

- **Release upgrades**  
  *Familia:* `ciclo de vida`  
  Release / upgrades estructura el flujo donde el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, logrando un artefacto reproducible, verificable y promovible entre entornos.

- **Release handling instructions**  
  *Familia:* `secuencia operativa`  
  Para Release / handling / instructions, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, manteniendo un artefacto reproducible, verificable y promovible entre entornos.


### Seccion: Sistemas distribuidos (8 conceptos)

- **Node discovery**  
  *Familia:* `workflow y decisiones`  
  Node / discovery: el sistema limita opciones, recoge evidencia y adapta prioridad sin ocultar colas ni dependencias, asegurando un incremento terminado y una señal de resultado que alimenta la siguiente decisión.

- **Distribution protocol**  
  *Familia:* `análisis y emisión`  
  En Distribution / protocol, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales para entregar una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Network splits**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Network / splits logra que la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales y garantiza una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Global registry tradeoffs**  
  *Familia:* `flujo de interfaz`  
  A través de Global / registry / tradeoffs, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, consolidando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Cluster topology**  
  *Familia:* `evidencia y latencia`  
  Cluster / topology estructura el flujo donde la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, logrando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Hidden nodes**  
  *Familia:* `workflow y decisiones`  
  Para Hidden / nodes, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, manteniendo una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Net tick time**  
  *Familia:* `flujo de interfaz`  
  Net / tick / time coordina la ejecución: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales hasta obtener una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Global groups**  
  *Familia:* `superficie de aplicación`  
  Al operar con Global / groups, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, produciendo una respuesta o estructura interna completa que conserva correlación y estado del intercambio.


### Seccion: Datos y persistencia (5 conceptos)

- **ETS tables**  
  *Familia:* `análisis y emisión`  
  ETS / tables: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, asegurando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **DETS storage**  
  *Familia:* `pasaporte del artefacto`  
  En DETS / storage, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar para entregar estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Mnesia transactions**  
  *Familia:* `consulta e índice`  
  El mecanismo de Mnesia / transactions logra que el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar y garantiza estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Dirty operations**  
  *Familia:* `planificación de trabajo`  
  A través de Dirty / operations, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, consolidando servicio disponible con estado, versión y camino de rollback verificables.

- **Event sourcing con procesos**  
  *Familia:* `cola y consumidor`  
  Event / sourcing / procesos estructura el flujo donde el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible, logrando interfaz sincronizada que comunica cambio, foco y acción disponible.


### Seccion: Pruebas de sistemas concurrentes (8 conceptos)

- **EUnit**  
  *Familia:* `espectro de verificación`  
  EUnit: el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, asegurando un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Common Test suites**  
  *Familia:* `validación y decisión`  
  En Common / Test / suites, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo para entregar evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **PropEr**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Prop / Er logra que el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable y garantiza progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Fault injection**  
  *Familia:* `comparativa técnica`  
  A través de Fault / injection, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos, consolidando solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **Deterministic protocol models**  
  *Familia:* `análisis y emisión`  
  Deterministic / protocol / models estructura el flujo donde la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, logrando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Scheduler perturbation**  
  *Familia:* `planificación de trabajo`  
  Para Scheduler / perturbation, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, manteniendo progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Network partition simulation**  
  *Familia:* `topología y tráfico`  
  Network / partition / simulation coordina la ejecución: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales hasta obtener una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Mailbox invariant properties**  
  *Familia:* `tejido de eventos`  
  Al operar con Mailbox / invariant / properties, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, produciendo progreso concurrente con ownership y terminación comprobables para cada tarea.


### Seccion: Observabilidad (5 conceptos)

- **Logger metadata**  
  *Familia:* `evidencia y latencia`  
  Logger / metadata: el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, asegurando servicio disponible con estado, versión y camino de rollback verificables.

- **Telemetry events**  
  *Familia:* `propagación de eventos`  
  En Telemetry / events, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada para entregar servicio disponible con estado, versión y camino de rollback verificables.

- **Process tracing**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Process / tracing logra que el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada y garantiza servicio disponible con estado, versión y camino de rollback verificables.

- **Scheduler utilization**  
  *Familia:* `cola y consumidor`  
  A través de Scheduler / utilization, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, consolidando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Flame graphs de BEAM**  
  *Familia:* `despacho de runtime`  
  Flame / graphs / BEAM estructura el flujo donde frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, logrando un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.


### Seccion: Seguridad y operación (7 conceptos)

- **Distribution cookies**  
  *Familia:* `espectro de verificación`  
  Distribution / cookies: el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, asegurando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **TLS distribution**  
  *Familia:* `matriz de señales`  
  En TLS / distribution, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales para entregar una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Atom table exhaustion**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Atom / table / exhaustion logra que la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas y garantiza una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Remote shell controls**  
  *Familia:* `espectro de verificación`  
  A través de Remote / shell / controls, el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, consolidando un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Rolling upgrades**  
  *Familia:* `planificación de trabajo`  
  Rolling / upgrades estructura el flujo donde el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, logrando servicio disponible con estado, versión y camino de rollback verificables.

- **Cookie rotation strategy**  
  *Familia:* `validación y decisión`  
  Para Cookie / rotation / strategy, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos, manteniendo solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **Secure remote console auditing**  
  *Familia:* `comparativa técnica`  
  Secure / remote / console / auditing coordina la ejecución: el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos hasta obtener solo la capacidad permitida ejecutada con una decisión que puede auditarse.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
