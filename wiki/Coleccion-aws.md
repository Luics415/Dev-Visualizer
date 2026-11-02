# 📘 [AWS] AWS

> **Identidad, VPC, compute, datos, eventos, gobierno y costo.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `aws` |
| **Grupo Arquitectónico** | [Infraestructura y entrega](Grupo-Delivery) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `aws` |
| **Total de Conceptos** | **228 conceptos** |
| **Capítulos / Secciones** | **18 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/aws)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/aws-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (228)

### 📑 Sección: Fundamentos de nube y arquitectura AWS (13 conceptos)

- **Cloud computing**  
  *Familia:* `aislamiento sobre host`  
  Consume capacidad por API y bajo demanda, cambiando inversión fija por recursos elásticos medidos.

- **IaaS, PaaS y serverless**  
  *Familia:* `configuración declarativa`  
  Compara cuánto administra AWS y cuánto conserva el equipo en cada modelo.

- **Regiones**  
  *Familia:* `jerarquía y dependencias`  
  Agrupan infraestructura en geografías independientes para residencia, latencia y recuperación.

- **Availability Zones**  
  *Familia:* `flujo de transformación`  
  Funcionan como dominios de fallo aislados conectados con redes regionales de baja latencia.

- **Edge locations**  
  *Familia:* `memoria intermedia`  
  Acercan DNS, CDN, protección y computación de borde a los usuarios.

- **Modelo de responsabilidad compartida**  
  *Familia:* `comparativa técnica`  
  Separa seguridad de la nube administrada por AWS de configuración, identidad y datos del cliente.

- **AWS accounts**  
  *Familia:* `ida y vuelta`  
  Actúan como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.

- **Multi-account strategy**  
  *Familia:* `máquina de estados`  
  Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius.

- **Tags y metadata**  
  *Familia:* `tabla de estados`  
  Asignan propiedad, costo, automatización y contexto operativo a recursos.

- **ARNs**  
  *Familia:* `contratos coordinados`  
  Identifican recursos globalmente mediante partición, servicio, región, cuenta y recurso.

- **AWS CLI, SDKs y Console**  
  *Familia:* `propagación de eventos`  
  Ofrecen interfaces distintas sobre las mismas APIs y credenciales.

- **AWS Well-Architected Framework**  
  *Familia:* `secuencia operativa`  
  Evalúa cargas con seis pilares: excelencia operativa, seguridad, confiabilidad, rendimiento, costo y sostenibilidad.

- **Arquitectura orientada a fallos**  
  *Familia:* `anatomía del concepto`  
  Asume que instancias, zonas, redes y dependencias pueden fallar y diseña recuperación automatizada.


### 📑 Sección: Identidad, gobierno y seguridad (21 conceptos)

- **IAM users**  
  *Familia:* `ciclo de vida`  
  Representan identidades de larga duración y deben evitarse para workloads cuando existen roles temporales.

- **IAM roles**  
  *Familia:* `árbol de recursos`  
  Proporcionan credenciales temporales asumibles por personas, servicios, workloads o cuentas.

- **IAM policies**  
  *Familia:* `validación y decisión`  
  Declaran Effect, Action, Resource y Condition para autorizar o denegar operaciones.

- **Evaluación de políticas IAM**  
  *Familia:* `comparativa técnica`  
  Combina identity policies, resource policies, boundaries, SCPs y explicit deny.

- **Principals y STS**  
  *Familia:* `ecosistema coordinado`  
  Intercambian confianza por sesiones temporales con duración y contexto limitados.

- **Least privilege en AWS**  
  *Familia:* `análisis y emisión`  
  Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica.

- **Permission boundaries**  
  *Familia:* `tabla de estados`  
  Limitan el máximo permiso que una identity policy puede conceder.

- **Resource-based policies**  
  *Familia:* `capas internas`  
  Conceden acceso desde el recurso y pueden habilitar relaciones cross-account.

- **AWS Organizations**  
  *Familia:* `flujo de ejecución`  
  Agrupa cuentas, centraliza facturación y aplica gobierno jerárquico.

- **Organizational Units y SCPs**  
  *Familia:* `ida y vuelta`  
  Agrupan cuentas y definen guardrails máximos sin otorgar permisos por sí mismos.

- **AWS Control Tower**  
  *Familia:* `flujo de transformación`  
  Configura una landing zone multi-account con controles, account factory y gobierno continuo.

- **IAM Identity Center**  
  *Familia:* `cola y consumidor`  
  Centraliza acceso humano a cuentas y aplicaciones con sesiones federadas.

- **AWS KMS**  
  *Familia:* `memoria intermedia`  
  Administra claves y operaciones criptográficas con policies, grants, rotación y auditoría.

- **Envelope encryption**  
  *Familia:* `consulta e índice`  
  Cifra datos con data keys y protege esas claves con una KMS key.

- **Secrets Manager**  
  *Familia:* `configuración declarativa`  
  Versiona, rota y entrega secretos autorizados a workloads.

- **Systems Manager Parameter Store**  
  *Familia:* `diagnóstico operativo`  
  Almacena configuración y valores protegidos con jerarquía e integración IAM.

- **AWS Certificate Manager**  
  *Familia:* `contratos coordinados`  
  Emite y renueva certificados usados por servicios integrados como load balancers y CloudFront.

