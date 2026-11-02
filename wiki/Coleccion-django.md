# 📘 [Dj] Django

> **Proyecto, HTTP, ORM, formularios, seguridad, tareas, pruebas y despliegue.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `django` |
| **Grupo Arquitectónico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `python` |
| **Total de Conceptos** | **123 conceptos** |
| **Capítulos / Secciones** | **19 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/django)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/django-en-accion)**


## 🔬 Caso Práctico en Acción: Reservar una cita de forma transaccional

> **Caso integrado de Django:** Una view valida y reserva un horario; dos peticiones compiten por el mismo cupo y el sistema recupera consistencia con constraint y transacción.  
> La reserva final une validación, autorización, base de datos, mensaje y pruebas concurrentes.

### Fases de Ejecución:
1. **Validar formulario** (Reservar una cita de forma transaccional: etapa 1 de 5): `form = BookingForm(request.POST); form.is_valid()` → Entrada válida. *La etapa conserva un contrato explícito para que el siguiente paso de Django no dependa de supuestos ocultos.*
2. **Consultar disponibilidad** (Reservar una cita de forma transaccional: etapa 2 de 5): `slot = Slot.objects.get(pk=form.cleaned_data['slot'])` → Candidato localizado. *La etapa conserva un contrato explícito para que el siguiente paso de Django no dependa de supuestos ocultos.*
3. **Reproducir carrera** (Reservar una cita de forma transaccional: etapa 3 de 5): `if slot.available: Booking.objects.create(slot=slot)` → Doble reserva detectada. *El caso hace visible el fallo de Django; no continúa como si la evidencia fuera válida.*
4. **Bloquear y restringir** (Reservar una cita de forma transaccional: etapa 4 de 5): `with transaction.atomic(): Slot.objects.select_for_update().get(pk=id)` → Consistencia recuperada. *La recuperación de Django corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Responder y auditar** (Reservar una cita de forma transaccional: etapa 5 de 5): `messages.success(request, 'Reserva confirmada')` → Reserva verificable. *La etapa conserva un contrato explícito para que el siguiente paso de Django no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (123)

### 📑 Sección: Proyecto Django (5 conceptos)

- **Settings**  
  *Familia:* `capas internas`  
  El recorrido de Settings toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Apps**  
  *Familia:* `ida y vuelta`  
  Apps procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **URLconf**  
  *Familia:* `workflow y decisiones`  
  Para entender URLconf, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Views**  
  *Familia:* `capas internas`  
  El mecanismo de Views recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Templates**  
  *Familia:* `ida y vuelta`  
  Templates conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Datos e internals (5 conceptos)

- **Models**  
  *Familia:* `mapa de memoria`  
  Para entender Models, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.

- **QuerySets**  
  *Familia:* `consulta e índice`  
  El mecanismo de QuerySets recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **Migrations**  
  *Familia:* `despacho de runtime`  
  Migrations conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Transactions**  
  *Familia:* `jerarquía y dependencias`  
  En Transactions, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.

- **Request middleware**  
  *Familia:* `ida y vuelta`  
  La función de Request middleware parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.


### 📑 Sección: Trabajo cotidiano (5 conceptos)

- **Forms**  
  *Familia:* `despacho de runtime`  
  Para entender Forms, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Admin**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Admin recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Authentication**  
  *Familia:* `flujo de transformación`  
  Authentication conecta una identidad, un recurso protegido y una política explícita con su runtime interno: evalúa confianza, privilegios y datos antes de autorizar cada efecto hasta exponer una decisión mínima y trazable que no revela secretos.

- **Static files**  
  *Familia:* `despacho de runtime`  
  En Static files, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Management commands**  
  *Familia:* `análisis y emisión`  
  La función de Management commands parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Diagnóstico (5 conceptos)

- **Error pages**  
  *Familia:* `evidencia y latencia`  
  Error pages conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Django test client**  
  *Familia:* `espectro de verificación`  
  En Django test client, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Query inspection**  
  *Familia:* `consulta e índice`  
  La función de Query inspection parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Logging**  
  *Familia:* `evidencia y latencia`  
  Logging estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **System checks**  
  *Familia:* `secuencia operativa`  
  El recorrido de System checks toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### 📑 Sección: Producción (5 conceptos)

