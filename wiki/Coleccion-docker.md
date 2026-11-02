# Docker (Docker)

> **Imágenes, BuildKit, storage, networking, Compose y runtime.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `docker` |
| **Grupo Arquitectonico** | [Infraestructura y entrega](Grupo-Delivery) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `docker` |
| **Total de Conceptos** | **236 conceptos** |
| **Capitulos / Secciones** | **13 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/docker)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/docker-en-accion)



---

## Catalogo Sistematico de Conceptos (236)

### Seccion: Fundamentos de contenedores (15 conceptos)

- **Qué problema resuelve Docker**  
  *Familia:* `aislamiento sobre host`  
  Empaqueta aplicación, dependencias y configuración de runtime para reducir diferencias entre desarrollo, CI y producción.

- **Contenedor frente a máquina virtual**  
  *Familia:* `despacho de runtime`  
  Compara aislamiento por procesos y kernel compartido con virtualización completa de hardware y sistema operativo invitado.

- **Imagen frente a contenedor**  
  *Familia:* `capas internas`  
  La imagen es una plantilla inmutable; el contenedor es una instancia ejecutable con estado efímero adicional.

- **Docker Engine**  
  *Familia:* `aislamiento sobre host`  
  Conjunto formado por daemon, API y CLI que construye imágenes y administra contenedores, redes y volúmenes.

- **Docker Desktop**  
  *Familia:* `acumulación de recursos`  
  Distribución para equipos de desarrollo que integra Engine, Compose, BuildKit, credenciales y una máquina Linux cuando es necesaria.

- **Docker CLI**  
  *Familia:* `capas internas`  
  Cliente que traduce comandos como run, build o inspect en solicitudes a la API del daemon.

- **Docker daemon**  
  *Familia:* `aislamiento sobre host`  
  Proceso de larga duración que coordina objetos Docker y delega la ejecución de contenedores al runtime.

- **Cliente remoto**  
  *Familia:* `ida y vuelta`  
  La CLI puede administrar un daemon distinto mediante contexts, SSH o endpoints protegidos por TLS.

- **Aislamiento de procesos**  
  *Familia:* `capas internas`  
  Namespaces separan vistas de PID, red, mounts, usuarios y otros recursos sin crear otro kernel.

- **Límites de recursos**  
  *Familia:* `acumulación de recursos`  
  cgroups contabilizan y restringen CPU, memoria, PIDs e I/O consumidos por cada contenedor.

- **Portabilidad y límites**  
  *Familia:* `flujo de interfaz`  
  Una imagen conserva userspace y dependencias, pero todavía depende de arquitectura, kernel y capacidades disponibles.

- **Contenedores efímeros**  
  *Familia:* `aislamiento sobre host`  
  El filesystem writable del contenedor puede descartarse; los datos importantes deben vivir en volúmenes o servicios externos.

- **Aplicación de un solo proceso**  
  *Familia:* `planificación de trabajo`  
  Favorece responsabilidades claras, señales correctas y escalado independiente, aunque no es una regla física absoluta.

- **Declarativo frente a imperativo**  
  *Familia:* `configuración declarativa`  
  Dockerfiles y Compose describen estados reproducibles; comandos manuales aislados son más difíciles de auditar.

- **Flujo build, ship y run**  
  *Familia:* `análisis y emisión`  
  Conecta código fuente, imagen versionada, registry y ejecución de la misma referencia en distintos entornos.


### Seccion: Arquitectura del runtime (16 conceptos)

- **API de Docker Engine**  
  *Familia:* `aislamiento sobre host`  
  Interfaz HTTP versionada mediante la cual clientes crean, consultan y eliminan recursos del daemon.

- **containerd**  
  *Familia:* `capas internas`  
  Runtime de alto nivel que gestiona el ciclo de vida, imágenes, snapshots y tareas de contenedores.

- **runc**  
  *Familia:* `planificación de trabajo`  
  Runtime OCI de bajo nivel que crea el proceso aislado a partir de un bundle y una especificación.

- **Especificaciones OCI**  
  *Familia:* `mapa de memoria`  
  Estandarizan el formato de imágenes, distribución y configuración de runtime para interoperar entre herramientas.

- **Namespaces de Linux**  
  *Familia:* `aislamiento sobre host`  
  Proporcionan vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios.

- **cgroups v2**  
  *Familia:* `capas internas`  
  Organizan procesos jerárquicamente y aplican límites, prioridades y métricas de recursos.

- **Union filesystems**  
  *Familia:* `árbol de recursos`  
  Combinan capas de solo lectura y una capa writable para presentar un filesystem único al contenedor.

- **Snapshotters**  
  *Familia:* `mapa de memoria`  
  Implementan la preparación y montaje de snapshots de imagen mediante overlayfs u otros backends.

- **Shim del contenedor**  
  *Familia:* `aislamiento sobre host`  
  Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia.

- **PID 1 dentro del contenedor**  
  *Familia:* `capas internas`  
  Recibe señales y debe recolectar procesos hijos; una aplicación que ignora estas tareas puede cerrar mal.

