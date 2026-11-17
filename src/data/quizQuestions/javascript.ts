import type { QuizQuestion } from "@/data/quizTypes";

export const javascriptQuestions: QuizQuestion[] = [
  {
    "id": "javascript-q-01",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Fundamentos del lenguaje), ¿qué función técnica cumple «Variables»?",
    "options": [
      "Asocia nombres con valores y distingue reasignación mediante let de una referencia estable mediante const.",
      "Distingue string, number, bigint, boolean, undefined, symbol y null como valores que no son objetos.",
      "Compara valores sin conversión con === y muestra por qué == puede producir coincidencias inesperadas.",
      "Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Variables (Fundamentos del lenguaje): Asocian nombres con valores y distinguen reasignación mediante let de una referencia estable mediante const.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-02",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «Tipos primitivos» en fundamentos del lenguaje?",
    "options": [
      "Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy al operar.",
      "Distingue string, number, bigint, boolean, undefined, symbol y null como valores que no son objetos.",
      "Repite trabajo con for, while, for...of y for...in, diferenciando valores, índices y propiedades.",
      "Compara valores sin conversión con === y muestra por qué == puede producir coincidencias inesperadas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tipos primitivos (Fundamentos del lenguaje): Distinguen string, number, bigint, boolean, undefined, symbol y null como valores que no son objetos.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-03",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «typeof y detección de valores»?",
    "options": [
      "Combina operadores aritméticos, lógicos, relacionales y de asignación respetando un orden de evaluación al operar.",
      "Asocia nombres con valores y distingue reasignación mediante let de una referencia estable mediante const.",
      "Inspecciona el tipo superficial de un valor y requiere comprobaciones adicionales para arrays, null y objetos.",
      "Compara valores sin conversión con === y muestra por qué == puede producir coincidencias inesperadas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "typeof y detección de valores (Fundamentos del lenguaje): Inspecciona el tipo superficial de un valor y requiere comprobaciones adicionales para arrays, null y objetos.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-04",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Truthy»?",
    "options": [
      "Repite trabajo con for, while, for...of y for...in, diferenciando valores, índices y propiedades.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual de forma clara.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos de forma segura.",
      "Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Truthy y falsy (Fundamentos del lenguaje): Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-05",
    "collectionId": "javascript",
    "question": "Respecto a fundamentos del lenguaje en JavaScript ES6+, ¿cuál es el propósito de «Coerción de tipos»?",
    "options": [
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos de forma segura.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual al operar.",
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente.",
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Coerción de tipos (Fundamentos del lenguaje): Describe conversiones explícitas e implícitas entre cadenas, números y booleanos.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-06",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Fundamentos del lenguaje), ¿qué función técnica cumple «Igualdad estricta y flexible»?",
    "options": [
      "Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy al operar.",
      "Compara valores sin conversión con === y muestra por qué == puede producir coincidencias inesperadas.",
      "Repite trabajo con for, while, for...of y for...in, diferenciando valores, índices y propiedades.",
      "Distingue string, number, bigint, boolean, undefined, symbol y null como valores que no son objetos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Igualdad estricta y flexible (Fundamentos del lenguaje): Compara valores sin conversión con === y muestra por qué == puede producir coincidencias inesperadas.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-07",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «Operadores y precedencia» en fundamentos del lenguaje?",
    "options": [
      "Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy al operar.",
      "Repite trabajo con for, while, for...of y for...in, diferenciando valores, índices y propiedades al operar.",
      "Combina operadores aritméticos, lógicos, relacionales y de asignación respetando un orden de evaluación.",
      "Distingue string, number, bigint, boolean, undefined, symbol y null como valores que no son objetos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Operadores y precedencia (Fundamentos del lenguaje): Combina operadores aritméticos, lógicos, relacionales y de asignación respetando un orden de evaluación.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-08",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «Control de flujo»?",
    "options": [
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar.",
      "Busca un elemento o resume una condición sin transformar toda la colección al operar.",
      "Adapta números, fechas, listas y reglas de plural a locale y zona horaria al operar.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Control de flujo (Fundamentos del lenguaje): Selecciona rutas con if, switch y operadores condicionales según el estado actual.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-09",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Bucles e iteración»?",
    "options": [
      "Repite trabajo con for, while, for...of y for...in, diferenciando valores, índices y propiedades.",
      "Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual en ejecución.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Bucles e iteración (Fundamentos del lenguaje): Repite trabajo con for, while, for...of y for...in, diferenciando valores, índices y propiedades.",
    "topic": "Fundamentos del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-10",
    "collectionId": "javascript",
    "question": "Respecto a funciones y contexto en JavaScript ES6+, ¿cuál es el propósito de «Funciones»?",
    "options": [
      "Agrupa una cantidad variable de argumentos reales en un array local sin perder estado.",
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno.",
      "Busca un elemento o resume una condición sin transformar toda la colección al operar.",
      "Crea identificadores únicos y permite protocolos internos como Symbol.iterator."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Funciones (Funciones y contexto): Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno.",
    "topic": "Funciones y contexto",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-11",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Funciones y contexto), ¿qué función técnica cumple «Parámetros por defecto»?",
    "options": [
      "Ofrecen sintaxis concisa y capturan this léxicamente en lugar de crear su propio contexto al operar.",
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno al evaluar.",
      "Asigna un valor cuando el argumento recibido es undefined, sin reemplazar null ni otros falsy.",
      "Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Parámetros por defecto (Funciones y contexto): Asigna un valor cuando el argumento recibido es undefined, sin reemplazar null ni otros falsy.",
    "topic": "Funciones y contexto",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-12",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «Rest parameters» en funciones y contexto?",
    "options": [
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno al operar.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual al operar.",
      "Agrupa una cantidad variable de argumentos reales en un array local de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Rest parameters (Funciones y contexto): Agrupa una cantidad variable de argumentos reales en un array local.",
    "topic": "Funciones y contexto",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-13",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «Arrow functions»?",
    "options": [
      "Ofrecen sintaxis concisa y capturan this léxicamente en lugar de crear su propio contexto al operar.",
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno al operar.",
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales.",
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Arrow functions (Funciones y contexto): Ofrecen sintaxis concisa y capturan this léxicamente en lugar de crear su propio contexto.",
    "topic": "Funciones y contexto",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-14",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Scope»?",
    "options": [
      "Muestra cómo this depende de la forma de invocación y cómo puede fijarse o reenviarse explícitamente al operar.",
      "Define dónde puede resolverse un identificador mediante ámbitos globales, de función, de módulo y de bloque.",
      "Permite que una función conserve acceso a su entorno léxico incluso después de finalizar la llamada exterior.",
      "Asigna un valor cuando el argumento recibido es undefined, sin reemplazar null ni otros falsy con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Scope (Funciones y contexto): Define dónde puede resolverse un identificador mediante ámbitos globales, de función, de módulo y de bloque.",
    "topic": "Funciones y contexto",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-15",
    "collectionId": "javascript",
    "question": "Respecto a funciones y contexto en JavaScript ES6+, ¿cuál es el propósito de «Closures»?",
    "options": [
      "Muestra cómo this depende de la forma de invocación y cómo puede fijarse o reenviarse explícitamente al evaluar.",
      "Define dónde puede resolverse un identificador mediante ámbitos globales, de función, de módulo y de bloque.",
      "Permite que una función conserve acceso a su entorno léxico incluso después de finalizar la llamada exterior.",
      "Asigna un valor cuando el argumento recibido es undefined, sin reemplazar null ni otros falsy de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Closures (Funciones y contexto): Permiten que una función conserve acceso a su entorno léxico incluso después de finalizar la llamada exterior.",
    "topic": "Funciones y contexto",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-16",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Funciones y contexto), ¿qué función técnica cumple «this, call, apply y bind»?",
    "options": [
      "Asigna un valor cuando el argumento recibido es undefined, sin reemplazar null ni otros falsy al operar.",
      "Ofrecen sintaxis concisa y capturan this léxicamente en lugar de crear su propio contexto al evaluar.",
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno sin perder estado.",
      "Muestra cómo this depende de la forma de invocación y cómo puede fijarse o reenviarse explícitamente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "this, call, apply y bind (Funciones y contexto): Muestra cómo this depende de la forma de invocación y cómo puede fijarse o reenviarse explícitamente.",
    "topic": "Funciones y contexto",
    "difficulty": "básico"
  },
  {
    "id": "javascript-q-17",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «Objetos» en estructuras de datos?",
    "options": [
      "Agrupa estado relacionado mediante propiedades, métodos y descriptores dentro del flujo.",
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales.",
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente.",
      "Representa colecciones ordenadas con índices numéricos y una propiedad length dinámica."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Objetos (Estructuras de datos): Agrupan estado relacionado mediante propiedades, métodos y descriptores.",
    "topic": "Estructuras de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-18",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «Acceso y propiedades computadas»?",
    "options": [
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales al operar.",
      "Usa notación punto o corchetes y permite construir claves dinámicamente de forma segura.",
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente.",
      "Representa colecciones ordenadas con índices numéricos y una propiedad length dinámica."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Acceso y propiedades computadas (Estructuras de datos): Usa notación punto o corchetes y permite construir claves dinámicamente.",
    "topic": "Estructuras de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-19",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Desestructuración de objetos»?",
    "options": [
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales al operar.",
      "Usa notación punto o corchetes y permite construir claves dinámicamente en ejecución.",
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente.",
      "Agrupa estado relacionado mediante propiedades, métodos y descriptores con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Desestructuración de objetos (Estructuras de datos): Extrae propiedades, renombra variables y aplica valores por defecto declarativamente.",
    "topic": "Estructuras de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-20",
    "collectionId": "javascript",
    "question": "Respecto a estructuras de datos en JavaScript ES6+, ¿cuál es el propósito de «Spread»?",
    "options": [
      "Permite que una función conserve acceso a su entorno léxico incluso después de finalizar la llamada exterior al operar.",
      "Inspecciona el tipo superficial de un valor y requiere comprobaciones adicionales para arrays, null y objetos al operar.",
      "Define dónde puede resolverse un identificador mediante ámbitos globales, de función, de módulo y de bloque al operar.",
      "Construye nuevos objetos copiando propiedades enumerables de primer nivel y permitiendo sobrescrituras posteriores."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Spread y copia superficial (Estructuras de datos): Construye nuevos objetos copiando propiedades enumerables de primer nivel y permitiendo sobrescrituras posteriores.",
    "topic": "Estructuras de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-21",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Estructuras de datos), ¿qué función técnica cumple «Arrays»?",
    "options": [
      "Representa colecciones ordenadas con índices numéricos y una propiedad length dinámica.",
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales.",
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente.",
      "Usa notación punto o corchetes y permite construir claves dinámicamente en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Arrays (Estructuras de datos): Representan colecciones ordenadas con índices numéricos y una propiedad length dinámica.",
    "topic": "Estructuras de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-22",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «Desestructuración de arrays» en estructuras de datos?",
    "options": [
      "Usa notación punto o corchetes y permite construir claves dinámicamente de forma clara.",
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales.",
      "Agrupa estado relacionado mediante propiedades, métodos y descriptores en ejecución.",
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Desestructuración de arrays (Estructuras de datos): Asigna posiciones a variables, omite elementos e intercambia valores sin temporales.",
    "topic": "Estructuras de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-23",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «Spread en arrays»?",
    "options": [
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente al operar.",
      "Representa colecciones ordenadas con índices numéricos y una propiedad length dinámica al operar.",
      "Concatena iterables y crea una colección nueva sin modificar el arreglos contiguos original.",
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Spread en arrays (Estructuras de datos): Concatena iterables y crea una colección nueva sin modificar el array original.",
    "topic": "Estructuras de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-24",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «map»?",
    "options": [
      "Busca un elemento o resume una condición sin transformar toda la colección de forma clara.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar.",
      "Conserva elementos cuya función de prueba devuelve un valor truthy de modo predecible.",
      "Transforma cada elemento y crea un array nuevo de la misma longitud de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "map (Transformaciones de colecciones): Transforma cada elemento y crea un array nuevo de la misma longitud.",
    "topic": "Transformaciones de colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-25",
    "collectionId": "javascript",
    "question": "Respecto a transformaciones de colecciones en JavaScript ES6+, ¿cuál es el propósito de «filter»?",
    "options": [
      "Conserva elementos cuya función de prueba devuelve un valor truthy durante la ejecución.",
      "Busca un elemento o resume una condición sin transformar toda la colección al evaluar.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual.",
      "Transforma cada elemento y crea un array nuevo de la misma longitud sin perder estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "filter (Transformaciones de colecciones): Conserva elementos cuya función de prueba devuelve un valor truthy.",
    "topic": "Transformaciones de colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-26",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Transformaciones de colecciones), ¿qué función técnica cumple «reduce»?",
    "options": [
      "Distingue métodos mutables como sort de alternativas que conservan el original como toSorted al operar.",
      "Acumula una colección en un único resultado mediante un estado que pasa de iteración en iteración.",
      "Concatena iterables y crea una colección nueva sin modificar el arreglos contiguos original al operar.",
      "Coordina múltiples operaciones con all, allSettled, race y any según la semántica requerida al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "reduce (Transformaciones de colecciones): Acumula una colección en un único resultado mediante un estado que pasa de iteración en iteración.",
    "topic": "Transformaciones de colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-27",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «find, some y every» en transformaciones de colecciones?",
    "options": [
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual al operar.",
      "Transforma cada elemento y crea un array nuevo de la misma longitud de modo predecible.",
      "Busca un elemento o resume una condición sin transformar toda la colección en ejecución.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "find, some y every (Transformaciones de colecciones): Busca un elemento o resume una condición sin transformar toda la colección.",
    "topic": "Transformaciones de colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-28",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «Ordenamiento»?",
    "options": [
      "Busca un elemento o resume una condición sin transformar toda la colección durante la ejecución.",
      "Representa colecciones ordenadas con índices numéricos y una propiedad length dinámica al operar.",
      "Separa cómo se produce una secuencia de cómo la consumen for...of, spread y otras APIs al operar.",
      "Distingue métodos mutables como sort de alternativas que conservan el original como toSorted."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Ordenamiento y métodos de copia (Transformaciones de colecciones): Distingue métodos mutables como sort de alternativas que conservan el original como toSorted.",
    "topic": "Transformaciones de colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-29",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Set»?",
    "options": [
      "Mantiene valores únicos y permite operaciones de pertenencia sin buscar manualmente duplicados.",
      "Crea identificadores únicos y permite protocolos internos como Symbol.iterator con precisión.",
      "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #.",
      "Permite pausar una función asíncrona sobre una promesa sin bloquear el resto del runtime."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Set (Colecciones especializadas): Mantiene valores únicos y permite operaciones de pertenencia sin buscar manualmente duplicados.",
    "topic": "Colecciones especializadas",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-30",
    "collectionId": "javascript",
    "question": "Respecto a colecciones especializadas en JavaScript ES6+, ¿cuál es el propósito de «WeakMap y WeakSet»?",
    "options": [
      "Mantiene valores únicos y permite operaciones de pertenencia sin buscar manualmente duplicados al operar.",
      "Relacionan objetos sin impedir que el recolector de basura los libere cuando dejan de ser alcanzables.",
      "Declara dependencias estáticas con import/export y crean un ámbito propio evaluado una sola vez al operar.",
      "Convierte valores a booleanos dentro de condiciones; solo un conjunto pequeño se considera falsy al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "WeakMap y WeakSet (Colecciones especializadas): Relacionan objetos sin impedir que el recolector de basura los libere cuando dejan de ser alcanzables.",
    "topic": "Colecciones especializadas",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-31",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Colecciones especializadas), ¿qué función técnica cumple «Symbols»?",
    "options": [
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno al operar.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual al operar.",
      "Crea identificadores únicos y permite protocolos internos como Symbol.iterator al operar.",
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Symbols (Colecciones especializadas): Crean identificadores únicos y permiten protocolos internos como Symbol.iterator.",
    "topic": "Colecciones especializadas",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-32",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «JSON» en datos y representación?",
    "options": [
      "Realiza una copia profunda de muchos tipos incorporados y puede transferir buffers sin copiar con precisión.",
      "Distingue string, number, bigint, boolean, undefined, symbol y null como valores que no son objetos al operar.",
      "Acumula una colección en un único resultado mediante un estado que pasa de iteración en iteración al operar.",
      "Serializa datos compatibles a texto y los reconstruye, perdiendo funciones, undefined y tipos especiales."
    ],
    "correctAnswerIndex": 3,
    "explanation": "JSON (Datos y representación): Serializa datos compatibles a texto y los reconstruye, perdiendo funciones, undefined y tipos especiales.",
    "topic": "Datos y representación",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-33",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «structuredClone»?",
    "options": [
      "Realiza una copia profunda de muchos tipos incorporados y puede transferir buffers sin copiar al operar.",
      "Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación.",
      "Representa colecciones ordenadas con índices numéricos y una propiedad length dinámica al operar.",
      "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #."
    ],
    "correctAnswerIndex": 0,
    "explanation": "structuredClone (Datos y representación): Realiza una copia profunda de muchos tipos incorporados y puede transferir buffers sin copiar.",
    "topic": "Datos y representación",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-34",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Prototipos»?",
    "options": [
      "Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación.",
      "Resuelve propiedades recorriendo una cadena de delegación entre objetos de forma segura.",
      "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Prototipos (Objetos, clases y metaprogramación): Resuelven propiedades recorriendo una cadena de delegación entre objetos.",
    "topic": "Objetos, clases y metaprogramación",
    "difficulty": "intermedio"
  },
  {
    "id": "javascript-q-35",
    "collectionId": "javascript",
    "question": "Respecto a objetos, clases y metaprogramación en JavaScript ES6+, ¿cuál es el propósito de «Clases»?",
    "options": [
      "Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación al operar.",
      "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #.",
      "Agrupa constructor, métodos de instancia y miembros estáticos con una sintaxis declarativa.",
      "Resuelve propiedades recorriendo una cadena de delegación entre objetos de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Clases (Objetos, clases y metaprogramación): Agrupan constructor, métodos de instancia y miembros estáticos con una sintaxis declarativa.",
    "topic": "Objetos, clases y metaprogramación",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-36",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Objetos, clases y metaprogramación), ¿qué función técnica cumple «Herencia»?",
    "options": [
      "Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación al operar.",
      "Agrupa constructor, métodos de instancia y miembros estáticos con una sintaxis declarativa.",
      "Resuelve propiedades recorriendo una cadena de delegación entre objetos dentro del flujo.",
      "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Herencia y campos privados (Objetos, clases y metaprogramación): Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #.",
    "topic": "Objetos, clases y metaprogramación",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-37",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «Proxy y Reflect» en objetos, clases y metaprogramación?",
    "options": [
      "Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación.",
      "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados #.",
      "Resuelve propiedades recorriendo una cadena de delegación entre objetos con precisión.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Proxy y Reflect (Objetos, clases y metaprogramación): Interceptan operaciones fundamentales como lectura, escritura, enumeración e invocación.",
    "topic": "Objetos, clases y metaprogramación",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-38",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «Event Loop»?",
    "options": [
      "Permite pausar una función asíncrona sobre una promesa sin bloquear el resto del runtime al operar.",
      "Coordina el call stack, las tareas y las microtareas para mantener una ejecución no bloqueante.",
      "Coordina múltiples operaciones con all, allSettled, race y any según la semántica requerida.",
      "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados # al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Event Loop (Asincronía y runtime): Coordina el call stack, las tareas y las microtareas para mantener una ejecución no bloqueante.",
    "topic": "Asincronía y runtime",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-39",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Promesas»?",
    "options": [
      "Coordina el call stack, las tareas y las microtareas para mantener una ejecución no bloqueante al operar.",
      "Coordina múltiples operaciones con all, allSettled, race y any según la semántica requerida al operar.",
      "Modela una operación futura con estados pending, fulfilled o rejected y encadenamiento de resultados.",
      "Permite pausar una función asíncrona sobre una promesa sin bloquear el resto del runtime en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Promesas (Asincronía y runtime): Modelan una operación futura con estados pending, fulfilled o rejected y encadenamiento de resultados.",
    "topic": "Asincronía y runtime",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-40",
    "collectionId": "javascript",
    "question": "Respecto a asincronía y runtime en JavaScript ES6+, ¿cuál es el propósito de «Combinadores de promesas»?",
    "options": [
      "Permite pausar una función asíncrona sobre una promesa sin bloquear el resto del runtime al operar.",
      "Extrae propiedades, renombra variables y aplica valores por defecto declarativamente al operar.",
      "Representa colecciones ordenadas con índices numéricos y una propiedad length dinámica al operar.",
      "Coordina múltiples operaciones con all, allSettled, race y any según la semántica requerida."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Combinadores de promesas (Asincronía y runtime): Coordina múltiples operaciones con all, allSettled, race y any según la semántica requerida.",
    "topic": "Asincronía y runtime",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-41",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Asincronía y runtime), ¿qué función técnica cumple «Async / Await»?",
    "options": [
      "Permite pausar una función asíncrona sobre una promesa sin bloquear el resto del runtime al operar.",
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual al operar.",
      "Asigna posiciones a variables, omite elementos e intercambia valores sin temporales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Async / Await (Asincronía y runtime): Permite pausar una función asíncrona sobre una promesa sin bloquear el resto del runtime.",
    "topic": "Asincronía y runtime",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-42",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «Manejo de errores» en asincronía y runtime?",
    "options": [
      "Envía una señal cooperativa para detener fetch u otras APIs compatibles y liberar trabajo innecesario al operar.",
      "Propaga excepciones por la pila y permite recuperar, transformar o finalizar recursos con try/catch/finally.",
      "Modela una operación futura con estados pending, fulfilled o rejected y encadenamiento de resultados al operar.",
      "Coordina el call stack, las tareas y las microtareas para mantener una ejecución no bloqueante en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Manejo de errores (Asincronía y runtime): Propaga excepciones por la pila y permite recuperar, transformar o finalizar recursos con try/catch/finally.",
    "topic": "Asincronía y runtime",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-43",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «Cancelación con AbortController»?",
    "options": [
      "Coordina el call stack, las tareas y las microtareas para mantener una ejecución no bloqueante al operar.",
      "Coordina múltiples operaciones con all, allSettled, race y any según la semántica requerida al operar.",
      "Envía una señal cooperativa para detener fetch u otras APIs compatibles y liberar trabajo innecesario.",
      "Modela una operación futura con estados pending, fulfilled o rejected y encadenamiento de resultados."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cancelación con AbortController (Asincronía y runtime): Envía una señal cooperativa para detener fetch u otras APIs compatibles y liberar trabajo innecesario.",
    "topic": "Asincronía y runtime",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-44",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Módulos ES»?",
    "options": [
      "Ofrecen sintaxis concisa y capturan this léxicamente en lugar de crear su propio contexto al operar.",
      "Agrupa constructor, métodos de instancia y miembros estáticos con una sintaxis declarativa al operar.",
      "Extiende comportamiento con extends/super y encapsula estado mediante nombres privados # al operar.",
      "Declara dependencias estáticas con import/export y crean un ámbito propio evaluado una sola vez."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Módulos ES (Módulos y carga): Declaran dependencias estáticas con import/export y crean un ámbito propio evaluado una sola vez.",
    "topic": "Módulos y carga",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-45",
    "collectionId": "javascript",
    "question": "Respecto a módulos y carga en JavaScript ES6+, ¿cuál es el propósito de «Importación dinámica»?",
    "options": [
      "Carga un módulo bajo demanda y devuelve una promesa con su namespace manteniendo consistencia.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar.",
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Importación dinámica (Módulos y carga): Carga un módulo bajo demanda y devuelve una promesa con su namespace.",
    "topic": "Módulos y carga",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-46",
    "collectionId": "javascript",
    "question": "En JavaScript ES6+ (Protocolos avanzados), ¿qué función técnica cumple «Iteradores y protocolos iterable»?",
    "options": [
      "Suspenden y reanudan una función mediante yield para construir iteradores declarativos.",
      "Separa cómo se produce una secuencia de cómo la consumen for...of, spread y otras APIs.",
      "Manipulan memoria binaria con vistas tipadas para audio, gráficos, archivos y protocolos.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Iteradores y protocolos iterable (Protocolos avanzados): Separan cómo se produce una secuencia de cómo la consumen for...of, spread y otras APIs.",
    "topic": "Protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-47",
    "collectionId": "javascript",
    "question": "Dentro de JavaScript ES6+, ¿cómo opera el mecanismo de «Generadores» en protocolos avanzados?",
    "options": [
      "Separa cómo se produce una secuencia de cómo la consumen for...of, spread y otras APIs.",
      "Manipulan memoria binaria con vistas tipadas para audio, gráficos, archivos y protocolos.",
      "Suspenden y reanudan una función mediante yield para construir iteradores declarativos.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Generadores (Protocolos avanzados): Suspenden y reanudan una función mediante yield para construir iteradores declarativos.",
    "topic": "Protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-48",
    "collectionId": "javascript",
    "question": "Al trabajar con JavaScript ES6+, ¿qué responsabilidad define a «TypedArray y ArrayBuffer»?",
    "options": [
      "Separa cómo se produce una secuencia de cómo la consumen for...of, spread y otras APIs al operar.",
      "Suspenden y reanudan una función mediante yield para construir iteradores declarativos.",
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno al operar.",
      "Manipulan memoria binaria con vistas tipadas para audio, gráficos, archivos y protocolos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "TypedArray y ArrayBuffer (Protocolos avanzados): Manipulan memoria binaria con vistas tipadas para audio, gráficos, archivos y protocolos.",
    "topic": "Protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-49",
    "collectionId": "javascript",
    "question": "En la arquitectura de JavaScript ES6+, ¿qué caracteriza técnicamente a «Expresiones regulares»?",
    "options": [
      "Describe patrones para buscar, validar y capturar partes de texto respetando las invariantes.",
      "Adapta números, fechas, listas y reglas de plural a locale y zona horaria en el flujo.",
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Expresiones regulares (Texto, tiempo e internacionalización): Describen patrones para buscar, validar y capturar partes de texto.",
    "topic": "Texto, tiempo e internacionalización",
    "difficulty": "avanzado"
  },
  {
    "id": "javascript-q-50",
    "collectionId": "javascript",
    "question": "Respecto a texto, tiempo e internacionalización en JavaScript ES6+, ¿cuál es el propósito de «Intl»?",
    "options": [
      "Selecciona rutas con if, switch y operadores condicionales según el estado actual al operar.",
      "Adapta números, fechas, listas y reglas de plural a locale y zona horaria con precisión.",
      "Describe conversiones explícitas e implícitas entre cadenas, números y booleanos al operar.",
      "Encapsulan instrucciones, reciben argumentos y pueden producir un valor de retorno al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Intl y formato local (Texto, tiempo e internacionalización): Adapta números, fechas, listas y reglas de plural a locale y zona horaria.",
    "topic": "Texto, tiempo e internacionalización",
    "difficulty": "avanzado"
  }
];
