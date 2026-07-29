import type { StudyConcept } from "./conceptTypes";

export const javascriptConcepts = [
  {
    "title": "Variables",
    "description": "Asocian nombres con valores y distinguen reasignación mediante let de una referencia estable mediante const.",
    "section": "Fundamentos del lenguaje",
    "family": "mapa de memoria",
    "layout": "standard"
  },
  {
    "title": "Tipos primitivos",
    "description": "Distinguen string, number, bigint, boolean, undefined, symbol y null como valores que no son objetos.",
    "section": "Fundamentos del lenguaje",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "typeof value",
      "nodes": [
        "string",
        "number",
        "boolean",
        "undefined"
      ],
      "outcome": "7 tipos primitivos",
      "caption": "Los primitivos se copian como valores; null es primitivo aunque typeof null conserve un resultado histórico."
    }
  },
  {
    "title": "typeof y detección de valores",
    "description": "Inspecciona el tipo superficial de un valor y requiere comprobaciones adicionales para arrays, null y objetos.",
    "section": "Fundamentos del lenguaje",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "Array.isArray(value)",
      "nodes": [
        "[]|object por typeof",
        "null|object histórico",
        "()=>{}|function",
        "detector"
      ],
      "outcome": "array confirmado",
      "caption": "typeof es útil, pero algunas categorías necesitan detectores específicos."
    }
  },
  {
    "title": "Truthy y falsy",
    "description": "Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy.",
    "section": "Fundamentos del lenguaje",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "if (value) { ... }",
      "nodes": [
        "0|falsy",
        "\"\"|falsy",
        "[]|truthy",
        "ToBoolean"
      ],
      "outcome": "rama elegida",
      "caption": "Una condición no pregunta si el valor es true literal: aplica coerción booleana."
    }
  },
  {
    "title": "Coerción de tipos",
    "description": "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos.",
    "section": "Fundamentos del lenguaje",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "Number(\"42\")",
      "nodes": [
        "\"42\"|string",
        "Number()|conversión explícita",
        "42|number",
        "2 + \"2\"|coerción implícita"
      ],
      "outcome": "controla la conversión",
      "caption": "Convertir de forma explícita hace el código más predecible que depender de reglas implícitas."
    }
  },
  {
    "title": "Igualdad estricta y flexible",
    "description": "Compara valores sin conversión con === y muestra por qué == puede producir coincidencias inesperadas.",
    "section": "Fundamentos del lenguaje",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "0 === false  ·  0 == false",
      "nodes": [
        "===|sin coerción",
        "==|con coerción",
        "false|resultado estricto",
        "true|resultado flexible"
      ],
      "outcome": "prefiere ===",
      "caption": "La igualdad estricta compara tipo y valor; Object.is cubre casos especiales como NaN y -0."
    }
  },
  {
    "title": "Operadores y precedencia",
    "description": "Combina operadores aritméticos, lógicos, relacionales y de asignación respetando un orden de evaluación.",
    "section": "Fundamentos del lenguaje",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "2 + 3 * 4",
      "nodes": [
        "expresión|precedencia",
        "3 * 4|primero",
        "2 + 12|después",
        "14|resultado"
      ],
      "outcome": "14",
      "caption": "Los paréntesis convierten la intención en estructura visible y evitan depender de recordar toda la tabla."
    }
  },
  {
    "title": "Control de flujo",
    "description": "Selecciona rutas con if, switch y operadores condicionales según el estado actual.",
    "section": "Fundamentos del lenguaje",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "status === \"ready\" ? play() : wait()",
      "nodes": [
        "status|ready",
        "play()|rama válida",
        "wait()|rama alterna",
        "switch|múltiples casos"
      ],
      "outcome": "una ruta ejecutada",
      "caption": "Solo la rama elegida avanza; las demás no se evalúan."
    }
  },
  {
    "title": "Bucles e iteración",
    "description": "Repite trabajo con for, while, for...of y for...in, diferenciando valores, índices y propiedades.",
    "section": "Fundamentos del lenguaje",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "for (const champion of roster)",
      "nodes": [
        "jinx|valor",
        "vi|valor",
        "ekko|valor",
        "index|posición"
      ],
      "outcome": "colección recorrida",
      "caption": "for...of recorre iterables; for...in enumera claves y suele ser inadecuado para arrays."
    }
  },
  {
    "title": "Funciones",
    "description": "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno.",
    "section": "Funciones y contexto",
    "family": "puertos de entrada y salida",
    "layout": "standard"
  },
  {
    "title": "Parámetros por defecto",
    "description": "Asigna un valor cuando el argumento recibido es undefined, sin reemplazar null ni otros falsy.",
    "section": "Funciones y contexto",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "function greet(name = \"Powder\")",
      "nodes": [
        "undefined|usa default",
        "\"Jinx\"|usa argumento",
        "null|se conserva",
        "parámetro"
      ],
      "outcome": "valor definido",
      "caption": "El valor por defecto se evalúa al llamar la función, no al declararla."
    }
  },
  {
    "title": "Rest parameters",
    "description": "Agrupa una cantidad variable de argumentos reales en un array local.",
    "section": "Funciones y contexto",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "function sum(...values)",
      "nodes": [
        "1|arg 1",
        "2|arg 2",
        "3|arg 3",
        "...values|[1,2,3]"
      ],
      "outcome": "array de argumentos",
      "caption": "Rest pertenece a la firma de la función; no es el antiguo objeto array-like arguments."
    }
  },
  {
    "title": "Arrow functions",
    "description": "Ofrecen sintaxis concisa y capturan this léxicamente en lugar de crear su propio contexto.",
    "section": "Funciones y contexto",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "const run = () => this.speed",
      "nodes": [
        "function|this dinámico",
        "arrow|this léxico",
        "call()|puede cambiarlo",
        "scope exterior|lo conserva"
      ],
      "outcome": "elige según el contexto",
      "caption": "Las arrows son ideales para callbacks, pero no sirven como constructores."
    }
  },
  {
    "title": "Scope",
    "description": "Define dónde puede resolverse un identificador mediante ámbitos globales, de función, de módulo y de bloque.",
    "section": "Funciones y contexto",
    "family": "jerarquía léxica",
    "layout": "standard"
  },
  {
    "title": "Hoisting y TDZ",
    "description": "Explica cuándo las declaraciones existen antes de su línea y por qué let y const no pueden usarse dentro de su zona temporal muerta.",
    "section": "Funciones y contexto",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "console.log(score); let score = 10",
      "nodes": [
        "creación del scope|binding existe",
        "TDZ|acceso bloqueado",
        "declaración|inicialización",
        "uso|10"
      ],
      "outcome": "ReferenceError antes de declarar",
      "caption": "Hoisting no significa que todas las variables reciban un valor utilizable al inicio."
    }
  },
  {
    "title": "Closures",
    "description": "Permiten que una función conserve acceso a su entorno léxico incluso después de finalizar la llamada exterior.",
    "section": "Funciones y contexto",
    "family": "entorno retenido",
    "layout": "standard"
  },
  {
    "title": "this, call, apply y bind",
    "description": "Muestra cómo this depende de la forma de invocación y cómo puede fijarse o reenviarse explícitamente.",
    "section": "Funciones y contexto",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "attack.call(jinx, \"rocket\")",
      "nodes": [
        "función|attack",
        "receptor|jinx",
        "call/apply|invocación inmediata",
        "bind|nueva función",
        "this.name|Jinx"
      ],
      "outcome": "contexto explícito",
      "caption": "En métodos normales, this se decide al invocar; separar el método puede perder el receptor."
    }
  },
  {
    "title": "Objetos",
    "description": "Agrupan estado relacionado mediante propiedades, métodos y descriptores.",
    "section": "Estructuras de datos",
    "family": "red de propiedades",
    "layout": "standard"
  },
  {
    "title": "Acceso y propiedades computadas",
    "description": "Usa notación punto o corchetes y permite construir claves dinámicamente.",
    "section": "Estructuras de datos",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "champion[key]",
      "nodes": [
        "key|\"role\"",
        "champion|objeto",
        "role|\"ADC\"",
        "lookup"
      ],
      "outcome": "\"ADC\"",
      "caption": "Los corchetes evalúan una expresión; el punto usa un nombre escrito directamente."
    }
  },
  {
    "title": "Desestructuración de objetos",
    "description": "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente.",
    "section": "Estructuras de datos",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "const { name, role = \"mid\" } = champion",
      "nodes": [
        "champion|objeto",
        "name|Jinx",
        "role|ADC",
        "rest|otras props"
      ],
      "outcome": "bindings locales",
      "caption": "La desestructuración lee propiedades; no crea una copia profunda del objeto."
    }
  },
  {
    "title": "Spread y copia superficial",
    "description": "Construye nuevos objetos copiando propiedades enumerables de primer nivel y permitiendo sobrescrituras posteriores.",
    "section": "Estructuras de datos",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "const next = { ...user, level: 18 }",
      "nodes": [
        "user|base",
        "...user|copia superficial",
        "level:18|sobrescribe",
        "nested|referencia compartida"
      ],
      "outcome": "nuevo contenedor",
      "caption": "Spread crea un objeto nuevo, pero los objetos anidados siguen compartiendo referencia."
    }
  },
  {
    "title": "Arrays",
    "description": "Representan colecciones ordenadas con índices numéricos y una propiedad length dinámica.",
    "section": "Estructuras de datos",
    "family": "cinta indexada",
    "layout": "standard"
  },
  {
    "title": "Desestructuración de arrays",
    "description": "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales.",
    "section": "Estructuras de datos",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "const [first, , third] = roster",
      "nodes": [
        "0|Jinx",
        "1|Vi",
        "2|Ekko",
        "bindings|first · third"
      ],
      "outcome": "posiciones extraídas",
      "caption": "La posición define el significado; los huecos solo omiten la asignación."
    }
  },
  {
    "title": "Spread en arrays",
    "description": "Concatena iterables y crea una colección nueva sin modificar el array original.",
    "section": "Estructuras de datos",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "const team = [...blue, ...red]",
      "nodes": [
        "blue|2 items",
        "...blue|expande",
        "red|3 items",
        "...red|expande",
        "team|5 items"
      ],
      "outcome": "array nuevo",
      "caption": "Spread consume cualquier iterable, no únicamente arrays."
    }
  },
  {
    "title": "map",
    "description": "Transforma cada elemento y crea un array nuevo de la misma longitud.",
    "section": "Transformaciones de colecciones",
    "family": "carriles de transformación",
    "layout": "standard"
  },
  {
    "title": "filter",
    "description": "Conserva elementos cuya función de prueba devuelve un valor truthy.",
    "section": "Transformaciones de colecciones",
    "family": "puerta de decisión",
    "layout": "standard"
  },
  {
    "title": "reduce",
    "description": "Acumula una colección en un único resultado mediante un estado que pasa de iteración en iteración.",
    "section": "Transformaciones de colecciones",
    "family": "acumulador",
    "layout": "standard"
  },
  {
    "title": "find, some y every",
    "description": "Busca un elemento o resume una condición sin transformar toda la colección.",
    "section": "Transformaciones de colecciones",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "find() · some() · every()",
      "nodes": [
        "find|devuelve elemento",
        "some|alguno cumple",
        "every|todos cumplen",
        "short-circuit|detiene pronto"
      ],
      "outcome": "consulta mínima",
      "caption": "Estas operaciones pueden terminar antes de recorrer toda la colección."
    }
  },
  {
    "title": "Ordenamiento y métodos de copia",
    "description": "Distingue métodos mutables como sort de alternativas que conservan el original como toSorted.",
    "section": "Transformaciones de colecciones",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "roster.sort()  vs  roster.toSorted()",
      "nodes": [
        "sort|muta original",
        "toSorted|crea copia",
        "referencias|misma colección",
        "estado UI|más predecible"
      ],
      "outcome": "elige mutación consciente",
      "caption": "Los métodos de copia facilitan trabajar con estado inmutable."
    }
  },
  {
    "title": "Set",
    "description": "Mantiene valores únicos y permite operaciones de pertenencia sin buscar manualmente duplicados.",
    "section": "Colecciones especializadas",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "new Set([\"Jinx\", \"Vi\", \"Jinx\"])",
      "nodes": [
        "Jinx|entra",
        "Vi|entra",
        "Jinx|duplicado",
        "uniqueness"
      ],
      "outcome": "2 valores",
      "caption": "Set conserva orden de inserción y compara con SameValueZero."
    }
  },
  {
    "title": "Map",
    "description": "Asocia claves de cualquier tipo con valores y mantiene el orden de inserción.",
    "section": "Colecciones especializadas",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "roles.set(jinx, \"ADC\")",
      "nodes": [
        "object key",
        "string key",
        "number key",
        "value"
      ],
      "outcome": "claves sin conversión",
      "caption": "A diferencia de un objeto común, Map no convierte todas las claves en strings o symbols."
    }
  },
  {
    "title": "WeakMap y WeakSet",
    "description": "Relacionan objetos sin impedir que el recolector de basura los libere cuando dejan de ser alcanzables.",
    "section": "Colecciones especializadas",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "metadata.set(node, info)",
      "nodes": [
        "objeto|clave débil",
        "metadata|valor asociado",
        "GC|puede liberar",
        "no iterable|sin listado"
      ],
      "outcome": "asociación no retenedora",
      "caption": "Las colecciones débiles sirven para metadatos privados y cachés ligadas a la vida de objetos."
    }
  },
  {
    "title": "Symbols",
    "description": "Crean identificadores únicos y permiten protocolos internos como Symbol.iterator.",
    "section": "Colecciones especializadas",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "const id = Symbol(\"id\")",
      "nodes": [
        "Symbol(id)|único A",
        "Symbol(id)|único B",
        "propiedad|sin colisión",
        "well-known|protocolos"
      ],
      "outcome": "A !== B",
      "caption": "La descripción ayuda a depurar, pero no define igualdad."
    }
  },
  {
    "title": "JSON",
    "description": "Serializa datos compatibles a texto y los reconstruye, perdiendo funciones, undefined y tipos especiales.",
    "section": "Datos y representación",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "JSON.stringify(order)",
      "nodes": [
        "objeto JS|Order",
        "stringify|texto JSON",
        "red / storage|bytes",
        "parse|objeto nuevo"
      ],
      "outcome": "representación interoperable",
      "caption": "JSON no preserva prototipos, Map, Set, BigInt ni referencias circulares."
    }
  },
  {
    "title": "structuredClone",
    "description": "Realiza una copia profunda de muchos tipos incorporados y puede transferir buffers sin copiar.",
    "section": "Datos y representación",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "structuredClone(state)",
      "nodes": [
        "state|objeto anidado",
        "clone algorithm|recorre grafo",
        "Date / Map|preservados",
        "new state|sin referencias compartidas"
      ],
      "outcome": "copia profunda",
      "caption": "No clona funciones ni nodos DOM y puede fallar con valores no clonables."
    }
  },
  {
    "title": "Prototipos",
    "description": "Resuelven propiedades recorriendo una cadena de delegación entre objetos.",
    "section": "Objetos, clases y metaprogramación",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "jinx.attack → Champion.prototype.attack",
      "nodes": [
        "jinx|instancia",
        "Champion.prototype|métodos",
        "Object.prototype|base",
        "null|fin"
      ],
      "outcome": "método encontrado",
      "caption": "Las clases de JavaScript son una sintaxis sobre este modelo prototípico."
    }
  },
  {
    "title": "Clases",
    "description": "Agrupan constructor, métodos de instancia y miembros estáticos con una sintaxis declarativa.",
    "section": "Objetos, clases y metaprogramación",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "class Champion { constructor(name) {} }",
      "nodes": [
        "class|definición",
        "new|crea objeto",
        "constructor|inicializa",
        "prototype|comparte métodos"
      ],
      "outcome": "instancia Jinx",
      "caption": "Los métodos se comparten mediante el prototipo; no se copian en cada instancia."
    }
  },
  {
    "title": "Herencia y campos privados",
    "description": "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #.",
    "section": "Objetos, clases y metaprogramación",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "class Marksman extends Champion { #ammo = 3 }",
      "nodes": [
        "Champion|base",
        "Marksman|subclase",
        "super()|inicializa base",
        "#ammo|privado real"
      ],
      "outcome": "especialización segura",
      "caption": "Los campos privados son verificados por el lenguaje y no son propiedades públicas con un nombre raro."
    }
  },
  {
    "title": "Proxy y Reflect",
    "description": "Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación.",
    "section": "Objetos, clases y metaprogramación",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "new Proxy(target, { get })",
      "nodes": [
        "caller|lee role",
        "proxy|get trap",
        "Reflect.get|operación base",
        "policy"
      ],
      "outcome": "lectura observada",
      "caption": "Proxy permite metaprogramación, pero agrega complejidad y puede afectar optimizaciones."
    }
  },
  {
    "title": "Event Loop",
    "description": "Coordina el call stack, las tareas y las microtareas para mantener una ejecución no bloqueante.",
    "section": "Asincronía y runtime",
    "family": "scheduler",
    "layout": "feature"
  },
  {
    "title": "Promesas",
    "description": "Modelan una operación futura con estados pending, fulfilled o rejected y encadenamiento de resultados.",
    "section": "Asincronía y runtime",
    "family": "máquina de estados",
    "layout": "standard"
  },
  {
    "title": "Combinadores de promesas",
    "description": "Coordina múltiples operaciones con all, allSettled, race y any según la semántica requerida.",
    "section": "Asincronía y runtime",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "Promise.all() · allSettled() · race() · any()",
      "nodes": [
        "all|todo o falla",
        "allSettled|todos los resultados",
        "race|primero en asentarse",
        "any|primero fulfilled"
      ],
      "outcome": "elige la política",
      "caption": "Concurrente no significa paralelo: describe cómo se coordinan los resultados."
    }
  },
  {
    "title": "Async / Await",
    "description": "Permite pausar una función asíncrona sobre una promesa sin bloquear el resto del runtime.",
    "section": "Asincronía y runtime",
    "family": "timeline dividido",
    "layout": "standard"
  },
  {
    "title": "Manejo de errores",
    "description": "Propaga excepciones por la pila y permite recuperar, transformar o finalizar recursos con try/catch/finally.",
    "section": "Asincronía y runtime",
    "family": "rutas de control",
    "layout": "standard"
  },
  {
    "title": "Cancelación con AbortController",
    "description": "Envía una señal cooperativa para detener fetch u otras APIs compatibles y liberar trabajo innecesario.",
    "section": "Asincronía y runtime",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "controller.abort(\"route changed\")",
      "nodes": [
        "controller|crea signal",
        "fetch|escucha signal",
        "route change|abort()",
        "AbortError|capturado",
        "cleanup|finaliza"
      ],
      "outcome": "trabajo cancelado",
      "caption": "Abortar no revierte efectos ya confirmados; cada operación debe cooperar con la señal."
    }
  },
  {
    "title": "Módulos ES",
    "description": "Declaran dependencias estáticas con import/export y crean un ámbito propio evaluado una sola vez.",
    "section": "Módulos y carga",
    "family": "grafo de dependencias",
    "layout": "standard"
  },
  {
    "title": "Importación dinámica",
    "description": "Carga un módulo bajo demanda y devuelve una promesa con su namespace.",
    "section": "Módulos y carga",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "const mod = await import(\"./arcane.js\")",
      "nodes": [
        "evento|abre panel",
        "import()|solicita chunk",
        "módulo|evalúa una vez",
        "namespace|exports"
      ],
      "outcome": "código disponible",
      "caption": "La carga dinámica permite dividir bundles, pero el camino de error también debe manejarse."
    }
  },
  {
    "title": "Iteradores y protocolos iterable",
    "description": "Separan cómo se produce una secuencia de cómo la consumen for...of, spread y otras APIs.",
    "section": "Protocolos avanzados",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "iterator.next()",
      "nodes": [
        "Symbol.iterator|crea iterador",
        "next()|solicita valor",
        "{value, done}|respuesta",
        "consumer|for...of"
      ],
      "outcome": "secuencia desacoplada",
      "caption": "Un iterable puede generar valores perezosamente sin almacenarlos todos."
    }
  },
  {
    "title": "Generadores",
    "description": "Suspenden y reanudan una función mediante yield para construir iteradores declarativos.",
    "section": "Protocolos avanzados",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "function* waves() { yield 1; yield 2 }",
      "nodes": [
        "call|crea generator",
        "next()|ejecuta hasta yield",
        "pause|conserva frame",
        "next()|reanuda"
      ],
      "outcome": "iteración perezosa",
      "caption": "El estado local queda suspendido entre llamadas a next()."
    }
  },
  {
    "title": "TypedArray y ArrayBuffer",
    "description": "Manipulan memoria binaria con vistas tipadas para audio, gráficos, archivos y protocolos.",
    "section": "Protocolos avanzados",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "new Uint8Array(buffer)",
      "nodes": [
        "ArrayBuffer|bytes crudos",
        "Uint8Array|vista 8-bit",
        "Float32Array|otra vista",
        "offset|misma memoria"
      ],
      "outcome": "bytes interpretados",
      "caption": "Las vistas comparten el buffer y cambian la forma de interpretar los mismos bytes."
    }
  },
  {
    "title": "Expresiones regulares",
    "description": "Describen patrones para buscar, validar y capturar partes de texto.",
    "section": "Texto, tiempo e internacionalización",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "/^[A-Z][a-z]+$/u.test(name)",
      "nodes": [
        "\"Jinx\"|entrada",
        "pattern|estructura",
        "flags|u · i · g",
        "matcher"
      ],
      "outcome": "coincidencia",
      "caption": "Una regex potente debe seguir siendo legible y probarse con casos límite."
    }
  },
  {
    "title": "Intl y formato local",
    "description": "Adapta números, fechas, listas y reglas de plural a locale y zona horaria.",
    "section": "Texto, tiempo e internacionalización",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "new Intl.NumberFormat(\"es-MX\", { style: \"currency\", currency: \"MXN\" })",
      "nodes": [
        "1250|valor neutro",
        "locale|es-MX",
        "options|MXN",
        "formatter|aplica reglas"
      ],
      "outcome": "$1,250.00",
      "caption": "Intl separa el dato de su presentación cultural."
    }
  },
  {
    "title": "Date, zonas horarias y timestamps",
    "description": "Distingue instantes, representación local y cálculos de calendario para evitar errores de zona.",
    "section": "Texto, tiempo e internacionalización",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "new Date(\"2026-07-29T18:00:00Z\")",
      "nodes": [
        "UTC|instante",
        "timezone|America/Mexico_City",
        "local time|12:00",
        "format|texto"
      ],
      "outcome": "mismo instante, otra vista",
      "caption": "Date representa milisegundos desde epoch; el formato local depende de la zona."
    }
  },
  {
    "title": "Gestión explícita de recursos",
    "description": "Usa using, await using y disposables para garantizar liberación determinista al salir de un bloque.",
    "section": "Memoria y recursos",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "using file = openFile()",
      "nodes": [
        "open|adquirir",
        "work|usar",
        "scope exit|salir",
        "dispose|cerrar",
        "error|también limpia"
      ],
      "outcome": "recurso liberado",
      "caption": "La limpieza determinista complementa al recolector de basura para recursos externos."
    }
  },
  {
    "title": "Memoria y garbage collection",
    "description": "Explica alcanzabilidad, referencias fuertes, fugas y por qué el recolector no sustituye limpiar listeners o timers.",
    "section": "Memoria y recursos",
    "family": "memoria intermedia",
    "layout": "feature",
    "scene": {
      "variant": "cache",
      "code": "root → component → listener → cache",
      "nodes": [
        "roots|global / stack",
        "reachable|se conserva",
        "detached|sin uso",
        "listener|retiene nodo"
      ],
      "outcome": "liberar referencias",
      "caption": "Una fuga ocurre cuando algo sigue siendo alcanzable aunque la aplicación ya no lo necesite."
    }
  }
] satisfies readonly StudyConcept[];
