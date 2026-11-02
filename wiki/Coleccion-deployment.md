# 📘 [Ship] Deployment

> **Entornos, configuración, rollouts, tráfico, migraciones y rollback.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `deployment` |
| **Grupo Arquitectónico** | [Infraestructura y entrega](Grupo-Delivery) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `deployment` |
| **Total de Conceptos** | **133 conceptos** |
| **Capítulos / Secciones** | **8 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/deployment)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/deployment-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (133)

### 📑 Sección: Fundamentos de entrega de software (12 conceptos)

- **Qué es un deployment**  
  *Familia:* `anatomía del concepto`  
  Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.

- **Build, release y run**  
  *Familia:* `análisis y emisión`  
  Separa compilación de artefactos, combinación con configuración y ejecución en runtime.

- **Deploy vs release**  
  *Familia:* `ciclo de vida`  
  Distingue poner código en producción de exponer una funcionalidad a usuarios.

- **Artefacto inmutable**  
  *Familia:* `flujo de transformación`  
  Promueve exactamente los mismos bytes entre entornos y los identifica por versión o digest.

- **Reproducible builds**  
  *Familia:* `capas internas`  
  Produce resultados equivalentes desde fuentes y dependencias fijadas en un entorno controlado.

- **Release versioning**  
  *Familia:* `máquina de estados`  
  Relaciona versiones, commits, changelog, compatibilidad y rollback.

- **Entornos**  
  *Familia:* `tabla de estados`  
  Separa desarrollo, preview, staging y producción por propósito y riesgo.

- **Promotion**  
  *Familia:* `validación y decisión`  
  Mueve un artefacto verificado hacia entornos más críticos sin reconstruirlo.

- **Change failure rate**  
  *Familia:* `diagnóstico operativo`  
  Mide qué proporción de cambios requiere reparación, rollback o causa incidente.

- **Deployment frequency**  
  *Familia:* `flujo de ejecución`  
  Mide frecuencia de releases útiles sin convertir cantidad en objetivo aislado.

- **Lead time for changes**  
  *Familia:* `evidencia y latencia`  
  Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes.

- **Mean time to restore**  
  *Familia:* `configuración declarativa`  
  Mide velocidad para recuperar servicio tras un cambio fallido.


### 📑 Sección: Configuración, secretos y entornos (13 conceptos)

- **Config externa**  
  *Familia:* `configuración declarativa`  
  Mantiene URLs, flags y límites fuera del código para variar por entorno.

- **Environment variables**  
  *Familia:* `memoria intermedia`  
  Inyectan strings al proceso y requieren validación, defaults y cuidado con herencia y logs.

- **Configuration files**  
  *Familia:* `contratos coordinados`  
  Representan estructuras mayores, pero necesitan distribución, permisos y estrategia de reload.

- **Secret stores**  
  *Familia:* `anatomía del concepto`  
  Entregan credenciales bajo identidad y política en vez de guardarlas en repositorios o imágenes.

- **Secret rotation**  
  *Familia:* `planificación de trabajo`  
  Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia.

- **Workload identity**  
  *Familia:* `árbol de recursos`  
  Obtiene credenciales temporales basadas en identidad del runtime en lugar de secretos estáticos.

- **Parity de entornos**  
  *Familia:* `cola y consumidor`  
  Reduce diferencias relevantes entre staging y producción sin exigir que todo sea idéntico.

- **Preview environments**  
  *Familia:* `acumulación de recursos`  
  Crea un entorno temporal por cambio para revisión integrada y lo elimina después.

- **Test data**  
  *Familia:* `consulta e índice`  
  Evita usar información sensible y permite escenarios reproducibles y aislados.

- **Feature flags**  
  *Familia:* `análisis y emisión`  
  Desacoplan deploy de release y permiten cohortes, kill switches y rollout gradual.

- **Configuración dinámica**  
  *Familia:* `flujo de ejecución`  
  Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad.

- **Drift de configuración**  
  *Familia:* `diagnóstico operativo`  
  Aparece cuando cambios manuales separan el entorno real del estado declarado.

- **Promotion de configuración**  
  *Familia:* `aislamiento sobre host`  
  Versiona y revisa configuración crítica igual que el código.


### 📑 Sección: Estrategias de deployment y release (18 conceptos)