- **Security checklist**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Security checklist recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **ASGI y WSGI**  
  *Familia:* `mapa de memoria`  
  ASGI y WSGI conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Caching**  
  *Familia:* `pasaporte del artefacto`  
  En Caching, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Deployment**  
  *Familia:* `ciclo de vida`  
  La función de Deployment parte de fuentes versionadas, dependencias fijadas y configuración declarativa. Su ejecución resuelve, construye y empaqueta el artefacto de forma repetible y produce una unidad identificable que puede verificarse antes de promoverse.

- **Version upgrades**  
  *Familia:* `capas internas`  
  Version upgrades estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: ORM avanzado (6 conceptos)

- **Expressions F y Q**  
  *Familia:* `validación y decisión`  
  Expressions F y Q en ORM avanzado: middleware, resolver, vista y ORM aplican política, consulta y render o serialización, asegurando response y cambios de base de datos correlacionados y autorizados.

- **Annotations**  
  *Familia:* `comparativa técnica`  
  En ORM avanzado, Annotations middleware, resolver, vista y ORM aplican política, consulta y render o serialización para entregar response y cambios de base de datos correlacionados y autorizados.

- **Subquery y Exists**  
  *Familia:* `consulta e índice`  
  Subquery y Exists aplica este mecanismo en ORM avanzado: middleware, resolver, vista y ORM aplican política, consulta y render o serialización, con response y cambios de base de datos correlacionados y autorizados.

- **select_related y prefetch_related**  
  *Familia:* `telar relacional`  
  El mecanismo de select_related y prefetch_related dentro de ORM avanzado consulta, calcula ausencias y publica el nuevo valor junto con su invalidador y consolida reutilización medible sin cambiar el resultado funcional.

- **Bulk operations**  
  *Familia:* `validación y decisión`  
  Para Bulk operations, la arquitectura de ORM avanzado middleware, resolver, vista y ORM aplican política, consulta y render o serialización, garantizando response y cambios de base de datos correlacionados y autorizados.

- **select_for_update semantics**  
  *Familia:* `consulta e índice`  
  select_for_update semantics gestiona ORM avanzado de modo que middleware, resolver, vista y ORM aplican política, consulta y render o serialización, produciendo response y cambios de base de datos correlacionados y autorizados.


### 📑 Sección: Diseño de modelos (7 conceptos)

- **Constraints declarativas**  
  *Familia:* `configuración declarativa`  
  Constraints declarativas en Diseño de modelos: evalúa precondiciones y combina restricciones antes de comprometer estado, asegurando valor aceptado con garantía explícita o error localizado.

- **Custom fields**  
  *Familia:* `flujo de transformación`  
  En Diseño de modelos, Custom fields resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Model inheritance**  
  *Familia:* `jerarquía y dependencias`  
  Model inheritance aplica este mecanismo en Diseño de modelos: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **Managers**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Managers dentro de Diseño de modelos resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Signals y sus límites**  
  *Familia:* `flujo de transformación`  
  Para Signals y sus límites, la arquitectura de Diseño de modelos resuelve composición, restricciones y representación antes de aceptar la instancia, garantizando estructura válida cuyas operaciones permitidas están explícitas.

- **Constraint deferrability**  
  *Familia:* `ida y vuelta`  
  Constraint deferrability gestiona Diseño de modelos de modo que evalúa precondiciones y combina restricciones antes de comprometer estado, produciendo valor aceptado con garantía explícita o error localizado.

- **Natural-key migrations**  
  *Familia:* `matriz de señales`  
  A través de Natural-key migrations en Diseño de modelos, el sistema promueve por etapas, observa señales y conserva una ruta de reversión manteniendo versión activa con tráfico y datos dentro del contrato.


### 📑 Sección: Ciclo HTTP profundo (8 conceptos)

