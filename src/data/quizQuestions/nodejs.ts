import type { QuizQuestion } from "@/data/quizTypes";

export const nodejsQuestions: QuizQuestion[] = [
  {
    "id": "nodejs-q-01",
    "collectionId": "nodejs",
    "question": "En Node.js (Runtime y event loop), ¿qué función técnica cumple «V8 y ejecución»?",
    "options": [
      "Compila JavaScript, administra objetos y optimiza código caliente manteniendo consistencia.",
      "Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes al operar.",
      "Distingue la fase de check del event loop de la cola de microtareas inmediatas al operar.",
      "Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "V8 y ejecución (Runtime y event loop): Compila JavaScript, administra objetos y optimiza código caliente.",
    "topic": "Runtime y event loop",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-02",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «libuv» en runtime y event loop?",
    "options": [
      "Distingue la fase de check del event loop de la cola de microtareas inmediatas en ejecución.",
      "Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes al operar.",
      "Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa en ejecución.",
      "Ordena timers, polling, callbacks y cierre sin prometer tiempo exacto de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "libuv (Runtime y event loop): Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes.",
    "topic": "Runtime y event loop",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-03",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «Fases del event loop»?",
    "options": [
      "Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes en el flujo.",
      "Distingue la fase de check del event loop de la cola de microtareas inmediatas al operar.",
      "Ordena timers, polling, callbacks y cierre sin prometer tiempo exacto sin perder estado.",
      "Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fases del event loop (Runtime y event loop): Ordena timers, polling, callbacks y cierre sin prometer tiempo exacto.",
    "topic": "Runtime y event loop",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-04",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «Microtasks»?",
    "options": [
      "Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes en el flujo.",
      "Distingue la fase de check del event loop de la cola de microtareas inmediatas al operar.",
      "Ordena timers, polling, callbacks y cierre sin prometer tiempo exacto sin perder estado.",
      "Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Microtasks (Runtime y event loop): Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa.",
    "topic": "Runtime y event loop",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-05",
    "collectionId": "nodejs",
    "question": "Respecto a runtime y event loop en Node.js, ¿cuál es el propósito de «Event loop delay»?",
    "options": [
      "Mide cuánto trabajo síncrono impide atender la siguiente vuelta respetando las invariantes.",
      "Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes al operar.",
      "Distingue la fase de check del event loop de la cola de microtareas inmediatas al operar.",
      "Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Event loop delay (Runtime y event loop): Mide cuánto trabajo síncrono impide atender la siguiente vuelta.",
    "topic": "Runtime y event loop",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-06",
    "collectionId": "nodejs",
    "question": "En Node.js (Runtime y event loop), ¿qué función técnica cumple «setImmediate vs process.nextTick»?",
    "options": [
      "Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes en ejecución.",
      "Distingue la fase de check del event loop de la cola de microtareas inmediatas al operar.",
      "Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa en ejecución.",
      "Ordena timers, polling, callbacks y cierre sin prometer tiempo exacto de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "setImmediate vs process.nextTick (Runtime y event loop): Distingue la fase de check del event loop de la cola de microtareas inmediatas.",
    "topic": "Runtime y event loop",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-07",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «ES modules» en módulos y paquetes?",
    "options": [
      "Encapsula módulos privados internos mediante alias definidos en package.json con precisión.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Resuelve imports mediante URLs, exports y reglas explícitas de package dentro del flujo.",
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ES modules (Módulos y paquetes): Resuelve imports mediante URLs, exports y reglas explícitas de package.",
    "topic": "Módulos y paquetes",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-08",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «CommonJS»?",
    "options": [
      "Encapsula módulos privados internos mediante alias definidos en package.json con precisión.",
      "Resuelve imports mediante URLs, exports y reglas explícitas de package dentro del flujo.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Carga módulos históricos con require, cache y exports mutables manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "CommonJS (Módulos y paquetes): Carga módulos históricos con require, cache y exports mutables.",
    "topic": "Módulos y paquetes",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-09",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «package.json»?",
    "options": [
      "Declara identidad, scripts, engines, exports y tipo de módulos manteniendo consistencia.",
      "Encapsula módulos privados internos mediante alias definidos en package.json al operar.",
      "Resuelve imports mediante URLs, exports y reglas explícitas de package de forma clara.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "package.json (Módulos y paquetes): Declara identidad, scripts, engines, exports y tipo de módulos.",
    "topic": "Módulos y paquetes",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-10",
    "collectionId": "nodejs",
    "question": "Respecto a módulos y paquetes en Node.js, ¿cuál es el propósito de «Resolución y exports»?",
    "options": [
      "Encapsula módulos privados internos mediante alias definidos en package.json con precisión.",
      "Limita la superficie pública y evita imports internos frágiles manteniendo consistencia.",
      "Resuelve imports mediante URLs, exports y reglas explícitas de package dentro del flujo.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Resolución y exports (Módulos y paquetes): Limita la superficie pública y evita imports internos frágiles.",
    "topic": "Módulos y paquetes",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-11",
    "collectionId": "nodejs",
    "question": "En Node.js (Módulos y paquetes), ¿qué función técnica cumple «Lockfile y provenance»?",
    "options": [
      "Encapsula módulos privados internos mediante alias definidos en package.json con precisión.",
      "Resuelve imports mediante URLs, exports y reglas explícitas de package dentro del flujo.",
      "Fija el grafo instalado y conserva evidencia sobre lo publicado dentro de la aplicación.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Lockfile y provenance (Módulos y paquetes): Fija el grafo instalado y conserva evidencia sobre lo publicado.",
    "topic": "Módulos y paquetes",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-12",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «Subpath imports (#internal)» en módulos y paquetes?",
    "options": [
      "Resuelve imports mediante URLs, exports y reglas explícitas de package de modo predecible.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera al operar.",
      "Encapsula módulos privados internos mediante alias definidos en package.json al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Subpath imports (#internal) (Módulos y paquetes): Encapsula módulos privados internos mediante alias definidos en package.json.",
    "topic": "Módulos y paquetes",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-13",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «Callbacks»?",
    "options": [
      "Representa finalización y exigen una sola invocación con contrato de error de modo predecible.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso.",
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera.",
      "Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Callbacks (Asincronía y errores): Representan finalización y exigen una sola invocación con contrato de error.",
    "topic": "Asincronía y errores",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-14",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «Promises y async await»?",
    "options": [
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Componen resultados sin convertir trabajo CPU en no bloqueante manteniendo consistencia.",
      "Representa finalización y exigen una sola invocación con contrato de error en ejecución.",
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Promises y async await (Asincronía y errores): Componen resultados sin convertir trabajo CPU en no bloqueante.",
    "topic": "Asincronía y errores",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-15",
    "collectionId": "nodejs",
    "question": "Respecto a asincronía y errores en Node.js, ¿cuál es el propósito de «AbortSignal»?",
    "options": [
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Representa finalización y exigen una sola invocación con contrato de error en ejecución.",
      "Propaga cancelación y deadlines a operaciones cooperativas bajo condiciones productivas.",
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "AbortSignal (Asincronía y errores): Propaga cancelación y deadlines a operaciones cooperativas.",
    "topic": "Asincronía y errores",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-16",
    "collectionId": "nodejs",
    "question": "En Node.js (Asincronía y errores), ¿qué función técnica cumple «Errores operativos»?",
    "options": [
      "Representa finalización y exigen una sola invocación con contrato de error al operar.",
      "Conserva identidad de solicitud a través de callbacks y promises dentro del flujo.",
      "Componen resultados sin convertir trabajo CPU en no bloqueante de modo predecible.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Errores operativos (Asincronía y errores): Distingue fallos esperables de invariantes rotas que requieren detener el proceso.",
    "topic": "Asincronía y errores",
    "difficulty": "básico"
  },
  {
    "id": "nodejs-q-17",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «Async context» en asincronía y errores?",
    "options": [
      "Conserva identidad de solicitud a través de callbacks y promises sin degradar el flujo.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso.",
      "Representa finalización y exigen una sola invocación con contrato de error al operar.",
      "Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Async context (Asincronía y errores): Conserva identidad de solicitud a través de callbacks y promises.",
    "topic": "Asincronía y errores",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-18",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «EventTarget y EventEmitter»?",
    "options": [
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso en el flujo.",
      "Coordina eventos asíncronos desacoplados con contratos de listeners y desuscripción limpia.",
      "Representa finalización y exigen una sola invocación con contrato de error de forma segura.",
      "Establece canales directos bidireccionales de transferencia de memoria entre workers al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "EventTarget y EventEmitter (Asincronía y errores): Coordina eventos asíncronos desacoplados con contratos de listeners y desuscripción limpia.",
    "topic": "Asincronía y errores",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-19",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «Buffer»?",
    "options": [
      "Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables al operar.",
      "Conecta streams y propaga error, cierre y cleanup de extremo a extremo dentro del flujo.",
      "Representa bytes con límites y encoding explícitos respetando las restricciones de tipo.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Buffer (Buffers, streams y red): Representa bytes con límites y encoding explícitos.",
    "topic": "Buffers, streams y red",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-20",
    "collectionId": "nodejs",
    "question": "Respecto a buffers, streams y red en Node.js, ¿cuál es el propósito de «Readable y Writable»?",
    "options": [
      "Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables al operar.",
      "Conecta streams y propaga error, cierre y cleanup de extremo a extremo dentro del flujo.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Modela productores y consumidores con estados de flujo dentro de la arquitectura activa."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Readable y Writable (Buffers, streams y red): Modelan productores y consumidores con estados de flujo.",
    "topic": "Buffers, streams y red",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-21",
    "collectionId": "nodejs",
    "question": "En Node.js (Buffers, streams y red), ¿qué función técnica cumple «Backpressure»?",
    "options": [
      "Detiene al productor cuando el consumidor alcanza su highWaterMark respetando las invariantes.",
      "Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables al operar.",
      "Conecta streams y propaga error, cierre y cleanup de extremo a extremo de forma clara.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Backpressure (Buffers, streams y red): Detiene al productor cuando el consumidor alcanza su highWaterMark.",
    "topic": "Buffers, streams y red",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-22",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «Pipeline» en buffers, streams y red?",
    "options": [
      "Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables al operar.",
      "Conecta streams y propaga error, cierre y cleanup de extremo a extremo dentro del flujo.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pipeline (Buffers, streams y red): Conecta streams y propaga error, cierre y cleanup de extremo a extremo.",
    "topic": "Buffers, streams y red",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-23",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «HTTP y fetch»?",
    "options": [
      "Modifica flujos de datos al vuelo intercalando compresión gzip o transformaciones de formato.",
      "Conecta streams y propaga error, cierre y cleanup de extremo a extremo de modo predecible.",
      "Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables al operar.",
      "Establece canales directos bidireccionales de transferencia de memoria entre workers al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "HTTP y fetch (Buffers, streams y red): Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables.",
    "topic": "Buffers, streams y red",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-24",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «Transform streams»?",
    "options": [
      "Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables de forma clara.",
      "Distingue lecturas atómicas no bloqueantes de bloqueos fatales en tiempo de ejecución al operar.",
      "Conecta streams y propaga error, cierre y cleanup de extremo a extremo sin degradar el flujo.",
      "Modifica flujos de datos al vuelo intercalando compresión gzip o transformaciones de formato."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Transform streams y compresión (Buffers, streams y red): Modifica flujos de datos al vuelo intercalando compresión gzip o transformaciones de formato.",
    "topic": "Buffers, streams y red",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-25",
    "collectionId": "nodejs",
    "question": "Respecto a paralelismo y procesos en Node.js, ¿cuál es el propósito de «Worker threads»?",
    "options": [
      "Ejecuta JavaScript CPU-bound en isolates con mensajes o memoria compartida en ejecución.",
      "Establece canales directos bidireccionales de transferencia de memoria entre workers.",
      "Aísla ejecutables y conectan stdin, stdout, señales y códigos de salida con precisión.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Worker threads (Paralelismo y procesos): Ejecutan JavaScript CPU-bound en isolates con mensajes o memoria compartida.",
    "topic": "Paralelismo y procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-26",
    "collectionId": "nodejs",
    "question": "En Node.js (Paralelismo y procesos), ¿qué función técnica cumple «Child processes»?",
    "options": [
      "Establece canales directos bidireccionales de transferencia de memoria entre workers al operar.",
      "Aísla ejecutables y conectan stdin, stdout, señales y códigos de salida de forma segura.",
      "Ejecuta JavaScript CPU-bound en isolates con mensajes o memoria compartida en ejecución.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Child processes (Paralelismo y procesos): Aíslan ejecutables y conectan stdin, stdout, señales y códigos de salida.",
    "topic": "Paralelismo y procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-27",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «Cluster y réplicas» en paralelismo y procesos?",
    "options": [
      "Establece canales directos bidireccionales de transferencia de memoria entre workers al operar.",
      "Ejecuta JavaScript CPU-bound en isolates con mensajes o memoria compartida de forma segura.",
      "Distribuye conexiones entre procesos, aunque la plataforma puede escalar fuera del runtime.",
      "Aísla ejecutables y conectan stdin, stdout, señales y códigos de salida de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cluster y réplicas (Paralelismo y procesos): Distribuyen conexiones entre procesos, aunque la plataforma puede escalar fuera del runtime.",
    "topic": "Paralelismo y procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-28",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «SharedArrayBuffer y Atomics»?",
    "options": [
      "Establece canales directos bidireccionales de transferencia de memoria entre workers al operar.",
      "Ejecuta JavaScript CPU-bound en isolates con mensajes o memoria compartida en el flujo.",
      "Aísla ejecutables y conectan stdin, stdout, señales y códigos de salida de forma clara.",
      "Coordina memoria compartida con costos y riesgos visibles bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "SharedArrayBuffer y Atomics (Paralelismo y procesos): Coordinan memoria compartida con costos y riesgos visibles.",
    "topic": "Paralelismo y procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-29",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «Signals»?",
    "options": [
      "Inicia drenaje y cierre ordenado en vez de cortar trabajo en curso durante la ejecución.",
      "Establece canales directos bidireccionales de transferencia de memoria entre workers.",
      "Ejecuta JavaScript CPU-bound en isolates con mensajes o memoria compartida al evaluar.",
      "Aísla ejecutables y conectan stdin, stdout, señales y códigos de salida con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Signals (Paralelismo y procesos): Inician drenaje y cierre ordenado en vez de cortar trabajo en curso.",
    "topic": "Paralelismo y procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-30",
    "collectionId": "nodejs",
    "question": "Respecto a paralelismo y procesos en Node.js, ¿cuál es el propósito de «MessageChannel y MessagePort»?",
    "options": [
      "Ejecuta JavaScript CPU-bound en isolates con mensajes o memoria compartida en ejecución.",
      "Establece canales directos bidireccionales de transferencia de memoria entre workers.",
      "Aísla ejecutables y conectan stdin, stdout, señales y códigos de salida en ejecución.",
      "Inicia drenaje y cierre ordenado en vez de cortar trabajo en curso sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "MessageChannel y MessagePort (Paralelismo y procesos): Establece canales directos bidireccionales de transferencia de memoria entre workers.",
    "topic": "Paralelismo y procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-31",
    "collectionId": "nodejs",
    "question": "En Node.js (Operación y seguridad), ¿qué función técnica cumple «Configuración y secretos»?",
    "options": [
      "Ejecuta operaciones criptográficas, hash HMAC y generación de claves seguras con precisión.",
      "Combina unitarias, integración, contratos y carga con recursos cerrados de forma segura.",
      "Valida el entorno al arrancar y evita registrar credenciales respetando las invariantes.",
      "Usa heap snapshots y perfiles para distinguir fuga de carga legítima de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Configuración y secretos (Operación y seguridad): Valida el entorno al arrancar y evita registrar credenciales.",
    "topic": "Operación y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-32",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «Diagnóstico de memoria» en operación y seguridad?",
    "options": [
      "Ejecuta operaciones criptográficas, hash HMAC y generación de claves seguras con precisión.",
      "Combina unitarias, integración, contratos y carga con recursos cerrados de forma segura.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Usa heap snapshots y perfiles para distinguir fuga de carga legítima de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Diagnóstico de memoria (Operación y seguridad): Usa heap snapshots y perfiles para distinguir fuga de carga legítima.",
    "topic": "Operación y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-33",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «CPU profiling»?",
    "options": [
      "Localiza funciones que bloquean el loop o consumen workers bajo condiciones productivas.",
      "Ejecuta operaciones criptográficas, hash HMAC y generación de claves seguras al operar.",
      "Combina unitarias, integración, contratos y carga con recursos cerrados con precisión.",
      "Usa heap snapshots y perfiles para distinguir fuga de carga legítima dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CPU profiling (Operación y seguridad): Localiza funciones que bloquean el loop o consumen workers.",
    "topic": "Operación y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-34",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «Testing»?",
    "options": [
      "Ejecuta operaciones criptográficas, hash HMAC y generación de claves seguras con precisión.",
      "Combina unitarias, integración, contratos y carga con recursos cerrados de forma segura.",
      "Usa heap snapshots y perfiles para distinguir fuga de carga legítima de modo predecible.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Testing (Operación y seguridad): Combina unitarias, integración, contratos y carga con recursos cerrados.",
    "topic": "Operación y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nodejs-q-35",
    "collectionId": "nodejs",
    "question": "Respecto a operación y seguridad en Node.js, ¿cuál es el propósito de «Supply chain»?",
    "options": [
      "Ejecuta operaciones criptográficas, hash HMAC y generación de claves seguras con precisión.",
      "Combina unitarias, integración, contratos y carga con recursos cerrados de forma segura.",
      "Audita dependencias, reduce scripts y actualiza líneas soportadas sin degradar el flujo.",
      "Usa heap snapshots y perfiles para distinguir fuga de carga legítima de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Supply chain (Operación y seguridad): Audita dependencias, reduce scripts y actualiza líneas soportadas.",
    "topic": "Operación y seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-36",
    "collectionId": "nodejs",
    "question": "En Node.js (Operación y seguridad), ¿qué función técnica cumple «Crypto nativo y Web Crypto API»?",
    "options": [
      "Combina unitarias, integración, contratos y carga con recursos cerrados de modo predecible.",
      "Usa heap snapshots y perfiles para distinguir fuga de carga legítima de modo predecible.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar.",
      "Ejecuta operaciones criptográficas, hash HMAC y generación de claves seguras al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Crypto nativo y Web Crypto API (Operación y seguridad): Ejecuta operaciones criptográficas, hash HMAC y generación de claves seguras.",
    "topic": "Operación y seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-37",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «HTTP/2 y multiplexación binaria» en arquitectura de red y protocolos avanzados?",
    "options": [
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera.",
      "Comunica procesos en la misma máquina a velocidades de memoria sin sobrecarga IP.",
      "Reutiliza sockets TCP con Agent para reducir latencia de handshake en ejecución.",
      "Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa."
    ],
    "correctAnswerIndex": 0,
    "explanation": "HTTP/2 y multiplexación binaria (Arquitectura de red y protocolos avanzados): Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera.",
    "topic": "Arquitectura de red y protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-38",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «WebSockets nativos y ws»?",
    "options": [
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera al operar.",
      "Establece túneles full-duplex de baja latencia para streaming bidireccional y telemetría.",
      "Comunica procesos en la misma máquina a velocidades de memoria sin sobrecarga IP al operar.",
      "Controla cache y timeouts de dns.lookup vs dns.resolve para evitar agotar hilos de libuv."
    ],
    "correctAnswerIndex": 1,
    "explanation": "WebSockets nativos y ws (Arquitectura de red y protocolos avanzados): Establece túneles full-duplex de baja latencia para streaming bidireccional y telemetría.",
    "topic": "Arquitectura de red y protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-39",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «DNS y resolución de nombres»?",
    "options": [
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera al operar.",
      "Comunica procesos en la misma máquina a velocidades de memoria sin sobrecarga IP al operar.",
      "Controla cache y timeouts de dns.lookup vs dns.resolve para evitar agotar hilos de libuv.",
      "Establece túneles full-duplex de baja latencia para streaming bidireccional y telemetría."
    ],
    "correctAnswerIndex": 2,
    "explanation": "DNS y resolución de nombres (Arquitectura de red y protocolos avanzados): Controla cache y timeouts de dns.lookup vs dns.resolve para evitar agotar hilos de libuv.",
    "topic": "Arquitectura de red y protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-40",
    "collectionId": "nodejs",
    "question": "Respecto a arquitectura de red y protocolos avanzados en Node.js, ¿cuál es el propósito de «TLS/SSL y ALPN»?",
    "options": [
      "Establece túneles full-duplex de baja latencia para streaming bidireccional y telemetría al operar.",
      "Controla cache y timeouts de dns.lookup vs dns.resolve para evitar agotar hilos de libuv al operar.",
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera en el flujo.",
      "Configura certificados, negociación de protocolos y rotación de claves criptográficas seguras."
    ],
    "correctAnswerIndex": 3,
    "explanation": "TLS/SSL y ALPN (Arquitectura de red y protocolos avanzados): Configura certificados, negociación de protocolos y rotación de claves criptográficas seguras.",
    "topic": "Arquitectura de red y protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-41",
    "collectionId": "nodejs",
    "question": "En Node.js (Arquitectura de red y protocolos avanzados), ¿qué función técnica cumple «Keep-Alive y agentes HTTP»?",
    "options": [
      "Reutiliza sockets TCP con Agent para reducir latencia de handshake respetando las invariantes.",
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera.",
      "Comunica procesos en la misma máquina a velocidades de memoria sin sobrecarga IP al operar.",
      "Establece túneles full-duplex de baja latencia para streaming bidireccional y telemetría."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Keep-Alive y agentes HTTP (Arquitectura de red y protocolos avanzados): Reutiliza sockets TCP con Agent({ keepAlive: true }) para reducir latencia de handshake.",
    "topic": "Arquitectura de red y protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-42",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «Unix Domain Sockets y pipes locales» en arquitectura de red y protocolos avanzados?",
    "options": [
      "Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera en el flujo.",
      "Comunica procesos en la misma máquina a velocidades de memoria sin sobrecarga IP al operar.",
      "Establece túneles full-duplex de baja latencia para streaming bidireccional y telemetría.",
      "Controla cache y timeouts de dns.lookup vs dns.resolve para evitar agotar hilos de libuv."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Unix Domain Sockets y pipes locales (Arquitectura de red y protocolos avanzados): Comunica procesos en la misma máquina a velocidades de memoria sin sobrecarga IP.",
    "topic": "Arquitectura de red y protocolos avanzados",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-43",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «V8 Heap Snapshots y Allocation Timelines»?",
    "options": [
      "Propaga correlation IDs e información de auditoría a través de saltos asíncronos al operar.",
      "Publica y suscribe eventos internos de librerías sin penalización de rendimiento al operar.",
      "Rastrea retención de objetos y fugas de memoria en el recolector de basura en ejecución.",
      "Conecta herramientas de depuración al puerto 9229 para inspección en tiempo real al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "V8 Heap Snapshots y Allocation Timelines (Diagnóstico profundo y observabilidad): Rastrea retención de objetos y fugas de memoria en el recolector de basura.",
    "topic": "Diagnóstico profundo y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-44",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «AsyncLocalStorage y Context Tracing»?",
    "options": [
      "Publica y suscribe eventos internos de librerías sin penalización de rendimiento en ejecución.",
      "Conecta herramientas de depuración al puerto 9229 para inspección en tiempo real al operar.",
      "Analiza volcados de memoria tras caídas fatales usando utilidades del sistema en ejecución.",
      "Propaga correlation IDs e información de auditoría a través de saltos asíncronos al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "AsyncLocalStorage y Context Tracing (Diagnóstico profundo y observabilidad): Propaga correlation IDs e información de auditoría a través de saltos asíncronos.",
    "topic": "Diagnóstico profundo y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-45",
    "collectionId": "nodejs",
    "question": "Respecto a diagnóstico profundo y observabilidad en Node.js, ¿cuál es el propósito de «Diagnostics Channel nativo»?",
    "options": [
      "Publica y suscribe eventos internos de librerías sin penalización de rendimiento en ejecución.",
      "Propaga correlation IDs e información de auditoría a través de saltos asíncronos al operar.",
      "Conecta herramientas de depuración al puerto 9229 para inspección en tiempo real al operar.",
      "Analiza volcados de memoria tras caídas fatales usando utilidades del sistema al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Diagnostics Channel nativo (Diagnóstico profundo y observabilidad): Publica y suscribe eventos internos de librerías sin penalización de rendimiento.",
    "topic": "Diagnóstico profundo y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-46",
    "collectionId": "nodejs",
    "question": "En Node.js (Diagnóstico profundo y observabilidad), ¿qué función técnica cumple «Node.js Inspector»?",
    "options": [
      "Propaga correlation IDs e información de auditoría a través de saltos asíncronos en ejecución.",
      "Conecta herramientas de depuración al puerto 9229 para inspección en tiempo real al operar.",
      "Publica y suscribe eventos internos de librerías sin penalización de rendimiento al operar.",
      "Analiza volcados de memoria tras caídas fatales usando utilidades del sistema en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Node.js Inspector y depuración remota (Diagnóstico profundo y observabilidad): Conecta herramientas de depuración al puerto 9229 para inspección en tiempo real.",
    "topic": "Diagnóstico profundo y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-47",
    "collectionId": "nodejs",
    "question": "Dentro de Node.js, ¿cómo opera el mecanismo de «Core Dumps y post-mortem debugging» en diagnóstico profundo y observabilidad?",
    "options": [
      "Propaga correlation IDs e información de auditoría a través de saltos asíncronos al operar.",
      "Publica y suscribe eventos internos de librerías sin penalización de rendimiento al operar.",
      "Analiza volcados de memoria tras caídas fatales usando utilidades del sistema al operar.",
      "Conecta herramientas de depuración al puerto 9229 para inspección en tiempo real al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Core Dumps y post-mortem debugging (Diagnóstico profundo y observabilidad): Analiza volcados de memoria tras caídas fatales usando utilidades del sistema.",
    "topic": "Diagnóstico profundo y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-48",
    "collectionId": "nodejs",
    "question": "Al trabajar con Node.js, ¿qué responsabilidad define a «Métricas del Garbage Collector (perf_hooks)»?",
    "options": [
      "Propaga correlation IDs e información de auditoría a través de saltos asíncronos al operar.",
      "Publica y suscribe eventos internos de librerías sin penalización de rendimiento al operar.",
      "Conecta herramientas de depuración al puerto 9229 para inspección en tiempo real al operar.",
      "Supervisa pausas de GC y tiempos de detención del runtime bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Métricas del Garbage Collector (perf_hooks) (Diagnóstico profundo y observabilidad): Supervisa pausas de GC y tiempos de detención del runtime.",
    "topic": "Diagnóstico profundo y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-49",
    "collectionId": "nodejs",
    "question": "En la arquitectura de Node.js, ¿qué caracteriza técnicamente a «fs.promises y APIs síncronas»?",
    "options": [
      "Distingue lecturas atómicas no bloqueantes de bloqueos fatales en tiempo de ejecución al operar.",
      "Administra límites de descriptores cerrando archivos inmediatamente tras su uso.",
      "Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes al operar.",
      "Distingue la fase de check del event loop de la cola de microtareas inmediatas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "fs.promises y APIs síncronas (Manipulación avanzada del sistema de archivos y E/S): Distingue lecturas atómicas no bloqueantes de bloqueos fatales en tiempo de ejecución.",
    "topic": "Manipulación avanzada del sistema de archivos y E/S",
    "difficulty": "avanzado"
  },
  {
    "id": "nodejs-q-50",
    "collectionId": "nodejs",
    "question": "Respecto a manipulación avanzada del sistema de archivos y e/s en Node.js, ¿cuál es el propósito de «File Descriptors»?",
    "options": [
      "Distingue lecturas atómicas no bloqueantes de bloqueos fatales en tiempo de ejecución al operar.",
      "Administra límites de descriptores cerrando archivos inmediatamente tras su uso al operar.",
      "Establece canales directos bidireccionales de transferencia de memoria entre workers al operar.",
      "Distingue fallos esperables de invariantes rotas que requieren detener el proceso al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "File Descriptors y límites del SO (Manipulación avanzada del sistema de archivos y E/S): Administra límites de descriptores cerrando archivos inmediatamente tras su uso.",
    "topic": "Manipulación avanzada del sistema de archivos y E/S",
    "difficulty": "avanzado"
  }
];
