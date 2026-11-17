import type { QuizQuestion } from "@/data/quizTypes";

export const nginxQuestions: QuizQuestion[] = [
  {
    "id": "nginx-q-01",
    "collectionId": "nginx",
    "question": "En NGINX (Arquitectura y modelo de ejecución), ¿qué función técnica cumple «Qué es NGINX»?",
    "options": [
      "Servidor web orientado a eventos que también funciona como reverse proxy, balanceador, caché y gateway de aplicaciones.",
      "Representa estrategias distintas para distribuir nuevas conexiones entre workers según plataforma y configuración.",
      "Procesa conexiones y peticiones con privilegios reducidos después de que el master prepara sockets y configuración.",
      "Espera eventos de lectura, escritura, timers y señales para avanzar cada conexión sin bloquear el proceso completo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Qué es NGINX (Arquitectura y modelo de ejecución): Servidor web orientado a eventos que también funciona como reverse proxy, balanceador, caché y gateway de aplicaciones.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-02",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «Servidor web, proxy y gateway» en arquitectura y modelo de ejecución?",
    "options": [
      "Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque al operar.",
      "Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones.",
      "Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades al operar.",
      "Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Servidor web, proxy y gateway (Arquitectura y modelo de ejecución): Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-03",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «Arquitectura orientada a eventos»?",
    "options": [
      "Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque al operar.",
      "Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades al operar.",
      "Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente.",
      "Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Arquitectura orientada a eventos (Arquitectura y modelo de ejecución): Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-04",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «Proceso master»?",
    "options": [
      "Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente al operar.",
      "Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento al operar.",
      "Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario al operar.",
      "Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Proceso master (Arquitectura y modelo de ejecución): Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-05",
    "collectionId": "nginx",
    "question": "Respecto a arquitectura y modelo de ejecución en NGINX, ¿cuál es el propósito de «Procesos worker»?",
    "options": [
      "Procesa conexiones y peticiones con privilegios reducidos después de que el master prepara sockets y configuración.",
      "Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones.",
      "Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente.",
      "NGINX selecciona el mecanismo eficiente del sistema operativo para observar grandes conjuntos de descriptores."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Procesos worker (Arquitectura y modelo de ejecución): Procesan conexiones y peticiones con privilegios reducidos después de que el master prepara sockets y configuración.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-06",
    "collectionId": "nginx",
    "question": "En NGINX (Arquitectura y modelo de ejecución), ¿qué función técnica cumple «Worker connections»?",
    "options": [
      "Servidor web orientado a eventos que también funciona como reverse proxy, balanceador, caché y gateway de aplicaciones al operar.",
      "Define cuántas conexiones simultáneas puede manejar cada worker, limitado además por file descriptors y conexiones upstream.",
      "Worker_cpu_affinity puede fijar workers a CPUs concretas cuando el perfil y la topología justifican esa optimización al operar.",
      "Conecta aceptación, lectura de headers, selección de servidor, fases HTTP, upstream o archivo y escritura de respuesta al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Worker connections (Arquitectura y modelo de ejecución): Define cuántas conexiones simultáneas puede manejar cada worker, limitado además por file descriptors y conexiones upstream.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-07",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «Event loop del worker» en arquitectura y modelo de ejecución?",
    "options": [
      "Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones al operar.",
      "Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente al operar.",
      "Espera eventos de lectura, escritura, timers y señales para avanzar cada conexión sin bloquear el proceso completo.",
      "NGINX selecciona el mecanismo eficiente del sistema operativo para observar grandes conjuntos de descriptores al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Event loop del worker (Arquitectura y modelo de ejecución): Espera eventos de lectura, escritura, timers y señales para avanzar cada conexión sin bloquear el proceso completo.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-08",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «I/O no bloqueante»?",
    "options": [
      "Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades al operar.",
      "Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque al operar.",
      "Headers, compresión, range y body filters transforman la respuesta antes de enviarla al cliente al evaluar.",
      "Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco."
    ],
    "correctAnswerIndex": 3,
    "explanation": "I/O no bloqueante (Arquitectura y modelo de ejecución): Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-09",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «epoll, kqueue y event methods»?",
    "options": [
      "NGINX selecciona el mecanismo eficiente del sistema operativo para observar grandes conjuntos de descriptores al operar.",
      "Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque al operar.",
      "Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco.",
      "Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "epoll, kqueue y event methods (Arquitectura y modelo de ejecución): NGINX selecciona el mecanismo eficiente del sistema operativo para observar grandes conjuntos de descriptores.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-10",
    "collectionId": "nginx",
    "question": "Respecto a arquitectura y modelo de ejecución en NGINX, ¿cuál es el propósito de «Aceptación de conexiones»?",
    "options": [
      "Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario.",
      "Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente.",
      "Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Aceptación de conexiones (Arquitectura y modelo de ejecución): Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-11",
    "collectionId": "nginx",
    "question": "En NGINX (Arquitectura y modelo de ejecución), ¿qué función técnica cumple «accept_mutex y reuseport»?",
    "options": [
      "Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones al operar.",
      "Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente al operar.",
      "Representa estrategias distintas para distribuir nuevas conexiones entre workers según plataforma y configuración.",
      "Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "accept_mutex y reuseport (Arquitectura y modelo de ejecución): Representan estrategias distintas para distribuir nuevas conexiones entre workers según plataforma y configuración.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-12",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «Afinidad de CPU» en arquitectura y modelo de ejecución?",
    "options": [
      "NGINX selecciona el mecanismo eficiente del sistema operativo para observar grandes conjuntos de descriptores al operar.",
      "Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones al operar.",
      "Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente al operar.",
      "Worker_cpu_affinity puede fijar workers a CPUs concretas cuando el perfil y la topología justifican esa optimización."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Afinidad de CPU (Arquitectura y modelo de ejecución): worker_cpu_affinity puede fijar workers a CPUs concretas cuando el perfil y la topología justifican esa optimización.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-13",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «Ciclo de vida de una petición»?",
    "options": [
      "Conecta aceptación, lectura de headers, selección de servidor, fases HTTP, upstream o archivo y escritura de respuesta.",
      "Representa estrategias distintas para distribuir nuevas conexiones entre workers según plataforma y configuración.",
      "Procesa conexiones y peticiones con privilegios reducidos después de que el master prepara sockets y configuración.",
      "Espera eventos de lectura, escritura, timers y señales para avanzar cada conexión sin bloquear el proceso completo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Ciclo de vida de una petición (Arquitectura y modelo de ejecución): Conecta aceptación, lectura de headers, selección de servidor, fases HTTP, upstream o archivo y escritura de respuesta.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-14",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «Fases del módulo HTTP»?",
    "options": [
      "Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente al operar.",
      "Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento.",
      "Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario.",
      "Headers, compresión, range y body filters transforman la respuesta antes de enviarla al cliente."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fases del módulo HTTP (Arquitectura y modelo de ejecución): Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-15",
    "collectionId": "nginx",
    "question": "Respecto a arquitectura y modelo de ejecución en NGINX, ¿cuál es el propósito de «Filtros de respuesta»?",
    "options": [
      "Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente al operar.",
      "Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario.",
      "Headers, compresión, range y body filters transforman la respuesta antes de enviarla al cliente.",
      "Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Filtros de respuesta (Arquitectura y modelo de ejecución): Headers, compresión, range y body filters transforman la respuesta antes de enviarla al cliente.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-16",
    "collectionId": "nginx",
    "question": "En NGINX (Arquitectura y modelo de ejecución), ¿qué función técnica cumple «Módulos estáticos»?",
    "options": [
      "Headers, compresión, range y body filters transforman la respuesta antes de enviarla al cliente al operar.",
      "Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento al operar.",
      "Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente al operar.",
      "Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Módulos estáticos (Arquitectura y modelo de ejecución): Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "básico"
  },
  {
    "id": "nginx-q-17",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «Módulos dinámicos» en arquitectura y modelo de ejecución?",
    "options": [
      "Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario al operar.",
      "Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente.",
      "Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Módulos dinámicos (Arquitectura y modelo de ejecución): Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario.",
    "topic": "Arquitectura y modelo de ejecución",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-18",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «Paquetes oficiales y de la distribución»?",
    "options": [
      "Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación al operar.",
      "Compara versiones, rutas, módulos y políticas de actualización antes de elegir el origen del paquete.",
      "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración.",
      "Al iniciar, NGINX parsea toda la configuración, abre logs y sockets, y solo después crea workers."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Paquetes oficiales y de la distribución (Instalación, procesos y configuración): Compara versiones, rutas, módulos y políticas de actualización antes de elegir el origen del paquete.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-19",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «Stable»?",
    "options": [
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail al operar.",
      "La unit define usuario, límites, validación, señales y reinicios sin degradar el flujo.",
      "La rama mainline recibe funciones y correcciones continuamente manteniendo consistencia.",
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Stable y mainline (Instalación, procesos y configuración): La rama mainline recibe funciones y correcciones continuamente; stable cambia con menor frecuencia sin significar una rama más probada en todos los casos.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-20",
    "collectionId": "nginx",
    "question": "Respecto a instalación, procesos y configuración en NGINX, ¿cuál es el propósito de «Compilación desde código fuente»?",
    "options": [
      "Divide la configuración en archivos reutilizables y puede expandir patrones glob en el momento de carga al operar.",
      "Stop termina rápidamente; quit solicita cierre graceful para finalizar conexiones activas antes de salir al operar.",
      "Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario.",
      "Permite seleccionar módulos, paths, bibliotecas TLS y opciones de build que no ofrece un paquete precompilado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Compilación desde código fuente (Instalación, procesos y configuración): Permite seleccionar módulos, paths, bibliotecas TLS y opciones de build que no ofrece un paquete precompilado.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-21",
    "collectionId": "nginx",
    "question": "En NGINX (Instalación, procesos y configuración), ¿qué función técnica cumple «Opciones de configure»?",
    "options": [
      "Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario.",
      "Compara versiones, rutas, módulos y políticas de actualización antes de elegir el origen del paquete.",
      "Las rutas compiladas definen ubicación por defecto de configuración, logs, PID, temporales y módulos.",
      "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Opciones de configure (Instalación, procesos y configuración): Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-22",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «nginx -V» en instalación, procesos y configuración?",
    "options": [
      "El master puede iniciar un binario nuevo conservando sockets heredados y permitir rollback al proceso anterior al operar.",
      "Muestra versión, compilador, biblioteca TLS y argumentos de build necesarios para reproducir o depurar la instalación.",
      "Permite seleccionar módulos, paths, bibliotecas TLS y opciones de build que no ofrece un paquete precompilado al operar.",
      "Cada directiva solo es válida en contextos concretos y su posición cambia alcance, herencia y momento de evaluación."
    ],
    "correctAnswerIndex": 1,
    "explanation": "nginx -V (Instalación, procesos y configuración): Muestra versión, compilador, biblioteca TLS y argumentos de build necesarios para reproducir o depurar la instalación.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-23",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «Prefix, conf-path»?",
    "options": [
      "Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación al operar.",
      "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración.",
      "Las rutas compiladas definen ubicación por defecto de configuración, logs, PID, temporales y módulos.",
      "Al iniciar, NGINX parsea toda la configuración, abre logs y sockets, y solo después crea workers."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Prefix, conf-path y módulos (Instalación, procesos y configuración): Las rutas compiladas definen ubicación por defecto de configuración, logs, PID, temporales y módulos.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-24",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «Estructura de nginx.conf»?",
    "options": [
      "La unit define usuario, límites, validación, señales y reinicios dentro de la aplicación.",
      "La rama mainline recibe funciones y correcciones continuamente sin degradar el flujo.",
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Estructura de nginx.conf (Instalación, procesos y configuración): Organiza directivas simples y bloques anidados como main, events, http, stream y mail.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-25",
    "collectionId": "nginx",
    "question": "Respecto a instalación, procesos y configuración en NGINX, ¿cuál es el propósito de «Directivas»?",
    "options": [
      "Cada directiva solo es válida en contextos concretos y su posición cambia alcance, herencia y momento de evaluación.",
      "Permite seleccionar módulos, paths, bibliotecas TLS y opciones de build que no ofrece un paquete precompilado.",
      "El master puede iniciar un binario nuevo conservando sockets heredados y permitir rollback al proceso anterior.",
      "Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Directivas y contextos (Instalación, procesos y configuración): Cada directiva solo es válida en contextos concretos y su posición cambia alcance, herencia y momento de evaluación.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-26",
    "collectionId": "nginx",
    "question": "En NGINX (Instalación, procesos y configuración), ¿qué función técnica cumple «include»?",
    "options": [
      "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración al operar.",
      "Divide la configuración en archivos reutilizables y puede expandir patrones glob en el momento de carga.",
      "Al iniciar, NGINX parsea toda la configuración, abre logs y sockets, y solo después crea workers al operar.",
      "Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "include (Instalación, procesos y configuración): Divide la configuración en archivos reutilizables y puede expandir patrones glob en el momento de carga.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-27",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «nginx -t» en instalación, procesos y configuración?",
    "options": [
      "La señal reopen cierra y vuelve a abrir archivos de log para integrarse con rotación externa al operar.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail al evaluar.",
      "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración.",
      "Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación."
    ],
    "correctAnswerIndex": 2,
    "explanation": "nginx -t (Instalación, procesos y configuración): Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-28",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «Señal start y arranque»?",
    "options": [
      "La señal reopen cierra y vuelve a abrir archivos de log para integrarse con rotación externa al operar.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail al evaluar.",
      "Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación.",
      "Al iniciar, NGINX parsea toda la configuración, abre logs y sockets, y solo después crea workers."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Señal start y arranque (Instalación, procesos y configuración): Al iniciar, NGINX parsea toda la configuración, abre logs y sockets, y solo después crea workers.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-29",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «stop frente a quit»?",
    "options": [
      "Stop termina rápidamente; quit solicita cierre graceful para finalizar conexiones activas antes de salir al operar.",
      "Compara versiones, rutas, módulos y políticas de actualización antes de elegir el origen del paquete.",
      "Las rutas compiladas definen ubicación por defecto de configuración, logs, PID, temporales y módulos.",
      "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "stop frente a quit (Instalación, procesos y configuración): stop termina rápidamente; quit solicita cierre graceful para finalizar conexiones activas antes de salir.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-30",
    "collectionId": "nginx",
    "question": "Respecto a instalación, procesos y configuración en NGINX, ¿cuál es el propósito de «reopen de logs»?",
    "options": [
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail al operar.",
      "La señal reopen cierra y vuelve a abrir archivos de log para integrarse con rotación externa.",
      "Location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta al operar.",
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "reopen de logs (Instalación, procesos y configuración): La señal reopen cierra y vuelve a abrir archivos de log para integrarse con rotación externa.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-31",
    "collectionId": "nginx",
    "question": "En NGINX (Instalación, procesos y configuración), ¿qué función técnica cumple «PID file»?",
    "options": [
      "La señal reopen cierra y vuelve a abrir archivos de log para integrarse con rotación externa al operar.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail al operar.",
      "Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación.",
      "Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración."
    ],
    "correctAnswerIndex": 2,
    "explanation": "PID file (Instalación, procesos y configuración): Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-32",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «Integración con systemd» en instalación, procesos y configuración?",
    "options": [
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail al operar.",
      "La rama mainline recibe funciones y correcciones continuamente dentro de la aplicación.",
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables.",
      "La unit define usuario, límites, validación, señales y reinicios sin degradar el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Integración con systemd (Instalación, procesos y configuración): La unit define usuario, límites, validación, señales y reinicios; no reemplaza la semántica graceful propia de NGINX.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-33",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «user directive»?",
    "options": [
      "Los workers cambian a una identidad no privilegiada; esa cuenta necesita acceso efectivo a contenido, sockets y temporales al operar.",
      "Client body, proxy, FastCGI y caché pueden escribir archivos temporales que requieren capacidad y permisos correctos.",
      "Muestra versión, compilador, biblioteca TLS y argumentos de build necesarios para reproducir o depurar la instalación.",
      "Cada directiva solo es válida en contextos concretos y su posición cambia alcance, herencia y momento de evaluación al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "user directive (Instalación, procesos y configuración): Los workers cambian a una identidad no privilegiada; esa cuenta necesita acceso efectivo a contenido, sockets y temporales.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-34",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «Directorios temporales»?",
    "options": [
      "El master puede iniciar un binario nuevo conservando sockets heredados y permitir rollback al proceso anterior al operar.",
      "Client body, proxy, FastCGI y caché pueden escribir archivos temporales que requieren capacidad y permisos correctos.",
      "Permite seleccionar módulos, paths, bibliotecas TLS y opciones de build que no ofrece un paquete precompilado al operar.",
      "Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario al evaluar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Directorios temporales (Instalación, procesos y configuración): Client body, proxy, FastCGI y caché pueden escribir archivos temporales que requieren capacidad y permisos correctos.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "intermedio"
  },
  {
    "id": "nginx-q-35",
    "collectionId": "nginx",
    "question": "Respecto a instalación, procesos y configuración en NGINX, ¿cuál es el propósito de «Upgrade de binario sin cortar servicio»?",
    "options": [
      "Stop termina rápidamente; quit solicita cierre graceful para finalizar conexiones activas antes de salir al operar.",
      "Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario al operar.",
      "El master puede iniciar un binario nuevo conservando sockets heredados y permitir rollback al proceso anterior.",
      "Divide la configuración en archivos reutilizables y puede expandir patrones glob en el momento de carga al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Upgrade de binario sin cortar servicio (Instalación, procesos y configuración): El master puede iniciar un binario nuevo conservando sockets heredados y permitir rollback al proceso anterior.",
    "topic": "Instalación, procesos y configuración",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-36",
    "collectionId": "nginx",
    "question": "En NGINX (Selección de servidor, location y URI), ¿qué función técnica cumple «Bloques server»?",
    "options": [
      "Patrones como *.example.com cubren familias de hosts y siguen reglas específicas de precedencia al operar.",
      "Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente al operar.",
      "~ distingue mayúsculas; ~* compara sin distinguirlas, con el costo y complejidad propios de regex.",
      "Cada server representa un virtual host asociado a sockets listen, nombres y reglas de procesamiento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Bloques server (Selección de servidor, location y URI): Cada server representa un virtual host asociado a sockets listen, nombres y reglas de procesamiento.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-37",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «listen» en selección de servidor, location y uri?",
    "options": [
      "Define dirección, puerto y parámetros del socket, incluidos default_server, ssl, http2, quic, reuseport o proxy_protocol al operar.",
      "Después compara el campo Host o el nombre de la línea de petición con server_name dentro del socket seleccionado al operar.",
      "Los nombres exactos tienen prioridad sobre wildcards y expresiones regulares compatibles con el socket elegido al operar.",
      "NGINX decodifica ciertos escapes, resuelve componentes relativos y comprime barras antes de comparar locations al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "listen (Selección de servidor, location y URI): Define dirección, puerto y parámetros del socket, incluidos default_server, ssl, http2, quic, reuseport o proxy_protocol.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-38",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «default_server»?",
    "options": [
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables al operar.",
      "Selecciona el server usado cuando el Host no coincide dentro de la arquitectura activa.",
      "Location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta.",
      "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante."
    ],
    "correctAnswerIndex": 1,
    "explanation": "default_server (Selección de servidor, location y URI): Selecciona el server usado cuando el Host no coincide; pertenece al par address:port y no al nombre del sitio.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-39",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «server_name exacto»?",
    "options": [
      "Cada server representa un virtual host asociado a sockets listen, nombres y reglas de procesamiento con precisión.",
      "Las expresiones regulares se evalúan en orden de aparición y pueden capturar valores usados después al evaluar.",
      "Los nombres exactos tienen prioridad sobre wildcards y expresiones regulares compatibles con el socket elegido.",
      "Las expresiones regulares se prueban en orden de configuración y la primera coincidencia selecciona el bloque."
    ],
    "correctAnswerIndex": 2,
    "explanation": "server_name exacto (Selección de servidor, location y URI): Los nombres exactos tienen prioridad sobre wildcards y expresiones regulares compatibles con el socket elegido.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-40",
    "collectionId": "nginx",
    "question": "Respecto a selección de servidor, location y uri en NGINX, ¿cuál es el propósito de «server_name con wildcard»?",
    "options": [
      "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante al operar.",
      "Location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta al operar.",
      "Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente.",
      "Patrones como *.example.com cubren familias de hosts y siguen reglas específicas de precedencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "server_name con wildcard (Selección de servidor, location y URI): Patrones como *.example.com cubren familias de hosts y siguen reglas específicas de precedencia.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-41",
    "collectionId": "nginx",
    "question": "En NGINX (Selección de servidor, location y URI), ¿qué función técnica cumple «server_name con regex»?",
    "options": [
      "Las expresiones regulares se evalúan en orden de aparición y pueden capturar valores usados después al operar.",
      "Patrones como *.example.com cubren familias de hosts y siguen reglas específicas de precedencia.",
      "Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente al operar.",
      "~ distingue mayúsculas; ~* compara sin distinguirlas, con el costo y complejidad propios de regex."
    ],
    "correctAnswerIndex": 0,
    "explanation": "server_name con regex (Selección de servidor, location y URI): Las expresiones regulares se evalúan en orden de aparición y pueden capturar valores usados después.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-42",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «Selección por IP y puerto» en selección de servidor, location y uri?",
    "options": [
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables al operar.",
      "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante.",
      "Location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Selección por IP y puerto (Selección de servidor, location y URI): NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-43",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «Selección por Host»?",
    "options": [
      "Las expresiones regulares se prueban en orden de configuración y la primera coincidencia selecciona el bloque al operar.",
      "Los nombres exactos tienen prioridad sobre wildcards y expresiones regulares compatibles con el socket elegido.",
      "Después compara el campo Host o el nombre de la línea de petición con server_name dentro del socket seleccionado.",
      "NGINX decodifica ciertos escapes, resuelve componentes relativos y comprime barras antes de comparar locations."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Selección por Host (Selección de servidor, location y URI): Después compara el campo Host o el nombre de la línea de petición con server_name dentro del socket seleccionado.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-44",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «SNI y selección TLS»?",
    "options": [
      "Define dirección, puerto y parámetros del socket, incluidos default_server, ssl, http2, quic, reuseport o proxy_protocol al operar.",
      "Después compara el campo Host o el nombre de la línea de petición con server_name dentro del socket seleccionado al operar.",
      "Los nombres exactos tienen prioridad sobre wildcards y expresiones regulares compatibles con el socket elegido en el flujo.",
      "Durante el handshake, SNI puede decidir certificado y parte de la configuración antes de conocer la petición HTTP completa."
    ],
    "correctAnswerIndex": 3,
    "explanation": "SNI y selección TLS (Selección de servidor, location y URI): Durante el handshake, SNI puede decidir certificado y parte de la configuración antes de conocer la petición HTTP completa.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-45",
    "collectionId": "nginx",
    "question": "Respecto a selección de servidor, location y uri en NGINX, ¿cuál es el propósito de «Normalización de URI»?",
    "options": [
      "NGINX decodifica ciertos escapes, resuelve componentes relativos y comprime barras antes de comparar locations.",
      "Cada server representa un virtual host asociado a sockets listen, nombres y reglas de procesamiento al operar.",
      "Las expresiones regulares se evalúan en orden de aparición y pueden capturar valores usados después al operar.",
      "Las expresiones regulares se prueban en orden de configuración y la primera coincidencia selecciona el bloque."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Normalización de URI (Selección de servidor, location y URI): NGINX decodifica ciertos escapes, resuelve componentes relativos y comprime barras antes de comparar locations.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-46",
    "collectionId": "nginx",
    "question": "En NGINX (Selección de servidor, location y URI), ¿qué función técnica cumple «location exacta»?",
    "options": [
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables al operar.",
      "Location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta.",
      "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail."
    ],
    "correctAnswerIndex": 1,
    "explanation": "location exacta (Selección de servidor, location y URI): location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-47",
    "collectionId": "nginx",
    "question": "Dentro de NGINX, ¿cómo opera el mecanismo de «location por prefijo» en selección de servidor, location y uri?",
    "options": [
      "Location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta.",
      "Organiza directivas simples y bloques anidados como main, events, http, stream y mail.",
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables.",
      "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante."
    ],
    "correctAnswerIndex": 2,
    "explanation": "location por prefijo (Selección de servidor, location y URI): NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-48",
    "collectionId": "nginx",
    "question": "Al trabajar con NGINX, ¿qué responsabilidad define a «Modificador ^~»?",
    "options": [
      "NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables al operar.",
      "Location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta.",
      "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante.",
      "Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Modificador ^~ (Selección de servidor, location y URI): Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-49",
    "collectionId": "nginx",
    "question": "En la arquitectura de NGINX, ¿qué caracteriza técnicamente a «location regex»?",
    "options": [
      "Las expresiones regulares se prueban en orden de configuración y la primera coincidencia selecciona el bloque.",
      "Cada server representa un virtual host asociado a sockets listen, nombres y reglas de procesamiento al operar.",
      "Las expresiones regulares se evalúan en orden de aparición y pueden capturar valores usados después al operar.",
      "~ distingue mayúsculas; ~* compara sin distinguirlas, con el costo y complejidad propios de regex al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "location regex (Selección de servidor, location y URI): Las expresiones regulares se prueban en orden de configuración y la primera coincidencia selecciona el bloque.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  },
  {
    "id": "nginx-q-50",
    "collectionId": "nginx",
    "question": "Respecto a selección de servidor, location y uri en NGINX, ¿cuál es el propósito de «Regex sensible e insensible»?",
    "options": [
      "Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente al operar.",
      "~ distingue mayúsculas; ~* compara sin distinguirlas, con el costo y complejidad propios de regex.",
      "NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante al operar.",
      "Patrones como *.example.com cubren familias de hosts y siguen reglas específicas de precedencia."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Regex sensible e insensible (Selección de servidor, location y URI): ~ distingue mayúsculas; ~* compara sin distinguirlas, con el costo y complejidad propios de regex.",
    "topic": "Selección de servidor, location y URI",
    "difficulty": "avanzado"
  }
];
