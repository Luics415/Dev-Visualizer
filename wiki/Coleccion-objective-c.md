# Objective-C (Obj-C)

> **Mensajería, runtime, ARC, Foundation e interoperabilidad con Swift.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `objective-c` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `legado` |
| **Tema Visual** | `objective-c` |
| **Total de Conceptos** | **48 conceptos** |
| **Capitulos / Secciones** | **8 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/objective-c)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/objective-c-en-accion)


## Estudio de Caso Practico: Objective-C en acción

> **Caso integrado · Módulo iOS legado con frontera Swift:** Un módulo de imágenes pierde memoria y duplica callbacks. La reparación hace visible dispatch, ARC, GCD y una interfaz estable para migrar sin reescribir todo.  
> El módulo heredado queda estable, medible y encapsulado detrás de un protocolo que Swift puede consumir.

### Fases de Ejecucion:
1. **Reproducir la fuga** (Una secuencia concreta): `open → background → resume → close` -> síntoma acotado. *Instruments y una secuencia repetible separan la fuga de variaciones normales.*
2. **Inspeccionar ownership** (Graph de referencias): `strong self → operation → block → self` -> ciclo identificado. *ARC administra conteos, pero un ciclo fuerte sigue siendo alcanzable.*
3. **Romper el ciclo** (Weak al capturar, strong al usar): `__weak typeof(self) weakSelf = self` -> lifetime correcto. *La referencia débil expresa que la operación no debe mantener viva a la pantalla.*
4. **Ordenar callbacks** (Una cola serial protege estado): `dispatch_async(stateQueue, ^{ ... })` -> estado coordinado. *La cola expresa exclusión y ubicación de trabajo sin bloquear el hilo principal.*
5. **Sanear el observer** (Registrar y retirar simétricamente): `addObserver → token → removeObserver` -> ciclo de vida cerrado. *La suscripción tiene un recurso identificable y una retirada garantizada.*
6. **Definir protocolo** (Swift ve una superficie pequeña): `@protocol ImageLoading` -> frontera estable. *El protocolo describe capacidad sin exportar detalles del runtime.*
7. **Probar el puente** (Objetos de ambos lenguajes cooperan): `Swift test → Obj-C fake` -> interop verificada. *La prueba cruza la frontera real y captura convenciones de nombres y nullability.*
8. **Migrar por módulo** (Sin gran reescritura): `Obj-C implementation → Swift implementation` -> legado encapsulado. *Una frontera clara permite reemplazar implementación sin cambiar consumidores.*


---

## Catalogo Sistematico de Conceptos (48)

### Seccion: Lenguaje, objetos e isa (6 conceptos)

- **Clases, objetos e isa**  
  *Familia:* `análisis y emisión`  
  Relaciona cada instancia con la clase que guía el despacho de mensajes.

- **Mensajes y selectors (SEL)**  
  *Familia:* `telar relacional`  
  Separa nombre de operación de la implementación elegida en runtime.

- **Métodos de instancia y clase**  
  *Familia:* `validación y decisión`  
  Distingue mensajes a instancias de mensajes al objeto metaclase.

- **Properties e ivars**  
  *Familia:* `análisis y emisión`  
  Expone acceso con semántica de ownership (strong, weak, copy, assign).

- **Inicializadores y ciclo de vida**  
  *Familia:* `ciclo de vida`  
  Construye instancias respetando la cadena de inicialización designada.

- **Literales de Foundation**  
  *Familia:* `validación y decisión`  
  Usa sintaxis concisa para arrays, diccionarios y números encapsulados.


### Seccion: Despacho dinámico y objc_msgSend (6 conceptos)

- **Función objc_msgSend**  
  *Familia:* `mapa de memoria`  
  Despacha un selector respetando firma, registros y arquitectura ABI de Apple.

- **Method lookup y cache interno**  
  *Familia:* `memoria intermedia`  
  Reutiliza punteros de función IMP resueltos sin recalcular la jerarquía.

