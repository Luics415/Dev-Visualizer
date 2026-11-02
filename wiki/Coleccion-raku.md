# Raku (Rk)

> **Gramáticas, tipos, junctions, concurrencia, metaprogramación y herramientas.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `raku` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `ux-ui` |
| **Total de Conceptos** | **88 conceptos** |
| **Capitulos / Secciones** | **14 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/raku)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/raku-en-accion)


## Estudio de Caso Practico: Parsear una configuración con Grammar

> **Caso integrado de Raku:** Una gramática convierte configuración en AST, detecta una clave ambigua y recupera precedencia y mensajes de error antes de aplicar cambios.  
> El parser final distingue sintaxis, semántica y ejecución, y conserva Match para explicar cada diagnóstico.

### Fases de Ejecucion:
1. **Definir grammar** (Parsear una configuración con Grammar: etapa 1 de 5): `grammar Config { token TOP { <pair>* } }` -> Sintaxis reconocible. *La etapa conserva un contrato explícito para que el siguiente paso de Raku no dependa de supuestos ocultos.*
2. **Construir AST** (Parsear una configuración con Grammar: etapa 2 de 5): `class Actions { method pair($/) { make Pair.new(...) } }` -> AST tipado. *La etapa conserva un contrato explícito para que el siguiente paso de Raku no dependa de supuestos ocultos.*
3. **Detectar ambigüedad** (Parsear una configuración con Grammar: etapa 3 de 5): `mode = fast = unsafe` -> Configuración rechazada. *El caso hace visible el fallo de Raku; no continúa como si la evidencia fuera válida.*
4. **Ajustar regla y mensaje** (Parsear una configuración con Grammar: etapa 4 de 5): `rule pair { <key> '=' <value> $ }` -> Parser recuperado. *La recuperación de Raku corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Aplicar con pruebas** (Parsear una configuración con Grammar: etapa 5 de 5): `ok Config.parse($text, :actions($a));` -> Configuración segura. *La etapa conserva un contrato explícito para que el siguiente paso de Raku no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (88)

### Seccion: Lenguaje (5 conceptos)

- **Sigils y containers**  
  *Familia:* `análisis y emisión`  
  Sigils y containers procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Tipos graduales**  
  *Familia:* `despacho de runtime`  
  Para entender Tipos graduales, se delimita texto fuente, contexto léxico y reglas del lenguaje. La operación reconoce estructura, comprueba contratos y produce una representación ejecutable hasta producir significado bien formado con errores localizados.

- **Junctions**  
  *Familia:* `flujo de interfaz`  
  El mecanismo de Junctions recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Signatures**  
  *Familia:* `análisis y emisión`  
  Signatures conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Control de flujo**  
  *Familia:* `despacho de runtime`  
  En Control de flujo, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Despacho y objetos (5 conceptos)

- **Multi dispatch**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Multi dispatch recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Roles**  
  *Familia:* `análisis y emisión`  
  Roles conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Metamodelo**  
  *Familia:* `despacho de runtime`  
  En Metamodelo, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.

- **Traits**  
  *Familia:* `jerarquía y dependencias`  
  La función de Traits parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Introspection**  
  *Familia:* `análisis y emisión`  
  Introspection estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Parsing (5 conceptos)

- **Regex de Raku**  
  *Familia:* `despacho de runtime`  
  El recorrido de Regex de Raku toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Tokens**  
  *Familia:* `jerarquía y dependencias`  
  Tokens procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Rules**  
  *Familia:* `análisis y emisión`  
  Para entender Rules, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Grammars**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Grammars recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Actions y AST**  
  *Familia:* `jerarquía y dependencias`  
  Actions y AST conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Errores y diagnóstico (5 conceptos)

- **Failures**  
  *Familia:* `evidencia y latencia`  
  La función de Failures parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Exceptions**  
  *Familia:* `máquina de estados`  
  Exceptions estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **REPL**  
  *Familia:* `secuencia operativa`  
  El recorrido de REPL toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.

- **Tracing**  
  *Familia:* `evidencia y latencia`  
  Tracing procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Pruebas**  
  *Familia:* `espectro de verificación`  
  Para entender Pruebas, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.


### Seccion: Producción (5 conceptos)

- **Promise**  
  *Familia:* `máquina de estados`  
  El mecanismo de Promise recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Supply**  
  *Familia:* `mapa de memoria`  
  Supply conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Channels**  
  *Familia:* `tejido de eventos`  
  En Channels, tareas con dependencias, recursos compartidos y una señal de cancelación ingresa al flujo donde ordena trabajo y sincronización sin ocultar intercalados posibles para consolidar progreso concurrente con ownership y terminación observables.

