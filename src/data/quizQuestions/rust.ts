import type { QuizQuestion } from "@/data/quizTypes";

export const rustQuestions: QuizQuestion[] = [
  {
    "id": "rust-q-01",
    "collectionId": "rust",
    "question": "En Rust (Sistema de tipos expresivo), ¿qué función técnica cumple «Newtype pattern»?",
    "options": [
      "Envuelve una representación existente para obtener identidad de tipo y aplicar invariantes sin costo adicional.",
      "Deduce tipos locales y aplica conversiones limitadas sin ocultar transformaciones potencialmente costosas.",
      "Modela alternativas cerradas donde cada variante transporta exactamente la información que necesita al operar.",
      "Comunica al compilador ownership, varianza o lifetime que no aparecen como campos almacenados de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Newtype pattern (Sistema de tipos expresivo): Envuelve una representación existente para obtener identidad de tipo y aplicar invariantes sin costo adicional.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-02",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «Enums con datos» en sistema de tipos expresivo?",
    "options": [
      "Comunica al compilador ownership, varianza o lifetime que no aparecen como campos almacenados al operar.",
      "Modela alternativas cerradas donde cada variante transporta exactamente la información que necesita.",
      "Representa cálculos que no regresan o estados imposibles y mejoran el análisis exhaustivo al operar.",
      "Distingue duplicación implícita bit a bit de una clonación potencialmente costosa y explícita al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Enums con datos (Sistema de tipos expresivo): Modelan alternativas cerradas donde cada variante transporta exactamente la información que necesita.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-03",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Tipos never e inhabitados»?",
    "options": [
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar.",
      "Representa cálculos que no regresan o estados imposibles y mejoran el análisis exhaustivo.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tipos never e inhabitados (Sistema de tipos expresivo): Representan cálculos que no regresan o estados imposibles y mejoran el análisis exhaustivo.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-04",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Inferencia y coerciones»?",
    "options": [
      "Modela alternativas cerradas donde cada variante transporta exactamente la información que necesita al operar.",
      "Comunica al compilador ownership, varianza o lifetime que no aparecen como campos almacenados en el flujo.",
      "Representa cálculos que no regresan o estados imposibles y mejoran el análisis exhaustivo de forma segura.",
      "Deduce tipos locales y aplica conversiones limitadas sin ocultar transformaciones potencialmente costosas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Inferencia y coerciones (Sistema de tipos expresivo): Deduce tipos locales y aplica conversiones limitadas sin ocultar transformaciones potencialmente costosas.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-05",
    "collectionId": "rust",
    "question": "Respecto a sistema de tipos expresivo en Rust, ¿cuál es el propósito de «PhantomData»?",
    "options": [
      "Comunica al compilador ownership, varianza o lifetime que no aparecen como campos almacenados.",
      "Representa cálculos que no regresan o estados imposibles y mejoran el análisis exhaustivo.",
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura.",
      "Notifican al executor que un future antes pendiente puede progresar sin sondeo continuo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "PhantomData (Sistema de tipos expresivo): Comunica al compilador ownership, varianza o lifetime que no aparecen como campos almacenados.",
    "topic": "Sistema de tipos expresivo",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-06",
    "collectionId": "rust",
    "question": "En Rust (Ownership avanzado), ¿qué función técnica cumple «Movimientos parciales»?",
    "options": [
      "Mantiene valores vivos por conteo local o atómico, pero no resuelve ciclos automáticamente al operar.",
      "Transfieren algunos campos y dejan el valor padre utilizable solo donde su estado sigue completo.",
      "Distingue duplicación implícita bit a bit de una clonación potencialmente costosa y explícita.",
      "Observan una asignación sin prolongar su vida y permite romper ciclos de ownership compartido."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Movimientos parciales (Ownership avanzado): Transfieren algunos campos y dejan el valor padre utilizable solo donde su estado sigue completo.",
    "topic": "Ownership avanzado",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-07",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «Copy frente a Clone» en ownership avanzado?",
    "options": [
      "Mantiene valores vivos por conteo local o atómico, pero no resuelve ciclos automáticamente al operar.",
      "Observan una asignación sin prolongar su vida y permite romper ciclos de ownership compartido.",
      "Distingue duplicación implícita bit a bit de una clonación potencialmente costosa y explícita.",
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Copy frente a Clone (Ownership avanzado): Distingue duplicación implícita bit a bit de una clonación potencialmente costosa y explícita.",
    "topic": "Ownership avanzado",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-08",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Interior mutability»?",
    "options": [
      "Distingue duplicación implícita bit a bit de una clonación potencialmente costosa y explícita al operar.",
      "Observan una asignación sin prolongar su vida y permite romper ciclos de ownership compartido al operar.",
      "Transfieren algunos campos y dejan el valor padre utilizable solo donde su estado sigue completo.",
      "Traslada reglas de mutación a ejecución mediante Cell o RefCell conservando una interfaz compartida."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Interior mutability (Ownership avanzado): Traslada reglas de mutación a ejecución mediante Cell o RefCell conservando una interfaz compartida.",
    "topic": "Ownership avanzado",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-09",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Reference counting Rc y Arc»?",
    "options": [
      "Mantiene valores vivos por conteo local o atómico, pero no resuelve ciclos automáticamente al operar.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reference counting Rc y Arc (Ownership avanzado): Mantiene valores vivos por conteo local o atómico, pero no resuelve ciclos automáticamente.",
    "topic": "Ownership avanzado",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-10",
    "collectionId": "rust",
    "question": "Respecto a ownership avanzado en Rust, ¿cuál es el propósito de «Weak references»?",
    "options": [
      "Mantiene valores vivos por conteo local o atómico, pero no resuelve ciclos automáticamente al operar.",
      "Observan una asignación sin prolongar su vida y permite romper ciclos de ownership compartido.",
      "Distingue duplicación implícita bit a bit de una clonación potencialmente costosa y explícita.",
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Weak references (Ownership avanzado): Observan una asignación sin prolongar su vida y permiten romper ciclos de ownership compartido.",
    "topic": "Ownership avanzado",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-11",
    "collectionId": "rust",
    "question": "En Rust (Préstamos en diseños reales), ¿qué función técnica cumple «Reborrowing»?",
    "options": [
      "Termina préstamos en su último uso real y permite patrones seguros antes rechazados por alcance textual al operar.",
      "Aplica reglas deterministas para omitir anotaciones comunes sin inferir contratos ambiguos de forma clara.",
      "Crea un préstamo temporal más corto desde otro para reutilizarlo después sin transferirlo definitivamente.",
      "Modela alternativas cerradas donde cada variante transporta exactamente la información que necesita al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Reborrowing (Préstamos en diseños reales): Crea un préstamo temporal más corto desde otro para reutilizarlo después sin transferirlo definitivamente.",
    "topic": "Préstamos en diseños reales",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-12",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «Non-lexical lifetimes» en préstamos en diseños reales?",
    "options": [
      "Aplica reglas deterministas para omitir anotaciones comunes sin inferir contratos ambiguos de forma segura.",
      "Crea un préstamo temporal más corto desde otro para reutilizarlo después sin transferirlo definitivamente.",
      "Permite préstamos desde el stack y garantizan que los threads terminen antes de salir del alcance al operar.",
      "Termina préstamos en su último uso real y permite patrones seguros antes rechazados por alcance textual."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Non-lexical lifetimes (Préstamos en diseños reales): Termina préstamos en su último uso real y permite patrones seguros antes rechazados por alcance textual.",
    "topic": "Préstamos en diseños reales",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-13",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Lifetime elision»?",
    "options": [
      "Aplica reglas deterministas para omitir anotaciones comunes sin inferir contratos ambiguos al operar.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Lifetime elision (Préstamos en diseños reales): Aplica reglas deterministas para omitir anotaciones comunes sin inferir contratos ambiguos.",
    "topic": "Préstamos en diseños reales",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-14",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Self-referential structures»?",
    "options": [
      "Impide mover valores que dependen de una ubicación estable mientras permite movilidad a tipos que la toleran al evaluar.",
      "Requieren direcciones estables y construcción controlada porque mover el contenedor invalidaría referencias internas.",
      "Crea un préstamo temporal más corto desde otro para reutilizarlo después sin transferirlo definitivamente al evaluar.",
      "Termina préstamos en su último uso real y permite patrones seguros antes rechazados por alcance textual en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Self-referential structures (Préstamos en diseños reales): Requieren direcciones estables y construcción controlada porque mover el contenedor invalidaría referencias internas.",
    "topic": "Préstamos en diseños reales",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-15",
    "collectionId": "rust",
    "question": "Respecto a préstamos en diseños reales en Rust, ¿cuál es el propósito de «Pin y Unpin»?",
    "options": [
      "Termina préstamos en su último uso real y permite patrones seguros antes rechazados por alcance textual al operar.",
      "Crea un préstamo temporal más corto desde otro para reutilizarlo después sin transferirlo definitivamente.",
      "Impide mover valores que dependen de una ubicación estable mientras permite movilidad a tipos que la toleran.",
      "Aplica reglas deterministas para omitir anotaciones comunes sin inferir contratos ambiguos sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Pin y Unpin (Préstamos en diseños reales): Impide mover valores que dependen de una ubicación estable mientras permite movilidad a tipos que la toleran.",
    "topic": "Préstamos en diseños reales",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-16",
    "collectionId": "rust",
    "question": "En Rust (Traits y coherencia), ¿qué función técnica cumple «Associated types»?",
    "options": [
      "Implementan un trait para toda familia que cumpla bounds y pueden afectar coherencia futura de forma segura.",
      "Aplica type erasure mediante puntero y vtable para almacenar implementaciones heterogéneas con precisión.",
      "Exige que trait o tipo sea local para impedir implementaciones incompatibles entre crates de forma clara.",
      "Fija tipos relacionados por implementación y evita parámetros genéricos ambiguos para quien usa el trait."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Associated types (Traits y coherencia): Fijan tipos relacionados por implementación y evitan parámetros genéricos ambiguos para quien usa el trait.",
    "topic": "Traits y coherencia",
    "difficulty": "básico"
  },
  {
    "id": "rust-q-17",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «Trait objects» en traits y coherencia?",
    "options": [
      "Aplica type erasure mediante puntero y vtable para almacenar implementaciones heterogéneas al operar.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario al operar.",
      "Exige que trait o tipo sea local para impedir implementaciones incompatibles entre crates.",
      "Implementan un trait para toda familia que cumpla bounds y pueden afectar coherencia futura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Trait objects (Traits y coherencia): Aplican type erasure mediante puntero y vtable para almacenar implementaciones heterogéneas.",
    "topic": "Traits y coherencia",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-18",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Static frente a dynamic dispatch»?",
    "options": [
      "Compila puntos await en estados que conservan solo variables vivas entre polls al operar.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario.",
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Static frente a dynamic dispatch (Traits y coherencia): Compara monomorfización optimizable con selección en ejecución y tamaño de binario.",
    "topic": "Traits y coherencia",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-19",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Orphan rule»?",
    "options": [
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario al operar.",
      "Aplica type erasure mediante puntero y vtable para almacenar implementaciones heterogéneas.",
      "Exige que trait o tipo sea local para impedir implementaciones incompatibles entre crates.",
      "Implementan un trait para toda familia que cumpla bounds y pueden afectar coherencia futura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Orphan rule (Traits y coherencia): Exige que trait o tipo sea local para impedir implementaciones incompatibles entre crates.",
    "topic": "Traits y coherencia",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-20",
    "collectionId": "rust",
    "question": "Respecto a traits y coherencia en Rust, ¿cuál es el propósito de «Blanket implementations»?",
    "options": [
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario en el flujo.",
      "Exige que trait o tipo sea local para impedir implementaciones incompatibles entre crates.",
      "Aplica type erasure mediante puntero y vtable para almacenar implementaciones heterogéneas.",
      "Implementan un trait para toda familia que cumpla bounds y pueden afectar coherencia futura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Blanket implementations (Traits y coherencia): Implementan un trait para toda familia que cumpla bounds y pueden afectar coherencia futura.",
    "topic": "Traits y coherencia",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-21",
    "collectionId": "rust",
    "question": "En Rust (Abstracciones de costo cero), ¿qué función técnica cumple «Monomorphization»?",
    "options": [
      "Genera código especializado por combinación de tipos eliminando despacho a cambio de tamaño de artefacto.",
      "Incluye valores constantes en el tipo para expresar longitudes y capacidades verificables al compilar.",
      "Permite que un tipo asociado varíe con lifetimes o parámetros manteniendo relación con su implementador.",
      "Exigen que una función sea válida para cualquier lifetime y no solo uno elegido externamente al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Monomorphization (Abstracciones de costo cero): Genera código especializado por combinación de tipos eliminando despacho a cambio de tamaño de artefacto.",
    "topic": "Abstracciones de costo cero",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-22",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «Const generics» en abstracciones de costo cero?",
    "options": [
      "Exigen que una función sea válida para cualquier lifetime y no solo uno elegido externamente en el flujo.",
      "Incluye valores constantes en el tipo para expresar longitudes y capacidades verificables al compilar.",
      "Permite que un tipo asociado varíe con lifetimes o parámetros manteniendo relación con su implementador.",
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Const generics (Abstracciones de costo cero): Incluyen valores constantes en el tipo para expresar longitudes y capacidades verificables al compilar.",
    "topic": "Abstracciones de costo cero",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-23",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Higher-ranked trait bounds»?",
    "options": [
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen con precisión.",
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura al operar.",
      "Exigen que una función sea válida para cualquier lifetime y no solo uno elegido externamente.",
      "Notifican al executor que un future antes pendiente puede progresar sin sondeo continuo al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Higher-ranked trait bounds (Abstracciones de costo cero): Exigen que una función sea válida para cualquier lifetime y no solo uno elegido externamente.",
    "topic": "Abstracciones de costo cero",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-24",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Generic associated types»?",
    "options": [
      "Incluye valores constantes en el tipo para expresar longitudes y capacidades verificables al compilar al operar.",
      "Exigen que una función sea válida para cualquier lifetime y no solo uno elegido externamente al evaluar.",
      "Genera código especializado por combinación de tipos eliminando despacho a cambio de tamaño de artefacto.",
      "Permite que un tipo asociado varíe con lifetimes o parámetros manteniendo relación con su implementador."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Generic associated types (Abstracciones de costo cero): Permiten que un tipo asociado varíe con lifetimes o parámetros manteniendo relación con su implementador.",
    "topic": "Abstracciones de costo cero",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-25",
    "collectionId": "rust",
    "question": "Respecto a abstracciones de costo cero en Rust, ¿cuál es el propósito de «Type-state pattern»?",
    "options": [
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen al operar.",
      "Compila puntos await en estados que conservan solo variables vivas entre polls.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Type-state pattern (Abstracciones de costo cero): Codifica fases válidas como tipos para que operaciones fuera de orden no compilen.",
    "topic": "Abstracciones de costo cero",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-26",
    "collectionId": "rust",
    "question": "En Rust (Macros y generación), ¿qué función técnica cumple «macro_rules»?",
    "options": [
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar.",
      "Expande patrones sintácticos declarativos durante compilación sin evaluar texto arbitrario.",
      "Restringe metavariables a expresiones, tipos o elementos y preservan estructura del parser.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "macro_rules (Macros y generación): Expande patrones sintácticos declarativos durante compilación sin evaluar texto arbitrario.",
    "topic": "Macros y generación",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-27",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «Fragment specifiers» en macros y generación?",
    "options": [
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar.",
      "Expande patrones sintácticos declarativos durante compilación sin evaluar texto arbitrario.",
      "Restringe metavariables a expresiones, tipos o elementos y preservan estructura del parser.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Fragment specifiers (Macros y generación): Restringen metavariables a expresiones, tipos o elementos y preservan estructura del parser.",
    "topic": "Macros y generación",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-28",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Hygiene»?",
    "options": [
      "Compila puntos await en estados que conservan solo variables vivas entre polls al operar.",
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Hygiene (Macros y generación): Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca.",
    "topic": "Macros y generación",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-29",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Procedural macros»?",
    "options": [
      "Transforma token streams para derives, atributos o sintaxis function-like con diagnósticos propios al operar.",
      "Expande patrones sintácticos declarativos durante compilación sin evaluar texto arbitrario al operar.",
      "Restringe metavariables a expresiones, tipos o elementos y preservan estructura del parser al operar.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Procedural macros (Macros y generación): Transforman token streams para derives, atributos o sintaxis function-like con diagnósticos propios.",
    "topic": "Macros y generación",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-30",
    "collectionId": "rust",
    "question": "Respecto a macros y generación en Rust, ¿cuál es el propósito de «Build scripts»?",
    "options": [
      "Transforma token streams para derives, atributos o sintaxis function-like con diagnósticos propios al operar.",
      "Genera artefactos o detectan bibliotecas antes de compilar y deben declarar exactamente cuándo repetirse.",
      "Expande patrones sintácticos declarativos durante compilación sin evaluar texto arbitrario con precisión.",
      "Restringe metavariables a expresiones, tipos o elementos y preservan estructura del parser con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Build scripts (Macros y generación): Generan artefactos o detectan bibliotecas antes de compilar y deben declarar exactamente cuándo repetirse.",
    "topic": "Macros y generación",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-31",
    "collectionId": "rust",
    "question": "En Rust (Colecciones e iteración), ¿qué función técnica cumple «Vec»?",
    "options": [
      "Define iteración por valor, referencia o referencia mutable y determina qué puede usarse después con precisión.",
      "Realiza búsqueda e inserción condicional en una sola operación evitando consultas duplicadas de forma clara.",
      "Separa elementos inicializados de almacenamiento reservado y realoca cuando el crecimiento supera capacidad.",
      "Mantiene claves ordenadas en nodos cache-friendly y permite recorridos eficientes por rango de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Vec y capacidad (Colecciones e iteración): Separa elementos inicializados de almacenamiento reservado y realoca cuando el crecimiento supera capacidad.",
    "topic": "Colecciones e iteración",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-32",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «HashMap y entry API» en colecciones e iteración?",
    "options": [
      "Componen transformaciones perezosas que el consumidor final fusiona en un único recorrido al operar.",
      "Mantiene claves ordenadas en nodos cache-friendly y permite recorridos eficientes por rango.",
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura al operar.",
      "Realiza búsqueda e inserción condicional en una sola operación evitando consultas duplicadas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "HashMap y entry API (Colecciones e iteración): Realiza búsqueda e inserción condicional en una sola operación evitando consultas duplicadas.",
    "topic": "Colecciones e iteración",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-33",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «BTreeMap»?",
    "options": [
      "Mantiene claves ordenadas en nodos cache-friendly y permite recorridos eficientes por rango al operar.",
      "Componen transformaciones perezosas que el consumidor final fusiona en un único recorrido.",
      "Realiza búsqueda e inserción condicional en una sola operación evitando consultas duplicadas.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "BTreeMap (Colecciones e iteración): Mantiene claves ordenadas en nodos cache-friendly y permite recorridos eficientes por rango.",
    "topic": "Colecciones e iteración",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-34",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Iterator adapters»?",
    "options": [
      "Mantiene claves ordenadas en nodos cache-friendly y permite recorridos eficientes por rango.",
      "Componen transformaciones perezosas que el consumidor final fusiona en un único recorrido.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Iterator adapters (Colecciones e iteración): Componen transformaciones perezosas que el consumidor final fusiona en un único recorrido.",
    "topic": "Colecciones e iteración",
    "difficulty": "intermedio"
  },
  {
    "id": "rust-q-35",
    "collectionId": "rust",
    "question": "Respecto a colecciones e iteración en Rust, ¿cuál es el propósito de «IntoIterator y ownership»?",
    "options": [
      "Mantiene claves ordenadas en nodos cache-friendly y permite recorridos eficientes por rango al operar.",
      "Componen transformaciones perezosas que el consumidor final fusiona en un único recorrido al operar.",
      "Define iteración por valor, referencia o referencia mutable y determina qué puede usarse después.",
      "Realiza búsqueda e inserción condicional en una sola operación evitando consultas duplicadas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "IntoIterator y ownership (Colecciones e iteración): Define iteración por valor, referencia o referencia mutable y determina qué puede usarse después.",
    "topic": "Colecciones e iteración",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-36",
    "collectionId": "rust",
    "question": "En Rust (Concurrencia sin carreras), ¿qué función técnica cumple «Mutex y RwLock»?",
    "options": [
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar.",
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen al operar.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario al operar.",
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Mutex y RwLock (Concurrencia sin carreras): Protegen datos con guards RAII y hacen visible la política de lectura frente a escritura.",
    "topic": "Concurrencia sin carreras",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-37",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «Atomics y ordering» en concurrencia sin carreras?",
    "options": [
      "Coordina memoria sin locks mediante garantías de orden que deben corresponder al invariante al operar.",
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar.",
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Atomics y ordering (Concurrencia sin carreras): Coordinan memoria sin locks mediante garantías de orden que deben corresponder al invariante.",
    "topic": "Concurrencia sin carreras",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-38",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Scoped threads»?",
    "options": [
      "Coordina memoria sin locks mediante garantías de orden que deben corresponder al invariante al operar.",
      "Permite préstamos desde el stack y garantizan que los threads terminen antes de salir del alcance.",
      "Transfieren mensajes entre productores y consumidores definiendo capacidad, cierre y ownership.",
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Scoped threads (Concurrencia sin carreras): Permiten préstamos desde el stack y garantizan que los threads terminen antes de salir del alcance.",
    "topic": "Concurrencia sin carreras",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-39",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Channel patterns»?",
    "options": [
      "Protege datos con guards RAII y hacen visible la política de lectura frente a escritura al operar.",
      "Coordina memoria sin locks mediante garantías de orden que deben corresponder al invariante.",
      "Transfieren mensajes entre productores y consumidores definiendo capacidad, cierre y ownership.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Channel patterns (Concurrencia sin carreras): Transfieren mensajes entre productores y consumidores definiendo capacidad, cierre y ownership.",
    "topic": "Concurrencia sin carreras",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-40",
    "collectionId": "rust",
    "question": "Respecto a concurrencia sin carreras en Rust, ¿cuál es el propósito de «Rayon y paralelismo de datos»?",
    "options": [
      "Compila puntos await en estados que conservan solo variables vivas entre polls al operar.",
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Rayon y paralelismo de datos (Concurrencia sin carreras): Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial.",
    "topic": "Concurrencia sin carreras",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-41",
    "collectionId": "rust",
    "question": "En Rust (Asincronía en profundidad), ¿qué función técnica cumple «State machines de Future»?",
    "options": [
      "Compila puntos await en estados que conservan solo variables vivas entre polls de forma segura.",
      "Notifican al executor que un future antes pendiente puede progresar sin sondeo continuo.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario.",
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "State machines de Future (Asincronía en profundidad): Compilan puntos await en estados que conservan solo variables vivas entre polls.",
    "topic": "Asincronía en profundidad",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-42",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «Wakers» en asincronía en profundidad?",
    "options": [
      "Compila puntos await en estados que conservan solo variables vivas entre polls en el flujo.",
      "Notifican al executor que un future antes pendiente puede progresar sin sondeo continuo.",
      "Codifica fases válidas como tipos para que operaciones fuera de orden no compilen al operar.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Wakers (Asincronía en profundidad): Notifican al executor que un future antes pendiente puede progresar sin sondeo continuo.",
    "topic": "Asincronía en profundidad",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-43",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Streams asíncronos»?",
    "options": [
      "Notifican al executor que un future antes pendiente puede progresar sin sondeo continuo al operar.",
      "Compila puntos await en estados que conservan solo variables vivas entre polls en ejecución.",
      "Producen una secuencia de elementos pendientes y propagan finalización o error gradualmente.",
      "Garantiza que descartar un future en un await no pierda datos ni rompa una operación parcial."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Streams asíncronos (Asincronía en profundidad): Producen una secuencia de elementos pendientes y propagan finalización o error gradualmente.",
    "topic": "Asincronía en profundidad",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-44",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «Cancel safety»?",
    "options": [
      "Notifican al executor que un future antes pendiente puede progresar sin sondeo continuo al operar.",
      "Producen una secuencia de elementos pendientes y propagan finalización o error gradualmente.",
      "Compila puntos await en estados que conservan solo variables vivas entre polls con precisión.",
      "Garantiza que descartar un future en un await no pierda datos ni rompa una operación parcial."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Cancel safety (Asincronía en profundidad): Garantiza que descartar un future en un await no pierda datos ni rompa una operación parcial.",
    "topic": "Asincronía en profundidad",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-45",
    "collectionId": "rust",
    "question": "Respecto a unsafe con invariantes en Rust, ¿cuál es el propósito de «Raw pointers»?",
    "options": [
      "Permite direcciones sin préstamos comprobados y obligan a demostrar validez antes de desreferenciar.",
      "Encierran una región unsafe pequeña y exponen una API cuyas precondiciones se verifican externamente.",
      "Comunica al compilador ownership, varianza o lifetime que no aparecen como campos almacenados.",
      "Distingue duplicación implícita bit a bit de una clonación potencialmente costosa y explícita."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Raw pointers (Unsafe con invariantes): Permiten direcciones sin préstamos comprobados y obligan a demostrar validez antes de desreferenciar.",
    "topic": "Unsafe con invariantes",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-46",
    "collectionId": "rust",
    "question": "En Rust (Unsafe con invariantes), ¿qué función técnica cumple «Alias rules»?",
    "options": [
      "Permite direcciones sin préstamos comprobados y obligan a demostrar validez antes de desreferenciar al operar.",
      "Restringe referencias mutables y compartidas para que optimizaciones no observen escrituras inesperadas.",
      "Encierran una región unsafe pequeña y exponen una API cuyas precondiciones se verifican externamente.",
      "Permite préstamos desde el stack y garantizan que los threads terminen antes de salir del alcance al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Alias rules (Unsafe con invariantes): Restringen referencias mutables y compartidas para que optimizaciones no observen escrituras inesperadas.",
    "topic": "Unsafe con invariantes",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-47",
    "collectionId": "rust",
    "question": "Dentro de Rust, ¿cómo opera el mecanismo de «MaybeUninit» en unsafe con invariantes?",
    "options": [
      "Restringe referencias mutables y compartidas para que optimizaciones no observen escrituras inesperadas al operar.",
      "Encierran una región unsafe pequeña y exponen una API cuyas precondiciones se verifican externamente al operar.",
      "Representa almacenamiento aún no inicializado sin crear un valor inválido que cause comportamiento indefinido.",
      "Permite direcciones sin préstamos comprobados y obligan a demostrar validez antes de desreferenciar al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "MaybeUninit (Unsafe con invariantes): Representa almacenamiento aún no inicializado sin crear un valor inválido que cause comportamiento indefinido.",
    "topic": "Unsafe con invariantes",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-48",
    "collectionId": "rust",
    "question": "Al trabajar con Rust, ¿qué responsabilidad define a «Safe wrappers»?",
    "options": [
      "Permite direcciones sin préstamos comprobados y obligan a demostrar validez antes de desreferenciar al operar.",
      "Transfieren mensajes entre productores y consumidores definiendo capacidad, cierre y ownership al operar.",
      "Fija convención de llamada y tipos compatibles para cruzar la frontera con bibliotecas nativas al operar.",
      "Encierran una región unsafe pequeña y exponen una API cuyas precondiciones se verifican externamente."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Safe wrappers (Unsafe con invariantes): Encierran una región unsafe pequeña y exponen una API cuyas precondiciones se verifican externamente.",
    "topic": "Unsafe con invariantes",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-49",
    "collectionId": "rust",
    "question": "En la arquitectura de Rust, ¿qué caracteriza técnicamente a «ABI C»?",
    "options": [
      "Fija convención de llamada y tipos compatibles para cruzar la frontera con bibliotecas nativas.",
      "Genera declaraciones desde headers o APIs Rust y requieren revisar ownership y plataforma.",
      "Representa cálculos que no regresan o estados imposibles y mejoran el análisis exhaustivo.",
      "Exige que trait o tipo sea local para impedir implementaciones incompatibles entre crates."
    ],
    "correctAnswerIndex": 0,
    "explanation": "ABI C (Interoperabilidad): Fija convención de llamada y tipos compatibles para cruzar la frontera con bibliotecas nativas.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  },
  {
    "id": "rust-q-50",
    "collectionId": "rust",
    "question": "Respecto a interoperabilidad en Rust, ¿cuál es el propósito de «Bindgen y cbindgen»?",
    "options": [
      "Evita capturas accidentales de nombres entre la macro y el contexto donde se invoca al operar.",
      "Genera declaraciones desde headers o APIs Rust y requieren revisar ownership y plataforma.",
      "Divide iteradores en tareas y usa work stealing sin cambiar su resultado secuencial al operar.",
      "Compara monomorfización optimizable con selección en ejecución y tamaño de binario al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bindgen y cbindgen (Interoperabilidad): Generan declaraciones desde headers o APIs Rust y requieren revisar ownership y plataforma.",
    "topic": "Interoperabilidad",
    "difficulty": "avanzado"
  }
];
