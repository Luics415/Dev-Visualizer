# Visual Basic .NET (VB)

> **Lenguaje .NET, eventos, LINQ, WinForms e interoperabilidad.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `visual-basic` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `visual-basic` |
| **Total de Conceptos** | **48 conceptos** |
| **Capitulos / Secciones** | **8 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/visual-basic)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/visual-basic-en-accion)


## Estudio de Caso Practico: Visual Basic en acción

> **Caso integrado · WinForms y biblioteca compartida:** Una herramienta de órdenes Windows separa eventos de UI, validación y persistencia, y comparte el dominio con una biblioteca C# sin congelar la ventana.  
> El formulario se vuelve una superficie delgada; la lógica es tipada, probada e interoperable dentro de la misma solución .NET.

### Fases de Ejecucion:
1. **Activar tipos estrictos** (Errores antes de ejecutar): `Option Strict On` -> base tipada. *El cambio revela fronteras débiles antes de extraer lógica.*
2. **Modelar la orden** (Clase con estado válido): `Public Class RepairOrder` -> dominio explícito. *El objeto no permite combinaciones que el formulario tendría que recordar.*
3. **Separar el presenter** (Eventos delegan intención): `Handles SaveButton.Click` -> UI desacoplada. *Handles conecta la interacción, pero el presenter contiene el caso de uso.*
4. **Validar y proyectar** (LINQ prepara la vista): `From order In orders Where order.IsOpen` -> lista coherente. *La consulta se materializa antes de binding para evitar reevaluaciones sorpresivas.*
5. **Guardar sin bloquear** (Await libera el thread UI): `Await repository.SaveAsync(order, ct)` -> orden persistida. *Await retoma en el contexto de UI para actualizar controles de forma segura.*
6. **Encontrar suscripción doble** (El handler vive más que la vista): `AddHandler service.Changed, AddressOf OnChanged` -> lifetime incorrecto. *Un evento también crea una relación de ownership que debe terminar.*
7. **Cerrar el lifecycle** (Suscripción simétrica): `RemoveHandler ... in Dispose` -> fuga corregida. *Dispose cierra tanto controles como suscripciones externas.*
8. **Compartir con C#** (Assembly común, dos lenguajes): `Domain.vbproj → CSharpWorker.csproj` -> solución interoperable. *La plataforma común permite dividir responsabilidades sin traducir datos ni duplicar reglas.*


---

## Catalogo Sistematico de Conceptos (48)

### Seccion: Fundamentos del lenguaje y Option Strict (6 conceptos)

- **Option Strict y tipado estricto**  
  *Familia:* `matriz de señales`  
  Evita conversiones implícitas peligrosas y errores sutiles de narrowing en tiempo de ejecución.

- **Option Explicit y declaración obligatoria**  
  *Familia:* `configuración declarativa`  
  Exige declarar cada identificador antes de su uso para prevenir variables accidentales.

- **Option Infer y tipos deducidos**  
  *Familia:* `topología y tráfico`  
  Infiere tipos locales a partir del valor de inicialización sin perder seguridad estática.

- **Variables, Dim y alcance (Scope)**  
  *Familia:* `análisis y emisión`  
  Controla visibilidad en bloques, procedimientos, clases y módulos de compilación.

- **Procedures y Functions**  
  *Familia:* `capas internas`  
  Separa subrutinas de acción sin retorno de funciones con contratos y valores devueltos.

- **Módulos estándar frente a Clases**  
  *Familia:* `constelación de mecanismos`  
  Comprende la diferencia entre miembros estáticos compartidos y tipos instanciables.


### Seccion: Objetos, encapsulación y ciclo de vida (6 conceptos)

- **Properties con Get y Set explícitos**  
  *Familia:* `análisis y emisión`  
  Controla validaciones de estado antes de asignar valores a campos privados.

- **Auto-implemented Properties**  
  *Familia:* `validación y decisión`  
  Simplifica propiedades que no requieren lógica adicional preservando la sintaxis pública.

