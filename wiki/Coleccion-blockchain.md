# 📘 [Chain] Blockchain

> **Criptografía, bloques, consenso, transacciones, contratos y operación.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `blockchain` |
| **Grupo Arquitectónico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `git` |
| **Total de Conceptos** | **109 conceptos** |
| **Capítulos / Secciones** | **17 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/blockchain)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/blockchain-en-accion)**


## 🔬 Caso Práctico en Acción: Seguir una transferencia hasta finalidad

> **Caso integrado de Blockchain:** Una transferencia firmada cruza mempool, bloque y confirmaciones; un reorg retira su bloque y el sistema recupera estado antes de declararla final.  
> La interfaz distingue enviada, incluida, reorganizada y finalizada sin prometer irreversibilidad prematura.

### Fases de Ejecución:
1. **Firmar transacción** (Seguir una transferencia hasta finalidad: etapa 1 de 5): `tx.sign(privateKey)` → Transacción identificada. *La etapa conserva un contrato explícito para que el siguiente paso de Blockchain no dependa de supuestos ocultos.*
2. **Validar e incluir** (Seguir una transferencia hasta finalidad: etapa 2 de 5): `validate(tx); block.add(tx)` → Estado tentativo. *La etapa conserva un contrato explícito para que el siguiente paso de Blockchain no dependa de supuestos ocultos.*
3. **Observar reorg** (Seguir una transferencia hasta finalidad: etapa 3 de 5): `head = competingChain.tip` → Transferencia vuelve a pendiente. *El caso hace visible el fallo de Blockchain; no continúa como si la evidencia fuera válida.*
4. **Reaplicar estado** (Seguir una transferencia hasta finalidad: etapa 4 de 5): `rollback(orphaned); replay(canonical)` → Consistencia recuperada. *La recuperación de Blockchain corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Esperar finalidad** (Seguir una transferencia hasta finalidad: etapa 5 de 5): `await finalizedCheckpoint` → Resultado verificable. *La etapa conserva un contrato explícito para que el siguiente paso de Blockchain no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (109)

### 📑 Sección: Fundamentos criptográficos (5 conceptos)

- **Hash**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Hash recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Firmas digitales**  
  *Familia:* `pasaporte del artefacto`  
  Firmas digitales conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Merkle trees**  
  *Familia:* `validación y decisión`  
  En Merkle trees, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Direcciones**  
  *Familia:* `espectro de verificación`  
  La función de Direcciones parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Claves y custody**  
  *Familia:* `pasaporte del artefacto`  
  Claves y custody estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Registro distribuido (5 conceptos)

- **Transacciones**  
  *Familia:* `mapa de memoria`  
  En Transacciones, valores con representación, dirección y tiempo de vida definidos ingresa al flujo donde reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para consolidar estado accesible sin referencias colgantes ni corrupción.

- **Bloques**  
  *Familia:* `telar relacional`  
  La función de Bloques parte de valores con representación, dirección y tiempo de vida definidos. Su ejecución reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime y produce estado accesible sin referencias colgantes ni corrupción.

- **Nodos**  
  *Familia:* `workflow y decisiones`  
  Nodos estructura valores con representación, dirección y tiempo de vida definidos en el sistema: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime, garantizando estado accesible sin referencias colgantes ni corrupción.

- **Mempool**  
  *Familia:* `mapa de memoria`  
  El recorrido de Mempool toma valores con representación, dirección y tiempo de vida definidos. Posteriormente reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para validar estado accesible sin referencias colgantes ni corrupción.

- **Estado**  
  *Familia:* `máquina de estados`  
  Estado procesa valores con representación, dirección y tiempo de vida definidos: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para entregar estado accesible sin referencias colgantes ni corrupción.


### 📑 Sección: Consenso y ejecución (5 conceptos)

- **Proof of Work**  
  *Familia:* `topología y tráfico`  
  En Proof of Work, un mensaje versionado, un destino y límites de tiempo ingresa al flujo donde serializa, transporta y valida el intercambio a través de una frontera remota para consolidar una respuesta correlacionada o un estado convergente verificable.

- **Proof of Stake**  
  *Familia:* `tejido de eventos`  
  La función de Proof of Stake parte de un mensaje versionado, un destino y límites de tiempo. Su ejecución serializa, transporta y valida el intercambio a través de una frontera remota y produce una respuesta correlacionada o un estado convergente verificable.

