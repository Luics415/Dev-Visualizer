# 📘 [C*] C*

> **Programación data-parallel para sistemas Connection Machine.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `c-star` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `histórico` |
| **Tema Visual** | `c-star` |
| **Total de Conceptos** | **42 conceptos** |
| **Capítulos / Secciones** | **7 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/c-star)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/c-star-en-accion)**


## 🔬 Caso Práctico en Acción: C* en acción

> **Caso integrado · Difusión térmica paralela:** Una cuadrícula de temperaturas evoluciona sobre processing elements: masks, vecinos y reductions muestran cómo el dominio paralelo produce una convergencia global.  
> La historia conserva su contexto histórico y separa cálculo local, comunicación y reducción global.

### Fases de Ejecución:
1. **Definir el shape** (Una celda por posición lógica): `shape [128][128] Grid` → dominio creado. *El shape expresa organización lógica antes de decidir operaciones.*
2. **Cargar condiciones** (Bordes y fuente de calor): `where (edge) temp = 20;` → estado inicial. *Where selecciona elementos sin ejecutar un loop serial sobre cada celda.*
3. **Leer vecinos** (Comunicación sobre la cuadrícula): `north = temp[pcoord(0)-1]` → vecindad disponible. *Acceder a otra coordenada implica comunicación real entre elementos.*
4. **Actualizar en paralelo** (Misma fórmula, datos distintos): `next = .25*(n+s+e+w)` → iteración calculada. *El segundo buffer evita mezclar estados de la misma iteración.*
5. **Detectar el borde inválido** (Una máscara faltante contamina): `where (!edge) next = ...` → frontera localizada. *La geometría del dominio también define qué vecinos existen.*
6. **Reducir el error** (Muchos deltas a un máximo): `max_delta = max_reduce(abs(next-temp))` → criterio global. *La reducción convierte miles de resultados en una decisión serial.*
7. **Iterar hasta converger** (Control serial, datos paralelos): `while (max_delta > epsilon)` → solución estable. *El host conserva el control del loop mientras la operación pesada permanece paralela.*
8. **Exportar evidencia** (Datos y contexto histórico): `parallel I/O → heatmap` → experimento reproducible. *El resultado conserva shape, límites y tolerancia necesarios para interpretarlo.*


---

## 📚 Desglose Exhaustivo de Conceptos (42)

### 📑 Sección: Connection Machine y arquitectura SIMD (6 conceptos)

- **Front end y processing elements**  
  *Familia:* `flujo de interfaz`  
  Separa el procesador serial anfitrión de los miles de núcleos elementales de cómputo.

- **Modelo SIMD puro**  
  *Familia:* `cuadrícula paralela`  
  Aplica una instrucción emitida por el anfitrión sobre múltiples elementos activos con memoria local.

- **Memoria distribuida masiva**  
  *Familia:* `memoria intermedia`  
  Asocia fragmentos de datos a procesadores enlazados por la red interna de la máquina.

- **Máquinas CM-2 y CM-5**  
  *Familia:* `flujo de interfaz`  
  Compara la transición histórica desde arquitecturas SIMD estrictas hacia sistemas MIMD sincronizados.

- **Microcódigo del secuenciador**  
  *Familia:* `superficie de aplicación`  
  Traduce órdenes del host en ciclos de reloj distribuidos a los nodos de cómputo.

- **Toolchain de compilación C***  
  *Familia:* `análisis y emisión`  
  Ensambla archivos C* enlazando bibliotecas del sistema de Thinking Machines.


### 📑 Sección: Dominios, shapes y coordenadas pcoord (6 conceptos)

- **Definición de shapes**  
  *Familia:* `evidencia y latencia`  
  Declara las dimensiones y topología geométrica de una cuadrícula de datos paralela.

- **Coordenadas intrínsecas pcoord**  
  *Familia:* `consulta e índice`  
  Permite a cada elemento consultar su posición espacial dentro del shape asignado.

- **Mapeo de shapes físicos y virtuales**  
  *Familia:* `capas internas`  
  Distribuye millones de celdas lógicas sobre procesadores físicos limitados.

- **Dimensiones múltiples en shapes**  
  *Familia:* `matriz de señales`  
  Modela matrices bidimensionales, volúmenes 3D y arreglos multidimensionales.

- **Variables paralelas (poly)**  
  *Familia:* `cuadrícula paralela`  
  Distingue valores escalares del host (mono) de arreglos distribuidos en cada nodo (poly).

- **Alineación de shapes compatibles**  
  *Familia:* `evidencia y latencia`  
  Permite operar variables paralelas que comparten la misma distribución geométrica.


### 📑 Sección: Variables paralelas y active sets (6 conceptos)

- **Calificador poly**  
  *Familia:* `secuencia operativa`  
  Indica que una variable posee una instancia independiente en cada processing element del shape.

- **Active set de procesadores**  
  *Familia:* `cuadrícula paralela`  
  Determina qué procesadores participan en la instrucción actual y cuáles se inhiben.

- **Contextos de ejecución paralela**  
  *Familia:* `planificación de trabajo`  
  Establece el shape activo antes de ejecutar expresiones sobre variables poly.

- **Operaciones mono sobre poly**  
  *Familia:* `mapa de memoria`  
  Transfiere valores del host a todos los procesadores o recopila resultados.

- **Punteros paralelos a memoria poly**  
  *Familia:* `memoria intermedia`  
  Permite a un procesador referenciar direcciones de memoria de otro nodo distribuido.

