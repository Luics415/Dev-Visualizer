# Linux (Linux)

> **Kernel, shell, procesos, redes, storage, hardening y contenedores.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `linux` |
| **Grupo Arquitectonico** | [Infraestructura y entrega](Grupo-Delivery) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `linux` |
| **Total de Conceptos** | **182 conceptos** |
| **Capitulos / Secciones** | **10 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/linux)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/linux-en-accion)



---

## Catalogo Sistematico de Conceptos (182)

### Seccion: Fundamentos del sistema (12 conceptos)

- **Linux: kernel y distribución**  
  *Familia:* `validación y decisión`  
  Distingue el kernel que administra recursos de la distribución que integra herramientas, paquetes, defaults y soporte.

- **Kernel space y user space**  
  *Familia:* `planificación de trabajo`  
  Separa código privilegiado del kernel de los procesos de usuario y explica la frontera de protección.

- **System calls**  
  *Familia:* `acumulación de recursos`  
  Muestra cómo un proceso solicita al kernel operaciones como abrir archivos, crear procesos o usar la red.

- **ABI, libc y utilidades**  
  *Familia:* `cola y consumidor`  
  Relaciona las llamadas del programa con libc, la ABI del sistema y las herramientas de usuario.

- **Distribuciones Linux**  
  *Familia:* `secuencia operativa`  
  Compara familias Debian, Red Hat, Arch y otras por ciclo de vida, paquetes y decisiones operativas.

- **Filesystem Hierarchy Standard**  
  *Familia:* `árbol de recursos`  
  Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad.

- **Todo es un archivo**  
  *Familia:* `jerarquía y dependencias`  
  Explica la interfaz uniforme aplicada a archivos, dispositivos, pipes, sockets y pseudo-filesystems.

- **Dispositivos en /dev**  
  *Familia:* `memoria intermedia`  
  Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers.

- **procfs: /proc**  
  *Familia:* `contratos coordinados`  
  Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real.

- **sysfs: /sys**  
  *Familia:* `análisis y emisión`  
  Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable.

- **Secuencia de arranque**  
  *Familia:* `ciclo de vida`  
  Sigue firmware, bootloader, kernel, initramfs, montaje raíz y PID 1 hasta alcanzar un sistema operativo.

- **Targets y modos de arranque**  
  *Familia:* `tabla de estados`  
  Agrupa estados operativos como multi-user, graphical, rescue y emergency mediante dependencias.


### Seccion: Shell, terminal y composición de comandos (24 conceptos)

- **Terminal, TTY y PTY**  
  *Familia:* `análisis y emisión`  
  Diferencia el emulador visible, el canal pseudo-terminal y el proceso shell que interpreta comandos.

- **Shell y Bash**  
  *Familia:* `comparativa técnica`  
  Describe al shell como lenguaje, intérprete y entorno de ejecución; Bash es una implementación concreta.

- **Cómo Bash ejecuta un comando**  
  *Familia:* `ciclo de vida`  
  Sigue lectura, tokenización, parsing, expansiones, redirecciones, búsqueda y ejecución.

- **Comando, opciones y argumentos**  
  *Familia:* `diagnóstico operativo`  
  Separa el ejecutable de sus flags y operandos para leer correctamente una línea de comandos.

- **PATH y búsqueda de comandos**  
  *Familia:* `árbol de recursos`  
  Recorre directorios de PATH y distingue builtins, funciones, aliases y binarios externos.

- **Quoting y escaping**  
  *Familia:* `flujo de ejecución`  
  Preserva caracteres literales y controla qué expansiones ocurren con comillas simples, dobles y backslash.

- **Expansiones de Bash**  
  *Familia:* `ida y vuelta`  
  Cubre brace, tilde, parámetros, comandos, aritmética, word splitting, globbing y quote removal.

- **Globbing y patrones**  
  *Familia:* `superficie de aplicación`  
  Expande patrones de nombres de archivo sin confundirlos con expresiones regulares.

