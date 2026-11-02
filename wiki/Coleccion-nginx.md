# NGINX (NGINX)

> **Servidor web, reverse proxy, balanceo, TLS, caché y operación.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `nginx` |
| **Grupo Arquitectonico** | [Infraestructura y entrega](Grupo-Delivery) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `nginx` |
| **Total de Conceptos** | **313 conceptos** |
| **Capitulos / Secciones** | **12 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/nginx)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/nginx-en-accion)



---

## Catalogo Sistematico de Conceptos (313)

### Seccion: Arquitectura y modelo de ejecución (18 conceptos)

- **Qué es NGINX**  
  *Familia:* `anatomía del concepto`  
  Servidor web orientado a eventos que también funciona como reverse proxy, balanceador, caché y gateway de aplicaciones.

- **NGINX Open Source y NGINX Plus**  
  *Familia:* `topología y tráfico`  
  Distingue la base abierta de las capacidades comerciales como health checks activos, API dinámica, métricas ampliadas y persistencia de estado.

- **Servidor web, proxy y gateway**  
  *Familia:* `ida y vuelta`  
  Una misma instancia puede servir archivos, terminar TLS, enrutar peticiones y delegar trabajo a aplicaciones.

- **Arquitectura orientada a eventos**  
  *Familia:* `capas internas`  
  Un worker atiende muchas conexiones mediante eventos en lugar de dedicar un thread bloqueante a cada cliente.

- **Proceso master**  
  *Familia:* `análisis y emisión`  
  Lee la configuración, abre recursos privilegiados, administra workers y coordina reloads o upgrades.

- **Procesos worker**  
  *Familia:* `cola y consumidor`  
  Procesan conexiones y peticiones con privilegios reducidos después de que el master prepara sockets y configuración.

- **Worker connections**  
  *Familia:* `planificación de trabajo`  
  Define cuántas conexiones simultáneas puede manejar cada worker, limitado además por file descriptors y conexiones upstream.

- **Event loop del worker**  
  *Familia:* `flujo de transformación`  
  Espera eventos de lectura, escritura, timers y señales para avanzar cada conexión sin bloquear el proceso completo.

- **I/O no bloqueante**  
  *Familia:* `árbol de recursos`  
  Permite suspender una operación pendiente y atender otras conexiones mientras el kernel espera red o disco.

- **epoll, kqueue y event methods**  
  *Familia:* `flujo de ejecución`  
  NGINX selecciona el mecanismo eficiente del sistema operativo para observar grandes conjuntos de descriptores.

- **Aceptación de conexiones**  
  *Familia:* `ciclo de vida`  
  Los workers comparten sockets de escucha y coordinan qué proceso acepta el siguiente cliente.

- **accept_mutex y reuseport**  
  *Familia:* `máquina de estados`  
  Representan estrategias distintas para distribuir nuevas conexiones entre workers según plataforma y configuración.

- **Afinidad de CPU**  
  *Familia:* `secuencia operativa`  
  worker_cpu_affinity puede fijar workers a CPUs concretas cuando el perfil y la topología justifican esa optimización.

- **Ciclo de vida de una petición**  
  *Familia:* `ecosistema coordinado`  
  Conecta aceptación, lectura de headers, selección de servidor, fases HTTP, upstream o archivo y escritura de respuesta.

- **Fases del módulo HTTP**  
  *Familia:* `acumulación de recursos`  
  Rewrite, access, content, filters y logging participan en momentos distintos del procesamiento.

- **Filtros de respuesta**  
  *Familia:* `tabla de estados`  
  Headers, compresión, range y body filters transforman la respuesta antes de enviarla al cliente.

- **Módulos estáticos**  
  *Familia:* `contratos coordinados`  
  Se compilan dentro del binario y aportan directivas, handlers o filtros disponibles desde el arranque.

- **Módulos dinámicos**  
  *Familia:* `propagación de eventos`  
  Se cargan con load_module cuando fueron construidos como módulos compatibles con ese binario.


### Seccion: Instalación, procesos y configuración (20 conceptos)

- **Paquetes oficiales y de la distribución**  
  *Familia:* `superficie de aplicación`  
  Compara versiones, rutas, módulos y políticas de actualización antes de elegir el origen del paquete.

- **Stable y mainline**  
  *Familia:* `topología y tráfico`  
  La rama mainline recibe funciones y correcciones continuamente; stable cambia con menor frecuencia sin significar una rama más probada en todos los casos.

- **Compilación desde código fuente**  
  *Familia:* `análisis y emisión`  
  Permite seleccionar módulos, paths, bibliotecas TLS y opciones de build que no ofrece un paquete precompilado.

- **Opciones de configure**  
  *Familia:* `configuración declarativa`  
  Los flags --with, --without y --add-dynamic-module determinan capacidades y rutas embebidas en el binario.

- **nginx -V**  
  *Familia:* `tabla de estados`  
  Muestra versión, compilador, biblioteca TLS y argumentos de build necesarios para reproducir o depurar la instalación.

- **Prefix, conf-path y módulos**  
  *Familia:* `jerarquía y dependencias`  
  Las rutas compiladas definen ubicación por defecto de configuración, logs, PID, temporales y módulos.

- **Estructura de nginx.conf**  
  *Familia:* `validación y decisión`  
  Organiza directivas simples y bloques anidados como main, events, http, stream y mail.

- **Directivas y contextos**  
  *Familia:* `capas internas`  
  Cada directiva solo es válida en contextos concretos y su posición cambia alcance, herencia y momento de evaluación.

- **include**  
  *Familia:* `consulta e índice`  
  Divide la configuración en archivos reutilizables y puede expandir patrones glob en el momento de carga.

- **nginx -t**  
  *Familia:* `anatomía del concepto`  
  Valida sintaxis y apertura de recursos referenciados antes de intentar aplicar una configuración.

- **nginx -T**  
  *Familia:* `flujo de transformación`  
  Valida y además imprime la configuración efectiva completa con todos los includes expandidos.

- **Señal start y arranque**  
  *Familia:* `propagación de eventos`  
  Al iniciar, NGINX parsea toda la configuración, abre logs y sockets, y solo después crea workers.

- **stop frente a quit**  
  *Familia:* `secuencia operativa`  
  stop termina rápidamente; quit solicita cierre graceful para finalizar conexiones activas antes de salir.

- **reload graceful**  
  *Familia:* `diagnóstico operativo`  
  El master valida la nueva configuración, abre recursos nuevos, inicia workers nuevos y pide retiro ordenado de los anteriores.

- **reopen de logs**  
  *Familia:* `evidencia y latencia`  
  La señal reopen cierra y vuelve a abrir archivos de log para integrarse con rotación externa.

- **PID file**  
  *Familia:* `máquina de estados`  
  Permite que herramientas y scripts encuentren el master correcto al enviar señales de operación.

- **Integración con systemd**  
  *Familia:* `planificación de trabajo`  
  La unit define usuario, límites, validación, señales y reinicios; no reemplaza la semántica graceful propia de NGINX.

- **user directive**  
  *Familia:* `flujo de ejecución`  
  Los workers cambian a una identidad no privilegiada; esa cuenta necesita acceso efectivo a contenido, sockets y temporales.

