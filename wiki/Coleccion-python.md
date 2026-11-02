# 📘 [Py] Python

> **Desde cero: lenguaje, biblioteca estándar, automatización, web, datos, IA y producción.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `python` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `python` |
| **Total de Conceptos** | **240 conceptos** |
| **Capítulos / Secciones** | **48 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/python)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/python-en-accion)**


## 🔬 Caso Práctico en Acción: Python en acción

> **Caso integrado · Observatorio de telemetría reproducible:** Un servicio de Python recibe mediciones heterogéneas, las analiza sin bloquear el proceso, rechaza datos ambiguos, normaliza unidades, calcula indicadores y publica un informe trazable. Un lote corrupto activa aislamiento y reanudación sin duplicar resultados.  
> El caso conecta lenguaje, objetos, iteradores, context managers, tipado, asyncio, procesos, pruebas, empaquetado, seguridad y observabilidad en un flujo que puede repetirse y auditarse.

### Fases de Ejecución:
1. **Definir el contrato** (Entradas y resultado verificable): `bytes → Measurement | ValidationError` → frontera comprensible. *Antes de optimizar se decide qué significa una medición válida.*
2. **Crear el entorno** (Runtime reproducible): `python -m venv .venv` → ejecución aislada. *El entorno forma parte del artefacto reproducible.*
3. **Leer como stream** (Demanda acotada): `async for chunk in source` → ingesta estable. *El productor solo avanza al ritmo aceptado por el consumidor.*
4. **Decodificar y parsear** (Bytes no son objetos): `decode('utf-8') → csv rows` → filas estructuradas. *Cada frontera conserva suficiente contexto para diagnosticar sin registrar secretos.*
5. **Validar modelos** (Parsear hacia el dominio): `Measurement.from_row(row)` → objetos válidos. *Una fila inválida no se disfraza con defaults silenciosos.*
6. **Normalizar unidades** (Funciones puras): `fahrenheit → celsius` → mediciones comparables. *La transformación puede probarse sin red, archivos ni reloj global.*
7. **Calcular en paralelo** (CPU fuera del event loop): `await to_process_pool(aggregate)` → indicadores calculados. *El trabajo de CPU no congela las operaciones de entrada y salida.*
8. **Detectar el lote corrupto** (Fallo explícito): `checksum mismatch · batch 042` → lote en cuarentena. *La excepción contiene causa y posición; no se captura como un error genérico.*
9. **Reanudar idempotentemente** (Checkpoint y recuperación): `resume(offset) + idempotency_key` → flujo recuperado. *Repetir el trabajo produce el mismo resultado observable.*
10. **Persistir de forma atómica** (Temporal y reemplazo): `write temp → fsync → replace` → artefacto íntegro. *La ruta de error también cierra archivos y elimina temporales propios.*
11. **Probar propiedades** (Ejemplos y casos generados): `pytest + round-trip invariants` → comportamiento demostrado. *Las pruebas cubren resultado y recuperación, no solo líneas ejecutadas.*
12. **Observar el runtime** (Trazas, logs y métricas): `trace_id · queue_depth · p95` → salud interpretable. *La telemetría evita payloads sensibles y conserva correlación.*
13. **Empaquetar y comprobar** (Un artefacto instalable): `python -m build → wheel → clean env` → entrega reproducible. *Se prueba exactamente lo que se distribuirá.*
14. **Cerrar ordenadamente** (Cancelación cooperativa): `stop intake → drain → close` → observatorio operable. *El resultado coloreado permanece legible y alimenta el siguiente lote del loop.*


---

## 📚 Desglose Exhaustivo de Conceptos (240)

### 📑 Sección: Antes de escribir código (5 conceptos)

- **Problema, entrada y salida**  
  *Familia:* `capas internas`  
  Describe con palabras qué recibe el programa, qué resultado debe producir y qué condiciones hacen válido ese resultado.

- **Algoritmo**  
  *Familia:* `diagnóstico operativo`  
  Descompone una meta en pasos finitos, ordenados y no ambiguos antes de elegir sintaxis.

- **Datos y estado**  
  *Familia:* `máquina de estados`  
  Distingue la información que entra, la que cambia durante el proceso y la que debe conservarse después.

- **Caso normal y casos límite**  
  *Familia:* `consulta e índice`  
  Ensaya primero un ejemplo sencillo y después vacío, mínimo, máximo, repetido, inválido o interrumpido.

- **Depuración como experimento**  
  *Familia:* `telar relacional`  
  Observa un síntoma, formula una hipótesis, cambia una sola variable y conserva evidencia de la causa.


### 📑 Sección: Preparar el entorno (5 conceptos)

- **Instalación oficial**  
  *Familia:* `pasaporte del artefacto`  
  Obtiene Python desde un distribuidor confiable y comprende qué intérprete, launcher y herramientas quedaron instalados.

- **Versión e implementación**  
  *Familia:* `mapa de memoria`  
  Lee python --version y platform.python_implementation para no confundir Python 3.14 con CPython, PyPy u otro runtime.

- **REPL**  
  *Familia:* `espectro de verificación`  
  Prueba expresiones de forma inmediata y reconoce que su estado desaparece al cerrar la sesión.

- **Scripts y terminal**  
  *Familia:* `matriz de señales`  
  Guarda instrucciones en un archivo .py, lo ejecuta desde su carpeta y comprende directorio de trabajo y código de salida.

- **Editor y ayuda integrada**  
  *Familia:* `configuración declarativa`  
  Usa resaltado, autocompletado, terminal, help, dir y documentación sin depender de copiar código desconocido.


### 📑 Sección: Primer programa y sintaxis (5 conceptos)

- **Indentación significativa**  
  *Familia:* `evidencia y latencia`  
  Agrupa bloques mediante espacios consistentes y entiende por qué una sangría cambia el flujo del programa.

- **Comentarios y legibilidad**  
  *Familia:* `ida y vuelta`  
  Explica intención o restricciones sin narrar literalmente cada instrucción.

- **Nombres y asignación**  
  *Familia:* `análisis y emisión`  
  Vincula un nombre con un objeto y diferencia reasignar el nombre de mutar el objeto.

- **Expresiones y sentencias**  
  *Familia:* `evidencia y latencia`  
  Separa lo que calcula un valor de lo que controla, importa, define o modifica el estado.

