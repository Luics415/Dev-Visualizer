# Prolog (PL)

> **Términos, unificación, resolución, backtracking, restricciones, tabling, gramáticas y producción.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `prolog` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `prolog` |
| **Total de Conceptos** | **120 conceptos** |
| **Capitulos / Secciones** | **24 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/prolog)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/prolog-en-accion)


## Estudio de Caso Practico: Prolog en acción

> **Caso integrado · Planificador explicable de respuesta a incidentes:** Una consulta asigna personas distintas a roles médicos, técnicos y logísticos, respeta turnos, habilidades, rutas y SLA, explica por qué una rama falla y entrega el mejor plan con su árbol de prueba.  
> La respuesta final demuestra que cada rol fue cubierto una vez, ningún integrante se duplicó, el tiempo total cumple el SLA y cada decisión puede rastrearse hasta hechos y reglas concretos.

### Fases de Ejecucion:
1. **Definir el contrato** (El módulo expone solo el caso de uso): `:- module(rescue_plan, [best_plan/2, explain/2]).` -> frontera reusable. *Una interfaz pequeña permite cambiar la estrategia de búsqueda sin romper consumidores.*
2. **Cargar hechos versionados** (Equipo, habilidades y turnos entran como relaciones): `responder(4, [medical, logistics], day).` -> base reproducible. *Los hechos describen el mundo conocido; no ejecutan una decisión por sí solos.*
3. **Analizar la solicitud** (Una DCG convierte tokens en dominio): `phrase(request(Incident), Tokens).` -> petición estructurada. *Separar parsing de inferencia mantiene comprobable cada frontera.*
4. **Validar la frontera** (Solo entra un término cerrado y permitido): `must_be(ground, Incident).` -> goal seguro. *Los datos del cliente nunca se convierten directamente en código ejecutable.*
5. **Derivar requisitos** (Las reglas traducen el incidente a roles): `required(i17, [medical, hazmat, logistics]).` -> requisitos demostrados. *La salida es una consecuencia de hechos y reglas, no una lista hardcodeada en la UI.*
6. **Generar candidatos** (Cada rol abre alternativas elegibles): `eligible(Role, Id) :- responder(Id, Skills, day), memberchk(Role, Skills).` -> alternativas justificadas. *El predicado genera y verifica según el modo con que se consulte.*
7. **Construir el plan** (La recursión asigna sin perder contexto): `assign([Role|Rs], Used, [Id-Role|Plan]) :- eligible(Role, Id), ...` -> plan parcial. *El acumulador hace explícita la invariante de personas ya utilizadas.*
8. **Propagar restricciones** (CLP(FD) reduce el espacio antes de enumerar): `Ids ins 1..12, all_distinct(Ids), sum(ETAs, #=<, 45).` -> búsqueda acotada. *Modelar y buscar son fases distintas: primero se publica conocimiento, luego se etiqueta.*
9. **Resolver rutas** (Tabling atraviesa una red con ciclos): `:- table reachable/3.` -> rutas terminantes. *El identificador nexo_sur es solo un guiño textual; la escena no usa marcas ni recursos ajenos.*
10. **Detectar contradicción** (La primera rama duplica una persona): `all_distinct([4, 4, _]).` -> rama descartada. *El fallo es un resultado lógico esperado, no una excepción del runtime.*
11. **Retroceder** (El trail restaura bindings y activa otra opción): `eligible(Role, NextId).` -> búsqueda recuperada. *Backtracking deshace bindings lógicos; no revierte automáticamente archivos u otros efectos externos.*
12. **Completar soluciones** (Labeling materializa planes factibles): `feasible_plan(Incident, Plan, Cost).` -> planes completos. *La enumeración ocurre después de que la propagación redujo los dominios.*
13. **Elegir el menor costo** (setof ordena todas las demostraciones): `setof(Cost-Plan, feasible_plan(I, Plan, Cost), [BestCost-Best|_]).` -> plan óptimo. *Con los mismos hechos y reglas, el criterio explícito produce el mismo ganador.*
14. **Construir la explicación** (La prueba también se convierte en dato): `explain(Best, proof(RuleIds)).` -> decisión auditable. *Una respuesta explicable conserva tanto el qué como el porqué.*
15. **Verificar y acotar** (Tests e inference limit protegen la operación): `call_with_inference_limit(best_plan(I, P), 100000, Status).` -> evidencia verde. *La ausencia de un límite convierte una consulta válida pero no terminante en un riesgo operativo.*
16. **Publicar el resultado** (HTTP entrega datos y prueba sin ejecutar goals externos): `reply_json_dict(_{plan:Best, eta:BestCost, proof:Rules}).` -> respuesta verificable. *assigned_roles coincide con required_roles, cada persona es única, ETA no supera 45 y la prueba no está vacía.*


