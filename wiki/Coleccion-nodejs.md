# 📘 [Node] Node.js

> **Runtime, event loop, streams, workers, módulos y operación.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `nodejs` |
| **Grupo Arquitectónico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `nodejs` |
| **Total de Conceptos** | **65 conceptos** |
| **Capítulos / Secciones** | **11 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/nodejs)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/nodejs-en-accion)**


## 🔬 Caso Práctico en Acción: Node.js en acción

> **Caso integrado · Ingesta de telemetría con backpressure:** Un servicio recibe archivos comprimidos, valida eventos, calcula una señal costosa y publica lotes sin desbordar memoria ni perder trabajo durante un despliegue.  
> El pipeline mantiene memoria acotada, separa CPU del event loop, propaga cancelación y termina con un cierre observable y ordenado.

### Fases de Ejecución:
1. **Aceptar la entrada** (Streaming desde el primer byte): `request → gunzip → parser` → flujo iniciado. *Los límites se validan antes de confiar en el cuerpo.*
2. **Construir pipeline** (Error y cierre conectados): `await pipeline(req, gunzip, parse, batch)` → lifecycle unido. *Pipeline evita que un extremo siga vivo después de fallar otro.*
3. **Aplicar backpressure** (El consumidor marca el ritmo): `if (!sink.write(batch)) await drain` → presión controlada. *Ignorar el booleano de write convierte una cola limitada en acumulación de memoria.*
4. **Validar eventos** (Contrato antes del dominio): `schema.safeParse(event)` → datos confiables. *La política decide si un error rechaza fila, lote o solicitud completa.*
5. **Mover CPU** (Workers para la señal): `pool.run(features, { signal })` → loop disponible. *El pool limita concurrencia y evita crear un worker por evento.*
6. **Publicar lotes** (Idempotencia en la frontera): `publish(key, batch)` → entrega verificable. *La confirmación ocurre solo después de que el destino acepta el lote.*
7. **Recibir SIGTERM** (Dejar de aceptar, luego drenar): `server.close(); controller.abort()` → apagado coordinado. *La señal inicia una transición; no termina el proceso inmediatamente.*
8. **Cerrar y observar** (Cero trabajo huérfano): `await allSettled → process.exitCode` → ingesta operable. *El proceso sale naturalmente después de liberar sockets, workers y buffers.*


---

## 📚 Desglose Exhaustivo de Conceptos (65)

### 📑 Sección: Runtime y event loop (6 conceptos)

- **V8 y ejecución**  
  *Familia:* `despacho de runtime`  
  Compila JavaScript, administra objetos y optimiza código caliente.

- **libuv**  
  *Familia:* `planificación de trabajo`  
  Abstrae event loop, red, timers y un pool para ciertas operaciones bloqueantes.

- **Fases del event loop**  
  *Familia:* `cola y consumidor`  
  Ordena timers, polling, callbacks y cierre sin prometer tiempo exacto.

- **Microtasks**  
  *Familia:* `despacho de runtime`  
  Ejecuta promises y nextTick con prioridad capaz de retrasar I/O si se abusa.

- **Event loop delay**  
  *Familia:* `planificación de trabajo`  
  Mide cuánto trabajo síncrono impide atender la siguiente vuelta.

- **setImmediate vs process.nextTick**  
  *Familia:* `cola y consumidor`  
  Distingue la fase de check del event loop de la cola de microtareas inmediatas.


### 📑 Sección: Módulos y paquetes (6 conceptos)

- **ES modules**  
  *Familia:* `despacho de runtime`  
  Resuelve imports mediante URLs, exports y reglas explícitas de package.

- **CommonJS**  
  *Familia:* `planificación de trabajo`  
  Carga módulos históricos con require, cache y exports mutables.

- **package.json**  
  *Familia:* `cola y consumidor`  
  Declara identidad, scripts, engines, exports y tipo de módulos.

- **Resolución y exports**  
  *Familia:* `despacho de runtime`  
  Limita la superficie pública y evita imports internos frágiles.

- **Lockfile y provenance**  
  *Familia:* `planificación de trabajo`  
  Fija el grafo instalado y conserva evidencia sobre lo publicado.

