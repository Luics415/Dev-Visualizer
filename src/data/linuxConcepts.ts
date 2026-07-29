import type { StudyConcept } from "./conceptTypes";

export const linuxConcepts = [
  {
    "title": "Linux: kernel y distribución",
    "description": "Distingue el kernel que administra recursos de la distribución que integra herramientas, paquetes, defaults y soporte.",
    "section": "Fundamentos del sistema",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "kernel ↔ user space ↔ distro",
      "nodes": [
        "hardware|CPU y dispositivos",
        "kernel|syscalls y drivers",
        "user space|servicios y apps",
        "distribution|paquetes y defaults"
      ],
      "outcome": "sistema Linux completo",
      "caption": "Distingue el kernel que administra recursos de la distribución que integra herramientas, paquetes, defaults y soporte."
    }
  },
  {
    "title": "Kernel space y user space",
    "description": "Separa código privilegiado del kernel de los procesos de usuario y explica la frontera de protección.",
    "section": "Fundamentos del sistema",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Kernel space y user space",
      "nodes": [
        "Kernel|entrada",
        "space|mecanismo",
        "user|estado",
        "space|resultado"
      ],
      "outcome": "kernel space y user space",
      "caption": "Separa código privilegiado del kernel de los procesos de usuario y explica la frontera de protección."
    }
  },
  {
    "title": "System calls",
    "description": "Muestra cómo un proceso solicita al kernel operaciones como abrir archivos, crear procesos o usar la red.",
    "section": "Fundamentos del sistema",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "open() → kernel",
      "nodes": [
        "process|user space",
        "syscall|boundary",
        "kernel|validates",
        "driver|executes"
      ],
      "outcome": "servicio del kernel",
      "caption": "Muestra cómo un proceso solicita al kernel operaciones como abrir archivos, crear procesos o usar la red."
    }
  },
  {
    "title": "ABI, libc y utilidades",
    "description": "Relaciona las llamadas del programa con libc, la ABI del sistema y las herramientas de usuario.",
    "section": "Fundamentos del sistema",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "ABI, libc y utilidades",
      "nodes": [
        "ABI|entrada",
        "libc|mecanismo",
        "utilidades|estado",
        "result|resultado"
      ],
      "outcome": "abi, libc y utilidades",
      "caption": "Relaciona las llamadas del programa con libc, la ABI del sistema y las herramientas de usuario."
    }
  },
  {
    "title": "Distribuciones Linux",
    "description": "Compara familias Debian, Red Hat, Arch y otras por ciclo de vida, paquetes y decisiones operativas.",
    "section": "Fundamentos del sistema",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "Distribuciones Linux",
      "nodes": [
        "Distribuciones|entrada",
        "Linux|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "distribuciones linux",
      "caption": "Compara familias Debian, Red Hat, Arch y otras por ciclo de vida, paquetes y decisiones operativas."
    }
  },
  {
    "title": "Filesystem Hierarchy Standard",
    "description": "Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad.",
    "section": "Fundamentos del sistema",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "/",
      "nodes": [
        "/etc|config",
        "/var|mutable data",
        "/home|users",
        "/usr|programs"
      ],
      "outcome": "rutas con propósito",
      "caption": "Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad."
    }
  },
  {
    "title": "Todo es un archivo",
    "description": "Explica la interfaz uniforme aplicada a archivos, dispositivos, pipes, sockets y pseudo-filesystems.",
    "section": "Fundamentos del sistema",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Todo es un archivo",
      "nodes": [
        "Todo|entrada",
        "archivo|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "todo es un archivo",
      "caption": "Explica la interfaz uniforme aplicada a archivos, dispositivos, pipes, sockets y pseudo-filesystems."
    }
  },
  {
    "title": "Dispositivos en /dev",
    "description": "Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers.",
    "section": "Fundamentos del sistema",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Dispositivos en /dev",
      "nodes": [
        "Dispositivos|entrada",
        "dev|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "dispositivos en /dev",
      "caption": "Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers."
    }
  },
  {
    "title": "procfs: /proc",
    "description": "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real.",
    "section": "Fundamentos del sistema",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "cat /proc/$PID/status",
      "nodes": [
        "/proc|virtual",
        "PID|process view",
        "status|memory + state",
        "kernel|source"
      ],
      "outcome": "estado del kernel visible",
      "caption": "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real."
    }
  },
  {
    "title": "sysfs: /sys",
    "description": "Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable.",
    "section": "Fundamentos del sistema",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "/sys/devices",
      "nodes": [
        "kernel objects|source",
        "devices|hardware tree",
        "class|logical view",
        "attributes|control"
      ],
      "outcome": "dispositivos expuestos",
      "caption": "Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable."
    }
  },
  {
    "title": "Secuencia de arranque",
    "description": "Sigue firmware, bootloader, kernel, initramfs, montaje raíz y PID 1 hasta alcanzar un sistema operativo.",
    "section": "Fundamentos del sistema",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "Secuencia de arranque",
      "nodes": [
        "Secuencia|entrada",
        "arranque|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "secuencia de arranque",
      "caption": "Sigue firmware, bootloader, kernel, initramfs, montaje raíz y PID 1 hasta alcanzar un sistema operativo."
    }
  },
  {
    "title": "Targets y modos de arranque",
    "description": "Agrupa estados operativos como multi-user, graphical, rescue y emergency mediante dependencias.",
    "section": "Fundamentos del sistema",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "systemctl start app.service",
      "nodes": [
        "unit|declaration",
        "dependencies|ordering",
        "service|process",
        "target|group"
      ],
      "outcome": "servicio supervisado",
      "caption": "Agrupa estados operativos como multi-user, graphical, rescue y emergency mediante dependencias."
    }
  },
  {
    "title": "Terminal, TTY y PTY",
    "description": "Diferencia el emulador visible, el canal pseudo-terminal y el proceso shell que interpreta comandos.",
    "section": "Shell, terminal y composición de comandos",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "terminal emulator vs shell",
      "nodes": [
        "terminal|I/O surface",
        "shell|parser",
        "PTY|channel",
        "process|command"
      ],
      "outcome": "sesión interactiva",
      "caption": "Diferencia el emulador visible, el canal pseudo-terminal y el proceso shell que interpreta comandos."
    }
  },
  {
    "title": "Shell y Bash",
    "description": "Describe al shell como lenguaje, intérprete y entorno de ejecución; Bash es una implementación concreta.",
    "section": "Shell, terminal y composición de comandos",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Shell y Bash",
      "nodes": [
        "Shell|entrada",
        "Bash|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "shell y bash",
      "caption": "Describe al shell como lenguaje, intérprete y entorno de ejecución; Bash es una implementación concreta."
    }
  },
  {
    "title": "Cómo Bash ejecuta un comando",
    "description": "Sigue lectura, tokenización, parsing, expansiones, redirecciones, búsqueda y ejecución.",
    "section": "Shell, terminal y composición de comandos",
    "family": "ciclo de vida",
    "layout": "compact",
    "scene": {
      "variant": "lifecycle",
      "code": "Cómo Bash ejecuta un comando",
      "nodes": [
        "Cómo|entrada",
        "Bash|mecanismo",
        "ejecuta|estado",
        "comando|resultado"
      ],
      "outcome": "cómo bash ejecuta un comando",
      "caption": "Sigue lectura, tokenización, parsing, expansiones, redirecciones, búsqueda y ejecución."
    }
  },
  {
    "title": "Comando, opciones y argumentos",
    "description": "Separa el ejecutable de sus flags y operandos para leer correctamente una línea de comandos.",
    "section": "Shell, terminal y composición de comandos",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "Comando, opciones y argumentos",
      "nodes": [
        "Comando|entrada",
        "opciones|mecanismo",
        "argumentos|estado",
        "result|resultado"
      ],
      "outcome": "comando, opciones y argumentos",
      "caption": "Separa el ejecutable de sus flags y operandos para leer correctamente una línea de comandos."
    }
  },
  {
    "title": "PATH y búsqueda de comandos",
    "description": "Recorre directorios de PATH y distingue builtins, funciones, aliases y binarios externos.",
    "section": "Shell, terminal y composición de comandos",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "PATH=/usr/local/bin:/usr/bin",
      "nodes": [
        "command|node",
        "PATH|directories",
        "execve|candidate",
        "binary|found"
      ],
      "outcome": "comando localizado",
      "caption": "Recorre directorios de PATH y distingue builtins, funciones, aliases y binarios externos."
    }
  },
  {
    "title": "Quoting y escaping",
    "description": "Preserva caracteres literales y controla qué expansiones ocurren con comillas simples, dobles y backslash.",
    "section": "Shell, terminal y composición de comandos",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "'literal' vs \"expand\"",
      "nodes": [
        "single quotes|literal",
        "double quotes|expand vars",
        "backslash|escape",
        "parser|tokens"
      ],
      "outcome": "argumentos preservados",
      "caption": "Preserva caracteres literales y controla qué expansiones ocurren con comillas simples, dobles y backslash."
    }
  },
  {
    "title": "Expansiones de Bash",
    "description": "Cubre brace, tilde, parámetros, comandos, aritmética, word splitting, globbing y quote removal.",
    "section": "Shell, terminal y composición de comandos",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "${var} $(cmd) *.log",
      "nodes": [
        "source|tokens",
        "expansion|variables",
        "splitting|fields",
        "globbing|paths"
      ],
      "outcome": "argumentos finales",
      "caption": "Cubre brace, tilde, parámetros, comandos, aritmética, word splitting, globbing y quote removal."
    }
  },
  {
    "title": "Globbing y patrones",
    "description": "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares.",
    "section": "Shell, terminal y composición de comandos",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "${var} $(cmd) *.log",
      "nodes": [
        "source|tokens",
        "expansion|variables",
        "splitting|fields",
        "globbing|paths"
      ],
      "outcome": "argumentos finales",
      "caption": "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares."
    }
  },
  {
    "title": "Variables de shell y de entorno",
    "description": "Distingue variables locales del shell de valores exportados que heredan los procesos hijos.",
    "section": "Shell, terminal y composición de comandos",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Variables de shell y de entorno",
      "nodes": [
        "Variables|entrada",
        "shell|mecanismo",
        "entorno|estado",
        "result|resultado"
      ],
      "outcome": "variables de shell y de entorno",
      "caption": "Distingue variables locales del shell de valores exportados que heredan los procesos hijos."
    }
  },
  {
    "title": "Parámetros posicionales",
    "description": "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.",
    "section": "Shell, terminal y composición de comandos",
    "family": "consulta e índice",
    "layout": "compact",
    "scene": {
      "variant": "database",
      "code": "Parámetros posicionales",
      "nodes": [
        "Parámetros|entrada",
        "posicionales|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "parámetros posicionales",
      "caption": "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables."
    }
  },
  {
    "title": "Exit status",
    "description": "Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones.",
    "section": "Shell, terminal y composición de comandos",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "command && next || fallback",
      "nodes": [
        "command|runs",
        "status 0|success",
        "status nonzero|failure",
        "shell|branches"
      ],
      "outcome": "flujo decidido",
      "caption": "Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones."
    }
  },
  {
    "title": "Operadores ;, &, && y ||",
    "description": "Controla secuencia, background y ejecución condicional basada en el código de salida.",
    "section": "Shell, terminal y composición de comandos",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "Operadores ;, &, && y ||",
      "nodes": [
        "Operadores|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "operadores ;, &, && y ||",
      "caption": "Controla secuencia, background y ejecución condicional basada en el código de salida."
    }
  },
  {
    "title": "Pipelines",
    "description": "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel.",
    "section": "Shell, terminal y composición de comandos",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "producer | consumer",
      "nodes": [
        "stdout|fd 1",
        "pipe|kernel buffer",
        "stdin|fd 0",
        "consumer|reads"
      ],
      "outcome": "datos encadenados",
      "caption": "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel."
    }
  },
  {
    "title": "pipefail",
    "description": "Evita que un fallo temprano quede oculto por el éxito del último comando de una tubería.",
    "section": "Shell, terminal y composición de comandos",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "producer | consumer",
      "nodes": [
        "stdout|fd 1",
        "pipe|kernel buffer",
        "stdin|fd 0",
        "consumer|reads"
      ],
      "outcome": "datos encadenados",
      "caption": "Evita que un fallo temprano quede oculto por el éxito del último comando de una tubería."
    }
  },
  {
    "title": "Redirecciones",
    "description": "Envía entrada, salida y errores a archivos, dispositivos u otros descriptores.",
    "section": "Shell, terminal y composición de comandos",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "Redirecciones",
      "nodes": [
        "Redirecciones|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "redirecciones",
      "caption": "Envía entrada, salida y errores a archivos, dispositivos u otros descriptores."
    }
  },
  {
    "title": "File descriptors",
    "description": "Modela stdin, stdout, stderr y descriptores adicionales como referencias abiertas por proceso.",
    "section": "Shell, terminal y composición de comandos",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "cmd >out 2>err",
      "nodes": [
        "fd 0|stdin",
        "fd 1|stdout",
        "fd 2|stderr",
        "file|destination"
      ],
      "outcome": "I/O redirigida",
      "caption": "Modela stdin, stdout, stderr y descriptores adicionales como referencias abiertas por proceso."
    }
  },
  {
    "title": "Command substitution",
    "description": "Inserta la salida de un comando dentro de otro después de ejecutar un subshell.",
    "section": "Shell, terminal y composición de comandos",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "Command substitution",
      "nodes": [
        "Command|entrada",
        "substitution|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "command substitution",
      "caption": "Inserta la salida de un comando dentro de otro después de ejecutar un subshell."
    }
  },
  {
    "title": "Process substitution",
    "description": "Presenta la salida o entrada de un proceso como una ruta temporal parecida a un archivo.",
    "section": "Shell, terminal y composición de comandos",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "Process substitution",
      "nodes": [
        "Process|entrada",
        "substitution|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "process substitution",
      "caption": "Presenta la salida o entrada de un proceso como una ruta temporal parecida a un archivo."
    }
  },
  {
    "title": "Aliases y funciones de shell",
    "description": "Encapsula comandos frecuentes y lógica reutilizable entendiendo sus límites de expansión y alcance.",
    "section": "Shell, terminal y composición de comandos",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "Aliases y funciones de shell",
      "nodes": [
        "Aliases|entrada",
        "funciones|mecanismo",
        "shell|estado",
        "result|resultado"
      ],
      "outcome": "aliases y funciones de shell",
      "caption": "Encapsula comandos frecuentes y lógica reutilizable entendiendo sus límites de expansión y alcance."
    }
  },
  {
    "title": "find y xargs",
    "description": "Descubre archivos por propiedades y convierte resultados en argumentos de otros procesos con delimitación segura.",
    "section": "Shell, terminal y composición de comandos",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "find y xargs",
      "nodes": [
        "find|entrada",
        "xargs|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "find y xargs",
      "caption": "Descubre archivos por propiedades y convierte resultados en argumentos de otros procesos con delimitación segura."
    }
  },
  {
    "title": "grep y expresiones regulares",
    "description": "Filtra líneas por patrones básicos o extendidos y controla contexto, recursión y códigos de salida.",
    "section": "Shell, terminal y composición de comandos",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "grep y expresiones regulares",
      "nodes": [
        "grep|entrada",
        "expresiones|mecanismo",
        "regulares|estado",
        "result|resultado"
      ],
      "outcome": "grep y expresiones regulares",
      "caption": "Filtra líneas por patrones básicos o extendidos y controla contexto, recursión y códigos de salida."
    }
  },
  {
    "title": "sed y awk",
    "description": "Transforma streams de texto con sustituciones, selección de campos y pequeños programas orientados a registros.",
    "section": "Shell, terminal y composición de comandos",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "sed y awk",
      "nodes": [
        "sed|entrada",
        "awk|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "sed y awk",
      "caption": "Transforma streams de texto con sustituciones, selección de campos y pequeños programas orientados a registros."
    }
  },
  {
    "title": "sort, uniq, cut, tr y wc",
    "description": "Compone operaciones pequeñas para ordenar, deduplicar, cortar, traducir y contar datos.",
    "section": "Shell, terminal y composición de comandos",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "sort, uniq, cut, tr y wc",
      "nodes": [
        "sort|entrada",
        "uniq|mecanismo",
        "cut|estado",
        "result|resultado"
      ],
      "outcome": "sort, uniq, cut, tr y wc",
      "caption": "Compone operaciones pequeñas para ordenar, deduplicar, cortar, traducir y contar datos."
    }
  },
  {
    "title": "jq",
    "description": "Consulta y transforma JSON desde la terminal manteniendo tipos y estructuras en lugar de cortar texto a ciegas.",
    "section": "Shell, terminal y composición de comandos",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "jq",
      "nodes": [
        "input|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "jq",
      "caption": "Consulta y transforma JSON desde la terminal manteniendo tipos y estructuras en lugar de cortar texto a ciegas."
    }
  },
  {
    "title": "Usuarios, UID y GID",
    "description": "Relaciona nombres legibles con identificadores numéricos que usa el kernel para decidir propiedad y acceso.",
    "section": "Archivos, permisos e identidad",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "UID:GID",
      "nodes": [
        "name|display",
        "UID|identity",
        "GID|primary group",
        "supplementary|access"
      ],
      "outcome": "identidad resuelta",
      "caption": "Relaciona nombres legibles con identificadores numéricos que usa el kernel para decidir propiedad y acceso."
    }
  },
  {
    "title": "Grupos primarios y suplementarios",
    "description": "Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global.",
    "section": "Archivos, permisos e identidad",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "UID:GID",
      "nodes": [
        "name|display",
        "UID|identity",
        "GID|primary group",
        "supplementary|access"
      ],
      "outcome": "identidad resuelta",
      "caption": "Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global."
    }
  },
  {
    "title": "/etc/passwd, shadow y group",
    "description": "Separa metadatos públicos, hashes protegidos y membresías de grupo.",
    "section": "Archivos, permisos e identidad",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "/etc/passwd, shadow y group",
      "nodes": [
        "etc|entrada",
        "passwd|mecanismo",
        "shadow|estado",
        "group|resultado"
      ],
      "outcome": "/etc/passwd, shadow y group",
      "caption": "Separa metadatos públicos, hashes protegidos y membresías de grupo."
    }
  },
  {
    "title": "Permisos rwx",
    "description": "Evalúa lectura, escritura y ejecución para owner, group y others, con semántica distinta en directorios.",
    "section": "Archivos, permisos e identidad",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "u=rwx,g=rx,o=",
      "nodes": [
        "owner|rwx",
        "group|r-x",
        "others|---",
        "kernel|checks"
      ],
      "outcome": "acceso autorizado",
      "caption": "Evalúa lectura, escritura y ejecución para owner, group y others, con semántica distinta en directorios."
    }
  },
  {
    "title": "chmod simbólico y octal",
    "description": "Convierte reglas como u+x y modos como 0750 en bits de permisos.",
    "section": "Archivos, permisos e identidad",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "u=rwx,g=rx,o=",
      "nodes": [
        "owner|rwx",
        "group|r-x",
        "others|---",
        "kernel|checks"
      ],
      "outcome": "acceso autorizado",
      "caption": "Convierte reglas como u+x y modos como 0750 en bits de permisos."
    }
  },
  {
    "title": "Propiedad con chown y chgrp",
    "description": "Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales.",
    "section": "Archivos, permisos e identidad",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Propiedad con chown y chgrp",
      "nodes": [
        "Propiedad|entrada",
        "con|mecanismo",
        "chown|estado",
        "chgrp|resultado"
      ],
      "outcome": "propiedad con chown y chgrp",
      "caption": "Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales."
    }
  },
  {
    "title": "umask",
    "description": "Calcula permisos iniciales quitando bits de un modo solicitado al crear archivos o directorios.",
    "section": "Archivos, permisos e identidad",
    "family": "topología y tráfico",
    "layout": "compact",
    "scene": {
      "variant": "network",
      "code": "mode & ~umask",
      "nodes": [
        "requested|0666",
        "umask|0022",
        "kernel|subtracts",
        "created|0644"
      ],
      "outcome": "modo inicial",
      "caption": "Calcula permisos iniciales quitando bits de un modo solicitado al crear archivos o directorios."
    }
  },
  {
    "title": "setuid",
    "description": "Ejecuta un binario con el effective UID de su propietario y exige una revisión de seguridad cuidadosa.",
    "section": "Archivos, permisos e identidad",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "UID:GID",
      "nodes": [
        "name|display",
        "UID|identity",
        "GID|primary group",
        "supplementary|access"
      ],
      "outcome": "identidad resuelta",
      "caption": "Ejecuta un binario con el effective UID de su propietario y exige una revisión de seguridad cuidadosa."
    }
  },
  {
    "title": "setgid",
    "description": "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos.",
    "section": "Archivos, permisos e identidad",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "UID:GID",
      "nodes": [
        "name|display",
        "UID|identity",
        "GID|primary group",
        "supplementary|access"
      ],
      "outcome": "identidad resuelta",
      "caption": "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos."
    }
  },
  {
    "title": "Sticky bit",
    "description": "Restringe borrado o renombrado dentro de directorios compartidos como /tmp al propietario adecuado.",
    "section": "Archivos, permisos e identidad",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "special mode bits",
      "nodes": [
        "setuid|effective UID",
        "setgid|group/inherit",
        "sticky|directory delete",
        "risk|audit"
      ],
      "outcome": "semántica especial",
      "caption": "Restringe borrado o renombrado dentro de directorios compartidos como /tmp al propietario adecuado."
    }
  },
  {
    "title": "ACLs",
    "description": "Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva.",
    "section": "Archivos, permisos e identidad",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "getfacl file",
      "nodes": [
        "owner|base",
        "named user|extra",
        "named group|extra",
        "mask|effective"
      ],
      "outcome": "permisos extendidos",
      "caption": "Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva."
    }
  },
  {
    "title": "sudo y sudoers",
    "description": "Delega comandos específicos con otra identidad, registra la acción y evita compartir la contraseña de root.",
    "section": "Archivos, permisos e identidad",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "sudo -u user command",
      "nodes": [
        "caller|identity",
        "policy|sudoers",
        "target|identity",
        "command|exec"
      ],
      "outcome": "privilegio delegado",
      "caption": "Delega comandos específicos con otra identidad, registra la acción y evita compartir la contraseña de root."
    }
  },
  {
    "title": "Linux capabilities",
    "description": "Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos.",
    "section": "Archivos, permisos e identidad",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "CAP_NET_BIND_SERVICE",
      "nodes": [
        "root powers|split",
        "process|effective set",
        "file|permitted set",
        "kernel|check"
      ],
      "outcome": "privilegio mínimo",
      "caption": "Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos."
    }
  },
  {
    "title": "PAM",
    "description": "Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio.",
    "section": "Archivos, permisos e identidad",
    "family": "planificación de trabajo",
    "layout": "compact",
    "scene": {
      "variant": "scheduler",
      "code": "service → PAM stack",
      "nodes": [
        "application|login",
        "modules|auth/account",
        "policy|rules",
        "session|opened"
      ],
      "outcome": "autenticación compuesta",
      "caption": "Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio."
    }
  },
  {
    "title": "Login, sesión y shell",
    "description": "Conecta autenticación, entorno, límites, directorio personal y shell inicial del usuario.",
    "section": "Archivos, permisos e identidad",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "Login, sesión y shell",
      "nodes": [
        "Login|entrada",
        "sesión|mecanismo",
        "shell|estado",
        "result|resultado"
      ],
      "outcome": "login, sesión y shell",
      "caption": "Conecta autenticación, entorno, límites, directorio personal y shell inicial del usuario."
    }
  },
  {
    "title": "Proceso, PID y PPID",
    "description": "Identifica una instancia de programa, su proceso padre y los recursos que el kernel mantiene para ella.",
    "section": "Procesos, señales y servicios",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Proceso, PID y PPID",
      "nodes": [
        "Proceso|entrada",
        "PID|mecanismo",
        "PPID|estado",
        "result|resultado"
      ],
      "outcome": "proceso, pid y ppid",
      "caption": "Identifica una instancia de programa, su proceso padre y los recursos que el kernel mantiene para ella."
    }
  },
  {
    "title": "fork y exec",
    "description": "Crea un proceso hijo y reemplaza su imagen para ejecutar un programa nuevo.",
    "section": "Procesos, señales y servicios",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "fork() → execve()",
      "nodes": [
        "parent|process",
        "fork|child copy",
        "exec|replace image",
        "program|running"
      ],
      "outcome": "nuevo programa",
      "caption": "Crea un proceso hijo y reemplaza su imagen para ejecutar un programa nuevo."
    }
  },
  {
    "title": "Estados de proceso",
    "description": "Distingue running, sleeping, uninterruptible, stopped y zombie para diagnosticar comportamiento.",
    "section": "Procesos, señales y servicios",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Estados de proceso",
      "nodes": [
        "Estados|entrada",
        "proceso|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "estados de proceso",
      "caption": "Distingue running, sleeping, uninterruptible, stopped y zombie para diagnosticar comportamiento."
    }
  },
  {
    "title": "Process groups y sessions",
    "description": "Agrupa procesos para job control, señales de terminal y demonios independientes.",
    "section": "Procesos, señales y servicios",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "top",
      "nodes": [
        "PID|process",
        "CPU|usage",
        "MEM|resident",
        "STATE|runtime"
      ],
      "outcome": "procesos observados",
      "caption": "Agrupa procesos para job control, señales de terminal y demonios independientes."
    }
  },
  {
    "title": "Señales",
    "description": "Entrega notificaciones asíncronas como SIGTERM, SIGHUP, SIGINT y SIGKILL con semánticas diferentes.",
    "section": "Procesos, señales y servicios",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "SIGTERM → cleanup → exit",
      "nodes": [
        "sender|kill",
        "kernel|delivers",
        "handler|cleanup",
        "process|exits"
      ],
      "outcome": "terminación controlada",
      "caption": "Entrega notificaciones asíncronas como SIGTERM, SIGHUP, SIGINT y SIGKILL con semánticas diferentes."
    }
  },
  {
    "title": "Foreground y background jobs",
    "description": "Conecta procesos a la terminal o permite que continúen mientras el shell acepta más comandos.",
    "section": "Procesos, señales y servicios",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "cmd & → jobs → fg",
      "nodes": [
        "shell|job table",
        "background|runs",
        "signal|SIGHUP",
        "foreground|terminal"
      ],
      "outcome": "trabajo controlado",
      "caption": "Conecta procesos a la terminal o permite que continúen mientras el shell acepta más comandos."
    }
  },
  {
    "title": "jobs, fg, bg, nohup y disown",
    "description": "Administra trabajos del shell y decide qué sucede al cerrar la sesión.",
    "section": "Procesos, señales y servicios",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "cmd & → jobs → fg",
      "nodes": [
        "shell|job table",
        "background|runs",
        "signal|SIGHUP",
        "foreground|terminal"
      ],
      "outcome": "trabajo controlado",
      "caption": "Administra trabajos del shell y decide qué sucede al cerrar la sesión."
    }
  },
  {
    "title": "ps, top y htop",
    "description": "Observa PID, estado, CPU, memoria, comando y relaciones para encontrar procesos problemáticos.",
    "section": "Procesos, señales y servicios",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "top",
      "nodes": [
        "PID|process",
        "CPU|usage",
        "MEM|resident",
        "STATE|runtime"
      ],
      "outcome": "procesos observados",
      "caption": "Observa PID, estado, CPU, memoria, comando y relaciones para encontrar procesos problemáticos."
    }
  },
  {
    "title": "nice y renice",
    "description": "Influye en la prioridad de CPU sin garantizar orden absoluto ni controlar I/O.",
    "section": "Procesos, señales y servicios",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "nice -n 10 command",
      "nodes": [
        "process|runnable",
        "nice|priority hint",
        "scheduler|chooses",
        "CPU|time slice"
      ],
      "outcome": "prioridad ajustada",
      "caption": "Influye en la prioridad de CPU sin garantizar orden absoluto ni controlar I/O."
    }
  },
  {
    "title": "/proc por proceso",
    "description": "Inspecciona cmdline, status, fd, maps, limits y cgroups de un PID específico.",
    "section": "Procesos, señales y servicios",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "cat /proc/$PID/status",
      "nodes": [
        "/proc|virtual",
        "PID|process view",
        "status|memory + state",
        "kernel|source"
      ],
      "outcome": "estado del kernel visible",
      "caption": "Inspecciona cmdline, status, fd, maps, limits y cgroups de un PID específico."
    }
  },
  {
    "title": "Daemons",
    "description": "Ejecuta servicios de larga vida sin interacción directa con un terminal.",
    "section": "Procesos, señales y servicios",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "Daemons",
      "nodes": [
        "Daemons|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "daemons",
      "caption": "Ejecuta servicios de larga vida sin interacción directa con un terminal."
    }
  },
  {
    "title": "PID 1",
    "description": "Inicia user space, adopta procesos huérfanos y coordina señales y apagado.",
    "section": "Procesos, señales y servicios",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "PID 1",
      "nodes": [
        "PID|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "pid 1",
      "caption": "Inicia user space, adopta procesos huérfanos y coordina señales y apagado."
    }
  },
  {
    "title": "systemd y units",
    "description": "Declara servicios, sockets, timers, mounts, paths y targets como unidades con dependencias.",
    "section": "Procesos, señales y servicios",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "systemctl start app.service",
      "nodes": [
        "unit|declaration",
        "dependencies|ordering",
        "service|process",
        "target|group"
      ],
      "outcome": "servicio supervisado",
      "caption": "Declara servicios, sockets, timers, mounts, paths y targets como unidades con dependencias."
    }
  },
  {
    "title": "systemctl: ciclo de vida",
    "description": "Inicia, detiene, reinicia, recarga, habilita y consulta servicios sin confundir runtime con boot.",
    "section": "Procesos, señales y servicios",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "systemctl start app.service",
      "nodes": [
        "unit|declaration",
        "dependencies|ordering",
        "service|process",
        "target|group"
      ],
      "outcome": "servicio supervisado",
      "caption": "Inicia, detiene, reinicia, recarga, habilita y consulta servicios sin confundir runtime con boot."
    }
  },
  {
    "title": "Dependencias y ordering en systemd",
    "description": "Distingue Requires/Wants de Before/After para modelar necesidad y orden por separado.",
    "section": "Procesos, señales y servicios",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "systemctl start app.service",
      "nodes": [
        "unit|declaration",
        "dependencies|ordering",
        "service|process",
        "target|group"
      ],
      "outcome": "servicio supervisado",
      "caption": "Distingue Requires/Wants de Before/After para modelar necesidad y orden por separado."
    }
  },
  {
    "title": "Service unit y tipos de arranque",
    "description": "Configura simple, exec, notify, forking, oneshot y dbus según cómo el proceso anuncia readiness.",
    "section": "Procesos, señales y servicios",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "systemctl start app.service",
      "nodes": [
        "unit|declaration",
        "dependencies|ordering",
        "service|process",
        "target|group"
      ],
      "outcome": "servicio supervisado",
      "caption": "Configura simple, exec, notify, forking, oneshot y dbus según cómo el proceso anuncia readiness."
    }
  },
  {
    "title": "EnvironmentFile y drop-ins",
    "description": "Separa configuración local y overrides de la unidad instalada sin editar archivos administrados por paquetes.",
    "section": "Procesos, señales y servicios",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "EnvironmentFile y drop-ins",
      "nodes": [
        "EnvironmentFile|entrada",
        "drop|mecanismo",
        "ins|estado",
        "result|resultado"
      ],
      "outcome": "environmentfile y drop-ins",
      "caption": "Separa configuración local y overrides de la unidad instalada sin editar archivos administrados por paquetes."
    }
  },
  {
    "title": "journalctl",
    "description": "Consulta logs estructurados por unidad, boot, prioridad, tiempo, PID y campos.",
    "section": "Procesos, señales y servicios",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "journalctl -u app -f",
      "nodes": [
        "service|stdout",
        "journald|indexes",
        "query|filters",
        "operator|follows"
      ],
      "outcome": "logs consultables",
      "caption": "Consulta logs estructurados por unidad, boot, prioridad, tiempo, PID y campos."
    }
  },
  {
    "title": "systemd timers",
    "description": "Programa trabajos con calendario, monotonic timers, persistencia y relación explícita con un service.",
    "section": "Procesos, señales y servicios",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "systemctl start app.service",
      "nodes": [
        "unit|declaration",
        "dependencies|ordering",
        "service|process",
        "target|group"
      ],
      "outcome": "servicio supervisado",
      "caption": "Programa trabajos con calendario, monotonic timers, persistencia y relación explícita con un service."
    }
  },
  {
    "title": "Socket activation",
    "description": "Permite que systemd escuche primero y arranque el servicio cuando llega una conexión.",
    "section": "Procesos, señales y servicios",
    "family": "ida y vuelta",
    "layout": "compact",
    "scene": {
      "variant": "request",
      "code": "systemctl start app.service",
      "nodes": [
        "unit|declaration",
        "dependencies|ordering",
        "service|process",
        "target|group"
      ],
      "outcome": "servicio supervisado",
      "caption": "Permite que systemd escuche primero y arranque el servicio cuando llega una conexión."
    }
  },
  {
    "title": "cgroups v2",
    "description": "Organiza procesos jerárquicamente y distribuye CPU, memoria, I/O y cantidad de PIDs.",
    "section": "Procesos, señales y servicios",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "top",
      "nodes": [
        "PID|process",
        "CPU|usage",
        "MEM|resident",
        "STATE|runtime"
      ],
      "outcome": "procesos observados",
      "caption": "Organiza procesos jerárquicamente y distribuye CPU, memoria, I/O y cantidad de PIDs."
    }
  },
  {
    "title": "OOM killer",
    "description": "Selecciona procesos cuando no puede satisfacerse memoria y muestra por qué los límites importan.",
    "section": "Procesos, señales y servicios",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "memory pressure → OOM",
      "nodes": [
        "memory|exhausted",
        "score|victim",
        "kernel|kills",
        "service|recovers"
      ],
      "outcome": "presión resuelta",
      "caption": "Selecciona procesos cuando no puede satisfacerse memoria y muestra por qué los límites importan."
    }
  },
  {
    "title": "Graceful shutdown",
    "description": "Deja de aceptar trabajo, termina solicitudes, persiste estado y sale antes del deadline.",
    "section": "Procesos, señales y servicios",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "Graceful shutdown",
      "nodes": [
        "Graceful|entrada",
        "shutdown|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "graceful shutdown",
      "caption": "Deja de aceptar trabajo, termina solicitudes, persiste estado y sale antes del deadline."
    }
  },
  {
    "title": "Interfaces de red",
    "description": "Representa dispositivos físicos y virtuales con estado, MTU, direcciones y colas.",
    "section": "Redes y acceso remoto",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Interfaces de red",
      "nodes": [
        "Interfaces|entrada",
        "red|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "interfaces de red",
      "caption": "Representa dispositivos físicos y virtuales con estado, MTU, direcciones y colas."
    }
  },
  {
    "title": "Direcciones IP y CIDR",
    "description": "Separa prefijo de red y bits de host para calcular alcance y rutas.",
    "section": "Redes y acceso remoto",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "192.168.1.0/24",
      "nodes": [
        "network|prefix",
        "host|bits",
        "range|addresses",
        "route|match"
      ],
      "outcome": "red delimitada",
      "caption": "Separa prefijo de red y bits de host para calcular alcance y rutas."
    }
  },
  {
    "title": "Tabla de routing",
    "description": "Elige el siguiente salto mediante la coincidencia de prefijo más larga y una interfaz de salida.",
    "section": "Redes y acceso remoto",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "Tabla de routing",
      "nodes": [
        "Tabla|entrada",
        "routing|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "tabla de routing",
      "caption": "Elige el siguiente salto mediante la coincidencia de prefijo más larga y una interfaz de salida."
    }
  },
  {
    "title": "Default gateway",
    "description": "Encamina destinos no cubiertos por rutas más específicas hacia un router.",
    "section": "Redes y acceso remoto",
    "family": "máquina de estados",
    "layout": "compact",
    "scene": {
      "variant": "state-machine",
      "code": "ip route get 8.8.8.8",
      "nodes": [
        "destination|lookup",
        "prefix|longest match",
        "gateway|next hop",
        "interface|egress"
      ],
      "outcome": "paquete encaminado",
      "caption": "Encamina destinos no cubiertos por rutas más específicas hacia un router."
    }
  },
  {
    "title": "ARP y Neighbor Discovery",
    "description": "Resuelve direcciones de capa 3 a vecinos de capa 2 en IPv4 o IPv6.",
    "section": "Redes y acceso remoto",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "ARP y Neighbor Discovery",
      "nodes": [
        "ARP|entrada",
        "Neighbor|mecanismo",
        "Discovery|estado",
        "result|resultado"
      ],
      "outcome": "arp y neighbor discovery",
      "caption": "Resuelve direcciones de capa 3 a vecinos de capa 2 en IPv4 o IPv6."
    }
  },
  {
    "title": "DNS resolver",
    "description": "Consulta cache local, configuración, servidores y registros para convertir nombres en direcciones.",
    "section": "Redes y acceso remoto",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "name → resolver → IP",
      "nodes": [
        "application|name",
        "resolver|cache",
        "DNS|records",
        "socket|address"
      ],
      "outcome": "nombre resuelto",
      "caption": "Consulta cache local, configuración, servidores y registros para convertir nombres en direcciones."
    }
  },
  {
    "title": "/etc/hosts y nsswitch.conf",
    "description": "Controla fuentes y orden de resolución de nombres antes o además de DNS.",
    "section": "Redes y acceso remoto",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "/etc/hosts y nsswitch.conf",
      "nodes": [
        "etc|entrada",
        "hosts|mecanismo",
        "nsswitch|estado",
        "conf|resultado"
      ],
      "outcome": "/etc/hosts y nsswitch.conf",
      "caption": "Controla fuentes y orden de resolución de nombres antes o además de DNS."
    }
  },
  {
    "title": "Sockets y puertos",
    "description": "Asocia procesos con endpoints de comunicación y permite demultiplexar conexiones.",
    "section": "Redes y acceso remoto",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "IP:port",
      "nodes": [
        "process|endpoint",
        "socket|kernel object",
        "port|demux",
        "connection|peer"
      ],
      "outcome": "canal abierto",
      "caption": "Asocia procesos con endpoints de comunicación y permite demultiplexar conexiones."
    }
  },
  {
    "title": "TCP",
    "description": "Proporciona stream confiable, ordenado y controlado por conexión, flujo y congestión.",
    "section": "Redes y acceso remoto",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "TCP vs UDP",
      "nodes": [
        "TCP|ordered stream",
        "UDP|datagrams",
        "loss|behavior",
        "latency|tradeoff"
      ],
      "outcome": "transporte elegido",
      "caption": "Proporciona stream confiable, ordenado y controlado por conexión, flujo y congestión."
    }
  },
  {
    "title": "UDP",
    "description": "Envía datagramas sin sesión ni garantía de entrega, útil cuando la aplicación controla pérdidas o latencia.",
    "section": "Redes y acceso remoto",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "TCP vs UDP",
      "nodes": [
        "TCP|ordered stream",
        "UDP|datagrams",
        "loss|behavior",
        "latency|tradeoff"
      ],
      "outcome": "transporte elegido",
      "caption": "Envía datagramas sin sesión ni garantía de entrega, útil cuando la aplicación controla pérdidas o latencia."
    }
  },
  {
    "title": "Loopback y localhost",
    "description": "Permite comunicación dentro del mismo host sin atravesar una interfaz física.",
    "section": "Redes y acceso remoto",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "Loopback y localhost",
      "nodes": [
        "Loopback|entrada",
        "localhost|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "loopback y localhost",
      "caption": "Permite comunicación dentro del mismo host sin atravesar una interfaz física."
    }
  },
  {
    "title": "ip addr, link y route",
    "description": "Administra interfaces, direcciones y rutas con la herramienta moderna iproute2.",
    "section": "Redes y acceso remoto",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "ip route get 8.8.8.8",
      "nodes": [
        "destination|lookup",
        "prefix|longest match",
        "gateway|next hop",
        "interface|egress"
      ],
      "outcome": "paquete encaminado",
      "caption": "Administra interfaces, direcciones y rutas con la herramienta moderna iproute2."
    }
  },
  {
    "title": "ss",
    "description": "Inspecciona sockets escuchando y conectados con estados, procesos y estadísticas.",
    "section": "Redes y acceso remoto",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "ss",
      "nodes": [
        "input|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "ss",
      "caption": "Inspecciona sockets escuchando y conectados con estados, procesos y estadísticas."
    }
  },
  {
    "title": "ping y ICMP",
    "description": "Prueba reachability y latencia aproximada sin demostrar que una aplicación concreta funciona.",
    "section": "Redes y acceso remoto",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "ping y ICMP",
      "nodes": [
        "ping|entrada",
        "ICMP|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "ping y icmp",
      "caption": "Prueba reachability y latencia aproximada sin demostrar que una aplicación concreta funciona."
    }
  },
  {
    "title": "traceroute y tracepath",
    "description": "Infieren saltos y MTU observando respuestas generadas por el camino.",
    "section": "Redes y acceso remoto",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "PATH=/usr/local/bin:/usr/bin",
      "nodes": [
        "command|node",
        "PATH|directories",
        "execve|candidate",
        "binary|found"
      ],
      "outcome": "comando localizado",
      "caption": "Infieren saltos y MTU observando respuestas generadas por el camino."
    }
  },
  {
    "title": "curl y wget",
    "description": "Realizan solicitudes y descargas para inspeccionar DNS, TLS, headers, cuerpo y tiempos.",
    "section": "Redes y acceso remoto",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "curl y wget",
      "nodes": [
        "curl|entrada",
        "wget|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "curl y wget",
      "caption": "Realizan solicitudes y descargas para inspeccionar DNS, TLS, headers, cuerpo y tiempos."
    }
  },
  {
    "title": "dig y resolvectl",
    "description": "Consulta registros y el estado del resolver para separar fallos de DNS de problemas de red.",
    "section": "Redes y acceso remoto",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "dig y resolvectl",
      "nodes": [
        "dig|entrada",
        "resolvectl|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "dig y resolvectl",
      "caption": "Consulta registros y el estado del resolver para separar fallos de DNS de problemas de red."
    }
  },
  {
    "title": "nftables",
    "description": "Filtra, transforma y registra paquetes con tablas, chains, rules, sets y verdicts.",
    "section": "Redes y acceso remoto",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "packet → ruleset",
      "nodes": [
        "packet|5-tuple",
        "chain|hook",
        "rule|match",
        "verdict|accept/drop"
      ],
      "outcome": "tráfico filtrado",
      "caption": "Filtra, transforma y registra paquetes con tablas, chains, rules, sets y verdicts."
    }
  },
  {
    "title": "SSH",
    "description": "Crea un canal cifrado para autenticar host y usuario, ejecutar comandos y transferir datos.",
    "section": "Redes y acceso remoto",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "ssh user@host",
      "nodes": [
        "client|key",
        "network|encrypted",
        "sshd|auth",
        "shell|session"
      ],
      "outcome": "sesión remota",
      "caption": "Crea un canal cifrado para autenticar host y usuario, ejecutar comandos y transferir datos."
    }
  },
  {
    "title": "Claves SSH",
    "description": "Usa pares pública/privada, authorized_keys y permisos correctos en lugar de copiar secretos.",
    "section": "Redes y acceso remoto",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "ssh user@host",
      "nodes": [
        "client|key",
        "network|encrypted",
        "sshd|auth",
        "shell|session"
      ],
      "outcome": "sesión remota",
      "caption": "Usa pares pública/privada, authorized_keys y permisos correctos en lugar de copiar secretos."
    }
  },
  {
    "title": "ssh-agent",
    "description": "Mantiene claves desbloqueadas en memoria y firma desafíos sin exponer la clave privada a cada proceso.",
    "section": "Redes y acceso remoto",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "ssh user@host",
      "nodes": [
        "client|key",
        "network|encrypted",
        "sshd|auth",
        "shell|session"
      ],
      "outcome": "sesión remota",
      "caption": "Mantiene claves desbloqueadas en memoria y firma desafíos sin exponer la clave privada a cada proceso."
    }
  },
  {
    "title": "known_hosts",
    "description": "Protege contra suplantación verificando la identidad persistente del servidor.",
    "section": "Redes y acceso remoto",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "server host key",
      "nodes": [
        "host|identity",
        "known_hosts|expected",
        "fingerprint|compare",
        "client|accept/reject"
      ],
      "outcome": "servidor verificado",
      "caption": "Protege contra suplantación verificando la identidad persistente del servidor."
    }
  },
  {
    "title": "SSH config",
    "description": "Define alias, usuario, host, puerto, identidad, proxy y forwarding por destino.",
    "section": "Redes y acceso remoto",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "ssh user@host",
      "nodes": [
        "client|key",
        "network|encrypted",
        "sshd|auth",
        "shell|session"
      ],
      "outcome": "sesión remota",
      "caption": "Define alias, usuario, host, puerto, identidad, proxy y forwarding por destino."
    }
  },
  {
    "title": "SCP, SFTP y rsync",
    "description": "Transfiere archivos; rsync sincroniza diferencias y conserva atributos con opciones explícitas.",
    "section": "Redes y acceso remoto",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "SCP, SFTP y rsync",
      "nodes": [
        "SCP|entrada",
        "SFTP|mecanismo",
        "rsync|estado",
        "result|resultado"
      ],
      "outcome": "scp, sftp y rsync",
      "caption": "Transfiere archivos; rsync sincroniza diferencias y conserva atributos con opciones explícitas."
    }
  },
  {
    "title": "Port forwarding SSH",
    "description": "Expone servicios mediante túneles local, remote o dynamic sin hacerlos públicos directamente.",
    "section": "Redes y acceso remoto",
    "family": "consulta e índice",
    "layout": "compact",
    "scene": {
      "variant": "database",
      "code": "IP:port",
      "nodes": [
        "process|endpoint",
        "socket|kernel object",
        "port|demux",
        "connection|peer"
      ],
      "outcome": "canal abierto",
      "caption": "Expone servicios mediante túneles local, remote o dynamic sin hacerlos públicos directamente."
    }
  },
  {
    "title": "TLS desde la terminal",
    "description": "Inspecciona certificado, cadena, SNI, protocolos y fechas para diagnosticar HTTPS.",
    "section": "Redes y acceso remoto",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "terminal emulator vs shell",
      "nodes": [
        "terminal|I/O surface",
        "shell|parser",
        "PTY|channel",
        "process|command"
      ],
      "outcome": "sesión interactiva",
      "caption": "Inspecciona certificado, cadena, SNI, protocolos y fechas para diagnosticar HTTPS."
    }
  },
  {
    "title": "Sincronización de hora",
    "description": "Mantiene reloj y zona correctos para TLS, logs, autenticación y sistemas distribuidos.",
    "section": "Redes y acceso remoto",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "schedule → trigger → job",
      "nodes": [
        "calendar|expression",
        "scheduler|wakes",
        "job|runs",
        "logs|result"
      ],
      "outcome": "trabajo periódico",
      "caption": "Mantiene reloj y zona correctos para TLS, logs, autenticación y sistemas distribuidos."
    }
  },
  {
    "title": "Block devices",
    "description": "Exponen almacenamiento como bloques direccionables que pueden particionarse o usarse directamente.",
    "section": "Almacenamiento y filesystems",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "disk → partition → filesystem",
      "nodes": [
        "device|blocks",
        "partition table|ranges",
        "partition|slice",
        "filesystem|structure"
      ],
      "outcome": "almacenamiento preparado",
      "caption": "Exponen almacenamiento como bloques direccionables que pueden particionarse o usarse directamente."
    }
  },
  {
    "title": "GPT y particiones",
    "description": "Describe regiones del dispositivo con identificadores y tipos sin crear todavía un filesystem.",
    "section": "Almacenamiento y filesystems",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "disk → partition → filesystem",
      "nodes": [
        "device|blocks",
        "partition table|ranges",
        "partition|slice",
        "filesystem|structure"
      ],
      "outcome": "almacenamiento preparado",
      "caption": "Describe regiones del dispositivo con identificadores y tipos sin crear todavía un filesystem."
    }
  },
  {
    "title": "Filesystem",
    "description": "Organiza nombres, metadatos y bloques; ext4, XFS y Btrfs ofrecen compromisos diferentes.",
    "section": "Almacenamiento y filesystems",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "Filesystem",
      "nodes": [
        "Filesystem|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "filesystem",
      "caption": "Organiza nombres, metadatos y bloques; ext4, XFS y Btrfs ofrecen compromisos diferentes."
    }
  },
  {
    "title": "VFS",
    "description": "Ofrece una interfaz común para que múltiples filesystems respondan a open, read, write y stat.",
    "section": "Almacenamiento y filesystems",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "open() → VFS → ext4/xfs",
      "nodes": [
        "syscall|generic",
        "VFS|interface",
        "filesystem|implementation",
        "device|blocks"
      ],
      "outcome": "acceso unificado",
      "caption": "Ofrece una interfaz común para que múltiples filesystems respondan a open, read, write y stat."
    }
  },
  {
    "title": "Inodes y dentries",
    "description": "Separa identidad y metadatos del archivo de los nombres usados para llegar a él.",
    "section": "Almacenamiento y filesystems",
    "family": "jerarquía y dependencias",
    "layout": "compact",
    "scene": {
      "variant": "tree",
      "code": "path → dentry → inode",
      "nodes": [
        "path|names",
        "dentry|cache",
        "inode|metadata",
        "blocks|content"
      ],
      "outcome": "archivo localizado",
      "caption": "Separa identidad y metadatos del archivo de los nombres usados para llegar a él."
    }
  },
  {
    "title": "Montaje",
    "description": "Adjunta un filesystem a un punto del árbol global y aplica opciones operativas y de seguridad.",
    "section": "Almacenamiento y filesystems",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "Montaje",
      "nodes": [
        "Montaje|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "montaje",
      "caption": "Adjunta un filesystem a un punto del árbol global y aplica opciones operativas y de seguridad."
    }
  },
  {
    "title": "/etc/fstab",
    "description": "Declara montajes persistentes por UUID, tipo, opciones y comportamiento ante fallos.",
    "section": "Almacenamiento y filesystems",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "mount device /srv",
      "nodes": [
        "device|source",
        "filesystem|type",
        "mountpoint|path",
        "options|policy"
      ],
      "outcome": "árbol ampliado",
      "caption": "Declara montajes persistentes por UUID, tipo, opciones y comportamiento ante fallos."
    }
  },
  {
    "title": "df, du e inodos",
    "description": "Diferencia espacio del filesystem, bloques referenciados por rutas y agotamiento de inodos.",
    "section": "Almacenamiento y filesystems",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "df, du e inodos",
      "nodes": [
        "inodos|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "df, du e inodos",
      "caption": "Diferencia espacio del filesystem, bloques referenciados por rutas y agotamiento de inodos."
    }
  },
  {
    "title": "Hard links",
    "description": "Añaden otro nombre al mismo inode y conservan el contenido mientras exista al menos un enlace.",
    "section": "Almacenamiento y filesystems",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "hard link vs symlink",
      "nodes": [
        "hard link|same inode",
        "symlink|path text",
        "rename|behavior",
        "filesystem|boundary"
      ],
      "outcome": "enlace comprendido",
      "caption": "Añaden otro nombre al mismo inode y conservan el contenido mientras exista al menos un enlace."
    }
  },
  {
    "title": "Symbolic links",
    "description": "Guardan una ruta que puede cruzar filesystems y quedar rota si el destino cambia.",
    "section": "Almacenamiento y filesystems",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "hard link vs symlink",
      "nodes": [
        "hard link|same inode",
        "symlink|path text",
        "rename|behavior",
        "filesystem|boundary"
      ],
      "outcome": "enlace comprendido",
      "caption": "Guardan una ruta que puede cruzar filesystems y quedar rota si el destino cambia."
    }
  },
  {
    "title": "Journaling",
    "description": "Registra metadatos o datos antes de aplicarlos para recuperar consistencia tras un crash.",
    "section": "Almacenamiento y filesystems",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "Journaling",
      "nodes": [
        "Journaling|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "journaling",
      "caption": "Registra metadatos o datos antes de aplicarlos para recuperar consistencia tras un crash."
    }
  },
  {
    "title": "LVM",
    "description": "Compone physical volumes, volume groups y logical volumes para redimensionar almacenamiento.",
    "section": "Almacenamiento y filesystems",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "PV → VG → LV → FS",
      "nodes": [
        "PV|disks",
        "VG|pool",
        "LV|virtual block",
        "FS|mounted"
      ],
      "outcome": "volumen flexible",
      "caption": "Compone physical volumes, volume groups y logical volumes para redimensionar almacenamiento."
    }
  },
  {
    "title": "RAID",
    "description": "Combina discos para rendimiento o redundancia, pero no reemplaza backups independientes.",
    "section": "Almacenamiento y filesystems",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "RAID 1 vs RAID 5",
      "nodes": [
        "mirror|redundancy",
        "parity|capacity",
        "failure|tolerance",
        "backup|not same"
      ],
      "outcome": "redundancia elegida",
      "caption": "Combina discos para rendimiento o redundancia, pero no reemplaza backups independientes."
    }
  },
  {
    "title": "Swap",
    "description": "Almacena páginas frías fuera de RAM y afecta latencia, presión y comportamiento del OOM.",
    "section": "Almacenamiento y filesystems",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "cold pages → swap",
      "nodes": [
        "RAM|pressure",
        "page|candidate",
        "swap|disk",
        "resume|page-in"
      ],
      "outcome": "memoria extendida",
      "caption": "Almacena páginas frías fuera de RAM y afecta latencia, presión y comportamiento del OOM."
    }
  },
  {
    "title": "Quotas",
    "description": "Limita bloques o inodos por usuario, grupo o proyecto para evitar monopolizar un filesystem.",
    "section": "Almacenamiento y filesystems",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "Quotas",
      "nodes": [
        "Quotas|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "quotas",
      "caption": "Limita bloques o inodos por usuario, grupo o proyecto para evitar monopolizar un filesystem."
    }
  },
  {
    "title": "File locks",
    "description": "Coordina procesos mediante locks advisory o mandatory entendiendo alcance y liberación.",
    "section": "Almacenamiento y filesystems",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "File locks",
      "nodes": [
        "File|entrada",
        "locks|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "file locks",
      "caption": "Coordina procesos mediante locks advisory o mandatory entendiendo alcance y liberación."
    }
  },
  {
    "title": "tmpfs",
    "description": "Guarda archivos en memoria y swap con ciclo de vida temporal y tamaño limitado.",
    "section": "Almacenamiento y filesystems",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "tmpfs",
      "nodes": [
        "tmpfs|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "tmpfs",
      "caption": "Guarda archivos en memoria y swap con ciclo de vida temporal y tamaño limitado."
    }
  },
  {
    "title": "tar y compresión",
    "description": "Empaqueta árboles y luego comprime streams, conservando permisos y rutas según opciones.",
    "section": "Almacenamiento y filesystems",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "tar y compresión",
      "nodes": [
        "tar|entrada",
        "compresión|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "tar y compresión",
      "caption": "Empaqueta árboles y luego comprime streams, conservando permisos y rutas según opciones."
    }
  },
  {
    "title": "Backups y restauración",
    "description": "Distingue copia, retención, verificación y prueba de restore con objetivos de recuperación.",
    "section": "Almacenamiento y filesystems",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "top",
      "nodes": [
        "PID|process",
        "CPU|usage",
        "MEM|resident",
        "STATE|runtime"
      ],
      "outcome": "procesos observados",
      "caption": "Distingue copia, retención, verificación y prueba de restore con objetivos de recuperación."
    }
  },
  {
    "title": "Logs del sistema",
    "description": "Correlaciona mensajes de aplicaciones, servicios y kernel por tiempo, unidad y request-id.",
    "section": "Observabilidad y troubleshooting",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "Logs del sistema",
      "nodes": [
        "Logs|entrada",
        "del|mecanismo",
        "sistema|estado",
        "result|resultado"
      ],
      "outcome": "logs del sistema",
      "caption": "Correlaciona mensajes de aplicaciones, servicios y kernel por tiempo, unidad y request-id."
    }
  },
  {
    "title": "dmesg",
    "description": "Lee el ring buffer del kernel para detectar drivers, hardware, OOM, mounts y fallos de arranque.",
    "section": "Observabilidad y troubleshooting",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "dmesg -T",
      "nodes": [
        "kernel|events",
        "driver|messages",
        "hardware|fault",
        "operator|filters"
      ],
      "outcome": "kernel diagnosticado",
      "caption": "Lee el ring buffer del kernel para detectar drivers, hardware, OOM, mounts y fallos de arranque."
    }
  },
  {
    "title": "CPU y load average",
    "description": "Compara utilización por core con procesos runnable o bloqueados en I/O.",
    "section": "Observabilidad y troubleshooting",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "load ≠ CPU%",
      "nodes": [
        "runnable|queue",
        "uninterruptible|I/O wait",
        "cores|capacity",
        "trend|context"
      ],
      "outcome": "carga interpretada",
      "caption": "Compara utilización por core con procesos runnable o bloqueados en I/O."
    }
  },
  {
    "title": "Memoria virtual",
    "description": "Separa espacio virtual, memoria residente, shared, anonymous, mappings y swap.",
    "section": "Observabilidad y troubleshooting",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Memoria virtual",
      "nodes": [
        "Memoria|entrada",
        "virtual|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "memoria virtual",
      "caption": "Separa espacio virtual, memoria residente, shared, anonymous, mappings y swap."
    }
  },
  {
    "title": "Page cache",
    "description": "Acelera lecturas y agrupa escrituras usando RAM libre como caché recuperable.",
    "section": "Observabilidad y troubleshooting",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "disk → page cache → process",
      "nodes": [
        "disk|slow",
        "cache|RAM",
        "read|hit/miss",
        "writeback|later"
      ],
      "outcome": "I/O amortizado",
      "caption": "Acelera lecturas y agrupa escrituras usando RAM libre como caché recuperable."
    }
  },
  {
    "title": "I/O y latencia de disco",
    "description": "Observa throughput, queue depth, utilization y await para localizar saturación.",
    "section": "Observabilidad y troubleshooting",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "I/O y latencia de disco",
      "nodes": [
        "latencia|entrada",
        "disco|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "i/o y latencia de disco",
      "caption": "Observa throughput, queue depth, utilization y await para localizar saturación."
    }
  },
  {
    "title": "Open files y lsof",
    "description": "Relaciona procesos con archivos, sockets, cwd, libraries y descriptores abiertos.",
    "section": "Observabilidad y troubleshooting",
    "family": "cola y consumidor",
    "layout": "compact",
    "scene": {
      "variant": "queue",
      "code": "lsof -p PID",
      "nodes": [
        "process|owner",
        "fd|number",
        "type|socket/file",
        "name|target"
      ],
      "outcome": "descriptores visibles",
      "caption": "Relaciona procesos con archivos, sockets, cwd, libraries y descriptores abiertos."
    }
  },
  {
    "title": "strace",
    "description": "Observa system calls, errores y tiempos para localizar la frontera donde un proceso falla o espera.",
    "section": "Observabilidad y troubleshooting",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "strace -p PID",
      "nodes": [
        "process|syscalls",
        "kernel|returns",
        "timestamps|latency",
        "operator|diagnoses"
      ],
      "outcome": "frontera observada",
      "caption": "Observa system calls, errores y tiempos para localizar la frontera donde un proceso falla o espera."
    }
  },
  {
    "title": "perf y profiling",
    "description": "Muestrea CPU, call stacks y eventos de hardware para encontrar trabajo costoso.",
    "section": "Observabilidad y troubleshooting",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "perf y profiling",
      "nodes": [
        "perf|entrada",
        "profiling|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "perf y profiling",
      "caption": "Muestrea CPU, call stacks y eventos de hardware para encontrar trabajo costoso."
    }
  },
  {
    "title": "Core dumps",
    "description": "Capturan memoria y registros de un proceso al fallar para analizarlos con debugger.",
    "section": "Observabilidad y troubleshooting",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "top",
      "nodes": [
        "PID|process",
        "CPU|usage",
        "MEM|resident",
        "STATE|runtime"
      ],
      "outcome": "procesos observados",
      "caption": "Capturan memoria y registros de un proceso al fallar para analizarlos con debugger."
    }
  },
  {
    "title": "Límites de recursos",
    "description": "Consulta y ajusta file descriptors, procesos, stack, core y otros límites por sesión o servicio.",
    "section": "Observabilidad y troubleshooting",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Límites de recursos",
      "nodes": [
        "Límites|entrada",
        "recursos|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "límites de recursos",
      "caption": "Consulta y ajusta file descriptors, procesos, stack, core y otros límites por sesión o servicio."
    }
  },
  {
    "title": "Agotamiento de file descriptors",
    "description": "Identifica leaks o límites bajos cuando aparecen errores EMFILE o conexiones rechazadas.",
    "section": "Observabilidad y troubleshooting",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "cmd >out 2>err",
      "nodes": [
        "fd 0|stdin",
        "fd 1|stdout",
        "fd 2|stderr",
        "file|destination"
      ],
      "outcome": "I/O redirigida",
      "caption": "Identifica leaks o límites bajos cuando aparecen errores EMFILE o conexiones rechazadas."
    }
  },
  {
    "title": "Disco lleno vs inodos llenos",
    "description": "Distingue falta de bloques de falta de nombres disponibles y encuentra el directorio responsable.",
    "section": "Observabilidad y troubleshooting",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Disco lleno vs inodos llenos",
      "nodes": [
        "Disco|entrada",
        "lleno|mecanismo",
        "inodos|estado",
        "llenos|resultado"
      ],
      "outcome": "disco lleno vs inodos llenos",
      "caption": "Distingue falta de bloques de falta de nombres disponibles y encuentra el directorio responsable."
    }
  },
  {
    "title": "Diagnóstico DNS",
    "description": "Verifica configuración, cache, autoridad, registros, TTL y conectividad antes de culpar a la aplicación.",
    "section": "Observabilidad y troubleshooting",
    "family": "topología y tráfico",
    "layout": "compact",
    "scene": {
      "variant": "network",
      "code": "name → resolver → IP",
      "nodes": [
        "application|name",
        "resolver|cache",
        "DNS|records",
        "socket|address"
      ],
      "outcome": "nombre resuelto",
      "caption": "Verifica configuración, cache, autoridad, registros, TTL y conectividad antes de culpar a la aplicación."
    }
  },
  {
    "title": "Diagnóstico de servicio",
    "description": "Revisa status, exit code, journal, unidad, permisos, puertos, dependencias y recursos.",
    "section": "Observabilidad y troubleshooting",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Diagnóstico de servicio",
      "nodes": [
        "Diagnóstico|entrada",
        "servicio|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "diagnóstico de servicio",
      "caption": "Revisa status, exit code, journal, unidad, permisos, puertos, dependencias y recursos."
    }
  },
  {
    "title": "Diagnóstico de red",
    "description": "Sigue link, IP, route, DNS, socket, firewall, TLS y aplicación en orden.",
    "section": "Observabilidad y troubleshooting",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "Diagnóstico de red",
      "nodes": [
        "Diagnóstico|entrada",
        "red|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "diagnóstico de red",
      "caption": "Sigue link, IP, route, DNS, socket, firewall, TLS y aplicación en orden."
    }
  },
  {
    "title": "Boot recovery",
    "description": "Usa targets rescue/emergency, kernel cmdline y logs del boot anterior para recuperar un host.",
    "section": "Observabilidad y troubleshooting",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "UEFI → bootloader → kernel → PID 1",
      "nodes": [
        "firmware|hardware",
        "bootloader|kernel image",
        "kernel|drivers + rootfs",
        "PID 1|userspace"
      ],
      "outcome": "sistema iniciado",
      "caption": "Usa targets rescue/emergency, kernel cmdline y logs del boot anterior para recuperar un host."
    }
  },
  {
    "title": "Log rotation",
    "description": "Rota, comprime, retiene y reabre logs sin perder espacio ni dejar procesos escribiendo archivos borrados.",
    "section": "Observabilidad y troubleshooting",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Log rotation",
      "nodes": [
        "Log|entrada",
        "rotation|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "log rotation",
      "caption": "Rota, comprime, retiene y reabre logs sin perder espacio ni dejar procesos escribiendo archivos borrados."
    }
  },
  {
    "title": "Principio de mínimo privilegio",
    "description": "Reduce usuarios, grupos, capabilities, rutas y operaciones disponibles a cada proceso.",
    "section": "Seguridad y hardening",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "Principio de mínimo privilegio",
      "nodes": [
        "Principio|entrada",
        "mínimo|mecanismo",
        "privilegio|estado",
        "result|resultado"
      ],
      "outcome": "principio de mínimo privilegio",
      "caption": "Reduce usuarios, grupos, capabilities, rutas y operaciones disponibles a cada proceso."
    }
  },
  {
    "title": "Actualizaciones de seguridad",
    "description": "Aplica parches con inventario, ventana, prueba, reboot cuando corresponde y verificación posterior.",
    "section": "Seguridad y hardening",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "Actualizaciones de seguridad",
      "nodes": [
        "Actualizaciones|entrada",
        "seguridad|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "actualizaciones de seguridad",
      "caption": "Aplica parches con inventario, ventana, prueba, reboot cuando corresponde y verificación posterior."
    }
  },
  {
    "title": "Hardening de SSH",
    "description": "Desactiva métodos innecesarios, limita usuarios, protege claves y conserva una ruta segura de recuperación.",
    "section": "Seguridad y hardening",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "ssh user@host",
      "nodes": [
        "client|key",
        "network|encrypted",
        "sshd|auth",
        "shell|session"
      ],
      "outcome": "sesión remota",
      "caption": "Desactiva métodos innecesarios, limita usuarios, protege claves y conserva una ruta segura de recuperación."
    }
  },
  {
    "title": "Firewall default deny",
    "description": "Permite solo flujos conocidos y documentados en lugar de bloquear casos aislados.",
    "section": "Seguridad y hardening",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "packet → ruleset",
      "nodes": [
        "packet|5-tuple",
        "chain|hook",
        "rule|match",
        "verdict|accept/drop"
      ],
      "outcome": "tráfico filtrado",
      "caption": "Permite solo flujos conocidos y documentados en lugar de bloquear casos aislados."
    }
  },
  {
    "title": "SELinux y AppArmor",
    "description": "Añaden mandatory access control para restringir procesos incluso si permisos Unix permiten acceso.",
    "section": "Seguridad y hardening",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "process + object + policy",
      "nodes": [
        "subject|domain",
        "object|label/path",
        "policy|rule",
        "kernel|allow/deny"
      ],
      "outcome": "MAC aplicado",
      "caption": "Añaden mandatory access control para restringir procesos incluso si permisos Unix permiten acceso."
    }
  },
  {
    "title": "auditd",
    "description": "Registra eventos de seguridad y cambios sensibles con reglas y contexto de identidad.",
    "section": "Seguridad y hardening",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "syscall → audit record",
      "nodes": [
        "rule|watch",
        "kernel|event",
        "auditd|collect",
        "report|trace"
      ],
      "outcome": "acción auditada",
      "caption": "Registra eventos de seguridad y cambios sensibles con reglas y contexto de identidad."
    }
  },
  {
    "title": "Gestión de secretos",
    "description": "Evita secretos en argumentos, repositorios, imágenes y logs; usa archivos protegidos o stores dedicados.",
    "section": "Seguridad y hardening",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "Gestión de secretos",
      "nodes": [
        "Gestión|entrada",
        "secretos|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "gestión de secretos",
      "caption": "Evita secretos en argumentos, repositorios, imágenes y logs; usa archivos protegidos o stores dedicados."
    }
  },
  {
    "title": "Integridad de archivos",
    "description": "Detecta cambios inesperados en binarios y configuración mediante hashes, paquetes firmados o medición.",
    "section": "Seguridad y hardening",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Integridad de archivos",
      "nodes": [
        "Integridad|entrada",
        "archivos|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "integridad de archivos",
      "caption": "Detecta cambios inesperados en binarios y configuración mediante hashes, paquetes firmados o medición."
    }
  },
  {
    "title": "seccomp",
    "description": "Filtra system calls disponibles para reducir la superficie del kernel expuesta a un proceso.",
    "section": "Seguridad y hardening",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "syscall allowlist",
      "nodes": [
        "process|request",
        "filter|BPF",
        "syscall|number",
        "kernel|allow/kill"
      ],
      "outcome": "superficie reducida",
      "caption": "Filtra system calls disponibles para reducir la superficie del kernel expuesta a un proceso."
    }
  },
  {
    "title": "Namespaces",
    "description": "Aíslan vistas de mounts, PIDs, red, usuarios, IPC, UTS, cgroups y tiempo.",
    "section": "Seguridad y hardening",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "process namespaces",
      "nodes": [
        "mount|view",
        "pid|process IDs",
        "net|interfaces",
        "user|UID mapping"
      ],
      "outcome": "aislamiento de vista",
      "caption": "Aíslan vistas de mounts, PIDs, red, usuarios, IPC, UTS, cgroups y tiempo."
    }
  },
  {
    "title": "sysctl de seguridad",
    "description": "Ajusta parámetros de red, memoria y kernel con pruebas y documentación del riesgo mitigado.",
    "section": "Seguridad y hardening",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "sysctl de seguridad",
      "nodes": [
        "sysctl|entrada",
        "seguridad|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "sysctl de seguridad",
      "caption": "Ajusta parámetros de red, memoria y kernel con pruebas y documentación del riesgo mitigado."
    }
  },
  {
    "title": "Root y capabilities",
    "description": "Evita ejecutar todo como UID 0 cuando basta una capacidad o permiso específico.",
    "section": "Seguridad y hardening",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "CAP_NET_BIND_SERVICE",
      "nodes": [
        "root powers|split",
        "process|effective set",
        "file|permitted set",
        "kernel|check"
      ],
      "outcome": "privilegio mínimo",
      "caption": "Evita ejecutar todo como UID 0 cuando basta una capacidad o permiso específico."
    }
  },
  {
    "title": "Fail2ban y rate limits",
    "description": "Reacciona a patrones repetidos sin reemplazar autenticación fuerte, firewall ni observabilidad.",
    "section": "Seguridad y hardening",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "Fail2ban y rate limits",
      "nodes": [
        "Fail2ban|entrada",
        "rate|mecanismo",
        "limits|estado",
        "result|resultado"
      ],
      "outcome": "fail2ban y rate limits",
      "caption": "Reacciona a patrones repetidos sin reemplazar autenticación fuerte, firewall ni observabilidad."
    }
  },
  {
    "title": "Backups protegidos",
    "description": "Aísla credenciales, retención e inmutabilidad para que el mismo incidente no destruya producción y copias.",
    "section": "Seguridad y hardening",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "UID:GID",
      "nodes": [
        "name|display",
        "UID|identity",
        "GID|primary group",
        "supplementary|access"
      ],
      "outcome": "identidad resuelta",
      "caption": "Aísla credenciales, retención e inmutabilidad para que el mismo incidente no destruya producción y copias."
    }
  },
  {
    "title": "Package managers",
    "description": "Resuelven dependencias, verifican firmas, mantienen una base local y ejecutan scripts de instalación.",
    "section": "Paquetes, scripting y automatización",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "metadata → solve → download → install",
      "nodes": [
        "repositories|metadata",
        "solver|dependencies",
        "packages|signed",
        "database|state"
      ],
      "outcome": "software gestionado",
      "caption": "Resuelven dependencias, verifican firmas, mantienen una base local y ejecutan scripts de instalación."
    }
  },
  {
    "title": "Repositories y firmas",
    "description": "Confirman procedencia de metadatos y paquetes antes de incorporarlos al sistema.",
    "section": "Paquetes, scripting y automatización",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "Repositories y firmas",
      "nodes": [
        "Repositories|entrada",
        "firmas|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "repositories y firmas",
      "caption": "Confirman procedencia de metadatos y paquetes antes de incorporarlos al sistema."
    }
  },
  {
    "title": "Actualizar sin romper",
    "description": "Separa refresh de metadata, upgrade, cambios de configuración, servicios reiniciados y rollback.",
    "section": "Paquetes, scripting y automatización",
    "family": "flujo de transformación",
    "layout": "compact",
    "scene": {
      "variant": "pipeline",
      "code": "Actualizar sin romper",
      "nodes": [
        "Actualizar|entrada",
        "sin|mecanismo",
        "romper|estado",
        "result|resultado"
      ],
      "outcome": "actualizar sin romper",
      "caption": "Separa refresh de metadata, upgrade, cambios de configuración, servicios reiniciados y rollback."
    }
  },
  {
    "title": "Consultas de paquetes",
    "description": "Encuentra qué paquete instaló un archivo, qué versión está activa y qué dependencias existen.",
    "section": "Paquetes, scripting y automatización",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Consultas de paquetes",
      "nodes": [
        "Consultas|entrada",
        "paquetes|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "consultas de paquetes",
      "caption": "Encuentra qué paquete instaló un archivo, qué versión está activa y qué dependencias existen."
    }
  },
  {
    "title": "Shebang",
    "description": "Selecciona el intérprete que ejecutará un script y afecta portabilidad y entorno.",
    "section": "Paquetes, scripting y automatización",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "#!/usr/bin/env bash",
      "nodes": [
        "file|script",
        "shebang|interpreter",
        "arguments|$@",
        "exit|status"
      ],
      "outcome": "automatización ejecutada",
      "caption": "Selecciona el intérprete que ejecutará un script y afecta portabilidad y entorno."
    }
  },
  {
    "title": "set -euo pipefail",
    "description": "Endurece ciertos fallos de scripts, pero requiere comprender contextos donde -e no se comporta intuitivamente.",
    "section": "Paquetes, scripting y automatización",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "producer | consumer",
      "nodes": [
        "stdout|fd 1",
        "pipe|kernel buffer",
        "stdin|fd 0",
        "consumer|reads"
      ],
      "outcome": "datos encadenados",
      "caption": "Endurece ciertos fallos de scripts, pero requiere comprender contextos donde -e no se comporta intuitivamente."
    }
  },
  {
    "title": "Funciones y argumentos de scripts",
    "description": "Modela entradas, defaults, validación y códigos de salida como una interfaz estable.",
    "section": "Paquetes, scripting y automatización",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Funciones y argumentos de scripts",
      "nodes": [
        "Funciones|entrada",
        "argumentos|mecanismo",
        "scripts|estado",
        "result|resultado"
      ],
      "outcome": "funciones y argumentos de scripts",
      "caption": "Modela entradas, defaults, validación y códigos de salida como una interfaz estable."
    }
  },
  {
    "title": "trap y cleanup",
    "description": "Libera archivos temporales, locks y procesos hijos ante salida normal, error o señal.",
    "section": "Paquetes, scripting y automatización",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "trap cleanup EXIT",
      "nodes": [
        "script|starts",
        "resource|created",
        "signal/error|occurs",
        "cleanup|always"
      ],
      "outcome": "recursos liberados",
      "caption": "Libera archivos temporales, locks y procesos hijos ante salida normal, error o señal."
    }
  },
  {
    "title": "Archivos temporales seguros",
    "description": "Usa mktemp, permisos restrictivos y cleanup para evitar colisiones y ataques de enlace.",
    "section": "Paquetes, scripting y automatización",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "Archivos temporales seguros",
      "nodes": [
        "Archivos|entrada",
        "temporales|mecanismo",
        "seguros|estado",
        "result|resultado"
      ],
      "outcome": "archivos temporales seguros",
      "caption": "Usa mktemp, permisos restrictivos y cleanup para evitar colisiones y ataques de enlace."
    }
  },
  {
    "title": "Cron",
    "description": "Programa comandos con entorno mínimo, expresión de tiempo, usuario y salida que debe observarse.",
    "section": "Paquetes, scripting y automatización",
    "family": "propagación de eventos",
    "layout": "compact",
    "scene": {
      "variant": "signal",
      "code": "schedule → trigger → job",
      "nodes": [
        "calendar|expression",
        "scheduler|wakes",
        "job|runs",
        "logs|result"
      ],
      "outcome": "trabajo periódico",
      "caption": "Programa comandos con entorno mínimo, expresión de tiempo, usuario y salida que debe observarse."
    }
  },
  {
    "title": "Timers de systemd para automatización",
    "description": "Ofrecen calendario, persistencia, jitter, dependencias y logs integrados con units.",
    "section": "Paquetes, scripting y automatización",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "systemctl start app.service",
      "nodes": [
        "unit|declaration",
        "dependencies|ordering",
        "service|process",
        "target|group"
      ],
      "outcome": "servicio supervisado",
      "caption": "Ofrecen calendario, persistencia, jitter, dependencias y logs integrados con units."
    }
  },
  {
    "title": "Scripts idempotentes",
    "description": "Convergen al mismo estado aunque se repitan después de un fallo parcial.",
    "section": "Paquetes, scripting y automatización",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "run once vs run twice",
      "nodes": [
        "desired state|target",
        "first run|changes",
        "second run|no-op",
        "result|same"
      ],
      "outcome": "automatización repetible",
      "caption": "Convergen al mismo estado aunque se repitan después de un fallo parcial."
    }
  },
  {
    "title": "Automatización remota por SSH",
    "description": "Ejecuta comandos con inventario, host keys, timeouts, paralelismo controlado y resultados claros.",
    "section": "Paquetes, scripting y automatización",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "ssh user@host",
      "nodes": [
        "client|key",
        "network|encrypted",
        "sshd|auth",
        "shell|session"
      ],
      "outcome": "sesión remota",
      "caption": "Ejecuta comandos con inventario, host keys, timeouts, paralelismo controlado y resultados claros."
    }
  },
  {
    "title": "Configuration management",
    "description": "Declara estado deseado de paquetes, archivos, usuarios y servicios en múltiples hosts.",
    "section": "Paquetes, scripting y automatización",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Configuration management",
      "nodes": [
        "Configuration|entrada",
        "management|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "configuration management",
      "caption": "Declara estado deseado de paquetes, archivos, usuarios y servicios en múltiples hosts."
    }
  },
  {
    "title": "Backups automatizados",
    "description": "Incluyen lock, snapshot consistente, transferencia, retención, cifrado, métricas y prueba de restore.",
    "section": "Paquetes, scripting y automatización",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "top",
      "nodes": [
        "PID|process",
        "CPU|usage",
        "MEM|resident",
        "STATE|runtime"
      ],
      "outcome": "procesos observados",
      "caption": "Incluyen lock, snapshot consistente, transferencia, retención, cifrado, métricas y prueba de restore."
    }
  },
  {
    "title": "Máquinas virtuales vs contenedores",
    "description": "Compara guest kernel y hardware virtual con procesos aislados que comparten el kernel del host.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "Máquinas virtuales vs contenedores",
      "nodes": [
        "Máquinas|entrada",
        "virtuales|mecanismo",
        "contenedores|estado",
        "result|resultado"
      ],
      "outcome": "máquinas virtuales vs contenedores",
      "caption": "Compara guest kernel y hardware virtual con procesos aislados que comparten el kernel del host."
    }
  },
  {
    "title": "chroot",
    "description": "Cambia la raíz visible de paths, pero no proporciona por sí solo un límite de seguridad completo.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "chroot",
      "nodes": [
        "chroot|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "chroot",
      "caption": "Cambia la raíz visible de paths, pero no proporciona por sí solo un límite de seguridad completo."
    }
  },
  {
    "title": "Namespaces de contenedor",
    "description": "Aíslan procesos, mounts, red, usuarios, IPC y hostname para construir una vista privada.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "process namespaces",
      "nodes": [
        "mount|view",
        "pid|process IDs",
        "net|interfaces",
        "user|UID mapping"
      ],
      "outcome": "aislamiento de vista",
      "caption": "Aíslan procesos, mounts, red, usuarios, IPC y hostname para construir una vista privada."
    }
  },
  {
    "title": "cgroups en contenedores",
    "description": "Miden y limitan CPU, memoria, I/O y PIDs independientemente de la vista aislada.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "top",
      "nodes": [
        "PID|process",
        "CPU|usage",
        "MEM|resident",
        "STATE|runtime"
      ],
      "outcome": "procesos observados",
      "caption": "Miden y limitan CPU, memoria, I/O y PIDs independientemente de la vista aislada."
    }
  },
  {
    "title": "Imágenes y layers",
    "description": "Representan un root filesystem inmutable compuesto por capas direccionadas por contenido.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "Imágenes y layers",
      "nodes": [
        "Imágenes|entrada",
        "layers|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "imágenes y layers",
      "caption": "Representan un root filesystem inmutable compuesto por capas direccionadas por contenido."
    }
  },
  {
    "title": "Overlay filesystem",
    "description": "Combina layers de solo lectura con una capa escribible para presentar un árbol unificado.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "lower + upper + merged",
      "nodes": [
        "image layers|read-only",
        "upper|writes",
        "overlay|merged view",
        "container|rootfs"
      ],
      "outcome": "filesystem por capas",
      "caption": "Combina layers de solo lectura con una capa escribible para presentar un árbol unificado."
    }
  },
  {
    "title": "OCI runtime",
    "description": "Crea el proceso del contenedor a partir de una especificación estándar de filesystem, namespaces y recursos.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "VM vs container",
      "nodes": [
        "VM|guest kernel",
        "container|shared kernel",
        "image|rootfs",
        "runtime|process"
      ],
      "outcome": "aislamiento elegido",
      "caption": "Crea el proceso del contenedor a partir de una especificación estándar de filesystem, namespaces y recursos."
    }
  },
  {
    "title": "veth, bridge y network namespace",
    "description": "Conecta la pila de red aislada del contenedor con el host y otras redes.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "process namespaces",
      "nodes": [
        "mount|view",
        "pid|process IDs",
        "net|interfaces",
        "user|UID mapping"
      ],
      "outcome": "aislamiento de vista",
      "caption": "Conecta la pila de red aislada del contenedor con el host y otras redes."
    }
  },
  {
    "title": "Capabilities y seccomp en contenedores",
    "description": "Reduce privilegios y system calls aunque el proceso se llame root dentro del namespace.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "CAP_NET_BIND_SERVICE",
      "nodes": [
        "root powers|split",
        "process|effective set",
        "file|permitted set",
        "kernel|check"
      ],
      "outcome": "privilegio mínimo",
      "caption": "Reduce privilegios y system calls aunque el proceso se llame root dentro del namespace."
    }
  },
  {
    "title": "Bind mounts y volumes",
    "description": "Proyectan datos externos dentro del contenedor con propiedad, permisos y ciclo de vida explícitos.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "mount device /srv",
      "nodes": [
        "device|source",
        "filesystem|type",
        "mountpoint|path",
        "options|policy"
      ],
      "outcome": "árbol ampliado",
      "caption": "Proyectan datos externos dentro del contenedor con propiedad, permisos y ciclo de vida explícitos."
    }
  },
  {
    "title": "Rootless containers",
    "description": "Mapean identidades mediante user namespaces para no requerir root real en el host.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "VM vs container",
      "nodes": [
        "VM|guest kernel",
        "container|shared kernel",
        "image|rootfs",
        "runtime|process"
      ],
      "outcome": "aislamiento elegido",
      "caption": "Mapean identidades mediante user namespaces para no requerir root real en el host."
    }
  },
  {
    "title": "PID 1 dentro del contenedor",
    "description": "Debe recoger zombies, reenviar señales y terminar correctamente durante deploys.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "PID 1 dentro del contenedor",
      "nodes": [
        "PID|entrada",
        "dentro|mecanismo",
        "del|estado",
        "contenedor|resultado"
      ],
      "outcome": "pid 1 dentro del contenedor",
      "caption": "Debe recoger zombies, reenviar señales y terminar correctamente durante deploys."
    }
  },
  {
    "title": "Límites y requests de recursos",
    "description": "Evitan que un workload monopolice el host y permiten planificar capacidad.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Límites y requests de recursos",
      "nodes": [
        "Límites|entrada",
        "requests|mecanismo",
        "recursos|estado",
        "result|resultado"
      ],
      "outcome": "límites y requests de recursos",
      "caption": "Evitan que un workload monopolice el host y permiten planificar capacidad."
    }
  },
  {
    "title": "Inspección de namespaces",
    "description": "Usa nsenter, unshare y /proc para entender qué vista observa un proceso.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "process namespaces",
      "nodes": [
        "mount|view",
        "pid|process IDs",
        "net|interfaces",
        "user|UID mapping"
      ],
      "outcome": "aislamiento de vista",
      "caption": "Usa nsenter, unshare y /proc para entender qué vista observa un proceso."
    }
  },
  {
    "title": "Cuándo usar VM o contenedor",
    "description": "Decide por aislamiento, kernel, compatibilidad, densidad, operación y modelo de amenazas.",
    "section": "Virtualización, contenedores y aislamiento",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Cuándo usar VM o contenedor",
      "nodes": [
        "Cuándo|entrada",
        "usar|mecanismo",
        "contenedor|estado",
        "result|resultado"
      ],
      "outcome": "cuándo usar vm o contenedor",
      "caption": "Decide por aislamiento, kernel, compatibilidad, densidad, operación y modelo de amenazas."
    }
  }
] as const satisfies readonly StudyConcept[];