---

## Catalogo Sistematico de Conceptos (120)

### Seccion: Primer contacto y ciclo de trabajo (5 conceptos)

- **SWI-Prolog estable**  
  *Familia:* `evidencia y latencia`  
  Instala una versión fijada y distingue el canal estable del canal de desarrollo.

- **Top level**  
  *Familia:* `consulta e índice`  
  Interpreta consultas, bindings, true, false, errores y solicitud de respuestas adicionales.

- **Archivos .pl y consulta**  
  *Familia:* `árbol de recursos`  
  Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo].

- **Editar, recargar y repetir**  
  *Familia:* `pasaporte del artefacto`  
  Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión.

- **Ayuda y documentación**  
  *Familia:* `topología y tráfico`  
  Encuentra predicados y contratos mediante help/1, apropos/1 y PlDoc.


### Seccion: Términos y sintaxis (5 conceptos)

- **Átomos y números**  
  *Familia:* `capas internas`  
  Reconoce constantes simbólicas, enteros, racionales y flotantes sin confundir representación con significado.

- **Variables**  
  *Familia:* `evidencia y latencia`  
  Comprende mayúsculas, _, variables anónimas, singletons y compartición.

- **Términos compuestos**  
  *Familia:* `flujo de transformación`  
  Modela datos con functor, aridad y argumentos.

- **Listas, pares y colas abiertas**  
  *Familia:* `cola y consumidor`  
  Interpreta [], [H|T], listas propias, impropias y parciales.

- **Operadores y precedencia**  
  *Familia:* `evidencia y latencia`  
  Entiende que los operadores cambian el parseo, no crean por sí mismos nueva semántica.


### Seccion: Hechos, reglas y consultas (5 conceptos)

- **Hechos**  
  *Familia:* `consulta e índice`  
  Declara relaciones que se aceptan sin premisas adicionales.

- **Reglas**  
  *Familia:* `telar relacional`  
  Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito.

- **Consultas y objetivos**  
  *Familia:* `jerarquía y dependencias`  
  Formula preguntas con variables y observa las sustituciones que constituyen cada respuesta.

- **Cláusulas y predicados**  
  *Familia:* `topología y tráfico`  
  Agrupa cláusulas por nombre y aridad usando indicadores como route/3.

- **Lectura lógica y operacional**  
  *Familia:* `consulta e índice`  
  Separa qué relación describe una regla de cómo el motor la recorre.


### Seccion: Unificación e identidad (5 conceptos)

- **Unificación implícita**  
  *Familia:* `jerarquía y dependencias`  
  Observa cómo una llamada se compara con la cabeza de cada cláusula.

- **Bindings y variables compartidas**  
  *Familia:* `comparativa técnica`  
  Sigue cómo una sustitución afecta todas las apariciones de una variable.

- **=/2, ==/2 y =@=/2**  
  *Familia:* `evidencia y latencia`  
  Distingue unificar, comprobar identidad y comparar variantes.

- **dif/2 frente a \=/2**  
  *Familia:* `secuencia operativa`  
  Conserva una desigualdad declarativa aun cuando los términos todavía no estén instanciados.

- **Occurs check y términos cíclicos**  
  *Familia:* `capas internas`  
  Comprende árboles racionales, portabilidad y unify_with_occurs_check/2.


### Seccion: Resolución y árbol de prueba (5 conceptos)

- **Demostración dirigida por objetivos**  
  *Familia:* `espectro de verificación`  
  Convierte una consulta en subobjetivos hasta llegar a hechos o built-ins.

