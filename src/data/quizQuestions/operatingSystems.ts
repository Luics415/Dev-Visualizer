import type { QuizQuestion } from "@/data/quizTypes";

export const operatingSystemsQuestions: QuizQuestion[] = [
  {
    "id": "operating-systems-q-01",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Red dentro del sistema), ¿qué función técnica cumple «Network stack traversal»?",
    "options": [
      "Recorre las capas de controladores, colas, protocolo y socket al recibir o transmitir paquetes.",
      "Transfiere datos entre buffers de aplicación y la tarjeta de red sin copiarlos por el kernel.",
      "Determina por qué interfaz y puerta de enlace debe salir cada paquete según su prefijo destino.",
      "Inspecciona y descarta tramas de red en el kernel según reglas de direcciones, puertos y estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Network stack traversal (Red dentro del sistema): Recorre las capas de controladores, colas, protocolo y socket al recibir o transmitir paquetes.",
    "topic": "Red dentro del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-02",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Packet filtering» en red dentro del sistema?",
    "options": [
      "Transfiere datos entre buffers de aplicación y la tarjeta de red sin copiarlos por el kernel al operar.",
      "Inspecciona y descarta tramas de red en el kernel según reglas de direcciones, puertos y estado.",
      "Recorre las capas de controladores, colas, protocolo y socket al recibir o transmitir paquetes.",
      "Determina por qué interfaz y puerta de enlace debe salir cada paquete según su prefijo destino."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Packet filtering (Red dentro del sistema): Inspecciona y descarta tramas de red en el kernel según reglas de direcciones, puertos y estado.",
    "topic": "Red dentro del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-03",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «Routing tables»?",
    "options": [
      "Transfiere datos entre buffers de aplicación y la tarjeta de red sin copiarlos por el kernel al operar.",
      "Recorre las capas de controladores, colas, protocolo y socket al recibir o transmitir paquetes.",
      "Determina por qué interfaz y puerta de enlace debe salir cada paquete según su prefijo destino.",
      "Inspecciona y descarta tramas de red en el kernel según reglas de direcciones, puertos y estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Routing tables (Red dentro del sistema): Determina por qué interfaz y puerta de enlace debe salir cada paquete según su prefijo destino.",
    "topic": "Red dentro del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-04",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Zero-copy networking»?",
    "options": [
      "Recorre las capas de controladores, colas, protocolo y socket al recibir o transmitir paquetes.",
      "Determina por qué interfaz y puerta de enlace debe salir cada paquete según su prefijo destino.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico al operar.",
      "Transfiere datos entre buffers de aplicación y la tarjeta de red sin copiarlos por el kernel."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Zero-copy networking (Red dentro del sistema): Transfiere datos entre buffers de aplicación y la tarjeta de red sin copiarlos por el kernel.",
    "topic": "Red dentro del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-05",
    "collectionId": "operating-systems",
    "question": "Respecto a red dentro del sistema en Sistemas operativos, ¿cuál es el propósito de «TCP receive offload»?",
    "options": [
      "Agrupa múltiples segmentos entrantes en la tarjeta de red para reducir interrupciones al procesador al operar.",
      "Recorre las capas de controladores, colas, protocolo y socket al recibir o transmitir paquetes.",
      "Determina por qué interfaz y puerta de enlace debe salir cada paquete según su prefijo destino.",
      "Transfiere datos entre buffers de aplicación y la tarjeta de red sin copiarlos por el kernel al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "TCP receive offload (Red dentro del sistema): Agrupa múltiples segmentos entrantes en la tarjeta de red para reducir interrupciones al procesador.",
    "topic": "Red dentro del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-06",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Aislamiento y virtualización), ¿qué función técnica cumple «Namespaces»?",
    "options": [
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico al operar.",
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores.",
      "Restringe mediante programas en el kernel qué llamadas al sistema puede invocar un proceso.",
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Namespaces (Aislamiento y virtualización): Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores.",
    "topic": "Aislamiento y virtualización",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-07",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Control groups» en aislamiento y virtualización?",
    "options": [
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores al operar.",
      "Restringe mediante programas en el kernel qué llamadas al sistema puede invocar un proceso al operar.",
      "Limita y contabiliza el consumo de procesador, memoria y entrada/salida de un grupo de procesos.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Control groups (Aislamiento y virtualización): Limita y contabiliza el consumo de procesador, memoria y entrada/salida de un grupo de procesos.",
    "topic": "Aislamiento y virtualización",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-08",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «Hypervisors»?",
    "options": [
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores.",
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local.",
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Hypervisors (Aislamiento y virtualización): Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico.",
    "topic": "Aislamiento y virtualización",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-09",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Virtual devices»?",
    "options": [
      "Expone discos y tarjetas de red paravirtualizadas mediante colas compartidas con el anfitrión al operar.",
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico al operar.",
      "Restringe mediante programas en el kernel qué llamadas al sistema puede invocar un proceso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Virtual devices (Aislamiento y virtualización): Expone discos y tarjetas de red paravirtualizadas mediante colas compartidas con el anfitrión.",
    "topic": "Aislamiento y virtualización",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-10",
    "collectionId": "operating-systems",
    "question": "Respecto a aislamiento y virtualización en Sistemas operativos, ¿cuál es el propósito de «Container escape boundaries»?",
    "options": [
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores al operar.",
      "Refuerza capacidades, montajes y llamadas permitidas para impedir fugas hacia el nodo anfitrión.",
      "Restringe mediante programas en el kernel qué llamadas al sistema puede invocar un proceso al operar.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Container escape boundaries (Aislamiento y virtualización): Refuerza capacidades, montajes y llamadas permitidas para impedir fugas hacia el nodo anfitrión.",
    "topic": "Aislamiento y virtualización",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-11",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Aislamiento y virtualización), ¿qué función técnica cumple «seccomp filters»?",
    "options": [
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico al operar.",
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores.",
      "Restringe mediante programas en el kernel qué llamadas al sistema puede invocar un proceso.",
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "seccomp filters (Aislamiento y virtualización): Restringe mediante programas en el kernel qué llamadas al sistema puede invocar un proceso.",
    "topic": "Aislamiento y virtualización",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-12",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Virtual-machine escape threat model» en aislamiento y virtualización?",
    "options": [
      "Limita y contabiliza el consumo de procesador, memoria y entrada/salida de un grupo de procesos al operar.",
      "Refuerza capacidades, montajes y llamadas permitidas para impedir fugas hacia el nodo anfitrión al operar.",
      "Expone discos y tarjetas de red paravirtualizadas mediante colas compartidas con el anfitrión al operar.",
      "Audita la superficie de emulación de dispositivos para impedir que un huésped comprometa al hipervisor."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Virtual-machine escape threat model (Aislamiento y virtualización): Audita la superficie de emulación de dispositivos para impedir que un huésped comprometa al hipervisor.",
    "topic": "Aislamiento y virtualización",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-13",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «Discretionary access control»?",
    "options": [
      "Regula permisos de lectura, escritura y ejecución basándose en el propietario y grupo del objeto.",
      "Divide el poder absoluto del superusuario en privilegios granulares asignables por proceso.",
      "Impone políticas centrales de etiquetas que ni siquiera el usuario administrador puede saltar.",
      "Registra resúmenes criptográficos de cada componente de arranque dentro del chip de seguridad."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Discretionary access control (Seguridad del sistema): Regula permisos de lectura, escritura y ejecución basándose en el propietario y grupo del objeto.",
    "topic": "Seguridad del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-14",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Mandatory access control»?",
    "options": [
      "Divide el poder absoluto del superusuario en privilegios granulares asignables por proceso al operar.",
      "Impone políticas centrales de etiquetas que ni siquiera el usuario administrador puede saltar.",
      "Registra resúmenes criptográficos de cada componente de arranque dentro del chip de seguridad.",
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mandatory access control (Seguridad del sistema): Impone políticas centrales de etiquetas que ni siquiera el usuario administrador puede saltar.",
    "topic": "Seguridad del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-15",
    "collectionId": "operating-systems",
    "question": "Respecto a seguridad del sistema en Sistemas operativos, ¿cuál es el propósito de «Capabilities»?",
    "options": [
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico.",
      "Divide el poder absoluto del superusuario en privilegios granulares asignables por proceso.",
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Capabilities (Seguridad del sistema): Divide el poder absoluto del superusuario en privilegios granulares asignables por proceso.",
    "topic": "Seguridad del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-16",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Seguridad del sistema), ¿qué función técnica cumple «Secure boot»?",
    "options": [
      "Impone políticas centrales de etiquetas que ni siquiera el usuario administrador puede saltar al operar.",
      "Registra resúmenes criptográficos de cada componente de arranque dentro del chip de seguridad al operar.",
      "Divide el poder absoluto del superusuario en privilegios granulares asignables por proceso al operar.",
      "Verifica firmas criptográficas de cada etapa de arranque antes de ejecutar el cargador y el kernel."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Secure boot (Seguridad del sistema): Verifica firmas criptográficas de cada etapa de arranque antes de ejecutar el cargador y el kernel.",
    "topic": "Seguridad del sistema",
    "difficulty": "básico"
  },
  {
    "id": "operating-systems-q-17",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Kernel attack surface» en seguridad del sistema?",
    "options": [
      "Reduce módulos innecesarios, llamadas expuestas e interfaces de depuración en sistemas productivos al operar.",
      "Impone políticas centrales de etiquetas que ni siquiera el usuario administrador puede saltar.",
      "Registra resúmenes criptográficos de cada componente de arranque dentro del chip de seguridad.",
      "Divide el poder absoluto del superusuario en privilegios granulares asignables por proceso al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Kernel attack surface (Seguridad del sistema): Reduce módulos innecesarios, llamadas expuestas e interfaces de depuración en sistemas productivos.",
    "topic": "Seguridad del sistema",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-18",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «LSM hook ordering»?",
    "options": [
      "Divide el poder absoluto del superusuario en privilegios granulares asignables por proceso al operar.",
      "Ejecuta en secuencia determinista los módulos de seguridad registrados al validar cada operación.",
      "Impone políticas centrales de etiquetas que ni siquiera el usuario administrador puede saltar.",
      "Registra resúmenes criptográficos de cada componente de arranque dentro del chip de seguridad."
    ],
    "correctAnswerIndex": 1,
    "explanation": "LSM hook ordering (Seguridad del sistema): Ejecuta en secuencia determinista los módulos de seguridad registrados al validar cada operación.",
    "topic": "Seguridad del sistema",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-19",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Measured boot»?",
    "options": [
      "Divide el poder absoluto del superusuario en privilegios granulares asignables por proceso al operar.",
      "Impone políticas centrales de etiquetas que ni siquiera el usuario administrador puede saltar.",
      "Registra resúmenes criptográficos de cada componente de arranque dentro del chip de seguridad.",
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Measured boot (Seguridad del sistema): Registra resúmenes criptográficos de cada componente de arranque dentro del chip de seguridad.",
    "topic": "Seguridad del sistema",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-20",
    "collectionId": "operating-systems",
    "question": "Respecto a comunicación entre procesos en Sistemas operativos, ¿cuál es el propósito de «Pipes»?",
    "options": [
      "Comunica procesos dentro del mismo equipo con semántica de flujo o datagrama y credenciales al operar.",
      "Envía y recibe mensajes discretos con prioridad a través de colas gestionadas por el sistema.",
      "Notifica eventos asíncronos o excepciones de ejecución interrumpiendo el flujo de un proceso.",
      "Conecta la salida estándar de un proceso con la entrada de otro mediante un búfer unidireccional."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pipes (Comunicación entre procesos): Conecta la salida estándar de un proceso con la entrada de otro mediante un búfer unidireccional.",
    "topic": "Comunicación entre procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-21",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Comunicación entre procesos), ¿qué función técnica cumple «Shared memory»?",
    "options": [
      "Mapea las mismas páginas físicas en varios procesos para intercambiar datos a velocidad de RAM.",
      "Comunica procesos dentro del mismo equipo con semántica de flujo o datagrama y credenciales.",
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar.",
      "Envía y recibe mensajes discretos con prioridad a través de colas gestionadas por el sistema."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Shared memory (Comunicación entre procesos): Mapea las mismas páginas físicas en varios procesos para intercambiar datos a velocidad de RAM.",
    "topic": "Comunicación entre procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-22",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Message queues» en comunicación entre procesos?",
    "options": [
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar.",
      "Envía y recibe mensajes discretos con prioridad a través de colas gestionadas por el sistema.",
      "Comunica procesos dentro del mismo equipo con semántica de flujo o datagrama y credenciales.",
      "Notifica eventos asíncronos o excepciones de ejecución interrumpiendo el flujo de un proceso."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Message queues (Comunicación entre procesos): Envía y recibe mensajes discretos con prioridad a través de colas gestionadas por el sistema.",
    "topic": "Comunicación entre procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-23",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «Signals»?",
    "options": [
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar.",
      "Comunica procesos dentro del mismo equipo con semántica de flujo o datagrama y credenciales.",
      "Notifica eventos asíncronos o excepciones de ejecución interrumpiendo el flujo de un proceso.",
      "Envía y recibe mensajes discretos con prioridad a través de colas gestionadas por el sistema."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Signals (Comunicación entre procesos): Notifica eventos asíncronos o excepciones de ejecución interrumpiendo el flujo de un proceso.",
    "topic": "Comunicación entre procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-24",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Local sockets»?",
    "options": [
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar.",
      "Envía y recibe mensajes discretos con prioridad a través de colas gestionadas por el sistema.",
      "Notifica eventos asíncronos o excepciones de ejecución interrumpiendo el flujo de un proceso.",
      "Comunica procesos dentro del mismo equipo con semántica de flujo o datagrama y credenciales."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Local sockets (Comunicación entre procesos): Comunica procesos dentro del mismo equipo con semántica de flujo o datagrama y credenciales.",
    "topic": "Comunicación entre procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-25",
    "collectionId": "operating-systems",
    "question": "Respecto a comunicación entre procesos en Sistemas operativos, ¿cuál es el propósito de «Zero-copy IPC»?",
    "options": [
      "Transfiere páginas entre procesos reasignando entradas de memoria o descriptores sin copiar bytes.",
      "Comunica procesos dentro del mismo equipo con semántica de flujo o datagrama y credenciales.",
      "Envía y recibe mensajes discretos con prioridad a través de colas gestionadas por el sistema.",
      "Notifica eventos asíncronos o excepciones de ejecución interrumpiendo el flujo de un proceso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Zero-copy IPC (Comunicación entre procesos): Transfiere páginas entre procesos reasignando entradas de memoria o descriptores sin copiar bytes.",
    "topic": "Comunicación entre procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-26",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Comunicación entre procesos), ¿qué función técnica cumple «File-descriptor passing»?",
    "options": [
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico.",
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local.",
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo.",
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores."
    ],
    "correctAnswerIndex": 1,
    "explanation": "File-descriptor passing (Comunicación entre procesos): Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local.",
    "topic": "Comunicación entre procesos",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-27",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Monotonic clocks» en tiempo y energía?",
    "options": [
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo al operar.",
      "Adapta el voltaje y la frecuencia del procesador según la carga activa para ahorrar energía.",
      "Mide intervalos transcurridos con un reloj que avanza de forma continua sin saltos de hora.",
      "Ajusta suavemente la frecuencia del reloj local contra servidores de tiempo sin retrocederlo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Monotonic clocks (Tiempo y energía): Mide intervalos transcurridos con un reloj que avanza de forma continua sin saltos de hora.",
    "topic": "Tiempo y energía",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-28",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «Timer interrupts»?",
    "options": [
      "Adapta el voltaje y la frecuencia del procesador según la carga activa para ahorrar energía al operar.",
      "Mide intervalos transcurridos con un reloj que avanza de forma continua sin saltos de hora al operar.",
      "Ajusta suavemente la frecuencia del reloj local contra servidores de tiempo sin retrocederlo al operar.",
      "Interrumpe periódicamente o bajo demanda al procesador para ejecutar vencimientos y planificación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Timer interrupts (Tiempo y energía): Interrumpe periódicamente o bajo demanda al procesador para ejecutar vencimientos y planificación.",
    "topic": "Tiempo y energía",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-29",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Clock synchronization»?",
    "options": [
      "Ajusta suavemente la frecuencia del reloj local contra servidores de tiempo sin retrocederlo.",
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo.",
      "Mide intervalos transcurridos con un reloj que avanza de forma continua sin saltos de hora.",
      "Adapta el voltaje y la frecuencia del procesador según la carga activa para ahorrar energía."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Clock synchronization (Tiempo y energía): Ajusta suavemente la frecuencia del reloj local contra servidores de tiempo sin retrocederlo.",
    "topic": "Tiempo y energía",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-30",
    "collectionId": "operating-systems",
    "question": "Respecto a tiempo y energía en Sistemas operativos, ¿cuál es el propósito de «CPU frequency scaling»?",
    "options": [
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo al operar.",
      "Adapta el voltaje y la frecuencia del procesador según la carga activa para ahorrar energía.",
      "Mide intervalos transcurridos con un reloj que avanza de forma continua sin saltos de hora.",
      "Ajusta suavemente la frecuencia del reloj local contra servidores de tiempo sin retrocederlo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "CPU frequency scaling (Tiempo y energía): Adapta el voltaje y la frecuencia del procesador según la carga activa para ahorrar energía.",
    "topic": "Tiempo y energía",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-31",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Tiempo y energía), ¿qué función técnica cumple «Suspend and resume»?",
    "options": [
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico.",
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo.",
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Suspend and resume (Tiempo y energía): Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo.",
    "topic": "Tiempo y energía",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-32",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Clocksource selection» en tiempo y energía?",
    "options": [
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo al operar.",
      "Mide intervalos transcurridos con un reloj que avanza de forma continua sin saltos de hora.",
      "Adapta el voltaje y la frecuencia del procesador según la carga activa para ahorrar energía.",
      "Elige el contador de hardware más estable y veloz disponible para medir el tiempo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Clocksource selection (Tiempo y energía): Elige el contador de hardware más estable y veloz disponible para medir el tiempo del sistema.",
    "topic": "Tiempo y energía",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-33",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «Timer slack»?",
    "options": [
      "Agrupa vencimientos cercanos de temporizadores para reducir despertares innecesarios del procesador al operar.",
      "Elige el contador de hardware más estable y veloz disponible para medir el tiempo del sistema.",
      "Ajusta suavemente la frecuencia del reloj local contra servidores de tiempo sin retrocederlo al operar.",
      "Adapta el voltaje y la frecuencia del procesador según la carga activa para ahorrar energía al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Timer slack (Tiempo y energía): Agrupa vencimientos cercanos de temporizadores para reducir despertares innecesarios del procesador.",
    "topic": "Tiempo y energía",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-34",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Kernel unit testing»?",
    "options": [
      "Inyecta errores en secuencias reproducibles sobre rutas específicas de llamadas al sistema.",
      "Ejecuta pruebas aisladas de subsistemas internos del núcleo en entornos virtuales ligeros.",
      "Simula fallos de asignación de memoria o errores de disco para probar rutas de recuperación.",
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Kernel unit testing (Testing de bajo nivel): Ejecuta pruebas aisladas de subsistemas internos del núcleo en entornos virtuales ligeros.",
    "topic": "Testing de bajo nivel",
    "difficulty": "intermedio"
  },
  {
    "id": "operating-systems-q-35",
    "collectionId": "operating-systems",
    "question": "Respecto a testing de bajo nivel en Sistemas operativos, ¿cuál es el propósito de «System call fuzzing»?",
    "options": [
      "Instrumenta accesos concurrentes a memoria y cerrojos para detectar carreras de datos y bloqueos al operar.",
      "Automatiza el arranque del kernel en múltiples arquitecturas y máquinas para detectar bloqueos al operar.",
      "Invoca combinaciones aleatorias de llamadas al sistema con cobertura para descubrir fallos del kernel.",
      "Verifica que códigos de retorno, estructuras y banderas mantengan compatibilidad para las apps al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "System call fuzzing (Testing de bajo nivel): Invoca combinaciones aleatorias de llamadas al sistema con cobertura para descubrir fallos del kernel.",
    "topic": "Testing de bajo nivel",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-36",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Testing de bajo nivel), ¿qué función técnica cumple «Race detectors»?",
    "options": [
      "Inyecta errores en secuencias reproducibles sobre rutas específicas de llamadas al sistema al operar.",
      "Ejecuta pruebas aisladas de subsistemas internos del núcleo en entornos virtuales ligeros al operar.",
      "Simula fallos de asignación de memoria o errores de disco para probar rutas de recuperación al operar.",
      "Instrumenta accesos concurrentes a memoria y cerrojos para detectar carreras de datos y bloqueos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Race detectors (Testing de bajo nivel): Instrumenta accesos concurrentes a memoria y cerrojos para detectar carreras de datos y bloqueos.",
    "topic": "Testing de bajo nivel",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-37",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Fault injection» en testing de bajo nivel?",
    "options": [
      "Simula fallos de asignación de memoria o errores de disco para probar rutas de recuperación.",
      "Ejecuta pruebas aisladas de subsistemas internos del núcleo en entornos virtuales ligeros.",
      "Inyecta errores en secuencias reproducibles sobre rutas específicas de llamadas al sistema.",
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fault injection (Testing de bajo nivel): Simula fallos de asignación de memoria o errores de disco para probar rutas de recuperación.",
    "topic": "Testing de bajo nivel",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-38",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «Boot regression testing»?",
    "options": [
      "Ejecuta pruebas aisladas de subsistemas internos del núcleo en entornos virtuales ligeros al operar.",
      "Automatiza el arranque del kernel en múltiples arquitecturas y máquinas para detectar bloqueos.",
      "Inyecta errores en secuencias reproducibles sobre rutas específicas de llamadas al sistema.",
      "Simula fallos de asignación de memoria o errores de disco para probar rutas de recuperación."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Boot regression testing (Testing de bajo nivel): Automatiza el arranque del kernel en múltiples arquitecturas y máquinas para detectar bloqueos.",
    "topic": "Testing de bajo nivel",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-39",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Deterministic fault campaigns»?",
    "options": [
      "Ejecuta pruebas aisladas de subsistemas internos del núcleo en entornos virtuales ligeros al operar.",
      "Simula fallos de asignación de memoria o errores de disco para probar rutas de recuperación.",
      "Inyecta errores en secuencias reproducibles sobre rutas específicas de llamadas al sistema.",
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deterministic fault campaigns (Testing de bajo nivel): Inyecta errores en secuencias reproducibles sobre rutas específicas de llamadas al sistema.",
    "topic": "Testing de bajo nivel",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-40",
    "collectionId": "operating-systems",
    "question": "Respecto a testing de bajo nivel en Sistemas operativos, ¿cuál es el propósito de «System-call ABI conformance»?",
    "options": [
      "Ejecuta pruebas aisladas de subsistemas internos del núcleo en entornos virtuales ligeros al operar.",
      "Inyecta errores en secuencias reproducibles sobre rutas específicas de llamadas al sistema.",
      "Simula fallos de asignación de memoria o errores de disco para probar rutas de recuperación.",
      "Verifica que códigos de retorno, estructuras y banderas mantengan compatibilidad para las apps."
    ],
    "correctAnswerIndex": 3,
    "explanation": "System-call ABI conformance (Testing de bajo nivel): Verifica que códigos de retorno, estructuras y banderas mantengan compatibilidad para las apps.",
    "topic": "Testing de bajo nivel",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-41",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Observabilidad), ¿qué función técnica cumple «Performance counters»?",
    "options": [
      "Lee registros de monitoreo del procesador para medir ciclos, instrucciones y fallos de caché al operar.",
      "Captura el estado completo de memoria y registros de un proceso al sufrir una falla fatal.",
      "Inserta sondas seguras en funciones vivas del kernel y de usuario sin recompilar ni reiniciar.",
      "Agrega muestras de pilas de llamadas en gráficos jerárquicos que revelan dónde se gasta el CPU."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Performance counters (Observabilidad): Lee registros de monitoreo del procesador para medir ciclos, instrucciones y fallos de caché.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-42",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Dynamic tracing» en observabilidad?",
    "options": [
      "Captura el estado completo de memoria y registros de un proceso al sufrir una falla fatal al operar.",
      "Inserta sondas seguras en funciones vivas del kernel y de usuario sin recompilar ni reiniciar.",
      "Lee registros de monitoreo del procesador para medir ciclos, instrucciones y fallos de caché.",
      "Agrega muestras de pilas de llamadas en gráficos jerárquicos que revelan dónde se gasta el CPU."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dynamic tracing (Observabilidad): Inserta sondas seguras en funciones vivas del kernel y de usuario sin recompilar ni reiniciar.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-43",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «eBPF programs»?",
    "options": [
      "Inserta sondas seguras en funciones vivas del kernel y de usuario sin recompilar ni reiniciar al operar.",
      "Lee registros de monitoreo del procesador para medir ciclos, instrucciones y fallos de caché al operar.",
      "Ejecuta programas verificados dentro del kernel para observar eventos, filtrar red y aplicar reglas.",
      "Agrega muestras de pilas de llamadas en gráficos jerárquicos que revelan dónde se gasta el CPU al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "eBPF programs (Observabilidad): Ejecuta programas verificados dentro del kernel para observar eventos, filtrar red y aplicar reglas.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-44",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Core dumps»?",
    "options": [
      "Envía descriptores abiertos de archivos o sockets a otro proceso sobre un canal local al operar.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico.",
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo.",
      "Captura el estado completo de memoria y registros de un proceso al sufrir una falla fatal."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Core dumps (Observabilidad): Captura el estado completo de memoria y registros de un proceso al sufrir una falla fatal.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-45",
    "collectionId": "operating-systems",
    "question": "Respecto a observabilidad en Sistemas operativos, ¿cuál es el propósito de «Flame graphs»?",
    "options": [
      "Agrega muestras de pilas de llamadas en gráficos jerárquicos que revelan dónde se gasta el CPU.",
      "Captura el estado completo de memoria y registros de un proceso al sufrir una falla fatal.",
      "Lee registros de monitoreo del procesador para medir ciclos, instrucciones y fallos de caché.",
      "Inserta sondas seguras en funciones vivas del kernel y de usuario sin recompilar ni reiniciar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Flame graphs (Observabilidad): Agrega muestras de pilas de llamadas en gráficos jerárquicos que revelan dónde se gasta el CPU.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-46",
    "collectionId": "operating-systems",
    "question": "En Sistemas operativos (Observabilidad), ¿qué función técnica cumple «Scheduler latency histograms»?",
    "options": [
      "Captura el estado completo de memoria y registros de un proceso al sufrir una falla fatal al operar.",
      "Mide la distribución del tiempo que esperan los hilos listos en cola antes de recibir procesador.",
      "Lee registros de monitoreo del procesador para medir ciclos, instrucciones y fallos de caché.",
      "Inserta sondas seguras en funciones vivas del kernel y de usuario sin recompilar ni reiniciar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Scheduler latency histograms (Observabilidad): Mide la distribución del tiempo que esperan los hilos listos en cola antes de recibir procesador.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-47",
    "collectionId": "operating-systems",
    "question": "Dentro de Sistemas operativos, ¿cómo opera el mecanismo de «Kernel trace correlation» en observabilidad?",
    "options": [
      "Captura el estado completo de memoria y registros de un proceso al sufrir una falla fatal al operar.",
      "Lee registros de monitoreo del procesador para medir ciclos, instrucciones y fallos de caché.",
      "Cruza eventos de planificación, interrupciones y llamadas con trazas de aplicaciones de usuario.",
      "Inserta sondas seguras en funciones vivas del kernel y de usuario sin recompilar ni reiniciar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Kernel trace correlation (Observabilidad): Cruza eventos de planificación, interrupciones y llamadas con trazas de aplicaciones de usuario.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-48",
    "collectionId": "operating-systems",
    "question": "Al trabajar con Sistemas operativos, ¿qué responsabilidad define a «Patch management»?",
    "options": [
      "Reproduce el diario transaccional o verifica estructuras de metadatos tras un apagado abrupto al operar.",
      "Sustituye funciones vulnerables del kernel en memoria sin reiniciar el servidor ni cortar procesos.",
      "Transfiere datos entre buffers de aplicación y la tarjeta de red sin copiarlos por el kernel al operar.",
      "Planifica y aplica actualizaciones de seguridad sobre el núcleo y bibliotecas críticas del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Patch management (Operación y recuperación): Planifica y aplica actualizaciones de seguridad sobre el núcleo y bibliotecas críticas del sistema.",
    "topic": "Operación y recuperación",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-49",
    "collectionId": "operating-systems",
    "question": "En la arquitectura de Sistemas operativos, ¿qué caracteriza técnicamente a «Kernel live patching»?",
    "options": [
      "Sustituye funciones vulnerables del kernel en memoria sin reiniciar el servidor ni cortar procesos.",
      "Reproduce el diario transaccional o verifica estructuras de metadatos tras un apagado abrupto.",
      "Planifica y aplica actualizaciones de seguridad sobre el núcleo y bibliotecas críticas del sistema.",
      "Transfiere datos entre buffers de aplicación y la tarjeta de red sin copiarlos por el kernel."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Kernel live patching (Operación y recuperación): Sustituye funciones vulnerables del kernel en memoria sin reiniciar el servidor ni cortar procesos.",
    "topic": "Operación y recuperación",
    "difficulty": "avanzado"
  },
  {
    "id": "operating-systems-q-50",
    "collectionId": "operating-systems",
    "question": "Respecto a operación y recuperación en Sistemas operativos, ¿cuál es el propósito de «Filesystem recovery»?",
    "options": [
      "Congela tareas, apaga periféricos y conserva el estado en RAM o disco durante el reposo al operar.",
      "Reproduce el diario transaccional o verifica estructuras de metadatos tras un apagado abrupto.",
      "Particiona la visibilidad de procesos, red, montajes y usuarios para aislar contenedores al operar.",
      "Ejecuta múltiples máquinas virtuales completas arbitrando su acceso al hardware físico al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Filesystem recovery (Operación y recuperación): Reproduce el diario transaccional o verifica estructuras de metadatos tras un apagado abrupto.",
    "topic": "Operación y recuperación",
    "difficulty": "avanzado"
  }
];
