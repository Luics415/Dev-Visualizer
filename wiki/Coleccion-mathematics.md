# Matemáticas para programación (Math)

> **Lógica, conjuntos, álgebra, probabilidad, cálculo y matemática discreta.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `mathematics` |
| **Grupo Arquitectonico** | [Fundamentos](Grupo-Fundamentals) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `python` |
| **Total de Conceptos** | **105 conceptos** |
| **Capitulos / Secciones** | **18 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/matematicas-programacion)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/matematicas-programacion-en-accion)


## Estudio de Caso Practico: Ajustar una función sin perder estabilidad

> **Caso integrado de Matemáticas para programación:** Un modelo de demanda desciende sobre una función de error, descubre escalas incompatibles y recupera una trayectoria numéricamente estable.  
> La solución publica unidades, tolerancia, semilla, convergencia y comparación contra un cálculo de referencia.

### Fases de Ejecucion:
1. **Definir objetivo** (Ajustar una función sin perder estabilidad: etapa 1 de 5): `J(w) = Σ(predicción - real)^2` -> Función evaluable. *La etapa conserva un contrato explícito para que el siguiente paso de Matemáticas para programación no dependa de supuestos ocultos.*
2. **Calcular gradiente** (Ajustar una función sin perder estabilidad: etapa 2 de 5): `w = w - alfa * gradiente(J, w)` -> Progreso medido. *La etapa conserva un contrato explícito para que el siguiente paso de Matemáticas para programación no dependa de supuestos ocultos.*
3. **Detectar divergencia** (Ajustar una función sin perder estabilidad: etapa 3 de 5): `alfa = 10.0  # demasiado grande` -> Optimización detenida. *El caso hace visible el fallo de Matemáticas para programación; no continúa como si la evidencia fuera válida.*
4. **Normalizar y reintentar** (Ajustar una función sin perder estabilidad: etapa 4 de 5): `x = normalizar(x)
alfa = 0.01` -> Convergencia recuperada. *La recuperación de Matemáticas para programación corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Verificar solución** (Ajustar una función sin perder estabilidad: etapa 5 de 5): `assert norma(gradiente) < tolerancia` -> Resultado reproducible. *La etapa conserva un contrato explícito para que el siguiente paso de Matemáticas para programación no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (105)

### Seccion: Lenguaje matemático (5 conceptos)

- **Lógica proposicional**  
  *Familia:* `espectro de verificación`  
  Lógica proposicional conecta una instancia acotada, sus invariantes y una medida de costo con su runtime interno: explora estados manteniendo la propiedad que garantiza corrección hasta exponer una solución acompañada de complejidad y límites conocidos.

- **Predicados y cuantificadores**  
  *Familia:* `jerarquía y dependencias`  
  En Predicados y cuantificadores, un mensaje versionado, un destino y límites de tiempo ingresa al flujo donde serializa, transporta y valida el intercambio a través de una frontera remota para consolidar una respuesta correlacionada o un estado convergente verificable.

- **Conjuntos y relaciones**  
  *Familia:* `telar relacional`  
  La función de Conjuntos y relaciones parte de una instancia acotada, sus invariantes y una medida de costo. Su ejecución explora estados manteniendo la propiedad que garantiza corrección y produce una solución acompañada de complejidad y límites conocidos.

- **Funciones y composición**  
  *Familia:* `espectro de verificación`  
  Funciones y composición estructura una instancia acotada, sus invariantes y una medida de costo en el sistema: explora estados manteniendo la propiedad que garantiza corrección, garantizando una solución acompañada de complejidad y límites conocidos.

- **Demostración e inducción**  
  *Familia:* `jerarquía y dependencias`  
  El recorrido de Demostración e inducción toma una instancia acotada, sus invariantes y una medida de costo. Posteriormente explora estados manteniendo la propiedad que garantiza corrección para validar una solución acompañada de complejidad y límites conocidos.


### Seccion: Representación numérica (5 conceptos)

