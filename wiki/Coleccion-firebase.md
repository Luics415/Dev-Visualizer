# 📘 [FB] Firebase

> **Auth, datos, Storage, Functions, Hosting, FCM y Rules.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `firebase` |
| **Grupo Arquitectónico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `firebase` |
| **Total de Conceptos** | **250 conceptos** |
| **Capítulos / Secciones** | **12 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/firebase)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/firebase-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (250)

### 📑 Sección: Plataforma, proyectos y arquitectura (15 conceptos)

- **Qué es Firebase**  
  *Familia:* `anatomía del concepto`  
  Plataforma de desarrollo de aplicaciones que combina SDKs cliente, servicios administrados, backend serverless y herramientas de calidad.

- **Proyecto de Firebase**  
  *Familia:* `consulta e índice`  
  Contenedor lógico que vincula apps, recursos, configuración, facturación y un proyecto subyacente de Google Cloud.

- **Apps registradas**  
  *Familia:* `telar relacional`  
  Una app web, Android, iOS, Flutter o Unity recibe identidad y configuración propias dentro del proyecto.

- **Entornos separados**  
  *Familia:* `pasaporte del artefacto`  
  Desarrollo, staging y producción deben usar proyectos distintos para aislar datos, cuotas, reglas y credenciales.

- **Firebase Console**  
  *Familia:* `evidencia y latencia`  
  Interfaz para configurar productos, revisar datos, reglas, usuarios, métricas, releases y alertas.

- **Firebase CLI**  
  *Familia:* `capas internas`  
  Herramienta para login, selección de proyectos, emuladores, deploys, hosting, funciones y reglas.

- **firebase.json**  
  *Familia:* `configuración declarativa`  
  Declara configuración de hosting, emulators, functions, rules, indexes y targets de deployment.

- **.firebaserc**  
  *Familia:* `análisis y emisión`  
  Relaciona aliases locales con IDs de proyecto y facilita comandos seguros por entorno.

- **Google Cloud subyacente**  
  *Familia:* `consulta e índice`  
  Muchos productos usan IAM, regiones, logs, billing, APIs y recursos de Google Cloud.

- **Plan Spark**  
  *Familia:* `validación y decisión`  
  Nivel sin costo con cuotas y restricciones que sirve para prototipos y aprendizaje.

- **Plan Blaze**  
  *Familia:* `telar relacional`  
  Facturación por uso necesaria para ciertas integraciones, escalado y acceso a servicios de Google Cloud.

- **Regiones y ubicación**  
  *Familia:* `evidencia y latencia`  
  Firestore, Functions, Storage y otros recursos deben ubicarse considerando latencia, residencia y costos de egress.

- **SDK cliente frente a Admin SDK**  
  *Familia:* `consulta e índice`  
  El SDK cliente actúa como usuario sujeto a reglas; Admin SDK usa credenciales privilegiadas y omite reglas.

- **Arquitectura Backend as a Service**  
  *Familia:* `anatomía del concepto`  
  Permite que clientes accedan directamente a servicios administrados, trasladando autorización a reglas y claims.

- **Vendor lock-in y portabilidad**  
  *Familia:* `planificación de trabajo`  
  SDKs, modelo de datos y triggers aceleran desarrollo, pero deben evaluarse frente a requisitos de migración.


### 📑 Sección: SDKs, inicialización y desarrollo local (17 conceptos)

- **Configuración de una app web**  
  *Familia:* `configuración declarativa`  
  apiKey, projectId y otros identificadores permiten que el SDK localice el proyecto; no son secretos por sí solos.

- **initializeApp**  
  *Familia:* `evidencia y latencia`  
  Crea la instancia principal a partir de configuración y evita inicializaciones duplicadas.

- **SDK modular de JavaScript**  
  *Familia:* `matriz de señales`  
  Imports por función favorecen tree shaking y bundles más pequeños que la API namespaced histórica.

- **Instancias de servicios**  
  *Familia:* `ida y vuelta`  
  getAuth, getFirestore, getStorage y funciones equivalentes obtienen clientes ligados a una app.

- **Múltiples apps**  
  *Familia:* `topología y tráfico`  
  initializeApp con nombres distintos permite conectar una ejecución a varios proyectos cuando el caso lo requiere.

- **Persistencia de configuración**  
  *Familia:* `configuración declarativa`  
  La configuración pública puede vivir en variables de build, mientras secretos reales permanecen en backend.

- **Firebase Local Emulator Suite**  
  *Familia:* `consulta e índice`  
  Ejecuta Auth, Firestore, Realtime Database, Functions, Hosting, Pub/Sub y otros servicios localmente.

- **Conectar SDKs a emulators**  
  *Familia:* `topología y tráfico`  
  Funciones connect*Emulator redirigen tráfico antes de realizar la primera operación del servicio.

- **Emulator UI**  
  *Familia:* `telar relacional`  
  Permite inspeccionar datos, requests, reglas, logs y ejecución local desde el navegador.

- **Importar y exportar datos de emulators**  
  *Familia:* `consulta e índice`  
  Conserva fixtures para repetir escenarios de desarrollo e integración.

- **Project demo**  
  *Familia:* `espectro de verificación`  
  IDs demo-* evitan acceso accidental a recursos reales durante pruebas locales compatibles.

