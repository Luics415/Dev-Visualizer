import type { QuizQuestion } from "@/data/quizTypes";

export const linuxQuestions: QuizQuestion[] = [
  {
    id: "linux-q-01",
    collectionId: "linux",
    question: "¿Qué representa la métrica de 'Load Average' (a 1, 5 y 15 minutos) devuelta por herramientas como 'uptime' o 'top' en Linux?",
    options: [
      "El porcentaje exacto de uso de memoria RAM consumido por procesos de usuario.",
      "El número promedio de procesos concurrentes en estado R (Running/Runnable compitiendo por CPU) MÁS los procesos en estado D (Uninterruptible Sleep, esperando típicamente por I/O de disco).",
      "La temperatura media de los núcleos de procesamiento en grados Celsius.",
      "La cantidad de paquetes TCP transmitidos por segundo en la interfaz de red."
    ],
    correctAnswerIndex: 1,
    explanation: "A diferencia de Unix clásico que solo contaba procesos en CPU, Linux suma procesos en ejecución activa (R) y procesos bloqueados en suspensión no interrumpible (D, como esperando lecturas a discos lentos o NFS). Por eso un load alto no siempre significa saturación de CPU, sino posible cuello de botella en I/O.",
    topic: "Monitoreo y Diagnóstico",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-02",
    collectionId: "linux",
    question: "¿Cuál es la diferencia crítica entre la señal 'SIGKILL' (9) y 'SIGTERM' (15)?",
    options: [
      "SIGKILL reinicia el equipo y SIGTERM solo apaga la pantalla.",
      "SIGTERM es una solicitud de terminación ordenada que el proceso puede interceptar, manejar o ignorar para guardar estado; SIGKILL es procesada directamente por el Kernel y no puede ser capturada, bloqueada ni ignorada por ningún proceso.",
      "SIGKILL solo puede ser enviada por el usuario 'nobody'.",
      "SIGTERM aborta el proceso de inmediato sin liberar memoria."
    ],
    correctAnswerIndex: 1,
    explanation: "SIGTERM (15) es la señal por defecto para apagado graceful: da oportunidad al proceso de cerrar conexiones, flush de archivos y liberar recursos. SIGKILL (9) y SIGSTOP (19) son manejadas estrictamente por el kernel; el proceso destinatario nunca las recibe y es eliminado de inmediato.",
    topic: "Señales y Procesos",
    difficulty: "básico"
  },
  {
    id: "linux-q-03",
    collectionId: "linux",
    question: "¿Qué es un 'Zombie Process' (proceso zombi, estado Z) y cómo se elimina del sistema?",
    options: [
      "Un proceso malicioso que se propaga por la red local infectando otros nodos.",
      "Un proceso que ya completó su ejecución y liberó su memoria, pero retiene su entrada en la tabla de procesos (PID) esperando que su proceso padre invoque 'wait()' o 'waitpid()' para leer su código de salida.",
      "Un hilo que consume el 100% de CPU indefinidamente.",
      "Un archivo temporal que no puede borrarse con rm -f."
    ],
    correctAnswerIndex: 1,
    explanation: "Un zombie no consume CPU ni memoria, solo una entrada en la Process Table. Se elimina cuando el padre llama a wait() para cosechar su estado. Si el padre muere o ignora al hijo, el proceso init (PID 1 / systemd) adopta al zombi (reparenting) y hace wait() automáticamente.",
    topic: "Ciclo de Vida de Procesos",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-04",
    collectionId: "linux",
    question: "¿Qué primitivas del Kernel de Linux constituyen la base tecnológica fundamental de los contenedores Docker y OCI?",
    options: [
      "Emulación de BIOS y drivers virtuales de tarjeta gráfica en QEMU.",
      "Linux Namespaces (aislamiento de recursos: mount, pid, net, ipc, uts, user) y Cgroups (Control Groups para restricción y contabilidad de recursos: CPU, memoria, I/O).",
      "Sistemas de archivos FAT32 con permisos NTFS.",
      "Máquinas virtuales KVM con kernels invitados completos."
    ],
    correctAnswerIndex: 1,
    explanation: "Un contenedor no es una máquina virtual: es un proceso estándar de Linux. Los Namespaces crean la ilusión de aislamiento (lo que el proceso puede VER: su propio árbol de PIDs, interfaces de red, puntos de montaje), y los Cgroups dictan lo que puede USAR (límites de RAM, CPU, I/O).",
    topic: "Contenedores y Kernel",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-05",
    collectionId: "linux",
    question: "¿Por qué el mecanismo de notificación de eventos 'epoll' escala órdenes de magnitud mejor que 'select' o 'poll' en servidores de alta concurrencia (como Nginx o Node.js)?",
    options: [
      "Porque epoll comprime los paquetes IP utilizando compresión gzip.",
      "Porque select y poll requieren pasar un array completo de descriptores de archivo al kernel y escanearlos linealmente O(N) en cada llamada; epoll registra los FDs en un árbol Rojo-Negro en el kernel y devuelve solo los descriptores listos en una lista enlazada O(1).",
      "Porque epoll ejecuta el código directamente en la tarjeta de red sin pasar por la CPU.",
      "Porque epoll solo admite sockets UDP y select solo sockets TCP."
    ],
    correctAnswerIndex: 1,
    explanation: "epoll (event poll) resuelve el problema C10K: se registran los file descriptors una sola vez en el kernel (epoll_ctl); cuando ocurre un evento de I/O, el kernel lo agrega a una cola de listos (ready list) y epoll_wait() retorna únicamente los FDs activos en tiempo constante O(eventos activos).",
    topic: "I/O Multiplexing y Redes",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-06",
    collectionId: "linux",
    question: "¿Qué es un 'Inode' (nodo índice) en los sistemas de archivos de Linux (como ext4 o XFS)?",
    options: [
      "El nombre legible del archivo tal como aparece en el explorador gráfico.",
      "Una estructura de datos que almacena todos los metadatos del archivo (permisos, propietario, tamaño, timestamps, punteros a bloques de datos en disco), excepto el nombre del archivo y el contenido de los datos.",
      "Un sector defectuoso del disco duro marcado por el controlador SATA.",
      "Una clave criptográfica para descifrar particiones LUKS."
    ],
    correctAnswerIndex: 1,
    explanation: "El inodo contiene los metadatos y ubicaciones físicas de los bloques de datos. El nombre del archivo se almacena en las entradas de directorio (dentries), que asocian un nombre con un número de inodo. Por esto, múltiples enlaces duros (hard links) pueden apuntar al mismo inodo con distintos nombres.",
    topic: "Sistemas de Archivos",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-07",
    collectionId: "linux",
    question: "¿Cuál es la diferencia funcional entre un enlace duro (Hard Link) y un enlace simbólico (Soft/Symbolic Link)?",
    options: [
      "Un hard link se guarda en la memoria RAM y un soft link en el disco duro.",
      "Un hard link es una referencia directa al mismo número de inodo en el mismo sistema de archivos (comparten datos y metadatos; si se borra el original los datos siguen accesibles); un soft link es un archivo independiente cuyo contenido es la ruta textual hacia otro archivo.",
      "Un soft link no puede apuntar a directorios.",
      "Los hard links expiran automáticamente después de 30 días."
    ],
    correctAnswerIndex: 1,
    explanation: "Un hard link incrementa el contador de enlaces del inodo existente (no puede cruzar distintos filesystems ni apuntar a directorios para evitar ciclos). Un symlink es un archivo nuevo con su propio inodo que contiene un puntero a una ruta, pudiendo cruzar particiones o quedar roto si el destino se borra.",
    topic: "Sistemas de Archivos",
    difficulty: "básico"
  },
  {
    id: "linux-q-08",
    collectionId: "linux",
    question: "¿Qué ocurre durante una llamada al sistema 'fork()' gracias a la técnica Copy-On-Write (COW)?",
    options: [
      "Se copia físicamente toda la memoria RAM del proceso padre en un nuevo espacio contiguo.",
      "El kernel crea el proceso hijo compartiendo las mismas páginas de memoria virtual del padre marcadas como de solo lectura; las páginas físicas solo se duplican cuando el padre o el hijo intentan escribir en ellas.",
      "El proceso padre se bloquea hasta que el hijo termina su ciclo de vida.",
      "Se suspende el scheduler para asignar un nuevo PID."
    ],
    correctAnswerIndex: 1,
    explanation: "Copiar megabytes o gigabytes de RAM en cada fork sería ineficiente. Con COW, el kernel solo copia las tablas de páginas y marca las entradas como read-only; si alguno de los dos procesos escribe en una página, la MMU dispara un page fault y el kernel copia esa página individual en ese instante.",
    topic: "Memoria Virtual y Procesos",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-09",
    collectionId: "linux",
    question: "¿Cómo decide el 'OOM Killer' (Out-Of-Memory Killer) del Kernel de Linux qué proceso terminar cuando se agota la memoria del sistema?",
    options: [
      "Mata siempre al proceso con el PID más bajo.",
      "Calcula una puntuación ('oom_score') basada en el porcentaje de memoria RAM consumida y ponderada por la variable de ajuste '/proc/[pid]/oom_score_adj', seleccionando el proceso con mayor puntaje que cause menor daño al sistema.",
      "Termina aleatoriamente cualquier proceso de usuario cada 10 segundos.",
      "Detiene el kernel y muestra una pantalla azul con código de pánico."
    ],
    correctAnswerIndex: 1,
    explanation: "El kernel calcula 'badness': favorece matar procesos que consumen mucha memoria y tienen poco tiempo de vida, protegiendo procesos críticos del sistema. El administrador puede proteger procesos sensibles (como sshd o bases de datos) asignando un valor negativo en oom_score_adj.",
    topic: "Kernel y Gestión de Memoria",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-10",
    collectionId: "linux",
    question: "¿Qué función tiene el permiso especial 'Sticky Bit' cuando se aplica sobre un directorio (ej. '/tmp', permisos 1777)?",
    options: [
      "Impide que los archivos del directorio sean leídos por usuarios no autenticados.",
      "Permite a cualquier usuario crear y escribir archivos en el directorio, pero prohíbe que un usuario elimine o renombre archivos que pertenezcan a otros usuarios (solo el dueño del archivo, el dueño del directorio o root pueden borrarlos).",
      "Fuerza a que todos los archivos hereden el grupo del directorio padre.",
      "Mantiene el directorio cargado de forma permanente en la memoria swap."
    ],
    correctAnswerIndex: 1,
    explanation: "En un directorio compartido como /tmp donde todos tienen permisos de escritura (chmod 777), cualquier usuario podría borrar los archivos de otros. El sticky bit (t en 'drwxrwxrwt') restringe la eliminación únicamente al propietario del archivo o al superusuario.",
    topic: "Permisos y Seguridad",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-11",
    collectionId: "linux",
    question: "¿Qué efecto tiene el bit 'SetUID' (SUID, chmod u+s) configurado en un archivo ejecutable (como '/usr/bin/passwd')?",
    options: [
      "Permite que el archivo se ejecute sin consumir memoria de swap.",
      "Hace que el proceso se ejecute con los privilegios del propietario del archivo ejecutable (frecuentemente root) en lugar de los privilegios del usuario que lo invoca.",
      "Impide que el archivo sea modificado incluso por el usuario root.",
      "Oculta el código fuente del programa para evitar ingeniería inversa."
    ],
    correctAnswerIndex: 1,
    explanation: "SUID permite a usuarios ordinarios ejecutar programas que requieren temporalmente privilegios elevados (por ejemplo, 'passwd' necesita escribir en '/etc/shadow', pero solo debe permitir cambiar la propia contraseña bajo reglas estrictas).",
    topic: "Permisos y Seguridad",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-12",
    collectionId: "linux",
    question: "¿Cuál es el rol de los sistemas de archivos pseudo-virtuales '/proc' y '/sys' en Linux?",
    options: [
      "Almacenan archivos de configuración estáticos creados durante la instalación de la distribución.",
      "Son interfaces del kernel en memoria (no residen en disco): '/proc' expone el estado y metadatos de procesos en ejecución y variables del kernel; '/sys' expone el modelo unificado de dispositivos de hardware, controladores y subsistemas del kernel.",
      "Son particiones cifradas para copias de seguridad automáticas del sistema.",
      "Contienen los binarios del compilador GCC y las bibliotecas compartidas glibc."
    ],
    correctAnswerIndex: 1,
    explanation: "/proc (procfs) y /sys (sysfs) son generados dinámicamente por el kernel. Leer '/proc/meminfo' o escribir en '/proc/sys/vm/drop_caches' interactúa directamente con estructuras de datos vivas del kernel sin acceso físico al almacenamiento.",
    topic: "Virtual Filesystems e Interfaces",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-13",
    collectionId: "linux",
    question: "¿Qué ventaja revolucionaria ofrece la tecnología eBPF (Extended Berkeley Packet Filter) en el Kernel de Linux moderno?",
    options: [
      "Permite formatear discos duros sin necesidad de reiniciar la computadora.",
      "Permite ejecutar programas seguros y verificados por el kernel en respuesta a eventos del sistema (syscalls, puntos de traza, paquetes de red XDP) con rendimiento nativo de máquina sin necesidad de modificar el código del kernel ni cargar módulos de kernel inestables.",
      "Reemplaza el gestor de paquetes apt por un sistema basado en torrents.",
      "Emula juegos de Windows directamente en el framebuffer de Linux."
    ],
    correctAnswerIndex: 1,
    explanation: "eBPF convierte el kernel en un sistema programable dinámicamente. Un verificador estático en el kernel comprueba que el programa no pueda causar un panic o bucles infinitos, permitiendo observabilidad de alto rendimiento (BCC/bpftrace), redes avanzadas (Cilium) y seguridad en tiempo real.",
    topic: "Kernel y eBPF",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-14",
    collectionId: "linux",
    question: "¿Por qué el estado 'TIME_WAIT' es un comportamiento normal y necesario en una conexión TCP cerrada por el cliente?",
    options: [
      "Para esperar a que el usuario presione una tecla en la terminal.",
      "Para asegurar que el último ACK enviado llegó al extremo remoto (retransmitiendo si es necesario) y permitir que paquetes rezagados o duplicados en la red expiren sin corromper una nueva conexión abierta en la misma tupla de IP y puerto.",
      "Para que el sistema operativo sincronice la hora con servidores NTP.",
      "Porque el socket está esperando que el Garbage Collector libere el buffer."
    ],
    correctAnswerIndex: 1,
    explanation: "TIME_WAIT dura 2 * MSL (Maximum Segment Lifetime, ~60 segundos). Previene que paquetes extraviados de una conexión cerrada interfieran con una nueva conexión encarnada con el mismo puerto e IP local/remota, y garantiza que el cierre bidireccional finalice correctamente.",
    topic: "Redes y Sockets TCP",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-15",
    collectionId: "linux",
    question: "¿Qué optimización realiza la llamada al sistema 'sendfile()' en operaciones de transferencia de archivos por red (Zero-Copy)?",
    options: [
      "Comprime los datos en formato tar.gz antes de transmitirlos.",
      "Transfiere datos directamente desde el Page Cache del kernel al socket de red en espacio de kernel, eliminando dos transferencias de memoria redundantes entre el espacio de kernel y los búferes de usuario.",
      "Envía los datos utilizando ondas de radio Wi-Fi directas.",
      "Transmite los datos sin verificar sumas de comprobación TCP."
    ],
    correctAnswerIndex: 1,
    explanation: "En la transferencia tradicional (read + write), los datos viajan: Disco -> Kernel Page Cache -> Búfer de Usuario -> Kernel Socket Buffer -> Tarjeta de Red (4 copias y 4 cambios de contexto). Con sendfile, los datos viajan del Page Cache directo al descriptor de red sin cruzar al espacio de usuario.",
    topic: "Zero-Copy e I/O",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-16",
    collectionId: "linux",
    question: "¿Qué es 'io_uring' introducido en Linux 5.1 y cómo supera las limitaciones de las interfaces de I/O asíncrono tradicionales (AIO)?",
    options: [
      "Un protocolo de sonido para reproducir audio en streaming en alta definición.",
      "Una interfaz de I/O asíncrona basada en dos búferes circulares compartidos en memoria (Submission Queue y Completion Queue), que permite enviar lotes de operaciones y recibir resultados con cero llamadas al sistema (syscalls) mediante modos de sondeo del kernel.",
      "Un comando para formatear particiones con formato ext2.",
      "Un servidor DNS en memoria integrado en systemd."
    ],
    correctAnswerIndex: 1,
    explanation: "io_uring es la interfaz de I/O más rápida de Linux. Al compartir dos ring-buffers entre espacio de usuario y kernel, una aplicación puede encolar cientos de operaciones de lectura/escritura y completarlas sin la penalización de context switch por llamada al sistema.",
    topic: "I/O Avanzado y Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-17",
    collectionId: "linux",
    question: "¿Cuál es la diferencia entre un 'Page Fault menor' (Minor Page Fault) y un 'Page Fault mayor' (Major Page Fault)?",
    options: [
      "El menor ocurre en sistemas de 32 bits y el mayor en 64 bits.",
      "Un Minor Page Fault ocurre cuando la página referenciada ya reside en la memoria física (ej. en el Page Cache o compartida por COW) y solo requiere actualizar las tablas de páginas; un Major Page Fault exige leer los datos directamente desde el almacenamiento secundario (disco/swap), bloqueando el proceso.",
      "El menor es un aviso informativo y el mayor es un fallo irrecuperable con kernel panic.",
      "Un Major Page Fault solo ocurre si la tarjeta gráfica pierde conexión con el bus PCIe."
    ],
    correctAnswerIndex: 1,
    explanation: "Los fallos de página menores son muy rápidos porque no implican I/O físico (la página ya está en RAM por otra razón). Los fallos de página mayores introducen latencias enormes (milisegundos) porque el CPU debe esperar a que el controlador de disco transfiera los bloques a la memoria física.",
    topic: "Memoria Virtual y Paginación",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-18",
    collectionId: "linux",
    question: "¿Qué información y funcionalidad expone el comando 'strace' durante la depuración de aplicaciones?",
    options: [
      "Muestra el código fuente original escrito por los desarrolladores.",
      "Intercepta y registra en tiempo real todas las llamadas al sistema (system calls) que realiza un proceso, junto con sus argumentos, valores de retorno y señales recibidas.",
      "Mide la temperatura del disco duro mediante sensores SMART.",
      "Verifica la validez de los certificados SSL instalados en el sistema."
    ],
    correctAnswerIndex: 1,
    explanation: "strace se apoya en la llamada al sistema 'ptrace'. Es la herramienta de diagnóstico más poderosa para resolver problemas del tipo 'no such file or directory', 'permission denied' o bloqueos inesperados, mostrando cada interacción del proceso con el kernel de Linux.",
    topic: "Herramientas de Diagnóstico",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-19",
    collectionId: "linux",
    question: "¿Cómo utiliza el Kernel de Linux la memoria RAM no utilizada por las aplicaciones mediante el 'Page Cache'?",
    options: [
      "La apaga electrónicamente para ahorrar energía eléctrica.",
      "Utiliza toda la memoria libre para almacenar en caché bloques de archivos de disco leídos y escritos recientemente; si una aplicación solicita más memoria, el kernel descarta inmediatamente páginas limpias del caché sin degradar al usuario.",
      "Asigna la memoria libre a la minería de criptomonedas del sistema operativo.",
      "Rellena la memoria con ceros para acelerar reinicios futuros."
    ],
    correctAnswerIndex: 1,
    explanation: "En Linux, 'la memoria RAM libre es memoria desperdiciada'. El Page Cache mantiene copias de archivos leídos y búferes de escritura en RAM. Si las aplicaciones demandan memoria, el kernel reclama estas páginas al instante.",
    topic: "Kernel y Gestión de Memoria",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-10",
    collectionId: "linux",
    question: "¿Qué diferencia existe entre un socket de dominio UNIX (UNIX domain socket) y un socket TCP local (127.0.0.1)?",
    options: [
      "Los sockets de dominio UNIX se transmiten por fibra óptica y los TCP por cable de cobre.",
      "Los sockets de dominio UNIX operan íntegramente dentro de la memoria del kernel mediante buffers sin la sobrecarga de la pila de red TCP/IP (sin checksums, sin empaquetamiento ni handshake), ofreciendo hasta el doble de throughput y control de acceso vía permisos de archivo POSIX.",
      "Los sockets TCP solo pueden enviar caracteres alfanuméricos.",
      "No existe diferencia; son sinónimos absolutos en Linux."
    ],
    correctAnswerIndex: 1,
    explanation: "Para comunicación inter-proceso (IPC) en la misma máquina física (ej. Nginx hacia Gunicorn o PHP-FPM), los Unix Domain Sockets son significativamente más rápidos que TCP loopback porque evitan el procesamiento de cabeceras de red, confirmaciones ACK y cálculo de sumas de verificación.",
    topic: "Inter-Process Communication (IPC)",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-21",
    collectionId: "linux",
    question: "¿Qué hace la llamada al sistema 'mmap()' con el flag 'MAP_ANONYMOUS'?",
    options: [
      "Borra el historial de comandos del usuario en la sesión de bash.",
      "Asigna un bloque de memoria virtual directamente desde el kernel sin respaldo de ningún archivo en disco (usado por asignadores de memoria como malloc para solicitudes de memoria grandes).",
      "Oculta la dirección IP de la máquina detrás de un proxy Tor.",
      "Asigna permisos de lectura a usuarios no registrados en /etc/passwd."
    ],
    correctAnswerIndex: 1,
    explanation: "Mientras que un mmap regular mapea un archivo en memoria, un mapeo anónimo (MAP_ANONYMOUS) reserva memoria virtual inicializada en ceros sin vincularla a un file descriptor, técnica estándar usada por glibc para reservas que superan el umbral de brk/sbrk.",
    topic: "Llamadas al Sistema y Memoria",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-22",
    collectionId: "linux",
    question: "¿Qué función cumple el espacio de nombres 'PID Namespace' en Linux?",
    options: [
      "Asigna un número de serie único al procesador físico del servidor.",
      "Aísla el árbol de identificadores de procesos: un proceso puede ser el PID 1 dentro de su propio namespace de contenedor mientras tiene un PID ordinario (ej. 45892) en el namespace global del host.",
      "Elimina todos los hilos huérfanos cada 60 segundos.",
      "Restringe la ejecución de scripts en lenguaje Python."
    ],
    correctAnswerIndex: 1,
    explanation: "Los namespaces de PID son anidados y jerárquicos. El primer proceso creado en un nuevo PID namespace se convierte en el PID 1 local del contenedor (actuando como init y adoptando huérfanos locales), invisible a otros contenedores y aislado del host.",
    topic: "Namespaces y Contenedores",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-23",
    collectionId: "linux",
    question: "¿Qué garantiza el uso de la llamada 'fsync(fd)' tras realizar operaciones de escritura con 'write()'?",
    options: [
      "Comprueba la ortografía del texto escrito en el archivo.",
      "Fuerza a que todos los datos y metadatos modificados retenidos en el Page Cache del kernel se escriban físicamente en el medio de almacenamiento no volátil (disco duro o SSD) antes de retornar.",
      "Cierra el descriptor de archivo de forma inmediata.",
      "Crea una copia de seguridad en un archivo .bak automático."
    ],
    correctAnswerIndex: 1,
    explanation: "'write()' solo transfiere datos al Page Cache de la memoria RAM del kernel. Si la máquina pierde energía en ese instante, los datos se pierden. 'fsync()' bloquea el hilo hasta que el controlador del disco confirme que los datos se almacenaron en almacenamiento físico persistente.",
    topic: "Almacenamiento y Confiabilidad",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-24",
    collectionId: "linux",
    question: "¿Qué es 'systemd' y qué componentes reemplazó frente a los sistemas de inicialización tradicionales 'SysVinit'?",
    options: [
      "Un compilador de código abierto para aplicaciones gráficas de escritorio.",
      "Un sistema de inicio y administrador de servicios moderno que paraleliza el arranque, utiliza sockets y D-Bus para activación bajo demanda, gestiona cgroups y reemplaza scripts /etc/init.d con archivos declarativos de unidades (.service).",
      "Una extensión de software para conectar periféricos USB en caliente.",
      "Un gestor de bases de datos relacionales basado en SQLite."
    ],
    correctAnswerIndex: 1,
    explanation: "SysVinit era lento y secuencial, basado en frágiles scripts de shell. Systemd introdujo arranque paralelo masivo activando servicios cuando su socket recibe la primera conexión, supervisión robusta por cgroups y configuración declarativa unificada.",
    topic: "Init Systems y Systemd",
    difficulty: "básico"
  },
  {
    id: "linux-q-25",
    collectionId: "linux",
    question: "¿Qué diferencia existe entre un descriptor de archivo duplicado con 'dup2(oldfd, newfd)' y abrir el mismo archivo dos veces con 'open()'?",
    options: [
      "dup2 borra el archivo anterior antes de crear la copia.",
      "'dup2' hace que ambos descriptores de archivo apunten a la misma entrada de archivo abierto en la tabla del kernel, compartiendo el mismo puntero de posición (file offset) y flags de estado; dos llamadas a 'open()' crean dos entradas independientes en el kernel con offsets separados.",
      "open() solo funciona con archivos de texto y dup2 con archivos binarios.",
      "No existe ninguna diferencia en el comportamiento del kernel."
    ],
    correctAnswerIndex: 1,
    explanation: "Con dup2 (utilizado comúnmente para redirigir stdout/stderr en shells), ambos descriptores comparten la misma estructura 'struct file' subyacente en el kernel: si uno avanza el puntero de lectura/escritura con lseek, el otro observa la misma posición.",
    topic: "Descriptores y VFS",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-26",
    collectionId: "linux",
    question: "¿Qué es 'Seccomp' (Secure Computing Mode) y cómo refuerza la seguridad en entornos como Docker o navegadores web?",
    options: [
      "Un antivirus que escanea la memoria RAM en busca de firmas de malware.",
      "Un mecanismo del kernel que restringe qué llamadas al sistema (syscalls) tiene permitido invocar un proceso, interceptando o abortando inmediatamente el proceso si intenta invocar una syscall no autorizada (vía filtros BPF).",
      "Un protocolo de cifrado para contraseñas almacenadas en /etc/shadow.",
      "Un módulo que deshabilita la conexión Wi-Fi en redes públicas."
    ],
    correctAnswerIndex: 1,
    explanation: "De las más de 400 syscalls de Linux, la mayoría de los programas solo necesitan un subconjunto seguro. Los perfiles Seccomp-BPF bloquean llamadas peligrosas (como reboot o ptrace), reduciendo drásticamente la superficie de ataque en caso de vulnerabilidades.",
    topic: "Seguridad y Hardening",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-27",
    collectionId: "linux",
    question: "¿Qué es el 'Translation Lookaside Buffer' (TLB) y por qué su vaciado (TLB flush) penaliza el rendimiento durante un cambio de contexto (context switch)?",
    options: [
      "Un registro que almacena las teclas presionadas en el teclado.",
      "Una caché de hardware que recuerda las traducciones recientes de direcciones virtuales a físicas; cambiar a un proceso con un espacio de direcciones diferente invalida las entradas, forzando a la CPU a recorrer las lentas tablas de páginas en memoria (page walk).",
      "Una cola de mensajes entre procesos de usuario y el servidor X11.",
      "Un búfer de red para almacenar fragmentos de paquetes UDP."
    ],
    correctAnswerIndex: 1,
    explanation: "El TLB es una memoria ultrarrápida en la CPU. Al conmutar entre hilos del mismo proceso se comparte el espacio de memoria y se preserva el TLB; al conmutar entre procesos distintos (cambiando CR3 en x86), el TLB debe invalidarse, encareciendo los accesos a memoria posteriores.",
    topic: "Arquitectura de CPU y Memoria",
    difficulty: "avanzado"
  },
  {
    id: "linux-q-28",
    collectionId: "linux",
    question: "¿Cuál es el propósito del archivo 'initramfs' (Initial RAM File System) durante el proceso de arranque de Linux?",
    options: [
      "Guardar las contraseñas de los usuarios de forma permanente en la BIOS.",
      "Proporcionar un sistema de archivos temporal y mínimo en memoria RAM con los módulos y utilidades esenciales (como drivers de controladores de almacenamiento o descifrado de discos LUKS) necesarios para montar el sistema de archivos raíz ('/') real.",
      "Instalar actualizaciones automáticas de seguridad antes de cargar el escritorio.",
      "Comprobar que la placa madre tenga suficiente pasta térmica."
    ],
    correctAnswerIndex: 1,
    explanation: "El kernel no puede compilar todos los drivers imaginables de forma estática. El bootloader carga el kernel y el initramfs en RAM; el initramfs ejecuta scripts para cargar módulos específicos del hardware, descifrar volúmenes y montar el '/' definitivo antes de ejecutar /sbin/init.",
    topic: "Proceso de Arranque (Boot)",
    difficulty: "intermedio"
  },
  {
    id: "linux-q-29",
    collectionId: "linux",
    question: "¿Qué comando y opción permite inspeccionar las bibliotecas compartidas (.so) de las que depende un binario dinámico ELF?",
    options: [
      "cat /etc/hosts",
      "ldd /ruta/al/binario",
      "chmod +x /ruta/al/binario",
      "ping localhost"
    ],
    correctAnswerIndex: 1,
    explanation: "'ldd' (List Dynamic Dependencies) invoca el enlazador dinámico de Linux (ld-linux.so) para simular la resolución de bibliotecas compartidas de un ejecutable ELF, mostrando la ruta de cada biblioteca .so resuelta o marcándola como 'not found' si falta.",
    topic: "Binarios ELF y Bibliotecas",
    difficulty: "básico"
  },
  {
    id: "linux-q-30",
    collectionId: "linux",
    question: "¿Cómo funciona la variable de entorno 'LD_PRELOAD' en el enlazador dinámico de Linux?",
    options: [
      "Determina la velocidad de descarga de paquetes desde repositorios oficiales.",
      "Le indica al cargador dinámico (ld.so) que cargue una biblioteca compartida especificada antes que cualquier otra biblioteca, permitiendo interceptar y sobreescribir funciones estándar de C (como malloc u open) sin recompilar el binario.",
      "Fuerza a que todos los programas se ejecuten en modo seguro sin gráficos.",
      "Establece el tamaño del archivo de paginación swap en el arranque."
    ],
    correctAnswerIndex: 1,
    explanation: "LD_PRELOAD es una potente técnica de hooking e instrumentación en Linux: cualquier símbolo implementado en la biblioteca precargada prevalecerá sobre las bibliotecas del sistema, ampliamente utilizado en profiling, mockeo, depuración y también en malware de usuario.",
    topic: "Binarios ELF y Enlace Dinámico",
    difficulty: "avanzado"
  }
];
