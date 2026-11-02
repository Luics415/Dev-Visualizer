# Backend (Back)

> **Arquitectura, seguridad, persistencia, mensajería y confiabilidad.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `backend` |
| **Grupo Arquitectonico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `backend` |
| **Total de Conceptos** | **96 conceptos** |
| **Capitulos / Secciones** | **9 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/backend)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/backend-en-accion)



---

## Catalogo Sistematico de Conceptos (96)

### Seccion: Fundamentos del backend (10 conceptos)

- **Qué hace un backend**  
  *Familia:* `diagnóstico operativo`  
  Recibe solicitudes, aplica reglas, coordina datos y devuelve respuestas confiables.

- **Cliente y servidor**  
  *Familia:* `ida y vuelta`  
  Separa quien inicia la solicitud de quien posee recursos y lógica.

- **Proceso y runtime**  
  *Familia:* `planificación de trabajo`  
  Ejecuta el código del servidor dentro de un proceso con memoria, recursos y ciclo de vida.

- **Node.js**  
  *Familia:* `memoria intermedia`  
  Usa un runtime JavaScript orientado a I/O asíncrono y APIs de sistema.

- **Event loop del servidor**  
  *Familia:* `cola y consumidor`  
  Coordina timers, I/O, callbacks y microtasks mientras el proceso permanece activo.

- **Concurrencia y paralelismo**  
  *Familia:* `secuencia operativa`  
  Distingue muchas operaciones en progreso de trabajo ejecutado simultáneamente.

- **Puertos y sockets**  
  *Familia:* `topología y tráfico`  
  Expone un proceso en una dirección y puerto para aceptar conexiones.

- **Configuración de entorno**  
  *Familia:* `configuración declarativa`  
  Separa valores por despliegue sin codificar secretos ni URLs dentro del código.

- **Dependencias y paquetes**  
  *Familia:* `jerarquía y dependencias`  
  Gestiona librerías, versiones, lockfiles y superficie de suministro.

- **Ciclo de vida del servidor**  
  *Familia:* `ciclo de vida`  
  Incluye arranque, readiness, tráfico, señales y apagado ordenado.


### Seccion: HTTP, rutas y middleware (11 conceptos)

- **Servidor HTTP**  
  *Familia:* `ida y vuelta`  
  Convierte bytes de una conexión en mensajes de solicitud y respuesta.

- **Request**  
  *Familia:* `flujo de transformación`  
  Contiene método, URL, headers, cuerpo y contexto de transporte.

- **Response**  
  *Familia:* `topología y tráfico`  
  Define status, headers y cuerpo que forman el contrato de salida.

- **Routing**  
  *Familia:* `ecosistema coordinado`  
  Relaciona método y patrón de URL con un handler.

- **Parámetros de ruta**  
  *Familia:* `árbol de recursos`  
  Extrae identidad del recurso desde segmentos de la URL.

- **Query params**  
  *Familia:* `consulta e índice`  
  Representan filtros, orden, búsqueda y paginación opcionales.

- **Middleware**  
  *Familia:* `tabla de estados`  
  Ejecuta una cadena de funciones antes o después del handler.

- **Orden del middleware**  
  *Familia:* `máquina de estados`  
  Determina qué funciones ven la solicitud y en qué secuencia.

- **Controladores**  
  *Familia:* `superficie de aplicación`  
  Traducen HTTP a comandos o consultas del dominio.

- **Serialización**  
  *Familia:* `configuración declarativa`  
  Transforma objetos internos en representaciones seguras para el cliente.

- **CORS**  
  *Familia:* `validación y decisión`  
  Controla qué orígenes de navegador pueden leer respuestas mediante headers.


### Seccion: Validación, errores y contratos (10 conceptos)

- **DTOs y schemas**  
  *Familia:* `comparativa técnica`  
  Describen la forma esperada de entrada y salida.

