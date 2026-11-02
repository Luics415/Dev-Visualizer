# Fundamentos de programación (101)

> **Problemas, datos, control, funciones, diseño, pruebas y pensamiento computacional.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `programming-fundamentals` |
| **Grupo Arquitectonico** | [Fundamentos](Grupo-Fundamentals) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `javascript` |
| **Total de Conceptos** | **91 conceptos** |
| **Capitulos / Secciones** | **15 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/fundamentos-programacion)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/fundamentos-programacion-en-accion)


## Estudio de Caso Practico: De una necesidad a un programa comprobable

> **Caso integrado de Fundamentos de programación:** Una calculadora de consumo doméstico convierte requisitos ambiguos en reglas, detecta una lectura imposible, corrige el dato y entrega un resumen verificable.  
> El resultado incluye ejemplos, límites y una traza que otra persona puede repetir.

### Fases de Ejecucion:
1. **Definir contrato** (De una necesidad a un programa comprobable: etapa 1 de 5): `entrada: lecturas y tarifa
salida: consumo y costo` -> Contrato mínimo acordado. *La etapa conserva un contrato explícito para que el siguiente paso de Fundamentos de programación no dependa de supuestos ocultos.*
2. **Diseñar algoritmo** (De una necesidad a un programa comprobable: etapa 2 de 5): `consumo = actual - anterior
costo = consumo * tarifa` -> Traza normal resuelta. *La etapa conserva un contrato explícito para que el siguiente paso de Fundamentos de programación no dependa de supuestos ocultos.*
3. **Detectar lectura inválida** (De una necesidad a un programa comprobable: etapa 3 de 5): `actual = 1840
anterior = 1912` -> La ejecución se detiene con diagnóstico. *El caso hace visible el fallo de Fundamentos de programación; no continúa como si la evidencia fuera válida.*
4. **Recuperar el dato** (De una necesidad a un programa comprobable: etapa 4 de 5): `actual = solicitar_lectura_corregida()
assert actual >= anterior` -> Entrada corregida y trazable. *La recuperación de Fundamentos de programación corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Verificar resultado** (De una necesidad a un programa comprobable: etapa 5 de 5): `assert costo == 236.40
imprimir_resumen()` -> Programa pequeño y comprobable. *La etapa conserva un contrato explícito para que el siguiente paso de Fundamentos de programación no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (91)

### Seccion: Pensamiento computacional (5 conceptos)

- **Problema, entrada y salida**  
  *Familia:* `flujo de ejecución`  
  Para entender Problema, entrada y salida, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Descomposición en subproblemas**  
  *Familia:* `jerarquía y dependencias`  
  El mecanismo de Descomposición en subproblemas recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Patrones y abstracciones**  
  *Familia:* `contratos coordinados`  
  Patrones y abstracciones conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Algoritmo y programa**  
  *Familia:* `flujo de ejecución`  
  En Algoritmo y programa, una instancia acotada, sus invariantes y una medida de costo ingresa al flujo donde explora estados manteniendo la propiedad que garantiza corrección para consolidar una solución acompañada de complejidad y límites conocidos.

- **Pseudocódigo y trazas manuales**  
  *Familia:* `jerarquía y dependencias`  
  La función de Pseudocódigo y trazas manuales parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Datos y ejecución (5 conceptos)

- **Valores, tipos y representación**  
  *Familia:* `matriz de señales`  
  Para entender Valores, tipos y representación, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.

- **Variables y constantes**  
  *Familia:* `consulta e índice`  
  El mecanismo de Variables y constantes recibe datos identificables junto con esquema, restricciones y procedencia y valida, representa y recorre cada valor preservando relaciones, asegurando información consultable con integridad y significado estables.

- **Expresiones y operadores**  
  *Familia:* `mapa de memoria`  
  Expresiones y operadores conecta datos identificables junto con esquema, restricciones y procedencia con su runtime interno: valida, representa y recorre cada valor preservando relaciones hasta exponer información consultable con integridad y significado estables.

