import type { QuizQuestion } from "@/data/quizTypes";

export const methodologiesQuestions: QuizQuestion[] = [
  {
    "id": "methodologies-q-01",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Scrum aplicado), ¿qué función técnica cumple «Product Goal»?",
    "options": [
      "Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución.",
      "Integra elementos terminados en un producto utilizable que satisface la definición de terminado.",
      "Simula la interacción con costo pequeño para aprender antes de construir infraestructura.",
      "Separa despliegue de exposición con controles de expiración, propietario y estado seguro."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Product Goal (Scrum aplicado): Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución.",
    "topic": "Scrum aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-02",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Sprint Goal» en scrum aplicado?",
    "options": [
      "Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución al operar.",
      "Da propósito común al sprint y permite adaptar alcance mientras se conserva el resultado esperado.",
      "Integra elementos terminados en un producto utilizable que satisface la definición de terminado.",
      "Hace visible el trabajo futuro como opciones priorizadas, refinadas solo hasta el detalle necesario."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sprint Goal (Scrum aplicado): Da propósito común al sprint y permite adaptar alcance mientras se conserva el resultado esperado.",
    "topic": "Scrum aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-03",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Product Backlog ordenado»?",
    "options": [
      "Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución al operar.",
      "Integra elementos terminados en un producto utilizable que satisface la definición de terminado.",
      "Hace visible el trabajo futuro como opciones priorizadas, refinadas solo hasta el detalle necesario.",
      "Da propósito común al sprint y permite adaptar alcance mientras se conserva el resultado esperado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Product Backlog ordenado (Scrum aplicado): Hace visible el trabajo futuro como opciones priorizadas, refinadas solo hasta el detalle necesario.",
    "topic": "Scrum aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-04",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Incremento inspeccionable»?",
    "options": [
      "Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución al operar.",
      "Da propósito común al sprint y permite adaptar alcance mientras se conserva el resultado esperado.",
      "Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces al operar.",
      "Integra elementos terminados en un producto utilizable que satisface la definición de terminado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Incremento inspeccionable (Scrum aplicado): Integra elementos terminados en un producto utilizable que satisface la definición de terminado.",
    "topic": "Scrum aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-05",
    "collectionId": "methodologies",
    "question": "Respecto a scrum aplicado en Metodologías de desarrollo, ¿cuál es el propósito de «Responsabilidades de Scrum»?",
    "options": [
      "Distingue accountabilities de Product Owner, Scrum Master y Developers sin convertirlas en jerarquías al operar.",
      "Integra elementos terminados en un producto utilizable que satisface la definición de terminado.",
      "Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución al operar.",
      "Da propósito común al sprint y permite adaptar alcance mientras se conserva el resultado esperado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Responsabilidades de Scrum (Scrum aplicado): Distingue accountabilities de Product Owner, Scrum Master y Developers sin convertirlas en jerarquías.",
    "topic": "Scrum aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-06",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Kanban aplicado), ¿qué función técnica cumple «Puntos de compromiso y entrega»?",
    "options": [
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo al operar.",
      "Delimitan cuándo una opción entra al sistema y cuándo genera valor para medir su tiempo real.",
      "Separa seleccionar nuevo trabajo de revisar entregas para proteger capacidad y aprendizaje.",
      "Expresa probabilísticamente cuánto trabajo termina dentro de un plazo usando datos del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Puntos de compromiso y entrega (Kanban aplicado): Delimitan cuándo una opción entra al sistema y cuándo genera valor para medir su tiempo real.",
    "topic": "Kanban aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-07",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Clases de servicio» en kanban aplicado?",
    "options": [
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails al operar.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable al operar.",
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo.",
      "Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Clases de servicio (Kanban aplicado): Aplican políticas distintas según costo de demora sin declarar urgente todo el trabajo.",
    "topic": "Kanban aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-08",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Aging work in progress»?",
    "options": [
      "Delimitan cuándo una opción entra al sistema y cuándo genera valor para medir su tiempo real al operar.",
      "Expresa probabilísticamente cuánto trabajo termina dentro de un plazo usando datos del flujo al operar.",
      "Separa seleccionar nuevo trabajo de revisar entregas para proteger capacidad y aprendizaje al operar.",
      "Compara edad actual con distribuciones históricas para intervenir antes de incumplir expectativas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Aging work in progress (Kanban aplicado): Compara edad actual con distribuciones históricas para intervenir antes de incumplir expectativas.",
    "topic": "Kanban aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-09",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Service level expectation»?",
    "options": [
      "Expresa probabilísticamente cuánto trabajo termina dentro de un plazo usando datos del flujo al operar.",
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo al operar.",
      "Separa seleccionar nuevo trabajo de revisar entregas para proteger capacidad y aprendizaje.",
      "Delimitan cuándo una opción entra al sistema y cuándo genera valor para medir su tiempo real."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Service level expectation (Kanban aplicado): Expresa probabilísticamente cuánto trabajo termina dentro de un plazo usando datos del flujo.",
    "topic": "Kanban aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-10",
    "collectionId": "methodologies",
    "question": "Respecto a kanban aplicado en Metodologías de desarrollo, ¿cuál es el propósito de «Replenishment y delivery review»?",
    "options": [
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo al operar.",
      "Separa seleccionar nuevo trabajo de revisar entregas para proteger capacidad y aprendizaje.",
      "Delimitan cuándo una opción entra al sistema y cuándo genera valor para medir su tiempo real.",
      "Expresa probabilísticamente cuánto trabajo termina dentro de un plazo usando datos del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Replenishment y delivery review (Kanban aplicado): Separa seleccionar nuevo trabajo de revisar entregas para proteger capacidad y aprendizaje.",
    "topic": "Kanban aplicado",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-11",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Extreme Programming), ¿qué función técnica cumple «Programación en pareja»?",
    "options": [
      "Formula un comportamiento fallido antes del código y usa el ciclo para guiar diseño comprobable en ejecución.",
      "Implementa la estructura mínima que satisface pruebas actuales y refactoriza cuando aparece evidencia nueva.",
      "Alterna conducción y revisión continua para compartir contexto y detectar decisiones defectuosas temprano.",
      "Hace visible el trabajo futuro como opciones priorizadas, refinadas solo hasta el detalle necesario al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Programación en pareja (Extreme Programming): Alterna conducción y revisión continua para compartir contexto y detectar decisiones defectuosas temprano.",
    "topic": "Extreme Programming",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-12",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Test-first programming» en extreme programming?",
    "options": [
      "Permite mejorar cualquier área con estándares, revisión y responsabilidad compartidos en ejecución.",
      "Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces al operar.",
      "Separa seleccionar nuevo trabajo de revisar entregas para proteger capacidad y aprendizaje al operar.",
      "Formula un comportamiento fallido antes del código y usa el ciclo para guiar diseño comprobable."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Test-first programming (Extreme Programming): Formula un comportamiento fallido antes del código y usa el ciclo para guiar diseño comprobable.",
    "topic": "Extreme Programming",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-13",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Integración continua»?",
    "options": [
      "Combina cambios pequeños frecuentemente y ejecuta validaciones automáticas que detectan incompatibilidades pronto al operar.",
      "Implementa la estructura mínima que satisface pruebas actuales y refactoriza cuando aparece evidencia nueva.",
      "Alterna conducción y revisión continua para compartir contexto y detectar decisiones defectuosas temprano al operar.",
      "Formula un comportamiento fallido antes del código y usa el ciclo para guiar diseño comprobable de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Integración continua (Extreme Programming): Combina cambios pequeños frecuentemente y ejecuta validaciones automáticas que detectan incompatibilidades pronto.",
    "topic": "Extreme Programming",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-14",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Diseño simple»?",
    "options": [
      "Alterna conducción y revisión continua para compartir contexto y detectar decisiones defectuosas temprano al operar.",
      "Implementa la estructura mínima que satisface pruebas actuales y refactoriza cuando aparece evidencia nueva.",
      "Formula un comportamiento fallido antes del código y usa el ciclo para guiar diseño comprobable en el flujo.",
      "Distingue accountabilities de Product Owner, Scrum Master y Developers sin convertirlas en jerarquías al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Diseño simple (Extreme Programming): Implementa la estructura mínima que satisface pruebas actuales y refactoriza cuando aparece evidencia nueva.",
    "topic": "Extreme Programming",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-15",
    "collectionId": "methodologies",
    "question": "Respecto a extreme programming en Metodologías de desarrollo, ¿cuál es el propósito de «Propiedad colectiva del código»?",
    "options": [
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails al operar.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable al operar.",
      "Permite mejorar cualquier área con estándares, revisión y responsabilidad compartidos.",
      "Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Propiedad colectiva del código (Extreme Programming): Permite mejorar cualquier área con estándares, revisión y responsabilidad compartidos.",
    "topic": "Extreme Programming",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-16",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Lean y teoría de colas), ¿qué función técnica cumple «Valor y desperdicio»?",
    "options": [
      "Explica cómo llegadas y tiempos impredecibles forman colas incluso con capacidad promedio suficiente al operar.",
      "Permite exponer errores y dudas sin castigo, condición necesaria para aprender antes de incidentes al operar.",
      "Da propósito común al sprint y permite adaptar alcance mientras se conserva el resultado esperado al operar.",
      "Distingue actividad que cambia un resultado del cliente de espera, retrabajo y transferencia innecesaria."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Valor y desperdicio (Lean y teoría de colas): Distingue actividad que cambia un resultado del cliente de espera, retrabajo y transferencia innecesaria.",
    "topic": "Lean y teoría de colas",
    "difficulty": "básico"
  },
  {
    "id": "methodologies-q-17",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Tamaño de lote» en lean y teoría de colas?",
    "options": [
      "Reduce riesgo y tiempo de feedback al entregar cambios pequeños sin elevar coordinación de forma desproporcionada.",
      "Distingue actividad que cambia un resultado del cliente de espera, retrabajo y transferencia innecesaria al operar.",
      "Explica cómo llegadas y tiempos impredecibles forman colas incluso con capacidad promedio suficiente al evaluar.",
      "Implementa la estructura mínima que satisface pruebas actuales y refactoriza cuando aparece evidencia nueva."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tamaño de lote (Lean y teoría de colas): Reduce riesgo y tiempo de feedback al entregar cambios pequeños sin elevar coordinación de forma desproporcionada.",
    "topic": "Lean y teoría de colas",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-18",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Ley de Little»?",
    "options": [
      "Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total en ejecución.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable al operar.",
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo al operar.",
      "Permite mejorar cualquier área con estándares, revisión y responsabilidad compartidos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Ley de Little (Lean y teoría de colas): Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable.",
    "topic": "Lean y teoría de colas",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-19",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Variabilidad del flujo»?",
    "options": [
      "Orienta decisiones del backlog hacia un estado futuro verificable sin prescribir cada solución al operar.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable de modo predecible.",
      "Explica cómo llegadas y tiempos impredecibles forman colas incluso con capacidad promedio suficiente.",
      "Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Variabilidad del flujo (Lean y teoría de colas): Explica cómo llegadas y tiempos impredecibles forman colas incluso con capacidad promedio suficiente.",
    "topic": "Lean y teoría de colas",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-20",
    "collectionId": "methodologies",
    "question": "Respecto a lean y teoría de colas en Metodologías de desarrollo, ¿cuál es el propósito de «Optimización del sistema completo»?",
    "options": [
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable en ejecución.",
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo al operar.",
      "Permite mejorar cualquier área con estándares, revisión y responsabilidad compartidos al operar.",
      "Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Optimización del sistema completo (Lean y teoría de colas): Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total.",
    "topic": "Lean y teoría de colas",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-21",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Descubrimiento de producto), ¿qué función técnica cumple «Hipótesis de problema»?",
    "options": [
      "Declara población, necesidad y evidencia esperada para poder refutar una suposición de producto al operar.",
      "Simula la interacción con costo pequeño para aprender antes de construir infraestructura al operar.",
      "Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta al operar.",
      "Coordina aprendizaje de producto y entrega sin convertirlos en equipos o cascadas separadas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hipótesis de problema (Descubrimiento de producto): Declara población, necesidad y evidencia esperada para poder refutar una suposición de producto.",
    "topic": "Descubrimiento de producto",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-22",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Entrevistas de descubrimiento» en descubrimiento de producto?",
    "options": [
      "Vincula una intervención a métricas y guardrails que diferencian impacto de actividad al operar.",
      "Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta.",
      "Simula la interacción con costo pequeño para aprender antes de construir infraestructura.",
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Entrevistas de descubrimiento (Descubrimiento de producto): Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta.",
    "topic": "Descubrimiento de producto",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-23",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Prototipos de baja fidelidad»?",
    "options": [
      "Vincula una intervención a métricas y guardrails que diferencian impacto de actividad al operar.",
      "Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta.",
      "Simula la interacción con costo pequeño para aprender antes de construir infraestructura.",
      "Alinean límites organizativos con flujo de valor y modos explícitos de interacción al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Prototipos de baja fidelidad (Descubrimiento de producto): Simulan la interacción con costo pequeño para aprender antes de construir infraestructura.",
    "topic": "Descubrimiento de producto",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-24",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Experimentos y señales»?",
    "options": [
      "Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta.",
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails al operar.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable al operar.",
      "Vincula una intervención a métricas y guardrails que diferencian impacto de actividad."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Experimentos y señales (Descubrimiento de producto): Vinculan una intervención a métricas y guardrails que diferencian impacto de actividad.",
    "topic": "Descubrimiento de producto",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-25",
    "collectionId": "methodologies",
    "question": "Respecto a descubrimiento de producto en Metodologías de desarrollo, ¿cuál es el propósito de «Dual-track discovery»?",
    "options": [
      "Coordina aprendizaje de producto y entrega sin convertirlos en equipos o cascadas separadas.",
      "Vincula una intervención a métricas y guardrails que diferencian impacto de actividad.",
      "Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta.",
      "Simula la interacción con costo pequeño para aprender antes de construir infraestructura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dual-track discovery (Descubrimiento de producto): Coordina aprendizaje de producto y entrega sin convertirlos en equipos o cascadas separadas.",
    "topic": "Descubrimiento de producto",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-26",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Requisitos y alcance), ¿qué función técnica cumple «Mapeo de historias»?",
    "options": [
      "Conecta necesidad, alternativa, decisión y evidencia sin crear documentación ceremonial.",
      "Ordena actividades del usuario y cortes de entrega para conservar el recorrido completo.",
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión al operar.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Mapeo de historias (Requisitos y alcance): Ordena actividades del usuario y cortes de entrega para conservar el recorrido completo.",
    "topic": "Requisitos y alcance",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-27",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Ejemplos por especificación» en requisitos y alcance?",
    "options": [
      "Ordena actividades del usuario y cortes de entrega para conservar el recorrido completo al evaluar.",
      "Conecta necesidad, alternativa, decisión y evidencia sin crear documentación ceremonial al operar.",
      "Convierte reglas ambiguas en escenarios concretos compartidos por negocio, desarrollo y pruebas.",
      "Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Ejemplos por especificación (Requisitos y alcance): Convierte reglas ambiguas en escenarios concretos compartidos por negocio, desarrollo y pruebas.",
    "topic": "Requisitos y alcance",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-28",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Requisitos no funcionales»?",
    "options": [
      "Intercambia opciones preservando objetivo, restricciones y capacidad en lugar de ocultar crecimiento al operar.",
      "Convierte reglas ambiguas en escenarios concretos compartidos por negocio, desarrollo y pruebas al evaluar.",
      "Ordena actividades del usuario y cortes de entrega para conservar el recorrido completo de modo predecible.",
      "Define atributos medibles de seguridad, rendimiento, accesibilidad y confiabilidad junto al comportamiento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Requisitos no funcionales (Requisitos y alcance): Define atributos medibles de seguridad, rendimiento, accesibilidad y confiabilidad junto al comportamiento.",
    "topic": "Requisitos y alcance",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-29",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Trazabilidad de decisiones»?",
    "options": [
      "Conecta necesidad, alternativa, decisión y evidencia sin crear documentación ceremonial al operar.",
      "Ordena actividades del usuario y cortes de entrega para conservar el recorrido completo.",
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Trazabilidad de decisiones (Requisitos y alcance): Conecta necesidad, alternativa, decisión y evidencia sin crear documentación ceremonial.",
    "topic": "Requisitos y alcance",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-30",
    "collectionId": "methodologies",
    "question": "Respecto a requisitos y alcance en Metodologías de desarrollo, ¿cuál es el propósito de «Gestión explícita del alcance»?",
    "options": [
      "Convierte reglas ambiguas en escenarios concretos compartidos por negocio, desarrollo y pruebas al operar.",
      "Intercambia opciones preservando objetivo, restricciones y capacidad en lugar de ocultar crecimiento.",
      "Ordena actividades del usuario y cortes de entrega para conservar el recorrido completo en ejecución.",
      "Conecta necesidad, alternativa, decisión y evidencia sin crear documentación ceremonial en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Gestión explícita del alcance (Requisitos y alcance): Intercambia opciones preservando objetivo, restricciones y capacidad en lugar de ocultar crecimiento.",
    "topic": "Requisitos y alcance",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-31",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Entrega y operaciones), ¿qué función técnica cumple «Trunk-based development»?",
    "options": [
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails al operar.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable.",
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión.",
      "Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Trunk-based development (Entrega y operaciones): Integra ramas breves a una línea común para limitar divergencia y costo de fusión.",
    "topic": "Entrega y operaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-32",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Feature flags» en entrega y operaciones?",
    "options": [
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión al operar.",
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails al operar.",
      "Mantiene a quienes construyen involucrados en confiabilidad, incidentes y mejora posterior.",
      "Separa despliegue de exposición con controles de expiración, propietario y estado seguro."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Feature flags (Entrega y operaciones): Separa despliegue de exposición con controles de expiración, propietario y estado seguro.",
    "topic": "Entrega y operaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-33",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Despliegue progresivo»?",
    "options": [
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails de forma clara.",
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión al operar.",
      "Separa despliegue de exposición con controles de expiración, propietario y estado seguro.",
      "Mantiene a quienes construyen involucrados en confiabilidad, incidentes y mejora posterior."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Despliegue progresivo (Entrega y operaciones): Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails.",
    "topic": "Entrega y operaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-34",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Feedback de producción»?",
    "options": [
      "Mantiene a quienes construyen involucrados en confiabilidad, incidentes y mejora posterior al operar.",
      "Convierte telemetría, soporte y comportamiento real en nuevas decisiones de producto y operación.",
      "Separa despliegue de exposición con controles de expiración, propietario y estado seguro al operar.",
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Feedback de producción (Entrega y operaciones): Convierte telemetría, soporte y comportamiento real en nuevas decisiones de producto y operación.",
    "topic": "Entrega y operaciones",
    "difficulty": "intermedio"
  },
  {
    "id": "methodologies-q-35",
    "collectionId": "methodologies",
    "question": "Respecto a entrega y operaciones en Metodologías de desarrollo, ¿cuál es el propósito de «Responsabilidad operativa compartida»?",
    "options": [
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión en el flujo.",
      "Separa despliegue de exposición con controles de expiración, propietario y estado seguro.",
      "Mantiene a quienes construyen involucrados en confiabilidad, incidentes y mejora posterior.",
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Responsabilidad operativa compartida (Entrega y operaciones): Mantiene a quienes construyen involucrados en confiabilidad, incidentes y mejora posterior.",
    "topic": "Entrega y operaciones",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-36",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Riesgo y gobernanza), ¿qué función técnica cumple «Registro de riesgos»?",
    "options": [
      "Define cuándo un bloqueo, riesgo o incidente requiere otra autoridad y qué contexto debe acompañarlo al operar.",
      "Automatiza evidencias y controles repetibles sin reducir obligaciones a una auditoría puntual con precisión.",
      "Evita que una sola identidad controle solicitud, aprobación y ejecución de acciones sensibles con precisión.",
      "Documenta probabilidad, impacto, tratamiento, señal y propietario para revisar incertidumbre periódicamente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Registro de riesgos (Riesgo y gobernanza): Documenta probabilidad, impacto, tratamiento, señal y propietario para revisar incertidumbre periódicamente.",
    "topic": "Riesgo y gobernanza",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-37",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Threat modeling colaborativo» en riesgo y gobernanza?",
    "options": [
      "Explora activos, fronteras y abusos durante el diseño para priorizar controles verificables al operar.",
      "Automatiza evidencias y controles repetibles sin reducir obligaciones a una auditoría puntual.",
      "Evita que una sola identidad controle solicitud, aprobación y ejecución de acciones sensibles.",
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Threat modeling colaborativo (Riesgo y gobernanza): Explora activos, fronteras y abusos durante el diseño para priorizar controles verificables.",
    "topic": "Riesgo y gobernanza",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-38",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Cumplimiento continuo»?",
    "options": [
      "Explora activos, fronteras y abusos durante el diseño para priorizar controles verificables al operar.",
      "Automatiza evidencias y controles repetibles sin reducir obligaciones a una auditoría puntual.",
      "Evita que una sola identidad controle solicitud, aprobación y ejecución de acciones sensibles.",
      "Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cumplimiento continuo (Riesgo y gobernanza): Automatiza evidencias y controles repetibles sin reducir obligaciones a una auditoría puntual.",
    "topic": "Riesgo y gobernanza",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-39",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Segregación de funciones»?",
    "options": [
      "Explora activos, fronteras y abusos durante el diseño para priorizar controles verificables al operar.",
      "Automatiza evidencias y controles repetibles sin reducir obligaciones a una auditoría puntual.",
      "Evita que una sola identidad controle solicitud, aprobación y ejecución de acciones sensibles.",
      "Investigan conductas y contexto reales sin inducir aprobación de una solución propuesta al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Segregación de funciones (Riesgo y gobernanza): Evita que una sola identidad controle solicitud, aprobación y ejecución de acciones sensibles.",
    "topic": "Riesgo y gobernanza",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-40",
    "collectionId": "methodologies",
    "question": "Respecto a riesgo y gobernanza en Metodologías de desarrollo, ¿cuál es el propósito de «Criterios de escalamiento»?",
    "options": [
      "Automatiza evidencias y controles repetibles sin reducir obligaciones a una auditoría puntual al operar.",
      "Evita que una sola identidad controle solicitud, aprobación y ejecución de acciones sensibles al operar.",
      "Explora activos, fronteras y abusos durante el diseño para priorizar controles verificables al operar.",
      "Define cuándo un bloqueo, riesgo o incidente requiere otra autoridad y qué contexto debe acompañarlo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Criterios de escalamiento (Riesgo y gobernanza): Definen cuándo un bloqueo, riesgo o incidente requiere otra autoridad y qué contexto debe acompañarlo.",
    "topic": "Riesgo y gobernanza",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-41",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Equipos y organizaciones), ¿qué función técnica cumple «Topologías de equipo»?",
    "options": [
      "Alinean límites organizativos con flujo de valor y modos explícitos de interacción.",
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails.",
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable.",
      "Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Topologías de equipo (Equipos y organizaciones): Alinean límites organizativos con flujo de valor y modos explícitos de interacción.",
    "topic": "Equipos y organizaciones",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-42",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Límites cognitivos» en equipos y organizaciones?",
    "options": [
      "Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces al operar.",
      "Restringe dominios y herramientas que un equipo debe dominar para conservar autonomía sostenible.",
      "Declara servicio, soporte, compatibilidad y expectativas sin depender de acuerdos informales.",
      "Alinean límites organizativos con flujo de valor y modos explícitos de interacción con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Límites cognitivos (Equipos y organizaciones): Restringen dominios y herramientas que un equipo debe dominar para conservar autonomía sostenible.",
    "topic": "Equipos y organizaciones",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-43",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Contratos entre equipos»?",
    "options": [
      "Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces al operar.",
      "Alinean límites organizativos con flujo de valor y modos explícitos de interacción al operar.",
      "Declara servicio, soporte, compatibilidad y expectativas sin depender de acuerdos informales.",
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Contratos entre equipos (Equipos y organizaciones): Declaran servicio, soporte, compatibilidad y expectativas sin depender de acuerdos informales.",
    "topic": "Equipos y organizaciones",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-44",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Facilitación remota»?",
    "options": [
      "Alinean límites organizativos con flujo de valor y modos explícitos de interacción al operar.",
      "Impide que optimizar una métrica deteriore seguridad, accesibilidad o confiabilidad al operar.",
      "Aplica políticas distintas según costo de demora sin declarar urgente todo el trabajo.",
      "Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Facilitación remota (Equipos y organizaciones): Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces.",
    "topic": "Equipos y organizaciones",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-45",
    "collectionId": "methodologies",
    "question": "Respecto a equipos y organizaciones en Metodologías de desarrollo, ¿cuál es el propósito de «Seguridad psicológica»?",
    "options": [
      "Permite exponer errores y dudas sin castigo, condición necesaria para aprender antes de incidentes.",
      "Declara servicio, soporte, compatibilidad y expectativas sin depender de acuerdos informales.",
      "Diseña participación asincrónica y síncrona para que ubicación y horario no oculten voces al operar.",
      "Restringe dominios y herramientas que un equipo debe dominar para conservar autonomía sostenible."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Seguridad psicológica (Equipos y organizaciones): Permite exponer errores y dudas sin castigo, condición necesaria para aprender antes de incidentes.",
    "topic": "Equipos y organizaciones",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-46",
    "collectionId": "methodologies",
    "question": "En Metodologías de desarrollo (Métricas orientadas a resultados), ¿qué función técnica cumple «Outcome frente a output»?",
    "options": [
      "Impide que optimizar una métrica deteriore seguridad, accesibilidad o confiabilidad al operar.",
      "Distingue cambio logrado en usuarios o sistema de la cantidad de elementos producidos.",
      "Vincula una dirección cualitativa con señales cuantificables y limitadas en el tiempo.",
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Outcome frente a output (Métricas orientadas a resultados): Distingue cambio logrado en usuarios o sistema de la cantidad de elementos producidos.",
    "topic": "Métricas orientadas a resultados",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-47",
    "collectionId": "methodologies",
    "question": "Dentro de Metodologías de desarrollo, ¿cómo opera el mecanismo de «Métricas DORA» en métricas orientadas a resultados?",
    "options": [
      "Distingue actividad que cambia un resultado del cliente de espera, retrabajo y transferencia innecesaria al operar.",
      "Alterna conducción y revisión continua para compartir contexto y detectar decisiones defectuosas temprano al operar.",
      "Relacionan frecuencia, tiempo, fallos y recuperación para observar capacidad de entrega sin ranking individual.",
      "Define atributos medibles de seguridad, rendimiento, accesibilidad y confiabilidad junto al comportamiento."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Métricas DORA (Métricas orientadas a resultados): Relacionan frecuencia, tiempo, fallos y recuperación para observar capacidad de entrega sin ranking individual.",
    "topic": "Métricas orientadas a resultados",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-48",
    "collectionId": "methodologies",
    "question": "Al trabajar con Metodologías de desarrollo, ¿qué responsabilidad define a «Objetivos y resultados clave»?",
    "options": [
      "Impide que optimizar una métrica deteriore seguridad, accesibilidad o confiabilidad al operar.",
      "Distingue cambio logrado en usuarios o sistema de la cantidad de elementos producidos.",
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails al operar.",
      "Vincula una dirección cualitativa con señales cuantificables y limitadas en el tiempo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Objetivos y resultados clave (Métricas orientadas a resultados): Vinculan una dirección cualitativa con señales cuantificables y limitadas en el tiempo.",
    "topic": "Métricas orientadas a resultados",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-49",
    "collectionId": "methodologies",
    "question": "En la arquitectura de Metodologías de desarrollo, ¿qué caracteriza técnicamente a «Guardrails de calidad»?",
    "options": [
      "Impide que optimizar una métrica deteriore seguridad, accesibilidad o confiabilidad al operar.",
      "Distingue cambio logrado en usuarios o sistema de la cantidad de elementos producidos.",
      "Vincula una dirección cualitativa con señales cuantificables y limitadas en el tiempo.",
      "Amplía tráfico por etapas y detiene promoción cuando métricas violan guardrails."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Guardrails de calidad (Métricas orientadas a resultados): Impiden que optimizar una métrica deteriore seguridad, accesibilidad o confiabilidad.",
    "topic": "Métricas orientadas a resultados",
    "difficulty": "avanzado"
  },
  {
    "id": "methodologies-q-50",
    "collectionId": "methodologies",
    "question": "Respecto a caso en acción en Metodologías de desarrollo, ¿cuál es el propósito de «Detectar saturación»?",
    "options": [
      "Relaciona trabajo en curso, throughput y tiempo de ciclo bajo un sistema estable al operar.",
      "El caso hace visible el fallo de Metodologías de desarrollo respetando las invariantes.",
      "Evita acelerar una etapa si solo desplaza el cuello y empeora el resultado total al operar.",
      "Integra ramas breves a una línea común para limitar divergencia y costo de fusión al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Detectar saturación (Caso en acción): El caso hace visible el fallo de Metodologías de desarrollo; no continúa como si la evidencia fuera válida.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  }
];
