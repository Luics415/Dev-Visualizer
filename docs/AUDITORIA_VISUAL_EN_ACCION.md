# Auditoría Audiovisual Integral de Rutas `*-en-accion`

## 1. Alcance y Propósito

Este documento establece la auditoría técnica y pedagógica de los **73 apartados `*-en-accion`** de Dev Visualizer (por ejemplo `/fundamentos-programacion-en-accion/`, `/javascript-en-accion/`, `/aws-en-accion/`, etc.).

La experiencia didáctica de cada ruta *En Acción* se concibe como un **sistema audiovisual integrado e indivisible**:
1. **Dimensión Visual (Animación Reactiva):** Simula en tiempo real la ejecución, transformaciones de estado, bifurcaciones de control, contratos de red y distribución de memoria a 60 FPS mediante Motion y SVG vectorial.
2. **Dimensión Auditiva (Lecturas Didácticas por Voz):** Acompaña cada etapa con locuciones especializadas en español, diseñadas para desglosar el modelo mental, la invariante técnica del problema, el fallo operativo simulado y el mecanismo de recuperación verificable.

Esta auditoría diagnostica el estado actual del código, evalúa la cobertura total (73/73 colecciones), detalla el subsistema de síntesis auditiva recientemente incorporado y formula propuestas de evolución para maximizar la sinergia audiovisual.

---

## 2. Cobertura Auditada por Familias de Dominio (73/73)

Todas las rutas canónicas corresponden a endpoints estáticos generados en `src/app/[slug]/page.tsx` y rutas especializadas de `src/app/*-en-accion/page.tsx`:

| Familia de Dominio | Total | Rutas Auditadas (`/{slug}/`) |
| :--- | :---: | :--- |
| **Fundamentos y Pensamiento Computacional** | 5 | `/fundamentos-programacion-en-accion`, `/algoritmos-en-accion`, `/matematicas-programacion-en-accion`, `/metodologias-desarrollo-en-accion`, `/scratch-en-accion` |
| **Lenguajes Compilados, Tipados y de Sistemas** | 12 | `/c-en-accion`, `/cpp-en-accion`, `/rust-en-accion`, `/go-en-accion`, `/c-sharp-en-accion`, `/ensamblador-en-accion`, `/embedded-c-en-accion`, `/c-star-en-accion`, `/cweb-en-accion`, `/objective-c-en-accion`, `/visual-basic-en-accion`, `/dart-en-accion` |
| **Lenguajes Dinámicos, Funcionales y VM** | 15 | `/javascript-en-accion`, `/typescript-en-accion`, `/python-en-accion`, `/ruby-en-accion`, `/php-en-accion`, `/java-en-accion`, `/kotlin-en-accion`, `/scala-en-accion`, `/haskell-en-accion`, `/erlang-en-accion`, `/lisp-en-accion`, `/perl-en-accion`, `/raku-en-accion`, `/prolog-en-accion`, `/r-en-accion` |
| **Diseño, Interfaces y Experiencia Web/Móvil** | 9 | `/ux-ui-en-accion`, `/html-css-en-accion`, `/bootstrap-en-accion`, `/react-en-accion`, `/react-native-en-accion`, `/angularjs-en-accion`, `/angular-en-accion`, `/qwik-en-accion`, `/flutter-en-accion` |
| **Plataformas, Backend, IA y Cloud Services** | 10 | `/backend-en-accion`, `/apis-en-accion`, `/nodejs-en-accion`, `/laravel-en-accion`, `/django-en-accion`, `/dotnet-en-accion`, `/firebase-en-accion`, `/android-en-accion`, `/mediapipe-en-accion`, `/inteligencia-artificial-en-accion` |
| **Datos, Esquemas, Persistencia y Validación** | 10 | `/bases-datos-en-accion`, `/sql-en-accion`, `/sql-server-en-accion`, `/nosql-en-accion`, `/gestion-estado-en-accion`, `/json-en-accion`, `/xml-en-accion`, `/xsd-en-accion`, `/blockchain-en-accion`, `/n8n-en-accion` |
| **Infraestructura, DevOps, Versionado y Entrega** | 12 | `/linux-en-accion`, `/sistemas-operativos-en-accion`, `/docker-en-accion`, `/nginx-en-accion`, `/aws-en-accion`, `/ci-cd-en-accion`, `/deployment-en-accion`, `/git-en-accion`, `/github-en-accion`, `/debugging-en-accion`, `/subversion-en-accion`, `/latex-en-accion` |