- **Memoria y cambio de estado**  
  *Familia:* `memoria intermedia`  
  En Memoria y cambio de estado, valores con representación, dirección y tiempo de vida definidos ingresa al flujo donde reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime para consolidar estado accesible sin referencias colgantes ni corrupción.

- **Entrada, salida y efectos**  
  *Familia:* `consulta e índice`  
  La función de Entrada, salida y efectos parte de datos identificables junto con esquema, restricciones y procedencia. Su ejecución valida, representa y recorre cada valor preservando relaciones y produce información consultable con integridad y significado estables.


### Seccion: Control y composición (5 conceptos)

- **Condiciones y ramas**  
  *Familia:* `flujo de ejecución`  
  La función de Condiciones y ramas parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Bucles e invariantes**  
  *Familia:* `jerarquía y dependencias`  
  Bucles e invariantes estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.

- **Funciones y parámetros**  
  *Familia:* `contratos coordinados`  
  El recorrido de Funciones y parámetros toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Alcance y tiempo de vida**  
  *Familia:* `flujo de ejecución`  
  Alcance y tiempo de vida procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Colecciones elementales**  
  *Familia:* `jerarquía y dependencias`  
  Para entender Colecciones elementales, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Errores y diagnóstico (5 conceptos)

- **Errores de sintaxis**  
  *Familia:* `evidencia y latencia`  
  La función de Errores de sintaxis parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Errores de ejecución**  
  *Familia:* `diagnóstico operativo`  
  Errores de ejecución estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Errores lógicos**  
  *Familia:* `secuencia operativa`  
  El recorrido de Errores lógicos toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.

- **Depuración por evidencia**  
  *Familia:* `evidencia y latencia`  
  Depuración por evidencia procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Casos límite y datos inválidos**  
  *Familia:* `tabla de estados`  
  Para entender Casos límite y datos inválidos, se delimita datos identificables junto con esquema, restricciones y procedencia. La operación valida, representa y recorre cada valor preservando relaciones hasta producir información consultable con integridad y significado estables.


### Seccion: Calidad y crecimiento (5 conceptos)

- **Nombres y legibilidad**  
  *Familia:* `espectro de verificación`  
  La función de Nombres y legibilidad parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Pruebas con ejemplos**  
  *Familia:* `validación y decisión`  
  Pruebas con ejemplos estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Refactorización pequeña**  
  *Familia:* `tejido de eventos`  
  El recorrido de Refactorización pequeña toma tareas con dependencias, recursos compartidos y una señal de cancelación. Posteriormente ordena trabajo y sincronización sin ocultar intercalados posibles para validar progreso concurrente con ownership y terminación observables.

- **Complejidad intuitiva**  
  *Familia:* `comparativa técnica`  
  Complejidad intuitiva procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Versionado y documentación**  
  *Familia:* `espectro de verificación`  
  Para entender Versionado y documentación, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.


### Seccion: Representación de información (7 conceptos)

- **Bits, bytes y palabras**  
  *Familia:* `consulta e índice`  
  Relaciona la unidad binaria, su agrupación en bytes y el ancho natural que procesa una CPU.

- **Sistemas binario y hexadecimal**  
  *Familia:* `telar relacional`  
  Convierte cantidades entre bases para leer máscaras, direcciones y representaciones compactas sin perder valor.

- **Codificación de texto y Unicode**  
  *Familia:* `tejido literario`  
  Explica cómo puntos de código, codificaciones y grafemas evitan confundir caracteres con bytes.

- **Representación de imágenes y sonido**  
  *Familia:* `planificación de trabajo`  
  Muestra cómo muestreo, resolución, canales y compresión convierten señales en datos discretos.

- **Serialización de datos**  
  *Familia:* `análisis y emisión`  
  Transforma estructuras en formatos transportables preservando esquema, tipos, versión y límites de confianza.

- **Complemento a dos**  
  *Familia:* `consulta e índice`  
  Para Complemento / a / dos, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, manteniendo estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Compresión con y sin pérdida**  
  *Familia:* `telar relacional`  
  Compresión / sin / pérdida coordina la ejecución: el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar hasta obtener estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### Seccion: Diseño paso a paso (5 conceptos)

