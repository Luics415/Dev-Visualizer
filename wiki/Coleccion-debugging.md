# 📘 [Debug] Debugging

> **Reproducción, evidencia, hipótesis, rendimiento e incidentes.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `debugging` |
| **Grupo Arquitectónico** | [Control de versiones y calidad](Grupo-Versioning) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `debugging` |
| **Total de Conceptos** | **238 conceptos** |
| **Capítulos / Secciones** | **12 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/debugging)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/debugging-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (238)

### 📑 Sección: Mentalidad y formulación del problema (18 conceptos)

- **Qué es debugging**  
  *Familia:* `anatomía del concepto`  
  Proceso sistemático de explicar una diferencia entre comportamiento esperado y observado y eliminar su causa.

- **Síntoma frente a causa raíz**  
  *Familia:* `consulta e índice`  
  El error visible suele ser una consecuencia; corregir solo el síntoma puede ocultar el mecanismo real.

- **Comportamiento esperado**  
  *Familia:* `telar relacional`  
  Debe expresarse con entradas, estado, salida y criterio verificable antes de investigar.

- **Comportamiento observado**  
  *Familia:* `flujo de transformación`  
  Registra exactamente qué ocurrió, dónde, cuándo y con qué evidencia.

- **Hipótesis falsable**  
  *Familia:* `matriz de señales`  
  Propone una causa que puede confirmarse o descartarse mediante una prueba concreta.

- **Método científico**  
  *Familia:* `consulta e índice`  
  Observar, formular, experimentar, medir y actualizar la explicación reduce cambios al azar.

- **Una variable a la vez**  
  *Familia:* `planificación de trabajo`  
  Cambiar un factor por experimento permite atribuir el resultado a una causa.

- **Sesgos cognitivos**  
  *Familia:* `espectro de verificación`  
  Confirmación, disponibilidad y anclaje pueden hacer que se busque evidencia solo para la primera teoría.

- **Rubber duck debugging**  
  *Familia:* `evidencia y latencia`  
  Explicar línea por línea fuerza a revelar supuestos, estados omitidos y contradicciones.

- **Leer el error completo**  
  *Familia:* `diagnóstico operativo`  
  Mensaje, tipo, código, causa, stack y contexto contienen más información que la última línea.

- **No adivinar**  
  *Familia:* `consulta e índice`  
  Una acción sin evidencia puede destruir el estado necesario para reproducir o medir el problema.

- **Prioridad del bug**  
  *Familia:* `espectro de verificación`  
  Impacto, frecuencia, alcance, seguridad y existencia de workaround determinan urgencia.

- **Severidad frente a prioridad**  
  *Familia:* `telar relacional`  
  Un fallo técnicamente grave no siempre se corrige primero y un defecto frecuente puede tener alta prioridad.

- **Blast radius**  
  *Familia:* `análisis y emisión`  
  Identifica usuarios, datos, regiones, versiones y dependencias afectadas antes de experimentar.

- **Workaround**  
  *Familia:* `consulta e índice`  
  Mitiga impacto temporalmente sin confundirse con la corrección de la causa raíz.

- **Stop conditions**  
  *Familia:* `telar relacional`  
  Define cuándo escalar, revertir, pausar tráfico o preservar evidencia para evitar empeorar el incidente.

- **Diario de investigación**  
  *Familia:* `flujo de transformación`  
  Anota hipótesis, comandos, resultados y timestamps para no repetir pasos ni perder contexto.

- **Definición de terminado**  
  *Familia:* `espectro de verificación`  
  Incluye corrección, prueba de regresión, observabilidad y explicación de por qué no reaparecerá.


### 📑 Sección: Reproducción y aislamiento (18 conceptos)

- **Caso mínimo reproducible**  
  *Familia:* `pasaporte del artefacto`  
  Reduce código, datos y entorno hasta conservar el fallo con el menor ruido posible.

- **Pasos exactos**  
  *Familia:* `capas internas`  
  Una secuencia numerada con precondiciones permite que otra persona observe lo mismo.

- **Datos de entrada**  
  *Familia:* `workflow y decisiones`  
  Valores, formatos, tamaños, locale y orden pueden ser la diferencia entre éxito y fallo.

- **Estado inicial**  
  *Familia:* `máquina de estados`  
  Caches, sesión, base de datos, feature flags y reloj deben describirse antes de repetir.

- **Versión exacta**  
  *Familia:* `mapa de memoria`  
  Commit, build, dependencias, runtime, navegador, dispositivo y configuración hacen reproducible el entorno.

- **Matriz de entornos**  
  *Familia:* `cuadrícula paralela`  
  Compara dónde ocurre y dónde no para localizar la dimensión relevante.

- **Bisect manual**  
  *Familia:* `pasaporte del artefacto`  
  Divide cambios o condiciones en mitades hasta encontrar el primer punto que reproduce.

