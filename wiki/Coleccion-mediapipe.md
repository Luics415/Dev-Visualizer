# 📘 [MP] MediaPipe

> **Tasks, modelos, grafos, visión, audio, texto, tiempo real, edge y operación responsable.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `mediapipe` |
| **Grupo Arquitectónico** | [Plataformas y servidor](Grupo-Platforms) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `mediapipe` |
| **Total de Conceptos** | **120 conceptos** |
| **Capítulos / Secciones** | **24 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/mediapipe)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/mediapipe-en-accion)**


## 🔬 Caso Práctico en Acción: MediaPipe en acción

> **Caso integrado · Entrenador postural local y accesible:** Una aplicación de escritorio usa una cámara, OpenCV como frontera de captura y MediaPipe Pose Landmarker para orientar una rutina sin enviar video fuera del dispositivo. Controla demanda, explica la señal y recupera el tracking después de una oclusión.  
> La aplicación mantiene Python, OpenCV, MediaPipe, modelo y producto como piezas separadas: cada frontera documenta formato, tiempo, ownership y responsabilidad; el resultado nunca se presenta como diagnóstico.

### Fases de Ejecución:
1. **Definir el límite humano** (Orientación, no diagnóstico): `consent + alternatives + stop` → sesión consentida. *La cámara no se abre antes de explicar propósito y alternativas.*
2. **Abrir captura** (Dispositivo como frontera): `VideoCapture → BGR frame` → frames disponibles. *OpenCV captura; MediaPipe todavía no ha recibido nada.*
3. **Cargar Task y modelo** (Configuración reproducible): `BaseOptions(model) + LIVE_STREAM` → inferencia preparada. *Paquete, API y modelo se verifican como dependencias distintas.*
4. **Acotar demanda** (Latest frame): `queue(maxsize=1)` → latencia estable. *Una cola infinita convierte throughput en feedback viejo.*
5. **Cruzar color y memoria** (BGR no es RGB): `BGR → RGB → mp.Image` → imagen tipada. *Formato y ownership se comprueban antes de llamar a la Task.*
6. **Recibir landmarks** (Callback breve): `result_callback(result, image, ts)` → pose estructurada. *El callback entrega evidencia; no toma decisiones de interfaz extensas.*
7. **Transformar coordenadas** (Espacios explícitos): `normalized → unmirror → pixel` → geometría trazable. *La vista espejada no altera el marco usado para calcular.*
8. **Filtrar incertidumbre** (Unknown es un estado): `presence + visibility + age gate` → muestra utilizable. *Falta de evidencia no se convierte en postura incorrecta.*
9. **Calcular movimiento** (Geometría y máquina de estados): `angle → READY/DOWN/HOLD/UP` → repetición verificable. *El contador exige una secuencia completa, no un solo frame.*
10. **Detectar oclusión** (Tracking perdido): `confidence < threshold` → sesión pausada. *No se conserva feedback activo con una muestra incierta.*
11. **Readquirir** (Evidencia continua): `LOST → N stable frames → READY` → tracking recuperado. *La recuperación evita contar una transición fantasma.*
12. **Entregar feedback accesible** (Varios canales): `text + overlay + optional tone` → orientación perceptible. *Cada canal puede apagarse sin perder la tarea.*
13. **Probar sin cámara** (Datos sintéticos): `pytest(points, timestamps, states)` → regresión demostrada. *La lógica de producto no depende de un dispositivo para ser comprobable.*
14. **Reproducir el pipeline** (Landmarks consentidos y minimizados): `recorded landmarks → virtual clock → state machine` → flujo regresionable. *La suite guarda landmarks anonimizados, no rostros ni video; cualquier clip requiere consentimiento separado.*
15. **Proteger la privacidad** (Local y efímero por defecto): `frame → inference → discard` → datos minimizados. *El frame vive solo durante inferencia y render; telemetría, historial y exportación permanecen apagados hasta una elección informada.*
16. **Ofrecer HTTPS opcional** (Control remoto como frontera separada): `TLS 1.3 + authenticated pairing` → canal remoto protegido. *HTTPS protege el tránsito, pero no justifica enviar video: el endpoint comparte únicamente eventos mínimos.*
17. **Cerrar y observar** (Recursos y salud): `stop → drain → task.close → release` → aplicación operable. *El cierre completo prepara la siguiente sesión y conecta el último frame con el inicio del loop.*


