import type { QuizQuestion } from "@/data/quizTypes";

export const awsQuestions: QuizQuestion[] = [
  {
    "id": "aws-q-01",
    "collectionId": "aws",
    "question": "En AWS (Fundamentos de nube y arquitectura AWS), ¿qué función técnica cumple «Cloud computing»?",
    "options": [
      "Consume capacidad por API y bajo demanda, cambiando inversión fija por recursos elásticos medidos al operar.",
      "Agrupa infraestructura en geografías independientes para residencia, latencia y recuperación.",
      "Funciona como dominios de fallo aislados conectados con redes regionales de baja latencia al operar.",
      "Separa seguridad de la nube administrada por AWS de configuración, identidad y datos del cliente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cloud computing (Fundamentos de nube y arquitectura AWS): Consume capacidad por API y bajo demanda, cambiando inversión fija por recursos elásticos medidos.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-02",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «IaaS, PaaS y serverless» en fundamentos de nube y arquitectura aws?",
    "options": [
      "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius al operar.",
      "Compara cuánto administra AWS y cuánto conserva el equipo en cada modelo de forma clara.",
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
      "Identifica recursos globalmente mediante partición, servicio, región, cuenta y recurso."
    ],
    "correctAnswerIndex": 1,
    "explanation": "IaaS, PaaS y serverless (Fundamentos de nube y arquitectura AWS): Compara cuánto administra AWS y cuánto conserva el equipo en cada modelo.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-03",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «Regiones»?",
    "options": [
      "Identifica recursos globalmente mediante partición, servicio, región, cuenta y recurso al operar.",
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo al operar.",
      "Agrupa infraestructura en geografías independientes para residencia, latencia y recuperación.",
      "Funciona como dominios de fallo aislados conectados con redes regionales de baja latencia."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Regiones (Fundamentos de nube y arquitectura AWS): Agrupan infraestructura en geografías independientes para residencia, latencia y recuperación.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-04",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «Availability Zones»?",
    "options": [
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo al operar.",
      "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius al operar.",
      "Identifica recursos globalmente mediante partición, servicio, región, cuenta y recurso.",
      "Funciona como dominios de fallo aislados conectados con redes regionales de baja latencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Availability Zones (Fundamentos de nube y arquitectura AWS): Funcionan como dominios de fallo aislados conectados con redes regionales de baja latencia.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-05",
    "collectionId": "aws",
    "question": "Respecto a fundamentos de nube y arquitectura aws en AWS, ¿cuál es el propósito de «Edge locations»?",
    "options": [
      "Acercan DNS, CDN, protección y computación de borde a los usuarios durante la ejecución.",
      "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius.",
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
      "Identifica recursos globalmente mediante partición, servicio, región, cuenta y recurso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Edge locations (Fundamentos de nube y arquitectura AWS): Acercan DNS, CDN, protección y computación de borde a los usuarios.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-06",
    "collectionId": "aws",
    "question": "En AWS (Fundamentos de nube y arquitectura AWS), ¿qué función técnica cumple «Modelo de responsabilidad compartida»?",
    "options": [
      "Funciona como dominios de fallo aislados conectados con redes regionales de baja latencia al operar.",
      "Separa seguridad de la nube administrada por AWS de configuración, identidad y datos del cliente.",
      "Agrupa infraestructura en geografías independientes para residencia, latencia y recuperación.",
      "Identifica recursos globalmente mediante partición, servicio, región, cuenta y recurso al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Modelo de responsabilidad compartida (Fundamentos de nube y arquitectura AWS): Separa seguridad de la nube administrada por AWS de configuración, identidad y datos del cliente.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-07",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «AWS accounts» en fundamentos de nube y arquitectura aws?",
    "options": [
      "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius al operar.",
      "Compara cuánto administra AWS y cuánto conserva el equipo en cada modelo en el flujo.",
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
      "Asignan propiedad, costo, automatización y contexto operativo a recursos en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "AWS accounts (Fundamentos de nube y arquitectura AWS): Actúan como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-08",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «Multi-account strategy»?",
    "options": [
      "Compara cuánto administra AWS y cuánto conserva el equipo en cada modelo en ejecución.",
      "Asignan propiedad, costo, automatización y contexto operativo a recursos al operar.",
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
      "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Multi-account strategy (Fundamentos de nube y arquitectura AWS): Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-09",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «Tags y metadata»?",
    "options": [
      "Asignan propiedad, costo, automatización y contexto operativo a recursos de forma clara.",
      "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius.",
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
      "Identifica recursos globalmente mediante partición, servicio, región, cuenta y recurso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tags y metadata (Fundamentos de nube y arquitectura AWS): Asignan propiedad, costo, automatización y contexto operativo a recursos.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-10",
    "collectionId": "aws",
    "question": "Respecto a fundamentos de nube y arquitectura aws en AWS, ¿cuál es el propósito de «ARNs»?",
    "options": [
      "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius al operar.",
      "Identifica recursos globalmente mediante partición, servicio, región, cuenta y recurso.",
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
      "Compara cuánto administra AWS y cuánto conserva el equipo en cada modelo con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "ARNs (Fundamentos de nube y arquitectura AWS): Identifican recursos globalmente mediante partición, servicio, región, cuenta y recurso.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-11",
    "collectionId": "aws",
    "question": "En AWS (Fundamentos de nube y arquitectura AWS), ¿qué función técnica cumple «AWS CLI, SDKs y Console»?",
    "options": [
      "Separa producción, desarrollo, seguridad, logs y equipos para reducir blast radius al operar.",
      "Actúa como límites fuertes de identidad, facturación, cuotas y aislamiento operativo.",
      "Ofrecen interfaces distintas sobre las mismas APIs y credenciales sin degradar el flujo.",
      "Identifica recursos globalmente mediante partición, servicio, región, cuenta y recurso."
    ],
    "correctAnswerIndex": 2,
    "explanation": "AWS CLI, SDKs y Console (Fundamentos de nube y arquitectura AWS): Ofrecen interfaces distintas sobre las mismas APIs y credenciales.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-12",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «AWS Well-Architected Framework» en fundamentos de nube y arquitectura aws?",
    "options": [
      "Asume que instancias, zonas, redes y dependencias pueden fallar y diseña recuperación automatizada de modo predecible.",
      "Consume capacidad por API y bajo demanda, cambiando inversión fija por recursos elásticos medidos sin perder estado.",
      "Separa seguridad de la nube administrada por AWS de configuración, identidad y datos del cliente de modo predecible.",
      "Evalúa cargas con seis pilares: excelencia operativa, seguridad, confiabilidad, rendimiento, costo y sostenibilidad."
    ],
    "correctAnswerIndex": 3,
    "explanation": "AWS Well-Architected Framework (Fundamentos de nube y arquitectura AWS): Evalúa cargas con seis pilares: excelencia operativa, seguridad, confiabilidad, rendimiento, costo y sostenibilidad.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-13",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «Arquitectura orientada a fallos»?",
    "options": [
      "Asume que instancias, zonas, redes y dependencias pueden fallar y diseña recuperación automatizada.",
      "Agrupa infraestructura en geografías independientes para residencia, latencia y recuperación.",
      "Funciona como dominios de fallo aislados conectados con redes regionales de baja latencia al operar.",
      "Separa seguridad de la nube administrada por AWS de configuración, identidad y datos del cliente."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Arquitectura orientada a fallos (Fundamentos de nube y arquitectura AWS): Asume que instancias, zonas, redes y dependencias pueden fallar y diseña recuperación automatizada.",
    "topic": "Fundamentos de nube y arquitectura AWS",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-14",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «IAM users»?",
    "options": [
      "Emite y renueva certificados usados por servicios integrados como load balancers y CloudFront con precisión.",
      "Representa identidades de larga duración y deben evitarse para workloads cuando existen roles temporales.",
      "Configura una landing zone multi-account con controles, account factory y gobierno continuo en ejecución.",
      "Proporciona credenciales temporales asumibles por personas, servicios, workloads o cuentas con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "IAM users (Identidad, gobierno y seguridad): Representan identidades de larga duración y deben evitarse para workloads cuando existen roles temporales.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-15",
    "collectionId": "aws",
    "question": "Respecto a identidad, gobierno y seguridad en AWS, ¿cuál es el propósito de «IAM roles»?",
    "options": [
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al evaluar.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Proporciona credenciales temporales asumibles por personas, servicios, workloads o cuentas.",
      "Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica."
    ],
    "correctAnswerIndex": 2,
    "explanation": "IAM roles (Identidad, gobierno y seguridad): Proporcionan credenciales temporales asumibles por personas, servicios, workloads o cuentas.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-16",
    "collectionId": "aws",
    "question": "En AWS (Identidad, gobierno y seguridad), ¿qué función técnica cumple «IAM policies»?",
    "options": [
      "Almacena configuración y valores protegidos con jerarquía e integración IAM al operar.",
      "Conceden acceso desde el recurso y pueden habilitar relaciones cross-account al operar.",
      "Agrupa cuentas y define guardrails máximos sin otorgar permisos por sí mismos.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "IAM policies (Identidad, gobierno y seguridad): Declaran Effect, Action, Resource y Condition para autorizar o denegar operaciones.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "básico"
  },
  {
    "id": "aws-q-17",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «Evaluación de políticas IAM» en identidad, gobierno y seguridad?",
    "options": [
      "Combina identity policies, resource policies, boundaries, SCPs y explicit deny de forma segura.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Evaluación de políticas IAM (Identidad, gobierno y seguridad): Combina identity policies, resource policies, boundaries, SCPs y explicit deny.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-18",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «Principals y STS»?",
    "options": [
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al evaluar.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Principals y STS (Identidad, gobierno y seguridad): Intercambian confianza por sesiones temporales con duración y contexto limitados.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-19",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «Least privilege en AWS»?",
    "options": [
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Least privilege en AWS (Identidad, gobierno y seguridad): Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-20",
    "collectionId": "aws",
    "question": "Respecto a identidad, gobierno y seguridad en AWS, ¿cuál es el propósito de «Permission boundaries»?",
    "options": [
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar.",
      "Limita el máximo permiso que una identity policy puede conceder dentro de la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Permission boundaries (Identidad, gobierno y seguridad): Limitan el máximo permiso que una identity policy puede conceder.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-21",
    "collectionId": "aws",
    "question": "En AWS (Identidad, gobierno y seguridad), ¿qué función técnica cumple «Resource-based policies»?",
    "options": [
      "Conceden acceso desde el recurso y pueden habilitar relaciones cross-account dentro del flujo.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Resource-based policies (Identidad, gobierno y seguridad): Conceden acceso desde el recurso y pueden habilitar relaciones cross-account.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-22",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «AWS Organizations» en identidad, gobierno y seguridad?",
    "options": [
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Agrupa cuentas, centraliza facturación y aplica gobierno jerárquico de modo predecible.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Combina identity policies, resource policies, boundaries, SCPs y explicit deny al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "AWS Organizations (Identidad, gobierno y seguridad): Agrupa cuentas, centraliza facturación y aplica gobierno jerárquico.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-23",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «Organizational Units y SCPs»?",
    "options": [
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Agrupa cuentas y define guardrails máximos sin otorgar permisos por sí mismos al operar.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Organizational Units y SCPs (Identidad, gobierno y seguridad): Agrupan cuentas y definen guardrails máximos sin otorgar permisos por sí mismos.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-24",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «AWS Control Tower»?",
    "options": [
      "Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica al operar.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Configura una landing zone multi-account con controles, account factory y gobierno continuo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "AWS Control Tower (Identidad, gobierno y seguridad): Configura una landing zone multi-account con controles, account factory y gobierno continuo.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-25",
    "collectionId": "aws",
    "question": "Respecto a identidad, gobierno y seguridad en AWS, ¿cuál es el propósito de «IAM Identity Center»?",
    "options": [
      "Centraliza acceso humano a cuentas y aplicaciones con sesiones federadas durante la ejecución.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades."
    ],
    "correctAnswerIndex": 0,
    "explanation": "IAM Identity Center (Identidad, gobierno y seguridad): Centraliza acceso humano a cuentas y aplicaciones con sesiones federadas.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-26",
    "collectionId": "aws",
    "question": "En AWS (Identidad, gobierno y seguridad), ¿qué función técnica cumple «AWS KMS»?",
    "options": [
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar.",
      "Administra claves y operaciones criptográficas con policies, grants, rotación y auditoría.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "AWS KMS (Identidad, gobierno y seguridad): Administra claves y operaciones criptográficas con policies, grants, rotación y auditoría.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-27",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «Envelope encryption» en identidad, gobierno y seguridad?",
    "options": [
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Cifra datos con data keys y protege esas claves con una KMS key dentro de la aplicación.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Envelope encryption (Identidad, gobierno y seguridad): Cifra datos con data keys y protege esas claves con una KMS key.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-28",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «Secrets Manager»?",
    "options": [
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Combina identity policies, resource policies, boundaries, SCPs y explicit deny al operar.",
      "Versiona, rota y entrega secretos autorizados a workloads bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Secrets Manager (Identidad, gobierno y seguridad): Versiona, rota y entrega secretos autorizados a workloads.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-29",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «Systems Manager Parameter Store»?",
    "options": [
      "Almacena configuración y valores protegidos con jerarquía e integración IAM sin perder estado.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Systems Manager Parameter Store (Identidad, gobierno y seguridad): Almacena configuración y valores protegidos con jerarquía e integración IAM.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-30",
    "collectionId": "aws",
    "question": "Respecto a identidad, gobierno y seguridad en AWS, ¿cuál es el propósito de «AWS Certificate Manager»?",
    "options": [
      "Reduce acciones, recursos y condiciones usando evidencia de acceso y revisión periódica al operar.",
      "Emite y renueva certificados usados por servicios integrados como load balancers y CloudFront.",
      "Administra claves y operaciones criptográficas con policies, grants, rotación y auditoría.",
      "Proporciona credenciales temporales asumibles por personas, servicios, workloads o cuentas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "AWS Certificate Manager (Identidad, gobierno y seguridad): Emite y renueva certificados usados por servicios integrados como load balancers y CloudFront.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-31",
    "collectionId": "aws",
    "question": "En AWS (Identidad, gobierno y seguridad), ¿qué función técnica cumple «CloudTrail»?",
    "options": [
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Registra actividad de API para auditoría, investigación y gobierno durante la ejecución.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "CloudTrail (Identidad, gobierno y seguridad): Registra actividad de API para auditoría, investigación y gobierno.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-32",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «AWS Config» en identidad, gobierno y seguridad?",
    "options": [
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Combina identity policies, resource policies, boundaries, SCPs y explicit deny al operar.",
      "Evalúa cambios y conformidad de configuración a lo largo del tiempo de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "AWS Config (Identidad, gobierno y seguridad): Evalúa cambios y conformidad de configuración a lo largo del tiempo.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-33",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «GuardDuty, Security Hub e Inspector»?",
    "options": [
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar.",
      "Conceden acceso desde el recurso y pueden habilitar relaciones cross-account.",
      "Agrupa cuentas y define guardrails máximos sin otorgar permisos por sí mismos.",
      "Almacena configuración y valores protegidos con jerarquía e integración IAM al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "GuardDuty, Security Hub e Inspector (Identidad, gobierno y seguridad): Combinan detección de amenazas, postura centralizada y análisis de vulnerabilidades.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-34",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «Amazon Macie»?",
    "options": [
      "Declara Effect, Action, Resource y Condition para autorizar o denegar operaciones al operar.",
      "Descubre y clasifica datos sensibles almacenados en S3 dentro de la arquitectura activa.",
      "Intercambian confianza por sesiones temporales con duración y contexto limitados al operar.",
      "Combina detección de amenazas, postura centralizada y análisis de vulnerabilidades al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Amazon Macie (Identidad, gobierno y seguridad): Descubre y clasifica datos sensibles almacenados en S3.",
    "topic": "Identidad, gobierno y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "aws-q-35",
    "collectionId": "aws",
    "question": "Respecto a networking y conectividad en AWS, ¿cuál es el propósito de «Amazon VPC»?",
    "options": [
      "Expone un servicio mediante endpoints privados sin compartir routing completo al operar.",
      "Planifica rangos, dual-stack, egress y crecimiento sin solapamientos en ejecución.",
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Amazon VPC (Networking y conectividad): Crea una red virtual regional con direcciones, subnets, rutas y controles propios.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-36",
    "collectionId": "aws",
    "question": "En AWS (Networking y conectividad), ¿qué función técnica cumple «IPv4 e IPv6 en VPC»?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada.",
      "Planifica rangos, dual-stack, egress y crecimiento sin solapamientos de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "IPv4 e IPv6 en VPC (Networking y conectividad): Planifica rangos, dual-stack, egress y crecimiento sin solapamientos.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-37",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «Subnets públicas y privadas» en networking y conectividad?",
    "options": [
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Expone un servicio mediante endpoints privados sin compartir routing completo.",
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Subnets públicas y privadas (Networking y conectividad): Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-38",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «Route tables»?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Seleccionan target por prefijo más específico para cada paquete que sale de una subnet.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Route tables (Networking y conectividad): Seleccionan target por prefijo más específico para cada paquete que sale de una subnet.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-39",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «Internet Gateway»?",
    "options": [
      "Expone un servicio mediante endpoints privados sin compartir routing completo al operar.",
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Internet Gateway (Networking y conectividad): Conecta recursos con IP pública a Internet mediante rutas y traducción administrada.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-40",
    "collectionId": "aws",
    "question": "Respecto a networking y conectividad en AWS, ¿cuál es el propósito de «NAT Gateway»?",
    "options": [
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway al operar.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada al operar.",
      "Ofrece salida IPv6 desde VPC sin permitir conexiones entrantes iniciadas externamente al operar.",
      "Permite egress IPv4 desde subnets privadas sin aceptar conexiones iniciadas desde Internet."
    ],
    "correctAnswerIndex": 3,
    "explanation": "NAT Gateway (Networking y conectividad): Permite egress IPv4 desde subnets privadas sin aceptar conexiones iniciadas desde Internet.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-41",
    "collectionId": "aws",
    "question": "En AWS (Networking y conectividad), ¿qué función técnica cumple «Egress-only Internet Gateway»?",
    "options": [
      "Ofrece salida IPv6 desde VPC sin permitir conexiones entrantes iniciadas externamente al operar.",
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios.",
      "Expone un servicio mediante endpoints privados sin compartir routing completo al operar.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Egress-only Internet Gateway (Networking y conectividad): Ofrece salida IPv6 desde VPC sin permitir conexiones entrantes iniciadas externamente.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-42",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «Security Groups» en networking y conectividad?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Aplica reglas stateful a ENIs y permite referencias entre grupos sin degradar el flujo.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Security Groups (Networking y conectividad): Aplican reglas stateful a ENIs y permiten referencias entre grupos.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-43",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «Network ACLs»?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Aplica reglas stateless y ordenadas en el límite de la subnet manteniendo consistencia.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Network ACLs (Networking y conectividad): Aplican reglas stateless y ordenadas en el límite de la subnet.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-44",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «Elastic Network Interfaces»?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Expone un servicio mediante endpoints privados sin compartir routing completo al operar.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Representa interfaces virtuales con direcciones, security groups y atributos movibles."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Elastic Network Interfaces (Networking y conectividad): Representan interfaces virtuales con direcciones, security groups y atributos movibles.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-45",
    "collectionId": "aws",
    "question": "Respecto a networking y conectividad en AWS, ¿cuál es el propósito de «Elastic IPs»?",
    "options": [
      "Representa direcciones IPv4 públicas estáticas que deben usarse con propósito y costo consciente.",
      "Permite egress IPv4 desde subnets privadas sin aceptar conexiones iniciadas desde Internet.",
      "Seleccionan target por prefijo más específico para cada paquete que sale de una subnet al operar.",
      "Ofrece salida IPv6 desde VPC sin permitir conexiones entrantes iniciadas externamente al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Elastic IPs (Networking y conectividad): Son direcciones IPv4 públicas estáticas que deben usarse con propósito y costo consciente.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-46",
    "collectionId": "aws",
    "question": "En AWS (Networking y conectividad), ¿qué función técnica cumple «VPC Peering»?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Conecta dos VPC sin routing transitivo y exige rangos no solapados durante la ejecución.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "VPC Peering (Networking y conectividad): Conecta dos VPC sin routing transitivo y exige rangos no solapados.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-47",
    "collectionId": "aws",
    "question": "Dentro de AWS, ¿cómo opera el mecanismo de «Transit Gateway» en networking y conectividad?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Centraliza routing entre múltiples VPC, VPNs y redes on-premises sin degradar el flujo.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Transit Gateway (Networking y conectividad): Centraliza routing entre múltiples VPC, VPNs y redes on-premises.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-48",
    "collectionId": "aws",
    "question": "Al trabajar con AWS, ¿qué responsabilidad define a «AWS PrivateLink»?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada.",
      "Expone un servicio mediante endpoints privados sin compartir routing completo al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "AWS PrivateLink (Networking y conectividad): Expone un servicio mediante endpoints privados sin compartir routing completo.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-49",
    "collectionId": "aws",
    "question": "En la arquitectura de AWS, ¿qué caracteriza técnicamente a «VPC endpoints»?",
    "options": [
      "Acceden a servicios AWS por gateway o interface endpoints evitando Internet público.",
      "Expone un servicio mediante endpoints privados sin compartir routing completo.",
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway."
    ],
    "correctAnswerIndex": 0,
    "explanation": "VPC endpoints (Networking y conectividad): Acceden a servicios AWS por gateway o interface endpoints evitando Internet público.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  },
  {
    "id": "aws-q-50",
    "collectionId": "aws",
    "question": "Respecto a networking y conectividad en AWS, ¿cuál es el propósito de «Site-to-Site VPN»?",
    "options": [
      "Crea una red virtual regional con direcciones, subnets, rutas y controles propios al operar.",
      "Conecta redes por túneles IPsec redundantes sobre Internet bajo condiciones productivas.",
      "Se definen por sus rutas, no por el nombre; una pública alcanza un Internet Gateway.",
      "Conecta recursos con IP pública a Internet mediante rutas y traducción administrada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Site-to-Site VPN (Networking y conectividad): Conecta redes por túneles IPsec redundantes sobre Internet.",
    "topic": "Networking y conectividad",
    "difficulty": "avanzado"
  }
];
