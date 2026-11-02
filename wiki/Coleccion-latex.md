# LaTeX (TeX)

> **Composición, estructura, referencias, matemáticas, paquetes, builds y publicación.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `latex` |
| **Grupo Arquitectonico** | [Infraestructura y entrega](Grupo-Delivery) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `cweb` |
| **Total de Conceptos** | **95 conceptos** |
| **Capitulos / Secciones** | **15 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/latex)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/latex-en-accion)


## Estudio de Caso Practico: Compilar un informe técnico trazable

> **Caso integrado de LaTeX:** Un informe integra ecuaciones, figuras y bibliografía; una referencia rota detiene la publicación y el pipeline recupera auxiliares y dependencias.  
> El PDF final conserva fuente, versión del motor, licencias de figuras, referencias resueltas y log sin errores críticos.

### Fases de Ejecucion:
1. **Estructurar fuente** (Compilar un informe técnico trazable: etapa 1 de 5): `\documentclass{article}
\begin{document}...` -> Documento válido. *La etapa conserva un contrato explícito para que el siguiente paso de LaTeX no dependa de supuestos ocultos.*
2. **Resolver referencias** (Compilar un informe técnico trazable: etapa 2 de 5): `\label{fig:atlas} ... \ref{fig:atlas}` -> Navegación coherente. *La etapa conserva un contrato explícito para que el siguiente paso de LaTeX no dependa de supuestos ocultos.*
3. **Detectar cita ausente** (Compilar un informe técnico trazable: etapa 3 de 5): `\cite{knuth1984} // undefined` -> Publicación bloqueada. *El caso hace visible el fallo de LaTeX; no continúa como si la evidencia fuera válida.*
4. **Restaurar bibliografía** (Compilar un informe técnico trazable: etapa 4 de 5): `latexmk -pdf informe.tex` -> Grafo recuperado. *La recuperación de LaTeX corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Auditar artefacto** (Compilar un informe técnico trazable: etapa 5 de 5): `latexmk -C && latexmk -pdf -halt-on-error` -> Informe reproducible. *La etapa conserva un contrato explícito para que el siguiente paso de LaTeX no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (95)

### Seccion: Documento mínimo (5 conceptos)

- **Clase**  
  *Familia:* `tejido literario`  
  Clase procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Preámbulo**  
  *Familia:* `configuración declarativa`  
  Para entender Preámbulo, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Estructura**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Estructura recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Texto y caracteres**  
  *Familia:* `tejido literario`  
  Texto y caracteres conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Compilación**  
  *Familia:* `configuración declarativa`  
  En Compilación, texto fuente, contexto léxico y reglas del lenguaje ingresa al flujo donde reconoce estructura, comprueba contratos y produce una representación ejecutable para consolidar significado bien formado con errores localizados.


### Seccion: Motor de composición (5 conceptos)

- **Macros**  
  *Familia:* `análisis y emisión`  
  En Macros, texto fuente, contexto léxico y reglas del lenguaje ingresa al flujo donde reconoce estructura, comprueba contratos y produce una representación ejecutable para consolidar significado bien formado con errores localizados.

- **Expansión**  
  *Familia:* `tejido literario`  
  La función de Expansión parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Cajas y glue**  
  *Familia:* `configuración declarativa`  
  Cajas y glue estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Saltos de página**  
  *Familia:* `análisis y emisión`  
  El recorrido de Saltos de página toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Archivos auxiliares**  
  *Familia:* `tejido literario`  
  Archivos auxiliares procesa datos identificables junto con esquema, restricciones y procedencia: valida, representa y recorre cada valor preservando relaciones para entregar información consultable con integridad y significado estables.


### Seccion: Trabajo técnico (5 conceptos)

- **Matemáticas**  
  *Familia:* `configuración declarativa`  
  El recorrido de Matemáticas toma una instancia acotada, sus invariantes y una medida de costo. Posteriormente explora estados manteniendo la propiedad que garantiza corrección para validar una solución acompañada de complejidad y límites conocidos.

- **Tablas y figuras**  
  *Familia:* `análisis y emisión`  
  Tablas y figuras procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Referencias cruzadas**  
  *Familia:* `tejido literario`  
  Para entender Referencias cruzadas, se delimita valores con representación, dirección y tiempo de vida definidos. La operación reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime hasta producir estado accesible sin referencias colgantes ni corrupción.

- **Bibliografía**  
  *Familia:* `configuración declarativa`  
  El mecanismo de Bibliografía recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Índices**  
  *Familia:* `análisis y emisión`  
  Índices conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.