- **Señales y stop timeout**  
  *Familia:* `propagación de eventos`  
  docker stop envía una señal de terminación y espera antes de forzar SIGKILL.

- **TTY y pseudo-terminal**  
  *Familia:* `mapa de memoria`  
  -t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo.

- **stdin abierto**  
  *Familia:* `despacho de runtime`  
  -i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY.

- **Modo detached**  
  *Familia:* `planificación de trabajo`  
  -d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles.

- **Restart policies**  
  *Familia:* `máquina de estados`  
  Definen si el daemon vuelve a iniciar un contenedor después de fallo, reinicio o salida manual.

- **Live restore**  
  *Familia:* `secuencia operativa`  
  Permite mantener contenedores ejecutándose durante ciertas actualizaciones o reinicios del daemon.


### Seccion: CLI y ciclo de vida (16 conceptos)

- **docker run**  
  *Familia:* `aislamiento sobre host`  
  Combina creación, configuración y arranque de un contenedor a partir de una imagen.

- **docker create y docker start**  
  *Familia:* `capas internas`  
  Separa la preparación del contenedor de su ejecución para inspeccionar o modificar el ciclo con precisión.

- **docker ps**  
  *Familia:* `acumulación de recursos`  
  Lista contenedores activos y, con opciones, también detenidos, IDs, puertos, nombres y estado.

- **docker inspect**  
  *Familia:* `aislamiento sobre host`  
  Expone configuración y estado detallados en JSON, incluidos mounts, red, health y argumentos.

- **docker logs**  
  *Familia:* `capas internas`  
  Lee stdout y stderr capturados por el logging driver configurado para el contenedor.

- **docker exec**  
  *Familia:* `acumulación de recursos`  
  Inicia un proceso adicional dentro de un contenedor ya ejecutándose sin alterar su comando principal.

- **docker attach**  
  *Familia:* `aislamiento sobre host`  
  Conecta la terminal a los streams del proceso principal y no crea un shell nuevo.

- **docker stop, kill y restart**  
  *Familia:* `máquina de estados`  
  Distingue cierre graceful, señal inmediata y reinicio administrado.

- **docker rm**  
  *Familia:* `capas internas`  
  Elimina metadata y capa writable de un contenedor detenido; no borra volúmenes nombrados por defecto.

- **docker cp**  
  *Familia:* `aislamiento sobre host`  
  Copia archivos entre host y contenedor, útil para inspección puntual pero no como estrategia de persistencia.

- **docker stats**  
  *Familia:* `acumulación de recursos`  
  Muestra consumo en vivo de CPU, memoria, red, block I/O y procesos.

- **docker top**  
  *Familia:* `capas internas`  
  Consulta los procesos visibles dentro de un contenedor usando información del host.

- **docker events**  
  *Familia:* `aislamiento sobre host`  
  Emite un stream de acciones del daemon para observar create, start, die, pull, network y otros eventos.

- **Filtros y formato**  
  *Familia:* `evidencia y latencia`  
  --filter y --format convierten la CLI en una interfaz más precisa para scripts y diagnóstico.

- **Nombres y IDs**  
  *Familia:* `análisis y emisión`  
  Los nombres facilitan operación humana; IDs completos o cortos identifican objetos de manera única.

- **Prune y limpieza**  
  *Familia:* `validación y decisión`  
  Comandos prune eliminan objetos no usados y requieren comprender qué datos o cachés se perderán.


### Seccion: Imágenes, capas y distribución (18 conceptos)

- **Anatomía de una imagen**  
  *Familia:* `anatomía del concepto`  
  Manifest, configuración y capas de contenido describen qué ejecutar y qué filesystem montar.

- **Capas inmutables**  
  *Familia:* `capas internas`  
  Cada instrucción de build puede producir una capa reutilizable identificada por su contenido.

- **Capa writable**  
  *Familia:* `acumulación de recursos`  
  Los cambios del contenedor se escriben sobre las capas de imagen mediante copy-on-write.

- **Content-addressable storage**  
  *Familia:* `topología y tráfico`  
  Digests calculados desde contenido permiten verificar integridad y reutilizar blobs idénticos.

- **Tags**  
  *Familia:* `análisis y emisión`  
  Alias mutables como app:1.4 o latest apuntan a una referencia de imagen y pueden cambiar.

- **Digests**  
  *Familia:* `pasaporte del artefacto`  
  Referencias sha256 identifican contenido inmutable y evitan ambigüedad durante promoción o rollback.

- **Manifest**  
  *Familia:* `configuración declarativa`  
  Relaciona una configuración con su conjunto ordenado de capas para una plataforma concreta.

- **Manifest list o image index**  
  *Familia:* `consulta e índice`  
  Agrupa variantes para distintas arquitecturas y sistemas operativos bajo una misma referencia.

- **Pull**  
  *Familia:* `topología y tráfico`  
  Descarga manifest y blobs faltantes, verifica digests y registra la imagen localmente.

