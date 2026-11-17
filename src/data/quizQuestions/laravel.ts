import type { QuizQuestion } from "@/data/quizTypes";

export const laravelQuestions: QuizQuestion[] = [
  {
    "id": "laravel-q-01",
    "collectionId": "laravel",
    "question": "En Laravel (Ciclo y contenedor), ¿qué función técnica cumple «Request lifecycle»?",
    "options": [
      "Sigue bootstrap, kernel, middleware, ruta, respuesta y terminación manteniendo consistencia.",
      "Inyecta implementaciones distintas según la clase que solicita la dependencia al operar.",
      "Registra servicios y ejecutan boot cuando el contenedor ya está preparado en el flujo.",
      "Ofrecen proxies estáticos a servicios del contenedor sin eliminar sus dependencias reales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Request lifecycle (Ciclo y contenedor): Sigue bootstrap, kernel, middleware, ruta, respuesta y terminación.",
    "topic": "Ciclo y contenedor",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-02",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Service container» en ciclo y contenedor?",
    "options": [
      "Inyecta implementaciones distintas según la clase que solicita la dependencia en el flujo.",
      "Resuelve dependencias por bindings, interfaces y contexto bajo condiciones productivas.",
      "Registra servicios y ejecutan boot cuando el contenedor ya está preparado en ejecución.",
      "Combina archivos y entorno con cache de configuración en producción de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Service container (Ciclo y contenedor): Resuelve dependencias por bindings, interfaces y contexto.",
    "topic": "Ciclo y contenedor",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-03",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «Service providers»?",
    "options": [
      "Inyecta implementaciones distintas según la clase que solicita la dependencia en ejecución.",
      "Ofrecen proxies estáticos a servicios del contenedor sin eliminar sus dependencias reales.",
      "Registra servicios y ejecutan boot cuando el contenedor ya está preparado con precisión.",
      "Combina archivos y entorno con cache de configuración en producción de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Service providers (Ciclo y contenedor): Registran servicios y ejecutan boot cuando el contenedor ya está preparado.",
    "topic": "Ciclo y contenedor",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-04",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Configuration»?",
    "options": [
      "Inyecta implementaciones distintas según la clase que solicita la dependencia en el flujo.",
      "Registra servicios y ejecutan boot cuando el contenedor ya está preparado en ejecución.",
      "Sigue bootstrap, kernel, middleware, ruta, respuesta y terminación de modo predecible.",
      "Combina archivos y entorno con cache de configuración en producción de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Configuration (Ciclo y contenedor): Combina archivos y entorno con cache de configuración en producción.",
    "topic": "Ciclo y contenedor",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-05",
    "collectionId": "laravel",
    "question": "Respecto a ciclo y contenedor en Laravel, ¿cuál es el propósito de «Facades»?",
    "options": [
      "Ofrecen proxies estáticos a servicios del contenedor sin eliminar sus dependencias reales.",
      "Inyecta implementaciones distintas según la clase que solicita la dependencia al operar.",
      "Registra servicios y ejecutan boot cuando el contenedor ya está preparado con precisión.",
      "Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Facades (Ciclo y contenedor): Ofrecen proxies estáticos a servicios del contenedor sin eliminar sus dependencias reales.",
    "topic": "Ciclo y contenedor",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-06",
    "collectionId": "laravel",
    "question": "En Laravel (Ciclo y contenedor), ¿qué función técnica cumple «Contextual Binding y DI condicional»?",
    "options": [
      "Registra servicios y ejecutan boot cuando el contenedor ya está preparado dentro del flujo.",
      "Inyecta implementaciones distintas según la clase que solicita la dependencia al operar.",
      "Ofrecen proxies estáticos a servicios del contenedor sin eliminar sus dependencias reales.",
      "Combina archivos y entorno con cache de configuración en producción de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Contextual Binding y DI condicional (Ciclo y contenedor): Inyecta implementaciones distintas según la clase que solicita la dependencia.",
    "topic": "Ciclo y contenedor",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-07",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Routing» en http y entrada?",
    "options": [
      "Transforma modelos a contratos de respuesta sin filtrar columnas por accidente en el flujo.",
      "Aplica limitadores throttle con claves por IP, usuario autenticado o tenant en el flujo.",
      "Relaciona URL y parámetros con handlers y modelos autorizables manteniendo consistencia.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Routing y model binding (HTTP y entrada): Relaciona URL y parámetros con handlers y modelos autorizables.",
    "topic": "HTTP y entrada",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-08",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «Middleware»?",
    "options": [
      "Transforma modelos a contratos de respuesta sin filtrar columnas por accidente al operar.",
      "Aplica limitadores throttle con claves por IP, usuario autenticado o tenant al operar.",
      "Mapea entidades polimórficas desacoplando nombres de clases de la base de datos al operar.",
      "Aplica concerns transversales en orden visible dentro del ciclo operativo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Middleware (HTTP y entrada): Aplica concerns transversales en orden visible.",
    "topic": "HTTP y entrada",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-09",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Form Requests»?",
    "options": [
      "Agrupa autorización, normalización y validación de entrada manteniendo la trazabilidad técnica.",
      "Transforma modelos a contratos de respuesta sin filtrar columnas por accidente al operar.",
      "Aplica limitadores throttle con claves por IP, usuario autenticado o tenant al operar.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Form Requests (HTTP y entrada): Agrupa autorización, normalización y validación de entrada.",
    "topic": "HTTP y entrada",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-10",
    "collectionId": "laravel",
    "question": "Respecto a http y entrada en Laravel, ¿cuál es el propósito de «Controllers y actions»?",
    "options": [
      "Transforma modelos a contratos de respuesta sin filtrar columnas por accidente al evaluar.",
      "Orquestan un caso sin absorber todas las reglas del dominio respetando las invariantes.",
      "Aplica limitadores throttle con claves por IP, usuario autenticado o tenant al evaluar.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Controllers y actions (HTTP y entrada): Orquestan un caso sin absorber todas las reglas del dominio.",
    "topic": "HTTP y entrada",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-11",
    "collectionId": "laravel",
    "question": "En Laravel (HTTP y entrada), ¿qué función técnica cumple «Resources»?",
    "options": [
      "Aplica limitadores throttle con claves por IP, usuario autenticado o tenant de forma segura.",
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP al operar.",
      "Transforma modelos a contratos de respuesta sin filtrar columnas por accidente al operar.",
      "Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Resources (HTTP y entrada): Transforman modelos a contratos de respuesta sin filtrar columnas por accidente.",
    "topic": "HTTP y entrada",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-12",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Rate Limiting por middleware» en http y entrada?",
    "options": [
      "Transforma modelos a contratos de respuesta sin filtrar columnas por accidente en el flujo.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas al operar.",
      "Aplica limitadores throttle con claves por IP, usuario autenticado o tenant en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Rate Limiting por middleware (HTTP y entrada): Aplica limitadores throttle con claves por IP, usuario autenticado o tenant.",
    "topic": "HTTP y entrada",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-13",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «Eloquent models»?",
    "options": [
      "Mapean filas y relaciones mediante Active Record y convenciones dentro de la aplicación.",
      "Genera estados reproducibles y datos deterministas para pruebas y desarrollo al operar.",
      "Hace atómica una unidad de persistencia y reintentan deadlocks con criterio al operar.",
      "Versionan cambios de esquema compatibles con el orden real de despliegue en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Eloquent models (Datos y consistencia): Mapean filas y relaciones mediante Active Record y convenciones.",
    "topic": "Datos y consistencia",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-14",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Query builder»?",
    "options": [
      "Genera estados reproducibles y datos deterministas para pruebas y desarrollo con precisión.",
      "Construye consultas parametrizadas y permite inspeccionar SQL y planes dentro del flujo.",
      "Hace atómica una unidad de persistencia y reintentan deadlocks con criterio en el flujo.",
      "Versionan cambios de esquema compatibles con el orden real de despliegue de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Query builder (Datos y consistencia): Construye consultas parametrizadas y permite inspeccionar SQL y planes.",
    "topic": "Datos y consistencia",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-15",
    "collectionId": "laravel",
    "question": "Respecto a datos y consistencia en Laravel, ¿cuál es el propósito de «Relationships»?",
    "options": [
      "Genera estados reproducibles y datos deterministas para pruebas y desarrollo en ejecución.",
      "Hace atómica una unidad de persistencia y reintentan deadlocks con criterio al evaluar.",
      "Expresa asociación y exigen controlar eager loading para evitar N+1 de modo predecible.",
      "Versionan cambios de esquema compatibles con el orden real de despliegue con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Relationships (Datos y consistencia): Expresan asociación y exigen controlar eager loading para evitar N+1.",
    "topic": "Datos y consistencia",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-16",
    "collectionId": "laravel",
    "question": "En Laravel (Datos y consistencia), ¿qué función técnica cumple «Transactions»?",
    "options": [
      "Genera estados reproducibles y datos deterministas para pruebas y desarrollo con precisión.",
      "Versionan cambios de esquema compatibles con el orden real de despliegue de forma clara.",
      "Construye consultas parametrizadas y permite inspeccionar SQL y planes dentro del flujo.",
      "Hace atómica una unidad de persistencia y reintentan deadlocks con criterio en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Transactions (Datos y consistencia): Hacen atómica una unidad de persistencia y reintentan deadlocks con criterio.",
    "topic": "Datos y consistencia",
    "difficulty": "básico"
  },
  {
    "id": "laravel-q-17",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Migrations» en datos y consistencia?",
    "options": [
      "Versionan cambios de esquema compatibles con el orden real de despliegue de forma clara.",
      "Genera estados reproducibles y datos deterministas para pruebas y desarrollo al operar.",
      "Hace atómica una unidad de persistencia y reintentan deadlocks con criterio al operar.",
      "Construye consultas parametrizadas y permite inspeccionar SQL y planes de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Migrations (Datos y consistencia): Versionan cambios de esquema compatibles con el orden real de despliegue.",
    "topic": "Datos y consistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-18",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «Database Seeders y Model Factories»?",
    "options": [
      "Hace atómica una unidad de persistencia y reintentan deadlocks con criterio de forma clara.",
      "Genera estados reproducibles y datos deterministas para pruebas y desarrollo al evaluar.",
      "Versionan cambios de esquema compatibles con el orden real de despliegue de forma clara.",
      "Construye consultas parametrizadas y permite inspeccionar SQL y planes dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Database Seeders y Model Factories (Datos y consistencia): Genera estados reproducibles y datos deterministas para pruebas y desarrollo.",
    "topic": "Datos y consistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-19",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Authentication»?",
    "options": [
      "Protege solicitudes con estado sin confundir navegador y API tokenizada sin perder estado.",
      "Gestiona códigos TOTP, claves de recuperación y renovación de sesión sin perder estado.",
      "Determina identidad mediante guards y providers apropiados al canal de modo predecible.",
      "Distingue verificación irreversible de confidencialidad reversible de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Authentication (Identidad y seguridad): Determina identidad mediante guards y providers apropiados al canal.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-20",
    "collectionId": "laravel",
    "question": "Respecto a identidad y seguridad en Laravel, ¿cuál es el propósito de «Gates y policies»?",
    "options": [
      "Protege solicitudes con estado sin confundir navegador y API tokenizada sin perder estado.",
      "Gestiona códigos TOTP, claves de recuperación y renovación de sesión sin perder estado.",
      "Determina identidad mediante guards y providers apropiados al canal de modo predecible.",
      "Autoriza acciones sobre recursos en una frontera reutilizable manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Gates y policies (Identidad y seguridad): Autorizan acciones sobre recursos en una frontera reutilizable.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-21",
    "collectionId": "laravel",
    "question": "En Laravel (Identidad y seguridad), ¿qué función técnica cumple «CSRF y sessions»?",
    "options": [
      "Protege solicitudes con estado sin confundir navegador y API tokenizada de forma segura.",
      "Gestiona códigos TOTP, claves de recuperación y renovación de sesión dentro del flujo.",
      "Determina identidad mediante guards y providers apropiados al canal sin perder estado.",
      "Distingue verificación irreversible de confidencialidad reversible de modo predecible."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CSRF y sessions (Identidad y seguridad): Protegen solicitudes con estado sin confundir navegador y API tokenizada.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-22",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Mass assignment» en identidad y seguridad?",
    "options": [
      "Protege solicitudes con estado sin confundir navegador y API tokenizada de modo predecible.",
      "Restringe atributos aceptables aunque la validación exista bajo condiciones productivas.",
      "Gestiona códigos TOTP, claves de recuperación y renovación de sesión de modo predecible.",
      "Determina identidad mediante guards y providers apropiados al canal de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mass assignment (Identidad y seguridad): Restringe atributos aceptables aunque la validación exista.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-23",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «Hashing y encryption»?",
    "options": [
      "Protege solicitudes con estado sin confundir navegador y API tokenizada de modo predecible.",
      "Gestiona códigos TOTP, claves de recuperación y renovación de sesión de modo predecible.",
      "Distingue verificación irreversible de confidencialidad reversible durante la ejecución.",
      "Determina identidad mediante guards y providers apropiados al canal de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Hashing y encryption (Identidad y seguridad): Distingue verificación irreversible de confidencialidad reversible.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-24",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Two-Factor Authentication y sesiones seguras»?",
    "options": [
      "Protege solicitudes con estado sin confundir navegador y API tokenizada de modo predecible.",
      "Determina identidad mediante guards y providers apropiados al canal de modo predecible.",
      "Distingue verificación irreversible de confidencialidad reversible durante la ejecución.",
      "Gestiona códigos TOTP, claves de recuperación y renovación de sesión de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Two-Factor Authentication y sesiones seguras (Identidad y seguridad): Gestiona códigos TOTP, claves de recuperación y renovación de sesión.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-25",
    "collectionId": "laravel",
    "question": "Respecto a trabajo asíncrono en Laravel, ¿cuál es el propósito de «Events y listeners»?",
    "options": [
      "Publican hechos y separa reacciones sin garantizar por sí solos entrega sin degradar el flujo.",
      "Persisten trabajo con intentos, timeout, backoff y serialización controlados al operar.",
      "Encadena trabajos secuenciales o coordina lotes paralelos con callbacks de finalización.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Events y listeners (Trabajo asíncrono): Publican hechos y separan reacciones sin garantizar por sí solos entrega.",
    "topic": "Trabajo asíncrono",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-26",
    "collectionId": "laravel",
    "question": "En Laravel (Trabajo asíncrono), ¿qué función técnica cumple «Queues y jobs»?",
    "options": [
      "Encadena trabajos secuenciales o coordina lotes paralelos con callbacks de finalización.",
      "Persisten trabajo con intentos, timeout, backoff y serialización controlados al evaluar.",
      "Publican hechos y separa reacciones sin garantizar por sí solos entrega de forma segura.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Queues y jobs (Trabajo asíncrono): Persisten trabajo con intentos, timeout, backoff y serialización controlados.",
    "topic": "Trabajo asíncrono",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-27",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Failed jobs» en trabajo asíncrono?",
    "options": [
      "Persisten trabajo con intentos, timeout, backoff y serialización controlados en ejecución.",
      "Encadena trabajos secuenciales o coordina lotes paralelos con callbacks de finalización.",
      "Conservan evidencia y permite recuperación manual o automatizada sin degradar el flujo.",
      "Publican hechos y separa reacciones sin garantizar por sí solos entrega de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Failed jobs (Trabajo asíncrono): Conservan evidencia y permiten recuperación manual o automatizada.",
    "topic": "Trabajo asíncrono",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-28",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «Scheduler»?",
    "options": [
      "Persisten trabajo con intentos, timeout, backoff y serialización controlados en ejecución.",
      "Encadena trabajos secuenciales o coordina lotes paralelos con callbacks de finalización.",
      "Publican hechos y separa reacciones sin garantizar por sí solos entrega de forma clara.",
      "Declara recurrencia con locks y coordinación entre réplicas respetando las invariantes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Scheduler (Trabajo asíncrono): Declara recurrencia con locks y coordinación entre réplicas.",
    "topic": "Trabajo asíncrono",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-29",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Cache y locks»?",
    "options": [
      "Reduce trabajo y coordina exclusión con TTL y fallbacks definidos manteniendo consistencia.",
      "Persisten trabajo con intentos, timeout, backoff y serialización controlados al operar.",
      "Encadena trabajos secuenciales o coordina lotes paralelos con callbacks de finalización.",
      "Publican hechos y separa reacciones sin garantizar por sí solos entrega con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cache y locks (Trabajo asíncrono): Reduce trabajo y coordina exclusión con TTL y fallbacks definidos.",
    "topic": "Trabajo asíncrono",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-30",
    "collectionId": "laravel",
    "question": "Respecto a trabajo asíncrono en Laravel, ¿cuál es el propósito de «Queue Batches y Chains»?",
    "options": [
      "Persisten trabajo con intentos, timeout, backoff y serialización controlados con precisión.",
      "Encadena trabajos secuenciales o coordina lotes paralelos con callbacks de finalización.",
      "Publican hechos y separa reacciones sin garantizar por sí solos entrega de forma segura.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Queue Batches y Chains (Trabajo asíncrono): Encadena trabajos secuenciales o coordina lotes paralelos con callbacks de finalización.",
    "topic": "Trabajo asíncrono",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-31",
    "collectionId": "laravel",
    "question": "En Laravel (Calidad y producción), ¿qué función técnica cumple «Feature y unit tests»?",
    "options": [
      "Escribe suites de tests concisas con sintaxis declarativa y datasets dinámicos en el flujo.",
      "Coordina caches, workers, migraciones y health checks sin perder jobs sin perder estado.",
      "Prueba el borde HTTP y reglas aisladas con diferente costo bajo condiciones productivas.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Feature y unit tests (Calidad y producción): Prueban el borde HTTP y reglas aisladas con diferente costo.",
    "topic": "Calidad y producción",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-32",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Database testing» en calidad y producción?",
    "options": [
      "Escribe suites de tests concisas con sintaxis declarativa y datasets dinámicos en el flujo.",
      "Coordina caches, workers, migraciones y health checks sin perder jobs sin perder estado.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Controla fixtures, transacciones y motores representativos bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Database testing (Calidad y producción): Controla fixtures, transacciones y motores representativos.",
    "topic": "Calidad y producción",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-33",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «Logging y tracing»?",
    "options": [
      "Correlaciona solicitud, job, consulta y servicio externo respetando las restricciones de tipo.",
      "Escribe suites de tests concisas con sintaxis declarativa y datasets dinámicos al operar.",
      "Coordina caches, workers, migraciones y health checks sin perder jobs de forma segura.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Logging y tracing (Calidad y producción): Correlaciona solicitud, job, consulta y servicio externo.",
    "topic": "Calidad y producción",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-34",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Octane y procesos persistentes»?",
    "options": [
      "Escribe suites de tests concisas con sintaxis declarativa y datasets dinámicos en ejecución.",
      "Evita filtrar estado de una solicitud a la siguiente manteniendo la trazabilidad técnica.",
      "Coordina caches, workers, migraciones y health checks sin perder jobs de modo predecible.",
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Octane y procesos persistentes (Calidad y producción): Evita filtrar estado de una solicitud a la siguiente.",
    "topic": "Calidad y producción",
    "difficulty": "intermedio"
  },
  {
    "id": "laravel-q-35",
    "collectionId": "laravel",
    "question": "Respecto a calidad y producción en Laravel, ¿cuál es el propósito de «Deploy y maintenance»?",
    "options": [
      "Escribe suites de tests concisas con sintaxis declarativa y datasets dinámicos en el flujo.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Coordina caches, workers, migraciones y health checks sin perder jobs sin perder estado.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deploy y maintenance (Calidad y producción): Coordina caches, workers, migraciones y health checks sin perder jobs.",
    "topic": "Calidad y producción",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-36",
    "collectionId": "laravel",
    "question": "En Laravel (Calidad y producción), ¿qué función técnica cumple «Pest PHP y pruebas expresivas»?",
    "options": [
      "Coordina caches, workers, migraciones y health checks sin perder jobs sin degradar el flujo.",
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP al operar.",
      "Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept al operar.",
      "Escribe suites de tests concisas con sintaxis declarativa y datasets dinámicos al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pest PHP y pruebas expresivas (Calidad y producción): Escribe suites de tests concisas con sintaxis declarativa y datasets dinámicos.",
    "topic": "Calidad y producción",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-37",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Polymorphic relations y morph maps» en eloquent avanzado y patrones de persistencia?",
    "options": [
      "Mapea entidades polimórficas desacoplando nombres de clases de la base de datos de forma segura.",
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP al operar.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Polymorphic relations y morph maps (Eloquent avanzado y patrones de persistencia): Mapea entidades polimórficas desacoplando nombres de clases de la base de datos.",
    "topic": "Eloquent avanzado y patrones de persistencia",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-38",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «Custom Casts y Value Objects»?",
    "options": [
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Serializa atributos JSON o tipos complejos en objetos inmutables de dominio en el flujo.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas al operar.",
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Custom Casts y Value Objects (Eloquent avanzado y patrones de persistencia): Serializa atributos JSON o tipos complejos en objetos inmutables de dominio.",
    "topic": "Eloquent avanzado y patrones de persistencia",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-39",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Query Scopes y Global Scopes»?",
    "options": [
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP al evaluar.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas al operar.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Mapea entidades polimórficas desacoplando nombres de clases de la base de datos al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Query Scopes y Global Scopes (Eloquent avanzado y patrones de persistencia): Encapsula restricciones reutilizables o multitenancy automático en cada consulta.",
    "topic": "Eloquent avanzado y patrones de persistencia",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-40",
    "collectionId": "laravel",
    "question": "Respecto a eloquent avanzado y patrones de persistencia en Laravel, ¿cuál es el propósito de «Lazy loading vs Eager loading (preventLazyLoading)»?",
    "options": [
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP al evaluar.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Mapea entidades polimórficas desacoplando nombres de clases de la base de datos al evaluar.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Lazy loading vs Eager loading (preventLazyLoading) (Eloquent avanzado y patrones de persistencia): Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas.",
    "topic": "Eloquent avanzado y patrones de persistencia",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-41",
    "collectionId": "laravel",
    "question": "En Laravel (Eloquent avanzado y patrones de persistencia), ¿qué función técnica cumple «Eloquent Collections avanzadas»?",
    "options": [
      "Aplica transformaciones vectorizadas sobre colecciones de modelos sin consultar nuevamente la base.",
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP con precisión.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta de forma segura.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Eloquent Collections avanzadas (Eloquent avanzado y patrones de persistencia): Aplica transformaciones vectorizadas sobre colecciones de modelos sin consultar nuevamente la base.",
    "topic": "Eloquent avanzado y patrones de persistencia",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-42",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Database cursors y chunking» en eloquent avanzado y patrones de persistencia?",
    "options": [
      "Serializa atributos JSON o tipos complejos en objetos inmutables de dominio al operar.",
      "Procesa millones de registros con bajo consumo de memoria mediante generadores PHP.",
      "Mapea entidades polimórficas desacoplando nombres de clases de la base de datos.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Database cursors y chunking (Eloquent avanzado y patrones de persistencia): Procesa millones de registros con bajo consumo de memoria mediante generadores PHP.",
    "topic": "Eloquent avanzado y patrones de persistencia",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-43",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «API Resources y Resource Collections»?",
    "options": [
      "Oculta campos sensibles o costosos en respuestas JSON según permisos del usuario al operar.",
      "Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept.",
      "Transforma modelos en respuestas JSON consistentes con metadatos y paginación al operar.",
      "Protege endpoints con limitadores de tasa usando Redis o la caché del sistema al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "API Resources y Resource Collections (Arquitectura de API y contratos REST/GraphQL): Transforma modelos en respuestas JSON consistentes con metadatos y paginación.",
    "topic": "Arquitectura de API y contratos REST/GraphQL",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-44",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Rate Limiting por IP o usuario»?",
    "options": [
      "Oculta campos sensibles o costosos en respuestas JSON según permisos del usuario al operar.",
      "Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept.",
      "Transforma modelos en respuestas JSON consistentes con metadatos y paginación al operar.",
      "Protege endpoints con limitadores de tasa usando Redis o la caché del sistema al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Rate Limiting por IP o usuario (Arquitectura de API y contratos REST/GraphQL): Protege endpoints con limitadores de tasa usando Redis o la caché del sistema.",
    "topic": "Arquitectura de API y contratos REST/GraphQL",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-45",
    "collectionId": "laravel",
    "question": "Respecto a arquitectura de api y contratos rest/graphql en Laravel, ¿cuál es el propósito de «API Versioning»?",
    "options": [
      "Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept.",
      "Transforma modelos en respuestas JSON consistentes con metadatos y paginación.",
      "Protege endpoints con limitadores de tasa usando Redis o la caché del sistema.",
      "Genera especificaciones OpenAPI interactivas a partir de FormRequests y rutas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "API Versioning y encabezados (Arquitectura de API y contratos REST/GraphQL): Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept.",
    "topic": "Arquitectura de API y contratos REST/GraphQL",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-46",
    "collectionId": "laravel",
    "question": "En Laravel (Arquitectura de API y contratos REST/GraphQL), ¿qué función técnica cumple «Sanctum vs Passport»?",
    "options": [
      "Oculta campos sensibles o costosos en respuestas JSON según permisos del usuario al operar.",
      "Elige entre tokens livianos para SPAs o servidores OAuth2 completos según la necesidad.",
      "Transforma modelos en respuestas JSON consistentes con metadatos y paginación al operar.",
      "Protege endpoints con limitadores de tasa usando Redis o la caché del sistema al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sanctum vs Passport (Arquitectura de API y contratos REST/GraphQL): Elige entre tokens livianos para SPAs o servidores OAuth2 completos según la necesidad.",
    "topic": "Arquitectura de API y contratos REST/GraphQL",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-47",
    "collectionId": "laravel",
    "question": "Dentro de Laravel, ¿cómo opera el mecanismo de «Conditional attributes en recursos» en arquitectura de api y contratos rest/graphql?",
    "options": [
      "Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept al operar.",
      "Elige entre tokens livianos para SPAs o servidores OAuth2 completos según la necesidad.",
      "Oculta campos sensibles o costosos en respuestas JSON según permisos del usuario al operar.",
      "Transforma modelos en respuestas JSON consistentes con metadatos y paginación en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Conditional attributes en recursos (Arquitectura de API y contratos REST/GraphQL): Oculta campos sensibles o costosos en respuestas JSON según permisos del usuario.",
    "topic": "Arquitectura de API y contratos REST/GraphQL",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-48",
    "collectionId": "laravel",
    "question": "Al trabajar con Laravel, ¿qué responsabilidad define a «OpenAPI y auto-documentación»?",
    "options": [
      "Oculta campos sensibles o costosos en respuestas JSON según permisos del usuario al operar.",
      "Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept.",
      "Transforma modelos en respuestas JSON consistentes con metadatos y paginación al operar.",
      "Genera especificaciones OpenAPI interactivas a partir de FormRequests y rutas al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "OpenAPI y auto-documentación (Arquitectura de API y contratos REST/GraphQL): Genera especificaciones OpenAPI interactivas a partir de FormRequests y rutas.",
    "topic": "Arquitectura de API y contratos REST/GraphQL",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-49",
    "collectionId": "laravel",
    "question": "En la arquitectura de Laravel, ¿qué caracteriza técnicamente a «Event Broadcasting con WebSockets (Reverb)»?",
    "options": [
      "Transmite eventos de servidor directamente a navegadores en tiempo real sin degradar el flujo.",
      "Autentica oyentes y expone quién está conectado en salas compartidas dentro del flujo.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Event Broadcasting con WebSockets (Reverb) (Sistemas de eventos y tiempo real): Transmite eventos de servidor directamente a navegadores en tiempo real.",
    "topic": "Sistemas de eventos y tiempo real",
    "difficulty": "avanzado"
  },
  {
    "id": "laravel-q-50",
    "collectionId": "laravel",
    "question": "Respecto a sistemas de eventos y tiempo real en Laravel, ¿cuál es el propósito de «Presence Channels y Private Channels»?",
    "options": [
      "Transmite eventos de servidor directamente a navegadores en tiempo real de modo predecible.",
      "Autentica oyentes y expone quién está conectado en salas compartidas de modo predecible.",
      "Encapsula restricciones reutilizables o multitenancy automático en cada consulta al operar.",
      "Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Presence Channels y Private Channels (Sistemas de eventos y tiempo real): Autentica oyentes y expone quién está conectado en salas compartidas.",
    "topic": "Sistemas de eventos y tiempo real",
    "difficulty": "avanzado"
  }
];