### Seccion: Diagnóstico (5 conceptos)

- **Errores y warnings**  
  *Familia:* `evidencia y latencia`  
  Errores y warnings conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Overfull boxes**  
  *Familia:* `secuencia operativa`  
  En Overfull boxes, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Paquetes incompatibles**  
  *Familia:* `tabla de estados`  
  La función de Paquetes incompatibles parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Logs**  
  *Familia:* `evidencia y latencia`  
  Logs estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Ejemplo mínimo**  
  *Familia:* `secuencia operativa`  
  El recorrido de Ejemplo mínimo toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### Seccion: Producción (5 conceptos)

- **pdfLaTeX XeLaTeX LuaLaTeX**  
  *Familia:* `tejido literario`  
  El mecanismo de pdfLaTeX XeLaTeX LuaLaTeX recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Fuentes**  
  *Familia:* `mapa de memoria`  
  Fuentes conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Accesibilidad PDF**  
  *Familia:* `pasaporte del artefacto`  
  En Accesibilidad PDF, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **latexmk**  
  *Familia:* `tejido literario`  
  La función de latexmk parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Reproducibilidad**  
  *Familia:* `capas internas`  
  Reproducibilidad estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: TeX y expansión profunda (6 conceptos)

- **Tokens y category codes**  
  *Familia:* `consulta e índice`  
  Tokens y category codes en TeX y expansión profunda: expande tokens, actualiza índices o referencias y compone cajas en páginas, asegurando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Expansion order**  
  *Familia:* `pasaporte del artefacto`  
  En TeX y expansión profunda, Expansion order expande tokens, actualiza índices o referencias y compone cajas en páginas para entregar un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **TeX groups**  
  *Familia:* `tejido literario`  
  TeX groups aplica este mecanismo en TeX y expansión profunda: expande tokens, construye nodos, resuelve referencias y compone páginas, con un PDF tipográficamente estable, navegable y reproducible.

- **Registers**  
  *Familia:* `consulta e índice`  
  El mecanismo de Registers dentro de TeX y expansión profunda expande tokens, actualiza índices o referencias y compone cajas en páginas y consolida un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Robust commands**  
  *Familia:* `telar relacional`  
  Para Robust commands, la arquitectura de TeX y expansión profunda expande tokens, actualiza índices o referencias y compone cajas en páginas, garantizando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Expansion tracing**  
  *Familia:* `flujo de transformación`  
  Expansion tracing gestiona TeX y expansión profunda de modo que expande tokens, actualiza índices o referencias y compone cajas en páginas, produciendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.


### Seccion: Diseño de clases y paquetes (7 conceptos)

- **Document class options**  
  *Familia:* `análisis y emisión`  
  Document class options en Diseño de clases y paquetes: expande tokens, construye nodos, resuelve referencias y compone páginas, asegurando un PDF tipográficamente estable, navegable y reproducible.

- **Package interfaces**  
  *Familia:* `validación y decisión`  
  En Diseño de clases y paquetes, Package interfaces expande tokens, actualiza índices o referencias y compone cajas en páginas para entregar un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Key-value configuration**  
  *Familia:* `configuración declarativa`  
  Key-value configuration aplica este mecanismo en Diseño de clases y paquetes: expande tokens, actualiza índices o referencias y compone cajas en páginas, con un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Hooks de LaTeX**  
  *Familia:* `propagación de eventos`  
  El mecanismo de Hooks de LaTeX dentro de Diseño de clases y paquetes expande tokens, construye nodos, resuelve referencias y compone páginas y consolida un PDF tipográficamente estable, navegable y reproducible.

- **Expl3 conventions**  
  *Familia:* `análisis y emisión`  
  Para Expl3 conventions, la arquitectura de Diseño de clases y paquetes expande tokens, actualiza índices o referencias y compone cajas en páginas, garantizando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Option-clash prevention**  
  *Familia:* `ecosistema coordinado`  
  Option-clash prevention gestiona Diseño de clases y paquetes de modo que expande tokens, actualiza índices o referencias y compone cajas en páginas, produciendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Public macro compatibility**  
  *Familia:* `tejido literario`  
  A través de Public macro compatibility en Diseño de clases y paquetes, el sistema expande tokens, construye nodos, resuelve referencias y compone páginas manteniendo un PDF tipográficamente estable, navegable y reproducible.


### Seccion: Tipografía (8 conceptos)

- **Microtypography**  
  *Familia:* `análisis y emisión`  
  Microtypography en Tipografía: expande tokens, construye nodos, resuelve referencias y compone páginas, asegurando un PDF tipográficamente estable, navegable y reproducible.

