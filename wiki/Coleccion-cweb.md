# 📘 [CWEB] CWEB

> **Programación literaria con CTANGLE, CWEAVE, C y TeX.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `cweb` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `histórico` |
| **Tema Visual** | `cweb` |
| **Total de Conceptos** | **42 conceptos** |
| **Capítulos / Secciones** | **7 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/cweb)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/cweb-en-accion)**


## 🔬 Caso Práctico en Acción: CWEB en acción

> **Caso integrado · Parser explicado y compilado:** Un pequeño parser de comandos se diseña como narrativa: invariantes, fragmentos y ejemplos producen código C y un PDF indexado desde la misma fuente.  
> La salida ejecutable y la explicación comparten origen; un change file adapta la plataforma sin bifurcar el documento principal.

### Fases de Ejecución:
1. **Plantear el contrato** (La prosa define intención): `@* Command parser.` → problema explicado. *La narrativa establece qué debe demostrar el código antes de presentar detalles.*
2. **Nombrar fragmentos** (La estructura sigue ideas): `@<Read one command@>=` → programa compuesto. *Los nombres sustituyen comentarios vagos por unidades conectadas.*
3. **Implementar scanner** (Código dentro de una sección): `while ((c=getchar()) != EOF)` → entrada tokenizada. *El código queda junto a la explicación de su invariante.*
4. **Tangle a C** (El compilador recibe orden técnico): `ctangle parser.w parser.c` → fuente compilable. *CTANGLE reorganiza sin cambiar la fuente literaria.*
5. **Encontrar una divergencia** (El change file ya no coincide): `Change file entry did not match` → cambio rechazado. *Un fallo explícito evita aplicar una adaptación en el lugar equivocado.*
6. **Actualizar la variante** (Más contexto, cambio mínimo): `@x old @y new @z` → portabilidad restaurada. *El change file expresa diferencia sin copiar todo el programa.*
7. **Weave a TeX** (La segunda salida explica): `cweave parser.w parser.tex` → documento navegable. *CWEAVE usa la misma estructura para producir una lectura técnica.*
8. **Verificar ambas salidas** (Build y ejemplos cierran el ciclo): `cc parser.c && ./parser < cases` → programa literario reproducible. *La explicación es parte del artefacto y se valida junto al ejecutable.*


---

## 📚 Desglose Exhaustivo de Conceptos (42)

### 📑 Sección: El programa como obra literaria humana (6 conceptos)

- **Filosofía de la programación literaria**  
  *Familia:* `secuencia operativa`  
  Considera al programador como ensayista que explica algoritmos a personas.

- **Dualidad fuente única (.w)**  
  *Familia:* `consulta e índice`  
  Un único documento contiene tanto la explicación formal como la implementación ejecutable.

- **Inversión de orden estructural**  
  *Familia:* `mapa de memoria`  
  Permite presentar conceptos según la comprensión humana sin restricciones de compilación.

- **Prosa intercalada y tipografía**  
  *Familia:* `tejido literario`  
  Aprovecha TeX para diagramas matemáticos, notas históricas e invariantes formales.

- **Fragmentos nombrados como abstracción**  
  *Familia:* `ciclo de vida`  
  Reemplaza comentarios vagos por fragmentos descriptivos enlazados explícitamente.

- **Indexación automática de identificadores**  
  *Familia:* `consulta e índice`  
  Genera un índice exhaustivo de variables y funciones sin esfuerzo manual.


### 📑 Sección: Estructura de secciones y fragmentos nombrados (6 conceptos)

- **Secciones numeradas automáticamente**  
  *Familia:* `evidencia y latencia`  
  Divide el texto en unidades lógicas referenciables en citas y discusiones.

- **Sintaxis @<Fragmento@>=**  
  *Familia:* `ciclo de vida`  
  Define bloques de código nombrados que pueden extenderse en cualquier punto del texto.

- **Fragmentos acumulativos**  
  *Familia:* `flujo de interfaz`  
  Permite agregar líneas a un fragmento previo conservando la cohesión explicativa.

- **Secciones estrella @* (capítulos)**  
  *Familia:* `superficie de aplicación`  
  Crea encabezados jerárquicos mayores para estructurar programas extensos.

- **Fragmentos sin nombre @c**  
  *Familia:* `ciclo de vida`  
  Declara el punto de inicio de código C no encapsulado dentro de fragmentos nombrados.

- **Comentarios y texto verbatim @=**  
  *Familia:* `tejido literario`  
  Incrusta caracteres especiales sin que el formateador los interprete como órdenes.


### 📑 Sección: CTANGLE y reorganización para el compilador (6 conceptos)

- **Proceso de Tangling**  
  *Familia:* `planificación de trabajo`  
  Reorganiza recursivamente los fragmentos nombrados para generar una unidad de código C válida.

- **Directivas #line de sincronización**  
  *Familia:* `cola y consumidor`  
  Inserta marcas de línea para que advertencias y depuradores apunten al archivo .w original.

- **Eliminación de prosa explicativa**  
  *Familia:* `mapa de memoria`  
  Descarta todo texto narrativo para entregar al compilador código puro y sin sobrecoste.

- **Manejo de macros de preprocesador**  
  *Familia:* `análisis y emisión`  
  Expande directivas @d para sustitución constante y macros simples en tangling.

- **Soporte para código C++ (@+ y @-)**  
  *Familia:* `validación y decisión`  
  Controla indentación y convenciones sintácticas específicas de clases y templates.