- **Recreate deployment**  
  *Familia:* `ciclo de vida`  
  Detiene la versión anterior antes de iniciar la nueva; es simple pero introduce downtime.

- **Rolling update**  
  *Familia:* `propagación de eventos`  
  Reemplaza instancias progresivamente manteniendo capacidad dentro de max surge y unavailable.

- **Blue-green deployment**  
  *Familia:* `secuencia operativa`  
  Mantiene dos entornos completos y cambia tráfico al candidato verificado.

- **Canary deployment**  
  *Familia:* `máquina de estados`  
  Expone una fracción de tráfico y aumenta solo si métricas y pruebas permanecen saludables.

- **A/B testing**  
  *Familia:* `ecosistema coordinado`  
  Asigna cohortes estables a variantes para medir una hipótesis de producto.

- **Shadow traffic**  
  *Familia:* `memoria intermedia`  
  Duplica solicitudes hacia la nueva versión sin usar su respuesta para validar comportamiento.

- **Ring deployment**  
  *Familia:* `flujo de ejecución`  
  Promueve por grupos de usuarios o entornos con riesgo creciente.

- **Feature rollout**  
  *Familia:* `jerarquía y dependencias`  
  Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto.

- **Dark launch**  
  *Familia:* `árbol de recursos`  
  Despliega capacidad sin exponerla públicamente para calentar, validar o recibir tráfico interno.

- **Traffic splitting**  
  *Familia:* `ida y vuelta`  
  Distribuye requests por peso, header, cookie, región u otra política.

- **Session affinity**  
  *Familia:* `cola y consumidor`  
  Mantiene clientes en un backend cuando el estado local lo exige, con costos para balanceo y resiliencia.

- **Rollback**  
  *Familia:* `consulta e índice`  
  Restaura una versión conocida y debe considerar datos, configuración y tareas en progreso.

- **Roll forward**  
  *Familia:* `configuración declarativa`  
  Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.

- **Kill switch**  
  *Familia:* `diagnóstico operativo`  
  Desactiva una función o integración rápidamente sin reconstruir.

- **Automated promotion**  
  *Familia:* `contratos coordinados`  
  Avanza una versión al cumplirse salud, tiempo, tests y métricas definidos.

- **Automated rollback**  
  *Familia:* `acumulación de recursos`  
  Aborta y retira tráfico cuando análisis o health checks cruzan límites.

- **Blast radius**  
  *Familia:* `análisis y emisión`  
  Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio.

- **Deployment freeze**  
  *Familia:* `capas internas`  
  Suspende cambios en periodos de alto riesgo con excepciones y ownership claros.


### 📑 Sección: Kubernetes y reconciliación (28 conceptos)

- **Kubernetes control plane**  
  *Familia:* `superficie de aplicación`  
  Acepta estado deseado y usa controllers para reconciliarlo continuamente.

- **Namespaces de Kubernetes**  
  *Familia:* `aislamiento sobre host`  
  Agrupan nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte.

- **Pod**  
  *Familia:* `topología y tráfico`  
  Es la unidad de scheduling y comparte red y volumes entre uno o más containers.

- **Deployment y ReplicaSet**  
  *Familia:* `ciclo de vida`  
  Versionan pod templates y mantienen replicas durante rolling updates.

- **StatefulSet**  
  *Familia:* `máquina de estados`  
  Conserva identidad, orden y storage estable para workloads con estado.

- **DaemonSet**  
  *Familia:* `flujo de transformación`  
  Ejecuta una copia por node elegible para agentes de infraestructura.

- **Job**  
  *Familia:* `planificación de trabajo`  
  Ejecuta trabajo finito hasta completar con políticas de reintento.

- **CronJob**  
  *Familia:* `cola y consumidor`  
  Crea Jobs por calendario considerando concurrencia, deadlines e historial.

- **Service**  
  *Familia:* `consulta e índice`  
  Ofrece identidad y descubrimiento estables sobre pods efímeros.

- **Ingress**  
  *Familia:* `evidencia y latencia`  
  Expone HTTP mediante reglas de host/path implementadas por un controller.

- **Gateway API**  
  *Familia:* `validación y decisión`  
  Modela listeners, routes y ownership con recursos más expresivos que Ingress.

- **ConfigMap**  
  *Familia:* `configuración declarativa`  
  Entrega configuración no sensible por env o volume y requiere estrategia de actualización.

