import type { QuizQuestion } from "@/data/quizTypes";

export const typescriptQuestions: QuizQuestion[] = [
  {
    id: "ts-q-01",
    collectionId: "typescript",
    question: "¿Qué es la verificación exhaustiva ('Exhaustiveness Checking') y cómo se implementa con el tipo 'never'?",
    options: [
      "Asignar la variable restante en la rama 'default' de un switch a una variable de tipo 'never' para detectar casos no contemplados en compilación.",
      "Ejecutar un script de pruebas unitarias que evalúa el 100% de la cobertura de líneas antes de compilar.",
      "Verificar en tiempo de ejecución que ningún objeto tenga propiedades con valores nulos o indefinidos.",
      "Una directiva de tsconfig.json que rechaza cualquier archivo que contenga imports no utilizados."
    ],
    correctAnswerIndex: 0,
    explanation: "Al reducir un Discriminated Union exhaustivamente en un switch o if/else, el tipo remanente en el bloque 'default' es 'never'. Si se añade un nuevo miembro a la unión y no se maneja, TypeScript arroja un error de compilación.",
    topic: "Type Narrowing & Control Flow",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-02",
    collectionId: "typescript",
    question: "¿Cuál es la diferencia fundamental entre el tipo 'unknown' y el tipo 'any'?",
    options: [
      "'unknown' es el tipo superior seguro (top type) que prohíbe operaciones sin previo narrowing; 'any' desactiva la verificación de tipos.",
      "'unknown' solo acepta valores primitivos, mientras que 'any' admite objetos y funciones exclusivamente.",
      "'any' se valida en tiempo de compilación y 'unknown' se delega a validación en tiempo de ejecución.",
      "No existe diferencia; 'unknown' es un alias puramente estético introducido en TypeScript 3.0."
    ],
    correctAnswerIndex: 0,
    explanation: "'unknown' representa cualquier valor posible pero exige comprobación de tipos (type narrowing) antes de invocar métodos o acceder a propiedades. 'any' apaga el sistema de tipos permitiendo cualquier operación.",
    topic: "Sistema de Tipos",
    difficulty: "básico"
  },
  {
    id: "ts-q-03",
    collectionId: "typescript",
    question: "¿Qué comportamiento introduce la palabra clave 'infer' en los tipos condicionales de TypeScript?",
    options: [
      "Permite deducir y capturar una variable de tipo dentro de la cláusula 'extends' de un tipo condicional.",
      "Fuerza al compilador a inferir el tipo de retorno de una función asíncrona sin necesidad de Promise<T>.",
      "Optimiza el árbol sintáctico abstracto (AST) deduciendo tipos numéricos en expresiones constantes.",
      "Genera esquemas de validación JSON Schema automáticamente a partir de interfaces declaradas."
    ],
    correctAnswerIndex: 0,
    explanation: "'infer' se utiliza dentro de tipos condicionales (ej. T extends (infer R)[] ? R : never) para declarar una variable de tipo que el compilador deduce a partir del tipo evaluado, base de utilidades como ReturnType<T>.",
    topic: "Tipos Condicionales & Genéricos",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-04",
    collectionId: "typescript",
    question: "¿Qué caracteriza a los 'Distributive Conditional Types' cuando operan sobre un tipo genérico desnudo?",
    options: [
      "Cuando se aplica una unión a un tipo genérico desnudo 'T extends U ? X : Y', el condicional se distribuye sobre cada miembro de la unión.",
      "Distribuyen la carga de compilación entre múltiples núcleos del procesador al evaluar tipos masivos.",
      "Convierten automáticamente arrays bidimensionales en uniones de tipos planos de una sola dimensión.",
      "Permiten herencia múltiple entre interfaces que comparten nombres de propiedades idénticos."
    ],
    correctAnswerIndex: 0,
    explanation: "Si T es un parámetro de tipo genérico desnudo (sin envolver en tupla [T]), T extends U distribuye la unión: (A | B) extends U ? X : Y se evalúa como (A extends U ? X : Y) | (B extends U ? X : Y).",
    topic: "Tipos Condicionales & Genéricos",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-05",
    collectionId: "typescript",
    question: "¿Cuál es la función de un 'Type Predicate' en una función con signatura 'x is Type'?",
    options: [
      "Informa al compilador que si la función retorna 'true', la variable evaluada se estrecha (narrows) al tipo especificado.",
      "Convierte la función en un validador asíncrono que rechaza promesas si el valor no coincide con el esquema.",
      "Añade metadatos en tiempo de compilación para que el recolector de basura priorice la variable.",
      "Es una anotación puramente decorativa para la generación de documentación en TypeDoc."
    ],
    correctAnswerIndex: 0,
    explanation: "Una función con retorno 'pet is Fish' es un predicado de tipo personalizado. Cuando un bloque if (isFish(pet)) evalúa true, TypeScript asume dentro del bloque que 'pet' es de tipo Fish.",
    topic: "Type Narrowing & Guards",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-06",
    collectionId: "typescript",
    question: "¿Qué problema resuelve la bandera 'exactOptionalPropertyTypes' en el archivo 'tsconfig.json'?",
    options: [
      "Diferencia entre una propiedad opcional omitida y una propiedad explícitamente asignada con el valor 'undefined'.",
      "Impide que los objetos tengan propiedades adicionales no declaradas en la interfaz de origen.",
      "Fuerza a que todos los campos marcados con '?' deban inicializarse obligatoriamente en el constructor.",
      "Elimina las propiedades opcionales del archivo compilado en formato JavaScript."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin esta bandera, foo?: string permite tanto omitir 'foo' como asignar 'foo: undefined'. Con 'exactOptionalPropertyTypes: true', asignar 'foo: undefined' es un error a menos que el tipo declare explícitamente 'string | undefined'.",
    topic: "Compilador & Configuración",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-07",
    collectionId: "typescript",
    question: "¿Cómo se implementa el patrón 'Nominal Typing' (Branded Types) en el sistema estructural de TypeScript?",
    options: [
      "Intersecando un tipo primitivo con un objeto que contiene una clave única mediante 'unique symbol' (ej: string & { readonly __brand: unique symbol }).",
      "Utilizando la palabra clave 'nominal class' soportada desde la versión 5.0 del compilador.",
      "Declarando las interfaces dentro de un archivo exclusivo con extensión '.nominal.ts'.",
      "Añadiendo una anotación de comentario '@nominal' sobre la definición del type alias."
    ],
    correctAnswerIndex: 0,
    explanation: "Dado que TypeScript es estructural (duck typing), para simular tipado nominal se añade una marca o 'brand' única a través de un símbolo privado, impidiendo asignaciones accidentales entre IDs semánticamente distintos (ej. UserId vs OrderId).",
    topic: "Técnicas de Modelado Avanzado",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-08",
    collectionId: "typescript",
    question: "¿Qué efecto tiene el operador 'satisfies' introducido en TypeScript 4.9?",
    options: [
      "Verifica que una expresión coincide con un tipo sin alterar el tipo inferido más específico del valor.",
      "Convierte automáticamente todos los métodos síncronos del objeto en funciones basadas en promesas.",
      "Garantiza que un objeto implemente una interfaz sin permitir la adición de métodos getters o setters.",
      "Fuerza al recolector de basura a mantener el objeto en memoria durante todo el ciclo de vida del script."
    ],
    correctAnswerIndex: 0,
    explanation: "'const palette = { red: '#ff0000' } satisfies Record<string, string>' valida que cumple el contrato pero preserva la inferencia exacta de claves y tipos literales, a diferencia de una anotación convencional que ensancharía el tipo.",
    topic: "Sintaxis & Operadores Modernos",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-09",
    collectionId: "typescript",
    question: "¿Cómo opera la varianza en los parámetros de funciones cuando la opción 'strictFunctionTypes' está activada?",
    options: [
      "Los tipos de los parámetros de funciones se evalúan de manera contravariante, mientras que los valores de retorno son covariantes.",
      "Los tipos de los parámetros se evalúan de forma estrictamente invariante en todos los escenarios.",
      "Tanto los parámetros como los valores de retorno se evalúan de forma bivariante por retrocompatibilidad.",
      "Se permite asignar funciones que reciben subtipos más específicos a variables de funciones genéricas."
    ],
    correctAnswerIndex: 0,
    explanation: "Con 'strictFunctionTypes', TypeScript aplica contravarianza en parámetros de funciones (no métodos): una función que acepta Animal puede asignarse donde se espera una que acepte Dog, pero no al revés, asegurando soundness.",
    topic: "Teoría de Tipos & Varianza",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-10",
    collectionId: "typescript",
    question: "¿Cuál es la utilidad del tipo de utilidad 'Extract<T, U>' en TypeScript?",
    options: [
      "Extrae de la unión T todos los miembros que son asignables al tipo U.",
      "Elimina del objeto T las propiedades que coinciden con las claves de U.",
      "Convierte una tupla U en un array plano de elementos de tipo T.",
      "Extrae los argumentos de una función T y los retorna en una tupla tipada."
    ],
    correctAnswerIndex: 0,
    explanation: "Extract<T, U> se define como T extends U ? T : never. Filtra una unión de tipos T conservando únicamente aquellos miembros que son compatibles o asignables a U.",
    topic: "Utility Types",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-11",
    collectionId: "typescript",
    question: "¿Qué permite la técnica de 'Key Remapping' en Mapped Types mediante la palabra clave 'as'?",
    options: [
      "Transformar, renombrar o filtrar claves de un objeto iterado usando Template Literal Types o tipos condicionales.",
      "Cambiar la dirección de memoria física donde se almacena el puntero del objeto en tiempo de ejecución.",
      "Mapear claves numéricas a nombres de columnas de una base de datos relacional externa.",
      "Forzar a que todas las claves del objeto sean de solo lectura en tiempo de ejecución."
    ],
    correctAnswerIndex: 0,
    explanation: "Con key remapping: { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }, se pueden generar nuevos nombres de propiedades a partir de claves existentes o excluir claves produciendo 'never'.",
    topic: "Mapped Types & Template Literals",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-12",
    collectionId: "typescript",
    question: "¿Qué diferencia semántica existe entre 'type' e 'interface' con respecto a la declaración duplicada ('Declaration Merging')?",
    options: [
      "Múltiples declaraciones de una 'interface' con el mismo nombre se fusionan automáticamente; los 'type' alias duplicados arrojan error de identificador repetido.",
      "Los 'type' se fusionan únicamente dentro de módulos, mientras que las 'interface' se fusionan en el ámbito global.",
      "Las interfaces no admiten declaración duplicada y arrojan un error fatal en el compilador.",
      "Ambos admiten Declaration Merging de forma indistinta bajo la opción 'mergeDeclarations: true'."
    ],
    correctAnswerIndex: 0,
    explanation: "Las interfaces son extensibles y admiten Declaration Merging: declarar 'interface Window' dos veces fusiona sus miembros, clave para enriquecer bibliotecas y tipos globales. Un 'type' con nombre duplicado produce error sintáctico.",
    topic: "Modelado & Arquitectura",
    difficulty: "básico"
  },
  {
    id: "ts-q-13",
    collectionId: "typescript",
    question: "¿Qué impacto tiene la opción 'verbatimModuleSyntax' en 'tsconfig.json'?",
    options: [
      "Exige usar explícitamente 'import type' para importaciones solo de tipo, garantizando que el compilador sepa con certeza qué emitir en JS.",
      "Obliga a que todos los imports utilicen rutas absolutas comenzando por la raíz del sistema de archivos.",
      "Convierte todos los módulos ES6 compilados a sintaxis CommonJS basada en require().",
      "Prohíbe el uso de extensiones de archivo '.js' o '.ts' en las rutas de importación de módulos."
    ],
    correctAnswerIndex: 0,
    explanation: "'verbatimModuleSyntax' simplifica y estandariza la elisión de imports. Si un import no lleva 'type', TypeScript asume que debe preservarse en el JS resultante, eliminando ambigüedades con herramientas como esbuild o Vite.",
    topic: "Compilador & Módulos",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-14",
    collectionId: "typescript",
    question: "¿Cuál es el propósito del operador 'as const' (const assertions) en una expresión?",
    options: [
      "Indica al compilador que infiera tipos literales exactos y marque todas las propiedades y arrays como 'readonly' profundamente.",
      "Declara una constante en la memoria inmutable del runtime impidiendo mutaciones en JavaScript nativo.",
      "Convierte un objeto en una instancia sellada mediante Object.seal() en tiempo de ejecución.",
      "Es una directiva de optimización para que el empaquetador elimine código muerto en producción."
    ],
    correctAnswerIndex: 0,
    explanation: "Una 'const assertion' ([1, 2] as const) evita que los primitivos se ensanchen (number -> 1) y convierte arrays y objetos en tuplas y estructuras con propiedades de solo lectura ('readonly').",
    topic: "Inferencia & Tipos Literales",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-15",
    collectionId: "typescript",
    question: "¿Qué representa el tipo 'never' en la jerarquía de tipos de TypeScript?",
    options: [
      "El 'bottom type' que representa un conjunto vacío de valores y es asignable a cualquier otro tipo, pero ningún tipo es asignable a él.",
      "Un tipo que representa funciones asíncronas que nunca se resuelven.",
      "El tipo padre universal del cual heredan 'unknown', 'any' y 'Object'.",
      "Un valor nulo especial utilizado para limpiar referencias en Web Workers."
    ],
    correctAnswerIndex: 0,
    explanation: "'never' es el tipo inferior (bottom type). Representa valores que nunca ocurren (ej. funciones que siempre lanzan excepciones o bucles infinitos). No contiene ningún valor pero es compatible con todos los destinos.",
    topic: "Sistema de Tipos",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-16",
    collectionId: "typescript",
    question: "¿Para qué se utiliza 'Module Augmentation' en archivos '.d.ts'?",
    options: [
      "Añadir o sobreescribir declaraciones de tipos en módulos de terceros o de la biblioteca estándar sin modificar sus fuentes.",
      "Comprimir el tamaño de los archivos de definición de tipos antes de publicarlos en npm.",
      "Descargar dinámicamente definiciones de DefinitelyTyped (@types) en tiempo de compilación.",
      "Dividir un módulo de gran tamaño en sub-módulos para paralelizar el empaquetado en Webpack."
    ],
    correctAnswerIndex: 0,
    explanation: "Module Augmentation (declare module 'express' { ... }) permite enriquecer contratos de librerías externas (por ejemplo, agregar propiedades a Request de Express) dentro del proyecto consumidor.",
    topic: "Declaraciones & Tipos Ambientales",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-17",
    collectionId: "typescript",
    question: "¿Cómo funciona la discriminación de uniones ('Discriminated Unions') en TypeScript?",
    options: [
      "Utiliza una propiedad común de tipo literal (el 'discriminante') en cada variante de la unión para que el compilador estreche el tipo.",
      "Analiza el tamaño en bytes de cada interfaz en la unión para determinar cuál instanciar.",
      "Requiere que cada objeto contenga una clave con un hash criptográfico SHA-1.",
      "Es un algoritmo que evalúa la presencia de métodos asíncronos en las variantes de la unión."
    ],
    correctAnswerIndex: 0,
    explanation: "Las Discriminated Unions combinan variantes que comparten una propiedad literal con valores únicos (ej. kind: 'circle' | 'square'). Al comprobar if (shape.kind === 'circle'), TypeScript estrecha shape a Circle.",
    topic: "Type Narrowing & Control Flow",
    difficulty: "básico"
  },
  {
    id: "ts-q-18",
    collectionId: "typescript",
    question: "¿Qué efecto produce el modificador 'readonly' en una propiedad de una interfaz de TypeScript?",
    options: [
      "El compilador impide reasignar esa propiedad tras la inicialización del objeto, pero no previene mutaciones internas de objetos anidados.",
      "Congela el objeto en tiempo de ejecución invocando automáticamente Object.freeze().",
      "Hace que la propiedad sea invisible para métodos serializadores como JSON.stringify().",
      "Permite que la propiedad solo sea leída desde hilos secundarios de Web Workers."
    ],
    correctAnswerIndex: 0,
    explanation: "'readonly' es una restricción en tiempo de compilación que previene reasignaciones superficiales (obj.prop = val genera error). No tiene impacto en tiempo de ejecución ni congela objetos anidados automáticamente.",
    topic: "Modelado de Interfaces",
    difficulty: "básico"
  },
  {
    id: "ts-q-19",
    collectionId: "typescript",
    question: "¿Cuál es el resultado de aplicar el tipo de utilidad 'NonNullable<T>' sobre 'string | number | null | undefined'?",
    options: [
      "'string | number', excluyendo cualquier valor que sea null o undefined de la unión.",
      "'string | number | boolean', reemplazando los tipos nulos por el valor true por defecto.",
      "Un error de compilación porque los tipos primitivos no pueden combinarse con tipos de utilidad.",
      "'never', porque la presencia de null contamina destructivamente toda la unión."
    ],
    correctAnswerIndex: 0,
    explanation: "NonNullable<T> se define como T extends null | undefined ? never : T. Elimina 'null' y 'undefined' de cualquier tipo unión, dejando intactos los demás miembros.",
    topic: "Utility Types",
    difficulty: "básico"
  },
  {
    id: "ts-q-20",
    collectionId: "typescript",
    question: "¿Qué diferencia existe entre un 'Tuple Type' y un 'Array Type' en TypeScript?",
    options: [
      "Una tupla tiene un número fijo (o con elementos opcionales/rest definidos) de posiciones donde cada índice puede tener un tipo distinto; un array es homogéneo y de longitud abierta.",
      "Las tuplas se compilan a estructuras de datos nativas de C++ en Node.js, mientras que los arrays usan listas enlazadas.",
      "Los arrays solo admiten datos numéricos, mientras que las tuplas admiten cadenas y objetos exclusivamente.",
      "No existe diferencia; en TypeScript una tupla es simplemente un sinónimo de ReadonlyArray."
    ],
    correctAnswerIndex: 0,
    explanation: "Un array (string[]) modela una colección de longitud indeterminada con elementos de tipo uniforme. Una tupla ([string, number]) define posiciones fijas con tipos específicos en cada posición.",
    topic: "Estructuras & Tuplas",
    difficulty: "básico"
  },
  {
    id: "ts-q-21",
    collectionId: "typescript",
    question: "¿Cómo optimiza TypeScript las llamadas recursivas profundas en tipos condicionales desde la versión 4.5?",
    options: [
      "Mediante eliminación de recursión de cola (Tail-call Elimination) para evitar errores de 'Type instantiation is excessively deep'.",
      "Almacenando los tipos calculados en una base de datos SQLite temporal en la carpeta .cache.",
      "Limitando estrictamente la recursividad a un máximo inamovible de 3 niveles de profundidad.",
      "Compilando los tipos recursivos a código WebAssembly binario para evaluación instantánea."
    ],
    correctAnswerIndex: 0,
    explanation: "TypeScript implementa tail-call recursion elimination para tipos condicionales. Si una rama retorna directamente la llamada recursiva sin transformaciones externas, no incrementa la profundidad de la pila del evaluador de tipos.",
    topic: "Rendimiento del Compilador",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-22",
    collectionId: "typescript",
    question: "¿Qué garantiza el uso del operador de aserción no nula ('!') en una expresión como 'elem!.click()'?",
    options: [
      "Indica al compilador que asuma que la expresión no es 'null' ni 'undefined', eliminando la advertencia sin comprobación en runtime.",
      "Lanza un TypeError síncrono si el valor es null antes de ejecutar el método click().",
      "Invoca el recolector de basura para asegurar que el elemento siga existiendo en el DOM.",
      "Convierte la llamada en un método reactivo que reintenta la ejecución si el elemento aparece después."
    ],
    correctAnswerIndex: 0,
    explanation: "El operador '!' es una aserción de no nulidad puramente en tiempo de compilación. Elimina 'null' y 'undefined' del tipo inferido, pero si en tiempo de ejecución es null, el programa lanzará un error no capturado.",
    topic: "Aserciones de Tipos",
    difficulty: "básico"
  },
  {
    id: "ts-q-23",
    collectionId: "typescript",
    question: "¿Cuál es el propósito del operador de indexación 'T[K]' (Indexed Access Types)?",
    options: [
      "Obtener el tipo de una propiedad específica K dentro de un tipo de objeto T.",
      "Acceder al elemento en el índice K de un array físico en tiempo de ejecución.",
      "Crear una copia superficial de la propiedad K del objeto T en memoria volátil.",
      "Verificar si la clave K está protegida con la palabra clave private."
    ],
    correctAnswerIndex: 0,
    explanation: "Los Indexed Access Types permiten consultar el tipo de una propiedad de otro tipo. Por ejemplo, Person['age'] devuelve el tipo de 'age' en la interfaz Person.",
    topic: "Tipos Indexados",
    difficulty: "básico"
  },
  {
    id: "ts-q-24",
    collectionId: "typescript",
    question: "¿Qué ventaja aportan los 'Template Literal Types' combinados con Mapped Types?",
    options: [
      "Permiten componer y validar patrones de strings basados en uniones de tipos literales (ej: `on${Capitalize<Event>}`).",
      "Interpolan variables de entorno del servidor en plantillas HTML durante el empaquetado.",
      "Permiten escribir código TypeScript dentro de cadenas de texto que se evalúan dinámicamente con eval().",
      "Generan expresiones regulares optimizadas para motores de búsqueda de bases de datos NoSQL."
    ],
    correctAnswerIndex: 0,
    explanation: "Los Template Literal Types extienden la sintaxis de plantillas de strings de JavaScript al sistema de tipos, permitiendo construir y validar uniones combinatorias de nombres de eventos, rutas o acciones de Redux.",
    topic: "Template Literal Types",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-25",
    collectionId: "typescript",
    question: "¿Qué previene la bandera 'noImplicitOverride' en clases de TypeScript?",
    options: [
      "Que una subclase sobreescriba accidentalmente un método de la clase base sin utilizar explícitamente la palabra clave 'override'.",
      "Que una clase hija herede métodos protegidos de una clase abstracta sin llamar a super().",
      "Que los métodos estáticos sean invocados desde instancias individuales de la clase.",
      "Que una clase implemente más de tres interfaces simultáneamente en su declaración."
    ],
    correctAnswerIndex: 0,
    explanation: "Con 'noImplicitOverride: true', cualquier método de una subclase que tenga el mismo nombre que uno de la clase base debe incluir 'override'. Si el método de la clase base cambia de nombre, el compilador alerta de inmediato.",
    topic: "Clases & POO en TypeScript",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-26",
    collectionId: "typescript",
    question: "¿Cuál es la diferencia entre 'any' y 'void' como tipo de retorno de una función callback?",
    options: [
      "'void' indica que el llamador ignora el valor devuelto, permitiendo retornar cualquier valor pero desalentando su uso.",
      "'void' prohíbe taxativamente que la función use la palabra clave return con cualquier valor que no sea undefined.",
      "'any' fuerza a que la función deba ser asíncrona retornando una Promise siempre.",
      "No existe diferencia; en callbacks ambos tipos fuerzan la misma validación estricta de retorno."
    ],
    correctAnswerIndex: 0,
    explanation: "Cuando un callback tipa su retorno como void (ej: () => void), TypeScript permite que la función devuelva cualquier valor pero prohíbe que el consumidor del callback dependa de ese valor devuelto, facilitando compatibilidad con métodos como forEach.",
    topic: "Funciones & Callbacks",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-27",
    collectionId: "typescript",
    question: "¿Qué efecto tiene el flag 'isolatedModules' en la configuración de TypeScript?",
    options: [
      "Advierte si se utiliza código que herramientas monofilamento como Babel o esbuild no pueden transpilar de forma segura por archivo.",
      "Aísla cada módulo en un contenedor Docker separado durante el proceso de compilación del proyecto.",
      "Impide que los módulos importen archivos que se encuentren fuera de la carpeta 'src'.",
      "Desactiva por completo el sistema de caché incremental del compilador de TypeScript."
    ],
    correctAnswerIndex: 0,
    explanation: "Transpiladores como Babel procesan un archivo a la vez sin conocer los tipos de otros archivos. 'isolatedModules' alerta ante patrones que requieren información de tipo cruzada (como reexportar tipos como valores o const enums no inicializados).",
    topic: "Compilador & Ecosistema",
    difficulty: "avanzado"
  },
  {
    id: "ts-q-28",
    collectionId: "typescript",
    question: "¿Cómo se construye el tipo de utilidad 'Record<K, T>' en el lenguaje?",
    options: [
      "type Record<K extends keyof any, T> = { [P in K]: T };",
      "type Record<K, T> = Map<K, T>;",
      "type Record<K, T> = T extends K ? [K, T] : never;",
      "type Record<K, T> = { key: K; value: T }[];"
    ],
    correctAnswerIndex: 0,
    explanation: "Record<K, T> es un Mapped Type que mapea cada clave P en K (donde K es una unión de strings, numbers o symbols) hacia el tipo de valor T.",
    topic: "Utility Types Internals",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-29",
    collectionId: "typescript",
    question: "¿Para qué se utiliza la directiva triple slash '/// <reference path=\"...\" />'?",
    options: [
      "Indicar al compilador una dependencia explícita hacia otro archivo de declaración de tipos para su inclusión en la compilación.",
      "Forzar una importación síncrona en tiempo de ejecución antes de cargar el script principal.",
      "Desactivar las advertencias del linter exclusivamente en las siguientes tres líneas de código.",
      "Conectar el archivo a un servidor de telemetría de tipos en la nube durante el desarrollo."
    ],
    correctAnswerIndex: 0,
    explanation: "Las directivas triple-slash son directivas para el compilador de TypeScript. <reference path='...' /> declara dependencias entre archivos de tipos, común en proyectos legacy o bundles que no utilizan módulos ES nativos.",
    topic: "Declaraciones & Directivas",
    difficulty: "intermedio"
  },
  {
    id: "ts-q-30",
    collectionId: "typescript",
    question: "¿Qué diferencia a los nuevos Decoradores de ECMAScript (Stage 3) introducidos en TypeScript 5.0 frente a los antiguos 'experimentalDecorators'?",
    options: [
      "Siguen el estándar oficial de TC39, no requieren emitDecoratorMetadata y reciben un objeto de contexto fuertemente tipado.",
      "Solo pueden aplicarse sobre clases abstractas y no admiten métodos ni campos de clase.",
      "Requieren el uso obligatorio de Babel para poder transpilarse a código ejecutable en Node.js.",
      "Se ejecutan en tiempo de compilación y se eliminan por completo del JavaScript emitido."
    ],
    correctAnswerIndex: 0,
    explanation: "TypeScript 5.0 soporta la propuesta Stage 3 de TC39 de decoradores nativos sin banderas experimentales. Cada decorador recibe el valor y un objeto 'context' tipado (ClassMethodDecoratorContext, etc.), sin depender de reflect-metadata.",
    topic: "Decoradores & Metaprogramación",
    difficulty: "avanzado"
  }
];
