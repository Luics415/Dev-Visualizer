# Ruby (Rb)

> **Objetos, bloques, enumerables, metaprogramación, concurrencia, tooling y producción.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `ruby` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `laravel` |
| **Total de Conceptos** | **93 conceptos** |
| **Capitulos / Secciones** | **16 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/ruby)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/ruby-en-accion)


## Estudio de Caso Practico: Analizar registros con una tubería expresiva

> **Caso integrado de Ruby:** Un CLI Ruby lee eventos, los transforma con Enumerable, detecta una codificación corrupta y recupera el lote sin perder los registros válidos.  
> El reporte final enlaza cada agregado con las líneas aceptadas, rechazadas y su motivo.

### Fases de Ejecucion:
1. **Abrir el stream** (Analizar registros con una tubería expresiva: etapa 1 de 5): `File.foreach(path, encoding: 'UTF-8')` -> Entrada acotada. *La etapa conserva un contrato explícito para que el siguiente paso de Ruby no dependa de supuestos ocultos.*
2. **Transformar eventos** (Analizar registros con una tubería expresiva: etapa 2 de 5): `eventos.filter_map { |linea| parsear(linea) }` -> Eventos normalizados. *La etapa conserva un contrato explícito para que el siguiente paso de Ruby no dependa de supuestos ocultos.*
3. **Detectar encoding inválido** (Analizar registros con una tubería expresiva: etapa 3 de 5): `invalid byte sequence in UTF-8` -> Lote pausado con ubicación. *El caso hace visible el fallo de Ruby; no continúa como si la evidencia fuera válida.*
4. **Aislar y continuar** (Analizar registros con una tubería expresiva: etapa 4 de 5): `linea.scrub.then { |s| parsear_seguro(s) }` -> Flujo recuperado. *La recuperación de Ruby corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Emitir resumen** (Analizar registros con una tubería expresiva: etapa 5 de 5): `eventos.tally.sort_by { |_k, v| -v }` -> Reporte reproducible. *La etapa conserva un contrato explícito para que el siguiente paso de Ruby no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (93)

### Seccion: Ruby esencial (5 conceptos)

- **Objetos y mensajes**  
  *Familia:* `despacho de runtime`  
  La función de Objetos y mensajes parte de un mensaje versionado, un destino y límites de tiempo. Su ejecución serializa, transporta y valida el intercambio a través de una frontera remota y produce una respuesta correlacionada o un estado convergente verificable.

- **Variables y constantes**  
  *Familia:* `anatomía del concepto`  
  Variables y constantes estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Símbolos y strings**  
  *Familia:* `flujo de ejecución`  
  El recorrido de Símbolos y strings toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Arrays y hashes**  
  *Familia:* `despacho de runtime`  
  Arrays y hashes procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Control de flujo**  
  *Familia:* `anatomía del concepto`  
  Para entender Control de flujo, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Modelo de objetos (5 conceptos)

- **Clases e instancias**  
  *Familia:* `análisis y emisión`  
  Para entender Clases e instancias, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.

- **Módulos y mixins**  
  *Familia:* `constelación de mecanismos`  
  El mecanismo de Módulos y mixins recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **Lookup de métodos**  
  *Familia:* `validación y decisión`  
  Lookup de métodos conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Singleton classes**  
  *Familia:* `análisis y emisión`  
  En Singleton classes, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.

- **Visibilidad**  
  *Familia:* `jerarquía y dependencias`  
  La función de Visibilidad parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.


### Seccion: Composición idiomática (5 conceptos)

- **Bloques, Proc y lambda**  
  *Familia:* `flujo de transformación`  
  Bloques, Proc y lambda estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Enumerable**  
  *Familia:* `flujo de ejecución`  
  El recorrido de Enumerable toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Pattern matching**  
  *Familia:* `jerarquía y dependencias`  
  Pattern matching procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Excepciones**  
  *Familia:* `flujo de transformación`  
  Para entender Excepciones, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.

- **Gemas y Bundler**  
  *Familia:* `flujo de ejecución`  
  El mecanismo de Gemas y Bundler recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Diagnóstico (5 conceptos)

- **Stack traces**  
  *Familia:* `evidencia y latencia`  
  Stack traces conecta valores con representación, dirección y tiempo de vida definidos con su runtime interno: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime hasta exponer estado accesible sin referencias colgantes ni corrupción.