- **Push**  
  *Familia:* `tejido de eventos`  
  Sube blobs no existentes y publica el manifest después de autenticarse contra el registry.

- **Registry**  
  *Familia:* `telar relacional`  
  Servicio que almacena y distribuye artefactos OCI mediante repositorios, tags y digests.

- **Docker Hub**  
  *Familia:* `aislamiento sobre host`  
  Registry público con repositorios, imágenes oficiales, automatizaciones y políticas de pull.

- **Imágenes oficiales**  
  *Familia:* `espectro de verificación`  
  Colecciones mantenidas con convenciones de seguridad, variantes y documentación revisada.

- **Imágenes base**  
  *Familia:* `mapa de memoria`  
  Punto de partida que aporta userspace, certificados, package manager o runtime de lenguaje.

- **scratch**  
  *Familia:* `topología y tráfico`  
  Base vacía para binarios autocontenidos que no necesitan shell, libc ni archivos adicionales.

- **Distroless**  
  *Familia:* `despacho de runtime`  
  Imágenes mínimas enfocadas en runtime que reducen herramientas presentes y superficie de ataque.

- **Multi-platform**  
  *Familia:* `consulta e índice`  
  Una misma etiqueta puede resolver a amd64, arm64 u otras plataformas según el cliente.

- **Garbage collection del registry**  
  *Familia:* `topología y tráfico`  
  Elimina blobs sin referencias después de políticas de retención y coordinación segura.


### Seccion: Dockerfile y diseño de imágenes (24 conceptos)

- **FROM**  
  *Familia:* `pasaporte del artefacto`  
  Selecciona la base y comienza una etapa de build; puede fijarse por tag o digest.

- **RUN**  
  *Familia:* `capas internas`  
  Ejecuta comandos durante el build y persiste sus cambios en una nueva capa.

- **COPY**  
  *Familia:* `topología y tráfico`  
  Añade archivos del contexto con semántica predecible y soporte de ownership o stages.

- **ADD**  
  *Familia:* `diagnóstico operativo`  
  Incluye capacidades adicionales como extracción local de tar, por lo que debe usarse con intención.

- **WORKDIR**  
  *Familia:* `planificación de trabajo`  
  Establece el directorio para instrucciones posteriores y para el proceso por defecto.

- **ENV**  
  *Familia:* `mapa de memoria`  
  Define variables persistentes en la imagen y disponibles durante build posterior y runtime.

- **ARG**  
  *Familia:* `despacho de runtime`  
  Declara parámetros disponibles durante build que no se convierten automáticamente en configuración runtime.

- **EXPOSE**  
  *Familia:* `configuración declarativa`  
  Documenta puertos esperados, pero no publica puertos en el host.

- **CMD**  
  *Familia:* `planificación de trabajo`  
  Proporciona comando o argumentos por defecto que el usuario puede reemplazar al ejecutar.

- **ENTRYPOINT**  
  *Familia:* `secuencia operativa`  
  Define el ejecutable principal y permite que CMD funcione como argumentos por defecto.

- **Forma exec y forma shell**  
  *Familia:* `consulta e índice`  
  La forma exec conserva señales y argumentos; la forma shell introduce un intérprete intermedio.

- **USER**  
  *Familia:* `planificación de trabajo`  
  Cambia UID o nombre usado por instrucciones posteriores y por el proceso de runtime.

- **VOLUME**  
  *Familia:* `mapa de memoria`  
  Declara un punto de datos externo, aunque Compose o runtime suelen expresar mejor la política concreta.

- **LABEL**  
  *Familia:* `consulta e índice`  
  Añade metadata consultable sobre versión, origen, propietario, licencia o propósito.

- **HEALTHCHECK**  
  *Familia:* `espectro de verificación`  
  Ejecuta una prueba periódica y publica healthy, unhealthy o starting sin reiniciar por sí sola.

- **SHELL**  
  *Familia:* `telar relacional`  
  Cambia el shell usado por instrucciones en forma shell, especialmente útil entre plataformas.

- **STOPSIGNAL**  
  *Familia:* `cola y consumidor`  
  Declara qué señal debe iniciar el cierre graceful del proceso principal.

- **ONBUILD**  
  *Familia:* `análisis y emisión`  
  Registra triggers para imágenes hijas y puede ocultar comportamiento si se usa sin disciplina.

- **.dockerignore**  
  *Familia:* `aislamiento sobre host`  
  Reduce contexto, evita invalidaciones y excluye secretos o archivos que no deben llegar al builder.

- **Orden de instrucciones**  
  *Familia:* `capas internas`  
  Coloca pasos estables antes de cambios frecuentes para maximizar reutilización de caché.

- **Una responsabilidad por imagen**  
  *Familia:* `acumulación de recursos`  
  Separa servicios que escalan y fallan de forma distinta, coordinándolos mediante red o Compose.

- **Proceso no root**  
  *Familia:* `planificación de trabajo`  
  Crea usuario, asigna ownership y ejecuta con privilegios mínimos compatibles con la aplicación.

