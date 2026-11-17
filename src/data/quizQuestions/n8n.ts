import type { QuizQuestion } from "@/data/quizTypes";

export const n8nQuestions: QuizQuestion[] = [
  {
    "id": "n8n-q-01",
    "collectionId": "n8n",
    "question": "En n8n (Modelo de ejecución), ¿qué función técnica cumple «Workflows y executions»?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Transportan objetos binarios o JSON y conservan vinculación entre entradas y salidas.",
      "Calcula parámetros desde contexto sin convertir toda lógica en cadenas opacas al evaluar.",
      "Facilita diseño manual pero nunca debe confundirse con entrada de producción en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Workflows y executions (Modelo de ejecución): Distingue la definición versionada de cada recorrido concreto con datos y estado.",
    "topic": "Modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-02",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «Nodes y connections» en modelo de ejecución?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Representa operaciones y transferencia de items entre puertos manteniendo consistencia.",
      "Calcula parámetros desde contexto sin convertir toda lógica en cadenas opacas al operar.",
      "Transportan objetos binarios o JSON y conservan vinculación entre entradas y salidas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Nodes y connections (Modelo de ejecución): Representan operaciones y transferencia de items entre puertos.",
    "topic": "Modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-03",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Items»?",
    "options": [
      "Calcula parámetros desde contexto sin convertir toda lógica en cadenas opacas al operar.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado.",
      "Transportan objetos binarios o JSON y conservan vinculación entre entradas y salidas.",
      "Facilita diseño manual pero nunca debe confundirse con entrada de producción al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Items (Modelo de ejecución): Transportan objetos binarios o JSON y conservan vinculación entre entradas y salidas.",
    "topic": "Modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-04",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Expressions»?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Transportan objetos binarios o JSON y conservan vinculación entre entradas y salidas.",
      "Facilita diseño manual pero nunca debe confundirse con entrada de producción al evaluar.",
      "Calcula parámetros desde contexto sin convertir toda lógica en cadenas opacas al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Expressions (Modelo de ejecución): Calculan parámetros desde contexto sin convertir toda lógica en cadenas opacas.",
    "topic": "Modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-05",
    "collectionId": "n8n",
    "question": "Respecto a modelo de ejecución en n8n, ¿cuál es el propósito de «Pinned data»?",
    "options": [
      "Facilita diseño manual pero nunca debe confundirse con entrada de producción dentro del flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Transportan objetos binarios o JSON y conservan vinculación entre entradas y salidas.",
      "Calcula parámetros desde contexto sin convertir toda lógica en cadenas opacas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pinned data (Modelo de ejecución): Facilita diseño manual pero nunca debe confundirse con entrada de producción.",
    "topic": "Modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-06",
    "collectionId": "n8n",
    "question": "En n8n (Entrada y contratos), ¿qué función técnica cumple «Webhook trigger»?",
    "options": [
      "Inicia recurrencia considerando zona horaria y ejecuciones solapadas durante la ejecución.",
      "Expone una entrada HTTP con métodos, paths y respuesta definidos sin degradar el flujo.",
      "Recibe eventos mediante polling o suscripciones según la integración sin perder estado.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Webhook trigger (Entrada y contratos): Expone una entrada HTTP con métodos, paths y respuesta definidos.",
    "topic": "Entrada y contratos",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-07",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «Schedule trigger» en entrada y contratos?",
    "options": [
      "Recibe eventos mediante polling o suscripciones según la integración sin degradar el flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Inicia recurrencia considerando zona horaria y ejecuciones solapadas de modo predecible.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Schedule trigger (Entrada y contratos): Inicia recurrencia considerando zona horaria y ejecuciones solapadas.",
    "topic": "Entrada y contratos",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-08",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «App triggers»?",
    "options": [
      "Inicia recurrencia considerando zona horaria y ejecuciones solapadas sin degradar el flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Recibe eventos mediante polling o suscripciones según la integración de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "App triggers (Entrada y contratos): Reciben eventos mediante polling o suscripciones según la integración.",
    "topic": "Entrada y contratos",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-09",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Validación de esquema»?",
    "options": [
      "Rechaza temprano datos incompletos y conserva una causa legible bajo condiciones productivas.",
      "Inicia recurrencia considerando zona horaria y ejecuciones solapadas dentro del flujo.",
      "Recibe eventos mediante polling o suscripciones según la integración dentro del flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Validación de esquema (Entrada y contratos): Rechaza temprano datos incompletos y conserva una causa legible.",
    "topic": "Entrada y contratos",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-10",
    "collectionId": "n8n",
    "question": "Respecto a entrada y contratos en n8n, ¿cuál es el propósito de «Respond to Webhook»?",
    "options": [
      "Inicia recurrencia considerando zona horaria y ejecuciones solapadas sin degradar el flujo.",
      "Controla cuándo y con qué contrato termina la solicitud inicial dentro de la aplicación.",
      "Recibe eventos mediante polling o suscripciones según la integración de modo predecible.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respond to Webhook (Entrada y contratos): Controla cuándo y con qué contrato termina la solicitud inicial.",
    "topic": "Entrada y contratos",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-11",
    "collectionId": "n8n",
    "question": "En n8n (Datos y control), ¿qué función técnica cumple «Edit Fields»?",
    "options": [
      "Resuelve transformación puntual sin esconder un sistema completo en JavaScript al evaluar.",
      "Sincroniza ramas por posición, clave o disponibilidad con semántica explícita al operar.",
      "Proyecta y renombra datos sin arrastrar secretos o payload completo de modo predecible.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Edit Fields (Datos y control): Proyecta y renombra datos sin arrastrar secretos o payload completo.",
    "topic": "Datos y control",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-12",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «If y Switch» en datos y control?",
    "options": [
      "Resuelve transformación puntual sin esconder un sistema completo en JavaScript en el flujo.",
      "Sincroniza ramas por posición, clave o disponibilidad con semántica explícita al operar.",
      "Proyecta y renombra datos sin arrastrar secretos o payload completo de modo predecible.",
      "Dirigen items por condiciones mutuamente comprensibles dentro de la arquitectura activa."
    ],
    "correctAnswerIndex": 3,
    "explanation": "If y Switch (Datos y control): Dirigen items por condiciones mutuamente comprensibles.",
    "topic": "Datos y control",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-13",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Merge»?",
    "options": [
      "Sincroniza ramas por posición, clave o disponibilidad con semántica explícita de forma segura.",
      "Resuelve transformación puntual sin esconder un sistema completo en JavaScript al operar.",
      "Proyecta y renombra datos sin arrastrar secretos o payload completo sin perder estado.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Merge (Datos y control): Sincroniza ramas por posición, clave o disponibilidad con semántica explícita.",
    "topic": "Datos y control",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-14",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Loop Over Items»?",
    "options": [
      "Resuelve transformación puntual sin esconder un sistema completo en JavaScript al operar.",
      "Acota lotes y evita saturar un servicio remoto dentro del ciclo operativo del sistema.",
      "Sincroniza ramas por posición, clave o disponibilidad con semántica explícita al operar.",
      "Proyecta y renombra datos sin arrastrar secretos o payload completo sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Loop Over Items (Datos y control): Acota lotes y evita saturar un servicio remoto.",
    "topic": "Datos y control",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-15",
    "collectionId": "n8n",
    "question": "Respecto a datos y control en n8n, ¿cuál es el propósito de «Code node»?",
    "options": [
      "Sincroniza ramas por posición, clave o disponibilidad con semántica explícita con precisión.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Resuelve transformación puntual sin esconder un sistema completo en JavaScript al operar.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Code node (Datos y control): Resuelve transformación puntual sin esconder un sistema completo en JavaScript.",
    "topic": "Datos y control",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-16",
    "collectionId": "n8n",
    "question": "En n8n (Composición y personas), ¿qué función técnica cumple «Execute Sub-workflow»?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica al operar.",
      "Reutiliza una capacidad con contrato de entrada y salida manteniendo el contrato activo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Execute Sub-workflow (Composición y personas): Reutiliza una capacidad con contrato de entrada y salida.",
    "topic": "Composición y personas",
    "difficulty": "básico"
  },
  {
    "id": "n8n-q-17",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «Wait» en composición y personas?",
    "options": [
      "Pausa hasta tiempo o callback sin mantener un proceso bloqueado bajo condiciones productivas.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Wait (Composición y personas): Pausa hasta tiempo o callback sin mantener un proceso bloqueado.",
    "topic": "Composición y personas",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-18",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Aprobación humana»?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Presenta contexto mínimo y reanuda una decisión autenticada respetando las invariantes.",
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo al operar.",
      "Normaliza números de teléfono, correos y fechas usando utilidades regex nativas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Aprobación humana (Composición y personas): Presenta contexto mínimo y reanuda una decisión autenticada.",
    "topic": "Composición y personas",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-19",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Templates y naming»?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo al operar.",
      "Comunican intención, ownership y riesgo a quien operará el flujo sin degradar el flujo.",
      "Normaliza números de teléfono, correos y fechas usando utilidades regex nativas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Templates y naming (Composición y personas): Comunican intención, ownership y riesgo a quien operará el flujo.",
    "topic": "Composición y personas",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-20",
    "collectionId": "n8n",
    "question": "Respecto a composición y personas en n8n, ¿cuál es el propósito de «Versionado y promoción»?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica al operar.",
      "Mueve definiciones y configuración entre ambientes con revisión dentro de la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Versionado y promoción (Composición y personas): Mueve definiciones y configuración entre ambientes con revisión.",
    "topic": "Composición y personas",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-21",
    "collectionId": "n8n",
    "question": "En n8n (Credenciales y seguridad), ¿qué función técnica cumple «Credentials»?",
    "options": [
      "Separa autenticación de parámetros visibles del nodo manteniendo la trazabilidad técnica.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica.",
      "Asigna permisos de lectura, edición y ejecución por proyectos y equipos de trabajo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Credentials (Credenciales y seguridad): Separa autenticación de parámetros visibles del nodo.",
    "topic": "Credenciales y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-22",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «OAuth2» en credenciales y seguridad?",
    "options": [
      "Reduce persistencia, masking y acceso a executions con payload real sin degradar el flujo.",
      "Renueva tokens y limita scopes según la integración manteniendo la trazabilidad técnica.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Configura ambientes sin incrustar valores en el workflow exportado durante la ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "OAuth2 (Credenciales y seguridad): Renueva tokens y limita scopes según la integración.",
    "topic": "Credenciales y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-23",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Variables y secrets»?",
    "options": [
      "Reduce persistencia, masking y acceso a executions con payload real sin degradar el flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Configura ambientes sin incrustar valores en el workflow exportado durante la ejecución.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Variables y secrets (Credenciales y seguridad): Configura ambientes sin incrustar valores en el workflow exportado.",
    "topic": "Credenciales y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-24",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Least privilege»?",
    "options": [
      "Reduce persistencia, masking y acceso a executions con payload real sin degradar el flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Configura ambientes sin incrustar valores en el workflow exportado de modo predecible.",
      "Entrega a cada conexión solo operaciones y datos necesarios respetando las invariantes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Least privilege (Credenciales y seguridad): Entrega a cada conexión solo operaciones y datos necesarios.",
    "topic": "Credenciales y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-25",
    "collectionId": "n8n",
    "question": "Respecto a credenciales y seguridad en n8n, ¿cuál es el propósito de «Datos sensibles»?",
    "options": [
      "Reduce persistencia, masking y acceso a executions con payload real manteniendo consistencia.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado.",
      "Configura ambientes sin incrustar valores en el workflow exportado sin perder estado.",
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Datos sensibles (Credenciales y seguridad): Reduce persistencia, masking y acceso a executions con payload real.",
    "topic": "Credenciales y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-26",
    "collectionId": "n8n",
    "question": "En n8n (Errores y confiabilidad), ¿qué función técnica cumple «Retry On Fail»?",
    "options": [
      "Deshace o neutraliza pasos completados cuando no existe transacción global de forma segura.",
      "Reintenta fallos transitorios con espera y máximo acotados bajo condiciones productivas.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Retry On Fail (Errores y confiabilidad): Reintenta fallos transitorios con espera y máximo acotados.",
    "topic": "Errores y confiabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-27",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «Error workflows» en errores y confiabilidad?",
    "options": [
      "Deshace o neutraliza pasos completados cuando no existe transacción global de forma clara.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Centralizan alerta y evidencia cuando una ejecución falla bajo condiciones productivas.",
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Error workflows (Errores y confiabilidad): Centralizan alerta y evidencia cuando una ejecución falla.",
    "topic": "Errores y confiabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-28",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Continue On Fail»?",
    "options": [
      "Deshace o neutraliza pasos completados cuando no existe transacción global de forma segura.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Convierte un error esperado en dato sin ocultar fallos críticos dentro de la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Continue On Fail (Errores y confiabilidad): Convierte un error esperado en dato sin ocultar fallos críticos.",
    "topic": "Errores y confiabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-29",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Idempotency keys»?",
    "options": [
      "Evita que reintentos creen dos tickets, pagos o mensajes respetando las restricciones de tipo.",
      "Deshace o neutraliza pasos completados cuando no existe transacción global al evaluar.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Idempotency keys (Errores y confiabilidad): Evitan que reintentos creen dos tickets, pagos o mensajes.",
    "topic": "Errores y confiabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-30",
    "collectionId": "n8n",
    "question": "Respecto a errores y confiabilidad en n8n, ¿cuál es el propósito de «Compensación»?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Deshace o neutraliza pasos completados cuando no existe transacción global en ejecución.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Compensación (Errores y confiabilidad): Deshace o neutraliza pasos completados cuando no existe transacción global.",
    "topic": "Errores y confiabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-31",
    "collectionId": "n8n",
    "question": "En n8n (Operación y escala), ¿qué función técnica cumple «Queue mode»?",
    "options": [
      "Define replay, recuperación, escalamiento y responsable por workflow sin degradar el flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Separa main y workers mediante una cola compartida respetando las restricciones de tipo.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Queue mode (Operación y escala): Separa main y workers mediante una cola compartida.",
    "topic": "Operación y escala",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-32",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «Concurrency» en operación y escala?",
    "options": [
      "Define replay, recuperación, escalamiento y responsable por workflow sin degradar el flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Limita ejecuciones y llamadas para proteger dependencias manteniendo el contrato activo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Concurrency (Operación y escala): Limita ejecuciones y llamadas para proteger dependencias.",
    "topic": "Operación y escala",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-33",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Execution retention»?",
    "options": [
      "Conserva evidencia útil y elimina payload según política respetando las restricciones de tipo.",
      "Define replay, recuperación, escalamiento y responsable por workflow dentro del flujo.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Execution retention (Operación y escala): Conserva evidencia útil y elimina payload según política.",
    "topic": "Operación y escala",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-34",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Monitoring»?",
    "options": [
      "Define replay, recuperación, escalamiento y responsable por workflow durante la ejecución.",
      "Observa latencia, errores, backlog y rutas de negocio dentro de la arquitectura activa.",
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Monitoring (Operación y escala): Observa latencia, errores, backlog y rutas de negocio.",
    "topic": "Operación y escala",
    "difficulty": "intermedio"
  },
  {
    "id": "n8n-q-35",
    "collectionId": "n8n",
    "question": "Respecto a operación y escala en n8n, ¿cuál es el propósito de «Runbooks»?",
    "options": [
      "Distingue la definición versionada de cada recorrido concreto con datos y estado al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Define replay, recuperación, escalamiento y responsable por workflow de modo predecible.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Runbooks (Operación y escala): Define replay, recuperación, escalamiento y responsable por workflow.",
    "topic": "Operación y escala",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-36",
    "collectionId": "n8n",
    "question": "En n8n (Transformación avanzada y manipulación de datos), ¿qué función técnica cumple «JMESPath y filtrado de colecciones»?",
    "options": [
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo al evaluar.",
      "Normaliza números de teléfono, correos y fechas usando utilidades regex nativas al operar.",
      "Persiste contadores o marcas de agua entre distintas ejecuciones del workflow al operar.",
      "Extrae estructuras complejas de arrays sin escribir bucles manuales de código al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "JMESPath y filtrado de colecciones (Transformación avanzada y manipulación de datos): Extrae estructuras complejas de arrays sin escribir bucles manuales de código.",
    "topic": "Transformación avanzada y manipulación de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-37",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «Transformación de binarios» en transformación avanzada y manipulación de datos?",
    "options": [
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo en ejecución.",
      "Normaliza números de teléfono, correos y fechas usando utilidades regex nativas al operar.",
      "Extrae estructuras complejas de arrays sin escribir bucles manuales de código al operar.",
      "Persiste contadores o marcas de agua entre distintas ejecuciones del workflow al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Transformación de binarios y archivos (Transformación avanzada y manipulación de datos): Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo.",
    "topic": "Transformación avanzada y manipulación de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-38",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Agregación y separación de listas (Split in Batches)»?",
    "options": [
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo al evaluar.",
      "Agrupa y divide conjuntos masivos de items para procesar lotes secuenciales en el flujo.",
      "Normaliza números de teléfono, correos y fechas usando utilidades regex nativas al operar.",
      "Extrae estructuras complejas de arrays sin escribir bucles manuales de código al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Agregación y separación de listas (Split in Batches) (Transformación avanzada y manipulación de datos): Agrupa y divide conjuntos masivos de items para procesar lotes secuenciales.",
    "topic": "Transformación avanzada y manipulación de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-39",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Expresiones regulares y reemplazo de cadenas»?",
    "options": [
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo en ejecución.",
      "Extrae estructuras complejas de arrays sin escribir bucles manuales de código en el flujo.",
      "Normaliza números de teléfono, correos y fechas usando utilidades regex nativas al operar.",
      "Persiste contadores o marcas de agua entre distintas ejecuciones del workflow en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Expresiones regulares y reemplazo de cadenas (Transformación avanzada y manipulación de datos): Normaliza números de teléfono, correos y fechas usando utilidades regex nativas.",
    "topic": "Transformación avanzada y manipulación de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-40",
    "collectionId": "n8n",
    "question": "Respecto a transformación avanzada y manipulación de datos en n8n, ¿cuál es el propósito de «Variables globales y almacenamiento estático»?",
    "options": [
      "Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo al evaluar.",
      "Normaliza números de teléfono, correos y fechas usando utilidades regex nativas al operar.",
      "Extrae estructuras complejas de arrays sin escribir bucles manuales de código al operar.",
      "Persiste contadores o marcas de agua entre distintas ejecuciones del workflow al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Variables globales y almacenamiento estático (Transformación avanzada y manipulación de datos): Persiste contadores o marcas de agua entre distintas ejecuciones del workflow.",
    "topic": "Transformación avanzada y manipulación de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-41",
    "collectionId": "n8n",
    "question": "En n8n (Integración con Inteligencia Artificial y LLMs (n8n AI)), ¿qué función técnica cumple «AI Agent nodes y orquestación»?",
    "options": [
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica.",
      "Mantiene historial de diálogo entre invocaciones de chat usando sesiones de usuario.",
      "Facilita diseño manual pero nunca debe confundirse con entrada de producción."
    ],
    "correctAnswerIndex": 0,
    "explanation": "AI Agent nodes y orquestación (Integración con Inteligencia Artificial y LLMs (n8n AI)): Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas.",
    "topic": "Integración con Inteligencia Artificial y LLMs (n8n AI)",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-42",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «Bases vectoriales y embeddings» en integración con inteligencia artificial y llms (n8n ai)?",
    "options": [
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica.",
      "Mantiene historial de diálogo entre invocaciones de chat usando sesiones de usuario.",
      "Facilita diseño manual pero nunca debe confundirse con entrada de producción al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bases vectoriales y embeddings (Integración con Inteligencia Artificial y LLMs (n8n AI)): Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica.",
    "topic": "Integración con Inteligencia Artificial y LLMs (n8n AI)",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-43",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Memory buffers y conversación»?",
    "options": [
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica.",
      "Mantiene historial de diálogo entre invocaciones de chat usando sesiones de usuario.",
      "Calcula parámetros desde contexto sin convertir toda lógica en cadenas opacas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Memory buffers y conversación (Integración con Inteligencia Artificial y LLMs (n8n AI)): Mantiene historial de diálogo entre invocaciones de chat usando sesiones de usuario.",
    "topic": "Integración con Inteligencia Artificial y LLMs (n8n AI)",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-44",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Tool calling con nodos personalizados»?",
    "options": [
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica al operar.",
      "Mantiene historial de diálogo entre invocaciones de chat usando sesiones de usuario.",
      "Permite al modelo de IA invocar subworkflows o consultas SQL como herramientas externas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Tool calling con nodos personalizados (Integración con Inteligencia Artificial y LLMs (n8n AI)): Permite al modelo de IA invocar subworkflows o consultas SQL como herramientas externas.",
    "topic": "Integración con Inteligencia Artificial y LLMs (n8n AI)",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-45",
    "collectionId": "n8n",
    "question": "Respecto a integración con inteligencia artificial y llms (n8n ai) en n8n, ¿cuál es el propósito de «Structured Output parsers»?",
    "options": [
      "Fuerza respuestas de IA en esquemas JSON validados listos para ser consumidos por el flujo al operar.",
      "Mantiene historial de diálogo entre invocaciones de chat usando sesiones de usuario al operar.",
      "Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas al operar.",
      "Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Structured Output parsers (Integración con Inteligencia Artificial y LLMs (n8n AI)): Fuerza respuestas de IA en esquemas JSON validados listos para ser consumidos por el flujo.",
    "topic": "Integración con Inteligencia Artificial y LLMs (n8n AI)",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-46",
    "collectionId": "n8n",
    "question": "En n8n (Gobierno empresarial y cumplimiento), ¿qué función técnica cumple «Control de acceso basado en roles (RBAC)»?",
    "options": [
      "Centraliza autenticación corporativa con proveedores de identidad reconocidos al operar.",
      "Asigna permisos de lectura, edición y ejecución por proyectos y equipos de trabajo.",
      "Oculta información personal identificable en los registros de ejecución al evaluar.",
      "Sincroniza definiciones de workflows automáticamente con repositorios Git externos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Control de acceso basado en roles (RBAC) (Gobierno empresarial y cumplimiento): Asigna permisos de lectura, edición y ejecución por proyectos y equipos de trabajo.",
    "topic": "Gobierno empresarial y cumplimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-47",
    "collectionId": "n8n",
    "question": "Dentro de n8n, ¿cómo opera el mecanismo de «Auditoría de cambios y Git sync» en gobierno empresarial y cumplimiento?",
    "options": [
      "Centraliza autenticación corporativa con proveedores de identidad reconocidos al operar.",
      "Oculta información personal identificable en los registros de ejecución al evaluar.",
      "Sincroniza definiciones de workflows automáticamente con repositorios Git externos.",
      "Asigna permisos de lectura, edición y ejecución por proyectos y equipos de trabajo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Auditoría de cambios y Git sync (Gobierno empresarial y cumplimiento): Sincroniza definiciones de workflows automáticamente con repositorios Git externos.",
    "topic": "Gobierno empresarial y cumplimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-48",
    "collectionId": "n8n",
    "question": "Al trabajar con n8n, ¿qué responsabilidad define a «Data Masking y retención de privacidad»?",
    "options": [
      "Asigna permisos de lectura, edición y ejecución por proyectos y equipos de trabajo al operar.",
      "Sincroniza definiciones de workflows automáticamente con repositorios Git externos al operar.",
      "Centraliza autenticación corporativa con proveedores de identidad reconocidos al operar.",
      "Oculta información personal identificable en los registros de ejecución de forma segura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Data Masking y retención de privacidad (Gobierno empresarial y cumplimiento): Oculta información personal identificable en los registros de ejecución.",
    "topic": "Gobierno empresarial y cumplimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-49",
    "collectionId": "n8n",
    "question": "En la arquitectura de n8n, ¿qué caracteriza técnicamente a «Single Sign-On (SSO / SAML)»?",
    "options": [
      "Centraliza autenticación corporativa con proveedores de identidad reconocidos al operar.",
      "Asigna permisos de lectura, edición y ejecución por proyectos y equipos de trabajo.",
      "Sincroniza definiciones de workflows automáticamente con repositorios Git externos.",
      "Oculta información personal identificable en los registros de ejecución con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Single Sign-On (SSO / SAML) (Gobierno empresarial y cumplimiento): Centraliza autenticación corporativa con proveedores de identidad reconocidos.",
    "topic": "Gobierno empresarial y cumplimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "n8n-q-50",
    "collectionId": "n8n",
    "question": "Respecto a gobierno empresarial y cumplimiento en n8n, ¿cuál es el propósito de «Políticas de cuotas y limitación de tasa»?",
    "options": [
      "Asigna permisos de lectura, edición y ejecución por proyectos y equipos de trabajo de forma segura.",
      "Restringe el consumo de ejecuciones por departamento para evitar sobrecostes de infraestructura.",
      "Sincroniza definiciones de workflows automáticamente con repositorios Git externos en ejecución.",
      "Centraliza autenticación corporativa con proveedores de identidad reconocidos sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Políticas de cuotas y limitación de tasa (Gobierno empresarial y cumplimiento): Restringe el consumo de ejecuciones por departamento para evitar sobrecostes de infraestructura.",
    "topic": "Gobierno empresarial y cumplimiento",
    "difficulty": "avanzado"
  }
];
