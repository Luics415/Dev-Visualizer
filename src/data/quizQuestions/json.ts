import type { QuizQuestion } from "@/data/quizTypes";

export const jsonQuestions: QuizQuestion[] = [
  {
    "id": "json-q-01",
    "collectionId": "json",
    "question": "En JSON (Valores JSON, estructura y contrato), ¿qué función técnica cumple «JSON text y value»?",
    "options": [
      "Reconoce un valor completo serializado según la gramática, no una asignación o expresión de lenguaje.",
      "Modela object, array, string, number, boolean y null sin inventar tipos básicos adicionales al operar.",
      "Distingue el payload concreto del schema, perfil o regla de negocio que describe formas aceptables.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "JSON text y value (Valores JSON, estructura y contrato): Reconoce un valor completo serializado según la gramática, no una asignación o expresión de lenguaje.",
    "topic": "Valores JSON, estructura y contrato",
    "difficulty": "básico"
  },
  {
    "id": "json-q-02",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «Seis clases de valores» en valores json, estructura y contrato?",
    "options": [
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores en el flujo.",
      "Modela object, array, string, number, boolean y null sin inventar tipos básicos adicionales.",
      "Separa framing, sintaxis, schema, semántica, autorización y persistencia segura en el flujo.",
      "No asume que strings visualmente iguales tienen la misma secuencia de puntos de código al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Seis clases de valores (Valores JSON, estructura y contrato): Modela object, array, string, number, boolean y null sin inventar tipos básicos adicionales.",
    "topic": "Valores JSON, estructura y contrato",
    "difficulty": "básico"
  },
  {
    "id": "json-q-03",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «Instancia y contrato»?",
    "options": [
      "Modela object, array, string, number, boolean y null sin inventar tipos básicos adicionales al operar.",
      "Reconoce un valor completo serializado según la gramática, no una asignación o expresión de lenguaje.",
      "Distingue el payload concreto del schema, perfil o regla de negocio que describe formas aceptables.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Instancia y contrato (Valores JSON, estructura y contrato): Distingue el payload concreto del schema, perfil o regla de negocio que describe formas aceptables.",
    "topic": "Valores JSON, estructura y contrato",
    "difficulty": "básico"
  },
  {
    "id": "json-q-04",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «Bytes y UTF-8»?",
    "options": [
      "Separa framing, sintaxis, schema, semántica, autorización y persistencia segura al operar.",
      "Establece límites y conversión antes de mapear a tipos nativos de tamaño fijo al operar.",
      "Define si ambos estados significan desconocido, borrado, vacío o no aplicable al operar.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Bytes y UTF-8 (Valores JSON, estructura y contrato): Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores.",
    "topic": "Valores JSON, estructura y contrato",
    "difficulty": "básico"
  },
  {
    "id": "json-q-05",
    "collectionId": "json",
    "question": "Respecto a valores json, estructura y contrato en JSON, ¿cuál es el propósito de «Capas de validez»?",
    "options": [
      "Separa framing, sintaxis, schema, semántica, autorización y persistencia segura de forma segura.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores al operar.",
      "Modela object, array, string, number, boolean y null sin inventar tipos básicos adicionales.",
      "Combina signo, parte entera, fracción y exponente sin ceros iniciales no permitidos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Capas de validez (Valores JSON, estructura y contrato): Separa framing, sintaxis, schema, semántica, autorización y persistencia segura.",
    "topic": "Valores JSON, estructura y contrato",
    "difficulty": "básico"
  },
  {
    "id": "json-q-06",
    "collectionId": "json",
    "question": "En JSON (Sintaxis JSON desde cero), ¿qué función técnica cumple «JSON text»?",
    "options": [
      "Agrupa miembros nombre-valor entre llaves sin atribuirles automáticamente una clase de lenguaje con precisión.",
      "Reconoce que RFC 8259 permite cualquier valor JSON completo, aunque ciertos perfiles exijan objeto o array.",
      "Usa solamente la gramática permitida: JSON estándar no admite comentarios ni trailing commas con precisión.",
      "Reconoce un valor completo serializado según la gramática, no una asignación o expresión de lenguaje al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "JSON text y JSON value (Sintaxis JSON desde cero): Reconoce que RFC 8259 permite cualquier valor JSON completo, aunque ciertos perfiles exijan objeto o array.",
    "topic": "Sintaxis JSON desde cero",
    "difficulty": "básico"
  },
  {
    "id": "json-q-07",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «Objetos» en sintaxis json desde cero?",
    "options": [
      "Usa solamente la gramática permitida: JSON estándar no admite comentarios ni trailing commas al operar.",
      "No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene al operar.",
      "Agrupa miembros nombre-valor entre llaves sin atribuirles automáticamente una clase de lenguaje.",
      "Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259 al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Objetos (Sintaxis JSON desde cero): Agrupa miembros nombre-valor entre llaves sin atribuirles automáticamente una clase de lenguaje.",
    "topic": "Sintaxis JSON desde cero",
    "difficulty": "básico"
  },
  {
    "id": "json-q-08",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «Arrays»?",
    "options": [
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes al operar.",
      "Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática al operar.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores al operar.",
      "Conserva una secuencia ordenada de valores posiblemente heterogéneos de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Arrays (Sintaxis JSON desde cero): Conserva una secuencia ordenada de valores posiblemente heterogéneos.",
    "topic": "Sintaxis JSON desde cero",
    "difficulty": "básico"
  },
  {
    "id": "json-q-09",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «Strings, numbers, booleans y null»?",
    "options": [
      "Domina los únicos valores escalares definidos por la sintaxis manteniendo el contrato activo.",
      "Conserva una secuencia ordenada de valores posiblemente heterogéneos de forma segura.",
      "Separa framing, sintaxis, schema, semántica, autorización y persistencia segura al operar.",
      "Representa caracteres reservados o de control mediante las secuencias definidas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Strings, numbers, booleans y null (Sintaxis JSON desde cero): Domina los únicos valores escalares definidos por la sintaxis.",
    "topic": "Sintaxis JSON desde cero",
    "difficulty": "básico"
  },
  {
    "id": "json-q-10",
    "collectionId": "json",
    "question": "Respecto a sintaxis json desde cero en JSON, ¿cuál es el propósito de «Whitespace, comas y dos puntos»?",
    "options": [
      "No asume que strings visualmente iguales tienen la misma secuencia de puntos de código al operar.",
      "Usa solamente la gramática permitida: JSON estándar no admite comentarios ni trailing commas.",
      "Reconoce el rango entero exacto ampliamente interoperable y evita pérdidas silenciosas al operar.",
      "Distingue salida válida ordinaria de una forma canonical requerida para digest o firma al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Whitespace, comas y dos puntos (Sintaxis JSON desde cero): Usa solamente la gramática permitida: JSON estándar no admite comentarios ni trailing commas.",
    "topic": "Sintaxis JSON desde cero",
    "difficulty": "básico"
  },
  {
    "id": "json-q-11",
    "collectionId": "json",
    "question": "En JSON (Strings, Unicode y escapes JSON), ¿qué función técnica cumple «UTF-8 para intercambio abierto»?",
    "options": [
      "Representa caracteres reservados o de control mediante las secuencias definidas en el flujo.",
      "No asume que strings visualmente iguales tienen la misma secuencia de puntos de código.",
      "Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259.",
      "No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene."
    ],
    "correctAnswerIndex": 2,
    "explanation": "UTF-8 para intercambio abierto (Strings, Unicode y escapes JSON): Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259.",
    "topic": "Strings, Unicode y escapes JSON",
    "difficulty": "básico"
  },
  {
    "id": "json-q-12",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «Escapes de comillas, slash» en strings, unicode y escapes json?",
    "options": [
      "No asume que strings visualmente iguales tienen la misma secuencia de puntos de código al operar.",
      "Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259.",
      "No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene.",
      "Representa caracteres reservados o de control mediante las secuencias definidas al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Escapes de comillas, slash y control (Strings, Unicode y escapes JSON): Representa caracteres reservados o de control mediante las secuencias definidas.",
    "topic": "Strings, Unicode y escapes JSON",
    "difficulty": "básico"
  },
  {
    "id": "json-q-13",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «Escapes Unicode»?",
    "options": [
      "Interpreta uXXXX como unidades UTF-16 de escape, incluyendo pares sustitutos cuando corresponda al operar.",
      "No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene.",
      "Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259 al operar.",
      "No asume que strings visualmente iguales tienen la misma secuencia de puntos de código al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Escapes Unicode (Strings, Unicode y escapes JSON): Interpreta uXXXX como unidades UTF-16 de escape, incluyendo pares sustitutos cuando corresponda.",
    "topic": "Strings, Unicode y escapes JSON",
    "difficulty": "básico"
  },
  {
    "id": "json-q-14",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «BOM»?",
    "options": [
      "No asume que strings visualmente iguales tienen la misma secuencia de puntos de código al operar.",
      "No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene.",
      "Representa caracteres reservados o de control mediante las secuencias definidas al operar.",
      "Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259."
    ],
    "correctAnswerIndex": 1,
    "explanation": "BOM (Strings, Unicode y escapes JSON): No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene.",
    "topic": "Strings, Unicode y escapes JSON",
    "difficulty": "básico"
  },
  {
    "id": "json-q-15",
    "collectionId": "json",
    "question": "Respecto a strings, unicode y escapes json en JSON, ¿cuál es el propósito de «Normalización Unicode»?",
    "options": [
      "Representa caracteres reservados o de control mediante las secuencias definidas al operar.",
      "Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259.",
      "No asume que strings visualmente iguales tienen la misma secuencia de puntos de código.",
      "Separa framing, sintaxis, schema, semántica, autorización y persistencia segura al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Normalización Unicode (Strings, Unicode y escapes JSON): No asume que strings visualmente iguales tienen la misma secuencia de puntos de código.",
    "topic": "Strings, Unicode y escapes JSON",
    "difficulty": "básico"
  },
  {
    "id": "json-q-16",
    "collectionId": "json",
    "question": "En JSON (Números JSON), ¿qué función técnica cumple «Gramática numérica»?",
    "options": [
      "Establece límites y conversión antes de mapear a tipos nativos de tamaño fijo al operar.",
      "Rechaza valores no finitos porque no pertenecen a la gramática JSON de forma segura.",
      "Define si ambos estados significan desconocido, borrado, vacío o no aplicable al operar.",
      "Combina signo, parte entera, fracción y exponente sin ceros iniciales no permitidos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Gramática numérica (Números JSON): Combina signo, parte entera, fracción y exponente sin ceros iniciales no permitidos.",
    "topic": "Números JSON",
    "difficulty": "básico"
  },
  {
    "id": "json-q-17",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «NaN e Infinity ausentes» en números json?",
    "options": [
      "Rechaza valores no finitos porque no pertenecen a la gramática JSON sin degradar el flujo.",
      "Combina signo, parte entera, fracción y exponente sin ceros iniciales no permitidos.",
      "Establece límites y conversión antes de mapear a tipos nativos de tamaño fijo al operar.",
      "Reconoce el rango entero exacto ampliamente interoperable y evita pérdidas silenciosas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "NaN e Infinity ausentes (Números JSON): Rechaza valores no finitos porque no pertenecen a la gramática JSON.",
    "topic": "Números JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-18",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «Interoperabilidad IEEE 754»?",
    "options": [
      "Combina signo, parte entera, fracción y exponente sin ceros iniciales no permitidos al operar.",
      "Reconoce el rango entero exacto ampliamente interoperable y evita pérdidas silenciosas.",
      "Establece límites y conversión antes de mapear a tipos nativos de tamaño fijo al operar.",
      "Rechaza valores no finitos porque no pertenecen a la gramática JSON de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Interoperabilidad IEEE 754 (Números JSON): Reconoce el rango entero exacto ampliamente interoperable y evita pérdidas silenciosas.",
    "topic": "Números JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-19",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «Decimal y dinero»?",
    "options": [
      "Reconoce que puede ser anotación o assertion según vocabulario, configuración y soporte del validador al operar.",
      "Reconoce un valor completo serializado según la gramática, no una asignación o expresión de lenguaje al operar.",
      "Transporta precisión contractual mediante una estrategia acordada, con frecuencia un string decimal validado.",
      "Reconoce el rango entero exacto ampliamente interoperable y evita pérdidas silenciosas sin degradar el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Decimal y dinero (Números JSON): Transporta precisión contractual mediante una estrategia acordada, con frecuencia un string decimal validado.",
    "topic": "Números JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-20",
    "collectionId": "json",
    "question": "Respecto a números json en JSON, ¿cuál es el propósito de «Números grandes y exponentes»?",
    "options": [
      "Combina signo, parte entera, fracción y exponente sin ceros iniciales no permitidos al operar.",
      "Reconoce el rango entero exacto ampliamente interoperable y evita pérdidas silenciosas.",
      "Rechaza valores no finitos porque no pertenecen a la gramática JSON de modo predecible.",
      "Establece límites y conversión antes de mapear a tipos nativos de tamaño fijo al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Números grandes y exponentes (Números JSON): Establece límites y conversión antes de mapear a tipos nativos de tamaño fijo.",
    "topic": "Números JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-21",
    "collectionId": "json",
    "question": "En JSON (Objetos, arrays y estados JSON), ¿qué función técnica cumple «Nombres de miembro únicos»?",
    "options": [
      "Evita duplicados porque los parsers difieren entre conservar primero, último, todos o rechazar.",
      "Define si ambos estados significan desconocido, borrado, vacío o no aplicable de forma clara.",
      "Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259.",
      "No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Nombres de miembro únicos (Objetos, arrays y estados JSON): Evita duplicados porque los parsers difieren entre conservar primero, último, todos o rechazar.",
    "topic": "Objetos, arrays y estados JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-22",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «Orden de miembros» en objetos, arrays y estados json?",
    "options": [
      "Define si ambos estados significan desconocido, borrado, vacío o no aplicable en el flujo.",
      "No usa el orden de propiedades de un objeto como contrato semántico de modo predecible.",
      "Documenta formatos porque JSON básico no define tipos nativos para ellos con precisión.",
      "Separa framing, sintaxis, schema, semántica, autorización y persistencia segura al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Orden de miembros (Objetos, arrays y estados JSON): No usa el orden de propiedades de un objeto como contrato semántico.",
    "topic": "Objetos, arrays y estados JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-23",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «Orden de arrays»?",
    "options": [
      "Define si ambos estados significan desconocido, borrado, vacío o no aplicable en ejecución.",
      "Documenta formatos porque JSON básico no define tipos nativos para ellos de forma clara.",
      "Conserva la posición cuando forma parte del significado durante la ejecución del módulo.",
      "No usa el orden de propiedades de un objeto como contrato semántico de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Orden de arrays (Objetos, arrays y estados JSON): Conserva la posición cuando forma parte del significado.",
    "topic": "Objetos, arrays y estados JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-24",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «null frente a propiedad ausente»?",
    "options": [
      "Documenta formatos porque JSON básico no define tipos nativos para ellos sin perder estado.",
      "No usa el orden de propiedades de un objeto como contrato semántico de modo predecible.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes al operar.",
      "Define si ambos estados significan desconocido, borrado, vacío o no aplicable al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "null frente a propiedad ausente (Objetos, arrays y estados JSON): Define si ambos estados significan desconocido, borrado, vacío o no aplicable.",
    "topic": "Objetos, arrays y estados JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-25",
    "collectionId": "json",
    "question": "Respecto a objetos, arrays y estados json en JSON, ¿cuál es el propósito de «Fechas, bytes y enums como convenciones»?",
    "options": [
      "Documenta formatos porque JSON básico no define tipos nativos para ellos sin perder estado.",
      "Define si ambos estados significan desconocido, borrado, vacío o no aplicable al operar.",
      "No usa el orden de propiedades de un objeto como contrato semántico sin perder estado.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fechas, bytes y enums como convenciones (Objetos, arrays y estados JSON): Documenta formatos porque JSON básico no define tipos nativos para ellos.",
    "topic": "Objetos, arrays y estados JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-26",
    "collectionId": "json",
    "question": "En JSON (Parsing y serialización JSON), ¿qué función técnica cumple «Lexer, parser y modelo nativo»?",
    "options": [
      "Alinea encabezado, bytes y expectativas en vez de inferir el formato por extensión al operar.",
      "Convierte tokens en valores del runtime sin asumir equivalencia exacta de tipos al operar.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes al operar.",
      "Distingue salida válida ordinaria de una forma canonical requerida para digest o firma."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Lexer, parser y modelo nativo (Parsing y serialización JSON): Convierte tokens en valores del runtime sin asumir equivalencia exacta de tipos.",
    "topic": "Parsing y serialización JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-27",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «Errores y offsets» en parsing y serialización json?",
    "options": [
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes al operar.",
      "Alinea encabezado, bytes y expectativas en vez de inferir el formato por extensión al operar.",
      "Reporta ubicación y causa útil sin devolver el payload completo ni secretos en el flujo.",
      "Convierte tokens en valores del runtime sin asumir equivalencia exacta de tipos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Errores y offsets (Parsing y serialización JSON): Reporta ubicación y causa útil sin devolver el payload completo ni secretos.",
    "topic": "Parsing y serialización JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-28",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «Serialización determinista o libre»?",
    "options": [
      "Convierte tokens en valores del runtime sin asumir equivalencia exacta de tipos al operar.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes al operar.",
      "Alinea encabezado, bytes y expectativas en vez de inferir el formato por extensión.",
      "Distingue salida válida ordinaria de una forma canonical requerida para digest o firma."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Serialización determinista o libre (Parsing y serialización JSON): Distingue salida válida ordinaria de una forma canonical requerida para digest o firma.",
    "topic": "Parsing y serialización JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-29",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «Streaming JSON»?",
    "options": [
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes.",
      "Reporta ubicación y causa útil sin devolver el payload completo ni secretos.",
      "Convierte tokens en valores del runtime sin asumir equivalencia exacta de tipos.",
      "Alinea encabezado, bytes y expectativas en vez de inferir el formato por extensión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Streaming JSON (Parsing y serialización JSON): Usa parser incremental, text sequences o un framing explícito para flujos grandes.",
    "topic": "Parsing y serialización JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-30",
    "collectionId": "json",
    "question": "Respecto a parsing y serialización json en JSON, ¿cuál es el propósito de «Media type application/json»?",
    "options": [
      "Reporta ubicación y causa útil sin devolver el payload completo ni secretos al operar.",
      "Alinea encabezado, bytes y expectativas en vez de inferir el formato por extensión.",
      "Convierte tokens en valores del runtime sin asumir equivalencia exacta de tipos.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Media type application/json (Parsing y serialización JSON): Alinea encabezado, bytes y expectativas en vez de inferir el formato por extensión.",
    "topic": "Parsing y serialización JSON",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-31",
    "collectionId": "json",
    "question": "En JSON (Fundamentos de JSON Schema 2020-12), ¿qué función técnica cumple «Instancia, schema y subschema»?",
    "options": [
      "Distingue restricciones de información como title, description, default o examples al operar.",
      "Declara qué meta-schema y vocabularios determinan el significado de las palabras clave.",
      "Evalúa valores JSON contra schemas que pueden contener otros schemas de modo predecible.",
      "Usa true para aceptar cualquier instancia y false para rechazar todas sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Instancia, schema y subschema (Fundamentos de JSON Schema 2020-12): Evalúa valores JSON contra schemas que pueden contener otros schemas.",
    "topic": "Fundamentos de JSON Schema 2020-12",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-32",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «$schema y dialecto» en fundamentos de json schema 2020-12?",
    "options": [
      "Distingue restricciones de información como title, description, default o examples al operar.",
      "Usa true para aceptar cualquier instancia y false para rechazar todas dentro del flujo.",
      "Evalúa valores JSON contra schemas que pueden contener otros schemas sin perder estado.",
      "Declara qué meta-schema y vocabularios determinan el significado de las palabras clave."
    ],
    "correctAnswerIndex": 3,
    "explanation": "$schema y dialecto (Fundamentos de JSON Schema 2020-12): Declara qué meta-schema y vocabularios determinan el significado de las palabras clave.",
    "topic": "Fundamentos de JSON Schema 2020-12",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-33",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «$id y base URI»?",
    "options": [
      "Asigna identidad y modifica la resolución de referencias relativas durante la ejecución.",
      "Distingue restricciones de información como title, description, default o examples.",
      "Declara qué meta-schema y vocabularios determinan el significado de las palabras clave.",
      "Usa true para aceptar cualquier instancia y false para rechazar todas de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "$id y base URI (Fundamentos de JSON Schema 2020-12): Asigna identidad y modifica la resolución de referencias relativas.",
    "topic": "Fundamentos de JSON Schema 2020-12",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-34",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «Schemas booleanos»?",
    "options": [
      "Distingue restricciones de información como title, description, default o examples al operar.",
      "Usa true para aceptar cualquier instancia y false para rechazar todas sin perder estado.",
      "Declara qué meta-schema y vocabularios determinan el significado de las palabras clave.",
      "Evalúa valores JSON contra schemas que pueden contener otros schemas de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Schemas booleanos (Fundamentos de JSON Schema 2020-12): Usa true para aceptar cualquier instancia y false para rechazar todas.",
    "topic": "Fundamentos de JSON Schema 2020-12",
    "difficulty": "intermedio"
  },
  {
    "id": "json-q-35",
    "collectionId": "json",
    "question": "Respecto a fundamentos de json schema 2020-12 en JSON, ¿cuál es el propósito de «Assertions y annotations»?",
    "options": [
      "Usa true para aceptar cualquier instancia y false para rechazar todas de forma segura.",
      "Evalúa valores JSON contra schemas que pueden contener otros schemas con precisión.",
      "Distingue restricciones de información como title, description, default o examples.",
      "Asigna identidad y modifica la resolución de referencias relativas de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Assertions y annotations (Fundamentos de JSON Schema 2020-12): Distingue restricciones de información como title, description, default o examples.",
    "topic": "Fundamentos de JSON Schema 2020-12",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-36",
    "collectionId": "json",
    "question": "En JSON (Tipos y restricciones JSON Schema), ¿qué función técnica cumple «type»?",
    "options": [
      "Controla strings con longitud y regex bajo expectativas Unicode durante la ejecución.",
      "Reporta ubicación y causa útil sin devolver el payload completo ni secretos al operar.",
      "Separa schema de una propiedad de la obligación de que esa propiedad exista al operar.",
      "Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática."
    ],
    "correctAnswerIndex": 3,
    "explanation": "type (Tipos y restricciones JSON Schema): Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática.",
    "topic": "Tipos y restricciones JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-37",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «enum y const» en tipos y restricciones json schema?",
    "options": [
      "Declara un conjunto cerrado o un único valor permitido dentro de la arquitectura activa.",
      "Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores."
    ],
    "correctAnswerIndex": 0,
    "explanation": "enum y const (Tipos y restricciones JSON Schema): Declara un conjunto cerrado o un único valor permitido.",
    "topic": "Tipos y restricciones JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-38",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «minimum, maximum y multipleOf»?",
    "options": [
      "Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática al operar.",
      "Valida números considerando precisión de la implementación bajo condiciones productivas.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes al operar.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "minimum, maximum y multipleOf (Tipos y restricciones JSON Schema): Valida números considerando precisión de la implementación.",
    "topic": "Tipos y restricciones JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-39",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «minLength, maxLength y pattern»?",
    "options": [
      "Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática al operar.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes al operar.",
      "Controla strings con longitud y regex bajo expectativas Unicode dentro de la aplicación.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "minLength, maxLength y pattern (Tipos y restricciones JSON Schema): Controla strings con longitud y regex bajo expectativas Unicode.",
    "topic": "Tipos y restricciones JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-40",
    "collectionId": "json",
    "question": "Respecto a tipos y restricciones json schema en JSON, ¿cuál es el propósito de «format»?",
    "options": [
      "Agrupa miembros nombre-valor entre llaves sin atribuirles automáticamente una clase de lenguaje al operar.",
      "Interpreta uXXXX como unidades UTF-16 de escape, incluyendo pares sustitutos cuando corresponda al operar.",
      "Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática de modo predecible.",
      "Reconoce que puede ser anotación o assertion según vocabulario, configuración y soporte del validador."
    ],
    "correctAnswerIndex": 3,
    "explanation": "format (Tipos y restricciones JSON Schema): Reconoce que puede ser anotación o assertion según vocabulario, configuración y soporte del validador.",
    "topic": "Tipos y restricciones JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-41",
    "collectionId": "json",
    "question": "En JSON (Objetos en JSON Schema), ¿qué función técnica cumple «properties y required»?",
    "options": [
      "Separa schema de una propiedad de la obligación de que esa propiedad exista en el flujo.",
      "Controla propiedades no cubiertas dentro del objeto evaluado por esa palabra clave.",
      "Cierra propiedades después de considerar schemas aplicados por composición al evaluar.",
      "Activa presencia adicional o validación cuando aparece una propiedad dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "properties y required (Objetos en JSON Schema): Separa schema de una propiedad de la obligación de que esa propiedad exista.",
    "topic": "Objetos en JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-42",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «patternProperties» en objetos en json schema?",
    "options": [
      "Controla propiedades no cubiertas dentro del objeto evaluado por esa palabra clave al operar.",
      "Aplica subschemas a nombres que coinciden con expresiones regulares de modo predecible.",
      "Separa schema de una propiedad de la obligación de que esa propiedad exista al evaluar.",
      "Cierra propiedades después de considerar schemas aplicados por composición en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "patternProperties (Objetos en JSON Schema): Aplica subschemas a nombres que coinciden con expresiones regulares.",
    "topic": "Objetos en JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-43",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «additionalProperties»?",
    "options": [
      "Separa schema de una propiedad de la obligación de que esa propiedad exista al operar.",
      "Cierra propiedades después de considerar schemas aplicados por composición al operar.",
      "Controla propiedades no cubiertas dentro del objeto evaluado por esa palabra clave.",
      "Activa presencia adicional o validación cuando aparece una propiedad con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "additionalProperties (Objetos en JSON Schema): Controla propiedades no cubiertas dentro del objeto evaluado por esa palabra clave.",
    "topic": "Objetos en JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-44",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «unevaluatedProperties»?",
    "options": [
      "Controla propiedades no cubiertas dentro del objeto evaluado por esa palabra clave al operar.",
      "Separa schema de una propiedad de la obligación de que esa propiedad exista en el flujo.",
      "Activa presencia adicional o validación cuando aparece una propiedad de modo predecible.",
      "Cierra propiedades después de considerar schemas aplicados por composición en ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "unevaluatedProperties (Objetos en JSON Schema): Cierra propiedades después de considerar schemas aplicados por composición.",
    "topic": "Objetos en JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-45",
    "collectionId": "json",
    "question": "Respecto a objetos en json schema en JSON, ¿cuál es el propósito de «dependentRequired y dependentSchemas»?",
    "options": [
      "Activa presencia adicional o validación cuando aparece una propiedad de modo predecible.",
      "Controla propiedades no cubiertas dentro del objeto evaluado por esa palabra clave.",
      "Separa schema de una propiedad de la obligación de que esa propiedad exista al operar.",
      "Cierra propiedades después de considerar schemas aplicados por composición al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "dependentRequired y dependentSchemas (Objetos en JSON Schema): Activa presencia adicional o validación cuando aparece una propiedad.",
    "topic": "Objetos en JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-46",
    "collectionId": "json",
    "question": "En JSON (Arrays y composición JSON Schema), ¿qué función técnica cumple «prefixItems e items»?",
    "options": [
      "Comprueba igualdad estructural con un costo que debe medirse en arrays grandes en el flujo.",
      "Distingue tuplas posicionales del schema repetido para elementos restantes en ejecución.",
      "Usa parser incremental, text sequences o un framing explícito para flujos grandes al operar.",
      "Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "prefixItems e items (Arrays y composición JSON Schema): Distingue tuplas posicionales del schema repetido para elementos restantes.",
    "topic": "Arrays y composición JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-47",
    "collectionId": "json",
    "question": "Dentro de JSON, ¿cómo opera el mecanismo de «contains, minContains y maxContains» en arrays y composición json schema?",
    "options": [
      "Comprueba igualdad estructural con un costo que debe medirse en arrays grandes al evaluar.",
      "Distingue tuplas posicionales del schema repetido para elementos restantes en el flujo.",
      "Exige una cantidad de elementos que satisfagan un subschema respetando las invariantes.",
      "Separa framing, sintaxis, schema, semántica, autorización y persistencia segura al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "contains, minContains y maxContains (Arrays y composición JSON Schema): Exige una cantidad de elementos que satisfagan un subschema.",
    "topic": "Arrays y composición JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-48",
    "collectionId": "json",
    "question": "Al trabajar con JSON, ¿qué responsabilidad define a «uniqueItems»?",
    "options": [
      "Distingue tuplas posicionales del schema repetido para elementos restantes dentro del flujo.",
      "Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores al operar.",
      "Alinea encabezado, bytes y expectativas en vez de inferir el formato por extensión al operar.",
      "Comprueba igualdad estructural con un costo que debe medirse en arrays grandes al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "uniqueItems (Arrays y composición JSON Schema): Comprueba igualdad estructural con un costo que debe medirse en arrays grandes.",
    "topic": "Arrays y composición JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-49",
    "collectionId": "json",
    "question": "En la arquitectura de JSON, ¿qué caracteriza técnicamente a «allOf, anyOf, oneOf y not»?",
    "options": [
      "Compone condiciones sin asumir que allOf fusiona objetos o que oneOf es siempre un discriminator al operar.",
      "Comprueba igualdad estructural con un costo que debe medirse en arrays grandes de forma segura.",
      "Modela object, array, string, number, boolean y null sin inventar tipos básicos adicionales.",
      "No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "allOf, anyOf, oneOf y not (Arrays y composición JSON Schema): Compone condiciones sin asumir que allOf fusiona objetos o que oneOf es siempre un discriminator.",
    "topic": "Arrays y composición JSON Schema",
    "difficulty": "avanzado"
  },
  {
    "id": "json-q-50",
    "collectionId": "json",
    "question": "Respecto a arrays y composición json schema en JSON, ¿cuál es el propósito de «if, then y else»?",
    "options": [
      "Comprueba igualdad estructural con un costo que debe medirse en arrays grandes al evaluar.",
      "Aplica restricciones condicionales sin modificar la instancia manteniendo consistencia.",
      "Distingue tuplas posicionales del schema repetido para elementos restantes en el flujo.",
      "Separa framing, sintaxis, schema, semántica, autorización y persistencia segura al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "if, then y else (Arrays y composición JSON Schema): Aplica restricciones condicionales sin modificar la instancia.",
    "topic": "Arrays y composición JSON Schema",
    "difficulty": "avanzado"
  }
];