- **Directorios temporales**  
  *Familia:* `árbol de recursos`  
  Client body, proxy, FastCGI y caché pueden escribir archivos temporales que requieren capacidad y permisos correctos.

- **Upgrade de binario sin cortar servicio**  
  *Familia:* `acumulación de recursos`  
  El master puede iniciar un binario nuevo conservando sockets heredados y permitir rollback al proceso anterior.


### Seccion: Selección de servidor, location y URI (28 conceptos)

- **Bloques server**  
  *Familia:* `contratos coordinados`  
  Cada server representa un virtual host asociado a sockets listen, nombres y reglas de procesamiento.

- **listen**  
  *Familia:* `memoria intermedia`  
  Define dirección, puerto y parámetros del socket, incluidos default_server, ssl, http2, quic, reuseport o proxy_protocol.

- **default_server**  
  *Familia:* `secuencia operativa`  
  Selecciona el server usado cuando el Host no coincide; pertenece al par address:port y no al nombre del sitio.

- **server_name exacto**  
  *Familia:* `cola y consumidor`  
  Los nombres exactos tienen prioridad sobre wildcards y expresiones regulares compatibles con el socket elegido.

- **server_name con wildcard**  
  *Familia:* `planificación de trabajo`  
  Patrones como *.example.com cubren familias de hosts y siguen reglas específicas de precedencia.

- **server_name con regex**  
  *Familia:* `ida y vuelta`  
  Las expresiones regulares se evalúan en orden de aparición y pueden capturar valores usados después.

- **Selección por IP y puerto**  
  *Familia:* `topología y tráfico`  
  NGINX primero elige el conjunto de servers cuyo listen coincide con la conexión entrante.

- **Selección por Host**  
  *Familia:* `consulta e índice`  
  Después compara el campo Host o el nombre de la línea de petición con server_name dentro del socket seleccionado.

- **SNI y selección TLS**  
  *Familia:* `anatomía del concepto`  
  Durante el handshake, SNI puede decidir certificado y parte de la configuración antes de conocer la petición HTTP completa.

- **Normalización de URI**  
  *Familia:* `capas internas`  
  NGINX decodifica ciertos escapes, resuelve componentes relativos y comprime barras antes de comparar locations.

- **location exacta**  
  *Familia:* `evidencia y latencia`  
  location = /ruta gana inmediatamente cuando la URI normalizada coincide de forma exacta.

- **location por prefijo**  
  *Familia:* `configuración declarativa`  
  NGINX recuerda el prefijo más largo antes de evaluar expresiones regulares aplicables.

- **Modificador ^~**  
  *Familia:* `ciclo de vida`  
  Si el prefijo más largo usa ^~, NGINX evita probar locations regex al nivel correspondiente.

- **location regex**  
  *Familia:* `tabla de estados`  
  Las expresiones regulares se prueban en orden de configuración y la primera coincidencia selecciona el bloque.

- **Regex sensible e insensible**  
  *Familia:* `comparativa técnica`  
  ~ distingue mayúsculas; ~* compara sin distinguirlas, con el costo y complejidad propios de regex.

- **Locations anidadas**  
  *Familia:* `propagación de eventos`  
  El árbol de locations combina prefijos y regex; su resolución requiere entender el nivel donde fue hallado cada candidato.

- **Named locations**  
  *Familia:* `ecosistema coordinado`  
  Bloques @name son destinos internos usados por try_files, error_page o módulos, no URIs solicitables directamente.

- **internal**  
  *Familia:* `máquina de estados`  
  Marca una location como accesible solo desde redirecciones internas, subrequests o mecanismos internos de NGINX.

- **try_files**  
  *Familia:* `aislamiento sobre host`  
  Comprueba existencia de archivos en orden y termina usando una URI, código o named location de fallback.

- **root frente a alias**  
  *Familia:* `análisis y emisión`  
  root concatena la URI; alias sustituye la parte correspondiente de la location y exige especial cuidado con regex y barras.

- **index**  
  *Familia:* `jerarquía y dependencias`  
  Busca archivos índice y puede producir una redirección interna que vuelve a ejecutar selección de location.

- **error_page**  
  *Familia:* `diagnóstico operativo`  
  Transforma errores en URIs internas, named locations o respuestas externas, y puede cambiar el código devuelto.

- **return**  
  *Familia:* `superficie de aplicación`  
  Finaliza temprano con un código, redirect o cuerpo simple sin ejecutar reglas de routing innecesarias.

- **rewrite**  
  *Familia:* `comparativa técnica`  
  Aplica expresiones regulares y reemplazos durante fases rewrite, pudiendo provocar una nueva búsqueda de location.

- **last y break**  
  *Familia:* `flujo de transformación`  
  last inicia otra resolución de URI; break detiene el conjunto actual sin reiniciar selection de location.

- **Redirección interna**  
  *Familia:* `flujo de ejecución`  
  try_files, rewrite, index y error_page pueden cambiar URI dentro del servidor sin emitir un redirect al cliente.

- **Variables bajo demanda**  
  *Familia:* `contratos coordinados`  
  Muchas variables se calculan solo cuando una directiva realmente las usa, evitando trabajo por declaraciones no consultadas.

- **map**  
  *Familia:* `memoria intermedia`  
  Crea una variable derivada de otra mediante coincidencias exactas, masks, regex y un valor default en contexto http.


### Seccion: Servidor web y contenido estático (22 conceptos)

- **Document root**  
  *Familia:* `acumulación de recursos`  
  Relaciona una URI con un path del filesystem desde el que NGINX puede abrir y enviar contenido.

- **Virtual hosting de sitios**  
  *Familia:* `configuración declarativa`  
  Distintos server blocks pueden servir roots, certificados y políticas diferentes desde una misma instancia.

- **MIME types**  
  *Familia:* `capas internas`  
  El mapa types asocia extensiones con Content-Type y default_type cubre archivos sin coincidencia.

- **Archivos índice**  
  *Familia:* `árbol de recursos`  
  index define candidatos por directorio y puede usar variables para escoger el recurso inicial.

- **Autoindex**  
  *Familia:* `consulta e índice`  
  Genera listados de directorio cuando no existe índice y la política lo permite; normalmente se desactiva en contenido sensible.

- **sendfile**  
  *Familia:* `validación y decisión`  
  Pide al kernel transferir archivos al socket con menos copias entre user space y kernel space.

- **tcp_nopush**  
  *Familia:* `ida y vuelta`  
  Puede alinear headers y bloques grandes cuando sendfile está activo para reducir paquetes parciales.

- **tcp_nodelay**  
  *Familia:* `topología y tráfico`  
  Reduce espera de paquetes pequeños en conexiones keep-alive cuando la latencia importa más que agrupar envíos.

- **AIO y thread pools**  
  *Familia:* `cola y consumidor`  
  Delegan lecturas de disco que podrían bloquear workers, según filesystem, tamaño y plataforma.

- **directio**  
  *Familia:* `contratos coordinados`  
  Evita page cache para archivos grandes en configuraciones donde la doble caché perjudica el workload.

- **Range requests**  
  *Familia:* `flujo de transformación`  
  Permite servir fragmentos de archivos y responder 206 cuando el recurso y la política admiten rangos.

- **ETag**  
  *Familia:* `memoria intermedia`  
  Genera un validador de representación usado por If-None-Match para respuestas condicionales.