- **CloudTrail**  
  *Familia:* `propagación de eventos`  
  Registra actividad de API para auditoría, investigación y gobierno.

- **AWS Config**  
  *Familia:* `evidencia y latencia`  
  Evalúa cambios y conformidad de configuración a lo largo del tiempo.

- **GuardDuty, Security Hub e Inspector**  
  *Familia:* `aislamiento sobre host`  
  Combinan detección de amenazas, postura centralizada y análisis de vulnerabilidades.

- **Amazon Macie**  
  *Familia:* `superficie de aplicación`  
  Descubre y clasifica datos sensibles almacenados en S3.


### 📑 Sección: Networking y conectividad (20 conceptos)

- **Amazon VPC**  
  *Familia:* `topología y tráfico`  
  Crea una red virtual regional con direcciones, subnets, rutas y controles propios.

- **IPv4 e IPv6 en VPC**  
  *Familia:* `jerarquía y dependencias`  
  Planifica rangos, dual-stack, egress y crecimiento sin solapamientos.

- **Subnets públicas y privadas**  
  *Familia:* `ida y vuelta`  
  Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.

- **Route tables**  
  *Familia:* `ecosistema coordinado`  
  Seleccionan target por prefijo más específico para cada paquete que sale de una subnet.

- **Internet Gateway**  
  *Familia:* `ciclo de vida`  
  Conecta recursos con IP pública a Internet mediante rutas y traducción administrada.

- **NAT Gateway**  
  *Familia:* `anatomía del concepto`  
  Permite egress IPv4 desde subnets privadas sin aceptar conexiones iniciadas desde Internet.

- **Egress-only Internet Gateway**  
  *Familia:* `acumulación de recursos`  
  Ofrece salida IPv6 desde VPC sin permitir conexiones entrantes iniciadas externamente.

- **Security Groups**  
  *Familia:* `validación y decisión`  
  Aplican reglas stateful a ENIs y permiten referencias entre grupos.

- **Network ACLs**  
  *Familia:* `flujo de ejecución`  
  Aplican reglas stateless y ordenadas en el límite de la subnet.

- **Elastic Network Interfaces**  
  *Familia:* `análisis y emisión`  
  Representan interfaces virtuales con direcciones, security groups y atributos movibles.

- **Elastic IPs**  
  *Familia:* `capas internas`  
  Son direcciones IPv4 públicas estáticas que deben usarse con propósito y costo consciente.

- **VPC Peering**  
  *Familia:* `cola y consumidor`  
  Conecta dos VPC sin routing transitivo y exige rangos no solapados.

- **Transit Gateway**  
  *Familia:* `planificación de trabajo`  
  Centraliza routing entre múltiples VPC, VPNs y redes on-premises.

- **AWS PrivateLink**  
  *Familia:* `memoria intermedia`  
  Expone un servicio mediante endpoints privados sin compartir routing completo.

- **VPC endpoints**  
  *Familia:* `flujo de transformación`  
  Acceden a servicios AWS por gateway o interface endpoints evitando Internet público.

- **Site-to-Site VPN**  
  *Familia:* `diagnóstico operativo`  
  Conecta redes por túneles IPsec redundantes sobre Internet.

- **Direct Connect**  
  *Familia:* `secuencia operativa`  
  Proporciona conectividad dedicada con modelos de resiliencia y virtual interfaces.

- **Route 53 Resolver**  
  *Familia:* `máquina de estados`  
  Resuelve DNS entre VPC y on-premises mediante endpoints y rules.

- **VPC Flow Logs**  
  *Familia:* `evidencia y latencia`  
  Registra metadata de tráfico aceptado o rechazado para investigar rutas y reglas.

- **Reachability Analyzer**  
  *Familia:* `aislamiento sobre host`  
  Modela el camino de red y señala el componente que bloquea conectividad.


### 📑 Sección: Compute, balanceo y escalado (17 conceptos)

- **Amazon EC2**  
  *Familia:* `topología y tráfico`  
  Ejecuta servidores virtuales con tipo, AMI, red, storage y modelo de compra elegidos.

- **AMI**  
  *Familia:* `árbol de recursos`  
  Versiona el template de sistema, software y configuración usado para lanzar instancias.

- **Instance types**  
  *Familia:* `anatomía del concepto`  
  Equilibran CPU, memoria, red, aceleradores y storage local para distintos workloads.

- **User data y cloud-init**  
  *Familia:* `superficie de aplicación`  
  Inicializan una instancia al arrancar, pero deben ser idempotentes y observables.

- **EBS-backed vs instance store**  
  *Familia:* `comparativa técnica`  
  Compara bloques persistentes administrados con discos locales efímeros de alta velocidad.

- **On-Demand Instances**  
  *Familia:* `consulta e índice`  
  Cobran capacidad sin compromiso y ofrecen flexibilidad para cargas variables.

- **Savings Plans y Reserved Instances**  
  *Familia:* `planificación de trabajo`  
  Intercambian compromiso de uso por descuento con alcances y flexibilidad diferentes.

- **Spot Instances**  
  *Familia:* `secuencia operativa`  
  Usan capacidad sobrante interrumpible para trabajos tolerantes a fallos.

