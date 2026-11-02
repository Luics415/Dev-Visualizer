# 📘 [Cat] Scratch

> **Programación visual, eventos, mensajes, clones, juegos y pensamiento computacional.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `scratch` |
| **Grupo Arquitectónico** | [Fundamentos](Grupo-Fundamentals) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `javascript` |
| **Total de Conceptos** | **76 conceptos** |
| **Capítulos / Secciones** | **13 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/scratch)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/scratch-en-accion)**


## 🔬 Caso Práctico en Acción: Construir un juego de recolección

> **Caso integrado de Scratch:** Un sprite recibe eventos, crea objetos y actualiza puntuación; una tormenta de clones revela el fallo y el juego recupera un ciclo estable.  
> El proyecto final puede explicarse desde el evento de bandera hasta el fin de partida y reiniciarse sin estado residual.

### Fases de Ejecución:
1. **Preparar el mundo** (Construir un juego de recolección: etapa 1 de 5): `al presionar bandera
fijar puntos a 0` → Partida limpia. *La etapa conserva un contrato explícito para que el siguiente paso de Scratch no dependa de supuestos ocultos.*
2. **Coordinar eventos** (Construir un juego de recolección: etapa 2 de 5): `enviar [crear objeto]` → Flujo interactivo. *La etapa conserva un contrato explícito para que el siguiente paso de Scratch no dependa de supuestos ocultos.*
3. **Descubrir fuga de clones** (Construir un juego de recolección: etapa 3 de 5): `por siempre
  crear clon de mí` → Rendimiento degradado. *El caso hace visible el fallo de Scratch; no continúa como si la evidencia fuera válida.*
4. **Cerrar el ciclo** (Construir un juego de recolección: etapa 4 de 5): `si toca borde entonces
  borrar este clon` → Cantidad de clones estable. *La recuperación de Scratch corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Verificar la partida** (Construir un juego de recolección: etapa 5 de 5): `si puntos = 10 entonces enviar [ganar]` → Juego reiniciable y comprobado. *La etapa conserva un contrato explícito para que el siguiente paso de Scratch no dependa de supuestos ocultos.*


---

## 📚 Desglose Exhaustivo de Conceptos (76)

### 📑 Sección: Escenario y bloques (5 conceptos)

- **Proyecto, escenario y sprites**  
  *Familia:* `flujo de interfaz`  
  Proyecto, escenario y sprites conecta un evento, el estado previo y una intención observable con su runtime interno: aplica una transición y deriva la representación sin perder contexto hasta exponer estado e interfaz sincronizados con respuesta comprensible.

- **Paleta y área de programas**  
  *Familia:* `superficie de aplicación`  
  En Paleta y área de programas, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Eventos de inicio**  
  *Familia:* `cuadrícula paralela`  
  La función de Eventos de inicio parte de un evento, el estado previo y una intención observable. Su ejecución aplica una transición y deriva la representación sin perder contexto y produce estado e interfaz sincronizados con respuesta comprensible.

- **Movimiento y coordenadas**  
  *Familia:* `flujo de interfaz`  
  Movimiento y coordenadas estructura una instancia acotada, sus invariantes y una medida de costo en el sistema: explora estados manteniendo la propiedad que garantiza corrección, garantizando una solución acompañada de complejidad y límites conocidos.

- **Apariencia y sonido**  
  *Familia:* `superficie de aplicación`  
  El recorrido de Apariencia y sonido toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Estado y control (5 conceptos)

- **Variables**  
  *Familia:* `máquina de estados`  
  Variables procesa un evento, el estado previo y una intención observable: aplica una transición y deriva la representación sin perder contexto para entregar estado e interfaz sincronizados con respuesta comprensible.

- **Listas**  
  *Familia:* `propagación de eventos`  
  Para entender Listas, se delimita un evento, el estado previo y una intención observable. La operación aplica una transición y deriva la representación sin perder contexto hasta producir estado e interfaz sincronizados con respuesta comprensible.

- **Condiciones**  
  *Familia:* `tejido de eventos`  
  El mecanismo de Condiciones recibe un evento, el estado previo y una intención observable y aplica una transición y deriva la representación sin perder contexto, asegurando estado e interfaz sincronizados con respuesta comprensible.

- **Bucles**  
  *Familia:* `máquina de estados`  
  Bucles conecta un evento, el estado previo y una intención observable con su runtime interno: aplica una transición y deriva la representación sin perder contexto hasta exponer estado e interfaz sincronizados con respuesta comprensible.