- **Hyphenation**  
  *Familia:* `matriz de señales`  
  En Tipografía, Hyphenation expande tokens, construye nodos, resuelve referencias y compone páginas para entregar un PDF tipográficamente estable, navegable y reproducible.

- **Line breaking**  
  *Familia:* `validación y decisión`  
  Line breaking aplica este mecanismo en Tipografía: expande tokens, actualiza índices o referencias y compone cajas en páginas, con un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Font encodings**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Font encodings dentro de Tipografía expande tokens, construye nodos, resuelve referencias y compone páginas y consolida un PDF tipográficamente estable, navegable y reproducible.

- **OpenType features**  
  *Familia:* `jerarquía y dependencias`  
  Para OpenType features, la arquitectura de Tipografía expande tokens, actualiza índices o referencias y compone cajas en páginas, garantizando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Widow and orphan control**  
  *Familia:* `validación y decisión`  
  Widow and orphan control gestiona Tipografía de modo que expande tokens, actualiza índices o referencias y compone cajas en páginas, produciendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Variable font axes**  
  *Familia:* `análisis y emisión`  
  A través de Variable font axes en Tipografía, el sistema expande tokens, construye nodos, resuelve referencias y compone páginas manteniendo un PDF tipográficamente estable, navegable y reproducible.

- **Optical sizing validation**  
  *Familia:* `comparativa técnica`  
  En el flujo operativo de Tipografía, Optical sizing validation expande tokens, actualiza índices o referencias y compone cajas en páginas para obtener un PDF estable cuya estructura y procedencia pueden inspeccionarse.


### Seccion: Matemáticas avanzadas (6 conceptos)

- **Equation alignment**  
  *Familia:* `consulta e índice`  
  Equation alignment en Matemáticas avanzadas: expande tokens, actualiza índices o referencias y compone cajas en páginas, asegurando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Theorem environments**  
  *Familia:* `pasaporte del artefacto`  
  En Matemáticas avanzadas, Theorem environments expande tokens, actualiza índices o referencias y compone cajas en páginas para entregar un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Custom operators**  
  *Familia:* `telar relacional`  
  Custom operators aplica este mecanismo en Matemáticas avanzadas: expande tokens, actualiza índices o referencias y compone cajas en páginas, con un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Semantic math macros**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Semantic math macros dentro de Matemáticas avanzadas expande tokens, construye nodos, resuelve referencias y compone páginas y consolida un PDF tipográficamente estable, navegable y reproducible.

- **Math font selection**  
  *Familia:* `consulta e índice`  
  Para Math font selection, la arquitectura de Matemáticas avanzadas expande tokens, construye nodos, resuelve referencias y compone páginas, garantizando un PDF tipográficamente estable, navegable y reproducible.

- **MathML tagging maps**  
  *Familia:* `validación y decisión`  
  MathML tagging maps gestiona Matemáticas avanzadas de modo que expande tokens, construye nodos, resuelve referencias y compone páginas, produciendo un PDF tipográficamente estable, navegable y reproducible.


### Seccion: Gráficos y datos (7 conceptos)

- **TikZ paths**  
  *Familia:* `árbol de recursos`  
  TikZ paths en Gráficos y datos: expande tokens, construye nodos, resuelve referencias y compone páginas, asegurando un PDF tipográficamente estable, navegable y reproducible.

- **PGFPlots**  
  *Familia:* `análisis y emisión`  
  En Gráficos y datos, PGFPlots expande tokens, construye nodos, resuelve referencias y compone páginas para entregar un PDF tipográficamente estable, navegable y reproducible.

- **Data-driven tables**  
  *Familia:* `consulta e índice`  
  Data-driven tables aplica este mecanismo en Gráficos y datos: expande tokens, actualiza índices o referencias y compone cajas en páginas, con un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Float placement**  
  *Familia:* `telar relacional`  
  El mecanismo de Float placement dentro de Gráficos y datos expande tokens, actualiza índices o referencias y compone cajas en páginas y consolida un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Vector asset workflow**  
  *Familia:* `cuadrícula paralela`  
  Para Vector asset workflow, la arquitectura de Gráficos y datos expande tokens, actualiza índices o referencias y compone cajas en páginas, garantizando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Externalization cache keys**  
  *Familia:* `memoria intermedia`  
  Externalization cache keys gestiona Gráficos y datos de modo que expande tokens, actualiza índices o referencias y compone cajas en páginas, produciendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Color-space management**  
  *Familia:* `consulta e índice`  
  A través de Color-space management en Gráficos y datos, el sistema expande tokens, actualiza índices o referencias y compone cajas en páginas manteniendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.


