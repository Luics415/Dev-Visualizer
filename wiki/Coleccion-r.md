# R (R)

> **Vectores, data frames, estadística, visualización, modelado e informes reproducibles.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `r` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `python` |
| **Total de Conceptos** | **117 conceptos** |
| **Capitulos / Secciones** | **20 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/r)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/r-en-accion)


## Estudio de Caso Practico: Publicar un análisis reproducible

> **Caso integrado de R:** Un estudio limpia mediciones y ajusta un modelo; valores faltantes sesgan el conjunto y se recupera la procedencia antes de renderizar el informe.  
> El informe conserva datos de entrada, código, sessionInfo, semilla, supuestos y resultados con incertidumbre.

### Fases de Ejecucion:
1. **Importar con esquema** (Publicar un análisis reproducible: etapa 1 de 5): `datos <- read.csv('mediciones.csv', na.strings = c('', 'NA'))` -> Dataset identificado. *La etapa conserva un contrato explícito para que el siguiente paso de R no dependa de supuestos ocultos.*
2. **Explorar distribución** (Publicar un análisis reproducible: etapa 2 de 5): `summary(datos); plot(datos$valor)` -> Patrones visibles. *La etapa conserva un contrato explícito para que el siguiente paso de R no dependa de supuestos ocultos.*
3. **Detectar sesgo** (Publicar un análisis reproducible: etapa 3 de 5): `modelo <- lm(y ~ x, data = na.omit(datos))` -> Resultado marcado no concluyente. *El caso hace visible el fallo de R; no continúa como si la evidencia fuera válida.*
4. **Explicar y recuperar** (Publicar un análisis reproducible: etapa 4 de 5): `datos$completo <- complete.cases(datos)
comparar_grupos(datos)` -> Población documentada. *La recuperación de R corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Renderizar evidencia** (Publicar un análisis reproducible: etapa 5 de 5): `quarto::quarto_render('informe.qmd')` -> Informe reproducible. *La etapa conserva un contrato explícito para que el siguiente paso de R no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (117)

### Seccion: R esencial (5 conceptos)

- **Vectores**  
  *Familia:* `tabla de estados`  
  El mecanismo de Vectores recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Tipos y NA**  
  *Familia:* `despacho de runtime`  
  Tipos y NA conecta texto fuente, contexto léxico y reglas del lenguaje con su runtime interno: reconoce estructura, comprueba contratos y produce una representación ejecutable hasta exponer significado bien formado con errores localizados.

- **Matrices y arrays**  
  *Familia:* `mapa de memoria`  
  En Matrices y arrays, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Listas**  
  *Familia:* `tabla de estados`  
  La función de Listas parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Data frames**  
  *Familia:* `despacho de runtime`  
  Data frames estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Semántica (5 conceptos)

- **Recycling**  
  *Familia:* `mapa de memoria`  
  Para entender Recycling, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Vectorización**  
  *Familia:* `tabla de estados`  
  El mecanismo de Vectorización recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Lexical scoping**  
  *Familia:* `despacho de runtime`  
  Lexical scoping conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Lazy evaluation**  
  *Familia:* `mapa de memoria`  
  En Lazy evaluation, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Copy-on-modify**  
  *Familia:* `tabla de estados`  
  La función de Copy-on-modify parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Análisis (5 conceptos)

- **Funciones**  
  *Familia:* `cuadrícula paralela`  
  Funciones procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Fórmulas**  
  *Familia:* `espectro de verificación`  
  Para entender Fórmulas, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Modelos lineales**  
  *Familia:* `tabla de estados`  
  El mecanismo de Modelos lineales recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **Gráficos**  
  *Familia:* `cuadrícula paralela`  
  Gráficos conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Transformación de datos**  
  *Familia:* `espectro de verificación`  
  En Transformación de datos, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.


### Seccion: Diagnóstico (5 conceptos)