- **Modules**  
  *Familia:* `pasaporte del artefacto`  
  La función de Modules parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Precompilation**  
  *Familia:* `análisis y emisión`  
  Precompilation estructura texto fuente, contexto léxico y reglas del lenguaje en el sistema: reconoce estructura, comprueba contratos y produce una representación ejecutable, garantizando significado bien formado con errores localizados.


### Seccion: Modelo de objetos y metamodelo (7 conceptos)

- **HOW y WHAT**  
  *Familia:* `flujo de transformación`  
  HOW y WHAT en Modelo de objetos y metamodelo: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Mixins en runtime**  
  *Familia:* `despacho de runtime`  
  En Modelo de objetos y metamodelo, Mixins en runtime resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Submethods**  
  *Familia:* `jerarquía y dependencias`  
  Submethods aplica este mecanismo en Modelo de objetos y metamodelo: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **Delegación con handles**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Delegación con handles dentro de Modelo de objetos y metamodelo resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Metaclases personalizadas**  
  *Familia:* `despacho de runtime`  
  Para Metaclases personalizadas, la arquitectura de Modelo de objetos y metamodelo resuelve composición, restricciones y representación antes de aceptar la instancia, garantizando estructura válida cuyas operaciones permitidas están explícitas.

- **Role composition conflicts**  
  *Familia:* `jerarquía y dependencias`  
  Role composition conflicts gestiona Modelo de objetos y metamodelo de modo que resuelve composición, restricciones y representación antes de aceptar la instancia, produciendo estructura válida cuyas operaciones permitidas están explícitas.

- **BUILD and TWEAK lifecycle**  
  *Familia:* `análisis y emisión`  
  A través de BUILD and TWEAK lifecycle en Modelo de objetos y metamodelo, el sistema resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado manteniendo artefacto versionado cuya composición puede reproducirse.


### Seccion: Sistema de tipos expresivo (6 conceptos)

- **Subset types**  
  *Familia:* `validación y decisión`  
  Subset types en Sistema de tipos expresivo: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Coercion types**  
  *Familia:* `jerarquía y dependencias`  
  En Sistema de tipos expresivo, Coercion types resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Parametric roles**  
  *Familia:* `análisis y emisión`  
  Parametric roles aplica este mecanismo en Sistema de tipos expresivo: instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, con señal que permite localizar componente, versión y duración del problema.

- **Definite y undefined values**  
  *Familia:* `validación y decisión`  
  El mecanismo de Definite y undefined values dentro de Sistema de tipos expresivo resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Contratos where**  
  *Familia:* `jerarquía y dependencias`  
  Para Contratos where, la arquitectura de Sistema de tipos expresivo evalúa precondiciones y combina restricciones antes de comprometer estado, garantizando valor aceptado con garantía explícita o error localizado.

- **Native numeric types**  
  *Familia:* `análisis y emisión`  
  Native numeric types gestiona Sistema de tipos expresivo de modo que resuelve composición, restricciones y representación antes de aceptar la instancia, produciendo estructura válida cuyas operaciones permitidas están explícitas.


### Seccion: Despacho avanzado (7 conceptos)

- **Proto candidates**  
  *Familia:* `despacho de runtime`  
  Proto candidates en Despacho avanzado: filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones, asegurando un candidato trazable cuya precedencia explica el comportamiento.

- **Constraints de candidatos**  
  *Familia:* `pasaporte del artefacto`  
  En Despacho avanzado, Constraints de candidatos evalúa precondiciones y combina restricciones antes de comprometer estado para entregar valor aceptado con garantía explícita o error localizado.

- **Samewith y nextwith**  
  *Familia:* `comparativa técnica`  
  Samewith y nextwith aplica este mecanismo en Despacho avanzado: filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones, con un candidato trazable cuya precedencia explica el comportamiento.

- **Redispatch**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Redispatch dentro de Despacho avanzado filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones y consolida un candidato trazable cuya precedencia explica el comportamiento.

- **Ambigüedad de multi dispatch**  
  *Familia:* `despacho de runtime`  
  Para Ambigüedad de multi dispatch, la arquitectura de Despacho avanzado filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones, garantizando un candidato trazable cuya precedencia explica el comportamiento.

- **Multi dispatch cache invalidation**  
  *Familia:* `memoria intermedia`  
  Multi dispatch cache invalidation gestiona Despacho avanzado de modo que consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, produciendo reutilización medible sin cambiar el resultado funcional.

- **callsame candidate traversal**  
  *Familia:* `comparativa técnica`  
  A través de callsame candidate traversal en Despacho avanzado, el sistema filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones manteniendo un candidato trazable cuya precedencia explica el comportamiento.


### Seccion: Gramáticas de producción (7 conceptos)

- **Proto regex y alternación longest-token**  
  *Familia:* `evidencia y latencia`  
  Proto regex y alternación longest-token en Gramáticas de producción: tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, asegurando árbol, match o diagnóstico consumible por la siguiente etapa.