- **Certificados y zona horaria**  
  *Familia:* `mapa de memoria`  
  Imágenes mínimas deben incluir explícitamente los datos de sistema que el runtime realmente necesita.

- **Inicialización y tini**  
  *Familia:* `evidencia y latencia`  
  Un init ligero puede reenviar señales y recolectar hijos cuando la aplicación no actúa correctamente como PID 1.


### Seccion: BuildKit y flujos de build (19 conceptos)

- **BuildKit**  
  *Familia:* `análisis y emisión`  
  Motor de build que usa un grafo de dependencias, ejecución paralela, caché avanzada y mounts temporales.

- **Frontend de Dockerfile**  
  *Familia:* `aislamiento sobre host`  
  La directiva syntax selecciona una versión del parser y habilita capacidades recientes.

- **Build context**  
  *Familia:* `flujo de transformación`  
  Conjunto de archivos accesibles durante build; su tamaño y estabilidad afectan rendimiento y seguridad.

- **Contextos Git y remotos**  
  *Familia:* `tejido literario`  
  BuildKit puede obtener contexto desde repositorios o URLs, fijando referencias reproducibles.

- **Multi-stage builds**  
  *Familia:* `análisis y emisión`  
  Separa compilación, pruebas y runtime, copiando solo artefactos necesarios a la imagen final.

- **Targets**  
  *Familia:* `espectro de verificación`  
  --target detiene el build en una etapa para pruebas, debugging o variantes especializadas.

- **Cache mounts**  
  *Familia:* `memoria intermedia`  
  RUN --mount=type=cache conserva caches de package managers sin incluirlos en la imagen final.

- **Secret mounts**  
  *Familia:* `árbol de recursos`  
  RUN --mount=type=secret expone credenciales temporalmente sin persistirlas en capas o argumentos.

- **SSH mounts**  
  *Familia:* `jerarquía y dependencias`  
  Permiten acceder a repositorios privados durante build sin copiar claves a la imagen.

- **Bind mounts de build**  
  *Familia:* `capas internas`  
  Proporcionan archivos a una instrucción sin incorporarlos necesariamente al resultado.

- **Cache externa**  
  *Familia:* `memoria intermedia`  
  --cache-to y --cache-from comparten resultados entre runners de CI y equipos.

- **Inline cache**  
  *Familia:* `comparativa técnica`  
  Publica metadata de caché junto a la imagen para reutilizarla desde el registry.

- **Buildx**  
  *Familia:* `análisis y emisión`  
  Extensión CLI para builders múltiples, plataformas cruzadas, drivers y exportadores de BuildKit.

- **Builders**  
  *Familia:* `flujo de transformación`  
  Instancias de BuildKit pueden usar driver docker, docker-container, Kubernetes o endpoints remotos.

- **QEMU y emulación**  
  *Familia:* `mapa de memoria`  
  Permite builds cruzados, aunque compilar nativamente suele ser más rápido y confiable.

- **Provenance**  
  *Familia:* `pasaporte del artefacto`  
  Attestations registran cómo, dónde y desde qué fuente se produjo un artefacto.

- **SBOM**  
  *Familia:* `flujo de transformación`  
  Inventario de paquetes y componentes facilita análisis de vulnerabilidades y auditoría de dependencias.

- **Reproducibilidad**  
  *Familia:* `capas internas`  
  Controla fuentes, timestamps, versiones y red para minimizar diferencias entre builds equivalentes.

- **Bake**  
  *Familia:* `pasaporte del artefacto`  
  docker buildx bake coordina múltiples targets, matrices y plataformas mediante definición declarativa.


### Seccion: Persistencia y storage (16 conceptos)

- **Writable layer y copy-on-write**  
  *Familia:* `acumulación de recursos`  
  Es adecuada para estado temporal, pero su ciclo de vida está unido al contenedor.

- **Volúmenes nombrados**  
  *Familia:* `consulta e índice`  
  Docker administra ubicación y ciclo de vida de datos persistentes independientes del contenedor.

- **Bind mounts**  
  *Familia:* `árbol de recursos`  
  Montan rutas concretas del host y ofrecen control directo a costa de menor portabilidad.

- **tmpfs mounts**  
  *Familia:* `jerarquía y dependencias`  
  Guardan datos en memoria del host y desaparecen al detener el contenedor.

- **Volume drivers**  
  *Familia:* `consulta e índice`  
  Conectan almacenamiento local, remoto o administrado mediante plugins.

- **Mount syntax**  
  *Familia:* `árbol de recursos`  
  --mount expresa tipo, origen, destino y opciones de forma más explícita que -v.

- **Read-only mounts**  
  *Familia:* `jerarquía y dependencias`  
  Evitan escrituras accidentales sobre configuración, código o datos compartidos.

- **Ownership y UID**  
  *Familia:* `mapa de memoria`  
  Los números de usuario deben coincidir con permisos del filesystem, incluso si los nombres difieren.