- **Rules unit testing**  
  *Familia:* `validación y decisión`  
  Entornos de test crean contextos autenticados o no autenticados y limpian datos entre casos.

- **Firebase CLI login y CI**  
  *Familia:* `evidencia y latencia`  
  Login interactivo sirve localmente; CI debe preferir identidad de workload o credenciales gestionadas.

- **Targets de deploy**  
  *Familia:* `pasaporte del artefacto`  
  Asocian nombres lógicos con múltiples sites, buckets o bases dentro de un proyecto.

- **Inicialización por plataforma**  
  *Familia:* `constelación de mecanismos`  
  Android usa google-services.json e iOS GoogleService-Info.plist para generar configuración de build.

- **Compatibilidad de versiones**  
  *Familia:* `mapa de memoria`  
  SDKs, Gradle plugins, CocoaPods y runtimes deben actualizarse con una matriz probada.

- **Debug logging**  
  *Familia:* `evidencia y latencia`  
  Niveles de log del SDK ayudan a observar conexión, caché, autenticación y requests durante desarrollo.


### 📑 Sección: Firebase Authentication (26 conceptos)

- **Modelo de identidad**  
  *Familia:* `configuración declarativa`  
  Firebase Auth asigna un UID estable y entrega tokens que otros servicios verifican.

- **Email y contraseña**  
  *Familia:* `espectro de verificación`  
  Proveedor básico que exige políticas de contraseña, verificación de email y recuperación segura.

- **Email link**  
  *Familia:* `evidencia y latencia`  
  Autenticación passwordless que confirma control de una dirección mediante un enlace de un solo uso.

- **Teléfono**  
  *Familia:* `capas internas`  
  Envía códigos SMS y necesita medidas contra abuso, costos y limitaciones regionales.

- **Proveedores federados**  
  *Familia:* `diagnóstico operativo`  
  Google, Apple, Microsoft, GitHub y otros usan OAuth u OpenID Connect para delegar autenticación.

- **Proveedores SAML y OIDC**  
  *Familia:* `consulta e índice`  
  Identity Platform amplía integración empresarial con proveedores personalizados.

- **Usuarios anónimos**  
  *Familia:* `flujo de interfaz`  
  Crean una identidad temporal que puede vincularse después para conservar datos.

- **Custom authentication**  
  *Familia:* `validación y decisión`  
  Un backend confiable crea custom tokens después de validar una identidad externa.

- **Sign in y sesión**  
  *Familia:* `topología y tráfico`  
  El SDK intercambia credenciales, conserva estado y renueva ID tokens automáticamente.

- **ID token**  
  *Familia:* `flujo de interfaz`  
  JWT de corta duración que representa UID, proveedor, claims y tiempo de emisión.

- **Refresh token**  
  *Familia:* `tejido de eventos`  
  Permite obtener nuevos ID tokens y debe protegerse como credencial de larga duración.

- **Auth state listener**  
  *Familia:* `máquina de estados`  
  onAuthStateChanged informa cambios de sesión sin depender de lecturas síncronas al iniciar.

- **ID token listener**  
  *Familia:* `propagación de eventos`  
  onIdTokenChanged también reacciona a renovaciones y cambios de custom claims.

- **Persistencia web**  
  *Familia:* `mapa de memoria`  
  local, session y memory determinan si la sesión sobrevive pestañas, recargas o cierre del navegador.

- **Linking de proveedores**  
  *Familia:* `flujo de interfaz`  
  Une varias credenciales a un mismo UID evitando cuentas duplicadas.

- **Reautenticación**  
  *Familia:* `superficie de aplicación`  
  Operaciones sensibles requieren credenciales recientes antes de cambiar email, contraseña o borrar cuenta.

- **Verificación de email**  
  *Familia:* `espectro de verificación`  
  Confirma propiedad del correo, pero la aplicación debe decidir qué funciones requieren esa señal.

- **Password reset**  
  *Familia:* `validación y decisión`  
  Genera enlaces de acción con plantillas, dominios autorizados y manejo de códigos expirados.

- **Action code settings**  
  *Familia:* `consulta e índice`  
  Controla URL de retorno, deep links y plataforma para emails de autenticación.

- **Custom claims**  
  *Familia:* `telar relacional`  
  Un entorno privilegiado añade roles pequeños al token; no son una base de datos de perfil.

- **Revocación de tokens**  
  *Familia:* `capas internas`  
  El backend puede invalidar refresh tokens y verificar tiempo de revocación para sesiones críticas.

- **Bloqueo y eliminación de usuarios**  
  *Familia:* `pasaporte del artefacto`  
  Admin SDK gestiona estado de cuenta y dispara estrategias de limpieza de datos.

- **Multi-factor authentication**  
  *Familia:* `tejido de eventos`  
  Añade un segundo factor y requiere diseñar enrollment, recovery y UX de desafíos.

- **Multi-tenancy**  
  *Familia:* `consulta e índice`  
  Identity Platform separa usuarios y proveedores por tenant dentro de un proyecto.

- **Auth emulator**  
  *Familia:* `validación y decisión`  
  Simula proveedores, usuarios, tokens y emails localmente sin enviar tráfico real.

