# 📘 [Dart] Dart

> **Lenguaje orientado a objetos, Sound Null Safety, records, isolates, event loop y compilación dual JIT/AOT.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `dart` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `dart` |
| **Total de Conceptos** | **60 conceptos** |
| **Capítulos / Secciones** | **12 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/dart)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/dart-en-accion)**


## 🔬 Caso Práctico en Acción: Ingesta masiva y serialización concurrente con Dart Isolates

> **Caso práctico integrado de Dart:** Construcción de un pipeline de procesamiento de telemetría IoT de alta frecuencia: recepción masiva en segundo plano con Isolates de Dart, normalización tipada estricta mediante Records y Sound Null Safety, procesamiento reactivo con Streams, resolución de saturación en la cola de microtareas y compilación AOT nativa.  
> El caso demuestra cómo la arquitectura de memoria aislada sin bloqueos y el sistema de tipos Sound Null Safety de Dart garantizan estabilidad y predictibilidad procesando más de 100,000 eventos concurrentes por segundo.

### Fases de Ejecución:
1. **Inicialización de Worker Isolate** (Spawn de hilo independiente sin memoria compartida): `// Inicialización de Isolate secundario con ReceivePort
final receivePort = ReceivePort();
await Isolate.spawn(telemetryProcessorWorker, receivePort.sendPort);
final sendPort = await receivePort.first as SendPort;` → Isolate inicializado listo para recibir paquetes de red. *El hilo principal conserva su capacidad de respuesta inmediata para eventos de usuario.*
2. **Normalización tipada con Records y Sound Null Safety** (Modelado de datos inmutables y desestructuración exhaustiva): `typedef TelemetryData = ({int sensorId, double value, DateTime stamp});

TelemetryData parsePayload(Map<String, dynamic> raw) {
  final id = raw['id'] as int;
  final val = (raw['v'] as num).toDouble();
  return (sensorId: id, value: val, stamp: DateTime.now());
}` → Estructura tipada de alta densidad empaquetada para el pipeline. *El analizador estático verifica la conformidad del contrato antes de compilar.*
3. **Transformación reactiva con Streams y async*** (Pipeline continuo de datos con generadores asíncronos): `Stream<TelemetryData> processStream(Stream<TelemetryData> input) async* {
  await for (final packet in input) {
    if (packet.value > 0.0) {
      yield packet;
    }
  }
}` → Flujo continuo de telemetría procesado en tiempo real. *La evaluación perezosa asegura que sólo se computen los paquetes efectivamente consumidos.*
4. **Detección de saturación en Microtask Queue** (Starvation del Event Loop por acumulación de microtareas): `// ALERTA: scheduleMicrotask invocada recursivamente dentro del bucle
// agota la cola de microtareas e impide atender eventos de I/O y temporizadores:
// Latencia de I/O: 68 ms > 5 ms (Starvation detectada en el loop)
scheduleMicrotask(() => processNextPacket());` → Degradación del servicio por inanición del Event Loop. *Un uso desmedido de microtareas monopoliza el hilo de ejecución e impide procesar eventos externos.*
5. **Desacoplamiento y balanceo con Isolate.run** (Recuperación del tiempo de respuesta del Event Loop): `// Corrección: delegar cómputo pesado a Isolate.run con retorno diferido
final result = await Isolate.run(() {
  return computeAggregates(pendingBatch);
});` → Rendimiento restaurado con Event Loop libre de bloqueos. *El balanceo entre Isolates y el bucle de eventos garantiza una arquitectura reactiva sostenible.*
6. **Compilación nativa AOT y verificación de rendimiento** (Código máquina directo ejecutando a 100,000 eventos/s): `// Compilación con dart compile exe:
// Binario ELF/Mach-O nativo independiente sin dependencia de VM externa
// Throughput: 112,000 ops/sec | Heap Resident: 18 MB | CPU Load: Óptimo
assert(processedCount >= 100000);` → Servicio de telemetría Dart validado en producción a máxima velocidad. *La arquitectura de memoria aislada ofrece máxima fiabilidad y rendimiento constante bajo carga masiva.*


---

## 📚 Desglose Exhaustivo de Conceptos (60)

### 📑 Sección: Sintaxis Moderna & Sound Null Safety (5 conceptos)

- **Inferencia var, final y const**  
  *Familia:* `flujo de transformación`  
  Distingue entre inferencia automática de tipo en asignación, inmutabilidad de referencia en tiempo de ejecución y constantes evaluadas en tiempo de compilación.

- **Sound Null Safety y sistema de tipos**  
  *Familia:* `análisis y emisión`  
  Garantiza que una variable no anulable nunca contenga null en ningún momento de la ejecución mediante análisis estático formal del compilador.