- **print e input**  
  *Familia:* `validación y decisión`  
  Muestra resultados, recibe texto del usuario y convierte explícitamente cuando necesita otro tipo.


### 📑 Sección: Números, verdad y ausencia (5 conceptos)

- **int**  
  *Familia:* `pasaporte del artefacto`  
  Representa enteros de precisión arbitraria y aplica división, módulo, potencias y bases numéricas con intención.

- **float**  
  *Familia:* `evidencia y latencia`  
  Reconoce aproximación binaria, valores infinitos y NaN para no exigir igualdad decimal imposible.

- **bool y operadores lógicos**  
  *Familia:* `flujo de transformación`  
  Compone condiciones con and, or y not atendiendo evaluación perezosa y valores truthy o falsy.

- **None**  
  *Familia:* `secuencia operativa`  
  Representa ausencia deliberada y se compara por identidad con is, no como cero ni cadena vacía.

- **Decimal, Fraction y complex**  
  *Familia:* `evidencia y latencia`  
  Elige aritmética decimal, racional o compleja cuando el dominio no encaja en int o float.


### 📑 Sección: Texto, Unicode y bytes (5 conceptos)

- **str y puntos de código**  
  *Familia:* `capas internas`  
  Trata el texto como Unicode y distingue caracteres percibidos, puntos de código y unidades almacenadas.

- **Indexación y slicing**  
  *Familia:* `consulta e índice`  
  Extrae posiciones y rangos sin olvidar límites exclusivos, índices negativos e inmutabilidad.

- **Métodos y formato**  
  *Familia:* `planificación de trabajo`  
  Normaliza, separa, une y construye mensajes con f-strings sin concatenaciones frágiles.

- **Codificar y decodificar**  
  *Familia:* `anatomía del concepto`  
  Convierte entre str y bytes usando una codificación explícita y una política consciente ante errores.

- **bytes, bytearray y memoryview**  
  *Familia:* `tabla de estados`  
  Distingue datos binarios inmutables, buffers mutables y vistas sin copia para protocolos y rendimiento.


### 📑 Sección: Decisiones y coincidencia de patrones (5 conceptos)

- **Comparaciones**  
  *Familia:* `comparativa técnica`  
  Construye relaciones de igualdad, orden, pertenencia e identidad sin mezclar sus significados.

- **if, elif y else**  
  *Familia:* `evidencia y latencia`  
  Ordena condiciones de lo específico a lo general y garantiza una salida comprensible por cada rama.

- **Expresión condicional**  
  *Familia:* `flujo de transformación`  
  Elige entre dos valores de forma breve solo cuando la decisión sigue siendo legible.

- **match y case**  
  *Familia:* `consulta e índice`  
  Desestructura formas de datos y selecciona ramas mediante patrones, guards y captura controlada.

- **Invariantes de una decisión**  
  *Familia:* `espectro de verificación`  
  Define qué debe seguir siendo cierto antes y después de cualquier rama para detectar estados imposibles.


### 📑 Sección: Repetición y recorridos (5 conceptos)

- **while**  
  *Familia:* `validación y decisión`  
  Repite mientras una condición sea cierta y demuestra que el estado avanza hacia una terminación.

- **for y protocolo iterable**  
  *Familia:* `análisis y emisión`  
  Consume elementos de cualquier iterable sin depender de índices manuales.

- **range, enumerate y zip**  
  *Familia:* `matriz de señales`  
  Genera secuencias de índices, conserva posición y recorre colecciones relacionadas de manera explícita.

- **break, continue y else**  
  *Familia:* `configuración declarativa`  
  Interrumpe, salta o detecta que una búsqueda terminó sin ruptura, evitando flags innecesarias.

- **Comprensiones**  
  *Familia:* `consulta e índice`  
  Construye listas, conjuntos o diccionarios mediante transformación y filtro cuando el flujo cabe en una lectura.


### 📑 Sección: Colecciones y mutabilidad (5 conceptos)

- **list**  
  *Familia:* `evidencia y latencia`  
  Mantiene una secuencia mutable ordenada y diferencia append, extend, insert, sort y una copia.

- **tuple**  
  *Familia:* `secuencia operativa`  
  Representa una secuencia inmutable, empaqueta resultados y permite desempaquetado estructurado.

- **dict**  
  *Familia:* `capas internas`  
  Relaciona claves hashables con valores, conserva orden de inserción y usa get, items y setdefault con criterio.

- **set y frozenset**  
  *Familia:* `evidencia y latencia`  
  Modelan unicidad y operaciones de conjuntos como unión, intersección y diferencia.

- **Alias, copia superficial y profunda**  
  *Familia:* `análisis y emisión`  
  Visualiza referencias compartidas y decide cuándo copiar contenedores o también sus objetos anidados.


### 📑 Sección: Funciones fundamentales (5 conceptos)

- **def, llamada y return**  
  *Familia:* `consulta e índice`  
  Encapsula una transformación con nombre, recibe argumentos y devuelve un resultado en vez de imprimirlo por defecto.

- **Parámetros posicionales y por nombre**  
  *Familia:* `telar relacional`  
  Diseña llamadas comprensibles y usa marcadores / y * cuando el contrato necesita restringir la forma.

- **Valores predeterminados**  
  *Familia:* `topología y tráfico`  
  Evalúa defaults una sola vez al definir la función y evita contenedores mutables compartidos accidentalmente.

- **Argumentos variables**  
  *Familia:* `evidencia y latencia`  
  Recoge posiciones con *args y nombres con **kwargs sin convertirlos en una excusa para contratos opacos.

- **Desempaquetado en llamadas**  
  *Familia:* `secuencia operativa`  
  Expande secuencias y mappings solo después de validar que coinciden con la firma esperada.


### 📑 Sección: Contratos y composición funcional (5 conceptos)

- **Alcance LEGB**  
  *Familia:* `flujo de transformación`  
  Resuelve nombres en ámbitos local, enclosing, global y builtins, y limita global o nonlocal a necesidades justificadas.

- **Docstrings**  
  *Familia:* `jerarquía y dependencias`  
  Documenta propósito, parámetros, resultado, errores y efectos observables desde la propia API.

- **Anotaciones**  
  *Familia:* `despacho de runtime`  
  Describe tipos esperados para personas y herramientas sin convertirlos automáticamente en validación de runtime.

