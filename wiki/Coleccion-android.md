# 📘 [And] Android

> **Componentes, lifecycle, Compose, almacenamiento, permisos, trabajo y publicación.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `android` |
| **Grupo Arquitectónico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `react-native` |
| **Total de Conceptos** | **130 conceptos** |
| **Capítulos / Secciones** | **20 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/android)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/android-en-accion)**


## 🔬 Caso Práctico en Acción: Sincronizar una reparación offline

> **Caso integrado de Android:** Una app guarda una solicitud y la sincroniza con WorkManager; el proceso muere durante el upload y la tarea recupera estado idempotente al reiniciar.  
> La experiencia final conserva datos, lifecycle, constraints, reintento y estado accesible aun sin conexión.

### Fases de Ejecución:
1. **Capturar solicitud** (Sincronizar una reparación offline: etapa 1 de 5): `dao.insert(Repair.pending(form))` → Trabajo preservado localmente. *La etapa conserva un contrato explícito para que el siguiente paso de Android no dependa de supuestos ocultos.*
2. **Programar constraints** (Sincronizar una reparación offline: etapa 2 de 5): `OneTimeWorkRequestBuilder<SyncWorker>().setConstraints(network)` → Tarea delegada al sistema. *La etapa conserva un contrato explícito para que el siguiente paso de Android no dependa de supuestos ocultos.*
3. **Simular muerte de proceso** (Sincronizar una reparación offline: etapa 3 de 5): `adb shell am kill app.id` → Sincronización interrumpida. *El caso hace visible el fallo de Android; no continúa como si la evidencia fuera válida.*
4. **Reanudar idempotente** (Sincronizar una reparación offline: etapa 4 de 5): `api.putRepair(local.id, local.payload)` → Trabajo recuperado. *La recuperación de Android corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Reconstruir UI** (Sincronizar una reparación offline: etapa 5 de 5): `dao.observe(id).collectAsStateWithLifecycle()` → Resultado consistente. *La etapa conserva un contrato explícito para que el siguiente paso de Android no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (130)

### 📑 Sección: Plataforma (5 conceptos)

- **Proyecto y Gradle**  
  *Familia:* `pasaporte del artefacto`  
  El mecanismo de Proyecto y Gradle recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Application y Context**  
  *Familia:* `tejido literario`  
  Application y Context conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Resources**  
  *Familia:* `capas internas`  
  En Resources, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Manifest**  
  *Familia:* `configuración declarativa`  
  La función de Manifest parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Compatibilidad de API**  
  *Familia:* `consulta e índice`  
  Compatibilidad de API estructura un mensaje versionado, un destino y límites de tiempo en el sistema: serializa, transporta y valida el intercambio a través de una frontera remota, garantizando una respuesta correlacionada o un estado convergente verificable.


### 📑 Sección: Componentes y runtime (5 conceptos)

- **Activities**  
  *Familia:* `mapa de memoria`  
  La función de Activities parte de valores con representación, dirección y tiempo de vida definidos. Su ejecución reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime y produce estado accesible sin referencias colgantes ni corrupción.

- **Services**  
  *Familia:* `despacho de runtime`  
  Services estructura valores con representación, dirección y tiempo de vida definidos en el sistema: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime, garantizando estado accesible sin referencias colgantes ni corrupción.

- **Broadcast receivers**  
  *Familia:* `análisis y emisión`  
  El recorrido de Broadcast receivers toma valores con representación, dirección y tiempo de vida definidos. Posteriormente reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para validar estado accesible sin referencias colgantes ni corrupción.

- **Content providers**  
  *Familia:* `mapa de memoria`  
  Content providers procesa valores con representación, dirección y tiempo de vida definidos: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para entregar estado accesible sin referencias colgantes ni corrupción.

- **ART y proceso**  
  *Familia:* `planificación de trabajo`  
  Para entender ART y proceso, se delimita tareas con dependencias, recursos compartidos y una señal de cancelación. La operación ordena trabajo y sincronización sin ocultar intercalados posibles hasta producir progreso concurrente con ownership y terminación observables.