- **Backtracking controlado**  
  *Familia:* `acumulación de recursos`  
  En Gramáticas de producción, Backtracking controlado tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación para entregar árbol, match o diagnóstico consumible por la siguiente etapa.

- **Dynamic variables en actions**  
  *Familia:* `secuencia operativa`  
  Dynamic variables en actions aplica este mecanismo en Gramáticas de producción: tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, con árbol, match o diagnóstico consumible por la siguiente etapa.

- **Errores de parsing localizados**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Errores de parsing localizados dentro de Gramáticas de producción tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación y consolida árbol, match o diagnóstico consumible por la siguiente etapa.

- **Optimización de grammars**  
  *Familia:* `cuadrícula paralela`  
  Para Optimización de grammars, la arquitectura de Gramáticas de producción tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, garantizando árbol, match o diagnóstico consumible por la siguiente etapa.

- **Actions object separation**  
  *Familia:* `flujo de transformación`  
  Actions object separation gestiona Gramáticas de producción de modo que resuelve composición, restricciones y representación antes de aceptar la instancia, produciendo estructura válida cuyas operaciones permitidas están explícitas.

- **Backtracking control in protoregexes**  
  *Familia:* `acumulación de recursos`  
  A través de Backtracking control in protoregexes en Gramáticas de producción, el sistema tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación manteniendo árbol, match o diagnóstico consumible por la siguiente etapa.


### Seccion: Concurrencia reactiva (7 conceptos)

- **Supply live y on-demand**  
  *Familia:* `planificación de trabajo`  
  Supply live y on-demand en Concurrencia reactiva: encola, planifica y reanuda unidades conservando causalidad y propagación de error, asegurando resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Tap y multicasting**  
  *Familia:* `análisis y emisión`  
  En Concurrencia reactiva, Tap y multicasting propaga elementos, aplica ventana o transformación y regula producción con demanda para entregar salida ordenada con memoria y latencia acotadas.

- **React y whenever**  
  *Familia:* `cola y consumidor`  
  React y whenever aplica este mecanismo en Concurrencia reactiva: encola, planifica y reanuda unidades conservando causalidad y propagación de error, con resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Races con Promise.anyof**  
  *Familia:* `máquina de estados`  
  El mecanismo de Races con Promise.anyof dentro de Concurrencia reactiva encola, planifica y reanuda unidades conservando causalidad y propagación de error y consolida resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Backpressure explícita**  
  *Familia:* `planificación de trabajo`  
  Para Backpressure explícita, la arquitectura de Concurrencia reactiva propaga elementos, aplica ventana o transformación y regula producción con demanda, garantizando salida ordenada con memoria y latencia acotadas.

- **react and whenever cancellation**  
  *Familia:* `cola y consumidor`  
  react and whenever cancellation gestiona Concurrencia reactiva de modo que encola, planifica y reanuda unidades conservando causalidad y propagación de error, produciendo resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Scheduler selection**  
  *Familia:* `telar relacional`  
  A través de Scheduler selection en Concurrencia reactiva, el sistema encola, planifica y reanuda unidades conservando causalidad y propagación de error manteniendo resultado, cancelación o reinicio visibles para el supervisor correcto.


### Seccion: Testing y diagnóstico (7 conceptos)

- **Test plans**  
  *Familia:* `espectro de verificación`  
  Test plans en Testing y diagnóstico: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Pruebas de gramáticas**  
  *Familia:* `validación y decisión`  
  En Testing y diagnóstico, Pruebas de gramáticas ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **Rakudo debugger**  
  *Familia:* `evidencia y latencia`  
  Rakudo debugger aplica este mecanismo en Testing y diagnóstico: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **MoarVM profiler**  
  *Familia:* `aislamiento sobre host`  
  El mecanismo de MoarVM profiler dentro de Testing y diagnóstico instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución y consolida señal que permite localizar componente, versión y duración del problema.

- **Detección de leaks**  
  *Familia:* `mapa de memoria`  
  Para Detección de leaks, la arquitectura de Testing y diagnóstico ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Test plan contracts**  
  *Familia:* `espectro de verificación`  
  Test plan contracts gestiona Testing y diagnóstico de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **Concurrent failure reproducibility**  
  *Familia:* `validación y decisión`  
  A través de Concurrent failure reproducibility en Testing y diagnóstico, el sistema ejecuta camino normal, límite y fallo mientras captura todos los efectos observables manteniendo evidencia repetible que distingue comportamiento correcto de una regresión.


### Seccion: NativeCall e interoperabilidad (7 conceptos)