- **Validación de entrada**  
  *Familia:* `tabla de estados`  
  Rechaza datos incompletos, mal formados o fuera de rango antes del dominio.

- **Transformación y coerción**  
  *Familia:* `jerarquía y dependencias`  
  Convierte strings de HTTP a números, fechas o enums de forma explícita.

- **Errores de dominio**  
  *Familia:* `evidencia y latencia`  
  Representan reglas incumplidas sin depender de HTTP.

- **Manejo centralizado de errores**  
  *Familia:* `diagnóstico operativo`  
  Convierte excepciones conocidas en respuestas consistentes y registra las desconocidas.

- **Problem Details**  
  *Familia:* `contratos coordinados`  
  Devuelve errores estructurados con tipo, título, status y detalles.

- **Códigos de estado**  
  *Familia:* `máquina de estados`  
  Comunican la categoría del resultado sin depender del cuerpo.

- **Content negotiation**  
  *Familia:* `configuración declarativa`  
  Selecciona representación según Accept y Content-Type.

- **Versionado de contratos**  
  *Familia:* `cola y consumidor`  
  Permite evolucionar APIs sin romper consumidores existentes.

- **OpenAPI**  
  *Familia:* `ciclo de vida`  
  Describe rutas, schemas, seguridad y respuestas en un contrato legible por herramientas.


### Seccion: Arquitectura y dominio (11 conceptos)

- **Capas de aplicación**  
  *Familia:* `capas internas`  
  Separa transporte, casos de uso, dominio e infraestructura.

- **Servicios de aplicación**  
  *Familia:* `acumulación de recursos`  
  Orquestan un caso de uso y coordinan puertos externos.

- **Entidades y value objects**  
  *Familia:* `propagación de eventos`  
  Modelan identidad, invariantes y conceptos del dominio.

- **Invariantes**  
  *Familia:* `aislamiento sobre host`  
  Condiciones que siempre deben cumplirse antes y después de una operación.

- **Repositorios**  
  *Familia:* `evidencia y latencia`  
  Ocultan detalles de persistencia detrás de una interfaz orientada al dominio.

- **Inyección de dependencias**  
  *Familia:* `jerarquía y dependencias`  
  Entrega implementaciones desde fuera para reducir acoplamiento y facilitar pruebas.

- **Módulos**  
  *Familia:* `contratos coordinados`  
  Agrupan capacidades cohesivas y controlan qué se exporta.

- **Arquitectura hexagonal**  
  *Familia:* `anatomía del concepto`  
  Conecta el dominio con adaptadores mediante puertos.

- **Monolito modular**  
  *Familia:* `flujo de ejecución`  
  Despliega una unidad con límites internos explícitos.

- **Microservicios**  
  *Familia:* `superficie de aplicación`  
  Divide capacidades desplegables con datos y fallos independientes.

- **BFF y API Gateway**  
  *Familia:* `planificación de trabajo`  
  Adapta múltiples servicios a las necesidades de un cliente y centraliza políticas de borde.


### Seccion: Autenticación, autorización y seguridad (12 conceptos)

- **Hash de contraseñas**  
  *Familia:* `validación y decisión`  
  Almacena verificadores lentos y salados, nunca contraseñas reversibles.

- **Sesiones**  
  *Familia:* `comparativa técnica`  
  Mantienen identidad del usuario mediante un id opaco asociado a estado del servidor.

- **Tokens**  
  *Familia:* `tabla de estados`  
  Transportan claims firmados y requieren expiración, validación y rotación.

- **Refresh tokens**  
  *Familia:* `flujo de ejecución`  
  Renuevan credenciales cortas y deben rotarse o revocarse de forma segura.

- **Autenticación**  
  *Familia:* `configuración declarativa`  
  Comprueba quién realiza la solicitud.

- **Autorización**  
  *Familia:* `consulta e índice`  
  Evalúa permisos sobre una acción y un recurso concreto.

