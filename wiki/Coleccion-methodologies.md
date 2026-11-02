# Metodologías de desarrollo (Flow)

> **Descubrimiento, entrega iterativa, Scrum, Kanban, XP, evidencia y mejora continua.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `methodologies` |
| **Grupo Arquitectonico** | [Fundamentos](Grupo-Fundamentals) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `ux-ui` |
| **Total de Conceptos** | **88 conceptos** |
| **Capitulos / Secciones** | **15 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/metodologias-desarrollo)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/metodologias-desarrollo-en-accion)


## Estudio de Caso Practico: Recuperar un flujo de entrega bloqueado

> **Caso integrado de Metodologías de desarrollo:** Un equipo convierte una solicitud urgente en incremento, detecta saturación de trabajo, recupera capacidad y valida el cambio con usuarios.  
> La retrospectiva deja una política observable y una métrica vinculada al objetivo, no a vigilar personas.

### Fases de Ejecucion:
1. **Alinear el objetivo** (Recuperar un flujo de entrega bloqueado: etapa 1 de 5): `objetivo = reducir_abandono(reparación)` -> Objetivo compartido. *La etapa conserva un contrato explícito para que el siguiente paso de Metodologías de desarrollo no dependa de supuestos ocultos.*
2. **Dividir el incremento** (Recuperar un flujo de entrega bloqueado: etapa 2 de 5): `items = cortar_verticalmente(objetivo)` -> Trabajo listo para fluir. *La etapa conserva un contrato explícito para que el siguiente paso de Metodologías de desarrollo no dependa de supuestos ocultos.*
3. **Detectar saturación** (Recuperar un flujo de entrega bloqueado: etapa 3 de 5): `WIP = 11; limite = 4` -> Inicio de trabajo detenido. *El caso hace visible el fallo de Metodologías de desarrollo; no continúa como si la evidencia fuera válida.*
4. **Desbloquear y terminar** (Recuperar un flujo de entrega bloqueado: etapa 4 de 5): `swarm(bloqueo)
WIP <= limite` -> Flujo recuperado. *La recuperación de Metodologías de desarrollo corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.*
5. **Revisar y aprender** (Recuperar un flujo de entrega bloqueado: etapa 5 de 5): `medir(resultado, cycle_time)` -> Política mejorada. *La etapa conserva un contrato explícito para que el siguiente paso de Metodologías de desarrollo no dependa de supuestos ocultos.*


---

## Catalogo Sistematico de Conceptos (88)

### Seccion: Principios y contexto (5 conceptos)

- **Valores ágiles**  
  *Familia:* `contratos coordinados`  
  La función de Valores ágiles parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Entrega incremental**  
  *Familia:* `workflow y decisiones`  
  Entrega incremental estructura fuentes versionadas, dependencias fijadas y configuración declarativa en el sistema: resuelve, construye y empaqueta el artefacto de forma repetible, garantizando una unidad identificable que puede verificarse antes de promoverse.

- **Feedback temprano**  
  *Familia:* `secuencia operativa`  
  El recorrido de Feedback temprano toma un ejemplo mínimo, sus precondiciones y el estado inicial. Posteriormente aplica el mecanismo paso a paso haciendo visibles sus invariantes para validar un efecto observable que puede explicarse y repetir otra persona.

- **Riesgo y aprendizaje**  
  *Familia:* `contratos coordinados`  
  Riesgo y aprendizaje procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Elegir un marco**  
  *Familia:* `workflow y decisiones`  
  Para entender Elegir un marco, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Sistema de trabajo (5 conceptos)

- **Backlog y objetivos**  
  *Familia:* `cola y consumidor`  
  El mecanismo de Backlog y objetivos recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Historias y criterios**  
  *Familia:* `máquina de estados`  
  Historias y criterios conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Límites de trabajo en curso**  
  *Familia:* `evidencia y latencia`  
  En Límites de trabajo en curso, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.

- **Definición de terminado**  
  *Familia:* `cola y consumidor`  
  La función de Definición de terminado parte de un ejemplo mínimo, sus precondiciones y el estado inicial. Su ejecución aplica el mecanismo paso a paso haciendo visibles sus invariantes y produce un efecto observable que puede explicarse y repetir otra persona.