- **Variables de shell y de entorno**  
  *Familia:* `flujo de transformación`  
  Distingue variables locales del shell de valores exportados que heredan los procesos hijos.

- **Parámetros posicionales**  
  *Familia:* `consulta e índice`  
  Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.

- **Exit status**  
  *Familia:* `máquina de estados`  
  Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones.

- **Operadores ;, &, && y ||**  
  *Familia:* `anatomía del concepto`  
  Controla secuencia, background y ejecución condicional basada en el código de salida.

- **Pipelines**  
  *Familia:* `evidencia y latencia`  
  Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel.

- **pipefail**  
  *Familia:* `propagación de eventos`  
  Evita que un fallo temprano quede oculto por el éxito del último comando de una tubería.

- **Redirecciones**  
  *Familia:* `topología y tráfico`  
  Envía entrada, salida y errores a archivos, dispositivos u otros descriptores.

- **File descriptors**  
  *Familia:* `capas internas`  
  Modela stdin, stdout, stderr y descriptores adicionales como referencias abiertas por proceso.

- **Command substitution**  
  *Familia:* `planificación de trabajo`  
  Inserta la salida de un comando dentro de otro después de ejecutar un subshell.

- **Process substitution**  
  *Familia:* `secuencia operativa`  
  Presenta la salida o entrada de un proceso como una ruta temporal parecida a un archivo.

- **Aliases y funciones de shell**  
  *Familia:* `cola y consumidor`  
  Encapsula comandos frecuentes y lógica reutilizable entendiendo sus límites de expansión y alcance.

- **find y xargs**  
  *Familia:* `acumulación de recursos`  
  Descubre archivos por propiedades y convierte resultados en argumentos de otros procesos con delimitación segura.

- **grep y expresiones regulares**  
  *Familia:* `validación y decisión`  
  Filtra líneas por patrones básicos o extendidos y controla contexto, recursión y códigos de salida.

- **sed y awk**  
  *Familia:* `contratos coordinados`  
  Transforma streams de texto con sustituciones, selección de campos y pequeños programas orientados a registros.

- **sort, uniq, cut, tr y wc**  
  *Familia:* `configuración declarativa`  
  Compone operaciones pequeñas para ordenar, deduplicar, cortar, traducir y contar datos.

- **jq**  
  *Familia:* `tabla de estados`  
  Consulta y transforma JSON desde la terminal manteniendo tipos y estructuras en lugar de cortar texto a ciegas.


### Seccion: Archivos, permisos e identidad (15 conceptos)

- **Usuarios, UID y GID**  
  *Familia:* `ciclo de vida`  
  Relaciona nombres legibles con identificadores numéricos que usa el kernel para decidir propiedad y acceso.

- **Grupos primarios y suplementarios**  
  *Familia:* `evidencia y latencia`  
  Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global.

- **/etc/passwd, shadow y group**  
  *Familia:* `consulta e índice`  
  Separa metadatos públicos, hashes protegidos y membresías de grupo.

- **Permisos rwx**  
  *Familia:* `comparativa técnica`  
  Evalúa lectura, escritura y ejecución para owner, group y others, con semántica distinta en directorios.

- **chmod simbólico y octal**  
  *Familia:* `ecosistema coordinado`  
  Convierte reglas como u+x y modos como 0750 en bits de permisos.

- **Propiedad con chown y chgrp**  
  *Familia:* `jerarquía y dependencias`  
  Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales.

- **umask**  
  *Familia:* `topología y tráfico`  
  Calcula permisos iniciales quitando bits de un modo solicitado al crear archivos o directorios.

- **setuid**  
  *Familia:* `análisis y emisión`  
  Ejecuta un binario con el effective UID de su propietario y exige una revisión de seguridad cuidadosa.

- **setgid**  
  *Familia:* `configuración declarativa`  
  Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos.