- **Roles, permisos y políticas**  
  *Familia:* `capas internas`  
  Modelan RBAC, ABAC o reglas específicas del dominio.

- **Validación de propiedad**  
  *Familia:* `flujo de transformación`  
  Asegura que el usuario puede acceder a ese objeto específico.

- **Protección contra inyección**  
  *Familia:* `propagación de eventos`  
  Mantiene datos separados de código mediante parámetros y APIs seguras.

- **Headers de seguridad**  
  *Familia:* `ida y vuelta`  
  Configura políticas del navegador como CSP, HSTS y protección de framing.

- **Rate limiting**  
  *Familia:* `evidencia y latencia`  
  Limita consumo por identidad, ruta o costo para proteger capacidad.

- **Gestión de secretos**  
  *Familia:* `memoria intermedia`  
  Mantiene credenciales fuera del repositorio y rota accesos comprometidos.


### Seccion: Persistencia, caché y consistencia (10 conceptos)

- **Conexiones a base de datos**  
  *Familia:* `consulta e índice`  
  Reutiliza un pool limitado en lugar de abrir una conexión por solicitud.

- **Transacciones**  
  *Familia:* `acumulación de recursos`  
  Agrupan operaciones que deben confirmar o revertir juntas.

- **ORM y query builder**  
  *Familia:* `análisis y emisión`  
  Traducen modelos o expresiones a SQL con distintos niveles de abstracción.

- **N+1 queries**  
  *Familia:* `capas internas`  
  Detecta múltiples consultas repetidas causadas por cargar relaciones una a una.

- **Caché**  
  *Familia:* `memoria intermedia`  
  Guarda resultados costosos con una política de clave, expiración e invalidación.

- **Cache-aside**  
  *Familia:* `comparativa técnica`  
  La aplicación consulta caché, carga origen en miss y escribe la copia.

- **Write-through y write-behind**  
  *Familia:* `contratos coordinados`  
  Actualizan caché y origen de forma síncrona o diferida.

- **Bloqueos distribuidos**  
  *Familia:* `planificación de trabajo`  
  Coordinan acceso exclusivo entre procesos con expiración y ownership.

- **Consistencia eventual**  
  *Familia:* `ecosistema coordinado`  
  Acepta retraso entre escrituras y lecturas de proyecciones o réplicas.

- **Idempotencia**  
  *Familia:* `cola y consumidor`  
  Hace seguro repetir comandos cuando la red no confirma el primer resultado.


### Seccion: Procesamiento asíncrono y eventos (10 conceptos)

- **Jobs en background**  
  *Familia:* `flujo de transformación`  
  Mueve trabajo lento fuera de la respuesta síncrona.

- **Colas**  
  *Familia:* `planificación de trabajo`  
  Desacoplan productores y consumidores y conservan mensajes pendientes.

- **Acknowledgement**  
  *Familia:* `análisis y emisión`  
  Confirma procesamiento para que el broker elimine o reentregue el mensaje.

- **At-least-once delivery**  
  *Familia:* `cola y consumidor`  
  Permite duplicados para evitar pérdida y exige consumidores idempotentes.

- **Dead-letter queue**  
  *Familia:* `flujo de ejecución`  
  Aparta mensajes que exceden reintentos para análisis o corrección.

- **Eventos de integración**  
  *Familia:* `propagación de eventos`  
  Comunican hechos entre módulos o servicios sin exponer su modelo interno.

- **Outbox pattern**  
  *Familia:* `ecosistema coordinado`  
  Guarda cambio de negocio y evento en la misma transacción antes de publicar.

- **Webhooks**  
  *Familia:* `topología y tráfico`  
  Notifican a sistemas externos mediante HTTP firmado y reintentos.

- **Cron y scheduling**  
  *Familia:* `acumulación de recursos`  
  Programa tareas periódicas con timezone, solapamiento y ownership definidos.