- **Requisitos observables**  
  *Familia:* `flujo de ejecución`  
  Convierte una necesidad ambigua en comportamientos verificables con entradas, resultados y restricciones explícitas.

- **Precondiciones y postcondiciones**  
  *Familia:* `jerarquía y dependencias`  
  Define qué debe cumplirse antes de una operación y qué garantiza después de completarla.

- **Casos de uso mínimos**  
  *Familia:* `contratos coordinados`  
  Recorta un problema a recorridos representativos que permitan aprender y validar antes de ampliar alcance.

- **Diagramas de flujo**  
  *Familia:* `flujo de ejecución`  
  Representa decisiones, repeticiones y terminaciones para detectar caminos omitidos antes de programar.

- **Descomposición descendente**  
  *Familia:* `jerarquía y dependencias`  
  Divide una responsabilidad grande en tareas pequeñas hasta que cada paso sea implementable y comprobable.


### Seccion: Modelado de datos (7 conceptos)

- **Entidades y atributos**  
  *Familia:* `configuración declarativa`  
  Separa objetos relevantes del dominio de las propiedades necesarias para describirlos.

- **Identidad frente a igualdad**  
  *Familia:* `anatomía del concepto`  
  Distingue si dos valores representan el mismo objeto o solamente contienen datos equivalentes.

- **Registros y estructuras**  
  *Familia:* `mapa de memoria`  
  Agrupa campos relacionados bajo un contrato que evita parámetros sueltos y combinaciones inválidas.

- **Enumeraciones y estados válidos**  
  *Familia:* `máquina de estados`  
  Restringe opciones a un conjunto cerrado para impedir valores imposibles durante la ejecución.

- **Relaciones entre datos**  
  *Familia:* `consulta e índice`  
  Modela pertenencia, referencia y cardinalidad para conservar vínculos sin duplicación contradictoria.

- **Normalización de estados**  
  *Familia:* `secuencia operativa`  
  Para Normalización / estados, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, manteniendo estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Valores opcionales y ausencia**  
  *Familia:* `telar relacional`  
  Valores / opcionales / ausencia coordina la ejecución: el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos hasta obtener un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.


### Seccion: Estado, efectos y tiempo (6 conceptos)

- **Estado mutable e inmutable**  
  *Familia:* `máquina de estados`  
  Compara cambiar un valor en sitio con producir uno nuevo y hace visibles sus efectos compartidos.

- **Funciones puras y efectos laterales**  
  *Familia:* `secuencia operativa`  
  Aísla cálculos deterministas de operaciones que leen, escriben o dependen del entorno.

- **Orden de evaluación**  
  *Familia:* `propagación de eventos`  
  Explica por qué la secuencia de efectos altera resultados aunque las expresiones parezcan equivalentes.

- **Idempotencia básica**  
  *Familia:* `máquina de estados`  
  Diseña operaciones repetibles cuyo efecto final no cambia cuando una solicitud se procesa nuevamente.

- **Relojes, fechas y zonas horarias**  
  *Familia:* `secuencia operativa`  
  Diferencia instante, duración y hora civil para evitar cálculos ambiguos por horario local.

- **Máquinas de estados finitos**  
  *Familia:* `propagación de eventos`  
  Para Máquinas / estados / finitos, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, manteniendo un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.


### Seccion: Modularidad y contratos (8 conceptos)

- **Separación de responsabilidades**  
  *Familia:* `flujo de ejecución`  
  Asigna a cada módulo una razón clara de cambio para limitar efectos colaterales.

- **Interfaces como contratos**  
  *Familia:* `jerarquía y dependencias`  
  Declara operaciones y garantías públicas sin obligar a conocer la implementación interna.

- **Acoplamiento y cohesión**  
  *Familia:* `contratos coordinados`  
  Evalúa dependencias entre módulos y mantiene juntas las piezas que resuelven una misma responsabilidad.