### 📑 Sección: Interfaz y estado (5 conceptos)

- **Lifecycle**  
  *Familia:* `ciclo de vida`  
  Para entender Lifecycle, se delimita un evento, el estado previo y una intención observable. La operación aplica una transición y deriva la representación sin perder contexto hasta producir estado e interfaz sincronizados con respuesta comprensible.

- **Jetpack Compose**  
  *Familia:* `flujo de interfaz`  
  El mecanismo de Jetpack Compose recibe un evento, el estado previo y una intención observable y aplica una transición y deriva la representación sin perder contexto, asegurando estado e interfaz sincronizados con respuesta comprensible.

- **ViewModel**  
  *Familia:* `mapa de memoria`  
  ViewModel conecta un evento, el estado previo y una intención observable con su runtime interno: aplica una transición y deriva la representación sin perder contexto hasta exponer estado e interfaz sincronizados con respuesta comprensible.

- **Navigation**  
  *Familia:* `superficie de aplicación`  
  En Navigation, un evento, el estado previo y una intención observable ingresa al flujo donde aplica una transición y deriva la representación sin perder contexto para consolidar estado e interfaz sincronizados con respuesta comprensible.

- **Persistencia local**  
  *Familia:* `consulta e índice`  
  La función de Persistencia local parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.


### 📑 Sección: Diagnóstico (5 conceptos)

- **Logcat**  
  *Familia:* `evidencia y latencia`  
  Logcat conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Android Studio debugger**  
  *Familia:* `diagnóstico operativo`  
  En Android Studio debugger, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **StrictMode**  
  *Familia:* `secuencia operativa`  
  La función de StrictMode parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Profilers**  
  *Familia:* `evidencia y latencia`  
  Profilers estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Pruebas instrumentadas**  
  *Familia:* `espectro de verificación`  
  El recorrido de Pruebas instrumentadas toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### 📑 Sección: Producción (5 conceptos)

- **Permisos**  
  *Familia:* `validación y decisión`  
  El mecanismo de Permisos recibe una identidad, un recurso protegido y una política explícita y evalúa confianza, privilegios y datos antes de autorizar cada efecto, asegurando una decisión mínima y trazable que no revela secretos.

- **Background limits**  
  *Familia:* `mapa de memoria`  
  Background limits conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **WorkManager**  
  *Familia:* `ciclo de vida`  
  En WorkManager, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **App signing**  
  *Familia:* `pasaporte del artefacto`  
  La función de App signing parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Play quality**  
  *Familia:* `capas internas`  
  Play quality estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Arquitectura de aplicación (6 conceptos)

- **Unidirectional data flow**  
  *Familia:* `consulta e índice`  
  Unidirectional data flow en Arquitectura de aplicación: el framework enruta el evento por componentes, Binder, ART y la capa de interfaz, asegurando estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Repository pattern**  
  *Familia:* `pasaporte del artefacto`  
  En Arquitectura de aplicación, Repository pattern el framework enruta el evento por componentes, Binder, ART y la capa de interfaz para entregar estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Domain layer**  
  *Familia:* `cuadrícula paralela`  
  Domain layer aplica este mecanismo en Arquitectura de aplicación: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **State holders**  
  *Familia:* `máquina de estados`  
  El mecanismo de State holders dentro de Arquitectura de aplicación el framework enruta el evento por componentes, Binder, ART y la capa de interfaz y consolida estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Modularización por feature**  
  *Familia:* `flujo de interfaz`  
  Para Modularización por feature, la arquitectura de Arquitectura de aplicación el framework enruta el evento por componentes, Binder, ART y la capa de interfaz, garantizando estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Process-death state restoration**  
  *Familia:* `secuencia operativa`  
  Process-death state restoration gestiona Arquitectura de aplicación de modo que el framework enruta el evento por componentes, Binder, ART y la capa de interfaz, produciendo estado visible y persistente que sobrevive la transición de lifecycle prevista.


### 📑 Sección: Compose profundo (8 conceptos)