- **Persistencia de estado en memoria local**  
  *Familia:* `comparativa técnica`  
  Conserva valores entre instrucciones paralelas sin depender de memoria global compartida.


### 📑 Sección: Operaciones de selección where y máscaras (6 conceptos)

- **Sentencia where paralela**  
  *Familia:* `telar relacional`  
  Filtra el active set evaluando una expresión condicional booleana en cada procesador.

- **Cláusula elsewhere**  
  *Familia:* `consulta e índice`  
  Invierte la máscara para ejecutar instrucciones alternativas sobre los nodos restantes.

- **Anidamiento de bloques where**  
  *Familia:* `pasaporte del artefacto`  
  Acota incrementalmente el conjunto activo mediante conjunciones de máscaras lógicas.

- **Condiciones sin saltos de programa**  
  *Familia:* `secuencia operativa`  
  Comprende que where enmascara ejecución pero no altera el puntero de instrucción del host.

- **Impacto en rendimiento por divergencia**  
  *Familia:* `evidencia y latencia`  
  Reconoce que caminos condicionales dispares se serializan temporalmente.

- **Máscaras de borde y fronteras**  
  *Familia:* `configuración declarativa`  
  Aísla celdas perimetrales para aplicar condiciones de contorno físicas en simulaciones.


### 📑 Sección: Reducciones globales y scans de prefijos (6 conceptos)

- **Operador de reducción += y suma global**  
  *Familia:* `topología y tráfico`  
  Acumula valores de todos los procesadores activos en un resultado escalar.

- **Reducciones de mínimo y máximo**  
  *Familia:* `ida y vuelta`  
  Encuentra extremos globales como el mayor error residual en una iteración.

- **Reducción lógica and y or**  
  *Familia:* `jerarquía y dependencias`  
  Verifica si todos o algún procesador activo cumple una condición de parada.

- **Scans de prefijos y sumas acumuladas**  
  *Familia:* `topología y tráfico`  
  Calcula sumas acumulativas a lo largo de las dimensiones del shape.

- **Segmented scans con banderas de reinicio**  
  *Familia:* `máquina de estados`  
  Aplica cálculos acumulativos dentro de subgrupos delimitados por centinelas.

- **Árboles de reducción por hardware**  
  *Familia:* `ida y vuelta`  
  Aprovecha circuitos integrados de la Connection Machine para resolver sumas en O(log N).


### 📑 Sección: Topología Hypercube, router y comunicación (6 conceptos)

- **Red de interconexión Hypercube**  
  *Familia:* `topología y tráfico`  
  Conecta procesadores mediante un hipercubo de n dimensiones para comunicación eficiente.

- **Comunicación con vecinos NEWS**  
  *Familia:* `consulta e índice`  
  Transfiere datos entre procesadores contiguos norte, sur, este y oeste a velocidad de red.

- **El router general de la CM**  
  *Familia:* `ida y vuelta`  
  Enruta paquetes arbitrarios punto a punto resolviendo colisiones en tránsito.

- **Conflictos de envío y combinadores**  
  *Familia:* `secuencia operativa`  
  Resuelve colisiones de llegada mediante suma, sobreescritura o descarte en el destino.

- **Latencia de comunicación vs cálculo local**  
  *Familia:* `comparativa técnica`  
  Demuestra por qué los algoritmos eficientes minimizan el uso del router general.

- **Permutaciones y transposiciones de matrices**  
  *Familia:* `consulta e índice`  
  Reorganiza dimensiones de datos distribuidos mediante patrones precalculados.


### 📑 Sección: I/O masivo, Paris/Prism y legado en GPU (6 conceptos)

- **Arquitectura DataVault de I/O paralelo**  
  *Familia:* `anatomía del concepto`  
  Transfiere terabytes entre discos paralelos y procesadores a alta velocidad.

- **Instrucciones de bajo nivel Paris**  
  *Familia:* `pasaporte del artefacto`  
  Estudia la interfaz de ensamblador de la Connection Machine previa a C*.

- **Entorno de visualización Prism**  
  *Familia:* `evidencia y latencia`  
  Monitorea la actividad y convergencia de processing elements en tiempo real.

- **Influencia de C* en CUDA y compute shaders**  
  *Familia:* `secuencia operativa`  
  Rastrea la evolución desde shapes y where hacia grids de hilos y warps de GPU.

- **Paralelismo de datos moderno**  
  *Familia:* `cuadrícula paralela`  
  Compara la abstracción SIMD de C* con instrucciones AVX-512 y tensores modernos.

- **Lecciones de diseño en HPC**  
  *Familia:* `espectro de verificación`  
  Identifica principios de balanceo, comunicación y localidad que siguen vigentes.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[C* Programming Guide](https://people.csail.mit.edu/bradley/cm5docs/CStarProgrammingGuide.pdf)** (`book` | Nivel: `beginner`): Manual histórico preservado por MIT CSAIL.
- **[C* User's Guide](https://www.bitsavers.org/pdf/thinkingMachines/CM5/CStarUsersGuide.pdf)** (`reference` | Nivel: `intermediate`): Manual histórico preservado por Bitsavers.
- **[Connection Machine CM-5 documentation archive](https://people.csail.mit.edu/bradley/cm5docs/)** (`reference` | Nivel: `advanced`): Índice archivístico de manuales primarios del CM-5.


---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