- **Reutilización frente a duplicación**  
  *Familia:* `flujo de ejecución`  
  Extrae una abstracción solo cuando comparte significado, no únicamente líneas con apariencia similar.

- **Dependencias explícitas**  
  *Familia:* `jerarquía y dependencias`  
  Recibe servicios y configuración de forma visible para facilitar pruebas y reemplazos controlados.

- **Encapsulación de invariantes**  
  *Familia:* `contratos coordinados`  
  Para Encapsulación / invariantes, el runtime recorre tablas, ancestros o adaptadores hasta seleccionar una implementación compatible, manteniendo el método correcto ejecutado con estado encapsulado y una respuesta asociada al contrato.

- **Inversión de dependencias elemental**  
  *Familia:* `flujo de ejecución`  
  Inversión / dependencias / elemental coordina la ejecución: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida hasta obtener un artefacto reproducible, verificable y promovible entre entornos.

- **Compatibilidad de interfaces**  
  *Familia:* `jerarquía y dependencias`  
  Al operar con Compatibilidad / interfaces, el checker resuelve compatibilidad, inferencia, bounds y alternativas permitidas antes de emitir código, produciendo una operación tipada cuyo contrato puede consumirse sin repetir validaciones.


### Seccion: Estrategias de prueba (6 conceptos)

- **Tabla de casos de prueba**  
  *Familia:* `espectro de verificación`  
  Relaciona entradas, contexto y salida esperada para revelar huecos y evitar comprobaciones improvisadas.

- **Particiones de equivalencia**  
  *Familia:* `validación y decisión`  
  Agrupa entradas que ejercen el mismo comportamiento y reduce pruebas redundantes sin perder cobertura semántica.

- **Valores frontera**  
  *Familia:* `tabla de estados`  
  Prueba justo antes, en y después de cada límite donde suelen aparecer errores de comparación.

- **Pruebas unitarias e integración**  
  *Familia:* `espectro de verificación`  
  Distingue reglas aisladas de colaboraciones reales para localizar fallos sin ignorar contratos entre componentes.

- **Dobles de prueba elementales**  
  *Familia:* `validación y decisión`  
  Sustituye dependencias lentas o variables con stubs y fakes cuyo comportamiento está deliberadamente acotado.

- **Pruebas de regresión**  
  *Familia:* `tabla de estados`  
  Para Pruebas / regresión, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, manteniendo evidencia reproducible que distingue regresión, ruido y limitación conocida.


### Seccion: Herramientas de desarrollo (7 conceptos)

- **Editor e IDE**  
  *Familia:* `pasaporte del artefacto`  
  Integra navegación, análisis y ejecución manteniendo visibles las operaciones que automatiza la herramienta.

- **Terminal y línea de comandos**  
  *Familia:* `capas internas`  
  Compone programas mediante argumentos, entrada, salida y códigos de estado reproducibles.

- **Compilador e intérprete**  
  *Familia:* `análisis y emisión`  
  Contrasta traducir antes de ejecutar con evaluar durante la ejecución y ubica sus diagnósticos.

- **Breakpoints y ejecución paso a paso**  
  *Familia:* `pasaporte del artefacto`  
  Detiene el programa en estados relevantes para inspeccionar variables y seguir el origen de una desviación.

- **Gestores de paquetes**  
  *Familia:* `capas internas`  
  Resuelven versiones y dependencias, pero requieren bloqueos y procedencia verificable para repetir una instalación.

- **Formateadores y linters**  
  *Familia:* `workflow y decisiones`  
  Para Formateadores / linters, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, manteniendo estado persistido con integridad y visibilidad coherentes para lectores concurrentes.

- **Automatización de tareas repetibles**  
  *Familia:* `mapa de memoria`  
  Automatización / tareas / repetibles coordina la ejecución: el grafo resuelve dependencias, compila, enlaza y adjunta procedencia a cada salida hasta obtener un artefacto reproducible, verificable y promovible entre entornos.


### Seccion: Seguridad desde el inicio (6 conceptos)

