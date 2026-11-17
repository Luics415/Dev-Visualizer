import type { QuizQuestion } from "@/data/quizTypes";

export const ciCdQuestions: QuizQuestion[] = [
  {
    "id": "ci-cd-q-01",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Principios de flujo), ¿qué función técnica cumple «Integración continua»?",
    "options": [
      "Integra cambios pequeños con feedback automático y una rama principal siempre reparable.",
      "Automatiza también la promoción a producción cuando todas las políticas lo permiten.",
      "Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria.",
      "Mantiene cada cambio aprobado listo para promocionarse mediante una decisión controlada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Integración continua (Principios de flujo): Integra cambios pequeños con feedback automático y una rama principal siempre reparable.",
    "topic": "Principios de flujo",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-02",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Continuous delivery» en principios de flujo?",
    "options": [
      "Automatiza también la promoción a producción cuando todas las políticas lo permiten al operar.",
      "Mantiene cada cambio aprobado listo para promocionarse mediante una decisión controlada.",
      "Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria.",
      "Integra cambios pequeños con feedback automático y una rama principal siempre reparable."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Continuous delivery (Principios de flujo): Mantiene cada cambio aprobado listo para promocionarse mediante una decisión controlada.",
    "topic": "Principios de flujo",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-03",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Continuous deployment»?",
    "options": [
      "Ordena checks baratos primero y conserva pruebas amplias antes de promover en el flujo.",
      "Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria.",
      "Automatiza también la promoción a producción cuando todas las políticas lo permiten.",
      "Evita que residuos de una ejecución oculten dependencias o cambien resultados al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Continuous deployment (Principios de flujo): Automatiza también la promoción a producción cuando todas las políticas lo permiten.",
    "topic": "Principios de flujo",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-04",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Pipeline como DAG»?",
    "options": [
      "Ordena checks baratos primero y conserva pruebas amplias antes de promover en ejecución.",
      "Automatiza también la promoción a producción cuando todas las políticas lo permiten.",
      "La velocidad importa porque un hallazgo tardío multiplica el costo de contexto al operar.",
      "Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pipeline como DAG (Principios de flujo): Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria.",
    "topic": "Principios de flujo",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-05",
    "collectionId": "ci-cd",
    "question": "Respecto a principios de flujo en CI/CD, ¿cuál es el propósito de «Trigger y alcance»?",
    "options": [
      "Decide qué eventos y rutas justifican ejecutar trabajo costoso respetando las invariantes.",
      "Automatiza también la promoción a producción cuando todas las políticas lo permiten.",
      "Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria.",
      "Integra cambios pequeños con feedback automático y una rama principal siempre reparable."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Trigger y alcance (Principios de flujo): Decide qué eventos y rutas justifican ejecutar trabajo costoso.",
    "topic": "Principios de flujo",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-06",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Principios de flujo), ¿qué función técnica cumple «Feedback rápido y profundo»?",
    "options": [
      "Automatiza también la promoción a producción cuando todas las políticas lo permiten al operar.",
      "Ordena checks baratos primero y conserva pruebas amplias antes de promover en ejecución.",
      "Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria.",
      "Integra cambios pequeños con feedback automático y una rama principal siempre reparable."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Feedback rápido y profundo (Principios de flujo): Ordena checks baratos primero y conserva pruebas amplias antes de promover.",
    "topic": "Principios de flujo",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-07",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Runner hospedado o propio» en runners y entornos?",
    "options": [
      "Levanta bases y dependencias desechables para pruebas de integración reproducibles al operar.",
      "Verifica versiones y plataformas relevantes sin multiplicar combinaciones sin valor.",
      "Elige aislamiento, control, red, mantenimiento y costo según el workload de forma clara.",
      "Evita que residuos de una ejecución oculten dependencias o cambien resultados al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Runner hospedado o propio (Runners y entornos): Elige aislamiento, control, red, mantenimiento y costo según el workload.",
    "topic": "Runners y entornos",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-08",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Entorno limpio»?",
    "options": [
      "Levanta bases y dependencias desechables para pruebas de integración reproducibles al operar.",
      "Verifica versiones y plataformas relevantes sin multiplicar combinaciones sin valor.",
      "Evita gastar capacidad en ejecuciones reemplazadas por commits más nuevos con precisión.",
      "Evita que residuos de una ejecución oculten dependencias o cambien resultados al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Entorno limpio (Runners y entornos): Evita que residuos de una ejecución oculten dependencias o cambien resultados.",
    "topic": "Runners y entornos",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-09",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Matrices de prueba»?",
    "options": [
      "Verifica versiones y plataformas relevantes sin multiplicar combinaciones sin valor.",
      "Evita que residuos de una ejecución oculten dependencias o cambien resultados.",
      "Evita gastar capacidad en ejecuciones reemplazadas por commits más nuevos al operar.",
      "Elige aislamiento, control, red, mantenimiento y costo según el workload al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Matrices de prueba (Runners y entornos): Verifica versiones y plataformas relevantes sin multiplicar combinaciones sin valor.",
    "topic": "Runners y entornos",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-10",
    "collectionId": "ci-cd",
    "question": "Respecto a runners y entornos en CI/CD, ¿cuál es el propósito de «Servicios efímeros»?",
    "options": [
      "Evita que residuos de una ejecución oculten dependencias o cambien resultados al operar.",
      "Levanta bases y dependencias desechables para pruebas de integración reproducibles.",
      "Evita gastar capacidad en ejecuciones reemplazadas por commits más nuevos al operar.",
      "Elige aislamiento, control, red, mantenimiento y costo según el workload al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Servicios efímeros (Runners y entornos): Levanta bases y dependencias desechables para pruebas de integración reproducibles.",
    "topic": "Runners y entornos",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-11",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Runners y entornos), ¿qué función técnica cumple «Concurrencia y cancelación»?",
    "options": [
      "Levanta bases y dependencias desechables para pruebas de integración reproducibles al operar.",
      "Verifica versiones y plataformas relevantes sin multiplicar combinaciones sin valor.",
      "Evita gastar capacidad en ejecuciones reemplazadas por commits más nuevos con precisión.",
      "Evita que residuos de una ejecución oculten dependencias o cambien resultados al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Concurrencia y cancelación (Runners y entornos): Evita gastar capacidad en ejecuciones reemplazadas por commits más nuevos.",
    "topic": "Runners y entornos",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-12",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Timeouts y límites» en runners y entornos?",
    "options": [
      "Levanta bases y dependencias desechables para pruebas de integración reproducibles al operar.",
      "Evita que residuos de una ejecución oculten dependencias o cambien resultados al operar.",
      "Verifica versiones y plataformas relevantes sin multiplicar combinaciones sin valor.",
      "Detiene jobs colgados y hace visible su presupuesto operativo manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Timeouts y límites (Runners y entornos): Detiene jobs colgados y hace visible su presupuesto operativo.",
    "topic": "Runners y entornos",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-13",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Lint y análisis estático»?",
    "options": [
      "Detecta defectos baratos antes de compilar o desplegar dentro de la arquitectura activa.",
      "Clasifica inestabilidad como defecto del sistema de evidencia, no como ruido aceptable.",
      "Valida historias críticas sin convertir toda combinación en un caso frágil al evaluar.",
      "Mide qué código fue ejecutado y si las aserciones detectan cambios dañinos al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Lint y análisis estático (Pruebas y calidad): Detecta defectos baratos antes de compilar o desplegar.",
    "topic": "Pruebas y calidad",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-14",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Pruebas unitarias»?",
    "options": [
      "Valida historias críticas sin convertir toda combinación en un caso frágil en el flujo.",
      "Aísla reglas rápidas con fallos localizables dentro del ciclo operativo del sistema.",
      "Mide qué código fue ejecutado y si las aserciones detectan cambios dañinos al operar.",
      "Evita que residuos de una ejecución oculten dependencias o cambien resultados al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pruebas unitarias (Pruebas y calidad): Aísla reglas rápidas con fallos localizables.",
    "topic": "Pruebas y calidad",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-15",
    "collectionId": "ci-cd",
    "question": "Respecto a pruebas y calidad en CI/CD, ¿cuál es el propósito de «Pruebas de integración»?",
    "options": [
      "Clasifica inestabilidad como defecto del sistema de evidencia, no como ruido aceptable al operar.",
      "Valida historias críticas sin convertir toda combinación en un caso frágil en ejecución.",
      "Comprueba contratos reales entre procesos, datos y dependencias dentro de la aplicación.",
      "Mide qué código fue ejecutado y si las aserciones detectan cambios dañinos en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Pruebas de integración (Pruebas y calidad): Comprueba contratos reales entre procesos, datos y dependencias.",
    "topic": "Pruebas y calidad",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-16",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Pruebas y calidad), ¿qué función técnica cumple «Pruebas end-to-end»?",
    "options": [
      "Clasifica inestabilidad como defecto del sistema de evidencia, no como ruido aceptable al operar.",
      "Mide qué código fue ejecutado y si las aserciones detectan cambios dañinos en ejecución.",
      "Levanta bases y dependencias desechables para pruebas de integración reproducibles al operar.",
      "Valida historias críticas sin convertir toda combinación en un caso frágil en ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pruebas end-to-end (Pruebas y calidad): Valida historias críticas sin convertir toda combinación en un caso frágil.",
    "topic": "Pruebas y calidad",
    "difficulty": "básico"
  },
  {
    "id": "ci-cd-q-17",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Cobertura y mutation testing» en pruebas y calidad?",
    "options": [
      "Mide qué código fue ejecutado y si las aserciones detectan cambios dañinos en ejecución.",
      "Clasifica inestabilidad como defecto del sistema de evidencia, no como ruido aceptable.",
      "Valida historias críticas sin convertir toda combinación en un caso frágil al evaluar.",
      "Levanta bases y dependencias desechables para pruebas de integración reproducibles."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cobertura y mutation testing (Pruebas y calidad): Mide qué código fue ejecutado y si las aserciones detectan cambios dañinos.",
    "topic": "Pruebas y calidad",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-18",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Flaky tests»?",
    "options": [
      "Valida historias críticas sin convertir toda combinación en un caso frágil de forma clara.",
      "Clasifica inestabilidad como defecto del sistema de evidencia, no como ruido aceptable.",
      "Mide qué código fue ejecutado y si las aserciones detectan cambios dañinos en el flujo.",
      "Intercambia identidad del job por acceso temporal sin secretos cloud permanentes al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Flaky tests (Pruebas y calidad): Clasifica inestabilidad como defecto del sistema de evidencia, no como ruido aceptable.",
    "topic": "Pruebas y calidad",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-19",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Build reproducible»?",
    "options": [
      "Reutiliza entradas por claves correctas sin confundir caché con artefacto final al evaluar.",
      "Promueve el mismo binario o imagen entre entornos en lugar de reconstruir con precisión.",
      "Produce el mismo resultado desde fuente y dependencias fijadas manteniendo consistencia.",
      "Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Build reproducible (Builds y artefactos): Produce el mismo resultado desde fuente y dependencias fijadas.",
    "topic": "Builds y artefactos",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-20",
    "collectionId": "ci-cd",
    "question": "Respecto a builds y artefactos en CI/CD, ¿cuál es el propósito de «Lockfiles y dependencias»?",
    "options": [
      "Reutiliza entradas por claves correctas sin confundir caché con artefacto final al evaluar.",
      "Promueve el mismo binario o imagen entre entornos en lugar de reconstruir con precisión.",
      "Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir.",
      "Controla resolución transitiva y registra exactamente qué entró al build de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Lockfiles y dependencias (Builds y artefactos): Controla resolución transitiva y registra exactamente qué entró al build.",
    "topic": "Builds y artefactos",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-21",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Builds y artefactos), ¿qué función técnica cumple «Caché de dependencias»?",
    "options": [
      "Reutiliza entradas por claves correctas sin confundir caché con artefacto final en ejecución.",
      "Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir.",
      "Promueve el mismo binario o imagen entre entornos en lugar de reconstruir con precisión.",
      "Controla resolución transitiva y registra exactamente qué entró al build de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Caché de dependencias (Builds y artefactos): Reutiliza entradas por claves correctas sin confundir caché con artefacto final.",
    "topic": "Builds y artefactos",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-22",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Artefactos inmutables» en builds y artefactos?",
    "options": [
      "Reutiliza entradas por claves correctas sin confundir caché con artefacto final al evaluar.",
      "Promueve el mismo binario o imagen entre entornos en lugar de reconstruir con precisión.",
      "Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir.",
      "Controla resolución transitiva y registra exactamente qué entró al build de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Artefactos inmutables (Builds y artefactos): Promueve el mismo binario o imagen entre entornos en lugar de reconstruir.",
    "topic": "Builds y artefactos",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-23",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Versiones, tags y digests»?",
    "options": [
      "Reutiliza entradas por claves correctas sin confundir caché con artefacto final al operar.",
      "Promueve el mismo binario o imagen entre entornos en lugar de reconstruir en ejecución.",
      "Relaciona una identidad legible con un hash que no cambia bajo condiciones productivas.",
      "Controla resolución transitiva y registra exactamente qué entró al build con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Versiones, tags y digests (Builds y artefactos): Relaciona una identidad legible con un hash que no cambia.",
    "topic": "Builds y artefactos",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-24",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Retención y provenance»?",
    "options": [
      "Reutiliza entradas por claves correctas sin confundir caché con artefacto final en ejecución.",
      "Promueve el mismo binario o imagen entre entornos en lugar de reconstruir de forma segura.",
      "Controla resolución transitiva y registra exactamente qué entró al build dentro del flujo.",
      "Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Retención y provenance (Builds y artefactos): Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir.",
    "topic": "Builds y artefactos",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-25",
    "collectionId": "ci-cd",
    "question": "Respecto a seguridad de supply chain en CI/CD, ¿cuál es el propósito de «Permisos mínimos del workflow»?",
    "options": [
      "Reduce lo que un job comprometido puede leer o modificar respetando las restricciones de tipo.",
      "Intercambia identidad del job por acceso temporal sin secretos cloud permanentes al operar.",
      "Estructura controles de provenance y resistencia a manipulación según el riesgo al operar.",
      "Enumera componentes del artefacto para evaluar vulnerabilidades y licencias al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Permisos mínimos del workflow (Seguridad de supply chain): Reduce lo que un job comprometido puede leer o modificar.",
    "topic": "Seguridad de supply chain",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-26",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Seguridad de supply chain), ¿qué función técnica cumple «OIDC y credenciales efímeras»?",
    "options": [
      "Estructura controles de provenance y resistencia a manipulación según el riesgo con precisión.",
      "Intercambia identidad del job por acceso temporal sin secretos cloud permanentes al operar.",
      "Enumera componentes del artefacto para evaluar vulnerabilidades y licencias de forma clara.",
      "Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "OIDC y credenciales efímeras (Seguridad de supply chain): Intercambia identidad del job por acceso temporal sin secretos cloud permanentes.",
    "topic": "Seguridad de supply chain",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-27",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «SBOM» en seguridad de supply chain?",
    "options": [
      "Intercambia identidad del job por acceso temporal sin secretos cloud permanentes al operar.",
      "Estructura controles de provenance y resistencia a manipulación según el riesgo al operar.",
      "Enumera componentes del artefacto para evaluar vulnerabilidades y licencias en el flujo.",
      "Detecta riesgo introducido por cambios en dependencias antes del merge dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "SBOM (Seguridad de supply chain): Enumera componentes del artefacto para evaluar vulnerabilidades y licencias.",
    "topic": "Seguridad de supply chain",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-28",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Firma y attestations»?",
    "options": [
      "Intercambia identidad del job por acceso temporal sin secretos cloud permanentes al operar.",
      "Estructura controles de provenance y resistencia a manipulación según el riesgo al operar.",
      "Enumera componentes del artefacto para evaluar vulnerabilidades y licencias en el flujo.",
      "Permite verificar quién produjo un artefacto y bajo qué proceso dentro de la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Firma y attestations (Seguridad de supply chain): Permite verificar quién produjo un artefacto y bajo qué proceso.",
    "topic": "Seguridad de supply chain",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-29",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Dependency review»?",
    "options": [
      "Detecta riesgo introducido por cambios en dependencias antes del merge sin degradar el flujo.",
      "Intercambia identidad del job por acceso temporal sin secretos cloud permanentes al operar.",
      "Estructura controles de provenance y resistencia a manipulación según el riesgo al operar.",
      "Enumera componentes del artefacto para evaluar vulnerabilidades y licencias al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dependency review (Seguridad de supply chain): Detecta riesgo introducido por cambios en dependencias antes del merge.",
    "topic": "Seguridad de supply chain",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-30",
    "collectionId": "ci-cd",
    "question": "Respecto a seguridad de supply chain en CI/CD, ¿cuál es el propósito de «SLSA y niveles de confianza»?",
    "options": [
      "Intercambia identidad del job por acceso temporal sin secretos cloud permanentes en el flujo.",
      "Estructura controles de provenance y resistencia a manipulación según el riesgo al operar.",
      "Enumera componentes del artefacto para evaluar vulnerabilidades y licencias con precisión.",
      "Detecta riesgo introducido por cambios en dependencias antes del merge de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SLSA y niveles de confianza (Seguridad de supply chain): Estructura controles de provenance y resistencia a manipulación según el riesgo.",
    "topic": "Seguridad de supply chain",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-31",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Promoción y políticas), ¿qué función técnica cumple «Checks requeridos»?",
    "options": [
      "Pide una decisión humana donde el riesgo supera la automatización disponible con precisión.",
      "Separa desplegar código de exponer comportamiento sin usarlas como permiso de seguridad.",
      "Convierte nombres estables de resultados en condiciones de integración dentro del flujo.",
      "Evalúa reglas versionadas sobre artefactos, infraestructura o evidencia de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Checks requeridos (Promoción y políticas): Convierte nombres estables de resultados en condiciones de integración.",
    "topic": "Promoción y políticas",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-32",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Approvals y separación de funciones» en promoción y políticas?",
    "options": [
      "Separa desplegar código de exponer comportamiento sin usarlas como permiso de seguridad.",
      "Evalúa reglas versionadas sobre artefactos, infraestructura o evidencia de forma segura.",
      "Convierte nombres estables de resultados en condiciones de integración dentro del flujo.",
      "Pide una decisión humana donde el riesgo supera la automatización disponible al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Approvals y separación de funciones (Promoción y políticas): Pide una decisión humana donde el riesgo supera la automatización disponible.",
    "topic": "Promoción y políticas",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-33",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Environments»?",
    "options": [
      "Agrupa secretos, protecciones e historial por destino de promoción dentro de la aplicación.",
      "Pide una decisión humana donde el riesgo supera la automatización disponible al operar.",
      "Separa desplegar código de exponer comportamiento sin usarlas como permiso de seguridad.",
      "Evalúa reglas versionadas sobre artefactos, infraestructura o evidencia con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Environments (Promoción y políticas): Agrupa secretos, protecciones e historial por destino de promoción.",
    "topic": "Promoción y políticas",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-34",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Feature flags»?",
    "options": [
      "Pide una decisión humana donde el riesgo supera la automatización disponible con precisión.",
      "Separa desplegar código de exponer comportamiento sin usarlas como permiso de seguridad.",
      "Evalúa reglas versionadas sobre artefactos, infraestructura o evidencia de forma segura.",
      "Convierte nombres estables de resultados en condiciones de integración dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Feature flags (Promoción y políticas): Separa desplegar código de exponer comportamiento sin usarlas como permiso de seguridad.",
    "topic": "Promoción y políticas",
    "difficulty": "intermedio"
  },
  {
    "id": "ci-cd-q-35",
    "collectionId": "ci-cd",
    "question": "Respecto a promoción y políticas en CI/CD, ¿cuál es el propósito de «Policy as code»?",
    "options": [
      "Pide una decisión humana donde el riesgo supera la automatización disponible con precisión.",
      "Separa desplegar código de exponer comportamiento sin usarlas como permiso de seguridad.",
      "Evalúa reglas versionadas sobre artefactos, infraestructura o evidencia de forma segura.",
      "Convierte nombres estables de resultados en condiciones de integración dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Policy as code (Promoción y políticas): Evalúa reglas versionadas sobre artefactos, infraestructura o evidencia.",
    "topic": "Promoción y políticas",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-36",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Promoción y políticas), ¿qué función técnica cumple «Handoff a Deployment»?",
    "options": [
      "Separa desplegar código de exponer comportamiento sin usarlas como permiso de seguridad en el flujo.",
      "Pide una decisión humana donde el riesgo supera la automatización disponible de modo predecible.",
      "Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir al operar.",
      "Entrega digest, configuración compatible y evidencia sin decidir por sí solo cómo recibe tráfico."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Handoff a Deployment (Promoción y políticas): Entrega digest, configuración compatible y evidencia sin decidir por sí solo cómo recibe tráfico.",
    "topic": "Promoción y políticas",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-37",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Logs estructurados y anotaciones» en operación del pipeline?",
    "options": [
      "Hace accionable un fallo sin obligar a leer miles de líneas sin contexto de forma clara.",
      "Centraliza controles conservando entradas, outputs, versiones y permisos explícitos.",
      "Relaciona minutos, paralelismo y caché con la velocidad de feedback obtenida al operar.",
      "Mide lead time, frecuencia, fallos y recuperación sin premiar volumen vacío al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Logs estructurados y anotaciones (Operación del pipeline): Hace accionable un fallo sin obligar a leer miles de líneas sin contexto.",
    "topic": "Operación del pipeline",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-38",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Métricas de flujo»?",
    "options": [
      "Centraliza controles conservando entradas, outputs, versiones y permisos explícitos al operar.",
      "Mide lead time, frecuencia, fallos y recuperación sin premiar volumen vacío en el flujo.",
      "Relaciona minutos, paralelismo y caché con la velocidad de feedback obtenida al evaluar.",
      "Hace accionable un fallo sin obligar a leer miles de líneas sin contexto de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Métricas de flujo (Operación del pipeline): Mide lead time, frecuencia, fallos y recuperación sin premiar volumen vacío.",
    "topic": "Operación del pipeline",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-39",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Costo de runners»?",
    "options": [
      "Centraliza controles conservando entradas, outputs, versiones y permisos explícitos al operar.",
      "Mide lead time, frecuencia, fallos y recuperación sin premiar volumen vacío en el flujo.",
      "Relaciona minutos, paralelismo y caché con la velocidad de feedback obtenida al evaluar.",
      "Hace accionable un fallo sin obligar a leer miles de líneas sin contexto de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Costo de runners (Operación del pipeline): Relaciona minutos, paralelismo y caché con la velocidad de feedback obtenida.",
    "topic": "Operación del pipeline",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-40",
    "collectionId": "ci-cd",
    "question": "Respecto a operación del pipeline en CI/CD, ¿cuál es el propósito de «Reintentos de jobs»?",
    "options": [
      "Centraliza controles conservando entradas, outputs, versiones y permisos explícitos al operar.",
      "Relaciona minutos, paralelismo y caché con la velocidad de feedback obtenida al evaluar.",
      "Mide lead time, frecuencia, fallos y recuperación sin premiar volumen vacío en el flujo.",
      "Repite solo fallos transitorios sin ocultar pruebas deterministas rotas de forma segura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Reintentos de jobs (Operación del pipeline): Repite solo fallos transitorios sin ocultar pruebas deterministas rotas.",
    "topic": "Operación del pipeline",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-41",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Operación del pipeline), ¿qué función técnica cumple «Reutilización de workflows»?",
    "options": [
      "Centraliza controles conservando entradas, outputs, versiones y permisos explícitos al operar.",
      "Relaciona minutos, paralelismo y caché con la velocidad de feedback obtenida al operar.",
      "Mide lead time, frecuencia, fallos y recuperación sin premiar volumen vacío al operar.",
      "Hace accionable un fallo sin obligar a leer miles de líneas sin contexto al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reutilización de workflows (Operación del pipeline): Centraliza controles conservando entradas, outputs, versiones y permisos explícitos.",
    "topic": "Operación del pipeline",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-42",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Diagnóstico de pipeline» en operación del pipeline?",
    "options": [
      "Centraliza controles conservando entradas, outputs, versiones y permisos explícitos de forma segura.",
      "Distingue error de código, infraestructura, dependencia, credencial y política antes de corregir.",
      "Relaciona minutos, paralelismo y caché con la velocidad de feedback obtenida de modo predecible.",
      "Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Diagnóstico de pipeline (Operación del pipeline): Distingue error de código, infraestructura, dependencia, credencial y política antes de corregir.",
    "topic": "Operación del pipeline",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-43",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Detectar el cambio»?",
    "options": [
      "La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante al operar.",
      "Firma y provenance permiten rechazar binarios que no nacieron del flujo autorizado al operar.",
      "El trigger incluye solo eventos y rutas que pueden cambiar el producto dentro del flujo.",
      "La nube confía en condiciones concretas de la ejecución, no en una clave compartida."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Detectar el cambio (Caso en acción): El trigger incluye solo eventos y rutas que pueden cambiar el producto.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-44",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Feedback temprano»?",
    "options": [
      "La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante al operar.",
      "Firma y provenance permiten rechazar binarios que no nacieron del flujo autorizado al operar.",
      "La nube confía en condiciones concretas de la ejecución, no en una clave compartida al operar.",
      "La velocidad importa porque un hallazgo tardío multiplica el costo de contexto al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Feedback temprano (Caso en acción): La velocidad importa porque un hallazgo tardío multiplica el costo de contexto.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-45",
    "collectionId": "ci-cd",
    "question": "Respecto a caso en acción en CI/CD, ¿cuál es el propósito de «Probar fronteras»?",
    "options": [
      "Las pruebas profundas se ejecutan sobre dependencias controladas, no sobre residuos de otro job al operar.",
      "Deployment decide configuración, rollout, tráfico y rollback a partir de este artefacto al operar.",
      "La nube confía en condiciones concretas de la ejecución, no en una clave compartida al operar.",
      "La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Probar fronteras (Caso en acción): Las pruebas profundas se ejecutan sobre dependencias controladas, no sobre residuos de otro job.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-46",
    "collectionId": "ci-cd",
    "question": "En CI/CD (Caso en acción), ¿qué función técnica cumple «Construir una vez»?",
    "options": [
      "Una política fallida detiene la promoción y conserva evidencia para corregir al operar.",
      "La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante.",
      "La velocidad importa porque un hallazgo tardío multiplica el costo de contexto.",
      "El trigger incluye solo eventos y rutas que pueden cambiar el producto en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Construir una vez (Caso en acción): La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-47",
    "collectionId": "ci-cd",
    "question": "Dentro de CI/CD, ¿cómo opera el mecanismo de «Examinar supply chain» en caso en acción?",
    "options": [
      "La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante al operar.",
      "Firma y provenance permiten rechazar binarios que no nacieron del flujo autorizado al operar.",
      "Una política fallida detiene la promoción y conserva evidencia para corregir al evaluar.",
      "La nube confía en condiciones concretas de la ejecución, no en una clave compartida."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Examinar supply chain (Caso en acción): Una política fallida detiene la promoción y conserva evidencia para corregir.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-48",
    "collectionId": "ci-cd",
    "question": "Al trabajar con CI/CD, ¿qué responsabilidad define a «Autenticar sin secreto largo»?",
    "options": [
      "La velocidad importa porque un hallazgo tardío multiplica el costo de contexto al operar.",
      "Una política fallida detiene la promoción y conserva evidencia para corregir al operar.",
      "La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante.",
      "La nube confía en condiciones concretas de la ejecución, no en una clave compartida."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Autenticar sin secreto largo (Caso en acción): La nube confía en condiciones concretas de la ejecución, no en una clave compartida.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-49",
    "collectionId": "ci-cd",
    "question": "En la arquitectura de CI/CD, ¿qué caracteriza técnicamente a «Firmar y atestiguar»?",
    "options": [
      "Firma y provenance permiten rechazar binarios que no nacieron del flujo autorizado.",
      "Una política fallida detiene la promoción y conserva evidencia para corregir.",
      "La velocidad importa porque un hallazgo tardío multiplica el costo de contexto.",
      "El trigger incluye solo eventos y rutas que pueden cambiar el producto al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Firmar y atestiguar (Caso en acción): Firma y provenance permiten rechazar binarios que no nacieron del flujo autorizado.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "ci-cd-q-50",
    "collectionId": "ci-cd",
    "question": "Respecto a caso en acción en CI/CD, ¿cuál es el propósito de «Entregar a Deployment»?",
    "options": [
      "La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante al operar.",
      "Deployment decide configuración, rollout, tráfico y rollback a partir de este artefacto.",
      "Firma y provenance permiten rechazar binarios que no nacieron del flujo autorizado al operar.",
      "La nube confía en condiciones concretas de la ejecución, no en una clave compartida."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Entregar a Deployment (Caso en acción): Deployment decide configuración, rollout, tráfico y rollback a partir de este artefacto.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  }
];