- **Funciones como objetos y closures**  
  *Familia:* `flujo de transformación`  
  Pasa comportamiento, conserva contexto léxico y reconoce cuándo una closure retiene estado.

- **Pureza, efectos y recursión**  
  *Familia:* `acumulación de recursos`  
  Separa cálculo de entrada/salida y usa recursión solo cuando el modelo y los límites de profundidad la justifican.


### 📑 Sección: Errores y recuperación (5 conceptos)

- **Errores sintácticos, de runtime y lógicos**  
  *Familia:* `evidencia y latencia`  
  Distingue código que no se analiza, una ejecución que falla y un resultado válido pero equivocado.

- **try, except, else y finally**  
  *Familia:* `capas internas`  
  Captura únicamente errores esperados, reserva else para el camino sano y garantiza limpieza con finally.

- **raise y encadenamiento**  
  *Familia:* `validación y decisión`  
  Rechaza estados inválidos y conserva la causa original mediante raise from.

- **Excepciones propias**  
  *Familia:* `flujo de interfaz`  
  Crea una jerarquía pequeña y semántica para que quien llama pueda decidir cómo recuperarse.

- **ExceptionGroup y except star**  
  *Familia:* `máquina de estados`  
  Gestiona varios fallos concurrentes sin perder causas individuales ni agrupar errores incompatibles.


### 📑 Sección: Archivos y serialización (5 conceptos)

- **pathlib**  
  *Familia:* `árbol de recursos`  
  Compone rutas como objetos, evita separadores manuales y diferencia ruta relativa, absoluta y resuelta.

- **with y cierre determinista**  
  *Familia:* `evidencia y latencia`  
  Administra archivos y otros recursos con context managers incluso cuando aparece una excepción.

- **Texto, binario y newline**  
  *Familia:* `tejido literario`  
  Abre archivos con modo, codificación y manejo de saltos explícitos según el formato.

- **JSON y CSV**  
  *Familia:* `configuración declarativa`  
  Serializa tipos compatibles, valida esquemas y controla dialecto, cabecera y precisión al intercambiar datos.

- **Temporales, compresión y archivos**  
  *Familia:* `árbol de recursos`  
  Usa tempfile, gzip, zipfile o tarfile y valida nombres antes de extraer contenido no confiable.


### 📑 Sección: Módulos, paquetes e imports (5 conceptos)

- **Módulo y namespace**  
  *Familia:* `aislamiento sobre host`  
  Comprende que cada archivo importado crea un espacio de nombres y se ejecuta la primera vez que se carga.

- **Guard de entrada**  
  *Familia:* `validación y decisión`  
  Separa la API importable del código que solo debe correr cuando el archivo es el programa principal.

- **Paquetes e imports relativos**  
  *Familia:* `pasaporte del artefacto`  
  Organiza módulos relacionados y usa rutas de importación estables sin depender del directorio accidental.

- **Resolución y sys.path**  
  *Familia:* `árbol de recursos`  
  Sigue el buscador de módulos, evita sombrear la biblioteca estándar y no parchea rutas como solución permanente.

- **Caché de imports y recarga**  
  *Familia:* `memoria intermedia`  
  Reconoce sys.modules, efectos de importación y por qué reload no reconstruye de forma segura todo un proceso.


### 📑 Sección: Iteradores, generadores y flujo perezoso (5 conceptos)

- **Iterable e iterator**  
  *Familia:* `análisis y emisión`  
  Distingue el objeto que puede producir recorridos del cursor consumible que implementa next.

- **yield**  
  *Familia:* `evidencia y latencia`  
  Suspende una función conservando su estado y produce valores bajo demanda sin materializar toda la secuencia.

- **Generator expressions**  
  *Familia:* `consulta e índice`  
  Conecta transformaciones perezosas y sabe cuándo el iterador se agota una sola vez.

- **itertools**  
  *Familia:* `capas internas`  
  Compone ciclos, acumulaciones, ventanas y combinaciones eficientes a partir de iteradores pequeños.

- **Demanda y backpressure**  
  *Familia:* `cola y consumidor`  
  Limita el trabajo pendiente haciendo que el productor avance al ritmo que el consumidor puede aceptar.


### 📑 Sección: Objetos y clases (5 conceptos)

- **Identidad, tipo y valor**  
  *Familia:* `matriz de señales`  
  Diferencia qué objeto es, qué operaciones admite y qué contenido considera igual.

- **class e instancias**  
  *Familia:* `análisis y emisión`  
  Define un tipo para reunir estado válido y comportamiento relacionado, no solo como contenedor de campos.

- **Inicialización y atributos**  
  *Familia:* `configuración declarativa`  
  Establece invariantes en __init__ y diferencia atributos de instancia y de clase.

- **Métodos y properties**  
  *Familia:* `validación y decisión`  
  Expone operaciones e invariantes mediante una API sin convertir cada dato en acceso irrestricto.

- **Composición, herencia y super**  
  *Familia:* `jerarquía y dependencias`  
  Prefiere colaboración explícita y usa herencia cuando la sustitución y el orden de resolución son correctos.


### 📑 Sección: Modelo de datos de Python (5 conceptos)

- **Métodos especiales**  
  *Familia:* `análisis y emisión`  
  Integra objetos con repr, comparación, hash, longitud, contención e iteración mediante protocolos del lenguaje.

- **Context managers propios**  
  *Familia:* `tejido literario`  
  Implementa entrada y salida o contextmanager para adquirir y liberar un recurso como una unidad.

- **Descriptors**  
  *Familia:* `matriz de señales`  
  Controla lectura, escritura y borrado de atributos y entiende la base de methods, property y herramientas ORM.

- **__slots__ y layout**  
  *Familia:* `mapa de memoria`  
  Reduce atributos dinámicos o memoria solo después de medir y comprender herencia y compatibilidad.

- **Metaclases y creación de tipos**  
  *Familia:* `topología y tráfico`  
  Observa cómo se construyen clases y reserva metaprogramación para frameworks con un beneficio verificable.


### 📑 Sección: Modelado moderno de datos (5 conceptos)

- **dataclasses**  
  *Familia:* `análisis y emisión`  
  Genera inicialización, representación y comparación para datos declarativos manteniendo invariantes visibles.

