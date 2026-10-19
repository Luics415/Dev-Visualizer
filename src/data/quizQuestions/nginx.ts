import type { QuizQuestion } from "@/data/quizTypes";

export const nginxQuestions: QuizQuestion[] = [
  {
    id: "nginx-01",
    collectionId: "nginx",
    question: "En la arquitectura interna de NGINX, ¿cuál es la función diferenciada del proceso 'Master' frente a los procesos 'Worker'?",
    options: [
      "El proceso Master corre como root, lee/valida la configuración, abre sockets de red en puertos privilegiados (<1024) y gestiona el ciclo de vida de los Workers; los procesos Worker corren con privilegios reducidos (unprivileged) y atienden miles de conexiones de clientes concurrentes de forma asíncrona y no bloqueante.",
      "El Master procesa peticiones HTTP y los Workers compilan el código PHP en tiempo real.",
      "El Master balancea tráfico UDP y los Workers balancean exclusivamente conexiones TLS.",
      "No existe proceso Master en NGINX y cada conexión lanza un nuevo hilo monoproceso."
    ],
    correctAnswerIndex: 0,
    explanation: "El modelo multi-proceso asíncrono conducido por eventos (event-driven) de NGINX aísla la administración privilegiada en el Master, permitiendo que los Workers operen de forma eficiente y segura bajo el usuario `nginx` o `www-data`.",
    topic: "Arquitectura Master-Worker",
    difficulty: "intermedio"
  },
  {
    id: "nginx-02",
    collectionId: "nginx",
    question: "¿Cuál es el orden estricto de precedencia que utiliza NGINX para resolver qué bloque `location` debe atender una petición HTTP?",
    options: [
      "1) Coincidencia exacta con `=`; 2) Prefijo prioritario con `^~`; 3) Expresiones regulares con `~` (case-sensitive) o `~*` (case-insensitive) según orden en el archivo; 4) Coincidencia de prefijo estándar más largo.",
      "1) Expresiones regulares; 2) Prefijos normales; 3) Bloques nombrados `@`; 4) Coincidencia exacta.",
      "El primer bloque `location` declarado físicamente en el archivo de arriba hacia abajo.",
      "El bloque que tenga mayor cantidad de directivas `proxy_pass` anidadas."
    ],
    correctAnswerIndex: 0,
    explanation: "NGINX primero busca el prefijo más largo. Si encuentra un `=`, para de inmediato. Si encuentra un `^~` en el prefijo ganador, omite la búsqueda de regex. Si no hay `^~`, evalúa las expresiones regulares en orden de aparición y si alguna coincide, esa gana.",
    topic: "Precedencia de Bloques Location",
    difficulty: "avanzado"
  },
  {
    id: "nginx-03",
    collectionId: "nginx",
    question: "Al configurar NGINX como Reverse Proxy (`proxy_pass`), ¿por qué es indispensable configurar las cabeceras `Host`, `X-Real-IP` y `X-Forwarded-For`?",
    options: [
      "Porque por defecto NGINX reescribe la cabecera `Host` al nombre del upstream y enmascara la IP del cliente con la suya propia; estas directivas preservan el dominio original y la dirección IP pública real del cliente para el backend.",
      "Para que el navegador web guarde la cookie de sesión en memoria RAM.",
      "Para cifrar las peticiones con el algoritmo RSA de 4096 bits.",
      "Para evitar que el cortafuegos de Linux cierre el puerto 80."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin `proxy_set_header X-Real-IP $remote_addr;` y `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;`, el servidor backend (Node, Django, Go) vería todas las peticiones como originadas desde `127.0.0.1` o la IP interna de NGINX.",
    topic: "Reverse Proxy y Cabeceras",
    difficulty: "básico"
  },
  {
    id: "nginx-04",
    collectionId: "nginx",
    question: "¿Qué configuración específica requiere NGINX para proxificar correctamente conexiones bidireccionales persistentes 'WebSockets' hacia un backend?",
    options: [
      "`proxy_http_version 1.1;` junto con `proxy_set_header Upgrade $http_upgrade;` y `proxy_set_header Connection \"upgrade\";`.",
      "`proxy_method WEBSOCKET;` y `ssl_protocols TLSv1.3;`.",
      "`proxy_buffering on;` y `worker_connections 65535;`.",
      "`listen 443 websocket;` en el bloque server."
    ],
    correctAnswerIndex: 0,
    explanation: "WebSockets utiliza el mecanismo de negociación HTTP/1.1 Upgrade. Por defecto NGINX usa HTTP/1.0 para el upstream y descarta cabeceras `Upgrade`. Se debe forzar HTTP/1.1 y mapear explícitamente las cabeceras de actualización.",
    topic: "WebSockets y Reverse Proxy",
    difficulty: "intermedio"
  },
  {
    id: "nginx-05",
    collectionId: "nginx",
    question: "En el balanceo de carga con el bloque `upstream`, ¿cómo opera el algoritmo `ip_hash`?",
    options: [
      "Calcula un hash a partir de los primeros 3 octetos de la dirección IPv4 (o toda la IPv6) del cliente para enrutar consistentemente al mismo servidor backend, garantizando persistencia de sesión básica (Session Affinity).",
      "Asigna una IP pública única a cada servidor del pool de balanceo.",
      "Envía la petición al servidor que tenga la menor latencia de ping en milisegundos.",
      "Bloquea todas las peticiones que no provengan de una lista blanca fija."
    ],
    correctAnswerIndex: 0,
    explanation: "`ip_hash` asocia clientes con backends específicos. Si un servidor se cae temporalmente, se debe marcar con el parámetro `down` para preservar el hashing consistente de las IPs restantes.",
    topic: "Balanceo de Carga (Upstream)",
    difficulty: "intermedio"
  },
  {
    id: "nginx-06",
    collectionId: "nginx",
    question: "¿Qué optimización radical aporta la directiva `sendfile on;` en la entrega de archivos estáticos pesados (vídeos, imágenes, bundles)?",
    options: [
      "Permite la transferencia 'Zero-Copy' por parte del kernel de Linux, transfiriendo los datos directamente desde el descriptor del archivo en disco al socket TCP de red dentro del kernel sin copiar los bytes al espacio de usuario de NGINX.",
      "Comprime los archivos utilizando el algoritmo Brotli en tiempo de compilación.",
      "Carga todos los archivos del disco a la memoria RAM al arrancar el servidor.",
      "Envía los archivos a través de un canal UDP paralelo sin control de congestión."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin `sendfile`, el SO debe copiar el archivo de disco a buffer del kernel, luego al buffer de usuario de NGINX, y luego de vuelta al buffer del socket de kernel. `sendfile` usa la syscall `sendfile()` eliminando copias y cambios de contexto.",
    topic: "Rendimiento y Zero-Copy",
    difficulty: "intermedio"
  },
  {
    id: "nginx-07",
    collectionId: "nginx",
    question: "¿Para qué se combinan habitualmente las directivas `sendfile on;` con `tcp_nopush on;` y `tcp_nodelay on;` en NGINX?",
    options: [
      "`tcp_nopush` fuerza a NGINX a enviar paquetes TCP completos (llenando el MSS) junto con las cabeceras HTTP antes de despachar, y `tcp_nodelay` desactiva el algoritmo de Nagle en conexiones `keepalive` para enviar paquetes pequeños instantáneamente sin retrasos artificiales de 200ms.",
      "Para reiniciar el adaptador de red Ethernet si se supera el 90% de saturación.",
      "Para forzar el uso del protocolo HTTP/3 exclusivamente.",
      "Para encriptar el tráfico TCP con una contraseña compartida."
    ],
    correctAnswerIndex: 0,
    explanation: "Esta triada optimiza la transmisión de datos a gran escala: `tcp_nopush` asegura máxima eficiencia en transferencias de archivos grandes con `sendfile`, mientras `tcp_nodelay` garantiza respuesta inmediata sin latencia en peticiones interactivas.",
    topic: "Optimización de Sockets TCP",
    difficulty: "avanzado"
  },
  {
    id: "nginx-08",
    collectionId: "nginx",
    question: "En el sistema de caché de NGINX (`proxy_cache`), ¿qué información proporciona la cabecera calculada `$upstream_cache_status`?",
    options: [
      "Indica si la respuesta fue servida desde la caché (`HIT`), si fue solicitada al backend y guardada (`MISS`), si se ignoró la caché por cabeceras o reglas (`BYPASS`), si expiró (`EXPIRED`) o si se sirvió contenido obsoleto permitido (`STALE`).",
      "El número de bytes restantes en el disco duro del servidor.",
      "La temperatura física de la memoria RAM del servidor de caché.",
      "El tiempo de respuesta del servidor DNS local."
    ],
    correctAnswerIndex: 0,
    explanation: "Exponer `add_header X-Cache-Status $upstream_cache_status;` es una práctica estándar de depuración que permite comprobar instantáneamente si una petición fue resuelta desde la memoria/disco de NGINX o consultó al servidor upstream.",
    topic: "Proxy Caching",
    difficulty: "intermedio"
  },
  {
    id: "nginx-09",
    collectionId: "nginx",
    question: "¿Qué funcionalidad proporciona la directiva `proxy_cache_use_stale updating error timeout;`?",
    options: [
      "Permite a NGINX servir una respuesta en caché caducada (stale) a los clientes si el servidor upstream devuelve un error 5xx, timeout o mientras se descarga en segundo plano la versión actualizada, protegiendo a los usuarios de caídas del backend.",
      "Borra toda la memoria caché cada vez que ocurre un error 404.",
      "Redirige a los usuarios a la página de inicio de Google si el backend está caído.",
      "Envía una alerta SMS al administrador del servidor en cada petición fallida."
    ],
    correctAnswerIndex: 0,
    explanation: "Esta directiva implementa el patrón 'Stale-While-Revalidate' a nivel de infraestructura, amortiguando caídas temporales del backend y evitando el problema de la avalancha de caché (Cache Stampede).",
    topic: "Resiliencia y Caché",
    difficulty: "intermedio"
  },
  {
    id: "nginx-10",
    collectionId: "nginx",
    question: "En la limitación de tasa de peticiones con `limit_req_zone`, ¿qué algoritmo implementa NGINX y qué función cumple el parámetro `burst=N nodelay`?",
    options: [
      "Implementa el algoritmo Leaky Bucket: `rate` define la tasa sostenida constante, `burst` define cuántas peticiones en ráfaga pueden ser admitidas temporalmente en la cola por encima de la tasa, y `nodelay` procesa las peticiones de la ráfaga de forma inmediata sin demorarlas artificialmente.",
      "Implementa cifrado AES-GCM para paquetes que superen los 100 KB.",
      "Bloquea la IP del cliente durante 24 horas si envía más de 5 peticiones.",
      "Descarta todas las peticiones impares en momentos de alta concurrencia."
    ],
    correctAnswerIndex: 0,
    explanation: "`limit_req zone=one burst=20 nodelay;` permite absorber ráfagas legítimas (como la carga inicial de un sitio con 20 assets estáticos) procesándolas de inmediato sin retrasos, pero rechazando con HTTP 503 si el cliente supera el burst asignado.",
    topic: "Rate Limiting y Seguridad",
    difficulty: "avanzado"
  },
  {
    id: "nginx-11",
    collectionId: "nginx",
    question: "¿Cómo se recarga la configuración de NGINX en producción sin provocar tiempo de inactividad (Zero-Downtime Reload)?",
    options: [
      "Ejecutando `nginx -t` para validar la sintaxis y luego `nginx -s reload` (o enviando la señal `SIGHUP` al proceso Master), el cual inicia nuevos Workers con la nueva configuración y ordena a los viejos Workers terminar sus peticiones en curso antes de apagarse limpiamente.",
      "Reiniciando el servidor físico mediante `sudo reboot`.",
      "Matando todos los procesos con `killall -9 nginx` y arrancando el binario de nuevo.",
      "Editando el archivo `/etc/hosts` en el servidor DNS."
    ],
    correctAnswerIndex: 0,
    explanation: "La señal `HUP` permite recargar cambios de configuración, certificados SSL o nuevos sitios sin perder ni una sola conexión en vuelo ni rechazar clientes nuevos durante el proceso de transición.",
    topic: "Operaciones y Zero-Downtime",
    difficulty: "básico"
  },
  {
    id: "nginx-12",
    collectionId: "nginx",
    question: "¿Qué señal del sistema operativo permite actualizar el binario ejecutable de NGINX a una nueva versión compilada sin cerrar conexiones ni detener el servicio?",
    options: [
      "`kill -USR2 $MASTER_PID`",
      "`kill -TERM $MASTER_PID`",
      "`kill -STOP $MASTER_PID`",
      "`kill -INT $MASTER_PID`"
    ],
    correctAnswerIndex: 0,
    explanation: "Al recibir `SIGUSR2`, el Master de NGINX renombra su archivo de PID a `.oldbin`, ejecuta el nuevo binario NGINX en paralelo, hereda los sockets de escucha abiertos y luego permite hacer graceful shutdown del Master viejo enviándole `SIGQUIT`.",
    topic: "Actualización en Caliente de Binarios",
    difficulty: "avanzado"
  },
  {
    id: "nginx-13",
    collectionId: "nginx",
    question: "En la configuración de TLS/SSL, ¿qué es 'OCSP Stapling' (`ssl_stapling on; ssl_stapling_verify on;`) y qué beneficio de rendimiento aporta?",
    options: [
      "NGINX consulta periódicamente al servidor OCSP de la autoridad certificadora (CA) y adjunta ('engrapa') la respuesta firmada y validada del estado de revocación del certificado directamente en el handshake TLS, evitando que cada cliente deba hacer una consulta DNS/HTTP lenta a la CA.",
      "Comprime los certificados TLS utilizando el algoritmo Brotli.",
      "Renueva automáticamente los certificados de Let's Encrypt cada 30 días.",
      "Permite usar certificados autofirmados sin advertencia en los navegadores."
    ],
    correctAnswerIndex: 0,
    explanation: "OCSP Stapling acelera notablemente la negociación TLS inicial (ahorrando cientos de milisegundos de latencia móvil) y mejora la privacidad del usuario, ya que la CA no se entera de qué clientes están visitando el sitio web.",
    topic: "Seguridad TLS y OCSP Stapling",
    difficulty: "intermedio"
  },
  {
    id: "nginx-14",
    collectionId: "nginx",
    question: "¿Cuál es la función de la directiva `server_tokens off;` en NGINX?",
    options: [
      "Oculta el número exacto de versión de NGINX en las cabeceras HTTP de respuesta (`Server: nginx`) y en las páginas de error por defecto, dificultando que atacantes identifiquen vulnerabilidades conocidas asociadas a una versión específica.",
      "Desactiva el soporte de tokens JWT en la aplicación.",
      "Impide el inicio de sesión de usuarios administradores mediante contraseñas.",
      "Elimina las cookies de sesión del navegador del cliente."
    ],
    correctAnswerIndex: 0,
    explanation: "Ocultar la versión del servidor es una recomendación básica de endurecimiento (hardening) de seguridad perimetral para evitar la recolección pasiva de información (fingerprinting / banner grabbing).",
    topic: "Seguridad y Hardening",
    difficulty: "básico"
  },
  {
    id: "nginx-15",
    collectionId: "nginx",
    question: "En una Single Page Application (React, Vue, Angular) con enrutamiento del lado del cliente (HTML5 History API), ¿qué directiva previene que al refrescar una URL profunda (e.g. `/dashboard/perfil`) NGINX retorne un error 404?",
    options: [
      "`try_files $uri $uri/ /index.html;`",
      "`proxy_pass http://localhost:3000;`",
      "`rewrite ^ /index.html break;`",
      "`error_page 404 =200 /404.html;`"
    ],
    correctAnswerIndex: 0,
    explanation: "`try_files` busca primero si existe un archivo físico estático que coincida con `$uri`, luego un directorio `$uri/`, y si ninguno existe, sirve `/index.html` con código 200 para que el router de JavaScript en el navegador tome el control.",
    topic: "Despliegue de Single Page Applications",
    difficulty: "básico"
  },
  {
    id: "nginx-16",
    collectionId: "nginx",
    question: "¿Qué diferencia existe entre las directivas `rewrite` y `return` en NGINX para realizar redirecciones HTTP?",
    options: [
      "`return` es más rápida y eficiente porque detiene el procesamiento inmediatamente y devuelve un código de estado explícito (e.g. `return 301 https://$host$request_uri;`); `rewrite` evalúa expresiones regulares complejas y puede continuar procesando directivas internas si se usa `last` o `break`.",
      "`return` solo puede enviar códigos 200, mientras que `rewrite` solo envía códigos 500.",
      "`rewrite` se ejecuta en el navegador web y `return` se ejecuta en el servidor.",
      "Son sinónimos idénticos y se pueden intercambiar libremente sin diferencias de rendimiento."
    ],
    correctAnswerIndex: 0,
    explanation: "Para redirecciones simples (como forzar HTTPS o cambiar de dominio), la documentación oficial de NGINX recomienda encarecidamente usar `return 301 ...` en lugar de `rewrite`, ya que evita la sobrecarga de evaluación del motor de regex.",
    topic: "Redirecciones y Reescribir URLs",
    difficulty: "intermedio"
  },
  {
    id: "nginx-17",
    collectionId: "nginx",
    question: "¿Qué optimización proporciona el módulo `gzip_static on;` en NGINX?",
    options: [
      "Comprueba si existe un archivo precomprimido `.gz` en disco (e.g. `bundle.js.gz`) correspondiente al archivo solicitado y lo sirve directamente, ahorrando ciclos de CPU del servidor al no tener que comprimir el archivo al vuelo en cada petición.",
      "Comprime todas las imágenes JPEG en formato PNG antes de enviarlas.",
      "Almacena las páginas HTML en una memoria caché de estado sólido.",
      "Elimina todos los espacios en blanco del código fuente de JavaScript."
    ],
    correctAnswerIndex: 0,
    explanation: "Herramientas de build (Webpack, Vite) pueden precomprimir assets en tiempo de compilación con compresión máxima (nivel 9). Con `gzip_static on;`, NGINX sirve el `.gz` existente con zero-copy ahorrando CPU.",
    topic: "Compresión y Rendimiento",
    difficulty: "intermedio"
  },
  {
    id: "nginx-18",
    collectionId: "nginx",
    question: "En la directiva de balanceo `upstream`, ¿qué ocurre si un servidor backend está marcado con el parámetro `backup`?",
    options: [
      "Ese servidor solo recibirá peticiones cuando todos los demás servidores principales configurados en el upstream fallen o se encuentren marcados como caídos (`down`).",
      "El servidor crea una copia de seguridad de la base de datos cada 2 horas.",
      "El servidor solo atiende peticiones originadas por administradores del sistema.",
      "El servidor balancea únicamente tráfico de peticiones POST."
    ],
    correctAnswerIndex: 0,
    explanation: "El parámetro `backup` permite configurar instancias de reserva pasivas que solo se activan en situaciones de emergencia cuando todo el pool principal está saturado o no disponible.",
    topic: "Balanceo de Carga y Resiliencia",
    difficulty: "básico"
  },
  {
    id: "nginx-19",
    collectionId: "nginx",
    question: "¿Cómo mitiga NGINX los ataques de 'Slowloris' (ataques DoS basados en mantener conexiones HTTP abiertas enviando cabeceras a velocidad extremadamente lenta)?",
    options: [
      "Configurando directivas estrictas de temporizadores como `client_body_timeout` y `client_header_timeout` (e.g. 10s o 5s), cerrando las conexiones de clientes que no transmitan datos continuos dentro del intervalo esperado.",
      "Instalando un antivirus en el servidor web.",
      "Aumentando el tamaño del buffer de socket a 100 megabytes.",
      "Desactivando el protocolo TCP en el archivo `nginx.conf`."
    ],
    correctAnswerIndex: 0,
    explanation: "Slowloris intenta agotar los descriptores de archivo y workers manteniendo sockets abiertos enviando 1 byte cada 30 segundos. Temporizadores agresivos en NGINX abortan estas conexiones lentas maliciosas con HTTP 408 (Request Timeout).",
    topic: "Seguridad y Mitigación de Ataques DoS",
    difficulty: "intermedio"
  },
  {
    id: "nginx-20",
    collectionId: "nginx",
    question: "En el bloque `events` de `nginx.conf`, ¿qué calcula la directiva `worker_connections 1024;`?",
    options: [
      "El número máximo de conexiones de red simultáneas (tanto de clientes como hacia servidores upstream) que un único proceso Worker puede mantener abiertas simultáneamente.",
      "El número total de desarrolladores que pueden conectarse por SSH al servidor.",
      "La cantidad de megabytes de memoria RAM asignados a la caché de disco.",
      "La tasa máxima de transferencias FTP por segundo."
    ],
    correctAnswerIndex: 0,
    explanation: "La capacidad máxima teórica de conexiones de NGINX es `worker_processes * worker_connections`. En Linux, este valor debe estar respaldado por un límite suficiente de descriptores de archivo en el SO (`ulimit -n` y `worker_rlimit_nofile`).",
    topic: "Configuración Core y Eventos",
    difficulty: "intermedio"
  },
  {
    id: "nginx-21",
    collectionId: "nginx",
    question: "¿Cuál es la diferencia de comportamiento en `proxy_pass` si se incluye una barra final `/` al final de la URL del upstream frente a no incluirla?",
    options: [
      "Si la URI está presente (e.g. `proxy_pass http://backend/;`), NGINX reemplaza la parte del path que coincidió con el `location` por esa URI; si no hay URI (e.g. `proxy_pass http://backend;`), NGINX pasa la URI original del cliente intacta al backend.",
      "Incluir la barra final activa la compresión Gzip automáticamente.",
      "Sin la barra final NGINX rechaza todas las peticiones con código 400 Bad Request.",
      "No existe ninguna diferencia y ambas sintaxis se comportan exactamente igual."
    ],
    correctAnswerIndex: 0,
    explanation: "Esta es una de las sutilezas más notorias de NGINX: en `location /api/ { proxy_pass http://backend/; }`, la petición `/api/usuarios` se envía al backend como `/usuarios`. Si fuera `proxy_pass http://backend;`, se enviaría como `/api/usuarios`.",
    topic: "Reverse Proxy y Reescritura de Rutas",
    difficulty: "avanzado"
  },
  {
    id: "nginx-22",
    collectionId: "nginx",
    question: "En la configuración de seguridad de cabeceras en NGINX, ¿qué directiva protege contra ataques de 'Clickjacking' impidiendo que el sitio sea embebido en `<iframe>` no autorizados?",
    options: [
      "`add_header X-Frame-Options \"SAMEORIGIN\" always;` (o la directiva moderna CSP `frame-ancestors 'self'`).",
      "`add_header X-XSS-Protection \"1; mode=block\";`",
      "`add_header Strict-Transport-Security \"max-age=31536000\";`",
      "`add_header Content-Type \"text/html; charset=UTF-8\";`"
    ],
    correctAnswerIndex: 0,
    explanation: "`X-Frame-Options: SAMEORIGIN` impide que sitios web externos maliciosos incrusten la página dentro de un iframe transparente para engañar al usuario haciéndole hacer clic en botones ocultos.",
    topic: "Cabeceras de Seguridad HTTP",
    difficulty: "básico"
  },
  {
    id: "nginx-23",
    collectionId: "nginx",
    question: "¿Para qué sirve el parámetro `always` en la directiva `add_header` de NGINX?",
    options: [
      "Fuerza a que la cabecera HTTP se incluya en todas las respuestas, incluso en respuestas con códigos de error (4xx y 5xx), las cuales por defecto omiten las cabeceras declaradas sin este modificador.",
      "Impide que los clientes modifiquen la cabecera en el navegador.",
      "Cifra la cabecera con el protocolo TLS 1.3.",
      "Envía la cabecera dos veces en cada respuesta para asegurar su recepción."
    ],
    correctAnswerIndex: 0,
    explanation: "Por defecto, `add_header` solo añade cabeceras a respuestas exitosas (200, 201, 204, 301, 302, etc.). Si no se incluye `always`, cabeceras críticas como CORS o de seguridad se omitirán en errores 404 o 500, rompiendo clientes web.",
    topic: "Cabeceras y add_header",
    difficulty: "intermedio"
  },
  {
    id: "nginx-24",
    collectionId: "nginx",
    question: "En NGINX, ¿qué permite el módulo 'Stream' (`stream { ... }`) frente al módulo tradicional 'HTTP' (`http { ... }`)?",
    options: [
      "Permite balancear y proxificar tráfico genérico a nivel de capa de transporte (TCP y UDP), como conexiones directas a bases de datos (MySQL, PostgreSQL), servidores DNS o proxies de correo, sin parsear cabeceras HTTP.",
      "Permite reproducir vídeos de YouTube en formato streaming dentro de la consola del servidor.",
      "Transmite archivos de audio a través de la tarjeta de sonido del servidor.",
      "Permite ejecutar consultas SQL directamente sobre archivos de logs."
    ],
    correctAnswerIndex: 0,
    explanation: "El módulo Stream opera en las capas 4 (TCP/UDP) del modelo OSI. Es idóneo para balancear conexiones de bases de datos, brokers MQTT o servicios gRPC puros con bajísima sobrecarga de procesamiento.",
    topic: "Módulo Stream (Capa 4 TCP/UDP)",
    difficulty: "intermedio"
  },
  {
    id: "nginx-25",
    collectionId: "nginx",
    question: "¿Qué función cumple la variable `$request_id` introducida de forma nativa en NGINX?",
    options: [
      "Genera un identificador único aleatorio hexadecimal de 32 caracteres por cada petición HTTP recibida, ideal para inyectar como cabecera `X-Request-ID` hacia el backend y correlacionar logs en observabilidad distribuida.",
      "Almacena la contraseña del usuario que realizó la petición.",
      "Es el número de secuencia TCP del paquete de entrada.",
      "El número de veces que se ha reiniciado el proceso Master de NGINX."
    ],
    correctAnswerIndex: 0,
    explanation: "Configurar `proxy_set_header X-Request-ID $request_id;` y loguear `$request_id` en el `access_log` permite correlacionar de inmediato una entrada de acceso en NGINX con las trazas y logs internos de los microservicios aguas abajo.",
    topic: "Variables Nativas y Trazabilidad",
    difficulty: "intermedio"
  },
  {
    id: "nginx-26",
    collectionId: "nginx",
    question: "¿Cómo optimiza la directiva `ssl_session_cache shared:SSL:10m;` el rendimiento del protocolo HTTPS en NGINX?",
    options: [
      "Crea un segmento de memoria compartida entre todos los procesos Worker que almacena los parámetros de las sesiones TLS negociadas previamente, permitiendo que clientes que reconectan reutilicen la sesión mediante Session IDs sin repetir el costoso handshake asimétrico de clave pública.",
      "Guarda los certificados SSL en discos ópticos no volátiles.",
      "Descarga automáticamente nuevos certificados desde los servidores de Mozilla.",
      "Reduce el tamaño de las claves privadas a 128 bits para acelerar el cifrado."
    ],
    correctAnswerIndex: 0,
    explanation: "El apretón de manos TLS asimétrico consume muchos ciclos de CPU. Reutilizar la sesión mediante la memoria compartida (`shared`) ahorra un viaje de ida y vuelta (1 RTT) y cómputo criptográfico en conexiones subsecuentes.",
    topic: "Optimización SSL/TLS",
    difficulty: "intermedio"
  },
  {
    id: "nginx-27",
    collectionId: "nginx",
    question: "¿Qué directiva de NGINX previene ataques de 'MIME Sniffing' forzando al navegador a respetar estrictamente el `Content-Type` declarado por el servidor?",
    options: [
      "`add_header X-Content-Type-Options \"nosniff\" always;`",
      "`add_header Content-Security-Policy \"default-src 'self'\";`",
      "`default_type application/octet-stream;`",
      "`types_hash_max_size 2048;`"
    ],
    correctAnswerIndex: 0,
    explanation: "Sin `nosniff`, algunos navegadores antiguos o vulnerables intentan adivinar el tipo de archivo analizando sus primeros bytes: un archivo subido como `.jpg` pero que contenga código JavaScript ejecutable podría ser ejecutado como script.",
    topic: "Seguridad y MIME Types",
    difficulty: "básico"
  },
  {
    id: "nginx-28",
    collectionId: "nginx",
    question: "En NGINX, ¿cuál es el propósito de la directiva `internal` dentro de un bloque `location`?",
    options: [
      "Especifica que ese bloque location solo puede ser alcanzado mediante peticiones internas generadas por NGINX (como redirecciones internas `error_page`, `try_files` o mediante la cabecera `X-Accel-Redirect`), retornando 404 a cualquier petición externa directa del cliente.",
      "Indica que el bloque solo es accesible desde la red local de la empresa.",
      "Compila las directivas para que se ejecuten dentro del kernel de Linux.",
      "Oculta el código de configuración en las herramientas de inspección."
    ],
    correctAnswerIndex: 0,
    explanation: "La directiva `internal` es la base del patrón de descarga segura `X-Accel-Redirect`: el backend autentica al usuario y envía una cabecera con la ruta protegida; NGINX intercepta esa cabecera y sirve el archivo estático con cero copias sin exponer la ruta privada a la web.",
    topic: "Descarga Segura y X-Accel-Redirect",
    difficulty: "avanzado"
  },
  {
    id: "nginx-29",
    collectionId: "nginx",
    question: "¿Qué efecto tiene configurar la directiva `client_max_body_size 0;` en NGINX?",
    options: [
      "Desactiva por completo la comprobación del tamaño del cuerpo de la petición del cliente, permitiendo subidas de archivos de tamaño ilimitado hacia el servidor backend.",
      "Rechaza cualquier petición que contenga un cuerpo HTTP con código 413 Payload Too Large.",
      "Limita el tamaño máximo de subida a exactamente 0 bytes.",
      "Fuerza a los clientes a comprimir sus archivos en formato RAR antes de enviarlos."
    ],
    correctAnswerIndex: 0,
    explanation: "Por defecto NGINX tiene `client_max_body_size 1m;` (1 megabyte). Configurar `0` desactiva el límite, siendo necesario en endpoints de carga de vídeos masivos o buckets S3 compatibles.",
    topic: "Gestión de Cargas y Buffers",
    difficulty: "básico"
  },
  {
    id: "nginx-30",
    collectionId: "nginx",
    question: "En la directiva `listen` de NGINX, ¿qué ventaja introduce el parámetro `reuseport` en Linux kernel 3.9+?",
    options: [
      "Permite que cada proceso Worker cree un socket de escucha independiente con el flag `SO_REUSEPORT`; el kernel de Linux balancea automáticamente las conexiones entrantes a nivel de hardware entre todos los Workers evitando el cuello de botella de contención en un único socket compartido.",
      "Permite que dos dominios diferentes compartan la misma dirección IP.",
      "Abre el puerto 443 para conexiones sin cifrar.",
      "Duplica el número de puertos TCP disponibles en el sistema operativo a 131,070."
    ],
    correctAnswerIndex: 0,
    explanation: "`reuseport` elimina el problema del 'thundering herd' y la contención de candados en el socket de escucha en servidores multi-núcleo masivos, incrementando el rendimiento de establecimiento de conexiones hasta en un 200%.",
    topic: "Rendimiento Avanzado del Kernel",
    difficulty: "avanzado"
  }
];