- **git bisect**  
  *Familia:* `espectro de verificación`  
  Automatiza búsqueda binaria del commit que introdujo una regresión con una prueba repetible.

- **Feature flag isolation**  
  *Familia:* `aislamiento sobre host`  
  Activa o desactiva caminos independientes para identificar la funcionalidad asociada.

- **Dependency isolation**  
  *Familia:* `capas internas`  
  Sustituye red, reloj, filesystem o servicio por un double controlado para determinar si participa.

- **Datos sintéticos**  
  *Familia:* `pasaporte del artefacto`  
  Construye fixtures pequeños que preservan la propiedad causante sin exponer datos reales.

- **Reproducción determinista**  
  *Familia:* `workflow y decisiones`  
  Semillas, relojes falsos y schedulers controlados reducen fallos aleatorios.

- **Race reproduction**  
  *Familia:* `planificación de trabajo`  
  Aumenta concurrencia, introduce delays o usa barriers para ensanchar una ventana temporal.

- **Flaky bug**  
  *Familia:* `pasaporte del artefacto`  
  Un fallo intermitente exige registrar frecuencias, condiciones y secuencias, no repetir hasta que desaparezca.

- **Heisenbug**  
  *Familia:* `mapa de memoria`  
  La instrumentación altera timing o memoria; se necesitan herramientas menos intrusivas y evidencia comparativa.

- **Entorno limpio**  
  *Familia:* `capas internas`  
  Contenedores, profiles o máquinas nuevas eliminan residuos de configuración y caché local.

- **Reproducción en producción**  
  *Familia:* `pasaporte del artefacto`  
  Debe preferir traffic replay seguro, shadowing o datos anonimizados antes que experimentar con usuarios.

- **Minimal failing test**  
  *Familia:* `espectro de verificación`  
  Convierte el síntoma en una prueba automática que falla antes de tocar la implementación.


### 📑 Sección: Evidencia, logs y observabilidad (19 conceptos)

- **Logging estructurado**  
  *Familia:* `evidencia y latencia`  
  Campos consistentes permiten filtrar y agregar sin depender de parsing de texto libre.

- **Niveles de log**  
  *Familia:* `diagnóstico operativo`  
  Debug, info, warn y error deben expresar propósito y no usarse para ocultar fallos normales.

- **Correlation ID**  
  *Familia:* `secuencia operativa`  
  Propaga una identidad de request entre frontend, gateway, servicios, colas y base de datos.

- **Trace ID y span ID**  
  *Familia:* `evidencia y latencia`  
  Relacionan operaciones distribuidas y sus relaciones padre-hijo.

- **Contexto útil**  
  *Familia:* `tejido literario`  
  Incluye operación, recurso, versión y estado relevante sin registrar secretos ni datos personales.

- **Logs antes y después**  
  *Familia:* `diagnóstico operativo`  
  Dos checkpoints delimitan la última operación exitosa y la primera inconsistente.

- **Métricas RED**  
  *Familia:* `topología y tráfico`  
  Rate, errors y duration resumen el comportamiento de servicios orientados a requests.

- **Métricas USE**  
  *Familia:* `evidencia y latencia`  
  Utilization, saturation y errors ayudan a diagnosticar recursos de infraestructura.

- **Histograma**  
  *Familia:* `secuencia operativa`  
  Distribuciones y percentiles muestran colas largas que el promedio oculta.

- **Distributed tracing**  
  *Familia:* `tabla de estados`  
  Sigue una solicitud por servicios y muestra tiempo, errores y atributos de cada span.

- **Eventos de deployment**  
  *Familia:* `propagación de eventos`  
  Marcas de versión permiten correlacionar regresiones con cambios recientes.

- **Audit trail**  
  *Familia:* `evidencia y latencia`  
  Registra quién cambió configuración, permisos o datos y cuándo.

- **Sampling**  
  *Familia:* `secuencia operativa`  
  Reduce volumen conservando una muestra representativa y priorizando errores o trazas lentas.

- **Dynamic logging**  
  *Familia:* `diagnóstico operativo`  
  Aumenta temporalmente detalle para un componente sin redeploy cuando la plataforma lo permite.

- **Redacción de secretos**  
  *Familia:* `topología y tráfico`  
  Tokens, contraseñas, cookies y PII deben eliminarse antes de persistir evidencia.

- **Clock synchronization**  
  *Familia:* `planificación de trabajo`  
  Timestamps comparables entre hosts requieren NTP y comprensión de zonas y monotonic clocks.

- **Logs multiline**  
  *Familia:* `evidencia y latencia`  
  Stack traces deben conservarse como un evento o incluir campos que permitan reconstruirlos.

- **Retención**  
  *Familia:* `secuencia operativa`  
  La ventana de logs y traces debe cubrir el tiempo entre aparición y detección del problema.

- **Query de evidencia**  
  *Familia:* `consulta e índice`  
  Una búsqueda precisa combina tiempo, versión, request ID y dimensión afectada.


