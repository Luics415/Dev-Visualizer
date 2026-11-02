# 📘 [Ng] Angular

> **Componentes, señales, DI, router, formularios, SSR, pruebas y producción.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `angular` |
| **Grupo Arquitectónico** | [Diseño e interfaces](Grupo-Interfaces) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `angularjs` |
| **Total de Conceptos** | **130 conceptos** |
| **Capítulos / Secciones** | **20 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/angular)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/angular-en-accion)**


## 🔬 Caso Práctico en Acción: Completar un flujo de reparación

> **Caso integrado de Angular:** Un formulario reactivo guía una solicitud, detecta un effect que escribe en círculo y recupera estado derivado antes de enviar y navegar.  
> El flujo final conserva accesibilidad, validación, carga, error, retry y navegación sin duplicar fuentes de verdad.

### Fases de Ejecución:
1. **Componer formulario** (Completar un flujo de reparación: etapa 1 de 5): `form = new FormGroup({ device: new FormControl('', required) })` → Contrato de entrada. *La etapa conserva un contrato explícito para que el siguiente paso de Angular no dependa de supuestos ocultos.*
2. **Derivar resumen** (Completar un flujo de reparación: etapa 2 de 5): `total = computed(() => estimate(this.form.value))` → Resumen reactivo. *La etapa conserva un contrato explícito para que el siguiente paso de Angular no dependa de supuestos ocultos.*
3. **Detectar ciclo** (Completar un flujo de reparación: etapa 3 de 5): `effect(() => this.quantity.set(this.quantity() + 1))` → Render bloqueado. *El caso hace visible el fallo de Angular; no continúa como si la evidencia fuera válida.*
4. **Eliminar escritura derivada** (Completar un flujo de reparación: etapa 4 de 5): `nextQuantity = computed(() => this.quantity() + 1)` → Grafo recuperado. *La recuperación de Angular corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Enviar y navegar** (Completar un flujo de reparación: etapa 5 de 5): `this.http.post('/repairs', payload).subscribe(() => router.navigate(['/done']))` → Solicitud confirmada. *La etapa conserva un contrato explícito para que el siguiente paso de Angular no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (130)

### 📑 Sección: Componentes (5 conceptos)

- **Standalone components**  
  *Familia:* `mapa de memoria`  
  Standalone components conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Templates**  
  *Familia:* `flujo de interfaz`  
  En Templates, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Inputs y outputs**  
  *Familia:* `superficie de aplicación`  
  La función de Inputs y outputs parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Control flow**  
  *Familia:* `ciclo de vida`  
  Control flow estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Content projection**  
  *Familia:* `consulta e índice`  
  El recorrido de Content projection toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Reactividad e internals (5 conceptos)

- **Signals**  
  *Familia:* `mapa de memoria`  
  El recorrido de Signals toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Computed**  
  *Familia:* `despacho de runtime`  
  Computed procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Effects**  
  *Familia:* `capas internas`  
  Para entender Effects, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Change detection**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Change detection recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Zone y zoneless**  
  *Familia:* `despacho de runtime`  
  Zone y zoneless conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Aplicación (5 conceptos)

- **Dependency injection**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Dependency injection recibe fuentes versionadas, dependencias fijadas y configuración declarativa y resuelve, construye y empaqueta el artefacto de forma repetible, asegurando una unidad identificable que puede verificarse antes de promoverse.

- **Router**  
  *Familia:* `flujo de interfaz`  
  Router conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Reactive forms**  
  *Familia:* `despacho de runtime`  
  En Reactive forms, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **HttpClient**  
  *Familia:* `análisis y emisión`  
  La función de HttpClient parte de un mensaje versionado, un destino y límites de tiempo. Su ejecución serializa, transporta y valida el intercambio a través de una frontera remota y produce una respuesta correlacionada o un estado convergente verificable.

- **RxJS interop**  
  *Familia:* `flujo de interfaz`  
  RxJS interop estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Diagnóstico (5 conceptos)

