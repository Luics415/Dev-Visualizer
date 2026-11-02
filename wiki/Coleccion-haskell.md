# Haskell (Hs)

> **Funciones puras, tipos algebraicos, evaluación perezosa, efectos y concurrencia.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `haskell` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `prolog` |
| **Total de Conceptos** | **112 conceptos** |
| **Capitulos / Secciones** | **19 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/haskell)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/haskell-en-accion)


## Estudio de Caso Practico: Interpretar expresiones con tipos

> **Caso integrado de Haskell:** Un intérprete transforma tokens en AST y evalúa expresiones; una división por cero emerge como efecto explícito y se recupera sin valor centinela.  
> Parser, evaluator y salida conservan tipos separados y pruebas de propiedades para entradas generadas.

### Fases de Ejecucion:
1. **Definir el AST** (Interpretar expresiones con tipos: etapa 1 de 5): `data Expr = Lit Int | Add Expr Expr | Div Expr Expr` -> Dominio representado. *La etapa conserva un contrato explícito para que el siguiente paso de Haskell no dependa de supuestos ocultos.*
2. **Evaluar composición** (Interpretar expresiones con tipos: etapa 2 de 5): `eval (Add a b) = (+) <$> eval a <*> eval b` -> Suma evaluada. *La etapa conserva un contrato explícito para que el siguiente paso de Haskell no dependa de supuestos ocultos.*
3. **Encontrar división por cero** (Interpretar expresiones con tipos: etapa 3 de 5): `eval (Div _ (Lit 0)) = Left DivisionByZero` -> Evaluación detenida. *El caso hace visible el fallo de Haskell; no continúa como si la evidencia fuera válida.*
4. **Recuperar en frontera** (Interpretar expresiones con tipos: etapa 4 de 5): `render (Left e) = mensaje e` -> Sesión continúa segura. *La recuperación de Haskell corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Probar propiedades** (Interpretar expresiones con tipos: etapa 5 de 5): `property $ \x y -> eval (Add (Lit x) (Lit y)) == Right (x+y)` -> Contrato demostrado. *La etapa conserva un contrato explícito para que el siguiente paso de Haskell no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (112)

### Seccion: Expresiones y tipos (5 conceptos)

- **Funciones puras**  
  *Familia:* `flujo de transformación`  
  Funciones puras conecta texto fuente, contexto léxico y reglas del lenguaje con su runtime interno: reconoce estructura, comprueba contratos y produce una representación ejecutable hasta exponer significado bien formado con errores localizados.

- **Currying**  
  *Familia:* `jerarquía y dependencias`  
  En Currying, texto fuente, contexto léxico y reglas del lenguaje ingresa al flujo donde reconoce estructura, comprueba contratos y produce una representación ejecutable para consolidar significado bien formado con errores localizados.

- **Inferencia Hindley-Milner**  
  *Familia:* `cuadrícula paralela`  
  La función de Inferencia Hindley-Milner parte de texto fuente, contexto léxico y reglas del lenguaje. Su ejecución reconoce estructura, comprueba contratos y produce una representación ejecutable y produce significado bien formado con errores localizados.

- **Tipos algebraicos**  
  *Familia:* `matriz de señales`  
  Tipos algebraicos estructura texto fuente, contexto léxico y reglas del lenguaje en el sistema: reconoce estructura, comprueba contratos y produce una representación ejecutable, garantizando significado bien formado con errores localizados.

- **Pattern matching**  
  *Familia:* `jerarquía y dependencias`  
  El recorrido de Pattern matching toma texto fuente, contexto léxico y reglas del lenguaje. Posteriormente reconoce estructura, comprueba contratos y produce una representación ejecutable para validar significado bien formado con errores localizados.


### Seccion: Evaluación (5 conceptos)

- **No estricta y perezosa**  
  *Familia:* `flujo de transformación`  
  El mecanismo de No estricta y perezosa recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Thunks**  
  *Familia:* `despacho de runtime`  
  Thunks conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Normal forms**  
  *Familia:* `jerarquía y dependencias`  
  En Normal forms, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Strictness**  
  *Familia:* `flujo de transformación`  
  La función de Strictness parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Compartición**  
  *Familia:* `despacho de runtime`  
  Compartición estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Composición (5 conceptos)

- **Typeclasses**  
  *Familia:* `jerarquía y dependencias`  
  Typeclasses conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Functor**  
  *Familia:* `flujo de transformación`  
  En Functor, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Applicative**  
  *Familia:* `despacho de runtime`  
  La función de Applicative parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Monad**  
  *Familia:* `jerarquía y dependencias`  
  Monad estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Foldable y Traversable**  
  *Familia:* `flujo de transformación`  
  El recorrido de Foldable y Traversable toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Errores y diagnóstico (5 conceptos)

