# 📘 [API] APIs

> **REST, GraphQL, gRPC, eventos, tiempo real, contratos y seguridad.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `apis` |
| **Grupo Arquitectónico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `apis` |
| **Total de Conceptos** | **48 conceptos** |
| **Capítulos / Secciones** | **8 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/apis)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/apis-en-accion)**


## 🔬 Caso Práctico en Acción: APIs en acción

> **Caso integrado · Orden multiprotocolo:** Una reparación nace en una app, atraviesa fronteras síncronas y asíncronas y termina en una notificación externa sin perder identidad ni compatibilidad.  
> Cada protocolo hace el trabajo para el que fue elegido: contrato explícito, deadlines, idempotencia y una traza común mantienen una sola historia.

### Fases de Ejecución:
1. **Crear la intención** (REST público e idempotente): `POST /v1/orders · Idempotency-Key` → orden aceptada. *REST ofrece una frontera ampliamente interoperable para crear la intención.*
2. **Consultar la vista** (GraphQL compone datos de pantalla): `query OrderWorkbench($id)` → vista compuesta. *GraphQL resuelve una necesidad de lectura sin convertir el modelo interno en un contrato accidental.*
3. **Asignar internamente** (gRPC conserva tipos y deadline): `AssignOrder(deadline=300ms)` → técnico asignado. *La llamada interna no asume que una red se comporta como memoria local.*
4. **Publicar el hecho** (El evento desacopla consumidores): `order.assigned.v2` → evento durable. *El evento describe algo que ya ocurrió y puede ser consumido varias veces.*
5. **Transmitir progreso** (WebSocket entrega cambios vivos): `order:421 → status_changed` → progreso en tiempo real. *El estado canónico sigue en el servidor; el socket acelera la percepción.*
6. **Notificar al socio** (Webhook firmado y reintentable): `POST partner.example/hooks` → integración confirmada. *El consumidor verifica firma y trata cada delivery como potencialmente repetido.*
7. **Evolucionar el contrato** (Campos aditivos antes de retirar): `v1 + optional priority` → versiones compatibles. *La evolución se demuestra con consumidores reales, no solo con compilación.*
8. **Cerrar la traza** (Una identidad cruza protocolos): `trace_id=repair_421` → operación explicable. *La observabilidad conecta tecnologías distintas con la intención del usuario.*


---

## 📚 Desglose Exhaustivo de Conceptos (48)

### 📑 Sección: Fundamentos de contrato (6 conceptos)

- **Proveedor, consumidor y contrato**  
  *Familia:* `cola y consumidor`  
  Identifica quién promete comportamiento, quién depende de él y qué puede cambiar sin romper el acuerdo.

- **Operación, recurso y evento**  
  *Familia:* `acumulación de recursos`  
  Distingue una orden, la representación de una entidad y un hecho que ya ocurrió.

- **Schema y semántica**  
  *Familia:* `validación y decisión`  
  Combina forma validable con significado, invariantes y unidades que el tipo por sí solo no expresa.

- **Síncrono y asíncrono**  
  *Familia:* `cola y consumidor`  
  Elige si el consumidor espera una respuesta inmediata o continúa mientras llega un resultado posterior.

- **Idempotencia**  
  *Familia:* `planificación de trabajo`  
  Permite repetir una intención sin duplicar su efecto observable.

- **Compatibilidad hacia atrás y adelante**  
  *Familia:* `flujo de transformación`  
  Define qué versiones de productores y consumidores pueden convivir durante una evolución.


### 📑 Sección: HTTP y REST (6 conceptos)

- **Recursos y representaciones**  
  *Familia:* `acumulación de recursos`  
  Modela identidades estables mientras JSON, HTML u otros formatos expresan vistas del estado.

- **Métodos HTTP**  
  *Familia:* `ida y vuelta`  
  Usa GET, POST, PUT, PATCH y DELETE según seguridad, idempotencia y semántica de caché.

- **Status codes y problem details**  
  *Familia:* `máquina de estados`  
  Comunica clase de resultado y un cuerpo de error procesable sin devolver siempre 200.

- **Headers y negociación**  
  *Familia:* `consulta e índice`  
  Transporta metadatos, autenticación, caché, formatos y trazabilidad fuera del cuerpo de negocio.

- **Paginación, filtros y orden**  
  *Familia:* `ida y vuelta`  
  Acota colecciones grandes con cursores estables y límites explícitos.

- **Caching condicional**  
  *Familia:* `flujo de transformación`  
  Combina Cache-Control, ETag y validación para reutilizar respuestas sin servir estado incorrecto.


### 📑 Sección: GraphQL (6 conceptos)

- **Schema GraphQL**  
  *Familia:* `validación y decisión`  
  Declara tipos, campos y relaciones como contrato consultable por herramientas.

- **Queries y selección de campos**  
  *Familia:* `cola y consumidor`  
  Permite que el consumidor pida la forma necesaria sin convertir cada combinación en un endpoint.

- **Mutations**  
  *Familia:* `capas internas`  
  Expresa cambios con entradas, errores de dominio y resultados definidos por el schema.

- **Resolvers y N+1**  
  *Familia:* `consulta e índice`  
  Coordina fuentes de datos evitando multiplicar consultas por cada nodo de una lista.

- **Fragments y variables**  
  *Familia:* `ciclo de vida`  
  Reutiliza selecciones y separa valores dinámicos del documento de operación.

- **Persisted queries y límites**  
  *Familia:* `topología y tráfico`  
  Reduce superficie y costo imponiendo operaciones conocidas, profundidad y complejidad.


