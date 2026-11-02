# 📘 [n8n] n8n

> **Workflows, credenciales, datos, reintentos, subflujos y operación.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `n8n` |
| **Grupo Arquitectónico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `n8n` |
| **Total de Conceptos** | **55 conceptos** |
| **Capítulos / Secciones** | **11 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/n8n)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/n8n-en-accion)**


## 🔬 Caso Práctico en Acción: n8n en acción

> **Caso integrado · Solicitud enriquecida y aprobada:** Un webhook recibe una solicitud de reparación, valida y enriquece datos, requiere aprobación humana para casos costosos y enruta cada resultado con reintentos y un workflow de errores.  
> Cada ejecución termina en una ruta conocida, no duplica tickets, protege credenciales y deja evidencia suficiente para reanudar o investigar.

### Fases de Ejecución:
1. **Recibir webhook** (Respuesta y autenticidad): `POST /repair-request` → solicitud aceptada. *El flujo responde pronto y continúa con una identidad estable.*
2. **Normalizar datos** (Un contrato interno): `Edit Fields → normalize phone/address` → item canónico. *Reducir el payload limita acoplamiento y exposición de datos.*
3. **Enriquecer** (Servicio externo con límites): `HTTP Request → inventory API` → contexto agregado. *El nodo no registra token ni reintenta errores permanentes.*
4. **Detectar duplicado** (Clave antes del efecto): `lookup(request.idempotencyKey)` → ejecución idempotente. *La clave se consulta antes de cualquier efecto irreversible.*
5. **Solicitar aprobación** (Humano en la excepción): `cost > limit → Wait for approval` → decisión trazable. *La espera persiste estado sin ocupar un worker.*
6. **Manejar timeout** (Toda espera termina): `on timeout → manual-review queue` → ruta recuperada. *El timeout es una transición de negocio, no un error silencioso.*
7. **Crear y enrutar** (Efecto con confirmación): `Create ticket → Switch(category)` → trabajo asignado. *La confirmación del sistema destino se guarda antes de continuar.*
8. **Centralizar fallos** (Error workflow con contexto): `Error Trigger → redact → alert` → automatización operable. *La ruta de error conserva evidencia y un procedimiento de recuperación sin exponer datos sensibles.*


---

## 📚 Desglose Exhaustivo de Conceptos (55)

### 📑 Sección: Modelo de ejecución (5 conceptos)

- **Workflows y executions**  
  *Familia:* `workflow y decisiones`  
  Distingue la definición versionada de cada recorrido concreto con datos y estado.

- **Nodes y connections**  
  *Familia:* `flujo de ejecución`  
  Representan operaciones y transferencia de items entre puertos.

- **Items**  
  *Familia:* `validación y decisión`  
  Transportan objetos binarios o JSON y conservan vinculación entre entradas y salidas.

- **Expressions**  
  *Familia:* `workflow y decisiones`  
  Calculan parámetros desde contexto sin convertir toda lógica en cadenas opacas.

- **Pinned data**  
  *Familia:* `flujo de ejecución`  
  Facilita diseño manual pero nunca debe confundirse con entrada de producción.


### 📑 Sección: Entrada y contratos (5 conceptos)

- **Webhook trigger**  
  *Familia:* `validación y decisión`  
  Expone una entrada HTTP con métodos, paths y respuesta definidos.

- **Schedule trigger**  
  *Familia:* `workflow y decisiones`  
  Inicia recurrencia considerando zona horaria y ejecuciones solapadas.

- **App triggers**  
  *Familia:* `flujo de ejecución`  
  Reciben eventos mediante polling o suscripciones según la integración.

- **Validación de esquema**  
  *Familia:* `validación y decisión`  
  Rechaza temprano datos incompletos y conserva una causa legible.

- **Respond to Webhook**  
  *Familia:* `workflow y decisiones`  
  Controla cuándo y con qué contrato termina la solicitud inicial.


### 📑 Sección: Datos y control (5 conceptos)

