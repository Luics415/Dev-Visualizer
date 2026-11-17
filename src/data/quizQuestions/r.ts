import type { QuizQuestion } from "@/data/quizTypes";

export const rQuestions: QuizQuestion[] = [
  {
    "id": "r-q-01",
    "collectionId": "r",
    "question": "En R (Series temporales), ¿qué función técnica cumple «Índices temporales»?",
    "options": [
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente.",
      "Modela dependencia temporal combinando autorregresión, diferenciación y medias móviles.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo.",
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Índices temporales (Series temporales): Asocia cada observación con una marca cronológica explícita y zona horaria consistente.",
    "topic": "Series temporales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-02",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «Estacionalidad» en series temporales?",
    "options": [
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente al operar.",
      "Descompone fluctuaciones periódicas recurrentes respecto a la tendencia general y el residuo.",
      "Modela dependencia temporal combinando autorregresión, diferenciación y medias móviles al operar.",
      "Identifica observaciones atípicas tras descontar el patrón estacional y la tendencia base."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Estacionalidad (Series temporales): Descompone fluctuaciones periódicas recurrentes respecto a la tendencia general y el residuo.",
    "topic": "Series temporales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-03",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «ARIMA»?",
    "options": [
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo.",
      "Modela dependencia temporal combinando autorregresión, diferenciación y medias móviles.",
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ARIMA (Series temporales): Modela dependencia temporal combinando autorregresión, diferenciación y medias móviles.",
    "topic": "Series temporales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-04",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Forecast validation»?",
    "options": [
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente al operar.",
      "Modela dependencia temporal combinando autorregresión, diferenciación y medias móviles al operar.",
      "Identifica observaciones atípicas tras descontar el patrón estacional y la tendencia base.",
      "Evalúa la precisión predictiva comparando pronósticos fuera de muestra contra valores reales."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Forecast validation (Series temporales): Evalúa la precisión predictiva comparando pronósticos fuera de muestra contra valores reales.",
    "topic": "Series temporales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-05",
    "collectionId": "r",
    "question": "Respecto a series temporales en R, ¿cuál es el propósito de «Anomalías temporales»?",
    "options": [
      "Identifica observaciones atípicas tras descontar el patrón estacional y la tendencia base.",
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente.",
      "Modela dependencia temporal combinando autorregresión, diferenciación y medias móviles.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Anomalías temporales (Series temporales): Identifica observaciones atípicas tras descontar el patrón estacional y la tendencia base.",
    "topic": "Series temporales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-06",
    "collectionId": "r",
    "question": "En R (Series temporales), ¿qué función técnica cumple «Rolling-origin evaluation»?",
    "options": [
      "Identifica observaciones atípicas tras descontar el patrón estacional y la tendencia base al operar.",
      "Desplaza secuencialmente la ventana de entrenamiento para validar pronósticos sin fugas futuras.",
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente al operar.",
      "Descompone fluctuaciones periódicas recurrentes respecto a la tendencia general y el residuo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Rolling-origin evaluation (Series temporales): Desplaza secuencialmente la ventana de entrenamiento para validar pronósticos sin fugas futuras.",
    "topic": "Series temporales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-07",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «Sistemas de coordenadas» en datos espaciales?",
    "options": [
      "Representa puntos, líneas y polígonos junto con sus atributos en una tabla estandarizada al operar.",
      "Construye composiciones cartográficas mediante código declarativo con escalas y leyendas al operar.",
      "Define el datum y la proyección matemática que vinculan posiciones con la superficie terrestre.",
      "Acelera consultas de vecindad e intersección agrupando geometrías en cajas delimitadoras al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Sistemas de coordenadas (Datos espaciales): Define el datum y la proyección matemática que vinculan posiciones con la superficie terrestre.",
    "topic": "Datos espaciales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-08",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Simple features»?",
    "options": [
      "Construye composiciones cartográficas mediante código declarativo con escalas y leyendas.",
      "Acelera consultas de vecindad e intersección agrupando geometrías en cajas delimitadoras.",
      "Corrige autointersecciones, anillos abiertos y polígonos inválidos antes de cruzar capas.",
      "Representa puntos, líneas y polígonos junto con sus atributos en una tabla estandarizada."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Simple features (Datos espaciales): Representa puntos, líneas y polígonos junto con sus atributos en una tabla estandarizada.",
    "topic": "Datos espaciales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-09",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Operaciones geométricas»?",
    "options": [
      "Calcula intersecciones, áreas de influencia, distancias y uniones sobre capas vectoriales.",
      "Representa puntos, líneas y polígonos junto con sus atributos en una tabla estandarizada.",
      "Construye composiciones cartográficas mediante código declarativo con escalas y leyendas.",
      "Acelera consultas de vecindad e intersección agrupando geometrías en cajas delimitadoras."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Operaciones geométricas (Datos espaciales): Calcula intersecciones, áreas de influencia, distancias y uniones sobre capas vectoriales.",
    "topic": "Datos espaciales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-10",
    "collectionId": "r",
    "question": "Respecto a datos espaciales en R, ¿cuál es el propósito de «Rasters»?",
    "options": [
      "Representa puntos, líneas y polígonos junto con sus atributos en una tabla estandarizada al operar.",
      "Organiza variables continuas o satelitales en celdas regulares georreferenciadas por banda.",
      "Construye composiciones cartográficas mediante código declarativo con escalas y leyendas.",
      "Acelera consultas de vecindad e intersección agrupando geometrías en cajas delimitadoras."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Rasters (Datos espaciales): Organiza variables continuas o satelitales en celdas regulares georreferenciadas por banda.",
    "topic": "Datos espaciales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-11",
    "collectionId": "r",
    "question": "En R (Datos espaciales), ¿qué función técnica cumple «Mapas reproducibles»?",
    "options": [
      "Representa puntos, líneas y polígonos junto con sus atributos en una tabla estandarizada.",
      "Acelera consultas de vecindad e intersección agrupando geometrías en cajas delimitadoras.",
      "Construye composiciones cartográficas mediante código declarativo con escalas y leyendas.",
      "Corrige autointersecciones, anillos abiertos y polígonos inválidos antes de cruzar capas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mapas reproducibles (Datos espaciales): Construye composiciones cartográficas mediante código declarativo con escalas y leyendas.",
    "topic": "Datos espaciales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-12",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «Spatial indexing» en datos espaciales?",
    "options": [
      "Representa puntos, líneas y polígonos junto con sus atributos en una tabla estandarizada.",
      "Construye composiciones cartográficas mediante código declarativo con escalas y leyendas.",
      "Corrige autointersecciones, anillos abiertos y polígonos inválidos antes de cruzar capas.",
      "Acelera consultas de vecindad e intersección agrupando geometrías en cajas delimitadoras."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Spatial indexing (Datos espaciales): Acelera consultas de vecindad e intersección agrupando geometrías en cajas delimitadoras.",
    "topic": "Datos espaciales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-13",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Topology repair»?",
    "options": [
      "Corrige autointersecciones, anillos abiertos y polígonos inválidos antes de cruzar capas.",
      "Representa puntos, líneas y polígonos junto con sus atributos en una tabla estandarizada.",
      "Construye composiciones cartográficas mediante código declarativo con escalas y leyendas.",
      "Acelera consultas de vecindad e intersección agrupando geometrías en cajas delimitadoras."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Topology repair (Datos espaciales): Corrige autointersecciones, anillos abiertos y polígonos inválidos antes de cruzar capas.",
    "topic": "Datos espaciales",
    "difficulty": "básico"
  },
  {
    "id": "r-q-14",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Preprocessing recipes»?",
    "options": [
      "Particiona los datos repetidamente en subconjuntos para estimar el error de generalización al operar.",
      "Define una secuencia reproducible de imputación, escalado y codificación ajustada solo al entreno.",
      "Ajusta las puntuaciones de salida para que reflejen probabilidades empíricas bien calibradas al operar.",
      "Separa un bucle interno de ajuste y otro externo de evaluación para evitar sesgo optimista al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Preprocessing recipes (Aprendizaje automático): Define una secuencia reproducible de imputación, escalado y codificación ajustada solo al entreno.",
    "topic": "Aprendizaje automático",
    "difficulty": "básico"
  },
  {
    "id": "r-q-15",
    "collectionId": "r",
    "question": "Respecto a aprendizaje automático en R, ¿cuál es el propósito de «Resampling»?",
    "options": [
      "Separa un bucle interno de ajuste y otro externo de evaluación para evitar sesgo optimista.",
      "Ajusta las puntuaciones de salida para que reflejen probabilidades empíricas bien calibradas.",
      "Particiona los datos repetidamente en subconjuntos para estimar el error de generalización.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Resampling (Aprendizaje automático): Particiona los datos repetidamente en subconjuntos para estimar el error de generalización.",
    "topic": "Aprendizaje automático",
    "difficulty": "básico"
  },
  {
    "id": "r-q-16",
    "collectionId": "r",
    "question": "En R (Aprendizaje automático), ¿qué función técnica cumple «Feature engineering»?",
    "options": [
      "Particiona los datos repetidamente en subconjuntos para estimar el error de generalización al operar.",
      "Separa un bucle interno de ajuste y otro externo de evaluación para evitar sesgo optimista.",
      "Ajusta las puntuaciones de salida para que reflejen probabilidades empíricas bien calibradas.",
      "Construye variables predictoras derivadas que capturan relaciones no lineales e interacciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Feature engineering (Aprendizaje automático): Construye variables predictoras derivadas que capturan relaciones no lineales e interacciones.",
    "topic": "Aprendizaje automático",
    "difficulty": "básico"
  },
  {
    "id": "r-q-17",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «Hyperparameter tuning» en aprendizaje automático?",
    "options": [
      "Explora combinaciones de configuración del modelo evaluándolas sobre particiones de validación.",
      "Particiona los datos repetidamente en subconjuntos para estimar el error de generalización.",
      "Separa un bucle interno de ajuste y otro externo de evaluación para evitar sesgo optimista.",
      "Ajusta las puntuaciones de salida para que reflejen probabilidades empíricas bien calibradas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hyperparameter tuning (Aprendizaje automático): Explora combinaciones de configuración del modelo evaluándolas sobre particiones de validación.",
    "topic": "Aprendizaje automático",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-18",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Calibration»?",
    "options": [
      "Particiona los datos repetidamente en subconjuntos para estimar el error de generalización al operar.",
      "Ajusta las puntuaciones de salida para que reflejen probabilidades empíricas bien calibradas.",
      "Separa un bucle interno de ajuste y otro externo de evaluación para evitar sesgo optimista.",
      "Construye variables predictoras derivadas que capturan relaciones no lineales e interacciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Calibration (Aprendizaje automático): Ajusta las puntuaciones de salida para que reflejen probabilidades empíricas bien calibradas.",
    "topic": "Aprendizaje automático",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-19",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Nested resampling»?",
    "options": [
      "Particiona los datos repetidamente en subconjuntos para estimar el error de generalización.",
      "Ajusta las puntuaciones de salida para que reflejen probabilidades empíricas bien calibradas.",
      "Separa un bucle interno de ajuste y otro externo de evaluación para evitar sesgo optimista.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Nested resampling (Aprendizaje automático): Separa un bucle interno de ajuste y otro externo de evaluación para evitar sesgo optimista.",
    "topic": "Aprendizaje automático",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-20",
    "collectionId": "r",
    "question": "Respecto a simulación e inferencia bayesiana en R, ¿cuál es el propósito de «Random number generators»?",
    "options": [
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al operar.",
      "Aproxima distribuciones complejas generando cadenas de muestras correlacionadas que convergen.",
      "Comprueba mezcla entre cadenas y tamaño efectivo de muestra antes de interpretar estimaciones.",
      "Fija la semilla y el algoritmo pseudoaleatorio para reproducir simulaciones en varios hilos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Random number generators (Simulación e inferencia bayesiana): Fija la semilla y el algoritmo pseudoaleatorio para reproducir simulaciones en varios hilos.",
    "topic": "Simulación e inferencia bayesiana",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-21",
    "collectionId": "r",
    "question": "En R (Simulación e inferencia bayesiana), ¿qué función técnica cumple «Bootstrap»?",
    "options": [
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo.",
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas.",
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente.",
      "Modela dependencia temporal combinando autorregresión, diferenciación y medias móviles."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Bootstrap (Simulación e inferencia bayesiana): Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo.",
    "topic": "Simulación e inferencia bayesiana",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-22",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «Markov chain Monte Carlo» en simulación e inferencia bayesiana?",
    "options": [
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al evaluar.",
      "Aproxima distribuciones complejas generando cadenas de muestras correlacionadas que convergen.",
      "Fija la semilla y el algoritmo pseudoaleatorio para reproducir simulaciones en varios hilos.",
      "Comprueba mezcla entre cadenas y tamaño efectivo de muestra antes de interpretar estimaciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Markov chain Monte Carlo (Simulación e inferencia bayesiana): Aproxima distribuciones complejas generando cadenas de muestras correlacionadas que convergen.",
    "topic": "Simulación e inferencia bayesiana",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-23",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Prior y posterior»?",
    "options": [
      "Fija la semilla y el algoritmo pseudoaleatorio para reproducir simulaciones en varios hilos al operar.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al operar.",
      "Actualiza el conocimiento inicial sobre parámetros al incorporar la verosimilitud de los datos.",
      "Aproxima distribuciones complejas generando cadenas de muestras correlacionadas que convergen."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Prior y posterior (Simulación e inferencia bayesiana): Actualiza el conocimiento inicial sobre parámetros al incorporar la verosimilitud de los datos.",
    "topic": "Simulación e inferencia bayesiana",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-24",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Diagnóstico de convergencia»?",
    "options": [
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al evaluar.",
      "Fija la semilla y el algoritmo pseudoaleatorio para reproducir simulaciones en varios hilos.",
      "Aproxima distribuciones complejas generando cadenas de muestras correlacionadas que convergen.",
      "Comprueba mezcla entre cadenas y tamaño efectivo de muestra antes de interpretar estimaciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Diagnóstico de convergencia (Simulación e inferencia bayesiana): Comprueba mezcla entre cadenas y tamaño efectivo de muestra antes de interpretar estimaciones.",
    "topic": "Simulación e inferencia bayesiana",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-25",
    "collectionId": "r",
    "question": "Respecto a paquetes profesionales en R, ¿cuál es el propósito de «Estructura DESCRIPTION»?",
    "options": [
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo.",
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente.",
      "Modela dependencia temporal combinando autorregresión, diferenciación y medias móviles."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Estructura DESCRIPTION (Paquetes profesionales): Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas.",
    "topic": "Paquetes profesionales",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-26",
    "collectionId": "r",
    "question": "En R (Paquetes profesionales), ¿qué función técnica cumple «Namespaces»?",
    "options": [
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas al operar.",
      "Especifica explícitamente qué funciones se exportan al usuario y cuáles se importan de otros.",
      "Genera archivos de ayuda y directivas de exportación a partir de comentarios estructurados.",
      "Registra formalmente las rutinas nativas en C o C++ para invocarlas con seguridad de tipos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Namespaces (Paquetes profesionales): Especifica explícitamente qué funciones se exportan al usuario y cuáles se importan de otros.",
    "topic": "Paquetes profesionales",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-27",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «roxygen2» en paquetes profesionales?",
    "options": [
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas al operar.",
      "Registra formalmente las rutinas nativas en C o C++ para invocarlas con seguridad de tipos.",
      "Genera archivos de ayuda y directivas de exportación a partir de comentarios estructurados.",
      "Especifica explícitamente qué funciones se exportan al usuario y cuáles se importan de otros."
    ],
    "correctAnswerIndex": 2,
    "explanation": "roxygen2 (Paquetes profesionales): Genera archivos de ayuda y directivas de exportación a partir de comentarios estructurados.",
    "topic": "Paquetes profesionales",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-28",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Vignettes»?",
    "options": [
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas al evaluar.",
      "Genera archivos de ayuda y directivas de exportación a partir de comentarios estructurados.",
      "Registra formalmente las rutinas nativas en C o C++ para invocarlas con seguridad de tipos.",
      "Documenta flujos de trabajo completos en artículos ejecutables que se compilan con el paquete."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Vignettes (Paquetes profesionales): Documenta flujos de trabajo completos en artículos ejecutables que se compilan con el paquete.",
    "topic": "Paquetes profesionales",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-29",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «CRAN checks»?",
    "options": [
      "Verifica portabilidad, ejemplos, documentación y ausencia de advertencias en múltiples sistemas.",
      "Genera archivos de ayuda y directivas de exportación a partir de comentarios estructurados.",
      "Registra formalmente las rutinas nativas en C o C++ para invocarlas con seguridad de tipos.",
      "Especifica explícitamente qué funciones se exportan al usuario y cuáles se importan de otros."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CRAN checks (Paquetes profesionales): Verifica portabilidad, ejemplos, documentación y ausencia de advertencias en múltiples sistemas.",
    "topic": "Paquetes profesionales",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-30",
    "collectionId": "r",
    "question": "Respecto a paquetes profesionales en R, ¿cuál es el propósito de «Compiled code registration»?",
    "options": [
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas al operar.",
      "Registra formalmente las rutinas nativas en C o C++ para invocarlas con seguridad de tipos.",
      "Genera archivos de ayuda y directivas de exportación a partir de comentarios estructurados.",
      "Especifica explícitamente qué funciones se exportan al usuario y cuáles se importan de otros."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Compiled code registration (Paquetes profesionales): Registra formalmente las rutinas nativas en C o C++ para invocarlas con seguridad de tipos.",
    "topic": "Paquetes profesionales",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-31",
    "collectionId": "r",
    "question": "En R (Paquetes profesionales), ¿qué función técnica cumple «Reverse dependency checks»?",
    "options": [
      "Genera archivos de ayuda y directivas de exportación a partir de comentarios estructurados al operar.",
      "Registra formalmente las rutinas nativas en C o C++ para invocarlas con seguridad de tipos al operar.",
      "Ejecuta las pruebas de todos los paquetes dependientes para detectar rupturas antes de publicar.",
      "Especifica explícitamente qué funciones se exportan al usuario y cuáles se importan de otros."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reverse dependency checks (Paquetes profesionales): Ejecuta las pruebas de todos los paquetes dependientes para detectar rupturas antes de publicar.",
    "topic": "Paquetes profesionales",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-32",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «testthat» en pruebas y contratos?",
    "options": [
      "Sustituye llamadas a servicios externos o relojes del sistema por respuestas controladas al operar.",
      "Congela tablas de referencia pequeñas para validar que los algoritmos reproduzcan resultados.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al operar.",
      "Estructura pruebas unitarias expresivas agrupadas por contexto y expectativas verificables."
    ],
    "correctAnswerIndex": 3,
    "explanation": "testthat (Pruebas y contratos): Estructura pruebas unitarias expresivas agrupadas por contexto y expectativas verificables.",
    "topic": "Pruebas y contratos",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-33",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Snapshot tests»?",
    "options": [
      "Detecta cambios no deseados en salidas textuales, errores o gráficos comparándolos con archivos al operar.",
      "Estructura pruebas unitarias expresivas agrupadas por contexto y expectativas verificables.",
      "Sustituye llamadas a servicios externos o relojes del sistema por respuestas controladas al operar.",
      "Congela tablas de referencia pequeñas para validar que los algoritmos reproduzcan resultados."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Snapshot tests (Pruebas y contratos): Detecta cambios no deseados en salidas textuales, errores o gráficos comparándolos con archivos.",
    "topic": "Pruebas y contratos",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-34",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Property-based checks»?",
    "options": [
      "Sustituye llamadas a servicios externos o relojes del sistema por respuestas controladas al operar.",
      "Comprueba que las funciones mantengan invariantes matemáticos ante vectores generados al azar.",
      "Estructura pruebas unitarias expresivas agrupadas por contexto y expectativas verificables.",
      "Congela tablas de referencia pequeñas para validar que los algoritmos reproduzcan resultados."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Property-based checks (Pruebas y contratos): Comprueba que las funciones mantengan invariantes matemáticos ante vectores generados al azar.",
    "topic": "Pruebas y contratos",
    "difficulty": "intermedio"
  },
  {
    "id": "r-q-35",
    "collectionId": "r",
    "question": "Respecto a pruebas y contratos en R, ¿cuál es el propósito de «Mocking»?",
    "options": [
      "Estructura pruebas unitarias expresivas agrupadas por contexto y expectativas verificables.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo.",
      "Sustituye llamadas a servicios externos o relojes del sistema por respuestas controladas.",
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mocking (Pruebas y contratos): Sustituye llamadas a servicios externos o relojes del sistema por respuestas controladas.",
    "topic": "Pruebas y contratos",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-36",
    "collectionId": "r",
    "question": "En R (Pruebas y contratos), ¿qué función técnica cumple «Regression datasets»?",
    "options": [
      "Sustituye llamadas a servicios externos o relojes del sistema por respuestas controladas al operar.",
      "Estructura pruebas unitarias expresivas agrupadas por contexto y expectativas verificables.",
      "Comprueba que las funciones mantengan invariantes matemáticos ante vectores generados al azar.",
      "Congela tablas de referencia pequeñas para validar que los algoritmos reproduzcan resultados."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Regression datasets (Pruebas y contratos): Congela tablas de referencia pequeñas para validar que los algoritmos reproduzcan resultados.",
    "topic": "Pruebas y contratos",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-37",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «Benchmarking» en rendimiento?",
    "options": [
      "Compara tiempos de ejecución y uso de memoria entre implementaciones alternativas con precisión al operar.",
      "Rastrea reservas de vectores y copias internas para localizar cuellos de botella en memoria.",
      "Monitorea cuándo una modificación dispara la duplicación física de un vector en memoria al operar.",
      "Distribuye ajustes de modelos y simulaciones independientes entre procesos o núcleos locales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Benchmarking (Rendimiento): Compara tiempos de ejecución y uso de memoria entre implementaciones alternativas con precisión.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-38",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Memory profiling»?",
    "options": [
      "Monitorea cuándo una modificación dispara la duplicación física de un vector en memoria al operar.",
      "Rastrea reservas de vectores y copias internas para localizar cuellos de botella en memoria.",
      "Distribuye ajustes de modelos y simulaciones independientes entre procesos o núcleos locales.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Memory profiling (Rendimiento): Rastrea reservas de vectores y copias internas para localizar cuellos de botella en memoria.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-39",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Efficient vectorization»?",
    "options": [
      "Rastrea reservas de vectores y copias internas para localizar cuellos de botella en memoria al operar.",
      "Monitorea cuándo una modificación dispara la duplicación física de un vector en memoria al operar.",
      "Reemplaza bucles interpretados por operaciones matriciales y vectoriales ejecutadas en código C.",
      "Distribuye ajustes de modelos y simulaciones independientes entre procesos o núcleos locales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Efficient vectorization (Rendimiento): Reemplaza bucles interpretados por operaciones matriciales y vectoriales ejecutadas en código C.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-40",
    "collectionId": "r",
    "question": "Respecto a rendimiento en R, ¿cuál es el propósito de «Rcpp»?",
    "options": [
      "Rastrea reservas de vectores y copias internas para localizar cuellos de botella en memoria al operar.",
      "Monitorea cuándo una modificación dispara la duplicación física de un vector en memoria al operar.",
      "Distribuye ajustes de modelos y simulaciones independientes entre procesos o núcleos locales.",
      "Integra funciones y clases de C++ de alto rendimiento directamente con objetos nativos de datos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Rcpp (Rendimiento): Integra funciones y clases de C++ de alto rendimiento directamente con objetos nativos de datos.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-41",
    "collectionId": "r",
    "question": "En R (Rendimiento), ¿qué función técnica cumple «Parallel backends»?",
    "options": [
      "Distribuye ajustes de modelos y simulaciones independientes entre procesos o núcleos locales.",
      "Monitorea cuándo una modificación dispara la duplicación física de un vector en memoria.",
      "Rastrea reservas de vectores y copias internas para localizar cuellos de botella en memoria.",
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Parallel backends (Rendimiento): Distribuye ajustes de modelos y simulaciones independientes entre procesos o núcleos locales.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-42",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «Copy detection with tracemem» en rendimiento?",
    "options": [
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo al operar.",
      "Monitorea cuándo una modificación dispara la duplicación física de un vector en memoria.",
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas.",
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Copy detection with tracemem (Rendimiento): Monitorea cuándo una modificación dispara la duplicación física de un vector en memoria.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-43",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Shiny reactivity»?",
    "options": [
      "Expone funciones analíticas y modelos predictivos como servicios web mediante anotaciones.",
      "Orquesta la actualización incremental de artefactos analíticos omitiendo pasos sin cambios.",
      "Recalcula automáticamente salidas visuales e intermedias solo cuando cambian sus entradas.",
      "Empaqueta código, datos y manifiesto de entorno para publicar aplicaciones de forma aislada."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Shiny reactivity (Productos de datos): Recalcula automáticamente salidas visuales e intermedias solo cuando cambian sus entradas.",
    "topic": "Productos de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-44",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Plumber APIs»?",
    "options": [
      "Recalcula automáticamente salidas visuales e intermedias solo cuando cambian sus entradas.",
      "Orquesta la actualización incremental de artefactos analíticos omitiendo pasos sin cambios.",
      "Empaqueta código, datos y manifiesto de entorno para publicar aplicaciones de forma aislada.",
      "Expone funciones analíticas y modelos predictivos como servicios web mediante anotaciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Plumber APIs (Productos de datos): Expone funciones analíticas y modelos predictivos como servicios web mediante anotaciones.",
    "topic": "Productos de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-45",
    "collectionId": "r",
    "question": "Respecto a productos de datos en R, ¿cuál es el propósito de «Parameterized reports»?",
    "options": [
      "Compila documentos dinámicos inyectando variables externas para distintos segmentos o fechas.",
      "Recalcula automáticamente salidas visuales e intermedias solo cuando cambian sus entradas.",
      "Expone funciones analíticas y modelos predictivos como servicios web mediante anotaciones.",
      "Orquesta la actualización incremental de artefactos analíticos omitiendo pasos sin cambios."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Parameterized reports (Productos de datos): Compila documentos dinámicos inyectando variables externas para distintos segmentos o fechas.",
    "topic": "Productos de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-46",
    "collectionId": "r",
    "question": "En R (Productos de datos), ¿qué función técnica cumple «Scheduled pipelines»?",
    "options": [
      "Recalcula automáticamente salidas visuales e intermedias solo cuando cambian sus entradas al operar.",
      "Orquesta la actualización incremental de artefactos analíticos omitiendo pasos sin cambios.",
      "Expone funciones analíticas y modelos predictivos como servicios web mediante anotaciones.",
      "Empaqueta código, datos y manifiesto de entorno para publicar aplicaciones de forma aislada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Scheduled pipelines (Productos de datos): Orquesta la actualización incremental de artefactos analíticos omitiendo pasos sin cambios.",
    "topic": "Productos de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-47",
    "collectionId": "r",
    "question": "Dentro de R, ¿cómo opera el mecanismo de «Deployment bundles» en productos de datos?",
    "options": [
      "Recalcula automáticamente salidas visuales e intermedias solo cuando cambian sus entradas al operar.",
      "Expone funciones analíticas y modelos predictivos como servicios web mediante anotaciones.",
      "Empaqueta código, datos y manifiesto de entorno para publicar aplicaciones de forma aislada.",
      "Orquesta la actualización incremental de artefactos analíticos omitiendo pasos sin cambios."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deployment bundles (Productos de datos): Empaqueta código, datos y manifiesto de entorno para publicar aplicaciones de forma aislada.",
    "topic": "Productos de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-48",
    "collectionId": "r",
    "question": "Al trabajar con R, ¿qué responsabilidad define a «Dependency lockfiles»?",
    "options": [
      "Almacena modelos y tablas procesadas con identificadores inmutables y metadatos de linaje.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo.",
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas.",
      "Registra versiones exactas y repositorios de cada biblioteca para reconstruir el entorno."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dependency lockfiles (Gobierno y producción): Registra versiones exactas y repositorios de cada biblioteca para reconstruir el entorno.",
    "topic": "Gobierno y producción",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-49",
    "collectionId": "r",
    "question": "En la arquitectura de R, ¿qué caracteriza técnicamente a «Secret management»?",
    "options": [
      "Inyecta credenciales desde variables de entorno o bóvedas sin escribirlas en archivos fuente.",
      "Registra versiones exactas y repositorios de cada biblioteca para reconstruir el entorno.",
      "Almacena modelos y tablas procesadas con identificadores inmutables y metadatos de linaje.",
      "Asocia cada observación con una marca cronológica explícita y zona horaria consistente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Secret management (Gobierno y producción): Inyecta credenciales desde variables de entorno o bóvedas sin escribirlas en archivos fuente.",
    "topic": "Gobierno y producción",
    "difficulty": "avanzado"
  },
  {
    "id": "r-q-50",
    "collectionId": "r",
    "question": "Respecto a gobierno y producción en R, ¿cuál es el propósito de «Artifact versioning»?",
    "options": [
      "Registra versiones exactas y repositorios de cada biblioteca para reconstruir el entorno al operar.",
      "Almacena modelos y tablas procesadas con identificadores inmutables y metadatos de linaje.",
      "Estima la distribución muestral e intervalos de confianza remuestreando con reemplazo.",
      "Declara metadatos del paquete, licencias, versiones mínimas y dependencias requeridas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Artifact versioning (Gobierno y producción): Almacena modelos y tablas procesadas con identificadores inmutables y metadatos de linaje.",
    "topic": "Gobierno y producción",
    "difficulty": "avanzado"
  }
];
