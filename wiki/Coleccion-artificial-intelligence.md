# Inteligencia Artificial (IA)

> **Datos, modelos, entrenamiento, evaluación, inferencia, seguridad y monitoreo.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `artificial-intelligence` |
| **Grupo Arquitectonico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `mediapipe` |
| **Total de Conceptos** | **130 conceptos** |
| **Capitulos / Secciones** | **20 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/inteligencia-artificial)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/inteligencia-artificial-en-accion)


## Estudio de Caso Practico: Entrenar un clasificador con límites

> **Caso integrado de Inteligencia artificial:** Un modelo clasifica solicitudes, una variable posterior al resultado filtra la respuesta y se recupera el dataset antes de evaluar y desplegar.  
> La tarjeta del modelo registra población, datos, métricas por grupo, umbral, límites y responsable de revisión.

### Fases de Ejecucion:
1. **Definir tarea** (Entrenar un clasificador con límites: etapa 1 de 5): `y = repair_is_urgent` -> Problema delimitado. *La etapa conserva un contrato explícito para que el siguiente paso de Inteligencia artificial no dependa de supuestos ocultos.*
2. **Entrenar baseline** (Entrenar un clasificador con límites: etapa 2 de 5): `model.fit(X_train, y_train)` -> Referencia medible. *La etapa conserva un contrato explícito para que el siguiente paso de Inteligencia artificial no dependa de supuestos ocultos.*
3. **Detectar leakage** (Entrenar un clasificador con límites: etapa 3 de 5): `features += ['resolution_code']` -> Modelo invalidado. *El caso hace visible el fallo de Inteligencia artificial; no continúa como si la evidencia fuera válida.*
4. **Reconstruir dataset** (Entrenar un clasificador con límites: etapa 4 de 5): `features = available_at_request_time` -> Evaluación recuperada. *La recuperación de Inteligencia artificial corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Desplegar con control** (Entrenar un clasificador con límites: etapa 5 de 5): `if confidence < threshold: route_to_human()` -> Asistencia gobernada. *La etapa conserva un contrato explícito para que el siguiente paso de Inteligencia artificial no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (130)

### Seccion: Mapa de la IA (5 conceptos)

- **IA simbólica**  
  *Familia:* `constelación de mecanismos`  
  La función de IA simbólica parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Búsqueda**  
  *Familia:* `flujo de transformación`  
  Búsqueda estructura una instancia acotada, sus invariantes y una medida de costo en el sistema: explora estados manteniendo la propiedad que garantiza corrección, garantizando una solución acompañada de complejidad y límites conocidos.

- **Machine learning**  
  *Familia:* `jerarquía y dependencias`  
  El recorrido de Machine learning toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Deep learning**  
  *Familia:* `constelación de mecanismos`  
  Deep learning procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **IA generativa**  
  *Familia:* `flujo de transformación`  
  Para entender IA generativa, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Datos y aprendizaje (5 conceptos)

- **Features**  
  *Familia:* `mapa de memoria`  
  Features conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Etiquetas**  
  *Familia:* `consulta e índice`  
  En Etiquetas, datos identificables junto con esquema, restricciones y procedencia ingresa al flujo donde valida, representa y recorre cada valor preservando relaciones para consolidar información consultable con integridad y significado estables.

- **Train validation test**  
  *Familia:* `espectro de verificación`  
  La función de Train validation test parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.

- **Funciones de pérdida**  
  *Familia:* `telar relacional`  
  Funciones de pérdida estructura datos identificables junto con esquema, restricciones y procedencia en el sistema: valida, representa y recorre cada valor preservando relaciones, garantizando información consultable con integridad y significado estables.

- **Optimización**  
  *Familia:* `secuencia operativa`  
  El recorrido de Optimización toma datos identificables junto con esquema, restricciones y procedencia. Posteriormente valida, representa y recorre cada valor preservando relaciones para validar información consultable con integridad y significado estables.


### Seccion: Modelos (5 conceptos)

- **Regresión**  
  *Familia:* `cuadrícula paralela`  
  El recorrido de Regresión toma datos identificables junto con esquema, restricciones y procedencia. Posteriormente valida, representa y recorre cada valor preservando relaciones para validar información consultable con integridad y significado estables.