- **IRB y debugger**  
  *Familia:* `diagnóstico operativo`  
  En IRB y debugger, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Warnings**  
  *Familia:* `secuencia operativa`  
  La función de Warnings parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Profiling y allocations**  
  *Familia:* `evidencia y latencia`  
  Profiling y allocations estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Pruebas con Minitest**  
  *Familia:* `espectro de verificación`  
  El recorrido de Pruebas con Minitest toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### Seccion: Producción (5 conceptos)

- **Ractors, threads y GVL**  
  *Familia:* `tejido de eventos`  
  El mecanismo de Ractors, threads y GVL recibe tareas con dependencias, recursos compartidos y una señal de cancelación y ordena trabajo y sincronización sin ocultar intercalados posibles, asegurando progreso concurrente con ownership y terminación observables.

- **I/O y encoding**  
  *Familia:* `mapa de memoria`  
  I/O y encoding conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Seguridad de dependencias**  
  *Familia:* `validación y decisión`  
  En Seguridad de dependencias, una identidad, un recurso protegido y una política explícita ingresa al flujo donde evalúa confianza, privilegios y datos antes de autorizar cada efecto para consolidar una decisión mínima y trazable que no revela secretos.

- **Documentación RDoc**  
  *Familia:* `pasaporte del artefacto`  
  La función de Documentación RDoc parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Versiones y despliegue**  
  *Familia:* `capas internas`  
  Versiones y despliegue estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Semántica del lenguaje (5 conceptos)

- **Todo valor es un objeto**  
  *Familia:* `despacho de runtime`  
  Explica por qué números, clases y nil reciben mensajes bajo un modelo uniforme. Todo valor es un objeto estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Verdad y nil**  
  *Familia:* `anatomía del concepto`  
  Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes.

- **Asignación paralela**  
  *Familia:* `flujo de ejecución`  
  Empaqueta y desempaqueta valores en una sola expresión respetando evaluación de la derecha.

- **Splat y double splat**  
  *Familia:* `despacho de runtime`  
  Expanden argumentos posicionales o keywords y hacen explícita la forma de una llamada flexible.

- **Refinements**  
  *Familia:* `anatomía del concepto`  
  Activan cambios léxicos sobre métodos sin contaminar globalmente todas las instancias de una clase.


### Seccion: Despacho dinámico (6 conceptos)

- **Method tables**  
  *Familia:* `análisis y emisión`  
  Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes.

- **Ancestors chain**  
  *Familia:* `despacho de runtime`  
  Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente.

- **method_missing**  
  *Familia:* `jerarquía y dependencias`  
  Intercepta mensajes no resueltos, pero debe conservar introspección y fallar claramente fuera de su contrato.

- **Super y forwarding**  
  *Familia:* `análisis y emisión`  
  Delega al siguiente método de la cadena preservando o reemplazando argumentos de forma deliberada.

- **Inline caches**  
  *Familia:* `despacho de runtime`  
  Recuerdan destinos recientes de una llamada para evitar repetir búsquedas cuando los tipos se mantienen.

- **Prepend en la cadena de ancestros**  
  *Familia:* `jerarquía y dependencias`  
  Para Prepend / en / cadena / ancestros, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, manteniendo el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.


### Seccion: Metaprogramación (7 conceptos)

- **define_method**  
  *Familia:* `análisis y emisión`  
  Crea métodos desde bloques capturando contexto sin construir código como texto. define_method procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **class_eval e instance_eval**  
  *Familia:* `despacho de runtime`  
  Cambian temporalmente self para modificar clases u objetos y exigen fronteras claras de confianza.

- **Hooks de clases y módulos**  
  *Familia:* `jerarquía y dependencias`  
  Observan herencia, inclusión y definición para registrar comportamiento en el momento correcto.

- **Introspection**  
  *Familia:* `análisis y emisión`  
  Consulta clase, métodos y parámetros para adaptar herramientas sin asumir estructura oculta.

- **Generación segura de DSL**  
  *Familia:* `despacho de runtime`  
  Limita operaciones disponibles y valida entradas para que una sintaxis expresiva no ejecute capacidades arbitrarias.

- **BasicObject para proxies**  
  *Familia:* `jerarquía y dependencias`  
  Para Basic / Object / proxies, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, manteniendo el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Source locations y trazabilidad**  
  *Familia:* `análisis y emisión`  
  Source / locations / trazabilidad coordina la ejecución: la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema hasta obtener estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.


### Seccion: Datos y enumeración (5 conceptos)

- **Enumeradores externos**  
  *Familia:* `flujo de transformación`  
  Exponen next y rewind para que quien consume controle el avance de una secuencia.

