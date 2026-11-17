import type { QuizQuestion } from "@/data/quizTypes";

export const dotnetQuestions: QuizQuestion[] = [
  {
    "id": "dotnet-q-01",
    "collectionId": "dotnet",
    "question": "En .NET (Plataforma y SDK), ¿qué función técnica cumple «Runtime, libraries y app stacks»?",
    "options": [
      "Separa ejecución, APIs comunes y frameworks especializados manteniendo la trazabilidad técnica.",
      "Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación.",
      "Organiza dependencias de código sin convertir la solución en requisito del build al operar.",
      "Evalúa propiedades, items, targets y dependencias para producir outputs con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Runtime, libraries y app stacks (Plataforma y SDK): Separa ejecución, APIs comunes y frameworks especializados.",
    "topic": "Plataforma y SDK",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-02",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «SDK y CLI» en plataforma y sdk?",
    "options": [
      "Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación en ejecución.",
      "Restaura, compila, prueba, publica y administra herramientas mediante comandos reproducibles.",
      "Organiza dependencias de código sin convertir la solución en requisito del build en el flujo.",
      "Evalúa propiedades, items, targets y dependencias para producir outputs durante la ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SDK y CLI (Plataforma y SDK): Restaura, compila, prueba, publica y administra herramientas mediante comandos reproducibles.",
    "topic": "Plataforma y SDK",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-03",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «Proyectos y MSBuild»?",
    "options": [
      "Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación al operar.",
      "Organiza dependencias de código sin convertir la solución en requisito del build al operar.",
      "Evalúa propiedades, items, targets y dependencias para producir outputs de forma segura.",
      "Distribuye utilidades ejecutables multiplataforma empaquetadas en NuGet de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Proyectos y MSBuild (Plataforma y SDK): Evalúa propiedades, items, targets y dependencias para producir outputs.",
    "topic": "Plataforma y SDK",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-04",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «Target frameworks»?",
    "options": [
      "Organiza dependencias de código sin convertir la solución en requisito del build al operar.",
      "Evalúa propiedades, items, targets y dependencias para producir outputs al evaluar.",
      "Distribuye utilidades ejecutables multiplataforma empaquetadas en NuGet al evaluar.",
      "Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Target frameworks (Plataforma y SDK): Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación.",
    "topic": "Plataforma y SDK",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-05",
    "collectionId": "dotnet",
    "question": "Respecto a plataforma y sdk en .NET, ¿cuál es el propósito de «Solution y project references»?",
    "options": [
      "Organiza dependencias de código sin convertir la solución en requisito del build de forma clara.",
      "Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación al operar.",
      "Restaura, compila, prueba, publica y administra herramientas mediante comandos reproducibles.",
      "Evalúa propiedades, items, targets y dependencias para producir outputs dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Solution y project references (Plataforma y SDK): Organiza dependencias de código sin convertir la solución en requisito del build.",
    "topic": "Plataforma y SDK",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-06",
    "collectionId": "dotnet",
    "question": "En .NET (Plataforma y SDK), ¿qué función técnica cumple «Roll-forward y compatibilidad de SDK»?",
    "options": [
      "Organiza dependencias de código sin convertir la solución en requisito del build al operar.",
      "Aplica políticas de selección de versión de runtime en ejecución sin degradar el flujo.",
      "Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación.",
      "Evalúa propiedades, items, targets y dependencias para producir outputs de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Roll-forward y compatibilidad de SDK (Plataforma y SDK): Aplica políticas de selección de versión de runtime en ejecución.",
    "topic": "Plataforma y SDK",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-07",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «Global tools y extensiones dotnet» en plataforma y sdk?",
    "options": [
      "Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación al operar.",
      "Organiza dependencias de código sin convertir la solución en requisito del build al operar.",
      "Distribuye utilidades ejecutables multiplataforma empaquetadas en NuGet de forma segura.",
      "Evalúa propiedades, items, targets y dependencias para producir outputs de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Global tools y extensiones dotnet (Plataforma y SDK): Distribuye utilidades ejecutables multiplataforma empaquetadas en NuGet.",
    "topic": "Plataforma y SDK",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-08",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «IL y metadata»?",
    "options": [
      "Inspecciona metadata y activa tipos dinámicamente con costo y requisitos de trimming visibles al operar.",
      "Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga de forma segura.",
      "Adjunta metadata declarativa que frameworks y herramientas pueden interpretar de modo predecible.",
      "Describe instrucciones, tipos, referencias y atributos de forma independiente de una CPU concreta."
    ],
    "correctAnswerIndex": 3,
    "explanation": "IL y metadata (Assemblies, metadata y tipos): Describe instrucciones, tipos, referencias y atributos de forma independiente de una CPU concreta.",
    "topic": "Assemblies, metadata y tipos",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-09",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «Assembly identity y versionado»?",
    "options": [
      "Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga.",
      "Comprende cómo el runtime indexa definiciones de métodos y tipos en memoria.",
      "Adjunta metadata declarativa que frameworks y herramientas pueden interpretar.",
      "Carga y descarga assemblies en contextos aislados para plugins dinámicos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Assembly identity y versionado (Assemblies, metadata y tipos): Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga.",
    "topic": "Assemblies, metadata y tipos",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-10",
    "collectionId": "dotnet",
    "question": "Respecto a assemblies, metadata y tipos en .NET, ¿cuál es el propósito de «Type system común (CTS)»?",
    "options": [
      "Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga al operar.",
      "Permite que lenguajes distintos compartan tipos, herencia y excepciones de forma segura.",
      "Adjunta metadata declarativa que frameworks y herramientas pueden interpretar al operar.",
      "Comprende cómo el runtime indexa definiciones de métodos y tipos en memoria en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Type system común (CTS) (Assemblies, metadata y tipos): Permite que lenguajes distintos compartan tipos, herencia y excepciones.",
    "topic": "Assemblies, metadata y tipos",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-11",
    "collectionId": "dotnet",
    "question": "En .NET (Assemblies, metadata y tipos), ¿qué función técnica cumple «Reflection e inspección dinámica»?",
    "options": [
      "Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga de forma clara.",
      "Adjunta metadata declarativa que frameworks y herramientas pueden interpretar de forma segura.",
      "Inspecciona metadata y activa tipos dinámicamente con costo y requisitos de trimming visibles.",
      "Comprende cómo el runtime indexa definiciones de métodos y tipos en memoria sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reflection e inspección dinámica (Assemblies, metadata y tipos): Inspecciona metadata y activa tipos dinámicamente con costo y requisitos de trimming visibles.",
    "topic": "Assemblies, metadata y tipos",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-12",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «Attributes declarativos» en assemblies, metadata y tipos?",
    "options": [
      "Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga al operar.",
      "Comprende cómo el runtime indexa definiciones de métodos y tipos en memoria en el flujo.",
      "Carga y descarga assemblies en contextos aislados para plugins dinámicos de forma clara.",
      "Adjunta metadata declarativa que frameworks y herramientas pueden interpretar al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Attributes declarativos (Assemblies, metadata y tipos): Adjunta metadata declarativa que frameworks y herramientas pueden interpretar.",
    "topic": "Assemblies, metadata y tipos",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-13",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «AssemblyLoadContext y aislamiento»?",
    "options": [
      "Carga y descarga assemblies en contextos aislados para plugins dinámicos sin perder estado.",
      "Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga.",
      "Adjunta metadata declarativa que frameworks y herramientas pueden interpretar al operar.",
      "Comprende cómo el runtime indexa definiciones de métodos y tipos en memoria al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "AssemblyLoadContext y aislamiento (Assemblies, metadata y tipos): Carga y descarga assemblies en contextos aislados para plugins dinámicos.",
    "topic": "Assemblies, metadata y tipos",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-14",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «Metadata tokens y tablas del CLR»?",
    "options": [
      "Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga al operar.",
      "Comprende cómo el runtime indexa definiciones de métodos y tipos en memoria en el flujo.",
      "Adjunta metadata declarativa que frameworks y herramientas pueden interpretar al operar.",
      "Carga y descarga assemblies en contextos aislados para plugins dinámicos de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Metadata tokens y tablas del CLR (Assemblies, metadata y tipos): Comprende cómo el runtime indexa definiciones de métodos y tipos en memoria.",
    "topic": "Assemblies, metadata y tipos",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-15",
    "collectionId": "dotnet",
    "question": "Respecto a clr y ejecución de código en .NET, ¿cuál es el propósito de «JIT y compilación por niveles (Tiered Compilation)»?",
    "options": [
      "Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque al operar.",
      "Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona al operar.",
      "Traduce métodos usados a código nativo optimizando rutas calientes durante la ejecución.",
      "Ajusta el código nativo basándose en datos de ejecución en tiempo real dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "JIT y compilación por niveles (Tiered Compilation) (CLR y ejecución de código): Traduce métodos usados a código nativo optimizando rutas calientes.",
    "topic": "CLR y ejecución de código",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-16",
    "collectionId": "dotnet",
    "question": "En .NET (CLR y ejecución de código), ¿qué función técnica cumple «Dynamic PGO (Profile-Guided Optimization)»?",
    "options": [
      "Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque al operar.",
      "Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona al operar.",
      "Resuelve invocaciones polimórficas de interfaces y métodos virtuales de modo predecible.",
      "Ajusta el código nativo basándose en datos de ejecución en tiempo real dentro del flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dynamic PGO (Profile-Guided Optimization) (CLR y ejecución de código): Ajusta el código nativo basándose en datos de ejecución en tiempo real.",
    "topic": "CLR y ejecución de código",
    "difficulty": "básico"
  },
  {
    "id": "dotnet-q-17",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «ReadyToRun y Native AOT» en clr y ejecución de código?",
    "options": [
      "Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque.",
      "Ajusta el código nativo basándose en datos de ejecución en tiempo real al operar.",
      "Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona.",
      "Resuelve invocaciones polimórficas de interfaces y métodos virtuales al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "ReadyToRun y Native AOT (CLR y ejecución de código): Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque.",
    "topic": "CLR y ejecución de código",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-18",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «Exceptions y stack unwinding»?",
    "options": [
      "Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque al operar.",
      "Propaga fallos limpiando frames y ejecutando bloques finally respetando las invariantes.",
      "Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona al operar.",
      "Ajusta el código nativo basándose en datos de ejecución en tiempo real dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Exceptions y stack unwinding (CLR y ejecución de código): Propaga fallos limpiando frames y ejecutando bloques finally.",
    "topic": "CLR y ejecución de código",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-19",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «ThreadPool»?",
    "options": [
      "Ajusta el código nativo basándose en datos de ejecución en tiempo real con precisión.",
      "Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque.",
      "Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona.",
      "Resuelve invocaciones polimórficas de interfaces y métodos virtuales en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ThreadPool y colas de trabajo (CLR y ejecución de código): Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona.",
    "topic": "CLR y ejecución de código",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-20",
    "collectionId": "dotnet",
    "question": "Respecto a clr y ejecución de código en .NET, ¿cuál es el propósito de «SynchronizationContext y TaskScheduler»?",
    "options": [
      "Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque al operar.",
      "Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona al operar.",
      "Ajusta el código nativo basándose en datos de ejecución en tiempo real de forma segura.",
      "Controla dónde se reanuda una tarea tras un await respetando las restricciones de tipo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "SynchronizationContext y TaskScheduler (CLR y ejecución de código): Controla dónde se reanuda una tarea tras un await.",
    "topic": "CLR y ejecución de código",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-21",
    "collectionId": "dotnet",
    "question": "En .NET (CLR y ejecución de código), ¿qué función técnica cumple «Virtual Method Table (vtable) en CLR»?",
    "options": [
      "Resuelve invocaciones polimórficas de interfaces y métodos virtuales de modo predecible.",
      "Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque.",
      "Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona.",
      "Ajusta el código nativo basándose en datos de ejecución en tiempo real de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Virtual Method Table (vtable) en CLR (CLR y ejecución de código): Resuelve invocaciones polimórficas de interfaces y métodos virtuales.",
    "topic": "CLR y ejecución de código",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-22",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «Managed heap» en memoria administrada y garbage collector?",
    "options": [
      "Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco al operar.",
      "Asigna objetos contiguos rápidamente mediante punteros de asignación de modo predecible.",
      "Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime al operar.",
      "Elige entre baja latencia en cliente o alto throughput y múltiples heaps en servidor."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Managed heap y regiones de asignación (Memoria administrada y Garbage Collector): Asigna objetos contiguos rápidamente mediante punteros de asignación.",
    "topic": "Memoria administrada y Garbage Collector",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-23",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «Generational GC (Gen0, Gen1, Gen2)»?",
    "options": [
      "Libera recursos externos determinísticamente sin depender de la recolección al operar.",
      "Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime.",
      "Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco.",
      "Asigna objetos contiguos rápidamente mediante punteros de asignación con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Generational GC (Gen0, Gen1, Gen2) (Memoria administrada y Garbage Collector): Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco.",
    "topic": "Memoria administrada y Garbage Collector",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-24",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «Roots y reachability»?",
    "options": [
      "Elige entre baja latencia en cliente o alto throughput y múltiples heaps en servidor al operar.",
      "Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco al operar.",
      "Aloja buffers inmovilizados para interoperabilidad nativa sin fragmentar el heap general.",
      "Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Roots y reachability (Memoria administrada y Garbage Collector): Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime.",
    "topic": "Memoria administrada y Garbage Collector",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-25",
    "collectionId": "dotnet",
    "question": "Respecto a memoria administrada y garbage collector en .NET, ¿cuál es el propósito de «Large Object Heap (LOH)»?",
    "options": [
      "Trata objetos de más de 85.000 bytes con costos distintos de compactación y fragmentación al operar.",
      "Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco al operar.",
      "Elige entre baja latencia en cliente o alto throughput y múltiples heaps en servidor.",
      "Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Large Object Heap (LOH) (Memoria administrada y Garbage Collector): Trata objetos de más de 85.000 bytes con costos distintos de compactación y fragmentación.",
    "topic": "Memoria administrada y Garbage Collector",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-26",
    "collectionId": "dotnet",
    "question": "En .NET (Memoria administrada y Garbage Collector), ¿qué función técnica cumple «Pinned Object Heap (POH)»?",
    "options": [
      "Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco al operar.",
      "Aloja buffers inmovilizados para interoperabilidad nativa sin fragmentar el heap general.",
      "Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime al operar.",
      "Elige entre baja latencia en cliente o alto throughput y múltiples heaps en servidor."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pinned Object Heap (POH) (Memoria administrada y Garbage Collector): Aloja buffers inmovilizados para interoperabilidad nativa sin fragmentar el heap general.",
    "topic": "Memoria administrada y Garbage Collector",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-27",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «Modos de GC (Workstation vs Server)» en memoria administrada y garbage collector?",
    "options": [
      "Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime al operar.",
      "Libera recursos externos determinísticamente sin depender de la recolección al operar.",
      "Elige entre baja latencia en cliente o alto throughput y múltiples heaps en servidor.",
      "Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Modos de GC (Workstation vs Server) (Memoria administrada y Garbage Collector): Elige entre baja latencia en cliente o alto throughput y múltiples heaps en servidor.",
    "topic": "Memoria administrada y Garbage Collector",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-28",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «IDisposable y finalizers»?",
    "options": [
      "Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco al operar.",
      "Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime al operar.",
      "Elige entre baja latencia en cliente o alto throughput y múltiples heaps en servidor.",
      "Libera recursos externos determinísticamente sin depender de la recolección en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "IDisposable y finalizers (Memoria administrada y Garbage Collector): Libera recursos externos determinísticamente sin depender de la recolección.",
    "topic": "Memoria administrada y Garbage Collector",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-29",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «Base Class Library (BCL)»?",
    "options": [
      "Ofrece colecciones, I/O, networking, texto, tiempo y concurrencia compartidos con precisión.",
      "Maneja streams de red y sockets con lectura sin copias y backpressure estricto al operar.",
      "Accede a memoria contigua de stack, heap o memoria nativa con asignación cero al operar.",
      "Usa ConcurrentQueue, ConcurrentDictionary y Channel sin cerrojos globales en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Base Class Library (BCL) (Bibliotecas base y colecciones): Ofrece colecciones, I/O, networking, texto, tiempo y concurrencia compartidos.",
    "topic": "Bibliotecas base y colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-30",
    "collectionId": "dotnet",
    "question": "Respecto a bibliotecas base y colecciones en .NET, ¿cuál es el propósito de «Span<T>»?",
    "options": [
      "Maneja streams de red y sockets con lectura sin copias y backpressure estricto en el flujo.",
      "Accede a memoria contigua de stack, heap o memoria nativa con asignación cero al operar.",
      "Ofrece colecciones, I/O, networking, texto, tiempo y concurrencia compartidos al operar.",
      "Usa ConcurrentQueue, ConcurrentDictionary y Channel sin cerrojos globales con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Span<T> y Memory<T> (Bibliotecas base y colecciones): Accede a memoria contigua de stack, heap o memoria nativa con asignación cero.",
    "topic": "Bibliotecas base y colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-31",
    "collectionId": "dotnet",
    "question": "En .NET (Bibliotecas base y colecciones), ¿qué función técnica cumple «ArrayPool<T> y pooling de memoria»?",
    "options": [
      "Maneja streams de red y sockets con lectura sin copias y backpressure estricto en el flujo.",
      "Ofrece colecciones, I/O, networking, texto, tiempo y concurrencia compartidos al operar.",
      "Reutiliza buffers de arreglos grandes para eliminar presión sobre el GC de forma segura.",
      "Accede a memoria contigua de stack, heap o memoria nativa con asignación cero al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ArrayPool<T> y pooling de memoria (Bibliotecas base y colecciones): Reutiliza buffers de arreglos grandes para eliminar presión sobre el GC.",
    "topic": "Bibliotecas base y colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-32",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «System.IO.Pipelines» en bibliotecas base y colecciones?",
    "options": [
      "Ofrece colecciones, I/O, networking, texto, tiempo y concurrencia compartidos con precisión.",
      "Accede a memoria contigua de stack, heap o memoria nativa con asignación cero al evaluar.",
      "Usa ConcurrentQueue, ConcurrentDictionary y Channel sin cerrojos globales de forma clara.",
      "Maneja streams de red y sockets con lectura sin copias y backpressure estricto al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "System.IO.Pipelines (Bibliotecas base y colecciones): Maneja streams de red y sockets con lectura sin copias y backpressure estricto.",
    "topic": "Bibliotecas base y colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-33",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «System.Text.Json y Source Generators»?",
    "options": [
      "Serializa JSON de alto rendimiento sin depender de reflexión en runtime de modo predecible.",
      "Maneja streams de red y sockets con lectura sin copias y backpressure estricto al operar.",
      "Ofrece colecciones, I/O, networking, texto, tiempo y concurrencia compartidos al operar.",
      "Accede a memoria contigua de stack, heap o memoria nativa con asignación cero al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "System.Text.Json y Source Generators (Bibliotecas base y colecciones): Serializa JSON de alto rendimiento sin depender de reflexión en runtime.",
    "topic": "Bibliotecas base y colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-34",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «Colecciones concurrentes thread-safe»?",
    "options": [
      "Maneja streams de red y sockets con lectura sin copias y backpressure estricto en el flujo.",
      "Usa ConcurrentQueue, ConcurrentDictionary y Channel sin cerrojos globales con precisión.",
      "Ofrece colecciones, I/O, networking, texto, tiempo y concurrencia compartidos al operar.",
      "Accede a memoria contigua de stack, heap o memoria nativa con asignación cero al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Colecciones concurrentes thread-safe (Bibliotecas base y colecciones): Usa ConcurrentQueue, ConcurrentDictionary y Channel sin cerrojos globales.",
    "topic": "Bibliotecas base y colecciones",
    "difficulty": "intermedio"
  },
  {
    "id": "dotnet-q-35",
    "collectionId": "dotnet",
    "question": "Respecto a inyección de dependencias y configuración en .NET, ¿cuál es el propósito de «ServiceCollection y Dependency Injection»?",
    "options": [
      "Extiende comportamiento sin acoplar clases concretas a implementaciones previas al evaluar.",
      "Resuelve dependencias registradas bajo claves específicas dentro del mismo contenedor.",
      "Construye grafos de servicios con lifetimes Singleton, Scoped y Transient con precisión.",
      "Mapea archivos de configuración a objetos con validación en arranque de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ServiceCollection y Dependency Injection (Inyección de dependencias y configuración): Construye grafos de servicios con lifetimes Singleton, Scoped y Transient.",
    "topic": "Inyección de dependencias y configuración",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-36",
    "collectionId": "dotnet",
    "question": "En .NET (Inyección de dependencias y configuración), ¿qué función técnica cumple «Options Pattern»?",
    "options": [
      "Extiende comportamiento sin acoplar clases concretas a implementaciones previas al evaluar.",
      "Resuelve dependencias registradas bajo claves específicas dentro del mismo contenedor.",
      "Construye grafos de servicios con lifetimes Singleton, Scoped y Transient con precisión.",
      "Mapea archivos de configuración a objetos con validación en arranque de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Options Pattern y validación tipada (Inyección de dependencias y configuración): Mapea archivos de configuración a objetos con validación en arranque.",
    "topic": "Inyección de dependencias y configuración",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-37",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «Configuration Providers múltiples» en inyección de dependencias y configuración?",
    "options": [
      "Fusiona JSON, variables de entorno, línea de comandos y secretos respetando las invariantes.",
      "Extiende comportamiento sin acoplar clases concretas a implementaciones previas al operar.",
      "Resuelve dependencias registradas bajo claves específicas dentro del mismo contenedor.",
      "Construye grafos de servicios con lifetimes Singleton, Scoped y Transient al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Configuration Providers múltiples (Inyección de dependencias y configuración): Fusiona JSON, variables de entorno, línea de comandos y secretos.",
    "topic": "Inyección de dependencias y configuración",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-38",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «Scopes y ciclos de vida en ASP.NET Core»?",
    "options": [
      "Extiende comportamiento sin acoplar clases concretas a implementaciones previas al evaluar.",
      "Aísla servicios por petición HTTP evitando fugas en Singletons manteniendo consistencia.",
      "Resuelve dependencias registradas bajo claves específicas dentro del mismo contenedor.",
      "Construye grafos de servicios con lifetimes Singleton, Scoped y Transient con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Scopes y ciclos de vida en ASP.NET Core (Inyección de dependencias y configuración): Aísla servicios por petición HTTP evitando fugas en Singletons.",
    "topic": "Inyección de dependencias y configuración",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-39",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «Decoradores y fábricas de servicios»?",
    "options": [
      "Resuelve dependencias registradas bajo claves específicas dentro del mismo contenedor al operar.",
      "Construye grafos de servicios con lifetimes Singleton, Scoped y Transient de forma segura.",
      "Extiende comportamiento sin acoplar clases concretas a implementaciones previas al operar.",
      "Invoca funciones C nativas mediante generadores de código sin sobrecoste de runtime al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Decoradores y fábricas de servicios (Inyección de dependencias y configuración): Extiende comportamiento sin acoplar clases concretas a implementaciones previas.",
    "topic": "Inyección de dependencias y configuración",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-40",
    "collectionId": "dotnet",
    "question": "Respecto a inyección de dependencias y configuración en .NET, ¿cuál es el propósito de «Keyed Services en .NET»?",
    "options": [
      "Extiende comportamiento sin acoplar clases concretas a implementaciones previas al operar.",
      "Construye grafos de servicios con lifetimes Singleton, Scoped y Transient en el flujo.",
      "Mapea archivos de configuración a objetos con validación en arranque dentro del flujo.",
      "Resuelve dependencias registradas bajo claves específicas dentro del mismo contenedor."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Keyed Services en .NET (Inyección de dependencias y configuración): Resuelve dependencias registradas bajo claves específicas dentro del mismo contenedor.",
    "topic": "Inyección de dependencias y configuración",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-41",
    "collectionId": "dotnet",
    "question": "En .NET (Hosting y observabilidad), ¿qué función técnica cumple «Generic Host (IHost)»?",
    "options": [
      "Coordina DI, configuración, logging y lifetime de procesos de larga duración de forma clara.",
      "Conserva templates y parámetros para consultas analíticas sin cadenas ambiguas al operar.",
      "Publica indicadores de rendimiento consumibles por herramientas externas en ejecución.",
      "Propaga TraceId y SpanId a través de llamadas HTTP y colas de mensajes de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Generic Host (IHost) (Hosting y observabilidad): Coordina DI, configuración, logging y lifetime de procesos de larga duración.",
    "topic": "Hosting y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-42",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «Logging estructurado con ILogger» en hosting y observabilidad?",
    "options": [
      "Coordina DI, configuración, logging y lifetime de procesos de larga duración de forma clara.",
      "Conserva templates y parámetros para consultas analíticas sin cadenas ambiguas al operar.",
      "Publica indicadores de rendimiento consumibles por herramientas externas de forma segura.",
      "Propaga TraceId y SpanId a través de llamadas HTTP y colas de mensajes sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Logging estructurado con ILogger (Hosting y observabilidad): Conserva templates y parámetros para consultas analíticas sin cadenas ambiguas.",
    "topic": "Hosting y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-43",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «Métricas con System.Diagnostics.Metrics»?",
    "options": [
      "Conserva templates y parámetros para consultas analíticas sin cadenas ambiguas en el flujo.",
      "Coordina DI, configuración, logging y lifetime de procesos de larga duración al evaluar.",
      "Expone contadores, histogramas y gauges exportables vía OpenTelemetry sin perder estado.",
      "Publica indicadores de rendimiento consumibles por herramientas externas de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Métricas con System.Diagnostics.Metrics (Hosting y observabilidad): Expone contadores, histogramas y gauges exportables vía OpenTelemetry.",
    "topic": "Hosting y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-44",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «Distributed tracing con Activity»?",
    "options": [
      "Conserva templates y parámetros para consultas analíticas sin cadenas ambiguas en el flujo.",
      "Coordina DI, configuración, logging y lifetime de procesos de larga duración al evaluar.",
      "Publica indicadores de rendimiento consumibles por herramientas externas de forma clara.",
      "Propaga TraceId y SpanId a través de llamadas HTTP y colas de mensajes dentro del flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Distributed tracing con Activity (Hosting y observabilidad): Propaga TraceId y SpanId a través de llamadas HTTP y colas de mensajes.",
    "topic": "Hosting y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-45",
    "collectionId": "dotnet",
    "question": "Respecto a hosting y observabilidad en .NET, ¿cuál es el propósito de «Health Checks para contenedores»?",
    "options": [
      "Distingue entre liveness y readiness en Kubernetes dentro del ciclo operativo del sistema.",
      "Conserva templates y parámetros para consultas analíticas sin cadenas ambiguas al operar.",
      "Coordina DI, configuración, logging y lifetime de procesos de larga duración al operar.",
      "Publica indicadores de rendimiento consumibles por herramientas externas en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Health Checks para contenedores (Hosting y observabilidad): Distingue entre liveness (vivo) y readiness (listo para tráfico) en Kubernetes.",
    "topic": "Hosting y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-46",
    "collectionId": "dotnet",
    "question": "En .NET (Hosting y observabilidad), ¿qué función técnica cumple «EventCounters y diagnósticos ligeros»?",
    "options": [
      "Conserva templates y parámetros para consultas analíticas sin cadenas ambiguas en el flujo.",
      "Publica indicadores de rendimiento consumibles por herramientas externas de forma clara.",
      "Coordina DI, configuración, logging y lifetime de procesos de larga duración al evaluar.",
      "Propaga TraceId y SpanId a través de llamadas HTTP y colas de mensajes dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "EventCounters y diagnósticos ligeros (Hosting y observabilidad): Publica indicadores de rendimiento consumibles por herramientas externas.",
    "topic": "Hosting y observabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-47",
    "collectionId": "dotnet",
    "question": "Dentro de .NET, ¿cómo opera el mecanismo de «Framework-dependent vs Self-contained» en publicación, empaquetado e interoperabilidad?",
    "options": [
      "Expone bibliotecas .NET como DLLs nativas consumibles por C/C++ u otros lenguajes al operar.",
      "Reduce el tamaño del binario eliminando código no alcanzable de forma estricta al operar.",
      "Elige depender de un runtime instalado o incluirlo autocontenido sin degradar el flujo.",
      "Invoca funciones C nativas mediante generadores de código sin sobrecoste de runtime."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Framework-dependent vs Self-contained (Publicación, empaquetado e interoperabilidad): Elige depender de un runtime instalado o incluirlo autocontenido.",
    "topic": "Publicación, empaquetado e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-48",
    "collectionId": "dotnet",
    "question": "Al trabajar con .NET, ¿qué responsabilidad define a «Trimming y Single-File publishing»?",
    "options": [
      "Invoca funciones C nativas mediante generadores de código sin sobrecoste de runtime al operar.",
      "Expone bibliotecas .NET como DLLs nativas consumibles por C/C++ u otros lenguajes al operar.",
      "Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación al operar.",
      "Reduce el tamaño del binario eliminando código no alcanzable de forma estricta al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Trimming y Single-File publishing (Publicación, empaquetado e interoperabilidad): Reduce el tamaño del binario eliminando código no alcanzable de forma estricta.",
    "topic": "Publicación, empaquetado e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-49",
    "collectionId": "dotnet",
    "question": "En la arquitectura de .NET, ¿qué caracteriza técnicamente a «P/Invoke y LibraryImport»?",
    "options": [
      "Invoca funciones C nativas mediante generadores de código sin sobrecoste de runtime.",
      "Reduce el tamaño del binario eliminando código no alcanzable de forma estricta.",
      "Expone bibliotecas .NET como DLLs nativas consumibles por C/C++ u otros lenguajes.",
      "Elige depender de un runtime instalado o incluirlo autocontenido dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "P/Invoke y LibraryImport (Publicación, empaquetado e interoperabilidad): Invoca funciones C nativas mediante generadores de código sin sobrecoste de runtime.",
    "topic": "Publicación, empaquetado e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "dotnet-q-50",
    "collectionId": "dotnet",
    "question": "Respecto a publicación, empaquetado e interoperabilidad en .NET, ¿cuál es el propósito de «COM Interop»?",
    "options": [
      "Reduce el tamaño del binario eliminando código no alcanzable de forma estricta al operar.",
      "Expone bibliotecas .NET como DLLs nativas consumibles por C/C++ u otros lenguajes.",
      "Invoca funciones C nativas mediante generadores de código sin sobrecoste de runtime.",
      "Elige depender de un runtime instalado o incluirlo autocontenido dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "COM Interop y Native AOT exports (Publicación, empaquetado e interoperabilidad): Expone bibliotecas .NET como DLLs nativas consumibles por C/C++ u otros lenguajes.",
    "topic": "Publicación, empaquetado e interoperabilidad",
    "difficulty": "avanzado"
  }
];