- **ASGI request scope**  
  *Familia:* `topología y tráfico`  
  ASGI request scope en Ciclo HTTP profundo: activa, usa y transfiere ownership solo bajo un protocolo explícito, asegurando recurso cerrado exactamente una vez y estado final observable.

- **Middleware ordering**  
  *Familia:* `pasaporte del artefacto`  
  En Ciclo HTTP profundo, Middleware ordering serializa, negocia, transmite y traduce errores u ownership en la frontera para entregar respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Streaming responses**  
  *Familia:* `ida y vuelta`  
  Streaming responses aplica este mecanismo en Ciclo HTTP profundo: propaga elementos, aplica ventana o transformación y regula producción con demanda, con salida ordenada con memoria y latencia acotadas.

- **Content negotiation**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Content negotiation dentro de Ciclo HTTP profundo serializa, negocia, transmite y traduce errores u ownership en la frontera y consolida respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Conditional responses**  
  *Familia:* `topología y tráfico`  
  Para Conditional responses, la arquitectura de Ciclo HTTP profundo serializa, negocia, transmite y traduce errores u ownership en la frontera, garantizando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Async and sync boundaries**  
  *Familia:* `ida y vuelta`  
  Async and sync boundaries gestiona Ciclo HTTP profundo de modo que encola, planifica y reanuda unidades conservando causalidad y propagación de error, produciendo resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Streaming response transactions**  
  *Familia:* `flujo de transformación`  
  A través de Streaming response transactions en Ciclo HTTP profundo, el sistema propaga elementos, aplica ventana o transformación y regula producción con demanda manteniendo salida ordenada con memoria y latencia acotadas.

- **Request body stream ownership**  
  *Familia:* `mapa de memoria`  
  En el flujo operativo de Ciclo HTTP profundo, Request body stream ownership propaga elementos, aplica ventana o transformación y regula producción con demanda para obtener salida ordenada con memoria y latencia acotadas.


### 📑 Sección: Plantillas y presentación (6 conceptos)

- **Template inheritance**  
  *Familia:* `flujo de interfaz`  
  Template inheritance en Plantillas y presentación: mide, compone, renderiza y actualiza solo las dependencias invalidadas, asegurando interfaz navegable cuyo estado visual y semántico coinciden.

- **Context processors**  
  *Familia:* `cuadrícula paralela`  
  En Plantillas y presentación, Context processors middleware, resolver, vista y ORM aplican política, consulta y render o serialización para entregar response y cambios de base de datos correlacionados y autorizados.

- **Custom template tags**  
  *Familia:* `superficie de aplicación`  
  Custom template tags aplica este mecanismo en Plantillas y presentación: mide, compone, renderiza y actualiza solo las dependencias invalidadas, con interfaz navegable cuyo estado visual y semántico coinciden.

- **Escapado automático**  
  *Familia:* `validación y decisión`  
  El mecanismo de Escapado automático dentro de Plantillas y presentación middleware, resolver, vista y ORM aplican política, consulta y render o serialización y consolida response y cambios de base de datos correlacionados y autorizados.

- **Fragment caching**  
  *Familia:* `ciclo de vida`  
  Para Fragment caching, la arquitectura de Plantillas y presentación mide, compone, renderiza y actualiza solo las dependencias invalidadas, garantizando interfaz navegable cuyo estado visual y semántico coinciden.

- **Autoescape contexts**  
  *Familia:* `tejido literario`  
  Autoescape contexts gestiona Plantillas y presentación de modo que autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, produciendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### 📑 Sección: Autenticación y autorización (7 conceptos)

- **Custom user model**  
  *Familia:* `validación y decisión`  
  Custom user model en Autenticación y autorización: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Password hashers**  
  *Familia:* `tabla de estados`  
  En Autenticación y autorización, Password hashers middleware, resolver, vista y ORM aplican política, consulta y render o serialización para entregar response y cambios de base de datos correlacionados y autorizados.