### 📑 Sección: Breakpoints y ejecución paso a paso (21 conceptos)

- **Breakpoint de línea**  
  *Familia:* `capas internas`  
  Pausa antes de ejecutar una línea para inspeccionar estado y flujo.

- **Breakpoint condicional**  
  *Familia:* `flujo de transformación`  
  Solo pausa cuando una expresión es verdadera y evita detener iteraciones irrelevantes.

- **Logpoint**  
  *Familia:* `evidencia y latencia`  
  Registra valores sin modificar código fuente ni detener ejecución.

- **DOM breakpoint**  
  *Familia:* `topología y tráfico`  
  Pausa cuando un nodo cambia, se elimina o modifica su subtree.

- **Event listener breakpoint**  
  *Familia:* `propagación de eventos`  
  Detiene handlers de click, input, timer, WebSocket y otros eventos.

- **XHR o fetch breakpoint**  
  *Familia:* `ida y vuelta`  
  Pausa cuando una URL de request coincide con un patrón.

- **Exception breakpoint**  
  *Familia:* `máquina de estados`  
  Detiene en excepciones lanzadas o no capturadas antes de que el stack se pierda.

- **debugger statement**  
  *Familia:* `secuencia operativa`  
  Inserta una pausa explícita que funciona cuando una herramienta de debugging está conectada.

- **Step over**  
  *Familia:* `capas internas`  
  Ejecuta la línea actual sin entrar en funciones llamadas.

- **Step into**  
  *Familia:* `flujo de interfaz`  
  Entra en la función invocada para seguir su implementación.

- **Step out**  
  *Familia:* `flujo de ejecución`  
  Completa la función actual y pausa al regresar al caller.

- **Continue**  
  *Familia:* `superficie de aplicación`  
  Reanuda hasta el siguiente breakpoint o excepción.

- **Restart frame**  
  *Familia:* `máquina de estados`  
  Vuelve a ejecutar un frame en herramientas compatibles, con cautela sobre side effects ya ocurridos.

- **Run to cursor**  
  *Familia:* `anatomía del concepto`  
  Continúa hasta una ubicación temporal sin crear un breakpoint permanente.

- **Blackboxing**  
  *Familia:* `mapa de memoria`  
  Oculta librerías conocidas para que stepping y stacks se concentren en código propio.

- **Watch expressions**  
  *Familia:* `capas internas`  
  Evalúan valores seleccionados en cada pausa dentro del scope disponible.

- **Scope inspector**  
  *Familia:* `diagnóstico operativo`  
  Muestra locales, closures, globals y this para el frame seleccionado.

- **Call stack**  
  *Familia:* `mapa de memoria`  
  Reconstruye qué funciones llevaron al punto actual y permite seleccionar frames anteriores.

- **Async stack traces**  
  *Familia:* `evidencia y latencia`  
  Relacionan callbacks y promesas con el origen que programó el trabajo.

- **Source maps**  
  *Familia:* `análisis y emisión`  
  Mapean código compilado o minificado a TypeScript, JSX u otras fuentes originales.

- **Remote debugging**  
  *Familia:* `diagnóstico operativo`  
  Conecta DevTools o IDE a navegador móvil, Node, contenedor o proceso remoto de manera segura.


### 📑 Sección: JavaScript, estado y asincronía (20 conceptos)

- **Valor inesperado**  
  *Familia:* `capas internas`  
  Inspecciona origen, mutaciones y coerciones en lugar de parchear el último uso.

- **undefined y null**  
  *Familia:* `evidencia y latencia`  
  Distingue ausencia no inicializada, valor explícito y path inexistente.

- **Coerción**  
  *Familia:* `análisis y emisión`  
  Operadores y comparaciones pueden convertir tipos y producir resultados válidos pero no deseados.

- **Mutación compartida**  
  *Familia:* `comparativa técnica`  
  Dos referencias al mismo objeto explican cambios que parecen aparecer a distancia.

- **Closure stale**  
  *Familia:* `memoria intermedia`  
  Un callback puede conservar valores de un render o scope anterior.

- **this incorrecto**  
  *Familia:* `consulta e índice`  
  La forma de invocación, binding y arrow functions determinan el receptor real.

- **Promise pendiente**  
  *Familia:* `máquina de estados`  
  Una ruta que nunca resuelve suele esconder callback no llamado, evento perdido o espera sin timeout.

- **Unhandled rejection**  
  *Familia:* `validación y decisión`  
  Una promesa rechazada sin handler debe rastrearse hasta el origen y no silenciarse globalmente.

- **Microtasks y tasks**  
  *Familia:* `flujo de interfaz`  
  El orden entre promesas, timers, eventos y render explica secuencias contraintuitivas.

- **Event loop bloqueado**  
  *Familia:* `pasaporte del artefacto`  
  Trabajo CPU síncrono impide input, timers y responses aunque no exista deadlock.