- **Errores y enumeración de usuarios**  
  *Familia:* `evidencia y latencia`  
  Mensajes deben ser útiles sin revelar si una cuenta existe a un atacante.


### 📑 Sección: Cloud Firestore: modelo de datos (22 conceptos)

- **Base de datos documental**  
  *Familia:* `consulta e índice`  
  Firestore almacena documentos JSON-like dentro de colecciones y subcolecciones.

- **Colecciones**  
  *Familia:* `telar relacional`  
  Agrupan documentos sin imponer un esquema global, aunque la aplicación debe mantener contratos consistentes.

- **Documentos**  
  *Familia:* `flujo de transformación`  
  Unidades direccionables con campos, ID y límite de tamaño que se leen o escriben atómicamente.

- **Referencias**  
  *Familia:* `análisis y emisión`  
  DocumentReference identifica una ruta y puede almacenarse como tipo de campo.

- **Subcolecciones**  
  *Familia:* `consulta e índice`  
  Permiten jerarquía bajo un documento, pero no se eliminan automáticamente al borrar el padre.

- **Rutas**  
  *Familia:* `árbol de recursos`  
  Alternan nombres de colección e IDs de documento y determinan el alcance de reglas y consultas.

- **IDs automáticos**  
  *Familia:* `telar relacional`  
  Distribuyen escrituras y evitan hotspots mejor que IDs secuenciales en ciertos patrones.

- **Tipos de campo**  
  *Familia:* `matriz de señales`  
  Incluyen strings, números, booleanos, timestamps, geopoints, references, arrays, maps, null y bytes.

- **Timestamps del servidor**  
  *Familia:* `consulta e índice`  
  serverTimestamp usa la hora del backend y se resuelve cuando la escritura se confirma.

- **Mapas anidados**  
  *Familia:* `análisis y emisión`  
  Agrupan campos, aunque actualizaciones deben usar paths para no reemplazar el objeto completo accidentalmente.

- **Arrays**  
  *Familia:* `tabla de estados`  
  arrayUnion y arrayRemove actualizan valores, pero arrays grandes o consultables pueden requerir otro modelo.

- **Desnormalización**  
  *Familia:* `telar relacional`  
  Duplica datos para lecturas eficientes y obliga a planear sincronización y consistencia.

- **Referencias frente a embedding**  
  *Familia:* `flujo de transformación`  
  La decisión depende de cardinalidad, frecuencia de lectura y necesidad de consultas.

- **Colecciones raíz**  
  *Familia:* `análisis y emisión`  
  Facilitan consultas globales y seguridad por tipo de entidad.

- **Subcolecciones por usuario**  
  *Familia:* `flujo de interfaz`  
  Aíslan rutas y reglas, pero las collection group queries pueden consultar nombres compartidos.

- **Colecciones de unión**  
  *Familia:* `consulta e índice`  
  Modelan muchos-a-muchos mediante documentos que contienen referencias o IDs.

- **Contadores distribuidos**  
  *Familia:* `telar relacional`  
  Dividen incrementos entre shards cuando una sola ubicación recibe demasiadas escrituras.

- **Datos derivados**  
  *Familia:* `espectro de verificación`  
  Totals, summaries y denormalizaciones pueden materializarse mediante transacciones o funciones.

- **Soft delete**  
  *Familia:* `consulta e índice`  
  Marca estado y fecha en lugar de borrar, facilitando recuperación a costa de filtros y retención.

- **TTL policies**  
  *Familia:* `telar relacional`  
  Eliminan documentos después de un timestamp según una política administrada y no inmediata.

- **Converters**  
  *Familia:* `flujo de transformación`  
  FirestoreDataConverter traduce modelos tipados y representaciones persistidas.

- **Evolución de esquema**  
  *Familia:* `consulta e índice`  
  Lectores tolerantes, versiones de documento y backfills permiten migrar datos existentes.


### 📑 Sección: Cloud Firestore: consultas e índices (22 conceptos)

- **Consultas declarativas**  
  *Familia:* `jerarquía y dependencias`  
  where, orderBy, limit y cursors describen un conjunto que Firestore sirve mediante índices.

- **Índices automáticos**  
  *Familia:* `tabla de estados`  
  Firestore mantiene índices de campo individuales salvo exclusiones configuradas.

- **Índices compuestos**  
  *Familia:* `consulta e índice`  
  Combinaciones de filtros y orden pueden requerir un índice definido explícitamente.

- **Exenciones de índice**  
  *Familia:* `jerarquía y dependencias`  
  Excluir campos grandes o no consultados reduce almacenamiento y costo de escritura.

- **Igualdad**  
  *Familia:* `telar relacional`  
  Filtros == y != tienen semántica y restricciones específicas sobre campos presentes.

- **Comparaciones de rango**  
  *Familia:* `comparativa técnica`  
  <, <=, > y >= suelen determinar el primer orderBy y la forma del índice.

- **in y not-in**  
  *Familia:* `consulta e índice`  
  Comparan contra conjuntos limitados de valores y tienen restricciones combinatorias.

- **array-contains**  
  *Familia:* `tabla de estados`  
  Encuentra documentos cuyo array incluye un valor concreto.

- **array-contains-any**  
  *Familia:* `mapa de memoria`  
  Combina varias posibilidades con límites y deduplicación de resultados.

