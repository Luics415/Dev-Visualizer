import type { NewLearningExtensionRegistry } from "./newLearningExtensionTypes";

type BlueprintCollection = "haskell" | "go" | "kotlin" | "java" | "r" | "assembly" | "erlang";

const collectionLabels: Readonly<Record<BlueprintCollection, string>> = {
  haskell: "Haskell",
  go: "Go",
  kotlin: "Kotlin",
  java: "Java",
  r: "R",
  assembly: "Assembly",
  erlang: "Erlang",
};

const chapterFocuses: Readonly<Record<BlueprintCollection, Readonly<Record<string, string>>>> = {
  haskell: {
    "Cálculo funcional": "se sigue desde reducción lambda hasta una forma normal, preservando equivalencia referencial y haciendo visible cuándo una expresión no termina",
    "Diseño con tipos algebraicos": "se representa como productos, sumas o constructores que excluyen estados inválidos y obligan a cubrir cada alternativa",
    "Typeclasses avanzadas": "se resuelve mediante diccionarios, instancias coherentes y leyes que evitan que una abstracción cambie de significado según el contexto",
    "Tipos de orden superior": "se comprueba en el nivel de kinds y cuantificación para expresar constructores reutilizables sin aceptar aplicaciones de tipo mal formadas",
    "Efectos componibles": "separa descripción y ejecución de efectos, explicando el orden de composición, el estado transportado y el punto donde un fallo se recupera",
    "Evaluación interna": "recorre thunks y graph reduction para revelar cuándo compartir trabajo ahorra cómputo y cuándo una referencia retiene memoria innecesaria",
    "Optimización con GHC": "observa la transformación a Core y las reglas de simplificación, verificando que fusionar o inlinear conserve semántica y reduzca asignaciones",
    "Concurrencia robusta": "coordina threads verdes, transacciones y excepciones asíncronas sin abandonar recursos ni romper invariantes durante una cancelación",
    Paralelismo: "distingue sparks creados de trabajo realmente ejecutado y usa el eventlog para comprobar balance, granularidad y velocidad obtenida",
    "Parsing y lenguajes": "compone parsers con consumo y backtracking explícitos para producir un AST preciso y diagnósticos localizados ante entradas inválidas",
    "Pruebas y verificación": "formula propiedades universales, reduce contraejemplos y conecta razonamiento ecuacional con evidencia automatizada reproducible",
    "Construcción y distribución": "fija componentes, snapshots y herramientas para que la resolución de paquetes produzca el mismo artefacto en entornos independientes",
    Interoperabilidad: "cruza la FFI declarando layout, ownership y callbacks para impedir que el recolector o el código nativo invalide memoria compartida",
    "Producción observable": "relaciona opciones del RTS, perfiles de heap y señales del proceso con latencia, residencia y cierre seguro bajo carga",
  },
  go: {
    "Tipos e interfaces": "se valida mediante conjuntos de métodos e identidad nominal, haciendo visible qué implementación satisface un contrato sin declaración explícita",
    Memoria: "sigue escape analysis, crecimiento del stack y asignaciones para explicar por qué un valor termina en heap y cuánto retiene realmente",
    "Runtime en profundidad": "recorre colas locales, work stealing, netpoller y fases del GC para conectar scheduling con pausas y utilización de CPU",
    "Patrones concurrentes": "define ownership de canales y cierre de pipelines para que cada goroutine tenga una terminación observable y no quede bloqueada",
    "Cancelación y límites": "propaga deadlines y causas mediante context sin almacenarlos globalmente, garantizando que trabajo descendiente libere recursos",
    "I/O y formatos": "compone Reader y Writer con buffering y decodificación incremental, limitando tamaño antes de aceptar contenido no confiable",
    "Servicios de red": "configura transporte, conexiones y TLS con timeouts por fase para impedir que una dependencia lenta agote goroutines o sockets",
    "Datos y consistencia": "coordina pools y transacciones de database/sql, dejando explícita la frontera atómica y el momento de devolver cada conexión",
    "Pruebas avanzadas": "genera casos, subtests y fuzz inputs reproducibles para convertir un crash o divergencia en una regresión mínima permanente",
    Toolchain: "conecta generación, tags, análisis y target de compilación para explicar exactamente qué fuentes entran al binario y por qué",
    Seguridad: "trata rutas, comandos, entropía y módulos como fronteras de confianza que requieren APIs seguras y procedencia verificable",
    Rendimiento: "contrasta perfiles de CPU, heap, bloqueos y mutex antes de optimizar, conservando un benchmark que demuestre la mejora",
    "Operación de servicios": "expone salud, logs, trazas y señales de cierre para retirar instancias sin perder peticiones ni ocultar saturación",
  },
  kotlin: {
    "Tipos y nulabilidad avanzada": "usa el análisis de flujo y tipos especiales para demostrar qué valores pueden existir y dónde una aserción reintroduce riesgo de null",
    "Objetos y composición": "modela estado y delegación con receptores explícitos, evitando que helpers de alcance oculten el objeto que realmente cambia",
    "Genéricos expresivos": "aplica proyecciones y varianza para conservar sustitución segura tras el borrado de tipos de la JVM",
    "Programación funcional": "combina funciones, sequences y resultados sin materializar trabajo innecesario ni convertir fallos del dominio en excepciones opacas",
    "Compilador y bytecode": "sigue FIR, IR y bytecode para revelar bridges, metadata y métodos sintéticos que afectan interoperabilidad y tamaño",
    "Coroutines en profundidad": "transforma suspensiones en continuations y jerarquías de Job que propagan cancelación sin bloquear el thread ejecutor",
    "Flujos reactivos": "distingue productores fríos de estado compartido y define replay, conflation y cancelación para consumidores de distinta velocidad",
    "Interoperabilidad JVM": "traduce nulabilidad, wildcards, métodos estáticos y excepciones para que Java y Kotlin compartan un contrato binario estable",
    "Servidor y persistencia": "atraviesa pipeline HTTP, serialización y transacción manteniendo separados datos no confiables, dominio y configuración desplegable",
    Multiplataforma: "ubica contratos comunes y implementaciones por target sin ocultar diferencias de memoria, concurrencia o bibliotecas disponibles",
    Pruebas: "controla scheduler virtual, tiempo y dobles para que una coroutine fallida o cancelada produzca evidencia determinista",
    "Build y calidad": "relaciona compilación incremental, generación KSP y compatibilidad binaria con el grafo real que Gradle ejecuta y cachea",
    "Producción y rendimiento": "mide startup, allocations y spans de coroutines, y comprueba que shrinking no elimine símbolos accedidos indirectamente",
  },
  java: {
    "Sistema de tipos": "resuelve conversión, overload y patrones exhaustivos durante compilación, mostrando dónde boxing o cast trasladan una comprobación a runtime",
    "Diseño de objetos": "preserva identidad, igualdad e invariantes de construcción para que colecciones y consumidores observen valores estables",
    Genéricos: "explica erasure, bounds y bridges para evitar heap pollution y conservar sustitución entre productores y consumidores",
    "Metadatos y reflexión": "descubre símbolos con annotations, handles o proxies respetando encapsulación, caché y límites de módulos",
    "Class files y carga": "recorre carga, linking e inicialización para localizar duplicados, errores de versión y estado creado por inicializadores estáticos",
    "Memoria de la JVM": "sigue layout, generaciones y regiones del collector para relacionar asignación, referencia viva, pausa y memoria nativa",
    "Modelo de memoria concurrente": "establece happens-before mediante locks, volatile o atomics para impedir lecturas obsoletas y reordenamientos inválidos",
    "Concurrencia moderna": "estructura tareas y virtual threads con cancelación y límites, evitando fijar carriers mediante operaciones bloqueantes incompatibles",
    "Procesamiento de colecciones": "divide, transforma y combina elementos respetando orden, asociatividad y costo de materialización en streams secuenciales o paralelos",
    "I/O y networking": "gestiona buffers, channels, charset y TLS con cierre determinista y backpressure en transferencias parciales",
    Persistencia: "delimita pool, transacción y ciclo de entidades para impedir conexiones retenidas, escrituras parciales y consultas ocultas",
    "Construcción modular": "resuelve módulos, dependencias y toolchains para producir imágenes mínimas con servicios y paquetes explícitamente accesibles",
    "Pruebas y calidad": "combina lifecycle, generación y mutación para que la suite detecte cambios semánticos, no solo líneas ejecutadas",
    Seguridad: "endurece parsers, proveedores criptográficos y deserialización mientras rastrea componentes vulnerables del artefacto",
    "Operación y rendimiento": "separa warmup de estado estable y usa JMH, JFR y límites de contenedor para explicar latencia y consumo observados",
  },
  r: {
    "Objetos y atributos": "sigue vector base, atributos y dispatch S3 o S4 para evitar que una transformación pierda clase, dimensiones o niveles",
    "Evaluación del lenguaje": "hace visibles promises, environments y captura de expresiones para distinguir valor calculado de código aún pendiente",
    "Manipulación tabular": "preserva claves, tipos y cardinalidad durante joins y pivots, comprobando filas inesperadamente duplicadas o descartadas",
    "Modelado estadístico": "construye design matrix y supuestos del modelo antes de interpretar coeficientes, incertidumbre o capacidad predictiva",
    Visualización: "mapea datos a escalas y geometrías con unidades perceptibles, evitando distorsión y codificaciones inaccesibles",
    "Datos faltantes y calidad": "distingue mecanismos de ausencia y valida esquema antes de imputar para no fabricar evidencia ni ocultar sesgo",
    "Series temporales": "respeta orden, frecuencia y separación temporal de evaluación para impedir leakage entre pasado y futuro",
    "Datos espaciales": "conserva CRS, unidades y validez geométrica antes de intersectar vectores o remuestrear rasters",
    "Aprendizaje automático": "encapsula preprocessing dentro del resampling y evalúa calibración para que test no influya en selección de modelo",
    "Simulación e inferencia bayesiana": "controla generador, cadenas y diagnósticos para distinguir convergencia aparente de una posterior bien explorada",
    "Paquetes profesionales": "declara API, namespace, documentación y checks para distribuir código sin depender del workspace del autor",
    "Pruebas y contratos": "fija datasets pequeños y propiedades estadísticas para que cambios numéricos relevantes fallen de manera interpretable",
    Rendimiento: "mide tiempo, asignaciones y copia antes de vectorizar, paralelizar o cruzar a C++ mediante Rcpp",
    "Productos de datos": "coordina reactividad, endpoints e informes parametrizados sin mezclar sesión de usuario, secretos y estado global",
    "Gobierno y producción": "versiona datos, paquetes y artefactos junto con auditoría y monitoreo para reconstruir cualquier resultado publicado",
  },
  assembly: {
    "Familias de arquitectura": "contrasta registros, codificación y privilegios de cada ISA sin confundir contrato arquitectónico con implementación microarquitectónica",
    "Codificación y secciones": "ubica bytes, símbolos y alineación en secciones para explicar qué resuelve assembler, linker y loader",
    "Modos de direccionamiento": "calcula dirección efectiva desde base, índice y desplazamiento, comprobando rango, escala y validez antes del acceso",
    "Aritmética de bajo nivel": "rastrea flags y ancho de operandos para detectar overflow, extensión de signo y pérdida durante división o multiplicación",
    "Pila y marcos de llamada": "preserva registros y alineación según ABI para que llamadas, variádicos y unwinding atraviesen lenguajes con seguridad",
    "Enlazado y carga": "sigue relocations, GOT y PLT desde objeto hasta proceso para explicar resolución estática, dinámica y position independence",
    "Interfaz con el sistema": "cruza user y kernel mode mediante números de syscall, buffers válidos y códigos de error sin asumir wrappers de biblioteca",
    "Cómputo vectorial": "empaqueta lanes y gestiona tail, alineación y features de CPU para acelerar sin leer fuera de límites",
    "Concurrencia y memoria": "combina atomics y barreras bajo un modelo de coherencia explícito para impedir races y progreso aparente",
    "Depuración binaria": "correlaciona direcciones, símbolos, registros y core dumps para reconstruir el estado exacto que causó un fallo",
    "Rendimiento microarquitectónico": "relaciona dependencias, predicción y jerarquía de caché con contadores reales en lugar de contar instrucciones solamente",
    "Seguridad binaria": "muestra cómo corrupción de control se enfrenta con canaries, NX, ASLR y CFI sin asumir que una mitigación elimina la causa",
    "Firmware y arranque": "parte del reset vector y configura memoria, interrupciones y periféricos antes de transferir control a un runtime mayor",
  },
  erlang: {
    "Semántica funcional": "evalúa pattern matching, guards y recursión sobre términos inmutables, haciendo visible qué cláusula acepta cada mensaje",
    "Internals de BEAM": "recorre bytecode, reducciones y heaps por proceso para conectar fairness, GC aislado y consumo real de binarios compartidos",
    "Protocolos entre procesos": "define correlación, orden y timeout de mensajes para que remitente y receptor detecten respuestas tardías o mailbox saturado",
    "Servidores OTP avanzados": "traduce eventos a callbacks y estados explícitos, manteniendo trabajo largo fuera del loop que atiende mensajes",
    "Árboles de supervisión": "elige estrategia, intensidad y orden de apagado según dependencias para recuperar solo el estado seguro necesario",
    "Aplicaciones y releases": "ensambla módulos, configuración y boot scripts como una unidad versionada capaz de iniciar, detenerse y actualizarse",
    "Sistemas distribuidos": "trata descubrimiento, particiones y conectividad como estados observables sin asumir una vista global siempre consistente",
    "Datos y persistencia": "elige ETS, DETS o Mnesia según ownership, durabilidad y transacción, evitando convertir tablas compartidas en estado sin responsable",
    "Pruebas de sistemas concurrentes": "genera secuencias, inyecta fallos y comprueba propiedades del protocolo más allá de una planificación afortunada",
    Observabilidad: "correlaciona metadata, spans y scheduler utilization con PIDs y colas para localizar procesos que no progresan",
    "Seguridad y operación": "protege distribución, shell y atom table mientras coordina rolling upgrades que mantienen compatibilidad entre nodos",
  },
};

type MechanismProfile = {
  id: string;
  matches: readonly RegExp[];
  input: string;
  transformation: string;
  result: string;
  failure: string;
};

