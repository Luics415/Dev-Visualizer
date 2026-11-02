# 📘 [C++] C++

> **RAII, tipos, STL, templates, concurrencia y rendimiento.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `cpp` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `cpp` |
| **Total de Conceptos** | **66 conceptos** |
| **Capítulos / Secciones** | **10 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/cpp)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/cpp-en-accion)**


## 🔬 Caso Práctico en Acción: C++ en acción

> **Caso integrado · Simulador concurrente con RAII:** Un simulador de rutas procesa escenarios en paralelo y conserva ownership claro, cancelación, resultados deterministas y evidencia de rendimiento.  
> Cada recurso tiene dueño, cada thread termina y la optimización se apoya en perfiles, no en intuición.

### Fases de Ejecución:
1. **Modelar el dominio** (Tipos expresan unidades e invariantes): `struct Route { Nodes nodes; Cost cost; }` → modelo válido. *El tipo impide mezclar costo, distancia y tiempo por accidente.*
2. **Adquirir recursos** (RAII ata vida a scope): `MappedGraph graph{path};` → grafo disponible. *La adquisición completa o lanza antes de publicar un objeto parcialmente válido.*
3. **Preparar trabajo** (Ranges transforman escenarios): `views::filter | views::transform` → cola calculada. *Una view no posee datos; el origen debe seguir vivo durante la iteración.*
4. **Ejecutar en paralelo** (Tasks con ownership explícito): `jthread + stop_token` → cómputo coordinado. *jthread evita olvidar join y el token hace cooperativa la cancelación.*
5. **Detectar carrera** (TSan encuentra estado compartido): `-fsanitize=thread` → causa demostrada. *La carrera no se corrige añadiendo sleeps; se elimina el acceso compartido no coordinado.*
6. **Reducir sin compartir** (Cada task devuelve un valor): `future<Result> → reduce` → concurrencia segura. *Cambiar el diseño reduce contención y elimina la raíz de la carrera.*
7. **Perfilar locality** (Datos contiguos vencen a microajustes): `perf record · heaptrack` → rendimiento probado. *El perfil revela que el layout de datos importa más que una expresión aislada.*
8. **Empaquetar y probar** (Target reproducible): `cmake --build && ctest` → simulador operable. *Build, tests y límites de ABI convierten el prototipo en software mantenible.*


---

## 📚 Desglose Exhaustivo de Conceptos (66)

### 📑 Sección: Modelo del lenguaje y compilación ODR (6 conceptos)

- **Compilación y One Definition Rule**  
  *Familia:* `análisis y emisión`  
  Coordina unidades de traducción sin definiciones incompatibles.

- **Inicialización**  
  *Familia:* `mapa de memoria`  
  Distingue default, value, direct, list y aggregate initialization.

- **const y constexpr**  
  *Familia:* `tejido literario`  
  Separa inmutabilidad observable de evaluación posible en compilación.

- **Namespaces y lookup**  
  *Familia:* `aislamiento sobre host`  
  Resuelve nombres mediante scopes, ADL y using declarations.

- **Modules y headers**  
  *Familia:* `mapa de memoria`  
  Reduce dependencia textual manteniendo interfaces explícitas.

- **Linkage y visibilidad de símbolos**  
  *Familia:* `despacho de runtime`  
  Controla qué declaraciones son visibles entre bibliotecas compartidas.


### 📑 Sección: Objetos, lifetime y RAII determinista (6 conceptos)

- **Storage y object lifetime**  
  *Familia:* `validación y decisión`  
  Distingue memoria reservada de un objeto que ya comenzó a vivir.

- **Constructores y destructores**  
  *Familia:* `análisis y emisión`  
  Establece invariantes al adquirir y libera recursos al salir del scope.

- **RAII**  
  *Familia:* `jerarquía y dependencias`  
  Vincula archivos, locks y memoria al lifetime determinista de un objeto.

- **Smart pointers**  
  *Familia:* `mapa de memoria`  
  Expresa ownership único (unique_ptr), compartido (shared_ptr) o débil (weak_ptr).

- **Regla del cero, tres y cinco**  
  *Familia:* `análisis y emisión`  
  Decide cuándo implementar constructores de copia, movimiento y destructor.

- **Invariantes de clase y estado válido**  
  *Familia:* `espectro de verificación`  
  Garantiza que ningún constructor exponga un objeto a medio inicializar.


### 📑 Sección: Move semantics, rvalues y value categories (7 conceptos)

- **Lvalues, prvalues y xvalues**  
  *Familia:* `evidencia y latencia`  
  Clasifica expresiones para decidir si pueden moverse o vincularse a referencias.

- **Constructores y asignación de movimiento**  
  *Familia:* `análisis y emisión`  
  Transfiere punteros internos dejando el objeto origen en estado válido.