- **Recomposition scopes**  
  *Familia:* `flujo de transformación`  
  Recomposition scopes en Compose profundo: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, asegurando reutilización medible sin cambiar el resultado funcional.

- **State hoisting**  
  *Familia:* `máquina de estados`  
  En Compose profundo, State hoisting mide, compone, renderiza y actualiza solo las dependencias invalidadas para entregar interfaz navegable cuyo estado visual y semántico coinciden.

- **Snapshot system**  
  *Familia:* `jerarquía y dependencias`  
  Snapshot system aplica este mecanismo en Compose profundo: consulta, calcula ausencias y publica el nuevo valor junto con su invalidador, con reutilización medible sin cambiar el resultado funcional.

- **Side-effect APIs**  
  *Familia:* `ida y vuelta`  
  El mecanismo de Side-effect APIs dentro de Compose profundo mide, compone, renderiza y actualiza solo las dependencias invalidadas y consolida interfaz navegable cuyo estado visual y semántico coinciden.

- **Layouts personalizados**  
  *Familia:* `mapa de memoria`  
  Para Layouts personalizados, la arquitectura de Compose profundo resuelve composición, restricciones y representación antes de aceptar la instancia, garantizando estructura válida cuyas operaciones permitidas están explícitas.

- **Stability inference**  
  *Familia:* `flujo de interfaz`  
  Stability inference gestiona Compose profundo de modo que mide, compone, renderiza y actualiza solo las dependencias invalidadas, produciendo interfaz navegable cuyo estado visual y semántico coinciden.

- **Snapshot state conflicts**  
  *Familia:* `máquina de estados`  
  A través de Snapshot state conflicts en Compose profundo, el sistema consulta, calcula ausencias y publica el nuevo valor junto con su invalidador manteniendo reutilización medible sin cambiar el resultado funcional.

- **Snapshot apply observers**  
  *Familia:* `flujo de transformación`  
  En el flujo operativo de Compose profundo, Snapshot apply observers consulta, calcula ausencias y publica el nuevo valor junto con su invalidador para obtener reutilización medible sin cambiar el resultado funcional.


### 📑 Sección: Interfaz clásica (6 conceptos)

- **View hierarchy**  
  *Familia:* `despacho de runtime`  
  View hierarchy en Interfaz clásica: mide, compone, renderiza y actualiza solo las dependencias invalidadas, asegurando interfaz navegable cuyo estado visual y semántico coinciden.

- **ConstraintLayout**  
  *Familia:* `mapa de memoria`  
  En Interfaz clásica, ConstraintLayout resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **RecyclerView**  
  *Familia:* `flujo de interfaz`  
  RecyclerView aplica este mecanismo en Interfaz clásica: mide, compone, renderiza y actualiza solo las dependencias invalidadas, con interfaz navegable cuyo estado visual y semántico coinciden.

- **Fragments**  
  *Familia:* `ciclo de vida`  
  El mecanismo de Fragments dentro de Interfaz clásica mide, compone, renderiza y actualiza solo las dependencias invalidadas y consolida interfaz navegable cuyo estado visual y semántico coinciden.

- **View binding**  
  *Familia:* `superficie de aplicación`  
  Para View binding, la arquitectura de Interfaz clásica mide, compone, renderiza y actualiza solo las dependencias invalidadas, garantizando interfaz navegable cuyo estado visual y semántico coinciden.

- **Window insets**  
  *Familia:* `mapa de memoria`  
  Window insets gestiona Interfaz clásica de modo que propaga elementos, aplica ventana o transformación y regula producción con demanda, produciendo salida ordenada con memoria y latencia acotadas.


### 📑 Sección: Datos locales (7 conceptos)

- **Room schema**  
  *Familia:* `consulta e índice`  
  Room schema en Datos locales: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **DataStore**  
  *Familia:* `análisis y emisión`  
  En Datos locales, DataStore analiza, expande, especializa y baja a una representación ejecutable para entregar código cuyo origen y decisiones de optimización pueden inspeccionarse.

