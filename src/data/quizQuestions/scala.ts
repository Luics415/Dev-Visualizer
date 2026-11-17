import type { QuizQuestion } from "@/data/quizTypes";

export const scalaQuestions: QuizQuestion[] = [
  {
    "id": "scala-q-01",
    "collectionId": "scala",
    "question": "En Scala (Streams), ¿qué función técnica cumple «Pull y push»?",
    "options": [
      "Combina extracción controlada por demanda del consumidor con notificación reactiva de eventos.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente.",
      "Regula la velocidad de emisión aguas arriba según la capacidad disponible del consumidor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pull y push (Streams): Combina extracción controlada por demanda del consumidor con notificación reactiva de eventos.",
    "topic": "Streams",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-02",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «Backpressure» en streams?",
    "options": [
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos al operar.",
      "Regula la velocidad de emisión aguas arriba según la capacidad disponible del consumidor.",
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Backpressure (Streams): Regula la velocidad de emisión aguas arriba según la capacidad disponible del consumidor.",
    "topic": "Streams",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-03",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «Ventanas de eventos»?",
    "options": [
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente.",
      "Regula la velocidad de emisión aguas arriba según la capacidad disponible del consumidor.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Ventanas de eventos (Streams): Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
    "topic": "Streams",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-04",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «Procesamiento exactly-once»?",
    "options": [
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos al operar.",
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente al operar.",
      "Regula la velocidad de emisión aguas arriba según la capacidad disponible del consumidor.",
      "Coordina lectura, transformación y confirmación transaccional para evitar efectos duplicados."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Procesamiento exactly-once (Streams): Coordina lectura, transformación y confirmación transaccional para evitar efectos duplicados.",
    "topic": "Streams",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-05",
    "collectionId": "scala",
    "question": "Respecto a streams en Scala, ¿cuál es el propósito de «Demand signaling»?",
    "options": [
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
      "Regula la velocidad de emisión aguas arriba según la capacidad disponible del consumidor.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Demand signaling (Streams): Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente.",
    "topic": "Streams",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-06",
    "collectionId": "scala",
    "question": "En Scala (Concurrencia distribuida), ¿qué función técnica cumple «Actor model»?",
    "options": [
      "Garantiza orden por emisor y diseña manejadores idempotentes ante reintentos de entrega al operar.",
      "Encapsula estado mutable dentro de entidades aisladas que solo se comunican mediante mensajes.",
      "Decide de forma determinista qué subconjunto de nodos continúa activo tras una partición al operar.",
      "Define políticas jerárquicas para reiniciar, detener o escalar actores hijos cuando fallan."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Actor model (Concurrencia distribuida): Encapsula estado mutable dentro de entidades aisladas que solo se comunican mediante mensajes.",
    "topic": "Concurrencia distribuida",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-07",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «Supervisión» en concurrencia distribuida?",
    "options": [
      "Garantiza orden por emisor y diseña manejadores idempotentes ante reintentos de entrega al operar.",
      "Decide de forma determinista qué subconjunto de nodos continúa activo tras una partición.",
      "Define políticas jerárquicas para reiniciar, detener o escalar actores hijos cuando fallan.",
      "Distribuye actores con identidad única entre nodos del clúster y los reubica automáticamente."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Supervisión (Concurrencia distribuida): Define políticas jerárquicas para reiniciar, detener o escalar actores hijos cuando fallan.",
    "topic": "Concurrencia distribuida",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-08",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «Cluster sharding»?",
    "options": [
      "Garantiza orden por emisor y diseña manejadores idempotentes ante reintentos de entrega al operar.",
      "Decide de forma determinista qué subconjunto de nodos continúa activo tras una partición.",
      "Define políticas jerárquicas para reiniciar, detener o escalar actores hijos cuando fallan.",
      "Distribuye actores con identidad única entre nodos del clúster y los reubica automáticamente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Cluster sharding (Concurrencia distribuida): Distribuye actores con identidad única entre nodos del clúster y los reubica automáticamente.",
    "topic": "Concurrencia distribuida",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-09",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «Event sourcing»?",
    "options": [
      "Persiste cada cambio como un evento inmutable y reconstruye el estado al recuperar la entidad.",
      "Garantiza orden por emisor y diseña manejadores idempotentes ante reintentos de entrega.",
      "Decide de forma determinista qué subconjunto de nodos continúa activo tras una partición.",
      "Define políticas jerárquicas para reiniciar, detener o escalar actores hijos cuando fallan."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Event sourcing (Concurrencia distribuida): Persiste cada cambio como un evento inmutable y reconstruye el estado al recuperar la entidad.",
    "topic": "Concurrencia distribuida",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-10",
    "collectionId": "scala",
    "question": "Respecto a concurrencia distribuida en Scala, ¿cuál es el propósito de «Consistencia de mensajes»?",
    "options": [
      "Decide de forma determinista qué subconjunto de nodos continúa activo tras una partición.",
      "Garantiza orden por emisor y diseña manejadores idempotentes ante reintentos de entrega.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Consistencia de mensajes (Concurrencia distribuida): Garantiza orden por emisor y diseña manejadores idempotentes ante reintentos de entrega.",
    "topic": "Concurrencia distribuida",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-11",
    "collectionId": "scala",
    "question": "En Scala (Concurrencia distribuida), ¿qué función técnica cumple «Cluster split-brain resolution»?",
    "options": [
      "Garantiza orden por emisor y diseña manejadores idempotentes ante reintentos de entrega al operar.",
      "Define políticas jerárquicas para reiniciar, detener o escalar actores hijos cuando fallan.",
      "Decide de forma determinista qué subconjunto de nodos continúa activo tras una partición.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cluster split-brain resolution (Concurrencia distribuida): Decide de forma determinista qué subconjunto de nodos continúa activo tras una partición.",
    "topic": "Concurrencia distribuida",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-12",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «Serializer schema evolution» en concurrencia distribuida?",
    "options": [
      "Garantiza orden por emisor y diseña manejadores idempotentes ante reintentos de entrega al operar.",
      "Decide de forma determinista qué subconjunto de nodos continúa activo tras una partición al operar.",
      "Define políticas jerárquicas para reiniciar, detener o escalar actores hijos cuando fallan.",
      "Mantiene compatibilidad hacia adelante y atrás en mensajes persistidos o enviados entre nodos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Serializer schema evolution (Concurrencia distribuida): Mantiene compatibilidad hacia adelante y atrás en mensajes persistidos o enviados entre nodos.",
    "topic": "Concurrencia distribuida",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-13",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «MUnit»?",
    "options": [
      "Ejecuta pruebas ligeras con diagnósticos claros de diferencias e integración con efectos.",
      "Controla el avance temporal y el orden de fibras para eliminar intermitencias en pruebas.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "MUnit (Testing): Ejecuta pruebas ligeras con diagnósticos claros de diferencias e integración con efectos.",
    "topic": "Testing",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-14",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «ScalaTest»?",
    "options": [
      "Ejecuta pruebas ligeras con diagnósticos claros de diferencias e integración con efectos al operar.",
      "Ofrece múltiples estilos expresivos para estructurar especificaciones y pruebas de integración.",
      "Controla el avance temporal y el orden de fibras para eliminar intermitencias en pruebas al operar.",
      "Gestiona bases de datos y corredores de mensajes reales en contenedores durante las pruebas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "ScalaTest (Testing): Ofrece múltiples estilos expresivos para estructurar especificaciones y pruebas de integración.",
    "topic": "Testing",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-15",
    "collectionId": "scala",
    "question": "Respecto a testing en Scala, ¿cuál es el propósito de «ScalaCheck»?",
    "options": [
      "Ejecuta pruebas ligeras con diagnósticos claros de diferencias e integración con efectos al operar.",
      "Controla el avance temporal y el orden de fibras para eliminar intermitencias en pruebas al operar.",
      "Genera datos aleatorios tipados y reduce casos fallidos para verificar propiedades universales.",
      "Gestiona bases de datos y corredores de mensajes reales en contenedores durante las pruebas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ScalaCheck (Testing): Genera datos aleatorios tipados y reduce casos fallidos para verificar propiedades universales.",
    "topic": "Testing",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-16",
    "collectionId": "scala",
    "question": "En Scala (Testing), ¿qué función técnica cumple «Testcontainers»?",
    "options": [
      "Ejecuta pruebas ligeras con diagnósticos claros de diferencias e integración con efectos al operar.",
      "Controla el avance temporal y el orden de fibras para eliminar intermitencias en pruebas.",
      "Ejecuta efectos asíncronos con relojes y planificadores simulados sin bloquear hilos reales.",
      "Gestiona bases de datos y corredores de mensajes reales en contenedores durante las pruebas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Testcontainers (Testing): Gestiona bases de datos y corredores de mensajes reales en contenedores durante las pruebas.",
    "topic": "Testing",
    "difficulty": "básico"
  },
  {
    "id": "scala-q-17",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «Pruebas de leyes algebraicas» en testing?",
    "options": [
      "Verifica automáticamente que las instancias de clases de tipos cumplan asociatividad e identidad al operar.",
      "Gestiona bases de datos y corredores de mensajes reales en contenedores durante las pruebas.",
      "Ejecuta efectos asíncronos con relojes y planificadores simulados sin bloquear hilos reales.",
      "Ejecuta pruebas ligeras con diagnósticos claros de diferencias e integración con efectos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pruebas de leyes algebraicas (Testing): Verifica automáticamente que las instancias de clases de tipos cumplan asociatividad e identidad.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-18",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «Effectful test control»?",
    "options": [
      "Ejecuta pruebas ligeras con diagnósticos claros de diferencias e integración con efectos al operar.",
      "Ejecuta efectos asíncronos con relojes y planificadores simulados sin bloquear hilos reales.",
      "Controla el avance temporal y el orden de fibras para eliminar intermitencias en pruebas.",
      "Gestiona bases de datos y corredores de mensajes reales en contenedores durante las pruebas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Effectful test control (Testing): Ejecuta efectos asíncronos con relojes y planificadores simulados sin bloquear hilos reales.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-19",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «Deterministic asynchronous tests»?",
    "options": [
      "Ejecuta pruebas ligeras con diagnósticos claros de diferencias e integración con efectos.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos.",
      "Controla el avance temporal y el orden de fibras para eliminar intermitencias en pruebas.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deterministic asynchronous tests (Testing): Controla el avance temporal y el orden de fibras para eliminar intermitencias en pruebas.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-20",
    "collectionId": "scala",
    "question": "Respecto a build y dependencias en Scala, ¿cuál es el propósito de «sbt task graph»?",
    "options": [
      "Configura los repositorios remotos y cachés locales desde donde se descargan artefactos al operar.",
      "Fija versiones de compilador, complementos y metadatos para obtener artefactos idénticos.",
      "Rastrea dependencias entre firmas de clases para recompilar solo el subconjunto afectado.",
      "Modela pasos de construcción como un grafo acíclico de tareas que se evalúan en paralelo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "sbt task graph (Build y dependencias): Modela pasos de construcción como un grafo acíclico de tareas que se evalúan en paralelo.",
    "topic": "Build y dependencias",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-21",
    "collectionId": "scala",
    "question": "En Scala (Build y dependencias), ¿qué función técnica cumple «Cross-building»?",
    "options": [
      "Compila y publica un mismo código fuente contra múltiples versiones del lenguaje o plataformas.",
      "Modela pasos de construcción como un grafo acíclico de tareas que se evalúan en paralelo.",
      "Fija versiones de compilador, complementos y metadatos para obtener artefactos idénticos.",
      "Rastrea dependencias entre firmas de clases para recompilar solo el subconjunto afectado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cross-building (Build y dependencias): Compila y publica un mismo código fuente contra múltiples versiones del lenguaje o plataformas.",
    "topic": "Build y dependencias",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-22",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «Resolvers» en build y dependencias?",
    "options": [
      "Modela pasos de construcción como un grafo acíclico de tareas que se evalúan en paralelo.",
      "Configura los repositorios remotos y cachés locales desde donde se descargan artefactos.",
      "Fija versiones de compilador, complementos y metadatos para obtener artefactos idénticos.",
      "Rastrea dependencias entre firmas de clases para recompilar solo el subconjunto afectado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Resolvers (Build y dependencias): Configura los repositorios remotos y cachés locales desde donde se descargan artefactos.",
    "topic": "Build y dependencias",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-23",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «Dependency eviction»?",
    "options": [
      "Configura los repositorios remotos y cachés locales desde donde se descargan artefactos al operar.",
      "Modela pasos de construcción como un grafo acíclico de tareas que se evalúan en paralelo al operar.",
      "Resuelve conflictos de versiones transitivas advirtiendo posibles incompatibilidades binarias.",
      "Fija versiones de compilador, complementos y metadatos para obtener artefactos idénticos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dependency eviction (Build y dependencias): Resuelve conflictos de versiones transitivas advirtiendo posibles incompatibilidades binarias.",
    "topic": "Build y dependencias",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-24",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «Build reproducible»?",
    "options": [
      "Configura los repositorios remotos y cachés locales desde donde se descargan artefactos al operar.",
      "Modela pasos de construcción como un grafo acíclico de tareas que se evalúan en paralelo.",
      "Rastrea dependencias entre firmas de clases para recompilar solo el subconjunto afectado.",
      "Fija versiones de compilador, complementos y metadatos para obtener artefactos idénticos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Build reproducible (Build y dependencias): Fija versiones de compilador, complementos y metadatos para obtener artefactos idénticos.",
    "topic": "Build y dependencias",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-25",
    "collectionId": "scala",
    "question": "Respecto a build y dependencias en Scala, ¿cuál es el propósito de «Zinc incremental compilation»?",
    "options": [
      "Rastrea dependencias entre firmas de clases para recompilar solo el subconjunto afectado.",
      "Configura los repositorios remotos y cachés locales desde donde se descargan artefactos.",
      "Modela pasos de construcción como un grafo acíclico de tareas que se evalúan en paralelo.",
      "Fija versiones de compilador, complementos y metadatos para obtener artefactos idénticos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Zinc incremental compilation (Build y dependencias): Rastrea dependencias entre firmas de clases para recompilar solo el subconjunto afectado.",
    "topic": "Build y dependencias",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-26",
    "collectionId": "scala",
    "question": "En Scala (Build y dependencias), ¿qué función técnica cumple «Dependency eviction analysis»?",
    "options": [
      "Modela pasos de construcción como un grafo acíclico de tareas que se evalúan en paralelo al evaluar.",
      "Inspecciona el árbol resuelto para detectar reemplazos mayores que rompen compatibilidad binaria.",
      "Fija versiones de compilador, complementos y metadatos para obtener artefactos idénticos al operar.",
      "Rastrea dependencias entre firmas de clases para recompilar solo el subconjunto afectado al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dependency eviction analysis (Build y dependencias): Inspecciona el árbol resuelto para detectar reemplazos mayores que rompen compatibilidad binaria.",
    "topic": "Build y dependencias",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-27",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «JIT warmup» en rendimiento jvm?",
    "options": [
      "Captura muestras de reservas en el heap con sobrecarga mínima en entornos de producción al operar.",
      "Compila la aplicación por adelantado hacia un ejecutable nativo con arranque instantáneo al operar.",
      "Ejercita las rutas críticas del servicio antes de recibir tráfico para activar optimizaciones.",
      "Diseña fases de precalentamiento medibles que estabilizan latencias antes de abrir tráfico."
    ],
    "correctAnswerIndex": 2,
    "explanation": "JIT warmup (Rendimiento JVM): Ejercita las rutas críticas del servicio antes de recibir tráfico para activar optimizaciones.",
    "topic": "Rendimiento JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-28",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «Boxing especializado»?",
    "options": [
      "Ejercita las rutas críticas del servicio antes de recibir tráfico para activar optimizaciones al operar.",
      "Evalúa microbenchmarks aislando la eliminación de código muerto y el calentamiento de la JVM al operar.",
      "Identifica lambdas, tuplas y colecciones efímeras que incrementan la presión del recolector al operar.",
      "Evita envolver tipos numéricos primitivos en objetos cuando se usan dentro de estructuras genéricas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Boxing especializado (Rendimiento JVM): Evita envolver tipos numéricos primitivos en objetos cuando se usan dentro de estructuras genéricas.",
    "topic": "Rendimiento JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-29",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «Allocation profiling»?",
    "options": [
      "Identifica lambdas, tuplas y colecciones efímeras que incrementan la presión del recolector.",
      "Captura muestras de reservas en el heap con sobrecarga mínima en entornos de producción.",
      "Compila la aplicación por adelantado hacia un ejecutable nativo con arranque instantáneo.",
      "Diseña fases de precalentamiento medibles que estabilizan latencias antes de abrir tráfico."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Allocation profiling (Rendimiento JVM): Identifica lambdas, tuplas y colecciones efímeras que incrementan la presión del recolector.",
    "topic": "Rendimiento JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-30",
    "collectionId": "scala",
    "question": "Respecto a rendimiento jvm en Scala, ¿cuál es el propósito de «JMH benchmarks»?",
    "options": [
      "Captura muestras de reservas en el heap con sobrecarga mínima en entornos de producción al operar.",
      "Evalúa microbenchmarks aislando la eliminación de código muerto y el calentamiento de la JVM.",
      "Compila la aplicación por adelantado hacia un ejecutable nativo con arranque instantáneo.",
      "Diseña fases de precalentamiento medibles que estabilizan latencias antes de abrir tráfico."
    ],
    "correctAnswerIndex": 1,
    "explanation": "JMH benchmarks (Rendimiento JVM): Evalúa microbenchmarks aislando la eliminación de código muerto y el calentamiento de la JVM.",
    "topic": "Rendimiento JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-31",
    "collectionId": "scala",
    "question": "En Scala (Rendimiento JVM), ¿qué función técnica cumple «GraalVM native image»?",
    "options": [
      "Captura muestras de reservas en el heap con sobrecarga mínima en entornos de producción al operar.",
      "Diseña fases de precalentamiento medibles que estabilizan latencias antes de abrir tráfico.",
      "Compila la aplicación por adelantado hacia un ejecutable nativo con arranque instantáneo.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "GraalVM native image (Rendimiento JVM): Compila la aplicación por adelantado hacia un ejecutable nativo con arranque instantáneo.",
    "topic": "Rendimiento JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-32",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «Allocation sampling profiles» en rendimiento jvm?",
    "options": [
      "Compila la aplicación por adelantado hacia un ejecutable nativo con arranque instantáneo.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
      "Captura muestras de reservas en el heap con sobrecarga mínima en entornos de producción."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Allocation sampling profiles (Rendimiento JVM): Captura muestras de reservas en el heap con sobrecarga mínima en entornos de producción.",
    "topic": "Rendimiento JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-33",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «JIT warmup methodology»?",
    "options": [
      "Diseña fases de precalentamiento medibles que estabilizan latencias antes de abrir tráfico.",
      "Captura muestras de reservas en el heap con sobrecarga mínima en entornos de producción.",
      "Compila la aplicación por adelantado hacia un ejecutable nativo con arranque instantáneo.",
      "Identifica lambdas, tuplas y colecciones efímeras que incrementan la presión del recolector."
    ],
    "correctAnswerIndex": 0,
    "explanation": "JIT warmup methodology (Rendimiento JVM): Diseña fases de precalentamiento medibles que estabilizan latencias antes de abrir tráfico.",
    "topic": "Rendimiento JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-34",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «SAM conversion»?",
    "options": [
      "Provee adaptadores ligeros para transformar colecciones mutables de Java hacia inmutables al operar.",
      "Adapta funciones literales hacia interfaces funcionales de Java con un único método abstracto.",
      "Envuelve referencias potencialmente nulas provenientes de bibliotecas externas en tipos seguros.",
      "Define si un adaptador envuelve la colección subyacente o realiza una copia defensiva inmutable."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SAM conversion (Interoperabilidad robusta): Adapta funciones literales hacia interfaces funcionales de Java con un único método abstracto.",
    "topic": "Interoperabilidad robusta",
    "difficulty": "intermedio"
  },
  {
    "id": "scala-q-35",
    "collectionId": "scala",
    "question": "Respecto a interoperabilidad robusta en Scala, ¿cuál es el propósito de «Nullability de Java»?",
    "options": [
      "Provee adaptadores ligeros para transformar colecciones mutables de Java hacia inmutables al operar.",
      "Adapta funciones literales hacia interfaces funcionales de Java con un único método abstracto.",
      "Envuelve referencias potencialmente nulas provenientes de bibliotecas externas en tipos seguros.",
      "Define si un adaptador envuelve la colección subyacente o realiza una copia defensiva inmutable."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Nullability de Java (Interoperabilidad robusta): Envuelve referencias potencialmente nulas provenientes de bibliotecas externas en tipos seguros.",
    "topic": "Interoperabilidad robusta",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-36",
    "collectionId": "scala",
    "question": "En Scala (Interoperabilidad robusta), ¿qué función técnica cumple «Checked exceptions»?",
    "options": [
      "Adapta funciones literales hacia interfaces funcionales de Java con un único método abstracto al operar.",
      "Envuelve referencias potencialmente nulas provenientes de bibliotecas externas en tipos seguros.",
      "Define si un adaptador envuelve la colección subyacente o realiza una copia defensiva inmutable.",
      "Trata todas las errores capturables sin verificación obligatoria en firma y las modela como valores."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Checked exceptions (Interoperabilidad robusta): Trata todas las excepciones sin verificación obligatoria en firma y las modela como valores.",
    "topic": "Interoperabilidad robusta",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-37",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «Converters de colecciones» en interoperabilidad robusta?",
    "options": [
      "Provee adaptadores ligeros para transformar colecciones mutables de Java hacia inmutables.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Converters de colecciones (Interoperabilidad robusta): Provee adaptadores ligeros para transformar colecciones mutables de Java hacia inmutables.",
    "topic": "Interoperabilidad robusta",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-38",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «Publicación para consumidores Java»?",
    "options": [
      "Provee adaptadores ligeros para transformar colecciones mutables de Java hacia inmutables al operar.",
      "Diseña firmas públicas sin parámetros implícitos ni nombres codificados para llamadores externos.",
      "Adapta funciones literales hacia interfaces funcionales de Java con un único método abstracto.",
      "Envuelve referencias potencialmente nulas provenientes de bibliotecas externas en tipos seguros."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Publicación para consumidores Java (Interoperabilidad robusta): Diseña firmas públicas sin parámetros implícitos ni nombres codificados para llamadores externos.",
    "topic": "Interoperabilidad robusta",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-39",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «Checked exception modeling»?",
    "options": [
      "Adapta funciones literales hacia interfaces funcionales de Java con un único método abstracto al operar.",
      "Envuelve referencias potencialmente nulas provenientes de bibliotecas externas en tipos seguros al operar.",
      "Captura errores capturables de bibliotecas externas en la frontera y las convierte al canal de error.",
      "Define si un adaptador envuelve la colección subyacente o realiza una copia defensiva inmutable al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Checked exception modeling (Interoperabilidad robusta): Captura excepciones de bibliotecas externas en la frontera y las convierte al canal de error.",
    "topic": "Interoperabilidad robusta",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-40",
    "collectionId": "scala",
    "question": "Respecto a interoperabilidad robusta en Scala, ¿cuál es el propósito de «Collection conversion ownership»?",
    "options": [
      "Provee adaptadores ligeros para transformar colecciones mutables de Java hacia inmutables al operar.",
      "Adapta funciones literales hacia interfaces funcionales de Java con un único método abstracto.",
      "Envuelve referencias potencialmente nulas provenientes de bibliotecas externas en tipos seguros.",
      "Define si un adaptador envuelve la colección subyacente o realiza una copia defensiva inmutable."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Collection conversion ownership (Interoperabilidad robusta): Define si un adaptador envuelve la colección subyacente o realiza una copia defensiva inmutable.",
    "topic": "Interoperabilidad robusta",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-41",
    "collectionId": "scala",
    "question": "En Scala (Seguridad y servicios), ¿qué función técnica cumple «Validación de configuración»?",
    "options": [
      "Decodifica archivos de configuración al inicio acumulando todos los errores de esquema juntos.",
      "Exige pruebas de permiso en los tipos de entrada antes de invocar operaciones sensibles.",
      "Comparte y recarga contextos criptográficos sin recrear motores por cada petición saliente.",
      "Configura contextos criptográficos, almacenes de confianza y verificación de nombres de host."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Validación de configuración (Seguridad y servicios): Decodifica archivos de configuración al inicio acumulando todos los errores de esquema juntos.",
    "topic": "Seguridad y servicios",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-42",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «TLS en clientes HTTP» en seguridad y servicios?",
    "options": [
      "Exige pruebas de permiso en los tipos de entrada antes de invocar operaciones sensibles al operar.",
      "Configura contextos criptográficos, almacenes de confianza y verificación de nombres de host.",
      "Comparte y recarga contextos criptográficos sin recrear motores por cada petición saliente.",
      "Decodifica archivos de configuración al inicio acumulando todos los errores de esquema juntos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "TLS en clientes HTTP (Seguridad y servicios): Configura contextos criptográficos, almacenes de confianza y verificación de nombres de host.",
    "topic": "Seguridad y servicios",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-43",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «Deserialización segura»?",
    "options": [
      "Configura contextos criptográficos, almacenes de confianza y verificación de nombres de host al operar.",
      "Comparte y recarga contextos criptográficos sin recrear motores por cada petición saliente al operar.",
      "Usa decodificadores derivados estáticamente en lugar de reconstrucción de datos binaria reflexiva.",
      "Decodifica archivos de configuración al inicio acumulando todos los errores de esquema juntos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deserialización segura (Seguridad y servicios): Usa decodificadores derivados estáticamente en lugar de deserialización binaria reflexiva.",
    "topic": "Seguridad y servicios",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-44",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «Secret management»?",
    "options": [
      "Exige pruebas de permiso en los tipos de entrada antes de invocar operaciones sensibles al operar.",
      "Comparte y recarga contextos criptográficos sin recrear motores por cada petición saliente.",
      "Configura contextos criptográficos, almacenes de confianza y verificación de nombres de host.",
      "Envuelve credenciales en tipos opacos que ocultan su contenido al imprimir bitácoras o trazas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Secret management (Seguridad y servicios): Envuelve credenciales en tipos opacos que ocultan su contenido al imprimir bitácoras o trazas.",
    "topic": "Seguridad y servicios",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-45",
    "collectionId": "scala",
    "question": "Respecto a seguridad y servicios en Scala, ¿cuál es el propósito de «Autorización por capacidades»?",
    "options": [
      "Exige pruebas de permiso en los tipos de entrada antes de invocar operaciones sensibles.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Autorización por capacidades (Seguridad y servicios): Exige pruebas de permiso en los tipos de entrada antes de invocar operaciones sensibles.",
    "topic": "Seguridad y servicios",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-46",
    "collectionId": "scala",
    "question": "En Scala (Seguridad y servicios), ¿qué función técnica cumple «Parser size limits»?",
    "options": [
      "Exige pruebas de permiso en los tipos de entrada antes de invocar operaciones sensibles al operar.",
      "Acota la profundidad de anidamiento y el tamaño máximo de carga antes de decodificar mensajes.",
      "Comparte y recarga contextos criptográficos sin recrear motores por cada petición saliente.",
      "Configura contextos criptográficos, almacenes de confianza y verificación de nombres de host."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Parser size limits (Seguridad y servicios): Acota la profundidad de anidamiento y el tamaño máximo de carga antes de decodificar mensajes.",
    "topic": "Seguridad y servicios",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-47",
    "collectionId": "scala",
    "question": "Dentro de Scala, ¿cómo opera el mecanismo de «TLS context lifecycle» en seguridad y servicios?",
    "options": [
      "Exige pruebas de permiso en los tipos de entrada antes de invocar operaciones sensibles al operar.",
      "Configura contextos criptográficos, almacenes de confianza y verificación de nombres de host.",
      "Comparte y recarga contextos criptográficos sin recrear motores por cada petición saliente.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "TLS context lifecycle (Seguridad y servicios): Comparte y recarga contextos criptográficos sin recrear motores por cada petición saliente.",
    "topic": "Seguridad y servicios",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-48",
    "collectionId": "scala",
    "question": "Al trabajar con Scala, ¿qué responsabilidad define a «Structured logging»?",
    "options": [
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos al operar.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente.",
      "Emite eventos en formato estructurado propagando el contexto de traza a través de fibras."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Structured logging (Operación en producción): Emite eventos en formato estructurado propagando el contexto de traza a través de fibras.",
    "topic": "Operación en producción",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-49",
    "collectionId": "scala",
    "question": "En la arquitectura de Scala, ¿qué caracteriza técnicamente a «Métricas JVM»?",
    "options": [
      "Exporta indicadores de memoria, pausas de recolección, hilos y colas hacia sistemas de monitoreo al operar.",
      "Emite eventos en formato estructurado propagando el contexto de traza a través de fibras al operar.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos al operar.",
      "Define políticas jerárquicas para reiniciar, detener o escalar actores hijos cuando fallan."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Métricas JVM (Operación en producción): Exporta indicadores de memoria, pausas de recolección, hilos y colas hacia sistemas de monitoreo.",
    "topic": "Operación en producción",
    "difficulty": "avanzado"
  },
  {
    "id": "scala-q-50",
    "collectionId": "scala",
    "question": "Respecto a operación en producción en Scala, ¿cuál es el propósito de «Distributed tracing»?",
    "options": [
      "Emite eventos en formato estructurado propagando el contexto de traza a través de fibras.",
      "Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos.",
      "Agrupa elementos de un flujo continuo por intervalos de tiempo o conteo para agregarlos.",
      "Transmite explícitamente cuántos elementos adicionales puede recibir la etapa siguiente."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Distributed tracing (Operación en producción): Propaga identificadores de correlación entre llamadas asíncronas y servicios remotos.",
    "topic": "Operación en producción",
    "difficulty": "avanzado"
  }
];
