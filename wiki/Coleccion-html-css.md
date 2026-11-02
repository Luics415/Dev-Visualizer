# 📘 [HTML] HTML y CSS

> **Semántica, cascade, layout, responsive y render del navegador.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `html-css` |
| **Grupo Arquitectónico** | [Diseño e interfaces](Grupo-Interfaces) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `html-css` |
| **Total de Conceptos** | **42 conceptos** |
| **Capítulos / Secciones** | **1 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/html-css)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/html-css-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (42)

### 📑 Sección: General (42 conceptos)

- **Anatomía del documento**  
  *Familia:* `anatomía del concepto`  
  DOCTYPE, html, head y body establecen el modo del navegador y separan metadatos del contenido visible.

- **HTML semántico**  
  *Familia:* `análisis y emisión`  
  Elementos como header, nav, main, article y footer describen la función del contenido.

- **Encabezados y texto**  
  *Familia:* `ecosistema coordinado`  
  Jerarquizan secciones y expresan párrafos, énfasis, citas y fragmentos de código con significado.

- **Enlaces y navegación**  
  *Familia:* `superficie de aplicación`  
  Un enlace relaciona recursos mediante href; la navegación agrupa destinos relevantes.

- **Imágenes responsivas**  
  *Familia:* `topología y tráfico`  
  img, picture, srcset y sizes permiten elegir formato y resolución según dispositivo y contexto.

- **Listas**  
  *Familia:* `acumulación de recursos`  
  ul, ol y dl representan colecciones sin orden, secuencias y pares término–descripción.

- **Tablas**  
  *Familia:* `consulta e índice`  
  Organizan datos bidimensionales mediante encabezados, filas y celdas asociadas.

- **Formularios**  
  *Familia:* `secuencia operativa`  
  Agrupan controles y envían pares nombre–valor con método, acción y codificación definidos.

- **Labels e inputs**  
  *Familia:* `ciclo de vida`  
  label conecta texto con un control; type modifica teclado, validación y comportamiento nativo.

- **Validación nativa**  
  *Familia:* `validación y decisión`  
  required, pattern, min, max y constraint validation detectan entradas inválidas antes del envío.

- **Botones**  
  *Familia:* `contratos coordinados`  
  button puede enviar, reiniciar o ejecutar una acción; su type evita comportamientos ambiguos dentro de formularios.

- **Atributos data-***  
  *Familia:* `configuración declarativa`  
  Permiten asociar metadatos privados al elemento sin inventar atributos inválidos.

- **Metadatos y SEO**  
  *Familia:* `tabla de estados`  
  title, description, canonical, robots y datos sociales describen el documento fuera del contenido principal.

- **Accesibilidad y ARIA**  
  *Familia:* `diagnóstico operativo`  
  Nombre, rol, estado, foco y navegación por teclado hacen que la interfaz pueda operarse de distintas formas.

- **DOM**  
  *Familia:* `aislamiento sobre host`  
  El parser transforma tokens HTML en un árbol de nodos que scripts, estilos y APIs pueden consultar.

- **Parser y recuperación**  
  *Familia:* `flujo de transformación`  
  El navegador procesa HTML como un flujo y aplica reglas de corrección cuando el marcado está incompleto o mal anidado.

- **Sintaxis y selectores CSS**  
  *Familia:* `capas internas`  
  Una regla relaciona un selector con declaraciones que participan en la resolución de estilos.

- **Combinadores**  
  *Familia:* `máquina de estados`  
  Descendiente, hijo, hermano adyacente y hermano general expresan relaciones entre elementos.

- **Pseudo-clases y pseudo-elementos**  
  *Familia:* `árbol de recursos`  
  Seleccionan estados o partes generadas sin añadir nodos extra al HTML.

- **Cascade**  
  *Familia:* `planificación de trabajo`  
  Origen, importancia, capas, especificidad y orden deciden qué declaración gana para cada propiedad.

- **Specificity**  
  *Familia:* `cola y consumidor`  
  Compara pesos de IDs, clases/atributos/pseudo-clases y tipos para desempatar reglas del mismo nivel.

- **Inheritance**  
  *Familia:* `contratos coordinados`  
  Algunas propiedades pasan del padre a descendientes; otras comienzan con su valor inicial.

- **Box model**  
  *Familia:* `flujo de ejecución`  
  Cada caja combina content, padding, border y margin; box-sizing cambia cómo se calcula el tamaño declarado.

- **Unidades y sizing**  
  *Familia:* `ida y vuelta`  
  px, %, em, rem, viewport y unidades de contenedor responden a referencias distintas.

- **Display y formatting contexts**  
  *Familia:* `análisis y emisión`  
  block, inline, flex, grid y flow-root cambian cómo una caja participa y organiza a sus hijos.

- **Normal flow**  
  *Familia:* `propagación de eventos`  
  Sin posicionamiento especial, bloques, líneas y contenido participan en un flujo predecible y adaptable.

- **Positioning**  
  *Familia:* `superficie de aplicación`  
  relative, absolute, fixed y sticky usan referencias y efectos distintos sobre el flujo.

- **Stacking contexts y z-index**  
  *Familia:* `jerarquía y dependencias`  
  Las cajas se pintan dentro de contextos independientes; un z-index grande no escapa del contexto padre.

- **Overflow**  
  *Familia:* `acumulación de recursos`  
  Decide cómo una caja trata contenido excedente y también puede crear un contenedor de scroll.

- **Flexbox**  
  *Familia:* `memoria intermedia`  
  Distribuye elementos principalmente en un eje mediante base, crecimiento, reducción, alineación y wrapping.

- **CSS Grid**  
  *Familia:* `planificación de trabajo`  
  Define filas y columnas explícitas y coloca elementos sobre una cuadrícula bidimensional.

- **Responsive design**  
  *Familia:* `máquina de estados`  
  Combina layouts fluidos, límites, contenido flexible y breakpoints definidos por necesidades reales.

- **Media queries**  
  *Familia:* `anatomía del concepto`  
  Aplican reglas según características del viewport, dispositivo o preferencias del usuario.

- **Container queries**  
  *Familia:* `aislamiento sobre host`  
  Permiten que un componente responda al espacio de su contenedor en vez del viewport completo.

- **Tipografía**  
  *Familia:* `consulta e índice`  
  Familia, tamaño, peso, altura de línea, medida y espaciado construyen ritmo y legibilidad.

- **Color y fondos**  
  *Familia:* `flujo de transformación`  
  Color, gradientes, imágenes y blending forman capas visuales con requisitos de contraste.

- **Custom properties**  
  *Familia:* `ecosistema coordinado`  
  Variables CSS participan en la cascade y permiten construir tokens y valores contextuales.

- **Logical properties**  
  *Familia:* `evidencia y latencia`  
  inline/block, start/end y propiedades lógicas adaptan layout a distintas direcciones de escritura.

- **Transforms**  
  *Familia:* `cola y consumidor`  
  Trasladan, rotan, escalan o deforman la representación sin recalcular el flujo normal.

- **Transitions**  
  *Familia:* `secuencia operativa`  
  Interpolan propiedades entre un estado anterior y otro nuevo con duración y curva definidas.

- **Keyframe animations**  
  *Familia:* `diagnóstico operativo`  
  Definen una línea de tiempo autónoma con estados intermedios, repetición, dirección y fill mode.

- **Aspect ratio y object-fit**  
  *Familia:* `topología y tráfico`  
  Reservan proporción y controlan cómo una imagen o video ocupa su caja sin deformarse.




---
[← Volver al Inicio](Home) | [Ver Grupo: Diseño e interfaces](Grupo-Interfaces) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
