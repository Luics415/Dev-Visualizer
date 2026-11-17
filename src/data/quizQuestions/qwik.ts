import type { QuizQuestion } from "@/data/quizTypes";

export const qwikQuestions: QuizQuestion[] = [
  {
    "id": "qwik-q-01",
    "collectionId": "qwik",
    "question": "En Qwik (Tareas y ciclo reactivo), ¿qué función técnica cumple «Tracking explícito»?",
    "options": [
      "Registra dependencias reactivas exactas para reejecutar tareas solo al mutar señales leídas al operar.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador al operar.",
      "Pospone la descarga y ejecución de un efecto hasta que su componente entra en pantalla.",
      "Anula peticiones en vuelo y libera recursos previos cuando una señal dependiente cambia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tracking explícito (Tareas y ciclo reactivo): Registra dependencias reactivas exactas para reejecutar tareas solo al mutar señales leídas.",
    "topic": "Tareas y ciclo reactivo",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-02",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Cleanup de tareas» en tareas y ciclo reactivo?",
    "options": [
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador al operar.",
      "Registra un liberador que cancela temporizadores o suscripciones antes de repetir la tarea.",
      "Pospone la descarga y ejecución de un efecto hasta que su componente entra en pantalla.",
      "Anula peticiones en vuelo y libera recursos previos cuando una señal dependiente cambia."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cleanup de tareas (Tareas y ciclo reactivo): Registra un liberador que cancela temporizadores o suscripciones antes de repetir la tarea.",
    "topic": "Tareas y ciclo reactivo",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-03",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Server tasks»?",
    "options": [
      "Registra dependencias reactivas exactas para reejecutar tareas solo al mutar señales leídas en el flujo.",
      "Registra un liberador que cancela temporizadores o suscripciones antes de repetir la tarea al operar.",
      "Ejecuta lógica reactiva durante el renderizado inicial o en el servidor sin enviar código al cliente.",
      "Anula peticiones en vuelo y libera recursos previos cuando una señal dependiente cambia en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Server tasks (Tareas y ciclo reactivo): Ejecuta lógica reactiva durante el renderizado inicial o en el servidor sin enviar código al cliente.",
    "topic": "Tareas y ciclo reactivo",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-04",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Task cleanup and resource disposal»?",
    "options": [
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador al operar.",
      "Pospone la descarga y ejecución de un efecto hasta que su componente entra en pantalla.",
      "Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración.",
      "Anula peticiones en vuelo y libera recursos previos cuando una señal dependiente cambia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Task cleanup and resource disposal (Tareas y ciclo reactivo): Anula peticiones en vuelo y libera recursos previos cuando una señal dependiente cambia.",
    "topic": "Tareas y ciclo reactivo",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-05",
    "collectionId": "qwik",
    "question": "Respecto a tareas y ciclo reactivo en Qwik, ¿cuál es el propósito de «Server and client task boundaries»?",
    "options": [
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador al operar.",
      "Pospone la descarga y ejecución de un efecto hasta que su componente entra en pantalla.",
      "Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración.",
      "Anula peticiones en vuelo y libera recursos previos cuando una señal dependiente cambia."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Server and client task boundaries (Tareas y ciclo reactivo): Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador.",
    "topic": "Tareas y ciclo reactivo",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-06",
    "collectionId": "qwik",
    "question": "En Qwik (Tareas y ciclo reactivo), ¿qué función técnica cumple «Visibility-triggered task scheduling»?",
    "options": [
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador al operar.",
      "Pospone la descarga y ejecución de un efecto hasta que su componente entra en pantalla.",
      "Anula peticiones en vuelo y libera recursos previos cuando una señal dependiente cambia.",
      "Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Visibility-triggered task scheduling (Tareas y ciclo reactivo): Pospone la descarga y ejecución de un efecto hasta que su componente entra en pantalla.",
    "topic": "Tareas y ciclo reactivo",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-07",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Slots» en composición de interfaz?",
    "options": [
      "Define títulos, etiquetas sociales y enlaces de documento desde cualquier ruta o diseño al operar.",
      "Aísla reglas CSS por componente agregando un identificador único sin colisiones globales.",
      "Proyecta contenido hijo de forma declarativa sin forzar que el contenedor padre se descargue.",
      "Comparte estado tipado hacia descendientes del árbol serializando su referencia en el HTML."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slots (Composición de interfaz): Proyecta contenido hijo de forma declarativa sin forzar que el contenedor padre se descargue.",
    "topic": "Composición de interfaz",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-08",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Context providers»?",
    "options": [
      "Define títulos, etiquetas sociales y enlaces de documento desde cualquier ruta o diseño al operar.",
      "Aísla reglas CSS por componente agregando un identificador único sin colisiones globales.",
      "Proyecta contenido hijo de forma declarativa sin forzar que el contenedor padre se descargue.",
      "Comparte estado tipado hacia descendientes del árbol serializando su referencia en el HTML."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Context providers (Composición de interfaz): Comparte estado tipado hacia descendientes del árbol serializando su referencia en el HTML.",
    "topic": "Composición de interfaz",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-09",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Head metadata»?",
    "options": [
      "Define títulos, etiquetas sociales y enlaces de documento desde cualquier ruta o diseño.",
      "Aísla reglas CSS por componente agregando un identificador único sin colisiones globales.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador.",
      "Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Head metadata (Composición de interfaz): Define títulos, etiquetas sociales y enlaces de documento desde cualquier ruta o diseño.",
    "topic": "Composición de interfaz",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-10",
    "collectionId": "qwik",
    "question": "Respecto a composición de interfaz en Qwik, ¿cuál es el propósito de «Styles scoped»?",
    "options": [
      "Define títulos, etiquetas sociales y enlaces de documento desde cualquier ruta o diseño al operar.",
      "Aísla reglas CSS por componente agregando un identificador único sin colisiones globales.",
      "Comparte estado tipado hacia descendientes del árbol serializando su referencia en el HTML.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Styles scoped (Composición de interfaz): Aísla reglas CSS por componente agregando un identificador único sin colisiones globales.",
    "topic": "Composición de interfaz",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-11",
    "collectionId": "qwik",
    "question": "En Qwik (Composición de interfaz), ¿qué función técnica cumple «Component boundaries»?",
    "options": [
      "Define títulos, etiquetas sociales y enlaces de documento desde cualquier ruta o diseño al operar.",
      "Aísla reglas CSS por componente agregando un identificador único sin colisiones globales.",
      "Divide componentes e interacciones en símbolos independientes para descargarlos bajo demanda.",
      "Comparte estado tipado hacia descendientes del árbol serializando su referencia en el HTML."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Component boundaries (Composición de interfaz): Divide componentes e interacciones en símbolos independientes para descargarlos bajo demanda.",
    "topic": "Composición de interfaz",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-12",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Slot projection ownership» en composición de interfaz?",
    "options": [
      "Comparte estado tipado hacia descendientes del árbol serializando su referencia en el HTML al operar.",
      "Proyecta contenido hijo de forma declarativa sin forzar que el contenedor padre se descargue.",
      "Aísla reglas CSS por componente agregando un identificador único sin colisiones globales al operar.",
      "Actualiza el contenido proyectado de forma independiente sin reejecutar el componente envolvente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Slot projection ownership (Composición de interfaz): Actualiza el contenido proyectado de forma independiente sin reejecutar el componente envolvente.",
    "topic": "Composición de interfaz",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-13",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Nested layouts»?",
    "options": [
      "Compone plantillas jerárquicas por directorio que envuelven rutas hijas compartiendo marco.",
      "Obtiene datos en el servidor antes de renderizar y expone su tipo exacto al componente.",
      "Pregenera rutas estáticas en tiempo de compilación combinándolas con páginas dinámicas.",
      "Ejecuta interceptores de ruta desde el diseño raíz hacia la hoja en un orden predecible."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Nested layouts (Qwik City avanzado): Compone plantillas jerárquicas por directorio que envuelven rutas hijas compartiendo marco.",
    "topic": "Qwik City avanzado",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-14",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Route middleware»?",
    "options": [
      "Obtiene datos en el servidor antes de renderizar y expone su tipo exacto al componente al operar.",
      "Intercepta peticiones en el borde para aplicar cabeceras, redirecciones o control de acceso.",
      "Pregenera rutas estáticas en tiempo de compilación combinándolas con páginas dinámicas al operar.",
      "Ejecuta interceptores de ruta desde el diseño raíz hacia la hoja en un orden predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Route middleware (Qwik City avanzado): Intercepta peticiones en el borde para aplicar cabeceras, redirecciones o control de acceso.",
    "topic": "Qwik City avanzado",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-15",
    "collectionId": "qwik",
    "question": "Respecto a qwik city avanzado en Qwik, ¿cuál es el propósito de «Typed route loaders»?",
    "options": [
      "Pregenera rutas estáticas en tiempo de compilación combinándolas con páginas dinámicas.",
      "Ejecuta interceptores de ruta desde el diseño raíz hacia la hoja en un orden predecible.",
      "Obtiene datos en el servidor antes de renderizar y expone su tipo exacto al componente.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Typed route loaders (Qwik City avanzado): Obtiene datos en el servidor antes de renderizar y expone su tipo exacto al componente.",
    "topic": "Qwik City avanzado",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-16",
    "collectionId": "qwik",
    "question": "En Qwik (Qwik City avanzado), ¿qué función técnica cumple «Server functions»?",
    "options": [
      "Intercepta peticiones en el borde para aplicar cabeceras, redirecciones o control de acceso al operar.",
      "Compone plantillas jerárquicas por directorio que envuelven rutas hijas compartiendo marco al operar.",
      "Configura cabeceras de frescura y revalidación para respuestas servidas por cargadores de ruta.",
      "Invoca funciones del servidor como llamadas remotas tipadas manteniendo secretos fuera del cliente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Server functions (Qwik City avanzado): Invoca funciones del servidor como llamadas remotas tipadas manteniendo secretos fuera del cliente.",
    "topic": "Qwik City avanzado",
    "difficulty": "básico"
  },
  {
    "id": "qwik-q-17",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Static site generation» en qwik city avanzado?",
    "options": [
      "Pregenera rutas estáticas en tiempo de compilación combinándolas con páginas dinámicas.",
      "Obtiene datos en el servidor antes de renderizar y expone su tipo exacto al componente.",
      "Ejecuta interceptores de ruta desde el diseño raíz hacia la hoja en un orden predecible.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Static site generation (Qwik City avanzado): Pregenera rutas estáticas en tiempo de compilación combinándolas con páginas dinámicas.",
    "topic": "Qwik City avanzado",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-18",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Route-loader cache policy»?",
    "options": [
      "Ejecuta interceptores de ruta desde el diseño raíz hacia la hoja en un orden predecible al operar.",
      "Configura cabeceras de frescura y revalidación para respuestas servidas por cargadores de ruta.",
      "Compone plantillas jerárquicas por directorio que envuelven rutas hijas compartiendo marco.",
      "Obtiene datos en el servidor antes de renderizar y expone su tipo exacto al componente al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Route-loader cache policy (Qwik City avanzado): Configura cabeceras de frescura y revalidación para respuestas servidas por cargadores de ruta.",
    "topic": "Qwik City avanzado",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-19",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Middleware ordering»?",
    "options": [
      "Obtiene datos en el servidor antes de renderizar y expone su tipo exacto al componente al operar.",
      "Pregenera rutas estáticas en tiempo de compilación combinándolas con páginas dinámicas.",
      "Ejecuta interceptores de ruta desde el diseño raíz hacia la hoja en un orden predecible.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Middleware ordering (Qwik City avanzado): Ejecuta interceptores de ruta desde el diseño raíz hacia la hoja en un orden predecible.",
    "topic": "Qwik City avanzado",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-20",
    "collectionId": "qwik",
    "question": "Respecto a datos y mutaciones en Qwik, ¿cuál es el propósito de «Optimistic forms»?",
    "options": [
      "Establece atributos de solo lectura HTTP, cifrado y sitio de origen desde el contexto de ruta.",
      "Devuelve errores de validación tipados con estado HTTP apropiado sin lanzar excepciones crudas.",
      "Vuelve a ejecutar automáticamente los cargadores de datos tras completarse una acción mutadora.",
      "Muestra el estado enviado de inmediato mientras la acción de ruta se procesa en segundo plano."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Optimistic forms (Datos y mutaciones): Muestra el estado enviado de inmediato mientras la acción de ruta se procesa en segundo plano.",
    "topic": "Datos y mutaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-21",
    "collectionId": "qwik",
    "question": "En Qwik (Datos y mutaciones), ¿qué función técnica cumple «Validation con schemas»?",
    "options": [
      "Verifica los campos del formulario en el servidor con esquemas tipados antes de ejecutar la acción.",
      "Muestra el estado enviado de inmediato mientras la acción de ruta se procesa en segundo plano.",
      "Establece atributos de solo lectura HTTP, cifrado y sitio de origen desde el contexto de ruta.",
      "Devuelve errores de validación tipados con estado HTTP apropiado sin lanzar excepciones crudas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Validation con schemas (Datos y mutaciones): Verifica los campos del formulario en el servidor con esquemas tipados antes de ejecutar la acción.",
    "topic": "Datos y mutaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-22",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Route action failures» en datos y mutaciones?",
    "options": [
      "Muestra el estado enviado de inmediato mientras la acción de ruta se procesa en segundo plano al operar.",
      "Devuelve errores de validación tipados con estado HTTP apropiado sin lanzar excepciones crudas.",
      "Establece atributos de solo lectura HTTP, cifrado y sitio de origen desde el contexto de ruta.",
      "Vuelve a ejecutar automáticamente los cargadores de datos tras completarse una acción mutadora."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Route action failures (Datos y mutaciones): Devuelve errores de validación tipados con estado HTTP apropiado sin lanzar excepciones crudas.",
    "topic": "Datos y mutaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-23",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Cookies seguras»?",
    "options": [
      "Muestra el estado enviado de inmediato mientras la acción de ruta se procesa en segundo plano.",
      "Devuelve errores de validación tipados con estado HTTP apropiado sin lanzar excepciones crudas.",
      "Establece atributos de solo lectura HTTP, cifrado y sitio de origen desde el contexto de ruta.",
      "Vuelve a ejecutar automáticamente los cargadores de datos tras completarse una acción mutadora."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cookies seguras (Datos y mutaciones): Establece atributos de solo lectura HTTP, cifrado y sitio de origen desde el contexto de ruta.",
    "topic": "Datos y mutaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-24",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Invalidación de loaders»?",
    "options": [
      "Muestra el estado enviado de inmediato mientras la acción de ruta se procesa en segundo plano al operar.",
      "Establece atributos de solo lectura HTTP, cifrado y sitio de origen desde el contexto de ruta.",
      "Devuelve errores de validación tipados con estado HTTP apropiado sin lanzar excepciones crudas.",
      "Vuelve a ejecutar automáticamente los cargadores de datos tras completarse una acción mutadora."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Invalidación de loaders (Datos y mutaciones): Vuelve a ejecutar automáticamente los cargadores de datos tras completarse una acción mutadora.",
    "topic": "Datos y mutaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-25",
    "collectionId": "qwik",
    "question": "Respecto a datos y mutaciones en Qwik, ¿cuál es el propósito de «CSRF action tokens»?",
    "options": [
      "Verifica el origen y los tokens de autenticidad antes de procesar mutaciones enviadas por rutas.",
      "Muestra el estado enviado de inmediato mientras la acción de ruta se procesa en segundo plano.",
      "Establece atributos de solo lectura HTTP, cifrado y sitio de origen desde el contexto de ruta.",
      "Devuelve errores de validación tipados con estado HTTP apropiado sin lanzar excepciones crudas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CSRF action tokens (Datos y mutaciones): Verifica el origen y los tokens de autenticidad antes de procesar mutaciones enviadas por rutas.",
    "topic": "Datos y mutaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-26",
    "collectionId": "qwik",
    "question": "En Qwik (Datos y mutaciones), ¿qué función técnica cumple «Optimistic update reconciliation»?",
    "options": [
      "Muestra el estado enviado de inmediato mientras la acción de ruta se procesa en segundo plano al operar.",
      "Reconcilia el estado visual anticipado con la respuesta real confirmada o fallida del servidor.",
      "Establece atributos de solo lectura HTTP, cifrado y sitio de origen desde el contexto de ruta.",
      "Devuelve errores de validación tipados con estado HTTP apropiado sin lanzar excepciones crudas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Optimistic update reconciliation (Datos y mutaciones): Reconcilia el estado visual anticipado con la respuesta real confirmada o fallida del servidor.",
    "topic": "Datos y mutaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-27",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Unit testing de componentes» en testing?",
    "options": [
      "Asegura que todas las referencias capturadas por clausuras diferidas sean serializables al operar.",
      "Renderiza en servidor y reanuda en cliente comprobando que no se repita trabajo inicial al operar.",
      "Renderiza componentes en un DOM ligero verificando su salida e interacciones sin hidratación.",
      "Valida en pruebas que la carga inicial no descargue paquetes de interacción innecesarios."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Unit testing de componentes (Testing): Renderiza componentes en un DOM ligero verificando su salida e interacciones sin hidratación.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-28",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Pruebas de loaders»?",
    "options": [
      "Asegura que todas las referencias capturadas por clausuras diferidas sean serializables al operar.",
      "Renderiza en servidor y reanuda en cliente comprobando que no se repita trabajo inicial al operar.",
      "Valida en pruebas que la carga inicial no descargue paquetes de interacción innecesarios al operar.",
      "Invoca cargadores y acciones con contextos simulados para validar reglas de negocio y errores."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pruebas de loaders (Testing): Invoca cargadores y acciones con contextos simulados para validar reglas de negocio y errores.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-29",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Browser interaction tests»?",
    "options": [
      "Comprueba en un navegador real que los eventos descarguen y ejecuten su símbolo sin demoras.",
      "Asegura que todas las referencias capturadas por clausuras diferidas sean serializables.",
      "Renderiza en servidor y reanuda en cliente comprobando que no se repita trabajo inicial.",
      "Valida en pruebas que la carga inicial no descargue paquetes de interacción innecesarios."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Browser interaction tests (Testing): Comprueba en un navegador real que los eventos descarguen y ejecuten su símbolo sin demoras.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-30",
    "collectionId": "qwik",
    "question": "Respecto a testing en Qwik, ¿cuál es el propósito de «SSR snapshots»?",
    "options": [
      "Asegura que todas las referencias capturadas por clausuras diferidas sean serializables al operar.",
      "Verifica el HTML inicial y el estado serializado producidos por el renderizado en servidor.",
      "Renderiza en servidor y reanuda en cliente comprobando que no se repita trabajo inicial.",
      "Valida en pruebas que la carga inicial no descargue paquetes de interacción innecesarios."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SSR snapshots (Testing): Verifica el HTML inicial y el estado serializado producidos por el renderizado en servidor.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-31",
    "collectionId": "qwik",
    "question": "En Qwik (Testing), ¿qué función técnica cumple «Pruebas de serialización»?",
    "options": [
      "Renderiza en servidor y reanuda en cliente comprobando que no se repita trabajo inicial.",
      "Valida en pruebas que la carga inicial no descargue paquetes de interacción innecesarios.",
      "Asegura que todas las referencias capturadas por clausuras diferidas sean serializables.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Pruebas de serialización (Testing): Asegura que todas las referencias capturadas por clausuras diferidas sean serializables.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-32",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Resumability round-trip tests» en testing?",
    "options": [
      "Asegura que todas las referencias capturadas por clausuras diferidas sean serializables.",
      "Valida en pruebas que la carga inicial no descargue paquetes de interacción innecesarios.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador.",
      "Renderiza en servidor y reanuda en cliente comprobando que no se repita trabajo inicial."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Resumability round-trip tests (Testing): Renderiza en servidor y reanuda en cliente comprobando que no se repita trabajo inicial.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-33",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Chunk loading assertions»?",
    "options": [
      "Valida en pruebas que la carga inicial no descargue paquetes de interacción innecesarios al operar.",
      "Asegura que todas las referencias capturadas por clausuras diferidas sean serializables.",
      "Renderiza en servidor y reanuda en cliente comprobando que no se repita trabajo inicial.",
      "Verifica el HTML inicial y el estado serializado producidos por el renderizado en servidor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Chunk loading assertions (Testing): Valida en pruebas que la carga inicial no descargue paquetes de interacción innecesarios.",
    "topic": "Testing",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-34",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Escapado SSR»?",
    "options": [
      "Restringe desde qué orígenes pueden cargarse scripts y estilos usando políticas estrictas al operar.",
      "Codifica automáticamente cualquier valor interpolado en el marcado para impedir inyecciones XSS.",
      "Permite redirecciones únicamente hacia rutas relativas o dominios explícitamente autorizados.",
      "Filtra qué campos del modelo pueden incluirse en el bloque JSON incrustado al final del HTML."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Escapado SSR (Seguridad web): Codifica automáticamente cualquier valor interpolado en el marcado para impedir inyecciones XSS.",
    "topic": "Seguridad web",
    "difficulty": "intermedio"
  },
  {
    "id": "qwik-q-35",
    "collectionId": "qwik",
    "question": "Respecto a seguridad web en Qwik, ¿cuál es el propósito de «CSRF en actions»?",
    "options": [
      "Restringe desde qué orígenes pueden cargarse scripts y estilos usando políticas estrictas al operar.",
      "Permite redirecciones únicamente hacia rutas relativas o dominios explícitamente autorizados.",
      "Bloquea envíos de formularios cruzados verificando cabeceras de origen en acciones de servidor.",
      "Filtra qué campos del modelo pueden incluirse en el bloque JSON incrustado al final del HTML."
    ],
    "correctAnswerIndex": 2,
    "explanation": "CSRF en actions (Seguridad web): Bloquea envíos de formularios cruzados verificando cabeceras de origen en acciones de servidor.",
    "topic": "Seguridad web",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-36",
    "collectionId": "qwik",
    "question": "En Qwik (Seguridad web), ¿qué función técnica cumple «Content Security Policy»?",
    "options": [
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador al operar.",
      "Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración al operar.",
      "Minimiza dependencias pesadas de arranque para responder rápido en funciones efímeras.",
      "Restringe desde qué orígenes pueden cargarse scripts y estilos usando políticas estrictas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Content Security Policy (Seguridad web): Restringe desde qué orígenes pueden cargarse scripts y estilos usando políticas estrictas.",
    "topic": "Seguridad web",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-37",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Validación de redirect» en seguridad web?",
    "options": [
      "Permite redirecciones únicamente hacia rutas relativas o dominios explícitamente autorizados.",
      "Restringe desde qué orígenes pueden cargarse scripts y estilos usando políticas estrictas.",
      "Filtra qué campos del modelo pueden incluirse en el bloque JSON incrustado al final del HTML.",
      "Inyecta un token criptográfico por petición en todas las etiquetas de script generadas en SSR."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Validación de redirect (Seguridad web): Permite redirecciones únicamente hacia rutas relativas o dominios explícitamente autorizados.",
    "topic": "Seguridad web",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-38",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Secretos solo en servidor»?",
    "options": [
      "Restringe desde qué orígenes pueden cargarse scripts y estilos usando políticas estrictas al operar.",
      "Confinamiento de llaves privadas dentro de cargadores y funciones que jamás viajan al navegador.",
      "Permite redirecciones únicamente hacia rutas relativas o dominios explícitamente autorizados.",
      "Filtra qué campos del modelo pueden incluirse en el bloque JSON incrustado al final del HTML."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Secretos solo en servidor (Seguridad web): Confinamiento de llaves privadas dentro de cargadores y funciones que jamás viajan al navegador.",
    "topic": "Seguridad web",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-39",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Serialization allowlists»?",
    "options": [
      "Restringe desde qué orígenes pueden cargarse scripts y estilos usando políticas estrictas al operar.",
      "Permite redirecciones únicamente hacia rutas relativas o dominios explícitamente autorizados.",
      "Filtra qué campos del modelo pueden incluirse en el bloque JSON incrustado al final del HTML.",
      "Inyecta un token criptográfico por petición en todas las etiquetas de script generadas en SSR."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Serialization allowlists (Seguridad web): Filtra qué campos del modelo pueden incluirse en el bloque JSON incrustado al final del HTML.",
    "topic": "Seguridad web",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-40",
    "collectionId": "qwik",
    "question": "Respecto a seguridad web en Qwik, ¿cuál es el propósito de «CSP nonce propagation»?",
    "options": [
      "Restringe desde qué orígenes pueden cargarse scripts y estilos usando políticas estrictas al operar.",
      "Permite redirecciones únicamente hacia rutas relativas o dominios explícitamente autorizados.",
      "Filtra qué campos del modelo pueden incluirse en el bloque JSON incrustado al final del HTML.",
      "Inyecta un token criptográfico por petición en todas las etiquetas de script generadas en SSR."
    ],
    "correctAnswerIndex": 3,
    "explanation": "CSP nonce propagation (Seguridad web): Inyecta un token criptográfico por petición en todas las etiquetas de script generadas en SSR.",
    "topic": "Seguridad web",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-41",
    "collectionId": "qwik",
    "question": "En Qwik (Optimización), ¿qué función técnica cumple «Bundle graph»?",
    "options": [
      "Agrupa símbolos relacionados en fragmentos óptimos según la probabilidad de usarse juntos.",
      "Emite directivas de preconexión y precarga para los símbolos críticos de la vista actual.",
      "Ajusta qué símbolos precargar basándose en métricas reales de navegación de los usuarios.",
      "Genera variantes responsivas con dimensiones fijas y formatos modernos para evitar saltos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Bundle graph (Optimización): Agrupa símbolos relacionados en fragmentos óptimos según la probabilidad de usarse juntos.",
    "topic": "Optimización",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-42",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Prefetch strategies» en optimización?",
    "options": [
      "Emite directivas de preconexión y precarga para los símbolos críticos de la vista actual al operar.",
      "Descarga en segundo plano los módulos de interacción probables mediante un trabajador de red.",
      "Ajusta qué símbolos precargar basándose en métricas reales de navegación de los usuarios.",
      "Agrupa símbolos relacionados en fragmentos óptimos según la probabilidad de usarse juntos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Prefetch strategies (Optimización): Descarga en segundo plano los módulos de interacción probables mediante un trabajador de red.",
    "topic": "Optimización",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-43",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Resource hints»?",
    "options": [
      "Ajusta qué símbolos precargar basándose en métricas reales de navegación de los usuarios.",
      "Agrupa símbolos relacionados en fragmentos óptimos según la probabilidad de usarse juntos.",
      "Emite directivas de preconexión y precarga para los símbolos críticos de la vista actual.",
      "Genera variantes responsivas con dimensiones fijas y formatos modernos para evitar saltos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Resource hints (Optimización): Emite directivas de preconexión y precarga para los símbolos críticos de la vista actual.",
    "topic": "Optimización",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-44",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Image optimization»?",
    "options": [
      "Emite directivas de preconexión y precarga para los símbolos críticos de la vista actual al operar.",
      "Ajusta qué símbolos precargar basándose en métricas reales de navegación de los usuarios.",
      "Agrupa símbolos relacionados en fragmentos óptimos según la probabilidad de usarse juntos.",
      "Genera variantes responsivas con dimensiones fijas y formatos modernos para evitar saltos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Image optimization (Optimización): Genera variantes responsivas con dimensiones fijas y formatos modernos para evitar saltos.",
    "topic": "Optimización",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-45",
    "collectionId": "qwik",
    "question": "Respecto a optimización en Qwik, ¿cuál es el propósito de «Partytown para terceros»?",
    "options": [
      "Ejecuta scripts analíticos de terceros dentro de un Web Worker aislado del hilo principal.",
      "Emite directivas de preconexión y precarga para los símbolos críticos de la vista actual.",
      "Ajusta qué símbolos precargar basándose en métricas reales de navegación de los usuarios.",
      "Agrupa símbolos relacionados en fragmentos óptimos según la probabilidad de usarse juntos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Partytown para terceros (Optimización): Ejecuta scripts analíticos de terceros dentro de un Web Worker aislado del hilo principal.",
    "topic": "Optimización",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-46",
    "collectionId": "qwik",
    "question": "En Qwik (Optimización), ¿qué función técnica cumple «Symbol graph budgets»?",
    "options": [
      "Emite directivas de preconexión y precarga para los símbolos críticos de la vista actual al operar.",
      "Audita el tamaño máximo de cada fragmento diferido para mantener la reanudación instantánea.",
      "Ajusta qué símbolos precargar basándose en métricas reales de navegación de los usuarios.",
      "Agrupa símbolos relacionados en fragmentos óptimos según la probabilidad de usarse juntos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Symbol graph budgets (Optimización): Audita el tamaño máximo de cada fragmento diferido para mantener la reanudación instantánea.",
    "topic": "Optimización",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-47",
    "collectionId": "qwik",
    "question": "Dentro de Qwik, ¿cómo opera el mecanismo de «Measured prefetch heuristics» en optimización?",
    "options": [
      "Emite directivas de preconexión y precarga para los símbolos críticos de la vista actual.",
      "Agrupa símbolos relacionados en fragmentos óptimos según la probabilidad de usarse juntos.",
      "Ajusta qué símbolos precargar basándose en métricas reales de navegación de los usuarios.",
      "Genera variantes responsivas con dimensiones fijas y formatos modernos para evitar saltos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Measured prefetch heuristics (Optimización): Ajusta qué símbolos precargar basándose en métricas reales de navegación de los usuarios.",
    "topic": "Optimización",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-48",
    "collectionId": "qwik",
    "question": "Al trabajar con Qwik, ¿qué responsabilidad define a «Node adapter»?",
    "options": [
      "Minimiza dependencias pesadas de arranque para responder rápido en funciones efímeras.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador.",
      "Pospone la descarga y ejecución de un efecto hasta que su componente entra en pantalla.",
      "Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Node adapter (Operación multiplataforma): Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración.",
    "topic": "Operación multiplataforma",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-49",
    "collectionId": "qwik",
    "question": "En la arquitectura de Qwik, ¿qué caracteriza técnicamente a «Edge adapters»?",
    "options": [
      "Despliega el renderizado y los cargadores en nodos distribuidos cercanos al usuario final.",
      "Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración.",
      "Minimiza dependencias pesadas de arranque para responder rápido en funciones efímeras.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Edge adapters (Operación multiplataforma): Despliega el renderizado y los cargadores en nodos distribuidos cercanos al usuario final.",
    "topic": "Operación multiplataforma",
    "difficulty": "avanzado"
  },
  {
    "id": "qwik-q-50",
    "collectionId": "qwik",
    "question": "Respecto a operación multiplataforma en Qwik, ¿cuál es el propósito de «Serverless cold starts»?",
    "options": [
      "Empaqueta la aplicación para ejecutarse sobre un servidor estándar de larga duración al operar.",
      "Minimiza dependencias pesadas de arranque para responder rápido en funciones efímeras.",
      "Separa qué efectos corren una vez en servidor y cuáles se despiertan en el navegador.",
      "Pospone la descarga y ejecución de un efecto hasta que su componente entra en pantalla."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Serverless cold starts (Operación multiplataforma): Minimiza dependencias pesadas de arranque para responder rápido en funciones efímeras.",
    "topic": "Operación multiplataforma",
    "difficulty": "avanzado"
  }
];