- **Enum y Flag**  
  *Familia:* `validación y decisión`  
  Nombra conjuntos cerrados de estados o banderas sin usar números y cadenas mágicas.

- **NamedTuple y registros inmutables**  
  *Familia:* `mapa de memoria`  
  Representa filas pequeñas con nombre cuando no necesita identidad mutable ni comportamiento complejo.

- **ABC y Protocol**  
  *Familia:* `análisis y emisión`  
  Distingue herencia nominal de compatibilidad estructural al expresar capacidades requeridas.

- **Patrones sobre modelos**  
  *Familia:* `validación y decisión`  
  Desestructura dataclasses, secuencias y mappings sin acoplar el flujo a índices crípticos.


### 📑 Sección: Tipado gradual (5 conceptos)

- **Tipos estáticos opcionales**  
  *Familia:* `matriz de señales`  
  Añade información comprobable sin cambiar la naturaleza dinámica de Python ni sustituir pruebas.

- **Uniones, Optional y narrowing**  
  *Familia:* `máquina de estados`  
  Representa alternativas y demuestra mediante condiciones cuándo un valor ya tiene un tipo más específico.

- **Colecciones y Callable**  
  *Familia:* `capas internas`  
  Anota elementos, claves, resultados y firmas en lugar de declarar solo list, dict o función.

- **TypeVar y genéricos**  
  *Familia:* `análisis y emisión`  
  Conserva relaciones entre tipos de entrada y salida sin recurrir a Any.

- **TypedDict, Protocol y type aliases**  
  *Familia:* `validación y decisión`  
  Describe datos estructurados y capacidades compartidas en fronteras que no necesitan una clase concreta.


### 📑 Sección: Biblioteca estándar: datos, matemáticas y tiempo (5 conceptos)

- **collections**  
  *Familia:* `consulta e índice`  
  Usa deque, Counter, defaultdict y ChainMap cuando sus invariantes expresan mejor el problema.

- **functools**  
  *Familia:* `mapa de memoria`  
  Compone cache, partial, reduce, singledispatch y ordering con conocimiento de memoria y semántica.

- **statistics, math y random**  
  *Familia:* `tabla de estados`  
  Elige cálculo numérico apropiado y nunca usa random como fuente criptográfica.

- **datetime y zoneinfo**  
  *Familia:* `consulta e índice`  
  Modela instantes, fechas civiles y zonas IANA sin confundir tiempo local ingenuo con UTC.

- **re y parsing**  
  *Familia:* `mapa de memoria`  
  Usa expresiones regulares para patrones acotados, compila cuando conviene y evita tratarlas como parser universal.


### 📑 Sección: Biblioteca estándar: sistema y automatización (5 conceptos)

- **os, pathlib y shutil**  
  *Familia:* `árbol de recursos`  
  Inspecciona entorno y manipula árboles de archivos respetando permisos, enlaces y operaciones recuperables.

- **glob y fnmatch**  
  *Familia:* `espectro de verificación`  
  Selecciona nombres con patrones sabiendo que una coincidencia no valida contenido ni seguridad.

- **subprocess**  
  *Familia:* `evidencia y latencia`  
  Ejecuta programas con argumentos separados, timeout y códigos de salida sin interpolar entrada no confiable en un shell.

- **argparse**  
  *Familia:* `capas internas`  
  Construye una CLI descubrible con ayuda, subcomandos, validación y errores útiles.

- **signal, sched y atexit**  
  *Familia:* `tejido literario`  
  Coordina interrupciones y trabajo temporal sin prometer que toda salida del proceso ejecutará cleanup.


### 📑 Sección: Red, protocolos y criptografía disponible (5 conceptos)

- **urllib y HTTP clients**  
  *Familia:* `ida y vuelta`  
  Construye solicitudes, headers, cuerpos, timeout y manejo de estado sobre la semántica real de HTTP.

- **socket y direccionamiento**  
  *Familia:* `topología y tráfico`  
  Relaciona nombre, IP, puerto, conexión y flujo de bytes sin asumir que recv conserva mensajes.

- **ssl y TLS**  
  *Familia:* `matriz de señales`  
  Crea contextos seguros, verifica certificados y nombres y evita protocolos o configuraciones obsoletas.

- **hashlib, hmac y secrets**  
  *Familia:* `tabla de estados`  
  Distingue integridad, autenticidad y aleatoriedad criptográfica de cifrado y almacenamiento de contraseñas.

- **email, json y XML seguro**  
  *Familia:* `configuración declarativa`  
  Procesa formatos con límites, valida contenido y evita entidades o expansiones peligrosas en datos no confiables.


### 📑 Sección: Entornos y dependencias (5 conceptos)

- **Gestor de instalación de Python**  
  *Familia:* `consulta e índice`  
  Comprende el gestor recomendado por la plataforma y evita mezclar instalaciones del sistema con proyectos.

- **venv**  
  *Familia:* `pasaporte del artefacto`  
  Aísla intérprete y paquetes por proyecto y sabe activar, desactivar y recrear el entorno.

- **pip y PyPI**  
  *Familia:* `matriz de señales`  
  Instala distribuciones desde índices confiables y distingue nombre de distribución de paquete importable.

- **Version specifiers, wheel tags y compatibilidad**  
  *Familia:* `espectro de verificación`  
  Declara rangos, extras y marcadores; después comprueba versión de Python, ABI, sistema y arquitectura de los wheels dentro de un entorno aislado.

- **Resolución reproducible**  
  *Familia:* `consulta e índice`  
  Registra dependencias directas, fija o bloquea despliegues y reconstruye el ambiente desde metadatos revisados.


### 📑 Sección: Empaquetado y distribución (5 conceptos)

- **pyproject.toml**  
  *Familia:* `pasaporte del artefacto`  
  Declara build system, metadatos, dependencias y herramientas mediante estándares interoperables.

- **Layout src y paquetes**  
  *Familia:* `mapa de memoria`  
  Separa fuente importable del directorio del proyecto para que las pruebas detecten instalaciones incompletas.

- **sdist y wheel**  
  *Familia:* `espectro de verificación`  
  Distingue fuente reconstruible de artefacto instalable y comprueba el contenido de ambos.

- **Entry points y CLI**  
  *Familia:* `topología y tráfico`  
  Publica comandos y extensiones sin depender de ejecutar rutas internas.

