# 📘 [ASM] Ensamblador

> **ISA, registros, memoria, pila, llamadas, ABI, depuración y optimización.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `assembly` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `c` |
| **Total de Conceptos** | **103 conceptos** |
| **Capítulos / Secciones** | **18 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/ensamblador)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/ensamblador-en-accion)**


## 🔬 Caso Práctico en Acción: Corregir una rutina de suma nativa

> **Caso integrado de Ensamblador:** Una función SIMD suma un buffer, rompe la alineación de pila al llamar otra rutina y recupera la ABI antes de validar el resultado contra C.  
> La rutina final documenta ISA mínima, ABI, registros preservados, alineación, límites y benchmark.

### Fases de Ejecución:
1. **Fijar contrato ABI** (Corregir una rutina de suma nativa: etapa 1 de 5): `; rdi = ptr, rsi = len, rax = sum` → Interfaz binaria explícita. *La etapa conserva un contrato explícito para que el siguiente paso de Ensamblador no dependa de supuestos ocultos.*
2. **Recorrer el buffer** (Corregir una rutina de suma nativa: etapa 2 de 5): `add rax, [rdi]
add rdi, 8` → Suma parcial correcta. *La etapa conserva un contrato explícito para que el siguiente paso de Ensamblador no dependa de supuestos ocultos.*
3. **Detectar pila desalineada** (Corregir una rutina de suma nativa: etapa 3 de 5): `push rbx
call helper` → Ejecución detenida. *El caso hace visible el fallo de Ensamblador; no continúa como si la evidencia fuera válida.*
4. **Restaurar frame** (Corregir una rutina de suma nativa: etapa 4 de 5): `sub rsp, 8
call helper
add rsp, 8` → ABI recuperada. *La recuperación de Ensamblador corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Contrastar implementación** (Corregir una rutina de suma nativa: etapa 5 de 5): `assert(sum_asm(p,n) == sum_c(p,n))` → Rutina verificable. *La etapa conserva un contrato explícito para que el siguiente paso de Ensamblador no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (103)

### 📑 Sección: Modelo de máquina (5 conceptos)

- **ISA y microarquitectura**  
  *Familia:* `anatomía del concepto`  
  Para entender ISA y microarquitectura, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.

- **Registros**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Registros recibe valores con representación, dirección y tiempo de vida definidos y reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime, asegurando estado accesible sin referencias colgantes ni corrupción.

- **Flags**  
  *Familia:* `despacho de runtime`  
  Flags conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Memoria direccionable**  
  *Familia:* `memoria intermedia`  
  En Memoria direccionable, valores con representación, dirección y tiempo de vida definidos ingresa al flujo donde reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para consolidar estado accesible sin referencias colgantes ni corrupción.

- **Ciclo fetch-decode-execute**  
  *Familia:* `consulta e índice`  
  La función de Ciclo fetch-decode-execute parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.


### 📑 Sección: Datos e instrucciones (5 conceptos)

- **Representación binaria**  
  *Familia:* `telar relacional`  
  La función de Representación binaria parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.

- **Movimientos**  
  *Familia:* `flujo de transformación`  
  Movimientos estructura datos identificables junto con esquema, restricciones y procedencia en el sistema: valida, representa y recorre cada valor preservando relaciones, garantizando información consultable con integridad y significado estables.

- **Aritmética**  
  *Familia:* `consulta e índice`  
  El recorrido de Aritmética toma datos identificables junto con esquema, restricciones y procedencia. Posteriormente valida, representa y recorre cada valor preservando relaciones para validar información consultable con integridad y significado estables.

- **Lógica y shifts**  
  *Familia:* `pasaporte del artefacto`  
  Lógica y shifts procesa datos identificables junto con esquema, restricciones y procedencia: valida, representa y recorre cada valor preservando relaciones para entregar información consultable con integridad y significado estables.

- **Endianness**  
  *Familia:* `telar relacional`  
  Para entender Endianness, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.


### 📑 Sección: Control y ABI (5 conceptos)

- **Saltos**  
  *Familia:* `mapa de memoria`  
  La función de Saltos parte de valores con representación, dirección y tiempo de vida definidos. Su ejecución reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime y produce estado accesible sin referencias colgantes ni corrupción.

- **Pila**  
  *Familia:* `despacho de runtime`  
  Pila estructura valores con representación, dirección y tiempo de vida definidos en el sistema: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime, garantizando estado accesible sin referencias colgantes ni corrupción.

