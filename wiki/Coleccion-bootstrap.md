# Bootstrap (BS)

> **Grid, utilidades, componentes, Sass, accesibilidad y personalización.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `bootstrap` |
| **Grupo Arquitectonico** | [Diseño e interfaces](Grupo-Interfaces) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `bootstrap` |
| **Total de Conceptos** | **55 conceptos** |
| **Capitulos / Secciones** | **11 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/bootstrap)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/bootstrap-en-accion)


## Estudio de Caso Practico: Bootstrap en acción

> **Caso integrado · Consola responsive y accesible:** Una consola operativa debe funcionar desde móvil hasta escritorio, aceptar un tema propio y conservar navegación, tabla y diálogo accesibles sin cargar todo el framework.  
> El resultado usa el grid y los plugins como infraestructura, mientras semántica, tokens, estados y pruebas responden al producto real.

### Fases de Ejecucion:
1. **Inventariar la pantalla** (Contenido antes que columnas): `nav · summary · filters · table` -> jerarquía acordada. *El grid se decide después de comprender contenido y orden.*
2. **Configurar tokens** (Marca sobre variables): `$primary + $spacers + $border-radius` -> tema coherente. *Personalizar en la fuente evita una larga capa de overrides.*
3. **Construir mobile-first** (Una columna como base): `container-fluid → row → col-lg` -> layout adaptable. *Cada breakpoint responde a un conflicto de contenido observable.*
4. **Componer filtros** (Labels y grupos reales): `form-label + input-group` -> formulario comprensible. *La clase visual acompaña un contrato semántico válido.*
5. **Encontrar overflow** (La tabla empuja la página): `min-width: 58rem` -> fallo localizado. *La tabla necesita su propio contexto de scroll, no ensanchar el documento.*
6. **Encapsular la tabla** (Scroll donde corresponde): `.table-responsive + caption` -> móvil recuperado. *La recuperación mantiene acceso a todas las columnas sin romper el resto del layout.*
7. **Cablear componentes** (Un plugin, un estado): `Modal.getOrCreateInstance(node)` -> interacción estable. *La API de instancia evita inicializaciones y listeners duplicados.*
8. **Medir el paquete** (Solo lo utilizado): `sass partials + ESM plugins` -> consola lista. *El build final conserva accesibilidad y diseño mientras elimina trabajo innecesario.*


---

## Catalogo Sistematico de Conceptos (55)

### Seccion: Base y configuración (5 conceptos)

- **Instalación modular**  
  *Familia:* `flujo de interfaz`  
  Elige paquete completo o imports parciales según el build y el peso aceptable.

- **Reboot**  
  *Familia:* `superficie de aplicación`  
  Normaliza estilos del navegador conservando una base opinada.

- **Color modes**  
  *Familia:* `contratos coordinados`  
  Aplica temas mediante atributos y variables sin duplicar cada componente.

- **Breakpoints**  
  *Familia:* `flujo de interfaz`  
  Define umbrales mobile-first para cambios estructurales, no modelos de dispositivo.

- **Containers**  
  *Familia:* `superficie de aplicación`  
  Centra y limita contenido mientras responde al ancho disponible.


### Seccion: Grid y layout (5 conceptos)

- **Rows y columns**  
  *Familia:* `contratos coordinados`  
  Distribuye doce unidades con gutters y wrapping controlado.

- **Grid responsive**  
  *Familia:* `flujo de interfaz`  
  Cambia spans y orden a partir de cada breakpoint.

- **Gutters**  
  *Familia:* `superficie de aplicación`  
  Separa contenido mediante variables y márgenes compensados.

- **Display utilities**  
  *Familia:* `contratos coordinados`  
  Alterna modos de layout sin ocultar información necesaria a lectores de pantalla.

- **Flex y gap**  
  *Familia:* `flujo de interfaz`  
  Alinea, ordena y espacia elementos con utilidades coherentes.


### Seccion: Utilidades y tokens (5 conceptos)

- **Spacing utilities**  
  *Familia:* `superficie de aplicación`  
  Aplica escala de margen y padding sin inventar valores aislados.

