import type { QuizQuestion } from "@/data/quizTypes";

export const javaQuestions: QuizQuestion[] = [
  {
    "id": "java-q-01",
    "collectionId": "java",
    "question": "En Java (Modelo de memoria concurrente), ¿qué función técnica cumple «Happens-before»?",
    "options": [
      "Garantiza que las escrituras de un hilo sean visibles para otro tras una acción sincronizada.",
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo.",
      "Controla lecturas y escrituras con garantías graduadas de atomicidad y barreras de memoria.",
      "Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Happens-before (Modelo de memoria concurrente): Garantiza que las escrituras de un hilo sean visibles para otro tras una acción sincronizada.",
    "topic": "Modelo de memoria concurrente",
    "difficulty": "básico"
  },
  {
    "id": "java-q-02",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «Volatile» en modelo de memoria concurrente?",
    "options": [
      "Controla lecturas y escrituras con garantías graduadas de atomicidad y barreras de memoria.",
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo.",
      "Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador.",
      "Garantiza que las escrituras de un hilo sean visibles para otro tras una acción sincronizada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Volatile (Modelo de memoria concurrente): Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo.",
    "topic": "Modelo de memoria concurrente",
    "difficulty": "básico"
  },
  {
    "id": "java-q-03",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «Intrinsic locks»?",
    "options": [
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo al operar.",
      "Controla lecturas y escrituras con garantías graduadas de atomicidad y barreras de memoria.",
      "Sincroniza el acceso exclusivo a una sección crítica mediante el monitor asociado a un objeto.",
      "Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Intrinsic locks (Modelo de memoria concurrente): Sincroniza el acceso exclusivo a una sección crítica mediante el monitor asociado a un objeto.",
    "topic": "Modelo de memoria concurrente",
    "difficulty": "básico"
  },
  {
    "id": "java-q-04",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «Atomic variables»?",
    "options": [
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo al operar.",
      "Controla lecturas y escrituras con garantías graduadas de atomicidad y barreras de memoria.",
      "Garantiza que las escrituras de un hilo sean visibles para otro tras una acción sincronizada.",
      "Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Atomic variables (Modelo de memoria concurrente): Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador.",
    "topic": "Modelo de memoria concurrente",
    "difficulty": "básico"
  },
  {
    "id": "java-q-05",
    "collectionId": "java",
    "question": "Respecto a modelo de memoria concurrente en Java, ¿cuál es el propósito de «False sharing»?",
    "options": [
      "Degrada el rendimiento cuando hilos distintos modifican variables ubicadas en la misma caché.",
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo.",
      "Controla lecturas y escrituras con garantías graduadas de atomicidad y barreras de memoria.",
      "Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador."
    ],
    "correctAnswerIndex": 0,
    "explanation": "False sharing (Modelo de memoria concurrente): Degrada el rendimiento cuando hilos distintos modifican variables ubicadas en la misma caché.",
    "topic": "Modelo de memoria concurrente",
    "difficulty": "básico"
  },
  {
    "id": "java-q-06",
    "collectionId": "java",
    "question": "En Java (Modelo de memoria concurrente), ¿qué función técnica cumple «Safe publication»?",
    "options": [
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo al operar.",
      "Expone una referencia construida de modo que ningún hilo observe su estado interno incompleto.",
      "Controla lecturas y escrituras con garantías graduadas de atomicidad y barreras de memoria.",
      "Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Safe publication (Modelo de memoria concurrente): Expone una referencia construida de modo que ningún hilo observe su estado interno incompleto.",
    "topic": "Modelo de memoria concurrente",
    "difficulty": "básico"
  },
  {
    "id": "java-q-07",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «Final field semantics» en modelo de memoria concurrente?",
    "options": [
      "Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador al operar.",
      "Garantiza que las escrituras de un hilo sean visibles para otro tras una acción sincronizada al operar.",
      "Garantiza que los campos inmutables inicializados en el constructor se lean completos sin bloqueo.",
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Final field semantics (Modelo de memoria concurrente): Garantiza que los campos inmutables inicializados en el constructor se lean completos sin bloqueo.",
    "topic": "Modelo de memoria concurrente",
    "difficulty": "básico"
  },
  {
    "id": "java-q-08",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «VarHandle access modes»?",
    "options": [
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo.",
      "Actualiza valores compartidos sin bloqueos utilizando instrucciones atómicas del procesador.",
      "Garantiza que las escrituras de un hilo sean visibles para otro tras una acción sincronizada.",
      "Controla lecturas y escrituras con garantías graduadas de atomicidad y barreras de memoria."
    ],
    "correctAnswerIndex": 3,
    "explanation": "VarHandle access modes (Modelo de memoria concurrente): Controla lecturas y escrituras con garantías graduadas de atomicidad y barreras de memoria.",
    "topic": "Modelo de memoria concurrente",
    "difficulty": "básico"
  },
  {
    "id": "java-q-09",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «Virtual threads»?",
    "options": [
      "Ejecuta millones de hilos ligeros gestionados por el runtime que liberan su portador al bloquearse al operar.",
      "Comparte datos inmutables a lo largo de una cadena de llamadas y subtareas sin fugas de hilo.",
      "Divide tareas recursivas en subtareas pequeñas y balancea su carga mediante robo de trabajo al operar.",
      "Establece un contrato asíncrono no bloqueante con control explícito de demanda entre etapas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Virtual threads (Concurrencia moderna): Ejecuta millones de hilos ligeros gestionados por el runtime que liberan su portador al bloquearse.",
    "topic": "Concurrencia moderna",
    "difficulty": "básico"
  },
  {
    "id": "java-q-10",
    "collectionId": "java",
    "question": "Respecto a concurrencia moderna en Java, ¿cuál es el propósito de «Structured concurrency»?",
    "options": [
      "Provee estructuras compartidas seguras para múltiples hilos sin bloquear toda la colección.",
      "Agrupa subtareas paralelas en un ámbito común para unificar plazos, errores y cancelación.",
      "Divide tareas recursivas en subtareas pequeñas y balancea su carga mediante robo de trabajo.",
      "Establece un contrato asíncrono no bloqueante con control explícito de demanda entre etapas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Structured concurrency (Concurrencia moderna): Agrupa subtareas paralelas en un ámbito común para unificar plazos, errores y cancelación.",
    "topic": "Concurrencia moderna",
    "difficulty": "básico"
  },
  {
    "id": "java-q-11",
    "collectionId": "java",
    "question": "En Java (Concurrencia moderna), ¿qué función técnica cumple «Concurrent collections»?",
    "options": [
      "Agrupa subtareas paralelas en un ámbito común para unificar plazos, errores y cancelación al operar.",
      "Divide tareas recursivas en subtareas pequeñas y balancea su carga mediante robo de trabajo.",
      "Provee estructuras compartidas seguras para múltiples hilos sin bloquear toda la colección.",
      "Establece un contrato asíncrono no bloqueante con control explícito de demanda entre etapas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Concurrent collections (Concurrencia moderna): Provee estructuras compartidas seguras para múltiples hilos sin bloquear toda la colección.",
    "topic": "Concurrencia moderna",
    "difficulty": "básico"
  },
  {
    "id": "java-q-12",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «ForkJoinPool» en concurrencia moderna?",
    "options": [
      "Agrupa subtareas paralelas en un ámbito común para unificar plazos, errores y cancelación al operar.",
      "Provee estructuras compartidas seguras para múltiples hilos sin bloquear toda la colección.",
      "Establece un contrato asíncrono no bloqueante con control explícito de demanda entre etapas.",
      "Divide tareas recursivas en subtareas pequeñas y balancea su carga mediante robo de trabajo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "ForkJoinPool (Concurrencia moderna): Divide tareas recursivas en subtareas pequeñas y balancea su carga mediante robo de trabajo.",
    "topic": "Concurrencia moderna",
    "difficulty": "básico"
  },
  {
    "id": "java-q-13",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «Reactive streams»?",
    "options": [
      "Establece un contrato asíncrono no bloqueante con control explícito de demanda entre etapas.",
      "Agrupa subtareas paralelas en un ámbito común para unificar plazos, errores y cancelación.",
      "Provee estructuras compartidas seguras para múltiples hilos sin bloquear toda la colección.",
      "Divide tareas recursivas en subtareas pequeñas y balancea su carga mediante robo de trabajo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reactive streams (Concurrencia moderna): Establece un contrato asíncrono no bloqueante con control explícito de demanda entre etapas.",
    "topic": "Concurrencia moderna",
    "difficulty": "básico"
  },
  {
    "id": "java-q-14",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «Scoped values»?",
    "options": [
      "Agrupa subtareas paralelas en un ámbito común para unificar plazos, errores y cancelación al operar.",
      "Comparte datos inmutables a lo largo de una cadena de llamadas y subtareas sin fugas de hilo.",
      "Provee estructuras compartidas seguras para múltiples hilos sin bloquear toda la colección.",
      "Divide tareas recursivas en subtareas pequeñas y balancea su carga mediante robo de trabajo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Scoped values (Concurrencia moderna): Comparte datos inmutables a lo largo de una cadena de llamadas y subtareas sin fugas de hilo.",
    "topic": "Concurrencia moderna",
    "difficulty": "básico"
  },
  {
    "id": "java-q-15",
    "collectionId": "java",
    "question": "Respecto a procesamiento de colecciones en Java, ¿cuál es el propósito de «Spliterators»?",
    "options": [
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común al operar.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones.",
      "Recorre y particiona fuentes de datos para alimentar tuberías secuenciales o paralelas.",
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Spliterators (Procesamiento de colecciones): Recorre y particiona fuentes de datos para alimentar tuberías secuenciales o paralelas.",
    "topic": "Procesamiento de colecciones",
    "difficulty": "básico"
  },
  {
    "id": "java-q-16",
    "collectionId": "java",
    "question": "En Java (Procesamiento de colecciones), ¿qué función técnica cumple «Collectors»?",
    "options": [
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común al operar.",
      "Recorre y particiona fuentes de datos para alimentar tuberías secuenciales o paralelas.",
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Collectors (Procesamiento de colecciones): Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones.",
    "topic": "Procesamiento de colecciones",
    "difficulty": "básico"
  },
  {
    "id": "java-q-17",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «Parallel streams» en procesamiento de colecciones?",
    "options": [
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común al operar.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones.",
      "Recorre y particiona fuentes de datos para alimentar tuberías secuenciales o paralelas.",
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Parallel streams (Procesamiento de colecciones): Reparte el procesamiento de una colección entre varios núcleos usando el pool común.",
    "topic": "Procesamiento de colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-18",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «Primitive streams»?",
    "options": [
      "Recorre y particiona fuentes de datos para alimentar tuberías secuenciales o paralelas al evaluar.",
      "Opera directamente sobre secuencias numéricas nativas para evitar el costo de envolver objetos.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones al operar.",
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común al evaluar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Primitive streams (Procesamiento de colecciones): Opera directamente sobre secuencias numéricas nativas para evitar el costo de envolver objetos.",
    "topic": "Procesamiento de colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-19",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «Optional sin abuso»?",
    "options": [
      "Recorre y particiona fuentes de datos para alimentar tuberías secuenciales o paralelas al evaluar.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones al operar.",
      "Representa explícitamente la ausencia de un valor de retorno sin emplearlo en campos ni listas.",
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Optional sin abuso (Procesamiento de colecciones): Representa explícitamente la ausencia de un valor de retorno sin emplearlo en campos ni listas.",
    "topic": "Procesamiento de colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-20",
    "collectionId": "java",
    "question": "Respecto a i/o y networking en Java, ¿cuál es el propósito de «Byte y character streams»?",
    "options": [
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos al operar.",
      "Envía peticiones web síncronas o asíncronas con soporte nativo para multiplexación y flujos.",
      "Acuerda el protocolo de aplicación durante el saludo criptográfico inicial sin rondas extra.",
      "Procesa flujos secuenciales diferenciando datos binarios crudos de texto con codificación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Byte y character streams (I/O y networking): Procesa flujos secuenciales diferenciando datos binarios crudos de texto con codificación.",
    "topic": "I/O y networking",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-21",
    "collectionId": "java",
    "question": "En Java (I/O y networking), ¿qué función técnica cumple «NIO buffers y channels»?",
    "options": [
      "Transfiere bloques de datos mediante contenedores de capacidad fija y canales bidireccionales.",
      "Procesa flujos secuenciales diferenciando datos binarios crudos de texto con codificación.",
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos al operar.",
      "Envía peticiones web síncronas o asíncronas con soporte nativo para multiplexación y flujos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "NIO buffers y channels (I/O y networking): Transfiere bloques de datos mediante contenedores de capacidad fija y canales bidireccionales.",
    "topic": "I/O y networking",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-22",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «Asynchronous I/O» en i/o y networking?",
    "options": [
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos al evaluar.",
      "Inicia operaciones de red o disco que notifican su finalización mediante futuros o callbacks.",
      "Procesa flujos secuenciales diferenciando datos binarios crudos de texto con codificación.",
      "Envía peticiones web síncronas o asíncronas con soporte nativo para multiplexación y flujos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Asynchronous I/O (I/O y networking): Inicia operaciones de red o disco que notifican su finalización mediante futuros o callbacks.",
    "topic": "I/O y networking",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-23",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «HTTP Client»?",
    "options": [
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos al operar.",
      "Procesa flujos secuenciales diferenciando datos binarios crudos de texto con codificación.",
      "Envía peticiones web síncronas o asíncronas con soporte nativo para multiplexación y flujos.",
      "Acuerda el protocolo de aplicación durante el saludo criptográfico inicial sin rondas extra."
    ],
    "correctAnswerIndex": 2,
    "explanation": "HTTP Client (I/O y networking): Envía peticiones web síncronas o asíncronas con soporte nativo para multiplexación y flujos.",
    "topic": "I/O y networking",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-24",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «TLS sockets»?",
    "options": [
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común al operar.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones.",
      "Delimita dónde inicia, confirma o revierte una unidad atómica de trabajo persistente.",
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "TLS sockets (I/O y networking): Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos.",
    "topic": "I/O y networking",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-25",
    "collectionId": "java",
    "question": "Respecto a i/o y networking en Java, ¿cuál es el propósito de «Direct byte buffers»?",
    "options": [
      "Reserva memoria fuera del heap gestionado para transferir datos al sistema sin copias extras al operar.",
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos al operar.",
      "Procesa flujos secuenciales diferenciando datos binarios crudos de texto con codificación.",
      "Envía peticiones web síncronas o asíncronas con soporte nativo para multiplexación y flujos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Direct byte buffers (I/O y networking): Reserva memoria fuera del heap gestionado para transferir datos al sistema sin copias extras.",
    "topic": "I/O y networking",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-26",
    "collectionId": "java",
    "question": "En Java (I/O y networking), ¿qué función técnica cumple «ALPN protocol negotiation»?",
    "options": [
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos al operar.",
      "Acuerda el protocolo de aplicación durante el saludo criptográfico inicial sin rondas extra.",
      "Procesa flujos secuenciales diferenciando datos binarios crudos de texto con codificación.",
      "Envía peticiones web síncronas o asíncronas con soporte nativo para multiplexación y flujos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "ALPN protocol negotiation (I/O y networking): Acuerda el protocolo de aplicación durante el saludo criptográfico inicial sin rondas extra.",
    "topic": "I/O y networking",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-27",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «JDBC» en persistencia?",
    "options": [
      "Delimita dónde inicia, confirma o revierte una unidad atómica de trabajo persistente al operar.",
      "Alinea consultas y proyecciones con los índices reales para evitar escaneos completos.",
      "Conecta aplicaciones con motores relacionales mediante controladores estándar y consultas.",
      "Reutiliza sesiones físicas de base de datos para amortizar el costo de apertura y cierre."
    ],
    "correctAnswerIndex": 2,
    "explanation": "JDBC (Persistencia): Conecta aplicaciones con motores relacionales mediante controladores estándar y consultas.",
    "topic": "Persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-28",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «Connection pools»?",
    "options": [
      "Delimita dónde inicia, confirma o revierte una unidad atómica de trabajo persistente al operar.",
      "Alinea consultas y proyecciones con los índices reales para evitar escaneos completos.",
      "Conecta aplicaciones con motores relacionales mediante controladores estándar y consultas.",
      "Reutiliza sesiones físicas de base de datos para amortizar el costo de apertura y cierre."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Connection pools (Persistencia): Reutiliza sesiones físicas de base de datos para amortizar el costo de apertura y cierre.",
    "topic": "Persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-29",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «Transaction boundaries»?",
    "options": [
      "Delimita dónde inicia, confirma o revierte una unidad atómica de trabajo persistente.",
      "Alinea consultas y proyecciones con los índices reales para evitar escaneos completos.",
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Transaction boundaries (Persistencia): Delimita dónde inicia, confirma o revierte una unidad atómica de trabajo persistente.",
    "topic": "Persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-30",
    "collectionId": "java",
    "question": "Respecto a persistencia en Java, ¿cuál es el propósito de «JPA entity lifecycle»?",
    "options": [
      "Conecta aplicaciones con motores relacionales mediante controladores estándar y consultas al evaluar.",
      "Gestiona las transiciones de objetos persistentes entre estados nuevos, administrados y separados.",
      "Reutiliza sesiones físicas de base de datos para amortizar el costo de apertura y cierre al operar.",
      "Alinea consultas y proyecciones con los índices reales para evitar escaneos completos en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "JPA entity lifecycle (Persistencia): Gestiona las transiciones de objetos persistentes entre estados nuevos, administrados y separados.",
    "topic": "Persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-31",
    "collectionId": "java",
    "question": "En Java (Persistencia), ¿qué función técnica cumple «Query plan awareness»?",
    "options": [
      "Delimita dónde inicia, confirma o revierte una unidad atómica de trabajo persistente al operar.",
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común.",
      "Alinea consultas y proyecciones con los índices reales para evitar escaneos completos.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Query plan awareness (Persistencia): Alinea consultas y proyecciones con los índices reales para evitar escaneos completos.",
    "topic": "Persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-32",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «JPMS descriptors» en construcción modular?",
    "options": [
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común al operar.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones.",
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos.",
      "Declara explícitamente qué paquetes exporta un módulo y de qué otros módulos depende."
    ],
    "correctAnswerIndex": 3,
    "explanation": "JPMS descriptors (Construcción modular): Declara explícitamente qué paquetes exporta un módulo y de qué otros módulos depende.",
    "topic": "Construcción modular",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-33",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «Maven dependency mediation»?",
    "options": [
      "Resuelve versiones en conflicto dentro del árbol transitivo aplicando la ruta más cercana.",
      "Declara explícitamente qué paquetes exporta un módulo y de qué otros módulos depende.",
      "Ensambla una imagen de ejecución mínima que incluye solo los módulos requeridos por la app.",
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Maven dependency mediation (Construcción modular): Resuelve versiones en conflicto dentro del árbol transitivo aplicando la ruta más cercana.",
    "topic": "Construcción modular",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-34",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «Gradle toolchains»?",
    "options": [
      "Ensambla una imagen de ejecución mínima que incluye solo los módulos requeridos por la app al operar.",
      "Selecciona y descarga automáticamente la versión exacta del compilador requerida por el proyecto.",
      "Resuelve versiones en conflicto dentro del árbol transitivo aplicando la ruta más cercana al operar.",
      "Declara explícitamente qué paquetes exporta un módulo y de qué otros módulos depende en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Gradle toolchains (Construcción modular): Selecciona y descarga automáticamente la versión exacta del compilador requerida por el proyecto.",
    "topic": "Construcción modular",
    "difficulty": "intermedio"
  },
  {
    "id": "java-q-35",
    "collectionId": "java",
    "question": "Respecto a construcción modular en Java, ¿cuál es el propósito de «Multi-release JAR»?",
    "options": [
      "Ensambla una imagen de ejecución mínima que incluye solo los módulos requeridos por la app al evaluar.",
      "Resuelve versiones en conflicto dentro del árbol transitivo aplicando la ruta más cercana al operar.",
      "Empaqueta variantes de clases optimizadas para distintas versiones del entorno en un mismo archivo.",
      "Selecciona y descarga automáticamente la versión exacta del compilador requerida por el proyecto."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Multi-release JAR (Construcción modular): Empaqueta variantes de clases optimizadas para distintas versiones del entorno en un mismo archivo.",
    "topic": "Construcción modular",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-36",
    "collectionId": "java",
    "question": "En Java (Construcción modular), ¿qué función técnica cumple «jlink images»?",
    "options": [
      "Declara explícitamente qué paquetes exporta un módulo y de qué otros módulos depende al operar.",
      "Resuelve versiones en conflicto dentro del árbol transitivo aplicando la ruta más cercana.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones al operar.",
      "Ensambla una imagen de ejecución mínima que incluye solo los módulos requeridos por la app."
    ],
    "correctAnswerIndex": 3,
    "explanation": "jlink images (Construcción modular): Ensambla una imagen de ejecución mínima que incluye solo los módulos requeridos por la app.",
    "topic": "Construcción modular",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-37",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «JUnit lifecycle» en pruebas y calidad?",
    "options": [
      "Controla la creación de instancias y ejecución de ganchos antes y después de cada prueba.",
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones.",
      "Negocia canales cifrados verificando cadenas de certificados y protocolos permitidos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "JUnit lifecycle (Pruebas y calidad): Controla la creación de instancias y ejecución de ganchos antes y después de cada prueba.",
    "topic": "Pruebas y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-38",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «Parameterized tests»?",
    "options": [
      "Controla la creación de instancias y ejecución de ganchos antes y después de cada prueba al operar.",
      "Ejecuta un mismo método de verificación múltiples veces inyectando distintas fuentes de datos.",
      "Comprueba que una regla de negocio se cumpla frente a cientos de entradas generadas al azar.",
      "Inspecciona el código o bytecode sin ejecutarlo para hallar desreferencias nulas y defectos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Parameterized tests (Pruebas y calidad): Ejecuta un mismo método de verificación múltiples veces inyectando distintas fuentes de datos.",
    "topic": "Pruebas y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-39",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «Property testing»?",
    "options": [
      "Controla la creación de instancias y ejecución de ganchos antes y después de cada prueba al operar.",
      "Inspecciona el código o bytecode sin ejecutarlo para hallar desreferencias nulas y defectos.",
      "Comprueba que una regla de negocio se cumpla frente a cientos de entradas generadas al azar.",
      "Introduce pequeños cambios artificiales en el código para medir si las pruebas los detectan."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Property testing (Pruebas y calidad): Comprueba que una regla de negocio se cumpla frente a cientos de entradas generadas al azar.",
    "topic": "Pruebas y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-40",
    "collectionId": "java",
    "question": "Respecto a pruebas y calidad en Java, ¿cuál es el propósito de «Static analysis»?",
    "options": [
      "Controla la creación de instancias y ejecución de ganchos antes y después de cada prueba al operar.",
      "Comprueba que una regla de negocio se cumpla frente a cientos de entradas generadas al azar.",
      "Introduce pequeños cambios artificiales en el código para medir si las pruebas los detectan.",
      "Inspecciona el código o bytecode sin ejecutarlo para hallar desreferencias nulas y defectos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Static analysis (Pruebas y calidad): Inspecciona el código o bytecode sin ejecutarlo para hallar desreferencias nulas y defectos.",
    "topic": "Pruebas y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-41",
    "collectionId": "java",
    "question": "En Java (Pruebas y calidad), ¿qué función técnica cumple «Mutation testing»?",
    "options": [
      "Introduce pequeños cambios artificiales en el código para medir si las pruebas los detectan.",
      "Controla la creación de instancias y ejecución de ganchos antes y después de cada prueba.",
      "Comprueba que una regla de negocio se cumpla frente a cientos de entradas generadas al azar.",
      "Inspecciona el código o bytecode sin ejecutarlo para hallar desreferencias nulas y defectos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Mutation testing (Pruebas y calidad): Introduce pequeños cambios artificiales en el código para medir si las pruebas los detectan.",
    "topic": "Pruebas y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-42",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «Deserialization filters» en seguridad?",
    "options": [
      "Deshabilita entidades externas y expansión de doctypes para bloquear lecturas arbitrarias al operar.",
      "Rechaza clases no autorizadas y limita la profundidad del grafo antes de reconstruir objetos.",
      "Registra implementaciones intercambiables de algoritmos de cifrado, firma y resumen seguro.",
      "Valida criptográficamente que las clases empaquetadas no hayan sido alteradas desde su firma."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Deserialization filters (Seguridad): Rechaza clases no autorizadas y limita la profundidad del grafo antes de reconstruir objetos.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-43",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «Cryptography providers»?",
    "options": [
      "Deshabilita entidades externas y expansión de doctypes para bloquear lecturas arbitrarias al operar.",
      "Rechaza clases no autorizadas y limita la profundidad del grafo antes de reconstruir objetos.",
      "Registra implementaciones intercambiables de algoritmos de cifrado, firma y resumen seguro.",
      "Valida criptográficamente que las clases empaquetadas no hayan sido alteradas desde su firma."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cryptography providers (Seguridad): Registra implementaciones intercambiables de algoritmos de cifrado, firma y resumen seguro.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-44",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «Key stores»?",
    "options": [
      "Deshabilita entidades externas y expansión de doctypes para bloquear lecturas arbitrarias al operar.",
      "Registra implementaciones intercambiables de algoritmos de cifrado, firma y resumen seguro.",
      "Rechaza clases no autorizadas y limita la profundidad del grafo antes de reconstruir objetos.",
      "Almacena llaves privadas y certificados de confianza en contenedores protegidos por contraseña."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Key stores (Seguridad): Almacena llaves privadas y certificados de confianza en contenedores protegidos por contraseña.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-45",
    "collectionId": "java",
    "question": "Respecto a seguridad en Java, ¿cuál es el propósito de «XML parser hardening»?",
    "options": [
      "Deshabilita entidades externas y expansión de doctypes para bloquear lecturas arbitrarias.",
      "Registra implementaciones intercambiables de algoritmos de cifrado, firma y resumen seguro.",
      "Reparte el procesamiento de una colección entre varios núcleos usando el pool común.",
      "Acumula elementos de una secuencia en contenedores finales, resúmenes o agrupaciones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "XML parser hardening (Seguridad): Deshabilita entidades externas y expansión de doctypes para bloquear lecturas arbitrarias.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-46",
    "collectionId": "java",
    "question": "En Java (Seguridad), ¿qué función técnica cumple «Dependency vulnerability scanning»?",
    "options": [
      "Deshabilita entidades externas y expansión de doctypes para bloquear lecturas arbitrarias al operar.",
      "Cruza las bibliotecas del proyecto contra bases de avisos de seguridad conocidos en el pipeline.",
      "Registra implementaciones intercambiables de algoritmos de cifrado, firma y resumen seguro al operar.",
      "Rechaza clases no autorizadas y limita la profundidad del grafo antes de reconstruir objetos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dependency vulnerability scanning (Seguridad): Cruza las bibliotecas del proyecto contra bases de avisos de seguridad conocidos en el pipeline.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-47",
    "collectionId": "java",
    "question": "Dentro de Java, ¿cómo opera el mecanismo de «JAR signature verification» en seguridad?",
    "options": [
      "Deshabilita entidades externas y expansión de doctypes para bloquear lecturas arbitrarias al operar.",
      "Registra implementaciones intercambiables de algoritmos de cifrado, firma y resumen seguro.",
      "Valida criptográficamente que las clases empaquetadas no hayan sido alteradas desde su firma.",
      "Rechaza clases no autorizadas y limita la profundidad del grafo antes de reconstruir objetos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "JAR signature verification (Seguridad): Valida criptográficamente que las clases empaquetadas no hayan sido alteradas desde su firma.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-48",
    "collectionId": "java",
    "question": "Al trabajar con Java, ¿qué responsabilidad define a «JIT warmup»?",
    "options": [
      "Mide el rendimiento de fragmentos de código aislando efectos de calentamiento y optimizaciones al operar.",
      "Analiza grabaciones de eventos de bajo impacto para diagnosticar latencias, memoria y bloqueos.",
      "Asegura visibilidad inmediata en memoria principal e impide reordenamientos sobre un campo al operar.",
      "Ejecuta carga representativa inicial para que el compilador dinámico optimice las rutas críticas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "JIT warmup (Operación y rendimiento): Ejecuta carga representativa inicial para que el compilador dinámico optimice las rutas críticas.",
    "topic": "Operación y rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-49",
    "collectionId": "java",
    "question": "En la arquitectura de Java, ¿qué caracteriza técnicamente a «JMH benchmarks»?",
    "options": [
      "Mide el rendimiento de fragmentos de código aislando efectos de calentamiento y optimizaciones al operar.",
      "Analiza grabaciones de eventos de bajo impacto para diagnosticar latencias, memoria y bloqueos.",
      "Ejecuta carga representativa inicial para que el compilador dinámico optimice las rutas críticas.",
      "Reutiliza sesiones físicas de base de datos para amortizar el costo de apertura y cierre."
    ],
    "correctAnswerIndex": 0,
    "explanation": "JMH benchmarks (Operación y rendimiento): Mide el rendimiento de fragmentos de código aislando efectos de calentamiento y optimizaciones.",
    "topic": "Operación y rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "java-q-50",
    "collectionId": "java",
    "question": "Respecto a operación y rendimiento en Java, ¿cuál es el propósito de «JDK Mission Control»?",
    "options": [
      "Mide el rendimiento de fragmentos de código aislando efectos de calentamiento y optimizaciones.",
      "Analiza grabaciones de eventos de bajo impacto para diagnosticar latencias, memoria y bloqueos.",
      "Ejecuta carga representativa inicial para que el compilador dinámico optimice las rutas críticas.",
      "Reutiliza sesiones físicas de base de datos para amortizar el costo de apertura y cierre al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "JDK Mission Control (Operación y rendimiento): Analiza grabaciones de eventos de bajo impacto para diagnosticar latencias, memoria y bloqueos.",
    "topic": "Operación y rendimiento",
    "difficulty": "avanzado"
  }
];
