import type { QuizQuestion } from "@/data/quizTypes";

export const dockerQuestions: QuizQuestion[] = [
  {
    id: "dkr-q-01",
    collectionId: "docker",
    question: "¿Qué dos primitivas fundamentales del kernel de Linux hacen posible el aislamiento y la limitación de recursos en contenedores Docker?",
    options: [
      "Namespaces (aislamiento de visibilidad) y Control Groups / cgroups (limitación de CPU, memoria y E/S).",
      "KVM (Kernel-based Virtual Machine) y QEMU para emulación completa de hardware.",
      "Hyper-V y WSL2 exclusivamente en arquitecturas x86_64.",
      "SELinux y AppArmor para particionado físico de núcleos de procesador."
    ],
    correctAnswerIndex: 0,
    explanation: "Los contenedores no son máquinas virtuales completas: comparten el kernel del host. Los namespaces aíslan lo que un proceso puede ver (PID, red, montajes, usuarios) y los cgroups limitan cuánto puede consumir (RAM, CPU, I/O).",
    topic: "Fundamentos del Kernel & Aislamiento",
    difficulty: "básico"
  },
  {
    id: "dkr-q-02",
    collectionId: "docker",
    question: "¿Cómo funciona el almacenamiento Copy-on-Write (CoW) en el driver de almacenamiento 'overlay2' de Docker?",
    options: [
      "Combina capas base de solo lectura (lowerdir) con una capa superior escribible (upperdir) en una vista unificada (merged).",
      "Duplica físicamente el sistema de archivos completo en el disco cada vez que se crea un nuevo contenedor.",
      "Almacena todos los archivos del contenedor en una base de datos SQLite indexada en memoria.",
      "Comprime los archivos modificados en un archivo tar.gz antes de escribirlos en el disco duro."
    ],
    correctAnswerIndex: 0,
    explanation: "OverlayFS utiliza capas inferiores de solo lectura ('lowerdir') compartidas por múltiples contenedores. Cuando un contenedor modifica un archivo, este se copia a la capa superior escribible ('upperdir'), presentándose al proceso en la carpeta 'merged'.",
    topic: "Storage Drivers & Capas",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-03",
    collectionId: "docker",
    question: "¿Cuál es la principal ventaja de utilizar 'Multi-Stage Builds' en un Dockerfile de producción?",
    options: [
      "Permite usar compiladores y dependencias pesadas en etapas tempranas y copiar solo el artefacto final a una imagen base mínima y ligera.",
      "Permite ejecutar múltiples contenedores en paralelo dentro del mismo espacio de red sin Docker Compose.",
      "Habilita el soporte para desplegar el contenedor directamente en clústeres de Kubernetes sin manifiestos YAML.",
      "Aumenta la memoria RAM asignada al proceso de compilación duplicando el límite de cgroups."
    ],
    correctAnswerIndex: 0,
    explanation: "Las compilaciones multi-etapa permiten compilar código en una etapa grande (con SDKs, compiladores y linters) y copiar únicamente el binario resultante a una imagen de producción limpia (como Alpine o Distroless), reduciendo tamaño y superficie de ataque.",
    topic: "Dockerfile & Optimización",
    difficulty: "básico"
  },
  {
    id: "dkr-q-04",
    collectionId: "docker",
    question: "¿Por qué se desaconseja ejecutar un proceso principal de contenedor como 'PID 1' sin un gestor de inicialización (init)?",
    options: [
      "PID 1 no adopta por defecto procesos huérfanos ni procesa señales POSIX como SIGTERM correctamente, generando procesos zombis.",
      "El kernel de Linux prohíbe que procesos con PID 1 puedan abrir puertos de red TCP por debajo del 1024.",
      "El sistema de archivos del contenedor se desmonta automáticamente si un proceso con PID 1 escribe en stderr.",
      "Impide que el recolector de basura de Docker elimine la imagen una vez finalizado el contenedor."
    ],
    correctAnswerIndex: 0,
    explanation: "En Linux, PID 1 tiene la responsabilidad especial de cosechar procesos zombis ('reaping') y reenviar señales. Aplicaciones como Node.js o Python no gestionan esto por defecto, por lo que herramientas como tini o la bandera '--init' evitan fugas de procesos.",
    topic: "Procesos & Señales POSIX",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-05",
    collectionId: "docker",
    question: "¿Cuál es la diferencia sintáctica y funcional entre la forma 'exec' y la forma 'shell' en directivas ENTRYPOINT o CMD?",
    options: [
      "La forma exec (['bin', 'arg']) ejecuta el binario directamente como PID 1; la forma shell ('bin arg') lo envuelve en '/bin/sh -c', interceptando señales.",
      "La forma exec requiere que el archivo sea un script en bash con permisos 777; la forma shell admite archivos binarios ELF.",
      "La forma shell permite usar variables de entorno sin interpolación previa; la forma exec desactiva la red del contenedor.",
      "No existe diferencia; Docker normaliza ambas sintaxis al mismo árbol de llamadas en tiempo de ejecución."
    ],
    correctAnswerIndex: 0,
    explanation: "La sintaxis JSON de lista (exec form: ENTRYPOINT ['node', 'app.js']) invoca el proceso directamente como PID 1, permitiendo recibir señales de apagado limpio (SIGTERM). La shell form ejecuta '/bin/sh -c', dejando la shell como PID 1 y bloqueando señales al proceso hijo.",
    topic: "Dockerfile & Señales",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-06",
    collectionId: "docker",
    question: "¿Qué tipo de red en Docker asigna una dirección MAC e IP directamente en la red física del host?",
    options: [
      "macvlan",
      "bridge",
      "host",
      "overlay"
    ],
    correctAnswerIndex: 0,
    explanation: "El driver 'macvlan' asigna una dirección MAC física a cada contenedor, haciendo que aparezcan como dispositivos independientes conectados directamente a la red física local, ideal para aplicaciones heredadas.",
    topic: "Networking en Docker",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-07",
    collectionId: "docker",
    question: "¿Cuál es la diferencia entre un 'Volume' administrado de Docker y un 'Bind Mount'?",
    options: [
      "Los volúmenes son gestionados por Docker en /var/lib/docker/volumes/ con aislamiento y drivers; los bind mounts mapean rutas absolutas arbitrarias del host.",
      "Los volúmenes se eliminan automáticamente cuando el contenedor se detiene; los bind mounts persisten siempre.",
      "Los bind mounts ofrecen mayor rendimiento porque residen exclusivamente en la memoria RAM del sistema.",
      "Los volúmenes solo admiten almacenamiento de solo lectura (ro) sin permisos de escritura."
    ],
    correctAnswerIndex: 0,
    explanation: "Los volúmenes son el mecanismo nativo preferido: están aislados del sistema de archivos del host, se respaldan fácilmente y funcionan con drivers en la nube. Los bind mounts dependen de la estructura de carpetas local del host.",
    topic: "Persistencia & Volúmenes",
    difficulty: "básico"
  },
  {
    id: "dkr-q-08",
    collectionId: "docker",
    question: "¿Qué papel desempeñan 'containerd' y 'runc' dentro de la arquitectura modular de Docker?",
    options: [
      "'containerd' es el gestor del ciclo de vida de contenedores e imágenes; 'runc' es el ejecutor de bajo nivel conforme a la especificación OCI.",
      "'runc' gestiona la interfaz gráfica y 'containerd' administra los túneles de red VPN.",
      "'containerd' compila imágenes de Docker en binarios de Rust y 'runc' los ejecuta en WebAssembly.",
      "Ambos son emuladores de microkernel para ejecutar contenedores de Windows en Linux."
    ],
    correctAnswerIndex: 0,
    explanation: "Docker Daemon delega en containerd la gestión de imágenes, redes y almacenamiento. A su vez, containerd invoca a runc (la implementación de referencia OCI) para crear los namespaces y cgroups y arrancar el contenedor.",
    topic: "Arquitectura & OCI Runtime",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-09",
    collectionId: "docker",
    question: "¿Cómo optimiza el motor 'BuildKit' el orden de construcción de capas en un Dockerfile?",
    options: [
      "Genera un grafo de dependencias acíclico (DAG) ejecutando etapas y capas independientes en paralelo y omitiendo pasos no utilizados.",
      "Compila todas las capas en un único archivo binario monolítico antes de evaluar el Dockerfile.",
      "Descarga las dependencias de npm y pip directamente en el kernel sin pasar por el contenedor.",
      "Desactiva la comprobación de sumas hash SHA-256 para acelerar la escritura en disco."
    ],
    correctAnswerIndex: 0,
    explanation: "BuildKit procesa el Dockerfile como un grafo de operaciones (LLB - Low-Level Builder). Identifica ramas y multi-stages concurrentes, ejecutándolas en paralelo y podando automáticamente etapas no referenciadas.",
    topic: "BuildKit & Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-10",
    collectionId: "docker",
    question: "¿Qué riesgo de seguridad crítico implica montar el socket de Docker (/var/run/docker.sock) dentro de un contenedor?",
    options: [
      "Permite al contenedor comunicarse con el daemon de Docker y obtener privilegios equivalentes a root completo en el host.",
      "Inhabilita el cifrado TLS en todas las peticiones HTTPS que salgan del contenedor.",
      "Borra automáticamente todas las imágenes del registro de Docker Hub cada 24 horas.",
      "Fuerza un reinicio en frío del sistema operativo del servidor host si el contenedor se cuelga."
    ],
    correctAnswerIndex: 0,
    explanation: "El socket de Docker otorga control absoluto sobre el Docker daemon. Un atacante en un contenedor con acceso al socket puede lanzar un nuevo contenedor privilegiado montando la raíz del host (/) y tomar el control total de la máquina.",
    topic: "Seguridad & Hardening",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-11",
    collectionId: "docker",
    question: "¿Cómo garantiza Docker la resolución de nombres DNS entre contenedores conectados a una red 'bridge' personalizada?",
    options: [
      "Docker ejecuta un servidor DNS embebido en 127.0.0.11 que resuelve automáticamente los nombres de contenedor o alias de red.",
      "Edita el archivo /etc/hosts físico del sistema operativo cada vez que un contenedor arranca.",
      "Envía peticiones de difusión NetBIOS por el puerto UDP 137 en la subred local.",
      "Delega todas las resoluciones a los servidores DNS públicos de Google (8.8.8.8) directamente."
    ],
    correctAnswerIndex: 0,
    explanation: "En redes creadas por el usuario ('docker network create'), el daemon de Docker activa un resolver DNS interno en la IP 127.0.0.11, permitiendo comunicación por nombre de contenedor (service discovery básico).",
    topic: "Networking & DNS",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-12",
    collectionId: "docker",
    question: "¿Qué directiva de seguridad en el Dockerfile garantiza que la aplicación no se ejecute con privilegios de superusuario?",
    options: [
      "USER <nombre_o_uid_no_root>",
      "RUN chmod 400 /app",
      "EXPOSE --unprivileged 8080",
      "SECURITY drop-privileges"
    ],
    correctAnswerIndex: 0,
    explanation: "Por defecto, los contenedores arrancan como root (UID 0). Usar la directiva 'USER node' o 'USER 10001' tras instalar dependencias asegura el principio de menor privilegio, mitigando escapes de contenedor.",
    topic: "Seguridad en Dockerfile",
    difficulty: "básico"
  },
  {
    id: "dkr-q-13",
    collectionId: "docker",
    question: "¿Qué efecto tiene la opción '--cap-drop=ALL' combinada con '--cap-add' al arrancar un contenedor?",
    options: [
      "Elimina todas las capacidades POSIX del kernel de Linux y otorga exclusivamente las estrictamente requeridas por el proceso.",
      "Desconecta el contenedor de todas las interfaces de red inalámbricas del servidor.",
      "Limita el tamaño máximo de los archivos que el contenedor puede descargar de Internet.",
      "Borra la memoria caché del procesador antes de despachar cada hilo de ejecución."
    ],
    correctAnswerIndex: 0,
    explanation: "Las Linux Capabilities dividen los privilegios de root en unidades discretas. Descartar todas con '--cap-drop=ALL' y añadir selectivamente solo lo necesario (ej. '--cap-add=NET_BIND_SERVICE') es una buena práctica de hardening.",
    topic: "Seguridad & Linux Capabilities",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-14",
    collectionId: "docker",
    question: "¿Qué diferencia existe entre el tipo de red 'host' y el tipo 'none' en Docker?",
    options: [
      "'host' comparte la pila de red completa del host sin aislamiento; 'none' aísla al contenedor desconectándolo de toda red externa.",
      "'host' permite conexiones solo por cable; 'none' admite conexiones inalámbricas.",
      "'none' ejecuta el contenedor en modo sleep; 'host' lo ejecuta con prioridad de CPU en tiempo real.",
      "Son sinónimos que se diferencian únicamente en la configuración de la pasarela por defecto."
    ],
    correctAnswerIndex: 0,
    explanation: "Con '--network host', el contenedor elude el namespace de red y usa directamente las interfaces y puertos del host (máximo rendimiento, menor aislamiento). Con '--network none', el contenedor solo tiene la interfaz loopback (127.0.0.1).",
    topic: "Networking en Docker",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-15",
    collectionId: "docker",
    question: "¿Para qué sirve la instrucción 'HEALTHCHECK' en un Dockerfile?",
    options: [
      "Indica a Docker cómo comprobar periódicamente si el proceso dentro del contenedor sigue funcionando correctamente.",
      "Envía telemetría de uso de memoria al panel de control de Docker Hub cada cinco minutos.",
      "Realiza un análisis estático de vulnerabilidades en las librerías del sistema operativo base.",
      "Verifica que el servidor host tenga suficiente espacio libre en disco antes de compilar."
    ],
    correctAnswerIndex: 0,
    explanation: "HEALTHCHECK define un comando (ej. 'curl -f http://localhost:8080/health || exit 1') que Docker ejecuta a intervalos. El contenedor reporta estados 'healthy', 'unhealthy' o 'starting', permitiendo a orquestadores reiniciar instancias caídas.",
    topic: "Resiliencia & Healthchecks",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-16",
    collectionId: "docker",
    question: "¿Qué mecanismo de cgroups v2 previene que un contenedor con una fuga de memoria cuelgue el servidor host?",
    options: [
      "OOM Killer (Out Of Memory Killer) del cgroup, que termina el proceso del contenedor al alcanzar el límite 'memory.max'.",
      "Swap dinámico infinito que escribe los excesos de memoria en particiones remotas de red.",
      "Suspensión automática de la máquina virtual host hasta que un operador libere memoria.",
      "Reducción automática de la frecuencia de reloj del procesador (thermal throttling)."
    ],
    correctAnswerIndex: 0,
    explanation: "Al definir límites como '--memory=512m', los cgroups rastrean el consumo. Si el contenedor excede el límite y no puede liberar páginas de memoria, el OOM killer del kernel termina el proceso con código de salida 137 (SIGKILL).",
    topic: "Gestión de Recursos & Cgroups",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-17",
    collectionId: "docker",
    question: "¿Cómo optimiza el montaje de caché '--mount=type=cache' de BuildKit la instalación de paquetes (npm, apt, pip)?",
    options: [
      "Persiste el directorio de descargas de paquetes entre compilaciones sucesivas sin incluirlo en las capas finales de la imagen.",
      "Copia los archivos descargados a un servidor proxy corporativo local en la red LAN.",
      "Comprime los paquetes instalados en un archivo zip accesible solo por el usuario root.",
      "Convierte las dependencias en submódulos de Git versionados en el repositorio."
    ],
    correctAnswerIndex: 0,
    explanation: "Con 'RUN --mount=type=cache,target=/root/.cache/pip pip install -r requirements.txt', BuildKit reutiliza el caché de descargas entre builds sin inflar el tamaño de la capa resultante con archivos temporales.",
    topic: "BuildKit & Caché",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-18",
    collectionId: "docker",
    question: "¿Qué es un 'OCI Manifest List' (o multi-arch image) en el ecosistema de contenedores?",
    options: [
      "Un manifiesto que apunta a múltiples imágenes construidas para diferentes arquitecturas (ej: linux/amd64 y linux/arm64) bajo una misma etiqueta.",
      "Una lista de contraseñas de acceso para registros privados de Docker.",
      "Un archivo de configuración que declara las variables de entorno comunes a un clúster de Compose.",
      "Un documento XML que lista las librerías de software libre utilizadas en la aplicación."
    ],
    correctAnswerIndex: 0,
    explanation: "Un Manifest List (o OCI Image Index) asocia una única etiqueta (como 'node:20-alpine') a imágenes compiladas para amd64, arm64, etc. El cliente Docker descarga automáticamente la imagen compatible con la CPU del host.",
    topic: "Imágenes & Especificación OCI",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-19",
    collectionId: "docker",
    question: "¿Cuál es la función del comando 'docker system prune -a'?",
    options: [
      "Elimina todos los contenedores detenidos, redes no utilizadas, volúmenes anónimos e imágenes que no estén asociadas a contenedores activos.",
      "Restaura la configuración de fábrica de Docker reinstalando el daemon dockerd.",
      "Desfragmenta los sistemas de archivos de todos los contenedores en ejecución.",
      "Envía un informe de diagnóstico a los servidores de soporte técnico de Docker Inc."
    ],
    correctAnswerIndex: 0,
    explanation: "'docker system prune -a' limpia profundamente el disco eliminando contenedores parados, redes huérfanas, caché de build y todas las imágenes no utilizadas por contenedores activos, liberando espacio masivamente.",
    topic: "Mantenimiento & Limpieza",
    difficulty: "básico"
  },
  {
    id: "dkr-q-20",
    collectionId: "docker",
    question: "¿Qué archivo define qué archivos y carpetas del contexto de compilación local deben excluirse de ser enviados al daemon de Docker?",
    options: [
      ".dockerignore",
      "Dockerfile.ignore",
      ".gitignore",
      "docker-compose.override.yml"
    ],
    correctAnswerIndex: 0,
    explanation: "'.dockerignore' evita enviar archivos innecesarios (como node_modules locales, carpetas .git, logs o archivos temporales) al contexto de compilación del daemon, acelerando drásticamente el inicio del build y mejorando la seguridad.",
    topic: "Contexto de Compilación",
    difficulty: "básico"
  },
  {
    id: "dkr-q-21",
    collectionId: "docker",
    question: "¿Cómo pasa BuildKit secretos de compilación (como tokens de API privados) de forma segura sin dejarlos grabados en el historial de capas?",
    options: [
      "Mediante la opción 'RUN --mount=type=secret,id=mysecret', montando el secreto temporalmente en memoria volátil solo durante ese comando.",
      "Inyectando el token como una variable de entorno en la instrucción 'ENV'.",
      "Pasando el token con la bandera '--build-arg' directamente en la llamada de compilación.",
      "Guardando el secreto en un archivo de texto en la raíz del repositorio de GitHub."
    ],
    correctAnswerIndex: 0,
    explanation: "Tanto ENV como ARG persisten en los metadatos o capas intermedias de la imagen. La opción '--mount=type=secret' monta el secreto como un archivo en memoria únicamente durante la ejecución de ese comando, sin filtrarlo a la imagen final.",
    topic: "Seguridad & Secretos en BuildKit",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-22",
    collectionId: "docker",
    question: "¿Qué señal envía 'docker stop' inicialmente a un contenedor antes de forzar su detención con SIGKILL?",
    options: [
      "SIGTERM, concediendo un periodo de gracia (por defecto 10 segundos) para que la aplicación cierre conexiones y limpie recursos.",
      "SIGINT, equivalente a presionar Ctrl+C en una terminal interactiva.",
      "SIGHUP, ordenando al proceso que recargue su archivo de configuración.",
      "SIGQUIT, generando un volcado de memoria (core dump) de la aplicación."
    ],
    correctAnswerIndex: 0,
    explanation: "'docker stop' envía SIGTERM para permitir una parada limpia (graceful shutdown). Si el contenedor no finaliza tras el tiempo de gracia (10 segundos por defecto), Docker envía SIGKILL para forzar la terminación inmediata.",
    topic: "Ciclo de Vida & Señales",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-23",
    collectionId: "docker",
    question: "¿Qué ventaja ofrece una imagen 'Distroless' frente a una imagen basada en Ubuntu o Alpine?",
    options: [
      "Contiene exclusivamente la aplicación y sus dependencias de runtime, eliminando gestores de paquetes, shells (sh/bash) y utilidades innecesarias.",
      "Permite ejecutar aplicaciones de Windows nativas en servidores con Linux sin Wine.",
      "Aumenta la tasa de transferencia de datos en sockets de red en un 50%.",
      "Genera certificados SSL automáticamente sin intervención de Let's Encrypt."
    ],
    correctAnswerIndex: 0,
    explanation: "Las imágenes Distroless (popularizadas por Google) carecen de shell, gestores de paquetes (apt, apk) y binarios del sistema operativo. Esto reduce drásticamente las vulnerabilidades CVE y dificulta que un atacante ejecute comandos tras una intrusión.",
    topic: "Seguridad & Imágenes Mínimas",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-24",
    collectionId: "docker",
    question: "¿Cuál es el propósito de la opción 'read_only: true' en la configuración de un servicio en Docker Compose?",
    options: [
      "Monta el sistema de archivos raíz del contenedor como de solo lectura, impidiendo que el software o atacantes alteren binarios del sistema.",
      "Impide que el contenedor realice consultas SELECT a bases de datos relacionales.",
      "Convierte la imagen en un archivo comprimido que no puede ser eliminado del registro.",
      "Desactiva los logs del contenedor para ahorrar espacio en disco."
    ],
    correctAnswerIndex: 0,
    explanation: "'read_only: true' (o '--read-only') bloquea cualquier escritura en el sistema de archivos del contenedor. Si la aplicación necesita escribir en carpetas temporales (como /tmp), se combinan montajes explícitos de tipo tmpfs.",
    topic: "Hardening & Inmutabilidad",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-25",
    collectionId: "docker",
    question: "¿Qué directiva de Docker Compose permite condicionar el arranque de un servicio al éxito de la verificación de salud de otro servicio?",
    options: [
      "depends_on con 'condition: service_healthy'",
      "wait_for con 'target: database:ready'",
      "links con 'check: ping'",
      "require_service con 'status: running'"
    ],
    correctAnswerIndex: 0,
    explanation: "Por defecto, 'depends_on' solo espera a que el contenedor dependiente arranque (service_started), lo cual falla si la base de datos tarda en inicializarse. Con 'condition: service_healthy', espera a que el HEALTHCHECK reporte éxito.",
    topic: "Docker Compose & Orquestación",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-26",
    collectionId: "docker",
    question: "¿Cómo optimiza la regla de 'orden de capas' la velocidad de compilación en Dockerfiles?",
    options: [
      "Colocar los pasos que cambian raramente (como instalación de dependencias de sistema y bibliotecas) antes de copiar el código fuente que muta con frecuencia.",
      "Escribir todas las instrucciones en una única línea separada por operadores punto y coma.",
      "Copiar todo el código fuente del proyecto en la primera línea del Dockerfile.",
      "Eliminar la instrucción FROM y compilar las imágenes directamente desde el kernel del host."
    ],
    correctAnswerIndex: 0,
    explanation: "Si una capa cambia, todas las capas subsiguientes invalidan su caché. Por ello, se copia primero package.json y se ejecuta npm install; solo después se copia el resto del código fuente (COPY . .), maximizando el reuso de caché.",
    topic: "Optimización de Caché",
    difficulty: "básico"
  },
  {
    id: "dkr-q-27",
    collectionId: "docker",
    question: "¿Qué efecto tiene un montaje de tipo 'tmpfs' en un contenedor Docker?",
    options: [
      "Crea un montaje de almacenamiento volátil respaldado exclusivamente en la memoria RAM del host, sin persistir en el disco físico.",
      "Sincroniza los archivos temporales con un bucket de Amazon S3 en segundo plano.",
      "Guarda los archivos en una partición swap cifrada con claves asimétricas.",
      "Limita el tiempo de vida del contenedor a un máximo de diez minutos."
    ],
    correctAnswerIndex: 0,
    explanation: "'tmpfs' monta un directorio en la memoria volátil del host. Es ideal para datos transitorios de alto rendimiento o datos sensibles (como claves en memoria) que nunca deben ser escritos en el almacenamiento no volátil.",
    topic: "Almacenamiento & Memoria",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-28",
    collectionId: "docker",
    question: "¿Qué herramienta oficial permite escanear vulnerabilidades conocidas (CVEs) directamente sobre imágenes de Docker?",
    options: [
      "docker scout (o docker scan mediante integración con Trivy/Snyk)",
      "docker audit --cve-check",
      "docker test --security",
      "docker verify-image --full"
    ],
    correctAnswerIndex: 0,
    explanation: "'docker scout' es la herramienta integrada en el CLI de Docker para análisis de composición de software (SCA), que compara el inventario de paquetes de la imagen contra bases de datos de vulnerabilidades conocidas y sugiere imágenes base actualizadas.",
    topic: "Seguridad & Vulnerabilidades",
    difficulty: "intermedio"
  },
  {
    id: "dkr-q-29",
    collectionId: "docker",
    question: "¿Qué tipo de red en Docker se utiliza para comunicar contenedores distribuidos en múltiples servidores hosts de un clúster Docker Swarm?",
    options: [
      "overlay network con túneles VXLAN",
      "bridge network con enrutamiento NAT local",
      "loopback network con sockets Unix",
      "peer-to-peer network mediante WebRTC"
    ],
    correctAnswerIndex: 0,
    explanation: "Las redes 'overlay' encapsulan paquetes Ethernet dentro de túneles UDP VXLAN (puerto 4789), permitiendo que contenedores en hosts físicos diferentes se comuniquen de forma transparente y segura en la misma subred virtual.",
    topic: "Redes Distribuidas & Swarm",
    difficulty: "avanzado"
  },
  {
    id: "dkr-q-30",
    collectionId: "docker",
    question: "¿Qué garantiza el uso de digests criptográficos (ej: 'python@sha256:...') en lugar de etiquetas mutables (tags como ':latest')?",
    options: [
      "Inmutabilidad determinista: garantiza que el contenedor siempre ejecute exactamente la misma imagen verificada, inmune a sobreescrituras en el registro.",
      "Aumenta la velocidad de descarga en un 80% mediante compresión por bloques SHA.",
      "Permite ejecutar la imagen en servidores sin conexión a Internet sin necesidad de pre-descargarla.",
      "Desactiva las comprobaciones de firma de código en repositorios corporativos."
    ],
    correctAnswerIndex: 0,
    explanation: "Las etiquetas (tags) son punteros mutables: 'python:3.11' puede cambiar mañana si se publica un parche. Apuntar al digest inmutable '@sha256:...' garantiza reproducibilidad estricta, trazabilidad y cumplimiento en auditorías de supply chain.",
    topic: "Seguridad & Inmutabilidad de Imágenes",
    difficulty: "intermedio"
  }
];