- **Permissions y groups**  
  *Familia:* `comparativa técnica`  
  Permissions y groups aplica este mecanismo en Autenticación y autorización: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, con decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Session security**  
  *Familia:* `validación y decisión`  
  El mecanismo de Session security dentro de Autenticación y autorización autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima y consolida decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Object-level authorization**  
  *Familia:* `tabla de estados`  
  Para Object-level authorization, la arquitectura de Autenticación y autorización autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Session fixation rotation**  
  *Familia:* `comparativa técnica`  
  Session fixation rotation gestiona Autenticación y autorización de modo que activa, usa y transfiere ownership solo bajo un protocolo explícito, produciendo recurso cerrado exactamente una vez y estado final observable.

- **Permission cache invalidation**  
  *Familia:* `memoria intermedia`  
  A través de Permission cache invalidation en Autenticación y autorización, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### 📑 Sección: Seguridad web (7 conceptos)

- **CSRF internals**  
  *Familia:* `validación y decisión`  
  CSRF internals en Seguridad web: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, asegurando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Clickjacking protection**  
  *Familia:* `comparativa técnica`  
  En Seguridad web, Clickjacking protection autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Host header validation**  
  *Familia:* `tabla de estados`  
  Host header validation aplica este mecanismo en Seguridad web: evalúa precondiciones y combina restricciones antes de comprometer estado, con valor aceptado con garantía explícita o error localizado.

- **File upload hardening**  
  *Familia:* `espectro de verificación`  
  El mecanismo de File upload hardening dentro de Seguridad web normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde y consolida contenido persistido con identidad, metadatos y ownership verificables.

- **Secret key rotation**  
  *Familia:* `validación y decisión`  
  Para Secret key rotation, la arquitectura de Seguridad web autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Allowed-host normalization**  
  *Familia:* `comparativa técnica`  
  Allowed-host normalization gestiona Seguridad web de modo que autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, produciendo decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Content Security Policy middleware**  
  *Familia:* `tabla de estados`  
  A través de Content Security Policy middleware en Seguridad web, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### 📑 Sección: APIs con Django (7 conceptos)

- **Serialización explícita**  
  *Familia:* `ida y vuelta`  
  Serialización explícita en APIs con Django: codifica campos en orden definido y reconstruye validando versión y rangos, asegurando representación interoperable que conserva significado al hacer round trip.

- **API versioning**  
  *Familia:* `validación y decisión`  
  En APIs con Django, API versioning middleware, resolver, vista y ORM aplican política, consulta y render o serialización para entregar response y cambios de base de datos correlacionados y autorizados.

- **Pagination**  
  *Familia:* `matriz de señales`  
  Pagination aplica este mecanismo en APIs con Django: reserva, mapea o mueve memoria y registra quién debe reclamarla, con datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Rate limiting**  
  *Familia:* `comparativa técnica`  
  El mecanismo de Rate limiting dentro de APIs con Django middleware, resolver, vista y ORM aplican política, consulta y render o serialización y consolida response y cambios de base de datos correlacionados y autorizados.

- **OpenAPI contracts**  
  *Familia:* `espectro de verificación`  
  Para OpenAPI contracts, la arquitectura de APIs con Django evalúa precondiciones y combina restricciones antes de comprometer estado, garantizando valor aceptado con garantía explícita o error localizado.

- **Conditional requests with ETags**  
  *Familia:* `ida y vuelta`  
  Conditional requests with ETags gestiona APIs con Django de modo que middleware, resolver, vista y ORM aplican política, consulta y render o serialización, produciendo response y cambios de base de datos correlacionados y autorizados.

- **Stable pagination contracts**  
  *Familia:* `validación y decisión`  
  A través de Stable pagination contracts en APIs con Django, el sistema reserva, mapea o mueve memoria y registra quién debe reclamarla manteniendo datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.


### 📑 Sección: Procesamiento asíncrono (7 conceptos)