- **Last-Modified**  
  *Familia:* `análisis y emisión`  
  Expone tiempo de modificación y participa en validación condicional con If-Modified-Since.

- **304 Not Modified**  
  *Familia:* `evidencia y latencia`  
  Evita reenviar el cuerpo cuando los validadores demuestran que la copia del cliente sigue vigente.

- **expires y Cache-Control**  
  *Familia:* `comparativa técnica`  
  Configuran frescura del navegador o CDN sin convertir automáticamente a NGINX en un proxy cache.

- **add_header always**  
  *Familia:* `superficie de aplicación`  
  Agrega headers también a códigos que no pertenecen al conjunto por defecto cuando se usa el parámetro always.

- **open_file_cache**  
  *Familia:* `secuencia operativa`  
  Conserva descriptores, metadata y errores de apertura para reducir syscalls en contenido consultado repetidamente.

- **disable_symlinks**  
  *Familia:* `aislamiento sobre host`  
  Restringe acceso a contenido atravesando symbolic links según ownership o política de seguridad.

- **Permisos del filesystem**  
  *Familia:* `jerarquía y dependencias`  
  El worker necesita execute en directorios y read en archivos; root puede ocultar fallos que el usuario real sufrirá.

- **SPA fallback**  
  *Familia:* `tabla de estados`  
  try_files puede servir index.html para rutas de cliente sin convertir errores de assets en respuestas HTML accidentalmente.

- **Páginas de error estáticas**  
  *Familia:* `diagnóstico operativo`  
  Mantienen una respuesta disponible incluso cuando la aplicación upstream está caída o saturada.

- **Precompressed static files**  
  *Familia:* `planificación de trabajo`  
  gzip_static puede elegir archivos .gz generados en build cuando el cliente anuncia soporte compatible.


### Seccion: Reverse proxy y aplicaciones upstream (35 conceptos)

- **Reverse proxy**  
  *Familia:* `ida y vuelta`  
  NGINX recibe la conexión del cliente, crea o reutiliza otra hacia el upstream y traduce la respuesta entre ambas.

- **proxy_pass**  
  *Familia:* `topología y tráfico`  
  Envía la petición a una URL, server group o socket UNIX y determina cómo se construye la URI upstream.

- **Semántica de URI en proxy_pass**  
  *Familia:* `flujo de ejecución`  
  La presencia de una URI en proxy_pass puede reemplazar la parte de la URI que coincidió con location.

- **Grupos upstream**  
  *Familia:* `flujo de transformación`  
  Nombran conjuntos de servidores y concentran balanceo, fallos, keepalive y estado compartido.

- **proxy_set_header Host**  
  *Familia:* `secuencia operativa`  
  Controla el Host visto por la aplicación, esencial para virtual hosts, URLs absolutas y validaciones de origen.

- **X-Real-IP**  
  *Familia:* `evidencia y latencia`  
  Transmite una dirección de cliente elegida por la configuración, sin ser confiable si cualquier cliente puede escribirla.

- **X-Forwarded-For**  
  *Familia:* `cola y consumidor`  
  Construye una cadena de proxies; cada salto debe decidir qué miembros son de confianza antes de usarla.

- **X-Forwarded-Proto**  
  *Familia:* `validación y decisión`  
  Indica el esquema externo para redirects, cookies secure y generación de URLs cuando TLS termina en NGINX.

- **Forwarded**  
  *Familia:* `configuración declarativa`  
  Header estandarizado que puede representar for, proto, host y by, aunque muchas aplicaciones siguen usando X-Forwarded-*.

- **Real IP module**  
  *Familia:* `planificación de trabajo`  
  Reemplaza la dirección visible con datos de proxies confiables configurados mediante set_real_ip_from.

- **proxy_http_version**  
  *Familia:* `aislamiento sobre host`  
  Selecciona la versión HTTP hacia el upstream y afecta keepalive, WebSocket y características disponibles.

- **Keepalive upstream**  
  *Familia:* `acumulación de recursos`  
  Mantiene conexiones inactivas por worker para evitar handshakes TCP repetidos; no limita conexiones totales.

- **proxy_request_buffering**  
  *Familia:* `máquina de estados`  
  Decide si NGINX recibe todo el body antes de enviarlo o lo transmite progresivamente al upstream.

- **proxy_buffering**  
  *Familia:* `contratos coordinados`  
  Cuando está activo, NGINX lee el upstream con rapidez y amortigua la velocidad del cliente mediante memoria o disco.

- **proxy_buffer_size**  
  *Familia:* `consulta e índice`  
  Reserva el buffer inicial que normalmente contiene headers de la respuesta upstream.

- **proxy_buffers**  
  *Familia:* `jerarquía y dependencias`  
  Define número y tamaño de buffers usados para el resto de una respuesta proxied.

- **Archivos temporales de proxy**  
  *Familia:* `árbol de recursos`  
  Una respuesta mayor que los buffers puede pasar a disco, afectando latencia, I/O y capacidad.

- **proxy_connect_timeout**  
  *Familia:* `capas internas`  
  Limita el tiempo para establecer conexión con el upstream, no el tiempo total de la petición.

- **proxy_send_timeout**  
  *Familia:* `ciclo de vida`  
  Limita intervalos entre operaciones de escritura hacia el upstream.

- **proxy_read_timeout**  
  *Familia:* `ecosistema coordinado`  
  Limita intervalos entre lecturas desde el upstream; no representa un deadline absoluto del request.

- **proxy_next_upstream**  
  *Familia:* `ida y vuelta`  
  Define qué fallos permiten intentar otro servidor y cuándo deja de ser seguro repetir la operación.

- **Reintentos y métodos no idempotentes**  
  *Familia:* `diagnóstico operativo`  
  Repetir POST después de enviar parte del body puede duplicar trabajo; retries requieren semántica de idempotencia.

- **proxy_intercept_errors**  
  *Familia:* `tabla de estados`  
  Permite que error_page procese respuestas upstream con códigos configurados en lugar de pasarlas directamente.

- **proxy_redirect**  
  *Familia:* `topología y tráfico`  
  Reescribe Location y Refresh devueltos por el upstream para que reflejen la URL pública.

- **Reescritura de cookies**  
  *Familia:* `memoria intermedia`  
  proxy_cookie_domain, path y flags ajustan dominio, ruta, SameSite, Secure o HttpOnly de Set-Cookie.

- **Tamaño máximo del body**  
  *Familia:* `comparativa técnica`  
  client_max_body_size rechaza cargas demasiado grandes antes de transferirlas a la aplicación.

- **WebSocket proxying**  
  *Familia:* `flujo de ejecución`  
  Reenvía Upgrade y Connection explícitamente porque son headers hop-by-hop y mantiene el túnel abierto.

- **gRPC proxying**  
  *Familia:* `flujo de transformación`  
  grpc_pass conecta clientes HTTP/2 con servicios gRPC y dispone de headers, timeouts y error handling específicos.

- **FastCGI y PHP-FPM**  
  *Familia:* `análisis y emisión`  
  fastcgi_pass envía parámetros y cuerpo mediante FastCGI; SCRIPT_FILENAME debe mapear el archivo correcto.

- **uwsgi y SCGI**  
  *Familia:* `superficie de aplicación`  
  Módulos dedicados traducen la petición a protocolos de aplicaciones que no hablan HTTP directamente.