- **Enteros y modularidad**  
  *Familia:* `mapa de memoria`  
  El recorrido de Enteros y modularidad toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Punto flotante IEEE 754**  
  *Familia:* `tabla de estados`  
  Punto flotante IEEE 754 procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Error absoluto y relativo**  
  *Familia:* `comparativa técnica`  
  Para entender Error absoluto y relativo, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.

- **Unidades y dimensiones**  
  *Familia:* `mapa de memoria`  
  El mecanismo de Unidades y dimensiones recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Estabilidad numérica**  
  *Familia:* `tabla de estados`  
  Estabilidad numérica conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Estructuras y cambio (5 conceptos)

- **Vectores y matrices**  
  *Familia:* `cuadrícula paralela`  
  En Vectores y matrices, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Transformaciones lineales**  
  *Familia:* `flujo de transformación`  
  La función de Transformaciones lineales parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Derivadas y gradientes**  
  *Familia:* `tabla de estados`  
  Derivadas y gradientes estructura una instancia acotada, sus invariantes y una medida de costo en el sistema: explora estados manteniendo la propiedad que garantiza corrección, garantizando una solución acompañada de complejidad y límites conocidos.

- **Recurrencias**  
  *Familia:* `cuadrícula paralela`  
  El recorrido de Recurrencias toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Grafos como relaciones**  
  *Familia:* `flujo de transformación`  
  Grafos como relaciones procesa una instancia acotada, sus invariantes y una medida de costo: explora estados manteniendo la propiedad que garantiza corrección para entregar una solución acompañada de complejidad y límites conocidos.


### Seccion: Azar y evidencia (5 conceptos)

- **Conteo y combinatoria**  
  *Familia:* `matriz de señales`  
  Conteo y combinatoria procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Probabilidad condicional**  
  *Familia:* `espectro de verificación`  
  Para entender Probabilidad condicional, se delimita una instancia acotada, sus invariantes y una medida de costo. La operación explora estados manteniendo la propiedad que garantiza corrección hasta producir una solución acompañada de complejidad y límites conocidos.

- **Variables aleatorias**  
  *Familia:* `tabla de estados`  
  El mecanismo de Variables aleatorias recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Estimación e intervalos**  
  *Familia:* `matriz de señales`  
  Estimación e intervalos conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Simulación Monte Carlo**  
  *Familia:* `espectro de verificación`  
  En Simulación Monte Carlo, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Optimización computacional (5 conceptos)

- **Funciones objetivo**  
  *Familia:* `secuencia operativa`  
  El mecanismo de Funciones objetivo recibe un workload representativo, un presupuesto y una línea base y mide la ruta crítica y cambia una variable por vez, asegurando una mejora cuantificada sin intercambiar corrección por velocidad.

- **Restricciones**  
  *Familia:* `cuadrícula paralela`  
  Restricciones conecta un workload representativo, un presupuesto y una línea base con su runtime interno: mide la ruta crítica y cambia una variable por vez hasta exponer una mejora cuantificada sin intercambiar corrección por velocidad.

- **Descenso de gradiente**  
  *Familia:* `evidencia y latencia`  
  En Descenso de gradiente, un workload representativo, un presupuesto y una línea base ingresa al flujo donde mide la ruta crítica y cambia una variable por vez para consolidar una mejora cuantificada sin intercambiar corrección por velocidad.

- **Condicionamiento**  
  *Familia:* `secuencia operativa`  
  La función de Condicionamiento parte de un workload representativo, un presupuesto y una línea base. Su ejecución mide la ruta crítica y cambia una variable por vez y produce una mejora cuantificada sin intercambiar corrección por velocidad.

- **Verificación numérica**  
  *Familia:* `cuadrícula paralela`  
  Verificación numérica estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.


### Seccion: Álgebra booleana y circuitos (5 conceptos)

- **Tablas de verdad**  
  *Familia:* `matriz de señales`  
  Enumeran todas las asignaciones posibles para comprobar equivalencia, satisfacibilidad y cobertura lógica.

