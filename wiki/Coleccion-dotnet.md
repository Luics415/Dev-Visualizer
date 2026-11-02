# .NET (.NET)

> **SDK, CLR, IL, JIT/AOT, GC, bibliotecas, hosting y diagnóstico.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `dotnet` |
| **Grupo Arquitectonico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `dotnet` |
| **Total de Conceptos** | **52 conceptos** |
| **Capitulos / Secciones** | **8 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/dotnet)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/dotnet-en-accion)


## Estudio de Caso Practico: .NET en acción

> **Caso integrado · Vida completa de un servicio:** Un servicio de diagnóstico pasa del proyecto al CLR, recibe trabajo asíncrono, administra memoria y se publica como artefacto observable para Linux.  
> El mismo assembly conserva identidad desde build hasta runtime y cada capa entrega evidencia para explicar latencia, memoria y cierre.

### Fases de Ejecucion:
1. **Evaluar el proyecto** (MSBuild construye el grafo): `dotnet build -c Release` -> grafo compilable. *El SDK convierte convenciones en targets explícitos que pueden inspeccionarse.*
2. **Producir assembly** (Lenguaje a IL y metadata): `Service.dll + Service.deps.json` -> unidad de carga. *El assembly aún no contiene necesariamente código nativo para la CPU final.*
3. **Crear el host** (Servicios y configuración validada): `Host.CreateApplicationBuilder(args)` -> runtime configurado. *El host ordena responsabilidades comunes antes de aceptar trabajo.*
4. **Cargar y ejecutar** (CLR resuelve y JIT compila): `AssemblyLoadContext → JIT` -> método ejecutable. *JIT traduce métodos cuando se necesitan y puede optimizarlos con información del runtime.*
5. **Procesar asíncrono** (Tasks liberan threads durante I/O): `await diagnostics.ReadAsync(ct)` -> trabajo coordinado. *Async reduce threads bloqueados; no vuelve paralelo el cómputo por sí solo.*
6. **Observar presión de GC** (Asignaciones elevan pausa): `dotnet-counters monitor System.Runtime` -> presión localizada. *Los contadores distinguen fuga real de alta tasa de asignación recuperable.*
7. **Reducir y confirmar** (Buffers reutilizados): `ArrayPool<byte>.Shared` -> runtime saludable. *La mejora se demuestra con el mismo workload y señales antes/después.*
8. **Publicar y cerrar** (Artefacto Linux con shutdown): `dotnet publish -r linux-x64` -> servicio operable. *Publicación y lifetime garantizan que el proceso puede arrancar, observarse y terminar sin perder trabajo.*


---

## Catalogo Sistematico de Conceptos (52)

### Seccion: Plataforma y SDK (7 conceptos)

- **Runtime, libraries y app stacks**  
  *Familia:* `mapa de memoria`  
  Separa ejecución, APIs comunes y frameworks especializados.

- **SDK y CLI**  
  *Familia:* `despacho de runtime`  
  Restaura, compila, prueba, publica y administra herramientas mediante comandos reproducibles.

- **Proyectos y MSBuild**  
  *Familia:* `análisis y emisión`  
  Evalúa propiedades, items, targets y dependencias para producir outputs.

- **Target frameworks**  
  *Familia:* `mapa de memoria`  
  Declara qué conjunto de APIs y runtime espera consumir una biblioteca o aplicación.

- **Solution y project references**  
  *Familia:* `pasaporte del artefacto`  
  Organiza dependencias de código sin convertir la solución en requisito del build.

- **Roll-forward y compatibilidad de SDK**  
  *Familia:* `despacho de runtime`  
  Aplica políticas de selección de versión de runtime en ejecución.

- **Global tools y extensiones dotnet**  
  *Familia:* `consulta e índice`  
  Distribuye utilidades ejecutables multiplataforma empaquetadas en NuGet.


### Seccion: Assemblies, metadata y tipos (7 conceptos)

- **IL y metadata**  
  *Familia:* `análisis y emisión`  
  Describe instrucciones, tipos, referencias y atributos de forma independiente de una CPU concreta.

- **Assembly identity y versionado**  
  *Familia:* `validación y decisión`  
  Combina nombre, versión y dependencias dentro de una unidad de despliegue y carga.

