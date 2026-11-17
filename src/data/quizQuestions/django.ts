import type { QuizQuestion } from "@/data/quizTypes";

export const djangoQuestions: QuizQuestion[] = [
  {
    "id": "django-q-01",
    "collectionId": "django",
    "question": "En Django (APIs con Django), ¿qué función técnica cumple «Pagination»?",
    "options": [
      "Divide colecciones extensas en páginas acotadas mediante cursores o desplazamientos controlados al operar.",
      "Ordena por una clave única desempate para que los cursores no salten ni dupliquen filas al operar.",
      "Restringe cuántas peticiones puede enviar una identidad o dirección en una ventana de tiempo.",
      "Genera y valida esquemas interactivos que documentan rutas, parámetros y respuestas de la API."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pagination (APIs con Django): Divide colecciones extensas en páginas acotadas mediante cursores o desplazamientos controlados.",
    "topic": "APIs con Django",
    "difficulty": "básico"
  },
  {
    "id": "django-q-02",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Rate limiting» en apis con django?",
    "options": [
      "Ordena por una clave única desempate para que los cursores no salten ni dupliquen filas al operar.",
      "Restringe cuántas peticiones puede enviar una identidad o dirección en una ventana de tiempo.",
      "Genera y valida esquemas interactivos que documentan rutas, parámetros y respuestas de la API.",
      "Devuelve respuestas sin cuerpo cuando la huella del recurso coincide con la caché del cliente."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Rate limiting (APIs con Django): Restringe cuántas peticiones puede enviar una identidad o dirección en una ventana de tiempo.",
    "topic": "APIs con Django",
    "difficulty": "básico"
  },
  {
    "id": "django-q-03",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «OpenAPI contracts»?",
    "options": [
      "Ordena por una clave única desempate para que los cursores no salten ni dupliquen filas al operar.",
      "Restringe cuántas peticiones puede enviar una identidad o dirección en una ventana de tiempo.",
      "Genera y valida esquemas interactivos que documentan rutas, parámetros y respuestas de la API.",
      "Devuelve respuestas sin cuerpo cuando la huella del recurso coincide con la caché del cliente."
    ],
    "correctAnswerIndex": 2,
    "explanation": "OpenAPI contracts (APIs con Django): Genera y valida esquemas interactivos que documentan rutas, parámetros y respuestas de la API.",
    "topic": "APIs con Django",
    "difficulty": "básico"
  },
  {
    "id": "django-q-04",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Conditional requests with ETags»?",
    "options": [
      "Ordena por una clave única desempate para que los cursores no salten ni dupliquen filas al operar.",
      "Restringe cuántas peticiones puede enviar una identidad o dirección en una ventana de tiempo.",
      "Genera y valida esquemas interactivos que documentan rutas, parámetros y respuestas de la API.",
      "Devuelve respuestas sin cuerpo cuando la huella del recurso coincide con la caché del cliente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Conditional requests with ETags (APIs con Django): Devuelve respuestas sin cuerpo cuando la huella del recurso coincide con la caché del cliente.",
    "topic": "APIs con Django",
    "difficulty": "básico"
  },
  {
    "id": "django-q-05",
    "collectionId": "django",
    "question": "Respecto a apis con django en Django, ¿cuál es el propósito de «Stable pagination contracts»?",
    "options": [
      "Ordena por una clave única desempate para que los cursores no salten ni dupliquen filas.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición.",
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada.",
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Stable pagination contracts (APIs con Django): Ordena por una clave única desempate para que los cursores no salten ni dupliquen filas.",
    "topic": "APIs con Django",
    "difficulty": "básico"
  },
  {
    "id": "django-q-06",
    "collectionId": "django",
    "question": "En Django (Procesamiento asíncrono), ¿qué función técnica cumple «Async views»?",
    "options": [
      "Registra una clave única por operación para ignorar entregas repetidas en trabajadores al operar.",
      "Atiende solicitudes concurrentes de entrada y salida sin bloquear hilos del servidor ASGI.",
      "Diseña tareas de fondo para que su reejecución tras un fallo no duplique efectos en datos.",
      "Lee eventos confirmados de la tabla de salida y los despacha con reintentos hacia la cola."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Async views (Procesamiento asíncrono): Atiende solicitudes concurrentes de entrada y salida sin bloquear hilos del servidor ASGI.",
    "topic": "Procesamiento asíncrono",
    "difficulty": "básico"
  },
  {
    "id": "django-q-07",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Async ORM boundaries» en procesamiento asíncrono?",
    "options": [
      "Registra una clave única por operación para ignorar entregas repetidas en trabajadores al operar.",
      "Atiende solicitudes concurrentes de entrada y salida sin bloquear hilos del servidor ASGI.",
      "Usa adaptadores seguros al cruzar entre vistas asíncronas y operaciones síncronas de datos.",
      "Diseña tareas de fondo para que su reejecución tras un fallo no duplique efectos en datos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Async ORM boundaries (Procesamiento asíncrono): Usa adaptadores seguros al cruzar entre vistas asíncronas y operaciones síncronas de datos.",
    "topic": "Procesamiento asíncrono",
    "difficulty": "básico"
  },
  {
    "id": "django-q-08",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «Task queues»?",
    "options": [
      "Registra una clave única por operación para ignorar entregas repetidas en trabajadores al operar.",
      "Atiende solicitudes concurrentes de entrada y salida sin bloquear hilos del servidor ASGI.",
      "Diseña tareas de fondo para que su reejecución tras un fallo no duplique efectos en datos.",
      "Delega trabajos pesados como envíos de correo o reportes a trabajadores fuera de la petición."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Task queues (Procesamiento asíncrono): Delega trabajos pesados como envíos de correo o reportes a trabajadores fuera de la petición.",
    "topic": "Procesamiento asíncrono",
    "difficulty": "básico"
  },
  {
    "id": "django-q-09",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Idempotent jobs»?",
    "options": [
      "Diseña tareas de fondo para que su reejecución tras un fallo no duplique efectos en datos.",
      "Registra una clave única por operación para ignorar entregas repetidas en trabajadores.",
      "Atiende solicitudes concurrentes de entrada y salida sin bloquear hilos del servidor ASGI.",
      "Lee eventos confirmados de la tabla de salida y los despacha con reintentos hacia la cola."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Idempotent jobs (Procesamiento asíncrono): Diseña tareas de fondo para que su reejecución tras un fallo no duplique efectos en datos.",
    "topic": "Procesamiento asíncrono",
    "difficulty": "básico"
  },
  {
    "id": "django-q-10",
    "collectionId": "django",
    "question": "Respecto a procesamiento asíncrono en Django, ¿cuál es el propósito de «Transactional outbox»?",
    "options": [
      "Usa adaptadores seguros al cruzar entre vistas asíncronas y operaciones síncronas de datos al operar.",
      "Guarda eventos pendientes en la misma unidad atómica relacional antes de publicarlos al corredor.",
      "Atiende solicitudes concurrentes de entrada y salida sin bloquear hilos del servidor ASGI al operar.",
      "Diseña tareas de fondo para que su reejecución tras un fallo no duplique efectos en datos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Transactional outbox (Procesamiento asíncrono): Guarda eventos pendientes en la misma transacción relacional antes de publicarlos al corredor.",
    "topic": "Procesamiento asíncrono",
    "difficulty": "básico"
  },
  {
    "id": "django-q-11",
    "collectionId": "django",
    "question": "En Django (Procesamiento asíncrono), ¿qué función técnica cumple «Task idempotency keys»?",
    "options": [
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición al operar.",
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada.",
      "Registra una clave única por operación para ignorar entregas repetidas en trabajadores.",
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Task idempotency keys (Procesamiento asíncrono): Registra una clave única por operación para ignorar entregas repetidas en trabajadores.",
    "topic": "Procesamiento asíncrono",
    "difficulty": "básico"
  },
  {
    "id": "django-q-12",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Durable outbox relay» en procesamiento asíncrono?",
    "options": [
      "Registra una clave única por operación para ignorar entregas repetidas en trabajadores al operar.",
      "Atiende solicitudes concurrentes de entrada y salida sin bloquear hilos del servidor ASGI.",
      "Diseña tareas de fondo para que su reejecución tras un fallo no duplique efectos en datos.",
      "Lee eventos confirmados de la tabla de salida y los despacha con reintentos hacia la cola."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Durable outbox relay (Procesamiento asíncrono): Lee eventos confirmados de la tabla de salida y los despacha con reintentos hacia la cola.",
    "topic": "Procesamiento asíncrono",
    "difficulty": "básico"
  },
  {
    "id": "django-q-13",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «TestCase y TransactionTestCase»?",
    "options": [
      "Elige entre envolver cada prueba en una unidad atómica rápida o confirmar cambios reales en tablas al operar.",
      "Modifica temporalmente variables de configuración durante una prueba y las restaura al salir.",
      "Construye instancias de modelos con datos válidos y relaciones mínimas para cada escenario al operar.",
      "Levanta un servidor real de prueba para validar flujos completos con interacciones en navegador."
    ],
    "correctAnswerIndex": 0,
    "explanation": "TestCase y TransactionTestCase (Testing): Elige entre envolver cada prueba en una transacción rápida o confirmar cambios reales en tablas.",
    "topic": "Testing",
    "difficulty": "básico"
  },
  {
    "id": "django-q-14",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Factories»?",
    "options": [
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL al operar.",
      "Construye instancias de modelos con datos válidos y relaciones mínimas para cada escenario.",
      "Fija relojes y zonas horarias explícitas en pruebas para evitar fallos por cambio de día.",
      "Modifica temporalmente variables de configuración durante una prueba y las restaura al salir."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Factories (Testing): Construye instancias de modelos con datos válidos y relaciones mínimas para cada escenario.",
    "topic": "Testing",
    "difficulty": "básico"
  },
  {
    "id": "django-q-15",
    "collectionId": "django",
    "question": "Respecto a testing en Django, ¿cuál es el propósito de «Override settings»?",
    "options": [
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL al operar.",
      "Fija relojes y zonas horarias explícitas en pruebas para evitar fallos por cambio de día.",
      "Modifica temporalmente variables de configuración durante una prueba y las restaura al salir.",
      "Construye instancias de modelos con datos válidos y relaciones mínimas para cada escenario."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Override settings (Testing): Modifica temporalmente variables de configuración durante una prueba y las restaura al salir.",
    "topic": "Testing",
    "difficulty": "básico"
  },
  {
    "id": "django-q-16",
    "collectionId": "django",
    "question": "En Django (Testing), ¿qué función técnica cumple «Database query assertions»?",
    "options": [
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición al operar.",
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada.",
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas.",
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Database query assertions (Testing): Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL.",
    "topic": "Testing",
    "difficulty": "básico"
  },
  {
    "id": "django-q-17",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Browser tests» en testing?",
    "options": [
      "Levanta un servidor real de prueba para validar flujos completos con interacciones en navegador al operar.",
      "Construye instancias de modelos con datos válidos y relaciones mínimas para cada escenario.",
      "Fija relojes y zonas horarias explícitas en pruebas para evitar fallos por cambio de día al operar.",
      "Modifica temporalmente variables de configuración durante una prueba y las restaura al salir."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Browser tests (Testing): Levanta un servidor real de prueba para validar flujos completos con interacciones en navegador.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-18",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «Database transaction test isolation»?",
    "options": [
      "Construye instancias de modelos con datos válidos y relaciones mínimas para cada escenario al operar.",
      "Revierte automáticamente los datos insertados al terminar cada prueba para mantener aislamiento.",
      "Fija relojes y zonas horarias explícitas en pruebas para evitar fallos por cambio de día al operar.",
      "Modifica temporalmente variables de configuración durante una prueba y las restaura al salir."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Database transaction test isolation (Testing): Revierte automáticamente los datos insertados al terminar cada prueba para mantener aislamiento.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-19",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Deterministic timezone fixtures»?",
    "options": [
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL al operar.",
      "Construye instancias de modelos con datos válidos y relaciones mínimas para cada escenario.",
      "Fija relojes y zonas horarias explícitas en pruebas para evitar fallos por cambio de día.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deterministic timezone fixtures (Testing): Fija relojes y zonas horarias explícitas en pruebas para evitar fallos por cambio de día.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-20",
    "collectionId": "django",
    "question": "Respecto a rendimiento en Django, ¿cuál es el propósito de «N+1 detection»?",
    "options": [
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición.",
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL.",
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada."
    ],
    "correctAnswerIndex": 3,
    "explanation": "N+1 detection (Rendimiento): Identifica bucles que disparan consultas adicionales por cada relación no precargada.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-21",
    "collectionId": "django",
    "question": "En Django (Rendimiento), ¿qué función técnica cumple «QuerySet evaluation»?",
    "options": [
      "Comprende cuándo una consulta perezosa se materializa realmente en memoria al iterar o cortar al operar.",
      "Mantiene conexiones persistentes reutilizables hacia el motor relacional entre peticiones.",
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas al operar.",
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "QuerySet evaluation (Rendimiento): Comprende cuándo una consulta perezosa se materializa realmente en memoria al iterar o cortar.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-22",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Connection pooling» en rendimiento?",
    "options": [
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada al operar.",
      "Mantiene conexiones persistentes reutilizables hacia el motor relacional entre peticiones.",
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas.",
      "Simula concurrencia realista de usuarios para medir latencia, saturación de colas y cuellos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Connection pooling (Rendimiento): Mantiene conexiones persistentes reutilizables hacia el motor relacional entre peticiones.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-23",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «Cache invalidation»?",
    "options": [
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas al operar.",
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada al operar.",
      "Purga o versiona claves almacenadas en memoria rápida cuando cambian los modelos subyacentes.",
      "Mantiene conexiones persistentes reutilizables hacia el motor relacional entre peticiones."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cache invalidation (Rendimiento): Purga o versiona claves almacenadas en memoria rápida cuando cambian los modelos subyacentes.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-24",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Load testing»?",
    "options": [
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas al operar.",
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada al operar.",
      "Mantiene conexiones persistentes reutilizables hacia el motor relacional entre peticiones.",
      "Simula concurrencia realista de usuarios para medir latencia, saturación de colas y cuellos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Load testing (Rendimiento): Simula concurrencia realista de usuarios para medir latencia, saturación de colas y cuellos.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-25",
    "collectionId": "django",
    "question": "Respecto a rendimiento en Django, ¿cuál es el propósito de «Query budget assertions»?",
    "options": [
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas.",
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición.",
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Query budget assertions (Rendimiento): Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-26",
    "collectionId": "django",
    "question": "En Django (Rendimiento), ¿qué función técnica cumple «Cache stampede controls»?",
    "options": [
      "Mantiene conexiones persistentes reutilizables hacia el motor relacional entre peticiones al operar.",
      "Evita que cientos de peticiones simultáneas recalculen la misma clave expirada al mismo tiempo.",
      "Simula concurrencia realista de usuarios para medir latencia, saturación de colas y cuellos.",
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cache stampede controls (Rendimiento): Evita que cientos de peticiones simultáneas recalculen la misma clave expirada al mismo tiempo.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-27",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Storage backends» en archivos y contenido?",
    "options": [
      "Procesa flujos de subida en fragmentos controlando memoria antes de persistir el archivo al operar.",
      "Verifica permisos del usuario y emite enlaces firmados temporales para archivos privados.",
      "Abstrae el guardado de archivos para alternar entre disco local y almacenamiento en la nube.",
      "Valida los bytes mágicos del archivo y envía cabeceras que impiden ejecutarlo como código."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Storage backends (Archivos y contenido): Abstrae el guardado de archivos para alternar entre disco local y almacenamiento en la nube.",
    "topic": "Archivos y contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-28",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «Upload handlers»?",
    "options": [
      "Verifica permisos del usuario y emite enlaces firmados temporales para archivos privados.",
      "Valida los bytes mágicos del archivo y envía cabeceras que impiden ejecutarlo como código.",
      "Aborta la recepción de cargas que exceden el tamaño máximo permitido antes de llenar disco.",
      "Procesa flujos de subida en fragmentos controlando memoria antes de persistir el archivo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Upload handlers (Archivos y contenido): Procesa flujos de subida en fragmentos controlando memoria antes de persistir el archivo.",
    "topic": "Archivos y contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-29",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Media authorization»?",
    "options": [
      "Verifica permisos del usuario y emite enlaces firmados temporales para archivos privados al operar.",
      "Procesa flujos de subida en fragmentos controlando memoria antes de persistir el archivo.",
      "Valida los bytes mágicos del archivo y envía cabeceras que impiden ejecutarlo como código.",
      "Aborta la recepción de cargas que exceden el tamaño máximo permitido antes de llenar disco."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Media authorization (Archivos y contenido): Verifica permisos del usuario y emite enlaces firmados temporales para archivos privados.",
    "topic": "Archivos y contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-30",
    "collectionId": "django",
    "question": "Respecto a archivos y contenido en Django, ¿cuál es el propósito de «Image processing isolation»?",
    "options": [
      "Procesa flujos de subida en fragmentos controlando memoria antes de persistir el archivo al operar.",
      "Valida dimensiones y procesa imágenes subidas en trabajadores aislados con límites de memoria.",
      "Verifica permisos del usuario y emite enlaces firmados temporales para archivos privados al operar.",
      "Valida los bytes mágicos del archivo y envía cabeceras que impiden ejecutarlo como código."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Image processing isolation (Archivos y contenido): Valida dimensiones y procesa imágenes subidas en trabajadores aislados con límites de memoria.",
    "topic": "Archivos y contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-31",
    "collectionId": "django",
    "question": "En Django (Archivos y contenido), ¿qué función técnica cumple «Static asset hashing»?",
    "options": [
      "Valida los bytes mágicos del archivo y envía cabeceras que impiden ejecutarlo como código al operar.",
      "Procesa flujos de subida en fragmentos controlando memoria antes de persistir el archivo al operar.",
      "Agrega una huella del contenido al nombre de cada archivo estático para cachearlo sin caducidad.",
      "Verifica permisos del usuario y emite enlaces firmados temporales para archivos privados al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Static asset hashing (Archivos y contenido): Agrega una huella del contenido al nombre de cada archivo estático para cachearlo sin caducidad.",
    "topic": "Archivos y contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-32",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Upload handler size limits» en archivos y contenido?",
    "options": [
      "Procesa flujos de subida en fragmentos controlando memoria antes de persistir el archivo al operar.",
      "Verifica permisos del usuario y emite enlaces firmados temporales para archivos privados.",
      "Valida los bytes mágicos del archivo y envía cabeceras que impiden ejecutarlo como código.",
      "Aborta la recepción de cargas que exceden el tamaño máximo permitido antes de llenar disco."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Upload handler size limits (Archivos y contenido): Aborta la recepción de cargas que exceden el tamaño máximo permitido antes de llenar disco.",
    "topic": "Archivos y contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-33",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «Content-type sniffing defenses»?",
    "options": [
      "Valida los bytes mágicos del archivo y envía cabeceras que impiden ejecutarlo como código.",
      "Procesa flujos de subida en fragmentos controlando memoria antes de persistir el archivo.",
      "Verifica permisos del usuario y emite enlaces firmados temporales para archivos privados.",
      "Aborta la recepción de cargas que exceden el tamaño máximo permitido antes de llenar disco."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Content-type sniffing defenses (Archivos y contenido): Valida los bytes mágicos del archivo y envía cabeceras que impiden ejecutarlo como código.",
    "topic": "Archivos y contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-34",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Translation catalogs»?",
    "options": [
      "Adapta la representación de fechas, monedas y separadores decimales a la región activa al operar.",
      "Extrae y compila archivos de mensajes traducibles para servir la interfaz en varios idiomas.",
      "Vincula mensajes de validación mediante atributos accesibles para lectores de pantalla al operar.",
      "Determina el idioma activo inspeccionando prefijo de URL, sesión, cookie y cabecera HTTP."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Translation catalogs (Internacionalización y accesibilidad): Extrae y compila archivos de mensajes traducibles para servir la interfaz en varios idiomas.",
    "topic": "Internacionalización y accesibilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "django-q-35",
    "collectionId": "django",
    "question": "Respecto a internacionalización y accesibilidad en Django, ¿cuál es el propósito de «Lazy translations»?",
    "options": [
      "Extrae y compila archivos de mensajes traducibles para servir la interfaz en varios idiomas al operar.",
      "Almacena fechas en tiempo universal coordinado y las convierte a la zona activa del usuario al operar.",
      "Pospone la traducción de cadenas definidas al importar módulos hasta que se renderiza la petición.",
      "Asocia errores de validación al campo correspondiente y al resumen general del formulario al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Lazy translations (Internacionalización y accesibilidad): Pospone la traducción de cadenas definidas al importar módulos hasta que se renderiza la petición.",
    "topic": "Internacionalización y accesibilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-36",
    "collectionId": "django",
    "question": "En Django (Internacionalización y accesibilidad), ¿qué función técnica cumple «Time zones»?",
    "options": [
      "Adapta la representación de fechas, monedas y separadores decimales a la región activa al operar.",
      "Vincula mensajes de validación mediante atributos accesibles para lectores de pantalla al operar.",
      "Determina el idioma activo inspeccionando prefijo de URL, sesión, cookie y cabecera HTTP.",
      "Almacena fechas en tiempo universal coordinado y las convierte a la zona activa del usuario."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Time zones (Internacionalización y accesibilidad): Almacena fechas en tiempo universal coordinado y las convierte a la zona activa del usuario.",
    "topic": "Internacionalización y accesibilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-37",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Locale-aware formats» en internacionalización y accesibilidad?",
    "options": [
      "Adapta la representación de fechas, monedas y separadores decimales a la región activa al operar.",
      "Vincula mensajes de validación mediante atributos accesibles para lectores de pantalla.",
      "Determina el idioma activo inspeccionando prefijo de URL, sesión, cookie y cabecera HTTP.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Locale-aware formats (Internacionalización y accesibilidad): Adapta la representación de fechas, monedas y separadores decimales a la región activa.",
    "topic": "Internacionalización y accesibilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-38",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «Form error semantics»?",
    "options": [
      "Adapta la representación de fechas, monedas y separadores decimales a la región activa al operar.",
      "Asocia errores de validación al campo correspondiente y al resumen general del formulario.",
      "Vincula mensajes de validación mediante atributos accesibles para lectores de pantalla.",
      "Determina el idioma activo inspeccionando prefijo de URL, sesión, cookie y cabecera HTTP."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Form error semantics (Internacionalización y accesibilidad): Asocia errores de validación al campo correspondiente y al resumen general del formulario.",
    "topic": "Internacionalización y accesibilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-39",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Language negotiation»?",
    "options": [
      "Adapta la representación de fechas, monedas y separadores decimales a la región activa al operar.",
      "Vincula mensajes de validación mediante atributos accesibles para lectores de pantalla.",
      "Determina el idioma activo inspeccionando prefijo de URL, sesión, cookie y cabecera HTTP.",
      "Asocia errores de validación al campo correspondiente y al resumen general del formulario."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Language negotiation (Internacionalización y accesibilidad): Determina el idioma activo inspeccionando prefijo de URL, sesión, cookie y cabecera HTTP.",
    "topic": "Internacionalización y accesibilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-40",
    "collectionId": "django",
    "question": "Respecto a internacionalización y accesibilidad en Django, ¿cuál es el propósito de «Form error announcement»?",
    "options": [
      "Adapta la representación de fechas, monedas y separadores decimales a la región activa.",
      "Determina el idioma activo inspeccionando prefijo de URL, sesión, cookie y cabecera HTTP.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición.",
      "Vincula mensajes de validación mediante atributos accesibles para lectores de pantalla."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Form error announcement (Internacionalización y accesibilidad): Vincula mensajes de validación mediante atributos accesibles para lectores de pantalla.",
    "topic": "Internacionalización y accesibilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-41",
    "collectionId": "django",
    "question": "En Django (Observabilidad), ¿qué función técnica cumple «Request correlation»?",
    "options": [
      "Asigna un identificador único a cada solicitud entrante y lo propaga a bitácoras y tareas.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición.",
      "Registra el plan de ejecución y origen de las consultas que superan el umbral de latencia.",
      "Emite eventos en formato clave-valor con contexto de usuario, ruta y duración de respuesta."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Request correlation (Observabilidad): Asigna un identificador único a cada solicitud entrante y lo propaga a bitácoras y tareas.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-42",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Structured logging» en observabilidad?",
    "options": [
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición al operar.",
      "Emite eventos en formato clave-valor con contexto de usuario, ruta y duración de respuesta.",
      "Asigna un identificador único a cada solicitud entrante y lo propaga a bitácoras y tareas.",
      "Registra el plan de ejecución y origen de las consultas que superan el umbral de latencia."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Structured logging (Observabilidad): Emite eventos en formato clave-valor con contexto de usuario, ruta y duración de respuesta.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-43",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «Error reporting»?",
    "options": [
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición al operar.",
      "Asigna un identificador único a cada solicitud entrante y lo propaga a bitácoras y tareas.",
      "Captura excepciones no controladas filtrando datos sensibles antes de notificar al monitor.",
      "Registra el plan de ejecución y origen de las consultas que superan el umbral de latencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Error reporting (Observabilidad): Captura excepciones no controladas filtrando datos sensibles antes de notificar al monitor.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-44",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Database tracing»?",
    "options": [
      "Asigna un identificador único a cada solicitud entrante y lo propaga a bitácoras y tareas al operar.",
      "Registra el plan de ejecución y origen de las consultas que superan el umbral de latencia al operar.",
      "Emite eventos en formato clave-valor con contexto de usuario, ruta y duración de respuesta.",
      "Instrumenta el conector relacional para medir duración y parámetros de cada consulta ejecutada."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Database tracing (Observabilidad): Instrumenta el conector relacional para medir duración y parámetros de cada consulta ejecutada.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-45",
    "collectionId": "django",
    "question": "Respecto a observabilidad en Django, ¿cuál es el propósito de «Health y readiness checks»?",
    "options": [
      "Distingue entre una sonda ligera de proceso vivo y una verificación de dependencias listas al operar.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición al operar.",
      "Asigna un identificador único a cada solicitud entrante y lo propaga a bitácoras y tareas.",
      "Registra el plan de ejecución y origen de las consultas que superan el umbral de latencia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Health y readiness checks (Observabilidad): Distingue entre una sonda ligera de proceso vivo y una verificación de dependencias listas.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-46",
    "collectionId": "django",
    "question": "En Django (Observabilidad), ¿qué función técnica cumple «Trace-correlation middleware»?",
    "options": [
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada.",
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición.",
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL.",
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Trace-correlation middleware (Observabilidad): Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-47",
    "collectionId": "django",
    "question": "Dentro de Django, ¿cómo opera el mecanismo de «Slow-query sampling» en observabilidad?",
    "options": [
      "Extrae o genera cabeceras de traza distribuida al inicio del ciclo de cada petición al operar.",
      "Asigna un identificador único a cada solicitud entrante y lo propaga a bitácoras y tareas.",
      "Registra el plan de ejecución y origen de las consultas que superan el umbral de latencia.",
      "Emite eventos en formato clave-valor con contexto de usuario, ruta y duración de respuesta."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slow-query sampling (Observabilidad): Registra el plan de ejecución y origen de las consultas que superan el umbral de latencia.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-48",
    "collectionId": "django",
    "question": "Al trabajar con Django, ¿qué responsabilidad define a «Zero-downtime migrations»?",
    "options": [
      "Drena las tareas en curso y recicla procesos trabajadores periódicamente para evitar fugas al operar.",
      "Reúne y comprime los activos estáticos de todas las aplicaciones antes de publicar la versión.",
      "Ordena por una clave única desempate para que los cursores no salten ni dupliquen filas al operar.",
      "Separa cambios de esquema en fases compatibles de expansión y contracción sin bloquear tablas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Zero-downtime migrations (Entrega y evolución): Separa cambios de esquema en fases compatibles de expansión y contracción sin bloquear tablas.",
    "topic": "Entrega y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-49",
    "collectionId": "django",
    "question": "En la arquitectura de Django, ¿qué caracteriza técnicamente a «Collectstatic deployment»?",
    "options": [
      "Reúne y comprime los activos estáticos de todas las aplicaciones antes de publicar la versión.",
      "Drena las tareas en curso y recicla procesos trabajadores periódicamente para evitar fugas.",
      "Separa cambios de esquema en fases compatibles de expansión y contracción sin bloquear tablas.",
      "Ordena por una clave única desempate para que los cursores no salten ni dupliquen filas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Collectstatic deployment (Entrega y evolución): Reúne y comprime los activos estáticos de todas las aplicaciones antes de publicar la versión.",
    "topic": "Entrega y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "django-q-50",
    "collectionId": "django",
    "question": "Respecto a entrega y evolución en Django, ¿cuál es el propósito de «Worker lifecycle»?",
    "options": [
      "Identifica bucles que disparan consultas adicionales por cada relación no precargada al operar.",
      "Drena las tareas en curso y recicla procesos trabajadores periódicamente para evitar fugas.",
      "Verifica que una vista o servicio ejecute un número exacto y acotado de consultas SQL al operar.",
      "Falla la prueba automáticamente si un endpoint supera el tope de consultas permitidas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Worker lifecycle (Entrega y evolución): Drena las tareas en curso y recicla procesos trabajadores periódicamente para evitar fugas.",
    "topic": "Entrega y evolución",
    "difficulty": "avanzado"
  }
];
