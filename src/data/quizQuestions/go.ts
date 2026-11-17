import type { QuizQuestion } from "@/data/quizTypes";

export const goQuestions: QuizQuestion[] = [
  {
    "id": "go-q-01",
    "collectionId": "go",
    "question": "En Go (Patrones concurrentes), ¿qué función técnica cumple «Singleflight suppression»?",
    "options": [
      "Unifica solicitudes idénticas concurrentes para ejecutar una sola llamada hacia el recurso.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas.",
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Singleflight suppression (Patrones concurrentes): Unifica solicitudes idénticas concurrentes para ejecutar una sola llamada hacia el recurso.",
    "topic": "Patrones concurrentes",
    "difficulty": "básico"
  },
  {
    "id": "go-q-02",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «Context propagation» en cancelación y límites?",
    "options": [
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida al operar.",
      "Transmite señales de cancelación, plazos y metadatos a través de toda la cadena de llamadas.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola al operar.",
      "Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Context propagation (Cancelación y límites): Transmite señales de cancelación, plazos y metadatos a través de toda la cadena de llamadas.",
    "topic": "Cancelación y límites",
    "difficulty": "básico"
  },
  {
    "id": "go-q-03",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «Deadlines»?",
    "options": [
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola al operar.",
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida al operar.",
      "Fija un instante absoluto tras el cual toda operación de entrada o salida aborta su espera.",
      "Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deadlines (Cancelación y límites): Fija un instante absoluto tras el cual toda operación de entrada o salida aborta su espera.",
    "topic": "Cancelación y límites",
    "difficulty": "básico"
  },
  {
    "id": "go-q-04",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Cancellation causes»?",
    "options": [
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida al operar.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola al operar.",
      "Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa al operar.",
      "Adjunta el motivo específico que originó la interrupción de un árbol de tareas concurrentes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Cancellation causes (Cancelación y límites): Adjunta el motivo específico que originó la interrupción de un árbol de tareas concurrentes.",
    "topic": "Cancelación y límites",
    "difficulty": "básico"
  },
  {
    "id": "go-q-05",
    "collectionId": "go",
    "question": "Respecto a cancelación y límites en Go, ¿cuál es el propósito de «Leak de goroutines»?",
    "options": [
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
      "Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Leak de goroutines (Cancelación y límites): Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida.",
    "topic": "Cancelación y límites",
    "difficulty": "básico"
  },
  {
    "id": "go-q-06",
    "collectionId": "go",
    "question": "En Go (Cancelación y límites), ¿qué función técnica cumple «Presupuestos de latencia»?",
    "options": [
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola al operar.",
      "Reparte el tiempo máximo permitido entre llamadas internas sucesivas de una misma petición.",
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida al operar.",
      "Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Presupuestos de latencia (Cancelación y límites): Reparte el tiempo máximo permitido entre llamadas internas sucesivas de una misma petición.",
    "topic": "Cancelación y límites",
    "difficulty": "básico"
  },
  {
    "id": "go-q-07",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «Hedged requests» en cancelación y límites?",
    "options": [
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida.",
      "Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Hedged requests (Cancelación y límites): Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
    "topic": "Cancelación y límites",
    "difficulty": "básico"
  },
  {
    "id": "go-q-08",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «Admission control»?",
    "options": [
      "Fija un instante absoluto tras el cual toda operación de entrada o salida aborta su espera al operar.",
      "Reparte el tiempo máximo permitido entre llamadas internas sucesivas de una misma petición.",
      "Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa al operar.",
      "Rechaza tráfico entrante de forma temprana cuando la capacidad interna supera su umbral seguro."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Admission control (Cancelación y límites): Rechaza tráfico entrante de forma temprana cuando la capacidad interna supera su umbral seguro.",
    "topic": "Cancelación y límites",
    "difficulty": "básico"
  },
  {
    "id": "go-q-09",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Semaphore-weighted concurrency»?",
    "options": [
      "Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Semaphore-weighted concurrency (Cancelación y límites): Restringe el paralelismo asignando pesos variables según el costo de cada tarea activa.",
    "topic": "Cancelación y límites",
    "difficulty": "básico"
  },
  {
    "id": "go-q-10",
    "collectionId": "go",
    "question": "Respecto a i/o y formatos en Go, ¿cuál es el propósito de «Reader y Writer»?",
    "options": [
      "Empaqueta archivos estáticos dentro del binario compilado para servirlos sin disco externo al operar.",
      "Abstrae flujos de entrada y salida mediante contratos mínimos de lectura y escritura de bytes.",
      "Codifica y decodifica documentos extensos token por token sin cargar todo el mensaje en RAM.",
      "Genera salidas textuales o documentos seguros aplicando escape contextual contra inyecciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Reader y Writer (I/O y formatos): Abstrae flujos de entrada y salida mediante contratos mínimos de lectura y escritura de bytes.",
    "topic": "I/O y formatos",
    "difficulty": "básico"
  },
  {
    "id": "go-q-11",
    "collectionId": "go",
    "question": "En Go (I/O y formatos), ¿qué función técnica cumple «Buffered I/O»?",
    "options": [
      "Empaqueta archivos estáticos dentro del binario compilado para servirlos sin disco externo al operar.",
      "Codifica y decodifica documentos extensos token por token sin cargar todo el mensaje en RAM.",
      "Acumula lecturas y escrituras pequeñas en memoria intermedia para reducir llamadas al sistema.",
      "Genera salidas textuales o documentos seguros aplicando escape contextual contra inyecciones."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Buffered I/O (I/O y formatos): Acumula lecturas y escrituras pequeñas en memoria intermedia para reducir llamadas al sistema.",
    "topic": "I/O y formatos",
    "difficulty": "básico"
  },
  {
    "id": "go-q-12",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «JSON streaming» en i/o y formatos?",
    "options": [
      "Empaqueta archivos estáticos dentro del binario compilado para servirlos sin disco externo al operar.",
      "Genera salidas textuales o documentos seguros aplicando escape contextual contra inyecciones.",
      "Abstrae flujos de entrada y salida mediante contratos mínimos de lectura y escritura de bytes.",
      "Codifica y decodifica documentos extensos token por token sin cargar todo el mensaje en RAM."
    ],
    "correctAnswerIndex": 3,
    "explanation": "JSON streaming (I/O y formatos): Codifica y decodifica documentos extensos token por token sin cargar todo el mensaje en RAM.",
    "topic": "I/O y formatos",
    "difficulty": "básico"
  },
  {
    "id": "go-q-13",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «Templates»?",
    "options": [
      "Genera salidas textuales o documentos seguros aplicando escape contextual contra inyecciones.",
      "Empaqueta archivos estáticos dentro del binario compilado para servirlos sin disco externo.",
      "Codifica y decodifica documentos extensos token por token sin cargar todo el mensaje en RAM.",
      "Abstrae flujos de entrada y salida mediante contratos mínimos de lectura y escritura de bytes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Templates (I/O y formatos): Genera salidas textuales o documentos seguros aplicando escape contextual contra inyecciones.",
    "topic": "I/O y formatos",
    "difficulty": "básico"
  },
  {
    "id": "go-q-14",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Embed filesystem»?",
    "options": [
      "Codifica y decodifica documentos extensos token por token sin cargar todo el mensaje en RAM.",
      "Empaqueta archivos estáticos dentro del binario compilado para servirlos sin disco externo.",
      "Genera salidas textuales o documentos seguros aplicando escape contextual contra inyecciones.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Embed filesystem (I/O y formatos): Empaqueta archivos estáticos dentro del binario compilado para servirlos sin disco externo.",
    "topic": "I/O y formatos",
    "difficulty": "básico"
  },
  {
    "id": "go-q-15",
    "collectionId": "go",
    "question": "Respecto a servicios de red en Go, ¿cuál es el propósito de «HTTP transports»?",
    "options": [
      "Mantiene un conjunto acotado de enlaces abiertos y listos para reutilizarse entre hilos al operar.",
      "Acota el número de flujos simultáneos permitidos sobre una misma conexión TCP multiplexada.",
      "Administra reutilización de sockets, tiempos de espera y negociación de red para clientes web.",
      "Encadena funciones envolventes para aplicar registro, métricas y autenticación por petición."
    ],
    "correctAnswerIndex": 2,
    "explanation": "HTTP transports (Servicios de red): Administra reutilización de sockets, tiempos de espera y negociación de red para clientes web.",
    "topic": "Servicios de red",
    "difficulty": "básico"
  },
  {
    "id": "go-q-16",
    "collectionId": "go",
    "question": "En Go (Servicios de red), ¿qué función técnica cumple «Middleware idiomático»?",
    "options": [
      "Mantiene un conjunto acotado de enlaces abiertos y listos para reutilizarse entre hilos al operar.",
      "Acota el número de flujos simultáneos permitidos sobre una misma conexión TCP multiplexada.",
      "Comunica servicios mediante contratos binarios tipados y multiplexación sobre canales HTTP/2.",
      "Encadena funciones envolventes para aplicar registro, métricas y autenticación por petición."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Middleware idiomático (Servicios de red): Encadena funciones envolventes para aplicar registro, métricas y autenticación por petición.",
    "topic": "Servicios de red",
    "difficulty": "básico"
  },
  {
    "id": "go-q-17",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «TLS configuration» en servicios de red?",
    "options": [
      "Restringe versiones de protocolo, suites de cifrado y validación de certificados en conexiones al operar.",
      "Mantiene un conjunto acotado de enlaces abiertos y listos para reutilizarse entre hilos al operar.",
      "Acota el número de flujos simultáneos permitidos sobre una misma conexión TCP multiplexada.",
      "Encadena funciones envolventes para aplicar registro, métricas y autenticación por petición."
    ],
    "correctAnswerIndex": 0,
    "explanation": "TLS configuration (Servicios de red): Restringe versiones de protocolo, suites de cifrado y validación de certificados en conexiones.",
    "topic": "Servicios de red",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-18",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «gRPC»?",
    "options": [
      "Mantiene un conjunto acotado de enlaces abiertos y listos para reutilizarse entre hilos al operar.",
      "Comunica servicios mediante contratos binarios tipados y multiplexación sobre canales HTTP/2.",
      "Acota el número de flujos simultáneos permitidos sobre una misma conexión TCP multiplexada.",
      "Encadena funciones envolventes para aplicar registro, métricas y autenticación por petición."
    ],
    "correctAnswerIndex": 1,
    "explanation": "gRPC (Servicios de red): Comunica servicios mediante contratos binarios tipados y multiplexación sobre canales HTTP/2.",
    "topic": "Servicios de red",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-19",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Connection pooling»?",
    "options": [
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola al operar.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas.",
      "Mantiene un conjunto acotado de enlaces abiertos y listos para reutilizarse entre hilos.",
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Connection pooling (Servicios de red): Mantiene un conjunto acotado de enlaces abiertos y listos para reutilizarse entre hilos.",
    "topic": "Servicios de red",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-20",
    "collectionId": "go",
    "question": "Respecto a servicios de red en Go, ¿cuál es el propósito de «HTTP/2 stream limits»?",
    "options": [
      "Mantiene un conjunto acotado de enlaces abiertos y listos para reutilizarse entre hilos al operar.",
      "Encadena funciones envolventes para aplicar registro, métricas y autenticación por petición.",
      "Comunica servicios mediante contratos binarios tipados y multiplexación sobre canales HTTP/2.",
      "Acota el número de flujos simultáneos permitidos sobre una misma conexión TCP multiplexada."
    ],
    "correctAnswerIndex": 3,
    "explanation": "HTTP/2 stream limits (Servicios de red): Acota el número de flujos simultáneos permitidos sobre una misma conexión TCP multiplexada.",
    "topic": "Servicios de red",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-21",
    "collectionId": "go",
    "question": "En Go (Servicios de red), ¿qué función técnica cumple «DNS resolver behavior»?",
    "options": [
      "Controla si la resolución de nombres emplea la biblioteca pura del lenguaje o la del sistema.",
      "Mantiene un conjunto acotado de enlaces abiertos y listos para reutilizarse entre hilos.",
      "Acota el número de flujos simultáneos permitidos sobre una misma conexión TCP multiplexada.",
      "Encadena funciones envolventes para aplicar registro, métricas y autenticación por petición."
    ],
    "correctAnswerIndex": 0,
    "explanation": "DNS resolver behavior (Servicios de red): Controla si la resolución de nombres emplea la biblioteca pura del lenguaje o la del sistema.",
    "topic": "Servicios de red",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-22",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «database/sql» en datos y consistencia?",
    "options": [
      "Renueva periódicamente enlaces abiertos para evitar cierres abruptos desde balanceadores al operar.",
      "Provee una capa genérica de acceso relacional con administración automática de conexiones.",
      "Precompila plantillas parametrizadas en el motor de datos para ejecutarlas repetidamente.",
      "Aplica cambios estructurales versionados de forma reproducible sobre el esquema de datos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "database/sql (Datos y consistencia): Provee una capa genérica de acceso relacional con administración automática de conexiones.",
    "topic": "Datos y consistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-23",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «Connection lifetimes»?",
    "options": [
      "Precompila plantillas parametrizadas en el motor de datos para ejecutarlas repetidamente.",
      "Aplica cambios estructurales versionados de forma reproducible sobre el esquema de datos.",
      "Renueva periódicamente enlaces abiertos para evitar cierres abruptos desde balanceadores.",
      "Provee una capa genérica de acceso relacional con administración automática de conexiones."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Connection lifetimes (Datos y consistencia): Renueva periódicamente enlaces abiertos para evitar cierres abruptos desde balanceadores.",
    "topic": "Datos y consistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-24",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Transacciones»?",
    "options": [
      "Provee una capa genérica de acceso relacional con administración automática de conexiones al operar.",
      "Renueva periódicamente enlaces abiertos para evitar cierres abruptos desde balanceadores al operar.",
      "Precompila plantillas parametrizadas en el motor de datos para ejecutarlas repetidamente al operar.",
      "Agrupa sentencias relacionales bajo una misma sesión aislada con confirmación o reversión total."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Transacciones (Datos y consistencia): Agrupa sentencias relacionales bajo una misma sesión aislada con confirmación o reversión total.",
    "topic": "Datos y consistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-25",
    "collectionId": "go",
    "question": "Respecto a datos y consistencia en Go, ¿cuál es el propósito de «Prepared statements»?",
    "options": [
      "Precompila plantillas parametrizadas en el motor de datos para ejecutarlas repetidamente.",
      "Renueva periódicamente enlaces abiertos para evitar cierres abruptos desde balanceadores.",
      "Aplica cambios estructurales versionados de forma reproducible sobre el esquema de datos.",
      "Provee una capa genérica de acceso relacional con administración automática de conexiones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Prepared statements (Datos y consistencia): Precompila plantillas parametrizadas en el motor de datos para ejecutarlas repetidamente.",
    "topic": "Datos y consistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-26",
    "collectionId": "go",
    "question": "En Go (Datos y consistencia), ¿qué función técnica cumple «Migrations»?",
    "options": [
      "Renueva periódicamente enlaces abiertos para evitar cierres abruptos desde balanceadores.",
      "Aplica cambios estructurales versionados de forma reproducible sobre el esquema de datos.",
      "Precompila plantillas parametrizadas en el motor de datos para ejecutarlas repetidamente.",
      "Provee una capa genérica de acceso relacional con administración automática de conexiones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Migrations (Datos y consistencia): Aplica cambios estructurales versionados de forma reproducible sobre el esquema de datos.",
    "topic": "Datos y consistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-27",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «Optimistic concurrency tokens» en datos y consistencia?",
    "options": [
      "Renueva periódicamente enlaces abiertos para evitar cierres abruptos desde balanceadores al operar.",
      "Precompila plantillas parametrizadas en el motor de datos para ejecutarlas repetidamente.",
      "Detecta colisiones de escritura comparando un número de versión antes de confirmar cambios.",
      "Aplica cambios estructurales versionados de forma reproducible sobre el esquema de datos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Optimistic concurrency tokens (Datos y consistencia): Detecta colisiones de escritura comparando un número de versión antes de confirmar cambios.",
    "topic": "Datos y consistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-28",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «Table-driven tests»?",
    "options": [
      "Aísla casos individuales con nombre propio para ejecutarlos o filtrarlos selectivamente al operar.",
      "Muta entradas automáticamente guiado por cobertura para descubrir pánicos y casos borde al operar.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas al operar.",
      "Ejecuta una misma lógica de verificación iterando sobre una matriz declarativa de escenarios."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Table-driven tests (Pruebas avanzadas): Ejecuta una misma lógica de verificación iterando sobre una matriz declarativa de escenarios.",
    "topic": "Pruebas avanzadas",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-29",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Subtests»?",
    "options": [
      "Aísla casos individuales con nombre propio para ejecutarlos o filtrarlos selectivamente.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas.",
      "Muta entradas automáticamente guiado por cobertura para descubrir pánicos y casos borde.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Subtests (Pruebas avanzadas): Aísla casos individuales con nombre propio para ejecutarlos o filtrarlos selectivamente.",
    "topic": "Pruebas avanzadas",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-30",
    "collectionId": "go",
    "question": "Respecto a pruebas avanzadas en Go, ¿cuál es el propósito de «Fuzzing nativo»?",
    "options": [
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas al operar.",
      "Muta entradas automáticamente guiado por cobertura para descubrir pánicos y casos borde.",
      "Aísla casos individuales con nombre propio para ejecutarlos o filtrarlos selectivamente.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fuzzing nativo (Pruebas avanzadas): Muta entradas automáticamente guiado por cobertura para descubrir pánicos y casos borde.",
    "topic": "Pruebas avanzadas",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-31",
    "collectionId": "go",
    "question": "En Go (Pruebas avanzadas), ¿qué función técnica cumple «Testcontainers»?",
    "options": [
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas.",
      "Aísla casos individuales con nombre propio para ejecutarlos o filtrarlos selectivamente."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Testcontainers (Pruebas avanzadas): Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas.",
    "topic": "Pruebas avanzadas",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-32",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «Golden files» en pruebas avanzadas?",
    "options": [
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas al operar.",
      "Aísla casos individuales con nombre propio para ejecutarlos o filtrarlos selectivamente.",
      "Muta entradas automáticamente guiado por cobertura para descubrir pánicos y casos borde.",
      "Verifica salidas complejas comparándolas contra instantáneas almacenadas en el repositorio."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Golden files (Pruebas avanzadas): Verifica salidas complejas comparándolas contra instantáneas almacenadas en el repositorio.",
    "topic": "Pruebas avanzadas",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-33",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «go generate»?",
    "options": [
      "Ejecuta directivas embebidas en comentarios para sintetizar código fuente antes de compilar al operar.",
      "Detecta defectos sutiles, código inalcanzable y degradaciones mediante análisis estático.",
      "Desarrolla y enlaza múltiples módulos locales simultáneamente sin alterar sus archivos base.",
      "Incluye o excluye archivos fuente según la arquitectura, sistema operativo o banderas activas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "go generate (Toolchain): Ejecuta directivas embebidas en comentarios para sintetizar código fuente antes de compilar.",
    "topic": "Toolchain",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-34",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Build tags»?",
    "options": [
      "Detecta defectos sutiles, código inalcanzable y degradaciones mediante análisis estático al operar.",
      "Incluye o excluye archivos fuente según la arquitectura, sistema operativo o banderas activas.",
      "Ejecuta directivas embebidas en comentarios para sintetizar código fuente antes de compilar.",
      "Desarrolla y enlaza múltiples módulos locales simultáneamente sin alterar sus archivos base."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Build tags (Toolchain): Incluye o excluye archivos fuente según la arquitectura, sistema operativo o banderas activas.",
    "topic": "Toolchain",
    "difficulty": "intermedio"
  },
  {
    "id": "go-q-35",
    "collectionId": "go",
    "question": "Respecto a toolchain en Go, ¿cuál es el propósito de «Cross compilation»?",
    "options": [
      "Detecta defectos sutiles, código inalcanzable y degradaciones mediante análisis estático al operar.",
      "Ejecuta directivas embebidas en comentarios para sintetizar código fuente antes de compilar.",
      "Produce ejecutables estáticos para otras plataformas ajustando variables de entorno al compilar.",
      "Desarrolla y enlaza múltiples módulos locales simultáneamente sin alterar sus archivos base."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cross compilation (Toolchain): Produce ejecutables estáticos para otras plataformas ajustando variables de entorno al compilar.",
    "topic": "Toolchain",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-36",
    "collectionId": "go",
    "question": "En Go (Toolchain), ¿qué función técnica cumple «Staticcheck»?",
    "options": [
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola al operar.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas.",
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida.",
      "Detecta defectos sutiles, código inalcanzable y degradaciones mediante análisis estático."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Staticcheck (Toolchain): Detecta defectos sutiles, código inalcanzable y degradaciones mediante análisis estático.",
    "topic": "Toolchain",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-37",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «Workspaces» en toolchain?",
    "options": [
      "Desarrolla y enlaza múltiples módulos locales simultáneamente sin alterar sus archivos base al operar.",
      "Detecta defectos sutiles, código inalcanzable y degradaciones mediante análisis estático.",
      "Ejecuta directivas embebidas en comentarios para sintetizar código fuente antes de compilar.",
      "Incluye o excluye archivos fuente según la arquitectura, sistema operativo o banderas activas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Workspaces (Toolchain): Desarrolla y enlaza múltiples módulos locales simultáneamente sin alterar sus archivos base.",
    "topic": "Toolchain",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-38",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «govulncheck»?",
    "options": [
      "Comprueba sumas criptográficas de módulos descargados contra una base global inmutable al operar.",
      "Analiza el grafo real de funciones invocadas para reportar solo vulnerabilidades alcanzables.",
      "Obtiene entropía impredecible del sistema operativo para generar llaves y tokens seguros.",
      "Invoca procesos externos pasando argumentos separados sin interpolar cadenas en una shell."
    ],
    "correctAnswerIndex": 1,
    "explanation": "govulncheck (Seguridad): Analiza el grafo real de funciones invocadas para reportar solo vulnerabilidades alcanzables.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-39",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Crypto randomness»?",
    "options": [
      "Comprueba sumas criptográficas de módulos descargados contra una base global inmutable al operar.",
      "Invoca procesos externos pasando argumentos separados sin interpolar cadenas en una shell.",
      "Obtiene entropía impredecible del sistema operativo para generar llaves y tokens seguros.",
      "Confinamiento de operaciones de archivo dentro de una raíz abierta sin escape por enlaces."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Crypto randomness (Seguridad): Obtiene entropía impredecible del sistema operativo para generar llaves y tokens seguros.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-40",
    "collectionId": "go",
    "question": "Respecto a seguridad en Go, ¿cuál es el propósito de «Path traversal»?",
    "options": [
      "Comprueba sumas criptográficas de módulos descargados contra una base global inmutable al operar.",
      "Obtiene entropía impredecible del sistema operativo para generar llaves y tokens seguros.",
      "Invoca procesos externos pasando argumentos separados sin interpolar cadenas en una shell.",
      "Sanea rutas proporcionadas por usuarios para impedir accesos fuera del directorio permitido."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Path traversal (Seguridad): Sanea rutas proporcionadas por usuarios para impedir accesos fuera del directorio permitido.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-41",
    "collectionId": "go",
    "question": "En Go (Seguridad), ¿qué función técnica cumple «Command execution»?",
    "options": [
      "Invoca procesos externos pasando argumentos separados sin interpolar cadenas en una shell.",
      "Comprueba sumas criptográficas de módulos descargados contra una base global inmutable.",
      "Obtiene entropía impredecible del sistema operativo para generar llaves y tokens seguros.",
      "Confinamiento de operaciones de archivo dentro de una raíz abierta sin escape por enlaces."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Command execution (Seguridad): Invoca procesos externos pasando argumentos separados sin interpolar cadenas en una shell.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-42",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «Dependency verification» en seguridad?",
    "options": [
      "Obtiene entropía impredecible del sistema operativo para generar llaves y tokens seguros.",
      "Comprueba sumas criptográficas de módulos descargados contra una base global inmutable.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dependency verification (Seguridad): Comprueba sumas criptográficas de módulos descargados contra una base global inmutable.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-43",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «HTTP request smuggling defenses»?",
    "options": [
      "Invoca procesos externos pasando argumentos separados sin interpolar cadenas en una shell al operar.",
      "Confinamiento de operaciones de archivo dentro de una raíz abierta sin escape por enlaces al operar.",
      "Rechaza cabeceras ambiguas de longitud o transferencia para impedir desincronización de proxies.",
      "Obtiene entropía impredecible del sistema operativo para generar llaves y tokens seguros al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "HTTP request smuggling defenses (Seguridad): Rechaza cabeceras ambiguas de longitud o transferencia para impedir desincronización de proxies.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-44",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Filesystem sandbox boundaries»?",
    "options": [
      "Comprueba sumas criptográficas de módulos descargados contra una base global inmutable al operar.",
      "Obtiene entropía impredecible del sistema operativo para generar llaves y tokens seguros.",
      "Invoca procesos externos pasando argumentos separados sin interpolar cadenas en una shell.",
      "Confinamiento de operaciones de archivo dentro de una raíz abierta sin escape por enlaces."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Filesystem sandbox boundaries (Seguridad): Confinamiento de operaciones de archivo dentro de una raíz abierta sin escape por enlaces.",
    "topic": "Seguridad",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-45",
    "collectionId": "go",
    "question": "Respecto a rendimiento en Go, ¿cuál es el propósito de «CPU profiles»?",
    "options": [
      "Muestrea pilas de ejecución activas para identificar qué funciones consumen más procesador.",
      "Mide el tiempo perdido por rutinas esperando bloqueos sincronizados o canales saturados.",
      "Reutiliza estructuras y favorece la pila para disminuir pausas del recolector de basura.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CPU profiles (Rendimiento): Muestrea pilas de ejecución activas para identificar qué funciones consumen más procesador.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-46",
    "collectionId": "go",
    "question": "En Go (Rendimiento), ¿qué función técnica cumple «Heap profiles»?",
    "options": [
      "Mide el tiempo perdido por rutinas esperando bloqueos sincronizados o canales saturados al operar.",
      "Registra sitios de reserva en memoria dinámica para localizar retenciones y presión de basura.",
      "Reutiliza estructuras y favorece la pila para disminuir pausas del recolector de basura al operar.",
      "Muestrea pilas de ejecución activas para identificar qué funciones consumen más procesador."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Heap profiles (Rendimiento): Registra sitios de reserva en memoria dinámica para localizar retenciones y presión de basura.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-47",
    "collectionId": "go",
    "question": "Dentro de Go, ¿cómo opera el mecanismo de «Block y mutex profiles» en rendimiento?",
    "options": [
      "Reutiliza estructuras y favorece la pila para disminuir pausas del recolector de basura.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
      "Mide el tiempo perdido por rutinas esperando bloqueos sincronizados o canales saturados.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Block y mutex profiles (Rendimiento): Mide el tiempo perdido por rutinas esperando bloqueos sincronizados o canales saturados.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-48",
    "collectionId": "go",
    "question": "Al trabajar con Go, ¿qué responsabilidad define a «Allocation reduction»?",
    "options": [
      "Mide el tiempo perdido por rutinas esperando bloqueos sincronizados o canales saturados.",
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas.",
      "Reutiliza estructuras y favorece la pila para disminuir pausas del recolector de basura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Allocation reduction (Rendimiento): Reutiliza estructuras y favorece la pila para disminuir pausas del recolector de basura.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-49",
    "collectionId": "go",
    "question": "En la arquitectura de Go, ¿qué caracteriza técnicamente a «Profile-guided optimization»?",
    "options": [
      "Recompila el binario aprovechando perfiles reales de producción para optimizar rutas calientes al operar.",
      "Mide el tiempo perdido por rutinas esperando bloqueos sincronizados o canales saturados al operar.",
      "Reutiliza estructuras y favorece la pila para disminuir pausas del recolector de basura al operar.",
      "Muestrea pilas de ejecución activas para identificar qué funciones consumen más procesador."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Profile-guided optimization (Rendimiento): Recompila el binario aprovechando perfiles reales de producción para optimizar rutas calientes.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "go-q-50",
    "collectionId": "go",
    "question": "Respecto a operación de servicios en Go, ¿cuál es el propósito de «Health y readiness»?",
    "options": [
      "Dispara una petición secundaria tras un umbral breve para recortar latencias de cola al operar.",
      "Expone sondas diferenciadas para indicar si el proceso sigue vivo y si acepta tráfico.",
      "Levanta dependencias reales efímeras en contenedores durante la ejecución de pruebas.",
      "Deja rutinas bloqueadas indefinidamente en canales huérfanos sin consumidor ni salida."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Health y readiness (Operación de servicios): Expone sondas diferenciadas para indicar si el proceso sigue vivo y si acepta tráfico.",
    "topic": "Operación de servicios",
    "difficulty": "avanzado"
  }
];
