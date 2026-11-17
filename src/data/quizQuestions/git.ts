import type { QuizQuestion } from "@/data/quizTypes";

export const gitQuestions: QuizQuestion[] = [
  {
    "id": "git-q-01",
    "collectionId": "git",
    "question": "En Git (Modelo de objetos), ¿qué función técnica cumple «Repositorio y directorio .git»?",
    "options": [
      "Separa los archivos visibles de la base interna que conserva objetos, referencias, configuración y reflogs.",
      "Identifica objetos por su contenido y detecta cuándo dos referencias señalan exactamente el mismo estado.",
      "Modela contenido, estructura y snapshots sin confundir un commit con un archivo de diferencias al operar.",
      "Explica desde qué referencia se lee el snapshot y cuál avanzará con el siguiente commit dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Repositorio y directorio .git (Modelo de objetos): Separa los archivos visibles de la base interna que conserva objetos, referencias, configuración y reflogs.",
    "topic": "Modelo de objetos",
    "difficulty": "básico"
  },
  {
    "id": "git-q-02",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «Blobs, trees» en modelo de objetos?",
    "options": [
      "Explica desde qué referencia se lee el snapshot y cuál avanzará con el siguiente commit al operar.",
      "Modela contenido, estructura y snapshots sin confundir un commit con un archivo de diferencias.",
      "Representa la propuesta exacta del próximo snapshot entre el working tree y HEAD con precisión.",
      "Detiene la integración cuando Git no puede decidir una resolución correcta en una región al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Blobs, trees y commits (Modelo de objetos): Modela contenido, estructura y snapshots sin confundir un commit con un archivo de diferencias.",
    "topic": "Modelo de objetos",
    "difficulty": "básico"
  },
  {
    "id": "git-q-03",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «Hashes»?",
    "options": [
      "Modela contenido, estructura y snapshots sin confundir un commit con un archivo de diferencias en ejecución.",
      "Separa los archivos visibles de la base interna que conserva objetos, referencias, configuración y reflogs.",
      "Identifica objetos por su contenido y detecta cuándo dos referencias señalan exactamente el mismo estado.",
      "Explica desde qué referencia se lee el snapshot y cuál avanzará con el siguiente commit dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Hashes y direccionamiento por contenido (Modelo de objetos): Identifica objetos por su contenido y detecta cuándo dos referencias señalan exactamente el mismo estado.",
    "topic": "Modelo de objetos",
    "difficulty": "básico"
  },
  {
    "id": "git-q-04",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «HEAD»?",
    "options": [
      "Representa la propuesta exacta del próximo snapshot entre el working tree y HEAD al operar.",
      "Crea una copia local con objetos, referencias remotas y configuración de conexión al operar.",
      "Integra código de repositorios externos en ramas propias simplificando el clonado al operar.",
      "Explica desde qué referencia se lee el snapshot y cuál avanzará con el siguiente commit."
    ],
    "correctAnswerIndex": 3,
    "explanation": "HEAD y referencias simbólicas (Modelo de objetos): Explica desde qué referencia se lee el snapshot y cuál avanzará con el siguiente commit.",
    "topic": "Modelo de objetos",
    "difficulty": "básico"
  },
  {
    "id": "git-q-05",
    "collectionId": "git",
    "question": "Respecto a modelo de objetos en Git, ¿cuál es el propósito de «Índice o staging area»?",
    "options": [
      "Representa la propuesta exacta del próximo snapshot entre el working tree y HEAD de forma segura.",
      "Explica desde qué referencia se lee el snapshot y cuál avanzará con el siguiente commit.",
      "Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación.",
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Índice o staging area (Modelo de objetos): Representa la propuesta exacta del próximo snapshot entre el working tree y HEAD.",
    "topic": "Modelo de objetos",
    "difficulty": "básico"
  },
  {
    "id": "git-q-06",
    "collectionId": "git",
    "question": "En Git (Modelo de objetos), ¿qué función técnica cumple «Configuración y alcance»?",
    "options": [
      "Separa los archivos visibles de la base interna que conserva objetos, referencias, configuración y reflogs al operar.",
      "Distingue valores de sistema, usuario, repositorio y worktree antes de diagnosticar un comportamiento inesperado.",
      "Identifica objetos por su contenido y detecta cuándo dos referencias señalan exactamente el mismo estado al operar.",
      "Modela contenido, estructura y snapshots sin confundir un commit con un archivo de diferencias sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Configuración y alcance (Modelo de objetos): Distingue valores de sistema, usuario, repositorio y worktree antes de diagnosticar un comportamiento inesperado.",
    "topic": "Modelo de objetos",
    "difficulty": "básico"
  },
  {
    "id": "git-q-07",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «git status» en trabajo cotidiano?",
    "options": [
      "Construye commits enfocados seleccionando partes coherentes de un mismo archivo al operar.",
      "Compara working tree, índice, commits o ramas eligiendo correctamente los extremos.",
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio.",
      "Guarda un snapshot con autor, fecha, mensaje y uno o más padres de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "git status (Trabajo cotidiano): Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio.",
    "topic": "Trabajo cotidiano",
    "difficulty": "básico"
  },
  {
    "id": "git-q-08",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «git add»?",
    "options": [
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio al operar.",
      "Compara working tree, índice, commits o ramas eligiendo correctamente los extremos al operar.",
      "Separa la intención de restaurar contenido de la intención de cambiar la referencia activa.",
      "Construye commits enfocados seleccionando partes coherentes de un mismo archivo al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "git add y selección por hunks (Trabajo cotidiano): Construye commits enfocados seleccionando partes coherentes de un mismo archivo.",
    "topic": "Trabajo cotidiano",
    "difficulty": "básico"
  },
  {
    "id": "git-q-09",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «git diff y rangos»?",
    "options": [
      "Compara working tree, índice, commits o ramas eligiendo correctamente los extremos.",
      "Construye commits enfocados seleccionando partes coherentes de un mismo archivo.",
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio.",
      "Guarda un snapshot con autor, fecha, mensaje y uno o más padres dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "git diff y rangos (Trabajo cotidiano): Compara working tree, índice, commits o ramas eligiendo correctamente los extremos.",
    "topic": "Trabajo cotidiano",
    "difficulty": "básico"
  },
  {
    "id": "git-q-10",
    "collectionId": "git",
    "question": "Respecto a trabajo cotidiano en Git, ¿cuál es el propósito de «git commit y metadatos»?",
    "options": [
      "Compara working tree, índice, commits o ramas eligiendo correctamente los extremos al operar.",
      "Guarda un snapshot con autor, fecha, mensaje y uno o más padres dentro de la aplicación.",
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio.",
      "Construye commits enfocados seleccionando partes coherentes de un mismo archivo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "git commit y metadatos (Trabajo cotidiano): Guarda un snapshot con autor, fecha, mensaje y uno o más padres.",
    "topic": "Trabajo cotidiano",
    "difficulty": "básico"
  },
  {
    "id": "git-q-11",
    "collectionId": "git",
    "question": "En Git (Trabajo cotidiano), ¿qué función técnica cumple «git restore y git switch»?",
    "options": [
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio al operar.",
      "Compara working tree, índice, commits o ramas eligiendo correctamente los extremos al operar.",
      "Separa la intención de restaurar contenido de la intención de cambiar la referencia activa.",
      "Construye commits enfocados seleccionando partes coherentes de un mismo archivo al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "git restore y git switch (Trabajo cotidiano): Separa la intención de restaurar contenido de la intención de cambiar la referencia activa.",
    "topic": "Trabajo cotidiano",
    "difficulty": "básico"
  },
  {
    "id": "git-q-12",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «.gitignore» en trabajo cotidiano?",
    "options": [
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio en el flujo.",
      "Compara working tree, índice, commits o ramas eligiendo correctamente los extremos al operar.",
      "Separa la intención de restaurar contenido de la intención de cambiar la referencia activa.",
      "Evita añadir residuos nuevos sin asumir que una regla deja de seguir archivos ya registrados."
    ],
    "correctAnswerIndex": 3,
    "explanation": ".gitignore y archivos tracked (Trabajo cotidiano): Evita añadir residuos nuevos sin asumir que una regla deja de seguir archivos ya registrados.",
    "topic": "Trabajo cotidiano",
    "difficulty": "básico"
  },
  {
    "id": "git-q-13",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «Ramas como punteros móviles»?",
    "options": [
      "Crea líneas de trabajo baratas que avanzan al producir commits respetando las invariantes.",
      "Adelanta una referencia cuando no existe divergencia y no requiere un nodo de merge.",
      "Une historias divergentes preservando dos padres y el contexto de integración al operar.",
      "Reproduce cambios sobre una base nueva y genera commits con identificadores diferentes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Ramas como punteros móviles (Ramas e integración): Crea líneas de trabajo baratas que avanzan al producir commits.",
    "topic": "Ramas e integración",
    "difficulty": "básico"
  },
  {
    "id": "git-q-14",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «Fast-forward»?",
    "options": [
      "Une historias divergentes preservando dos padres y el contexto de integración al operar.",
      "Adelanta una referencia cuando no existe divergencia y no requiere un nodo de merge.",
      "Reordena, combina, edita o descarta commits locales antes de compartirlos al operar.",
      "Publica referencias solo cuando la política remota acepta el avance propuesto al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fast-forward (Ramas e integración): Adelanta una referencia cuando no existe divergencia y no requiere un nodo de merge.",
    "topic": "Ramas e integración",
    "difficulty": "básico"
  },
  {
    "id": "git-q-15",
    "collectionId": "git",
    "question": "Respecto a ramas e integración en Git, ¿cuál es el propósito de «Merge commits»?",
    "options": [
      "Adelanta una referencia cuando no existe divergencia y no requiere un nodo de merge al operar.",
      "Reproduce cambios sobre una base nueva y genera commits con identificadores diferentes.",
      "Une historias divergentes preservando dos padres y el contexto de integración al operar.",
      "Detiene la integración cuando Git no puede decidir una resolución correcta en una región."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Merge commits (Ramas e integración): Une historias divergentes preservando dos padres y el contexto de integración.",
    "topic": "Ramas e integración",
    "difficulty": "básico"
  },
  {
    "id": "git-q-16",
    "collectionId": "git",
    "question": "En Git (Ramas e integración), ¿qué función técnica cumple «Conflictos de contenido»?",
    "options": [
      "Adelanta una referencia cuando no existe divergencia y no requiere un nodo de merge al operar.",
      "Reproduce cambios sobre una base nueva y genera commits con identificadores diferentes.",
      "Une historias divergentes preservando dos padres y el contexto de integración al evaluar.",
      "Detiene la integración cuando Git no puede decidir una resolución correcta en una región."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Conflictos de contenido (Ramas e integración): Detiene la integración cuando Git no puede decidir una resolución correcta en una región.",
    "topic": "Ramas e integración",
    "difficulty": "básico"
  },
  {
    "id": "git-q-17",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «Rebase» en ramas e integración?",
    "options": [
      "Reproduce cambios sobre una base nueva y genera commits con identificadores diferentes.",
      "Adelanta una referencia cuando no existe divergencia y no requiere un nodo de merge.",
      "Une historias divergentes preservando dos padres y el contexto de integración al operar.",
      "Reordena, combina, edita o descarta commits locales antes de compartirlos al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Rebase (Ramas e integración): Reproduce cambios sobre una base nueva y genera commits con identificadores diferentes.",
    "topic": "Ramas e integración",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-18",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «Rebase interactivo»?",
    "options": [
      "Adelanta una referencia cuando no existe divergencia y no requiere un nodo de merge al operar.",
      "Reordena, combina, edita o descarta commits locales antes de compartirlos con precisión.",
      "Une historias divergentes preservando dos padres y el contexto de integración al operar.",
      "Reproduce cambios sobre una base nueva y genera commits con identificadores diferentes."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Rebase interactivo (Ramas e integración): Reordena, combina, edita o descarta commits locales antes de compartirlos.",
    "topic": "Ramas e integración",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-19",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «Clone y repositorios completos»?",
    "options": [
      "Combina fetch con una estrategia explícita de merge, rebase o fast-forward al operar.",
      "Relaciona una rama local con una referencia remota para medir ahead y behind al operar.",
      "Crea una copia local con objetos, referencias remotas y configuración de conexión.",
      "Publica referencias solo cuando la política remota acepta el avance propuesto."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Clone y repositorios completos (Repositorios distribuidos): Crea una copia local con objetos, referencias remotas y configuración de conexión.",
    "topic": "Repositorios distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-20",
    "collectionId": "git",
    "question": "Respecto a repositorios distribuidos en Git, ¿cuál es el propósito de «Remotos origin y upstream»?",
    "options": [
      "Descarga objetos y actualiza referencias remotas de seguimiento sin integrar el working tree al operar.",
      "Crea una copia local con objetos, referencias remotas y configuración de conexión en el flujo.",
      "Publica referencias solo cuando la política remota acepta el avance propuesto de forma segura.",
      "Asigna nombres locales a otros repositorios sin convertirlos en autoridades especiales de Git."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Remotos origin y upstream (Repositorios distribuidos): Asigna nombres locales a otros repositorios sin convertirlos en autoridades especiales de Git.",
    "topic": "Repositorios distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-21",
    "collectionId": "git",
    "question": "En Git (Repositorios distribuidos), ¿qué función técnica cumple «Fetch»?",
    "options": [
      "Descarga objetos y actualiza referencias remotas de seguimiento sin integrar el working tree.",
      "Crea una copia local con objetos, referencias remotas y configuración de conexión al operar.",
      "Asigna nombres locales a otros repositorios sin convertirlos en autoridades especiales de Git.",
      "Publica referencias solo cuando la política remota acepta el avance propuesto en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fetch (Repositorios distribuidos): Descarga objetos y actualiza referencias remotas de seguimiento sin integrar el working tree.",
    "topic": "Repositorios distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-22",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «Pull» en repositorios distribuidos?",
    "options": [
      "Crea una copia local con objetos, referencias remotas y configuración de conexión al operar.",
      "Combina fetch con una estrategia explícita de merge, rebase o fast-forward en ejecución.",
      "Publica referencias solo cuando la política remota acepta el avance propuesto al operar.",
      "Relaciona una rama local con una referencia remota para medir ahead y behind al evaluar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pull (Repositorios distribuidos): Combina fetch con una estrategia explícita de merge, rebase o fast-forward.",
    "topic": "Repositorios distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-23",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «Push y non-fast-forward»?",
    "options": [
      "Crea una copia local con objetos, referencias remotas y configuración de conexión al operar.",
      "Relaciona una rama local con una referencia remota para medir ahead y behind al evaluar.",
      "Publica referencias solo cuando la política remota acepta el avance propuesto al operar.",
      "Combina fetch con una estrategia explícita de merge, rebase o fast-forward en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Push y non-fast-forward (Repositorios distribuidos): Publica referencias solo cuando la política remota acepta el avance propuesto.",
    "topic": "Repositorios distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-24",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «Tracking branches»?",
    "options": [
      "Crea una copia local con objetos, referencias remotas y configuración de conexión al operar.",
      "Publica referencias solo cuando la política remota acepta el avance propuesto al operar.",
      "Combina fetch con una estrategia explícita de merge, rebase o fast-forward en ejecución.",
      "Relaciona una rama local con una referencia remota para medir ahead y behind al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Tracking branches (Repositorios distribuidos): Relaciona una rama local con una referencia remota para medir ahead y behind.",
    "topic": "Repositorios distribuidos",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-25",
    "collectionId": "git",
    "question": "Respecto a historia y diagnóstico en Git, ¿cuál es el propósito de «log, show y graph»?",
    "options": [
      "Recorre padres, inspecciona snapshots y revela la forma real de la historia en el flujo.",
      "Localiza el primer commit defectuoso mediante búsqueda binaria y una prueba repetible.",
      "Crea una copia local con objetos, referencias remotas y configuración de conexión.",
      "Integra código de repositorios externos en ramas propias simplificando el clonado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "log, show y graph (Historia y diagnóstico): Recorre padres, inspecciona snapshots y revela la forma real de la historia.",
    "topic": "Historia y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-26",
    "collectionId": "git",
    "question": "En Git (Historia y diagnóstico), ¿qué función técnica cumple «blame como contexto»?",
    "options": [
      "Localiza el primer commit defectuoso mediante búsqueda binaria y una prueba repetible en el flujo.",
      "Relaciona líneas con commits para investigar decisiones sin reducir el análisis a culpabilidad.",
      "Comprueba conectividad e integridad antes de que la recolección elimine objetos recuperables.",
      "Recorre padres, inspecciona snapshots y revela la forma real de la historia de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "blame como contexto (Historia y diagnóstico): Relaciona líneas con commits para investigar decisiones sin reducir el análisis a culpabilidad.",
    "topic": "Historia y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-27",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «bisect» en historia y diagnóstico?",
    "options": [
      "Recorre padres, inspecciona snapshots y revela la forma real de la historia en ejecución.",
      "Construye commits enfocados seleccionando partes coherentes de un mismo archivo al operar.",
      "Localiza el primer commit defectuoso mediante búsqueda binaria y una prueba repetible.",
      "Representa la propuesta exacta del próximo snapshot entre el working tree y HEAD al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "bisect (Historia y diagnóstico): Localiza el primer commit defectuoso mediante búsqueda binaria y una prueba repetible.",
    "topic": "Historia y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-28",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «Reflog»?",
    "options": [
      "Relaciona líneas con commits para investigar decisiones sin reducir el análisis a culpabilidad al operar.",
      "Comprueba conectividad e integridad antes de que la recolección elimine objetos recuperables al operar.",
      "Ejecuta verificaciones alrededor de eventos sabiendo que no se distribuyen automáticamente con el clon.",
      "Registra movimientos locales de referencias y permite reencontrar commits que dejaron de ser visibles."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Reflog (Historia y diagnóstico): Registra movimientos locales de referencias y permite reencontrar commits que dejaron de ser visibles.",
    "topic": "Historia y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-29",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «fsck»?",
    "options": [
      "Comprueba conectividad e integridad antes de que la recolección elimine objetos recuperables al operar.",
      "Localiza el primer commit defectuoso mediante búsqueda binaria y una prueba repetible al operar.",
      "Relaciona líneas con commits para investigar decisiones sin reducir el análisis a culpabilidad.",
      "Recorre padres, inspecciona snapshots y revela la forma real de la historia de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "fsck y objetos inalcanzables (Historia y diagnóstico): Comprueba conectividad e integridad antes de que la recolección elimine objetos recuperables.",
    "topic": "Historia y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-30",
    "collectionId": "git",
    "question": "Respecto a historia y diagnóstico en Git, ¿cuál es el propósito de «Hooks locales»?",
    "options": [
      "Relaciona líneas con commits para investigar decisiones sin reducir el análisis a culpabilidad al evaluar.",
      "Ejecuta verificaciones alrededor de eventos sabiendo que no se distribuyen automáticamente con el clon.",
      "Comprueba conectividad e integridad antes de que la recolección elimine objetos recuperables al operar.",
      "Registra movimientos locales de referencias y permite reencontrar commits que dejaron de ser visibles."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Hooks locales (Historia y diagnóstico): Ejecuta verificaciones alrededor de eventos sabiendo que no se distribuyen automáticamente con el clon.",
    "topic": "Historia y diagnóstico",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-31",
    "collectionId": "git",
    "question": "En Git (Corrección y producción), ¿qué función técnica cumple «Reset, restore y revert»?",
    "options": [
      "Marca versiones con identidad, mensaje y verificación criptográfica cuando el flujo lo exige dentro del flujo.",
      "Versiona punteros mientras almacena binarios grandes fuera del almacén ordinario de objetos de forma clara.",
      "Elige entre mover referencias, restaurar archivos o publicar un commit inverso según el alcance compartido.",
      "Guarda trabajo breve fuera del índice sin tratarlo como sustituto permanente de commits de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reset, restore y revert (Corrección y producción): Elige entre mover referencias, restaurar archivos o publicar un commit inverso según el alcance compartido.",
    "topic": "Corrección y producción",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-32",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «Cherry-pick» en corrección y producción?",
    "options": [
      "Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación al operar.",
      "Guarda trabajo breve fuera del índice sin tratarlo como sustituto permanente de commits.",
      "Crea una copia local con objetos, referencias remotas y configuración de conexión al operar.",
      "Reaplica el cambio de un commit puntual sin fusionar toda su rama de origen en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Cherry-pick (Corrección y producción): Reaplica el cambio de un commit puntual sin fusionar toda su rama de origen.",
    "topic": "Corrección y producción",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-33",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «Stash»?",
    "options": [
      "Guarda trabajo breve fuera del índice sin tratarlo como sustituto permanente de commits.",
      "Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación.",
      "Reaplica el cambio de un commit puntual sin fusionar toda su rama de origen al operar.",
      "Crea una copia local con objetos, referencias remotas y configuración de conexión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Stash (Corrección y producción): Guarda trabajo breve fuera del índice sin tratarlo como sustituto permanente de commits.",
    "topic": "Corrección y producción",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-34",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «Tags anotados y firmas»?",
    "options": [
      "Guarda trabajo breve fuera del índice sin tratarlo como sustituto permanente de commits al operar.",
      "Marca versiones con identidad, mensaje y verificación criptográfica cuando el flujo lo exige.",
      "Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación al operar.",
      "Versiona punteros mientras almacena binarios grandes fuera del almacén ordinario de objetos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tags anotados y firmas (Corrección y producción): Marca versiones con identidad, mensaje y verificación criptográfica cuando el flujo lo exige.",
    "topic": "Corrección y producción",
    "difficulty": "intermedio"
  },
  {
    "id": "git-q-35",
    "collectionId": "git",
    "question": "Respecto a corrección y producción en Git, ¿cuál es el propósito de «Git LFS»?",
    "options": [
      "Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación al operar.",
      "Guarda trabajo breve fuera del índice sin tratarlo como sustituto permanente de commits.",
      "Versiona punteros mientras almacena binarios grandes fuera del almacén ordinario de objetos.",
      "Marca versiones con identidad, mensaje y verificación criptográfica cuando el flujo lo exige."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Git LFS (Corrección y producción): Versiona punteros mientras almacena binarios grandes fuera del almacén ordinario de objetos.",
    "topic": "Corrección y producción",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-36",
    "collectionId": "git",
    "question": "En Git (Corrección y producción), ¿qué función técnica cumple «Mantenimiento y garbage collection»?",
    "options": [
      "Reaplica el cambio de un commit puntual sin fusionar toda su rama de origen en el flujo.",
      "Construye commits enfocados seleccionando partes coherentes de un mismo archivo al operar.",
      "Une historias divergentes preservando dos padres y el contexto de integración al operar.",
      "Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Mantenimiento y garbage collection (Corrección y producción): Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación.",
    "topic": "Corrección y producción",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-37",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «Comandos de plomería vs porcelana» en estructuras internas y plomería de git?",
    "options": [
      "Distingue utilidades de bajo nivel de la interfaz de usuario respetando las invariantes.",
      "Comprime millones de objetos delta en archivos compactos indexados para lectura veloz.",
      "Acelera recorridos de historia con tablas de búsqueda precalculadas en disco al operar.",
      "Examina campos de timestamps, tamaño, SHA-1 y rutas ordenadas en el staging al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Comandos de plomería vs porcelana (Estructuras internas y plomería de Git): Distingue utilidades de bajo nivel (hash-object, cat-file, mktree) de la interfaz de usuario.",
    "topic": "Estructuras internas y plomería de Git",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-38",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «Objetos empaquetados»?",
    "options": [
      "Acelera recorridos de historia con tablas de búsqueda precalculadas en disco en el flujo.",
      "Comprime millones de objetos delta en archivos compactos indexados para lectura veloz.",
      "Examina campos de timestamps, tamaño, SHA-1 y rutas ordenadas en el staging al operar.",
      "Agrupa punteros de ramas y tags en un solo archivo para acelerar búsquedas al evaluar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Objetos empaquetados y archivos .pack/.idx (Estructuras internas y plomería de Git): Comprime millones de objetos delta en archivos compactos indexados para lectura veloz.",
    "topic": "Estructuras internas y plomería de Git",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-39",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «Packed-refs y desfragmentación de referencias»?",
    "options": [
      "Comprime millones de objetos delta en archivos compactos indexados para lectura veloz al operar.",
      "Acelera recorridos de historia con tablas de búsqueda precalculadas en disco al evaluar.",
      "Agrupa punteros de ramas y tags en un solo archivo para acelerar búsquedas en ejecución.",
      "Examina campos de timestamps, tamaño, SHA-1 y rutas ordenadas en el staging en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Packed-refs y desfragmentación de referencias (Estructuras internas y plomería de Git): Agrupa punteros de ramas y tags en un solo archivo para acelerar búsquedas.",
    "topic": "Estructuras internas y plomería de Git",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-40",
    "collectionId": "git",
    "question": "Respecto a estructuras internas y plomería de git en Git, ¿cuál es el propósito de «El índice binario (.git/index) al microscopio»?",
    "options": [
      "Comprime millones de objetos delta en archivos compactos indexados para lectura veloz al operar.",
      "Acelera recorridos de historia con tablas de búsqueda precalculadas en disco al evaluar.",
      "Agrupa punteros de ramas y tags en un solo archivo para acelerar búsquedas en ejecución.",
      "Examina campos de timestamps, tamaño, SHA-1 y rutas ordenadas en el staging en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "El índice binario (.git/index) al microscopio (Estructuras internas y plomería de Git): Examina campos de timestamps, tamaño, SHA-1 y rutas ordenadas en el staging.",
    "topic": "Estructuras internas y plomería de Git",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-41",
    "collectionId": "git",
    "question": "En Git (Estructuras internas y plomería de Git), ¿qué función técnica cumple «Commit-graph e indexación de ancestros»?",
    "options": [
      "Acelera recorridos de historia con tablas de búsqueda precalculadas en disco al evaluar.",
      "Comprime millones de objetos delta en archivos compactos indexados para lectura veloz.",
      "Examina campos de timestamps, tamaño, SHA-1 y rutas ordenadas en el staging al operar.",
      "Agrupa punteros de ramas y tags en un solo archivo para acelerar búsquedas al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Commit-graph e indexación de ancestros (Estructuras internas y plomería de Git): Acelera recorridos de historia con tablas de búsqueda precalculadas en disco.",
    "topic": "Estructuras internas y plomería de Git",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-42",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «Multi-pack index (MIDX)» en estructuras internas y plomería de git?",
    "options": [
      "Comprime millones de objetos delta en archivos compactos indexados para lectura veloz de forma segura.",
      "Unifica índices de múltiples packfiles para optimizar operaciones de lectura sin reempaquetar todo.",
      "Evita añadir residuos nuevos sin asumir que una regla deja de seguir archivos ya registrados al operar.",
      "Descarga objetos y actualiza referencias remotas de seguimiento sin integrar el working tree al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Multi-pack index (MIDX) (Estructuras internas y plomería de Git): Unifica índices de múltiples packfiles para optimizar operaciones de lectura sin reempaquetar todo.",
    "topic": "Estructuras internas y plomería de Git",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-43",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «git worktree y desarrollo en paralelo»?",
    "options": [
      "Elige entre integración continua en ramas cortas o ciclos de releases estructurados al operar.",
      "Enlaza commits exactos de otros proyectos manteniendo árboles de trabajo independientes.",
      "Trabaja en múltiples ramas simultáneamente sin necesidad de clonar de nuevo el repositorio.",
      "Integra código de repositorios externos en ramas propias simplificando el clonado al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "git worktree y desarrollo en paralelo (Flujos de trabajo avanzados y múltiples árboles de trabajo): Trabaja en múltiples ramas simultáneamente sin necesidad de clonar de nuevo el repositorio.",
    "topic": "Flujos de trabajo avanzados y múltiples árboles de trabajo",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-44",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «git sparse-checkout y repositorios gigantes»?",
    "options": [
      "Integra código de repositorios externos en ramas propias simplificando el clonado al operar.",
      "Elige entre integración continua en ramas cortas o ciclos de releases estructurados.",
      "Enlaza commits exactos de otros proyectos manteniendo árboles de trabajo independientes.",
      "Descarga y muestra únicamente las carpetas del proyecto en las que trabajas en el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "git sparse-checkout y repositorios gigantes (Flujos de trabajo avanzados y múltiples árboles de trabajo): Descarga y muestra únicamente las carpetas del proyecto en las que trabajas.",
    "topic": "Flujos de trabajo avanzados y múltiples árboles de trabajo",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-45",
    "collectionId": "git",
    "question": "Respecto a flujos de trabajo avanzados y múltiples árboles de trabajo en Git, ¿cuál es el propósito de «git submodules y repositorios anidados»?",
    "options": [
      "Enlaza commits exactos de otros proyectos manteniendo árboles de trabajo independientes.",
      "Integra código de repositorios externos en ramas propias simplificando el clonado.",
      "Elige entre integración continua en ramas cortas o ciclos de releases estructurados.",
      "Descarga y muestra únicamente las carpetas del proyecto en las que trabajas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "git submodules y repositorios anidados (Flujos de trabajo avanzados y múltiples árboles de trabajo): Enlaza commits exactos de otros proyectos manteniendo árboles de trabajo independientes.",
    "topic": "Flujos de trabajo avanzados y múltiples árboles de trabajo",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-46",
    "collectionId": "git",
    "question": "En Git (Flujos de trabajo avanzados y múltiples árboles de trabajo), ¿qué función técnica cumple «git subtrees y fusión sin submódulos»?",
    "options": [
      "Descarga y muestra únicamente las carpetas del proyecto en las que trabajas al operar.",
      "Integra código de repositorios externos en ramas propias simplificando el clonado.",
      "Elige entre integración continua en ramas cortas o ciclos de releases estructurados.",
      "Recorre padres, inspecciona snapshots y revela la forma real de la historia al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "git subtrees y fusión sin submódulos (Flujos de trabajo avanzados y múltiples árboles de trabajo): Integra código de repositorios externos en ramas propias simplificando el clonado.",
    "topic": "Flujos de trabajo avanzados y múltiples árboles de trabajo",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-47",
    "collectionId": "git",
    "question": "Dentro de Git, ¿cómo opera el mecanismo de «Estrategias de ramificación (Trunk-based vs Gitflow)» en flujos de trabajo avanzados y múltiples árboles de trabajo?",
    "options": [
      "Descarga y muestra únicamente las carpetas del proyecto en las que trabajas al evaluar.",
      "Integra código de repositorios externos en ramas propias simplificando el clonado.",
      "Elige entre integración continua en ramas cortas o ciclos de releases estructurados.",
      "Une historias divergentes preservando dos padres y el contexto de integración al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Estrategias de ramificación (Trunk-based vs Gitflow) (Flujos de trabajo avanzados y múltiples árboles de trabajo): Elige entre integración continua en ramas cortas o ciclos de releases estructurados.",
    "topic": "Flujos de trabajo avanzados y múltiples árboles de trabajo",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-48",
    "collectionId": "git",
    "question": "Al trabajar con Git, ¿qué responsabilidad define a «Monorepos y escalado de Git»?",
    "options": [
      "Enlaza commits exactos de otros proyectos manteniendo árboles de trabajo independientes al operar.",
      "Elige entre integración continua en ramas cortas o ciclos de releases estructurados al operar.",
      "Trabaja en múltiples ramas simultáneamente sin necesidad de clonar de nuevo el repositorio.",
      "Configura índices virtuales, fsmonitor y prefetching para proyectos con millones de archivos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Monorepos y escalado de Git (Flujos de trabajo avanzados y múltiples árboles de trabajo): Configura índices virtuales, fsmonitor y prefetching para proyectos con millones de archivos.",
    "topic": "Flujos de trabajo avanzados y múltiples árboles de trabajo",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-49",
    "collectionId": "git",
    "question": "En la arquitectura de Git, ¿qué caracteriza técnicamente a «git filter-repo vs filter-branch»?",
    "options": [
      "Reescribe árboles enteros para purgar secretos o binarios pesados de forma rápida y segura al operar.",
      "Cose ramas o acorta historias profundas creando referencias de sustitución transparentes.",
      "Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación.",
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "git filter-repo vs filter-branch (Reescritura de historia y saneamiento forense): Reescribe árboles enteros para purgar secretos o binarios pesados de forma rápida y segura.",
    "topic": "Reescritura de historia y saneamiento forense",
    "difficulty": "avanzado"
  },
  {
    "id": "git-q-50",
    "collectionId": "git",
    "question": "Respecto a reescritura de historia y saneamiento forense en Git, ¿cuál es el propósito de «git replace»?",
    "options": [
      "Reescribe árboles enteros para purgar secretos o binarios pesados de forma rápida y segura.",
      "Cose ramas o acorta historias profundas creando referencias de sustitución transparentes.",
      "Compara working tree, índice, commits o ramas eligiendo correctamente los extremos al operar.",
      "Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "git replace y costuras de historia (Reescritura de historia y saneamiento forense): Cose ramas o acorta historias profundas creando referencias de sustitución transparentes.",
    "topic": "Reescritura de historia y saneamiento forense",
    "difficulty": "avanzado"
  }
];
