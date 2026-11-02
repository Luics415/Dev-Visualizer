# Embedded C (EC)

> **Microcontroladores, registros, interrupciones, timing y seguridad.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `embedded-c` |
| **Grupo Arquitectonico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `embedded-c` |
| **Total de Conceptos** | **55 conceptos** |
| **Capitulos / Secciones** | **10 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/embedded-c)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/embedded-c-en-accion)


## Estudio de Caso Practico: Embedded C en acción

> **Caso integrado · Controlador de sensor resiliente:** Un microcontrolador muestrea vibración mediante timer, ADC y DMA; un ring buffer, watchdog y modos de energía mantienen timing y recuperación.  
> El firmware cumple su deadline, no pierde muestras, entra en modo seguro ante fallos y puede explicar la causa del último reset.

### Fases de Ejecucion:
1. **Arrancar con seguridad** (Antes de main): `reset → startup → vector table` -> plataforma inicializada. *El estado seguro existe antes de habilitar periféricos.*
2. **Configurar el muestreo** (Timer gobierna el periodo): `TIM trigger → ADC @ 10 kHz` -> reloj de adquisición. *El periodo se deriva de clocks reales y se comprueba con una señal medible.*
3. **Transferir con DMA** (Bloques sin interrumpir por muestra): `DMA circular half/full IRQ` -> bloque disponible. *Double buffering separa la región que DMA escribe de la que CPU procesa.*
4. **Cruzar la ISR** (Publicar, no procesar): `ISR → queue block_ready` -> trabajo diferido. *La ISR conserva latencia acotada y transfiere ownership mediante un descriptor.*
5. **Detectar overflow** (Consumidor quedó atrás): `next_head == tail` -> presión visible. *El buffer lleno es un estado que debe resolverse, no una oportunidad para destruir datos sin aviso.*
6. **Reducir la carga** (Procesamiento incremental): `fixed-point RMS + decimation` -> deadline recuperado. *El algoritmo se adapta al presupuesto medido y el ring vuelve a tener margen.*
7. **Vigilar salud** (Watchdog alimentado por evidencia): `health_bits == ALL_OK → feed` -> recuperación automática. *Una sola tarea no puede ocultar que otra dejó de cumplir su contrato.*
8. **Dormir y reanudar** (Energía sin perder estado): `STOP mode → timer wake` -> controlador eficiente y trazable. *El wake path forma parte del caso normal y se prueba como cualquier otra transición.*


---

## Catalogo Sistematico de Conceptos (55)

### Seccion: Arquitectura de microcontroladores y mapa de memoria (6 conceptos)

- **CPU, buses y periféricos**  
  *Familia:* `planificación de trabajo`  
  Relaciona instrucciones con memoria, timers, GPIO y controladores conectados.

- **Flash, SRAM y memoria no volátil**  
  *Familia:* `memoria intermedia`  
  Asigna código, datos, stack y configuración según lifetime y resistencia.

- **Startup code y vector table**  
  *Familia:* `cuadrícula paralela`  
  Inicializa memoria y conecta excepciones antes de llamar a main.

- **Linker scripts (.ld)**  
  *Familia:* `matriz de señales`  
  Coloca secciones (.text, .data, .bss) en regiones físicas y detecta desbordamientos.

- **Puntero de pila (MSP/PSP) y límites de RAM**  
  *Familia:* `mapa de memoria`  
  Monitorea crecimiento de stack para prevenir colisión con el heap.

- **Sistemas de reloj y PLL**  
  *Familia:* `despacho de runtime`  
  Multiplica frecuencias de cristal para alimentar núcleos y buses periféricos.


### Seccion: Registros mapeados en memoria, MMIO y volatile (6 conceptos)

- **Memory-mapped I/O (MMIO)**  
  *Familia:* `memoria intermedia`  
  Controla registros de periféricos accediendo a direcciones de memoria fijas.

- **El calificador volatile en hardware**  
  *Familia:* `mapa de memoria`  
  Fuerza lecturas y escrituras sin que el optimizador las descarte.

- **Máscaras de bits y operaciones atómicas**  
  *Familia:* `despacho de runtime`  
  Aplica operaciones OR, AND y NOT para mutar registros sin alterar campos adyacentes.

- **Bit-banding y acceso directo a bits**  
  *Familia:* `capas internas`  
  Modifica un único bit mediante una dirección de memoria proyectada.

- **Barreras de memoria de hardware (DMB, DSB, ISB)**  
  *Familia:* `memoria intermedia`  
  Garantiza orden de finalización en pipelines de instrucciones complejas.