- **SELinux labels**  
  *Familia:* `consulta e índice`  
  Opciones de relabeling controlan acceso a bind mounts en hosts con SELinux.

- **Propagation de mounts**  
  *Familia:* `árbol de recursos`  
  Define cómo nuevos mounts se comparten entre host y contenedor en casos avanzados.

- **Backup de volúmenes**  
  *Familia:* `secuencia operativa`  
  Consiste en coordinar consistencia de la aplicación y copiar datos con metadata adecuada.

- **Restore de volúmenes**  
  *Familia:* `pasaporte del artefacto`  
  Debe validar permisos, versión de formato y compatibilidad con la aplicación que leerá los datos.

- **Bases de datos en contenedores**  
  *Familia:* `aislamiento sobre host`  
  Requieren volúmenes, límites, backups y una estrategia de operación más allá de ejecutar una imagen.

- **Logs como datos externos**  
  *Familia:* `evidencia y latencia`  
  La aplicación debe escribir a stdout o a un destino administrado, no depender de archivos efímeros internos.

- **Storage drivers**  
  *Familia:* `secuencia operativa`  
  overlay2 y alternativas determinan cómo se almacenan capas y afectan compatibilidad y rendimiento.

- **Inodos y espacio del host**  
  *Familia:* `workflow y decisiones`  
  Un daemon puede fallar por falta de inodos o espacio aunque el contenedor parezca pequeño.


### Seccion: Networking (20 conceptos)

- **Modelo de red de contenedores**  
  *Familia:* `topología y tráfico`  
  Cada contenedor obtiene interfaces, rutas y DNS según las redes a las que está conectado.

- **Bridge por defecto**  
  *Familia:* `tejido de eventos`  
  Red local creada por Engine con conectividad básica y diferencias respecto a bridges definidos por usuario.

- **User-defined bridge**  
  *Familia:* `telar relacional`  
  Ofrece DNS por nombre, aislamiento y configuración explícita para aplicaciones relacionadas.

- **Host network**  
  *Familia:* `topología y tráfico`  
  Comparte el namespace de red del host y elimina NAT, reduciendo aislamiento y portabilidad.

- **None network**  
  *Familia:* `ida y vuelta`  
  Crea el contenedor sin conectividad externa excepto loopback.

- **Overlay network**  
  *Familia:* `jerarquía y dependencias`  
  Conecta workloads a través de varios hosts en entornos compatibles con Swarm.

- **Macvlan**  
  *Familia:* `flujo de interfaz`  
  Asigna presencia directa en la red física con MAC propia y requisitos operativos específicos.

- **IPvlan**  
  *Familia:* `matriz de señales`  
  Comparte MAC del host y enruta direcciones de contenedor según el modo configurado.

- **Publicación de puertos**  
  *Familia:* `topología y tráfico`  
  -p instala reglas para mapear un puerto del host hacia un puerto del contenedor.

- **EXPOSE frente a publish**  
  *Familia:* `tejido de eventos`  
  EXPOSE documenta; publish crea conectividad desde fuera de la red Docker.

- **Bind address**  
  *Familia:* `telar relacional`  
  Publicar en 127.0.0.1 limita acceso local, mientras 0.0.0.0 expone en todas las interfaces.

- **DNS embebido**  
  *Familia:* `topología y tráfico`  
  En redes definidas por usuario, Docker resuelve nombres de servicio y aliases.

- **Service discovery**  
  *Familia:* `cola y consumidor`  
  Los consumidores deben usar nombres estables y volver a resolver cuando cambian IPs.

- **Network aliases**  
  *Familia:* `ida y vuelta`  
  Permiten varios nombres dentro de una red sin modificar el nombre global del contenedor.

- **Conexión a múltiples redes**  
  *Familia:* `topología y tráfico`  
  Un servicio puede separar tráfico público, interno y de datos mediante interfaces distintas.

- **IPAM**  
  *Familia:* `matriz de señales`  
  Configura subnets, gateways y pools evitando colisiones con redes del host o VPN.

- **Hairpin y NAT**  
  *Familia:* `ida y vuelta`  
  El camino de paquetes publicados puede atravesar reglas de traducción y afectar diagnóstico.

- **MTU**  
  *Familia:* `tejido de eventos`  
  Una MTU incorrecta produce fragmentación o fallos sutiles, especialmente sobre VPNs y overlays.

- **iptables y nftables**  
  *Familia:* `matriz de señales`  
  Docker programa reglas de forwarding y NAT que interactúan con la política del host.

- **Troubleshooting de red**  
  *Familia:* `topología y tráfico`  
  inspect, exec, ip, ss, dig y capturas permiten seguir DNS, rutas, sockets y paquetes.


### Seccion: Docker Compose (20 conceptos)

- **Compose Specification**  
  *Familia:* `ciclo de vida`  
  Modelo declarativo para servicios, redes, volúmenes, configs, secrets y relaciones de una aplicación multi-contenedor.

- **compose.yaml**  
  *Familia:* `flujo de interfaz`  
  Archivo principal donde se versiona la topología y configuración local o de integración.