- **OrderBy**  
  *Familia:* `consulta e índice`  
  Ordena por un campo y excluye documentos donde ese campo no existe.

- **Limit**  
  *Familia:* `despacho de runtime`  
  Acota documentos devueltos, lecturas cobradas y memoria de la interfaz.

- **Cursors**  
  *Familia:* `telar relacional`  
  startAt, startAfter, endAt y endBefore paginan con valores o snapshots estables.

- **Offset**  
  *Familia:* `tejido de eventos`  
  Descarta documentos en servidor pero todavía puede cobrar lecturas, por lo que cursors suelen ser mejores.

- **Paginación**  
  *Familia:* `consulta e índice`  
  Conserva el último snapshot y orden total para evitar saltos o duplicados.

- **Collection group queries**  
  *Familia:* `telar relacional`  
  Consultan todas las subcolecciones con un nombre común y requieren reglas e índices compatibles.

- **Queries OR**  
  *Familia:* `flujo de transformación`  
  Combinan filtros disyuntivos con límites sobre formas normalizadas.

- **Agregaciones count, sum y average**  
  *Familia:* `consulta e índice`  
  Calculan resultados indexados sin descargar todos los documentos al cliente.

- **Query explain**  
  *Familia:* `jerarquía y dependencias`  
  En entornos compatibles ayuda a revisar plan, índices y lecturas del motor.

- **Hotspots de índices**  
  *Familia:* `tabla de estados`  
  Campos secuenciales muy escritos pueden limitar throughput si se indexan innecesariamente.

- **Coste de una consulta**  
  *Familia:* `consulta e índice`  
  Depende de documentos e index entries leídos, tamaño transferido y listeners activos.

- **Índices como código**  
  *Familia:* `jerarquía y dependencias`  
  firestore.indexes.json versiona índices compuestos y exenciones para deploy reproducible.

- **Búsqueda de texto**  
  *Familia:* `tejido literario`  
  Firestore no es un motor full-text; suele integrarse con servicios de búsqueda especializados.


### 📑 Sección: Cloud Firestore: tiempo real, offline y escrituras (22 conceptos)

- **Listeners en tiempo real**  
  *Familia:* `propagación de eventos`  
  onSnapshot entrega un snapshot inicial y cambios posteriores mientras la suscripción permanece activa.

- **Document changes**  
  *Familia:* `ida y vuelta`  
  added, modified y removed permiten actualizar listas sin reconstruir todo el conjunto.

- **Unsubscribe**  
  *Familia:* `mapa de memoria`  
  Liberar listeners evita tráfico, memoria y actualizaciones sobre vistas desmontadas.

- **Metadata changes**  
  *Familia:* `consulta e índice`  
  Indican si datos vienen de cache y si existen escrituras locales pendientes.

- **Latencia compensada**  
  *Familia:* `evidencia y latencia`  
  El SDK aplica escrituras localmente antes de confirmación para una interfaz optimista.

- **Persistencia offline**  
  *Familia:* `telar relacional`  
  Caches locales permiten lecturas y cola de escrituras cuando no hay red, según plataforma y configuración.

- **Sincronización al reconectar**  
  *Familia:* `planificación de trabajo`  
  Operaciones pendientes se envían y listeners reciben el estado confirmado.

- **Last write wins**  
  *Familia:* `análisis y emisión`  
  Escrituras offline concurrentes sobre el mismo campo pueden resolverse por la última confirmada.

- **set**  
  *Familia:* `ida y vuelta`  
  Crea o reemplaza un documento; merge conserva campos no incluidos.

- **update**  
  *Familia:* `flujo de transformación`  
  Modifica campos concretos y falla si el documento no existe.

- **delete**  
  *Familia:* `topología y tráfico`  
  Borra un documento, pero no elimina sus subcolecciones.

- **FieldValue increment**  
  *Familia:* `ida y vuelta`  
  Aplica incrementos atómicos sin leer el valor actual en cliente.

- **arrayUnion y arrayRemove**  
  *Familia:* `tabla de estados`  
  Transformaciones atómicas añaden o retiran elementos sin reemplazar el array completo.

- **Batched writes**  
  *Familia:* `flujo de transformación`  
  Agrupan múltiples escrituras atómicas sin necesidad de leer documentos.

- **Transactions**  
  *Familia:* `consulta e índice`  
  Reejecutan una función si documentos leídos cambian antes del commit.

- **Read before write**  
  *Familia:* `ida y vuelta`  
  Las lecturas transaccionales deben ocurrir antes de escrituras en el flujo permitido por el SDK.

- **Retries de transacción**  
  *Familia:* `tabla de estados`  
  La función puede ejecutarse varias veces y no debe producir side effects externos.

- **Preconditions**  
  *Familia:* `flujo de transformación`  
  updateTime o exists protegen contra sobrescrituras inesperadas en APIs de servidor.

- **BulkWriter**  
  *Familia:* `planificación de trabajo`  
  Admin SDK ejecuta muchas escrituras con concurrencia y retries configurables.

- **Write rate y hotspots**  
  *Familia:* `consulta e índice`  
  IDs y campos secuenciales, índices y documentos contenciosos limitan escalabilidad.

