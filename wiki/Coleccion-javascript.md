# 📘 [JS] JavaScript ES6+

> **Lenguaje, objetos, asincronía, módulos, protocolos y memoria.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `javascript` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `javascript` |
| **Total de Conceptos** | **55 conceptos** |
| **Capítulos / Secciones** | **12 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/javascript-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (55)

### 📑 Sección: Fundamentos del lenguaje (9 conceptos)

- **Variables**  
  *Familia:* `mapa de memoria`  
  Asocian nombres con valores y distinguen reasignación mediante let de una referencia estable mediante const.

- **Tipos primitivos**  
  *Familia:* `anatomía del concepto`  
  Distinguen string, number, bigint, boolean, undefined, symbol y null como valores que no son objetos.

- **typeof y detección de valores**  
  *Familia:* `flujo de ejecución`  
  Inspecciona el tipo superficial de un valor y requiere comprobaciones adicionales para arrays, null y objetos.

- **Truthy y falsy**  
  *Familia:* `ecosistema coordinado`  
  Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy.

- **Coerción de tipos**  
  *Familia:* `topología y tráfico`  
  Describe conversiones explícitas e implícitas entre cadenas, números y booleanos.

- **Igualdad estricta y flexible**  
  *Familia:* `cola y consumidor`  
  Compara valores sin conversión con === y muestra por qué == puede producir coincidencias inesperadas.

- **Operadores y precedencia**  
  *Familia:* `secuencia operativa`  
  Combina operadores aritméticos, lógicos, relacionales y de asignación respetando un orden de evaluación.

- **Control de flujo**  
  *Familia:* `ida y vuelta`  
  Selecciona rutas con if, switch y operadores condicionales según el estado actual.

- **Bucles e iteración**  
  *Familia:* `planificación de trabajo`  
  Repite trabajo con for, while, for...of y for...in, diferenciando valores, índices y propiedades.


### 📑 Sección: Funciones y contexto (8 conceptos)

- **Funciones**  
  *Familia:* `puertos de entrada y salida`  
  Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno.

- **Parámetros por defecto**  
  *Familia:* `tabla de estados`  
  Asigna un valor cuando el argumento recibido es undefined, sin reemplazar null ni otros falsy.

- **Rest parameters**  
  *Familia:* `validación y decisión`  
  Agrupa una cantidad variable de argumentos reales en un array local.

- **Arrow functions**  
  *Familia:* `memoria intermedia`  
  Ofrecen sintaxis concisa y capturan this léxicamente en lugar de crear su propio contexto.

- **Scope**  
  *Familia:* `jerarquía léxica`  
  Define dónde puede resolverse un identificador mediante ámbitos globales, de función, de módulo y de bloque.

- **Hoisting y TDZ**  
  *Familia:* `configuración declarativa`  
  Explica cuándo las declaraciones existen antes de su línea y por qué let y const no pueden usarse dentro de su zona temporal muerta.

- **Closures**  
  *Familia:* `entorno retenido`  
  Permiten que una función conserve acceso a su entorno léxico incluso después de finalizar la llamada exterior.

- **this, call, apply y bind**  
  *Familia:* `capas internas`  
  Muestra cómo this depende de la forma de invocación y cómo puede fijarse o reenviarse explícitamente.


### 📑 Sección: Estructuras de datos (7 conceptos)

- **Objetos**  
  *Familia:* `red de propiedades`  
  Agrupan estado relacionado mediante propiedades, métodos y descriptores.

- **Acceso y propiedades computadas**  
  *Familia:* `propagación de eventos`  
  Usa notación punto o corchetes y permite construir claves dinámicamente.

- **Desestructuración de objetos**  
  *Familia:* `máquina de estados`  
  Extrae propiedades, renombra variables y aplica valores por defecto declarativamente.

- **Spread y copia superficial**  
  *Familia:* `superficie de aplicación`  
  Construye nuevos objetos copiando propiedades enumerables de primer nivel y permitiendo sobrescrituras posteriores.

- **Arrays**  
  *Familia:* `cinta indexada`  
  Representan colecciones ordenadas con índices numéricos y una propiedad length dinámica.

- **Desestructuración de arrays**  
  *Familia:* `flujo de ejecución`  
  Asigna posiciones a variables, omite elementos e intercambia valores sin temporales.

- **Spread en arrays**  
  *Familia:* `configuración declarativa`  
  Concatena iterables y crea una colección nueva sin modificar el array original.


### 📑 Sección: Transformaciones de colecciones (5 conceptos)

- **map**  
  *Familia:* `carriles de transformación`  
  Transforma cada elemento y crea un array nuevo de la misma longitud.

- **filter**  
  *Familia:* `puerta de decisión`  
  Conserva elementos cuya función de prueba devuelve un valor truthy.

- **reduce**  
  *Familia:* `acumulador`  
  Acumula una colección en un único resultado mediante un estado que pasa de iteración en iteración.