- **Finalidad**  
  *Familia:* `pasaporte del artefacto`  
  Finalidad estructura un mensaje versionado, un destino y límites de tiempo en el sistema: serializa, transporta y valida el intercambio a través de una frontera remota, garantizando una respuesta correlacionada o un estado convergente verificable.

- **Smart contracts**  
  *Familia:* `telar relacional`  
  El recorrido de Smart contracts toma un mensaje versionado, un destino y límites de tiempo. Posteriormente serializa, transporta y valida el intercambio a través de una frontera remota para validar una respuesta correlacionada o un estado convergente verificable.

- **Gas y recursos**  
  *Familia:* `acumulación de recursos`  
  Gas y recursos procesa un mensaje versionado, un destino y límites de tiempo: serializa, transporta y valida el intercambio a través de una frontera remota para entregar una respuesta correlacionada o un estado convergente verificable.


### 📑 Sección: Fallo y seguridad (5 conceptos)

- **Forks**  
  *Familia:* `validación y decisión`  
  Para entender Forks, se delimita una identidad, un recurso protegido y una política explícita. La operación evalúa confianza, privilegios y datos antes de autorizar cada efecto hasta producir una decisión mínima y trazable que no revela secretos.

- **Reorgs**  
  *Familia:* `comparativa técnica`  
  El mecanismo de Reorgs recibe una identidad, un recurso protegido y una política explícita y evalúa confianza, privilegios y datos antes de autorizar cada efecto, asegurando una decisión mínima y trazable que no revela secretos.

- **Double spend**  
  *Familia:* `tabla de estados`  
  Double spend conecta una identidad, un recurso protegido y una política explícita con su runtime interno: evalúa confianza, privilegios y datos antes de autorizar cada efecto hasta exponer una decisión mínima y trazable que no revela secretos.

- **Oráculos**  
  *Familia:* `validación y decisión`  
  En Oráculos, una identidad, un recurso protegido y una política explícita ingresa al flujo donde evalúa confianza, privilegios y datos antes de autorizar cada efecto para consolidar una decisión mínima y trazable que no revela secretos.

- **Auditoría de contratos**  
  *Familia:* `espectro de verificación`  
  La función de Auditoría de contratos parte de una identidad, un recurso protegido y una política explícita. Su ejecución evalúa confianza, privilegios y datos antes de autorizar cada efecto y produce una decisión mínima y trazable que no revela secretos.


### 📑 Sección: Producción (5 conceptos)

- **Wallets**  
  *Familia:* `secuencia operativa`  
  El mecanismo de Wallets recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Indexación**  
  *Familia:* `consulta e índice`  
  Indexación conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Escalamiento L2**  
  *Familia:* `pasaporte del artefacto`  
  En Escalamiento L2, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Gobernanza**  
  *Familia:* `capas internas`  
  La función de Gobernanza parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Observabilidad de red**  
  *Familia:* `topología y tráfico`  
  Observabilidad de red estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.


### 📑 Sección: Criptografía aplicada (6 conceptos)

- **Curvas elípticas**  
  *Familia:* `espectro de verificación`  
  Curvas elípticas en Criptografía aplicada: codifica el dominio, calcula prueba o firma y verifica con parámetros públicos, asegurando evidencia verificable que no requiere confiar en el transportista.

- **Esquemas de firma**  
  *Familia:* `pasaporte del artefacto`  
  En Criptografía aplicada, Esquemas de firma codifica el dominio, calcula prueba o firma y verifica con parámetros públicos para entregar evidencia verificable que no requiere confiar en el transportista.

- **Funciones derivadoras de claves**  
  *Familia:* `comparativa técnica`  
  Funciones derivadoras de claves aplica este mecanismo en Criptografía aplicada: codifica el dominio, calcula prueba o firma y verifica con parámetros públicos, con evidencia verificable que no requiere confiar en el transportista.

- **Pruebas de inclusión**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Pruebas de inclusión dentro de Criptografía aplicada ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Agregación de firmas**  
  *Familia:* `pasaporte del artefacto`  
  Para Agregación de firmas, la arquitectura de Criptografía aplicada codifica el dominio, calcula prueba o firma y verifica con parámetros públicos, garantizando evidencia verificable que no requiere confiar en el transportista.

- **Domain separation tags**  
  *Familia:* `cuadrícula paralela`  
  Domain separation tags gestiona Criptografía aplicada de modo que resuelve composición, restricciones y representación antes de aceptar la instancia, produciendo estructura válida cuyas operaciones permitidas están explícitas.


