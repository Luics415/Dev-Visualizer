# 📘 [λ] Lisp

> **S-expressions, evaluación, funciones, macros, metaprogramación y REPL.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `lisp` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `prolog` |
| **Total de Conceptos** | **98 conceptos** |
| **Capítulos / Secciones** | **16 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/lisp)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/lisp-en-accion)**


## 🔬 Caso Práctico en Acción: Construir una DSL con macros

> **Caso integrado de Lisp:** Una DSL de reglas transforma formas en funciones, detecta captura accidental de símbolos y recupera higiene mediante nombres generados y expansión inspeccionable.  
> La macro final muestra entrada, expansión, código compilado y errores de dominio sin ocultar evaluación.

### Fases de Ejecución:
1. **Leer la regla** (Construir una DSL con macros: etapa 1 de 5): `(rule premium (> score 80) (approve))` → Sintaxis capturada. *La etapa conserva un contrato explícito para que el siguiente paso de Lisp no dependa de supuestos ocultos.*
2. **Expandir la DSL** (Construir una DSL con macros: etapa 2 de 5): `(macroexpand-1 '(rule premium ...))` → Código generado visible. *La etapa conserva un contrato explícito para que el siguiente paso de Lisp no dependa de supuestos ocultos.*
3. **Detectar captura** (Construir una DSL con macros: etapa 3 de 5): `(let ((result :outer)) (rule ...))` → Expansión rechazada. *El caso hace visible el fallo de Lisp; no continúa como si la evidencia fuera válida.*
4. **Generar símbolo fresco** (Construir una DSL con macros: etapa 4 de 5): `(let ((tmp (gensym "RESULT"))) ...)` → Macro recuperada. *La recuperación de Lisp corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Compilar y probar** (Construir una DSL con macros: etapa 5 de 5): `(compile 'premium-rule)
(run-tests)` → DSL verificable. *La etapa conserva un contrato explícito para que el siguiente paso de Lisp no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (98)

### 📑 Sección: Formas y evaluación (5 conceptos)

- **S-expressions**  
  *Familia:* `jerarquía y dependencias`  
  S-expressions conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Átomos y listas**  
  *Familia:* `flujo de transformación`  
  En Átomos y listas, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Quote**  
  *Familia:* `análisis y emisión`  
  La función de Quote parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Evaluación**  
  *Familia:* `jerarquía y dependencias`  
  Evaluación estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **REPL**  
  *Familia:* `flujo de transformación`  
  El recorrido de REPL toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Entornos (5 conceptos)

- **Bindings léxicos**  
  *Familia:* `despacho de runtime`  
  Bindings léxicos procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Funciones**  
  *Familia:* `jerarquía y dependencias`  
  Para entender Funciones, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Closures**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Closures recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Namespaces y packages**  
  *Familia:* `despacho de runtime`  
  Namespaces y packages conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Memoria y GC**  
  *Familia:* `jerarquía y dependencias`  
  En Memoria y GC, valores con representación, dirección y tiempo de vida definidos ingresa al flujo donde reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para consolidar estado accesible sin referencias colgantes ni corrupción.


### 📑 Sección: Extensión del lenguaje (5 conceptos)

- **Macros**  
  *Familia:* `mapa de memoria`  
  Macros estructura texto fuente, contexto léxico y reglas del lenguaje en el sistema: reconoce estructura, comprueba contratos y produce una representación ejecutable, garantizando significado bien formado con errores localizados.

- **Macroexpansion**  
  *Familia:* `despacho de runtime`  
  El recorrido de Macroexpansion toma texto fuente, contexto léxico y reglas del lenguaje. Posteriormente reconoce estructura, comprueba contratos y produce una representación ejecutable para validar significado bien formado con errores localizados.

- **Hygiene en Scheme**  
  *Familia:* `jerarquía y dependencias`  
  Hygiene en Scheme procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Reader macros**  
  *Familia:* `mapa de memoria`  
  Para entender Reader macros, se delimita texto fuente, contexto léxico y reglas del lenguaje. La operación reconoce estructura, comprueba contratos y produce una representación ejecutable hasta producir significado bien formado con errores localizados.

- **DSL**  
  *Familia:* `despacho de runtime`  
  El mecanismo de DSL recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Diagnóstico interactivo (5 conceptos)

- **Conditions**  
  *Familia:* `evidencia y latencia`  
  El recorrido de Conditions toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.

- **Restarts**  
  *Familia:* `máquina de estados`  
  Restarts procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Debugger**  
  *Familia:* `diagnóstico operativo`  
  Para entender Debugger, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.