- **Promoción de tipos y análisis de flujo**  
  *Familia:* `matriz de señales`  
  Promueve variables a subtipos específicos o elimina su nulabilidad tras comprobaciones condicionales sin requerir conversiones forzadas manuales.

- **Operadores de navegación y asignación segura**  
  *Familia:* `planificación de trabajo`  
  Aplica ?. para invocación condicional, ?? para valor de fallback por defecto y ??= para asignación condicionada a la ausencia previa de valor.

- **Inicialización tardía con late**  
  *Familia:* `evidencia y latencia`  
  Difiere la inicialización de variables de instancia no anulables hasta su primer acceso verificando su asignación en tiempo de ejecución.


### 📑 Sección: Records, Tuplas & Pattern Matching (5 conceptos)

- **Records posicionales y nombrados**  
  *Familia:* `análisis y emisión`  
  Empaqueta múltiples valores heterogéneos en estructuras anónimas inmutables de primera clase con tipado estricto garantizado por el compilador.

- **Desestructuración de tuplas y objetos**  
  *Familia:* `jerarquía y dependencias`  
  Extrae campos de registros, listas, mapas e instancias directamente en variables locales dentro de una única sentencia declarativa.

- **Pattern Matching en Switch Expressions**  
  *Familia:* `validación y decisión`  
  Evalúa patrones de datos exhaustivos en expresiones switch concisas retornando un valor calculado sin requerir sentencias break.

- **Guard Clauses con cláusula when**  
  *Familia:* `comparativa técnica`  
  Añade condiciones booleanas adicionales a una rama de patrón permitiendo filtrar evaluaciones complejas antes de ejecutar la acción.

- **Exhaustividad estática de patrones**  
  *Familia:* `jerarquía y dependencias`  
  Comprueba en tiempo de compilación que todas las ramas y combinaciones posibles de datos están cubiertas sin dejar casos sin manejar.


### 📑 Sección: Programación Orientada a Objetos en Dart (5 conceptos)

- **Constructores generativos y azucar sintáctico**  
  *Familia:* `análisis y emisión`  
  Asigna parámetros formales directamente a variables de instancia mediante this.campo en la lista de argumentos del constructor.

- **Listas de inicialización y aserciones**  
  *Familia:* `validación y decisión`  
  Ejecuta asignaciones de campos finales y verificaciones de invariantes con assert antes de que se invoque el cuerpo del constructor.

- **Constructores Named y Redirigidos**  
  *Familia:* `topología y tráfico`  
  Declara múltiples puntos de entrada constructores con nombres semánticos que pueden redirigir a otros constructores de la misma clase.

- **Constructores Factory y caché de instancias**  
  *Familia:* `tejido de eventos`  
  Implementa constructores que no crean necesariamente una nueva instancia retornando objetos preexistentes o subtipos polimórficos.

- **Constructores Const y canonicidad**  
  *Familia:* `análisis y emisión`  
  Crea instancias inmutables compartidas en memoria canónica si todos los campos son finales y se construyen con valores constantes.


### 📑 Sección: Jerarquía de Tipos & Modificadores de Clase (5 conceptos)

- **Clases Sealed para jerarquías cerradas**  
  *Familia:* `jerarquía y dependencias`  
  Define familias de tipos donde todos los subtipos directos deben residir en la misma biblioteca permitiendo validación exhaustiva de switches.

- **Modificador Base y control de subtipado**  
  *Familia:* `matriz de señales`  
  Garantiza que una clase sólo pueda ser heredada mediante extends o implementada dentro de su biblioteca propietaria.

- **Modificador Interface para contratos puros**  
  *Familia:* `cola y consumidor`  
  Exige que los consumidores externos sólo puedan implementar la interfaz de la clase sin heredar su implementación concreta.

- **Modificador Final para sellar clases**  
  *Familia:* `análisis y emisión`  
  Impide totalmente la herencia o implementación de una clase fuera de su archivo de definición garantizando estabilidad binaria.

- **Clases Abstractas y contratos polimórficos**  
  *Familia:* `espectro de verificación`  
  Declara firmas de métodos sin implementación que deben satisfacer las subclases concretas en tiempo de ejecución.


### 📑 Sección: Mixins, Extensión & Composición Funcional (5 conceptos)

- **Mixins y reutilización con with**  
  *Familia:* `flujo de transformación`  
  Inyecta métodos y estado en una jerarquía de clases mediante linealización de mixins sin incurrir en problemas de herencia múltiple.

- **Restricciones de mixin con la cláusula on**  
  *Familia:* `jerarquía y dependencias`  
  Limita la aplicación de un mixin a clases que extiendan o implementen un tipo base determinado para acceder a sus miembros protegidos.