- **Call y return**  
  *Familia:* `capas internas`  
  El recorrido de Call y return toma valores con representación, dirección y tiempo de vida definidos. Posteriormente reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para validar estado accesible sin referencias colgantes ni corrupción.

- **Calling convention**  
  *Familia:* `mapa de memoria`  
  Calling convention procesa valores con representación, dirección y tiempo de vida definidos: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para entregar estado accesible sin referencias colgantes ni corrupción.

- **Syscalls**  
  *Familia:* `planificación de trabajo`  
  Para entender Syscalls, se delimita valores con representación, dirección y tiempo de vida definidos. La operación reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime hasta producir estado accesible sin referencias colgantes ni corrupción.


### 📑 Sección: Toolchain y diagnóstico (5 conceptos)

- **Assembler y linker**  
  *Familia:* `evidencia y latencia`  
  El recorrido de Assembler y linker toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.

- **Objetos y símbolos**  
  *Familia:* `análisis y emisión`  
  Objetos y símbolos procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Disassembly**  
  *Familia:* `secuencia operativa`  
  Para entender Disassembly, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.

- **Debugger**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Debugger recibe un comportamiento esperado, una entrada mínima y un síntoma observable y aísla variables y contrasta hipótesis con instrumentación repetible, asegurando una causa demostrada y una regresión protegida.

- **Errores de alineación**  
  *Familia:* `diagnóstico operativo`  
  Errores de alineación conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.


### 📑 Sección: Producción segura (5 conceptos)

- **Interoperabilidad con C**  
  *Familia:* `pasaporte del artefacto`  
  Para entender Interoperabilidad con C, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **SIMD**  
  *Familia:* `cuadrícula paralela`  
  El mecanismo de SIMD recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Atomics**  
  *Familia:* `mapa de memoria`  
  Atomics conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Privilegios**  
  *Familia:* `pasaporte del artefacto`  
  En Privilegios, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Portabilidad y pruebas**  
  *Familia:* `espectro de verificación`  
  La función de Portabilidad y pruebas parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.


### 📑 Sección: Familias de arquitectura (5 conceptos)

- **x86-64**  
  *Familia:* `mapa de memoria`  
  x86-64: la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, asegurando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **AArch64**  
  *Familia:* `análisis y emisión`  
  En AArch64, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **RISC-V**  
  *Familia:* `anatomía del concepto`  
  El mecanismo de RISC-V logra que la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema y garantiza estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Harvard frente a von Neumann**  
  *Familia:* `mapa de memoria`  
  A través de Harvard / a / von / Neumann, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, consolidando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Modos de ejecución**  
  *Familia:* `análisis y emisión`  
  Modos / ejecución estructura el flujo donde la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, logrando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.


### 📑 Sección: Codificación y secciones (6 conceptos)

- **Opcodes y operandos**  
  *Familia:* `anatomía del concepto`  
  Opcodes / operandos: frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, asegurando un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Instruction prefixes**  
  *Familia:* `mapa de memoria`  
  En Instruction / prefixes, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Secciones text data y bss**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Secciones / text / data / bss logra que la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema y garantiza estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Directivas del ensamblador**  
  *Familia:* `anatomía del concepto`  
  A través de Directivas / ensamblador, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, consolidando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Alineación de secciones**  
  *Familia:* `mapa de memoria`  
  Alineación / secciones estructura el flujo donde la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, logrando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Symbol visibility**  
  *Familia:* `análisis y emisión`  
  Para Symbol / visibility, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, manteniendo estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.


### 📑 Sección: Modos de direccionamiento (7 conceptos)

- **Inmediato**  
  *Familia:* `anatomía del concepto`  
  Inmediato: la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, asegurando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Registro indirecto**  
  *Familia:* `mapa de memoria`  
  En Registro / indirecto, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Base más desplazamiento**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Base / más / desplazamiento logra que la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema y garantiza estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Indexado escalado**  
  *Familia:* `anatomía del concepto`  
  A través de Indexado / escalado, el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible, consolidando interfaz sincronizada que comunica cambio, foco y acción disponible.

- **PC-relative**  
  *Familia:* `mapa de memoria`  
  PC-relative estructura el flujo donde la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, logrando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Canonical address rules**  
  *Familia:* `análisis y emisión`  
  Para Canonical / address / rules, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, manteniendo estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Unaligned access behavior**  
  *Familia:* `anatomía del concepto`  
  Unaligned / access / behavior coordina la ejecución: la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema hasta obtener estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.


### 📑 Sección: Aritmética de bajo nivel (5 conceptos)

