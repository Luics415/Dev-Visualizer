import type { QuizQuestion } from "@/data/quizTypes";

export const ciCdQuestions: QuizQuestion[] = [
  {
    id: "cicd-01",
    collectionId: "ci-cd",
    question: "¿Cuál es la distinción formal entre Entrega Continua (Continuous Delivery) y Despliegue Continuo (Continuous Deployment)?",
    options: [
      "En Continuous Delivery cada cambio que pasa las pruebas automáticas genera un artefacto validado y listo para producción, pero el paso a producción requiere una decisión o aprobación humana; en Continuous Deployment cada cambio exitoso se despliega a producción automáticamente sin intervención humana.",
      "Continuous Delivery solo aplica a aplicaciones móviles, mientras que Continuous Deployment aplica a servidores web.",
      "Continuous Delivery requiere servidores on-premise, mientras que Continuous Deployment utiliza exclusivamente Docker.",
      "Son sinónimos idénticos y no existe diferencia técnica entre ambos conceptos."
    ],
    correctAnswerIndex: 0,
    explanation: "Continuous Delivery asegura que el software esté en un estado siempre liberable ('deployable at any time'). Continuous Deployment da el paso final automatizando la liberación a los usuarios finales tras pasar todos los filtros de calidad de la pipeline.",
    topic: "Fundamentos de CI/CD",
    difficulty: "básico"
  },
  {
    id: "cicd-02",
    collectionId: "ci-cd",
    question: "En GitHub Actions, ¿por qué se recomienda utilizar OpenID Connect (OIDC) en lugar de almacenar claves de acceso estáticas (`AWS_ACCESS_KEY_ID` / `SECRET_ACCESS_KEY`) en los GitHub Secrets?",
    options: [
      "OIDC permite al runner de GitHub intercambiar un token JWT firmado de corta duración por credenciales temporales de IAM mediante `sts:AssumeRoleWithWebIdentity`, eliminando credenciales estáticas de larga duración que puedan filtrarse y facilitando rotación automática.",
      "OIDC duplica la velocidad de descarga de paquetes en el gestor npm.",
      "Las claves estáticas de AWS están prohibidas en GitHub desde el año 2020.",
      "OIDC permite ejecutar acciones de GitHub en servidores Windows 98."
    ],
    correctAnswerIndex: 0,
    explanation: "Las credenciales estáticas representan uno de los mayores vectores de ataque en CI/CD si se ven comprometidas. Con OIDC no hay secretos guardados: el proveedor cloud confía criptográficamente en el emisor de tokens de GitHub para la rama y repositorio exacto.",
    topic: "Seguridad y Autenticación en CI/CD",
    difficulty: "intermedio"
  },
  {
    id: "cicd-03",
    collectionId: "ci-cd",
    question: "En un pipeline de GitHub Actions, ¿qué efecto tiene configurar el bloque `concurrency` con `cancel-in-progress: true`?",
    options: [
      "Si se envía un nuevo commit a la misma rama o Pull Request mientras una ejecución previa del workflow aún está corriendo, cancela inmediatamente la ejecución anterior para ahorrar minutos de cómputo y evitar condiciones de carrera.",
      "Detiene la ejecución del pipeline si la cobertura de código baja del 80%.",
      "Permite ejecutar 100 jobs en paralelo en un único runner compartido.",
      "Cancela el despliegue a producción si la base de datos detecta bloqueos de lectura."
    ],
    correctAnswerIndex: 0,
    explanation: "`concurrency: group: ${{ github.workflow }}-${{ github.ref }}, cancel-in-progress: true` es una buena práctica indispensable para no gastar minutos de runners en commits obsoletos cuando el desarrollador hace push repetidos.",
    topic: "GitHub Actions y Optimización",
    difficulty: "intermedio"
  },
  {
    id: "cicd-04",
    collectionId: "ci-cd",
    question: "¿Qué es un Software Bill of Materials (SBOM) en la seguridad de la cadena de suministro de software (Software Supply Chain)?",
    options: [
      "Un inventario estructurado, estandarizado (formato SPDX o CycloneDX) y exhaustivo de todos los componentes, bibliotecas de código abierto, dependencias transitivas y metadatos de licencias que componen una aplicación.",
      "Una factura comercial detallada de los costes mensuales de infraestructura cloud.",
      "Un archivo de configuración de NGINX que lista los dominios permitidos.",
      "Un diagrama UML que representa las clases de dominio del proyecto."
    ],
    correctAnswerIndex: 0,
    explanation: "El SBOM es análogo a la lista de ingredientes en un producto alimenticio: permite a los equipos de seguridad consultar de forma instantánea si una vulnerabilidad crítica recién descubierta (como Log4Shell) afecta a alguno de los artefactos desplegados.",
    topic: "Supply Chain Security y SBOM",
    difficulty: "intermedio"
  },
  {
    id: "cicd-05",
    collectionId: "ci-cd",
    question: "En la estrategia de despliegue 'Blue/Green Deployment', ¿cómo se minimiza el tiempo de inactividad (downtime) y el riesgo de fallos durante un release?",
    options: [
      "Se mantienen dos entornos de producción idénticos: uno activo ('Blue') recibiendo el 100% del tráfico y otro inactivo ('Green') donde se despliega y valida la nueva versión; una vez verificada, el balanceador de carga o router conmuta instantáneamente el tráfico a 'Green'.",
      "Se apaga el servidor primario durante 1 hora para limpiar los logs.",
      "Se despliega el nuevo código únicamente los fines de semana a medianoche.",
      "Se ejecuta la aplicación en una máquina virtual de desarrollo antes de compilar."
    ],
    correctAnswerIndex: 0,
    explanation: "Blue/Green permite despliegues con cero downtime. Si el nuevo release presenta problemas en el entorno 'Green', el rollback es prácticamente instantáneo: basta con revertir el router o balanceador al entorno 'Blue'.",
    topic: "Estrategias de Despliegue",
    difficulty: "básico"
  },
  {
    id: "cicd-06",
    collectionId: "ci-cd",
    question: "¿Cuál es el principio operativo de un despliegue 'Canary' (Canary Release)?",
    options: [
      "Desplegar la nueva versión inicialmente a un subconjunto minúsculo de usuarios o servidores (e.g. 5%), monitorear métricas clave de salud y errores en tiempo real, e incrementar gradualmente el porcentaje de tráfico hasta el 100% si no se detectan anomalías.",
      "Enviar correos electrónicos de prueba a los administradores del sistema.",
      "Desplegar únicamente código que haya sido revisado por tres ingenieros de seguridad.",
      "Ejecutar pruebas de carga sintéticas en un cluster local antes de hacer commit."
    ],
    correctAnswerIndex: 0,
    explanation: "Inspirado en los canarios utilizados en las minas de carbón para detectar gases tóxicos, el Canary Release expone la nueva versión a tráfico real pero acotado, minimizando el 'radio de explosión' (blast radius) de cualquier error imprevisto.",
    topic: "Estrategias de Despliegue",
    difficulty: "básico"
  },
  {
    id: "cicd-07",
    collectionId: "ci-cd",
    question: "¿Qué postula la metodología 'GitOps' para la entrega continua y operación de infraestructura en clusters como Kubernetes?",
    options: [
      "Git actúa como la 'única fuente de verdad' (Single Source of Truth) para la infraestructura y aplicaciones deseadas; agentes declarativos dentro del cluster (como ArgoCD o Flux) reconcilian continuamente el estado real con el estado declarado en Git, corrigiendo cualquier desviación (drift).",
      "Que los administradores de sistemas deben realizar cambios manuales directamente mediante comandos `kubectl edit`.",
      "Que el repositorio Git debe ser alojado en un servidor propio sin copias de seguridad.",
      "Que los pipelines de CI deben compilar el código fuente sin utilizar contenedores Docker."
    ],
    correctAnswerIndex: 0,
    explanation: "GitOps extiende el control de versiones a las operaciones: toda modificación pasa por un Pull Request auditado en Git, y el motor de sincronización se encarga de aplicar los manifiestos al cluster de forma determinista y sin credenciales salientes hacia el cluster.",
    topic: "GitOps y Entrega Declarativa",
    difficulty: "intermedio"
  },
  {
    id: "cicd-08",
    collectionId: "ci-cd",
    question: "¿Para qué se utiliza la herramienta 'Cosign' del proyecto Sigstore en los pipelines modernos de entrega de contenedores?",
    options: [
      "Para firmar criptográficamente imágenes de contenedores OCI y artefactos de software, asociando firmas y atestaciones de procedencia (SLSA provenance) directamente en el registro de contenedores.",
      "Para comprimir archivos `.tar.gz` utilizando múltiples hilos de procesador.",
      "Para balancear el tráfico HTTP entre diferentes zonas de disponibilidad.",
      "Para formatear código fuente en lenguajes derivados de C."
    ],
    correctAnswerIndex: 0,
    explanation: "Cosign permite firmar imágenes sin necesidad de gestionar complejas infraestructuras PKI propias. En el cluster (e.g. con Kyverno u OPA Gatekeeper) se verifica la firma antes de permitir que cualquier pod sea instanciado en producción.",
    topic: "Seguridad y Firmado de Artefactos",
    difficulty: "avanzado"
  },
  {
    id: "cicd-09",
    collectionId: "ci-cd",
    question: "¿Cuál es la diferencia metodológica entre las pruebas de seguridad SAST (Static Application Security Testing) y DAST (Dynamic Application Security Testing) en un pipeline de CI/CD?",
    options: [
      "SAST analiza el código fuente, dependencias o bytecode en reposo de forma estática (\"caja blanca\") sin ejecutar la aplicación; DAST prueba la aplicación en funcionamiento (\"caja negra\") desde el exterior simulando ataques reales a endpoints activos.",
      "SAST solo detecta contraseñas débiles, mientras que DAST solo valida certificados TLS.",
      "DAST se ejecuta antes de la compilación, mientras que SAST se ejecuta en los clientes móviles.",
      "Ambas pruebas son idénticas y se diferencian únicamente por el fabricante comercial del software."
    ],
    correctAnswerIndex: 0,
    explanation: "SAST (ej. SonarQube, Semgrep) detecta errores de sintaxis, variables sin sanear y patrones inseguros en el código. DAST (ej. OWASP ZAP) ataca la aplicación en runtime en un entorno efímero para descubrir vulnerabilidades de autenticación, cabeceras o inyecciones reales.",
    topic: "Seguridad en CI/CD (SAST vs DAST)",
    difficulty: "intermedio"
  },
  {
    id: "cicd-10",
    collectionId: "ci-cd",
    question: "En Docker BuildKit integrado con CI/CD, ¿cómo optimiza el parámetro `--cache-to type=gha` la velocidad de construcción de imágenes en GitHub Actions?",
    options: [
      "Exporta y persiste las capas de caché de la compilación de Docker directamente en el servicio de caché nativo de GitHub Actions, permitiendo que workflows posteriores reutilicen capas inalteradas sin reconstruirlas desde cero.",
      "Sube la imagen completa a Docker Hub en formato comprimido 7z.",
      "Elimina todos los pasos `RUN` del Dockerfile para acelerar el empaquetado.",
      "Compila los contenedores utilizando procesadores cuánticos de GitHub."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin caché compartida, los runners efímeros de GitHub deben reconstruir cada capa del Dockerfile en cada ejecución. El backend `type=gha` almacena capas de BuildKit en el cache storage de GitHub, reduciendo builds de 10 minutos a 30 segundos.",
    topic: "Optimización y BuildKit",
    difficulty: "intermedio"
  },
  {
    id: "cicd-11",
    collectionId: "ci-cd",
    question: "¿Qué es el framework SLSA (Supply-chain Levels for Software Artifacts) promovido por OpenSSF y Google?",
    options: [
      "Un marco de seguridad progresivo basado en niveles (SLSA 1 a 4) que establece directrices para garantizar la integridad, procedencia no manipulable y reproducibilidad de los artefactos de software a lo largo de toda su cadena de compilación.",
      "Un protocolo de transferencia de archivos por satélite para bases de datos distribuidas.",
      "Una licencia de software libre más restrictiva que la GPLv3.",
      "Un estándar de codificación de estilos para hojas de cálculo de Excel."
    ],
    correctAnswerIndex: 0,
    explanation: "SLSA previene ataques a la cadena de suministro (como inserción de troyanos en pipelines o repositorios comprometidos), certificando mediante firmas criptográficas que el binario proviene exactamente del commit auditado en el servicio de build oficial.",
    topic: "Seguridad y SLSA Framework",
    difficulty: "avanzado"
  },
  {
    id: "cicd-12",
    collectionId: "ci-cd",
    question: "En las pruebas de integración continua, ¿cuál es la ventaja de utilizar la biblioteca 'Testcontainers' frente a mocks tradicionales o bases de datos compartidas?",
    options: [
      "Permite levantar instancias reales de bases de datos (PostgreSQL, MySQL), brokers de mensajería (Kafka, RabbitMQ) o motores de caché dentro de contenedores Docker efímeros gestionados programáticamente por el propio código de prueba.",
      "Convierte las pruebas de integración en pruebas unitarias puras sin dependencias de red.",
      "Genera interfaces de usuario automáticas para que los testers prueben manualmente.",
      "Elimina la necesidad de instalar Docker en el entorno de desarrollo."
    ],
    correctAnswerIndex: 0,
    explanation: "Los mocks pueden ocultar errores de sintaxis SQL o discrepancias de dialecto. Las bases de datos compartidas introducen estados residuales entre tests. Testcontainers garantiza entornos 100% aislados, herméticos y reales en cada ejecución de la suite de pruebas.",
    topic: "Testing Hermético en CI",
    difficulty: "intermedio"
  },
  {
    id: "cicd-13",
    collectionId: "ci-cd",
    question: "¿Qué técnica de pruebas automatizadas en microservicios implementa 'Consumer-Driven Contract Testing' (e.g. con Pact)?",
    options: [
      "Los consumidores definen contratos explícitos con las expectativas de peticiones y respuestas HTTP/mensajes que necesitan; estos contratos se verifican de forma aislada en el pipeline del proveedor, evitando pruebas end-to-end lentas y frágiles en entornos compartidos.",
      "Los clientes finales firman un contrato legal en formato PDF antes de usar la API.",
      "La pasarela de pago retiene fondos hasta que todas las pruebas pasen.",
      "Un inspector de red intercepta y altera los paquetes en producción para buscar errores."
    ],
    correctAnswerIndex: 0,
    explanation: "El testeo por contratos permite a los equipos desplegar servicios de manera independiente con total seguridad de compatibilidad sin necesidad de levantar los 50 microservicios de la empresa en un entorno de pruebas gigante e inestable.",
    topic: "Testing de Contratos y Microservicios",
    difficulty: "avanzado"
  },
  {
    id: "cicd-14",
    collectionId: "ci-cd",
    question: "En GitHub Actions, ¿cuál es la diferencia entre un 'Step' y un 'Job' dentro de un workflow?",
    options: [
      "Un Job es un conjunto de Steps que se ejecutan secuencialmente en la misma instancia de runner (compartiendo sistema de archivos); múltiples Jobs dentro de un workflow se ejecutan en paralelo por defecto en runners distintos a menos que se defina la directiva `needs`.",
      "Los Steps son para servidores Linux y los Jobs son exclusivos de macOS.",
      "Un Step solo puede ejecutar scripts en Python, mientras que un Job ejecuta comandos de Bash.",
      "Un Workflow solo puede contener un único Job con un máximo de tres Steps."
    ],
    correctAnswerIndex: 0,
    explanation: "Cada Job corre en una máquina virtual o contenedor aislado. Para compartir archivos entre jobs distintos se deben usar artefactos (`upload-artifact` / `download-artifact`). Los steps dentro de un mismo job comparten el workspace de disco.",
    topic: "GitHub Actions Conceptos Core",
    difficulty: "básico"
  },
  {
    id: "cicd-15",
    collectionId: "ci-cd",
    question: "¿Qué beneficio aporta el uso de una 'Matriz de Estrategia' (`strategy.matrix`) en pipelines de GitHub Actions?",
    options: [
      "Permite ejecutar simultáneamente múltiples variantes de un Job parametrizado a través de diferentes combinaciones de versiones de lenguaje (e.g. Node 18, 20, 22) y sistemas operativos (Ubuntu, macOS, Windows) de forma declarativa.",
      "Calcula el determinante algebraico de la matriz de cobertura de código.",
      "Multiplica las variables de entorno por constantes matriciales de rotación 3D.",
      "Sustituye el uso de archivos YAML por código en C++."
    ],
    correctAnswerIndex: 0,
    explanation: "La directiva `matrix` genera automáticamente abanicos de jobs paralelos (e.g. 3 SOs x 3 versiones de Node = 9 ejecuciones paralelas), asegurando compatibilidad multiplataforma en librerías y aplicaciones de código abierto.",
    topic: "GitHub Actions Matriz de Pruebas",
    difficulty: "básico"
  },
  {
    id: "cicd-16",
    collectionId: "ci-cd",
    question: "En la gestión de versiones semánticas (SemVer), ¿cuál es la regla de incremento para `MAJOR.MINOR.PATCH` según la especificación formal?",
    options: [
      "`MAJOR` se incrementa ante cambios incompatibles en la API pública; `MINOR` ante nuevas funcionalidades retrocompatibles; `PATCH` ante correcciones de errores retrocompatibles.",
      "`MAJOR` se cambia cada año; `MINOR` cada mes; `PATCH` cada semana.",
      "`PATCH` se incrementa cuando se agregan nuevas tablas a la base de datos.",
      "`MAJOR` solo puede incrementarse si el software se reescribe en un lenguaje diferente."
    ],
    correctAnswerIndex: 0,
    explanation: "SemVer 2.0.0 provee claridad matemática a las dependencias. Un cambio de `1.4.2` a `2.0.0` avisa inmediatamente a los consumidores que existen 'breaking changes' que requieren revisión y posibles adaptaciones de código.",
    topic: "Versionado Semántico (SemVer)",
    difficulty: "básico"
  },
  {
    id: "cicd-17",
    collectionId: "ci-cd",
    question: "¿Qué función cumple una herramienta como 'Semantic Release' o 'Changesets' en la automatización de entregas?",
    options: [
      "Analiza automáticamente los mensajes de commit según la convención 'Conventional Commits' (e.g. `feat:`, `fix:`, `feat!:`) para determinar el siguiente incremento semántico de versión, generar el changelog y publicar el release sin intervención manual.",
      "Genera descripciones poéticas para las notas de versión utilizando LLMs.",
      "Elimina los commits con faltas de ortografía del historial de Git.",
      "Traduce el código fuente a lenguaje ensamblador antes de cada commit."
    ],
    correctAnswerIndex: 0,
    explanation: "Semantic Release elimina por completo el factor humano en la publicación: `fix:` genera un patch release, `feat:` un minor release y `BREAKING CHANGE:` un major release, publicando paquetes en npm/GitHub de forma totalmente automatizada.",
    topic: "Automatización de Releases",
    difficulty: "intermedio"
  },
  {
    id: "cicd-18",
    collectionId: "ci-cd",
    question: "¿Cuál es el riesgo de seguridad de utilizar la directiva `pull_request_target` en GitHub Actions si se combina con un `checkout` explícito del código del PR no confiable?",
    options: [
      "El workflow se ejecuta en el contexto del repositorio base con acceso completo a los `secrets` de producción y permisos de escritura, permitiendo que un atacante externo modifique scripts en su fork y extraiga los secretos en la ejecución del PR.",
      "Provoca que la cuenta de GitHub se bloquee temporalmente por inactividad.",
      "Desactiva las pruebas unitarias en todas las ramas de desarrollo.",
      "Elimina las ramas remotas de forma irreversible tras cada build."
    ],
    correctAnswerIndex: 0,
    explanation: "`pull_request_target` fue creado para etiquetar o comentar PRs con permisos del repo base. Si se hace checkout del código del atacante (`ref: github.event.pull_request.head.sha`) y se corren comandos de build, el atacante puede leer los secretos de GitHub.",
    topic: "Seguridad y Vulnerabilidades en CI/CD",
    difficulty: "avanzado"
  },
  {
    id: "cicd-19",
    collectionId: "ci-cd",
    question: "En las métricas DORA, ¿cómo se define el 'Lead Time for Changes' (Tiempo de Entrega de Cambios)?",
    options: [
      "El tiempo transcurrido desde que un commit se confirma en la rama principal hasta que ese código se ejecuta con éxito en el entorno de producción.",
      "El tiempo total que tarda un desarrollador en escribir una función en su editor local.",
      "El tiempo promedio entre dos reuniones de retrospectiva de Sprint.",
      "La duración del ciclo de ventas comerciales con nuevos clientes."
    ],
    correctAnswerIndex: 0,
    explanation: "Esta métrica evalúa la agilidad y fluidez de la tubería de entrega: organizaciones de élite logran Lead Times menores a 1 hora, mientras que organizaciones lentas requieren semanas o meses de aprobaciones burocráticas.",
    topic: "Métricas DORA",
    difficulty: "intermedio"
  },
  {
    id: "cicd-20",
    collectionId: "ci-cd",
    question: "¿Qué es el 'Configuration Drift' (Desviación de Configuración) y cómo lo previene un pipeline moderno de infraestructura como código (IaC)?",
    options: [
      "La discrepancia que surge cuando los recursos en la nube son modificados manualmente (vía consola o CLI) sin reflejarse en los archivos de IaC; se previene ejecutando planes periódicos (`terraform plan`) y forzando reconciliación continua o bloqueando accesos manuales directos.",
      "El deterioro físico de los discos duros en los servidores del proveedor cloud.",
      "El aumento progresivo de líneas de código en un archivo de configuración JSON.",
      "El cambio de zona horaria en los logs de los servidores de backend."
    ],
    correctAnswerIndex: 0,
    explanation: "El Configuration Drift genera situaciones peligrosas donde un despliegue automatizado falla o destruye recursos inesperadamente debido a cambios no rastreados. Prácticas como GitOps y control estricto de accesos eliminan la modificación manual.",
    topic: "Infraestructura como Código (IaC)",
    difficulty: "intermedio"
  },
  {
    id: "cicd-21",
    collectionId: "ci-cd",
    question: "¿Qué papel cumple un 'Quality Gate' en una plataforma de análisis estático como SonarQube integrada en un pipeline de CI?",
    options: [
      "Es un conjunto de condiciones umbral predefinidas (e.g. 0 vulnerabilidades bloqueantes, cobertura de código nuevo $> 80\\%$, deuda técnica $< 5\\%$) que deben cumplirse para que el pipeline se considere exitoso y permita la fusión del Pull Request.",
      "Un firewall físico instalado en el router del equipo de desarrollo.",
      "Un examen teórico que los ingenieros deben aprobar cada mes.",
      "Un script que valida que los archivos tengan nombres en minúsculas."
    ],
    correctAnswerIndex: 0,
    explanation: "El Quality Gate actúa como un centinela automatizado e implacable: si el nuevo código degrada los estándares mínimos aceptables de la empresa, el build falla inmediatamente impidiendo que la mala calidad ingrese a la rama principal.",
    topic: "Calidad y Quality Gates",
    difficulty: "básico"
  },
  {
    id: "cicd-22",
    collectionId: "ci-cd",
    question: "¿Cuál es el propósito de realizar 'Dark Launching' al desplegar una nueva funcionalidad en producción?",
    options: [
      "Desplegar la funcionalidad en el entorno de producción real para evaluar su rendimiento técnico, carga de base de datos y estabilidad bajo tráfico real, pero manteniendo la interfaz gráfica completamente oculta para los usuarios comunes.",
      "Apagar las luces del centro de datos para reducir el consumo eléctrico.",
      "Desplegar software exclusivamente durante la noche para evitar que los hackers lo detecten.",
      "Compilar el código utilizando un tema oscuro en el IDE."
    ],
    correctAnswerIndex: 0,
    explanation: "Dark Launching permite a los ingenieros probar la resiliencia del backend (e.g. enviando una copia del tráfico de producción en la sombra a un nuevo algoritmo de recomendación) sin exponer a los usuarios a posibles errores visuales.",
    topic: "Estrategias de Despliegue",
    difficulty: "intermedio"
  },
  {
    id: "cicd-23",
    collectionId: "ci-cd",
    question: "En pipelines de CI/CD, ¿por qué es crítico que las tareas de compilación y prueba sean 'Idempotentes'?",
    options: [
      "Porque ejecutar la misma pipeline múltiples veces sobre el mismo commit exacto debe producir invariablemente el mismo resultado y artefactos idénticos, sin efectos secundarios acumulativos ni fallos esporádicos dependientes del estado previo.",
      "Porque la idempotencia permite que el pipeline se ejecute sin conexión a Internet.",
      "Porque elimina la necesidad de escribir pruebas de integración.",
      "Porque reduce el consumo de memoria RAM de los runners a menos de 512 MB."
    ],
    correctAnswerIndex: 0,
    explanation: "Un pipeline no idempotente es la causa raíz de los 'flaky builds' (pruebas que pasan a veces sí y a veces no por residuos de ejecuciones previas), socavando la confianza del equipo en la automatización.",
    topic: "Principios de CI/CD",
    difficulty: "intermedio"
  },
  {
    id: "cicd-24",
    collectionId: "ci-cd",
    question: "¿Qué optimización introduce el uso de 'Runners Autohospedados' (Self-Hosted Runners) en GitHub Actions en comparación con los runners estándar alojados por GitHub?",
    options: [
      "Permite ejecutar jobs en hardware personalizado (GPUs para ML, arquitecturas ARM dedicadas), en redes privadas locales con acceso a recursos internos sin abrir puertos públicos, y con control total del almacenamiento en disco y pre-caching de imágenes pesadas.",
      "Hace que los repositorios públicos de GitHub sean completamente invisibles en Internet.",
      "Permite ejecutar GitHub Actions sin necesidad de tener una cuenta de GitHub.",
      "Elimina la necesidad de escribir archivos `.github/workflows`."
    ],
    correctAnswerIndex: 0,
    explanation: "Los self-hosted runners ofrecen potencia bruta y conectividad de red interna indispensables para organizaciones con requisitos de cumplimiento o pipelines que necesitan hardware específico (e.g. compilación de videojuegos o entrenamiento de modelos).",
    topic: "Runners e Infraestructura CI",
    difficulty: "intermedio"
  },
  {
    id: "cicd-25",
    collectionId: "ci-cd",
    question: "¿Qué funcionalidad proporciona una 'Dead Letter Queue' (DLQ) en los pipelines de procesamiento asíncrono conducidos por CI/CD?",
    options: [
      "Almacena y aísla aquellos mensajes o eventos que no pudieron ser procesados con éxito tras un número máximo de reintentos configurado, permitiendo inspeccionar el payload defectuoso y diagnosticar el error sin bloquear el flujo principal.",
      "Elimina permanentemente los correos electrónicos no deseados de los clientes.",
      "Cancela los workflows de GitHub Actions que tarden más de 24 horas.",
      "Cifra los mensajes con certificados caducados antes de enviarlos."
    ],
    correctAnswerIndex: 0,
    explanation: "La DLQ previene los 'mensajes venenosos' (poison messages) que provocan bucles infinitos de fallo y reintento en workers, reteniendo los mensajes problemáticos para su posterior análisis forense y re-procesamiento.",
    topic: "Resiliencia y Mensajería",
    difficulty: "intermedio"
  },
  {
    id: "cicd-26",
    collectionId: "ci-cd",
    question: "¿Cómo colaboran las herramientas de 'Software Composition Analysis' (SCA, e.g. Dependabot, Snyk) en un pipeline de integración continua?",
    options: [
      "Escanean automáticamente el árbol de dependencias del proyecto contrastando versiones contra bases de datos de vulnerabilidades conocidas (CVEs) y políticas de licencias, alertando o bloqueando el build si se detectan paquetes vulnerables.",
      "Optimizan los algoritmos de compresión de vídeo en la nube.",
      "Generan interfaces de usuario interactivas para visualizar la memoria heap.",
      "Reescriben el código de JavaScript a TypeScript de forma automática."
    ],
    correctAnswerIndex: 0,
    explanation: "Más del 80% del código de una aplicación moderna proviene de librerías de terceros. Las herramientas de SCA aseguran que ninguna librería con fallos de seguridad documentados (o licencias legales incompatibles) se cuele en producción.",
    topic: "Seguridad y SCA",
    difficulty: "básico"
  },
  {
    id: "cicd-27",
    collectionId: "ci-cd",
    question: "En un despliegue mediante 'Rolling Update' en Kubernetes, ¿qué parámetros regulan la velocidad y seguridad de reemplazo de pods?",
    options: [
      "`maxSurge` (cuántos pods adicionales pueden crearse por encima de la réplica deseada durante el despliegue) y `maxUnavailable` (cuántos pods pueden estar no disponibles simultáneamente durante la actualización).",
      "`cpuLimit` y `memoryRequest` exclusivamente.",
      "`readinessProbe` y `livenessProbe` únicamente en pods impares.",
      "`restartPolicy` configurada como `Never`."
    ],
    correctAnswerIndex: 0,
    explanation: "Ajustar `maxSurge` y `maxUnavailable` en la estrategia `RollingUpdate` permite calibrar el equilibrio entre velocidad de rollout y capacidad de servicio garantizada para los usuarios durante la transición.",
    topic: "Estrategias de Despliegue en Kubernetes",
    difficulty: "avanzado"
  },
  {
    id: "cicd-28",
    collectionId: "ci-cd",
    question: "¿Qué papel desempeñan las 'Readiness Probes' de Kubernetes durante una actualización continua conducida por un pipeline de CD?",
    options: [
      "Indican a Kubernetes cuándo el nuevo pod está verdaderamente listo para recibir tráfico de red real; hasta que la prueba pase con éxito, el pod no se añade a los endpoints del Service, impidiendo enviar tráfico a una aplicación que aún está inicializando cachés o conexiones.",
      "Reinician el contenedor si la temperatura de la CPU sube de 80°C.",
      "Comprueban si el archivo `package.json` tiene sintaxis válida.",
      "Registran la hora exacta en que el desarrollador hizo el merge en Git."
    ],
    correctAnswerIndex: 0,
    explanation: "Una readiness probe defectuosa o ausente puede provocar caídas temporales de servicio: Kubernetes asumiría que el contenedor recién arrancado puede atender peticiones de inmediato, enviando usuarios a un servicio que arrojará errores de conexión.",
    topic: "Kubernetes y CD Health Checks",
    difficulty: "intermedio"
  },
  {
    id: "cicd-29",
    collectionId: "ci-cd",
    question: "¿Cuál es el objetivo primordial del patrón 'Feature Toggles' (Feature Flags) en la entrega continua?",
    options: [
      "Desacoplar el despliegue de código a producción de la activación o exposición de la característica de negocio a los usuarios finales, permitiendo entregas frecuentes y pruebas A/B controladas en producción.",
      "Permitir a los desarrolladores cambiar el color de fondo de la terminal.",
      "Aumentar la memoria física instalada en los servidores de base de datos.",
      "Ocultar el código fuente a los auditores de seguridad de la empresa."
    ],
    correctAnswerIndex: 0,
    explanation: "Con Feature Flags el código puede fusionarse a trunk y desplegarse a producción diariamente sin riesgo, ya que la funcionalidad permanece inerte hasta que se enciende condicionalmente desde un panel de control para ciertos usuarios.",
    topic: "Feature Toggles y Entrega Continua",
    difficulty: "básico"
  },
  {
    id: "cicd-30",
    collectionId: "ci-cd",
    question: "En las métricas DORA, ¿qué mide la métrica 'Change Failure Rate' (Tasa de Fallos en Cambios)?",
    options: [
      "El porcentaje de cambios o despliegues a producción que resultan en una degradación del servicio o fallo crítico que requiere remediación inmediata (como un hotfix, parche o rollback).",
      "El número total de veces que un desarrollador olvida escribir un mensaje de commit descriptivo.",
      "El porcentaje de pruebas unitarias que fallan en local antes de hacer push.",
      "La tasa de abandono de carritos de compra en una tienda online."
    ],
    correctAnswerIndex: 0,
    explanation: "Change Failure Rate evalúa la calidad y estabilidad de la entrega: los equipos de alto rendimiento mantienen esta métrica entre el 0% y el 15%, reflejando que la gran mayoría de despliegues entran limpios y sin incidentes.",
    topic: "Métricas DORA",
    difficulty: "intermedio"
  }
];