### Seccion: Bibliografías complejas (7 conceptos)

- **BibLaTeX data model**  
  *Familia:* `tejido literario`  
  BibLaTeX data model en Bibliografías complejas: expande tokens, construye nodos, resuelve referencias y compone páginas, asegurando un PDF tipográficamente estable, navegable y reproducible.

- **Biber processing**  
  *Familia:* `pasaporte del artefacto`  
  En Bibliografías complejas, Biber processing expande tokens, actualiza índices o referencias y compone cajas en páginas para entregar un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Citation styles**  
  *Familia:* `análisis y emisión`  
  Citation styles aplica este mecanismo en Bibliografías complejas: expande tokens, construye nodos, resuelve referencias y compone páginas, con un PDF tipográficamente estable, navegable y reproducible.

- **Multilingual bibliographies**  
  *Familia:* `validación y decisión`  
  El mecanismo de Multilingual bibliographies dentro de Bibliografías complejas expande tokens, construye nodos, resuelve referencias y compone páginas y consolida un PDF tipográficamente estable, navegable y reproducible.

- **Reference data validation**  
  *Familia:* `comparativa técnica`  
  Para Reference data validation, la arquitectura de Bibliografías complejas expande tokens, actualiza índices o referencias y compone cajas en páginas, garantizando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **DOI normalization**  
  *Familia:* `consulta e índice`  
  DOI normalization gestiona Bibliografías complejas de modo que expande tokens, actualiza índices o referencias y compone cajas en páginas, produciendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Citation disambiguation**  
  *Familia:* `análisis y emisión`  
  A través de Citation disambiguation en Bibliografías complejas, el sistema expande tokens, construye nodos, resuelve referencias y compone páginas manteniendo un PDF tipográficamente estable, navegable y reproducible.


### Seccion: Documentos extensos (7 conceptos)

- **Multi-file projects**  
  *Familia:* `telar relacional`  
  Multi-file projects en Documentos extensos: expande tokens, actualiza índices o referencias y compone cajas en páginas, asegurando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Glossaries**  
  *Familia:* `validación y decisión`  
  En Documentos extensos, Glossaries expande tokens, construye nodos, resuelve referencias y compone páginas para entregar un PDF tipográficamente estable, navegable y reproducible.

- **Multiple indexes**  
  *Familia:* `consulta e índice`  
  Multiple indexes aplica este mecanismo en Documentos extensos: expande tokens, actualiza índices o referencias y compone cajas en páginas, con un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Cross-document references**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Cross-document references dentro de Documentos extensos expande tokens, construye nodos, resuelve referencias y compone páginas y consolida un PDF tipográficamente estable, navegable y reproducible.

- **Incremental compilation**  
  *Familia:* `flujo de transformación`  
  Para Incremental compilation, la arquitectura de Documentos extensos expande tokens, actualiza índices o referencias y compone cajas en páginas, garantizando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **includeonly build graphs**  
  *Familia:* `capas internas`  
  includeonly build graphs gestiona Documentos extensos de modo que expande tokens, actualiza índices o referencias y compone cajas en páginas, produciendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Cross-document version alignment**  
  *Familia:* `análisis y emisión`  
  A través de Cross-document version alignment en Documentos extensos, el sistema expande tokens, construye nodos, resuelve referencias y compone páginas manteniendo un PDF tipográficamente estable, navegable y reproducible.


### Seccion: Accesibilidad y estándares (7 conceptos)

- **Tagged PDF**  
  *Familia:* `validación y decisión`  
  Tagged PDF en Accesibilidad y estándares: expande tokens, construye nodos, resuelve referencias y compone páginas, asegurando un PDF tipográficamente estable, navegable y reproducible.

- **Logical reading order**  
  *Familia:* `evidencia y latencia`  
  En Accesibilidad y estándares, Logical reading order expande tokens, actualiza índices o referencias y compone cajas en páginas para entregar un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Alternative text**  
  *Familia:* `tejido literario`  
  Alternative text aplica este mecanismo en Accesibilidad y estándares: expande tokens, construye nodos, resuelve referencias y compone páginas, con un PDF tipográficamente estable, navegable y reproducible.

- **PDF/A**  
  *Familia:* `análisis y emisión`  
  El mecanismo de PDF/A dentro de Accesibilidad y estándares expande tokens, construye nodos, resuelve referencias y compone páginas y consolida un PDF tipográficamente estable, navegable y reproducible.