- **Roles y responsabilidades**  
  *Familia:* `máquina de estados`  
  Roles y responsabilidades estructura un ejemplo mínimo, sus precondiciones y el estado inicial en el sistema: aplica el mecanismo paso a paso haciendo visibles sus invariantes, garantizando un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Cadencias y colaboración (5 conceptos)

- **Planificación**  
  *Familia:* `ecosistema coordinado`  
  Planificación procesa un ejemplo mínimo, sus precondiciones y el estado inicial: aplica el mecanismo paso a paso haciendo visibles sus invariantes para entregar un efecto observable que puede explicarse y repetir otra persona.

- **Daily y coordinación**  
  *Familia:* `propagación de eventos`  
  Para entender Daily y coordinación, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Review con evidencia**  
  *Familia:* `flujo de interfaz`  
  El mecanismo de Review con evidencia recibe un ejemplo mínimo, sus precondiciones y el estado inicial y aplica el mecanismo paso a paso haciendo visibles sus invariantes, asegurando un efecto observable que puede explicarse y repetir otra persona.

- **Retrospectiva**  
  *Familia:* `ecosistema coordinado`  
  Retrospectiva conecta un ejemplo mínimo, sus precondiciones y el estado inicial con su runtime interno: aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta exponer un efecto observable que puede explicarse y repetir otra persona.

- **Refinamiento continuo**  
  *Familia:* `propagación de eventos`  
  En Refinamiento continuo, un ejemplo mínimo, sus precondiciones y el estado inicial ingresa al flujo donde aplica el mecanismo paso a paso haciendo visibles sus invariantes para consolidar un efecto observable que puede explicarse y repetir otra persona.


### Seccion: Diagnóstico del flujo (5 conceptos)

- **Lead time y cycle time**  
  *Familia:* `evidencia y latencia`  
  La función de Lead time y cycle time parte de un comportamiento esperado, una entrada mínima y un síntoma observable. Su ejecución aísla variables y contrasta hipótesis con instrumentación repetible y produce una causa demostrada y una regresión protegida.

- **Bloqueos y colas**  
  *Familia:* `pasaporte del artefacto`  
  Bloqueos y colas estructura un comportamiento esperado, una entrada mínima y un síntoma observable en el sistema: aísla variables y contrasta hipótesis con instrumentación repetible, garantizando una causa demostrada y una regresión protegida.

- **Throughput**  
  *Familia:* `secuencia operativa`  
  El recorrido de Throughput toma un comportamiento esperado, una entrada mínima y un síntoma observable. Posteriormente aísla variables y contrasta hipótesis con instrumentación repetible para validar una causa demostrada y una regresión protegida.

- **Diagramas de flujo acumulado**  
  *Familia:* `jerarquía y dependencias`  
  Diagramas de flujo acumulado procesa un comportamiento esperado, una entrada mínima y un síntoma observable: aísla variables y contrasta hipótesis con instrumentación repetible para entregar una causa demostrada y una regresión protegida.

- **Antipatrones de métricas**  
  *Familia:* `evidencia y latencia`  
  Para entender Antipatrones de métricas, se delimita un comportamiento esperado, una entrada mínima y un síntoma observable. La operación aísla variables y contrasta hipótesis con instrumentación repetible hasta producir una causa demostrada y una regresión protegida.


### Seccion: Gobierno y mejora (5 conceptos)

- **Políticas explícitas**  
  *Familia:* `validación y decisión`  
  Para entender Políticas explícitas, se delimita un ejemplo mínimo, sus precondiciones y el estado inicial. La operación aplica el mecanismo paso a paso haciendo visibles sus invariantes hasta producir un efecto observable que puede explicarse y repetir otra persona.

- **Calidad incorporada**  
  *Familia:* `espectro de verificación`  
  El mecanismo de Calidad incorporada recibe un comportamiento esperado, una entrada mínima y un síntoma observable y aísla variables y contrasta hipótesis con instrumentación repetible, asegurando una causa demostrada y una regresión protegida.

- **Gestión de dependencias**  
  *Familia:* `jerarquía y dependencias`  
  Gestión de dependencias conecta fuentes versionadas, dependencias fijadas y configuración declarativa con su runtime interno: resuelve, construye y empaqueta el artefacto de forma repetible hasta exponer una unidad identificable que puede verificarse antes de promoverse.

- **Experimentos de proceso**  
  *Familia:* `planificación de trabajo`  
  En Experimentos de proceso, tareas con dependencias, recursos compartidos y una señal de cancelación ingresa al flujo donde ordena trabajo y sincronización sin ocultar intercalados posibles para consolidar progreso concurrente con ownership y terminación observables.