- **Subpath imports (#internal)**  
  *Familia:* `cola y consumidor`  
  Encapsula módulos privados internos mediante alias definidos en package.json.


### 📑 Sección: Asincronía y errores (6 conceptos)

- **Callbacks**  
  *Familia:* `despacho de runtime`  
  Representan finalización y exigen una sola invocación con contrato de error.

- **Promises y async await**  
  *Familia:* `planificación de trabajo`  
  Componen resultados sin convertir trabajo CPU en no bloqueante.

- **AbortSignal**  
  *Familia:* `cola y consumidor`  
  Propaga cancelación y deadlines a operaciones cooperativas.

- **Errores operativos**  
  *Familia:* `despacho de runtime`  
  Distingue fallos esperables de invariantes rotas que requieren detener el proceso.

- **Async context**  
  *Familia:* `planificación de trabajo`  
  Conserva identidad de solicitud a través de callbacks y promises.

- **EventTarget y EventEmitter**  
  *Familia:* `cola y consumidor`  
  Coordina eventos asíncronos desacoplados con contratos de listeners y desuscripción limpia.


### 📑 Sección: Buffers, streams y red (6 conceptos)

- **Buffer**  
  *Familia:* `despacho de runtime`  
  Representa bytes con límites y encoding explícitos.

- **Readable y Writable**  
  *Familia:* `planificación de trabajo`  
  Modelan productores y consumidores con estados de flujo.

- **Backpressure**  
  *Familia:* `cola y consumidor`  
  Detiene al productor cuando el consumidor alcanza su highWaterMark.

- **Pipeline**  
  *Familia:* `despacho de runtime`  
  Conecta streams y propaga error, cierre y cleanup de extremo a extremo.

- **HTTP y fetch**  
  *Familia:* `planificación de trabajo`  
  Expone solicitudes, cuerpos streaming, headers, abort y conexiones reutilizables.

- **Transform streams y compresión**  
  *Familia:* `cola y consumidor`  
  Modifica flujos de datos al vuelo intercalando compresión gzip o transformaciones de formato.


### 📑 Sección: Paralelismo y procesos (6 conceptos)

- **Worker threads**  
  *Familia:* `despacho de runtime`  
  Ejecutan JavaScript CPU-bound en isolates con mensajes o memoria compartida.

- **Child processes**  
  *Familia:* `planificación de trabajo`  
  Aíslan ejecutables y conectan stdin, stdout, señales y códigos de salida.

- **Cluster y réplicas**  
  *Familia:* `cola y consumidor`  
  Distribuyen conexiones entre procesos, aunque la plataforma puede escalar fuera del runtime.

- **SharedArrayBuffer y Atomics**  
  *Familia:* `despacho de runtime`  
  Coordinan memoria compartida con costos y riesgos visibles.

- **Signals**  
  *Familia:* `planificación de trabajo`  
  Inician drenaje y cierre ordenado en vez de cortar trabajo en curso.

- **MessageChannel y MessagePort**  
  *Familia:* `cola y consumidor`  
  Establece canales directos bidireccionales de transferencia de memoria entre workers.


### 📑 Sección: Operación y seguridad (6 conceptos)

- **Configuración y secretos**  
  *Familia:* `despacho de runtime`  
  Valida el entorno al arrancar y evita registrar credenciales.

- **Diagnóstico de memoria**  
  *Familia:* `planificación de trabajo`  
  Usa heap snapshots y perfiles para distinguir fuga de carga legítima.

- **CPU profiling**  
  *Familia:* `cola y consumidor`  
  Localiza funciones que bloquean el loop o consumen workers.

- **Testing**  
  *Familia:* `despacho de runtime`  
  Combina unitarias, integración, contratos y carga con recursos cerrados.

- **Supply chain**  
  *Familia:* `planificación de trabajo`  
  Audita dependencias, reduce scripts y actualiza líneas soportadas.

- **Crypto nativo y Web Crypto API**  
  *Familia:* `cola y consumidor`  
  Ejecuta operaciones criptográficas, hash HMAC y generación de claves seguras.


### 📑 Sección: Arquitectura de red y protocolos avanzados (6 conceptos)

- **HTTP/2 y multiplexación binaria**  
  *Familia:* `ida y vuelta`  
  Gestiona streams concurrentes sobre una sola conexión TCP sin bloqueo de cabecera.

- **WebSockets nativos y ws**  
  *Familia:* `topología y tráfico`  
  Establece túneles full-duplex de baja latencia para streaming bidireccional y telemetría.

- **DNS y resolución de nombres**  
  *Familia:* `jerarquía y dependencias`  
  Controla cache y timeouts de dns.lookup vs dns.resolve para evitar agotar hilos de libuv.

- **TLS/SSL y ALPN**  
  *Familia:* `matriz de señales`  
  Configura certificados, negociación de protocolos y rotación de claves criptográficas seguras.

- **Keep-Alive y agentes HTTP**  
  *Familia:* `ida y vuelta`  
  Reutiliza sockets TCP con Agent({ keepAlive: true }) para reducir latencia de handshake.

- **Unix Domain Sockets y pipes locales**  
  *Familia:* `topología y tráfico`  
  Comunica procesos en la misma máquina a velocidades de memoria sin sobrecarga IP.


### 📑 Sección: Diagnóstico profundo y observabilidad (6 conceptos)

- **V8 Heap Snapshots y Allocation Timelines**  
  *Familia:* `tabla de estados`  
  Rastrea retención de objetos y fugas de memoria en el recolector de basura.

- **AsyncLocalStorage y Context Tracing**  
  *Familia:* `tejido literario`  
  Propaga correlation IDs e información de auditoría a través de saltos asíncronos.

- **Diagnostics Channel nativo**  
  *Familia:* `tejido de eventos`  
  Publica y suscribe eventos internos de librerías sin penalización de rendimiento.

- **Node.js Inspector y depuración remota**  
  *Familia:* `workflow y decisiones`  
  Conecta herramientas de depuración al puerto 9229 para inspección en tiempo real.

- **Core Dumps y post-mortem debugging**  
  *Familia:* `evidencia y latencia`  
  Analiza volcados de memoria tras caídas fatales usando utilidades del sistema.

- **Métricas del Garbage Collector (perf_hooks)**  
  *Familia:* `despacho de runtime`  
  Supervisa pausas de GC y tiempos de detención del runtime.


### 📑 Sección: Manipulación avanzada del sistema de archivos y E/S (6 conceptos)

- **fs.promises y APIs síncronas**  
  *Familia:* `máquina de estados`  
  Distingue lecturas atómicas no bloqueantes de bloqueos fatales en tiempo de ejecución.

- **File Descriptors y límites del SO**  
  *Familia:* `árbol de recursos`  
  Administra límites de descriptores cerrando archivos inmediatamente tras su uso.

- **fs.watch y monitoreo de eventos**  
  *Familia:* `jerarquía y dependencias`  
  Supervisa cambios en el árbol de archivos manejando eventos duplicados entre plataformas.

- **Memory-mapped files (mmap interop)**  
  *Familia:* `memoria intermedia`  
  Mapea archivos gigantescos directamente en el espacio de direcciones virtuales.

- **Atomic file writes**  
  *Familia:* `árbol de recursos`  
  Escribe en archivos temporales antes de renombrar (fs.rename) para prevenir escrituras corruptas.

- **Permisos POSIX y modos octales**  
  *Familia:* `jerarquía y dependencias`  
  Valida y asigna permisos de lectura, escritura y ejecución al crear archivos críticos.


### 📑 Sección: Compilación nativa y addons (Node-API / N-API) (6 conceptos)

- **Node-API (N-API) ABI stability**  
  *Familia:* `workflow y decisiones`  
  Escribe addons en C/C++ o Rust que compilan una sola vez y corren en cualquier versión de Node.

- **node-gyp y toolchains nativos**  
  *Familia:* `flujo de ejecución`  
  Orquesta la compilación de bibliotecas nativas integrando cabeceras del runtime.

- **Type conversions y JS Native API**  
  *Familia:* `matriz de señales`  
  Convierte tipos primitivos de JavaScript en estructuras nativas sin fugas de memoria.

- **Native Async Workers**  
  *Familia:* `cola y consumidor`  
  Ejecuta cómputo C++ intensivo en el hilo de trabajo de libuv notificando al event loop al finalizar.

- **Rust interop con NAPI-RS**  
  *Familia:* `mapa de memoria`  
  Construye extensiones de alto rendimiento y memoria segura para Node.js usando Rust.

- **WebAssembly (WASM) nativo en Node**  
  *Familia:* `workflow y decisiones`  
  Carga módulos binarios Wasm para ejecutar algoritmos criptográficos a velocidad nativa.


### 📑 Sección: Operación en contenedores y producción (5 conceptos)

- **Docker multi-stage builds**  
  *Familia:* `análisis y emisión`  
  Genera imágenes mínimas basadas en distroless excluyendo dependencias de desarrollo y compiladores.

- **Gestor de procesos (dumb-init / tini)**  
  *Familia:* `planificación de trabajo`  
  Actúa como PID 1 para propagar señales de terminación y evitar procesos zombies.

- **Graceful shutdown con drenaje de conexiones**  
  *Familia:* `pasaporte del artefacto`  
  Espera a que las peticiones en vuelo finalicen antes de cerrar sockets y base de datos.

- **Límites de memoria en cgroups (--max-old-space-size)**  
  *Familia:* `memoria intermedia`  
  Alinea el límite del heap de V8 con la memoria asignada al contenedor.

- **Hardening y Node.js Permission Model**  
  *Familia:* `workflow y decisiones`  
  Restringe acceso a archivos, red y subprocesos mediante flags de permisos de seguridad.




---
[← Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