- **Árboles**  
  *Familia:* `jerarquía y dependencias`  
  Árboles procesa datos identificables junto con esquema, restricciones y procedencia: valida, representa y recorre cada valor preservando relaciones para entregar información consultable con integridad y significado estables.

- **Redes neuronales**  
  *Familia:* `topología y tráfico`  
  Para entender Redes neuronales, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.

- **Embeddings**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Embeddings recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **Transformers**  
  *Familia:* `cuadrícula paralela`  
  Transformers conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.


### Seccion: Evaluación y diagnóstico (5 conceptos)

- **Métricas**  
  *Familia:* `evidencia y latencia`  
  Métricas procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Overfitting**  
  *Familia:* `flujo de transformación`  
  Para entender Overfitting, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.

- **Data leakage**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Data leakage recibe un comportamiento esperado, una entrada mínima y un síntoma observable y aísla variables y contrasta hipótesis con instrumentación repetible, asegurando una causa demostrada y una regresión protegida.

- **Bias y fairness**  
  *Familia:* `espectro de verificación`  
  Bias y fairness conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Explicabilidad**  
  *Familia:* `comparativa técnica`  
  En Explicabilidad, un comportamiento esperado, una entrada mínima y un síntoma observable ingresa al flujo donde aísla variables y contrasta hipótesis con instrumentación repetible para consolidar una causa demostrada y una regresión protegida.


### Seccion: Producción responsable (5 conceptos)

- **Inferencia**  
  *Familia:* `flujo de transformación`  
  Inferencia estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Drift**  
  *Familia:* `espectro de verificación`  
  El recorrido de Drift toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Monitoreo**  
  *Familia:* `pasaporte del artefacto`  
  Monitoreo procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Seguridad adversarial**  
  *Familia:* `validación y decisión`  
  Para entender Seguridad adversarial, se delimita una identidad, un recurso protegido y una política explícita. La operación evalúa confianza, privilegios y datos antes de autorizar cada efecto hasta producir una decisión mínima y trazable que no revela secretos.

- **Gobierno humano**  
  *Familia:* `capas internas`  
  El mecanismo de Gobierno humano recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Búsqueda y planificación (6 conceptos)

- **Búsqueda heurística**  
  *Familia:* `planificación de trabajo`  
  Búsqueda heurística en Búsqueda y planificación: expande candidatos, puntúa la frontera y descarta estados dominados o inviables, asegurando una ruta o plan con costo y condiciones de terminación explícitos.

- **A star**  
  *Familia:* `cola y consumidor`  
  En Búsqueda y planificación, A star expande candidatos, puntúa la frontera y descarta estados dominados o inviables para entregar una ruta o plan con costo y condiciones de terminación explícitos.

- **Constraint satisfaction**  
  *Familia:* `secuencia operativa`  
  Constraint satisfaction aplica este mecanismo en Búsqueda y planificación: expande candidatos, puntúa la frontera y descarta estados dominados o inviables, con una ruta o plan con costo y condiciones de terminación explícitos.

- **Planning graphs**  
  *Familia:* `planificación de trabajo`  
  El mecanismo de Planning graphs dentro de Búsqueda y planificación expande candidatos, puntúa la frontera y descarta estados dominados o inviables y consolida una ruta o plan con costo y condiciones de terminación explícitos.

- **Monte Carlo tree search**  
  *Familia:* `matriz de señales`  
  Para Monte Carlo tree search, la arquitectura de Búsqueda y planificación expande candidatos, puntúa la frontera y descarta estados dominados o inviables, garantizando una ruta o plan con costo y condiciones de terminación explícitos.

- **Heuristic admissibility proofs**  
  *Familia:* `cola y consumidor`  
  Heuristic admissibility proofs gestiona Búsqueda y planificación de modo que expande candidatos, puntúa la frontera y descarta estados dominados o inviables, produciendo una ruta o plan con costo y condiciones de terminación explícitos.


### Seccion: Representación del conocimiento (7 conceptos)

