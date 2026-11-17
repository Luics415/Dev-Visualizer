import type { QuizQuestion } from "@/data/quizTypes";

export const assemblyQuestions: QuizQuestion[] = [
  {
    "id": "assembly-q-01",
    "collectionId": "assembly",
    "question": "En Ensamblador (Pila y marcos de llamada), ¿qué función técnica cumple «Stack pointer»?",
    "options": [
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia.",
      "Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Stack pointer (Pila y marcos de llamada): Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local.",
    "topic": "Pila y marcos de llamada",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-02",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «Frame pointer» en pila y marcos de llamada?",
    "options": [
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia al operar.",
      "Mantiene una referencia fija dentro del marco activo para localizar argumentos y variables.",
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Frame pointer (Pila y marcos de llamada): Mantiene una referencia fija dentro del marco activo para localizar argumentos y variables.",
    "topic": "Pila y marcos de llamada",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-03",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Callee-saved registers»?",
    "options": [
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia.",
      "Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Callee-saved registers (Pila y marcos de llamada): Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar.",
    "topic": "Pila y marcos de llamada",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-04",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Variadic functions»?",
    "options": [
      "Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar al operar.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia al operar.",
      "Mantiene una referencia fija dentro del marco activo para localizar argumentos y variables.",
      "Gestiona listas identificadores de argumentos combinando registros de paso y desborde en pila."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Variadic functions (Pila y marcos de llamada): Gestiona listas variables de argumentos combinando registros de paso y desborde en pila.",
    "topic": "Pila y marcos de llamada",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-05",
    "collectionId": "assembly",
    "question": "Respecto a pila y marcos de llamada en Ensamblador, ¿cuál es el propósito de «Stack unwinding»?",
    "options": [
      "Recorre hacia atrás los marcos de activación usando tablas de metadatos para manejar errores al operar.",
      "Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia al operar.",
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Stack unwinding (Pila y marcos de llamada): Recorre hacia atrás los marcos de activación usando tablas de metadatos para manejar errores.",
    "topic": "Pila y marcos de llamada",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-06",
    "collectionId": "assembly",
    "question": "En Ensamblador (Pila y marcos de llamada), ¿qué función técnica cumple «Red zone»?",
    "options": [
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia al operar.",
      "Permite a funciones hoja usar bytes debajo del puntero de pila sin ajustarlo explícitamente.",
      "Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar.",
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Red zone (Pila y marcos de llamada): Permite a funciones hoja usar bytes debajo del puntero de pila sin ajustarlo explícitamente.",
    "topic": "Pila y marcos de llamada",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-07",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «Shadow space» en pila y marcos de llamada?",
    "options": [
      "Mantiene una referencia fija dentro del marco activo para localizar argumentos y variables al operar.",
      "Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar al operar.",
      "Reserva cuatro ranuras contiguas en la pila del llamador para que el invocado vuelque registros.",
      "Permite a funciones hoja usar bytes debajo del puntero de pila sin ajustarlo explícitamente."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Shadow space (Pila y marcos de llamada): Reserva cuatro ranuras contiguas en la pila del llamador para que el invocado vuelque registros.",
    "topic": "Pila y marcos de llamada",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-08",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Stack clash probing»?",
    "options": [
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Exige que la subrutina invocada preserve y restaure ciertos registros antes de retornar.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Stack clash probing (Pila y marcos de llamada): Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia.",
    "topic": "Pila y marcos de llamada",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-09",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Relocations»?",
    "options": [
      "Registra posiciones de código o datos que el enlazador debe parchear con direcciones finales.",
      "Redirige llamadas a funciones externas a través de trampolines que resuelven direcciones.",
      "Selecciona la estrategia de acceso a variables por hilo según el módulo sea fijo o dinámico.",
      "Mantiene una tabla de punteros resueltos en tiempo de carga para acceder a símbolos globales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Relocations (Enlazado y carga): Registra posiciones de código o datos que el enlazador debe parchear con direcciones finales.",
    "topic": "Enlazado y carga",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-10",
    "collectionId": "assembly",
    "question": "Respecto a enlazado y carga en Ensamblador, ¿cuál es el propósito de «Position-independent code»?",
    "options": [
      "Selecciona la estrategia de acceso a variables por hilo según el módulo sea fijo o dinámico al operar.",
      "Calcula accesos a datos y saltos de forma relativa al contador de programa sin direcciones fijas.",
      "Registra posiciones de código o datos que el enlazador debe parchear con direcciones finales.",
      "Mantiene una tabla de punteros resueltos en tiempo de carga para acceder a símbolos globales."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Position-independent code (Enlazado y carga): Calcula accesos a datos y saltos de forma relativa al contador de programa sin direcciones fijas.",
    "topic": "Enlazado y carga",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-11",
    "collectionId": "assembly",
    "question": "En Ensamblador (Enlazado y carga), ¿qué función técnica cumple «Global offset table»?",
    "options": [
      "Redirige llamadas a funciones externas a través de trampolines que resuelven direcciones al operar.",
      "Selecciona la estrategia de acceso a variables por hilo según el módulo sea fijo o dinámico.",
      "Mantiene una tabla de punteros resueltos en tiempo de carga para acceder a símbolos globales.",
      "Registra posiciones de código o datos que el enlazador debe parchear con direcciones finales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Global offset table (Enlazado y carga): Mantiene una tabla de punteros resueltos en tiempo de carga para acceder a símbolos globales.",
    "topic": "Enlazado y carga",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-12",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «Procedure linkage table» en enlazado y carga?",
    "options": [
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos.",
      "Redirige llamadas a funciones externas a través de trampolines que resuelven direcciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Procedure linkage table (Enlazado y carga): Redirige llamadas a funciones externas a través de trampolines que resuelven direcciones.",
    "topic": "Enlazado y carga",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-13",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Dynamic loader»?",
    "options": [
      "Mapea bibliotecas compartidas en memoria, aplica reubicaciones y ejecuta constructores iniciales.",
      "Selecciona la estrategia de acceso a variables por hilo según el módulo sea fijo o dinámico.",
      "Registra posiciones de código o datos que el enlazador debe parchear con direcciones finales.",
      "Mantiene una tabla de punteros resueltos en tiempo de carga para acceder a símbolos globales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dynamic loader (Enlazado y carga): Mapea bibliotecas compartidas en memoria, aplica reubicaciones y ejecuta constructores iniciales.",
    "topic": "Enlazado y carga",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-14",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Thread-local relocation models»?",
    "options": [
      "Redirige llamadas a funciones externas a través de trampolines que resuelven direcciones al operar.",
      "Selecciona la estrategia de acceso a variables por hilo según el módulo sea fijo o dinámico.",
      "Registra posiciones de código o datos que el enlazador debe parchear con direcciones finales.",
      "Mantiene una tabla de punteros resueltos en tiempo de carga para acceder a símbolos globales."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Thread-local relocation models (Enlazado y carga): Selecciona la estrategia de acceso a variables por hilo según el módulo sea fijo o dinámico.",
    "topic": "Enlazado y carga",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-15",
    "collectionId": "assembly",
    "question": "Respecto a interfaz con el sistema en Ensamblador, ¿cuál es el propósito de «System call numbers»?",
    "options": [
      "Separa la ejecución restringida de aplicaciones respecto al nivel privilegiado del núcleo al operar.",
      "Asigna un bloque de datos privado por hilo accesible mediante un registro de segmento base al operar.",
      "Carga el identificador numérico del servicio solicitado en el registro acordado antes de saltar.",
      "Maneja lecturas o escrituras que procesan menos bytes de los pedidos reintentando el resto al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "System call numbers (Interfaz con el sistema): Carga el identificador numérico del servicio solicitado en el registro acordado antes de saltar.",
    "topic": "Interfaz con el sistema",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-16",
    "collectionId": "assembly",
    "question": "En Ensamblador (Interfaz con el sistema), ¿qué función técnica cumple «User mode y kernel mode»?",
    "options": [
      "Interrumpe el flujo normal de un proceso para invocar un manejador asíncrono registrado al operar.",
      "Vincula archivos o páginas anónimas directamente dentro del espacio virtual del proceso.",
      "Reanuda o devuelve un código especial cuando una señal interrumpe una llamada bloqueante.",
      "Separa la ejecución restringida de aplicaciones respecto al nivel privilegiado del núcleo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "User mode y kernel mode (Interfaz con el sistema): Separa la ejecución restringida de aplicaciones respecto al nivel privilegiado del núcleo.",
    "topic": "Interfaz con el sistema",
    "difficulty": "básico"
  },
  {
    "id": "assembly-q-17",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «Signals» en interfaz con el sistema?",
    "options": [
      "Interrumpe el flujo normal de un proceso para invocar un manejador asíncrono registrado al operar.",
      "Vincula archivos o páginas anónimas directamente dentro del espacio virtual del proceso.",
      "Reanuda o devuelve un código especial cuando una señal interrumpe una llamada bloqueante.",
      "Separa la ejecución restringida de aplicaciones respecto al nivel privilegiado del núcleo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Signals (Interfaz con el sistema): Interrumpe el flujo normal de un proceso para invocar un manejador asíncrono registrado.",
    "topic": "Interfaz con el sistema",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-18",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Memory mapping»?",
    "options": [
      "Interrumpe el flujo normal de un proceso para invocar un manejador asíncrono registrado.",
      "Vincula archivos o páginas anónimas directamente dentro del espacio virtual del proceso.",
      "Reanuda o devuelve un código especial cuando una señal interrumpe una llamada bloqueante.",
      "Separa la ejecución restringida de aplicaciones respecto al nivel privilegiado del núcleo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Memory mapping (Interfaz con el sistema): Vincula archivos o páginas anónimas directamente dentro del espacio virtual del proceso.",
    "topic": "Interfaz con el sistema",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-19",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Thread-local storage»?",
    "options": [
      "Interrumpe el flujo normal de un proceso para invocar un manejador asíncrono registrado al operar.",
      "Vincula archivos o páginas anónimas directamente dentro del espacio virtual del proceso.",
      "Asigna un bloque de datos privado por hilo accesible mediante un registro de segmento base.",
      "Reanuda o devuelve un código especial cuando una señal interrumpe una llamada bloqueante."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Thread-local storage (Interfaz con el sistema): Asigna un bloque de datos privado por hilo accesible mediante un registro de segmento base.",
    "topic": "Interfaz con el sistema",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-20",
    "collectionId": "assembly",
    "question": "Respecto a interfaz con el sistema en Ensamblador, ¿cuál es el propósito de «Partial system-call results»?",
    "options": [
      "Interrumpe el flujo normal de un proceso para invocar un manejador asíncrono registrado al operar.",
      "Vincula archivos o páginas anónimas directamente dentro del espacio virtual del proceso.",
      "Reanuda o devuelve un código especial cuando una señal interrumpe una llamada bloqueante.",
      "Maneja lecturas o escrituras que procesan menos bytes de los pedidos reintentando el resto."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Partial system-call results (Interfaz con el sistema): Maneja lecturas o escrituras que procesan menos bytes de los pedidos reintentando el resto.",
    "topic": "Interfaz con el sistema",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-21",
    "collectionId": "assembly",
    "question": "En Ensamblador (Interfaz con el sistema), ¿qué función técnica cumple «Restartable syscalls»?",
    "options": [
      "Reanuda o devuelve un código especial cuando una señal interrumpe una llamada bloqueante.",
      "Interrumpe el flujo normal de un proceso para invocar un manejador asíncrono registrado.",
      "Vincula archivos o páginas anónimas directamente dentro del espacio virtual del proceso.",
      "Separa la ejecución restringida de aplicaciones respecto al nivel privilegiado del núcleo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Restartable syscalls (Interfaz con el sistema): Reanuda o devuelve un código especial cuando una señal interrumpe una llamada bloqueante.",
    "topic": "Interfaz con el sistema",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-22",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «SIMD lanes» en cómputo vectorial?",
    "options": [
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos al operar.",
      "Divide un registro ancho en múltiples carriles independientes que operan al mismo tiempo.",
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SIMD lanes (Cómputo vectorial): Divide un registro ancho en múltiples carriles independientes que operan al mismo tiempo.",
    "topic": "Cómputo vectorial",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-23",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Vector loads y stores»?",
    "options": [
      "Divide un registro ancho en múltiples carriles independientes que operan al mismo tiempo.",
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Vector loads y stores (Cómputo vectorial): Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos.",
    "topic": "Cómputo vectorial",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-24",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Horizontal operations»?",
    "options": [
      "Divide un registro ancho en múltiples carriles independientes que operan al mismo tiempo al operar.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos al operar.",
      "Evita solapamiento de punteros y ramas complejas para que el compilador emita código vectorial.",
      "Combina o reduce elementos situados en distintos carriles dentro de un mismo registro vectorial."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Horizontal operations (Cómputo vectorial): Combina o reduce elementos situados en distintos carriles dentro de un mismo registro vectorial.",
    "topic": "Cómputo vectorial",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-25",
    "collectionId": "assembly",
    "question": "Respecto a cómputo vectorial en Ensamblador, ¿cuál es el propósito de «Auto-vectorization constraints»?",
    "options": [
      "Evita solapamiento de punteros y ramas complejas para que el compilador emita código vectorial al operar.",
      "Divide un registro ancho en múltiples carriles independientes que operan al mismo tiempo.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos al operar.",
      "Combina o reduce elementos situados en distintos carriles dentro de un mismo registro vectorial."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Auto-vectorization constraints (Cómputo vectorial): Evita solapamiento de punteros y ramas complejas para que el compilador emita código vectorial.",
    "topic": "Cómputo vectorial",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-26",
    "collectionId": "assembly",
    "question": "En Ensamblador (Cómputo vectorial), ¿qué función técnica cumple «Feature detection»?",
    "options": [
      "Divide un registro ancho en múltiples carriles independientes que operan al mismo tiempo en el flujo.",
      "Consulta las capacidades del procesador en tiempo de ejecución antes de usar instrucciones nuevas.",
      "Evita solapamiento de punteros y ramas complejas para que el compilador emita código vectorial.",
      "Combina o reduce elementos situados en distintos carriles dentro de un mismo registro vectorial."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Feature detection (Cómputo vectorial): Consulta las capacidades del procesador en tiempo de ejecución antes de usar instrucciones nuevas.",
    "topic": "Cómputo vectorial",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-27",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «Masked vector operations» en cómputo vectorial?",
    "options": [
      "Divide un registro ancho en múltiples carriles independientes que operan al mismo tiempo al evaluar.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos al operar.",
      "Aplica la operación o el acceso a memoria únicamente en los carriles habilitados por una máscara.",
      "Evita solapamiento de punteros y ramas complejas para que el compilador emita código vectorial."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Masked vector operations (Cómputo vectorial): Aplica la operación o el acceso a memoria únicamente en los carriles habilitados por una máscara.",
    "topic": "Cómputo vectorial",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-28",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Atomic read-modify-write»?",
    "options": [
      "Impone orden estricto entre lecturas y escrituras frente al procesador y otros núcleos al operar.",
      "Sustituye el valor de una dirección solo si aún coincide con el contenido esperado previo.",
      "Sincroniza líneas de caché entre núcleos mediante protocolos de invalidación y exclusividad.",
      "Ejecuta la lectura, modificación y escritura de una celda de memoria como un paso indivisible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Atomic read-modify-write (Concurrencia y memoria): Ejecuta la lectura, modificación y escritura de una celda de memoria como un paso indivisible.",
    "topic": "Concurrencia y memoria",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-29",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Compare-and-swap»?",
    "options": [
      "Sustituye el valor de una dirección solo si aún coincide con el contenido esperado previo al operar.",
      "Impone orden estricto entre lecturas y escrituras frente al procesador y otros núcleos.",
      "Sincroniza líneas de caché entre núcleos mediante protocolos de invalidación y exclusividad.",
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Compare-and-swap (Concurrencia y memoria): Sustituye el valor de una dirección solo si aún coincide con el contenido esperado previo.",
    "topic": "Concurrencia y memoria",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-30",
    "collectionId": "assembly",
    "question": "Respecto a concurrencia y memoria en Ensamblador, ¿cuál es el propósito de «Memory barriers»?",
    "options": [
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Impone orden estricto entre lecturas y escrituras frente al procesador y otros núcleos.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Memory barriers (Concurrencia y memoria): Impone orden estricto entre lecturas y escrituras frente al procesador y otros núcleos.",
    "topic": "Concurrencia y memoria",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-31",
    "collectionId": "assembly",
    "question": "En Ensamblador (Concurrencia y memoria), ¿qué función técnica cumple «Cache coherence»?",
    "options": [
      "Impone orden estricto entre lecturas y escrituras frente al procesador y otros núcleos al operar.",
      "Sustituye el valor de una dirección solo si aún coincide con el contenido esperado previo.",
      "Sincroniza líneas de caché entre núcleos mediante protocolos de invalidación y exclusividad.",
      "Ejecuta la lectura, modificación y escritura de una celda de memoria como un paso indivisible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cache coherence (Concurrencia y memoria): Sincroniza líneas de caché entre núcleos mediante protocolos de invalidación y exclusividad.",
    "topic": "Concurrencia y memoria",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-32",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «ABA problem» en concurrencia y memoria?",
    "options": [
      "Sincroniza líneas de caché entre núcleos mediante protocolos de invalidación y exclusividad al operar.",
      "Ejecuta la lectura, modificación y escritura de una celda de memoria como un paso indivisible.",
      "Sustituye el valor de una dirección solo si aún coincide con el contenido esperado previo al operar.",
      "Ocurre cuando una ubicación cambia de valor y vuelve al original engañando una comparación simple."
    ],
    "correctAnswerIndex": 3,
    "explanation": "ABA problem (Concurrencia y memoria): Ocurre cuando una ubicación cambia de valor y vuelve al original engañando una comparación simple.",
    "topic": "Concurrencia y memoria",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-33",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Breakpoints de hardware»?",
    "options": [
      "Detiene la ejecución al tocar direcciones específicas usando registros de depuración del chip.",
      "Graba trazas de instrucciones y cambios de estado para retroceder paso a paso al depurar.",
      "Guarda una imagen completa de la memoria, registros y pilas de hilos al abortar un proceso.",
      "Suspende el programa en el instante exacto en que una dirección de memoria se lee o modifica."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Breakpoints de hardware (Depuración binaria): Detiene la ejecución al tocar direcciones específicas usando registros de depuración del chip.",
    "topic": "Depuración binaria",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-34",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Watchpoints»?",
    "options": [
      "Graba trazas de instrucciones y cambios de estado para retroceder paso a paso al depurar al operar.",
      "Suspende el programa en el instante exacto en que una dirección de memoria se lee o modifica.",
      "Guarda una imagen completa de la memoria, registros y pilas de hilos al abortar un proceso.",
      "Recupera bloques básicos y grafos de saltos a partir de secuencias de instrucciones binarias."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Watchpoints (Depuración binaria): Suspende el programa en el instante exacto en que una dirección de memoria se lee o modifica.",
    "topic": "Depuración binaria",
    "difficulty": "intermedio"
  },
  {
    "id": "assembly-q-35",
    "collectionId": "assembly",
    "question": "Respecto a depuración binaria en Ensamblador, ¿cuál es el propósito de «Core dumps»?",
    "options": [
      "Graba trazas de instrucciones y cambios de estado para retroceder paso a paso al depurar al operar.",
      "Suspende el programa en el instante exacto en que una dirección de memoria se lee o modifica.",
      "Guarda una imagen completa de la memoria, registros y pilas de hilos al abortar un proceso.",
      "Recupera bloques básicos y grafos de saltos a partir de secuencias de instrucciones binarias."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Core dumps (Depuración binaria): Guarda una imagen completa de la memoria, registros y pilas de hilos al abortar un proceso.",
    "topic": "Depuración binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-36",
    "collectionId": "assembly",
    "question": "En Ensamblador (Depuración binaria), ¿qué función técnica cumple «Symbolication»?",
    "options": [
      "Graba trazas de instrucciones y cambios de estado para retroceder paso a paso al depurar al operar.",
      "Guarda una imagen completa de la memoria, registros y pilas de hilos al abortar un proceso.",
      "Suspende el programa en el instante exacto en que una dirección de memoria se lee o modifica.",
      "Traduce direcciones hexadecimales crudas hacia nombres de funciones, archivos y líneas fuente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Symbolication (Depuración binaria): Traduce direcciones hexadecimales crudas hacia nombres de funciones, archivos y líneas fuente.",
    "topic": "Depuración binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-37",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «Control-flow reconstruction» en depuración binaria?",
    "options": [
      "Recupera bloques básicos y grafos de saltos a partir de secuencias de instrucciones binarias.",
      "Graba trazas de instrucciones y cambios de estado para retroceder paso a paso al depurar.",
      "Guarda una imagen completa de la memoria, registros y pilas de hilos al abortar un proceso.",
      "Suspende el programa en el instante exacto en que una dirección de memoria se lee o modifica."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Control-flow reconstruction (Depuración binaria): Recupera bloques básicos y grafos de saltos a partir de secuencias de instrucciones binarias.",
    "topic": "Depuración binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-38",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Reverse execution»?",
    "options": [
      "Guarda una imagen completa de la memoria, registros y pilas de hilos al abortar un proceso.",
      "Graba trazas de instrucciones y cambios de estado para retroceder paso a paso al depurar.",
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Reverse execution (Depuración binaria): Graba trazas de instrucciones y cambios de estado para retroceder paso a paso al depurar.",
    "topic": "Depuración binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-39",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «DWARF call-frame information»?",
    "options": [
      "Graba trazas de instrucciones y cambios de estado para retroceder paso a paso al depurar al operar.",
      "Guarda una imagen completa de la memoria, registros y pilas de hilos al abortar un proceso.",
      "Codifica reglas compactas que permiten reconstruir la pila aunque no exista puntero de marco.",
      "Suspende el programa en el instante exacto en que una dirección de memoria se lee o modifica."
    ],
    "correctAnswerIndex": 2,
    "explanation": "DWARF call-frame information (Depuración binaria): Codifica reglas compactas que permiten reconstruir la pila aunque no exista puntero de marco.",
    "topic": "Depuración binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-40",
    "collectionId": "assembly",
    "question": "Respecto a rendimiento microarquitectónico en Ensamblador, ¿cuál es el propósito de «Instruction pipelines»?",
    "options": [
      "Anticipa el destino de saltos condicionales para mantener llena la tubería de instrucciones.",
      "Despacha instrucciones listas cuyas dependencias ya se resolvieron aunque aparezcan después.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia al operar.",
      "Solapa las fases de búsqueda, decodificación y ejecución de varias instrucciones sucesivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Instruction pipelines (Rendimiento microarquitectónico): Solapa las fases de búsqueda, decodificación y ejecución de varias instrucciones sucesivas.",
    "topic": "Rendimiento microarquitectónico",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-41",
    "collectionId": "assembly",
    "question": "En Ensamblador (Rendimiento microarquitectónico), ¿qué función técnica cumple «Branch prediction»?",
    "options": [
      "Anticipa el destino de saltos condicionales para mantener llena la tubería de instrucciones al operar.",
      "Solapa las fases de búsqueda, decodificación y ejecución de varias instrucciones sucesivas.",
      "Despacha instrucciones listas cuyas dependencias ya se resolvieron aunque aparezcan después.",
      "Organiza memorias rápidas por niveles cercanos al núcleo para amortizar la latencia de la RAM."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Branch prediction (Rendimiento microarquitectónico): Anticipa el destino de saltos condicionales para mantener llena la tubería de instrucciones.",
    "topic": "Rendimiento microarquitectónico",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-42",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «Cache hierarchy» en rendimiento microarquitectónico?",
    "options": [
      "Solapa las fases de búsqueda, decodificación y ejecución de varias instrucciones sucesivas al operar.",
      "Organiza memorias rápidas por niveles cercanos al núcleo para amortizar la latencia de la RAM.",
      "Anticipa el destino de saltos condicionales para mantener llena la tubería de instrucciones.",
      "Despacha instrucciones listas cuyas dependencias ya se resolvieron aunque aparezcan después."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cache hierarchy (Rendimiento microarquitectónico): Organiza memorias rápidas por niveles cercanos al núcleo para amortizar la latencia de la RAM.",
    "topic": "Rendimiento microarquitectónico",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-43",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Out-of-order execution»?",
    "options": [
      "Solapa las fases de búsqueda, decodificación y ejecución de varias instrucciones sucesivas al operar.",
      "Anticipa el destino de saltos condicionales para mantener llena la tubería de instrucciones.",
      "Despacha instrucciones listas cuyas dependencias ya se resolvieron aunque aparezcan después.",
      "Organiza memorias rápidas por niveles cercanos al núcleo para amortizar la latencia de la RAM."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Out-of-order execution (Rendimiento microarquitectónico): Despacha instrucciones listas cuyas dependencias ya se resolvieron aunque aparezcan después.",
    "topic": "Rendimiento microarquitectónico",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-44",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Performance counters»?",
    "options": [
      "Solapa las fases de búsqueda, decodificación y ejecución de varias instrucciones sucesivas al operar.",
      "Anticipa el destino de saltos condicionales para mantener llena la tubería de instrucciones.",
      "Despacha instrucciones listas cuyas dependencias ya se resolvieron aunque aparezcan después.",
      "Cuenta eventos reales del chip como fallos de caché, ciclos estancados y saltos mal predichos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Performance counters (Rendimiento microarquitectónico): Cuenta eventos reales del chip como fallos de caché, ciclos estancados y saltos mal predichos.",
    "topic": "Rendimiento microarquitectónico",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-45",
    "collectionId": "assembly",
    "question": "Respecto a seguridad binaria en Ensamblador, ¿cuál es el propósito de «Stack canaries»?",
    "options": [
      "Coloca un valor centinela antes de la dirección de retorno para detectar desbordes de búfer.",
      "Aleatoriza las direcciones base de código, pila y bibliotecas al iniciar cada ejecución.",
      "Marca páginas de datos y pila como no ejecutables para impedir que se corra código inyectado.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Stack canaries (Seguridad binaria): Coloca un valor centinela antes de la dirección de retorno para detectar desbordes de búfer.",
    "topic": "Seguridad binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-46",
    "collectionId": "assembly",
    "question": "En Ensamblador (Seguridad binaria), ¿qué función técnica cumple «DEP y NX»?",
    "options": [
      "Aleatoriza las direcciones base de código, pila y bibliotecas al iniciar cada ejecución al operar.",
      "Marca páginas de datos y pila como no ejecutables para impedir que se corra código inyectado.",
      "Coloca un valor centinela antes de la dirección de retorno para detectar desbordes de búfer.",
      "Encadena fragmentos cortos existentes terminados en retorno para eludir páginas no ejecutables."
    ],
    "correctAnswerIndex": 1,
    "explanation": "DEP y NX (Seguridad binaria): Marca páginas de datos y pila como no ejecutables para impedir que se corra código inyectado.",
    "topic": "Seguridad binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-47",
    "collectionId": "assembly",
    "question": "Dentro de Ensamblador, ¿cómo opera el mecanismo de «Address space layout randomization» en seguridad binaria?",
    "options": [
      "Apunta al tope actual de la pila y se desplaza al reservar o liberar espacio local al operar.",
      "Toca páginas sucesivas al reservar marcos grandes para no saltar la página de guardia.",
      "Aleatoriza las direcciones base de código, pila y bibliotecas al iniciar cada ejecución.",
      "Transfiere bloques contiguos o dispersos de memoria hacia registros vectoriales anchos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Address space layout randomization (Seguridad binaria): Aleatoriza las direcciones base de código, pila y bibliotecas al iniciar cada ejecución.",
    "topic": "Seguridad binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-48",
    "collectionId": "assembly",
    "question": "Al trabajar con Ensamblador, ¿qué responsabilidad define a «Return-oriented programming»?",
    "options": [
      "Aleatoriza las direcciones base de código, pila y bibliotecas al iniciar cada ejecución al operar.",
      "Coloca un valor centinela antes de la dirección de retorno para detectar desbordes de búfer.",
      "Marca páginas de datos y pila como no ejecutables para impedir que se corra código inyectado.",
      "Encadena fragmentos cortos existentes terminados en retorno para eludir páginas no ejecutables."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Return-oriented programming (Seguridad binaria): Encadena fragmentos cortos existentes terminados en retorno para eludir páginas no ejecutables.",
    "topic": "Seguridad binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-49",
    "collectionId": "assembly",
    "question": "En la arquitectura de Ensamblador, ¿qué caracteriza técnicamente a «Control-flow integrity»?",
    "options": [
      "Valida que los saltos indirectos y retornos apunten únicamente a destinos legítimos permitidos al operar.",
      "Aleatoriza las direcciones base de código, pila y bibliotecas al iniciar cada ejecución al operar.",
      "Coloca un valor centinela antes de la dirección de retorno para detectar desbordes de búfer.",
      "Marca páginas de datos y pila como no ejecutables para impedir que se corra código inyectado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Control-flow integrity (Seguridad binaria): Valida que los saltos indirectos y retornos apunten únicamente a destinos legítimos permitidos.",
    "topic": "Seguridad binaria",
    "difficulty": "avanzado"
  },
  {
    "id": "assembly-q-50",
    "collectionId": "assembly",
    "question": "Respecto a seguridad binaria en Ensamblador, ¿cuál es el propósito de «Pointer authentication codes»?",
    "options": [
      "Coloca un valor centinela antes de la dirección de retorno para detectar desbordes de búfer al operar.",
      "Firma criptográficamente los bits altos de un puntero para detectar su alteración antes de usarlo.",
      "Marca páginas de datos y pila como no ejecutables para impedir que se corra código inyectado al operar.",
      "Encadena fragmentos cortos existentes terminados en retorno para eludir páginas no ejecutables."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pointer authentication codes (Seguridad binaria): Firma criptográficamente los bits altos de un puntero para detectar su alteración antes de usarlo.",
    "topic": "Seguridad binaria",
    "difficulty": "avanzado"
  }
];