- **Edit Fields**  
  *Familia:* `flujo de ejecución`  
  Proyecta y renombra datos sin arrastrar secretos o payload completo.

- **If y Switch**  
  *Familia:* `validación y decisión`  
  Dirigen items por condiciones mutuamente comprensibles.

- **Merge**  
  *Familia:* `workflow y decisiones`  
  Sincroniza ramas por posición, clave o disponibilidad con semántica explícita.

- **Loop Over Items**  
  *Familia:* `flujo de ejecución`  
  Acota lotes y evita saturar un servicio remoto.

- **Code node**  
  *Familia:* `validación y decisión`  
  Resuelve transformación puntual sin esconder un sistema completo en JavaScript.


### 📑 Sección: Composición y personas (5 conceptos)

- **Execute Sub-workflow**  
  *Familia:* `workflow y decisiones`  
  Reutiliza una capacidad con contrato de entrada y salida.

- **Wait**  
  *Familia:* `flujo de ejecución`  
  Pausa hasta tiempo o callback sin mantener un proceso bloqueado.

- **Aprobación humana**  
  *Familia:* `validación y decisión`  
  Presenta contexto mínimo y reanuda una decisión autenticada.

- **Templates y naming**  
  *Familia:* `workflow y decisiones`  
  Comunican intención, ownership y riesgo a quien operará el flujo.

- **Versionado y promoción**  
  *Familia:* `flujo de ejecución`  
  Mueve definiciones y configuración entre ambientes con revisión.


### 📑 Sección: Credenciales y seguridad (5 conceptos)

- **Credentials**  
  *Familia:* `validación y decisión`  
  Separa autenticación de parámetros visibles del nodo.

- **OAuth2**  
  *Familia:* `workflow y decisiones`  
  Renueva tokens y limita scopes según la integración.

- **Variables y secrets**  
  *Familia:* `flujo de ejecución`  
  Configura ambientes sin incrustar valores en el workflow exportado.

- **Least privilege**  
  *Familia:* `validación y decisión`  
  Entrega a cada conexión solo operaciones y datos necesarios.

- **Datos sensibles**  
  *Familia:* `workflow y decisiones`  
  Reduce persistencia, masking y acceso a executions con payload real.


### 📑 Sección: Errores y confiabilidad (5 conceptos)

- **Retry On Fail**  
  *Familia:* `flujo de ejecución`  
  Reintenta fallos transitorios con espera y máximo acotados.

- **Error workflows**  
  *Familia:* `validación y decisión`  
  Centralizan alerta y evidencia cuando una ejecución falla.

- **Continue On Fail**  
  *Familia:* `workflow y decisiones`  
  Convierte un error esperado en dato sin ocultar fallos críticos.

- **Idempotency keys**  
  *Familia:* `flujo de ejecución`  
  Evitan que reintentos creen dos tickets, pagos o mensajes.

- **Compensación**  
  *Familia:* `validación y decisión`  
  Deshace o neutraliza pasos completados cuando no existe transacción global.


### 📑 Sección: Operación y escala (5 conceptos)

- **Queue mode**  
  *Familia:* `workflow y decisiones`  
  Separa main y workers mediante una cola compartida.

- **Concurrency**  
  *Familia:* `flujo de ejecución`  
  Limita ejecuciones y llamadas para proteger dependencias.

- **Execution retention**  
  *Familia:* `validación y decisión`  
  Conserva evidencia útil y elimina payload según política.

- **Monitoring**  
  *Familia:* `workflow y decisiones`  
  Observa latencia, errores, backlog y rutas de negocio.

- **Runbooks**  
  *Familia:* `flujo de ejecución`  
  Define replay, recuperación, escalamiento y responsable por workflow.


### 📑 Sección: Transformación avanzada y manipulación de datos (5 conceptos)

- **JMESPath y filtrado de colecciones**  
  *Familia:* `árbol de recursos`  
  Extrae estructuras complejas de arrays sin escribir bucles manuales de código.