- **Firmas NativeCall**  
  *Familia:* `despacho de runtime`  
  Firmas NativeCall en NativeCall e interoperabilidad: serializa, negocia, transmite y traduce errores u ownership en la frontera, asegurando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Structs y unions nativos**  
  *Familia:* `análisis y emisión`  
  En NativeCall e interoperabilidad, Structs y unions nativos serializa, negocia, transmite y traduce errores u ownership en la frontera para entregar respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Callbacks hacia Raku**  
  *Familia:* `jerarquía y dependencias`  
  Callbacks hacia Raku aplica este mecanismo en NativeCall e interoperabilidad: serializa, negocia, transmite y traduce errores u ownership en la frontera, con respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Gestión de buffers**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Gestión de buffers dentro de NativeCall e interoperabilidad propaga elementos, aplica ventana o transformación y regula producción con demanda y consolida salida ordenada con memoria y latencia acotadas.

- **Compatibilidad ABI**  
  *Familia:* `análisis y emisión`  
  Para Compatibilidad ABI, la arquitectura de NativeCall e interoperabilidad serializa, negocia, transmite y traduce errores u ownership en la frontera, garantizando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **CStruct memory layout**  
  *Familia:* `jerarquía y dependencias`  
  CStruct memory layout gestiona NativeCall e interoperabilidad de modo que consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, produciendo reutilización medible sin cambiar el resultado funcional.

- **Foreign memory ownership**  
  *Familia:* `despacho de runtime`  
  A través de Foreign memory ownership en NativeCall e interoperabilidad, el sistema consulta, calcula ausencias y publica el nuevo valor junto con su invalidador manteniendo reutilización medible sin cambiar el resultado funcional.


### Seccion: Módulos y distribución (7 conceptos)

- **META6.json**  
  *Familia:* `configuración declarativa`  
  META6.json en Módulos y distribución: codifica campos en orden definido y reconstruye validando versión y rangos, asegurando representación interoperable que conserva significado al hacer round trip.

- **Zef**  
  *Familia:* `flujo de transformación`  
  En Módulos y distribución, Zef resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado para entregar artefacto versionado cuya composición puede reproducirse.

- **Repositorios de módulos**  
  *Familia:* `constelación de mecanismos`  
  Repositorios de módulos aplica este mecanismo en Módulos y distribución: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, con artefacto versionado cuya composición puede reproducirse.

- **Versiones y auth**  
  *Familia:* `validación y decisión`  
  El mecanismo de Versiones y auth dentro de Módulos y distribución autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima y consolida decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Compunits y carga dinámica**  
  *Familia:* `flujo de transformación`  
  Para Compunits y carga dinámica, la arquitectura de Módulos y distribución resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, garantizando artefacto versionado cuya composición puede reproducirse.

- **CompUnit repositories**  
  *Familia:* `jerarquía y dependencias`  
  CompUnit repositories gestiona Módulos y distribución de modo que resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, produciendo artefacto versionado cuya composición puede reproducirse.

- **Version auth and api resolution**  
  *Familia:* `validación y decisión`  
  A través de Version auth and api resolution en Módulos y distribución, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### Seccion: Operación sobre MoarVM (8 conceptos)

- **Specialization de MoarVM**  
  *Familia:* `aislamiento sobre host`  
  Specialization de MoarVM en Operación sobre MoarVM: analiza, expande, especializa y baja a una representación ejecutable, asegurando código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **JIT logging**  
  *Familia:* `despacho de runtime`  
  En Operación sobre MoarVM, JIT logging instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución para entregar señal que permite localizar componente, versión y duración del problema.

- **Precomp repositories**  
  *Familia:* `flujo de transformación`  
  Precomp repositories aplica este mecanismo en Operación sobre MoarVM: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, con artefacto versionado cuya composición puede reproducirse.

- **Telemetría de GC**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Telemetría de GC dentro de Operación sobre MoarVM reserva, mapea o mueve memoria y registra quién debe reclamarla y consolida datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Empaquetado reproducible**  
  *Familia:* `flujo de interfaz`  
  Para Empaquetado reproducible, la arquitectura de Operación sobre MoarVM Rakudo analiza y MoarVM resuelve metamodelo, grammar, multi dispatch o trabajo reactivo, garantizando valor, Match, promesa o efecto con candidato y ownership identificados.

- **Spesh optimizer**  
  *Familia:* `evidencia y latencia`  
  Spesh optimizer gestiona Operación sobre MoarVM de modo que analiza, expande, especializa y baja a una representación ejecutable, produciendo código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Nursery garbage-collection tuning**  
  *Familia:* `despacho de runtime`  
  A través de Nursery garbage-collection tuning en Operación sobre MoarVM, el sistema Rakudo analiza y MoarVM resuelve metamodelo, grammar, multi dispatch o trabajo reactivo manteniendo valor, Match, promesa o efecto con candidato y ownership identificados.

- **MoarVM telemetry frames**  
  *Familia:* `aislamiento sobre host`  
  En el flujo operativo de Operación sobre MoarVM, MoarVM telemetry frames instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución para obtener señal que permite localizar componente, versión y duración del problema.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
