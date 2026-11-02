# UX/UI (UX)

> **Investigación, flujos, accesibilidad, prototipos y validación.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `ux-ui` |
| **Grupo Arquitectonico** | [Diseño e interfaces](Grupo-Interfaces) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `ux-ui` |
| **Total de Conceptos** | **55 conceptos** |
| **Capitulos / Secciones** | **11 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/ux-ui)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/ux-ui-en-accion)


## Estudio de Caso Practico: UX/UI en acción

> **Caso integrado · Reparación accesible:** Un servicio de reparación pierde solicitudes porque su formulario oculta costos, exige precisión técnica y falla con teclado. El equipo investiga, rediseña y valida el recorrido completo.  
> La nueva experiencia permite describir el problema sin jerga, conserva progreso, explica costos y demuestra con evidencia que más personas completan la solicitud.

### Fases de Ejecucion:
1. **Definir el outcome** (Éxito antes que pantallas): `solicitud válida + expectativa clara` -> criterio compartido. *El objetivo combina finalización, comprensión y calidad de la información.*
2. **Observar el contexto** (Hablar y mirar la tarea): `8 entrevistas + 5 sesiones asistidas` -> necesidades reales. *La investigación cambia el problema: identificar el daño importa más que nombrar la pieza.*
3. **Trazar el flujo** (Una decisión por momento): `equipo → síntoma → evidencia → agenda` -> arquitectura comprensible. *Cada bifurcación conserva contexto y una salida segura.*
4. **Prototipar accesible** (Semántica desde el boceto): `label + fieldset + error summary` -> prototipo operable. *El comportamiento accesible se define antes de elegir detalles visuales.*
5. **Detectar el fallo** (Teclado revela una trampa): `Tab → modal → foco detrás` -> causa reproducible. *La prueba muestra una barrera crítica que una revisión visual no detectó.*
6. **Corregir y recuperar** (Foco con principio y retorno): `open → focus heading → close → trigger` -> modal predecible. *La recuperación conserva ubicación, intención y control.*
7. **Validar con personas** (Evidencia comparable): `misma tarea · 6 participantes` -> riesgo reducido. *Los hallazgos se priorizan por severidad y no por preferencia del equipo.*
8. **Entregar y medir** (La intención llega a producción): `tokens + states + analytics plan` -> reparación verificable. *Diseño, implementación y operación comparten los mismos criterios de éxito.*


---

## Catalogo Sistematico de Conceptos (55)

### Seccion: Investigación y definición (5 conceptos)

- **Problema y outcome**  
  *Familia:* `flujo de interfaz`  
  Separa el resultado que importa de la primera solución imaginada.

- **Entrevistas contextuales**  
  *Familia:* `superficie de aplicación`  
  Observa lenguaje, entorno, atajos y restricciones mientras la tarea ocurre.

- **Investigación cuantitativa**  
  *Familia:* `contratos coordinados`  
  Mide frecuencia, abandono y segmentos sin explicar por sí sola el porqué.

- **Personas y jobs to be done**  
  *Familia:* `flujo de interfaz`  
  Sintetiza patrones de necesidad sin inventar usuarios promedio.

- **Hipótesis y riesgos**  
  *Familia:* `superficie de aplicación`  
  Explicita qué debe ser cierto y qué evidencia cambiaría la decisión.


### Seccion: Arquitectura de información (5 conceptos)

- **Modelo mental**  
  *Familia:* `contratos coordinados`  
  Representa cómo una persona agrupa y busca información, no cómo se organiza el equipo.

- **Inventario y jerarquía**  
  *Familia:* `flujo de interfaz`  
  Ordena contenido por propósito, relación, frecuencia y urgencia.

- **Card sorting**  
  *Familia:* `superficie de aplicación`  
  Contrasta agrupaciones y nombres con participantes reales.

- **Navegación y encontrabilidad**  
  *Familia:* `contratos coordinados`  
  Ofrece rutas, orientación y recuperación cuando alguien no conoce el término exacto.

- **Content design**  
  *Familia:* `flujo de interfaz`  
  Escribe etiquetas, instrucciones y errores como parte del comportamiento del producto.


### Seccion: Interacción y flujos (5 conceptos)

