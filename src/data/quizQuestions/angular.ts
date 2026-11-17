import type { QuizQuestion } from "@/data/quizTypes";

export const angularQuestions: QuizQuestion[] = [
  {
    "id": "angular-q-01",
    "collectionId": "angular",
    "question": "En Angular (Testing unitario), ¿qué función técnica cumple «FakeAsync scheduler»?",
    "options": [
      "Simula el paso del tiempo de forma síncrona para probar temporizadores y promesas al instante.",
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales.",
      "Espera a que la vista alcance estabilidad reactiva sin depender de parches sobre eventos.",
      "Fuerza el vaciado de efectos reactivos pendientes para comprobar sus cambios sobre el estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "FakeAsync scheduler (Testing unitario): Simula el paso del tiempo de forma síncrona para probar temporizadores y promesas al instante.",
    "topic": "Testing unitario",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-02",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «HTTP testing controller» en testing unitario?",
    "options": [
      "Simula el paso del tiempo de forma síncrona para probar temporizadores y promesas al instante al operar.",
      "Intercepta peticiones salientes en pruebas para verificar cabeceras y devolver respuestas simuladas.",
      "Fuerza el vaciado de efectos reactivos pendientes para comprobar sus cambios sobre el estado al operar.",
      "Espera a que la vista alcance estabilidad reactiva sin depender de parches sobre eventos al evaluar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "HTTP testing controller (Testing unitario): Intercepta peticiones salientes en pruebas para verificar cabeceras y devolver respuestas simuladas.",
    "topic": "Testing unitario",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-03",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Signal effect testing»?",
    "options": [
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales al operar.",
      "Espera a que la vista alcance estabilidad reactiva sin depender de parches sobre eventos.",
      "Fuerza el vaciado de efectos reactivos pendientes para comprobar sus cambios sobre el estado.",
      "Simula el paso del tiempo de forma síncrona para probar temporizadores y promesas al instante."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Signal effect testing (Testing unitario): Fuerza el vaciado de efectos reactivos pendientes para comprobar sus cambios sobre el estado.",
    "topic": "Testing unitario",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-04",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Zoneless fixture stability»?",
    "options": [
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales al operar.",
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al operar.",
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados.",
      "Espera a que la vista alcance estabilidad reactiva sin depender de parches sobre eventos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Zoneless fixture stability (Testing unitario): Espera a que la vista alcance estabilidad reactiva sin depender de parches sobre eventos.",
    "topic": "Testing unitario",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-05",
    "collectionId": "angular",
    "question": "Respecto a testing unitario en Angular, ¿cuál es el propósito de «Fake timer boundaries»?",
    "options": [
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales al operar.",
      "Espera a que la vista alcance estabilidad reactiva sin depender de parches sobre eventos.",
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al operar.",
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fake timer boundaries (Testing unitario): Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales.",
    "topic": "Testing unitario",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-06",
    "collectionId": "angular",
    "question": "En Angular (Testing integral), ¿qué función técnica cumple «Contract tests»?",
    "options": [
      "Compara capturas de pantalla de componentes contra imágenes base para detectar desajustes al operar.",
      "Verifica que los servicios de cliente interpreten exactamente el esquema pactado con el backend.",
      "Comprueba que la ruta renderice en servidor y se hidrate en cliente sin discrepancias DOM al operar.",
      "Reproduce respuestas grabadas y validadas contra el esquema real durante pruebas integrales."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Contract tests (Testing integral): Verifica que los servicios de cliente interpreten exactamente el esquema pactado con el backend.",
    "topic": "Testing integral",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-07",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «End-to-end journeys» en testing integral?",
    "options": [
      "Compara capturas de pantalla de componentes contra imágenes base para detectar desajustes al operar.",
      "Comprueba que la ruta renderice en servidor y se hidrate en cliente sin discrepancias DOM.",
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al operar.",
      "Reproduce respuestas grabadas y validadas contra el esquema real durante pruebas integrales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "End-to-end journeys (Testing integral): Automatiza flujos críticos de usuario de principio a fin sobre un navegador real.",
    "topic": "Testing integral",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-08",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Visual regression»?",
    "options": [
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real en el flujo.",
      "Comprueba que la ruta renderice en servidor y se hidrate en cliente sin discrepancias DOM.",
      "Reproduce respuestas grabadas y validadas contra el esquema real durante pruebas integrales.",
      "Compara capturas de pantalla de componentes contra imágenes base para detectar desajustes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Visual regression (Testing integral): Compara capturas de pantalla de componentes contra imágenes base para detectar desajustes.",
    "topic": "Testing integral",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-09",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Accessibility automation»?",
    "options": [
      "Audita automáticamente roles, nombres accesibles y contraste de color en pruebas de interfaz.",
      "Compara capturas de pantalla de componentes contra imágenes base para detectar desajustes.",
      "Comprueba que la ruta renderice en servidor y se hidrate en cliente sin discrepancias DOM.",
      "Reproduce respuestas grabadas y validadas contra el esquema real durante pruebas integrales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Accessibility automation (Testing integral): Audita automáticamente roles, nombres accesibles y contraste de color en pruebas de interfaz.",
    "topic": "Testing integral",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-10",
    "collectionId": "angular",
    "question": "Respecto a testing integral en Angular, ¿cuál es el propósito de «SSR integration tests»?",
    "options": [
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real en el flujo.",
      "Comprueba que la ruta renderice en servidor y se hidrate en cliente sin discrepancias DOM.",
      "Compara capturas de pantalla de componentes contra imágenes base para detectar desajustes.",
      "Reproduce respuestas grabadas y validadas contra el esquema real durante pruebas integrales."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SSR integration tests (Testing integral): Comprueba que la ruta renderice en servidor y se hidrate en cliente sin discrepancias DOM.",
    "topic": "Testing integral",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-11",
    "collectionId": "angular",
    "question": "En Angular (Testing integral), ¿qué función técnica cumple «Harness environment contracts»?",
    "options": [
      "Compara capturas de pantalla de componentes contra imágenes base para detectar desajustes al operar.",
      "Comprueba que la ruta renderice en servidor y se hidrate en cliente sin discrepancias DOM.",
      "Interactúa con componentes en pruebas mediante una API estable que oculta selectores internos.",
      "Reproduce respuestas grabadas y validadas contra el esquema real durante pruebas integrales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Harness environment contracts (Testing integral): Interactúa con componentes en pruebas mediante una API estable que oculta selectores internos.",
    "topic": "Testing integral",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-12",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «Network contract fixtures» en testing integral?",
    "options": [
      "Compara capturas de pantalla de componentes contra imágenes base para detectar desajustes al operar.",
      "Comprueba que la ruta renderice en servidor y se hidrate en cliente sin discrepancias DOM.",
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al evaluar.",
      "Reproduce respuestas grabadas y validadas contra el esquema real durante pruebas integrales."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Network contract fixtures (Testing integral): Reproduce respuestas grabadas y validadas contra el esquema real durante pruebas integrales.",
    "topic": "Testing integral",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-13",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Sanitization contexts»?",
    "options": [
      "Limpia valores dinámicos según se inserten en HTML, estilos, atributos o direcciones URL al operar.",
      "Propaga el atributo criptográfico de la petición a todos los estilos y scripts inyectados.",
      "Inspecciona paquetes transitivos en integración continua para corregir avisos de seguridad.",
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sanitization contexts (Seguridad de aplicación): Limpia valores dinámicos según se inserten en HTML, estilos, atributos o direcciones URL.",
    "topic": "Seguridad de aplicación",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-14",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Trusted Types»?",
    "options": [
      "Lee el token de una cookie y lo adjunta automáticamente como cabecera en peticiones mutadoras al operar.",
      "Exige que las APIs peligrosas del navegador reciban solo objetos construidos por políticas seguras.",
      "Usa guardas de ruta para experiencia visual pero exige validación real de permisos en servidor.",
      "Inspecciona paquetes transitivos en integración continua para corregir avisos de seguridad al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Trusted Types (Seguridad de aplicación): Exige que las APIs peligrosas del navegador reciban solo objetos construidos por políticas seguras.",
    "topic": "Seguridad de aplicación",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-15",
    "collectionId": "angular",
    "question": "Respecto a seguridad de aplicación en Angular, ¿cuál es el propósito de «XSRF protection»?",
    "options": [
      "Limpia valores dinámicos según se inserten en HTML, estilos, atributos o direcciones URL al operar.",
      "Propaga el atributo criptográfico de la petición a todos los estilos y scripts inyectados.",
      "Lee el token de una cookie y lo adjunta automáticamente como cabecera en peticiones mutadoras.",
      "Inspecciona paquetes transitivos en integración continua para corregir avisos de seguridad."
    ],
    "correctAnswerIndex": 2,
    "explanation": "XSRF protection (Seguridad de aplicación): Lee el token de una cookie y lo adjunta automáticamente como cabecera en peticiones mutadoras.",
    "topic": "Seguridad de aplicación",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-16",
    "collectionId": "angular",
    "question": "En Angular (Seguridad de aplicación), ¿qué función técnica cumple «Route authorization limits»?",
    "options": [
      "Limpia valores dinámicos según se inserten en HTML, estilos, atributos o direcciones URL al operar.",
      "Propaga el atributo criptográfico de la petición a todos los estilos y scripts inyectados al operar.",
      "Inspecciona paquetes transitivos en integración continua para corregir avisos de seguridad.",
      "Usa guardas de ruta para experiencia visual pero exige validación real de permisos en servidor."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Route authorization limits (Seguridad de aplicación): Usa guardas de ruta para experiencia visual pero exige validación real de permisos en servidor.",
    "topic": "Seguridad de aplicación",
    "difficulty": "básico"
  },
  {
    "id": "angular-q-17",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «Dependency vulnerability review» en seguridad de aplicación?",
    "options": [
      "Inspecciona paquetes transitivos en integración continua para corregir avisos de seguridad.",
      "Limpia valores dinámicos según se inserten en HTML, estilos, atributos o direcciones URL.",
      "Propaga el atributo criptográfico de la petición a todos los estilos y scripts inyectados.",
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dependency vulnerability review (Seguridad de aplicación): Inspecciona paquetes transitivos en integración continua para corregir avisos de seguridad.",
    "topic": "Seguridad de aplicación",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-18",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Trusted Types policies»?",
    "options": [
      "Propaga el atributo criptográfico de la petición a todos los estilos y scripts inyectados al operar.",
      "Registra reglas centralizadas que validan cualquier cadena antes de convertirla en marcado vivo.",
      "Limpia valores dinámicos según se inserten en HTML, estilos, atributos o direcciones URL al operar.",
      "Inspecciona paquetes transitivos en integración continua para corregir avisos de seguridad al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Trusted Types policies (Seguridad de aplicación): Registra reglas centralizadas que validan cualquier cadena antes de convertirla en marcado vivo.",
    "topic": "Seguridad de aplicación",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-19",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «CSP nonce handling»?",
    "options": [
      "Limpia valores dinámicos según se inserten en HTML, estilos, atributos o direcciones URL al operar.",
      "Inspecciona paquetes transitivos en integración continua para corregir avisos de seguridad.",
      "Propaga el atributo criptográfico de la petición a todos los estilos y scripts inyectados.",
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "CSP nonce handling (Seguridad de aplicación): Propaga el atributo criptográfico de la petición a todos los estilos y scripts inyectados.",
    "topic": "Seguridad de aplicación",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-20",
    "collectionId": "angular",
    "question": "Respecto a rendimiento en Angular, ¿cuál es el propósito de «OnPush strategy»?",
    "options": [
      "Mide cuántos ciclos de verificación ocurren y qué componentes consumen más milisegundos al operar.",
      "Renderiza en el DOM únicamente las filas visibles dentro de la ventana de desplazamiento.",
      "Inspecciona el peso de cada módulo y ruta diferida para eliminar dependencias duplicadas.",
      "Restringe la verificación de un subárbol a cambios de entradas, eventos propios o señales."
    ],
    "correctAnswerIndex": 3,
    "explanation": "OnPush strategy (Rendimiento): Restringe la verificación de un subárbol a cambios de entradas, eventos propios o señales.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-21",
    "collectionId": "angular",
    "question": "En Angular (Rendimiento), ¿qué función técnica cumple «Track expressions»?",
    "options": [
      "Identifica de forma única cada elemento de una lista para reutilizar nodos DOM al reordenar.",
      "Mide cuántos ciclos de verificación ocurren y qué componentes consumen más milisegundos.",
      "Renderiza en el DOM únicamente las filas visibles dentro de la ventana de desplazamiento.",
      "Inspecciona el peso de cada módulo y ruta diferida para eliminar dependencias duplicadas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Track expressions (Rendimiento): Identifica de forma única cada elemento de una lista para reutilizar nodos DOM al reordenar.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-22",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «Virtual scrolling» en rendimiento?",
    "options": [
      "Mide cuántos ciclos de verificación ocurren y qué componentes consumen más milisegundos al operar.",
      "Renderiza en el DOM únicamente las filas visibles dentro de la ventana de desplazamiento.",
      "Inspecciona el peso de cada módulo y ruta diferida para eliminar dependencias duplicadas.",
      "Restringe la verificación de un subárbol a cambios de entradas, eventos propios o señales."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Virtual scrolling (Rendimiento): Renderiza en el DOM únicamente las filas visibles dentro de la ventana de desplazamiento.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-23",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Bundle analysis»?",
    "options": [
      "Mide cuántos ciclos de verificación ocurren y qué componentes consumen más milisegundos al operar.",
      "Renderiza en el DOM únicamente las filas visibles dentro de la ventana de desplazamiento.",
      "Inspecciona el peso de cada módulo y ruta diferida para eliminar dependencias duplicadas.",
      "Restringe la verificación de un subárbol a cambios de entradas, eventos propios o señales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bundle analysis (Rendimiento): Inspecciona el peso de cada módulo y ruta diferida para eliminar dependencias duplicadas.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-24",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Runtime performance marks»?",
    "options": [
      "Identifica de forma única cada elemento de una lista para reutilizar nodos DOM al reordenar al operar.",
      "Restringe la verificación de un subárbol a cambios de entradas, eventos propios o señales al operar.",
      "Controla el peso y las condiciones de carga de bloques diferidos con plantillas de espera al operar.",
      "Registra marcas temporales de renderizado e hidratación para analizarlas en herramientas de perfil."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Runtime performance marks (Rendimiento): Registra marcas temporales de renderizado e hidratación para analizarlas en herramientas de perfil.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-25",
    "collectionId": "angular",
    "question": "Respecto a rendimiento en Angular, ¿cuál es el propósito de «Change-detection profiling»?",
    "options": [
      "Mide cuántos ciclos de verificación ocurren y qué componentes consumen más milisegundos al operar.",
      "Renderiza en el DOM únicamente las filas visibles dentro de la ventana de desplazamiento.",
      "Inspecciona el peso de cada módulo y ruta diferida para eliminar dependencias duplicadas.",
      "Restringe la verificación de un subárbol a cambios de entradas, eventos propios o señales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Change-detection profiling (Rendimiento): Mide cuántos ciclos de verificación ocurren y qué componentes consumen más milisegundos.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-26",
    "collectionId": "angular",
    "question": "En Angular (Rendimiento), ¿qué función técnica cumple «Deferrable view budgets»?",
    "options": [
      "Mide cuántos ciclos de verificación ocurren y qué componentes consumen más milisegundos al operar.",
      "Controla el peso y las condiciones de carga de bloques diferidos con plantillas de espera.",
      "Renderiza en el DOM únicamente las filas visibles dentro de la ventana de desplazamiento.",
      "Inspecciona el peso de cada módulo y ruta diferida para eliminar dependencias duplicadas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Deferrable view budgets (Rendimiento): Controla el peso y las condiciones de carga de bloques diferidos con plantillas de espera.",
    "topic": "Rendimiento",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-27",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «Angular CDK» en design systems?",
    "options": [
      "Vincula etiquetas, mensajes de ayuda y estados de error con atributos accesibles automáticos al operar.",
      "Define variables de diseño semánticas para colores, tipografía y espaciado en todos los temas al operar.",
      "Provee primitivas de comportamiento accesibles como portales, tablas y enfoque sin imponer estilos.",
      "Expone variables CSS documentadas para personalizar componentes sin romper su encapsulamiento al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Angular CDK (Design systems): Provee primitivas de comportamiento accesibles como portales, tablas y enfoque sin imponer estilos.",
    "topic": "Design systems",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-28",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Overlay primitives»?",
    "options": [
      "Diseña entradas por señales y salidas tipadas manteniendo compatibilidad entre versiones al operar.",
      "Atrapa el foco del teclado dentro de modales abiertos y lo devuelve al disparador al cerrar.",
      "Vincula etiquetas, mensajes de ayuda y estados de error con atributos accesibles automáticos.",
      "Posiciona paneles flotantes, menús y diálogos gestionando colisiones con los bordes de pantalla."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Overlay primitives (Design systems): Posiciona paneles flotantes, menús y diálogos gestionando colisiones con los bordes de pantalla.",
    "topic": "Design systems",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-29",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Theming tokens»?",
    "options": [
      "Define variables de diseño semánticas para colores, tipografía y espaciado en todos los temas.",
      "Diseña entradas por señales y salidas tipadas manteniendo compatibilidad entre versiones.",
      "Atrapa el foco del teclado dentro de modales abiertos y lo devuelve al disparador al cerrar.",
      "Vincula etiquetas, mensajes de ayuda y estados de error con atributos accesibles automáticos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Theming tokens (Design systems): Define variables de diseño semánticas para colores, tipografía y espaciado en todos los temas.",
    "topic": "Design systems",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-30",
    "collectionId": "angular",
    "question": "Respecto a design systems en Angular, ¿cuál es el propósito de «Form field semantics»?",
    "options": [
      "Diseña entradas por señales y salidas tipadas manteniendo compatibilidad entre versiones al operar.",
      "Vincula etiquetas, mensajes de ayuda y estados de error con atributos accesibles automáticos.",
      "Atrapa el foco del teclado dentro de modales abiertos y lo devuelve al disparador al cerrar.",
      "Define variables de diseño semánticas para colores, tipografía y espaciado en todos los temas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Form field semantics (Design systems): Vincula etiquetas, mensajes de ayuda y estados de error con atributos accesibles automáticos.",
    "topic": "Design systems",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-31",
    "collectionId": "angular",
    "question": "En Angular (Design systems), ¿qué función técnica cumple «Component API stability»?",
    "options": [
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al evaluar.",
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados.",
      "Diseña entradas por señales y salidas tipadas manteniendo compatibilidad entre versiones.",
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Component API stability (Design systems): Diseña entradas por señales y salidas tipadas manteniendo compatibilidad entre versiones.",
    "topic": "Design systems",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-32",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «Component token contracts» en design systems?",
    "options": [
      "Diseña entradas por señales y salidas tipadas manteniendo compatibilidad entre versiones al operar.",
      "Atrapa el foco del teclado dentro de modales abiertos y lo devuelve al disparador al cerrar.",
      "Vincula etiquetas, mensajes de ayuda y estados de error con atributos accesibles automáticos.",
      "Expone variables CSS documentadas para personalizar componentes sin romper su encapsulamiento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Component token contracts (Design systems): Expone variables CSS documentadas para personalizar componentes sin romper su encapsulamiento.",
    "topic": "Design systems",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-33",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Overlay accessibility»?",
    "options": [
      "Atrapa el foco del teclado dentro de modales abiertos y lo devuelve al disparador al cerrar al operar.",
      "Diseña entradas por señales y salidas tipadas manteniendo compatibilidad entre versiones.",
      "Vincula etiquetas, mensajes de ayuda y estados de error con atributos accesibles automáticos.",
      "Define variables de diseño semánticas para colores, tipografía y espaciado en todos los temas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Overlay accessibility (Design systems): Atrapa el foco del teclado dentro de modales abiertos y lo devuelve al disparador al cerrar.",
    "topic": "Design systems",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-34",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Angular CLI builders»?",
    "options": [
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados al operar.",
      "Personaliza los pasos de compilación, empaquetado y pruebas mediante ejecutores configurables.",
      "Divide la aplicación en paquetes internos reutilizables con puntos de entrada bien definidos.",
      "Automatiza la creación y modificación de archivos siguiendo las convenciones de arquitectura."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Angular CLI builders (Tooling y monorepos): Personaliza los pasos de compilación, empaquetado y pruebas mediante ejecutores configurables.",
    "topic": "Tooling y monorepos",
    "difficulty": "intermedio"
  },
  {
    "id": "angular-q-35",
    "collectionId": "angular",
    "question": "Respecto a tooling y monorepos en Angular, ¿cuál es el propósito de «Workspace libraries»?",
    "options": [
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados al operar.",
      "Automatiza la creación y modificación de archivos siguiendo las convenciones de arquitectura.",
      "Divide la aplicación en paquetes internos reutilizables con puntos de entrada bien definidos.",
      "Impide importaciones circulares o saltos de capa entre bibliotecas mediante reglas estáticas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Workspace libraries (Tooling y monorepos): Divide la aplicación en paquetes internos reutilizables con puntos de entrada bien definidos.",
    "topic": "Tooling y monorepos",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-36",
    "collectionId": "angular",
    "question": "En Angular (Tooling y monorepos), ¿qué función técnica cumple «Incremental builds»?",
    "options": [
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados al operar.",
      "Divide la aplicación en paquetes internos reutilizables con puntos de entrada bien definidos.",
      "Automatiza la creación y modificación de archivos siguiendo las convenciones de arquitectura.",
      "Cachea resultados de compilación por biblioteca para reconstruir solo los módulos modificados."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Incremental builds (Tooling y monorepos): Cachea resultados de compilación por biblioteca para reconstruir solo los módulos modificados.",
    "topic": "Tooling y monorepos",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-37",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «Code generation schematics» en tooling y monorepos?",
    "options": [
      "Automatiza la creación y modificación de archivos siguiendo las convenciones de arquitectura.",
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados.",
      "Divide la aplicación en paquetes internos reutilizables con puntos de entrada bien definidos.",
      "Impide importaciones circulares o saltos de capa entre bibliotecas mediante reglas estáticas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Code generation schematics (Tooling y monorepos): Automatiza la creación y modificación de archivos siguiendo las convenciones de arquitectura.",
    "topic": "Tooling y monorepos",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-38",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Dependency boundaries»?",
    "options": [
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados al operar.",
      "Impide importaciones circulares o saltos de capa entre bibliotecas mediante reglas estáticas.",
      "Divide la aplicación en paquetes internos reutilizables con puntos de entrada bien definidos.",
      "Automatiza la creación y modificación de archivos siguiendo las convenciones de arquitectura."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dependency boundaries (Tooling y monorepos): Impide importaciones circulares o saltos de capa entre bibliotecas mediante reglas estáticas.",
    "topic": "Tooling y monorepos",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-39",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Affected project graphs»?",
    "options": [
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al operar.",
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales.",
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados.",
      "Mide cuántos ciclos de verificación ocurren y qué componentes consumen más milisegundos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Affected project graphs (Tooling y monorepos): Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados.",
    "topic": "Tooling y monorepos",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-40",
    "collectionId": "angular",
    "question": "Respecto a tooling y monorepos en Angular, ¿cuál es el propósito de «Builder cache keys»?",
    "options": [
      "Divide la aplicación en paquetes internos reutilizables con puntos de entrada bien definidos al operar.",
      "Automatiza la creación y modificación de archivos siguiendo las convenciones de arquitectura.",
      "Impide importaciones circulares o saltos de capa entre bibliotecas mediante reglas estáticas.",
      "Invalida la caché de construcción solo cuando cambian entradas, banderas o variables relevantes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Builder cache keys (Tooling y monorepos): Invalida la caché de construcción solo cuando cambian entradas, banderas o variables relevantes.",
    "topic": "Tooling y monorepos",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-41",
    "collectionId": "angular",
    "question": "En Angular (Interoperabilidad), ¿qué función técnica cumple «Custom elements»?",
    "options": [
      "Empaqueta componentes como elementos nativos del estándar web consumibles en cualquier página.",
      "Carga aplicaciones independientes en tiempo de ejecución compartiendo bibliotecas comunes.",
      "Emite eventos estándar del DOM con carga tipada para comunicarse con contenedores externos.",
      "Consume elementos personalizados externos vinculando sus propiedades y eventos sin conflictos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Custom elements (Interoperabilidad): Empaqueta componentes como elementos nativos del estándar web consumibles en cualquier página.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-42",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «Web components» en interoperabilidad?",
    "options": [
      "Carga aplicaciones independientes en tiempo de ejecución compartiendo bibliotecas comunes al operar.",
      "Consume elementos personalizados externos vinculando sus propiedades y eventos sin conflictos.",
      "Emite eventos estándar del DOM con carga tipada para comunicarse con contenedores externos.",
      "Empaqueta componentes como elementos nativos del estándar web consumibles en cualquier página."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Web components (Interoperabilidad): Consume elementos personalizados externos vinculando sus propiedades y eventos sin conflictos.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-43",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «Microfrontends con Module Federation»?",
    "options": [
      "Emite eventos estándar del DOM con carga tipada para comunicarse con contenedores externos.",
      "Automatiza flujos críticos de usuario de principio a fin sobre un navegador real al operar.",
      "Carga aplicaciones independientes en tiempo de ejecución compartiendo bibliotecas comunes.",
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Microfrontends con Module Federation (Interoperabilidad): Carga aplicaciones independientes en tiempo de ejecución compartiendo bibliotecas comunes.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-44",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Integración de librerías no Angular»?",
    "options": [
      "Emite eventos estándar del DOM con carga tipada para comunicarse con contenedores externos al operar.",
      "Carga aplicaciones independientes en tiempo de ejecución compartiendo bibliotecas comunes al operar.",
      "Empaqueta componentes como elementos nativos del estándar web consumibles en cualquier página.",
      "Ejecuta bibliotecas imperativas de terceros fuera del ciclo de detección para no degradar vistas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Integración de librerías no Angular (Interoperabilidad): Ejecuta bibliotecas imperativas de terceros fuera del ciclo de detección para no degradar vistas.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-45",
    "collectionId": "angular",
    "question": "Respecto a interoperabilidad en Angular, ¿cuál es el propósito de «Fronteras con AngularJS»?",
    "options": [
      "Permite coexistencia gradual entre módulos heredados y componentes modernos durante una migración al operar.",
      "Emite eventos estándar del DOM con carga tipada para comunicarse con contenedores externos al operar.",
      "Empaqueta componentes como elementos nativos del estándar web consumibles en cualquier página.",
      "Consume elementos personalizados externos vinculando sus propiedades y eventos sin conflictos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fronteras con AngularJS (Interoperabilidad): Permite coexistencia gradual entre módulos heredados y componentes modernos durante una migración.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-46",
    "collectionId": "angular",
    "question": "En Angular (Interoperabilidad), ¿qué función técnica cumple «Custom-element event contracts»?",
    "options": [
      "Carga aplicaciones independientes en tiempo de ejecución compartiendo bibliotecas comunes al operar.",
      "Emite eventos estándar del DOM con carga tipada para comunicarse con contenedores externos.",
      "Calcula qué aplicaciones y pruebas deben correrse en CI según los archivos modificados.",
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Custom-element event contracts (Interoperabilidad): Emite eventos estándar del DOM con carga tipada para comunicarse con contenedores externos.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-47",
    "collectionId": "angular",
    "question": "Dentro de Angular, ¿cómo opera el mecanismo de «Zone boundary adapters» en interoperabilidad?",
    "options": [
      "Empaqueta componentes como elementos nativos del estándar web consumibles en cualquier página al operar.",
      "Consume elementos personalizados externos vinculando sus propiedades y eventos sin conflictos al operar.",
      "Reingresa explícitamente al flujo reactivo solo cuando un evento externo requiere actualizar vista.",
      "Emite eventos estándar del DOM con carga tipada para comunicarse con contenedores externos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Zone boundary adapters (Interoperabilidad): Reingresa explícitamente al flujo reactivo solo cuando un evento externo requiere actualizar vista.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-48",
    "collectionId": "angular",
    "question": "Al trabajar con Angular, ¿qué responsabilidad define a «ErrorHandler global»?",
    "options": [
      "Mide tiempos de navegación, resolución de guardas y descarga de rutas perezosas en producción al operar.",
      "Sube mapas de símbolos al sistema de monitoreo sin exponerlos públicamente en el servidor web.",
      "Espera a que la vista alcance estabilidad reactiva sin depender de parches sobre eventos al operar.",
      "Captura excepciones no controladas para registrar contexto diagnóstico y mostrar estado seguro."
    ],
    "correctAnswerIndex": 3,
    "explanation": "ErrorHandler global (Operación y evolución): Captura excepciones no controladas para registrar contexto diagnóstico y mostrar estado seguro.",
    "topic": "Operación y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-49",
    "collectionId": "angular",
    "question": "En la arquitectura de Angular, ¿qué caracteriza técnicamente a «Telemetría del router»?",
    "options": [
      "Mide tiempos de navegación, resolución de guardas y descarga de rutas perezosas en producción.",
      "Sube mapas de símbolos al sistema de monitoreo sin exponerlos públicamente en el servidor web.",
      "Captura excepciones no controladas para registrar contexto diagnóstico y mostrar estado seguro.",
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Telemetría del router (Operación y evolución): Mide tiempos de navegación, resolución de guardas y descarga de rutas perezosas en producción.",
    "topic": "Operación y evolución",
    "difficulty": "avanzado"
  },
  {
    "id": "angular-q-50",
    "collectionId": "angular",
    "question": "Respecto a operación y evolución en Angular, ¿cuál es el propósito de «Source maps protegidos»?",
    "options": [
      "Mide tiempos de navegación, resolución de guardas y descarga de rutas perezosas en producción.",
      "Sube mapas de símbolos al sistema de monitoreo sin exponerlos públicamente en el servidor web.",
      "Captura excepciones no controladas para registrar contexto diagnóstico y mostrar estado seguro.",
      "Limpia colas de tareas periódicas al finalizar cada prueba para evitar fugas temporales al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Source maps protegidos (Operación y evolución): Sube mapas de símbolos al sistema de monitoreo sin exponerlos públicamente en el servidor web.",
    "topic": "Operación y evolución",
    "difficulty": "avanzado"
  }
];