- **Sticky bit**  
  *Familia:* `tabla de estados`  
  Restringe borrado o renombrado dentro de directorios compartidos como /tmp al propietario adecuado.

- **ACLs**  
  *Familia:* `diagnóstico operativo`  
  Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva.

- **sudo y sudoers**  
  *Familia:* `contratos coordinados`  
  Delega comandos específicos con otra identidad, registra la acción y evita compartir la contraseña de root.

- **Linux capabilities**  
  *Familia:* `capas internas`  
  Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos.

- **PAM**  
  *Familia:* `planificación de trabajo`  
  Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio.

- **Login, sesión y shell**  
  *Familia:* `secuencia operativa`  
  Conecta autenticación, entorno, límites, directorio personal y shell inicial del usuario.


### Seccion: Procesos, señales y servicios (23 conceptos)

- **Proceso, PID y PPID**  
  *Familia:* `cola y consumidor`  
  Identifica una instancia de programa, su proceso padre y los recursos que el kernel mantiene para ella.

- **fork y exec**  
  *Familia:* `capas internas`  
  Crea un proceso hijo y reemplaza su imagen para ejecutar un programa nuevo.

- **Estados de proceso**  
  *Familia:* `máquina de estados`  
  Distingue running, sleeping, uninterruptible, stopped y zombie para diagnosticar comportamiento.

- **Process groups y sessions**  
  *Familia:* `acumulación de recursos`  
  Agrupa procesos para job control, señales de terminal y demonios independientes.

- **Señales**  
  *Familia:* `propagación de eventos`  
  Entrega notificaciones asíncronas como SIGTERM, SIGHUP, SIGINT y SIGKILL con semánticas diferentes.

- **Foreground y background jobs**  
  *Familia:* `flujo de transformación`  
  Conecta procesos a la terminal o permite que continúen mientras el shell acepta más comandos.

- **jobs, fg, bg, nohup y disown**  
  *Familia:* `flujo de ejecución`  
  Administra trabajos del shell y decide qué sucede al cerrar la sesión.

- **ps, top y htop**  
  *Familia:* `configuración declarativa`  
  Observa PID, estado, CPU, memoria, comando y relaciones para encontrar procesos problemáticos.

- **nice y renice**  
  *Familia:* `aislamiento sobre host`  
  Influye en la prioridad de CPU sin garantizar orden absoluto ni controlar I/O.

- **/proc por proceso**  
  *Familia:* `planificación de trabajo`  
  Inspecciona cmdline, status, fd, maps, limits y cgroups de un PID específico.

- **Daemons**  
  *Familia:* `análisis y emisión`  
  Ejecuta servicios de larga vida sin interacción directa con un terminal.

- **PID 1**  
  *Familia:* `árbol de recursos`  
  Inicia user space, adopta procesos huérfanos y coordina señales y apagado.

- **systemd y units**  
  *Familia:* `contratos coordinados`  
  Declara servicios, sockets, timers, mounts, paths y targets como unidades con dependencias.

- **systemctl: ciclo de vida**  
  *Familia:* `ciclo de vida`  
  Inicia, detiene, reinicia, recarga, habilita y consulta servicios sin confundir runtime con boot.

- **Dependencias y ordering en systemd**  
  *Familia:* `jerarquía y dependencias`  
  Distingue Requires/Wants de Before/After para modelar necesidad y orden por separado.

- **Service unit y tipos de arranque**  
  *Familia:* `anatomía del concepto`  
  Configura simple, exec, notify, forking, oneshot y dbus según cómo el proceso anuncia readiness.

- **EnvironmentFile y drop-ins**  
  *Familia:* `secuencia operativa`  
  Separa configuración local y overrides de la unidad instalada sin editar archivos administrados por paquetes.

- **journalctl**  
  *Familia:* `validación y decisión`  
  Consulta logs estructurados por unidad, boot, prioridad, tiempo, PID y campos.