- **Race condition**  
  *Familia:* `capas internas`  
  El resultado depende del orden relativo de operaciones concurrentes o respuestas.

- **Last response wins**  
  *Familia:* `análisis y emisión`  
  Una respuesta vieja puede sobrescribir una nueva si no existe versión, cancelación o comparación.

- **AbortController**  
  *Familia:* `diagnóstico operativo`  
  Cancela fetch y otros trabajos compatibles cuando el resultado deja de ser relevante.

- **Timeout**  
  *Familia:* `flujo de ejecución`  
  Acota espera y convierte una operación infinita en un error observable y recuperable.

- **Retry storm**  
  *Familia:* `consulta e índice`  
  Reintentos simultáneos sin backoff ni jitter agravan el fallo original.

- **Deadlock lógico**  
  *Familia:* `planificación de trabajo`  
  Dos estados esperan señales que nunca pueden producirse aunque JavaScript use un solo thread.

- **Worker debugging**  
  *Familia:* `cola y consumidor`  
  Web Workers y Service Workers tienen scopes, lifecycle y herramientas separados.

- **Service Worker cache**  
  *Familia:* `flujo de transformación`  
  Una respuesta antigua puede venir del worker y no de la red o del servidor actual.

- **React render debugging**  
  *Familia:* `evidencia y latencia`  
  Props, state, identity, keys y effects deben seguirse entre render y commit.

- **Strict Mode**  
  *Familia:* `pasaporte del artefacto`  
  Ejecuciones adicionales en desarrollo revelan side effects no idempotentes, no significan doble commit en producción.


### 📑 Sección: DOM, CSS y rendering del navegador (18 conceptos)

- **Elements panel**  
  *Familia:* `flujo de interfaz`  
  Inspecciona DOM real, atributos, accessibility y listeners en lugar de asumir el HTML fuente.

- **Computed styles**  
  *Familia:* `superficie de aplicación`  
  Muestra el valor final después de cascade, inheritance, variables y defaults del navegador.

- **Cascade**  
  *Familia:* `ciclo de vida`  
  Origen, layer, importance, specificity y orden explican por qué una declaración pierde.

- **Specificity**  
  *Familia:* `flujo de interfaz`  
  Selectores más específicos pueden impedir overrides aparentemente posteriores.

- **Box model**  
  *Familia:* `superficie de aplicación`  
  Content, padding, border, margin y box-sizing explican tamaños y desbordamientos.

- **Layout shift**  
  *Familia:* `mapa de memoria`  
  Elementos cambian posición por dimensiones tardías, fuentes, imágenes o contenido insertado.

- **Stacking context**  
  *Familia:* `capas internas`  
  z-index solo compara elementos dentro de contextos creados por position, transform, opacity y otras propiedades.

- **Overflow**  
  *Familia:* `flujo de interfaz`  
  Clipping, scroll containers y min-size pueden ocultar contenido sin que falte en DOM.

- **Flexbox min-size**  
  *Familia:* `superficie de aplicación`  
  min-width:auto puede impedir que un item encoja y causar overflow inesperado.

- **Grid track sizing**  
  *Familia:* `ida y vuelta`  
  minmax, intrinsic sizes y fr units determinan tracks de forma no siempre intuitiva.

- **Container queries**  
  *Familia:* `aislamiento sobre host`  
  El estilo depende del tamaño del contenedor y debe inspeccionarse junto a su containment.

- **Pseudo-classes**  
  *Familia:* `análisis y emisión`  
  :hover, :focus, :active y :has pueden forzarse desde DevTools para reproducir estados.

- **Fonts**  
  *Familia:* `evidencia y latencia`  
  Fallbacks, carga tardía, métricas y variable fonts cambian layout y aspecto.

- **Paint flashing**  
  *Familia:* `flujo de interfaz`  
  Resalta regiones repintadas para localizar trabajo visual excesivo.

- **Layers**  
  *Familia:* `capas internas`  
  El panel de capas muestra composición, memoria y razones de promoción.

- **Accessibility tree**  
  *Familia:* `jerarquía y dependencias`  
  Roles, nombres y estados calculados ayudan a depurar problemas que no se ven visualmente.

- **Responsive mode**  
  *Familia:* `espectro de verificación`  
  Emula viewport y algunas capacidades, pero no sustituye pruebas en dispositivo real.

- **CSS source maps**  
  *Familia:* `análisis y emisión`  
  Relacionan estilos procesados con Sass, modules u otras fuentes originales.


### 📑 Sección: Red y APIs (20 conceptos)

- **Network panel**  
  *Familia:* `topología y tráfico`  
  Registra requests, redirects, headers, payloads, timings, cache y responses.

- **Preserve log**  
  *Familia:* `evidencia y latencia`  
  Conserva requests entre navegaciones y redirects para no perder el inicio del flujo.

- **Disable cache**  
  *Familia:* `memoria intermedia`  
  Fuerza la ruta de red mientras DevTools está abierto y separa problemas de caché.

