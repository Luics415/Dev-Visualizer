import type { QuizQuestion } from "@/data/quizTypes";

export const prologQuestions: QuizQuestion[] = [
  {
    "id": "prolog-q-01",
    "collectionId": "prolog",
    "question": "En Prolog (Primer contacto y ciclo de trabajo), ¿qué función técnica cumple «SWI-Prolog estable»?",
    "options": [
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo con precisión.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] al operar.",
      "Interpreta consultas, bindings, true, false, errores y solicitud de respuestas adicionales.",
      "Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "SWI-Prolog estable (Primer contacto y ciclo de trabajo): Instala una versión fijada y distingue el canal estable del canal de desarrollo.",
    "topic": "Primer contacto y ciclo de trabajo",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-02",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «Top level» en primer contacto y ciclo de trabajo?",
    "options": [
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] en ejecución.",
      "Interpreta consultas, bindings, true, false, errores y solicitud de respuestas adicionales.",
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo al evaluar.",
      "Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Top level (Primer contacto y ciclo de trabajo): Interpreta consultas, bindings, true, false, errores y solicitud de respuestas adicionales.",
    "topic": "Primer contacto y ciclo de trabajo",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-03",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Archivos .pl»?",
    "options": [
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo con precisión.",
      "Interpreta consultas, bindings, true, false, errores y solicitud de respuestas adicionales.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] al operar.",
      "Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Archivos .pl y consulta (Primer contacto y ciclo de trabajo): Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo].",
    "topic": "Primer contacto y ciclo de trabajo",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-04",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Editar, recargar y repetir»?",
    "options": [
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] al operar.",
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo al operar.",
      "Encuentra predicados y contratos mediante help/1, apropos/1 y PlDoc de modo predecible.",
      "Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Editar, recargar y repetir (Primer contacto y ciclo de trabajo): Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión.",
    "topic": "Primer contacto y ciclo de trabajo",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-05",
    "collectionId": "prolog",
    "question": "Respecto a primer contacto y ciclo de trabajo en Prolog, ¿cuál es el propósito de «Ayuda y documentación»?",
    "options": [
      "Encuentra predicados y contratos mediante help/1, apropos/1 y PlDoc manteniendo consistencia.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo].",
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo al operar.",
      "Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Ayuda y documentación (Primer contacto y ciclo de trabajo): Encuentra predicados y contratos mediante help/1, apropos/1 y PlDoc.",
    "topic": "Primer contacto y ciclo de trabajo",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-06",
    "collectionId": "prolog",
    "question": "En Prolog (Términos y sintaxis), ¿qué función técnica cumple «Átomos y números»?",
    "options": [
      "Entiende que los operadores cambian el parseo, no crean por sí mismos nueva semántica manteniendo consistencia.",
      "Reconoce constantes simbólicas, enteros, racionales y flotantes sin confundir representación con significado.",
      "Interpreta consultas, bindings, true, false, errores y solicitud de respuestas adicionales sin perder estado.",
      "Formula preguntas con variables y observa las sustituciones que constituyen cada respuesta sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Átomos y números (Términos y sintaxis): Reconoce constantes simbólicas, enteros, racionales y flotantes sin confundir representación con significado.",
    "topic": "Términos y sintaxis",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-07",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «Términos compuestos» en términos y sintaxis?",
    "options": [
      "Entiende que los operadores cambian el parseo, no crean por sí mismos nueva semántica.",
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo al operar.",
      "Modela datos con functor, aridad y argumentos dentro del ciclo operativo del sistema.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo]."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Términos compuestos (Términos y sintaxis): Modela datos con functor, aridad y argumentos.",
    "topic": "Términos y sintaxis",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-08",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Listas, pares y colas abiertas»?",
    "options": [
      "Entiende que los operadores cambian el parseo, no crean por sí mismos nueva semántica al operar.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] al operar.",
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo al operar.",
      "Interpreta [], [H|T], listas propias, impropias y parciales respetando las invariantes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Listas, pares y colas abiertas (Términos y sintaxis): Interpreta [], [H|T], listas propias, impropias y parciales.",
    "topic": "Términos y sintaxis",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-09",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Operadores y precedencia»?",
    "options": [
      "Entiende que los operadores cambian el parseo, no crean por sí mismos nueva semántica.",
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo].",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Operadores y precedencia (Términos y sintaxis): Entiende que los operadores cambian el parseo, no crean por sí mismos nueva semántica.",
    "topic": "Términos y sintaxis",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-10",
    "collectionId": "prolog",
    "question": "Respecto a hechos, reglas y consultas en Prolog, ¿cuál es el propósito de «Hechos»?",
    "options": [
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Declara relaciones que se aceptan sin premisas adicionales bajo condiciones productivas.",
      "Agrupa cláusulas por nombre y aridad usando indicadores como route/3 de modo predecible.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Hechos (Hechos, reglas y consultas): Declara relaciones que se aceptan sin premisas adicionales.",
    "topic": "Hechos, reglas y consultas",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-11",
    "collectionId": "prolog",
    "question": "En Prolog (Hechos, reglas y consultas), ¿qué función técnica cumple «Reglas»?",
    "options": [
      "Agrupa cláusulas por nombre y aridad usando indicadores como route/3 de forma segura.",
      "Separa qué relación describe una regla de cómo el motor la recorre de forma clara.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito.",
      "Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reglas (Hechos, reglas y consultas): Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito.",
    "topic": "Hechos, reglas y consultas",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-12",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «Consultas y objetivos» en hechos, reglas y consultas?",
    "options": [
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito en el flujo.",
      "Diferencia una poda que conserva respuestas de otra que cambia el significado lógico al operar.",
      "Entiende que los operadores cambian el parseo, no crean por sí mismos nueva semántica al operar.",
      "Formula preguntas con variables y observa las sustituciones que constituyen cada respuesta."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Consultas y objetivos (Hechos, reglas y consultas): Formula preguntas con variables y observa las sustituciones que constituyen cada respuesta.",
    "topic": "Hechos, reglas y consultas",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-13",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Cláusulas y predicados»?",
    "options": [
      "Agrupa cláusulas por nombre y aridad usando indicadores como route/3 manteniendo consistencia.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cláusulas y predicados (Hechos, reglas y consultas): Agrupa cláusulas por nombre y aridad usando indicadores como route/3.",
    "topic": "Hechos, reglas y consultas",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-14",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Lectura lógica y operacional»?",
    "options": [
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Separa qué relación describe una regla de cómo el motor la recorre durante la ejecución.",
      "Agrupa cláusulas por nombre y aridad usando indicadores como route/3 de modo predecible.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Lectura lógica y operacional (Hechos, reglas y consultas): Separa qué relación describe una regla de cómo el motor la recorre.",
    "topic": "Hechos, reglas y consultas",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-15",
    "collectionId": "prolog",
    "question": "Respecto a unificación e identidad en Prolog, ¿cuál es el propósito de «Unificación implícita»?",
    "options": [
      "Sigue cómo una sustitución afecta todas las apariciones de una variable de modo predecible.",
      "Comprende árboles racionales, portabilidad y unify_with_occurs_check/2 dentro del flujo.",
      "Observa cómo una llamada se compara con la cabeza de cada cláusula durante la ejecución.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Unificación implícita (Unificación e identidad): Observa cómo una llamada se compara con la cabeza de cada cláusula.",
    "topic": "Unificación e identidad",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-16",
    "collectionId": "prolog",
    "question": "En Prolog (Unificación e identidad), ¿qué función técnica cumple «Bindings»?",
    "options": [
      "Comprende árboles racionales, portabilidad y unify_with_occurs_check/2 de modo predecible.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar.",
      "Sigue cómo una sustitución afecta todas las apariciones de una variable de forma segura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Bindings y variables compartidas (Unificación e identidad): Sigue cómo una sustitución afecta todas las apariciones de una variable.",
    "topic": "Unificación e identidad",
    "difficulty": "básico"
  },
  {
    "id": "prolog-q-17",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «=/2, ==/2 y =@=/2» en unificación e identidad?",
    "options": [
      "Distingue unificar, comprobar identidad y comparar variantes respetando las invariantes.",
      "Sigue cómo una sustitución afecta todas las apariciones de una variable con precisión.",
      "Comprende árboles racionales, portabilidad y unify_with_occurs_check/2 de forma clara.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito."
    ],
    "correctAnswerIndex": 0,
    "explanation": "=/2, ==/2 y =@=/2 (Unificación e identidad): Distingue unificar, comprobar identidad y comparar variantes.",
    "topic": "Unificación e identidad",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-18",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «dif/2 frente a \\=/2»?",
    "options": [
      "Sigue cómo una sustitución afecta todas las apariciones de una variable sin degradar el flujo.",
      "Conserva una desigualdad declarativa aun cuando los términos todavía no estén instanciados.",
      "Comprende árboles racionales, portabilidad y unify_with_occurs_check/2 de modo predecible.",
      "Diferencia una poda que conserva respuestas de otra que cambia el significado lógico al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "dif/2 frente a \\=/2 (Unificación e identidad): Conserva una desigualdad declarativa aun cuando los términos todavía no estén instanciados.",
    "topic": "Unificación e identidad",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-19",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Occurs check y términos cíclicos»?",
    "options": [
      "Sigue cómo una sustitución afecta todas las apariciones de una variable de modo predecible.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Comprende árboles racionales, portabilidad y unify_with_occurs_check/2 dentro del flujo.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Occurs check y términos cíclicos (Unificación e identidad): Comprende árboles racionales, portabilidad y unify_with_occurs_check/2.",
    "topic": "Unificación e identidad",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-20",
    "collectionId": "prolog",
    "question": "Respecto a resolución y árbol de prueba en Prolog, ¿cuál es el propósito de «Demostración dirigida por objetivos»?",
    "options": [
      "Explica por qué una respuesta existente puede quedar oculta tras una rama infinita al operar.",
      "Reconoce cómo el orden del cuerpo afecta terminación, efectos y rendimiento en el flujo.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Convierte una consulta en subobjetivos hasta llegar a hechos o built-ins de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Demostración dirigida por objetivos (Resolución y árbol de prueba): Convierte una consulta en subobjetivos hasta llegar a hechos o built-ins.",
    "topic": "Resolución y árbol de prueba",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-21",
    "collectionId": "prolog",
    "question": "En Prolog (Resolución y árbol de prueba), ¿qué función técnica cumple «Selección izquierda a derecha»?",
    "options": [
      "Reconoce cómo el orden del cuerpo afecta terminación, efectos y rendimiento en el flujo.",
      "Explica por qué una respuesta existente puede quedar oculta tras una rama infinita.",
      "Convierte una consulta en subobjetivos hasta llegar a hechos o built-ins en ejecución.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Selección izquierda a derecha (Resolución y árbol de prueba): Reconoce cómo el orden del cuerpo afecta terminación, efectos y rendimiento.",
    "topic": "Resolución y árbol de prueba",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-22",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «Orden de cláusulas» en resolución y árbol de prueba?",
    "options": [
      "Explica por qué una respuesta existente puede quedar oculta tras una rama infinita al operar.",
      "Sigue el intento de alternativas de arriba hacia abajo dentro de la arquitectura activa.",
      "Reconoce cómo el orden del cuerpo afecta terminación, efectos y rendimiento en el flujo.",
      "Convierte una consulta en subobjetivos hasta llegar a hechos o built-ins de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Orden de cláusulas (Resolución y árbol de prueba): Sigue el intento de alternativas de arriba hacia abajo.",
    "topic": "Resolución y árbol de prueba",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-23",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Puntos de elección y trail»?",
    "options": [
      "Explica por qué una respuesta existente puede quedar oculta tras una rama infinita al operar.",
      "Reconoce cómo el orden del cuerpo afecta terminación, efectos y rendimiento al evaluar.",
      "Identifica qué bindings deben restaurarse si una rama falla respetando las invariantes.",
      "Convierte una consulta en subobjetivos hasta llegar a hechos o built-ins con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Puntos de elección y trail (Resolución y árbol de prueba): Identifica qué bindings deben restaurarse si una rama falla.",
    "topic": "Resolución y árbol de prueba",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-24",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Búsqueda en profundidad»?",
    "options": [
      "Reconoce cómo el orden del cuerpo afecta terminación, efectos y rendimiento al operar.",
      "Convierte una consulta en subobjetivos hasta llegar a hechos o built-ins al operar.",
      "Reúne todas las instancias, produciendo una lista vacía si no hay respuestas al operar.",
      "Explica por qué una respuesta existente puede quedar oculta tras una rama infinita."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Búsqueda en profundidad (Resolución y árbol de prueba): Explica por qué una respuesta existente puede quedar oculta tras una rama infinita.",
    "topic": "Resolución y árbol de prueba",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-25",
    "collectionId": "prolog",
    "question": "Respecto a nondeterminismo y modos en Prolog, ¿cuál es el propósito de «Múltiples respuestas»?",
    "options": [
      "Solicita alternativas con punto y coma y distingue una solución de la enumeración completa.",
      "Evalúa cuándo un predicado funciona en varias direcciones y cuándo exige instanciación.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar.",
      "Diseña predicados que generan candidatos y otros que validan relaciones dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Múltiples respuestas (Nondeterminismo y modos): Solicita alternativas con punto y coma y distingue una solución de la enumeración completa.",
    "topic": "Nondeterminismo y modos",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-26",
    "collectionId": "prolog",
    "question": "En Prolog (Nondeterminismo y modos), ¿qué función técnica cumple «Generadores y verificadores»?",
    "options": [
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar.",
      "Diseña predicados que generan candidatos y otros que validan relaciones de forma segura.",
      "Evalúa cuándo un predicado funciona en varias direcciones y cuándo exige instanciación.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Generadores y verificadores (Nondeterminismo y modos): Diseña predicados que generan candidatos y otros que validan relaciones.",
    "topic": "Nondeterminismo y modos",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-27",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «Modos de uso» en nondeterminismo y modos?",
    "options": [
      "Diseña predicados que generan candidatos y otros que validan relaciones en ejecución.",
      "Usa make/0 para actualizar módulos modificados sin reiniciar toda la sesión al operar.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos.",
      "Reconoce cómo el orden del cuerpo afecta terminación, efectos y rendimiento al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Modos de uso (Nondeterminismo y modos): Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos.",
    "topic": "Nondeterminismo y modos",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-28",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Determinismo»?",
    "options": [
      "Diseña predicados que generan candidatos y otros que validan relaciones al operar.",
      "Sigue cómo una sustitución afecta todas las apariciones de una variable al operar.",
      "Comprende árboles racionales, portabilidad y unify_with_occurs_check/2 al operar.",
      "Distingue det, semidet, multi y nondet dentro del ciclo operativo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Determinismo (Nondeterminismo y modos): Distingue det, semidet, multi y nondet.",
    "topic": "Nondeterminismo y modos",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-29",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Relaciones reversibles»?",
    "options": [
      "Evalúa cuándo un predicado funciona en varias direcciones y cuándo exige instanciación.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos.",
      "Diseña predicados que generan candidatos y otros que validan relaciones en ejecución.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo]."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Relaciones reversibles (Nondeterminismo y modos): Evalúa cuándo un predicado funciona en varias direcciones y cuándo exige instanciación.",
    "topic": "Nondeterminismo y modos",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-30",
    "collectionId": "prolog",
    "question": "Respecto a recursión y terminación en Prolog, ¿cuál es el propósito de «Caso base»?",
    "options": [
      "Transporta estado explícito sin perder invariantes ni introducir reversión incorrecta al operar.",
      "Detiene la relación cuando la estructura alcanza su forma mínima sin degradar el flujo.",
      "Demuestra terminación según modos, orden de objetivos y tamaño de entrada en ejecución.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Caso base (Recursión y terminación): Detiene la relación cuando la estructura alcanza su forma mínima.",
    "topic": "Recursión y terminación",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-31",
    "collectionId": "prolog",
    "question": "En Prolog (Recursión y terminación), ¿qué función técnica cumple «Paso recursivo»?",
    "options": [
      "Transporta estado explícito sin perder invariantes ni introducir reversión incorrecta al operar.",
      "Demuestra terminación según modos, orden de objetivos y tamaño de entrada con precisión.",
      "Reduce el problema preservando el significado de la relación respetando las invariantes.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Paso recursivo (Recursión y terminación): Reduce el problema preservando el significado de la relación.",
    "topic": "Recursión y terminación",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-32",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «Recursión estructural» en recursión y terminación?",
    "options": [
      "Transporta estado explícito sin perder invariantes ni introducir reversión incorrecta al operar.",
      "Demuestra terminación según modos, orden de objetivos y tamaño de entrada con precisión.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Recorre listas y árboles siguiendo su construcción respetando las restricciones de tipo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Recursión estructural (Recursión y terminación): Recorre listas y árboles siguiendo su construcción.",
    "topic": "Recursión y terminación",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-33",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Acumuladores»?",
    "options": [
      "Transporta estado explícito sin perder invariantes ni introducir reversión incorrecta.",
      "Demuestra terminación según modos, orden de objetivos y tamaño de entrada al operar.",
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo]."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Acumuladores (Recursión y terminación): Transporta estado explícito sin perder invariantes ni introducir reversión incorrecta.",
    "topic": "Recursión y terminación",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-34",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Medida decreciente»?",
    "options": [
      "Transporta estado explícito sin perder invariantes ni introducir reversión incorrecta al operar.",
      "Demuestra terminación según modos, orden de objetivos y tamaño de entrada con precisión.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Medida decreciente (Recursión y terminación): Demuestra terminación según modos, orden de objetivos y tamaño de entrada.",
    "topic": "Recursión y terminación",
    "difficulty": "intermedio"
  },
  {
    "id": "prolog-q-35",
    "collectionId": "prolog",
    "question": "Respecto a listas, árboles y estructuras simbólicas en Prolog, ¿cuál es el propósito de «member/2 y append/3»?",
    "options": [
      "Elige listas ordenadas, ordsets, assoc u otra estructura según la operación con precisión.",
      "Usa copy_term/2, term_variables/2 y variantes sin romper identidad lógica en ejecución.",
      "Aprende relaciones que pueden consultar, dividir o construir listas de modo predecible.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "member/2 y append/3 (Listas, árboles y estructuras simbólicas): Aprende relaciones que pueden consultar, dividir o construir listas.",
    "topic": "Listas, árboles y estructuras simbólicas",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-36",
    "collectionId": "prolog",
    "question": "En Prolog (Listas, árboles y estructuras simbólicas), ¿qué función técnica cumple «Listas diferencia»?",
    "options": [
      "Elige listas ordenadas, ordsets, assoc u otra estructura según la operación con precisión.",
      "Usa copy_term/2, term_variables/2 y variantes sin romper identidad lógica en ejecución.",
      "Aprende relaciones que pueden consultar, dividir o construir listas de modo predecible.",
      "Representa concatenación mediante una cola lógica aún no cerrada sin degradar el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Listas diferencia (Listas, árboles y estructuras simbólicas): Representa concatenación mediante una cola lógica aún no cerrada.",
    "topic": "Listas, árboles y estructuras simbólicas",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-37",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «Árboles algebraicos» en listas, árboles y estructuras simbólicas?",
    "options": [
      "Modela nodos y hojas con términos compuestos dentro del ciclo operativo del sistema.",
      "Elige listas ordenadas, ordsets, assoc u otra estructura según la operación al operar.",
      "Usa copy_term/2, term_variables/2 y variantes sin romper identidad lógica al operar.",
      "Aprende relaciones que pueden consultar, dividir o construir listas con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Árboles algebraicos (Listas, árboles y estructuras simbólicas): Modela nodos y hojas con términos compuestos.",
    "topic": "Listas, árboles y estructuras simbólicas",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-38",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Conjuntos y asociaciones»?",
    "options": [
      "Usa copy_term/2, term_variables/2 y variantes sin romper identidad lógica dentro del flujo.",
      "Elige listas ordenadas, ordsets, assoc u otra estructura según la operación en el flujo.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Conjuntos y asociaciones (Listas, árboles y estructuras simbólicas): Elige listas ordenadas, ordsets, assoc u otra estructura según la operación.",
    "topic": "Listas, árboles y estructuras simbólicas",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-39",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Copia, variables y sharing»?",
    "options": [
      "Elige listas ordenadas, ordsets, assoc u otra estructura según la operación de forma clara.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Usa copy_term/2, term_variables/2 y variantes sin romper identidad lógica con precisión.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Copia, variables y sharing (Listas, árboles y estructuras simbólicas): Usa copy_term/2, term_variables/2 y variantes sin romper identidad lógica.",
    "topic": "Listas, árboles y estructuras simbólicas",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-40",
    "collectionId": "prolog",
    "question": "Respecto a control declarativo e impuro en Prolog, ¿cuál es el propósito de «Conjunción y disyunción»?",
    "options": [
      "Diferencia una poda que conserva respuestas de otra que cambia el significado lógico al operar.",
      "Usa \\+/1 solo cuando la instanciación y el mundo cerrado sean apropiados de forma clara.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Combina objetivos con coma y alternativas con punto y coma bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Conjunción y disyunción (Control declarativo e impuro): Combina objetivos con coma y alternativas con punto y coma.",
    "topic": "Control declarativo e impuro",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-41",
    "collectionId": "prolog",
    "question": "En Prolog (Control declarativo e impuro), ¿qué función técnica cumple «true y fail»?",
    "options": [
      "Expresa éxito neutro y fallo explícito dentro del ciclo operativo del sistema.",
      "Usa \\+/1 solo cuando la instanciación y el mundo cerrado sean apropiados.",
      "Combina objetivos con coma y alternativas con punto y coma dentro del flujo.",
      "Sigue cómo una sustitución afecta todas las apariciones de una variable."
    ],
    "correctAnswerIndex": 0,
    "explanation": "true y fail (Control declarativo e impuro): Expresa éxito neutro y fallo explícito.",
    "topic": "Control declarativo e impuro",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-42",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «If-then-else y once/1» en control declarativo e impuro?",
    "options": [
      "Usa \\+/1 solo cuando la instanciación y el mundo cerrado sean apropiados al operar.",
      "Limita alternativas con alcance visible dentro del ciclo operativo del sistema.",
      "Convierte una consulta en subobjetivos hasta llegar a hechos o built-ins al operar.",
      "Combina objetivos con coma y alternativas con punto y coma de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "If-then-else y once/1 (Control declarativo e impuro): Limita alternativas con alcance visible.",
    "topic": "Control declarativo e impuro",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-43",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Negación como fallo»?",
    "options": [
      "Diferencia una poda que conserva respuestas de otra que cambia el significado lógico al operar.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Usa \\+/1 solo cuando la instanciación y el mundo cerrado sean apropiados de forma clara.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Negación como fallo (Control declarativo e impuro): Usa \\+/1 solo cuando la instanciación y el mundo cerrado sean apropiados.",
    "topic": "Control declarativo e impuro",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-44",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Cuts verdes y rojos»?",
    "options": [
      "Usa \\+/1 solo cuando la instanciación y el mundo cerrado sean apropiados de forma clara.",
      "Instala una versión fijada y distingue el canal estable del canal de desarrollo al operar.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo].",
      "Diferencia una poda que conserva respuestas de otra que cambia el significado lógico."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Cuts verdes y rojos (Control declarativo e impuro): Diferencia una poda que conserva respuestas de otra que cambia el significado lógico.",
    "topic": "Control declarativo e impuro",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-45",
    "collectionId": "prolog",
    "question": "Respecto a aritmética y orden en Prolog, ¿cuál es el propósito de «Evaluación con is/2»?",
    "options": [
      "Evalúa una expresión instanciada y unifica el resultado durante la ejecución del módulo.",
      "Identifica cuándo is/2 rompe reversibilidad y conviene usar restricciones en el flujo.",
      "Reconoce instantiation, type, domain, evaluation y representation errors en ejecución.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Evaluación con is/2 (Aritmética y orden): Evalúa una expresión instanciada y unifica el resultado.",
    "topic": "Aritmética y orden",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-46",
    "collectionId": "prolog",
    "question": "En Prolog (Aritmética y orden), ¿qué función técnica cumple «Comparaciones aritméticas»?",
    "options": [
      "Identifica cuándo is/2 rompe reversibilidad y conviene usar restricciones sin perder estado.",
      "Usa =:=, =\\=, <, =<, > y >= sobre valores evaluables manteniendo la trazabilidad técnica.",
      "Reconoce instantiation, type, domain, evaluation y representation errors de forma segura.",
      "Explica por qué una respuesta existente puede quedar oculta tras una rama infinita al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Comparaciones aritméticas (Aritmética y orden): Usa =:=, =\\=, <, =<, > y >= sobre valores evaluables.",
    "topic": "Aritmética y orden",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-47",
    "collectionId": "prolog",
    "question": "Dentro de Prolog, ¿cómo opera el mecanismo de «Comparación de términos» en aritmética y orden?",
    "options": [
      "Identifica cuándo is/2 rompe reversibilidad y conviene usar restricciones dentro del flujo.",
      "Reconoce instantiation, type, domain, evaluation y representation errors de forma clara.",
      "Separa el orden estándar @< de una comparación numérica durante la ejecución del módulo.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Comparación de términos (Aritmética y orden): Separa el orden estándar @< de una comparación numérica.",
    "topic": "Aritmética y orden",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-48",
    "collectionId": "prolog",
    "question": "Al trabajar con Prolog, ¿qué responsabilidad define a «Tipos y errores numéricos»?",
    "options": [
      "Identifica cuándo is/2 rompe reversibilidad y conviene usar restricciones dentro del flujo.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar.",
      "Reconoce instantiation, type, domain, evaluation y representation errors de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Tipos y errores numéricos (Aritmética y orden): Reconoce instantiation, type, domain, evaluation y representation errors.",
    "topic": "Aritmética y orden",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-49",
    "collectionId": "prolog",
    "question": "En la arquitectura de Prolog, ¿qué caracteriza técnicamente a «Límite de la aritmética tradicional»?",
    "options": [
      "Identifica cuándo is/2 rompe reversibilidad y conviene usar restricciones con precisión.",
      "Reconoce instantiation, type, domain, evaluation y representation errors en ejecución.",
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Límite de la aritmética tradicional (Aritmética y orden): Identifica cuándo is/2 rompe reversibilidad y conviene usar restricciones.",
    "topic": "Aritmética y orden",
    "difficulty": "avanzado"
  },
  {
    "id": "prolog-q-50",
    "collectionId": "prolog",
    "question": "Respecto a soluciones y programación de orden superior en Prolog, ¿cuál es el propósito de «findall/3»?",
    "options": [
      "Expresa una cabeza demostrable cuando todos los objetivos del cuerpo tienen éxito al operar.",
      "Reúne todas las instancias, produciendo una lista vacía si no hay respuestas al evaluar.",
      "Documenta argumentos de entrada, salida o ambos sin convertirlos en tipos rígidos al operar.",
      "Carga programas mediante consult/1, argumentos de CLI o la abreviatura [archivo] al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "findall/3 (Soluciones y programación de orden superior): Reúne todas las instancias, produciendo una lista vacía si no hay respuestas.",
    "topic": "Soluciones y programación de orden superior",
    "difficulty": "avanzado"
  }
];