- **Errores de template**  
  *Familia:* `evidencia y latencia`  
  Errores de template conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Angular DevTools**  
  *Familia:* `secuencia operativa`  
  En Angular DevTools, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Testing**  
  *Familia:* `espectro de verificación`  
  La función de Testing parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Extended diagnostics**  
  *Familia:* `evidencia y latencia`  
  Extended diagnostics estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Profiling**  
  *Familia:* `diagnóstico operativo`  
  El recorrido de Profiling toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### 📑 Sección: Producción (5 conceptos)

- **SSR e hydration**  
  *Familia:* `despacho de runtime`  
  El mecanismo de SSR e hydration recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Lazy routes**  
  *Familia:* `flujo de transformación`  
  Lazy routes conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Seguridad**  
  *Familia:* `validación y decisión`  
  En Seguridad, una identidad, un recurso protegido y una política explícita ingresa al flujo donde evalúa confianza, privilegios y datos antes de autorizar cada efecto para consolidar una decisión mínima y trazable que no revela secretos.

- **Build budgets**  
  *Familia:* `análisis y emisión`  
  La función de Build budgets parte de fuentes versionadas, dependencias fijadas y configuración declarativa. Su ejecución resuelve, construye y empaqueta el artefacto de forma repetible y produce una unidad identificable que puede verificarse antes de promoverse.

- **Actualizaciones**  
  *Familia:* `pasaporte del artefacto`  
  Actualizaciones estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Templates avanzados (6 conceptos)

- **Template type checking**  
  *Familia:* `flujo de transformación`  
  Template type checking en Templates avanzados: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Host bindings**  
  *Familia:* `capas internas`  
  En Templates avanzados, Host bindings mide, compone, renderiza y actualiza solo las dependencias invalidadas para entregar interfaz navegable cuyo estado visual y semántico coinciden.

- **Queries de vista**  
  *Familia:* `jerarquía y dependencias`  
  Queries de vista aplica este mecanismo en Templates avanzados: reescribe la expresión, estima cardinalidades, elige accesos y ejecuta operadores, con conjunto de filas correcto acompañado por costo y orden conocidos.

- **Deferrable views**  
  *Familia:* `flujo de interfaz`  
  El mecanismo de Deferrable views dentro de Templates avanzados mide, compone, renderiza y actualiza solo las dependencias invalidadas y consolida interfaz navegable cuyo estado visual y semántico coinciden.

- **Directivas estructurales personalizadas**  
  *Familia:* `superficie de aplicación`  
  Para Directivas estructurales personalizadas, la arquitectura de Templates avanzados mide, compone, renderiza y actualiza solo las dependencias invalidadas, garantizando interfaz navegable cuyo estado visual y semántico coinciden.

- **DOM sanitization contexts**  
  *Familia:* `tejido literario`  
  DOM sanitization contexts gestiona Templates avanzados de modo que mide, compone, renderiza y actualiza solo las dependencias invalidadas, produciendo interfaz navegable cuyo estado visual y semántico coinciden.


### 📑 Sección: Arquitectura reactiva (8 conceptos)

- **Signal stores**  
  *Familia:* `mapa de memoria`  
  Signal stores en Arquitectura reactiva: compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, asegurando DOM, árbol de inyección y estado reactivo coherentes.

- **RxJS scheduling**  
  *Familia:* `despacho de runtime`  
  En Arquitectura reactiva, RxJS scheduling compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada para entregar DOM, árbol de inyección y estado reactivo coherentes.

- **Resource API**  
  *Familia:* `análisis y emisión`  
  Resource API aplica este mecanismo en Arquitectura reactiva: activa, usa y transfiere ownership solo bajo un protocolo explícito, con recurso cerrado exactamente una vez y estado final observable.

- **Interop Observable Signal**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Interop Observable Signal dentro de Arquitectura reactiva compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada y consolida DOM, árbol de inyección y estado reactivo coherentes.

- **Estado derivado sin efectos**  
  *Familia:* `espectro de verificación`  
  Para Estado derivado sin efectos, la arquitectura de Arquitectura reactiva compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, garantizando DOM, árbol de inyección y estado reactivo coherentes.

- **Signal write cycles**  
  *Familia:* `despacho de runtime`  
  Signal write cycles gestiona Arquitectura reactiva de modo que compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, produciendo DOM, árbol de inyección y estado reactivo coherentes.