- **Mixin Class para uso dual**  
  *Familia:* `despacho de runtime`  
  Declara una estructura que puede emplearse simultáneamente como clase regular instanciable y como mixin reutilizable en otras clases.

- **Extension Methods sobre bibliotecas**  
  *Familia:* `constelación de mecanismos`  
  Añade métodos de conveniencia, propiedades y operadores a clases cerradas de terceros o tipos primitivos sin modificar el código fuente original.

- **Extension Types sin sobrecarga en runtime**  
  *Familia:* `propagación de eventos`  
  Proporciona contratos tipados específicos sobre tipos subyacentes existentes con cero costo de memoria y sin crear objetos wrapper en el heap.


### 📑 Sección: Colecciones Declarativas & Operadores de Flujo (5 conceptos)

- **List, Set y Map con tipado genérico**  
  *Familia:* `análisis y emisión`  
  Administra colecciones indexadas, conjuntos únicos de elementos y diccionarios clave-valor fuertemente tipados con búsquedas eficientes.

- **Collection-If para construcción condicional**  
  *Familia:* `consulta e índice`  
  Inserta o excluye elementos dentro de literales de colección evaluando expresiones booleanas de forma declarativa y limpia.

- **Collection-For para generación declarativa**  
  *Familia:* `configuración declarativa`  
  Genera secuencias dinámicas de elementos aplicando bucles de repetición directamente dentro de la definición del literal de colección.

- **Spread Operator y fusiones seguras**  
  *Familia:* `evidencia y latencia`  
  Expande colecciones dentro de otras mediante los operadores ... y ...? evitando excepciones ante listas anulables.

- **Inmutabilidad con List.unmodifiable**  
  *Familia:* `flujo de interfaz`  
  Empaqueta colecciones en vistas de sólo lectura que arrojan excepciones ante intentos de inserción o mutación en tiempo de ejecución.


### 📑 Sección: Genéricos Reificados & Sistema de Tipos (5 conceptos)

- **Genéricos reificados en runtime**  
  *Familia:* `análisis y emisión`  
  Conserva la información exacta de los argumentos de tipo genérico durante la ejecución para permitir comprobaciones seguras con el operador is.

- **Restricciones de tipo acotadas (Bounded Generics)**  
  *Familia:* `comparativa técnica`  
  Restringe los parámetros de tipo mediante T extends Base para garantizar que el tipo acepte sólo miembros compatibles.

- **Funciones genéricas de primera clase**  
  *Familia:* `validación y decisión`  
  Parametriza funciones y métodos independientes con tipos genéricos preservando la inferencia entre parámetros y retorno.

- **Typedefs genéricos para firmas complejas**  
  *Familia:* `análisis y emisión`  
  Crea alias de tipo expresivos y reutilizables para firmas de callbacks, transformadores y estructuras de datos anidadas.

- **Covarianza y contravarianza en Dart**  
  *Familia:* `jerarquía y dependencias`  
  Maneja la sustitución segura de subtipos en colecciones y jerarquías controlando asignaciones de tipos con comprobaciones del compilador.


### 📑 Sección: Asincronía & Event Loop en Dart (5 conceptos)

- **Arquitectura de dos colas del Event Loop**  
  *Familia:* `anatomía del concepto`  
  Organiza la ejecución asíncrona priorizando la cola de microtareas sobre la cola de eventos de temporizadores y peticiones de I/O.

- **Microtasks y scheduleMicrotask**  
  *Familia:* `flujo de interfaz`  
  Encola tareas breves y críticas que se ejecutan inmediatamente al concluir la instrucción actual antes de atender nuevos eventos externos.

- **Futures y estados uncompleted/completed**  
  *Familia:* `máquina de estados`  
  Modela cómputos asíncronos diferidos que completan con un valor de éxito o una excepción mediante callbacks o sintaxis async/await.

- **Propagación y captura de errores asíncronos**  
  *Familia:* `evidencia y latencia`  
  Gestiona excepciones en flujos asíncronos mediante bloques try/catch transparentes o encadenamiento funcional con .catchError().

- **Completer para control imperativo de Futures**  
  *Familia:* `capas internas`  
  Crea y completa promesas manualmente desde fuentes externas, suscripciones de bajo nivel o llamadas a hardware.


### 📑 Sección: Streams, Transformaciones & Programación Reactiva (5 conceptos)

- **StreamController y despacho reactivo**  
  *Familia:* `cola y consumidor`  
  Crea emisores de datos que gestionan suscripciones de oyentes, pausa, reanudación y cierre ordenado de flujos de información.

- **Single-Subscription vs Broadcast Streams**  
  *Familia:* `análisis y emisión`  
  Distingue flujos diseñados para un único consumidor secuencial de flujos multidifusión que soportan múltiples oyentes concurrentes.