- **Lazy enumerators**  
  *Familia:* `jerarquía y dependencias`  
  Encadenan transformaciones bajo demanda y evitan materializar colecciones intermedias o infinitas.

- **Ranges**  
  *Familia:* `flujo de ejecución`  
  Representan intervalos inclusivos o exclusivos y delegan iteración a la capacidad de sucesión del valor.

- **Struct y Data**  
  *Familia:* `flujo de transformación`  
  Declaran portadores con campos conocidos, comparabilidad y, en Data, inmutabilidad orientada a valores.

- **Transformaciones funcionales**  
  *Familia:* `jerarquía y dependencias`  
  Componen map, filter y reduce sin mutar la colección original y mantienen intención visible.


### Seccion: Memoria y runtime (8 conceptos)

- **Object space**  
  *Familia:* `análisis y emisión`  
  Permite inspeccionar objetos vivos y finalizadores, con un costo que desaconseja recorrerlo en rutas críticas.

- **Generational garbage collection**  
  *Familia:* `validación y decisión`  
  Recolecta objetos jóvenes con mayor frecuencia aprovechando que la mayoría muere pronto.

- **Copy-on-write friendly GC**  
  *Familia:* `planificación de trabajo`  
  Organiza metadatos para que procesos derivados compartan páginas hasta que realmente las modifiquen.

- **Shape trees**  
  *Familia:* `jerarquía y dependencias`  
  Comparten descripciones de variables de instancia y aceleran acceso cuando los objetos evolucionan consistentemente.

- **YJIT**  
  *Familia:* `despacho de runtime`  
  Compila rutas calientes a código nativo y vuelve al intérprete cuando una suposición deja de cumplirse.

- **Write barriers**  
  *Familia:* `planificación de trabajo`  
  Para Write / barriers, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, manteniendo progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Compaction**  
  *Familia:* `mapa de memoria`  
  Compaction coordina la ejecución: el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica hasta obtener una mejora medible con distribución, entorno y comparación documentados.

- **GC.stat**  
  *Familia:* `análisis y emisión`  
  Al operar con GC.stat, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, produciendo memoria válida durante toda la operación y recuperada al terminar su último uso.


### Seccion: Concurrencia y asincronía (6 conceptos)

- **Fibers**  
  *Familia:* `planificación de trabajo`  
  Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo.

- **Fiber scheduler**  
  *Familia:* `cola y consumidor`  
  Intercala I/O no bloqueante detrás de APIs familiares y requiere operaciones compatibles.

- **Mutex y condition variables**  
  *Familia:* `máquina de estados`  
  Protegen invariantes compartidos y permiten esperar una condición dentro de un bucle de verificación.

- **Colas thread-safe**  
  *Familia:* `planificación de trabajo`  
  Transfieren ownership de tareas entre productores y consumidores aplicando capacidad cuando hace falta.

- **Aislamiento con Ractor**  
  *Familia:* `tejido de eventos`  
  Restringe objetos compartidos para ejecutar en paralelo mediante mensajes y valores shareable.

- **Thread exception reporting**  
  *Familia:* `máquina de estados`  
  Para Thread / exception / reporting, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, manteniendo progreso concurrente con ownership y terminación comprobables para cada tarea.


### Seccion: Web y red (7 conceptos)

- **Contrato Rack**  
  *Familia:* `ida y vuelta`  
  Representa una petición como environment y exige una respuesta status, headers y body cerrable.

- **Servidores Puma**  
  *Familia:* `planificación de trabajo`  
  Combinan procesos y threads, por lo que pool de conexiones y código deben tolerar concurrencia.

- **Net**  
  *Familia:* `flujo de transformación`  
  HTTP::Construye clientes con timeouts, TLS y reutilización explícitos para no quedar bloqueados indefinidamente.

- **Sockets**  
  *Familia:* `topología y tráfico`  
  Exponen streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre.

- **Streaming de respuestas**  
  *Familia:* `ida y vuelta`  
  Entrega fragmentos antes de completar el cuerpo controlando backpressure y desconexiones del cliente.

- **Hijacking de conexiones Rack**  
  *Familia:* `flujo de transformación`  
  Para Hijacking / conexiones / Rack, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, manteniendo una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **DNS y timeouts por fase**  
  *Familia:* `topología y tráfico`  
  DNS / timeouts / por / fase coordina la ejecución: la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales hasta obtener una respuesta o estructura interna completa que conserva correlación y estado del intercambio.