- **Selección izquierda a derecha**  
  *Familia:* `validación y decisión`  
  Reconoce cómo el orden del cuerpo afecta terminación, efectos y rendimiento.

- **Orden de cláusulas**  
  *Familia:* `evidencia y latencia`  
  Sigue el intento de alternativas de arriba hacia abajo.

- **Puntos de elección y trail**  
  *Familia:* `espectro de verificación`  
  Identifica qué bindings deben restaurarse si una rama falla.

- **Búsqueda en profundidad**  
  *Familia:* `validación y decisión`  
  Explica por qué una respuesta existente puede quedar oculta tras una rama infinita.


### Seccion: Nondeterminismo y modos (5 conceptos)

- **Múltiples respuestas**  
  *Familia:* `ida y vuelta`  
  Solicita alternativas con punto y coma y distingue una solución de la enumeración completa.

- **Generadores y verificadores**  
  *Familia:* `consulta e índice`  
  Diseña predicados que generan candidatos y otros que validan relaciones.

- **Modos de uso**  
  *Familia:* `análisis y emisión`  
  Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos.

- **Determinismo**  
  *Familia:* `capas internas`  
  Distingue det, semidet, multi y nondet.

- **Relaciones reversibles**  
  *Familia:* `topología y tráfico`  
  Evalúa cuándo un predicado funciona en varias direcciones y cuándo exige instanciación.


### Seccion: Recursión y terminación (5 conceptos)

- **Caso base**  
  *Familia:* `consulta e índice`  
  Detiene la relación cuando la estructura alcanza su forma mínima.

- **Paso recursivo**  
  *Familia:* `acumulación de recursos`  
  Reduce el problema preservando el significado de la relación.

- **Recursión estructural**  
  *Familia:* `jerarquía y dependencias`  
  Recorre listas y árboles siguiendo su construcción.

- **Acumuladores**  
  *Familia:* `evidencia y latencia`  
  Transporta estado explícito sin perder invariantes ni introducir reversión incorrecta.

- **Medida decreciente**  
  *Familia:* `capas internas`  
  Demuestra terminación según modos, orden de objetivos y tamaño de entrada.


### Seccion: Listas, árboles y estructuras simbólicas (5 conceptos)

- **member/2 y append/3**  
  *Familia:* `consulta e índice`  
  Aprende relaciones que pueden consultar, dividir o construir listas.

- **Listas diferencia**  
  *Familia:* `evidencia y latencia`  
  Representa concatenación mediante una cola lógica aún no cerrada.

- **Árboles algebraicos**  
  *Familia:* `jerarquía y dependencias`  
  Modela nodos y hojas con términos compuestos.

- **Conjuntos y asociaciones**  
  *Familia:* `secuencia operativa`  
  Elige listas ordenadas, ordsets, assoc u otra estructura según la operación.

- **Copia, variables y sharing**  
  *Familia:* `evidencia y latencia`  
  Usa copy_term/2, term_variables/2 y variantes sin romper identidad lógica.


### Seccion: Control declarativo e impuro (5 conceptos)

- **Conjunción y disyunción**  
  *Familia:* `capas internas`  
  Combina objetivos con coma y alternativas con punto y coma.

- **true y fail**  
  *Familia:* `secuencia operativa`  
  Expresa éxito neutro y fallo explícito.

- **If-then-else y once/1**  
  *Familia:* `flujo de ejecución`  
  Limita alternativas con alcance visible.

- **Negación como fallo**  
  *Familia:* `evidencia y latencia`  
  Usa \+/1 solo cuando la instanciación y el mundo cerrado sean apropiados.

- **Cuts verdes y rojos**  
  *Familia:* `secuencia operativa`  
  Diferencia una poda que conserva respuestas de otra que cambia el significado lógico.


### Seccion: Aritmética y orden (5 conceptos)

- **Evaluación con is/2**  
  *Familia:* `flujo de transformación`  
  Evalúa una expresión instanciada y unifica el resultado.

- **Comparaciones aritméticas**  
  *Familia:* `comparativa técnica`  
  Usa =:=, =\=, <, =<, > y >= sobre valores evaluables.

- **Comparación de términos**  
  *Familia:* `contratos coordinados`  
  Separa el orden estándar @< de una comparación numérica.

