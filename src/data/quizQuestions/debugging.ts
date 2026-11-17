import type { QuizQuestion } from "@/data/quizTypes";

export const debuggingQuestions: QuizQuestion[] = [
  {
    "id": "debugging-q-01",
    "collectionId": "debugging",
    "question": "En Debugging (Mentalidad y formulación del problema), ¿qué función técnica cumple «Qué es debugging»?",
    "options": [
      "Proceso sistemático de explicar una diferencia entre comportamiento esperado y observado y eliminar su causa al operar.",
      "El error visible suele ser una consecuencia; corregir solo el síntoma puede ocultar el mecanismo real al operar.",
      "Confirmación, disponibilidad y anclaje pueden hacer que se busque evidencia solo para la primera teoría.",
      "Define cuándo escalar, revertir, pausar tráfico o preservar evidencia para evitar empeorar el incidente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Qué es debugging (Mentalidad y formulación del problema): Proceso sistemático de explicar una diferencia entre comportamiento esperado y observado y eliminar su causa.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-02",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Síntoma frente a causa raíz» en mentalidad y formulación del problema?",
    "options": [
      "Una acción sin evidencia puede destruir el estado necesario para reproducir o medir el problema al operar.",
      "El error visible suele ser una consecuencia; corregir solo el síntoma puede ocultar el mecanismo real.",
      "Incluye corrección, prueba de regresión, observabilidad y explicación de por qué no reaparecerá al operar.",
      "Identifica usuarios, datos, regiones, versiones y dependencias afectadas antes de experimentar al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Síntoma frente a causa raíz (Mentalidad y formulación del problema): El error visible suele ser una consecuencia; corregir solo el síntoma puede ocultar el mecanismo real.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-03",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Comportamiento esperado»?",
    "options": [
      "Propone una causa que puede confirmarse o descartarse mediante una prueba concreta al operar.",
      "Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz al operar.",
      "Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar.",
      "Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Comportamiento esperado (Mentalidad y formulación del problema): Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-04",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Comportamiento observado»?",
    "options": [
      "Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz al operar.",
      "Propone una causa que puede confirmarse o descartarse mediante una prueba concreta.",
      "Cambiar un factor por experimento permite atribuir el resultado a una causa al evaluar.",
      "Registra exactamente qué ocurrió, dónde, cuándo y con qué evidencia de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Comportamiento observado (Mentalidad y formulación del problema): Registra exactamente qué ocurrió, dónde, cuándo y con qué evidencia.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-05",
    "collectionId": "debugging",
    "question": "Respecto a mentalidad y formulación del problema en Debugging, ¿cuál es el propósito de «Hipótesis falsable»?",
    "options": [
      "Propone una causa que puede confirmarse o descartarse mediante una prueba concreta al operar.",
      "Cambiar un factor por experimento permite atribuir el resultado a una causa al operar.",
      "Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz.",
      "Registra exactamente qué ocurrió, dónde, cuándo y con qué evidencia en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hipótesis falsable (Mentalidad y formulación del problema): Propone una causa que puede confirmarse o descartarse mediante una prueba concreta.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-06",
    "collectionId": "debugging",
    "question": "En Debugging (Mentalidad y formulación del problema), ¿qué función técnica cumple «Método científico»?",
    "options": [
      "Propone una causa que puede confirmarse o descartarse mediante una prueba concreta al evaluar.",
      "Observar, formular, experimentar, medir y actualizar la explicación reduce cambios al azar.",
      "Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia.",
      "Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Método científico (Mentalidad y formulación del problema): Observar, formular, experimentar, medir y actualizar la explicación reduce cambios al azar.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-07",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Una variable a la vez» en mentalidad y formulación del problema?",
    "options": [
      "Propone una causa que puede confirmarse o descartarse mediante una prueba concreta al operar.",
      "Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz al operar.",
      "Cambiar un factor por experimento permite atribuir el resultado a una causa en el flujo.",
      "Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Una variable a la vez (Mentalidad y formulación del problema): Cambiar un factor por experimento permite atribuir el resultado a una causa.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-08",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Sesgos cognitivos»?",
    "options": [
      "Una acción sin evidencia puede destruir el estado necesario para reproducir o medir el problema al evaluar.",
      "Incluye corrección, prueba de regresión, observabilidad y explicación de por qué no reaparecerá al operar.",
      "Identifica usuarios, datos, regiones, versiones y dependencias afectadas antes de experimentar al operar.",
      "Confirmación, disponibilidad y anclaje pueden hacer que se busque evidencia solo para la primera teoría."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sesgos cognitivos (Mentalidad y formulación del problema): Confirmación, disponibilidad y anclaje pueden hacer que se busque evidencia solo para la primera teoría.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-09",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Rubber duck debugging»?",
    "options": [
      "Explicar línea por línea fuerza a revelar supuestos, estados omitidos y contradicciones al operar.",
      "Propone una causa que puede confirmarse o descartarse mediante una prueba concreta.",
      "Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz al operar.",
      "Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Rubber duck debugging (Mentalidad y formulación del problema): Explicar línea por línea fuerza a revelar supuestos, estados omitidos y contradicciones.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-10",
    "collectionId": "debugging",
    "question": "Respecto a mentalidad y formulación del problema en Debugging, ¿cuál es el propósito de «Leer el error completo»?",
    "options": [
      "Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia al operar.",
      "Mensaje, tipo, código, causa, stack y contexto contienen más información que la última línea.",
      "Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar al operar.",
      "Explicar línea por línea fuerza a revelar supuestos, estados omitidos y contradicciones al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Leer el error completo (Mentalidad y formulación del problema): Mensaje, tipo, código, causa, stack y contexto contienen más información que la última línea.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-11",
    "collectionId": "debugging",
    "question": "En Debugging (Mentalidad y formulación del problema), ¿qué función técnica cumple «No adivinar»?",
    "options": [
      "Observar, formular, experimentar, medir y actualizar la explicación reduce cambios al azar al operar.",
      "Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar al operar.",
      "Una acción sin evidencia puede destruir el estado necesario para reproducir o medir el problema.",
      "Explicar línea por línea fuerza a revelar supuestos, estados omitidos y contradicciones al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "No adivinar (Mentalidad y formulación del problema): Una acción sin evidencia puede destruir el estado necesario para reproducir o medir el problema.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-12",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Prioridad del bug» en mentalidad y formulación del problema?",
    "options": [
      "Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz al operar.",
      "Propone una causa que puede confirmarse o descartarse mediante una prueba concreta.",
      "Cambiar un factor por experimento permite atribuir el resultado a una causa al evaluar.",
      "Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Prioridad del bug (Mentalidad y formulación del problema): Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-13",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Severidad frente a prioridad»?",
    "options": [
      "Un fallo técnicamente grave no siempre se corrige primero y un defecto frecuente puede tener alta prioridad.",
      "El error visible suele ser una consecuencia; corregir solo el síntoma puede ocultar el mecanismo real.",
      "Confirmación, disponibilidad y anclaje pueden hacer que se busque evidencia solo para la primera teoría.",
      "Define cuándo escalar, revertir, pausar tráfico o preservar evidencia para evitar empeorar el incidente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Severidad frente a prioridad (Mentalidad y formulación del problema): Un fallo técnicamente grave no siempre se corrige primero y un defecto frecuente puede tener alta prioridad.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-14",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Blast radius»?",
    "options": [
      "Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar al operar.",
      "Identifica usuarios, datos, regiones, versiones y dependencias afectadas antes de experimentar.",
      "Explicar línea por línea fuerza a revelar supuestos, estados omitidos y contradicciones al operar.",
      "Observar, formular, experimentar, medir y actualizar la explicación reduce cambios al azar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Blast radius (Mentalidad y formulación del problema): Identifica usuarios, datos, regiones, versiones y dependencias afectadas antes de experimentar.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-15",
    "collectionId": "debugging",
    "question": "Respecto a mentalidad y formulación del problema en Debugging, ¿cuál es el propósito de «Workaround»?",
    "options": [
      "Propone una causa que puede confirmarse o descartarse mediante una prueba concreta al operar.",
      "Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia.",
      "Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz al operar.",
      "Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Workaround (Mentalidad y formulación del problema): Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-16",
    "collectionId": "debugging",
    "question": "En Debugging (Mentalidad y formulación del problema), ¿qué función técnica cumple «Stop conditions»?",
    "options": [
      "Una acción sin evidencia puede destruir el estado necesario para reproducir o medir el problema al evaluar.",
      "Incluye corrección, prueba de regresión, observabilidad y explicación de por qué no reaparecerá al operar.",
      "Identifica usuarios, datos, regiones, versiones y dependencias afectadas antes de experimentar al operar.",
      "Define cuándo escalar, revertir, pausar tráfico o preservar evidencia para evitar empeorar el incidente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Stop conditions (Mentalidad y formulación del problema): Define cuándo escalar, revertir, pausar tráfico o preservar evidencia para evitar empeorar el incidente.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "básico"
  },
  {
    "id": "debugging-q-17",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Diario de investigación» en mentalidad y formulación del problema?",
    "options": [
      "Anota hipótesis, comandos, resultados y timestamps para no repetir pasos ni perder contexto.",
      "Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia.",
      "Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar.",
      "Explicar línea por línea fuerza a revelar supuestos, estados omitidos y contradicciones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Diario de investigación (Mentalidad y formulación del problema): Anota hipótesis, comandos, resultados y timestamps para no repetir pasos ni perder contexto.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-18",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Definición de terminado»?",
    "options": [
      "Observar, formular, experimentar, medir y actualizar la explicación reduce cambios al azar al operar.",
      "Incluye corrección, prueba de regresión, observabilidad y explicación de por qué no reaparecerá.",
      "Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar al operar.",
      "Explicar línea por línea fuerza a revelar supuestos, estados omitidos y contradicciones al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Definición de terminado (Mentalidad y formulación del problema): Incluye corrección, prueba de regresión, observabilidad y explicación de por qué no reaparecerá.",
    "topic": "Mentalidad y formulación del problema",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-19",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Caso mínimo reproducible»?",
    "options": [
      "Semillas, relojes falsos y schedulers controlados reducen fallos aleatorios al operar.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.",
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible.",
      "Compara dónde ocurre y dónde no para localizar la dimensión relevante en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Caso mínimo reproducible (Reproducción y aislamiento): Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-20",
    "collectionId": "debugging",
    "question": "Respecto a reproducción y aislamiento en Debugging, ¿cuál es el propósito de «Pasos exactos»?",
    "options": [
      "Semillas, relojes falsos y schedulers controlados reducen fallos aleatorios al evaluar.",
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pasos exactos (Reproducción y aislamiento): Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-21",
    "collectionId": "debugging",
    "question": "En Debugging (Reproducción y aislamiento), ¿qué función técnica cumple «Datos de entrada»?",
    "options": [
      "Valores, formatos, tamaños, locale y orden pueden ser la diferencia entre éxito y fallo.",
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Datos de entrada (Reproducción y aislamiento): Valores, formatos, tamaños, locale y orden pueden ser la diferencia entre éxito y fallo.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-22",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Estado inicial» en reproducción y aislamiento?",
    "options": [
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible al operar.",
      "Caches, sesión, base de datos, feature flags y reloj deben describirse antes de repetir.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Estado inicial (Reproducción y aislamiento): Caches, sesión, base de datos, feature flags y reloj deben describirse antes de repetir.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-23",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Versión exacta»?",
    "options": [
      "Sustituye red, reloj, filesystem o servicio por un double controlado para determinar si participa en el flujo.",
      "Debe preferir traffic replay seguro, shadowing o datos anonimizados antes que experimentar con usuarios.",
      "Commit, build, dependencias, runtime, navegador, dispositivo y configuración hacen reproducible el entorno.",
      "Automatiza búsqueda binaria del commit que introdujo una regresión con una prueba repetible de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Versión exacta (Reproducción y aislamiento): Commit, build, dependencias, runtime, navegador, dispositivo y configuración hacen reproducible el entorno.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-24",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Matriz de entornos»?",
    "options": [
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible al operar.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada.",
      "Compara dónde ocurre y dónde no para localizar la dimensión relevante sin perder estado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Matriz de entornos (Reproducción y aislamiento): Compara dónde ocurre y dónde no para localizar la dimensión relevante.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-25",
    "collectionId": "debugging",
    "question": "Respecto a reproducción y aislamiento en Debugging, ¿cuál es el propósito de «Bisect manual»?",
    "options": [
      "Divide cambios o condiciones en mitades hasta encontrar el primer punto que reproduce.",
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.",
      "Semillas, relojes falsos y schedulers controlados reducen fallos aleatorios al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Bisect manual (Reproducción y aislamiento): Divide cambios o condiciones en mitades hasta encontrar el primer punto que reproduce.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-26",
    "collectionId": "debugging",
    "question": "En Debugging (Reproducción y aislamiento), ¿qué función técnica cumple «git bisect»?",
    "options": [
      "Divide cambios o condiciones en mitades hasta encontrar el primer punto que reproduce al operar.",
      "Automatiza búsqueda binaria del commit que introdujo una regresión con una prueba repetible.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada al operar.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "git bisect (Reproducción y aislamiento): Automatiza búsqueda binaria del commit que introdujo una regresión con una prueba repetible.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-27",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Feature flag isolation» en reproducción y aislamiento?",
    "options": [
      "Semillas, relojes falsos y schedulers controlados reducen fallos aleatorios en el flujo.",
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Feature flag isolation (Reproducción y aislamiento): Activa o desactiva caminos independientes para identificar la funcionalidad asociada.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-28",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Dependency isolation»?",
    "options": [
      "Automatiza búsqueda binaria del commit que introdujo una regresión con una prueba repetible al operar.",
      "Aumenta concurrencia, introduce delays o usa barriers para ensanchar una ventana temporal al operar.",
      "Contenedores, profiles o máquinas nuevas eliminan residuos de configuración y caché local al operar.",
      "Sustituye red, reloj, filesystem o servicio por un double controlado para determinar si participa."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dependency isolation (Reproducción y aislamiento): Sustituye red, reloj, filesystem o servicio por un double controlado para determinar si participa.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-29",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Datos sintéticos»?",
    "options": [
      "Construye fixtures pequeños que preservan la propiedad causante sin exponer datos reales.",
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Datos sintéticos (Reproducción y aislamiento): Construye fixtures pequeños que preservan la propiedad causante sin exponer datos reales.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-30",
    "collectionId": "debugging",
    "question": "Respecto a reproducción y aislamiento en Debugging, ¿cuál es el propósito de «Reproducción determinista»?",
    "options": [
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible al operar.",
      "Semillas, relojes falsos y schedulers controlados reducen fallos aleatorios en el flujo.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Reproducción determinista (Reproducción y aislamiento): Semillas, relojes falsos y schedulers controlados reducen fallos aleatorios.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-31",
    "collectionId": "debugging",
    "question": "En Debugging (Reproducción y aislamiento), ¿qué función técnica cumple «Race reproduction»?",
    "options": [
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo al operar.",
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible al operar.",
      "Aumenta concurrencia, introduce delays o usa barriers para ensanchar una ventana temporal.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Race reproduction (Reproducción y aislamiento): Aumenta concurrencia, introduce delays o usa barriers para ensanchar una ventana temporal.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-32",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Flaky bug» en reproducción y aislamiento?",
    "options": [
      "Debe preferir traffic replay seguro, shadowing o datos anonimizados antes que experimentar con usuarios al operar.",
      "Commit, build, dependencias, runtime, navegador, dispositivo y configuración hacen reproducible el entorno.",
      "Sustituye red, reloj, filesystem o servicio por un double controlado para determinar si participa en el flujo.",
      "Un fallo intermitente exige registrar frecuencias, condiciones y secuencias, no repetir hasta que desaparezca."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Flaky bug (Reproducción y aislamiento): Un fallo intermitente exige registrar frecuencias, condiciones y secuencias, no repetir hasta que desaparezca.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-33",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Heisenbug»?",
    "options": [
      "La instrumentación altera timing o memoria; se necesitan herramientas menos intrusivas y evidencia comparativa al operar.",
      "Debe preferir traffic replay seguro, shadowing o datos anonimizados antes que experimentar con usuarios al operar.",
      "Commit, build, dependencias, runtime, navegador, dispositivo y configuración hacen reproducible el entorno.",
      "Un fallo intermitente exige registrar frecuencias, condiciones y secuencias, no repetir hasta que desaparezca."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Heisenbug (Reproducción y aislamiento): La instrumentación altera timing o memoria; se necesitan herramientas menos intrusivas y evidencia comparativa.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-34",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Entorno limpio»?",
    "options": [
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo al operar.",
      "Contenedores, profiles o máquinas nuevas eliminan residuos de configuración y caché local.",
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible al operar.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Entorno limpio (Reproducción y aislamiento): Contenedores, profiles o máquinas nuevas eliminan residuos de configuración y caché local.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "debugging-q-35",
    "collectionId": "debugging",
    "question": "Respecto a reproducción y aislamiento en Debugging, ¿cuál es el propósito de «Reproducción en producción»?",
    "options": [
      "Sustituye red, reloj, filesystem o servicio por un double controlado para determinar si participa al operar.",
      "Automatiza búsqueda binaria del commit que introdujo una regresión con una prueba repetible en el flujo.",
      "Debe preferir traffic replay seguro, shadowing o datos anonimizados antes que experimentar con usuarios.",
      "Aumenta concurrencia, introduce delays o usa barriers para ensanchar una ventana temporal con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reproducción en producción (Reproducción y aislamiento): Debe preferir traffic replay seguro, shadowing o datos anonimizados antes que experimentar con usuarios.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-36",
    "collectionId": "debugging",
    "question": "En Debugging (Reproducción y aislamiento), ¿qué función técnica cumple «Minimal failing test»?",
    "options": [
      "Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible al operar.",
      "Una secuencia numerada con precondiciones permite que otra persona observe lo mismo al operar.",
      "Activa o desactiva caminos independientes para identificar la funcionalidad asociada.",
      "Convierte el síntoma en una prueba automática que falla antes de tocar la implementación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Minimal failing test (Reproducción y aislamiento): Convierte el síntoma en una prueba automática que falla antes de tocar la implementación.",
    "topic": "Reproducción y aislamiento",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-37",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Logging estructurado» en evidencia, logs y observabilidad?",
    "options": [
      "Campos consistentes permiten filtrar y agregar sin depender de parsing de texto libre.",
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente.",
      "Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Logging estructurado (Evidencia, logs y observabilidad): Campos consistentes permiten filtrar y agregar sin depender de parsing de texto libre.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-38",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Niveles de log»?",
    "options": [
      "Campos consistentes permiten filtrar y agregar sin depender de parsing de texto libre al operar.",
      "Debug, info, warn y error deben expresar propósito y no usarse para ocultar fallos normales.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests al operar.",
      "Sigue una solicitud por servicios y muestra tiempo, errores y atributos de cada span al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Niveles de log (Evidencia, logs y observabilidad): Debug, info, warn y error deben expresar propósito y no usarse para ocultar fallos normales.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-39",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Correlation ID»?",
    "options": [
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests al operar.",
      "Sigue una solicitud por servicios y muestra tiempo, errores y atributos de cada span al operar.",
      "Propaga una identidad de request entre frontend, gateway, servicios, colas y base de datos.",
      "Campos consistentes permiten filtrar y agregar sin depender de parsing de texto libre al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Correlation ID (Evidencia, logs y observabilidad): Propaga una identidad de request entre frontend, gateway, servicios, colas y base de datos.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-40",
    "collectionId": "debugging",
    "question": "Respecto a evidencia, logs y observabilidad en Debugging, ¿cuál es el propósito de «Trace ID y span ID»?",
    "options": [
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente al operar.",
      "Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura al operar.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests.",
      "Relacionan operaciones distribuidas y sus relaciones padre-hijo dentro de la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Trace ID y span ID (Evidencia, logs y observabilidad): Relacionan operaciones distribuidas y sus relaciones padre-hijo.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-41",
    "collectionId": "debugging",
    "question": "En Debugging (Evidencia, logs y observabilidad), ¿qué función técnica cumple «Contexto útil»?",
    "options": [
      "Incluye operación, recurso, versión y estado relevante sin registrar secretos ni datos personales al operar.",
      "Debug, info, warn y error deben expresar propósito y no usarse para ocultar fallos normales.",
      "Reduce volumen conservando una muestra representativa y priorizando errores o trazas lentas.",
      "Propaga una identidad de request entre frontend, gateway, servicios, colas y base de datos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Contexto útil (Evidencia, logs y observabilidad): Incluye operación, recurso, versión y estado relevante sin registrar secretos ni datos personales.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-42",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Logs antes y después» en evidencia, logs y observabilidad?",
    "options": [
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests al operar.",
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente al operar.",
      "Sigue una solicitud por servicios y muestra tiempo, errores y atributos de cada span al operar.",
      "Campos consistentes permiten filtrar y agregar sin depender de parsing de texto libre al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Logs antes y después (Evidencia, logs y observabilidad): Dos checkpoints delimitan la última operación exitosa y la primera inconsistente.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-43",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Métricas RED»?",
    "options": [
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente al operar.",
      "Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests.",
      "Marcas de versión permiten correlacionar regresiones con cambios recientes al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Métricas RED (Evidencia, logs y observabilidad): Rate, errors y duration resumen el comportamiento de servicios orientados a requests.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-44",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Métricas USE»?",
    "options": [
      "Marcas de versión permiten correlacionar regresiones con cambios recientes al evaluar.",
      "Distribuciones y percentiles muestran colas largas que el promedio oculta al operar.",
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente.",
      "Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Métricas USE (Evidencia, logs y observabilidad): Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-45",
    "collectionId": "debugging",
    "question": "Respecto a evidencia, logs y observabilidad en Debugging, ¿cuál es el propósito de «Histograma»?",
    "options": [
      "Distribuciones y percentiles muestran colas largas que el promedio oculta de modo predecible.",
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente al operar.",
      "Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Histograma (Evidencia, logs y observabilidad): Distribuciones y percentiles muestran colas largas que el promedio oculta.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-46",
    "collectionId": "debugging",
    "question": "En Debugging (Evidencia, logs y observabilidad), ¿qué función técnica cumple «Distributed tracing»?",
    "options": [
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente al operar.",
      "Sigue una solicitud por servicios y muestra tiempo, errores y atributos de cada span.",
      "Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura.",
      "Marcas de versión permiten correlacionar regresiones con cambios recientes al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Distributed tracing (Evidencia, logs y observabilidad): Sigue una solicitud por servicios y muestra tiempo, errores y atributos de cada span.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-47",
    "collectionId": "debugging",
    "question": "Dentro de Debugging, ¿cómo opera el mecanismo de «Eventos de deployment» en evidencia, logs y observabilidad?",
    "options": [
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente al operar.",
      "Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura al operar.",
      "Marcas de versión permiten correlacionar regresiones con cambios recientes en ejecución.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Eventos de deployment (Evidencia, logs y observabilidad): Marcas de versión permiten correlacionar regresiones con cambios recientes.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-48",
    "collectionId": "debugging",
    "question": "Al trabajar con Debugging, ¿qué responsabilidad define a «Audit trail»?",
    "options": [
      "Dos checkpoints delimitan la última operación exitosa y la primera inconsistente al operar.",
      "Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura al operar.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests.",
      "Registra quién cambió configuración, permisos o datos y cuándo manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Audit trail (Evidencia, logs y observabilidad): Registra quién cambió configuración, permisos o datos y cuándo.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-49",
    "collectionId": "debugging",
    "question": "En la arquitectura de Debugging, ¿qué caracteriza técnicamente a «Sampling»?",
    "options": [
      "Reduce volumen conservando una muestra representativa y priorizando errores o trazas lentas al operar.",
      "Campos consistentes permiten filtrar y agregar sin depender de parsing de texto libre.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests al operar.",
      "Sigue una solicitud por servicios y muestra tiempo, errores y atributos de cada span al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sampling (Evidencia, logs y observabilidad): Reduce volumen conservando una muestra representativa y priorizando errores o trazas lentas.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "debugging-q-50",
    "collectionId": "debugging",
    "question": "Respecto a evidencia, logs y observabilidad en Debugging, ¿cuál es el propósito de «Dynamic logging»?",
    "options": [
      "Campos consistentes permiten filtrar y agregar sin depender de parsing de texto libre al evaluar.",
      "Aumenta temporalmente detalle para un componente sin redeploy cuando la plataforma lo permite.",
      "Propaga una identidad de request entre frontend, gateway, servicios, colas y base de datos.",
      "Rate, errors y duration resumen el comportamiento de servicios orientados a requests al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dynamic logging (Evidencia, logs y observabilidad): Aumenta temporalmente detalle para un componente sin redeploy cuando la plataforma lo permite.",
    "topic": "Evidencia, logs y observabilidad",
    "difficulty": "avanzado"
  }
];