- **systemd timers**  
  *Familia:* `ecosistema coordinado`  
  Programa trabajos con calendario, monotonic timers, persistencia y relación explícita con un service.

- **Socket activation**  
  *Familia:* `ida y vuelta`  
  Permite que systemd escuche primero y arranque el servicio cuando llega una conexión.

- **cgroups v2**  
  *Familia:* `topología y tráfico`  
  Organiza procesos jerárquicamente y distribuye CPU, memoria, I/O y cantidad de PIDs.

- **OOM killer**  
  *Familia:* `anatomía del concepto`  
  Selecciona procesos cuando no puede satisfacerse memoria y muestra por qué los límites importan.

- **Graceful shutdown**  
  *Familia:* `tabla de estados`  
  Deja de aceptar trabajo, termina solicitudes, persiste estado y sale antes del deadline.


### Seccion: Redes y acceso remoto (27 conceptos)

- **Interfaces de red**  
  *Familia:* `ida y vuelta`  
  Representa dispositivos físicos y virtuales con estado, MTU, direcciones y colas.

- **Direcciones IP y CIDR**  
  *Familia:* `superficie de aplicación`  
  Separa prefijo de red y bits de host para calcular alcance y rutas.

- **Tabla de routing**  
  *Familia:* `topología y tráfico`  
  Elige el siguiente salto mediante la coincidencia de prefijo más larga y una interfaz de salida.

- **Default gateway**  
  *Familia:* `máquina de estados`  
  Encamina destinos no cubiertos por rutas más específicas hacia un router.

- **ARP y Neighbor Discovery**  
  *Familia:* `flujo de transformación`  
  Resuelve direcciones de capa 3 a vecinos de capa 2 en IPv4 o IPv6.

- **DNS resolver**  
  *Familia:* `ecosistema coordinado`  
  Consulta cache local, configuración, servidores y registros para convertir nombres en direcciones.

- **/etc/hosts y nsswitch.conf**  
  *Familia:* `capas internas`  
  Controla fuentes y orden de resolución de nombres antes o además de DNS.

- **Sockets y puertos**  
  *Familia:* `jerarquía y dependencias`  
  Asocia procesos con endpoints de comunicación y permite demultiplexar conexiones.

- **TCP**  
  *Familia:* `flujo de ejecución`  
  Proporciona stream confiable, ordenado y controlado por conexión, flujo y congestión.

- **UDP**  
  *Familia:* `anatomía del concepto`  
  Envía datagramas sin sesión ni garantía de entrega, útil cuando la aplicación controla pérdidas o latencia.

- **Loopback y localhost**  
  *Familia:* `planificación de trabajo`  
  Permite comunicación dentro del mismo host sin atravesar una interfaz física.

- **ip addr, link y route**  
  *Familia:* `ida y vuelta`  
  Administra interfaces, direcciones y rutas con la herramienta moderna iproute2.

- **ss**  
  *Familia:* `acumulación de recursos`  
  Inspecciona sockets escuchando y conectados con estados, procesos y estadísticas.

- **ping y ICMP**  
  *Familia:* `cola y consumidor`  
  Prueba reachability y latencia aproximada sin demostrar que una aplicación concreta funciona.

- **traceroute y tracepath**  
  *Familia:* `árbol de recursos`  
  Infieren saltos y MTU observando respuestas generadas por el camino.

- **curl y wget**  
  *Familia:* `comparativa técnica`  
  Realizan solicitudes y descargas para inspeccionar DNS, TLS, headers, cuerpo y tiempos.

- **dig y resolvectl**  
  *Familia:* `propagación de eventos`  
  Consulta registros y el estado del resolver para separar fallos de DNS de problemas de red.

- **nftables**  
  *Familia:* `validación y decisión`  
  Filtra, transforma y registra paquetes con tablas, chains, rules, sets y verdicts.

- **SSH**  
  *Familia:* `memoria intermedia`  
  Crea un canal cifrado para autenticar host y usuario, ejecutar comandos y transferir datos.