- **Memoria de decisiones**  
  *Familia:* `memoria intermedia`  
  La función de Memoria de decisiones parte de valores con representación, dirección y tiempo de vida definidos. Su ejecución reserva, enlaza y libera almacenamiento siguiendo el contrato del runtime y produce estado accesible sin referencias colgantes ni corrupción.


### Seccion: Scrum aplicado (7 conceptos)

- **Product Goal**  
  *Familia:* `contratos coordinados`  
  Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución.

- **Sprint Goal**  
  *Familia:* `workflow y decisiones`  
  Da propósito común al sprint y permite adaptar alcance mientras se conserva el resultado esperado.

- **Product Backlog ordenado**  
  *Familia:* `secuencia operativa`  
  Hace visible el trabajo futuro como opciones priorizadas, refinadas solo hasta el detalle necesario.

- **Incremento inspeccionable**  
  *Familia:* `contratos coordinados`  
  Integra elementos terminados en un producto utilizable que satisface la definición de terminado.

- **Responsabilidades de Scrum**  
  *Familia:* `workflow y decisiones`  
  Distingue accountabilities de Product Owner, Scrum Master y Developers sin convertirlas en jerarquías.

- **Empirismo y sus pilares**  
  *Familia:* `secuencia operativa`  
  Para Empirismo / sus / pilares, el sistema limita opciones, recoge evidencia y adapta prioridad sin ocultar colas ni dependencias, manteniendo un incremento terminado y una señal de resultado que alimenta la siguiente decisión.

- **Cancelación de un Sprint**  
  *Familia:* `contratos coordinados`  
  Cancelación / un / Sprint coordina la ejecución: la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar hasta obtener un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.


### Seccion: Kanban aplicado (5 conceptos)

- **Puntos de compromiso y entrega**  
  *Familia:* `cola y consumidor`  
  Delimitan cuándo una opción entra al sistema y cuándo genera valor para medir su tiempo real.

- **Clases de servicio**  
  *Familia:* `máquina de estados`  
  Aplican políticas distintas según costo de demora sin declarar urgente todo el trabajo.

- **Aging work in progress**  
  *Familia:* `evidencia y latencia`  
  Compara edad actual con distribuciones históricas para intervenir antes de incumplir expectativas.

- **Service level expectation**  
  *Familia:* `cola y consumidor`  
  Expresa probabilísticamente cuánto trabajo termina dentro de un plazo usando datos del flujo.

- **Replenishment y delivery review**  
  *Familia:* `máquina de estados`  
  Separa seleccionar nuevo trabajo de revisar entregas para proteger capacidad y aprendizaje.


### Seccion: Extreme Programming (8 conceptos)

- **Programación en pareja**  
  *Familia:* `flujo de transformación`  
  Alterna conducción y revisión continua para compartir contexto y detectar decisiones defectuosas temprano.

- **Test-first programming**  
  *Familia:* `espectro de verificación`  
  Formula un comportamiento fallido antes del código y usa el ciclo para guiar diseño comprobable.

- **Integración continua**  
  *Familia:* `pasaporte del artefacto`  
  Combina cambios pequeños frecuentemente y ejecuta validaciones automáticas que detectan incompatibilidades pronto.

- **Diseño simple**  
  *Familia:* `flujo de transformación`  
  Implementa la estructura mínima que satisface pruebas actuales y refactoriza cuando aparece evidencia nueva.

- **Propiedad colectiva del código**  
  *Familia:* `espectro de verificación`  
  Permite mejorar cualquier área con estándares, revisión y responsabilidad compartidos.

- **Refactorización continua**  
  *Familia:* `pasaporte del artefacto`  
  Para Refactorización / continua, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, manteniendo una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Metáfora del sistema**  
  *Familia:* `flujo de transformación`  
  Metáfora / sistema coordina la ejecución: el sistema limita opciones, recoge evidencia y adapta prioridad sin ocultar colas ni dependencias hasta obtener un incremento terminado y una señal de resultado que alimenta la siguiente decisión.

- **Ritmo sostenible**  
  *Familia:* `espectro de verificación`  
  Al operar con Ritmo / sostenible, el sistema limita opciones, recoge evidencia y adapta prioridad sin ocultar colas ni dependencias, produciendo un incremento terminado y una señal de resultado que alimenta la siguiente decisión.


