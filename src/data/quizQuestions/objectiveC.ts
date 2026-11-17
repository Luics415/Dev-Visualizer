import type { QuizQuestion } from "@/data/quizTypes";

export const objectiveCQuestions: QuizQuestion[] = [
  {
    "id": "objective-c-q-01",
    "collectionId": "objective-c",
    "question": "En Objective-C (Lenguaje, objetos e isa), ¿qué función técnica cumple «Clases, objetos e isa»?",
    "options": [
      "Relaciona cada instancia con la clase que guía el despacho de mensajes dentro del flujo.",
      "Construye instancias respetando la cadena de inicialización designada de forma segura.",
      "Usa sintaxis concisa para arrays, diccionarios y números encapsulados de forma segura.",
      "Separa nombre de operación de la implementación elegida en runtime de modo predecible."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Clases, objetos e isa (Lenguaje, objetos e isa): Relaciona cada instancia con la clase que guía el despacho de mensajes.",
    "topic": "Lenguaje, objetos e isa",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-02",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Mensajes y selectors (SEL)» en lenguaje, objetos e isa?",
    "options": [
      "Relaciona cada instancia con la clase que guía el despacho de mensajes de modo predecible.",
      "Separa nombre de operación de la implementación elegida en runtime durante la ejecución.",
      "Construye instancias respetando la cadena de inicialización designada sin perder estado.",
      "Usa sintaxis concisa para arrays, diccionarios y números encapsulados sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mensajes y selectors (SEL) (Lenguaje, objetos e isa): Separa nombre de operación de la implementación elegida en runtime.",
    "topic": "Lenguaje, objetos e isa",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-03",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Métodos de instancia»?",
    "options": [
      "Relaciona cada instancia con la clase que guía el despacho de mensajes de modo predecible.",
      "Construye instancias respetando la cadena de inicialización designada sin perder estado.",
      "Distingue mensajes a instancias de mensajes al objeto metaclase dentro de la aplicación.",
      "Usa sintaxis concisa para arrays, diccionarios y números encapsulados sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Métodos de instancia y clase (Lenguaje, objetos e isa): Distingue mensajes a instancias de mensajes al objeto metaclase.",
    "topic": "Lenguaje, objetos e isa",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-04",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Properties e ivars»?",
    "options": [
      "Relaciona cada instancia con la clase que guía el despacho de mensajes en el flujo.",
      "Construye instancias respetando la cadena de inicialización designada al operar.",
      "Usa sintaxis concisa para arrays, diccionarios y números encapsulados al operar.",
      "Expone acceso con semántica de ownership dentro del ciclo operativo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Properties e ivars (Lenguaje, objetos e isa): Expone acceso con semántica de ownership (strong, weak, copy, assign).",
    "topic": "Lenguaje, objetos e isa",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-05",
    "collectionId": "objective-c",
    "question": "Respecto a lenguaje, objetos e isa en Objective-C, ¿cuál es el propósito de «Inicializadores y ciclo de vida»?",
    "options": [
      "Construye instancias respetando la cadena de inicialización designada sin perder estado.",
      "Relaciona cada instancia con la clase que guía el despacho de mensajes de forma clara.",
      "Usa sintaxis concisa para arrays, diccionarios y números encapsulados de forma segura.",
      "Separa nombre de operación de la implementación elegida en runtime de modo predecible."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Inicializadores y ciclo de vida (Lenguaje, objetos e isa): Construye instancias respetando la cadena de inicialización designada.",
    "topic": "Lenguaje, objetos e isa",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-06",
    "collectionId": "objective-c",
    "question": "En Objective-C (Lenguaje, objetos e isa), ¿qué función técnica cumple «Literales de Foundation»?",
    "options": [
      "Relaciona cada instancia con la clase que guía el despacho de mensajes de modo predecible.",
      "Usa sintaxis concisa para arrays, diccionarios y números encapsulados sin perder estado.",
      "Construye instancias respetando la cadena de inicialización designada sin perder estado.",
      "Separa nombre de operación de la implementación elegida en runtime durante la ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Literales de Foundation (Lenguaje, objetos e isa): Usa sintaxis concisa para arrays, diccionarios y números encapsulados.",
    "topic": "Lenguaje, objetos e isa",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-07",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Función objc_msgSend» en despacho dinámico y objc_msgsend?",
    "options": [
      "Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución al operar.",
      "Intercambia implementaciones de métodos en runtime para instrumentación y diagnósticos.",
      "Despacha un selector respetando firma, registros y arquitectura ABI de Apple al evaluar.",
      "Obtiene llamadas directas a funciones C para optimizar bucles intensivos de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Función objc_msgSend (Despacho dinámico y objc_msgSend): Despacha un selector respetando firma, registros y arquitectura ABI de Apple.",
    "topic": "Despacho dinámico y objc_msgSend",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-08",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Method lookup y cache interno»?",
    "options": [
      "Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución al operar.",
      "Despacha un selector respetando firma, registros y arquitectura ABI de Apple al evaluar.",
      "Intercambia implementaciones de métodos en runtime para instrumentación y diagnósticos.",
      "Reutiliza punteros de función IMP resueltos sin recalcular la jerarquía de forma segura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Method lookup y cache interno (Despacho dinámico y objc_msgSend): Reutiliza punteros de función IMP resueltos sin recalcular la jerarquía.",
    "topic": "Despacho dinámico y objc_msgSend",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-09",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Method Swizzling»?",
    "options": [
      "Intercambia implementaciones de métodos en runtime para instrumentación y diagnósticos.",
      "Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución.",
      "Despacha un selector respetando firma, registros y arquitectura ABI de Apple al operar.",
      "Obtiene llamadas directas a funciones C para optimizar bucles intensivos en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Method Swizzling (Despacho dinámico y objc_msgSend): Intercambia implementaciones de métodos en runtime para instrumentación y diagnósticos.",
    "topic": "Despacho dinámico y objc_msgSend",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-10",
    "collectionId": "objective-c",
    "question": "Respecto a despacho dinámico y objc_msgsend en Objective-C, ¿cuál es el propósito de «Punteros de implementación IMP»?",
    "options": [
      "Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución al operar.",
      "Obtiene llamadas directas a funciones C para optimizar bucles intensivos de forma clara.",
      "Despacha un selector respetando firma, registros y arquitectura ABI de Apple al evaluar.",
      "Intercambia implementaciones de métodos en runtime para instrumentación y diagnósticos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Punteros de implementación IMP (Despacho dinámico y objc_msgSend): Obtiene llamadas directas a funciones C para optimizar bucles intensivos.",
    "topic": "Despacho dinámico y objc_msgSend",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-11",
    "collectionId": "objective-c",
    "question": "En Objective-C (Despacho dinámico y objc_msgSend), ¿qué función técnica cumple «Resolución dinámica de métodos»?",
    "options": [
      "Intercambia implementaciones de métodos en runtime para instrumentación y diagnósticos al operar.",
      "Despacha un selector respetando firma, registros y arquitectura ABI de Apple con precisión.",
      "Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución al operar.",
      "Obtiene llamadas directas a funciones C para optimizar bucles intensivos sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Resolución dinámica de métodos (Despacho dinámico y objc_msgSend): Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución.",
    "topic": "Despacho dinámico y objc_msgSend",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-12",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Estructura objc_class y metaclases» en despacho dinámico y objc_msgsend?",
    "options": [
      "Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución al operar.",
      "Despacha un selector respetando firma, registros y arquitectura ABI de Apple al operar.",
      "Intercambia implementaciones de métodos en runtime para instrumentación y diagnósticos.",
      "Comprende la tabla de métodos, variables y protocolos de cada clase de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Estructura objc_class y metaclases (Despacho dinámico y objc_msgSend): Comprende la tabla de métodos, variables y protocolos de cada clase.",
    "topic": "Despacho dinámico y objc_msgSend",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-13",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Introspección con isKindOfClass y respondsToSelector»?",
    "options": [
      "Verifica capacidades antes de invocar métodos opcionales manteniendo el contrato activo.",
      "Captura invocaciones inválidas antes de que provoquen un crash no controlado al operar.",
      "Obtiene metadata de tipos de argumentos y retorno para empaquetar llamadas al evaluar.",
      "Crea objetos sustitutos para balanceo, logging y arquitectura distribuida en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Introspección con isKindOfClass y respondsToSelector (Introspección, selectors y message forwarding): Verifica capacidades antes de invocar métodos opcionales.",
    "topic": "Introspección, selectors y message forwarding",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-14",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Fast forwarding con forwardingTargetForSelector»?",
    "options": [
      "Captura invocaciones inválidas antes de que provoquen un crash no controlado con precisión.",
      "Redirige mensajes a objetos delegados sin crear invocaciones completas dentro del flujo.",
      "Obtiene metadata de tipos de argumentos y retorno para empaquetar llamadas en ejecución.",
      "Crea objetos sustitutos para balanceo, logging y arquitectura distribuida con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fast forwarding con forwardingTargetForSelector (Introspección, selectors y message forwarding): Redirige mensajes a objetos delegados sin crear invocaciones completas.",
    "topic": "Introspección, selectors y message forwarding",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-15",
    "collectionId": "objective-c",
    "question": "Respecto a introspección, selectors y message forwarding en Objective-C, ¿cuál es el propósito de «Normal forwarding con forwardInvocation»?",
    "options": [
      "Captura invocaciones inválidas antes de que provoquen un crash no controlado con precisión.",
      "Obtiene metadata de tipos de argumentos y retorno para empaquetar llamadas en ejecución.",
      "Construye objetos NSInvocation para reescribir argumentos y despachar sin perder estado.",
      "Crea objetos sustitutos para balanceo, logging y arquitectura distribuida con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Normal forwarding con forwardInvocation (Introspección, selectors y message forwarding): Construye objetos NSInvocation para reescribir argumentos y despachar.",
    "topic": "Introspección, selectors y message forwarding",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-16",
    "collectionId": "objective-c",
    "question": "En Objective-C (Introspección, selectors y message forwarding), ¿qué función técnica cumple «Clasificación NSMethodSignature»?",
    "options": [
      "Captura invocaciones inválidas antes de que provoquen un crash no controlado con precisión.",
      "Crea objetos sustitutos para balanceo, logging y arquitectura distribuida con precisión.",
      "Redirige mensajes a objetos delegados sin crear invocaciones completas dentro del flujo.",
      "Obtiene metadata de tipos de argumentos y retorno para empaquetar llamadas en ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Clasificación NSMethodSignature (Introspección, selectors y message forwarding): Obtiene metadata de tipos de argumentos y retorno para empaquetar llamadas.",
    "topic": "Introspección, selectors y message forwarding",
    "difficulty": "básico"
  },
  {
    "id": "objective-c-q-17",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Manejo de doesNotRecognizeSelector» en introspección, selectors y message forwarding?",
    "options": [
      "Captura invocaciones inválidas antes de que provoquen un crash no controlado al evaluar.",
      "Obtiene metadata de tipos de argumentos y retorno para empaquetar llamadas al evaluar.",
      "Crea objetos sustitutos para balanceo, logging y arquitectura distribuida en el flujo.",
      "Redirige mensajes a objetos delegados sin crear invocaciones completas de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Manejo de doesNotRecognizeSelector (Introspección, selectors y message forwarding): Captura invocaciones inválidas antes de que provoquen un crash no controlado.",
    "topic": "Introspección, selectors y message forwarding",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-18",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Dynamic proxying con NSProxy»?",
    "options": [
      "Captura invocaciones inválidas antes de que provoquen un crash no controlado con precisión.",
      "Crea objetos sustitutos para balanceo, logging y arquitectura distribuida con precisión.",
      "Obtiene metadata de tipos de argumentos y retorno para empaquetar llamadas en ejecución.",
      "Redirige mensajes a objetos delegados sin crear invocaciones completas dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dynamic proxying con NSProxy (Introspección, selectors y message forwarding): Crea objetos sustitutos para balanceo, logging y arquitectura distribuida.",
    "topic": "Introspección, selectors y message forwarding",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-19",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Strong, weak y unsafe references»?",
    "options": [
      "Garantiza que bloques que capturan estado local se trasladen del stack al heap en el flujo.",
      "Detecta ciclos de retención mutua donde dos objetos impiden su desasignación al evaluar.",
      "Expresa ownership, observación y riesgos de punteros colgantes manteniendo consistencia.",
      "Desuscribe notificaciones y cierra handles sin llamar explícitamente a retain o release."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Strong, weak y unsafe references (Gestión de memoria y semántica ARC): Expresa ownership, observación y riesgos de punteros colgantes.",
    "topic": "Gestión de memoria y semántica ARC",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-20",
    "collectionId": "objective-c",
    "question": "Respecto a gestión de memoria y semántica arc en Objective-C, ¿cuál es el propósito de «Autorelease pools y @autoreleasepool»?",
    "options": [
      "Garantiza que bloques que capturan estado local se trasladen del stack al heap en el flujo.",
      "Detecta ciclos de retención mutua donde dos objetos impiden su desasignación al evaluar.",
      "Desuscribe notificaciones y cierra handles sin llamar explícitamente a retain o release.",
      "Difiere llamadas release dentro de bloques con límites deterministas de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Autorelease pools y @autoreleasepool (Gestión de memoria y semántica ARC): Difiere llamadas release dentro de bloques con límites deterministas.",
    "topic": "Gestión de memoria y semántica ARC",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-21",
    "collectionId": "objective-c",
    "question": "En Objective-C (Gestión de memoria y semántica ARC), ¿qué función técnica cumple «Retain cycles en bloques y delegates»?",
    "options": [
      "Detecta ciclos de retención mutua donde dos objetos impiden su desasignación de forma clara.",
      "Garantiza que bloques que capturan estado local se trasladen del stack al heap al operar.",
      "Desuscribe notificaciones y cierra handles sin llamar explícitamente a retain o release.",
      "Difiere llamadas release dentro de bloques con límites deterministas dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Retain cycles en bloques y delegates (Gestión de memoria y semántica ARC): Detecta ciclos de retención mutua donde dos objetos impiden su desasignación.",
    "topic": "Gestión de memoria y semántica ARC",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-22",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Bridging con Core Foundation» en gestión de memoria y semántica arc?",
    "options": [
      "Desuscribe notificaciones y cierra handles sin llamar explícitamente a retain o release dentro de la aplicación.",
      "Transfiere ownership entre objetos Objective-C y tipos C con __bridge, __bridge_transfer y __bridge_retained.",
      "Garantiza que bloques que capturan estado local se trasladen del stack al heap bajo condiciones productivas.",
      "Detecta ciclos de retención mutua donde dos objetos impiden su desasignación durante la ejecución del módulo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bridging con Core Foundation (Gestión de memoria y semántica ARC): Transfiere ownership entre objetos Objective-C y tipos C con __bridge, __bridge_transfer y __bridge_retained.",
    "topic": "Gestión de memoria y semántica ARC",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-23",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Semántica de copia para bloques»?",
    "options": [
      "Desuscribe notificaciones y cierra handles sin llamar explícitamente a retain o release al operar.",
      "Detecta ciclos de retención mutua donde dos objetos impiden su desasignación en el flujo.",
      "Garantiza que bloques que capturan estado local se trasladen del stack al heap al operar.",
      "Difiere llamadas release dentro de bloques con límites deterministas de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Semántica de copia para bloques (Gestión de memoria y semántica ARC): Garantiza que bloques que capturan estado local se trasladen del stack al heap.",
    "topic": "Gestión de memoria y semántica ARC",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-24",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Método dealloc y limpieza de recursos»?",
    "options": [
      "Garantiza que bloques que capturan estado local se trasladen del stack al heap en el flujo.",
      "Detecta ciclos de retención mutua donde dos objetos impiden su desasignación al evaluar.",
      "Difiere llamadas release dentro de bloques con límites deterministas de modo predecible.",
      "Desuscribe notificaciones y cierra handles sin llamar explícitamente a retain o release."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Método dealloc y limpieza de recursos (Gestión de memoria y semántica ARC): Desuscribe notificaciones y cierra handles sin llamar explícitamente a retain o release.",
    "topic": "Gestión de memoria y semántica ARC",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-25",
    "collectionId": "objective-c",
    "question": "Respecto a composición cocoa, categorías y protocolos en Objective-C, ¿cuál es el propósito de «Protocols y métodos requeridos u opcionales»?",
    "options": [
      "Declara contratos de interfaz desacoplados de jerarquías de herencia sin degradar el flujo.",
      "Observa cambios en propiedades de objetos con notificaciones automáticas o manuales.",
      "Agrega métodos a clases existentes y encapsula miembros privados sin subclases al operar.",
      "Entrega decisiones y eventos a otro objeto con referencias débiles para evitar ciclos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Protocols y métodos requeridos u opcionales (Composición Cocoa, categorías y protocolos): Declara contratos de interfaz desacoplados de jerarquías de herencia.",
    "topic": "Composición Cocoa, categorías y protocolos",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-26",
    "collectionId": "objective-c",
    "question": "En Objective-C (Composición Cocoa, categorías y protocolos), ¿qué función técnica cumple «Categories»?",
    "options": [
      "Observa cambios en propiedades de objetos con notificaciones automáticas o manuales al operar.",
      "Agrega métodos a clases existentes y encapsula miembros privados sin subclases al operar.",
      "Entrega decisiones y eventos a otro objeto con referencias débiles para evitar ciclos.",
      "Asocia estado arbitrario a instancias existentes usando claves de runtime de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Categories y class extensions (Composición Cocoa, categorías y protocolos): Agrega métodos a clases existentes y encapsula miembros privados sin subclases.",
    "topic": "Composición Cocoa, categorías y protocolos",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-27",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Patrón Delegation» en composición cocoa, categorías y protocolos?",
    "options": [
      "Agrega métodos a clases existentes y encapsula miembros privados sin subclases al operar.",
      "Observa cambios en propiedades de objetos con notificaciones automáticas o manuales.",
      "Entrega decisiones y eventos a otro objeto con referencias débiles para evitar ciclos.",
      "Asocia estado arbitrario a instancias existentes usando claves de runtime en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Patrón Delegation (Composición Cocoa, categorías y protocolos): Entrega decisiones y eventos a otro objeto con referencias débiles para evitar ciclos.",
    "topic": "Composición Cocoa, categorías y protocolos",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-28",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Key-Value Coding (KVC)»?",
    "options": [
      "Observa cambios en propiedades de objetos con notificaciones automáticas o manuales al operar.",
      "Agrega métodos a clases existentes y encapsula miembros privados sin subclases al operar.",
      "Entrega decisiones y eventos a otro objeto con referencias débiles para evitar ciclos.",
      "Accede a propiedades indirectamente mediante nombres de clave en runtime de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Key-Value Coding (KVC) (Composición Cocoa, categorías y protocolos): Accede a propiedades indirectamente mediante nombres de clave en runtime.",
    "topic": "Composición Cocoa, categorías y protocolos",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-29",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Key-Value Observing (KVO)»?",
    "options": [
      "Observa cambios en propiedades de objetos con notificaciones automáticas o manuales.",
      "Agrega métodos a clases existentes y encapsula miembros privados sin subclases.",
      "Asocia estado arbitrario a instancias existentes usando claves de runtime al operar.",
      "Accede a propiedades indirectamente mediante nombres de clave en runtime al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Key-Value Observing (KVO) (Composición Cocoa, categorías y protocolos): Observa cambios en propiedades de objetos con notificaciones automáticas o manuales.",
    "topic": "Composición Cocoa, categorías y protocolos",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-30",
    "collectionId": "objective-c",
    "question": "Respecto a composición cocoa, categorías y protocolos en Objective-C, ¿cuál es el propósito de «Associated Objects»?",
    "options": [
      "Observa cambios en propiedades de objetos con notificaciones automáticas o manuales al operar.",
      "Asocia estado arbitrario a instancias existentes usando claves de runtime con precisión.",
      "Agrega métodos a clases existentes y encapsula miembros privados sin subclases al operar.",
      "Entrega decisiones y eventos a otro objeto con referencias débiles para evitar ciclos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Associated Objects (Composición Cocoa, categorías y protocolos): Asocia estado arbitrario a instancias existentes usando claves de runtime.",
    "topic": "Composición Cocoa, categorías y protocolos",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-31",
    "collectionId": "objective-c",
    "question": "En Objective-C (Grand Central Dispatch, colas y asincronía), ¿qué función técnica cumple «Colas seriales y concurrentes en GCD»?",
    "options": [
      "Permite lecturas concurrentes y restringe escrituras exclusivas en un recurso al operar.",
      "Captura variables locales con __block para mutación segura dentro de tareas al operar.",
      "Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales.",
      "Espera la finalización de múltiples tareas no bloqueantes independientes al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Colas seriales y concurrentes en GCD (Grand Central Dispatch, colas y asincronía): Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales.",
    "topic": "Grand Central Dispatch, colas y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-32",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Main Queue y actualizaciones de interfaz» en grand central dispatch, colas y asincronía?",
    "options": [
      "Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales al operar.",
      "Permite lecturas concurrentes y restringe escrituras exclusivas en un recurso al operar.",
      "Captura variables locales con __block para mutación segura dentro de tareas al evaluar.",
      "Fuerza la ejecución de cambios en UI en el hilo principal bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Main Queue y actualizaciones de interfaz (Grand Central Dispatch, colas y asincronía): Fuerza la ejecución de cambios en UI en el hilo principal.",
    "topic": "Grand Central Dispatch, colas y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-33",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Dispatch groups y sincronización»?",
    "options": [
      "Espera la finalización de múltiples tareas no bloqueantes independientes sin perder estado.",
      "Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales.",
      "Permite lecturas concurrentes y restringe escrituras exclusivas en un recurso al operar.",
      "Captura variables locales con __block para mutación segura dentro de tareas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dispatch groups y sincronización (Grand Central Dispatch, colas y asincronía): Espera la finalización de múltiples tareas asíncronas independientes.",
    "topic": "Grand Central Dispatch, colas y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-34",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Dispatch barriers y patrón reader-writer»?",
    "options": [
      "Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales al operar.",
      "Permite lecturas concurrentes y restringe escrituras exclusivas en un recurso al operar.",
      "Captura variables locales con __block para mutación segura dentro de tareas en el flujo.",
      "Espera la finalización de múltiples tareas no bloqueantes independientes de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dispatch barriers y patrón reader-writer (Grand Central Dispatch, colas y asincronía): Permite lecturas concurrentes y restringe escrituras exclusivas en un recurso.",
    "topic": "Grand Central Dispatch, colas y asincronía",
    "difficulty": "intermedio"
  },
  {
    "id": "objective-c-q-35",
    "collectionId": "objective-c",
    "question": "Respecto a grand central dispatch, colas y asincronía en Objective-C, ¿cuál es el propósito de «Bloques como callbacks de finalización»?",
    "options": [
      "Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales al operar.",
      "Permite lecturas concurrentes y restringe escrituras exclusivas en un recurso al operar.",
      "Captura variables locales con __block para mutación segura dentro de tareas en el flujo.",
      "Espera la finalización de múltiples tareas no bloqueantes independientes de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bloques como callbacks de finalización (Grand Central Dispatch, colas y asincronía): Captura variables locales con __block para mutación segura dentro de tareas.",
    "topic": "Grand Central Dispatch, colas y asincronía",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-36",
    "collectionId": "objective-c",
    "question": "En Objective-C (Grand Central Dispatch, colas y asincronía), ¿qué función técnica cumple «Operaciones NSOperation y NSOperationQueue»?",
    "options": [
      "Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales al operar.",
      "Permite lecturas concurrentes y restringe escrituras exclusivas en un recurso al operar.",
      "Captura variables locales con __block para mutación segura dentro de tareas en el flujo.",
      "Modela dependencias, prioridades y cancelación de tareas complejas durante la ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Operaciones NSOperation y NSOperationQueue (Grand Central Dispatch, colas y asincronía): Modela dependencias, prioridades y cancelación de tareas complejas.",
    "topic": "Grand Central Dispatch, colas y asincronía",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-37",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Nullability annotations (_Nonnull, _Nullable)» en fronteras seguras con swift y modernización?",
    "options": [
      "Informa al compilador de Swift sobre la presencia segura de valores nulos de modo predecible.",
      "Anota tipos de elementos en NSArray y NSDictionary para tipado estricto en Swift al operar.",
      "Personaliza nombres y firmas de métodos para integrarse con modismos Swift al evaluar.",
      "Permite reemplazar implementaciones antiguas sin tocar código consumidor en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Nullability annotations (_Nonnull, _Nullable) (Fronteras seguras con Swift y modernización): Informa al compilador de Swift sobre la presencia segura de valores nulos.",
    "topic": "Fronteras seguras con Swift y modernización",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-38",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Generics ligeros en colecciones»?",
    "options": [
      "Personaliza nombres y firmas de métodos para integrarse con modismos Swift de modo predecible.",
      "Anota tipos de elementos en NSArray y NSDictionary para tipado estricto en Swift al operar.",
      "Informa al compilador de Swift sobre la presencia segura de valores nulos dentro del flujo.",
      "Permite reemplazar implementaciones antiguas sin tocar código consumidor sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Generics ligeros en colecciones (Fronteras seguras con Swift y modernización): Anota tipos de elementos en NSArray y NSDictionary para tipado estricto en Swift.",
    "topic": "Fronteras seguras con Swift y modernización",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-39",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Bridging headers de proyecto»?",
    "options": [
      "Anota tipos de elementos en NSArray y NSDictionary para tipado estricto en Swift al operar.",
      "Personaliza nombres y firmas de métodos para integrarse con modismos Swift en ejecución.",
      "Expone interfaces de Objective-C al módulo de Swift de forma controlada de forma segura.",
      "Informa al compilador de Swift sobre la presencia segura de valores nulos con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bridging headers de proyecto (Fronteras seguras con Swift y modernización): Expone interfaces de Objective-C al módulo de Swift de forma controlada.",
    "topic": "Fronteras seguras con Swift y modernización",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-40",
    "collectionId": "objective-c",
    "question": "Respecto a fronteras seguras con swift y modernización en Objective-C, ¿cuál es el propósito de «Atributos NS_SWIFT_NAME»?",
    "options": [
      "Anota tipos de elementos en NSArray y NSDictionary para tipado estricto en Swift al operar.",
      "Informa al compilador de Swift sobre la presencia segura de valores nulos con precisión.",
      "Permite reemplazar implementaciones antiguas sin tocar código consumidor de forma clara.",
      "Personaliza nombres y firmas de métodos para integrarse con modismos Swift en ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Atributos NS_SWIFT_NAME y NS_REFINED_FOR_SWIFT (Fronteras seguras con Swift y modernización): Personaliza nombres y firmas de métodos para integrarse con modismos Swift.",
    "topic": "Fronteras seguras con Swift y modernización",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-41",
    "collectionId": "objective-c",
    "question": "En Objective-C (Fronteras seguras con Swift y modernización), ¿qué función técnica cumple «NS_ENUM y NS_OPTIONS»?",
    "options": [
      "Convierte enumeraciones C en tipos exhaustivos e integrados en Swift manteniendo consistencia.",
      "Anota tipos de elementos en NSArray y NSDictionary para tipado estricto en Swift al operar.",
      "Personaliza nombres y firmas de métodos para integrarse con modismos Swift al evaluar.",
      "Informa al compilador de Swift sobre la presencia segura de valores nulos en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "NS_ENUM y NS_OPTIONS (Fronteras seguras con Swift y modernización): Convierte enumeraciones C en tipos exhaustivos e integrados en Swift.",
    "topic": "Fronteras seguras con Swift y modernización",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-42",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Aislamiento de módulos legados detrás de protocolos» en fronteras seguras con swift y modernización?",
    "options": [
      "Anota tipos de elementos en NSArray y NSDictionary para tipado estricto en Swift al operar.",
      "Permite reemplazar implementaciones antiguas sin tocar código consumidor de forma clara.",
      "Personaliza nombres y firmas de métodos para integrarse con modismos Swift en ejecución.",
      "Informa al compilador de Swift sobre la presencia segura de valores nulos con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Aislamiento de módulos legados detrás de protocolos (Fronteras seguras con Swift y modernización): Permite reemplazar implementaciones antiguas sin tocar código consumidor.",
    "topic": "Fronteras seguras con Swift y modernización",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-43",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Depuración con LLDB y comandos po»?",
    "options": [
      "Convierte use-after-free en objetos centinela que reportan el selector que falló al operar.",
      "Detecta fugas de memoria, nulos accidentales y variables sin inicializar en compilación.",
      "Inspecciona descripciones de objetos y evalúa expresiones en tiempo real de forma clara.",
      "Valida contratos de interfaces heredadas antes de aplicar refactorizaciones en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Depuración con LLDB y comandos po (Diagnóstico, LLDB y profiling en Instruments): Inspecciona descripciones de objetos y evalúa expresiones en tiempo real.",
    "topic": "Diagnóstico, LLDB y profiling en Instruments",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-44",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Herramienta Leaks y Allocations en Instruments»?",
    "options": [
      "Convierte use-after-free en objetos centinela que reportan el selector que falló al operar.",
      "Detecta fugas de memoria, nulos accidentales y variables sin inicializar en compilación.",
      "Valida contratos de interfaces heredadas antes de aplicar refactorizaciones en el flujo.",
      "Rastrea memoria asignada y localiza ciclos de retención activos dentro de la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Herramienta Leaks y Allocations en Instruments (Diagnóstico, LLDB y profiling en Instruments): Rastrea memoria asignada y localiza ciclos de retención activos.",
    "topic": "Diagnóstico, LLDB y profiling en Instruments",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-45",
    "collectionId": "objective-c",
    "question": "Respecto a diagnóstico, lldb y profiling en instruments en Objective-C, ¿cuál es el propósito de «Time Profiler y cuellos de botella de CPU»?",
    "options": [
      "Localiza llamadas lentas e invocaciones de objc_msgSend redundantes sin degradar el flujo.",
      "Convierte use-after-free en objetos centinela que reportan el selector que falló.",
      "Valida contratos de interfaces heredadas antes de aplicar refactorizaciones al operar.",
      "Detecta fugas de memoria, nulos accidentales y variables sin inicializar en compilación."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Time Profiler y cuellos de botella de CPU (Diagnóstico, LLDB y profiling en Instruments): Localiza llamadas lentas e invocaciones de objc_msgSend redundantes.",
    "topic": "Diagnóstico, LLDB y profiling en Instruments",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-46",
    "collectionId": "objective-c",
    "question": "En Objective-C (Diagnóstico, LLDB y profiling en Instruments), ¿qué función técnica cumple «Zombies y depuración de memoria liberada»?",
    "options": [
      "Detecta fugas de memoria, nulos accidentales y variables sin inicializar en compilación al operar.",
      "Convierte use-after-free en objetos centinela que reportan el selector que falló al operar.",
      "Valida contratos de interfaces heredadas antes de aplicar refactorizaciones de forma clara.",
      "Inspecciona descripciones de objetos y evalúa expresiones en tiempo real sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Zombies y depuración de memoria liberada (Diagnóstico, LLDB y profiling en Instruments): Convierte use-after-free en objetos centinela que reportan el selector que falló.",
    "topic": "Diagnóstico, LLDB y profiling en Instruments",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-47",
    "collectionId": "objective-c",
    "question": "Dentro de Objective-C, ¿cómo opera el mecanismo de «Clang Static Analyzer integrado» en diagnóstico, lldb y profiling en instruments?",
    "options": [
      "Convierte use-after-free en objetos centinela que reportan el selector que falló al operar.",
      "Valida contratos de interfaces heredadas antes de aplicar refactorizaciones en el flujo.",
      "Detecta fugas de memoria, nulos accidentales y variables sin inicializar en compilación.",
      "Inspecciona descripciones de objetos y evalúa expresiones en tiempo real de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Clang Static Analyzer integrado (Diagnóstico, LLDB y profiling en Instruments): Detecta fugas de memoria, nulos accidentales y variables sin inicializar en compilación.",
    "topic": "Diagnóstico, LLDB y profiling en Instruments",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-48",
    "collectionId": "objective-c",
    "question": "Al trabajar con Objective-C, ¿qué responsabilidad define a «Pruebas unitarias con XCTest»?",
    "options": [
      "Convierte use-after-free en objetos centinela que reportan el selector que falló al operar.",
      "Detecta fugas de memoria, nulos accidentales y variables sin inicializar en compilación.",
      "Inspecciona descripciones de objetos y evalúa expresiones en tiempo real de forma clara.",
      "Valida contratos de interfaces heredadas antes de aplicar refactorizaciones en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pruebas unitarias con XCTest (Diagnóstico, LLDB y profiling en Instruments): Valida contratos de interfaces heredadas antes de aplicar refactorizaciones.",
    "topic": "Diagnóstico, LLDB y profiling en Instruments",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-49",
    "collectionId": "objective-c",
    "question": "En la arquitectura de Objective-C, ¿qué caracteriza técnicamente a «Reproducir la fuga»?",
    "options": [
      "Instruments y una secuencia repetible separan la fuga de variaciones normales de forma segura.",
      "ARC administra conteos, pero un ciclo fuerte sigue siendo alcanzable dentro del flujo.",
      "Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución al operar.",
      "Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reproducir la fuga (Caso en acción): Instruments y una secuencia repetible separan la fuga de variaciones normales.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "objective-c-q-50",
    "collectionId": "objective-c",
    "question": "Respecto a caso en acción en Objective-C, ¿cuál es el propósito de «Inspeccionar ownership»?",
    "options": [
      "Instruments y una secuencia repetible separan la fuga de variaciones normales en ejecución.",
      "ARC administra conteos, pero un ciclo fuerte sigue siendo alcanzable de modo predecible.",
      "Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución al operar.",
      "Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Inspeccionar ownership (Caso en acción): ARC administra conteos, pero un ciclo fuerte sigue siendo alcanzable.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  }
];