- **Formas normales CNF y DNF**  
  *Familia:* `validación y decisión`  
  Reescriben proposiciones como conjunciones o disyunciones canónicas útiles para análisis y solvers.

- **Leyes de De Morgan**  
  *Familia:* `tabla de estados`  
  Distribuyen negaciones sobre conjunciones y disyunciones sin alterar el valor lógico.

- **Simplificación booleana**  
  *Familia:* `matriz de señales`  
  Reduce expresiones mediante identidades para disminuir condiciones redundantes o puertas físicas.

- **Puertas y circuitos combinacionales**  
  *Familia:* `validación y decisión`  
  Componen funciones booleanas cuya salida depende únicamente de la entrada presente.


### Seccion: Teoría de números (7 conceptos)

- **Divisibilidad y máximo común divisor**  
  *Familia:* `espectro de verificación`  
  Caracteriza factores compartidos y normaliza proporciones enteras mediante restos sucesivos.

- **Algoritmo extendido de Euclides**  
  *Familia:* `jerarquía y dependencias`  
  Calcula coeficientes de Bézout y permite obtener inversos modulares cuando existen.

- **Aritmética modular**  
  *Familia:* `telar relacional`  
  Agrupa enteros por residuos y hace seguras operaciones cíclicas bajo un módulo fijo.

- **Números primos y factorización**  
  *Familia:* `espectro de verificación`  
  Explica la descomposición única que sostiene divisores, hashes y varios sistemas criptográficos.

- **Teorema chino del resto**  
  *Familia:* `jerarquía y dependencias`  
  Reconstruye un valor a partir de residuos con módulos coprimos y una solución modular única.

- **Exponenciación modular rápida**  
  *Familia:* `telar relacional`  
  Para Exponenciación / modular / rápida, la construcción aplica una identidad o teorema paso a paso y conserva las hipótesis requeridas, manteniendo una propiedad demostrada o un valor calculado que puede contrastarse con casos pequeños.

- **Pruebas probabilísticas de primalidad**  
  *Familia:* `espectro de verificación`  
  Pruebas / probabilísticas / primalidad coordina la ejecución: la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo hasta obtener evidencia reproducible que distingue regresión, ruido y limitación conocida.


### Seccion: Combinatoria aplicada (5 conceptos)

- **Permutaciones y combinaciones**  
  *Familia:* `jerarquía y dependencias`  
  Cuenta selecciones considerando si importan orden, repetición y disponibilidad de elementos.

- **Principio del palomar**  
  *Familia:* `telar relacional`  
  Garantiza colisiones cuando más objetos ocupan menos categorías, incluso sin localizar cuál ocurre.

- **Inclusión-exclusión**  
  *Familia:* `espectro de verificación`  
  Corrige doble conteo alternando intersecciones de conjuntos solapados. El recorrido de Inclusión-exclusión toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Funciones generadoras**  
  *Familia:* `jerarquía y dependencias`  
  Codifican secuencias como coeficientes de series para operar y resolver conteos.

- **Recurrencias combinatorias**  
  *Familia:* `telar relacional`  
  Expresan un conteo mediante casos menores y requieren bases que aseguren terminación.


### Seccion: Teoría de grafos (8 conceptos)

- **Grado, camino y conectividad**  
  *Familia:* `topología y tráfico`  
  Relaciona incidencias y recorridos para determinar qué vértices pueden alcanzarse.

- **Árboles y bosques**  
  *Familia:* `jerarquía y dependencias`  
  Caracterizan grafos acíclicos donde cada par conectado posee un camino simple único.

- **Grafos bipartitos**  
  *Familia:* `telar relacional`  
  Separan vértices en dos partes y permiten detectar ciclos impares o modelar asignaciones.

- **Planaridad**  
  *Familia:* `topología y tráfico`  
  Determina si un grafo puede dibujarse sin cruces y restringe su densidad posible.

