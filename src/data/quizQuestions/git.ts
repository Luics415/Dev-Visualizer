import type { QuizQuestion } from "@/data/quizTypes";

export const gitQuestions: QuizQuestion[] = [
  {
    id: "git-q-01",
    collectionId: "git",
    question: "¿Cuáles son los cuatro tipos fundamentales de objetos en el almacenamiento interno (.git/objects) de Git?",
    options: [
      "blob (contenido de archivo), tree (directorio), commit (metadatos e instantánea) y tag anotado.",
      "file, folder, branch y remote.",
      "delta, packfile, index y reference.",
      "head, staging, working-tree y stash."
    ],
    correctAnswerIndex: 0,
    explanation: "El modelo de objetos de Git es un almacén de contenido direccionable compuesto por cuatro tipos inmutables: blobs (contenido puro), trees (directorios que apuntan a blobs u otros trees), commits (autor, mensaje y puntero al tree raíz) y tags anotados.",
    topic: "Modelo de Objetos Interno",
    difficulty: "básico"
  },
  {
    id: "git-q-02",
    collectionId: "git",
    question: "¿Qué comando de fontanería (plumbing) calcula el hash SHA de un archivo y opcionalmente lo guarda como blob en el repositorio?",
    options: [
      "git hash-object -w <archivo>",
      "git write-tree <archivo>",
      "git cat-file -p <archivo>",
      "git update-index --add <archivo>"
    ],
    correctAnswerIndex: 0,
    explanation: "'git hash-object' calcula el hash SHA-1 o SHA-256 del contenido más la cabecera 'blob <size>\\0'. La bandera '-w' (write) persiste físicamente el objeto comprimido con zlib dentro de .git/objects.",
    topic: "Comandos Plumbing",
    difficulty: "intermedio"
  },
  {
    id: "git-q-03",
    collectionId: "git",
    question: "¿Cuál es la diferencia entre un 'git merge' fast-forward y un merge 'no-ff' (--no-ff)?",
    options: [
      "Fast-forward solo mueve el puntero de la rama hacia adelante sin crear commit; '--no-ff' fuerza siempre la creación de un commit de fusión con dos padres.",
      "Fast-forward comprime todos los commits en uno solo; '--no-ff' duplica los commits en ambas ramas.",
      "Fast-forward reescribe el historial mediante rebase; '--no-ff' aborta si existen conflictos de fusión.",
      "No existe diferencia funcional salvo en la velocidad de transferencia hacia el servidor remoto."
    ],
    correctAnswerIndex: 0,
    explanation: "Un fast-forward ocurre cuando la rama actual es ancestro directo de la rama entrante: Git solo avanza el puntero HEAD. Con '--no-ff', Git preserva explícitamente la topología de la rama en el grafo DAG creando un merge commit.",
    topic: "Estrategias de Merge & DAG",
    difficulty: "básico"
  },
  {
    id: "git-q-04",
    collectionId: "git",
    question: "¿Cómo permite 'git reflog' recuperar commits huérfanos que parecen haberse perdido tras un 'git reset --hard'?",
    options: [
      "Mantiene un registro cronológico local de cada actualización de HEAD, permitiendo restaurar punteros antes de que el recolector 'git gc' los elimine.",
      "Descarga una copia de seguridad automática desde el servidor remoto origin.",
      "Rastrea las copias de seguridad temporales almacenadas en la papelera del sistema operativo.",
      "Desencripta los logs del servidor SSH donde reside el repositorio central."
    ],
    correctAnswerIndex: 0,
    explanation: "El reflog (.git/logs/HEAD) registra cada cambio de puntero local. Aunque un commit quede inalcanzable (dangling) tras un reset o rebase fallido, su hash permanece en el reflog hasta que expire el periodo de gracia (por defecto 30-90 días).",
    topic: "Historia & Rescate",
    difficulty: "intermedio"
  },
  {
    id: "git-q-05",
    collectionId: "git",
    question: "¿Cuál es la diferencia de comportamiento entre 'git reset --soft', '--mixed' y '--hard'?",
    options: [
      "--soft solo mueve HEAD (mantiene staging y working tree); --mixed mueve HEAD y actualiza staging; --hard resetea HEAD, staging y working tree.",
      "--soft borra el working tree; --mixed preserva solo los archivos ignorados; --hard elimina el repositorio remoto.",
      "--soft crea un commit de reversión; --mixed abre el editor interactivo; --hard aplica un rebase silencioso.",
      "Los tres comandos son idénticos y solo varían por los mensajes de confirmación que emiten en consola."
    ],
    correctAnswerIndex: 0,
    explanation: "'--soft' solo altera el puntero de la rama activa; '--mixed' (el modo por defecto) mueve HEAD y sincroniza el Index (staging); '--hard' sobreescribe destructivamente tanto el Index como los archivos del directorio de trabajo.",
    topic: "Ámbitos: HEAD, Index & Worktree",
    difficulty: "intermedio"
  },
  {
    id: "git-q-06",
    collectionId: "git",
    question: "¿Qué herramienta integrada de Git utiliza búsqueda binaria para aislar el commit exacto que introdujo una regresión o bug?",
    options: [
      "git bisect (con 'git bisect start', 'git bisect bad' y 'git bisect good')",
      "git blame (con 'git blame -L 1,50')",
      "git fsck (con 'git fsck --lost-found')",
      "git log (con 'git log -S \"error\"')"
    ],
    correctAnswerIndex: 0,
    explanation: "'git bisect' realiza una búsqueda binaria eficiente en el historial (O(log n)). Al marcar un commit erróneo ('bad') y uno sano ('good'), Git sitúa el HEAD en el punto medio sucesivamente hasta identificar el commit causante.",
    topic: "Diagnóstico & Depuración",
    difficulty: "intermedio"
  },
  {
    id: "git-q-07",
    collectionId: "git",
    question: "¿Qué significa el estado 'Detached HEAD' (HEAD desacoplado) en Git?",
    options: [
      "HEAD apunta directamente al hash SHA de un commit específico en lugar de apuntar a una referencia de rama local.",
      "El repositorio local ha perdido la conexión de red con el origen remoto.",
      "El archivo de índice .git/index se ha corrompido y no puede registrar nuevos cambios.",
      "El último commit realizado fue rechazado por un hook del servidor."
    ],
    correctAnswerIndex: 0,
    explanation: "Normalmente HEAD es una referencia simbólica que apunta a una rama (ref: refs/heads/main). En estado detached HEAD, apunta directamente a un commit (ej. git checkout <hash>), por lo que nuevos commits no pertenecerán a ninguna rama.",
    topic: "Referencias & HEAD",
    difficulty: "básico"
  },
  {
    id: "git-q-08",
    collectionId: "git",
    question: "¿Cuál es la función del motor 'git rerere' (Reuse Recorded Resolution)?",
    options: [
      "Registra cómo se resolvieron conflictos en merges anteriores y reaplica automáticamente la misma resolución si el conflicto vuelve a surgir.",
      "Reintenta de forma automática el envío de commits ('push') ante caídas temporales de red.",
      "Optimiza los índices de búsqueda de texto completo en mensajes de commit.",
      "Genera reportes de cobertura de código al finalizar cada fusión de ramas."
    ],
    correctAnswerIndex: 0,
    explanation: "'rerere' (Reuse Recorded Resolution) guarda una instantánea del conflicto de 3 vías y de la resolución aplicada. En rebases largos o merges repetidos entre ramas vivas, detecta el mismo patrón y aplica la resolución automáticamente.",
    topic: "Resolución de Conflictos",
    difficulty: "avanzado"
  },
  {
    id: "git-q-09",
    collectionId: "git",
    question: "¿Por qué en Git moderno se prefieren los comandos 'git switch' y 'git restore' frente al sobrecargado 'git checkout'?",
    options: [
      "Separan responsabilidades: 'git switch' se dedica exclusivamente a ramas; 'git restore' a descartar o restaurar archivos en worktree/staging.",
      "'git checkout' fue eliminado de Git y arroja un error de comando no reconocido.",
      "'git switch' utiliza compresión multihilo para clonar ramas en memoria RAM.",
      "'git restore' requiere confirmación criptográfica GPG obligatoria en cada ejecución."
    ],
    correctAnswerIndex: 0,
    explanation: "'git checkout' cumplía dos tareas totalmente dispares: cambiar de rama y sobreescribir archivos en el directorio de trabajo. Git 2.23+ introdujo 'git switch' (navegación de ramas) y 'git restore' (reversión de archivos) para evitar errores accidentales.",
    topic: "Comandos Porcelain Modernos",
    difficulty: "básico"
  },
  {
    id: "git-q-10",
    collectionId: "git",
    question: "¿Cómo empaqueta Git objetos individuales (loose objects) en 'Packfiles' durante 'git gc'?",
    options: [
      "Combina múltiples objetos comprimidos en un archivo .pack y calcula compresión delta entre versiones sucesivas de archivos similares.",
      "Comprime los archivos en un único archivo zip con contraseña cifrado con AES-256.",
      "Convierte todos los commits en imágenes ISO de solo lectura montadas en el kernel.",
      "Envía los objetos a un servidor de almacenamiento temporal en la nube de Git."
    ],
    correctAnswerIndex: 0,
    explanation: "Para ahorrar espacio y acelerar la red, 'git gc' o 'git pack-objects' reúne miles de loose objects en archivos .pack acompañados de un índice .idx, empleando compresión delta donde solo se almacenan diferencias entre versiones cercanas.",
    topic: "Optimización & Garbage Collection",
    difficulty: "avanzado"
  },
  {
    id: "git-q-11",
    collectionId: "git",
    question: "¿Cuál es la diferencia entre un 'Annotated Tag' (etiqueta anotada) y un 'Lightweight Tag' (etiqueta ligera)?",
    options: [
      "El tag anotado es un objeto completo con autor, fecha, mensaje y firma GPG opcional; el ligero es solo un puntero directo al commit.",
      "El tag ligero solo puede crearse en servidores remotos; el anotado es exclusivo del repositorio local.",
      "El tag anotado se borra automáticamente al fusionar la rama; el ligero es permanente.",
      "El tag ligero requiere que el repositorio esté configurado con el protocolo SSH."
    ],
    correctAnswerIndex: 0,
    explanation: "Un lightweight tag es simplemente un archivo plano con un hash de commit en .git/refs/tags/. Un annotated tag ('git tag -a') crea un objeto tag en la base de datos con su propio SHA, mensaje, autoría y soporte para firmas criptográficas.",
    topic: "Etiquetas & Versionado",
    difficulty: "básico"
  },
  {
    id: "git-q-12",
    collectionId: "git",
    question: "¿Qué ocurre durante un 'git rebase' a nivel del grafo de commits (DAG)?",
    options: [
      "Reproduce secuencialmente los commits de la rama actual sobre el commit base destino, generando nuevos hashes SHA para cada uno.",
      "Fusiona todos los archivos en un único commit sin alterar los identificadores SHA originales.",
      "Intercambia los nombres de ambas ramas manteniendo inmutables los punteros de los ancestros.",
      "Borra permanentemente la rama base del repositorio remoto origin."
    ],
    correctAnswerIndex: 0,
    explanation: "Rebase extrae el parche de cada commit único de la rama actual y los aplica uno a uno sobre la punta de la rama destino. Dado que el commit padre cambia, cada commit recibe un nuevo SHA, reescribiendo la historia linealmente.",
    topic: "Historia & Rebase",
    difficulty: "intermedio"
  },
  {
    id: "git-q-13",
    collectionId: "git",
    question: "¿Qué hook de Git del lado del cliente puede impedir que se cree un commit si los tests o el linter fallan?",
    options: [
      "pre-commit (ubicado en .git/hooks/pre-commit)",
      "post-commit (ubicado en .git/hooks/post-commit)",
      "pre-push (ubicado en .git/hooks/pre-push)",
      "post-receive (ubicado en el servidor remoto)"
    ],
    correctAnswerIndex: 0,
    explanation: "El script 'pre-commit' se ejecuta al invocar 'git commit' antes de solicitar el mensaje de commit. Si el script finaliza con un código de salida distinto de cero, Git aborta la operación de confirmación de inmediato.",
    topic: "Hooks & Automatización",
    difficulty: "básico"
  },
  {
    id: "git-q-14",
    collectionId: "git",
    question: "¿Cuál es la función del comando 'git cherry-pick <hash>'?",
    options: [
      "Aplica los cambios introducidos por un commit específico en la rama de trabajo actual como un nuevo commit.",
      "Elimina selectivamente un archivo del historial completo del repositorio.",
      "Descarga únicamente un directorio específico de un repositorio remoto sin clonar el resto.",
      "Compara dos ramas y muestra solo los archivos que contienen modificaciones en líneas impares."
    ],
    correctAnswerIndex: 0,
    explanation: "'git cherry-pick' toma el diff exacto introducido por un commit arbitrario y lo aplica como un nuevo commit sobre la rama activa actual, conservando el mensaje pero generando un nuevo hash e historial de padres.",
    topic: "Operaciones de Historial",
    difficulty: "básico"
  },
  {
    id: "git-q-15",
    collectionId: "git",
    question: "¿Qué estrategia de fusión utiliza Git por defecto desde la versión 2.34 en sustitución de 'recursive'?",
    options: [
      "ort (Ostensibly Recursive's Twin), un motor más rápido y preciso para renombramientos y detección de conflictos.",
      "octopus, diseñada para fusionar más de dos ramas simultáneamente.",
      "resolve, un algoritmo de dos vías basado en marcas de tiempo de modificación.",
      "ours, que descarta silenciosamente los cambios entrantes de la rama fusionada."
    ],
    correctAnswerIndex: 0,
    explanation: "Git 2.34 adoptó 'ort' como la estrategia de merge por defecto. Reescribe el algoritmo recursivo con mejor manejo de renombramientos complejos y un rendimiento significativamente superior en repositorios masivos.",
    topic: "Estrategias de Merge",
    difficulty: "avanzado"
  },
  {
    id: "git-q-16",
    collectionId: "git",
    question: "¿Cómo repara 'git commit --amend' el último commit sin crear uno nuevo adicional en el historial?",
    options: [
      "Crea un nuevo commit que reemplaza al commit actual de HEAD apuntando al mismo commit padre, actualizando el árbol y mensaje.",
      "Modifica en caliente los bytes del commit anterior en el disco sin cambiar su hash SHA.",
      "Elimina el commit anterior de la base de datos de objetos y restaura el árbol de trabajo.",
      "Envía una señal al servidor remoto para revocar el último commit publicado."
    ],
    correctAnswerIndex: 0,
    explanation: "Dado que los objetos en Git son inmutables, '--amend' no muta el commit viejo: crea un nuevo objeto commit con los contenidos del staging actual y el mismo padre del commit anterior, moviendo el puntero de la rama al nuevo SHA.",
    topic: "Historia & Modificación",
    difficulty: "básico"
  },
  {
    id: "git-q-17",
    collectionId: "git",
    question: "¿Para qué sirve el archivo '.gitattributes' en un repositorio de Git?",
    options: [
      "Definir el manejo de finales de línea (CRLF/LF), filtros de diff personalizados, atributos binarios y exportación de archivos (export-ignore).",
      "Listar las contraseñas y claves SSH autorizadas para sincronizar con el origen remoto.",
      "Configurar los permisos de administración y roles de usuario dentro de la organización.",
      "Establecer la versión mínima del motor de Node.js requerida para compilar el proyecto."
    ],
    correctAnswerIndex: 0,
    explanation: "'.gitattributes' asigna directivas por patrón de archivo: normalización de saltos de línea (text, eol=lf), tratamientos como binario para evitar corrupciones en diffs, o directivas como 'export-ignore' para 'git archive'.",
    topic: "Configuración & Atributos",
    difficulty: "intermedio"
  },
  {
    id: "git-q-18",
    collectionId: "git",
    question: "¿Qué diferencia existe entre 'git fetch' y 'git pull'?",
    options: [
      "'git fetch' descarga los objetos y referencias remotas sin alterar el árbol de trabajo; 'git pull' ejecuta 'fetch' y seguidamente fusiona ('merge' o 'rebase').",
      "'git fetch' sube cambios locales al servidor; 'git pull' los descarga en staging.",
      "'git pull' solo funciona con el protocolo HTTPS; 'git fetch' requiere obligatoriamente SSH.",
      "Ambos comandos son sinónimos absolutos sin ninguna diferencia técnica."
    ],
    correctAnswerIndex: 0,
    explanation: "'git fetch' sincroniza el almacén de objetos y actualiza las ramas de seguimiento remoto (como origin/main). 'git pull' es un comando compuesto que ejecuta 'git fetch' y luego fusiona (o hace rebase si está configurado) en la rama local activa.",
    topic: "Sincronización & Remotos",
    difficulty: "básico"
  },
  {
    id: "git-q-19",
    collectionId: "git",
    question: "¿Cuál es la utilidad del comando 'git stash branch <nombre-rama>'?",
    options: [
      "Crea y conmuta a una nueva rama a partir del commit donde se creó el stash y aplica el estado guardado, resolviendo posibles conflictos.",
      "Envía el contenido del stash directamente al repositorio remoto como una rama protegida.",
      "Convierte el stash en un archivo comprimido .tar.gz para compartir por correo electrónico.",
      "Borra permanentemente todas las entradas del stash que tengan más de siete días de antigüedad."
    ],
    correctAnswerIndex: 0,
    explanation: "Si el código en el stash entra en conflicto con los cambios actuales de la rama de trabajo, 'git stash branch' crea una nueva rama partiendo exactamente del commit en el que se originó el stash y aplica los cambios limpiamente.",
    topic: "Stashing & Estados Temporales",
    difficulty: "avanzado"
  },
  {
    id: "git-q-20",
    collectionId: "git",
    question: "¿Qué indica la presencia de marcadores de conflicto '||||||| base' en una resolución de merge?",
    options: [
      "Que Git está configurado con 'merge.conflictStyle = diff3' o 'zdiff3', mostrando el ancestro común original además de 'ours' y 'theirs'.",
      "Que el conflicto involucra más de tres ramas simultáneas en una estrategia octopus.",
      "Que el archivo en conflicto supera el límite de tamaño máximo para procesamiento automático.",
      "Que el commit fue generado por un script de integración continua automatizado."
    ],
    correctAnswerIndex: 0,
    explanation: "Por defecto, Git solo muestra dos bloques (nuestro HEAD y el entrante). Con 'conflictStyle = diff3' o 'zdiff3', Git incluye la sección intermedia con el estado en el ancestro base común, facilitando deducir qué cambió cada parte.",
    topic: "Resolución de Conflictos",
    difficulty: "avanzado"
  },
  {
    id: "git-q-21",
    collectionId: "git",
    question: "¿Qué es un 'Sparse Checkout' (clonación dispersa) en Git y para qué se emplea?",
    options: [
      "Permite poblar el directorio de trabajo solo con un subconjunto específico de carpetas o archivos de un monorepo masivo.",
      "Comprime los archivos del repositorio para descargarlos en redes de baja latencia.",
      "Verifica la integridad criptográfica de los commits ignorando los archivos binarios.",
      "Descarga solo los últimos diez commits del historial ignorando ramas secundarias."
    ],
    correctAnswerIndex: 0,
    explanation: "'sparse-checkout' permite a desarrolladores en monorepos gigantescos trabajar solo con las carpetas de su servicio o módulo, manteniendo el resto del árbol de trabajo virtualizado o ausente en el disco local.",
    topic: "Monorepos & Rendimiento",
    difficulty: "avanzado"
  },
  {
    id: "git-q-22",
    collectionId: "git",
    question: "¿Qué comando verifica la conectividad e integridad de la base de datos de objetos interna de Git?",
    options: [
      "git fsck (--full)",
      "git clean -fdx",
      "git check-ref-format",
      "git status --check"
    ],
    correctAnswerIndex: 0,
    explanation: "'git fsck' (File System Check) verifica la integridad del almacén de objetos de Git, validando sumas hash SHA, detectando objetos corruptos o dangling (huérfanos) y garantizando la coherencia del grafo DAG.",
    topic: "Mantenimiento & Integridad",
    difficulty: "intermedio"
  },
  {
    id: "git-q-23",
    collectionId: "git",
    question: "¿Cuál es la función del comando 'git rev-parse' en scripts de automatización?",
    options: [
      "Resolver parámetros y referencias arbitrarias (como HEAD, ramas o etiquetas) a sus hashes SHA canónicos de 40 caracteres.",
      "Generar números de versión semántica a partir de los mensajes de confirmación.",
      "Traducir los comentarios del código a diferentes idiomas mediante modelos LLM.",
      "Validar que el formato de una pull request cumpla con las políticas de contribución."
    ],
    correctAnswerIndex: 0,
    explanation: "'git rev-parse' es una herramienta clave de fontanería. Traduce nombres humanos (como 'HEAD', 'main~2', '@{u}') en hashes SHA exactos y determina metadatos como la raíz del repositorio (--show-toplevel).",
    topic: "Comandos Plumbing & Scripting",
    difficulty: "avanzado"
  },
  {
    id: "git-q-24",
    collectionId: "git",
    question: "¿Cómo diferencia Git una modificación de permisos de archivo ejecutable (+x) en sistemas Unix?",
    options: [
      "Registra los modos de archivo POSIX 100644 (archivo estándar) o 100755 (ejecutable) directamente en el objeto 'tree'.",
      "Guarda un archivo oculto .permissions en cada carpeta del proyecto.",
      "Utiliza atributos extendidos del sistema de archivos ext4 o APFS.",
      "Git no almacena permisos de archivo bajo ninguna circunstancia por motivos de portabilidad."
    ],
    correctAnswerIndex: 0,
    explanation: "Git no guarda usuarios ni permisos POSIX complejos, pero sí preserva el bit de ejecución mediante dos modos en las entradas del objeto 'tree': 100644 (no ejecutable) y 100755 (ejecutable), además de 120000 para enlaces simbólicos.",
    topic: "Modelo de Objetos & Sistema de Archivos",
    difficulty: "intermedio"
  },
  {
    id: "git-q-25",
    collectionId: "git",
    question: "¿Qué efecto tiene ejecutar 'git clean -f -d'?",
    options: [
      "Elimina de forma irreversible todos los archivos y directorios no rastreados (untracked) del directorio de trabajo.",
      "Borra todas las ramas locales que ya fueron fusionadas en la rama main.",
      "Reorganiza y defragmenta la base de datos de objetos en segundo plano.",
      "Descarta los cambios preparados en el área de staging devolviéndolos al worktree."
    ],
    correctAnswerIndex: 0,
    explanation: "'git clean' limpia el directorio de trabajo eliminando archivos que no están bajo control de versiones ni en .gitignore. Con '-f' (force) y '-d' (directories), elimina recursivamente tanto archivos como carpetas untracked.",
    topic: "Directorio de Trabajo & Limpieza",
    difficulty: "básico"
  },
  {
    id: "git-q-26",
    collectionId: "git",
    question: "¿Qué mecanismo utiliza 'git revert <hash>' para deshacer cambios sin reescribir el historial?",
    options: [
      "Crea un nuevo commit que aplica exactamente las modificaciones inversas al commit señalado, preservando la cronología previa.",
      "Elimina el commit señalado del grafo DAG uniendo el padre con el hijo directo.",
      "Restaura el repositorio al estado de la etiqueta más cercana en el tiempo.",
      "Oculta el commit mediante una directiva de exclusion en el archivo .git/config."
    ],
    correctAnswerIndex: 0,
    explanation: "A diferencia de 'reset' (que altera el pasado), 'revert' es una operación hacia adelante: computa el inverso de los cambios del commit indicado y crea un nuevo commit de compensación, seguro para ramas compartidas.",
    topic: "Historia & Reversión Segura",
    difficulty: "básico"
  },
  {
    id: "git-q-27",
    collectionId: "git",
    question: "¿Qué representa la referencia 'ORIG_HEAD' creada tras ciertas operaciones en Git?",
    options: [
      "El valor previo que tenía HEAD antes de operaciones drásticas como rebase, merge o reset, facilitando su deshacer.",
      "El hash del commit raíz inicial con el que se inauguró el repositorio.",
      "El último commit que fue firmado criptográficamente con una clave GPG válida.",
      "La dirección IP del servidor donde se alojó el repositorio por primera vez."
    ],
    correctAnswerIndex: 0,
    explanation: "Comandos como 'git merge', 'git rebase' o 'git reset' guardan la posición anterior de HEAD en la referencia '.git/ORIG_HEAD'. Esto permite deshacer un merge erróneo con 'git reset --hard ORIG_HEAD'.",
    topic: "Referencias & Seguridad",
    difficulty: "intermedio"
  },
  {
    id: "git-q-28",
    collectionId: "git",
    question: "¿Cuál es la función del comando 'git write-tree' en el flujo de fontanería?",
    options: [
      "Crea un objeto 'tree' a partir del contenido actual del Index (staging area) y devuelve su identificador SHA.",
      "Escribe un árbol de directorios vacío en el sistema de archivos local.",
      "Imprime una visualización gráfica en ASCII de las ramas y etiquetas activas.",
      "Exporta el repositorio a un archivo de esquema XML para auditorías de cumplimiento."
    ],
    correctAnswerIndex: 0,
    explanation: "'git write-tree' serializa el estado del staging area (.git/index) en uno o más objetos 'tree' en .git/objects y devuelve el hash SHA del tree raíz, paso previo a crear un commit con 'git commit-tree'.",
    topic: "Comandos Plumbing",
    difficulty: "avanzado"
  },
  {
    id: "git-q-29",
    collectionId: "git",
    question: "¿Qué ventaja ofrece 'git worktree add' frente a clonar múltiples copias del mismo repositorio?",
    options: [
      "Permite tener múltiples ramas revisadas simultáneamente en diferentes carpetas del disco compartiendo la misma base de objetos (.git).",
      "Descarga únicamente los commits de los últimos treinta días ahorrando ancho de banda.",
      "Ejecuta pruebas unitarias en paralelo dentro de contenedores efímeros aislados.",
      "Permite editar archivos bloqueando el acceso a otros desarrolladores en la red."
    ],
    correctAnswerIndex: 0,
    explanation: "'git worktree' habilita múltiples directorios de trabajo conectados al mismo almacén .git. Puedes compilar una rama en un directorio mientras revisas un PR o desarrollas una hotfix en otro, sin duplicar almacenamiento ni re-clonar.",
    topic: "Worktrees Múltiples",
    difficulty: "intermedio"
  },
  {
    id: "git-q-30",
    collectionId: "git",
    question: "¿Qué algoritmo criptográfico está adoptando Git para mitigar colisiones hash en sustitución gradual de SHA-1?",
    options: [
      "SHA-256 (Object Format Transition / SHA-256 repositories)",
      "MD5 con claves de sal dinámicas",
      "Blowfish de 512 bits con entropía cuántica",
      "RSA con certificados X.509 integrados en cada blob"
    ],
    correctAnswerIndex: 0,
    explanation: "Tras la demostración práctica de ataques de colisión contra SHA-1 (SHAttered), el proyecto Git diseñó e implementó la transición hacia SHA-256, soportando repositorios inicializados con 'git init --object-format=sha256'.",
    topic: "Criptografía & Evolución de Git",
    difficulty: "intermedio"
  }
];
