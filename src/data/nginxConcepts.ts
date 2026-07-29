import type { StudyConcept } from "./conceptTypes";

export const nginxConcepts = [
  {
    "title": "Qué es NGINX",
    "description": "Servidor web orientado a eventos que también funciona como reverse proxy, balanceador, caché y gateway de aplicaciones.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "Qué es NGINX",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "nginx",
      "caption": "Servidor web orientado a eventos que también funciona como reverse proxy, balanceador, caché y gateway de aplicaciones."
    }
  },
  {
    "title": "NGINX Open Source y NGINX Plus",
    "description": "Distingue la base abierta de las capacidades comerciales como health checks activos, API dinámica, métricas ampliadas y persistencia de estado.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "NGINX Open Source y NGINX Plus",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "nginx open source y nginx plus",
      "caption": "Distingue la base abierta de las capacidades comerciales como health checks activos, API dinámica, métricas ampliadas y persistencia de estado."
    }
  },
  {
    "title": "Servidor web, proxy y gateway",
    "description": "Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Servidor web, proxy y gateway",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "servidor web proxy y gateway",
      "caption": "Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones."
    }
  },
  {
    "title": "Arquitectura orientada a eventos",
    "description": "Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "Arquitectura orientada a eventos",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "arquitectura orientada a eventos",
      "caption": "Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente."
    }
  },
  {
    "title": "Proceso master",
    "description": "Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "Proceso master",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "proceso master",
      "caption": "Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades."
    }
  },
  {
    "title": "Procesos worker",
    "description": "Procesan conexiones y peticiones con privilegios reducidos después de que el master prepara sockets y configuración.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Procesos worker",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "procesos worker",
      "caption": "Procesan conexiones y peticiones con privilegios reducidos después de que el master prepara sockets y configuración."
    }
  },
  {
    "title": "Worker connections",
    "description": "Define cuántas conexiones simultáneas puede manejar cada worker, limitado además por file descriptors y conexiones upstream.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Worker connections",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "worker connections",
      "caption": "Define cuántas conexiones simultáneas puede manejar cada worker, limitado además por file descriptors y conexiones upstream."
    }
  },
  {
    "title": "Event loop del worker",
    "description": "Espera eventos de lectura, escritura, timers y señales para avanzar cada conexión sin bloquear el proceso completo.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "Event loop del worker",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "event loop del worker",
      "caption": "Espera eventos de lectura, escritura, timers y señales para avanzar cada conexión sin bloquear el proceso completo."
    }
  },
  {
    "title": "I/O no bloqueante",
    "description": "Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "I/O no bloqueante",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "i/o no bloqueante",
      "caption": "Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco."
    }
  },
  {
    "title": "epoll, kqueue y event methods",
    "description": "NGINX selecciona el mecanismo eficiente del sistema operativo para observar grandes conjuntos de descriptores.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "epoll, kqueue y event methods",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "epoll kqueue y event methods",
      "caption": "NGINX selecciona el mecanismo eficiente del sistema operativo para observar grandes conjuntos de descriptores."
    }
  },
  {
    "title": "Aceptación de conexiones",
    "description": "Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "Aceptación de conexiones",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "aceptación de conexiones",
      "caption": "Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente."
    }
  },
  {
    "title": "accept_mutex y reuseport",
    "description": "Representan estrategias distintas para distribuir nuevas conexiones entre workers según plataforma y configuración.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "máquina de estados",
    "layout": "compact",
    "scene": {
      "variant": "state-machine",
      "code": "accept_mutex y reuseport",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "acceptmutex y reuseport",
      "caption": "Representan estrategias distintas para distribuir nuevas conexiones entre workers según plataforma y configuración."
    }
  },
  {
    "title": "Afinidad de CPU",
    "description": "worker_cpu_affinity puede fijar workers a CPUs concretas cuando el perfil y la topología justifican esa optimización.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "Afinidad de CPU",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "afinidad de cpu",
      "caption": "worker_cpu_affinity puede fijar workers a CPUs concretas cuando el perfil y la topología justifican esa optimización."
    }
  },
  {
    "title": "Ciclo de vida de una petición",
    "description": "Conecta aceptación, lectura de headers, selección de servidor, fases HTTP, upstream o archivo y escritura de respuesta.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "Ciclo de vida de una petición",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "ciclo de vida de una petición",
      "caption": "Conecta aceptación, lectura de headers, selección de servidor, fases HTTP, upstream o archivo y escritura de respuesta."
    }
  },
  {
    "title": "Fases del módulo HTTP",
    "description": "Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "Fases del módulo HTTP",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "fases del módulo http",
      "caption": "Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento."
    }
  },
  {
    "title": "Filtros de respuesta",
    "description": "Headers, compresión, range y body filters transforman la respuesta antes de enviarla al cliente.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Filtros de respuesta",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "filtros de respuesta",
      "caption": "Headers, compresión, range y body filters transforman la respuesta antes de enviarla al cliente."
    }
  },
  {
    "title": "Módulos estáticos",
    "description": "Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "Módulos estáticos",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "módulos estáticos",
      "caption": "Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque."
    }
  },
  {
    "title": "Módulos dinámicos",
    "description": "Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario.",
    "section": "Arquitectura y modelo de ejecución",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "Módulos dinámicos",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "módulos dinámicos",
      "caption": "Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario."
    }
  },
  {
    "title": "Paquetes oficiales y de la distribución",
    "description": "Compara versiones, rutas, módulos y políticas de actualización antes de elegir el origen del paquete.",
    "section": "Instalación, procesos y configuración",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "Paquetes oficiales y de la distribu…",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "paquetes oficiales y de la distrib",
      "caption": "Compara versiones, rutas, módulos y políticas de actualización antes de elegir el origen del paquete."
    }
  },
  {
    "title": "Stable y mainline",
    "description": "La rama mainline recibe funciones y correcciones continuamente; stable cambia con menor frecuencia sin significar una rama más probada en todos los casos.",
    "section": "Instalación, procesos y configuración",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "Stable y mainline",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "stable y mainline",
      "caption": "La rama mainline recibe funciones y correcciones continuamente; stable cambia con menor frecuencia sin significar una rama más probada en todos los casos."
    }
  },
  {
    "title": "Compilación desde código fuente",
    "description": "Permite seleccionar módulos, paths, bibliotecas TLS y opciones de build que no ofrece un paquete precompilado.",
    "section": "Instalación, procesos y configuración",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "Compilación desde código fuente",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "compilación desde código fuente",
      "caption": "Permite seleccionar módulos, paths, bibliotecas TLS y opciones de build que no ofrece un paquete precompilado."
    }
  },
  {
    "title": "Opciones de configure",
    "description": "Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario.",
    "section": "Instalación, procesos y configuración",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Opciones de configure",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "opciones de configure",
      "caption": "Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario."
    }
  },
  {
    "title": "nginx -V",
    "description": "Muestra versión, compilador, biblioteca TLS y argumentos de build necesarios para reproducir o depurar la instalación.",
    "section": "Instalación, procesos y configuración",
    "family": "tabla de estados",
    "layout": "compact",
    "scene": {
      "variant": "matrix",
      "code": "nginx -V",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "nginx -v",
      "caption": "Muestra versión, compilador, biblioteca TLS y argumentos de build necesarios para reproducir o depurar la instalación."
    }
  },
  {
    "title": "Prefix, conf-path y módulos",
    "description": "Las rutas compiladas definen ubicación por defecto de configuración, logs, PID, temporales y módulos.",
    "section": "Instalación, procesos y configuración",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "Prefix, conf-path y módulos",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "prefix conf-path y módulos",
      "caption": "Las rutas compiladas definen ubicación por defecto de configuración, logs, PID, temporales y módulos."
    }
  },
  {
    "title": "Estructura de nginx.conf",
    "description": "Organiza directivas simples y bloques anidados como main, events, http, stream y mail.",
    "section": "Instalación, procesos y configuración",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "Estructura de nginx.conf",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "estructura de nginx.conf",
      "caption": "Organiza directivas simples y bloques anidados como main, events, http, stream y mail."
    }
  },
  {
    "title": "Directivas y contextos",
    "description": "Cada directiva solo es válida en contextos concretos y su posición cambia alcance, herencia y momento de evaluación.",
    "section": "Instalación, procesos y configuración",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "Directivas y contextos",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "directivas y contextos",
      "caption": "Cada directiva solo es válida en contextos concretos y su posición cambia alcance, herencia y momento de evaluación."
    }
  },
  {
    "title": "include",
    "description": "Divide la configuración en archivos reutilizables y puede expandir patrones glob en el momento de carga.",
    "section": "Instalación, procesos y configuración",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "include",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "include",
      "caption": "Divide la configuración en archivos reutilizables y puede expandir patrones glob en el momento de carga."
    }
  },
  {
    "title": "nginx -t",
    "description": "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración.",
    "section": "Instalación, procesos y configuración",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "nginx -t",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "nginx -t",
      "caption": "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración."
    }
  },
  {
    "title": "nginx -T",
    "description": "Valida y además imprime la configuración efectiva completa con todos los includes expandidos.",
    "section": "Instalación, procesos y configuración",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "nginx -T",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "nginx -t",
      "caption": "Valida y además imprime la configuración efectiva completa con todos los includes expandidos."
    }
  },
  {
    "title": "Señal start y arranque",
    "description": "Al iniciar, NGINX parsea toda la configuración, abre logs y sockets, y solo después crea workers.",
    "section": "Instalación, procesos y configuración",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "Señal start y arranque",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "señal start y arranque",
      "caption": "Al iniciar, NGINX parsea toda la configuración, abre logs y sockets, y solo después crea workers."
    }
  },
  {
    "title": "stop frente a quit",
    "description": "stop termina rápidamente; quit solicita cierre graceful para finalizar conexiones activas antes de salir.",
    "section": "Instalación, procesos y configuración",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "stop frente a quit",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "stop frente a quit",
      "caption": "stop termina rápidamente; quit solicita cierre graceful para finalizar conexiones activas antes de salir."
    }
  },
  {
    "title": "reload graceful",
    "description": "El master valida la nueva configuración, abre recursos nuevos, inicia workers nuevos y pide retiro ordenado de los anteriores.",
    "section": "Instalación, procesos y configuración",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "reload graceful",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "reload graceful",
      "caption": "El master valida la nueva configuración, abre recursos nuevos, inicia workers nuevos y pide retiro ordenado de los anteriores."
    }
  },
  {
    "title": "reopen de logs",
    "description": "La señal reopen cierra y vuelve a abrir archivos de log para integrarse con rotación externa.",
    "section": "Instalación, procesos y configuración",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "reopen de logs",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "reopen de logs",
      "caption": "La señal reopen cierra y vuelve a abrir archivos de log para integrarse con rotación externa."
    }
  },
  {
    "title": "PID file",
    "description": "Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación.",
    "section": "Instalación, procesos y configuración",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "PID file",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "pid file",
      "caption": "Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación."
    }
  },
  {
    "title": "Integración con systemd",
    "description": "La unit define usuario, límites, validación, señales y reinicios; no reemplaza la semántica graceful propia de NGINX.",
    "section": "Instalación, procesos y configuración",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Integración con systemd",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "integración con systemd",
      "caption": "La unit define usuario, límites, validación, señales y reinicios; no reemplaza la semántica graceful propia de NGINX."
    }
  },
  {
    "title": "user directive",
    "description": "Los workers cambian a una identidad no privilegiada; esa cuenta necesita acceso efectivo a contenido, sockets y temporales.",
    "section": "Instalación, procesos y configuración",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "user directive",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "user directive",
      "caption": "Los workers cambian a una identidad no privilegiada; esa cuenta necesita acceso efectivo a contenido, sockets y temporales."
    }
  },
  {
    "title": "Directorios temporales",
    "description": "Client body, proxy, FastCGI y caché pueden escribir archivos temporales que requieren capacidad y permisos correctos.",
    "section": "Instalación, procesos y configuración",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Directorios temporales",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "directorios temporales",
      "caption": "Client body, proxy, FastCGI y caché pueden escribir archivos temporales que requieren capacidad y permisos correctos."
    }
  },
  {
    "title": "Upgrade de binario sin cortar servicio",
    "description": "El master puede iniciar un binario nuevo conservando sockets heredados y permitir rollback al proceso anterior.",
    "section": "Instalación, procesos y configuración",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "Upgrade de binario sin cortar servicio",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "upgrade de binario sin cortar serv",
      "caption": "El master puede iniciar un binario nuevo conservando sockets heredados y permitir rollback al proceso anterior."
    }
  },
  {
    "title": "Bloques server",
    "description": "Cada server representa un virtual host asociado a sockets listen, nombres y reglas de procesamiento.",
    "section": "Selección de servidor, location y URI",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "Bloques server",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "bloques server",
      "caption": "Cada server representa un virtual host asociado a sockets listen, nombres y reglas de procesamiento."
    }
  },
  {
    "title": "listen",
    "description": "Define dirección, puerto y parámetros del socket, incluidos default_server, ssl, http2, quic, reuseport o proxy_protocol.",
    "section": "Selección de servidor, location y URI",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "listen",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "listen",
      "caption": "Define dirección, puerto y parámetros del socket, incluidos default_server, ssl, http2, quic, reuseport o proxy_protocol."
    }
  },
  {
    "title": "default_server",
    "description": "Selecciona el server usado cuando el Host no coincide; pertenece al par address:port y no al nombre del sitio.",
    "section": "Selección de servidor, location y URI",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "default_server",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "defaultserver",
      "caption": "Selecciona el server usado cuando el Host no coincide; pertenece al par address:port y no al nombre del sitio."
    }
  },
  {
    "title": "server_name exacto",
    "description": "Los nombres exactos tienen prioridad sobre wildcards y expresiones regulares compatibles con el socket elegido.",
    "section": "Selección de servidor, location y URI",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "server_name exacto",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "servername exacto",
      "caption": "Los nombres exactos tienen prioridad sobre wildcards y expresiones regulares compatibles con el socket elegido."
    }
  },
  {
    "title": "server_name con wildcard",
    "description": "Patrones como *.example.com cubren familias de hosts y siguen reglas específicas de precedencia.",
    "section": "Selección de servidor, location y URI",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "server_name con wildcard",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "servername con wildcard",
      "caption": "Patrones como *.example.com cubren familias de hosts y siguen reglas específicas de precedencia."
    }
  },
  {
    "title": "server_name con regex",
    "description": "Las expresiones regulares se evalúan en orden de aparición y pueden capturar valores usados después.",
    "section": "Selección de servidor, location y URI",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "server_name con regex",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "servername con regex",
      "caption": "Las expresiones regulares se evalúan en orden de aparición y pueden capturar valores usados después."
    }
  },
  {
    "title": "Selección por IP y puerto",
    "description": "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante.",
    "section": "Selección de servidor, location y URI",
    "family": "topología y tráfico",
    "layout": "compact",
    "scene": {
      "variant": "network",
      "code": "Selección por IP y puerto",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "selección por ip y puerto",
      "caption": "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante."
    }
  },
  {
    "title": "Selección por Host",
    "description": "Después compara el campo Host o el nombre de la línea de petición con server_name dentro del socket seleccionado.",
    "section": "Selección de servidor, location y URI",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "Selección por Host",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "selección por host",
      "caption": "Después compara el campo Host o el nombre de la línea de petición con server_name dentro del socket seleccionado."
    }
  },
  {
    "title": "SNI y selección TLS",
    "description": "Durante el handshake, SNI puede decidir certificado y parte de la configuración antes de conocer la petición HTTP completa.",
    "section": "Selección de servidor, location y URI",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "SNI y selección TLS",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "sni y selección tls",
      "caption": "Durante el handshake, SNI puede decidir certificado y parte de la configuración antes de conocer la petición HTTP completa."
    }
  },
  {
    "title": "Normalización de URI",
    "description": "NGINX decodifica ciertos escapes, resuelve componentes relativos y comprime barras antes de comparar locations.",
    "section": "Selección de servidor, location y URI",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "Normalización de URI",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "normalización de uri",
      "caption": "NGINX decodifica ciertos escapes, resuelve componentes relativos y comprime barras antes de comparar locations."
    }
  },
  {
    "title": "location exacta",
    "description": "location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta.",
    "section": "Selección de servidor, location y URI",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "location exacta",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "location exacta",
      "caption": "location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta."
    }
  },
  {
    "title": "location por prefijo",
    "description": "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables.",
    "section": "Selección de servidor, location y URI",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "location por prefijo",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "location por prefijo",
      "caption": "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables."
    }
  },
  {
    "title": "Modificador ^~",
    "description": "Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente.",
    "section": "Selección de servidor, location y URI",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "Modificador ^~",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "modificador ",
      "caption": "Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente."
    }
  },
  {
    "title": "location regex",
    "description": "Las expresiones regulares se prueban en orden de configuración y la primera coincidencia selecciona el bloque.",
    "section": "Selección de servidor, location y URI",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "location regex",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "location regex",
      "caption": "Las expresiones regulares se prueban en orden de configuración y la primera coincidencia selecciona el bloque."
    }
  },
  {
    "title": "Regex sensible e insensible",
    "description": "~ distingue mayúsculas; ~* compara sin distinguirlas, con el costo y complejidad propios de regex.",
    "section": "Selección de servidor, location y URI",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Regex sensible e insensible",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "regex sensible e insensible",
      "caption": "~ distingue mayúsculas; ~* compara sin distinguirlas, con el costo y complejidad propios de regex."
    }
  },
  {
    "title": "Locations anidadas",
    "description": "El árbol de locations combina prefijos y regex; su resolución requiere entender el nivel donde fue hallado cada candidato.",
    "section": "Selección de servidor, location y URI",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "Locations anidadas",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "locations anidadas",
      "caption": "El árbol de locations combina prefijos y regex; su resolución requiere entender el nivel donde fue hallado cada candidato."
    }
  },
  {
    "title": "Named locations",
    "description": "Bloques @name son destinos internos usados por try_files, error_page o módulos, no URIs solicitables directamente.",
    "section": "Selección de servidor, location y URI",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "Named locations",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "named locations",
      "caption": "Bloques @name son destinos internos usados por try_files, error_page o módulos, no URIs solicitables directamente."
    }
  },
  {
    "title": "internal",
    "description": "Marca una location como accesible solo desde redirecciones internas, subrequests o mecanismos internos de NGINX.",
    "section": "Selección de servidor, location y URI",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "internal",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "internal",
      "caption": "Marca una location como accesible solo desde redirecciones internas, subrequests o mecanismos internos de NGINX."
    }
  },
  {
    "title": "try_files",
    "description": "Comprueba existencia de archivos en orden y termina usando una URI, código o named location de fallback.",
    "section": "Selección de servidor, location y URI",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "try_files",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "tryfiles",
      "caption": "Comprueba existencia de archivos en orden y termina usando una URI, código o named location de fallback."
    }
  },
  {
    "title": "root frente a alias",
    "description": "root concatena la URI; alias sustituye la parte correspondiente de la location y exige especial cuidado con regex y barras.",
    "section": "Selección de servidor, location y URI",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "root frente a alias",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "root frente a alias",
      "caption": "root concatena la URI; alias sustituye la parte correspondiente de la location y exige especial cuidado con regex y barras."
    }
  },
  {
    "title": "index",
    "description": "Busca archivos índice y puede producir una redirección interna que vuelve a ejecutar selección de location.",
    "section": "Selección de servidor, location y URI",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "index",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "index",
      "caption": "Busca archivos índice y puede producir una redirección interna que vuelve a ejecutar selección de location."
    }
  },
  {
    "title": "error_page",
    "description": "Transforma errores en URIs internas, named locations o respuestas externas, y puede cambiar el código devuelto.",
    "section": "Selección de servidor, location y URI",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "error_page",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "errorpage",
      "caption": "Transforma errores en URIs internas, named locations o respuestas externas, y puede cambiar el código devuelto."
    }
  },
  {
    "title": "return",
    "description": "Finaliza temprano con un código, redirect o cuerpo simple sin ejecutar reglas de routing innecesarias.",
    "section": "Selección de servidor, location y URI",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "return",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "return",
      "caption": "Finaliza temprano con un código, redirect o cuerpo simple sin ejecutar reglas de routing innecesarias."
    }
  },
  {
    "title": "rewrite",
    "description": "Aplica expresiones regulares y reemplazos durante fases rewrite, pudiendo provocar una nueva búsqueda de location.",
    "section": "Selección de servidor, location y URI",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "rewrite",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "rewrite",
      "caption": "Aplica expresiones regulares y reemplazos durante fases rewrite, pudiendo provocar una nueva búsqueda de location."
    }
  },
  {
    "title": "last y break",
    "description": "last inicia otra resolución de URI; break detiene el conjunto actual sin reiniciar selection de location.",
    "section": "Selección de servidor, location y URI",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "last y break",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "last y break",
      "caption": "last inicia otra resolución de URI; break detiene el conjunto actual sin reiniciar selection de location."
    }
  },
  {
    "title": "Redirección interna",
    "description": "try_files, rewrite, index y error_page pueden cambiar URI dentro del servidor sin emitir un redirect al cliente.",
    "section": "Selección de servidor, location y URI",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "Redirección interna",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "redirección interna",
      "caption": "try_files, rewrite, index y error_page pueden cambiar URI dentro del servidor sin emitir un redirect al cliente."
    }
  },
  {
    "title": "Variables bajo demanda",
    "description": "Muchas variables se calculan solo cuando una directiva realmente las usa, evitando trabajo por declaraciones no consultadas.",
    "section": "Selección de servidor, location y URI",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "Variables bajo demanda",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "variables bajo demanda",
      "caption": "Muchas variables se calculan solo cuando una directiva realmente las usa, evitando trabajo por declaraciones no consultadas."
    }
  },
  {
    "title": "map",
    "description": "Crea una variable derivada de otra mediante coincidencias exactas, masks, regex y un valor default en contexto http.",
    "section": "Selección de servidor, location y URI",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "map",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "map",
      "caption": "Crea una variable derivada de otra mediante coincidencias exactas, masks, regex y un valor default en contexto http."
    }
  },
  {
    "title": "Document root",
    "description": "Relaciona una URI con un path del filesystem desde el que NGINX puede abrir y enviar contenido.",
    "section": "Servidor web y contenido estático",
    "family": "acumulación de recursos",
    "layout": "compact",
    "scene": {
      "variant": "stack",
      "code": "Document root",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "document root",
      "caption": "Relaciona una URI con un path del filesystem desde el que NGINX puede abrir y enviar contenido."
    }
  },
  {
    "title": "Virtual hosting de sitios",
    "description": "Distintos server blocks pueden servir roots, certificados y políticas diferentes desde una misma instancia.",
    "section": "Servidor web y contenido estático",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Virtual hosting de sitios",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "virtual hosting de sitios",
      "caption": "Distintos server blocks pueden servir roots, certificados y políticas diferentes desde una misma instancia."
    }
  },
  {
    "title": "MIME types",
    "description": "El mapa types asocia extensiones con Content-Type y default_type cubre archivos sin coincidencia.",
    "section": "Servidor web y contenido estático",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "MIME types",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "mime types",
      "caption": "El mapa types asocia extensiones con Content-Type y default_type cubre archivos sin coincidencia."
    }
  },
  {
    "title": "Archivos índice",
    "description": "index define candidatos por directorio y puede usar variables para escoger el recurso inicial.",
    "section": "Servidor web y contenido estático",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Archivos índice",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "archivos índice",
      "caption": "index define candidatos por directorio y puede usar variables para escoger el recurso inicial."
    }
  },
  {
    "title": "Autoindex",
    "description": "Genera listados de directorio cuando no existe índice y la política lo permite; normalmente se desactiva en contenido sensible.",
    "section": "Servidor web y contenido estático",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "Autoindex",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "autoindex",
      "caption": "Genera listados de directorio cuando no existe índice y la política lo permite; normalmente se desactiva en contenido sensible."
    }
  },
  {
    "title": "sendfile",
    "description": "Pide al kernel transferir archivos al socket con menos copias entre user space y kernel space.",
    "section": "Servidor web y contenido estático",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "sendfile",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "sendfile",
      "caption": "Pide al kernel transferir archivos al socket con menos copias entre user space y kernel space."
    }
  },
  {
    "title": "tcp_nopush",
    "description": "Puede alinear headers y bloques grandes cuando sendfile está activo para reducir paquetes parciales.",
    "section": "Servidor web y contenido estático",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "tcp_nopush",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "tcpnopush",
      "caption": "Puede alinear headers y bloques grandes cuando sendfile está activo para reducir paquetes parciales."
    }
  },
  {
    "title": "tcp_nodelay",
    "description": "Reduce espera de paquetes pequeños en conexiones keep-alive cuando la latencia importa más que agrupar envíos.",
    "section": "Servidor web y contenido estático",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "tcp_nodelay",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "tcpnodelay",
      "caption": "Reduce espera de paquetes pequeños en conexiones keep-alive cuando la latencia importa más que agrupar envíos."
    }
  },
  {
    "title": "AIO y thread pools",
    "description": "Delegan lecturas de disco que podrían bloquear workers, según filesystem, tamaño y plataforma.",
    "section": "Servidor web y contenido estático",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "AIO y thread pools",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "aio y thread pools",
      "caption": "Delegan lecturas de disco que podrían bloquear workers, según filesystem, tamaño y plataforma."
    }
  },
  {
    "title": "directio",
    "description": "Evita page cache para archivos grandes en configuraciones donde la doble caché perjudica el workload.",
    "section": "Servidor web y contenido estático",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "directio",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "directio",
      "caption": "Evita page cache para archivos grandes en configuraciones donde la doble caché perjudica el workload."
    }
  },
  {
    "title": "Range requests",
    "description": "Permite servir fragmentos de archivos y responder 206 cuando el recurso y la política admiten rangos.",
    "section": "Servidor web y contenido estático",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "Range requests",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "range requests",
      "caption": "Permite servir fragmentos de archivos y responder 206 cuando el recurso y la política admiten rangos."
    }
  },
  {
    "title": "ETag",
    "description": "Genera un validador de representación usado por If-None-Match para respuestas condicionales.",
    "section": "Servidor web y contenido estático",
    "family": "memoria intermedia",
    "layout": "compact",
    "scene": {
      "variant": "cache",
      "code": "ETag",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "etag",
      "caption": "Genera un validador de representación usado por If-None-Match para respuestas condicionales."
    }
  },
  {
    "title": "Last-Modified",
    "description": "Expone tiempo de modificación y participa en validación condicional con If-Modified-Since.",
    "section": "Servidor web y contenido estático",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "Last-Modified",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "last-modified",
      "caption": "Expone tiempo de modificación y participa en validación condicional con If-Modified-Since."
    }
  },
  {
    "title": "304 Not Modified",
    "description": "Evita reenviar el cuerpo cuando los validadores demuestran que la copia del cliente sigue vigente.",
    "section": "Servidor web y contenido estático",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "304 Not Modified",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "304 not modified",
      "caption": "Evita reenviar el cuerpo cuando los validadores demuestran que la copia del cliente sigue vigente."
    }
  },
  {
    "title": "expires y Cache-Control",
    "description": "Configuran frescura del navegador o CDN sin convertir automáticamente a NGINX en un proxy cache.",
    "section": "Servidor web y contenido estático",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "expires y Cache-Control",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "expires y cache-control",
      "caption": "Configuran frescura del navegador o CDN sin convertir automáticamente a NGINX en un proxy cache."
    }
  },
  {
    "title": "add_header always",
    "description": "Agrega headers también a códigos que no pertenecen al conjunto por defecto cuando se usa el parámetro always.",
    "section": "Servidor web y contenido estático",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "add_header always",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "addheader always",
      "caption": "Agrega headers también a códigos que no pertenecen al conjunto por defecto cuando se usa el parámetro always."
    }
  },
  {
    "title": "open_file_cache",
    "description": "Conserva descriptores, metadata y errores de apertura para reducir syscalls en contenido consultado repetidamente.",
    "section": "Servidor web y contenido estático",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "open_file_cache",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "openfilecache",
      "caption": "Conserva descriptores, metadata y errores de apertura para reducir syscalls en contenido consultado repetidamente."
    }
  },
  {
    "title": "disable_symlinks",
    "description": "Restringe acceso a contenido atravesando symbolic links según ownership o política de seguridad.",
    "section": "Servidor web y contenido estático",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "disable_symlinks",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "disablesymlinks",
      "caption": "Restringe acceso a contenido atravesando symbolic links según ownership o política de seguridad."
    }
  },
  {
    "title": "Permisos del filesystem",
    "description": "El worker necesita execute en directorios y read en archivos; root puede ocultar fallos que el usuario real sufrirá.",
    "section": "Servidor web y contenido estático",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Permisos del filesystem",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "permisos del filesystem",
      "caption": "El worker necesita execute en directorios y read en archivos; root puede ocultar fallos que el usuario real sufrirá."
    }
  },
  {
    "title": "SPA fallback",
    "description": "try_files puede servir index.html para rutas de cliente sin convertir errores de assets en respuestas HTML accidentalmente.",
    "section": "Servidor web y contenido estático",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "SPA fallback",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "spa fallback",
      "caption": "try_files puede servir index.html para rutas de cliente sin convertir errores de assets en respuestas HTML accidentalmente."
    }
  },
  {
    "title": "Páginas de error estáticas",
    "description": "Mantienen una respuesta disponible incluso cuando la aplicación upstream está caída o saturada.",
    "section": "Servidor web y contenido estático",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "Páginas de error estáticas",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "páginas de error estáticas",
      "caption": "Mantienen una respuesta disponible incluso cuando la aplicación upstream está caída o saturada."
    }
  },
  {
    "title": "Precompressed static files",
    "description": "gzip_static puede elegir archivos .gz generados en build cuando el cliente anuncia soporte compatible.",
    "section": "Servidor web y contenido estático",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Precompressed static files",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "precompressed static files",
      "caption": "gzip_static puede elegir archivos .gz generados en build cuando el cliente anuncia soporte compatible."
    }
  },
  {
    "title": "Reverse proxy",
    "description": "NGINX recibe la conexión del cliente, crea o reutiliza otra hacia el upstream y traduce la respuesta entre ambas.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "Reverse proxy",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "reverse proxy",
      "caption": "NGINX recibe la conexión del cliente, crea o reutiliza otra hacia el upstream y traduce la respuesta entre ambas."
    }
  },
  {
    "title": "proxy_pass",
    "description": "Envía la petición a una URL, server group o socket UNIX y determina cómo se construye la URI upstream.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "proxy_pass",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "proxypass",
      "caption": "Envía la petición a una URL, server group o socket UNIX y determina cómo se construye la URI upstream."
    }
  },
  {
    "title": "Semántica de URI en proxy_pass",
    "description": "La presencia de una URI en proxy_pass puede reemplazar la parte de la URI que coincidió con location.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "Semántica de URI en proxy_pass",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "semántica de uri en proxypass",
      "caption": "La presencia de una URI en proxy_pass puede reemplazar la parte de la URI que coincidió con location."
    }
  },
  {
    "title": "Grupos upstream",
    "description": "Nombran conjuntos de servidores y concentran balanceo, fallos, keepalive y estado compartido.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "Grupos upstream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "grupos upstream",
      "caption": "Nombran conjuntos de servidores y concentran balanceo, fallos, keepalive y estado compartido."
    }
  },
  {
    "title": "proxy_set_header Host",
    "description": "Controla el Host visto por la aplicación, esencial para virtual hosts, URLs absolutas y validaciones de origen.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "proxy_set_header Host",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "proxysetheader host",
      "caption": "Controla el Host visto por la aplicación, esencial para virtual hosts, URLs absolutas y validaciones de origen."
    }
  },
  {
    "title": "X-Real-IP",
    "description": "Transmite una dirección de cliente elegida por la configuración, sin ser confiable si cualquier cliente puede escribirla.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "X-Real-IP",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "x-real-ip",
      "caption": "Transmite una dirección de cliente elegida por la configuración, sin ser confiable si cualquier cliente puede escribirla."
    }
  },
  {
    "title": "X-Forwarded-For",
    "description": "Construye una cadena de proxies; cada salto debe decidir qué miembros son de confianza antes de usarla.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "X-Forwarded-For",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "x-forwarded-for",
      "caption": "Construye una cadena de proxies; cada salto debe decidir qué miembros son de confianza antes de usarla."
    }
  },
  {
    "title": "X-Forwarded-Proto",
    "description": "Indica el esquema externo para redirects, cookies secure y generación de URLs cuando TLS termina en NGINX.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "X-Forwarded-Proto",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "x-forwarded-proto",
      "caption": "Indica el esquema externo para redirects, cookies secure y generación de URLs cuando TLS termina en NGINX."
    }
  },
  {
    "title": "Forwarded",
    "description": "Header estandarizado que puede representar for, proto, host y by, aunque muchas aplicaciones siguen usando X-Forwarded-*.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Forwarded",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "forwarded",
      "caption": "Header estandarizado que puede representar for, proto, host y by, aunque muchas aplicaciones siguen usando X-Forwarded-*."
    }
  },
  {
    "title": "Real IP module",
    "description": "Reemplaza la dirección visible con datos de proxies confiables configurados mediante set_real_ip_from.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Real IP module",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "real ip module",
      "caption": "Reemplaza la dirección visible con datos de proxies confiables configurados mediante set_real_ip_from."
    }
  },
  {
    "title": "proxy_http_version",
    "description": "Selecciona la versión HTTP hacia el upstream y afecta keepalive, WebSocket y características disponibles.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "proxy_http_version",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "proxyhttpversion",
      "caption": "Selecciona la versión HTTP hacia el upstream y afecta keepalive, WebSocket y características disponibles."
    }
  },
  {
    "title": "Keepalive upstream",
    "description": "Mantiene conexiones inactivas por worker para evitar handshakes TCP repetidos; no limita conexiones totales.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "acumulación de recursos",
    "layout": "compact",
    "scene": {
      "variant": "stack",
      "code": "Keepalive upstream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "keepalive upstream",
      "caption": "Mantiene conexiones inactivas por worker para evitar handshakes TCP repetidos; no limita conexiones totales."
    }
  },
  {
    "title": "proxy_request_buffering",
    "description": "Decide si NGINX recibe todo el body antes de enviarlo o lo transmite progresivamente al upstream.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "proxy_request_buffering",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxyrequestbuffering",
      "caption": "Decide si NGINX recibe todo el body antes de enviarlo o lo transmite progresivamente al upstream."
    }
  },
  {
    "title": "proxy_buffering",
    "description": "Cuando está activo, NGINX lee el upstream con rapidez y amortigua la velocidad del cliente mediante memoria o disco.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "proxy_buffering",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxybuffering",
      "caption": "Cuando está activo, NGINX lee el upstream con rapidez y amortigua la velocidad del cliente mediante memoria o disco."
    }
  },
  {
    "title": "proxy_buffer_size",
    "description": "Reserva el buffer inicial que normalmente contiene headers de la respuesta upstream.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "proxy_buffer_size",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxybuffersize",
      "caption": "Reserva el buffer inicial que normalmente contiene headers de la respuesta upstream."
    }
  },
  {
    "title": "proxy_buffers",
    "description": "Define número y tamaño de buffers usados para el resto de una respuesta proxied.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "proxy_buffers",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxybuffers",
      "caption": "Define número y tamaño de buffers usados para el resto de una respuesta proxied."
    }
  },
  {
    "title": "Archivos temporales de proxy",
    "description": "Una respuesta mayor que los buffers puede pasar a disco, afectando latencia, I/O y capacidad.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Archivos temporales de proxy",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "archivos temporales de proxy",
      "caption": "Una respuesta mayor que los buffers puede pasar a disco, afectando latencia, I/O y capacidad."
    }
  },
  {
    "title": "proxy_connect_timeout",
    "description": "Limita el tiempo para establecer conexión con el upstream, no el tiempo total de la petición.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "proxy_connect_timeout",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "proxyconnecttimeout",
      "caption": "Limita el tiempo para establecer conexión con el upstream, no el tiempo total de la petición."
    }
  },
  {
    "title": "proxy_send_timeout",
    "description": "Limita intervalos entre operaciones de escritura hacia el upstream.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "proxy_send_timeout",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "proxysendtimeout",
      "caption": "Limita intervalos entre operaciones de escritura hacia el upstream."
    }
  },
  {
    "title": "proxy_read_timeout",
    "description": "Limita intervalos entre lecturas desde el upstream; no representa un deadline absoluto del request.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "proxy_read_timeout",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "proxyreadtimeout",
      "caption": "Limita intervalos entre lecturas desde el upstream; no representa un deadline absoluto del request."
    }
  },
  {
    "title": "proxy_next_upstream",
    "description": "Define qué fallos permiten intentar otro servidor y cuándo deja de ser seguro repetir la operación.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "proxy_next_upstream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "proxynextupstream",
      "caption": "Define qué fallos permiten intentar otro servidor y cuándo deja de ser seguro repetir la operación."
    }
  },
  {
    "title": "Reintentos y métodos no idempotentes",
    "description": "Repetir POST después de enviar parte del body puede duplicar trabajo; retries requieren semántica de idempotencia.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "Reintentos y métodos no idempotentes",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "reintentos y métodos no idempotent",
      "caption": "Repetir POST después de enviar parte del body puede duplicar trabajo; retries requieren semántica de idempotencia."
    }
  },
  {
    "title": "proxy_intercept_errors",
    "description": "Permite que error_page procese respuestas upstream con códigos configurados en lugar de pasarlas directamente.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "proxy_intercept_errors",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "proxyintercepterrors",
      "caption": "Permite que error_page procese respuestas upstream con códigos configurados en lugar de pasarlas directamente."
    }
  },
  {
    "title": "proxy_redirect",
    "description": "Reescribe Location y Refresh devueltos por el upstream para que reflejen la URL pública.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "proxy_redirect",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "proxyredirect",
      "caption": "Reescribe Location y Refresh devueltos por el upstream para que reflejen la URL pública."
    }
  },
  {
    "title": "Reescritura de cookies",
    "description": "proxy_cookie_domain, path y flags ajustan dominio, ruta, SameSite, Secure o HttpOnly de Set-Cookie.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "Reescritura de cookies",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "reescritura de cookies",
      "caption": "proxy_cookie_domain, path y flags ajustan dominio, ruta, SameSite, Secure o HttpOnly de Set-Cookie."
    }
  },
  {
    "title": "Tamaño máximo del body",
    "description": "client_max_body_size rechaza cargas demasiado grandes antes de transferirlas a la aplicación.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "Tamaño máximo del body",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "tamaño máximo del body",
      "caption": "client_max_body_size rechaza cargas demasiado grandes antes de transferirlas a la aplicación."
    }
  },
  {
    "title": "WebSocket proxying",
    "description": "Reenvía Upgrade y Connection explícitamente porque son headers hop-by-hop y mantiene el túnel abierto.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "WebSocket proxying",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "websocket proxying",
      "caption": "Reenvía Upgrade y Connection explícitamente porque son headers hop-by-hop y mantiene el túnel abierto."
    }
  },
  {
    "title": "gRPC proxying",
    "description": "grpc_pass conecta clientes HTTP/2 con servicios gRPC y dispone de headers, timeouts y error handling específicos.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "gRPC proxying",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "grpc proxying",
      "caption": "grpc_pass conecta clientes HTTP/2 con servicios gRPC y dispone de headers, timeouts y error handling específicos."
    }
  },
  {
    "title": "FastCGI y PHP-FPM",
    "description": "fastcgi_pass envía parámetros y cuerpo mediante FastCGI; SCRIPT_FILENAME debe mapear el archivo correcto.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "FastCGI y PHP-FPM",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "fastcgi y php-fpm",
      "caption": "fastcgi_pass envía parámetros y cuerpo mediante FastCGI; SCRIPT_FILENAME debe mapear el archivo correcto."
    }
  },
  {
    "title": "uwsgi y SCGI",
    "description": "Módulos dedicados traducen la petición a protocolos de aplicaciones que no hablan HTTP directamente.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "uwsgi y SCGI",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "uwsgi y scgi",
      "caption": "Módulos dedicados traducen la petición a protocolos de aplicaciones que no hablan HTTP directamente."
    }
  },
  {
    "title": "Socket UNIX upstream",
    "description": "Evita TCP local y usa permisos del filesystem como parte de la política de acceso entre procesos.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Socket UNIX upstream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "socket unix upstream",
      "caption": "Evita TCP local y usa permisos del filesystem como parte de la política de acceso entre procesos."
    }
  },
  {
    "title": "TLS hacia el upstream",
    "description": "proxy_ssl_* controla SNI, trusted CA, protocolos y verificación de certificados del backend HTTPS.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "TLS hacia el upstream",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "tls hacia el upstream",
      "caption": "proxy_ssl_* controla SNI, trusted CA, protocolos y verificación de certificados del backend HTTPS."
    }
  },
  {
    "title": "DNS dinámico de upstream",
    "description": "resolver y parámetros resolve permiten refrescar direcciones sin depender únicamente de resolución al arranque.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "DNS dinámico de upstream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "dns dinámico de upstream",
      "caption": "resolver y parámetros resolve permiten refrescar direcciones sin depender únicamente de resolución al arranque."
    }
  },
  {
    "title": "auth_request",
    "description": "Realiza un subrequest de autorización y permite o niega la petición principal según el código resultante.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "validación y decisión",
    "layout": "compact",
    "scene": {
      "variant": "gate",
      "code": "auth_request",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "authrequest",
      "caption": "Realiza un subrequest de autorización y permite o niega la petición principal según el código resultante."
    }
  },
  {
    "title": "mirror",
    "description": "Duplica peticiones en background para shadow traffic o validación, descartando la respuesta del destino espejo.",
    "section": "Reverse proxy y aplicaciones upstream",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "mirror",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "mirror",
      "caption": "Duplica peticiones en background para shadow traffic o validación, descartando la respuesta del destino espejo."
    }
  },
  {
    "title": "Round robin",
    "description": "Distribuye peticiones de forma cíclica y es el método por defecto cuando no se elige otro algoritmo.",
    "section": "Balanceo, salud y resiliencia",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "Round robin",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "round robin",
      "caption": "Distribuye peticiones de forma cíclica y es el método por defecto cuando no se elige otro algoritmo."
    }
  },
  {
    "title": "Weighted round robin",
    "description": "Los pesos cambian la proporción de tráfico asignada a servidores con capacidades distintas.",
    "section": "Balanceo, salud y resiliencia",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "Weighted round robin",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "weighted round robin",
      "caption": "Los pesos cambian la proporción de tráfico asignada a servidores con capacidades distintas."
    }
  },
  {
    "title": "Least connections",
    "description": "Elige el servidor con menos conexiones activas, considerando pesos cuando están configurados.",
    "section": "Balanceo, salud y resiliencia",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "Least connections",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "least connections",
      "caption": "Elige el servidor con menos conexiones activas, considerando pesos cuando están configurados."
    }
  },
  {
    "title": "ip_hash",
    "description": "Usa la dirección del cliente para afinidad simple, con limitaciones frente a NAT, proxies y cambios de pool.",
    "section": "Balanceo, salud y resiliencia",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "ip_hash",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "iphash",
      "caption": "Usa la dirección del cliente para afinidad simple, con limitaciones frente a NAT, proxies y cambios de pool."
    }
  },
  {
    "title": "Hash genérico",
    "description": "Calcula el upstream a partir de variables como host, URI o cookie para afinidad controlada.",
    "section": "Balanceo, salud y resiliencia",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Hash genérico",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "hash genérico",
      "caption": "Calcula el upstream a partir de variables como host, URI o cookie para afinidad controlada."
    }
  },
  {
    "title": "Consistent hash",
    "description": "Reduce remapeo de claves cuando cambia el pool, útil para caches o particiones con afinidad.",
    "section": "Balanceo, salud y resiliencia",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "Consistent hash",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "consistent hash",
      "caption": "Reduce remapeo de claves cuando cambia el pool, útil para caches o particiones con afinidad."
    }
  },
  {
    "title": "Random",
    "description": "Selecciona servidores aleatoriamente y puede comparar dos candidatos según conexiones cuando se usa random two.",
    "section": "Balanceo, salud y resiliencia",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Random",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "random",
      "caption": "Selecciona servidores aleatoriamente y puede comparar dos candidatos según conexiones cuando se usa random two."
    }
  },
  {
    "title": "Health checks pasivos",
    "description": "NGINX infiere fallos a partir de errores reales de conexión o respuesta observados durante tráfico.",
    "section": "Balanceo, salud y resiliencia",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "Health checks pasivos",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "health checks pasivos",
      "caption": "NGINX infiere fallos a partir de errores reales de conexión o respuesta observados durante tráfico."
    }
  },
  {
    "title": "max_fails",
    "description": "Marca cuántos fallos dentro de fail_timeout pueden considerar temporalmente no disponible a un servidor.",
    "section": "Balanceo, salud y resiliencia",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "max_fails",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "maxfails",
      "caption": "Marca cuántos fallos dentro de fail_timeout pueden considerar temporalmente no disponible a un servidor."
    }
  },
  {
    "title": "fail_timeout",
    "description": "Define ventana de conteo y periodo aproximado de exclusión en health checking pasivo.",
    "section": "Balanceo, salud y resiliencia",
    "family": "validación y decisión",
    "layout": "compact",
    "scene": {
      "variant": "gate",
      "code": "fail_timeout",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "failtimeout",
      "caption": "Define ventana de conteo y periodo aproximado de exclusión en health checking pasivo."
    }
  },
  {
    "title": "Servidor backup",
    "description": "Solo recibe tráfico cuando los servidores primarios no están disponibles según la política del upstream.",
    "section": "Balanceo, salud y resiliencia",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "Servidor backup",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "servidor backup",
      "caption": "Solo recibe tráfico cuando los servidores primarios no están disponibles según la política del upstream."
    }
  },
  {
    "title": "Servidor down",
    "description": "Retira explícitamente un miembro del balanceo conservando su definición y, en algunos algoritmos, el mapeo.",
    "section": "Balanceo, salud y resiliencia",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "Servidor down",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "servidor down",
      "caption": "Retira explícitamente un miembro del balanceo conservando su definición y, en algunos algoritmos, el mapeo."
    }
  },
  {
    "title": "Shared memory zone",
    "description": "Comparte configuración y estado de upstream entre workers mediante la directiva zone.",
    "section": "Balanceo, salud y resiliencia",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Shared memory zone",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "shared memory zone",
      "caption": "Comparte configuración y estado de upstream entre workers mediante la directiva zone."
    }
  },
  {
    "title": "Keepalive pool",
    "description": "Cada worker conserva conexiones upstream inactivas; el tamaño debe coordinarse con límites del backend.",
    "section": "Balanceo, salud y resiliencia",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Keepalive pool",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "keepalive pool",
      "caption": "Cada worker conserva conexiones upstream inactivas; el tamaño debe coordinarse con límites del backend."
    }
  },
  {
    "title": "Active health checks",
    "description": "NGINX Plus puede sondear endpoints sin esperar tráfico real y validar códigos, headers o cuerpos.",
    "section": "Balanceo, salud y resiliencia",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "Active health checks",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "active health checks",
      "caption": "NGINX Plus puede sondear endpoints sin esperar tráfico real y validar códigos, headers o cuerpos."
    }
  },
  {
    "title": "Slow start",
    "description": "NGINX Plus puede reintroducir gradualmente un servidor recuperado para evitar una ráfaga inmediata.",
    "section": "Balanceo, salud y resiliencia",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Slow start",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "slow start",
      "caption": "NGINX Plus puede reintroducir gradualmente un servidor recuperado para evitar una ráfaga inmediata."
    }
  },
  {
    "title": "Session persistence",
    "description": "NGINX Plus ofrece mecanismos sticky adicionales; en Open Source se usan hash, ip_hash o estado externo según el caso.",
    "section": "Balanceo, salud y resiliencia",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "Session persistence",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "session persistence",
      "caption": "NGINX Plus ofrece mecanismos sticky adicionales; en Open Source se usan hash, ip_hash o estado externo según el caso."
    }
  },
  {
    "title": "Connection draining",
    "description": "Retira un servidor de nuevas selecciones mientras las conexiones o sesiones existentes terminan ordenadamente.",
    "section": "Balanceo, salud y resiliencia",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "Connection draining",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "connection draining",
      "caption": "Retira un servidor de nuevas selecciones mientras las conexiones o sesiones existentes terminan ordenadamente."
    }
  },
  {
    "title": "Service discovery",
    "description": "DNS y APIs dinámicas permiten que el pool acompañe instancias efímeras sin recargar manualmente cada cambio.",
    "section": "Balanceo, salud y resiliencia",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "Service discovery",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "service discovery",
      "caption": "DNS y APIs dinámicas permiten que el pool acompañe instancias efímeras sin recargar manualmente cada cambio."
    }
  },
  {
    "title": "Resolver TTL",
    "description": "El periodo de validez determina cuánto tiempo NGINX conserva una respuesta DNS antes de consultarla otra vez.",
    "section": "Balanceo, salud y resiliencia",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Resolver TTL",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "resolver ttl",
      "caption": "El periodo de validez determina cuánto tiempo NGINX conserva una respuesta DNS antes de consultarla otra vez."
    }
  },
  {
    "title": "SRV records",
    "description": "Pueden aportar host, puerto, prioridad y peso para servicios descubiertos dinámicamente en configuraciones compatibles.",
    "section": "Balanceo, salud y resiliencia",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "SRV records",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "srv records",
      "caption": "Pueden aportar host, puerto, prioridad y peso para servicios descubiertos dinámicamente en configuraciones compatibles."
    }
  },
  {
    "title": "Retries con deadline",
    "description": "El número de intentos, timeout y tiempo total deben limitarse para no amplificar una caída upstream.",
    "section": "Balanceo, salud y resiliencia",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "Retries con deadline",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "retries con deadline",
      "caption": "El número de intentos, timeout y tiempo total deben limitarse para no amplificar una caída upstream."
    }
  },
  {
    "title": "Colas upstream",
    "description": "NGINX Plus puede encolar peticiones cuando todos los servidores alcanzan límites, con timeout y tamaño explícitos.",
    "section": "Balanceo, salud y resiliencia",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "Colas upstream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "colas upstream",
      "caption": "NGINX Plus puede encolar peticiones cuando todos los servidores alcanzan límites, con timeout y tamaño explícitos."
    }
  },
  {
    "title": "Failure domains",
    "description": "Un pool útil distribuye instancias entre hosts o zonas y evita que todos los miembros compartan el mismo punto de fallo.",
    "section": "Balanceo, salud y resiliencia",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Failure domains",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "failure domains",
      "caption": "Un pool útil distribuye instancias entre hosts o zonas y evita que todos los miembros compartan el mismo punto de fallo."
    }
  },
  {
    "title": "Terminación TLS",
    "description": "NGINX negocia cifrado con el cliente y puede hablar HTTP o HTTPS hacia el upstream según la frontera de confianza.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "Terminación TLS",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "terminación tls",
      "caption": "NGINX negocia cifrado con el cliente y puede hablar HTTP o HTTPS hacia el upstream según la frontera de confianza."
    }
  },
  {
    "title": "ssl_certificate y ssl_certificate_key",
    "description": "Relacionan la cadena pública con la clave privada que el worker necesita leer de forma protegida.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "ssl_certificate y ssl_certificate_key",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "sslcertificate y sslcertificatekey",
      "caption": "Relacionan la cadena pública con la clave privada que el worker necesita leer de forma protegida."
    }
  },
  {
    "title": "Cadena de certificados",
    "description": "El archivo debe incluir intermediarios en el orden correcto para que el cliente construya una ruta de confianza.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Cadena de certificados",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "cadena de certificados",
      "caption": "El archivo debe incluir intermediarios en el orden correcto para que el cliente construya una ruta de confianza."
    }
  },
  {
    "title": "SNI con múltiples certificados",
    "description": "El nombre enviado en el ClientHello permite elegir certificado antes de recibir headers HTTP.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "SNI con múltiples certificados",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "sni con múltiples certificados",
      "caption": "El nombre enviado en el ClientHello permite elegir certificado antes de recibir headers HTTP."
    }
  },
  {
    "title": "TLS 1.2 y TLS 1.3",
    "description": "ssl_protocols restringe versiones admitidas según compatibilidad y política de seguridad.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "TLS 1.2 y TLS 1.3",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "tls 1.2 y tls 1.3",
      "caption": "ssl_protocols restringe versiones admitidas según compatibilidad y política de seguridad."
    }
  },
  {
    "title": "Cipher suites",
    "description": "La selección depende de versión TLS y biblioteca criptográfica; debe evaluarse con clientes reales y política vigente.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "Cipher suites",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "cipher suites",
      "caption": "La selección depende de versión TLS y biblioteca criptográfica; debe evaluarse con clientes reales y política vigente."
    }
  },
  {
    "title": "Session cache",
    "description": "Reutiliza parámetros de sesiones TLS para reducir CPU y round trips en reconexiones.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Session cache",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "session cache",
      "caption": "Reutiliza parámetros de sesiones TLS para reducir CPU y round trips en reconexiones."
    }
  },
  {
    "title": "Session tickets",
    "description": "Permiten reanudación sin estado compartido, pero requieren rotación coordinada de claves para limitar exposición.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "aislamiento sobre host",
    "layout": "compact",
    "scene": {
      "variant": "container",
      "code": "Session tickets",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "session tickets",
      "caption": "Permiten reanudación sin estado compartido, pero requieren rotación coordinada de claves para limitar exposición."
    }
  },
  {
    "title": "OCSP stapling",
    "description": "NGINX puede adjuntar una respuesta de revocación obtenida del responder para ahorrar una consulta al cliente.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "OCSP stapling",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "ocsp stapling",
      "caption": "NGINX puede adjuntar una respuesta de revocación obtenida del responder para ahorrar una consulta al cliente."
    }
  },
  {
    "title": "HSTS",
    "description": "Strict-Transport-Security ordena al navegador usar HTTPS durante un periodo; una política incorrecta puede bloquear acceso legítimo.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "HSTS",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "hsts",
      "caption": "Strict-Transport-Security ordena al navegador usar HTTPS durante un periodo; una política incorrecta puede bloquear acceso legítimo."
    }
  },
  {
    "title": "Redirect HTTP a HTTPS",
    "description": "Un server dedicado puede responder 301 o 308 sin mezclar lógica segura e insegura.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Redirect HTTP a HTTPS",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "redirect http a https",
      "caption": "Un server dedicado puede responder 301 o 308 sin mezclar lógica segura e insegura."
    }
  },
  {
    "title": "HTTP/2",
    "description": "Multiplexa streams sobre una conexión, comprime headers y requiere TLS en navegadores habituales.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "HTTP/2",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "http/2",
      "caption": "Multiplexa streams sobre una conexión, comprime headers y requiere TLS en navegadores habituales."
    }
  },
  {
    "title": "HTTP/3 y QUIC",
    "description": "Usa QUIC sobre UDP, evita head-of-line entre streams y requiere módulo, build y parámetros listen compatibles.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "HTTP/3 y QUIC",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "http/3 y quic",
      "caption": "Usa QUIC sobre UDP, evita head-of-line entre streams y requiere módulo, build y parámetros listen compatibles."
    }
  },
  {
    "title": "ALPN",
    "description": "Negocia el protocolo de aplicación como h2 o http/1.1 durante el handshake TLS.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "ALPN",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "alpn",
      "caption": "Negocia el protocolo de aplicación como h2 o http/1.1 durante el handshake TLS."
    }
  },
  {
    "title": "0-RTT",
    "description": "Puede reducir latencia en QUIC/TLS 1.3, pero el early data es reproducible y no debe ejecutar operaciones no idempotentes sin protección.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "0-RTT",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "0-rtt",
      "caption": "Puede reducir latencia en QUIC/TLS 1.3, pero el early data es reproducible y no debe ejecutar operaciones no idempotentes sin protección."
    }
  },
  {
    "title": "mTLS",
    "description": "ssl_verify_client exige un certificado de cliente emitido por una CA confiable y expone atributos para autorización.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "mTLS",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "mtls",
      "caption": "ssl_verify_client exige un certificado de cliente emitido por una CA confiable y expone atributos para autorización."
    }
  },
  {
    "title": "Verificación TLS upstream",
    "description": "Activar proxy_ssl_verify evita aceptar cualquier certificado presentado por el backend.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Verificación TLS upstream",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "verificación tls upstream",
      "caption": "Activar proxy_ssl_verify evita aceptar cualquier certificado presentado por el backend."
    }
  },
  {
    "title": "Security headers",
    "description": "NGINX puede aplicar HSTS, CSP, frame, referrer y permissions policies de forma centralizada con herencia consciente.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "Security headers",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "security headers",
      "caption": "NGINX puede aplicar HSTS, CSP, frame, referrer y permissions policies de forma centralizada con herencia consciente."
    }
  },
  {
    "title": "Content Security Policy",
    "description": "CSP limita orígenes de scripts y recursos; debe diseñarse con nonces, hashes y reportes según la aplicación.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Content Security Policy",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "content security policy",
      "caption": "CSP limita orígenes de scripts y recursos; debe diseñarse con nonces, hashes y reportes según la aplicación."
    }
  },
  {
    "title": "Clickjacking protection",
    "description": "frame-ancestors en CSP o X-Frame-Options restringen qué sitios pueden embeber una respuesta.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "Clickjacking protection",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "clickjacking protection",
      "caption": "frame-ancestors en CSP o X-Frame-Options restringen qué sitios pueden embeber una respuesta."
    }
  },
  {
    "title": "server_tokens",
    "description": "Reduce información de versión en headers y páginas de error, sin reemplazar patching ni hardening real.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "server_tokens",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "servertokens",
      "caption": "Reduce información de versión en headers y páginas de error, sin reemplazar patching ni hardening real."
    }
  },
  {
    "title": "auth_basic",
    "description": "Protege locations mediante usuario y hash de contraseña, apropiado para fronteras simples y TLS obligatorio.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "auth_basic",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "authbasic",
      "caption": "Protege locations mediante usuario y hash de contraseña, apropiado para fronteras simples y TLS obligatorio."
    }
  },
  {
    "title": "allow y deny",
    "description": "Filtran direcciones en orden; detrás de proxies dependen de restaurar primero la IP de cliente confiable.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "allow y deny",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "allow y deny",
      "caption": "Filtran direcciones en orden; detrás de proxies dependen de restaurar primero la IP de cliente confiable."
    }
  },
  {
    "title": "satisfy",
    "description": "Combina controles de acceso permitiendo exigir todos o aceptar cualquiera según la directiva.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "satisfy",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "satisfy",
      "caption": "Combina controles de acceso permitiendo exigir todos o aceptar cualquiera según la directiva."
    }
  },
  {
    "title": "Autorización externa",
    "description": "auth_request delega identidad y permisos a un servicio sin entregar automáticamente el body principal.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "Autorización externa",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "autorización externa",
      "caption": "auth_request delega identidad y permisos a un servicio sin entregar automáticamente el body principal."
    }
  },
  {
    "title": "JWT en NGINX Plus",
    "description": "El módulo auth_jwt valida tokens y claims en NGINX Plus; Open Source suele delegar o usar módulos externos.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "JWT en NGINX Plus",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "jwt en nginx plus",
      "caption": "El módulo auth_jwt valida tokens y claims en NGINX Plus; Open Source suele delegar o usar módulos externos."
    }
  },
  {
    "title": "Rate limiting como control de abuso",
    "description": "limit_req amortigua ráfagas por clave, pero no sustituye cuotas de negocio ni defensa distribuida.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "Rate limiting como control de abuso",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "rate limiting como control de abus",
      "caption": "limit_req amortigua ráfagas por clave, pero no sustituye cuotas de negocio ni defensa distribuida."
    }
  },
  {
    "title": "Restricción de métodos",
    "description": "limit_except o routing explícito pueden limitar operaciones, teniendo en cuenta métodos implícitos y CORS.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "Restricción de métodos",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "restricción de métodos",
      "caption": "limit_except o routing explícito pueden limitar operaciones, teniendo en cuenta métodos implícitos y CORS."
    }
  },
  {
    "title": "Permisos de claves privadas",
    "description": "La clave TLS debe ser legible para el proceso que la carga y estar protegida frente a otros usuarios y backups inseguros.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "Permisos de claves privadas",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "permisos de claves privadas",
      "caption": "La clave TLS debe ser legible para el proceso que la carga y estar protegida frente a otros usuarios y backups inseguros."
    }
  },
  {
    "title": "Rotación de certificados",
    "description": "Actualizar archivos y ejecutar un reload graceful permite que conexiones nuevas usen el material renovado.",
    "section": "TLS, HTTP/2, HTTP/3 y seguridad",
    "family": "configuración declarativa",
    "layout": "compact",
    "scene": {
      "variant": "document",
      "code": "Rotación de certificados",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "rotación de certificados",
      "caption": "Actualizar archivos y ejecutar un reload graceful permite que conexiones nuevas usen el material renovado."
    }
  },
  {
    "title": "Proxy cache",
    "description": "Almacena respuestas upstream reutilizables para reducir latencia y trabajo del backend.",
    "section": "Caché, compresión y rendimiento",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Proxy cache",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxy cache",
      "caption": "Almacena respuestas upstream reutilizables para reducir latencia y trabajo del backend."
    }
  },
  {
    "title": "proxy_cache_path",
    "description": "Define path, levels, shared memory keys_zone, tamaño máximo, inactividad y procesos manager/loader.",
    "section": "Caché, compresión y rendimiento",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "proxy_cache_path",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxycachepath",
      "caption": "Define path, levels, shared memory keys_zone, tamaño máximo, inactividad y procesos manager/loader."
    }
  },
  {
    "title": "keys_zone",
    "description": "Conserva metadata y claves en memoria compartida; el cuerpo normalmente permanece en archivos de caché.",
    "section": "Caché, compresión y rendimiento",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "keys_zone",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "keyszone",
      "caption": "Conserva metadata y claves en memoria compartida; el cuerpo normalmente permanece en archivos de caché."
    }
  },
  {
    "title": "Cache key",
    "description": "Determina qué peticiones comparten una entrada y debe incluir variantes relevantes como host, URI, argumentos o headers.",
    "section": "Caché, compresión y rendimiento",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Cache key",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "cache key",
      "caption": "Determina qué peticiones comparten una entrada y debe incluir variantes relevantes como host, URI, argumentos o headers."
    }
  },
  {
    "title": "Cache status",
    "description": "$upstream_cache_status diferencia MISS, HIT, BYPASS, EXPIRED, STALE, UPDATING o REVALIDATED.",
    "section": "Caché, compresión y rendimiento",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Cache status",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "cache status",
      "caption": "$upstream_cache_status diferencia MISS, HIT, BYPASS, EXPIRED, STALE, UPDATING o REVALIDATED."
    }
  },
  {
    "title": "proxy_cache_valid",
    "description": "Asigna TTL por código cuando la respuesta no aporta o no se desea usar otra política de frescura.",
    "section": "Caché, compresión y rendimiento",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "proxy_cache_valid",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxycachevalid",
      "caption": "Asigna TTL por código cuando la respuesta no aporta o no se desea usar otra política de frescura."
    }
  },
  {
    "title": "Cache-Control y Expires upstream",
    "description": "NGINX interpreta headers de caché salvo que la configuración los ignore o sobrescriba deliberadamente.",
    "section": "Caché, compresión y rendimiento",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Cache-Control y Expires upstream",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "cache-control y expires upstream",
      "caption": "NGINX interpreta headers de caché salvo que la configuración los ignore o sobrescriba deliberadamente."
    }
  },
  {
    "title": "Vary",
    "description": "Una respuesta que varía por header requiere claves o metadata compatibles para no servir una representación incorrecta.",
    "section": "Caché, compresión y rendimiento",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Vary",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "vary",
      "caption": "Una respuesta que varía por header requiere claves o metadata compatibles para no servir una representación incorrecta."
    }
  },
  {
    "title": "Set-Cookie y caché",
    "description": "Respuestas personalizadas suelen evitarse en caché; ignorar Set-Cookie sin diseñar la clave puede filtrar datos entre usuarios.",
    "section": "Caché, compresión y rendimiento",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "Set-Cookie y caché",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "set-cookie y caché",
      "caption": "Respuestas personalizadas suelen evitarse en caché; ignorar Set-Cookie sin diseñar la clave puede filtrar datos entre usuarios."
    }
  },
  {
    "title": "proxy_cache_bypass",
    "description": "Decide no leer una entrada existente cuando una condición, cookie o header lo exige.",
    "section": "Caché, compresión y rendimiento",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "proxy_cache_bypass",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxycachebypass",
      "caption": "Decide no leer una entrada existente cuando una condición, cookie o header lo exige."
    }
  },
  {
    "title": "proxy_no_cache",
    "description": "Decide no guardar la respuesta obtenida aunque la petición haya pasado por el cache lookup.",
    "section": "Caché, compresión y rendimiento",
    "family": "ida y vuelta",
    "layout": "compact",
    "scene": {
      "variant": "request",
      "code": "proxy_no_cache",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "proxynocache",
      "caption": "Decide no guardar la respuesta obtenida aunque la petición haya pasado por el cache lookup."
    }
  },
  {
    "title": "Serving stale",
    "description": "Puede servir una copia vencida durante error, timeout, actualización o códigos concretos para proteger disponibilidad.",
    "section": "Caché, compresión y rendimiento",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Serving stale",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "serving stale",
      "caption": "Puede servir una copia vencida durante error, timeout, actualización o códigos concretos para proteger disponibilidad."
    }
  },
  {
    "title": "Cache lock",
    "description": "Solo una petición rellena una clave vencida o ausente mientras las demás esperan, reduciendo stampede.",
    "section": "Caché, compresión y rendimiento",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "Cache lock",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "cache lock",
      "caption": "Solo una petición rellena una clave vencida o ausente mientras las demás esperan, reduciendo stampede."
    }
  },
  {
    "title": "Background update",
    "description": "Sirve stale y actualiza la entrada en background para desacoplar latencia del cliente.",
    "section": "Caché, compresión y rendimiento",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "Background update",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "background update",
      "caption": "Sirve stale y actualiza la entrada en background para desacoplar latencia del cliente."
    }
  },
  {
    "title": "Revalidation",
    "description": "Usa ETag o Last-Modified con el upstream para renovar metadata sin descargar de nuevo un cuerpo sin cambios.",
    "section": "Caché, compresión y rendimiento",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "Revalidation",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "revalidation",
      "caption": "Usa ETag o Last-Modified con el upstream para renovar metadata sin descargar de nuevo un cuerpo sin cambios."
    }
  },
  {
    "title": "Microcaching",
    "description": "TTL de segundos puede absorber picos de contenido dinámico público sin convertirlo en caché de larga duración.",
    "section": "Caché, compresión y rendimiento",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "Microcaching",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "microcaching",
      "caption": "TTL de segundos puede absorber picos de contenido dinámico público sin convertirlo en caché de larga duración."
    }
  },
  {
    "title": "Cache manager y loader",
    "description": "Procesos especiales cargan metadata y eliminan entradas para respetar inactividad y max_size sin bloquear workers.",
    "section": "Caché, compresión y rendimiento",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Cache manager y loader",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "cache manager y loader",
      "caption": "Procesos especiales cargan metadata y eliminan entradas para respetar inactividad y max_size sin bloquear workers."
    }
  },
  {
    "title": "Cache purge",
    "description": "NGINX Plus ofrece purge nativo; en Open Source requiere arquitectura alternativa o módulos adicionales cuidadosamente evaluados.",
    "section": "Caché, compresión y rendimiento",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Cache purge",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "cache purge",
      "caption": "NGINX Plus ofrece purge nativo; en Open Source requiere arquitectura alternativa o módulos adicionales cuidadosamente evaluados."
    }
  },
  {
    "title": "gzip",
    "description": "Comprime tipos configurados cuando el ahorro supera el costo y el cliente anuncia soporte.",
    "section": "Caché, compresión y rendimiento",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "gzip",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "gzip",
      "caption": "Comprime tipos configurados cuando el ahorro supera el costo y el cliente anuncia soporte."
    }
  },
  {
    "title": "gzip_proxied",
    "description": "Controla cuándo comprimir respuestas a clientes detectados detrás de proxies según headers y política.",
    "section": "Caché, compresión y rendimiento",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "gzip_proxied",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "gzipproxied",
      "caption": "Controla cuándo comprimir respuestas a clientes detectados detrás de proxies según headers y política."
    }
  },
  {
    "title": "gzip_vary",
    "description": "Añade Vary: Accept-Encoding para que caches separen versiones comprimidas y sin comprimir.",
    "section": "Caché, compresión y rendimiento",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "gzip_vary",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "gzipvary",
      "caption": "Añade Vary: Accept-Encoding para que caches separen versiones comprimidas y sin comprimir."
    }
  },
  {
    "title": "Nivel de compresión",
    "description": "gzip_comp_level intercambia CPU por tamaño; el óptimo depende del contenido, tráfico y hardware.",
    "section": "Caché, compresión y rendimiento",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "Nivel de compresión",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "nivel de compresión",
      "caption": "gzip_comp_level intercambia CPU por tamaño; el óptimo depende del contenido, tráfico y hardware."
    }
  },
  {
    "title": "Keep-alive del cliente",
    "description": "keepalive_timeout y keepalive_requests limitan cuánto se reutiliza una conexión antes de cerrarla.",
    "section": "Caché, compresión y rendimiento",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "Keep-alive del cliente",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "keep-alive del cliente",
      "caption": "keepalive_timeout y keepalive_requests limitan cuánto se reutiliza una conexión antes de cerrarla."
    }
  },
  {
    "title": "Límites de file descriptors",
    "description": "worker_rlimit_nofile y límites del sistema deben cubrir sockets cliente, upstream, logs, archivos y caché.",
    "section": "Caché, compresión y rendimiento",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "Límites de file descriptors",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "límites de file descriptors",
      "caption": "worker_rlimit_nofile y límites del sistema deben cubrir sockets cliente, upstream, logs, archivos y caché."
    }
  },
  {
    "title": "client_header_buffer_size",
    "description": "Dimensiona lectura de headers comunes; buffers grandes adicionales cubren líneas excepcionales.",
    "section": "Caché, compresión y rendimiento",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "client_header_buffer_size",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "clientheaderbuffersize",
      "caption": "Dimensiona lectura de headers comunes; buffers grandes adicionales cubren líneas excepcionales."
    }
  },
  {
    "title": "large_client_header_buffers",
    "description": "Evita aceptar headers ilimitados y determina cuándo devolver 400 o 414 por líneas demasiado grandes.",
    "section": "Caché, compresión y rendimiento",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "large_client_header_buffers",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "largeclientheaderbuffers",
      "caption": "Evita aceptar headers ilimitados y determina cuándo devolver 400 o 414 por líneas demasiado grandes."
    }
  },
  {
    "title": "client_body_buffer_size",
    "description": "Define cuánto body se mantiene en memoria antes de escribir un archivo temporal.",
    "section": "Caché, compresión y rendimiento",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "client_body_buffer_size",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "clientbodybuffersize",
      "caption": "Define cuánto body se mantiene en memoria antes de escribir un archivo temporal."
    }
  },
  {
    "title": "Streaming de respuestas",
    "description": "Desactivar buffering reduce latencia progresiva, pero acopla al upstream con clientes lentos.",
    "section": "Caché, compresión y rendimiento",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Streaming de respuestas",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "streaming de respuestas",
      "caption": "Desactivar buffering reduce latencia progresiva, pero acopla al upstream con clientes lentos."
    }
  },
  {
    "title": "Benchmark representativo",
    "description": "Debe medir TLS, tamaños, keepalive, cache hit ratio, concurrencia y upstream real; un hello world no predice producción.",
    "section": "Caché, compresión y rendimiento",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "Benchmark representativo",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "benchmark representativo",
      "caption": "Debe medir TLS, tamaños, keepalive, cache hit ratio, concurrencia y upstream real; un hello world no predice producción."
    }
  },
  {
    "title": "Capacity planning",
    "description": "Relaciona conexiones, RPS, ancho de banda, CPU, memoria, disco, TLS y margen de fallo por instancia.",
    "section": "Caché, compresión y rendimiento",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "Capacity planning",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "capacity planning",
      "caption": "Relaciona conexiones, RPS, ancho de banda, CPU, memoria, disco, TLS y margen de fallo por instancia."
    }
  },
  {
    "title": "return antes que rewrite",
    "description": "Para redirects o respuestas constantes, return suele ser más directo y predecible que una regex.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "return antes que rewrite",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "return antes que rewrite",
      "caption": "Para redirects o respuestas constantes, return suele ser más directo y predecible que una regex."
    }
  },
  {
    "title": "Capturas de regex",
    "description": "Variables posicionales o nombradas transportan fragmentos capturados, pero pueden cambiar por evaluaciones regex posteriores.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "Capturas de regex",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "capturas de regex",
      "caption": "Variables posicionales o nombradas transportan fragmentos capturados, pero pueden cambiar por evaluaciones regex posteriores."
    }
  },
  {
    "title": "map en lugar de if",
    "description": "map expresa decisiones derivadas de headers, métodos o hosts en contexto http y evita lógica imperativa dispersa.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "configuración declarativa",
    "layout": "compact",
    "scene": {
      "variant": "document",
      "code": "map en lugar de if",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "map en lugar de if",
      "caption": "map expresa decisiones derivadas de headers, métodos o hosts en contexto http y evita lógica imperativa dispersa."
    }
  },
  {
    "title": "Uso seguro de if",
    "description": "Dentro de location, return y rewrite son usos comunes; directivas de contenido complejas pueden producir comportamiento inesperado.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "Uso seguro de if",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "uso seguro de if",
      "caption": "Dentro de location, return y rewrite son usos comunes; directivas de contenido complejas pueden producir comportamiento inesperado."
    }
  },
  {
    "title": "URLs canónicas",
    "description": "Redirects coherentes para esquema, host y barra final evitan duplicados y bucles entre proxies.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "URLs canónicas",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "urls canónicas",
      "caption": "Redirects coherentes para esquema, host y barra final evitan duplicados y bucles entre proxies."
    }
  },
  {
    "title": "Argumentos de query",
    "description": "$arg_name y $args permiten routing o caché, distinguiendo ausencia, vacío y múltiples valores.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "Argumentos de query",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "argumentos de query",
      "caption": "$arg_name y $args permiten routing o caché, distinguiendo ausencia, vacío y múltiples valores."
    }
  },
  {
    "title": "split_clients",
    "description": "Divide tráfico de forma determinista por una clave para experimentos, canaries o distribución gradual.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "split_clients",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "splitclients",
      "caption": "Divide tráfico de forma determinista por una clave para experimentos, canaries o distribución gradual."
    }
  },
  {
    "title": "geo",
    "description": "Crea variables según rangos IP y puede incluir archivos para políticas extensas.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "geo",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "geo",
      "caption": "Crea variables según rangos IP y puede incluir archivos para políticas extensas."
    }
  },
  {
    "title": "Modo mantenimiento",
    "description": "map, try_files o una flag pueden desviar tráfico a una página estática conservando endpoints de salud necesarios.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Modo mantenimiento",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "modo mantenimiento",
      "caption": "map, try_files o una flag pueden desviar tráfico a una página estática conservando endpoints de salud necesarios."
    }
  },
  {
    "title": "Routing blue-green",
    "description": "Una variable, cookie o header puede elegir upstream stable o candidate sin reconstruir la aplicación.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Routing blue-green",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "routing blue-green",
      "caption": "Una variable, cookie o header puede elegir upstream stable o candidate sin reconstruir la aplicación."
    }
  },
  {
    "title": "limit_req_zone",
    "description": "Reserva estado compartido y define tasa por una clave como IP, token, tenant o endpoint.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "limit_req_zone",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "limitreqzone",
      "caption": "Reserva estado compartido y define tasa por una clave como IP, token, tenant o endpoint."
    }
  },
  {
    "title": "Leaky bucket",
    "description": "limit_req modela una tasa promedio y administra exceso mediante espera o rechazo.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "Leaky bucket",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "leaky bucket",
      "caption": "limit_req modela una tasa promedio y administra exceso mediante espera o rechazo."
    }
  },
  {
    "title": "burst",
    "description": "Permite una cola temporal de solicitudes excedentes antes de aplicar rechazo.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "burst",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "burst",
      "caption": "Permite una cola temporal de solicitudes excedentes antes de aplicar rechazo."
    }
  },
  {
    "title": "nodelay",
    "description": "Acepta de inmediato el burst permitido, aunque el presupuesto de tasa siga contabilizándose internamente.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "nodelay",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "nodelay",
      "caption": "Acepta de inmediato el burst permitido, aunque el presupuesto de tasa siga contabilizándose internamente."
    }
  },
  {
    "title": "limit_req_dry_run",
    "description": "Mide qué habría sido limitado sin aplicar el rechazo para calibrar claves y tasas.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "limit_req_dry_run",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "limitreqdryrun",
      "caption": "Mide qué habría sido limitado sin aplicar el rechazo para calibrar claves y tasas."
    }
  },
  {
    "title": "limit_conn_zone",
    "description": "Cuenta conexiones por clave en memoria compartida y prepara límites simultáneos.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "limit_conn_zone",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "limitconnzone",
      "caption": "Cuenta conexiones por clave en memoria compartida y prepara límites simultáneos."
    }
  },
  {
    "title": "limit_conn",
    "description": "Restringe conexiones concurrentes, no peticiones por segundo; HTTP/2 requiere interpretar streams y conexiones con cuidado.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "limit_conn",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "limitconn",
      "caption": "Restringe conexiones concurrentes, no peticiones por segundo; HTTP/2 requiere interpretar streams y conexiones con cuidado."
    }
  },
  {
    "title": "Código de rechazo",
    "description": "limit_req_status y limit_conn_status permiten devolver un estado coherente con el contrato, como 429.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "Código de rechazo",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "código de rechazo",
      "caption": "limit_req_status y limit_conn_status permiten devolver un estado coherente con el contrato, como 429."
    }
  },
  {
    "title": "Whitelist de límites",
    "description": "map puede producir una clave vacía para excluir health checks, redes internas o clientes autorizados.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "Whitelist de límites",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "whitelist de límites",
      "caption": "map puede producir una clave vacía para excluir health checks, redes internas o clientes autorizados."
    }
  },
  {
    "title": "CORS",
    "description": "add_header always y una respuesta explícita a OPTIONS deben reflejar orígenes, métodos, headers y credenciales válidos.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "CORS",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "cors",
      "caption": "add_header always y una respuesta explícita a OPTIONS deben reflejar orígenes, métodos, headers y credenciales válidos."
    }
  },
  {
    "title": "Preflight",
    "description": "El navegador envía OPTIONS antes de ciertas peticiones; NGINX puede responderlo o delegarlo sin ocultar políticas de la aplicación.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Preflight",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "preflight",
      "caption": "El navegador envía OPTIONS antes de ciertas peticiones; NGINX puede responderlo o delegarlo sin ocultar políticas de la aplicación."
    }
  },
  {
    "title": "Hotlink protection",
    "description": "valid_referers puede reducir embedding casual, pero Referer es opcional y no es un control de autorización fuerte.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "Hotlink protection",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "hotlink protection",
      "caption": "valid_referers puede reducir embedding casual, pero Referer es opcional y no es un control de autorización fuerte."
    }
  },
  {
    "title": "Límites por tenant",
    "description": "Una clave basada en identidad evita que muchos usuarios detrás de la misma IP compartan injustamente un presupuesto.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "Límites por tenant",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "límites por tenant",
      "caption": "Una clave basada en identidad evita que muchos usuarios detrás de la misma IP compartan injustamente un presupuesto."
    }
  },
  {
    "title": "Defensa por capas",
    "description": "Rate limits, timeouts, WAF, quotas de negocio y protección upstream controlan tipos de abuso diferentes.",
    "section": "Routing, acceso y límites de tráfico",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "Defensa por capas",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "defensa por capas",
      "caption": "Rate limits, timeouts, WAF, quotas de negocio y protección upstream controlan tipos de abuso diferentes."
    }
  },
  {
    "title": "Contexto stream",
    "description": "Configura proxy y balanceo de conexiones TCP o datagramas UDP fuera del módulo HTTP.",
    "section": "Protocolos, stream y gateways",
    "family": "cola y consumidor",
    "layout": "compact",
    "scene": {
      "variant": "queue",
      "code": "Contexto stream",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "contexto stream",
      "caption": "Configura proxy y balanceo de conexiones TCP o datagramas UDP fuera del módulo HTTP."
    }
  },
  {
    "title": "TCP proxy",
    "description": "Mantiene un flujo bidireccional entre cliente y upstream para bases de datos, TLS u otros protocolos.",
    "section": "Protocolos, stream y gateways",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "TCP proxy",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "tcp proxy",
      "caption": "Mantiene un flujo bidireccional entre cliente y upstream para bases de datos, TLS u otros protocolos."
    }
  },
  {
    "title": "UDP proxy",
    "description": "Asocia datagramas y respuestas con sesiones lógicas según timeout, útil para DNS, syslog o RADIUS.",
    "section": "Protocolos, stream y gateways",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "UDP proxy",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "udp proxy",
      "caption": "Asocia datagramas y respuestas con sesiones lógicas según timeout, útil para DNS, syslog o RADIUS."
    }
  },
  {
    "title": "Upstreams en stream",
    "description": "Reutilizan grupos, pesos, health pasivo, keepalive y algoritmos compatibles para tráfico L4.",
    "section": "Protocolos, stream y gateways",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Upstreams en stream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "upstreams en stream",
      "caption": "Reutilizan grupos, pesos, health pasivo, keepalive y algoritmos compatibles para tráfico L4."
    }
  },
  {
    "title": "PROXY protocol",
    "description": "Transporta dirección original entre balanceadores y proxies antes de los bytes del protocolo de aplicación.",
    "section": "Protocolos, stream y gateways",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "PROXY protocol",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "proxy protocol",
      "caption": "Transporta dirección original entre balanceadores y proxies antes de los bytes del protocolo de aplicación."
    }
  },
  {
    "title": "Aceptación de PROXY protocol",
    "description": "listen proxy_protocol exige que el peer confiable envíe el encabezado correcto; clientes directos fallarán.",
    "section": "Protocolos, stream y gateways",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Aceptación de PROXY protocol",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "aceptación de proxy protocol",
      "caption": "listen proxy_protocol exige que el peer confiable envíe el encabezado correcto; clientes directos fallarán."
    }
  },
  {
    "title": "ssl_preread",
    "description": "Inspecciona ClientHello sin terminar TLS para obtener SNI o ALPN y seleccionar un upstream.",
    "section": "Protocolos, stream y gateways",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "ssl_preread",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "sslpreread",
      "caption": "Inspecciona ClientHello sin terminar TLS para obtener SNI o ALPN y seleccionar un upstream."
    }
  },
  {
    "title": "TLS passthrough",
    "description": "NGINX enruta bytes cifrados y el backend termina TLS, conservando end-to-end encryption pero perdiendo visibilidad HTTP.",
    "section": "Protocolos, stream y gateways",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "TLS passthrough",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "tls passthrough",
      "caption": "NGINX enruta bytes cifrados y el backend termina TLS, conservando end-to-end encryption pero perdiendo visibilidad HTTP."
    }
  },
  {
    "title": "SNI routing en stream",
    "description": "map sobre $ssl_preread_server_name puede dirigir dominios a pools distintos sin descifrar contenido.",
    "section": "Protocolos, stream y gateways",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "SNI routing en stream",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "sni routing en stream",
      "caption": "map sobre $ssl_preread_server_name puede dirigir dominios a pools distintos sin descifrar contenido."
    }
  },
  {
    "title": "TCP timeouts",
    "description": "proxy_connect_timeout y proxy_timeout limitan establecimiento e inactividad de sesiones stream.",
    "section": "Protocolos, stream y gateways",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "TCP timeouts",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "tcp timeouts",
      "caption": "proxy_connect_timeout y proxy_timeout limitan establecimiento e inactividad de sesiones stream."
    }
  },
  {
    "title": "gRPC gateway",
    "description": "NGINX puede terminar TLS, aplicar routing y pasar llamadas gRPC a servicios HTTP/2.",
    "section": "Protocolos, stream y gateways",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "gRPC gateway",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "grpc gateway",
      "caption": "NGINX puede terminar TLS, aplicar routing y pasar llamadas gRPC a servicios HTTP/2."
    }
  },
  {
    "title": "WebSocket gateway",
    "description": "Después del upgrade, NGINX mantiene un túnel bidireccional sujeto a timeouts y cierre de ambos extremos.",
    "section": "Protocolos, stream y gateways",
    "family": "validación y decisión",
    "layout": "compact",
    "scene": {
      "variant": "gate",
      "code": "WebSocket gateway",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "websocket gateway",
      "caption": "Después del upgrade, NGINX mantiene un túnel bidireccional sujeto a timeouts y cierre de ambos extremos."
    }
  },
  {
    "title": "FastCGI gateway",
    "description": "Traduce HTTP a registros FastCGI y construye parámetros CGI consumidos por PHP-FPM u otros servidores.",
    "section": "Protocolos, stream y gateways",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "FastCGI gateway",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "fastcgi gateway",
      "caption": "Traduce HTTP a registros FastCGI y construye parámetros CGI consumidos por PHP-FPM u otros servidores."
    }
  },
  {
    "title": "memcached_pass",
    "description": "Consulta memcached usando una clave derivada y devuelve el valor como respuesta HTTP con error_page de fallback.",
    "section": "Protocolos, stream y gateways",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "memcached_pass",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "memcachedpass",
      "caption": "Consulta memcached usando una clave derivada y devuelve el valor como respuesta HTTP con error_page de fallback."
    }
  },
  {
    "title": "Mail proxy",
    "description": "El contexto mail puede proxyear IMAP, POP3 y SMTP y delegar autenticación a un servicio HTTP.",
    "section": "Protocolos, stream y gateways",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "Mail proxy",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "mail proxy",
      "caption": "El contexto mail puede proxyear IMAP, POP3 y SMTP y delegar autenticación a un servicio HTTP."
    }
  },
  {
    "title": "auth_http para mail",
    "description": "NGINX consulta un endpoint que decide backend, usuario y resultado antes de abrir la sesión de correo.",
    "section": "Protocolos, stream y gateways",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "auth_http para mail",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "authhttp para mail",
      "caption": "NGINX consulta un endpoint que decide backend, usuario y resultado antes de abrir la sesión de correo."
    }
  },
  {
    "title": "njs",
    "description": "Extiende NGINX con JavaScript para lógica de request, variables, subrequests y filtros sin convertirlo en una aplicación general.",
    "section": "Protocolos, stream y gateways",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "njs",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "njs",
      "caption": "Extiende NGINX con JavaScript para lógica de request, variables, subrequests y filtros sin convertirlo en una aplicación general."
    }
  },
  {
    "title": "Subrequests",
    "description": "Módulos como auth_request, SSI, mirror o njs crean peticiones internas relacionadas con la principal.",
    "section": "Protocolos, stream y gateways",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "Subrequests",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "subrequests",
      "caption": "Módulos como auth_request, SSI, mirror o njs crean peticiones internas relacionadas con la principal."
    }
  },
  {
    "title": "API gateway",
    "description": "Combina TLS, routing, auth, límites, transformación limitada y observabilidad frente a varios servicios.",
    "section": "Protocolos, stream y gateways",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "API gateway",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "api gateway",
      "caption": "Combina TLS, routing, auth, límites, transformación limitada y observabilidad frente a varios servicios."
    }
  },
  {
    "title": "BFF y edge routing",
    "description": "NGINX puede presentar una frontera por cliente, pero la composición de dominio compleja suele pertenecer a una aplicación BFF.",
    "section": "Protocolos, stream y gateways",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "BFF y edge routing",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "bff y edge routing",
      "caption": "NGINX puede presentar una frontera por cliente, pero la composición de dominio compleja suele pertenecer a una aplicación BFF."
    }
  },
  {
    "title": "Protocol translation",
    "description": "Los módulos proxy, FastCGI, uwsgi, SCGI, gRPC y memcached conectan HTTP con protocolos backend específicos.",
    "section": "Protocolos, stream y gateways",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "Protocol translation",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "protocol translation",
      "caption": "Los módulos proxy, FastCGI, uwsgi, SCGI, gRPC y memcached conectan HTTP con protocolos backend específicos."
    }
  },
  {
    "title": "L4 frente a L7",
    "description": "stream decide con datos de transporte; http comprende método, host, URI, headers y códigos para políticas más ricas.",
    "section": "Protocolos, stream y gateways",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "L4 frente a L7",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "l4 frente a l7",
      "caption": "stream decide con datos de transporte; http comprende método, host, URI, headers y códigos para políticas más ricas."
    }
  },
  {
    "title": "access_log",
    "description": "Registra una línea por petición al finalizar la fase de logging y puede tener múltiples destinos o buffering.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "access_log",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "accesslog",
      "caption": "Registra una línea por petición al finalizar la fase de logging y puede tener múltiples destinos o buffering."
    }
  },
  {
    "title": "log_format",
    "description": "Define campos y escaping; un formato JSON facilita ingestión si todos los valores se codifican correctamente.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "log_format",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "logformat",
      "caption": "Define campos y escaping; un formato JSON facilita ingestión si todos los valores se codifican correctamente."
    }
  },
  {
    "title": "Request ID",
    "description": "$request_id puede correlacionar cliente, NGINX y upstream cuando se reenvía y registra de manera consistente.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "Request ID",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "request id",
      "caption": "$request_id puede correlacionar cliente, NGINX y upstream cuando se reenvía y registra de manera consistente."
    }
  },
  {
    "title": "Tiempos upstream",
    "description": "$upstream_connect_time, header_time y response_time separan conexión, primer byte y respuesta completa.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Tiempos upstream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "tiempos upstream",
      "caption": "$upstream_connect_time, header_time y response_time separan conexión, primer byte y respuesta completa."
    }
  },
  {
    "title": "Múltiples intentos upstream",
    "description": "Variables upstream pueden contener listas separadas por comas cuando hubo retries; el log debe conservar esa historia.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "Múltiples intentos upstream",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "múltiples intentos upstream",
      "caption": "Variables upstream pueden contener listas separadas por comas cuando hubo retries; el log debe conservar esa historia."
    }
  },
  {
    "title": "request_time",
    "description": "Mide desde lectura inicial hasta escritura del log, incluyendo cliente lento, buffering y upstream.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "request_time",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "requesttime",
      "caption": "Mide desde lectura inicial hasta escritura del log, incluyendo cliente lento, buffering y upstream."
    }
  },
  {
    "title": "Bytes enviados",
    "description": "$body_bytes_sent excluye headers; $bytes_sent incluye el total transferido al cliente.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "Bytes enviados",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "bytes enviados",
      "caption": "$body_bytes_sent excluye headers; $bytes_sent incluye el total transferido al cliente."
    }
  },
  {
    "title": "Status 499",
    "description": "NGINX registra 499 cuando el cliente cierra antes de completar la respuesta; la causa puede estar en UX, red o latencia upstream.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "Status 499",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "status 499",
      "caption": "NGINX registra 499 cuando el cliente cierra antes de completar la respuesta; la causa puede estar en UX, red o latencia upstream."
    }
  },
  {
    "title": "Status 502",
    "description": "Indica que el gateway recibió una respuesta inválida o no pudo comunicarse correctamente con el upstream.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "Status 502",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "status 502",
      "caption": "Indica que el gateway recibió una respuesta inválida o no pudo comunicarse correctamente con el upstream."
    }
  },
  {
    "title": "Status 503",
    "description": "Puede provenir de ausencia de capacidad, límites, maintenance o configuración explícita.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "Status 503",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "status 503",
      "caption": "Puede provenir de ausencia de capacidad, límites, maintenance o configuración explícita."
    }
  },
  {
    "title": "Status 504",
    "description": "El gateway agotó un timeout esperando al upstream y requiere distinguir connect, send o read.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "Status 504",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "status 504",
      "caption": "El gateway agotó un timeout esperando al upstream y requiere distinguir connect, send o read."
    }
  },
  {
    "title": "error_log",
    "description": "Registra problemas de configuración y runtime con niveles emerg, alert, crit, error, warn, notice, info o debug.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "jerarquía y dependencias",
    "layout": "compact",
    "scene": {
      "variant": "tree",
      "code": "error_log",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "errorlog",
      "caption": "Registra problemas de configuración y runtime con niveles emerg, alert, crit, error, warn, notice, info o debug."
    }
  },
  {
    "title": "Debug logging",
    "description": "Un binario con --with-debug y niveles selectivos puede revelar fases, conexiones y upstreams con alto volumen.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "Debug logging",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "debug logging",
      "caption": "Un binario con --with-debug y niveles selectivos puede revelar fases, conexiones y upstreams con alto volumen."
    }
  },
  {
    "title": "debug_connection",
    "description": "Limita debug logging a clientes concretos para reducir ruido durante una investigación.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "debug_connection",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "debugconnection",
      "caption": "Limita debug logging a clientes concretos para reducir ruido durante una investigación."
    }
  },
  {
    "title": "stub_status",
    "description": "Expone métricas básicas de conexiones activas, accepts, handled, requests y estados Reading/Writing/Waiting.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "stub_status",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "stubstatus",
      "caption": "Expone métricas básicas de conexiones activas, accepts, handled, requests y estados Reading/Writing/Waiting."
    }
  },
  {
    "title": "NGINX Plus API",
    "description": "Expone métricas y estado ampliado de upstreams, zones, resolvers y otros subsistemas en la edición comercial.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "NGINX Plus API",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "nginx plus api",
      "caption": "Expone métricas y estado ampliado de upstreams, zones, resolvers y otros subsistemas en la edición comercial."
    }
  },
  {
    "title": "Exporters externos",
    "description": "Prometheus exporters suelen leer stub_status o logs; su modelo no forma parte automáticamente del core de NGINX.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "Exporters externos",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "exporters externos",
      "caption": "Prometheus exporters suelen leer stub_status o logs; su modelo no forma parte automáticamente del core de NGINX."
    }
  },
  {
    "title": "Logs a syslog",
    "description": "access_log y error_log pueden enviarse a syslog local o remoto con facility, severity y tag.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "Logs a syslog",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "logs a syslog",
      "caption": "access_log y error_log pueden enviarse a syslog local o remoto con facility, severity y tag."
    }
  },
  {
    "title": "Rotación de logs",
    "description": "La herramienta renombra archivos y luego envía reopen para que NGINX escriba en destinos nuevos sin reiniciar.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "Rotación de logs",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "rotación de logs",
      "caption": "La herramienta renombra archivos y luego envía reopen para que NGINX escriba en destinos nuevos sin reiniciar."
    }
  },
  {
    "title": "nginx -T en incidentes",
    "description": "Captura la configuración efectiva y paths de origen, evitando investigar solo un fragmento que quizá fue sobrescrito.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "nginx -T en incidentes",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "nginx -t en incidentes",
      "caption": "Captura la configuración efectiva y paths de origen, evitando investigar solo un fragmento que quizá fue sobrescrito."
    }
  },
  {
    "title": "Configuración mínima reproducible",
    "description": "Reducir includes y tráfico a un caso pequeño ayuda a separar bug, módulo, red y aplicación.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "Configuración mínima reproducible",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "configuración mínima reproducible",
      "caption": "Reducir includes y tráfico a un caso pequeño ayuda a separar bug, módulo, red y aplicación."
    }
  },
  {
    "title": "Diagnóstico de location",
    "description": "Headers temporales, logs y una tabla de precedencia permiten demostrar qué server y location procesaron la URI.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "Diagnóstico de location",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "location",
      "caption": "Headers temporales, logs y una tabla de precedencia permiten demostrar qué server y location procesaron la URI."
    }
  },
  {
    "title": "Diagnóstico de upstream",
    "description": "curl directo, ss, DNS, TLS y logs separan fallo de NGINX de fallo del servicio destino.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Diagnóstico de upstream",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "upstream",
      "caption": "curl directo, ss, DNS, TLS y logs separan fallo de NGINX de fallo del servicio destino."
    }
  },
  {
    "title": "Core dumps",
    "description": "Con límites y símbolos adecuados, un crash puede analizarse sin reiniciar ciegamente la misma condición.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "Core dumps",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "core dumps",
      "caption": "Con límites y símbolos adecuados, un crash puede analizarse sin reiniciar ciegamente la misma condición."
    }
  },
  {
    "title": "File descriptor exhaustion",
    "description": "Errores too many open files requieren revisar límites, conexiones, logs, archivos y fugas upstream.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "File descriptor exhaustion",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "file descriptor exhaustion",
      "caption": "Errores too many open files requieren revisar límites, conexiones, logs, archivos y fugas upstream."
    }
  },
  {
    "title": "Disk full",
    "description": "Caché, temporales y logs pueden agotar filesystem e impedir requests aunque CPU y memoria parezcan sanas.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "Disk full",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "disk full",
      "caption": "Caché, temporales y logs pueden agotar filesystem e impedir requests aunque CPU y memoria parezcan sanas."
    }
  },
  {
    "title": "Reload fallido",
    "description": "Si la nueva configuración no puede abrir sockets, logs o certificados, el master conserva la configuración anterior y registra el error.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "Reload fallido",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "reload fallido",
      "caption": "Si la nueva configuración no puede abrir sockets, logs o certificados, el master conserva la configuración anterior y registra el error."
    }
  },
  {
    "title": "Worker shutdown timeout",
    "description": "Limita cuánto espera un worker antiguo durante cierre graceful antes de finalizar conexiones restantes.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "Worker shutdown timeout",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "worker shutdown timeout",
      "caption": "Limita cuánto espera un worker antiguo durante cierre graceful antes de finalizar conexiones restantes."
    }
  },
  {
    "title": "Runbooks y rollback",
    "description": "Una operación segura registra comando de validación, config anterior, señal de reload y criterios de verificación.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "Runbooks y rollback",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "runbooks y rollback",
      "caption": "Una operación segura registra comando de validación, config anterior, señal de reload y criterios de verificación."
    }
  },
  {
    "title": "SLOs de gateway",
    "description": "Disponibilidad, p95/p99, errores upstream, saturation y cache hit ratio explican salud mejor que CPU aislada.",
    "section": "Logs, observabilidad y troubleshooting",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "SLOs de gateway",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "slos de gateway",
      "caption": "Disponibilidad, p95/p99, errores upstream, saturation y cache hit ratio explican salud mejor que CPU aislada."
    }
  },
  {
    "title": "NGINX en foreground",
    "description": "daemon off mantiene el proceso principal ligado al runtime del contenedor y permite señales correctas.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "NGINX en foreground",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "nginx en foreground",
      "caption": "daemon off mantiene el proceso principal ligado al runtime del contenedor y permite señales correctas."
    }
  },
  {
    "title": "Imagen inmutable",
    "description": "La configuración base, módulos y contenido estático se construyen en una imagen identificada por digest.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "Imagen inmutable",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "imagen inmutable",
      "caption": "La configuración base, módulos y contenido estático se construyen en una imagen identificada por digest."
    }
  },
  {
    "title": "Configuración montada",
    "description": "Volumes o ConfigMaps pueden inyectar configuración, pero rompen reproducibilidad si no están versionados y validados.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "Configuración montada",
      "nodes": [
        "request|clave",
        "policy|regla",
        "budget|estado",
        "allow / reject|resultado"
      ],
      "outcome": "configuración montada",
      "caption": "Volumes o ConfigMaps pueden inyectar configuración, pero rompen reproducibilidad si no están versionados y validados."
    }
  },
  {
    "title": "Logs a stdout y stderr",
    "description": "En contenedores, enlaces a /dev/stdout y /dev/stderr permiten que la plataforma recoja logs sin tail auxiliar.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "evidencia y latencia",
    "layout": "compact",
    "scene": {
      "variant": "trace",
      "code": "Logs a stdout y stderr",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "logs a stdout y stderr",
      "caption": "En contenedores, enlaces a /dev/stdout y /dev/stderr permiten que la plataforma recoja logs sin tail auxiliar."
    }
  },
  {
    "title": "Contenedor no root",
    "description": "Requiere puertos no privilegiados o capabilities, paths escribibles y una imagen preparada para UID arbitrario.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "Contenedor no root",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "contenedor no root",
      "caption": "Requiere puertos no privilegiados o capabilities, paths escribibles y una imagen preparada para UID arbitrario."
    }
  },
  {
    "title": "Read-only filesystem",
    "description": "Temporales, PID y caché deben moverse a volúmenes o tmpfs cuando el root filesystem es inmutable.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "Read-only filesystem",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "read-only filesystem",
      "caption": "Temporales, PID y caché deben moverse a volúmenes o tmpfs cuando el root filesystem es inmutable."
    }
  },
  {
    "title": "Healthcheck de contenedor",
    "description": "Debe comprobar que NGINX atiende la ruta esperada sin ocultar fallos del upstream que la plataforma necesita detectar.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "Healthcheck de contenedor",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "healthcheck de contenedor",
      "caption": "Debe comprobar que NGINX atiende la ruta esperada sin ocultar fallos del upstream que la plataforma necesita detectar."
    }
  },
  {
    "title": "SIGQUIT graceful",
    "description": "El runtime debe enviar una señal que permita terminar requests; SIGKILL elimina cualquier oportunidad de drenado.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "SIGQUIT graceful",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "sigquit graceful",
      "caption": "El runtime debe enviar una señal que permita terminar requests; SIGKILL elimina cualquier oportunidad de drenado."
    }
  },
  {
    "title": "Docker networking",
    "description": "El nombre de servicio resuelve a IPs internas y el resolver/runtime determina cómo se actualizan endpoints.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "Docker networking",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "docker networking",
      "caption": "El nombre de servicio resuelve a IPs internas y el resolver/runtime determina cómo se actualizan endpoints."
    }
  },
  {
    "title": "Kubernetes Service frente a NGINX",
    "description": "Un Service proporciona descubrimiento y balanceo L4; NGINX añade políticas L7, TLS, routing y observabilidad.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "Kubernetes Service frente a NGINX",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "kubernetes service frente a nginx",
      "caption": "Un Service proporciona descubrimiento y balanceo L4; NGINX añade políticas L7, TLS, routing y observabilidad."
    }
  },
  {
    "title": "NGINX Ingress Controller",
    "description": "Es un controlador que observa recursos Kubernetes y genera configuración; no es lo mismo que instalar NGINX manualmente.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "NGINX Ingress Controller",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "nginx ingress controller",
      "caption": "Es un controlador que observa recursos Kubernetes y genera configuración; no es lo mismo que instalar NGINX manualmente."
    }
  },
  {
    "title": "Ingress resource",
    "description": "Describe hosts, paths y backends con un modelo limitado y dependiente de la clase/controlador.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "Ingress resource",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "ingress resource",
      "caption": "Describe hosts, paths y backends con un modelo limitado y dependiente de la clase/controlador."
    }
  },
  {
    "title": "Gateway API",
    "description": "Ofrece roles y recursos más expresivos para listeners, routes, policies y delegación entre equipos.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "Gateway API",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "gateway api",
      "caption": "Ofrece roles y recursos más expresivos para listeners, routes, policies y delegación entre equipos."
    }
  },
  {
    "title": "Annotations y snippets",
    "description": "Pueden exponer directivas potentes desde manifests y deben gobernarse porque afectan seguridad del proxy compartido.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Annotations y snippets",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "annotations y snippets",
      "caption": "Pueden exponer directivas potentes desde manifests y deben gobernarse porque afectan seguridad del proxy compartido."
    }
  },
  {
    "title": "Reload del controlador",
    "description": "Cambios de recursos producen configuración nueva, validación y reload; la frecuencia influye en estabilidad y latencia de convergencia.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "diagnóstico operativo",
    "layout": "compact",
    "scene": {
      "variant": "terminal",
      "code": "Reload del controlador",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "reload del controlador",
      "caption": "Cambios de recursos producen configuración nueva, validación y reload; la frecuencia influye en estabilidad y latencia de convergencia."
    }
  },
  {
    "title": "Preservar IP de cliente",
    "description": "externalTrafficPolicy, PROXY protocol o trusted forwarded headers determinan si la aplicación observa la IP original.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Preservar IP de cliente",
      "nodes": [
        "request|entrada",
        "server|host",
        "location|URI",
        "handler|contenido"
      ],
      "outcome": "preservar ip de cliente",
      "caption": "externalTrafficPolicy, PROXY protocol o trusted forwarded headers determinan si la aplicación observa la IP original."
    }
  },
  {
    "title": "Readiness del proxy",
    "description": "La instancia debe anunciarse lista solo cuando configuración, certificados, sockets y dependencias mínimas están disponibles.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "Readiness del proxy",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "readiness del proxy",
      "caption": "La instancia debe anunciarse lista solo cuando configuración, certificados, sockets y dependencias mínimas están disponibles."
    }
  },
  {
    "title": "Rolling update",
    "description": "PreStop, readiness y terminationGracePeriod coordinan retiro del load balancer con cierre graceful de workers.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "Rolling update",
      "nodes": [
        "memory|buffer",
        "disk|temporal",
        "cache|metadata",
        "client|ritmo"
      ],
      "outcome": "rolling update",
      "caption": "PreStop, readiness y terminationGracePeriod coordinan retiro del load balancer con cierre graceful de workers."
    }
  },
  {
    "title": "PodDisruptionBudget",
    "description": "Limita interrupciones voluntarias simultáneas, sin garantizar disponibilidad frente a fallos involuntarios.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "PodDisruptionBudget",
      "nodes": [
        "upstream A|activo",
        "upstream B|activo",
        "health|estado",
        "NGINX|selector"
      ],
      "outcome": "poddisruptionbudget",
      "caption": "Limita interrupciones voluntarias simultáneas, sin garantizar disponibilidad frente a fallos involuntarios."
    }
  },
  {
    "title": "Alta disponibilidad de NGINX",
    "description": "Varias instancias detrás de DNS o un load balancer eliminan el proxy único como punto de fallo.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "Alta disponibilidad de NGINX",
      "nodes": [
        "host|variable",
        "URI|variable",
        "method|variable",
        "result|valor"
      ],
      "outcome": "alta disponibilidad de nginx",
      "caption": "Varias instancias detrás de DNS o un load balancer eliminan el proxy único como punto de fallo."
    }
  },
  {
    "title": "keepalived y VIP",
    "description": "En entornos on-prem, VRRP puede mover una IP virtual entre nodos, con detección y split-brain correctamente diseñados.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "keepalived y VIP",
      "nodes": [
        "GET /asset|request",
        "filesystem|lookup",
        "headers|validators",
        "200 / 304|response"
      ],
      "outcome": "keepalived y vip",
      "caption": "En entornos on-prem, VRRP puede mover una IP virtual entre nodos, con detección y split-brain correctamente diseñados."
    }
  },
  {
    "title": "Configuración como código",
    "description": "Templates, lint, tests, review y despliegue inmutable reducen cambios manuales no trazables.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Configuración como código",
      "nodes": [
        "config|entrada",
        "parse|validación",
        "runtime|aplicación",
        "result|estado"
      ],
      "outcome": "configuración como código",
      "caption": "Templates, lint, tests, review y despliegue inmutable reducen cambios manuales no trazables."
    }
  },
  {
    "title": "envsubst",
    "description": "Sustituye variables al generar archivos, pero requiere distinguir variables de shell de variables nativas $nginx.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "envsubst",
      "nodes": [
        "directive|sintaxis",
        "context|alcance",
        "inheritance|regla",
        "runtime|efecto"
      ],
      "outcome": "envsubst",
      "caption": "Sustituye variables al generar archivos, pero requiere distinguir variables de shell de variables nativas $nginx."
    }
  },
  {
    "title": "Dynamic modules",
    "description": "Permiten empaquetar extensiones separadas, siempre compatibles con versión y firma del binario cargador.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Dynamic modules",
      "nodes": [
        "nginx -T|config",
        "ss -lntp|socket",
        "curl -v|request",
        "tail error.log|evidence"
      ],
      "outcome": "dynamic modules",
      "caption": "Permiten empaquetar extensiones separadas, siempre compatibles con versión y firma del binario cargador."
    }
  },
  {
    "title": "njs en producción",
    "description": "La lógica debe mantenerse pequeña, determinista, observable y con límites claros frente a una aplicación completa.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "njs en producción",
      "nodes": [
        "nginx.conf|main",
        "http {}|L7",
        "server {}|host",
        "location {}|route"
      ],
      "outcome": "njs en producción",
      "caption": "La lógica debe mantenerse pequeña, determinista, observable y con límites claros frente a una aplicación completa."
    }
  },
  {
    "title": "OpenResty",
    "description": "Distribución basada en NGINX que integra LuaJIT y módulos; tiene modelo operativo y compatibilidad propios.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "OpenResty",
      "nodes": [
        "client|entrada",
        "NGINX|fase",
        "upstream|destino",
        "response|salida"
      ],
      "outcome": "openresty",
      "caption": "Distribución basada en NGINX que integra LuaJIT y módulos; tiene modelo operativo y compatibilidad propios."
    }
  },
  {
    "title": "NGINX Unit",
    "description": "Servidor de aplicaciones dinámico distinto de NGINX, con configuración y responsabilidades diferentes.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "NGINX Unit",
      "nodes": [
        "cliente|protocolo",
        "NGINX|terminación",
        "policy|seguridad",
        "upstream|backend"
      ],
      "outcome": "nginx unit",
      "caption": "Servidor de aplicaciones dinámico distinto de NGINX, con configuración y responsabilidades diferentes."
    }
  },
  {
    "title": "Pruebas de configuración",
    "description": "CI puede ejecutar nginx -t, requests de contrato y escenarios de routing antes de promover una imagen.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "Pruebas de configuración",
      "nodes": [
        "opción A|comportamiento",
        "opción B|comportamiento",
        "trade-off|contexto",
        "policy|decisión"
      ],
      "outcome": "pruebas de configuración",
      "caption": "CI puede ejecutar nginx -t, requests de contrato y escenarios de routing antes de promover una imagen."
    }
  },
  {
    "title": "Capacity y autoscaling",
    "description": "Escalar replicas exige métricas relacionadas con conexiones, RPS, CPU, latencia y ancho de banda, no solo una señal genérica.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "Capacity y autoscaling",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "capacity y autoscaling",
      "caption": "Escalar replicas exige métricas relacionadas con conexiones, RPS, CPU, latencia y ancho de banda, no solo una señal genérica."
    }
  },
  {
    "title": "Estrategia de upgrades",
    "description": "Revisa changelog, módulos, OpenSSL, sintaxis, pruebas de tráfico y rollback antes de actualizar flotas completas.",
    "section": "Contenedores, Kubernetes, HA y extensibilidad",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "Estrategia de upgrades",
      "nodes": [
        "signal|evento",
        "master|coordina",
        "workers|transición",
        "traffic|continuidad"
      ],
      "outcome": "estrategia de upgrades",
      "caption": "Revisa changelog, módulos, OpenSSL, sintaxis, pruebas de tráfico y rollback antes de actualizar flotas completas."
    }
  }
] as const satisfies readonly StudyConcept[];