- **EC2 Auto Scaling**  
  *Familia:* `propagación de eventos`  
  Mantiene capacidad deseada, reemplaza instancias no saludables y escala con políticas.

- **Launch Templates**  
  *Familia:* `acumulación de recursos`  
  Versionan configuración de lanzamiento para Auto Scaling y operaciones repetibles.

- **Elastic Load Balancing**  
  *Familia:* `análisis y emisión`  
  Distribuye conexiones entre targets saludables y desacopla clientes de instancias.

- **Application Load Balancer**  
  *Familia:* `jerarquía y dependencias`  
  Enruta HTTP/HTTPS por host, path, headers y target groups.

- **Network Load Balancer**  
  *Familia:* `ida y vuelta`  
  Maneja TCP, UDP y TLS con alto rendimiento y direcciones estáticas opcionales.

- **Gateway Load Balancer**  
  *Familia:* `ecosistema coordinado`  
  Inserta appliances virtuales de red de forma transparente y escalable.

- **Target Groups y health checks**  
  *Familia:* `capas internas`  
  Definen backends, protocolo, puerto, registro y criterio para recibir tráfico.

- **Elastic Beanstalk**  
  *Familia:* `flujo de transformación`  
  Orquesta infraestructura de aplicaciones manteniendo acceso a recursos subyacentes.

- **Lightsail**  
  *Familia:* `contratos coordinados`  
  Simplifica compute, red y storage para cargas pequeñas con configuración predecible.


### 📑 Sección: Contenedores y serverless (15 conceptos)

- **Amazon ECR**  
  *Familia:* `consulta e índice`  
  Almacena imágenes OCI, lifecycle policies, scanning y replicación.

- **Amazon ECS**  
  *Familia:* `topología y tráfico`  
  Orquesta tasks y services con integración nativa de IAM, ELB y observabilidad.

- **Task Definitions**  
  *Familia:* `evidencia y latencia`  
  Versionan imagen, CPU, memoria, ports, env, secrets, logging y roles de un task.

- **ECS Services**  
  *Familia:* `validación y decisión`  
  Mantienen desired count, despliegues, health y registro en load balancers.

- **Fargate**  
  *Familia:* `diagnóstico operativo`  
  Ejecuta tasks o pods sin administrar instancias, cobrando recursos solicitados.

- **ECS Capacity Providers**  
  *Familia:* `acumulación de recursos`  
  Relacionan services con Fargate o Auto Scaling Groups y estrategias de capacidad.

- **Amazon EKS**  
  *Familia:* `flujo de ejecución`  
  Proporciona control plane Kubernetes administrado con opciones de nodes y networking.

- **Managed Node Groups**  
  *Familia:* `superficie de aplicación`  
  Administran ciclo de vida de grupos EC2 usados por pods de EKS.

- **IRSA y EKS Pod Identity**  
  *Familia:* `aislamiento sobre host`  
  Entregan permisos AWS a pods sin reutilizar credenciales del node.

- **AWS Lambda**  
  *Familia:* `propagación de eventos`  
  Ejecuta funciones por eventos con escalado automático y límites de runtime.

- **Lambda concurrency**  
  *Familia:* `jerarquía y dependencias`  
  Distingue concurrency disponible, reservada y provisionada para control de escala y latencia.

- **Lambda cold starts**  
  *Familia:* `comparativa técnica`  
  Explica inicialización de entorno, runtime y código antes de una invocación caliente.

- **Lambda layers y extensions**  
  *Familia:* `capas internas`  
  Comparten dependencias o integran agentes alrededor del runtime con tradeoffs.

- **AWS App Runner**  
  *Familia:* `cola y consumidor`  
  Despliega servicios web desde código o imagen con infraestructura administrada.

- **AWS Batch**  
  *Familia:* `árbol de recursos`  
  Planifica trabajos batch sobre capacidad administrada y colas por prioridad.


### 📑 Sección: Storage y entrega de contenido (18 conceptos)

- **Amazon S3**  
  *Familia:* `superficie de aplicación`  
  Almacena objetos en buckets con keys, metadata, versioning, policies y consistencia fuerte.

- **S3 bucket y object keys**  
  *Familia:* `ida y vuelta`  
  Distingue namespace del bucket de una key plana que puede simular prefijos.

- **S3 Versioning**  
  *Familia:* `tabla de estados`  
  Conserva múltiples versiones y delete markers para recuperación y replicación.

- **S3 Storage Classes**  
  *Familia:* `árbol de recursos`  
  Elige costo y patrón de acceso entre clases frecuentes, infrecuentes y archivo.

- **S3 Lifecycle Policies**  
  *Familia:* `ciclo de vida`  
  Transicionan o expiran objetos y versiones según reglas declarativas.

- **S3 Encryption**  
  *Familia:* `jerarquía y dependencias`  
  Aplica cifrado del lado del servidor con claves S3, KMS o proporcionadas por cliente.

- **S3 Bucket Policies y Block Public Access**  
  *Familia:* `propagación de eventos`  
  Controlan acceso a nivel de recurso y previenen exposición pública accidental.

- **S3 Event Notifications**  
  *Familia:* `ecosistema coordinado`  
  Publican cambios de objetos hacia SQS, SNS, Lambda o EventBridge.