- **Streaming y backpressure**  
  *Familia:* `validación y decisión`  
  Procesa datos por partes y regula productores cuando consumidores van más lento.


### Seccion: Confiabilidad, observabilidad y rendimiento (12 conceptos)

- **Timeouts**  
  *Familia:* `análisis y emisión`  
  Ponen un límite a cada dependencia para no esperar indefinidamente.

- **Retries con backoff**  
  *Familia:* `anatomía del concepto`  
  Reintentan fallos transitorios espaciando intentos y agregando jitter.

- **Circuit breaker**  
  *Familia:* `comparativa técnica`  
  Deja de llamar temporalmente a una dependencia que falla repetidamente.

- **Bulkhead**  
  *Familia:* `secuencia operativa`  
  Aísla pools o colas para que una dependencia lenta no consuma toda la capacidad.

- **Health, liveness y readiness**  
  *Familia:* `ciclo de vida`  
  Distingue proceso vivo de instancia lista para recibir tráfico.

- **Logging estructurado**  
  *Familia:* `diagnóstico operativo`  
  Registra eventos como datos con contexto estable.

- **Correlation ID**  
  *Familia:* `capas internas`  
  Propaga un identificador para unir logs de una solicitud entre capas y servicios.

- **Métricas**  
  *Familia:* `evidencia y latencia`  
  Miden volumen, errores, latencia y saturación.

- **Tracing distribuido**  
  *Familia:* `máquina de estados`  
  Representa una solicitud como spans relacionados entre servicios.

- **Profiling**  
  *Familia:* `jerarquía y dependencias`  
  Identifica CPU, memoria, bloqueos y hot paths bajo carga.

- **Load shedding**  
  *Familia:* `validación y decisión`  
  Rechaza trabajo temprano cuando la capacidad está agotada.

- **SLO y error budget**  
  *Familia:* `tabla de estados`  
  Define un objetivo medible de confiabilidad y cuánto fallo tolera el producto.


### Seccion: Pruebas, despliegue y escalado (10 conceptos)

- **Pruebas unitarias**  
  *Familia:* `análisis y emisión`  
  Aíslan funciones, servicios y reglas de dominio.

- **Pruebas de integración**  
  *Familia:* `superficie de aplicación`  
  Verifican adaptadores reales como base de datos, router o broker.

- **Pruebas end-to-end**  
  *Familia:* `secuencia operativa`  
  Ejercitan el sistema desplegado desde la interfaz pública.

- **Contract testing**  
  *Familia:* `cola y consumidor`  
  Comprueba compatibilidad entre consumidores y proveedores.

- **Build reproducible**  
  *Familia:* `flujo de transformación`  
  Produce el mismo artefacto desde código y lockfile controlados.

- **Contenedores**  
  *Familia:* `aislamiento sobre host`  
  Empaquetan proceso, runtime y dependencias con límites explícitos.

- **Despliegues graduales**  
  *Familia:* `ciclo de vida`  
  Reduce riesgo con rolling, canary o blue/green.

- **Escalado horizontal**  
  *Familia:* `acumulación de recursos`  
  Añade instancias y distribuye tráfico mediante un balanceador.

- **Graceful shutdown**  
  *Familia:* `árbol de recursos`  
  Deja de aceptar tráfico, termina trabajo y cierra recursos antes de salir.

- **Migraciones y compatibilidad**  
  *Familia:* `flujo de ejecución`  
  Coordina cambios de código y esquema para permitir despliegues sin downtime.



## Referencias Bibliograficas y Documentacion Oficial
- **[Introduction to server-side programming](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction)** (`tutorial` | Nivel: `beginner`): 
- **[OpenTelemetry Documentation](https://opentelemetry.io/docs/)** (`official-docs` | Nivel: `intermediate`): 
- **[OWASP Application Security Verification Standard](https://owasp.org/projects/asvs)** (`specification` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