- **Maybe y Either**  
  *Familia:* `evidencia y latencia`  
  La función de Maybe y Either parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Excepciones**  
  *Familia:* `secuencia operativa`  
  Excepciones estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **GHCi**  
  *Familia:* `tabla de estados`  
  El recorrido de GHCi toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.

- **Warnings de GHC**  
  *Familia:* `evidencia y latencia`  
  Warnings de GHC procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Profiling de heap**  
  *Familia:* `jerarquía y dependencias`  
  Para entender Profiling de heap, se delimita valores con representación, dirección y tiempo de vida definidos. La operación reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime hasta producir estado accesible sin referencias colgantes ni corrupción.


### Seccion: Producción (5 conceptos)

- **IO**  
  *Familia:* `pasaporte del artefacto`  
  El mecanismo de IO recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **STM y concurrencia**  
  *Familia:* `cola y consumidor`  
  STM y concurrencia conecta tareas con dependencias, recursos compartidos y una señal de cancelación con su runtime interno: ordena trabajo y sincronización sin ocultar intercalados posibles hasta exponer progreso concurrente con ownership y terminación observables.

- **Cabal y paquetes**  
  *Familia:* `capas internas`  
  En Cabal y paquetes, fuentes versionadas, dependencias fijadas y configuración declarativa ingresa al flujo donde resuelve, construye y empaqueta el artefacto de forma repetible para consolidar una unidad identificable que puede verificarse antes de promoverse.

- **QuickCheck**  
  *Familia:* `pasaporte del artefacto`  
  La función de QuickCheck parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Optimización con criterio**  
  *Familia:* `secuencia operativa`  
  Optimización con criterio estructura un workload representativo, un presupuesto y una línea base en el sistema: mide la ruta crítica y cambia una variable por vez, garantizando una mejora cuantificada sin intercambiar corrección por velocidad.


### Seccion: Cálculo funcional (5 conceptos)

- **Cálculo lambda**  
  *Familia:* `flujo de transformación`  
  Cálculo / lambda: la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, asegurando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Sustitución y reducción**  
  *Familia:* `topología y tráfico`  
  En Sustitución / reducción, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas para entregar un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Combinadores**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Combinadores logra que la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas y garantiza un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Composición point-free**  
  *Familia:* `flujo de transformación`  
  A través de Composición / point-free, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, consolidando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Eta y beta equivalencia**  
  *Familia:* `despacho de runtime`  
  Eta / beta / equivalencia estructura el flujo donde la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, logrando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.


### Seccion: Diseño con tipos algebraicos (7 conceptos)

- **Product y sum types**  
  *Familia:* `análisis y emisión`  
  Product / sum / types: el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, asegurando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Tipos recursivos**  
  *Familia:* `acumulación de recursos`  
  En Tipos / recursivos, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código para entregar una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Smart constructors**  
  *Familia:* `validación y decisión`  
  El mecanismo de Smart / constructors logra que el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código y garantiza una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Generalized algebraic data types**  
  *Familia:* `análisis y emisión`  
  A través de Generalized / algebraic / data / types, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, consolidando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **DataKinds**  
  *Familia:* `jerarquía y dependencias`  
  Data / Kinds estructura el flujo donde el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, logrando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Recursion schemes**  
  *Familia:* `acumulación de recursos`  
  Para Recursion / schemes, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, manteniendo un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Pattern synonyms**  
  *Familia:* `análisis y emisión`  
  Pattern / synonyms coordina la ejecución: scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión hasta obtener un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.


### Seccion: Typeclasses avanzadas (5 conceptos)

- **Leyes de typeclasses**  
  *Familia:* `flujo de transformación`  
  Leyes / typeclasses: el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, asegurando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Multi-parameter typeclasses**  
  *Familia:* `despacho de runtime`  
  En Multi-parameter / typeclasses, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código para entregar una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Functional dependencies**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Functional / dependencies logra que la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas y garantiza un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Deriving strategies**  
  *Familia:* `flujo de transformación`  
  A través de Deriving / strategies, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, consolidando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Coerciones newtype**  
  *Familia:* `despacho de runtime`  
  Coerciones / newtype estructura el flujo donde el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, logrando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.


### Seccion: Tipos de orden superior (8 conceptos)