- **Storage Access Framework**  
  *Familia:* `telar relacional`  
  Storage Access Framework aplica este mecanismo en Datos locales: normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde, con contenido persistido con identidad, metadatos y ownership verificables.

- **Encrypted storage**  
  *Familia:* `consulta e índice`  
  El mecanismo de Encrypted storage dentro de Datos locales el framework enruta el evento por componentes, Binder, ART y la capa de interfaz y consolida estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Migraciones de datos locales**  
  *Familia:* `secuencia operativa`  
  Para Migraciones de datos locales, la arquitectura de Datos locales promueve por etapas, observa señales y conserva una ruta de reversión, garantizando versión activa con tráfico y datos dentro del contrato.

- **WAL checkpoint behavior**  
  *Familia:* `pasaporte del artefacto`  
  WAL checkpoint behavior gestiona Datos locales de modo que registra intención, valida conflictos y confirma o compensa la unidad completa, produciendo un estado durable que satisface aislamiento e invariantes declarados.

- **Schema export verification**  
  *Familia:* `validación y decisión`  
  A través de Schema export verification en Datos locales, el sistema resuelve composición, restricciones y representación antes de aceptar la instancia manteniendo estructura válida cuyas operaciones permitidas están explícitas.


### 📑 Sección: Red y sincronización (7 conceptos)

- **Conectividad cambiante**  
  *Familia:* `planificación de trabajo`  
  Conectividad cambiante en Red y sincronización: serializa, negocia, transmite y traduce errores u ownership en la frontera, asegurando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Offline-first**  
  *Familia:* `cola y consumidor`  
  En Red y sincronización, Offline-first serializa, negocia, transmite y traduce errores u ownership en la frontera para entregar respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Paginación remota**  
  *Familia:* `tejido de eventos`  
  Paginación remota aplica este mecanismo en Red y sincronización: reserva, mapea o mueve memoria y registra quién debe reclamarla, con datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.

- **Conflictos de sincronización**  
  *Familia:* `secuencia operativa`  
  El mecanismo de Conflictos de sincronización dentro de Red y sincronización serializa, negocia, transmite y traduce errores u ownership en la frontera y consolida respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Certificados y network security config**  
  *Familia:* `topología y tráfico`  
  Para Certificados y network security config, la arquitectura de Red y sincronización autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Network Security Config**  
  *Familia:* `ida y vuelta`  
  Network Security Config gestiona Red y sincronización de modo que autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, produciendo decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Offline conflict resolution**  
  *Familia:* `planificación de trabajo`  
  A través de Offline conflict resolution en Red y sincronización, el sistema serializa, negocia, transmite y traduce errores u ownership en la frontera manteniendo respuesta tipada o efecto confirmado con compatibilidad conocida.


### 📑 Sección: Coroutines en Android (7 conceptos)

- **Structured concurrency**  
  *Familia:* `topología y tráfico`  
  Structured concurrency en Coroutines en Android: adquiere o señaliza sincronización, publica cambios y libera en un orden definido, asegurando estado visible sin carreras y progreso dentro del límite acordado.

- **Lifecycle scopes**  
  *Familia:* `ciclo de vida`  
  En Coroutines en Android, Lifecycle scopes activa, usa y transfiere ownership solo bajo un protocolo explícito para entregar recurso cerrado exactamente una vez y estado final observable.

- **Flow hot y cold**  
  *Familia:* `planificación de trabajo`  
  Flow hot y cold aplica este mecanismo en Coroutines en Android: propaga elementos, aplica ventana o transformación y regula producción con demanda, con salida ordenada con memoria y latencia acotadas.