- **S3 Replication**  
  *Familia:* `cola y consumidor`  
  Replica objetos entre buckets o regiones con permisos, versioning y objetivos explícitos.

- **Amazon EBS**  
  *Familia:* `anatomía del concepto`  
  Ofrece volúmenes de bloque por AZ con tipos, IOPS, throughput, snapshots y cifrado.

- **EBS Snapshots**  
  *Familia:* `evidencia y latencia`  
  Crean copias incrementales almacenadas de forma administrada y restaurables en volúmenes.

- **Amazon EFS**  
  *Familia:* `acumulación de recursos`  
  Expone NFS regional elástico a múltiples clientes mediante mount targets.

- **FSx**  
  *Familia:* `comparativa técnica`  
  Ofrece filesystems administrados especializados como Windows, Lustre, NetApp ONTAP y OpenZFS.

- **AWS Backup**  
  *Familia:* `diagnóstico operativo`  
  Centraliza políticas, vaults, retención, copias cross-account y restore testing.

- **AWS DataSync**  
  *Familia:* `máquina de estados`  
  Transfiere datos entre storage on-premises y AWS con verificación y programación.

- **AWS Storage Gateway**  
  *Familia:* `análisis y emisión`  
  Integra aplicaciones on-premises con storage cloud mediante interfaces de archivo, volumen o cinta.

- **Amazon CloudFront**  
  *Familia:* `memoria intermedia`  
  Cachea contenido en edge y conecta viewers con origins mediante policies y TLS.

- **Origin Access Control**  
  *Familia:* `planificación de trabajo`  
  Permite que CloudFront acceda a S3 sin hacer el bucket público.


### 📑 Sección: Bases de datos, búsqueda y caché (19 conceptos)

- **Amazon RDS**  
  *Familia:* `superficie de aplicación`  
  Administra motores relacionales, backups, patching, monitoring y opciones de alta disponibilidad.

- **RDS Multi-AZ**  
  *Familia:* `diagnóstico operativo`  
  Mantiene standby síncrono o configuración regional para failover, no para escalar lecturas por defecto.

- **RDS Read Replicas**  
  *Familia:* `configuración declarativa`  
  Crean copias asíncronas para lecturas, reporting o DR con lag explícito.

- **Amazon Aurora**  
  *Familia:* `máquina de estados`  
  Combina compatibilidad MySQL/PostgreSQL con storage distribuido y arquitectura de cluster.

- **Aurora Serverless**  
  *Familia:* `ciclo de vida`  
  Ajusta capacidad de base de datos dentro de límites configurados para demanda variable.

- **RDS Proxy**  
  *Familia:* `topología y tráfico`  
  Agrupa conexiones y mejora resiliencia de aplicaciones con muchos clientes efímeros.

- **Amazon DynamoDB**  
  *Familia:* `propagación de eventos`  
  Ofrece base NoSQL de key-value/documento con particionado y latencia predecible.

- **DynamoDB partition key**  
  *Familia:* `contratos coordinados`  
  Distribuye items y debe evitar particiones calientes mediante cardinalidad y acceso diseñados.

- **DynamoDB sort key**  
  *Familia:* `consulta e índice`  
  Ordena items dentro de una partición y habilita rangos y patrones jerárquicos.

- **DynamoDB GSIs y LSIs**  
  *Familia:* `análisis y emisión`  
  Crean patrones de acceso alternativos con capacidades y consistencia distintas.

- **DynamoDB capacity modes**  
  *Familia:* `capas internas`  
  Compara on-demand con provisioned y autoscaling.

- **DynamoDB Streams**  
  *Familia:* `planificación de trabajo`  
  Captura cambios ordenados por item para procesamiento event-driven.

- **Global Tables**  
  *Familia:* `secuencia operativa`  
  Replica DynamoDB multi-region con escrituras activas y resolución administrada.

- **Amazon ElastiCache**  
  *Familia:* `memoria intermedia`  
  Administra Redis OSS, Valkey o Memcached para caché y datos en memoria.

- **Amazon MemoryDB**  
  *Familia:* `validación y decisión`  
  Proporciona base compatible con Redis/Valkey con durabilidad multi-AZ.

- **Amazon OpenSearch Service**  
  *Familia:* `ecosistema coordinado`  
  Administra búsqueda, logs y analytics sobre índices distribuidos.

- **Amazon Redshift**  
  *Familia:* `flujo de ejecución`  
  Ejecuta analytics columnar y data warehouse con separación de workloads y storage.

- **Amazon Timestream**  
  *Familia:* `cola y consumidor`  
  Almacena series temporales con retención por capas y consultas orientadas a tiempo.

- **Amazon Neptune**  
  *Familia:* `tabla de estados`  
  Modela grafos de propiedades o RDF y ejecuta consultas de relaciones.


### 📑 Sección: Mensajería, eventos e integración (15 conceptos)

- **Amazon SQS Standard**  
  *Familia:* `planificación de trabajo`  
  Desacopla productores y consumidores con entrega al menos una vez y orden best-effort.

- **SQS FIFO**  
  *Familia:* `cola y consumidor`  
  Añade orden por message group y deduplicación con throughput y diseño específicos.