- **Claves SSH**  
  *Familia:* `diagnóstico operativo`  
  Usa pares pública/privada, authorized_keys y permisos correctos en lugar de copiar secretos.

- **ssh-agent**  
  *Familia:* `flujo de transformación`  
  Mantiene claves desbloqueadas en memoria y firma desafíos sin exponer la clave privada a cada proceso.

- **known_hosts**  
  *Familia:* `análisis y emisión`  
  Protege contra suplantación verificando la identidad persistente del servidor.

- **SSH config**  
  *Familia:* `configuración declarativa`  
  Define alias, usuario, host, puerto, identidad, proxy y forwarding por destino.

- **SCP, SFTP y rsync**  
  *Familia:* `contratos coordinados`  
  Transfiere archivos; rsync sincroniza diferencias y conserva atributos con opciones explícitas.

- **Port forwarding SSH**  
  *Familia:* `consulta e índice`  
  Expone servicios mediante túneles local, remote o dynamic sin hacerlos públicos directamente.

- **TLS desde la terminal**  
  *Familia:* `flujo de ejecución`  
  Inspecciona certificado, cadena, SNI, protocolos y fechas para diagnosticar HTTPS.

- **Sincronización de hora**  
  *Familia:* `validación y decisión`  
  Mantiene reloj y zona correctos para TLS, logs, autenticación y sistemas distribuidos.


### Seccion: Almacenamiento y filesystems (19 conceptos)

- **Block devices**  
  *Familia:* `máquina de estados`  
  Exponen almacenamiento como bloques direccionables que pueden particionarse o usarse directamente.

- **GPT y particiones**  
  *Familia:* `secuencia operativa`  
  Describe regiones del dispositivo con identificadores y tipos sin crear todavía un filesystem.

- **Filesystem**  
  *Familia:* `árbol de recursos`  
  Organiza nombres, metadatos y bloques; ext4, XFS y Btrfs ofrecen compromisos diferentes.

- **VFS**  
  *Familia:* `superficie de aplicación`  
  Ofrece una interfaz común para que múltiples filesystems respondan a open, read, write y stat.

- **Inodes y dentries**  
  *Familia:* `jerarquía y dependencias`  
  Separa identidad y metadatos del archivo de los nombres usados para llegar a él.

- **Montaje**  
  *Familia:* `cola y consumidor`  
  Adjunta un filesystem a un punto del árbol global y aplica opciones operativas y de seguridad.

- **/etc/fstab**  
  *Familia:* `capas internas`  
  Declara montajes persistentes por UUID, tipo, opciones y comportamiento ante fallos.

- **df, du e inodos**  
  *Familia:* `aislamiento sobre host`  
  Diferencia espacio del filesystem, bloques referenciados por rutas y agotamiento de inodos.

- **Hard links**  
  *Familia:* `propagación de eventos`  
  Añaden otro nombre al mismo inode y conservan el contenido mientras exista al menos un enlace.

- **Symbolic links**  
  *Familia:* `ciclo de vida`  
  Guardan una ruta que puede cruzar filesystems y quedar rota si el destino cambia.

- **Journaling**  
  *Familia:* `comparativa técnica`  
  Registra metadatos o datos antes de aplicarlos para recuperar consistencia tras un crash.

- **LVM**  
  *Familia:* `acumulación de recursos`  
  Compone physical volumes, volume groups y logical volumes para redimensionar almacenamiento.

- **RAID**  
  *Familia:* `flujo de ejecución`  
  Combina discos para rendimiento o redundancia, pero no reemplaza backups independientes.

- **Swap**  
  *Familia:* `evidencia y latencia`  
  Almacena páginas frías fuera de RAM y afecta latencia, presión y comportamiento del OOM.

- **Quotas**  
  *Familia:* `análisis y emisión`  
  Limita bloques o inodos por usuario, grupo o proyecto para evitar monopolizar un filesystem.