- **User flow**  
  *Familia:* `superficie de aplicación`  
  Conecta intención, decisiones, estados y salidas de una tarea completa.

- **Affordance y signifier**  
  *Familia:* `contratos coordinados`  
  Hace perceptible qué puede ocurrir y cómo iniciarlo.

- **Feedback y estado**  
  *Familia:* `flujo de interfaz`  
  Confirma entrada, procesamiento, éxito, espera y fallo sin dejar vacíos ambiguos.

- **Prevención y recuperación**  
  *Familia:* `superficie de aplicación`  
  Evita errores previsibles y conserva una salida cuando sí ocurren.

- **Carga cognitiva**  
  *Familia:* `contratos coordinados`  
  Reduce memoria necesaria, elecciones simultáneas y cambios de contexto.


### Seccion: Sistema visual y componentes (5 conceptos)

- **Jerarquía visual**  
  *Familia:* `flujo de interfaz`  
  Usa tamaño, contraste, espacio y posición para ordenar atención.

- **Tipografía y legibilidad**  
  *Familia:* `superficie de aplicación`  
  Ajusta fuente, medida, ritmo y zoom para lectura sostenida.

- **Color y significado**  
  *Familia:* `contratos coordinados`  
  Conserva contraste y nunca depende únicamente del color para comunicar estado.

- **Tokens de diseño**  
  *Familia:* `flujo de interfaz`  
  Nombra decisiones reutilizables para mantener coherencia y permitir evolución.

- **Componentes y variantes**  
  *Familia:* `superficie de aplicación`  
  Encapsula estructura, estados, contenido permitido y comportamiento accesible.


### Seccion: Accesibilidad e inclusión (5 conceptos)

- **POUR**  
  *Familia:* `contratos coordinados`  
  Evalúa contenido perceptible, operable, comprensible y robusto.

- **Teclado y foco**  
  *Familia:* `flujo de interfaz`  
  Garantiza orden lógico, foco visible y acceso sin puntero.

- **Semántica y nombre accesible**  
  *Familia:* `superficie de aplicación`  
  Expone propósito, rol, estado y relaciones a tecnologías de asistencia.

- **Movimiento y preferencias**  
  *Familia:* `contratos coordinados`  
  Respeta movimiento reducido y evita animación que bloquee o distraiga.

- **Diseño inclusivo**  
  *Familia:* `flujo de interfaz`  
  Considera capacidades permanentes, temporales y situacionales desde el inicio.


### Seccion: Prototipado y validación (5 conceptos)

- **Fidelidad adecuada**  
  *Familia:* `superficie de aplicación`  
  Elige boceto, wireframe o prototipo según la pregunta, no según presentación.

- **Plan de prueba**  
  *Familia:* `contratos coordinados`  
  Define participantes, tareas, métricas y criterios antes de observar.

- **Prueba de usabilidad**  
  *Familia:* `flujo de interfaz`  
  Observa conducta y comprensión sin enseñar el camino esperado.

- **Síntesis y severidad**  
  *Familia:* `superficie de aplicación`  
  Agrupa evidencia por impacto, frecuencia y confianza.

- **Iteración**  
  *Familia:* `contratos coordinados`  
  Cambia la hipótesis mínima y vuelve a medir el flujo completo.


### Seccion: Entrega y operación (5 conceptos)

- **Especificación de estados**  
  *Familia:* `flujo de interfaz`  
  Documenta vacío, carga, éxito, error, permiso y contenido extremo.

- **Handoff colaborativo**  
  *Familia:* `superficie de aplicación`  
  Comparte intención, tokens, comportamiento y criterios verificables con ingeniería.

- **Instrumentación ética**  
  *Familia:* `contratos coordinados`  
  Mide el outcome con minimización de datos y consentimiento adecuado.

- **Experimentos**  
  *Familia:* `flujo de interfaz`  
  Compara variantes sin sacrificar accesibilidad ni interpretar correlación como causa.

- **Design QA**  
  *Familia:* `superficie de aplicación`  
  Contrasta la experiencia construida en dispositivos, zoom, teclado y lectores de pantalla.


### Seccion: Psicología cognitiva y heurísticas (5 conceptos)