- **Socket UNIX upstream**  
  *Familia:* `cola y consumidor`  
  Evita TCP local y usa permisos del filesystem como parte de la política de acceso entre procesos.

- **TLS hacia el upstream**  
  *Familia:* `secuencia operativa`  
  proxy_ssl_* controla SNI, trusted CA, protocolos y verificación de certificados del backend HTTPS.

- **DNS dinámico de upstream**  
  *Familia:* `acumulación de recursos`  
  resolver y parámetros resolve permiten refrescar direcciones sin depender únicamente de resolución al arranque.

- **auth_request**  
  *Familia:* `validación y decisión`  
  Realiza un subrequest de autorización y permite o niega la petición principal según el código resultante.

- **mirror**  
  *Familia:* `propagación de eventos`  
  Duplica peticiones en background para shadow traffic o validación, descartando la respuesta del destino espejo.


### Seccion: Balanceo, salud y resiliencia (24 conceptos)

- **Round robin**  
  *Familia:* `ecosistema coordinado`  
  Distribuye peticiones de forma cíclica y es el método por defecto cuando no se elige otro algoritmo.

- **Weighted round robin**  
  *Familia:* `acumulación de recursos`  
  Los pesos cambian la proporción de tráfico asignada a servidores con capacidades distintas.

- **Least connections**  
  *Familia:* `análisis y emisión`  
  Elige el servidor con menos conexiones activas, considerando pesos cuando están configurados.

- **ip_hash**  
  *Familia:* `consulta e índice`  
  Usa la dirección del cliente para afinidad simple, con limitaciones frente a NAT, proxies y cambios de pool.

- **Hash genérico**  
  *Familia:* `planificación de trabajo`  
  Calcula el upstream a partir de variables como host, URI o cookie para afinidad controlada.

- **Consistent hash**  
  *Familia:* `ciclo de vida`  
  Reduce remapeo de claves cuando cambia el pool, útil para caches o particiones con afinidad.

- **Random**  
  *Familia:* `jerarquía y dependencias`  
  Selecciona servidores aleatoriamente y puede comparar dos candidatos según conexiones cuando se usa random two.

- **Health checks pasivos**  
  *Familia:* `contratos coordinados`  
  NGINX infiere fallos a partir de errores reales de conexión o respuesta observados durante tráfico.

- **max_fails**  
  *Familia:* `comparativa técnica`  
  Marca cuántos fallos dentro de fail_timeout pueden considerar temporalmente no disponible a un servidor.

- **fail_timeout**  
  *Familia:* `validación y decisión`  
  Define ventana de conteo y periodo aproximado de exclusión en health checking pasivo.

- **Servidor backup**  
  *Familia:* `configuración declarativa`  
  Solo recibe tráfico cuando los servidores primarios no están disponibles según la política del upstream.

- **Servidor down**  
  *Familia:* `tabla de estados`  
  Retira explícitamente un miembro del balanceo conservando su definición y, en algunos algoritmos, el mapeo.

- **Shared memory zone**  
  *Familia:* `memoria intermedia`  
  Comparte configuración y estado de upstream entre workers mediante la directiva zone.

- **Keepalive pool**  
  *Familia:* `máquina de estados`  
  Cada worker conserva conexiones upstream inactivas; el tamaño debe coordinarse con límites del backend.

- **Active health checks**  
  *Familia:* `aislamiento sobre host`  
  NGINX Plus puede sondear endpoints sin esperar tráfico real y validar códigos, headers o cuerpos.

- **Slow start**  
  *Familia:* `flujo de transformación`  
  NGINX Plus puede reintroducir gradualmente un servidor recuperado para evitar una ráfaga inmediata.

- **Session persistence**  
  *Familia:* `cola y consumidor`  
  NGINX Plus ofrece mecanismos sticky adicionales; en Open Source se usan hash, ip_hash o estado externo según el caso.

- **Connection draining**  
  *Familia:* `diagnóstico operativo`  
  Retira un servidor de nuevas selecciones mientras las conexiones o sesiones existentes terminan ordenadamente.

- **Service discovery**  
  *Familia:* `flujo de ejecución`  
  DNS y APIs dinámicas permiten que el pool acompañe instancias efímeras sin recargar manualmente cada cambio.

- **Resolver TTL**  
  *Familia:* `ida y vuelta`  
  El periodo de validez determina cuánto tiempo NGINX conserva una respuesta DNS antes de consultarla otra vez.

- **SRV records**  
  *Familia:* `árbol de recursos`  
  Pueden aportar host, puerto, prioridad y peso para servicios descubiertos dinámicamente en configuraciones compatibles.

- **Retries con deadline**  
  *Familia:* `propagación de eventos`  
  El número de intentos, timeout y tiempo total deben limitarse para no amplificar una caída upstream.

- **Colas upstream**  
  *Familia:* `topología y tráfico`  
  NGINX Plus puede encolar peticiones cuando todos los servidores alcanzan límites, con timeout y tamaño explícitos.

- **Failure domains**  
  *Familia:* `máquina de estados`  
  Un pool útil distribuye instancias entre hosts o zonas y evita que todos los miembros compartan el mismo punto de fallo.


### Seccion: TLS, HTTP/2, HTTP/3 y seguridad (30 conceptos)

- **Terminación TLS**  
  *Familia:* `secuencia operativa`  
  NGINX negocia cifrado con el cliente y puede hablar HTTP o HTTPS hacia el upstream según la frontera de confianza.

- **ssl_certificate y ssl_certificate_key**  
  *Familia:* `validación y decisión`  
  Relacionan la cadena pública con la clave privada que el worker necesita leer de forma protegida.

- **Cadena de certificados**  
  *Familia:* `árbol de recursos`  
  El archivo debe incluir intermediarios en el orden correcto para que el cliente construya una ruta de confianza.

- **SNI con múltiples certificados**  
  *Familia:* `capas internas`  
  El nombre enviado en el ClientHello permite elegir certificado antes de recibir headers HTTP.

- **TLS 1.2 y TLS 1.3**  
  *Familia:* `flujo de ejecución`  
  ssl_protocols restringe versiones admitidas según compatibilidad y política de seguridad.

- **Cipher suites**  
  *Familia:* `anatomía del concepto`  
  La selección depende de versión TLS y biblioteca criptográfica; debe evaluarse con clientes reales y política vigente.

- **Session cache**  
  *Familia:* `memoria intermedia`  
  Reutiliza parámetros de sesiones TLS para reducir CPU y round trips en reconexiones.

- **Session tickets**  
  *Familia:* `aislamiento sobre host`  
  Permiten reanudación sin estado compartido, pero requieren rotación coordinada de claves para limitar exposición.

- **OCSP stapling**  
  *Familia:* `planificación de trabajo`  
  NGINX puede adjuntar una respuesta de revocación obtenida del responder para ahorrar una consulta al cliente.

- **HSTS**  
  *Familia:* `superficie de aplicación`  
  Strict-Transport-Security ordena al navegador usar HTTPS durante un periodo; una política incorrecta puede bloquear acceso legítimo.

- **Redirect HTTP a HTTPS**  
  *Familia:* `ida y vuelta`  
  Un server dedicado puede responder 301 o 308 sin mezclar lógica segura e insegura.