- **Secret de Kubernetes**  
  *Familia:* `contratos coordinados`  
  Codifica datos sensibles, pero necesita cifrado, RBAC y preferencia por secret stores externos.

- **Requests y limits**  
  *Familia:* `ida y vuelta`  
  Ayudan al scheduler y controlan consumo, throttling y OOM.

- **QoS classes**  
  *Familia:* `ecosistema coordinado`  
  Resultan de requests/limits y afectan prioridad durante presión de recursos.

- **Liveness probe**  
  *Familia:* `acumulación de recursos`  
  Reinicia un container bloqueado; una mala probe puede causar restart loops.

- **Readiness probe**  
  *Familia:* `tabla de estados`  
  Retira temporalmente un pod del tráfico sin reiniciarlo.

- **Startup probe**  
  *Familia:* `memoria intermedia`  
  Protege inicializaciones lentas antes de que liveness comience a evaluar.

- **Horizontal Pod Autoscaler**  
  *Familia:* `capas internas`  
  Ajusta replicas a partir de métricas y un target con ventanas de estabilización.

- **Vertical Pod Autoscaler**  
  *Familia:* `árbol de recursos`  
  Recomienda o cambia requests de recursos según consumo histórico.

- **Cluster Autoscaler**  
  *Familia:* `comparativa técnica`  
  Añade o retira nodes cuando pods no pueden programarse o capacidad queda ociosa.

- **PodDisruptionBudget**  
  *Familia:* `análisis y emisión`  
  Limita disrupciones voluntarias simultáneas sin garantizar disponibilidad ante fallos.

- **Affinity y anti-affinity**  
  *Familia:* `secuencia operativa`  
  Influyen en colocación por labels, topología y relación con otros pods.

- **Topology spread constraints**  
  *Familia:* `jerarquía y dependencias`  
  Distribuyen replicas entre zonas o nodes para evitar concentración.

- **RollingUpdate settings**  
  *Familia:* `flujo de ejecución`  
  Controlan maxSurge, maxUnavailable, progressDeadline y revision history.

- **Helm**  
  *Familia:* `propagación de eventos`  
  Empaqueta templates y values, pero requiere controlar render, ownership y upgrades.

- **Kustomize**  
  *Familia:* `diagnóstico operativo`  
  Compone bases y overlays mediante transformaciones declarativas.

- **Custom Resource y Operator**  
  *Familia:* `árbol de recursos`  
  Extienden la API y automatizan reconciliación específica de un dominio.


### 📑 Sección: Tráfico, DNS y edge (14 conceptos)

- **DNS durante deployments**  
  *Familia:* `topología y tráfico`  
  Los TTL y caches hacen que los cambios de record no sean instantáneos ni atómicos.

- **Load balancer health checks**  
  *Familia:* `ida y vuelta`  
  Registran targets solo cuando responden al criterio esperado y respetan thresholds.

- **Connection draining**  
  *Familia:* `superficie de aplicación`  
  Permite terminar conexiones existentes antes de retirar una instancia.

- **TLS termination**  
  *Familia:* `aislamiento sobre host`  
  Descifra en el edge o load balancer y define cómo se protege el tramo interno.

- **Certificate rotation**  
  *Familia:* `jerarquía y dependencias`  
  Renueva y propaga certificados antes de expirar sin romper clientes.

- **CDN cache invalidation**  
  *Familia:* `comparativa técnica`  
  Elimina o versiona contenido distribuido considerando costo y propagación.

- **Cache busting**  
  *Familia:* `memoria intermedia`  
  Usa nombres direccionados por contenido para publicar assets nuevos sin invalidaciones globales.

- **API gateway routing**  
  *Familia:* `ecosistema coordinado`  
  Selecciona backend y versión por ruta, stage, header o policy.

- **Service discovery**  
  *Familia:* `acumulación de recursos`  
  Resuelve instancias dinámicas mediante DNS, registry o service mesh.

- **Service mesh**  
  *Familia:* `anatomía del concepto`  
  Añade proxy sidecar o ambient para mTLS, routing, retries y telemetría.

- **Retries en la red**  
  *Familia:* `tabla de estados`  
  Deben incluir timeouts, backoff, jitter e idempotencia para no amplificar fallos.

