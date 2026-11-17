import type { QuizQuestion } from "@/data/quizTypes";

export const haskellQuestions: QuizQuestion[] = [
  {
    "id": "haskell-q-01",
    "collectionId": "haskell",
    "question": "En Haskell (Evaluación interna), ¿qué función técnica cumple «Weak head normal form»?",
    "options": [
      "Reduce una expresión únicamente hasta descubrir su constructor externo o abstracción lambda.",
      "Marca una suspensión en evaluación activa para detectar ciclos infinitos y bloquear hilos.",
      "Retiene cadenas de cómputos diferidos sin evaluar que agotan gradualmente la memoria viva.",
      "Representa escalares crudos en registros o pila sin envolverlos en punteros hacia el heap."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Weak head normal form (Evaluación interna): Reduce una expresión únicamente hasta descubrir su constructor externo o abstracción lambda.",
    "topic": "Evaluación interna",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-02",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Black holes» en evaluación interna?",
    "options": [
      "Retiene cadenas de cómputos diferidos sin evaluar que agotan gradualmente la memoria viva.",
      "Marca una suspensión en evaluación activa para detectar ciclos infinitos y bloquear hilos.",
      "Representa escalares crudos en registros o pila sin envolverlos en punteros hacia el heap.",
      "Extrae un campo puntual durante la recolección de basura para liberar la tupla contenedora."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Black holes (Evaluación interna): Marca una suspensión en evaluación activa para detectar ciclos infinitos y bloquear hilos.",
    "topic": "Evaluación interna",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-03",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Space leaks»?",
    "options": [
      "Marca una suspensión en evaluación activa para detectar ciclos infinitos y bloquear hilos.",
      "Representa escalares crudos en registros o pila sin envolverlos en punteros hacia el heap.",
      "Retiene cadenas de cómputos diferidos sin evaluar que agotan gradualmente la memoria viva.",
      "Extrae un campo puntual durante la recolección de basura para liberar la tupla contenedora."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Space leaks (Evaluación interna): Retiene cadenas de cómputos diferidos sin evaluar que agotan gradualmente la memoria viva.",
    "topic": "Evaluación interna",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-04",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Unboxed values»?",
    "options": [
      "Marca una suspensión en evaluación activa para detectar ciclos infinitos y bloquear hilos.",
      "Retiene cadenas de cómputos diferidos sin evaluar que agotan gradualmente la memoria viva.",
      "Extrae un campo puntual durante la recolección de basura para liberar la tupla contenedora.",
      "Representa escalares crudos en registros o pila sin envolverlos en punteros hacia el heap."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Unboxed values (Evaluación interna): Representa escalares crudos en registros o pila sin envolverlos en punteros hacia el heap.",
    "topic": "Evaluación interna",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-05",
    "collectionId": "haskell",
    "question": "Respecto a evaluación interna en Haskell, ¿cuál es el propósito de «Pointer tagging»?",
    "options": [
      "Codifica el estado de evaluación y el constructor directamente en los bits bajos del puntero.",
      "Marca una suspensión en evaluación activa para detectar ciclos infinitos y bloquear hilos.",
      "Retiene cadenas de cómputos diferidos sin evaluar que agotan gradualmente la memoria viva.",
      "Representa escalares crudos en registros o pila sin envolverlos en punteros hacia el heap."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pointer tagging (Evaluación interna): Codifica el estado de evaluación y el constructor directamente en los bits bajos del puntero.",
    "topic": "Evaluación interna",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-06",
    "collectionId": "haskell",
    "question": "En Haskell (Evaluación interna), ¿qué función técnica cumple «Selector thunks»?",
    "options": [
      "Marca una suspensión en evaluación activa para detectar ciclos infinitos y bloquear hilos al operar.",
      "Extrae un campo puntual durante la recolección de basura para liberar la tupla contenedora.",
      "Retiene cadenas de cómputos diferidos sin evaluar que agotan gradualmente la memoria viva.",
      "Representa escalares crudos en registros o pila sin envolverlos en punteros hacia el heap."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Selector thunks (Evaluación interna): Extrae un campo puntual durante la recolección de basura para liberar la tupla contenedora.",
    "topic": "Evaluación interna",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-07",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Core language» en optimización con ghc?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Infiere qué argumentos serán forzados con certeza para anticipar su evaluación estricta al operar.",
      "Desugara el código fuente hacia un cálculo lambda tipado explícitamente antes de optimizarlo.",
      "Sustituye la llamada a una función pequeña por su cuerpo para habilitar simplificaciones."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Core language (Optimización con GHC): Desugara el código fuente hacia un cálculo lambda tipado explícitamente antes de optimizarlo.",
    "topic": "Optimización con GHC",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-08",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Inlining»?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Infiere qué argumentos serán forzados con certeza para anticipar su evaluación estricta.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos.",
      "Sustituye la llamada a una función pequeña por su cuerpo para habilitar simplificaciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Inlining (Optimización con GHC): Sustituye la llamada a una función pequeña por su cuerpo para habilitar simplificaciones.",
    "topic": "Optimización con GHC",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-09",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Rewrite rules»?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Infiere qué argumentos serán forzados con certeza para anticipar su evaluación estricta.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos.",
      "Sustituye la llamada a una función pequeña por su cuerpo para habilitar simplificaciones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Rewrite rules (Optimización con GHC): Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar.",
    "topic": "Optimización con GHC",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-10",
    "collectionId": "haskell",
    "question": "Respecto a optimización con ghc en Haskell, ¿cuál es el propósito de «Fusion»?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Combina etapas sucesivas de producción y consumo para suprimir listas intermedias en memoria.",
      "Infiere qué argumentos serán forzados con certeza para anticipar su evaluación estricta al operar.",
      "Sustituye la llamada a una función pequeña por su cuerpo para habilitar simplificaciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fusion (Optimización con GHC): Combina etapas sucesivas de producción y consumo para suprimir listas intermedias en memoria.",
    "topic": "Optimización con GHC",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-11",
    "collectionId": "haskell",
    "question": "En Haskell (Optimización con GHC), ¿qué función técnica cumple «Demand analysis»?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Sustituye la llamada a una función pequeña por su cuerpo para habilitar simplificaciones.",
      "Infiere qué argumentos serán forzados con certeza para anticipar su evaluación estricta.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Demand analysis (Optimización con GHC): Infiere qué argumentos serán forzados con certeza para anticipar su evaluación estricta.",
    "topic": "Optimización con GHC",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-12",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Worker-wrapper transformation» en optimización con ghc?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Infiere qué argumentos serán forzados con certeza para anticipar su evaluación estricta al operar.",
      "Sustituye la llamada a una función pequeña por su cuerpo para habilitar simplificaciones.",
      "Divide una función recursiva en una envoltura pública y un núcleo interno con valores crudos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Worker-wrapper transformation (Optimización con GHC): Divide una función recursiva en una envoltura pública y un núcleo interno con valores crudos.",
    "topic": "Optimización con GHC",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-13",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Green threads»?",
    "options": [
      "Planifica miles de hilos ligeros en espacio de usuario sobre un grupo reducido de núcleos.",
      "Agrupa lecturas y escrituras compartidas en bloques atómicos reintentables sin bloqueos.",
      "Envía señales de cancelación o fallo desde un hilo externo hacia otro cómputo en ejecución.",
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Green threads (Concurrencia robusta): Planifica miles de hilos ligeros en espacio de usuario sobre un grupo reducido de núcleos.",
    "topic": "Concurrencia robusta",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-14",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «MVar»?",
    "options": [
      "Planifica miles de hilos ligeros en espacio de usuario sobre un grupo reducido de núcleos al operar.",
      "Sincroniza productores y consumidores mediante una celda mutable que puede estar llena o vacía.",
      "Agrupa lecturas y escrituras compartidas en bloques atómicos reintentables sin bloqueos al operar.",
      "Envía señales de cancelación o fallo desde un hilo externo hacia otro cómputo en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "MVar (Concurrencia robusta): Sincroniza productores y consumidores mediante una celda mutable que puede estar llena o vacía.",
    "topic": "Concurrencia robusta",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-15",
    "collectionId": "haskell",
    "question": "Respecto a concurrencia robusta en Haskell, ¿cuál es el propósito de «Software transactional memory»?",
    "options": [
      "Planifica miles de hilos ligeros en espacio de usuario sobre un grupo reducido de núcleos.",
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar.",
      "Agrupa lecturas y escrituras compartidas en bloques atómicos reintentables sin bloqueos.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Software transactional memory (Concurrencia robusta): Agrupa lecturas y escrituras compartidas en bloques atómicos reintentables sin bloqueos.",
    "topic": "Concurrencia robusta",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-16",
    "collectionId": "haskell",
    "question": "En Haskell (Concurrencia robusta), ¿qué función técnica cumple «Async exceptions»?",
    "options": [
      "Agrupa lecturas y escrituras compartidas en bloques atómicos reintentables sin bloqueos al operar.",
      "Planifica miles de hilos ligeros en espacio de usuario sobre un grupo reducido de núcleos.",
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Envía señales de cancelación o fallo desde un hilo externo hacia otro cómputo en ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Async exceptions (Concurrencia robusta): Envía señales de cancelación o fallo desde un hilo externo hacia otro cómputo en ejecución.",
    "topic": "Concurrencia robusta",
    "difficulty": "básico"
  },
  {
    "id": "haskell-q-17",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Structured async» en concurrencia robusta?",
    "options": [
      "Vincula el ciclo de vida de tareas concurrentes hijas para cancelar huérfanos automáticamente.",
      "Agrupa lecturas y escrituras compartidas en bloques atómicos reintentables sin bloqueos.",
      "Planifica miles de hilos ligeros en espacio de usuario sobre un grupo reducido de núcleos.",
      "Envía señales de cancelación o fallo desde un hilo externo hacia otro cómputo en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Structured async (Concurrencia robusta): Vincula el ciclo de vida de tareas concurrentes hijas para cancelar huérfanos automáticamente.",
    "topic": "Concurrencia robusta",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-18",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Bound threads»?",
    "options": [
      "Planifica miles de hilos ligeros en espacio de usuario sobre un grupo reducido de núcleos al operar.",
      "Asocia un hilo ligero a un hilo nativo del sistema operativo para bibliotecas con estado local.",
      "Agrupa lecturas y escrituras compartidas en bloques atómicos reintentables sin bloqueos al operar.",
      "Envía señales de cancelación o fallo desde un hilo externo hacia otro cómputo en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bound threads (Concurrencia robusta): Asocia un hilo ligero a un hilo nativo del sistema operativo para bibliotecas con estado local.",
    "topic": "Concurrencia robusta",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-19",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Masking states»?",
    "options": [
      "Planifica miles de hilos ligeros en espacio de usuario sobre un grupo reducido de núcleos al operar.",
      "Envía señales de cancelación o fallo desde un hilo externo hacia otro cómputo en ejecución al operar.",
      "Suprime temporalmente interrupciones externas mientras se adquieren o liberan recursos críticos.",
      "Agrupa lecturas y escrituras compartidas en bloques atómicos reintentables sin bloqueos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Masking states (Concurrencia robusta): Suprime temporalmente interrupciones externas mientras se adquieren o liberan recursos críticos.",
    "topic": "Concurrencia robusta",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-20",
    "collectionId": "haskell",
    "question": "Respecto a paralelismo en Haskell, ¿cuál es el propósito de «Sparks»?",
    "options": [
      "Secuencia explícitamente el orden y grado de reducción de estructuras puras en paralelo al operar.",
      "Separa la lógica pura del algoritmo respecto a la política que guía su evaluación paralela.",
      "Distribuye operaciones numéricas sobre arreglos contiguos entre múltiples núcleos de cómputo.",
      "Encola expresiones puras candidatas para evaluarse en paralelo cuando haya procesadores libres."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sparks (Paralelismo): Encola expresiones puras candidatas para evaluarse en paralelo cuando haya procesadores libres.",
    "topic": "Paralelismo",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-21",
    "collectionId": "haskell",
    "question": "En Haskell (Paralelismo), ¿qué función técnica cumple «Strategies»?",
    "options": [
      "Separa la lógica pura del algoritmo respecto a la política que guía su evaluación paralela al operar.",
      "Secuencia explícitamente el orden y grado de reducción de estructuras puras en paralelo.",
      "Distribuye operaciones numéricas sobre arreglos contiguos entre múltiples núcleos de cómputo.",
      "Inspecciona trazas binarias de tiempo de ejecución para diagnosticar pausas y desequilibrios."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Strategies (Paralelismo): Separa la lógica pura del algoritmo respecto a la política que guía su evaluación paralela.",
    "topic": "Paralelismo",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-22",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Evaluation monad» en paralelismo?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Secuencia explícitamente el orden y grado de reducción de estructuras puras en paralelo.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos.",
      "Compara la salida serializada de una prueba contra un archivo de referencia versionado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Evaluation monad (Paralelismo): Secuencia explícitamente el orden y grado de reducción de estructuras puras en paralelo.",
    "topic": "Paralelismo",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-23",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Parallel arrays»?",
    "options": [
      "Secuencia explícitamente el orden y grado de reducción de estructuras puras en paralelo al operar.",
      "Separa la lógica pura del algoritmo respecto a la política que guía su evaluación paralela.",
      "Distribuye operaciones numéricas sobre arreglos contiguos entre múltiples núcleos de cómputo.",
      "Inspecciona trazas binarias de tiempo de ejecución para diagnosticar pausas y desequilibrios."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Parallel arrays (Paralelismo): Distribuye operaciones numéricas sobre arreglos contiguos entre múltiples núcleos de cómputo.",
    "topic": "Paralelismo",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-24",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Eventlog analysis»?",
    "options": [
      "Secuencia explícitamente el orden y grado de reducción de estructuras puras en paralelo al operar.",
      "Separa la lógica pura del algoritmo respecto a la política que guía su evaluación paralela.",
      "Distribuye operaciones numéricas sobre arreglos contiguos entre múltiples núcleos de cómputo.",
      "Inspecciona trazas binarias de tiempo de ejecución para diagnosticar pausas y desequilibrios."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Eventlog analysis (Paralelismo): Inspecciona trazas binarias de tiempo de ejecución para diagnosticar pausas y desequilibrios.",
    "topic": "Paralelismo",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-25",
    "collectionId": "haskell",
    "question": "Respecto a parsing y lenguajes en Haskell, ¿cuál es el propósito de «Parser combinators»?",
    "options": [
      "Construye analizadores complejos componiendo funciones pequeñas que consumen flujos de entrada.",
      "Reanuda el análisis sintáctico por bloques conforme llegan fragmentos adicionales de entrada.",
      "Sincroniza el flujo tras un token inválido para reportar múltiples fallos en una sola pasada.",
      "Provee análisis sintáctico industrial con reportes detallados de posición y contexto de fallo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Parser combinators (Parsing y lenguajes): Construye analizadores complejos componiendo funciones pequeñas que consumen flujos de entrada.",
    "topic": "Parsing y lenguajes",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-26",
    "collectionId": "haskell",
    "question": "En Haskell (Parsing y lenguajes), ¿qué función técnica cumple «Applicative parsing»?",
    "options": [
      "Reanuda el análisis sintáctico por bloques conforme llegan fragmentos adicionales de entrada al operar.",
      "Combina reglas gramaticales independientes sin depender del resultado previo para optimizarlas.",
      "Sincroniza el flujo tras un token inválido para reportar múltiples fallos en una sola pasada.",
      "Provee análisis sintáctico industrial con reportes detallados de posición y contexto de fallo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Applicative parsing (Parsing y lenguajes): Combina reglas gramaticales independientes sin depender del resultado previo para optimizarlas.",
    "topic": "Parsing y lenguajes",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-27",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Megaparsec» en parsing y lenguajes?",
    "options": [
      "Reanuda el análisis sintáctico por bloques conforme llegan fragmentos adicionales de entrada al operar.",
      "Sincroniza el flujo tras un token inválido para reportar múltiples fallos en una sola pasada.",
      "Provee análisis sintáctico industrial con reportes detallados de posición y contexto de fallo.",
      "Construye analizadores complejos componiendo funciones pequeñas que consumen flujos de entrada."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Megaparsec (Parsing y lenguajes): Provee análisis sintáctico industrial con reportes detallados de posición y contexto de fallo.",
    "topic": "Parsing y lenguajes",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-28",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Árboles de sintaxis»?",
    "options": [
      "Reanuda el análisis sintáctico por bloques conforme llegan fragmentos adicionales de entrada al operar.",
      "Sincroniza el flujo tras un token inválido para reportar múltiples fallos en una sola pasada.",
      "Provee análisis sintáctico industrial con reportes detallados de posición y contexto de fallo.",
      "Modela la estructura jerárquica del código fuente mediante tipos algebraicos fuertemente tipados."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Árboles de sintaxis (Parsing y lenguajes): Modela la estructura jerárquica del código fuente mediante tipos algebraicos fuertemente tipados.",
    "topic": "Parsing y lenguajes",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-29",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Pretty printing»?",
    "options": [
      "Formatea estructuras arbóreas en texto legible respetando márgenes y saltos de línea dinámicos.",
      "Reanuda el análisis sintáctico por bloques conforme llegan fragmentos adicionales de entrada.",
      "Sincroniza el flujo tras un token inválido para reportar múltiples fallos en una sola pasada.",
      "Provee análisis sintáctico industrial con reportes detallados de posición y contexto de fallo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pretty printing (Parsing y lenguajes): Formatea estructuras arbóreas en texto legible respetando márgenes y saltos de línea dinámicos.",
    "topic": "Parsing y lenguajes",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-30",
    "collectionId": "haskell",
    "question": "Respecto a parsing y lenguajes en Haskell, ¿cuál es el propósito de «Incremental parsing»?",
    "options": [
      "Sincroniza el flujo tras un token inválido para reportar múltiples fallos en una sola pasada.",
      "Reanuda el análisis sintáctico por bloques conforme llegan fragmentos adicionales de entrada.",
      "Provee análisis sintáctico industrial con reportes detallados de posición y contexto de fallo.",
      "Construye analizadores complejos componiendo funciones pequeñas que consumen flujos de entrada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Incremental parsing (Parsing y lenguajes): Reanuda el análisis sintáctico por bloques conforme llegan fragmentos adicionales de entrada.",
    "topic": "Parsing y lenguajes",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-31",
    "collectionId": "haskell",
    "question": "En Haskell (Parsing y lenguajes), ¿qué función técnica cumple «Error recovery combinators»?",
    "options": [
      "Reanuda el análisis sintáctico por bloques conforme llegan fragmentos adicionales de entrada.",
      "Provee análisis sintáctico industrial con reportes detallados de posición y contexto de fallo.",
      "Sincroniza el flujo tras un token inválido para reportar múltiples fallos en una sola pasada.",
      "Construye analizadores complejos componiendo funciones pequeñas que consumen flujos de entrada."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Error recovery combinators (Parsing y lenguajes): Sincroniza el flujo tras un token inválido para reportar múltiples fallos en una sola pasada.",
    "topic": "Parsing y lenguajes",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-32",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Generators y shrinkers» en pruebas y verificación?",
    "options": [
      "Compara la salida serializada de una prueba contra un archivo de referencia versionado al operar.",
      "Prioriza casos de prueba aleatorios que exploran ramas de ejecución aún no ejercitadas al operar.",
      "Anota firmas con predicados lógicos verificados automáticamente mediante solucionadores SMT.",
      "Produce entradas aleatorias válidas y reduce contraejemplos hasta el caso mínimo reproducible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Generators y shrinkers (Pruebas y verificación): Produce entradas aleatorias válidas y reduce contraejemplos hasta el caso mínimo reproducible.",
    "topic": "Pruebas y verificación",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-33",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «State-machine testing»?",
    "options": [
      "Verifica implementaciones con estado ejecutando secuencias aleatorias de comandos contra un modelo al operar.",
      "Produce entradas aleatorias válidas y reduce contraejemplos hasta el caso mínimo reproducible.",
      "Anota firmas con predicados lógicos verificados automáticamente mediante solucionadores SMT al operar.",
      "Demuestra equivalencia entre programas sustituyendo expresiones iguales gracias a la pureza al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "State-machine testing (Pruebas y verificación): Verifica implementaciones con estado ejecutando secuencias aleatorias de comandos contra un modelo.",
    "topic": "Pruebas y verificación",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-34",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Liquid types»?",
    "options": [
      "Compara la salida serializada de una prueba contra un archivo de referencia versionado al operar.",
      "Anota firmas con predicados lógicos verificados automáticamente mediante solucionadores SMT.",
      "Prioriza casos de prueba aleatorios que exploran ramas de ejecución aún no ejercitadas al operar.",
      "Demuestra equivalencia entre programas sustituyendo expresiones iguales gracias a la pureza."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Liquid types (Pruebas y verificación): Anota firmas con predicados lógicos verificados automáticamente mediante solucionadores SMT.",
    "topic": "Pruebas y verificación",
    "difficulty": "intermedio"
  },
  {
    "id": "haskell-q-35",
    "collectionId": "haskell",
    "question": "Respecto a pruebas y verificación en Haskell, ¿cuál es el propósito de «Equational reasoning»?",
    "options": [
      "Compara la salida serializada de una prueba contra un archivo de referencia versionado al operar.",
      "Prioriza casos de prueba aleatorios que exploran ramas de ejecución aún no ejercitadas al operar.",
      "Demuestra equivalencia entre programas sustituyendo expresiones iguales gracias a la pureza.",
      "Anota firmas con predicados lógicos verificados automáticamente mediante solucionadores SMT."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Equational reasoning (Pruebas y verificación): Demuestra equivalencia entre programas sustituyendo expresiones iguales gracias a la pureza.",
    "topic": "Pruebas y verificación",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-36",
    "collectionId": "haskell",
    "question": "En Haskell (Pruebas y verificación), ¿qué función técnica cumple «Golden tests»?",
    "options": [
      "Prioriza casos de prueba aleatorios que exploran ramas de ejecución aún no ejercitadas.",
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos.",
      "Compara la salida serializada de una prueba contra un archivo de referencia versionado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Golden tests (Pruebas y verificación): Compara la salida serializada de una prueba contra un archivo de referencia versionado.",
    "topic": "Pruebas y verificación",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-37",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Coverage-guided property generation» en pruebas y verificación?",
    "options": [
      "Prioriza casos de prueba aleatorios que exploran ramas de ejecución aún no ejercitadas.",
      "Compara la salida serializada de una prueba contra un archivo de referencia versionado.",
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Coverage-guided property generation (Pruebas y verificación): Prioriza casos de prueba aleatorios que exploran ramas de ejecución aún no ejercitadas.",
    "topic": "Pruebas y verificación",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-38",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Componentes Cabal»?",
    "options": [
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos en el flujo.",
      "Organiza bibliotecas, ejecutables y suites de prueba dentro de un mismo descriptor de proyecto.",
      "Establece cotas de compatibilidad semántica según cambios en las firmas públicas exportadas.",
      "Aísla todas las dependencias nativas y del compilador mediante hashes criptográficos exactos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Componentes Cabal (Construcción y distribución): Organiza bibliotecas, ejecutables y suites de prueba dentro de un mismo descriptor de proyecto.",
    "topic": "Construcción y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-39",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Stackage snapshots»?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar.",
      "Compara la salida serializada de una prueba contra un archivo de referencia versionado.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos.",
      "Prioriza casos de prueba aleatorios que exploran ramas de ejecución aún no ejercitadas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Stackage snapshots (Construcción y distribución): Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos.",
    "topic": "Construcción y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-40",
    "collectionId": "haskell",
    "question": "Respecto a construcción y distribución en Haskell, ¿cuál es el propósito de «Backpack modules»?",
    "options": [
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos al evaluar.",
      "Establece cotas de compatibilidad semántica según cambios en las firmas públicas exportadas.",
      "Aísla todas las dependencias nativas y del compilador mediante hashes criptográficos exactos.",
      "Parametriza paquetes mediante firmas abstractas que se instancian al enlazar implementaciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Backpack modules (Construcción y distribución): Parametriza paquetes mediante firmas abstractas que se instancian al enlazar implementaciones.",
    "topic": "Construcción y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-41",
    "collectionId": "haskell",
    "question": "En Haskell (Construcción y distribución), ¿qué función técnica cumple «Nix y builds herméticos»?",
    "options": [
      "Aísla todas las dependencias nativas y del compilador mediante hashes criptográficos exactos al operar.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos al operar.",
      "Establece cotas de compatibilidad semántica según cambios en las firmas públicas exportadas.",
      "Parametriza paquetes mediante firmas abstractas que se instancian al enlazar implementaciones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Nix y builds herméticos (Construcción y distribución): Aísla todas las dependencias nativas y del compilador mediante hashes criptográficos exactos.",
    "topic": "Construcción y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-42",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «Versionado de paquetes» en construcción y distribución?",
    "options": [
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos al operar.",
      "Establece cotas de compatibilidad semántica según cambios en las firmas públicas exportadas.",
      "Aísla todas las dependencias nativas y del compilador mediante hashes criptográficos exactos.",
      "Parametriza paquetes mediante firmas abstractas que se instancian al enlazar implementaciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Versionado de paquetes (Construcción y distribución): Establece cotas de compatibilidad semántica según cambios en las firmas públicas exportadas.",
    "topic": "Construcción y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-43",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Foreign function interface»?",
    "options": [
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar.",
      "Congela un conjunto curado de paquetes compatibles que compilan juntos sin conflictos.",
      "Declara importaciones y exportaciones seguras para invocar rutinas nativas escritas en C.",
      "Compara la salida serializada de una prueba contra un archivo de referencia versionado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Foreign function interface (Interoperabilidad): Declara importaciones y exportaciones seguras para invocar rutinas nativas escritas en C.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-44",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Marshalling»?",
    "options": [
      "Declara importaciones y exportaciones seguras para invocar rutinas nativas escritas en C al operar.",
      "Envuelve clausuras funcionales en punteros de función invocables desde bibliotecas externas.",
      "Fija una referencia en memoria para impedir que el recolector la mueva mientras C la conserva.",
      "Traduce estructuras inmutables gestionadas por el recolector hacia bloques contiguos de bytes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Marshalling (Interoperabilidad): Traduce estructuras inmutables gestionadas por el recolector hacia bloques contiguos de bytes.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-45",
    "collectionId": "haskell",
    "question": "Respecto a interoperabilidad en Haskell, ¿cuál es el propósito de «Stable pointers»?",
    "options": [
      "Fija una referencia en memoria para impedir que el recolector la mueva mientras C la conserva.",
      "Declara importaciones y exportaciones seguras para invocar rutinas nativas escritas en C.",
      "Envuelve clausuras funcionales en punteros de función invocables desde bibliotecas externas.",
      "Traduce estructuras inmutables gestionadas por el recolector hacia bloques contiguos de bytes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Stable pointers (Interoperabilidad): Fija una referencia en memoria para impedir que el recolector la mueva mientras C la conserva.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-46",
    "collectionId": "haskell",
    "question": "En Haskell (Interoperabilidad), ¿qué función técnica cumple «C callbacks»?",
    "options": [
      "Declara importaciones y exportaciones seguras para invocar rutinas nativas escritas en C al operar.",
      "Envuelve clausuras funcionales en punteros de función invocables desde bibliotecas externas.",
      "Traduce estructuras inmutables gestionadas por el recolector hacia bloques contiguos de bytes.",
      "Fija una referencia en memoria para impedir que el recolector la mueva mientras C la conserva."
    ],
    "correctAnswerIndex": 1,
    "explanation": "C callbacks (Interoperabilidad): Envuelve clausuras funcionales en punteros de función invocables desde bibliotecas externas.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-47",
    "collectionId": "haskell",
    "question": "Dentro de Haskell, ¿cómo opera el mecanismo de «WebAssembly backends» en interoperabilidad?",
    "options": [
      "Declara importaciones y exportaciones seguras para invocar rutinas nativas escritas en C al operar.",
      "Envuelve clausuras funcionales en punteros de función invocables desde bibliotecas externas.",
      "Compila módulos funcionales hacia código portátil ejecutable en navegadores y entornos aislados.",
      "Traduce estructuras inmutables gestionadas por el recolector hacia bloques contiguos de bytes."
    ],
    "correctAnswerIndex": 2,
    "explanation": "WebAssembly backends (Interoperabilidad): Compila módulos funcionales hacia código portátil ejecutable en navegadores y entornos aislados.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-48",
    "collectionId": "haskell",
    "question": "Al trabajar con Haskell, ¿qué responsabilidad define a «Heap residency»?",
    "options": [
      "Ajusta banderas del recolector, tamaño de vivero y número de núcleos al iniciar el binario.",
      "Atribuye consumo de tiempo y asignaciones de memoria a expresiones específicas del programa.",
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar.",
      "Mide el volumen real de objetos retenidos tras cada ciclo mayor de recolección de memoria."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Heap residency (Producción observable): Mide el volumen real de objetos retenidos tras cada ciclo mayor de recolección de memoria.",
    "topic": "Producción observable",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-49",
    "collectionId": "haskell",
    "question": "En la arquitectura de Haskell, ¿qué caracteriza técnicamente a «Cost centres»?",
    "options": [
      "Atribuye consumo de tiempo y asignaciones de memoria a expresiones específicas del programa.",
      "Mide el volumen real de objetos retenidos tras cada ciclo mayor de recolección de memoria.",
      "Ajusta banderas del recolector, tamaño de vivero y número de núcleos al iniciar el binario.",
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cost centres (Producción observable): Atribuye consumo de tiempo y asignaciones de memoria a expresiones específicas del programa.",
    "topic": "Producción observable",
    "difficulty": "avanzado"
  },
  {
    "id": "haskell-q-50",
    "collectionId": "haskell",
    "question": "Respecto a producción observable en Haskell, ¿cuál es el propósito de «Runtime system options»?",
    "options": [
      "Mide el volumen real de objetos retenidos tras cada ciclo mayor de recolección de memoria al operar.",
      "Ajusta banderas del recolector, tamaño de vivero y número de núcleos al iniciar el binario.",
      "Atribuye consumo de tiempo y asignaciones de memoria a expresiones específicas del programa.",
      "Transforma patrones algebraicos de alto nivel en equivalentes más veloces al compilar al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Runtime system options (Producción observable): Ajusta banderas del recolector, tamaño de vivero y número de núcleos al iniciar el binario.",
    "topic": "Producción observable",
    "difficulty": "avanzado"
  }
];