- **Visibility Timeout**  
  *Familia:* `flujo de transformación`  
  Oculta temporalmente un mensaje mientras un consumidor lo procesa y permite retry si no hay delete.

- **Dead-letter queues**  
  *Familia:* `flujo de ejecución`  
  Aíslan mensajes que superan intentos para análisis y replay controlado.

- **Amazon SNS**  
  *Familia:* `configuración declarativa`  
  Distribuye mensajes desde topics hacia múltiples protocolos y suscriptores.

- **SNS filter policies**  
  *Familia:* `anatomía del concepto`  
  Entrega solo eventos que cumplen atributos o cuerpo esperado por cada suscripción.

- **Amazon EventBridge**  
  *Familia:* `ecosistema coordinado`  
  Enruta eventos por patrones entre aplicaciones, servicios AWS y SaaS.

- **Event buses**  
  *Familia:* `secuencia operativa`  
  Separan eventos default, custom y partner con policies cross-account.

- **EventBridge Scheduler**  
  *Familia:* `máquina de estados`  
  Invoca targets una vez o con recurrencia, ventanas flexibles y retries.

- **AWS Step Functions**  
  *Familia:* `árbol de recursos`  
  Orquesta workflows mediante estados, retries, catches, waits, maps y visualización.

- **Standard vs Express Workflows**  
  *Familia:* `contratos coordinados`  
  Compara duración, semántica, throughput, historial y precio.

- **Amazon MQ**  
  *Familia:* `tabla de estados`  
  Administra brokers compatibles para migraciones que requieren protocolos tradicionales.

- **Amazon Kinesis Data Streams**  
  *Familia:* `acumulación de recursos`  
  Ingiere eventos ordenados por shard para procesamiento en tiempo real.

- **Amazon MSK**  
  *Familia:* `topología y tráfico`  
  Administra clusters Apache Kafka y su conectividad, storage y observabilidad.

- **AWS AppSync**  
  *Familia:* `ida y vuelta`  
  Expone APIs GraphQL administradas con resolvers, subscriptions y fuentes de datos.


### 📑 Sección: DNS, APIs, edge y protección (14 conceptos)

- **Amazon Route 53**  
  *Familia:* `jerarquía y dependencias`  
  Proporciona DNS autoritativo, registro de dominios y health checks.

- **Route 53 routing policies**  
  *Familia:* `topología y tráfico`  
  Elige simple, weighted, latency, failover, geolocation, geoproximity o multivalue.

- **Hosted Zones**  
  *Familia:* `validación y decisión`  
  Separan autoridad DNS pública y privada con records administrados.

- **Route 53 health checks**  
  *Familia:* `ida y vuelta`  
  Observan endpoints o métricas y participan en failover DNS con tiempos no instantáneos.

- **Amazon API Gateway**  
  *Familia:* `configuración declarativa`  
  Publica REST, HTTP y WebSocket APIs con routing, auth, throttling y observabilidad.

- **API Gateway stages**  
  *Familia:* `planificación de trabajo`  
  Representan snapshots desplegados con variables, logs, cuotas y canary settings.

- **Custom domains**  
  *Familia:* `ciclo de vida`  
  Conectan certificados, mappings y DNS para exponer APIs con nombres propios.

- **Amazon CloudFront Functions**  
  *Familia:* `flujo de ejecución`  
  Ejecutan lógica ligera en edge para manipular requests y responses de alta escala.

- **Lambda@Edge**  
  *Familia:* `superficie de aplicación`  
  Ejecuta lógica más flexible asociada a eventos CloudFront con distribución global.

- **AWS WAF**  
  *Familia:* `análisis y emisión`  
  Filtra HTTP por reglas administradas, rate-based rules, IP sets y lógica custom.

- **AWS Shield**  
  *Familia:* `secuencia operativa`  
  Proporciona protección DDoS estándar y opciones avanzadas con soporte y visibilidad.

- **Global Accelerator**  
  *Familia:* `árbol de recursos`  
  Usa anycast y la red global AWS para llevar tráfico TCP/UDP a endpoints saludables.

- **Cognito User Pools**  
  *Familia:* `comparativa técnica`  
  Administra directorio, login, tokens y federation para usuarios de aplicaciones.

- **Cognito Identity Pools**  
  *Familia:* `contratos coordinados`  
  Intercambia identidades autenticadas o invitadas por credenciales AWS temporales.


### 📑 Sección: Observabilidad y operaciones (15 conceptos)

- **Amazon CloudWatch Metrics**  
  *Familia:* `evidencia y latencia`  
  Almacena series temporales con dimensiones, namespaces, estadísticas y periodos.

- **CloudWatch Logs**  
  *Familia:* `diagnóstico operativo`  
  Centraliza log groups, streams, retention, metric filters e insights.

- **CloudWatch Alarms**  
  *Familia:* `aislamiento sobre host`  
  Evalúa métricas y estados para notificar o ejecutar acciones automatizadas.

- **CloudWatch Dashboards**  
  *Familia:* `flujo de transformación`  
  Reúne métricas, logs y widgets para una vista operativa compartida.

- **CloudWatch Application Signals**  
  *Familia:* `anatomía del concepto`  
  Relaciona servicios, SLIs y trazas para observar rendimiento de aplicaciones.