- **Operadores**  
  *Familia:* `propagación de eventos`  
  En Operadores, texto fuente, contexto léxico y reglas del lenguaje ingresa al flujo donde reconoce estructura, comprueba contratos y produce una representación ejecutable para consolidar significado bien formado con errores localizados.


### 📑 Sección: Interacción (5 conceptos)

- **Sensores**  
  *Familia:* `flujo de interfaz`  
  Sensores conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Mensajes broadcast**  
  *Familia:* `máquina de estados`  
  En Mensajes broadcast, un mensaje versionado, un destino y límites de tiempo ingresa al flujo donde serializa, transporta y valida el intercambio a través de una frontera remota para consolidar una respuesta correlacionada o un estado convergente verificable.

- **Preguntas y respuestas**  
  *Familia:* `propagación de eventos`  
  La función de Preguntas y respuestas parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Teclado y puntero**  
  *Familia:* `flujo de interfaz`  
  Teclado y puntero estructura valores con representación, dirección y tiempo de vida definidos en el sistema: reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime, garantizando estado accesible sin referencias colgantes ni corrupción.

- **Colisiones**  
  *Familia:* `máquina de estados`  
  El recorrido de Colisiones toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Abstracción y diagnóstico (5 conceptos)

- **Mis bloques**  
  *Familia:* `pasaporte del artefacto`  
  Para entender Mis bloques, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.

- **Parámetros**  
  *Familia:* `evidencia y latencia`  
  El mecanismo de Parámetros recibe un comportamiento esperado, una entrada mínima y un síntoma observable y aísla variables y contrasta hipótesis con instrumentación repetible, asegurando una causa demostrada y una regresión protegida.

- **Clones**  
  *Familia:* `mapa de memoria`  
  Clones conecta un comportamiento esperado, una entrada mínima y un síntoma observable con su runtime interno: aísla variables y contrasta hipótesis con instrumentación repetible hasta exponer una causa demostrada y una regresión protegida.

- **Concurrencia de guiones**  
  *Familia:* `planificación de trabajo`  
  En Concurrencia de guiones, tareas con dependencias, recursos compartidos y una señal de cancelación ingresa al flujo donde ordena trabajo y sincronización sin ocultar intercalados posibles para consolidar progreso concurrente con ownership y terminación observables.

- **Depuración por observación**  
  *Familia:* `evidencia y latencia`  
  La función de Depuración por observación parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.


### 📑 Sección: Proyecto completo (5 conceptos)

- **Máquina de estados del juego**  
  *Familia:* `flujo de interfaz`  
  Para entender Máquina de estados del juego, se delimita un evento, el estado previo y una intención observable. La operación aplica una transición y deriva la representación sin perder contexto hasta producir estado e interfaz sincronizados con respuesta comprensible.

- **Puntuación y vidas**  
  *Familia:* `contratos coordinados`  
  El mecanismo de Puntuación y vidas recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Niveles**  
  *Familia:* `mapa de memoria`  
  Niveles conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Rendimiento de clones**  
  *Familia:* `evidencia y latencia`  
  En Rendimiento de clones, un workload representativo, un presupuesto y una línea base ingresa al flujo donde mide la ruta crítica y cambia una variable por vez para consolidar una mejora cuantificada sin intercambiar corrección por velocidad.

- **Compartir y remixar**  
  *Familia:* `comparativa técnica`  
  La función de Compartir y remixar parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.


### 📑 Sección: Geometría con sprites (5 conceptos)

- **Dirección y rotación**  
  *Familia:* `flujo de interfaz`  
  Relaciona ángulo, estilo de rotación y orientación del disfraz para mover sprites previsiblemente.

- **Deslizamiento interpolado**  
  *Familia:* `superficie de aplicación`  
  Calcula posiciones intermedias durante un tiempo dado y evita saltos visuales entre destinos.

- **Capas y orden visual**  
  *Familia:* `cuadrícula paralela`  
  Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas.

- **Lápiz y dibujo procedural**  
  *Familia:* `flujo de interfaz`  
  Convierte movimientos repetibles en trazos, polígonos y patrones generados por reglas.

- **Transformaciones con coordenadas**  
  *Familia:* `superficie de aplicación`  
  Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.


### 📑 Sección: Modelo de eventos (7 conceptos)