- **Sizing y position**  
  *Familia:* `contratos coordinados`  
  Controla dimensiones y colocación con atención al overflow.

- **Typography utilities**  
  *Familia:* `flujo de interfaz`  
  Ajusta jerarquía visual sin cambiar la semántica del elemento.

- **Utility API**  
  *Familia:* `superficie de aplicación`  
  Genera familias propias a partir del mapa de utilidades de Sass.

- **CSS variables**  
  *Familia:* `contratos coordinados`  
  Modifica tokens globales o locales en runtime y por color mode.


### Seccion: Componentes y formularios (5 conceptos)

- **Buttons y estados**  
  *Familia:* `flujo de interfaz`  
  Distingue acción, selección, disabled y loading con semántica adecuada.

- **Navbar y offcanvas**  
  *Familia:* `superficie de aplicación`  
  Reorganiza navegación sin perder foco, nombre o acceso por teclado.

- **Cards y composition**  
  *Familia:* `contratos coordinados`  
  Combina piezas flexibles sin convertir todo contenido en una tarjeta.

- **Forms y validation**  
  *Familia:* `flujo de interfaz`  
  Asocia labels, ayuda y mensajes además de estilos valid e invalid.

- **Tables y responsive wrapper**  
  *Familia:* `superficie de aplicación`  
  Permite desplazamiento local sin romper el ancho de toda la página.


### Seccion: Plugins y conducta (5 conceptos)

- **Data attributes**  
  *Familia:* `contratos coordinados`  
  Configura conducta declarativa sin handlers duplicados.

- **Collapse y accordion**  
  *Familia:* `flujo de interfaz`  
  Conserva relación entre control, panel y estado expandido.

- **Modal y focus**  
  *Familia:* `superficie de aplicación`  
  Gestiona apertura, foco, Escape, backdrop y retorno al disparador.

- **Dropdown y Popper**  
  *Familia:* `contratos coordinados`  
  Posiciona menús y soporta teclado según el patrón elegido.

- **Eventos de plugins**  
  *Familia:* `flujo de interfaz`  
  Sincroniza lógica de aplicación en puntos antes y después de cada transición.


### Seccion: Personalización y producción (5 conceptos)

- **Sass maps**  
  *Familia:* `superficie de aplicación`  
  Cambia escalas, colores y breakpoints antes de generar CSS.

- **Theming por componente**  
  *Familia:* `contratos coordinados`  
  Acota variables para crear variantes sin especificidad creciente.

- **Accesibilidad**  
  *Familia:* `flujo de interfaz`  
  Valida contraste, semántica, foco y contenido porque una clase no garantiza conformidad.

- **Tree shaking de JavaScript**  
  *Familia:* `superficie de aplicación`  
  Importa plugins necesarios y sus dependencias explícitas.

- **CSS crítico y peso**  
  *Familia:* `contratos coordinados`  
  Mide cobertura, purga con cuidado y evita borrar clases construidas dinámicamente.


### Seccion: Componentes complejos y navegación (5 conceptos)

- **List groups y action items**  
  *Familia:* `flujo de interfaz`  
  Combina listas estructuradas con enlaces interactivos, badges y selección múltiple.

- **Navs, tabs y pills**  
  *Familia:* `superficie de aplicación`  
  Conecta navegación en pestañas accesibles con soporte completo para roles tablist y flechas de teclado.

- **Pagination y estados activos**  
  *Familia:* `máquina de estados`  
  Controla paginación responsive con marcadores numéricos, flechas anterior/siguiente y aria-disabled.

- **Breadcrumbs y migas de pan**  
  *Familia:* `flujo de interfaz`  
  Expone jerarquía de navegación actual mediante listas ordenadas con separadores CSS.

- **Badges y contadores numéricos**  
  *Familia:* `análisis y emisión`  
  Destaca estados y notificaciones numéricas respetando escala tipográfica y contraste.


### Seccion: Tipografía, tablas y utilidades visuales (5 conceptos)

- **Lead text y display headings**  
  *Familia:* `tejido literario`  
  Aplica jerarquía editorial mediante clases display-1 a display-6 y párrafos destacados.

