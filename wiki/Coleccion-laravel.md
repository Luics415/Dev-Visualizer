# 📘 [Lv] Laravel

> **Contenedor, HTTP, Eloquent, políticas, colas, eventos y pruebas.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `laravel` |
| **Grupo Arquitectónico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `laravel` |
| **Total de Conceptos** | **65 conceptos** |
| **Capítulos / Secciones** | **11 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/laravel)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/laravel-en-accion)**


## 🔬 Caso Práctico en Acción: Laravel en acción

> **Caso integrado · Orden transaccional y asíncrona:** Una solicitud de reparación debe validarse, autorizarse y persistirse con inventario consistente; notificaciones y facturación continúan en cola sin duplicarse.  
> La orden confirma únicamente estado durable, los efectos secundarios se recuperan por idempotencia y cada frontera conserva trazabilidad.

### Fases de Ejecución:
1. **Recibir la solicitud** (Contrato y normalización): `StoreRepairOrderRequest` → entrada válida. *La validación ocurre antes de construir o consultar el agregado.*
2. **Autorizar la acción** (Identidad sobre recurso): `$this->authorize('create', RepairOrder::class)` → acceso permitido. *La policy centraliza la regla y se aplica también fuera de la pantalla.*
3. **Abrir transacción** (Orden e inventario juntos): `DB::transaction(fn () => ...)` → estado atómico. *La transacción termina antes de publicar efectos externos.*
4. **Detectar inconsistencia** (El correo sale antes del commit): `Mail::send() dentro de transaction` → doble verdad. *Un servicio externo no participa en la transacción de base de datos.*
5. **Publicar después del commit** (Evento durable): `OrderCreated::dispatchAfterCommit($order)` → frontera recuperada. *El evento nace únicamente cuando la verdad de datos ya es durable.*
6. **Procesar el job** (Idempotencia por folio): `ShouldQueue + uniqueId()` → efecto confirmado. *El proveedor recibe una clave estable y el job registra su resultado.*
7. **Manejar el fallo** (Failed jobs son estado): `failed(Throwable $e)` → recuperación disponible. *El fallo no se oculta ni revierte una orden ya aceptada.*
8. **Verificar el caso** (Prueba del flujo completo): `postJson → assertDatabaseHas → Queue::assertPushed` → orden operable. *La prueba demuestra respuesta, persistencia y transición asíncrona sin ejecutar terceros.*


---

## 📚 Desglose Exhaustivo de Conceptos (65)

### 📑 Sección: Ciclo y contenedor (6 conceptos)

- **Request lifecycle**  
  *Familia:* `workflow y decisiones`  
  Sigue bootstrap, kernel, middleware, ruta, respuesta y terminación.

- **Service container**  
  *Familia:* `ida y vuelta`  
  Resuelve dependencias por bindings, interfaces y contexto.

- **Service providers**  
  *Familia:* `consulta e índice`  
  Registran servicios y ejecutan boot cuando el contenedor ya está preparado.

- **Configuration**  
  *Familia:* `workflow y decisiones`  
  Combina archivos y entorno con cache de configuración en producción.

- **Facades**  
  *Familia:* `ida y vuelta`  
  Ofrecen proxies estáticos a servicios del contenedor sin eliminar sus dependencias reales.

- **Contextual Binding y DI condicional**  
  *Familia:* `consulta e índice`  
  Inyecta implementaciones distintas según la clase que solicita la dependencia.


### 📑 Sección: HTTP y entrada (6 conceptos)

- **Routing y model binding**  
  *Familia:* `workflow y decisiones`  
  Relaciona URL y parámetros con handlers y modelos autorizables.

- **Middleware**  
  *Familia:* `ida y vuelta`  
  Aplica concerns transversales en orden visible.

- **Form Requests**  
  *Familia:* `consulta e índice`  
  Agrupa autorización, normalización y validación de entrada.

- **Controllers y actions**  
  *Familia:* `workflow y decisiones`  
  Orquestan un caso sin absorber todas las reglas del dominio.

- **Resources**  
  *Familia:* `ida y vuelta`  
  Transforman modelos a contratos de respuesta sin filtrar columnas por accidente.

- **Rate Limiting por middleware**  
  *Familia:* `consulta e índice`  
  Aplica limitadores throttle con claves por IP, usuario autenticado o tenant.


### 📑 Sección: Datos y consistencia (6 conceptos)

- **Eloquent models**  
  *Familia:* `workflow y decisiones`  
  Mapean filas y relaciones mediante Active Record y convenciones.

- **Query builder**  
  *Familia:* `ida y vuelta`  
  Construye consultas parametrizadas y permite inspeccionar SQL y planes.