- **Build, TestPyPI, firma y publicación**  
  *Familia:* `análisis y emisión`  
  Construye en entorno limpio, inspecciona metadatos, prueba el artefacto y publica con credenciales acotadas.


### 📑 Sección: Estilo, análisis y documentación (5 conceptos)

- **PEP 8 y consistencia**  
  *Familia:* `configuración declarativa`  
  Aplica convenciones como lenguaje compartido y no como sustituto de un diseño comprensible.

- **Ruff y formateo**  
  *Familia:* `consulta e índice`  
  Automatiza lint y formato con configuración versionada y adopción gradual sobre código existente.

- **Type checker**  
  *Familia:* `análisis y emisión`  
  Ejecuta mypy u otra herramienta con alcance explícito y reduce Any en las fronteras de mayor riesgo.

- **Documentación de API y tutoriales**  
  *Familia:* `ida y vuelta`  
  Separa referencia, explicación, guía práctica y receta para que cada lector encuentre lo que necesita.

- **Revisión y deuda técnica**  
  *Familia:* `secuencia operativa`  
  Evalúa corrección, claridad, pruebas, seguridad y operación, y registra compromisos que no se resuelven ahora.


### 📑 Sección: Pruebas automatizadas (5 conceptos)

- **unittest y pytest**  
  *Familia:* `espectro de verificación`  
  Reconoce el framework estándar y el ecosistema pytest, eligiendo convenciones coherentes para el proyecto.

- **Arrange, Act, Assert**  
  *Familia:* `validación y decisión`  
  Hace visible preparación, acción y resultado para que un fallo señale un contrato concreto.

- **Fixtures y parametrización**  
  *Familia:* `evidencia y latencia`  
  Reutiliza contexto con alcance controlado y prueba familias de entradas sin loops opacos.

- **Mocks, fakes y contract tests**  
  *Familia:* `espectro de verificación`  
  Sustituye fronteras externas sin probar una fantasía distinta del servicio real.

- **Unitarias, propiedades, integración y end to end**  
  *Familia:* `validación y decisión`  
  Distribuye casos por costo y riesgo, incluyendo límites generados y recorridos críticos completos.


### 📑 Sección: Depuración y observabilidad (5 conceptos)

- **Tracebacks y pdb**  
  *Familia:* `evidencia y latencia`  
  Lee la cadena desde el fallo hacia la entrada y detiene el programa para inspeccionar estado, pila y flujo.

- **logging estructurado**  
  *Familia:* `diagnóstico operativo`  
  Emite eventos con nivel, contexto y correlation id sin registrar secretos ni duplicar excepciones.

- **warnings**  
  *Familia:* `espectro de verificación`  
  Comunica usos deprecados o riesgos recuperables y configura su visibilidad en pruebas y producción.

- **Métricas y trazas**  
  *Familia:* `evidencia y latencia`  
  Mide latencia, errores, saturación y recorrido entre fronteras en vez de depender solo de mensajes de texto.

- **Reporte y postmortem**  
  *Familia:* `cola y consumidor`  
  Conserva reproducción, impacto, línea temporal, causa, corrección y prevención sin culpar a una persona.


### 📑 Sección: CPython e internals (5 conceptos)

- **Tokenización, AST y compilación**  
  *Familia:* `análisis y emisión`  
  Sigue el código fuente hasta árbol sintáctico, code object y bytecode antes de su evaluación.

- **Frame, stack y bytecode**  
  *Familia:* `despacho de runtime`  
  Relaciona llamadas, variables locales, instruction pointer y excepciones durante la ejecución.

- **PyObject, identidad y referencias**  
  *Familia:* `configuración declarativa`  
  Comprende que los valores son objetos con tipo y conteo de referencias en CPython.

- **Recolector cíclico**  
  *Familia:* `mapa de memoria`  
  Distingue liberación por referencias de detección de ciclos y evita depender del momento exacto del cleanup.

- **Implementaciones y ABI**  
  *Familia:* `despacho de runtime`  
  Separa semántica del lenguaje de detalles de CPython, stable ABI y extensiones dependientes de versión.


### 📑 Sección: Rendimiento y memoria (5 conceptos)

- **Complejidad y estructura de datos**  
  *Familia:* `comparativa técnica`  
  Predice crecimiento temporal y espacial antes de microoptimizar una línea.

- **timeit y benchmarks**  
  *Familia:* `evidencia y latencia`  
  Calienta, repite y compara cargas representativas evitando medir principalmente setup o ruido.

- **cProfile y perfiles de muestreo**  
  *Familia:* `matriz de señales`  
  Localiza tiempo acumulado y rutas calientes antes de decidir una optimización.

- **tracemalloc y fugas**  
  *Familia:* `diagnóstico operativo`  
  Compara snapshots, ownership y crecimiento retenido sin confundir caché útil con fuga.

- **Vectorización, batching y código nativo**  
  *Familia:* `cuadrícula paralela`  
  Reduce cruces del intérprete mediante operaciones en bloque y mide costo de copia e interoperabilidad.


### 📑 Sección: Concurrencia paralela (5 conceptos)

- **threading y sincronización**  
  *Familia:* `planificación de trabajo`  
  Coordina trabajo concurrente con Lock, Event, Condition y Queue sin asumir atomicidad no documentada.

- **multiprocessing**  
  *Familia:* `matriz de señales`  
  Aísla memoria y usa varios núcleos aceptando serialización, arranque y cierre de procesos.

- **concurrent.futures**  
  *Familia:* `cola y consumidor`  
  Expresa pools y resultados con Future, límites de workers y propagación de errores.

- **Intérpretes múltiples**  
  *Familia:* `topología y tráfico`  
  Evalúa aislamiento y comunicación entre intérpretes cuando necesita paralelismo con menor acoplamiento.

- **Free threading en CPython**  
  *Familia:* `planificación de trabajo`  
  Comprende builds sin GIL, seguridad de extensiones y la diferencia entre ausencia de GIL y ausencia de carreras.


### 📑 Sección: Programación asíncrona (5 conceptos)

- **Event loop, coroutine y Task**  
  *Familia:* `tejido de eventos`  
  Distingue la función async, el objeto coroutine y la tarea planificada que avanza cuando puede.