- **Blockquotes y figuras**  
  *Familia:* `jerarquía y dependencias`  
  Estructura citas semánticas con atributos de autoría y figuras con pie de foto responsive.

- **Table striping, hover y borderless**  
  *Familia:* `matriz de señales`  
  Personaliza tablas con alternancia de filas, iluminación hover y bordes temáticos.

- **Borders, shadows y rounded**  
  *Familia:* `análisis y emisión`  
  Modifica radios de curvatura, elevación mediante sombras y bordes coloreados contextuales.

- **Text truncation y ratios de aspecto**  
  *Familia:* `tejido literario`  
  Corta texto con elipsis en una línea y mantiene proporciones 16:9 o 4:3 en videos embebidos.


### Seccion: Formularios avanzados y controles flotantes (5 conceptos)

- **Floating labels**  
  *Familia:* `consulta e índice`  
  Eleva etiquetas hacia el borde superior al recibir foco sin desalinear la línea base del input.

- **Input groups con botones y dropdowns**  
  *Familia:* `telar relacional`  
  Concatena prefijos, sufijos, selectores y acciones en un único bloque visual continuo.

- **Checkboxes, switches y radios personalizados**  
  *Familia:* `flujo de transformación`  
  Reemplaza controles nativos por versiones estilizadas con foco teclado nítido.

- **Range sliders y date pickers**  
  *Familia:* `consulta e índice`  
  Controla entradas continuas con controles deslizantes y selectores temporales accesibles.

- **Validation feedback animado**  
  *Familia:* `validación y decisión`  
  Muestra mensajes de éxito y advertencia con iconos SVG dinámicos y transiciones suaves.


### Seccion: Arquitectura Sass y compilación moderna (5 conceptos)

- **Variables SCSS y mapas de color**  
  *Familia:* `mapa de memoria`  
  Sobrescribe valores predeterminados antes de importar el núcleo para compilar hojas ligeras.

- **Funciones de color y contraste**  
  *Familia:* `análisis y emisión`  
  Calcula automáticamente colores de texto óptimos según la luminancia del fondo primario.

- **Custom utility generator**  
  *Familia:* `validación y decisión`  
  Crea clases de utilidad a medida usando la macro generate-utility de Bootstrap Sass.

- **CSS custom properties a nivel de componente**  
  *Familia:* `mapa de memoria`  
  Inyecta variables dinámicas por componente para alternar temas sin recompilar Sass.

- **PurgeCSS y optimización de entrega**  
  *Familia:* `secuencia operativa`  
  Elimina selectores CSS no utilizados en plantillas HTML durante el empaquetado de producción.


### Seccion: Accesibilidad y patrones interactivos (5 conceptos)

- **Focus visible y focus-ring**  
  *Familia:* `evidencia y latencia`  
  Aplica anillos de enfoque contrastados para navegación con teclado sin ensuciar clics de ratón.

- **Visually-hidden y screen readers**  
  *Familia:* `consulta e índice`  
  Oculta información visualmente conservándola disponible para lectores de pantalla.

- **Tooltips y Popovers con Popper.js**  
  *Familia:* `matriz de señales`  
  Gestiona bocadillos informativos flotantes con colisiones automáticas y retraso al hover.

- **Alerts con cierre dinámico**  
  *Familia:* `evidencia y latencia`  
  Emite notificaciones transitorias con botones de descarte que gestionan foco y live regions.

- **Spinners y placeholders de carga (Skeletons)**  
  *Familia:* `consulta e índice`  
  Simula esqueletos de contenido durante la espera de datos para mitigar saltos de layout.



## Referencias Bibliograficas y Documentacion Oficial
- **[Bootstrap con Vite: guía inicial](https://getbootstrap.com/docs/5.3/getting-started/vite/)** (`tutorial` | Nivel: `beginner`): 
- **[Bootstrap Grid system](https://getbootstrap.com/docs/5.3/layout/grid/)** (`official-docs` | Nivel: `intermediate`): 
- **[Customize Bootstrap with Sass](https://getbootstrap.com/docs/5.3/customize/sass/)** (`official-docs` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Diseño e interfaces](Grupo-Interfaces) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