- **Method Swizzling**  
  *Familia:* `despacho de runtime`  
  Intercambia implementaciones de métodos en runtime para instrumentación y diagnósticos.

- **Punteros de implementación IMP**  
  *Familia:* `mapa de memoria`  
  Obtiene llamadas directas a funciones C para optimizar bucles intensivos.

- **Resolución dinámica de métodos**  
  *Familia:* `comparativa técnica`  
  Implementa resolveInstanceMethod para proporcionar código en tiempo de ejecución.

- **Estructura objc_class y metaclases**  
  *Familia:* `análisis y emisión`  
  Comprende la tabla de métodos, variables y protocolos de cada clase.


### Seccion: Introspección, selectors y message forwarding (6 conceptos)

- **Introspección con isKindOfClass y respondsToSelector**  
  *Familia:* `telar relacional`  
  Verifica capacidades antes de invocar métodos opcionales.

- **Fast forwarding con forwardingTargetForSelector**  
  *Familia:* `tejido literario`  
  Redirige mensajes a objetos delegados sin crear invocaciones completas.

- **Normal forwarding con forwardInvocation**  
  *Familia:* `análisis y emisión`  
  Construye objetos NSInvocation para reescribir argumentos y despachar.

- **Clasificación NSMethodSignature**  
  *Familia:* `cuadrícula paralela`  
  Obtiene metadata de tipos de argumentos y retorno para empaquetar llamadas.

- **Manejo de doesNotRecognizeSelector**  
  *Familia:* `telar relacional`  
  Captura invocaciones inválidas antes de que provoquen un crash no controlado.

- **Dynamic proxying con NSProxy**  
  *Familia:* `ida y vuelta`  
  Crea objetos sustitutos para balanceo, logging y arquitectura distribuida.


### Seccion: Gestión de memoria y semántica ARC (6 conceptos)

- **Strong, weak y unsafe references**  
  *Familia:* `mapa de memoria`  
  Expresa ownership, observación y riesgos de punteros colgantes.

- **Autorelease pools y @autoreleasepool**  
  *Familia:* `ciclo de vida`  
  Difiere llamadas release dentro de bloques con límites deterministas.

- **Retain cycles en bloques y delegates**  
  *Familia:* `pasaporte del artefacto`  
  Detecta ciclos de retención mutua donde dos objetos impiden su desasignación.

- **Bridging con Core Foundation**  
  *Familia:* `análisis y emisión`  
  Transfiere ownership entre objetos Objective-C y tipos C con __bridge, __bridge_transfer y __bridge_retained.

- **Semántica de copia para bloques**  
  *Familia:* `telar relacional`  
  Garantiza que bloques que capturan estado local se trasladen del stack al heap.

- **Método dealloc y limpieza de recursos**  
  *Familia:* `acumulación de recursos`  
  Desuscribe notificaciones y cierra handles sin llamar explícitamente a retain o release.


### Seccion: Composición Cocoa, categorías y protocolos (6 conceptos)

- **Protocols y métodos requeridos u opcionales**  
  *Familia:* `flujo de transformación`  
  Declara contratos de interfaz desacoplados de jerarquías de herencia.

- **Categories y class extensions**  
  *Familia:* `jerarquía y dependencias`  
  Agrega métodos a clases existentes y encapsula miembros privados sin subclases.

- **Patrón Delegation**  
  *Familia:* `despacho de runtime`  
  Entrega decisiones y eventos a otro objeto con referencias débiles para evitar ciclos.

- **Key-Value Coding (KVC)**  
  *Familia:* `flujo de transformación`  
  Accede a propiedades indirectamente mediante nombres de clave en runtime.

- **Key-Value Observing (KVO)**  
  *Familia:* `jerarquía y dependencias`  
  Observa cambios en propiedades de objetos con notificaciones automáticas o manuales.

- **Associated Objects**  
  *Familia:* `despacho de runtime`  
  Asocia estado arbitrario a instancias existentes usando claves de runtime.