- **Timeout budgets**  
  *Familia:* `propagación de eventos`  
  Distribuyen el deadline total entre proxies y dependencias evitando trabajo inútil.

- **Rate limits**  
  *Familia:* `máquina de estados`  
  Protegen capacidad y deben definir identidad, ventana, cuotas y respuesta al exceder.

- **WebSockets y conexiones largas**  
  *Familia:* `planificación de trabajo`  
  Exigen draining, afinidad o re-conexión consciente durante reemplazos.


### 📑 Sección: Datos, migraciones y compatibilidad (15 conceptos)

- **Migraciones de esquema**  
  *Familia:* `contratos coordinados`  
  Cambian estructura de datos con versionado, observabilidad y estrategia de recuperación.

- **Expand-contract**  
  *Familia:* `cola y consumidor`  
  Añade primero lo compatible, migra datos y consumidores, y elimina al final.

- **Backward compatibility**  
  *Familia:* `configuración declarativa`  
  Permite que código viejo funcione con la nueva dependencia durante el rollout.

- **Forward compatibility**  
  *Familia:* `planificación de trabajo`  
  Permite que componentes antiguos toleren datos o mensajes producidos por versiones nuevas.

- **Dual read**  
  *Familia:* `evidencia y latencia`  
  Lee formato nuevo y antiguo durante una transición y mide qué camino se usa.

- **Dual write**  
  *Familia:* `ciclo de vida`  
  Escribe dos representaciones temporalmente y requiere manejar fallos parciales y orden.

- **Backfill**  
  *Familia:* `comparativa técnica`  
  Migra datos históricos por lotes con rate limits, checkpoints y métricas.

- **Online schema changes**  
  *Familia:* `validación y decisión`  
  Evitan locks prolongados y consumo inesperado mediante técnicas específicas del motor.

- **Data validation post-deploy**  
  *Familia:* `tabla de estados`  
  Compara conteos, invariantes, checksums y muestras antes de retirar compatibilidad.

- **Queue message versioning**  
  *Familia:* `flujo de transformación`  
  Permite consumidores heterogéneos mediante schema, defaults y evolución compatible.

- **API versioning**  
  *Familia:* `análisis y emisión`  
  Administra contratos incompatibles y una política real de migración y deprecación.

- **Consumer-driven contracts**  
  *Familia:* `flujo de ejecución`  
  Capturan expectativas de consumidores y evitan romperlos antes de desplegar.

- **Idempotent migrations**  
  *Familia:* `acumulación de recursos`  
  Pueden reanudarse o repetirse con estado explícito después de un fallo.

- **Rollback con cambios de datos**  
  *Familia:* `máquina de estados`  
  Reconoce que revertir código no deshace automáticamente writes ni schema.

- **Data snapshot antes del cambio**  
  *Familia:* `superficie de aplicación`  
  Crea un punto de recuperación coherente cuando el riesgo lo justifica.


### 📑 Sección: Observabilidad, confiabilidad y rollback (17 conceptos)

- **Health checks**  
  *Familia:* `contratos coordinados`  
  Responden preguntas concretas sobre proceso, readiness y dependencias sin mezclar responsabilidades.

- **Smoke tests**  
  *Familia:* `propagación de eventos`  
  Validan rutas críticas inmediatamente después del deployment.

- **Synthetic monitoring**  
  *Familia:* `diagnóstico operativo`  
  Ejecuta journeys programados desde fuera para detectar fallos visibles al usuario.

- **Logs de deployment**  
  *Familia:* `secuencia operativa`  
  Registran versión, actor, pipeline, cambios, targets y resultado.

- **Deployment markers**  
  *Familia:* `ciclo de vida`  
  Anotan dashboards y trazas para correlacionar cambios con comportamiento.

- **SLIs y SLOs**  
  *Familia:* `capas internas`  
  Convierten latencia, errores y disponibilidad en objetivos y señales de release.

- **Error budgets**  
  *Familia:* `evidencia y latencia`  
  Limitan velocidad de cambio cuando la confiabilidad consumida supera lo acordado.

- **Canary analysis**  
  *Familia:* `ecosistema coordinado`  
  Compara candidate y baseline usando métricas significativas y volumen suficiente.

- **Alertas durante rollout**  
  *Familia:* `máquina de estados`  
  Deben ser sensibles al cambio sin reaccionar a ruido esperado de baja escala.