---

## 📚 Desglose Exhaustivo de Conceptos (120)

### 📑 Sección: Fronteras y vocabulario inicial (5 conceptos)

- **MediaPipe como plataforma**  
  *Familia:* `matriz de señales`  
  Distingue Tasks, framework, modelos, soluciones y APIs de lenguaje antes de elegir una superficie de trabajo.

- **Task y modelo**  
  *Familia:* `ida y vuelta`  
  Separa la API que orquesta entrada y resultado del artefacto entrenado que contiene parámetros y requisitos propios.

- **Señal, muestra y resultado**  
  *Familia:* `propagación de eventos`  
  Reconoce imagen, frame, bloque de audio o texto como entrada, y categorías, landmarks o máscaras como salidas estructuradas.

- **Inferencia no es decisión de producto**  
  *Familia:* `flujo de transformación`  
  Trata scores y estimaciones como evidencia que la aplicación debe contextualizar, validar y comunicar.

- **Caso de uso y riesgo**  
  *Familia:* `evidencia y latencia`  
  Define usuario, entorno, latencia, precisión, privacidad y alternativa antes de seleccionar una tarea.


### 📑 Sección: Preparar Python y la instalación (5 conceptos)

- **Entorno aislado**  
  *Familia:* `flujo de interfaz`  
  Crea un virtual environment y registra versión de Python, sistema, arquitectura y aceleradores disponibles.

- **Paquete y wheel compatible**  
  *Familia:* `espectro de verificación`  
  Comprueba la versión publicada, los tags de plataforma y que existe un binario para el entorno real.

- **Import y símbolos**  
  *Familia:* `consulta e índice`  
  Verifica mp, Image, ImageFormat, tasks y BaseOptions sin depender de imports internos no documentados.

- **Modelo descargado de forma controlada**  
  *Familia:* `mapa de memoria`  
  Conserva URL de origen, licencia, digest, tamaño y versión en vez de descargar silenciosamente en runtime.

- **Prueba mínima de arranque**  
  *Familia:* `espectro de verificación`  
  Carga y cierra una Task con una muestra pequeña antes de integrar cámara, interfaz o concurrencia.


### 📑 Sección: Pipeline mental de una Task (5 conceptos)

- **Entrada tipada**  
  *Familia:* `matriz de señales`  
  Declara forma, dtype, canales, sample rate, idioma o encoding antes de construir el objeto MediaPipe.

- **Preprocesamiento**  
  *Familia:* `consulta e índice`  
  Ajusta tamaño, color, orientación o características según metadata y documentación del modelo.

- **Inferencia**  
  *Familia:* `flujo de transformación`  
  Ejecuta el modelo mediante el runtime y delegate seleccionados con recursos acotados.

- **Posprocesamiento**  
  *Familia:* `análisis y emisión`  
  Convierte tensores en categorías, detecciones, landmarks, máscaras u objetos específicos de la Task.

- **Resultado y evidencia**  
  *Familia:* `espectro de verificación`  
  Conserva timestamp, configuración, latencia y calidad necesarias para explicar el resultado.


### 📑 Sección: Imágenes y memoria (5 conceptos)

- **mp.Image**  
  *Familia:* `mapa de memoria`  
  Representa datos visuales con formato y buffer explícitos, sin asumir que toda matriz externa es compatible.

- **ImageFormat**  
  *Familia:* `despacho de runtime`  
  Distingue RGB, RGBA, escala de grises y formatos de punto flotante según la API documentada.