- **Tracing**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Tracing recibe un comportamiento esperado, una entrada mínima y un síntoma observable y aísla variables y contrasta hipótesis con instrumentación repetible, asegurando una causa demostrada y una regresión protegida.

- **Inspección y redefinición**  
  *Familia:* `topología y tráfico`  
  Inspección y redefinición conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.


### 📑 Sección: Producción (5 conceptos)

- **CLOS**  
  *Familia:* `pasaporte del artefacto`  
  El mecanismo de CLOS recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Compilación**  
  *Familia:* `análisis y emisión`  
  Compilación conecta texto fuente, contexto léxico y reglas del lenguaje con su runtime interno: reconoce estructura, comprueba contratos y produce una representación ejecutable hasta exponer significado bien formado con errores localizados.

- **Imágenes**  
  *Familia:* `capas internas`  
  En Imágenes, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **FFI**  
  *Familia:* `despacho de runtime`  
  La función de FFI parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Portabilidad entre dialectos**  
  *Familia:* `pasaporte del artefacto`  
  Portabilidad entre dialectos estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Representación y lectura avanzada (7 conceptos)

- **Cons cells y listas impropias**  
  *Familia:* `jerarquía y dependencias`  
  Cons cells y listas impropias en Representación y lectura avanzada: tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, asegurando árbol, match o diagnóstico consumible por la siguiente etapa.

- **Símbolos e internado**  
  *Familia:* `evidencia y latencia`  
  En Representación y lectura avanzada, Símbolos e internado tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación para entregar árbol, match o diagnóstico consumible por la siguiente etapa.

- **Readtable**  
  *Familia:* `secuencia operativa`  
  Readtable aplica este mecanismo en Representación y lectura avanzada: tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, con árbol, match o diagnóstico consumible por la siguiente etapa.

- **Paquetes de lectura segura**  
  *Familia:* `tabla de estados`  
  El mecanismo de Paquetes de lectura segura dentro de Representación y lectura avanzada tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación y consolida árbol, match o diagnóstico consumible por la siguiente etapa.

- **Impresión legible y circular**  
  *Familia:* `evidencia y latencia`  
  Para Impresión legible y circular, la arquitectura de Representación y lectura avanzada tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, garantizando árbol, match o diagnóstico consumible por la siguiente etapa.

- **Circular reader labels**  
  *Familia:* `secuencia operativa`  
  Circular reader labels gestiona Representación y lectura avanzada de modo que tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, produciendo árbol, match o diagnóstico consumible por la siguiente etapa.

- **Read-time evaluation control**  
  *Familia:* `tabla de estados`  
  A través de Read-time evaluation control en Representación y lectura avanzada, el sistema tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación manteniendo árbol, match o diagnóstico consumible por la siguiente etapa.


### 📑 Sección: Programación funcional (6 conceptos)

- **Recursión de cola**  
  *Familia:* `acumulación de recursos`  
  Recursión de cola en Programación funcional: compone aplicaciones y propaga resultado o error sin mutar la entrada, asegurando valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Funciones de orden superior**  
  *Familia:* `flujo de transformación`  
  En Programación funcional, Funciones de orden superior compone aplicaciones y propaga resultado o error sin mutar la entrada para entregar valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Aplicación parcial**  
  *Familia:* `jerarquía y dependencias`  
  Aplicación parcial aplica este mecanismo en Programación funcional: compone aplicaciones y propaga resultado o error sin mutar la entrada, con valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Composición funcional**  
  *Familia:* `flujo de ejecución`  
  El mecanismo de Composición funcional dentro de Programación funcional compone aplicaciones y propaga resultado o error sin mutar la entrada y consolida valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Estructuras persistentes**  
  *Familia:* `flujo de transformación`  
  Para Estructuras persistentes, la arquitectura de Programación funcional compone aplicaciones y propaga resultado o error sin mutar la entrada, garantizando valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Memoization con igualdad explícita**  
  *Familia:* `memoria intermedia`  
  Memoization con igualdad explícita gestiona Programación funcional de modo que consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, produciendo reutilización medible sin cambiar el resultado funcional.


### 📑 Sección: Common Lisp Object System (7 conceptos)

- **Generic functions**  
  *Familia:* `análisis y emisión`  
  Generic functions en Common Lisp Object System: filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones, asegurando un candidato trazable cuya precedencia explica el comportamiento.

- **Multiple dispatch**  
  *Familia:* `despacho de runtime`  
  En Common Lisp Object System, Multiple dispatch filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones para entregar un candidato trazable cuya precedencia explica el comportamiento.

