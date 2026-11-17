import type { QuizQuestion } from "@/data/quizTypes";

export const deploymentQuestions: QuizQuestion[] = [
  {
    "id": "deployment-q-01",
    "collectionId": "deployment",
    "question": "En Deployment (Fundamentos de entrega de software), ¿qué función técnica cumple «Qué es un deployment»?",
    "options": [
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real al operar.",
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente.",
      "Mide frecuencia de releases útiles sin convertir cantidad en objetivo aislado al operar.",
      "Distingue poner código en producción de exponer una funcionalidad a usuarios al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Qué es un deployment (Fundamentos de entrega de software): Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-02",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Build, release y run» en fundamentos de entrega de software?",
    "options": [
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Separa compilación de artefactos, combinación con configuración y ejecución en runtime.",
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente al operar.",
      "Mide frecuencia de releases útiles sin convertir cantidad en objetivo aislado al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Build, release y run (Fundamentos de entrega de software): Separa compilación de artefactos, combinación con configuración y ejecución en runtime.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-03",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Deploy vs release»?",
    "options": [
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.",
      "Distingue poner código en producción de exponer una funcionalidad a usuarios al evaluar.",
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deploy vs release (Fundamentos de entrega de software): Distingue poner código en producción de exponer una funcionalidad a usuarios.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-04",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Artefacto inmutable»?",
    "options": [
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real al operar.",
      "Separa compilación de artefactos, combinación con configuración y ejecución en runtime.",
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Promueve exactamente los mismos bytes entre entornos y los identifica por versión o digest."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Artefacto inmutable (Fundamentos de entrega de software): Promueve exactamente los mismos bytes entre entornos y los identifica por versión o digest.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-05",
    "collectionId": "deployment",
    "question": "Respecto a fundamentos de entrega de software en Deployment, ¿cuál es el propósito de «Reproducible builds»?",
    "options": [
      "Produce resultados equivalentes desde fuentes y dependencias fijadas en un entorno controlado al operar.",
      "Separa compilación de artefactos, combinación con configuración y ejecución en runtime al operar.",
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real al operar.",
      "Promueve exactamente los mismos bytes entre entornos y los identifica por versión o digest."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reproducible builds (Fundamentos de entrega de software): Produce resultados equivalentes desde fuentes y dependencias fijadas en un entorno controlado.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-06",
    "collectionId": "deployment",
    "question": "En Deployment (Fundamentos de entrega de software), ¿qué función técnica cumple «Release versioning»?",
    "options": [
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Relaciona versiones, commits, changelog, compatibilidad y rollback durante la ejecución.",
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.",
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Release versioning (Fundamentos de entrega de software): Relaciona versiones, commits, changelog, compatibilidad y rollback.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-07",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Entornos» en fundamentos de entrega de software?",
    "options": [
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.",
      "Separa desarrollo, preview, staging y producción por propósito y riesgo de forma segura.",
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Entornos (Fundamentos de entrega de software): Separa desarrollo, preview, staging y producción por propósito y riesgo.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-08",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Promotion»?",
    "options": [
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.",
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente al operar.",
      "Mueve un artefacto verificado hacia entornos más críticos sin reconstruirlo en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Promotion (Fundamentos de entrega de software): Mueve un artefacto verificado hacia entornos más críticos sin reconstruirlo.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-09",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Change failure rate»?",
    "options": [
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente de forma clara.",
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.",
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Separa compilación de artefactos, combinación con configuración y ejecución en runtime."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Change failure rate (Fundamentos de entrega de software): Mide qué proporción de cambios requiere reparación, rollback o causa incidente.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-10",
    "collectionId": "deployment",
    "question": "Respecto a fundamentos de entrega de software en Deployment, ¿cuál es el propósito de «Deployment frequency»?",
    "options": [
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Mide frecuencia de releases útiles sin convertir cantidad en objetivo aislado al operar.",
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.",
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Deployment frequency (Fundamentos de entrega de software): Mide frecuencia de releases útiles sin convertir cantidad en objetivo aislado.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-11",
    "collectionId": "deployment",
    "question": "En Deployment (Fundamentos de entrega de software), ¿qué función técnica cumple «Lead time for changes»?",
    "options": [
      "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real al operar.",
      "Separa compilación de artefactos, combinación con configuración y ejecución en runtime.",
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Promueve exactamente los mismos bytes entre entornos y los identifica por versión o digest."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Lead time for changes (Fundamentos de entrega de software): Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-12",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Mean time to restore» en fundamentos de entrega de software?",
    "options": [
      "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes al operar.",
      "Mide qué proporción de cambios requiere reparación, rollback o causa incidente al operar.",
      "Mide frecuencia de releases útiles sin convertir cantidad en objetivo aislado al operar.",
      "Mide velocidad para recuperar servicio tras un cambio fallido manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Mean time to restore (Fundamentos de entrega de software): Mide velocidad para recuperar servicio tras un cambio fallido.",
    "topic": "Fundamentos de entrega de software",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-13",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Config externa»?",
    "options": [
      "Mantiene URLs, flags y límites fuera del código para variar por entorno sin degradar el flujo.",
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia al operar.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Config externa (Configuración, secretos y entornos): Mantiene URLs, flags y límites fuera del código para variar por entorno.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-14",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Environment variables»?",
    "options": [
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia en ejecución.",
      "Inyectan strings al proceso y requieren validación, defaults y cuidado con herencia y logs.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Environment variables (Configuración, secretos y entornos): Inyectan strings al proceso y requieren validación, defaults y cuidado con herencia y logs.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-15",
    "collectionId": "deployment",
    "question": "Respecto a configuración, secretos y entornos en Deployment, ¿cuál es el propósito de «Configuration files»?",
    "options": [
      "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad al operar.",
      "Reduce diferencias relevantes entre staging y producción sin exigir que todo sea idéntico.",
      "Representa estructuras mayores, pero necesitan distribución, permisos y estrategia de reload.",
      "Inyectan strings al proceso y requieren validación, defaults y cuidado con herencia y logs."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Configuration files (Configuración, secretos y entornos): Representan estructuras mayores, pero necesitan distribución, permisos y estrategia de reload.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-16",
    "collectionId": "deployment",
    "question": "En Deployment (Configuración, secretos y entornos), ¿qué función técnica cumple «Secret stores»?",
    "options": [
      "Reduce diferencias relevantes entre staging y producción sin exigir que todo sea idéntico al operar.",
      "Inyectan strings al proceso y requieren validación, defaults y cuidado con herencia y logs al operar.",
      "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad al operar.",
      "Entregan credenciales bajo identidad y política en vez de guardarlas en repositorios o imágenes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Secret stores (Configuración, secretos y entornos): Entregan credenciales bajo identidad y política en vez de guardarlas en repositorios o imágenes.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "básico"
  },
  {
    "id": "deployment-q-17",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Secret rotation» en configuración, secretos y entornos?",
    "options": [
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia en ejecución.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar.",
      "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Secret rotation (Configuración, secretos y entornos): Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-18",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Workload identity»?",
    "options": [
      "Reduce diferencias relevantes entre staging y producción sin exigir que todo sea idéntico al operar.",
      "Obtiene credenciales temporales basadas en identidad del runtime en lugar de secretos estáticos.",
      "Inyectan strings al proceso y requieren validación, defaults y cuidado con herencia y logs al operar.",
      "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Workload identity (Configuración, secretos y entornos): Obtiene credenciales temporales basadas en identidad del runtime en lugar de secretos estáticos.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-19",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Parity de entornos»?",
    "options": [
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia en el flujo.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar.",
      "Reduce diferencias relevantes entre staging y producción sin exigir que todo sea idéntico.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Parity de entornos (Configuración, secretos y entornos): Reduce diferencias relevantes entre staging y producción sin exigir que todo sea idéntico.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-20",
    "collectionId": "deployment",
    "question": "Respecto a configuración, secretos y entornos en Deployment, ¿cuál es el propósito de «Preview environments»?",
    "options": [
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia en ejecución.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar.",
      "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Preview environments (Configuración, secretos y entornos): Crea un entorno temporal por cambio para revisión integrada y lo elimina después.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-21",
    "collectionId": "deployment",
    "question": "En Deployment (Configuración, secretos y entornos), ¿qué función técnica cumple «Test data»?",
    "options": [
      "Evita usar información sensible y permite escenarios reproducibles y aislados de forma segura.",
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia al operar.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Test data (Configuración, secretos y entornos): Evita usar información sensible y permite escenarios reproducibles y aislados.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-22",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Feature flags» en configuración, secretos y entornos?",
    "options": [
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia en ejecución.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar.",
      "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Feature flags (Configuración, secretos y entornos): Desacoplan deploy de release y permiten cohortes, kill switches y rollout gradual.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-23",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Configuración dinámica»?",
    "options": [
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia al evaluar.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar.",
      "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Configuración dinámica (Configuración, secretos y entornos): Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-24",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Drift de configuración»?",
    "options": [
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia al operar.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después al operar.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual al operar.",
      "Aparece cuando cambios manuales separan el entorno real del estado declarado al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Drift de configuración (Configuración, secretos y entornos): Aparece cuando cambios manuales separan el entorno real del estado declarado.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-25",
    "collectionId": "deployment",
    "question": "Respecto a configuración, secretos y entornos en Deployment, ¿cuál es el propósito de «Promotion de configuración»?",
    "options": [
      "Versiona y revisa configuración crítica igual que el código respetando las invariantes.",
      "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia.",
      "Crea un entorno temporal por cambio para revisión integrada y lo elimina después.",
      "Desacoplan deploy de release y permite cohortes, kill switches y rollout gradual."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Promotion de configuración (Configuración, secretos y entornos): Versiona y revisa configuración crítica igual que el código.",
    "topic": "Configuración, secretos y entornos",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-26",
    "collectionId": "deployment",
    "question": "En Deployment (Estrategias de deployment y release), ¿qué función técnica cumple «Recreate deployment»?",
    "options": [
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Detiene la versión anterior antes de iniciar la nueva dentro de la arquitectura activa.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Recreate deployment (Estrategias de deployment y release): Detiene la versión anterior antes de iniciar la nueva; es simple pero introduce downtime.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-27",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Rolling update» en estrategias de deployment y release?",
    "options": [
      "Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto al operar.",
      "Expone una fracción de tráfico y aumenta solo si métricas y pruebas permanecen saludables.",
      "Reemplaza instancias progresivamente manteniendo capacidad dentro de max surge y unavailable.",
      "Restaura una versión conocida y debe considerar datos, configuración y tareas en progreso."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Rolling update (Estrategias de deployment y release): Reemplaza instancias progresivamente manteniendo capacidad dentro de max surge y unavailable.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-28",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Blue-green deployment»?",
    "options": [
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar.",
      "Mantiene dos entornos completos y cambia tráfico al candidato verificado de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Blue-green deployment (Estrategias de deployment y release): Mantiene dos entornos completos y cambia tráfico al candidato verificado.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-29",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Canary deployment»?",
    "options": [
      "Expone una fracción de tráfico y aumenta solo si métricas y pruebas permanecen saludables al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Canary deployment (Estrategias de deployment y release): Expone una fracción de tráfico y aumenta solo si métricas y pruebas permanecen saludables.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-30",
    "collectionId": "deployment",
    "question": "Respecto a estrategias de deployment y release en Deployment, ¿cuál es el propósito de «A/B testing»?",
    "options": [
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Asigna cohortes estables a variantes para medir una hipótesis de producto con precisión.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "A/B testing (Estrategias de deployment y release): Asigna cohortes estables a variantes para medir una hipótesis de producto.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-31",
    "collectionId": "deployment",
    "question": "En Deployment (Estrategias de deployment y release), ¿qué función técnica cumple «Shadow traffic»?",
    "options": [
      "Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto al operar.",
      "Expone una fracción de tráfico y aumenta solo si métricas y pruebas permanecen saludables.",
      "Duplica solicitudes hacia la nueva versión sin usar su respuesta para validar comportamiento.",
      "Restaura una versión conocida y debe considerar datos, configuración y tareas en progreso."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Shadow traffic (Estrategias de deployment y release): Duplica solicitudes hacia la nueva versión sin usar su respuesta para validar comportamiento.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-32",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Ring deployment» en estrategias de deployment y release?",
    "options": [
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar.",
      "Promueve por grupos de usuarios o entornos con riesgo creciente dentro de la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Ring deployment (Estrategias de deployment y release): Promueve por grupos de usuarios o entornos con riesgo creciente.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-33",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Feature rollout»?",
    "options": [
      "Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto al operar.",
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Feature rollout (Estrategias de deployment y release): Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-34",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Dark launch»?",
    "options": [
      "Expone una fracción de tráfico y aumenta solo si métricas y pruebas permanecen saludables al operar.",
      "Despliega capacidad sin exponerla públicamente para calentar, validar o recibir tráfico interno.",
      "Restaura una versión conocida y debe considerar datos, configuración y tareas en progreso al operar.",
      "Reemplaza instancias progresivamente manteniendo capacidad dentro de max surge y unavailable."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dark launch (Estrategias de deployment y release): Despliega capacidad sin exponerla públicamente para calentar, validar o recibir tráfico interno.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "intermedio"
  },
  {
    "id": "deployment-q-35",
    "collectionId": "deployment",
    "question": "Respecto a estrategias de deployment y release en Deployment, ¿cuál es el propósito de «Traffic splitting»?",
    "options": [
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Distribuye requests por peso, header, cookie, región u otra política de modo predecible.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Traffic splitting (Estrategias de deployment y release): Distribuye requests por peso, header, cookie, región u otra política.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-36",
    "collectionId": "deployment",
    "question": "En Deployment (Estrategias de deployment y release), ¿qué función técnica cumple «Session affinity»?",
    "options": [
      "Despliega capacidad sin exponerla públicamente para calentar, validar o recibir tráfico interno al evaluar.",
      "Reemplaza instancias progresivamente manteniendo capacidad dentro de max surge y unavailable al evaluar.",
      "Duplica solicitudes hacia la nueva versión sin usar su respuesta para validar comportamiento al evaluar.",
      "Mantiene clientes en un backend cuando el estado local lo exige, con costos para balanceo y resiliencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Session affinity (Estrategias de deployment y release): Mantiene clientes en un backend cuando el estado local lo exige, con costos para balanceo y resiliencia.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-37",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Rollback» en estrategias de deployment y release?",
    "options": [
      "Restaura una versión conocida y debe considerar datos, configuración y tareas en progreso al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Rollback (Estrategias de deployment y release): Restaura una versión conocida y debe considerar datos, configuración y tareas en progreso.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-38",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Roll forward»?",
    "options": [
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Asigna cohortes estables a variantes para medir una hipótesis de producto al operar.",
      "Avanza una versión al cumplirse salud, tiempo, tests y métricas definidos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Roll forward (Estrategias de deployment y release): Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-39",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Kill switch»?",
    "options": [
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Desactiva una función o integración rápidamente sin reconstruir dentro de la aplicación.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Kill switch (Estrategias de deployment y release): Desactiva una función o integración rápidamente sin reconstruir.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-40",
    "collectionId": "deployment",
    "question": "Respecto a estrategias de deployment y release en Deployment, ¿cuál es el propósito de «Automated promotion»?",
    "options": [
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar.",
      "Avanza una versión al cumplirse salud, tiempo, tests y métricas definidos con precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Automated promotion (Estrategias de deployment y release): Avanza una versión al cumplirse salud, tiempo, tests y métricas definidos.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-41",
    "collectionId": "deployment",
    "question": "En Deployment (Estrategias de deployment y release), ¿qué función técnica cumple «Automated rollback»?",
    "options": [
      "Aborta y retira tráfico cuando análisis o health checks cruzan límites durante la ejecución.",
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio.",
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Automated rollback (Estrategias de deployment y release): Aborta y retira tráfico cuando análisis o health checks cruzan límites.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-42",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Blast radius» en estrategias de deployment y release?",
    "options": [
      "Asigna cohortes estables a variantes para medir una hipótesis de producto al evaluar.",
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio.",
      "Avanza una versión al cumplirse salud, tiempo, tests y métricas definidos al operar.",
      "Mantiene dos entornos completos y cambia tráfico al candidato verificado al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Blast radius (Estrategias de deployment y release): Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-43",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «Deployment freeze»?",
    "options": [
      "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó al operar.",
      "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio al operar.",
      "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros al operar.",
      "Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deployment freeze (Estrategias de deployment y release): Suspende cambios en periodos de alto riesgo con excepciones y ownership claros.",
    "topic": "Estrategias de deployment y release",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-44",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «Kubernetes control plane»?",
    "options": [
      "Agrupa nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte en el flujo.",
      "Es la unidad de scheduling y comparte red y volumes entre uno o más containers al operar.",
      "Conserva identidad, orden y storage estable para workloads con estado sin perder estado.",
      "Acepta estado deseado y usa controllers para reconciliarlo continuamente de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Kubernetes control plane (Kubernetes y reconciliación): Acepta estado deseado y usa controllers para reconciliarlo continuamente.",
    "topic": "Kubernetes y reconciliación",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-45",
    "collectionId": "deployment",
    "question": "Respecto a kubernetes y reconciliación en Deployment, ¿cuál es el propósito de «Namespaces de Kubernetes»?",
    "options": [
      "Agrupa nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte en ejecución.",
      "Es la unidad de scheduling y comparte red y volumes entre uno o más containers al operar.",
      "Acepta estado deseado y usa controllers para reconciliarlo continuamente con precisión.",
      "Conserva identidad, orden y storage estable para workloads con estado dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Namespaces de Kubernetes (Kubernetes y reconciliación): Agrupan nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte.",
    "topic": "Kubernetes y reconciliación",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-46",
    "collectionId": "deployment",
    "question": "En Deployment (Kubernetes y reconciliación), ¿qué función técnica cumple «Pod»?",
    "options": [
      "Agrupa nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte en ejecución.",
      "Es la unidad de scheduling y comparte red y volumes entre uno o más containers al operar.",
      "Acepta estado deseado y usa controllers para reconciliarlo continuamente de forma segura.",
      "Conserva identidad, orden y storage estable para workloads con estado de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pod (Kubernetes y reconciliación): Es la unidad de scheduling y comparte red y volumes entre uno o más containers.",
    "topic": "Kubernetes y reconciliación",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-47",
    "collectionId": "deployment",
    "question": "Dentro de Deployment, ¿cómo opera el mecanismo de «Deployment y ReplicaSet» en kubernetes y reconciliación?",
    "options": [
      "Agrupa nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte al evaluar.",
      "Es la unidad de scheduling y comparte red y volumes entre uno o más containers al operar.",
      "Versionan pod templates y mantiene replicas durante rolling updates de modo predecible.",
      "Acepta estado deseado y usa controllers para reconciliarlo continuamente con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Deployment y ReplicaSet (Kubernetes y reconciliación): Versionan pod templates y mantienen replicas durante rolling updates.",
    "topic": "Kubernetes y reconciliación",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-48",
    "collectionId": "deployment",
    "question": "Al trabajar con Deployment, ¿qué responsabilidad define a «StatefulSet»?",
    "options": [
      "Agrupa nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte en el flujo.",
      "Es la unidad de scheduling y comparte red y volumes entre uno o más containers al operar.",
      "Acepta estado deseado y usa controllers para reconciliarlo continuamente de forma clara.",
      "Conserva identidad, orden y storage estable para workloads con estado sin perder estado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "StatefulSet (Kubernetes y reconciliación): Conserva identidad, orden y storage estable para workloads con estado.",
    "topic": "Kubernetes y reconciliación",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-49",
    "collectionId": "deployment",
    "question": "En la arquitectura de Deployment, ¿qué caracteriza técnicamente a «DaemonSet»?",
    "options": [
      "Ejecuta una copia por node elegible para agentes de infraestructura dentro de la aplicación.",
      "Agrupa nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte al operar.",
      "Es la unidad de scheduling y comparte red y volumes entre uno o más containers al operar.",
      "Acepta estado deseado y usa controllers para reconciliarlo continuamente en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "DaemonSet (Kubernetes y reconciliación): Ejecuta una copia por node elegible para agentes de infraestructura.",
    "topic": "Kubernetes y reconciliación",
    "difficulty": "avanzado"
  },
  {
    "id": "deployment-q-50",
    "collectionId": "deployment",
    "question": "Respecto a kubernetes y reconciliación en Deployment, ¿cuál es el propósito de «Job»?",
    "options": [
      "Agrupa nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte en el flujo.",
      "Ejecuta trabajo finito hasta completar con políticas de reintento sin degradar el flujo.",
      "Es la unidad de scheduling y comparte red y volumes entre uno o más containers al operar.",
      "Acepta estado deseado y usa controllers para reconciliarlo continuamente de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Job (Kubernetes y reconciliación): Ejecuta trabajo finito hasta completar con políticas de reintento.",
    "topic": "Kubernetes y reconciliación",
    "difficulty": "avanzado"
  }
];