- **Coloración de grafos**  
  *Familia:* `jerarquía y dependencias`  
  Asigna recursos incompatibles a colores distintos minimizando conflictos y, cuando es posible, cantidad.

- **Teorema de Hall**  
  *Familia:* `telar relacional`  
  Para Teorema / Hall, la construcción aplica una identidad o teorema paso a paso y conserva las hipótesis requeridas, manteniendo una propiedad demostrada o un valor calculado que puede contrastarse con casos pequeños.

- **Cortes y puentes**  
  *Familia:* `topología y tráfico`  
  Cortes / puentes coordina la ejecución: la construcción aplica una identidad o teorema paso a paso y conserva las hipótesis requeridas hasta obtener una propiedad demostrada o un valor calculado que puede contrastarse con casos pequeños.

- **Espectro de un grafo**  
  *Familia:* `jerarquía y dependencias`  
  Al operar con Espectro / un / grafo, la construcción aplica una identidad o teorema paso a paso y conserva las hipótesis requeridas, produciendo una propiedad demostrada o un valor calculado que puede contrastarse con casos pequeños.


### Seccion: Probabilidad discreta (6 conceptos)

- **Espacios muestrales**  
  *Familia:* `matriz de señales`  
  Define resultados posibles y eventos medibles antes de asignar probabilidades coherentes.

- **Independencia de eventos**  
  *Familia:* `espectro de verificación`  
  Comprueba si observar un evento deja intacta la probabilidad del otro. Independencia de eventos estructura fuentes versionadas, dependencias fijadas y configuración declarativa en el sistema: resuelve, construye y empaqueta el artefacto de forma repetible, garantizando una unidad identificable que puede verificarse antes de promoverse.

- **Teorema de Bayes**  
  *Familia:* `tabla de estados`  
  Actualiza una creencia con evidencia combinando verosimilitud, prior y probabilidad marginal.

- **Esperanza y varianza**  
  *Familia:* `matriz de señales`  
  Resumen centro y dispersión sin afirmar que un resultado individual tomará esos valores.

- **Cadenas de Markov**  
  *Familia:* `espectro de verificación`  
  Modelan transiciones cuyo próximo estado depende del actual mediante una matriz estocástica.

- **Concentración y desigualdad de Chernoff**  
  *Familia:* `tabla de estados`  
  Para Concentración / desigualdad / Chernoff, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, manteniendo una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.


### Seccion: Inferencia estadística (7 conceptos)

- **Muestreo y sesgo**  
  *Familia:* `matriz de señales`  
  Evalúa si el mecanismo de selección representa la población o favorece sistemáticamente ciertos casos.

- **Estimación puntual**  
  *Familia:* `espectro de verificación`  
  Calcula un parámetro con un estadístico y acompaña el valor con su incertidumbre.

- **Pruebas de hipótesis**  
  *Familia:* `tabla de estados`  
  Cuantifican incompatibilidad con un modelo nulo sin convertir un p-valor en probabilidad causal.

- **Potencia estadística**  
  *Familia:* `matriz de señales`  
  Mide la probabilidad de detectar un efecto real bajo tamaño, ruido y umbral dados.

- **Corrección por comparaciones múltiples**  
  *Familia:* `espectro de verificación`  
  Controla falsos positivos cuando muchas hipótesis se prueban sobre los mismos datos.

- **Intervalos bootstrap**  
  *Familia:* `tabla de estados`  
  Para Intervalos / bootstrap, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, manteniendo una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Tamaño del efecto**  
  *Familia:* `matriz de señales`  
  Tamaño / efecto coordina la ejecución: la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas hasta obtener un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.


### Seccion: Álgebra lineal computacional (6 conceptos)

- **Producto interno y normas**  
  *Familia:* `cuadrícula paralela`  
  Define longitud, ángulo y similitud respetando las propiedades del espacio vectorial.

- **Sistemas de ecuaciones lineales**  
  *Familia:* `tabla de estados`  
  Representan restricciones simultáneas y distinguen solución única, múltiple o inconsistente.

