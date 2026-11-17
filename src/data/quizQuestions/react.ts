import type { QuizQuestion } from "@/data/quizTypes";

export const reactQuestions: QuizQuestion[] = [
  {
    "id": "react-q-01",
    "collectionId": "react",
    "question": "En React (Fundamentos declarativos), ¿qué función técnica cumple «Componentes»?",
    "options": [
      "Divide la interfaz en funciones independientes que reciben datos y producen elementos de React.",
      "Describe elementos con una sintaxis que el build transforma en llamadas del runtime de React.",
      "Permite envolver, insertar y combinar interfaz sin acoplarla a una estructura rígida al operar.",
      "Transportan datos de forma descendente y son de solo lectura para el componente que las recibe."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Componentes (Fundamentos declarativos): Dividen la interfaz en funciones independientes que reciben datos y producen elementos de React.",
    "topic": "Fundamentos declarativos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-02",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «JSX» en fundamentos declarativos?",
    "options": [
      "Permite envolver, insertar y combinar interfaz sin acoplarla a una estructura rígida al evaluar.",
      "Describe elementos con una sintaxis que el build transforma en llamadas del runtime de React.",
      "Divide la interfaz en funciones independientes que reciben datos y producen elementos de React.",
      "Transportan datos de forma descendente y son de solo lectura para el componente que las recibe."
    ],
    "correctAnswerIndex": 1,
    "explanation": "JSX (Fundamentos declarativos): Describe elementos con una sintaxis que el build transforma en llamadas del runtime de React.",
    "topic": "Fundamentos declarativos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-03",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «Props»?",
    "options": [
      "Describe elementos con una sintaxis que el build transforma en llamadas del runtime de React al operar.",
      "Permite envolver, insertar y combinar interfaz sin acoplarla a una estructura rígida al operar.",
      "Transportan datos de forma descendente y son de solo lectura para el componente que las recibe.",
      "Divide la interfaz en funciones independientes que reciben datos y producen elementos de React."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Props (Fundamentos declarativos): Transportan datos de forma descendente y son de solo lectura para el componente que las recibe.",
    "topic": "Fundamentos declarativos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-04",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «children y composición»?",
    "options": [
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada al operar.",
      "Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host al operar.",
      "Crea nuevos objetos o arrays para que React pueda detectar qué referencia cambió.",
      "Permite envolver, insertar y combinar interfaz sin acoplarla a una estructura rígida."
    ],
    "correctAnswerIndex": 3,
    "explanation": "children y composición (Fundamentos declarativos): Permiten envolver, insertar y combinar interfaz sin acoplarla a una estructura rígida.",
    "topic": "Fundamentos declarativos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-05",
    "collectionId": "react",
    "question": "Respecto a fundamentos declarativos en React, ¿cuál es el propósito de «Pureza del render»?",
    "options": [
      "Exige que el componente calcule el mismo JSX para las mismas props, estado y contexto, sin efectos secundarios.",
      "Divide la interfaz en funciones independientes que reciben datos y producen elementos de React con precisión.",
      "Transportan datos de forma descendente y son de solo lectura para el componente que las recibe con precisión.",
      "Describe elementos con una sintaxis que el build transforma en llamadas del runtime de React de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pureza del render (Fundamentos declarativos): Exige que el componente calcule el mismo JSX para las mismas props, estado y contexto, sin efectos secundarios.",
    "topic": "Fundamentos declarativos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-06",
    "collectionId": "react",
    "question": "En React (Estado y eventos), ¿qué función técnica cumple «Estado»?",
    "options": [
      "Crea nuevos objetos o arrays para que React pueda detectar qué referencia cambió al operar.",
      "Conserva información local y solicita otro render cuando cambia dentro de la aplicación.",
      "Conecta interacciones del usuario con handlers que pueden solicitar actualizaciones.",
      "Calcula el siguiente estado desde el estado pendiente anterior y evita cierres obsoletos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Estado (Estado y eventos): Conserva información local y solicita otro render cuando cambia.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-07",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «El estado como snapshot» en estado y eventos?",
    "options": [
      "Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React en el flujo.",
      "Calcula el siguiente estado desde el estado pendiente anterior y evita cierres obsoletos al evaluar.",
      "Cada render ve una fotografía fija; actualizar estado prepara otro render sin mutar el que ya corre.",
      "Usa keys estables para conservar identidad cuando una colección agrega, elimina o reordena elementos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "El estado como snapshot (Estado y eventos): Cada render ve una fotografía fija; actualizar estado prepara otro render sin mutar el que ya corre.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-08",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «Eventos»?",
    "options": [
      "Crea nuevos objetos o arrays para que React pueda detectar qué referencia cambió al operar.",
      "Conserva información local y solicita otro render cuando cambia de modo predecible.",
      "Mantiene value o checked en estado y actualizan la interfaz mediante eventos al operar.",
      "Conecta interacciones del usuario con handlers que pueden solicitar actualizaciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Eventos (Estado y eventos): Conectan interacciones del usuario con handlers que pueden solicitar actualizaciones.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-09",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «Propagación de eventos»?",
    "options": [
      "Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React al operar.",
      "Conecta interacciones del usuario con handlers que pueden solicitar actualizaciones al operar.",
      "Calcula el siguiente estado desde el estado pendiente anterior y evita cierres obsoletos.",
      "Crea nuevos objetos o arrays para que React pueda detectar qué referencia cambió al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Propagación de eventos (Estado y eventos): Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-10",
    "collectionId": "react",
    "question": "Respecto a estado y eventos en React, ¿cuál es el propósito de «Batching de actualizaciones»?",
    "options": [
      "Cada render ve una fotografía fija; actualizar estado prepara otro render sin mutar el que ya corre al operar.",
      "Agrupa múltiples setState de una misma interacción antes de renderizar para evitar trabajo intermedio.",
      "Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React al evaluar.",
      "Usa keys estables para conservar identidad cuando una colección agrega, elimina o reordena elementos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Batching de actualizaciones (Estado y eventos): Agrupa múltiples setState de una misma interacción antes de renderizar para evitar trabajo intermedio.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-11",
    "collectionId": "react",
    "question": "En React (Estado y eventos), ¿qué función técnica cumple «Updater functions»?",
    "options": [
      "Conecta interacciones del usuario con handlers que pueden solicitar actualizaciones al operar.",
      "Crea nuevos objetos o arrays para que React pueda detectar qué referencia cambió al operar.",
      "Calcula el siguiente estado desde el estado pendiente anterior y evita cierres obsoletos.",
      "Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Updater functions (Estado y eventos): Calculan el siguiente estado desde el estado pendiente anterior y evitan cierres obsoletos.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-12",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «Actualizaciones inmutables» en estado y eventos?",
    "options": [
      "Conecta interacciones del usuario con handlers que pueden solicitar actualizaciones al operar.",
      "Calcula el siguiente estado desde el estado pendiente anterior y evita cierres obsoletos.",
      "Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React.",
      "Crea nuevos objetos o arrays para que React pueda detectar qué referencia cambió al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Actualizaciones inmutables (Estado y eventos): Crean nuevos objetos o arrays para que React pueda detectar qué referencia cambió.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-13",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «Renderizado condicional»?",
    "options": [
      "Elige qué árbol producir según props o estado dentro del ciclo operativo del sistema.",
      "Crea nuevos objetos o arrays para que React pueda detectar qué referencia cambió.",
      "Conecta interacciones del usuario con handlers que pueden solicitar actualizaciones.",
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Renderizado condicional (Estado y eventos): Elige qué árbol producir según props o estado.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-14",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «Listas»?",
    "options": [
      "Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React en ejecución.",
      "Usa keys estables para conservar identidad cuando una colección agrega, elimina o reordena elementos.",
      "Cada render ve una fotografía fija; actualizar estado prepara otro render sin mutar el que ya corre.",
      "Calcula el siguiente estado desde el estado pendiente anterior y evita cierres obsoletos en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Listas y keys (Estado y eventos): Usa keys estables para conservar identidad cuando una colección agrega, elimina o reordena elementos.",
    "topic": "Estado y eventos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-15",
    "collectionId": "react",
    "question": "Respecto a formularios y flujo de datos en React, ¿cuál es el propósito de «Formularios controlados»?",
    "options": [
      "Distribuye información a descendientes sin pasar props manualmente por cada nivel al operar.",
      "Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos.",
      "Mantiene value o checked en estado y actualizan la interfaz mediante eventos al evaluar.",
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Formularios controlados (Formularios y flujo de datos): Mantienen value o checked en estado y actualizan la interfaz mediante eventos.",
    "topic": "Formularios y flujo de datos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-16",
    "collectionId": "react",
    "question": "En React (Formularios y flujo de datos), ¿qué función técnica cumple «Formularios no controlados»?",
    "options": [
      "Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos al operar.",
      "Distribuye información a descendientes sin pasar props manualmente por cada nivel al operar.",
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada al operar.",
      "Dejan que el DOM conserve el valor y lo leen mediante FormData o refs cuando se necesita."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Formularios no controlados (Formularios y flujo de datos): Dejan que el DOM conserve el valor y lo leen mediante FormData o refs cuando se necesita.",
    "topic": "Formularios y flujo de datos",
    "difficulty": "básico"
  },
  {
    "id": "react-q-17",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «Elevar estado» en formularios y flujo de datos?",
    "options": [
      "Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos al operar.",
      "Mantiene value o checked en estado y actualizan la interfaz mediante eventos al operar.",
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada.",
      "Distribuye información a descendientes sin pasar props manualmente por cada nivel."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Elevar estado (Formularios y flujo de datos): Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos.",
    "topic": "Formularios y flujo de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-18",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «Estado derivado»?",
    "options": [
      "Dejan que el DOM conserve el valor y lo leen mediante FormData o refs cuando se necesita al operar.",
      "Calcula valores desde props y estado durante el render en lugar de duplicarlos y sincronizarlos.",
      "Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos en el flujo.",
      "Distribuye información a descendientes sin pasar props manualmente por cada nivel con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Estado derivado (Formularios y flujo de datos): Calcula valores desde props y estado durante el render en lugar de duplicarlos y sincronizarlos.",
    "topic": "Formularios y flujo de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-19",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «useReducer»?",
    "options": [
      "Distribuye información a descendientes sin pasar props manualmente por cada nivel al operar.",
      "Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos.",
      "Centraliza transiciones complejas como acciones puras sobre un estado sin perder estado.",
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "useReducer (Formularios y flujo de datos): Centraliza transiciones complejas como acciones puras sobre un estado.",
    "topic": "Formularios y flujo de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-20",
    "collectionId": "react",
    "question": "Respecto a formularios y flujo de datos en React, ¿cuál es el propósito de «Context»?",
    "options": [
      "Mantiene value o checked en estado y actualizan la interfaz mediante eventos al operar.",
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada.",
      "Centraliza transiciones complejas como acciones puras sobre un estado en el flujo.",
      "Distribuye información a descendientes sin pasar props manualmente por cada nivel."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Context (Formularios y flujo de datos): Distribuye información a descendientes sin pasar props manualmente por cada nivel.",
    "topic": "Formularios y flujo de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-21",
    "collectionId": "react",
    "question": "En React (Formularios y flujo de datos), ¿qué función técnica cumple «Diseño de providers»?",
    "options": [
      "Separa contextos por frecuencia de cambio y responsabilidad para evitar dependencias globales difíciles al operar.",
      "Calcula valores desde props y estado durante el render en lugar de duplicarlos y sincronizarlos al operar.",
      "Dejan que el DOM conserve el valor y lo leen mediante FormData o refs cuando se necesita en ejecución.",
      "Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos sin perder estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Diseño de providers (Formularios y flujo de datos): Separa contextos por frecuencia de cambio y responsabilidad para evitar dependencias globales difíciles.",
    "topic": "Formularios y flujo de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-22",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «Custom Hooks» en formularios y flujo de datos?",
    "options": [
      "Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos al operar.",
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada al operar.",
      "Distribuye información a descendientes sin pasar props manualmente por cada nivel al operar.",
      "Mantiene value o checked en estado y actualizan la interfaz mediante eventos en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Custom Hooks (Formularios y flujo de datos): Extraen lógica reutilizable conservando el estado independiente de cada llamada.",
    "topic": "Formularios y flujo de datos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-23",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «Ciclo de render»?",
    "options": [
      "La identidad por posición, tipo y key determina si un componente conserva su estado al operar.",
      "Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host al operar.",
      "Convierte una actualización en render, reconciliación y commit manteniendo consistencia.",
      "Renderizan hijos en otro nodo del DOM sin sacarlos del árbol lógico de React al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Ciclo de render (Render y reconciliación): Convierte una actualización en render, reconciliación y commit.",
    "topic": "Render y reconciliación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-24",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «Render y commit»?",
    "options": [
      "La identidad por posición, tipo y key determina si un componente conserva su estado al operar.",
      "Renderizan hijos en otro nodo del DOM sin sacarlos del árbol lógico de React en el flujo.",
      "Conecta interacciones del usuario con handlers que pueden solicitar actualizaciones al operar.",
      "Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Render y commit (Render y reconciliación): Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host.",
    "topic": "Render y reconciliación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-25",
    "collectionId": "react",
    "question": "Respecto a render y reconciliación en React, ¿cuál es el propósito de «Reconciliación»?",
    "options": [
      "Compara elementos anteriores y siguientes usando tipo, posición y key para decidir qué preservar.",
      "La identidad por posición, tipo y key determina si un componente conserva su estado al evaluar.",
      "Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host de forma segura.",
      "Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reconciliación (Render y reconciliación): Compara elementos anteriores y siguientes usando tipo, posición y key para decidir qué preservar.",
    "topic": "Render y reconciliación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-26",
    "collectionId": "react",
    "question": "En React (Render y reconciliación), ¿qué función técnica cumple «Preservar»?",
    "options": [
      "Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host al operar.",
      "La identidad por posición, tipo y key determina si un componente conserva su estado.",
      "Renderizan hijos en otro nodo del DOM sin sacarlos del árbol lógico de React al operar.",
      "Mantiene value o checked en estado y actualizan la interfaz mediante eventos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Preservar y reiniciar estado (Render y reconciliación): La identidad por posición, tipo y key determina si un componente conserva su estado.",
    "topic": "Render y reconciliación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-27",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «StrictMode» en render y reconciliación?",
    "options": [
      "Compara elementos anteriores y siguientes usando tipo, posición y key para decidir qué preservar al operar.",
      "La identidad por posición, tipo y key determina si un componente conserva su estado sin perder estado.",
      "Ejecuta comprobaciones adicionales en desarrollo para revelar renders impuros y limpiezas incompletas.",
      "Calcula valores desde props y estado durante el render en lugar de duplicarlos y sincronizarlos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "StrictMode (Render y reconciliación): Ejecuta comprobaciones adicionales en desarrollo para revelar renders impuros y limpiezas incompletas.",
    "topic": "Render y reconciliación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-28",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «Portals»?",
    "options": [
      "La identidad por posición, tipo y key determina si un componente conserva su estado al operar.",
      "Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host al operar.",
      "Distribuye información a descendientes sin pasar props manualmente por cada nivel al operar.",
      "Renderizan hijos en otro nodo del DOM sin sacarlos del árbol lógico de React al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Portals (Render y reconciliación): Renderizan hijos en otro nodo del DOM sin sacarlos del árbol lógico de React.",
    "topic": "Render y reconciliación",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-29",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «Refs»?",
    "options": [
      "Conservan un valor mutable entre renders sin solicitar una actualización de forma clara.",
      "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Refs (Sincronización y efectos): Conservan un valor mutable entre renders sin solicitar una actualización.",
    "topic": "Sincronización y efectos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-30",
    "collectionId": "react",
    "question": "Respecto a sincronización y efectos en React, ¿cuál es el propósito de «Refs al DOM y ref como prop»?",
    "options": [
      "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte al operar.",
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
      "Declara valores reactivos usados por el setup para mantener la sincronización correcta."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Refs al DOM y ref como prop (Sincronización y efectos): Conectan un componente con un nodo host para enfocar, medir o integrar APIs imperativas.",
    "topic": "Sincronización y efectos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-31",
    "collectionId": "react",
    "question": "En React (Sincronización y efectos), ¿qué función técnica cumple «useImperativeHandle»?",
    "options": [
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas al operar.",
      "Declara valores reactivos usados por el setup para mantener la sincronización correcta al operar.",
      "Expone una API imperativa pequeña en lugar de entregar todo el nodo o implementación interna.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "useImperativeHandle (Sincronización y efectos): Expone una API imperativa pequeña en lugar de entregar todo el nodo o implementación interna.",
    "topic": "Sincronización y efectos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-32",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «useEffect» en sincronización y efectos?",
    "options": [
      "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte al operar.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas.",
      "Sincroniza el componente con sistemas externos después del commit sin degradar el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "useEffect (Sincronización y efectos): Sincroniza el componente con sistemas externos después del commit.",
    "topic": "Sincronización y efectos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-33",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «Cleanup de efectos»?",
    "options": [
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
      "Permite a librerías CSS-in-JS insertar estilos antes de los layout effects al operar.",
      "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte.",
      "Conservan un valor mutable entre renders sin solicitar una actualización al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cleanup de efectos (Sincronización y efectos): Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
    "topic": "Sincronización y efectos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-34",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «Dependencias de efectos»?",
    "options": [
      "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte al operar.",
      "Declara valores reactivos usados por el setup para mantener la sincronización correcta.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dependencias de efectos (Sincronización y efectos): Declaran valores reactivos usados por el setup para mantener la sincronización correcta.",
    "topic": "Sincronización y efectos",
    "difficulty": "intermedio"
  },
  {
    "id": "react-q-35",
    "collectionId": "react",
    "question": "Respecto a sincronización y efectos en React, ¿cuál es el propósito de «Separar eventos de efectos»?",
    "options": [
      "Expone una API imperativa pequeña en lugar de entregar todo el nodo o implementación interna al operar.",
      "Suscribe React a un store externo con snapshots consistentes y soporte de render concurrente.",
      "Distingue lógica causada por una interacción puntual de sincronización causada por estar visible.",
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Separar eventos de efectos (Sincronización y efectos): Distingue lógica causada por una interacción puntual de sincronización causada por estar visible.",
    "topic": "Sincronización y efectos",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-36",
    "collectionId": "react",
    "question": "En React (Sincronización y efectos), ¿qué función técnica cumple «useLayoutEffect»?",
    "options": [
      "Permite a librerías CSS-in-JS insertar estilos antes de los layout effects en el flujo.",
      "Conservan un valor mutable entre renders sin solicitar una actualización al evaluar.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
      "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte."
    ],
    "correctAnswerIndex": 3,
    "explanation": "useLayoutEffect (Sincronización y efectos): Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte.",
    "topic": "Sincronización y efectos",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-37",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «useInsertionEffect» en sincronización y efectos?",
    "options": [
      "Permite a librerías CSS-in-JS insertar estilos antes de los layout effects en ejecución.",
      "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "useInsertionEffect (Sincronización y efectos): Permite a librerías CSS-in-JS insertar estilos antes de los layout effects.",
    "topic": "Sincronización y efectos",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-38",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «useSyncExternalStore»?",
    "options": [
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas al operar.",
      "Suscribe React a un store externo con snapshots consistentes y soporte de render concurrente.",
      "Declara valores reactivos usados por el setup para mantener la sincronización correcta al operar.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "useSyncExternalStore (Sincronización y efectos): Suscribe React a un store externo con snapshots consistentes y soporte de render concurrente.",
    "topic": "Sincronización y efectos",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-39",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «useDebugValue»?",
    "options": [
      "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte al operar.",
      "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
      "Muestra una etiqueta útil para un custom Hook dentro de React DevTools dentro del flujo.",
      "Conecta un componente con un nodo host para enfocar, medir o integrar APIs imperativas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "useDebugValue (Sincronización y efectos): Muestra una etiqueta útil para un custom Hook dentro de React DevTools.",
    "topic": "Sincronización y efectos",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-40",
    "collectionId": "react",
    "question": "Respecto a rendimiento y concurrencia en React, ¿cuál es el propósito de «memo»?",
    "options": [
      "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial con precisión.",
      "Permite que una parte costosa de la interfaz quede temporalmente detrás de un valor urgente.",
      "Muestra un fallback mientras un hijo suspende por código o datos integrados con el framework.",
      "Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro."
    ],
    "correctAnswerIndex": 3,
    "explanation": "memo (Rendimiento y concurrencia): Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-41",
    "collectionId": "react",
    "question": "En React (Rendimiento y concurrencia), ¿qué función técnica cumple «useMemo»?",
    "options": [
      "Conserva el resultado de un cálculo mientras sus dependencias no cambian durante la ejecución.",
      "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial.",
      "Marca actualizaciones no urgentes como interrumpibles y expone un estado pending al operar.",
      "Conserva una referencia de función mientras sus dependencias no cambian con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "useMemo (Rendimiento y concurrencia): Conserva el resultado de un cálculo mientras sus dependencias no cambian.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-42",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «useCallback» en rendimiento y concurrencia?",
    "options": [
      "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial al operar.",
      "Conserva una referencia de función mientras sus dependencias no cambian de forma segura.",
      "Marca actualizaciones no urgentes como interrumpibles y expone un estado pending al operar.",
      "Conserva el resultado de un cálculo mientras sus dependencias no cambian de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "useCallback (Rendimiento y concurrencia): Conserva una referencia de función mientras sus dependencias no cambian.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-43",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «React Compiler»?",
    "options": [
      "Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro en ejecución.",
      "Muestra un fallback mientras un hijo suspende por código o datos integrados con el framework al operar.",
      "Optimiza automáticamente componentes y hooks en build mediante memoización derivada del flujo de datos.",
      "Permite que una parte costosa de la interfaz quede temporalmente detrás de un valor urgente al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "React Compiler (Rendimiento y concurrencia): Optimiza automáticamente componentes y hooks en build mediante memoización derivada del flujo de datos.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-44",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «Profiling»?",
    "options": [
      "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial al operar.",
      "Marca actualizaciones no urgentes como interrumpibles y expone un estado pending al operar.",
      "Conserva el resultado de un cálculo mientras sus dependencias no cambian de forma clara.",
      "Mide commits, renders y rutas lentas antes de aplicar optimizaciones de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Profiling (Rendimiento y concurrencia): Mide commits, renders y rutas lentas antes de aplicar optimizaciones.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-45",
    "collectionId": "react",
    "question": "Respecto a rendimiento y concurrencia en React, ¿cuál es el propósito de «lazy y code splitting»?",
    "options": [
      "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial.",
      "Conserva el resultado de un cálculo mientras sus dependencias no cambian al operar.",
      "Conserva una referencia de función mientras sus dependencias no cambian al operar.",
      "Marca actualizaciones no urgentes como interrumpibles y expone un estado pending."
    ],
    "correctAnswerIndex": 0,
    "explanation": "lazy y code splitting (Rendimiento y concurrencia): Carga un componente bajo demanda como módulo dinámico y difiere su código inicial.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-46",
    "collectionId": "react",
    "question": "En React (Rendimiento y concurrencia), ¿qué función técnica cumple «Suspense»?",
    "options": [
      "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial con precisión.",
      "Muestra un fallback mientras un hijo suspende por código o datos integrados con el framework.",
      "Permite que una parte costosa de la interfaz quede temporalmente detrás de un valor urgente.",
      "Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Suspense (Rendimiento y concurrencia): Muestra un fallback mientras un hijo suspende por código o datos integrados con el framework.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-47",
    "collectionId": "react",
    "question": "Dentro de React, ¿cómo opera el mecanismo de «useTransition» en rendimiento y concurrencia?",
    "options": [
      "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial en el flujo.",
      "Permite que una parte costosa de la interfaz quede temporalmente detrás de un valor urgente.",
      "Marca actualizaciones no urgentes como interrumpibles y expone un estado pending al operar.",
      "Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro."
    ],
    "correctAnswerIndex": 2,
    "explanation": "useTransition (Rendimiento y concurrencia): Marca actualizaciones no urgentes como interrumpibles y expone un estado pending.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-48",
    "collectionId": "react",
    "question": "Al trabajar con React, ¿qué responsabilidad define a «useDeferredValue»?",
    "options": [
      "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial en ejecución.",
      "Marca actualizaciones no urgentes como interrumpibles y expone un estado pending al evaluar.",
      "Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro.",
      "Permite que una parte costosa de la interfaz quede temporalmente detrás de un valor urgente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "useDeferredValue (Rendimiento y concurrencia): Permite que una parte costosa de la interfaz quede temporalmente detrás de un valor urgente.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-49",
    "collectionId": "react",
    "question": "En la arquitectura de React, ¿qué caracteriza técnicamente a «useId»?",
    "options": [
      "Genera identificadores estables y coordinados entre servidor y cliente para relaciones de accesibilidad.",
      "Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro al operar.",
      "Optimiza automáticamente componentes y hooks en build mediante memoización derivada del flujo de datos.",
      "Muestra un fallback mientras un hijo suspende por código o datos integrados con el framework al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "useId (Rendimiento y concurrencia): Genera identificadores estables y coordinados entre servidor y cliente para relaciones de accesibilidad.",
    "topic": "Rendimiento y concurrencia",
    "difficulty": "avanzado"
  },
  {
    "id": "react-q-50",
    "collectionId": "react",
    "question": "Respecto a datos, actions y arquitectura en React, ¿cuál es el propósito de «Error Boundaries»?",
    "options": [
      "Mantiene value o checked en estado y actualizan la interfaz mediante eventos al operar.",
      "Capturan errores de render en descendientes y muestran una interfaz de recuperación.",
      "Extrae lógica reutilizable conservando el estado independiente de cada llamada al operar.",
      "Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Error Boundaries (Datos, Actions y arquitectura): Capturan errores de render en descendientes y muestran una interfaz de recuperación.",
    "topic": "Datos, Actions y arquitectura",
    "difficulty": "avanzado"
  }
];