- **Custom equality functions**  
  *Familia:* `flujo de transformación`  
  A través de Custom equality functions en Arquitectura reactiva, el sistema compone aplicaciones y propaga resultado o error sin mutar la entrada manteniendo valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Untracked dependency reads**  
  *Familia:* `ida y vuelta`  
  En el flujo operativo de Arquitectura reactiva, Untracked dependency reads resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado para obtener artefacto versionado cuya composición puede reproducirse.


### 📑 Sección: Inyección de dependencias profunda (6 conceptos)

- **Hierarchical injectors**  
  *Familia:* `despacho de runtime`  
  Hierarchical injectors en Inyección de dependencias profunda: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, asegurando artefacto versionado cuya composición puede reproducirse.

- **Injection tokens**  
  *Familia:* `evidencia y latencia`  
  En Inyección de dependencias profunda, Injection tokens tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación para entregar árbol, match o diagnóstico consumible por la siguiente etapa.

- **Environment providers**  
  *Familia:* `flujo de transformación`  
  Environment providers aplica este mecanismo en Inyección de dependencias profunda: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, con artefacto versionado cuya composición puede reproducirse.

- **Injection context**  
  *Familia:* `tejido literario`  
  El mecanismo de Injection context dentro de Inyección de dependencias profunda resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado y consolida artefacto versionado cuya composición puede reproducirse.

- **Multi providers**  
  *Familia:* `jerarquía y dependencias`  
  Para Multi providers, la arquitectura de Inyección de dependencias profunda resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, garantizando artefacto versionado cuya composición puede reproducirse.

- **EnvironmentInjector lifecycle**  
  *Familia:* `ciclo de vida`  
  EnvironmentInjector lifecycle gestiona Inyección de dependencias profunda de modo que activa, usa y transfiere ownership solo bajo un protocolo explícito, produciendo recurso cerrado exactamente una vez y estado final observable.


### 📑 Sección: Router avanzado (7 conceptos)

- **Functional guards**  
  *Familia:* `validación y decisión`  
  Functional guards en Router avanzado: compone aplicaciones y propaga resultado o error sin mutar la entrada, asegurando valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Resolvers**  
  *Familia:* `pasaporte del artefacto`  
  En Router avanzado, Resolvers filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones para entregar un candidato trazable cuya precedencia explica el comportamiento.

- **Route reuse**  
  *Familia:* `topología y tráfico`  
  Route reuse aplica este mecanismo en Router avanzado: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, con reutilización medible sin cambiar el resultado funcional.

- **Auxiliary outlets**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Auxiliary outlets dentro de Router avanzado filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones y consolida un candidato trazable cuya precedencia explica el comportamiento.

- **Preloading strategies**  
  *Familia:* `memoria intermedia`  
  Para Preloading strategies, la arquitectura de Router avanzado filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones, garantizando un candidato trazable cuya precedencia explica el comportamiento.

- **RouteReuseStrategy contracts**  
  *Familia:* `topología y tráfico`  
  RouteReuseStrategy contracts gestiona Router avanzado de modo que consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, produciendo reutilización medible sin cambiar el resultado funcional.

- **Navigation cancellation**  
  *Familia:* `despacho de runtime`  
  A través de Navigation cancellation en Router avanzado, el sistema filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones manteniendo un candidato trazable cuya precedencia explica el comportamiento.


### 📑 Sección: Formularios tipados (7 conceptos)

- **Typed controls**  
  *Familia:* `flujo de transformación`  
  Typed controls en Formularios tipados: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Cross-field validation**  
  *Familia:* `validación y decisión`  
  En Formularios tipados, Cross-field validation evalúa precondiciones y combina restricciones antes de comprometer estado para entregar valor aceptado con garantía explícita o error localizado.

- **Async validators**  
  *Familia:* `comparativa técnica`  
  Async validators aplica este mecanismo en Formularios tipados: encola, planifica y reanuda unidades conservando causalidad y propagación de error, con resultado, cancelación o reinicio visibles para el supervisor correcto.

- **ControlValueAccessor**  
  *Familia:* `mapa de memoria`  
  El mecanismo de ControlValueAccessor dentro de Formularios tipados compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada y consolida DOM, árbol de inyección y estado reactivo coherentes.