### Seccion: Persistencia y formatos (5 conceptos)

- **JSON y YAML**  
  *Familia:* `configuración declarativa`  
  Serializan datos portables, pero requieren validar tipos y deshabilitar construcción arbitraria de objetos.

- **Marshal y sus riesgos**  
  *Familia:* `análisis y emisión`  
  Reconstruye objetos Ruby y nunca debe cargar bytes provenientes de una fuente no confiable.

- **Adaptadores SQL**  
  *Familia:* `consulta e índice`  
  Convierten parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas.

- **Migraciones de esquema**  
  *Familia:* `secuencia operativa`  
  Versionan cambios estructurales con una secuencia compatible con aplicaciones durante el despliegue.

- **Transacciones y bloqueos**  
  *Familia:* `pasaporte del artefacto`  
  Agrupan escrituras atómicas y coordinan competidores sin extender la sección crítica innecesariamente.


### Seccion: Pruebas y diseño (5 conceptos)

- **RSpec**  
  *Familia:* `espectro de verificación`  
  Expresa ejemplos y expectativas con hooks acotados para que cada fallo explique un comportamiento.

- **Property testing**  
  *Familia:* `validación y decisión`  
  Genera entradas y reduce contraejemplos para comprobar invariantes más allá de casos elegidos manualmente.

- **Dobles verificados**  
  *Familia:* `evidencia y latencia`  
  Comprueban que métodos simulados existen realmente y evitan contratos ficticios en las pruebas.

- **Mutation testing**  
  *Familia:* `espectro de verificación`  
  Modifica operadores y ramas para revelar aserciones que ejecutan código sin detectar resultados incorrectos.

- **Arquitectura hexagonal en Ruby**  
  *Familia:* `anatomía del concepto`  
  Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables.


### Seccion: Seguridad del ecosistema (8 conceptos)

- **Bundler audit**  
  *Familia:* `validación y decisión`  
  Compara dependencias bloqueadas con avisos conocidos y obliga a evaluar actualización o mitigación.

- **Firmas de gemas**  
  *Familia:* `pasaporte del artefacto`  
  Aportan procedencia solo cuando claves, política de confianza y verificación están configuradas coherentemente.

- **Deserialización insegura**  
  *Familia:* `análisis y emisión`  
  Impide que formatos capaces de instanciar objetos procesen contenido controlado externamente.

- **Command injection**  
  *Familia:* `espectro de verificación`  
  Usa APIs con argumentos separados y listas permitidas en lugar de interpolar datos en un shell.

- **Gestión de credenciales**  
  *Familia:* `topología y tráfico`  
  Cifra secretos en reposo, limita acceso y permite rotarlos sin reconstruir toda la aplicación.

- **RubyGems trusted publishing**  
  *Familia:* `mapa de memoria`  
  Para Ruby / Gems / trusted / publishing, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, manteniendo un artefacto reproducible, verificable y promovible entre entornos.

- **Tainted archive extraction**  
  *Familia:* `despacho de runtime`  
  Tainted / archive / extraction coordina la ejecución: el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos hasta obtener solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **Template injection**  
  *Familia:* `validación y decisión`  
  Al operar con Template / injection, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos, produciendo solo la capacidad permitida ejecutada con una decisión que puede auditarse.


### Seccion: Empaquetado y operación (6 conceptos)

- **Gemspec**  
  *Familia:* `pasaporte del artefacto`  
  Declara archivos, plataforma, licencia y dependencias que forman el contrato distribuible de una gema.

- **Resolución de dependencias**  
  *Familia:* `ciclo de vida`  
  Encuentra un conjunto compatible de versiones y lo fija para que instalaciones posteriores sean repetibles.

- **Version managers**  
  *Familia:* `evidencia y latencia`  
  Seleccionan intérprete y gemset por proyecto sin convertir el entorno personal en requisito oculto.

- **Boot time y eager loading**  
  *Familia:* `pasaporte del artefacto`  
  Equilibra carga inicial, copy-on-write y disponibilidad de constantes antes de aceptar trabajo.

- **Métricas y trazas en procesos Ruby**  
  *Familia:* `ciclo de vida`  
  Correlacionan petición, asignaciones, GC e I/O para explicar latencia en producción.

- **Fork safety after preload**  
  *Familia:* `evidencia y latencia`  
  Para Fork / safety / after / preload, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, manteniendo un artefacto reproducible, verificable y promovible entre entornos.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
