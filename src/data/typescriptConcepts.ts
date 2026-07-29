import type { StudyConcept } from "./conceptTypes";

export const typescriptConcepts = [
  {
    "title": "Inferencia de tipos",
    "description": "Deduce tipos a partir de valores, retornos y contexto para reducir anotaciones redundantes.",
    "section": "Fundamentos del sistema de tipos",
    "family": "escáner de tipos",
    "layout": "standard"
  },
  {
    "title": "Anotaciones",
    "description": "Declaran explícitamente el tipo esperado cuando la inferencia no expresa por sí sola el contrato.",
    "section": "Fundamentos del sistema de tipos",
    "family": "puerta contractual",
    "layout": "standard"
  },
  {
    "title": "Tipos primitivos",
    "description": "Representan string, number, boolean, bigint, symbol, null y undefined dentro del sistema estático.",
    "section": "Fundamentos del sistema de tipos",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "let level: number = 18",
      "nodes": [
        "string",
        "number",
        "boolean",
        "bigint"
      ],
      "outcome": "valor compatible",
      "caption": "TypeScript modela los valores de JavaScript; no crea tipos de runtime nuevos."
    }
  },
  {
    "title": "any",
    "description": "Desactiva gran parte de la comprobación y permite que operaciones potencialmente inseguras atraviesen el sistema.",
    "section": "Fundamentos del sistema de tipos",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "let payload: any",
      "nodes": [
        "payload|externo",
        "any|sin verificar",
        "payload.fly()|permitido",
        "checker"
      ],
      "outcome": "riesgo pospuesto",
      "caption": "any propaga pérdida de información; úsalo como excepción temporal, no como diseño."
    }
  },
  {
    "title": "unknown",
    "description": "Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo.",
    "section": "Fundamentos del sistema de tipos",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "const payload: unknown = response",
      "nodes": [
        "unknown|entrada",
        "typeof|guard",
        "schema|validación",
        "checker"
      ],
      "outcome": "tipo estrechado",
      "caption": "unknown conserva seguridad porque ninguna operación específica es válida sin narrowing."
    }
  },
  {
    "title": "void y never",
    "description": "Distinguen funciones que no producen un valor útil de rutas que nunca completan normalmente.",
    "section": "Fundamentos del sistema de tipos",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "function log(): void · function fail(): never",
      "nodes": [
        "void|retorno ignorado",
        "never|no regresa",
        "console.log|completa",
        "throw|interrumpe"
      ],
      "outcome": "semánticas diferentes",
      "caption": "never también ayuda a comprobar que una unión fue manejada exhaustivamente."
    }
  },
  {
    "title": "Uniones",
    "description": "Permiten que un valor pertenezca a varias alternativas explícitas.",
    "section": "Modelado de datos",
    "family": "rutas válidas",
    "layout": "standard"
  },
  {
    "title": "Tipos literales",
    "description": "Restringen un valor a opciones exactas como \"idle\" | \"loading\" | \"success\".",
    "section": "Modelado de datos",
    "family": "lista cerrada",
    "layout": "standard"
  },
  {
    "title": "null, undefined y strictNullChecks",
    "description": "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar.",
    "section": "Modelado de datos",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "user?.profile ?? fallback",
      "nodes": [
        "User|presente",
        "undefined|ausente",
        "optional chain|acceso seguro",
        "null check"
      ],
      "outcome": "valor definido",
      "caption": "Con strictNullChecks, la ausencia deja de ser compatible silenciosamente con todos los tipos."
    }
  },
  {
    "title": "Propiedades opcionales",
    "description": "Modelan campos que pueden no existir sin confundir ausencia con un valor undefined explícito.",
    "section": "Modelado de datos",
    "family": "conectores opcionales",
    "layout": "standard"
  },
  {
    "title": "Readonly",
    "description": "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
    "section": "Modelado de datos",
    "family": "bloqueo",
    "layout": "standard"
  },
  {
    "title": "Arrays y tuplas",
    "description": "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas.",
    "section": "Modelado de datos",
    "family": "comparativa flexible y fija",
    "layout": "wide"
  },
  {
    "title": "Tipos de objetos",
    "description": "Describen la forma estructural de propiedades, métodos, índices y llamadas.",
    "section": "Modelado de datos",
    "family": "plano estructural",
    "layout": "standard"
  },
  {
    "title": "Alias de tipos",
    "description": "Asigna nombres reutilizables a cualquier composición de tipos.",
    "section": "Modelado de datos",
    "family": "plantilla reutilizable",
    "layout": "standard"
  },
  {
    "title": "Interfaces",
    "description": "Declaran contratos extensibles y admiten declaración merging.",
    "section": "Modelado de datos",
    "family": "capas extensibles",
    "layout": "standard"
  },
  {
    "title": "Intersecciones",
    "description": "Exigen que un valor satisfaga simultáneamente varias estructuras.",
    "section": "Modelado de datos",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "type ChampionCard = Champion & CardProps",
      "nodes": [
        "Champion|name · role",
        "CardProps|selected · onPress",
        "intersection|A & B",
        "value|todos los campos"
      ],
      "outcome": "contrato combinado",
      "caption": "Una intersección no elige una rama: acumula requisitos."
    }
  },
  {
    "title": "Uniones discriminadas",
    "description": "Usan una propiedad literal común para representar estados mutuamente excluyentes de forma segura.",
    "section": "Modelado de datos",
    "family": "memoria intermedia",
    "layout": "feature",
    "scene": {
      "variant": "cache",
      "code": "type Result = Success | Failure",
      "nodes": [
        "result|discriminated union",
        "kind: success|data",
        "kind: failure|error",
        "switch|narrowing"
      ],
      "outcome": "una variante válida",
      "caption": "El discriminante convierte estados imposibles en errores de compilación."
    }
  },
  {
    "title": "Tipos de funciones",
    "description": "Declaran parámetros, retorno, overloads y firmas de callback.",
    "section": "Funciones tipadas",
    "family": "puertos tipados",
    "layout": "standard"
  },
  {
    "title": "Firmas de llamada y constructores",
    "description": "Modelan valores que pueden invocarse con () o construirse mediante new.",
    "section": "Funciones tipadas",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "type Factory = { (): Item; new(): Item }",
      "nodes": [
        "call signature|factory()",
        "construct signature|new Factory()",
        "return|Item",
        "implementation|valor callable"
      ],
      "outcome": "forma invocable",
      "caption": "Las firmas describen capacidad; no implementan la función."
    }
  },
  {
    "title": "Sobrecargas",
    "description": "Expresan varias formas públicas de invocar una función con una implementación compatible común.",
    "section": "Funciones tipadas",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "format(value: Date): string; format(value: number): string",
      "nodes": [
        "call|Date",
        "call|number",
        "implementation|Date | number",
        "return|string"
      ],
      "outcome": "API precisa",
      "caption": "Las firmas visibles deben ser compatibles con la implementación y cubrir los casos reales."
    }
  },
  {
    "title": "Parámetros opcionales y por defecto",
    "description": "Modelan llamadas con argumentos ausentes y preservan una firma clara.",
    "section": "Funciones tipadas",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "function ping(timeout = 1000)",
      "nodes": [
        "timeout|number",
        "undefined|usa default",
        "null|no permitido",
        "signature"
      ],
      "outcome": "number interno",
      "caption": "Un parámetro con default se trata como opcional al llamar, pero queda definido dentro de la función."
    }
  },
  {
    "title": "this en funciones",
    "description": "Declara el tipo del receptor esperado sin convertirse en un argumento real de JavaScript.",
    "section": "Funciones tipadas",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "function attack(this: Champion, power: number)",
      "nodes": [
        "Champion|receptor",
        "this param|solo tipos",
        "power|number",
        "call|champion.attack"
      ],
      "outcome": "this conocido",
      "caption": "El parámetro this evita invocaciones sin el contexto requerido."
    }
  },
  {
    "title": "Narrowing",
    "description": "Reduce un tipo amplio mediante control de flujo y comprobaciones de runtime.",
    "section": "Narrowing y seguridad",
    "family": "árbol de decisión",
    "layout": "standard"
  },
  {
    "title": "typeof, instanceof e in",
    "description": "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama.",
    "section": "Narrowing y seguridad",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "if (\"damage\" in item)",
      "nodes": [
        "unknown|entrada",
        "typeof|string / number",
        "instanceof|clase",
        "in|propiedad",
        "branch|tipo preciso"
      ],
      "outcome": "rama estrechada",
      "caption": "TypeScript sigue el flujo y recuerda qué comprobaciones dominan cada uso."
    }
  },
  {
    "title": "Predicados de tipo",
    "description": "Permiten encapsular una comprobación personalizada con un retorno value is Type.",
    "section": "Narrowing y seguridad",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "function isChampion(x: unknown): x is Champion",
      "nodes": [
        "unknown|x",
        "checks|name · role",
        "predicate|x is Champion",
        "if"
      ],
      "outcome": "Champion",
      "caption": "El predicado debe reflejar fielmente la lógica de runtime; TypeScript confía en su declaración."
    }
  },
  {
    "title": "Funciones de aserción",
    "description": "Declaran que una función lanza si una condición no se cumple y refina el tipo después de llamarla.",
    "section": "Narrowing y seguridad",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "assertChampion(payload)",
      "nodes": [
        "unknown|payload",
        "asserts value is Champion|contrato",
        "throw|caso inválido",
        "continuation|Champion"
      ],
      "outcome": "frontera validada",
      "caption": "Una assertion function combina control de flujo con una API de validación imperativa."
    }
  },
  {
    "title": "Comprobación exhaustiva",
    "description": "Usa never para detectar variantes nuevas que no fueron atendidas en un switch.",
    "section": "Narrowing y seguridad",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "default: assertNever(state)",
      "nodes": [
        "idle",
        "loading",
        "success",
        "exhaustive"
      ],
      "outcome": "0 casos olvidados",
      "caption": "Cuando se agrega una variante, el caso default deja de aceptar never y falla el build."
    }
  },
  {
    "title": "Aserciones de tipo",
    "description": "Indican al compilador que el programador conoce un tipo más específico, sin validar nada en runtime.",
    "section": "Narrowing y seguridad",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "payload as Champion",
      "nodes": [
        "assertion|solo compilador",
        "validation|runtime real",
        "unsafe|puede mentir",
        "schema|comprueba datos"
      ],
      "outcome": "responsabilidad del autor",
      "caption": "Una aserción no convierte ni inspecciona el valor."
    }
  },
  {
    "title": "satisfies",
    "description": "Comprueba que una expresión cumple un contrato sin reemplazar su tipo inferido más específico.",
    "section": "Narrowing y seguridad",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "palette satisfies Record<Color, string>",
      "nodes": [
        "annotation|cambia contexto",
        "satisfies|valida",
        "literal types|se conservan",
        "error|clave faltante"
      ],
      "outcome": "precisión + contrato",
      "caption": "satisfies es ideal para configuraciones donde necesitas validar forma y conservar literales."
    }
  },
  {
    "title": "Const assertions",
    "description": "Convierte propiedades y elementos inferidos en readonly y conserva valores literales exactos.",
    "section": "Narrowing y seguridad",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "const routes = [\"home\", \"profile\"] as const",
      "nodes": [
        "array|string[]",
        "as const|readonly tuple",
        "\"home\"|literal",
        "\"profile\"|literal"
      ],
      "outcome": "unión derivable",
      "caption": "as const afecta el tipo estático; no congela el objeto en runtime."
    }
  },
  {
    "title": "Genéricos",
    "description": "Relacionan entrada y salida mediante parámetros de tipo reutilizables.",
    "section": "Genéricos y tipos derivados",
    "family": "túnel que preserva tipo",
    "layout": "standard"
  },
  {
    "title": "Restricciones genéricas",
    "description": "Limitan los tipos aceptados sin perder la información específica del argumento.",
    "section": "Genéricos y tipos derivados",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "function getId<T extends { id: string }>(value: T)",
      "nodes": [
        "Champion|id + role",
        "Order|id + total",
        "number|sin id",
        "extends"
      ],
      "outcome": "T conservado",
      "caption": "La restricción garantiza una capacidad mínima y el resultado sigue siendo el tipo concreto."
    }
  },
  {
    "title": "Parámetros genéricos por defecto",
    "description": "Proporcionan un tipo de respaldo cuando el consumidor no especifica uno.",
    "section": "Genéricos y tipos derivados",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "type ApiResponse<T = unknown>",
      "nodes": [
        "ApiResponse|sin argumento",
        "default|unknown",
        "ApiResponse<Order>|explícito",
        "result|T"
      ],
      "outcome": "API gradual",
      "caption": "Los defaults reducen ruido sin eliminar la posibilidad de especialización."
    }
  },
  {
    "title": "keyof",
    "description": "Produce una unión con las claves conocidas de un tipo.",
    "section": "Genéricos y tipos derivados",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "type ChampionKey = keyof Champion",
      "nodes": [
        "Champion|name · role · level",
        "keyof|extrae claves",
        "union|\"name\" | \"role\" | \"level\"",
        "consumer|get"
      ],
      "outcome": "claves seguras",
      "caption": "keyof conecta APIs dinámicas de acceso con nombres válidos comprobados."
    }
  },
  {
    "title": "typeof en posiciones de tipo",
    "description": "Deriva un tipo desde la forma estática de un valor ya declarado.",
    "section": "Genéricos y tipos derivados",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "type Config = typeof config",
      "nodes": [
        "config|valor",
        "typeof type query|lee forma",
        "Config|tipo derivado",
        "reuse|funciones"
      ],
      "outcome": "una fuente de verdad",
      "caption": "Este typeof pertenece al compilador; no es el operador typeof de runtime."
    }
  },
  {
    "title": "Indexed access types",
    "description": "Selecciona el tipo de una propiedad o conjunto de propiedades con T[K].",
    "section": "Genéricos y tipos derivados",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "type Role = Champion[\"role\"]",
      "nodes": [
        "Champion|estructura",
        "\"role\"|key",
        "T[K]|lookup",
        "checker"
      ],
      "outcome": "\"ADC\" | \"Tank\"",
      "caption": "La clave también puede ser una unión para obtener varios tipos de propiedad."
    }
  },
  {
    "title": "Mapped types",
    "description": "Recorren claves para transformar sistemáticamente modificadores y valores.",
    "section": "Genéricos y tipos derivados",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "type Flags<T> = { [K in keyof T]: boolean }",
      "nodes": [
        "name→boolean",
        "role→boolean",
        "level→boolean",
        "mapped"
      ],
      "outcome": "estructura transformada",
      "caption": "Los mapped types automatizan patrones que de otro modo duplicarían contratos."
    }
  },
  {
    "title": "Remapeo de claves",
    "description": "Cambia nombres de propiedades dentro de un mapped type mediante as.",
    "section": "Genéricos y tipos derivados",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "[K in keyof T as `get${Capitalize<K>}`]: () => T[K]",
      "nodes": [
        "name|clave original",
        "Capitalize|Name",
        "template|getName",
        "method|()=>string"
      ],
      "outcome": "API derivada",
      "caption": "El remapeo puede filtrar claves produciendo never o generar nuevos nombres."
    }
  },
  {
    "title": "Tipos condicionales",
    "description": "Seleccionan un tipo según una relación de asignabilidad.",
    "section": "Genéricos y tipos derivados",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "type Message<T> = T extends Error ? string : T",
      "nodes": [
        "T|entrada",
        "extends Error|condición",
        "true|string",
        "false|T"
      ],
      "outcome": "tipo seleccionado",
      "caption": "Con un parámetro naked sobre una unión, el condicional se distribuye por cada miembro."
    }
  },
  {
    "title": "infer",
    "description": "Extrae una parte de un tipo dentro de la rama verdadera de un condicional.",
    "section": "Genéricos y tipos derivados",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "type Result<T> = T extends Promise<infer R> ? R : T",
      "nodes": [
        "Promise<Order>|entrada",
        "infer R|captura Order",
        "true branch|R",
        "Result|Order"
      ],
      "outcome": "tipo interno",
      "caption": "infer permite nombrar temporalmente piezas que coinciden con un patrón."
    }
  },
  {
    "title": "Template literal types",
    "description": "Construyen uniones de strings combinando literales y otras uniones.",
    "section": "Genéricos y tipos derivados",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "type Event = `${ChampionKey}Changed`",
      "nodes": [
        "nameChanged",
        "roleChanged",
        "levelChanged",
        "template"
      ],
      "outcome": "eventos tipados",
      "caption": "La expansión cartesiana puede generar APIs precisas, pero uniones enormes dañan rendimiento."
    }
  },
  {
    "title": "Utility Types",
    "description": "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited.",
    "section": "Genéricos y tipos derivados",
    "family": "taller de tipos",
    "layout": "standard"
  },
  {
    "title": "Tipos recursivos",
    "description": "Describen estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
    "section": "Genéricos y tipos derivados",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "type Node = { value: string; children: Node[] }",
      "nodes": [
        "Node|root",
        "Node|child A",
        "Node|child B",
        "base|children: []"
      ],
      "outcome": "estructura anidada",
      "caption": "Toda recursión necesita una forma base que termine la expansión."
    }
  },
  {
    "title": "Tipos nominales con branding",
    "description": "Añaden una marca estática para evitar mezclar valores estructuralmente idénticos con significados diferentes.",
    "section": "Genéricos y tipos derivados",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "type UserId = string & { readonly __brand: \"UserId\" }",
      "nodes": [
        "string|raw",
        "validator|parse id",
        "brand|UserId",
        "function"
      ],
      "outcome": "identidad semántica",
      "caption": "El brand no existe en runtime; debe crearse en una frontera confiable."
    }
  },
  {
    "title": "Clases y modificadores",
    "description": "Tipan propiedades, constructores y métodos con public, protected, private y readonly.",
    "section": "Clases y módulos",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "class Champion { private energy = 100 }",
      "nodes": [
        "public|API",
        "protected|subclases",
        "private|clase",
        "readonly|solo inicializa"
      ],
      "outcome": "visibilidad estática",
      "caption": "private de TypeScript puede borrarse al emitir; #private de JavaScript sí se aplica en runtime."
    }
  },
  {
    "title": "Clases abstractas",
    "description": "Definen comportamiento compartido y miembros que las subclases deben implementar.",
    "section": "Clases y módulos",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "abstract class Ability { abstract cast(): void }",
      "nodes": [
        "Ability|base abstracta",
        "Rocket|implementa cast",
        "Shield|implementa cast",
        "new Ability|bloqueado"
      ],
      "outcome": "subclases completas",
      "caption": "Una clase abstracta no puede instanciarse directamente."
    }
  },
  {
    "title": "Polimorfismo de this",
    "description": "Permite que métodos fluent devuelvan el subtipo concreto mediante el tipo especial this.",
    "section": "Clases y módulos",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "class Query { where(): this }",
      "nodes": [
        "Query|base",
        "ChampionQuery|subtipo",
        "where()|retorna this",
        "limit()|mantiene subtipo"
      ],
      "outcome": "API encadenable",
      "caption": "El tipo this evita perder métodos específicos al heredar una API fluent."
    }
  },
  {
    "title": "Decoradores",
    "description": "Añaden metadatos o transformaciones declarativas a clases y miembros mediante la propuesta estándar soportada por TypeScript.",
    "section": "Clases y módulos",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "@logged class ApiClient {}",
      "nodes": [
        "class|ApiClient",
        "decorator|logged",
        "context|class",
        "replacement|opcional"
      ],
      "outcome": "comportamiento instrumentado",
      "caption": "Los decoradores ejecutan JavaScript; su tipado debe reflejar si reemplazan o envuelven el valor."
    }
  },
  {
    "title": "Módulos y exports",
    "description": "Usan el sistema de módulos de JavaScript y añaden comprobación estática entre archivos.",
    "section": "Clases y módulos",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "export type Champion · export function load()",
      "nodes": [
        "champion.ts|exports",
        "api.ts|imports",
        "app.ts|consumer",
        "checker|resuelve"
      ],
      "outcome": "dependencias comprobadas",
      "caption": "TypeScript no inventa un runtime de módulos: emite según target y module configurados."
    }
  },
  {
    "title": "Imports y exports solo de tipos",
    "description": "Marcan dependencias que deben desaparecer al emitir JavaScript.",
    "section": "Clases y módulos",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "import type { Champion } from \"./types\"",
      "nodes": [
        "import|valor runtime",
        "import type|solo checker",
        "bundle|conserva valor",
        "emit|borra tipo"
      ],
      "outcome": "runtime limpio",
      "caption": "La separación evita imports accidentales que cambien side effects o bundling."
    }
  },
  {
    "title": "Declaraciones .d.ts",
    "description": "Describen el tipo de código JavaScript existente sin generar implementación.",
    "section": "Clases y módulos",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "declare module \"hextech-sdk\"",
      "nodes": [
        "runtime JS|biblioteca",
        "index.d.ts|contrato",
        "editor|autocompletado",
        "compiler|verifica uso"
      ],
      "outcome": "tipos sin código emitido",
      "caption": "Una declaración debe coincidir con el comportamiento real de la biblioteca."
    }
  },
  {
    "title": "Declaraciones ambientales",
    "description": "Informan sobre variables, módulos o APIs disponibles externamente mediante declare.",
    "section": "Clases y módulos",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "declare const __APP_VERSION__: string",
      "nodes": [
        "global|__APP_VERSION__",
        "host|inyecta valor",
        "type|string",
        "emit|ninguno"
      ],
      "outcome": "entorno conocido",
      "caption": "declare promete que algo existirá en runtime; TypeScript no lo crea."
    }
  },
  {
    "title": "Module augmentation y declaration merging",
    "description": "Extienden contratos existentes de forma controlada cuando una librería soporta plugins.",
    "section": "Clases y módulos",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "declare module \"express\" { interface Request { user: User } }",
      "nodes": [
        "base module|Request",
        "augmentation|user",
        "merged type|Request + user",
        "middleware|asigna runtime"
      ],
      "outcome": "API extendida",
      "caption": "La ampliación estática debe acompañar la modificación real en ejecución."
    }
  },
  {
    "title": "tsconfig",
    "description": "Centraliza target, módulos, librerías, strictness, paths, inclusión y salida del compilador.",
    "section": "Compilador y producción",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "{ \"compilerOptions\": { \"strict\": true } }",
      "nodes": [
        "target|runtime destino",
        "module|formato",
        "lib|APIs disponibles",
        "include|archivos",
        "outDir|emisión"
      ],
      "outcome": "proyecto reproducible",
      "caption": "El tsconfig expresa supuestos del entorno; copiar uno sin entenderlo puede ocultar errores."
    }
  },
  {
    "title": "Modo strict",
    "description": "Activa un conjunto coordinado de comprobaciones que vuelve explícitas ausencias y relaciones inseguras.",
    "section": "Compilador y producción",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "\"strict\": true",
      "nodes": [
        "strictNullChecks",
        "noImplicitAny",
        "strictFunctionTypes",
        "checker"
      ],
      "outcome": "contratos más fiables",
      "caption": "Adoptar strict temprano reduce migraciones difíciles y revela supuestos ocultos."
    }
  },
  {
    "title": "Opciones de precisión adicional",
    "description": "noUncheckedIndexedAccess y exactOptionalPropertyTypes modelan con más fidelidad accesos e inexistencia.",
    "section": "Compilador y producción",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "items[index] · optional?: T",
      "nodes": [
        "default|asume elemento",
        "unchecked access|T | undefined",
        "optional|ausente",
        "undefined explícito|distinto"
      ],
      "outcome": "menos estados implícitos",
      "caption": "Estas opciones pueden aumentar anotaciones, pero acercan los tipos a la realidad de JavaScript."
    }
  },
  {
    "title": "Resolución de módulos",
    "description": "Determina cómo un specifier se conecta con archivos, package exports y tipos según el entorno.",
    "section": "Compilador y producción",
    "family": "jerarquía y dependencias",
    "layout": "feature",
    "scene": {
      "variant": "tree",
      "code": "import { x } from \"pkg/subpath\"",
      "nodes": [
        "specifier|pkg/subpath",
        "package.json|exports/types",
        "moduleResolution|bundler/node",
        "file|index.d.ts"
      ],
      "outcome": "módulo resuelto",
      "caption": "La configuración debe coincidir con el bundler o runtime que ejecutará el código."
    }
  },
  {
    "title": "Emisión, source maps y declarations",
    "description": "Controla qué JavaScript, mapas y archivos .d.ts produce el compilador.",
    "section": "Compilador y producción",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "tsc --declaration --sourceMap",
      "nodes": [
        "source.ts|entrada",
        "type check|diagnósticos",
        "source.js|runtime",
        "source.js.map|debug",
        ".d.ts|consumidores"
      ],
      "outcome": "artefactos de distribución",
      "caption": "noEmit permite usar TypeScript solo como checker cuando otro tool transforma el código."
    }
  },
  {
    "title": "Project references",
    "description": "Divide repositorios grandes en proyectos compilables con dependencias y caché incremental.",
    "section": "Compilador y producción",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "tsc -b packages/app",
      "nodes": [
        "types|composite",
        "api|depends on types",
        "app|depends on api",
        "build mode|ordena"
      ],
      "outcome": "build incremental",
      "caption": "Las referencias hacen explícitas fronteras y evitan recompilar todo el monorepo."
    }
  },
  {
    "title": "Migración desde JavaScript",
    "description": "Permite avanzar gradualmente con allowJs, checkJs, JSDoc y archivos convertidos por frontera.",
    "section": "Compilador y producción",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "allowJs → checkJs → .ts",
      "nodes": [
        "JS sin check|inicio",
        "JSDoc|tipos ligeros",
        "checkJs|diagnósticos",
        ".ts|contrato completo"
      ],
      "outcome": "adopción incremental",
      "caption": "Migrar por módulos y fronteras reduce el riesgo frente a una reescritura total."
    }
  },
  {
    "title": "Validación de runtime",
    "description": "Separa el contrato estático de la comprobación real de JSON, formularios y datos externos.",
    "section": "Compilador y producción",
    "family": "comparativa técnica",
    "layout": "feature",
    "scene": {
      "variant": "compare",
      "code": "const order = schema.parse(payload)",
      "nodes": [
        "TypeScript|compile time",
        "schema|runtime",
        "API response|unknown",
        "Order|validado"
      ],
      "outcome": "tipos confiables desde la frontera",
      "caption": "Los tipos desaparecen al compilar; datos externos siguen necesitando validación."
    }
  },
  {
    "title": "Compatibilidad estructural y varianza",
    "description": "Explica por qué valores con la misma forma pueden asignarse y cómo cambian relaciones en callbacks y genéricos.",
    "section": "Compilador y producción",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "Source → Target",
      "nodes": [
        "propiedades requeridas",
        "parámetros",
        "retornos",
        "variance"
      ],
      "outcome": "asignación válida o error",
      "caption": "La compatibilidad estructural es flexible, pero puede sorprender con métodos, callbacks y mutabilidad."
    }
  },
  {
    "title": "Pruebas de tipos",
    "description": "Verifican inferencias y errores esperados para impedir regresiones en APIs genéricas o librerías.",
    "section": "Compilador y producción",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "tsc --noEmit",
      "nodes": [
        "expectType<Order>",
        "@ts-expect-error",
        "d.ts tests",
        "CI"
      ],
      "outcome": "contrato protegido",
      "caption": "Las pruebas de runtime no comprueban la experiencia del consumidor en el editor."
    }
  },
  {
    "title": "Rendimiento del checker",
    "description": "Controla complejidad de uniones, recursión y tipos distribuidos para mantener builds y editor responsivos.",
    "section": "Compilador y producción",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "tsc --extendedDiagnostics",
      "nodes": [
        "types|cantidad",
        "instantiations|genéricos",
        "check time|latencia",
        "refactor|simplifica"
      ],
      "outcome": "feedback rápido",
      "caption": "El tipo más sofisticado no siempre es el mejor si vuelve incomprensible o lento el proyecto."
    }
  }
] satisfies readonly StudyConcept[];