- **Estado de envío accesible**  
  *Familia:* `máquina de estados`  
  Para Estado de envío accesible, la arquitectura de Formularios tipados compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, garantizando DOM, árbol de inyección y estado reactivo coherentes.

- **Async validator cancellation**  
  *Familia:* `validación y decisión`  
  Async validator cancellation gestiona Formularios tipados de modo que encola, planifica y reanuda unidades conservando causalidad y propagación de error, produciendo resultado, cancelación o reinicio visibles para el supervisor correcto.

- **ControlValueAccessor disabled propagation**  
  *Familia:* `mapa de memoria`  
  A través de ControlValueAccessor disabled propagation en Formularios tipados, el sistema compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada manteniendo DOM, árbol de inyección y estado reactivo coherentes.


### 📑 Sección: HTTP y datos (7 conceptos)

- **Functional interceptors**  
  *Familia:* `flujo de transformación`  
  Functional interceptors en HTTP y datos: compone aplicaciones y propaga resultado o error sin mutar la entrada, asegurando valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Cancellation de requests**  
  *Familia:* `ida y vuelta`  
  En HTTP y datos, Cancellation de requests serializa, negocia, transmite y traduce errores u ownership en la frontera para entregar respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Transfer cache**  
  *Familia:* `memoria intermedia`  
  Transfer cache aplica este mecanismo en HTTP y datos: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, con reutilización medible sin cambiar el resultado funcional.

- **Retry con política**  
  *Familia:* `validación y decisión`  
  El mecanismo de Retry con política dentro de HTTP y datos serializa, negocia, transmite y traduce errores u ownership en la frontera y consolida respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Streaming de respuestas**  
  *Familia:* `ida y vuelta`  
  Para Streaming de respuestas, la arquitectura de HTTP y datos propaga elementos, aplica ventana o transformación y regula producción con demanda, garantizando salida ordenada con memoria y latencia acotadas.

- **Interceptor ordering**  
  *Familia:* `consulta e índice`  
  Interceptor ordering gestiona HTTP y datos de modo que serializa, negocia, transmite y traduce errores u ownership en la frontera, produciendo respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Request cancellation**  
  *Familia:* `topología y tráfico`  
  A través de Request cancellation en HTTP y datos, el sistema serializa, negocia, transmite y traduce errores u ownership en la frontera manteniendo respuesta tipada o efecto confirmado con compatibilidad conocida.


### 📑 Sección: Renderizado (7 conceptos)

- **Incremental hydration**  
  *Familia:* `despacho de runtime`  
  Incremental hydration en Renderizado: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, asegurando reutilización medible sin cambiar el resultado funcional.

- **Event replay**  
  *Familia:* `cola y consumidor`  
  En Renderizado, Event replay anexa, publica y proyecta en orden conservando checkpoint del consumidor para entregar vista reconstruible y consumidor capaz de reanudar sin perder hechos.

- **Prerender parameters**  
  *Familia:* `flujo de interfaz`  
  Prerender parameters aplica este mecanismo en Renderizado: mide, compone, renderiza y actualiza solo las dependencias invalidadas, con interfaz navegable cuyo estado visual y semántico coinciden.

- **Server routes**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Server routes dentro de Renderizado filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones y consolida un candidato trazable cuya precedencia explica el comportamiento.

- **Hydration mismatch diagnosis**  
  *Familia:* `despacho de runtime`  
  Para Hydration mismatch diagnosis, la arquitectura de Renderizado mide, compone, renderiza y actualiza solo las dependencias invalidadas, garantizando interfaz navegable cuyo estado visual y semántico coinciden.

- **Hydration mismatch recovery**  
  *Familia:* `ciclo de vida`  
  Hydration mismatch recovery gestiona Renderizado de modo que aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro, produciendo servicio recuperado con pérdida y tiempo medidos.

- **TransferState leakage boundaries**  
  *Familia:* `máquina de estados`  
  A través de TransferState leakage boundaries en Renderizado, el sistema mide, compone, renderiza y actualiza solo las dependencias invalidadas manteniendo interfaz navegable cuyo estado visual y semántico coinciden.