- **Automatización en Makefiles y build systems**  
  *Familia:* `flujo de transformación`  
  Coordina CTANGLE como paso previo en la cadena de compilación ordinaria.


### 📑 Sección: CWEAVE y composición tipográfica con TeX (6 conceptos)

- **Proceso de Weaving**  
  *Familia:* `planificación de trabajo`  
  Traduce la narrativa y el código en un documento TeX tipográficamente enriquecido.

- **Pretty printing automático**  
  *Familia:* `jerarquía y dependencias`  
  Resalta palabras clave, identificadores y operadores con fuentes y estilos diferenciados.

- **Referencias cruzadas de fragmentos**  
  *Familia:* `ciclo de vida`  
  Enumera en cada fragmento las secciones donde se define y los lugares donde se invoca.

- **Construcción de tablas de contenido**  
  *Familia:* `consulta e índice`  
  Genera el índice temático de capítulos y secciones del programa.

- **El archivo de formato cwebmac.tex**  
  *Familia:* `árbol de recursos`  
  Proporciona las macros de diseño que definen márgenes, cabeceras y fuentes del libro.

- **Generación de PDF interactivo**  
  *Familia:* `flujo de transformación`  
  Produce hipervínculos navegables entre índices, definiciones y usos con pdfTeX.


### 📑 Sección: Change files y mantenimiento sin bifurcación (6 conceptos)

- **El concepto de change file (.ch)**  
  *Familia:* `tejido literario`  
  Registra modificaciones locales de plataforma sin alterar el documento base original.

- **Bloques de reemplazo @x, @y, @z**  
  *Familia:* `pasaporte del artefacto`  
  Define el fragmento original a reemplazar (@x..@y) y el contenido nuevo (@y..@z).

- **Validación estricta de contexto**  
  *Familia:* `configuración declarativa`  
  Verifica que el bloque original coincida carácter por carácter antes de aplicar el cambio.

- **Capas de adaptación multiplataforma**  
  *Familia:* `matriz de señales`  
  Mantiene versiones de Unix, Windows o hardware especial como archivos separados.

- **Facilidad de actualización del original**  
  *Familia:* `capas internas`  
  Permite actualizar el archivo .w principal aplicando los mismos change files.

- **Auditoría transparente de parches**  
  *Familia:* `despacho de runtime`  
  Hace visible qué cambios específicos se requirieron para adaptar el programa.


### 📑 Sección: Control de macros, índices y referencias cruzadas (6 conceptos)

- **Directiva de definición @d**  
  *Familia:* `análisis y emisión`  
  Crea constantes y macros simbólicas documentadas con precisión tipográfica.

- **Directiva de formato @f**  
  *Familia:* `consulta e índice`  
  Enseña a CWEAVE a tratar identificadores nuevos como palabras clave de control.

- **Exclusión de términos del índice @!**  
  *Familia:* `jerarquía y dependencias`  
  Marca variables irrelevantes para mantener el índice analítico enfocado.

- **Citas tipográficas en prosa |variable|**  
  *Familia:* `matriz de señales`  
  Incrusta identificadores formateados dentro del texto explicativo normal.

- **Manejo de caracteres especiales TeX**  
  *Familia:* `telar relacional`  
  Controla secuencias de escape para barras invertidas, llaves y símbolos matemáticos.

- **Garantía de completitud del índice**  
  *Familia:* `consulta e índice`  
  Demuestra que ningún identificador escapa a la trazabilidad del documento final.


### 📑 Sección: Depuración literaria y legado en documentación (6 conceptos)

- **Depuración con LLDB y GDB sobre .w**  
  *Familia:* `configuración declarativa`  
  Navega el código fuente original gracias a los mapeos generados por CTANGLE.

- **Pruebas de software literarias**  
  *Familia:* `tejido literario`  
  Integra casos de prueba y aserciones dentro de la misma narrativa que describe los algoritmos.

- **CWEB frente a herramientas docgen (Doxygen)**  
  *Familia:* `análisis y emisión`  
  Distingue la narrativa estructural de comentarios extraídos de cabeceras.

- **CWEB frente a Notebooks modernos (Jupyter)**  
  *Familia:* `configuración declarativa`  
  Compara el libro imprimible reproducible frente a celdas interactivas.

- **Mantenibilidad a largo plazo**  
  *Familia:* `mapa de memoria`  
  Demuestra cómo programas escritos en CWEB siguen siendo legibles y compilables décadas después.

- **El legado de Donald Knuth**  
  *Familia:* `jerarquía y dependencias`  
  Valora el impacto de la programación literaria en TeX, METAFONT y la ingeniería de software.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Literate Programming: fundamentos y programas de ejemplo](https://www-cs-faculty.stanford.edu/~knuth/lp.html)** (`book` | Nivel: `beginner`): Introducción al enfoque literario que fundamenta CWEB, acompañada por los programas de ejemplo del libro.
- **[CTAN package: CWEB](https://ctan.org/pkg/cweb)** (`reference` | Nivel: `intermediate`): 
- **[CWEAVE documentado desde su propio programa literario](https://mirrors.ctan.org/web/c_cpp/cweb/cweave.w)** (`reference` | Nivel: `advanced`): Fuente primaria en formato .w para estudiar secciones, change files y la generación de documentación mediante CWEAVE.


---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