- **Kinds**  
  *Familia:* `análisis y emisión`  
  Kinds: el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, asegurando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Rank-N types**  
  *Familia:* `validación y decisión`  
  En Rank-N / types, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código para entregar una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Existential types**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Existential / types logra que el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código y garantiza una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Type families**  
  *Familia:* `análisis y emisión`  
  A través de Type / families, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, consolidando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Constraint kinds**  
  *Familia:* `validación y decisión`  
  Constraint / kinds estructura el flujo donde el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, logrando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Impredicative polymorphism**  
  *Familia:* `topología y tráfico`  
  Para Impredicative / polymorphism, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, manteniendo una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Roles y representational equality**  
  *Familia:* `análisis y emisión`  
  Roles / representational / equality coordina la ejecución: el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código hasta obtener una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Linear types**  
  *Familia:* `validación y decisión`  
  Al operar con Linear / types, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, produciendo una operación tipada cuyo contrato puede consumirse sin repetir validaciones.


### Seccion: Efectos componibles (6 conceptos)

- **Reader**  
  *Familia:* `flujo de transformación`  
  Reader: la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, asegurando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **State**  
  *Familia:* `despacho de runtime`  
  En State, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas para entregar un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Writer**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Writer logra que la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas y garantiza un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Monad transformers**  
  *Familia:* `flujo de transformación`  
  A través de Monad / transformers, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, consolidando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Efectos algebraicos**  
  *Familia:* `despacho de runtime`  
  Efectos / algebraicos estructura el flujo donde la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, logrando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **ResourceT y liberación determinista**  
  *Familia:* `jerarquía y dependencias`  
  Para Resource / T / liberación / determinista, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, manteniendo un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.


### Seccion: Evaluación interna (7 conceptos)

- **Graph reduction**  
  *Familia:* `topología y tráfico`  
  Graph / reduction: la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, asegurando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Weak head normal form**  
  *Familia:* `flujo de transformación`  
  En Weak / head / normal / form, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar para entregar estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Black holes**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Black / holes logra que la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas y garantiza un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Space leaks**  
  *Familia:* `despacho de runtime`  
  A través de Space / leaks, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, consolidando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Unboxed values**  
  *Familia:* `mapa de memoria`  
  Unboxed / values estructura el flujo donde el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, logrando un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Pointer tagging**  
  *Familia:* `capas internas`  
  Para Pointer / tagging, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, manteniendo memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Selector thunks**  
  *Familia:* `flujo de transformación`  
  Selector / thunks coordina la ejecución: la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas hasta obtener un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.


### Seccion: Optimización con GHC (6 conceptos)

- **Core language**  
  *Familia:* `mapa de memoria`  
  Core / language: frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, asegurando un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Inlining**  
  *Familia:* `despacho de runtime`  
  En Inlining, frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias para entregar un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Rewrite rules**  
  *Familia:* `validación y decisión`  
  El mecanismo de Rewrite / rules logra que frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias y garantiza un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Fusion**  
  *Familia:* `evidencia y latencia`  
  A través de Fusion, el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, consolidando una mejora medible con distribución, entorno y comparación documentados.

- **Demand analysis**  
  *Familia:* `mapa de memoria`  
  Demand / analysis estructura el flujo donde frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, logrando un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Worker-wrapper transformation**  
  *Familia:* `cola y consumidor`  
  Para Worker-wrapper / transformation, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, manteniendo progreso concurrente con ownership y terminación comprobables para cada tarea.


### Seccion: Concurrencia robusta (7 conceptos)

- **Green threads**  
  *Familia:* `planificación de trabajo`  
  Green / threads: el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, asegurando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **MVar**  
  *Familia:* `máquina de estados`  
  En MVar, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable para entregar progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Software transactional memory**  
  *Familia:* `memoria intermedia`  
  El mecanismo de Software / transactional / memory logra que el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación y garantiza memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Async exceptions**  
  *Familia:* `evidencia y latencia`  
  A través de Async / exceptions, la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, consolidando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Structured async**  
  *Familia:* `topología y tráfico`  
  Structured / async estructura el flujo donde la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, logrando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Bound threads**  
  *Familia:* `planificación de trabajo`  
  Para Bound / threads, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, manteniendo progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Masking states**  
  *Familia:* `máquina de estados`  
  Masking / states coordina la ejecución: la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas hasta obtener un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.


### Seccion: Paralelismo (5 conceptos)

- **Sparks**  
  *Familia:* `cola y consumidor`  
  Sparks: el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, asegurando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Strategies**  
  *Familia:* `planificación de trabajo`  
  En Strategies, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable para entregar progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Evaluation monad**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Evaluation / monad logra que la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas y garantiza un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Parallel arrays**  
  *Familia:* `tabla de estados`  
  A través de Parallel / arrays, el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, consolidando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Eventlog analysis**  
  *Familia:* `propagación de eventos`  
  Eventlog / analysis estructura el flujo donde el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible, logrando interfaz sincronizada que comunica cambio, foco y acción disponible.


### Seccion: Parsing y lenguajes (7 conceptos)