---

## 3. Auditoría del Subsistema de Lecturas Auditivas Didácticas

El motor de lectura auditiva incorporado recientemente (`src/lib/audioNarrator.ts`, `src/lib/audioTrackHelper.ts`, `src/components/audio/FloatingAudioBubble.tsx`, `src/components/audio/ConceptAudioTrigger.tsx`) eleva la accesibilidad a un estándar multimodal de alto impacto.

### 3.1 Arquitectura del Motor de Voz
1. **Gestión de Sesión y SpeechSynthesis:**  
   Implementado como un gestor singleton (`AudioNarrator`) que resuelve la inestabilidad de la Web Speech API en navegadores Chromium y Android (donde las locuciones de más de 15 segundos son abortadas automáticamente por el recolector de basura).
2. **Segmentación Oracional Inteligente (Sentence Chunking):**  
   Los textos extensos se fragmentan en oraciones delimitadas por signos de puntuación, garantizando reproducción continua, actualización precisa de la barra de progreso y auto-scrolling sincronizado línea a línea.
3. **Selector Regional de Voces en Español:**  
   Catálogo inteligente con persistencia en `localStorage` (`dev-visualizer-voice-preference`) que prioriza voces naturales según acento:
   - México (`es-MX`)
   - España (`es-ES`)
   - Colombia (`es-CO`)
   - Argentina (`es-AR`)
   - Estados Unidos / Neutral (`es-US`, `es-419`)

### 3.2 Cobertura de Pistas Auditivas en Rutas *En Acción*
Cada una de las 73 páginas *En Acción* dispone de una estructura auditiva de dos niveles:
- **Nivel 1: Pista de Presentación Global (`getActionPresentationTrack`):**  
  Contextualiza el caso práctico completo (narración de 60–90 segundos). Describe el objetivo arquitectónico, desglosa secuencialmente cada una de las fases del flujo interactivo y sintetiza la lección de ingeniería.
  *Cobertura:* **73/73 colecciones** cuentan con locución personalizada exhaustiva escrita en `src/lib/audioTrackHelper.ts`.
- **Nivel 2: Pistas Modulares por Etapa (`buildPracticalModuleAudioTrack`):**  
  Locuciones atómicas integradas en cada una de las tarjetas del componente `PracticalDeepDive` (entre 5 y 8 etapas por caso). Explican formalmente:
  1. *Lo que percibe el usuario* (capa superficial / UI).
  2. *Lo que sucede internamente* (procesos de bajo nivel, hilos, memoria, red).
  3. *Invariante técnica irrompible* (garantía de seguridad, corrección o rendimiento).
  4. *Resultado visual verificable*.

### 3.3 Componentes de Interfaz Auditiva
- **`FloatingAudioBubble`:**  
  Widget flotante no invasivo anclado en la esquina inferior. Provee controles de reproducción (`play`, `pause`, `stop`, `seek`), selector de velocidad, selector de acentos y un visor de lectura con scroll sincronizado bidireccional.
- **`ConceptAudioTrigger`:**  
  Botón de audio compacto ubicado en la cabecera de cada módulo práctico con feedback táctil y aria-labels accesibles.

---

## 4. Diagnóstico del Estado Técnico Actual de las Animaciones Visuales

### 4.1 Problemas Preexistentes y Correcciones Aplicadas
1. **Desincronización de Bucles y Congelamiento en Scroll (Resuelto):**  
   Se ajustó el `IntersectionObserver` en `src/components/visual/useScenePlayback.ts` con un margen holgado `rootMargin: '80px 0px'` y umbral `0` para asegurar que las animaciones continúen reproduciéndose fluidamente mientras están en el campo de visión.
2. **Uso Indebido de `delay` con `repeat: Infinity` (Resuelto):**  
   Motion suspende o descoordina bucles infinitos cuando se combinan con propiedades `delay`. Se migraron todos los desfases temporales a proporciones normalizadas dentro de arrays de `times` (ciclos armónicos cerrados).
3. **Paridad de Arrays de Keyframes (Resuelto):**  
   Se corrigió la disparidad entre la longitud de valores en `keyframes` y `times` en escenas como `CiCdArtifactPassportScene`, `IntegratedCaseScene` y `DebuggingPracticalScene`, evitando advertencias en consola y renderizados discontinuos.