- **Carry y overflow**  
  *Familia:* `mapa de memoria`  
  Carry / overflow: la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, asegurando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Multiplicación de ancho doble**  
  *Familia:* `análisis y emisión`  
  En Multiplicación / ancho / doble, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **División entera**  
  *Familia:* `anatomía del concepto`  
  El mecanismo de División / entera logra que la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema y garantiza estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Aritmética saturada**  
  *Familia:* `mapa de memoria`  
  A través de Aritmética / saturada, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, consolidando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Branchless operations**  
  *Familia:* `análisis y emisión`  
  Branchless / operations estructura el flujo donde el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, logrando servicio disponible con estado, versión y camino de rollback verificables.


### 📑 Sección: Pila y marcos de llamada (8 conceptos)

- **Stack pointer**  
  *Familia:* `capas internas`  
  Stack / pointer: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, asegurando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Frame pointer**  
  *Familia:* `mapa de memoria`  
  En Frame / pointer, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación para entregar memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Callee-saved registers**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Callee-saved / registers logra que la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema y garantiza estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Variadic functions**  
  *Familia:* `flujo de transformación`  
  A través de Variadic / functions, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, consolidando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Stack unwinding**  
  *Familia:* `mapa de memoria`  
  Stack / unwinding estructura el flujo donde el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, logrando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Red zone**  
  *Familia:* `topología y tráfico`  
  Para Red / zone, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, manteniendo una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Shadow space**  
  *Familia:* `despacho de runtime`  
  Shadow / space coordina la ejecución: la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema hasta obtener estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Stack clash probing**  
  *Familia:* `mapa de memoria`  
  Al operar con Stack / clash / probing, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, produciendo memoria válida durante toda la operación y recuperada al terminar su último uso.


### 📑 Sección: Enlazado y carga (6 conceptos)

- **Relocations**  
  *Familia:* `pasaporte del artefacto`  
  Relocations: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, asegurando un artefacto reproducible, verificable y promovible entre entornos.

- **Position-independent code**  
  *Familia:* `análisis y emisión`  
  En Position-independent / code, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Global offset table**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Global / offset / table logra que la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas y garantiza una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Procedure linkage table**  
  *Familia:* `pasaporte del artefacto`  
  A través de Procedure / linkage / table, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, consolidando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Dynamic loader**  
  *Familia:* `análisis y emisión`  
  Dynamic / loader estructura el flujo donde la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, logrando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Thread-local relocation models**  
  *Familia:* `mapa de memoria`  
  Para Thread-local / relocation / models, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, manteniendo progreso concurrente con ownership y terminación comprobables para cada tarea.


### 📑 Sección: Interfaz con el sistema (7 conceptos)

- **System call numbers**  
  *Familia:* `planificación de trabajo`  
  System / call / numbers: la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, asegurando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **User mode y kernel mode**  
  *Familia:* `despacho de runtime`  
  En User / mode / kernel / mode, el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible para entregar interfaz sincronizada que comunica cambio, foco y acción disponible.

- **Signals**  
  *Familia:* `cola y consumidor`  
  El mecanismo de Signals logra que el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada y garantiza servicio disponible con estado, versión y camino de rollback verificables.

- **Memory mapping**  
  *Familia:* `memoria intermedia`  
  A través de Memory / mapping, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, consolidando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Thread-local storage**  
  *Familia:* `planificación de trabajo`  
  Thread-local / storage estructura el flujo donde el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, logrando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Partial system-call results**  
  *Familia:* `flujo de interfaz`  
  Para Partial / system-call / results, el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, manteniendo un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Restartable syscalls**  
  *Familia:* `máquina de estados`  
  Restartable / syscalls coordina la ejecución: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas hasta obtener una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.


### 📑 Sección: Cómputo vectorial (6 conceptos)

- **SIMD lanes**  
  *Familia:* `cuadrícula paralela`  
  SIMD / lanes: el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, asegurando una mejora medible con distribución, entorno y comparación documentados.

- **Vector loads y stores**  
  *Familia:* `mapa de memoria`  
  En Vector / loads / stores, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas para entregar una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Horizontal operations**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Horizontal / operations logra que el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada y garantiza servicio disponible con estado, versión y camino de rollback verificables.

- **Auto-vectorization constraints**  
  *Familia:* `cuadrícula paralela`  
  A través de Auto-vectorization / constraints, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, consolidando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Feature detection**  
  *Familia:* `mapa de memoria`  
  Feature / detection estructura el flujo donde la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, logrando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Masked vector operations**  
  *Familia:* `planificación de trabajo`  
  Para Masked / vector / operations, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, manteniendo una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.