- **Ownership del buffer**  
  *Familia:* `validación y decisión`  
  Comprueba copia, vista y vida útil para que un productor no reutilice memoria durante la inferencia.

- **Stride y continuidad**  
  *Familia:* `planificación de trabajo`  
  Valida filas, canales y contigüidad antes de cruzar la frontera entre NumPy, OpenCV y MediaPipe.

- **Orientación y espejo**  
  *Familia:* `mapa de memoria`  
  Decide si rota o refleja para mostrar, inferir o comparar sin perder lateralidad ni coordenadas.


### 📑 Sección: Modos IMAGE, VIDEO y LIVE_STREAM (5 conceptos)

- **IMAGE**  
  *Familia:* `flujo de interfaz`  
  Procesa muestras independientes cuando no existe continuidad temporal entre entradas.

- **VIDEO**  
  *Familia:* `pasaporte del artefacto`  
  Entrega frames ordenados con timestamps y permite que la Task aproveche seguimiento entre muestras.

- **LIVE_STREAM**  
  *Familia:* `workflow y decisiones`  
  Envía trabajo asíncrono y recibe resultados en un callback sin bloquear la captura o interfaz.

- **Elegir por semántica**  
  *Familia:* `comparativa técnica`  
  Selecciona el modo por origen, orden y latencia, no solo por si el archivo termina en imagen o video.

- **Cambiar de modo exige recreación**  
  *Familia:* `evidencia y latencia`  
  Trata running mode como parte de la configuración estable de la instancia.


### 📑 Sección: Tiempo, orden y sincronización (5 conceptos)

- **Timestamp monotónico**  
  *Familia:* `planificación de trabajo`  
  Usa una escala creciente coherente y no un reloj civil que pueda saltar por sincronización o zona horaria.

- **Unidades de tiempo**  
  *Familia:* `cola y consumidor`  
  Confirma milisegundos, microsegundos o samples según la API y evita conversiones implícitas.

- **Frames tardíos**  
  *Familia:* `tejido de eventos`  
  Define qué ocurre si una muestra llega fuera de orden o después del presupuesto útil para feedback.

- **Alineación multimodal**  
  *Familia:* `planificación de trabajo`  
  Relaciona audio, video y eventos mediante un reloj común, tolerancias y política de ausencia.

- **Edad del resultado**  
  *Familia:* `cola y consumidor`  
  Mide captura, cola, inferencia y render para no presentar como actual una estimación antigua.


### 📑 Sección: BaseOptions, modelos y delegates (5 conceptos)

- **Model asset path o buffer**  
  *Familia:* `árbol de recursos`  
  Elige una fuente controlada y evita que el path accidental determine qué modelo se ejecuta.

- **Delegate**  
  *Familia:* `evidencia y latencia`  
  Selecciona CPU, GPU u otra aceleración disponible después de verificar soporte, precisión y costo de transferencia.

- **Metadata del modelo**  
  *Familia:* `consulta e índice`  
  Lee entradas, salidas, labels, normalización y restricciones en vez de inferirlas por el nombre del archivo.

- **Compatibilidad de operaciones**  
  *Familia:* `mapa de memoria`  
  Prueba que todas las operaciones del modelo sean aceptadas por el runtime y delegate objetivo.

- **Warm-up y caché**  
  *Familia:* `memoria intermedia`  
  Separa costo de inicialización de latencia sostenida y decide cuándo conservar una instancia.


### 📑 Sección: Categorías y clasificación (5 conceptos)

- **Category**  
  *Familia:* `consulta e índice`  
  Interpreta índice, score, display name y category name según el label map y locale configurados.

- **Score threshold**  
  *Familia:* `flujo de interfaz`  
  Filtra resultados débiles sin convertir el umbral en probabilidad universal ni garantía.

