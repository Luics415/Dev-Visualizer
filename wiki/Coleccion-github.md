# GitHub (GH)

> **Colaboración, PRs, gobierno, seguridad, comunidad y releases.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `github` |
| **Grupo Arquitectonico** | [Control de versiones y calidad](Grupo-Versioning) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `github` |
| **Total de Conceptos** | **60 conceptos** |
| **Capitulos / Secciones** | **10 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/github)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/github-en-accion)


## Estudio de Caso Practico: GitHub en acción

> **Caso integrado · Contribución gobernada:** Una colaboradora externa propone una mejora desde un issue hasta una release; la plataforma conecta conversación, permisos, checks y evidencia de seguridad.  
> La contribución llega a usuarios con autoría, revisión y controles verificables sin conceder acceso innecesario al repositorio.

### Fases de Ejecucion:
1. **Definir el problema** (Issue reproducible y acotado): `Issue #142 · filtro de anomalías` -> trabajo trazable. *El issue conserva por qué existe el cambio antes de discutir cómo implementarlo.*
2. **Preparar la contribución** (Fork y rama con contexto): `fork → feature/anomaly-filter` -> propuesta aislada. *El fork permite contribuir sin acceso de escritura al repositorio original.*
3. **Abrir un draft** (El diff puede conversar temprano): `Draft PR #188 · Fixes #142` -> feedback temprano. *Un draft expone decisiones sin afirmar que la propuesta está lista.*
4. **Ejecutar controles** (La evidencia aparece junto al diff): `tests + CodeQL + secret scanning` -> riesgo localizado. *Los controles automatizados informan; CI/CD explica cómo se construye el pipeline.*
5. **Corregir y revisar** (Conversación anclada al código): `review thread → commit fix` -> cambio aprobado. *La aprobación llega después de demostrar el comportamiento corregido.*
6. **Aplicar el ruleset** (La política decide si puede avanzar): `2 approvals + checks + signed commits` -> rama protegida. *La regla se evalúa igual para la interfaz y la API.*
7. **Integrar con autoría** (Squash conserva una unidad de cambio): `squash merge → main` -> cambio integrado. *La estrategia de merge expresa cómo se desea leer la historia principal.*
8. **Publicar la versión** (Tag, notas y attestation): `Release v2.5.0` -> release verificable. *La versión conecta necesidad, código, revisión, evidencia y artefacto.*


---

## Catalogo Sistematico de Conceptos (60)

### Seccion: Repositorio en GitHub (6 conceptos)

- **Repositorio, visibilidad y propietario**  
  *Familia:* `configuración declarativa`  
  Define la frontera administrativa de código, conversaciones, automatización y permisos.

- **Clone, fork y template**  
  *Familia:* `topología y tráfico`  
  Distingue una copia local, una red de contribución remota y un punto de partida sin historia compartida.

- **Rama predeterminada**  
  *Familia:* `secuencia operativa`  
  Establece el destino habitual de propuestas, comparación y automatizaciones.

- **README, licencia y comunidad**  
  *Familia:* `evidencia y latencia`  
  Explica propósito, derechos y expectativas antes de aceptar contribuciones.

- **Topics, releases y Packages**  
  *Familia:* `ciclo de vida`  
  Conecta descubrimiento, versiones publicadas y artefactos distribuibles.

- **GitHub Pages**  
  *Familia:* `ida y vuelta`  
  Publica contenido estático desde Actions sin convertir el repositorio en un servidor de aplicaciones.


### Seccion: Planificación y conversación (6 conceptos)

- **Issues**  
  *Familia:* `planificación de trabajo`  
  Conserva problema, contexto, criterios, responsables y enlaces con el cambio que lo resuelve.

- **Plantillas y formularios**  
  *Familia:* `cola y consumidor`  
  Pide evidencia estructurada sin impedir información inesperada necesaria para investigar.

- **Labels, milestones y assignees**  
  *Familia:* `secuencia operativa`  
  Clasifica trabajo, agrupa objetivos y hace visible la responsabilidad actual.

- **Projects**  
  *Familia:* `planificación de trabajo`  
  Representa vistas y campos sobre issues y pull requests sin duplicar su fuente de verdad.

- **Discussions**  
  *Familia:* `cola y consumidor`  
  Separa preguntas y conversación abierta del trabajo accionable de un issue.

- **Notificaciones y mentions**  
  *Familia:* `secuencia operativa`  
  Dirige atención de forma explícita evitando convertir cada evento en ruido.


### Seccion: Pull requests y revisión (6 conceptos)