### 📑 Sección: RPC y gRPC (6 conceptos)

- **Servicio y métodos RPC**  
  *Familia:* `flujo de interfaz`  
  Modela capacidades como llamadas remotas sin fingir que una red equivale a una función local.

- **Protocol Buffers**  
  *Familia:* `análisis y emisión`  
  Define mensajes compactos con números de campo estables y reglas de evolución.

- **Unary y streaming**  
  *Familia:* `cola y consumidor`  
  Elige una respuesta, flujo del servidor, flujo del cliente o comunicación bidireccional.

- **Deadlines y cancelación**  
  *Familia:* `flujo de ejecución`  
  Propaga cuánto tiempo conserva valor una operación y deja de consumir trabajo inútil.

- **Status y metadata gRPC**  
  *Familia:* `máquina de estados`  
  Comunica errores, identidad y trazabilidad fuera del mensaje de dominio.

- **Transcoding y gateways**  
  *Familia:* `ida y vuelta`  
  Expone una frontera HTTP/JSON sin duplicar el servicio interno.


### 📑 Sección: Tiempo real y eventos (6 conceptos)

- **WebSocket**  
  *Familia:* `topología y tráfico`  
  Mantiene un canal bidireccional donde ambos extremos pueden enviar mensajes.

- **Server-Sent Events**  
  *Familia:* `propagación de eventos`  
  Transmite eventos del servidor sobre HTTP con reconexión y orden simples.

- **Webhooks**  
  *Familia:* `ida y vuelta`  
  Entrega callbacks HTTP firmados, reintentables y tolerantes a duplicados.

- **Publish-subscribe**  
  *Familia:* `cola y consumidor`  
  Desacopla productores de consumidores mediante topics y entrega asíncrona.

- **Event schemas**  
  *Familia:* `planificación de trabajo`  
  Versiona hechos publicados porque varios consumidores pueden conservarlos durante años.

- **Orden, entrega y deduplicación**  
  *Familia:* `pasaporte del artefacto`  
  Diseña para at-least-once, reordenamiento y efectos idempotentes.


### 📑 Sección: Identidad y seguridad (6 conceptos)

- **API keys**  
  *Familia:* `workflow y decisiones`  
  Identifica una aplicación sin tratarlas automáticamente como identidad de una persona.

- **OAuth 2.0 y OpenID Connect**  
  *Familia:* `ida y vuelta`  
  Delega autorización y obtiene identidad mediante flujos adecuados al tipo de cliente.

- **Scopes, claims y políticas**  
  *Familia:* `consulta e índice`  
  Convierte identidad en decisiones de mínimo privilegio por operación y recurso.

- **mTLS y service identity**  
  *Familia:* `workflow y decisiones`  
  Autentica ambos extremos en comunicaciones máquina a máquina.

- **CORS y frontera del navegador**  
  *Familia:* `ida y vuelta`  
  Controla qué orígenes pueden leer respuestas sin confundirlo con autorización del servidor.

- **Validación y límites**  
  *Familia:* `consulta e índice`  
  Rechaza forma, tamaño y frecuencia peligrosos antes de consumir recursos internos.


### 📑 Sección: Resiliencia y evolución (6 conceptos)

- **Timeouts y presupuestos de latencia**  
  *Familia:* `evidencia y latencia`  
  Evita esperas indefinidas y reparte un deadline entre dependencias.

- **Retries con backoff y jitter**  
  *Familia:* `tabla de estados`  
  Recupera fallos transitorios sin amplificar una saturación.

- **Circuit breaker y load shedding**  
  *Familia:* `validación y decisión`  
  Deja de insistir y rechaza temprano cuando el sistema no puede sostener más trabajo.

- **Versionado aditivo**  
  *Familia:* `evidencia y latencia`  
  Prefiere campos opcionales y deprecación medible antes de romper contratos existentes.

- **Consumer-driven contracts**  
  *Familia:* `cola y consumidor`  
  Comprueba expectativas reales de consumidores en el pipeline del proveedor.

- **Deprecación y sunset**  
  *Familia:* `secuencia operativa`  
  Mide uso, comunica fechas y ofrece migración antes de retirar una versión.


### 📑 Sección: Experiencia y operación (6 conceptos)

- **OpenAPI, AsyncAPI y reflexión**  
  *Familia:* `pasaporte del artefacto`  
  Produce contratos legibles por personas y herramientas según el estilo de integración.

- **SDKs y generación de clientes**  
  *Familia:* `flujo de interfaz`  
  Reduce trabajo repetitivo sin ocultar errores, retries o límites del transporte.

- **Portales y ejemplos ejecutables**  
  *Familia:* `consulta e índice`  
  Ayuda a lograr la primera llamada correcta con credenciales y datos seguros.

- **Observabilidad por operación**  
  *Familia:* `evidencia y latencia`  
  Relaciona request ID, trace, latencia, resultado y versión del contrato.

- **Rate limits y cuotas**  
  *Familia:* `flujo de interfaz`  
  Protege capacidad y comunica presupuesto, ventana y momento de reintento.

- **SLOs de API**  
  *Familia:* `cola y consumidor`  
  Mide disponibilidad y latencia desde la operación que el consumidor realmente necesita.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)** (`tutorial` | Nivel: `beginner`): 
- **[Learn GraphQL](https://graphql.org/learn/)** (`tutorial` | Nivel: `intermediate`): 
- **[OpenAPI Specification](https://spec.openapis.org/oas/latest.html)** (`specification` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