- **find, some y every**  
  *Familia:* `comparativa técnica`  
  Busca un elemento o resume una condición sin transformar toda la colección.

- **Ordenamiento y métodos de copia**  
  *Familia:* `validación y decisión`  
  Distingue métodos mutables como sort de alternativas que conservan el original como toSorted.


### 📑 Sección: Colecciones especializadas (4 conceptos)

- **Set**  
  *Familia:* `acumulación de recursos`  
  Mantiene valores únicos y permite operaciones de pertenencia sin buscar manualmente duplicados.

- **Map**  
  *Familia:* `consulta e índice`  
  Asocia claves de cualquier tipo con valores y mantiene el orden de inserción.

- **WeakMap y WeakSet**  
  *Familia:* `árbol de recursos`  
  Relacionan objetos sin impedir que el recolector de basura los libere cuando dejan de ser alcanzables.

- **Symbols**  
  *Familia:* `validación y decisión`  
  Crean identificadores únicos y permiten protocolos internos como Symbol.iterator.


### 📑 Sección: Datos y representación (2 conceptos)

- **JSON**  
  *Familia:* `contratos coordinados`  
  Serializa datos compatibles a texto y los reconstruye, perdiendo funciones, undefined y tipos especiales.

- **structuredClone**  
  *Familia:* `topología y tráfico`  
  Realiza una copia profunda de muchos tipos incorporados y puede transferir buffers sin copiar.


### 📑 Sección: Objetos, clases y metaprogramación (4 conceptos)

- **Prototipos**  
  *Familia:* `análisis y emisión`  
  Resuelven propiedades recorriendo una cadena de delegación entre objetos.

- **Clases**  
  *Familia:* `secuencia operativa`  
  Agrupan constructor, métodos de instancia y miembros estáticos con una sintaxis declarativa.

- **Herencia y campos privados**  
  *Familia:* `jerarquía y dependencias`  
  Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #.

- **Proxy y Reflect**  
  *Familia:* `ida y vuelta`  
  Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación.


### 📑 Sección: Asincronía y runtime (6 conceptos)

- **Event Loop**  
  *Familia:* `scheduler`  
  Coordina el call stack, las tareas y las microtareas para mantener una ejecución no bloqueante.

- **Promesas**  
  *Familia:* `máquina de estados`  
  Modelan una operación futura con estados pending, fulfilled o rejected y encadenamiento de resultados.

- **Combinadores de promesas**  
  *Familia:* `máquina de estados`  
  Coordina múltiples operaciones con all, allSettled, race y any según la semántica requerida.

- **Async / Await**  
  *Familia:* `timeline dividido`  
  Permite pausar una función asíncrona sobre una promesa sin bloquear el resto del runtime.

- **Manejo de errores**  
  *Familia:* `rutas de control`  
  Propaga excepciones por la pila y permite recuperar, transformar o finalizar recursos con try/catch/finally.

- **Cancelación con AbortController**  
  *Familia:* `cola y consumidor`  
  Envía una señal cooperativa para detener fetch u otras APIs compatibles y liberar trabajo innecesario.


### 📑 Sección: Módulos y carga (2 conceptos)

- **Módulos ES**  
  *Familia:* `grafo de dependencias`  
  Declaran dependencias estáticas con import/export y crean un ámbito propio evaluado una sola vez.

- **Importación dinámica**  
  *Familia:* `propagación de eventos`  
  Carga un módulo bajo demanda y devuelve una promesa con su namespace.


### 📑 Sección: Protocolos avanzados (3 conceptos)

- **Iteradores y protocolos iterable**  
  *Familia:* `ciclo de vida`  
  Separan cómo se produce una secuencia de cómo la consumen for...of, spread y otras APIs.

- **Generadores**  
  *Familia:* `análisis y emisión`  
  Suspenden y reanudan una función mediante yield para construir iteradores declarativos.

- **TypedArray y ArrayBuffer**  
  *Familia:* `árbol de recursos`  
  Manipulan memoria binaria con vistas tipadas para audio, gráficos, archivos y protocolos.


### 📑 Sección: Texto, tiempo e internacionalización (3 conceptos)

- **Expresiones regulares**  
  *Familia:* `anatomía del concepto`  
  Describen patrones para buscar, validar y capturar partes de texto.

- **Intl y formato local**  
  *Familia:* `capas internas`  
  Adapta números, fechas, listas y reglas de plural a locale y zona horaria.

- **Date, zonas horarias y timestamps**  
  *Familia:* `evidencia y latencia`  
  Distingue instantes, representación local y cálculos de calendario para evitar errores de zona.


### 📑 Sección: Memoria y recursos (2 conceptos)

- **Gestión explícita de recursos**  
  *Familia:* `jerarquía y dependencias`  
  Usa using, await using y disposables para garantizar liberación determinista al salir de un bloque.

- **Memoria y garbage collection**  
  *Familia:* `memoria intermedia`  
  Explica alcanzabilidad, referencias fuertes, fugas y por qué el recolector no sustituye limpiar listeners o timers.




---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