- **File locks**  
  *Familia:* `topología y tráfico`  
  Coordina procesos mediante locks advisory o mandatory entendiendo alcance y liberación.

- **tmpfs**  
  *Familia:* `contratos coordinados`  
  Guarda archivos en memoria y swap con ciclo de vida temporal y tamaño limitado.

- **tar y compresión**  
  *Familia:* `ecosistema coordinado`  
  Empaqueta árboles y luego comprime streams, conservando permisos y rutas según opciones.

- **Backups y restauración**  
  *Familia:* `memoria intermedia`  
  Distingue copia, retención, verificación y prueba de restore con objetivos de recuperación.


### Seccion: Observabilidad y troubleshooting (18 conceptos)

- **Logs del sistema**  
  *Familia:* `evidencia y latencia`  
  Correlaciona mensajes de aplicaciones, servicios y kernel por tiempo, unidad y request-id.

- **dmesg**  
  *Familia:* `superficie de aplicación`  
  Lee el ring buffer del kernel para detectar drivers, hardware, OOM, mounts y fallos de arranque.

- **CPU y load average**  
  *Familia:* `planificación de trabajo`  
  Compara utilización por core con procesos runnable o bloqueados en I/O.

- **Memoria virtual**  
  *Familia:* `memoria intermedia`  
  Separa espacio virtual, memoria residente, shared, anonymous, mappings y swap.

- **Page cache**  
  *Familia:* `comparativa técnica`  
  Acelera lecturas y agrupa escrituras usando RAM libre como caché recuperable.

- **I/O y latencia de disco**  
  *Familia:* `ida y vuelta`  
  Observa throughput, queue depth, utilization y await para localizar saturación.

- **Open files y lsof**  
  *Familia:* `cola y consumidor`  
  Relaciona procesos con archivos, sockets, cwd, libraries y descriptores abiertos.

- **strace**  
  *Familia:* `diagnóstico operativo`  
  Observa system calls, errores y tiempos para localizar la frontera donde un proceso falla o espera.

- **perf y profiling**  
  *Familia:* `secuencia operativa`  
  Muestrea CPU, call stacks y eventos de hardware para encontrar trabajo costoso.

- **Core dumps**  
  *Familia:* `ciclo de vida`  
  Capturan memoria y registros de un proceso al fallar para analizarlos con debugger.

- **Límites de recursos**  
  *Familia:* `configuración declarativa`  
  Consulta y ajusta file descriptors, procesos, stack, core y otros límites por sesión o servicio.

- **Agotamiento de file descriptors**  
  *Familia:* `validación y decisión`  
  Identifica leaks o límites bajos cuando aparecen errores EMFILE o conexiones rechazadas.

- **Disco lleno vs inodos llenos**  
  *Familia:* `tabla de estados`  
  Distingue falta de bloques de falta de nombres disponibles y encuentra el directorio responsable.

- **Diagnóstico DNS**  
  *Familia:* `topología y tráfico`  
  Verifica configuración, cache, autoridad, registros, TTL y conectividad antes de culpar a la aplicación.

- **Diagnóstico de servicio**  
  *Familia:* `jerarquía y dependencias`  
  Revisa status, exit code, journal, unidad, permisos, puertos, dependencias y recursos.

- **Diagnóstico de red**  
  *Familia:* `ecosistema coordinado`  
  Sigue link, IP, route, DNS, socket, firewall, TLS y aplicación en orden.

- **Boot recovery**  
  *Familia:* `aislamiento sobre host`  
  Usa targets rescue/emergency, kernel cmdline y logs del boot anterior para recuperar un host.

- **Log rotation**  
  *Familia:* `máquina de estados`  
  Rota, comprime, retiene y reabre logs sin perder espacio ni dejar procesos escribiendo archivos borrados.


### Seccion: Seguridad y hardening (14 conceptos)