const mechanismProfiles: readonly MechanismProfile[] = [
  {
    id: "type-system",
    matches: [/type|tipo|generic|genérico|trait|typeclass|variance|varianza|kind|constraint|nullable|null safety|sealed|enum|record|interface/],
    input: "un valor candidato y las restricciones estáticas declaradas por la API",
    transformation: "el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código",
    result: "una operación tipada cuyo contrato puede consumirse sin repetir validaciones",
    failure: "una coerción, proyección o caso no cubierto desplaza el error al runtime",
  },
  {
    id: "memory-ownership",
    matches: [/memory|memoria|ownership|borrow|préstamo|lifetime|pointer|puntero|heap|stack|alloc|layout|alignment|reference|referencia|copy-on|clone|cow|arena/],
    input: "una región, referencia o valor con propietario y tiempo de vida identificables",
    transformation: "el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación",
    result: "memoria válida durante toda la operación y recuperada al terminar su último uso",
    failure: "un alias mutable, ciclo, dirección obsoleta o liberación prematura corrompe estado o retiene recursos",
  },
  {
    id: "concurrency",
    matches: [/thread|goroutine|ractor|\bactors?\b|concurr|parallel|paralel|mutex|lock|atomics|atomic variables|atomic read|mvar|stm|scheduler|mailbox|channel|canal|worker|semaphore|barrier|supervisor|servidores otp|hibernation|continue callback/],
    input: "tareas con dependencias, recursos compartidos y una política explícita de cancelación",
    transformation: "el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable",
    result: "progreso concurrente con ownership y terminación comprobables para cada tarea",
    failure: "una espera circular, race, starvation o mensaje sin consumir detiene progreso o vuelve no determinista el resultado",
  },
  {
    id: "async-stream",
    matches: [/async|await|future|coroutine|fiber|flow|stream|reactiv|continuation|waker|event loop|noncancellable|suspend|cancelación|cancellation|deadline|context propagation/],
    input: "una operación pendiente, una señal de cancelación y consumidores con distinta velocidad",
    transformation: "la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar",
    result: "un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo",
    failure: "ignorar backpressure o cancelación deja tareas huérfanas, buffers crecientes o efectos parciales",
  },
  {
    id: "compiler-runtime",
    matches: [/compiler|compil|bytecode|opcode|jit|aot|ghc|core language|class file|class load|beam|zend|fir|intermediate representation|ir\b|macro|codegen|synthetic|inline cache|runtime en profundidad|tri-color|stop-the-world|sysmon|preemption|work stealing/],
    input: "código fuente, metadatos y opciones concretas del target",
    transformation: "frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias",
    result: "un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente",
    failure: "una suposición de optimización, ABI o carga inválida produce código incompatible o un deoptimization inesperado",
  },
  {
    id: "parsing-language",
    matches: [/pars|grammar|gramática|regex|token|ast|syntax|sintaxis|pretty print|pattern match|pattern synonym|desestruct|unification|unificación/],
    input: "una secuencia de símbolos junto con la gramática y el contexto de reconocimiento",
    transformation: "scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión",
    result: "un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura",
    failure: "ambigüedad, backtracking ilimitado o recuperación imprecisa acepta datos erróneos o oculta el punto del fallo",
  },
  {
    id: "algorithmic-structure",
    matches: [/secuencias y almacenamiento|ordenamiento y selección|grafos ponderados y redes|procesamiento de texto|geometría computacional|ingeniería y verificación/],
    input: "una instancia finita, la representación elegida y el criterio que define una solución válida",
    transformation: "el algoritmo mantiene su invariante mientras reduce candidatos, reorganiza datos o propaga costos",
    result: "una solución cuya corrección y complejidad pueden justificarse con la traza",
    failure: "una representación inadecuada, caso degenerado o entrada adversarial rompe el invariante o dispara el costo",
  },
  {
    id: "discrete-mathematics",
    matches: [/teoría de números|teoría de grafos|exponenciación modular|teorema de hall|cortes y puentes|espectro de un grafo/],
    input: "objetos discretos, relaciones y restricciones expresadas sin ambigüedad",
    transformation: "la construcción aplica una identidad o teorema paso a paso y conserva las hipótesis requeridas",
    result: "una propiedad demostrada o un valor calculado que puede contrastarse con casos pequeños",
    failure: "omitir una hipótesis de coprimalidad, conectividad o dominio invalida la conclusión aunque el cálculo termine",
  },
  {
    id: "functional-evaluation",
    matches: [/lambda|currying|function|función|closure|compos|functor|applicative|monad|fold|travers|reader|writer|state|lazy|thunk|reduction|recurs|tail call|cálculo funcional|efecto|evaluación interna|evaluación del lenguaje|promise|environment|quosure|binding|sustitución|combinador|equivalencia|black hole|space leak|resourcet/],
    input: "valores y funciones cuyo dominio, efectos y orden de evaluación están delimitados",
    transformation: "la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas",
    result: "un nuevo valor que mantiene las leyes de composición y puede razonarse localmente",
    failure: "evaluación infinita, captura de entorno o efecto oculto rompe terminación, memoria o equivalencia referencial",
  },
  {
    id: "object-dispatch",
    matches: [/class|clase|object|objeto|method|método|dispatch|inherit|herencia|mixin|module|módulo|delegate|delegación|reflection|reflexión|proxy|metaprogram|singleton|despacho dinámico|modularidad y contratos|encapsulación/],
    input: "un receptor, un mensaje y metadatos de clase visibles en la frontera de llamada",
    transformation: "el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible",
    result: "el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato",
    failure: "resolución ambigua, monkey patch global o reflexión sin límites invoca comportamiento inesperado",
  },
  {
    id: "collections-data",
    matches: [/collection|collector|colección|array|vector|list|lista|map\b|hash|set\b|tree|árbol|table|tabla|frame|matrix|matriz|slice|sequence|iterator|enumerator|range|factor|manipulación tabular|tidy data|pivot|split-apply/],
    input: "elementos con forma, identidad y orden conocidos antes de recorrerlos",
    transformation: "la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas",
    result: "una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada",
    failure: "un índice fuera de rango, clave inestable o reciclado implícito duplica, pierde o mezcla elementos",
  },
  {
    id: "database-consistency",
    matches: [/database|sql|transaction|transacci|persist|orm|jdbc|pdo|query|consulta|migration|schema|join|pool|mnesia|ets|dets|lock optim|isolation/],
    input: "datos validados, una identidad estable y la frontera transaccional que agrupa sus cambios",
    transformation: "el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar",
    result: "estado persistido con integridad y visibilidad coherentes para lectores concurrentes",
    failure: "una carrera, transacción parcial o consulta implícita viola invariantes y dificulta recuperar el estado anterior",
  },
  {
    id: "network-io",
    matches: [/http|grpc|socket|network|red\b|dns|tls|rack|request|response|client|server|i\/o|reader|writer|buffer|serialization|serialización|json|yaml|protocol|protocolo|sistemas distribuidos|global registry|cluster topology|hidden nodes|net tick|global groups/],
    input: "bytes o mensajes externos con tamaño, codificación, timeout y procedencia explícitos",
    transformation: "la capa de transporte encuadra, valida y convierte la carga mientras administra conexiones parciales",
    result: "una respuesta o estructura interna completa que conserva correlación y estado del intercambio",
    failure: "un timeout ausente, framing incorrecto o entrada no confiable bloquea recursos o atraviesa la frontera de seguridad",
  },
  {
    id: "security",
    matches: [/security|seguridad|auth|credential|credencial|password|contraseña|secret|secreto|csrf|xss|injection|inyección|crypto|cifrad|signature|firma|permission|permiso|sandbox|vulnerab|audit|deny/],
    input: "una identidad, operación solicitada y datos que todavía no cruzan la frontera de confianza",
    transformation: "el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos",
    result: "solo la capacidad permitida ejecutada con una decisión que puede auditarse",
    failure: "confundir validación con autorización o aceptar datos ambiguos permite escalamiento, inyección o fuga",
  },
  {
    id: "testing-diagnostics",
    matches: [/test|prueba|fuzz|property|propiedad|assert|debug|diagn|trace|profil|benchmark|coverage|cobertura|mutation|golden|snapshot|staticcheck|static-analysis|lint|warning|error report|calidad y publicación|verificación automatizada|atribuciones/],
    input: "un comportamiento esperado, datos controlados y una señal observable de éxito o fallo",
    transformation: "la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo",
    result: "evidencia reproducible que distingue regresión, ruido y limitación conocida",
    failure: "un oráculo débil, entorno variable o cobertura superficial deja pasar una desviación real",
  },
  {
    id: "performance",
    matches: [/performance|rendimiento|optimization|optimización|latency|latencia|throughput|allocation|cache|warmup|pacer|compaction|fusion|vectorization|vectorización|simd|branch prediction/],
    input: "un workload representativo, un baseline y límites explícitos de CPU, memoria y latencia",
    transformation: "el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica",
    result: "una mejora medible con distribución, entorno y comparación documentados",
    failure: "optimizar una microprueba o ignorar warmup y contención desplaza el cuello y reporta una ganancia falsa",
  },
  {
    id: "build-supply-chain",
    matches: [/build|package|paquete|cargo|cabal|gradle|maven|gem|bundler|composer|dependency|dependenc|toolchain|workspace|release|deploy|artifact|artefacto|linker|linking|relocation|preload|version manager|construcción modular|jpms|jlink|herramientas de desarrollo|automatización/],
    input: "fuentes, lockfile, toolchain y configuración declarada para un target concreto",
    transformation: "el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida",
    result: "un artefacto reproducible, verificable y promovible entre entornos",
    failure: "una versión flotante, generador no rastreado o ABI distinta produce builds irrepetibles o vulnerables",
  },
  {
    id: "operations-lifecycle",
    matches: [/production|producción|operation|operación|deploy|release|health|readiness|shutdown|signal|logging|telemetry|observab|monitor|rolling|upgrade|startup|configuration|configuración|drift|productos de datos|plumber|parameterized report|scheduled pipeline|entrega y mantenimiento|retiro seguro/],
    input: "un artefacto aprobado, configuración del entorno y señales de salud antes de recibir carga",
    transformation: "el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada",
    result: "servicio disponible con estado, versión y camino de rollback verificables",
    failure: "configuración divergente, cierre abrupto o señal ignorada pierde trabajo y oculta la degradación",
  },
  {
    id: "statistics-modeling",
    matches: [/statistic|estadíst|regression|regresión|model|modelo|bayes|sampling|muestreo|distribution|distribución|variance|varianza|probab|forecast|series temporales|bootstrap|mcmc|calibration|resampling|datos faltantes|imput|outlier|mcar|data provenance|datos espaciales|spatial|simple features|operaciones geométricas|aprendizaje automático|feature engineering|preprocessing|hyperparameter/],
    input: "observaciones con población, unidades, ausencia y mecanismo de muestreo documentados",
    transformation: "el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados",
    result: "una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización",
    failure: "leakage, sesgo de selección o supuestos violados produce confianza aparente y conclusiones falsas",
  },
  {
    id: "hardware-abi",
    matches: [/register|registro|instruction|instrucción|opcode|address|direccion|endianness|abi|syscall|system call|interrupt|interrupción|firmware|boot|vector lane|stack pointer|frame pointer|calling convention|microarquitect|familias de arquitectura|codificación y secciones|aritmética de bajo nivel|pila y marcos de llamada|enlazado y carga|depuración binaria/],
    input: "bits, registros y direcciones preparados según la ISA y convención de llamada activas",
    transformation: "la CPU decodifica instrucciones y mueve estado entre unidades, memoria y frontera del sistema",
    result: "estado arquitectónico actualizado con flags, registros preservados y control en la dirección prevista",
    failure: "ancho, alineación, privilegio o registro preservado incorrectos causan excepción, corrupción o retorno inválido",
  },
  {
    id: "workflow-product",
    matches: [/scrum|kanban|sprint|backlog|product goal|flow|wip|lead time|cycle time|story|histor|discovery|metodolog|risk|riesgo|outcome|dora|team|equipo|review|retrospect|delivery|extreme programming|metáfora del sistema|ritmo sostenible/],
    input: "una necesidad, capacidad disponible y política explícita para aceptar trabajo",
    transformation: "el sistema limita opciones, recoge evidencia y adapta prioridad sin ocultar colas ni dependencias",
    result: "un incremento terminado y una señal de resultado que alimenta la siguiente decisión",
    failure: "optimizar actividad local o iniciar demasiado trabajo aumenta espera y separa entrega de aprendizaje",
  },
  {
    id: "ui-event",
    matches: [/sprite|event|evento|animation|animación|audio|collision|colisión|coordinate|coordenada|clone|clon|interface|interfaz|view|render|component|componente|sensor|camera|cámara|visualización|escala|anotación|gráfico accesible/],
    input: "un evento del usuario o sistema junto con el estado visual vigente",
    transformation: "el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible",
    result: "interfaz sincronizada que comunica cambio, foco y acción disponible",
    failure: "eventos intercalados, estado global o feedback dependiente de una sola señal desincronizan la experiencia",
  },
  {
    id: "language-control",
    matches: [/condition|condición|loop|bucle|operator|operador|variable|constant|constante|scope|alcance|control|expression|expresión|value|valor|assignment|asignación|exception|excepción|panic|result|option|nil|unit|nothing/],
    input: "valores y estado local antes de evaluar una regla de control",
    transformation: "el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos",
    result: "un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto",
    failure: "una rama omitida, coerción o excepción sin contexto deja el programa en un estado parcial",
  },
] as const;

const descriptionFrames = [
  (anchor: string, profile: MechanismProfile) => `Entrada de ${anchor}: ${profile.input}. Transformación: ${profile.transformation}. Resultado: ${profile.result}. Fallo visible: ${profile.failure}.`,
  (anchor: string, profile: MechanismProfile) => `La escena entrega a ${anchor} ${profile.input}; después ${profile.transformation}. Debe producir ${profile.result}; si el contrato se rompe, ${profile.failure}.`,
  (anchor: string, profile: MechanismProfile) => `Para ejecutar ${anchor} se parte de ${profile.input}. Internamente, ${profile.transformation}; la salida verificable es ${profile.result}, mientras el caso de error demuestra que ${profile.failure}.`,
  (anchor: string, profile: MechanismProfile) => `${anchor} conecta una entrada —${profile.input}— con este mecanismo: ${profile.transformation}. La animación confirma ${profile.result} y detiene el flujo cuando ${profile.failure}.`,
  (anchor: string, profile: MechanismProfile) => `El recorrido de ${anchor} comienza con ${profile.input}, hace visible cómo ${profile.transformation} y termina en ${profile.result}. La recuperación se activa porque ${profile.failure}.`,
  (anchor: string, profile: MechanismProfile) => `Mecanismo de ${anchor}: recibe ${profile.input}; durante el cambio, ${profile.transformation}. Se acepta únicamente ${profile.result} y se rechaza la ejecución si ${profile.failure}.`,
  (anchor: string, profile: MechanismProfile) => `Al observar ${anchor}, primero aparece ${profile.input}; luego ${profile.transformation}. La evidencia final muestra ${profile.result}, o bien diagnostica que ${profile.failure}.`,
  (anchor: string, profile: MechanismProfile) => `${anchor} se verifica de extremo a extremo: entrada ${profile.input}; proceso ${profile.transformation}; salida ${profile.result}; frontera de fallo ${profile.failure}.`,
] as const;

