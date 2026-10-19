import type { QuizQuestion } from "@/data/quizTypes";

export const htmlCssQuestions: QuizQuestion[] = [
  {
    id: "htmlcss-01",
    collectionId: "html-css",
    question: "En el algoritmo de especificidad de CSS, ¿cómo evalúa el navegador la especificidad relativa de los pseudo-selectores funcionales `:is()` y `:where()`?",
    options: [
      "`:is()` adopta la especificidad del selector más específico dentro de su lista de argumentos, mientras que `:where()` tiene siempre una especificidad estrictamente nula (0, 0, 0).",
      "Ambos pseudo-selectores añaden exactamente 1 punto a la columna de clases (0, 1, 0).",
      "`:where()` hereda la especificidad del selector padre, mientras que `:is()` se comporta como un ID (1, 0, 0).",
      "`:is()` solo es válido dentro de bloques `@media`, a diferencia de `:where()` que funciona en el scope raíz."
    ],
    correctAnswerIndex: 0,
    explanation: "`:where()` fue diseñado deliberadamente para estilizar resets y librerías de estilos con especificidad 0 para que puedan ser sobrescritos sin esfuerzo, mientras que `:is()` toma la especificidad del argumento más pesado en su lista.",
    topic: "Cascade y Especificidad",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-02",
    collectionId: "html-css",
    question: "¿Qué comportamiento introduce la directiva `@layer` (Cascade Layers) en la cascada de CSS frente a la especificidad tradicional de selectores?",
    options: [
      "El orden de las capas (@layer) tiene precedencia sobre la especificidad de los selectores normales: una regla en una capa posterior siempre prevalece sobre una regla en una capa anterior, independientemente de la especificidad del selector.",
      "Elimina la herencia de estilos en todas las etiquetas `<article>` y `<section>` anidadas.",
      "Las capas se ejecutan en subprocesos Web Workers independientes para evitar el bloqueo del hilo principal.",
      "Solo permite definir estilos para navegadores móviles con soporte de WebGL."
    ],
    correctAnswerIndex: 0,
    explanation: "Cascade Layers introduce un nuevo paso en el algoritmo de cascada previo a la especificidad. El orden de declaración de capas determina el ganador, permitiendo que un simple selector de clase en una capa de utilidades sobreescriba un selector complejo con IDs de una capa base.",
    topic: "CSS Moderno y Cascada",
    difficulty: "avanzado"
  },
  {
    id: "htmlcss-03",
    collectionId: "html-css",
    question: "En el elemento nativo `<dialog>`, ¿cuál es la diferencia crucial entre invocar el método `.show()` y el método `.showModal()`?",
    options: [
      "`.show()` es una función síncrona, mientras que `.showModal()` retorna una Promise asíncrona de JavaScript.",
      "`.showModal()` coloca el diálogo en la capa superior del navegador ('Top Layer'), renderiza el pseudo-elemento `::backdrop`, desactiva la interacción con el resto de la página y gestiona el foco accesible automáticamente.",
      "`.show()` solo admite texto plano, mientras que `.showModal()` permite renderizar imágenes y vídeos.",
      "`.showModal()` cierra automáticamente la ventana del navegador tras 10 segundos de inactividad."
    ],
    correctAnswerIndex: 1,
    explanation: "`.showModal()` promueve el diálogo a la 'Top Layer' del navegador (por encima de cualquier `z-index`), añade la capa de sombreado `::backdrop`, atrapa el foco del teclado (focus trapping accesible) y soporta el cierre nativo con la tecla Escape.",
    topic: "HTML Semántico y APIs Nativas",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-04",
    collectionId: "html-css",
    question: "¿Bajo qué condiciones específicas se produce el fenómeno de 'Colapso de Márgenes' (Margin Collapsing) en CSS?",
    options: [
      "Ocurre exclusivamente entre elementos flotantes (`float: left`) que comparten el mismo contenedor.",
      "Ocurre únicamente entre márgenes verticales (`margin-top` y `margin-bottom`) de elementos en flujo normal de bloque adyacentes o padre-hijo sin bordes, padding ni contextos de formato que los separen.",
      "Ocurre en todos los elementos Flexbox y CSS Grid cuando `gap` es igual a cero.",
      "Ocurre siempre que dos elementos poseen márgenes horizontales en la misma línea de texto."
    ],
    correctAnswerIndex: 1,
    explanation: "El colapso de márgenes solo ocurre en dirección vertical en flujo de bloque estándar. No ocurre en elementos inline, flex items, grid items, elementos con posición absoluta ni a través de límites de un Block Formatting Context (BFC).",
    topic: "Modelo de Caja (Box Model)",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-05",
    collectionId: "html-css",
    question: "¿Cuál es la forma más limpia y moderna de establecer un nuevo Contexto de Formato de Bloque (BFC - Block Formatting Context) sin efectos secundarios indeseados de desbordamiento?",
    options: [
      "`overflow: hidden`",
      "`display: flow-root`",
      "`position: relative`",
      "`float: left`"
    ],
    correctAnswerIndex: 1,
    explanation: "`display: flow-root` fue introducido específicamente en CSS para crear un BFC de manera semántica e inocua, conteniendo floats y evitando el colapso de márgenes con el exterior sin recortar contenido como hacía el hack histórico de `overflow: hidden`.",
    topic: "Format Contexts y Layout",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-06",
    collectionId: "html-css",
    question: "¿Qué propiedad de CSS permite aislar un elemento para crear un nuevo Contexto de Apilamiento (Stacking Context) sin alterar su posición ni su opacidad?",
    options: [
      "`isolation: isolate`",
      "`z-index: 9999`",
      "`transform: none`",
      "`display: contents`"
    ],
    correctAnswerIndex: 0,
    explanation: "`isolation: isolate` crea un nuevo stacking context de forma explícita y predecible, impidiendo que los hijos con `z-index` internos interfieran o se intercalen con capas de elementos externos en el árbol DOM.",
    topic: "Contextos de Apilamiento y z-index",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-07",
    collectionId: "html-css",
    question: "En CSS Grid Layout, ¿cuál es la diferencia sustancial entre `repeat(auto-fill, minmax(200px, 1fr))` y `repeat(auto-fit, minmax(200px, 1fr))`?",
    options: [
      "`auto-fill` crea tantas columnas como quepan en el contenedor aunque queden vacías; `auto-fit` colapsa las pistas vacías a tamaño 0 permitiendo que las columnas con contenido se expandan para ocupar todo el espacio sobrante.",
      "`auto-fit` solo funciona con texto, mientras que `auto-fill` solo admite imágenes.",
      "`auto-fill` requiere definir `grid-template-areas` obligatoriamente, a diferencia de `auto-fit`.",
      "`auto-fit` limita el número máximo de columnas a 12 según las directrices de Bootstrap."
    ],
    correctAnswerIndex: 0,
    explanation: "Con `auto-fill`, si hay espacio para 5 columnas de 200px pero solo 2 tienen elementos, reserva el espacio de las otras 3 vacías. Con `auto-fit`, esas 3 columnas vacías se colapsan a 0px y las 2 columnas existentes crecen proporcionalmente (vía `1fr`) para llenar el 100% del contenedor.",
    topic: "CSS Grid",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-08",
    collectionId: "html-css",
    question: "¿Qué permite la característica de 'Subgrid' (`grid-template-columns: subgrid`) en las especificaciones contemporáneas de CSS Grid?",
    options: [
      "Permite que un elemento hijo de un grid participe directamente y alinee sus propios hijos sobre las líneas y pistas de la cuadrícula de su elemento padre.",
      "Convierte automáticamente un grid de 2D en una disposición 3D con aceleración WebGL.",
      "Aplica estilos de bootstrap automáticamente a los componentes anidados.",
      "Descarga fuentes tipográficas en una cuadrícula paralela en segundo plano."
    ],
    correctAnswerIndex: 0,
    explanation: "Subgrid resuelve la limitación histórica donde los hijos de un grid item no podían alinearse con la cuadrícula global del padre, permitiendo layouts perfectamente alineados en tarjetas complejas con títulos, imágenes y botones de alturas variables.",
    topic: "CSS Grid Subgrid",
    difficulty: "avanzado"
  },
  {
    id: "htmlcss-09",
    collectionId: "html-css",
    question: "¿Por qué el pseudo-selector `:has()` de CSS es conocido formalmente como el 'Parent Selector' y qué capacidades desbloquea?",
    options: [
      "Permite seleccionar un elemento padre en función de los elementos hijos o hermanos posteriores que contiene o le suceden, posibilitando estilos condicionales sin necesidad de JavaScript.",
      "Obliga al elemento padre a heredar automáticamente todos los eventos de clic del elemento hijo.",
      "Convierte al elemento padre en un nodo Shadow DOM sellado.",
      "Elimina las propiedades de margin y padding del elemento seleccionado."
    ],
    correctAnswerIndex: 0,
    explanation: "`:has()` permite reglas como `article:has(img)` para aplicar estilos al artículo solo si contiene una imagen, o `form:has(:invalid)` para estilizar el formulario cuando hay campos no válidos, transformando radicalmente la arquitectura de estilos declarativa.",
    topic: "Selectores CSS Modernos",
    difficulty: "básico"
  },
  {
    id: "htmlcss-10",
    collectionId: "html-css",
    question: "En Responsive Web Design, ¿cuál es la ventaja arquitectónica de las 'Container Queries' (`@container`) frente a las tradicionales Media Queries (`@media`)?",
    options: [
      "Las Container Queries aplican estilos según las dimensiones del contenedor padre del componente, permitiendo componentes verdaderamente modulares y reutilizables en cualquier columna o sección sin depender del viewport global.",
      "Las Container Queries reducen a la mitad el tamaño del archivo CSS en el servidor.",
      "Las Media Queries solo funcionan en pantallas táctiles, mientras que las Container Queries son para ordenadores de escritorio.",
      "Las Container Queries compilan el código CSS a WebAssembly antes de su evaluación."
    ],
    correctAnswerIndex: 0,
    explanation: "Un componente de tarjeta puede requerir un diseño horizontal si se ubica en el área principal de 800px, pero vertical si se coloca en una barra lateral de 300px, independientemente de que el viewport del monitor sea de 1920px. Las container queries solucionan esto evaluando el contenedor.",
    topic: "Container Queries",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-11",
    collectionId: "html-css",
    question: "En los navegadores móviles contemporáneos, ¿qué problema resuelven las unidades de viewport `dvh` (dynamic viewport height), `svh` (small) y `lvh` (large) frente al tradicional `100vh`?",
    options: [
      "Evitan desbordamientos y saltos visuales de contenido causados por la barra de navegación o dirección del navegador móvil cuando se expande o se oculta dinámicamente al hacer scroll.",
      "Calculan la densidad de píxeles físicos de pantallas Retina para escalar vídeos 4K.",
      "Permiten sincronizar la orientación horizontal del teléfono con la brújula interna.",
      "Reducen el consumo de batería de la pantalla OLED a la mitad."
    ],
    correctAnswerIndex: 0,
    explanation: "Históricamente, `100vh` en iOS/Android tomaba la altura con la barra de navegación colapsada, provocando que los botones fijados al fondo quedaran cubiertos por la interfaz del navegador. `svh` asume la barra visible, `lvh` la barra oculta y `dvh` se ajusta en tiempo real.",
    topic: "Unidades Viewport Modernas",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-12",
    collectionId: "html-css",
    question: "En el Critical Rendering Path del motor del navegador, ¿cuáles son las fases secuenciales que transforman el código fuente en píxeles en pantalla?",
    options: [
      "Parsing HTML $\\to$ DOM Tree + CSSOM Tree $\\to$ Render Tree $\\to$ Layout (Reflow) $\\to$ Paint $\\to$ Composite.",
      "JavaScript $\\to$ WebGL Shader $\\to$ Rasterization $\\to$ V-Sync $\\to$ Canvas.",
      "Transpilación $\\to$ Minificación $\\to$ HTTP Caching $\\to$ DOMContentLoaded.",
      "CSS Linting $\\to$ AST Generation $\\to$ Bytecode Execution $\\to$ Frame Buffer."
    ],
    correctAnswerIndex: 0,
    explanation: "El navegador construye los árboles DOM y CSSOM, los combina en el Render Tree (solo nodos visibles), calcula posiciones geométricas precisas (Layout/Reflow), dibuja los píxeles por capas (Paint) y finalmente las combina en la GPU (Composite).",
    topic: "Critical Rendering Path",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-13",
    collectionId: "html-css",
    question: "¿Por qué para lograr animaciones fluidas a 60 FPS o 120 FPS se recomienda mutar exclusivamente las propiedades `transform` y `opacity`?",
    options: [
      "Porque son las únicas propiedades que pueden ser procesadas directamente por el Compositor en la GPU sin desencadenar las costosas fases de Layout (Reflow) ni Repaint en la CPU.",
      "Porque el consorcio W3C prohibió el uso de transiciones sobre propiedades de color.",
      "Porque `transform` y `opacity` no consumen memoria RAM en el dispositivo cliente.",
      "Porque estas dos propiedades detienen temporalmente la recolección de basura del motor V8."
    ],
    correctAnswerIndex: 0,
    explanation: "Mutar propiedades geométricas como `width`, `height`, `top` o `left` fuerza al navegador a recalcular el Layout de toda la página. Mutar `background-color` dispara Repaint. Pero `transform` y `opacity` se delegan al Compositor thread en GPU, logrando rendimiento libre de jank.",
    topic: "Rendimiento y Animaciones",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-14",
    collectionId: "html-css",
    question: "¿Qué optimización radical aporta la propiedad CSS `content-visibility: auto` en páginas con gran cantidad de contenido vertical (scroll infinito o documentos largos)?",
    options: [
      "Omite completamente el trabajo de renderizado (layout y paint) de los elementos que se encuentran fuera de la pantalla (off-screen) hasta que el usuario se aproxima a ellos mediante scroll.",
      "Comprime el código HTML de las secciones ocultas utilizando el algoritmo Gzip en tiempo de ejecución.",
      "Oculta el texto a los motores de búsqueda para acelerar la indexación SEO.",
      "Descarga las fuentes tipográficas en una sesión WebRTC paralela."
    ],
    correctAnswerIndex: 0,
    explanation: "`content-visibility: auto` permite al motor del navegador saltarse el renderizado y pintura de los elementos fuera del viewport (similar a lazy-loading pero para el DOM/CSSOM entero), mejorando drásticamente el First Contentful Paint y la interactividad.",
    topic: "Rendimiento CSS",
    difficulty: "avanzado"
  },
  {
    id: "htmlcss-15",
    collectionId: "html-css",
    question: "En accesibilidad web (a11y), ¿cuál es la diferencia entre los valores `polite` y `assertive` en el atributo `aria-live`?",
    options: [
      "`polite` espera a que el lector de pantalla termine de comunicar las tareas pendientes antes de anunciar la actualización; `assertive` interrumpe inmediatamente cualquier locución en curso para anunciar la novedad al usuario.",
      "`polite` solo lee mensajes en minúsculas, mientras que `assertive` requiere mayúsculas sostenidas.",
      "`assertive` genera un sonido audible en los altavoces mediante la Web Audio API.",
      "`polite` oculta la notificación visualmente a los usuarios videntes."
    ],
    correctAnswerIndex: 0,
    explanation: "`aria-live='polite'` se usa para cambios no críticos (e.g. paginación o filtros). `aria-live='assertive'` se reserva para alertas de alta severidad o errores que demandan atención inmediata (e.g. desconexión de red o pérdida de datos).",
    topic: "Accesibilidad (ARIA)",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-16",
    collectionId: "html-css",
    question: "¿Qué diferencia funcional existe entre `tabindex=\"0\"` y `tabindex=\"-1\"` en elementos HTML?",
    options: [
      "`tabindex=\"0\"` inserta el elemento en el orden secuencial de navegación natural por teclado; `tabindex=\"-1\"` permite que el elemento reciba foco programático (vía JavaScript con `.focus()`), pero lo excluye de la navegación secuencial con la tecla Tab.",
      "`tabindex=\"-1\"` desactiva completamente todos los eventos de ratón sobre el elemento.",
      "`tabindex=\"0\"` es obligatorio en todas las etiquetas `<a>` y `<button>` nativas para que funcionen.",
      "`tabindex=\"-1\"` oculta el elemento a lectores de pantalla y herramientas de accesibilidad."
    ],
    correctAnswerIndex: 0,
    explanation: "`tabindex=\"0\"` hace accesible por teclado un elemento interactivo custom (como un div estilizado). `tabindex=\"-1\"` es idóneo para modales, encabezados de error o contenedores a los que se transfiere el foco programáticamente.",
    topic: "Accesibilidad e Interacción",
    difficulty: "básico"
  },
  {
    id: "htmlcss-17",
    collectionId: "html-css",
    question: "Según las directrices WCAG 2.1 nivel AA, ¿cuál es la relación de contraste de color mínima exigida para texto normal (menor a 18pt o 14pt en negrita)?",
    options: [
      "4.5:1",
      "3:1",
      "7:1",
      "10:1"
    ],
    correctAnswerIndex: 0,
    explanation: "WCAG 2.1 Nivel AA exige al menos 4.5:1 de contraste para texto de tamaño regular y 3:1 para texto de gran tamaño o componentes de interfaz/gráficos. El nivel AAA eleva este requisito a 7:1 para texto normal.",
    topic: "Accesibilidad (WCAG)",
    difficulty: "básico"
  },
  {
    id: "htmlcss-18",
    collectionId: "html-css",
    question: "¿Cuál es la función del elemento `<picture>` frente a un simple `<img srcset=\"...\">` en diseño web adaptable?",
    options: [
      "Permite la 'Dirección de Arte' (Art Direction): servir imágenes con diferentes relaciones de aspecto o encuadres según media queries, además de ofrecer formatos modernos alternativos (AVIF/WebP) con fallback automático.",
      "Comprime las imágenes vectoriales SVG a formato binario base64 en tiempo real.",
      "Añade un marco decorativo con aceleración CSS 3D alrededor de la imagen.",
      "Reemplaza el uso de la etiqueta `<video>` para animaciones cortas."
    ],
    correctAnswerIndex: 0,
    explanation: "`<picture>` con elementos `<source media=\"...\">` permite adaptar el recorte o la composición visual de una foto (por ejemplo, primer plano cerrado en móviles y plano general panorámico en desktop), no solo el escalado de resolución que resuelve `srcset`.",
    topic: "HTML Semántico y Medios",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-19",
    collectionId: "html-css",
    question: "En la función CSS matemática `clamp(MIN, VAL, MAX)`, ¿cómo se evalúa el valor resultante?",
    options: [
      "Retorna `max(MIN, min(VAL, MAX))`, restringiendo el valor deseado a un rango comprendido estrictamente entre el mínimo y el máximo declarados.",
      "Promedia aritméticamente los tres valores y los redondea al píxel entero más cercano.",
      "Calcula la tangente hiperbólica de los tres argumentos.",
      "Aplica el valor máximo en monitores desktop y el valor mínimo en dispositivos móviles."
    ],
    correctAnswerIndex: 0,
    explanation: "`clamp()` es la herramienta canónica de tipografía y espaciado fluido (e.g. `font-size: clamp(1rem, 2.5vw, 2rem)`), evitando media queries al mantener el texto escalable entre límites estéticos seguros.",
    topic: "CSS Moderno y Tipografía Fluida",
    difficulty: "básico"
  },
  {
    id: "htmlcss-20",
    collectionId: "html-css",
    question: "¿Qué rol desempeña la media feature `@media (prefers-reduced-motion: reduce)` en la experiencia de usuario y accesibilidad?",
    options: [
      "Detecta si el usuario ha configurado en su sistema operativo la preferencia de minimizar animaciones no esenciales, permitiendo desactivar transiciones o reemplazarlas por fundidos discretos para prevenir cinetosis o mareos vestibulares.",
      "Reduce automáticamente la resolución de las imágenes para ahorrar batería en el dispositivo.",
      "Deshabilita el scroll táctil en pantallas de teléfonos móviles.",
      "Acelera la velocidad de las animaciones CSS a 200% para mejorar la productividad."
    ],
    correctAnswerIndex: 0,
    explanation: "Es una directriz crítica de accesibilidad para personas con trastornos vestibulares. Los desarrolladores responsables utilizan esta consulta para eliminar movimientos bruscos, paralajes o rotaciones pronunciadas.",
    topic: "Accesibilidad y Medios",
    difficulty: "básico"
  },
  {
    id: "htmlcss-21",
    collectionId: "html-css",
    question: "En el Flexbox Layout, ¿cuál es el algoritmo exacto mediante el cual `flex-shrink` distribuye el espacio negativo sobrante cuando los elementos desbordan el contenedor?",
    options: [
      "Distribuye la reducción de tamaño de forma ponderada proporcional al producto de su factor `flex-shrink` por su `flex-basis` original.",
      "Resta la misma cantidad exacta de píxeles a todos los elementos por igual sin importar su tamaño base.",
      "Reduce únicamente el último elemento de la fila hasta llegar a cero píxeles.",
      "Divide el espacio negativo entre el número de letras presentes en el elemento."
    ],
    correctAnswerIndex: 0,
    explanation: "A diferencia de `flex-grow` (que reparte espacio positivo en proporción directa a los factores de crecimiento), `flex-shrink` pondera el encogimiento multiplicando `shrink_ratio * basis`. Un elemento más grande absorbe proporcionalmente más reducción para evitar desproporciones estéticas.",
    topic: "Flexbox Layout",
    difficulty: "avanzado"
  },
  {
    id: "htmlcss-22",
    collectionId: "html-css",
    question: "¿Qué efecto produce aplicar la propiedad CSS `box-sizing: border-box` en contraposición al valor por defecto `content-box`?",
    options: [
      "El ancho (`width`) y alto (`height`) declarados en el elemento abarcan tanto el contenido como el `padding` y el `border`, evitando que el elemento crezca hacia afuera al agregar bordes o espaciado interno.",
      "Fuerza a que todos los bordes se rendericen con esquinas redondeadas de 8 píxeles.",
      "Impide que el elemento reciba eventos de teclado o foco visual.",
      "Desplaza los márgenes hacia el interior del contenedor eliminando el padding."
    ],
    correctAnswerIndex: 0,
    explanation: "Con `content-box`, un div con `width: 100px; padding: 10px; border: 2px solid;` ocupa 124px de ancho físico. Con `border-box`, ocupa exactamente los 100px especificados, recalculando el espacio interior del contenido a 76px.",
    topic: "Modelo de Caja (Box Model)",
    difficulty: "básico"
  },
  {
    id: "htmlcss-23",
    collectionId: "html-css",
    question: "¿Qué mecanismo introduce el pseudo-elemento `::slotted()` dentro del Shadow DOM de Web Components?",
    options: [
      "Permite aplicar estilos desde dentro del Shadow DOM a los elementos del árbol DOM exterior que han sido proyectados o insertados a través de un elemento `<slot>`.",
      "Borra permanentemente los estilos globales del documento principal.",
      "Copia el HTML proyectado al LocalStorage del navegador.",
      "Convierte el contenido en un iframe protegido contra Cross-Site Scripting."
    ],
    correctAnswerIndex: 0,
    explanation: "`::slotted(selector)` selecciona nodos de nivel superior asignados al slot. Nota importante: solo puede apuntar al elemento directo slotted, no a descendientes anidados dentro de dicho elemento.",
    topic: "Web Components y Shadow DOM",
    difficulty: "avanzado"
  },
  {
    id: "htmlcss-24",
    collectionId: "html-css",
    question: "En las Custom Properties (variables CSS), ¿cuál es la diferencia de comportamiento ante valores inválidos en tiempo de ejecución frente a propiedades CSS estándar?",
    options: [
      "Una variable inválida desencadena el comportamiento 'invalid at computed-value time', sustituyendo el valor por `unset` (que hereda si es heredable o vuelve al valor inicial del sistema) en lugar de recurrir al valor de la regla previa en la cascada.",
      "El navegador detiene el parseo del resto de la hoja de estilo CSS emitiendo un error fatal.",
      "Se asigna automáticamente el color rojo (`#ff0000`) a todos los elementos del cuerpo del documento.",
      "El motor del navegador reinicia la sesión del usuario recargando la página."
    ],
    correctAnswerIndex: 0,
    explanation: "En CSS tradicional, si se escribe `color: 12px;`, el parser lo descarta en tiempo de parseo y usa la regla anterior válida. Con variables (e.g. `color: var(--mi-tamano);`), la validación es tardía en tiempo de computación, por lo que la propiedad no puede recurrir a la cascada y toma el valor inicial/heredado.",
    topic: "CSS Custom Properties",
    difficulty: "avanzado"
  },
  {
    id: "htmlcss-25",
    collectionId: "html-css",
    question: "¿Cuál es la función semántica y técnica del elemento HTML `<template>`?",
    options: [
      "Contener fragmentos de marcado HTML que el navegador parsea y valida al cargar la página pero que no renderiza ni ejecuta (scripts e imágenes no se cargan) hasta que se clonan e insertan en el DOM activo mediante JavaScript.",
      "Definir el diseño de cabecera y pie de página de las hojas de estilo de impresión.",
      "Crear componentes reutilizables sin soporte de JavaScript mediante macros de C++.",
      "Generar tablas relacionales que se sincronizan directamente con servidores SQL."
    ],
    correctAnswerIndex: 0,
    explanation: "El contenido de un `<template>` reside en un `DocumentFragment` inerte: las imágenes no se descargan, el audio no suena y los scripts no corren hasta que el contenido es clonado (e.g. vía `document.importNode(template.content, true)`).",
    topic: "HTML Semántico y Plantillas",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-26",
    collectionId: "html-css",
    question: "¿Qué optimización y aislamiento ofrece la propiedad CSS `contain: layout paint;`?",
    options: [
      "Informa al navegador que el subárbol del elemento es independiente del resto del DOM, garantizando que los cálculos de geometría interna no afecten al exterior y que ningún descendiente se dibuje fuera de sus límites, optimizando el reflow.",
      "Bloquea la edición del código fuente en las herramientas de desarrollo de Chrome (DevTools).",
      "Fuerza a que todos los textos se rendericen utilizando fuentes monoespaciadas nativas.",
      "Convierte todas las peticiones fetch internas a conexiones cifradas con HTTPS."
    ],
    correctAnswerIndex: 0,
    explanation: "CSS Containment (`contain: layout paint style size`) crea fronteras de contención estrictas, permitiendo al motor de renderizado limitar el alcance de las operaciones de invalidación de layout y repintado a ese subárbol aislado.",
    topic: "Rendimiento y Contención",
    difficulty: "avanzado"
  },
  {
    id: "htmlcss-27",
    collectionId: "html-css",
    question: "¿Cuál es la distinción semántica entre los elementos HTML `<section>` y `<article>`?",
    options: [
      "`<article>` representa una composición autónoma y autocontenida que tiene sentido por sí misma fuera del contexto de la página (e.g. un post, widget, noticia o comentario); `<section>` representa una agrupación temática genérica de contenido que típicamente incluye un encabezado.",
      "`<article>` solo puede usarse una única vez por documento HTML, mientras que `<section>` admite repeticiones.",
      "`<section>` es un elemento puramente cosmético que reemplaza a `<div>`, careciendo de valor semántico.",
      "`<article>` requiere obligatoriamente una fecha de publicación mediante el atributo `datetime`."
    ],
    correctAnswerIndex: 0,
    explanation: "La prueba de fuego del W3C es la redistribución independiente: si el contenido puede ser extraído y republicado en un lector RSS o en otra web conservando su significado íntegro, es un `<article>`. Si es simplemente una sección temática de un todo mayor, es un `<section>`.",
    topic: "HTML Semántico",
    difficulty: "básico"
  },
  {
    id: "htmlcss-28",
    collectionId: "html-css",
    question: "En CSS Nesting nativo (anidamiento de estilos sin preprocesadores), ¿cuál es el significado del selector ampersand `&`?",
    options: [
      "Representa una referencia directa al selector padre exterior compilado, permitiendo concatenaciones o pseudo-clases como `&:hover` o `&.activo`.",
      "Ejecuta una operación lógica a nivel de bits sobre los colores hexadecimales.",
      "Indica que el bloque de reglas solo aplica a enlaces `<a href>` anidados.",
      "Importa un archivo SCSS externo mediante HTTP/2 Server Push."
    ],
    correctAnswerIndex: 0,
    explanation: "En la especificación estándar de CSS Nesting, `&` hace referencia al selector compuesto que envuelve al bloque actual, permitiendo sintaxis anidada limpia idéntica a la que históricamente requerían herramientas como Sass o Less.",
    topic: "CSS Moderno y Nesting",
    difficulty: "básico"
  },
  {
    id: "htmlcss-29",
    collectionId: "html-css",
    question: "¿Qué papel juega el atributo `rel=\"noopener noreferrer\"` en hipervínculos con `target=\"_blank\"`?",
    options: [
      "`noopener` previene que la nueva pestaña tenga acceso al objeto `window.opener` de la página de origen protegiendo contra ataques de reverse tabnabbing; `noreferrer` omite el envío de la cabecera HTTP `Referer` al destino.",
      "Duplica la velocidad de carga del sitio web de destino comprimiendo los paquetes TCP.",
      "Informa a Google Analytics que la navegación debe computarse como una conversión directa.",
      "Fuerza a que la nueva página se abra exclusivamente en modo incógnito."
    ],
    correctAnswerIndex: 0,
    explanation: "Sin `noopener`, la página enlazada puede ejecutar `window.opener.location = 'sitio_malicioso.html'`, redirigiendo la pestaña original de la víctima en segundo plano. Los navegadores modernos asumen `noopener` por defecto en `_blank`, pero declararlo explícitamente es una regla de oro de seguridad y compatibilidad.",
    topic: "HTML Seguridad y Enlaces",
    difficulty: "intermedio"
  },
  {
    id: "htmlcss-30",
    collectionId: "html-css",
    question: "En la técnica de animación de alto rendimiento FLIP (First, Last, Invert, Play) popularizada por Paul Lewis, ¿cuál es la esencia de la fase 'Invert'?",
    options: [
      "Invertir los colores del elemento utilizando la función `filter: invert(1)`.",
      "Calcular la diferencia geométrica de posición y escala entre el estado final ('Last') y el estado inicial ('First'), aplicando una transformación CSS negativa (`transform: translate(...) scale(...)`) para que el elemento aparente estar en su posición original de forma instantánea sin reflow.",
      "Ejecutar la animación en reversa desde el final hasta el principio.",
      "Invertir el orden de los nodos en el árbol DOM del navegador."
    ],
    correctAnswerIndex: 1,
    explanation: "FLIP calcula la posición inicial (First) y final tras el cambio en el DOM (Last), aplica un `transform` compensatorio para devolverlo visualmente al inicio (Invert) y luego remueve la transformación con una transición fluida (Play), logrando animaciones suaves a 60 FPS delegadas a la GPU.",
    topic: "Rendimiento y Técnica FLIP",
    difficulty: "avanzado"
  }
];