- **HTTP/2**  
  *Familia:* `topología y tráfico`  
  Multiplexa streams sobre una conexión, comprime headers y requiere TLS en navegadores habituales.

- **HTTP/3 y QUIC**  
  *Familia:* `flujo de transformación`  
  Usa QUIC sobre UDP, evita head-of-line entre streams y requiere módulo, build y parámetros listen compatibles.

- **ALPN**  
  *Familia:* `propagación de eventos`  
  Negocia el protocolo de aplicación como h2 o http/1.1 durante el handshake TLS.

- **0-RTT**  
  *Familia:* `configuración declarativa`  
  Puede reducir latencia en QUIC/TLS 1.3, pero el early data es reproducible y no debe ejecutar operaciones no idempotentes sin protección.

- **mTLS**  
  *Familia:* `comparativa técnica`  
  ssl_verify_client exige un certificado de cliente emitido por una CA confiable y expone atributos para autorización.

- **Verificación TLS upstream**  
  *Familia:* `cola y consumidor`  
  Activar proxy_ssl_verify evita aceptar cualquier certificado presentado por el backend.

- **Security headers**  
  *Familia:* `ecosistema coordinado`  
  NGINX puede aplicar HSTS, CSP, frame, referrer y permissions policies de forma centralizada con herencia consciente.

- **Content Security Policy**  
  *Familia:* `tabla de estados`  
  CSP limita orígenes de scripts y recursos; debe diseñarse con nonces, hashes y reportes según la aplicación.

- **Clickjacking protection**  
  *Familia:* `diagnóstico operativo`  
  frame-ancestors en CSP o X-Frame-Options restringen qué sitios pueden embeber una respuesta.

- **server_tokens**  
  *Familia:* `acumulación de recursos`  
  Reduce información de versión en headers y páginas de error, sin reemplazar patching ni hardening real.

- **auth_basic**  
  *Familia:* `consulta e índice`  
  Protege locations mediante usuario y hash de contraseña, apropiado para fronteras simples y TLS obligatorio.

- **allow y deny**  
  *Familia:* `máquina de estados`  
  Filtran direcciones en orden; detrás de proxies dependen de restaurar primero la IP de cliente confiable.

- **satisfy**  
  *Familia:* `contratos coordinados`  
  Combina controles de acceso permitiendo exigir todos o aceptar cualquiera según la directiva.

- **Autorización externa**  
  *Familia:* `evidencia y latencia`  
  auth_request delega identidad y permisos a un servicio sin entregar automáticamente el body principal.

- **JWT en NGINX Plus**  
  *Familia:* `anatomía del concepto`  
  El módulo auth_jwt valida tokens y claims en NGINX Plus; Open Source suele delegar o usar módulos externos.

- **Rate limiting como control de abuso**  
  *Familia:* `jerarquía y dependencias`  
  limit_req amortigua ráfagas por clave, pero no sustituye cuotas de negocio ni defensa distribuida.

- **Restricción de métodos**  
  *Familia:* `ciclo de vida`  
  limit_except o routing explícito pueden limitar operaciones, teniendo en cuenta métodos implícitos y CORS.

- **Permisos de claves privadas**  
  *Familia:* `validación y decisión`  
  La clave TLS debe ser legible para el proceso que la carga y estar protegida frente a otros usuarios y backups inseguros.

- **Rotación de certificados**  
  *Familia:* `configuración declarativa`  
  Actualizar archivos y ejecutar un reload graceful permite que conexiones nuevas usen el material renovado.


### Seccion: Caché, compresión y rendimiento (30 conceptos)

- **Proxy cache**  
  *Familia:* `ida y vuelta`  
  Almacena respuestas upstream reutilizables para reducir latencia y trabajo del backend.

- **proxy_cache_path**  
  *Familia:* `topología y tráfico`  
  Define path, levels, shared memory keys_zone, tamaño máximo, inactividad y procesos manager/loader.

- **keys_zone**  
  *Familia:* `validación y decisión`  
  Conserva metadata y claves en memoria compartida; el cuerpo normalmente permanece en archivos de caché.

- **Cache key**  
  *Familia:* `memoria intermedia`  
  Determina qué peticiones comparten una entrada y debe incluir variantes relevantes como host, URI, argumentos o headers.

- **Cache status**  
  *Familia:* `comparativa técnica`  
  $upstream_cache_status diferencia MISS, HIT, BYPASS, EXPIRED, STALE, UPDATING o REVALIDATED.

- **proxy_cache_valid**  
  *Familia:* `flujo de ejecución`  
  Asigna TTL por código cuando la respuesta no aporta o no se desea usar otra política de frescura.

- **Cache-Control y Expires upstream**  
  *Familia:* `flujo de transformación`  
  NGINX interpreta headers de caché salvo que la configuración los ignore o sobrescriba deliberadamente.

- **Vary**  
  *Familia:* `árbol de recursos`  
  Una respuesta que varía por header requiere claves o metadata compatibles para no servir una representación incorrecta.

- **Set-Cookie y caché**  
  *Familia:* `consulta e índice`  
  Respuestas personalizadas suelen evitarse en caché; ignorar Set-Cookie sin diseñar la clave puede filtrar datos entre usuarios.

- **proxy_cache_bypass**  
  *Familia:* `secuencia operativa`  
  Decide no leer una entrada existente cuando una condición, cookie o header lo exige.

- **proxy_no_cache**  
  *Familia:* `ida y vuelta`  
  Decide no guardar la respuesta obtenida aunque la petición haya pasado por el cache lookup.

- **Serving stale**  
  *Familia:* `tabla de estados`  
  Puede servir una copia vencida durante error, timeout, actualización o códigos concretos para proteger disponibilidad.

- **Cache lock**  
  *Familia:* `aislamiento sobre host`  
  Solo una petición rellena una clave vencida o ausente mientras las demás esperan, reduciendo stampede.

- **Background update**  
  *Familia:* `capas internas`  
  Sirve stale y actualiza la entrada en background para desacoplar latencia del cliente.

- **Revalidation**  
  *Familia:* `anatomía del concepto`  
  Usa ETag o Last-Modified con el upstream para renovar metadata sin descargar de nuevo un cuerpo sin cambios.

- **Microcaching**  
  *Familia:* `superficie de aplicación`  
  TTL de segundos puede absorber picos de contenido dinámico público sin convertirlo en caché de larga duración.

- **Cache manager y loader**  
  *Familia:* `memoria intermedia`  
  Procesos especiales cargan metadata y eliminan entradas para respetar inactividad y max_size sin bloquear workers.

- **Cache purge**  
  *Familia:* `comparativa técnica`  
  NGINX Plus ofrece purge nativo; en Open Source requiere arquitectura alternativa o módulos adicionales cuidadosamente evaluados.

- **gzip**  
  *Familia:* `configuración declarativa`  
  Comprime tipos configurados cuando el ahorro supera el costo y el cliente anuncia soporte.

- **gzip_proxied**  
  *Familia:* `jerarquía y dependencias`  
  Controla cuándo comprimir respuestas a clientes detectados detrás de proxies según headers y política.

- **gzip_vary**  
  *Familia:* `máquina de estados`  
  Añade Vary: Accept-Encoding para que caches separen versiones comprimidas y sin comprimir.