- **Lógica proposicional**  
  *Familia:* `espectro de verificación`  
  Lógica proposicional en Representación del conocimiento: normaliza identidades y deriva consecuencias mediante el régimen lógico declarado, asegurando conclusiones consultables junto con la cadena que las justifica.

- **Lógica de primer orden**  
  *Familia:* `pasaporte del artefacto`  
  En Representación del conocimiento, Lógica de primer orden normaliza identidades y deriva consecuencias mediante el régimen lógico declarado para entregar conclusiones consultables junto con la cadena que las justifica.

- **Ontologías**  
  *Familia:* `evidencia y latencia`  
  Ontologías aplica este mecanismo en Representación del conocimiento: normaliza identidades y deriva consecuencias mediante el régimen lógico declarado, con conclusiones consultables junto con la cadena que las justifica.

- **Knowledge graphs**  
  *Familia:* `consulta e índice`  
  El mecanismo de Knowledge graphs dentro de Representación del conocimiento normaliza identidades y deriva consecuencias mediante el régimen lógico declarado y consolida conclusiones consultables junto con la cadena que las justifica.

- **Razonamiento probabilístico**  
  *Familia:* `telar relacional`  
  Para Razonamiento probabilístico, la arquitectura de Representación del conocimiento normaliza identidades y deriva consecuencias mediante el régimen lógico declarado, garantizando conclusiones consultables junto con la cadena que las justifica.

- **Description-logic consistency**  
  *Familia:* `evidencia y latencia`  
  Description-logic consistency gestiona Representación del conocimiento de modo que normaliza identidades y deriva consecuencias mediante el régimen lógico declarado, produciendo conclusiones consultables junto con la cadena que las justifica.

- **Rule provenance**  
  *Familia:* `pasaporte del artefacto`  
  A través de Rule provenance en Representación del conocimiento, el sistema normaliza identidades y deriva consecuencias mediante el régimen lógico declarado manteniendo conclusiones consultables junto con la cadena que las justifica.


### Seccion: Preparación de datos (8 conceptos)

- **Data provenance**  
  *Familia:* `flujo de transformación`  
  Data provenance en Preparación de datos: normaliza identidades y deriva consecuencias mediante el régimen lógico declarado, asegurando conclusiones consultables junto con la cadena que las justifica.

- **Sampling bias**  
  *Familia:* `jerarquía y dependencias`  
  En Preparación de datos, Sampling bias prepara, entrena o infiere registrando parámetros, linaje y decisión para entregar predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Missing values**  
  *Familia:* `despacho de runtime`  
  Missing values aplica este mecanismo en Preparación de datos: prepara, entrena o infiere registrando parámetros, linaje y decisión, con predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Feature encoding**  
  *Familia:* `consulta e índice`  
  El mecanismo de Feature encoding dentro de Preparación de datos valida, divide, transforma y registra linaje antes de entrenar o inferir y consolida datos reproducibles cuya población y transformaciones pueden auditarse.

- **Dataset versioning**  
  *Familia:* `telar relacional`  
  Para Dataset versioning, la arquitectura de Preparación de datos valida, divide, transforma y registra linaje antes de entrenar o inferir, garantizando datos reproducibles cuya población y transformaciones pueden auditarse.

- **Label-noise estimation**  
  *Familia:* `flujo de transformación`  
  Label-noise estimation gestiona Preparación de datos de modo que valida, divide, transforma y registra linaje antes de entrenar o inferir, produciendo datos reproducibles cuya población y transformaciones pueden auditarse.

- **Train-serving skew**  
  *Familia:* `consulta e índice`  
  A través de Train-serving skew en Preparación de datos, el sistema agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida manteniendo predicciones con costo medido y degradación dentro del umbral aceptado.

- **Annotation agreement measurement**  
  *Familia:* `telar relacional`  
  En el flujo operativo de Preparación de datos, Annotation agreement measurement valida, divide, transforma y registra linaje antes de entrenar o inferir para obtener datos reproducibles cuya población y transformaciones pueden auditarse.


### Seccion: Aprendizaje supervisado (7 conceptos)

