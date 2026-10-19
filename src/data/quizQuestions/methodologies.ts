import type { QuizQuestion } from "@/data/quizTypes";

export const methodologiesQuestions: QuizQuestion[] = [
  {
    id: "meth-01",
    collectionId: "methodologies",
    question: "Según el Manifiesto Ágil (2001), ¿cuál de los siguientes pares refleja correctamente uno de sus cuatro valores fundamentales?",
    options: [
      "Software funcionando sobre documentación extensiva.",
      "Procesos y herramientas sobre individuos e interacciones.",
      "Seguimiento estricto de un plan sobre respuesta ante el cambio.",
      "Negociación contractual sobre colaboración con el cliente."
    ],
    correctAnswerIndex: 0,
    explanation: "El Manifiesto valora: 1) Individuos e interacciones sobre procesos y herramientas; 2) Software funcionando sobre documentación extensiva; 3) Colaboración con el cliente sobre negociación contractual; 4) Respuesta ante el cambio sobre seguir un plan.",
    topic: "Valores del Manifiesto Ágil",
    difficulty: "básico"
  },
  {
    id: "meth-02",
    collectionId: "methodologies",
    question: "En la Guía de Scrum 2020, ¿cuáles son los tres pilares del empirismo sobre los que se fundamenta el framework?",
    options: [
      "Transparencia, Inspección y Adaptación.",
      "Velocidad, Predictibilidad y Rentabilidad.",
      "Planificación, Delegación y Control.",
      "Calidad, Cobertura y Automatización."
    ],
    correctAnswerIndex: 0,
    explanation: "Scrum se basa en el control de procesos empírico. Sus tres pilares inseparables son Transparencia (hacer visible el trabajo y estado real), Inspección (evaluar artefactos y progreso hacia objetivos) y Adaptación (ajustar procesos o materiales desalineados tan pronto como sea posible).",
    topic: "Scrum Framework",
    difficulty: "básico"
  },
  {
    id: "meth-03",
    collectionId: "methodologies",
    question: "¿A qué compromiso formal de Scrum está vinculado el artefacto 'Sprint Backlog'?",
    options: [
      "El Product Goal.",
      "El Sprint Goal (Objetivo del Sprint).",
      "La Definition of Done (Definición de Terminado).",
      "El Roadmap Estratégico Cuatrimestral."
    ],
    correctAnswerIndex: 1,
    explanation: "En la Guía Scrum cada artefacto contiene un compromiso específico: el Product Backlog se compromete con el Product Goal; el Sprint Backlog con el Sprint Goal; y el Increment con la Definition of Done.",
    topic: "Artefactos y Compromisos de Scrum",
    difficulty: "intermedio"
  },
  {
    id: "meth-04",
    collectionId: "methodologies",
    question: "En Scrum, ¿cuál es la responsabilidad exclusiva del rol de 'Product Owner' respecto al Product Backlog?",
    options: [
      "Descomponer técnicamente las tareas en horas y asignarlas individualmente a cada desarrollador.",
      "Maximizar el valor del producto resultante del trabajo del Scrum Team mediante la gestión y priorización efectiva del Product Backlog.",
      "Facilitar las reuniones de retrospectiva y resolver impedimentos organizacionales externos.",
      "Aprobar la arquitectura técnica y el diseño de la base de datos antes de cada Sprint."
    ],
    correctAnswerIndex: 1,
    explanation: "El Product Owner es la única persona responsable de ordenar y clarificar los ítems del Product Backlog para maximizar el valor del producto, actuando como voz del negocio y usuarios ante el equipo de desarrollo.",
    topic: "Roles de Scrum",
    difficulty: "básico"
  },
  {
    id: "meth-05",
    collectionId: "methodologies",
    question: "¿Qué postula la 'Ley de Little' aplicada a la gestión de flujo en sistemas Kanban?",
    options: [
      "$\\text{Throughput} = \\text{Lead Time} \\times \\text{WIP}$",
      "$\\text{Lead Time} = \\frac{\\text{Work In Progress (WIP)}}{\\text{Throughput}}$",
      "$\\text{Cycle Time} = \\text{Story Points} \\times \\text{Defect Rate}$",
      "$\\text{WIP} = \\text{Capacidad del Equipo} \\times \\text{Número de Sprints}$"
    ],
    correctAnswerIndex: 1,
    explanation: "La Ley de Little (proveniente de la teoría de colas) demuestra matemáticamente que el tiempo promedio que un ítem tarda en atravesar el sistema (Lead Time) es directamente proporcional a la cantidad de trabajo en curso (WIP) e inversamente proporcional a la tasa de entrega (Throughput). Limitar WIP reduce el Lead Time.",
    topic: "Kanban y Teoría de Colas",
    difficulty: "avanzado"
  },
  {
    id: "meth-06",
    collectionId: "methodologies",
    question: "¿Cuál es la diferencia fundamental entre 'Lead Time' y 'Cycle Time' en las métricas de flujo ágil?",
    options: [
      "Lead Time mide el tiempo desde que el cliente formula una petición hasta su entrega final; Cycle Time mide el tiempo desde que el equipo comienza activamente a trabajar en ella hasta que se completa.",
      "Lead Time solo aplica a tareas de testing manual, mientras que Cycle Time aplica a la compilación de código fuente.",
      "Cycle Time incluye el tiempo en cola antes del refinamiento, mientras que Lead Time mide exclusivamente la ejecución en producción.",
      "Son métricas idénticas y sinónimas originadas en la metodología RUP."
    ],
    correctAnswerIndex: 0,
    explanation: "Lead Time refleja la experiencia del usuario final (tiempo total de espera desde la solicitud). Cycle Time mide la velocidad operativa interna del equipo desde el momento en que se adquiere el compromiso de desarrollo.",
    topic: "Métricas de Flujo",
    difficulty: "intermedio"
  },
  {
    id: "meth-07",
    collectionId: "methodologies",
    question: "En un 'Diagrama de Flujo Acumulado' (Cumulative Flow Diagram - CFD), ¿qué indica que la distancia horizontal entre dos bandas de estado comience a ensancharse progresivamente?",
    options: [
      "Que el equipo ha duplicado su rendimiento y la entrega es más veloz.",
      "Que el Lead Time o tiempo de ciclo de ese estado está aumentando, revelando un cuello de botella en el flujo de trabajo.",
      "Que la cantidad de defectos en producción ha caído a cero.",
      "Que los límites de WIP han sido eliminados con éxito del tablero."
    ],
    correctAnswerIndex: 1,
    explanation: "En un CFD, la distancia vertical mide el trabajo en curso (WIP) y la distancia horizontal mide el tiempo aproximado de ciclo (Lead/Cycle Time). Un ensanchamiento horizontal indica que las tareas están estancadas en esa etapa.",
    topic: "Métricas de Flujo y Kanban",
    difficulty: "intermedio"
  },
  {
    id: "meth-08",
    collectionId: "methodologies",
    question: "¿Cuál es el ciclo estricto de desarrollo guiado por pruebas (TDD - Test Driven Development) de Extreme Programming (XP)?",
    options: [
      "Red (escribir una prueba que falla) $\\to$ Green (escribir el código mínimo para que pase) $\\to$ Refactor (mejorar el diseño del código sin alterar su comportamiento externo).",
      "Green (escribir código funcional) $\\to$ Blue (añadir comentarios y documentación) $\\to$ Red (eliminar pruebas obsoletas).",
      "Plan (estimar cobertura) $\\to$ Test (probar manualmente en staging) $\\to$ Deploy (pasar a producción).",
      "Design (crear diagramas UML) $\\to$ Code (implementar arquitectura) $\\to$ Assert (generar mocks estáticos)."
    ],
    correctAnswerIndex: 0,
    explanation: "El ciclo Red-Green-Refactor de Kent Beck es el núcleo de TDD: se fuerza a que la prueba falle inicialmente para confirmar que verifica la necesidad del cambio, se escribe la implementación más simple para pasarla y luego se limpia el diseño con la red de seguridad activa.",
    topic: "Extreme Programming (XP)",
    difficulty: "básico"
  },
  {
    id: "meth-09",
    collectionId: "methodologies",
    question: "En Extreme Programming (XP), ¿qué implica la práctica de 'Propiedad Colectiva del Código' (Collective Code Ownership)?",
    options: [
      "Que cada archivo fuente tiene un único desarrollador asignado que debe aprobar personalmente cualquier modificación.",
      "Cualquier miembro del equipo puede refactorizar, corregir errores o agregar funcionalidades a cualquier parte del código en cualquier momento sin pedir autorizaciones especiales.",
      "Que el código pertenece jurídicamente a la comunidad de software libre bajo licencia GPLv3.",
      "Que los commits solo pueden realizarse en una rama pública compartida por múltiples empresas externas."
    ],
    correctAnswerIndex: 1,
    explanation: "La propiedad colectiva elimina los silos de conocimiento y los cuellos de botella individuales. Respaldada por pruebas automatizadas y estándares de código, fomenta que todo el equipo sea corresponsable de la calidad de toda la base de código.",
    topic: "Extreme Programming (XP)",
    difficulty: "intermedio"
  },
  {
    id: "meth-10",
    collectionId: "methodologies",
    question: "En Lean Software Development (Poppendieck), ¿cuál de los siguientes es considerado uno de los 7 desperdicios esenciales ('Muda')?",
    options: [
      "Refactorización regular del diseño de clases.",
      "Traspasos de información y cambios de contexto (Handoffs & Task Switching).",
      "Automatización de pruebas unitarias continuas.",
      "Conversaciones directas cara a cara con los usuarios finales."
    ],
    correctAnswerIndex: 1,
    explanation: "Los 7 desperdicios Lean son: 1) Trabajo parcialmente hecho, 2) Características extra (gold plating), 3) Reaprendizaje, 4) Traspasos (handoffs), 5) Retrasos, 6) Cambio de contexto/multitarea, y 7) Defectos.",
    topic: "Lean Software Development",
    difficulty: "intermedio"
  },
  {
    id: "meth-11",
    collectionId: "methodologies",
    question: "¿Cuáles son las 'Cuatro Métricas Clave de DORA' (DevOps Research and Assessment) para medir la efectividad en la entrega de software?",
    options: [
      "Deployment Frequency, Lead Time for Changes, Change Failure Rate y Time to Restore Service (MTTR).",
      "Líneas de Código escritas, Número de Commits, Horas facturables y Cobertura de Ramas.",
      "Velocidad de Sprint, Story Points completados, Precisión de estimación y Defect Density.",
      "Uptime de servidores, Ancho de banda de red, Latencia de base de datos y Memoria swap utilizada."
    ],
    correctAnswerIndex: 0,
    explanation: "Las métricas DORA diferencian equipos de alto rendimiento evaluando el rendimiento de entrega (Deployment Frequency, Lead Time for Changes) y la estabilidad operativa (Change Failure Rate, Time to Restore Service).",
    topic: "DevOps y Rendimiento Organizacional",
    difficulty: "intermedio"
  },
  {
    id: "meth-12",
    collectionId: "methodologies",
    question: "En Domain-Driven Design (DDD), ¿qué delimita un 'Bounded Context' (Contexto Delimitado)?",
    options: [
      "El límite físico de la memoria RAM asignado a un microservicio en Kubernetes.",
      "Un límite explícito dentro del cual un modelo de dominio particular aplica y dentro del cual todos los términos del 'Lenguaje Ubicuo' tienen un significado inequívoco y consistente.",
      "La partición de la base de datos relacional que utiliza aislamiento Serializable.",
      "El número máximo de desarrolladores permitidos en una reunión de planificación de Sprint."
    ],
    correctAnswerIndex: 1,
    explanation: "En DDD de Eric Evans, un Bounded Context garantiza que una misma palabra (e.g. 'Cliente' o 'Pedido') mantenga una semántica estricta y sin ambigüedades dentro de su ámbito, evitando modelos monolíticos y confusos.",
    topic: "Domain-Driven Design (DDD)",
    difficulty: "intermedio"
  },
  {
    id: "meth-13",
    collectionId: "methodologies",
    question: "En DDD, ¿cuál es la diferencia conceptual entre una 'Entidad' (Entity) y un 'Objeto de Valor' (Value Object)?",
    options: [
      "Una Entidad se define por su identidad única que persiste a lo largo del tiempo aunque sus atributos cambien; un Value Object se define únicamente por el valor inmutable de sus atributos y carece de identidad propia.",
      "Una Entidad siempre se persiste en PostgreSQL, mientras que un Value Object solo existe en memoria volátil de Redis.",
      "Un Value Object puede heredar de múltiples clases, mientras que una Entidad prohíbe el uso de interfaces.",
      "Las Entidades no contienen métodos lógicos y son meros contenedores de datos anémicos."
    ],
    correctAnswerIndex: 0,
    explanation: "Dos Value Objects con los mismos atributos (ej. Dirección con calle, ciudad y código postal) son intercambiables y equivalentes. Dos Entidades (ej. dos Usuarios) con el mismo nombre siguen siendo distintas si sus identificadores únicos (IDs) difieren.",
    topic: "Domain-Driven Design (DDD)",
    difficulty: "intermedio"
  },
  {
    id: "meth-14",
    collectionId: "methodologies",
    question: "¿Qué representa el 'Cono de Incertidumbre' (Cone of Uncertainty) en la estimación de proyectos de software?",
    options: [
      "Que el costo de una prueba automatizada disminuye de forma exponencial a medida que se agregan más aserciones.",
      "Que al inicio del proyecto la variabilidad y error potencial de las estimaciones puede diferir por un factor de 4x (400%), estrechándose progresivamente a medida que se obtiene retroalimentación y se entrega software real.",
      "Que los equipos ágiles pierden un 10% de su capacidad productiva por cada miembro nuevo que ingresa.",
      "La acumulación piramidal de fallos de compilación en pipelines de integración continua."
    ],
    correctAnswerIndex: 1,
    explanation: "Identificado en estudios de ingeniería de software (Boehm, McConnell), el Cono de Incertidumbre demuestra que es matemáticamente fútil exigir estimaciones exactas en fases tempranas cuando el alcance y los desafíos técnicos aún no han sido descubiertos.",
    topic: "Estimación y Planificación",
    difficulty: "intermedio"
  },
  {
    id: "meth-15",
    collectionId: "methodologies",
    question: "¿Por qué en estimación relativa ágil se utiliza la secuencia de Fibonacci modificada (1, 2, 3, 5, 8, 13, 21, ...) para asignar 'Story Points'?",
    options: [
      "Porque los números de Fibonacci optimizan los cálculos en la base de datos de Jira.",
      "Porque refleja la Ley de Weber-Fechner: a mayor tamaño e incertidumbre de una tarea, menor es nuestra capacidad de percibir diferencias sutiles, forzando a separar claramente órdenes de magnitud.",
      "Porque garantiza que la suma de los puntos de un Sprint coincida con los días laborables del calendario.",
      "Porque evita que los desarrolladores utilicen números primos en sus reuniones de retrospectiva."
    ],
    correctAnswerIndex: 1,
    explanation: "Es fácil distinguir entre un ítem de 1 y uno de 2 puntos, pero distinguir entre 20 y 21 es una falsa precisión. El salto no lineal de Fibonacci fuerza a debatir si algo es un 13 o un 21, incentivando la división de tareas complejas.",
    topic: "Estimación y Story Points",
    difficulty: "básico"
  },
  {
    id: "meth-16",
    collectionId: "methodologies",
    question: "En el 'Cuadrante de Deuda Técnica' propuesto por Martin Fowler, ¿cómo se clasifica la deuda técnica adquirida bajo la postura 'Sabemos que deberíamos modularizar esto, pero necesitamos lanzarlo hoy para validar el mercado y lo refactorizaremos de inmediato'?",
    options: [
      "Imprudente y Deliberada.",
      "Prudente y Deliberada.",
      "Imprudente e Inadvertida.",
      "Prudente e Inadvertida."
    ],
    correctAnswerIndex: 1,
    explanation: "Fowler clasifica la deuda en dos ejes: Prudente vs Imprudente y Deliberada vs Inadvertida. Asumir un compromiso de deuda con plena conciencia técnica y un plan explícito de mitigación es el arquetipo de deuda 'Prudente y Deliberada'.",
    topic: "Gestión de Deuda Técnica",
    difficulty: "intermedio"
  },
  {
    id: "meth-17",
    collectionId: "methodologies",
    question: "En Scrum, ¿cuál es el objetivo primordial del evento 'Sprint Retrospective'?",
    options: [
      "Demostrar el incremento de producto funcionando a los stakeholders y clientes para recibir feedback sobre funcionalidades.",
      "Planificar las mejoras en la forma de trabajar del Scrum Team, analizando personas, relaciones, procesos y herramientas para inspeccionar y adaptar el propio proceso.",
      "Evaluar individualmente el rendimiento salarial y las horas trabajadas de cada desarrollador.",
      "Reescribir las historias de usuario del Product Backlog para el siguiente trimestre comercial."
    ],
    correctAnswerIndex: 1,
    explanation: "La retrospectiva es el evento de mejora continua del equipo por excelencia: ocurre después del Sprint Review y antes del próximo Sprint Planning, enfocándose en la efectividad, calidad y bienestar del equipo de trabajo.",
    topic: "Eventos de Scrum",
    difficulty: "básico"
  },
  {
    id: "meth-18",
    collectionId: "methodologies",
    question: "¿Qué define a la práctica de 'Dual-Track Agile' (Ágil de Doble Vía) en el desarrollo de productos modernos?",
    options: [
      "Mantener dos equipos de soporte técnico trabajando en turnos diurnos y nocturnos.",
      "Ejecutar dos flujos continuos y paralelos e interconectados: 'Discovery' (descubrir qué construir mediante investigación y validación de hipótesis) y 'Delivery' (construir software robusto y escalable).",
      "Programar simultáneamente en frontend y backend dentro del mismo pull request.",
      "Desplegar la mitad de las características en iOS y la otra mitad en Android en semanas alternas."
    ],
    correctAnswerIndex: 1,
    explanation: "Popularizado por Marty Cagan y Jeff Patton, Dual-Track Agile asegura que el equipo no gaste capacidad construyendo soluciones que los usuarios no necesitan, alimentando el Delivery track con problemas previamente validados en el Discovery track.",
    topic: "Descubrimiento de Producto",
    difficulty: "intermedio"
  },
  {
    id: "meth-19",
    collectionId: "methodologies",
    question: "En un tablero Kanban, ¿cuál es la razón primordial para imponer límites estrictos de 'Trabajo en Progreso' (WIP Limits)?",
    options: [
      "Impedir que los desarrolladores trabajen más de 8 horas consecutivas al día.",
      "Forzar al equipo a 'parar de empezar y empezar a terminar' (stop starting, start finishing), reduciendo la multitarea, exponiendo cuellos de botella y maximizando el Throughput.",
      "Asegurar que cada columna del tablero contenga exactamente la misma cantidad de tarjetas en todo momento.",
      "Reducir el tamaño de los repositorios Git en servidores compartidos."
    ],
    correctAnswerIndex: 1,
    explanation: "Limitar el WIP evita la sobrecarga cognitiva de context-switching y revela inmediatamente las fricciones y bloqueos del flujo (si una columna se satura, el equipo debe colaborar para desbloquearla antes de jalar nuevas tareas).",
    topic: "Kanban y Límites WIP",
    difficulty: "básico"
  },
  {
    id: "meth-20",
    collectionId: "methodologies",
    question: "¿Qué establece formalmente la 'Definition of Done' (DoD - Definición de Terminado) en un equipo ágil?",
    options: [
      "Una lista de deseos de los clientes que se implementarán a lo largo del año siguiente.",
      "Un entendimiento formal y compartido de los criterios objetivos de calidad técnica que un incremento debe satisfacer plenamente para ser considerado utilizable y desplegable.",
      "El porcentaje de horas asignadas a reuniones de refinamiento antes de codificar.",
      "El documento formal de entrega final firmado por el departamento legal de la empresa."
    ],
    correctAnswerIndex: 1,
    explanation: "La DoD crea transparencia sobre la calidad del producto. Si un ítem no cumple con la Definition of Done, no puede ser presentado en el Sprint Review ni liberado en el incremento de producto.",
    topic: "Calidad y Scrum",
    difficulty: "básico"
  },
  {
    id: "meth-21",
    collectionId: "methodologies",
    question: "En la metodología 'Lean Startup' (Eric Ries), ¿cuál es el propósito del bucle de retroalimentación 'Construir-Medir-Aprender' (Build-Measure-Learn)?",
    options: [
      "Construir la mayor cantidad de código posible en el menor número de sprints para agotar el presupuesto de inversión.",
      "Convertir ideas en productos mínimos viables (MVPs), medir cómo responden los clientes reales a través de métricas accionables y aprender si pivotar o perseverar con el menor ciclo temporal posible.",
      "Realizar mediciones continuas de CPU y memoria RAM en servidores en la nube.",
      "Evaluar a los empleados mediante encuestas trimestrales de desempeño técnico."
    ],
    correctAnswerIndex: 1,
    explanation: "El objetivo de Lean Startup es minimizar el tiempo total a lo largo del bucle Build-Measure-Learn para validar hipótesis empíricas con métricas de valor real antes de realizar grandes inversiones en arquitecturas a gran escala.",
    topic: "Lean Startup",
    difficulty: "intermedio"
  },
  {
    id: "meth-22",
    collectionId: "methodologies",
    question: "En la técnica de estimación 'Planning Poker', ¿qué acción debe tomar el equipo si las estimaciones de los participantes difieren drásticamente (por ejemplo, alguien muestra un 2 y otro muestra un 21)?",
    options: [
      "Promediar matemáticamente los dos números y continuar con la siguiente historia.",
      "Pedir a quienes mostraron la estimación más alta y más baja que expliquen su razonamiento y perspectivas, para luego re-estimar tras clarificar las dudas o supuestos ocultos.",
      "Imponer automáticamente la estimación propuesta por el líder técnico con mayor antigüedad.",
      "Dividir la historia de usuario en exactamente dos partes iguales sin debatir."
    ],
    correctAnswerIndex: 1,
    explanation: "El gran valor del Planning Poker no es el número en sí, sino la conversación que genera. Quien votó 21 pudo haber identificado un riesgo arquitectónico oculto, y quien votó 2 pudo haber ideado una solución sencilla ya existente.",
    topic: "Estimación Colaborativa",
    difficulty: "básico"
  },
  {
    id: "meth-23",
    collectionId: "methodologies",
    question: "En el marco de escalado ágil y diseño organizacional, ¿qué predice la célebre 'Ley de Conway'?",
    options: [
      "Que el tiempo de compilación de un proyecto es cuadrático respecto al número de interfaces declaradas.",
      "Que las organizaciones que diseñan sistemas están limitadas a producir diseños que son copias directas de las estructuras de comunicación de dicha organización.",
      "Que ningún equipo de más de 7 desarrolladores puede utilizar la metodología TDD con éxito.",
      "Que la adición de personal a un proyecto de software retrasado lo retrasará aún más."
    ],
    correctAnswerIndex: 1,
    explanation: "Formulada por Melvin Conway en 1967: la arquitectura del software replica inevitablemente los canales de comunicación de la empresa. La 'maniobra inversa de Conway' reorganiza los equipos en torno a los límites de dominio deseados para obtener arquitecturas desacopladas.",
    topic: "Diseño Organizacional y Arquitectura",
    difficulty: "intermedio"
  },
  {
    id: "meth-24",
    collectionId: "methodologies",
    question: "¿Qué postula la 'Ley de Brooks' extraída del clásico libro 'The Mythical Man-Month' de Fred Brooks?",
    options: [
      "Agregar personas a un proyecto de software retrasado hace que se retrase aún más.",
      "Dos desarrolladores en programación en parejas producen exactamente el cuádruple de líneas de código.",
      "El número de errores en producción es inversamente proporcional al número de comentarios en el código.",
      "Todo refactor mayor a 1000 líneas introduce un fallo crítico de seguridad."
    ],
    correctAnswerIndex: 0,
    explanation: "Agregar personal a un proyecto en crisis incrementa la sobrecarga de comunicación ($n(n-1)/2$ canales) y requiere que los desarrolladores productivos existentes gasten tiempo entrenando a los nuevos ingresantes.",
    topic: "Ingeniería de Software y Gestión",
    difficulty: "básico"
  },
  {
    id: "meth-25",
    collectionId: "methodologies",
    question: "En el framework Kanban, ¿qué define a la clase de servicio 'Expedite' (Urgente / Acelerada)?",
    options: [
      "Tareas con fecha límite fija pero bajo impacto económico.",
      "Un carril de emergencia para elementos de costo de retraso (Cost of Delay) crítico e inmediato, que permite romper temporalmente los límites WIP ordinarios y recibe atención prioritaria absoluta del equipo.",
      "Tareas de mantenimiento técnico que solo se ejecutan los viernes por la tarde.",
      "Historias de usuario cuya estimación es de exactamente 1 Story Point."
    ],
    correctAnswerIndex: 1,
    explanation: "La clase Expedite se reserva para incidentes mayores (como una caída en producción o brecha de seguridad). Para mantener su eficacia, los tableros Kanban solo admiten un único ítem Expedite a la vez.",
    topic: "Kanban Clases de Servicio",
    difficulty: "intermedio"
  },
  {
    id: "meth-26",
    collectionId: "methodologies",
    question: "¿Qué caracteriza al patrón arquitectónico de microservicios guiado por Domain-Driven Design conocido como 'Saga'?",
    options: [
      "Mantener un bloqueo global de base de datos a nivel de tabla distribuida mediante transacciones de dos fases (2PC).",
      "Una secuencia de transacciones locales individuales donde cada transacción actualiza datos en un único servicio y emite un evento/mensaje; si un paso falla, se ejecutan transacciones compensatorias en reversa para restaurar la consistencia eventual.",
      "La ejecución de todas las mutaciones en un único servidor monolítico mediante hilos sincronizados.",
      "Un script de shell que realiza backups de bases de datos antes de cada despliegue de staging."
    ],
    correctAnswerIndex: 1,
    explanation: "El patrón Saga evita los bloqueos prolongados y el cuello de botella de 2PC en sistemas distribuidos, manejando la consistencia eventual a través de transacciones locales y transacciones de compensación semánticas.",
    topic: "Arquitectura y Patrones de Entrega",
    difficulty: "avanzado"
  },
  {
    id: "meth-27",
    collectionId: "methodologies",
    question: "En la estructura de historias de usuario, ¿qué representa el acrónimo 'INVEST' de Bill Wake para evaluar la calidad de un ítem de backlog?",
    options: [
      "Independent, Negotiable, Valuable, Estimable, Small, Testable.",
      "Integrated, Normalized, Validated, Encapsulated, Synchronized, Terminated.",
      "Iterative, Nominal, Variable, Extensible, Secure, Trackable.",
      "Infrastructure, Network, Virtualization, Execution, Storage, Throughput."
    ],
    correctAnswerIndex: 0,
    explanation: "El acrónimo INVEST recuerda que una buena historia de usuario debe ser: Independiente (evitar dependencias cruzadas), Negociable, Valiosa para el usuario/negocio, Estimable, Pequeña (cabe en una iteración) y Testable (verificable con criterios de aceptación).",
    topic: "Gestión de Requerimientos",
    difficulty: "básico"
  },
  {
    id: "meth-28",
    collectionId: "methodologies",
    question: "¿Qué papel cumple el 'Context Mapping' (Mapeo de Contextos) en Domain-Driven Design estratégico?",
    options: [
      "Mapear las tablas de base de datos con las clases de entidad mediante un archivo XML de Hibernate.",
      "Identificar y diagramar explícitamente las relaciones técnicas y organizacionales entre distintos Bounded Contexts (Shared Kernel, Customer-Supplier, Conformist, Anti-Corruption Layer, Open Host Service).",
      "Configurar las rutas del enrutador de URL en una aplicación de página única (SPA).",
      "Establecer la topología física de racks de servidores en un centro de datos on-premise."
    ],
    correctAnswerIndex: 1,
    explanation: "El mapa de contextos revela no solo cómo fluyen los datos y eventos entre modelos limítrofes, sino también las relaciones políticas entre equipos (e.g. si un equipo aguas abajo depende de un equipo aguas arriba y necesita una Capa Anti-Corrupción - ACL).",
    topic: "Domain-Driven Design Estratégico",
    difficulty: "avanzado"
  },
  {
    id: "meth-29",
    collectionId: "methodologies",
    question: "En la metodología de Desarrollo Basado en Troncal (Trunk-Based Development), ¿cómo maneja el equipo el despliegue de funcionalidades incompletas o a largo plazo?",
    options: [
      "Manteniendo ramas de características (feature branches) aisladas durante meses hasta que pasen todas las pruebas.",
      "Integrando commits pequeños continuamente a la rama principal (trunk/main) y ocultando las características incompletas en producción detrás de 'Feature Flags' (o Feature Toggles).",
      "Deteniendo todas las entregas a producción hasta completar la totalidad del roadmap trimestral.",
      "Creando repositorios Git duplicados para cada desarrollador de la plantilla."
    ],
    correctAnswerIndex: 1,
    explanation: "Trunk-Based Development desacopla el despliegue técnico (deployment) de la activación comercial (release). Integrar continuamente a trunk evita el infierno de merges (merge hell) y las Feature Flags permiten prender o apagar código en tiempo real.",
    topic: "Prácticas de Ingeniería Continua",
    difficulty: "intermedio"
  },
  {
    id: "meth-30",
    collectionId: "methodologies",
    question: "¿Cuál es el principio central del método 'Capa Anticorrupción' (Anti-Corruption Layer - ACL) al integrar sistemas legados con un nuevo diseño de dominio?",
    options: [
      "Instalar firewalls de hardware dedicados para bloquear paquetes TCP sospechosos.",
      "Crear una capa mediadora de traducción y adaptación que aísla el modelo de dominio moderno, evitando que los modelos conceptuales confusos o tecnologías obsoletas del sistema legado contaminen la nueva arquitectura.",
      "Auditar los logs de acceso de los usuarios mediante algoritmos de detección de fraude con inteligencia artificial.",
      "Obligar al sistema legado a migrar a TypeScript antes de permitir cualquier conexión por API REST."
    ],
    correctAnswerIndex: 1,
    explanation: "La ACL (Anti-Corruption Layer) actúa como un traductor bidireccional entre dos Bounded Contexts con modelos semánticos dispares, permitiendo que el nuevo sistema opere con un modelo de dominio puro y limpio.",
    topic: "Arquitectura y Domain-Driven Design",
    difficulty: "avanzado"
  }
];