- **AWS X-Ray**  
  *Familia:* `ecosistema coordinado`  
  Rastrea solicitudes distribuidas mediante traces, segments y annotations.

- **AWS Health**  
  *Familia:* `propagación de eventos`  
  Informa eventos que afectan servicios o recursos de una cuenta.

- **Systems Manager Session Manager**  
  *Familia:* `validación y decisión`  
  Accede a instancias sin puertos SSH públicos ni distribución de claves.

- **Systems Manager Run Command**  
  *Familia:* `jerarquía y dependencias`  
  Ejecuta acciones remotas con IAM, targets, salida y auditoría.

- **Systems Manager Patch Manager**  
  *Familia:* `árbol de recursos`  
  Organiza baselines, ventanas y cumplimiento de parches.

- **Systems Manager State Manager**  
  *Familia:* `máquina de estados`  
  Mantiene configuración deseada periódicamente sobre nodos administrados.

- **AWS OpsCenter e Incident Manager**  
  *Familia:* `consulta e índice`  
  Centralizan work items, runbooks y respuesta coordinada a incidentes.

- **Service Quotas**  
  *Familia:* `ciclo de vida`  
  Consulta límites, solicita aumentos y monitoriza consumo antes de alcanzar bloqueos.

- **Trusted Advisor**  
  *Familia:* `superficie de aplicación`  
  Genera recomendaciones de costo, seguridad, rendimiento, tolerancia a fallos y límites.

- **Personal Health Dashboard**  
  *Familia:* `topología y tráfico`  
  Relaciona eventos AWS con recursos concretos de la cuenta.


### 📑 Sección: Infraestructura como código, CI/CD y gobierno (16 conceptos)

- **AWS CloudFormation**  
  *Familia:* `memoria intermedia`  
  Converge stacks desde templates declarativos con dependencias, change sets y rollback.

- **Change Sets**  
  *Familia:* `flujo de transformación`  
  Previsualizan altas, cambios, reemplazos y eliminaciones antes de ejecutar un stack update.

- **Drift Detection**  
  *Familia:* `configuración declarativa`  
  Compara configuración real con el template sin corregirla automáticamente.

- **AWS CDK**  
  *Familia:* `validación y decisión`  
  Define infraestructura con lenguajes y constructs que sintetizan CloudFormation.

- **AWS SAM**  
  *Familia:* `capas internas`  
  Modela aplicaciones serverless y simplifica build, local testing y deployment.

- **Terraform en AWS**  
  *Familia:* `evidencia y latencia`  
  Administra recursos mediante provider, state y plan fuera del servicio nativo.

- **CodeBuild**  
  *Familia:* `análisis y emisión`  
  Ejecuta builds efímeros definidos por buildspec y produce artifacts y reports.

- **CodeDeploy**  
  *Familia:* `tabla de estados`  
  Automatiza despliegues a EC2, Lambda y ECS con estrategias y lifecycle hooks.

- **CodePipeline**  
  *Familia:* `flujo de ejecución`  
  Orquesta stages de source, build, test, approval y deploy.

- **GitHub Actions con OIDC**  
  *Familia:* `comparativa técnica`  
  Obtiene credenciales AWS temporales sin guardar access keys de larga duración.

- **AWS Proton**  
  *Familia:* `jerarquía y dependencias`  
  Estandariza infraestructura de plataformas y templates para equipos de aplicaciones.

- **AWS Service Catalog**  
  *Familia:* `diagnóstico operativo`  
  Publica productos aprobados que equipos pueden provisionar con guardrails.

- **AWS Budgets**  
  *Familia:* `acumulación de recursos`  
  Alerta por costo, uso, cobertura o utilización y puede activar acciones.

- **Cost Explorer**  
  *Familia:* `consulta e índice`  
  Analiza gasto y uso por dimensiones, tags, servicios y periodos.

- **Cost and Usage Report**  
  *Familia:* `anatomía del concepto`  
  Entrega el dataset más detallado de facturación para análisis propios.

- **Cost allocation tags**  
  *Familia:* `cola y consumidor`  
  Atribuyen gasto a producto, equipo, entorno o centro de costo.


### 📑 Sección: Confiabilidad, costo y sostenibilidad (15 conceptos)

- **Alta disponibilidad Multi-AZ**  
  *Familia:* `flujo de ejecución`  
  Distribuye instancias y dependencias entre zonas para tolerar fallos aislados.

- **Multi-Region**  
  *Familia:* `flujo de transformación`  
  Reduce impacto regional a cambio de complejidad en datos, routing, pruebas y costo.

- **Backups y restore testing**  
  *Familia:* `superficie de aplicación`  
  Define políticas y demuestra que los datos pueden restaurarse dentro de RPO y RTO.

- **Disaster recovery strategies**  
  *Familia:* `análisis y emisión`  
  Compara backup/restore, pilot light, warm standby y active-active.

- **RPO y RTO**  
  *Familia:* `ida y vuelta`  
  Cuantifican pérdida de datos tolerable y tiempo objetivo de recuperación.

- **Fault Injection Service**  
  *Familia:* `validación y decisión`  
  Ejecuta experimentos controlados para validar supuestos de resiliencia.