- **Rollback criteria**  
  *Familia:* `configuración declarativa`  
  Define umbrales, ventanas, responsables y acciones antes de empezar.

- **Graceful shutdown**  
  *Familia:* `acumulación de recursos`  
  Retira readiness, drena tráfico, maneja SIGTERM y cierra recursos antes del timeout.

- **Crash loop detection**  
  *Familia:* `cola y consumidor`  
  Distingue fallos de startup, configuración, dependencia, health check y recursos.

- **Capacity headroom**  
  *Familia:* `anatomía del concepto`  
  Reserva margen para surge, fallo de zona, rollback y picos durante el deployment.

- **Disaster recovery deployment**  
  *Familia:* `flujo de transformación`  
  Incluye reconstruir infraestructura, restaurar datos y validar tráfico en otra ubicación.

- **Game day**  
  *Familia:* `topología y tráfico`  
  Practica rollback, failover y recuperación antes de una emergencia real.

- **Post-deployment verification**  
  *Familia:* `flujo de ejecución`  
  Confirma métricas, logs, jobs, integridad y experiencia de usuario tras la promoción.

- **Postmortem de cambio fallido**  
  *Familia:* `jerarquía y dependencias`  
  Analiza sistema y controles sin culpar, convirtiendo hallazgos en mejoras verificables.


### 📑 Sección: Seguridad, supply chain y operación (16 conceptos)

- **Least privilege de CI/CD**  
  *Familia:* `análisis y emisión`  
  Limita permisos por repositorio, branch, environment, acción y duración.

- **Pinning de actions y dependencias**  
  *Familia:* `árbol de recursos`  
  Evita que referencias mutables cambien el código ejecutado en el pipeline.

- **Vulnerability scanning**  
  *Familia:* `secuencia operativa`  
  Relaciona findings con reachability, contexto, SLA y excepción documentada.

- **Image admission policy**  
  *Familia:* `comparativa técnica`  
  Bloquea imágenes sin firma, provenance, scan o registry aprobado.

- **Infrastructure as Code**  
  *Familia:* `flujo de transformación`  
  Versiona redes, compute, políticas y servicios para plan, review y reproducibilidad.

- **Plan y apply**  
  *Familia:* `acumulación de recursos`  
  Separa previsualización de cambios de su ejecución y protege state y locking.

- **Drift detection**  
  *Familia:* `aislamiento sobre host`  
  Encuentra cambios manuales y decide reconciliar, importar o aceptar de forma explícita.

- **GitOps**  
  *Familia:* `contratos coordinados`  
  Usa Git como estado deseado y un controller pull-based para reconciliar ambientes.

- **Separation of duties**  
  *Familia:* `planificación de trabajo`  
  Distribuye autoría, revisión, aprobación y operación según riesgo.

- **Audit trail**  
  *Familia:* `memoria intermedia`  
  Conserva quién, qué, cuándo, desde dónde y con qué resultado se desplegó.

- **Release runbook**  
  *Familia:* `ciclo de vida`  
  Documenta preparación, pasos, observación, rollback y comunicación para cambios complejos.

- **Maintenance window**  
  *Familia:* `propagación de eventos`  
  Coordina riesgo, soporte, usuarios y dependencias cuando el cambio no puede ser transparente.

- **On-call handoff**  
  *Familia:* `validación y decisión`  
  Entrega contexto de versión, riesgos, dashboards y rollback al equipo que operará.

- **Deprecación de versiones**  
  *Familia:* `consulta e índice`  
  Anuncia, mide uso, ayuda a migrar y retira capacidad en una fecha verificable.

- **Cleanup post-release**  
  *Familia:* `ecosistema coordinado`  
  Elimina preview environments, images antiguas, flags obsoletos y recursos temporales.

- **Coste del deployment**  
  *Familia:* `máquina de estados`  
  Incluye capacidad doble, runners, storage, transferencia, environments y observabilidad.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Kubernetes Basics: perform a rolling update](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/)** (`tutorial` | Nivel: `beginner`): 
- **[Google SRE Book: Release Engineering](https://sre.google/sre-book/release-engineering/)** (`book` | Nivel: `intermediate`): 
- **[Argo Rollouts Documentation](https://argo-rollouts.readthedocs.io/en/stable/)** (`official-docs` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Infraestructura y entrega](Grupo-Delivery) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