- **Definiciones CMSIS y estructuras periféricas**  
  *Familia:* `mapa de memoria`  
  Mapea bloques de registros mediante punteros a estructuras empaquetadas.


### Seccion: Interrupciones, vector table y controlador NVIC (6 conceptos)

- **Rutinas de servicio de interrupción (ISR)**  
  *Familia:* `planificación de trabajo`  
  Responde a eventos eléctricos reconociendo fuentes y difiriendo cómputo.

- **Controlador de interrupciones NVIC**  
  *Familia:* `flujo de interfaz`  
  Administra prioridades y prioridades de subgrupo en arquitecturas ARM Cortex-M.

- **Latencia de interrupción y jitter**  
  *Familia:* `despacho de runtime`  
  Calcula tiempos de guardado de contexto de registros y respuesta a eventos críticos.

- **Interrupciones anidadas y priorización**  
  *Familia:* `evidencia y latencia`  
  Permite que eventos de emergencia interrumpan rutinas de menor prioridad.

- **Secciones críticas y desactivación temporal**  
  *Familia:* `capas internas`  
  Bloquea interrupciones durante escrituras en estructuras compartidas.

- **Compartición de datos atómica con ISRs**  
  *Familia:* `tejido de eventos`  
  Usa variables atómicas o colas circulares para transferir información a main.


### Seccion: Transferencias DMA y arquitectura double buffering (6 conceptos)

- **Controlador DMA (Direct Memory Access)**  
  *Familia:* `memoria intermedia`  
  Transfiere ráfagas de datos entre periféricos y RAM sin consumir ciclos de CPU.

- **Modo circular de DMA**  
  *Familia:* `mapa de memoria`  
  Recibe streams continuos de datos sin necesidad de reconfigurar transferencias.

- **Interrupciones Half-Transfer y Transfer-Complete**  
  *Familia:* `flujo de interfaz`  
  Notifica cuando una mitad del buffer está lista para procesarse.

- **Double buffering sin carreras**  
  *Familia:* `despacho de runtime`  
  Separa la región de memoria que DMA llena de la que la CPU lee.

- **Coherencia de caché y atributos de memoria**  
  *Familia:* `memoria intermedia`  
  Invalida o limpia líneas de caché en CPUs con subsistema de memoria caché.

- **Manejo de errores de bus en DMA**  
  *Familia:* `evidencia y latencia`  
  Detecta desalineación o colisiones en transferencias de alta velocidad.


### Seccion: Buses de comunicación periférica: UART, SPI e I2C (5 conceptos)

- **Protocolo UART y framing de bytes**  
  *Familia:* `análisis y emisión`  
  Configura baudrates, paridad, bits de stop y maneja buffers de recepción FIFO.

- **Bus serie SPI síncrono**  
  *Familia:* `planificación de trabajo`  
  Transfiere datos a alta velocidad en modo full-duplex con líneas Clock, MOSI, MISO y CS.

- **Bus I2C bifilar y direccionamiento**  
  *Familia:* `consulta e índice`  
  Coordina múltiples sensores mediante reloj SCL y datos SDA con control de arbitraje.

- **Detección de timeouts y bus hang**  
  *Familia:* `capas internas`  
  Recupera líneas atascadas en bajo forzando pulsos de reloj manuales.

- **Control de flujo por hardware (RTS/CTS)**  
  *Familia:* `telar relacional`  
  Evita pérdidas de datos pausando la transmisión mediante señales eléctricas.


### Seccion: Sistemas de tiempo real cooperativos y RTOS (6 conceptos)

- **Superloop y máquinas de estado**  
  *Familia:* `máquina de estados`  
  Organiza tareas cooperativas con tiempos deterministas y sin sobrecoste de RTOS.

- **Planificador preemptivo de FreeRTOS**  
  *Familia:* `planificación de trabajo`  
  Conmuta tareas según prioridades asignadas mediante el tick del SysTick.

- **Colas de mensajes inter-tarea**  
  *Familia:* `cola y consumidor`  
  Comunica tareas mediante copias de datos desacopladas sin memoria compartida.

- **Semáforos binarios y mutexes en RTOS**  
  *Familia:* `máquina de estados`  
  Protege periféricos compartidos y coordina señales entre tareas e interrupciones.

- **Inversión de prioridad y herencia**  
  *Familia:* `jerarquía y dependencias`  
  Eleva la prioridad de una tarea que retiene un cerrojo requerido por una tarea crítica.

- **Worst-Case Execution Time (WCET)**  
  *Familia:* `capas internas`  
  Mide el camino de ejecución más largo para garantizar el cumplimiento de deadlines.


### Seccion: Gestión de energía y transiciones a modos Sleep (5 conceptos)

