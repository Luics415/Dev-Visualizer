import type { QuizQuestion } from "@/data/quizTypes";

export const rakuQuestions: QuizQuestion[] = [
  {
    "id": "raku-q-01",
    "collectionId": "raku",
    "question": "En Raku (Sistema de tipos expresivo), ¿qué función técnica cumple «Coercion types»?",
    "options": [
      "Acepta un valor de entrada amplio y lo transforma automáticamente hacia el tipo objetivo al operar.",
      "Refina un tipo base mediante un predicado arbitrario verificado al ligar el parámetro.",
      "Restringe en la firma si un parámetro acepta solo instancias concretas o el objeto de tipo.",
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Coercion types (Sistema de tipos expresivo): Acepta un valor de entrada amplio y lo transforma automáticamente hacia el tipo objetivo.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-02",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «Parametric roles» en sistema de tipos expresivo?",
    "options": [
      "Acepta un valor de entrada amplio y lo transforma automáticamente hacia el tipo objetivo al operar.",
      "Define unidades de composición genéricas que se especializan con tipos o valores al aplicarse.",
      "Refina un tipo base mediante un predicado arbitrario verificado al ligar el parámetro al operar.",
      "Restringe en la firma si un parámetro acepta solo instancias concretas o el objeto de tipo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Parametric roles (Sistema de tipos expresivo): Define unidades de composición genéricas que se especializan con tipos o valores al aplicarse.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-03",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Definite y undefined values»?",
    "options": [
      "Refina un tipo base mediante un predicado arbitrario verificado al ligar el parámetro al operar.",
      "Acepta un valor de entrada amplio y lo transforma automáticamente hacia el tipo objetivo.",
      "Restringe en la firma si un parámetro acepta solo instancias concretas o el objeto de tipo.",
      "Almacena enteros y flotantes de tamaño fijo sin envoltorio de objeto para cómputo intensivo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Definite y undefined values (Sistema de tipos expresivo): Restringe en la firma si un parámetro acepta solo instancias concretas o el objeto de tipo.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-04",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «Contratos where»?",
    "options": [
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito al operar.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha.",
      "Refina un tipo base mediante un predicado arbitrario verificado al ligar el parámetro."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Contratos where (Sistema de tipos expresivo): Refina un tipo base mediante un predicado arbitrario verificado al ligar el parámetro.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-05",
    "collectionId": "raku",
    "question": "Respecto a sistema de tipos expresivo en Raku, ¿cuál es el propósito de «Native numeric types»?",
    "options": [
      "Almacena enteros y flotantes de tamaño fijo sin envoltorio de objeto para cómputo intensivo.",
      "Refina un tipo base mediante un predicado arbitrario verificado al ligar el parámetro.",
      "Acepta un valor de entrada amplio y lo transforma automáticamente hacia el tipo objetivo.",
      "Restringe en la firma si un parámetro acepta solo instancias concretas o el objeto de tipo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Native numeric types (Sistema de tipos expresivo): Almacena enteros y flotantes de tamaño fijo sin envoltorio de objeto para cómputo intensivo.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-06",
    "collectionId": "raku",
    "question": "En Raku (Despacho avanzado), ¿qué función técnica cumple «Proto candidates»?",
    "options": [
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito al operar.",
      "Declara la firma paraguas y el comportamiento común de una familia de rutinas múltiples.",
      "Desempata variantes de una rutina múltiple evaluando guardas de subtipos o predicados.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Proto candidates (Despacho avanzado): Declara la firma paraguas y el comportamiento común de una familia de rutinas múltiples.",
    "topic": "Despacho avanzado",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-07",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «Constraints de candidatos» en despacho avanzado?",
    "options": [
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito al operar.",
      "Declara la firma paraguas y el comportamiento común de una familia de rutinas múltiples.",
      "Desempata variantes de una rutina múltiple evaluando guardas de subtipos o predicados.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Constraints de candidatos (Despacho avanzado): Desempata variantes de una rutina múltiple evaluando guardas de subtipos o predicados.",
    "topic": "Despacho avanzado",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-08",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Samewith y nextwith»?",
    "options": [
      "Permite que una variante intercepte la llamada y delegue el trabajo al candidato más general al operar.",
      "Declara la firma paraguas y el comportamiento común de una familia de rutinas múltiples al operar.",
      "Avanza por la cadena ordenada de candidatos aplicables reutilizando la lista original de paso.",
      "Redirige la ejecución hacia el siguiente candidato compatible cambiando o conservando argumentos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Samewith y nextwith (Despacho avanzado): Redirige la ejecución hacia el siguiente candidato compatible cambiando o conservando argumentos.",
    "topic": "Despacho avanzado",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-09",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «Redispatch»?",
    "options": [
      "Permite que una variante intercepte la llamada y delegue el trabajo al candidato más general al operar.",
      "Declara la firma paraguas y el comportamiento común de una familia de rutinas múltiples.",
      "Desempata variantes de una rutina múltiple evaluando guardas de subtipos o predicados al operar.",
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Redispatch (Despacho avanzado): Permite que una variante intercepte la llamada y delegue el trabajo al candidato más general.",
    "topic": "Despacho avanzado",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-10",
    "collectionId": "raku",
    "question": "Respecto a despacho avanzado en Raku, ¿cuál es el propósito de «Ambigüedad de multi dispatch»?",
    "options": [
      "Desempata variantes de una rutina múltiple evaluando guardas de subtipos o predicados.",
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ambigüedad de multi dispatch (Despacho avanzado): Detecta colisiones entre firmas igualmente específicas y exige desempate explícito.",
    "topic": "Despacho avanzado",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-11",
    "collectionId": "raku",
    "question": "En Raku (Despacho avanzado), ¿qué función técnica cumple «Multi dispatch cache invalidation»?",
    "options": [
      "Declara la firma paraguas y el comportamiento común de una familia de rutinas múltiples al operar.",
      "Desempata variantes de una rutina múltiple evaluando guardas de subtipos o predicados al operar.",
      "Actualiza la tabla rápida de selección de candidatos cuando se agregan o componen nuevos tipos.",
      "Permite que una variante intercepte la llamada y delegue el trabajo al candidato más general."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Multi dispatch cache invalidation (Despacho avanzado): Actualiza la tabla rápida de selección de candidatos cuando se agregan o componen nuevos tipos.",
    "topic": "Despacho avanzado",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-12",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «callsame candidate traversal» en despacho avanzado?",
    "options": [
      "Declara la firma paraguas y el comportamiento común de una familia de rutinas múltiples al operar.",
      "Desempata variantes de una rutina múltiple evaluando guardas de subtipos o predicados al operar.",
      "Permite que una variante intercepte la llamada y delegue el trabajo al candidato más general.",
      "Avanza por la cadena ordenada de candidatos aplicables reutilizando la lista original de paso."
    ],
    "correctAnswerIndex": 3,
    "explanation": "callsame candidate traversal (Despacho avanzado): Avanza por la cadena ordenada de candidatos aplicables reutilizando la lista original de paso.",
    "topic": "Despacho avanzado",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-13",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Proto regex y alternación longest-token»?",
    "options": [
      "Evalúa ramas declarativas en paralelo eligiendo el prefijo más largo antes de ejecutar acciones.",
      "Factoriza prefijos comunes y reemplaza reglas con retroceso por tokens declarativos rápidos.",
      "Desacopla las reglas sintácticas de la gramática respecto a la clase que construye el árbol.",
      "Usa operadores de corte de dos puntos para confirmar tokens y evitar retrocesos innecesarios."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Proto regex y alternación longest-token (Gramáticas de producción): Evalúa ramas declarativas en paralelo eligiendo el prefijo más largo antes de ejecutar acciones.",
    "topic": "Gramáticas de producción",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-14",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «Backtracking controlado»?",
    "options": [
      "Factoriza prefijos comunes y reemplaza reglas con retroceso por tokens declarativos rápidos al operar.",
      "Usa operadores de corte de dos puntos para confirmar tokens y evitar retrocesos innecesarios.",
      "Desacopla las reglas sintácticas de la gramática respecto a la clase que construye el árbol.",
      "Registra la posición máxima alcanzada y los tokens esperados para emitir diagnósticos claros."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Backtracking controlado (Gramáticas de producción): Usa operadores de corte de dos puntos para confirmar tokens y evitar retrocesos innecesarios.",
    "topic": "Gramáticas de producción",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-15",
    "collectionId": "raku",
    "question": "Respecto a gramáticas de producción en Raku, ¿cuál es el propósito de «Dynamic variables en actions»?",
    "options": [
      "Factoriza prefijos comunes y reemplaza reglas con retroceso por tokens declarativos rápidos al operar.",
      "Desacopla las reglas sintácticas de la gramática respecto a la clase que construye el árbol.",
      "Comparte contexto léxico descendente entre reglas anidadas de una gramática durante el análisis.",
      "Usa operadores de corte de dos puntos para confirmar tokens y evitar retrocesos innecesarios."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dynamic variables en actions (Gramáticas de producción): Comparte contexto léxico descendente entre reglas anidadas de una gramática durante el análisis.",
    "topic": "Gramáticas de producción",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-16",
    "collectionId": "raku",
    "question": "En Raku (Gramáticas de producción), ¿qué función técnica cumple «Errores de parsing localizados»?",
    "options": [
      "Factoriza prefijos comunes y reemplaza reglas con retroceso por tokens declarativos rápidos al operar.",
      "Desacopla las reglas sintácticas de la gramática respecto a la clase que construye el árbol.",
      "Usa operadores de corte de dos puntos para confirmar tokens y evitar retrocesos innecesarios.",
      "Registra la posición máxima alcanzada y los tokens esperados para emitir diagnósticos claros."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Errores de parsing localizados (Gramáticas de producción): Registra la posición máxima alcanzada y los tokens esperados para emitir diagnósticos claros.",
    "topic": "Gramáticas de producción",
    "difficulty": "básico"
  },
  {
    "id": "raku-q-17",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «Optimización de grammars» en gramáticas de producción?",
    "options": [
      "Factoriza prefijos comunes y reemplaza reglas con retroceso por tokens declarativos rápidos.",
      "Desacopla las reglas sintácticas de la gramática respecto a la clase que construye el árbol.",
      "Usa operadores de corte de dos puntos para confirmar tokens y evitar retrocesos innecesarios.",
      "Registra la posición máxima alcanzada y los tokens esperados para emitir diagnósticos claros."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Optimización de grammars (Gramáticas de producción): Factoriza prefijos comunes y reemplaza reglas con retroceso por tokens declarativos rápidos.",
    "topic": "Gramáticas de producción",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-18",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Actions object separation»?",
    "options": [
      "Factoriza prefijos comunes y reemplaza reglas con retroceso por tokens declarativos rápidos.",
      "Desacopla las reglas sintácticas de la gramática respecto a la clase que construye el árbol.",
      "Usa operadores de corte de dos puntos para confirmar tokens y evitar retrocesos innecesarios.",
      "Registra la posición máxima alcanzada y los tokens esperados para emitir diagnósticos claros."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Actions object separation (Gramáticas de producción): Desacopla las reglas sintácticas de la gramática respecto a la clase que construye el árbol.",
    "topic": "Gramáticas de producción",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-19",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «Backtracking control in protoregexes»?",
    "options": [
      "Factoriza prefijos comunes y reemplaza reglas con retroceso por tokens declarativos rápidos al operar.",
      "Desacopla las reglas sintácticas de la gramática respecto a la clase que construye el árbol.",
      "Separa la fase declarativa de selección del token más largo de la fase posterior con retroceso.",
      "Usa operadores de corte de dos puntos para confirmar tokens y evitar retrocesos innecesarios."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Backtracking control in protoregexes (Gramáticas de producción): Separa la fase declarativa de selección del token más largo de la fase posterior con retroceso.",
    "topic": "Gramáticas de producción",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-20",
    "collectionId": "raku",
    "question": "Respecto a concurrencia reactiva en Raku, ¿cuál es el propósito de «Supply live y on-demand»?",
    "options": [
      "Continúa el flujo tan pronto como se completa cualquiera de las promesas en competencia al evaluar.",
      "Coordina canales acotados y lotes para evitar que emisores rápidos desborden la memoria al operar.",
      "Elige el planificador de hilos reales o virtuales donde se ejecutarán promesas y suministros.",
      "Distingue flujos de eventos compartidos en vivo frente a secuencias creadas por cada suscriptor."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Supply live y on-demand (Concurrencia reactiva): Distingue flujos de eventos compartidos en vivo frente a secuencias creadas por cada suscriptor.",
    "topic": "Concurrencia reactiva",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-21",
    "collectionId": "raku",
    "question": "En Raku (Concurrencia reactiva), ¿qué función técnica cumple «Tap y multicasting»?",
    "options": [
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo.",
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito.",
      "Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tap y multicasting (Concurrencia reactiva): Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha.",
    "topic": "Concurrencia reactiva",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-22",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «React y whenever» en concurrencia reactiva?",
    "options": [
      "Continúa el flujo tan pronto como se completa cualquiera de las promesas en competencia al operar.",
      "Procesa eventos concurrentes de múltiples fuentes de forma secuencial y sin carreras de estado.",
      "Coordina canales acotados y lotes para evitar que emisores rápidos desborden la memoria al operar.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "React y whenever (Concurrencia reactiva): Procesa eventos concurrentes de múltiples fuentes de forma secuencial y sin carreras de estado.",
    "topic": "Concurrencia reactiva",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-23",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Races con Promise.anyof»?",
    "options": [
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo al operar.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha.",
      "Continúa el flujo tan pronto como se completa cualquiera de las promesas en competencia.",
      "Coordina canales acotados y lotes para evitar que emisores rápidos desborden la memoria."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Races con Promise.anyof (Concurrencia reactiva): Continúa el flujo tan pronto como se completa cualquiera de las promesas en competencia.",
    "topic": "Concurrencia reactiva",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-24",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «Backpressure explícita»?",
    "options": [
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo al operar.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha.",
      "Continúa el flujo tan pronto como se completa cualquiera de las promesas en competencia.",
      "Coordina canales acotados y lotes para evitar que emisores rápidos desborden la memoria."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Backpressure explícita (Concurrencia reactiva): Coordina canales acotados y lotes para evitar que emisores rápidos desborden la memoria.",
    "topic": "Concurrencia reactiva",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-25",
    "collectionId": "raku",
    "question": "Respecto a concurrencia reactiva en Raku, ¿cuál es el propósito de «react and whenever cancellation»?",
    "options": [
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha.",
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito.",
      "Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz."
    ],
    "correctAnswerIndex": 0,
    "explanation": "react and whenever cancellation (Concurrencia reactiva): Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo.",
    "topic": "Concurrencia reactiva",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-26",
    "collectionId": "raku",
    "question": "En Raku (Concurrencia reactiva), ¿qué función técnica cumple «Scheduler selection»?",
    "options": [
      "Continúa el flujo tan pronto como se completa cualquiera de las promesas en competencia al operar.",
      "Elige el planificador de hilos reales o virtuales donde se ejecutarán promesas y suministros.",
      "Coordina canales acotados y lotes para evitar que emisores rápidos desborden la memoria al operar.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Scheduler selection (Concurrencia reactiva): Elige el planificador de hilos reales o virtuales donde se ejecutarán promesas y suministros.",
    "topic": "Concurrencia reactiva",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-27",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «Test plans» en testing y diagnóstico?",
    "options": [
      "Verifica reglas individuales y árboles generados tanto con entradas válidas como inválidas al operar.",
      "Identifica objetos retenidos por suscripciones abiertas o clausuras que nunca se liberan al operar.",
      "Declara cuántas aserciones debe ejecutar una suite o subprueba para detectar salidas prematuras.",
      "Captura perfiles de tiempo, asignaciones y desoptimizaciones del motor virtual en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Test plans (Testing y diagnóstico): Declara cuántas aserciones debe ejecutar una suite o subprueba para detectar salidas prematuras.",
    "topic": "Testing y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-28",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Pruebas de gramáticas»?",
    "options": [
      "Identifica objetos retenidos por suscripciones abiertas o clausuras que nunca se liberan al operar.",
      "Captura perfiles de tiempo, asignaciones y desoptimizaciones del motor virtual en ejecución.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha al operar.",
      "Verifica reglas individuales y árboles generados tanto con entradas válidas como inválidas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pruebas de gramáticas (Testing y diagnóstico): Verifica reglas individuales y árboles generados tanto con entradas válidas como inválidas.",
    "topic": "Testing y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-29",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «Rakudo debugger»?",
    "options": [
      "Inspecciona pilas de ejecución, variables y pasos de evaluación de gramáticas interactivamente.",
      "Identifica objetos retenidos por suscripciones abiertas o clausuras que nunca se liberan.",
      "Verifica reglas individuales y árboles generados tanto con entradas válidas como inválidas.",
      "Captura perfiles de tiempo, asignaciones y desoptimizaciones del motor virtual en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Rakudo debugger (Testing y diagnóstico): Inspecciona pilas de ejecución, variables y pasos de evaluación de gramáticas interactivamente.",
    "topic": "Testing y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-30",
    "collectionId": "raku",
    "question": "Respecto a testing y diagnóstico en Raku, ¿cuál es el propósito de «MoarVM profiler»?",
    "options": [
      "Identifica objetos retenidos por suscripciones abiertas o clausuras que nunca se liberan al operar.",
      "Captura perfiles de tiempo, asignaciones y desoptimizaciones del motor virtual en ejecución.",
      "Verifica reglas individuales y árboles generados tanto con entradas válidas como inválidas.",
      "Refina un tipo base mediante un predicado arbitrario verificado al ligar el parámetro al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "MoarVM profiler (Testing y diagnóstico): Captura perfiles de tiempo, asignaciones y desoptimizaciones del motor virtual en ejecución.",
    "topic": "Testing y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-31",
    "collectionId": "raku",
    "question": "En Raku (Testing y diagnóstico), ¿qué función técnica cumple «Detección de leaks»?",
    "options": [
      "Verifica reglas individuales y árboles generados tanto con entradas válidas como inválidas.",
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito al operar.",
      "Identifica objetos retenidos por suscripciones abiertas o clausuras que nunca se liberan.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Detección de leaks (Testing y diagnóstico): Identifica objetos retenidos por suscripciones abiertas o clausuras que nunca se liberan.",
    "topic": "Testing y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-32",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «Test plan contracts» en testing y diagnóstico?",
    "options": [
      "Verifica reglas individuales y árboles generados tanto con entradas válidas como inválidas al operar.",
      "Identifica objetos retenidos por suscripciones abiertas o clausuras que nunca se liberan al operar.",
      "Captura perfiles de tiempo, asignaciones y desoptimizaciones del motor virtual en ejecución.",
      "Garantiza que una suite falle si termina sin haber ejecutado todas las verificaciones previstas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Test plan contracts (Testing y diagnóstico): Garantiza que una suite falle si termina sin haber ejecutado todas las verificaciones previstas.",
    "topic": "Testing y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-33",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Concurrent failure reproducibility»?",
    "options": [
      "Ejecuta pruebas reactivas sobre un planificador determinista para reproducir carreras de tiempo al operar.",
      "Verifica reglas individuales y árboles generados tanto con entradas válidas como inválidas.",
      "Identifica objetos retenidos por suscripciones abiertas o clausuras que nunca se liberan al operar.",
      "Captura perfiles de tiempo, asignaciones y desoptimizaciones del motor virtual en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Concurrent failure reproducibility (Testing y diagnóstico): Ejecuta pruebas reactivas sobre un planificador determinista para reproducir carreras de tiempo.",
    "topic": "Testing y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-34",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «Firmas NativeCall»?",
    "options": [
      "Pasa clausuras del lenguaje como punteros de función hacia bibliotecas nativas externas al operar.",
      "Vincula subrutinas declaradas con rasgos nativos directamente a símbolos de bibliotecas en C.",
      "Controla arreglos contiguos de bytes fijando quién es responsable de liberar su memoria al operar.",
      "Verifica desplazamientos y relleno de campos en estructuras compuestas compartidas con C."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Firmas NativeCall (NativeCall e interoperabilidad): Vincula subrutinas declaradas con rasgos nativos directamente a símbolos de bibliotecas en C.",
    "topic": "NativeCall e interoperabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "raku-q-35",
    "collectionId": "raku",
    "question": "Respecto a nativecall e interoperabilidad en Raku, ¿cuál es el propósito de «Structs y unions nativos»?",
    "options": [
      "Pasa clausuras del lenguaje como punteros de función hacia bibliotecas nativas externas al operar.",
      "Controla arreglos contiguos de bytes fijando quién es responsable de liberar su memoria.",
      "Modela la disposición exacta en bytes de estructuras de C para intercambiarlas sin copias.",
      "Verifica desplazamientos y relleno de campos en estructuras compuestas compartidas con C."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Structs y unions nativos (NativeCall e interoperabilidad): Modela la disposición exacta en bytes de estructuras de C para intercambiarlas sin copias.",
    "topic": "NativeCall e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-36",
    "collectionId": "raku",
    "question": "En Raku (NativeCall e interoperabilidad), ¿qué función técnica cumple «Callbacks hacia Raku»?",
    "options": [
      "Controla arreglos contiguos de bytes fijando quién es responsable de liberar su memoria.",
      "Verifica desplazamientos y relleno de campos en estructuras compuestas compartidas con C.",
      "Modela la disposición exacta en bytes de estructuras de C para intercambiarlas sin copias.",
      "Pasa clausuras del lenguaje como punteros de función hacia bibliotecas nativas externas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Callbacks hacia Raku (NativeCall e interoperabilidad): Pasa clausuras del lenguaje como punteros de función hacia bibliotecas nativas externas.",
    "topic": "NativeCall e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-37",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «Gestión de buffers» en nativecall e interoperabilidad?",
    "options": [
      "Controla arreglos contiguos de bytes fijando quién es responsable de liberar su memoria al operar.",
      "Pasa clausuras del lenguaje como punteros de función hacia bibliotecas nativas externas.",
      "Verifica desplazamientos y relleno de campos en estructuras compuestas compartidas con C.",
      "Modela la disposición exacta en bytes de estructuras de C para intercambiarlas sin copias."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Gestión de buffers (NativeCall e interoperabilidad): Controla arreglos contiguos de bytes fijando quién es responsable de liberar su memoria.",
    "topic": "NativeCall e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-38",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Compatibilidad ABI»?",
    "options": [
      "Pasa clausuras del lenguaje como punteros de función hacia bibliotecas nativas externas al operar.",
      "Alinea tamaños de enteros, punteros y convenciones de llamada con la plataforma subyacente.",
      "Controla arreglos contiguos de bytes fijando quién es responsable de liberar su memoria.",
      "Verifica desplazamientos y relleno de campos en estructuras compuestas compartidas con C."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Compatibilidad ABI (NativeCall e interoperabilidad): Alinea tamaños de enteros, punteros y convenciones de llamada con la plataforma subyacente.",
    "topic": "NativeCall e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-39",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «CStruct memory layout»?",
    "options": [
      "Pasa clausuras del lenguaje como punteros de función hacia bibliotecas nativas externas al operar.",
      "Controla arreglos contiguos de bytes fijando quién es responsable de liberar su memoria.",
      "Verifica desplazamientos y relleno de campos en estructuras compuestas compartidas con C.",
      "Modela la disposición exacta en bytes de estructuras de C para intercambiarlas sin copias."
    ],
    "correctAnswerIndex": 2,
    "explanation": "CStruct memory layout (NativeCall e interoperabilidad): Verifica desplazamientos y relleno de campos en estructuras compuestas compartidas con C.",
    "topic": "NativeCall e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-40",
    "collectionId": "raku",
    "question": "Respecto a nativecall e interoperabilidad en Raku, ¿cuál es el propósito de «Foreign memory ownership»?",
    "options": [
      "Modela la disposición exacta en bytes de estructuras de C para intercambiarlas sin copias al operar.",
      "Alinea tamaños de enteros, punteros y convenciones de llamada con la plataforma subyacente al operar.",
      "Verifica desplazamientos y relleno de campos en estructuras compuestas compartidas con C al operar.",
      "Distingue punteros administrados por el recolector frente a memoria que exige liberación manual."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Foreign memory ownership (NativeCall e interoperabilidad): Distingue punteros administrados por el recolector frente a memoria que exige liberación manual.",
    "topic": "NativeCall e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-41",
    "collectionId": "raku",
    "question": "En Raku (Módulos y distribución), ¿qué función técnica cumple «META6.json»?",
    "options": [
      "Declara nombre, autoría, versión, dependencias y archivos exportados por una distribución.",
      "Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz.",
      "Compila y enlaza unidades de código bajo demanda conservando artefactos precompilados.",
      "Permite cargar módulos exigiendo simultáneamente rango de versión y autoridad publicadora."
    ],
    "correctAnswerIndex": 0,
    "explanation": "META6.json (Módulos y distribución): Declara nombre, autoría, versión, dependencias y archivos exportados por una distribución.",
    "topic": "Módulos y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-42",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «Zef» en módulos y distribución?",
    "options": [
      "Declara nombre, autoría, versión, dependencias y archivos exportados por una distribución al operar.",
      "Resuelve dependencias, ejecuta pruebas e instala distribuciones desde catálogos o rutas locales.",
      "Permite cargar módulos exigiendo simultáneamente rango de versión y autoridad publicadora al operar.",
      "Organiza cadenas de almacenes locales y remotos donde el cargador busca unidades compiladas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Zef (Módulos y distribución): Resuelve dependencias, ejecuta pruebas e instala distribuciones desde catálogos o rutas locales.",
    "topic": "Módulos y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-43",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Repositorios de módulos»?",
    "options": [
      "Compila y enlaza unidades de código bajo demanda conservando artefactos precompilados al operar.",
      "Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz al operar.",
      "Organiza cadenas de almacenes locales y remotos donde el cargador busca unidades compiladas.",
      "Declara nombre, autoría, versión, dependencias y archivos exportados por una distribución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Repositorios de módulos (Módulos y distribución): Organiza cadenas de almacenes locales y remotos donde el cargador busca unidades compiladas.",
    "topic": "Módulos y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-44",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «Versiones y auth»?",
    "options": [
      "Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz al operar.",
      "Compila y enlaza unidades de código bajo demanda conservando artefactos precompilados.",
      "Declara nombre, autoría, versión, dependencias y archivos exportados por una distribución.",
      "Permite cargar módulos exigiendo simultáneamente rango de versión y autoridad publicadora."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Versiones y auth (Módulos y distribución): Permite cargar módulos exigiendo simultáneamente rango de versión y autoridad publicadora.",
    "topic": "Módulos y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-45",
    "collectionId": "raku",
    "question": "Respecto a módulos y distribución en Raku, ¿cuál es el propósito de «Compunits y carga dinámica»?",
    "options": [
      "Compila y enlaza unidades de código bajo demanda conservando artefactos precompilados.",
      "Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz.",
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Compunits y carga dinámica (Módulos y distribución): Compila y enlaza unidades de código bajo demanda conservando artefactos precompilados.",
    "topic": "Módulos y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-46",
    "collectionId": "raku",
    "question": "En Raku (Módulos y distribución), ¿qué función técnica cumple «CompUnit repositories»?",
    "options": [
      "Compila y enlaza unidades de código bajo demanda conservando artefactos precompilados al operar.",
      "Encadena repositorios de instalación y desarrollo para resolver cargas de módulos con caché.",
      "Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz al operar.",
      "Declara nombre, autoría, versión, dependencias y archivos exportados por una distribución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "CompUnit repositories (Módulos y distribución): Encadena repositorios de instalación y desarrollo para resolver cargas de módulos con caché.",
    "topic": "Módulos y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-47",
    "collectionId": "raku",
    "question": "Dentro de Raku, ¿cómo opera el mecanismo de «Version auth and api resolution» en módulos y distribución?",
    "options": [
      "Compila y enlaza unidades de código bajo demanda conservando artefactos precompilados.",
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito.",
      "Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Version auth and api resolution (Módulos y distribución): Selecciona la unidad exacta combinando filtros de autor, versión y nivel de interfaz.",
    "topic": "Módulos y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-48",
    "collectionId": "raku",
    "question": "Al trabajar con Raku, ¿qué responsabilidad define a «Specialization de MoarVM»?",
    "options": [
      "Almacena el bytecode precompilado de los módulos para acelerar el tiempo de arranque al operar.",
      "Registra qué marcos fueron compilados a código máquina y cuáles sufrieron desoptimización.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha al operar.",
      "Optimiza código caliente en tiempo de ejecución especializando tipos y llamadas frecuentes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Specialization de MoarVM (Operación sobre MoarVM): Optimiza código caliente en tiempo de ejecución especializando tipos y llamadas frecuentes.",
    "topic": "Operación sobre MoarVM",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-49",
    "collectionId": "raku",
    "question": "En la arquitectura de Raku, ¿qué caracteriza técnicamente a «JIT logging»?",
    "options": [
      "Registra qué marcos fueron compilados a código máquina y cuáles sufrieron desoptimización.",
      "Almacena el bytecode precompilado de los módulos para acelerar el tiempo de arranque.",
      "Optimiza código caliente en tiempo de ejecución especializando tipos y llamadas frecuentes.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "JIT logging (Operación sobre MoarVM): Registra qué marcos fueron compilados a código máquina y cuáles sufrieron desoptimización.",
    "topic": "Operación sobre MoarVM",
    "difficulty": "avanzado"
  },
  {
    "id": "raku-q-50",
    "collectionId": "raku",
    "question": "Respecto a operación sobre moarvm en Raku, ¿cuál es el propósito de «Precomp repositories»?",
    "options": [
      "Detecta colisiones entre firmas igualmente específicas y exige desempate explícito al operar.",
      "Almacena el bytecode precompilado de los módulos para acelerar el tiempo de arranque.",
      "Cierra automáticamente todas las suscripciones activas al salir del bloque reactivo.",
      "Registra una suscripción sobre un flujo asíncrono con control para cerrar la escucha."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Precomp repositories (Operación sobre MoarVM): Almacena el bytecode precompilado de los módulos para acelerar el tiempo de arranque.",
    "topic": "Operación sobre MoarVM",
    "difficulty": "avanzado"
  }
];
