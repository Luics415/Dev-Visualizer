import type { QuizQuestion } from "@/data/quizTypes";

export const blockchainQuestions: QuizQuestion[] = [
  {
    "id": "blockchain-q-01",
    "collectionId": "blockchain",
    "question": "En Blockchain (Máquinas virtuales y contratos), ¿qué función técnica cumple «Storage layout»?",
    "options": [
      "Organiza variables de estado en ranuras de treinta y dos bytes empaquetando campos contiguos.",
      "Delega llamadas desde un contrato proxy fijo hacia una implementación lógica reemplazable.",
      "Define la codificación binaria de selectores de función, parámetros y eventos para clientes.",
      "Reserva ranuras y evita reordenar variables heredadas para no corromper estado al actualizar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Storage layout (Máquinas virtuales y contratos): Organiza variables de estado en ranuras de treinta y dos bytes empaquetando campos contiguos.",
    "topic": "Máquinas virtuales y contratos",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-02",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «ABI de contrato» en máquinas virtuales y contratos?",
    "options": [
      "Delega llamadas desde un contrato proxy fijo hacia una implementación lógica reemplazable al operar.",
      "Define la codificación binaria de selectores de función, parámetros y eventos para clientes.",
      "Organiza variables de estado en ranuras de treinta y dos bytes empaquetando campos contiguos.",
      "Reserva ranuras y evita reordenar variables heredadas para no corromper estado al actualizar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "ABI de contrato (Máquinas virtuales y contratos): Define la codificación binaria de selectores de función, parámetros y eventos para clientes.",
    "topic": "Máquinas virtuales y contratos",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-03",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Eventos y logs»?",
    "options": [
      "Define la codificación binaria de selectores de función, parámetros y eventos para clientes al operar.",
      "Delega llamadas desde un contrato proxy fijo hacia una implementación lógica reemplazable al operar.",
      "Emite registros indexados económicos en la transacción para que servicios externos los consulten.",
      "Organiza variables de estado en ranuras de treinta y dos bytes empaquetando campos contiguos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Eventos y logs (Máquinas virtuales y contratos): Emite registros indexados económicos en la transacción para que servicios externos los consulten.",
    "topic": "Máquinas virtuales y contratos",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-04",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Upgradability patterns»?",
    "options": [
      "Define la codificación binaria de selectores de función, parámetros y eventos para clientes.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red.",
      "Delega llamadas desde un contrato proxy fijo hacia una implementación lógica reemplazable."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Upgradability patterns (Máquinas virtuales y contratos): Delega llamadas desde un contrato proxy fijo hacia una implementación lógica reemplazable.",
    "topic": "Máquinas virtuales y contratos",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-05",
    "collectionId": "blockchain",
    "question": "Respecto a máquinas virtuales y contratos en Blockchain, ¿cuál es el propósito de «Deterministic gas metering»?",
    "options": [
      "Cobra un costo fijo por cada instrucción y byte almacenado para acotar cómputos y garantizar consenso.",
      "Emite registros indexados económicos en la transacción para que servicios externos los consulten.",
      "Organiza variables de estado en ranuras de treinta y dos bytes empaquetando campos contiguos al operar.",
      "Reserva ranuras y evita reordenar variables heredadas para no corromper estado al actualizar al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Deterministic gas metering (Máquinas virtuales y contratos): Cobra un costo fijo por cada instrucción y byte almacenado para acotar cómputos y garantizar consenso.",
    "topic": "Máquinas virtuales y contratos",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-06",
    "collectionId": "blockchain",
    "question": "En Blockchain (Máquinas virtuales y contratos), ¿qué función técnica cumple «Upgradeable storage layouts»?",
    "options": [
      "Delega llamadas desde un contrato proxy fijo hacia una implementación lógica reemplazable al operar.",
      "Reserva ranuras y evita reordenar variables heredadas para no corromper estado al actualizar.",
      "Define la codificación binaria de selectores de función, parámetros y eventos para clientes.",
      "Organiza variables de estado en ranuras de treinta y dos bytes empaquetando campos contiguos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Upgradeable storage layouts (Máquinas virtuales y contratos): Reserva ranuras y evita reordenar variables heredadas para no corromper estado al actualizar.",
    "topic": "Máquinas virtuales y contratos",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-07",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «Reentrancy» en seguridad de contratos inteligentes?",
    "options": [
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico al operar.",
      "Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos.",
      "Ocurre cuando una llamada externa vuelve a invocar al contrato antes de que actualice su saldo.",
      "Cuida pérdidas por división entera y ordena multiplicaciones antes de dividir con punto fijo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reentrancy (Seguridad de contratos inteligentes): Ocurre cuando una llamada externa vuelve a invocar al contrato antes de que actualice su saldo.",
    "topic": "Seguridad de contratos inteligentes",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-08",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Integer y precision errors»?",
    "options": [
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico al operar.",
      "Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos.",
      "Expone funciones administrativas críticas por olvidar modificadores de rol o inicializar mal.",
      "Cuida pérdidas por división entera y ordena multiplicaciones antes de dividir con punto fijo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Integer y precision errors (Seguridad de contratos inteligentes): Cuida pérdidas por división entera y ordena multiplicaciones antes de dividir con punto fijo.",
    "topic": "Seguridad de contratos inteligentes",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-09",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Access control defects»?",
    "options": [
      "Expone funciones administrativas críticas por olvidar modificadores de rol o inicializar mal.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico.",
      "Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos.",
      "Cuida pérdidas por división entera y ordena multiplicaciones antes de dividir con punto fijo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Access control defects (Seguridad de contratos inteligentes): Expone funciones administrativas críticas por olvidar modificadores de rol o inicializar mal.",
    "topic": "Seguridad de contratos inteligentes",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-10",
    "collectionId": "blockchain",
    "question": "Respecto a seguridad de contratos inteligentes en Blockchain, ¿cuál es el propósito de «Front-running y MEV»?",
    "options": [
      "Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Front-running y MEV (Seguridad de contratos inteligentes): Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico.",
    "topic": "Seguridad de contratos inteligentes",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-11",
    "collectionId": "blockchain",
    "question": "En Blockchain (Seguridad de contratos inteligentes), ¿qué función técnica cumple «Formal verification»?",
    "options": [
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico al operar.",
      "Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos.",
      "Demuestra matemáticamente que el código compilado cumple invariantes para toda entrada posible.",
      "Cuida pérdidas por división entera y ordena multiplicaciones antes de dividir con punto fijo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Formal verification (Seguridad de contratos inteligentes): Demuestra matemáticamente que el código compilado cumple invariantes para toda entrada posible.",
    "topic": "Seguridad de contratos inteligentes",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-12",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «Access-control invariants» en seguridad de contratos inteligentes?",
    "options": [
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico al operar.",
      "Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos al operar.",
      "Cuida pérdidas por división entera y ordena multiplicaciones antes de dividir con punto fijo.",
      "Verifica que ninguna ruta de ejecución permita alterar propietarios o permisos sin autorización."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Access-control invariants (Seguridad de contratos inteligentes): Verifica que ninguna ruta de ejecución permita alterar propietarios o permisos sin autorización.",
    "topic": "Seguridad de contratos inteligentes",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-13",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Integer precision boundaries»?",
    "options": [
      "Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos al operar.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico.",
      "Cuida pérdidas por división entera y ordena multiplicaciones antes de dividir con punto fijo.",
      "Expone funciones administrativas críticas por olvidar modificadores de rol o inicializar mal."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Integer precision boundaries (Seguridad de contratos inteligentes): Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos.",
    "topic": "Seguridad de contratos inteligentes",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-14",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Pseudonimato»?",
    "options": [
      "Permite fijar criptográficamente un valor oculto hoy y revelarlo después sin poder cambiarlo al operar.",
      "Asocia transacciones a direcciones públicas derivadas de llaves que pueden vincularse por análisis.",
      "Demuestra la validez de un cómputo o secreto sin revelar ninguno de los datos subyacentes al operar.",
      "Presenta únicamente los atributos verificables necesarios de una credencial sin exponer el resto."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pseudonimato (Privacidad): Asocia transacciones a direcciones públicas derivadas de llaves que pueden vincularse por análisis.",
    "topic": "Privacidad",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-15",
    "collectionId": "blockchain",
    "question": "Respecto a privacidad en Blockchain, ¿cuál es el propósito de «Coin mixing»?",
    "options": [
      "Permite fijar criptográficamente un valor oculto hoy y revelarlo después sin poder cambiarlo al operar.",
      "Presenta únicamente los atributos verificables necesarios de una credencial sin exponer el resto.",
      "Rompe el rastro directo entre entradas y salidas aunque enfrenta límites de liquidez y cumplimiento.",
      "Demuestra la validez de un cómputo o secreto sin revelar ninguno de los datos subyacentes al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Coin mixing y límites (Privacidad): Rompe el rastro directo entre entradas y salidas aunque enfrenta límites de liquidez y cumplimiento.",
    "topic": "Privacidad",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-16",
    "collectionId": "blockchain",
    "question": "En Blockchain (Privacidad), ¿qué función técnica cumple «Zero-knowledge proofs»?",
    "options": [
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada al operar.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico.",
      "Demuestra la validez de un cómputo o secreto sin revelar ninguno de los datos subyacentes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Zero-knowledge proofs (Privacidad): Demuestra la validez de un cómputo o secreto sin revelar ninguno de los datos subyacentes.",
    "topic": "Privacidad",
    "difficulty": "básico"
  },
  {
    "id": "blockchain-q-17",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «Commitment schemes» en privacidad?",
    "options": [
      "Permite fijar criptográficamente un valor oculto hoy y revelarlo después sin poder cambiarlo al operar.",
      "Demuestra la validez de un cómputo o secreto sin revelar ninguno de los datos subyacentes.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Commitment schemes (Privacidad): Permite fijar criptográficamente un valor oculto hoy y revelarlo después sin poder cambiarlo.",
    "topic": "Privacidad",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-18",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Selective disclosure»?",
    "options": [
      "Demuestra la validez de un cómputo o secreto sin revelar ninguno de los datos subyacentes al operar.",
      "Presenta únicamente los atributos verificables necesarios de una credencial sin exponer el resto.",
      "Permite fijar criptográficamente un valor oculto hoy y revelarlo después sin poder cambiarlo.",
      "Filtra identidad a través de direcciones IP, tiempos de envío y patrones de gasto aun con cifrado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Selective disclosure (Privacidad): Presenta únicamente los atributos verificables necesarios de una credencial sin exponer el resto.",
    "topic": "Privacidad",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-19",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Metadata leakage»?",
    "options": [
      "Permite fijar criptográficamente un valor oculto hoy y revelarlo después sin poder cambiarlo al operar.",
      "Demuestra la validez de un cómputo o secreto sin revelar ninguno de los datos subyacentes al operar.",
      "Filtra identidad a través de direcciones IP, tiempos de envío y patrones de gasto aun con cifrado.",
      "Presenta únicamente los atributos verificables necesarios de una credencial sin exponer el resto."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Metadata leakage (Privacidad): Filtra identidad a través de direcciones IP, tiempos de envío y patrones de gasto aun con cifrado.",
    "topic": "Privacidad",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-20",
    "collectionId": "blockchain",
    "question": "Respecto a escalamiento en Blockchain, ¿cuál es el propósito de «Payment channels»?",
    "options": [
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red al operar.",
      "Permite impugnar una transición de estado incorrecta reejecutando el paso en la capa base.",
      "Ejecuta lotes fuera de la capa base y publica una prueba criptográfica de validez verificable.",
      "Intercambia múltiples pagos firmados fuera de la cadena y liquida solo el balance neto final."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Payment channels (Escalamiento): Intercambia múltiples pagos firmados fuera de la cadena y liquida solo el balance neto final.",
    "topic": "Escalamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-21",
    "collectionId": "blockchain",
    "question": "En Blockchain (Escalamiento), ¿qué función técnica cumple «Optimistic rollups»?",
    "options": [
      "Publica lotes comprimidos asumiendo su validez y abre una ventana para presentar pruebas de fraude.",
      "Intercambia múltiples pagos firmados fuera de la cadena y liquida solo el balance neto final.",
      "Ejecuta lotes fuera de la capa base y publica una prueba criptográfica de validez verificable.",
      "Permite a nodos ligeros comprobar que un bloque completo está disponible muestreando fragmentos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Optimistic rollups (Escalamiento): Publica lotes comprimidos asumiendo su validez y abre una ventana para presentar pruebas de fraude.",
    "topic": "Escalamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-22",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «ZK rollups» en escalamiento?",
    "options": [
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red al operar.",
      "Ejecuta lotes fuera de la capa base y publica una prueba criptográfica de validez verificable.",
      "Permite impugnar una transición de estado incorrecta reejecutando el paso en la capa base.",
      "Intercambia múltiples pagos firmados fuera de la cadena y liquida solo el balance neto final."
    ],
    "correctAnswerIndex": 1,
    "explanation": "ZK rollups (Escalamiento): Ejecuta lotes fuera de la capa base y publica una prueba criptográfica de validez verificable.",
    "topic": "Escalamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-23",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Data availability»?",
    "options": [
      "Publica lotes comprimidos asumiendo su validez y abre una ventana para presentar pruebas de fraude al operar.",
      "Permite a nodos ligeros comprobar que un bloque completo está disponible muestreando fragmentos al operar.",
      "Garantiza que los datos de las transacciones estén publicados para que cualquiera reconstruya el estado.",
      "Ejecuta lotes fuera de la capa base y publica una prueba criptográfica de validez verificable al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Data availability (Escalamiento): Garantiza que los datos de las transacciones estén publicados para que cualquiera reconstruya el estado.",
    "topic": "Escalamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-24",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Bridges entre redes»?",
    "options": [
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada al operar.",
      "Permite impugnar una transición de estado incorrecta reejecutando el paso en la capa base.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Bridges entre redes (Escalamiento): Bloquea o quema activos en una cadena y emite su representación verificada en otra red.",
    "topic": "Escalamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-25",
    "collectionId": "blockchain",
    "question": "Respecto a escalamiento en Blockchain, ¿cuál es el propósito de «Data-availability sampling»?",
    "options": [
      "Permite a nodos ligeros comprobar que un bloque completo está disponible muestreando fragmentos.",
      "Permite impugnar una transición de estado incorrecta reejecutando el paso en la capa base.",
      "Intercambia múltiples pagos firmados fuera de la cadena y liquida solo el balance neto final.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Data-availability sampling (Escalamiento): Permite a nodos ligeros comprobar que un bloque completo está disponible muestreando fragmentos.",
    "topic": "Escalamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-26",
    "collectionId": "blockchain",
    "question": "En Blockchain (Escalamiento), ¿qué función técnica cumple «Sequencer fault proofs»?",
    "options": [
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red al operar.",
      "Permite impugnar una transición de estado incorrecta reejecutando el paso en la capa base.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sequencer fault proofs (Escalamiento): Permite impugnar una transición de estado incorrecta reejecutando el paso en la capa base.",
    "topic": "Escalamiento",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-27",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «Token issuance» en economía del protocolo?",
    "options": [
      "Evalúa pérdida impermanente, deslizamiento de precios y descalces en fondos automatizados al operar.",
      "Ajusta dinámicamente la tarifa base según la congestión de los bloques y prioriza propinas.",
      "Controla la creación programática de nuevas unidades y su curva de inflación en el protocolo.",
      "Explota préstamos instantáneos y manipulación de oráculos para vaciar reservas en un bloque."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Token issuance (Economía del protocolo): Controla la creación programática de nuevas unidades y su curva de inflación en el protocolo.",
    "topic": "Economía del protocolo",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-28",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Fee markets»?",
    "options": [
      "Evalúa pérdida impermanente, deslizamiento de precios y descalces en fondos automatizados al operar.",
      "Explota préstamos instantáneos y manipulación de oráculos para vaciar reservas en un bloque.",
      "Controla la creación programática de nuevas unidades y su curva de inflación en el protocolo.",
      "Ajusta dinámicamente la tarifa base según la congestión de los bloques y prioriza propinas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Fee markets (Economía del protocolo): Ajusta dinámicamente la tarifa base según la congestión de los bloques y prioriza propinas.",
    "topic": "Economía del protocolo",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-29",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Staking incentives»?",
    "options": [
      "Recompensa a los validadores honestos y confisca parte de su depósito si firman bloques dobles.",
      "Evalúa pérdida impermanente, deslizamiento de precios y descalces en fondos automatizados.",
      "Ajusta dinámicamente la tarifa base según la congestión de los bloques y prioriza propinas.",
      "Explota préstamos instantáneos y manipulación de oráculos para vaciar reservas en un bloque."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Staking incentives (Economía del protocolo): Recompensa a los validadores honestos y confisca parte de su depósito si firman bloques dobles.",
    "topic": "Economía del protocolo",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-30",
    "collectionId": "blockchain",
    "question": "Respecto a economía del protocolo en Blockchain, ¿cuál es el propósito de «Liquidity y riesgos»?",
    "options": [
      "Ajusta dinámicamente la tarifa base según la congestión de los bloques y prioriza propinas.",
      "Evalúa pérdida impermanente, deslizamiento de precios y descalces en fondos automatizados.",
      "Explota préstamos instantáneos y manipulación de oráculos para vaciar reservas en un bloque.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Liquidity y riesgos (Economía del protocolo): Evalúa pérdida impermanente, deslizamiento de precios y descalces en fondos automatizados.",
    "topic": "Economía del protocolo",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-31",
    "collectionId": "blockchain",
    "question": "En Blockchain (Economía del protocolo), ¿qué función técnica cumple «Ataques económicos»?",
    "options": [
      "Evalúa pérdida impermanente, deslizamiento de precios y descalces en fondos automatizados al operar.",
      "Ajusta dinámicamente la tarifa base según la congestión de los bloques y prioriza propinas.",
      "Explota préstamos instantáneos y manipulación de oráculos para vaciar reservas en un bloque.",
      "Controla la creación programática de nuevas unidades y su curva de inflación en el protocolo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Ataques económicos (Economía del protocolo): Explota préstamos instantáneos y manipulación de oráculos para vaciar reservas en un bloque.",
    "topic": "Economía del protocolo",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-32",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «MEV auction design» en economía del protocolo?",
    "options": [
      "Evalúa pérdida impermanente, deslizamiento de precios y descalces en fondos automatizados al operar.",
      "Ajusta dinámicamente la tarifa base según la congestión de los bloques y prioriza propinas.",
      "Explota préstamos instantáneos y manipulación de oráculos para vaciar reservas en un bloque.",
      "Separa la construcción y la propuesta de bloques para subastar de forma transparente el orden."
    ],
    "correctAnswerIndex": 3,
    "explanation": "MEV auction design (Economía del protocolo): Separa la construcción y la propuesta de bloques para subastar de forma transparente el orden.",
    "topic": "Economía del protocolo",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-33",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Governance capture resistance»?",
    "options": [
      "Introduce bloqueos temporales, quórums y vetos para impedir que un préstamo vote y robe tesorería al operar.",
      "Explota préstamos instantáneos y manipulación de oráculos para vaciar reservas en un bloque.",
      "Controla la creación programática de nuevas unidades y su curva de inflación en el protocolo.",
      "Ajusta dinámicamente la tarifa base según la congestión de los bloques y prioriza propinas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Governance capture resistance (Economía del protocolo): Introduce bloqueos temporales, quórums y vetos para impedir que un préstamo vote y robe tesorería.",
    "topic": "Economía del protocolo",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-34",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Red local determinista»?",
    "options": [
      "Ejecuta campañas largas de transacciones encadenadas verificando invariantes tras cada paso al operar.",
      "Ejecuta un nodo en memoria con minado instantáneo y cuentas prefinanciadas para pruebas rápidas.",
      "Comprueba que reglas como la conservación de saldos se mantengan tras secuencias de llamadas.",
      "Inyecta montos, direcciones y órdenes aleatorios para descubrir reversiones o estados inválidos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Red local determinista (Testing y desarrollo): Ejecuta un nodo en memoria con minado instantáneo y cuentas prefinanciadas para pruebas rápidas.",
    "topic": "Testing y desarrollo",
    "difficulty": "intermedio"
  },
  {
    "id": "blockchain-q-35",
    "collectionId": "blockchain",
    "question": "Respecto a testing y desarrollo en Blockchain, ¿cuál es el propósito de «Fork testing»?",
    "options": [
      "Comprueba que reglas como la conservación de saldos se mantengan tras secuencias de llamadas al operar.",
      "Ejecuta campañas largas de transacciones encadenadas verificando invariantes tras cada paso al operar.",
      "Clona el estado real de la red principal en un bloque fijo para probar interacciones con contratos.",
      "Ejecuta un nodo en memoria con minado instantáneo y cuentas prefinanciadas para pruebas rápidas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fork testing (Testing y desarrollo): Clona el estado real de la red principal en un bloque fijo para probar interacciones con contratos.",
    "topic": "Testing y desarrollo",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-36",
    "collectionId": "blockchain",
    "question": "En Blockchain (Testing y desarrollo), ¿qué función técnica cumple «Property tests de invariantes»?",
    "options": [
      "Ejecuta campañas largas de transacciones encadenadas verificando invariantes tras cada paso al operar.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red al operar.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada al operar.",
      "Comprueba que reglas como la conservación de saldos se mantengan tras secuencias de llamadas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Property tests de invariantes (Testing y desarrollo): Comprueba que reglas como la conservación de saldos se mantengan tras secuencias de llamadas.",
    "topic": "Testing y desarrollo",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-37",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «Fuzzing de contratos» en testing y desarrollo?",
    "options": [
      "Inyecta montos, direcciones y órdenes aleatorios para descubrir reversiones o estados inválidos.",
      "Ejecuta campañas largas de transacciones encadenadas verificando invariantes tras cada paso.",
      "Comprueba que reglas como la conservación de saldos se mantengan tras secuencias de llamadas.",
      "Ejecuta un nodo en memoria con minado instantáneo y cuentas prefinanciadas para pruebas rápidas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fuzzing de contratos (Testing y desarrollo): Inyecta montos, direcciones y órdenes aleatorios para descubrir reversiones o estados inválidos.",
    "topic": "Testing y desarrollo",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-38",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Simulación de reorgs»?",
    "options": [
      "Ejecuta campañas largas de transacciones encadenadas verificando invariantes tras cada paso al operar.",
      "Reemplaza los últimos bloques en pruebas para verificar que indexadores y clientes se recuperen.",
      "Comprueba que reglas como la conservación de saldos se mantengan tras secuencias de llamadas.",
      "Ejecuta un nodo en memoria con minado instantáneo y cuentas prefinanciadas para pruebas rápidas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Simulación de reorgs (Testing y desarrollo): Reemplaza los últimos bloques en pruebas para verificar que indexadores y clientes se recuperen.",
    "topic": "Testing y desarrollo",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-39",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Fork simulation»?",
    "options": [
      "Comprueba que reglas como la conservación de saldos se mantengan tras secuencias de llamadas al operar.",
      "Ejecuta un nodo en memoria con minado instantáneo y cuentas prefinanciadas para pruebas rápidas.",
      "Simula actualizaciones completas de gobernanza sobre el estado clonado antes de ejecutarlas en vivo.",
      "Inyecta montos, direcciones y órdenes aleatorios para descubrir reversiones o estados inválidos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fork simulation (Testing y desarrollo): Simula actualizaciones completas de gobernanza sobre el estado clonado antes de ejecutarlas en vivo.",
    "topic": "Testing y desarrollo",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-40",
    "collectionId": "blockchain",
    "question": "Respecto a testing y desarrollo en Blockchain, ¿cuál es el propósito de «Stateful invariant fuzzing»?",
    "options": [
      "Comprueba que reglas como la conservación de saldos se mantengan tras secuencias de llamadas.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada al operar.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red al operar.",
      "Ejecuta campañas largas de transacciones encadenadas verificando invariantes tras cada paso."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Stateful invariant fuzzing (Testing y desarrollo): Ejecuta campañas largas de transacciones encadenadas verificando invariantes tras cada paso.",
    "topic": "Testing y desarrollo",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-41",
    "collectionId": "blockchain",
    "question": "En Blockchain (Datos e interoperabilidad), ¿qué función técnica cumple «RPC de nodo»?",
    "options": [
      "Expone métodos JSON para consultar saldos, simular llamadas, leer bloques y transmitir firmas al operar.",
      "Vincula identificadores controlados por el usuario con credenciales firmadas por emisores.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada al operar.",
      "Transmite cargas arbitrarias e instrucciones verificadas entre contratos de distintas cadenas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "RPC de nodo (Datos e interoperabilidad): Expone métodos JSON para consultar saldos, simular llamadas, leer bloques y transmitir firmas.",
    "topic": "Datos e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-42",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «Event indexing» en datos e interoperabilidad?",
    "options": [
      "Vincula identificadores controlados por el usuario con credenciales firmadas por emisores al operar.",
      "Transforma registros crudos emitidos por contratos en tablas relacionales listas para consultar.",
      "Expone métodos JSON para consultar saldos, simular llamadas, leer bloques y transmitir firmas.",
      "Transmite cargas arbitrarias e instrucciones verificadas entre contratos de distintas cadenas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Event indexing (Datos e interoperabilidad): Transforma registros crudos emitidos por contratos en tablas relacionales listas para consultar.",
    "topic": "Datos e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-43",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Oracles descentralizados»?",
    "options": [
      "Expone métodos JSON para consultar saldos, simular llamadas, leer bloques y transmitir firmas al operar.",
      "Transmite cargas arbitrarias e instrucciones verificadas entre contratos de distintas cadenas al operar.",
      "Agrega reportes firmados de múltiples fuentes independientes para proveer precios externos seguros.",
      "Transforma registros crudos emitidos por contratos en tablas relacionales listas para consultar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Oracles descentralizados (Datos e interoperabilidad): Agrega reportes firmados de múltiples fuentes independientes para proveer precios externos seguros.",
    "topic": "Datos e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-44",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Cross-chain messaging»?",
    "options": [
      "Vincula identificadores controlados por el usuario con credenciales firmadas por emisores al operar.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada al operar.",
      "Expone métodos JSON para consultar saldos, simular llamadas, leer bloques y transmitir firmas.",
      "Transmite cargas arbitrarias e instrucciones verificadas entre contratos de distintas cadenas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Cross-chain messaging (Datos e interoperabilidad): Transmite cargas arbitrarias e instrucciones verificadas entre contratos de distintas cadenas.",
    "topic": "Datos e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-45",
    "collectionId": "blockchain",
    "question": "Respecto a datos e interoperabilidad en Blockchain, ¿cuál es el propósito de «Identidad descentralizada»?",
    "options": [
      "Vincula identificadores controlados por el usuario con credenciales firmadas por emisores.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Identidad descentralizada (Datos e interoperabilidad): Vincula identificadores controlados por el usuario con credenciales firmadas por emisores.",
    "topic": "Datos e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-46",
    "collectionId": "blockchain",
    "question": "En Blockchain (Datos e interoperabilidad), ¿qué función técnica cumple «Chain-reorganization indexing»?",
    "options": [
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada.",
      "Vincula identificadores controlados por el usuario con credenciales firmadas por emisores.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Chain-reorganization indexing (Datos e interoperabilidad): Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada.",
    "topic": "Datos e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-47",
    "collectionId": "blockchain",
    "question": "Dentro de Blockchain, ¿cómo opera el mecanismo de «Bridge light-client validation» en datos e interoperabilidad?",
    "options": [
      "Expone métodos JSON para consultar saldos, simular llamadas, leer bloques y transmitir firmas al operar.",
      "Transmite cargas arbitrarias e instrucciones verificadas entre contratos de distintas cadenas al operar.",
      "Verifica cabeceras de consenso y pruebas de inclusión de la red origen dentro del contrato destino.",
      "Transforma registros crudos emitidos por contratos en tablas relacionales listas para consultar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bridge light-client validation (Datos e interoperabilidad): Verifica cabeceras de consenso y pruebas de inclusión de la red origen dentro del contrato destino.",
    "topic": "Datos e interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-48",
    "collectionId": "blockchain",
    "question": "Al trabajar con Blockchain, ¿qué responsabilidad define a «Node synchronization»?",
    "options": [
      "Elige entre descartar estados históricos antiguos para ahorrar disco o conservar cada bloque al operar.",
      "Aísla llaves de firma en módulos remotos con protección contra doble firma y alta disponibilidad.",
      "Delega llamadas desde un contrato proxy fijo hacia una implementación lógica reemplazable al operar.",
      "Descarga cabeceras, instantáneas de estado y bloques recientes para alcanzar la punta de la red."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Node synchronization (Operación y gobierno): Descarga cabeceras, instantáneas de estado y bloques recientes para alcanzar la punta de la red.",
    "topic": "Operación y gobierno",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-49",
    "collectionId": "blockchain",
    "question": "En la arquitectura de Blockchain, ¿qué caracteriza técnicamente a «Pruning y archive nodes»?",
    "options": [
      "Elige entre descartar estados históricos antiguos para ahorrar disco o conservar cada bloque al operar.",
      "Bloquea o quema activos en una cadena y emite su representación verificada en otra red.",
      "Revierte eventos de bloques huérfanos y reaplica la rama canónica en la base indexada al operar.",
      "Adelanta o reordena transacciones pendientes en el mempool para capturar valor económico."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pruning y archive nodes (Operación y gobierno): Elige entre descartar estados históricos antiguos para ahorrar disco o conservar cada bloque.",
    "topic": "Operación y gobierno",
    "difficulty": "avanzado"
  },
  {
    "id": "blockchain-q-50",
    "collectionId": "blockchain",
    "question": "Respecto a operación y gobierno en Blockchain, ¿cuál es el propósito de «Gestión segura de validadores»?",
    "options": [
      "Elige entre descartar estados históricos antiguos para ahorrar disco o conservar cada bloque al operar.",
      "Aísla llaves de firma en módulos remotos con protección contra doble firma y alta disponibilidad.",
      "Descarga cabeceras, instantáneas de estado y bloques recientes para alcanzar la punta de la red.",
      "Valida que las conversiones entre distintas escalas decimales no trunquen ni inflen saldos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Gestión segura de validadores (Operación y gobierno): Aísla llaves de firma en módulos remotos con protección contra doble firma y alta disponibilidad.",
    "topic": "Operación y gobierno",
    "difficulty": "avanzado"
  }
];