- **Tipos y errores numéricos**  
  *Familia:* `evidencia y latencia`  
  Reconoce instantiation, type, domain, evaluation y representation errors.

- **Límite de la aritmética tradicional**  
  *Familia:* `ida y vuelta`  
  Identifica cuándo is/2 rompe reversibilidad y conviene usar restricciones.


### Seccion: Soluciones y programación de orden superior (5 conceptos)

- **findall/3**  
  *Familia:* `secuencia operativa`  
  Reúne todas las instancias, produciendo una lista vacía si no hay respuestas.

- **bagof/3 y variables libres**  
  *Familia:* `evidencia y latencia`  
  Agrupa respuestas según variables no cuantificadas.

- **setof/3**  
  *Familia:* `capas internas`  
  Ordena y elimina duplicados de soluciones demostrables.

- **call/N y goals como datos**  
  *Familia:* `consulta e índice`  
  Construye comportamiento reusable sin convertir entradas externas en código.

- **maplist, include y foldl**  
  *Familia:* `configuración declarativa`  
  Eleva patrones habituales de recorrido preservando nondeterminismo y contexto.


### Seccion: Texto, términos e I/O (5 conceptos)

- **Átomos, strings y listas de códigos**  
  *Familia:* `capas internas`  
  Elige una representación textual según interoperabilidad y procesamiento.

- **Lectura y escritura de términos**  
  *Familia:* `consulta e índice`  
  Controla variables, quoting, precedencia y formato canónico.

- **Streams y encoding**  
  *Familia:* `cola y consumidor`  
  Abre archivos o conexiones declarando modo, codificación y opciones.

- **Limpieza garantizada**  
  *Familia:* `capas internas`  
  Usa setup_call_cleanup/3 para cerrar recursos ante éxito, fallo, cut o excepción.

- **Mensajes y formato**  
  *Familia:* `planificación de trabajo`  
  Separa salida de dominio, logging y diagnósticos mediante format/2 y el sistema de mensajes.


### Seccion: Gramáticas de cláusulas definidas (5 conceptos)

- **Reglas -->**  
  *Familia:* `evidencia y latencia`  
  Describe secuencias con una notación relacional orientada a gramáticas.

- **phrase/2 y phrase/3**  
  *Familia:* `anatomía del concepto`  
  Ejecuta una gramática sobre una entrada completa o con residuo.

- **Expansión a listas diferencia**  
  *Familia:* `secuencia operativa`  
  Hace visibles los dos argumentos que la traducción añade.

- **Tokenización y AST**  
  *Familia:* `análisis y emisión`  
  Transforma texto en una estructura comprobable sin mezclar parsing con efectos.

- **Parsing y generación**  
  *Familia:* `evidencia y latencia`  
  Aprovecha la misma relación para reconocer o producir secuencias cuando sea seguro.


### Seccion: CLP(FD) (5 conceptos)

- **Variables de dominio finito**  
  *Familia:* `validación y decisión`  
  Asocia enteros posibles sin enumerarlos inmediatamente.

- **Restricciones aritméticas**  
  *Familia:* `ida y vuelta`  
  Usa #=, #\=, #<, #=<, #> y #>=.

- **Propagación**  
  *Familia:* `topología y tráfico`  
  Reduce dominios al añadir conocimiento antes de iniciar la búsqueda.

- **Reificación y restricciones globales**  
  *Familia:* `planificación de trabajo`  
  Combina condiciones booleanas, all_distinct/1, element/3 y restricciones de planificación.

- **Labeling y optimización**  
  *Familia:* `secuencia operativa`  
  Separa el modelo de la estrategia que enumera o minimiza soluciones.


### Seccion: Otras restricciones y coroutining (5 conceptos)

- **CLP(Q)**  
  *Familia:* `ida y vuelta`  
  Mantiene relaciones exactas sobre racionales.

- **CLP(R)**  
  *Familia:* `flujo de transformación`  
  Modela restricciones sobre reales con límites numéricos explícitos.

- **CLP(B)**  
  *Familia:* `topología y tráfico`  
  Resuelve relaciones booleanas y fórmulas proposicionales.