- **Async views**  
  *Familia:* `flujo de interfaz`  
  Async views en Procesamiento asíncrono: encola, planifica y reanuda unidades conservando causalidad y propagación de error, asegurando resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Async ORM boundaries**  
  *Familia:* `pasaporte del artefacto`  
  En Procesamiento asíncrono, Async ORM boundaries encola, planifica y reanuda unidades conservando causalidad y propagación de error para entregar resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Task queues**  
  *Familia:* `cola y consumidor`  
  Task queues aplica este mecanismo en Procesamiento asíncrono: propaga elementos, aplica ventana o transformación y regula producción con demanda, con salida ordenada con memoria y latencia acotadas.

- **Idempotent jobs**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Idempotent jobs dentro de Procesamiento asíncrono middleware, resolver, vista y ORM aplican política, consulta y render o serialización y consolida response y cambios de base de datos correlacionados y autorizados.

- **Transactional outbox**  
  *Familia:* `consulta e índice`  
  Para Transactional outbox, la arquitectura de Procesamiento asíncrono registra intención, valida conflictos y confirma o compensa la unidad completa, garantizando un estado durable que satisface aislamiento e invariantes declarados.

- **Task idempotency keys**  
  *Familia:* `validación y decisión`  
  Task idempotency keys gestiona Procesamiento asíncrono de modo que middleware, resolver, vista y ORM aplican política, consulta y render o serialización, produciendo response y cambios de base de datos correlacionados y autorizados.

- **Durable outbox relay**  
  *Familia:* `evidencia y latencia`  
  A través de Durable outbox relay en Procesamiento asíncrono, el sistema registra intención, valida conflictos y confirma o compensa la unidad completa manteniendo un estado durable que satisface aislamiento e invariantes declarados.


### 📑 Sección: Testing (7 conceptos)

- **TestCase y TransactionTestCase**  
  *Familia:* `consulta e índice`  
  TestCase y TransactionTestCase en Testing: registra intención, valida conflictos y confirma o compensa la unidad completa, asegurando un estado durable que satisface aislamiento e invariantes declarados.

- **Factories**  
  *Familia:* `tejido de eventos`  
  En Testing, Factories encola, planifica y reanuda unidades conservando causalidad y propagación de error para entregar resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Override settings**  
  *Familia:* `espectro de verificación`  
  Override settings aplica este mecanismo en Testing: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **Database query assertions**  
  *Familia:* `consulta e índice`  
  El mecanismo de Database query assertions dentro de Testing ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Browser tests**  
  *Familia:* `validación y decisión`  
  Para Browser tests, la arquitectura de Testing ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Database transaction test isolation**  
  *Familia:* `aislamiento sobre host`  
  Database transaction test isolation gestiona Testing de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **Deterministic timezone fixtures**  
  *Familia:* `espectro de verificación`  
  A través de Deterministic timezone fixtures en Testing, el sistema ejecuta camino normal, límite y fallo mientras captura todos los efectos observables manteniendo evidencia repetible que distingue comportamiento correcto de una regresión.


### 📑 Sección: Rendimiento (7 conceptos)

- **N+1 detection**  
  *Familia:* `evidencia y latencia`  
  N+1 detection en Rendimiento: mide cuello de botella, cambia una variable y repite con calentamiento suficiente, asegurando mejora atribuible que conserva corrección y percentiles importantes.

- **QuerySet evaluation**  
  *Familia:* `consulta e índice`  
  En Rendimiento, QuerySet evaluation mide cuello de botella, cambia una variable y repite con calentamiento suficiente para entregar mejora atribuible que conserva corrección y percentiles importantes.

- **Connection pooling**  
  *Familia:* `secuencia operativa`  
  Connection pooling aplica este mecanismo en Rendimiento: mide cuello de botella, cambia una variable y repite con calentamiento suficiente, con mejora atribuible que conserva corrección y percentiles importantes.

- **Cache invalidation**  
  *Familia:* `memoria intermedia`  
  El mecanismo de Cache invalidation dentro de Rendimiento consulta, calcula ausencias y publica el nuevo valor junto con su invalidador y consolida reutilización medible sin cambiar el resultado funcional.