- **Relationships**  
  *Familia:* `consulta e índice`  
  Expresan asociación y exigen controlar eager loading para evitar N+1.

- **Transactions**  
  *Familia:* `workflow y decisiones`  
  Hacen atómica una unidad de persistencia y reintentan deadlocks con criterio.

- **Migrations**  
  *Familia:* `ida y vuelta`  
  Versionan cambios de esquema compatibles con el orden real de despliegue.

- **Database Seeders y Model Factories**  
  *Familia:* `consulta e índice`  
  Genera estados reproducibles y datos deterministas para pruebas y desarrollo.


### 📑 Sección: Identidad y seguridad (6 conceptos)

- **Authentication**  
  *Familia:* `workflow y decisiones`  
  Determina identidad mediante guards y providers apropiados al canal.

- **Gates y policies**  
  *Familia:* `ida y vuelta`  
  Autorizan acciones sobre recursos en una frontera reutilizable.

- **CSRF y sessions**  
  *Familia:* `consulta e índice`  
  Protegen solicitudes con estado sin confundir navegador y API tokenizada.

- **Mass assignment**  
  *Familia:* `workflow y decisiones`  
  Restringe atributos aceptables aunque la validación exista.

- **Hashing y encryption**  
  *Familia:* `ida y vuelta`  
  Distingue verificación irreversible de confidencialidad reversible.

- **Two-Factor Authentication y sesiones seguras**  
  *Familia:* `consulta e índice`  
  Gestiona códigos TOTP, claves de recuperación y renovación de sesión.


### 📑 Sección: Trabajo asíncrono (6 conceptos)

- **Events y listeners**  
  *Familia:* `workflow y decisiones`  
  Publican hechos y separan reacciones sin garantizar por sí solos entrega.

- **Queues y jobs**  
  *Familia:* `ida y vuelta`  
  Persisten trabajo con intentos, timeout, backoff y serialización controlados.

- **Failed jobs**  
  *Familia:* `consulta e índice`  
  Conservan evidencia y permiten recuperación manual o automatizada.

- **Scheduler**  
  *Familia:* `workflow y decisiones`  
  Declara recurrencia con locks y coordinación entre réplicas.

- **Cache y locks**  
  *Familia:* `ida y vuelta`  
  Reduce trabajo y coordina exclusión con TTL y fallbacks definidos.

- **Queue Batches y Chains**  
  *Familia:* `consulta e índice`  
  Encadena trabajos secuenciales o coordina lotes paralelos con callbacks de finalización.


### 📑 Sección: Calidad y producción (6 conceptos)

- **Feature y unit tests**  
  *Familia:* `workflow y decisiones`  
  Prueban el borde HTTP y reglas aisladas con diferente costo.

- **Database testing**  
  *Familia:* `ida y vuelta`  
  Controla fixtures, transacciones y motores representativos.

- **Logging y tracing**  
  *Familia:* `consulta e índice`  
  Correlaciona solicitud, job, consulta y servicio externo.

- **Octane y procesos persistentes**  
  *Familia:* `workflow y decisiones`  
  Evita filtrar estado de una solicitud a la siguiente.

- **Deploy y maintenance**  
  *Familia:* `ida y vuelta`  
  Coordina caches, workers, migraciones y health checks sin perder jobs.

- **Pest PHP y pruebas expresivas**  
  *Familia:* `consulta e índice`  
  Escribe suites de tests concisas con sintaxis declarativa y datasets dinámicos.


### 📑 Sección: Eloquent avanzado y patrones de persistencia (6 conceptos)

- **Polymorphic relations y morph maps**  
  *Familia:* `análisis y emisión`  
  Mapea entidades polimórficas desacoplando nombres de clases de la base de datos.

- **Custom Casts y Value Objects**  
  *Familia:* `tejido literario`  
  Serializa atributos JSON o tipos complejos en objetos inmutables de dominio.

- **Query Scopes y Global Scopes**  
  *Familia:* `consulta e índice`  
  Encapsula restricciones reutilizables o multitenancy automático en cada consulta.

- **Lazy loading vs Eager loading (preventLazyLoading)**  
  *Familia:* `flujo de transformación`  
  Bloquea consultas accidentales N+1 en desarrollo lanzando excepciones explícitas.

- **Eloquent Collections avanzadas**  
  *Familia:* `telar relacional`  
  Aplica transformaciones vectorizadas sobre colecciones de modelos sin consultar nuevamente la base.

- **Database cursors y chunking**  
  *Familia:* `consulta e índice`  
  Procesa millones de registros con bajo consumo de memoria mediante generadores PHP.


### 📑 Sección: Arquitectura de API y contratos REST/GraphQL (6 conceptos)