4. **Transformación Paradigmática de Escenas:**  
   La escena `/fundamentos-programacion-en-accion` fue elevada de un diagrama estático a un visualizador dual de alta fidelidad:
   - Diagrama de flujo interactivo con token de ejecución luminoso (`fcParticleSpark`) recorriendo bifurcaciones `SÍ`/`NO`.
   - Stepper de código en vivo (*Program Counter*) en sincronía con la CPU.
   - Monitor reactivo de memoria RAM con direcciones hexadecimales (`0x10A`–`0x10D`).
   - Badges de pilares fundamentales (`SECUENCIA`, `SELECCIÓN`, `ITERACIÓN`).

---

## 5. Propuestas de Mejora y Sincronización Audiovisual por Familia

### Familia 1: Flujo de Runtime, Concurrencia y Máquina Virtual
- **Colecciones:** JavaScript, TypeScript, Python, Ruby, Rust, PHP, Haskell, Go, Kotlin, Java, R, Erlang, Lisp, Perl, Raku, Scala, Node.js, .NET, Dart, Prolog.
- **Mejora Visual Propuesta:**  
  Incorporar un canal visual de contrapresión (*backpressure*) y reintentos automáticos en fallos transitorios. Añadir un latido de reloj discreto (*tick rate*) que marque la frontera entre microtareas y macrotareas en el Event Loop.
- **Sincronización Auditiva:**  
  Alinear la mención de "bloqueo", "suspensión en await" o "cambio de contexto" con el momento exacto en que la partícula visual se detiene en la cola de tareas.

### Familia 2: Memoria, Hardware y Bajo Nivel
- **Colecciones:** C, C++, Ensamblador, Embedded C, Objective-C, C*, CWEB, Linux, Sistemas Operativos, Docker.
- **Mejora Visual Propuesta:**  
  Incorporar un mapa de memoria interactivo continuo dividido en Stack, Heap, Registros y Espacio de Kernel. Diferenciar excepciones de hardware (*page faults*, desbordamiento de pila) mediante patrones geométricos e iluminación localizada en lugar de cambios bruscos de color.
- **Sincronización Auditiva:**  
  La locución que describe la lectura o liberación de punteros (`free`, `malloc`, `RAII`) debe disparar un resplandor en la celda de memoria correspondiente.

### Familia 3: UI, Render y Experiencia de Usuario
- **Colecciones:** UX/UI, HTML/CSS, Bootstrap, AngularJS, React, React Native, Qwik, Angular, Flutter, Android.
- **Mejora Visual Propuesta:**  
  Exponer visualmente el pipeline completo `Input de Usuario → Actualización de Estado → Cálculo de Geometría / Layout → Pintado en Capas GPU`. Visualizar anillos de foco accesibles y navegación por teclado en la escena.
- **Sincronización Auditiva:**  
  Sincronizar las explicaciones de re-renderizado optimizado y reconciliación de componentes con la propagación visual del pulso reactivo en el árbol DOM/Widget.

### Familia 4: Contratos, APIs y Backend Transaccional
- **Colecciones:** APIs, Backend, Laravel, n8n, Django, Firebase, MediaPipe, Inteligencia Artificial.
- **Mejora Visual Propuesta:**  
  Desplegar un "Pasaporte de Contrato" permanente que valide cabeceras, tokens JWT, esquemas JSON y códigos HTTP 2xx/4xx/5xx con bifurcación gráfica explícita entre el camino exitoso y la ruta de compensación transaccional (*saga rollback*).
- **Sincronización Auditiva:**  
  Emitir señales audibles sutiles o destacar en el visor de lectura la regla de idempotencia o el invariante de autenticación al ocurrir la verificación del token.

### Familia 5: Datos, Persistencia y Validación Estructural
- **Colecciones:** XML, XSD, JSON, Gestión de Estado, Bases de Datos, SQL Server, SQL, NoSQL, Blockchain.
- **Mejora Visual Propuesta:**  
  Añadir indicadores de latencia relativa (I/O de disco vs memoria caché) y badges de integridad ACID/BASE. Representar transformaciones antes/después (*diff visual*) al validar contra esquemas XSD o JSON Schema.
- **Sincronización Auditiva:**  
  Explicar por qué una consulta sin índice degrada la lectura a un barrido completo de tabla (*table scan*) al tiempo que la escena visualiza la saturación de I/O.