- **Listener fan-out**  
  *Familia:* `propagación de eventos`  
  Muchos clientes sobre queries amplias afectan costo y diseño de particiones lógicas.

- **Bundles**  
  *Familia:* `ida y vuelta`  
  Empaquetan snapshots preconstruidos para acelerar carga inicial en casos compatibles.


### 📑 Sección: Realtime Database (15 conceptos)

- **Árbol JSON**  
  *Familia:* `jerarquía y dependencias`  
  Realtime Database almacena un único árbol JSON sincronizado en tiempo real.

- **References y paths**  
  *Familia:* `árbol de recursos`  
  Cada referencia apunta a una ubicación y las operaciones afectan ese nodo y descendientes.

- **Listeners de valor**  
  *Familia:* `propagación de eventos`  
  onValue entrega el estado completo de una ubicación al iniciar y cuando cambia.

- **Listeners de hijos**  
  *Familia:* `ecosistema coordinado`  
  child_added, child_changed, child_removed y child_moved actualizan listas incrementalmente.

- **Push IDs**  
  *Familia:* `consulta e índice`  
  Generan claves ordenables temporalmente y distribuidas para listas concurrentes.

- **set, update y remove**  
  *Familia:* `telar relacional`  
  set reemplaza una ubicación; update aplica cambios multipath; remove escribe null.

- **Actualizaciones multipath**  
  *Familia:* `árbol de recursos`  
  Permiten modificar ubicaciones separadas atómicamente para mantener denormalizaciones.

- **Transactions RTDB**  
  *Familia:* `consulta e índice`  
  Repiten read-modify-write ante conflictos y requieren una función pura.

- **ServerValue**  
  *Familia:* `telar relacional`  
  Timestamps e incrementos se calculan en servidor.

- **Presence**  
  *Familia:* `flujo de transformación`  
  .info/connected y onDisconnect permiten modelar conexión y limpiar estado tras desconexión.

- **Orden y queries**  
  *Familia:* `consulta e índice`  
  orderByChild, startAt, endAt, equalTo y limit filtran listas indexadas.

- **.indexOn**  
  *Familia:* `jerarquía y dependencias`  
  Las reglas declaran campos indexados para evitar escaneos costosos.

- **Persistencia offline RTDB**  
  *Familia:* `telar relacional`  
  Caches y cola local mantienen experiencia cuando la red desaparece.

- **Security Rules RTDB**  
  *Familia:* `validación y decisión`  
  .read, .write, .validate e índices se evalúan sobre rutas y datos actuales o propuestos.

- **Firestore frente a RTDB**  
  *Familia:* `secuencia operativa`  
  Firestore favorece documentos y queries ricas; RTDB destaca en árbol simple, presencia y sincronización de baja latencia.


### 📑 Sección: Cloud Storage for Firebase (17 conceptos)

- **Buckets**  
  *Familia:* `análisis y emisión`  
  Almacenan objetos binarios bajo nombres y metadata dentro de Google Cloud Storage.

- **References de Storage**  
  *Familia:* `validación y decisión`  
  Apuntan a rutas de objetos y sirven para upload, download, metadata y delete.

- **Upload de bytes y archivos**  
  *Familia:* `árbol de recursos`  
  SDKs aceptan blobs, files, streams o datos en memoria según plataforma.

- **Uploads resumables**  
  *Familia:* `evidencia y latencia`  
  Dividen transferencias, reportan progreso y permiten pausar o reanudar.

- **Metadata**  
  *Familia:* `análisis y emisión`  
  Content-Type, cache control y metadata custom describen cómo servir y procesar un objeto.

- **Download URLs**  
  *Familia:* `validación y decisión`  
  Tokens largos permiten acceso por URL y deben revocarse o protegerse según sensibilidad.

- **getBytes y getBlob**  
  *Familia:* `comparativa técnica`  
  Descargan contenido mediante SDK respetando autorización y límites de memoria.

- **Delete**  
  *Familia:* `análisis y emisión`  
  Elimina el objeto actual, sujeto a versioning y políticas del bucket.

- **List**  
  *Familia:* `validación y decisión`  
  Enumera prefijos y objetos con paginación; nombres y reglas deben evitar exposición accidental.

- **Security Rules Storage**  
  *Familia:* `comparativa técnica`  
  Evalúan auth, path, tamaño, contentType y metadata de la operación.

- **Validación de tipo y tamaño**  
  *Familia:* `matriz de señales`  
  Reglas pueden rechazar archivos grandes o MIME no permitidos antes de persistirlos.

- **Propiedad por UID**  
  *Familia:* `flujo de interfaz`  
  Rutas como users/{uid} permiten expresar acceso por identidad.

- **App Check y Storage**  
  *Familia:* `validación y decisión`  
  Attestation reduce abuso automatizado además de la autorización de usuario.

- **Procesamiento de archivos**  
  *Familia:* `árbol de recursos`  
  Cloud Functions puede generar thumbnails, analizar contenido o limpiar metadata después del upload.

- **CORS**  
  *Familia:* `comparativa técnica`  
  Acceso web directo necesita políticas del bucket para orígenes y métodos permitidos.

- **Lifecycle y retención**  
  *Familia:* `ciclo de vida`  
  Políticas de Cloud Storage archivan o eliminan objetos y deben coordinarse con datos de aplicación.

