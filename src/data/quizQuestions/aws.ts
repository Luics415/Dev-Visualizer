import type { QuizQuestion } from "@/data/quizTypes";

export const awsQuestions: QuizQuestion[] = [
  {
    id: "aws-01",
    collectionId: "aws",
    question: "En la lógica de evaluación de políticas de AWS IAM, ¿cuál es el orden estricto de precedencia entre permisos?",
    options: [
      "Denegación explícita (Explicit Deny) $\\to$ Permisión explícita (Explicit Allow) $\\to$ Denegación por defecto (Default/Implicit Deny).",
      "Permisión explícita $\\to$ Denegación explícita $\\to$ Denegación por defecto.",
      "Las políticas de grupo sobrescriben siempre a las políticas individuales de usuario.",
      "Las Service Control Policies (SCPs) solo aplican si no hay políticas inline."
    ],
    correctAnswerIndex: 0,
    explanation: "En IAM, si una sola política contiene un `Deny` explícito que coincide con la acción y el recurso solicitado, la petición es denegada irrevocablemente, sin importar cuántos `Allow` explícitos existan en otras políticas adjuntas.",
    topic: "IAM y Seguridad",
    difficulty: "intermedio"
  },
  {
    id: "aws-02",
    collectionId: "aws",
    question: "¿Cuál es la diferencia arquitectónica fundamental entre un Security Group y una Network Access Control List (NACL) en una Amazon VPC?",
    options: [
      "Los Security Groups operan a nivel de interfaz de red de instancia y tienen estado (stateful: el tráfico de respuesta permitido entra automáticamente sin regla de retorno); las NACLs operan a nivel de subnet y carecen de estado (stateless: requieren reglas explícitas de entrada y salida ordenadas numéricamente).",
      "Los Security Groups solo filtran tráfico UDP, mientras que las NACLs filtran exclusivamente tráfico TCP y HTTP.",
      "Las NACLs se cobran por gigabyte transferido, mientras que los Security Groups son gratuitos.",
      "Un Security Group puede bloquear direcciones IP individuales con reglas de Deny explícitas, lo cual es imposible en una NACL."
    ],
    correctAnswerIndex: 0,
    explanation: "Los Security Groups son stateful (recuerdan la conexión) y solo admiten reglas `Allow`. Las NACLs son stateless (evalúan paquetes individuales en entrada y salida por separado) y admiten reglas explícitas de `Allow` y `Deny` evaluadas por número de regla.",
    topic: "Redes y VPC",
    difficulty: "intermedio"
  },
  {
    id: "aws-03",
    collectionId: "aws",
    question: "Para permitir que instancias EC2 ubicadas en una subred privada accedan a Internet (para descargar parches) sin permitir conexiones entrantes no solicitadas desde Internet, ¿qué configuración es requerida?",
    options: [
      "Desplegar un NAT Gateway en una subred pública (con su propia Elastic IP y ruta hacia un Internet Gateway), y configurar la tabla de ruteo de la subred privada apuntando `0.0.0.0/0` al ID del NAT Gateway.",
      "Adjuntar un Internet Gateway directamente a la subred privada.",
      "Asignar una dirección IPv4 pública dinámica directamente a cada instancia privada.",
      "Crear un VPC Endpoint de tipo Gateway para el protocolo TCP 443."
    ],
    correctAnswerIndex: 0,
    explanation: "El NAT Gateway debe residir obligatoriamente en una subred pública para comunicarse con el Internet Gateway (IGW). Las instancias privadas enrutan su tráfico saliente hacia el NAT Gateway, el cual enmascara la IP de origen.",
    topic: "VPC y Ruteo",
    difficulty: "intermedio"
  },
  {
    id: "aws-04",
    collectionId: "aws",
    question: "¿Qué dos servicios de AWS soportan 'VPC Gateway Endpoints' gratuitos que no requieren Network Interfaces elásticas (ENI) ni costes por hora?",
    options: [
      "Amazon S3 y Amazon DynamoDB.",
      "Amazon RDS y Amazon ElastiCache.",
      "AWS Lambda y Amazon SQS.",
      "Amazon SNS y AWS Secrets Manager."
    ],
    correctAnswerIndex: 0,
    explanation: "AWS ofrece dos tipos de VPC Endpoints: Gateway Endpoints (únicamente disponibles para Amazon S3 y DynamoDB mediante entradas de ruta en la Route Table) e Interface Endpoints (AWS PrivateLink con ENIs dedicadas para casi todos los demás servicios).",
    topic: "VPC Endpoints y PrivateLink",
    difficulty: "intermedio"
  },
  {
    id: "aws-05",
    collectionId: "aws",
    question: "En Amazon S3, ¿qué mecanismo criptográfico define el patrón 'Envelope Encryption' (Cifrado de Sobre) utilizado por AWS KMS?",
    options: [
      "Los datos en texto plano se cifran con una Data Encryption Key (DEK) única generada por KMS; la DEK a su vez se cifra utilizando una Customer Master Key (CMK / KMS Key) y se almacena cifrada junto a los datos protegidos.",
      "Los datos se dividen en fragmentos de 1 MB enviados a tres centros de datos independientes.",
      "KMS descifra los datos en el navegador del cliente utilizando una clave RSA pública.",
      "Se aplica una función hash MD5 con una semilla secreta generada en la BIOS del servidor."
    ],
    correctAnswerIndex: 0,
    explanation: "Envelope Encryption permite cifrar grandes volúmenes de datos con rendimiento simétrico rápido mediante una DEK de un solo uso, evitando enviar gigabytes de datos a KMS y transmitiendo únicamente la pequeña clave DEK para su cifrado/descifrado.",
    topic: "KMS y Criptografía",
    difficulty: "avanzado"
  },
  {
    id: "aws-06",
    collectionId: "aws",
    question: "¿Cuál es la diferencia fundamental entre una implementación de Amazon RDS en configuración 'Multi-AZ' frente a una configuración con 'Read Replicas'?",
    options: [
      "Multi-AZ utiliza replicación síncrona hacia una instancia secundaria en espera (standby) en otra zona de disponibilidad para alta disponibilidad y conmutación por error automática (failover); las Read Replicas utilizan replicación asíncrona para escalar cargas de lectura horizontalmente.",
      "Multi-AZ duplica el rendimiento de escritura de la base de datos dividiendo las transacciones.",
      "Las Read Replicas solo pueden desplegarse en la misma zona de disponibilidad que el nodo primario.",
      "Multi-AZ permite realizar consultas de lectura directa sobre la instancia standby."
    ],
    correctAnswerIndex: 0,
    explanation: "Multi-AZ es una solución de resiliencia y disaster recovery (el standby no admite tráfico de lectura en RDS estándar hasta que ocurre failover). Las réplicas de lectura son para escalabilidad de lecturas concurrentes y replican de forma asíncrona.",
    topic: "Bases de Datos Relacionales (RDS)",
    difficulty: "intermedio"
  },
  {
    id: "aws-07",
    collectionId: "aws",
    question: "¿Qué arquitectura de almacenamiento subyacente hace que Amazon Aurora sea sustancialmente más tolerante a fallos que RDS MySQL/PostgreSQL tradicional?",
    options: [
      "Su volumen de almacenamiento está distribuido en un cluster de almacenamiento virtualizado independiente que replica 6 copias de los datos a través de 3 Zonas de Disponibilidad (2 copias por AZ), tolerando la pérdida de una AZ completa sin impacto en escrituras.",
      "Aurora almacena todos los datos en discos magnéticos RAID 0 de alta velocidad.",
      "Los datos se guardan en la memoria RAM volátil de 16 instancias EC2 sincronizadas por RDMA.",
      "Aurora realiza copias de seguridad cada 60 segundos comprimidas en formato ZIP hacia S3."
    ],
    correctAnswerIndex: 0,
    explanation: "El sistema de almacenamiento nativo de Aurora desacopla cómputo y storage: escribe mediante quórums (4 de 6 para escritura, 3 de 6 para lectura) en un cluster auto-reparable que elimina la necesidad de transferir bloques enteros de base de datos.",
    topic: "Amazon Aurora",
    difficulty: "avanzado"
  },
  {
    id: "aws-08",
    collectionId: "aws",
    question: "En Amazon DynamoDB, ¿cuál es la diferencia entre una clave primaria compuesta por 'Partition Key (PK)' frente a una compuesta por 'Partition Key + Sort Key (PK + SK)'?",
    options: [
      "Una tabla solo con PK almacena cada elemento de forma única mediante una función hash interna; una tabla con PK + SK modela relaciones 1-a-N, donde la PK determina la partición física y la SK ordena los elementos dentro de dicha partición permitiendo consultas de rango (`begins_with`, `between`, `<`, `>`).",
      "La clave Sort Key solo admite valores alfanuméricos en mayúsculas de 4 caracteres.",
      "Una tabla sin Sort Key no puede tener índices secundarios globales (GSI).",
      "La Sort Key cifra automáticamente los elementos con AES-256."
    ],
    correctAnswerIndex: 0,
    explanation: "La Partition Key distribuye los datos en nodos físicos de almacenamiento mediante hashing uniforme. La Sort Key organiza físicamente los registros contiguos dentro de esa partición, habilitando el patrón Single-Table Design.",
    topic: "DynamoDB y NoSQL",
    difficulty: "intermedio"
  },
  {
    id: "aws-09",
    collectionId: "aws",
    question: "¿Qué diferencia crítica existe entre un Global Secondary Index (GSI) y un Local Secondary Index (LSI) en DynamoDB?",
    options: [
      "Un LSI comparte la misma Partition Key que la tabla base y solo puede crearse al momento de crear la tabla; un GSI puede tener una Partition Key y Sort Key totalmente diferentes, puede crearse o eliminarse en cualquier momento y posee su propio throughput aprovisionado independiente.",
      "Un GSI solo se puede consultar desde fuera de la región de AWS.",
      "Un LSI puede almacenar un número ilimitado de datos por partición sin restricción de tamaño.",
      "Los GSIs garantizan consistencia de lectura fuertemente consistente (Strongly Consistent Reads)."
    ],
    correctAnswerIndex: 0,
    explanation: "Los LSIs comparten la cuota de tamaño de 10 GB por colección de partición y usan la capacidad de la tabla base. Los GSIs son tablas asíncronas totalmente independientes con su propia partición y capacidad de lectura/escritura (solo consistencia eventual).",
    topic: "DynamoDB Índices",
    difficulty: "avanzado"
  },
  {
    id: "aws-10",
    collectionId: "aws",
    question: "En AWS Lambda, ¿qué estrategia técnica minimiza o erradica el impacto de los 'Cold Starts' (arranques en frío) para funciones con estrictos acuerdos de nivel de servicio (SLA)?",
    options: [
      "Habilitar 'Provisioned Concurrency' (Concurrencia Aprovisionada), manteniendo un número predefinido de entornos de ejecución completamente inicializados e hiper-calientes listos para responder en milisegundos de dos dígitos.",
      "Aumentar el tiempo de timeout de la función de 15 minutos a 2 horas.",
      "Escribir la función Lambda en Bash en lugar de lenguajes compilados.",
      "Configurar un disparador de Amazon SQS con tamaño de lote igual a cero."
    ],
    correctAnswerIndex: 0,
    explanation: "Provisioned Concurrency inicializa el runtime, descarga dependencias y ejecuta el código estático fuera del handler de antemano, garantizando que cuando llegue la solicitud no exista latencia de instanciación de contenedor.",
    topic: "Serverless y AWS Lambda",
    difficulty: "intermedio"
  },
  {
    id: "aws-11",
    collectionId: "aws",
    question: "¿Cuál es el tiempo máximo de ejecución (timeout) que puede tener una única invocación de función en AWS Lambda?",
    options: [
      "15 minutos (900 segundos).",
      "5 minutos (300 segundos).",
      "1 hora (3600 segundos).",
      "Ilimitado, siempre que la memoria RAM no exceda los 10 GB."
    ],
    correctAnswerIndex: 0,
    explanation: "El límite rígido de timeout de AWS Lambda es de 15 minutos. Para procesos que requieren mayor tiempo de cómputo se debe recurrir a AWS Step Functions (orquestación), AWS Fargate (contenedores) o AWS Batch.",
    topic: "Serverless y AWS Lambda",
    difficulty: "básico"
  },
  {
    id: "aws-12",
    collectionId: "aws",
    question: "En Amazon SQS, ¿qué función cumple el parámetro 'Visibility Timeout' (Tiempo de Visibilidad)?",
    options: [
      "Es el periodo durante el cual un mensaje recibido por un consumidor se vuelve invisible para otros consumidores para evitar que procesen el mismo mensaje concurrentemente mientras se procesa la tarea.",
      "El tiempo máximo que un mensaje puede permanecer almacenado en la cola antes de expirar.",
      "El retraso introducido antes de que un nuevo mensaje pueda ser visto por primera vez en la cola.",
      "El tiempo que tarda CloudWatch en generar una métrica de longitud de cola."
    ],
    correctAnswerIndex: 0,
    explanation: "Si el consumidor procesa el mensaje con éxito dentro del Visibility Timeout, debe invocar `DeleteMessage`. Si el consumidor falla o excede el tiempo, el mensaje vuelve a ser visible automáticamente en la cola para que otro worker lo reintente.",
    topic: "Mensajería y Amazon SQS",
    difficulty: "intermedio"
  },
  {
    id: "aws-13",
    collectionId: "aws",
    question: "¿Cuál es la diferencia fundamental entre una cola Amazon SQS Standard y una cola SQS FIFO (First-In-First-Out)?",
    options: [
      "SQS Standard ofrece throughput casi ilimitado y entrega 'al menos una vez' (at-least-once delivery) con mejor esfuerzo de orden; SQS FIFO garantiza orden estricto de llegada, entrega 'exactamente una vez' (mediante deduplicación por ID o hash) y throughput acotado.",
      "SQS FIFO solo admite mensajes de menos de 1 KB de tamaño.",
      "SQS Standard requiere el uso obligatorio de una Dead Letter Queue (DLQ).",
      "SQS FIFO no permite consumidores concurrentes bajo ninguna condición."
    ],
    correctAnswerIndex: 0,
    explanation: "SQS FIFO asegura procesamiento ordenado y deduplicación dentro del mismo `MessageGroupId`, a cambio de un límite base de throughput (hasta 300 o 3000 msgs/s con batching), mientras que Standard escala sin límites pero puede duplicar mensajes ocasionalmente.",
    topic: "Mensajería y Colas SQS",
    difficulty: "intermedio"
  },
  {
    id: "aws-14",
    collectionId: "aws",
    question: "¿Qué patrón arquitectónico desacoplado se implementa al combinar Amazon SNS con múltiples colas Amazon SQS ('SNS + SQS Fanout')?",
    options: [
      "Un mensaje publicado en un único tópico de SNS se replica y entrega en paralelo a múltiples colas SQS independientes suscritas, permitiendo que múltiples microservicios procesen el mismo evento de negocio de forma asíncrona y a su propio ritmo.",
      "Un balanceador de carga que divide peticiones HTTP de forma Round-Robin entre instancias EC2.",
      "Un sistema de compresión de logs para CloudWatch.",
      "Una réplica geográfica de almacenamiento de bloques EBS."
    ],
    correctAnswerIndex: 0,
    explanation: "El patrón Fanout es la base de las arquitecturas guiadas por eventos: el productor publica un evento una sola vez en SNS (e.g. `OrdenCreada`) y SNS lo propaga automáticamente a las colas SQS de facturación, almacén, analítica y notificaciones.",
    topic: "Arquitecturas Guiadas por Eventos",
    difficulty: "intermedio"
  },
  {
    id: "aws-15",
    collectionId: "aws",
    question: "En Amazon EventBridge, ¿cuál es la ventaja clave de sus reglas de enrutamiento basadas en 'Content Filtering' (Filtrado por Contenido)?",
    options: [
      "Permite evaluar la estructura y valores del cuerpo JSON del evento mediante patrones declarativos, enrutando el evento a destinos específicos solo si coincide con los criterios sin requerir código de middleware intermediario.",
      "Cifra el contenido del evento con un certificado SSL temporal.",
      "Convierte eventos JSON en archivos binarios Parquet antes de entregarlos.",
      "Verifica la firma digital de las peticiones mediante blockchain."
    ],
    correctAnswerIndex: 0,
    explanation: "EventBridge permite crear reglas que inspeccionan campos concretos (e.g. `{\"detail\": {\"status\": [\"REJECTED\"], \"amount\": [{\">\": 1000}]}}`), despachando el evento a Lambdas, Step Functions o SQS sin computación intermedia.",
    topic: "EventBridge y Event Routing",
    difficulty: "avanzado"
  },
  {
    id: "aws-16",
    collectionId: "aws",
    question: "¿Qué nivel de almacenamiento (Storage Class) de Amazon S3 está diseñado para archivar datos que rara vez se consultan (acceso en horas o días) al menor coste posible de almacenamiento por gigabyte?",
    options: [
      "S3 Glacier Deep Archive",
      "S3 Standard-Infrequent Access (S3 Standard-IA)",
      "S3 One Zone-IA",
      "S3 Express One Zone"
    ],
    correctAnswerIndex: 0,
    explanation: "S3 Glacier Deep Archive es la clase de almacenamiento más económica de AWS, diseñada para retención a largo plazo (7-10 años) de cumplimiento regulatorio, con tiempos de recuperación estándar de 12 horas.",
    topic: "Almacenamiento S3",
    difficulty: "básico"
  },
  {
    id: "aws-17",
    collectionId: "aws",
    question: "En Amazon CloudFront (CDN), ¿qué mecanismo permite restringir el acceso a contenido premium privado de modo que solo usuarios autenticados con un token criptográfico temporal puedan descargarlo?",
    options: [
      "CloudFront Signed URLs o Signed Cookies.",
      "Configurar un Security Group con la dirección IP del usuario.",
      "Activar AWS Shield Advanced en el bucket S3 de origen.",
      "Bloquear todos los encabezados HTTP excepto `Accept-Language`."
    ],
    correctAnswerIndex: 0,
    explanation: "Las Signed URLs y Signed Cookies firmadas con una clave privada de CloudFront permiten conceder acceso con fecha de caducidad, restricción de IP o limitaciones de ruta a recursos específicos cacheados en las Edge Locations mundiales.",
    topic: "Distribución de Contenido y CloudFront",
    difficulty: "intermedio"
  },
  {
    id: "aws-18",
    collectionId: "aws",
    question: "¿Cuál es la función del servicio 'AWS Transit Gateway' en una arquitectura multicuenta con decenas o cientos de VPCs y redes on-premise?",
    options: [
      "Actúa como un concentrador central de red (Cloud Router) que simplifica la topología eliminando las mallas complejas de emparejamiento punto a punto (VPC Peering full mesh), escalando conexiones transitivas de forma centralizada.",
      "Un proxy reverso para aplicaciones monolíticas en PHP.",
      "Un sistema de compresión de paquetes UDP para satélites AWS Ground Station.",
      "Un analizador de código estático para plantillas de Terraform."
    ],
    correctAnswerIndex: 0,
    explanation: "VPC Peering requiere una relación no transitiva $N(N-1)/2$ compleja. Transit Gateway opera como un router virtual tipo hub-and-spoke: cada VPC o VPN se conecta una sola vez al Gateway, simplificando el ruteo y gobierno a escala.",
    topic: "Redes Avanzadas y Transit Gateway",
    difficulty: "avanzado"
  },
  {
    id: "aws-19",
    collectionId: "aws",
    question: "En Amazon Elastic Block Store (EBS), ¿qué caracteriza al tipo de volumen 'gp3' frente a su predecesor 'gp2'?",
    options: [
      "`gp3` permite aprovisionar rendimiento de IOPS y throughput (MB/s) de forma completamente independiente de la capacidad de almacenamiento en GB del volumen, con un coste por GB hasta un 20% menor.",
      "`gp3` no utiliza memoria flash SSD y recurre a cintas magnéticas.",
      "`gp3` solo se puede conectar a instancias EC2 de tipo T2 Micro.",
      "`gp3` no admite la creación de snapshots incrementales en S3."
    ],
    correctAnswerIndex: 0,
    explanation: "En `gp2`, para obtener más IOPS se debía comprar más almacenamiento en gigabytes obligatoriamente. `gp3` desacopla almacenamiento y rendimiento: ofrece 3000 IOPS y 125 MB/s de base y permite escalar cada métrica de forma independiente.",
    topic: "Almacenamiento en Bloque (EBS)",
    difficulty: "intermedio"
  },
  {
    id: "aws-20",
    collectionId: "aws",
    question: "¿Qué utilidad tiene la característica 'S3 Object Lock' en Amazon S3?",
    options: [
      "Impide la eliminación o sobrescritura de objetos durante un periodo de retención fijo o indefinido siguiendo el modelo WORM (Write Once, Read Many), garantizando cumplimiento legal y protección estricta contra ransomware.",
      "Bloquea la descarga de archivos mediante cifrado simétrico exclusivo de Apple.",
      "Impide que los administradores inicien sesión en la consola web de AWS.",
      "Comprime los archivos PDF en archivos ejecutables de Windows."
    ],
    correctAnswerIndex: 0,
    explanation: "S3 Object Lock soporta modos de retención (Governance Mode y Compliance Mode, donde ni la cuenta root de AWS puede borrar el objeto antes de que expire el plazo) satisfaciendo normativas financieras estrictas como SEC Rule 17a-4.",
    topic: "Almacenamiento Seguro S3",
    difficulty: "avanzado"
  },
  {
    id: "aws-21",
    collectionId: "aws",
    question: "En AWS Organizations, ¿qué es una 'Service Control Policy' (SCP) y sobre quién tiene autoridad?",
    options: [
      "Es una política de gobierno central que define el límite máximo de permisos (Guardrails) que las cuentas miembro dentro de una Organización o Unidad Organizacional (OU) pueden ejercer, aplicando incluso sobre el usuario `root` de las cuentas administradas.",
      "Un script de shell que detiene servidores los fines de semana.",
      "Una póliza de seguro comercial contra caídas de centros de datos.",
      "Un archivo de configuración para el compilador de TypeScript."
    ],
    correctAnswerIndex: 0,
    explanation: "Las SCPs no otorgan permisos por sí solas; establecen una frontera rígida. Si una SCP deniega el uso de una región o servicio (e.g. `Deny` en regiones fuera de Europa), ninguna política IAM dentro de la cuenta miembro (ni siquiera el usuario root local) podrá usarlo.",
    topic: "Gobernanza y AWS Organizations",
    difficulty: "avanzado"
  },
  {
    id: "aws-22",
    collectionId: "aws",
    question: "¿Cuál es la diferencia entre el tipo de lanzamiento (Launch Type) 'EC2' y 'Fargate' en Amazon ECS (Elastic Container Service)?",
    options: [
      "Con EC2 Launch Type el usuario aprovisiona, escala, parchea y gestiona los servidores virtuales EC2 que ejecutan los contenedores; con AWS Fargate la infraestructura de cómputo es totalmente serverless, pagando únicamente por la CPU y memoria solicitada por cada tarea sin gestionar servidores.",
      "Fargate solo soporta contenedores basados en Windows Server 2003.",
      "EC2 Launch Type no soporta redes VPC privadas.",
      "Fargate prohíbe el uso de variables de entorno en los contenedores."
    ],
    correctAnswerIndex: 0,
    explanation: "Fargate elimina la sobrecarga operativa de gestionar clusters de instancias, parches de SO y dimensionamiento de nodos subyacentes: el desarrollador solo define las especificaciones de CPU y RAM del contenedor Docker.",
    topic: "Contenedores y Amazon ECS",
    difficulty: "básico"
  },
  {
    id: "aws-23",
    collectionId: "aws",
    question: "¿Qué registra el servicio 'AWS CloudTrail' en contraposición a 'Amazon CloudWatch'?",
    options: [
      "CloudTrail audita y registra el historial de llamadas a las APIs de AWS (quién hizo qué acción, desde qué dirección IP, a qué recurso y en qué momento); CloudWatch monitorea métricas de rendimiento operacional (CPU, latencia, logs de aplicaciones y alarmas).",
      "CloudWatch solo almacena contraseñas cifradas de los administradores.",
      "CloudTrail es un antivirus para servidores Linux en la nube.",
      "Son dos nombres comerciales para el mismo servicio de balanceo de carga."
    ],
    correctAnswerIndex: 0,
    explanation: "CloudTrail responde a preguntas de auditoría y seguridad forense ('¿Quién eliminó la base de datos a las 3:00 AM?'). CloudWatch responde a preguntas operacionales de salud ('¿Cuál es el porcentaje de CPU y la tasa de error 5xx actual?').",
    topic: "Auditoría y Monitoreo",
    difficulty: "básico"
  },
  {
    id: "aws-24",
    collectionId: "aws",
    question: "En AWS Step Functions, ¿qué ventaja ofrece el uso de 'Express Workflows' frente a los 'Standard Workflows'?",
    options: [
      "Los Express Workflows están optimizados para orquestaciones de procesamiento de eventos a escala masiva (más de 100,000 ejecuciones por segundo) con una duración máxima de 5 minutos y un modelo de cobro basado en memoria y duración, siendo mucho más rentables que Standard.",
      "Los Express Workflows pueden ejecutarse durante un máximo de 1 año continuo.",
      "Los Express Workflows garantizan semántica de ejecución 'exactamente una vez' estricta.",
      "Los Express Workflows no requieren definir estados en formato Amazon States Language (ASL)."
    ],
    correctAnswerIndex: 0,
    explanation: "Standard Workflows es para flujos largos y auditables paso a paso de hasta 1 año con cobro por transición de estado. Express Workflows está diseñado para microservicios de alto rendimiento (IoT, streaming, ingesta de datos) de corta duración.",
    topic: "Orquestación y Step Functions",
    difficulty: "avanzado"
  },
  {
    id: "aws-25",
    collectionId: "aws",
    question: "¿Qué funcionalidad proporciona el 'Auto Scaling Group' (ASG) de Amazon EC2 mediante políticas de escalado basadas en seguimiento de objetivos (Target Tracking)?",
    options: [
      "Ajusta automáticamente la capacidad de instancias EC2 agregando o retirando nodos para mantener una métrica elegida (como la utilización media de CPU al 70% o número de peticiones por target) en el nivel objetivo especificado.",
      "Actualiza el sistema operativo de las instancias a la última versión disponible de Ubuntu cada medianoche.",
      "Cambia la región de AWS del cluster cada vez que aumenta el tráfico de red.",
      "Cifra los discos duros con un algoritmo polimórfico en tiempo de ejecución."
    ],
    correctAnswerIndex: 0,
    explanation: "Target Tracking opera como un termostato: en lugar de definir complejas reglas de 'si CPU > 80% sumar 2 instancias', el usuario declara 'mantener CPU al 60%' y el ASG calcula matemáticamente las instancias requeridas.",
    topic: "Cómputo Elástico y Auto Scaling",
    difficulty: "intermedio"
  },
  {
    id: "aws-26",
    collectionId: "aws",
    question: "En AWS WAF (Web Application Firewall), ¿qué es una 'Web ACL' y cómo mitiga ataques comunes de la web?",
    options: [
      "Es un conjunto de reglas de inspección que se asocia a CloudFront, Application Load Balancer o API Gateway para bloquear peticiones maliciosas (inyección SQL, Cross-Site Scripting, bots abusivos, saturación por rate-limiting de IPs) antes de que alcancen el backend.",
      "Una lista de control de acceso para carpetas compartidas por el protocolo SMB.",
      "Un certificado digital de autenticación para routers de fibra óptica.",
      "Un script de base de datos que borra registros duplicados."
    ],
    correctAnswerIndex: 0,
    explanation: "AWS WAF inspecciona encabezados HTTP, query strings, cookies y payloads en la capa 7 (aplicación), aplicando reglas gestionadas de AWS (Managed Rules) o reglas personalizadas para frustrar vulnerabilidades OWASP Top 10.",
    topic: "Seguridad Perimetral y WAF",
    difficulty: "intermedio"
  },
  {
    id: "aws-27",
    collectionId: "aws",
    question: "¿Cómo optimiza 'Amazon ElastiCache for Redis' el rendimiento de una arquitectura web tradicional frente a consultar directamente la base de datos relacional?",
    options: [
      "Proporciona un almacén de datos en memoria ultrarrápido con latencias de sub-milisegundo que cachea resultados de consultas frecuentes o estados de sesión, reduciendo la carga de lectura y el I/O en la base de datos primaria.",
      "Comprime los datos en el disco duro magnético de los servidores de backend.",
      "Convierte consultas SQL complejas en archivos XML planos.",
      "Genera réplicas de bases de datos en cintas de backup cada 5 minutos."
    ],
    correctAnswerIndex: 0,
    explanation: "Consultar memoria RAM es miles de veces más veloz que consultar discos SSD/NVMe. Estrategias como Cache-Aside o Write-Through en ElastiCache absorben picos masivos de tráfico manteniendo la latencia bajo 1 ms.",
    topic: "Caché y Rendimiento",
    difficulty: "básico"
  },
  {
    id: "aws-28",
    collectionId: "aws",
    question: "En el almacenamiento compartido 'Amazon EFS' (Elastic File System), ¿qué protocolo de red estándar se implementa para permitir que miles de instancias EC2 y contenedores monten el sistema de archivos de forma concurrente?",
    options: [
      "NFSv4 (Network File System versiones 4.0 y 4.1).",
      "SMB / CIFS.",
      "iSCSI sobre canal de fibra.",
      "FTP anónimo sobre TLS."
    ],
    correctAnswerIndex: 0,
    explanation: "Amazon EFS implementa NFSv4 con escalabilidad automática en el cloud (crece y se encoge elásticamente según se agregan o eliminan archivos), ofreciendo almacenamiento POSIX compartido en múltiples Zonas de Disponibilidad.",
    topic: "Almacenamiento de Archivos (EFS)",
    difficulty: "intermedio"
  },
  {
    id: "aws-29",
    collectionId: "aws",
    question: "¿Qué beneficio económico y de flexibilidad ofrece el modelo de compra 'AWS Savings Plans' en comparación con las instancias reservadas estándar tradicionales (Standard Reserved Instances)?",
    options: [
      "Compute Savings Plans ofrece descuentos de hasta el 66% a cambio de un compromiso de gasto por hora ($/hora) durante 1 o 3 años, aplicando automáticamente el descuento sin importar la familia de instancias EC2, tamaño, sistema operativo, región o si se utiliza AWS Fargate o Lambda.",
      "Permite utilizar servidores de forma gratuita durante los fines de semana.",
      "Garantiza el reembolso del 100% del dinero no utilizado en cualquier momento sin penalización.",
      "Exige que todos los servidores se apaguen durante 8 horas al día."
    ],
    correctAnswerIndex: 0,
    explanation: "Las Reserved Instances históricas ataban a un tipo de instancia o región rígida. Compute Savings Plans otorga máxima flexibilidad aplicando el descuento a cualquier uso de cómputo (EC2, Fargate, Lambda) dentro del compromiso por hora.",
    topic: "FinOps y Optimización de Costos",
    difficulty: "intermedio"
  },
  {
    id: "aws-30",
    collectionId: "aws",
    question: "¿Cuál es el propósito de 'AWS Secrets Manager' frente a 'AWS Systems Manager Parameter Store' (Standard)?",
    options: [
      "Secrets Manager incluye rotación automática de credenciales integrada con bases de datos RDS/Redshift/DocumentDB mediante funciones Lambda sin tiempo de inactividad, además de generación de secretos aleatorios fuertes y mayor soporte de auditoría, con un coste por secreto almacenado.",
      "Secrets Manager solo almacena contraseñas en texto plano sin cifrado KMS.",
      "Parameter Store no permite almacenar cadenas seguras (SecureString).",
      "Secrets Manager solo funciona en la región de Virginia del Norte (us-east-1)."
    ],
    correctAnswerIndex: 0,
    explanation: "Parameter Store es un almacén de configuración jerárquico excelente y gratuito para parámetros comunes. Secrets Manager se especializa en credenciales rotativas automáticas de base de datos con integración nativa en IAM y rotación periódica programada.",
    topic: "Seguridad y Gestión de Secretos",
    difficulty: "intermedio"
  }
];