- **Method combinations**  
  *Familia:* `matriz de señales`  
  Method combinations aplica este mecanismo en Common Lisp Object System: filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones, con un candidato trazable cuya precedencia explica el comportamiento.

- **Metaclasses**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Metaclasses dentro de Common Lisp Object System resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Metaobject Protocol**  
  *Familia:* `análisis y emisión`  
  Para Metaobject Protocol, la arquitectura de Common Lisp Object System serializa, negocia, transmite y traduce errores u ownership en la frontera, garantizando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Slot allocation protocol**  
  *Familia:* `mapa de memoria`  
  Slot allocation protocol gestiona Common Lisp Object System de modo que reserva, mapea o mueve memoria y registra quién debe reclamarla, produciendo datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Class redefinition**  
  *Familia:* `topología y tráfico`  
  A través de Class redefinition en Common Lisp Object System, el sistema resuelve composición, restricciones y representación antes de aceptar la instancia manteniendo estructura válida cuyas operaciones permitidas están explícitas.


### 📑 Sección: Condiciones y recuperación (6 conceptos)

- **Condition hierarchy**  
  *Familia:* `despacho de runtime`  
  Condition hierarchy en Condiciones y recuperación: aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, asegurando servicio recuperado con pérdida y tiempo medidos.

- **Handlers dinámicos**  
  *Familia:* `pasaporte del artefacto`  
  En Condiciones y recuperación, Handlers dinámicos aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro para entregar servicio recuperado con pérdida y tiempo medidos.

- **Restart protocols**  
  *Familia:* `máquina de estados`  
  Restart protocols aplica este mecanismo en Condiciones y recuperación: serializa, negocia, transmite y traduce errores u ownership en la frontera, con respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Unwind-protect**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Unwind-protect dentro de Condiciones y recuperación activa, usa y transfiere ownership solo bajo un protocolo explícito y consolida recurso cerrado exactamente una vez y estado final observable.

- **Reinicio interactivo en producción**  
  *Familia:* `evidencia y latencia`  
  Para Reinicio interactivo en producción, la arquitectura de Condiciones y recuperación aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, garantizando servicio recuperado con pérdida y tiempo medidos.

- **Restart-case orchestration**  
  *Familia:* `máquina de estados`  
  Restart-case orchestration gestiona Condiciones y recuperación de modo que activa, usa y transfiere ownership solo bajo un protocolo explícito, produciendo recurso cerrado exactamente una vez y estado final observable.


### 📑 Sección: Compilador y rendimiento (7 conceptos)

- **Declarations de tipos**  
  *Familia:* `matriz de señales`  
  Declarations de tipos en Compilador y rendimiento: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Compiler macros**  
  *Familia:* `análisis y emisión`  
  En Compilador y rendimiento, Compiler macros analiza, expande, especializa y baja a una representación ejecutable para entregar código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Disassembly**  
  *Familia:* `mapa de memoria`  
  Disassembly aplica este mecanismo en Compilador y rendimiento: analiza, expande, especializa y baja a una representación ejecutable, con código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Optimización por safety y speed**  
  *Familia:* `secuencia operativa`  
  El mecanismo de Optimización por safety y speed dentro de Compilador y rendimiento mide cuello de botella, cambia una variable y repite con calentamiento suficiente y consolida mejora atribuible que conserva corrección y percentiles importantes.

- **Profiling de asignaciones**  
  *Familia:* `evidencia y latencia`  
  Para Profiling de asignaciones, la arquitectura de Compilador y rendimiento instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, garantizando señal que permite localizar componente, versión y duración del problema.

- **Type proclamations across compilation units**  
  *Familia:* `análisis y emisión`  
  Type proclamations across compilation units gestiona Compilador y rendimiento de modo que resuelve composición, restricciones y representación antes de aceptar la instancia, produciendo estructura válida cuyas operaciones permitidas están explícitas.

- **Tail-call diagnostics**  
  *Familia:* `mapa de memoria`  
  A través de Tail-call diagnostics en Compilador y rendimiento, el sistema analiza, expande, especializa y baja a una representación ejecutable manteniendo código cuyo origen y decisiones de optimización pueden inspeccionarse.


### 📑 Sección: Testing y calidad (6 conceptos)

