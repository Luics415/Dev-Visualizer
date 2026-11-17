import type { QuizQuestion } from "@/data/quizTypes";

export const dartQuestions: QuizQuestion[] = [
  {
    "id": "dart-q-01",
    "collectionId": "dart",
    "question": "En Dart (Jerarquía de Tipos & Modificadores de Clase), ¿qué función técnica cumple «Modificador Base y control de subtipado»?",
    "options": [
      "Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria.",
      "Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución.",
      "Crea y completa promesas manualmente desde fuentes externas, suscripciones de bajo nivel o llamadas a hardware.",
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Modificador Base y control de subtipado (Jerarquía de Tipos & Modificadores de Clase): Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria.",
    "topic": "Jerarquía de Tipos & Modificadores de Clase",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-02",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Modificador Interface para contratos puros» en jerarquía de tipos & modificadores de clase?",
    "options": [
      "Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria al operar.",
      "Exige que los consumidores externos sólo puedan implementar la interfaz de la clase sin heredar su implementación concreta.",
      "Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución al operar.",
      "Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Modificador Interface para contratos puros (Jerarquía de Tipos & Modificadores de Clase): Exige que los consumidores externos sólo puedan implementar la interfaz de la clase sin heredar su implementación concreta.",
    "topic": "Jerarquía de Tipos & Modificadores de Clase",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-03",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Clases Abstractas y contratos polimórficos»?",
    "options": [
      "Crea y completa promesas manualmente desde fuentes externas, suscripciones de bajo nivel o llamadas a hardware al operar.",
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU.",
      "Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución.",
      "Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Clases Abstractas y contratos polimórficos (Jerarquía de Tipos & Modificadores de Clase): Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución.",
    "topic": "Jerarquía de Tipos & Modificadores de Clase",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-04",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Collection-If para construcción condicional»?",
    "options": [
      "Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria al operar.",
      "Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles al operar.",
      "Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos al operar.",
      "Inserta o excluye elementos dentro de literales de colección evaluando expresiones booleanas de forma declarativa y limpia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Collection-If para construcción condicional (Colecciones Declarativas & Operadores de Flujo): Inserta o excluye elementos dentro de literales de colección evaluando expresiones booleanas de forma declarativa y limpia.",
    "topic": "Colecciones Declarativas & Operadores de Flujo",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-05",
    "collectionId": "dart",
    "question": "Respecto a colecciones declarativas & operadores de flujo en Dart, ¿cuál es el propósito de «Spread Operator y fusiones seguras»?",
    "options": [
      "Expande colecciones dentro de otras mediante los operadores .. bajo condiciones productivas.",
      "El analizador estático verifica la conformidad del contrato antes de compilar al operar.",
      "El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario.",
      "La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Spread Operator y fusiones seguras (Colecciones Declarativas & Operadores de Flujo): Expande colecciones dentro de otras mediante los operadores ... y ...? evitando excepciones ante listas anulables.",
    "topic": "Colecciones Declarativas & Operadores de Flujo",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-06",
    "collectionId": "dart",
    "question": "En Dart (Genéricos Reificados & Sistema de Tipos), ¿qué función técnica cumple «Restricciones de tipo acotadas (Bounded Generics)»?",
    "options": [
      "Parametriza funciones y métodos independientes con tipos genéricos preservando la inferencia entre parámetros y retorno.",
      "Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles.",
      "Crea alias de tipo expresivos y reutilizables para firmas de callbacks, transformadores y estructuras de datos anidadas.",
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Restricciones de tipo acotadas (Bounded Generics) (Genéricos Reificados & Sistema de Tipos): Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles.",
    "topic": "Genéricos Reificados & Sistema de Tipos",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-07",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Funciones genéricas de primera clase» en genéricos reificados & sistema de tipos?",
    "options": [
      "Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles al operar.",
      "Crea alias de tipo expresivos y reutilizables para firmas de callbacks, transformadores y estructuras de datos anidadas.",
      "Parametriza funciones y métodos independientes con tipos genéricos preservando la inferencia entre parámetros y retorno.",
      "Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Funciones genéricas de primera clase (Genéricos Reificados & Sistema de Tipos): Parametriza funciones y métodos independientes con tipos genéricos preservando la inferencia entre parámetros y retorno.",
    "topic": "Genéricos Reificados & Sistema de Tipos",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-08",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Typedefs genéricos para firmas complejas»?",
    "options": [
      "Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles al operar.",
      "Parametriza funciones y métodos independientes con tipos genéricos preservando la inferencia entre parámetros y retorno.",
      "Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución al operar.",
      "Crea alias de tipo expresivos y reutilizables para firmas de callbacks, transformadores y estructuras de datos anidadas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Typedefs genéricos para firmas complejas (Genéricos Reificados & Sistema de Tipos): Crea alias de tipo expresivos y reutilizables para firmas de callbacks, transformadores y estructuras de datos anidadas.",
    "topic": "Genéricos Reificados & Sistema de Tipos",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-09",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Completer para control imperativo de Futures»?",
    "options": [
      "Crea y completa promesas manualmente desde fuentes externas, suscripciones de bajo nivel o llamadas a hardware.",
      "La arquitectura de memoria aislada ofrece máxima fiabilidad y rendimiento constante bajo carga masiva al operar.",
      "Un uso desmedido de microtareas monopoliza el hilo de ejecución e impide procesar eventos externos al operar.",
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Completer para control imperativo de Futures (Asincronía & Event Loop en Dart): Crea y completa promesas manualmente desde fuentes externas, suscripciones de bajo nivel o llamadas a hardware.",
    "topic": "Asincronía & Event Loop en Dart",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-10",
    "collectionId": "dart",
    "question": "Respecto a streams, transformaciones & programación reactiva en Dart, ¿cuál es el propósito de «StreamController y despacho reactivo»?",
    "options": [
      "Produce secuencias infinitas o diferidas de datos emitiendo valores perezosamente con yield y delegando flujos con yield* al operar.",
      "Crea emisores de datos que gestionan suscripciones de oyentes, pausa, reanudación y cierre ordenado de flujos de información.",
      "Itera sobre los elementos sucesivos de un Stream procesando cada evento en orden conforme arriba desde la fuente asíncrona.",
      "Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "StreamController y despacho reactivo (Streams, Transformaciones & Programación Reactiva): Crea emisores de datos que gestionan suscripciones de oyentes, pausa, reanudación y cierre ordenado de flujos de información.",
    "topic": "Streams, Transformaciones & Programación Reactiva",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-11",
    "collectionId": "dart",
    "question": "En Dart (Streams, Transformaciones & Programación Reactiva), ¿qué función técnica cumple «Generadores asíncronos async*»?",
    "options": [
      "Itera sobre los elementos sucesivos de un Stream procesando cada evento en orden conforme arriba desde la fuente asíncrona.",
      "Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria al operar.",
      "Produce secuencias infinitas o diferidas de datos emitiendo valores perezosamente con yield y delegando flujos con yield*.",
      "Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Generadores asíncronos async* y yield (Streams, Transformaciones & Programación Reactiva): Produce secuencias infinitas o diferidas de datos emitiendo valores perezosamente con yield y delegando flujos con yield*.",
    "topic": "Streams, Transformaciones & Programación Reactiva",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-12",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Consumo declarativo con await for» en streams, transformaciones & programación reactiva?",
    "options": [
      "Produce secuencias infinitas o diferidas de datos emitiendo valores perezosamente con yield y delegando flujos con yield* al operar.",
      "Crea emisores de datos que gestionan suscripciones de oyentes, pausa, reanudación y cierre ordenado de flujos de información.",
      "Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria al operar.",
      "Itera sobre los elementos sucesivos de un Stream procesando cada evento en orden conforme arriba desde la fuente asíncrona."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Consumo declarativo con await for (Streams, Transformaciones & Programación Reactiva): Itera sobre los elementos sucesivos de un Stream procesando cada evento en orden conforme arriba desde la fuente asíncrona.",
    "topic": "Streams, Transformaciones & Programación Reactiva",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-13",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Arquitectura de Isolates sin memoria compartida»?",
    "options": [
      "Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes al operar.",
      "Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos.",
      "Transfiere mensajes inmutables entre isolates mediante puertos serializados sin riesgo de carreras de datos ni deadlocks.",
      "Ejecuta una función pesada en un isolate temporal y retorna el resultado al isolate principal con recolección automática."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Arquitectura de Isolates sin memoria compartida (Concurrencia, Memoria Aislada & Isolates): Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes.",
    "topic": "Concurrencia, Memoria Aislada & Isolates",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-14",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Canales de comunicación SendPort y ReceivePort»?",
    "options": [
      "Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos al operar.",
      "Transfiere mensajes inmutables entre isolates mediante puertos serializados sin riesgo de carreras de datos ni deadlocks.",
      "Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes.",
      "Ejecuta una función pesada en un isolate temporal y retorna el resultado al isolate principal con recolección automática."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Canales de comunicación SendPort y ReceivePort (Concurrencia, Memoria Aislada & Isolates): Transfiere mensajes inmutables entre isolates mediante puertos serializados sin riesgo de carreras de datos ni deadlocks.",
    "topic": "Concurrencia, Memoria Aislada & Isolates",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-15",
    "collectionId": "dart",
    "question": "Respecto a concurrencia, memoria aislada & isolates en Dart, ¿cuál es el propósito de «Isolate.spawn para workers persistentes»?",
    "options": [
      "Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes.",
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU al operar.",
      "Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos.",
      "Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Isolate.spawn para workers persistentes (Concurrencia, Memoria Aislada & Isolates): Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos.",
    "topic": "Concurrencia, Memoria Aislada & Isolates",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-16",
    "collectionId": "dart",
    "question": "En Dart (Concurrencia, Memoria Aislada & Isolates), ¿qué función técnica cumple «Isolate.run para cómputo intensivo puntual»?",
    "options": [
      "Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos al operar.",
      "Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes.",
      "Transfiere mensajes inmutables entre isolates mediante puertos serializados sin riesgo de carreras de datos ni deadlocks.",
      "Ejecuta una función pesada en un isolate temporal y retorna el resultado al isolate principal con recolección automática."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Isolate.run para cómputo intensivo puntual (Concurrencia, Memoria Aislada & Isolates): Ejecuta una función pesada en un isolate temporal y retorna el resultado al isolate principal con recolección automática.",
    "topic": "Concurrencia, Memoria Aislada & Isolates",
    "difficulty": "básico"
  },
  {
    "id": "dart-q-17",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Transferencia de búferes de memoria sin copia» en concurrencia, memoria aislada & isolates?",
    "options": [
      "Envía grandes estructuras binarias entre isolates transfiriendo la propiedad del búfer directamente sin costo de duplicados.",
      "Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos.",
      "Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes.",
      "Transfiere mensajes inmutables entre isolates mediante puertos serializados sin riesgo de carreras de datos ni deadlocks."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Transferencia de búferes de memoria sin copia (Concurrencia, Memoria Aislada & Isolates): Envía grandes estructuras binarias entre isolates transfiriendo la propiedad del búfer directamente sin costo de copia.",
    "topic": "Concurrencia, Memoria Aislada & Isolates",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-18",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Modo AOT a código binario nativo»?",
    "options": [
      "La arquitectura de memoria aislada ofrece máxima fiabilidad y rendimiento constante bajo carga masiva en ejecución.",
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU.",
      "Crea y completa promesas manualmente desde fuentes externas, suscripciones de bajo nivel o llamadas a hardware.",
      "Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Modo AOT a código binario nativo (Compilación, Modos JIT/AOT & Optimización VM): Compila la aplicación Ahead-Of-Time a binarios máquina directos (ARM64, x86_64) con arranque instantáneo y uso eficiente de CPU.",
    "topic": "Compilación, Modos JIT/AOT & Optimización VM",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-19",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Garbage Collector generacional de Dart»?",
    "options": [
      "Expone puertos de telemetría para inspeccionar asignaciones de memoria, rastrear microsegundos de CPU y depurar el heap al operar.",
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU en el flujo.",
      "Recupera memoria rápidamente mediante un Young Space para objetos de vida corta y un Old Space compacto para datos longevos.",
      "Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Garbage Collector generacional de Dart (Compilación, Modos JIT/AOT & Optimización VM): Recupera memoria rápidamente mediante un Young Space para objetos de vida corta y un Old Space compacto para datos longevos.",
    "topic": "Compilación, Modos JIT/AOT & Optimización VM",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-20",
    "collectionId": "dart",
    "question": "Respecto a compilación, modos jit/aot & optimización vm en Dart, ¿cuál es el propósito de «Dart VM Service y métricas de profiling»?",
    "options": [
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU al evaluar.",
      "Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución al operar.",
      "Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria.",
      "Expone puertos de telemetría para inspeccionar asignaciones de memoria, rastrear microsegundos de CPU y depurar el heap."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dart VM Service y métricas de profiling (Compilación, Modos JIT/AOT & Optimización VM): Expone puertos de telemetría para inspeccionar asignaciones de memoria, rastrear microsegundos de CPU y depurar el heap.",
    "topic": "Compilación, Modos JIT/AOT & Optimización VM",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-21",
    "collectionId": "dart",
    "question": "En Dart (Interoperabilidad Nativa con Dart FFI & Tooling), ¿qué función técnica cumple «Arquitectura de Foreign Function Interface (FFI)»?",
    "options": [
      "Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas.",
      "La arquitectura de memoria aislada ofrece máxima fiabilidad y rendimiento constante bajo carga masiva al operar.",
      "Crea y completa promesas manualmente desde fuentes externas, suscripciones de bajo nivel o llamadas a hardware.",
      "Compila la aplicación Ahead-Of-Time a binarios máquina directos con arranque instantáneo y uso eficiente de CPU."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Arquitectura de Foreign Function Interface (FFI) (Interoperabilidad Nativa con Dart FFI & Tooling): Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas (.so, .dylib, .dll).",
    "topic": "Interoperabilidad Nativa con Dart FFI & Tooling",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-22",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Mapeo de Structs» en interoperabilidad nativa con dart ffi & tooling?",
    "options": [
      "Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas al evaluar.",
      "Declara representaciones exactas de estructuras en memoria de C gestionando asignación con malloc y liberación con free.",
      "Garantiza estándares de calidad de código, formato unificado y verificación estática en flujos de integración continua.",
      "Genera enlaces y tipos de Dart automáticamente a partir de archivos de cabecera de C mediante el analizador de LLVM/Clang."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mapeo de Structs y memoria nativa con dart:ffi (Interoperabilidad Nativa con Dart FFI & Tooling): Declara representaciones exactas de estructuras en memoria de C gestionando asignación con malloc y liberación con free.",
    "topic": "Interoperabilidad Nativa con Dart FFI & Tooling",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-23",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Punteros nativos y punteros opacos»?",
    "options": [
      "Garantiza estándares de calidad de código, formato unificado y verificación estática en flujos de integración continua al operar.",
      "Declara representaciones exactas de estructuras en memoria de C gestionando asignación con malloc y liberación con free.",
      "Manipula direcciones de memoria física y buffers de bytes directos con comprobaciones de tipado estricto en la capa de Dart.",
      "Genera enlaces y tipos de Dart automáticamente a partir de archivos de cabecera de C mediante el analizador de LLVM/Clang."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Punteros nativos y punteros opacos (Interoperabilidad Nativa con Dart FFI & Tooling): Manipula direcciones de memoria física y buffers de bytes directos con comprobaciones de tipado estricto en la capa de Dart.",
    "topic": "Interoperabilidad Nativa con Dart FFI & Tooling",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-24",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «package:ffigen para enlaces automáticos»?",
    "options": [
      "Garantiza estándares de calidad de código, formato unificado y verificación estática en flujos de integración continua al operar.",
      "Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas al operar.",
      "Declara representaciones exactas de estructuras en memoria de C gestionando asignación con malloc y liberación con free.",
      "Genera enlaces y tipos de Dart automáticamente a partir de archivos de cabecera de C mediante el analizador de LLVM/Clang."
    ],
    "correctAnswerIndex": 3,
    "explanation": "package:ffigen para enlaces automáticos (Interoperabilidad Nativa con Dart FFI & Tooling): Genera enlaces y tipos de Dart automáticamente a partir de archivos de cabecera (.h) de C mediante el analizador de LLVM/Clang.",
    "topic": "Interoperabilidad Nativa con Dart FFI & Tooling",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-25",
    "collectionId": "dart",
    "question": "Respecto a interoperabilidad nativa con dart ffi & tooling en Dart, ¿cuál es el propósito de «dart analyze, format y compilación multiplataforma»?",
    "options": [
      "Garantiza estándares de calidad de código, formato unificado y verificación estática en flujos de integración continua al operar.",
      "Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas al operar.",
      "Declara representaciones exactas de estructuras en memoria de C gestionando asignación con malloc y liberación con free.",
      "Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "dart analyze, format y compilación multiplataforma (Interoperabilidad Nativa con Dart FFI & Tooling): Garantiza estándares de calidad de código, formato unificado y verificación estática en flujos de integración continua.",
    "topic": "Interoperabilidad Nativa con Dart FFI & Tooling",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-26",
    "collectionId": "dart",
    "question": "En Dart (Caso en acción), ¿qué función técnica cumple «Inicialización de Worker Isolate»?",
    "options": [
      "El analizador estático verifica la conformidad del contrato antes de compilar en el flujo.",
      "El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario.",
      "La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos.",
      "Expande colecciones dentro de otras mediante los operadores .. dentro de la aplicación."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Inicialización de Worker Isolate (Caso en acción): El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario.",
    "topic": "Caso en acción",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-27",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Normalización tipada con Records y Sound Null Safety» en caso en acción?",
    "options": [
      "El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario al operar.",
      "La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos.",
      "El analizador estático verifica la conformidad del contrato antes de compilar al operar.",
      "Expande colecciones dentro de otras mediante los operadores .. manteniendo consistencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Normalización tipada con Records y Sound Null Safety (Caso en acción): El analizador estático verifica la conformidad del contrato antes de compilar.",
    "topic": "Caso en acción",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-28",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Transformación reactiva con Streams y async*»?",
    "options": [
      "El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario al operar.",
      "El analizador estático verifica la conformidad del contrato antes de compilar en el flujo.",
      "Expande colecciones dentro de otras mediante los operadores .. respetando las invariantes.",
      "La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Transformación reactiva con Streams y async* (Caso en acción): La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos.",
    "topic": "Caso en acción",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-29",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Detección de saturación en Microtask Queue»?",
    "options": [
      "Un uso desmedido de microtareas monopoliza el hilo de ejecución e impide procesar eventos externos.",
      "La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos al operar.",
      "El balanceo entre Isolates y el bucle de eventos garantiza una arquitectura reactiva sostenible.",
      "El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Detección de saturación en Microtask Queue (Caso en acción): Un uso desmedido de microtareas monopoliza el hilo de ejecución e impide procesar eventos externos.",
    "topic": "Caso en acción",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-30",
    "collectionId": "dart",
    "question": "Respecto a caso en acción en Dart, ¿cuál es el propósito de «Desacoplamiento»?",
    "options": [
      "La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos al operar.",
      "El balanceo entre Isolates y el bucle de eventos garantiza una arquitectura reactiva sostenible.",
      "El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario al operar.",
      "El analizador estático verifica la conformidad del contrato antes de compilar sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Desacoplamiento y balanceo con Isolate.run (Caso en acción): El balanceo entre Isolates y el bucle de eventos garantiza una arquitectura reactiva sostenible.",
    "topic": "Caso en acción",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-31",
    "collectionId": "dart",
    "question": "En Dart (Caso en acción), ¿qué función técnica cumple «Compilación nativa AOT»?",
    "options": [
      "El balanceo entre Isolates y el bucle de eventos garantiza una arquitectura reactiva sostenible al operar.",
      "Un uso desmedido de microtareas monopoliza el hilo de ejecución e impide procesar eventos externos.",
      "La arquitectura de memoria aislada ofrece máxima fiabilidad y rendimiento constante bajo carga masiva.",
      "La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Compilación nativa AOT y verificación de rendimiento (Caso en acción): La arquitectura de memoria aislada ofrece máxima fiabilidad y rendimiento constante bajo carga masiva.",
    "topic": "Caso en acción",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-32",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Inferencia var, final» en sintaxis moderna & sound null safety?",
    "options": [
      "Promueve variables a subtipos específicos o elimina su nulabilidad tras comprobaciones condicionales sin requerir conversiones forzadas manuales sin perder estado.",
      "Garantiza que una variable no anulable nunca contenga null en ningún momento de la ejecución mediante análisis estático formal del compilador sin perder estado.",
      "Aplica ?. para invocación condicional, ?? para valor de fallback por defecto y ??= para asignación condicionada a la ausencia previa de valor sin perder estado.",
      "Distingue entre inferencia automática de tipo en asignación, inmutabilidad de referencia en tiempo de ejecución y constantes evaluadas en tiempo de compilación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Inferencia var, final y const (Sintaxis Moderna & Sound Null Safety): Distingue entre inferencia automática de tipo en asignación, inmutabilidad de referencia en tiempo de ejecución y constantes evaluadas en tiempo de compilación.",
    "topic": "Sintaxis Moderna & Sound Null Safety",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-33",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Sound Null Safety y sistema de tipos»?",
    "options": [
      "Garantiza que una variable no anulable nunca contenga null en ningún momento de la ejecución mediante análisis estático formal del compilador.",
      "Difiere la inicialización de variables de instancia no anulables hasta su primer acceso verificando su asignación en tiempo de ejecución.",
      "Aplica ?. para invocación condicional, ?? para valor de fallback por defecto y ??= para asignación condicionada a la ausencia previa de valor.",
      "Declara múltiples puntos de entrada inicializadores con nombres semánticos que pueden redirigir a otros inicializadores de la misma clase."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sound Null Safety y sistema de tipos (Sintaxis Moderna & Sound Null Safety): Garantiza que una variable no anulable nunca contenga null en ningún momento de la ejecución mediante análisis estático formal del compilador.",
    "topic": "Sintaxis Moderna & Sound Null Safety",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-34",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Promoción de tipos y análisis de flujo»?",
    "options": [
      "Difiere la inicialización de variables de instancia no anulables hasta su primer acceso verificando su asignación en tiempo de ejecución al evaluar.",
      "Promueve variables a subtipos específicos o elimina su nulabilidad tras comprobaciones condicionales sin requerir conversiones forzadas manuales.",
      "Garantiza que una variable no anulable nunca contenga null en ningún momento de la ejecución mediante análisis estático formal del compilador.",
      "Aplica ?. para invocación condicional, ?? para valor de fallback por defecto y ??= para asignación condicionada a la ausencia previa de valor."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Promoción de tipos y análisis de flujo (Sintaxis Moderna & Sound Null Safety): Promueve variables a subtipos específicos o elimina su nulabilidad tras comprobaciones condicionales sin requerir conversiones forzadas manuales.",
    "topic": "Sintaxis Moderna & Sound Null Safety",
    "difficulty": "intermedio"
  },
  {
    "id": "dart-q-35",
    "collectionId": "dart",
    "question": "Respecto a sintaxis moderna & sound null safety en Dart, ¿cuál es el propósito de «Operadores de navegación»?",
    "options": [
      "Difiere la inicialización de variables de instancia no anulables hasta su primer acceso verificando su asignación en tiempo de ejecución al operar.",
      "Garantiza que una variable no anulable nunca contenga null en ningún momento de la ejecución mediante análisis estático formal del compilador.",
      "Aplica ?. para invocación condicional, ?? para valor de fallback por defecto y ??= para asignación condicionada a la ausencia previa de valor.",
      "Declara múltiples puntos de entrada inicializadores con nombres semánticos que pueden redirigir a otros inicializadores de la misma clase."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Operadores de navegación y asignación segura (Sintaxis Moderna & Sound Null Safety): Aplica ?. para invocación condicional, ?? para valor de fallback por defecto y ??= para asignación condicionada a la ausencia previa de valor.",
    "topic": "Sintaxis Moderna & Sound Null Safety",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-36",
    "collectionId": "dart",
    "question": "En Dart (Sintaxis Moderna & Sound Null Safety), ¿qué función técnica cumple «Inicialización tardía con late»?",
    "options": [
      "Extrae campos de registros, listas, mapas e instancias directamente en variables locales dentro de una única sentencia declarativa al operar.",
      "Añade condiciones booleanas adicionales a una rama de patrón permitiendo filtrar evaluaciones complejas antes de ejecutar la acción al operar.",
      "Ejecuta asignaciones de campos finales y verificaciones de invariantes con assert antes de que se invoque el cuerpo del constructor al operar.",
      "Difiere la inicialización de variables de instancia no anulables hasta su primer acceso verificando su asignación en tiempo de ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Inicialización tardía con late (Sintaxis Moderna & Sound Null Safety): Difiere la inicialización de variables de instancia no anulables hasta su primer acceso verificando su asignación en tiempo de ejecución.",
    "topic": "Sintaxis Moderna & Sound Null Safety",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-37",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Records posicionales y nombrados» en records, tuplas & pattern matching?",
    "options": [
      "Empaqueta múltiples valores heterogéneos en estructuras anónimas inmutables de primera clase con tipado estricto garantizado por el compilador.",
      "Comprueba en tiempo de compilación que todas las ramas y combinaciones posibles de datos están cubiertas sin dejar casos sin manejar al operar.",
      "Añade condiciones booleanas adicionales a una rama de patrón permitiendo filtrar evaluaciones complejas antes de ejecutar la acción al operar.",
      "Extrae campos de registros, listas, mapas e instancias directamente en variables locales dentro de una única sentencia declarativa al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Records posicionales y nombrados (Records, Tuplas & Pattern Matching): Empaqueta múltiples valores heterogéneos en estructuras anónimas inmutables de primera clase con tipado estricto garantizado por el compilador.",
    "topic": "Records, Tuplas & Pattern Matching",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-38",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Desestructuración de tuplas y objetos»?",
    "options": [
      "Evalúa patrones de datos exhaustivos en expresiones switch concisas retornando un valor calculado sin requerir sentencias break al operar.",
      "Extrae campos de registros, listas, mapas e instancias directamente en variables locales dentro de una única sentencia declarativa.",
      "Añade condiciones booleanas adicionales a una rama de patrón permitiendo filtrar evaluaciones complejas antes de ejecutar la acción.",
      "Comprueba en tiempo de compilación que todas las ramas y combinaciones posibles de datos están cubiertas sin dejar casos sin manejar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Desestructuración de tuplas y objetos (Records, Tuplas & Pattern Matching): Extrae campos de registros, listas, mapas e instancias directamente en variables locales dentro de una única sentencia declarativa.",
    "topic": "Records, Tuplas & Pattern Matching",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-39",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Pattern Matching en Switch Expressions»?",
    "options": [
      "Produce secuencias infinitas o diferidas de datos emitiendo valores perezosamente con yield y delegando flujos con yield* al operar.",
      "Genera enlaces y tipos de Dart automáticamente a partir de archivos de cabecera de C mediante el analizador de LLVM/Clang al operar.",
      "Evalúa patrones de datos exhaustivos en expresiones switch concisas retornando un valor calculado sin requerir sentencias break.",
      "Exige que los consumidores externos sólo puedan implementar la interfaz de la clase sin heredar su implementación concreta al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Pattern Matching en Switch Expressions (Records, Tuplas & Pattern Matching): Evalúa patrones de datos exhaustivos en expresiones switch concisas retornando un valor calculado sin requerir sentencias break.",
    "topic": "Records, Tuplas & Pattern Matching",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-40",
    "collectionId": "dart",
    "question": "Respecto a records, tuplas & pattern matching en Dart, ¿cuál es el propósito de «Guard Clauses con cláusula when»?",
    "options": [
      "Evalúa patrones de datos exhaustivos en expresiones switch concisas retornando un valor calculado sin requerir sentencias break al operar.",
      "Extrae campos de registros, listas, mapas e instancias directamente en variables locales dentro de una única sentencia declarativa.",
      "Comprueba en tiempo de compilación que todas las ramas y combinaciones posibles de datos están cubiertas sin dejar casos sin manejar.",
      "Añade condiciones booleanas adicionales a una rama de patrón permitiendo filtrar evaluaciones complejas antes de ejecutar la acción."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Guard Clauses con cláusula when (Records, Tuplas & Pattern Matching): Añade condiciones booleanas adicionales a una rama de patrón permitiendo filtrar evaluaciones complejas antes de ejecutar la acción.",
    "topic": "Records, Tuplas & Pattern Matching",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-41",
    "collectionId": "dart",
    "question": "En Dart (Records, Tuplas & Pattern Matching), ¿qué función técnica cumple «Exhaustividad estática de patrones»?",
    "options": [
      "Comprueba en tiempo de compilación que todas las ramas y combinaciones posibles de datos están cubiertas sin dejar casos sin manejar.",
      "Evalúa patrones de datos exhaustivos en expresiones switch concisas retornando un valor calculado sin requerir sentencias break.",
      "Extrae campos de registros, listas, mapas e instancias directamente en variables locales dentro de una única sentencia declarativa.",
      "Añade condiciones booleanas adicionales a una rama de patrón permitiendo filtrar evaluaciones complejas antes de ejecutar la acción."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Exhaustividad estática de patrones (Records, Tuplas & Pattern Matching): Comprueba en tiempo de compilación que todas las ramas y combinaciones posibles de datos están cubiertas sin dejar casos sin manejar.",
    "topic": "Records, Tuplas & Pattern Matching",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-42",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Constructores generativos y azucar sintáctico» en programación orientada a objetos en dart?",
    "options": [
      "Transfiere mensajes inmutables entre isolates mediante puertos serializados sin riesgo de carreras de datos ni deadlocks al operar.",
      "Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor.",
      "Ejecuta una función pesada en un isolate temporal y retorna el resultado al isolate principal con recolección automática al operar.",
      "Parametriza funciones y métodos independientes con tipos genéricos preservando la inferencia entre parámetros y retorno al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Constructores generativos y azucar sintáctico (Programación Orientada a Objetos en Dart): Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor.",
    "topic": "Programación Orientada a Objetos en Dart",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-43",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Listas de inicialización y aserciones»?",
    "options": [
      "Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor al operar.",
      "Crea instancias inmutables compartidas en memoria canónica si todos los campos son finales y se construyen con valores constantes.",
      "Ejecuta asignaciones de campos finales y verificaciones de invariantes con assert antes de que se invoque el cuerpo del constructor.",
      "Implementa inicializadores que no crean necesariamente una nueva instancia retornando objetos preexistentes o subtipos polimórficos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Listas de inicialización y aserciones (Programación Orientada a Objetos en Dart): Ejecuta asignaciones de campos finales y verificaciones de invariantes con assert antes de que se invoque el cuerpo del constructor.",
    "topic": "Programación Orientada a Objetos en Dart",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-44",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Constructores Named y Redirigidos»?",
    "options": [
      "Ejecuta asignaciones de campos finales y verificaciones de invariantes con assert antes de que se invoque el cuerpo del constructor al operar.",
      "Implementa inicializadores que no crean necesariamente una nueva instancia retornando objetos preexistentes o subtipos polimórficos al operar.",
      "Crea instancias inmutables compartidas en memoria canónica si todos los campos son finales y se construyen con valores constantes al operar.",
      "Declara múltiples puntos de entrada inicializadores con nombres semánticos que pueden redirigir a otros inicializadores de la misma clase."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Constructores Named y Redirigidos (Programación Orientada a Objetos en Dart): Declara múltiples puntos de entrada constructores con nombres semánticos que pueden redirigir a otros constructores de la misma clase.",
    "topic": "Programación Orientada a Objetos en Dart",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-45",
    "collectionId": "dart",
    "question": "Respecto a programación orientada a objetos en dart en Dart, ¿cuál es el propósito de «Constructores Factory»?",
    "options": [
      "Implementa inicializadores que no crean necesariamente una nueva instancia retornando objetos preexistentes o subtipos polimórficos.",
      "Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor.",
      "Crea instancias inmutables compartidas en memoria canónica si todos los campos son finales y se construyen con valores constantes.",
      "Ejecuta asignaciones de campos finales y verificaciones de invariantes con assert antes de que se invoque el cuerpo del constructor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Constructores Factory y caché de instancias (Programación Orientada a Objetos en Dart): Implementa constructores que no crean necesariamente una nueva instancia retornando objetos preexistentes o subtipos polimórficos.",
    "topic": "Programación Orientada a Objetos en Dart",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-46",
    "collectionId": "dart",
    "question": "En Dart (Programación Orientada a Objetos en Dart), ¿qué función técnica cumple «Constructores Const y canonicidad»?",
    "options": [
      "Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor al operar.",
      "Crea instancias inmutables compartidas en memoria canónica si todos los campos son finales y se construyen con valores constantes.",
      "Ejecuta asignaciones de campos finales y verificaciones de invariantes con assert antes de que se invoque el cuerpo del constructor.",
      "Implementa inicializadores que no crean necesariamente una nueva instancia retornando objetos preexistentes o subtipos polimórficos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Constructores Const y canonicidad (Programación Orientada a Objetos en Dart): Crea instancias inmutables compartidas en memoria canónica si todos los campos son finales y se construyen con valores constantes.",
    "topic": "Programación Orientada a Objetos en Dart",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-47",
    "collectionId": "dart",
    "question": "Dentro de Dart, ¿cómo opera el mecanismo de «Clases Sealed para jerarquías cerradas» en jerarquía de tipos & modificadores de clase?",
    "options": [
      "Impide totalmente la herencia o implementación de una clase fuera de su archivo de definición garantizando estabilidad binaria sin perder estado.",
      "Exige que los consumidores externos sólo puedan implementar la interfaz de la clase sin heredar su implementación concreta de modo predecible.",
      "Define familias de tipos donde todos los subtipos directos deben residir en la misma biblioteca permitiendo validación exhaustiva de switches.",
      "Difiere la inicialización de variables de instancia no anulables hasta su primer acceso verificando su asignación en tiempo de ejecución al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Clases Sealed para jerarquías cerradas (Jerarquía de Tipos & Modificadores de Clase): Define familias de tipos donde todos los subtipos directos deben residir en la misma biblioteca permitiendo validación exhaustiva de switches.",
    "topic": "Jerarquía de Tipos & Modificadores de Clase",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-48",
    "collectionId": "dart",
    "question": "Al trabajar con Dart, ¿qué responsabilidad define a «Modificador Final para sellar clases»?",
    "options": [
      "Exige que los consumidores externos sólo puedan implementar la interfaz de la clase sin heredar su implementación concreta al operar.",
      "Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria al evaluar.",
      "Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución con precisión.",
      "Impide totalmente la herencia o implementación de una clase fuera de su archivo de definición garantizando estabilidad binaria."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Modificador Final para sellar clases (Jerarquía de Tipos & Modificadores de Clase): Impide totalmente la herencia o implementación de una clase fuera de su archivo de definición garantizando estabilidad binaria.",
    "topic": "Jerarquía de Tipos & Modificadores de Clase",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-49",
    "collectionId": "dart",
    "question": "En la arquitectura de Dart, ¿qué caracteriza técnicamente a «Mixins y reutilización con with»?",
    "options": [
      "Inyecta métodos y estado en una jerarquía de clases mediante linealización de mixins sin incurrir en problemas de herencia múltiple al operar.",
      "Limita la aplicación de un mixin a clases que extiendan o implementen un tipo base determinado para acceder a sus miembros protegidos.",
      "Crea emisores de datos que gestionan suscripciones de oyentes, pausa, reanudación y cierre ordenado de flujos de información al operar.",
      "Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Mixins y reutilización con with (Mixins, Extensión & Composición Funcional): Inyecta métodos y estado en una jerarquía de clases mediante linealización de mixins sin incurrir en problemas de herencia múltiple.",
    "topic": "Mixins, Extensión & Composición Funcional",
    "difficulty": "avanzado"
  },
  {
    "id": "dart-q-50",
    "collectionId": "dart",
    "question": "Respecto a mixins, extensión & composición funcional en Dart, ¿cuál es el propósito de «Restricciones de mixin con la cláusula on»?",
    "options": [
      "Inyecta métodos y estado en una jerarquía de clases mediante linealización de mixins sin incurrir en problemas de herencia múltiple al operar.",
      "Limita la aplicación de un mixin a clases que extiendan o implementen un tipo base determinado para acceder a sus miembros protegidos.",
      "Evalúa patrones de datos exhaustivos en expresiones switch concisas retornando un valor calculado sin requerir sentencias break al operar.",
      "Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Restricciones de mixin con la cláusula on (Mixins, Extensión & Composición Funcional): Limita la aplicación de un mixin a clases que extiendan o implementen un tipo base determinado para acceder a sus miembros protegidos.",
    "topic": "Mixins, Extensión & Composición Funcional",
    "difficulty": "avanzado"
  }
];