### Seccion: Lean y teoría de colas (5 conceptos)

- **Valor y desperdicio**  
  *Familia:* `cola y consumidor`  
  Distingue actividad que cambia un resultado del cliente de espera, retrabajo y transferencia innecesaria.

- **Tamaño de lote**  
  *Familia:* `máquina de estados`  
  Reduce riesgo y tiempo de feedback al entregar cambios pequeños sin elevar coordinación de forma desproporcionada.

- **Ley de Little**  
  *Familia:* `evidencia y latencia`  
  Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable.

- **Variabilidad del flujo**  
  *Familia:* `cola y consumidor`  
  Explica cómo llegadas y tiempos impredecibles forman colas incluso con capacidad promedio suficiente.

- **Optimización del sistema completo**  
  *Familia:* `máquina de estados`  
  Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total.


### Seccion: Descubrimiento de producto (7 conceptos)

- **Hipótesis de problema**  
  *Familia:* `flujo de interfaz`  
  Declara población, necesidad y evidencia esperada para poder refutar una suposición de producto.

- **Entrevistas de descubrimiento**  
  *Familia:* `superficie de aplicación`  
  Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta.

- **Prototipos de baja fidelidad**  
  *Familia:* `validación y decisión`  
  Simulan la interacción con costo pequeño para aprender antes de construir infraestructura.

- **Experimentos y señales**  
  *Familia:* `flujo de interfaz`  
  Vinculan una intervención a métricas y guardrails que diferencian impacto de actividad.

- **Dual-track discovery**  
  *Familia:* `superficie de aplicación`  
  Coordina aprendizaje de producto y entrega sin convertirlos en equipos o cascadas separadas.

- **Opportunity solution tree**  
  *Familia:* `validación y decisión`  
  Para Opportunity / solution / tree, la estructura indexa, agrupa o itera datos aplicando la operación solo a las posiciones válidas, manteniendo una colección cuya cardinalidad, orden y tipos corresponden a la transformación solicitada.

- **Pruebas de desirability**  
  *Familia:* `flujo de interfaz`  
  Pruebas / desirability coordina la ejecución: la herramienta ejecuta, perturba o inspecciona el mecanismo y conserva el contraejemplo mínimo hasta obtener evidencia reproducible que distingue regresión, ruido y limitación conocida.


### Seccion: Requisitos y alcance (6 conceptos)

- **Mapeo de historias**  
  *Familia:* `superficie de aplicación`  
  Ordena actividades del usuario y cortes de entrega para conservar el recorrido completo.

- **Ejemplos por especificación**  
  *Familia:* `validación y decisión`  
  Convierte reglas ambiguas en escenarios concretos compartidos por negocio, desarrollo y pruebas.

- **Requisitos no funcionales**  
  *Familia:* `flujo de interfaz`  
  Define atributos medibles de seguridad, rendimiento, accesibilidad y confiabilidad junto al comportamiento.

- **Trazabilidad de decisiones**  
  *Familia:* `superficie de aplicación`  
  Conecta necesidad, alternativa, decisión y evidencia sin crear documentación ceremonial.

- **Gestión explícita del alcance**  
  *Familia:* `validación y decisión`  
  Intercambia opciones preservando objetivo, restricciones y capacidad en lugar de ocultar crecimiento.

- **Impact mapping**  
  *Familia:* `flujo de interfaz`  
  Para Impact / mapping, el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, manteniendo un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.


### Seccion: Entrega y operaciones (7 conceptos)

- **Trunk-based development**  
  *Familia:* `flujo de transformación`  
  Integra ramas breves a una línea común para limitar divergencia y costo de fusión.

- **Feature flags**  
  *Familia:* `espectro de verificación`  
  Separa despliegue de exposición con controles de expiración, propietario y estado seguro.

- **Despliegue progresivo**  
  *Familia:* `pasaporte del artefacto`  
  Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails.

- **Feedback de producción**  
  *Familia:* `flujo de transformación`  
  Convierte telemetría, soporte y comportamiento real en nuevas decisiones de producto y operación.

- **Responsabilidad operativa compartida**  
  *Familia:* `espectro de verificación`  
  Mantiene a quienes construyen involucrados en confiabilidad, incidentes y mejora posterior.