### 📑 Sección: Concurrencia y memoria (5 conceptos)

- **Atomic read-modify-write**  
  *Familia:* `cola y consumidor`  
  Atomic / read-modify-write: el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, asegurando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Compare-and-swap**  
  *Familia:* `comparativa técnica`  
  En Compare-and-swap, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación para entregar memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Memory barriers**  
  *Familia:* `memoria intermedia`  
  El mecanismo de Memory / barriers logra que el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación y garantiza memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Cache coherence**  
  *Familia:* `validación y decisión`  
  A través de Cache / coherence, el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, consolidando una mejora medible con distribución, entorno y comparación documentados.

- **ABA problem**  
  *Familia:* `análisis y emisión`  
  ABA / problem estructura el flujo donde el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, logrando memoria válida durante toda la operación y recuperada al terminar su último uso.


### 📑 Sección: Depuración binaria (7 conceptos)

- **Breakpoints de hardware**  
  *Familia:* `diagnóstico operativo`  
  Breakpoints / hardware: la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, asegurando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Watchpoints**  
  *Familia:* `evidencia y latencia`  
  En Watchpoints, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Core dumps**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Core / dumps logra que la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema y garantiza estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Symbolication**  
  *Familia:* `diagnóstico operativo`  
  A través de Symbolication, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, consolidando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Control-flow reconstruction**  
  *Familia:* `evidencia y latencia`  
  Control-flow / reconstruction estructura el flujo donde la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, logrando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Reverse execution**  
  *Familia:* `mapa de memoria`  
  Para Reverse / execution, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, manteniendo estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **DWARF call-frame information**  
  *Familia:* `diagnóstico operativo`  
  DWARF / call-frame / information coordina la ejecución: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas hasta obtener una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.


### 📑 Sección: Rendimiento microarquitectónico (5 conceptos)

- **Instruction pipelines**  
  *Familia:* `workflow y decisiones`  
  Instruction / pipelines: la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, asegurando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Branch prediction**  
  *Familia:* `secuencia operativa`  
  En Branch / prediction, el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica para entregar una mejora medible con distribución, entorno y comparación documentados.

- **Cache hierarchy**  
  *Familia:* `memoria intermedia`  
  El mecanismo de Cache / hierarchy logra que el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica y garantiza una mejora medible con distribución, entorno y comparación documentados.

- **Out-of-order execution**  
  *Familia:* `evidencia y latencia`  
  A través de Out-of-order / execution, el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, consolidando una mejora medible con distribución, entorno y comparación documentados.

- **Performance counters**  
  *Familia:* `secuencia operativa`  
  Performance / counters estructura el flujo donde el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, logrando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### 📑 Sección: Seguridad binaria (6 conceptos)

- **Stack canaries**  
  *Familia:* `mapa de memoria`  
  Stack / canaries: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, asegurando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **DEP y NX**  
  *Familia:* `validación y decisión`  
  En DEP / NX, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos para entregar solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **Address space layout randomization**  
  *Familia:* `matriz de señales`  
  El mecanismo de Address / space / layout / randomization logra que el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación y garantiza memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Return-oriented programming**  
  *Familia:* `comparativa técnica`  
  A través de Return-oriented / programming, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos, consolidando solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **Control-flow integrity**  
  *Familia:* `planificación de trabajo`  
  Control-flow / integrity estructura el flujo donde la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, logrando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Pointer authentication codes**  
  *Familia:* `mapa de memoria`  
  Para Pointer / authentication / codes, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, manteniendo memoria válida durante toda la operación y recuperada al terminar su último uso.


### 📑 Sección: Firmware y arranque (5 conceptos)

- **Reset vector**  
  *Familia:* `cuadrícula paralela`  
  Reset / vector: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, asegurando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Bootloader stages**  
  *Familia:* `despacho de runtime`  
  En Bootloader / stages, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Interrupt vector table**  
  *Familia:* `tabla de estados`  
  El mecanismo de Interrupt / vector / table logra que la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas y garantiza una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Memory-mapped I/O**  
  *Familia:* `memoria intermedia`  
  A través de Memory-mapped / I / O, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, consolidando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Cross-assembler toolchains**  
  *Familia:* `mapa de memoria`  
  Cross-assembler / toolchains estructura el flujo donde el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, logrando un artefacto reproducible, verificable y promovible entre entornos.




---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
