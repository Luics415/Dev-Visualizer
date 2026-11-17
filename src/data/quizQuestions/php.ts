import type { QuizQuestion } from "@/data/quizTypes";

export const phpQuestions: QuizQuestion[] = [
  {
    "id": "php-q-01",
    "collectionId": "php",
    "question": "En PHP (Tipos y semántica moderna), ¿qué función técnica cumple «Strict types»?",
    "options": [
      "Hace que llamadas desde el archivo rechacen coerciones escalares implícitas que ocultarían datos incompatibles.",
      "Representa un conjunto cerrado de casos y pueden asociar valores estables para persistencia o transporte.",
      "Permite una única inicialización y protegen referencias, aunque no vuelven inmutables sus objetos internos.",
      "Adjuntan metadatos estructurados que Reflection interpreta sin depender de comentarios no tipados al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Strict types (Tipos y semántica moderna): Hace que llamadas desde el archivo rechacen coerciones escalares implícitas que ocultarían datos incompatibles.",
    "topic": "Tipos y semántica moderna",
    "difficulty": "básico"
  },
  {
    "id": "php-q-02",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Union e intersection types» en tipos y semántica moderna?",
    "options": [
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar.",
      "Expresa alternativas aceptadas o capacidades simultáneas y trasladan validación al motor.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Union e intersection types (Tipos y semántica moderna): Expresan alternativas aceptadas o capacidades simultáneas y trasladan validación al motor.",
    "topic": "Tipos y semántica moderna",
    "difficulty": "básico"
  },
  {
    "id": "php-q-03",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Readonly properties»?",
    "options": [
      "Adjuntan metadatos estructurados que Reflection interpreta sin depender de comentarios no tipados en el flujo.",
      "Representa un conjunto cerrado de casos y pueden asociar valores estables para persistencia o transporte.",
      "Permite una única inicialización y protegen referencias, aunque no vuelven inmutables sus objetos internos.",
      "Expresa alternativas aceptadas o capacidades simultáneas y trasladan validación al motor sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Readonly properties (Tipos y semántica moderna): Permiten una única inicialización y protegen referencias, aunque no vuelven inmutables sus objetos internos.",
    "topic": "Tipos y semántica moderna",
    "difficulty": "básico"
  },
  {
    "id": "php-q-04",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Enums»?",
    "options": [
      "Adjuntan metadatos estructurados que Reflection interpreta sin depender de comentarios no tipados al operar.",
      "Permite una única inicialización y protegen referencias, aunque no vuelven inmutables sus objetos internos.",
      "Expresa alternativas aceptadas o capacidades simultáneas y trasladan validación al motor de forma segura.",
      "Representa un conjunto cerrado de casos y pueden asociar valores estables para persistencia o transporte."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Enums (Tipos y semántica moderna): Representan un conjunto cerrado de casos y pueden asociar valores estables para persistencia o transporte.",
    "topic": "Tipos y semántica moderna",
    "difficulty": "básico"
  },
  {
    "id": "php-q-05",
    "collectionId": "php",
    "question": "Respecto a tipos y semántica moderna en PHP, ¿cuál es el propósito de «Attributes»?",
    "options": [
      "Adjuntan metadatos estructurados que Reflection interpreta sin depender de comentarios no tipados.",
      "Expresa alternativas aceptadas o capacidades simultáneas y trasladan validación al motor al operar.",
      "Estandariza lookup de servicios, aunque no convierte service locator en diseño recomendable.",
      "Agrupa sentencias con commit o rollback y preservan excepciones que activarían recuperación."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Attributes (Tipos y semántica moderna): Adjuntan metadatos estructurados que Reflection interpreta sin depender de comentarios no tipados.",
    "topic": "Tipos y semántica moderna",
    "difficulty": "básico"
  },
  {
    "id": "php-q-06",
    "collectionId": "php",
    "question": "En PHP (Orientación a objetos), ¿qué función técnica cumple «Interfaces y clases abstractas»?",
    "options": [
      "Permite retornos más específicos y parámetros más generales preservando sustitución segura de forma clara.",
      "Separa contrato y comportamiento parcial para compartir capacidades sin instanciar una base incompleta.",
      "Insertan métodos en clases y exigen resolver precedencia y alias cuando varias composiciones colisionan.",
      "Define avance y retroceso cuando la transformación de datos permite recuperar el estado anterior al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Interfaces y clases abstractas (Orientación a objetos): Separan contrato y comportamiento parcial para compartir capacidades sin instanciar una base incompleta.",
    "topic": "Orientación a objetos",
    "difficulty": "básico"
  },
  {
    "id": "php-q-07",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Traits» en orientación a objetos?",
    "options": [
      "Separa contrato y comportamiento parcial para compartir capacidades sin instanciar una base incompleta al operar.",
      "Permite retornos más específicos y parámetros más generales preservando sustitución segura en ejecución.",
      "Insertan métodos en clases y exigen resolver precedencia y alias cuando varias composiciones colisionan.",
      "Adjuntan metadatos estructurados que Reflection interpreta sin depender de comentarios no tipados al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Traits (Orientación a objetos): Insertan métodos en clases y exigen resolver precedencia y alias cuando varias composiciones colisionan.",
    "topic": "Orientación a objetos",
    "difficulty": "básico"
  },
  {
    "id": "php-q-08",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Magic methods»?",
    "options": [
      "Separa contrato y comportamiento parcial para compartir capacidades sin instanciar una base incompleta al operar.",
      "Insertan métodos en clases y exigen resolver precedencia y alias cuando varias composiciones colisionan.",
      "Permite retornos más específicos y parámetros más generales preservando sustitución segura de forma segura.",
      "Interceptan acceso, llamada o serialización y deben evitar ocultar errores tipográficos y efectos costosos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Magic methods (Orientación a objetos): Interceptan acceso, llamada o serialización y deben evitar ocultar errores tipográficos y efectos costosos.",
    "topic": "Orientación a objetos",
    "difficulty": "básico"
  },
  {
    "id": "php-q-09",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Covarianza y contravarianza»?",
    "options": [
      "Permite retornos más específicos y parámetros más generales preservando sustitución segura.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta.",
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Covarianza y contravarianza (Orientación a objetos): Permiten retornos más específicos y parámetros más generales preservando sustitución segura.",
    "topic": "Orientación a objetos",
    "difficulty": "básico"
  },
  {
    "id": "php-q-10",
    "collectionId": "php",
    "question": "Respecto a internals de zend en PHP, ¿cuál es el propósito de «zval»?",
    "options": [
      "Libera contenedores cuando su contador llega a cero y delega ciclos al recolector especializado.",
      "Guarda etiqueta de tipo y payload de cada valor para que el motor ejecute operaciones dinámicas.",
      "Comparte arrays o strings hasta una escritura, momento en que duplica el almacenamiento necesario.",
      "Traduce el script parseado a instrucciones que la máquina virtual Zend puede optimizar y ejecutar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "zval (Internals de Zend): Guarda etiqueta de tipo y payload de cada valor para que el motor ejecute operaciones dinámicas.",
    "topic": "Internals de Zend",
    "difficulty": "básico"
  },
  {
    "id": "php-q-11",
    "collectionId": "php",
    "question": "En PHP (Internals de Zend), ¿qué función técnica cumple «Reference counting»?",
    "options": [
      "Guarda etiqueta de tipo y payload de cada valor para que el motor ejecute operaciones dinámicas.",
      "Comparte arrays o strings hasta una escritura, momento en que duplica el almacenamiento necesario.",
      "Libera contenedores cuando su contador llega a cero y delega ciclos al recolector especializado.",
      "Traduce el script parseado a instrucciones que la máquina virtual Zend puede optimizar y ejecutar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reference counting (Internals de Zend): Libera contenedores cuando su contador llega a cero y delega ciclos al recolector especializado.",
    "topic": "Internals de Zend",
    "difficulty": "básico"
  },
  {
    "id": "php-q-12",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Copy-on-write» en internals de zend?",
    "options": [
      "Guarda etiqueta de tipo y payload de cada valor para que el motor ejecute operaciones dinámicas al operar.",
      "Libera contenedores cuando su contador llega a cero y delega ciclos al recolector especializado.",
      "Traduce el script parseado a instrucciones que la máquina virtual Zend puede optimizar y ejecutar.",
      "Comparte arrays o strings hasta una escritura, momento en que duplica el almacenamiento necesario."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Copy-on-write (Internals de Zend): Comparte arrays o strings hasta una escritura, momento en que duplica el almacenamiento necesario.",
    "topic": "Internals de Zend",
    "difficulty": "básico"
  },
  {
    "id": "php-q-13",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Opcodes»?",
    "options": [
      "Traduce el script parseado a instrucciones que la máquina virtual Zend puede optimizar y ejecutar.",
      "Guarda etiqueta de tipo y payload de cada valor para que el motor ejecute operaciones dinámicas.",
      "Libera contenedores cuando su contador llega a cero y delega ciclos al recolector especializado.",
      "Comparte arrays o strings hasta una escritura, momento en que duplica el almacenamiento necesario."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Opcodes (Internals de Zend): Traducen el script parseado a instrucciones que la máquina virtual Zend puede optimizar y ejecutar.",
    "topic": "Internals de Zend",
    "difficulty": "básico"
  },
  {
    "id": "php-q-14",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Just-in-time compilation»?",
    "options": [
      "Comparte arrays o strings hasta una escritura, momento en que duplica el almacenamiento necesario al operar.",
      "Convierte rutas elegibles en código nativo, cuya ganancia depende del workload y no solo de habilitarlo.",
      "Traduce el script parseado a instrucciones que la máquina virtual Zend puede optimizar y ejecutar al operar.",
      "Guarda etiqueta de tipo y payload de cada valor para que el motor ejecute operaciones dinámicas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Just-in-time compilation (Internals de Zend): Convierte rutas elegibles en código nativo, cuya ganancia depende del workload y no solo de habilitarlo.",
    "topic": "Internals de Zend",
    "difficulty": "básico"
  },
  {
    "id": "php-q-15",
    "collectionId": "php",
    "question": "Respecto a estándares e interoperabilidad en PHP, ¿cuál es el propósito de «PHP-FIG y PSR»?",
    "options": [
      "Estandariza lookup de servicios, aunque no convierte service locator en diseño recomendable sin degradar el flujo.",
      "Representa un conjunto cerrado de casos y pueden asociar valores estables para persistencia o transporte al operar.",
      "Define recomendaciones interoperables cuya adopción se verifica por interfaz, no por pertenecer a un framework.",
      "Insertan métodos en clases y exigen resolver precedencia y alias cuando varias composiciones colisionan al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "PHP-FIG y PSR (Estándares e interoperabilidad): Define recomendaciones interoperables cuya adopción se verifica por interfaz, no por pertenecer a un framework.",
    "topic": "Estándares e interoperabilidad",
    "difficulty": "básico"
  },
  {
    "id": "php-q-16",
    "collectionId": "php",
    "question": "En PHP (Estándares e interoperabilidad), ¿qué función técnica cumple «PSR-3 logging»?",
    "options": [
      "Modela request y response inmutables, por lo que cada with devuelve una instancia nueva.",
      "Expone capacidades compiladas y obligan a fijar ABI, versión y disponibilidad del entorno.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar.",
      "Normaliza niveles, contexto y placeholders para cambiar backend sin reescribir emisores."
    ],
    "correctAnswerIndex": 3,
    "explanation": "PSR-3 logging (Estándares e interoperabilidad): Normaliza niveles, contexto y placeholders para cambiar backend sin reescribir emisores.",
    "topic": "Estándares e interoperabilidad",
    "difficulty": "básico"
  },
  {
    "id": "php-q-17",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «PSR-7 mensajes HTTP» en estándares e interoperabilidad?",
    "options": [
      "Modela request y response inmutables, por lo que cada with devuelve una instancia nueva al operar.",
      "Normaliza niveles, contexto y placeholders para cambiar backend sin reescribir emisores.",
      "Expone capacidades compiladas y obligan a fijar ABI, versión y disponibilidad del entorno.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real."
    ],
    "correctAnswerIndex": 0,
    "explanation": "PSR-7 mensajes HTTP (Estándares e interoperabilidad): Modela request y response inmutables, por lo que cada with devuelve una instancia nueva.",
    "topic": "Estándares e interoperabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-18",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «PSR-11 contenedores»?",
    "options": [
      "Normaliza niveles, contexto y placeholders para cambiar backend sin reescribir emisores al operar.",
      "Estandariza lookup de servicios, aunque no convierte service locator en diseño recomendable.",
      "Modela request y response inmutables, por lo que cada with devuelve una instancia nueva.",
      "Expone capacidades compiladas y obligan a fijar ABI, versión y disponibilidad del entorno."
    ],
    "correctAnswerIndex": 1,
    "explanation": "PSR-11 contenedores (Estándares e interoperabilidad): Estandariza lookup de servicios, aunque no convierte service locator en diseño recomendable.",
    "topic": "Estándares e interoperabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-19",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Extensiones nativas»?",
    "options": [
      "Normaliza niveles, contexto y placeholders para cambiar backend sin reescribir emisores al operar.",
      "Modela request y response inmutables, por lo que cada with devuelve una instancia nueva.",
      "Expone capacidades compiladas y obligan a fijar ABI, versión y disponibilidad del entorno.",
      "Estandariza lookup de servicios, aunque no convierte service locator en diseño recomendable."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Extensiones nativas (Estándares e interoperabilidad): Exponen capacidades compiladas y obligan a fijar ABI, versión y disponibilidad del entorno.",
    "topic": "Estándares e interoperabilidad",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-20",
    "collectionId": "php",
    "question": "Respecto a http y apis en PHP, ¿cuál es el propósito de «Routing»?",
    "options": [
      "Configura timeouts, reintentos acotados e idempotencia para no amplificar una falla remota al operar.",
      "Emite fragmentos sin construir todo el cuerpo y controla buffering, errores tardíos y desconexión.",
      "Expone capacidades compiladas y obligan a fijar ABI, versión y disponibilidad del entorno al operar.",
      "Relaciona método y patrón de URL con un handler validando parámetros antes de entrar al dominio."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Routing (HTTP y APIs): Relaciona método y patrón de URL con un handler validando parámetros antes de entrar al dominio.",
    "topic": "HTTP y APIs",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-21",
    "collectionId": "php",
    "question": "En PHP (HTTP y APIs), ¿qué función técnica cumple «Middleware»?",
    "options": [
      "Envuelve la siguiente etapa para aplicar autenticación, trazas o transformación con un orden observable al operar.",
      "Emite fragmentos sin construir todo el cuerpo y controla buffering, errores tardíos y desconexión.",
      "Relaciona método y patrón de URL con un handler validando parámetros antes de entrar al dominio al operar.",
      "Elige representación según Accept y responde de forma explícita cuando ningún formato es compatible."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Middleware (HTTP y APIs): Envuelve la siguiente etapa para aplicar autenticación, trazas o transformación con un orden observable.",
    "topic": "HTTP y APIs",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-22",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Negociación de contenido» en http y apis?",
    "options": [
      "Relaciona método y patrón de URL con un handler validando parámetros antes de entrar al dominio al operar.",
      "Elige representación según Accept y responde de forma explícita cuando ningún formato es compatible.",
      "Configura timeouts, reintentos acotados e idempotencia para no amplificar una falla remota al operar.",
      "Emite fragmentos sin construir todo el cuerpo y controla buffering, errores tardíos y desconexión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Negociación de contenido (HTTP y APIs): Elige representación según Accept y responde de forma explícita cuando ningún formato es compatible.",
    "topic": "HTTP y APIs",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-23",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Streaming HTTP»?",
    "options": [
      "Configura timeouts, reintentos acotados e idempotencia para no amplificar una falla remota al operar.",
      "Relaciona método y patrón de URL con un handler validando parámetros antes de entrar al dominio.",
      "Emite fragmentos sin construir todo el cuerpo y controla buffering, errores tardíos y desconexión.",
      "Elige representación según Accept y responde de forma explícita cuando ningún formato es compatible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Streaming HTTP (HTTP y APIs): Emite fragmentos sin construir todo el cuerpo y controla buffering, errores tardíos y desconexión.",
    "topic": "HTTP y APIs",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-24",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Clientes resilientes»?",
    "options": [
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables al operar.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta.",
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo.",
      "Configura timeouts, reintentos acotados e idempotencia para no amplificar una falla remota."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Clientes resilientes (HTTP y APIs): Configuran timeouts, reintentos acotados e idempotencia para no amplificar una falla remota.",
    "topic": "HTTP y APIs",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-25",
    "collectionId": "php",
    "question": "Respecto a persistencia segura en PHP, ¿cuál es el propósito de «Transacciones PDO»?",
    "options": [
      "Agrupa sentencias con commit o rollback y preservan excepciones que activarían recuperación.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta.",
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo.",
      "Registra una clave de operación para que reentregas no dupliquen efectos irreversibles."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Transacciones PDO (Persistencia segura): Agrupan sentencias con commit o rollback y preservan excepciones que activarían recuperación.",
    "topic": "Persistencia segura",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-26",
    "collectionId": "php",
    "question": "En PHP (Persistencia segura), ¿qué función técnica cumple «Niveles de aislamiento»?",
    "options": [
      "Agrupa sentencias con commit o rollback y preservan excepciones que activarían recuperación al evaluar.",
      "Determina qué cambios concurrentes puede observar una transacción y qué anomalías siguen permitidas.",
      "Define avance y retroceso cuando la transformación de datos permite recuperar el estado anterior.",
      "Carga relaciones por lote o join después de confirmar con telemetría que el patrón repite accesos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Niveles de aislamiento (Persistencia segura): Determinan qué cambios concurrentes puede observar una transacción y qué anomalías siguen permitidas.",
    "topic": "Persistencia segura",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-27",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Mapeo objeto-relacional» en persistencia segura?",
    "options": [
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta.",
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mapeo objeto-relacional (Persistencia segura): Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta.",
    "topic": "Persistencia segura",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-28",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Migraciones reversibles»?",
    "options": [
      "Agrupa sentencias con commit o rollback y preservan excepciones que activarían recuperación al operar.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta al operar.",
      "Carga relaciones por lote o join después de confirmar con telemetría que el patrón repite accesos.",
      "Define avance y retroceso cuando la transformación de datos permite recuperar el estado anterior."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Migraciones reversibles (Persistencia segura): Definen avance y retroceso cuando la transformación de datos permite recuperar el estado anterior.",
    "topic": "Persistencia segura",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-29",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Evitar consultas N+1»?",
    "options": [
      "Carga relaciones por lote o join después de confirmar con telemetría que el patrón repite accesos.",
      "Agrupa sentencias con commit o rollback y preservan excepciones que activarían recuperación.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta al operar.",
      "Define avance y retroceso cuando la transformación de datos permite recuperar el estado anterior."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Evitar consultas N+1 (Persistencia segura): Carga relaciones por lote o join después de confirmar con telemetría que el patrón repite accesos.",
    "topic": "Persistencia segura",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-30",
    "collectionId": "php",
    "question": "Respecto a seguridad web en PHP, ¿cuál es el propósito de «CSRF tokens»?",
    "options": [
      "Evita pasar entrada al shell y separa ejecutable, argumentos y lista permitida de operaciones al operar.",
      "Vincula una acción con la sesión legítima para rechazar formularios forjados desde otro origen.",
      "Restringe orígenes ejecutables en el navegador y reduce impacto de una inyección de contenido.",
      "Regenera el identificador tras autenticación para impedir que un atacante imponga uno conocido."
    ],
    "correctAnswerIndex": 1,
    "explanation": "CSRF tokens (Seguridad web): Vinculan una acción con la sesión legítima para rechazar formularios forjados desde otro origen.",
    "topic": "Seguridad web",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-31",
    "collectionId": "php",
    "question": "En PHP (Seguridad web), ¿qué función técnica cumple «Hashing de contraseñas»?",
    "options": [
      "Vincula una acción con la sesión legítima para rechazar formularios forjados desde otro origen al operar.",
      "Regenera el identificador tras autenticación para impedir que un atacante imponga uno conocido al operar.",
      "Usa password_hash con algoritmo adaptativo y verifica sin almacenar ni registrar el secreto original.",
      "Evita pasar entrada al shell y separa ejecutable, argumentos y lista permitida de operaciones al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Hashing de contraseñas (Seguridad web): Usa password_hash con algoritmo adaptativo y verifica sin almacenar ni registrar el secreto original.",
    "topic": "Seguridad web",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-32",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Fijación de sesión» en seguridad web?",
    "options": [
      "Evita pasar entrada al shell y separa ejecutable, argumentos y lista permitida de operaciones al operar.",
      "Restringe orígenes ejecutables en el navegador y reduce impacto de una inyección de contenido.",
      "Vincula una acción con la sesión legítima para rechazar formularios forjados desde otro origen.",
      "Regenera el identificador tras autenticación para impedir que un atacante imponga uno conocido."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Fijación de sesión (Seguridad web): Regenera el identificador tras autenticación para impedir que un atacante imponga uno conocido.",
    "topic": "Seguridad web",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-33",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Inyección de comandos»?",
    "options": [
      "Evita pasar entrada al shell y separa ejecutable, argumentos y lista permitida de operaciones.",
      "Restringe orígenes ejecutables en el navegador y reduce impacto de una inyección de contenido.",
      "Vincula una acción con la sesión legítima para rechazar formularios forjados desde otro origen.",
      "Regenera el identificador tras autenticación para impedir que un atacante imponga uno conocido."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Inyección de comandos (Seguridad web): Evita pasar entrada al shell y separa ejecutable, argumentos y lista permitida de operaciones.",
    "topic": "Seguridad web",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-34",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Políticas de seguridad de contenido»?",
    "options": [
      "Evita pasar entrada al shell y separa ejecutable, argumentos y lista permitida de operaciones.",
      "Restringe orígenes ejecutables en el navegador y reduce impacto de una inyección de contenido.",
      "Vincula una acción con la sesión legítima para rechazar formularios forjados desde otro origen.",
      "Regenera el identificador tras autenticación para impedir que un atacante imponga uno conocido."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Políticas de seguridad de contenido (Seguridad web): Restringen orígenes ejecutables en el navegador y reducen impacto de una inyección de contenido.",
    "topic": "Seguridad web",
    "difficulty": "intermedio"
  },
  {
    "id": "php-q-35",
    "collectionId": "php",
    "question": "Respecto a trabajo asíncrono en PHP, ¿cuál es el propósito de «Colas de trabajos»?",
    "options": [
      "Consumen trabajos repetidamente y deben reciclar memoria, capturar señales y aislar fallos en el flujo.",
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo en ejecución.",
      "Desacoplan una petición de tareas duraderas mediante mensajes persistentes y confirmación explícita.",
      "Registra una clave de operación para que reentregas no dupliquen efectos irreversibles en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Colas de trabajos (Trabajo asíncrono): Desacoplan una petición de tareas duraderas mediante mensajes persistentes y confirmación explícita.",
    "topic": "Trabajo asíncrono",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-36",
    "collectionId": "php",
    "question": "En PHP (Trabajo asíncrono), ¿qué función técnica cumple «Procesos workers»?",
    "options": [
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo al operar.",
      "Registra una clave de operación para que reentregas no dupliquen efectos irreversibles.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables al operar.",
      "Consumen trabajos repetidamente y deben reciclar memoria, capturar señales y aislar fallos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Procesos workers (Trabajo asíncrono): Consumen trabajos repetidamente y deben reciclar memoria, capturar señales y aislar fallos.",
    "topic": "Trabajo asíncrono",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-37",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Fibers en PHP» en trabajo asíncrono?",
    "options": [
      "Suspenden una pila cooperativamente para construir abstracciones asíncronas sin crear paralelismo por sí mismas al operar.",
      "Desacoplan una petición de tareas duraderas mediante mensajes persistentes y confirmación explícita al operar.",
      "Permite una única inicialización y protegen referencias, aunque no vuelven inmutables sus objetos internos.",
      "Representa un conjunto cerrado de casos y pueden asociar valores estables para persistencia o transporte al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fibers en PHP (Trabajo asíncrono): Suspenden una pila cooperativamente para construir abstracciones asíncronas sin crear paralelismo por sí mismas.",
    "topic": "Trabajo asíncrono",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-38",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Event loops»?",
    "options": [
      "Registra una clave de operación para que reentregas no dupliquen efectos irreversibles.",
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Event loops (Trabajo asíncrono): Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo.",
    "topic": "Trabajo asíncrono",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-39",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Idempotencia de consumidores»?",
    "options": [
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real.",
      "Registra una clave de operación para que reentregas no dupliquen efectos irreversibles.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Idempotencia de consumidores (Trabajo asíncrono): Registra una clave de operación para que reentregas no dupliquen efectos irreversibles.",
    "topic": "Trabajo asíncrono",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-40",
    "collectionId": "php",
    "question": "Respecto a verificación automatizada en PHP, ¿cuál es el propósito de «Pruebas de integración HTTP»?",
    "options": [
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables al operar.",
      "Altera condiciones y operadores para medir si la suite detecta comportamiento incorrecto.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar.",
      "Ejecuta request, middleware y persistencia para verificar status, headers, body y efectos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pruebas de integración HTTP (Verificación automatizada): Ejecutan request, middleware y persistencia para verificar status, headers, body y efectos.",
    "topic": "Verificación automatizada",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-41",
    "collectionId": "php",
    "question": "En PHP (Verificación automatizada), ¿qué función técnica cumple «PHPStan y Psalm»?",
    "options": [
      "Infieren tipos y rutas imposibles más allá de declaraciones nativas sin ejecutar el programa al operar.",
      "Altera condiciones y operadores para medir si la suite detecta comportamiento incorrecto.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables al operar.",
      "Ejecuta request, middleware y persistencia para verificar status, headers, body y efectos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "PHPStan y Psalm (Verificación automatizada): Infieren tipos y rutas imposibles más allá de declaraciones nativas sin ejecutar el programa.",
    "topic": "Verificación automatizada",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-42",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Mutation testing» en verificación automatizada?",
    "options": [
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables al operar.",
      "Altera condiciones y operadores para medir si la suite detecta comportamiento incorrecto.",
      "Ejecuta request, middleware y persistencia para verificar status, headers, body y efectos.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mutation testing (Verificación automatizada): Altera condiciones y operadores para medir si la suite detecta comportamiento incorrecto.",
    "topic": "Verificación automatizada",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-43",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Fixtures y factories»?",
    "options": [
      "Infieren tipos y rutas imposibles más allá de declaraciones nativas sin ejecutar el programa al operar.",
      "Ejecuta request, middleware y persistencia para verificar status, headers, body y efectos al operar.",
      "Construye datos mínimos y explícitos evitando estados compartidos que vuelven las pruebas frágiles.",
      "Altera condiciones y operadores para medir si la suite detecta comportamiento incorrecto al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fixtures y factories (Verificación automatizada): Construyen datos mínimos y explícitos evitando estados compartidos que vuelven las pruebas frágiles.",
    "topic": "Verificación automatizada",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-44",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Pruebas de contratos»?",
    "options": [
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta.",
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pruebas de contratos (Verificación automatizada): Aplican el mismo conjunto de expectativas a proveedores y adaptadores intercambiables.",
    "topic": "Verificación automatizada",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-45",
    "collectionId": "php",
    "question": "Respecto a rendimiento en PHP, ¿cuál es el propósito de «Preloading»?",
    "options": [
      "Carga símbolos compartidos al iniciar FPM y exige reinicio para reflejar cambios de código al operar.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar.",
      "Ajusta procesos y solicitudes por worker según memoria, concurrencia y latencia del entorno.",
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Preloading (Rendimiento): Carga símbolos compartidos al iniciar FPM y exige reinicio para reflejar cambios de código.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-46",
    "collectionId": "php",
    "question": "En PHP (Rendimiento), ¿qué función técnica cumple «Realpath cache»?",
    "options": [
      "Carga símbolos compartidos al iniciar FPM y exige reinicio para reflejar cambios de código al operar.",
      "Memoriza resolución de rutas y reduce filesystem lookups mientras su TTL no oculte despliegues.",
      "Ajusta procesos y solicitudes por worker según memoria, concurrencia y latencia del entorno.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Realpath cache (Rendimiento): Memoriza resolución de rutas y reduce filesystem lookups mientras su TTL no oculte despliegues.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-47",
    "collectionId": "php",
    "question": "Dentro de PHP, ¿cómo opera el mecanismo de «Profiling de peticiones» en rendimiento?",
    "options": [
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real.",
      "Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Profiling de peticiones (Rendimiento): Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-48",
    "collectionId": "php",
    "question": "Al trabajar con PHP, ¿qué responsabilidad define a «Caching por capas»?",
    "options": [
      "Memoriza resolución de rutas y reduce filesystem lookups mientras su TTL no oculte despliegues en el flujo.",
      "Ajusta procesos y solicitudes por worker según memoria, concurrencia y latencia del entorno en el flujo.",
      "Carga símbolos compartidos al iniciar FPM y exige reinicio para reflejar cambios de código en ejecución.",
      "Define clave, caducidad e invalidación para opcode, aplicación, HTTP y datos sin servir estado obsoleto."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Caching por capas (Rendimiento): Define clave, caducidad e invalidación para opcode, aplicación, HTTP y datos sin servir estado obsoleto.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-49",
    "collectionId": "php",
    "question": "En la arquitectura de PHP, ¿qué caracteriza técnicamente a «Pools y límites de FPM»?",
    "options": [
      "Ajusta procesos y solicitudes por worker según memoria, concurrencia y latencia del entorno.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar.",
      "Carga símbolos compartidos al iniciar FPM y exige reinicio para reflejar cambios de código.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pools y límites de FPM (Rendimiento): Ajustan procesos y solicitudes por worker según memoria, concurrencia y latencia del entorno.",
    "topic": "Rendimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "php-q-50",
    "collectionId": "php",
    "question": "Respecto a despliegue en PHP, ¿cuál es el propósito de «Configuración inmutable»?",
    "options": [
      "Aplica el mismo conjunto de expectativas a proveedores y adaptadores intercambiables al operar.",
      "Construye un artefacto único y aporta valores del entorno sin editar archivos desplegados.",
      "Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real al operar.",
      "Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Configuración inmutable (Despliegue): Construye un artefacto único y aporta valores del entorno sin editar archivos desplegados.",
    "topic": "Despliegue",
    "difficulty": "avanzado"
  }
];