- **Auto Scaling y elasticidad**  
  *Familia:* `capas internas`  
  Ajusta capacidad a demanda sin confundir escalado con alta disponibilidad.

- **Retries, timeouts y jitter**  
  *Familia:* `árbol de recursos`  
  Evitan espera infinita y tormentas sincronizadas ante fallos transitorios.

- **Idempotencia**  
  *Familia:* `anatomía del concepto`  
  Hace seguros los reintentos de comandos frente a respuestas perdidas.

- **Cost Optimization**  
  *Familia:* `propagación de eventos`  
  Elimina recursos ociosos, elige tamaño y compra, y alinea costo con valor.

- **Performance Efficiency**  
  *Familia:* `tabla de estados`  
  Selecciona recursos y arquitectura medidos, revisando opciones a medida que cambia la demanda.

- **Sustainability Pillar**  
  *Familia:* `comparativa técnica`  
  Reduce recursos innecesarios y mejora utilización considerando impacto ambiental.

- **Operational Excellence**  
  *Familia:* `aislamiento sobre host`  
  Opera como código, observa resultados, aprende de fallos y mejora procedimientos.

- **Security Pillar**  
  *Familia:* `ecosistema coordinado`  
  Protege identidad, datos, infraestructura y detección mediante controles verificables.

- **Reliability Pillar**  
  *Familia:* `memoria intermedia`  
  Recupera de fallos, prueba procedimientos y adapta capacidad a la demanda.


### 📑 Sección: Sitio privado con S3, CloudFront y OAC (5 conceptos)

- **Origen S3 privado de extremo a extremo**  
  *Familia:* `análisis y emisión`  
  Mantiene Block Public Access activo y entrega objetos mediante el endpoint regional de S3, dejando a CloudFront como única superficie pública en vez de exponer un website endpoint.

- **OAC y solicitud firmada al origen**  
  *Familia:* `pasaporte del artefacto`  
  Hace que CloudFront firme cada lectura hacia S3 y limita la bucket policy al ARN de una distribución concreta, de modo que una URL directa al bucket permanezca denegada.

- **Cache key y behaviors verificables**  
  *Familia:* `memoria intermedia`  
  Separa path pattern, origen, métodos y política de caché; un Hit reutiliza el objeto y un Miss consulta S3, mientras cookies, headers o query strings innecesarios fragmentan la caché.

- **Invalidación frente a assets versionados**  
  *Familia:* `validación y decisión`  
  Reserva invalidaciones para contenido que debe retirarse y usa nombres con hash para assets inmutables, equilibrando propagación, costo y consistencia entre edge locations.

- **Publicación estática con dry-run y evidencia**  
  *Familia:* `comparativa técnica`  
  Previsualiza aws s3 sync antes de aplicar cambios, trata --delete como operación riesgosa y confirma root object, headers, HTTPS, Cache Hit o Miss y denegación del acceso directo sin subir secretos al navegador.


### 📑 Sección: API serverless con API Gateway y Lambda (5 conceptos)

- **Ruta, stage e integración serverless**  
  *Familia:* `árbol de recursos`  
  Conecta método y path de API Gateway con una integración Lambda y un stage desplegable, preservando un contrato HTTP explícito desde la solicitud hasta el payload de respuesta.

- **JWT authorizer e identidad confiable**  
  *Familia:* `validación y decisión`  
  Valida firma, emisor, audiencia y vigencia antes de invocar la función, y deriva la identidad de claims verificados en lugar de confiar en un userId enviado por el cliente.

- **Handler, inicialización y entorno reutilizado**  
  *Familia:* `flujo de transformación`  
  Mantiene el handler pequeño, coloca clientes reutilizables fuera de la invocación y distingue cold start de ejecución warm sin guardar estado de usuario mutable entre solicitudes.

- **Concurrencia por función y presión compartida**  
  *Familia:* `planificación de trabajo`  
  Relaciona invocaciones simultáneas con cuotas regionales, throttling y downstreams; reserved concurrency puede proteger capacidad o contener una función sin convertirla en escalado ilimitado.

- **Eventos, reintentos y bucles evitables**  
  *Familia:* `ciclo de vida`  
  Procesa eventos de S3, EventBridge o SQS con operaciones idempotentes, separa productor y destino y evita escribir en el mismo patrón que vuelve a disparar la función indefinidamente.


### 📑 Sección: DynamoDB guiado por patrones de acceso (5 conceptos)

- **Patrones de acceso antes del esquema**  
  *Familia:* `análisis y emisión`  
  Enumera preguntas, cardinalidad y volumen antes de elegir partition key y sort key, porque la tabla se diseña para rutas de lectura y escritura concretas y no para joins arbitrarios.

- **Query dirigida frente a Scan exhaustivo**  
  *Familia:* `consulta e índice`  
  Usa Query cuando conoce la partition key y acota rangos por sort key; reserva Scan para casos controlados porque examina items aunque un filtro descarte después buena parte de ellos.

- **Índices y consistencia con costo visible**  
  *Familia:* `jerarquía y dependencias`  
  Proyecta solo los atributos necesarios en GSIs o LSIs, reconoce que un GSI se actualiza con consistencia eventual y solicita lectura fuerte únicamente donde el contrato y la tabla lo permiten.