- **Modos de bajo consumo (Sleep, Stop, Standby)**  
  *Familia:* `diagnóstico operativo`  
  Desconecta relojes de periféricos y dominios de energía para ahorrar batería.

- **Fuentes de despertar (Wake-up sources)**  
  *Familia:* `anatomía del concepto`  
  Configura interrupciones externas de GPIO o temporizadores RTC para despertar la CPU.

- **Instrucciones WFI (Wait For Interrupt) y WFE**  
  *Familia:* `evidencia y latencia`  
  Suspende la ejecución del núcleo hasta la llegada de un evento válido.

- **Presupuesto energético y duty cycling**  
  *Familia:* `capas internas`  
  Calcula la duración de baterías alternando ráfagas de cómputo y sueño profundo.

- **Restauración de relojes al despertar**  
  *Familia:* `ida y vuelta`  
  Reconfigura osciladores y PLLs antes de reanudar operaciones críticas.


### Seccion: Watchdogs independientes, brownout y reset causes (5 conceptos)

- **Watchdog independiente (IWDG)**  
  *Familia:* `diagnóstico operativo`  
  Fuerza reinicio del microcontrolador si el software se congela o entra en bucle infinito.

- **Watchdog con ventana (WWDG)**  
  *Familia:* `planificación de trabajo`  
  Garantiza que la tarea se ejecute dentro de una ventana temporal estricta ni antes ni después.

- **Detector de caídas de tensión (Brown-out Reset)**  
  *Familia:* `capas internas`  
  Mantiene el sistema en reset seguro si la alimentación cae bajo el umbral operacional.

- **Registro de causas de reinicio (RCC CSR)**  
  *Familia:* `máquina de estados`  
  Identifica si el último inicio se debió a encendido, watchdog, pin reset o fallo.

- **Estado seguro físico ante fallo (Fail-Safe)**  
  *Familia:* `secuencia operativa`  
  Coloca salidas y actuadores en posición pasiva segura antes de cualquier reset.


### Seccion: Firmware seguro, bootloaders y partición A/B (5 conceptos)

- **Bootloaders primarios y secundarios**  
  *Familia:* `capas internas`  
  Gestiona el arranque de imágenes y valida firmas criptográficas de autenticidad.

- **Esquema de doble partición (A/B updates)**  
  *Familia:* `tejido de eventos`  
  Actualiza la partición inactiva garantizando rollback automático si falla el boot.

- **Comprobación de integridad CRC32 y SHA-256**  
  *Familia:* `cuadrícula paralela`  
  Verifica que los bytes de Flash no hayan sufrido corrupción antes de ejecutarse.

- **Protección de lectura de Flash (RDP)**  
  *Familia:* `validación y decisión`  
  Impide la extracción no autorizada de firmware mediante interfaces de depuración.

- **Reglas MISRA-C en firmware crítico**  
  *Familia:* `capas internas`  
  Aplica estándares estrictos que eliminan construcciones ambiguas y peligrosas de C.


### Seccion: Diagnóstico hardware-in-the-loop, SWD/JTAG y fallos (5 conceptos)

- **Protocolos de depuración SWD y JTAG**  
  *Familia:* `análisis y emisión`  
  Accede a registros de CPU y memoria en tiempo real mediante dos o cuatro líneas.

- **Puntos de ruptura por hardware (Hardware Breakpoints)**  
  *Familia:* `mapa de memoria`  
  Pausa la ejecución en memoria Flash sin modificar el binario.

- **HardFault Handler y análisis de stack**  
  *Familia:* `capas internas`  
  Inspecciona registros apilados (PC, LR, PSR) para encontrar la causa del crash.

- **Instrumentación ligera con Segger RTT**  
  *Familia:* `evidencia y latencia`  
  Emite telemetría hacia la PC mediante buffers compartidos en RAM en microsegundos.

- **Pruebas Hardware-in-the-Loop (HIL)**  
  *Familia:* `espectro de verificación`  
  Valida el comportamiento del firmware estimulando señales eléctricas desde un banco de pruebas.



## Referencias Bibliograficas y Documentacion Oficial
- **[A Beginner's Guide to Designing Embedded System Applications on Arm Cortex-M](https://www.arm.com/resources/education/books/designing-embedded-systems)** (`book` | Nivel: `beginner`): 
- **[Raspberry Pi Pico C/C++ SDK guide](https://www.raspberrypi.com/documentation/microcontrollers/c_sdk.html)** (`official-docs` | Nivel: `intermediate`): 
- **[FreeRTOS kernel documentation](https://www.freertos.org/Documentation/02-Kernel/01-About-the-FreeRTOS-kernel/01-FreeRTOS-kernel)** (`reference` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