- **Dispatchers**  
  *Familia:* `despacho de runtime`  
  El mecanismo de Dispatchers dentro de Coroutines en Android encola, planifica y reanuda unidades conservando causalidad y propagación de error y consolida resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Cancelación cooperativa**  
  *Familia:* `cola y consumidor`  
  Para Cancelación cooperativa, la arquitectura de Coroutines en Android encola, planifica y reanuda unidades conservando causalidad y propagación de error, garantizando resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Dispatcher injection**  
  *Familia:* `propagación de eventos`  
  Dispatcher injection gestiona Coroutines en Android de modo que encola, planifica y reanuda unidades conservando causalidad y propagación de error, produciendo resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Supervisor scope boundaries**  
  *Familia:* `tejido de eventos`  
  A través de Supervisor scope boundaries en Coroutines en Android, el sistema encola, planifica y reanuda unidades conservando causalidad y propagación de error manteniendo resultado, cancelación o reinicio visibles para el supervisor correcto.


### 📑 Sección: Multimedia y sensores (7 conceptos)

- **CameraX**  
  *Familia:* `matriz de señales`  
  CameraX en Multimedia y sensores: vincula el productor al lifecycle, transforma la muestra y entrega solo mientras el consumidor está activo, asegurando frame, señal o ubicación con tiempo y precisión conocidos.

- **Media3**  
  *Familia:* `cola y consumidor`  
  En Multimedia y sensores, Media3 vincula el productor al lifecycle, transforma la muestra y entrega solo mientras el consumidor está activo para entregar frame, señal o ubicación con tiempo y precisión conocidos.

- **SensorManager**  
  *Familia:* `flujo de transformación`  
  SensorManager aplica este mecanismo en Multimedia y sensores: vincula el productor al lifecycle, transforma la muestra y entrega solo mientras el consumidor está activo, con frame, señal o ubicación con tiempo y precisión conocidos.

- **Bluetooth Low Energy**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Bluetooth Low Energy dentro de Multimedia y sensores serializa, negocia, transmite y traduce errores u ownership en la frontera y consolida respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Ubicación con límites de privacidad**  
  *Familia:* `validación y decisión`  
  Para Ubicación con límites de privacidad, la arquitectura de Multimedia y sensores autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Sensor coordinate transforms**  
  *Familia:* `matriz de señales`  
  Sensor coordinate transforms gestiona Multimedia y sensores de modo que vincula el productor al lifecycle, transforma la muestra y entrega solo mientras el consumidor está activo, produciendo frame, señal o ubicación con tiempo y precisión conocidos.

- **Camera use-case binding**  
  *Familia:* `cola y consumidor`  
  A través de Camera use-case binding en Multimedia y sensores, el sistema vincula el productor al lifecycle, transforma la muestra y entrega solo mientras el consumidor está activo manteniendo frame, señal o ubicación con tiempo y precisión conocidos.


### 📑 Sección: Accesibilidad e internacionalización (7 conceptos)

- **Semantics de Compose**  
  *Familia:* `ciclo de vida`  
  Semantics de Compose en Accesibilidad e internacionalización: mide, compone, renderiza y actualiza solo las dependencias invalidadas, asegurando interfaz navegable cuyo estado visual y semántico coinciden.

- **TalkBack traversal**  
  *Familia:* `pasaporte del artefacto`  
  En Accesibilidad e internacionalización, TalkBack traversal mide, compone, renderiza y actualiza solo las dependencias invalidadas para entregar interfaz navegable cuyo estado visual y semántico coinciden.

- **Dynamic type**  
  *Familia:* `flujo de transformación`  
  Dynamic type aplica este mecanismo en Accesibilidad e internacionalización: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **Recursos localizados**  
  *Familia:* `acumulación de recursos`  
  El mecanismo de Recursos localizados dentro de Accesibilidad e internacionalización activa, usa y transfiere ownership solo bajo un protocolo explícito y consolida recurso cerrado exactamente una vez y estado final observable.

- **Layouts bidireccionales**  
  *Familia:* `mapa de memoria`  
  Para Layouts bidireccionales, la arquitectura de Accesibilidad e internacionalización resuelve composición, restricciones y representación antes de aceptar la instancia, garantizando estructura válida cuyas operaciones permitidas están explícitas.

- **Touch target geometry**  
  *Familia:* `flujo de interfaz`  
  Touch target geometry gestiona Accesibilidad e internacionalización de modo que mide, compone, renderiza y actualiza solo las dependencias invalidadas, produciendo interfaz navegable cuyo estado visual y semántico coinciden.