- **Transformación de binarios y archivos**  
  *Familia:* `jerarquía y dependencias`  
  Descarga, comprime, cifra o convierte archivos de imagen y PDF dentro del flujo.

- **Agregación y separación de listas (Split in Batches)**  
  *Familia:* `consulta e índice`  
  Agrupa y divide conjuntos masivos de items para procesar lotes secuenciales.

- **Expresiones regulares y reemplazo de cadenas**  
  *Familia:* `telar relacional`  
  Normaliza números de teléfono, correos y fechas usando utilidades regex nativas.

- **Variables globales y almacenamiento estático**  
  *Familia:* `flujo de transformación`  
  Persiste contadores o marcas de agua entre distintas ejecuciones del workflow.


### 📑 Sección: Integración con Inteligencia Artificial y LLMs (n8n AI) (5 conceptos)

- **AI Agent nodes y orquestación**  
  *Familia:* `workflow y decisiones`  
  Conecta modelos de lenguaje para razonar sobre herramientas y decisiones dinámicas.

- **Bases vectoriales y embeddings**  
  *Familia:* `cuadrícula paralela`  
  Inserta y consulta vectores en bases vectoriales para flujos de búsqueda semántica.

- **Memory buffers y conversación**  
  *Familia:* `memoria intermedia`  
  Mantiene historial de diálogo entre invocaciones de chat usando sesiones de usuario.

- **Tool calling con nodos personalizados**  
  *Familia:* `workflow y decisiones`  
  Permite al modelo de IA invocar subworkflows o consultas SQL como herramientas externas.

- **Structured Output parsers**  
  *Familia:* `topología y tráfico`  
  Fuerza respuestas de IA en esquemas JSON validados listos para ser consumidos por el flujo.


### 📑 Sección: Gobierno empresarial y cumplimiento (5 conceptos)

- **Control de acceso basado en roles (RBAC)**  
  *Familia:* `flujo de interfaz`  
  Asigna permisos de lectura, edición y ejecución por proyectos y equipos de trabajo.

- **Auditoría de cambios y Git sync**  
  *Familia:* `evidencia y latencia`  
  Sincroniza definiciones de workflows automáticamente con repositorios Git externos.

- **Data Masking y retención de privacidad**  
  *Familia:* `mapa de memoria`  
  Oculta información personal identificable en los registros de ejecución.

- **Single Sign-On (SSO / SAML)**  
  *Familia:* `secuencia operativa`  
  Centraliza autenticación corporativa con proveedores de identidad reconocidos.

- **Políticas de cuotas y limitación de tasa**  
  *Familia:* `validación y decisión`  
  Restringe el consumo de ejecuciones por departamento para evitar sobrecostes de infraestructura.


### 📑 Sección: Desarrollo de nodos y extensiones de la comunidad (5 conceptos)

- **Node Builder CLI**  
  *Familia:* `análisis y emisión`  
  Genera esqueletos de nodos comunitarios con TypeScript y estándares de empaquetado npm.

- **Diseño de interfaces declarativas de nodo**  
  *Familia:* `workflow y decisiones`  
  Define propiedades, opciones desplegables y dependencias visuales en el editor.

- **Autenticación de nodos personalizados**  
  *Familia:* `flujo de ejecución`  
  Implementa flujos OAuth2 o autenticación básica con almacenamiento seguro de tokens.

- **Pruebas unitarias de nodos con Vitest**  
  *Familia:* `validación y decisión`  
  Valida la ejecución y manejo de errores de cada nodo antes de publicarlo.

- **Publicación en el registro de la comunidad**  
  *Familia:* `mapa de memoria`  
  Distribuye extensiones verificadas para instalación con un clic en instancias de n8n.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Build your first workflow](https://docs.n8n.io/build-your-first-workflow)** (`tutorial` | Nivel: `beginner`): 
- **[Expressions versus data nodes](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes)** (`official-docs` | Nivel: `intermediate`): 
- **[n8n Security audit](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/run-security-audits)** (`official-docs` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