### 📑 Sección: Modelo de transacción (7 conceptos)

- **UTXO**  
  *Familia:* `evidencia y latencia`  
  UTXO en Modelo de transacción: registra intención, valida conflictos y confirma o compensa la unidad completa, asegurando un estado durable que satisface aislamiento e invariantes declarados.

- **Account model**  
  *Familia:* `flujo de transformación`  
  En Modelo de transacción, Account model resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Nonces**  
  *Familia:* `espectro de verificación`  
  Nonces aplica este mecanismo en Modelo de transacción: codifica el dominio, calcula prueba o firma y verifica con parámetros públicos, con evidencia verificable que no requiere confiar en el transportista.

- **Transaction fees**  
  *Familia:* `consulta e índice`  
  El mecanismo de Transaction fees dentro de Modelo de transacción registra intención, valida conflictos y confirma o compensa la unidad completa y consolida un estado durable que satisface aislamiento e invariantes declarados.

- **Transacciones reemplazables**  
  *Familia:* `flujo de interfaz`  
  Para Transacciones reemplazables, la arquitectura de Modelo de transacción registra intención, valida conflictos y confirma o compensa la unidad completa, garantizando un estado durable que satisface aislamiento e invariantes declarados.

- **Signature hash modes**  
  *Familia:* `tabla de estados`  
  Signature hash modes gestiona Modelo de transacción de modo que codifica el dominio, calcula prueba o firma y verifica con parámetros públicos, produciendo evidencia verificable que no requiere confiar en el transportista.

- **Transaction malleability controls**  
  *Familia:* `consulta e índice`  
  A través de Transaction malleability controls en Modelo de transacción, el sistema registra intención, valida conflictos y confirma o compensa la unidad completa manteniendo un estado durable que satisface aislamiento e invariantes declarados.


### 📑 Sección: Protocolos de consenso (8 conceptos)

- **Nakamoto consensus**  
  *Familia:* `análisis y emisión`  
  Nakamoto consensus en Protocolos de consenso: propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, asegurando un estado aceptado con nivel de finalidad y participantes responsables.

- **BFT clásico**  
  *Familia:* `validación y decisión`  
  En Protocolos de consenso, BFT clásico propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia para entregar un estado aceptado con nivel de finalidad y participantes responsables.

- **Selección de proposer**  
  *Familia:* `jerarquía y dependencias`  
  Selección de proposer aplica este mecanismo en Protocolos de consenso: propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, con un estado aceptado con nivel de finalidad y participantes responsables.

- **Slashing**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Slashing dentro de Protocolos de consenso propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia y consolida un estado aceptado con nivel de finalidad y participantes responsables.

- **Liveness y safety**  
  *Familia:* `validación y decisión`  
  Para Liveness y safety, la arquitectura de Protocolos de consenso propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, garantizando un estado aceptado con nivel de finalidad y participantes responsables.

- **Safety and liveness proofs**  
  *Familia:* `jerarquía y dependencias`  
  Safety and liveness proofs gestiona Protocolos de consenso de modo que propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, produciendo un estado aceptado con nivel de finalidad y participantes responsables.

- **Validator-set rotation**  
  *Familia:* `comparativa técnica`  
  A través de Validator-set rotation en Protocolos de consenso, el sistema propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia manteniendo un estado aceptado con nivel de finalidad y participantes responsables.

- **Finality checkpoint transitions**  
  *Familia:* `máquina de estados`  
  En el flujo operativo de Protocolos de consenso, Finality checkpoint transitions propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia para obtener un estado aceptado con nivel de finalidad y participantes responsables.


### 📑 Sección: Red peer-to-peer (7 conceptos)

- **Peer discovery**  
  *Familia:* `topología y tráfico`  
  Peer discovery en Red peer-to-peer: propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, asegurando un estado aceptado con nivel de finalidad y participantes responsables.

- **Gossip**  
  *Familia:* `matriz de señales`  
  En Red peer-to-peer, Gossip propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia para entregar un estado aceptado con nivel de finalidad y participantes responsables.

- **Propagación de bloques**  
  *Familia:* `pasaporte del artefacto`  
  Propagación de bloques aplica este mecanismo en Red peer-to-peer: propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, con un estado aceptado con nivel de finalidad y participantes responsables.

- **Sybil resistance**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Sybil resistance dentro de Red peer-to-peer propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia y consolida un estado aceptado con nivel de finalidad y participantes responsables.