- **Warnings y errors**  
  *Familia:* `evidencia y latencia`  
  Warnings y errors conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **traceback y browser**  
  *Familia:* `diagnóstico operativo`  
  En traceback y browser, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.

- **Profiling**  
  *Familia:* `secuencia operativa`  
  La función de Profiling parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Pruebas**  
  *Familia:* `espectro de verificación`  
  Pruebas estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Validación estadística**  
  *Familia:* `validación y decisión`  
  El recorrido de Validación estadística toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.


### Seccion: Reproducibilidad (5 conceptos)

- **Paquetes**  
  *Familia:* `pasaporte del artefacto`  
  Paquetes procesa fuentes versionadas, dependencias fijadas y configuración declarativa: resuelve, construye y empaqueta el artefacto de forma repetible para entregar una unidad identificable que puede verificarse antes de promoverse.

- **Seeds**  
  *Familia:* `matriz de señales`  
  Para entender Seeds, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Quarto y R Markdown**  
  *Familia:* `configuración declarativa`  
  El mecanismo de Quarto y R Markdown recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Entornos de dependencias**  
  *Familia:* `jerarquía y dependencias`  
  Entornos de dependencias conecta fuentes versionadas, dependencias fijadas y configuración declarativa con su runtime interno: resuelve, construye y empaqueta el artefacto de forma repetible hasta exponer una unidad identificable que puede verificarse antes de promoverse.

- **Datos y procedencia**  
  *Familia:* `consulta e índice`  
  En Datos y procedencia, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.


### Seccion: Objetos y atributos (5 conceptos)

- **Atomic vectors**  
  *Familia:* `cuadrícula paralela`  
  Atomic / vectors: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, asegurando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Factors**  
  *Familia:* `tejido de eventos`  
  En Factors, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas para entregar una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Names y dimensions**  
  *Familia:* `análisis y emisión`  
  El mecanismo de Names / dimensions logra que el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible y garantiza el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **S3 classes**  
  *Familia:* `validación y decisión`  
  A través de S3 / classes, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, consolidando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **S4 classes**  
  *Familia:* `jerarquía y dependencias`  
  S4 / classes estructura el flujo donde el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, logrando el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.


### Seccion: Evaluación del lenguaje (7 conceptos)

- **Promises**  
  *Familia:* `tabla de estados`  
  Promises: la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, asegurando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Environments**  
  *Familia:* `despacho de runtime`  
  En Environments, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas para entregar un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Closures**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Closures logra que la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas y garantiza un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Non-standard evaluation**  
  *Familia:* `tabla de estados`  
  A través de Non-standard / evaluation, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, consolidando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Quosures**  
  *Familia:* `despacho de runtime`  
  Quosures estructura el flujo donde la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, logrando un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Active bindings**  
  *Familia:* `mapa de memoria`  
  Para Active / bindings, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, manteniendo un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Call stack introspection**  
  *Familia:* `tabla de estados`  
  Call / stack / introspection coordina la ejecución: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación hasta obtener memoria válida durante toda la operación y recuperada al terminar su último uso.


### Seccion: Manipulación tabular (5 conceptos)

- **Indexación vectorial**  
  *Familia:* `cuadrícula paralela`  
  Indexación / vectorial: la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, asegurando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Split-apply-combine**  
  *Familia:* `análisis y emisión`  
  En Split-apply-combine, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas para entregar una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Tidy data**  
  *Familia:* `validación y decisión`  
  El mecanismo de Tidy / data logra que la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas y garantiza una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Joins**  
  *Familia:* `telar relacional`  
  A través de Joins, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, consolidando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Pivoting**  
  *Familia:* `análisis y emisión`  
  Pivoting estructura el flujo donde la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, logrando una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.


### Seccion: Modelado estadístico (8 conceptos)