- **Request headers**  
  *Familia:* `ida y vuelta`  
  Host, authorization, cookies, content type y conditional headers explican cómo interpretará el servidor.

- **Response headers**  
  *Familia:* `topología y tráfico`  
  Cache-Control, CORS, content type, encoding y tracing condicionan comportamiento del cliente.

- **Payload**  
  *Familia:* `análisis y emisión`  
  Verifica serialización, campos omitidos, tipos y encoding enviados realmente.

- **Status codes**  
  *Familia:* `máquina de estados`  
  Distingue error de cliente, autenticación, límite, fallo de servidor y red sin respuesta HTTP.

- **Redirect chain**  
  *Familia:* `topología y tráfico`  
  Cada salto puede cambiar método, cookies, origen y cache.

- **Timing waterfall**  
  *Familia:* `ida y vuelta`  
  Queueing, DNS, connect, TLS, TTFB y download separan dónde se consume tiempo.

- **DNS**  
  *Familia:* `jerarquía y dependencias`  
  Resolver equivocado, cache, split horizon o registro vencido pueden dirigir a un destino inesperado.

- **TLS**  
  *Familia:* `matriz de señales`  
  Certificado, SNI, ALPN, cadena y reloj explican fallos antes de HTTP.

- **CORS**  
  *Familia:* `validación y decisión`  
  La consola muestra el síntoma, pero la respuesta preflight y headers revelan la política faltante.

- **Cookies**  
  *Familia:* `ida y vuelta`  
  Domain, Path, Secure, HttpOnly, SameSite y expiración deciden si se envían.

- **Cache HTTP**  
  *Familia:* `flujo de transformación`  
  Memory cache, disk cache, service worker, CDN y validators pueden servir versiones distintas.

- **WebSocket**  
  *Familia:* `topología y tráfico`  
  Frames, close codes, ping/pong y reconexiones ayudan a seguir conexiones persistentes.

- **SSE**  
  *Familia:* `ida y vuelta`  
  Un stream puede fallar por buffering, timeout, proxy o parsing de eventos.

- **Throttling**  
  *Familia:* `evidencia y latencia`  
  Simula latencia y ancho de banda para exponer timeouts, loaders y races.

- **Request replay**  
  *Familia:* `flujo de transformación`  
  Copy as cURL o HAR reproduce una solicitud fuera de la UI con precaución sobre credenciales.

- **Mock y override**  
  *Familia:* `ida y vuelta`  
  Local Overrides o herramientas proxy permiten cambiar responses para aislar cliente y servidor.

- **API contract mismatch**  
  *Familia:* `espectro de verificación`  
  Schema, versión, nullabilidad y nombres distintos producen errores aunque ambos lados compilen.


### 📑 Sección: Backend y sistemas distribuidos (22 conceptos)

- **Stack trace de servidor**  
  *Familia:* `evidencia y latencia`  
  El primer frame propio y la cadena de causes suelen acercarse más al origen que el mensaje final.

- **Error wrapping**  
  *Familia:* `diagnóstico operativo`  
  Preservar cause y contexto evita perder la excepción original al traducir capas.

- **Request lifecycle**  
  *Familia:* `ida y vuelta`  
  Sigue gateway, middleware, controller, service, repository y dependencias externas.

- **Structured error response**  
  *Familia:* `topología y tráfico`  
  Código estable, detalle seguro y request ID permiten investigar sin exponer internals.

- **Database query**  
  *Familia:* `consulta e índice`  
  SQL real, parámetros, plan y locks deben observarse en lugar de culpar al ORM.

- **N+1**  
  *Familia:* `evidencia y latencia`  
  Muchas queries pequeñas aparecen como latencia acumulada y carga de base de datos.

- **Connection pool**  
  *Familia:* `flujo de interfaz`  
  Agotamiento produce waits y timeouts aunque la base tenga capacidad.

- **Transaction lock**  
  *Familia:* `consulta e índice`  
  Bloqueos, aislamiento y orden de acceso explican waits y deadlocks.

- **Queue lag**  
  *Familia:* `cola y consumidor`  
  Profundidad, edad del mensaje y throughput muestran si workers están atrasados.

- **Poison message**  
  *Familia:* `flujo de interfaz`  
  Un evento inválido reintentado infinitamente necesita DLQ y evidencia del payload.

- **Duplicate delivery**  
  *Familia:* `superficie de aplicación`  
  At-least-once exige idempotencia y deduplicación para no repetir side effects.

- **Clock skew**  
  *Familia:* `planificación de trabajo`  
  Timestamps y expiraciones fallan cuando hosts no comparten una referencia temporal suficiente.

- **Configuration drift**  
  *Familia:* `espectro de verificación`  
  La misma versión se comporta distinto por variables, flags, secrets o infraestructura.

- **Feature flag**  
  *Familia:* `flujo de interfaz`  
  Estado de rollout por usuario o región debe incluirse en evidencia.