- **Services**  
  *Familia:* `mapa de memoria`  
  Cada servicio define imagen o build, comando, entorno, mounts, redes, puertos y política runtime.

- **Projects**  
  *Familia:* `evidencia y latencia`  
  Un nombre de proyecto agrupa recursos y permite levantar varias copias aisladas de la misma definición.

- **docker compose up**  
  *Familia:* `ciclo de vida`  
  Crea o reconcilia servicios, redes y volúmenes y puede adjuntar logs o ejecutarse detached.

- **docker compose down**  
  *Familia:* `flujo de interfaz`  
  Detiene y elimina recursos del proyecto, preservando volúmenes nombrados salvo petición explícita.

- **build en Compose**  
  *Familia:* `despacho de runtime`  
  Conecta servicios con contextos, Dockerfiles, targets, args, caché y plataformas.

- **depends_on**  
  *Familia:* `evidencia y latencia`  
  Ordena creación y, con condiciones, puede esperar healthchecks; no reemplaza resiliencia de la aplicación.

- **Healthchecks en Compose**  
  *Familia:* `ciclo de vida`  
  Permiten expresar disponibilidad de dependencias y visualizar estado del servicio.

- **Environment y env_file**  
  *Familia:* `flujo de interfaz`  
  Inyectan configuración y tienen reglas de precedencia que deben comprenderse para evitar sorpresas.

- **Interpolation**  
  *Familia:* `evidencia y latencia`  
  Variables del shell y archivos .env sustituyen valores antes de interpretar la definición.

- **Profiles**  
  *Familia:* `diagnóstico operativo`  
  Activan subconjuntos opcionales como herramientas, mocks o observabilidad.

- **Override files**  
  *Familia:* `análisis y emisión`  
  Fusionan configuraciones base y específicas de entorno siguiendo reglas por tipo de campo.

- **extends e include**  
  *Familia:* `capas internas`  
  Reutilizan definiciones, con límites y semántica que deben mantenerse legibles.

- **Configs y secrets**  
  *Familia:* `configuración declarativa`  
  Expresan archivos de configuración o secretos como recursos en lugar de incrustarlos en la imagen.

- **Networks en Compose**  
  *Familia:* `ciclo de vida`  
  Crean segmentos y aliases para controlar qué servicios pueden descubrirse.

- **Volumes en Compose**  
  *Familia:* `flujo de interfaz`  
  Declaran persistencia nombrada, drivers y mounts por servicio.

- **Scaling**  
  *Familia:* `secuencia operativa`  
  --scale crea varias réplicas cuando el modelo del servicio y los puertos lo permiten.

- **Watch y desarrollo**  
  *Familia:* `evidencia y latencia`  
  Compose Watch sincroniza, reconstruye o reinicia servicios según cambios de archivos.

- **Logs y exec en Compose**  
  *Familia:* `ciclo de vida`  
  Comandos del proyecto agregan logs, estado y shell por servicio sin buscar IDs manualmente.


### Seccion: Seguridad de contenedores (20 conceptos)

- **Modelo de amenaza**  
  *Familia:* `mapa de memoria`  
  Distingue riesgos de imagen, build, registry, daemon, host, runtime y aplicación.

- **Daemon socket**  
  *Familia:* `topología y tráfico`  
  Acceso a /var/run/docker.sock equivale prácticamente a control privilegiado del host.

- **Root dentro del contenedor**  
  *Familia:* `aislamiento sobre host`  
  UID 0 conserva capacidades importantes y aumenta impacto de una fuga del aislamiento.

- **User namespaces**  
  *Familia:* `capas internas`  
  Mapean UIDs del contenedor a rangos no privilegiados del host.

- **Rootless mode**  
  *Familia:* `espectro de verificación`  
  Ejecuta daemon y contenedores sin privilegios root, con algunas restricciones de red y storage.

- **Linux capabilities**  
  *Familia:* `acumulación de recursos`  
  Permiten retirar privilegios específicos con --cap-drop y añadir solo los imprescindibles.

- **no-new-privileges**  
  *Familia:* `validación y decisión`  
  Impide que execve otorgue privilegios adicionales mediante bits setuid o file capabilities.

- **seccomp**  
  *Familia:* `espectro de verificación`  
  Filtra syscalls disponibles y reduce superficie de kernel accesible desde el contenedor.

- **AppArmor y SELinux**  
  *Familia:* `evidencia y latencia`  
  Políticas MAC restringen archivos, capacidades y acciones más allá de permisos Unix.

- **Filesystem read-only**  
  *Familia:* `árbol de recursos`  
  --read-only fuerza a declarar rutas writable y limita persistencia de un atacante.

- **tmpfs para escritura temporal**  
  *Familia:* `espectro de verificación`  
  Proporciona rutas mutables sin conservar datos en la capa writable.

- **Secrets en runtime**  
  *Familia:* `despacho de runtime`  
  Credenciales deben llegar desde un secret store o mount y no quedar en ENV, history o imagen.