- **Regularización**  
  *Familia:* `evidencia y latencia`  
  Regularización en Aprendizaje supervisado: calcula predicciones y gradientes, actualiza parámetros y repite bajo una política de parada, asegurando un artefacto de modelo acompañado por métricas fuera de muestra.

- **Ensembles**  
  *Familia:* `pasaporte del artefacto`  
  En Aprendizaje supervisado, Ensembles encola, planifica y reanuda unidades conservando causalidad y propagación de error para entregar resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Calibration**  
  *Familia:* `secuencia operativa`  
  Calibration aplica este mecanismo en Aprendizaje supervisado: encola, planifica y reanuda unidades conservando causalidad y propagación de error, con resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Class imbalance**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Class imbalance dentro de Aprendizaje supervisado resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Hyperparameter search**  
  *Familia:* `despacho de runtime`  
  Para Hyperparameter search, la arquitectura de Aprendizaje supervisado calcula predicciones y gradientes, actualiza parámetros y repite bajo una política de parada, garantizando un artefacto de modelo acompañado por métricas fuera de muestra.

- **Probability calibration curves**  
  *Familia:* `evidencia y latencia`  
  Probability calibration curves gestiona Aprendizaje supervisado de modo que encola, planifica y reanuda unidades conservando causalidad y propagación de error, produciendo resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Cost-sensitive learning**  
  *Familia:* `capas internas`  
  A través de Cost-sensitive learning en Aprendizaje supervisado, el sistema encola, planifica y reanuda unidades conservando causalidad y propagación de error manteniendo resultado, cancelación o reinicio visibles para el supervisor correcto.


### Seccion: Aprendizaje no supervisado (7 conceptos)

- **Clustering**  
  *Familia:* `cuadrícula paralela`  
  Clustering en Aprendizaje no supervisado: encola, planifica y reanuda unidades conservando causalidad y propagación de error, asegurando resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Dimensionality reduction**  
  *Familia:* `topología y tráfico`  
  En Aprendizaje no supervisado, Dimensionality reduction encola, planifica y reanuda unidades conservando causalidad y propagación de error para entregar resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Anomaly detection**  
  *Familia:* `capas internas`  
  Anomaly detection aplica este mecanismo en Aprendizaje no supervisado: encola, planifica y reanuda unidades conservando causalidad y propagación de error, con resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Topic modeling**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Topic modeling dentro de Aprendizaje no supervisado resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Representation learning**  
  *Familia:* `flujo de interfaz`  
  Para Representation learning, la arquitectura de Aprendizaje no supervisado encola, planifica y reanuda unidades conservando causalidad y propagación de error, garantizando resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Cluster stability**  
  *Familia:* `topología y tráfico`  
  Cluster stability gestiona Aprendizaje no supervisado de modo que encola, planifica y reanuda unidades conservando causalidad y propagación de error, produciendo resultado, cancelación o reinicio visibles para el supervisor correcto.

- **Representation collapse**  
  *Familia:* `capas internas`  
  A través de Representation collapse en Aprendizaje no supervisado, el sistema encola, planifica y reanuda unidades conservando causalidad y propagación de error manteniendo resultado, cancelación o reinicio visibles para el supervisor correcto.


### Seccion: Aprendizaje por refuerzo (6 conceptos)

- **Markov decision processes**  
  *Familia:* `flujo de transformación`  
  Markov decision processes en Aprendizaje por refuerzo: prepara, entrena o infiere registrando parámetros, linaje y decisión, asegurando predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Value functions**  
  *Familia:* `jerarquía y dependencias`  
  En Aprendizaje por refuerzo, Value functions compone aplicaciones y propaga resultado o error sin mutar la entrada para entregar valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Policy gradients**  
  *Familia:* `validación y decisión`  
  Policy gradients aplica este mecanismo en Aprendizaje por refuerzo: calcula predicciones y gradientes, actualiza parámetros y repite bajo una política de parada, con un artefacto de modelo acompañado por métricas fuera de muestra.