- **Circuit breaker**  
  *Familia:* `superficie de aplicación`  
  Un circuito abierto puede ser la causa inmediata y una dependencia lenta la causa raíz.

- **Retry amplification**  
  *Familia:* `ciclo de vida`  
  Capas independientes que reintentan multiplican tráfico y ocultan la operación original.

- **Distributed trace gap**  
  *Familia:* `evidencia y latencia`  
  Falta de propagación de contexto crea spans huérfanos y dificulta reconstruir la solicitud.

- **Log ordering**  
  *Familia:* `diagnóstico operativo`  
  Sistemas distribuidos no garantizan orden global; correlación y causalidad importan más que timestamp aislado.

- **Partial failure**  
  *Familia:* `consulta e índice`  
  Una operación puede confirmar datos y fallar al publicar evento, enviar email o responder al cliente.

- **Production core dump**  
  *Familia:* `planificación de trabajo`  
  Captura memoria y estado de un proceso caído para análisis offline con controles de privacidad.

- **Live debugging**  
  *Familia:* `evidencia y latencia`  
  Adjuntar un debugger a producción puede pausar threads y debe usarse con autorización y límites.

- **eBPF tracing**  
  *Familia:* `secuencia operativa`  
  Observa syscalls, red y latencia del kernel con menor modificación de la aplicación.


### 📑 Sección: Rendimiento (21 conceptos)

- **Performance profile**  
  *Familia:* `diagnóstico operativo`  
  Registra CPU, main thread, frames, network y eventos para localizar trabajo costoso.

- **Flame chart**  
  *Familia:* `evidencia y latencia`  
  La anchura representa tiempo y la profundidad relaciones de llamada.

- **Bottom-up**  
  *Familia:* `secuencia operativa`  
  Agrupa tiempo por función sin importar quién la llamó para encontrar hotspots globales.

- **Call tree**  
  *Familia:* `jerarquía y dependencias`  
  Conserva jerarquía y ayuda a seguir el camino completo que consume tiempo.

- **Long task**  
  *Familia:* `planificación de trabajo`  
  Trabajo de main thread superior al presupuesto bloquea interacción y render.

- **INP**  
  *Familia:* `evidencia y latencia`  
  Mide latencia de interacciones y requiere analizar input delay, processing y presentation delay.

- **LCP**  
  *Familia:* `secuencia operativa`  
  El elemento principal puede retrasarse por TTFB, discovery, download o render.

- **CLS**  
  *Familia:* `tabla de estados`  
  Cambios de layout inesperados se atribuyen a nodos y frames concretos.

- **CPU throttling**  
  *Familia:* `planificación de trabajo`  
  Simula hardware lento para revelar trabajo que un equipo potente oculta.

- **Network throttling**  
  *Familia:* `topología y tráfico`  
  Expone dependencia de waterfalls, payloads grandes y ausencia de estados de carga.

- **Layout thrashing**  
  *Familia:* `mapa de memoria`  
  Alternar lecturas y escrituras de layout fuerza recalculaciones síncronas repetidas.

- **Excessive rendering**  
  *Familia:* `evidencia y latencia`  
  Componentes vuelven a renderizar por identidad, contexto o estado demasiado alto.

- **Profiler de React**  
  *Familia:* `diagnóstico operativo`  
  Muestra commits, duración y por qué renderizó cada componente.

- **Bundle analysis**  
  *Familia:* `secuencia operativa`  
  Identifica dependencias, duplicados y chunks que aumentan parse y ejecución.

- **Coverage**  
  *Familia:* `evidencia y latencia`  
  Revela CSS y JavaScript no usados durante un flujo, con cautela sobre rutas no ejecutadas.

- **Server profiling**  
  *Familia:* `diagnóstico operativo`  
  CPU profiles, sampling y tracing localizan handlers o librerías costosas.

- **Event loop lag**  
  *Familia:* `planificación de trabajo`  
  Mide cuánto se retrasan timers por trabajo síncrono o presión del runtime.

- **Database EXPLAIN**  
  *Familia:* `consulta e índice`  
  Plan, cardinalidades y buffers separan query lenta de espera por locks o red.

- **Load testing**  
  *Familia:* `espectro de verificación`  
  Reproduce carga controlada y mide throughput, latencia, saturación y errores.

- **Coordinated omission**  
  *Familia:* `matriz de señales`  
  Un generador que espera respuestas puede ocultar la peor latencia durante saturación.

- **Regression budget**  
  *Familia:* `validación y decisión`  
  Una prueba compara contra baseline y falla cuando una métrica supera tolerancia.


### 📑 Sección: Memoria y recursos (19 conceptos)

- **Memory leak**  
  *Familia:* `memoria intermedia`  
  Objetos dejan de ser útiles pero siguen alcanzables desde roots y no pueden recolectarse.

- **Memory bloat**  
  *Familia:* `comparativa técnica`  
  La aplicación retiene más memoria de la necesaria aunque finalmente pueda liberarla.