- **Variables atribuidas**  
  *Familia:* `consulta e índice`  
  Adjunta información que participa en unificación y propagación.

- **Goals demorados**  
  *Familia:* `ida y vuelta`  
  Usa when/2 o mecanismos equivalentes sin ocultar condiciones de activación y terminación.


### Seccion: Tabling y terminación avanzada (5 conceptos)

- **Ejecución tabulada**  
  *Familia:* `telar relacional`  
  Guarda respuestas para evitar repetir una misma subconsulta.

- **Recursión izquierda**  
  *Familia:* `acumulación de recursos`  
  Suspende y reanuda variantes que en SLD ordinaria no terminarían.

- **Tabling por variante y subsunción**  
  *Familia:* `consulta e índice`  
  Define cuándo dos llamadas comparten una tabla.

- **Answer subsumption**  
  *Familia:* `capas internas`  
  Conserva respuestas agregadas, como el menor costo, en vez de todas las alternativas.

- **Well-founded e incremental tabling**  
  *Familia:* `evidencia y latencia`  
  Trata ciclos negativos y dependencias que cambian, marcándolos como extensiones de implementación.


### Seccion: Base dinámica y estado (5 conceptos)

- **Predicados dynamic**  
  *Familia:* `topología y tráfico`  
  Declara relaciones cuyas cláusulas pueden cambiar durante la ejecución.

- **asserta, assertz y retract**  
  *Familia:* `espectro de verificación`  
  Modifica hechos entendiendo orden, referencias y efectos persistentes.

- **Logical Update View**  
  *Familia:* `evidencia y latencia`  
  Define qué versión de las cláusulas observa una llamada ya iniciada.

- **Transacciones y snapshots**  
  *Familia:* `consulta e índice`  
  Agrupa cambios atómicos o consulta una vista estable en SWI-Prolog.

- **Estado explícito frente a base dinámica**  
  *Familia:* `máquina de estados`  
  Prefiere argumentos y estructuras puras cuando el estado no necesita ser global.


### Seccion: Módulos, librerías y portabilidad (5 conceptos)

- **Interfaz de módulo**  
  *Familia:* `flujo de interfaz`  
  Exporta únicamente los predicados que constituyen el contrato público.

- **Importación y calificación**  
  *Familia:* `pasaporte del artefacto`  
  Resuelve nombres sin depender accidentalmente del módulo user.

- **Meta-predicados y contexto**  
  *Familia:* `topología y tráfico`  
  Declara qué argumentos contienen goals para conservar el módulo del llamador.

- **Autoload, packs y dependencias**  
  *Familia:* `jerarquía y dependencias`  
  Gestiona bibliotecas sin esconder versiones o requisitos de ejecución.

- **ISO y dialectos reales**  
  *Familia:* `pasaporte del artefacto`  
  Contrasta ISO, SWI-Prolog, GNU Prolog y SICStus antes de prometer portabilidad.


### Seccion: Excepciones, límites y seguridad (5 conceptos)

- **Términos de error ISO**  
  *Familia:* `evidencia y latencia`  
  Diferencia errores de instanciación, tipo, dominio, existencia, permisos y recursos.

- **throw/1 y catch/3**  
  *Familia:* `espectro de verificación`  
  Propaga y recupera excepciones sin convertir fallos lógicos en errores.

- **Validación de frontera**  
  *Familia:* `validación y decisión`  
  Comprueba forma, tipos y grounding antes de entrar al núcleo relacional.

- **Límites de tiempo, profundidad e inferencias**  
  *Familia:* `flujo de transformación`  
  Acota consultas que podrían consumir recursos indefinidamente.

- **Datos no confiables**  
  *Familia:* `espectro de verificación`  
  Lee términos con opciones seguras y nunca ejecuta un goal recibido del cliente.


### Seccion: Pruebas y contratos (5 conceptos)

- **Unidades PlUnit**  
  *Familia:* `validación y decisión`  
  Agrupa pruebas reproducibles entre begin_tests/1 y end_tests/1.

- **Éxito, fallo y excepciones esperadas**  
  *Familia:* `evidencia y latencia`  
  Verifica los distintos resultados legítimos de una relación.

