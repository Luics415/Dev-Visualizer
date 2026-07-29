import type { StudyConcept } from "./conceptTypes";

export const stateManagementConcepts = [
  {
    "title": "Qué es estado",
    "description": "Información que cambia con el tiempo y modifica el comportamiento o la interfaz.",
    "section": "Modelado y propiedad del estado",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "evento → estado → vista",
      "nodes": [
        "evento|entrada",
        "snapshot|antes",
        "transición|regla",
        "vista|después"
      ],
      "outcome": "cambio trazable",
      "caption": "El estado existe porque algo debe sobrevivir entre ejecuciones."
    }
  },
  {
    "title": "Estado mínimo",
    "description": "Conserva fuentes de verdad y calcula el resto.",
    "section": "Modelado y propiedad del estado",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "total = sum(items)",
      "nodes": [
        "items|fuente",
        "total guardado|duplicado",
        "selector|calcula",
        "total|derivado"
      ],
      "outcome": "una verdad",
      "caption": "Guardar datos derivados crea estados imposibles."
    }
  },
  {
    "title": "Fuente única de verdad",
    "description": "Asigna una autoridad a cada dato para evitar copias editables compitiendo.",
    "section": "Modelado y propiedad del estado",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "sourceOfTruth",
      "nodes": [
        "form|escribe",
        "summary|lee",
        "badge|lee",
        "persistencia|sincroniza"
      ],
      "outcome": "un dueño",
      "caption": "Muchas vistas pueden leer; una frontera decide cómo cambia."
    }
  },
  {
    "title": "Propiedad y colocación",
    "description": "Ubica el estado en el dueño común más cercano.",
    "section": "Modelado y propiedad del estado",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "owner(state)",
      "nodes": [
        "App|owner",
        "Toolbar|read",
        "List|read",
        "Editor|write"
      ],
      "outcome": "frontera correcta",
      "caption": "Demasiado alto acopla; demasiado bajo impide compartir."
    }
  },
  {
    "title": "Estado local, global y remoto",
    "description": "Distingue memoria de componente, cliente compartido y datos del servidor.",
    "section": "Modelado y propiedad del estado",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "classify(value)",
      "nodes": [
        "local|modal",
        "global|sesión UI",
        "server|pedidos",
        "URL|filtros"
      ],
      "outcome": "tipo identificado",
      "caption": "La herramienta depende de quién posee el dato."
    }
  },
  {
    "title": "Estado de URL",
    "description": "Modela filtros o vistas compartibles mediante pathname y search params.",
    "section": "Modelado y propiedad del estado",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "?role=adc&champion=jinx",
      "nodes": [
        "route|champions",
        "role|adc",
        "champion|jinx",
        "history|back"
      ],
      "outcome": "vista enlazable",
      "caption": "La URL sobrevive recargas y respeta navegación."
    }
  },
  {
    "title": "Estado persistente",
    "description": "Guarda una copia entre sesiones sin confundir persistencia con autoridad.",
    "section": "Modelado y propiedad del estado",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "memory → storage",
      "nodes": [
        "render|ms",
        "store|sesión",
        "storage|días",
        "server|autoridad"
      ],
      "outcome": "duración explícita",
      "caption": "Persistir no convierte la copia local en verdad definitiva."
    }
  },
  {
    "title": "Estado derivado",
    "description": "Calcula valores desde fuentes existentes.",
    "section": "Modelado y propiedad del estado",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "visible = filter(items, query)",
      "nodes": [
        "items|fuente",
        "query|fuente",
        "selector|cálculo",
        "visible|salida"
      ],
      "outcome": "dato derivado",
      "caption": "Se recompone cuando cambian dependencias."
    }
  },
  {
    "title": "Estados imposibles",
    "description": "Representa variantes exclusivas para evitar combinaciones incoherentes.",
    "section": "Modelado y propiedad del estado",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "idle | loading | success | error",
      "nodes": [
        "idle|válido",
        "loading|válido",
        "success|válido",
        "transition|regla"
      ],
      "outcome": "una variante",
      "caption": "Uniones discriminadas hacen ilegales estados contradictorios."
    }
  },
  {
    "title": "Normalización e identidad",
    "description": "Guarda entidades por id y relaciones mediante referencias estables.",
    "section": "Modelado y propiedad del estado",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "entities[id]",
      "nodes": [
        "champ_1|Jinx",
        "champ_2|Vi",
        "team|ids[]",
        "selector|join"
      ],
      "outcome": "identidad estable",
      "caption": "Normalizar evita copias divergentes."
    }
  },
  {
    "title": "useState",
    "description": "Proporciona memoria local y un setter que solicita otro render.",
    "section": "Estado local en React",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "const [count, setCount] = useState(0)",
      "nodes": [
        "render 1|count=0",
        "setCount|enqueue",
        "render 2|count=1",
        "commit|UI"
      ],
      "outcome": "nuevo snapshot",
      "caption": "El setter no modifica la variable del render actual."
    }
  },
  {
    "title": "Estado como snapshot",
    "description": "Cada render observa una fotografía inmutable del estado.",
    "section": "Estado local en React",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "handler sees count",
      "nodes": [
        "render A|count=0",
        "click|handler A",
        "render B|count=1",
        "closure|A"
      ],
      "outcome": "tiempo explícito",
      "caption": "Los handlers conservan el snapshot donde fueron creados."
    }
  },
  {
    "title": "Batching",
    "description": "Agrupa actualizaciones del mismo turno para evitar commits intermedios.",
    "section": "Estado local en React",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "setA(1); setB(2)",
      "nodes": [
        "update A|queue",
        "update B|queue",
        "batch|process",
        "render|once"
      ],
      "outcome": "un commit",
      "caption": "El batching reduce trabajo sin perder orden semántico."
    }
  },
  {
    "title": "Actualizaciones funcionales",
    "description": "Calcula el siguiente valor desde el estado pendiente.",
    "section": "Estado local en React",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "setCount(c => c + 1)",
      "nodes": [
        "0|base",
        "+1|update",
        "+1|update",
        "2|result"
      ],
      "outcome": "cola correcta",
      "caption": "Evita leer snapshots obsoletos en ráfagas."
    }
  },
  {
    "title": "Objetos inmutables",
    "description": "Crea nuevas referencias al actualizar objetos.",
    "section": "Estado local en React",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "setUser({...user, level: 2})",
      "nodes": [
        "mutate|same ref",
        "copy|new ref",
        "Object.is|detect",
        "render|update"
      ],
      "outcome": "referencia nueva",
      "caption": "La identidad permite detectar cambios eficientemente."
    }
  },
  {
    "title": "Arrays inmutables",
    "description": "Usa map, filter y spread sin alterar la versión anterior.",
    "section": "Estado local en React",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "setItems(xs => xs.filter(...))",
      "nodes": [
        "array v1|3 items",
        "filter|rule",
        "array v2|2 items",
        "v1|intact"
      ],
      "outcome": "historial seguro",
      "caption": "Las versiones anteriores siguen siendo válidas."
    }
  },
  {
    "title": "Inicialización perezosa",
    "description": "Ejecuta una función costosa solo al crear el estado.",
    "section": "Estado local en React",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "useState(loadDraft)",
      "nodes": [
        "mount|first",
        "render|repeat",
        "loadDraft|once",
        "state|reuse"
      ],
      "outcome": "costo único",
      "caption": "Pasar la función difiere de llamarla en cada render."
    }
  },
  {
    "title": "Reset mediante key",
    "description": "Cambia identidad para descartar estado local de un subárbol.",
    "section": "Estado local en React",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "<Editor key={draftId} />",
      "nodes": [
        "key=1|state A",
        "key=2|new",
        "unmount|cleanup",
        "mount|initial"
      ],
      "outcome": "reset completo",
      "caption": "Una key nueva crea una instancia nueva."
    }
  },
  {
    "title": "useReducer",
    "description": "Centraliza transiciones complejas en una función pura.",
    "section": "Estado local en React",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "state = reducer(state, action)",
      "nodes": [
        "UI|dispatch",
        "action|ADD",
        "reducer|rule",
        "next|state",
        "render|view"
      ],
      "outcome": "transición central",
      "caption": "Los reducers documentan eventos y son fáciles de probar."
    }
  },
  {
    "title": "Context y reducer",
    "description": "Distribuye estado y dispatch sin prop drilling.",
    "section": "Estado local en React",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "<Provider value={{state, dispatch}}>",
      "nodes": [
        "Provider|owner",
        "Form|dispatch",
        "List|select",
        "Badge|select"
      ],
      "outcome": "dominio compartido",
      "caption": "Context resuelve transporte; el reducer resuelve transiciones."
    }
  },
  {
    "title": "Lifting state up",
    "description": "Mueve el estado al ancestro común que coordina a varios hijos.",
    "section": "Arquitectura compartida",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "Parent owns value",
      "nodes": [
        "Parent|owner",
        "InputA|write",
        "Preview|read",
        "Sibling|read"
      ],
      "outcome": "sincronización común",
      "caption": "Dos memorias aisladas se convierten en un flujo controlado."
    }
  },
  {
    "title": "Colocación por dominio",
    "description": "Agrupa estado y lógica cerca de la feature que los modifica.",
    "section": "Arquitectura compartida",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "features/cart/store.ts",
      "nodes": [
        "app shell|mínimo",
        "cart|domain",
        "profile|domain",
        "modal|local"
      ],
      "outcome": "acoplamiento menor",
      "caption": "La colocación facilita eliminar o evolucionar una feature."
    }
  },
  {
    "title": "Prop drilling",
    "description": "Reconoce cuándo pasar props es explícito y cuándo una cadena profunda requiere otra frontera.",
    "section": "Arquitectura compartida",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "App → Page → Panel → Button",
      "nodes": [
        "App|value",
        "Page|forward",
        "Panel|forward",
        "Button|consume"
      ],
      "outcome": "costo visible",
      "caption": "Prop drilling no es un error automático."
    }
  },
  {
    "title": "Selectores",
    "description": "Exponen vistas específicas del estado y ocultan su estructura interna.",
    "section": "Arquitectura compartida",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "selectCartTotal(state)",
      "nodes": [
        "store|many fields",
        "selector|rule",
        "component|total",
        "refactor|hidden"
      ],
      "outcome": "lectura estable",
      "caption": "Los selectores son la API de consulta del store."
    }
  },
  {
    "title": "Suscripciones granulares",
    "description": "Notifican solo a consumidores cuya porción realmente cambió.",
    "section": "Arquitectura compartida",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "subscribe(selector)",
      "nodes": [
        "user.name|A",
        "cart.total|B",
        "theme|C",
        "cart change|B"
      ],
      "outcome": "actualización localizada",
      "caption": "La granularidad importa más que el tamaño del store."
    }
  },
  {
    "title": "useSyncExternalStore",
    "description": "Conecta stores externos con snapshots consistentes para render concurrente y SSR.",
    "section": "Arquitectura compartida",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "useSyncExternalStore(subscribe, getSnapshot)",
      "nodes": [
        "store|authority",
        "subscribe|changes",
        "snapshot|read",
        "React|render",
        "SSR|server"
      ],
      "outcome": "snapshot consistente",
      "caption": "El contrato evita tearing entre renders."
    }
  },
  {
    "title": "Separación lectura y escritura",
    "description": "Expone comandos para cambiar y selectores para leer.",
    "section": "Arquitectura compartida",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "commands / selectors",
      "nodes": [
        "commands|intent",
        "selectors|query",
        "internals|private",
        "component|API"
      ],
      "outcome": "frontera clara",
      "caption": "Una API estrecha conserva invariantes."
    }
  },
  {
    "title": "Eventos de dominio",
    "description": "Nombra cambios según el negocio en lugar de detalles de la interfaz.",
    "section": "Arquitectura compartida",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "orderSubmitted",
      "nodes": [
        "click|UI detail",
        "orderSubmitted|domain",
        "reducer|transition",
        "analytics|observe"
      ],
      "outcome": "intención reutilizable",
      "caption": "Los eventos de dominio sobreviven cambios de pantalla."
    }
  },
  {
    "title": "Store Redux",
    "description": "Mantiene un árbol de estado, procesa acciones y notifica suscriptores.",
    "section": "Redux Toolkit",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "store.dispatch(action)",
      "nodes": [
        "state|tree",
        "dispatch|input",
        "reducer|transition",
        "subscribers|output"
      ],
      "outcome": "flujo predecible",
      "caption": "Redux concentra cambios en un flujo observable."
    }
  },
  {
    "title": "Acciones",
    "description": "Describen eventos serializables con type y payload.",
    "section": "Redux Toolkit",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "{ type, payload }",
      "nodes": [
        "type|cart/itemAdded",
        "payload|item",
        "meta|context",
        "error|optional"
      ],
      "outcome": "evento descriptivo",
      "caption": "La acción cuenta qué ocurrió; no decide el siguiente estado."
    }
  },
  {
    "title": "Reducers",
    "description": "Calculan el siguiente estado de forma determinista.",
    "section": "Redux Toolkit",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "next = reducer(prev, action)",
      "nodes": [
        "prev|input",
        "action|input",
        "reducer|pure",
        "next|output"
      ],
      "outcome": "resultado reproducible",
      "caption": "Los reducers no ejecutan efectos."
    }
  },
  {
    "title": "configureStore",
    "description": "Ensambla reducers, middleware, DevTools y comprobaciones recomendadas.",
    "section": "Redux Toolkit",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "configureStore({ reducer })",
      "nodes": [
        "root reducer|model",
        "middleware|pipeline",
        "DevTools|inspect",
        "store|ready"
      ],
      "outcome": "store preparado",
      "caption": "Redux Toolkit reduce configuración manual."
    }
  },
  {
    "title": "createSlice",
    "description": "Agrupa estado inicial, reducers y action creators de una feature.",
    "section": "Redux Toolkit",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "createSlice({ name, initialState, reducers })",
      "nodes": [
        "name|cart",
        "initialState|empty",
        "reducers|rules",
        "actions|generated"
      ],
      "outcome": "slice cohesivo",
      "caption": "La lógica relacionada permanece unida."
    }
  },
  {
    "title": "Immer",
    "description": "Permite sintaxis mutativa sobre un borrador que produce copias inmutables.",
    "section": "Redux Toolkit",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "state.items.push(item)",
      "nodes": [
        "draft|editable",
        "base|intact",
        "patches|changes",
        "next|copy"
      ],
      "outcome": "inmutabilidad cómoda",
      "caption": "La mutación ocurre sobre un proxy, no sobre el estado publicado."
    }
  },
  {
    "title": "Dispatch",
    "description": "Envía acciones al pipeline de Redux.",
    "section": "Redux Toolkit",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "dispatch(itemAdded(item))",
      "nodes": [
        "component|intent",
        "dispatch|bus",
        "middleware|intercept",
        "reducer|apply",
        "subscriber|update"
      ],
      "outcome": "acción procesada",
      "caption": "Dispatch es el puerto de escritura."
    }
  },
  {
    "title": "Provider y hooks",
    "description": "Conecta el store con React mediante Provider, useSelector y useDispatch.",
    "section": "Redux Toolkit",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "<Provider store={store}>",
      "nodes": [
        "Provider|store",
        "useSelector|read",
        "useDispatch|write",
        "component|render"
      ],
      "outcome": "store disponible",
      "caption": "Los hooks definen la porción que usa cada componente."
    }
  },
  {
    "title": "useSelector",
    "description": "Suscribe un componente al resultado de un selector.",
    "section": "Redux Toolkit",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "useSelector(selectTotal)",
      "nodes": [
        "state|changes",
        "selector|compute",
        "equality|compare",
        "component|render/skip"
      ],
      "outcome": "render selectivo",
      "caption": "Referencias nuevas pueden disparar renders innecesarios."
    }
  },
  {
    "title": "createAsyncThunk",
    "description": "Modela pending, fulfilled y rejected para una promesa.",
    "section": "Redux Toolkit",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "createAsyncThunk(\"orders/load\", fetchOrders)",
      "nodes": [
        "dispatch|start",
        "pending|loading",
        "fulfilled|data",
        "rejected|error"
      ],
      "outcome": "ciclo explícito",
      "caption": "La slice decide cómo cada fase modifica el estado."
    }
  },
  {
    "title": "Middleware",
    "description": "Interviene acciones para logging, efectos o asincronía.",
    "section": "Redux Toolkit",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "action → middleware → reducer",
      "nodes": [
        "action|input",
        "logger|observe",
        "thunk|effect",
        "reducer|final"
      ],
      "outcome": "extensión controlada",
      "caption": "Amplía dispatch sin contaminar reducers."
    }
  },
  {
    "title": "Listener middleware",
    "description": "Reacciona a acciones o cambios con efectos cancelables.",
    "section": "Redux Toolkit",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "startListening({ matcher, effect })",
      "nodes": [
        "action|match",
        "listener|start",
        "effect|async",
        "cancel|control",
        "dispatch|result"
      ],
      "outcome": "workflow desacoplado",
      "caption": "Sirve para orquestación reactiva."
    }
  },
  {
    "title": "createEntityAdapter",
    "description": "Normaliza colecciones y genera reducers y selectores.",
    "section": "Redux Toolkit",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "adapter.upsertMany(state, items)",
      "nodes": [
        "ids|order",
        "entities|map",
        "upsert|merge",
        "selectors|read"
      ],
      "outcome": "colección normalizada",
      "caption": "Estandariza operaciones frecuentes sobre entidades."
    }
  },
  {
    "title": "Redux DevTools",
    "description": "Registra acciones y snapshots para replay y time travel.",
    "section": "Redux Toolkit",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "action log",
      "nodes": [
        "state 0|start",
        "ADD|state 1",
        "REMOVE|state 2",
        "jump|state 1"
      ],
      "outcome": "historial navegable",
      "caption": "Reducers puros permiten reproducir una sesión."
    }
  },
  {
    "title": "Estado de servidor",
    "description": "Modela datos cuya autoridad vive fuera del cliente y puede cambiar sin aviso.",
    "section": "Estado remoto y caché",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "client state vs server state",
      "nodes": [
        "client|local control",
        "server|remote truth",
        "cache|temporary copy",
        "network|uncertainty"
      ],
      "outcome": "modelo separado",
      "caption": "Latencia, frescura y fallos forman parte del dato remoto."
    }
  },
  {
    "title": "Query keys",
    "description": "Identifican una consulta y todos sus parámetros dentro de la caché.",
    "section": "Estado remoto y caché",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "[\"champions\", { role: \"adc\" }]",
      "nodes": [
        "resource|champions",
        "params|role=adc",
        "key|stable",
        "cache entry|unique"
      ],
      "outcome": "consulta localizada",
      "caption": "Una key incompleta mezcla resultados distintos."
    }
  },
  {
    "title": "Fresh y stale",
    "description": "Define cuánto tiempo una copia se considera reciente.",
    "section": "Estado remoto y caché",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "staleTime: 30_000",
      "nodes": [
        "fetch|t=0",
        "fresh|cache",
        "stale|refetchable",
        "gc|remove"
      ],
      "outcome": "política temporal",
      "caption": "Stale no significa borrado; significa revalidable."
    }
  },
  {
    "title": "Ciclo de vida de caché",
    "description": "Crea, comparte, desactiva y elimina entradas según observadores y tiempos.",
    "section": "Estado remoto y caché",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "query cache lifecycle",
      "nodes": [
        "active|observed",
        "inactive|hidden",
        "stale|revalidate",
        "gc|released"
      ],
      "outcome": "memoria controlada",
      "caption": "La caché vive más que un componente, no para siempre."
    }
  },
  {
    "title": "Invalidación",
    "description": "Marca consultas relacionadas como obsoletas después de una mutación.",
    "section": "Estado remoto y caché",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "invalidateQueries([\"orders\"])",
      "nodes": [
        "mutation|created",
        "orders list|stale",
        "detail|optional",
        "refetch|sync"
      ],
      "outcome": "copias revalidadas",
      "caption": "Invalidar expresa qué datos podrían haber cambiado."
    }
  },
  {
    "title": "Mutaciones",
    "description": "Modelan escrituras remotas con variables y estados pending, success y error.",
    "section": "Estado remoto y caché",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "mutate({ championId: \"jinx\" })",
      "nodes": [
        "variables|input",
        "pending|wait",
        "success|confirm",
        "error|recover"
      ],
      "outcome": "cambio remoto",
      "caption": "Una mutación debe actualizar o invalidar la caché."
    }
  },
  {
    "title": "Actualización optimista",
    "description": "Aplica una predicción local y conserva rollback.",
    "section": "Estado remoto y caché",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "onMutate → rollback",
      "nodes": [
        "optimistic|star on",
        "server|pending",
        "success|confirm",
        "error|rollback"
      ],
      "outcome": "feedback inmediato",
      "caption": "El optimismo necesita reconciliación explícita."
    }
  },
  {
    "title": "Cancelación de consultas",
    "description": "Abortar trabajo obsoleto evita carreras y consumo innecesario.",
    "section": "Estado remoto y caché",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "queryFn({ signal })",
      "nodes": [
        "query A|running",
        "query B|new",
        "abort A|cancel",
        "cache|only B"
      ],
      "outcome": "última intención gana",
      "caption": "La señal debe llegar al cliente HTTP."
    }
  },
  {
    "title": "Consultas dependientes",
    "description": "Activa una consulta cuando existe la clave producida por otra.",
    "section": "Estado remoto y caché",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "enabled: Boolean(userId)",
      "nodes": [
        "session|loading",
        "userId|missing",
        "enabled|false",
        "projects|wait"
      ],
      "outcome": "orden explícito",
      "caption": "Hace visible el waterfall y permite rediseñarlo."
    }
  },
  {
    "title": "Paginación e infinite queries",
    "description": "Conserva páginas, cursores y cargas incrementales.",
    "section": "Estado remoto y caché",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "getNextPageParam(lastPage)",
      "nodes": [
        "page 1|cache",
        "page 2|cache",
        "cursor|next",
        "flatten|render"
      ],
      "outcome": "historial de páginas",
      "caption": "El cursor pertenece al servidor."
    }
  },
  {
    "title": "Prefetch",
    "description": "Carga datos antes de mostrarlos cuando existe intención probable.",
    "section": "Estado remoto y caché",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "prefetchQuery(detailKey)",
      "nodes": [
        "hover|signal",
        "network|early",
        "cache|save",
        "open|instant"
      ],
      "outcome": "latencia escondida",
      "caption": "Debe equilibrar probabilidad, red y memoria."
    }
  },
  {
    "title": "SSR e hidratación",
    "description": "Transfiere la caché del servidor al cliente para evitar una consulta duplicada.",
    "section": "Estado remoto y caché",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "dehydrate(queryClient)",
      "nodes": [
        "server|prefetch",
        "HTML|state",
        "client|hydrate",
        "query|cache hit"
      ],
      "outcome": "primera vista coherente",
      "caption": "Keys y políticas deben coincidir en ambos lados."
    }
  },
  {
    "title": "TanStack Query y RTK Query",
    "description": "Gestionan caché, mutaciones y revalidación con integraciones diferentes.",
    "section": "Estado remoto y caché",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "query cache tool",
      "nodes": [
        "TanStack|independent",
        "RTK Query|Redux integrated",
        "queries|reads",
        "mutations|writes"
      ],
      "outcome": "elige por arquitectura",
      "caption": "Ambas reducen lógica manual de red."
    }
  },
  {
    "title": "Zustand",
    "description": "Crea stores pequeños con acciones y selectores sin reducers obligatorios.",
    "section": "Stores ligeros y máquinas",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "create(set => ({ count: 0 }))",
      "nodes": [
        "create|store",
        "set|update",
        "selector|slice",
        "component|subscribe"
      ],
      "outcome": "API compacta",
      "caption": "La simplicidad no elimina el diseño de fronteras."
    }
  },
  {
    "title": "Estado atómico",
    "description": "Compone unidades independientes y valores derivados mediante un grafo.",
    "section": "Stores ligeros y máquinas",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "atom → derivedAtom",
      "nodes": [
        "atom A|query",
        "atom B|filter",
        "derived|results",
        "component|consume"
      ],
      "outcome": "dependencias explícitas",
      "caption": "Los átomos permiten suscripciones finas."
    }
  },
  {
    "title": "Signals",
    "description": "Propagan cambios a consumidores que leen una señal.",
    "section": "Stores ligeros y máquinas",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "count.value++",
      "nodes": [
        "signal|count",
        "computed|double",
        "effect|observe",
        "view|update"
      ],
      "outcome": "reactividad granular",
      "caption": "Cambian el modelo de suscripción, no las invariantes."
    }
  },
  {
    "title": "Máquinas de estado",
    "description": "Definen estados, eventos y transiciones permitidas.",
    "section": "Stores ligeros y máquinas",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "idle → loading → success",
      "nodes": [
        "idle|SUBMIT",
        "loading|RESOLVE",
        "success|RESET",
        "error|RETRY"
      ],
      "outcome": "transiciones legales",
      "caption": "Documentan todo el ciclo de un workflow."
    }
  },
  {
    "title": "Statecharts",
    "description": "Añaden jerarquía, paralelismo e historial a máquinas.",
    "section": "Stores ligeros y máquinas",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "checkout.{form,payment}",
      "nodes": [
        "checkout|parent",
        "form|child",
        "payment|child",
        "parallel|UI+network"
      ],
      "outcome": "workflow escalable",
      "caption": "Reducen explosión combinatoria."
    }
  },
  {
    "title": "Event sourcing",
    "description": "Conserva eventos inmutables y reconstruye proyecciones.",
    "section": "Stores ligeros y máquinas",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "state = events.reduce(project)",
      "nodes": [
        "Created|event",
        "ItemAdded|event",
        "Paid|event",
        "projection|state"
      ],
      "outcome": "historia auditable",
      "caption": "Cambia persistencia y consistencia, no solo la UI."
    }
  },
  {
    "title": "Command Query Separation",
    "description": "Distingue operaciones que cambian de consultas que leen.",
    "section": "Stores ligeros y máquinas",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "command / query",
      "nodes": [
        "command|intent",
        "query|read",
        "write model|rules",
        "read model|optimized"
      ],
      "outcome": "responsabilidad clara",
      "caption": "Evita lecturas con efectos ocultos."
    }
  },
  {
    "title": "Elegir herramienta",
    "description": "Evalúa alcance, autoridad, frecuencia, SSR, offline y equipo.",
    "section": "Stores ligeros y máquinas",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "decision(stateKind, scale)",
      "nodes": [
        "local|useState",
        "complex|reducer",
        "server|query cache",
        "global|store"
      ],
      "outcome": "mínima herramienta",
      "caption": "La solución correcta reduce complejidad total."
    }
  },
  {
    "title": "Persistencia local",
    "description": "Serializa una copia para recuperarla entre sesiones.",
    "section": "Persistencia, calidad y operación",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "localStorage.setItem(key, JSON.stringify(state))",
      "nodes": [
        "serialize|JSON",
        "write|storage",
        "reload|read",
        "hydrate|store"
      ],
      "outcome": "copia recuperada",
      "caption": "Persiste solo lo necesario."
    }
  },
  {
    "title": "Versionado y migraciones",
    "description": "Transforma snapshots antiguos al esquema actual.",
    "section": "Persistencia, calidad y operación",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "migrate(v2, snapshotV1)",
      "nodes": [
        "v1|legacy",
        "detect|version",
        "migrate|transform",
        "v2|current"
      ],
      "outcome": "snapshot compatible",
      "caption": "Las versiones evitan romper datos existentes."
    }
  },
  {
    "title": "Sincronización entre pestañas",
    "description": "Propaga cambios mediante BroadcastChannel o storage events.",
    "section": "Persistencia, calidad y operación",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "BroadcastChannel(\"app\")",
      "nodes": [
        "tab A|update",
        "channel|message",
        "tab B|merge",
        "origin|dedupe"
      ],
      "outcome": "vistas coordinadas",
      "caption": "Cada mensaje necesita origen y deduplicación."
    }
  },
  {
    "title": "Cola offline",
    "description": "Persiste comandos pendientes y los reintenta al recuperar red.",
    "section": "Persistencia, calidad y operación",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "queue.push(command)",
      "nodes": [
        "pending|offline",
        "persist|durable",
        "online|flush",
        "ack|remove"
      ],
      "outcome": "intención conservada",
      "caption": "La cola debe ser idempotente y visible."
    }
  },
  {
    "title": "Resolución de conflictos",
    "description": "Combina cambios concurrentes con reglas explícitas.",
    "section": "Persistencia, calidad y operación",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "merge(local, remote)",
      "nodes": [
        "local v3|A",
        "remote v4|B",
        "policy|decide",
        "merged v5|result"
      ],
      "outcome": "conflicto explícito",
      "caption": "Last-write-wins es solo una política."
    }
  },
  {
    "title": "Datos sensibles",
    "description": "Evita guardar secretos o PII en stores inspeccionables.",
    "section": "Persistencia, calidad y operación",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "persist(allowlist)",
      "nodes": [
        "theme|allowed",
        "draft|review",
        "token|avoid",
        "allowlist|filter"
      ],
      "outcome": "superficie reducida",
      "caption": "El estado puede aparecer en DevTools y logs."
    }
  },
  {
    "title": "Memoización de selectores",
    "description": "Reutiliza resultados cuando las entradas no cambian.",
    "section": "Persistencia, calidad y operación",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "createSelector(inputs, result)",
      "nodes": [
        "same inputs|hit",
        "new inputs|compute",
        "result ref|stable",
        "component|skip"
      ],
      "outcome": "cálculo reutilizado",
      "caption": "Solo ayuda con dependencias estables."
    }
  },
  {
    "title": "Granularidad de render",
    "description": "Limita la superficie afectada por cada actualización.",
    "section": "Persistencia, calidad y operación",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "component ← selector",
      "nodes": [
        "header|user",
        "cart|total",
        "theme|mode",
        "cart update|cart"
      ],
      "outcome": "menos trabajo",
      "caption": "Un store global no obliga a renderizar todo."
    }
  },
  {
    "title": "Pruebas de reducers y stores",
    "description": "Verifica transiciones deterministas con entradas y salidas.",
    "section": "Persistencia, calidad y operación",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "expect(reducer(prev, action)).toEqual(next)",
      "nodes": [
        "arrange|prev",
        "act|action",
        "assert|next",
        "edge|unknown"
      ],
      "outcome": "reglas protegidas",
      "caption": "Unidad prueba lógica; integración prueba wiring."
    }
  },
  {
    "title": "Pruebas asíncronas",
    "description": "Cubre loading, éxito, error, cancelación y rollback.",
    "section": "Persistencia, calidad y operación",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "user → loading → success",
      "nodes": [
        "interaction|input",
        "pending|assert",
        "resolve|mock",
        "UI|result"
      ],
      "outcome": "caso completo",
      "caption": "Probar solo el final oculta fallos de transición."
    }
  },
  {
    "title": "DevTools y observabilidad",
    "description": "Inspecciona acciones, diffs, queries, latencia y rollbacks.",
    "section": "Persistencia, calidad y operación",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "inspect(action, state, query)",
      "nodes": [
        "action|who",
        "diff|what",
        "latency|when",
        "rollback|why"
      ],
      "outcome": "causa localizada",
      "caption": "La instrumentación no debe registrar datos sensibles."
    }
  },
  {
    "title": "Limpieza de suscripciones",
    "description": "Libera listeners, timers y canales al desmontar.",
    "section": "Persistencia, calidad y operación",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "subscribe(); return unsubscribe",
      "nodes": [
        "mount|subscribe",
        "updates|receive",
        "unmount|cleanup",
        "later|ignored"
      ],
      "outcome": "sin fugas",
      "caption": "Una fuga conserva memoria y aplica cambios fantasma."
    }
  }
] as const satisfies readonly StudyConcept[];