- **TaskGroup y concurrencia estructurada**  
  *Familia:* `cola y consumidor`  
  Ata la vida de tareas hijas a un bloque y conserva fallos múltiples de forma explícita.

- **Cancelación y timeout**  
  *Familia:* `capas internas`  
  Trata CancelledError como señal de control, establece deadlines y libera recursos durante la salida.

- **asyncio.Queue y backpressure**  
  *Familia:* `planificación de trabajo`  
  Acota productores y consumidores con maxsize, await y una política clara para atraso o descarte.

- **Recursos async y bloqueo**  
  *Familia:* `acumulación de recursos`  
  Usa async with, streams y executors, y evita detener el loop con I/O o CPU síncronos.


### 📑 Sección: Arquitectura, seguridad y producción (5 conceptos)

- **Configuración y secretos**  
  *Familia:* `configuración declarativa`  
  Separa código, configuración y credenciales, valida al arrancar y rota secretos sin imprimirlos.

- **Capas y puertos**  
  *Familia:* `topología y tráfico`  
  Aísla dominio, infraestructura y transporte para que una librería no se convierta en el modelo completo.

- **Idempotencia, retry y circuit breaker**  
  *Familia:* `espectro de verificación`  
  Recupera fallos transitorios con límites y evita repetir efectos irreversibles.

- **Supply chain y entrada no confiable**  
  *Familia:* `pasaporte del artefacto`  
  Verifica dependencias, reduce privilegios y valida tamaño, tipo, ruta y contenido antes de procesar.

- **Lifecycle de servicio**  
  *Familia:* `ciclo de vida`  
  Coordina startup, health, readiness, señales, drenado, migraciones, rollback y evidencia operativa.


### 📑 Sección: Web y servidores Python (5 conceptos)

- **Semántica HTTP y HTTPS**  
  *Familia:* `ida y vuelta`  
  Modela método, target, headers, representación, estado, caché y transporte TLS sin reducir una API a URLs.

- **WSGI y ASGI**  
  *Familia:* `flujo de transformación`  
  Distingue la interfaz síncrona tradicional del modelo async capaz de HTTP, streaming y conexiones de larga vida.

- **Flask**  
  *Familia:* `topología y tráfico`  
  Aprende routing, request context y extensiones desde un núcleo pequeño y explícito.

- **Django**  
  *Familia:* `espectro de verificación`  
  Integra ORM, templates, formularios, autenticación, administración y seguridad mediante convenciones de framework completo.

- **FastAPI**  
  *Familia:* `análisis y emisión`  
  Declara endpoints async o sync, dependencias y esquemas que alimentan validación y OpenAPI.


### 📑 Sección: APIs, persistencia y fronteras web (5 conceptos)

- **Diseño de contratos**  
  *Familia:* `validación y decisión`  
  Define recursos, comandos, errores, paginación, compatibilidad y ejemplos antes de exponer implementación.

- **Validación y serialización**  
  *Familia:* `comparativa técnica`  
  Convierte datos externos a modelos internos sin confiar en tipos, longitudes ni campos ausentes.

- **Autenticación y autorización**  
  *Familia:* `tabla de estados`  
  Separa quién es la persona o servicio de qué acción puede realizar sobre un recurso.

- **SQLAlchemy y unidad de trabajo**  
  *Familia:* `consulta e índice`  
  Mapea dominio y SQL, delimita sesión y transacción y detecta N+1 o consultas inesperadas.

- **Migraciones, jobs y WebSockets**  
  *Familia:* `secuencia operativa`  
  Coordina cambios de esquema, trabajo diferido y canales persistentes con despliegues compatibles.


### 📑 Sección: Automatización e integración (5 conceptos)

- **CLI y procesos por lotes**  
  *Familia:* `planificación de trabajo`  
  Hace reanudable una tarea, registra progreso y devuelve códigos de salida útiles para otras herramientas.

- **Archivos, hojas y documentos**  
  *Familia:* `árbol de recursos`  
  Conserva fórmulas, tipos, codificación y estructura al automatizar formatos de oficina mediante librerías especializadas.

- **Playwright y navegadores**  
  *Familia:* `capas internas`  
  Automatiza interacciones visibles con esperas basadas en estado y selectores resistentes, no sleeps arbitrarios.

- **Celery y colas de tareas**  
  *Familia:* `cola y consumidor`  
  Modela entrega, ack, retry, idempotencia y resultados sin confundir cola con transacción global.

- **APIs, webhooks y calendario**  
  *Familia:* `ida y vuelta`  
  Integra sistemas con firma, cursor, rate limit, deduplicación y reconciliación periódica.


### 📑 Sección: Notebooks y análisis de datos (5 conceptos)

- **Jupyter y orden de ejecución**  
  *Familia:* `consulta e índice`  
  Distingue documento visible de estado vivo y reinicia para comprobar que el notebook es reproducible.

- **Ingesta y perfilado**  
  *Familia:* `telar relacional`  
  Registra procedencia, esquema, unidades, nulos, duplicados y distribución antes de transformar.

- **pandas Series y DataFrame**  
  *Familia:* `análisis y emisión`  
  Usa índices, dtypes, selección y alineación entendiendo cuándo ocurre una copia.

- **Limpieza, reshape y joins**  
  *Familia:* `consulta e índice`  
  Normaliza datos, cambia granularidad y valida cardinalidad para no multiplicar filas accidentalmente.

- **EDA y comunicación**  
  *Familia:* `telar relacional`  
  Separa exploración de conclusión y acompaña cada visual con pregunta, escala, incertidumbre y limitación.


### 📑 Sección: Cómputo numérico y científico (5 conceptos)

- **NumPy ndarray**  
  *Familia:* `tabla de estados`  
  Modela forma, dtype, strides y buffer para operar arreglos homogéneos de manera eficiente.

- **Broadcasting y ufuncs**  
  *Familia:* `análisis y emisión`  
  Combina formas compatibles y vectoriza cálculos sin crear copias o ejes implícitos sorprendentes.

- **Indexación, vistas y copias**  
  *Familia:* `consulta e índice`  
  Reconoce memoria compartida, advanced indexing y contigüidad antes de mutar o cruzar librerías.

- **SciPy**  
  *Familia:* `matriz de señales`  
  Aplica optimización, integración, señal, álgebra o estadística sobre algoritmos documentados y supuestos comprobados.