- **Locale plural rules**  
  *Familia:* `validación y decisión`  
  A través de Locale plural rules en Accesibilidad e internacionalización, el sistema mide, compone, renderiza y actualiza solo las dependencias invalidadas manteniendo interfaz navegable cuyo estado visual y semántico coinciden.


### 📑 Sección: Testing por capas (7 conceptos)

- **JUnit local**  
  *Familia:* `espectro de verificación`  
  JUnit local en Testing por capas: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Compose UI tests**  
  *Familia:* `ciclo de vida`  
  En Testing por capas, Compose UI tests ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **Espresso**  
  *Familia:* `validación y decisión`  
  Espresso aplica este mecanismo en Testing por capas: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **Macrobenchmark**  
  *Familia:* `comparativa técnica`  
  El mecanismo de Macrobenchmark dentro de Testing por capas ejecuta camino normal, límite y fallo mientras captura todos los efectos observables y consolida evidencia repetible que distingue comportamiento correcto de una regresión.

- **Fake services y test doubles**  
  *Familia:* `espectro de verificación`  
  Para Fake services y test doubles, la arquitectura de Testing por capas ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, garantizando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Idling-resource synchronization**  
  *Familia:* `validación y decisión`  
  Idling-resource synchronization gestiona Testing por capas de modo que ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, produciendo evidencia repetible que distingue comportamiento correcto de una regresión.

- **Hermetic device fixtures**  
  *Familia:* `evidencia y latencia`  
  A través de Hermetic device fixtures en Testing por capas, el sistema ejecuta camino normal, límite y fallo mientras captura todos los efectos observables manteniendo evidencia repetible que distingue comportamiento correcto de una regresión.


### 📑 Sección: Rendimiento (7 conceptos)

- **Baseline Profiles**  
  *Familia:* `diagnóstico operativo`  
  Baseline Profiles en Rendimiento: instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, asegurando señal que permite localizar componente, versión y duración del problema.

- **Startup tracing**  
  *Familia:* `secuencia operativa`  
  En Rendimiento, Startup tracing instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución para entregar señal que permite localizar componente, versión y duración del problema.

- **Jank analysis**  
  *Familia:* `evidencia y latencia`  
  Jank analysis aplica este mecanismo en Rendimiento: mide cuello de botella, cambia una variable y repite con calentamiento suficiente, con mejora atribuible que conserva corrección y percentiles importantes.

- **Memory leak detection**  
  *Familia:* `memoria intermedia`  
  El mecanismo de Memory leak detection dentro de Rendimiento consulta, calcula ausencias y publica el nuevo valor junto con su invalidador y consolida reutilización medible sin cambiar el resultado funcional.

- **Battery Historian**  
  *Familia:* `secuencia operativa`  
  Para Battery Historian, la arquitectura de Rendimiento mide cuello de botella, cambia una variable y repite con calentamiento suficiente, garantizando mejora atribuible que conserva corrección y percentiles importantes.

- **Frame jank budgets**  
  *Familia:* `evidencia y latencia`  
  Frame jank budgets gestiona Rendimiento de modo que mide cuello de botella, cambia una variable y repite con calentamiento suficiente, produciendo mejora atribuible que conserva corrección y percentiles importantes.

- **Heap leak analysis**  
  *Familia:* `tabla de estados`  
  A través de Heap leak analysis en Rendimiento, el sistema reserva, mapea o mueve memoria y registra quién debe reclamarla manteniendo datos accesibles durante el lifetime exacto y capacidad devuelta al finalizar.


### 📑 Sección: Seguridad móvil (7 conceptos)

- **Android Keystore**  
  *Familia:* `validación y decisión`  
  Android Keystore en Seguridad móvil: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, asegurando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **BiometricPrompt**  
  *Familia:* `evidencia y latencia`  
  En Seguridad móvil, BiometricPrompt autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Intent spoofing**  
  *Familia:* `ciclo de vida`  
  Intent spoofing aplica este mecanismo en Seguridad móvil: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, con decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Deep link validation**  
  *Familia:* `validación y decisión`  
  El mecanismo de Deep link validation dentro de Seguridad móvil evalúa precondiciones y combina restricciones antes de comprometer estado y consolida valor aceptado con garantía explícita o error localizado.