- **Pruebas unitarias con FiveAM**  
  *Familia:* `espectro de verificación`  
  Pruebas unitarias con FiveAM en Testing y calidad: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Property-based testing**  
  *Familia:* `validación y decisión`  
  En Testing y calidad, Property-based testing ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **Expansiones verificables**  
  *Familia:* `evidencia y latencia`  
  Expansiones verificables aplica este mecanismo en Testing y calidad: analiza, expande, especializa y baja a una representación ejecutable, con código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Fixtures de imágenes Lisp**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Fixtures de imágenes Lisp dentro de Testing y calidad ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Análisis estático con linter**  
  *Familia:* `análisis y emisión`  
  Para Análisis estático con linter, la arquitectura de Testing y calidad ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Random-state reproducibility**  
  *Familia:* `matriz de señales`  
  Random-state reproducibility gestiona Testing y calidad de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.


### 📑 Sección: Concurrencia (7 conceptos)

- **Threads por implementación**  
  *Familia:* `planificación de trabajo`  
  Threads por implementación en Concurrencia: adquiere o señaliza sincronización, publica cambios y libera en un orden definido, asegurando estado visible sin carreras y progreso dentro del límite acordado.

- **Mutexes y semáforos**  
  *Familia:* `cola y consumidor`  
  En Concurrencia, Mutexes y semáforos adquiere o señaliza sincronización, publica cambios y libera en un orden definido para entregar estado visible sin carreras y progreso dentro del límite acordado.

- **Variables dinámicas por thread**  
  *Familia:* `secuencia operativa`  
  Variables dinámicas por thread aplica este mecanismo en Concurrencia: adquiere o señaliza sincronización, publica cambios y libera en un orden definido, con estado visible sin carreras y progreso dentro del límite acordado.

- **Mailbox y actores**  
  *Familia:* `tejido de eventos`  
  El mecanismo de Mailbox y actores dentro de Concurrencia encola, planifica y reanuda unidades conservando causalidad y propagación de error y consolida resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Procesamiento paralelo de secuencias**  
  *Familia:* `cuadrícula paralela`  
  Para Procesamiento paralelo de secuencias, la arquitectura de Concurrencia adquiere o señaliza sincronización, publica cambios y libera en un orden definido, garantizando estado visible sin carreras y progreso dentro del límite acordado.

- **Condition variables**  
  *Familia:* `planificación de trabajo`  
  Condition variables gestiona Concurrencia de modo que adquiere o señaliza sincronización, publica cambios y libera en un orden definido, produciendo estado visible sin carreras y progreso dentro del límite acordado.

- **Atomic memory operations**  
  *Familia:* `memoria intermedia`  
  A través de Atomic memory operations en Concurrencia, el sistema adquiere o señaliza sincronización, publica cambios y libera en un orden definido manteniendo estado visible sin carreras y progreso dentro del límite acordado.


### 📑 Sección: Persistencia y datos (6 conceptos)

- **Pathnames portables**  
  *Familia:* `árbol de recursos`  
  Pathnames portables en Persistencia y datos: lee, expande, compila o evalúa la forma conservando identidad de símbolos y condiciones, asegurando valor, efecto y representación de imagen inspeccionables.

- **Streams binarios**  
  *Familia:* `cola y consumidor`  
  En Persistencia y datos, Streams binarios propaga elementos, aplica ventana o transformación y regula producción con demanda para entregar salida ordenada con memoria y latencia acotadas.

- **Serialización de formas**  
  *Familia:* `consulta e índice`  
  Serialización de formas aplica este mecanismo en Persistencia y datos: codifica campos en orden definido y reconstruye validando versión y rangos, con representación interoperable que conserva significado al hacer round trip.

- **Bases de datos de objetos**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Bases de datos de objetos dentro de Persistencia y datos resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Transacciones desde Lisp**  
  *Familia:* `telar relacional`  
  Para Transacciones desde Lisp, la arquitectura de Persistencia y datos registra intención, valida conflictos y confirma o compensa la unidad completa, garantizando un estado durable que satisface aislamiento e invariantes declarados.

- **External formats and transcoding**  
  *Familia:* `consulta e índice`  
  External formats and transcoding gestiona Persistencia y datos de modo que codifica campos en orden definido y reconstruye validando versión y rangos, produciendo representación interoperable que conserva significado al hacer round trip.


### 📑 Sección: Interoperabilidad (7 conceptos)

- **CFFI**  
  *Familia:* `despacho de runtime`  
  CFFI en Interoperabilidad: serializa, negocia, transmite y traduce errores u ownership en la frontera, asegurando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Callbacks nativos**  
  *Familia:* `mapa de memoria`  
  En Interoperabilidad, Callbacks nativos serializa, negocia, transmite y traduce errores u ownership en la frontera para entregar respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Gestión de memoria extranjera**  
  *Familia:* `capas internas`  
  Gestión de memoria extranjera aplica este mecanismo en Interoperabilidad: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, con reutilización medible sin cambiar el resultado funcional.