- **Max results**  
  *Familia:* `evidencia y latencia`  
  Acota salida entendiendo que truncar el ranking no cambia el modelo subyacente.

- **Allowlist y denylist**  
  *Familia:* `consulta e índice`  
  Restringe categorías de forma explícita y evita configurar listas incompatibles.

- **Calibración y abstención**  
  *Familia:* `secuencia operativa`  
  Mide comportamiento por segmento y permite responder desconocido cuando la evidencia no alcanza.


### 📑 Sección: Detección y regiones (5 conceptos)

- **Detection y BoundingBox**  
  *Familia:* `evidencia y latencia`  
  Relaciona categoría, score y rectángulo con el tamaño y origen exactos de la imagen.

- **Coordenadas normalizadas y píxel**  
  *Familia:* `consulta e índice`  
  Convierte con ancho, alto, clamp y redondeo acordado sin intercambiar ejes.

- **Non-maximum suppression**  
  *Familia:* `capas internas`  
  Comprende cómo se eliminan detecciones solapadas y cómo el umbral altera resultados.

- **ROI y rotación**  
  *Familia:* `telar relacional`  
  Recorta una región manteniendo la transformación necesaria para volver a coordenadas globales.

- **Objetos persistentes**  
  *Familia:* `análisis y emisión`  
  Añade tracking e identidad temporal en la aplicación cuando la Task solo devuelve detecciones por frame.


### 📑 Sección: Pose Landmarker (5 conceptos)

- **Landmarks corporales**  
  *Familia:* `mapa de memoria`  
  Interpreta puntos, índices y conexiones como una estimación estructural, no como identidad o diagnóstico.

- **Visibility y presence**  
  *Familia:* `evidencia y latencia`  
  Distingue visibilidad, presencia y ausencia de resultado antes de calcular ángulos.

- **World landmarks**  
  *Familia:* `capas internas`  
  Usa coordenadas 3D aproximadas y su marco documentado sin prometer medición clínica absoluta.

- **Segmentation mask opcional**  
  *Familia:* `flujo de interfaz`  
  Alinea la máscara con imagen, orientación y alpha sin bloquear el loop de render.

- **Seguimiento y reacquisición**  
  *Familia:* `superficie de aplicación`  
  Configura umbrales separados y reinicia estado de la aplicación cuando se pierde continuidad.


### 📑 Sección: Hand Landmarker y Gesture Recognizer (5 conceptos)

- **Landmarks de mano**  
  *Familia:* `mapa de memoria`  
  Relaciona articulaciones y conexiones conservando handedness y orientación de la entrada.

- **Handedness y espejo**  
  *Familia:* `flujo de interfaz`  
  Explica cuándo izquierda y derecha cambian para la vista y cuándo deben permanecer canónicas.

- **Gestos predefinidos**  
  *Familia:* `topología y tráfico`  
  Comprueba labels y scores soportados por el modelo en lugar de inventar categorías.

- **Gestos personalizados**  
  *Familia:* `flujo de transformación`  
  Versiona dataset, modelo, labels y evaluación junto a la aplicación que los consume.

- **Interacción tolerante**  
  *Familia:* `flujo de ejecución`  
  Añade dwell, histéresis, cancelación y alternativa de teclado, voz o control físico.


### 📑 Sección: Face Landmarker (5 conceptos)

- **Malla facial**  
  *Familia:* `evidencia y latencia`  
  Interpreta landmarks como geometría estimada con límites por pose, iluminación, oclusión y cámara.

- **Blendshapes**  
  *Familia:* `secuencia operativa`  
  Trata coeficientes como señales del modelo y evita traducirlos directamente a emociones o estados médicos.

- **Matriz de transformación**  
  *Familia:* `cuadrícula paralela`  
  Aplica la convención y orden correctos al alinear un objeto con el rostro.

- **Múltiples rostros**  
  *Familia:* `matriz de señales`  
  Define identidad temporal, orden, recursos y consentimiento cuando se procesan varias personas.

