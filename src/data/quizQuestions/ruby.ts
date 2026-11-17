import type { QuizQuestion } from "@/data/quizTypes";

export const rubyQuestions: QuizQuestion[] = [
  {
    "id": "ruby-q-01",
    "collectionId": "ruby",
    "question": "En Ruby (Semántica del lenguaje), ¿qué función técnica cumple «Verdad y nil»?",
    "options": [
      "Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes al operar.",
      "Empaqueta y desempaqueta valores en una sola expresión respetando evaluación de la derecha.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Verdad y nil (Semántica del lenguaje): Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes.",
    "topic": "Semántica del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-02",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Asignación paralela» en semántica del lenguaje?",
    "options": [
      "Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes al operar.",
      "Empaqueta y desempaqueta valores en una sola expresión respetando evaluación de la derecha.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre al operar.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Asignación paralela (Semántica del lenguaje): Empaqueta y desempaqueta valores en una sola expresión respetando evaluación de la derecha.",
    "topic": "Semántica del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-03",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Splat y double splat»?",
    "options": [
      "Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes al operar.",
      "Empaqueta y desempaqueta valores en una sola expresión respetando evaluación de la derecha.",
      "Expanden argumentos posicionales o keywords y hacen explícita la forma de una llamada flexible.",
      "Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Splat y double splat (Semántica del lenguaje): Expanden argumentos posicionales o keywords y hacen explícita la forma de una llamada flexible.",
    "topic": "Semántica del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-04",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «Refinements»?",
    "options": [
      "Empaqueta y desempaqueta valores en una sola expresión respetando evaluación de la derecha al evaluar.",
      "Expanden argumentos posicionales o keywords y hacen explícita la forma de una llamada flexible.",
      "Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes al operar.",
      "Activan cambios léxicos sobre métodos sin contaminar globalmente todas las instancias de una clase."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Refinements (Semántica del lenguaje): Activan cambios léxicos sobre métodos sin contaminar globalmente todas las instancias de una clase.",
    "topic": "Semántica del lenguaje",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-05",
    "collectionId": "ruby",
    "question": "Respecto a despacho dinámico en Ruby, ¿cuál es el propósito de «Method tables»?",
    "options": [
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes al operar.",
      "Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente.",
      "Expone next y rewind para que quien consume controle el avance de una secuencia al operar.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Method tables (Despacho dinámico): Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes.",
    "topic": "Despacho dinámico",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-06",
    "collectionId": "ruby",
    "question": "En Ruby (Despacho dinámico), ¿qué función técnica cumple «Ancestors chain»?",
    "options": [
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes al operar.",
      "Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre al operar.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ancestors chain (Despacho dinámico): Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente.",
    "topic": "Despacho dinámico",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-07",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «method_missing» en despacho dinámico?",
    "options": [
      "Recuerdan destinos recientes de una llamada para evitar repetir búsquedas cuando los tipos se mantienen al operar.",
      "Delega al siguiente método de la cadena preservando o reemplazando argumentos de forma deliberada al evaluar.",
      "Intercepta mensajes no resueltos, pero debe conservar introspección y fallar claramente fuera de su contrato.",
      "Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "method_missing (Despacho dinámico): Intercepta mensajes no resueltos, pero debe conservar introspección y fallar claramente fuera de su contrato.",
    "topic": "Despacho dinámico",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-08",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Super y forwarding»?",
    "options": [
      "Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente en el flujo.",
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes al operar.",
      "Consulta clase, métodos y parámetros para adaptar herramientas sin asumir estructura oculta al operar.",
      "Delega al siguiente método de la cadena preservando o reemplazando argumentos de forma deliberada."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Super y forwarding (Despacho dinámico): Delega al siguiente método de la cadena preservando o reemplazando argumentos de forma deliberada.",
    "topic": "Despacho dinámico",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-09",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «Inline caches»?",
    "options": [
      "Recuerdan destinos recientes de una llamada para evitar repetir búsquedas cuando los tipos se mantienen.",
      "Delega al siguiente método de la cadena preservando o reemplazando argumentos de forma deliberada.",
      "Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente en ejecución.",
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Inline caches (Despacho dinámico): Recuerdan destinos recientes de una llamada para evitar repetir búsquedas cuando los tipos se mantienen.",
    "topic": "Despacho dinámico",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-10",
    "collectionId": "ruby",
    "question": "Respecto a metaprogramación en Ruby, ¿cuál es el propósito de «class_eval e instance_eval»?",
    "options": [
      "Consulta clase, métodos y parámetros para adaptar herramientas sin asumir estructura oculta al operar.",
      "Cambian temporalmente self para modificar clases u objetos y exigen fronteras claras de confianza.",
      "Observan herencia, inclusión y definición para registrar comportamiento en el momento correcto.",
      "Convierte parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "class_eval e instance_eval (Metaprogramación): Cambian temporalmente self para modificar clases u objetos y exigen fronteras claras de confianza.",
    "topic": "Metaprogramación",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-11",
    "collectionId": "ruby",
    "question": "En Ruby (Metaprogramación), ¿qué función técnica cumple «Hooks de clases y módulos»?",
    "options": [
      "Consulta clase, métodos y parámetros para adaptar herramientas sin asumir estructura oculta al operar.",
      "Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes al operar.",
      "Observan herencia, inclusión y definición para registrar comportamiento en el momento correcto.",
      "Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Hooks de clases y módulos (Metaprogramación): Observan herencia, inclusión y definición para registrar comportamiento en el momento correcto.",
    "topic": "Metaprogramación",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-12",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Introspection» en metaprogramación?",
    "options": [
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo al operar.",
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes.",
      "Recolecta objetos jóvenes con mayor frecuencia aprovechando que la mayoría muere pronto.",
      "Consulta clase, métodos y parámetros para adaptar herramientas sin asumir estructura oculta."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Introspection (Metaprogramación): Consulta clase, métodos y parámetros para adaptar herramientas sin asumir estructura oculta.",
    "topic": "Metaprogramación",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-13",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Generación segura de DSL»?",
    "options": [
      "Limita operaciones disponibles y valida entradas para que una sintaxis expresiva no ejecute capacidades arbitrarias al operar.",
      "Cambian temporalmente self para modificar clases u objetos y exigen fronteras claras de confianza de forma segura.",
      "Permite inspeccionar objetos vivos y finalizadores, con un costo que desaconseja recorrerlo en rutas críticas.",
      "Intercepta mensajes no resueltos, pero debe conservar introspección y fallar claramente fuera de su contrato al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Generación segura de DSL (Metaprogramación): Limita operaciones disponibles y valida entradas para que una sintaxis expresiva no ejecute capacidades arbitrarias.",
    "topic": "Metaprogramación",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-14",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «Enumeradores externos»?",
    "options": [
      "Componen map, filter y reduce sin mutar la colección original y mantiene intención visible.",
      "Expone next y rewind para que quien consume controle el avance de una secuencia al operar.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre al operar.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Enumeradores externos (Datos y enumeración): Exponen next y rewind para que quien consume controle el avance de una secuencia.",
    "topic": "Datos y enumeración",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-15",
    "collectionId": "ruby",
    "question": "Respecto a datos y enumeración en Ruby, ¿cuál es el propósito de «Lazy enumerators»?",
    "options": [
      "Componen map, filter y reduce sin mutar la colección original y mantiene intención visible al operar.",
      "Expone next y rewind para que quien consume controle el avance de una secuencia dentro del flujo.",
      "Encadenan transformaciones bajo demanda y evita materializar colecciones intermedias o infinitas.",
      "Empaqueta y desempaqueta valores en una sola expresión respetando evaluación de la derecha al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Lazy enumerators (Datos y enumeración): Encadenan transformaciones bajo demanda y evitan materializar colecciones intermedias o infinitas.",
    "topic": "Datos y enumeración",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-16",
    "collectionId": "ruby",
    "question": "En Ruby (Datos y enumeración), ¿qué función técnica cumple «Ranges»?",
    "options": [
      "Encadenan transformaciones bajo demanda y evita materializar colecciones intermedias o infinitas al operar.",
      "Declara portadores con campos conocidos, comparabilidad y, en Data, inmutabilidad orientada a valores.",
      "Componen map, filter y reduce sin mutar la colección original y mantiene intención visible en el flujo.",
      "Representa intervalos inclusivos o exclusivos y delegan iteración a la capacidad de sucesión del valor."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Ranges (Datos y enumeración): Representan intervalos inclusivos o exclusivos y delegan iteración a la capacidad de sucesión del valor.",
    "topic": "Datos y enumeración",
    "difficulty": "básico"
  },
  {
    "id": "ruby-q-17",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Struct» en datos y enumeración?",
    "options": [
      "Declara portadores con campos conocidos, comparabilidad y, en Data, inmutabilidad orientada a valores.",
      "Encadenan transformaciones bajo demanda y evita materializar colecciones intermedias o infinitas.",
      "Componen map, filter y reduce sin mutar la colección original y mantiene intención visible al operar.",
      "Representa intervalos inclusivos o exclusivos y delegan iteración a la capacidad de sucesión del valor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Struct y Data (Datos y enumeración): Declaran portadores con campos conocidos, comparabilidad y, en Data, inmutabilidad orientada a valores.",
    "topic": "Datos y enumeración",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-18",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Transformaciones funcionales»?",
    "options": [
      "Expone next y rewind para que quien consume controle el avance de una secuencia con precisión.",
      "Componen map, filter y reduce sin mutar la colección original y mantiene intención visible.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre al operar.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Transformaciones funcionales (Datos y enumeración): Componen map, filter y reduce sin mutar la colección original y mantienen intención visible.",
    "topic": "Datos y enumeración",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-19",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «Object space»?",
    "options": [
      "Compila rutas calientes a código nativo y vuelve al intérprete cuando una suposición deja de cumplirse al operar.",
      "Organiza metadatos para que procesos derivados compartan páginas hasta que realmente las modifiquen al operar.",
      "Permite inspeccionar objetos vivos y finalizadores, con un costo que desaconseja recorrerlo en rutas críticas.",
      "Recuerdan destinos recientes de una llamada para evitar repetir búsquedas cuando los tipos se mantienen al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Object space (Memoria y runtime): Permite inspeccionar objetos vivos y finalizadores, con un costo que desaconseja recorrerlo en rutas críticas.",
    "topic": "Memoria y runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-20",
    "collectionId": "ruby",
    "question": "Respecto a memoria y runtime en Ruby, ¿cuál es el propósito de «Generational garbage collection»?",
    "options": [
      "Expone next y rewind para que quien consume controle el avance de una secuencia al evaluar.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables.",
      "Recolecta objetos jóvenes con mayor frecuencia aprovechando que la mayoría muere pronto."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Generational garbage collection (Memoria y runtime): Recolecta objetos jóvenes con mayor frecuencia aprovechando que la mayoría muere pronto.",
    "topic": "Memoria y runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-21",
    "collectionId": "ruby",
    "question": "En Ruby (Memoria y runtime), ¿qué función técnica cumple «Copy-on-write friendly GC»?",
    "options": [
      "Organiza metadatos para que procesos derivados compartan páginas hasta que realmente las modifiquen.",
      "Recolecta objetos jóvenes con mayor frecuencia aprovechando que la mayoría muere pronto al operar.",
      "Restringe objetos compartidos para ejecutar en paralelo mediante mensajes y valores shareable.",
      "Combina procesos y threads, por lo que pool de conexiones y código deben tolerar concurrencia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Copy-on-write friendly GC (Memoria y runtime): Organiza metadatos para que procesos derivados compartan páginas hasta que realmente las modifiquen.",
    "topic": "Memoria y runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-22",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Shape trees» en memoria y runtime?",
    "options": [
      "Permite inspeccionar objetos vivos y finalizadores, con un costo que desaconseja recorrerlo en rutas críticas al operar.",
      "Comparte descripciones de variables de instancia y aceleran acceso cuando los objetos evolucionan consistentemente.",
      "Compila rutas calientes a código nativo y vuelve al intérprete cuando una suposición deja de cumplirse en el flujo.",
      "Organiza metadatos para que procesos derivados compartan páginas hasta que realmente las modifiquen de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Shape trees (Memoria y runtime): Comparten descripciones de variables de instancia y aceleran acceso cuando los objetos evolucionan consistentemente.",
    "topic": "Memoria y runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-23",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «YJIT»?",
    "options": [
      "Organiza metadatos para que procesos derivados compartan páginas hasta que realmente las modifiquen al operar.",
      "Recolecta objetos jóvenes con mayor frecuencia aprovechando que la mayoría muere pronto de forma clara.",
      "Compila rutas calientes a código nativo y vuelve al intérprete cuando una suposición deja de cumplirse.",
      "Encadenan transformaciones bajo demanda y evita materializar colecciones intermedias o infinitas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "YJIT (Memoria y runtime): Compila rutas calientes a código nativo y vuelve al intérprete cuando una suposición deja de cumplirse.",
    "topic": "Memoria y runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-24",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «Fibers»?",
    "options": [
      "Intercala I/O no bloqueante detrás de APIs familiares y requiere operaciones compatibles.",
      "Expone next y rewind para que quien consume controle el avance de una secuencia al operar.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre.",
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Fibers (Concurrencia y asincronía): Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo.",
    "topic": "Concurrencia y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-25",
    "collectionId": "ruby",
    "question": "Respecto a concurrencia y asincronía en Ruby, ¿cuál es el propósito de «Fiber scheduler»?",
    "options": [
      "Intercala I/O no bloqueante detrás de APIs familiares y requiere operaciones compatibles.",
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fiber scheduler (Concurrencia y asincronía): Intercala I/O no bloqueante detrás de APIs familiares y requiere operaciones compatibles.",
    "topic": "Concurrencia y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-26",
    "collectionId": "ruby",
    "question": "En Ruby (Concurrencia y asincronía), ¿qué función técnica cumple «Mutex y condition variables»?",
    "options": [
      "Restringe objetos compartidos para ejecutar en paralelo mediante mensajes y valores shareable al operar.",
      "Protege invariantes compartidos y permite esperar una condición dentro de un bucle de verificación.",
      "Intercala I/O no bloqueante detrás de APIs familiares y requiere operaciones compatibles al operar.",
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mutex y condition variables (Concurrencia y asincronía): Protegen invariantes compartidos y permiten esperar una condición dentro de un bucle de verificación.",
    "topic": "Concurrencia y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-27",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Colas thread-safe» en concurrencia y asincronía?",
    "options": [
      "Protege invariantes compartidos y permite esperar una condición dentro de un bucle de verificación al operar.",
      "Restringe objetos compartidos para ejecutar en paralelo mediante mensajes y valores shareable al operar.",
      "Transfieren ownership de tareas entre productores y consumidores aplicando capacidad cuando hace falta.",
      "Intercala I/O no bloqueante detrás de APIs familiares y requiere operaciones compatibles con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Colas thread-safe (Concurrencia y asincronía): Transfieren ownership de tareas entre productores y consumidores aplicando capacidad cuando hace falta.",
    "topic": "Concurrencia y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-28",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Aislamiento con Ractor»?",
    "options": [
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo al operar.",
      "Intercala I/O no bloqueante detrás de APIs familiares y requiere operaciones compatibles al operar.",
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes al operar.",
      "Restringe objetos compartidos para ejecutar en paralelo mediante mensajes y valores shareable."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Aislamiento con Ractor (Concurrencia y asincronía): Restringe objetos compartidos para ejecutar en paralelo mediante mensajes y valores shareable.",
    "topic": "Concurrencia y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-29",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «Contrato Rack»?",
    "options": [
      "Representa una petición como environment y exige una respuesta status, headers y body cerrable.",
      "Combina procesos y threads, por lo que pool de conexiones y código deben tolerar concurrencia.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre al operar.",
      "Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Contrato Rack (Web y red): Representa una petición como environment y exige una respuesta status, headers y body cerrable.",
    "topic": "Web y red",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-30",
    "collectionId": "ruby",
    "question": "Respecto a web y red en Ruby, ¿cuál es el propósito de «Servidores Puma»?",
    "options": [
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre en ejecución.",
      "Combina procesos y threads, por lo que pool de conexiones y código deben tolerar concurrencia.",
      "Representa una petición como environment y exige una respuesta status, headers y body cerrable.",
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Servidores Puma (Web y red): Combinan procesos y threads, por lo que pool de conexiones y código deben tolerar concurrencia.",
    "topic": "Web y red",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-31",
    "collectionId": "ruby",
    "question": "En Ruby (Web y red), ¿qué función técnica cumple «Net»?",
    "options": [
      "Entrega fragmentos antes de completar el cuerpo controlando backpressure y desconexiones del cliente con precisión.",
      "Representa una petición como environment y exige una respuesta status, headers y body cerrable dentro del flujo.",
      "HTTP::Construye clientes con timeouts, TLS y reutilización explícitos para no quedar bloqueados indefinidamente.",
      "Combina procesos y threads, por lo que pool de conexiones y código deben tolerar concurrencia sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Net (Web y red): HTTP::Construye clientes con timeouts, TLS y reutilización explícitos para no quedar bloqueados indefinidamente.",
    "topic": "Web y red",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-32",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Sockets» en web y red?",
    "options": [
      "Expone next y rewind para que quien consume controle el avance de una secuencia al operar.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables.",
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sockets (Web y red): Exponen streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre.",
    "topic": "Web y red",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-33",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Streaming de respuestas»?",
    "options": [
      "Entrega fragmentos antes de completar el cuerpo controlando backpressure y desconexiones del cliente al operar.",
      "Representa una petición como environment y exige una respuesta status, headers y body cerrable.",
      "Combina procesos y threads, por lo que pool de conexiones y código deben tolerar concurrencia al operar.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Streaming de respuestas (Web y red): Entrega fragmentos antes de completar el cuerpo controlando backpressure y desconexiones del cliente.",
    "topic": "Web y red",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-34",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «JSON y YAML»?",
    "options": [
      "Agrupa escrituras atómicas y coordinan competidores sin extender la sección crítica innecesariamente al operar.",
      "Serializan datos portables, pero requieren validar tipos y deshabilitar construcción arbitraria de objetos.",
      "Versionan cambios estructurales con una secuencia compatible con aplicaciones durante el despliegue al operar.",
      "Convierte parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "JSON y YAML (Persistencia y formatos): Serializan datos portables, pero requieren validar tipos y deshabilitar construcción arbitraria de objetos.",
    "topic": "Persistencia y formatos",
    "difficulty": "intermedio"
  },
  {
    "id": "ruby-q-35",
    "collectionId": "ruby",
    "question": "Respecto a persistencia y formatos en Ruby, ¿cuál es el propósito de «Marshal y sus riesgos»?",
    "options": [
      "Convierte parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre al operar.",
      "Reconstruye objetos Ruby y nunca debe cargar bytes provenientes de una fuente no confiable.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Marshal y sus riesgos (Persistencia y formatos): Reconstruye objetos Ruby y nunca debe cargar bytes provenientes de una fuente no confiable.",
    "topic": "Persistencia y formatos",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-36",
    "collectionId": "ruby",
    "question": "En Ruby (Persistencia y formatos), ¿qué función técnica cumple «Adaptadores SQL»?",
    "options": [
      "Reconstruye objetos Ruby y nunca debe cargar bytes provenientes de una fuente no confiable al operar.",
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo al operar.",
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes.",
      "Convierte parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Adaptadores SQL (Persistencia y formatos): Convierten parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas.",
    "topic": "Persistencia y formatos",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-37",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Migraciones de esquema» en persistencia y formatos?",
    "options": [
      "Versionan cambios estructurales con una secuencia compatible con aplicaciones durante el despliegue al operar.",
      "Convierte parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas al operar.",
      "Reconstruye objetos Ruby y nunca debe cargar bytes provenientes de una fuente no confiable al operar.",
      "Agrupa escrituras atómicas y coordinan competidores sin extender la sección crítica innecesariamente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Migraciones de esquema (Persistencia y formatos): Versionan cambios estructurales con una secuencia compatible con aplicaciones durante el despliegue.",
    "topic": "Persistencia y formatos",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-38",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Transacciones y bloqueos»?",
    "options": [
      "Convierte parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas en el flujo.",
      "Agrupa escrituras atómicas y coordinan competidores sin extender la sección crítica innecesariamente.",
      "Reconstruye objetos Ruby y nunca debe cargar bytes provenientes de una fuente no confiable al operar.",
      "Versionan cambios estructurales con una secuencia compatible con aplicaciones durante el despliegue."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Transacciones y bloqueos (Persistencia y formatos): Agrupan escrituras atómicas y coordinan competidores sin extender la sección crítica innecesariamente.",
    "topic": "Persistencia y formatos",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-39",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «RSpec»?",
    "options": [
      "Comprueban que métodos simulados existen realmente y evita contratos ficticios en las pruebas al operar.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables con precisión.",
      "Expresa ejemplos y expectativas con hooks acotados para que cada fallo explique un comportamiento.",
      "Consulta clase, métodos y parámetros para adaptar herramientas sin asumir estructura oculta al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "RSpec (Pruebas y diseño): Expresa ejemplos y expectativas con hooks acotados para que cada fallo explique un comportamiento.",
    "topic": "Pruebas y diseño",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-40",
    "collectionId": "ruby",
    "question": "Respecto a pruebas y diseño en Ruby, ¿cuál es el propósito de «Property testing»?",
    "options": [
      "Expresa ejemplos y expectativas con hooks acotados para que cada fallo explique un comportamiento al evaluar.",
      "Comprueban que métodos simulados existen realmente y evita contratos ficticios en las pruebas en el flujo.",
      "Modifica operadores y ramas para revelar aserciones que ejecutan código sin detectar resultados incorrectos.",
      "Genera entradas y reduce contraejemplos para comprobar invariantes más allá de casos elegidos manualmente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Property testing (Pruebas y diseño): Genera entradas y reduce contraejemplos para comprobar invariantes más allá de casos elegidos manualmente.",
    "topic": "Pruebas y diseño",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-41",
    "collectionId": "ruby",
    "question": "En Ruby (Pruebas y diseño), ¿qué función técnica cumple «Dobles verificados»?",
    "options": [
      "Comprueban que métodos simulados existen realmente y evita contratos ficticios en las pruebas.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables al operar.",
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes.",
      "Recolecta objetos jóvenes con mayor frecuencia aprovechando que la mayoría muere pronto."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dobles verificados (Pruebas y diseño): Comprueban que métodos simulados existen realmente y evitan contratos ficticios en las pruebas.",
    "topic": "Pruebas y diseño",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-42",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Mutation testing» en pruebas y diseño?",
    "options": [
      "Expresa ejemplos y expectativas con hooks acotados para que cada fallo explique un comportamiento en ejecución.",
      "Modifica operadores y ramas para revelar aserciones que ejecutan código sin detectar resultados incorrectos.",
      "Genera entradas y reduce contraejemplos para comprobar invariantes más allá de casos elegidos manualmente.",
      "Comprueban que métodos simulados existen realmente y evita contratos ficticios en las pruebas con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mutation testing (Pruebas y diseño): Modifica operadores y ramas para revelar aserciones que ejecutan código sin detectar resultados incorrectos.",
    "topic": "Pruebas y diseño",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-43",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Arquitectura hexagonal en Ruby»?",
    "options": [
      "Expone next y rewind para que quien consume controle el avance de una secuencia al operar.",
      "Expone streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre.",
      "Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables.",
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Arquitectura hexagonal en Ruby (Pruebas y diseño): Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables.",
    "topic": "Pruebas y diseño",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-44",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «Bundler audit»?",
    "options": [
      "Impide que formatos capaces de instanciar objetos procesen contenido controlado externamente al operar.",
      "Cifra secretos en reposo, limita acceso y permite rotarlos sin reconstruir toda la aplicación al operar.",
      "Usa APIs con argumentos separados y listas permitidas en lugar de interpolar datos en un shell.",
      "Compara dependencias bloqueadas con avisos conocidos y obliga a evaluar actualización o mitigación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Bundler audit (Seguridad del ecosistema): Compara dependencias bloqueadas con avisos conocidos y obliga a evaluar actualización o mitigación.",
    "topic": "Seguridad del ecosistema",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-45",
    "collectionId": "ruby",
    "question": "Respecto a seguridad del ecosistema en Ruby, ¿cuál es el propósito de «Firmas de gemas»?",
    "options": [
      "Aportan procedencia solo cuando claves, política de confianza y verificación están configuradas coherentemente.",
      "Compara dependencias bloqueadas con avisos conocidos y obliga a evaluar actualización o mitigación al operar.",
      "Usa APIs con argumentos separados y listas permitidas en lugar de interpolar datos en un shell con precisión.",
      "Cifra secretos en reposo, limita acceso y permite rotarlos sin reconstruir toda la aplicación de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Firmas de gemas (Seguridad del ecosistema): Aportan procedencia solo cuando claves, política de confianza y verificación están configuradas coherentemente.",
    "topic": "Seguridad del ecosistema",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-46",
    "collectionId": "ruby",
    "question": "En Ruby (Seguridad del ecosistema), ¿qué función técnica cumple «Deserialización insegura»?",
    "options": [
      "Cifra secretos en reposo, limita acceso y permite rotarlos sin reconstruir toda la aplicación.",
      "Impide que formatos capaces de instanciar objetos procesen contenido controlado externamente.",
      "Usa APIs con argumentos separados y listas permitidas en lugar de interpolar datos en un shell.",
      "Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Deserialización insegura (Seguridad del ecosistema): Impide que formatos capaces de instanciar objetos procesen contenido controlado externamente.",
    "topic": "Seguridad del ecosistema",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-47",
    "collectionId": "ruby",
    "question": "Dentro de Ruby, ¿cómo opera el mecanismo de «Command injection» en seguridad del ecosistema?",
    "options": [
      "Impide que formatos capaces de instanciar objetos procesen contenido controlado externamente al operar.",
      "Cifra secretos en reposo, limita acceso y permite rotarlos sin reconstruir toda la aplicación.",
      "Usa APIs con argumentos separados y listas permitidas en lugar de interpolar datos en un shell.",
      "Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Command injection (Seguridad del ecosistema): Usa APIs con argumentos separados y listas permitidas en lugar de interpolar datos en un shell.",
    "topic": "Seguridad del ecosistema",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-48",
    "collectionId": "ruby",
    "question": "Al trabajar con Ruby, ¿qué responsabilidad define a «Gestión de credenciales»?",
    "options": [
      "Impide que formatos capaces de instanciar objetos procesen contenido controlado externamente al operar.",
      "Usa APIs con argumentos separados y listas permitidas en lugar de interpolar datos en un shell.",
      "Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes al operar.",
      "Cifra secretos en reposo, limita acceso y permite rotarlos sin reconstruir toda la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Gestión de credenciales (Seguridad del ecosistema): Cifra secretos en reposo, limita acceso y permite rotarlos sin reconstruir toda la aplicación.",
    "topic": "Seguridad del ecosistema",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-49",
    "collectionId": "ruby",
    "question": "En la arquitectura de Ruby, ¿qué caracteriza técnicamente a «Gemspec»?",
    "options": [
      "Declara archivos, plataforma, licencia y dependencias que forman el contrato distribuible de una gema al operar.",
      "Expanden argumentos posicionales o keywords y hacen explícita la forma de una llamada flexible al operar.",
      "Observan herencia, inclusión y definición para registrar comportamiento en el momento correcto al operar.",
      "Encadenan transformaciones bajo demanda y evita materializar colecciones intermedias o infinitas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Gemspec (Empaquetado y operación): Declara archivos, plataforma, licencia y dependencias que forman el contrato distribuible de una gema.",
    "topic": "Empaquetado y operación",
    "difficulty": "avanzado"
  },
  {
    "id": "ruby-q-50",
    "collectionId": "ruby",
    "question": "Respecto a empaquetado y operación en Ruby, ¿cuál es el propósito de «Resolución de dependencias»?",
    "options": [
      "Declara archivos, plataforma, licencia y dependencias que forman el contrato distribuible de una gema al operar.",
      "Encuentra un conjunto compatible de versiones y lo fija para que instalaciones posteriores sean repetibles.",
      "Entrega fragmentos antes de completar el cuerpo controlando backpressure y desconexiones del cliente al operar.",
      "Agrupa escrituras atómicas y coordinan competidores sin extender la sección crítica innecesariamente al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Resolución de dependencias (Empaquetado y operación): Encuentra un conjunto compatible de versiones y lo fija para que instalaciones posteriores sean repetibles.",
    "topic": "Empaquetado y operación",
    "difficulty": "avanzado"
  }
];