- **Descomposición LU**  
  *Familia:* `flujo de transformación`  
  Factoriza una matriz en triangulares para resolver varios términos independientes eficientemente.

- **Autovalores y autovectores**  
  *Familia:* `cuadrícula paralela`  
  Encuentran direcciones que una transformación solo escala y revelan modos dominantes.

- **Descomposición en valores singulares**  
  *Familia:* `tabla de estados`  
  Factoriza cualquier matriz para analizar rango, aproximación y condicionamiento.

- **Número de condición matricial**  
  *Familia:* `flujo de transformación`  
  Para Número / condición / matricial, el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, manteniendo un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.


### Seccion: Geometría y transformaciones (7 conceptos)

- **Coordenadas cartesianas y polares**  
  *Familia:* `consulta e índice`  
  Cambia entre componentes rectangulares y magnitud-ángulo cuidando cuadrantes y origen.

- **Trigonometría computacional**  
  *Familia:* `telar relacional`  
  Relaciona ángulos y razones mientras controla unidades, dominios y errores de aproximación.

- **Transformaciones afines**  
  *Familia:* `flujo de transformación`  
  Combina traslación, escala, rotación y cizalla mediante matrices homogéneas componibles.

- **Cuaterniones y rotaciones**  
  *Familia:* `consulta e índice`  
  Representa orientación tridimensional evitando singularidades y permite interpolación suave.

- **Intersecciones geométricas**  
  *Familia:* `evidencia y latencia`  
  Resuelve contactos con ecuaciones paramétricas y tolerancias coherentes para casos degenerados.

- **Coordenadas baricéntricas**  
  *Familia:* `mapa de memoria`  
  Para Coordenadas / baricéntricas, el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible, manteniendo interfaz sincronizada que comunica cambio, foco y acción disponible.

- **Geometría proyectiva**  
  *Familia:* `consulta e índice`  
  Geometría / proyectiva coordina la ejecución: el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar hasta obtener estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### Seccion: Cálculo numérico (5 conceptos)

- **Límites y continuidad**  
  *Familia:* `secuencia operativa`  
  Describen el comportamiento cercano a un punto y justifican aproximaciones sin saltos inesperados.

- **Integración numérica**  
  *Familia:* `flujo de transformación`  
  Aproxima áreas mediante muestras y controla el error con particiones o reglas adaptativas.

- **Diferenciación automática**  
  *Familia:* `evidencia y latencia`  
  Propaga derivadas exactas de operaciones elementales sin el error de diferencias finitas.

- **Métodos de búsqueda de raíces**  
  *Familia:* `secuencia operativa`  
  Iteran sobre una función hasta localizar un cero con condiciones y convergencia verificables.

- **Ecuaciones diferenciales discretizadas**  
  *Familia:* `flujo de transformación`  
  Sustituyen evolución continua por pasos cuya estabilidad depende del método y tamaño.


### Seccion: Optimización avanzada (8 conceptos)

- **Convexidad**  
  *Familia:* `cuadrícula paralela`  
  Garantiza que un mínimo local sea global cuando objetivo y región factible cumplen la propiedad.

- **Multiplicadores de Lagrange**  
  *Familia:* `secuencia operativa`  
  Incorporan restricciones de igualdad mediante variables duales y condiciones de estacionariedad.

- **Métodos de Newton**  
  *Familia:* `evidencia y latencia`  
  Usan curvatura local para acelerar convergencia, pero requieren derivadas y un inicio razonable.

- **Optimización estocástica**  
  *Familia:* `cuadrícula paralela`  
  Estima gradientes con muestras para reducir costo aceptando ruido controlado. Optimización estocástica procesa un workload representativo, un presupuesto y una línea base: mide la ruta crítica y cambia una variable por vez para entregar una mejora cuantificada sin intercambiar corrección por velocidad.