- **Constructores Sub New y sobrecargas**  
  *Familia:* `jerarquía y dependencias`  
  Garantiza que toda instancia inicie con invariantes de negocio satisfechas.

- **Herencia con Inherits y Overrides**  
  *Familia:* `capas internas`  
  Especializa comportamiento polimórfico garantizando invocación a MyBase.New().

- **Interfaces con Implements explícito**  
  *Familia:* `análisis y emisión`  
  Declara qué métodos de la interfaz implementa cada procedimiento sin ambigüedades.

- **Estructuras (Structure) y Value Types**  
  *Familia:* `validación y decisión`  
  Modela datos ligeros copiados por valor para operaciones matemáticas y coordenadas.


### Seccion: Eventos, Handles, AddHandler y desacoplamiento (6 conceptos)

- **Eventos con Event y RaiseEvent**  
  *Familia:* `propagación de eventos`  
  Notifica sucesos a observadores suscritos mediante firmas fuertemente tipadas.

- **Cláusula Handles declarativa**  
  *Familia:* `configuración declarativa`  
  Conecta controles de interfaz gráfica a métodos de evento de forma estática.

- **Suscripción dinámica con AddHandler y RemoveHandler**  
  *Familia:* `matriz de señales`  
  Conecta y desconecta listeners en runtime para evitar fugas de memoria.

- **Custom Events y almacenamiento de delegates**  
  *Familia:* `propagación de eventos`  
  Personaliza la gestión de suscriptores para reducir memoria en listas largas.

- **WithEvents y variables con eventos**  
  *Familia:* `ecosistema coordinado`  
  Habilita el uso de la sintaxis Handles en campos de clase específicos.

- **Eliminación de suscripciones en Dispose**  
  *Familia:* `matriz de señales`  
  Previene fugas por referencias fuertes donde un publicador retiene formularios antiguos.


### Seccion: Colecciones genéricas y LINQ to Objects (6 conceptos)

- **Colecciones genéricas List(Of T) y Dictionary**  
  *Familia:* `análisis y emisión`  
  Almacena secuencias tipadas eliminando casts repetidos y riesgos de boxing.

- **Sintaxis declarativa de LINQ (From ... In ... Select)**  
  *Familia:* `telar relacional`  
  Consulta colecciones en memoria con sintaxis legible y similar a SQL.

- **Operadores Where, Order By y Group By**  
  *Familia:* `consulta e índice`  
  Filtra, ordena y agrupa datos estructurados de forma expresiva.

- **Ejecución diferida en LINQ**  
  *Familia:* `análisis y emisión`  
  Comprende que la consulta se evalúa al recorrer el resultado y no en su declaración.

- **Anonymous Types y proyecciones**  
  *Familia:* `validación y decisión`  
  Crea tipos locales efímeros para seleccionar columnas específicas sin clases de datos manuales.

- **Funciones Lambda multilínea y de una línea**  
  *Familia:* `flujo de transformación`  
  Pasa comportamiento anónimo como parámetros para transformaciones funcionales.


### Seccion: XML Literals y metaprogramación visual (6 conceptos)

- **Literales XML incrustados en código**  
  *Familia:* `configuración declarativa`  
  Escribe árboles XML directamente en el editor con verificación de sintaxis en tiempo de compilación.

- **Expresiones embebidas <%= %> en XML**  
  *Familia:* `jerarquía y dependencias`  
  Inyecta valores de variables en elementos y atributos XML de forma segura.

- **Ejes XML y navegación de nodos (...<nodo>)**  
  *Familia:* `workflow y decisiones`  
  Recorre descendientes y atributos con sintaxis de navegación integrada en el lenguaje.

- **LINQ to XML y transformaciones de datos**  
  *Familia:* `configuración declarativa`  
  Genera y consume documentos XML complejos para interoperabilidad y reportes.

- **Serialización tipada de esquemas**  
  *Familia:* `matriz de señales`  
  Valida estructuras XML contra contratos de datos sin código de parsing engorroso.