- **Eclipse attacks**  
  *Familia:* `matriz de señales`  
  Para Eclipse attacks, la arquitectura de Red peer-to-peer propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, garantizando un estado aceptado con nivel de finalidad y participantes responsables.

- **Eclipse attack resistance**  
  *Familia:* `ida y vuelta`  
  Eclipse attack resistance gestiona Red peer-to-peer de modo que propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, produciendo un estado aceptado con nivel de finalidad y participantes responsables.

- **Peer scoring**  
  *Familia:* `topología y tráfico`  
  A través de Peer scoring en Red peer-to-peer, el sistema propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia manteniendo un estado aceptado con nivel de finalidad y participantes responsables.


### 📑 Sección: Máquinas virtuales y contratos (7 conceptos)

- **Bytecode de contratos**  
  *Familia:* `despacho de runtime`  
  Bytecode de contratos en Máquinas virtuales y contratos: analiza, expande, especializa y baja a una representación ejecutable, asegurando código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Storage layout**  
  *Familia:* `mapa de memoria`  
  En Máquinas virtuales y contratos, Storage layout resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **ABI de contrato**  
  *Familia:* `espectro de verificación`  
  ABI de contrato aplica este mecanismo en Máquinas virtuales y contratos: serializa, negocia, transmite y traduce errores u ownership en la frontera, con respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Eventos y logs**  
  *Familia:* `propagación de eventos`  
  El mecanismo de Eventos y logs dentro de Máquinas virtuales y contratos evalúa precondiciones y combina restricciones antes de comprometer estado y consolida valor aceptado con garantía explícita o error localizado.

- **Upgradability patterns**  
  *Familia:* `ida y vuelta`  
  Para Upgradability patterns, la arquitectura de Máquinas virtuales y contratos evalúa precondiciones y combina restricciones antes de comprometer estado, garantizando valor aceptado con garantía explícita o error localizado.

- **Deterministic gas metering**  
  *Familia:* `flujo de transformación`  
  Deterministic gas metering gestiona Máquinas virtuales y contratos de modo que evalúa precondiciones y combina restricciones antes de comprometer estado, produciendo valor aceptado con garantía explícita o error localizado.

- **Upgradeable storage layouts**  
  *Familia:* `mapa de memoria`  
  A través de Upgradeable storage layouts en Máquinas virtuales y contratos, el sistema resuelve composición, restricciones y representación antes de aceptar la instancia manteniendo estructura válida cuyas operaciones permitidas están explícitas.


### 📑 Sección: Seguridad de contratos inteligentes (7 conceptos)

- **Reentrancy**  
  *Familia:* `validación y decisión`  
  Reentrancy en Seguridad de contratos inteligentes: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, asegurando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Integer y precision errors**  
  *Familia:* `evidencia y latencia`  
  En Seguridad de contratos inteligentes, Integer y precision errors autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Access control defects**  
  *Familia:* `comparativa técnica`  
  Access control defects aplica este mecanismo en Seguridad de contratos inteligentes: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, con decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Front-running y MEV**  
  *Familia:* `validación y decisión`  
  El mecanismo de Front-running y MEV dentro de Seguridad de contratos inteligentes autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima y consolida decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Formal verification**  
  *Familia:* `tabla de estados`  
  Para Formal verification, la arquitectura de Seguridad de contratos inteligentes autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Access-control invariants**  
  *Familia:* `espectro de verificación`  
  Access-control invariants gestiona Seguridad de contratos inteligentes de modo que evalúa precondiciones y combina restricciones antes de comprometer estado, produciendo valor aceptado con garantía explícita o error localizado.

- **Integer precision boundaries**  
  *Familia:* `validación y decisión`  
  A través de Integer precision boundaries en Seguridad de contratos inteligentes, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### 📑 Sección: Privacidad (6 conceptos)

- **Pseudonimato**  
  *Familia:* `comparativa técnica`  
  Pseudonimato en Privacidad: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, asegurando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Coin mixing y límites**  
  *Familia:* `tabla de estados`  
  En Privacidad, Coin mixing y límites autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Zero-knowledge proofs**  
  *Familia:* `espectro de verificación`  
  Zero-knowledge proofs aplica este mecanismo en Privacidad: codifica el dominio, calcula prueba o firma y verifica con parámetros públicos, con evidencia verificable que no requiere confiar en el transportista.

