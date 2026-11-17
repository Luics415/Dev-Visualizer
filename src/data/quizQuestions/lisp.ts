import type { QuizQuestion } from "@/data/quizTypes";

export const lispQuestions: QuizQuestion[] = [
  {
    "id": "lisp-q-01",
    "collectionId": "lisp",
    "question": "En Lisp (Common Lisp Object System), ¿qué función técnica cumple «Slot allocation protocol»?",
    "options": [
      "Controla si el almacenamiento de un atributo pertenece a cada instancia o se comparte en la clase.",
      "Actualiza en vivo las instancias existentes cuando cambia la estructura de su clase en memoria.",
      "Declara múltiples rutas de recuperación locales con reportes claros e interfaz programática.",
      "Agrupa verificaciones en suites jerárquicas ejecutables desde el entorno interactivo o lote."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Slot allocation protocol (Common Lisp Object System): Controla si el almacenamiento de un atributo pertenece a cada instancia o se comparte en la clase.",
    "topic": "Common Lisp Object System",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-02",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Class redefinition» en common lisp object system?",
    "options": [
      "Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables al operar.",
      "Actualiza en vivo las instancias existentes cuando cambia la estructura de su clase en memoria.",
      "Aísla ligaduras especiales en la pila de cada hilo sin alterar el valor global compartido al operar.",
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Class redefinition (Common Lisp Object System): Actualiza en vivo las instancias existentes cuando cambia la estructura de su clase en memoria.",
    "topic": "Common Lisp Object System",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-03",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Condition hierarchy»?",
    "options": [
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado.",
      "Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles.",
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos.",
      "Construye y combina rutas de archivos abstrayendo diferencias entre sistemas operativos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Condition hierarchy (Condiciones y recuperación): Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos.",
    "topic": "Condiciones y recuperación",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-04",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «Handlers dinámicos»?",
    "options": [
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos al operar.",
      "Garantiza la ejecución de código de limpieza aunque el control salga por salto o condición.",
      "Declara múltiples rutas de recuperación locales con reportes claros e interfaz programática.",
      "Intercepta condiciones señaladas sin desenrollar la pila de llamadas donde ocurrió el evento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Handlers dinámicos (Condiciones y recuperación): Intercepta condiciones señaladas sin desenrollar la pila de llamadas donde ocurrió el evento.",
    "topic": "Condiciones y recuperación",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-05",
    "collectionId": "lisp",
    "question": "Respecto a condiciones y recuperación en Lisp, ¿cuál es el propósito de «Restart protocols»?",
    "options": [
      "Ofrece puntos de recuperación con nombre en el sitio del fallo para que un manejador los invoque.",
      "Garantiza la ejecución de código de limpieza aunque el control salga por salto o condición.",
      "Declara múltiples rutas de recuperación locales con reportes claros e interfaz programática.",
      "Intercepta condiciones señaladas sin desenrollar la pila de llamadas donde ocurrió el evento."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Restart protocols (Condiciones y recuperación): Ofrece puntos de recuperación con nombre en el sitio del fallo para que un manejador los invoque.",
    "topic": "Condiciones y recuperación",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-06",
    "collectionId": "lisp",
    "question": "En Lisp (Condiciones y recuperación), ¿qué función técnica cumple «Unwind-protect»?",
    "options": [
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos al operar.",
      "Garantiza la ejecución de código de limpieza aunque el control salga por salto o condición.",
      "Declara múltiples rutas de recuperación locales con reportes claros e interfaz programática.",
      "Intercepta condiciones señaladas sin desenrollar la pila de llamadas donde ocurrió el evento."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Unwind-protect (Condiciones y recuperación): Garantiza la ejecución de código de limpieza aunque el control salga por salto o condición.",
    "topic": "Condiciones y recuperación",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-07",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Reinicio interactivo en producción» en condiciones y recuperación?",
    "options": [
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos al operar.",
      "Garantiza la ejecución de código de limpieza aunque el control salga por salto o condición.",
      "Permite elegir una estrategia de recuperación o corregir estado sin abortar el proceso activo.",
      "Declara múltiples rutas de recuperación locales con reportes claros e interfaz programática."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reinicio interactivo en producción (Condiciones y recuperación): Permite elegir una estrategia de recuperación o corregir estado sin abortar el proceso activo.",
    "topic": "Condiciones y recuperación",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-08",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Restart-case orchestration»?",
    "options": [
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos al operar.",
      "Garantiza la ejecución de código de limpieza aunque el control salga por salto o condición.",
      "Intercepta condiciones señaladas sin desenrollar la pila de llamadas donde ocurrió el evento.",
      "Declara múltiples rutas de recuperación locales con reportes claros e interfaz programática."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Restart-case orchestration (Condiciones y recuperación): Declara múltiples rutas de recuperación locales con reportes claros e interfaz programática.",
    "topic": "Condiciones y recuperación",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-09",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «Declarations de tipos»?",
    "options": [
      "Informa al compilador los tipos esperados para omitir verificaciones dinámicas y usar primitivas.",
      "Muestra las instrucciones nativas de máquina emitidas por el compilador para una función dada.",
      "Mide qué funciones reservan más celdas de memoria en el heap durante una carga representativa.",
      "Verifica que las llamadas en posición final reutilicen el marco de pila sin crecer en memoria."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Declarations de tipos (Compilador y rendimiento): Informa al compilador los tipos esperados para omitir verificaciones dinámicas y usar primitivas.",
    "topic": "Compilador y rendimiento",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-10",
    "collectionId": "lisp",
    "question": "Respecto a compilador y rendimiento en Lisp, ¿cuál es el propósito de «Compiler macros»?",
    "options": [
      "Muestra las instrucciones nativas de máquina emitidas por el compilador para una función dada al operar.",
      "Transforma llamadas a funciones específicas en tiempo de compilación sin perder su valor funcional.",
      "Mide qué funciones reservan más celdas de memoria en el heap durante una carga representativa al operar.",
      "Verifica que las llamadas en posición final reutilicen el marco de pila sin crecer en memoria al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Compiler macros (Compilador y rendimiento): Transforma llamadas a funciones específicas en tiempo de compilación sin perder su valor funcional.",
    "topic": "Compilador y rendimiento",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-11",
    "collectionId": "lisp",
    "question": "En Lisp (Compilador y rendimiento), ¿qué función técnica cumple «Disassembly»?",
    "options": [
      "Mide qué funciones reservan más celdas de memoria en el heap durante una carga representativa.",
      "Verifica que las llamadas en posición final reutilicen el marco de pila sin crecer en memoria.",
      "Muestra las instrucciones nativas de máquina emitidas por el compilador para una función dada.",
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Disassembly (Compilador y rendimiento): Muestra las instrucciones nativas de máquina emitidas por el compilador para una función dada.",
    "topic": "Compilador y rendimiento",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-12",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Optimización por safety y speed» en compilador y rendimiento?",
    "options": [
      "Muestra las instrucciones nativas de máquina emitidas por el compilador para una función dada al operar.",
      "Mide qué funciones reservan más celdas de memoria en el heap durante una carga representativa.",
      "Verifica que las llamadas en posición final reutilicen el marco de pila sin crecer en memoria.",
      "Ajusta políticas locales del compilador equilibrando chequeos de seguridad, depuración y rapidez."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Optimización por safety y speed (Compilador y rendimiento): Ajusta políticas locales del compilador equilibrando chequeos de seguridad, depuración y rapidez.",
    "topic": "Compilador y rendimiento",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-13",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Profiling de asignaciones»?",
    "options": [
      "Mide qué funciones reservan más celdas de memoria en el heap durante una carga representativa.",
      "Muestra las instrucciones nativas de máquina emitidas por el compilador para una función dada.",
      "Verifica que las llamadas en posición final reutilicen el marco de pila sin crecer en memoria.",
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Profiling de asignaciones (Compilador y rendimiento): Mide qué funciones reservan más celdas de memoria en el heap durante una carga representativa.",
    "topic": "Compilador y rendimiento",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-14",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «Type proclamations across compilation units»?",
    "options": [
      "Muestra las instrucciones nativas de máquina emitidas por el compilador para una función dada al operar.",
      "Registra firmas globales de funciones para validar llamadas entre archivos compilados por separado.",
      "Mide qué funciones reservan más celdas de memoria en el heap durante una carga representativa al operar.",
      "Verifica que las llamadas en posición final reutilicen el marco de pila sin crecer en memoria al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Type proclamations across compilation units (Compilador y rendimiento): Registra firmas globales de funciones para validar llamadas entre archivos compilados por separado.",
    "topic": "Compilador y rendimiento",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-15",
    "collectionId": "lisp",
    "question": "Respecto a compilador y rendimiento en Lisp, ¿cuál es el propósito de «Tail-call diagnostics»?",
    "options": [
      "Muestra las instrucciones nativas de máquina emitidas por el compilador para una función dada.",
      "Mide qué funciones reservan más celdas de memoria en el heap durante una carga representativa.",
      "Verifica que las llamadas en posición final reutilicen el marco de pila sin crecer en memoria.",
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tail-call diagnostics (Compilador y rendimiento): Verifica que las llamadas en posición final reutilicen el marco de pila sin crecer en memoria.",
    "topic": "Compilador y rendimiento",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-16",
    "collectionId": "lisp",
    "question": "En Lisp (Testing y calidad), ¿qué función técnica cumple «Pruebas unitarias con FiveAM»?",
    "options": [
      "Prueba que las macros produzcan exactamente la forma sintáctica esperada antes de evaluarla.",
      "Detecta variables sin usar, patrones frágiles y desviaciones de estilo en formas simbólicas.",
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos al operar.",
      "Agrupa verificaciones en suites jerárquicas ejecutables desde el entorno interactivo o lote."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pruebas unitarias con FiveAM (Testing y calidad): Agrupa verificaciones en suites jerárquicas ejecutables desde el entorno interactivo o lote.",
    "topic": "Testing y calidad",
    "difficulty": "básico"
  },
  {
    "id": "lisp-q-17",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Property-based testing» en testing y calidad?",
    "options": [
      "Comprueba propiedades generales generando estructuras simbólicas y numéricas de forma aleatoria.",
      "Agrupa verificaciones en suites jerárquicas ejecutables desde el entorno interactivo o lote.",
      "Prueba que las macros produzcan exactamente la forma sintáctica esperada antes de evaluarla.",
      "Detecta variables sin usar, patrones frágiles y desviaciones de estilo en formas simbólicas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Property-based testing (Testing y calidad): Comprueba propiedades generales generando estructuras simbólicas y numéricas de forma aleatoria.",
    "topic": "Testing y calidad",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-18",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Expansiones verificables»?",
    "options": [
      "Agrupa verificaciones en suites jerárquicas ejecutables desde el entorno interactivo o lote.",
      "Prueba que las macros produzcan exactamente la forma sintáctica esperada antes de evaluarla.",
      "Detecta variables sin usar, patrones frágiles y desviaciones de estilo en formas simbólicas.",
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Expansiones verificables (Testing y calidad): Prueba que las macros produzcan exactamente la forma sintáctica esperada antes de evaluarla.",
    "topic": "Testing y calidad",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-19",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «Fixtures de imágenes Lisp»?",
    "options": [
      "Agrupa verificaciones en suites jerárquicas ejecutables desde el entorno interactivo o lote al operar.",
      "Prueba que las macros produzcan exactamente la forma sintáctica esperada antes de evaluarla al operar.",
      "Prepara estados limpios y aislados dentro de una imagen en memoria para correr baterías de prueba.",
      "Detecta variables sin usar, patrones frágiles y desviaciones de estilo en formas simbólicas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fixtures de imágenes Lisp (Testing y calidad): Prepara estados limpios y aislados dentro de una imagen en memoria para correr baterías de prueba.",
    "topic": "Testing y calidad",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-20",
    "collectionId": "lisp",
    "question": "Respecto a testing y calidad en Lisp, ¿cuál es el propósito de «Análisis estático con linter»?",
    "options": [
      "Agrupa verificaciones en suites jerárquicas ejecutables desde el entorno interactivo o lote.",
      "Prueba que las macros produzcan exactamente la forma sintáctica esperada antes de evaluarla.",
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos al operar.",
      "Detecta variables sin usar, patrones frágiles y desviaciones de estilo en formas simbólicas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Análisis estático con linter (Testing y calidad): Detecta variables sin usar, patrones frágiles y desviaciones de estilo en formas simbólicas.",
    "topic": "Testing y calidad",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-21",
    "collectionId": "lisp",
    "question": "En Lisp (Testing y calidad), ¿qué función técnica cumple «Random-state reproducibility»?",
    "options": [
      "Serializa el estado exacto del generador aleatorio para repetir una prueba fallida con precisión.",
      "Agrupa verificaciones en suites jerárquicas ejecutables desde el entorno interactivo o lote.",
      "Prueba que las macros produzcan exactamente la forma sintáctica esperada antes de evaluarla.",
      "Detecta variables sin usar, patrones frágiles y desviaciones de estilo en formas simbólicas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Random-state reproducibility (Testing y calidad): Serializa el estado exacto del generador aleatorio para repetir una prueba fallida con precisión.",
    "topic": "Testing y calidad",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-22",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Threads por implementación» en concurrencia?",
    "options": [
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado al operar.",
      "Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables.",
      "Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles.",
      "Aísla ligaduras especiales en la pila de cada hilo sin alterar el valor global compartido."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Threads por implementación (Concurrencia): Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables.",
    "topic": "Concurrencia",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-23",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Mutexes y semáforos»?",
    "options": [
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado al operar.",
      "Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles al operar.",
      "Coordina el acceso exclusivo o acotado a estructuras mutables compartidas entre varios hilos.",
      "Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mutexes y semáforos (Concurrencia): Coordina el acceso exclusivo o acotado a estructuras mutables compartidas entre varios hilos.",
    "topic": "Concurrencia",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-24",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «Variables dinámicas por thread»?",
    "options": [
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado al operar.",
      "Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles.",
      "Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables.",
      "Aísla ligaduras especiales en la pila de cada hilo sin alterar el valor global compartido."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Variables dinámicas por thread (Concurrencia): Aísla ligaduras especiales en la pila de cada hilo sin alterar el valor global compartido.",
    "topic": "Concurrencia",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-25",
    "collectionId": "lisp",
    "question": "Respecto a concurrencia en Lisp, ¿cuál es el propósito de «Mailbox y actores»?",
    "options": [
      "Comunica tareas concurrentes mediante colas de mensajes inmutables sin compartir memoria directa al operar.",
      "Divide mapeos y reducciones sobre listas o vectores entre un grupo de trabajadores activos.",
      "Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables al operar.",
      "Aísla ligaduras especiales en la pila de cada hilo sin alterar el valor global compartido al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Mailbox y actores (Concurrencia): Comunica tareas concurrentes mediante colas de mensajes inmutables sin compartir memoria directa.",
    "topic": "Concurrencia",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-26",
    "collectionId": "lisp",
    "question": "En Lisp (Concurrencia), ¿qué función técnica cumple «Procesamiento paralelo de secuencias»?",
    "options": [
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado al operar.",
      "Divide mapeos y reducciones sobre listas o vectores entre un grupo de trabajadores activos.",
      "Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles.",
      "Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Procesamiento paralelo de secuencias (Concurrencia): Divide mapeos y reducciones sobre listas o vectores entre un grupo de trabajadores activos.",
    "topic": "Concurrencia",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-27",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Condition variables» en concurrencia?",
    "options": [
      "Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles.",
      "Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables.",
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado.",
      "Aísla ligaduras especiales en la pila de cada hilo sin alterar el valor global compartido."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Condition variables (Concurrencia): Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado.",
    "topic": "Concurrencia",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-28",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Atomic memory operations»?",
    "options": [
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado.",
      "Abstrae la creación y gestión de hilos nativos del sistema mediante bibliotecas portables.",
      "Aísla ligaduras especiales en la pila de cada hilo sin alterar el valor global compartido.",
      "Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Atomic memory operations (Concurrencia): Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles.",
    "topic": "Concurrencia",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-29",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «Pathnames portables»?",
    "options": [
      "Construye y combina rutas de archivos abstrayendo diferencias entre sistemas operativos al operar.",
      "Persiste grafos de instancias directamente en disco manteniendo identidad y transacciones.",
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos.",
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pathnames portables (Persistencia y datos): Construye y combina rutas de archivos abstrayendo diferencias entre sistemas operativos.",
    "topic": "Persistencia y datos",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-30",
    "collectionId": "lisp",
    "question": "Respecto a persistencia y datos en Lisp, ¿cuál es el propósito de «Streams binarios»?",
    "options": [
      "Construye y combina rutas de archivos abstrayendo diferencias entre sistemas operativos al operar.",
      "Lee y escribe secuencias de octetos tipados directamente hacia archivos o conexiones de red.",
      "Persiste grafos de instancias directamente en disco manteniendo identidad y transacciones.",
      "Convierte estructuras de datos e instancias en representaciones legibles o binarias seguras."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Streams binarios (Persistencia y datos): Lee y escribe secuencias de octetos tipados directamente hacia archivos o conexiones de red.",
    "topic": "Persistencia y datos",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-31",
    "collectionId": "lisp",
    "question": "En Lisp (Persistencia y datos), ¿qué función técnica cumple «Serialización de formas»?",
    "options": [
      "Construye y combina rutas de archivos abstrayendo diferencias entre sistemas operativos al operar.",
      "Persiste grafos de instancias directamente en disco manteniendo identidad y transacciones.",
      "Convierte estructuras de datos e instancias en representaciones legibles o binarias seguras.",
      "Lee y escribe secuencias de octetos tipados directamente hacia archivos o conexiones de red."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Serialización de formas (Persistencia y datos): Convierte estructuras de datos e instancias en representaciones legibles o binarias seguras.",
    "topic": "Persistencia y datos",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-32",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Bases de datos de objetos» en persistencia y datos?",
    "options": [
      "Construye y combina rutas de archivos abstrayendo diferencias entre sistemas operativos al operar.",
      "Lee y escribe secuencias de octetos tipados directamente hacia archivos o conexiones de red.",
      "Convierte estructuras de datos e instancias en representaciones legibles o binarias seguras.",
      "Persiste grafos de instancias directamente en disco manteniendo identidad y transacciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Bases de datos de objetos (Persistencia y datos): Persiste grafos de instancias directamente en disco manteniendo identidad y transacciones.",
    "topic": "Persistencia y datos",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-33",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Transacciones desde Lisp»?",
    "options": [
      "Envuelve operaciones relacionales o de objetos asegurando confirmación o reversión automática.",
      "Construye y combina rutas de archivos abstrayendo diferencias entre sistemas operativos.",
      "Persiste grafos de instancias directamente en disco manteniendo identidad y transacciones.",
      "Lee y escribe secuencias de octetos tipados directamente hacia archivos o conexiones de red."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Transacciones desde Lisp (Persistencia y datos): Envuelve operaciones relacionales o de objetos asegurando confirmación o reversión automática.",
    "topic": "Persistencia y datos",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-34",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «External formats and transcoding»?",
    "options": [
      "Lee y escribe secuencias de octetos tipados directamente hacia archivos o conexiones de red al operar.",
      "Controla la codificación de caracteres y saltos de línea al cruzar fronteras de entrada y salida.",
      "Convierte estructuras de datos e instancias en representaciones legibles o binarias seguras al operar.",
      "Persiste grafos de instancias directamente en disco manteniendo identidad y transacciones al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "External formats and transcoding (Persistencia y datos): Controla la codificación de caracteres y saltos de línea al cruzar fronteras de entrada y salida.",
    "topic": "Persistencia y datos",
    "difficulty": "intermedio"
  },
  {
    "id": "lisp-q-35",
    "collectionId": "lisp",
    "question": "Respecto a interoperabilidad en Lisp, ¿cuál es el propósito de «CFFI»?",
    "options": [
      "Implementa clientes y servidores sobre sockets binarios o textuales con manejo de errores al operar.",
      "Reserva, traduce y libera bloques fuera del recolector evitando fugas y punteros colgantes.",
      "Define tipos y funciones extranjeras de manera portable para enlazar bibliotecas nativas en C.",
      "Alinea campos de estructuras y registros según las reglas binarias de la plataforma nativa."
    ],
    "correctAnswerIndex": 2,
    "explanation": "CFFI (Interoperabilidad): Define tipos y funciones extranjeras de manera portable para enlazar bibliotecas nativas en C.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-36",
    "collectionId": "lisp",
    "question": "En Lisp (Interoperabilidad), ¿qué función técnica cumple «Callbacks nativos»?",
    "options": [
      "Implementa clientes y servidores sobre sockets binarios o textuales con manejo de errores al operar.",
      "Reserva, traduce y libera bloques fuera del recolector evitando fugas y punteros colgantes.",
      "Alinea campos de estructuras y registros según las reglas binarias de la plataforma nativa.",
      "Expone funciones compiladas como punteros invocables desde bibliotecas externas escritas en C."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Callbacks nativos (Interoperabilidad): Expone funciones compiladas como punteros invocables desde bibliotecas externas escritas en C.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-37",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Gestión de memoria extranjera» en interoperabilidad?",
    "options": [
      "Reserva, traduce y libera bloques fuera del recolector evitando fugas y punteros colgantes al operar.",
      "Implementa clientes y servidores sobre sockets binarios o textuales con manejo de errores.",
      "Alinea campos de estructuras y registros según las reglas binarias de la plataforma nativa.",
      "Asocia liberadores seguros o ámbitos deterministas a recursos nativos externos al recolector."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Gestión de memoria extranjera (Interoperabilidad): Reserva, traduce y libera bloques fuera del recolector evitando fugas y punteros colgantes.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-38",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Protocolos de red»?",
    "options": [
      "Reserva, traduce y libera bloques fuera del recolector evitando fugas y punteros colgantes.",
      "Implementa clientes y servidores sobre sockets binarios o textuales con manejo de errores.",
      "Alinea campos de estructuras y registros según las reglas binarias de la plataforma nativa.",
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Protocolos de red (Interoperabilidad): Implementa clientes y servidores sobre sockets binarios o textuales con manejo de errores.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-39",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «Embebido del runtime»?",
    "options": [
      "Implementa clientes y servidores sobre sockets binarios o textuales con manejo de errores al operar.",
      "Reserva, traduce y libera bloques fuera del recolector evitando fugas y punteros colgantes.",
      "Integra el motor compilado como biblioteca invocable dentro de una aplicación anfitriona en C.",
      "Alinea campos de estructuras y registros según las reglas binarias de la plataforma nativa."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Embebido del runtime (Interoperabilidad): Integra el motor compilado como biblioteca invocable dentro de una aplicación anfitriona en C.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-40",
    "collectionId": "lisp",
    "question": "Respecto a interoperabilidad en Lisp, ¿cuál es el propósito de «ABI alignment and calling conventions»?",
    "options": [
      "Implementa clientes y servidores sobre sockets binarios o textuales con manejo de errores al operar.",
      "Reserva, traduce y libera bloques fuera del recolector evitando fugas y punteros colgantes.",
      "Asocia liberadores seguros o ámbitos deterministas a recursos nativos externos al recolector.",
      "Alinea campos de estructuras y registros según las reglas binarias de la plataforma nativa."
    ],
    "correctAnswerIndex": 3,
    "explanation": "ABI alignment and calling conventions (Interoperabilidad): Alinea campos de estructuras y registros según las reglas binarias de la plataforma nativa.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-41",
    "collectionId": "lisp",
    "question": "En Lisp (Interoperabilidad), ¿qué función técnica cumple «Foreign resource finalization»?",
    "options": [
      "Asocia liberadores seguros o ámbitos deterministas a recursos nativos externos al recolector.",
      "Implementa clientes y servidores sobre sockets binarios o textuales con manejo de errores.",
      "Reserva, traduce y libera bloques fuera del recolector evitando fugas y punteros colgantes.",
      "Alinea campos de estructuras y registros según las reglas binarias de la plataforma nativa."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Foreign resource finalization (Interoperabilidad): Asocia liberadores seguros o ámbitos deterministas a recursos nativos externos al recolector.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-42",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Lectura de formas no confiables» en seguridad del lenguaje extensible?",
    "options": [
      "Desactiva el despacho de evaluación durante la lectura para neutralizar cargas maliciosas al operar.",
      "Restringe el lector al procesar entradas externas para impedir ejecución o internado masivo.",
      "Impone topes de tiempo, profundidad de pila y memoria a cómputos originados por peticiones.",
      "Acota los símbolos y funciones accesibles cuando se interpretan expresiones de configuración."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Lectura de formas no confiables (Seguridad del lenguaje extensible): Restringe el lector al procesar entradas externas para impedir ejecución o internado masivo.",
    "topic": "Seguridad del lenguaje extensible",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-43",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Evaluación restringida»?",
    "options": [
      "Desactiva el despacho de evaluación durante la lectura para neutralizar cargas maliciosas al operar.",
      "Impone topes de tiempo, profundidad de pila y memoria a cómputos originados por peticiones.",
      "Acota los símbolos y funciones accesibles cuando se interpretan expresiones de configuración.",
      "Restringe el lector al procesar entradas externas para impedir ejecución o internado masivo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Evaluación restringida (Seguridad del lenguaje extensible): Acota los símbolos y funciones accesibles cuando se interpretan expresiones de configuración.",
    "topic": "Seguridad del lenguaje extensible",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-44",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «Validación de macros»?",
    "options": [
      "Desactiva el despacho de evaluación durante la lectura para neutralizar cargas maliciosas al operar.",
      "Impone topes de tiempo, profundidad de pila y memoria a cómputos originados por peticiones.",
      "Restringe el lector al procesar entradas externas para impedir ejecución o internado masivo.",
      "Verifica la forma y tipos de los argumentos antes de expandir código generado en compilación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Validación de macros (Seguridad del lenguaje extensible): Verifica la forma y tipos de los argumentos antes de expandir código generado en compilación.",
    "topic": "Seguridad del lenguaje extensible",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-45",
    "collectionId": "lisp",
    "question": "Respecto a seguridad del lenguaje extensible en Lisp, ¿cuál es el propósito de «Límites de recursos»?",
    "options": [
      "Impone topes de tiempo, profundidad de pila y memoria a cómputos originados por peticiones al operar.",
      "Desactiva el despacho de evaluación durante la lectura para neutralizar cargas maliciosas.",
      "Restringe el lector al procesar entradas externas para impedir ejecución o internado masivo.",
      "Acota los símbolos y funciones accesibles cuando se interpretan expresiones de configuración."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Límites de recursos (Seguridad del lenguaje extensible): Impone topes de tiempo, profundidad de pila y memoria a cómputos originados por peticiones.",
    "topic": "Seguridad del lenguaje extensible",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-46",
    "collectionId": "lisp",
    "question": "En Lisp (Seguridad del lenguaje extensible), ¿qué función técnica cumple «Cadena de suministro de Quicklisp»?",
    "options": [
      "Desactiva el despacho de evaluación durante la lectura para neutralizar cargas maliciosas al operar.",
      "Audita el origen, firmas y versiones fijadas de las distribuciones descargadas en el proyecto.",
      "Impone topes de tiempo, profundidad de pila y memoria a cómputos originados por peticiones.",
      "Restringe el lector al procesar entradas externas para impedir ejecución o internado masivo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cadena de suministro de Quicklisp (Seguridad del lenguaje extensible): Audita el origen, firmas y versiones fijadas de las distribuciones descargadas en el proyecto.",
    "topic": "Seguridad del lenguaje extensible",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-47",
    "collectionId": "lisp",
    "question": "Dentro de Lisp, ¿cómo opera el mecanismo de «Package locks» en seguridad del lenguaje extensible?",
    "options": [
      "Desactiva el despacho de evaluación durante la lectura para neutralizar cargas maliciosas al operar.",
      "Impone topes de tiempo, profundidad de pila y memoria a cómputos originados por peticiones.",
      "Bloquea paquetes del sistema o de dominio para impedir redefiniciones accidentales de símbolos.",
      "Restringe el lector al procesar entradas externas para impedir ejecución o internado masivo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Package locks (Seguridad del lenguaje extensible): Bloquea paquetes del sistema o de dominio para impedir redefiniciones accidentales de símbolos.",
    "topic": "Seguridad del lenguaje extensible",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-48",
    "collectionId": "lisp",
    "question": "Al trabajar con Lisp, ¿qué responsabilidad define a «Disabling read-time evaluation»?",
    "options": [
      "Impone topes de tiempo, profundidad de pila y memoria a cómputos originados por peticiones.",
      "Restringe el lector al procesar entradas externas para impedir ejecución o internado masivo.",
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos.",
      "Desactiva el despacho de evaluación durante la lectura para neutralizar cargas maliciosas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Disabling read-time evaluation (Seguridad del lenguaje extensible): Desactiva el despacho de evaluación durante la lectura para neutralizar cargas maliciosas.",
    "topic": "Seguridad del lenguaje extensible",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-49",
    "collectionId": "lisp",
    "question": "En la arquitectura de Lisp, ¿qué caracteriza técnicamente a «ASDF systems»?",
    "options": [
      "Declara componentes, orden de compilación y dependencias entre módulos de un sistema completo.",
      "Gestiona colecciones versionadas de bibliotecas compatibles instalables con un solo comando.",
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado.",
      "Actualiza lugares de memoria e incrementos compartidos mediante primitivas indivisibles."
    ],
    "correctAnswerIndex": 0,
    "explanation": "ASDF systems (Entrega y operación): Declara componentes, orden de compilación y dependencias entre módulos de un sistema completo.",
    "topic": "Entrega y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "lisp-q-50",
    "collectionId": "lisp",
    "question": "Respecto a entrega y operación en Lisp, ¿cuál es el propósito de «Quicklisp dist»?",
    "options": [
      "Declara componentes, orden de compilación y dependencias entre módulos de un sistema completo.",
      "Gestiona colecciones versionadas de bibliotecas compatibles instalables con un solo comando.",
      "Organiza errores, advertencias y notificaciones en una taxonomía extensible de objetos al operar.",
      "Suspende un hilo liberando su cerrojo hasta que otro hilo notifique un cambio de estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Quicklisp dist (Entrega y operación): Gestiona colecciones versionadas de bibliotecas compatibles instalables con un solo comando.",
    "topic": "Entrega y operación",
    "difficulty": "avanzado"
  }
];