- **Heap snapshot**  
  *Familia:* `tabla de estados`  
  Captura objetos, tamaños y relaciones para comparar retención.

- **Allocation instrumentation**  
  *Familia:* `mapa de memoria`  
  Registra dónde se crean objetos a lo largo del tiempo.

- **Allocation sampling**  
  *Familia:* `capas internas`  
  Muestrea allocations con menor overhead para localizar sitios dominantes.

- **Retainers**  
  *Familia:* `análisis y emisión`  
  Cadena desde un GC root explica qué referencia mantiene vivo un objeto.

- **Detached DOM nodes**  
  *Familia:* `workflow y decisiones`  
  Nodos eliminados de la página siguen retenidos por listeners, closures o caches.

- **Event listener leak**  
  *Familia:* `propagación de eventos`  
  Handlers añadidos y no retirados conservan componentes y datos asociados.

- **Timer leak**  
  *Familia:* `mapa de memoria`  
  Intervals y timeouts recurrentes mantienen closures y ejecutan trabajo después del desmontaje.

- **Unbounded cache**  
  *Familia:* `memoria intermedia`  
  Mapas y memoization sin eviction crecen con cada clave nueva.

- **WeakMap y WeakRef**  
  *Familia:* `despacho de runtime`  
  Permiten asociaciones que no impiden GC, pero no sustituyen una política de lifecycle clara.

- **Garbage collection**  
  *Familia:* `mapa de memoria`  
  Pauses frecuentes pueden indicar allocation rate alto o heap mal dimensionado, no solo leaks.

- **Native memory**  
  *Familia:* `memoria intermedia`  
  Buffers, imágenes, sockets y librerías nativas pueden crecer fuera del heap JavaScript.

- **File descriptor leak**  
  *Familia:* `matriz de señales`  
  Archivos, sockets o pipes no cerrados terminan en errores de recursos.

- **Thread leak**  
  *Familia:* `planificación de trabajo`  
  Pools o workers creados sin cierre consumen memoria y scheduling.

- **OOM**  
  *Familia:* `mapa de memoria`  
  Debe distinguir límite de cgroup, heap del runtime, memoria nativa y presión global del host.

- **Core dump y heap dump**  
  *Familia:* `tabla de estados`  
  Artefactos contienen datos sensibles y deben protegerse durante captura y análisis.

- **Soak test**  
  *Familia:* `espectro de verificación`  
  Carga sostenida revela crecimiento lento que un benchmark corto no observa.

- **Baseline de memoria**  
  *Familia:* `memoria intermedia`  
  Comparar después de ciclos completos y GC evita confundir warm-up con leak.


### 📑 Sección: Mobile y React Native (18 conceptos)

- **Logs de dispositivo**  
  *Familia:* `evidencia y latencia`  
  Logcat, Console y herramientas del framework muestran lifecycle, crashes y módulos nativos.

- **Remote JS debugging**  
  *Familia:* `diagnóstico operativo`  
  El entorno de ejecución puede diferir del runtime real y alterar timing o APIs.

- **Hermes debugger**  
  *Familia:* `secuencia operativa`  
  Permite breakpoints y perfiles sobre el motor usado por React Native.

- **Metro bundler**  
  *Familia:* `consulta e índice`  
  Errores de resolución, cache y transforms se investigan desde output y dependency graph.

- **Native crash**  
  *Familia:* `matriz de señales`  
  Stacks de Android o iOS requieren símbolos, mapping y versión exacta del binario.

- **ANR**  
  *Familia:* `planificación de trabajo`  
  Android reporta falta de respuesta cuando main thread o binder permanecen bloqueados.

- **Watchdog termination**  
  *Familia:* `topología y tráfico`  
  iOS termina apps que bloquean launch, main thread o tareas de background demasiado tiempo.

- **Bridge y JSI**  
  *Familia:* `flujo de interfaz`  
  La arquitectura determina dónde observar llamadas entre JavaScript y código nativo.

- **UI thread**  
  *Familia:* `planificación de trabajo`  
  Drops de frames aparecen cuando layout, drawing, gestures o animaciones exceden presupuesto.

- **JS thread**  
  *Familia:* `cola y consumidor`  
  Trabajo pesado retrasa state updates, timers y lógica aunque animaciones nativas continúen.

- **Network inspector móvil**  
  *Familia:* `topología y tráfico`  
  Proxies, certificates y herramientas de plataforma capturan tráfico de dispositivo real.

- **Deep links**  
  *Familia:* `capas internas`  
  Scheme, universal links, app links y navigation state deben probarse desde cada punto de entrada.

- **Push notifications**  
  *Familia:* `propagación de eventos`  
  Payload, token, provider, permisos, estado de app y handler son fronteras independientes.

- **Permissions**  
  *Familia:* `validación y decisión`  
  Estado denied, blocked, limited o unavailable cambia por plataforma y no debe asumirse desde una llamada.

