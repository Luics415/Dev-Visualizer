import type { QuizQuestion } from "@/data/quizTypes";

export const linuxQuestions: QuizQuestion[] = [
  {
    "id": "linux-q-01",
    "collectionId": "linux",
    "question": "En Linux (Fundamentos del sistema), ¿qué función técnica cumple «Linux: kernel»?",
    "options": [
      "Distingue el kernel que administra recursos de la distribución que integra herramientas, paquetes, defaults y soporte.",
      "Muestra cómo un proceso solicita al kernel operaciones como abrir archivos, crear procesos o usar la red al evaluar.",
      "Sigue firmware, bootloader, kernel, initramfs, montaje raíz y PID 1 hasta alcanzar un sistema operativo en el flujo.",
      "Separa código privilegiado del kernel de los procesos de usuario y explica la frontera de protección de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Linux: kernel y distribución (Fundamentos del sistema): Distingue el kernel que administra recursos de la distribución que integra herramientas, paquetes, defaults y soporte.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-02",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «Kernel space y user space» en fundamentos del sistema?",
    "options": [
      "Relaciona las llamadas del programa con libc, la ABI del sistema y las herramientas de usuario al operar.",
      "Separa código privilegiado del kernel de los procesos de usuario y explica la frontera de protección.",
      "Agrupa estados operativos como multi-user, graphical, rescue y emergency mediante dependencias al operar.",
      "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Kernel space y user space (Fundamentos del sistema): Separa código privilegiado del kernel de los procesos de usuario y explica la frontera de protección.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-03",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «System calls»?",
    "options": [
      "Compara familias Debian, Red Hat, Arch y otras por ciclo de vida, paquetes y decisiones operativas al operar.",
      "Explica la interfaz uniforme aplicada a archivos, dispositivos, pipes, sockets y pseudo-filesystems al operar.",
      "Muestra cómo un proceso solicita al kernel operaciones como abrir archivos, crear procesos o usar la red.",
      "Separa código privilegiado del kernel de los procesos de usuario y explica la frontera de protección."
    ],
    "correctAnswerIndex": 2,
    "explanation": "System calls (Fundamentos del sistema): Muestra cómo un proceso solicita al kernel operaciones como abrir archivos, crear procesos o usar la red.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-04",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «ABI, libc y utilidades»?",
    "options": [
      "Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers al operar.",
      "Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable.",
      "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real.",
      "Relaciona las llamadas del programa con libc, la ABI del sistema y las herramientas de usuario."
    ],
    "correctAnswerIndex": 3,
    "explanation": "ABI, libc y utilidades (Fundamentos del sistema): Relaciona las llamadas del programa con libc, la ABI del sistema y las herramientas de usuario.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-05",
    "collectionId": "linux",
    "question": "Respecto a fundamentos del sistema en Linux, ¿cuál es el propósito de «Distribuciones Linux»?",
    "options": [
      "Compara familias Debian, Red Hat, Arch y otras por ciclo de vida, paquetes y decisiones operativas al operar.",
      "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real.",
      "Relaciona las llamadas del programa con libc, la ABI del sistema y las herramientas de usuario.",
      "Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Distribuciones Linux (Fundamentos del sistema): Compara familias Debian, Red Hat, Arch y otras por ciclo de vida, paquetes y decisiones operativas.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-06",
    "collectionId": "linux",
    "question": "En Linux (Fundamentos del sistema), ¿qué función técnica cumple «Filesystem Hierarchy Standard»?",
    "options": [
      "Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global al operar.",
      "Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad.",
      "Envía entrada, salida y errores a archivos, dispositivos u otros descriptores.",
      "Inserta la salida de un comando dentro de otro después de ejecutar un subshell."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Filesystem Hierarchy Standard (Fundamentos del sistema): Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-07",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «Todo es un archivo» en fundamentos del sistema?",
    "options": [
      "Relaciona las llamadas del programa con libc, la ABI del sistema y las herramientas de usuario al operar.",
      "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real al operar.",
      "Explica la interfaz uniforme aplicada a archivos, dispositivos, pipes, sockets y pseudo-filesystems.",
      "Agrupa estados operativos como multi-user, graphical, rescue y emergency mediante dependencias al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Todo es un archivo (Fundamentos del sistema): Explica la interfaz uniforme aplicada a archivos, dispositivos, pipes, sockets y pseudo-filesystems.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-08",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «Dispositivos en /dev»?",
    "options": [
      "Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad al operar.",
      "Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables al operar.",
      "Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dispositivos en /dev (Fundamentos del sistema): Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-09",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «procfs: /proc»?",
    "options": [
      "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real.",
      "Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers.",
      "Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable.",
      "Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "procfs: /proc (Fundamentos del sistema): Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-10",
    "collectionId": "linux",
    "question": "Respecto a fundamentos del sistema en Linux, ¿cuál es el propósito de «sysfs: /sys»?",
    "options": [
      "Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad en el flujo.",
      "Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable.",
      "Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers.",
      "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real."
    ],
    "correctAnswerIndex": 1,
    "explanation": "sysfs: /sys (Fundamentos del sistema): Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-11",
    "collectionId": "linux",
    "question": "En Linux (Fundamentos del sistema), ¿qué función técnica cumple «Secuencia de arranque»?",
    "options": [
      "Compara familias Debian, Red Hat, Arch y otras por ciclo de vida, paquetes y decisiones operativas al operar.",
      "Explica la interfaz uniforme aplicada a archivos, dispositivos, pipes, sockets y pseudo-filesystems.",
      "Sigue firmware, bootloader, kernel, initramfs, montaje raíz y PID 1 hasta alcanzar un sistema operativo.",
      "Separa código privilegiado del kernel de los procesos de usuario y explica la frontera de protección."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Secuencia de arranque (Fundamentos del sistema): Sigue firmware, bootloader, kernel, initramfs, montaje raíz y PID 1 hasta alcanzar un sistema operativo.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-12",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «Targets y modos de arranque» en fundamentos del sistema?",
    "options": [
      "Representa nodos de dispositivo de bloque y carácter que conectan user space con drivers al operar.",
      "Publica objetos, dispositivos, drivers y atributos del kernel como una jerarquía navegable.",
      "Expone procesos y parámetros del kernel mediante archivos virtuales generados en tiempo real.",
      "Agrupa estados operativos como multi-user, graphical, rescue y emergency mediante dependencias."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Targets y modos de arranque (Fundamentos del sistema): Agrupa estados operativos como multi-user, graphical, rescue y emergency mediante dependencias.",
    "topic": "Fundamentos del sistema",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-13",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «Terminal, TTY y PTY»?",
    "options": [
      "Diferencia el emulador visible, el canal pseudo-terminal y el proceso shell que interpreta comandos.",
      "Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones.",
      "Modela stdin, stdout, stderr y descriptores adicionales como referencias abiertas por proceso.",
      "Cubre brace, tilde, parámetros, comandos, aritmética, word splitting, globbing y quote removal."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Terminal, TTY y PTY (Shell, terminal y composición de comandos): Diferencia el emulador visible, el canal pseudo-terminal y el proceso shell que interpreta comandos.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-14",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «Shell»?",
    "options": [
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares al operar.",
      "Describe al shell como lenguaje, intérprete y entorno de ejecución durante la ejecución.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables al operar.",
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Shell y Bash (Shell, terminal y composición de comandos): Describe al shell como lenguaje, intérprete y entorno de ejecución; Bash es una implementación concreta.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-15",
    "collectionId": "linux",
    "question": "Respecto a shell, terminal y composición de comandos en Linux, ¿cuál es el propósito de «Cómo Bash ejecuta un comando»?",
    "options": [
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares al operar.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.",
      "Sigue lectura, tokenización, parsing, expansiones, redirecciones, búsqueda y ejecución.",
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cómo Bash ejecuta un comando (Shell, terminal y composición de comandos): Sigue lectura, tokenización, parsing, expansiones, redirecciones, búsqueda y ejecución.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-16",
    "collectionId": "linux",
    "question": "En Linux (Shell, terminal y composición de comandos), ¿qué función técnica cumple «Comando, opciones y argumentos»?",
    "options": [
      "Sigue lectura, tokenización, parsing, expansiones, redirecciones, búsqueda y ejecución al operar.",
      "Controla secuencia, background y ejecución condicional basada en el código de salida al operar.",
      "Compone operaciones pequeñas para ordenar, deduplicar, cortar, traducir y contar datos al operar.",
      "Separa el ejecutable de sus flags y operandos para leer correctamente una línea de comandos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Comando, opciones y argumentos (Shell, terminal y composición de comandos): Separa el ejecutable de sus flags y operandos para leer correctamente una línea de comandos.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "básico"
  },
  {
    "id": "linux-q-17",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «PATH y búsqueda de comandos» en shell, terminal y composición de comandos?",
    "options": [
      "Recorre directorios de PATH y distingue builtins, funciones, aliases y binarios externos al operar.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.",
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel.",
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "PATH y búsqueda de comandos (Shell, terminal y composición de comandos): Recorre directorios de PATH y distingue builtins, funciones, aliases y binarios externos.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-18",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «Quoting y escaping»?",
    "options": [
      "Diferencia el emulador visible, el canal pseudo-terminal y el proceso shell que interpreta comandos al operar.",
      "Preserva caracteres literales y controla qué expansiones ocurren con comillas simples, dobles y backslash.",
      "Encapsula comandos frecuentes y lógica reutilizable entendiendo sus límites de expansión y alcance al operar.",
      "Filtra líneas por patrones básicos o extendidos y controla contexto, recursión y códigos de salida al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Quoting y escaping (Shell, terminal y composición de comandos): Preserva caracteres literales y controla qué expansiones ocurren con comillas simples, dobles y backslash.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-19",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «Expansiones de Bash»?",
    "options": [
      "Recorre directorios de PATH y distingue builtins, funciones, aliases y binarios externos al operar.",
      "Evita que un fallo temprano quede oculto por el éxito del último comando de una tubería al operar.",
      "Cubre brace, tilde, parámetros, comandos, aritmética, word splitting, globbing y quote removal.",
      "Presenta la salida o entrada de un proceso como una ruta temporal parecida a un archivo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Expansiones de Bash (Shell, terminal y composición de comandos): Cubre brace, tilde, parámetros, comandos, aritmética, word splitting, globbing y quote removal.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-20",
    "collectionId": "linux",
    "question": "Respecto a shell, terminal y composición de comandos en Linux, ¿cuál es el propósito de «Globbing»?",
    "options": [
      "Envía entrada, salida y errores a archivos, dispositivos u otros descriptores al operar.",
      "Inserta la salida de un comando dentro de otro después de ejecutar un subshell.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.",
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Globbing y patrones (Shell, terminal y composición de comandos): Expande patrones de nombres de archivo sin confundirlos con expresiones regulares.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-21",
    "collectionId": "linux",
    "question": "En Linux (Shell, terminal y composición de comandos), ¿qué función técnica cumple «Variables de shell y de entorno»?",
    "options": [
      "Distingue identificadores locales del shell de valores exportados que heredan los procesos hijos al operar.",
      "Separa el ejecutable de sus flags y operandos para leer correctamente una línea de comandos.",
      "Recorre directorios de PATH y distingue builtins, funciones, aliases y binarios externos al operar.",
      "Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Variables de shell y de entorno (Shell, terminal y composición de comandos): Distingue variables locales del shell de valores exportados que heredan los procesos hijos.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-22",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «Parámetros posicionales» en shell, terminal y composición de comandos?",
    "options": [
      "Envía entrada, salida y errores a archivos, dispositivos u otros descriptores al operar.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.",
      "Inserta la salida de un comando dentro de otro después de ejecutar un subshell.",
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Parámetros posicionales (Shell, terminal y composición de comandos): Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-23",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «Exit status»?",
    "options": [
      "Evita que un fallo temprano quede oculto por el éxito del último comando de una tubería al operar.",
      "Presenta la salida o entrada de un proceso como una ruta temporal parecida a un archivo al operar.",
      "Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones.",
      "Sigue lectura, tokenización, parsing, expansiones, redirecciones, búsqueda y ejecución al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Exit status (Shell, terminal y composición de comandos): Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-24",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «Operadores ;, &, && y ||»?",
    "options": [
      "Inserta la salida de un comando dentro de otro después de ejecutar un subshell al operar.",
      "Envía entrada, salida y errores a archivos, dispositivos u otros descriptores al operar.",
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares.",
      "Controla secuencia, background y ejecución condicional basada en el código de salida."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Operadores ;, &, && y || (Shell, terminal y composición de comandos): Controla secuencia, background y ejecución condicional basada en el código de salida.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-25",
    "collectionId": "linux",
    "question": "Respecto a shell, terminal y composición de comandos en Linux, ¿cuál es el propósito de «Pipelines»?",
    "options": [
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel.",
      "Envía entrada, salida y errores a archivos, dispositivos u otros descriptores.",
      "Inserta la salida de un comando dentro de otro después de ejecutar un subshell.",
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pipelines (Shell, terminal y composición de comandos): Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-26",
    "collectionId": "linux",
    "question": "En Linux (Shell, terminal y composición de comandos), ¿qué función técnica cumple «pipefail»?",
    "options": [
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares al operar.",
      "Evita que un fallo temprano quede oculto por el éxito del último comando de una tubería.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables al operar.",
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "pipefail (Shell, terminal y composición de comandos): Evita que un fallo temprano quede oculto por el éxito del último comando de una tubería.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-27",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «Redirecciones» en shell, terminal y composición de comandos?",
    "options": [
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares al operar.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables al operar.",
      "Envía entrada, salida y errores a archivos, dispositivos u otros descriptores al operar.",
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Redirecciones (Shell, terminal y composición de comandos): Envía entrada, salida y errores a archivos, dispositivos u otros descriptores.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-28",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «File descriptors»?",
    "options": [
      "Evita que un fallo temprano quede oculto por el éxito del último comando de una tubería al operar.",
      "Presenta la salida o entrada de un proceso como una ruta temporal parecida a un archivo al operar.",
      "Sigue lectura, tokenización, parsing, expansiones, redirecciones, búsqueda y ejecución al operar.",
      "Modela stdin, stdout, stderr y descriptores adicionales como referencias abiertas por proceso."
    ],
    "correctAnswerIndex": 3,
    "explanation": "File descriptors (Shell, terminal y composición de comandos): Modela stdin, stdout, stderr y descriptores adicionales como referencias abiertas por proceso.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-29",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «Command substitution»?",
    "options": [
      "Inserta la salida de un comando dentro de otro después de ejecutar un subshell de forma segura.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.",
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel.",
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Command substitution (Shell, terminal y composición de comandos): Inserta la salida de un comando dentro de otro después de ejecutar un subshell.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-30",
    "collectionId": "linux",
    "question": "Respecto a shell, terminal y composición de comandos en Linux, ¿cuál es el propósito de «Process substitution»?",
    "options": [
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares al operar.",
      "Presenta la salida o entrada de un proceso como una ruta temporal parecida a un archivo.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables al operar.",
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Process substitution (Shell, terminal y composición de comandos): Presenta la salida o entrada de un proceso como una ruta temporal parecida a un archivo.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-31",
    "collectionId": "linux",
    "question": "En Linux (Shell, terminal y composición de comandos), ¿qué función técnica cumple «Aliases y funciones de shell»?",
    "options": [
      "Separa el ejecutable de sus flags y operandos para leer correctamente una línea de comandos al operar.",
      "Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones al operar.",
      "Encapsula comandos frecuentes y lógica reutilizable entendiendo sus límites de expansión y alcance.",
      "Modela stdin, stdout, stderr y descriptores adicionales como referencias abiertas por proceso al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Aliases y funciones de shell (Shell, terminal y composición de comandos): Encapsula comandos frecuentes y lógica reutilizable entendiendo sus límites de expansión y alcance.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-32",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «find y xargs» en shell, terminal y composición de comandos?",
    "options": [
      "Preserva caracteres literales y controla qué expansiones ocurren con comillas simples, dobles y backslash al operar.",
      "Transforma streams de texto con sustituciones, selección de campos y pequeños programas orientados a registros.",
      "Consulta y transforma JSON desde la terminal manteniendo tipos y estructuras en lugar de cortar texto a ciegas.",
      "Descubre archivos por propiedades y convierte resultados en argumentos de otros procesos con delimitación segura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "find y xargs (Shell, terminal y composición de comandos): Descubre archivos por propiedades y convierte resultados en argumentos de otros procesos con delimitación segura.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-33",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «grep y expresiones regulares»?",
    "options": [
      "Filtra líneas por patrones básicos o extendidos y controla contexto, recursión y códigos de salida al operar.",
      "Separa el ejecutable de sus flags y operandos para leer correctamente una línea de comandos al operar.",
      "Interpreta 0 como éxito y valores no cero como información de fallo para encadenar decisiones.",
      "Modela stdin, stdout, stderr y descriptores adicionales como referencias abiertas por proceso."
    ],
    "correctAnswerIndex": 0,
    "explanation": "grep y expresiones regulares (Shell, terminal y composición de comandos): Filtra líneas por patrones básicos o extendidos y controla contexto, recursión y códigos de salida.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-34",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «sed y awk»?",
    "options": [
      "Preserva caracteres literales y controla qué expansiones ocurren con comillas simples, dobles y backslash al operar.",
      "Transforma streams de texto con sustituciones, selección de campos y pequeños programas orientados a registros.",
      "Diferencia el emulador visible, el canal pseudo-terminal y el proceso shell que interpreta comandos al evaluar.",
      "Encapsula comandos frecuentes y lógica reutilizable entendiendo sus límites de expansión y alcance en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "sed y awk (Shell, terminal y composición de comandos): Transforma streams de texto con sustituciones, selección de campos y pequeños programas orientados a registros.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "intermedio"
  },
  {
    "id": "linux-q-35",
    "collectionId": "linux",
    "question": "Respecto a shell, terminal y composición de comandos en Linux, ¿cuál es el propósito de «sort, uniq, cut, tr y wc»?",
    "options": [
      "Expande patrones de nombres de archivo sin confundirlos con expresiones regulares al operar.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables.",
      "Compone operaciones pequeñas para ordenar, deduplicar, cortar, traducir y contar datos.",
      "Conecta stdout de un proceso con stdin del siguiente mediante un buffer del kernel."
    ],
    "correctAnswerIndex": 2,
    "explanation": "sort, uniq, cut, tr y wc (Shell, terminal y composición de comandos): Compone operaciones pequeñas para ordenar, deduplicar, cortar, traducir y contar datos.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-36",
    "collectionId": "linux",
    "question": "En Linux (Shell, terminal y composición de comandos), ¿qué función técnica cumple «jq»?",
    "options": [
      "Preserva caracteres literales y controla qué expansiones ocurren con comillas simples, dobles y backslash al operar.",
      "Diferencia el emulador visible, el canal pseudo-terminal y el proceso shell que interpreta comandos al evaluar.",
      "Encapsula comandos frecuentes y lógica reutilizable entendiendo sus límites de expansión y alcance en el flujo.",
      "Consulta y transforma JSON desde la terminal manteniendo tipos y estructuras en lugar de cortar texto a ciegas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "jq (Shell, terminal y composición de comandos): Consulta y transforma JSON desde la terminal manteniendo tipos y estructuras en lugar de cortar texto a ciegas.",
    "topic": "Shell, terminal y composición de comandos",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-37",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «Usuarios, UID y GID» en archivos, permisos e identidad?",
    "options": [
      "Relaciona nombres legibles con identificadores numéricos que usa el kernel para decidir propiedad y acceso al operar.",
      "Ejecuta un binario con el effective UID de su propietario y exige una revisión de seguridad cuidadosa.",
      "Restringe borrado o renombrado dentro de directorios compartidos como /tmp al propietario adecuado al operar.",
      "Evalúa lectura, escritura y ejecución para owner, group y others, con semántica distinta en directorios."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Usuarios, UID y GID (Archivos, permisos e identidad): Relaciona nombres legibles con identificadores numéricos que usa el kernel para decidir propiedad y acceso.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-38",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «Grupos primarios y suplementarios»?",
    "options": [
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos al operar.",
      "Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global en ejecución.",
      "Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva al operar.",
      "Organiza rutas como /etc, /var, /usr, /home, /run y /tmp según su responsabilidad al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Grupos primarios y suplementarios (Archivos, permisos e identidad): Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-39",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «/etc/passwd, shadow y group»?",
    "options": [
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos al operar.",
      "Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva al operar.",
      "Separa metadatos públicos, hashes protegidos y membresías de grupo durante la ejecución.",
      "Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "/etc/passwd, shadow y group (Archivos, permisos e identidad): Separa metadatos públicos, hashes protegidos y membresías de grupo.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-40",
    "collectionId": "linux",
    "question": "Respecto a archivos, permisos e identidad en Linux, ¿cuál es el propósito de «Permisos rwx»?",
    "options": [
      "Restringe borrado o renombrado dentro de directorios compartidos como /tmp al propietario adecuado al operar.",
      "Calcula permisos iniciales quitando bits de un modo solicitado al crear archivos o directorios al operar.",
      "Ejecuta un binario con el effective UID de su propietario y exige una revisión de seguridad cuidadosa.",
      "Evalúa lectura, escritura y ejecución para owner, group y others, con semántica distinta en directorios."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Permisos rwx (Archivos, permisos e identidad): Evalúa lectura, escritura y ejecución para owner, group y others, con semántica distinta en directorios.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-41",
    "collectionId": "linux",
    "question": "En Linux (Archivos, permisos e identidad), ¿qué función técnica cumple «chmod simbólico y octal»?",
    "options": [
      "Convierte reglas como u+x y modos como 0750 en bits de permisos respetando las invariantes.",
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos.",
      "Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva al operar.",
      "Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "chmod simbólico y octal (Archivos, permisos e identidad): Convierte reglas como u+x y modos como 0750 en bits de permisos.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-42",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «Propiedad con chown y chgrp» en archivos, permisos e identidad?",
    "options": [
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos al evaluar.",
      "Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales.",
      "Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio.",
      "Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Propiedad con chown y chgrp (Archivos, permisos e identidad): Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-43",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «umask»?",
    "options": [
      "Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales al operar.",
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos al operar.",
      "Calcula permisos iniciales quitando bits de un modo solicitado al crear archivos o directorios.",
      "Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio."
    ],
    "correctAnswerIndex": 2,
    "explanation": "umask (Archivos, permisos e identidad): Calcula permisos iniciales quitando bits de un modo solicitado al crear archivos o directorios.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-44",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «setuid»?",
    "options": [
      "Calcula permisos iniciales quitando bits de un modo solicitado al crear archivos o directorios al operar.",
      "Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos al operar.",
      "Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales al operar.",
      "Ejecuta un binario con el effective UID de su propietario y exige una revisión de seguridad cuidadosa."
    ],
    "correctAnswerIndex": 3,
    "explanation": "setuid (Archivos, permisos e identidad): Ejecuta un binario con el effective UID de su propietario y exige una revisión de seguridad cuidadosa.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-45",
    "collectionId": "linux",
    "question": "Respecto a archivos, permisos e identidad en Linux, ¿cuál es el propósito de «setgid»?",
    "options": [
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos.",
      "Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva.",
      "Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global al operar.",
      "Separa metadatos públicos, hashes protegidos y membresías de grupo de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "setgid (Archivos, permisos e identidad): Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-46",
    "collectionId": "linux",
    "question": "En Linux (Archivos, permisos e identidad), ¿qué función técnica cumple «Sticky bit»?",
    "options": [
      "Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales al operar.",
      "Restringe borrado o renombrado dentro de directorios compartidos como /tmp al propietario adecuado.",
      "Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio al operar.",
      "Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sticky bit (Archivos, permisos e identidad): Restringe borrado o renombrado dentro de directorios compartidos como /tmp al propietario adecuado.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-47",
    "collectionId": "linux",
    "question": "Dentro de Linux, ¿cómo opera el mecanismo de «ACLs» en archivos, permisos e identidad?",
    "options": [
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos al operar.",
      "Amplía permisos compartidos sin duplicar cuentas ni conceder acceso global con precisión.",
      "Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva al operar.",
      "Usa $0, $1, $@, $#, shift y valores por defecto para diseñar scripts reutilizables al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "ACLs (Archivos, permisos e identidad): Añade permisos por usuarios y grupos nombrados, sujetos a una máscara efectiva.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-48",
    "collectionId": "linux",
    "question": "Al trabajar con Linux, ¿qué responsabilidad define a «sudo y sudoers»?",
    "options": [
      "Ejecuta un binario con el effective UID de su propietario y exige una revisión de seguridad cuidadosa al operar.",
      "Restringe borrado o renombrado dentro de directorios compartidos como /tmp al propietario adecuado al operar.",
      "Evalúa lectura, escritura y ejecución para owner, group y others, con semántica distinta en directorios.",
      "Delega comandos específicos con otra identidad, registra la acción y evita compartir la contraseña de root."
    ],
    "correctAnswerIndex": 3,
    "explanation": "sudo y sudoers (Archivos, permisos e identidad): Delega comandos específicos con otra identidad, registra la acción y evita compartir la contraseña de root.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-49",
    "collectionId": "linux",
    "question": "En la arquitectura de Linux, ¿qué caracteriza técnicamente a «Linux capabilities»?",
    "options": [
      "Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos.",
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos al operar.",
      "Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales.",
      "Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Linux capabilities (Archivos, permisos e identidad): Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  },
  {
    "id": "linux-q-50",
    "collectionId": "linux",
    "question": "Respecto a archivos, permisos e identidad en Linux, ¿cuál es el propósito de «PAM»?",
    "options": [
      "Cambia el effective GID de un ejecutable o hereda grupo en directorios colaborativos al evaluar.",
      "Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio.",
      "Cambia usuario y grupo propietarios considerando privilegios y efectos sobre bits especiales.",
      "Divide poderes tradicionales de root en capacidades pequeñas asignables a procesos o archivos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "PAM (Archivos, permisos e identidad): Compone autenticación, cuenta, contraseña y sesión mediante módulos y políticas por servicio.",
    "topic": "Archivos, permisos e identidad",
    "difficulty": "avanzado"
  }
];