### Seccion: Grand Central Dispatch, colas y asincronía (6 conceptos)

- **Colas seriales y concurrentes en GCD**  
  *Familia:* `cola y consumidor`  
  Organiza tareas según exclusión mutua o paralelismo sin administrar hilos manuales.

- **Main Queue y actualizaciones de interfaz**  
  *Familia:* `planificación de trabajo`  
  Fuerza la ejecución de cambios en UI en el hilo principal.

- **Dispatch groups y sincronización**  
  *Familia:* `despacho de runtime`  
  Espera la finalización de múltiples tareas asíncronas independientes.

- **Dispatch barriers y patrón reader-writer**  
  *Familia:* `propagación de eventos`  
  Permite lecturas concurrentes y restringe escrituras exclusivas en un recurso.

- **Bloques como callbacks de finalización**  
  *Familia:* `pasaporte del artefacto`  
  Captura variables locales con __block para mutación segura dentro de tareas.

- **Operaciones NSOperation y NSOperationQueue**  
  *Familia:* `cola y consumidor`  
  Modela dependencias, prioridades y cancelación de tareas complejas.


### Seccion: Fronteras seguras con Swift y modernización (6 conceptos)

- **Nullability annotations (_Nonnull, _Nullable)**  
  *Familia:* `mapa de memoria`  
  Informa al compilador de Swift sobre la presencia segura de valores nulos.

- **Generics ligeros en colecciones**  
  *Familia:* `análisis y emisión`  
  Anota tipos de elementos en NSArray y NSDictionary para tipado estricto en Swift.

- **Bridging headers de proyecto**  
  *Familia:* `validación y decisión`  
  Expone interfaces de Objective-C al módulo de Swift de forma controlada.

- **Atributos NS_SWIFT_NAME y NS_REFINED_FOR_SWIFT**  
  *Familia:* `configuración declarativa`  
  Personaliza nombres y firmas de métodos para integrarse con modismos Swift.

- **NS_ENUM y NS_OPTIONS**  
  *Familia:* `análisis y emisión`  
  Convierte enumeraciones C en tipos exhaustivos e integrados en Swift.

- **Aislamiento de módulos legados detrás de protocolos**  
  *Familia:* `aislamiento sobre host`  
  Permite reemplazar implementaciones antiguas sin tocar código consumidor.


### Seccion: Diagnóstico, LLDB y profiling en Instruments (6 conceptos)

- **Depuración con LLDB y comandos po**  
  *Familia:* `validación y decisión`  
  Inspecciona descripciones de objetos y evalúa expresiones en tiempo real.

- **Herramienta Leaks y Allocations en Instruments**  
  *Familia:* `mapa de memoria`  
  Rastrea memoria asignada y localiza ciclos de retención activos.

- **Time Profiler y cuellos de botella de CPU**  
  *Familia:* `planificación de trabajo`  
  Localiza llamadas lentas e invocaciones de objc_msgSend redundantes.

- **Zombies y depuración de memoria liberada**  
  *Familia:* `memoria intermedia`  
  Convierte use-after-free en objetos centinela que reportan el selector que falló.

- **Clang Static Analyzer integrado**  
  *Familia:* `mapa de memoria`  
  Detecta fugas de memoria, nulos accidentales y variables sin inicializar en compilación.

- **Pruebas unitarias con XCTest**  
  *Familia:* `telar relacional`  
  Valida contratos de interfaces heredadas antes de aplicar refactorizaciones.



## Referencias Bibliograficas y Documentacion Oficial
- **[Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/)** (`tutorial` | Nivel: `beginner`): Guía histórica oficial de Apple; la colección también explica el contexto moderno de mantenimiento e interoperabilidad con Swift.
- **[Objective-C Runtime Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html)** (`reference` | Nivel: `intermediate`): Documentación histórica oficial de Apple.
- **[Block Implementation Specification](https://clang.llvm.org/docs/Block-ABI-Apple.html)** (`specification` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