- **Protocolos de red**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Protocolos de red dentro de Interoperabilidad serializa, negocia, transmite y traduce errores u ownership en la frontera y consolida respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Embebido del runtime**  
  *Familia:* `mapa de memoria`  
  Para Embebido del runtime, la arquitectura de Interoperabilidad lee, expande, compila o evalúa la forma conservando identidad de símbolos y condiciones, garantizando valor, efecto y representación de imagen inspeccionables.

- **ABI alignment and calling conventions**  
  *Familia:* `capas internas`  
  ABI alignment and calling conventions gestiona Interoperabilidad de modo que serializa, negocia, transmite y traduce errores u ownership en la frontera, produciendo respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Foreign resource finalization**  
  *Familia:* `despacho de runtime`  
  A través de Foreign resource finalization en Interoperabilidad, el sistema activa, usa y transfiere ownership solo bajo un protocolo explícito manteniendo recurso cerrado exactamente una vez y estado final observable.


### 📑 Sección: Seguridad del lenguaje extensible (7 conceptos)

- **Lectura de formas no confiables**  
  *Familia:* `espectro de verificación`  
  Lectura de formas no confiables en Seguridad del lenguaje extensible: tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, asegurando árbol, match o diagnóstico consumible por la siguiente etapa.

- **Evaluación restringida**  
  *Familia:* `validación y decisión`  
  En Seguridad del lenguaje extensible, Evaluación restringida autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Validación de macros**  
  *Familia:* `análisis y emisión`  
  Validación de macros aplica este mecanismo en Seguridad del lenguaje extensible: analiza, expande, especializa y baja a una representación ejecutable, con código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Límites de recursos**  
  *Familia:* `acumulación de recursos`  
  El mecanismo de Límites de recursos dentro de Seguridad del lenguaje extensible activa, usa y transfiere ownership solo bajo un protocolo explícito y consolida recurso cerrado exactamente una vez y estado final observable.

- **Cadena de suministro de Quicklisp**  
  *Familia:* `flujo de transformación`  
  Para Cadena de suministro de Quicklisp, la arquitectura de Seguridad del lenguaje extensible resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, garantizando artefacto versionado cuya composición puede reproducirse.

- **Package locks**  
  *Familia:* `planificación de trabajo`  
  Package locks gestiona Seguridad del lenguaje extensible de modo que adquiere o señaliza sincronización, publica cambios y libera en un orden definido, produciendo estado visible sin carreras y progreso dentro del límite acordado.

- **Disabling read-time evaluation**  
  *Familia:* `validación y decisión`  
  A través de Disabling read-time evaluation en Seguridad del lenguaje extensible, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### 📑 Sección: Entrega y operación (7 conceptos)

- **ASDF systems**  
  *Familia:* `flujo de interfaz`  
  ASDF systems en Entrega y operación: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, asegurando artefacto versionado cuya composición puede reproducirse.

- **Quicklisp dist**  
  *Familia:* `superficie de aplicación`  
  En Entrega y operación, Quicklisp dist resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado para entregar artefacto versionado cuya composición puede reproducirse.

- **Executable images**  
  *Familia:* `contratos coordinados`  
  Executable images aplica este mecanismo en Entrega y operación: lee, expande, compila o evalúa la forma conservando identidad de símbolos y condiciones, con valor, efecto y representación de imagen inspeccionables.

- **Cold start de imagen**  
  *Familia:* `flujo de interfaz`  
  El mecanismo de Cold start de imagen dentro de Entrega y operación activa, usa y transfiere ownership solo bajo un protocolo explícito y consolida recurso cerrado exactamente una vez y estado final observable.

- **Actualización sin perder estado**  
  *Familia:* `superficie de aplicación`  
  Para Actualización sin perder estado, la arquitectura de Entrega y operación lee, expande, compila o evalúa la forma conservando identidad de símbolos y condiciones, garantizando valor, efecto y representación de imagen inspeccionables.

- **Source registry configuration**  
  *Familia:* `contratos coordinados`  
  Source registry configuration gestiona Entrega y operación de modo que lee, expande, compila o evalúa la forma conservando identidad de símbolos y condiciones, produciendo valor, efecto y representación de imagen inspeccionables.

- **Image provenance manifests**  
  *Familia:* `flujo de interfaz`  
  A través de Image provenance manifests en Entrega y operación, el sistema lee, expande, compila o evalúa la forma conservando identidad de símbolos y condiciones manteniendo valor, efecto y representación de imagen inspeccionables.




---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