- **Privacidad biométrica**  
  *Familia:* `evidencia y latencia`  
  Minimiza retención y evita usar la malla como sustituto de consentimiento o autenticación robusta.


### 📑 Sección: Segmentación y composición visual (5 conceptos)

- **Máscara de categoría o confianza**  
  *Familia:* `flujo de transformación`  
  Distingue índices discretos de probabilidades por clase antes de componer píxeles.

- **Alpha y bordes**  
  *Familia:* `jerarquía y dependencias`  
  Suaviza visualmente sin esconder incertidumbre ni contaminar la máscara usada para cálculo.

- **Background replacement**  
  *Familia:* `despacho de runtime`  
  Conserva color, orientación y resolución, y explica fallos alrededor de cabello u objetos finos.

- **Composición de Tasks**  
  *Familia:* `flujo de transformación`  
  Encadena detector, recorte y segmentador solo si las transformaciones y tiempos siguen trazables.

- **Holistic como integración**  
  *Familia:* `jerarquía y dependencias`  
  Sincroniza rostro, cuerpo y manos atendiendo costo, oclusiones y distintas confianzas.


### 📑 Sección: Object, Image y Interactive Segmenter (5 conceptos)

- **Object Detector**  
  *Familia:* `análisis y emisión`  
  Configura categorías, scores y cantidad de resultados para un dominio medido.

- **Image Classifier**  
  *Familia:* `validación y decisión`  
  Distingue clasificación de imagen completa frente a detección con localización.

- **Image Segmenter**  
  *Familia:* `jerarquía y dependencias`  
  Produce máscaras densas y planifica memoria proporcional a resolución y número de clases.

- **Interactive Segmenter**  
  *Familia:* `análisis y emisión`  
  Transforma el punto o región de interés desde la interfaz al espacio del modelo.

- **Tareas encadenadas**  
  *Familia:* `validación y decisión`  
  Evita duplicar resize, color conversion y copias cuando varias Tasks comparten entrada.


### 📑 Sección: Audio Tasks (5 conceptos)

- **AudioData y formato**  
  *Familia:* `jerarquía y dependencias`  
  Declara sample rate, canales, dtype y longitud antes de entregar muestras.

- **AudioClassifier**  
  *Familia:* `análisis y emisión`  
  Interpreta ventanas y categorías a lo largo del tiempo sin contar el mismo evento repetidamente.

- **Clips y stream**  
  *Familia:* `cola y consumidor`  
  Distingue inferencia sobre un bloque completo de procesamiento continuo con timestamps.

- **Resampling y canales**  
  *Familia:* `tejido de eventos`  
  Convierte de forma medida cuando la entrada real no coincide con el modelo.

- **Privacidad acústica**  
  *Familia:* `planificación de trabajo`  
  Procesa localmente cuando sea posible y no conserva voz o ambiente sin una finalidad consentida.


### 📑 Sección: Text Tasks (5 conceptos)

- **TextClassifier**  
  *Familia:* `tejido literario`  
  Convierte texto en categorías entendiendo idioma, longitud y dominio del modelo.

- **Language Detector**  
  *Familia:* `pasaporte del artefacto`  
  Entrega candidatos y scores, no una verdad infalible para textos cortos o mezclados.

- **Text Embedder**  
  *Familia:* `configuración declarativa`  
  Produce vectores dependientes de versión, tokenización y normalización.

- **Cosine similarity**  
  *Familia:* `flujo de transformación`  
  Compara embeddings compatibles y define umbral mediante evaluación del caso real.

- **Unicode y minimización**  
  *Familia:* `consulta e índice`  
  Normaliza solo cuando corresponde y evita registrar texto sensible como telemetría de depuración.


### 📑 Sección: GenAI Tasks y modelos generativos (5 conceptos)

- **Superficie GenAI**  
  *Familia:* `ida y vuelta`  
  Identifica APIs disponibles y su estado antes de diseñar una función de producto alrededor de ellas.

