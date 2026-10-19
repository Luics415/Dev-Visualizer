import type { QuizQuestion } from "@/data/quizTypes";

export const deploymentQuestions: QuizQuestion[] = [
  {
    id: "dep-01",
    collectionId: "deployment",
    question: "¿En qué consiste el patrón de migración de bases de datos 'Expand and Contract' (o Parallel Run) para garantizar cero tiempo de inactividad (Zero-Downtime Deployment)?",
    options: [
      "La migración se divide en fases retrocompatibles: 1) Expandir el esquema añadiendo el nuevo campo/tabla sin eliminar el antiguo; 2) Escribir en ambas estructuras simultáneamente mientras se ejecuta un backfill de datos históricos; 3) Cambiar las lecturas a la nueva estructura; 4) Contraer el esquema eliminando el campo antiguo una vez que todo el código viejo ha sido reemplazado.",
      "Detener la base de datos durante la noche para renombrar las columnas y reiniciar los servidores.",
      "Crear una copia de seguridad en un archivo SQL comprimido antes de ejecutar `ALTER TABLE` directamente en producción.",
      "Bloquear todas las transacciones de escritura durante 30 minutos mientras se ejecuta un script de Python."
    ],
    correctAnswerIndex: 0,
    explanation: "Modificar esquemas rompiendo retrocompatibilidad causa fallos inmediatos cuando conviven versiones viejas y nuevas de la aplicación durante un rolling update. 'Expand and Contract' asegura que ambas versiones puedan coexistir pacíficamente.",
    topic: "Migraciones de Base de Datos Zero-Downtime",
    difficulty: "intermedio"
  },
  {
    id: "dep-02",
    collectionId: "deployment",
    question: "En la metodología 'The Twelve-Factor App', ¿cuál es la regla de oro respecto a la gestión de la 'Configuración' (Factor III)?",
    options: [
      "La configuración que varía entre entornos de despliegue (staging, producción, desarrollo) debe almacenarse estrictamente en variables de entorno del sistema operativo, nunca hardcodeada ni empaquetada dentro del código fuente o repositorio.",
      "La configuración debe guardarse en un archivo `.env` commiteado en la rama principal de Git.",
      "Cada servidor debe compilar una versión de binario diferente según el país donde esté ubicado.",
      "Las claves secretas deben solicitarse interactivamente al operador por consola en cada inicio de la app."
    ],
    correctAnswerIndex: 0,
    explanation: "Una prueba de fuego de los Doce Factores es: '¿Podría el código fuente abrirse como código abierto en este instante sin comprometer ninguna credencial ni secreto?' Si la respuesta es sí, la configuración está correctamente desacoplada.",
    topic: "The Twelve-Factor App",
    difficulty: "básico"
  },
  {
    id: "dep-03",
    collectionId: "deployment",
    question: "¿Qué proceso técnico conforma un 'Graceful Shutdown' (Terminación Agraciada) cuando un contenedor o servidor recibe una señal Unix `SIGTERM`?",
    options: [
      "Deja de aceptar nuevas conexiones entrantes en el balanceador, concluye el procesamiento de las peticiones HTTP y transacciones en curso dentro de un periodo de gracia (grace period), cierra limpiamente conexiones a bases de datos y colas, y finalmente termina el proceso con código 0 antes de que el SO envíe un forzoso `SIGKILL`.",
      "Detiene inmediatamente la alimentación eléctrica del servidor físico.",
      "Borra todos los logs de auditoría para liberar espacio en disco.",
      "Guarda un volcado completo de memoria RAM en el directorio `/tmp`."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin graceful shutdown, los clientes experimentan errores HTTP 502/504 abruptos y las bases de datos sufren transacciones huérfanas cada vez que se despliega una nueva versión o el autoscaler retira un contenedor.",
    topic: "Terminación Agraciada y Procesos",
    difficulty: "intermedio"
  },
  {
    id: "dep-04",
    collectionId: "deployment",
    question: "En balanceadores de carga y plataformas de contenedores, ¿qué es el 'Connection Draining' (o Deregistration Delay)?",
    options: [
      "El tiempo que el balanceador de carga espera para permitir que las conexiones HTTP/TCP activas preexistentes finalicen limpiamente después de que una instancia ha sido marcada como no saludable o retirada para despliegue, antes de cortar el flujo de tráfico definitivamente.",
      "Una purga de paquetes TCP corruptos de la tarjeta de red física.",
      "El vaciado forzoso del caché de DNS en los clientes web.",
      "La desfragmentación de los sectores defectuosos de un disco duro."
    ],
    correctAnswerIndex: 0,
    explanation: "Connection Draining evita romper conexiones 'en vuelo' (in-flight requests). El balanceador redirige el tráfico nuevo a otros nodos sanos pero otorga un plazo (ej. 30 a 60 segundos) para que las operaciones en progreso terminen.",
    topic: "Balanceo de Carga y Redes",
    difficulty: "intermedio"
  },
  {
    id: "dep-05",
    collectionId: "deployment",
    question: "¿Qué técnica de prueba en producción define el concepto de 'Traffic Mirroring' (o Shadow Traffic)?",
    options: [
      "Duplicar y reenviar de forma asíncrona una copia exacta del tráfico de red real de los usuarios hacia una versión experimental o nuevo servicio backend en segundo plano, comparando su rendimiento y respuestas sin que los resultados afecten al usuario final ni se envíen de vuelta al cliente.",
      "Mostrar una pantalla de espejo cuando el usuario activa la cámara web.",
      "Clonar un disco duro magnético en dos particiones idénticas.",
      "Dividir la velocidad de conexión a Internet a la mitad entre dos oficinas."
    ],
    correctAnswerIndex: 0,
    explanation: "Traffic Mirroring permite probar la carga real, casos extremos de datos y estabilidad de un nuevo servicio en condiciones de producción 100% auténticas con riesgo cero para los clientes reales.",
    topic: "Estrategias de Tráfico y Enrutamiento",
    difficulty: "intermedio"
  },
  {
    id: "dep-06",
    collectionId: "deployment",
    question: "¿Qué postula el paradigma de 'Infraestructura Inmutable' (Immutable Infrastructure) frente a la infraestructura mutable tradicional?",
    options: [
      "Los servidores o contenedores nunca se modifican, parchean o actualizan in-situ; ante cualquier cambio de código, parche de seguridad o configuración, se construye y despliega una nueva imagen o instancia completa destruyendo y reemplazando las anteriores.",
      "Los servidores físicos se compran con contratos que prohíben su reemplazo durante 10 años.",
      "Los archivos de configuración se graban en discos ópticos CD-ROM no regrabables.",
      "El código fuente se compila a un único ejecutable que no admite argumentos de línea de comandos."
    ],
    correctAnswerIndex: 0,
    explanation: "La infraestructura mutable acumula 'nieve' y variabilidad ('snowflakes') con el tiempo. La infraestructura inmutable garantiza que todos los entornos sean 100% reproducibles, testeables y consistentes.",
    topic: "Infraestructura Inmutable",
    difficulty: "básico"
  },
  {
    id: "dep-07",
    collectionId: "deployment",
    question: "En la ingeniería de confiabilidad de sitios (SRE), ¿cuál es la relación jerárquica precisa entre SLI, SLO y SLA?",
    options: [
      "SLI (Indicador de Nivel de Servicio) es una métrica cuantificable en tiempo real; SLO (Objetivo de Nivel de Servicio) es la meta interna acordada sobre dicho SLI (e.g. 99.9% de peticiones con latencia < 200ms); SLA (Acuerdo de Nivel de Servicio) es el contrato legal y financiero externo con clientes con penalizaciones si se viola.",
      "SLA es la métrica de CPU; SLO es el sistema operativo del servidor; SLI es el software de base de datos.",
      "SLI solo aplica a hardware; SLO a software; SLA a la red de fibra óptica.",
      "Son tres nombres distintos para la misma fórmula matemática de uptime."
    ],
    correctAnswerIndex: 0,
    explanation: "El SLI mide lo que ocurre (realidad: ratio de éxito). El SLO establece la meta interna del equipo (ej. 99.95%). El SLA define el compromiso formal con consecuencias económicas (ej. reembolsos si cae del 99.9%).",
    topic: "SRE y Observabilidad",
    difficulty: "intermedio"
  },
  {
    id: "dep-08",
    collectionId: "deployment",
    question: "¿Qué es un 'Error Budget' (Presupuesto de Error) en la metodología SRE y cómo regula el ritmo de despliegues de un equipo de desarrollo?",
    options: [
      "Es el margen de indisponibilidad o fallos tolerables permitido por el SLO (ej. un SLO de 99.9% otorga un Error Budget de 0.1%); si el presupuesto se agota debido a incidentes frecuentes, se congelan los despliegues de nuevas características para priorizar estabilidad y deuda técnica.",
      "Una partida monetaria para pagar multas a los clientes insatisfechos.",
      "El número máximo de excepciones no controladas permitidas en el archivo `package.json`.",
      "La cantidad de memoria RAM que se puede perder por fugas de memoria antes de reiniciar el servidor."
    ],
    correctAnswerIndex: 0,
    explanation: "El Error Budget equilibra de forma objetiva la tensión entre innovación rápida (product owners) y estabilidad (operaciones): mientras haya presupuesto se despliega a máxima velocidad; si se gasta, el foco absoluto pasa a la resiliencia.",
    topic: "SRE y Error Budgets",
    difficulty: "intermedio"
  },
  {
    id: "dep-09",
    collectionId: "deployment",
    question: "En la observabilidad moderna distribuida (OpenTelemetry), ¿cuáles son los 'Tres Pilares' de la telemetría y qué rol cumple el `trace_id`?",
    options: [
      "Métricas (agregaciones numéricas temporales), Logs (registros de eventos con timestamp) y Trazas (recorrido causal de una petición a través de múltiples microservicios); el `trace_id` correlaciona unívocamente todos los spans y logs generados por una misma petición en todo el sistema distribuido.",
      "CPU, Memoria RAM y Ancho de Banda de red; el `trace_id` es la dirección MAC de la tarjeta de red.",
      "Desarrollo, Staging y Producción; el `trace_id` es el hash del commit de Git.",
      "Frontend, Backend y Base de datos; el `trace_id` es la clave primaria en PostgreSQL."
    ],
    correctAnswerIndex: 0,
    explanation: "En arquitecturas distribuidas con decenas de microservicios, el `trace_id` inyectado en las cabeceras HTTP (W3C Trace Context) permite seguir la solicitud de extremo a extremo, aislando con precisión qué microservicio causó un cuello de botella o error.",
    topic: "Observabilidad y OpenTelemetry",
    difficulty: "intermedio"
  },
  {
    id: "dep-10",
    collectionId: "deployment",
    question: "¿Cómo opera un 'Circuit Breaker' (Disyuntor) en la capa de comunicación de servicios distribuidos ante fallos reiterados de un downstream?",
    options: [
      "Monitorea la tasa de fallos: si supera un umbral pasa de estado 'Cerrado' (normal) a 'Abierto' (bloquea de inmediato las llamadas fallando rápido sin saturar la red); tras un periodo de enfriamiento pasa a 'Semi-Abierto' para permitir unas pocas peticiones de prueba antes de recuperarse o abrirse nuevamente.",
      "Apaga el servidor físicamente si se detecta un cortocircuito eléctrico.",
      "Cifra los mensajes con una clave desechable de un solo uso.",
      "Reinicia el proceso de Node.js cada vez que una llamada HTTP devuelve código 404."
    ],
    correctAnswerIndex: 0,
    explanation: "El Circuit Breaker evita fallos en cascada (cascading failures): si un servicio dependiente está caído, seguir enviándole miles de peticiones solo satura los hilos y conexiones del llamador y empeora la recuperación del servicio degradado.",
    topic: "Resiliencia y Circuit Breaker",
    difficulty: "intermedio"
  },
  {
    id: "dep-11",
    collectionId: "deployment",
    question: "En la gestión de secretos en tiempo de ejecución, ¿cuál es la ventaja de utilizar un operador como 'External Secrets Operator' o Vault Agent en Kubernetes frente a inyectar secretos base64 en manifiestos Git?",
    options: [
      "Sincroniza y rota secretos automáticamente desde gestores seguros externos (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault) directamente a los pods en memoria, evitando almacenar datos sensibles (incluso en base64) en el repositorio de control de versiones.",
      "Comprime los secretos para que ocupen menos de 16 bytes de memoria.",
      "Permite a cualquier usuario anónimo leer las contraseñas de la base de datos.",
      "Elimina la necesidad de utilizar HTTPS en las conexiones web."
    ],
    correctAnswerIndex: 0,
    explanation: "Base64 es mera codificación, no cifrado. Commitear secretos base64 en Git es una vulnerabilidad grave. External Secrets Operator permite que los manifiestos solo contengan referencias declarativas al secreto que reside en el vault.",
    topic: "Seguridad y Gestión de Secretos",
    difficulty: "intermedio"
  },
  {
    id: "dep-12",
    collectionId: "deployment",
    question: "¿Qué es un 'Chaos Engineering' (Ingeniería del Caos) y cuál es su metodología según principios promovidos por Chaos Monkey de Netflix?",
    options: [
      "La disciplina de experimentar intencionalmente sobre un sistema en producción inyectando fallos controlados (e.g. caída aleatoria de instancias, particiones de red, latencia artificial en bases de datos) para verificar que los mecanismos de auto-sanación y redundancia respondan como se espera.",
      "Modificar código directamente en servidores de producción sin pruebas previas.",
      "Despedir desarrolladores de forma aleatoria para evaluar la autonomía del equipo.",
      "Permitir que los usuarios manipulen los precios de la tienda online para probar la base de datos."
    ],
    correctAnswerIndex: 0,
    explanation: "Chaos Engineering descubre debilidades sistémicas antes de que se manifiesten en un incidente real catastrófico, verificando de forma empírica la resiliencia de la arquitectura bajo turbulencias operativas.",
    topic: "Chaos Engineering y Resiliencia",
    difficulty: "intermedio"
  },
  {
    id: "dep-13",
    collectionId: "deployment",
    question: "En Kubernetes, ¿cuál es la diferencia crucial de comportamiento entre una 'Liveness Probe' y una 'Readiness Probe'?",
    options: [
      "Si la Liveness Probe falla, Kubernetes destruye y reinicia el contenedor (asume que el proceso está congelado en deadlock); si la Readiness Probe falla, Kubernetes NO reinicia el pod, sino que únicamente remueve su IP de los balanceadores y Services para no enviarle tráfico hasta que vuelva a estar listo.",
      "La Liveness Probe solo se ejecuta una única vez al arrancar, mientras que la Readiness Probe se ejecuta cada 100 milisegundos.",
      "La Readiness Probe solo admite comandos de terminal y no soporta peticiones HTTP.",
      "Son sinónimos idénticos configurados bajo la directiva `spec.probes`."
    ],
    correctAnswerIndex: 0,
    explanation: "Confundir estas sondas puede causar catástrofes: si una app sobrecargada responde lento a su Liveness Probe y Kubernetes la reinicia compulsivamente, la sobrecarga se trasladará a los pods restantes provocando la caída en cascada de todo el cluster.",
    topic: "Kubernetes Probes y Ciclo de Vida",
    difficulty: "avanzado"
  },
  {
    id: "dep-14",
    collectionId: "deployment",
    question: "En una arquitectura con Service Mesh (como Istio o Linkerd), ¿qué función realiza el patrón 'Sidecar Proxy' (generalmente basado en Envoy)?",
    options: [
      "Se ejecuta como un contenedor auxiliar junto a cada contenedor de aplicación compartiendo su espacio de red local (localhost), interceptando todo el tráfico entrante y saliente para proveer mTLS automático, telemetría, balanceo inteligente y control de tráfico sin modificar el código de la app.",
      "Guarda una copia de seguridad del disco duro cada noche.",
      "Compila las plantillas HTML en el servidor web.",
      "Reemplaza el sistema operativo de los nodos del cluster."
    ],
    correctAnswerIndex: 0,
    explanation: "El sidecar proxy desacopla las preocupaciones de red y seguridad (cifrado mTLS mutuo, circuit breaking, inyección de trace_id) del código de la aplicación, unificando la gobernanza en un único plano de control (Control Plane).",
    topic: "Service Mesh y Envoy",
    difficulty: "avanzado"
  },
  {
    id: "dep-15",
    collectionId: "deployment",
    question: "¿Qué optimización proporciona la técnica de 'Pre-warming' o calentamiento previo de balanceadores de carga y cachés antes de un evento comercial masivo (e.g. Black Friday)?",
    options: [
      "Configurar los balanceadores y pre-cargar cachés con tráfico sintético o solicitudes de dimensionamiento al proveedor cloud para evitar que la rampa súbita de millones de peticiones por segundo sature las interfaces de red antes de que el autoscaling logre reaccionar.",
      "Aumentar la temperatura de los servidores físicos para mejorar la conductividad eléctrica.",
      "Reiniciar los servidores web cada 10 minutos para vaciar el heap de memoria.",
      "Desactivar las reglas de seguridad del firewall para reducir la latencia de red."
    ],
    correctAnswerIndex: 0,
    explanation: "Los balanceadores de carga elásticos (como AWS ALB) escalan añadiendo nuevas IPs de forma gradual. Un pico instantáneo de 100x en segundos puede colapsar las interfaces existentes antes de que el escalado DNS se propague si no se realiza pre-warming.",
    topic: "Escalabilidad y Capacidad",
    difficulty: "intermedio"
  },
  {
    id: "dep-16",
    collectionId: "deployment",
    question: "En la estrategia de logs en producción, ¿por qué se desaconseja el uso de logs en texto plano desestructurado en favor de 'Structured Logging' (JSON estructurado)?",
    options: [
      "Porque los logs estructurados formatean cada entrada como un objeto JSON con campos explícitos e indexables (`timestamp`, `level`, `service`, `trace_id`, `user_id`, `http_status`), permitiendo consultas, filtros analíticos y agregaciones de alta velocidad en motores como Elasticsearch o Loki.",
      "Porque el texto plano consume el triple de memoria en los procesadores Intel.",
      "Porque JSON impide que los usuarios puedan hackear el servidor mediante SQL injection.",
      "Porque el formato JSON es el único reconocido legalmente por los tribunales de justicia."
    ],
    correctAnswerIndex: 0,
    explanation: "Analizar millones de líneas de logs desestructurados con regexes complejos es extremadamente lento e ineficiente. Con logs JSON estructurados, los sistemas de telemetría extraen campos de forma nativa e indexada en milisegundos.",
    topic: "Observabilidad y Logging",
    difficulty: "básico"
  },
  {
    id: "dep-17",
    collectionId: "deployment",
    question: "¿Qué es el 'Blast Radius' (Radio de Explosión) en la arquitectura de despliegue y cómo se minimiza?",
    options: [
      "El alcance o impacto máximo de daño operativo que un fallo técnico, error de despliegue o brecha de seguridad puede causar en el sistema global; se minimiza aislando recursos en múltiples regiones/cuentas, adoptando despliegues canarios y desacoplando microservicios.",
      "El radio físico de destrucción de un centro de datos ante un terremoto.",
      "La distancia máxima en kilómetros a la que puede viajar una señal de fibra óptica.",
      "El número de correos electrónicos de alerta que se envían por segundo durante un incidente."
    ],
    correctAnswerIndex: 0,
    explanation: "Minimizar el blast radius es un mandamiento arquitectónico clave: asegurar que un fallo en un componente (e.g. caída del servicio de recomendaciones) nunca derribe los flujos críticos (e.g. procesar pagos y órdenes).",
    topic: "Arquitectura y Resiliencia",
    difficulty: "intermedio"
  },
  {
    id: "dep-18",
    collectionId: "deployment",
    question: "¿Cuál es el propósito de implementar 'Rate Limiting' con el algoritmo 'Token Bucket' o 'Leaky Bucket' en la capa de entrada (API Gateway / Ingress)?",
    options: [
      "Controlar la tasa de solicitudes aceptadas por usuario o IP para prevenir la saturación de recursos internos, mitigar ataques de denegación de servicio (DoS) y proteger a los servicios backend contra picos destructivos de tráfico.",
      "Cobrar una tarifa fija por cada kilobyte descargado por el navegador web.",
      "Comprimir el tráfico de red utilizando algoritmos criptográficos cuánticos.",
      "Alinear los paquetes TCP con los ciclos de reloj del procesador."
    ],
    correctAnswerIndex: 0,
    explanation: "Token Bucket permite absorber ráfagas cortas de peticiones acumuladas en el cubo hasta su capacidad máxima, manteniendo al mismo tiempo un flujo sostenido constante que protege la infraestructura.",
    topic: "Seguridad y Rate Limiting",
    difficulty: "intermedio"
  },
  {
    id: "dep-19",
    collectionId: "deployment",
    question: "En un despliegue de alta disponibilidad, ¿qué es un problema de 'Split-Brain' (Cerebro Dividido) en clusters distribuidos y cómo se previene?",
    options: [
      "Ocurre cuando una partición de red divide el cluster en dos subgrupos que pierden comunicación entre sí y ambos asumen que el otro ha muerto, eligiendo dos líderes primarios simultáneos y corrompiendo los datos; se previene exigiendo quórum estricto ($> N/2$) para cualquier decisión de liderazgo.",
      "Un fallo de memoria donde la CPU intenta ejecutar dos instrucciones opuestas a la vez.",
      "Un error donde el balanceador de carga envía tráfico a servidores apagados.",
      "La pérdida de sincronización entre dos monitores conectados a la misma estación de trabajo."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin quórum ($N/2 + 1$), dos mitades aisladas aceptarían escrituras contradictorias sobre los mismos datos, creando una divergencia catastrófica imposible de conciliar automáticamente. Por eso los clusters distribuidos (Raft, ZooKeeper, etcd) utilizan nodos impares (3, 5, 7).",
    topic: "Sistemas Distribuidos y Quórum",
    difficulty: "avanzado"
  },
  {
    id: "dep-20",
    collectionId: "deployment",
    question: "¿Qué función cumple el protocolo 'mTLS' (Mutual TLS) en la comunicación interna entre microservicios en producción?",
    options: [
      "Garantiza el cifrado bidireccional punto a punto de todo el tráfico de red interno y verifica criptográficamente la identidad auténtica tanto del cliente como del servidor mediante certificados digitales X.509 en ambas direcciones.",
      "Permite descargar páginas web sin necesidad de tener un navegador instalado.",
      "Duplica el ancho de banda físico de la tarjeta de red.",
      "Elimina la necesidad de utilizar contraseñas en los correos electrónicos."
    ],
    correctAnswerIndex: 0,
    explanation: "En la arquitectura Zero Trust no se confía en la red interna del cluster. mTLS asegura que el servicio A verifique que está hablando verdaderamente con el servicio B y viceversa, haciendo imposible el espionaje de red o la suplantación interna.",
    topic: "Seguridad Zero Trust y mTLS",
    difficulty: "intermedio"
  },
  {
    id: "dep-21",
    collectionId: "deployment",
    question: "En la gestión de incidentes, ¿cuál es el objetivo de un 'Blameless Post-Mortem' (Análisis Post-Incidente sin Culpas)?",
    options: [
      "Investigar sistemáticamente las causas raíz sistémicas, organizacionales y técnicas que facilitaron el incidente para diseñar defensas y mejoras que prevengan su recurrencia, asumiendo que los ingenieros actuaron de buena fe con la información disponible en ese momento.",
      "Identificar al empleado que cometió el error para aplicarle una sanción disciplinaria.",
      "Borrar los registros de error de la base de datos para no alarmar a los accionistas.",
      "Redactar un comunicado de prensa culpando a los proveedores de Internet."
    ],
    correctAnswerIndex: 0,
    explanation: "La cultura sin culpas fomenta que los ingenieros informen honestamente de los fallos y riesgos sin temor a represalias, permitiendo descubrir las verdaderas deficiencias en procesos, pruebas y herramientas que permitieron que el error humano llegara a producción.",
    topic: "Gestión de Incidentes y Cultura SRE",
    difficulty: "básico"
  },
  {
    id: "dep-22",
    collectionId: "deployment",
    question: "¿Cómo funciona el patrón 'Bulkhead' (Mamparo) en la arquitectura de resiliencia de software?",
    options: [
      "Aísla recursos computacionales (hilos, pools de conexiones a base de datos, memoria) en particiones independientes de modo que si una funcionalidad o dependencia colapsa, solo consume su propio compartimento asignado sin agotar los recursos del resto de la aplicación.",
      "Instala puertas blindadas en los accesos al centro de datos.",
      "Cifra los discos duros con un algoritmo de compresión magnética.",
      "Separa el código en diferentes ramas de Git según el seniority de los programadores."
    ],
    correctAnswerIndex: 0,
    explanation: "Inspirado en los mamparos estancos de los barcos que evitan que un agujero en un compartimento hunda toda la nave: si las consultas a un proveedor de envíos lento agotan su thread pool asignado de 10 hilos, los otros 90 hilos de la app continúan atendiendo usuarios con normalidad.",
    topic: "Patrones de Resiliencia (Bulkhead)",
    difficulty: "intermedio"
  },
  {
    id: "dep-23",
    collectionId: "deployment",
    question: "En Kubernetes, ¿qué es un 'PodDisruptionBudget' (PDB) y qué protección ofrece durante las operaciones de mantenimiento del cluster?",
    options: [
      "Define el número mínimo de pods que deben permanecer disponibles (o el máximo que pueden estar caídos) durante desalojos voluntarios de nodos (e.g. drenado para parches de kernel o actualización de versión de Kubernetes), impidiendo que las operaciones de mantenimiento causen cortes de servicio.",
      "Un presupuesto económico para pagar las facturas de electricidad de los servidores.",
      "El límite de memoria RAM que un pod puede consumir antes de ser expulsado por el OOM Killer.",
      "Un script que elimina pods huérfanos cada medianoche."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin un PDB, un comando como `kubectl drain node` podría desalojar todos los pods de un microservicio simultáneamente si están en el mismo nodo. El PDB fuerza al scheduler a desalojar los pods de forma secuencial y respetando la disponibilidad mínima.",
    topic: "Kubernetes y Alta Disponibilidad",
    difficulty: "avanzado"
  },
  {
    id: "dep-24",
    collectionId: "deployment",
    question: "¿Cuál es la función del patrón 'Backoff Exponencial con Jitter' al reintentar operaciones fallidas contra una API o base de datos?",
    options: [
      "Multiplica progresivamente el tiempo de espera entre reintentos sucesivos ($t = 2^n$) y añade una variación aleatoria ('jitter') para evitar que miles de clientes desconectados reintenten simultáneamente al mismo milisegundo provocando una tormenta de tráfico sincronizada ('Thundering Herd').",
      "Detiene el programa inmediatamente tras el primer fallo.",
      "Comprime los datos enviados en cada intento para ahorrar ancho de banda.",
      "Cambia la contraseña de usuario en cada intento fallido."
    ],
    correctAnswerIndex: 0,
    explanation: "Si 10,000 clientes usan backoff exponencial puro sin jitter, todos reintentarán exactamente a los 2s, 4s y 8s, martillando el servidor en ondas repetidas. El jitter dispersa uniformemente los reintentos aplanando la curva de demanda.",
    topic: "Resiliencia y Reintentos",
    difficulty: "intermedio"
  },
  {
    id: "dep-25",
    collectionId: "deployment",
    question: "¿Qué optimización proporciona el uso de 'Warm Spare' frente a 'Cold Standby' y 'Hot Standby' en estrategias de recuperación ante desastres (Disaster Recovery)?",
    options: [
      "Un Warm Spare mantiene una copia secundaria de la infraestructura encendida y recibiendo replicación continua de datos, pero sin procesar tráfico activo de producción hasta que se declara el desastre, ofreciendo un equilibrio óptimo entre tiempo de recuperación (RTO bajo) y costo de infraestructura moderado.",
      "Un Warm Spare no utiliza discos duros y guarda todo en cintas magnéticas.",
      "Un Warm Spare es una copia impresa en papel del código fuente de la app.",
      "Un Warm Spare requiere reiniciar el centro de datos principal cada 24 horas."
    ],
    correctAnswerIndex: 0,
    explanation: "Cold Standby tarda horas en aprovisionarse (RTO alto). Hot Standby corre al 100% de capacidad duplicando costos. Warm Spare mantiene los sistemas mínimos encendidos con datos sincronizados listos para escalar en minutos.",
    topic: "Disaster Recovery y RTO/RPO",
    difficulty: "intermedio"
  },
  {
    id: "dep-26",
    collectionId: "deployment",
    question: "¿Qué significan rigurosamente las métricas RTO (Recovery Time Objective) y RPO (Recovery Point Objective) en la continuidad de negocio?",
    options: [
      "RTO es el tiempo máximo aceptable que el sistema puede permanecer caído antes de ser restaurado; RPO es la cantidad máxima aceptable de pérdida de datos medida en tiempo (e.g. antigüedad del último backup válido) provocada por un incidente.",
      "RTO mide la velocidad del procesador y RPO la velocidad del disco duro.",
      "RTO es el costo de licencias de software y RPO el salario de los ingenieros.",
      "Son métricas exclusivas para la compra de dominios web en Internet."
    ],
    correctAnswerIndex: 0,
    explanation: "Si el RPO es de 1 hora, perder más de 60 minutos de transacciones viola el objetivo de continuidad. Si el RTO es de 30 minutos, el equipo debe ser capaz de levantar el servicio en producción en menos de media hora tras la declaración del desastre.",
    topic: "Disaster Recovery Métricas",
    difficulty: "básico"
  },
  {
    id: "dep-27",
    collectionId: "deployment",
    question: "En la configuración de red para despliegues web, ¿qué problema resuelve el protocolo 'Anycast DNS / Anycast BGP'?",
    options: [
      "Permite anunciar una misma dirección IP pública desde múltiples centros de datos alrededor del planeta; la red de Internet (BGP) enruta automáticamente al usuario al punto de presencia geográficamente más cercano y con menor latencia, absorbiendo ataques DDoS de forma distribuida.",
      "Asigna una dirección IP diferente a cada página HTML del sitio web.",
      "Cifra los correos electrónicos antes de ser enviados a través de SMTP.",
      "Duplica el tamaño de los paquetes TCP para evitar la fragmentación."
    ],
    correctAnswerIndex: 0,
    explanation: "Con Anycast, redes globales como las de Cloudflare, Google o AWS reciben tráfico en decenas de localizaciones simultáneas bajo la misma IP, mitigando la latencia de ida y vuelta (RTT) y distribuyendo ataques volumétricos.",
    topic: "Redes Globales y Anycast",
    difficulty: "avanzado"
  },
  {
    id: "dep-28",
    collectionId: "deployment",
    question: "¿Cuál es el beneficio de implementar 'Distributed Tracing' con propagación de contexto W3C Trace Context frente a logs aislados?",
    options: [
      "Estandariza las cabeceras HTTP (`traceparent` y `tracestate`) permitiendo que cualquier framework, lenguaje o proxy intermedio propague el identificador de la traza de manera interoperable sin acoplarse a un único fabricante de telemetría.",
      "Permite rastrear la ubicación GPS exacta del teléfono de cada usuario.",
      "Elimina la necesidad de instalar certificados SSL en los servidores.",
      "Convierte las respuestas HTTP en archivos de audio reproducibles."
    ],
    correctAnswerIndex: 0,
    explanation: "W3C Trace Context resuelve la fragmentación histórica de cabeceras propietarias (e.g. `X-B3-TraceId` de Zipkin vs cabeceras de Datadog o New Relic), permitiendo observabilidad unificada en entornos multi-proveedor.",
    topic: "Observabilidad y Estándares W3C",
    difficulty: "intermedio"
  },
  {
    id: "dep-29",
    collectionId: "deployment",
    question: "En despliegues con orquestadores de contenedores, ¿qué es un 'Zombie Process' (Proceso Zombi) y cómo lo previene el uso de `tini` o `dumb-init` como PID 1?",
    options: [
      "Un proceso que ha finalizado su ejecución pero permanece en la tabla de procesos porque su padre nunca leyó su código de salida con `wait()`; `tini` adopta los procesos huérfanos como PID 1, cosecha sus estados de salida y los purga de la tabla de procesos del kernel.",
      "Un virus informático que infecta servidores a través del puerto 80.",
      "Un script de Bash que continúa ejecutándose después de cerrar la terminal.",
      "Un hilo que consume el 100% de la CPU ejecutando un bucle infinito."
    ],
    correctAnswerIndex: 0,
    explanation: "En Linux el proceso con PID 1 tiene la responsabilidad obligatoria de adoptar procesos huérfanos y llamar a `waitpid()` para eliminarlos. La mayoría de aplicaciones de Node, Python o Java no manejan esto adecuadamente dentro de contenedores si corren como PID 1.",
    topic: "Contenedores y Kernel de Linux",
    difficulty: "avanzado"
  },
  {
    id: "dep-30",
    collectionId: "deployment",
    question: "¿Qué garantiza el uso de 'Health Checks Sintéticos' (Synthetic Monitoring / Canaries activos) ejecutados de forma periódica desde múltiples ubicaciones globales?",
    options: [
      "Simulan proactivamente el comportamiento completo de un usuario real (e.g. login, añadir producto al carrito, checkout) las 24 horas del día, detectando caídas o degradaciones de servicio antes de que los clientes reales comiencen a experimentar y reportar el problema.",
      "Aumentan artificialmente las estadísticas de visitas en Google Analytics.",
      "Verifican que los cables de red física estén conectados en el servidor.",
      "Generan contraseñas aleatorias para los administradores de sistemas."
    ],
    correctAnswerIndex: 0,
    explanation: "El monitoreo pasivo solo detecta fallos si hay usuarios interactuando (y si la app falla silenciosamente en el checkout durante la madrugada, nadie lo notaría). El monitoreo sintético valida continuamente los flujos de negocio críticos de forma proactiva.",
    topic: "Monitoreo Sintético y Operaciones",
    difficulty: "básico"
  }
];