- **Datos confiables y no confiables**  
  *Familia:* `validación y decisión`  
  Marca toda entrada externa como potencialmente hostil hasta comprobar formato, tamaño y autorización.

- **Validación y normalización**  
  *Familia:* `telar relacional`  
  Comprueba reglas sobre una representación canónica para que variantes equivalentes no eludan controles.

- **Secretos fuera del código**  
  *Familia:* `espectro de verificación`  
  Carga credenciales desde almacenes protegidos y evita registrarlas, versionarlas o incluirlas en artefactos.

- **Principio de mínimo privilegio**  
  *Familia:* `matriz de señales`  
  Concede solo capacidades necesarias durante el tiempo mínimo para reducir el impacto de un fallo.

- **Manejo seguro de errores**  
  *Familia:* `evidencia y latencia`  
  Entrega mensajes útiles sin filtrar rutas, credenciales ni detalles internos aprovechables por un atacante.

- **Codificación segura de salida**  
  *Familia:* `validación y decisión`  
  Para Codificación / segura / salida, el control autentica, autoriza, normaliza y registra evidencia sin revelar secretos, manteniendo solo la capacidad permitida ejecutada con una decisión que puede auditarse.


### Seccion: Recursos y rendimiento (7 conceptos)

- **Costo de CPU**  
  *Familia:* `planificación de trabajo`  
  Cuenta operaciones y tiempo de procesador para distinguir cálculo útil de ciclos desperdiciados.

- **Consumo de memoria**  
  *Familia:* `memoria intermedia`  
  Observa asignaciones, retención y picos para evitar agotamiento o presión innecesaria del recolector.

- **Latencia y throughput**  
  *Familia:* `evidencia y latencia`  
  Separa el tiempo de una operación de la cantidad completada por unidad de tiempo.

- **Trabajo redundante**  
  *Familia:* `topología y tráfico`  
  Elimina recomputaciones solo cuando cachear o reutilizar resultados conserva corrección y memoria aceptable.

- **Medición antes de optimizar**  
  *Familia:* `secuencia operativa`  
  Establece un baseline reproducible para corregir el cuello real y comprobar la mejora.

- **Complejidad empírica**  
  *Familia:* `comparativa técnica`  
  Para Complejidad / empírica, la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas, manteniendo un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.

- **Presupuestos de recursos**  
  *Familia:* `acumulación de recursos`  
  Presupuestos / recursos coordina la ejecución: la evaluación aplica, compone o reduce expresiones propagando contexto sin mutar entradas compartidas hasta obtener un nuevo valor que mantiene las leyes de composición y puede razonarse localmente.


### Seccion: Entrega y mantenimiento (7 conceptos)

- **Configuración por entorno**  
  *Familia:* `configuración declarativa`  
  Separa valores desplegables del código y valida su presencia antes de aceptar tráfico.

- **Logs útiles**  
  *Familia:* `evidencia y latencia`  
  Registra eventos con contexto y correlación sin convertir datos sensibles en una fuga permanente.

- **Compatibilidad hacia atrás**  
  *Familia:* `pasaporte del artefacto`  
  Evoluciona contratos manteniendo clientes anteriores o declarando una migración medible.

- **Deuda técnica deliberada**  
  *Familia:* `validación y decisión`  
  Documenta el atajo, su riesgo, la condición de pago y el responsable de revisarlo.

- **Ciclo de vida del software**  
  *Familia:* `anatomía del concepto`  
  Abarca diseño, construcción, operación, actualización y retiro seguro como partes del mismo producto.

- **Migraciones de configuración**  
  *Familia:* `secuencia operativa`  
  Para Migraciones / configuración, el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada, manteniendo servicio disponible con estado, versión y camino de rollback verificables.

- **Retiro seguro de funcionalidades**  
  *Familia:* `flujo de transformación`  
  Retiro / seguro / funcionalidades coordina la ejecución: el proceso inicia, atiende, emite telemetría y responde a drenado o actualización coordinada hasta obtener servicio disponible con estado, versión y camino de rollback verificables.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Fundamentos](Grupo-Fundamentals) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
