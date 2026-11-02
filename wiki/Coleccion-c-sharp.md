# 📘 [C#] C#

> **Tipos, patrones, LINQ, asincronía, memoria y concurrencia.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `c-sharp` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `c-sharp` |
| **Total de Conceptos** | **49 conceptos** |
| **Capítulos / Secciones** | **7 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/c-sharp)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/c-sharp-en-accion)**


## 🔬 Caso Práctico en Acción: C# en acción

> **Caso integrado · Agregador asíncrono de telemetría:** Un stream de lecturas se valida con patterns, se agrupa con LINQ y atraviesa Channels con cancelación, ownership de buffers y errores tipados.  
> El agregador sostiene backpressure, cancela limpiamente y demuestra que cada lectura fue aceptada, rechazada o publicada una sola vez.

### Fases de Ejecución:
1. **Modelar la lectura** (Record inmutable y unidades): `record Reading(DeviceId Id, Celsius Temp)` → dato expresivo. *El modelo impide que un número sin unidad llegue al pipeline.*
2. **Analizar paquetes** (Span evita copia): `Parse(ReadOnlySpan<byte> frame)` → lectura decodificada. *Span conserva una vista temporal y no puede escapar a un lifetime inseguro.*
3. **Validar con patterns** (Forma y rango juntos): `reading is { Temp.Value: >= -40 and <= 125 }` → entrada clasificada. *El pattern expresa la condición sin perder el valor tipado.*
4. **Publicar al Channel** (Capacidad produce backpressure): `await writer.WriteAsync(reading, ct)` → flujo acotado. *La espera es parte del contrato y evita convertir una ráfaga en presión ilimitada.*
5. **Agrupar con LINQ** (Ventana y clave): `batch.GroupBy(x => x.Id)` → resumen calculado. *LINQ se materializa en una frontera concreta para no repetir efectos.*
6. **Propagar cancelación** (El shutdown atraviesa awaits): `await foreach (...WithCancellation(ct))` → cierre coordinado. *La cancelación es cooperativa y cada loop debe observarla.*
7. **Resolver buffer retenido** (Ownership después de await): `IMemoryOwner<byte> in using` → lifetime corregido. *El owner permanece vivo hasta que termina el último acceso y luego vuelve al pool.*
8. **Verificar el contrato** (Property tests y métricas): `accepted + rejected == received` → agregador demostrable. *La misma invariante valida el lenguaje, el flujo y la operación en producción.*


---

## 📚 Desglose Exhaustivo de Conceptos (49)

### 📑 Sección: Tipos y expresiones (7 conceptos)

- **Value y reference types**  
  *Familia:* `análisis y emisión`  
  Distingue representación y copia sin reducirlos siempre a stack y heap.

- **Variables nullable y análisis de flujo**  
  *Familia:* `validación y decisión`  
  Hace visible dónde una referencia puede faltar y guía el análisis de flujo estático.

- **Conversiones y pattern variables**  
  *Familia:* `jerarquía y dependencias`  
  Establece cuándo un valor cambia de representación o revela un tipo más específico.

- **Tuples y deconstruction**  
  *Familia:* `análisis y emisión`  
  Agrupa resultados breves con nombres sin reemplazar modelos de dominio durables.

- **Enums y flags con operaciones de bits**  
  *Familia:* `validación y decisión`  
  Representa opciones cerradas o conjuntos de bits con validación explícita.

- **Sintaxis Target-typed new**  
  *Familia:* `jerarquía y dependencias`  
  Infiere el constructor invocado a partir del tipo declarado a la izquierda.

- **Raw string literals e interpolación avanzada**  
  *Familia:* `análisis y emisión`  
  Maneja cadenas multilínea y caracteres de escape sin secuencias frágiles.


### 📑 Sección: Objetos, records y modelos inmutables (7 conceptos)

- **Classes y encapsulación**  
  *Familia:* `validación y decisión`  
  Protege invariantes mediante miembros y constructores con alcance preciso.

- **Structs readonly y ref structs**  
  *Familia:* `jerarquía y dependencias`  
  Optimiza valores pequeños o lifetimes restringidos sin copias ocultas.

- **Records y records struct**  
  *Familia:* `análisis y emisión`  
  Modela datos inmutables con igualdad por valor, sintaxis with y desconstructores.

- **Interfaces y default interface methods**  
  *Familia:* `validación y decisión`  
  Declara capacidades compartidas preservando compatibilidad binaria evolutiva.

- **Required members y modificador init**  
  *Familia:* `topología y tráfico`  
  Construye objetos completos exigiendo propiedades obligatorias en inicialización.

- **Primary constructors en clases y structs**  
  *Familia:* `análisis y emisión`  
  Declara parámetros de construcción directamente en la firma de la clase.

- **Jerarquías selladas (sealed)**  
  *Familia:* `jerarquía y dependencias`  
  Restringe la herencia para habilitar optimizaciones de desvirtualización.


### 📑 Sección: Pattern Matching y control de flujo (7 conceptos)

- **Switch expressions exhaustivas**  
  *Familia:* `flujo de transformación`  
  Mapea entradas a resultados con una expresión funcional limpia y validada.

- **Property y relational patterns**  
  *Familia:* `espectro de verificación`  
  Comprueba propiedades anidadas y rangos numéricos sin cascadas de if/else.

- **List patterns y slices**  
  *Familia:* `evidencia y latencia`  
  Reconoce la estructura y longitud de secuencias mediante patrones de coincidencia.

- **Type testing y cast seguro (is/as)**  
  *Familia:* `análisis y emisión`  
  Verifica el tipo y asigna variables tipadas en una única expresión.