- **Type system común (CTS)**  
  *Familia:* `jerarquía y dependencias`  
  Permite que lenguajes distintos compartan tipos, herencia y excepciones.

- **Reflection e inspección dinámica**  
  *Familia:* `análisis y emisión`  
  Inspecciona metadata y activa tipos dinámicamente con costo y requisitos de trimming visibles.

- **Attributes declarativos**  
  *Familia:* `configuración declarativa`  
  Adjunta metadata declarativa que frameworks y herramientas pueden interpretar.

- **AssemblyLoadContext y aislamiento**  
  *Familia:* `aislamiento sobre host`  
  Carga y descarga assemblies en contextos aislados para plugins dinámicos.

- **Metadata tokens y tablas del CLR**  
  *Familia:* `consulta e índice`  
  Comprende cómo el runtime indexa definiciones de métodos y tipos en memoria.


### Seccion: CLR y ejecución de código (7 conceptos)

- **JIT y compilación por niveles (Tiered Compilation)**  
  *Familia:* `despacho de runtime`  
  Traduce métodos usados a código nativo optimizando rutas calientes.

- **Dynamic PGO (Profile-Guided Optimization)**  
  *Familia:* `evidencia y latencia`  
  Ajusta el código nativo basándose en datos de ejecución en tiempo real.

- **ReadyToRun y Native AOT**  
  *Familia:* `propagación de eventos`  
  Mueve trabajo a publicación intercambiando tamaño, dinamismo y tiempo de arranque.

- **Exceptions y stack unwinding**  
  *Familia:* `máquina de estados`  
  Propaga fallos limpiando frames y ejecutando bloques finally.

- **ThreadPool y colas de trabajo**  
  *Familia:* `cola y consumidor`  
  Reutiliza hilos de trabajo coordinados sin crear uno por cada operación asíncrona.

- **SynchronizationContext y TaskScheduler**  
  *Familia:* `planificación de trabajo`  
  Controla dónde se reanuda una tarea tras un await.

- **Virtual Method Table (vtable) en CLR**  
  *Familia:* `despacho de runtime`  
  Resuelve invocaciones polimórficas de interfaces y métodos virtuales.


### Seccion: Memoria administrada y Garbage Collector (7 conceptos)

- **Managed heap y regiones de asignación**  
  *Familia:* `tabla de estados`  
  Asigna objetos contiguos rápidamente mediante punteros de asignación.

- **Generational GC (Gen0, Gen1, Gen2)**  
  *Familia:* `análisis y emisión`  
  Promueve objetos sobrevivientes asumiendo que la mayoría de asignaciones vive poco.

- **Roots y reachability**  
  *Familia:* `validación y decisión`  
  Mantiene objetos alcanzables desde stacks, registros, statics, handles y runtime.

- **Large Object Heap (LOH)**  
  *Familia:* `tabla de estados`  
  Trata objetos de más de 85.000 bytes con costos distintos de compactación y fragmentación.

- **Pinned Object Heap (POH)**  
  *Familia:* `jerarquía y dependencias`  
  Aloja buffers inmovilizados para interoperabilidad nativa sin fragmentar el heap general.

- **Modos de GC (Workstation vs Server)**  
  *Familia:* `comparativa técnica`  
  Elige entre baja latencia en cliente o alto throughput y múltiples heaps en servidor.

- **IDisposable y finalizers**  
  *Familia:* `mapa de memoria`  
  Libera recursos externos determinísticamente sin depender de la recolección.


### Seccion: Bibliotecas base y colecciones (6 conceptos)

- **Base Class Library (BCL)**  
  *Familia:* `análisis y emisión`  
  Ofrece colecciones, I/O, networking, texto, tiempo y concurrencia compartidos.

- **Span<T> y Memory<T>**  
  *Familia:* `memoria intermedia`  
  Accede a memoria contigua de stack, heap o memoria nativa con asignación cero.

- **ArrayPool<T> y pooling de memoria**  
  *Familia:* `tabla de estados`  
  Reutiliza buffers de arreglos grandes para eliminar presión sobre el GC.

- **System.IO.Pipelines**  
  *Familia:* `workflow y decisiones`  
  Maneja streams de red y sockets con lectura sin copias y backpressure estricto.