- **Value stream mapping**  
  *Familia:* `pasaporte del artefacto`  
  Para Value / stream / mapping, la ejecución se suspende en puntos seguros y el runtime la reanuda cuando I/O o demanda permiten avanzar, manteniendo un valor, evento o cierre propagado sin bloquear el thread que coordina el flujo.

- **Error budgets**  
  *Familia:* `flujo de transformación`  
  Error / budgets coordina la ejecución: el adaptador prepara operaciones, adquiere recursos y aplica restricciones antes de confirmar hasta obtener estado persistido con integridad y visibilidad coherentes para lectores concurrentes.


### Seccion: Riesgo y gobernanza (7 conceptos)

- **Registro de riesgos**  
  *Familia:* `espectro de verificación`  
  Documenta probabilidad, impacto, tratamiento, señal y propietario para revisar incertidumbre periódicamente.

- **Threat modeling colaborativo**  
  *Familia:* `validación y decisión`  
  Explora activos, fronteras y abusos durante el diseño para priorizar controles verificables.

- **Cumplimiento continuo**  
  *Familia:* `evidencia y latencia`  
  Automatiza evidencias y controles repetibles sin reducir obligaciones a una auditoría puntual.

- **Segregación de funciones**  
  *Familia:* `espectro de verificación`  
  Evita que una sola identidad controle solicitud, aprobación y ejecución de acciones sensibles.

- **Criterios de escalamiento**  
  *Familia:* `validación y decisión`  
  Definen cuándo un bloqueo, riesgo o incidente requiere otra autoridad y qué contexto debe acompañarlo.

- **Decision gates basados en riesgo**  
  *Familia:* `evidencia y latencia`  
  Para Decision / gates / basados / en, el sistema limita opciones, recoge evidencia y adapta prioridad sin ocultar colas ni dependencias, manteniendo un incremento terminado y una señal de resultado que alimenta la siguiente decisión.

- **Controles compensatorios**  
  *Familia:* `espectro de verificación`  
  Controles / compensatorios coordina la ejecución: el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos hasta obtener un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.


### Seccion: Equipos y organizaciones (5 conceptos)

- **Topologías de equipo**  
  *Familia:* `ecosistema coordinado`  
  Alinean límites organizativos con flujo de valor y modos explícitos de interacción.

- **Límites cognitivos**  
  *Familia:* `propagación de eventos`  
  Restringen dominios y herramientas que un equipo debe dominar para conservar autonomía sostenible.

- **Contratos entre equipos**  
  *Familia:* `flujo de interfaz`  
  Declaran servicio, soporte, compatibilidad y expectativas sin depender de acuerdos informales.

- **Facilitación remota**  
  *Familia:* `ecosistema coordinado`  
  Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces.

- **Seguridad psicológica**  
  *Familia:* `propagación de eventos`  
  Permite exponer errores y dudas sin castigo, condición necesaria para aprender antes de incidentes.


### Seccion: Métricas orientadas a resultados (6 conceptos)

- **Outcome frente a output**  
  *Familia:* `evidencia y latencia`  
  Distingue cambio logrado en usuarios o sistema de la cantidad de elementos producidos.

- **Métricas DORA**  
  *Familia:* `tabla de estados`  
  Relacionan frecuencia, tiempo, fallos y recuperación para observar capacidad de entrega sin ranking individual.

- **Objetivos y resultados clave**  
  *Familia:* `comparativa técnica`  
  Vinculan una dirección cualitativa con señales cuantificables y limitadas en el tiempo.

- **Guardrails de calidad**  
  *Familia:* `evidencia y latencia`  
  Impiden que optimizar una métrica deteriore seguridad, accesibilidad o confiabilidad.

- **Revisión estadística del proceso**  
  *Familia:* `tabla de estados`  
  Usa distribuciones y tendencias para distinguir cambio real de variación común. En Revisión estadística del proceso, tareas con dependencias, recursos compartidos y una señal de cancelación ingresa al flujo donde ordena trabajo y sincronización sin ocultar intercalados posibles para consolidar progreso concurrente con ownership y terminación observables.

- **Métricas leading y lagging**  
  *Familia:* `comparativa técnica`  
  Para Métricas / leading / lagging, el lenguaje resuelve expresiones y elige una ruta manteniendo alcance y manejo de fallo explícitos, manteniendo un valor, transición o error que el siguiente paso puede distinguir sin inspeccionar estado oculto.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Fundamentos](Grupo-Fundamentals) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