- **std**  
  *Familia:* `flujo de transformación`  
  move y casts incondicionales::Convierte una expresión en rvalue para habilitar transferencia de ownership.

- **Perfect forwarding con std**  
  *Familia:* `evidencia y latencia`  
  forward::Preserva la categoría de valor original al reenviar argumentos en plantillas.

- **Referencias a rvalues (T&&)**  
  *Familia:* `secuencia operativa`  
  Diferencia referencias de movimiento de universal/forwarding references en templates.

- **Movimiento sin excepciones noexcept**  
  *Familia:* `tabla de estados`  
  Garantiza que contenedores como std::vector reubiquen elementos moviendo y no copiando.

- **Elisión de copia y RVO**  
  *Familia:* `análisis y emisión`  
  Permite al compilador omitir copias y movimientos al retornar objetos locales.


### 📑 Sección: Tipos, herencia y polimorfismo dinámico (6 conceptos)

- **Clases e invariantes**  
  *Familia:* `espectro de verificación`  
  Encapsula estado de modo que toda operación pública preserve reglas.

- **Herencia y substitución**  
  *Familia:* `jerarquía y dependencias`  
  Usa polimorfismo dinámico solo cuando el contrato base admite reemplazo real.

- **Virtual dispatch y vtables**  
  *Familia:* `despacho de runtime`  
  Resuelve la implementación mediante la tabla de funciones virtuales en runtime.

- **Destructores virtuales**  
  *Familia:* `análisis y emisión`  
  Asegura la invocación del destructor correcto al eliminar instancias mediante punteros base.

- **Herencia múltiple y clases virtuales**  
  *Familia:* `matriz de señales`  
  Resuelve el problema del diamante unificando subobjetos base compartidos.

- **std**  
  *Familia:* `validación y decisión`  
  variant y polimorfismo cerrado::Representa alternativas conocidas con visita exhaustiva sin despacho virtual.


### 📑 Sección: Templates, especialización y variadic packs (7 conceptos)

- **Function y class templates**  
  *Familia:* `análisis y emisión`  
  Genera familias de operaciones y tipos a partir de parámetros.

- **Type deduction**  
  *Familia:* `jerarquía y dependencias`  
  Infere parámetros conservando referencias, const y forwarding según el contexto.

- **Especialización explícita y parcial**  
  *Familia:* `despacho de runtime`  
  Personaliza casos sin romper la selección primaria ni crear ambigüedad.

- **Variadic templates y parameter packs**  
  *Familia:* `análisis y emisión`  
  Modela listas de tipos y argumentos de longitud arbitraria.

- **Fold expressions**  
  *Familia:* `pasaporte del artefacto`  
  Aplica operadores binarios sobre paquetes de parámetros con sintaxis concisa.

- **SFINAE y std**  
  *Familia:* `mapa de memoria`  
  enable_if::Elimina sobrecargas inválidas del conjunto de candidatos sin provocar error de compilación.

- **Template template parameters**  
  *Familia:* `capas internas`  
  Acepta plantillas como argumentos de otras plantillas para componer contenedores.


### 📑 Sección: Concepts, constraints y type traits de C++20 (6 conceptos)

- **Concepts como contratos de tipos**  
  *Familia:* `espectro de verificación`  
  Restringe plantillas mediante predicados semánticos evaluados en compilación.

- **Cláusula requires**  
  *Familia:* `análisis y emisión`  
  Especifica expresiones válidas, tipos anidados y requisitos de retorno para tipos genéricos.

- **Type traits en std**  
  *Familia:* `validación y decisión`  
  type_traits::Inspecciona propiedades de tipos en compilación (is_integral, is_pod, is_invocable).

- **Concepts estándar en std**  
  *Familia:* `jerarquía y dependencias`  
  concepts::Usa contratos predefinidos como same_as, derived_from, convertible_to y invocable.

- **Sobrecargas restringidas por conceptos**  
  *Familia:* `análisis y emisión`  
  Permite resolver ambigüedades genéricas mediante subsunción de conceptos.

- **Diagnósticos claros del compilador**  
  *Familia:* `flujo de transformación`  
  Aprovecha mensajes de error precisos generados cuando un tipo no satisface un concepto.


### 📑 Sección: STL moderna, ranges y allocators PMR (7 conceptos)

- **Contenedores y localidad de memoria**  
  *Familia:* `memoria intermedia`  
  Elige vector, deque o unordered_map según patrones de acceso a caché.

- **Iteradores y categorías de acceso**  
  *Familia:* `evidencia y latencia`  
  Conecta secuencias con algoritmos mediante contratos de avance y desreferencia.

- **Vistas y pipelines en std**  
  *Familia:* `workflow y decisiones`  
  ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios.