- **Play Integrity API**  
  *Familia:* `espectro de verificación`  
  Para Play Integrity API, la arquitectura de Seguridad móvil evalúa precondiciones y combina restricciones antes de comprometer estado, garantizando valor aceptado con garantía explícita o error localizado.

- **Exported component attack surface**  
  *Familia:* `comparativa técnica`  
  Exported component attack surface gestiona Seguridad móvil de modo que autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, produciendo decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Credential Manager lifecycle**  
  *Familia:* `topología y tráfico`  
  A través de Credential Manager lifecycle en Seguridad móvil, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### 📑 Sección: Procesos y Binder (7 conceptos)

- **Binder IPC**  
  *Familia:* `ciclo de vida`  
  Binder IPC en Procesos y Binder: serializa, negocia, transmite y traduce errores u ownership en la frontera, asegurando respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Parcelables**  
  *Familia:* `despacho de runtime`  
  En Procesos y Binder, Parcelables codifica campos en orden definido y reconstruye validando versión y rangos para entregar representación interoperable que conserva significado al hacer round trip.

- **Process lifecycle priority**  
  *Familia:* `secuencia operativa`  
  Process lifecycle priority aplica este mecanismo en Procesos y Binder: activa, usa y transfiere ownership solo bajo un protocolo explícito, con recurso cerrado exactamente una vez y estado final observable.

- **Bound services**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Bound services dentro de Procesos y Binder serializa, negocia, transmite y traduce errores u ownership en la frontera y consolida respuesta tipada o efecto confirmado con compatibilidad conocida.

- **ANR internals**  
  *Familia:* `cola y consumidor`  
  Para ANR internals, la arquitectura de Procesos y Binder instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, garantizando señal que permite localizar componente, versión y duración del problema.

- **Binder transaction size limits**  
  *Familia:* `ciclo de vida`  
  Binder transaction size limits gestiona Procesos y Binder de modo que registra intención, valida conflictos y confirma o compensa la unidad completa, produciendo un estado durable que satisface aislamiento e invariantes declarados.

- **DeathRecipient recovery**  
  *Familia:* `máquina de estados`  
  A través de DeathRecipient recovery en Procesos y Binder, el sistema aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro manteniendo servicio recuperado con pérdida y tiempo medidos.


### 📑 Sección: Tooling y build (7 conceptos)

- **Android Gradle Plugin**  
  *Familia:* `flujo de transformación`  
  Android Gradle Plugin en Tooling y build: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, asegurando artefacto versionado cuya composición puede reproducirse.

- **Build variants**  
  *Familia:* `análisis y emisión`  
  En Tooling y build, Build variants resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado para entregar artefacto versionado cuya composición puede reproducirse.

- **Version catalogs**  
  *Familia:* `evidencia y latencia`  
  Version catalogs aplica este mecanismo en Tooling y build: resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, con artefacto versionado cuya composición puede reproducirse.

- **R8 shrinking**  
  *Familia:* `flujo de transformación`  
  El mecanismo de R8 shrinking dentro de Tooling y build resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado y consolida artefacto versionado cuya composición puede reproducirse.

- **Reproducible APK y AAB**  
  *Familia:* `jerarquía y dependencias`  
  Para Reproducible APK y AAB, la arquitectura de Tooling y build resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, garantizando artefacto versionado cuya composición puede reproducirse.

- **R8 keep-rule diagnostics**  
  *Familia:* `validación y decisión`  
  R8 keep-rule diagnostics gestiona Tooling y build de modo que resuelve el grafo, verifica procedencia, compila y empaqueta con entorno fijado, produciendo artefacto versionado cuya composición puede reproducirse.