- **Modelo y tokenizer**  
  *Familia:* `mapa de memoria`  
  Versiona ambos artefactos y comprueba límites de contexto, memoria y arquitectura.

- **Decoding**  
  *Familia:* `planificación de trabajo`  
  Configura temperatura, top-k u otras opciones sabiendo que modifican variación, no veracidad.

- **Herramientas y salida**  
  *Familia:* `pasaporte del artefacto`  
  Restringe capacidades, valida estructuras y exige confirmación para efectos externos.

- **Seguridad y evaluación**  
  *Familia:* `flujo de transformación`  
  Prueba prompt injection, datos sensibles, toxicidad, factualidad, latencia y consumo en el dispositivo objetivo.


### 📑 Sección: Framework, grafos y packets (5 conceptos)

- **GraphConfig**  
  *Familia:* `configuración declarativa`  
  Representa calculators conectados por streams y side packets con tipos y nombres coherentes.

- **Packet**  
  *Familia:* `capas internas`  
  Transporta un valor junto con tiempo, diferenciándolo de un contenedor sin semántica temporal.

- **Calculator**  
  *Familia:* `diagnóstico operativo`  
  Consume entradas, produce salidas y conserva únicamente el estado declarado por su contrato.

- **Streams y side packets**  
  *Familia:* `cola y consumidor`  
  Separa datos que cambian por timestamp de configuración estable para una ejecución.

- **Scheduler y sincronización**  
  *Familia:* `planificación de trabajo`  
  Comprende cómo disponibilidad y timestamps habilitan un nodo sin asumir un orden puramente visual.


### 📑 Sección: Callbacks, colas y backpressure (5 conceptos)

- **Callback breve**  
  *Familia:* `propagación de eventos`  
  Copia o encola el resultado necesario y devuelve control sin hacer trabajo pesado dentro del callback.

- **Latest-frame policy**  
  *Familia:* `espectro de verificación`  
  Descarta trabajo antiguo cuando el feedback reciente vale más que procesar cada frame.

- **Cola acotada**  
  *Familia:* `comparativa técnica`  
  Hace visible capacidad, profundidad, drops y edad para evitar latencia creciente.

- **Thread de interfaz**  
  *Familia:* `planificación de trabajo`  
  Entrega estado al UI loop mediante el mecanismo seguro del toolkit.

- **Cancelación y cierre**  
  *Familia:* `secuencia operativa`  
  Detiene ingesta, espera callbacks conocidos y cierra Task, cámara y workers en orden.


### 📑 Sección: Coordenadas y geometría (5 conceptos)

- **Espacios de coordenadas**  
  *Familia:* `consulta e índice`  
  Nombra imagen original, recorte, modelo, normalizado, píxel, vista y mundo antes de transformarlos.

- **Matrices y round-trip**  
  *Familia:* `matriz de señales`  
  Conserva una transformación invertible y prueba que ida y vuelta regresen al punto esperado.

- **Ángulos robustos**  
  *Familia:* `telar relacional`  
  Usa vectores, normas mínimas y atan2 para evitar valores inventados ante puntos degenerados.

- **Suavizado temporal**  
  *Familia:* `evidencia y latencia`  
  Filtra jitter con una ventana o modelo cuyo retraso sea visible y compatible con el caso.

- **Calibración**  
  *Familia:* `análisis y emisión`  
  No infiere distancia física o precisión métrica sin cámara, escala y protocolo de validación adecuados.


### 📑 Sección: Rendimiento y aceleración (5 conceptos)

- **Presupuesto extremo a extremo**  
  *Familia:* `secuencia operativa`  
  Mide captura, conversión, cola, inferencia, posprocesamiento y render por separado.

- **FPS frente a latencia**  
  *Familia:* `evidencia y latencia`  
  No confunde throughput promedio con la edad de cada resultado entregado a la persona.