- **Diseño de matrices**  
  *Familia:* `tabla de estados`  
  Diseño / matrices: el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, asegurando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Contrasts**  
  *Familia:* `cuadrícula paralela`  
  En Contrasts, scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión para entregar un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Generalized linear models**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Generalized / linear / models logra que el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados y garantiza una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Mixed-effects models**  
  *Familia:* `tabla de estados`  
  A través de Mixed-effects / models, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, consolidando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Regularización**  
  *Familia:* `cuadrícula paralela`  
  Regularización estructura el flujo donde el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, logrando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Residual diagnostics**  
  *Familia:* `espectro de verificación`  
  Para Residual / diagnostics, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, manteniendo evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Interaction terms**  
  *Familia:* `tabla de estados`  
  Interaction / terms coordina la ejecución: el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados hasta obtener una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Robust standard errors**  
  *Familia:* `cuadrícula paralela`  
  Al operar con Robust / standard / errors, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, produciendo una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.


### Seccion: Visualización (5 conceptos)

- **Grammar of graphics**  
  *Familia:* `consulta e índice`  
  Grammar / of / graphics: scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, asegurando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Escalas**  
  *Familia:* `mapa de memoria`  
  En Escalas, el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible para entregar interfaz sincronizada que comunica cambio, foco y acción disponible.

- **Facets**  
  *Familia:* `validación y decisión`  
  El mecanismo de Facets logra que el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar y garantiza estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Anotaciones**  
  *Familia:* `despacho de runtime`  
  A través de Anotaciones, el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible, consolidando interfaz sincronizada que comunica cambio, foco y acción disponible.

- **Gráficos accesibles**  
  *Familia:* `mapa de memoria`  
  Gráficos / accesibles estructura el flujo donde el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible, logrando interfaz sincronizada que comunica cambio, foco y acción disponible.


### Seccion: Datos faltantes y calidad (7 conceptos)

- **MCAR MAR y MNAR**  
  *Familia:* `espectro de verificación`  
  MCAR / MAR / MNAR: el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, asegurando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Imputación**  
  *Familia:* `validación y decisión`  
  En Imputación, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados para entregar una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Outliers**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Outliers logra que el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados y garantiza una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Validación de esquemas**  
  *Familia:* `comparativa técnica`  
  A través de Validación / esquemas, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, consolidando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Data provenance**  
  *Familia:* `pasaporte del artefacto`  
  Data / provenance estructura el flujo donde el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, logrando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Sensitivity analysis for missingness**  
  *Familia:* `espectro de verificación`  
  Para Sensitivity / analysis / for / missingness, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, manteniendo una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Multiple imputation pooling**  
  *Familia:* `matriz de señales`  
  Multiple / imputation / pooling coordina la ejecución: el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar hasta obtener estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### Seccion: Series temporales (6 conceptos)

- **Índices temporales**  
  *Familia:* `secuencia operativa`  
  Índices / temporales: el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, asegurando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Estacionalidad**  
  *Familia:* `propagación de eventos`  
  En Estacionalidad, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados para entregar una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **ARIMA**  
  *Familia:* `tabla de estados`  
  El mecanismo de ARIMA logra que el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados y garantiza una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Forecast validation**  
  *Familia:* `secuencia operativa`  
  A través de Forecast / validation, scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, consolidando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Anomalías temporales**  
  *Familia:* `propagación de eventos`  
  Anomalías / temporales estructura el flujo donde el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, logrando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Rolling-origin evaluation**  
  *Familia:* `tabla de estados`  
  Para Rolling-origin / evaluation, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, manteniendo servicio disponible con estado, versión y camino de rollback verificables.


### Seccion: Datos espaciales (7 conceptos)

- **Sistemas de coordenadas**  
  *Familia:* `mapa de memoria`  
  Sistemas / coordenadas: el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible, asegurando interfaz sincronizada que comunica cambio, foco y acción disponible.