- **Secrets durante build**  
  *Familia:* `análisis y emisión`  
  BuildKit secret mounts evitan que tokens aparezcan en capas o caché exportada.

- **Escaneo de vulnerabilidades**  
  *Familia:* `espectro de verificación`  
  Compara paquetes y metadata con bases de CVEs, pero requiere priorizar exposición y corregibilidad.

- **Firma de imágenes**  
  *Familia:* `cola y consumidor`  
  Verifica identidad del productor y que el digest aprobado no fue sustituido.

- **Políticas de admisión**  
  *Familia:* `validación y decisión`  
  Bloquean imágenes no firmadas, usuarios root, capabilities o registries no autorizados.

- **Docker Content Trust y Notary**  
  *Familia:* `aislamiento sobre host`  
  Mecanismos de firma y delegación que evolucionan hacia prácticas OCI modernas.

- **Actualización de imágenes base**  
  *Familia:* `espectro de verificación`  
  Rebuild periódico incorpora parches aunque el código de aplicación no cambie.

- **Hardened images**  
  *Familia:* `validación y decisión`  
  Reducen paquetes, privilegios y superficie, combinando provenance y mantenimiento continuo.

- **Supply chain**  
  *Familia:* `pasaporte del artefacto`  
  Protege fuentes, builder, dependencias, attestations, registry y promoción hasta runtime.


### Seccion: Observabilidad y troubleshooting (18 conceptos)

- **Logging drivers**  
  *Familia:* `evidencia y latencia`  
  Deciden dónde se envían stdout y stderr: json-file, local, journald, syslog u otros destinos.

- **Rotación de logs**  
  *Familia:* `diagnóstico operativo`  
  Evita que archivos del driver crezcan sin límite y agoten el host.

- **docker logs --since y --follow**  
  *Familia:* `aislamiento sobre host`  
  Acota tiempo y sigue eventos sin leer todo el historial.

- **Health status**  
  *Familia:* `máquina de estados`  
  inspect muestra historial, exit codes y salida de la prueba configurada.

- **Exit codes**  
  *Familia:* `planificación de trabajo`  
  El código del proceso principal ayuda a distinguir salida normal, señal, configuración o error de aplicación.

- **OOMKilled**  
  *Familia:* `cola y consumidor`  
  Indica que el kernel terminó el proceso por presión o límite de memoria.

- **Inspect de mounts**  
  *Familia:* `árbol de recursos`  
  Permite confirmar fuente, destino, modo read-only y driver realmente aplicados.

- **Inspect de red**  
  *Familia:* `topología y tráfico`  
  Muestra IPs, aliases, gateways, puertos y redes conectadas.

- **Namespace debugging**  
  *Familia:* `aislamiento sobre host`  
  nsenter y herramientas del host pueden inspeccionar procesos o red cuando la imagen no contiene utilidades.

- **Debug containers**  
  *Familia:* `capas internas`  
  Una imagen de diagnóstico temporal aporta shell, curl, dig o tcpdump sin engordar el runtime.

- **docker diff**  
  *Familia:* `acumulación de recursos`  
  Lista cambios en el filesystem writable para descubrir archivos creados o modificados.

- **docker history**  
  *Familia:* `aislamiento sobre host`  
  Muestra instrucciones y tamaños de capas, con cuidado de no interpretar metadata como contenido completo.

- **Build progress**  
  *Familia:* `análisis y emisión`  
  --progress=plain expone salida detallada y etapas que invalidaron caché.

- **Errores de pull**  
  *Familia:* `evidencia y latencia`  
  Pueden venir de credenciales, rate limits, plataforma, proxy, certificados o referencia inexistente.

- **Errores de permisos**  
  *Familia:* `diagnóstico operativo`  
  UID, ownership, bind mounts y políticas MAC suelen explicar EACCES dentro del contenedor.

- **Conectividad entre servicios**  
  *Familia:* `secuencia operativa`  
  Debe probarse por nombre y puerto interno, no usando localhost del contenedor equivocado.

- **Disco del daemon**  
  *Familia:* `evidencia y latencia`  
  docker system df y herramientas del host localizan imágenes, capas, cache y volúmenes consumiendo espacio.

- **Métricas del daemon**  
  *Familia:* `diagnóstico operativo`  
  Eventos, logs y endpoint de métricas permiten observar fallos del runtime además de la aplicación.


### Seccion: Rendimiento y recursos (14 conceptos)

- **Límites de memoria**  
  *Familia:* `memoria intermedia`  
  --memory restringe uso total y puede provocar OOM si la aplicación no ajusta heap y buffers.

- **Memory reservation**  
  *Familia:* `comparativa técnica`  
  Define una preferencia blanda usada bajo presión, distinta de un máximo estricto.

- **Swap**  
  *Familia:* `mapa de memoria`  
  La relación entre memory y memory-swap cambia si el contenedor puede paginar y cómo afecta latencia.

- **CPU shares**  
  *Familia:* `planificación de trabajo`  
  Peso relativo que solo importa cuando varios grupos compiten por CPU.

