import type { QuizQuestion } from "@/data/quizTypes";

export const stateManagementQuestions: QuizQuestion[] = [
  {
    "id": "state-management-q-01",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Modelado y propiedad del estado), ¿qué función técnica cumple «Qué es estado»?",
    "options": [
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo con precisión.",
      "Distingue memoria de componente, cliente compartido y datos del servidor de forma clara.",
      "Guarda una copia entre sesiones sin confundir persistencia con autoridad de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Qué es estado (Modelado y propiedad del estado): Información que cambia con el tiempo y modifica el comportamiento o la interfaz.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-02",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «Estado mínimo» en modelado y propiedad del estado?",
    "options": [
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Conserva fuentes de verdad y calcula el resto dentro del ciclo operativo del sistema.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo al evaluar.",
      "Distingue memoria de componente, cliente compartido y datos del servidor en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Estado mínimo (Modelado y propiedad del estado): Conserva fuentes de verdad y calcula el resto.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-03",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «Fuente única de verdad»?",
    "options": [
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al evaluar.",
      "Distingue memoria de componente, cliente compartido y datos del servidor de forma clara.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo con precisión.",
      "Guarda una copia entre sesiones sin confundir persistencia con autoridad de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fuente única de verdad (Modelado y propiedad del estado): Asigna una autoridad a cada dato para evitar copias editables compitiendo.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-04",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Propiedad y colocación»?",
    "options": [
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo al evaluar.",
      "Distingue memoria de componente, cliente compartido y datos del servidor en el flujo.",
      "Ubica el estado en el dueño común más cercano dentro del ciclo operativo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Propiedad y colocación (Modelado y propiedad del estado): Ubica el estado en el dueño común más cercano.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-05",
    "collectionId": "state-management",
    "question": "Respecto a modelado y propiedad del estado en Gestión de estado, ¿cuál es el propósito de «Estado local, global y remoto»?",
    "options": [
      "Distingue memoria de componente, cliente compartido y datos del servidor de modo predecible.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo en el flujo.",
      "Guarda una copia entre sesiones sin confundir persistencia con autoridad en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Estado local, global y remoto (Modelado y propiedad del estado): Distingue memoria de componente, cliente compartido y datos del servidor.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-06",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Modelado y propiedad del estado), ¿qué función técnica cumple «Estado de URL»?",
    "options": [
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al evaluar.",
      "Modela filtros o vistas compartibles mediante pathname y search params dentro del flujo.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo con precisión.",
      "Distingue memoria de componente, cliente compartido y datos del servidor de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Estado de URL (Modelado y propiedad del estado): Modela filtros o vistas compartibles mediante pathname y search params.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-07",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «Estado persistente» en modelado y propiedad del estado?",
    "options": [
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al evaluar.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo con precisión.",
      "Guarda una copia entre sesiones sin confundir persistencia con autoridad de forma clara.",
      "Distingue memoria de componente, cliente compartido y datos del servidor de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Estado persistente (Modelado y propiedad del estado): Guarda una copia entre sesiones sin confundir persistencia con autoridad.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-08",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «Estado derivado»?",
    "options": [
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo al operar.",
      "Distingue memoria de componente, cliente compartido y datos del servidor al operar.",
      "Guarda una copia entre sesiones sin confundir persistencia con autoridad al operar.",
      "Calcula valores desde fuentes existentes dentro del ciclo operativo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Estado derivado (Modelado y propiedad del estado): Calcula valores desde fuentes existentes.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-09",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Estados imposibles»?",
    "options": [
      "Representa variantes exclusivas para evitar combinaciones incoherentes sin degradar el flujo.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo en el flujo.",
      "Distingue memoria de componente, cliente compartido y datos del servidor en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Estados imposibles (Modelado y propiedad del estado): Representa variantes exclusivas para evitar combinaciones incoherentes.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-10",
    "collectionId": "state-management",
    "question": "Respecto a modelado y propiedad del estado en Gestión de estado, ¿cuál es el propósito de «Normalización e identidad»?",
    "options": [
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al evaluar.",
      "Guarda entidades por id y relaciones mediante referencias estables durante la ejecución.",
      "Asigna una autoridad a cada dato para evitar copias editables compitiendo con precisión.",
      "Distingue memoria de componente, cliente compartido y datos del servidor de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Normalización e identidad (Modelado y propiedad del estado): Guarda entidades por id y relaciones mediante referencias estables.",
    "topic": "Modelado y propiedad del estado",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-11",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Estado local en React), ¿qué función técnica cumple «useState»?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios de modo predecible.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Proporciona memoria local y un setter que solicita otro render manteniendo consistencia.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "useState (Estado local en React): Proporciona memoria local y un setter que solicita otro render.",
    "topic": "Estado local en React",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-12",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «Estado como snapshot» en estado local en react?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios de modo predecible.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Cada render observa una fotografía inmutable del estado durante la ejecución del módulo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Estado como snapshot (Estado local en React): Cada render observa una fotografía inmutable del estado.",
    "topic": "Estado local en React",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-13",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «Batching»?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios sin degradar el flujo.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Proporciona memoria local y un setter que solicita otro render sin degradar el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Batching (Estado local en React): Agrupa actualizaciones del mismo turno para evitar commits intermedios.",
    "topic": "Estado local en React",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-14",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Actualizaciones funcionales»?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios durante la ejecución.",
      "Calcula el siguiente valor desde el estado pendiente manteniendo la trazabilidad técnica.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Actualizaciones funcionales (Estado local en React): Calcula el siguiente valor desde el estado pendiente.",
    "topic": "Estado local en React",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-15",
    "collectionId": "state-management",
    "question": "Respecto a estado local en react en Gestión de estado, ¿cuál es el propósito de «Objetos inmutables»?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios dentro del flujo.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Crea nuevas referencias al actualizar objetos dentro del ciclo operativo del sistema.",
      "Proporciona memoria local y un setter que solicita otro render sin degradar el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Objetos inmutables (Estado local en React): Crea nuevas referencias al actualizar objetos.",
    "topic": "Estado local en React",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-16",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Estado local en React), ¿qué función técnica cumple «Arrays inmutables»?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios de modo predecible.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Usa map, filter y spread sin alterar la versión anterior manteniendo el contrato activo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Arrays inmutables (Estado local en React): Usa map, filter y spread sin alterar la versión anterior.",
    "topic": "Estado local en React",
    "difficulty": "básico"
  },
  {
    "id": "state-management-q-17",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «Inicialización perezosa» en estado local en react?",
    "options": [
      "Ejecuta una función costosa solo al crear el estado dentro del ciclo operativo del sistema.",
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios de forma clara.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Inicialización perezosa (Estado local en React): Ejecuta una función costosa solo al crear el estado.",
    "topic": "Estado local en React",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-18",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «Reset mediante key»?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios de modo predecible.",
      "Cambia identidad para descartar estado local de un subárbol respetando las invariantes.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Reset mediante key (Estado local en React): Cambia identidad para descartar estado local de un subárbol.",
    "topic": "Estado local en React",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-19",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «useReducer»?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios de modo predecible.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Centraliza transiciones complejas en una función pura dentro de la arquitectura activa.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "useReducer (Estado local en React): Centraliza transiciones complejas en una función pura.",
    "topic": "Estado local en React",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-20",
    "collectionId": "state-management",
    "question": "Respecto a estado local en react en Gestión de estado, ¿cuál es el propósito de «Context y reducer»?",
    "options": [
      "Agrupa actualizaciones del mismo turno para evitar commits intermedios sin perder estado.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Distribuye estado y dispatch sin prop drilling dentro del ciclo operativo del sistema."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Context y reducer (Estado local en React): Distribuye estado y dispatch sin prop drilling.",
    "topic": "Estado local en React",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-21",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Arquitectura compartida), ¿qué función técnica cumple «Lifting state up»?",
    "options": [
      "Mueve el estado al ancestro común que coordina a varios hijos manteniendo consistencia.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR.",
      "Expone vistas específicas del estado y ocultan su estructura interna de forma segura.",
      "Nombra cambios según el negocio en lugar de detalles de la interfaz dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Lifting state up (Arquitectura compartida): Mueve el estado al ancestro común que coordina a varios hijos.",
    "topic": "Arquitectura compartida",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-22",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «Colocación por dominio» en arquitectura compartida?",
    "options": [
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Agrupa estado y lógica cerca de la feature que los modifica respetando las invariantes.",
      "Expone vistas específicas del estado y ocultan su estructura interna sin perder estado.",
      "Nombra cambios según el negocio en lugar de detalles de la interfaz de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Colocación por dominio (Arquitectura compartida): Agrupa estado y lógica cerca de la feature que los modifica.",
    "topic": "Arquitectura compartida",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-23",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «Prop drilling»?",
    "options": [
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR de forma clara.",
      "Expone vistas específicas del estado y ocultan su estructura interna dentro de la aplicación.",
      "Reconoce cuándo pasar props es explícito y cuándo una cadena profunda requiere otra frontera.",
      "Nombra cambios según el negocio en lugar de detalles de la interfaz manteniendo consistencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Prop drilling (Arquitectura compartida): Reconoce cuándo pasar props es explícito y cuándo una cadena profunda requiere otra frontera.",
    "topic": "Arquitectura compartida",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-24",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Selectores»?",
    "options": [
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Nombra cambios según el negocio en lugar de detalles de la interfaz de modo predecible.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Expone vistas específicas del estado y ocultan su estructura interna de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Selectores (Arquitectura compartida): Exponen vistas específicas del estado y ocultan su estructura interna.",
    "topic": "Arquitectura compartida",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-25",
    "collectionId": "state-management",
    "question": "Respecto a arquitectura compartida en Gestión de estado, ¿cuál es el propósito de «Suscripciones granulares»?",
    "options": [
      "Notifican solo a consumidores cuya porción realmente cambió respetando las invariantes.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR.",
      "Expone vistas específicas del estado y ocultan su estructura interna de forma segura.",
      "Nombra cambios según el negocio en lugar de detalles de la interfaz dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Suscripciones granulares (Arquitectura compartida): Notifican solo a consumidores cuya porción realmente cambió.",
    "topic": "Arquitectura compartida",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-26",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Arquitectura compartida), ¿qué función técnica cumple «useSyncExternalStore»?",
    "options": [
      "Reconoce cuándo pasar props es explícito y cuándo una cadena profunda requiere otra frontera.",
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Expone vistas específicas del estado y ocultan su estructura interna sin degradar el flujo.",
      "Nombra cambios según el negocio en lugar de detalles de la interfaz sin degradar el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "useSyncExternalStore (Arquitectura compartida): Conecta stores externos con snapshots consistentes para render concurrente y SSR.",
    "topic": "Arquitectura compartida",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-27",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «Separación lectura y escritura» en arquitectura compartida?",
    "options": [
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Expone vistas específicas del estado y ocultan su estructura interna de modo predecible.",
      "Expone comandos para cambiar y selectores para leer manteniendo la trazabilidad técnica.",
      "Nombra cambios según el negocio en lugar de detalles de la interfaz de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Separación lectura y escritura (Arquitectura compartida): Expone comandos para cambiar y selectores para leer.",
    "topic": "Arquitectura compartida",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-28",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «Eventos de dominio»?",
    "options": [
      "Conecta stores externos con snapshots consistentes para render concurrente y SSR al operar.",
      "Expone vistas específicas del estado y ocultan su estructura interna sin perder estado.",
      "Información que cambia con el tiempo y modifica el comportamiento o la interfaz al operar.",
      "Nombra cambios según el negocio en lugar de detalles de la interfaz de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Eventos de dominio (Arquitectura compartida): Nombra cambios según el negocio en lugar de detalles de la interfaz.",
    "topic": "Arquitectura compartida",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-29",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Store Redux»?",
    "options": [
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores sin perder estado.",
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables en el flujo.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch con precisión.",
      "Ensambla reducers, middleware, DevTools y comprobaciones recomendadas de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Store Redux (Redux Toolkit): Mantiene un árbol de estado, procesa acciones y notifica suscriptores.",
    "topic": "Redux Toolkit",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-30",
    "collectionId": "state-management",
    "question": "Respecto a redux toolkit en Gestión de estado, ¿cuál es el propósito de «Acciones»?",
    "options": [
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables de forma segura.",
      "Describe eventos serializables con type y payload respetando las restricciones de tipo.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma clara.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Acciones (Redux Toolkit): Describen eventos serializables con type y payload.",
    "topic": "Redux Toolkit",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-31",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Redux Toolkit), ¿qué función técnica cumple «Reducers»?",
    "options": [
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables de forma segura.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma clara.",
      "Calcula el siguiente estado de forma determinista respetando las restricciones de tipo.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reducers (Redux Toolkit): Calculan el siguiente estado de forma determinista.",
    "topic": "Redux Toolkit",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-32",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «configureStore» en redux toolkit?",
    "options": [
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables dentro del flujo.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma segura.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores sin perder estado.",
      "Ensambla reducers, middleware, DevTools y comprobaciones recomendadas sin perder estado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "configureStore (Redux Toolkit): Ensambla reducers, middleware, DevTools y comprobaciones recomendadas.",
    "topic": "Redux Toolkit",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-33",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «createSlice»?",
    "options": [
      "Agrupa estado inicial, reducers y action creators de una feature sin degradar el flujo.",
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables al evaluar.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch en ejecución.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "createSlice (Redux Toolkit): Agrupa estado inicial, reducers y action creators de una feature.",
    "topic": "Redux Toolkit",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-34",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Immer»?",
    "options": [
      "Conecta el store con React mediante Provider, useSelector y useDispatch de modo predecible.",
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables con precisión.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores sin perder estado.",
      "Ensambla reducers, middleware, DevTools y comprobaciones recomendadas sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Immer (Redux Toolkit): Permite sintaxis mutativa sobre un borrador que produce copias inmutables.",
    "topic": "Redux Toolkit",
    "difficulty": "intermedio"
  },
  {
    "id": "state-management-q-35",
    "collectionId": "state-management",
    "question": "Respecto a redux toolkit en Gestión de estado, ¿cuál es el propósito de «Dispatch»?",
    "options": [
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores al operar.",
      "Ensambla reducers, middleware, DevTools y comprobaciones recomendadas al operar.",
      "Envía acciones al pipeline de Redux dentro del ciclo operativo del sistema.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dispatch (Redux Toolkit): Envía acciones al pipeline de Redux.",
    "topic": "Redux Toolkit",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-36",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Redux Toolkit), ¿qué función técnica cumple «Provider y hooks»?",
    "options": [
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables dentro del flujo.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores sin perder estado.",
      "Ensambla reducers, middleware, DevTools y comprobaciones recomendadas sin perder estado.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma segura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Provider y hooks (Redux Toolkit): Conecta el store con React mediante Provider, useSelector y useDispatch.",
    "topic": "Redux Toolkit",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-37",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «useSelector» en redux toolkit?",
    "options": [
      "Suscribe un componente al resultado de un selector respetando las restricciones de tipo.",
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables en el flujo.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch con precisión.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "useSelector (Redux Toolkit): Suscribe un componente al resultado de un selector.",
    "topic": "Redux Toolkit",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-38",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «createAsyncThunk»?",
    "options": [
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables de forma segura.",
      "Modela pending, fulfilled y rejected para una promesa dentro de la arquitectura activa.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma clara.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "createAsyncThunk (Redux Toolkit): Modela pending, fulfilled y rejected para una promesa.",
    "topic": "Redux Toolkit",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-39",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Middleware»?",
    "options": [
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables dentro del flujo.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma segura.",
      "Interviene acciones para logging, efectos o asincronía dentro de la arquitectura activa.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Middleware (Redux Toolkit): Interviene acciones para logging, efectos o asincronía.",
    "topic": "Redux Toolkit",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-40",
    "collectionId": "state-management",
    "question": "Respecto a redux toolkit en Gestión de estado, ¿cuál es el propósito de «Listener middleware»?",
    "options": [
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables dentro del flujo.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma segura.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores sin perder estado.",
      "Reacciona a acciones o cambios con efectos cancelables dentro de la arquitectura activa."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Listener middleware (Redux Toolkit): Reacciona a acciones o cambios con efectos cancelables.",
    "topic": "Redux Toolkit",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-41",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Redux Toolkit), ¿qué función técnica cumple «createEntityAdapter»?",
    "options": [
      "Normaliza colecciones y genera reducers y selectores manteniendo la trazabilidad técnica.",
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables en ejecución.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma clara.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "createEntityAdapter (Redux Toolkit): Normaliza colecciones y genera reducers y selectores.",
    "topic": "Redux Toolkit",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-42",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «Redux DevTools» en redux toolkit?",
    "options": [
      "Permite sintaxis mutativa sobre un borrador que produce copias inmutables dentro del flujo.",
      "Registra acciones y snapshots para replay y time travel durante la ejecución del módulo.",
      "Conecta el store con React mediante Provider, useSelector y useDispatch de forma segura.",
      "Mantiene un árbol de estado, procesa acciones y notifica suscriptores sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Redux DevTools (Redux Toolkit): Registra acciones y snapshots para replay y time travel.",
    "topic": "Redux Toolkit",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-43",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «Estado de servidor»?",
    "options": [
      "Modela escrituras remotas con variables y estados pending, success y error de forma segura.",
      "Crea, comparte, desactiva y elimina entradas según observadores y tiempos con precisión.",
      "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso al evaluar.",
      "Marca consultas relacionadas como obsoletas después de una mutación de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Estado de servidor (Estado remoto y caché): Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso.",
    "topic": "Estado remoto y caché",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-44",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Query keys»?",
    "options": [
      "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso con precisión.",
      "Modela escrituras remotas con variables y estados pending, success y error en ejecución.",
      "Crea, comparte, desactiva y elimina entradas según observadores y tiempos con precisión.",
      "Identifica una consulta y todos sus parámetros dentro de la caché sin degradar el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Query keys (Estado remoto y caché): Identifican una consulta y todos sus parámetros dentro de la caché.",
    "topic": "Estado remoto y caché",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-45",
    "collectionId": "state-management",
    "question": "Respecto a estado remoto y caché en Gestión de estado, ¿cuál es el propósito de «Fresh y stale»?",
    "options": [
      "Define cuánto tiempo una copia se considera reciente manteniendo la trazabilidad técnica.",
      "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso al operar.",
      "Modela escrituras remotas con variables y estados pending, success y error en el flujo.",
      "Crea, comparte, desactiva y elimina entradas según observadores y tiempos en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fresh y stale (Estado remoto y caché): Define cuánto tiempo una copia se considera reciente.",
    "topic": "Estado remoto y caché",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-46",
    "collectionId": "state-management",
    "question": "En Gestión de estado (Estado remoto y caché), ¿qué función técnica cumple «Ciclo de vida de caché»?",
    "options": [
      "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso con precisión.",
      "Crea, comparte, desactiva y elimina entradas según observadores y tiempos con precisión.",
      "Modela escrituras remotas con variables y estados pending, success y error en ejecución.",
      "Marca consultas relacionadas como obsoletas después de una mutación de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ciclo de vida de caché (Estado remoto y caché): Crea, comparte, desactiva y elimina entradas según observadores y tiempos.",
    "topic": "Estado remoto y caché",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-47",
    "collectionId": "state-management",
    "question": "Dentro de Gestión de estado, ¿cómo opera el mecanismo de «Invalidación» en estado remoto y caché?",
    "options": [
      "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso en ejecución.",
      "Modela escrituras remotas con variables y estados pending, success y error en el flujo.",
      "Marca consultas relacionadas como obsoletas después de una mutación de modo predecible.",
      "Crea, comparte, desactiva y elimina entradas según observadores y tiempos en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Invalidación (Estado remoto y caché): Marca consultas relacionadas como obsoletas después de una mutación.",
    "topic": "Estado remoto y caché",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-48",
    "collectionId": "state-management",
    "question": "Al trabajar con Gestión de estado, ¿qué responsabilidad define a «Mutaciones»?",
    "options": [
      "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso con precisión.",
      "Crea, comparte, desactiva y elimina entradas según observadores y tiempos con precisión.",
      "Marca consultas relacionadas como obsoletas después de una mutación de modo predecible.",
      "Modela escrituras remotas con variables y estados pending, success y error en ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Mutaciones (Estado remoto y caché): Modelan escrituras remotas con variables y estados pending, success y error.",
    "topic": "Estado remoto y caché",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-49",
    "collectionId": "state-management",
    "question": "En la arquitectura de Gestión de estado, ¿qué caracteriza técnicamente a «Actualización optimista»?",
    "options": [
      "Aplica una predicción local y conserva rollback dentro del ciclo operativo del sistema.",
      "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso al operar.",
      "Modela escrituras remotas con variables y estados pending, success y error al operar.",
      "Crea, comparte, desactiva y elimina entradas según observadores y tiempos al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Actualización optimista (Estado remoto y caché): Aplica una predicción local y conserva rollback.",
    "topic": "Estado remoto y caché",
    "difficulty": "avanzado"
  },
  {
    "id": "state-management-q-50",
    "collectionId": "state-management",
    "question": "Respecto a estado remoto y caché en Gestión de estado, ¿cuál es el propósito de «Cancelación de consultas»?",
    "options": [
      "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso en ejecución.",
      "Abortar trabajo obsoleto evita carreras y consumo innecesario manteniendo consistencia.",
      "Modela escrituras remotas con variables y estados pending, success y error en el flujo.",
      "Crea, comparte, desactiva y elimina entradas según observadores y tiempos en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cancelación de consultas (Estado remoto y caché): Abortar trabajo obsoleto evita carreras y consumo innecesario.",
    "topic": "Estado remoto y caché",
    "difficulty": "avanzado"
  }
];