- **Baseline Profile installation**  
  *Familia:* `evidencia y latencia`  
  A través de Baseline Profile installation en Tooling y build, el sistema instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución manteniendo señal que permite localizar componente, versión y duración del problema.


### 📑 Sección: Entrega y compatibilidad (7 conceptos)

- **App Bundles**  
  *Familia:* `pasaporte del artefacto`  
  App Bundles en Entrega y compatibilidad: el framework enruta el evento por componentes, Binder, ART y la capa de interfaz, asegurando estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Dynamic feature delivery**  
  *Familia:* `capas internas`  
  En Entrega y compatibilidad, Dynamic feature delivery el framework enruta el evento por componentes, Binder, ART y la capa de interfaz para entregar estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Staged rollout**  
  *Familia:* `ciclo de vida`  
  Staged rollout aplica este mecanismo en Entrega y compatibilidad: promueve por etapas, observa señales y conserva una ruta de reversión, con versión activa con tráfico y datos dentro del contrato.

- **Backward compatibility**  
  *Familia:* `pasaporte del artefacto`  
  El mecanismo de Backward compatibility dentro de Entrega y compatibilidad el framework enruta el evento por componentes, Binder, ART y la capa de interfaz y consolida estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Behavior changes por API level**  
  *Familia:* `capas internas`  
  Para Behavior changes por API level, la arquitectura de Entrega y compatibilidad el framework enruta el evento por componentes, Binder, ART y la capa de interfaz, garantizando estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Signing key rotation**  
  *Familia:* `workflow y decisiones`  
  Signing key rotation gestiona Entrega y compatibilidad de modo que promueve por etapas, observa señales y conserva una ruta de reversión, produciendo versión activa con tráfico y datos dentro del contrato.

- **Staged rollout halt criteria**  
  *Familia:* `ciclo de vida`  
  A través de Staged rollout halt criteria en Entrega y compatibilidad, el sistema promueve por etapas, observa señales y conserva una ruta de reversión manteniendo versión activa con tráfico y datos dentro del contrato.


### 📑 Sección: Diagnóstico en producción (8 conceptos)

- **Crash reporting**  
  *Familia:* `evidencia y latencia`  
  Crash reporting en Diagnóstico en producción: el framework enruta el evento por componentes, Binder, ART y la capa de interfaz, asegurando estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Application Not Responding reports**  
  *Familia:* `secuencia operativa`  
  En Diagnóstico en producción, Application Not Responding reports el framework enruta el evento por componentes, Binder, ART y la capa de interfaz para entregar estado visible y persistente que sobrevive la transición de lifecycle prevista.

- **Vitals de Play**  
  *Familia:* `tabla de estados`  
  Vitals de Play aplica este mecanismo en Diagnóstico en producción: instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, con señal que permite localizar componente, versión y duración del problema.

- **Tombstones nativos**  
  *Familia:* `matriz de señales`  
  El mecanismo de Tombstones nativos dentro de Diagnóstico en producción instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución y consolida señal que permite localizar componente, versión y duración del problema.

- **Rollback de versión móvil**  
  *Familia:* `evidencia y latencia`  
  Para Rollback de versión móvil, la arquitectura de Diagnóstico en producción registra intención, valida conflictos y confirma o compensa la unidad completa, garantizando un estado durable que satisface aislamiento e invariantes declarados.

- **Native tombstone symbolication**  
  *Familia:* `topología y tráfico`  
  Native tombstone symbolication gestiona Diagnóstico en producción de modo que instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, produciendo señal que permite localizar componente, versión y duración del problema.

- **ANR trace correlation**  
  *Familia:* `diagnóstico operativo`  
  A través de ANR trace correlation en Diagnóstico en producción, el sistema instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución manteniendo señal que permite localizar componente, versión y duración del problema.

- **Play Console symbol uploads**  
  *Familia:* `evidencia y latencia`  
  En el flujo operativo de Diagnóstico en producción, Play Console symbol uploads normaliza ruta, abre mediante handle, transfiere y fuerza durabilidad cuando corresponde para obtener contenido persistido con identidad, metadatos y ownership verificables.




---
[← Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