- **Exploration versus exploitation**  
  *Familia:* `comparativa técnica`  
  El mecanismo de Exploration versus exploitation dentro de Aprendizaje por refuerzo prepara, entrena o infiere registrando parámetros, linaje y decisión y consolida predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Offline reinforcement learning**  
  *Familia:* `flujo de transformación`  
  Para Offline reinforcement learning, la arquitectura de Aprendizaje por refuerzo prepara, entrena o infiere registrando parámetros, linaje y decisión, garantizando predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Off-policy evaluation**  
  *Familia:* `validación y decisión`  
  Off-policy evaluation gestiona Aprendizaje por refuerzo de modo que prepara, entrena o infiere registrando parámetros, linaje y decisión, produciendo predicción o política acompañada por incertidumbre y evaluación por segmento.


### Seccion: Deep learning internals (7 conceptos)

- **Backpropagation**  
  *Familia:* `mapa de memoria`  
  Backpropagation en Deep learning internals: calcula predicciones y gradientes, actualiza parámetros y repite bajo una política de parada, asegurando un artefacto de modelo acompañado por métricas fuera de muestra.

- **Activation functions**  
  *Familia:* `flujo de transformación`  
  En Deep learning internals, Activation functions compone aplicaciones y propaga resultado o error sin mutar la entrada para entregar valor reutilizable cuya evaluación puede sustituirse por su resultado.

- **Normalization layers**  
  *Familia:* `capas internas`  
  Normalization layers aplica este mecanismo en Deep learning internals: prepara, entrena o infiere registrando parámetros, linaje y decisión, con predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Attention mechanism**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Attention mechanism dentro de Deep learning internals prepara, entrena o infiere registrando parámetros, linaje y decisión y consolida predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Gradient stability**  
  *Familia:* `mapa de memoria`  
  Para Gradient stability, la arquitectura de Deep learning internals calcula predicciones y gradientes, actualiza parámetros y repite bajo una política de parada, garantizando un artefacto de modelo acompañado por métricas fuera de muestra.

- **Automatic differentiation graphs**  
  *Familia:* `despacho de runtime`  
  Automatic differentiation graphs gestiona Deep learning internals de modo que ubica, indexa, persiste y compacta manteniendo la unidad de consistencia elegida, produciendo lectura predecible y almacenamiento recuperable dentro del presupuesto.

- **Mixed-precision loss scaling**  
  *Familia:* `capas internas`  
  A través de Mixed-precision loss scaling en Deep learning internals, el sistema calcula predicciones y gradientes, actualiza parámetros y repite bajo una política de parada manteniendo un artefacto de modelo acompañado por métricas fuera de muestra.


### Seccion: Visión, audio y lenguaje (7 conceptos)

- **Convolutional models**  
  *Familia:* `flujo de transformación`  
  Convolutional models en Visión, audio y lenguaje: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Vision transformers**  
  *Familia:* `cuadrícula paralela`  
  En Visión, audio y lenguaje, Vision transformers prepara, entrena o infiere registrando parámetros, linaje y decisión para entregar predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Speech representations**  
  *Familia:* `jerarquía y dependencias`  
  Speech representations aplica este mecanismo en Visión, audio y lenguaje: prepara, entrena o infiere registrando parámetros, linaje y decisión, con predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Tokenization**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Tokenization dentro de Visión, audio y lenguaje tokeniza, reconoce alternativas y construye una representación estructurada sin perder ubicación y consolida árbol, match o diagnóstico consumible por la siguiente etapa.

- **Multimodal alignment**  
  *Familia:* `flujo de transformación`  
  Para Multimodal alignment, la arquitectura de Visión, audio y lenguaje prepara, entrena o infiere registrando parámetros, linaje y decisión, garantizando predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Sequence padding masks**  
  *Familia:* `validación y decisión`  
  Sequence padding masks gestiona Visión, audio y lenguaje de modo que prepara, entrena o infiere registrando parámetros, linaje y decisión, produciendo predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Dataset modality alignment**  
  *Familia:* `consulta e índice`  
  A través de Dataset modality alignment en Visión, audio y lenguaje, el sistema valida, divide, transforma y registra linaje antes de entrenar o inferir manteniendo datos reproducibles cuya población y transformaciones pueden auditarse.


### Seccion: Modelos generativos (7 conceptos)