- **Generadores asíncronos async* y yield**  
  *Familia:* `consulta e índice`  
  Produce secuencias infinitas o diferidas de datos emitiendo valores perezosamente con yield y delegando flujos con yield*.

- **Consumo declarativo con await for**  
  *Familia:* `configuración declarativa`  
  Itera sobre los elementos sucesivos de un Stream procesando cada evento en orden conforme arriba desde la fuente asíncrona.

- **StreamTransformers y operadores de filtrado**  
  *Familia:* `flujo de transformación`  
  Transforma flujos aplicando map, where, debounce, buffer y combinación de múltiples canales reactivos en un único flujo resultante.


### 📑 Sección: Concurrencia, Memoria Aislada & Isolates (5 conceptos)

- **Arquitectura de Isolates sin memoria compartida**  
  *Familia:* `anatomía del concepto`  
  Ejecuta código en hilos del sistema operativo con pilas de ejecución y montículos de memoria totalmente independientes.

- **Canales de comunicación SendPort y ReceivePort**  
  *Familia:* `tejido de eventos`  
  Transfiere mensajes inmutables entre isolates mediante puertos serializados sin riesgo de carreras de datos ni deadlocks.

- **Isolate.spawn para workers persistentes**  
  *Familia:* `cola y consumidor`  
  Inicia un nuevo isolate secundario ejecutando una función de entrada de larga duración con su propio bucle de eventos.

- **Isolate.run para cómputo intensivo puntual**  
  *Familia:* `planificación de trabajo`  
  Ejecuta una función pesada en un isolate temporal y retorna el resultado al isolate principal con recolección automática.

- **Transferencia de búferes de memoria sin copia**  
  *Familia:* `memoria intermedia`  
  Envía grandes estructuras binarias entre isolates transfiriendo la propiedad del búfer directamente sin costo de copia.


### 📑 Sección: Compilación, Modos JIT/AOT & Optimización VM (5 conceptos)

- **Modo JIT para desarrollo iterativo rápido**  
  *Familia:* `despacho de runtime`  
  Ejecuta código en la máquina virtual de Dart con compilación Just-In-Time permitiendo recarga en caliente de estado en milisegundos.

- **Modo AOT a código binario nativo**  
  *Familia:* `propagación de eventos`  
  Compila la aplicación Ahead-Of-Time a binarios máquina directos (ARM64, x86_64) con arranque instantáneo y uso eficiente de CPU.

- **Tree-Shaking y poda de código no utilizado**  
  *Familia:* `aislamiento sobre host`  
  Elimina del binario final todas las clases, métodos y bibliotecas a las que no se accede reduciendo drásticamente el tamaño final.

- **Garbage Collector generacional de Dart**  
  *Familia:* `despacho de runtime`  
  Recupera memoria rápidamente mediante un Young Space para objetos de vida corta y un Old Space compacto para datos longevos.

- **Dart VM Service y métricas de profiling**  
  *Familia:* `capas internas`  
  Expone puertos de telemetría para inspeccionar asignaciones de memoria, rastrear microsegundos de CPU y depurar el heap.


### 📑 Sección: Interoperabilidad Nativa con Dart FFI & Tooling (5 conceptos)

- **Arquitectura de Foreign Function Interface (FFI)**  
  *Familia:* `mapa de memoria`  
  Invoca funciones compiladas en C, C++ o Rust directamente desde Dart cargando bibliotecas dinámicas compartidas (.so, .dylib, .dll).

- **Mapeo de Structs y memoria nativa con dart:ffi**  
  *Familia:* `despacho de runtime`  
  Declara representaciones exactas de estructuras en memoria de C gestionando asignación con malloc y liberación con free.

- **Punteros nativos y punteros opacos**  
  *Familia:* `capas internas`  
  Manipula direcciones de memoria física y buffers de bytes directos con comprobaciones de tipado estricto en la capa de Dart.

- **package:ffigen para enlaces automáticos**  
  *Familia:* `mapa de memoria`  
  Genera enlaces y tipos de Dart automáticamente a partir de archivos de cabecera (.h) de C mediante el analizador de LLVM/Clang.

- **dart analyze, format y compilación multiplataforma**  
  *Familia:* `análisis y emisión`  
  Garantiza estándares de calidad de código, formato unificado y verificación estática en flujos de integración continua.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[A tour of the Dart language](https://dart.dev/language)** (`tutorial` | Nivel: `beginner`): 
- **[Asynchronous programming: Futures and Streams](https://dart.dev/codelabs/async-await)** (`official-docs` | Nivel: `intermediate`): 
- **[Dart Concurrency: Isolates and Event Loop](https://dart.dev/language/concurrency)** (`reference` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
