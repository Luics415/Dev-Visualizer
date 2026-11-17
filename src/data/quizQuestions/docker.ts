import type { QuizQuestion } from "@/data/quizTypes";

export const dockerQuestions: QuizQuestion[] = [
  {
    "id": "docker-q-01",
    "collectionId": "docker",
    "question": "En Docker (Fundamentos de contenedores), ¿qué función técnica cumple «Qué problema resuelve Docker»?",
    "options": [
      "Empaqueta aplicación, dependencias y configuración de runtime para reducir diferencias entre desarrollo, CI y producción.",
      "Una imagen conserva userspace y dependencias, pero todavía depende de arquitectura, kernel y capacidades disponibles.",
      "Favorece responsabilidades claras, señales correctas y escalado independiente, aunque no es una regla física absoluta.",
      "La imagen es una plantilla inmutable; el contenedor es una instancia ejecutable con estado efímero adicional al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Qué problema resuelve Docker (Fundamentos de contenedores): Empaqueta aplicación, dependencias y configuración de runtime para reducir diferencias entre desarrollo, CI y producción.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-02",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «Contenedor frente a máquina virtual» en fundamentos de contenedores?",
    "options": [
      "Una imagen conserva userspace y dependencias, pero todavía depende de arquitectura, kernel y capacidades disponibles al operar.",
      "Compara aislamiento por procesos y kernel compartido con virtualización completa de hardware y sistema operativo invitado.",
      "Favorece responsabilidades claras, señales correctas y escalado independiente, aunque no es una regla física absoluta.",
      "Empaqueta aplicación, dependencias y configuración de runtime para reducir diferencias entre desarrollo, CI y producción."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Contenedor frente a máquina virtual (Fundamentos de contenedores): Compara aislamiento por procesos y kernel compartido con virtualización completa de hardware y sistema operativo invitado.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-03",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «Imagen frente a contenedor»?",
    "options": [
      "Proceso de larga duración que coordina objetos Docker y delega la ejecución de contenedores al runtime al operar.",
      "Conjunto formado por daemon, API y CLI que construye imágenes y administra contenedores, redes y volúmenes.",
      "La imagen es una plantilla inmutable; el contenedor es una instancia ejecutable con estado efímero adicional.",
      "La CLI puede administrar un daemon distinto mediante contexts, SSH o endpoints protegidos por TLS al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Imagen frente a contenedor (Fundamentos de contenedores): La imagen es una plantilla inmutable; el contenedor es una instancia ejecutable con estado efímero adicional.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-04",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «Docker Engine»?",
    "options": [
      "Proceso de larga duración que coordina objetos Docker y delega la ejecución de contenedores al runtime al operar.",
      "La CLI puede administrar un daemon distinto mediante contexts, SSH o endpoints protegidos por TLS al operar.",
      "Namespaces separan vistas de PID, red, mounts, usuarios y otros recursos sin crear otro kernel en el flujo.",
      "Conjunto formado por daemon, API y CLI que construye imágenes y administra contenedores, redes y volúmenes."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Docker Engine (Fundamentos de contenedores): Conjunto formado por daemon, API y CLI que construye imágenes y administra contenedores, redes y volúmenes.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-05",
    "collectionId": "docker",
    "question": "Respecto a fundamentos de contenedores en Docker, ¿cuál es el propósito de «Docker CLI»?",
    "options": [
      "Cliente que traduce comandos como run, build o inspect en solicitudes a la API del daemon.",
      "Cgroups contabilizan y restringen CPU, memoria, PIDs e I/O consumidos por cada contenedor.",
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia.",
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Docker CLI (Fundamentos de contenedores): Cliente que traduce comandos como run, build o inspect en solicitudes a la API del daemon.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-06",
    "collectionId": "docker",
    "question": "En Docker (Fundamentos de contenedores), ¿qué función técnica cumple «Docker daemon»?",
    "options": [
      "La CLI puede administrar un daemon distinto mediante contexts, SSH o endpoints protegidos por TLS al operar.",
      "Proceso de larga duración que coordina objetos Docker y delega la ejecución de contenedores al runtime.",
      "Namespaces separan vistas de PID, red, mounts, usuarios y otros recursos sin crear otro kernel al operar.",
      "Cliente que traduce comandos como run, build o inspect en solicitudes a la API del daemon en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Docker daemon (Fundamentos de contenedores): Proceso de larga duración que coordina objetos Docker y delega la ejecución de contenedores al runtime.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-07",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «Cliente remoto» en fundamentos de contenedores?",
    "options": [
      "Cliente que traduce comandos como run, build o inspect en solicitudes a la API del daemon al evaluar.",
      "Cgroups contabilizan y restringen CPU, memoria, PIDs e I/O consumidos por cada contenedor al operar.",
      "La CLI puede administrar un daemon distinto mediante contexts, SSH o endpoints protegidos por TLS.",
      "Namespaces separan vistas de PID, red, mounts, usuarios y otros recursos sin crear otro kernel."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cliente remoto (Fundamentos de contenedores): La CLI puede administrar un daemon distinto mediante contexts, SSH o endpoints protegidos por TLS.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-08",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «Aislamiento de procesos»?",
    "options": [
      "Cliente que traduce comandos como run, build o inspect en solicitudes a la API del daemon al operar.",
      "Cgroups contabilizan y restringen CPU, memoria, PIDs e I/O consumidos por cada contenedor al operar.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios al operar.",
      "Namespaces separan vistas de PID, red, mounts, usuarios y otros recursos sin crear otro kernel."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Aislamiento de procesos (Fundamentos de contenedores): Namespaces separan vistas de PID, red, mounts, usuarios y otros recursos sin crear otro kernel.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-09",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «Límites de recursos»?",
    "options": [
      "Cgroups contabilizan y restringen CPU, memoria, PIDs e I/O consumidos por cada contenedor.",
      "Cliente que traduce comandos como run, build o inspect en solicitudes a la API del daemon.",
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia.",
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Límites de recursos (Fundamentos de contenedores): cgroups contabilizan y restringen CPU, memoria, PIDs e I/O consumidos por cada contenedor.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-10",
    "collectionId": "docker",
    "question": "Respecto a fundamentos de contenedores en Docker, ¿cuál es el propósito de «Portabilidad y límites»?",
    "options": [
      "La imagen es una plantilla inmutable; el contenedor es una instancia ejecutable con estado efímero adicional al evaluar.",
      "Una imagen conserva userspace y dependencias, pero todavía depende de arquitectura, kernel y capacidades disponibles.",
      "Conecta código fuente, imagen versionada, registry y ejecución de la misma referencia en distintos entornos al operar.",
      "Conjunto formado por daemon, API y CLI que construye imágenes y administra contenedores, redes y volúmenes al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Portabilidad y límites (Fundamentos de contenedores): Una imagen conserva userspace y dependencias, pero todavía depende de arquitectura, kernel y capacidades disponibles.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-11",
    "collectionId": "docker",
    "question": "En Docker (Fundamentos de contenedores), ¿qué función técnica cumple «Contenedores efímeros»?",
    "options": [
      "Cliente que traduce comandos como run, build o inspect en solicitudes a la API del daemon.",
      "Cgroups contabilizan y restringen CPU, memoria, PIDs e I/O consumidos por cada contenedor.",
      "El filesystem writable del contenedor puede descartarse durante la ejecución del módulo.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Contenedores efímeros (Fundamentos de contenedores): El filesystem writable del contenedor puede descartarse; los datos importantes deben vivir en volúmenes o servicios externos.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-12",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «Aplicación de un solo proceso» en fundamentos de contenedores?",
    "options": [
      "La imagen es una plantilla inmutable; el contenedor es una instancia ejecutable con estado efímero adicional en el flujo.",
      "Conecta código fuente, imagen versionada, registry y ejecución de la misma referencia en distintos entornos al operar.",
      "Conjunto formado por daemon, API y CLI que construye imágenes y administra contenedores, redes y volúmenes al evaluar.",
      "Favorece responsabilidades claras, señales correctas y escalado independiente, aunque no es una regla física absoluta."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Aplicación de un solo proceso (Fundamentos de contenedores): Favorece responsabilidades claras, señales correctas y escalado independiente, aunque no es una regla física absoluta.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-13",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «Declarativo frente a imperativo»?",
    "options": [
      "Dockerfiles y Compose describen estados reproducibles respetando las restricciones de tipo.",
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo.",
      "-i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY al operar.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Declarativo frente a imperativo (Fundamentos de contenedores): Dockerfiles y Compose describen estados reproducibles; comandos manuales aislados son más difíciles de auditar.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-14",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «Flujo build, ship y run»?",
    "options": [
      "Proceso de larga duración que coordina objetos Docker y delega la ejecución de contenedores al runtime al operar.",
      "Conecta código fuente, imagen versionada, registry y ejecución de la misma referencia en distintos entornos.",
      "La CLI puede administrar un daemon distinto mediante contexts, SSH o endpoints protegidos por TLS al operar.",
      "Conjunto formado por daemon, API y CLI que construye imágenes y administra contenedores, redes y volúmenes."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Flujo build, ship y run (Fundamentos de contenedores): Conecta código fuente, imagen versionada, registry y ejecución de la misma referencia en distintos entornos.",
    "topic": "Fundamentos de contenedores",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-15",
    "collectionId": "docker",
    "question": "Respecto a arquitectura del runtime en Docker, ¿cuál es el propósito de «API de Docker Engine»?",
    "options": [
      "Define si el daemon vuelve a iniciar un contenedor después de fallo, reinicio o salida manual al operar.",
      "Implementan la preparación y montaje de snapshots de imagen mediante overlayfs u otros backends.",
      "Interfaz HTTP versionada mediante la cual clientes crean, consultan y eliminan recursos del daemon.",
      "-t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "API de Docker Engine (Arquitectura del runtime): Interfaz HTTP versionada mediante la cual clientes crean, consultan y eliminan recursos del daemon.",
    "topic": "Arquitectura del runtime",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-16",
    "collectionId": "docker",
    "question": "En Docker (Arquitectura del runtime), ¿qué función técnica cumple «containerd»?",
    "options": [
      "-t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo al evaluar.",
      "Define si el daemon vuelve a iniciar un contenedor después de fallo, reinicio o salida manual.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios al operar.",
      "Runtime de alto nivel que gestiona el ciclo de vida, imágenes, snapshots y tareas de contenedores."
    ],
    "correctAnswerIndex": 3,
    "explanation": "containerd (Arquitectura del runtime): Runtime de alto nivel que gestiona el ciclo de vida, imágenes, snapshots y tareas de contenedores.",
    "topic": "Arquitectura del runtime",
    "difficulty": "básico"
  },
  {
    "id": "docker-q-17",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «runc» en arquitectura del runtime?",
    "options": [
      "Runtime OCI de bajo nivel que crea el proceso aislado a partir de un bundle y una especificación al operar.",
      "-t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo al operar.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios al operar.",
      "Organiza procesos jerárquicamente y aplican límites, prioridades y métricas de recursos al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "runc (Arquitectura del runtime): Runtime OCI de bajo nivel que crea el proceso aislado a partir de un bundle y una especificación.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-18",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «Especificaciones OCI»?",
    "options": [
      "Recibe señales y debe recolectar procesos hijos; una aplicación que ignora estas tareas puede cerrar mal al evaluar.",
      "Estandarizan el formato de imágenes, distribución y configuración de runtime para interoperar entre herramientas.",
      "Interfaz HTTP versionada mediante la cual clientes crean, consultan y eliminan recursos del daemon con precisión.",
      "Combina capas de solo lectura y una capa writable para presentar un filesystem único al contenedor con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Especificaciones OCI (Arquitectura del runtime): Estandarizan el formato de imágenes, distribución y configuración de runtime para interoperar entre herramientas.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-19",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «Namespaces de Linux»?",
    "options": [
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia al operar.",
      "-i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY al operar.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios.",
      "-d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Namespaces de Linux (Arquitectura del runtime): Proporcionan vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-20",
    "collectionId": "docker",
    "question": "Respecto a arquitectura del runtime en Docker, ¿cuál es el propósito de «cgroups v2»?",
    "options": [
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia al operar.",
      "-i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY al operar.",
      "-d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles.",
      "Organiza procesos jerárquicamente y aplican límites, prioridades y métricas de recursos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "cgroups v2 (Arquitectura del runtime): Organizan procesos jerárquicamente y aplican límites, prioridades y métricas de recursos.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-21",
    "collectionId": "docker",
    "question": "En Docker (Arquitectura del runtime), ¿qué función técnica cumple «Union filesystems»?",
    "options": [
      "Combina capas de solo lectura y una capa writable para presentar un filesystem único al contenedor.",
      "Define si el daemon vuelve a iniciar un contenedor después de fallo, reinicio o salida manual.",
      "Implementan la preparación y montaje de snapshots de imagen mediante overlayfs u otros backends.",
      "-t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Union filesystems (Arquitectura del runtime): Combinan capas de solo lectura y una capa writable para presentar un filesystem único al contenedor.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-22",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «Snapshotters» en arquitectura del runtime?",
    "options": [
      "-t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo al operar.",
      "Implementan la preparación y montaje de snapshots de imagen mediante overlayfs u otros backends.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios al operar.",
      "Organiza procesos jerárquicamente y aplican límites, prioridades y métricas de recursos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Snapshotters (Arquitectura del runtime): Implementan la preparación y montaje de snapshots de imagen mediante overlayfs u otros backends.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-23",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «Shim del contenedor»?",
    "options": [
      "-i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY al operar.",
      "Docker stop envía una señal de terminación y espera antes de forzar SIGKILL al operar.",
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia.",
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Shim del contenedor (Arquitectura del runtime): Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-24",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «PID 1 dentro del contenedor»?",
    "options": [
      "Interfaz HTTP versionada mediante la cual clientes crean, consultan y eliminan recursos del daemon al operar.",
      "Combina capas de solo lectura y una capa writable para presentar un filesystem único al contenedor al operar.",
      "Runtime de alto nivel que gestiona el ciclo de vida, imágenes, snapshots y tareas de contenedores al operar.",
      "Recibe señales y debe recolectar procesos hijos; una aplicación que ignora estas tareas puede cerrar mal."
    ],
    "correctAnswerIndex": 3,
    "explanation": "PID 1 dentro del contenedor (Arquitectura del runtime): Recibe señales y debe recolectar procesos hijos; una aplicación que ignora estas tareas puede cerrar mal.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-25",
    "collectionId": "docker",
    "question": "Respecto a arquitectura del runtime en Docker, ¿cuál es el propósito de «Señales»?",
    "options": [
      "Docker stop envía una señal de terminación y espera antes de forzar SIGKILL de forma segura.",
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia.",
      "-i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY al operar.",
      "-d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Señales y stop timeout (Arquitectura del runtime): docker stop envía una señal de terminación y espera antes de forzar SIGKILL.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-26",
    "collectionId": "docker",
    "question": "En Docker (Arquitectura del runtime), ¿qué función técnica cumple «TTY»?",
    "options": [
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia al operar.",
      "-t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo.",
      "-d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios."
    ],
    "correctAnswerIndex": 1,
    "explanation": "TTY y pseudo-terminal (Arquitectura del runtime): -t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-27",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «stdin abierto» en arquitectura del runtime?",
    "options": [
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia al operar.",
      "-d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles.",
      "-i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY al operar.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios."
    ],
    "correctAnswerIndex": 2,
    "explanation": "stdin abierto (Arquitectura del runtime): -i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-28",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «Modo detached»?",
    "options": [
      "-i mantiene el flujo de entrada disponible incluso cuando no se asigna una TTY al evaluar.",
      "Mantiene la relación entre containerd y el proceso incluso si el daemon se reinicia.",
      "Docker stop envía una señal de terminación y espera antes de forzar SIGKILL al evaluar.",
      "-d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Modo detached (Arquitectura del runtime): -d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-29",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «Restart policies»?",
    "options": [
      "Define si el daemon vuelve a iniciar un contenedor después de fallo, reinicio o salida manual al operar.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios.",
      "Organiza procesos jerárquicamente y aplican límites, prioridades y métricas de recursos.",
      "-d separa el cliente del proceso principal, mientras logs e inspect siguen disponibles al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Restart policies (Arquitectura del runtime): Definen si el daemon vuelve a iniciar un contenedor después de fallo, reinicio o salida manual.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-30",
    "collectionId": "docker",
    "question": "Respecto a arquitectura del runtime en Docker, ¿cuál es el propósito de «Live restore»?",
    "options": [
      "-t asigna una terminal y cambia buffering, formato de salida y comportamiento interactivo al evaluar.",
      "Permite mantener contenedores ejecutándose durante ciertas actualizaciones o reinicios del daemon.",
      "Define si el daemon vuelve a iniciar un contenedor después de fallo, reinicio o salida manual.",
      "Proporciona vistas aisladas de procesos, red, mounts, hostname, IPC, cgroups y usuarios al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Live restore (Arquitectura del runtime): Permite mantener contenedores ejecutándose durante ciertas actualizaciones o reinicios del daemon.",
    "topic": "Arquitectura del runtime",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-31",
    "collectionId": "docker",
    "question": "En Docker (CLI y ciclo de vida), ¿qué función técnica cumple «docker run»?",
    "options": [
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo al operar.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen.",
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor."
    ],
    "correctAnswerIndex": 2,
    "explanation": "docker run (CLI y ciclo de vida): Combina creación, configuración y arranque de un contenedor a partir de una imagen.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-32",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «docker create y docker start» en cli y ciclo de vida?",
    "options": [
      "Inicia un proceso adicional dentro de un contenedor ya ejecutándose sin alterar su comando principal al operar.",
      "Los nombres facilitan operación humana; IDs completos o cortos identifican objetos de manera única al operar.",
      "Emite un stream de acciones del daemon para observar create, start, die, pull, network y otros eventos.",
      "Separa la preparación del contenedor de su ejecución para inspeccionar o modificar el ciclo con precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "docker create y docker start (CLI y ciclo de vida): Separa la preparación del contenedor de su ejecución para inspeccionar o modificar el ciclo con precisión.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-33",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «docker ps»?",
    "options": [
      "Lista contenedores activos y, con opciones, también detenidos, IDs, puertos, nombres y estado.",
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor al operar.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen al operar.",
      "Expone configuración y estado detallados en JSON, incluidos mounts, red, health y argumentos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "docker ps (CLI y ciclo de vida): Lista contenedores activos y, con opciones, también detenidos, IDs, puertos, nombres y estado.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-34",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «docker inspect»?",
    "options": [
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor en el flujo.",
      "Expone configuración y estado detallados en JSON, incluidos mounts, red, health y argumentos.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen al operar.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "docker inspect (CLI y ciclo de vida): Expone configuración y estado detallados en JSON, incluidos mounts, red, health y argumentos.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "intermedio"
  },
  {
    "id": "docker-q-35",
    "collectionId": "docker",
    "question": "Respecto a cli y ciclo de vida en Docker, ¿cuál es el propósito de «docker logs»?",
    "options": [
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo al operar.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen.",
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host."
    ],
    "correctAnswerIndex": 2,
    "explanation": "docker logs (CLI y ciclo de vida): Lee stdout y stderr capturados por el logging driver configurado para el contenedor.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-36",
    "collectionId": "docker",
    "question": "En Docker (CLI y ciclo de vida), ¿qué función técnica cumple «docker exec»?",
    "options": [
      "Lista contenedores activos y, con opciones, también detenidos, IDs, puertos, nombres y estado al operar.",
      "Comandos prune eliminan objetos no usados y requieren comprender qué datos o cachés se perderán al operar.",
      "Expone configuración y estado detallados en JSON, incluidos mounts, red, health y argumentos al operar.",
      "Inicia un proceso adicional dentro de un contenedor ya ejecutándose sin alterar su comando principal."
    ],
    "correctAnswerIndex": 3,
    "explanation": "docker exec (CLI y ciclo de vida): Inicia un proceso adicional dentro de un contenedor ya ejecutándose sin alterar su comando principal.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-37",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «docker attach» en cli y ciclo de vida?",
    "options": [
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo de forma segura.",
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor al operar.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen al operar.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "docker attach (CLI y ciclo de vida): Conecta la terminal a los streams del proceso principal y no crea un shell nuevo.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-38",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «docker stop, kill y restart»?",
    "options": [
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen al operar.",
      "Distingue cierre graceful, señal inmediata y reinicio administrado durante la ejecución.",
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo al operar.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "docker stop, kill y restart (CLI y ciclo de vida): Distingue cierre graceful, señal inmediata y reinicio administrado.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-39",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «docker rm»?",
    "options": [
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen al operar.",
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo al operar.",
      "Elimina metadata y capa writable de un contenedor detenido bajo condiciones productivas.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "docker rm (CLI y ciclo de vida): Elimina metadata y capa writable de un contenedor detenido; no borra volúmenes nombrados por defecto.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-40",
    "collectionId": "docker",
    "question": "Respecto a cli y ciclo de vida en Docker, ¿cuál es el propósito de «docker cp»?",
    "options": [
      "Emite un stream de acciones del daemon para observar create, start, die, pull, network y otros eventos al operar.",
      "Inicia un proceso adicional dentro de un contenedor ya ejecutándose sin alterar su comando principal al operar.",
      "Separa la preparación del contenedor de su ejecución para inspeccionar o modificar el ciclo con precisión.",
      "Copia archivos entre host y contenedor, útil para inspección puntual pero no como estrategia de persistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "docker cp (CLI y ciclo de vida): Copia archivos entre host y contenedor, útil para inspección puntual pero no como estrategia de persistencia.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-41",
    "collectionId": "docker",
    "question": "En Docker (CLI y ciclo de vida), ¿qué función técnica cumple «docker stats»?",
    "options": [
      "Muestra consumo en vivo de CPU, memoria, red, block I/O y procesos respetando las invariantes.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen.",
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo al operar.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host."
    ],
    "correctAnswerIndex": 0,
    "explanation": "docker stats (CLI y ciclo de vida): Muestra consumo en vivo de CPU, memoria, red, block I/O y procesos.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-42",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «docker top» en cli y ciclo de vida?",
    "options": [
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo al operar.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen.",
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor."
    ],
    "correctAnswerIndex": 1,
    "explanation": "docker top (CLI y ciclo de vida): Consulta los procesos visibles dentro de un contenedor usando información del host.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-43",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «docker events»?",
    "options": [
      "Comandos prune eliminan objetos no usados y requieren comprender qué datos o cachés se perderán al operar.",
      "Los nombres facilitan operación humana; IDs completos o cortos identifican objetos de manera única.",
      "Emite un stream de acciones del daemon para observar create, start, die, pull, network y otros eventos.",
      "Lista contenedores activos y, con opciones, también detenidos, IDs, puertos, nombres y estado al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "docker events (CLI y ciclo de vida): Emite un stream de acciones del daemon para observar create, start, die, pull, network y otros eventos.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-44",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «Filtros»?",
    "options": [
      "Lee stdout y stderr capturados por el logging driver configurado para el contenedor en el flujo.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen al operar.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host al operar.",
      "--filter y --format convierten la CLI en una interfaz más precisa para scripts y diagnóstico."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Filtros y formato (CLI y ciclo de vida): --filter y --format convierten la CLI en una interfaz más precisa para scripts y diagnóstico.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-45",
    "collectionId": "docker",
    "question": "Respecto a cli y ciclo de vida en Docker, ¿cuál es el propósito de «Nombres y IDs»?",
    "options": [
      "Los nombres facilitan operación humana; IDs completos o cortos identifican objetos de manera única.",
      "Expone configuración y estado detallados en JSON, incluidos mounts, red, health y argumentos.",
      "--filter y --format convierten la CLI en una interfaz más precisa para scripts y diagnóstico.",
      "Lista contenedores activos y, con opciones, también detenidos, IDs, puertos, nombres y estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Nombres y IDs (CLI y ciclo de vida): Los nombres facilitan operación humana; IDs completos o cortos identifican objetos de manera única.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-46",
    "collectionId": "docker",
    "question": "En Docker (CLI y ciclo de vida), ¿qué función técnica cumple «Prune y limpieza»?",
    "options": [
      "Expone configuración y estado detallados en JSON, incluidos mounts, red, health y argumentos al operar.",
      "Comandos prune eliminan objetos no usados y requieren comprender qué datos o cachés se perderán.",
      "--filter y --format convierten la CLI en una interfaz más precisa para scripts y diagnóstico.",
      "Lista contenedores activos y, con opciones, también detenidos, IDs, puertos, nombres y estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Prune y limpieza (CLI y ciclo de vida): Comandos prune eliminan objetos no usados y requieren comprender qué datos o cachés se perderán.",
    "topic": "CLI y ciclo de vida",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-47",
    "collectionId": "docker",
    "question": "Dentro de Docker, ¿cómo opera el mecanismo de «Anatomía de una imagen» en imágenes, capas y distribución?",
    "options": [
      "Los cambios del contenedor se escriben sobre las capas de imagen mediante copy-on-write al operar.",
      "Cada instrucción de build puede producir una capa reutilizable identificada por su contenido.",
      "Manifest, configuración y capas de contenido describen qué ejecutar y qué filesystem montar.",
      "Digests calculados desde contenido permiten verificar integridad y reutilizar blobs idénticos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Anatomía de una imagen (Imágenes, capas y distribución): Manifest, configuración y capas de contenido describen qué ejecutar y qué filesystem montar.",
    "topic": "Imágenes, capas y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-48",
    "collectionId": "docker",
    "question": "Al trabajar con Docker, ¿qué responsabilidad define a «Capas inmutables»?",
    "options": [
      "Los cambios del contenedor se escriben sobre las capas de imagen mediante copy-on-write al operar.",
      "Manifest, configuración y capas de contenido describen qué ejecutar y qué filesystem montar.",
      "Digests calculados desde contenido permiten verificar integridad y reutilizar blobs idénticos.",
      "Cada instrucción de build puede producir una capa reutilizable identificada por su contenido."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Capas inmutables (Imágenes, capas y distribución): Cada instrucción de build puede producir una capa reutilizable identificada por su contenido.",
    "topic": "Imágenes, capas y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-49",
    "collectionId": "docker",
    "question": "En la arquitectura de Docker, ¿qué caracteriza técnicamente a «Capa writable»?",
    "options": [
      "Los cambios del contenedor se escriben sobre las capas de imagen mediante copy-on-write al operar.",
      "Combina creación, configuración y arranque de un contenedor a partir de una imagen.",
      "Conecta la terminal a los streams del proceso principal y no crea un shell nuevo al operar.",
      "Consulta los procesos visibles dentro de un contenedor usando información del host."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Capa writable (Imágenes, capas y distribución): Los cambios del contenedor se escriben sobre las capas de imagen mediante copy-on-write.",
    "topic": "Imágenes, capas y distribución",
    "difficulty": "avanzado"
  },
  {
    "id": "docker-q-50",
    "collectionId": "docker",
    "question": "Respecto a imágenes, capas y distribución en Docker, ¿cuál es el propósito de «Content-addressable storage»?",
    "options": [
      "Los cambios del contenedor se escriben sobre las capas de imagen mediante copy-on-write al operar.",
      "Digests calculados desde contenido permiten verificar integridad y reutilizar blobs idénticos.",
      "Manifest, configuración y capas de contenido describen qué ejecutar y qué filesystem montar.",
      "Cada instrucción de build puede producir una capa reutilizable identificada por su contenido."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Content-addressable storage (Imágenes, capas y distribución): Digests calculados desde contenido permiten verificar integridad y reutilizar blobs idénticos.",
    "topic": "Imágenes, capas y distribución",
    "difficulty": "avanzado"
  }
];
