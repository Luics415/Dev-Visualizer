import { createConceptCollection, type ConceptChapterSeed } from "./atlasConceptFactory";

const chapters = [
  {
    section: "Sitio privado con S3, CloudFront y OAC",
    concepts: [
      [
        "Origen S3 privado de extremo a extremo",
        "Mantiene Block Public Access activo y entrega objetos mediante el endpoint regional de S3, dejando a CloudFront como única superficie pública en vez de exponer un website endpoint.",
      ],
      [
        "OAC y solicitud firmada al origen",
        "Hace que CloudFront firme cada lectura hacia S3 y limita la bucket policy al ARN de una distribución concreta, de modo que una URL directa al bucket permanezca denegada.",
      ],
      [
        "Cache key y behaviors verificables",
        "Separa path pattern, origen, métodos y política de caché; un Hit reutiliza el objeto y un Miss consulta S3, mientras cookies, headers o query strings innecesarios fragmentan la caché.",
      ],
      [
        "Invalidación frente a assets versionados",
        "Reserva invalidaciones para contenido que debe retirarse y usa nombres con hash para assets inmutables, equilibrando propagación, costo y consistencia entre edge locations.",
      ],
      [
        "Publicación estática con dry-run y evidencia",
        "Previsualiza aws s3 sync antes de aplicar cambios, trata --delete como operación riesgosa y confirma root object, headers, HTTPS, Cache Hit o Miss y denegación del acceso directo sin subir secretos al navegador.",
      ],
    ],
  },
  {
    section: "API serverless con API Gateway y Lambda",
    concepts: [
      [
        "Ruta, stage e integración serverless",
        "Conecta método y path de API Gateway con una integración Lambda y un stage desplegable, preservando un contrato HTTP explícito desde la solicitud hasta el payload de respuesta.",
      ],
      [
        "JWT authorizer e identidad confiable",
        "Valida firma, emisor, audiencia y vigencia antes de invocar la función, y deriva la identidad de claims verificados en lugar de confiar en un userId enviado por el cliente.",
      ],
      [
        "Handler, inicialización y entorno reutilizado",
        "Mantiene el handler pequeño, coloca clientes reutilizables fuera de la invocación y distingue cold start de ejecución warm sin guardar estado de usuario mutable entre solicitudes.",
      ],
      [
        "Concurrencia por función y presión compartida",
        "Relaciona invocaciones simultáneas con cuotas regionales, throttling y downstreams; reserved concurrency puede proteger capacidad o contener una función sin convertirla en escalado ilimitado.",
      ],
      [
        "Eventos, reintentos y bucles evitables",
        "Procesa eventos de S3, EventBridge o SQS con operaciones idempotentes, separa productor y destino y evita escribir en el mismo patrón que vuelve a disparar la función indefinidamente.",
      ],
    ],
  },
  {
    section: "DynamoDB guiado por patrones de acceso",
    concepts: [
      [
        "Patrones de acceso antes del esquema",
        "Enumera preguntas, cardinalidad y volumen antes de elegir partition key y sort key, porque la tabla se diseña para rutas de lectura y escritura concretas y no para joins arbitrarios.",
      ],
      [
        "Query dirigida frente a Scan exhaustivo",
        "Usa Query cuando conoce la partition key y acota rangos por sort key; reserva Scan para casos controlados porque examina items aunque un filtro descarte después buena parte de ellos.",
      ],
      [
        "Índices y consistencia con costo visible",
        "Proyecta solo los atributos necesarios en GSIs o LSIs, reconoce que un GSI se actualiza con consistencia eventual y solicita lectura fuerte únicamente donde el contrato y la tabla lo permiten.",
      ],
      [
        "Capacidad, throttling y claves calientes",
        "Elige on-demand o provisioned según predictibilidad, observa consumo y throttles y distribuye tráfico para que una clave popular no concentre la capacidad física disponible.",
      ],
      [
        "Idempotencia con escrituras condicionales",
        "Registra una clave estable de operación y usa ConditionExpression o una transacción para que reintentos no dupliquen efectos, diferenciando solicitud repetida de una nueva intención de negocio.",
      ],
    ],
  },
  {
    section: "CloudWatch como evidencia operativa",
    concepts: [
      [
        "Logs estructurados, retención y datos sensibles",
        "Emite eventos con campos estables como requestId, operación y resultado, define retención deliberada y excluye tokens, credenciales y datos sensibles antes de que lleguen al log group.",
      ],
      [
        "Consultas reproducibles con Logs Insights",
        "Filtra, parsea, agrupa y ordena eventos dentro de una ventana temporal explícita para convertir una sospecha en evidencia repetible sin descargar todos los logs.",
      ],
      [
        "Métricas nativas, percentiles y concurrencia",
        "Lee invocations, errors, duration, throttles y concurrent executions en conjunto; usa p95 o p99 para ver colas lentas que un promedio puede ocultar.",
      ],
      [
        "Métricas de negocio con EMF",
        "Codifica métricas personalizadas dentro de logs mediante Embedded Metric Format y mantiene dimensiones acotadas para evitar cardinalidad explosiva y costos difíciles de atribuir.",
      ],
      [
        "Alarmas accionables y runbooks",
        "Interpreta estados OK, ALARM e INSUFFICIENT_DATA con periodos y umbrales adecuados, notifica por SNS y enlaza un runbook que incluye validación, mitigación y señales de recuperación.",
      ],
    ],
  },
  {
    section: "IAM y evaluación de permisos",
    concepts: [
      [
        "Principal, Action, Resource y Condition",
        "Lee una autorización como la relación entre quién solicita, qué operación intenta, sobre cuál ARN y bajo qué contexto, evitando comodines cuando esos cuatro ejes pueden delimitarse.",
      ],
      [
        "Default deny y explicit deny",
        "Parte de denegación implícita, requiere un Allow aplicable y conserva que cualquier Deny explícito coincidente prevalece, incluso cuando otra política parece conceder la operación.",
      ],
      [
        "Trust policy frente a permissions policy",
        "Separa quién puede asumir un role de lo que ese role puede hacer después de asumirlo; ambas políticas deben permitir el flujo correcto sin ampliar identidades ni recursos innecesarios.",
      ],
      [
        "Least privilege por prefijo y objeto",
        "Distingue ARN de bucket y ARN de objetos, restringe acciones al prefijo requerido y prefiere credenciales temporales, revisando permisos con evidencia real en vez de entregar acceso administrativo.",
      ],
      [
        "Permiso de invocación y role de ejecución",
        "Diferencia la resource-based policy que permite a un servicio invocar Lambda del execution role que usa la función al acceder a S3, DynamoDB, logs u otros recursos durante su trabajo.",
      ],
    ],
  },
  {
    section: "FinOps, atribución y control de gasto",
    concepts: [
      [
        "Cost Explorer como conversación temporal",
        "Agrupa y filtra costo y uso por servicio, cuenta, región o etiqueta a lo largo del tiempo, comparando periodos para investigar cambios en vez de interpretar una cifra aislada.",
      ],
      [
        "Etiquetas de asignación y costo compartido",
        "Define claves consistentes para producto, entorno y propietario, activa las cost allocation tags y documenta su demora y los recursos compartidos que aún requieren una regla de reparto.",
      ],
      [
        "Budgets alerta, no límite duro",
        "Configura umbrales reales y pronosticados con destinatarios responsables, entendiendo que una notificación de AWS Budgets no detiene por sí sola el consumo ni garantiza ausencia de sobrecosto.",
      ],
      [
        "Budget Actions con guardas operativas",
        "Automatiza una política, notificación o acción acotada cuando se cruza un umbral, pero incorpora aprobación, alcance reversible y pruebas para no convertir el ahorro en una caída del servicio.",
      ],
      [
        "Ciclo FinOps de medir, decidir y verificar",
        "Une utilización, demanda y objetivo de servicio para retirar recursos ociosos, ajustar capacidad, almacenamiento y caché, y confirma después que el ahorro no degradó confiabilidad ni experiencia.",
      ],
    ],
  },
] as const satisfies readonly ConceptChapterSeed[];

export const awsNotesConcepts = createConceptCollection(chapters);