- **Sombreros de evento**  
  *Familia:* `máquina de estados`  
  Inician pilas independientes cuando ocurre bandera, tecla, clic, mensaje o cambio de condición.

- **Orden no determinista de guiones**  
  *Familia:* `propagación de eventos`  
  Explica por qué guiones activados juntos pueden intercalarse y compartir estado de forma inesperada.

- **Broadcast con espera**  
  *Familia:* `tejido de eventos`  
  Suspende al emisor hasta que terminan los receptores y permite secuenciar escenas coordinadas.

- **Temporizadores y latidos**  
  *Familia:* `máquina de estados`  
  Producen eventos periódicos sin bloquear otros guiones y mantienen ritmos observables.

- **Protocolos entre sprites**  
  *Familia:* `propagación de eventos`  
  Define nombres de mensaje, datos compartidos y respuestas esperadas para evitar coordinación implícita.

- **Condiciones de carrera entre guiones**  
  *Familia:* `tejido de eventos`  
  Para Condiciones / carrera / entre / guiones, el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados, manteniendo una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.

- **Barreras por mensajes**  
  *Familia:* `máquina de estados`  
  Barreras / por / mensajes coordina la ejecución: el modelo estima parámetros o predicciones bajo supuestos que se comprueban con datos separados hasta obtener una estimación acompañada de incertidumbre, diagnóstico y alcance de generalización.


### 📑 Sección: Datos persistentes y compartidos (8 conceptos)

- **Variables locales del sprite**  
  *Familia:* `consulta e índice`  
  Conservan estado por instancia y evitan que sprites independientes sobrescriban valores globales.

- **Listas como tablas**  
  *Familia:* `jerarquía y dependencias`  
  Alinean posiciones entre columnas o agrupan filas serializadas para consultar conjuntos de datos.

- **Codificación de registros en listas**  
  *Familia:* `mapa de memoria`  
  Define separadores y escapes para reconstruir campos sin ambigüedad al no existir objetos nativos.

- **Variables en la nube**  
  *Familia:* `consulta e índice`  
  Sincronizan valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación.

- **Límites de datos compartidos**  
  *Familia:* `comparativa técnica`  
  Restringen tamaño y confianza para que entradas remotas no rompan lógica ni expongan información.

- **Codificación numérica en variables cloud**  
  *Familia:* `telar relacional`  
  Para Codificación / numérica / en / variables, el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, manteniendo un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.

- **Listas paralelas y consistencia**  
  *Familia:* `cuadrícula paralela`  
  Listas / paralelas / consistencia coordina la ejecución: el scheduler intercala trabajo mientras locks, mensajes o atomics establecen el orden observable hasta obtener progreso concurrente con ownership y terminación comprobables para cada tarea.

- **Migración de formato guardado**  
  *Familia:* `secuencia operativa`  
  Al operar con Migración / formato / guardado, el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar, produciendo estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### 📑 Sección: Patrones con clones (6 conceptos)

- **Fábricas de clones**  
  *Familia:* `ciclo de vida`  
  Centralizan creación y parámetros iniciales antes de que cada copia ejecute su evento de nacimiento.

- **Estado privado por clon**  
  *Familia:* `planificación de trabajo`  
  Usa variables locales heredadas al crear para que cada instancia evolucione independientemente.

- **Pooling de objetos**  
  *Familia:* `cuadrícula paralela`  
  Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado.

- **Destrucción controlada**  
  *Familia:* `ciclo de vida`  
  Elimina clones al salir de su ciclo de vida y libera capacidad para nuevas entidades.

- **Coordinación de multitudes**  
  *Familia:* `planificación de trabajo`  
  Distribuye objetivos y actualizaciones para impedir que cientos de clones repitan trabajo global.

- **Límite global de clones**  
  *Familia:* `cuadrícula paralela`  
  Para Límite / global / clones, el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación, manteniendo memoria válida durante toda la operación y recuperada al terminar su último uso.


### 📑 Sección: Animación y audio (7 conceptos)

- **Fotogramas y disfraces**  
  *Familia:* `ciclo de vida`  
  Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo.

- **Sincronización por tempo**  
  *Familia:* `planificación de trabajo`  
  Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases.

- **Síntesis de sonidos**  
  *Familia:* `cuadrícula paralela`  
  Combina tono, duración y efectos para producir señales sin depender solo de audios grabados.

- **Transiciones de escena**  
  *Familia:* `ciclo de vida`  
  Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase.

