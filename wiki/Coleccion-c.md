# C (C)

> **Compilación, memoria, punteros, ABI, herramientas y seguridad.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `c` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `c` |
| **Total de Conceptos** | **60 conceptos** |
| **Capitulos / Secciones** | **10 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/c)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/c-en-accion)


## Estudio de Caso Practico: C en acción

> **Caso integrado · Parser binario seguro:** Un paquete de telemetría no confiable cruza bytes, validación, ownership y representación hasta producir una lectura utilizable sin acceder fuera del buffer.  
> El parser acepta únicamente paquetes completos, libera toda memoria y conserva un error preciso para cada frontera.

### Fases de Ejecucion:
1. **Recibir bytes** (Longitud antes que contenido): `read(fd, buffer, capacity)` -> entrada acotada. *La lectura puede ser parcial y nunca garantiza un paquete completo.*
2. **Validar cabecera** (Magic, versión y tamaño): `if (len < HEADER_SIZE) reject` -> cabecera confiable. *Ningún cast se ejecuta antes de demostrar que los bytes existen.*
3. **Calcular capacidad** (Overflow antes de reservar): `checked_add(header, payload)` -> tamaño representable. *Un overflow de size_t podría convertir una entrada enorme en un buffer insuficiente.*
4. **Reservar ownership** (Una salida libera todo): `packet = calloc(1, sizeof *packet)` -> objeto adquirido. *El ownership queda claro desde la asignación hasta un único bloque de limpieza.*
5. **Decodificar campos** (memcpy evita aliasing y alineación): `memcpy(&raw, cursor, sizeof raw)` -> datos interpretados. *Copiar a un objeto del tipo correcto evita accesos inválidos por alineación.*
6. **Validar semántica** (Forma válida no basta): `temp >= -40 && temp <= 125` -> telemetría aceptable. *La validación semántica protege al resto del sistema de valores representables pero imposibles.*
7. **Probar entradas hostiles** (Fuzzer y sanitizer cooperan): `clang -fsanitize=address,undefined` -> parser endurecido. *La instrumentación convierte una desviación de memoria en una traza localizada.*
8. **Liberar y observar** (Resultado o error, nunca fuga): `packet_free(packet)` -> lectura segura y explicable. *Cada camino termina con recursos liberados y evidencia suficiente para operar el parser.*


---

## Catalogo Sistematico de Conceptos (60)

### Seccion: Traducción y programa (6 conceptos)

- **Fases de traducción**  
  *Familia:* `capas internas`  
  Explica cómo caracteres, macros, unidades de traducción y link producen un ejecutable.

- **Función main y entorno hospedado**  
  *Familia:* `evidencia y latencia`  
  Distingue programas con sistema operativo de implementaciones freestanding.

- **Declaraciones y definiciones**  
  *Familia:* `configuración declarativa`  
  Separa describir un nombre de reservar almacenamiento o proporcionar una función.

- **Headers y linkage**  
  *Familia:* `secuencia operativa`  
  Comparte contratos sin multiplicar definiciones ni ocultar dependencias.

- **Preprocesador**  
  *Familia:* `cuadrícula paralela`  
  Expande inclusión y macros antes del análisis del lenguaje, con límites de tipos y scope.

- **Pragmas y extensiones del compilador**  
  *Familia:* `análisis y emisión`  
  Aplica atributos de optimización y empaquetado sin romper portabilidad.


### Seccion: Tipos, enteros y representación binaria (6 conceptos)

- **Tipos enteros y promociones**  
  *Familia:* `matriz de señales`  
  Relaciona rango, signedness y conversiones antes de operar bits o tamaños.

- **Punto flotante**  
  *Familia:* `validación y decisión`  
  Representa aproximaciones, redondeo, NaN e infinito sin asumir aritmética decimal exacta.

- **Arrays y decaimiento a puntero**  
  *Familia:* `tabla de estados`  
  Distingue el objeto array de la dirección que muchas expresiones producen.

- **Struct, union y padding**  
  *Familia:* `análisis y emisión`  
  Organiza campos respetando alineación, padding y representación dependiente de ABI.

- **Enum, typedef y qualifiers**  
  *Familia:* `validación y decisión`  
  Da nombres y restricciones sin crear siempre un tipo nominal nuevo.

- **Enteros de ancho fijo stdint**  
  *Familia:* `jerarquía y dependencias`  
  Garantiza tamaños de 8, 16, 32 y 64 bits para protocolos y formatos binarios.


