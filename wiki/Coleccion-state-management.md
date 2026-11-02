# 📘 [State] Gestión de estado

> **Ownership, stores, caché remota, persistencia y offline.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `state-management` |
| **Grupo Arquitectónico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `state-management` |
| **Total de Conceptos** | **75 conceptos** |
| **Capítulos / Secciones** | **7 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/gestion-estado)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/gestion-estado-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (75)

### 📑 Sección: Modelado y propiedad del estado (10 conceptos)

- **Qué es estado**  
  *Familia:* `anatomía del concepto`  
  Información que cambia con el tiempo y modifica el comportamiento o la interfaz.

- **Estado mínimo**  
  *Familia:* `máquina de estados`  
  Conserva fuentes de verdad y calcula el resto.

- **Fuente única de verdad**  
  *Familia:* `diagnóstico operativo`  
  Asigna una autoridad a cada dato para evitar copias editables compitiendo.

- **Propiedad y colocación**  
  *Familia:* `memoria intermedia`  
  Ubica el estado en el dueño común más cercano.

- **Estado local, global y remoto**  
  *Familia:* `secuencia operativa`  
  Distingue memoria de componente, cliente compartido y datos del servidor.

- **Estado de URL**  
  *Familia:* `tabla de estados`  
  Modela filtros o vistas compartibles mediante pathname y search params.

- **Estado persistente**  
  *Familia:* `flujo de ejecución`  
  Guarda una copia entre sesiones sin confundir persistencia con autoridad.

- **Estado derivado**  
  *Familia:* `ciclo de vida`  
  Calcula valores desde fuentes existentes.

- **Estados imposibles**  
  *Familia:* `árbol de recursos`  
  Representa variantes exclusivas para evitar combinaciones incoherentes.

- **Normalización e identidad**  
  *Familia:* `consulta e índice`  
  Guarda entidades por id y relaciones mediante referencias estables.


### 📑 Sección: Estado local en React (10 conceptos)

- **useState**  
  *Familia:* `máquina de estados`  
  Proporciona memoria local y un setter que solicita otro render.

- **Estado como snapshot**  
  *Familia:* `secuencia operativa`  
  Cada render observa una fotografía inmutable del estado.

- **Batching**  
  *Familia:* `planificación de trabajo`  
  Agrupa actualizaciones del mismo turno para evitar commits intermedios.

- **Actualizaciones funcionales**  
  *Familia:* `propagación de eventos`  
  Calcula el siguiente valor desde el estado pendiente.

- **Objetos inmutables**  
  *Familia:* `ciclo de vida`  
  Crea nuevas referencias al actualizar objetos.

- **Arrays inmutables**  
  *Familia:* `diagnóstico operativo`  
  Usa map, filter y spread sin alterar la versión anterior.

- **Inicialización perezosa**  
  *Familia:* `superficie de aplicación`  
  Ejecuta una función costosa solo al crear el estado.

- **Reset mediante key**  
  *Familia:* `contratos coordinados`  
  Cambia identidad para descartar estado local de un subárbol.

- **useReducer**  
  *Familia:* `topología y tráfico`  
  Centraliza transiciones complejas en una función pura.

- **Context y reducer**  
  *Familia:* `ida y vuelta`  
  Distribuye estado y dispatch sin prop drilling.


### 📑 Sección: Arquitectura compartida (8 conceptos)

- **Lifting state up**  
  *Familia:* `máquina de estados`  
  Mueve el estado al ancestro común que coordina a varios hijos.

- **Colocación por dominio**  
  *Familia:* `cola y consumidor`  
  Agrupa estado y lógica cerca de la feature que los modifica.

- **Prop drilling**  
  *Familia:* `superficie de aplicación`  
  Reconoce cuándo pasar props es explícito y cuándo una cadena profunda requiere otra frontera.

- **Selectores**  
  *Familia:* `flujo de ejecución`  
  Exponen vistas específicas del estado y ocultan su estructura interna.

- **Suscripciones granulares**  
  *Familia:* `flujo de transformación`  
  Notifican solo a consumidores cuya porción realmente cambió.

- **useSyncExternalStore**  
  *Familia:* `contratos coordinados`  
  Conecta stores externos con snapshots consistentes para render concurrente y SSR.

- **Separación lectura y escritura**  
  *Familia:* `aislamiento sobre host`  
  Expone comandos para cambiar y selectores para leer.

- **Eventos de dominio**  
  *Familia:* `ecosistema coordinado`  
  Nombra cambios según el negocio en lugar de detalles de la interfaz.


### 📑 Sección: Redux Toolkit (14 conceptos)

- **Store Redux**  
  *Familia:* `topología y tráfico`  
  Mantiene un árbol de estado, procesa acciones y notifica suscriptores.

- **Acciones**  
  *Familia:* `análisis y emisión`  
  Describen eventos serializables con type y payload.

- **Reducers**  
  *Familia:* `jerarquía y dependencias`  
  Calculan el siguiente estado de forma determinista.

- **configureStore**  
  *Familia:* `configuración declarativa`  
  Ensambla reducers, middleware, DevTools y comprobaciones recomendadas.

- **createSlice**  
  *Familia:* `anatomía del concepto`  
  Agrupa estado inicial, reducers y action creators de una feature.

- **Immer**  
  *Familia:* `validación y decisión`  
  Permite sintaxis mutativa sobre un borrador que produce copias inmutables.

- **Dispatch**  
  *Familia:* `flujo de transformación`  
  Envía acciones al pipeline de Redux.

- **Provider y hooks**  
  *Familia:* `propagación de eventos`  
  Conecta el store con React mediante Provider, useSelector y useDispatch.

- **useSelector**  
  *Familia:* `ida y vuelta`  
  Suscribe un componente al resultado de un selector.