- **Nivel de compresión**  
  *Familia:* `ciclo de vida`  
  gzip_comp_level intercambia CPU por tamaño; el óptimo depende del contenido, tráfico y hardware.

- **Keep-alive del cliente**  
  *Familia:* `secuencia operativa`  
  keepalive_timeout y keepalive_requests limitan cuánto se reutiliza una conexión antes de cerrarla.

- **Límites de file descriptors**  
  *Familia:* `propagación de eventos`  
  worker_rlimit_nofile y límites del sistema deben cubrir sockets cliente, upstream, logs, archivos y caché.

- **client_header_buffer_size**  
  *Familia:* `análisis y emisión`  
  Dimensiona lectura de headers comunes; buffers grandes adicionales cubren líneas excepcionales.

- **large_client_header_buffers**  
  *Familia:* `cola y consumidor`  
  Evita aceptar headers ilimitados y determina cuándo devolver 400 o 414 por líneas demasiado grandes.

- **client_body_buffer_size**  
  *Familia:* `evidencia y latencia`  
  Define cuánto body se mantiene en memoria antes de escribir un archivo temporal.

- **Streaming de respuestas**  
  *Familia:* `planificación de trabajo`  
  Desactivar buffering reduce latencia progresiva, pero acopla al upstream con clientes lentos.

- **Benchmark representativo**  
  *Familia:* `contratos coordinados`  
  Debe medir TLS, tamaños, keepalive, cache hit ratio, concurrencia y upstream real; un hello world no predice producción.

- **Capacity planning**  
  *Familia:* `acumulación de recursos`  
  Relaciona conexiones, RPS, ancho de banda, CPU, memoria, disco, TLS y margen de fallo por instancia.


### Seccion: Routing, acceso y límites de tráfico (24 conceptos)

- **return antes que rewrite**  
  *Familia:* `ciclo de vida`  
  Para redirects o respuestas constantes, return suele ser más directo y predecible que una regex.

- **Capturas de regex**  
  *Familia:* `validación y decisión`  
  Variables posicionales o nombradas transportan fragmentos capturados, pero pueden cambiar por evaluaciones regex posteriores.

- **map en lugar de if**  
  *Familia:* `configuración declarativa`  
  map expresa decisiones derivadas de headers, métodos o hosts en contexto http y evita lógica imperativa dispersa.

- **Uso seguro de if**  
  *Familia:* `ecosistema coordinado`  
  Dentro de location, return y rewrite son usos comunes; directivas de contenido complejas pueden producir comportamiento inesperado.

- **URLs canónicas**  
  *Familia:* `aislamiento sobre host`  
  Redirects coherentes para esquema, host y barra final evitan duplicados y bucles entre proxies.

- **Argumentos de query**  
  *Familia:* `consulta e índice`  
  $arg_name y $args permiten routing o caché, distinguiendo ausencia, vacío y múltiples valores.

- **split_clients**  
  *Familia:* `propagación de eventos`  
  Divide tráfico de forma determinista por una clave para experimentos, canaries o distribución gradual.

- **geo**  
  *Familia:* `diagnóstico operativo`  
  Crea variables según rangos IP y puede incluir archivos para políticas extensas.

- **Modo mantenimiento**  
  *Familia:* `flujo de transformación`  
  map, try_files o una flag pueden desviar tráfico a una página estática conservando endpoints de salud necesarios.

- **Routing blue-green**  
  *Familia:* `jerarquía y dependencias`  
  Una variable, cookie o header puede elegir upstream stable o candidate sin reconstruir la aplicación.

- **limit_req_zone**  
  *Familia:* `evidencia y latencia`  
  Reserva estado compartido y define tasa por una clave como IP, token, tenant o endpoint.

- **Leaky bucket**  
  *Familia:* `máquina de estados`  
  limit_req modela una tasa promedio y administra exceso mediante espera o rechazo.

- **burst**  
  *Familia:* `superficie de aplicación`  
  Permite una cola temporal de solicitudes excedentes antes de aplicar rechazo.

- **nodelay**  
  *Familia:* `tabla de estados`  
  Acepta de inmediato el burst permitido, aunque el presupuesto de tasa siga contabilizándose internamente.

- **limit_req_dry_run**  
  *Familia:* `secuencia operativa`  
  Mide qué habría sido limitado sin aplicar el rechazo para calibrar claves y tasas.

- **limit_conn_zone**  
  *Familia:* `árbol de recursos`  
  Cuenta conexiones por clave en memoria compartida y prepara límites simultáneos.

- **limit_conn**  
  *Familia:* `comparativa técnica`  
  Restringe conexiones concurrentes, no peticiones por segundo; HTTP/2 requiere interpretar streams y conexiones con cuidado.

- **Código de rechazo**  
  *Familia:* `capas internas`  
  limit_req_status y limit_conn_status permiten devolver un estado coherente con el contrato, como 429.

- **Whitelist de límites**  
  *Familia:* `flujo de ejecución`  
  map puede producir una clave vacía para excluir health checks, redes internas o clientes autorizados.

- **CORS**  
  *Familia:* `validación y decisión`  
  add_header always y una respuesta explícita a OPTIONS deben reflejar orígenes, métodos, headers y credenciales válidos.

- **Preflight**  
  *Familia:* `ida y vuelta`  
  El navegador envía OPTIONS antes de ciertas peticiones; NGINX puede responderlo o delegarlo sin ocultar políticas de la aplicación.

- **Hotlink protection**  
  *Familia:* `comparativa técnica`  
  valid_referers puede reducir embedding casual, pero Referer es opcional y no es un control de autorización fuerte.

- **Límites por tenant**  
  *Familia:* `acumulación de recursos`  
  Una clave basada en identidad evita que muchos usuarios detrás de la misma IP compartan injustamente un presupuesto.

- **Defensa por capas**  
  *Familia:* `anatomía del concepto`  
  Rate limits, timeouts, WAF, quotas de negocio y protección upstream controlan tipos de abuso diferentes.


### Seccion: Protocolos, stream y gateways (22 conceptos)

- **Contexto stream**  
  *Familia:* `cola y consumidor`  
  Configura proxy y balanceo de conexiones TCP o datagramas UDP fuera del módulo HTTP.

- **TCP proxy**  
  *Familia:* `ecosistema coordinado`  
  Mantiene un flujo bidireccional entre cliente y upstream para bases de datos, TLS u otros protocolos.

- **UDP proxy**  
  *Familia:* `topología y tráfico`  
  Asocia datagramas y respuestas con sesiones lógicas según timeout, útil para DNS, syslog o RADIUS.

- **Upstreams en stream**  
  *Familia:* `ida y vuelta`  
  Reutilizan grupos, pesos, health pasivo, keepalive y algoritmos compatibles para tráfico L4.

- **PROXY protocol**  
  *Familia:* `flujo de ejecución`  
  Transporta dirección original entre balanceadores y proxies antes de los bytes del protocolo de aplicación.

- **Aceptación de PROXY protocol**  
  *Familia:* `planificación de trabajo`  
  listen proxy_protocol exige que el peer confiable envíe el encabezado correcto; clientes directos fallarán.