### Seccion: Punteros y aritmética estricta (6 conceptos)

- **Direcciones y aritmética de punteros**  
  *Familia:* `mapa de memoria`  
  Se mueve únicamente dentro de un array válido y conserva el tipo del elemento.

- **Punteros void y alineación**  
  *Familia:* `capas internas`  
  Transporta memoria genérica exigiendo casts explícitos hacia tipos con alineación compatible.

- **Punteros nulos y comprobación**  
  *Familia:* `árbol de recursos`  
  Usa NULL o nullptr para representar ausencia sin desreferenciar direcciones inválidas.

- **Puntero a puntero y mutación**  
  *Familia:* `mapa de memoria`  
  Modifica la dirección que almacena un puntero externo desde una función invocada.

- **Punteros a funciones y callbacks**  
  *Familia:* `propagación de eventos`  
  Modela tablas de operaciones y eventos desacoplados mediante firmas estrictas.

- **Punteros constantes y restrict**  
  *Familia:* `capas internas`  
  Distingue punteros a datos inmutables de punteros con dirección fija y sin solapamiento.


### Seccion: Memoria dinámica, lifetime y ownership (6 conceptos)

- **Stack, static storage y heap**  
  *Familia:* `tabla de estados`  
  Relaciona lifetime con región sin confundirlo con una regla universal de implementación.

- **malloc, calloc, realloc y free**  
  *Familia:* `mapa de memoria`  
  Administra capacidad dinámica con ownership, tamaño y caminos de error explícitos.

- **Ownership y responsabilidad de liberación**  
  *Familia:* `validación y decisión`  
  Asigna un módulo dueño para cada buffer adquirido en el heap.

- **Doble liberación y use-after-free**  
  *Familia:* `despacho de runtime`  
  Previene accesos a regiones liberadas limpiando punteros inmediatamente tras free.

- **Fragmentación del heap**  
  *Familia:* `tabla de estados`  
  Planifica patrones de reserva para evitar que reservas dispares agoten bloques contiguos.

- **Asignadores de arena y pools**  
  *Familia:* `mapa de memoria`  
  Agrupa asignaciones con el mismo ciclo de vida para liberarlas en bloque a costo cero.


### Seccion: Aliasing, effective type y restrict (6 conceptos)

- **Aliasing y effective type**  
  *Familia:* `análisis y emisión`  
  Define qué accesos pueden observar un objeto sin romper optimizaciones del compilador.

- **Strict aliasing rule**  
  *Familia:* `validación y decisión`  
  Impide desreferenciar la misma memoria a través de tipos incompatibles salvo excepciones como char.

- **El calificador restrict**  
  *Familia:* `jerarquía y dependencias`  
  Informa al compilador que un puntero es el único acceso a su región durante el scope.

- **Casts de tipos y type punning**  
  *Familia:* `análisis y emisión`  
  Usa uniones o memcpy para reinterpretar representaciones binarias sin violar reglas de aliasing.

- **Memory clobbers y optimizaciones**  
  *Familia:* `memoria intermedia`  
  Comprende cómo reordenamientos del optimizador asumen ausencia de efectos colaterales invisibles.

- **Punteros volátiles en hardware**  
  *Familia:* `mapa de memoria`  
  Fuerza lecturas y escrituras en memoria mapeada sin convertirlas en sincronización de hilos.


### Seccion: Control de flujo y secuencia temporal (6 conceptos)

- **Expresiones y sequence rules**  
  *Familia:* `validación y decisión`  
  Evita depender de órdenes de evaluación no garantizados.

- **Control de flujo condicional**  
  *Familia:* `evidencia y latencia`  
  Construye decisiones y loops con invariantes y salidas visibles.

- **Sentencias switch y fallthrough**  
  *Familia:* `secuencia operativa`  
  Controla bifurcaciones por valor con etiquetas explícitas y salvaguardas default.

- **Loops while, for y do-while**  
  *Familia:* `tabla de estados`  
  Establece condiciones de terminación deterministas para prevenir bucles infinitos.

- **Saltos locales y goto de limpieza**  
  *Familia:* `evidencia y latencia`  
  Centraliza la liberación de recursos en bloques de salida unificados sin saltos cruzados.

- **setjmp y longjmp en recuperación**  
  *Familia:* `máquina de estados`  
  Maneja excepciones de bajo nivel sin corromper el stack ni omitir cierres críticos.


### Seccion: Funciones, calling conventions y ABI (6 conceptos)