- **Pull request como propuesta**  
  *Familia:* `ida y vuelta`  
  Compara dos referencias y reúne diff, commits, conversación, checks y decisión.

- **Draft y ready for review**  
  *Familia:* `flujo de transformación`  
  Comunica si el cambio todavía explora o ya solicita una evaluación formal.

- **Review comments y threads**  
  *Familia:* `planificación de trabajo`  
  Ancla observaciones a líneas y conserva si la conversación quedó resuelta.

- **Approve, request changes y comment**  
  *Familia:* `ida y vuelta`  
  Distingue decisión, bloqueo y comentario informativo según la política del repositorio.

- **CODEOWNERS**  
  *Familia:* `flujo de transformación`  
  Solicita revisión a responsables de rutas sin otorgar por sí solo permisos de escritura.

- **Merge, squash y rebase merge**  
  *Familia:* `secuencia operativa`  
  Elige cómo la propuesta se incorpora al grafo y qué historia queda visible.


### Seccion: Permisos y gobierno (6 conceptos)

- **Roles de repositorio y organización**  
  *Familia:* `evidencia y latencia`  
  Concede lectura, triage, escritura, mantenimiento o administración con el mínimo privilegio.

- **Protected branches y rulesets**  
  *Familia:* `jerarquía y dependencias`  
  Aplica políticas a referencias por patrón, repositorio u organización.

- **Required reviews**  
  *Familia:* `topología y tráfico`  
  Impide avanzar hasta recibir aprobaciones válidas y resolver cambios solicitados.

- **Required status checks**  
  *Familia:* `máquina de estados`  
  Convierte resultados externos en condiciones antes del merge.

- **Environments y approvals**  
  *Familia:* `workflow y decisiones`  
  Protege destinos sensibles con revisores, secretos y reglas específicas.

- **Audit log**  
  *Familia:* `evidencia y latencia`  
  Conserva evidencia administrativa para investigar cambios de acceso y configuración.


### Seccion: Seguridad y supply chain (6 conceptos)

- **Dependabot alerts y updates**  
  *Familia:* `espectro de verificación`  
  Detecta dependencias vulnerables y propone actualizaciones trazables.

- **Code scanning y CodeQL**  
  *Familia:* `análisis y emisión`  
  Analiza flujos de datos para encontrar clases de vulnerabilidad en el código.

- **Secret scanning y push protection**  
  *Familia:* `validación y decisión`  
  Detecta credenciales y puede bloquear que entren a la historia compartida.

- **Security advisories**  
  *Familia:* `espectro de verificación`  
  Coordina una corrección privada antes de publicar una vulnerabilidad.

- **Artifact attestations**  
  *Familia:* `evidencia y latencia`  
  Relaciona un artefacto con evidencia verificable sobre cómo fue construido.

- **Tokens, apps y OIDC**  
  *Familia:* `validación y decisión`  
  Elige credenciales de corta duración y permisos explícitos para integraciones.


### Seccion: Automatización y operación (6 conceptos)

- **GitHub Actions como capacidad**  
  *Familia:* `capas internas`  
  Reacciona a eventos con workflows; la teoría de pipelines vive en la colección CI/CD.

- **Webhooks**  
  *Familia:* `ida y vuelta`  
  Entrega eventos firmados a sistemas externos con reintentos y manejo de duplicados.

- **GitHub Apps**  
  *Familia:* `evidencia y latencia`  
  Instala integraciones con identidad propia y permisos granulares por repositorio.

- **REST y GraphQL API**  
  *Familia:* `consulta e índice`  
  Automatiza recursos de la plataforma respetando autenticación, paginación y límites.

- **Releases y notas**  
  *Familia:* `ciclo de vida`  
  Adjunta comunicación y artefactos a una versión identificada por tag.

- **Insights y métricas**  
  *Familia:* `evidencia y latencia`  
  Observa actividad sin convertir volumen de commits en una medida automática de valor.


### Seccion: Colaboración avanzada y flujo de trabajo social (6 conceptos)

- **Forks de organizaciones y sincronización**  
  *Familia:* `planificación de trabajo`  
  Coordina desarrollo distribuido entre repositorios con ramas de sincronización ascendente.

- **Sponsors y sostenibilidad de código abierto**  
  *Familia:* `secuencia operativa`  
  Configura financiamiento colectivo y recompensas para mantenedores de librerías.

- **Plantillas de repositorio y blueprints**  
  *Familia:* `evidencia y latencia`  
  Genera nuevos proyectos corporativos con estructura, linters y CI/CD preconfigurados.