- **Load testing**  
  *Familia:* `espectro de verificación`  
  Para Load testing, la arquitectura de Rendimiento ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Query budget assertions**  
  *Familia:* `consulta e índice`  
  Query budget assertions gestiona Rendimiento de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **Cache stampede controls**  
  *Familia:* `memoria intermedia`  
  A través de Cache stampede controls en Rendimiento, el sistema consulta, calcula ausencias y publica el nuevo valor junto con su invalidador manteniendo reutilización medible sin cambiar el resultado funcional.


### 📑 Sección: Archivos y contenido (7 conceptos)

- **Storage backends**  
  *Familia:* `telar relacional`  
  Storage backends en Archivos y contenido: normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, asegurando contenido persistido con identidad, metadatos y ownership verificables.

- **Upload handlers**  
  *Familia:* `pasaporte del artefacto`  
  En Archivos y contenido, Upload handlers normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde para entregar contenido persistido con identidad, metadatos y ownership verificables.

- **Media authorization**  
  *Familia:* `validación y decisión`  
  Media authorization aplica este mecanismo en Archivos y contenido: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, con decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Image processing isolation**  
  *Familia:* `aislamiento sobre host`  
  El mecanismo de Image processing isolation dentro de Archivos y contenido registra intención, valida conflictos y confirma o compensa la unidad completa y consolida un estado durable que satisface aislamiento e invariantes declarados.

- **Static asset hashing**  
  *Familia:* `tabla de estados`  
  Para Static asset hashing, la arquitectura de Archivos y contenido normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, garantizando contenido persistido con identidad, metadatos y ownership verificables.

- **Upload handler size limits**  
  *Familia:* `consulta e índice`  
  Upload handler size limits gestiona Archivos y contenido de modo que normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, produciendo contenido persistido con identidad, metadatos y ownership verificables.

- **Content-type sniffing defenses**  
  *Familia:* `despacho de runtime`  
  A través de Content-type sniffing defenses en Archivos y contenido, el sistema resuelve composición, restricciones y representación antes de aceptar la instancia manteniendo estructura válida cuyas operaciones permitidas están explícitas.


### 📑 Sección: Internacionalización y accesibilidad (7 conceptos)

- **Translation catalogs**  
  *Familia:* `evidencia y latencia`  
  Translation catalogs en Internacionalización y accesibilidad: middleware, resolver, vista y ORM aplican política, consulta y render o serialización, asegurando response y cambios de base de datos correlacionados y autorizados.

- **Lazy translations**  
  *Familia:* `flujo de transformación`  
  En Internacionalización y accesibilidad, Lazy translations middleware, resolver, vista y ORM aplican política, consulta y render o serialización para entregar response y cambios de base de datos correlacionados y autorizados.

- **Time zones**  
  *Familia:* `validación y decisión`  
  Time zones aplica este mecanismo en Internacionalización y accesibilidad: middleware, resolver, vista y ORM aplican política, consulta y render o serialización, con response y cambios de base de datos correlacionados y autorizados.

- **Locale-aware formats**  
  *Familia:* `consulta e índice`  
  El mecanismo de Locale-aware formats dentro de Internacionalización y accesibilidad codifica campos en orden definido y reconstruye validando versión y rangos y consolida representación interoperable que conserva significado al hacer round trip.

- **Form error semantics**  
  *Familia:* `evidencia y latencia`  
  Para Form error semantics, la arquitectura de Internacionalización y accesibilidad mide, compone, renderiza y actualiza solo las dependencias invalidadas, garantizando interfaz navegable cuyo estado visual y semántico coinciden.

- **Language negotiation**  
  *Familia:* `validación y decisión`  
  Language negotiation gestiona Internacionalización y accesibilidad de modo que middleware, resolver, vista y ORM aplican política, consulta y render o serialización, produciendo response y cambios de base de datos correlacionados y autorizados.

- **Form error announcement**  
  *Familia:* `diagnóstico operativo`  
  A través de Form error announcement en Internacionalización y accesibilidad, el sistema mide, compone, renderiza y actualiza solo las dependencias invalidadas manteniendo interfaz navegable cuyo estado visual y semántico coinciden.


