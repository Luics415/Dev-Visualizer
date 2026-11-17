import type { QuizQuestion } from "@/data/quizTypes";

export const kotlinQuestions: QuizQuestion[] = [
  {
    "id": "kotlin-q-01",
    "collectionId": "kotlin",
    "question": "En Kotlin (Compilador y bytecode), ¿qué función técnica cumple «Frontend FIR»?",
    "options": [
      "Analiza y resuelve tipos sobre un árbol unificado de alto rendimiento en el compilador K2 al operar.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos.",
      "Altera nombres de métodos en el archivo compilado para ocultar firmas internas o de valor.",
      "Transforma el árbol semántico en una representación común compartida por todos los destinos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Frontend FIR (Compilador y bytecode): Analiza y resuelve tipos sobre un árbol unificado de alto rendimiento en el compilador K2.",
    "topic": "Compilador y bytecode",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-02",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «Intermediate representation» en compilador y bytecode?",
    "options": [
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos al operar.",
      "Transforma el árbol semántico en una representación común compartida por todos los destinos.",
      "Analiza y resuelve tipos sobre un árbol unificado de alto rendimiento en el compilador K2.",
      "Altera nombres de métodos en el archivo compilado para ocultar firmas internas o de valor."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Intermediate representation (Compilador y bytecode): Transforma el árbol semántico en una representación común compartida por todos los destinos.",
    "topic": "Compilador y bytecode",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-03",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Name mangling»?",
    "options": [
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos al operar.",
      "Analiza y resuelve tipos sobre un árbol unificado de alto rendimiento en el compilador K2.",
      "Altera nombres de métodos en el archivo compilado para ocultar firmas internas o de valor.",
      "Transforma el árbol semántico en una representación común compartida por todos los destinos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Name mangling (Compilador y bytecode): Altera nombres de métodos en el archivo compilado para ocultar firmas internas o de valor.",
    "topic": "Compilador y bytecode",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-04",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Default arguments en JVM»?",
    "options": [
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente.",
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Default arguments en JVM (Compilador y bytecode): Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos.",
    "topic": "Compilador y bytecode",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-05",
    "collectionId": "kotlin",
    "question": "Respecto a compilador y bytecode en Kotlin, ¿cuál es el propósito de «Kotlin metadata»?",
    "options": [
      "Incrusta anotaciones binarias en las clases para preservar nulabilidad y firmas del lenguaje al operar.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos al operar.",
      "Analiza y resuelve tipos sobre un árbol unificado de alto rendimiento en el compilador K2.",
      "Altera nombres de métodos en el archivo compilado para ocultar firmas internas o de valor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Kotlin metadata (Compilador y bytecode): Incrusta anotaciones binarias en las clases para preservar nulabilidad y firmas del lenguaje.",
    "topic": "Compilador y bytecode",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-06",
    "collectionId": "kotlin",
    "question": "En Kotlin (Compilador y bytecode), ¿qué función técnica cumple «Synthetic accessors»?",
    "options": [
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos al operar.",
      "Crea métodos puente de paquete cuando una lambda o clase interna accede a miembros privados.",
      "Analiza y resuelve tipos sobre un árbol unificado de alto rendimiento en el compilador K2.",
      "Altera nombres de métodos en el archivo compilado para ocultar firmas internas o de valor."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Synthetic accessors (Compilador y bytecode): Crea métodos puente de paquete cuando una lambda o clase interna accede a miembros privados.",
    "topic": "Compilador y bytecode",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-07",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «Continuation passing style» en coroutines en profundidad?",
    "options": [
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente al evaluar.",
      "Propaga la cancelación hacia los hijos y los fallos hacia el padre en un árbol concurrente.",
      "Reescribe funciones suspendibles en máquinas de estados que reciben un objeto de continuación.",
      "Delimita el ciclo de vida de tareas concurrentes para cancelarlas juntas al cerrar el ámbito."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Continuation passing style (Coroutines en profundidad): Reescribe funciones suspendibles en máquinas de estados que reciben un objeto de continuación.",
    "topic": "Coroutines en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-08",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Coroutine scopes»?",
    "options": [
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente al operar.",
      "Propaga la cancelación hacia los hijos y los fallos hacia el padre en un árbol concurrente.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Delimita el ciclo de vida de tareas concurrentes para cancelarlas juntas al cerrar el ámbito."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Coroutine scopes (Coroutines en profundidad): Delimita el ciclo de vida de tareas concurrentes para cancelarlas juntas al cerrar el ámbito.",
    "topic": "Coroutines en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-09",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Job hierarchy»?",
    "options": [
      "Propaga la cancelación hacia los hijos y los fallos hacia el padre en un árbol concurrente al operar.",
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Delimita el ciclo de vida de tareas concurrentes para cancelarlas juntas al cerrar el ámbito."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Job hierarchy (Coroutines en profundidad): Propaga la cancelación hacia los hijos y los fallos hacia el padre en un árbol concurrente.",
    "topic": "Coroutines en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-10",
    "collectionId": "kotlin",
    "question": "Respecto a coroutines en profundidad en Kotlin, ¿cuál es el propósito de «Exception supervision»?",
    "options": [
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos.",
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Exception supervision (Coroutines en profundidad): Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito.",
    "topic": "Coroutines en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-11",
    "collectionId": "kotlin",
    "question": "En Kotlin (Coroutines en profundidad), ¿qué función técnica cumple «Cancellation cooperativa»?",
    "options": [
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos.",
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente.",
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cancellation cooperativa (Coroutines en profundidad): Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente.",
    "topic": "Coroutines en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-12",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «NonCancellable cleanup» en coroutines en profundidad?",
    "options": [
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente al operar.",
      "Propaga la cancelación hacia los hijos y los fallos hacia el padre en un árbol concurrente.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Permite ejecutar operaciones suspendibles de cierre dentro de un bloque que ya fue cancelado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "NonCancellable cleanup (Coroutines en profundidad): Permite ejecutar operaciones suspendibles de cierre dentro de un bloque que ya fue cancelado.",
    "topic": "Coroutines en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-13",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Coroutine exception aggregation»?",
    "options": [
      "Agrupa fallos simultáneos de múltiples ramas hijas como errores capturables suprimidas del error raíz al operar.",
      "Reescribe funciones suspendibles en máquinas de estados que reciben un objeto de continuación al operar.",
      "Delimita el ciclo de vida de tareas concurrentes para cancelarlas juntas al cerrar el ámbito al operar.",
      "Permite ejecutar operaciones suspendibles de cierre dentro de un bloque que ya fue cancelado al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Coroutine exception aggregation (Coroutines en profundidad): Agrupa fallos simultáneos de múltiples ramas hijas como excepciones suprimidas del error raíz.",
    "topic": "Coroutines en profundidad",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-14",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Cold y hot flows»?",
    "options": [
      "Fusiona operadores sucesivos de canal y búfer en una sola etapa sin copias intermedias al operar.",
      "Distingue secuencias que se activan por suscriptor frente a emisiones continuas compartidas.",
      "Fusiona emisiones de múltiples secuencias asíncronas a medida que llegan nuevos elementos.",
      "Mantiene siempre un valor actual observable y emite actualizaciones deduplicadas a lectores."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cold y hot flows (Flujos reactivos): Distingue secuencias que se activan por suscriptor frente a emisiones continuas compartidas.",
    "topic": "Flujos reactivos",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-15",
    "collectionId": "kotlin",
    "question": "Respecto a flujos reactivos en Kotlin, ¿cuál es el propósito de «StateFlow»?",
    "options": [
      "Fusiona operadores sucesivos de canal y búfer en una sola etapa sin copias intermedias al operar.",
      "Fusiona emisiones de múltiples secuencias asíncronas a medida que llegan nuevos elementos.",
      "Mantiene siempre un valor actual observable y emite actualizaciones deduplicadas a lectores.",
      "Distingue secuencias que se activan por suscriptor frente a emisiones continuas compartidas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "StateFlow (Flujos reactivos): Mantiene siempre un valor actual observable y emite actualizaciones deduplicadas a lectores.",
    "topic": "Flujos reactivos",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-16",
    "collectionId": "kotlin",
    "question": "En Kotlin (Flujos reactivos), ¿qué función técnica cumple «SharedFlow»?",
    "options": [
      "Fusiona operadores sucesivos de canal y búfer en una sola etapa sin copias intermedias al operar.",
      "Fusiona emisiones de múltiples secuencias asíncronas a medida que llegan nuevos elementos.",
      "Distingue secuencias que se activan por suscriptor frente a emisiones continuas compartidas.",
      "Difunde eventos a múltiples suscriptores configurando caché de repetición y política de búfer."
    ],
    "correctAnswerIndex": 3,
    "explanation": "SharedFlow (Flujos reactivos): Difunde eventos a múltiples suscriptores configurando caché de repetición y política de búfer.",
    "topic": "Flujos reactivos",
    "difficulty": "básico"
  },
  {
    "id": "kotlin-q-17",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «Backpressure semántico» en flujos reactivos?",
    "options": [
      "Regula productores veloces frente a consumidores lentos mediante suspensión, fusión o descarte al operar.",
      "Fusiona emisiones de múltiples secuencias asíncronas a medida que llegan nuevos elementos.",
      "Fusiona operadores sucesivos de canal y búfer en una sola etapa sin copias intermedias al operar.",
      "Distingue secuencias que se activan por suscriptor frente a emisiones continuas compartidas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Backpressure semántico (Flujos reactivos): Regula productores veloces frente a consumidores lentos mediante suspensión, fusión o descarte.",
    "topic": "Flujos reactivos",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-18",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Operadores de combinación»?",
    "options": [
      "Fusiona operadores sucesivos de canal y búfer en una sola etapa sin copias intermedias al operar.",
      "Fusiona emisiones de múltiples secuencias asíncronas a medida que llegan nuevos elementos.",
      "Distingue secuencias que se activan por suscriptor frente a emisiones continuas compartidas.",
      "Mantiene siempre un valor actual observable y emite actualizaciones deduplicadas a lectores."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Operadores de combinación (Flujos reactivos): Fusiona emisiones de múltiples secuencias asíncronas a medida que llegan nuevos elementos.",
    "topic": "Flujos reactivos",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-19",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «ChannelFlow fusion»?",
    "options": [
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos.",
      "Fusiona operadores sucesivos de canal y búfer en una sola etapa sin copias intermedias.",
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ChannelFlow fusion (Flujos reactivos): Fusiona operadores sucesivos de canal y búfer en una sola etapa sin copias intermedias.",
    "topic": "Flujos reactivos",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-20",
    "collectionId": "kotlin",
    "question": "Respecto a interoperabilidad jvm en Kotlin, ¿cuál es el propósito de «SAM conversions»?",
    "options": [
      "Emite implementaciones por defecto nativas en interfaces para evitar clases auxiliares al operar.",
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros al operar.",
      "Expone rutinas asíncronas como métodos que reciben un parámetro adicional de continuación.",
      "Permite pasar una expresión lambda donde se espera una interfaz con un único método abstracto."
    ],
    "correctAnswerIndex": 3,
    "explanation": "SAM conversions (Interoperabilidad JVM): Permite pasar una expresión lambda donde se espera una interfaz con un único método abstracto.",
    "topic": "Interoperabilidad JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-21",
    "collectionId": "kotlin",
    "question": "En Kotlin (Interoperabilidad JVM), ¿qué función técnica cumple «Checked exceptions»?",
    "options": [
      "Expone errores capturables verificadas en la firma compilada para que consumidores externos las capturen.",
      "Permite pasar una expresión lambda donde se espera una interfaz con un único método abstracto al operar.",
      "Personaliza el nombre emitido y genera métodos estáticos reales para llamadas interoperables al operar.",
      "Controla la generación de comodines de varianza en firmas genéricas exportadas al bytecode en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Checked exceptions (Interoperabilidad JVM): Expone excepciones verificadas en la firma compilada para que consumidores externos las capturen.",
    "topic": "Interoperabilidad JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-22",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «Wildcards JVM» en interoperabilidad jvm?",
    "options": [
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros al operar.",
      "Controla la generación de comodines de varianza en firmas genéricas exportadas al bytecode.",
      "Emite implementaciones por defecto nativas en interfaces para evitar clases auxiliares.",
      "Expone rutinas asíncronas como métodos que reciben un parámetro adicional de continuación."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Wildcards JVM (Interoperabilidad JVM): Controla la generación de comodines de varianza en firmas genéricas exportadas al bytecode.",
    "topic": "Interoperabilidad JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-23",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Annotations JvmName y JvmStatic»?",
    "options": [
      "Emite implementaciones por defecto nativas en interfaces para evitar clases auxiliares al operar.",
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros al operar.",
      "Personaliza el nombre emitido y genera métodos estáticos reales para llamadas interoperables.",
      "Expone rutinas asíncronas como métodos que reciben un parámetro adicional de continuación."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Annotations JvmName y JvmStatic (Interoperabilidad JVM): Personaliza el nombre emitido y genera métodos estáticos reales para llamadas interoperables.",
    "topic": "Interoperabilidad JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-24",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Nullability annotations»?",
    "options": [
      "Emite implementaciones por defecto nativas en interfaces para evitar clases auxiliares.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos.",
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Nullability annotations (Interoperabilidad JVM): Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros.",
    "topic": "Interoperabilidad JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-25",
    "collectionId": "kotlin",
    "question": "Respecto a interoperabilidad jvm en Kotlin, ¿cuál es el propósito de «Default interface methods»?",
    "options": [
      "Emite implementaciones por defecto nativas en interfaces para evitar clases auxiliares.",
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Default interface methods (Interoperabilidad JVM): Emite implementaciones por defecto nativas en interfaces para evitar clases auxiliares.",
    "topic": "Interoperabilidad JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-26",
    "collectionId": "kotlin",
    "question": "En Kotlin (Interoperabilidad JVM), ¿qué función técnica cumple «Suspend functions vistas desde Java»?",
    "options": [
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros al operar.",
      "Expone rutinas asíncronas como métodos que reciben un parámetro adicional de continuación.",
      "Emite implementaciones por defecto nativas en interfaces para evitar clases auxiliares.",
      "Controla la generación de comodines de varianza en firmas genéricas exportadas al bytecode."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Suspend functions vistas desde Java (Interoperabilidad JVM): Expone rutinas asíncronas como métodos que reciben un parámetro adicional de continuación.",
    "topic": "Interoperabilidad JVM",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-27",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «Ktor pipelines» en servidor y persistencia?",
    "options": [
      "Carga parámetros tipados y validados al arranque según el perfil de despliegue activo al operar.",
      "Mapea consultas relacionales hacia tipos inmutables mediante generadores o DSL seguros.",
      "Procesa peticiones y respuestas atravesando fases ordenadas de interceptores asíncronos.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Ktor pipelines (Servidor y persistencia): Procesa peticiones y respuestas atravesando fases ordenadas de interceptores asíncronos.",
    "topic": "Servidor y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-28",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Serialización Kotlin»?",
    "options": [
      "Mapea consultas relacionales hacia tipos inmutables mediante generadores o DSL seguros al operar.",
      "Procesa peticiones y respuestas atravesando fases ordenadas de interceptores asíncronos al operar.",
      "Carga parámetros tipados y validados al arranque según el perfil de despliegue activo al operar.",
      "Genera codificadores en tiempo de compilación sin usar reflexión para formatos estructurados."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Serialización Kotlin (Servidor y persistencia): Genera codificadores en tiempo de compilación sin usar reflexión para formatos estructurados.",
    "topic": "Servidor y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-29",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Clientes HTTP»?",
    "options": [
      "Ejecuta llamadas de red no bloqueantes con motores intercambiables y reintentos configurables al operar.",
      "Procesa peticiones y respuestas atravesando fases ordenadas de interceptores asíncronos.",
      "Mapea consultas relacionales hacia tipos inmutables mediante generadores o DSL seguros al operar.",
      "Carga parámetros tipados y validados al arranque según el perfil de despliegue activo al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Clientes HTTP (Servidor y persistencia): Ejecuta llamadas de red no bloqueantes con motores intercambiables y reintentos configurables.",
    "topic": "Servidor y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-30",
    "collectionId": "kotlin",
    "question": "Respecto a servidor y persistencia en Kotlin, ¿cuál es el propósito de «Acceso SQL»?",
    "options": [
      "Carga parámetros tipados y validados al arranque según el perfil de despliegue activo al operar.",
      "Mapea consultas relacionales hacia tipos inmutables mediante generadores o DSL seguros.",
      "Procesa peticiones y respuestas atravesando fases ordenadas de interceptores asíncronos.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Acceso SQL (Servidor y persistencia): Mapea consultas relacionales hacia tipos inmutables mediante generadores o DSL seguros.",
    "topic": "Servidor y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-31",
    "collectionId": "kotlin",
    "question": "En Kotlin (Servidor y persistencia), ¿qué función técnica cumple «Configuración por entorno»?",
    "options": [
      "Mapea consultas relacionales hacia tipos inmutables mediante generadores o DSL seguros.",
      "Procesa peticiones y respuestas atravesando fases ordenadas de interceptores asíncronos.",
      "Carga parámetros tipados y validados al arranque según el perfil de despliegue activo.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Configuración por entorno (Servidor y persistencia): Carga parámetros tipados y validados al arranque según el perfil de despliegue activo.",
    "topic": "Servidor y persistencia",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-32",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «Source sets» en multiplataforma?",
    "options": [
      "Empaqueta artefactos metadatos y binarios específicos para distribuirlos en repositorios.",
      "Traduce módulos hacia código ejecutable en navegadores o servidores mediante el backend IR.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Organiza código común y específico de cada plataforma dentro de una jerarquía compartida."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Source sets (Multiplataforma): Organiza código común y específico de cada plataforma dentro de una jerarquía compartida.",
    "topic": "Multiplataforma",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-33",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Expect y actual»?",
    "options": [
      "Declara un contrato abstracto en el módulo común y provee su implementación nativa por destino.",
      "Organiza código común y específico de cada plataforma dentro de una jerarquía compartida.",
      "Empaqueta artefactos metadatos y binarios específicos para distribuirlos en repositorios.",
      "Traduce módulos hacia código ejecutable en navegadores o servidores mediante el backend IR."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Expect y actual (Multiplataforma): Declara un contrato abstracto en el módulo común y provee su implementación nativa por destino.",
    "topic": "Multiplataforma",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-34",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Kotlin/Native memory model»?",
    "options": [
      "Organiza código común y específico de cada plataforma dentro de una jerarquía compartida al operar.",
      "Permite compartir grafos de objetos entre hilos nativos con recolección concurrente moderna.",
      "Empaqueta artefactos metadatos y binarios específicos para distribuirlos en repositorios.",
      "Traduce módulos hacia código ejecutable en navegadores o servidores mediante el backend IR."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Kotlin/Native memory model (Multiplataforma): Permite compartir grafos de objetos entre hilos nativos con recolección concurrente moderna.",
    "topic": "Multiplataforma",
    "difficulty": "intermedio"
  },
  {
    "id": "kotlin-q-35",
    "collectionId": "kotlin",
    "question": "Respecto a multiplataforma en Kotlin, ¿cuál es el propósito de «Kotlin/JS»?",
    "options": [
      "Organiza código común y específico de cada plataforma dentro de una jerarquía compartida al operar.",
      "Empaqueta artefactos metadatos y binarios específicos para distribuirlos en repositorios.",
      "Traduce módulos hacia código ejecutable en navegadores o servidores mediante el backend IR.",
      "Permite compartir grafos de objetos entre hilos nativos con recolección concurrente moderna."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Kotlin/JS (Multiplataforma): Traduce módulos hacia código ejecutable en navegadores o servidores mediante el backend IR.",
    "topic": "Multiplataforma",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-36",
    "collectionId": "kotlin",
    "question": "En Kotlin (Multiplataforma), ¿qué función técnica cumple «Bibliotecas multiplataforma»?",
    "options": [
      "Organiza código común y específico de cada plataforma dentro de una jerarquía compartida.",
      "Traduce módulos hacia código ejecutable en navegadores o servidores mediante el backend IR.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Empaqueta artefactos metadatos y binarios específicos para distribuirlos en repositorios."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Bibliotecas multiplataforma (Multiplataforma): Empaqueta artefactos metadatos y binarios específicos para distribuirlos en repositorios.",
    "topic": "Multiplataforma",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-37",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «kotlin.test» en pruebas?",
    "options": [
      "Ofrece aserciones y anotaciones de prueba portables entre todos los destinos de compilación.",
      "Comprueba límites temporales exactos sobre tareas suspendibles sin esperar tiempo real.",
      "Avanza un reloj virtual de manera determinista para ejecutar demoras asíncronas al instante.",
      "Valida que proveedores y consumidores respeten el mismo esquema de mensajes e interacciones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "kotlin.test (Pruebas): Ofrece aserciones y anotaciones de prueba portables entre todos los destinos de compilación.",
    "topic": "Pruebas",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-38",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Coroutine test scheduler»?",
    "options": [
      "Comprueba límites temporales exactos sobre tareas suspendibles sin esperar tiempo real al operar.",
      "Avanza un reloj virtual de manera determinista para ejecutar demoras asíncronas al instante.",
      "Ofrece aserciones y anotaciones de prueba portables entre todos los destinos de compilación.",
      "Valida que proveedores y consumidores respeten el mismo esquema de mensajes e interacciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Coroutine test scheduler (Pruebas): Avanza un reloj virtual de manera determinista para ejecutar demoras asíncronas al instante.",
    "topic": "Pruebas",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-39",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Property-based testing»?",
    "options": [
      "Ofrece aserciones y anotaciones de prueba portables entre todos los destinos de compilación al operar.",
      "Avanza un reloj virtual de manera determinista para ejecutar demoras asíncronas al instante al operar.",
      "Verifica invariantes del dominio generando cientos de entradas aleatorias con reducción de fallos.",
      "Valida que proveedores y consumidores respeten el mismo esquema de mensajes e interacciones al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Property-based testing (Pruebas): Verifica invariantes del dominio generando cientos de entradas aleatorias con reducción de fallos.",
    "topic": "Pruebas",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-40",
    "collectionId": "kotlin",
    "question": "Respecto a pruebas en Kotlin, ¿cuál es el propósito de «Mocking de tipos finales»?",
    "options": [
      "Ofrece aserciones y anotaciones de prueba portables entre todos los destinos de compilación al operar.",
      "Avanza un reloj virtual de manera determinista para ejecutar demoras asíncronas al instante al operar.",
      "Valida que proveedores y consumidores respeten el mismo esquema de mensajes e interacciones al operar.",
      "Sustituye clases cerradas por dobles de prueba instrumentando el bytecode en tiempo de ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Mocking de tipos finales (Pruebas): Sustituye clases cerradas por dobles de prueba instrumentando el bytecode en tiempo de ejecución.",
    "topic": "Pruebas",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-41",
    "collectionId": "kotlin",
    "question": "En Kotlin (Pruebas), ¿qué función técnica cumple «Contract tests»?",
    "options": [
      "Valida que proveedores y consumidores respeten el mismo esquema de mensajes e interacciones.",
      "Comprueba límites temporales exactos sobre tareas suspendibles sin esperar tiempo real.",
      "Ofrece aserciones y anotaciones de prueba portables entre todos los destinos de compilación.",
      "Avanza un reloj virtual de manera determinista para ejecutar demoras asíncronas al instante."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Contract tests (Pruebas): Valida que proveedores y consumidores respeten el mismo esquema de mensajes e interacciones.",
    "topic": "Pruebas",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-42",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «Virtual-time timeout assertions» en pruebas?",
    "options": [
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Comprueba límites temporales exactos sobre tareas suspendibles sin esperar tiempo real.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos.",
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Virtual-time timeout assertions (Pruebas): Comprueba límites temporales exactos sobre tareas suspendibles sin esperar tiempo real.",
    "topic": "Pruebas",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-43",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «ABI compatibility tests»?",
    "options": [
      "Comprueba límites temporales exactos sobre tareas suspendibles sin esperar tiempo real al operar.",
      "Ofrece aserciones y anotaciones de prueba portables entre todos los destinos de compilación.",
      "Detecta cambios accidentales en firmas públicas comparando volcados binarios contra una base.",
      "Avanza un reloj virtual de manera determinista para ejecutar demoras asíncronas al instante."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ABI compatibility tests (Pruebas): Detecta cambios accidentales en firmas públicas comparando volcados binarios contra una base.",
    "topic": "Pruebas",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-44",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Multiplatform test source sets»?",
    "options": [
      "Comprueba límites temporales exactos sobre tareas suspendibles sin esperar tiempo real al operar.",
      "Ofrece aserciones y anotaciones de prueba portables entre todos los destinos de compilación.",
      "Avanza un reloj virtual de manera determinista para ejecutar demoras asíncronas al instante.",
      "Ejecuta la misma batería de pruebas desde el módulo común sobre simuladores y motores reales."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Multiplatform test source sets (Pruebas): Ejecuta la misma batería de pruebas desde el módulo común sobre simuladores y motores reales.",
    "topic": "Pruebas",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-45",
    "collectionId": "kotlin",
    "question": "Respecto a build y calidad en Kotlin, ¿cuál es el propósito de «Kotlin Gradle DSL»?",
    "options": [
      "Define la configuración de construcción con autocompletado y verificación estática de tipos.",
      "Recompila únicamente los archivos afectados analizando cambios en las firmas exportadas.",
      "Audita complejidad ciclomática, posibles defectos y convenciones de estilo sobre el árbol.",
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Kotlin Gradle DSL (Build y calidad): Define la configuración de construcción con autocompletado y verificación estática de tipos.",
    "topic": "Build y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-46",
    "collectionId": "kotlin",
    "question": "En Kotlin (Build y calidad), ¿qué función técnica cumple «Incremental compilation»?",
    "options": [
      "Audita complejidad ciclomática, posibles defectos y convenciones de estilo sobre el árbol.",
      "Recompila únicamente los archivos afectados analizando cambios en las firmas exportadas.",
      "Impide que el fallo de una subtarea derribe a sus hermanas dentro del mismo ámbito al operar.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Incremental compilation (Build y calidad): Recompila únicamente los archivos afectados analizando cambios en las firmas exportadas.",
    "topic": "Build y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-47",
    "collectionId": "kotlin",
    "question": "Dentro de Kotlin, ¿cómo opera el mecanismo de «KSP» en build y calidad?",
    "options": [
      "Recompila únicamente los archivos afectados analizando cambios en las firmas exportadas al operar.",
      "Audita complejidad ciclomática, posibles defectos y convenciones de estilo sobre el árbol al operar.",
      "Procesa anotaciones y genera código fuente directamente sobre el árbol ligero sin emitir stubs.",
      "Define la configuración de construcción con autocompletado y verificación estática de tipos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "KSP (Build y calidad): Procesa anotaciones y genera código fuente directamente sobre el árbol ligero sin emitir stubs.",
    "topic": "Build y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-48",
    "collectionId": "kotlin",
    "question": "Al trabajar con Kotlin, ¿qué responsabilidad define a «Detekt»?",
    "options": [
      "Recompila únicamente los archivos afectados analizando cambios en las firmas exportadas al operar.",
      "Define la configuración de construcción con autocompletado y verificación estática de tipos.",
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos al operar.",
      "Audita complejidad ciclomática, posibles defectos y convenciones de estilo sobre el árbol."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Detekt (Build y calidad): Audita complejidad ciclomática, posibles defectos y convenciones de estilo sobre el árbol.",
    "topic": "Build y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-49",
    "collectionId": "kotlin",
    "question": "En la arquitectura de Kotlin, ¿qué caracteriza técnicamente a «Binary compatibility validation»?",
    "options": [
      "Genera y verifica un archivo de firmas públicas para impedir rupturas binarias entre versiones al operar.",
      "Recompila únicamente los archivos afectados analizando cambios en las firmas exportadas al operar.",
      "Audita complejidad ciclomática, posibles defectos y convenciones de estilo sobre el árbol.",
      "Define la configuración de construcción con autocompletado y verificación estática de tipos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Binary compatibility validation (Build y calidad): Genera y verifica un archivo de firmas públicas para impedir rupturas binarias entre versiones.",
    "topic": "Build y calidad",
    "difficulty": "avanzado"
  },
  {
    "id": "kotlin-q-50",
    "collectionId": "kotlin",
    "question": "Respecto a producción y rendimiento en Kotlin, ¿cuál es el propósito de «Allocation profiling»?",
    "options": [
      "Genera métodos puente sintéticos con máscara de bits para suplir parámetros omitidos al operar.",
      "Rastrea la creación de objetos efímeros y cajas primitivas para reducir presión en memoria.",
      "Comprueba puntos de suspensión o banderas de estado para abortar cómputos limpiamente al operar.",
      "Interpreta contratos de nulabilidad externos para convertir tipos ambiguos en seguros al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Allocation profiling (Producción y rendimiento): Rastrea la creación de objetos efímeros y cajas primitivas para reducir presión en memoria.",
    "topic": "Producción y rendimiento",
    "difficulty": "avanzado"
  }
];