- **Commitment schemes**  
  *Familia:* `validación y decisión`  
  El mecanismo de Commitment schemes dentro de Privacidad codifica el dominio, calcula prueba o firma y verifica con parámetros públicos y consolida evidencia verificable que no requiere confiar en el transportista.

- **Selective disclosure**  
  *Familia:* `telar relacional`  
  Para Selective disclosure, la arquitectura de Privacidad autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Metadata leakage**  
  *Familia:* `comparativa técnica`  
  Metadata leakage gestiona Privacidad de modo que autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, produciendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### 📑 Sección: Escalamiento (7 conceptos)

- **Payment channels**  
  *Familia:* `tejido de eventos`  
  Payment channels en Escalamiento: valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido, asegurando recibo y nuevo root de estado verificables por participantes independientes.

- **Optimistic rollups**  
  *Familia:* `pasaporte del artefacto`  
  En Escalamiento, Optimistic rollups valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido para entregar recibo y nuevo root de estado verificables por participantes independientes.

- **ZK rollups**  
  *Familia:* `espectro de verificación`  
  ZK rollups aplica este mecanismo en Escalamiento: codifica el dominio, calcula prueba o firma y verifica con parámetros públicos, con evidencia verificable que no requiere confiar en el transportista.

- **Data availability**  
  *Familia:* `consulta e índice`  
  El mecanismo de Data availability dentro de Escalamiento valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido y consolida recibo y nuevo root de estado verificables por participantes independientes.

- **Bridges entre redes**  
  *Familia:* `topología y tráfico`  
  Para Bridges entre redes, la arquitectura de Escalamiento valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido, garantizando recibo y nuevo root de estado verificables por participantes independientes.

- **Data-availability sampling**  
  *Familia:* `telar relacional`  
  Data-availability sampling gestiona Escalamiento de modo que valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido, produciendo recibo y nuevo root de estado verificables por participantes independientes.

- **Sequencer fault proofs**  
  *Familia:* `validación y decisión`  
  A través de Sequencer fault proofs en Escalamiento, el sistema valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido manteniendo recibo y nuevo root de estado verificables por participantes independientes.


### 📑 Sección: Economía del protocolo (7 conceptos)

- **Token issuance**  
  *Familia:* `análisis y emisión`  
  Token issuance en Economía del protocolo: tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, asegurando árbol, match o diagnóstico consumible por la siguiente etapa.

- **Fee markets**  
  *Familia:* `jerarquía y dependencias`  
  En Economía del protocolo, Fee markets serializa, negocia, transmite y traduce errores u ownership en la frontera para entregar respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Staking incentives**  
  *Familia:* `validación y decisión`  
  Staking incentives aplica este mecanismo en Economía del protocolo: serializa, negocia, transmite y traduce errores u ownership en la frontera, con respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Liquidity y riesgos**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Liquidity y riesgos dentro de Economía del protocolo serializa, negocia, transmite y traduce errores u ownership en la frontera y consolida respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Ataques económicos**  
  *Familia:* `jerarquía y dependencias`  
  Para Ataques económicos, la arquitectura de Economía del protocolo serializa, negocia, transmite y traduce errores u ownership en la frontera, garantizando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **MEV auction design**  
  *Familia:* `validación y decisión`  
  MEV auction design gestiona Economía del protocolo de modo que serializa, negocia, transmite y traduce errores u ownership en la frontera, produciendo respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Governance capture resistance**  
  *Familia:* `análisis y emisión`  
  A través de Governance capture resistance en Economía del protocolo, el sistema tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación manteniendo árbol, match o diagnóstico consumible por la siguiente etapa.


### 📑 Sección: Testing y desarrollo (7 conceptos)

- **Red local determinista**  
  *Familia:* `topología y tráfico`  
  Red local determinista en Testing y desarrollo: serializa, negocia, transmite y traduce errores u ownership en la frontera, asegurando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Fork testing**  
  *Familia:* `espectro de verificación`  
  En Testing y desarrollo, Fork testing propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia para entregar un estado aceptado con nivel de finalidad y participantes responsables.

- **Property tests de invariantes**  
  *Familia:* `jerarquía y dependencias`  
  Property tests de invariantes aplica este mecanismo en Testing y desarrollo: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **Fuzzing de contratos**  
  *Familia:* `validación y decisión`  
  El mecanismo de Fuzzing de contratos dentro de Testing y desarrollo ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Simulación de reorgs**  
  *Familia:* `espectro de verificación`  
  Para Simulación de reorgs, la arquitectura de Testing y desarrollo propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, garantizando un estado aceptado con nivel de finalidad y participantes responsables.