- **Principio de mínimo privilegio**  
  *Familia:* `consulta e índice`  
  Reduce usuarios, grupos, capabilities, rutas y operaciones disponibles a cada proceso.

- **Actualizaciones de seguridad**  
  *Familia:* `diagnóstico operativo`  
  Aplica parches con inventario, ventana, prueba, reboot cuando corresponde y verificación posterior.

- **Hardening de SSH**  
  *Familia:* `aislamiento sobre host`  
  Desactiva métodos innecesarios, limita usuarios, protege claves y conserva una ruta segura de recuperación.

- **Firewall default deny**  
  *Familia:* `flujo de transformación`  
  Permite solo flujos conocidos y documentados en lugar de bloquear casos aislados.

- **SELinux y AppArmor**  
  *Familia:* `memoria intermedia`  
  Añaden mandatory access control para restringir procesos incluso si permisos Unix permiten acceso.

- **auditd**  
  *Familia:* `configuración declarativa`  
  Registra eventos de seguridad y cambios sensibles con reglas y contexto de identidad.

- **Gestión de secretos**  
  *Familia:* `propagación de eventos`  
  Evita secretos en argumentos, repositorios, imágenes y logs; usa archivos protegidos o stores dedicados.

- **Integridad de archivos**  
  *Familia:* `árbol de recursos`  
  Detecta cambios inesperados en binarios y configuración mediante hashes, paquetes firmados o medición.

- **seccomp**  
  *Familia:* `flujo de ejecución`  
  Filtra system calls disponibles para reducir la superficie del kernel expuesta a un proceso.

- **Namespaces**  
  *Familia:* `capas internas`  
  Aíslan vistas de mounts, PIDs, red, usuarios, IPC, UTS, cgroups y tiempo.

- **sysctl de seguridad**  
  *Familia:* `comparativa técnica`  
  Ajusta parámetros de red, memoria y kernel con pruebas y documentación del riesgo mitigado.

- **Root y capabilities**  
  *Familia:* `anatomía del concepto`  
  Evita ejecutar todo como UID 0 cuando basta una capacidad o permiso específico.

- **Fail2ban y rate limits**  
  *Familia:* `ecosistema coordinado`  
  Reacciona a patrones repetidos sin reemplazar autenticación fuerte, firewall ni observabilidad.

- **Backups protegidos**  
  *Familia:* `análisis y emisión`  
  Aísla credenciales, retención e inmutabilidad para que el mismo incidente no destruya producción y copias.


### Seccion: Paquetes, scripting y automatización (15 conceptos)

- **Package managers**  
  *Familia:* `ciclo de vida`  
  Resuelven dependencias, verifican firmas, mantienen una base local y ejecutan scripts de instalación.

- **Repositories y firmas**  
  *Familia:* `consulta e índice`  
  Confirman procedencia de metadatos y paquetes antes de incorporarlos al sistema.

- **Actualizar sin romper**  
  *Familia:* `flujo de transformación`  
  Separa refresh de metadata, upgrade, cambios de configuración, servicios reiniciados y rollback.

- **Consultas de paquetes**  
  *Familia:* `tabla de estados`  
  Encuentra qué paquete instaló un archivo, qué versión está activa y qué dependencias existen.

- **Shebang**  
  *Familia:* `comparativa técnica`  
  Selecciona el intérprete que ejecutará un script y afecta portabilidad y entorno.

- **set -euo pipefail**  
  *Familia:* `diagnóstico operativo`  
  Endurece ciertos fallos de scripts, pero requiere comprender contextos donde -e no se comporta intuitivamente.

- **Funciones y argumentos de scripts**  
  *Familia:* `máquina de estados`  
  Modela entradas, defaults, validación y códigos de salida como una interfaz estable.

- **trap y cleanup**  
  *Familia:* `aislamiento sobre host`  
  Libera archivos temporales, locks y procesos hijos ante salida normal, error o señal.