- **Accessible mathematics**  
  *Familia:* `validación y decisión`  
  Para Accessible mathematics, la arquitectura de Accesibilidad y estándares expande tokens, construye nodos, resuelve referencias y compone páginas, garantizando un PDF tipográficamente estable, navegable y reproducible.

- **Structure-tree validation**  
  *Familia:* `comparativa técnica`  
  Structure-tree validation gestiona Accesibilidad y estándares de modo que expande tokens, construye nodos, resuelve referencias y compone páginas, produciendo un PDF tipográficamente estable, navegable y reproducible.

- **Alternative-text ownership**  
  *Familia:* `mapa de memoria`  
  A través de Alternative-text ownership en Accesibilidad y estándares, el sistema expande tokens, construye nodos, resuelve referencias y compone páginas manteniendo un PDF tipográficamente estable, navegable y reproducible.


### Seccion: Testing y automatización (7 conceptos)

- **l3build**  
  *Familia:* `análisis y emisión`  
  l3build en Testing y automatización: expande tokens, actualiza índices o referencias y compone cajas en páginas, asegurando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Visual regression of PDFs**  
  *Familia:* `topología y tráfico`  
  En Testing y automatización, Visual regression of PDFs expande tokens, construye nodos, resuelve referencias y compone páginas para entregar un PDF tipográficamente estable, navegable y reproducible.

- **Continuous compilation**  
  *Familia:* `flujo de transformación`  
  Continuous compilation aplica este mecanismo en Testing y automatización: expande tokens, actualiza índices o referencias y compone cajas en páginas, con un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Dependency pinning**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Dependency pinning dentro de Testing y automatización expande tokens, actualiza índices o referencias y compone cajas en páginas y consolida un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Font license checks**  
  *Familia:* `análisis y emisión`  
  Para Font license checks, la arquitectura de Testing y automatización expande tokens, construye nodos, resuelve referencias y compone páginas, garantizando un PDF tipográficamente estable, navegable y reproducible.

- **PDF object normalization**  
  *Familia:* `validación y decisión`  
  PDF object normalization gestiona Testing y automatización de modo que expande tokens, construye nodos, resuelve referencias y compone páginas, produciendo un PDF tipográficamente estable, navegable y reproducible.

- **Golden baseline thresholds**  
  *Familia:* `espectro de verificación`  
  A través de Golden baseline thresholds en Testing y automatización, el sistema expande tokens, actualiza índices o referencias y compone cajas en páginas manteniendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.


### Seccion: Seguridad y publicación (8 conceptos)

- **Shell escape boundaries**  
  *Familia:* `evidencia y latencia`  
  Shell escape boundaries en Seguridad y publicación: expande tokens, actualiza índices o referencias y compone cajas en páginas, asegurando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Untrusted TeX input**  
  *Familia:* `tejido literario`  
  En Seguridad y publicación, Untrusted TeX input expande tokens, construye nodos, resuelve referencias y compone páginas para entregar un PDF tipográficamente estable, navegable y reproducible.

- **Reproducible PDF metadata**  
  *Familia:* `análisis y emisión`  
  Reproducible PDF metadata aplica este mecanismo en Seguridad y publicación: expande tokens, construye nodos, resuelve referencias y compone páginas, con un PDF tipográficamente estable, navegable y reproducible.

- **Preflight de imprenta**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Preflight de imprenta dentro de Seguridad y publicación expande tokens, actualiza índices o referencias y compone cajas en páginas y consolida un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Archivo de fuentes y artefactos**  
  *Familia:* `árbol de recursos`  
  Para Archivo de fuentes y artefactos, la arquitectura de Seguridad y publicación expande tokens, actualiza índices o referencias y compone cajas en páginas, garantizando un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **Restricted shell-escape policy**  
  *Familia:* `telar relacional`  
  Restricted shell-escape policy gestiona Seguridad y publicación de modo que expande tokens, construye nodos, resuelve referencias y compone páginas, produciendo un PDF tipográficamente estable, navegable y reproducible.

- **Embedded-file audits**  
  *Familia:* `espectro de verificación`  
  A través de Embedded-file audits en Seguridad y publicación, el sistema expande tokens, actualiza índices o referencias y compone cajas en páginas manteniendo un PDF estable cuya estructura y procedencia pueden inspeccionarse.

- **PDF active-content inspection**  
  *Familia:* `análisis y emisión`  
  En el flujo operativo de Seguridad y publicación, PDF active-content inspection expande tokens, construye nodos, resuelve referencias y compone páginas para obtener un PDF tipográficamente estable, navegable y reproducible.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Infraestructura y entrega](Grupo-Delivery) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