- **Polymorphic memory resources (PMR)**  
  *Familia:* `memoria intermedia`  
  Controla de dónde obtiene memoria un contenedor mediante allocators dinámicos.

- **std**  
  *Familia:* `flujo de interfaz`  
  string_view y std::span::Pasa referencias no propietarias a cadenas y arrays contiguos sin copias.

- **Algoritmos paralelos de la STL**  
  *Familia:* `cuadrícula paralela`  
  Ejecuta transformaciones y ordenamientos aprovechando múltiples hilos con execution policies.

- **Estructuras asociadas planas (flat_map)**  
  *Familia:* `evidencia y latencia`  
  Mejora rendimiento almacenando llaves y valores en vectores contiguos ordenados.


### 📑 Sección: Concurrencia, atomics y coroutines C++20 (7 conceptos)

- **Hilos nativos con std**  
  *Familia:* `matriz de señales`  
  jthread::Gestiona concurrencia con unión automática y token de parada cooperativo stop_token.

- **Locks RAII y mutexes**  
  *Familia:* `cola y consumidor`  
  Usa std::unique_lock, scoped_lock y shared_lock para prevenir bloqueos mutuos.

- **Variables de condición**  
  *Familia:* `validación y decisión`  
  Coordina despertar de hilos evitando desperdicio de ciclos mediante predicados seguros.

- **Modelo de memoria atómica std**  
  *Familia:* `memoria intermedia`  
  atomic::Garantiza visibilidad y orden con memory_order_relaxed, acquire, release y seq_cst.

- **Coroutines y co_await**  
  *Familia:* `tejido de eventos`  
  Suspende y reanuda funciones sin bloquear hilos mediante promesas y coroutine handles.

- **Generadores con co_yield**  
  *Familia:* `planificación de trabajo`  
  Produce secuencias infinitas o calculadas bajo demanda de forma asíncrona.

- **std**  
  *Familia:* `cola y consumidor`  
  future y std::promise::Transfiere resultados o excepciones entre hilos desacoplados de forma segura.


### 📑 Sección: Programación en compilación, constexpr y consteval (7 conceptos)

- **Funciones constexpr**  
  *Familia:* `tejido literario`  
  Ejecuta algoritmos y genera datos durante la compilación si los argumentos son constantes.

- **Funciones consteval (immediate functions)**  
  *Familia:* `flujo de transformación`  
  Fuerza evaluación exclusiva en tiempo de compilación sin dejar código en runtime.

- **if constexpr y compilación condicional**  
  *Familia:* `análisis y emisión`  
  Descarta ramas de código en tiempo de compilación según propiedades de tipos.

- **Variables y estructuras constexpr**  
  *Familia:* `tejido literario`  
  Construye tablas de búsqueda y grafos inmutables incrustados en el binario.

- **std**  
  *Familia:* `mapa de memoria`  
  is_constant_evaluated::Detecta si la ejecución actual ocurre en compilación para elegir algoritmos especializados.

- **Reflexión estática emergente**  
  *Familia:* `secuencia operativa`  
  Inspecciona campos y miembros de clases para serialización sin código duplicado.

- **Metaprogramación basada en valores**  
  *Familia:* `análisis y emisión`  
  Reemplaza trucos de tipos basados en templates por expresiones imperativas constexpr.


### 📑 Sección: Toolchains, CMake, sanitizers y hardening de producción (7 conceptos)

- **CMake y targets modernos**  
  *Familia:* `pasaporte del artefacto`  
  Propaga includes, flags y dependencias como propiedades transitivas del target.

- **Sanitizers de Clang y GCC**  
  *Familia:* `planificación de trabajo`  
  Superpone AddressSanitizer, UndefinedBehaviorSanitizer y ThreadSanitizer.

- **Perfilado de CPU y memoria**  
  *Familia:* `memoria intermedia`  
  Mide hotspots y allocations con perf, VTune, heaptrack y Valgrind.

- **Control de ABI y compatibilidad binaria**  
  *Familia:* `pasaporte del artefacto`  
  Administra visibilidad de símbolos, decoradores de nombres y versionado de librerías.

- **Fuzz testing con libFuzzer**  
  *Familia:* `espectro de verificación`  
  Genera entradas no confiables para descubrir violaciones de invariantes y memory corruption.

- **Hardening de binarios y directivas de seguridad**  
  *Familia:* `mapa de memoria`  
  Activa RELRO, stack-protector-strong, ASLR y control de flujo seguro (CFI).

- **Auditoría con C++ Core Guidelines y Clang-Tidy**  
  *Familia:* `pasaporte del artefacto`  
  Aplica reglas automáticas para erradicar patrones obsoletos o riesgosos.




---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