### Familia 6: Versionado, Colaboración y Diagnóstico
- **Colecciones:** Git, GitHub, Debugging, Subversion, Metodologías de Desarrollo.
- **Mejora Visual Propuesta:**  
  Animar grafos acíclicos dirigidos (DAG) con operaciones de merge en tres vías, resolución interactiva de conflictos, bisectado de commits y líneas de tiempo de incidentes.
- **Sincronización Auditiva:**  
  Vincular la explicación de hipótesis y evidencia empírica con la aparición de breakpoints y trazas en la escena de debugging.

### Familia 7: Infraestructura, Resiliencia y Operaciones Cloud
- **Colecciones:** AWS, CI/CD, Deployment, NGINX, LaTeX.
- **Mejora Visual Propuesta:**  
  Mostrar puertas de enlace (*canary deployment*, *blue/green*), balanceo de carga round-robin con verificación de salud (*health checks*) y conmutación por error multi-zona activa-activa.
- **Sincronización Auditiva:**  
  Narrar la absorción de picos de tráfico y el aislamiento de pods defectuosos sincronizado con el desvío dinámico de tráfico en el proxy.

### Familia 8: Fundamentos Algorítmicos y Modelos Mentales
- **Colecciones:** Fundamentos de Programación, Algoritmos, Matemáticas, Scratch.
- **Mejora Visual Propuesta:**  
  Extender el modelo de tres paneles implementado en *Fundamentos* (flujograma + código en vivo + memoria) hacia Algoritmos y Matemáticas, integrando comparadores visuales de complejidad asintótica $O(1)$, $O(n \log n)$ y $O(n^2)$.
- **Sincronización Auditiva:**  
  Subrayar las invariantes de ciclo y las pre/postcondiciones formales en el instante preciso de la mutación de índices en pantalla.

---

## 6. Accesibilidad Multimodal y Respeto a Preferencias

1. **`prefers-reduced-motion`:**  
   Cuando el usuario activa reducción de movimiento en su sistema operativo, las animaciones continuas de desplazamiento y pulsos de neón se conmutan a transiciones de opacidad directas o estados estáticos comentados, **sin apagar ni perjudicar la narración auditiva**.
2. **Navegación Asistida:**  
   Tanto las tarjetas visuales como los controles de audio implementan atributos ARIA completos (`aria-live="polite"`, `aria-expanded`, `aria-label` descriptivos), asegurando interoperabilidad con lectores de pantalla (NVDA, VoiceOver, TalkBack).
3. **Consumo Eficiente de Recursos:**  
   Todas las transformaciones visuales utilizan exclusivamente `transform` y `opacity` aprovechando la composición en GPU, garantizando tasa estable de refresco a 60 FPS tanto en equipos de escritorio como en dispositivos móviles.

---

## 7. Matriz de Priorización de Implementación

| Fase | Ámbito | Tareas Clave | Impacto |
| :---: | :--- | :--- | :---: |
| **Fase 1** | **Sincronización Audio-Visual** | Incorporar eventos de cambio de etapa que destaquen simultáneamente el paso de lectura en el `FloatingAudioBubble` y el nodo activo de la escena animada. | **Crítico** |
| **Fase 2** | **Extensión del Modelo Tripartito** | Replicar el sistema de flujograma interactivo, stepper de código e inspector de memoria de *Fundamentos* en *Algoritmos* y *Estructuras de Datos*. | **Alto** |
| **Fase 3** | **Telemetría y Contrapresión** | Incorporar visualización de backpressure y métricas de latencia en las familias de Backend, Redes y Cloud (AWS, NGINX, Node.js). | **Medio** |
| **Fase 4** | **Mapas de Memoria de Bajo Nivel** | Desarrollar el componente unificado de inspección de Stack/Heap para C, C++, Rust y Ensamblador. | **Medio** |

---

## 8. Conclusión

La auditoría confirma que las **73 rutas `*-en-accion`** poseen cobertura completa tanto en código ejecutable de animación como en guiones y pistas de lectura auditiva por voz. La inclusión de `FloatingAudioBubble` y las locuciones por etapa cierra la brecha entre la observación pasiva y la comprensión técnica profunda, convirtiendo a Dev Visualizer en una plataforma educativa pionera con accesibilidad auditiva y visual de clase mundial.