- **Ley de Fitts y zonas de toque**  
  *Familia:* `topología y tráfico`  
  Optimiza distancia y tamaño de objetivos para reducir fatiga motriz en interfaces táctiles.

- **Ley de Hick-Hyman**  
  *Familia:* `tejido de eventos`  
  Reduce el número de opciones concurrentes para acelerar la toma de decisiones críticas.

- **Efecto de posición serial**  
  *Familia:* `planificación de trabajo`  
  Prioriza elementos clave al principio y al final de listas y flujos secuenciales.

- **Heurísticas de Nielsen**  
  *Familia:* `evidencia y latencia`  
  Evalúa visibilidad del estado, correspondencia con el mundo real y libertad del usuario.

- **Gestalt y agrupamiento perceptivo**  
  *Familia:* `cuadrícula paralela`  
  Aplica proximidad, semejanza y cierre para estructurar información sin ruido visual.


### Seccion: Diseño para dispositivos móviles y contextos extremos (5 conceptos)

- **Responsive y adaptive design**  
  *Familia:* `flujo de interfaz`  
  Adapta navegación y contenido dinámico desde pantallas miniatura hasta monitores ultrawide.

- **Ergonomía de pulgar (Thumb zone)**  
  *Familia:* `evidencia y latencia`  
  Ubica acciones primarias en arcos accesibles con una sola mano.

- **Modos offline y conectividad degradada**  
  *Familia:* `consulta e índice`  
  Diseña estados transitorios y almacenamiento en caché para redes inestables.

- **Alto contraste y visibilidad bajo el sol**  
  *Familia:* `análisis y emisión`  
  Garantiza legibilidad en entornos exteriores y luminiscencia extrema.

- **Microinteracciones y feedback háptico**  
  *Familia:* `capas internas`  
  Proporciona retroalimentación táctil y sutil que confirma transacciones sin saturar.


### Seccion: Métricas de producto y UX research continuo (5 conceptos)

- **System Usability Scale (SUS)**  
  *Familia:* `evidencia y latencia`  
  Mide percepción estandarizada de usabilidad mediante cuestionarios post-tarea.

- **Time on task y completion rate**  
  *Familia:* `secuencia operativa`  
  Cuantifica eficiencia operativa y porcentaje de tareas resueltas sin asistencia.

- **Eye tracking y mapas de calor**  
  *Familia:* `ida y vuelta`  
  Analiza patrones de escaneo visual en F y Z para ubicar llamadas a la acción.

- **Pruebas de guerrilla y benchmark competitivo**  
  *Familia:* `comparativa técnica`  
  Valida prototipos en ciclos ultracortos frente a alternativas del mercado.

- **A/B testing con rigor estadístico**  
  *Familia:* `espectro de verificación`  
  Contrasta variantes cuantitativas controlando significancia y sesgos de muestra.


### Seccion: Sistemas de diseño escalables y gobernanza (5 conceptos)

- **Taxonomía de componentes atómicos**  
  *Familia:* `constelación de mecanismos`  
  Estructura átomos, moléculas, organismos y plantillas reutilizables.

- **Versionado semántico de tokens**  
  *Familia:* `análisis y emisión`  
  Gestiona cambios breaking en paletas, tipografías y espaciados del sistema.

- **Documentación viva y Storybook**  
  *Familia:* `pasaporte del artefacto`  
  Sincroniza especificaciones de diseño con código de producción ejecutable.

- **Comités de gobernanza y contribución**  
  *Familia:* `flujo de interfaz`  
  Define reglas claras para que equipos de producto propongan nuevos patrones.

- **Auditorías continuas de accesibilidad**  
  *Familia:* `capas internas`  
  Automatiza escaneos axe-core integrados en pipelines de despliegue.



## Referencias Bibliograficas y Documentacion Oficial
- **[GOV.UK Service Manual: User research](https://www.gov.uk/service-manual/user-research)** (`tutorial` | Nivel: `beginner`): 
- **[U.S. Web Design System](https://designsystem.digital.gov/)** (`reference` | Nivel: `intermediate`): 
- **[ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)** (`reference` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Diseño e interfaces](Grupo-Interfaces) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