- **URLs firmadas**  
  *Familia:* `validación y decisión`  
  Backends privilegiados pueden generar acceso temporal sin hacer público el objeto.


### 📑 Sección: Cloud Functions for Firebase (24 conceptos)

- **Functions serverless**  
  *Familia:* `ida y vuelta`  
  Ejecutan backend administrado en respuesta a HTTPS, eventos de Firebase, Google Cloud o scheduler.

- **1st gen y 2nd gen**  
  *Familia:* `planificación de trabajo`  
  Generaciones difieren en plataforma, concurrencia, configuración, escalado y eventos soportados.

- **Región**  
  *Familia:* `evidencia y latencia`  
  Ubicar funciones cerca de datos y usuarios reduce latencia y egress.

- **HTTP functions**  
  *Familia:* `ida y vuelta`  
  Exponen un handler de request y response para APIs o webhooks.

- **Callable functions**  
  *Familia:* `análisis y emisión`  
  Protocolo SDK incluye serialización, auth y App Check con formato de errores definido.

- **Firestore triggers**  
  *Familia:* `secuencia operativa`  
  Se ejecutan ante create, update, delete o write de documentos que coinciden con un patrón.

- **Auth triggers y blocking functions**  
  *Familia:* `validación y decisión`  
  Reaccionan al ciclo de usuarios o bloquean eventos de autenticación en productos compatibles.

- **Storage triggers**  
  *Familia:* `análisis y emisión`  
  Procesan finalización, eliminación, archivado o metadata de objetos.

- **Realtime Database triggers**  
  *Familia:* `consulta e índice`  
  Observan cambios en rutas y extraen parámetros del patrón.

- **Pub/Sub y Eventarc**  
  *Familia:* `cola y consumidor`  
  Conectan eventos de Google Cloud y fuentes personalizadas con handlers.

- **Scheduled functions**  
  *Familia:* `planificación de trabajo`  
  Cloud Scheduler invoca tareas periódicas con identidad y retry configurables.

- **Cold starts**  
  *Familia:* `mapa de memoria`  
  Instancias nuevas cargan runtime y dependencias; tamaño, región y minimum instances influyen.

- **Concurrencia**  
  *Familia:* `cola y consumidor`  
  2nd gen puede procesar varias solicitudes por instancia y exige código seguro para concurrencia.

- **Autoscaling**  
  *Familia:* `evidencia y latencia`  
  minInstances, maxInstances y concurrency equilibran latencia, costo y protección de dependencias.

- **Timeout y memoria**  
  *Familia:* `memoria intermedia`  
  Recursos y duración deben ajustarse al workload y límites del producto.

- **Variables de entorno**  
  *Familia:* `secuencia operativa`  
  Configuración no secreta se inyecta por entorno y no debe codificarse en fuente.

- **Secrets**  
  *Familia:* `validación y decisión`  
  Integración con Secret Manager monta valores solo en funciones autorizadas.

- **Admin SDK**  
  *Familia:* `ida y vuelta`  
  Dentro de backend confiable accede a Auth, Firestore, Storage y Messaging con IAM.

- **Idempotencia de triggers**  
  *Familia:* `pasaporte del artefacto`  
  Eventos pueden entregarse más de una vez, por lo que efectos deben deduplicarse.

- **Retries**  
  *Familia:* `tabla de estados`  
  Reintentos recuperan fallos transitorios pero pueden amplificar side effects no idempotentes.

- **Logs estructurados**  
  *Familia:* `evidencia y latencia`  
  Campos y severidad facilitan búsqueda, alertas y correlación en Cloud Logging.

- **Emulador de Functions**  
  *Familia:* `capas internas`  
  Ejecuta handlers localmente y se integra con otros emulators.

- **Deploy selectivo**  
  *Familia:* `telar relacional`  
  --only functions:nombre reduce blast radius y tiempo de despliegue.

- **Traffic y revisiones**  
  *Familia:* `despacho de runtime`  
  2nd gen se apoya en Cloud Run y revisiones para administrar instancias desplegadas.


### 📑 Sección: Hosting y App Hosting (16 conceptos)

- **Firebase Hosting**  
  *Familia:* `capas internas`  
  CDN global para sitios estáticos, SPAs y contenido dinámico conectado a backends.

- **Public directory**  
  *Familia:* `diagnóstico operativo`  
  Define qué artefactos locales se suben como contenido estático.

- **Rewrites**  
  *Familia:* `flujo de interfaz`  
  Envían rutas a index.html, Functions, Cloud Run u otros backends.

- **Redirects**  
  *Familia:* `topología y tráfico`  
  Responden con redirecciones HTTP permanentes o temporales desde configuración.

- **Headers**  
  *Familia:* `espectro de verificación`  
  Configuran cache control, seguridad, CORS y metadata por patrones de archivo.

- **Clean URLs y trailing slash**  
  *Familia:* `validación y decisión`  
  Normalizan presentación de rutas y deben coordinarse con framework y SEO.

- **Preview channels**  
  *Familia:* `tejido de eventos`  
  Crean URLs temporales para revisar cambios antes del canal live.