### 📑 Sección: Testing unitario (7 conceptos)

- **TestBed**  
  *Familia:* `espectro de verificación`  
  TestBed en Testing unitario: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Component harnesses**  
  *Familia:* `validación y decisión`  
  En Testing unitario, Component harnesses ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **FakeAsync scheduler**  
  *Familia:* `planificación de trabajo`  
  FakeAsync scheduler aplica este mecanismo en Testing unitario: encola, planifica y reanuda unidades conservando causalidad y propagación de error, con resultado, cancelación o reinicio visibles para el supervisor correcto.

- **HTTP testing controller**  
  *Familia:* `ida y vuelta`  
  El mecanismo de HTTP testing controller dentro de Testing unitario ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Signal effect testing**  
  *Familia:* `espectro de verificación`  
  Para Signal effect testing, la arquitectura de Testing unitario ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Zoneless fixture stability**  
  *Familia:* `validación y decisión`  
  Zoneless fixture stability gestiona Testing unitario de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **Fake timer boundaries**  
  *Familia:* `evidencia y latencia`  
  A través de Fake timer boundaries en Testing unitario, el sistema ejecuta camino normal, límite y fallo mientras captura todos los efectos observables manteniendo evidencia repetible que distingue comportamiento correcto de una regresión.


### 📑 Sección: Testing integral (7 conceptos)

- **Contract tests**  
  *Familia:* `espectro de verificación`  
  Contract tests en Testing integral: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **End-to-end journeys**  
  *Familia:* `validación y decisión`  
  En Testing integral, End-to-end journeys ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **Visual regression**  
  *Familia:* `evidencia y latencia`  
  Visual regression aplica este mecanismo en Testing integral: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **Accessibility automation**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Accessibility automation dentro de Testing integral mide, compone, renderiza y actualiza solo las dependencias invalidadas y consolida interfaz navegable cuyo estado visual y semántico coinciden.

- **SSR integration tests**  
  *Familia:* `validación y decisión`  
  Para SSR integration tests, la arquitectura de Testing integral ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Harness environment contracts**  
  *Familia:* `evidencia y latencia`  
  Harness environment contracts gestiona Testing integral de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **Network contract fixtures**  
  *Familia:* `topología y tráfico`  
  A través de Network contract fixtures en Testing integral, el sistema ejecuta camino normal, límite y fallo mientras captura todos los efectos observables manteniendo evidencia repetible que distingue comportamiento correcto de una regresión.


### 📑 Sección: Seguridad de aplicación (7 conceptos)

- **Sanitization contexts**  
  *Familia:* `tejido literario`  
  Sanitization contexts en Seguridad de aplicación: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, asegurando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Trusted Types**  
  *Familia:* `validación y decisión`  
  En Seguridad de aplicación, Trusted Types autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **XSRF protection**  
  *Familia:* `comparativa técnica`  
  XSRF protection aplica este mecanismo en Seguridad de aplicación: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, con decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Route authorization limits**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Route authorization limits dentro de Seguridad de aplicación autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima y consolida decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Dependency vulnerability review**  
  *Familia:* `jerarquía y dependencias`  
  Para Dependency vulnerability review, la arquitectura de Seguridad de aplicación resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, garantizando artefacto versionado cuya composición puede reproducirse.

- **Trusted Types policies**  
  *Familia:* `validación y decisión`  
  Trusted Types policies gestiona Seguridad de aplicación de modo que autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, produciendo decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **CSP nonce handling**  
  *Familia:* `comparativa técnica`  
  A través de CSP nonce handling en Seguridad de aplicación, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### 📑 Sección: Rendimiento (7 conceptos)

- **OnPush strategy**  
  *Familia:* `evidencia y latencia`  
  OnPush strategy en Rendimiento: mide cuello de botella, cambia una variable y repite con calentamiento suficiente, asegurando mejora atribuible que conserva corrección y percentiles importantes.

- **Track expressions**  
  *Familia:* `ida y vuelta`  
  En Rendimiento, Track expressions mide cuello de botella, cambia una variable y repite con calentamiento suficiente para entregar mejora atribuible que conserva corrección y percentiles importantes.