- **Patrones posicionales y Tuple patterns**  
  *Familia:* `secuencia operativa`  
  Evalúa combinaciones multidimensionales mediante tuplas estructuradas.

- **Exceptions y exception filters (when)**  
  *Familia:* `máquina de estados`  
  Captura fallos solo si se cumple una condición sin desenrollar el stack innecesariamente.

- **Using declarations y await using**  
  *Familia:* `configuración declarativa`  
  Garantiza Dispose o DisposeAsync determinista al abandonar el scope.


### 📑 Sección: Genéricos y LINQ avanzado (7 conceptos)

- **Generic constraints (where)**  
  *Familia:* `telar relacional`  
  Restringe tipos genéricos por clase, interfaz, new(), notnull o unmanaged.

- **Varianza en interfaces (in/out)**  
  *Familia:* `análisis y emisión`  
  Permite sustituir colecciones según la dirección segura del polimorfismo.

- **Delegates, acciones, funciones y lambdas**  
  *Familia:* `flujo de transformación`  
  Modela comportamiento invocable capturando variables locales.

- **LINQ deferred execution**  
  *Familia:* `topología y tráfico`  
  Distingue la definición de una consulta de su materialización al iterar.

- **IEnumerable e IQueryable**  
  *Familia:* `consulta e índice`  
  Separa transformaciones en memoria de árboles de expresiones ejecutados en bases de datos.

- **Expresiones de colección y spread operator**  
  *Familia:* `análisis y emisión`  
  Inicializa arrays, listas y spans con sintaxis unificada entre corchetes.

- **Métodos de extensión y composición funcional**  
  *Familia:* `flujo de transformación`  
  Agrega operaciones a tipos cerrados respetando visibilidad de namespaces.


### 📑 Sección: Asincronía y concurrencia (7 conceptos)

- **Task y async/await**  
  *Familia:* `planificación de trabajo`  
  Representa operaciones de I/O futuras liberando hilos del ThreadPool.

- **CancellationToken y cancelación cooperativa**  
  *Familia:* `cola y consumidor`  
  Propaga la solicitud de aborto a lo largo de toda la cadena de llamadas.

- **ConfigureAwait y sincronización de contexto**  
  *Familia:* `tejido literario`  
  Controla el regreso al hilo de UI o la continuación en hilos de fondo.

- **IAsyncEnumerable y streams asíncronos**  
  *Familia:* `planificación de trabajo`  
  Produce y consume flujos de datos bajo demanda con soporte de await foreach.

- **ValueTask e IValueTaskSource**  
  *Familia:* `cola y consumidor`  
  Optimiza rutas asíncronas de alto rendimiento que completan síncronamente.

- **Manejo de excepciones en Task.WhenAll**  
  *Familia:* `tejido de eventos`  
  Captura todas las excepciones agregadas producidas en operaciones paralelas.

- **Channels para productor-consumidor**  
  *Familia:* `planificación de trabajo`  
  Comunica procesos asíncronos con backpressure y capacidad delimitada.


### 📑 Sección: Memoria, punteros y alto rendimiento (7 conceptos)

- **Span<T>, ReadOnlySpan<T> y memoria contigua**  
  *Familia:* `memoria intermedia`  
  Procesa segmentos de memoria con límites de seguridad y sin asignaciones.

- **Memory<T> e IMemoryOwner<T>**  
  *Familia:* `comparativa técnica`  
  Administra buffers asíncronos que cruzan fronteras de métodos sin fugas.

- **ArrayPool<T> y alquiler de buffers**  
  *Familia:* `tabla de estados`  
  Reutiliza memoria de arrays grandes en tareas repetitivas de red y parsing.

- **Boxing y unboxing de Value Types**  
  *Familia:* `análisis y emisión`  
  Detecta y previene conversiones costosas de tipos de valor hacia object o interfaces.

- **Source Generators en compilación**  
  *Familia:* `flujo de transformación`  
  Genera código C# automático durante el build eliminando el uso de reflexión lenta.

- **Modificador unsafe y punteros nativos**  
  *Familia:* `mapa de memoria`  
  Manipula memoria mediante aritmética de punteros en zonas críticas.

- **Interlocked y primitivas de bajo nivel**  
  *Familia:* `planificación de trabajo`  
  Realiza operaciones de incremento y swap atómicos en variables compartidas.


### 📑 Sección: Calidad, arquitectura y pruebas (7 conceptos)

- **Analizadores Roslyn y reglas de estilo**  
  *Familia:* `despacho de runtime`  
  Convierte mejores prácticas y errores potenciales en advertencias de compilación.

- **Pruebas unitarias con xUnit y FluentAssertions**  
  *Familia:* `espectro de verificación`  
  Verifica contratos e invariantes con aserciones declarativas.

- **Falsos y mocks con interfaces pequeñas**  
  *Familia:* `validación y decisión`  
  Aísla dependencias externas para pruebas deterministas y rápidas.

- **Diseño guiado por el dominio (DDD) en C#**  
  *Familia:* `análisis y emisión`  
  Modela entidades, value objects y agregados con inmutabilidad y tipado fuerte.

- **Arquitectura limpia y puertos/adaptadores**  
  *Familia:* `anatomía del concepto`  
  Separa el dominio de la infraestructura y frameworks de interfaz.

- **Pruebas de arquitectura con NetArchTest**  
  *Familia:* `capas internas`  
  Garantiza que dependencias entre capas respeten las reglas del proyecto.

- **Benchmarking con BenchmarkDotNet**  
  *Familia:* `comparativa técnica`  
  Mide nanosegundos y allocations de memoria de algoritmos críticos.




---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
