import type { StudyConcept } from "./conceptTypes";

export const reactConcepts = [
  {
    "title": "Componentes",
    "description": "Dividen la interfaz en funciones independientes que reciben datos y producen elementos de React.",
    "section": "Fundamentos declarativos",
    "family": "árbol de composición",
    "layout": "standard"
  },
  {
    "title": "JSX",
    "description": "Describe elementos con una sintaxis que el build transforma en llamadas del runtime de React.",
    "section": "Fundamentos declarativos",
    "family": "pipeline de transformación",
    "layout": "standard"
  },
  {
    "title": "Props",
    "description": "Transportan datos de forma descendente y son de solo lectura para el componente que las recibe.",
    "section": "Fundamentos declarativos",
    "family": "flujo descendente",
    "layout": "standard"
  },
  {
    "title": "children y composición",
    "description": "Permiten envolver, insertar y combinar interfaz sin acoplarla a una estructura rígida.",
    "section": "Fundamentos declarativos",
    "family": "ranuras de composición",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "<Card><Champion /></Card>",
      "nodes": [
        "Card|contenedor",
        "children|ranura",
        "Champion|contenido",
        "composition|resultado"
      ],
      "outcome": "UI reutilizable",
      "caption": "La composición suele ser más flexible que agregar muchas props booleanas."
    }
  },
  {
    "title": "Pureza del render",
    "description": "Exige que el componente calcule el mismo JSX para las mismas props, estado y contexto, sin efectos secundarios.",
    "section": "Fundamentos declarativos",
    "family": "función pura",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "render(input) → JSX",
      "nodes": [
        "mismo input|render A",
        "mismo input|render B",
        "same JSX|predecible",
        "side effect|fuera del render"
      ],
      "outcome": "render repetible",
      "caption": "React puede ejecutar el render más de una vez; por eso debe ser puro."
    }
  },
  {
    "title": "Estado",
    "description": "Conserva información local y solicita otro render cuando cambia.",
    "section": "Estado y eventos",
    "family": "snapshot de estado",
    "layout": "standard"
  },
  {
    "title": "El estado como snapshot",
    "description": "Cada render ve una fotografía fija; actualizar estado prepara otro render sin mutar el que ya corre.",
    "section": "Estado y eventos",
    "family": "línea de snapshots",
    "layout": "feature",
    "scene": {
      "variant": "timeline",
      "code": "setScore(score + 1)",
      "nodes": [
        "render #1|score 0",
        "event|setScore(1)",
        "queue|actualización",
        "render #2|score 1"
      ],
      "outcome": "nuevo snapshot",
      "caption": "Los handlers creados en un render conservan los valores de ese render."
    }
  },
  {
    "title": "Eventos",
    "description": "Conectan interacciones del usuario con handlers que pueden solicitar actualizaciones.",
    "section": "Estado y eventos",
    "family": "señal de interfaz",
    "layout": "standard"
  },
  {
    "title": "Propagación de eventos",
    "description": "Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React.",
    "section": "Estado y eventos",
    "family": "ondas de propagación",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "onClickCapture → target → onClick",
      "nodes": [
        "root|capture",
        "button|target",
        "parent|bubble",
        "stopPropagation|corta"
      ],
      "outcome": "handler ejecutado",
      "caption": "Detener propagación no evita el comportamiento por defecto; preventDefault cumple otra función."
    }
  },
  {
    "title": "Batching de actualizaciones",
    "description": "Agrupa múltiples setState de una misma interacción antes de renderizar para evitar trabajo intermedio.",
    "section": "Estado y eventos",
    "family": "cola por lotes",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "setCount(c=>c+1) × 3",
      "nodes": [
        "update +1",
        "update +1",
        "update +1",
        "batch",
        "render"
      ],
      "outcome": "count + 3",
      "caption": "Las funciones updater encadenan cambios sobre el resultado anterior dentro de la cola."
    }
  },
  {
    "title": "Updater functions",
    "description": "Calculan el siguiente estado desde el estado pendiente anterior y evitan cierres obsoletos.",
    "section": "Estado y eventos",
    "family": "acumulador de estado",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "setCount(c => c + 1)",
      "nodes": [
        "pending c|0",
        "updater 1|1",
        "updater 2|2",
        "updater 3|3"
      ],
      "outcome": "estado final 3",
      "caption": "Usa updater cuando el siguiente valor depende del anterior."
    }
  },
  {
    "title": "Actualizaciones inmutables",
    "description": "Crean nuevos objetos o arrays para que React pueda detectar qué referencia cambió.",
    "section": "Estado y eventos",
    "family": "copia estructural",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "setUser({ ...user, level: 18 })",
      "nodes": [
        "mutar user.level|misma referencia",
        "spread|nueva referencia",
        "nested object|copia necesaria",
        "render|detecta cambio"
      ],
      "outcome": "estado nuevo",
      "caption": "La inmutabilidad facilita historial, memoización y comparación por identidad."
    }
  },
  {
    "title": "Renderizado condicional",
    "description": "Elige qué árbol producir según props o estado.",
    "section": "Estado y eventos",
    "family": "bifurcación",
    "layout": "standard"
  },
  {
    "title": "Listas y keys",
    "description": "Usa keys estables para conservar identidad cuando una colección agrega, elimina o reordena elementos.",
    "section": "Estado y eventos",
    "family": "identidad de lista",
    "layout": "standard"
  },
  {
    "title": "Formularios controlados",
    "description": "Mantienen value o checked en estado y actualizan la interfaz mediante eventos.",
    "section": "Formularios y flujo de datos",
    "family": "circuito controlado",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "value={name} onChange={e => setName(e.target.value)}",
      "nodes": [
        "input|muestra state",
        "typing|evento",
        "handler|setName",
        "render|nuevo value"
      ],
      "outcome": "una fuente de verdad",
      "caption": "Controlar es útil para validación y coordinación, aunque cada cambio solicita render."
    }
  },
  {
    "title": "Formularios no controlados",
    "description": "Dejan que el DOM conserve el valor y lo leen mediante FormData o refs cuando se necesita.",
    "section": "Formularios y flujo de datos",
    "family": "estado en el DOM",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "new FormData(form)",
      "nodes": [
        "controlled|React state",
        "uncontrolled|DOM state",
        "submit|lee FormData",
        "defaultValue|valor inicial"
      ],
      "outcome": "menos renders",
      "caption": "Ambos enfoques son válidos; elige según coordinación y validación necesarias."
    }
  },
  {
    "title": "Elevar estado",
    "description": "Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos.",
    "section": "Formularios y flujo de datos",
    "family": "ascenso y distribución",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "TemperatureCalculator owns value",
      "nodes": [
        "parent|source of truth",
        "Input C|prop + event",
        "Input F|prop + event",
        "conversion|shared"
      ],
      "outcome": "hermanos sincronizados",
      "caption": "El estado debe vivir en el ancestro más cercano que necesita coordinarlo."
    }
  },
  {
    "title": "Estado derivado",
    "description": "Calcula valores desde props y estado durante el render en lugar de duplicarlos y sincronizarlos.",
    "section": "Formularios y flujo de datos",
    "family": "cálculo derivado",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "const filtered = items.filter(...)",
      "nodes": [
        "items|state",
        "query|state",
        "render|calcula",
        "filtered|derivado"
      ],
      "outcome": "sin estado duplicado",
      "caption": "Guardar datos derivables crea dos fuentes de verdad y efectos innecesarios."
    }
  },
  {
    "title": "useReducer",
    "description": "Centraliza transiciones complejas como acciones puras sobre un estado.",
    "section": "Formularios y flujo de datos",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "dispatch({ type: \"add\", champion: jinx })",
      "nodes": [
        "UI|dispatch",
        "action|descripción",
        "reducer|state + action",
        "next state|nuevo snapshot"
      ],
      "outcome": "transición explícita",
      "caption": "El reducer debe ser puro; los efectos externos ocurren fuera."
    }
  },
  {
    "title": "Context",
    "description": "Distribuye información a descendientes sin pasar props manualmente por cada nivel.",
    "section": "Formularios y flujo de datos",
    "family": "difusión",
    "layout": "standard"
  },
  {
    "title": "Diseño de providers",
    "description": "Separa contextos por frecuencia de cambio y responsabilidad para evitar dependencias globales difíciles.",
    "section": "Formularios y flujo de datos",
    "family": "capas de contexto",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "<Theme><Auth><Roster /></Auth></Theme>",
      "nodes": [
        "Theme|cambio raro",
        "Auth|sesión",
        "Roster|datos",
        "consumer|solo lo necesario"
      ],
      "outcome": "fronteras claras",
      "caption": "Context evita prop drilling, pero no reemplaza automáticamente todo manejo de estado."
    }
  },
  {
    "title": "Custom Hooks",
    "description": "Extraen lógica reutilizable conservando el estado independiente de cada llamada.",
    "section": "Formularios y flujo de datos",
    "family": "extracción de lógica",
    "layout": "standard"
  },
  {
    "title": "Ciclo de render",
    "description": "Convierte una actualización en render, reconciliación y commit.",
    "section": "Render y reconciliación",
    "family": "órbita de actualización",
    "layout": "feature"
  },
  {
    "title": "Render y commit",
    "description": "Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host.",
    "section": "Render y reconciliación",
    "family": "doble fase",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "render phase ↔ commit phase",
      "nodes": [
        "render|calcula elementos",
        "commit|muta DOM",
        "interruptible|render puede reiniciar",
        "atomic|commit aplica"
      ],
      "outcome": "UI actualizada",
      "caption": "Los efectos se sincronizan alrededor del commit, no durante el render."
    }
  },
  {
    "title": "Reconciliación",
    "description": "Compara elementos anteriores y siguientes usando tipo, posición y key para decidir qué preservar.",
    "section": "Render y reconciliación",
    "family": "diff de árboles",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "previous tree → next tree",
      "nodes": [
        "root|same type",
        "child A|same key",
        "child B|removed",
        "child C|inserted"
      ],
      "outcome": "cambio mínimo",
      "caption": "React no compara píxeles: compara la descripción de elementos."
    }
  },
  {
    "title": "Preservar y reiniciar estado",
    "description": "La identidad por posición, tipo y key determina si un componente conserva su estado.",
    "section": "Render y reconciliación",
    "family": "selector de identidad",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "<Counter key={player} />",
      "nodes": [
        "same position + type|preserva",
        "different key|reinicia",
        "branch|posición cambia",
        "state|pertenece a identidad"
      ],
      "outcome": "control de ciclo de vida",
      "caption": "Una key no es solo para listas; puede declarar una identidad nueva."
    }
  },
  {
    "title": "StrictMode",
    "description": "Ejecuta comprobaciones adicionales en desarrollo para revelar renders impuros y limpiezas incompletas.",
    "section": "Render y reconciliación",
    "family": "simulador de estrés",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "<StrictMode>",
      "nodes": [
        "mount|render",
        "development check|repite",
        "cleanup|debe liberar",
        "remount|verifica"
      ],
      "outcome": "errores detectados temprano",
      "caption": "El comportamiento extra no se aplica igual en producción."
    }
  },
  {
    "title": "Portals",
    "description": "Renderizan hijos en otro nodo del DOM sin sacarlos del árbol lógico de React.",
    "section": "Render y reconciliación",
    "family": "puente de árboles",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "createPortal(modal, document.body)",
      "nodes": [
        "App tree|owner",
        "Modal|React child",
        "document.body|DOM host",
        "events|bubbling React"
      ],
      "outcome": "overlay conectado",
      "caption": "Context y eventos siguen el árbol de React, no la ubicación física del DOM."
    }
  },
  {
    "title": "Refs",
    "description": "Conservan un valor mutable entre renders sin solicitar una actualización.",
    "section": "Sincronización y efectos",
    "family": "contenedor mutable",
    "layout": "standard"
  },
  {
    "title": "Refs al DOM y ref como prop",
    "description": "Conectan un componente con un nodo host para enfocar, medir o integrar APIs imperativas.",
    "section": "Sincronización y efectos",
    "family": "conector imperativo",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "<Input ref={inputRef} />",
      "nodes": [
        "render|declara ref",
        "commit|asigna nodo",
        "handler|focus()",
        "unmount|ref null"
      ],
      "outcome": "escape hatch controlado",
      "caption": "En React moderno, los componentes pueden recibir ref como prop; úsalo solo para capacidades imperativas."
    }
  },
  {
    "title": "useImperativeHandle",
    "description": "Expone una API imperativa pequeña en lugar de entregar todo el nodo o implementación interna.",
    "section": "Sincronización y efectos",
    "family": "fachada imperativa",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "useImperativeHandle(ref, () => ({ focus }))",
      "nodes": [
        "parent|ref",
        "component|internal node",
        "handle|focus only",
        "boundary"
      ],
      "outcome": "API mínima",
      "caption": "La interfaz imperativa debe ser estable y limitada."
    }
  },
  {
    "title": "useEffect",
    "description": "Sincroniza el componente con sistemas externos después del commit.",
    "section": "Sincronización y efectos",
    "family": "timeline de efecto",
    "layout": "standard"
  },
  {
    "title": "Cleanup de efectos",
    "description": "Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.",
    "section": "Sincronización y efectos",
    "family": "ciclo setup cleanup",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "useEffect(() => { subscribe(); return unsubscribe })",
      "nodes": [
        "commit|setup",
        "external system|activo",
        "dependency change|cleanup",
        "next setup|nuevo"
      ],
      "outcome": "sin recursos huérfanos",
      "caption": "El cleanup debe revertir exactamente lo que el setup estableció."
    }
  },
  {
    "title": "Dependencias de efectos",
    "description": "Declaran valores reactivos usados por el setup para mantener la sincronización correcta.",
    "section": "Sincronización y efectos",
    "family": "grafo reactivo",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "useEffect(connect, [roomId, serverUrl])",
      "nodes": [
        "effect|connect",
        "roomId|dependency",
        "serverUrl|dependency",
        "other local|no reactive"
      ],
      "outcome": "re-sincroniza cuando cambia",
      "caption": "No se eligen dependencias para optimizar; se derivan del código del efecto."
    }
  },
  {
    "title": "Separar eventos de efectos",
    "description": "Distingue lógica causada por una interacción puntual de sincronización causada por estar visible.",
    "section": "Sincronización y efectos",
    "family": "comparativa causal",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "onClick(send)  vs  useEffect(connect)",
      "nodes": [
        "event|acción concreta",
        "effect|estado presente",
        "one-shot|enviar mensaje",
        "sync|mantener conexión"
      ],
      "outcome": "causa correcta",
      "caption": "Mover lógica de evento a un efecto puede repetir acciones cuando cambian dependencias."
    }
  },
  {
    "title": "useLayoutEffect",
    "description": "Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte.",
    "section": "Sincronización y efectos",
    "family": "ventana antes del paint",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "commit → useLayoutEffect → paint",
      "nodes": [
        "render",
        "commit DOM",
        "measure / set state",
        "paint"
      ],
      "outcome": "sin parpadeo",
      "caption": "Bloquea el paint y debe reservarse para mediciones o ajustes visuales necesarios."
    }
  },
  {
    "title": "useInsertionEffect",
    "description": "Permite a librerías CSS-in-JS insertar estilos antes de los layout effects.",
    "section": "Sincronización y efectos",
    "family": "prioridad de inserción",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "commit → insertion → layout → paint",
      "nodes": [
        "DOM mutation",
        "insert styles",
        "measure layout",
        "paint"
      ],
      "outcome": "estilos disponibles",
      "caption": "Es una API para autores de librerías; las aplicaciones rara vez deben usarla."
    }
  },
  {
    "title": "useSyncExternalStore",
    "description": "Suscribe React a un store externo con snapshots consistentes y soporte de render concurrente.",
    "section": "Sincronización y efectos",
    "family": "puente a store externo",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "useSyncExternalStore(subscribe, getSnapshot)",
      "nodes": [
        "store|fuente externa",
        "subscribe|notifica",
        "getSnapshot|valor estable",
        "render|consume"
      ],
      "outcome": "snapshot coherente",
      "caption": "El snapshot debe ser cacheable y cambiar identidad solo cuando cambia el store."
    }
  },
  {
    "title": "useDebugValue",
    "description": "Muestra una etiqueta útil para un custom Hook dentro de React DevTools.",
    "section": "Sincronización y efectos",
    "family": "telemetría de hook",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "useDebugValue(isOnline ? \"Online\" : \"Offline\")",
      "nodes": [
        "custom hook|useOnline",
        "state|true",
        "formatter|opcional",
        "DevTools|Online"
      ],
      "outcome": "depuración legible",
      "caption": "No cambia el comportamiento de la aplicación; mejora la inspección."
    }
  },
  {
    "title": "memo",
    "description": "Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro.",
    "section": "Rendimiento y concurrencia",
    "family": "barrera de props",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "const Row = memo(RowImpl)",
      "nodes": [
        "previous props|id 42",
        "next props|id 42",
        "Object.is|compare",
        "render gate"
      ],
      "outcome": "render omitido",
      "caption": "memo es una optimización, no una garantía semántica."
    }
  },
  {
    "title": "useMemo",
    "description": "Conserva el resultado de un cálculo mientras sus dependencias no cambian.",
    "section": "Rendimiento y concurrencia",
    "family": "caché de cálculo",
    "layout": "standard"
  },
  {
    "title": "useCallback",
    "description": "Conserva una referencia de función mientras sus dependencias no cambian.",
    "section": "Rendimiento y concurrencia",
    "family": "referencia estable",
    "layout": "standard"
  },
  {
    "title": "React Compiler",
    "description": "Optimiza automáticamente componentes y hooks en build mediante memoización derivada del flujo de datos.",
    "section": "Rendimiento y concurrencia",
    "family": "compilador de memoización",
    "layout": "feature",
    "scene": {
      "variant": "pipeline",
      "code": "source component → React Compiler → optimized component",
      "nodes": [
        "source|código normal",
        "analysis|data flow",
        "memoization|automática",
        "bundle|optimizado"
      ],
      "outcome": "menos memoización manual",
      "caption": "El compilador comprende las Rules of React y puede adoptarse gradualmente."
    }
  },
  {
    "title": "Profiling",
    "description": "Mide commits, renders y rutas lentas antes de aplicar optimizaciones.",
    "section": "Rendimiento y concurrencia",
    "family": "traza de commits",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "<Profiler onRender={report}>",
      "nodes": [
        "interaction|input",
        "render|12 ms",
        "commit|4 ms",
        "report|evidencia"
      ],
      "outcome": "optimiza con datos",
      "caption": "Un render frecuente no siempre es un problema; importa el coste y la experiencia."
    }
  },
  {
    "title": "lazy y code splitting",
    "description": "Carga un componente bajo demanda como módulo dinámico y difiere su código inicial.",
    "section": "Rendimiento y concurrencia",
    "family": "carga diferida",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "const Settings = lazy(() => import(\"./Settings\"))",
      "nodes": [
        "route|settings",
        "lazy|promise módulo",
        "chunk|descarga",
        "component|render"
      ],
      "outcome": "bundle inicial menor",
      "caption": "El módulo debe usar export default y renderizarse bajo una frontera Suspense."
    }
  },
  {
    "title": "Suspense",
    "description": "Muestra un fallback mientras un hijo suspende por código o datos integrados con el framework.",
    "section": "Rendimiento y concurrencia",
    "family": "frontera de espera",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "<Suspense fallback={<Skeleton />}>",
      "nodes": [
        "boundary|control",
        "child|suspende",
        "fallback|visible",
        "promise resolves|revela"
      ],
      "outcome": "revelado coordinado",
      "caption": "Suspense no detecta fetch dentro de un efecto; necesita una fuente compatible."
    }
  },
  {
    "title": "useTransition",
    "description": "Marca actualizaciones no urgentes como interrumpibles y expone un estado pending.",
    "section": "Rendimiento y concurrencia",
    "family": "carriles de prioridad",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "startTransition(() => setTab(next))",
      "nodes": [
        "urgent|typing",
        "transition|tab content",
        "interruptible|sí",
        "isPending|feedback"
      ],
      "outcome": "interfaz receptiva",
      "caption": "Las transiciones no retrasan el trabajo de red por sí mismas; priorizan actualizaciones de UI."
    }
  },
  {
    "title": "useDeferredValue",
    "description": "Permite que una parte costosa de la interfaz quede temporalmente detrás de un valor urgente.",
    "section": "Rendimiento y concurrencia",
    "family": "doble velocidad",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "const deferredQuery = useDeferredValue(query)",
      "nodes": [
        "query|actual",
        "input|se actualiza ya",
        "deferredQuery|anterior",
        "render background|alcanza"
      ],
      "outcome": "entrada fluida",
      "caption": "La red no se acelera; se permite mostrar contenido anterior mientras se calcula el nuevo."
    }
  },
  {
    "title": "useId",
    "description": "Genera identificadores estables y coordinados entre servidor y cliente para relaciones de accesibilidad.",
    "section": "Rendimiento y concurrencia",
    "family": "generador estable",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "const id = useId()",
      "nodes": [
        "server render|:R1:",
        "HTML|label for",
        "hydrate|mismo id",
        "client|relación"
      ],
      "outcome": "label conectado",
      "caption": "No debe usarse como key de listas; las keys provienen de los datos."
    }
  },
  {
    "title": "Error Boundaries",
    "description": "Capturan errores de render en descendientes y muestran una interfaz de recuperación.",
    "section": "Datos, Actions y arquitectura",
    "family": "red de seguridad",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "<ErrorBoundary fallback={<Crash />}>",
      "nodes": [
        "boundary|protege rama",
        "child|throw during render",
        "fallback|reemplaza rama",
        "rest app|continúa"
      ],
      "outcome": "fallo aislado",
      "caption": "No capturan automáticamente errores de handlers o callbacks asíncronos."
    }
  },
  {
    "title": "Actions",
    "description": "Representan transiciones que pueden incluir trabajo asíncrono y coordinan pending, errores y formularios.",
    "section": "Datos, Actions y arquitectura",
    "family": "transacción de interfaz",
    "layout": "feature",
    "scene": {
      "variant": "flow",
      "code": "startTransition(async () => saveOrder())",
      "nodes": [
        "user action|submit",
        "transition|pending",
        "server call|await",
        "state update|commit",
        "error boundary|si falla"
      ],
      "outcome": "acción coordinada",
      "caption": "Actions integran trabajo asíncrono con el modelo de transiciones de React."
    }
  },
  {
    "title": "useActionState",
    "description": "Ordena Actions basadas en el estado anterior y devuelve estado, dispatcher y pending.",
    "section": "Datos, Actions y arquitectura",
    "family": "cola de acciones",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "const [state, dispatch, pending] = useActionState(action, initial)",
      "nodes": [
        "dispatch A|payload",
        "action A|await",
        "next state|A",
        "dispatch B|usa A",
        "pending|hasta terminar"
      ],
      "outcome": "acciones secuenciales",
      "caption": "Es útil cuando cada Action depende del resultado de la anterior."
    }
  },
  {
    "title": "useOptimistic",
    "description": "Muestra un estado provisional inmediatamente mientras una Action confirma o revierte el resultado.",
    "section": "Datos, Actions y arquitectura",
    "family": "doble estado",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "const [optimistic, addOptimistic] = useOptimistic(state)",
      "nodes": [
        "server state|10",
        "optimistic|11 inmediato",
        "success|confirma 11",
        "failure|vuelve 10"
      ],
      "outcome": "feedback instantáneo",
      "caption": "La actualización optimista debe tener una estrategia clara de error y reconciliación."
    }
  },
  {
    "title": "Form Actions y useFormStatus",
    "description": "Permiten enviar funciones desde form action y leer pending, data, method y action en descendientes.",
    "section": "Datos, Actions y arquitectura",
    "family": "flujo de formulario",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "<form action={save}> · useFormStatus()",
      "nodes": [
        "submit|FormData",
        "action|async function",
        "status.pending|true",
        "server|resultado",
        "form|reset / feedback"
      ],
      "outcome": "formulario coordinado",
      "caption": "useFormStatus debe ejecutarse dentro de un componente descendiente del form."
    }
  },
  {
    "title": "use",
    "description": "Lee una promesa o contexto durante el render y suspende o propaga errores a fronteras cercanas.",
    "section": "Datos, Actions y arquitectura",
    "family": "lector suspendible",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "const data = use(dataPromise)",
      "nodes": [
        "promise|pending",
        "use|lee",
        "Suspense|fallback",
        "resolved|data"
      ],
      "outcome": "render reanudado",
      "caption": "A diferencia de Hooks convencionales, use puede llamarse condicionalmente, pero sigue limitado al render."
    }
  },
  {
    "title": "Server Components",
    "description": "Renderizan componentes en un entorno separado antes de enviar el resultado al cliente y no agregan su código al bundle cliente.",
    "section": "Datos, Actions y arquitectura",
    "family": "frontera servidor cliente",
    "layout": "feature",
    "scene": {
      "variant": "compare",
      "code": "Server Component ↔ Client Component",
      "nodes": [
        "server|data + secrets",
        "client|state + events",
        "serialized props|boundary",
        "bundle|solo cliente"
      ],
      "outcome": "menos JavaScript cliente",
      "caption": "La integración depende de un framework compatible y requiere valores serializables al cruzar la frontera."
    }
  },
  {
    "title": "Server Functions",
    "description": "Permiten invocar funciones marcadas para el servidor desde Actions mediante infraestructura del framework.",
    "section": "Datos, Actions y arquitectura",
    "family": "RPC declarativa",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "\"use server\" · async function save(formData)",
      "nodes": [
        "client form|submit",
        "framework|serializa",
        "server function|auth + write",
        "response|state"
      ],
      "outcome": "mutación en servidor",
      "caption": "La directiva no elimina la necesidad de autenticar, autorizar y validar entradas."
    }
  },
  {
    "title": "SSR y streaming",
    "description": "Generan HTML en servidor y pueden enviar segmentos progresivamente alrededor de Suspense.",
    "section": "Datos, Actions y arquitectura",
    "family": "flujo de HTML",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "renderToPipeableStream()",
      "nodes": [
        "request|servidor",
        "shell|HTML temprano",
        "Suspense segment|después",
        "browser|pinta progresivo"
      ],
      "outcome": "primer contenido antes",
      "caption": "SSR produce HTML; interactividad completa requiere hidratación o componentes cliente."
    }
  },
  {
    "title": "Hidratación",
    "description": "Conecta lógica de React con HTML existente y espera que el primer render cliente coincida.",
    "section": "Datos, Actions y arquitectura",
    "family": "acople servidor cliente",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "hydrateRoot(container, <App />)",
      "nodes": [
        "server HTML|existente",
        "client tree|primer render",
        "match|reutiliza DOM",
        "mismatch|warning / repair"
      ],
      "outcome": "interfaz interactiva",
      "caption": "Valores no deterministas durante el primer render causan diferencias de hidratación."
    }
  },
  {
    "title": "Arquitectura por fronteras",
    "description": "Organiza estado local, contexto, servidor, caché y rutas según propiedad y ciclo de vida de cada dato.",
    "section": "Datos, Actions y arquitectura",
    "family": "mapa de responsabilidades",
    "layout": "feature",
    "scene": {
      "variant": "layers",
      "code": "local UI · URL · server cache · global session",
      "nodes": [
        "component state|efímero",
        "URL|navegable",
        "server data|remoto",
        "context|ambiental",
        "store|compartido"
      ],
      "outcome": "cada dato en su hogar",
      "caption": "Elegir una herramienta global para todo aumenta acoplamiento y trabajo de sincronización."
    }
  },
  {
    "title": "Testing de componentes",
    "description": "Comprueba comportamiento observable mediante render, interacción y aserciones accesibles.",
    "section": "Datos, Actions y arquitectura",
    "family": "ciclo de prueba",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "render → user action → visible result",
      "nodes": [
        "render|estado inicial",
        "userEvent|click / type",
        "React updates|act",
        "query by role|resultado"
      ],
      "outcome": "confianza en comportamiento",
      "caption": "Las pruebas resistentes se apoyan en la interfaz pública y la accesibilidad, no en detalles internos."
    }
  },
  {
    "title": "Rules of React y lint",
    "description": "Mantienen componentes y Hooks analizables al exigir pureza y llamadas consistentes.",
    "section": "Datos, Actions y arquitectura",
    "family": "reglas del compilador",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "eslint-plugin-react-hooks",
      "nodes": [
        "top-level hooks",
        "pure render",
        "immutable props/state",
        "effect deps",
        "compiler diagnostics"
      ],
      "outcome": "código analizable",
      "caption": "Las reglas permiten a React preservar el orden de Hooks y aplicar optimizaciones seguras."
    }
  }
] satisfies readonly StudyConcept[];