- **Parser combinators**  
  *Familia:* `flujo de transformación`  
  Parser / combinators: scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, asegurando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Applicative parsing**  
  *Familia:* `despacho de runtime`  
  En Applicative / parsing, scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión para entregar un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Megaparsec**  
  *Familia:* `consulta e índice`  
  El mecanismo de Megaparsec logra que scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión y garantiza un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Árboles de sintaxis**  
  *Familia:* `jerarquía y dependencias`  
  A través de Árboles / sintaxis, scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, consolidando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Pretty printing**  
  *Familia:* `telar relacional`  
  Pretty / printing estructura el flujo donde scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, logrando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Incremental parsing**  
  *Familia:* `consulta e índice`  
  Para Incremental / parsing, scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, manteniendo un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Error recovery combinators**  
  *Familia:* `flujo de transformación`  
  Error / recovery / combinators coordina la ejecución: scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión hasta obtener un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.


### Seccion: Pruebas y verificación (6 conceptos)

- **Generators y shrinkers**  
  *Familia:* `espectro de verificación`  
  Generators / shrinkers: la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, asegurando evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **State-machine testing**  
  *Familia:* `máquina de estados`  
  En State-machine / testing, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas para entregar un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Liquid types**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Liquid / types logra que el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código y garantiza una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Equational reasoning**  
  *Familia:* `espectro de verificación`  
  A través de Equational / reasoning, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, consolidando evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Golden tests**  
  *Familia:* `validación y decisión`  
  Golden / tests estructura el flujo donde la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, logrando evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Coverage-guided property generation**  
  *Familia:* `evidencia y latencia`  
  Para Coverage-guided / property / generation, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, manteniendo evidencia reproducible que distingue regresión, ruido y limitación conocida.


### Seccion: Construcción y distribución (5 conceptos)

- **Componentes Cabal**  
  *Familia:* `constelación de mecanismos`  
  Componentes / Cabal: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, asegurando un artefacto reproducible, verificable y promovible entre entornos.

- **Stackage snapshots**  
  *Familia:* `mapa de memoria`  
  En Stackage / snapshots, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación para entregar memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Backpack modules**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Backpack / modules logra que el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible y garantiza el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Nix y builds herméticos**  
  *Familia:* `análisis y emisión`  
  A través de Nix / builds / herméticos, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, consolidando un artefacto reproducible, verificable y promovible entre entornos.

- **Versionado de paquetes**  
  *Familia:* `mapa de memoria`  
  Versionado / paquetes estructura el flujo donde el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, logrando un artefacto reproducible, verificable y promovible entre entornos.


### Seccion: Interoperabilidad (5 conceptos)

- **Foreign function interface**  
  *Familia:* `despacho de runtime`  
  Foreign / function / interface: el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, asegurando una operación tipada cuyo contrato puede consumirse sin repetir validaciones.

- **Marshalling**  
  *Familia:* `capas internas`  
  En Marshalling, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema para entregar estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **Stable pointers**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Stable / pointers logra que el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación y garantiza memoria válida durante toda la operación y recuperada al terminar su último uso.

- **C callbacks**  
  *Familia:* `despacho de runtime`  
  A través de C / callbacks, la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, consolidando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.

- **WebAssembly backends**  
  *Familia:* `capas internas`  
  Web / Assembly / backends estructura el flujo donde la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema, logrando estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista.


### Seccion: Producción observable (8 conceptos)

- **Heap residency**  
  *Familia:* `tabla de estados`  
  Heap / residency: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, asegurando memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Cost centres**  
  *Familia:* `planificación de trabajo`  
  En Cost / centres, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada para entregar servicio disponible con estado, versión y camino de rollback verificables.

- **Runtime system options**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Runtime / system / options logra que el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos y garantiza un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Structured logging**  
  *Familia:* `topología y tráfico`  
  A través de Structured / logging, la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales, consolidando una respuesta o estructura interna completa que conserva correlación y estado del intercambio.

- **Manejo de señales y shutdown**  
  *Familia:* `propagación de eventos`  
  Manejo / señales / shutdown estructura el flujo donde el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, logrando servicio disponible con estado, versión y camino de rollback verificables.

- **Heap census automation**  
  *Familia:* `tabla de estados`  
  Para Heap / census / automation, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, manteniendo memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Eventlog correlation IDs**  
  *Familia:* `ecosistema coordinado`  
  Eventlog / correlation / IDs coordina la ejecución: el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible hasta obtener interfaz sincronizada que comunica cambio, foco y acción disponible.

- **Allocation limit handling**  
  *Familia:* `mapa de memoria`  
  Al operar con Allocation / limit / handling, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, produciendo memoria válida durante toda la operación y recuperada al terminar su último uso.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