- **Funciones y calling convention**  
  *Familia:* `mapa de memoria`  
  Pasa argumentos a través de un ABI aunque el estándar no dicte registros concretos.

- **Pila de llamadas y frame pointers**  
  *Familia:* `acumulación de recursos`  
  Conserva el estado de activación anterior y las variables locales en cada invocación.

- **Argumentos variables con stdarg**  
  *Familia:* `análisis y emisión`  
  Procesa listas dinámicas verificando tipos y centinelas para evitar lecturas fuera de límite.

- **Funciones inline y linkage interno**  
  *Familia:* `topología y tráfico`  
  Reduce sobrecoste de llamadas sin multiplicar definiciones públicas en el binario.

- **Recursión y límites de stack**  
  *Familia:* `acumulación de recursos`  
  Intercambia claridad por consumo de frames que el entorno puede limitar.

- **Estabilidad de ABI y exportación**  
  *Familia:* `mapa de memoria`  
  Diseña nombres y layouts durables para interoperar con runtimes como Python y Rust.


### Seccion: I/O, streams y manejo de archivos (6 conceptos)

- **stdio y buffering**  
  *Familia:* `evidencia y latencia`  
  Distingue streams, buffers, EOF y errores de una lectura o escritura parcial.

- **Archivos y descriptores del sistema**  
  *Familia:* `árbol de recursos`  
  Adquiere handles y garantiza cierre en todos los caminos de salida.

- **Lecturas binarias fread y fwrite**  
  *Familia:* `secuencia operativa`  
  Transfiere bloques de estructuras verificando cantidad de elementos leídos.

- **Posicionamiento con fseek y ftell**  
  *Familia:* `análisis y emisión`  
  Navega desplazamientos en archivos grandes verificando límites de tipo off_t.

- **Formateo seguro con snprintf**  
  *Familia:* `consulta e índice`  
  Construye cadenas delimitadas verificando truncamiento antes de consumirlas.

- **Errores, errno y códigos de retorno**  
  *Familia:* `evidencia y latencia`  
  Conserva causa antes de que otra operación modifique el contexto.


### Seccion: Concurrencia, atomicidad y memoria C11/C23 (6 conceptos)

- **Atomics y memory order**  
  *Familia:* `memoria intermedia`  
  Coordina accesos concurrentes sin convertir volatile en sincronización.

- **Tipos atómicos y operaciones lock-free**  
  *Familia:* `cola y consumidor`  
  Ejecuta compare-and-swap (CAS) para actualizar estado sin adquirir cerrojos.

- **Threads estándar de C11**  
  *Familia:* `planificación de trabajo`  
  Crea y sincroniza hilos nativos mediante thrd_create y thrd_join.

- **Mutexes y variables de condición**  
  *Familia:* `máquina de estados`  
  Protege invariantes compartidas y coordina señales entre productores y consumidores.

- **Memory barriers y sequential consistency**  
  *Familia:* `memoria intermedia`  
  Fuerza ordenamiento estricto entre procesadores multipnúcleo.

- **Data races y comportamiento indefinido**  
  *Familia:* `planificación de trabajo`  
  Demuestra por qué una carrera de lectura/escritura destruye la validez del programa.


### Seccion: Seguridad de sistemas, sanitizers y hardening (6 conceptos)

- **Warnings como contrato estricto**  
  *Familia:* `espectro de verificación`  
  Activa diagnósticos estrictos (-Wall -Wextra -Werror) y elimina advertencias.

- **Sanitizers de memoria ASan y UBSan**  
  *Familia:* `memoria intermedia`  
  Instrumenta memoria, enteros y concurrencia para convertir fallos silenciosos en evidencia.

- **Mitigación de desbordamientos de buffer**  
  *Familia:* `validación y decisión`  
  Reemplaza funciones inseguras históricas por interfaces seguras con límites de longitud.

- **Protección de stack canaries y FORTIFY_SOURCE**  
  *Familia:* `mapa de memoria`  
  Detecta corrupción de retornos de funciones antes de que alteren el flujo de ejecución.

- **Debugger LLDB/GDB y core dumps**  
  *Familia:* `evidencia y latencia`  
  Reconstruye stack, registros y memoria en el punto observable del fallo.

- **Fuzzing con libFuzzer y AFL**  
  *Familia:* `espectro de verificación`  
  Explora entradas hostiles con mutaciones guiadas por cobertura para encontrar cuelgues.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