- **Multiple sites**  
  *Familia:* `matriz de señales`  
  Un proyecto puede servir varios dominios con targets y configuraciones separadas.

- **Custom domains**  
  *Familia:* `cuadrícula paralela`  
  Hosting aprovisiona certificados y verifica DNS para dominios propios.

- **Cache en CDN**  
  *Familia:* `memoria intermedia`  
  Archivos con hashes pueden ser inmutables; HTML suele usar políticas más cortas.

- **Deploy atómico**  
  *Familia:* `pasaporte del artefacto`  
  Una release de Hosting cambia el conjunto de archivos como una unidad y puede revertirse.

- **App Hosting**  
  *Familia:* `capas internas`  
  Servicio administrado para aplicaciones web dinámicas con builds, rollout y soporte de frameworks.

- **Integración con GitHub**  
  *Familia:* `diagnóstico operativo`  
  App Hosting construye desde ramas y commits conectados con configuración de backend.

- **Backends de App Hosting**  
  *Familia:* `mapa de memoria`  
  Agrupan repositorio, región, runtime, secrets, rollouts y dominios.

- **SSR y frameworks**  
  *Familia:* `flujo de interfaz`  
  Next.js y Angular pueden renderizar dinámicamente mientras assets se distribuyen por edge.

- **Rollback de Hosting**  
  *Familia:* `pasaporte del artefacto`  
  Releases previas pueden restaurarse sin reconstruir artefactos.


### 📑 Sección: Mensajería, configuración y calidad (25 conceptos)

- **Firebase Cloud Messaging**  
  *Familia:* `espectro de verificación`  
  Envía notificaciones o data messages a Android, iOS y web mediante tokens y topics.

- **Registration token**  
  *Familia:* `validación y decisión`  
  Identifica una instancia de app y puede rotar, por lo que el backend debe actualizarlo.

- **Notification messages**  
  *Familia:* `propagación de eventos`  
  El sistema puede mostrar una notificación cuando la app está en background.

- **Data messages**  
  *Familia:* `espectro de verificación`  
  La aplicación interpreta el payload y controla comportamiento según plataforma y estado.

- **Topics**  
  *Familia:* `validación y decisión`  
  Agrupan suscripciones amplias; no deben usarse como control de acceso privado.

- **Condition targeting**  
  *Familia:* `flujo de transformación`  
  Combina topics para seleccionar audiencias con límites de expresión.

- **Foreground y background**  
  *Familia:* `espectro de verificación`  
  Entrega y callbacks cambian según estado, plataforma y permisos.

- **APNs y Web Push**  
  *Familia:* `validación y decisión`  
  FCM integra proveedores de plataforma y requiere credenciales o claves específicas.

- **Remote Config**  
  *Familia:* `configuración declarativa`  
  Entrega parámetros remotos con defaults locales, fetch, activate y condiciones.

- **Fetch interval**  
  *Familia:* `espectro de verificación`  
  Evita solicitudes excesivas y puede reducirse durante desarrollo.

- **Real-time Remote Config**  
  *Familia:* `contratos coordinados`  
  Actualiza parámetros activos mediante un canal en tiempo real en SDKs compatibles.

- **Feature flags**  
  *Familia:* `evidencia y latencia`  
  Parámetros habilitan rollout gradual, kill switches y experimentos sin publicar binario.

- **A/B Testing**  
  *Familia:* `espectro de verificación`  
  Usa Remote Config o Notifications y Analytics para comparar variantes y objetivos.

- **Google Analytics for Firebase**  
  *Familia:* `validación y decisión`  
  Registra eventos, propiedades y audiencias para comprender comportamiento de producto.

- **Eventos recomendados**  
  *Familia:* `propagación de eventos`  
  Nombres y parámetros estándar mejoran reportes y compatibilidad con audiencias.

- **DebugView**  
  *Familia:* `evidencia y latencia`  
  Muestra eventos de dispositivos de desarrollo casi en tiempo real.

- **Crashlytics**  
  *Familia:* `mapa de memoria`  
  Agrupa crashes y non-fatal errors por stack, versión, dispositivo y señales de regresión.

- **Symbolication**  
  *Familia:* `despacho de runtime`  
  dSYM, mapping files y sourcemaps convierten direcciones minificadas en stacks legibles.

- **Custom keys y logs**  
  *Familia:* `evidencia y latencia`  
  Añaden contexto limitado y sin datos sensibles a un reporte de crash.

- **Performance Monitoring**  
  *Familia:* `espectro de verificación`  
  Mide startup, network traces y custom traces desde clientes.

- **Custom traces**  
  *Familia:* `diagnóstico operativo`  
  Delimitan operaciones y métricas específicas del producto.

- **Test Lab**  
  *Familia:* `validación y decisión`  
  Ejecuta apps en dispositivos físicos o virtuales y recopila resultados, videos y crashes.

- **App Distribution**  
  *Familia:* `espectro de verificación`  
  Distribuye builds previos a testers y administra grupos, releases y feedback.

- **In-App Messaging**  
  *Familia:* `tabla de estados`  
  Muestra campañas dentro de la app dirigidas por Analytics y contexto de uso.

- **Dynamic Links deprecation**  
  *Familia:* `validación y decisión`  
  Las soluciones de deep linking deben planear migración cuando un producto deja de estar disponible.