- **CPU quota y period**  
  *Familia:* `cola y consumidor`  
  Establecen un límite temporal de CPU y pueden producir throttling observable.

- **CPU sets**  
  *Familia:* `secuencia operativa`  
  Restringen ejecución a CPUs concretas para aislamiento o afinidad NUMA.

- **PIDs limit**  
  *Familia:* `planificación de trabajo`  
  Evita fork bombs y crecimiento ilimitado de procesos.

- **Block I/O**  
  *Familia:* `cola y consumidor`  
  Pesos y límites pueden controlar throughput de dispositivos compatibles.

- **Ulimits**  
  *Familia:* `tejido de eventos`  
  Ajustan file descriptors, procesos, memoria bloqueada y otros límites del proceso.

- **Page cache**  
  *Familia:* `memoria intermedia`  
  La memoria mostrada puede incluir cache compartida y requiere interpretar métricas del cgroup.

- **Startup time**  
  *Familia:* `evidencia y latencia`  
  Tamaño, inicialización, checks y dependencias influyen en velocidad de escalado.

- **Image size**  
  *Familia:* `secuencia operativa`  
  Capas pequeñas mejoran transferencia y superficie, pero no deben sacrificar diagnóstico o compatibilidad necesarios.

- **Build cache efficiency**  
  *Familia:* `despacho de runtime`  
  Contextos pequeños y capas ordenadas reducen trabajo repetido en desarrollo y CI.

- **Densidad del host**  
  *Familia:* `evidencia y latencia`  
  Límites, overcommit y perfiles reales determinan cuántos contenedores caben sin degradación.


### Seccion: Producción y ecosistema (20 conceptos)

- **Compose en producción**  
  *Familia:* `ciclo de vida`  
  Puede servir para hosts simples, pero necesita estrategia de HA, rollout, secretos y operación.

- **Docker Swarm**  
  *Familia:* `aislamiento sobre host`  
  Orquestador integrado con services, routing mesh, secrets, configs y rolling updates.

- **Kubernetes y containerd**  
  *Familia:* `capas internas`  
  Kubernetes usa runtimes CRI y no necesita el daemon Docker para ejecutar imágenes OCI.

- **Registries privados**  
  *Familia:* `tabla de estados`  
  Controlan acceso, retención, escaneo, replicación y proximidad de artefactos internos.

- **Autenticación de registry**  
  *Familia:* `pasaporte del artefacto`  
  docker login almacena o delega credenciales mediante credential helpers.

- **Mirror de registry**  
  *Familia:* `evidencia y latencia`  
  Reduce latencia y dependencia externa para pulls frecuentes.

- **Políticas de retención**  
  *Familia:* `validación y decisión`  
  Evitan crecimiento infinito sin borrar digests todavía desplegados o necesarios para rollback.

- **Promoción por digest**  
  *Familia:* `pasaporte del artefacto`  
  Mueve la misma imagen aprobada entre entornos en lugar de reconstruirla.

- **Rolling updates**  
  *Familia:* `capas internas`  
  Reemplazan réplicas gradualmente y dependen de health, capacidad y compatibilidad.

- **Blue-green**  
  *Familia:* `workflow y decisiones`  
  Mantiene dos conjuntos y cambia tráfico cuando el nuevo está validado.

- **Canary**  
  *Familia:* `pasaporte del artefacto`  
  Expone una fracción de tráfico y compara señales antes de ampliar.

- **Rollback**  
  *Familia:* `capas internas`  
  Requiere conservar imagen anterior, configuración compatible y datos reversibles.

- **CI con Docker**  
  *Familia:* `aislamiento sobre host`  
  Builders aislados producen, prueban, escanean y publican imágenes por digest.

- **DinD frente a socket mounting**  
  *Familia:* `topología y tráfico`  
  Docker-in-Docker y compartir el socket tienen riesgos y comportamientos de cache diferentes.

- **Remote builders**  
  *Familia:* `análisis y emisión`  
  Separan carga y privilegios del runner, compartiendo caché y plataformas.

- **Actualizaciones del Engine**  
  *Familia:* `pasaporte del artefacto`  
  Deben considerar compatibilidad API, storage driver, cgroups y live restore.

- **Backups del estado Docker**  
  *Familia:* `secuencia operativa`  
  No sustituyen backups de aplicación; volumes, registry y configuración requieren planes separados.

- **Runbooks operativos**  
  *Familia:* `workflow y decisiones`  
  Documentan pull, start, health, logs, rollback, limpieza y recuperación del host.

- **Licenciamiento y productos**  
  *Familia:* `pasaporte del artefacto`  
  Docker Engine, Desktop, Hub y servicios comerciales tienen alcances y políticas distintas.

- **Ecosistema OCI**  
  *Familia:* `constelación de mecanismos`  
  Herramientas de build, scan, sign, registry y runtime interoperan alrededor de estándares comunes.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Infraestructura y entrega](Grupo-Delivery) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