- **GitHub CLI (gh) y automatización de terminal**  
  *Familia:* `pasaporte del artefacto`  
  Gestiona PRs, issues y releases directamente desde la consola sin abrir el navegador.

- **Menciones de equipo y revisiones asignadas**  
  *Familia:* `matriz de señales`  
  Distribuye solicitudes de revisión rotativas entre miembros de un equipo de GitHub.

- **Reconocimiento y contribuciones en perfil**  
  *Familia:* `topología y tráfico`  
  Comprende cómo los commits en ramas predeterminadas alimentan el grafo de actividad.


### Seccion: GitHub Actions a escala empresarial (6 conceptos)

- **Reusable Workflows y llamadas modulares**  
  *Familia:* `workflow y decisiones`  
  Centraliza lógica de compilación y despliegue compartida entre cientos de repositorios.

- **Self-hosted Runners y autoscaling**  
  *Familia:* `flujo de interfaz`  
  Ejecuta pipelines en infraestructura propia con máquinas efímeras y orquestadores Kubernetes.

- **Concurrencia y cancelación de jobs obsoletos**  
  *Familia:* `cola y consumidor`  
  Cancela ejecuciones anteriores cuando se envía un commit nuevo a un pull request abierto.

- **Matrix builds y pruebas multiplataforma**  
  *Familia:* `análisis y emisión`  
  Ejecuta combinaciones de versiones de herramientas y sistemas operativos en paralelo.

- **Composite Actions vs Docker Actions**  
  *Familia:* `aislamiento sobre host`  
  Empaqueta pasos de automatización reutilizables con soporte multiplataforma ligero.

- **Artifacts y retención de binarios**  
  *Familia:* `pasaporte del artefacto`  
  Almacena reportes de cobertura y compilaciones con límites de retención configurables.


### Seccion: Seguridad avanzada y gestión de secretos corporativos (6 conceptos)

- **GitHub Advanced Security (GHAS)**  
  *Familia:* `espectro de verificación`  
  Monitorea vulnerabilidades a nivel de organización con paneles unificados de riesgo.

- **Environment Secrets vs Repository Secrets**  
  *Familia:* `comparativa técnica`  
  Aísla claves de producción requiriendo aprobaciones manuales antes de exponer credenciales.

- **OpenID Connect (OIDC) sin secretos estáticos**  
  *Familia:* `validación y decisión`  
  Conecta GitHub Actions a proveedores de nube mediante tokens temporales federados.

- **Políticas de branch protection vs Rulesets modernos**  
  *Familia:* `secuencia operativa`  
  Migra de protecciones heredadas a reglas flexibles con herencia organizacional.

- **Control de acceso a nivel de actor (Bypass actors)**  
  *Familia:* `tejido de eventos`  
  Permite únicamente a bots de release autorizados saltarse reglas de fusión en emergencias.

- **Security Advisories y asignación de CVEs**  
  *Familia:* `espectro de verificación`  
  Coordina divulgación responsable de vulnerabilidades y publica identificadores oficiales.


### Seccion: Gobierno organizacional, cumplimiento y auditoría (6 conceptos)

- **SAML SSO y aprovisionamiento SCIM**  
  *Familia:* `capas internas`  
  Sincroniza altas y bajas de desarrolladores desde directorios corporativos en tiempo real.

- **GitHub Enterprise Managed Users (EMU)**  
  *Familia:* `diagnóstico operativo`  
  Garantiza que las cuentas pertenezcan exclusivamente a la organización sin mezclar perfiles personales.

- **Exportación y transmisión del Audit Log**  
  *Familia:* `evidencia y latencia`  
  Envía eventos de auditoría en streaming a sistemas externos para cumplimiento normativo.

- **Políticas de IP Allow Lists**  
  *Familia:* `matriz de señales`  
  Restringe el acceso al código y a la API de GitHub únicamente a rangos de VPN corporativos autorizados.

- **GitHub Packages y distribución de dependencias**  
  *Familia:* `cuadrícula paralela`  
  Aloja imágenes de contenedores y paquetes privados con permisos unificados.

- **Copilot for Enterprise y políticas de IA**  
  *Familia:* `validación y decisión`  
  Configura sugerencias de código, filtros de coincidencia pública y chat contextual de IA.



## Referencias Bibliograficas y Documentacion Oficial
- **[GitHub Skills](https://skills.github.com/)** (`course` | Nivel: `beginner`): 
- **[Pull requests documentation](https://docs.github.com/en/pull-requests)** (`official-docs` | Nivel: `intermediate`): 
- **[Security and code quality documentation](https://docs.github.com/en/code-security)** (`official-docs` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Control de versiones y calidad](Grupo-Versioning) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