- **Feedback audiovisual**  
  *Familia:* `planificación de trabajo`  
  Responde inmediatamente a acciones con cambios perceptibles sin depender únicamente del color o sonido.

- **Interpolación de disfraces**  
  *Familia:* `cuadrícula paralela`  
  Para Interpolación / disfraces, el runtime despacha handlers, actualiza modelo y compone el siguiente fotograma o respuesta perceptible, manteniendo interfaz sincronizada que comunica cambio, foco y acción disponible.

- **Latencia perceptual del sonido**  
  *Familia:* `ciclo de vida`  
  Latencia / perceptual / sonido coordina la ejecución: el perfil localiza el recurso dominante y la optimización reduce ese costo sin cambiar semántica hasta obtener una mejora medible con distribución, entorno y comparación documentados.


### 📑 Sección: Física para juegos (5 conceptos)

- **Velocidad y aceleración**  
  *Familia:* `planificación de trabajo`  
  Actualiza posición con velocidad y velocidad con fuerza para separar intención de movimiento.

- **Gravedad discreta**  
  *Familia:* `cuadrícula paralela`  
  Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.

- **Rebote y restitución**  
  *Familia:* `ciclo de vida`  
  Invierte la componente normal de velocidad y escala energía según el material. En Rebote y restitución, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Hitboxes**  
  *Familia:* `planificación de trabajo`  
  Representa colisión con formas simples independientes del detalle visual del disfraz.

- **Cámara y desplazamiento**  
  *Familia:* `cuadrícula paralela`  
  Mueve el mundo respecto al jugador y transforma coordenadas globales en posiciones de pantalla.


### 📑 Sección: Extensiones y mundo físico (5 conceptos)

- **Texto a voz**  
  *Familia:* `matriz de señales`  
  Envía frases a un sintetizador y controla idioma, voz y longitud de contenido generado.

- **Detección de video**  
  *Familia:* `topología y tráfico`  
  Extrae movimiento de la cámara como señal interactiva considerando iluminación y consentimiento.

- **micro:bit con Scratch Link**  
  *Familia:* `flujo de interfaz`  
  Conecta bloques a eventos y pines físicos mediante un puente local inalámbrico. En micro:bit con Scratch Link, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Motores y sensores**  
  *Familia:* `matriz de señales`  
  Convierte lecturas ruidosas en umbrales y acciones protegiendo rangos del dispositivo.

- **Servicios de traducción**  
  *Familia:* `topología y tráfico`  
  Transforman texto mediante una extensión remota cuya disponibilidad y resultado deben validarse.


### 📑 Sección: Calidad y publicación (8 conceptos)

- **Pruebas por escenarios**  
  *Familia:* `espectro de verificación`  
  Recorre inicio, victoria, derrota y reinicio comprobando estado visible después de cada acción.

- **Indicadores de estado oculto**  
  *Familia:* `máquina de estados`  
  Muestran temporalmente variables y mensajes para localizar qué guion cambió un valor.

- **Controles accesibles**  
  *Familia:* `mapa de memoria`  
  Ofrecen teclado, puntero y ritmo ajustable sin exigir precisión o una única señal sensorial.

- **Créditos de recursos**  
  *Familia:* `acumulación de recursos`  
  Identifican autores y licencias de sonidos, imágenes y proyectos reutilizados. Créditos de recursos procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Empaquetado para remix**  
  *Familia:* `planificación de trabajo`  
  Nombra sprites, documenta mensajes y limpia estado para que otra persona pueda comprender y extender.

- **Prueba de reinicio limpio**  
  *Familia:* `máquina de estados`  
  Para Prueba / reinicio / limpio, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, manteniendo evidencia reproducible que distingue regresión, ruido y limitación conocida.

- **Presupuesto de clones por escena**  
  *Familia:* `análisis y emisión`  
  Presupuesto / clones / por / escena coordina la ejecución: el runtime o compilador reserva, comparte, mueve y libera almacenamiento respetando aliasing y alineación hasta obtener memoria válida durante toda la operación y recuperada al terminar su último uso.

- **Verificación de atribuciones**  
  *Familia:* `espectro de verificación`  
  Al operar con Verificación / atribuciones, la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo, produciendo evidencia reproducible que distingue regresión, ruido y limitación conocida.




---
[← Volver al Inicio](Home) | [Ver Grupo: Fundamentos](Grupo-Fundamentals) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
