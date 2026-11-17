import type { QuizQuestion } from "@/data/quizTypes";

export const embeddedCQuestions: QuizQuestion[] = [
  {
    "id": "embedded-c-q-01",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Arquitectura de microcontroladores y mapa de memoria), ¿qué función técnica cumple «CPU, buses y periféricos»?",
    "options": [
      "Relaciona instrucciones con memoria, timers, GPIO y controladores conectados al evaluar.",
      "Multiplica frecuencias de cristal para alimentar núcleos y buses periféricos al operar.",
      "Asigna código, datos, stack y configuración según lifetime y resistencia en ejecución.",
      "Actualiza la partición inactiva garantizando rollback automático si falla el boot."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CPU, buses y periféricos (Arquitectura de microcontroladores y mapa de memoria): Relaciona instrucciones con memoria, timers, GPIO y controladores conectados.",
    "topic": "Arquitectura de microcontroladores y mapa de memoria",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-02",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Flash, SRAM y memoria no volátil» en arquitectura de microcontroladores y mapa de memoria?",
    "options": [
      "Relaciona instrucciones con memoria, timers, GPIO y controladores conectados con precisión.",
      "Asigna código, datos, stack y configuración según lifetime y resistencia de forma clara.",
      "Multiplica frecuencias de cristal para alimentar núcleos y buses periféricos al evaluar.",
      "Actualiza la partición inactiva garantizando rollback automático si falla el boot al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Flash, SRAM y memoria no volátil (Arquitectura de microcontroladores y mapa de memoria): Asigna código, datos, stack y configuración según lifetime y resistencia.",
    "topic": "Arquitectura de microcontroladores y mapa de memoria",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-03",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Startup code y vector table»?",
    "options": [
      "Relaciona instrucciones con memoria, timers, GPIO y controladores conectados con precisión.",
      "Multiplica frecuencias de cristal para alimentar núcleos y buses periféricos al evaluar.",
      "Inicializa memoria y conecta excepciones antes de llamar a main dentro de la aplicación.",
      "Asigna código, datos, stack y configuración según lifetime y resistencia de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Startup code y vector table (Arquitectura de microcontroladores y mapa de memoria): Inicializa memoria y conecta excepciones antes de llamar a main.",
    "topic": "Arquitectura de microcontroladores y mapa de memoria",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-04",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Linker scripts (.ld)»?",
    "options": [
      "Relaciona instrucciones con memoria, timers, GPIO y controladores conectados con precisión.",
      "Multiplica frecuencias de cristal para alimentar núcleos y buses periféricos al evaluar.",
      "Asigna código, datos, stack y configuración según lifetime y resistencia de forma clara.",
      "Coloca secciones en regiones físicas y detecta desbordamientos manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Linker scripts (.ld) (Arquitectura de microcontroladores y mapa de memoria): Coloca secciones (.text, .data, .bss) en regiones físicas y detecta desbordamientos.",
    "topic": "Arquitectura de microcontroladores y mapa de memoria",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-05",
    "collectionId": "embedded-c",
    "question": "Respecto a arquitectura de microcontroladores y mapa de memoria en Embedded C, ¿cuál es el propósito de «Puntero de pila (MSP/PSP) y límites de RAM»?",
    "options": [
      "Monitorea crecimiento de stack para prevenir colisión con el heap sin degradar el flujo.",
      "Relaciona instrucciones con memoria, timers, GPIO y controladores conectados al operar.",
      "Multiplica frecuencias de cristal para alimentar núcleos y buses periféricos al operar.",
      "Asigna código, datos, stack y configuración según lifetime y resistencia en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Puntero de pila (MSP/PSP) y límites de RAM (Arquitectura de microcontroladores y mapa de memoria): Monitorea crecimiento de stack para prevenir colisión con el heap.",
    "topic": "Arquitectura de microcontroladores y mapa de memoria",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-06",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Arquitectura de microcontroladores y mapa de memoria), ¿qué función técnica cumple «Sistemas de reloj y PLL»?",
    "options": [
      "Relaciona instrucciones con memoria, timers, GPIO y controladores conectados con precisión.",
      "Multiplica frecuencias de cristal para alimentar núcleos y buses periféricos al evaluar.",
      "Asigna código, datos, stack y configuración según lifetime y resistencia de forma clara.",
      "Actualiza la partición inactiva garantizando rollback automático si falla el boot al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sistemas de reloj y PLL (Arquitectura de microcontroladores y mapa de memoria): Multiplica frecuencias de cristal para alimentar núcleos y buses periféricos.",
    "topic": "Arquitectura de microcontroladores y mapa de memoria",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-07",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Memory-mapped I/O (MMIO)» en registros mapeados en memoria, mmio y volatile?",
    "options": [
      "Aplica operaciones OR, AND y NOT para mutar registros sin alterar campos adyacentes al operar.",
      "Garantiza orden de finalización en pipelines de instrucciones complejas de forma segura.",
      "Controla registros de periféricos accediendo a direcciones de memoria fijas en el flujo.",
      "Mapea bloques de registros mediante punteros a estructuras empaquetadas de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Memory-mapped I/O (MMIO) (Registros mapeados en memoria, MMIO y volatile): Controla registros de periféricos accediendo a direcciones de memoria fijas.",
    "topic": "Registros mapeados en memoria, MMIO y volatile",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-08",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «El calificador volatile en hardware»?",
    "options": [
      "Aplica operaciones OR, AND y NOT para mutar registros sin alterar campos adyacentes al operar.",
      "Controla registros de periféricos accediendo a direcciones de memoria fijas al evaluar.",
      "Garantiza orden de finalización en pipelines de instrucciones complejas de forma clara.",
      "Fuerza lecturas y escrituras sin que el optimizador las descarte sin degradar el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "El calificador volatile en hardware (Registros mapeados en memoria, MMIO y volatile): Fuerza lecturas y escrituras sin que el optimizador las descarte.",
    "topic": "Registros mapeados en memoria, MMIO y volatile",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-09",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Máscaras de bits»?",
    "options": [
      "Aplica operaciones OR, AND y NOT para mutar registros sin alterar campos adyacentes al operar.",
      "Controla registros de periféricos accediendo a direcciones de memoria fijas al operar.",
      "Garantiza orden de finalización en pipelines de instrucciones complejas al operar.",
      "Mapea bloques de registros mediante punteros a estructuras empaquetadas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Máscaras de bits y operaciones atómicas (Registros mapeados en memoria, MMIO y volatile): Aplica operaciones OR, AND y NOT para mutar registros sin alterar campos adyacentes.",
    "topic": "Registros mapeados en memoria, MMIO y volatile",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-10",
    "collectionId": "embedded-c",
    "question": "Respecto a registros mapeados en memoria, mmio y volatile en Embedded C, ¿cuál es el propósito de «Bit-banding y acceso directo a bits»?",
    "options": [
      "Aplica operaciones OR, AND y NOT para mutar registros sin alterar campos adyacentes al operar.",
      "Modifica un único bit mediante una dirección de memoria proyectada durante la ejecución.",
      "Controla registros de periféricos accediendo a direcciones de memoria fijas en el flujo.",
      "Garantiza orden de finalización en pipelines de instrucciones complejas de forma segura."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bit-banding y acceso directo a bits (Registros mapeados en memoria, MMIO y volatile): Modifica un único bit mediante una dirección de memoria proyectada.",
    "topic": "Registros mapeados en memoria, MMIO y volatile",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-11",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Registros mapeados en memoria, MMIO y volatile), ¿qué función técnica cumple «Barreras de memoria de hardware (DMB, DSB, ISB)»?",
    "options": [
      "Aplica operaciones OR, AND y NOT para mutar registros sin alterar campos adyacentes al operar.",
      "Controla registros de periféricos accediendo a direcciones de memoria fijas en el flujo.",
      "Garantiza orden de finalización en pipelines de instrucciones complejas de forma segura.",
      "Mapea bloques de registros mediante punteros a estructuras empaquetadas de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Barreras de memoria de hardware (DMB, DSB, ISB) (Registros mapeados en memoria, MMIO y volatile): Garantiza orden de finalización en pipelines de instrucciones complejas.",
    "topic": "Registros mapeados en memoria, MMIO y volatile",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-12",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Definiciones CMSIS» en registros mapeados en memoria, mmio y volatile?",
    "options": [
      "Aplica operaciones OR, AND y NOT para mutar registros sin alterar campos adyacentes al operar.",
      "Controla registros de periféricos accediendo a direcciones de memoria fijas en el flujo.",
      "Garantiza orden de finalización en pipelines de instrucciones complejas de forma segura.",
      "Mapea bloques de registros mediante punteros a estructuras empaquetadas de forma segura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Definiciones CMSIS y estructuras periféricas (Registros mapeados en memoria, MMIO y volatile): Mapea bloques de registros mediante punteros a estructuras empaquetadas.",
    "topic": "Registros mapeados en memoria, MMIO y volatile",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-13",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Rutinas de servicio de interrupción (ISR)»?",
    "options": [
      "Responde a eventos eléctricos reconociendo fuentes y difiriendo cómputo de modo predecible.",
      "Calcula tiempos de guardado de contexto de registros y respuesta a eventos críticos.",
      "Administra prioridades y prioridades de subgrupo en arquitecturas ARM Cortex-M al operar.",
      "Usa variables atómicas o colas circulares para transferir información a main al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Rutinas de servicio de interrupción (ISR) (Interrupciones, vector table y controlador NVIC): Responde a eventos eléctricos reconociendo fuentes y difiriendo cómputo.",
    "topic": "Interrupciones, vector table y controlador NVIC",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-14",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Controlador de interrupciones NVIC»?",
    "options": [
      "Calcula tiempos de guardado de contexto de registros y respuesta a eventos críticos al operar.",
      "Administra prioridades y prioridades de subgrupo en arquitecturas ARM Cortex-M al operar.",
      "Usa variables atómicas o colas circulares para transferir información a main en el flujo.",
      "Permite que eventos de emergencia interrumpan rutinas de menor prioridad de forma segura."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Controlador de interrupciones NVIC (Interrupciones, vector table y controlador NVIC): Administra prioridades y prioridades de subgrupo en arquitecturas ARM Cortex-M.",
    "topic": "Interrupciones, vector table y controlador NVIC",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-15",
    "collectionId": "embedded-c",
    "question": "Respecto a interrupciones, vector table y controlador nvic en Embedded C, ¿cuál es el propósito de «Latencia de interrupción y jitter»?",
    "options": [
      "Administra prioridades y prioridades de subgrupo en arquitecturas ARM Cortex-M al operar.",
      "Usa variables atómicas o colas circulares para transferir información a main al operar.",
      "Calcula tiempos de guardado de contexto de registros y respuesta a eventos críticos.",
      "Permite que eventos de emergencia interrumpan rutinas de menor prioridad al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Latencia de interrupción y jitter (Interrupciones, vector table y controlador NVIC): Calcula tiempos de guardado de contexto de registros y respuesta a eventos críticos.",
    "topic": "Interrupciones, vector table y controlador NVIC",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-16",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Interrupciones, vector table y controlador NVIC), ¿qué función técnica cumple «Interrupciones anidadas y priorización»?",
    "options": [
      "Calcula tiempos de guardado de contexto de registros y respuesta a eventos críticos al operar.",
      "Administra prioridades y prioridades de subgrupo en arquitecturas ARM Cortex-M al operar.",
      "Usa variables atómicas o colas circulares para transferir información a main al evaluar.",
      "Permite que eventos de emergencia interrumpan rutinas de menor prioridad de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Interrupciones anidadas y priorización (Interrupciones, vector table y controlador NVIC): Permite que eventos de emergencia interrumpan rutinas de menor prioridad.",
    "topic": "Interrupciones, vector table y controlador NVIC",
    "difficulty": "básico"
  },
  {
    "id": "embedded-c-q-17",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Secciones críticas y desactivación temporal» en interrupciones, vector table y controlador nvic?",
    "options": [
      "Bloquea interrupciones durante escrituras en estructuras compartidas sin degradar el flujo.",
      "Calcula tiempos de guardado de contexto de registros y respuesta a eventos críticos.",
      "Administra prioridades y prioridades de subgrupo en arquitecturas ARM Cortex-M al operar.",
      "Usa variables atómicas o colas circulares para transferir información a main al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Secciones críticas y desactivación temporal (Interrupciones, vector table y controlador NVIC): Bloquea interrupciones durante escrituras en estructuras compartidas.",
    "topic": "Interrupciones, vector table y controlador NVIC",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-18",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Compartición de datos atómica con ISRs»?",
    "options": [
      "Calcula tiempos de guardado de contexto de registros y respuesta a eventos críticos al operar.",
      "Usa variables atómicas o colas circulares para transferir información a main al evaluar.",
      "Administra prioridades y prioridades de subgrupo en arquitecturas ARM Cortex-M al operar.",
      "Permite que eventos de emergencia interrumpan rutinas de menor prioridad de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Compartición de datos atómica con ISRs (Interrupciones, vector table y controlador NVIC): Usa variables atómicas o colas circulares para transferir información a main.",
    "topic": "Interrupciones, vector table y controlador NVIC",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-19",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Controlador DMA (Direct Memory Access)»?",
    "options": [
      "Recibe streams continuos de datos sin necesidad de reconfigurar transferencias en ejecución.",
      "Invalida o limpia líneas de caché en CPUs con subsistema de memoria caché de forma clara.",
      "Transfiere ráfagas de datos entre periféricos y RAM sin consumir ciclos de CPU al operar.",
      "Detecta desalineación o colisiones en transferencias de alta velocidad sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Controlador DMA (Direct Memory Access) (Transferencias DMA y arquitectura double buffering): Transfiere ráfagas de datos entre periféricos y RAM sin consumir ciclos de CPU.",
    "topic": "Transferencias DMA y arquitectura double buffering",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-20",
    "collectionId": "embedded-c",
    "question": "Respecto a transferencias dma y arquitectura double buffering en Embedded C, ¿cuál es el propósito de «Modo circular de DMA»?",
    "options": [
      "Transfiere ráfagas de datos entre periféricos y RAM sin consumir ciclos de CPU en ejecución.",
      "Invalida o limpia líneas de caché en CPUs con subsistema de memoria caché de forma clara.",
      "Detecta desalineación o colisiones en transferencias de alta velocidad sin perder estado.",
      "Recibe streams continuos de datos sin necesidad de reconfigurar transferencias al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Modo circular de DMA (Transferencias DMA y arquitectura double buffering): Recibe streams continuos de datos sin necesidad de reconfigurar transferencias.",
    "topic": "Transferencias DMA y arquitectura double buffering",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-21",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Transferencias DMA y arquitectura double buffering), ¿qué función técnica cumple «Interrupciones Half-Transfer y Transfer-Complete»?",
    "options": [
      "Notifica cuando una mitad del buffer está lista para procesarse respetando las invariantes.",
      "Transfiere ráfagas de datos entre periféricos y RAM sin consumir ciclos de CPU al operar.",
      "Recibe streams continuos de datos sin necesidad de reconfigurar transferencias al operar.",
      "Invalida o limpia líneas de caché en CPUs con subsistema de memoria caché en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Interrupciones Half-Transfer y Transfer-Complete (Transferencias DMA y arquitectura double buffering): Notifica cuando una mitad del buffer está lista para procesarse.",
    "topic": "Transferencias DMA y arquitectura double buffering",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-22",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Double buffering sin carreras» en transferencias dma y arquitectura double buffering?",
    "options": [
      "Transfiere ráfagas de datos entre periféricos y RAM sin consumir ciclos de CPU en el flujo.",
      "Separa la región de memoria que DMA llena de la que la CPU lee manteniendo consistencia.",
      "Recibe streams continuos de datos sin necesidad de reconfigurar transferencias al operar.",
      "Invalida o limpia líneas de caché en CPUs con subsistema de memoria caché con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Double buffering sin carreras (Transferencias DMA y arquitectura double buffering): Separa la región de memoria que DMA llena de la que la CPU lee.",
    "topic": "Transferencias DMA y arquitectura double buffering",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-23",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Coherencia de caché»?",
    "options": [
      "Transfiere ráfagas de datos entre periféricos y RAM sin consumir ciclos de CPU en el flujo.",
      "Recibe streams continuos de datos sin necesidad de reconfigurar transferencias al operar.",
      "Invalida o limpia líneas de caché en CPUs con subsistema de memoria caché con precisión.",
      "Detecta desalineación o colisiones en transferencias de alta velocidad dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Coherencia de caché y atributos de memoria (Transferencias DMA y arquitectura double buffering): Invalida o limpia líneas de caché en CPUs con subsistema de memoria caché.",
    "topic": "Transferencias DMA y arquitectura double buffering",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-24",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Manejo de errores de bus en DMA»?",
    "options": [
      "Transfiere ráfagas de datos entre periféricos y RAM sin consumir ciclos de CPU en el flujo.",
      "Recibe streams continuos de datos sin necesidad de reconfigurar transferencias al operar.",
      "Invalida o limpia líneas de caché en CPUs con subsistema de memoria caché con precisión.",
      "Detecta desalineación o colisiones en transferencias de alta velocidad dentro del flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Manejo de errores de bus en DMA (Transferencias DMA y arquitectura double buffering): Detecta desalineación o colisiones en transferencias de alta velocidad.",
    "topic": "Transferencias DMA y arquitectura double buffering",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-25",
    "collectionId": "embedded-c",
    "question": "Respecto a buses de comunicación periférica: uart, spi e i2c en Embedded C, ¿cuál es el propósito de «Protocolo UART y framing de bytes»?",
    "options": [
      "Configura baudrates, paridad, bits de stop y maneja buffers de recepción FIFO en ejecución.",
      "Coordina múltiples sensores mediante reloj SCL y datos SDA con control de arbitraje.",
      "Transfiere datos a alta velocidad en modo full-duplex con líneas Clock, MOSI, MISO y CS.",
      "Evita pérdidas de datos pausando la transmisión mediante señales eléctricas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Protocolo UART y framing de bytes (Buses de comunicación periférica: UART, SPI e I2C): Configura baudrates, paridad, bits de stop y maneja buffers de recepción FIFO.",
    "topic": "Buses de comunicación periférica: UART, SPI e I2C",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-26",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Buses de comunicación periférica: UART, SPI e I2C), ¿qué función técnica cumple «Bus serie SPI síncrono»?",
    "options": [
      "Coordina múltiples sensores mediante reloj SCL y datos SDA con control de arbitraje al operar.",
      "Transfiere datos a alta velocidad en modo full-duplex con líneas Clock, MOSI, MISO y CS.",
      "Configura baudrates, paridad, bits de stop y maneja buffers de recepción FIFO al operar.",
      "Evita pérdidas de datos pausando la transmisión mediante señales eléctricas en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bus serie SPI síncrono (Buses de comunicación periférica: UART, SPI e I2C): Transfiere datos a alta velocidad en modo full-duplex con líneas Clock, MOSI, MISO y CS.",
    "topic": "Buses de comunicación periférica: UART, SPI e I2C",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-27",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Bus I2C bifilar y direccionamiento» en buses de comunicación periférica: uart, spi e i2c?",
    "options": [
      "Configura baudrates, paridad, bits de stop y maneja buffers de recepción FIFO al operar.",
      "Evita pérdidas de datos pausando la transmisión mediante señales eléctricas al operar.",
      "Coordina múltiples sensores mediante reloj SCL y datos SDA con control de arbitraje.",
      "Recupera líneas atascadas en bajo forzando pulsos de reloj manuales de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bus I2C bifilar y direccionamiento (Buses de comunicación periférica: UART, SPI e I2C): Coordina múltiples sensores mediante reloj SCL y datos SDA con control de arbitraje.",
    "topic": "Buses de comunicación periférica: UART, SPI e I2C",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-28",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Detección de timeouts y bus hang»?",
    "options": [
      "Configura baudrates, paridad, bits de stop y maneja buffers de recepción FIFO en el flujo.",
      "Coordina múltiples sensores mediante reloj SCL y datos SDA con control de arbitraje.",
      "Evita pérdidas de datos pausando la transmisión mediante señales eléctricas al evaluar.",
      "Recupera líneas atascadas en bajo forzando pulsos de reloj manuales de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Detección de timeouts y bus hang (Buses de comunicación periférica: UART, SPI e I2C): Recupera líneas atascadas en bajo forzando pulsos de reloj manuales.",
    "topic": "Buses de comunicación periférica: UART, SPI e I2C",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-29",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Control de flujo por hardware (RTS/CTS)»?",
    "options": [
      "Evita pérdidas de datos pausando la transmisión mediante señales eléctricas de forma clara.",
      "Coordina múltiples sensores mediante reloj SCL y datos SDA con control de arbitraje.",
      "Configura baudrates, paridad, bits de stop y maneja buffers de recepción FIFO al operar.",
      "Transfiere datos a alta velocidad en modo full-duplex con líneas Clock, MOSI, MISO y CS."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Control de flujo por hardware (RTS/CTS) (Buses de comunicación periférica: UART, SPI e I2C): Evita pérdidas de datos pausando la transmisión mediante señales eléctricas.",
    "topic": "Buses de comunicación periférica: UART, SPI e I2C",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-30",
    "collectionId": "embedded-c",
    "question": "Respecto a sistemas de tiempo real cooperativos y rtos en Embedded C, ¿cuál es el propósito de «Superloop y máquinas de estado»?",
    "options": [
      "Mide el camino de ejecución más largo para garantizar el cumplimiento de deadlines al operar.",
      "Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS al operar.",
      "Protege periféricos compartidos y coordina señales entre tareas e interrupciones al operar.",
      "Eleva la prioridad de una tarea que retiene un cerrojo requerido por una tarea crítica."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Superloop y máquinas de estado (Sistemas de tiempo real cooperativos y RTOS): Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS.",
    "topic": "Sistemas de tiempo real cooperativos y RTOS",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-31",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Sistemas de tiempo real cooperativos y RTOS), ¿qué función técnica cumple «Planificador preemptivo de FreeRTOS»?",
    "options": [
      "Protege periféricos compartidos y coordina señales entre tareas e interrupciones al operar.",
      "Mide el camino de ejecución más largo para garantizar el cumplimiento de deadlines al operar.",
      "Conmuta tareas según prioridades asignadas mediante el tick del SysTick de forma segura.",
      "Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Planificador preemptivo de FreeRTOS (Sistemas de tiempo real cooperativos y RTOS): Conmuta tareas según prioridades asignadas mediante el tick del SysTick.",
    "topic": "Sistemas de tiempo real cooperativos y RTOS",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-32",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Colas de mensajes inter-tarea» en sistemas de tiempo real cooperativos y rtos?",
    "options": [
      "Protege periféricos compartidos y coordina señales entre tareas e interrupciones al operar.",
      "Mide el camino de ejecución más largo para garantizar el cumplimiento de deadlines al operar.",
      "Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS al operar.",
      "Comunica tareas mediante copias de datos desacopladas sin memoria compartida al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Colas de mensajes inter-tarea (Sistemas de tiempo real cooperativos y RTOS): Comunica tareas mediante copias de datos desacopladas sin memoria compartida.",
    "topic": "Sistemas de tiempo real cooperativos y RTOS",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-33",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Semáforos binarios y mutexes en RTOS»?",
    "options": [
      "Protege periféricos compartidos y coordina señales entre tareas e interrupciones de forma clara.",
      "Eleva la prioridad de una tarea que retiene un cerrojo requerido por una tarea crítica.",
      "Mide el camino de ejecución más largo para garantizar el cumplimiento de deadlines al operar.",
      "Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Semáforos binarios y mutexes en RTOS (Sistemas de tiempo real cooperativos y RTOS): Protege periféricos compartidos y coordina señales entre tareas e interrupciones.",
    "topic": "Sistemas de tiempo real cooperativos y RTOS",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-34",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Inversión de prioridad y herencia»?",
    "options": [
      "Protege periféricos compartidos y coordina señales entre tareas e interrupciones al operar.",
      "Eleva la prioridad de una tarea que retiene un cerrojo requerido por una tarea crítica.",
      "Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS al operar.",
      "Mide el camino de ejecución más largo para garantizar el cumplimiento de deadlines."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Inversión de prioridad y herencia (Sistemas de tiempo real cooperativos y RTOS): Eleva la prioridad de una tarea que retiene un cerrojo requerido por una tarea crítica.",
    "topic": "Sistemas de tiempo real cooperativos y RTOS",
    "difficulty": "intermedio"
  },
  {
    "id": "embedded-c-q-35",
    "collectionId": "embedded-c",
    "question": "Respecto a sistemas de tiempo real cooperativos y rtos en Embedded C, ¿cuál es el propósito de «Worst-Case Execution Time (WCET)»?",
    "options": [
      "Comunica tareas mediante copias de datos desacopladas sin memoria compartida al operar.",
      "Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS.",
      "Mide el camino de ejecución más largo para garantizar el cumplimiento de deadlines.",
      "Protege periféricos compartidos y coordina señales entre tareas e interrupciones."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Worst-Case Execution Time (WCET) (Sistemas de tiempo real cooperativos y RTOS): Mide el camino de ejecución más largo para garantizar el cumplimiento de deadlines.",
    "topic": "Sistemas de tiempo real cooperativos y RTOS",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-36",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Gestión de energía y transiciones a modos Sleep), ¿qué función técnica cumple «Modos de bajo consumo (Sleep, Stop, Standby)»?",
    "options": [
      "Configura interrupciones externas de GPIO o temporizadores RTC para despertar la CPU al operar.",
      "Calcula la duración de baterías alternando ráfagas de cómputo y sueño profundo al operar.",
      "Suspende la ejecución del núcleo hasta la llegada de un evento válido sin perder estado.",
      "Desconecta relojes de periféricos y dominios de energía para ahorrar batería al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Modos de bajo consumo (Sleep, Stop, Standby) (Gestión de energía y transiciones a modos Sleep): Desconecta relojes de periféricos y dominios de energía para ahorrar batería.",
    "topic": "Gestión de energía y transiciones a modos Sleep",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-37",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Fuentes de despertar (Wake-up sources)» en gestión de energía y transiciones a modos sleep?",
    "options": [
      "Configura interrupciones externas de GPIO o temporizadores RTC para despertar la CPU al operar.",
      "Calcula la duración de baterías alternando ráfagas de cómputo y sueño profundo.",
      "Desconecta relojes de periféricos y dominios de energía para ahorrar batería al operar.",
      "Suspende la ejecución del núcleo hasta la llegada de un evento válido en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fuentes de despertar (Wake-up sources) (Gestión de energía y transiciones a modos Sleep): Configura interrupciones externas de GPIO o temporizadores RTC para despertar la CPU.",
    "topic": "Gestión de energía y transiciones a modos Sleep",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-38",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Instrucciones WFI (Wait For Interrupt) y WFE»?",
    "options": [
      "Configura interrupciones externas de GPIO o temporizadores RTC para despertar la CPU al operar.",
      "Suspende la ejecución del núcleo hasta la llegada de un evento válido sin perder estado.",
      "Calcula la duración de baterías alternando ráfagas de cómputo y sueño profundo al operar.",
      "Desconecta relojes de periféricos y dominios de energía para ahorrar batería al evaluar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Instrucciones WFI (Wait For Interrupt) y WFE (Gestión de energía y transiciones a modos Sleep): Suspende la ejecución del núcleo hasta la llegada de un evento válido.",
    "topic": "Gestión de energía y transiciones a modos Sleep",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-39",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Presupuesto energético y duty cycling»?",
    "options": [
      "Configura interrupciones externas de GPIO o temporizadores RTC para despertar la CPU al operar.",
      "Desconecta relojes de periféricos y dominios de energía para ahorrar batería en el flujo.",
      "Calcula la duración de baterías alternando ráfagas de cómputo y sueño profundo al operar.",
      "Suspende la ejecución del núcleo hasta la llegada de un evento válido de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Presupuesto energético y duty cycling (Gestión de energía y transiciones a modos Sleep): Calcula la duración de baterías alternando ráfagas de cómputo y sueño profundo.",
    "topic": "Gestión de energía y transiciones a modos Sleep",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-40",
    "collectionId": "embedded-c",
    "question": "Respecto a gestión de energía y transiciones a modos sleep en Embedded C, ¿cuál es el propósito de «Restauración de relojes al despertar»?",
    "options": [
      "Configura interrupciones externas de GPIO o temporizadores RTC para despertar la CPU al operar.",
      "Calcula la duración de baterías alternando ráfagas de cómputo y sueño profundo al operar.",
      "Desconecta relojes de periféricos y dominios de energía para ahorrar batería al evaluar.",
      "Reconfigura osciladores y PLLs antes de reanudar operaciones críticas sin perder estado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Restauración de relojes al despertar (Gestión de energía y transiciones a modos Sleep): Reconfigura osciladores y PLLs antes de reanudar operaciones críticas.",
    "topic": "Gestión de energía y transiciones a modos Sleep",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-41",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Watchdogs independientes, brownout y reset causes), ¿qué función técnica cumple «Watchdog independiente (IWDG)»?",
    "options": [
      "Fuerza reinicio del microcontrolador si el software se congela o entra en bucle infinito al operar.",
      "Identifica si el último inicio se debió a encendido, watchdog, pin reset o fallo al operar.",
      "Mantiene el sistema en reset seguro si la alimentación cae bajo el umbral operacional.",
      "Coloca salidas y actuadores en posición pasiva segura antes de cualquier reset al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Watchdog independiente (IWDG) (Watchdogs independientes, brownout y reset causes): Fuerza reinicio del microcontrolador si el software se congela o entra en bucle infinito.",
    "topic": "Watchdogs independientes, brownout y reset causes",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-42",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Watchdog con ventana (WWDG)» en watchdogs independientes, brownout y reset causes?",
    "options": [
      "Fuerza reinicio del microcontrolador si el software se congela o entra en bucle infinito al operar.",
      "Garantiza que la tarea se ejecute dentro de una ventana temporal estricta ni antes ni después.",
      "Mantiene el sistema en reset seguro si la alimentación cae bajo el umbral operacional al operar.",
      "Identifica si el último inicio se debió a encendido, watchdog, pin reset o fallo en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Watchdog con ventana (WWDG) (Watchdogs independientes, brownout y reset causes): Garantiza que la tarea se ejecute dentro de una ventana temporal estricta ni antes ni después.",
    "topic": "Watchdogs independientes, brownout y reset causes",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-43",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Detector de caídas de tensión (Brown-out Reset)»?",
    "options": [
      "Identifica si el último inicio se debió a encendido, watchdog, pin reset o fallo al operar.",
      "Coloca salidas y actuadores en posición pasiva segura antes de cualquier reset al operar.",
      "Mantiene el sistema en reset seguro si la alimentación cae bajo el umbral operacional.",
      "Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Detector de caídas de tensión (Brown-out Reset) (Watchdogs independientes, brownout y reset causes): Mantiene el sistema en reset seguro si la alimentación cae bajo el umbral operacional.",
    "topic": "Watchdogs independientes, brownout y reset causes",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-44",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Registro de causas de reinicio (RCC CSR)»?",
    "options": [
      "Mantiene el sistema en reset seguro si la alimentación cae bajo el umbral operacional al operar.",
      "Fuerza reinicio del microcontrolador si el software se congela o entra en bucle infinito.",
      "Coloca salidas y actuadores en posición pasiva segura antes de cualquier reset en el flujo.",
      "Identifica si el último inicio se debió a encendido, watchdog, pin reset o fallo al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Registro de causas de reinicio (RCC CSR) (Watchdogs independientes, brownout y reset causes): Identifica si el último inicio se debió a encendido, watchdog, pin reset o fallo.",
    "topic": "Watchdogs independientes, brownout y reset causes",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-45",
    "collectionId": "embedded-c",
    "question": "Respecto a watchdogs independientes, brownout y reset causes en Embedded C, ¿cuál es el propósito de «Estado seguro físico ante fallo (Fail-Safe)»?",
    "options": [
      "Coloca salidas y actuadores en posición pasiva segura antes de cualquier reset de forma clara.",
      "Identifica si el último inicio se debió a encendido, watchdog, pin reset o fallo al operar.",
      "Mantiene el sistema en reset seguro si la alimentación cae bajo el umbral operacional.",
      "Fuerza reinicio del microcontrolador si el software se congela o entra en bucle infinito."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Estado seguro físico ante fallo (Fail-Safe) (Watchdogs independientes, brownout y reset causes): Coloca salidas y actuadores en posición pasiva segura antes de cualquier reset.",
    "topic": "Watchdogs independientes, brownout y reset causes",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-46",
    "collectionId": "embedded-c",
    "question": "En Embedded C (Firmware seguro, bootloaders y partición A/B), ¿qué función técnica cumple «Bootloaders primarios y secundarios»?",
    "options": [
      "Aplica estándares estrictos que eliminan construcciones ambiguas y peligrosas de C al operar.",
      "Gestiona el arranque de imágenes y valida firmas criptográficas de autenticidad al operar.",
      "Actualiza la partición inactiva garantizando rollback automático si falla el boot al operar.",
      "Impide la extracción no autorizada de firmware mediante interfaces de depuración al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bootloaders primarios y secundarios (Firmware seguro, bootloaders y partición A/B): Gestiona el arranque de imágenes y valida firmas criptográficas de autenticidad.",
    "topic": "Firmware seguro, bootloaders y partición A/B",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-47",
    "collectionId": "embedded-c",
    "question": "Dentro de Embedded C, ¿cómo opera el mecanismo de «Esquema de doble partición (A/B updates)» en firmware seguro, bootloaders y partición a/b?",
    "options": [
      "Gestiona el arranque de imágenes y valida firmas criptográficas de autenticidad al operar.",
      "Verifica que los bytes de Flash no hayan sufrido corrupción antes de ejecutarse.",
      "Actualiza la partición inactiva garantizando rollback automático si falla el boot.",
      "Impide la extracción no autorizada de firmware mediante interfaces de depuración."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Esquema de doble partición (A/B updates) (Firmware seguro, bootloaders y partición A/B): Actualiza la partición inactiva garantizando rollback automático si falla el boot.",
    "topic": "Firmware seguro, bootloaders y partición A/B",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-48",
    "collectionId": "embedded-c",
    "question": "Al trabajar con Embedded C, ¿qué responsabilidad define a «Comprobación de integridad CRC32 y SHA-256»?",
    "options": [
      "Aplica estándares estrictos que eliminan construcciones ambiguas y peligrosas de C al operar.",
      "Actualiza la partición inactiva garantizando rollback automático si falla el boot al operar.",
      "Impide la extracción no autorizada de firmware mediante interfaces de depuración al operar.",
      "Verifica que los bytes de Flash no hayan sufrido corrupción antes de ejecutarse al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Comprobación de integridad CRC32 y SHA-256 (Firmware seguro, bootloaders y partición A/B): Verifica que los bytes de Flash no hayan sufrido corrupción antes de ejecutarse.",
    "topic": "Firmware seguro, bootloaders y partición A/B",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-49",
    "collectionId": "embedded-c",
    "question": "En la arquitectura de Embedded C, ¿qué caracteriza técnicamente a «Protección de lectura de Flash (RDP)»?",
    "options": [
      "Impide la extracción no autorizada de firmware mediante interfaces de depuración de forma clara.",
      "Aplica estándares estrictos que eliminan construcciones ambiguas y peligrosas de C al operar.",
      "Actualiza la partición inactiva garantizando rollback automático si falla el boot al operar.",
      "Gestiona el arranque de imágenes y valida firmas criptográficas de autenticidad al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Protección de lectura de Flash (RDP) (Firmware seguro, bootloaders y partición A/B): Impide la extracción no autorizada de firmware mediante interfaces de depuración.",
    "topic": "Firmware seguro, bootloaders y partición A/B",
    "difficulty": "avanzado"
  },
  {
    "id": "embedded-c-q-50",
    "collectionId": "embedded-c",
    "question": "Respecto a firmware seguro, bootloaders y partición a/b en Embedded C, ¿cuál es el propósito de «Reglas MISRA-C en firmware crítico»?",
    "options": [
      "Gestiona el arranque de imágenes y valida firmas criptográficas de autenticidad al operar.",
      "Aplica estándares estrictos que eliminan construcciones ambiguas y peligrosas de C.",
      "Verifica que los bytes de Flash no hayan sufrido corrupción antes de ejecutarse.",
      "Impide la extracción no autorizada de firmware mediante interfaces de depuración."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Reglas MISRA-C en firmware crítico (Firmware seguro, bootloaders y partición A/B): Aplica estándares estrictos que eliminan construcciones ambiguas y peligrosas de C.",
    "topic": "Firmware seguro, bootloaders y partición A/B",
    "difficulty": "avanzado"
  }
];