- **Virtual scrolling**  
  *Familia:* `secuencia operativa`  
  Virtual scrolling aplica este mecanismo en Rendimiento: mide cuello de botella, cambia una variable y repite con calentamiento suficiente, con mejora atribuible que conserva corrección y percentiles importantes.

- **Bundle analysis**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Bundle analysis dentro de Rendimiento mide cuello de botella, cambia una variable y repite con calentamiento suficiente y consolida mejora atribuible que conserva corrección y percentiles importantes.

- **Runtime performance marks**  
  *Familia:* `despacho de runtime`  
  Para Runtime performance marks, la arquitectura de Rendimiento mide cuello de botella, cambia una variable y repite con calentamiento suficiente, garantizando mejora atribuible que conserva corrección y percentiles importantes.

- **Change-detection profiling**  
  *Familia:* `diagnóstico operativo`  
  Change-detection profiling gestiona Rendimiento de modo que instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, produciendo señal que permite localizar componente, versión y duración del problema.

- **Deferrable view budgets**  
  *Familia:* `evidencia y latencia`  
  A través de Deferrable view budgets en Rendimiento, el sistema mide, compone, renderiza y actualiza solo las dependencias invalidadas manteniendo interfaz navegable cuyo estado visual y semántico coinciden.


### 📑 Sección: Design systems (7 conceptos)

- **Angular CDK**  
  *Familia:* `mapa de memoria`  
  Angular CDK en Design systems: compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, asegurando DOM, árbol de inyección y estado reactivo coherentes.

- **Overlay primitives**  
  *Familia:* `pasaporte del artefacto`  
  En Design systems, Overlay primitives mide, compone, renderiza y actualiza solo las dependencias invalidadas para entregar interfaz navegable cuyo estado visual y semántico coinciden.

- **Theming tokens**  
  *Familia:* `evidencia y latencia`  
  Theming tokens aplica este mecanismo en Design systems: tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, con árbol, match o diagnóstico consumible por la siguiente etapa.

- **Form field semantics**  
  *Familia:* `consulta e índice`  
  El mecanismo de Form field semantics dentro de Design systems mide, compone, renderiza y actualiza solo las dependencias invalidadas y consolida interfaz navegable cuyo estado visual y semántico coinciden.

- **Component API stability**  
  *Familia:* `ida y vuelta`  
  Para Component API stability, la arquitectura de Design systems mide, compone, renderiza y actualiza solo las dependencias invalidadas, garantizando interfaz navegable cuyo estado visual y semántico coinciden.

- **Component token contracts**  
  *Familia:* `espectro de verificación`  
  Component token contracts gestiona Design systems de modo que tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación, produciendo árbol, match o diagnóstico consumible por la siguiente etapa.

- **Overlay accessibility**  
  *Familia:* `flujo de interfaz`  
  A través de Overlay accessibility en Design systems, el sistema mide, compone, renderiza y actualiza solo las dependencias invalidadas manteniendo interfaz navegable cuyo estado visual y semántico coinciden.


### 📑 Sección: Tooling y monorepos (7 conceptos)

- **Angular CLI builders**  
  *Familia:* `análisis y emisión`  
  Angular CLI builders en Tooling y monorepos: compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, asegurando DOM, árbol de inyección y estado reactivo coherentes.

- **Workspace libraries**  
  *Familia:* `mapa de memoria`  
  En Tooling y monorepos, Workspace libraries compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada para entregar DOM, árbol de inyección y estado reactivo coherentes.

- **Incremental builds**  
  *Familia:* `flujo de transformación`  
  Incremental builds aplica este mecanismo en Tooling y monorepos: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, con reutilización medible sin cambiar el resultado funcional.

- **Code generation schematics**  
  *Familia:* `validación y decisión`  
  El mecanismo de Code generation schematics dentro de Tooling y monorepos resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Dependency boundaries**  
  *Familia:* `jerarquía y dependencias`  
  Para Dependency boundaries, la arquitectura de Tooling y monorepos resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, garantizando artefacto versionado cuya composición puede reproducirse.