- **Autoregressive generation**  
  *Familia:* `flujo de transformación`  
  Autoregressive generation en Modelos generativos: resuelve composición, restricciones y representación antes de aceptar la instancia, asegurando estructura válida cuyas operaciones permitidas están explícitas.

- **Diffusion models**  
  *Familia:* `jerarquía y dependencias`  
  En Modelos generativos, Diffusion models resuelve composición, restricciones y representación antes de aceptar la instancia para entregar estructura válida cuyas operaciones permitidas están explícitas.

- **Retrieval-augmented generation**  
  *Familia:* `tabla de estados`  
  Retrieval-augmented generation aplica este mecanismo en Modelos generativos: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **Prompt injection**  
  *Familia:* `flujo de transformación`  
  El mecanismo de Prompt injection dentro de Modelos generativos resuelve composición, restricciones y representación antes de aceptar la instancia y consolida estructura válida cuyas operaciones permitidas están explícitas.

- **Hallucination evaluation**  
  *Familia:* `matriz de señales`  
  Para Hallucination evaluation, la arquitectura de Modelos generativos resuelve composición, restricciones y representación antes de aceptar la instancia, garantizando estructura válida cuyas operaciones permitidas están explícitas.

- **Constrained decoding**  
  *Familia:* `topología y tráfico`  
  Constrained decoding gestiona Modelos generativos de modo que agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida, produciendo predicciones con costo medido y degradación dentro del umbral aceptado.

- **Retrieval freshness**  
  *Familia:* `tabla de estados`  
  A través de Retrieval freshness en Modelos generativos, el sistema resuelve composición, restricciones y representación antes de aceptar la instancia manteniendo estructura válida cuyas operaciones permitidas están explícitas.


### Seccion: Evaluación rigurosa (7 conceptos)

- **Cross-validation**  
  *Familia:* `validación y decisión`  
  Cross-validation en Evaluación rigurosa: evalúa precondiciones y combina restricciones antes de comprometer estado, asegurando valor aceptado con garantía explícita o error localizado.

- **Confidence intervals**  
  *Familia:* `flujo de transformación`  
  En Evaluación rigurosa, Confidence intervals prepara, entrena o infiere registrando parámetros, linaje y decisión para entregar predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Out-of-distribution tests**  
  *Familia:* `espectro de verificación`  
  Out-of-distribution tests aplica este mecanismo en Evaluación rigurosa: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **Human evaluation**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Human evaluation dentro de Evaluación rigurosa prepara, entrena o infiere registrando parámetros, linaje y decisión y consolida predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Causal versus predictive metrics**  
  *Familia:* `topología y tráfico`  
  Para Causal versus predictive metrics, la arquitectura de Evaluación rigurosa instrumenta, correlaciona y agrega sin romper el presupuesto de ejecución, garantizando señal que permite localizar componente, versión y duración del problema.

- **Statistical power analysis**  
  *Familia:* `flujo de transformación`  
  Statistical power analysis gestiona Evaluación rigurosa de modo que prepara, entrena o infiere registrando parámetros, linaje y decisión, produciendo predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Benchmark contamination**  
  *Familia:* `comparativa técnica`  
  A través de Benchmark contamination en Evaluación rigurosa, el sistema valida, divide, transforma y registra linaje antes de entrenar o inferir manteniendo datos reproducibles cuya población y transformaciones pueden auditarse.


### Seccion: Testing de sistemas de IA (7 conceptos)

- **Data validation tests**  
  *Familia:* `espectro de verificación`  
  Data validation tests en Testing de sistemas de IA: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, asegurando evidencia repetible que distingue comportamiento correcto de una regresión.

- **Metamorphic testing**  
  *Familia:* `validación y decisión`  
  En Testing de sistemas de IA, Metamorphic testing ejecuta camino normal, límite y fallo mientras captura todos los efectos observables para entregar evidencia repetible que distingue comportamiento correcto de una regresión.

- **Model contract tests**  
  *Familia:* `evidencia y latencia`  
  Model contract tests aplica este mecanismo en Testing de sistemas de IA: ejecuta camino normal, límite y fallo mientras captura todos los efectos observables, con evidencia repetible que distingue comportamiento correcto de una regresión.