- **Capacidad, throttling y claves calientes**  
  *Familia:* `capas internas`  
  Elige on-demand o provisioned según predictibilidad, observa consumo y throttles y distribuye tráfico para que una clave popular no concentre la capacidad física disponible.

- **Idempotencia con escrituras condicionales**  
  *Familia:* `flujo de interfaz`  
  Registra una clave estable de operación y usa ConditionExpression o una transacción para que reintentos no dupliquen efectos, diferenciando solicitud repetida de una nueva intención de negocio.


### 📑 Sección: CloudWatch como evidencia operativa (5 conceptos)

- **Logs estructurados, retención y datos sensibles**  
  *Familia:* `evidencia y latencia`  
  Emite eventos con campos estables como requestId, operación y resultado, define retención deliberada y excluye tokens, credenciales y datos sensibles antes de que lleguen al log group.

- **Consultas reproducibles con Logs Insights**  
  *Familia:* `consulta e índice`  
  Filtra, parsea, agrupa y ordena eventos dentro de una ventana temporal explícita para convertir una sospecha en evidencia repetible sin descargar todos los logs.

- **Métricas nativas, percentiles y concurrencia**  
  *Familia:* `planificación de trabajo`  
  Lee invocations, errors, duration, throttles y concurrent executions en conjunto; usa p95 o p99 para ver colas lentas que un promedio puede ocultar.

- **Métricas de negocio con EMF**  
  *Familia:* `evidencia y latencia`  
  Codifica métricas personalizadas dentro de logs mediante Embedded Metric Format y mantiene dimensiones acotadas para evitar cardinalidad explosiva y costos difíciles de atribuir.

- **Alarmas accionables y runbooks**  
  *Familia:* `diagnóstico operativo`  
  Interpreta estados OK, ALARM e INSUFFICIENT_DATA con periodos y umbrales adecuados, notifica por SNS y enlaza un runbook que incluye validación, mitigación y señales de recuperación.


### 📑 Sección: IAM y evaluación de permisos (5 conceptos)

- **Principal, Action, Resource y Condition**  
  *Familia:* `matriz de señales`  
  Lee una autorización como la relación entre quién solicita, qué operación intenta, sobre cuál ARN y bajo qué contexto, evitando comodines cuando esos cuatro ejes pueden delimitarse.

- **Default deny y explicit deny**  
  *Familia:* `flujo de transformación`  
  Parte de denegación implícita, requiere un Allow aplicable y conserva que cualquier Deny explícito coincidente prevalece, incluso cuando otra política parece conceder la operación.

- **Trust policy frente a permissions policy**  
  *Familia:* `validación y decisión`  
  Separa quién puede asumir un role de lo que ese role puede hacer después de asumirlo; ambas políticas deben permitir el flujo correcto sin ampliar identidades ni recursos innecesarios.

- **Least privilege por prefijo y objeto**  
  *Familia:* `análisis y emisión`  
  Distingue ARN de bucket y ARN de objetos, restringe acciones al prefijo requerido y prefiere credenciales temporales, revisando permisos con evidencia real en vez de entregar acceso administrativo.

- **Permiso de invocación y role de ejecución**  
  *Familia:* `comparativa técnica`  
  Diferencia la resource-based policy que permite a un servicio invocar Lambda del execution role que usa la función al acceder a S3, DynamoDB, logs u otros recursos durante su trabajo.


### 📑 Sección: FinOps, atribución y control de gasto (5 conceptos)

- **Cost Explorer como conversación temporal**  
  *Familia:* `evidencia y latencia`  
  Agrupa y filtra costo y uso por servicio, cuenta, región o etiqueta a lo largo del tiempo, comparando periodos para investigar cambios en vez de interpretar una cifra aislada.

- **Etiquetas de asignación y costo compartido**  
  *Familia:* `contratos coordinados`  
  Define claves consistentes para producto, entorno y propietario, activa las cost allocation tags y documenta su demora y los recursos compartidos que aún requieren una regla de reparto.

- **Budgets alerta, no límite duro**  
  *Familia:* `secuencia operativa`  
  Configura umbrales reales y pronosticados con destinatarios responsables, entendiendo que una notificación de AWS Budgets no detiene por sí sola el consumo ni garantiza ausencia de sobrecosto.

- **Budget Actions con guardas operativas**  
  *Familia:* `validación y decisión`  
  Automatiza una política, notificación o acción acotada cuando se cruza un umbral, pero incorpora aprobación, alcance reversible y pruebas para no convertir el ahorro en una caída del servicio.

- **Ciclo FinOps de medir, decidir y verificar**  
  *Familia:* `consulta e índice`  
  Une utilización, demanda y objetivo de servicio para retirar recursos ociosos, ajustar capacidad, almacenamiento y caché, y confirma después que el ahorro no degradó confiabilidad ni experiencia.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Getting Started on AWS](https://aws.amazon.com/getting-started/)** (`tutorial` | Nivel: `beginner`): 
- **[Overview of Amazon Web Services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html)** (`reference` | Nivel: `intermediate`): 
- **[AWS Architecture Center](https://aws.amazon.com/architecture/)** (`reference` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Infraestructura y entrega](Grupo-Delivery) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