- **Offline bugs**  
  *Familia:* `topología y tráfico`  
  Caches, cola, reloj y reconciliación producen fallos que no aparecen con red estable.

- **Release build**  
  *Familia:* `análisis y emisión`  
  Minificación, optimización, signing y configuración pueden hacer que un bug no exista en debug.

- **Device fragmentation**  
  *Familia:* `ciclo de vida`  
  OS, fabricante, memoria, densidad y arquitectura requieren una matriz de reproducción.

- **Crash reporting**  
  *Familia:* `mapa de memoria`  
  Crashlytics o equivalentes agrupan stacks y breadcrumbs, pero necesitan símbolos correctos.


### 📑 Sección: Pruebas, regresiones e incidentes (24 conceptos)

- **Unit test de regresión**  
  *Familia:* `cuadrícula paralela`  
  Captura la regla rota con la entrada mínima y falla antes de aplicar el fix.

- **Integration test**  
  *Familia:* `espectro de verificación`  
  Verifica fronteras reales como base de datos, filesystem, cola o API.

- **End-to-end test**  
  *Familia:* `validación y decisión`  
  Reproduce el flujo desde la interfaz, aunque debe reservarse para comportamientos críticos.

- **Contract test**  
  *Familia:* `cola y consumidor`  
  Detecta incompatibilidades entre productor y consumidor antes del despliegue.

- **Property-based testing**  
  *Familia:* `espectro de verificación`  
  Genera entradas para encontrar invariantes rotas más allá de ejemplos manuales.

- **Fuzzing**  
  *Familia:* `validación y decisión`  
  Explora inputs malformados, tamaños y secuencias que disparan crashes o fallos de seguridad.

- **Snapshot test**  
  *Familia:* `evidencia y latencia`  
  Detecta cambios estructurales, pero un snapshot actualizado sin revisar puede esconder regresiones.

- **Golden file**  
  *Familia:* `espectro de verificación`  
  Compara una salida compleja con un artefacto aprobado y controlado.

- **Mutation testing**  
  *Familia:* `validación y decisión`  
  Cambia código deliberadamente para comprobar si las pruebas detectan fallos reales.

- **Chaos experiment**  
  *Familia:* `evidencia y latencia`  
  Inyecta latencia, pérdida o caída con hipótesis y blast radius controlado.

- **Canary**  
  *Familia:* `espectro de verificación`  
  Expone el fix a una población pequeña y compara señales con la versión estable.

- **Feature flag rollback**  
  *Familia:* `validación y decisión`  
  Desactiva el camino defectuoso sin esperar un nuevo binario cuando la arquitectura lo permite.

- **Observability acceptance**  
  *Familia:* `tabla de estados`  
  Un fix no está completo si el mismo fallo futuro seguiría siendo invisible.

- **Postmortem**  
  *Familia:* `cola y consumidor`  
  Documenta impacto, timeline, causas contribuyentes, detección y acciones sin buscar culpables.

- **Five whys**  
  *Familia:* `espectro de verificación`  
  Explora capas organizativas y técnicas, evitando detenerse en error humano como explicación final.

- **Fault tree**  
  *Familia:* `jerarquía y dependencias`  
  Descompone condiciones necesarias o suficientes que pueden producir el síntoma.

- **Runbook**  
  *Familia:* `validación y decisión`  
  Convierte el diagnóstico confirmado en pasos verificables para la siguiente ocurrencia.

- **Error budget**  
  *Familia:* `evidencia y latencia`  
  Ayuda a decidir si continuar cambios o invertir en confiabilidad después de incidentes.

- **Security debugging**  
  *Familia:* `diagnóstico operativo`  
  Preserva evidencia y coordina disclosure; no imprime secretos ni prueba exploits en producción sin control.

- **Data corruption**  
  *Familia:* `espectro de verificación`  
  Prioriza detener escrituras, preservar copias y diseñar reparación idempotente.

- **Rollback del fix**  
  *Familia:* `validación y decisión`  
  El cambio debe poder retirarse si introduce regresiones o no explica la causa.

- **Verification in production**  
  *Familia:* `tabla de estados`  
  Confirma métricas, logs, trazas y experiencia real después de desplegar.

- **Knowledge sharing**  
  *Familia:* `espectro de verificación`  
  La explicación, test y visualización reducen dependencia de una sola persona.

- **Eliminar instrumentación temporal**  
  *Familia:* `validación y decisión`  
  Breakpoints, flags y logs extraordinarios deben limpiarse o formalizarse tras resolver.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Chrome DevTools](https://developer.chrome.com/docs/devtools/)** (`tutorial` | Nivel: `beginner`): 
- **[The Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)** (`official-docs` | Nivel: `intermediate`): 
- **[LLDB Tutorial](https://lldb.llvm.org/use/tutorial.html)** (`tutorial` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Control de versiones y calidad](Grupo-Versioning) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
