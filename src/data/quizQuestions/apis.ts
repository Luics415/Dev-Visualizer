import type { QuizQuestion } from "@/data/quizTypes";

export const apisQuestions: QuizQuestion[] = [
  {
    "id": "apis-q-01",
    "collectionId": "apis",
    "question": "En APIs (Fundamentos de contrato), ¿qué función técnica cumple «Proveedor, consumidor y contrato»?",
    "options": [
      "Identifica quién promete comportamiento, quién depende de él y qué puede cambiar sin romper el acuerdo.",
      "Combina forma validable con significado, invariantes y unidades que el tipo por sí solo no expresa.",
      "Elige si el consumidor espera una respuesta inmediata o continúa mientras llega un resultado posterior.",
      "Define qué versiones de productores y consumidores pueden convivir durante una evolución en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Proveedor, consumidor y contrato (Fundamentos de contrato): Identifica quién promete comportamiento, quién depende de él y qué puede cambiar sin romper el acuerdo.",
    "topic": "Fundamentos de contrato",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-02",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Operación, recurso y evento» en fundamentos de contrato?",
    "options": [
      "Define qué versiones de productores y consumidores pueden convivir durante una evolución al operar.",
      "Distingue una orden, la representación de una entidad y un hecho que ya ocurrió al operar.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista al operar.",
      "Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Operación, recurso y evento (Fundamentos de contrato): Distingue una orden, la representación de una entidad y un hecho que ya ocurrió.",
    "topic": "Fundamentos de contrato",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-03",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «Schema y semántica»?",
    "options": [
      "Define qué versiones de productores y consumidores pueden convivir durante una evolución en ejecución.",
      "Distingue una orden, la representación de una entidad y un hecho que ya ocurrió de modo predecible.",
      "Combina forma validable con significado, invariantes y unidades que el tipo por sí solo no expresa.",
      "Modela capacidades como llamadas remotas sin fingir que una red equivale a una función local al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Schema y semántica (Fundamentos de contrato): Combina forma validable con significado, invariantes y unidades que el tipo por sí solo no expresa.",
    "topic": "Fundamentos de contrato",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-04",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «Síncrono y asíncrono»?",
    "options": [
      "Combina forma validable con significado, invariantes y unidades que el tipo por sí solo no expresa al operar.",
      "Identifica quién promete comportamiento, quién depende de él y qué puede cambiar sin romper el acuerdo.",
      "Define qué versiones de productores y consumidores pueden convivir durante una evolución con precisión.",
      "Elige si el consumidor espera una respuesta inmediata o continúa mientras llega un resultado posterior."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Síncrono y asíncrono (Fundamentos de contrato): Elige si el consumidor espera una respuesta inmediata o continúa mientras llega un resultado posterior.",
    "topic": "Fundamentos de contrato",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-05",
    "collectionId": "apis",
    "question": "Respecto a fundamentos de contrato en APIs, ¿cuál es el propósito de «Idempotencia»?",
    "options": [
      "Permite repetir una intención sin duplicar su efecto observable bajo condiciones productivas.",
      "Distingue una orden, la representación de una entidad y un hecho que ya ocurrió al operar.",
      "Define qué versiones de productores y consumidores pueden convivir durante una evolución.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Idempotencia (Fundamentos de contrato): Permite repetir una intención sin duplicar su efecto observable.",
    "topic": "Fundamentos de contrato",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-06",
    "collectionId": "apis",
    "question": "En APIs (Fundamentos de contrato), ¿qué función técnica cumple «Compatibilidad hacia atrás y adelante»?",
    "options": [
      "Distingue una orden, la representación de una entidad y un hecho que ya ocurrió en el flujo.",
      "Define qué versiones de productores y consumidores pueden convivir durante una evolución.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista al operar.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Compatibilidad hacia atrás y adelante (Fundamentos de contrato): Define qué versiones de productores y consumidores pueden convivir durante una evolución.",
    "topic": "Fundamentos de contrato",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-07",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Recursos y representaciones» en http y rest?",
    "options": [
      "Usa GET, POST, PUT, PATCH y DELETE según seguridad, idempotencia y semántica de caché al operar.",
      "Comunica clase de resultado y un cuerpo de error procesable sin devolver siempre 200 al operar.",
      "Modela identidades estables mientras JSON, HTML u otros formatos expresan vistas del estado.",
      "Expresa cambios con entradas, errores de dominio y resultados definidos por el schema al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Recursos y representaciones (HTTP y REST): Modela identidades estables mientras JSON, HTML u otros formatos expresan vistas del estado.",
    "topic": "HTTP y REST",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-08",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «Métodos HTTP»?",
    "options": [
      "Comunica clase de resultado y un cuerpo de error procesable sin devolver siempre 200 al operar.",
      "Acota colecciones grandes con cursores estables y límites explícitos dentro del flujo.",
      "Distingue una orden, la representación de una entidad y un hecho que ya ocurrió al operar.",
      "Usa GET, POST, PUT, PATCH y DELETE según seguridad, idempotencia y semántica de caché."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Métodos HTTP (HTTP y REST): Usa GET, POST, PUT, PATCH y DELETE según seguridad, idempotencia y semántica de caché.",
    "topic": "HTTP y REST",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-09",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «Status codes y problem details»?",
    "options": [
      "Comunica clase de resultado y un cuerpo de error procesable sin devolver siempre 200.",
      "Usa GET, POST, PUT, PATCH y DELETE según seguridad, idempotencia y semántica de caché.",
      "Acota colecciones grandes con cursores estables y límites explícitos con precisión.",
      "Convierte identidad en decisiones de mínimo privilegio por operación y recurso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Status codes y problem details (HTTP y REST): Comunica clase de resultado y un cuerpo de error procesable sin devolver siempre 200.",
    "topic": "HTTP y REST",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-10",
    "collectionId": "apis",
    "question": "Respecto a http y rest en APIs, ¿cuál es el propósito de «Headers y negociación»?",
    "options": [
      "Modela identidades estables mientras JSON, HTML u otros formatos expresan vistas del estado al operar.",
      "Transporta metadatos, autenticación, caché, formatos y trazabilidad fuera del cuerpo de negocio.",
      "Usa GET, POST, PUT, PATCH y DELETE según seguridad, idempotencia y semántica de caché al operar.",
      "Comunica clase de resultado y un cuerpo de error procesable sin devolver siempre 200 al evaluar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Headers y negociación (HTTP y REST): Transporta metadatos, autenticación, caché, formatos y trazabilidad fuera del cuerpo de negocio.",
    "topic": "HTTP y REST",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-11",
    "collectionId": "apis",
    "question": "En APIs (HTTP y REST), ¿qué función técnica cumple «Paginación, filtros y orden»?",
    "options": [
      "Comunica clase de resultado y un cuerpo de error procesable sin devolver siempre 200 al operar.",
      "Usa GET, POST, PUT, PATCH y DELETE según seguridad, idempotencia y semántica de caché.",
      "Acota colecciones grandes con cursores estables y límites explícitos de modo predecible.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Paginación, filtros y orden (HTTP y REST): Acota colecciones grandes con cursores estables y límites explícitos.",
    "topic": "HTTP y REST",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-12",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Caching condicional» en http y rest?",
    "options": [
      "Modela identidades estables mientras JSON, HTML u otros formatos expresan vistas del estado al operar.",
      "Usa GET, POST, PUT, PATCH y DELETE según seguridad, idempotencia y semántica de caché al evaluar.",
      "Transporta metadatos, autenticación, caché, formatos y trazabilidad fuera del cuerpo de negocio.",
      "Combina Cache-Control, ETag y validación para reutilizar respuestas sin servir estado incorrecto."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Caching condicional (HTTP y REST): Combina Cache-Control, ETag y validación para reutilizar respuestas sin servir estado incorrecto.",
    "topic": "HTTP y REST",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-13",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «Schema GraphQL»?",
    "options": [
      "Declara tipos, campos y relaciones como contrato consultable por herramientas al operar.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista.",
      "Expresa cambios con entradas, errores de dominio y resultados definidos por el schema.",
      "Reduce superficie y costo imponiendo operaciones conocidas, profundidad y complejidad."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Schema GraphQL (GraphQL): Declara tipos, campos y relaciones como contrato consultable por herramientas.",
    "topic": "GraphQL",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-14",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «Queries y selección de campos»?",
    "options": [
      "Expresa cambios con entradas, errores de dominio y resultados definidos por el schema en ejecución.",
      "Permite que el consumidor pida la forma necesaria sin convertir cada combinación en un endpoint.",
      "Reduce superficie y costo imponiendo operaciones conocidas, profundidad y complejidad al operar.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Queries y selección de campos (GraphQL): Permite que el consumidor pida la forma necesaria sin convertir cada combinación en un endpoint.",
    "topic": "GraphQL",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-15",
    "collectionId": "apis",
    "question": "Respecto a graphql en APIs, ¿cuál es el propósito de «Mutations»?",
    "options": [
      "Declara tipos, campos y relaciones como contrato consultable por herramientas al evaluar.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista.",
      "Expresa cambios con entradas, errores de dominio y resultados definidos por el schema.",
      "Reutiliza selecciones y separa valores dinámicos del documento de operación al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mutations (GraphQL): Expresa cambios con entradas, errores de dominio y resultados definidos por el schema.",
    "topic": "GraphQL",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-16",
    "collectionId": "apis",
    "question": "En APIs (GraphQL), ¿qué función técnica cumple «Resolvers y N+1»?",
    "options": [
      "Declara tipos, campos y relaciones como contrato consultable por herramientas al operar.",
      "Reutiliza selecciones y separa valores dinámicos del documento de operación al operar.",
      "Expresa cambios con entradas, errores de dominio y resultados definidos por el schema.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Resolvers y N+1 (GraphQL): Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista.",
    "topic": "GraphQL",
    "difficulty": "básico"
  },
  {
    "id": "apis-q-17",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Fragments y variables» en graphql?",
    "options": [
      "Reutiliza selecciones y separa valores dinámicos del documento de operación de forma clara.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista.",
      "Declara tipos, campos y relaciones como contrato consultable por herramientas al operar.",
      "Expresa cambios con entradas, errores de dominio y resultados definidos por el schema."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fragments y variables (GraphQL): Reutiliza selecciones y separa valores dinámicos del documento de operación.",
    "topic": "GraphQL",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-18",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «Persisted queries y límites»?",
    "options": [
      "Declara tipos, campos y relaciones como contrato consultable por herramientas al evaluar.",
      "Reduce superficie y costo imponiendo operaciones conocidas, profundidad y complejidad.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista.",
      "Reutiliza selecciones y separa valores dinámicos del documento de operación al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Persisted queries y límites (GraphQL): Reduce superficie y costo imponiendo operaciones conocidas, profundidad y complejidad.",
    "topic": "GraphQL",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-19",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «Servicio y métodos RPC»?",
    "options": [
      "Elige una respuesta, flujo del servidor, flujo del cliente o comunicación bidireccional al operar.",
      "Propaga cuánto tiempo conserva valor una operación y deja de consumir trabajo inútil al operar.",
      "Modela capacidades como llamadas remotas sin fingir que una red equivale a una función local.",
      "Define mensajes compactos con números de campo estables y reglas de evolución de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Servicio y métodos RPC (RPC y gRPC): Modela capacidades como llamadas remotas sin fingir que una red equivale a una función local.",
    "topic": "RPC y gRPC",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-20",
    "collectionId": "apis",
    "question": "Respecto a rpc y grpc en APIs, ¿cuál es el propósito de «Protocol Buffers»?",
    "options": [
      "Propaga cuánto tiempo conserva valor una operación y deja de consumir trabajo inútil al operar.",
      "Elige una respuesta, flujo del servidor, flujo del cliente o comunicación bidireccional.",
      "Comunica errores, identidad y trazabilidad fuera del mensaje de dominio de forma segura.",
      "Define mensajes compactos con números de campo estables y reglas de evolución al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Protocol Buffers (RPC y gRPC): Define mensajes compactos con números de campo estables y reglas de evolución.",
    "topic": "RPC y gRPC",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-21",
    "collectionId": "apis",
    "question": "En APIs (RPC y gRPC), ¿qué función técnica cumple «Unary y streaming»?",
    "options": [
      "Elige una respuesta, flujo del servidor, flujo del cliente o comunicación bidireccional.",
      "Propaga cuánto tiempo conserva valor una operación y deja de consumir trabajo inútil.",
      "Define mensajes compactos con números de campo estables y reglas de evolución al operar.",
      "Comunica errores, identidad y trazabilidad fuera del mensaje de dominio con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Unary y streaming (RPC y gRPC): Elige una respuesta, flujo del servidor, flujo del cliente o comunicación bidireccional.",
    "topic": "RPC y gRPC",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-22",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Deadlines y cancelación» en rpc y grpc?",
    "options": [
      "Define mensajes compactos con números de campo estables y reglas de evolución al operar.",
      "Propaga cuánto tiempo conserva valor una operación y deja de consumir trabajo inútil.",
      "Comunica errores, identidad y trazabilidad fuera del mensaje de dominio en ejecución.",
      "Convierte identidad en decisiones de mínimo privilegio por operación y recurso al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Deadlines y cancelación (RPC y gRPC): Propaga cuánto tiempo conserva valor una operación y deja de consumir trabajo inútil.",
    "topic": "RPC y gRPC",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-23",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «Status y metadata gRPC»?",
    "options": [
      "Propaga cuánto tiempo conserva valor una operación y deja de consumir trabajo inútil al operar.",
      "Define mensajes compactos con números de campo estables y reglas de evolución al operar.",
      "Comunica errores, identidad y trazabilidad fuera del mensaje de dominio de forma segura.",
      "Elige una respuesta, flujo del servidor, flujo del cliente o comunicación bidireccional."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Status y metadata gRPC (RPC y gRPC): Comunica errores, identidad y trazabilidad fuera del mensaje de dominio.",
    "topic": "RPC y gRPC",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-24",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «Transcoding y gateways»?",
    "options": [
      "Propaga cuánto tiempo conserva valor una operación y deja de consumir trabajo inútil al operar.",
      "Define mensajes compactos con números de campo estables y reglas de evolución al operar.",
      "Elige una respuesta, flujo del servidor, flujo del cliente o comunicación bidireccional.",
      "Expone una frontera HTTP/JSON sin duplicar el servicio interno manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Transcoding y gateways (RPC y gRPC): Expone una frontera HTTP/JSON sin duplicar el servicio interno.",
    "topic": "RPC y gRPC",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-25",
    "collectionId": "apis",
    "question": "Respecto a tiempo real y eventos en APIs, ¿cuál es el propósito de «WebSocket»?",
    "options": [
      "Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes en el flujo.",
      "Versiona hechos publicados porque varios consumidores pueden conservarlos durante años.",
      "Desacopla productores de consumidores mediante topics y entrega asíncrona en el flujo.",
      "Transmite eventos del servidor sobre HTTP con reconexión y orden simples en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "WebSocket (Tiempo real y eventos): Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes.",
    "topic": "Tiempo real y eventos",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-26",
    "collectionId": "apis",
    "question": "En APIs (Tiempo real y eventos), ¿qué función técnica cumple «Server-Sent Events»?",
    "options": [
      "Versiona hechos publicados porque varios consumidores pueden conservarlos durante años al operar.",
      "Transmite eventos del servidor sobre HTTP con reconexión y orden simples de forma clara.",
      "Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes en el flujo.",
      "Desacopla productores de consumidores mediante topics y entrega asíncrona con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Server-Sent Events (Tiempo real y eventos): Transmite eventos del servidor sobre HTTP con reconexión y orden simples.",
    "topic": "Tiempo real y eventos",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-27",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Webhooks» en tiempo real y eventos?",
    "options": [
      "Versiona hechos publicados porque varios consumidores pueden conservarlos durante años al operar.",
      "Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes en el flujo.",
      "Entrega callbacks HTTP firmados, reintentables y tolerantes a duplicados de forma clara.",
      "Desacopla productores de consumidores mediante topics y entrega asíncrona con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Webhooks (Tiempo real y eventos): Entrega callbacks HTTP firmados, reintentables y tolerantes a duplicados.",
    "topic": "Tiempo real y eventos",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-28",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «Publish-subscribe»?",
    "options": [
      "Versiona hechos publicados porque varios consumidores pueden conservarlos durante años al operar.",
      "Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes en el flujo.",
      "Transmite eventos del servidor sobre HTTP con reconexión y orden simples de forma clara.",
      "Desacopla productores de consumidores mediante topics y entrega asíncrona con precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Publish-subscribe (Tiempo real y eventos): Desacopla productores de consumidores mediante topics y entrega asíncrona.",
    "topic": "Tiempo real y eventos",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-29",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «Event schemas»?",
    "options": [
      "Versiona hechos publicados porque varios consumidores pueden conservarlos durante años.",
      "Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes al operar.",
      "Desacopla productores de consumidores mediante topics y entrega asíncrona al evaluar.",
      "Transmite eventos del servidor sobre HTTP con reconexión y orden simples en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Event schemas (Tiempo real y eventos): Versiona hechos publicados porque varios consumidores pueden conservarlos durante años.",
    "topic": "Tiempo real y eventos",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-30",
    "collectionId": "apis",
    "question": "Respecto a tiempo real y eventos en APIs, ¿cuál es el propósito de «Orden, entrega y deduplicación»?",
    "options": [
      "Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes con precisión.",
      "Diseña para at-least-once, reordenamiento y efectos idempotentes sin degradar el flujo.",
      "Versiona hechos publicados porque varios consumidores pueden conservarlos durante años.",
      "Desacopla productores de consumidores mediante topics y entrega asíncrona en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Orden, entrega y deduplicación (Tiempo real y eventos): Diseña para at-least-once, reordenamiento y efectos idempotentes.",
    "topic": "Tiempo real y eventos",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-31",
    "collectionId": "apis",
    "question": "En APIs (Identidad y seguridad), ¿qué función técnica cumple «API keys»?",
    "options": [
      "Convierte identidad en decisiones de mínimo privilegio por operación y recurso al operar.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos.",
      "Identifica una aplicación sin tratarlas automáticamente como identidad de una persona.",
      "Delega autorización y obtiene identidad mediante flujos adecuados al tipo de cliente."
    ],
    "correctAnswerIndex": 2,
    "explanation": "API keys (Identidad y seguridad): Identifica una aplicación sin tratarlas automáticamente como identidad de una persona.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-32",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «OAuth 2.0 y OpenID Connect» en identidad y seguridad?",
    "options": [
      "Convierte identidad en decisiones de mínimo privilegio por operación y recurso al operar.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos.",
      "Identifica una aplicación sin tratarlas automáticamente como identidad de una persona.",
      "Delega autorización y obtiene identidad mediante flujos adecuados al tipo de cliente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "OAuth 2.0 y OpenID Connect (Identidad y seguridad): Delega autorización y obtiene identidad mediante flujos adecuados al tipo de cliente.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-33",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «Scopes, claims y políticas»?",
    "options": [
      "Convierte identidad en decisiones de mínimo privilegio por operación y recurso de forma segura.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos al operar.",
      "Delega autorización y obtiene identidad mediante flujos adecuados al tipo de cliente.",
      "Identifica una aplicación sin tratarlas automáticamente como identidad de una persona."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Scopes, claims y políticas (Identidad y seguridad): Convierte identidad en decisiones de mínimo privilegio por operación y recurso.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-34",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «mTLS y service identity»?",
    "options": [
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos al operar.",
      "Autentica ambos extremos en comunicaciones máquina a máquina respetando las invariantes.",
      "Delega autorización y obtiene identidad mediante flujos adecuados al tipo de cliente.",
      "Convierte identidad en decisiones de mínimo privilegio por operación y recurso al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "mTLS y service identity (Identidad y seguridad): Autentica ambos extremos en comunicaciones máquina a máquina.",
    "topic": "Identidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "apis-q-35",
    "collectionId": "apis",
    "question": "Respecto a identidad y seguridad en APIs, ¿cuál es el propósito de «CORS y frontera del navegador»?",
    "options": [
      "Delega autorización y obtiene identidad mediante flujos adecuados al tipo de cliente al operar.",
      "Identifica una aplicación sin tratarlas automáticamente como identidad de una persona al operar.",
      "Controla qué orígenes pueden leer respuestas sin confundirlo con autorización del servidor.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "CORS y frontera del navegador (Identidad y seguridad): Controla qué orígenes pueden leer respuestas sin confundirlo con autorización del servidor.",
    "topic": "Identidad y seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-36",
    "collectionId": "apis",
    "question": "En APIs (Identidad y seguridad), ¿qué función técnica cumple «Validación y límites»?",
    "options": [
      "Convierte identidad en decisiones de mínimo privilegio por operación y recurso al operar.",
      "Reutiliza selecciones y separa valores dinámicos del documento de operación al operar.",
      "Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes al operar.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Validación y límites (Identidad y seguridad): Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos.",
    "topic": "Identidad y seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-37",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Timeouts y presupuestos de latencia» en resiliencia y evolución?",
    "options": [
      "Evita esperas indefinidas y reparte un deadline entre dependencias durante la ejecución.",
      "Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo.",
      "Prefiere campos opcionales y deprecación medible antes de romper contratos existentes.",
      "Comprueba expectativas reales de consumidores en el pipeline del proveedor al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Timeouts y presupuestos de latencia (Resiliencia y evolución): Evita esperas indefinidas y reparte un deadline entre dependencias.",
    "topic": "Resiliencia y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-38",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «Retries con backoff y jitter»?",
    "options": [
      "Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo al operar.",
      "Recupera fallos transitorios sin amplificar una saturación bajo condiciones productivas.",
      "Prefiere campos opcionales y deprecación medible antes de romper contratos existentes.",
      "Comprueba expectativas reales de consumidores en el pipeline del proveedor en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Retries con backoff y jitter (Resiliencia y evolución): Recupera fallos transitorios sin amplificar una saturación.",
    "topic": "Resiliencia y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-39",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «Circuit breaker y load shedding»?",
    "options": [
      "Comprueba expectativas reales de consumidores en el pipeline del proveedor en el flujo.",
      "Mide uso, comunica fechas y ofrece migración antes de retirar una versión al operar.",
      "Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo.",
      "Prefiere campos opcionales y deprecación medible antes de romper contratos existentes."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Circuit breaker y load shedding (Resiliencia y evolución): Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo.",
    "topic": "Resiliencia y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-40",
    "collectionId": "apis",
    "question": "Respecto a resiliencia y evolución en APIs, ¿cuál es el propósito de «Versionado aditivo»?",
    "options": [
      "Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo al operar.",
      "Comprueba expectativas reales de consumidores en el pipeline del proveedor al evaluar.",
      "Mide uso, comunica fechas y ofrece migración antes de retirar una versión en el flujo.",
      "Prefiere campos opcionales y deprecación medible antes de romper contratos existentes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Versionado aditivo (Resiliencia y evolución): Prefiere campos opcionales y deprecación medible antes de romper contratos existentes.",
    "topic": "Resiliencia y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-41",
    "collectionId": "apis",
    "question": "En APIs (Resiliencia y evolución), ¿qué función técnica cumple «Consumer-driven contracts»?",
    "options": [
      "Comprueba expectativas reales de consumidores en el pipeline del proveedor en ejecución.",
      "Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo.",
      "Prefiere campos opcionales y deprecación medible antes de romper contratos existentes.",
      "Mide uso, comunica fechas y ofrece migración antes de retirar una versión en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Consumer-driven contracts (Resiliencia y evolución): Comprueba expectativas reales de consumidores en el pipeline del proveedor.",
    "topic": "Resiliencia y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-42",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Deprecación y sunset» en resiliencia y evolución?",
    "options": [
      "Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo al operar.",
      "Mide uso, comunica fechas y ofrece migración antes de retirar una versión con precisión.",
      "Prefiere campos opcionales y deprecación medible antes de romper contratos existentes.",
      "Comprueba expectativas reales de consumidores en el pipeline del proveedor en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Deprecación y sunset (Resiliencia y evolución): Mide uso, comunica fechas y ofrece migración antes de retirar una versión.",
    "topic": "Resiliencia y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-43",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «OpenAPI, AsyncAPI y reflexión»?",
    "options": [
      "Reduce trabajo repetitivo sin ocultar errores, retries o límites del transporte al operar.",
      "Ayuda a lograr la primera llamada correcta con credenciales y datos seguros al operar.",
      "Produce contratos legibles por personas y herramientas según el estilo de integración.",
      "Protege capacidad y comunica presupuesto, ventana y momento de reintento en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "OpenAPI, AsyncAPI y reflexión (Experiencia y operación): Produce contratos legibles por personas y herramientas según el estilo de integración.",
    "topic": "Experiencia y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-44",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «SDKs y generación de clientes»?",
    "options": [
      "Produce contratos legibles por personas y herramientas según el estilo de integración al operar.",
      "Mide disponibilidad y latencia desde la operación que el consumidor realmente necesita.",
      "Ayuda a lograr la primera llamada correcta con credenciales y datos seguros con precisión.",
      "Reduce trabajo repetitivo sin ocultar errores, retries o límites del transporte al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "SDKs y generación de clientes (Experiencia y operación): Reduce trabajo repetitivo sin ocultar errores, retries o límites del transporte.",
    "topic": "Experiencia y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-45",
    "collectionId": "apis",
    "question": "Respecto a experiencia y operación en APIs, ¿cuál es el propósito de «Portales y ejemplos ejecutables»?",
    "options": [
      "Ayuda a lograr la primera llamada correcta con credenciales y datos seguros dentro del flujo.",
      "Reduce trabajo repetitivo sin ocultar errores, retries o límites del transporte al operar.",
      "Produce contratos legibles por personas y herramientas según el estilo de integración.",
      "Mide disponibilidad y latencia desde la operación que el consumidor realmente necesita."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Portales y ejemplos ejecutables (Experiencia y operación): Ayuda a lograr la primera llamada correcta con credenciales y datos seguros.",
    "topic": "Experiencia y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-46",
    "collectionId": "apis",
    "question": "En APIs (Experiencia y operación), ¿qué función técnica cumple «Observabilidad por operación»?",
    "options": [
      "Reduce trabajo repetitivo sin ocultar errores, retries o límites del transporte al evaluar.",
      "Relaciona request ID, trace, latencia, resultado y versión del contrato de forma segura.",
      "Produce contratos legibles por personas y herramientas según el estilo de integración.",
      "Mide disponibilidad y latencia desde la operación que el consumidor realmente necesita."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Observabilidad por operación (Experiencia y operación): Relaciona request ID, trace, latencia, resultado y versión del contrato.",
    "topic": "Experiencia y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-47",
    "collectionId": "apis",
    "question": "Dentro de APIs, ¿cómo opera el mecanismo de «Rate limits y cuotas» en experiencia y operación?",
    "options": [
      "Reduce trabajo repetitivo sin ocultar errores, retries o límites del transporte al evaluar.",
      "Produce contratos legibles por personas y herramientas según el estilo de integración.",
      "Protege capacidad y comunica presupuesto, ventana y momento de reintento de forma clara.",
      "Mide disponibilidad y latencia desde la operación que el consumidor realmente necesita."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Rate limits y cuotas (Experiencia y operación): Protege capacidad y comunica presupuesto, ventana y momento de reintento.",
    "topic": "Experiencia y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-48",
    "collectionId": "apis",
    "question": "Al trabajar con APIs, ¿qué responsabilidad define a «SLOs de API»?",
    "options": [
      "Reduce trabajo repetitivo sin ocultar errores, retries o límites del transporte al operar.",
      "Produce contratos legibles por personas y herramientas según el estilo de integración.",
      "Ayuda a lograr la primera llamada correcta con credenciales y datos seguros al evaluar.",
      "Mide disponibilidad y latencia desde la operación que el consumidor realmente necesita."
    ],
    "correctAnswerIndex": 3,
    "explanation": "SLOs de API (Experiencia y operación): Mide disponibilidad y latencia desde la operación que el consumidor realmente necesita.",
    "topic": "Experiencia y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-49",
    "collectionId": "apis",
    "question": "En la arquitectura de APIs, ¿qué caracteriza técnicamente a «Crear la intención»?",
    "options": [
      "REST ofrece una frontera ampliamente interoperable para crear la intención sin perder estado.",
      "Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos.",
      "Distingue una orden, la representación de una entidad y un hecho que ya ocurrió al operar.",
      "Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Crear la intención (Caso en acción): REST ofrece una frontera ampliamente interoperable para crear la intención.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "apis-q-50",
    "collectionId": "apis",
    "question": "Respecto a caso en acción en APIs, ¿cuál es el propósito de «Consultar la vista»?",
    "options": [
      "Modela capacidades como llamadas remotas sin fingir que una red equivale a una función local al operar.",
      "GraphQL resuelve una necesidad de lectura sin convertir el modelo interno en un contrato accidental.",
      "Modela identidades estables mientras JSON, HTML u otros formatos expresan vistas del estado al operar.",
      "Transporta metadatos, autenticación, caché, formatos y trazabilidad fuera del cuerpo de negocio."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Consultar la vista (Caso en acción): GraphQL resuelve una necesidad de lectura sin convertir el modelo interno en un contrato accidental.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  }
];