- **Red teaming**  
  *Familia:* `topología y tráfico`  
  El mecanismo de Red teaming dentro de Testing de sistemas de IA serializa, negocia, transmite y traduce errores u ownership en la frontera y consolida respuesta tipada o efecto confirmado con compatibilidad conocida.

- **Shadow deployment**  
  *Familia:* `ciclo de vida`  
  Para Shadow deployment, la arquitectura de Testing de sistemas de IA promueve por etapas, observa señales y conserva una ruta de reversión, garantizando versión activa con tráfico y datos dentro del contrato.

- **Shadow-model disagreement**  
  *Familia:* `flujo de transformación`  
  Shadow-model disagreement gestiona Testing de sistemas de IA de modo que resuelve composición, restricciones y representación antes de aceptar la instancia, produciendo estructura válida cuyas operaciones permitidas están explícitas.

- **Invariant oracle design**  
  *Familia:* `espectro de verificación`  
  A través de Invariant oracle design en Testing de sistemas de IA, el sistema evalúa precondiciones y combina restricciones antes de comprometer estado manteniendo valor aceptado con garantía explícita o error localizado.


### Seccion: Seguridad y privacidad (7 conceptos)

- **Adversarial examples**  
  *Familia:* `validación y decisión`  
  Adversarial examples en Seguridad y privacidad: autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, asegurando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Data poisoning**  
  *Familia:* `comparativa técnica`  
  En Seguridad y privacidad, Data poisoning autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima para entregar decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Model extraction**  
  *Familia:* `flujo de transformación`  
  Model extraction aplica este mecanismo en Seguridad y privacidad: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **Differential privacy**  
  *Familia:* `validación y decisión`  
  El mecanismo de Differential privacy dentro de Seguridad y privacidad autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima y consolida decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Federated learning**  
  *Familia:* `comparativa técnica`  
  Para Federated learning, la arquitectura de Seguridad y privacidad autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima, garantizando decisión explícita y auditable que no expone secretos ni amplía privilegios.

- **Membership inference**  
  *Familia:* `matriz de señales`  
  Membership inference gestiona Seguridad y privacidad de modo que agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida, produciendo predicciones con costo medido y degradación dentro del umbral aceptado.

- **Prompt data exfiltration**  
  *Familia:* `validación y decisión`  
  A través de Prompt data exfiltration en Seguridad y privacidad, el sistema autentica, normaliza y autoriza antes de ejecutar con la capacidad mínima manteniendo decisión explícita y auditable que no expone secretos ni amplía privilegios.


### Seccion: MLOps (7 conceptos)

- **Experiment tracking**  
  *Familia:* `ida y vuelta`  
  Experiment tracking en MLOps: prepara, entrena o infiere registrando parámetros, linaje y decisión, asegurando predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Feature stores**  
  *Familia:* `pasaporte del artefacto`  
  En MLOps, Feature stores valida, divide, transforma y registra linaje antes de entrenar o inferir para entregar datos reproducibles cuya población y transformaciones pueden auditarse.

- **Model registry**  
  *Familia:* `flujo de transformación`  
  Model registry aplica este mecanismo en MLOps: resuelve composición, restricciones y representación antes de aceptar la instancia, con estructura válida cuyas operaciones permitidas están explícitas.

- **Reproducible training**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Reproducible training dentro de MLOps calcula predicciones y gradientes, actualiza parámetros y repite bajo una política de parada y consolida un artefacto de modelo acompañado por métricas fuera de muestra.

- **Continuous evaluation**  
  *Familia:* `jerarquía y dependencias`  
  Para Continuous evaluation, la arquitectura de MLOps prepara, entrena o infiere registrando parámetros, linaje y decisión, garantizando predicción o política acompañada por incertidumbre y evaluación por segmento.

- **End-to-end lineage graphs**  
  *Familia:* `consulta e índice`  
  End-to-end lineage graphs gestiona MLOps de modo que valida, divide, transforma y registra linaje antes de entrenar o inferir, produciendo datos reproducibles cuya población y transformaciones pueden auditarse.