- **ssl_preread**  
  *Familia:* `árbol de recursos`  
  Inspecciona ClientHello sin terminar TLS para obtener SNI o ALPN y seleccionar un upstream.

- **TLS passthrough**  
  *Familia:* `propagación de eventos`  
  NGINX enruta bytes cifrados y el backend termina TLS, conservando end-to-end encryption pero perdiendo visibilidad HTTP.

- **SNI routing en stream**  
  *Familia:* `flujo de transformación`  
  map sobre $ssl_preread_server_name puede dirigir dominios a pools distintos sin descifrar contenido.

- **TCP timeouts**  
  *Familia:* `jerarquía y dependencias`  
  proxy_connect_timeout y proxy_timeout limitan establecimiento e inactividad de sesiones stream.

- **gRPC gateway**  
  *Familia:* `contratos coordinados`  
  NGINX puede terminar TLS, aplicar routing y pasar llamadas gRPC a servicios HTTP/2.

- **WebSocket gateway**  
  *Familia:* `validación y decisión`  
  Después del upgrade, NGINX mantiene un túnel bidireccional sujeto a timeouts y cierre de ambos extremos.

- **FastCGI gateway**  
  *Familia:* `análisis y emisión`  
  Traduce HTTP a registros FastCGI y construye parámetros CGI consumidos por PHP-FPM u otros servidores.

- **memcached_pass**  
  *Familia:* `memoria intermedia`  
  Consulta memcached usando una clave derivada y devuelve el valor como respuesta HTTP con error_page de fallback.

- **Mail proxy**  
  *Familia:* `secuencia operativa`  
  El contexto mail puede proxyear IMAP, POP3 y SMTP y delegar autenticación a un servicio HTTP.

- **auth_http para mail**  
  *Familia:* `tabla de estados`  
  NGINX consulta un endpoint que decide backend, usuario y resultado antes de abrir la sesión de correo.

- **njs**  
  *Familia:* `ciclo de vida`  
  Extiende NGINX con JavaScript para lógica de request, variables, subrequests y filtros sin convertirlo en una aplicación general.

- **Subrequests**  
  *Familia:* `capas internas`  
  Módulos como auth_request, SSI, mirror o njs crean peticiones internas relacionadas con la principal.

- **API gateway**  
  *Familia:* `acumulación de recursos`  
  Combina TLS, routing, auth, límites, transformación limitada y observabilidad frente a varios servicios.

- **BFF y edge routing**  
  *Familia:* `diagnóstico operativo`  
  NGINX puede presentar una frontera por cliente, pero la composición de dominio compleja suele pertenecer a una aplicación BFF.

- **Protocol translation**  
  *Familia:* `aislamiento sobre host`  
  Los módulos proxy, FastCGI, uwsgi, SCGI, gRPC y memcached conectan HTTP con protocolos backend específicos.

- **L4 frente a L7**  
  *Familia:* `comparativa técnica`  
  stream decide con datos de transporte; http comprende método, host, URI, headers y códigos para políticas más ricas.


### Seccion: Logs, observabilidad y troubleshooting (30 conceptos)

- **access_log**  
  *Familia:* `evidencia y latencia`  
  Registra una línea por petición al finalizar la fase de logging y puede tener múltiples destinos o buffering.

- **log_format**  
  *Familia:* `diagnóstico operativo`  
  Define campos y escaping; un formato JSON facilita ingestión si todos los valores se codifican correctamente.

- **Request ID**  
  *Familia:* `topología y tráfico`  
  $request_id puede correlacionar cliente, NGINX y upstream cuando se reenvía y registra de manera consistente.

- **Tiempos upstream**  
  *Familia:* `ida y vuelta`  
  $upstream_connect_time, header_time y response_time separan conexión, primer byte y respuesta completa.

- **Múltiples intentos upstream**  
  *Familia:* `flujo de ejecución`  
  Variables upstream pueden contener listas separadas por comas cuando hubo retries; el log debe conservar esa historia.

- **request_time**  
  *Familia:* `planificación de trabajo`  
  Mide desde lectura inicial hasta escritura del log, incluyendo cliente lento, buffering y upstream.

- **Bytes enviados**  
  *Familia:* `contratos coordinados`  
  $body_bytes_sent excluye headers; $bytes_sent incluye el total transferido al cliente.

- **Status 499**  
  *Familia:* `máquina de estados`  
  NGINX registra 499 cuando el cliente cierra antes de completar la respuesta; la causa puede estar en UX, red o latencia upstream.

- **Status 502**  
  *Familia:* `ciclo de vida`  
  Indica que el gateway recibió una respuesta inválida o no pudo comunicarse correctamente con el upstream.

- **Status 503**  
  *Familia:* `tabla de estados`  
  Puede provenir de ausencia de capacidad, límites, maintenance o configuración explícita.

- **Status 504**  
  *Familia:* `secuencia operativa`  
  El gateway agotó un timeout esperando al upstream y requiere distinguir connect, send o read.

- **error_log**  
  *Familia:* `jerarquía y dependencias`  
  Registra problemas de configuración y runtime con niveles emerg, alert, crit, error, warn, notice, info o debug.

- **Debug logging**  
  *Familia:* `configuración declarativa`  
  Un binario con --with-debug y niveles selectivos puede revelar fases, conexiones y upstreams con alto volumen.

- **debug_connection**  
  *Familia:* `análisis y emisión`  
  Limita debug logging a clientes concretos para reducir ruido durante una investigación.

- **stub_status**  
  *Familia:* `aislamiento sobre host`  
  Expone métricas básicas de conexiones activas, accepts, handled, requests y estados Reading/Writing/Waiting.

- **NGINX Plus API**  
  *Familia:* `consulta e índice`  
  Expone métricas y estado ampliado de upstreams, zones, resolvers y otros subsistemas en la edición comercial.

- **Exporters externos**  
  *Familia:* `ecosistema coordinado`  
  Prometheus exporters suelen leer stub_status o logs; su modelo no forma parte automáticamente del core de NGINX.

- **Logs a syslog**  
  *Familia:* `árbol de recursos`  
  access_log y error_log pueden enviarse a syslog local o remoto con facility, severity y tag.

- **Rotación de logs**  
  *Familia:* `superficie de aplicación`  
  La herramienta renombra archivos y luego envía reopen para que NGINX escriba en destinos nuevos sin reiniciar.

- **nginx -T en incidentes**  
  *Familia:* `anatomía del concepto`  
  Captura la configuración efectiva y paths de origen, evitando investigar solo un fragmento que quizá fue sobrescrito.

- **Configuración mínima reproducible**  
  *Familia:* `validación y decisión`  
  Reducir includes y tráfico a un caso pequeño ayuda a separar bug, módulo, red y aplicación.

- **Diagnóstico de location**  
  *Familia:* `memoria intermedia`  
  Headers temporales, logs y una tabla de precedencia permiten demostrar qué server y location procesaron la URI.

- **Diagnóstico de upstream**  
  *Familia:* `cola y consumidor`  
  curl directo, ss, DNS, TLS y logs separan fallo de NGINX de fallo del servicio destino.

- **Core dumps**  
  *Familia:* `comparativa técnica`  
  Con límites y símbolos adecuados, un crash puede analizarse sin reiniciar ciegamente la misma condición.