- **System.Text.Json y Source Generators**  
  *Familia:* `tejido literario`  
  Serializa JSON de alto rendimiento sin depender de reflexión en runtime.

- **Colecciones concurrentes thread-safe**  
  *Familia:* `planificación de trabajo`  
  Usa ConcurrentQueue, ConcurrentDictionary y Channel sin cerrojos globales.


### Seccion: Inyección de dependencias y configuración (6 conceptos)

- **ServiceCollection y Dependency Injection**  
  *Familia:* `jerarquía y dependencias`  
  Construye grafos de servicios con lifetimes Singleton, Scoped y Transient.

- **Options Pattern y validación tipada**  
  *Familia:* `matriz de señales`  
  Mapea archivos de configuración a objetos con validación en arranque.

- **Configuration Providers múltiples**  
  *Familia:* `topología y tráfico`  
  Fusiona JSON, variables de entorno, línea de comandos y secretos.

- **Scopes y ciclos de vida en ASP.NET Core**  
  *Familia:* `ida y vuelta`  
  Aísla servicios por petición HTTP evitando fugas en Singletons.

- **Decoradores y fábricas de servicios**  
  *Familia:* `análisis y emisión`  
  Extiende comportamiento sin acoplar clases concretas a implementaciones previas.

- **Keyed Services en .NET**  
  *Familia:* `evidencia y latencia`  
  Resuelve dependencias registradas bajo claves específicas dentro del mismo contenedor.


### Seccion: Hosting y observabilidad (6 conceptos)

- **Generic Host (IHost)**  
  *Familia:* `validación y decisión`  
  Coordina DI, configuración, logging y lifetime de procesos de larga duración.

- **Logging estructurado con ILogger**  
  *Familia:* `diagnóstico operativo`  
  Conserva templates y parámetros para consultas analíticas sin cadenas ambiguas.

- **Métricas con System.Diagnostics.Metrics**  
  *Familia:* `evidencia y latencia`  
  Expone contadores, histogramas y gauges exportables vía OpenTelemetry.

- **Distributed tracing con Activity**  
  *Familia:* `ciclo de vida`  
  Propaga TraceId y SpanId a través de llamadas HTTP y colas de mensajes.

- **Health Checks para contenedores**  
  *Familia:* `aislamiento sobre host`  
  Distingue entre liveness (vivo) y readiness (listo para tráfico) en Kubernetes.

- **EventCounters y diagnósticos ligeros**  
  *Familia:* `propagación de eventos`  
  Publica indicadores de rendimiento consumibles por herramientas externas.


### Seccion: Publicación, empaquetado e interoperabilidad (6 conceptos)

- **Framework-dependent vs Self-contained**  
  *Familia:* `comparativa técnica`  
  Elige depender de un runtime instalado o incluirlo autocontenido.

- **Trimming y Single-File publishing**  
  *Familia:* `consulta e índice`  
  Reduce el tamaño del binario eliminando código no alcanzable de forma estricta.

- **P/Invoke y LibraryImport**  
  *Familia:* `mapa de memoria`  
  Invoca funciones C nativas mediante generadores de código sin sobrecoste de runtime.

- **COM Interop y Native AOT exports**  
  *Familia:* `despacho de runtime`  
  Expone bibliotecas .NET como DLLs nativas consumibles por C/C++ u otros lenguajes.

- **Herramientas CLI dotnet-dump, dotnet-trace y dotnet-gcdump**  
  *Familia:* `evidencia y latencia`  
  Inspecciona memoria y rendimiento en entornos Linux y Docker.

- **Symbol servers y Source Link**  
  *Familia:* `ida y vuelta`  
  Permite depurar código paso a paso vinculando assemblies a repositorios de código.



## Referencias Bibliograficas y Documentacion Oficial
- **[Get started with .NET](https://learn.microsoft.com/en-us/dotnet/core/get-started)** (`tutorial` | Nivel: `beginner`): 
- **[.NET fundamentals](https://learn.microsoft.com/en-us/dotnet/fundamentals/)** (`official-docs` | Nivel: `intermediate`): 
- **[Architect modern web applications with ASP.NET Core and Azure](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/)** (`book` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