### 📑 Sección: Observabilidad (7 conceptos)

- **Request correlation**  
  *Familia:* `ida y vuelta`  
  Request correlation en Observabilidad: middleware, resolver, vista y ORM aplican política, consulta y render o serialización, asegurando response y cambios de base de datos correlacionados y autorizados.

- **Structured logging**  
  *Familia:* `topología y tráfico`  
  En Observabilidad, Structured logging instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución para entregar señal que permite localizar componente, versión y duración del problema.

- **Error reporting**  
  *Familia:* `evidencia y latencia`  
  Error reporting aplica este mecanismo en Observabilidad: middleware, resolver, vista y ORM aplican política, consulta y render o serialización, con response y cambios de base de datos correlacionados y autorizados.

- **Database tracing**  
  *Familia:* `consulta e índice`  
  El mecanismo de Database tracing dentro de Observabilidad instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución y consolida señal que permite localizar componente, versión y duración del problema.

- **Health y readiness checks**  
  *Familia:* `validación y decisión`  
  Para Health y readiness checks, la arquitectura de Observabilidad middleware, resolver, vista y ORM aplican política, consulta y render o serialización, garantizando response y cambios de base de datos correlacionados y autorizados.

- **Trace-correlation middleware**  
  *Familia:* `evidencia y latencia`  
  Trace-correlation middleware gestiona Observabilidad de modo que instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, produciendo señal que permite localizar componente, versión y duración del problema.

- **Slow-query sampling**  
  *Familia:* `consulta e índice`  
  A través de Slow-query sampling en Observabilidad, el sistema middleware, resolver, vista y ORM aplican política, consulta y render o serialización manteniendo response y cambios de base de datos correlacionados y autorizados.


### 📑 Sección: Entrega y evolución (8 conceptos)

- **Zero-downtime migrations**  
  *Familia:* `pasaporte del artefacto`  
  Zero-downtime migrations en Entrega y evolución: promueve por etapas, observa señales y conserva una ruta de reversión, asegurando versión activa con tráfico y datos dentro del contrato.

- **Collectstatic deployment**  
  *Familia:* `ciclo de vida`  
  En Entrega y evolución, Collectstatic deployment promueve por etapas, observa señales y conserva una ruta de reversión para entregar versión activa con tráfico y datos dentro del contrato.

- **Worker lifecycle**  
  *Familia:* `cola y consumidor`  
  Worker lifecycle aplica este mecanismo en Entrega y evolución: activa, usa y transfiere ownership solo bajo un protocolo explícito, con recurso cerrado exactamente una vez y estado final observable.

- **Feature flags**  
  *Familia:* `validación y decisión`  
  El mecanismo de Feature flags dentro de Entrega y evolución middleware, resolver, vista y ORM aplican política, consulta y render o serialización y consolida response y cambios de base de datos correlacionados y autorizados.

- **Rollback compatible con esquema**  
  *Familia:* `pasaporte del artefacto`  
  Para Rollback compatible con esquema, la arquitectura de Entrega y evolución registra intención, valida conflictos y confirma o compensa la unidad completa, garantizando un estado durable que satisface aislamiento e invariantes declarados.

- **Migration lock strategy**  
  *Familia:* `planificación de trabajo`  
  Migration lock strategy gestiona Entrega y evolución de modo que adquiere o señaliza sincronización, publica cambios y libera en un orden definido, produciendo estado visible sin carreras y progreso dentro del límite acordado.

- **Deployment system checks**  
  *Familia:* `ciclo de vida`  
  A través de Deployment system checks en Entrega y evolución, el sistema promueve por etapas, observa señales y conserva una ruta de reversión manteniendo versión activa con tráfico y datos dentro del contrato.

- **Backward-compatible deployment contracts**  
  *Familia:* `secuencia operativa`  
  En el flujo operativo de Entrega y evolución, Backward-compatible deployment contracts promueve por etapas, observa señales y conserva una ruta de reversión para obtener versión activa con tráfico y datos dentro del contrato.




---
[← Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
