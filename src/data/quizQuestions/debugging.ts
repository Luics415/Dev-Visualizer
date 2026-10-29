import type { QuizQuestion } from "@/data/quizTypes";

export const debuggingQuestions: QuizQuestion[] = [
  {
    id: "dbg-q-01",
    collectionId: "debugging",
    question: "¿Qué distingue fundamentalmente al 'Debugging' profesional de la simple prueba y error al azar?",
    options: [
      "Es un proceso sistemático basado en el método científico: observar, formular hipótesis falsables, aislar variables y verificar la causa raíz.",
      "Consiste en reiniciar el servidor en bucle continuo hasta que el síntoma desaparezca por azar.",
      "Es la práctica de añadir 'any' a todas las variables de TypeScript para eliminar avisos del compilador.",
      "Se limita a ejecutar un formateador de código como Prettier sobre el repositorio completo."
    ],
    correctAnswerIndex: 0,
    explanation: "El debugging técnico no adivina ni prueba cambios a ciegas: formula hipótesis comprobables, modifica una única variable por experimento y reúne evidencia verificable de causa y efecto.",
    topic: "Mentalidad y formulación del problema",
    difficulty: "básico"
  },
  {
    id: "dbg-q-02",
    collectionId: "debugging",
    question: "¿Por qué es crucial diferenciar entre el 'Síntoma visible' y la 'Causa raíz' de un defecto?",
    options: [
      "Porque parchar únicamente el síntoma visible puede ocultar el fallo real y provocar corrupciones de datos más graves en otros subsistemas.",
      "Porque el síntoma siempre cuesta el doble de memoria RAM que la causa raíz.",
      "Porque los navegadores web rechazan peticiones HTTP si el código maneja errores en lugar de síntomas.",
      "Porque la causa raíz solo puede existir en lenguajes de bajo nivel compilados a C."
    ],
    correctAnswerIndex: 0,
    explanation: "El síntoma es la consecuencia final (ej: un NullPointerException en la vista); la causa raíz suele originarse mucho antes (ej: una validación ausente en la capa de transporte). Tratar solo el síntoma deja viva la anomalía base.",
    topic: "Mentalidad y formulación del problema",
    difficulty: "básico"
  },
  {
    id: "dbg-q-03",
    collectionId: "debugging",
    question: "¿Qué es un 'Caso Mínimo Reproducible' (MRE / MCVE) y cuál es su objetivo primordial?",
    options: [
      "Un entorno o script reducido al mínimo absoluto que conserva el fallo eliminando todo el ruido y dependencias accesorias.",
      "Una captura de pantalla de baja resolución comprimida en formato GIF para adjuntar a un ticket.",
      "Un contenedor Docker que contiene el sistema operativo completo con todas sus herramientas de desarrollo.",
      "Un test unitario que siempre pasa exitosamente sin importar las condiciones de entrada."
    ],
    correctAnswerIndex: 0,
    explanation: "Aislar el problema en un caso mínimo elimina variables distractivas, facilita la colaboración con otros ingenieros y confirma exactamente qué factor dispara el fallo.",
    topic: "Reproducción y aislamiento",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-04",
    collectionId: "debugging",
    question: "¿Cómo funciona el comando 'git bisect' para localizar la introducción de una regresión en el código?",
    options: [
      "Aplica una búsqueda binaria O(log N) sobre el historial de commits, probando el punto medio hasta identificar el commit exacto causante.",
      "Compara los hashes SHA-1 de todos los archivos y borra los commits que presenten conflictos de fusión.",
      "Invierte el orden cronológico de los commits para revertir automáticamente los últimos 10 cambios.",
      "Ejecuta un linter estático sobre todas las ramas remotas del repositorio en GitHub."
    ],
    correctAnswerIndex: 0,
    explanation: "`git bisect` divide el historial entre un commit bueno conocido y uno malo, seleccionando automáticamente el commit intermedio para que una prueba (manual o con script) determine en qué mitad ocurrió la regresión.",
    topic: "Herramientas de control de versiones",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-05",
    collectionId: "debugging",
    question: "¿En qué consiste el fenómeno conocido como 'Heisenbug'?",
    options: [
      "Un fallo que altera su comportamiento o desaparece por completo en cuanto se intenta observarlo o instrumentarlo con un debugger.",
      "Un error criptográfico derivado de la rotación de claves RSA en servidores de autenticación.",
      "Un defecto provocado por la colisión de nombres de variables en el scope global de Node.js.",
      "Un bug introducido intencionalmente en producción para auditar la atención del equipo de QA."
    ],
    correctAnswerIndex: 0,
    explanation: "En problemas de concurrencia o tiempos de carrera, el mero hecho de agregar prints, breakpoints o profiling altera la velocidad de ejecución y los timings, haciendo que el bug no se manifieste durante la inspección.",
    topic: "Tipologías de Fallos Complejos",
    difficulty: "avanzado"
  },
  {
    id: "dbg-q-06",
    collectionId: "debugging",
    question: "¿Cuál es la principal ventaja de utilizar 'Logpoints' frente a 'console.log' directo en el código fuente?",
    options: [
      "Permite emitir registros con variables evaluadas en tiempo real sin editar archivos, sin recompilar y sin riesgo de dejar logs en producción.",
      "Acelera la velocidad del procesador forzando la optimización JIT del runtime V8.",
      "Encripta automáticamente los mensajes en el registro de eventos del sistema operativo.",
      "Garantiza que el valor impreso nunca sea modificado por el recolector de basura."
    ],
    correctAnswerIndex: 0,
    explanation: "Los logpoints son breakpoints no bloqueantes proporcionados por las DevTools e IDEs: evalúan expresiones y las escriben en la consola al pasar por la línea sin alterar el árbol de trabajo de Git.",
    topic: "Herramientas e inspección",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-07",
    collectionId: "debugging",
    question: "¿Qué utilidad aportan los 'Source Maps' (.map) al depurar aplicaciones en entornos de producción o staging?",
    options: [
      "Reconstruyen la correspondencia bidireccional entre el código ofuscado/minificado y los archivos fuente originales (TypeScript, JSX, SCSS).",
      "Permiten a los motores de búsqueda como Google indexar el contenido privado de la aplicación.",
      "Comprimen los assets estáticos utilizando el algoritmo Brotli en tiempo de compilación.",
      "Generan diagramas arquitectónicos de flujo de datos en formato SVG vectorial."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin source maps, un stack trace en producción apunta a líneas incomprensibles de un bundle minificado; con ellos, las herramientas reconstruyen el archivo original, la función y el número de línea exacto.",
    topic: "Source Maps & Stack Traces",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-08",
    collectionId: "debugging",
    question: "¿Por qué un 'Breakpoint Condicional' es indispensable al depurar bucles que procesan miles de iteraciones?",
    options: [
      "Porque solo detiene la ejecución del hilo cuando se cumple una expresión booleana específica (ej: `item.id === 404`), evitando miles de pausas manuales.",
      "Porque congela el reloj del sistema operativo para simular una conexión de red con alta latencia.",
      "Porque fuerza al motor V8 a paralelizar el bucle en todos los núcleos de la tarjeta gráfica.",
      "Porque impide que el recolector de basura elimine las variables temporales del scope."
    ],
    correctAnswerIndex: 0,
    explanation: "Si una anomalía ocurre solo con ciertos datos dentro de una colección grande, la condición previene pulsar 'Resume' cientos de veces y captura el contexto exacto del fallo de forma inmediata.",
    topic: "Herramientas e inspección",
    difficulty: "básico"
  },
  {
    id: "dbg-q-09",
    collectionId: "debugging",
    question: "¿Qué información clave proporciona un 'Heap Snapshot' (instantánea de memoria) al diagnosticar una fuga de memoria (Memory Leak)?",
    options: [
      "El árbol de objetos en memoria, su tamaño retenido (retained size) y la cadena de referencias ('retaining paths') que impiden su recolección.",
      "La temperatura física de la memoria RAM y el voltaje consumido por la placa base.",
      "El historial completo de contraseñas introducidas por el usuario en formularios.",
      "La lista de paquetes npm que contienen vulnerabilidades de seguridad de nivel medio."
    ],
    correctAnswerIndex: 0,
    explanation: "El heap snapshot revela qué objetos siguen vivos y por qué camino de referencias un objeto raíz (como `window` o un event listener no removido) impide que el GC libere la memoria.",
    topic: "Diagnóstico de Memoria",
    difficulty: "avanzado"
  },
  {
    id: "dbg-q-10",
    collectionId: "debugging",
    question: "¿En qué consiste el principio de 'Rubber Duck Debugging' (depuración con patito de goma)?",
    options: [
      "Explicar en voz alta, línea por línea y en lenguaje natural el funcionamiento del código para forzar la detección de supuestos falsos y omisiones lógicas.",
      "Sustituir los tests de integración por simulaciones visuales con elementos animados en pantalla.",
      "Una convención de nombres en la que todas las funciones de prueba deben comenzar con el prefijo `quack_`.",
      "Un protocolo de compresión de sockets que reduce la latencia en redes móviles."
    ],
    correctAnswerIndex: 0,
    explanation: "Al verbalizar el flujo para alguien más (o un objeto inanimado), el cerebro abandona los atajos cognitivos y confronta lo que el código realmente hace frente a lo que el programador creía que hacía.",
    topic: "Metodología & Psicología del Debugging",
    difficulty: "básico"
  },
  {
    id: "dbg-q-11",
    collectionId: "debugging",
    question: "¿Qué técnica de mitigación permite limitar el 'Blast Radius' (radio de impacto) ante un bug crítico en producción sin desplegar un hotfix de emergencia?",
    options: [
      "Desactivar inmediatamente la funcionalidad afectada mediante un Feature Flag dinámico o conmutador de configuración remota.",
      "Reescribir el backend completo en un lenguaje compilado en un plazo de dos horas.",
      "Reiniciar la base de datos principal descartando todas las transacciones de las últimas 24 horas.",
      "Enviar un correo masivo a todos los clientes notificando el cese temporal del servicio."
    ],
    correctAnswerIndex: 0,
    explanation: "Tener funcionalidades desacopladas tras feature flags permite apagar el mecanismo causante en segundos para cortar el impacto en los usuarios mientras el equipo investiga la causa raíz con calma.",
    topic: "Resiliencia & Operación en Producción",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-12",
    collectionId: "debugging",
    question: "¿Cómo debe leerse un 'Stack Trace' de error de forma profesional y eficiente?",
    options: [
      "Identificar el tipo y mensaje del error, leer de arriba abajo buscando el primer marco perteneciente a nuestro propio código de aplicación, e inspeccionar causas anidadas.",
      "Mirar únicamente la última línea del archivo de log e ignorar todas las rutas intermedias.",
      "Buscar palabras en mayúsculas y asumir que la biblioteca de terceros con más líneas es la culpable.",
      "Contar el número total de llamadas para estimar la gravedad del error."
    ],
    correctAnswerIndex: 0,
    explanation: "El stack trace debe leerse con método: el tipo y mensaje definen la violación, los marcos superiores muestran dónde explotó el runtime y el primer marco de nuestro código señala dónde se originó la invocación incorrecta.",
    topic: "Diagnóstico de Excepciones",
    difficulty: "básico"
  },
  {
    id: "dbg-q-13",
    collectionId: "debugging",
    question: "¿Qué peligro presenta el 'Debugging por Coincidencia' (modificar código al azar hasta que el test pase)?",
    options: [
      "No se comprende la mecánica del fallo, se introducen efectos secundarios invisibles y el defecto suele reaparecer con mayor severidad.",
      "El archivo de configuración de Git se desvincula permanentemente de la rama remota.",
      "El tamaño del archivo binario de Node.js se duplica con cada compilación.",
      "Se bloquea la cuenta de desarrollador en los registros públicos de npm."
    ],
    correctAnswerIndex: 0,
    explanation: "Hacer cambios sin saber por qué funcionan resuelve el síntoma por casualidad para ese caso particular, dejando intacta la fragilidad subyacente y arruinando la arquitectura a largo plazo.",
    topic: "Mentalidad y formulación del problema",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-14",
    collectionId: "debugging",
    question: "¿Cómo se diagnostica una 'Cascada de Peticiones' (Waterfall) en la pestaña Network de las herramientas del navegador?",
    options: [
      "Observando barras de tiempo escalonadas donde cada petición bloquea el inicio de la siguiente debido a dependencias síncronas o `await` encadenados innecesarios.",
      "Comprobando si el tamaño de los iconos de la interfaz supera los 500 KB.",
      "Identificando peticiones HTTP con código de respuesta 200 OK repetidas cada 10 milisegundos.",
      "Verificando que todos los archivos CSS se descarguen antes de que el navegador analice el HTML."
    ],
    correctAnswerIndex: 0,
    explanation: "El gráfico de cascada revela dependencias secuenciales evitables; paralelizar consultas independientes mediante `Promise.all` o reestructurar componentes resuelve cuellos de botella severos de latencia.",
    topic: "Red & Rendimiento",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-15",
    collectionId: "debugging",
    question: "¿Qué es un 'Flaky Test' (prueba intermitente) y cuál es la estrategia correcta para depurarlo?",
    options: [
      "Un test que falla aleatoriamente sin cambios de código; se depura aislando dependencias de tiempo (relojes, sleeps), orden de ejecución, concurrencia y estado compartido.",
      "Un test que solo falla cuando la temperatura del procesador supera los 80 grados centígrados.",
      "Una prueba escrita en un lenguaje distinto al de la aplicación principal.",
      "Un test que debe reintentarse obligatoriamente 10 veces en CI antes de reportar un error."
    ],
    correctAnswerIndex: 0,
    explanation: "Los tests flaky suelen ocultar carreras de tiempo, fugas de base de datos entre pruebas o dependencias de zonas horarias. Reintentarlos ciegamente en CI es una mala práctica que destruye la confianza en la suite.",
    topic: "Pruebas & Determinismo",
    difficulty: "avanzado"
  },
  {
    id: "dbg-q-16",
    collectionId: "debugging",
    question: "¿Qué utilidad ofrece el comando 'git blame' en la investigación de un defecto?",
    options: [
      "Muestra quién modificó cada línea de un archivo, en qué commit y fecha, permitiendo vincular el código al Pull Request y contexto original del cambio.",
      "Asigna automáticamente una penalización económica al autor del commit con más fallos.",
      "Elimina permanentemente el historial de autoría para proteger la privacidad del equipo.",
      "Calcula la complejidad ciclomática de cada función en el repositorio."
    ],
    correctAnswerIndex: 0,
    explanation: "`git blame` no se usa para culpar a personas sino para entender el contexto histórico: qué requerimiento o problema intentaba resolver el autor cuando introdujo esa línea específica.",
    topic: "Arqueología de Código & Git",
    difficulty: "básico"
  },
  {
    id: "dbg-q-17",
    collectionId: "debugging",
    question: "¿En qué consiste la técnica de 'Bisección Manual de Código' cuando no se dispone de git bisect?",
    options: [
      "Comentar o aislar la mitad del código o de los datos de entrada para determinar en qué sección persiste el fallo, repitiendo el proceso recursivamente.",
      "Dividir el monitor del ordenador en dos ventanas horizontales para programar más rápido.",
      "Traducir la mitad de los archivos a C++ y la otra mitad a Rust.",
      "Separar las funciones en dos archivos idénticos y alternar su ejecución con un generador aleatorio."
    ],
    correctAnswerIndex: 0,
    explanation: "La búsqueda binaria manual (dividir el espacio de búsqueda a la mitad) reduce un problema de 1000 líneas a menos de 10 en unos 7 pasos lógicos, localizando rápidamente el origen del error.",
    topic: "Reproducción y aislamiento",
    difficulty: "básico"
  },
  {
    id: "dbg-q-18",
    collectionId: "debugging",
    question: "¿Por qué los 'Errores Silenciados' (ej: `try { ... } catch (e) {}` vacío) son considerados una de las peores prácticas de software?",
    options: [
      "Destruyen la evidencia del fallo, corrompen el flujo de control sin aviso y trasladan el error a puntos lejanos del sistema donde es casi imposible de depurar.",
      "Incrementan el costo del ancho de banda de red en un 200%.",
      "Hacen que el compilador de TypeScript se niegue a generar archivos .js.",
      "Provocan que los estilos de la interfaz se muestren en escala de grises."
    ],
    correctAnswerIndex: 0,
    explanation: "Un bloque catch vacío ('swallowing exceptions') esconde una falla real; la aplicación continúa en un estado corrupto o inconsistente y falla después en un lugar totalmente desconectado del origen.",
    topic: "Antipatrones de Depuración",
    difficulty: "básico"
  },
  {
    id: "dbg-q-19",
    collectionId: "debugging",
    question: "¿Qué es el 'Tracing Distribuido' (Distributed Tracing) en arquitecturas de microservicios?",
    options: [
      "El seguimiento de una petición mediante un TraceId propagado por todas las llamadas de red entre servicios para correlacionar latencias y fallos.",
      "La duplicación del código fuente en múltiples servidores geográficos para redundancia de disco.",
      "Un algoritmo de cifrado para almacenar registros en bases de datos NoSQL.",
      "La descarga automática de paquetes de NodeJS desde réplicas descentralizadas."
    ],
    correctAnswerIndex: 0,
    explanation: "Cuando una petición recorre cinco microservicios y dos colas, un TraceId único adjunto a las cabeceras HTTP/gRPC permite visualizar el recorrido completo y saber con precisión qué servicio falló o introdujo demora.",
    topic: "Observabilidad & Microservicios",
    difficulty: "avanzado"
  },
  {
    id: "dbg-q-20",
    collectionId: "debugging",
    question: "¿Cuál es el objetivo de escribir un 'Minimal Failing Test' antes de comenzar a refactorizar o arreglar un bug?",
    options: [
      "Demostrar inequívocamente la existencia del fallo, validar que la solución realmente lo corrige y evitar regresiones a futuro.",
      "Cumplir con un requisito burocrático de la auditoría de software sin valor práctico.",
      "Asegurar que la rama de Git sea aprobada automáticamente sin revisión de pares.",
      "Aumentar artificialmente la métrica de cobertura de código por encima del 95%."
    ],
    correctAnswerIndex: 0,
    explanation: "El test que falla captura la reproducción en código ejecutable (rojo). Al arreglar el bug y ver la prueba pasar (verde), se obtiene certeza científica de la corrección y una red de protección permanente contra regresiones.",
    topic: "TDD & Prevención de Regresiones",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-21",
    collectionId: "debugging",
    question: "¿Qué herramienta del navegador permite detectar 'Renders Innecesarios' y componentes lentos en React?",
    options: [
      "React DevTools Profiler con la opción 'Highlight updates when components render'.",
      "La pestaña de Red inspeccionando cabeceras Cache-Control.",
      "El inspector de cookies en la pestaña Application.",
      "La consola JavaScript ejecutando `alert(document.body.innerHTML)`."
    ],
    correctAnswerIndex: 0,
    explanation: "El Profiler de React muestra qué componentes renderizaron en cada commit, cuánto tiempo tardaron y la razón exacta (props cambiadas, context o hooks internos), guiando optimizaciones con evidencia.",
    topic: "Herramientas de Framework",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-22",
    collectionId: "debugging",
    question: "¿Qué diferencia existe entre un 'Core Dump' y un log tradicional de texto en servicios backend?",
    options: [
      "Un core dump es una instantánea binaria completa de la memoria del proceso en el momento exacto del colapso, examinable con herramientas como GDB o lldb.",
      "Un core dump contiene únicamente el nombre del archivo ejecutable sin variables.",
      "Un log de texto no puede guardarse en un disco duro de estado sólido.",
      "Un core dump solo se genera si el servidor cuenta con una tarjeta gráfica dedicada."
    ],
    correctAnswerIndex: 0,
    explanation: "Cuando un proceso colapsa por una señal fatal (SIGSEGV, SIGABRT), el sistema operativo puede volcar todo el espacio de memoria (core dump) para reconstruir el estado de todos los hilos, variables y registros en el instante del fallo.",
    topic: "Diagnóstico en Sistemas & Backend",
    difficulty: "avanzado"
  },
  {
    id: "dbg-q-23",
    collectionId: "debugging",
    question: "¿Cómo se diagnostica un 'Deadlock' (interbloqueo) entre dos o más hilos o transacciones concurrentes?",
    options: [
      "Analizando el grafo de espera de recursos donde el proceso A retiene el recurso 1 y espera el recurso 2, mientras el proceso B retiene el recurso 2 y espera el 1.",
      "Comprobando si el cable de red Ethernet está desconectado físicamente del switch.",
      "Revisando si las variables booleanas están inicializadas con el valor `false`.",
      "Verificando si la base de datos contiene más de un índice por tabla."
    ],
    correctAnswerIndex: 0,
    explanation: "Un deadlock ocurre por una dependencia circular en la adquisición de cerraduras o locks. Se resuelve aplicando un orden estricto y uniforme de adquisición de recursos o usando timeouts de bloqueo.",
    topic: "Concurrencia & Bloqueos",
    difficulty: "avanzado"
  },
  {
    id: "dbg-q-24",
    collectionId: "debugging",
    question: "¿Qué utilidad tiene la técnica de 'Traffic Shadowing' (o Dark Traffic) en la detección de bugs antes del rollout definitivo?",
    options: [
      "Duplica el tráfico real de producción hacia la nueva versión del servicio de forma asíncrona sin impactar las respuestas del usuario para comparar resultados.",
      "Oculta las direcciones IP de los usuarios en los logs de acceso mediante anonimización SHA-256.",
      "Bloquea todas las peticiones procedentes de bots o rastreadores web maliciosos.",
      "Simula errores 500 aleatorios para comprobar el comportamiento del frontend."
    ],
    correctAnswerIndex: 0,
    explanation: "El shadowing envía copias del tráfico real a la nueva versión sin esperar su respuesta hacia el cliente; permite validar estabilidad, rendimiento y respuestas ante cargas y datos reales sin asumir riesgos de producción.",
    topic: "Despliegue Seguro & Validación",
    difficulty: "avanzado"
  },
  {
    id: "dbg-q-25",
    collectionId: "debugging",
    question: "¿Cuál es la función de los 'Logs Estructurados' (JSON Logs) frente a las cadenas de texto sin formato?",
    options: [
      "Permiten indexar, filtrar y consultar campos semánticos específicos (usuario, latencia, servicio, error_code) en plataformas de agregación como Elasticsearch o Datadog.",
      "Consumen un 90% menos de almacenamiento que los archivos de texto normales.",
      "Se ejecutan directamente como scripts en el navegador del cliente.",
      "Evitan la necesidad de declarar variables en el código TypeScript."
    ],
    correctAnswerIndex: 0,
    explanation: "Un log plano requiere expresiones regulares frágiles para extraer datos; un log estructurado con campos tipados permite consultas directas del tipo `service = 'auth' AND status >= 500 AND duration_ms > 200` al instante.",
    topic: "Observabilidad & Logs",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-26",
    collectionId: "debugging",
    question: "¿Qué es una 'Prueba de Regresión' (Regression Testing) y cuándo debe ejecutarse?",
    options: [
      "Una suite de pruebas automáticas ejecutada continuamente para verificar que los cambios nuevos no hayan roto funcionalidades previamente operativas.",
      "Una prueba manual que solo se realiza una vez al año antes de auditorías financieras.",
      "Un test que valida la velocidad de escritura del disco duro del servidor.",
      "Una técnica para convertir bases de datos relacionales en archivos CSV."
    ],
    correctAnswerIndex: 0,
    explanation: "Las pruebas de regresión previenen que errores corregidos en el pasado reaparezcan y aseguran que nuevas funcionalidades o refactorizaciones preserven el contrato existente sin degradación.",
    topic: "Calidad & Prevención",
    difficulty: "básico"
  },
  {
    id: "dbg-q-27",
    collectionId: "debugging",
    question: "¿En qué consiste la técnica de 'Chaos Engineering' (Ingeniería del Caos) en la resiliencia de software?",
    options: [
      "Inyectar fallos deliberados y controlados en entornos de prueba o producción (latencia, caída de nodos, partición de red) para comprobar la autorecuperación.",
      "Permitir que los desarrolladores mezclen código en la rama principal sin revisión de Pull Requests.",
      "Desactivar todas las contraseñas de las bases de datos para acelerar el desarrollo.",
      "Eliminar aleatoriamente archivos del repositorio para evaluar la memoria del equipo."
    ],
    correctAnswerIndex: 0,
    explanation: "Herramientas de caos (como Chaos Monkey) fuerzan fallos de infraestructura para descubrir debilidades latentes antes de que un incidente no planeado ocurra a las 3 a.m.",
    topic: "Resiliencia & Caos",
    difficulty: "avanzado"
  },
  {
    id: "dbg-q-28",
    collectionId: "debugging",
    question: "¿Qué es un 'Post-Mortem Blameless' (Análisis post-incidente sin culpas) y cuál es su objetivo central?",
    options: [
      "Analizar las causas sistémicas y de proceso que permitieron que ocurriera un incidente para implementar barreras preventivas sin buscar culpables individuales.",
      "Una reunión disciplinaria donde se despide al ingeniero que realizó el commit con el fallo.",
      "Un documento legal enviado a los clientes para eludir la responsabilidad por pérdida de datos.",
      "Un informe técnico que se destruye tras superar la crisis del servidor."
    ],
    correctAnswerIndex: 0,
    explanation: "Si se castiga el error humano, la gente oculta la información. Un post-mortem sin culpas asume que los ingenieros actuaron de buena fe con la información disponible, y busca reforzar el sistema para que el error no sea posible de repetir.",
    topic: "Cultura & Post-Incidentes",
    difficulty: "intermedio"
  },
  {
    id: "dbg-q-29",
    collectionId: "debugging",
    question: "¿Por qué reiniciar un proceso ('turn it off and on again') es solo una mitigación temporal y no una solución al bug?",
    options: [
      "Porque limpia el estado de memoria temporal donde se manifestaba la fuga o el deadlock, pero el defecto volverá a ocurrir en cuanto se repitan las mismas condiciones.",
      "Porque los reinicios del sistema operativo alteran la clave de licencia de Node.js.",
      "Porque el hardware del servidor se desgasta mecánicamente con cada reinicio.",
      "Porque las peticiones HTTP previas se reenvían automáticamente al cliente."
    ],
    correctAnswerIndex: 0,
    explanation: "El reinicio devuelve el sistema a su estado inicial limpio, pero la fuga de memoria o el bloqueo concurrente siguen en el código: es un workaround para restablecer el servicio mientras se investiga la causa raíz.",
    topic: "Mitigación frente a Corrección",
    difficulty: "básico"
  },
  {
    id: "dbg-q-30",
    collectionId: "debugging",
    question: "¿Cuál es la 'Definición de Terminado' (Definition of Done) al resolver un defecto en un proyecto maduro?",
    options: [
      "Causa raíz explicada y documentada, código corregido, prueba de regresión automática añadida, observabilidad verificada y confirmación en producción.",
      "Enviar el commit a la rama de desarrollo y cerrar inmediatamente el ticket en Jira sin esperar al build.",
      "Comprobar que el código funciona únicamente en la máquina local del desarrollador.",
      "Eliminar el comentario del issue en GitHub para no dejar registro del fallo."
    ],
    correctAnswerIndex: 0,
    explanation: "Un bug no está terminado simplemente porque 'en mi máquina funciona': requiere prueba automática que impida su retorno, telemetría para vigilarlo en producción y documentación clara de por qué ocurrió.",
    topic: "Cierre & Definición de Terminado",
    difficulty: "intermedio"
  }
];