function conceptAnchor(title: string) {
  const tokens = title
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[^\p{L}\p{N}+#.-]+/gu, " ")
    .split(/\s+/)
    .filter((token) => token && !["de", "del", "la", "el", "los", "las", "y", "con", "para", "frente", "versus"].includes(token.toLocaleLowerCase("es")))
    .slice(0, 4);
  return tokens.join(" / ") || "el mecanismo";
}

function profileForConcept(title: string, section: string): MechanismProfile {
  const titleText = title.toLocaleLowerCase("es");
  const semanticText = `${title} ${section}`.toLocaleLowerCase("es");
  return mechanismProfiles.find((profile) => profile.matches.some((pattern) => pattern.test(titleText)))
    ?? mechanismProfiles.find((profile) => profile.matches.some((pattern) => pattern.test(semanticText)))
    ?? {
      id: "domain-contract",
      matches: [],
      input: `datos compatibles con la responsabilidad concreta de ${conceptAnchor(title)}`,
      transformation: `la implementación aplica las reglas propias de ${conceptAnchor(title)} conservando el estado anterior hasta validar el cambio`,
      result: `un resultado observable asociado exclusivamente a ${conceptAnchor(title)}`,
      failure: `una precondición específica de ${conceptAnchor(title)} no se cumple y la operación debe revertirse con evidencia`,
    };
}

function mechanismDescription(title: string, section: string, ordinal: number) {
  const profile = profileForConcept(title, section);
  const frame = descriptionFrames[ordinal % descriptionFrames.length] ?? descriptionFrames[0];
  return frame(conceptAnchor(title), profile);
}

function withDescriptions(
  collection: BlueprintCollection,
  section: string,
  titles: readonly string[],
): readonly string[] {
  if (!chapterFocuses[collection][section]) {
    throw new Error(`Falta el foco semántico de ${collectionLabels[collection]}/${section}.`);
  }
  return titles.map((title, index) =>
    `${title}::${mechanismDescription(title, section, index)}`,
  );
}

const atlasCollectionLabels: Readonly<Record<string, string>> = {
  "programming-fundamentals": "Fundamentos de programación",
  algorithms: "Algoritmos y estructuras de datos",
  mathematics: "Matemáticas para programación",
  methodologies: "Metodologías de desarrollo",
  scratch: "Scratch",
  ruby: "Ruby",
  rust: "Rust",
  php: "PHP",
  haskell: "Haskell",
  go: "Go",
  kotlin: "Kotlin",
  java: "Java",
  r: "R",
  assembly: "Assembly",
  erlang: "Erlang",
};

const collectionAugmentationFocus: Readonly<Record<string, string>> = {
  "programming-fundamentals": "convierte una regla abstracta en datos, estado y efectos que una persona principiante puede rastrear y comprobar",
  algorithms: "expone representación, invariante y costo para justificar por qué la solución sigue siendo correcta al crecer la entrada",
  mathematics: "declara el supuesto formal, la aproximación computable y el error que debe acotarse antes de interpretar el resultado",
  methodologies: "conecta una política de trabajo con feedback observable sin convertir el marco en una colección de ceremonias",
  scratch: "traduce eventos, estado de sprites y turnos cooperativos en una escena que puede pausarse, reiniciarse y depurarse",
  ruby: "sigue el despacho dinámico y el ciclo de vida del objeto hasta una señal que pueda diagnosticarse en el runtime",
  rust: "hace explícitos ownership, invariantes y costo para que seguridad de memoria y comportamiento concurrente puedan verificarse",
  php: "recorre request, Zend Engine y frontera externa para mantener entrada, efectos persistentes y respuesta bajo un contrato seguro",
};

const additionalConceptTitles: Readonly<Record<string, Readonly<Record<string, readonly string[]>>>> = {
  "programming-fundamentals": {
    "Representación de información": ["Complemento a dos", "Compresión con y sin pérdida"],
    "Modelado de datos": ["Normalización de estados", "Valores opcionales y ausencia"],
    "Estado, efectos y tiempo": ["Máquinas de estados finitos"],
    "Modularidad y contratos": ["Encapsulación de invariantes", "Inversión de dependencias elemental", "Compatibilidad de interfaces"],
    "Estrategias de prueba": ["Pruebas de regresión"],
    "Herramientas de desarrollo": ["Formateadores y linters", "Automatización de tareas repetibles"],
    "Seguridad desde el inicio": ["Codificación segura de salida"],
    "Recursos y rendimiento": ["Complejidad empírica", "Presupuestos de recursos"],
    "Entrega y mantenimiento": ["Migraciones de configuración", "Retiro seguro de funcionalidades"],
  },
  algorithms: {
    "Secuencias y almacenamiento": ["Ropes para texto extenso", "Gap buffers", "Succinct data structures"],
    "Hashing en profundidad": ["Robin Hood hashing", "Hash flooding defensivo"],
    "Ordenamiento y selección": ["Introsort", "Ordenamiento adaptativo"],
    "Grafos ponderados y redes": ["A-star", "Johnson para todos los pares", "Dominators en grafos de flujo"],
    "Procesamiento de texto": ["Aho-Corasick"],
    "Geometría computacional": ["Triangulación de Delaunay", "Diagramas de Voronoi"],
    "Programación dinámica avanzada": ["Optimización por divide and conquer"],
    "Datos masivos y streaming": ["K-way merge", "Count-min sketch con conservative update"],
    "Algoritmos distribuidos": ["Vector clocks"],
    "Ingeniería y verificación": ["Differential performance testing", "Invariant checking in production", "Adversarial workload generation"],
  },
  mathematics: {
    "Teoría de números": ["Exponenciación modular rápida", "Pruebas probabilísticas de primalidad"],
    "Teoría de grafos": ["Teorema de Hall", "Cortes y puentes", "Espectro de un grafo"],
    "Probabilidad discreta": ["Concentración y desigualdad de Chernoff"],
    "Inferencia estadística": ["Intervalos bootstrap", "Tamaño del efecto"],
    "Álgebra lineal computacional": ["Número de condición matricial"],
    "Geometría y transformaciones": ["Coordenadas baricéntricas", "Geometría proyectiva"],
    "Optimización avanzada": ["Condiciones KKT", "Métodos de punto interior", "Optimización multiobjetivo"],
    "Métodos formales": ["Refinement types"],
  },
  methodologies: {
    "Scrum aplicado": ["Empirismo y sus pilares", "Cancelación de un Sprint"],
    "Extreme Programming": ["Refactorización continua", "Metáfora del sistema", "Ritmo sostenible"],
    "Descubrimiento de producto": ["Opportunity solution tree", "Pruebas de desirability"],
    "Requisitos y alcance": ["Impact mapping"],
    "Entrega y operaciones": ["Value stream mapping", "Error budgets"],
    "Riesgo y gobernanza": ["Decision gates basados en riesgo", "Controles compensatorios"],
    "Métricas orientadas a resultados": ["Métricas leading y lagging"],
  },
  scratch: {
    "Modelo de eventos": ["Condiciones de carrera entre guiones", "Barreras por mensajes"],
    "Datos persistentes y compartidos": ["Codificación numérica en variables cloud", "Listas paralelas y consistencia", "Migración de formato guardado"],
    "Patrones con clones": ["Límite global de clones"],
    "Animación y audio": ["Interpolación de disfraces", "Latencia perceptual del sonido"],
    "Calidad y publicación": ["Prueba de reinicio limpio", "Presupuesto de clones por escena", "Verificación de atribuciones"],
  },
  ruby: {
    "Despacho dinámico": ["Prepend en la cadena de ancestros"],
    Metaprogramación: ["BasicObject para proxies", "Source locations y trazabilidad"],
    "Memoria y runtime": ["Write barriers", "Compaction", "GC.stat"],
    "Concurrencia y asincronía": ["Thread exception reporting"],
    "Web y red": ["Hijacking de conexiones Rack", "DNS y timeouts por fase"],
    "Seguridad del ecosistema": ["RubyGems trusted publishing", "Tainted archive extraction", "Template injection"],
    "Empaquetado y operación": ["Fork safety after preload"],
  },
  rust: {
    "Ownership avanzado": ["Cow y clonación bajo demanda", "Cycle prevention con arenas"],
    "Préstamos en diseños reales": ["Two-phase borrows"],
    "Traits y coherencia": ["Object safety", "Supertraits", "Specialization y sus límites"],
    "Macros y generación": ["Token trees", "Span-aware diagnostics"],
    "Concurrencia sin carreras": ["Poisoning de locks", "False sharing", "Loom model checking"],
    "Asincronía en profundidad": ["Backpressure con bounded channels"],
    "Unsafe con invariantes": ["Provenance de punteros", "Stacked Borrows model"],
    "Pruebas y calidad": ["Concurrency fuzzing", "Snapshot testing de formatos", "Semver compatibility checks"],
    "Cadena de suministro y entrega": ["Minimal versions testing"],
  },
  php: {
    "Orientación a objetos": ["Propiedades dinámicas obsoletas"],
    "Internals de Zend": ["Interned strings", "Garbage collector de ciclos"],
    "HTTP y APIs": ["Server-Sent Events", "Problem Details para HTTP APIs"],
    "Persistencia segura": ["Bloqueo optimista"],
    "Seguridad web": ["SameSite cookies", "Validación de uploads por contenido", "Prevención de SSRF"],
    "Verificación automatizada": ["Architecture tests", "Static-analysis baselines"],
    "Operación y evolución": ["FPM slowlog", "Backward-compatible API deprecations", "Runtime configuration drift"],
  },
  haskell: {
    "Diseño con tipos algebraicos": ["Recursion schemes", "Pattern synonyms"],
    "Tipos de orden superior": ["Impredicative polymorphism", "Roles y representational equality", "Linear types"],
    "Efectos componibles": ["ResourceT y liberación determinista"],
    "Evaluación interna": ["Pointer tagging", "Selector thunks"],
    "Optimización con GHC": ["Worker-wrapper transformation"],
    "Concurrencia robusta": ["Bound threads", "Masking states"],
    "Parsing y lenguajes": ["Incremental parsing", "Error recovery combinators"],
    "Pruebas y verificación": ["Coverage-guided property generation"],
    "Producción observable": ["Heap census automation", "Eventlog correlation IDs", "Allocation limit handling"],
  },
  go: {
    Memoria: ["Write barrier del collector"],
    "Runtime en profundidad": ["Sysmon", "Pacer del garbage collector"],
    "Patrones concurrentes": ["Singleflight suppression"],
    "Cancelación y límites": ["Hedged requests", "Admission control", "Semaphore-weighted concurrency"],
    "Servicios de red": ["HTTP/2 stream limits", "DNS resolver behavior"],
    "Datos y consistencia": ["Optimistic concurrency tokens"],
    Seguridad: ["HTTP request smuggling defenses", "Filesystem sandbox boundaries"],
    "Operación de servicios": ["Load shedding"],
  },
  kotlin: {
    "Objetos y composición": ["Data object", "Context receivers y parámetros de contexto"],
    "Programación funcional": ["Persistent collections", "Tail recursion optimization", "Inline value transformations"],
    "Compilador y bytecode": ["Synthetic accessors"],
    "Coroutines en profundidad": ["NonCancellable cleanup", "Coroutine exception aggregation"],
    "Flujos reactivos": ["ChannelFlow fusion"],
    "Interoperabilidad JVM": ["Default interface methods", "Suspend functions vistas desde Java"],
    Pruebas: ["Virtual-time timeout assertions", "ABI compatibility tests", "Multiplatform test source sets"],
    "Producción y rendimiento": ["Baseline profiles fuera de Android"],
  },
  java: {
    "Diseño de objetos": ["Defensive copying"],
    "Metadatos y reflexión": ["Hidden classes"],
    "Class files y carga": ["Class unloading", "Split packages"],
    "Memoria de la JVM": ["Reference objects and reachability"],
    "Modelo de memoria concurrente": ["Safe publication", "Final field semantics", "VarHandle access modes"],
    "Concurrencia moderna": ["Scoped values"],
    "I/O y networking": ["Direct byte buffers", "ALPN protocol negotiation"],
    Seguridad: ["JAR signature verification"],
    "Operación y rendimiento": ["Safepoint diagnostics", "Native memory leak triage", "Coordinated omission in benchmarks"],
  },
  r: {
    "Evaluación del lenguaje": ["Active bindings", "Call stack introspection"],
    "Modelado estadístico": ["Residual diagnostics", "Interaction terms", "Robust standard errors"],
    "Datos faltantes y calidad": ["Sensitivity analysis for missingness", "Multiple imputation pooling"],
    "Series temporales": ["Rolling-origin evaluation"],
    "Datos espaciales": ["Spatial indexing" , "Topology repair"],
    "Aprendizaje automático": ["Nested resampling"],
    "Paquetes profesionales": ["Compiled code registration", "Reverse dependency checks"],
    Rendimiento: ["Copy detection with tracemem"],
    "Gobierno y producción": ["Dataset checksums", "Reproducible container images", "Statistical model cards"],
  },
  assembly: {
    "Codificación y secciones": ["Symbol visibility"],
    "Modos de direccionamiento": ["Canonical address rules", "Unaligned access behavior"],
    "Pila y marcos de llamada": ["Red zone", "Shadow space", "Stack clash probing"],
    "Enlazado y carga": ["Thread-local relocation models"],
    "Interfaz con el sistema": ["Partial system-call results", "Restartable syscalls"],
    "Cómputo vectorial": ["Masked vector operations"],
    "Depuración binaria": ["Reverse execution", "DWARF call-frame information"],
    "Seguridad binaria": ["Pointer authentication codes"],
  },
  erlang: {
    "Internals de BEAM": ["Literal and constant pools"],
    "Protocolos entre procesos": ["Selective receive performance", "Protocol versioning"],
    "Árboles de supervisión": ["Significant children", "Automatic shutdown"],
    "Aplicaciones y releases": ["Release handling instructions"],
    "Sistemas distribuidos": ["Hidden nodes", "Net tick time", "Global groups"],
    "Pruebas de sistemas concurrentes": ["Scheduler perturbation", "Network partition simulation", "Mailbox invariant properties"],
    "Seguridad y operación": ["Cookie rotation strategy", "Secure remote console auditing"],
  },
};

function additionalDescription(collection: string, section: string, title: string, ordinal: number): string {
  const typedCollection = collection as BlueprintCollection;
  const knownMechanism = chapterFocuses[typedCollection]?.[section] ?? collectionAugmentationFocus[collection];
  if (!atlasCollectionLabels[collection] || !knownMechanism) {
    throw new Error(`Falta contexto editorial para ${collection}/${section}.`);
  }
  return `${title}::${mechanismDescription(title, section, 5 + ordinal)}`;
}

const baseNewLearningExtensionsFoundationsLanguages = {
  "programming-fundamentals": [
    {
      section: "Representación de información",
      concepts: ["Bits, bytes y palabras::Relaciona la unidad binaria, su agrupación en bytes y el ancho natural que procesa una CPU.", "Sistemas binario y hexadecimal::Convierte cantidades entre bases para leer máscaras, direcciones y representaciones compactas sin perder valor.", "Codificación de texto y Unicode::Explica cómo puntos de código, codificaciones y grafemas evitan confundir caracteres con bytes.", "Representación de imágenes y sonido::Muestra cómo muestreo, resolución, canales y compresión convierten señales en datos discretos.", "Serialización de datos::Transforma estructuras en formatos transportables preservando esquema, tipos, versión y límites de confianza."],
    },
    {
      section: "Diseño paso a paso",
      concepts: ["Requisitos observables::Convierte una necesidad ambigua en comportamientos verificables con entradas, resultados y restricciones explícitas.", "Precondiciones y postcondiciones::Define qué debe cumplirse antes de una operación y qué garantiza después de completarla.", "Casos de uso mínimos::Recorta un problema a recorridos representativos que permitan aprender y validar antes de ampliar alcance.", "Diagramas de flujo::Representa decisiones, repeticiones y terminaciones para detectar caminos omitidos antes de programar.", "Descomposición descendente::Divide una responsabilidad grande en tareas pequeñas hasta que cada paso sea implementable y comprobable."],
    },
    {
      section: "Modelado de datos",
      concepts: ["Entidades y atributos::Separa objetos relevantes del dominio de las propiedades necesarias para describirlos.", "Identidad frente a igualdad::Distingue si dos valores representan el mismo objeto o solamente contienen datos equivalentes.", "Registros y estructuras::Agrupa campos relacionados bajo un contrato que evita parámetros sueltos y combinaciones inválidas.", "Enumeraciones y estados válidos::Restringe opciones a un conjunto cerrado para impedir valores imposibles durante la ejecución.", "Relaciones entre datos::Modela pertenencia, referencia y cardinalidad para conservar vínculos sin duplicación contradictoria."],
    },
    {
      section: "Estado, efectos y tiempo",
      concepts: ["Estado mutable e inmutable::Compara cambiar un valor en sitio con producir uno nuevo y hace visibles sus efectos compartidos.", "Funciones puras y efectos laterales::Aísla cálculos deterministas de operaciones que leen, escriben o dependen del entorno.", "Orden de evaluación::Explica por qué la secuencia de efectos altera resultados aunque las expresiones parezcan equivalentes.", "Idempotencia básica::Diseña operaciones repetibles cuyo efecto final no cambia cuando una solicitud se procesa nuevamente.", "Relojes, fechas y zonas horarias::Diferencia instante, duración y hora civil para evitar cálculos ambiguos por horario local."],
    },
    {
      section: "Modularidad y contratos",
      concepts: ["Separación de responsabilidades::Asigna a cada módulo una razón clara de cambio para limitar efectos colaterales.", "Interfaces como contratos::Declara operaciones y garantías públicas sin obligar a conocer la implementación interna.", "Acoplamiento y cohesión::Evalúa dependencias entre módulos y mantiene juntas las piezas que resuelven una misma responsabilidad.", "Reutilización frente a duplicación::Extrae una abstracción solo cuando comparte significado, no únicamente líneas con apariencia similar.", "Dependencias explícitas::Recibe servicios y configuración de forma visible para facilitar pruebas y reemplazos controlados."],
    },
    {
      section: "Estrategias de prueba",
      concepts: ["Tabla de casos de prueba::Relaciona entradas, contexto y salida esperada para revelar huecos y evitar comprobaciones improvisadas.", "Particiones de equivalencia::Agrupa entradas que ejercen el mismo comportamiento y reduce pruebas redundantes sin perder cobertura semántica.", "Valores frontera::Prueba justo antes, en y después de cada límite donde suelen aparecer errores de comparación.", "Pruebas unitarias e integración::Distingue reglas aisladas de colaboraciones reales para localizar fallos sin ignorar contratos entre componentes.", "Dobles de prueba elementales::Sustituye dependencias lentas o variables con stubs y fakes cuyo comportamiento está deliberadamente acotado."],
    },
    {
      section: "Herramientas de desarrollo",
      concepts: ["Editor e IDE::Integra navegación, análisis y ejecución manteniendo visibles las operaciones que automatiza la herramienta.", "Terminal y línea de comandos::Compone programas mediante argumentos, entrada, salida y códigos de estado reproducibles.", "Compilador e intérprete::Contrasta traducir antes de ejecutar con evaluar durante la ejecución y ubica sus diagnósticos.", "Breakpoints y ejecución paso a paso::Detiene el programa en estados relevantes para inspeccionar variables y seguir el origen de una desviación.", "Gestores de paquetes::Resuelven versiones y dependencias, pero requieren bloqueos y procedencia verificable para repetir una instalación."],
    },
    {
      section: "Seguridad desde el inicio",
      concepts: ["Datos confiables y no confiables::Marca toda entrada externa como potencialmente hostil hasta comprobar formato, tamaño y autorización.", "Validación y normalización::Comprueba reglas sobre una representación canónica para que variantes equivalentes no eludan controles.", "Secretos fuera del código::Carga credenciales desde almacenes protegidos y evita registrarlas, versionarlas o incluirlas en artefactos.", "Principio de mínimo privilegio::Concede solo capacidades necesarias durante el tiempo mínimo para reducir el impacto de un fallo.", "Manejo seguro de errores::Entrega mensajes útiles sin filtrar rutas, credenciales ni detalles internos aprovechables por un atacante."],
    },
    {
      section: "Recursos y rendimiento",
      concepts: ["Costo de CPU::Cuenta operaciones y tiempo de procesador para distinguir cálculo útil de ciclos desperdiciados.", "Consumo de memoria::Observa asignaciones, retención y picos para evitar agotamiento o presión innecesaria del recolector.", "Latencia y throughput::Separa el tiempo de una operación de la cantidad completada por unidad de tiempo.", "Trabajo redundante::Elimina recomputaciones solo cuando cachear o reutilizar resultados conserva corrección y memoria aceptable.", "Medición antes de optimizar::Establece un baseline reproducible para corregir el cuello real y comprobar la mejora."],
    },
    {
      section: "Entrega y mantenimiento",
      concepts: ["Configuración por entorno::Separa valores desplegables del código y valida su presencia antes de aceptar tráfico.", "Logs útiles::Registra eventos con contexto y correlación sin convertir datos sensibles en una fuga permanente.", "Compatibilidad hacia atrás::Evoluciona contratos manteniendo clientes anteriores o declarando una migración medible.", "Deuda técnica deliberada::Documenta el atajo, su riesgo, la condición de pago y el responsable de revisarlo.", "Ciclo de vida del software::Abarca diseño, construcción, operación, actualización y retiro seguro como partes del mismo producto."],
    },
  ],
  algorithms: [
    {
      section: "Secuencias y almacenamiento",
      concepts: ["Vectores dinámicos::Reservan capacidad contigua y crecen por bloques para ofrecer acceso constante y anexado amortizado.", "Listas con centinela::Usan nodos ficticios para eliminar casos especiales al insertar o borrar en los extremos.", "Buffers circulares::Reutilizan un arreglo mediante índices modulares para mantener una cola acotada sin desplazar elementos.", "Matrices dispersas::Guardan solo entradas no nulas mediante coordenadas o filas comprimidas cuando el espacio denso sería prohibitivo.", "Representaciones compactas::Empaquetan campos y valores para reducir memoria sin perder las operaciones necesarias del workload."],
    },
    {
      section: "Árboles avanzados",
      concepts: ["Árboles AVL::Mantienen alturas casi iguales mediante rotaciones para garantizar búsqueda logarítmica estricta.", "Árboles rojo-negro::Codifican restricciones de color que limitan altura con menos rotaciones durante actualizaciones.", "B-trees y B+ trees::Agrupan muchas claves por nodo para reducir accesos de página en almacenamiento secundario.", "Tries y radix trees::Recorren prefijos por componentes de clave y comprimen caminos para búsquedas textuales predecibles.", "Árboles de intervalos::Anotan máximos de subárbol para localizar solapamientos sin revisar todos los rangos."],
    },
    {
      section: "Hashing en profundidad",
      concepts: ["Funciones hash y distribución::Dispersan claves de forma estable para limitar colisiones y evitar patrones adversariales.", "Encadenamiento separado::Mantiene una colección por bucket, conservando inserciones aun cuando varias claves colisionan.", "Direccionamiento abierto::Busca ranuras alternativas dentro de la tabla y depende de una carga controlada para rendir bien.", "Cuckoo hashing::Ofrece pocas posiciones candidatas y desplaza claves hasta encontrar espacio o detectar un ciclo.", "Filtros de Bloom::Combinan bits y varios hashes para descartar ausencias sin falsos negativos, aceptando falsos positivos."],
    },
    {
      section: "Conjuntos y particiones",
      concepts: ["Disjoint-set union::Representa componentes disjuntos con árboles cuyos representantes permiten unir y consultar conectividad.", "Compresión de caminos::Reescribe padres durante find para acercar cada nodo directamente a su representante.", "Union por rango::Adjunta el árbol menos profundo al más profundo para impedir cadenas largas.", "Bitsets::Representan pertenencia con bits contiguos y aceleran operaciones de conjuntos mediante palabras de máquina.", "Estructuras persistentes::Conservan versiones anteriores compartiendo nodos inmutables en lugar de copiar la estructura completa."],
    },
    {
      section: "Ordenamiento y selección",
      concepts: ["Quicksort y particionado::Coloca elementos respecto a un pivote y controla su peor caso con selección y profundidad defensivas.", "Mergesort externo::Ordena bloques que caben en memoria y los fusiona secuencialmente minimizando I/O aleatorio.", "Counting y radix sort::Aprovechan dominios discretos o dígitos para superar el límite de algoritmos basados en comparación.", "Selección de orden k::Encuentra el elemento de rango solicitado sin ordenar necesariamente toda la entrada.", "Límites inferiores de comparación::Usan árboles de decisión para demostrar cuántas comparaciones exige cualquier ordenamiento general."],
    },
    {
      section: "Grafos ponderados y redes",
      concepts: ["Bellman-Ford::Relaja todas las aristas repetidamente y detecta ciclos negativos alcanzables.", "Floyd-Warshall::Construye caminos mínimos entre todos los pares admitiendo progresivamente vértices intermedios.", "Árbol de expansión mínima::Conecta todos los vértices con peso total mínimo mediante cortes seguros.", "Flujo máximo y corte mínimo::Aumenta flujo residual hasta que un corte certifica que no existe una solución mayor.", "Emparejamiento bipartito::Asigna pares sin compartir extremos mediante caminos aumentantes o reducción a flujo."],
    },
    {
      section: "Procesamiento de texto",
      concepts: ["Búsqueda Knuth-Morris-Pratt::Reutiliza prefijos ya comparados mediante una tabla de fallo y evita retroceder en el texto.", "Algoritmo Rabin-Karp::Compara hashes rodantes de ventanas y verifica coincidencias para tolerar colisiones.", "Autómatas de patrones::Precompilan transiciones por carácter para reconocer secuencias en una sola pasada.", "Suffix arrays::Ordenan sufijos por índice y permiten búsquedas binarias sin almacenar un trie completo.", "Distancia de edición::Minimiza inserciones, borrados y sustituciones con estados de programación dinámica."],
    },
    {
      section: "Geometría computacional",
      concepts: ["Orientación y producto cruz::Determina el giro de tres puntos cuidando precisión y desbordamiento numérico.", "Envolvente convexa::Encuentra el polígono mínimo que contiene un conjunto descartando giros interiores.", "Intersección de segmentos::Combina orientaciones y cajas delimitadoras para tratar cruces y casos colineales.", "Barrido de línea::Ordena eventos geométricos y mantiene una estructura activa para evitar comparar todos los pares.", "Vecino más cercano::Divide el plano o consulta un índice espacial para reducir candidatos por distancia."],
    },
    {
      section: "Programación dinámica avanzada",
      concepts: ["Diseño de estados::Captura la información mínima del prefijo necesaria para tomar las decisiones restantes.", "Transiciones y dependencias::Relaciona cada subproblema con estados más pequeños y fija un orden evaluable.", "Memoización frente a tabulación::Contrasta evaluación bajo demanda con llenado iterativo según densidad y profundidad.", "Optimización de espacio::Descarta capas que ya no influyen sin destruir información requerida para el resultado.", "Reconstrucción de soluciones::Conserva decisiones o retrocede por la tabla para recuperar una respuesta, no solo su costo."],
    },
    {
      section: "Algoritmos probabilísticos",
      concepts: ["Monte Carlo frente a Las Vegas::Distingue error probabilístico acotado de tiempo aleatorio con respuesta siempre correcta.", "Reservoir sampling::Mantiene una muestra uniforme de un flujo cuyo tamaño total aún se desconoce.", "Skip lists::Superponen niveles aleatorios para buscar e insertar con costo esperado logarítmico.", "MinHash::Aproxima similitud de Jaccard mediante firmas que preservan la probabilidad de coincidencia.", "Conteo aproximado::Reduce memoria usando estimadores probabilísticos cuyo error puede cuantificarse."],
    },
    {
      section: "Datos masivos y streaming",
      concepts: ["Algoritmos de memoria externa::Organizan bloques para minimizar transferencias entre memoria principal y almacenamiento.", "Ventanas deslizantes::Mantienen estadísticas de datos recientes expulsando elementos según tiempo o cantidad.", "Heavy hitters::Identifican elementos muy frecuentes con memoria sublineal y tolerancia de error declarada.", "Sketches de frecuencia::Proyectan conteos en tablas hash pequeñas y estiman frecuencias con cotas probabilísticas.", "Procesamiento por lotes::Agrupa operaciones para amortizar coordinación e I/O sin exceder latencia o memoria."],
    },
    {
      section: "Concurrencia algorítmica",
      concepts: ["Trabajo y profundidad::Separa operaciones totales del camino crítico para estimar el paralelismo disponible.", "Fork-join::Divide tareas independientes y sincroniza sus resultados manteniendo un árbol de dependencias.", "Estructuras lock-free::Garantizan progreso global mediante operaciones atómicas aunque un thread quede suspendido.", "Particionado paralelo::Distribuye datos equilibrando carga y reduciendo comunicación y contención.", "Determinismo reproducible::Controla orden de reducción, semillas y efectos para obtener resultados repetibles."],
    },
    {
      section: "Algoritmos distribuidos",
      concepts: ["Relojes lógicos::Ordenan causalmente eventos sin asumir un reloj físico perfectamente sincronizado.", "Elección de líder::Escoge un coordinador único por término y resuelve empates tras fallos o particiones.", "Consenso y quórums::Replica una decisión cuando mayorías intersectadas impiden confirmar valores incompatibles.", "Gossip::Propaga estado de forma epidémica con mensajes parciales y convergencia eventual.", "Detección de fallos::Interpreta timeouts como sospechas porque una red asíncrona no distingue demora de caída."],
    },
    {
      section: "Complejidad computacional",
      concepts: ["Clases P y NP::Diferencia problemas resolubles eficientemente de soluciones verificables en tiempo polinomial.", "Reducciones polinomiales::Transforman instancias conservando respuesta para transferir dificultad entre problemas.", "NP-completitud::Identifica problemas en NP tan difíciles como cualquier otro de la clase mediante reducciones.", "Algoritmos de aproximación::Sacrifican optimalidad con una cota demostrable cuando resolver exactamente es intratable.", "Complejidad parametrizada::Aísla una dimensión pequeña para buscar algoritmos eficientes respecto a ese parámetro."],
    },
    {
      section: "Ingeniería y verificación",
      concepts: ["Propiedades metamórficas::Comprueban relaciones entre ejecuciones cuando no existe una respuesta esperada fácil de calcular.", "Oráculos diferenciales::Comparan implementaciones independientes para revelar desacuerdos ante la misma entrada.", "Fuzzing de estructuras::Genera secuencias de operaciones y verifica invariantes después de cada mutación.", "Contadores de rendimiento::Miden comparaciones, asignaciones y fallos de caché además del tiempo de pared.", "Validación contra una referencia::Contrasta casos pequeños con una solución simple y obviamente correcta antes de escalar."],
    },
  ],
  mathematics: [
    {
      section: "Álgebra booleana y circuitos",
      concepts: ["Tablas de verdad::Enumeran todas las asignaciones posibles para comprobar equivalencia, satisfacibilidad y cobertura lógica.", "Formas normales CNF y DNF::Reescriben proposiciones como conjunciones o disyunciones canónicas útiles para análisis y solvers.", "Leyes de De Morgan::Distribuyen negaciones sobre conjunciones y disyunciones sin alterar el valor lógico.", "Simplificación booleana::Reduce expresiones mediante identidades para disminuir condiciones redundantes o puertas físicas.", "Puertas y circuitos combinacionales::Componen funciones booleanas cuya salida depende únicamente de la entrada presente."],
    },
    {
      section: "Teoría de números",
      concepts: ["Divisibilidad y máximo común divisor::Caracteriza factores compartidos y normaliza proporciones enteras mediante restos sucesivos.", "Algoritmo extendido de Euclides::Calcula coeficientes de Bézout y permite obtener inversos modulares cuando existen.", "Aritmética modular::Agrupa enteros por residuos y hace seguras operaciones cíclicas bajo un módulo fijo.", "Números primos y factorización::Explica la descomposición única que sostiene divisores, hashes y varios sistemas criptográficos.", "Teorema chino del resto::Reconstruye un valor a partir de residuos con módulos coprimos y una solución modular única."],
    },
    {
      section: "Combinatoria aplicada",
      concepts: ["Permutaciones y combinaciones::Cuenta selecciones considerando si importan orden, repetición y disponibilidad de elementos.", "Principio del palomar::Garantiza colisiones cuando más objetos ocupan menos categorías, incluso sin localizar cuál ocurre.", "Inclusión-exclusión::Corrige doble conteo alternando intersecciones de conjuntos solapados.", "Funciones generadoras::Codifican secuencias como coeficientes de series para operar y resolver conteos.", "Recurrencias combinatorias::Expresan un conteo mediante casos menores y requieren bases que aseguren terminación."],
    },
    {
      section: "Teoría de grafos",
      concepts: ["Grado, camino y conectividad::Relaciona incidencias y recorridos para determinar qué vértices pueden alcanzarse.", "Árboles y bosques::Caracterizan grafos acíclicos donde cada par conectado posee un camino simple único.", "Grafos bipartitos::Separan vértices en dos partes y permiten detectar ciclos impares o modelar asignaciones.", "Planaridad::Determina si un grafo puede dibujarse sin cruces y restringe su densidad posible.", "Coloración de grafos::Asigna recursos incompatibles a colores distintos minimizando conflictos y, cuando es posible, cantidad."],
    },
    {
      section: "Probabilidad discreta",
      concepts: ["Espacios muestrales::Define resultados posibles y eventos medibles antes de asignar probabilidades coherentes.", "Independencia de eventos::Comprueba si observar un evento deja intacta la probabilidad del otro.", "Teorema de Bayes::Actualiza una creencia con evidencia combinando verosimilitud, prior y probabilidad marginal.", "Esperanza y varianza::Resumen centro y dispersión sin afirmar que un resultado individual tomará esos valores.", "Cadenas de Markov::Modelan transiciones cuyo próximo estado depende del actual mediante una matriz estocástica."],
    },
    {
      section: "Inferencia estadística",
      concepts: ["Muestreo y sesgo::Evalúa si el mecanismo de selección representa la población o favorece sistemáticamente ciertos casos.", "Estimación puntual::Calcula un parámetro con un estadístico y acompaña el valor con su incertidumbre.", "Pruebas de hipótesis::Cuantifican incompatibilidad con un modelo nulo sin convertir un p-valor en probabilidad causal.", "Potencia estadística::Mide la probabilidad de detectar un efecto real bajo tamaño, ruido y umbral dados.", "Corrección por comparaciones múltiples::Controla falsos positivos cuando muchas hipótesis se prueban sobre los mismos datos."],
    },
    {
      section: "Álgebra lineal computacional",
      concepts: ["Producto interno y normas::Define longitud, ángulo y similitud respetando las propiedades del espacio vectorial.", "Sistemas de ecuaciones lineales::Representan restricciones simultáneas y distinguen solución única, múltiple o inconsistente.", "Descomposición LU::Factoriza una matriz en triangulares para resolver varios términos independientes eficientemente.", "Autovalores y autovectores::Encuentran direcciones que una transformación solo escala y revelan modos dominantes.", "Descomposición en valores singulares::Factoriza cualquier matriz para analizar rango, aproximación y condicionamiento."],
    },
    {
      section: "Geometría y transformaciones",
      concepts: ["Coordenadas cartesianas y polares::Cambia entre componentes rectangulares y magnitud-ángulo cuidando cuadrantes y origen.", "Trigonometría computacional::Relaciona ángulos y razones mientras controla unidades, dominios y errores de aproximación.", "Transformaciones afines::Combina traslación, escala, rotación y cizalla mediante matrices homogéneas componibles.", "Cuaterniones y rotaciones::Representa orientación tridimensional evitando singularidades y permite interpolación suave.", "Intersecciones geométricas::Resuelve contactos con ecuaciones paramétricas y tolerancias coherentes para casos degenerados."],
    },
    {
      section: "Cálculo numérico",
      concepts: ["Límites y continuidad::Describen el comportamiento cercano a un punto y justifican aproximaciones sin saltos inesperados.", "Integración numérica::Aproxima áreas mediante muestras y controla el error con particiones o reglas adaptativas.", "Diferenciación automática::Propaga derivadas exactas de operaciones elementales sin el error de diferencias finitas.", "Métodos de búsqueda de raíces::Iteran sobre una función hasta localizar un cero con condiciones y convergencia verificables.", "Ecuaciones diferenciales discretizadas::Sustituyen evolución continua por pasos cuya estabilidad depende del método y tamaño."],
    },
    {
      section: "Optimización avanzada",
      concepts: ["Convexidad::Garantiza que un mínimo local sea global cuando objetivo y región factible cumplen la propiedad.", "Multiplicadores de Lagrange::Incorporan restricciones de igualdad mediante variables duales y condiciones de estacionariedad.", "Métodos de Newton::Usan curvatura local para acelerar convergencia, pero requieren derivadas y un inicio razonable.", "Optimización estocástica::Estima gradientes con muestras para reducir costo aceptando ruido controlado.", "Criterios de parada::Combinan mejora, gradiente, factibilidad y presupuesto para no confundir estancamiento con convergencia."],
    },
    {
      section: "Teoría de la información",
      concepts: ["Entropía::Cuantifica incertidumbre promedio de una fuente y fija un límite de compresión ideal.", "Información mutua::Mide cuánto reduce una variable la incertidumbre de otra sin implicar causalidad.", "Codificación sin pérdida::Asigna representaciones recuperables aprovechando frecuencias sin eliminar información original.", "Capacidad de canal::Acota la tasa fiable máxima según ruido y restricciones de transmisión.", "Distancias entre distribuciones::Comparan modelos probabilísticos con métricas o divergencias cuyas propiedades deben distinguirse."],
    },
    {
      section: "Fundamentos criptográficos",
      concepts: ["Grupos y campos finitos::Ofrecen operaciones cerradas e inversas donde se construyen protocolos algebraicos reproducibles.", "Problemas de logaritmo discreto::Sustentan seguridad cuando invertir una exponenciación modular resulta computacionalmente difícil.", "Curvas elípticas::Forman grupos de puntos que logran seguridad equivalente con claves más pequeñas.", "Funciones unidireccionales::Son fáciles de evaluar y deliberadamente difíciles de invertir sin información secreta.", "Aleatoriedad criptográfica::Exige salidas impredecibles derivadas de entropía suficiente y generadores aprobados."],
    },
    {
      section: "Métodos formales",
      concepts: ["Lógica de Hoare::Relaciona precondición, programa y postcondición para demostrar corrección parcial de instrucciones.", "Invariantes inductivos::Se mantienen en el estado inicial y tras cada transición, encerrando todos los estados alcanzables.", "Satisfacibilidad SAT y SMT::Busca asignaciones que cumplen fórmulas booleanas o teorías y devuelve modelos o insatisfacibilidad.", "Model checking::Explora estados finitos para verificar propiedades temporales y producir contraejemplos concretos.", "Pruebas asistidas por computadora::Construyen términos verificables por un kernel pequeño que certifica cada paso lógico."],
    },
  ],
  methodologies: [
    {
      section: "Scrum aplicado",
      concepts: ["Product Goal::Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución.", "Sprint Goal::Da propósito común al sprint y permite adaptar alcance mientras se conserva el resultado esperado.", "Product Backlog ordenado::Hace visible el trabajo futuro como opciones priorizadas, refinadas solo hasta el detalle necesario.", "Incremento inspeccionable::Integra elementos terminados en un producto utilizable que satisface la definición de terminado.", "Responsabilidades de Scrum::Distingue accountabilities de Product Owner, Scrum Master y Developers sin convertirlas en jerarquías."],
    },
    {
      section: "Kanban aplicado",
      concepts: ["Puntos de compromiso y entrega::Delimitan cuándo una opción entra al sistema y cuándo genera valor para medir su tiempo real.", "Clases de servicio::Aplican políticas distintas según costo de demora sin declarar urgente todo el trabajo.", "Aging work in progress::Compara edad actual con distribuciones históricas para intervenir antes de incumplir expectativas.", "Service level expectation::Expresa probabilísticamente cuánto trabajo termina dentro de un plazo usando datos del flujo.", "Replenishment y delivery review::Separa seleccionar nuevo trabajo de revisar entregas para proteger capacidad y aprendizaje."],
    },
    {
      section: "Extreme Programming",
      concepts: ["Programación en pareja::Alterna conducción y revisión continua para compartir contexto y detectar decisiones defectuosas temprano.", "Test-first programming::Formula un comportamiento fallido antes del código y usa el ciclo para guiar diseño comprobable.", "Integración continua::Combina cambios pequeños frecuentemente y ejecuta validaciones automáticas que detectan incompatibilidades pronto.", "Diseño simple::Implementa la estructura mínima que satisface pruebas actuales y refactoriza cuando aparece evidencia nueva.", "Propiedad colectiva del código::Permite mejorar cualquier área con estándares, revisión y responsabilidad compartidos."],
    },
    {
      section: "Lean y teoría de colas",
      concepts: ["Valor y desperdicio::Distingue actividad que cambia un resultado del cliente de espera, retrabajo y transferencia innecesaria.", "Tamaño de lote::Reduce riesgo y tiempo de feedback al entregar cambios pequeños sin elevar coordinación de forma desproporcionada.", "Ley de Little::Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable.", "Variabilidad del flujo::Explica cómo llegadas y tiempos impredecibles forman colas incluso con capacidad promedio suficiente.", "Optimización del sistema completo::Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total."],
    },
    {
      section: "Descubrimiento de producto",
      concepts: ["Hipótesis de problema::Declara población, necesidad y evidencia esperada para poder refutar una suposición de producto.", "Entrevistas de descubrimiento::Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta.", "Prototipos de baja fidelidad::Simulan la interacción con costo pequeño para aprender antes de construir infraestructura.", "Experimentos y señales::Vinculan una intervención a métricas y guardrails que diferencian impacto de actividad.", "Dual-track discovery::Coordina aprendizaje de producto y entrega sin convertirlos en equipos o cascadas separadas."],
    },
    {
      section: "Requisitos y alcance",
      concepts: ["Mapeo de historias::Ordena actividades del usuario y cortes de entrega para conservar el recorrido completo.", "Ejemplos por especificación::Convierte reglas ambiguas en escenarios concretos compartidos por negocio, desarrollo y pruebas.", "Requisitos no funcionales::Define atributos medibles de seguridad, rendimiento, accesibilidad y confiabilidad junto al comportamiento.", "Trazabilidad de decisiones::Conecta necesidad, alternativa, decisión y evidencia sin crear documentación ceremonial.", "Gestión explícita del alcance::Intercambia opciones preservando objetivo, restricciones y capacidad en lugar de ocultar crecimiento."],
    },
    {
      section: "Entrega y operaciones",
      concepts: ["Trunk-based development::Integra ramas breves a una línea común para limitar divergencia y costo de fusión.", "Feature flags::Separa despliegue de exposición con controles de expiración, propietario y estado seguro.", "Despliegue progresivo::Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails.", "Feedback de producción::Convierte telemetría, soporte y comportamiento real en nuevas decisiones de producto y operación.", "Responsabilidad operativa compartida::Mantiene a quienes construyen involucrados en confiabilidad, incidentes y mejora posterior."],
    },
    {
      section: "Riesgo y gobernanza",
      concepts: ["Registro de riesgos::Documenta probabilidad, impacto, tratamiento, señal y propietario para revisar incertidumbre periódicamente.", "Threat modeling colaborativo::Explora activos, fronteras y abusos durante el diseño para priorizar controles verificables.", "Cumplimiento continuo::Automatiza evidencias y controles repetibles sin reducir obligaciones a una auditoría puntual.", "Segregación de funciones::Evita que una sola identidad controle solicitud, aprobación y ejecución de acciones sensibles.", "Criterios de escalamiento::Definen cuándo un bloqueo, riesgo o incidente requiere otra autoridad y qué contexto debe acompañarlo."],
    },
    {
      section: "Equipos y organizaciones",
      concepts: ["Topologías de equipo::Alinean límites organizativos con flujo de valor y modos explícitos de interacción.", "Límites cognitivos::Restringen dominios y herramientas que un equipo debe dominar para conservar autonomía sostenible.", "Contratos entre equipos::Declaran servicio, soporte, compatibilidad y expectativas sin depender de acuerdos informales.", "Facilitación remota::Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces.", "Seguridad psicológica::Permite exponer errores y dudas sin castigo, condición necesaria para aprender antes de incidentes."],
    },
    {
      section: "Métricas orientadas a resultados",
      concepts: ["Outcome frente a output::Distingue cambio logrado en usuarios o sistema de la cantidad de elementos producidos.", "Métricas DORA::Relacionan frecuencia, tiempo, fallos y recuperación para observar capacidad de entrega sin ranking individual.", "Objetivos y resultados clave::Vinculan una dirección cualitativa con señales cuantificables y limitadas en el tiempo.", "Guardrails de calidad::Impiden que optimizar una métrica deteriore seguridad, accesibilidad o confiabilidad.", "Revisión estadística del proceso::Usa distribuciones y tendencias para distinguir cambio real de variación común."],
    },
  ],
  scratch: [
    {
      section: "Geometría con sprites",
      concepts: ["Dirección y rotación::Relaciona ángulo, estilo de rotación y orientación del disfraz para mover sprites previsiblemente.", "Deslizamiento interpolado::Calcula posiciones intermedias durante un tiempo dado y evita saltos visuales entre destinos.", "Capas y orden visual::Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas.", "Lápiz y dibujo procedural::Convierte movimientos repetibles en trazos, polígonos y patrones generados por reglas.", "Transformaciones con coordenadas::Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías."],
    },
    {
      section: "Modelo de eventos",
      concepts: ["Sombreros de evento::Inician pilas independientes cuando ocurre bandera, tecla, clic, mensaje o cambio de condición.", "Orden no determinista de guiones::Explica por qué guiones activados juntos pueden intercalarse y compartir estado de forma inesperada.", "Broadcast con espera::Suspende al emisor hasta que terminan los receptores y permite secuenciar escenas coordinadas.", "Temporizadores y latidos::Producen eventos periódicos sin bloquear otros guiones y mantienen ritmos observables.", "Protocolos entre sprites::Define nombres de mensaje, datos compartidos y respuestas esperadas para evitar coordinación implícita."],
    },
    {
      section: "Datos persistentes y compartidos",
      concepts: ["Variables locales del sprite::Conservan estado por instancia y evitan que sprites independientes sobrescriban valores globales.", "Listas como tablas::Alinean posiciones entre columnas o agrupan filas serializadas para consultar conjuntos de datos.", "Codificación de registros en listas::Define separadores y escapes para reconstruir campos sin ambigüedad al no existir objetos nativos.", "Variables en la nube::Sincronizan valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación.", "Límites de datos compartidos::Restringen tamaño y confianza para que entradas remotas no rompan lógica ni expongan información."],
    },
    {
      section: "Patrones con clones",
      concepts: ["Fábricas de clones::Centralizan creación y parámetros iniciales antes de que cada copia ejecute su evento de nacimiento.", "Estado privado por clon::Usa variables locales heredadas al crear para que cada instancia evolucione independientemente.", "Pooling de objetos::Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado.", "Destrucción controlada::Elimina clones al salir de su ciclo de vida y libera capacidad para nuevas entidades.", "Coordinación de multitudes::Distribuye objetivos y actualizaciones para impedir que cientos de clones repitan trabajo global."],
    },
    {
      section: "Animación y audio",
      concepts: ["Fotogramas y disfraces::Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo.", "Sincronización por tempo::Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases.", "Síntesis de sonidos::Combina tono, duración y efectos para producir señales sin depender solo de audios grabados.", "Transiciones de escena::Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase.", "Feedback audiovisual::Responde inmediatamente a acciones con cambios perceptibles sin depender únicamente del color o sonido."],
    },
    {
      section: "Física para juegos",
      concepts: ["Velocidad y aceleración::Actualiza posición con velocidad y velocidad con fuerza para separar intención de movimiento.", "Gravedad discreta::Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.", "Rebote y restitución::Invierte la componente normal de velocidad y escala energía según el material.", "Hitboxes::Representa colisión con formas simples independientes del detalle visual del disfraz.", "Cámara y desplazamiento::Mueve el mundo respecto al jugador y transforma coordenadas globales en posiciones de pantalla."],
    },
    {
      section: "Extensiones y mundo físico",
      concepts: ["Texto a voz::Envía frases a un sintetizador y controla idioma, voz y longitud de contenido generado.", "Detección de video::Extrae movimiento de la cámara como señal interactiva considerando iluminación y consentimiento.", "micro:bit con Scratch Link::Conecta bloques a eventos y pines físicos mediante un puente local inalámbrico.", "Motores y sensores::Convierte lecturas ruidosas en umbrales y acciones protegiendo rangos del dispositivo.", "Servicios de traducción::Transforman texto mediante una extensión remota cuya disponibilidad y resultado deben validarse."],
    },
    {
      section: "Calidad y publicación",
      concepts: ["Pruebas por escenarios::Recorre inicio, victoria, derrota y reinicio comprobando estado visible después de cada acción.", "Indicadores de estado oculto::Muestran temporalmente variables y mensajes para localizar qué guion cambió un valor.", "Controles accesibles::Ofrecen teclado, puntero y ritmo ajustable sin exigir precisión o una única señal sensorial.", "Créditos de recursos::Identifican autores y licencias de sonidos, imágenes y proyectos reutilizados.", "Empaquetado para remix::Nombra sprites, documenta mensajes y limpia estado para que otra persona pueda comprender y extender."],
    },
  ],
  ruby: [
    {
      section: "Semántica del lenguaje",
      concepts: ["Todo valor es un objeto::Explica por qué números, clases y nil reciben mensajes bajo un modelo uniforme.", "Verdad y nil::Aclara que solo false y nil son falsos, evitando portar reglas truthy de otros lenguajes.", "Asignación paralela::Empaqueta y desempaqueta valores en una sola expresión respetando evaluación de la derecha.", "Splat y double splat::Expanden argumentos posicionales o keywords y hacen explícita la forma de una llamada flexible.", "Refinements::Activan cambios léxicos sobre métodos sin contaminar globalmente todas las instancias de una clase."],
    },
    {
      section: "Despacho dinámico",
      concepts: ["Method tables::Relacionan nombres con implementaciones por clase o módulo durante el envío de mensajes.", "Ancestors chain::Ordena clase, módulos incluidos y superclases para resolver el primer método coincidente.", "method_missing::Intercepta mensajes no resueltos, pero debe conservar introspección y fallar claramente fuera de su contrato.", "Super y forwarding::Delega al siguiente método de la cadena preservando o reemplazando argumentos de forma deliberada.", "Inline caches::Recuerdan destinos recientes de una llamada para evitar repetir búsquedas cuando los tipos se mantienen."],
    },
    {
      section: "Metaprogramación",
      concepts: ["define_method::Crea métodos desde bloques capturando contexto sin construir código como texto.", "class_eval e instance_eval::Cambian temporalmente self para modificar clases u objetos y exigen fronteras claras de confianza.", "Hooks de clases y módulos::Observan herencia, inclusión y definición para registrar comportamiento en el momento correcto.", "Introspection::Consulta clase, métodos y parámetros para adaptar herramientas sin asumir estructura oculta.", "Generación segura de DSL::Limita operaciones disponibles y valida entradas para que una sintaxis expresiva no ejecute capacidades arbitrarias."],
    },
    {
      section: "Datos y enumeración",
      concepts: ["Enumeradores externos::Exponen next y rewind para que quien consume controle el avance de una secuencia.", "Lazy enumerators::Encadenan transformaciones bajo demanda y evitan materializar colecciones intermedias o infinitas.", "Ranges::Representan intervalos inclusivos o exclusivos y delegan iteración a la capacidad de sucesión del valor.", "Struct y Data::Declaran portadores con campos conocidos, comparabilidad y, en Data, inmutabilidad orientada a valores.", "Transformaciones funcionales::Componen map, filter y reduce sin mutar la colección original y mantienen intención visible."],
    },
    {
      section: "Memoria y runtime",
      concepts: ["Object space::Permite inspeccionar objetos vivos y finalizadores, con un costo que desaconseja recorrerlo en rutas críticas.", "Generational garbage collection::Recolecta objetos jóvenes con mayor frecuencia aprovechando que la mayoría muere pronto.", "Copy-on-write friendly GC::Organiza metadatos para que procesos derivados compartan páginas hasta que realmente las modifiquen.", "Shape trees::Comparten descripciones de variables de instancia y aceleran acceso cuando los objetos evolucionan consistentemente.", "YJIT::Compila rutas calientes a código nativo y vuelve al intérprete cuando una suposición deja de cumplirse."],
    },
    {
      section: "Concurrencia y asincronía",
      concepts: ["Fibers::Suspenden y reanudan unidades cooperativas dentro de un thread sin imponer paralelismo.", "Fiber scheduler::Intercala I/O no bloqueante detrás de APIs familiares y requiere operaciones compatibles.", "Mutex y condition variables::Protegen invariantes compartidos y permiten esperar una condición dentro de un bucle de verificación.", "Colas thread-safe::Transfieren ownership de tareas entre productores y consumidores aplicando capacidad cuando hace falta.", "Aislamiento con Ractor::Restringe objetos compartidos para ejecutar en paralelo mediante mensajes y valores shareable."],
    },
    {
      section: "Web y red",
      concepts: ["Contrato Rack::Representa una petición como environment y exige una respuesta status, headers y body cerrable.", "Servidores Puma::Combinan procesos y threads, por lo que pool de conexiones y código deben tolerar concurrencia.", "Net::HTTP::Construye clientes con timeouts, TLS y reutilización explícitos para no quedar bloqueados indefinidamente.", "Sockets::Exponen streams TCP o datagramas UDP y obligan a manejar framing, parciales y cierre.", "Streaming de respuestas::Entrega fragmentos antes de completar el cuerpo controlando backpressure y desconexiones del cliente."],
    },
    {
      section: "Persistencia y formatos",
      concepts: ["JSON y YAML::Serializan datos portables, pero requieren validar tipos y deshabilitar construcción arbitraria de objetos.", "Marshal y sus riesgos::Reconstruye objetos Ruby y nunca debe cargar bytes provenientes de una fuente no confiable.", "Adaptadores SQL::Convierten parámetros y resultados entre Ruby y el motor sin concatenar entrada en consultas.", "Migraciones de esquema::Versionan cambios estructurales con una secuencia compatible con aplicaciones durante el despliegue.", "Transacciones y bloqueos::Agrupan escrituras atómicas y coordinan competidores sin extender la sección crítica innecesariamente."],
    },
    {
      section: "Pruebas y diseño",
      concepts: ["RSpec::Expresa ejemplos y expectativas con hooks acotados para que cada fallo explique un comportamiento.", "Property testing::Genera entradas y reduce contraejemplos para comprobar invariantes más allá de casos elegidos manualmente.", "Dobles verificados::Comprueban que métodos simulados existen realmente y evitan contratos ficticios en las pruebas.", "Mutation testing::Modifica operadores y ramas para revelar aserciones que ejecutan código sin detectar resultados incorrectos.", "Arquitectura hexagonal en Ruby::Aísla dominio de frameworks mediante puertos explícitos y adaptadores reemplazables."],
    },
    {
      section: "Seguridad del ecosistema",
      concepts: ["Bundler audit::Compara dependencias bloqueadas con avisos conocidos y obliga a evaluar actualización o mitigación.", "Firmas de gemas::Aportan procedencia solo cuando claves, política de confianza y verificación están configuradas coherentemente.", "Deserialización insegura::Impide que formatos capaces de instanciar objetos procesen contenido controlado externamente.", "Command injection::Usa APIs con argumentos separados y listas permitidas en lugar de interpolar datos en un shell.", "Gestión de credenciales::Cifra secretos en reposo, limita acceso y permite rotarlos sin reconstruir toda la aplicación."],
    },
    {
      section: "Empaquetado y operación",
      concepts: ["Gemspec::Declara archivos, plataforma, licencia y dependencias que forman el contrato distribuible de una gema.", "Resolución de dependencias::Encuentra un conjunto compatible de versiones y lo fija para que instalaciones posteriores sean repetibles.", "Version managers::Seleccionan intérprete y gemset por proyecto sin convertir el entorno personal en requisito oculto.", "Boot time y eager loading::Equilibra carga inicial, copy-on-write y disponibilidad de constantes antes de aceptar trabajo.", "Métricas y trazas en procesos Ruby::Correlacionan petición, asignaciones, GC e I/O para explicar latencia en producción."],
    },
  ],
  rust: [
    {
      section: "Sistema de tipos expresivo",
      concepts: ["Newtype pattern::Envuelve una representación existente para obtener identidad de tipo y aplicar invariantes sin costo adicional.", "Enums con datos::Modelan alternativas cerradas donde cada variante transporta exactamente la información que necesita.", "Tipos never e inhabitados::Representan cálculos que no regresan o estados imposibles y mejoran el análisis exhaustivo.", "Inferencia y coerciones::Deduce tipos locales y aplica conversiones limitadas sin ocultar transformaciones potencialmente costosas.", "PhantomData::Comunica al compilador ownership, varianza o lifetime que no aparecen como campos almacenados."],
    },
    {
      section: "Ownership avanzado",
      concepts: ["Movimientos parciales::Transfieren algunos campos y dejan el valor padre utilizable solo donde su estado sigue completo.", "Copy frente a Clone::Distingue duplicación implícita bit a bit de una clonación potencialmente costosa y explícita.", "Interior mutability::Traslada reglas de mutación a ejecución mediante Cell o RefCell conservando una interfaz compartida.", "Reference counting Rc y Arc::Mantiene valores vivos por conteo local o atómico, pero no resuelve ciclos automáticamente.", "Weak references::Observan una asignación sin prolongar su vida y permiten romper ciclos de ownership compartido."],
    },
    {
      section: "Préstamos en diseños reales",
      concepts: ["Reborrowing::Crea un préstamo temporal más corto desde otro para reutilizarlo después sin transferirlo definitivamente.", "Non-lexical lifetimes::Termina préstamos en su último uso real y permite patrones seguros antes rechazados por alcance textual.", "Lifetime elision::Aplica reglas deterministas para omitir anotaciones comunes sin inferir contratos ambiguos.", "Self-referential structures::Requieren direcciones estables y construcción controlada porque mover el contenedor invalidaría referencias internas.", "Pin y Unpin::Impide mover valores que dependen de una ubicación estable mientras permite movilidad a tipos que la toleran."],
    },
    {
      section: "Traits y coherencia",
      concepts: ["Associated types::Fijan tipos relacionados por implementación y evitan parámetros genéricos ambiguos para quien usa el trait.", "Trait objects::Aplican type erasure mediante puntero y vtable para almacenar implementaciones heterogéneas.", "Static frente a dynamic dispatch::Compara monomorfización optimizable con selección en ejecución y tamaño de binario.", "Orphan rule::Exige que trait o tipo sea local para impedir implementaciones incompatibles entre crates.", "Blanket implementations::Implementan un trait para toda familia que cumpla bounds y pueden afectar coherencia futura."],
    },
    {
      section: "Abstracciones de costo cero",
      concepts: ["Monomorphization::Genera código especializado por combinación de tipos eliminando despacho a cambio de tamaño de artefacto.", "Const generics::Incluyen valores constantes en el tipo para expresar longitudes y capacidades verificables al compilar.", "Higher-ranked trait bounds::Exigen que una función sea válida para cualquier lifetime y no solo uno elegido externamente.", "Generic associated types::Permiten que un tipo asociado varíe con lifetimes o parámetros manteniendo relación con su implementador.", "Type-state pattern::Codifica fases válidas como tipos para que operaciones fuera de orden no compilen."],
    },
    {
      section: "Macros y generación",
      concepts: ["macro_rules::Expande patrones sintácticos declarativos durante compilación sin evaluar texto arbitrario.", "Fragment specifiers::Restringen metavariables a expresiones, tipos o elementos y preservan estructura del parser.", "Hygiene::Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca.", "Procedural macros::Transforman token streams para derives, atributos o sintaxis function-like con diagnósticos propios.", "Build scripts::Generan artefactos o detectan bibliotecas antes de compilar y deben declarar exactamente cuándo repetirse."],
    },
    {
      section: "Colecciones e iteración",
      concepts: ["Vec y capacidad::Separa elementos inicializados de almacenamiento reservado y realoca cuando el crecimiento supera capacidad.", "HashMap y entry API::Realiza búsqueda e inserción condicional en una sola operación evitando consultas duplicadas.", "BTreeMap::Mantiene claves ordenadas en nodos cache-friendly y permite recorridos eficientes por rango.", "Iterator adapters::Componen transformaciones perezosas que el consumidor final fusiona en un único recorrido.", "IntoIterator y ownership::Define iteración por valor, referencia o referencia mutable y determina qué puede usarse después."],
    },
    {
      section: "Concurrencia sin carreras",
      concepts: ["Mutex y RwLock::Protegen datos con guards RAII y hacen visible la política de lectura frente a escritura.", "Atomics y ordering::Coordinan memoria sin locks mediante garantías de orden que deben corresponder al invariante.", "Scoped threads::Permiten préstamos desde el stack y garantizan que los threads terminen antes de salir del alcance.", "Channel patterns::Transfieren mensajes entre productores y consumidores definiendo capacidad, cierre y ownership.", "Rayon y paralelismo de datos::Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial."],
    },
    {
      section: "Asincronía en profundidad",
      concepts: ["State machines de Future::Compilan puntos await en estados que conservan solo variables vivas entre polls.", "Wakers::Notifican al executor que un future antes pendiente puede progresar sin sondeo continuo.", "Executors y runtimes::Planifican futures cooperativos y aportan timers, I/O y políticas de bloqueo.", "Streams asíncronos::Producen una secuencia de elementos pendientes y propagan finalización o error gradualmente.", "Cancel safety::Garantiza que descartar un future en un await no pierda datos ni rompa una operación parcial."],
    },
    {
      section: "Unsafe con invariantes",
      concepts: ["Raw pointers::Permiten direcciones sin préstamos comprobados y obligan a demostrar validez antes de desreferenciar.", "Alias rules::Restringen referencias mutables y compartidas para que optimizaciones no observen escrituras inesperadas.", "Layout y alignment::Definen tamaño, padding y dirección válida que exige cada tipo en memoria.", "MaybeUninit::Representa almacenamiento aún no inicializado sin crear un valor inválido que cause comportamiento indefinido.", "Safe wrappers::Encierran una región unsafe pequeña y exponen una API cuyas precondiciones se verifican externamente."],
    },
    {
      section: "Interoperabilidad",
      concepts: ["ABI C::Fija convención de llamada y tipos compatibles para cruzar la frontera con bibliotecas nativas.", "Bindgen y cbindgen::Generan declaraciones desde headers o APIs Rust y requieren revisar ownership y plataforma.", "WebAssembly::Compila lógica portable a un sandbox con imports y exports que definen sus capacidades.", "no_std::Elimina dependencia de la biblioteca estándar para targets sin sistema operativo conservando core.", "Representación repr(C)::Ordena campos según reglas C para compartir estructuras sin asumir el layout Rust por defecto."],
    },
    {
      section: "Pruebas y calidad",
      concepts: ["Unit e integration tests::Separan acceso a detalles internos de validación pública entre crates compilados.", "Documentation tests::Compilan ejemplos de rustdoc para mantener enseñanza y API sincronizadas.", "Property-based testing::Genera valores válidos y minimiza casos que violan invariantes declarados.", "Fuzz targets::Alimentan bytes adversariales a superficies pequeñas bajo sanitizadores y corpus persistente.", "Compile-fail tests::Verifican que usos prohibidos produzcan diagnósticos de tipo, lifetime o visibilidad esperados."],
    },
    {
      section: "Rendimiento y diagnóstico",
      concepts: ["Criterion benchmarks::Aplica muestreo estadístico y comparación de baseline para distinguir regresiones de ruido.", "Flamegraphs::Agregan stacks muestreados y muestran qué rutas consumen más CPU de forma acumulada.", "Heap profiling::Atribuye asignaciones y retención a sitios de código para reducir presión de memoria.", "LLVM optimizations::Transforman IR según aliasing y perfil, pero siempre requieren comprobar semántica y rendimiento real.", "Binary size analysis::Relaciona símbolos, monomorfizaciones y features con bytes finales del ejecutable."],
    },
    {
      section: "Cadena de suministro y entrega",
      concepts: ["Cargo workspaces::Comparten lockfile y configuración entre crates manteniendo límites de dependencias explícitos.", "Feature flags de crates::Activan capacidades aditivas y evitan combinaciones mutuamente excluyentes difíciles de resolver.", "Cargo audit y deny::Aplican políticas sobre vulnerabilidades, licencias, duplicados y procedencia de dependencias.", "Cross compilation::Separa host, target, linker y bibliotecas del destino para producir binarios de otra plataforma.", "Releases reproducibles::Fijan toolchain y dependencias, eliminan variabilidad y comparan hashes del artefacto reconstruido."],
    },
  ],
  php: [
    {
      section: "Tipos y semántica moderna",
      concepts: ["Strict types::Hace que llamadas desde el archivo rechacen coerciones escalares implícitas que ocultarían datos incompatibles.", "Union e intersection types::Expresan alternativas aceptadas o capacidades simultáneas y trasladan validación al motor.", "Readonly properties::Permiten una única inicialización y protegen referencias, aunque no vuelven inmutables sus objetos internos.", "Enums::Representan un conjunto cerrado de casos y pueden asociar valores estables para persistencia o transporte.", "Attributes::Adjuntan metadatos estructurados que Reflection interpreta sin depender de comentarios no tipados."],
    },
    {
      section: "Orientación a objetos",
      concepts: ["Interfaces y clases abstractas::Separan contrato y comportamiento parcial para compartir capacidades sin instanciar una base incompleta.", "Traits::Insertan métodos en clases y exigen resolver precedencia y alias cuando varias composiciones colisionan.", "Late static binding::Resuelve static según la clase invocada y conserva polimorfismo en jerarquías.", "Magic methods::Interceptan acceso, llamada o serialización y deben evitar ocultar errores tipográficos y efectos costosos.", "Covarianza y contravarianza::Permiten retornos más específicos y parámetros más generales preservando sustitución segura."],
    },
    {
      section: "Internals de Zend",
      concepts: ["zval::Guarda etiqueta de tipo y payload de cada valor para que el motor ejecute operaciones dinámicas.", "Reference counting::Libera contenedores cuando su contador llega a cero y delega ciclos al recolector especializado.", "Copy-on-write::Comparte arrays o strings hasta una escritura, momento en que duplica el almacenamiento necesario.", "Opcodes::Traducen el script parseado a instrucciones que la máquina virtual Zend puede optimizar y ejecutar.", "Just-in-time compilation::Convierte rutas elegibles en código nativo, cuya ganancia depende del workload y no solo de habilitarlo."],
    },
    {
      section: "Estándares e interoperabilidad",
      concepts: ["PHP-FIG y PSR::Define recomendaciones interoperables cuya adopción se verifica por interfaz, no por pertenecer a un framework.", "PSR-3 logging::Normaliza niveles, contexto y placeholders para cambiar backend sin reescribir emisores.", "PSR-7 mensajes HTTP::Modela request y response inmutables, por lo que cada with devuelve una instancia nueva.", "PSR-11 contenedores::Estandariza lookup de servicios, aunque no convierte service locator en diseño recomendable.", "Extensiones nativas::Exponen capacidades compiladas y obligan a fijar ABI, versión y disponibilidad del entorno."],
    },
    {
      section: "HTTP y APIs",
      concepts: ["Routing::Relaciona método y patrón de URL con un handler validando parámetros antes de entrar al dominio.", "Middleware::Envuelve la siguiente etapa para aplicar autenticación, trazas o transformación con un orden observable.", "Negociación de contenido::Elige representación según Accept y responde de forma explícita cuando ningún formato es compatible.", "Streaming HTTP::Emite fragmentos sin construir todo el cuerpo y controla buffering, errores tardíos y desconexión.", "Clientes resilientes::Configuran timeouts, reintentos acotados e idempotencia para no amplificar una falla remota."],
    },
    {
      section: "Persistencia segura",
      concepts: ["Transacciones PDO::Agrupan sentencias con commit o rollback y preservan excepciones que activarían recuperación.", "Niveles de aislamiento::Determinan qué cambios concurrentes puede observar una transacción y qué anomalías siguen permitidas.", "Mapeo objeto-relacional::Traduce identidad y relaciones a filas sin ocultar el costo o momento de cada consulta.", "Migraciones reversibles::Definen avance y retroceso cuando la transformación de datos permite recuperar el estado anterior.", "Evitar consultas N+1::Carga relaciones por lote o join después de confirmar con telemetría que el patrón repite accesos."],
    },
    {
      section: "Seguridad web",
      concepts: ["CSRF tokens::Vinculan una acción con la sesión legítima para rechazar formularios forjados desde otro origen.", "Hashing de contraseñas::Usa password_hash con algoritmo adaptativo y verifica sin almacenar ni registrar el secreto original.", "Fijación de sesión::Regenera el identificador tras autenticación para impedir que un atacante imponga uno conocido.", "Inyección de comandos::Evita pasar entrada al shell y separa ejecutable, argumentos y lista permitida de operaciones.", "Políticas de seguridad de contenido::Restringen orígenes ejecutables en el navegador y reducen impacto de una inyección de contenido."],
    },
    {
      section: "Trabajo asíncrono",
      concepts: ["Colas de trabajos::Desacoplan una petición de tareas duraderas mediante mensajes persistentes y confirmación explícita.", "Procesos workers::Consumen trabajos repetidamente y deben reciclar memoria, capturar señales y aislar fallos.", "Fibers en PHP::Suspenden una pila cooperativamente para construir abstracciones asíncronas sin crear paralelismo por sí mismas.", "Event loops::Esperan múltiples fuentes de I/O y reanudan callbacks sin bloquear el proceso completo.", "Idempotencia de consumidores::Registra una clave de operación para que reentregas no dupliquen efectos irreversibles."],
    },
    {
      section: "Verificación automatizada",
      concepts: ["Pruebas de integración HTTP::Ejecutan request, middleware y persistencia para verificar status, headers, body y efectos.", "PHPStan y Psalm::Infieren tipos y rutas imposibles más allá de declaraciones nativas sin ejecutar el programa.", "Mutation testing::Altera condiciones y operadores para medir si la suite detecta comportamiento incorrecto.", "Fixtures y factories::Construyen datos mínimos y explícitos evitando estados compartidos que vuelven las pruebas frágiles.", "Pruebas de contratos::Aplican el mismo conjunto de expectativas a proveedores y adaptadores intercambiables."],
    },
    {
      section: "Rendimiento",
      concepts: ["Preloading::Carga símbolos compartidos al iniciar FPM y exige reinicio para reflejar cambios de código.", "Realpath cache::Memoriza resolución de rutas y reduce filesystem lookups mientras su TTL no oculte despliegues.", "Profiling de peticiones::Atribuye tiempo y memoria a funciones, consultas e I/O dentro de un recorrido real.", "Caching por capas::Define clave, caducidad e invalidación para opcode, aplicación, HTTP y datos sin servir estado obsoleto.", "Pools y límites de FPM::Ajustan procesos y solicitudes por worker según memoria, concurrencia y latencia del entorno."],
    },
    {
      section: "Despliegue",
      concepts: ["Configuración inmutable::Construye un artefacto único y aporta valores del entorno sin editar archivos desplegados.", "Zero-downtime deployment::Coordina versiones y health checks antes de retirar procesos que aún atienden solicitudes.", "Warmup de cachés::Precompila contenedores, rutas y plantillas antes de recibir tráfico para evitar latencia inicial.", "Workers de larga vida::Restablecen servicios por trabajo y reciclan procesos porque el estado ya no termina con cada request.", "Rollbacks compatibles::Mantienen código anterior operable con cambios de esquema durante toda la ventana de reversión."],
    },
    {
      section: "Operación y evolución",
      concepts: ["Logs estructurados::Emiten campos consultables con request id y severidad sin filtrar datos personales.", "Tracing distribuido::Propaga contexto entre HTTP, colas y base de datos para reconstruir latencia extremo a extremo.", "Métricas RED::Observan tasa, errores y duración por servicio para detectar degradación orientada al usuario.", "Deprecations y upgrades::Ejecutan versiones intermedias con avisos visibles antes de retirar APIs incompatibles.", "Auditoría de Composer::Cruza el lockfile con avisos y procedencia para priorizar actualizaciones de dependencias vulnerables."],
    },
  ],
  haskell: [
    {
      section: "Cálculo funcional",
      concepts: withDescriptions("haskell", "Cálculo funcional", ["Cálculo lambda", "Sustitución y reducción", "Combinadores", "Composición point-free", "Eta y beta equivalencia"]),
    },
    {
      section: "Diseño con tipos algebraicos",
      concepts: withDescriptions("haskell", "Diseño con tipos algebraicos", ["Product y sum types", "Tipos recursivos", "Smart constructors", "Generalized algebraic data types", "DataKinds"]),
    },
    {
      section: "Typeclasses avanzadas",
      concepts: withDescriptions("haskell", "Typeclasses avanzadas", ["Leyes de typeclasses", "Multi-parameter typeclasses", "Functional dependencies", "Deriving strategies", "Coerciones newtype"]),
    },
    {
      section: "Tipos de orden superior",
      concepts: withDescriptions("haskell", "Tipos de orden superior", ["Kinds", "Rank-N types", "Existential types", "Type families", "Constraint kinds"]),
    },
    {
      section: "Efectos componibles",
      concepts: withDescriptions("haskell", "Efectos componibles", ["Reader", "State", "Writer", "Monad transformers", "Efectos algebraicos"]),
    },
    {
      section: "Evaluación interna",
      concepts: withDescriptions("haskell", "Evaluación interna", ["Graph reduction", "Weak head normal form", "Black holes", "Space leaks", "Unboxed values"]),
    },
    {
      section: "Optimización con GHC",
      concepts: withDescriptions("haskell", "Optimización con GHC", ["Core language", "Inlining", "Rewrite rules", "Fusion", "Demand analysis"]),
    },
    {
      section: "Concurrencia robusta",
      concepts: withDescriptions("haskell", "Concurrencia robusta", ["Green threads", "MVar", "Software transactional memory", "Async exceptions", "Structured async"]),
    },
    {
      section: "Paralelismo",
      concepts: withDescriptions("haskell", "Paralelismo", ["Sparks", "Strategies", "Evaluation monad", "Parallel arrays", "Eventlog analysis"]),
    },
    {
      section: "Parsing y lenguajes",
      concepts: withDescriptions("haskell", "Parsing y lenguajes", ["Parser combinators", "Applicative parsing", "Megaparsec", "Árboles de sintaxis", "Pretty printing"]),
    },
    {
      section: "Pruebas y verificación",
      concepts: withDescriptions("haskell", "Pruebas y verificación", ["Generators y shrinkers", "State-machine testing", "Liquid types", "Equational reasoning", "Golden tests"]),
    },
    {
      section: "Construcción y distribución",
      concepts: withDescriptions("haskell", "Construcción y distribución", ["Componentes Cabal", "Stackage snapshots", "Backpack modules", "Nix y builds herméticos", "Versionado de paquetes"]),
    },
    {
      section: "Interoperabilidad",
      concepts: withDescriptions("haskell", "Interoperabilidad", ["Foreign function interface", "Marshalling", "Stable pointers", "C callbacks", "WebAssembly backends"]),
    },
    {
      section: "Producción observable",
      concepts: withDescriptions("haskell", "Producción observable", ["Heap residency", "Cost centres", "Runtime system options", "Structured logging", "Manejo de señales y shutdown"]),
    },
  ],
  go: [
    {
      section: "Tipos e interfaces",
      concepts: withDescriptions("go", "Tipos e interfaces", ["Type identity", "Type aliases", "Embedding", "Interface satisfaction implícita", "Type sets"]),
    },
    {
      section: "Memoria",
      concepts: withDescriptions("go", "Memoria", ["Escape analysis", "Stack growth", "Pointers sin aritmética", "Allocation patterns", "sync.Pool"]),
    },
    {
      section: "Runtime en profundidad",
      concepts: withDescriptions("go", "Runtime en profundidad", ["Work stealing", "Network poller", "Preemption", "Tri-color marking", "Stop-the-world pauses"]),
    },
    {
      section: "Patrones concurrentes",
      concepts: withDescriptions("go", "Patrones concurrentes", ["Fan-out y fan-in", "Pipelines", "Worker pools", "Ownership por canal", "Errgroup"]),
    },
    {
      section: "Cancelación y límites",
      concepts: withDescriptions("go", "Cancelación y límites", ["Context propagation", "Deadlines", "Cancellation causes", "Leak de goroutines", "Presupuestos de latencia"]),
    },
    {
      section: "I/O y formatos",
      concepts: withDescriptions("go", "I/O y formatos", ["Reader y Writer", "Buffered I/O", "JSON streaming", "Templates", "Embed filesystem"]),
    },
    {
      section: "Servicios de red",
      concepts: withDescriptions("go", "Servicios de red", ["HTTP transports", "Middleware idiomático", "TLS configuration", "gRPC", "Connection pooling"]),
    },
    {
      section: "Datos y consistencia",
      concepts: withDescriptions("go", "Datos y consistencia", ["database/sql", "Connection lifetimes", "Transacciones", "Prepared statements", "Migrations"]),
    },
    {
      section: "Pruebas avanzadas",
      concepts: withDescriptions("go", "Pruebas avanzadas", ["Table-driven tests", "Subtests", "Fuzzing nativo", "Testcontainers", "Golden files"]),
    },
    {
      section: "Toolchain",
      concepts: withDescriptions("go", "Toolchain", ["go generate", "Build tags", "Cross compilation", "Staticcheck", "Workspaces"]),
    },
    {
      section: "Seguridad",
      concepts: withDescriptions("go", "Seguridad", ["govulncheck", "Crypto randomness", "Path traversal", "Command execution", "Dependency verification"]),
    },
    {
      section: "Rendimiento",
      concepts: withDescriptions("go", "Rendimiento", ["CPU profiles", "Heap profiles", "Block y mutex profiles", "Allocation reduction", "Profile-guided optimization"]),
    },
    {
      section: "Operación de servicios",
      concepts: withDescriptions("go", "Operación de servicios", ["Health y readiness", "Structured slog", "OpenTelemetry", "Graceful restarts", "Minimal container images"]),
    },
  ],
  kotlin: [
    {
      section: "Tipos y nulabilidad avanzada",
      concepts: withDescriptions("kotlin", "Tipos y nulabilidad avanzada", ["Smart casts", "Nothing y Unit", "Definite non-null types", "Value classes", "Contracts"]),
    },
    {
      section: "Objetos y composición",
      concepts: withDescriptions("kotlin", "Objetos y composición", ["Object declarations", "Companion objects", "Delegated properties", "Interface delegation", "Scope functions"]),
    },
    {
      section: "Genéricos expresivos",
      concepts: withDescriptions("kotlin", "Genéricos expresivos", ["Declaration-site variance", "Use-site projections", "Star projections", "Reified type parameters", "Type aliases"]),
    },
    {
      section: "Programación funcional",
      concepts: withDescriptions("kotlin", "Programación funcional", ["Higher-order functions", "Function receivers", "Sequences perezosas", "Result", "DSL type-safe"]),
    },
    {
      section: "Compilador y bytecode",
      concepts: withDescriptions("kotlin", "Compilador y bytecode", ["Frontend FIR", "Intermediate representation", "Name mangling", "Default arguments en JVM", "Kotlin metadata"]),
    },
    {
      section: "Coroutines en profundidad",
      concepts: withDescriptions("kotlin", "Coroutines en profundidad", ["Continuation passing style", "Coroutine scopes", "Job hierarchy", "Exception supervision", "Cancellation cooperativa"]),
    },
    {
      section: "Flujos reactivos",
      concepts: withDescriptions("kotlin", "Flujos reactivos", ["Cold y hot flows", "StateFlow", "SharedFlow", "Backpressure semántico", "Operadores de combinación"]),
    },
    {
      section: "Interoperabilidad JVM",
      concepts: withDescriptions("kotlin", "Interoperabilidad JVM", ["SAM conversions", "Checked exceptions", "Wildcards JVM", "Annotations JvmName y JvmStatic", "Nullability annotations"]),
    },
    {
      section: "Servidor y persistencia",
      concepts: withDescriptions("kotlin", "Servidor y persistencia", ["Ktor pipelines", "Serialización Kotlin", "Clientes HTTP", "Acceso SQL", "Configuración por entorno"]),
    },
    {
      section: "Multiplataforma",
      concepts: withDescriptions("kotlin", "Multiplataforma", ["Source sets", "Expect y actual", "Kotlin/Native memory model", "Kotlin/JS", "Bibliotecas multiplataforma"]),
    },
    {
      section: "Pruebas",
      concepts: withDescriptions("kotlin", "Pruebas", ["kotlin.test", "Coroutine test scheduler", "Property-based testing", "Mocking de tipos finales", "Contract tests"]),
    },
    {
      section: "Build y calidad",
      concepts: withDescriptions("kotlin", "Build y calidad", ["Kotlin Gradle DSL", "Incremental compilation", "KSP", "Detekt", "Binary compatibility validation"]),
    },
    {
      section: "Producción y rendimiento",
      concepts: withDescriptions("kotlin", "Producción y rendimiento", ["Allocation profiling", "Coroutine telemetry", "Startup optimization", "Obfuscation y shrinking", "Supply-chain scanning"]),
    },
  ],
  java: [
    {
      section: "Sistema de tipos",
      concepts: withDescriptions("java", "Sistema de tipos", ["Conversión primitiva", "Boxing y unboxing", "Sobrecarga y resolución", "Sealed hierarchies", "Pattern matching exhaustivo"]),
    },
    {
      section: "Diseño de objetos",
      concepts: withDescriptions("java", "Diseño de objetos", ["Identidad y value objects", "Inmutabilidad", "Composición frente a herencia", "Records como portadores", "Contratos equals y hashCode"]),
    },
    {
      section: "Genéricos",
      concepts: withDescriptions("java", "Genéricos", ["Type erasure", "Bounds", "Wildcards PECS", "Bridge methods", "Heap pollution"]),
    },
    {
      section: "Metadatos y reflexión",
      concepts: withDescriptions("java", "Metadatos y reflexión", ["Annotations", "Reflection API", "Method handles", "Dynamic proxies", "Annotation processing"]),
    },
    {
      section: "Class files y carga",
      concepts: withDescriptions("java", "Class files y carga", ["Constant pool", "Class loader delegation", "Linking y initialization", "Module layers", "Agents e instrumentation"]),
    },
    {
      section: "Memoria de la JVM",
      concepts: withDescriptions("java", "Memoria de la JVM", ["Object layout", "Generational heaps", "G1 collector", "ZGC y pausas", "Native memory tracking"]),
    },
    {
      section: "Modelo de memoria concurrente",
      concepts: withDescriptions("java", "Modelo de memoria concurrente", ["Happens-before", "Volatile", "Intrinsic locks", "Atomic variables", "False sharing"]),
    },
    {
      section: "Concurrencia moderna",
      concepts: withDescriptions("java", "Concurrencia moderna", ["Virtual threads", "Structured concurrency", "Concurrent collections", "ForkJoinPool", "Reactive streams"]),
    },
    {
      section: "Procesamiento de colecciones",
      concepts: withDescriptions("java", "Procesamiento de colecciones", ["Spliterators", "Collectors", "Parallel streams", "Primitive streams", "Optional sin abuso"]),
    },
    {
      section: "I/O y networking",
      concepts: withDescriptions("java", "I/O y networking", ["Byte y character streams", "NIO buffers y channels", "Asynchronous I/O", "HTTP Client", "TLS sockets"]),
    },
    {
      section: "Persistencia",
      concepts: withDescriptions("java", "Persistencia", ["JDBC", "Connection pools", "Transaction boundaries", "JPA entity lifecycle", "Query plan awareness"]),
    },
    {
      section: "Construcción modular",
      concepts: withDescriptions("java", "Construcción modular", ["JPMS descriptors", "Maven dependency mediation", "Gradle toolchains", "Multi-release JAR", "jlink images"]),
    },
    {
      section: "Pruebas y calidad",
      concepts: withDescriptions("java", "Pruebas y calidad", ["JUnit lifecycle", "Parameterized tests", "Property testing", "Static analysis", "Mutation testing"]),
    },
    {
      section: "Seguridad",
      concepts: withDescriptions("java", "Seguridad", ["Deserialization filters", "Cryptography providers", "Key stores", "XML parser hardening", "Dependency vulnerability scanning"]),
    },
    {
      section: "Operación y rendimiento",
      concepts: withDescriptions("java", "Operación y rendimiento", ["JIT warmup", "JMH benchmarks", "JDK Mission Control", "Class data sharing", "Container-aware resource limits"]),
    },
  ],
  r: [
    {
      section: "Objetos y atributos",
      concepts: withDescriptions("r", "Objetos y atributos", ["Atomic vectors", "Factors", "Names y dimensions", "S3 classes", "S4 classes"]),
    },
    {
      section: "Evaluación del lenguaje",
      concepts: withDescriptions("r", "Evaluación del lenguaje", ["Promises", "Environments", "Closures", "Non-standard evaluation", "Quosures"]),
    },
    {
      section: "Manipulación tabular",
      concepts: withDescriptions("r", "Manipulación tabular", ["Indexación vectorial", "Split-apply-combine", "Tidy data", "Joins", "Pivoting"]),
    },
    {
      section: "Modelado estadístico",
      concepts: withDescriptions("r", "Modelado estadístico", ["Diseño de matrices", "Contrasts", "Generalized linear models", "Mixed-effects models", "Regularización"]),
    },
    {
      section: "Visualización",
      concepts: withDescriptions("r", "Visualización", ["Grammar of graphics", "Escalas", "Facets", "Anotaciones", "Gráficos accesibles"]),
    },
    {
      section: "Datos faltantes y calidad",
      concepts: withDescriptions("r", "Datos faltantes y calidad", ["MCAR MAR y MNAR", "Imputación", "Outliers", "Validación de esquemas", "Data provenance"]),
    },
    {
      section: "Series temporales",
      concepts: withDescriptions("r", "Series temporales", ["Índices temporales", "Estacionalidad", "ARIMA", "Forecast validation", "Anomalías temporales"]),
    },
    {
      section: "Datos espaciales",
      concepts: withDescriptions("r", "Datos espaciales", ["Sistemas de coordenadas", "Simple features", "Operaciones geométricas", "Rasters", "Mapas reproducibles"]),
    },
    {
      section: "Aprendizaje automático",
      concepts: withDescriptions("r", "Aprendizaje automático", ["Preprocessing recipes", "Resampling", "Feature engineering", "Hyperparameter tuning", "Calibration"]),
    },
    {
      section: "Simulación e inferencia bayesiana",
      concepts: withDescriptions("r", "Simulación e inferencia bayesiana", ["Random number generators", "Bootstrap", "Markov chain Monte Carlo", "Prior y posterior", "Diagnóstico de convergencia"]),
    },
    {
      section: "Paquetes profesionales",
      concepts: withDescriptions("r", "Paquetes profesionales", ["Estructura DESCRIPTION", "Namespaces", "roxygen2", "Vignettes", "CRAN checks"]),
    },
    {
      section: "Pruebas y contratos",
      concepts: withDescriptions("r", "Pruebas y contratos", ["testthat", "Snapshot tests", "Property-based checks", "Mocking", "Regression datasets"]),
    },
    {
      section: "Rendimiento",
      concepts: withDescriptions("r", "Rendimiento", ["Benchmarking", "Memory profiling", "Efficient vectorization", "Rcpp", "Parallel backends"]),
    },
    {
      section: "Productos de datos",
      concepts: withDescriptions("r", "Productos de datos", ["Shiny reactivity", "Plumber APIs", "Parameterized reports", "Scheduled pipelines", "Deployment bundles"]),
    },
    {
      section: "Gobierno y producción",
      concepts: withDescriptions("r", "Gobierno y producción", ["Dependency lockfiles", "Secret management", "Artifact versioning", "Model monitoring", "Audit trails"]),
    },
  ],
  assembly: [
    {
      section: "Familias de arquitectura",
      concepts: withDescriptions("assembly", "Familias de arquitectura", ["x86-64", "AArch64", "RISC-V", "Harvard frente a von Neumann", "Modos de ejecución"]),
    },
    {
      section: "Codificación y secciones",
      concepts: withDescriptions("assembly", "Codificación y secciones", ["Opcodes y operandos", "Instruction prefixes", "Secciones text data y bss", "Directivas del ensamblador", "Alineación de secciones"]),
    },
    {
      section: "Modos de direccionamiento",
      concepts: withDescriptions("assembly", "Modos de direccionamiento", ["Inmediato", "Registro indirecto", "Base más desplazamiento", "Indexado escalado", "PC-relative"]),
    },
    {
      section: "Aritmética de bajo nivel",
      concepts: withDescriptions("assembly", "Aritmética de bajo nivel", ["Carry y overflow", "Multiplicación de ancho doble", "División entera", "Aritmética saturada", "Branchless operations"]),
    },
    {
      section: "Pila y marcos de llamada",
      concepts: withDescriptions("assembly", "Pila y marcos de llamada", ["Stack pointer", "Frame pointer", "Callee-saved registers", "Variadic functions", "Stack unwinding"]),
    },
    {
      section: "Enlazado y carga",
      concepts: withDescriptions("assembly", "Enlazado y carga", ["Relocations", "Position-independent code", "Global offset table", "Procedure linkage table", "Dynamic loader"]),
    },
    {
      section: "Interfaz con el sistema",
      concepts: withDescriptions("assembly", "Interfaz con el sistema", ["System call numbers", "User mode y kernel mode", "Signals", "Memory mapping", "Thread-local storage"]),
    },
    {
      section: "Cómputo vectorial",
      concepts: withDescriptions("assembly", "Cómputo vectorial", ["SIMD lanes", "Vector loads y stores", "Horizontal operations", "Auto-vectorization constraints", "Feature detection"]),
    },
    {
      section: "Concurrencia y memoria",
      concepts: withDescriptions("assembly", "Concurrencia y memoria", ["Atomic read-modify-write", "Compare-and-swap", "Memory barriers", "Cache coherence", "ABA problem"]),
    },
    {
      section: "Depuración binaria",
      concepts: withDescriptions("assembly", "Depuración binaria", ["Breakpoints de hardware", "Watchpoints", "Core dumps", "Symbolication", "Control-flow reconstruction"]),
    },
    {
      section: "Rendimiento microarquitectónico",
      concepts: withDescriptions("assembly", "Rendimiento microarquitectónico", ["Instruction pipelines", "Branch prediction", "Cache hierarchy", "Out-of-order execution", "Performance counters"]),
    },
    {
      section: "Seguridad binaria",
      concepts: withDescriptions("assembly", "Seguridad binaria", ["Stack canaries", "DEP y NX", "Address space layout randomization", "Return-oriented programming", "Control-flow integrity"]),
    },
    {
      section: "Firmware y arranque",
      concepts: withDescriptions("assembly", "Firmware y arranque", ["Reset vector", "Bootloader stages", "Interrupt vector table", "Memory-mapped I/O", "Cross-assembler toolchains"]),
    },
  ],
  erlang: [
    {
      section: "Semántica funcional",
      concepts: withDescriptions("erlang", "Semántica funcional", ["Single assignment", "Guard expressions", "List comprehensions", "Tail recursion", "Binary pattern matching"]),
    },
    {
      section: "Internals de BEAM",
      concepts: withDescriptions("erlang", "Internals de BEAM", ["BEAM bytecode", "Reduction counting", "Process heaps", "Binary heap", "JIT de BEAM"]),
    },
    {
      section: "Protocolos entre procesos",
      concepts: withDescriptions("erlang", "Protocolos entre procesos", ["Process identifiers", "Message ordering", "Request-reply correlation", "Timeouts de recepción", "Mailbox growth"]),
    },
    {
      section: "Servidores OTP avanzados",
      concepts: withDescriptions("erlang", "Servidores OTP avanzados", ["GenServer callbacks", "gen_statem", "gen_event alternatives", "Continue callbacks", "Process hibernation"]),
    },
    {
      section: "Árboles de supervisión",
      concepts: withDescriptions("erlang", "Árboles de supervisión", ["One-for-one strategy", "Rest-for-one strategy", "Restart intensity", "Dynamic supervisors", "Shutdown ordering"]),
    },
    {
      section: "Aplicaciones y releases",
      concepts: withDescriptions("erlang", "Aplicaciones y releases", ["Application resource files", "Release assembly", "Boot scripts", "Runtime configuration", "Release upgrades"]),
    },
    {
      section: "Sistemas distribuidos",
      concepts: withDescriptions("erlang", "Sistemas distribuidos", ["Node discovery", "Distribution protocol", "Network splits", "Global registry tradeoffs", "Cluster topology"]),
    },
    {
      section: "Datos y persistencia",
      concepts: withDescriptions("erlang", "Datos y persistencia", ["ETS tables", "DETS storage", "Mnesia transactions", "Dirty operations", "Event sourcing con procesos"]),
    },
    {
      section: "Pruebas de sistemas concurrentes",
      concepts: withDescriptions("erlang", "Pruebas de sistemas concurrentes", ["EUnit", "Common Test suites", "PropEr", "Fault injection", "Deterministic protocol models"]),
    },
    {
      section: "Observabilidad",
      concepts: withDescriptions("erlang", "Observabilidad", ["Logger metadata", "Telemetry events", "Process tracing", "Scheduler utilization", "Flame graphs de BEAM"]),
    },
    {
      section: "Seguridad y operación",
      concepts: withDescriptions("erlang", "Seguridad y operación", ["Distribution cookies", "TLS distribution", "Atom table exhaustion", "Remote shell controls", "Rolling upgrades"]),
    },
  ],
} as const satisfies NewLearningExtensionRegistry;

export const newLearningExtensionsFoundationsLanguages = Object.fromEntries(
  Object.entries(baseNewLearningExtensionsFoundationsLanguages).map(([collection, chapters]) => [
    collection,
    chapters.map((chapter) => {
      const additions = additionalConceptTitles[collection]?.[chapter.section] ?? [];
      return {
        ...chapter,
        concepts: [
          ...chapter.concepts,
          ...additions.map((title, index) => additionalDescription(collection, chapter.section, title, index)),
        ],
      };
    }),
  ]),
) as NewLearningExtensionRegistry;