- **Model reproducibility signatures**  
  *Familia:* `matriz de señales`  
  A través de Model reproducibility signatures en MLOps, el sistema resuelve composición, restricciones y representación antes de aceptar la instancia manteniendo estructura válida cuyas operaciones permitidas están explícitas.


### Seccion: Inferencia eficiente (7 conceptos)

- **Batching**  
  *Familia:* `planificación de trabajo`  
  Batching en Inferencia eficiente: agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida, asegurando predicciones con costo medido y degradación dentro del umbral aceptado.

- **Quantization**  
  *Familia:* `pasaporte del artefacto`  
  En Inferencia eficiente, Quantization agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida para entregar predicciones con costo medido y degradación dentro del umbral aceptado.

- **Pruning**  
  *Familia:* `topología y tráfico`  
  Pruning aplica este mecanismo en Inferencia eficiente: agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida, con predicciones con costo medido y degradación dentro del umbral aceptado.

- **Knowledge distillation**  
  *Familia:* `consulta e índice`  
  El mecanismo de Knowledge distillation dentro de Inferencia eficiente normaliza identidades y deriva consecuencias mediante el régimen lógico declarado y consolida conclusiones consultables junto con la cadena que las justifica.

- **Hardware accelerators**  
  *Familia:* `flujo de interfaz`  
  Para Hardware accelerators, la arquitectura de Inferencia eficiente agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida, garantizando predicciones con costo medido y degradación dentro del umbral aceptado.

- **Speculative decoding**  
  *Familia:* `topología y tráfico`  
  Speculative decoding gestiona Inferencia eficiente de modo que agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida, produciendo predicciones con costo medido y degradación dentro del umbral aceptado.

- **KV-cache memory budgets**  
  *Familia:* `memoria intermedia`  
  A través de KV-cache memory budgets en Inferencia eficiente, el sistema agrupa, aproxima, poda o reutiliza estado manteniendo el contrato de salida manteniendo predicciones con costo medido y degradación dentro del umbral aceptado.


### Seccion: Gobernanza e impacto (8 conceptos)

- **Model cards**  
  *Familia:* `consulta e índice`  
  Model cards en Gobernanza e impacto: valida, divide, transforma y registra linaje antes de entrenar o inferir, asegurando datos reproducibles cuya población y transformaciones pueden auditarse.

- **Algorithmic impact assessment**  
  *Familia:* `flujo de transformación`  
  En Gobernanza e impacto, Algorithmic impact assessment prepara, entrena o infiere registrando parámetros, linaje y decisión para entregar predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Human oversight**  
  *Familia:* `jerarquía y dependencias`  
  Human oversight aplica este mecanismo en Gobernanza e impacto: prepara, entrena o infiere registrando parámetros, linaje y decisión, con predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Incident response for AI**  
  *Familia:* `ida y vuelta`  
  El mecanismo de Incident response for AI dentro de Gobernanza e impacto aísla el fallo, restaura o promueve y reproduce cambios hasta el punto seguro y consolida servicio recuperado con pérdida y tiempo medidos.

- **Retirement de modelos**  
  *Familia:* `flujo de transformación`  
  Para Retirement de modelos, la arquitectura de Gobernanza e impacto resuelve composición, restricciones y representación antes de aceptar la instancia, garantizando estructura válida cuyas operaciones permitidas están explícitas.

- **Decision appeal workflows**  
  *Familia:* `workflow y decisiones`  
  Decision appeal workflows gestiona Gobernanza e impacto de modo que prepara, entrena o infiere registrando parámetros, linaje y decisión, produciendo predicción o política acompañada por incertidumbre y evaluación por segmento.

- **Model decommission evidence**  
  *Familia:* `jerarquía y dependencias`  
  A través de Model decommission evidence en Gobernanza e impacto, el sistema resuelve composición, restricciones y representación antes de aceptar la instancia manteniendo estructura válida cuyas operaciones permitidas están explícitas.

- **High-risk use approval gates**  
  *Familia:* `flujo de ejecución`  
  En el flujo operativo de Gobernanza e impacto, High-risk use approval gates prepara, entrena o infiere registrando parámetros, linaje y decisión para obtener predicción o política acompañada por incertidumbre y evaluación por segmento.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
