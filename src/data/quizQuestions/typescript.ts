import type { QuizQuestion } from "@/data/quizTypes";

export const typescriptQuestions: QuizQuestion[] = [
  {
    "id": "typescript-q-01",
    "collectionId": "typescript",
    "question": "En TypeScript (Fundamentos del sistema de tipos), ¿qué función técnica cumple «Inferencia de tipos»?",
    "options": [
      "Deduce tipos a partir de valores, retornos y contexto para reducir anotaciones redundantes.",
      "Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo al operar.",
      "Distingue funciones que no producen un valor útil de rutas que nunca completan normalmente.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Inferencia de tipos (Fundamentos del sistema de tipos): Deduce tipos a partir de valores, retornos y contexto para reducir anotaciones redundantes.",
    "topic": "Fundamentos del sistema de tipos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-02",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Anotaciones» en fundamentos del sistema de tipos?",
    "options": [
      "Deduce tipos a partir de valores, retornos y contexto para reducir anotaciones redundantes al operar.",
      "Declara explícitamente el tipo esperado cuando la inferencia no expresa por sí sola el contrato.",
      "Distingue funciones que no producen un valor útil de rutas que nunca completan normalmente al operar.",
      "Representa string, number, boolean, bigint, symbol, null y undefined dentro del sistema estático."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Anotaciones (Fundamentos del sistema de tipos): Declaran explícitamente el tipo esperado cuando la inferencia no expresa por sí sola el contrato.",
    "topic": "Fundamentos del sistema de tipos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-03",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Tipos primitivos»?",
    "options": [
      "Deduce tipos a partir de valores, retornos y contexto para reducir anotaciones redundantes al operar.",
      "Distingue funciones que no producen un valor útil de rutas que nunca completan normalmente al operar.",
      "Representa string, number, boolean, bigint, symbol, null y undefined dentro del sistema estático.",
      "Declara explícitamente el tipo esperado cuando la inferencia no expresa por sí sola el contrato."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tipos primitivos (Fundamentos del sistema de tipos): Representan string, number, boolean, bigint, symbol, null y undefined dentro del sistema estático.",
    "topic": "Fundamentos del sistema de tipos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-04",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «any»?",
    "options": [
      "Representa string, number, boolean, bigint, symbol, null y undefined dentro del sistema estático de modo predecible.",
      "Declara explícitamente el tipo esperado cuando la inferencia no expresa por sí sola el contrato dentro del flujo.",
      "Añade una marca estática para evitar mezclar valores estructuralmente idénticos con significados diferentes al operar.",
      "Desactiva gran parte de la comprobación y permite que operaciones potencialmente inseguras atraviesen el sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "any (Fundamentos del sistema de tipos): Desactiva gran parte de la comprobación y permite que operaciones potencialmente inseguras atraviesen el sistema.",
    "topic": "Fundamentos del sistema de tipos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-05",
    "collectionId": "typescript",
    "question": "Respecto a fundamentos del sistema de tipos en TypeScript, ¿cuál es el propósito de «unknown»?",
    "options": [
      "Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo en ejecución.",
      "Deduce tipos a partir de valores, retornos y contexto para reducir anotaciones redundantes.",
      "Distingue funciones que no producen un valor útil de rutas que nunca completan normalmente.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "unknown (Fundamentos del sistema de tipos): Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo.",
    "topic": "Fundamentos del sistema de tipos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-06",
    "collectionId": "typescript",
    "question": "En TypeScript (Fundamentos del sistema de tipos), ¿qué función técnica cumple «void y never»?",
    "options": [
      "Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo en ejecución.",
      "Distingue funciones que no producen un valor útil de rutas que nunca completan normalmente.",
      "Deduce tipos a partir de valores, retornos y contexto para reducir anotaciones redundantes.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "void y never (Fundamentos del sistema de tipos): Distinguen funciones que no producen un valor útil de rutas que nunca completan normalmente.",
    "topic": "Fundamentos del sistema de tipos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-07",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Uniones» en modelado de datos?",
    "options": [
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar en el flujo.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
      "Permite que un valor pertenezca a varias alternativas explícitas sin degradar el flujo.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Uniones (Modelado de datos): Permiten que un valor pertenezca a varias alternativas explícitas.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-08",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Tipos literales»?",
    "options": [
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables al operar.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas.",
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar al operar.",
      "Restringe un valor a opciones exactas como \"idle\" | \"loading\" | \"success\" con precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Tipos literales (Modelado de datos): Restringen un valor a opciones exactas como \"idle\" | \"loading\" | \"success\".",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-09",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «null, undefined y strictNullChecks»?",
    "options": [
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar al operar.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas.",
      "Restringe un valor a opciones exactas como \"idle\" | \"loading\" | \"success\" en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "null, undefined y strictNullChecks (Modelado de datos): Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-10",
    "collectionId": "typescript",
    "question": "Respecto a modelado de datos en TypeScript, ¿cuál es el propósito de «Propiedades opcionales»?",
    "options": [
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables al operar.",
      "Modela campos que pueden no existir sin confundir ausencia con un valor undefined explícito.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas al operar.",
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Propiedades opcionales (Modelado de datos): Modelan campos que pueden no existir sin confundir ausencia con un valor undefined explícito.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-11",
    "collectionId": "typescript",
    "question": "En TypeScript (Modelado de datos), ¿qué función técnica cumple «Readonly»?",
    "options": [
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar al operar.",
      "Restringe un valor a opciones exactas como \"idle\" | \"loading\" | \"success\" al evaluar.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
      "Describe la forma estructural de propiedades, métodos, índices y llamadas al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Readonly (Modelado de datos): Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-12",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Arrays y tuplas» en modelado de datos?",
    "options": [
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar al operar.",
      "Restringe un valor a opciones exactas como \"idle\" | \"loading\" | \"success\" al evaluar.",
      "Describe la forma estructural de propiedades, métodos, índices y llamadas al evaluar.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Arrays y tuplas (Modelado de datos): Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-13",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Tipos de objetos»?",
    "options": [
      "Describe la forma estructural de propiedades, métodos, índices y llamadas dentro del flujo.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas.",
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tipos de objetos (Modelado de datos): Describen la forma estructural de propiedades, métodos, índices y llamadas.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-14",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «Alias de tipos»?",
    "options": [
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar en el flujo.",
      "Asigna nombres reutilizables a cualquier composición de tipos manteniendo consistencia.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Alias de tipos (Modelado de datos): Asigna nombres reutilizables a cualquier composición de tipos.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-15",
    "collectionId": "typescript",
    "question": "Respecto a modelado de datos en TypeScript, ¿cuál es el propósito de «Interfaces»?",
    "options": [
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar en el flujo.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
      "Declara contratos extensibles y admiten declaración merging respetando las invariantes.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Interfaces (Modelado de datos): Declaran contratos extensibles y admiten declaración merging.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-16",
    "collectionId": "typescript",
    "question": "En TypeScript (Modelado de datos), ¿qué función técnica cumple «Intersecciones»?",
    "options": [
      "Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar en el flujo.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas.",
      "Exigen que un valor satisfaga simultáneamente varias estructuras sin degradar el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Intersecciones (Modelado de datos): Exigen que un valor satisfaga simultáneamente varias estructuras.",
    "topic": "Modelado de datos",
    "difficulty": "básico"
  },
  {
    "id": "typescript-q-17",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Uniones discriminadas» en modelado de datos?",
    "options": [
      "Usa una propiedad literal común para representar estados mutuamente excluyentes de forma segura.",
      "Modela campos que pueden no existir sin confundir ausencia con un valor undefined explícito.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables al operar.",
      "Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Uniones discriminadas (Modelado de datos): Usan una propiedad literal común para representar estados mutuamente excluyentes de forma segura.",
    "topic": "Modelado de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-18",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Tipos de funciones»?",
    "options": [
      "Declara el tipo del receptor esperado sin convertirse en un argumento real de JavaScript.",
      "Declara parámetros, retorno, overloads y firmas de callback respetando las invariantes.",
      "Modela llamadas con argumentos ausentes y preservan una firma clara de modo predecible.",
      "Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tipos de funciones (Funciones tipadas): Declaran parámetros, retorno, overloads y firmas de callback.",
    "topic": "Funciones tipadas",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-19",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «Firmas de llamada y constructores»?",
    "options": [
      "Declara el tipo del receptor esperado sin convertirse en un argumento real de JavaScript.",
      "Modela llamadas con argumentos ausentes y preservan una firma clara de modo predecible.",
      "Modela valores que pueden invocarse con o construirse mediante new durante la ejecución.",
      "Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Firmas de llamada y constructores (Funciones tipadas): Modelan valores que pueden invocarse con () o construirse mediante new.",
    "topic": "Funciones tipadas",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-20",
    "collectionId": "typescript",
    "question": "Respecto a funciones tipadas en TypeScript, ¿cuál es el propósito de «Sobrecargas»?",
    "options": [
      "Declara el tipo del receptor esperado sin convertirse en un argumento real de JavaScript al operar.",
      "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama al operar.",
      "Permite que métodos fluent devuelvan el subtipo concreto mediante el tipo especial this al operar.",
      "Expresa varias formas públicas de invocar una función con una implementación compatible común."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sobrecargas (Funciones tipadas): Expresan varias formas públicas de invocar una función con una implementación compatible común.",
    "topic": "Funciones tipadas",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-21",
    "collectionId": "typescript",
    "question": "En TypeScript (Funciones tipadas), ¿qué función técnica cumple «Parámetros opcionales y por defecto»?",
    "options": [
      "Modela llamadas con argumentos ausentes y preservan una firma clara dentro de la aplicación.",
      "Declara el tipo del receptor esperado sin convertirse en un argumento real de JavaScript.",
      "Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo.",
      "Modela valores que pueden invocarse con o construirse mediante new sin perder estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Parámetros opcionales y por defecto (Funciones tipadas): Modelan llamadas con argumentos ausentes y preservan una firma clara.",
    "topic": "Funciones tipadas",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-22",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «this en funciones» en funciones tipadas?",
    "options": [
      "Modela llamadas con argumentos ausentes y preservan una firma clara dentro de la aplicación.",
      "Declara el tipo del receptor esperado sin convertirse en un argumento real de JavaScript.",
      "Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo al operar.",
      "Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables."
    ],
    "correctAnswerIndex": 1,
    "explanation": "this en funciones (Funciones tipadas): Declara el tipo del receptor esperado sin convertirse en un argumento real de JavaScript.",
    "topic": "Funciones tipadas",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-23",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Narrowing»?",
    "options": [
      "Permite encapsular una comprobación personalizada con un retorno value is Type en el flujo.",
      "Usa never para detectar variantes nuevas que no fueron atendidas en un switch al operar.",
      "Reduce un tipo amplio mediante control de flujo y comprobaciones de runtime en el flujo.",
      "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Narrowing (Narrowing y seguridad): Reduce un tipo amplio mediante control de flujo y comprobaciones de runtime.",
    "topic": "Narrowing y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-24",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «typeof, instanceof e in»?",
    "options": [
      "Permite encapsular una comprobación personalizada con un retorno value is Type en el flujo.",
      "Usa never para detectar variantes nuevas que no fueron atendidas en un switch al operar.",
      "Reduce un tipo amplio mediante control de flujo y comprobaciones de runtime en el flujo.",
      "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama."
    ],
    "correctAnswerIndex": 3,
    "explanation": "typeof, instanceof e in (Narrowing y seguridad): Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama.",
    "topic": "Narrowing y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-25",
    "collectionId": "typescript",
    "question": "Respecto a narrowing y seguridad en TypeScript, ¿cuál es el propósito de «Predicados de tipo»?",
    "options": [
      "Permite encapsular una comprobación personalizada con un retorno value is Type al operar.",
      "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama.",
      "Usa never para detectar variantes nuevas que no fueron atendidas en un switch al operar.",
      "Reduce un tipo amplio mediante control de flujo y comprobaciones de runtime al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Predicados de tipo (Narrowing y seguridad): Permiten encapsular una comprobación personalizada con un retorno value is Type.",
    "topic": "Narrowing y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-26",
    "collectionId": "typescript",
    "question": "En TypeScript (Narrowing y seguridad), ¿qué función técnica cumple «Funciones de aserción»?",
    "options": [
      "Convierte propiedades y elementos inferidos en readonly y conserva valores literales exactos al operar.",
      "Declara que una función lanza si una condición no se cumple y refina el tipo después de llamarla.",
      "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama al operar.",
      "Comprueba que una expresión cumple un contrato sin reemplazar su tipo inferido más específico."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Funciones de aserción (Narrowing y seguridad): Declaran que una función lanza si una condición no se cumple y refina el tipo después de llamarla.",
    "topic": "Narrowing y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-27",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Comprobación exhaustiva» en narrowing y seguridad?",
    "options": [
      "Permite encapsular una comprobación personalizada con un retorno value is Type en el flujo.",
      "Reduce un tipo amplio mediante control de flujo y comprobaciones de runtime en el flujo.",
      "Usa never para detectar variantes nuevas que no fueron atendidas en un switch al operar.",
      "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Comprobación exhaustiva (Narrowing y seguridad): Usa never para detectar variantes nuevas que no fueron atendidas en un switch.",
    "topic": "Narrowing y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-28",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Aserciones de tipo»?",
    "options": [
      "Convierte propiedades y elementos inferidos en readonly y conserva valores literales exactos al operar.",
      "Comprueba que una expresión cumple un contrato sin reemplazar su tipo inferido más específico al operar.",
      "Declara que una función lanza si una condición no se cumple y refina el tipo después de llamarla.",
      "Indica al compilador que el programador conoce un tipo más específico, sin validar nada en runtime."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Aserciones de tipo (Narrowing y seguridad): Indican al compilador que el programador conoce un tipo más específico, sin validar nada en runtime.",
    "topic": "Narrowing y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-29",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «satisfies»?",
    "options": [
      "Comprueba que una expresión cumple un contrato sin reemplazar su tipo inferido más específico.",
      "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama.",
      "Convierte propiedades y elementos inferidos en readonly y conserva valores literales exactos.",
      "Permite encapsular una comprobación personalizada con un retorno value is Type en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "satisfies (Narrowing y seguridad): Comprueba que una expresión cumple un contrato sin reemplazar su tipo inferido más específico.",
    "topic": "Narrowing y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-30",
    "collectionId": "typescript",
    "question": "Respecto a narrowing y seguridad en TypeScript, ¿cuál es el propósito de «Const assertions»?",
    "options": [
      "Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama al operar.",
      "Convierte propiedades y elementos inferidos en readonly y conserva valores literales exactos.",
      "Comprueba que una expresión cumple un contrato sin reemplazar su tipo inferido más específico.",
      "Permite encapsular una comprobación personalizada con un retorno value is Type con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Const assertions (Narrowing y seguridad): Convierte propiedades y elementos inferidos en readonly y conserva valores literales exactos.",
    "topic": "Narrowing y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-31",
    "collectionId": "typescript",
    "question": "En TypeScript (Genéricos y tipos derivados), ¿qué función técnica cumple «Genéricos»?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento en ejecución.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Relacionan entrada y salida mediante parámetros de tipo reutilizables sin perder estado.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Genéricos (Genéricos y tipos derivados): Relacionan entrada y salida mediante parámetros de tipo reutilizables.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-32",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Restricciones genéricas» en genéricos y tipos derivados?",
    "options": [
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas al operar.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited.",
      "Recorren claves para transformar sistemáticamente modificadores y valores con precisión.",
      "Limita los tipos aceptados sin perder la información específica del argumento al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Restricciones genéricas (Genéricos y tipos derivados): Limitan los tipos aceptados sin perder la información específica del argumento.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-33",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Parámetros genéricos por defecto»?",
    "options": [
      "Proporciona un tipo de respaldo cuando el consumidor no especifica uno de modo predecible.",
      "Limita los tipos aceptados sin perder la información específica del argumento al operar.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Parámetros genéricos por defecto (Genéricos y tipos derivados): Proporcionan un tipo de respaldo cuando el consumidor no especifica uno.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-34",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «keyof»?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento en el flujo.",
      "Produce una unión con las claves conocidas de un tipo dentro de la arquitectura activa.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited."
    ],
    "correctAnswerIndex": 1,
    "explanation": "keyof (Genéricos y tipos derivados): Produce una unión con las claves conocidas de un tipo.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "intermedio"
  },
  {
    "id": "typescript-q-35",
    "collectionId": "typescript",
    "question": "Respecto a genéricos y tipos derivados en TypeScript, ¿cuál es el propósito de «typeof en posiciones de tipo»?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento en ejecución.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Deriva un tipo desde la forma estática de un valor ya declarado dentro de la aplicación.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited."
    ],
    "correctAnswerIndex": 2,
    "explanation": "typeof en posiciones de tipo (Genéricos y tipos derivados): Deriva un tipo desde la forma estática de un valor ya declarado.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-36",
    "collectionId": "typescript",
    "question": "En TypeScript (Genéricos y tipos derivados), ¿qué función técnica cumple «Indexed access types»?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento en ejecución.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited.",
      "Selecciona el tipo de una propiedad o conjunto de propiedades con T[K] dentro del flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Indexed access types (Genéricos y tipos derivados): Selecciona el tipo de una propiedad o conjunto de propiedades con T[K].",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-37",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Mapped types» en genéricos y tipos derivados?",
    "options": [
      "Recorren claves para transformar sistemáticamente modificadores y valores dentro del flujo.",
      "Limita los tipos aceptados sin perder la información específica del argumento al operar.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Mapped types (Genéricos y tipos derivados): Recorren claves para transformar sistemáticamente modificadores y valores.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-38",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Remapeo de claves»?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento en ejecución.",
      "Cambia nombres de propiedades dentro de un mapped type mediante as durante la ejecución.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Remapeo de claves (Genéricos y tipos derivados): Cambia nombres de propiedades dentro de un mapped type mediante as.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-39",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «Tipos condicionales»?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento en ejecución.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Seleccionan un tipo según una relación de asignabilidad durante la ejecución del módulo.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tipos condicionales (Genéricos y tipos derivados): Seleccionan un tipo según una relación de asignabilidad.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-40",
    "collectionId": "typescript",
    "question": "Respecto a genéricos y tipos derivados en TypeScript, ¿cuál es el propósito de «infer»?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento en ejecución.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited.",
      "Extrae una parte de un tipo dentro de la rama verdadera de un condicional con precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "infer (Genéricos y tipos derivados): Extrae una parte de un tipo dentro de la rama verdadera de un condicional.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-41",
    "collectionId": "typescript",
    "question": "En TypeScript (Genéricos y tipos derivados), ¿qué función técnica cumple «Template literal types»?",
    "options": [
      "Construye uniones de strings combinando literales y otras uniones manteniendo consistencia.",
      "Limita los tipos aceptados sin perder la información específica del argumento al operar.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Template literal types (Genéricos y tipos derivados): Construyen uniones de strings combinando literales y otras uniones.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-42",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Utility Types» en genéricos y tipos derivados?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento en el flujo.",
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Recorren claves para transformar sistemáticamente modificadores y valores en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Utility Types (Genéricos y tipos derivados): Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-43",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Tipos recursivos»?",
    "options": [
      "Limita los tipos aceptados sin perder la información específica del argumento al evaluar.",
      "Recorren claves para transformar sistemáticamente modificadores y valores en el flujo.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
      "Extrae una parte de un tipo dentro de la rama verdadera de un condicional en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tipos recursivos (Genéricos y tipos derivados): Describen estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-44",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «Tipos nominales con branding»?",
    "options": [
      "Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited dentro de la aplicación.",
      "Describe estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas sin degradar el flujo.",
      "Indica al compilador que el programador conoce un tipo más específico, sin validar nada en runtime al operar.",
      "Añade una marca estática para evitar mezclar valores estructuralmente idénticos con significados diferentes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Tipos nominales con branding (Genéricos y tipos derivados): Añaden una marca estática para evitar mezclar valores estructuralmente idénticos con significados diferentes.",
    "topic": "Genéricos y tipos derivados",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-45",
    "collectionId": "typescript",
    "question": "Respecto a clases y módulos en TypeScript, ¿cuál es el propósito de «Clases y modificadores»?",
    "options": [
      "Tipan propiedades, constructores y métodos con public, protected, private y readonly.",
      "Define comportamiento compartido y miembros que las subclases deben implementar.",
      "Usa el sistema de módulos de JavaScript y añaden comprobación estática entre archivos.",
      "Permite encapsular una comprobación personalizada con un retorno value is Type."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Clases y modificadores (Clases y módulos): Tipan propiedades, constructores y métodos con public, protected, private y readonly.",
    "topic": "Clases y módulos",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-46",
    "collectionId": "typescript",
    "question": "En TypeScript (Clases y módulos), ¿qué función técnica cumple «Clases abstractas»?",
    "options": [
      "Tipan propiedades, constructores y métodos con public, protected, private y readonly al operar.",
      "Define comportamiento compartido y miembros que las subclases deben implementar al operar.",
      "Usa el sistema de módulos de JavaScript y añaden comprobación estática entre archivos.",
      "Permite que métodos fluent devuelvan el subtipo concreto mediante el tipo especial this."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Clases abstractas (Clases y módulos): Definen comportamiento compartido y miembros que las subclases deben implementar.",
    "topic": "Clases y módulos",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-47",
    "collectionId": "typescript",
    "question": "Dentro de TypeScript, ¿cómo opera el mecanismo de «Polimorfismo de this» en clases y módulos?",
    "options": [
      "Define comportamiento compartido y miembros que las subclases deben implementar al evaluar.",
      "Tipan propiedades, constructores y métodos con public, protected, private y readonly.",
      "Permite que métodos fluent devuelvan el subtipo concreto mediante el tipo especial this.",
      "Usa el sistema de módulos de JavaScript y añaden comprobación estática entre archivos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Polimorfismo de this (Clases y módulos): Permite que métodos fluent devuelvan el subtipo concreto mediante el tipo especial this.",
    "topic": "Clases y módulos",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-48",
    "collectionId": "typescript",
    "question": "Al trabajar con TypeScript, ¿qué responsabilidad define a «Decoradores»?",
    "options": [
      "Desactiva gran parte de la comprobación y permite que operaciones potencialmente inseguras atraviesen el sistema con precisión.",
      "Añade una marca estática para evitar mezclar valores estructuralmente idénticos con significados diferentes de forma segura.",
      "Permite que métodos fluent devuelvan el subtipo concreto mediante el tipo especial this manteniendo la trazabilidad técnica.",
      "Añade metadatos o transformaciones declarativas a clases y miembros mediante la propuesta estándar soportada por TypeScript."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Decoradores (Clases y módulos): Añaden metadatos o transformaciones declarativas a clases y miembros mediante la propuesta estándar soportada por TypeScript.",
    "topic": "Clases y módulos",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-49",
    "collectionId": "typescript",
    "question": "En la arquitectura de TypeScript, ¿qué caracteriza técnicamente a «Módulos y exports»?",
    "options": [
      "Usa el sistema de módulos de JavaScript y añaden comprobación estática entre archivos al operar.",
      "Define comportamiento compartido y miembros que las subclases deben implementar.",
      "Tipan propiedades, constructores y métodos con public, protected, private y readonly.",
      "Permite que métodos fluent devuelvan el subtipo concreto mediante el tipo especial this."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Módulos y exports (Clases y módulos): Usan el sistema de módulos de JavaScript y añaden comprobación estática entre archivos.",
    "topic": "Clases y módulos",
    "difficulty": "avanzado"
  },
  {
    "id": "typescript-q-50",
    "collectionId": "typescript",
    "question": "Respecto a clases y módulos en TypeScript, ¿cuál es el propósito de «Imports y exports solo de tipos»?",
    "options": [
      "Define comportamiento compartido y miembros que las subclases deben implementar al evaluar.",
      "Marcan dependencias que deben desaparecer al emitir JavaScript manteniendo consistencia.",
      "Tipan propiedades, constructores y métodos con public, protected, private y readonly.",
      "Usa el sistema de módulos de JavaScript y añaden comprobación estática entre archivos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Imports y exports solo de tipos (Clases y módulos): Marcan dependencias que deben desaparecer al emitir JavaScript.",
    "topic": "Clases y módulos",
    "difficulty": "avanzado"
  }
];
