import type { StudyConcept } from "./conceptTypes";

export const awsConcepts = [
  {
    "title": "Cloud computing",
    "description": "Consume capacidad por API y bajo demanda, cambiando inversión fija por recursos elásticos medidos.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "Cloud computing",
      "nodes": [
        "Cloud|entrada",
        "computing|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "cloud computing",
      "caption": "Consume capacidad por API y bajo demanda, cambiando inversión fija por recursos elásticos medidos."
    }
  },
  {
    "title": "IaaS, PaaS y serverless",
    "description": "Compara cuánto administra AWS y cuánto conserva el equipo en cada modelo.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "IaaS, PaaS y serverless",
      "nodes": [
        "IaaS|entrada",
        "PaaS|mecanismo",
        "serverless|estado",
        "result|resultado"
      ],
      "outcome": "iaas, paas y serverless",
      "caption": "Compara cuánto administra AWS y cuánto conserva el equipo en cada modelo."
    }
  },
  {
    "title": "Regiones",
    "description": "Agrupan infraestructura en geografías independientes para residencia, latencia y recuperación.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Region → AZ → data centers",
      "nodes": [
        "Region|geography",
        "AZ|failure domain",
        "edge|global network",
        "workload|placement"
      ],
      "outcome": "alcance elegido",
      "caption": "Agrupan infraestructura en geografías independientes para residencia, latencia y recuperación."
    }
  },
  {
    "title": "Availability Zones",
    "description": "Funcionan como dominios de fallo aislados conectados con redes regionales de baja latencia.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Region → AZ → data centers",
      "nodes": [
        "Region|geography",
        "AZ|failure domain",
        "edge|global network",
        "workload|placement"
      ],
      "outcome": "alcance elegido",
      "caption": "Funcionan como dominios de fallo aislados conectados con redes regionales de baja latencia."
    }
  },
  {
    "title": "Edge locations",
    "description": "Acercan DNS, CDN, protección y computación de borde a los usuarios.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Edge locations",
      "nodes": [
        "Edge|entrada",
        "locations|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "edge locations",
      "caption": "Acercan DNS, CDN, protección y computación de borde a los usuarios."
    }
  },
  {
    "title": "Modelo de responsabilidad compartida",
    "description": "Separa seguridad de la nube administrada por AWS de configuración, identidad y datos del cliente.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Modelo de responsabilidad compartida",
      "nodes": [
        "Modelo|entrada",
        "responsabilidad|mecanismo",
        "compartida|estado",
        "result|resultado"
      ],
      "outcome": "modelo de responsabilidad compartida",
      "caption": "Separa seguridad de la nube administrada por AWS de configuración, identidad y datos del cliente."
    }
  },
  {
    "title": "AWS accounts",
    "description": "Actúan como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "AWS accounts",
      "nodes": [
        "AWS|entrada",
        "accounts|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws accounts",
      "caption": "Actúan como límites fuertes de identidad, facturación, cuotas y aislamiento operativo."
    }
  },
  {
    "title": "Multi-account strategy",
    "description": "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "Multi-account strategy",
      "nodes": [
        "Multi|entrada",
        "account|mecanismo",
        "strategy|estado",
        "result|resultado"
      ],
      "outcome": "multi-account strategy",
      "caption": "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius."
    }
  },
  {
    "title": "Tags y metadata",
    "description": "Asignan propiedad, costo, automatización y contexto operativo a recursos.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Tags y metadata",
      "nodes": [
        "Tags|entrada",
        "metadata|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "tags y metadata",
      "caption": "Asignan propiedad, costo, automatización y contexto operativo a recursos."
    }
  },
  {
    "title": "ARNs",
    "description": "Identifican recursos globalmente mediante partición, servicio, región, cuenta y recurso.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "ARNs",
      "nodes": [
        "ARNs|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "arns",
      "caption": "Identifican recursos globalmente mediante partición, servicio, región, cuenta y recurso."
    }
  },
  {
    "title": "AWS CLI, SDKs y Console",
    "description": "Ofrecen interfaces distintas sobre las mismas APIs y credenciales.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "AWS CLI, SDKs y Console",
      "nodes": [
        "AWS|entrada",
        "CLI|mecanismo",
        "SDKs|estado",
        "Console|resultado"
      ],
      "outcome": "aws cli, sdks y console",
      "caption": "Ofrecen interfaces distintas sobre las mismas APIs y credenciales."
    }
  },
  {
    "title": "AWS Well-Architected Framework",
    "description": "Evalúa cargas con seis pilares: excelencia operativa, seguridad, confiabilidad, rendimiento, costo y sostenibilidad.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "6 pillars",
      "nodes": [
        "operations|evolve",
        "security|protect",
        "reliability|recover",
        "cost/performance|optimize"
      ],
      "outcome": "arquitectura revisada",
      "caption": "Evalúa cargas con seis pilares: excelencia operativa, seguridad, confiabilidad, rendimiento, costo y sostenibilidad."
    }
  },
  {
    "title": "Arquitectura orientada a fallos",
    "description": "Asume que instancias, zonas, redes y dependencias pueden fallar y diseña recuperación automatizada.",
    "section": "Fundamentos de nube y arquitectura AWS",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "Arquitectura orientada a fallos",
      "nodes": [
        "Arquitectura|entrada",
        "orientada|mecanismo",
        "fallos|estado",
        "result|resultado"
      ],
      "outcome": "arquitectura orientada a fallos",
      "caption": "Asume que instancias, zonas, redes y dependencias pueden fallar y diseña recuperación automatizada."
    }
  },
  {
    "title": "IAM users",
    "description": "Representan identidades de larga duración y deben evitarse para workloads cuando existen roles temporales.",
    "section": "Identidad, gobierno y seguridad",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Representan identidades de larga duración y deben evitarse para workloads cuando existen roles temporales."
    }
  },
  {
    "title": "IAM roles",
    "description": "Proporcionan credenciales temporales asumibles por personas, servicios, workloads o cuentas.",
    "section": "Identidad, gobierno y seguridad",
    "family": "árbol de recursos",
    "layout": "compact",
    "scene": {
      "variant": "filesystem",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Proporcionan credenciales temporales asumibles por personas, servicios, workloads o cuentas."
    }
  },
  {
    "title": "IAM policies",
    "description": "Declaran Effect, Action, Resource y Condition para autorizar o denegar operaciones.",
    "section": "Identidad, gobierno y seguridad",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Declaran Effect, Action, Resource y Condition para autorizar o denegar operaciones."
    }
  },
  {
    "title": "Evaluación de políticas IAM",
    "description": "Combina identity policies, resource policies, boundaries, SCPs y explicit deny.",
    "section": "Identidad, gobierno y seguridad",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Combina identity policies, resource policies, boundaries, SCPs y explicit deny."
    }
  },
  {
    "title": "Principals y STS",
    "description": "Intercambian confianza por sesiones temporales con duración y contexto limitados.",
    "section": "Identidad, gobierno y seguridad",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Intercambian confianza por sesiones temporales con duración y contexto limitados."
    }
  },
  {
    "title": "Least privilege en AWS",
    "description": "Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica.",
    "section": "Identidad, gobierno y seguridad",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "Least privilege en AWS",
      "nodes": [
        "Least|entrada",
        "privilege|mecanismo",
        "AWS|estado",
        "result|resultado"
      ],
      "outcome": "least privilege en aws",
      "caption": "Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica."
    }
  },
  {
    "title": "Permission boundaries",
    "description": "Limitan el máximo permiso que una identity policy puede conceder.",
    "section": "Identidad, gobierno y seguridad",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Limitan el máximo permiso que una identity policy puede conceder."
    }
  },
  {
    "title": "Resource-based policies",
    "description": "Conceden acceso desde el recurso y pueden habilitar relaciones cross-account.",
    "section": "Identidad, gobierno y seguridad",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "Resource-based policies",
      "nodes": [
        "Resource|entrada",
        "based|mecanismo",
        "policies|estado",
        "result|resultado"
      ],
      "outcome": "resource-based policies",
      "caption": "Conceden acceso desde el recurso y pueden habilitar relaciones cross-account."
    }
  },
  {
    "title": "AWS Organizations",
    "description": "Agrupa cuentas, centraliza facturación y aplica gobierno jerárquico.",
    "section": "Identidad, gobierno y seguridad",
    "family": "flujo de ejecución",
    "layout": "compact",
    "scene": {
      "variant": "flow",
      "code": "Organization → OU → accounts",
      "nodes": [
        "management|governance",
        "OU|group",
        "account|boundary",
        "SCP|guardrail"
      ],
      "outcome": "gobierno multi-cuenta",
      "caption": "Agrupa cuentas, centraliza facturación y aplica gobierno jerárquico."
    }
  },
  {
    "title": "Organizational Units y SCPs",
    "description": "Agrupan cuentas y definen guardrails máximos sin otorgar permisos por sí mismos.",
    "section": "Identidad, gobierno y seguridad",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Organization → OU → accounts",
      "nodes": [
        "management|governance",
        "OU|group",
        "account|boundary",
        "SCP|guardrail"
      ],
      "outcome": "gobierno multi-cuenta",
      "caption": "Agrupan cuentas y definen guardrails máximos sin otorgar permisos por sí mismos."
    }
  },
  {
    "title": "AWS Control Tower",
    "description": "Configura una landing zone multi-account con controles, account factory y gobierno continuo.",
    "section": "Identidad, gobierno y seguridad",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Organization → OU → accounts",
      "nodes": [
        "management|governance",
        "OU|group",
        "account|boundary",
        "SCP|guardrail"
      ],
      "outcome": "gobierno multi-cuenta",
      "caption": "Configura una landing zone multi-account con controles, account factory y gobierno continuo."
    }
  },
  {
    "title": "IAM Identity Center",
    "description": "Centraliza acceso humano a cuentas y aplicaciones con sesiones federadas.",
    "section": "Identidad, gobierno y seguridad",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Centraliza acceso humano a cuentas y aplicaciones con sesiones federadas."
    }
  },
  {
    "title": "AWS KMS",
    "description": "Administra claves y operaciones criptográficas con policies, grants, rotación y auditoría.",
    "section": "Identidad, gobierno y seguridad",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "data key + KMS key",
      "nodes": [
        "plaintext|input",
        "data key|encrypts",
        "KMS key|wraps",
        "ciphertext|stored"
      ],
      "outcome": "cifrado por envoltura",
      "caption": "Administra claves y operaciones criptográficas con policies, grants, rotación y auditoría."
    }
  },
  {
    "title": "Envelope encryption",
    "description": "Cifra datos con data keys y protege esas claves con una KMS key.",
    "section": "Identidad, gobierno y seguridad",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "data key + KMS key",
      "nodes": [
        "plaintext|input",
        "data key|encrypts",
        "KMS key|wraps",
        "ciphertext|stored"
      ],
      "outcome": "cifrado por envoltura",
      "caption": "Cifra datos con data keys y protege esas claves con una KMS key."
    }
  },
  {
    "title": "Secrets Manager",
    "description": "Versiona, rota y entrega secretos autorizados a workloads.",
    "section": "Identidad, gobierno y seguridad",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "app → secret reference → value",
      "nodes": [
        "application|identity",
        "service|authorization",
        "secret|version",
        "rotation|lifecycle"
      ],
      "outcome": "secreto entregado",
      "caption": "Versiona, rota y entrega secretos autorizados a workloads."
    }
  },
  {
    "title": "Systems Manager Parameter Store",
    "description": "Almacena configuración y valores protegidos con jerarquía e integración IAM.",
    "section": "Identidad, gobierno y seguridad",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "app → secret reference → value",
      "nodes": [
        "application|identity",
        "service|authorization",
        "secret|version",
        "rotation|lifecycle"
      ],
      "outcome": "secreto entregado",
      "caption": "Almacena configuración y valores protegidos con jerarquía e integración IAM."
    }
  },
  {
    "title": "AWS Certificate Manager",
    "description": "Emite y renueva certificados usados por servicios integrados como load balancers y CloudFront.",
    "section": "Identidad, gobierno y seguridad",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "AWS Certificate Manager",
      "nodes": [
        "AWS|entrada",
        "Certificate|mecanismo",
        "Manager|estado",
        "result|resultado"
      ],
      "outcome": "aws certificate manager",
      "caption": "Emite y renueva certificados usados por servicios integrados como load balancers y CloudFront."
    }
  },
  {
    "title": "CloudTrail",
    "description": "Registra actividad de API para auditoría, investigación y gobierno.",
    "section": "Identidad, gobierno y seguridad",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "API call → event history",
      "nodes": [
        "principal|who",
        "action|what",
        "resource|where",
        "trail|archive"
      ],
      "outcome": "actividad auditada",
      "caption": "Registra actividad de API para auditoría, investigación y gobierno."
    }
  },
  {
    "title": "AWS Config",
    "description": "Evalúa cambios y conformidad de configuración a lo largo del tiempo.",
    "section": "Identidad, gobierno y seguridad",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "AWS Config",
      "nodes": [
        "AWS|entrada",
        "Config|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws config",
      "caption": "Evalúa cambios y conformidad de configuración a lo largo del tiempo."
    }
  },
  {
    "title": "GuardDuty, Security Hub e Inspector",
    "description": "Combinan detección de amenazas, postura centralizada y análisis de vulnerabilidades.",
    "section": "Identidad, gobierno y seguridad",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "GuardDuty, Security Hub e Inspector",
      "nodes": [
        "GuardDuty|entrada",
        "Security|mecanismo",
        "Hub|estado",
        "Inspector|resultado"
      ],
      "outcome": "guardduty, security hub e inspector",
      "caption": "Combinan detección de amenazas, postura centralizada y análisis de vulnerabilidades."
    }
  },
  {
    "title": "Amazon Macie",
    "description": "Descubre y clasifica datos sensibles almacenados en S3.",
    "section": "Identidad, gobierno y seguridad",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "Amazon Macie",
      "nodes": [
        "Amazon|entrada",
        "Macie|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "amazon macie",
      "caption": "Descubre y clasifica datos sensibles almacenados en S3."
    }
  },
  {
    "title": "Amazon VPC",
    "description": "Crea una red virtual regional con direcciones, subnets, rutas y controles propios.",
    "section": "Networking y conectividad",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "10.0.0.0/16",
      "nodes": [
        "VPC|address space",
        "public subnet|route to IGW",
        "private subnet|no direct route",
        "AZ|placement"
      ],
      "outcome": "red aislada",
      "caption": "Crea una red virtual regional con direcciones, subnets, rutas y controles propios."
    }
  },
  {
    "title": "IPv4 e IPv6 en VPC",
    "description": "Planifica rangos, dual-stack, egress y crecimiento sin solapamientos.",
    "section": "Networking y conectividad",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "10.0.0.0/16",
      "nodes": [
        "VPC|address space",
        "public subnet|route to IGW",
        "private subnet|no direct route",
        "AZ|placement"
      ],
      "outcome": "red aislada",
      "caption": "Planifica rangos, dual-stack, egress y crecimiento sin solapamientos."
    }
  },
  {
    "title": "Subnets públicas y privadas",
    "description": "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
    "section": "Networking y conectividad",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "10.0.0.0/16",
      "nodes": [
        "VPC|address space",
        "public subnet|route to IGW",
        "private subnet|no direct route",
        "AZ|placement"
      ],
      "outcome": "red aislada",
      "caption": "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway."
    }
  },
  {
    "title": "Route tables",
    "description": "Seleccionan target por prefijo más específico para cada paquete que sale de una subnet.",
    "section": "Networking y conectividad",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "destination → target",
      "nodes": [
        "local|VPC",
        "0.0.0.0/0|gateway",
        "prefix|longest match",
        "packet|forwarded"
      ],
      "outcome": "ruta seleccionada",
      "caption": "Seleccionan target por prefijo más específico para cada paquete que sale de una subnet."
    }
  },
  {
    "title": "Internet Gateway",
    "description": "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada.",
    "section": "Networking y conectividad",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "IGW vs NAT Gateway",
      "nodes": [
        "IGW|public two-way",
        "NAT|private egress",
        "route|required",
        "IP|translation"
      ],
      "outcome": "salida diseñada",
      "caption": "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada."
    }
  },
  {
    "title": "NAT Gateway",
    "description": "Permite egress IPv4 desde subnets privadas sin aceptar conexiones iniciadas desde Internet.",
    "section": "Networking y conectividad",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "IGW vs NAT Gateway",
      "nodes": [
        "IGW|public two-way",
        "NAT|private egress",
        "route|required",
        "IP|translation"
      ],
      "outcome": "salida diseñada",
      "caption": "Permite egress IPv4 desde subnets privadas sin aceptar conexiones iniciadas desde Internet."
    }
  },
  {
    "title": "Egress-only Internet Gateway",
    "description": "Ofrece salida IPv6 desde VPC sin permitir conexiones entrantes iniciadas externamente.",
    "section": "Networking y conectividad",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "IGW vs NAT Gateway",
      "nodes": [
        "IGW|public two-way",
        "NAT|private egress",
        "route|required",
        "IP|translation"
      ],
      "outcome": "salida diseñada",
      "caption": "Ofrece salida IPv6 desde VPC sin permitir conexiones entrantes iniciadas externamente."
    }
  },
  {
    "title": "Security Groups",
    "description": "Aplican reglas stateful a ENIs y permiten referencias entre grupos.",
    "section": "Networking y conectividad",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "stateful firewall",
      "nodes": [
        "ENI|attached",
        "inbound|rules",
        "state|return allowed",
        "outbound|rules"
      ],
      "outcome": "tráfico permitido",
      "caption": "Aplican reglas stateful a ENIs y permiten referencias entre grupos."
    }
  },
  {
    "title": "Network ACLs",
    "description": "Aplican reglas stateless y ordenadas en el límite de la subnet.",
    "section": "Networking y conectividad",
    "family": "flujo de ejecución",
    "layout": "compact",
    "scene": {
      "variant": "flow",
      "code": "SG vs NACL",
      "nodes": [
        "SG|stateful",
        "NACL|stateless",
        "ENI|scope",
        "subnet|scope"
      ],
      "outcome": "control elegido",
      "caption": "Aplican reglas stateless y ordenadas en el límite de la subnet."
    }
  },
  {
    "title": "Elastic Network Interfaces",
    "description": "Representan interfaces virtuales con direcciones, security groups y atributos movibles.",
    "section": "Networking y conectividad",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "Elastic Network Interfaces",
      "nodes": [
        "Elastic|entrada",
        "Network|mecanismo",
        "Interfaces|estado",
        "result|resultado"
      ],
      "outcome": "elastic network interfaces",
      "caption": "Representan interfaces virtuales con direcciones, security groups y atributos movibles."
    }
  },
  {
    "title": "Elastic IPs",
    "description": "Son direcciones IPv4 públicas estáticas que deben usarse con propósito y costo consciente.",
    "section": "Networking y conectividad",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "Elastic IPs",
      "nodes": [
        "Elastic|entrada",
        "IPs|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "elastic ips",
      "caption": "Son direcciones IPv4 públicas estáticas que deben usarse con propósito y costo consciente."
    }
  },
  {
    "title": "VPC Peering",
    "description": "Conecta dos VPC sin routing transitivo y exige rangos no solapados.",
    "section": "Networking y conectividad",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "10.0.0.0/16",
      "nodes": [
        "VPC|address space",
        "public subnet|route to IGW",
        "private subnet|no direct route",
        "AZ|placement"
      ],
      "outcome": "red aislada",
      "caption": "Conecta dos VPC sin routing transitivo y exige rangos no solapados."
    }
  },
  {
    "title": "Transit Gateway",
    "description": "Centraliza routing entre múltiples VPC, VPNs y redes on-premises.",
    "section": "Networking y conectividad",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "networks → connectivity hub",
      "nodes": [
        "VPC|spokes",
        "TGW|hub",
        "peering|pair",
        "PrivateLink|service exposure"
      ],
      "outcome": "conectividad privada",
      "caption": "Centraliza routing entre múltiples VPC, VPNs y redes on-premises."
    }
  },
  {
    "title": "AWS PrivateLink",
    "description": "Expone un servicio mediante endpoints privados sin compartir routing completo.",
    "section": "Networking y conectividad",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "AWS PrivateLink",
      "nodes": [
        "AWS|entrada",
        "PrivateLink|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws privatelink",
      "caption": "Expone un servicio mediante endpoints privados sin compartir routing completo."
    }
  },
  {
    "title": "VPC endpoints",
    "description": "Acceden a servicios AWS por gateway o interface endpoints evitando Internet público.",
    "section": "Networking y conectividad",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "10.0.0.0/16",
      "nodes": [
        "VPC|address space",
        "public subnet|route to IGW",
        "private subnet|no direct route",
        "AZ|placement"
      ],
      "outcome": "red aislada",
      "caption": "Acceden a servicios AWS por gateway o interface endpoints evitando Internet público."
    }
  },
  {
    "title": "Site-to-Site VPN",
    "description": "Conecta redes por túneles IPsec redundantes sobre Internet.",
    "section": "Networking y conectividad",
    "family": "diagnóstico operativo",
    "layout": "compact",
    "scene": {
      "variant": "terminal",
      "code": "Site-to-Site VPN",
      "nodes": [
        "Site|entrada",
        "Site|mecanismo",
        "VPN|estado",
        "result|resultado"
      ],
      "outcome": "site-to-site vpn",
      "caption": "Conecta redes por túneles IPsec redundantes sobre Internet."
    }
  },
  {
    "title": "Direct Connect",
    "description": "Proporciona conectividad dedicada con modelos de resiliencia y virtual interfaces.",
    "section": "Networking y conectividad",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "Direct Connect",
      "nodes": [
        "Direct|entrada",
        "Connect|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "direct connect",
      "caption": "Proporciona conectividad dedicada con modelos de resiliencia y virtual interfaces."
    }
  },
  {
    "title": "Route 53 Resolver",
    "description": "Resuelve DNS entre VPC y on-premises mediante endpoints y rules.",
    "section": "Networking y conectividad",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "name → DNS records → endpoint",
      "nodes": [
        "hosted zone|authority",
        "record|answer",
        "health check|status",
        "routing policy|choice"
      ],
      "outcome": "nombre encaminado",
      "caption": "Resuelve DNS entre VPC y on-premises mediante endpoints y rules."
    }
  },
  {
    "title": "VPC Flow Logs",
    "description": "Registra metadata de tráfico aceptado o rechazado para investigar rutas y reglas.",
    "section": "Networking y conectividad",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "10.0.0.0/16",
      "nodes": [
        "VPC|address space",
        "public subnet|route to IGW",
        "private subnet|no direct route",
        "AZ|placement"
      ],
      "outcome": "red aislada",
      "caption": "Registra metadata de tráfico aceptado o rechazado para investigar rutas y reglas."
    }
  },
  {
    "title": "Reachability Analyzer",
    "description": "Modela el camino de red y señala el componente que bloquea conectividad.",
    "section": "Networking y conectividad",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "Reachability Analyzer",
      "nodes": [
        "Reachability|entrada",
        "Analyzer|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "reachability analyzer",
      "caption": "Modela el camino de red y señala el componente que bloquea conectividad."
    }
  },
  {
    "title": "Amazon EC2",
    "description": "Ejecuta servidores virtuales con tipo, AMI, red, storage y modelo de compra elegidos.",
    "section": "Compute, balanceo y escalado",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "AMI → instance type → EC2",
      "nodes": [
        "AMI|software",
        "type|CPU/memory",
        "EBS|storage",
        "ENI|network"
      ],
      "outcome": "servidor lanzado",
      "caption": "Ejecuta servidores virtuales con tipo, AMI, red, storage y modelo de compra elegidos."
    }
  },
  {
    "title": "AMI",
    "description": "Versiona el template de sistema, software y configuración usado para lanzar instancias.",
    "section": "Compute, balanceo y escalado",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "AMI",
      "nodes": [
        "AMI|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "ami",
      "caption": "Versiona el template de sistema, software y configuración usado para lanzar instancias."
    }
  },
  {
    "title": "Instance types",
    "description": "Equilibran CPU, memoria, red, aceleradores y storage local para distintos workloads.",
    "section": "Compute, balanceo y escalado",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "AMI → instance type → EC2",
      "nodes": [
        "AMI|software",
        "type|CPU/memory",
        "EBS|storage",
        "ENI|network"
      ],
      "outcome": "servidor lanzado",
      "caption": "Equilibran CPU, memoria, red, aceleradores y storage local para distintos workloads."
    }
  },
  {
    "title": "User data y cloud-init",
    "description": "Inicializan una instancia al arrancar, pero deben ser idempotentes y observables.",
    "section": "Compute, balanceo y escalado",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "User data y cloud-init",
      "nodes": [
        "User|entrada",
        "data|mecanismo",
        "cloud|estado",
        "init|resultado"
      ],
      "outcome": "user data y cloud-init",
      "caption": "Inicializan una instancia al arrancar, pero deben ser idempotentes y observables."
    }
  },
  {
    "title": "EBS-backed vs instance store",
    "description": "Compara bloques persistentes administrados con discos locales efímeros de alta velocidad.",
    "section": "Compute, balanceo y escalado",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "AMI → instance type → EC2",
      "nodes": [
        "AMI|software",
        "type|CPU/memory",
        "EBS|storage",
        "ENI|network"
      ],
      "outcome": "servidor lanzado",
      "caption": "Compara bloques persistentes administrados con discos locales efímeros de alta velocidad."
    }
  },
  {
    "title": "On-Demand Instances",
    "description": "Cobran capacidad sin compromiso y ofrecen flexibilidad para cargas variables.",
    "section": "Compute, balanceo y escalado",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "AMI → instance type → EC2",
      "nodes": [
        "AMI|software",
        "type|CPU/memory",
        "EBS|storage",
        "ENI|network"
      ],
      "outcome": "servidor lanzado",
      "caption": "Cobran capacidad sin compromiso y ofrecen flexibilidad para cargas variables."
    }
  },
  {
    "title": "Savings Plans y Reserved Instances",
    "description": "Intercambian compromiso de uso por descuento con alcances y flexibilidad diferentes.",
    "section": "Compute, balanceo y escalado",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "AMI → instance type → EC2",
      "nodes": [
        "AMI|software",
        "type|CPU/memory",
        "EBS|storage",
        "ENI|network"
      ],
      "outcome": "servidor lanzado",
      "caption": "Intercambian compromiso de uso por descuento con alcances y flexibilidad diferentes."
    }
  },
  {
    "title": "Spot Instances",
    "description": "Usan capacidad sobrante interrumpible para trabajos tolerantes a fallos.",
    "section": "Compute, balanceo y escalado",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "AMI → instance type → EC2",
      "nodes": [
        "AMI|software",
        "type|CPU/memory",
        "EBS|storage",
        "ENI|network"
      ],
      "outcome": "servidor lanzado",
      "caption": "Usan capacidad sobrante interrumpible para trabajos tolerantes a fallos."
    }
  },
  {
    "title": "EC2 Auto Scaling",
    "description": "Mantiene capacidad deseada, reemplaza instancias no saludables y escala con políticas.",
    "section": "Compute, balanceo y escalado",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "AMI → instance type → EC2",
      "nodes": [
        "AMI|software",
        "type|CPU/memory",
        "EBS|storage",
        "ENI|network"
      ],
      "outcome": "servidor lanzado",
      "caption": "Mantiene capacidad deseada, reemplaza instancias no saludables y escala con políticas."
    }
  },
  {
    "title": "Launch Templates",
    "description": "Versionan configuración de lanzamiento para Auto Scaling y operaciones repetibles.",
    "section": "Compute, balanceo y escalado",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "Launch Templates",
      "nodes": [
        "Launch|entrada",
        "Templates|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "launch templates",
      "caption": "Versionan configuración de lanzamiento para Auto Scaling y operaciones repetibles."
    }
  },
  {
    "title": "Elastic Load Balancing",
    "description": "Distribuye conexiones entre targets saludables y desacopla clientes de instancias.",
    "section": "Compute, balanceo y escalado",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "Elastic Load Balancing",
      "nodes": [
        "Elastic|entrada",
        "Load|mecanismo",
        "Balancing|estado",
        "result|resultado"
      ],
      "outcome": "elastic load balancing",
      "caption": "Distribuye conexiones entre targets saludables y desacopla clientes de instancias."
    }
  },
  {
    "title": "Application Load Balancer",
    "description": "Enruta HTTP/HTTPS por host, path, headers y target groups.",
    "section": "Compute, balanceo y escalado",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "client → load balancer → targets",
      "nodes": [
        "listener|port",
        "rule|route",
        "target group|health",
        "instances|serve"
      ],
      "outcome": "tráfico distribuido",
      "caption": "Enruta HTTP/HTTPS por host, path, headers y target groups."
    }
  },
  {
    "title": "Network Load Balancer",
    "description": "Maneja TCP, UDP y TLS con alto rendimiento y direcciones estáticas opcionales.",
    "section": "Compute, balanceo y escalado",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "client → load balancer → targets",
      "nodes": [
        "listener|port",
        "rule|route",
        "target group|health",
        "instances|serve"
      ],
      "outcome": "tráfico distribuido",
      "caption": "Maneja TCP, UDP y TLS con alto rendimiento y direcciones estáticas opcionales."
    }
  },
  {
    "title": "Gateway Load Balancer",
    "description": "Inserta appliances virtuales de red de forma transparente y escalable.",
    "section": "Compute, balanceo y escalado",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "client → load balancer → targets",
      "nodes": [
        "listener|port",
        "rule|route",
        "target group|health",
        "instances|serve"
      ],
      "outcome": "tráfico distribuido",
      "caption": "Inserta appliances virtuales de red de forma transparente y escalable."
    }
  },
  {
    "title": "Target Groups y health checks",
    "description": "Definen backends, protocolo, puerto, registro y criterio para recibir tráfico.",
    "section": "Compute, balanceo y escalado",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "Target Groups y health checks",
      "nodes": [
        "Target|entrada",
        "Groups|mecanismo",
        "health|estado",
        "checks|resultado"
      ],
      "outcome": "target groups y health checks",
      "caption": "Definen backends, protocolo, puerto, registro y criterio para recibir tráfico."
    }
  },
  {
    "title": "Elastic Beanstalk",
    "description": "Orquesta infraestructura de aplicaciones manteniendo acceso a recursos subyacentes.",
    "section": "Compute, balanceo y escalado",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "Elastic Beanstalk",
      "nodes": [
        "Elastic|entrada",
        "Beanstalk|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "elastic beanstalk",
      "caption": "Orquesta infraestructura de aplicaciones manteniendo acceso a recursos subyacentes."
    }
  },
  {
    "title": "Lightsail",
    "description": "Simplifica compute, red y storage para cargas pequeñas con configuración predecible.",
    "section": "Compute, balanceo y escalado",
    "family": "contratos coordinados",
    "layout": "compact",
    "scene": {
      "variant": "cards",
      "code": "Lightsail",
      "nodes": [
        "Lightsail|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "lightsail",
      "caption": "Simplifica compute, red y storage para cargas pequeñas con configuración predecible."
    }
  },
  {
    "title": "Amazon ECR",
    "description": "Almacena imágenes OCI, lifecycle policies, scanning y replicación.",
    "section": "Contenedores y serverless",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "build → scan → registry → pull",
      "nodes": [
        "image|artifact",
        "scan|findings",
        "ECR|versions",
        "runtime|pull"
      ],
      "outcome": "imagen distribuida",
      "caption": "Almacena imágenes OCI, lifecycle policies, scanning y replicación."
    }
  },
  {
    "title": "Amazon ECS",
    "description": "Orquesta tasks y services con integración nativa de IAM, ELB y observabilidad.",
    "section": "Contenedores y serverless",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "task definition → service → tasks",
      "nodes": [
        "image|container",
        "task|unit",
        "service|desired count",
        "Fargate/EC2|capacity"
      ],
      "outcome": "contenedores orquestados",
      "caption": "Orquesta tasks y services con integración nativa de IAM, ELB y observabilidad."
    }
  },
  {
    "title": "Task Definitions",
    "description": "Versionan imagen, CPU, memoria, ports, env, secrets, logging y roles de un task.",
    "section": "Contenedores y serverless",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "Task Definitions",
      "nodes": [
        "Task|entrada",
        "Definitions|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "task definitions",
      "caption": "Versionan imagen, CPU, memoria, ports, env, secrets, logging y roles de un task."
    }
  },
  {
    "title": "ECS Services",
    "description": "Mantienen desired count, despliegues, health y registro en load balancers.",
    "section": "Contenedores y serverless",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "task definition → service → tasks",
      "nodes": [
        "image|container",
        "task|unit",
        "service|desired count",
        "Fargate/EC2|capacity"
      ],
      "outcome": "contenedores orquestados",
      "caption": "Mantienen desired count, despliegues, health y registro en load balancers."
    }
  },
  {
    "title": "Fargate",
    "description": "Ejecuta tasks o pods sin administrar instancias, cobrando recursos solicitados.",
    "section": "Contenedores y serverless",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "task definition → service → tasks",
      "nodes": [
        "image|container",
        "task|unit",
        "service|desired count",
        "Fargate/EC2|capacity"
      ],
      "outcome": "contenedores orquestados",
      "caption": "Ejecuta tasks o pods sin administrar instancias, cobrando recursos solicitados."
    }
  },
  {
    "title": "ECS Capacity Providers",
    "description": "Relacionan services con Fargate o Auto Scaling Groups y estrategias de capacidad.",
    "section": "Contenedores y serverless",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "task definition → service → tasks",
      "nodes": [
        "image|container",
        "task|unit",
        "service|desired count",
        "Fargate/EC2|capacity"
      ],
      "outcome": "contenedores orquestados",
      "caption": "Relacionan services con Fargate o Auto Scaling Groups y estrategias de capacidad."
    }
  },
  {
    "title": "Amazon EKS",
    "description": "Proporciona control plane Kubernetes administrado con opciones de nodes y networking.",
    "section": "Contenedores y serverless",
    "family": "flujo de ejecución",
    "layout": "compact",
    "scene": {
      "variant": "flow",
      "code": "control plane → nodes → pods",
      "nodes": [
        "EKS|control plane",
        "node group|compute",
        "pod|workload",
        "service|network"
      ],
      "outcome": "cluster administrado",
      "caption": "Proporciona control plane Kubernetes administrado con opciones de nodes y networking."
    }
  },
  {
    "title": "Managed Node Groups",
    "description": "Administran ciclo de vida de grupos EC2 usados por pods de EKS.",
    "section": "Contenedores y serverless",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "Managed Node Groups",
      "nodes": [
        "Managed|entrada",
        "Node|mecanismo",
        "Groups|estado",
        "result|resultado"
      ],
      "outcome": "managed node groups",
      "caption": "Administran ciclo de vida de grupos EC2 usados por pods de EKS."
    }
  },
  {
    "title": "IRSA y EKS Pod Identity",
    "description": "Entregan permisos AWS a pods sin reutilizar credenciales del node.",
    "section": "Contenedores y serverless",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Entregan permisos AWS a pods sin reutilizar credenciales del node."
    }
  },
  {
    "title": "AWS Lambda",
    "description": "Ejecuta funciones por eventos con escalado automático y límites de runtime.",
    "section": "Contenedores y serverless",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "event → Lambda → result",
      "nodes": [
        "event|trigger",
        "runtime|invocation",
        "concurrency|scales",
        "destination|result"
      ],
      "outcome": "función ejecutada",
      "caption": "Ejecuta funciones por eventos con escalado automático y límites de runtime."
    }
  },
  {
    "title": "Lambda concurrency",
    "description": "Distingue concurrency disponible, reservada y provisionada para control de escala y latencia.",
    "section": "Contenedores y serverless",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "event → Lambda → result",
      "nodes": [
        "event|trigger",
        "runtime|invocation",
        "concurrency|scales",
        "destination|result"
      ],
      "outcome": "función ejecutada",
      "caption": "Distingue concurrency disponible, reservada y provisionada para control de escala y latencia."
    }
  },
  {
    "title": "Lambda cold starts",
    "description": "Explica inicialización de entorno, runtime y código antes de una invocación caliente.",
    "section": "Contenedores y serverless",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "event → Lambda → result",
      "nodes": [
        "event|trigger",
        "runtime|invocation",
        "concurrency|scales",
        "destination|result"
      ],
      "outcome": "función ejecutada",
      "caption": "Explica inicialización de entorno, runtime y código antes de una invocación caliente."
    }
  },
  {
    "title": "Lambda layers y extensions",
    "description": "Comparten dependencias o integran agentes alrededor del runtime con tradeoffs.",
    "section": "Contenedores y serverless",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "event → Lambda → result",
      "nodes": [
        "event|trigger",
        "runtime|invocation",
        "concurrency|scales",
        "destination|result"
      ],
      "outcome": "función ejecutada",
      "caption": "Comparten dependencias o integran agentes alrededor del runtime con tradeoffs."
    }
  },
  {
    "title": "AWS App Runner",
    "description": "Despliega servicios web desde código o imagen con infraestructura administrada.",
    "section": "Contenedores y serverless",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "AWS App Runner",
      "nodes": [
        "AWS|entrada",
        "App|mecanismo",
        "Runner|estado",
        "result|resultado"
      ],
      "outcome": "aws app runner",
      "caption": "Despliega servicios web desde código o imagen con infraestructura administrada."
    }
  },
  {
    "title": "AWS Batch",
    "description": "Planifica trabajos batch sobre capacidad administrada y colas por prioridad.",
    "section": "Contenedores y serverless",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "AWS Batch",
      "nodes": [
        "AWS|entrada",
        "Batch|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws batch",
      "caption": "Planifica trabajos batch sobre capacidad administrada y colas por prioridad."
    }
  },
  {
    "title": "Amazon S3",
    "description": "Almacena objetos en buckets con keys, metadata, versioning, policies y consistencia fuerte.",
    "section": "Storage y entrega de contenido",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "bucket / key / object",
      "nodes": [
        "bucket|namespace",
        "key|identity",
        "object|bytes + metadata",
        "version|history"
      ],
      "outcome": "objeto almacenado",
      "caption": "Almacena objetos en buckets con keys, metadata, versioning, policies y consistencia fuerte."
    }
  },
  {
    "title": "S3 bucket y object keys",
    "description": "Distingue namespace del bucket de una key plana que puede simular prefijos.",
    "section": "Storage y entrega de contenido",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "bucket / key / object",
      "nodes": [
        "bucket|namespace",
        "key|identity",
        "object|bytes + metadata",
        "version|history"
      ],
      "outcome": "objeto almacenado",
      "caption": "Distingue namespace del bucket de una key plana que puede simular prefijos."
    }
  },
  {
    "title": "S3 Versioning",
    "description": "Conserva múltiples versiones y delete markers para recuperación y replicación.",
    "section": "Storage y entrega de contenido",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "bucket / key / object",
      "nodes": [
        "bucket|namespace",
        "key|identity",
        "object|bytes + metadata",
        "version|history"
      ],
      "outcome": "objeto almacenado",
      "caption": "Conserva múltiples versiones y delete markers para recuperación y replicación."
    }
  },
  {
    "title": "S3 Storage Classes",
    "description": "Elige costo y patrón de acceso entre clases frecuentes, infrecuentes y archivo.",
    "section": "Storage y entrega de contenido",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "bucket / key / object",
      "nodes": [
        "bucket|namespace",
        "key|identity",
        "object|bytes + metadata",
        "version|history"
      ],
      "outcome": "objeto almacenado",
      "caption": "Elige costo y patrón de acceso entre clases frecuentes, infrecuentes y archivo."
    }
  },
  {
    "title": "S3 Lifecycle Policies",
    "description": "Transicionan o expiran objetos y versiones según reglas declarativas.",
    "section": "Storage y entrega de contenido",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "bucket / key / object",
      "nodes": [
        "bucket|namespace",
        "key|identity",
        "object|bytes + metadata",
        "version|history"
      ],
      "outcome": "objeto almacenado",
      "caption": "Transicionan o expiran objetos y versiones según reglas declarativas."
    }
  },
  {
    "title": "S3 Encryption",
    "description": "Aplica cifrado del lado del servidor con claves S3, KMS o proporcionadas por cliente.",
    "section": "Storage y entrega de contenido",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "data key + KMS key",
      "nodes": [
        "plaintext|input",
        "data key|encrypts",
        "KMS key|wraps",
        "ciphertext|stored"
      ],
      "outcome": "cifrado por envoltura",
      "caption": "Aplica cifrado del lado del servidor con claves S3, KMS o proporcionadas por cliente."
    }
  },
  {
    "title": "S3 Bucket Policies y Block Public Access",
    "description": "Controlan acceso a nivel de recurso y previenen exposición pública accidental.",
    "section": "Storage y entrega de contenido",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "bucket / key / object",
      "nodes": [
        "bucket|namespace",
        "key|identity",
        "object|bytes + metadata",
        "version|history"
      ],
      "outcome": "objeto almacenado",
      "caption": "Controlan acceso a nivel de recurso y previenen exposición pública accidental."
    }
  },
  {
    "title": "S3 Event Notifications",
    "description": "Publican cambios de objetos hacia SQS, SNS, Lambda o EventBridge.",
    "section": "Storage y entrega de contenido",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "bucket / key / object",
      "nodes": [
        "bucket|namespace",
        "key|identity",
        "object|bytes + metadata",
        "version|history"
      ],
      "outcome": "objeto almacenado",
      "caption": "Publican cambios de objetos hacia SQS, SNS, Lambda o EventBridge."
    }
  },
  {
    "title": "S3 Replication",
    "description": "Replica objetos entre buckets o regiones con permisos, versioning y objetivos explícitos.",
    "section": "Storage y entrega de contenido",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "bucket / key / object",
      "nodes": [
        "bucket|namespace",
        "key|identity",
        "object|bytes + metadata",
        "version|history"
      ],
      "outcome": "objeto almacenado",
      "caption": "Replica objetos entre buckets o regiones con permisos, versioning y objetivos explícitos."
    }
  },
  {
    "title": "Amazon EBS",
    "description": "Ofrece volúmenes de bloque por AZ con tipos, IOPS, throughput, snapshots y cifrado.",
    "section": "Storage y entrega de contenido",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "volume → attachment → filesystem",
      "nodes": [
        "EBS|block",
        "AZ|scope",
        "instance|attach",
        "filesystem|mount"
      ],
      "outcome": "bloques persistentes",
      "caption": "Ofrece volúmenes de bloque por AZ con tipos, IOPS, throughput, snapshots y cifrado."
    }
  },
  {
    "title": "EBS Snapshots",
    "description": "Crean copias incrementales almacenadas de forma administrada y restaurables en volúmenes.",
    "section": "Storage y entrega de contenido",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "volume → attachment → filesystem",
      "nodes": [
        "EBS|block",
        "AZ|scope",
        "instance|attach",
        "filesystem|mount"
      ],
      "outcome": "bloques persistentes",
      "caption": "Crean copias incrementales almacenadas de forma administrada y restaurables en volúmenes."
    }
  },
  {
    "title": "Amazon EFS",
    "description": "Expone NFS regional elástico a múltiples clientes mediante mount targets.",
    "section": "Storage y entrega de contenido",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "regional filesystem → mount targets",
      "nodes": [
        "EFS|shared",
        "mount target|per AZ",
        "NFS|protocol",
        "clients|concurrent"
      ],
      "outcome": "archivos compartidos",
      "caption": "Expone NFS regional elástico a múltiples clientes mediante mount targets."
    }
  },
  {
    "title": "FSx",
    "description": "Ofrece filesystems administrados especializados como Windows, Lustre, NetApp ONTAP y OpenZFS.",
    "section": "Storage y entrega de contenido",
    "family": "comparativa técnica",
    "layout": "compact",
    "scene": {
      "variant": "compare",
      "code": "FSx",
      "nodes": [
        "FSx|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "fsx",
      "caption": "Ofrece filesystems administrados especializados como Windows, Lustre, NetApp ONTAP y OpenZFS."
    }
  },
  {
    "title": "AWS Backup",
    "description": "Centraliza políticas, vaults, retención, copias cross-account y restore testing.",
    "section": "Storage y entrega de contenido",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "backup/restore vs active-active",
      "nodes": [
        "RPO|data loss",
        "RTO|downtime",
        "pilot light|warm",
        "multi-site|active"
      ],
      "outcome": "recuperación elegida",
      "caption": "Centraliza políticas, vaults, retención, copias cross-account y restore testing."
    }
  },
  {
    "title": "AWS DataSync",
    "description": "Transfiere datos entre storage on-premises y AWS con verificación y programación.",
    "section": "Storage y entrega de contenido",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "AWS DataSync",
      "nodes": [
        "AWS|entrada",
        "DataSync|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws datasync",
      "caption": "Transfiere datos entre storage on-premises y AWS con verificación y programación."
    }
  },
  {
    "title": "AWS Storage Gateway",
    "description": "Integra aplicaciones on-premises con storage cloud mediante interfaces de archivo, volumen o cinta.",
    "section": "Storage y entrega de contenido",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "AWS Storage Gateway",
      "nodes": [
        "AWS|entrada",
        "Storage|mecanismo",
        "Gateway|estado",
        "result|resultado"
      ],
      "outcome": "aws storage gateway",
      "caption": "Integra aplicaciones on-premises con storage cloud mediante interfaces de archivo, volumen o cinta."
    }
  },
  {
    "title": "Amazon CloudFront",
    "description": "Cachea contenido en edge y conecta viewers con origins mediante policies y TLS.",
    "section": "Storage y entrega de contenido",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "viewer → edge cache → origin",
      "nodes": [
        "viewer|request",
        "edge|cache",
        "origin|miss",
        "response|cached"
      ],
      "outcome": "contenido acelerado",
      "caption": "Cachea contenido en edge y conecta viewers con origins mediante policies y TLS."
    }
  },
  {
    "title": "Origin Access Control",
    "description": "Permite que CloudFront acceda a S3 sin hacer el bucket público.",
    "section": "Storage y entrega de contenido",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "Origin Access Control",
      "nodes": [
        "Origin|entrada",
        "Access|mecanismo",
        "Control|estado",
        "result|resultado"
      ],
      "outcome": "origin access control",
      "caption": "Permite que CloudFront acceda a S3 sin hacer el bucket público."
    }
  },
  {
    "title": "Amazon RDS",
    "description": "Administra motores relacionales, backups, patching, monitoring y opciones de alta disponibilidad.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "DB cluster → writer/readers",
      "nodes": [
        "engine|SQL",
        "writer|changes",
        "reader|scale reads",
        "backup|managed"
      ],
      "outcome": "base relacional administrada",
      "caption": "Administra motores relacionales, backups, patching, monitoring y opciones de alta disponibilidad."
    }
  },
  {
    "title": "RDS Multi-AZ",
    "description": "Mantiene standby síncrono o configuración regional para failover, no para escalar lecturas por defecto.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "diagnóstico operativo",
    "layout": "compact",
    "scene": {
      "variant": "terminal",
      "code": "DB cluster → writer/readers",
      "nodes": [
        "engine|SQL",
        "writer|changes",
        "reader|scale reads",
        "backup|managed"
      ],
      "outcome": "base relacional administrada",
      "caption": "Mantiene standby síncrono o configuración regional para failover, no para escalar lecturas por defecto."
    }
  },
  {
    "title": "RDS Read Replicas",
    "description": "Crean copias asíncronas para lecturas, reporting o DR con lag explícito.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "DB cluster → writer/readers",
      "nodes": [
        "engine|SQL",
        "writer|changes",
        "reader|scale reads",
        "backup|managed"
      ],
      "outcome": "base relacional administrada",
      "caption": "Crean copias asíncronas para lecturas, reporting o DR con lag explícito."
    }
  },
  {
    "title": "Amazon Aurora",
    "description": "Combina compatibilidad MySQL/PostgreSQL con storage distribuido y arquitectura de cluster.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "DB cluster → writer/readers",
      "nodes": [
        "engine|SQL",
        "writer|changes",
        "reader|scale reads",
        "backup|managed"
      ],
      "outcome": "base relacional administrada",
      "caption": "Combina compatibilidad MySQL/PostgreSQL con storage distribuido y arquitectura de cluster."
    }
  },
  {
    "title": "Aurora Serverless",
    "description": "Ajusta capacidad de base de datos dentro de límites configurados para demanda variable.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "DB cluster → writer/readers",
      "nodes": [
        "engine|SQL",
        "writer|changes",
        "reader|scale reads",
        "backup|managed"
      ],
      "outcome": "base relacional administrada",
      "caption": "Ajusta capacidad de base de datos dentro de límites configurados para demanda variable."
    }
  },
  {
    "title": "RDS Proxy",
    "description": "Agrupa conexiones y mejora resiliencia de aplicaciones con muchos clientes efímeros.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "DB cluster → writer/readers",
      "nodes": [
        "engine|SQL",
        "writer|changes",
        "reader|scale reads",
        "backup|managed"
      ],
      "outcome": "base relacional administrada",
      "caption": "Agrupa conexiones y mejora resiliencia de aplicaciones con muchos clientes efímeros."
    }
  },
  {
    "title": "Amazon DynamoDB",
    "description": "Ofrece base NoSQL de key-value/documento con particionado y latencia predecible.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "partition key + sort key",
      "nodes": [
        "item|document",
        "partition key|distribution",
        "sort key|range",
        "capacity|requests"
      ],
      "outcome": "acceso key-value",
      "caption": "Ofrece base NoSQL de key-value/documento con particionado y latencia predecible."
    }
  },
  {
    "title": "DynamoDB partition key",
    "description": "Distribuye items y debe evitar particiones calientes mediante cardinalidad y acceso diseñados.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "partition key + sort key",
      "nodes": [
        "item|document",
        "partition key|distribution",
        "sort key|range",
        "capacity|requests"
      ],
      "outcome": "acceso key-value",
      "caption": "Distribuye items y debe evitar particiones calientes mediante cardinalidad y acceso diseñados."
    }
  },
  {
    "title": "DynamoDB sort key",
    "description": "Ordena items dentro de una partición y habilita rangos y patrones jerárquicos.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "partition key + sort key",
      "nodes": [
        "item|document",
        "partition key|distribution",
        "sort key|range",
        "capacity|requests"
      ],
      "outcome": "acceso key-value",
      "caption": "Ordena items dentro de una partición y habilita rangos y patrones jerárquicos."
    }
  },
  {
    "title": "DynamoDB GSIs y LSIs",
    "description": "Crean patrones de acceso alternativos con capacidades y consistencia distintas.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "partition key + sort key",
      "nodes": [
        "item|document",
        "partition key|distribution",
        "sort key|range",
        "capacity|requests"
      ],
      "outcome": "acceso key-value",
      "caption": "Crean patrones de acceso alternativos con capacidades y consistencia distintas."
    }
  },
  {
    "title": "DynamoDB capacity modes",
    "description": "Compara on-demand con provisioned y autoscaling.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "partition key + sort key",
      "nodes": [
        "item|document",
        "partition key|distribution",
        "sort key|range",
        "capacity|requests"
      ],
      "outcome": "acceso key-value",
      "caption": "Compara on-demand con provisioned y autoscaling."
    }
  },
  {
    "title": "DynamoDB Streams",
    "description": "Captura cambios ordenados por item para procesamiento event-driven.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "partition key + sort key",
      "nodes": [
        "item|document",
        "partition key|distribution",
        "sort key|range",
        "capacity|requests"
      ],
      "outcome": "acceso key-value",
      "caption": "Captura cambios ordenados por item para procesamiento event-driven."
    }
  },
  {
    "title": "Global Tables",
    "description": "Replica DynamoDB multi-region con escrituras activas y resolución administrada.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "Global Tables",
      "nodes": [
        "Global|entrada",
        "Tables|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "global tables",
      "caption": "Replica DynamoDB multi-region con escrituras activas y resolución administrada."
    }
  },
  {
    "title": "Amazon ElastiCache",
    "description": "Administra Redis OSS, Valkey o Memcached para caché y datos en memoria.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "app → cache → database",
      "nodes": [
        "request|key",
        "cache|hit/miss",
        "DB|authority",
        "TTL|expiry"
      ],
      "outcome": "latencia reducida",
      "caption": "Administra Redis OSS, Valkey o Memcached para caché y datos en memoria."
    }
  },
  {
    "title": "Amazon MemoryDB",
    "description": "Proporciona base compatible con Redis/Valkey con durabilidad multi-AZ.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "Amazon MemoryDB",
      "nodes": [
        "Amazon|entrada",
        "MemoryDB|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "amazon memorydb",
      "caption": "Proporciona base compatible con Redis/Valkey con durabilidad multi-AZ."
    }
  },
  {
    "title": "Amazon OpenSearch Service",
    "description": "Administra búsqueda, logs y analytics sobre índices distribuidos.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "Amazon OpenSearch Service",
      "nodes": [
        "Amazon|entrada",
        "OpenSearch|mecanismo",
        "Service|estado",
        "result|resultado"
      ],
      "outcome": "amazon opensearch service",
      "caption": "Administra búsqueda, logs y analytics sobre índices distribuidos."
    }
  },
  {
    "title": "Amazon Redshift",
    "description": "Ejecuta analytics columnar y data warehouse con separación de workloads y storage.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "Amazon Redshift",
      "nodes": [
        "Amazon|entrada",
        "Redshift|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "amazon redshift",
      "caption": "Ejecuta analytics columnar y data warehouse con separación de workloads y storage."
    }
  },
  {
    "title": "Amazon Timestream",
    "description": "Almacena series temporales con retención por capas y consultas orientadas a tiempo.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "Amazon Timestream",
      "nodes": [
        "Amazon|entrada",
        "Timestream|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "amazon timestream",
      "caption": "Almacena series temporales con retención por capas y consultas orientadas a tiempo."
    }
  },
  {
    "title": "Amazon Neptune",
    "description": "Modela grafos de propiedades o RDF y ejecuta consultas de relaciones.",
    "section": "Bases de datos, búsqueda y caché",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "Amazon Neptune",
      "nodes": [
        "Amazon|entrada",
        "Neptune|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "amazon neptune",
      "caption": "Modela grafos de propiedades o RDF y ejecuta consultas de relaciones."
    }
  },
  {
    "title": "Amazon SQS Standard",
    "description": "Desacopla productores y consumidores con entrega al menos una vez y orden best-effort.",
    "section": "Mensajería, eventos e integración",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "producer → queue → consumer",
      "nodes": [
        "message|durable",
        "visibility|lease",
        "consumer|process",
        "DLQ|failed"
      ],
      "outcome": "trabajo desacoplado",
      "caption": "Desacopla productores y consumidores con entrega al menos una vez y orden best-effort."
    }
  },
  {
    "title": "SQS FIFO",
    "description": "Añade orden por message group y deduplicación con throughput y diseño específicos.",
    "section": "Mensajería, eventos e integración",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "producer → queue → consumer",
      "nodes": [
        "message|durable",
        "visibility|lease",
        "consumer|process",
        "DLQ|failed"
      ],
      "outcome": "trabajo desacoplado",
      "caption": "Añade orden por message group y deduplicación con throughput y diseño específicos."
    }
  },
  {
    "title": "Visibility Timeout",
    "description": "Oculta temporalmente un mensaje mientras un consumidor lo procesa y permite retry si no hay delete.",
    "section": "Mensajería, eventos e integración",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "Visibility Timeout",
      "nodes": [
        "Visibility|entrada",
        "Timeout|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "visibility timeout",
      "caption": "Oculta temporalmente un mensaje mientras un consumidor lo procesa y permite retry si no hay delete."
    }
  },
  {
    "title": "Dead-letter queues",
    "description": "Aíslan mensajes que superan intentos para análisis y replay controlado.",
    "section": "Mensajería, eventos e integración",
    "family": "flujo de ejecución",
    "layout": "compact",
    "scene": {
      "variant": "flow",
      "code": "Dead-letter queues",
      "nodes": [
        "Dead|entrada",
        "letter|mecanismo",
        "queues|estado",
        "result|resultado"
      ],
      "outcome": "dead-letter queues",
      "caption": "Aíslan mensajes que superan intentos para análisis y replay controlado."
    }
  },
  {
    "title": "Amazon SNS",
    "description": "Distribuye mensajes desde topics hacia múltiples protocolos y suscriptores.",
    "section": "Mensajería, eventos e integración",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "publisher → topic → subscribers",
      "nodes": [
        "publisher|event",
        "topic|fanout",
        "SQS/Lambda|targets",
        "filter|policy"
      ],
      "outcome": "evento difundido",
      "caption": "Distribuye mensajes desde topics hacia múltiples protocolos y suscriptores."
    }
  },
  {
    "title": "SNS filter policies",
    "description": "Entrega solo eventos que cumplen atributos o cuerpo esperado por cada suscripción.",
    "section": "Mensajería, eventos e integración",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "publisher → topic → subscribers",
      "nodes": [
        "publisher|event",
        "topic|fanout",
        "SQS/Lambda|targets",
        "filter|policy"
      ],
      "outcome": "evento difundido",
      "caption": "Entrega solo eventos que cumplen atributos o cuerpo esperado por cada suscripción."
    }
  },
  {
    "title": "Amazon EventBridge",
    "description": "Enruta eventos por patrones entre aplicaciones, servicios AWS y SaaS.",
    "section": "Mensajería, eventos e integración",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "event bus → rules → targets",
      "nodes": [
        "source|event",
        "bus|routes",
        "rule|pattern",
        "target|action"
      ],
      "outcome": "eventos enrutados",
      "caption": "Enruta eventos por patrones entre aplicaciones, servicios AWS y SaaS."
    }
  },
  {
    "title": "Event buses",
    "description": "Separan eventos default, custom y partner con policies cross-account.",
    "section": "Mensajería, eventos e integración",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "Event buses",
      "nodes": [
        "Event|entrada",
        "buses|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "event buses",
      "caption": "Separan eventos default, custom y partner con policies cross-account."
    }
  },
  {
    "title": "EventBridge Scheduler",
    "description": "Invoca targets una vez o con recurrencia, ventanas flexibles y retries.",
    "section": "Mensajería, eventos e integración",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "event bus → rules → targets",
      "nodes": [
        "source|event",
        "bus|routes",
        "rule|pattern",
        "target|action"
      ],
      "outcome": "eventos enrutados",
      "caption": "Invoca targets una vez o con recurrencia, ventanas flexibles y retries."
    }
  },
  {
    "title": "AWS Step Functions",
    "description": "Orquesta workflows mediante estados, retries, catches, waits, maps y visualización.",
    "section": "Mensajería, eventos e integración",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "state machine",
      "nodes": [
        "Task|work",
        "Choice|branch",
        "Retry|policy",
        "Catch|fallback"
      ],
      "outcome": "workflow orquestado",
      "caption": "Orquesta workflows mediante estados, retries, catches, waits, maps y visualización."
    }
  },
  {
    "title": "Standard vs Express Workflows",
    "description": "Compara duración, semántica, throughput, historial y precio.",
    "section": "Mensajería, eventos e integración",
    "family": "contratos coordinados",
    "layout": "compact",
    "scene": {
      "variant": "cards",
      "code": "Standard vs Express Workflows",
      "nodes": [
        "Standard|entrada",
        "Express|mecanismo",
        "Workflows|estado",
        "result|resultado"
      ],
      "outcome": "standard vs express workflows",
      "caption": "Compara duración, semántica, throughput, historial y precio."
    }
  },
  {
    "title": "Amazon MQ",
    "description": "Administra brokers compatibles para migraciones que requieren protocolos tradicionales.",
    "section": "Mensajería, eventos e integración",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "Amazon MQ",
      "nodes": [
        "Amazon|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "amazon mq",
      "caption": "Administra brokers compatibles para migraciones que requieren protocolos tradicionales."
    }
  },
  {
    "title": "Amazon Kinesis Data Streams",
    "description": "Ingiere eventos ordenados por shard para procesamiento en tiempo real.",
    "section": "Mensajería, eventos e integración",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "Amazon Kinesis Data Streams",
      "nodes": [
        "Amazon|entrada",
        "Kinesis|mecanismo",
        "Data|estado",
        "Streams|resultado"
      ],
      "outcome": "amazon kinesis data streams",
      "caption": "Ingiere eventos ordenados por shard para procesamiento en tiempo real."
    }
  },
  {
    "title": "Amazon MSK",
    "description": "Administra clusters Apache Kafka y su conectividad, storage y observabilidad.",
    "section": "Mensajería, eventos e integración",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "Amazon MSK",
      "nodes": [
        "Amazon|entrada",
        "MSK|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "amazon msk",
      "caption": "Administra clusters Apache Kafka y su conectividad, storage y observabilidad."
    }
  },
  {
    "title": "AWS AppSync",
    "description": "Expone APIs GraphQL administradas con resolvers, subscriptions y fuentes de datos.",
    "section": "Mensajería, eventos e integración",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "AWS AppSync",
      "nodes": [
        "AWS|entrada",
        "AppSync|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws appsync",
      "caption": "Expone APIs GraphQL administradas con resolvers, subscriptions y fuentes de datos."
    }
  },
  {
    "title": "Amazon Route 53",
    "description": "Proporciona DNS autoritativo, registro de dominios y health checks.",
    "section": "DNS, APIs, edge y protección",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "name → DNS records → endpoint",
      "nodes": [
        "hosted zone|authority",
        "record|answer",
        "health check|status",
        "routing policy|choice"
      ],
      "outcome": "nombre encaminado",
      "caption": "Proporciona DNS autoritativo, registro de dominios y health checks."
    }
  },
  {
    "title": "Route 53 routing policies",
    "description": "Elige simple, weighted, latency, failover, geolocation, geoproximity o multivalue.",
    "section": "DNS, APIs, edge y protección",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "name → DNS records → endpoint",
      "nodes": [
        "hosted zone|authority",
        "record|answer",
        "health check|status",
        "routing policy|choice"
      ],
      "outcome": "nombre encaminado",
      "caption": "Elige simple, weighted, latency, failover, geolocation, geoproximity o multivalue."
    }
  },
  {
    "title": "Hosted Zones",
    "description": "Separan autoridad DNS pública y privada con records administrados.",
    "section": "DNS, APIs, edge y protección",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "Hosted Zones",
      "nodes": [
        "Hosted|entrada",
        "Zones|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "hosted zones",
      "caption": "Separan autoridad DNS pública y privada con records administrados."
    }
  },
  {
    "title": "Route 53 health checks",
    "description": "Observan endpoints o métricas y participan en failover DNS con tiempos no instantáneos.",
    "section": "DNS, APIs, edge y protección",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "name → DNS records → endpoint",
      "nodes": [
        "hosted zone|authority",
        "record|answer",
        "health check|status",
        "routing policy|choice"
      ],
      "outcome": "nombre encaminado",
      "caption": "Observan endpoints o métricas y participan en failover DNS con tiempos no instantáneos."
    }
  },
  {
    "title": "Amazon API Gateway",
    "description": "Publica REST, HTTP y WebSocket APIs con routing, auth, throttling y observabilidad.",
    "section": "DNS, APIs, edge y protección",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "client → API Gateway → integration",
      "nodes": [
        "route|method",
        "authorizer|identity",
        "throttle|quota",
        "backend|invoke"
      ],
      "outcome": "API administrada",
      "caption": "Publica REST, HTTP y WebSocket APIs con routing, auth, throttling y observabilidad."
    }
  },
  {
    "title": "API Gateway stages",
    "description": "Representan snapshots desplegados con variables, logs, cuotas y canary settings.",
    "section": "DNS, APIs, edge y protección",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "client → API Gateway → integration",
      "nodes": [
        "route|method",
        "authorizer|identity",
        "throttle|quota",
        "backend|invoke"
      ],
      "outcome": "API administrada",
      "caption": "Representan snapshots desplegados con variables, logs, cuotas y canary settings."
    }
  },
  {
    "title": "Custom domains",
    "description": "Conectan certificados, mappings y DNS para exponer APIs con nombres propios.",
    "section": "DNS, APIs, edge y protección",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "Custom domains",
      "nodes": [
        "Custom|entrada",
        "domains|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "custom domains",
      "caption": "Conectan certificados, mappings y DNS para exponer APIs con nombres propios."
    }
  },
  {
    "title": "Amazon CloudFront Functions",
    "description": "Ejecutan lógica ligera en edge para manipular requests y responses de alta escala.",
    "section": "DNS, APIs, edge y protección",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "viewer → edge cache → origin",
      "nodes": [
        "viewer|request",
        "edge|cache",
        "origin|miss",
        "response|cached"
      ],
      "outcome": "contenido acelerado",
      "caption": "Ejecutan lógica ligera en edge para manipular requests y responses de alta escala."
    }
  },
  {
    "title": "Lambda@Edge",
    "description": "Ejecuta lógica más flexible asociada a eventos CloudFront con distribución global.",
    "section": "DNS, APIs, edge y protección",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "event → Lambda → result",
      "nodes": [
        "event|trigger",
        "runtime|invocation",
        "concurrency|scales",
        "destination|result"
      ],
      "outcome": "función ejecutada",
      "caption": "Ejecuta lógica más flexible asociada a eventos CloudFront con distribución global."
    }
  },
  {
    "title": "AWS WAF",
    "description": "Filtra HTTP por reglas administradas, rate-based rules, IP sets y lógica custom.",
    "section": "DNS, APIs, edge y protección",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "request → managed rules",
      "nodes": [
        "request|signals",
        "WAF|rules",
        "Shield|DDoS",
        "origin|protected"
      ],
      "outcome": "borde protegido",
      "caption": "Filtra HTTP por reglas administradas, rate-based rules, IP sets y lógica custom."
    }
  },
  {
    "title": "AWS Shield",
    "description": "Proporciona protección DDoS estándar y opciones avanzadas con soporte y visibilidad.",
    "section": "DNS, APIs, edge y protección",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "request → managed rules",
      "nodes": [
        "request|signals",
        "WAF|rules",
        "Shield|DDoS",
        "origin|protected"
      ],
      "outcome": "borde protegido",
      "caption": "Proporciona protección DDoS estándar y opciones avanzadas con soporte y visibilidad."
    }
  },
  {
    "title": "Global Accelerator",
    "description": "Usa anycast y la red global AWS para llevar tráfico TCP/UDP a endpoints saludables.",
    "section": "DNS, APIs, edge y protección",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Global Accelerator",
      "nodes": [
        "Global|entrada",
        "Accelerator|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "global accelerator",
      "caption": "Usa anycast y la red global AWS para llevar tráfico TCP/UDP a endpoints saludables."
    }
  },
  {
    "title": "Cognito User Pools",
    "description": "Administra directorio, login, tokens y federation para usuarios de aplicaciones.",
    "section": "DNS, APIs, edge y protección",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Cognito User Pools",
      "nodes": [
        "Cognito|entrada",
        "User|mecanismo",
        "Pools|estado",
        "result|resultado"
      ],
      "outcome": "cognito user pools",
      "caption": "Administra directorio, login, tokens y federation para usuarios de aplicaciones."
    }
  },
  {
    "title": "Cognito Identity Pools",
    "description": "Intercambia identidades autenticadas o invitadas por credenciales AWS temporales.",
    "section": "DNS, APIs, edge y protección",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "principal + action + resource + context",
      "nodes": [
        "principal|who",
        "policy|allow/deny",
        "resource|what",
        "context|conditions"
      ],
      "outcome": "decisión IAM",
      "caption": "Intercambia identidades autenticadas o invitadas por credenciales AWS temporales."
    }
  },
  {
    "title": "Amazon CloudWatch Metrics",
    "description": "Almacena series temporales con dimensiones, namespaces, estadísticas y periodos.",
    "section": "Observabilidad y operaciones",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "metrics + logs + alarms",
      "nodes": [
        "metrics|time series",
        "logs|events",
        "alarm|threshold",
        "dashboard|view"
      ],
      "outcome": "operación observable",
      "caption": "Almacena series temporales con dimensiones, namespaces, estadísticas y periodos."
    }
  },
  {
    "title": "CloudWatch Logs",
    "description": "Centraliza log groups, streams, retention, metric filters e insights.",
    "section": "Observabilidad y operaciones",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "metrics + logs + alarms",
      "nodes": [
        "metrics|time series",
        "logs|events",
        "alarm|threshold",
        "dashboard|view"
      ],
      "outcome": "operación observable",
      "caption": "Centraliza log groups, streams, retention, metric filters e insights."
    }
  },
  {
    "title": "CloudWatch Alarms",
    "description": "Evalúa métricas y estados para notificar o ejecutar acciones automatizadas.",
    "section": "Observabilidad y operaciones",
    "family": "aislamiento sobre host",
    "layout": "compact",
    "scene": {
      "variant": "container",
      "code": "metrics + logs + alarms",
      "nodes": [
        "metrics|time series",
        "logs|events",
        "alarm|threshold",
        "dashboard|view"
      ],
      "outcome": "operación observable",
      "caption": "Evalúa métricas y estados para notificar o ejecutar acciones automatizadas."
    }
  },
  {
    "title": "CloudWatch Dashboards",
    "description": "Reúne métricas, logs y widgets para una vista operativa compartida.",
    "section": "Observabilidad y operaciones",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "DB cluster → writer/readers",
      "nodes": [
        "engine|SQL",
        "writer|changes",
        "reader|scale reads",
        "backup|managed"
      ],
      "outcome": "base relacional administrada",
      "caption": "Reúne métricas, logs y widgets para una vista operativa compartida."
    }
  },
  {
    "title": "CloudWatch Application Signals",
    "description": "Relaciona servicios, SLIs y trazas para observar rendimiento de aplicaciones.",
    "section": "Observabilidad y operaciones",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "metrics + logs + alarms",
      "nodes": [
        "metrics|time series",
        "logs|events",
        "alarm|threshold",
        "dashboard|view"
      ],
      "outcome": "operación observable",
      "caption": "Relaciona servicios, SLIs y trazas para observar rendimiento de aplicaciones."
    }
  },
  {
    "title": "AWS X-Ray",
    "description": "Rastrea solicitudes distribuidas mediante traces, segments y annotations.",
    "section": "Observabilidad y operaciones",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "trace → segments → subsegments",
      "nodes": [
        "request|trace id",
        "service|segment",
        "dependency|subsegment",
        "latency|cause"
      ],
      "outcome": "request rastreado",
      "caption": "Rastrea solicitudes distribuidas mediante traces, segments y annotations."
    }
  },
  {
    "title": "AWS Health",
    "description": "Informa eventos que afectan servicios o recursos de una cuenta.",
    "section": "Observabilidad y operaciones",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "AWS Health",
      "nodes": [
        "AWS|entrada",
        "Health|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws health",
      "caption": "Informa eventos que afectan servicios o recursos de una cuenta."
    }
  },
  {
    "title": "Systems Manager Session Manager",
    "description": "Accede a instancias sin puertos SSH públicos ni distribución de claves.",
    "section": "Observabilidad y operaciones",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "Systems Manager Session Manager",
      "nodes": [
        "Systems|entrada",
        "Manager|mecanismo",
        "Session|estado",
        "Manager|resultado"
      ],
      "outcome": "systems manager session manager",
      "caption": "Accede a instancias sin puertos SSH públicos ni distribución de claves."
    }
  },
  {
    "title": "Systems Manager Run Command",
    "description": "Ejecuta acciones remotas con IAM, targets, salida y auditoría.",
    "section": "Observabilidad y operaciones",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "Systems Manager Run Command",
      "nodes": [
        "Systems|entrada",
        "Manager|mecanismo",
        "Run|estado",
        "Command|resultado"
      ],
      "outcome": "systems manager run command",
      "caption": "Ejecuta acciones remotas con IAM, targets, salida y auditoría."
    }
  },
  {
    "title": "Systems Manager Patch Manager",
    "description": "Organiza baselines, ventanas y cumplimiento de parches.",
    "section": "Observabilidad y operaciones",
    "family": "árbol de recursos",
    "layout": "compact",
    "scene": {
      "variant": "filesystem",
      "code": "Systems Manager Patch Manager",
      "nodes": [
        "Systems|entrada",
        "Manager|mecanismo",
        "Patch|estado",
        "Manager|resultado"
      ],
      "outcome": "systems manager patch manager",
      "caption": "Organiza baselines, ventanas y cumplimiento de parches."
    }
  },
  {
    "title": "Systems Manager State Manager",
    "description": "Mantiene configuración deseada periódicamente sobre nodos administrados.",
    "section": "Observabilidad y operaciones",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Systems Manager State Manager",
      "nodes": [
        "Systems|entrada",
        "Manager|mecanismo",
        "State|estado",
        "Manager|resultado"
      ],
      "outcome": "systems manager state manager",
      "caption": "Mantiene configuración deseada periódicamente sobre nodos administrados."
    }
  },
  {
    "title": "AWS OpsCenter e Incident Manager",
    "description": "Centralizan work items, runbooks y respuesta coordinada a incidentes.",
    "section": "Observabilidad y operaciones",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "AWS OpsCenter e Incident Manager",
      "nodes": [
        "AWS|entrada",
        "OpsCenter|mecanismo",
        "Incident|estado",
        "Manager|resultado"
      ],
      "outcome": "aws opscenter e incident manager",
      "caption": "Centralizan work items, runbooks y respuesta coordinada a incidentes."
    }
  },
  {
    "title": "Service Quotas",
    "description": "Consulta límites, solicita aumentos y monitoriza consumo antes de alcanzar bloqueos.",
    "section": "Observabilidad y operaciones",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "Service Quotas",
      "nodes": [
        "Service|entrada",
        "Quotas|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "service quotas",
      "caption": "Consulta límites, solicita aumentos y monitoriza consumo antes de alcanzar bloqueos."
    }
  },
  {
    "title": "Trusted Advisor",
    "description": "Genera recomendaciones de costo, seguridad, rendimiento, tolerancia a fallos y límites.",
    "section": "Observabilidad y operaciones",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "Trusted Advisor",
      "nodes": [
        "Trusted|entrada",
        "Advisor|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "trusted advisor",
      "caption": "Genera recomendaciones de costo, seguridad, rendimiento, tolerancia a fallos y límites."
    }
  },
  {
    "title": "Personal Health Dashboard",
    "description": "Relaciona eventos AWS con recursos concretos de la cuenta.",
    "section": "Observabilidad y operaciones",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "Personal Health Dashboard",
      "nodes": [
        "Personal|entrada",
        "Health|mecanismo",
        "Dashboard|estado",
        "result|resultado"
      ],
      "outcome": "personal health dashboard",
      "caption": "Relaciona eventos AWS con recursos concretos de la cuenta."
    }
  },
  {
    "title": "AWS CloudFormation",
    "description": "Converge stacks desde templates declarativos con dependencias, change sets y rollback.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "code/template → change set → stack",
      "nodes": [
        "source|desired state",
        "plan|changes",
        "stack|resources",
        "drift|compare"
      ],
      "outcome": "infraestructura declarada",
      "caption": "Converge stacks desde templates declarativos con dependencias, change sets y rollback."
    }
  },
  {
    "title": "Change Sets",
    "description": "Previsualizan altas, cambios, reemplazos y eliminaciones antes de ejecutar un stack update.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Change Sets",
      "nodes": [
        "Change|entrada",
        "Sets|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "change sets",
      "caption": "Previsualizan altas, cambios, reemplazos y eliminaciones antes de ejecutar un stack update."
    }
  },
  {
    "title": "Drift Detection",
    "description": "Compara configuración real con el template sin corregirla automáticamente.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Drift Detection",
      "nodes": [
        "Drift|entrada",
        "Detection|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "drift detection",
      "caption": "Compara configuración real con el template sin corregirla automáticamente."
    }
  },
  {
    "title": "AWS CDK",
    "description": "Define infraestructura con lenguajes y constructs que sintetizan CloudFormation.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "code/template → change set → stack",
      "nodes": [
        "source|desired state",
        "plan|changes",
        "stack|resources",
        "drift|compare"
      ],
      "outcome": "infraestructura declarada",
      "caption": "Define infraestructura con lenguajes y constructs que sintetizan CloudFormation."
    }
  },
  {
    "title": "AWS SAM",
    "description": "Modela aplicaciones serverless y simplifica build, local testing y deployment.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "AWS SAM",
      "nodes": [
        "AWS|entrada",
        "SAM|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws sam",
      "caption": "Modela aplicaciones serverless y simplifica build, local testing y deployment."
    }
  },
  {
    "title": "Terraform en AWS",
    "description": "Administra recursos mediante provider, state y plan fuera del servicio nativo.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "Terraform en AWS",
      "nodes": [
        "Terraform|entrada",
        "AWS|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "terraform en aws",
      "caption": "Administra recursos mediante provider, state y plan fuera del servicio nativo."
    }
  },
  {
    "title": "CodeBuild",
    "description": "Ejecuta builds efímeros definidos por buildspec y produce artifacts y reports.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "source → build → deploy",
      "nodes": [
        "source|revision",
        "build|artifact",
        "approval|gate",
        "deploy|targets"
      ],
      "outcome": "entrega automatizada",
      "caption": "Ejecuta builds efímeros definidos por buildspec y produce artifacts y reports."
    }
  },
  {
    "title": "CodeDeploy",
    "description": "Automatiza despliegues a EC2, Lambda y ECS con estrategias y lifecycle hooks.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "source → build → deploy",
      "nodes": [
        "source|revision",
        "build|artifact",
        "approval|gate",
        "deploy|targets"
      ],
      "outcome": "entrega automatizada",
      "caption": "Automatiza despliegues a EC2, Lambda y ECS con estrategias y lifecycle hooks."
    }
  },
  {
    "title": "CodePipeline",
    "description": "Orquesta stages de source, build, test, approval y deploy.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "source → build → deploy",
      "nodes": [
        "source|revision",
        "build|artifact",
        "approval|gate",
        "deploy|targets"
      ],
      "outcome": "entrega automatizada",
      "caption": "Orquesta stages de source, build, test, approval y deploy."
    }
  },
  {
    "title": "GitHub Actions con OIDC",
    "description": "Obtiene credenciales AWS temporales sin guardar access keys de larga duración.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "GitHub Actions con OIDC",
      "nodes": [
        "GitHub|entrada",
        "Actions|mecanismo",
        "con|estado",
        "OIDC|resultado"
      ],
      "outcome": "github actions con oidc",
      "caption": "Obtiene credenciales AWS temporales sin guardar access keys de larga duración."
    }
  },
  {
    "title": "AWS Proton",
    "description": "Estandariza infraestructura de plataformas y templates para equipos de aplicaciones.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "AWS Proton",
      "nodes": [
        "AWS|entrada",
        "Proton|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "aws proton",
      "caption": "Estandariza infraestructura de plataformas y templates para equipos de aplicaciones."
    }
  },
  {
    "title": "AWS Service Catalog",
    "description": "Publica productos aprobados que equipos pueden provisionar con guardrails.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "AWS Service Catalog",
      "nodes": [
        "AWS|entrada",
        "Service|mecanismo",
        "Catalog|estado",
        "result|resultado"
      ],
      "outcome": "aws service catalog",
      "caption": "Publica productos aprobados que equipos pueden provisionar con guardrails."
    }
  },
  {
    "title": "AWS Budgets",
    "description": "Alerta por costo, uso, cobertura o utilización y puede activar acciones.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "usage → allocation → optimization",
      "nodes": [
        "metering|usage",
        "tags|ownership",
        "budget|alert",
        "commitment|discount"
      ],
      "outcome": "costo gobernado",
      "caption": "Alerta por costo, uso, cobertura o utilización y puede activar acciones."
    }
  },
  {
    "title": "Cost Explorer",
    "description": "Analiza gasto y uso por dimensiones, tags, servicios y periodos.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "usage → allocation → optimization",
      "nodes": [
        "metering|usage",
        "tags|ownership",
        "budget|alert",
        "commitment|discount"
      ],
      "outcome": "costo gobernado",
      "caption": "Analiza gasto y uso por dimensiones, tags, servicios y periodos."
    }
  },
  {
    "title": "Cost and Usage Report",
    "description": "Entrega el dataset más detallado de facturación para análisis propios.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "Cost and Usage Report",
      "nodes": [
        "Cost|entrada",
        "and|mecanismo",
        "Usage|estado",
        "Report|resultado"
      ],
      "outcome": "cost and usage report",
      "caption": "Entrega el dataset más detallado de facturación para análisis propios."
    }
  },
  {
    "title": "Cost allocation tags",
    "description": "Atribuyen gasto a producto, equipo, entorno o centro de costo.",
    "section": "Infraestructura como código, CI/CD y gobierno",
    "family": "cola y consumidor",
    "layout": "compact",
    "scene": {
      "variant": "queue",
      "code": "Cost allocation tags",
      "nodes": [
        "Cost|entrada",
        "allocation|mecanismo",
        "tags|estado",
        "result|resultado"
      ],
      "outcome": "cost allocation tags",
      "caption": "Atribuyen gasto a producto, equipo, entorno o centro de costo."
    }
  },
  {
    "title": "Alta disponibilidad Multi-AZ",
    "description": "Distribuye instancias y dependencias entre zonas para tolerar fallos aislados.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "Alta disponibilidad Multi-AZ",
      "nodes": [
        "Alta|entrada",
        "disponibilidad|mecanismo",
        "Multi|estado",
        "result|resultado"
      ],
      "outcome": "alta disponibilidad multi-az",
      "caption": "Distribuye instancias y dependencias entre zonas para tolerar fallos aislados."
    }
  },
  {
    "title": "Multi-Region",
    "description": "Reduce impacto regional a cambio de complejidad en datos, routing, pruebas y costo.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Region → AZ → data centers",
      "nodes": [
        "Region|geography",
        "AZ|failure domain",
        "edge|global network",
        "workload|placement"
      ],
      "outcome": "alcance elegido",
      "caption": "Reduce impacto regional a cambio de complejidad en datos, routing, pruebas y costo."
    }
  },
  {
    "title": "Backups y restore testing",
    "description": "Define políticas y demuestra que los datos pueden restaurarse dentro de RPO y RTO.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "backup/restore vs active-active",
      "nodes": [
        "RPO|data loss",
        "RTO|downtime",
        "pilot light|warm",
        "multi-site|active"
      ],
      "outcome": "recuperación elegida",
      "caption": "Define políticas y demuestra que los datos pueden restaurarse dentro de RPO y RTO."
    }
  },
  {
    "title": "Disaster recovery strategies",
    "description": "Compara backup/restore, pilot light, warm standby y active-active.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "backup/restore vs active-active",
      "nodes": [
        "RPO|data loss",
        "RTO|downtime",
        "pilot light|warm",
        "multi-site|active"
      ],
      "outcome": "recuperación elegida",
      "caption": "Compara backup/restore, pilot light, warm standby y active-active."
    }
  },
  {
    "title": "RPO y RTO",
    "description": "Cuantifican pérdida de datos tolerable y tiempo objetivo de recuperación.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "RPO y RTO",
      "nodes": [
        "RPO|entrada",
        "RTO|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "rpo y rto",
      "caption": "Cuantifican pérdida de datos tolerable y tiempo objetivo de recuperación."
    }
  },
  {
    "title": "Fault Injection Service",
    "description": "Ejecuta experimentos controlados para validar supuestos de resiliencia.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "Fault Injection Service",
      "nodes": [
        "Fault|entrada",
        "Injection|mecanismo",
        "Service|estado",
        "result|resultado"
      ],
      "outcome": "fault injection service",
      "caption": "Ejecuta experimentos controlados para validar supuestos de resiliencia."
    }
  },
  {
    "title": "Auto Scaling y elasticidad",
    "description": "Ajusta capacidad a demanda sin confundir escalado con alta disponibilidad.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "capas internas",
    "layout": "compact",
    "scene": {
      "variant": "layers",
      "code": "metric → policy → capacity",
      "nodes": [
        "demand|changes",
        "policy|target",
        "ASG|launch/terminate",
        "ELB|register"
      ],
      "outcome": "capacidad ajustada",
      "caption": "Ajusta capacidad a demanda sin confundir escalado con alta disponibilidad."
    }
  },
  {
    "title": "Retries, timeouts y jitter",
    "description": "Evitan espera infinita y tormentas sincronizadas ante fallos transitorios.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Retries, timeouts y jitter",
      "nodes": [
        "Retries|entrada",
        "timeouts|mecanismo",
        "jitter|estado",
        "result|resultado"
      ],
      "outcome": "retries, timeouts y jitter",
      "caption": "Evitan espera infinita y tormentas sincronizadas ante fallos transitorios."
    }
  },
  {
    "title": "Idempotencia",
    "description": "Hace seguros los reintentos de comandos frente a respuestas perdidas.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "Idempotencia",
      "nodes": [
        "Idempotencia|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "idempotencia",
      "caption": "Hace seguros los reintentos de comandos frente a respuestas perdidas."
    }
  },
  {
    "title": "Cost Optimization",
    "description": "Elimina recursos ociosos, elige tamaño y compra, y alinea costo con valor.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "Cost Optimization",
      "nodes": [
        "Cost|entrada",
        "Optimization|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "cost optimization",
      "caption": "Elimina recursos ociosos, elige tamaño y compra, y alinea costo con valor."
    }
  },
  {
    "title": "Performance Efficiency",
    "description": "Selecciona recursos y arquitectura medidos, revisando opciones a medida que cambia la demanda.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "Performance Efficiency",
      "nodes": [
        "Performance|entrada",
        "Efficiency|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "performance efficiency",
      "caption": "Selecciona recursos y arquitectura medidos, revisando opciones a medida que cambia la demanda."
    }
  },
  {
    "title": "Sustainability Pillar",
    "description": "Reduce recursos innecesarios y mejora utilización considerando impacto ambiental.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Sustainability Pillar",
      "nodes": [
        "Sustainability|entrada",
        "Pillar|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "sustainability pillar",
      "caption": "Reduce recursos innecesarios y mejora utilización considerando impacto ambiental."
    }
  },
  {
    "title": "Operational Excellence",
    "description": "Opera como código, observa resultados, aprende de fallos y mejora procedimientos.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "Operational Excellence",
      "nodes": [
        "Operational|entrada",
        "Excellence|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "operational excellence",
      "caption": "Opera como código, observa resultados, aprende de fallos y mejora procedimientos."
    }
  },
  {
    "title": "Security Pillar",
    "description": "Protege identidad, datos, infraestructura y detección mediante controles verificables.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "Security Pillar",
      "nodes": [
        "Security|entrada",
        "Pillar|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "security pillar",
      "caption": "Protege identidad, datos, infraestructura y detección mediante controles verificables."
    }
  },
  {
    "title": "Reliability Pillar",
    "description": "Recupera de fallos, prueba procedimientos y adapta capacidad a la demanda.",
    "section": "Confiabilidad, costo y sostenibilidad",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "Reliability Pillar",
      "nodes": [
        "Reliability|entrada",
        "Pillar|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "reliability pillar",
      "caption": "Recupera de fallos, prueba procedimientos y adapta capacidad a la demanda."
    }
  }
] as const satisfies readonly StudyConcept[];