- **Matplotlib**  
  *Familia:* `capas internas`  
  Construye Figure y Axes, elige escalas y etiquetas accesibles y exporta resultados reproducibles.


### 📑 Sección: Aprendizaje automático clásico (5 conceptos)

- **Problema, objetivo y baseline**  
  *Familia:* `evidencia y latencia`  
  Traduce la necesidad a variable objetivo, métrica y referencia simple antes de elegir un modelo.

- **Split y leakage**  
  *Familia:* `mapa de memoria`  
  Separa entrenamiento, validación y prueba según tiempo, grupos o dependencia para impedir información futura.

- **Preprocessing y Pipeline**  
  *Familia:* `workflow y decisiones`  
  Ajusta transformaciones solo con entrenamiento y encapsula la misma ruta para inferencia.

- **Modelos y cross-validation**  
  *Familia:* `validación y decisión`  
  Compara estimadores y hiperparámetros con particiones coherentes al mecanismo de producción.

- **Métricas, calibración y drift**  
  *Familia:* `espectro de verificación`  
  Evalúa errores por segmento, incertidumbre y cambio de datos después del despliegue.


### 📑 Sección: Deep learning e IA (5 conceptos)

- **Tensores y dispositivos**  
  *Familia:* `cuadrícula paralela`  
  Controla shape, dtype, CPU, GPU y transferencias para que cálculo y datos estén alineados.

- **Autodiff y gradientes**  
  *Familia:* `secuencia operativa`  
  Construye un grafo de operaciones, calcula derivadas y evita retenerlo o cortar gradientes por accidente.

- **Dataset, batch y augmentación**  
  *Familia:* `pasaporte del artefacto`  
  Entrega ejemplos reproducibles con batching, shuffle y transformaciones compatibles con la etiqueta.

- **Entrenamiento y evaluación**  
  *Familia:* `flujo de transformación`  
  Separa modos train y eval, pérdida, optimizador, checkpoint y métricas fuera de muestra.

- **PyTorch, TensorFlow y modelos externos**  
  *Familia:* `cuadrícula paralela`  
  Elige ecosistema por operación y comprueba licencia, procedencia, límites, sesgos y formato del artefacto.


### 📑 Sección: Escritorio, interoperabilidad e IoT (5 conceptos)

- **Tkinter**  
  *Familia:* `capas internas`  
  Construye interfaces con el toolkit estándar y mantiene trabajo bloqueante fuera del event loop visual.

- **PySide6 y Qt**  
  *Familia:* `planificación de trabajo`  
  Usa señales, slots, modelos y empaquetado multiplataforma respetando el thread de interfaz.

- **ctypes, C API y extensiones**  
  *Familia:* `análisis y emisión`  
  Cruza memoria nativa con ownership, ABI, GIL o free threading y pruebas de plataforma explícitas.

- **MicroPython y CircuitPython**  
  *Familia:* `mapa de memoria`  
  Adapta el lenguaje y librerías a memoria, hardware, timing y APIs restringidas de microcontroladores.

- **Portabilidad y entrega edge**  
  *Familia:* `espectro de verificación`  
  Prueba arquitectura, cámara, permisos, aceleradores, consumo, actualización y recuperación en el dispositivo real.


### 📑 Sección: Algoritmos y estructuras de datos aplicadas (5 conceptos)

- **Invariantes y contratos**  
  *Familia:* `jerarquía y dependencias`  
  Define qué debe cumplirse antes, durante y después de un algoritmo para razonar sobre corrección antes de medir velocidad.

- **Búsqueda lineal y binaria**  
  *Familia:* `consulta e índice`  
  Elige el recorrido según orden, costo de preparación y necesidad de conservar la posición original de los datos.

- **Orden estable y funciones key**  
  *Familia:* `telar relacional`  
  Separa el criterio de orden del dato, conserva empates y evita comparadores inconsistentes con la igualdad.

- **bisect, heapq y deque**  
  *Familia:* `tabla de estados`  
  Aplica estructuras especializadas a inserción ordenada, prioridades y colas sin reinventar sus invariantes.

- **Grafos y programación dinámica**  
  *Familia:* `topología y tráfico`  
  Modela estados, aristas y subproblemas repetidos, registra decisiones y reconstruye una solución verificable.


### 📑 Sección: Aplicaciones de línea de comandos y TUI (5 conceptos)

- **Contrato de una CLI**  
  *Familia:* `espectro de verificación`  
  Diseña comandos, subcomandos, opciones, argumentos, salida estándar, errores y códigos de retorno como una interfaz estable y automatizable.

- **argparse y configuración**  
  *Familia:* `configuración declarativa`  
  Construye parsers con ayuda útil, tipos, valores predeterminados y precedencia explícita entre archivo, entorno y argumentos.

- **Terminal y streams**  
  *Familia:* `cola y consumidor`  
  Distingue stdin, stdout y stderr, detecta redirección y evita mezclar datos procesables con mensajes para personas.

- **Interfaces de texto**  
  *Familia:* `tejido literario`  
  Modela foco, eventos, redibujado y accesibilidad sin bloquear el loop por trabajo de red o disco.

- **Distribución de herramientas**  
  *Familia:* `matriz de señales`  
  Publica entry points, completa shell cuando corresponde y prueba la CLI en Windows, macOS y Linux.


### 📑 Sección: Validación y modelos en fronteras (5 conceptos)

- **Datos confiables y no confiables**  
  *Familia:* `consulta e índice`  
  Trata archivos, red, formularios y variables de entorno como entradas que deben decodificarse y comprobarse antes de usarse.

- **Dataclasses y modelos inmutables**  
  *Familia:* `análisis y emisión`  
  Representa estado válido con defaults seguros, factories, slots y frozen cuando el dominio lo permite.

- **Parsear, no solo comprobar**  
  *Familia:* `validación y decisión`  
  Convierte una entrada textual en un tipo del dominio o devuelve un error estructurado con ubicación y causa.

- **Errores por campo**  
  *Familia:* `evidencia y latencia`  
  Agrupa varios problemas sin ocultar el valor recibido, la regla violada ni la ruta exacta dentro de datos anidados.