- **Criterios de parada**  
  *Familia:* `secuencia operativa`  
  Combinan mejora, gradiente, factibilidad y presupuesto para no confundir estancamiento con convergencia.

- **Condiciones KKT**  
  *Familia:* `evidencia y latencia`  
  Para Condiciones / KKT, el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, manteniendo una mejora medible con distribución, entorno y comparación documentados.

- **Métodos de punto interior**  
  *Familia:* `cuadrícula paralela`  
  Métodos / punto / interior coordina la ejecución: el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible hasta obtener el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Optimización multiobjetivo**  
  *Familia:* `secuencia operativa`  
  Al operar con Optimización / multiobjetivo, el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica, produciendo una mejora medible con distribución, entorno y comparación documentados.


### Seccion: Teoría de la información (5 conceptos)

- **Entropía**  
  *Familia:* `consulta e índice`  
  Cuantifica incertidumbre promedio de una fuente y fija un límite de compresión ideal.

- **Información mutua**  
  *Familia:* `telar relacional`  
  Mide cuánto reduce una variable la incertidumbre de otra sin implicar causalidad.

- **Codificación sin pérdida**  
  *Familia:* `flujo de transformación`  
  Asigna representaciones recuperables aprovechando frecuencias sin eliminar información original.

- **Capacidad de canal**  
  *Familia:* `tejido de eventos`  
  Acota la tasa fiable máxima según ruido y restricciones de transmisión. Capacidad de canal conecta tareas con dependencias, recursos compartidos y una señal de cancelación con su runtime interno: ordena trabajo y sincronización sin ocultar intercalados posibles hasta exponer progreso concurrente con ownership y terminación observables.

- **Distancias entre distribuciones**  
  *Familia:* `evidencia y latencia`  
  Comparan modelos probabilísticos con métricas o divergencias cuyas propiedades deben distinguirse.


### Seccion: Fundamentos criptográficos (5 conceptos)

- **Grupos y campos finitos**  
  *Familia:* `espectro de verificación`  
  Ofrecen operaciones cerradas e inversas donde se construyen protocolos algebraicos reproducibles.

- **Problemas de logaritmo discreto**  
  *Familia:* `pasaporte del artefacto`  
  Sustentan seguridad cuando invertir una exponenciación modular resulta computacionalmente difícil.

- **Curvas elípticas**  
  *Familia:* `validación y decisión`  
  Forman grupos de puntos que logran seguridad equivalente con claves más pequeñas.

- **Funciones unidireccionales**  
  *Familia:* `espectro de verificación`  
  Son fáciles de evaluar y deliberadamente difíciles de invertir sin información secreta.

- **Aleatoriedad criptográfica**  
  *Familia:* `pasaporte del artefacto`  
  Exige salidas impredecibles derivadas de entropía suficiente y generadores aprobados.


### Seccion: Métodos formales (6 conceptos)

- **Lógica de Hoare**  
  *Familia:* `validación y decisión`  
  Relaciona precondición, programa y postcondición para demostrar corrección parcial de instrucciones.

- **Invariantes inductivos**  
  *Familia:* `espectro de verificación`  
  Se mantienen en el estado inicial y tras cada transición, encerrando todos los estados alcanzables.

- **Satisfacibilidad SAT y SMT**  
  *Familia:* `consulta e índice`  
  Busca asignaciones que cumplen fórmulas booleanas o teorías y devuelve modelos o insatisfacibilidad.

- **Model checking**  
  *Familia:* `telar relacional`  
  Explora estados finitos para verificar propiedades temporales y producir contraejemplos concretos.

- **Pruebas asistidas por computadora**  
  *Familia:* `espectro de verificación`  
  Construyen términos verificables por un kernel pequeño que certifica cada paso lógico.

- **Refinement types**  
  *Familia:* `análisis y emisión`  
  Para Refinement / types, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, manteniendo una operación tipada cuyo contrato puede consumirse sin repetir validaciones.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Fundamentos](Grupo-Fundamentals) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