- **Fork simulation**  
  *Familia:* `evidencia y latencia`  
  Fork simulation gestiona Testing y desarrollo de modo que propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, produciendo un estado aceptado con nivel de finalidad y participantes responsables.

- **Stateful invariant fuzzing**  
  *Familia:* `máquina de estados`  
  A través de Stateful invariant fuzzing en Testing y desarrollo, el sistema ejecuta camino normal, límite y fallo mientras captura todos los efectos observables manteniendo evidencia repetible que distingue comportamiento correcto de una regresión.


### 📑 Sección: Datos e interoperabilidad (7 conceptos)

- **RPC de nodo**  
  *Familia:* `workflow y decisiones`  
  RPC de nodo en Datos e interoperabilidad: serializa, negocia, transmite y traduce errores u ownership en la frontera, asegurando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Event indexing**  
  *Familia:* `cola y consumidor`  
  En Datos e interoperabilidad, Event indexing anexa, publica y proyecta en orden conservando checkpoint del consumidor para entregar vista reconstruible y consumidor capaz de reanudar sin perder hechos.

- **Oracles descentralizados**  
  *Familia:* `consulta e índice`  
  Oracles descentralizados aplica este mecanismo en Datos e interoperabilidad: valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido, con recibo y nuevo root de estado verificables por participantes independientes.

- **Cross-chain messaging**  
  *Familia:* `telar relacional`  
  El mecanismo de Cross-chain messaging dentro de Datos e interoperabilidad valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido y consolida recibo y nuevo root de estado verificables por participantes independientes.

- **Identidad descentralizada**  
  *Familia:* `configuración declarativa`  
  Para Identidad descentralizada, la arquitectura de Datos e interoperabilidad valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido, garantizando recibo y nuevo root de estado verificables por participantes independientes.

- **Chain-reorganization indexing**  
  *Familia:* `consulta e índice`  
  Chain-reorganization indexing gestiona Datos e interoperabilidad de modo que propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, produciendo un estado aceptado con nivel de finalidad y participantes responsables.

- **Bridge light-client validation**  
  *Familia:* `validación y decisión`  
  A través de Bridge light-client validation en Datos e interoperabilidad, el sistema evalúa precondiciones y combina restricciones antes de comprometer estado manteniendo valor aceptado con garantía explícita o error localizado.


### 📑 Sección: Operación y gobierno (8 conceptos)

- **Node synchronization**  
  *Familia:* `workflow y decisiones`  
  Node synchronization en Operación y gobierno: valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido, asegurando recibo y nuevo root de estado verificables por participantes independientes.

- **Pruning y archive nodes**  
  *Familia:* `despacho de runtime`  
  En Operación y gobierno, Pruning y archive nodes valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido para entregar recibo y nuevo root de estado verificables por participantes independientes.

- **Gestión segura de validadores**  
  *Familia:* `validación y decisión`  
  Gestión segura de validadores aplica este mecanismo en Operación y gobierno: valida, propaga, ejecuta y ordena el cambio hasta alcanzar el grado de finalidad requerido, con recibo y nuevo root de estado verificables por participantes independientes.

- **Governance attacks**  
  *Familia:* `comparativa técnica`  
  El mecanismo de Governance attacks dentro de Operación y gobierno autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima y consolida decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Respuesta a incidentes on-chain**  
  *Familia:* `ida y vuelta`  
  Para Respuesta a incidentes on-chain, la arquitectura de Operación y gobierno aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, garantizando servicio recuperado con pérdida y tiempo medidos.

- **Validator key rotation**  
  *Familia:* `validación y decisión`  
  Validator key rotation gestiona Operación y gobierno de modo que propaga propuestas, valida reglas y acumula votos o trabajo antes de escoger historia, produciendo un estado aceptado con nivel de finalidad y participantes responsables.

- **Incident pause governance**  
  *Familia:* `flujo de transformación`  
  A través de Incident pause governance en Operación y gobierno, el sistema aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro manteniendo servicio recuperado con pérdida y tiempo medidos.

- **Emergency upgrade timelocks**  
  *Familia:* `secuencia operativa`  
  En el flujo operativo de Operación y gobierno, Emergency upgrade timelocks promueve por etapas, observa señales y conserva una ruta de reversión para obtener versión activa con tráfico y datos dentro del contrato.




---
[← Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