- **Conjuntos de respuestas**  
  *Familia:* `ida y vuelta`  
  Comprueba todas las soluciones sin depender del orden accidental.

- **Tests parametrizados y propiedades**  
  *Familia:* `espectro de verificación`  
  Explora múltiples términos conservando límites de generación.

- **Pruebas desde CLI**  
  *Familia:* `validación y decisión`  
  Ejecuta la suite con código de salida útil para CI.


### Seccion: Debugging y diagnóstico (5 conceptos)

- **Modelo Byrd de cuatro puertos**  
  *Familia:* `topología y tráfico`  
  Sigue call, exit, redo y fail.

- **Trace y debug**  
  *Familia:* `evidencia y latencia`  
  Elige entre recorrido exhaustivo y parada en puntos de interés.

- **Spy points y breakpoints**  
  *Familia:* `secuencia operativa`  
  Aísla predicados o ubicaciones sin recorrer todo el árbol.

- **Warnings de determinismo y singletons**  
  *Familia:* `mapa de memoria`  
  Convierte señales del compilador en correcciones verificables.

- **Cross-referencer y llamadas indefinidas**  
  *Familia:* `evidencia y latencia`  
  Detecta dependencias, imports faltantes y código no alcanzable.


### Seccion: Rendimiento e internals (5 conceptos)

- **Warren Abstract Machine**  
  *Familia:* `despacho de runtime`  
  Comprende frames, choice points, heap y trail como modelo de implementación, no como semántica.

- **Indexación de cláusulas**  
  *Familia:* `consulta e índice`  
  Organiza cabezas para reducir alternativas sin alterar respuestas.

- **Last-call optimization**  
  *Familia:* `análisis y emisión`  
  Reutiliza frames cuando una llamada recursiva queda en posición final.

- **Profiling y estadísticas**  
  *Familia:* `evidencia y latencia`  
  Mide llamadas, redos, tiempo y allocations antes de optimizar.

- **Stacks, GC y tablas**  
  *Familia:* `consulta e índice`  
  Observa memoria global, local, trail, atom GC y crecimiento de tabling.


### Seccion: Concurrencia (5 conceptos)

- **Threads y engines**  
  *Familia:* `planificación de trabajo`  
  Distingue stacks privados de datos globales compartidos.

- **Message queues**  
  *Familia:* `cola y consumidor`  
  Coordina productores y consumidores mediante paso explícito de términos.

- **Mutexes**  
  *Familia:* `máquina de estados`  
  Protege invariantes que abarcan varias operaciones sobre estado compartido.

- **Base dinámica concurrente**  
  *Familia:* `planificación de trabajo`  
  Combina Logical Update View y transacciones sin asumir serialización automática.

- **Cancelación y cierre**  
  *Familia:* `cola y consumidor`  
  Interrumpe trabajo y libera recursos conservando resultados ya confirmados.


### Seccion: Integración y producción (5 conceptos)

- **HTTP y dispatch**  
  *Familia:* `ida y vuelta`  
  Publica predicados detrás de handlers con autenticación y límites.

- **JSON y dicts**  
  *Familia:* `configuración declarativa`  
  Convierte contratos externos a términos de dominio sin ejecutar datos como código.

- **Foreign Language Interface**  
  *Familia:* `pasaporte del artefacto`  
  Embebe Prolog o carga extensiones C manteniendo roots, frames y ownership.

- **Scripts, entrypoints y saved states**  
  *Familia:* `máquina de estados`  
  Produce una entrada reproducible adecuada para despliegue.

- **Observabilidad y compatibilidad**  
  *Familia:* `evidencia y latencia`  
  Registra versión, consultas lentas, límites, errores y diferencias entre dialectos.



## Referencias Bibliograficas y Documentacion Oficial
- **[SWI-Prolog: Getting started quickly](https://www.swi-prolog.org/pldoc/man?section=quickstart)** (`tutorial` | Nivel: `beginner`): 
- **[Learn Prolog Now!](https://lpn.swi-prolog.org/lpnpage.php?pageid=online)** (`book` | Nivel: `intermediate`): 
- **[The Power of Prolog](https://www.metalevel.at/prolog)** (`book` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