- **Resolución y calidad**  
  *Familia:* `espectro de verificación`  
  Reduce tamaño o frecuencia midiendo el impacto en precisión, no solo en velocidad.

- **CPU, GPU y transferencia**  
  *Familia:* `planificación de trabajo`  
  Incluye copies, warm-up, memoria y energía al comparar delegates.

- **Thermal throttling**  
  *Familia:* `validación y decisión`  
  Prueba sesiones prolongadas en el dispositivo y adapta carga antes de perder estabilidad.


### 📑 Sección: Pruebas y diagnóstico (5 conceptos)

- **Muestras doradas**  
  *Familia:* `espectro de verificación`  
  Conserva entradas consentidas o sintéticas con resultados esperados y tolerancias por versión.

- **Landmarks sintéticos**  
  *Familia:* `mapa de memoria`  
  Prueba geometría, estado y accesibilidad sin necesitar cámara ni ejecutar el modelo.

- **Reloj virtual**  
  *Familia:* `validación y decisión`  
  Simula timestamps, retrasos, drops y callbacks fuera de orden de forma determinista.

- **Comparación entre versiones**  
  *Familia:* `comparativa técnica`  
  Mide cambios de score, latencia, memoria y categorías antes de actualizar paquete o modelo.

- **Trazas sin contenido sensible**  
  *Familia:* `espectro de verificación`  
  Registra configuración, tiempos, tamaños y causas, no frames, voz o texto bruto por defecto.


### 📑 Sección: Privacidad, accesibilidad y uso responsable (5 conceptos)

- **Procesamiento local por defecto**  
  *Familia:* `planificación de trabajo`  
  Mantiene señales en el dispositivo cuando el objetivo puede cumplirse sin upload.

- **Consentimiento y control**  
  *Familia:* `capas internas`  
  Explica finalidad, indicador activo, retención, exportación y cómo revocar permisos.

- **Incertidumbre perceptible**  
  *Familia:* `flujo de interfaz`  
  Comunica baja confianza, pérdida de seguimiento y estado desconocido sin culpar a la persona.

- **Alternativas de interacción**  
  *Familia:* `matriz de señales`  
  No hace de cámara, gesto, color, audio o movimiento el único camino para completar una tarea.

- **Sesgos y límites**  
  *Familia:* `espectro de verificación`  
  Evalúa por iluminación, tono de piel, cuerpo, voz, idioma, dispositivo y contexto, y documenta dónde no funciona.


### 📑 Sección: Producción, operación y mantenimiento (5 conceptos)

- **Artefacto completo**  
  *Familia:* `pasaporte del artefacto`  
  Versiona aplicación, runtime, paquete MediaPipe, modelo, labels, configuración y digest.

- **Rollout y fallback**  
  *Familia:* `ciclo de vida`  
  Despliega gradualmente y conserva una ruta sin aceleración o una función degradada segura.

- **Métricas operativas**  
  *Familia:* `evidencia y latencia`  
  Observa disponibilidad, p50/p95, drops, pérdida de tracking, memoria, energía y errores por dispositivo.

- **Actualización y rollback**  
  *Familia:* `pasaporte del artefacto`  
  Compara corpus antes de cambiar modelo o API y conserva el artefacto anterior recuperable.

- **Runbook de dispositivo**  
  *Familia:* `mapa de memoria`  
  Documenta permisos, cámara ocupada, modelo corrupto, falta de memoria, cierre y soporte al usuario.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[MediaPipe Solutions guide](https://developers.google.com/edge/mediapipe/solutions/guide)** (`tutorial` | Nivel: `beginner`): 
- **[Object detection guide for Python](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/python)** (`tutorial` | Nivel: `intermediate`): 
- **[MediaPipe Framework concepts](https://developers.google.com/edge/mediapipe/framework/framework_concepts/overview)** (`reference` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Plataformas y servidor](Grupo-Platforms) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