- **createAsyncThunk**  
  *Familia:* `capas internas`  
  Modela pending, fulfilled y rejected para una promesa.

- **Middleware**  
  *Familia:* `comparativa técnica`  
  Interviene acciones para logging, efectos o asincronía.

- **Listener middleware**  
  *Familia:* `ecosistema coordinado`  
  Reacciona a acciones o cambios con efectos cancelables.

- **createEntityAdapter**  
  *Familia:* `memoria intermedia`  
  Normaliza colecciones y genera reducers y selectores.

- **Redux DevTools**  
  *Familia:* `evidencia y latencia`  
  Registra acciones y snapshots para replay y time travel.


### 📑 Sección: Estado remoto y caché (13 conceptos)

- **Estado de servidor**  
  *Familia:* `tabla de estados`  
  Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso.

- **Query keys**  
  *Familia:* `consulta e índice`  
  Identifican una consulta y todos sus parámetros dentro de la caché.

- **Fresh y stale**  
  *Familia:* `comparativa técnica`  
  Define cuánto tiempo una copia se considera reciente.

- **Ciclo de vida de caché**  
  *Familia:* `memoria intermedia`  
  Crea, comparte, desactiva y elimina entradas según observadores y tiempos.

- **Invalidación**  
  *Familia:* `validación y decisión`  
  Marca consultas relacionadas como obsoletas después de una mutación.

- **Mutaciones**  
  *Familia:* `evidencia y latencia`  
  Modelan escrituras remotas con variables y estados pending, success y error.

- **Actualización optimista**  
  *Familia:* `flujo de ejecución`  
  Aplica una predicción local y conserva rollback.

- **Cancelación de consultas**  
  *Familia:* `jerarquía y dependencias`  
  Abortar trabajo obsoleto evita carreras y consumo innecesario.

- **Consultas dependientes**  
  *Familia:* `árbol de recursos`  
  Activa una consulta cuando existe la clave producida por otra.

- **Paginación e infinite queries**  
  *Familia:* `ecosistema coordinado`  
  Conserva páginas, cursores y cargas incrementales.

- **Prefetch**  
  *Familia:* `propagación de eventos`  
  Carga datos antes de mostrarlos cuando existe intención probable.

- **SSR e hidratación**  
  *Familia:* `aislamiento sobre host`  
  Transfiere la caché del servidor al cliente para evitar una consulta duplicada.

- **TanStack Query y RTK Query**  
  *Familia:* `acumulación de recursos`  
  Gestionan caché, mutaciones y revalidación con integraciones diferentes.


### 📑 Sección: Stores ligeros y máquinas (8 conceptos)

- **Zustand**  
  *Familia:* `evidencia y latencia`  
  Crea stores pequeños con acciones y selectores sin reducers obligatorios.

- **Estado atómico**  
  *Familia:* `secuencia operativa`  
  Compone unidades independientes y valores derivados mediante un grafo.

- **Signals**  
  *Familia:* `cola y consumidor`  
  Propagan cambios a consumidores que leen una señal.

- **Máquinas de estado**  
  *Familia:* `máquina de estados`  
  Definen estados, eventos y transiciones permitidas.

- **Statecharts**  
  *Familia:* `tabla de estados`  
  Añaden jerarquía, paralelismo e historial a máquinas.

- **Event sourcing**  
  *Familia:* `propagación de eventos`  
  Conserva eventos inmutables y reconstruye proyecciones.

- **Command Query Separation**  
  *Familia:* `consulta e índice`  
  Distingue operaciones que cambian de consultas que leen.

- **Elegir herramienta**  
  *Familia:* `comparativa técnica`  
  Evalúa alcance, autoridad, frecuencia, SSR, offline y equipo.


### 📑 Sección: Persistencia, calidad y operación (12 conceptos)

- **Persistencia local**  
  *Familia:* `flujo de transformación`  
  Serializa una copia para recuperarla entre sesiones.

- **Versionado y migraciones**  
  *Familia:* `jerarquía y dependencias`  
  Transforma snapshots antiguos al esquema actual.

- **Sincronización entre pestañas**  
  *Familia:* `comparativa técnica`  
  Propaga cambios mediante BroadcastChannel o storage events.

- **Cola offline**  
  *Familia:* `planificación de trabajo`  
  Persiste comandos pendientes y los reintenta al recuperar red.

- **Resolución de conflictos**  
  *Familia:* `configuración declarativa`  
  Combina cambios concurrentes con reglas explícitas.

- **Datos sensibles**  
  *Familia:* `capas internas`  
  Evita guardar secretos o PII en stores inspeccionables.

- **Memoización de selectores**  
  *Familia:* `memoria intermedia`  
  Reutiliza resultados cuando las entradas no cambian.

- **Granularidad de render**  
  *Familia:* `análisis y emisión`  
  Limita la superficie afectada por cada actualización.

- **Pruebas de reducers y stores**  
  *Familia:* `topología y tráfico`  
  Verifica transiciones deterministas con entradas y salidas.

- **Pruebas asíncronas**  
  *Familia:* `diagnóstico operativo`  
  Cubre loading, éxito, error, cancelación y rollback.

- **DevTools y observabilidad**  
  *Familia:* `evidencia y latencia`  
  Inspecciona acciones, diffs, queries, latencia y rollbacks.

- **Limpieza de suscripciones**  
  *Familia:* `ciclo de vida`  
  Libera listeners, timers y canales al desmontar.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)** (`tutorial` | Nivel: `beginner`): 
- **[TanStack Query: important defaults](https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults)** (`official-docs` | Nivel: `intermediate`): 
- **[XState actor model](https://stately.ai/docs/actors)** (`official-docs` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
