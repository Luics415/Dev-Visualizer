import type { QuizQuestion } from "@/data/quizTypes";

export const nosqlQuestions: QuizQuestion[] = [
  {
    "id": "nosql-q-01",
    "collectionId": "nosql",
    "question": "En NoSQL (Replicación interna), ¿qué función técnica cumple «Vector clocks»?",
    "options": [
      "Rastrea la causalidad parcial entre eventos de distintos nodos para detectar versiones en conflicto al operar.",
      "Guarda temporalmente en un nodo vecino las escrituras destinadas a una réplica no disponible al operar.",
      "Compara árboles de resúmenes criptográficos entre nodos para sincronizar rangos divergentes al operar.",
      "Corrige réplicas desactualizadas en segundo plano cuando una lectura detecta discrepancias al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Vector clocks (Replicación interna): Rastrea la causalidad parcial entre eventos de distintos nodos para detectar versiones en conflicto.",
    "topic": "Replicación interna",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-02",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Read repair» en replicación interna?",
    "options": [
      "Reconcilia las réplicas discrepantes antes de devolver la respuesta de lectura al cliente al operar.",
      "Corrige réplicas desactualizadas en segundo plano cuando una lectura detecta discrepancias.",
      "Compara árboles de resúmenes criptográficos entre nodos para sincronizar rangos divergentes.",
      "Guarda temporalmente en un nodo vecino las escrituras destinadas a una réplica no disponible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Read repair (Replicación interna): Corrige réplicas desactualizadas en segundo plano cuando una lectura detecta discrepancias.",
    "topic": "Replicación interna",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-03",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Anti-entropy»?",
    "options": [
      "Reconcilia las réplicas discrepantes antes de devolver la respuesta de lectura al cliente al operar.",
      "Corrige réplicas desactualizadas en segundo plano cuando una lectura detecta discrepancias.",
      "Compara árboles de resúmenes criptográficos entre nodos para sincronizar rangos divergentes.",
      "Guarda temporalmente en un nodo vecino las escrituras destinadas a una réplica no disponible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Anti-entropy (Replicación interna): Compara árboles de resúmenes criptográficos entre nodos para sincronizar rangos divergentes.",
    "topic": "Replicación interna",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-04",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Hinted handoff»?",
    "options": [
      "Reconcilia las réplicas discrepantes antes de devolver la respuesta de lectura al cliente al operar.",
      "Corrige réplicas desactualizadas en segundo plano cuando una lectura detecta discrepancias.",
      "Compara árboles de resúmenes criptográficos entre nodos para sincronizar rangos divergentes.",
      "Guarda temporalmente en un nodo vecino las escrituras destinadas a una réplica no disponible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Hinted handoff (Replicación interna): Guarda temporalmente en un nodo vecino las escrituras destinadas a una réplica no disponible.",
    "topic": "Replicación interna",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-05",
    "collectionId": "nosql",
    "question": "Respecto a replicación interna en NoSQL, ¿cuál es el propósito de «Foreground read repair»?",
    "options": [
      "Reconcilia las réplicas discrepantes antes de devolver la respuesta de lectura al cliente al operar.",
      "Corrige réplicas desactualizadas en segundo plano cuando una lectura detecta discrepancias.",
      "Compara árboles de resúmenes criptográficos entre nodos para sincronizar rangos divergentes.",
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Foreground read repair (Replicación interna): Reconcilia las réplicas discrepantes antes de devolver la respuesta de lectura al cliente.",
    "topic": "Replicación interna",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-06",
    "collectionId": "nosql",
    "question": "En NoSQL (Transacciones no relacionales), ¿qué función técnica cumple «Single-partition transactions»?",
    "options": [
      "Aplica operaciones inversas semánticas para deshacer efectos previos cuando aborta un flujo al operar.",
      "Ejecuta operaciones atómicas rápidas siempre que todos los registros compartan clave de partición.",
      "Coordina cambios atómicos entre múltiples documentos y particiones con mayor costo de latencia.",
      "Persiste el identificador de cada comando procesado para evitar aplicar dos veces un reintento."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Single-partition transactions (Transacciones no relacionales): Ejecuta operaciones atómicas rápidas siempre que todos los registros compartan clave de partición.",
    "topic": "Transacciones no relacionales",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-07",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Multi-document transactions» en transacciones no relacionales?",
    "options": [
      "Aplica operaciones inversas semánticas para deshacer efectos previos cuando aborta un flujo al operar.",
      "Persiste el identificador de cada comando procesado para evitar aplicar dos veces un reintento.",
      "Coordina cambios atómicos entre múltiples documentos y particiones con mayor costo de latencia.",
      "Relee el estado actual y reintenta la escritura condicional con espera exponencial tras colisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Multi-document transactions (Transacciones no relacionales): Coordina cambios atómicos entre múltiples documentos y particiones con mayor costo de latencia.",
    "topic": "Transacciones no relacionales",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-08",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Compare-and-swap»?",
    "options": [
      "Aplica operaciones inversas semánticas para deshacer efectos previos cuando aborta un flujo al operar.",
      "Coordina cambios atómicos entre múltiples documentos y particiones con mayor costo de latencia.",
      "Persiste el identificador de cada comando procesado para evitar aplicar dos veces un reintento.",
      "Actualiza un documento de forma condicional solo si su versión o atributo coincide con lo esperado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Compare-and-swap (Transacciones no relacionales): Actualiza un documento de forma condicional solo si su versión o atributo coincide con lo esperado.",
    "topic": "Transacciones no relacionales",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-09",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Sagas»?",
    "options": [
      "Encadena transacciones locales independientes ejecutando acciones compensatorias si un paso falla.",
      "Aplica operaciones inversas semánticas para deshacer efectos previos cuando aborta un flujo.",
      "Coordina cambios atómicos entre múltiples documentos y particiones con mayor costo de latencia.",
      "Persiste el identificador de cada comando procesado para evitar aplicar dos veces un reintento."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sagas (Transacciones no relacionales): Encadena transacciones locales independientes ejecutando acciones compensatorias si un paso falla.",
    "topic": "Transacciones no relacionales",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-10",
    "collectionId": "nosql",
    "question": "Respecto a transacciones no relacionales en NoSQL, ¿cuál es el propósito de «Idempotency records»?",
    "options": [
      "Aplica operaciones inversas semánticas para deshacer efectos previos cuando aborta un flujo al operar.",
      "Persiste el identificador de cada comando procesado para evitar aplicar dos veces un reintento.",
      "Coordina cambios atómicos entre múltiples documentos y particiones con mayor costo de latencia.",
      "Relee el estado actual y reintenta la escritura condicional con espera exponencial tras colisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Idempotency records (Transacciones no relacionales): Persiste el identificador de cada comando procesado para evitar aplicar dos veces un reintento.",
    "topic": "Transacciones no relacionales",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-11",
    "collectionId": "nosql",
    "question": "En NoSQL (Transacciones no relacionales), ¿qué función técnica cumple «Saga compensation»?",
    "options": [
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio al operar.",
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad.",
      "Aplica operaciones inversas semánticas para deshacer efectos previos cuando aborta un flujo.",
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Saga compensation (Transacciones no relacionales): Aplica operaciones inversas semánticas para deshacer efectos previos cuando aborta un flujo.",
    "topic": "Transacciones no relacionales",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-12",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Conditional-write retries» en transacciones no relacionales?",
    "options": [
      "Aplica operaciones inversas semánticas para deshacer efectos previos cuando aborta un flujo al operar.",
      "Coordina cambios atómicos entre múltiples documentos y particiones con mayor costo de latencia.",
      "Persiste el identificador de cada comando procesado para evitar aplicar dos veces un reintento.",
      "Relee el estado actual y reintenta la escritura condicional con espera exponencial tras colisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Conditional-write retries (Transacciones no relacionales): Relee el estado actual y reintenta la escritura condicional con espera exponencial tras colisión.",
    "topic": "Transacciones no relacionales",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-13",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Versioned documents»?",
    "options": [
      "Incluye un número de versión de esquema en cada documento para migrarlo al leerlo y guardarlo.",
      "Construye nuevos índices secundarios en segundo plano sin bloquear lecturas ni escrituras.",
      "Sincroniza dos esquemas o motores en vivo asegurando reconciliación ante fallos parciales.",
      "Guarda el último cursor procesado para reanudar migraciones masivas desde el punto exacto."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Versioned documents (Evolución del modelo): Incluye un número de versión de esquema en cada documento para migrarlo al leerlo y guardarlo.",
    "topic": "Evolución del modelo",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-14",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Dual reads and writes»?",
    "options": [
      "Incluye un número de versión de esquema en cada documento para migrarlo al leerlo y guardarlo al operar.",
      "Escribe en el modelo viejo y el nuevo simultáneamente mientras valida lecturas durante la transición.",
      "Recorre y transforma documentos históricos en lotes controlados sin saturar el tráfico activo al operar.",
      "Controla marcadores de borrado diferido para evitar que degraden los escaneos antes de compactarse."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dual reads and writes (Evolución del modelo): Escribe en el modelo viejo y el nuevo simultáneamente mientras valida lecturas durante la transición.",
    "topic": "Evolución del modelo",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-15",
    "collectionId": "nosql",
    "question": "Respecto a evolución del modelo en NoSQL, ¿cuál es el propósito de «Backfills online»?",
    "options": [
      "Construye nuevos índices secundarios en segundo plano sin bloquear lecturas ni escrituras al operar.",
      "Sincroniza dos esquemas o motores en vivo asegurando reconciliación ante fallos parciales.",
      "Recorre y transforma documentos históricos en lotes controlados sin saturar el tráfico activo.",
      "Guarda el último cursor procesado para reanudar migraciones masivas desde el punto exacto."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Backfills online (Evolución del modelo): Recorre y transforma documentos históricos en lotes controlados sin saturar el tráfico activo.",
    "topic": "Evolución del modelo",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-16",
    "collectionId": "nosql",
    "question": "En NoSQL (Evolución del modelo), ¿qué función técnica cumple «Index rebuilds»?",
    "options": [
      "Sincroniza dos esquemas o motores en vivo asegurando reconciliación ante fallos parciales.",
      "Guarda el último cursor procesado para reanudar migraciones masivas desde el punto exacto.",
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio.",
      "Construye nuevos índices secundarios en segundo plano sin bloquear lecturas ni escrituras."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Index rebuilds (Evolución del modelo): Construye nuevos índices secundarios en segundo plano sin bloquear lecturas ni escrituras.",
    "topic": "Evolución del modelo",
    "difficulty": "básico"
  },
  {
    "id": "nosql-q-17",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Tombstone management» en evolución del modelo?",
    "options": [
      "Controla marcadores de borrado diferido para evitar que degraden los escaneos antes de compactarse.",
      "Incluye un número de versión de esquema en cada documento para migrarlo al leerlo y guardarlo.",
      "Recorre y transforma documentos históricos en lotes controlados sin saturar el tráfico activo.",
      "Construye nuevos índices secundarios en segundo plano sin bloquear lecturas ni escrituras al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tombstone management (Evolución del modelo): Controla marcadores de borrado diferido para evitar que degraden los escaneos antes de compactarse.",
    "topic": "Evolución del modelo",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-18",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Dual-write migrations»?",
    "options": [
      "Construye nuevos índices secundarios en segundo plano sin bloquear lecturas ni escrituras.",
      "Sincroniza dos esquemas o motores en vivo asegurando reconciliación ante fallos parciales.",
      "Guarda el último cursor procesado para reanudar migraciones masivas desde el punto exacto.",
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dual-write migrations (Evolución del modelo): Sincroniza dos esquemas o motores en vivo asegurando reconciliación ante fallos parciales.",
    "topic": "Evolución del modelo",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-19",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Backfill checkpoints»?",
    "options": [
      "Construye nuevos índices secundarios en segundo plano sin bloquear lecturas ni escrituras.",
      "Sincroniza dos esquemas o motores en vivo asegurando reconciliación ante fallos parciales.",
      "Guarda el último cursor procesado para reanudar migraciones masivas desde el punto exacto.",
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Backfill checkpoints (Evolución del modelo): Guarda el último cursor procesado para reanudar migraciones masivas desde el punto exacto.",
    "topic": "Evolución del modelo",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-20",
    "collectionId": "nosql",
    "question": "Respecto a testing distribuido en NoSQL, ¿cuál es el propósito de «Fault injection»?",
    "options": [
      "Aísla subconjuntos del clúster para comprobar el comportamiento de quórum y reconciliación.",
      "Somete el clúster a cargas sostenidas midiendo latencia y rendimiento al crecer el volumen.",
      "Verifica matemáticamente si las operaciones observadas durante fallos respetan el contrato.",
      "Introduce caídas de nodos, pausas de disco y pérdidas de paquetes en un entorno controlado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Fault injection (Testing distribuido): Introduce caídas de nodos, pausas de disco y pérdidas de paquetes en un entorno controlado.",
    "topic": "Testing distribuido",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-21",
    "collectionId": "nosql",
    "question": "En NoSQL (Testing distribuido), ¿qué función técnica cumple «Clock skew simulation»?",
    "options": [
      "Adelanta o atrasa relojes entre servidores para verificar que no se pierdan escrituras recientes.",
      "Introduce caídas de nodos, pausas de disco y pérdidas de paquetes en un entorno controlado.",
      "Aísla subconjuntos del clúster para comprobar el comportamiento de quórum y reconciliación.",
      "Somete el clúster a cargas sostenidas midiendo latencia y rendimiento al crecer el volumen."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Clock skew simulation (Testing distribuido): Adelanta o atrasa relojes entre servidores para verificar que no se pierdan escrituras recientes.",
    "topic": "Testing distribuido",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-22",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Network partition tests» en testing distribuido?",
    "options": [
      "Introduce caídas de nodos, pausas de disco y pérdidas de paquetes en un entorno controlado.",
      "Aísla subconjuntos del clúster para comprobar el comportamiento de quórum y reconciliación.",
      "Somete el clúster a cargas sostenidas midiendo latencia y rendimiento al crecer el volumen.",
      "Verifica matemáticamente si las operaciones observadas durante fallos respetan el contrato."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Network partition tests (Testing distribuido): Aísla subconjuntos del clúster para comprobar el comportamiento de quórum y reconciliación.",
    "topic": "Testing distribuido",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-23",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Consistency verification»?",
    "options": [
      "Introduce caídas de nodos, pausas de disco y pérdidas de paquetes en un entorno controlado al operar.",
      "Aísla subconjuntos del clúster para comprobar el comportamiento de quórum y reconciliación al operar.",
      "Analiza historiales concurrentes de lecturas y escrituras para detectar violaciones de linealidad.",
      "Somete el clúster a cargas sostenidas midiendo latencia y rendimiento al crecer el volumen al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Consistency verification (Testing distribuido): Analiza historiales concurrentes de lecturas y escrituras para detectar violaciones de linealidad.",
    "topic": "Testing distribuido",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-24",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Capacity benchmarks»?",
    "options": [
      "Introduce caídas de nodos, pausas de disco y pérdidas de paquetes en un entorno controlado.",
      "Aísla subconjuntos del clúster para comprobar el comportamiento de quórum y reconciliación.",
      "Verifica matemáticamente si las operaciones observadas durante fallos respetan el contrato.",
      "Somete el clúster a cargas sostenidas midiendo latencia y rendimiento al crecer el volumen."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Capacity benchmarks (Testing distribuido): Somete el clúster a cargas sostenidas midiendo latencia y rendimiento al crecer el volumen.",
    "topic": "Testing distribuido",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-25",
    "collectionId": "nosql",
    "question": "Respecto a testing distribuido en NoSQL, ¿cuál es el propósito de «Jepsen history analysis»?",
    "options": [
      "Verifica matemáticamente si las operaciones observadas durante fallos respetan el contrato.",
      "Introduce caídas de nodos, pausas de disco y pérdidas de paquetes en un entorno controlado.",
      "Aísla subconjuntos del clúster para comprobar el comportamiento de quórum y reconciliación.",
      "Somete el clúster a cargas sostenidas midiendo latencia y rendimiento al crecer el volumen."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jepsen history analysis (Testing distribuido): Verifica matemáticamente si las operaciones observadas durante fallos respetan el contrato.",
    "topic": "Testing distribuido",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-26",
    "collectionId": "nosql",
    "question": "En NoSQL (Testing distribuido), ¿qué función técnica cumple «Nemesis fault profiles»?",
    "options": [
      "Introduce caídas de nodos, pausas de disco y pérdidas de paquetes en un entorno controlado al operar.",
      "Programa secuencias automatizadas de particiones, pausas y reinicios durante pruebas distribuidas.",
      "Aísla subconjuntos del clúster para comprobar el comportamiento de quórum y reconciliación al operar.",
      "Somete el clúster a cargas sostenidas midiendo latencia y rendimiento al crecer el volumen al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Nemesis fault profiles (Testing distribuido): Programa secuencias automatizadas de particiones, pausas y reinicios durante pruebas distribuidas.",
    "topic": "Testing distribuido",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-27",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Network isolation» en seguridad?",
    "options": [
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad al operar.",
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango.",
      "Restringe el tráfico hacia los nodos de datos mediante redes privadas y listas de control.",
      "Registra quién accedió o modificó datos sensibles y qué cambios administrativos ocurrieron."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Network isolation (Seguridad): Restringe el tráfico hacia los nodos de datos mediante redes privadas y listas de control.",
    "topic": "Seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-28",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Role-based access»?",
    "options": [
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango.",
      "Restringe el tráfico hacia los nodos de datos mediante redes privadas y listas de control.",
      "Registra quién accedió o modificó datos sensibles y qué cambios administrativos ocurrieron.",
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Role-based access (Seguridad): Asigna permisos granulares por colección, espacio de claves u operación a cada identidad.",
    "topic": "Seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-29",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Field-level encryption»?",
    "options": [
      "Cifra atributos sensibles en el cliente antes de enviarlos para que el motor solo vea texto opaco al operar.",
      "Registra quién accedió o modificó datos sensibles y qué cambios administrativos ocurrieron al operar.",
      "Aísla las llaves y permisos de los respaldos respecto a las credenciales de administración al operar.",
      "Prefija la clave de partición con el identificador del cliente para aislar carga y accesos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Field-level encryption (Seguridad): Cifra atributos sensibles en el cliente antes de enviarlos para que el motor solo vea texto opaco.",
    "topic": "Seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-30",
    "collectionId": "nosql",
    "question": "Respecto a seguridad en NoSQL, ¿cuál es el propósito de «Audit trails»?",
    "options": [
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad al operar.",
      "Registra quién accedió o modificó datos sensibles y qué cambios administrativos ocurrieron.",
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango.",
      "Restringe el tráfico hacia los nodos de datos mediante redes privadas y listas de control."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Audit trails (Seguridad): Registra quién accedió o modificó datos sensibles y qué cambios administrativos ocurrieron.",
    "topic": "Seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-31",
    "collectionId": "nosql",
    "question": "En NoSQL (Seguridad), ¿qué función técnica cumple «Backup credential separation»?",
    "options": [
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad al operar.",
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango.",
      "Aísla las llaves y permisos de los respaldos respecto a las credenciales de administración.",
      "Restringe el tráfico hacia los nodos de datos mediante redes privadas y listas de control."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Backup credential separation (Seguridad): Aísla las llaves y permisos de los respaldos respecto a las credenciales de administración.",
    "topic": "Seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-32",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Tenant partition keys» en seguridad?",
    "options": [
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad al operar.",
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango.",
      "Restringe el tráfico hacia los nodos de datos mediante redes privadas y listas de control.",
      "Prefija la clave de partición con el identificador del cliente para aislar carga y accesos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Tenant partition keys (Seguridad): Prefija la clave de partición con el identificador del cliente para aislar carga y accesos.",
    "topic": "Seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-33",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Encrypted-field query limits»?",
    "options": [
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango al operar.",
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad.",
      "Restringe el tráfico hacia los nodos de datos mediante redes privadas y listas de control.",
      "Registra quién accedió o modificó datos sensibles y qué cambios administrativos ocurrieron."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Encrypted-field query limits (Seguridad): Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango.",
    "topic": "Seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-34",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Working set»?",
    "options": [
      "Mide cuántos bytes físicos se escriben realmente en disco por cada byte lógico modificado al operar.",
      "Dimensiona la memoria RAM para alojar los índices y documentos accedidos con mayor frecuencia.",
      "Monitorea la proporción de lecturas servidas desde memoria frente a las que bajan a disco.",
      "Visualiza qué rangos de claves concentran tráfico desproporcionado y saturan un solo nodo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Working set (Rendimiento y capacidad): Dimensiona la memoria RAM para alojar los índices y documentos accedidos con mayor frecuencia.",
    "topic": "Rendimiento y capacidad",
    "difficulty": "intermedio"
  },
  {
    "id": "nosql-q-35",
    "collectionId": "nosql",
    "question": "Respecto a rendimiento y capacidad en NoSQL, ¿cuál es el propósito de «Write amplification»?",
    "options": [
      "Monitorea la proporción de lecturas servidas desde memoria frente a las que bajan a disco.",
      "Visualiza qué rangos de claves concentran tráfico desproporcionado y saturan un solo nodo.",
      "Mide cuántos bytes físicos se escriben realmente en disco por cada byte lógico modificado.",
      "Vigila la acumulación de tablas inmutables pendientes de fusionar que encarece las lecturas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Write amplification (Rendimiento y capacidad): Mide cuántos bytes físicos se escriben realmente en disco por cada byte lógico modificado.",
    "topic": "Rendimiento y capacidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-36",
    "collectionId": "nosql",
    "question": "En NoSQL (Rendimiento y capacidad), ¿qué función técnica cumple «Cache hit ratio»?",
    "options": [
      "Mide cuántos bytes físicos se escriben realmente en disco por cada byte lógico modificado.",
      "Visualiza qué rangos de claves concentran tráfico desproporcionado y saturan un solo nodo.",
      "Vigila la acumulación de tablas inmutables pendientes de fusionar que encarece las lecturas.",
      "Monitorea la proporción de lecturas servidas desde memoria frente a las que bajan a disco."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Cache hit ratio (Rendimiento y capacidad): Monitorea la proporción de lecturas servidas desde memoria frente a las que bajan a disco.",
    "topic": "Rendimiento y capacidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-37",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Shard rebalancing» en rendimiento y capacidad?",
    "options": [
      "Mueve rangos de claves entre nodos para equilibrar almacenamiento y tráfico sin apagar el servicio al operar.",
      "Dimensiona la memoria RAM para alojar los índices y documentos accedidos con mayor frecuencia.",
      "Vigila la acumulación de tablas inmutables pendientes de fusionar que encarece las lecturas al operar.",
      "Mide cuántos bytes físicos se escriben realmente en disco por cada byte lógico modificado al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Shard rebalancing (Rendimiento y capacidad): Mueve rangos de claves entre nodos para equilibrar almacenamiento y tráfico sin apagar el servicio.",
    "topic": "Rendimiento y capacidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-38",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Tail latency»?",
    "options": [
      "Dimensiona la memoria RAM para alojar los índices y documentos accedidos con mayor frecuencia al evaluar.",
      "Controla los percentiles noventa y nueve afectados por compactaciones, pausas o particiones calientes.",
      "Mueve rangos de claves entre nodos para equilibrar almacenamiento y tráfico sin apagar el servicio.",
      "Vigila la acumulación de tablas inmutables pendientes de fusionar que encarece las lecturas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tail latency (Rendimiento y capacidad): Controla los percentiles noventa y nueve afectados por compactaciones, pausas o particiones calientes.",
    "topic": "Rendimiento y capacidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-39",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Hotspot heatmaps»?",
    "options": [
      "Mide cuántos bytes físicos se escriben realmente en disco por cada byte lógico modificado.",
      "Monitorea la proporción de lecturas servidas desde memoria frente a las que bajan a disco.",
      "Visualiza qué rangos de claves concentran tráfico desproporcionado y saturan un solo nodo.",
      "Vigila la acumulación de tablas inmutables pendientes de fusionar que encarece las lecturas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Hotspot heatmaps (Rendimiento y capacidad): Visualiza qué rangos de claves concentran tráfico desproporcionado y saturan un solo nodo.",
    "topic": "Rendimiento y capacidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-40",
    "collectionId": "nosql",
    "question": "Respecto a rendimiento y capacidad en NoSQL, ¿cuál es el propósito de «Compaction debt»?",
    "options": [
      "Mide cuántos bytes físicos se escriben realmente en disco por cada byte lógico modificado al operar.",
      "Monitorea la proporción de lecturas servidas desde memoria frente a las que bajan a disco.",
      "Visualiza qué rangos de claves concentran tráfico desproporcionado y saturan un solo nodo.",
      "Vigila la acumulación de tablas inmutables pendientes de fusionar que encarece las lecturas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Compaction debt (Rendimiento y capacidad): Vigila la acumulación de tablas inmutables pendientes de fusionar que encarece las lecturas.",
    "topic": "Rendimiento y capacidad",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-41",
    "collectionId": "nosql",
    "question": "En NoSQL (Integración de datos), ¿qué función técnica cumple «Change data capture»?",
    "options": [
      "Publica un flujo ordenado de inserciones, actualizaciones y borrados ocurridos en las tablas al operar.",
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio al operar.",
      "Integra el flujo de cambios con colas de eventos, almacenes analíticos o motores de búsqueda.",
      "Mantiene proyecciones precalculadas con otra clave de acceso actualizadas de forma asíncrona."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Change data capture (Integración de datos): Publica un flujo ordenado de inserciones, actualizaciones y borrados ocurridos en las tablas.",
    "topic": "Integración de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-42",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Connectors» en integración de datos?",
    "options": [
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio al operar.",
      "Integra el flujo de cambios con colas de eventos, almacenes analíticos o motores de búsqueda.",
      "Publica un flujo ordenado de inserciones, actualizaciones y borrados ocurridos en las tablas.",
      "Mantiene proyecciones precalculadas con otra clave de acceso actualizadas de forma asíncrona."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Connectors (Integración de datos): Integra el flujo de cambios con colas de eventos, almacenes analíticos o motores de búsqueda.",
    "topic": "Integración de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-43",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Materialized views»?",
    "options": [
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio al operar.",
      "Publica un flujo ordenado de inserciones, actualizaciones y borrados ocurridos en las tablas.",
      "Mantiene proyecciones precalculadas con otra clave de acceso actualizadas de forma asíncrona.",
      "Integra el flujo de cambios con colas de eventos, almacenes analíticos o motores de búsqueda."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Materialized views (Integración de datos): Mantiene proyecciones precalculadas con otra clave de acceso actualizadas de forma asíncrona.",
    "topic": "Integración de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-44",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Search synchronization»?",
    "options": [
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio al operar.",
      "Publica un flujo ordenado de inserciones, actualizaciones y borrados ocurridos en las tablas.",
      "Integra el flujo de cambios con colas de eventos, almacenes analíticos o motores de búsqueda.",
      "Indexa documentos en un motor de texto completo manteniendo consistencia eventual controlada."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Search synchronization (Integración de datos): Indexa documentos en un motor de texto completo manteniendo consistencia eventual controlada.",
    "topic": "Integración de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-45",
    "collectionId": "nosql",
    "question": "Respecto a integración de datos en NoSQL, ¿cuál es el propósito de «Polyglot persistence»?",
    "options": [
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio al operar.",
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad.",
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango.",
      "Reconcilia las réplicas discrepantes antes de devolver la respuesta de lectura al cliente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Polyglot persistence (Integración de datos): Combina distintos motores especializados según el patrón de acceso de cada subdominio.",
    "topic": "Integración de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-46",
    "collectionId": "nosql",
    "question": "En NoSQL (Integración de datos), ¿qué función técnica cumple «Change-data-capture ordering»?",
    "options": [
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio en el flujo.",
      "Preserva el orden causal de eventos por clave de documento al transmitirlos hacia consumidores.",
      "Publica un flujo ordenado de inserciones, actualizaciones y borrados ocurridos en las tablas.",
      "Integra el flujo de cambios con colas de eventos, almacenes analíticos o motores de búsqueda."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Change-data-capture ordering (Integración de datos): Preserva el orden causal de eventos por clave de documento al transmitirlos hacia consumidores.",
    "topic": "Integración de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-47",
    "collectionId": "nosql",
    "question": "Dentro de NoSQL, ¿cómo opera el mecanismo de «Connector offset recovery» en integración de datos?",
    "options": [
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio al operar.",
      "Publica un flujo ordenado de inserciones, actualizaciones y borrados ocurridos en las tablas.",
      "Almacena la posición confirmada del flujo para reanudar la sincronización sin perder cambios.",
      "Integra el flujo de cambios con colas de eventos, almacenes analíticos o motores de búsqueda."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Connector offset recovery (Integración de datos): Almacena la posición confirmada del flujo para reanudar la sincronización sin perder cambios.",
    "topic": "Integración de datos",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-48",
    "collectionId": "nosql",
    "question": "Al trabajar con NoSQL, ¿qué responsabilidad define a «Rolling maintenance»?",
    "options": [
      "Combina distintos motores especializados según el patrón de acceso de cada subdominio al operar.",
      "Asigna permisos granulares por colección, espacio de claves u operación a cada identidad.",
      "Considera que los campos cifrados con esquemas aleatorios no admiten búsquedas por rango.",
      "Actualiza o reinicia un nodo a la vez verificando que el quórum se recupere antes de avanzar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Rolling maintenance (Operación y recuperación): Actualiza o reinicia un nodo a la vez verificando que el quórum se recupere antes de avanzar.",
    "topic": "Operación y recuperación",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-49",
    "collectionId": "nosql",
    "question": "En la arquitectura de NoSQL, ¿qué caracteriza técnicamente a «Cross-region replication»?",
    "options": [
      "Replica datos de forma asíncrona entre centros de datos distantes para tolerar caídas regionales.",
      "Actualiza o reinicia un nodo a la vez verificando que el quórum se recupere antes de avanzar.",
      "Coordina respaldos verificados y procedimientos de conmutación ante pérdida total de una región.",
      "Corrige réplicas desactualizadas en segundo plano cuando una lectura detecta discrepancias."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cross-region replication (Operación y recuperación): Replica datos de forma asíncrona entre centros de datos distantes para tolerar caídas regionales.",
    "topic": "Operación y recuperación",
    "difficulty": "avanzado"
  },
  {
    "id": "nosql-q-50",
    "collectionId": "nosql",
    "question": "Respecto a operación y recuperación en NoSQL, ¿cuál es el propósito de «Disaster recovery»?",
    "options": [
      "Actualiza o reinicia un nodo a la vez verificando que el quórum se recupere antes de avanzar al operar.",
      "Coordina respaldos verificados y procedimientos de conmutación ante pérdida total de una región.",
      "Replica datos de forma asíncrona entre centros de datos distantes para tolerar caídas regionales.",
      "Reconcilia las réplicas discrepantes antes de devolver la respuesta de lectura al cliente al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Disaster recovery (Operación y recuperación): Coordina respaldos verificados y procedimientos de conmutación ante pérdida total de una región.",
    "topic": "Operación y recuperación",
    "difficulty": "avanzado"
  }
];