- **Casos de uso en configuración y Office**  
  *Familia:* `despacho de runtime`  
  Aprovecha XML Literals en automatización de documentos y aplicaciones heredadas.


### Seccion: Asincronía moderna con Async, Await y Tasks (6 conceptos)

- **Modificador Async y operador Await**  
  *Familia:* `flujo de interfaz`  
  Ejecuta operaciones de I/O en segundo plano liberando el hilo de interfaz de usuario.

- **Task y Task(Of TResult)**  
  *Familia:* `planificación de trabajo`  
  Representa promesas de finalización asíncrona compatibles con todo el ecosistema .NET.

- **CancellationToken en bucles asíncronos**  
  *Familia:* `consulta e índice`  
  Cancela operaciones largas de red y persistencia cooperativamente.

- **Control de SynchronizationContext en WinForms**  
  *Familia:* `tejido literario`  
  Asegura que el código tras un Await retome en el hilo de UI sin Invoke manual.

- **Manejo de excepciones con Try...Catch...Finally**  
  *Familia:* `planificación de trabajo`  
  Captura fallos asíncronos garantizando la limpieza de recursos externos.

- **Uso de bloques Using en recursos asíncronos**  
  *Familia:* `acumulación de recursos`  
  Asegura la invocación a Dispose o DisposeAsync al abandonar el ámbito.


### Seccion: WinForms mantenible, MVP y separación de capas (6 conceptos)

- **Ciclo de vida del Form (Load, Shown, FormClosing)**  
  *Familia:* `ciclo de vida`  
  Separa la preparación de controles de la visualización y persistencia.

- **Data Binding tipado con BindingSource**  
  *Familia:* `matriz de señales`  
  Conecta grillas y controles a objetos de dominio sin escribir pegamento manual.

- **Patrón Model-View-Presenter (MVP)**  
  *Familia:* `consulta e índice`  
  Extrae reglas de negocio del Form a Presenters que se pueden probar sin abrir ventanas.

- **Evitar congelamiento de UI con BackgroundWorker o Task**  
  *Familia:* `cola y consumidor`  
  Mueve trabajo pesado fuera del hilo principal para mantener la ventana fluida.

- **Validación de controles con ErrorProvider**  
  *Familia:* `evidencia y latencia`  
  Muestra alertas visuales de validación junto a los campos de entrada.

- **Arquitectura por componentes y UserControls**  
  *Familia:* `anatomía del concepto`  
  Reutiliza paneles y formularios complejos como bloques de construcción modulares.


### Seccion: Interoperabilidad con C#, COM y calidad (6 conceptos)

- **Bibliotecas de clases interoperables con C#**  
  *Familia:* `constelación de mecanismos`  
  Consume y expone tipos entre proyectos VB.NET y C# en la misma solución.

- **Consumo de metadatos Nullable de C#**  
  *Familia:* `espectro de verificación`  
  Interpreta anotaciones de nulabilidad de C# para prevenir referencias nulas en VB.

- **Interoperabilidad con COM nativo y ActiveX**  
  *Familia:* `matriz de señales`  
  Llama a componentes históricos de Windows sin reescribir código C/C++ previo.

- **Pruebas unitarias con MSTest y xUnit**  
  *Familia:* `validación y decisión`  
  Valida lógica de Presenters y servicios con entradas y aserciones controladas.

- **Estrategia de modernización desde VB6**  
  *Familia:* `espectro de verificación`  
  Aísla interfaces COM antes de migrar lógica hacia .NET moderno.

- **Perfilado de memoria y compilación cruzada**  
  *Familia:* `memoria intermedia`  
  Monitorea el consumo de memoria en aplicaciones empresariales de larga duración.



## Referencias Bibliograficas y Documentacion Oficial
- **[Get started with Visual Basic](https://learn.microsoft.com/en-us/dotnet/visual-basic/getting-started/)** (`tutorial` | Nivel: `beginner`): 
- **[Visual Basic Programming Guide](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/)** (`official-docs` | Nivel: `intermediate`): 
- **[Visual Basic Language Reference](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/)** (`reference` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