- **File descriptor exhaustion**  
  *Familia:* `flujo de transformación`  
  Errores too many open files requieren revisar límites, conexiones, logs, archivos y fugas upstream.

- **Disk full**  
  *Familia:* `configuración declarativa`  
  Caché, temporales y logs pueden agotar filesystem e impedir requests aunque CPU y memoria parezcan sanas.

- **Reload fallido**  
  *Familia:* `análisis y emisión`  
  Si la nueva configuración no puede abrir sockets, logs o certificados, el master conserva la configuración anterior y registra el error.

- **Worker shutdown timeout**  
  *Familia:* `acumulación de recursos`  
  Limita cuánto espera un worker antiguo durante cierre graceful antes de finalizar conexiones restantes.

- **Runbooks y rollback**  
  *Familia:* `capas internas`  
  Una operación segura registra comando de validación, config anterior, señal de reload y criterios de verificación.

- **SLOs de gateway**  
  *Familia:* `memoria intermedia`  
  Disponibilidad, p95/p99, errores upstream, saturation y cache hit ratio explican salud mejor que CPU aislada.


### Seccion: Contenedores, Kubernetes, HA y extensibilidad (30 conceptos)

- **NGINX en foreground**  
  *Familia:* `superficie de aplicación`  
  daemon off mantiene el proceso principal ligado al runtime del contenedor y permite señales correctas.

- **Imagen inmutable**  
  *Familia:* `aislamiento sobre host`  
  La configuración base, módulos y contenido estático se construyen en una imagen identificada por digest.

- **Configuración montada**  
  *Familia:* `contratos coordinados`  
  Volumes o ConfigMaps pueden inyectar configuración, pero rompen reproducibilidad si no están versionados y validados.

- **Logs a stdout y stderr**  
  *Familia:* `evidencia y latencia`  
  En contenedores, enlaces a /dev/stdout y /dev/stderr permiten que la plataforma recoja logs sin tail auxiliar.

- **Contenedor no root**  
  *Familia:* `capas internas`  
  Requiere puertos no privilegiados o capabilities, paths escribibles y una imagen preparada para UID arbitrario.

- **Read-only filesystem**  
  *Familia:* `árbol de recursos`  
  Temporales, PID y caché deben moverse a volúmenes o tmpfs cuando el root filesystem es inmutable.

- **Healthcheck de contenedor**  
  *Familia:* `ciclo de vida`  
  Debe comprobar que NGINX atiende la ruta esperada sin ocultar fallos del upstream que la plataforma necesita detectar.

- **SIGQUIT graceful**  
  *Familia:* `acumulación de recursos`  
  El runtime debe enviar una señal que permita terminar requests; SIGKILL elimina cualquier oportunidad de drenado.

- **Docker networking**  
  *Familia:* `ecosistema coordinado`  
  El nombre de servicio resuelve a IPs internas y el resolver/runtime determina cómo se actualizan endpoints.

- **Kubernetes Service frente a NGINX**  
  *Familia:* `consulta e índice`  
  Un Service proporciona descubrimiento y balanceo L4; NGINX añade políticas L7, TLS, routing y observabilidad.

- **NGINX Ingress Controller**  
  *Familia:* `propagación de eventos`  
  Es un controlador que observa recursos Kubernetes y genera configuración; no es lo mismo que instalar NGINX manualmente.

- **Ingress resource**  
  *Familia:* `anatomía del concepto`  
  Describe hosts, paths y backends con un modelo limitado y dependiente de la clase/controlador.

- **Gateway API**  
  *Familia:* `jerarquía y dependencias`  
  Ofrece roles y recursos más expresivos para listeners, routes, policies y delegación entre equipos.

- **Annotations y snippets**  
  *Familia:* `planificación de trabajo`  
  Pueden exponer directivas potentes desde manifests y deben gobernarse porque afectan seguridad del proxy compartido.

- **Reload del controlador**  
  *Familia:* `diagnóstico operativo`  
  Cambios de recursos producen configuración nueva, validación y reload; la frecuencia influye en estabilidad y latencia de convergencia.

- **Preservar IP de cliente**  
  *Familia:* `tabla de estados`  
  externalTrafficPolicy, PROXY protocol o trusted forwarded headers determinan si la aplicación observa la IP original.

- **Readiness del proxy**  
  *Familia:* `topología y tráfico`  
  La instancia debe anunciarse lista solo cuando configuración, certificados, sockets y dependencias mínimas están disponibles.

- **Rolling update**  
  *Familia:* `ida y vuelta`  
  PreStop, readiness y terminationGracePeriod coordinan retiro del load balancer con cierre graceful de workers.

- **PodDisruptionBudget**  
  *Familia:* `secuencia operativa`  
  Limita interrupciones voluntarias simultáneas, sin garantizar disponibilidad frente a fallos involuntarios.

- **Alta disponibilidad de NGINX**  
  *Familia:* `memoria intermedia`  
  Varias instancias detrás de DNS o un load balancer eliminan el proxy único como punto de fallo.

- **keepalived y VIP**  
  *Familia:* `cola y consumidor`  
  En entornos on-prem, VRRP puede mover una IP virtual entre nodos, con detección y split-brain correctamente diseñados.

- **Configuración como código**  
  *Familia:* `configuración declarativa`  
  Templates, lint, tests, review y despliegue inmutable reducen cambios manuales no trazables.

- **envsubst**  
  *Familia:* `análisis y emisión`  
  Sustituye variables al generar archivos, pero requiere distinguir variables de shell de variables nativas $nginx.

- **Dynamic modules**  
  *Familia:* `máquina de estados`  
  Permiten empaquetar extensiones separadas, siempre compatibles con versión y firma del binario cargador.

- **njs en producción**  
  *Familia:* `comparativa técnica`  
  La lógica debe mantenerse pequeña, determinista, observable y con límites claros frente a una aplicación completa.

- **OpenResty**  
  *Familia:* `flujo de transformación`  
  Distribución basada en NGINX que integra LuaJIT y módulos; tiene modelo operativo y compatibilidad propios.

- **NGINX Unit**  
  *Familia:* `ecosistema coordinado`  
  Servidor de aplicaciones dinámico distinto de NGINX, con configuración y responsabilidades diferentes.

- **Pruebas de configuración**  
  *Familia:* `flujo de ejecución`  
  CI puede ejecutar nginx -t, requests de contrato y escenarios de routing antes de promover una imagen.

- **Capacity y autoscaling**  
  *Familia:* `validación y decisión`  
  Escalar replicas exige métricas relacionadas con conexiones, RPS, CPU, latencia y ancho de banda, no solo una señal genérica.

- **Estrategia de upgrades**  
  *Familia:* `diagnóstico operativo`  
  Revisa changelog, módulos, OpenSSL, sintaxis, pruebas de tráfico y rollback antes de actualizar flotas completas.



## Referencias Bibliograficas y Documentacion Oficial
- **[NGINX Beginner's Guide](https://nginx.org/en/docs/beginners_guide.html)** (`tutorial` | Nivel: `beginner`): 
- **[NGINX Admin Guide](https://docs.nginx.com/nginx/admin-guide/)** (`official-docs` | Nivel: `intermediate`): 
- **[NGINX Development Guide](https://nginx.org/en/docs/dev/development_guide.html)** (`reference` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Infraestructura y entrega](Grupo-Delivery) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