- **Affected project graphs**  
  *Familia:* `telar relacional`  
  Affected project graphs gestiona Tooling y monorepos de modo que ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, produciendo lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Builder cache keys**  
  *Familia:* `memoria intermedia`  
  A través de Builder cache keys en Tooling y monorepos, el sistema consulta, calcula ausencias y publica el nuevo valor junto con su invalidador manteniendo reutilización medible sin cambiar el resultado funcional.


### 📑 Sección: Interoperabilidad (7 conceptos)

- **Custom elements**  
  *Familia:* `despacho de runtime`  
  Custom elements en Interoperabilidad: compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, asegurando DOM, árbol de inyección y estado reactivo coherentes.

- **Web components**  
  *Familia:* `mapa de memoria`  
  En Interoperabilidad, Web components mide, compone, renderiza y actualiza solo las dependencias invalidadas para entregar interfaz navegable cuyo estado visual y semántico coinciden.

- **Microfrontends con Module Federation**  
  *Familia:* `capas internas`  
  Microfrontends con Module Federation aplica este mecanismo en Interoperabilidad: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, con artefacto versionado cuya composición puede reproducirse.

- **Integración de librerías no Angular**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Integración de librerías no Angular dentro de Interoperabilidad compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada y consolida DOM, árbol de inyección y estado reactivo coherentes.

- **Fronteras con AngularJS**  
  *Familia:* `mapa de memoria`  
  Para Fronteras con AngularJS, la arquitectura de Interoperabilidad compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, garantizando DOM, árbol de inyección y estado reactivo coherentes.

- **Custom-element event contracts**  
  *Familia:* `capas internas`  
  Custom-element event contracts gestiona Interoperabilidad de modo que evalúa precondiciones y combina restricciones antes de comprometer estado, produciendo valor aceptado con garantía explícita o error localizado.

- **Zone boundary adapters**  
  *Familia:* `despacho de runtime`  
  A través de Zone boundary adapters en Interoperabilidad, el sistema compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada manteniendo DOM, árbol de inyección y estado reactivo coherentes.


### 📑 Sección: Operación y evolución (8 conceptos)

- **ErrorHandler global**  
  *Familia:* `ciclo de vida`  
  ErrorHandler global en Operación y evolución: compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, asegurando DOM, árbol de inyección y estado reactivo coherentes.

- **Telemetría del router**  
  *Familia:* `pasaporte del artefacto`  
  En Operación y evolución, Telemetría del router filtra aplicabilidad, ordena especificidad y selecciona o combina implementaciones para entregar un candidato trazable cuya precedencia explica el comportamiento.

- **Source maps protegidos**  
  *Familia:* `workflow y decisiones`  
  Source maps protegidos aplica este mecanismo en Operación y evolución: compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, con DOM, árbol de inyección y estado reactivo coherentes.

- **Migrations con ng update**  
  *Familia:* `ciclo de vida`  
  El mecanismo de Migrations con ng update dentro de Operación y evolución promueve por etapas, observa señales y conserva una ruta de reversión y consolida versión activa con tráfico y datos dentro del contrato.

- **Canary y rollback frontend**  
  *Familia:* `pasaporte del artefacto`  
  Para Canary y rollback frontend, la arquitectura de Operación y evolución registra intención, valida conflictos y confirma o compensa la unidad completa, garantizando un estado durable que satisface aislamiento e invariantes declarados.

- **Version-skew detection**  
  *Familia:* `workflow y decisiones`  
  Version-skew detection gestiona Operación y evolución de modo que compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada, produciendo DOM, árbol de inyección y estado reactivo coherentes.

- **Rollback-compatible migrations**  
  *Familia:* `ciclo de vida`  
  A través de Rollback-compatible migrations en Operación y evolución, el sistema registra intención, valida conflictos y confirma o compensa la unidad completa manteniendo un estado durable que satisface aislamiento e invariantes declarados.

- **Deprecation budget enforcement**  
  *Familia:* `pasaporte del artefacto`  
  En el flujo operativo de Operación y evolución, Deprecation budget enforcement compiler y runtime resuelven dependencias, detectan cambios y actualizan la vista afectada para obtener DOM, árbol de inyección y estado reactivo coherentes.




---
[← Volver al Inicio](Home) | [Ver Grupo: Diseño e interfaces](Grupo-Interfaces) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