- **Archivos temporales seguros**  
  *Familia:* `árbol de recursos`  
  Usa mktemp, permisos restrictivos y cleanup para evitar colisiones y ataques de enlace.

- **Cron**  
  *Familia:* `propagación de eventos`  
  Programa comandos con entorno mínimo, expresión de tiempo, usuario y salida que debe observarse.

- **Timers de systemd para automatización**  
  *Familia:* `validación y decisión`  
  Ofrecen calendario, persistencia, jitter, dependencias y logs integrados con units.

- **Scripts idempotentes**  
  *Familia:* `topología y tráfico`  
  Convergen al mismo estado aunque se repitan después de un fallo parcial.

- **Automatización remota por SSH**  
  *Familia:* `memoria intermedia`  
  Ejecuta comandos con inventario, host keys, timeouts, paralelismo controlado y resultados claros.

- **Configuration management**  
  *Familia:* `configuración declarativa`  
  Declara estado deseado de paquetes, archivos, usuarios y servicios en múltiples hosts.

- **Backups automatizados**  
  *Familia:* `evidencia y latencia`  
  Incluyen lock, snapshot consistente, transferencia, retención, cifrado, métricas y prueba de restore.


### Seccion: Virtualización, contenedores y aislamiento (15 conceptos)

- **Máquinas virtuales vs contenedores**  
  *Familia:* `aislamiento sobre host`  
  Compara guest kernel y hardware virtual con procesos aislados que comparten el kernel del host.

- **chroot**  
  *Familia:* `superficie de aplicación`  
  Cambia la raíz visible de paths, pero no proporciona por sí solo un límite de seguridad completo.

- **Namespaces de contenedor**  
  *Familia:* `acumulación de recursos`  
  Aíslan procesos, mounts, red, usuarios, IPC y hostname para construir una vista privada.

- **cgroups en contenedores**  
  *Familia:* `capas internas`  
  Miden y limitan CPU, memoria, I/O y PIDs independientemente de la vista aislada.

- **Imágenes y layers**  
  *Familia:* `anatomía del concepto`  
  Representan un root filesystem inmutable compuesto por capas direccionadas por contenido.

- **Overlay filesystem**  
  *Familia:* `jerarquía y dependencias`  
  Combina layers de solo lectura con una capa escribible para presentar un árbol unificado.

- **OCI runtime**  
  *Familia:* `propagación de eventos`  
  Crea el proceso del contenedor a partir de una especificación estándar de filesystem, namespaces y recursos.

- **veth, bridge y network namespace**  
  *Familia:* `ida y vuelta`  
  Conecta la pila de red aislada del contenedor con el host y otras redes.

- **Capabilities y seccomp en contenedores**  
  *Familia:* `topología y tráfico`  
  Reduce privilegios y system calls aunque el proceso se llame root dentro del namespace.

- **Bind mounts y volumes**  
  *Familia:* `árbol de recursos`  
  Proyectan datos externos dentro del contenedor con propiedad, permisos y ciclo de vida explícitos.

- **Rootless containers**  
  *Familia:* `contratos coordinados`  
  Mapean identidades mediante user namespaces para no requerir root real en el host.

- **PID 1 dentro del contenedor**  
  *Familia:* `ciclo de vida`  
  Debe recoger zombies, reenviar señales y terminar correctamente durante deploys.

- **Límites y requests de recursos**  
  *Familia:* `flujo de transformación`  
  Evitan que un workload monopolice el host y permiten planificar capacidad.

- **Inspección de namespaces**  
  *Familia:* `aislamiento sobre host`  
  Usa nsenter, unshare y /proc para entender qué vista observa un proceso.

- **Cuándo usar VM o contenedor**  
  *Familia:* `comparativa técnica`  
  Decide por aislamiento, kernel, compatibilidad, densidad, operación y modelo de amenazas.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Infraestructura y entrega](Grupo-Delivery) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