- **Simple features**  
  *Familia:* `espectro de verificación`  
  En Simple / features, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados para entregar una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Operaciones geométricas**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Operaciones / geométricas logra que el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados y garantiza una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Rasters**  
  *Familia:* `análisis y emisión`  
  A través de Rasters, scanner y parser consumen tokens, construyen estructura y conservan posición para explicar cada decisión, consolidando un árbol o coincidencia estructurada que las siguientes fases pueden recorrer de forma segura.

- **Mapas reproducibles**  
  *Familia:* `espectro de verificación`  
  Mapas / reproducibles estructura el flujo donde el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, logrando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Spatial indexing**  
  *Familia:* `consulta e índice`  
  Para Spatial / indexing, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, manteniendo una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Topology repair**  
  *Familia:* `evidencia y latencia`  
  Topology / repair coordina la ejecución: frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias hasta obtener un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.


### Seccion: Aprendizaje automático (6 conceptos)

- **Preprocessing recipes**  
  *Familia:* `flujo de transformación`  
  Preprocessing / recipes: el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, asegurando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Resampling**  
  *Familia:* `cuadrícula paralela`  
  En Resampling, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados para entregar una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Feature engineering**  
  *Familia:* `tabla de estados`  
  El mecanismo de Feature / engineering logra que el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados y garantiza una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Hyperparameter tuning**  
  *Familia:* `flujo de transformación`  
  A través de Hyperparameter / tuning, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, consolidando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Calibration**  
  *Familia:* `cuadrícula paralela`  
  Calibration estructura el flujo donde el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, logrando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Nested resampling**  
  *Familia:* `tabla de estados`  
  Para Nested / resampling, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, manteniendo una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.


### Seccion: Simulación e inferencia bayesiana (5 conceptos)

- **Random number generators**  
  *Familia:* `matriz de señales`  
  Random / number / generators: el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, asegurando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Bootstrap**  
  *Familia:* `espectro de verificación`  
  En Bootstrap, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados para entregar una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Markov chain Monte Carlo**  
  *Familia:* `cuadrícula paralela`  
  El mecanismo de Markov / chain / Monte / Carlo logra que el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados y garantiza una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Prior y posterior**  
  *Familia:* `validación y decisión`  
  A través de Prior / posterior, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, consolidando una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Diagnóstico de convergencia**  
  *Familia:* `secuencia operativa`  
  Diagnóstico / convergencia estructura el flujo donde la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, logrando evidencia reproducible que distingue regresión, ruido y limitación conocida.


### Seccion: Paquetes profesionales (7 conceptos)

- **Estructura DESCRIPTION**  
  *Familia:* `matriz de señales`  
  Estructura / DESCRIPTION: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, asegurando un artefacto reproducible, verificable y promovible entre entornos.

- **Namespaces**  
  *Familia:* `aislamiento sobre host`  
  En Namespaces, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida para entregar un artefacto reproducible, verificable y promovible entre entornos.

- **roxygen2**  
  *Familia:* `mapa de memoria`  
  El mecanismo de roxygen2 logra que el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida y garantiza un artefacto reproducible, verificable y promovible entre entornos.

- **Vignettes**  
  *Familia:* `despacho de runtime`  
  A través de Vignettes, el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, consolidando un artefacto reproducible, verificable y promovible entre entornos.

- **CRAN checks**  
  *Familia:* `capas internas`  
  CRAN / checks estructura el flujo donde el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, logrando un artefacto reproducible, verificable y promovible entre entornos.

- **Compiled code registration**  
  *Familia:* `análisis y emisión`  
  Para Compiled / code / registration, frontend, representación intermedia y runtime validan símbolos, optimizan rutas y enlazan dependencias, manteniendo un artefacto ejecutable con símbolos y comportamiento rastreables hasta la fuente.

- **Reverse dependency checks**  
  *Familia:* `jerarquía y dependencias`  
  Reverse / dependency / checks coordina la ejecución: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida hasta obtener un artefacto reproducible, verificable y promovible entre entornos.