- **API Resources y Resource Collections**  
  *Familia:* `pasaporte del artefacto`  
  Transforma modelos en respuestas JSON consistentes con metadatos y paginación.

- **Rate Limiting por IP o usuario**  
  *Familia:* `flujo de interfaz`  
  Protege endpoints con limitadores de tasa usando Redis o la caché del sistema.

- **API Versioning y encabezados**  
  *Familia:* `ida y vuelta`  
  Gestiona evolución de contratos HTTP mediante prefijos de ruta o encabezados Accept.

- **Sanctum vs Passport**  
  *Familia:* `comparativa técnica`  
  Elige entre tokens livianos para SPAs o servidores OAuth2 completos según la necesidad.

- **Conditional attributes en recursos**  
  *Familia:* `acumulación de recursos`  
  Oculta campos sensibles o costosos en respuestas JSON según permisos del usuario.

- **OpenAPI y auto-documentación**  
  *Familia:* `consulta e índice`  
  Genera especificaciones OpenAPI interactivas a partir de FormRequests y rutas.


### 📑 Sección: Sistemas de eventos y tiempo real (6 conceptos)

- **Event Broadcasting con WebSockets (Reverb)**  
  *Familia:* `análisis y emisión`  
  Transmite eventos de servidor directamente a navegadores en tiempo real.

- **Presence Channels y Private Channels**  
  *Familia:* `tejido de eventos`  
  Autentica oyentes y expone quién está conectado en salas compartidas.

- **Echo y listeners del frontend**  
  *Familia:* `propagación de eventos`  
  Conecta Vue, React o JavaScript plano a canales de transmisión de Laravel.

- **Event Queues y transacciones**  
  *Familia:* `cola y consumidor`  
  Asegura que los eventos se transmitan únicamente después de que el commit de base de datos finalice.

- **Notification system multicanal**  
  *Familia:* `tejido de eventos`  
  Envía alertas unificadas por correo, Slack, SMS y base de datos con una sola clase.

- **Webhooks salientes firmados**  
  *Familia:* `ida y vuelta`  
  Publica webhooks a clientes externos verificando integridad con firmas criptográficas HMAC.


### 📑 Sección: Almacenamiento de archivos y medios (6 conceptos)

- **Filesystem Abstraction (Flysystem)**  
  *Familia:* `árbol de recursos`  
  Cambia entre almacenamiento local, Amazon S3 o Google Cloud Storage con una API uniforme.

- **Temporary signed URLs**  
  *Familia:* `validación y decisión`  
  Genera enlaces de descarga privados con caducidad temporal para proteger documentos sensibles.

- **Direct browser uploads (Pre-signed)**  
  *Familia:* `consulta e índice`  
  Sube archivos pesados directamente al bucket de almacenamiento sin saturar el servidor PHP.

- **Optimización y procesamiento de imágenes**  
  *Familia:* `secuencia operativa`  
  Genera miniaturas y variantes optimizadas de forma asíncrona en colas de trabajo.

- **Streams de archivos grandes**  
  *Familia:* `cola y consumidor`  
  Transmite descargas de gigabytes mediante streaming sin agotar la memoria de PHP.

- **Limpieza automática de temporales**  
  *Familia:* `consulta e índice`  
  Purga archivos no reclamados o temporales mediante tareas programadas en el scheduler.


### 📑 Sección: Observabilidad, telemetría y diagnósticos (5 conceptos)

- **Laravel Pulse**  
  *Familia:* `evidencia y latencia`  
  Monitorea servidores, tiempos de respuesta, colas y consultas lentas en tiempo real.

- **Laravel Horizon**  
  *Familia:* `secuencia operativa`  
  Supervisa trabajadores de Redis, métricas de rendimiento y trabajos fallidos desde un panel interactivo.

- **Laravel Telescope**  
  *Familia:* `tabla de estados`  
  Depura solicitudes entrantes, excepciones, consultas SQL, correos y dumps en entornos locales.

- **OpenTelemetry y distributed tracing**  
  *Familia:* `evidencia y latencia`  
  Exporta trazas distribuidas hacia sistemas externos como Jaeger o Datadog.

- **Health checks y probes de Kubernetes**  
  *Familia:* `espectro de verificación`  
  Expone endpoints de liveness y readiness que comprueban base de datos, caché y colas.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Learn Laravel](https://laravel.com/learn)** (`course` | Nivel: `beginner`): 
- **[Laravel 13 Installation](https://laravel.com/framework/docs/13.x/installation)** (`official-docs` | Nivel: `intermediate`): 
- **[Laravel Horizon](https://laravel.com/framework/docs/13.x/horizon)** (`official-docs` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
