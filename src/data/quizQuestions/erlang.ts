import type { QuizQuestion } from "@/data/quizTypes";

export const erlangQuestions: QuizQuestion[] = [
  {
    "id": "erlang-q-01",
    "collectionId": "erlang",
    "question": "En Erlang (Protocolos entre procesos), ¿qué función técnica cumple «Timeouts de recepción»?",
    "options": [
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo al operar.",
      "Incluye etiquetas de versión en tuplas de mensajes para evolucionar actores sin caídas.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador.",
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Timeouts de recepción (Protocolos entre procesos): Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo.",
    "topic": "Protocolos entre procesos",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-02",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «Mailbox growth» en protocolos entre procesos?",
    "options": [
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo al operar.",
      "Acumula mensajes no consumidos en la cola de un proceso hasta degradar latencia y memoria.",
      "Incluye etiquetas de versión en tuplas de mensajes para evolucionar actores sin caídas.",
      "Escanea la cola buscando un patrón específico y penaliza el costo si hay muchos mensajes."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mailbox growth (Protocolos entre procesos): Acumula mensajes no consumidos en la cola de un proceso hasta degradar latencia y memoria.",
    "topic": "Protocolos entre procesos",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-03",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Selective receive performance»?",
    "options": [
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo al operar.",
      "Incluye etiquetas de versión en tuplas de mensajes para evolucionar actores sin caídas.",
      "Escanea la cola buscando un patrón específico y penaliza el costo si hay muchos mensajes.",
      "Acumula mensajes no consumidos en la cola de un proceso hasta degradar latencia y memoria."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Selective receive performance (Protocolos entre procesos): Escanea la cola buscando un patrón específico y penaliza el costo si hay muchos mensajes.",
    "topic": "Protocolos entre procesos",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-04",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Protocol versioning»?",
    "options": [
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo al operar.",
      "Escanea la cola buscando un patrón específico y penaliza el costo si hay muchos mensajes.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador.",
      "Incluye etiquetas de versión en tuplas de mensajes para evolucionar actores sin caídas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Protocol versioning (Protocolos entre procesos): Incluye etiquetas de versión en tuplas de mensajes para evolucionar actores sin caídas.",
    "topic": "Protocolos entre procesos",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-05",
    "collectionId": "erlang",
    "question": "Respecto a servidores otp avanzados en Erlang, ¿cuál es el propósito de «GenServer callbacks»?",
    "options": [
      "Estructura el estado y manejo de llamadas síncronas o asíncronas dentro de un servidor estándar.",
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje al operar.",
      "Reemplaza gestores de eventos acoplados por procesos supervisados o despacho directo en tablas.",
      "Modela máquinas de estados explícitas con transiciones, temporizadores y posposición de eventos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "GenServer callbacks (Servidores OTP avanzados): Estructura el estado y manejo de llamadas síncronas o asíncronas dentro de un servidor estándar.",
    "topic": "Servidores OTP avanzados",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-06",
    "collectionId": "erlang",
    "question": "En Erlang (Servidores OTP avanzados), ¿qué función técnica cumple «gen_statem»?",
    "options": [
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje en ejecución.",
      "Modela máquinas de estados explícitas con transiciones, temporizadores y posposición de eventos.",
      "Reemplaza gestores de eventos acoplados por procesos supervisados o despacho directo en tablas.",
      "Estructura el estado y manejo de llamadas síncronas o asíncronas dentro de un servidor estándar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "gen_statem (Servidores OTP avanzados): Modela máquinas de estados explícitas con transiciones, temporizadores y posposición de eventos.",
    "topic": "Servidores OTP avanzados",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-07",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «gen_event alternatives» en servidores otp avanzados?",
    "options": [
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje en el flujo.",
      "Estructura el estado y manejo de llamadas síncronas o asíncronas dentro de un servidor estándar.",
      "Reemplaza gestores de eventos acoplados por procesos supervisados o despacho directo en tablas.",
      "Modela máquinas de estados explícitas con transiciones, temporizadores y posposición de eventos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "gen_event alternatives (Servidores OTP avanzados): Reemplaza gestores de eventos acoplados por procesos supervisados o despacho directo en tablas.",
    "topic": "Servidores OTP avanzados",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-08",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Continue callbacks»?",
    "options": [
      "Reemplaza gestores de eventos acoplados por procesos supervisados o despacho directo en tablas al operar.",
      "Estructura el estado y manejo de llamadas síncronas o asíncronas dentro de un servidor estándar.",
      "Modela máquinas de estados explícitas con transiciones, temporizadores y posposición de eventos.",
      "Ejecuta trabajo inmediato tras inicializar o responder sin bloquear al llamador ni usar mensajes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Continue callbacks (Servidores OTP avanzados): Ejecuta trabajo inmediato tras inicializar o responder sin bloquear al llamador ni usar mensajes.",
    "topic": "Servidores OTP avanzados",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-09",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Process hibernation»?",
    "options": [
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador.",
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo.",
      "Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Process hibernation (Servidores OTP avanzados): Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje.",
    "topic": "Servidores OTP avanzados",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-10",
    "collectionId": "erlang",
    "question": "Respecto a árboles de supervisión en Erlang, ¿cuál es el propósito de «One-for-one strategy»?",
    "options": [
      "Limita cuántos reinicios se permiten en una ventana de tiempo antes de escalar el fallo al operar.",
      "Reinicia únicamente al proceso hijo que falló sin afectar a sus hermanos bajo el supervisor.",
      "Termina a los hijos en orden inverso a su arranque respetando tiempos de cierre ordenado.",
      "Reinicia al hijo caído y a todos los procesos iniciados después de él en orden secuencial."
    ],
    "correctAnswerIndex": 1,
    "explanation": "One-for-one strategy (Árboles de supervisión): Reinicia únicamente al proceso hijo que falló sin afectar a sus hermanos bajo el supervisor.",
    "topic": "Árboles de supervisión",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-11",
    "collectionId": "erlang",
    "question": "En Erlang (Árboles de supervisión), ¿qué función técnica cumple «Rest-for-one strategy»?",
    "options": [
      "Limita cuántos reinicios se permiten en una ventana de tiempo antes de escalar el fallo al operar.",
      "Termina a los hijos en orden inverso a su arranque respetando tiempos de cierre ordenado.",
      "Reinicia al hijo caído y a todos los procesos iniciados después de él en orden secuencial.",
      "Reinicia únicamente al proceso hijo que falló sin afectar a sus hermanos bajo el supervisor."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Rest-for-one strategy (Árboles de supervisión): Reinicia al hijo caído y a todos los procesos iniciados después de él en orden secuencial.",
    "topic": "Árboles de supervisión",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-12",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «Restart intensity» en árboles de supervisión?",
    "options": [
      "Termina a los hijos en orden inverso a su arranque respetando tiempos de cierre ordenado.",
      "Reinicia al hijo caído y a todos los procesos iniciados después de él en orden secuencial.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador al operar.",
      "Limita cuántos reinicios se permiten en una ventana de tiempo antes de escalar el fallo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Restart intensity (Árboles de supervisión): Limita cuántos reinicios se permiten en una ventana de tiempo antes de escalar el fallo.",
    "topic": "Árboles de supervisión",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-13",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Dynamic supervisors»?",
    "options": [
      "Inicia y supervisa hijos bajo demanda cuyas instancias no se conocen al arrancar el sistema.",
      "Limita cuántos reinicios se permiten en una ventana de tiempo antes de escalar el fallo.",
      "Termina a los hijos en orden inverso a su arranque respetando tiempos de cierre ordenado.",
      "Reinicia al hijo caído y a todos los procesos iniciados después de él en orden secuencial."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dynamic supervisors (Árboles de supervisión): Inicia y supervisa hijos bajo demanda cuyas instancias no se conocen al arrancar el sistema.",
    "topic": "Árboles de supervisión",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-14",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Shutdown ordering»?",
    "options": [
      "Limita cuántos reinicios se permiten en una ventana de tiempo antes de escalar el fallo al operar.",
      "Termina a los hijos en orden inverso a su arranque respetando tiempos de cierre ordenado.",
      "Reinicia al hijo caído y a todos los procesos iniciados después de él en orden secuencial.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Shutdown ordering (Árboles de supervisión): Termina a los hijos en orden inverso a su arranque respetando tiempos de cierre ordenado.",
    "topic": "Árboles de supervisión",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-15",
    "collectionId": "erlang",
    "question": "Respecto a árboles de supervisión en Erlang, ¿cuál es el propósito de «Significant children»?",
    "options": [
      "Termina a los hijos en orden inverso a su arranque respetando tiempos de cierre ordenado al operar.",
      "Reinicia al hijo caído y a todos los procesos iniciados después de él en orden secuencial al operar.",
      "Marca procesos clave cuya terminación puede detener automáticamente a su supervisor contenedor.",
      "Limita cuántos reinicios se permiten en una ventana de tiempo antes de escalar el fallo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Significant children (Árboles de supervisión): Marca procesos clave cuya terminación puede detener automáticamente a su supervisor contenedor.",
    "topic": "Árboles de supervisión",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-16",
    "collectionId": "erlang",
    "question": "En Erlang (Árboles de supervisión), ¿qué función técnica cumple «Automatic shutdown»?",
    "options": [
      "Limita cuántos reinicios se permiten en una ventana de tiempo antes de escalar el fallo al operar.",
      "Termina a los hijos en orden inverso a su arranque respetando tiempos de cierre ordenado.",
      "Reinicia al hijo caído y a todos los procesos iniciados después de él en orden secuencial.",
      "Configura al supervisor para apagarse por sí mismo cuando finalizan sus hijos significativos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Automatic shutdown (Árboles de supervisión): Configura al supervisor para apagarse por sí mismo cuando finalizan sus hijos significativos.",
    "topic": "Árboles de supervisión",
    "difficulty": "básico"
  },
  {
    "id": "erlang-q-17",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «Application resource files» en aplicaciones y releases?",
    "options": [
      "Declara módulos, dependencias, variables de entorno y el módulo de arranque de una aplicación al operar.",
      "Define la secuencia exacta en que la máquina virtual carga módulos e inicia aplicaciones.",
      "Actualiza código y migra el estado interno de procesos en caliente sin detener el nodo al operar.",
      "Ajusta parámetros de aplicaciones y banderas de la máquina virtual al levantar el servicio."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Application resource files (Aplicaciones y releases): Declara módulos, dependencias, variables de entorno y el módulo de arranque de una aplicación.",
    "topic": "Aplicaciones y releases",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-18",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Release assembly»?",
    "options": [
      "Actualiza código y migra el estado interno de procesos en caliente sin detener el nodo al operar.",
      "Empaqueta el runtime, las bibliotecas requeridas y la configuración en un artefacto autónomo.",
      "Define la secuencia exacta en que la máquina virtual carga módulos e inicia aplicaciones.",
      "Ajusta parámetros de aplicaciones y banderas de la máquina virtual al levantar el servicio."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Release assembly (Aplicaciones y releases): Empaqueta el runtime, las bibliotecas requeridas y la configuración en un artefacto autónomo.",
    "topic": "Aplicaciones y releases",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-19",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Boot scripts»?",
    "options": [
      "Actualiza código y migra el estado interno de procesos en caliente sin detener el nodo al operar.",
      "Ajusta parámetros de aplicaciones y banderas de la máquina virtual al levantar el servicio.",
      "Define la secuencia exacta en que la máquina virtual carga módulos e inicia aplicaciones.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Boot scripts (Aplicaciones y releases): Define la secuencia exacta en que la máquina virtual carga módulos e inicia aplicaciones.",
    "topic": "Aplicaciones y releases",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-20",
    "collectionId": "erlang",
    "question": "Respecto a aplicaciones y releases en Erlang, ¿cuál es el propósito de «Runtime configuration»?",
    "options": [
      "Actualiza código y migra el estado interno de procesos en caliente sin detener el nodo al operar.",
      "Define la secuencia exacta en que la máquina virtual carga módulos e inicia aplicaciones.",
      "Especifica las órdenes de bajo nivel para cargar módulos y suspender procesos al actualizar.",
      "Ajusta parámetros de aplicaciones y banderas de la máquina virtual al levantar el servicio."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Runtime configuration (Aplicaciones y releases): Ajusta parámetros de aplicaciones y banderas de la máquina virtual al levantar el servicio.",
    "topic": "Aplicaciones y releases",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-21",
    "collectionId": "erlang",
    "question": "En Erlang (Aplicaciones y releases), ¿qué función técnica cumple «Release upgrades»?",
    "options": [
      "Actualiza código y migra el estado interno de procesos en caliente sin detener el nodo al operar.",
      "Define la secuencia exacta en que la máquina virtual carga módulos e inicia aplicaciones.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador.",
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Release upgrades (Aplicaciones y releases): Actualiza código y migra el estado interno de procesos en caliente sin detener el nodo.",
    "topic": "Aplicaciones y releases",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-22",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «Release handling instructions» en aplicaciones y releases?",
    "options": [
      "Actualiza código y migra el estado interno de procesos en caliente sin detener el nodo al operar.",
      "Especifica las órdenes de bajo nivel para cargar módulos y suspender procesos al actualizar.",
      "Define la secuencia exacta en que la máquina virtual carga módulos e inicia aplicaciones.",
      "Ajusta parámetros de aplicaciones y banderas de la máquina virtual al levantar el servicio."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Release handling instructions (Aplicaciones y releases): Especifica las órdenes de bajo nivel para cargar módulos y suspender procesos al actualizar.",
    "topic": "Aplicaciones y releases",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-23",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Node discovery»?",
    "options": [
      "Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla al operar.",
      "Ajusta el intervalo de latidos que determina cuándo declarar desconectado a un nodo remoto.",
      "Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas.",
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Node discovery (Sistemas distribuidos): Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas.",
    "topic": "Sistemas distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-24",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Distribution protocol»?",
    "options": [
      "Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas al operar.",
      "Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla al operar.",
      "Ajusta el intervalo de latidos que determina cuándo declarar desconectado a un nodo remoto.",
      "Transporta mensajes, enlaces y monitores de forma transparente entre procesos de nodos remotos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Distribution protocol (Sistemas distribuidos): Transporta mensajes, enlaces y monitores de forma transparente entre procesos de nodos remotos.",
    "topic": "Sistemas distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-25",
    "collectionId": "erlang",
    "question": "Respecto a sistemas distribuidos en Erlang, ¿cuál es el propósito de «Network splits»?",
    "options": [
      "Detecta particiones de red donde subgrupos de nodos pierden conectividad y divergen entre sí.",
      "Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla.",
      "Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas.",
      "Ajusta el intervalo de latidos que determina cuándo declarar desconectado a un nodo remoto."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Network splits (Sistemas distribuidos): Detecta particiones de red donde subgrupos de nodos pierden conectividad y divergen entre sí.",
    "topic": "Sistemas distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-26",
    "collectionId": "erlang",
    "question": "En Erlang (Sistemas distribuidos), ¿qué función técnica cumple «Global registry tradeoffs»?",
    "options": [
      "Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla al operar.",
      "Evalúa el costo de sincronizar nombres en todo el clúster frente a registros locales rápidos.",
      "Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas.",
      "Ajusta el intervalo de latidos que determina cuándo declarar desconectado a un nodo remoto."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Global registry tradeoffs (Sistemas distribuidos): Evalúa el costo de sincronizar nombres en todo el clúster frente a registros locales rápidos.",
    "topic": "Sistemas distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-27",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «Cluster topology» en sistemas distribuidos?",
    "options": [
      "Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla al operar.",
      "Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas.",
      "Diseña mallas completas o grupos federados para evitar saturar enlaces entre decenas de nodos.",
      "Ajusta el intervalo de latidos que determina cuándo declarar desconectado a un nodo remoto."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cluster topology (Sistemas distribuidos): Diseña mallas completas o grupos federados para evitar saturar enlaces entre decenas de nodos.",
    "topic": "Sistemas distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-28",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Hidden nodes»?",
    "options": [
      "Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador al operar.",
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo.",
      "Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Hidden nodes (Sistemas distribuidos): Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla.",
    "topic": "Sistemas distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-29",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Net tick time»?",
    "options": [
      "Ajusta el intervalo de latidos que determina cuándo declarar desconectado a un nodo remoto al operar.",
      "Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla.",
      "Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas.",
      "Detecta particiones de red donde subgrupos de nodos pierden conectividad y divergen entre sí."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Net tick time (Sistemas distribuidos): Ajusta el intervalo de latidos que determina cuándo declarar desconectado a un nodo remoto.",
    "topic": "Sistemas distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-30",
    "collectionId": "erlang",
    "question": "Respecto a sistemas distribuidos en Erlang, ¿cuál es el propósito de «Global groups»?",
    "options": [
      "Conecta nodos de operación o diagnóstico sin propagar su presencia al resto de la malla al operar.",
      "Particiona un clúster grande en subgrupos con espacios de nombres globales aislados entre sí.",
      "Localiza y conecta nodos del clúster automáticamente mediante DNS, multidifusión o sondas.",
      "Ajusta el intervalo de latidos que determina cuándo declarar desconectado a un nodo remoto."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Global groups (Sistemas distribuidos): Particiona un clúster grande en subgrupos con espacios de nombres globales aislados entre sí.",
    "topic": "Sistemas distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-31",
    "collectionId": "erlang",
    "question": "En Erlang (Datos y persistencia), ¿qué función técnica cumple «ETS tables»?",
    "options": [
      "Ejecuta lecturas y escrituras distribuidas con garantías atómicas y bloqueos coordinados al operar.",
      "Persiste tablas de tuplas directamente en archivos de disco con límite de tamaño por archivo.",
      "Almacena grandes volúmenes de tuplas en memoria fuera del heap de los procesos con acceso veloz.",
      "Accede a tablas distribuidas omitiendo transacciones y bloqueos para priorizar baja latencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ETS tables (Datos y persistencia): Almacena grandes volúmenes de tuplas en memoria fuera del heap de los procesos con acceso veloz.",
    "topic": "Datos y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-32",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «DETS storage» en datos y persistencia?",
    "options": [
      "Ejecuta lecturas y escrituras distribuidas con garantías atómicas y bloqueos coordinados al operar.",
      "Accede a tablas distribuidas omitiendo transacciones y bloqueos para priorizar baja latencia.",
      "Reconstruye el estado de un actor reproduciendo su bitácora inmutable de eventos persistidos.",
      "Persiste tablas de tuplas directamente en archivos de disco con límite de tamaño por archivo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "DETS storage (Datos y persistencia): Persiste tablas de tuplas directamente en archivos de disco con límite de tamaño por archivo.",
    "topic": "Datos y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-33",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Mnesia transactions»?",
    "options": [
      "Ejecuta lecturas y escrituras distribuidas con garantías atómicas y bloqueos coordinados.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador.",
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo.",
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Mnesia transactions (Datos y persistencia): Ejecuta lecturas y escrituras distribuidas con garantías atómicas y bloqueos coordinados.",
    "topic": "Datos y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-34",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Dirty operations»?",
    "options": [
      "Ejecuta lecturas y escrituras distribuidas con garantías atómicas y bloqueos coordinados al operar.",
      "Accede a tablas distribuidas omitiendo transacciones y bloqueos para priorizar baja latencia.",
      "Persiste tablas de tuplas directamente en archivos de disco con límite de tamaño por archivo.",
      "Reconstruye el estado de un actor reproduciendo su bitácora inmutable de eventos persistidos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dirty operations (Datos y persistencia): Accede a tablas distribuidas omitiendo transacciones y bloqueos para priorizar baja latencia.",
    "topic": "Datos y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "erlang-q-35",
    "collectionId": "erlang",
    "question": "Respecto a datos y persistencia en Erlang, ¿cuál es el propósito de «Event sourcing con procesos»?",
    "options": [
      "Ejecuta lecturas y escrituras distribuidas con garantías atómicas y bloqueos coordinados al operar.",
      "Persiste tablas de tuplas directamente en archivos de disco con límite de tamaño por archivo.",
      "Reconstruye el estado de un actor reproduciendo su bitácora inmutable de eventos persistidos.",
      "Accede a tablas distribuidas omitiendo transacciones y bloqueos para priorizar baja latencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Event sourcing con procesos (Datos y persistencia): Reconstruye el estado de un actor reproduciendo su bitácora inmutable de eventos persistidos.",
    "topic": "Datos y persistencia",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-36",
    "collectionId": "erlang",
    "question": "En Erlang (Pruebas de sistemas concurrentes), ¿qué función técnica cumple «EUnit»?",
    "options": [
      "Corta enlaces entre nodos de prueba para verificar cómo resuelve conflictos el clúster.",
      "Comprueba en pruebas que ningún escenario deje mensajes huérfanos acumulados en la cola.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador.",
      "Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales."
    ],
    "correctAnswerIndex": 3,
    "explanation": "EUnit (Pruebas de sistemas concurrentes): Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales.",
    "topic": "Pruebas de sistemas concurrentes",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-37",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «Common Test suites» en pruebas de sistemas concurrentes?",
    "options": [
      "Orquesta pruebas de integración y sistemas distribuidos con ganchos de configuración y reportes al operar.",
      "Altera el orden de planificación entre procesos para exponer condiciones de carrera ocultas.",
      "Comprueba en pruebas que ningún escenario deje mensajes huérfanos acumulados en la cola al operar.",
      "Genera entradas aleatorias y secuencias de comandos para verificar propiedades e invariantes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Common Test suites (Pruebas de sistemas concurrentes): Orquesta pruebas de integración y sistemas distribuidos con ganchos de configuración y reportes.",
    "topic": "Pruebas de sistemas concurrentes",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-38",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «PropEr»?",
    "options": [
      "Corta enlaces entre nodos de prueba para verificar cómo resuelve conflictos el clúster al operar.",
      "Genera entradas aleatorias y secuencias de comandos para verificar propiedades e invariantes.",
      "Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales al operar.",
      "Comprueba en pruebas que ningún escenario deje mensajes huérfanos acumulados en la cola al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "PropEr (Pruebas de sistemas concurrentes): Genera entradas aleatorias y secuencias de comandos para verificar propiedades e invariantes.",
    "topic": "Pruebas de sistemas concurrentes",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-39",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Fault injection»?",
    "options": [
      "Corta enlaces entre nodos de prueba para verificar cómo resuelve conflictos el clúster al operar.",
      "Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales al operar.",
      "Simula caídas de procesos, demoras y errores de red para validar la recuperación supervisada.",
      "Comprueba en pruebas que ningún escenario deje mensajes huérfanos acumulados en la cola al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fault injection (Pruebas de sistemas concurrentes): Simula caídas de procesos, demoras y errores de red para validar la recuperación supervisada.",
    "topic": "Pruebas de sistemas concurrentes",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-40",
    "collectionId": "erlang",
    "question": "Respecto a pruebas de sistemas concurrentes en Erlang, ¿cuál es el propósito de «Deterministic protocol models»?",
    "options": [
      "Altera el orden de planificación entre procesos para exponer condiciones de carrera ocultas al operar.",
      "Genera entradas aleatorias y secuencias de comandos para verificar propiedades e invariantes.",
      "Simula caídas de procesos, demoras y errores de red para validar la recuperación supervisada.",
      "Contrasta el comportamiento real de actores concurrentes contra una máquina de estados abstracta."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Deterministic protocol models (Pruebas de sistemas concurrentes): Contrasta el comportamiento real de actores concurrentes contra una máquina de estados abstracta.",
    "topic": "Pruebas de sistemas concurrentes",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-41",
    "collectionId": "erlang",
    "question": "En Erlang (Pruebas de sistemas concurrentes), ¿qué función técnica cumple «Scheduler perturbation»?",
    "options": [
      "Altera el orden de planificación entre procesos para exponer condiciones de carrera ocultas.",
      "Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales.",
      "Corta enlaces entre nodos de prueba para verificar cómo resuelve conflictos el clúster.",
      "Comprueba en pruebas que ningún escenario deje mensajes huérfanos acumulados en la cola."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Scheduler perturbation (Pruebas de sistemas concurrentes): Altera el orden de planificación entre procesos para exponer condiciones de carrera ocultas.",
    "topic": "Pruebas de sistemas concurrentes",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-42",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «Network partition simulation» en pruebas de sistemas concurrentes?",
    "options": [
      "Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales al operar.",
      "Corta enlaces entre nodos de prueba para verificar cómo resuelve conflictos el clúster.",
      "Comprueba en pruebas que ningún escenario deje mensajes huérfanos acumulados en la cola.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Network partition simulation (Pruebas de sistemas concurrentes): Corta enlaces entre nodos de prueba para verificar cómo resuelve conflictos el clúster.",
    "topic": "Pruebas de sistemas concurrentes",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-43",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Mailbox invariant properties»?",
    "options": [
      "Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales al operar.",
      "Corta enlaces entre nodos de prueba para verificar cómo resuelve conflictos el clúster.",
      "Comprueba en pruebas que ningún escenario deje mensajes huérfanos acumulados en la cola.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mailbox invariant properties (Pruebas de sistemas concurrentes): Comprueba en pruebas que ningún escenario deje mensajes huérfanos acumulados en la cola.",
    "topic": "Pruebas de sistemas concurrentes",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-44",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Logger metadata»?",
    "options": [
      "Mide el tiempo real de trabajo activo frente al reposo de cada hilo planificador del motor al operar.",
      "Emite mediciones estructuradas de latencia y contadores mediante ganchos desacoplados al operar.",
      "Inspecciona llamadas y pasos de mensajes en vivo con filtros seguros para no saturar el nodo.",
      "Enriquece cada evento de bitácora con identificadores de proceso, petición y dominio funcional."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Logger metadata (Observabilidad): Enriquece cada evento de bitácora con identificadores de proceso, petición y dominio funcional.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-45",
    "collectionId": "erlang",
    "question": "Respecto a observabilidad en Erlang, ¿cuál es el propósito de «Telemetry events»?",
    "options": [
      "Emite mediciones estructuradas de latencia y contadores mediante ganchos desacoplados.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador.",
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo.",
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Telemetry events (Observabilidad): Emite mediciones estructuradas de latencia y contadores mediante ganchos desacoplados.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-46",
    "collectionId": "erlang",
    "question": "En Erlang (Observabilidad), ¿qué función técnica cumple «Process tracing»?",
    "options": [
      "Emite mediciones estructuradas de latencia y contadores mediante ganchos desacoplados al operar.",
      "Inspecciona llamadas y pasos de mensajes en vivo con filtros seguros para no saturar el nodo.",
      "Mide el tiempo real de trabajo activo frente al reposo de cada hilo planificador del motor.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Process tracing (Observabilidad): Inspecciona llamadas y pasos de mensajes en vivo con filtros seguros para no saturar el nodo.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-47",
    "collectionId": "erlang",
    "question": "Dentro de Erlang, ¿cómo opera el mecanismo de «Scheduler utilization» en observabilidad?",
    "options": [
      "Emite mediciones estructuradas de latencia y contadores mediante ganchos desacoplados al operar.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador al operar.",
      "Mide el tiempo real de trabajo activo frente al reposo de cada hilo planificador del motor.",
      "Inspecciona llamadas y pasos de mensajes en vivo con filtros seguros para no saturar el nodo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Scheduler utilization (Observabilidad): Mide el tiempo real de trabajo activo frente al reposo de cada hilo planificador del motor.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-48",
    "collectionId": "erlang",
    "question": "Al trabajar con Erlang, ¿qué responsabilidad define a «Flame graphs de BEAM»?",
    "options": [
      "Emite mediciones estructuradas de latencia y contadores mediante ganchos desacoplados.",
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo.",
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje.",
      "Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Flame graphs de BEAM (Observabilidad): Visualiza qué funciones y procesos consumen más reducciones o ciclos de procesador.",
    "topic": "Observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-49",
    "collectionId": "erlang",
    "question": "En la arquitectura de Erlang, ¿qué caracteriza técnicamente a «Distribution cookies»?",
    "options": [
      "Verifica un secreto compartido básico antes de permitir que dos nodos establezcan conexión.",
      "Cifra y autentica con certificados el canal de comunicación interna entre nodos del clúster.",
      "Aborta la espera de mensajes tras un plazo definido para ejecutar lógica de respaldo.",
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Distribution cookies (Seguridad y operación): Verifica un secreto compartido básico antes de permitir que dos nodos establezcan conexión.",
    "topic": "Seguridad y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "erlang-q-50",
    "collectionId": "erlang",
    "question": "Respecto a seguridad y operación en Erlang, ¿cuál es el propósito de «TLS distribution»?",
    "options": [
      "Verifica un secreto compartido básico antes de permitir que dos nodos establezcan conexión al operar.",
      "Cifra y autentica con certificados el canal de comunicación interna entre nodos del clúster.",
      "Compacta la pila y el heap de un proceso inactivo hasta que llegue su próximo mensaje al operar.",
      "Ejecuta pruebas unitarias ligeras directamente sobre funciones y módulos individuales al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "TLS distribution (Seguridad y operación): Cifra y autentica con certificados el canal de comunicación interna entre nodos del clúster.",
    "topic": "Seguridad y operación",
    "difficulty": "avanzado"
  }
];