### Seccion: Pruebas y contratos (5 conceptos)

- **testthat**  
  *Familia:* `espectro de verificación`  
  testthat: la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, asegurando evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Snapshot tests**  
  *Familia:* `validación y decisión`  
  En Snapshot / tests, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo para entregar evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Property-based checks**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Property-based / checks logra que la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo y garantiza evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Mocking**  
  *Familia:* `espectro de verificación`  
  A través de Mocking, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, consolidando evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Regression datasets**  
  *Familia:* `validación y decisión`  
  Regression / datasets estructura el flujo donde el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, logrando estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### Seccion: Rendimiento (6 conceptos)

- **Benchmarking**  
  *Familia:* `comparativa técnica`  
  Benchmarking: la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, asegurando evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Memory profiling**  
  *Familia:* `memoria intermedia`  
  En Memory / profiling, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación para entregar memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Efficient vectorization**  
  *Familia:* `cuadrícula paralela`  
  El mecanismo de Efficient / vectorization logra que la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas y garantiza una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Rcpp**  
  *Familia:* `evidencia y latencia`  
  A través de Rcpp, el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, consolidando una mejora medible con distribución, entorno y comparación documentados.

- **Parallel backends**  
  *Familia:* `planificación de trabajo`  
  Parallel / backends estructura el flujo donde el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, logrando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Copy detection with tracemem**  
  *Familia:* `diagnóstico operativo`  
  Para Copy / detection / with / tracemem, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, manteniendo evidencia reproducible que distingue regresión, ruido y limitación conocida.


### Seccion: Productos de datos (5 conceptos)

- **Shiny reactivity**  
  *Familia:* `ciclo de vida`  
  Shiny / reactivity: la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, asegurando un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Plumber APIs**  
  *Familia:* `planificación de trabajo`  
  En Plumber / APIs, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada para entregar servicio disponible con estado, versión y camino de rollback verificables.

- **Parameterized reports**  
  *Familia:* `cola y consumidor`  
  El mecanismo de Parameterized / reports logra que el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada y garantiza servicio disponible con estado, versión y camino de rollback verificables.

- **Scheduled pipelines**  
  *Familia:* `workflow y decisiones`  
  A través de Scheduled / pipelines, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, consolidando servicio disponible con estado, versión y camino de rollback verificables.

- **Deployment bundles**  
  *Familia:* `ciclo de vida`  
  Deployment / bundles estructura el flujo donde el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida, logrando un artefacto reproducible, verificable y promovible entre entornos.


### Seccion: Gobierno y producción (8 conceptos)

- **Dependency lockfiles**  
  *Familia:* `jerarquía y dependencias`  
  Dependency / lockfiles: el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable, asegurando progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Secret management**  
  *Familia:* `validación y decisión`  
  En Secret / management, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos para entregar solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **Artifact versioning**  
  *Familia:* `pasaporte del artefacto`  
  El mecanismo de Artifact / versioning logra que el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida y garantiza un artefacto reproducible, verificable y promovible entre entornos.

- **Model monitoring**  
  *Familia:* `planificación de trabajo`  
  A través de Model / monitoring, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, consolidando servicio disponible con estado, versión y camino de rollback verificables.

- **Audit trails**  
  *Familia:* `validación y decisión`  
  Audit / trails estructura el flujo donde el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos, logrando solo la capacidad permitida ejecutada con una decisión que puede auditarse.

- **Dataset checksums**  
  *Familia:* `análisis y emisión`  
  Para Dataset / checksums, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, manteniendo una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Reproducible container images**  
  *Familia:* `aislamiento sobre host`  
  Reproducible / container / images coordina la ejecución: el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada hasta obtener servicio disponible con estado, versión y camino de rollback verificables.

- **Statistical model cards**  
  *Familia:* `espectro de verificación`  
  Al operar con Statistical / model / cards, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, produciendo una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