- **Frontera con librerías de validación**  
  *Familia:* `comparativa técnica`  
  Evalúa Pydantic u otras herramientas por semántica, costo, versión y compatibilidad, sin confundir sus modelos con el lenguaje.


### 📑 Sección: Ingeniería de datos y pipelines (5 conceptos)

- **Ingesta por lotes e incremental**  
  *Familia:* `consulta e índice`  
  Elige snapshot, watermark, cursor o log de cambios y conserva qué fragmento ya fue procesado.

- **Esquema y calidad de datos**  
  *Familia:* `análisis y emisión`  
  Comprueba tipos, nulabilidad, rangos, unicidad, relaciones, frescura y distribución antes de publicar resultados.

- **Particionado y formatos columnares**  
  *Familia:* `telar relacional`  
  Organiza datos por acceso y fecha, compara CSV, JSON, Parquet y Arrow, y evita archivos diminutos o particiones sesgadas.

- **Idempotencia y reanudación**  
  *Familia:* `consulta e índice`  
  Asigna identidad al trabajo, escribe de forma atómica y permite repetir una etapa sin duplicar efectos.

- **Orquestación y linaje**  
  *Familia:* `evidencia y latencia`  
  Declara dependencias, parámetros, artefactos, métricas y procedencia para reconstruir cómo nació cada salida.


### 📑 Sección: Cómputo distribuido y grandes volúmenes (5 conceptos)

- **Partir el problema**  
  *Familia:* `planificación de trabajo`  
  Distingue paralelismo de datos, tareas y pipelines antes de agregar procesos, máquinas o un framework distribuido.

- **Serialización y movimiento de datos**  
  *Familia:* `análisis y emisión`  
  Mide el costo de copiar objetos, enviar particiones y reconstruir dependencias en workers remotos.

- **Scheduling y skew**  
  *Familia:* `flujo de interfaz`  
  Observa colas, recursos y particiones lentas para que un pequeño conjunto de claves no determine toda la duración.

- **Retries y efectos externos**  
  *Familia:* `tabla de estados`  
  Reintenta cálculo puro con seguridad y protege escrituras mediante idempotency keys, transacciones o compensaciones.

- **Escalar después de perfilar**  
  *Familia:* `superficie de aplicación`  
  Empieza con iteradores, vectorización y un solo host; distribuye únicamente el cuello de botella demostrado.


### 📑 Sección: Lenguaje natural, embeddings y RAG (5 conceptos)

- **Texto como datos**  
  *Familia:* `tejido literario`  
  Normaliza Unicode con intención, conserva idioma y metadatos, y separa tokens del texto original recuperable.

- **Pipelines de NLP**  
  *Familia:* `workflow y decisiones`  
  Encadena limpieza, segmentación, representación, modelo y evaluación sin filtrar información del conjunto de prueba.

- **Embeddings**  
  *Familia:* `flujo de transformación`  
  Trata vectores como salidas versionadas de un modelo y mide similitud, dimensionalidad, normalización y deriva.

- **Retrieval augmented generation**  
  *Familia:* `tabla de estados`  
  Divide, indexa, recupera y cita evidencia con evaluación separada de retrieval y generación.

- **Modelos generativos responsables**  
  *Familia:* `pasaporte del artefacto`  
  Limita herramientas y datos, valida salida, registra procedencia y diseña recuperación ante alucinación o prompt injection.


### 📑 Sección: Simulación, juegos y medios (5 conceptos)

- **Loop de simulación**  
  *Familia:* `flujo de interfaz`  
  Separa actualización de estado, tiempo, entrada y render para que el resultado sea reproducible a distinta velocidad.

- **Pygame y multimedia**  
  *Familia:* `evidencia y latencia`  
  Administra ventana, eventos, superficies, audio y recursos respetando el ciclo de vida de la aplicación.

- **Física y precisión temporal**  
  *Familia:* `capas internas`  
  Usa timestep fijo, integración adecuada y unidades explícitas para evitar resultados dependientes del frame rate.

- **IA de agentes**  
  *Familia:* `flujo de interfaz`  
  Modela máquinas de estado, navegación y decisiones observables sin bloquear el loop principal.

- **Replays y determinismo**  
  *Familia:* `tejido de eventos`  
  Conserva semilla, entradas y versión del motor para reproducir una partida o comparar una regresión.


### 📑 Sección: Cloud, serverless y automatización operativa (5 conceptos)

- **Proceso efímero**  
  *Familia:* `planificación de trabajo`  
  No asume disco local persistente ni memoria compartida entre invocaciones y externaliza estado de forma deliberada.

- **Arranque y dependencias**  
  *Familia:* `jerarquía y dependencias`  
  Reduce imports y paquetes pesados en el camino crítico, y mide cold start por arquitectura y región.

- **Identidad de workload**  
  *Familia:* `configuración declarativa`  
  Obtiene credenciales de corta duración mediante el proveedor y evita secretos estáticos dentro del código o imagen.

- **Infraestructura y SDKs**  
  *Familia:* `consulta e índice`  
  Declara recursos de forma revisable y configura retries, timeouts y paginación en cada cliente de nube.

- **Observabilidad y costo**  
  *Familia:* `evidencia y latencia`  
  Correlaciona invocación, cola y servicio, y mide duración, memoria, transferencia, errores y gasto por operación útil.


### 📑 Sección: Gobierno, mantenimiento y cadena de suministro (5 conceptos)

- **Política de versiones**  
  *Familia:* `validación y decisión`  
  Define Python mínimo y probado, compatibilidad de dependencias y una ventana de actualización comprensible.

- **Procedencia de paquetes**  
  *Familia:* `espectro de verificación`  
  Verifica índice, autor, hashes, firma o attestations disponibles y revisa el código de paquetes de alto riesgo.

- **Licencias y activos**  
  *Familia:* `consulta e índice`  
  Distingue licencia del código, modelos, datasets, fuentes, imágenes y binarios nativos antes de redistribuir.

- **Deprecación y migraciones**  
  *Familia:* `secuencia operativa`  
  Convierte warnings en trabajo planificado, prueba nuevas versiones y ofrece una ruta reversible a consumidores.

- **Runbook y ownership**  
  *Familia:* `mapa de memoria`  
  Documenta responsables, despliegue, señales de salud, fallos conocidos, rollback y cómo retirar el sistema con seguridad.




---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