### 📑 Sección: Reglas, App Check, administración y operación (29 conceptos)

- **Security Rules**  
  *Familia:* `comparativa técnica`  
  Lenguaje declarativo que autoriza cada lectura o escritura de clientes no privilegiados.

- **request.auth**  
  *Familia:* `ida y vuelta`  
  Contiene UID, provider y custom claims del token autenticado.

- **resource y request.resource**  
  *Familia:* `topología y tráfico`  
  Representan datos existentes y propuestos para validar transiciones.

- **Functions de reglas**  
  *Familia:* `capas internas`  
  Reutilizan condiciones y mantienen políticas complejas legibles dentro de límites del lenguaje.

- **get y exists**  
  *Familia:* `validación y decisión`  
  Consultan documentos adicionales durante autorización y consumen un presupuesto limitado.

- **Rules are not filters**  
  *Familia:* `comparativa técnica`  
  Una query debe garantizar que todos sus posibles resultados cumplen la regla.

- **Validación de esquema**  
  *Familia:* `tabla de estados`  
  Reglas comprueban campos permitidos, tipos, ownership y cambios inmutables.

- **Tests de reglas**  
  *Familia:* `espectro de verificación`  
  Casos permitidos y denegados se ejecutan en emulators como parte de CI.

- **Deploy de reglas**  
  *Familia:* `validación y decisión`  
  Reglas versionadas se revisan, prueban y publican junto con índices y aplicación.

- **App Check**  
  *Familia:* `evidencia y latencia`  
  Attesta que tráfico proviene de una app o entorno reconocido y complementa Auth y Rules.

- **Providers de App Check**  
  *Familia:* `espectro de verificación`  
  Play Integrity, App Attest, DeviceCheck, reCAPTCHA Enterprise y debug provider varían por plataforma.

- **Enforcement**  
  *Familia:* `capas internas`  
  Puede monitorearse primero y activarse por producto cuando los clientes válidos ya envían tokens.

- **Replay protection**  
  *Familia:* `tejido de eventos`  
  En flujos compatibles reduce reutilización de tokens interceptados con costo adicional.

- **Admin SDK credentials**  
  *Familia:* `topología y tráfico`  
  Application Default Credentials y service accounts otorgan acceso privilegiado mediante IAM.

- **Principio de mínimo privilegio**  
  *Familia:* `matriz de señales`  
  Servicios backend deben usar roles específicos en lugar de credenciales owner amplias.

- **Custom claims administrados**  
  *Familia:* `evidencia y latencia`  
  Solo un entorno privilegiado debe asignar roles y luego forzar refresh del token cliente.

- **Firebase Extensions**  
  *Familia:* `pasaporte del artefacto`  
  Paquetes instalables despliegan funciones y recursos configurados para casos comunes.

- **Data Connect**  
  *Familia:* `consulta e índice`  
  Servicio relacional administrado integra PostgreSQL, schemas y SDKs tipados para aplicaciones.

- **BigQuery export**  
  *Familia:* `jerarquía y dependencias`  
  Analytics, Crashlytics, Performance y otros productos pueden exportar eventos para análisis avanzado.

- **Cloud Logging y alertas**  
  *Familia:* `diagnóstico operativo`  
  Funciones y servicios producen logs y métricas que deben alimentar dashboards y notificaciones.

- **Usage y quotas**  
  *Familia:* `planificación de trabajo`  
  Lecturas, escrituras, almacenamiento, egress, invocaciones y mensajes tienen cuotas y precios distintos.

- **Budgets**  
  *Familia:* `capas internas`  
  Alertas de facturación detectan crecimiento, pero no detienen automáticamente todos los cargos.

- **Retención y privacidad**  
  *Familia:* `consulta e índice`  
  Datos personales, analytics, logs y backups necesitan políticas de minimización y borrado.

- **Backups de Firestore**  
  *Familia:* `secuencia operativa`  
  Backups administrados y exports protegen datos, pero deben probarse restores y permisos.

- **PITR de Firestore**  
  *Familia:* `pasaporte del artefacto`  
  Point-in-time recovery conserva historial dentro de una ventana configurada para recuperar estados previos.

- **Import y export**  
  *Familia:* `flujo de interfaz`  
  Operaciones administradas mueven colecciones completas y requieren IAM, buckets y costo planificado.

- **Migrations**  
  *Familia:* `evidencia y latencia`  
  Scripts idempotentes, checkpoints y dual-read evitan bloquear clientes durante cambios de modelo.

- **Multi-project CI/CD**  
  *Familia:* `análisis y emisión`  
  Aliases, service identities y approvals reducen deploys accidentales al proyecto equivocado.

- **Observabilidad de costo**  
  *Familia:* `diagnóstico operativo`  
  Dashboards deben relacionar uso por producto con usuarios, features y patrones de consulta.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Learn Firebase fundamentals](https://firebase.google.com/docs/guides)** (`tutorial` | Nivel: `beginner`): 
- **[Add Firebase to a JavaScript project](https://firebase.google.com/docs/web/setup)** (`official-docs` | Nivel: `intermediate`): 
- **[Unit-test Firebase Security Rules](https://firebase.google.com/docs/rules/unit-tests)** (`reference` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
