import type { QuizQuestion } from "@/data/quizTypes";

export const cppQuestions: QuizQuestion[] = [
  {
    "id": "cpp-q-01",
    "collectionId": "cpp",
    "question": "En C++ (Modelo del lenguaje y compilación ODR), ¿qué función técnica cumple «Compilación y One Definition Rule»?",
    "options": [
      "Coordina unidades de traducción sin definiciones incompatibles manteniendo consistencia.",
      "Controla qué declaraciones son visibles entre bibliotecas compartidas de forma segura.",
      "Separa inmutabilidad observable de evaluación posible en compilación dentro del flujo.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Compilación y One Definition Rule (Modelo del lenguaje y compilación ODR): Coordina unidades de traducción sin definiciones incompatibles.",
    "topic": "Modelo del lenguaje y compilación ODR",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-02",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Inicialización» en modelo del lenguaje y compilación odr?",
    "options": [
      "Controla qué declaraciones son visibles entre bibliotecas compartidas durante la ejecución.",
      "Distingue default, value, direct, list y aggregate initialization sin degradar el flujo.",
      "Separa inmutabilidad observable de evaluación posible en compilación de modo predecible.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Inicialización (Modelo del lenguaje y compilación ODR): Distingue default, value, direct, list y aggregate initialization.",
    "topic": "Modelo del lenguaje y compilación ODR",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-03",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «const y constexpr»?",
    "options": [
      "Controla qué declaraciones son visibles entre bibliotecas compartidas durante la ejecución.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar.",
      "Separa inmutabilidad observable de evaluación posible en compilación de modo predecible.",
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "const y constexpr (Modelo del lenguaje y compilación ODR): Separa inmutabilidad observable de evaluación posible en compilación.",
    "topic": "Modelo del lenguaje y compilación ODR",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-04",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Namespaces y lookup»?",
    "options": [
      "Controla qué declaraciones son visibles entre bibliotecas compartidas durante la ejecución.",
      "Separa inmutabilidad observable de evaluación posible en compilación de modo predecible.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar.",
      "Resuelve nombres mediante scopes, ADL y using declarations bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Namespaces y lookup (Modelo del lenguaje y compilación ODR): Resuelve nombres mediante scopes, ADL y using declarations.",
    "topic": "Modelo del lenguaje y compilación ODR",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-05",
    "collectionId": "cpp",
    "question": "Respecto a modelo del lenguaje y compilación odr en C++, ¿cuál es el propósito de «Modules y headers»?",
    "options": [
      "Reduce dependencia textual manteniendo interfaces explícitas respetando las invariantes.",
      "Controla qué declaraciones son visibles entre bibliotecas compartidas de forma segura.",
      "Separa inmutabilidad observable de evaluación posible en compilación dentro del flujo.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Modules y headers (Modelo del lenguaje y compilación ODR): Reduce dependencia textual manteniendo interfaces explícitas.",
    "topic": "Modelo del lenguaje y compilación ODR",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-06",
    "collectionId": "cpp",
    "question": "En C++ (Modelo del lenguaje y compilación ODR), ¿qué función técnica cumple «Linkage y visibilidad de símbolos»?",
    "options": [
      "Separa inmutabilidad observable de evaluación posible en compilación sin degradar el flujo.",
      "Controla qué declaraciones son visibles entre bibliotecas compartidas sin perder estado.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar.",
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Linkage y visibilidad de símbolos (Modelo del lenguaje y compilación ODR): Controla qué declaraciones son visibles entre bibliotecas compartidas.",
    "topic": "Modelo del lenguaje y compilación ODR",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-07",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Storage y object lifetime» en objetos, lifetime y raii determinista?",
    "options": [
      "Decide cuándo implementar constructores de copia, movimiento y destructor dentro del flujo.",
      "Vincula archivos, locks y memoria al lifetime determinista de un objeto de forma segura.",
      "Distingue memoria reservada de un objeto que ya comenzó a vivir dentro de la aplicación.",
      "Establece invariantes al adquirir y libera recursos al salir del scope dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Storage y object lifetime (Objetos, lifetime y RAII determinista): Distingue memoria reservada de un objeto que ya comenzó a vivir.",
    "topic": "Objetos, lifetime y RAII determinista",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-08",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Constructores y destructores»?",
    "options": [
      "Decide cuándo implementar constructores de copia, movimiento y destructor dentro del flujo.",
      "Vincula archivos, locks y memoria al lifetime determinista de un objeto de forma segura.",
      "Garantiza que ningún constructor exponga un objeto a medio inicializar dentro del flujo.",
      "Establece invariantes al adquirir y libera recursos al salir del scope dentro del flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Constructores y destructores (Objetos, lifetime y RAII determinista): Establece invariantes al adquirir y libera recursos al salir del scope.",
    "topic": "Objetos, lifetime y RAII determinista",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-09",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «RAII»?",
    "options": [
      "Vincula archivos, locks y memoria al lifetime determinista de un objeto de forma segura.",
      "Decide cuándo implementar constructores de copia, movimiento y destructor en el flujo.",
      "Establece invariantes al adquirir y libera recursos al salir del scope de forma clara.",
      "Garantiza que ningún constructor exponga un objeto a medio inicializar de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "RAII (Objetos, lifetime y RAII determinista): Vincula archivos, locks y memoria al lifetime determinista de un objeto.",
    "topic": "Objetos, lifetime y RAII determinista",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-10",
    "collectionId": "cpp",
    "question": "Respecto a objetos, lifetime y raii determinista en C++, ¿cuál es el propósito de «Smart pointers»?",
    "options": [
      "Decide cuándo implementar constructores de copia, movimiento y destructor en el flujo.",
      "Expresa ownership único, compartido o débil dentro del ciclo operativo del sistema.",
      "Vincula archivos, locks y memoria al lifetime determinista de un objeto al evaluar.",
      "Establece invariantes al adquirir y libera recursos al salir del scope en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Smart pointers (Objetos, lifetime y RAII determinista): Expresa ownership único (unique_ptr), compartido (shared_ptr) o débil (weak_ptr).",
    "topic": "Objetos, lifetime y RAII determinista",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-11",
    "collectionId": "cpp",
    "question": "En C++ (Objetos, lifetime y RAII determinista), ¿qué función técnica cumple «Regla del cero, tres y cinco»?",
    "options": [
      "Vincula archivos, locks y memoria al lifetime determinista de un objeto de modo predecible.",
      "Establece invariantes al adquirir y libera recursos al salir del scope dentro del flujo.",
      "Decide cuándo implementar constructores de copia, movimiento y destructor con precisión.",
      "Garantiza que ningún constructor exponga un objeto a medio inicializar dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Regla del cero, tres y cinco (Objetos, lifetime y RAII determinista): Decide cuándo implementar constructores de copia, movimiento y destructor.",
    "topic": "Objetos, lifetime y RAII determinista",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-12",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Invariantes de clase y estado válido» en objetos, lifetime y raii determinista?",
    "options": [
      "Decide cuándo implementar constructores de copia, movimiento y destructor dentro del flujo.",
      "Vincula archivos, locks y memoria al lifetime determinista de un objeto de forma segura.",
      "Establece invariantes al adquirir y libera recursos al salir del scope dentro del flujo.",
      "Garantiza que ningún constructor exponga un objeto a medio inicializar dentro del flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Invariantes de clase y estado válido (Objetos, lifetime y RAII determinista): Garantiza que ningún constructor exponga un objeto a medio inicializar.",
    "topic": "Objetos, lifetime y RAII determinista",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-13",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Lvalues, prvalues y xvalues»?",
    "options": [
      "Clasifica expresiones para decidir si pueden moverse o vincularse a referencias de forma clara.",
      "Diferencia referencias de movimiento de universal/forwarding references en templates.",
      "Forward::Preserva la categoría de valor original al reenviar argumentos en plantillas.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Lvalues, prvalues y xvalues (Move semantics, rvalues y value categories): Clasifica expresiones para decidir si pueden moverse o vincularse a referencias.",
    "topic": "Move semantics, rvalues y value categories",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-14",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Constructores y asignación de movimiento»?",
    "options": [
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar.",
      "Transfiere punteros internos dejando el objeto origen en estado válido dentro del flujo.",
      "Clasifica expresiones para decidir si pueden moverse o vincularse a referencias al operar.",
      "Diferencia referencias de movimiento de universal/forwarding references en templates."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Constructores y asignación de movimiento (Move semantics, rvalues y value categories): Transfiere punteros internos dejando el objeto origen en estado válido.",
    "topic": "Move semantics, rvalues y value categories",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-15",
    "collectionId": "cpp",
    "question": "Respecto a move semantics, rvalues y value categories en C++, ¿cuál es el propósito de «std»?",
    "options": [
      "Garantiza que contenedores como std::vector reubiquen elementos moviendo y no copiando sin degradar el flujo.",
      "Forward::Preserva la categoría de valor original al reenviar argumentos en plantillas de modo predecible.",
      "Move y casts incondicionales::Convierte una expresión en rvalue para habilitar transferencia de ownership.",
      "Diferencia referencias de movimiento de universal/forwarding references en templates durante la ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "std (Move semantics, rvalues y value categories): move y casts incondicionales::Convierte una expresión en rvalue para habilitar transferencia de ownership.",
    "topic": "Move semantics, rvalues y value categories",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-16",
    "collectionId": "cpp",
    "question": "En C++ (Move semantics, rvalues y value categories), ¿qué función técnica cumple «Perfect forwarding con std»?",
    "options": [
      "Clasifica expresiones para decidir si pueden moverse o vincularse a referencias al operar.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales.",
      "Diferencia referencias de movimiento de universal/forwarding references en templates.",
      "Forward::Preserva la categoría de valor original al reenviar argumentos en plantillas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Perfect forwarding con std (Move semantics, rvalues y value categories): forward::Preserva la categoría de valor original al reenviar argumentos en plantillas.",
    "topic": "Move semantics, rvalues y value categories",
    "difficulty": "básico"
  },
  {
    "id": "cpp-q-17",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Referencias a rvalues (T&&)» en move semantics, rvalues y value categories?",
    "options": [
      "Diferencia referencias de movimiento de universal/forwarding references en templates.",
      "Clasifica expresiones para decidir si pueden moverse o vincularse a referencias.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales.",
      "Forward::Preserva la categoría de valor original al reenviar argumentos en plantillas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Referencias a rvalues (T&&) (Move semantics, rvalues y value categories): Diferencia referencias de movimiento de universal/forwarding references en templates.",
    "topic": "Move semantics, rvalues y value categories",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-18",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Movimiento sin excepciones noexcept»?",
    "options": [
      "Clasifica expresiones para decidir si pueden moverse o vincularse a referencias al operar.",
      "Garantiza que contenedores como std::vector reubiquen elementos moviendo y no copiando.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar.",
      "Diferencia referencias de movimiento de universal/forwarding references en templates."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Movimiento sin excepciones noexcept (Move semantics, rvalues y value categories): Garantiza que contenedores como std::vector reubiquen elementos moviendo y no copiando.",
    "topic": "Move semantics, rvalues y value categories",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-19",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Elisión de copia y RVO»?",
    "options": [
      "Clasifica expresiones para decidir si pueden moverse o vincularse a referencias al operar.",
      "Transfiere punteros internos dejando el objeto origen en estado válido al evaluar.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales.",
      "Usa polimorfismo dinámico solo cuando el contrato base admite reemplazo real al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Elisión de copia y RVO (Move semantics, rvalues y value categories): Permite al compilador omitir copias y movimientos al retornar objetos locales.",
    "topic": "Move semantics, rvalues y value categories",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-20",
    "collectionId": "cpp",
    "question": "Respecto a tipos, herencia y polimorfismo dinámico en C++, ¿cuál es el propósito de «Clases e invariantes»?",
    "options": [
      "Resuelve la implementación mediante la tabla de funciones virtuales en runtime al evaluar.",
      "Usa polimorfismo dinámico solo cuando el contrato base admite reemplazo real al operar.",
      "Resuelve el problema del diamante unificando subobjetos base compartidos con precisión.",
      "Encapsula estado de modo que toda operación pública preserve reglas de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Clases e invariantes (Tipos, herencia y polimorfismo dinámico): Encapsula estado de modo que toda operación pública preserve reglas.",
    "topic": "Tipos, herencia y polimorfismo dinámico",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-21",
    "collectionId": "cpp",
    "question": "En C++ (Tipos, herencia y polimorfismo dinámico), ¿qué función técnica cumple «Herencia y substitución»?",
    "options": [
      "Usa polimorfismo dinámico solo cuando el contrato base admite reemplazo real de forma clara.",
      "Resuelve la implementación mediante la tabla de funciones virtuales en runtime al operar.",
      "Resuelve el problema del diamante unificando subobjetos base compartidos en ejecución.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Herencia y substitución (Tipos, herencia y polimorfismo dinámico): Usa polimorfismo dinámico solo cuando el contrato base admite reemplazo real.",
    "topic": "Tipos, herencia y polimorfismo dinámico",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-22",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Virtual dispatch y vtables» en tipos, herencia y polimorfismo dinámico?",
    "options": [
      "Usa polimorfismo dinámico solo cuando el contrato base admite reemplazo real de forma clara.",
      "Resuelve la implementación mediante la tabla de funciones virtuales en runtime al operar.",
      "Resuelve el problema del diamante unificando subobjetos base compartidos de forma segura.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Virtual dispatch y vtables (Tipos, herencia y polimorfismo dinámico): Resuelve la implementación mediante la tabla de funciones virtuales en runtime.",
    "topic": "Tipos, herencia y polimorfismo dinámico",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-23",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Destructores virtuales»?",
    "options": [
      "Resuelve la implementación mediante la tabla de funciones virtuales en runtime de forma segura.",
      "Usa polimorfismo dinámico solo cuando el contrato base admite reemplazo real de forma clara.",
      "Asegura la invocación del destructor correcto al eliminar instancias mediante punteros base.",
      "Resuelve el problema del diamante unificando subobjetos base compartidos de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Destructores virtuales (Tipos, herencia y polimorfismo dinámico): Asegura la invocación del destructor correcto al eliminar instancias mediante punteros base.",
    "topic": "Tipos, herencia y polimorfismo dinámico",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-24",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Herencia múltiple y clases virtuales»?",
    "options": [
      "Resuelve la implementación mediante la tabla de funciones virtuales en runtime en el flujo.",
      "Usa polimorfismo dinámico solo cuando el contrato base admite reemplazo real al evaluar.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar.",
      "Resuelve el problema del diamante unificando subobjetos base compartidos de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Herencia múltiple y clases virtuales (Tipos, herencia y polimorfismo dinámico): Resuelve el problema del diamante unificando subobjetos base compartidos.",
    "topic": "Tipos, herencia y polimorfismo dinámico",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-25",
    "collectionId": "cpp",
    "question": "Respecto a templates, especialización y variadic packs en C++, ¿cuál es el propósito de «Function y class templates»?",
    "options": [
      "Genera familias de operaciones y tipos a partir de parámetros manteniendo el contrato activo.",
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores.",
      "Infere parámetros conservando referencias, const y forwarding según el contexto al operar.",
      "Aplica operadores binarios sobre paquetes de parámetros con sintaxis concisa al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Function y class templates (Templates, especialización y variadic packs): Genera familias de operaciones y tipos a partir de parámetros.",
    "topic": "Templates, especialización y variadic packs",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-26",
    "collectionId": "cpp",
    "question": "En C++ (Templates, especialización y variadic packs), ¿qué función técnica cumple «Type deduction»?",
    "options": [
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores en el flujo.",
      "Infere parámetros conservando referencias, const y forwarding según el contexto al operar.",
      "Aplica operadores binarios sobre paquetes de parámetros con sintaxis concisa en ejecución.",
      "Personaliza casos sin romper la selección primaria ni crear ambigüedad de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Type deduction (Templates, especialización y variadic packs): Infere parámetros conservando referencias, const y forwarding según el contexto.",
    "topic": "Templates, especialización y variadic packs",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-27",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Especialización explícita y parcial» en templates, especialización y variadic packs?",
    "options": [
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores al operar.",
      "Infere parámetros conservando referencias, const y forwarding según el contexto al operar.",
      "Personaliza casos sin romper la selección primaria ni crear ambigüedad dentro del flujo.",
      "Aplica operadores binarios sobre paquetes de parámetros con sintaxis concisa al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Especialización explícita y parcial (Templates, especialización y variadic packs): Personaliza casos sin romper la selección primaria ni crear ambigüedad.",
    "topic": "Templates, especialización y variadic packs",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-28",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Variadic templates y parameter packs»?",
    "options": [
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores al operar.",
      "Infere parámetros conservando referencias, const y forwarding según el contexto al operar.",
      "Aplica operadores binarios sobre paquetes de parámetros con sintaxis concisa al evaluar.",
      "Modela listas de tipos y argumentos de longitud arbitraria bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Variadic templates y parameter packs (Templates, especialización y variadic packs): Modela listas de tipos y argumentos de longitud arbitraria.",
    "topic": "Templates, especialización y variadic packs",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-29",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Fold expressions»?",
    "options": [
      "Aplica operadores binarios sobre paquetes de parámetros con sintaxis concisa dentro del flujo.",
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores al operar.",
      "Infere parámetros conservando referencias, const y forwarding según el contexto al operar.",
      "Personaliza casos sin romper la selección primaria ni crear ambigüedad de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fold expressions (Templates, especialización y variadic packs): Aplica operadores binarios sobre paquetes de parámetros con sintaxis concisa.",
    "topic": "Templates, especialización y variadic packs",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-30",
    "collectionId": "cpp",
    "question": "Respecto a templates, especialización y variadic packs en C++, ¿cuál es el propósito de «SFINAE y std»?",
    "options": [
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores dentro de la aplicación.",
      "Enable_if::Elimina sobrecargas inválidas del conjunto de candidatos sin provocar error de compilación.",
      "Infere parámetros conservando referencias, const y forwarding según el contexto sin degradar el flujo.",
      "Ejecuta transformaciones y ordenamientos aprovechando múltiples hilos con execution policies al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SFINAE y std (Templates, especialización y variadic packs): enable_if::Elimina sobrecargas inválidas del conjunto de candidatos sin provocar error de compilación.",
    "topic": "Templates, especialización y variadic packs",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-31",
    "collectionId": "cpp",
    "question": "En C++ (Templates, especialización y variadic packs), ¿qué función técnica cumple «Template template parameters»?",
    "options": [
      "Infere parámetros conservando referencias, const y forwarding según el contexto con precisión.",
      "Aplica operadores binarios sobre paquetes de parámetros con sintaxis concisa con precisión.",
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores al operar.",
      "Diferencia referencias de movimiento de universal/forwarding references en templates al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Template template parameters (Templates, especialización y variadic packs): Acepta plantillas como argumentos de otras plantillas para componer contenedores.",
    "topic": "Templates, especialización y variadic packs",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-32",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Concepts como contratos de tipos» en concepts, constraints y type traits de c++20?",
    "options": [
      "Aprovecha mensajes de error precisos generados cuando un tipo no satisface un concepto al operar.",
      "Permite resolver ambigüedades genéricas mediante subsunción de conceptos de forma clara.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar.",
      "Restringe plantillas mediante predicados semánticos evaluados en compilación al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Concepts como contratos de tipos (Concepts, constraints y type traits de C++20): Restringe plantillas mediante predicados semánticos evaluados en compilación.",
    "topic": "Concepts, constraints y type traits de C++20",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-33",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Cláusula requires»?",
    "options": [
      "Especifica expresiones válidas, tipos anidados y requisitos de retorno para tipos genéricos.",
      "Aprovecha mensajes de error precisos generados cuando un tipo no satisface un concepto.",
      "Concepts::Usa contratos predefinidos como same_as, derived_from, convertible_to y invocable.",
      "Restringe plantillas mediante predicados semánticos evaluados en compilación en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cláusula requires (Concepts, constraints y type traits de C++20): Especifica expresiones válidas, tipos anidados y requisitos de retorno para tipos genéricos.",
    "topic": "Concepts, constraints y type traits de C++20",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-34",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Type traits en std»?",
    "options": [
      "Restringe plantillas mediante predicados semánticos evaluados en compilación con precisión.",
      "Type_traits::Inspecciona propiedades de tipos en compilación respetando las invariantes.",
      "Aprovecha mensajes de error precisos generados cuando un tipo no satisface un concepto.",
      "Permite resolver ambigüedades genéricas mediante subsunción de conceptos de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Type traits en std (Concepts, constraints y type traits de C++20): type_traits::Inspecciona propiedades de tipos en compilación (is_integral, is_pod, is_invocable).",
    "topic": "Concepts, constraints y type traits de C++20",
    "difficulty": "intermedio"
  },
  {
    "id": "cpp-q-35",
    "collectionId": "cpp",
    "question": "Respecto a concepts, constraints y type traits de c++20 en C++, ¿cuál es el propósito de «Concepts estándar en std»?",
    "options": [
      "Aprovecha mensajes de error precisos generados cuando un tipo no satisface un concepto al operar.",
      "Especifica expresiones válidas, tipos anidados y requisitos de retorno para tipos genéricos.",
      "Concepts::Usa contratos predefinidos como same_as, derived_from, convertible_to y invocable.",
      "Restringe plantillas mediante predicados semánticos evaluados en compilación de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Concepts estándar en std (Concepts, constraints y type traits de C++20): concepts::Usa contratos predefinidos como same_as, derived_from, convertible_to y invocable.",
    "topic": "Concepts, constraints y type traits de C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-36",
    "collectionId": "cpp",
    "question": "En C++ (Concepts, constraints y type traits de C++20), ¿qué función técnica cumple «Sobrecargas restringidas por conceptos»?",
    "options": [
      "Restringe plantillas mediante predicados semánticos evaluados en compilación con precisión.",
      "Aprovecha mensajes de error precisos generados cuando un tipo no satisface un concepto.",
      "Permite al compilador omitir duplicados y movimientos al retornar objetos locales al operar.",
      "Permite resolver ambigüedades genéricas mediante subsunción de conceptos de forma clara."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sobrecargas restringidas por conceptos (Concepts, constraints y type traits de C++20): Permite resolver ambigüedades genéricas mediante subsunción de conceptos.",
    "topic": "Concepts, constraints y type traits de C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-37",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Diagnósticos claros del compilador» en concepts, constraints y type traits de c++20?",
    "options": [
      "Aprovecha mensajes de error precisos generados cuando un tipo no satisface un concepto.",
      "Restringe plantillas mediante predicados semánticos evaluados en compilación al operar.",
      "Permite resolver ambigüedades genéricas mediante subsunción de conceptos en el flujo.",
      "Acepta plantillas como argumentos de otras plantillas para componer contenedores."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Diagnósticos claros del compilador (Concepts, constraints y type traits de C++20): Aprovecha mensajes de error precisos generados cuando un tipo no satisface un concepto.",
    "topic": "Concepts, constraints y type traits de C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-38",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Contenedores y localidad de memoria»?",
    "options": [
      "Ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios al operar.",
      "Elige vector, deque o unordered_map según patrones de acceso a caché de modo predecible.",
      "Mejora rendimiento almacenando llaves y valores en vectores contiguos ordenados al operar.",
      "Conecta secuencias con algoritmos mediante contratos de avance y desreferencia al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Contenedores y localidad de memoria (STL moderna, ranges y allocators PMR): Elige vector, deque o unordered_map según patrones de acceso a caché.",
    "topic": "STL moderna, ranges y allocators PMR",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-39",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Iteradores y categorías de acceso»?",
    "options": [
      "Ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios al operar.",
      "Mejora rendimiento almacenando llaves y valores en vectores contiguos ordenados al operar.",
      "Conecta secuencias con algoritmos mediante contratos de avance y desreferencia al operar.",
      "Controla de dónde obtiene memoria un contenedor mediante allocators dinámicos al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Iteradores y categorías de acceso (STL moderna, ranges y allocators PMR): Conecta secuencias con algoritmos mediante contratos de avance y desreferencia.",
    "topic": "STL moderna, ranges y allocators PMR",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-40",
    "collectionId": "cpp",
    "question": "Respecto a stl moderna, ranges y allocators pmr en C++, ¿cuál es el propósito de «Vistas y pipelines en std»?",
    "options": [
      "Controla de dónde obtiene memoria un contenedor mediante allocators dinámicos al operar.",
      "Conecta secuencias con algoritmos mediante contratos de avance y desreferencia al operar.",
      "Mejora rendimiento almacenando llaves y valores en vectores contiguos ordenados.",
      "Ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Vistas y pipelines en std (STL moderna, ranges y allocators PMR): ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios.",
    "topic": "STL moderna, ranges y allocators PMR",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-41",
    "collectionId": "cpp",
    "question": "En C++ (STL moderna, ranges y allocators PMR), ¿qué función técnica cumple «Polymorphic memory resources (PMR)»?",
    "options": [
      "Controla de dónde obtiene memoria un contenedor mediante allocators dinámicos de forma clara.",
      "Ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios.",
      "Mejora rendimiento almacenando llaves y valores en vectores contiguos ordenados al operar.",
      "Conecta secuencias con algoritmos mediante contratos de avance y desreferencia al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Polymorphic memory resources (PMR) (STL moderna, ranges y allocators PMR): Controla de dónde obtiene memoria un contenedor mediante allocators dinámicos.",
    "topic": "STL moderna, ranges y allocators PMR",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-42",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Algoritmos paralelos de la STL» en stl moderna, ranges y allocators pmr?",
    "options": [
      "Ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios en el flujo.",
      "Ejecuta transformaciones y ordenamientos aprovechando múltiples hilos con execution policies.",
      "Mejora rendimiento almacenando llaves y valores en vectores contiguos ordenados en ejecución.",
      "Conecta secuencias con algoritmos mediante contratos de avance y desreferencia con precisión."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Algoritmos paralelos de la STL (STL moderna, ranges y allocators PMR): Ejecuta transformaciones y ordenamientos aprovechando múltiples hilos con execution policies.",
    "topic": "STL moderna, ranges y allocators PMR",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-43",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Estructuras asociadas planas (flat_map)»?",
    "options": [
      "Ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios al operar.",
      "Conecta secuencias con algoritmos mediante contratos de avance y desreferencia al evaluar.",
      "Mejora rendimiento almacenando llaves y valores en vectores contiguos ordenados al operar.",
      "Controla de dónde obtiene memoria un contenedor mediante allocators dinámicos en el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Estructuras asociadas planas (flat_map) (STL moderna, ranges y allocators PMR): Mejora rendimiento almacenando llaves y valores en vectores contiguos ordenados.",
    "topic": "STL moderna, ranges y allocators PMR",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-44",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Hilos nativos con std»?",
    "options": [
      "Coordina despertar de hilos evitando desperdicio de ciclos mediante predicados seguros al operar.",
      "Suspende y reanuda funciones sin bloquear hilos mediante promesas y coroutine handles al operar.",
      "Atomic::Garantiza visibilidad y orden con memory_order_relaxed, acquire, release y seq_cst.",
      "Jthread::Gestiona concurrencia con unión automática y token de parada cooperativo stop_token."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Hilos nativos con std (Concurrencia, atomics y coroutines C++20): jthread::Gestiona concurrencia con unión automática y token de parada cooperativo stop_token.",
    "topic": "Concurrencia, atomics y coroutines C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-45",
    "collectionId": "cpp",
    "question": "Respecto a concurrencia, atomics y coroutines c++20 en C++, ¿cuál es el propósito de «Locks RAII y mutexes»?",
    "options": [
      "Usa std::unique_lock, scoped_lock y shared_lock para prevenir bloqueos mutuos al operar.",
      "Suspende y reanuda funciones sin bloquear hilos mediante promesas y coroutine handles.",
      "Coordina despertar de hilos evitando desperdicio de ciclos mediante predicados seguros.",
      "Produce secuencias infinitas o calculadas bajo demanda de forma asíncrona en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Locks RAII y mutexes (Concurrencia, atomics y coroutines C++20): Usa std::unique_lock, scoped_lock y shared_lock para prevenir bloqueos mutuos.",
    "topic": "Concurrencia, atomics y coroutines C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-46",
    "collectionId": "cpp",
    "question": "En C++ (Concurrencia, atomics y coroutines C++20), ¿qué función técnica cumple «Variables de condición»?",
    "options": [
      "Usa std::unique_lock, scoped_lock y shared_lock para prevenir bloqueos mutuos en el flujo.",
      "Coordina despertar de hilos evitando desperdicio de ciclos mediante predicados seguros.",
      "Suspende y reanuda funciones sin bloquear hilos mediante promesas y coroutine handles.",
      "Produce secuencias infinitas o calculadas bajo demanda de forma asíncrona en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Variables de condición (Concurrencia, atomics y coroutines C++20): Coordina despertar de hilos evitando desperdicio de ciclos mediante predicados seguros.",
    "topic": "Concurrencia, atomics y coroutines C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-47",
    "collectionId": "cpp",
    "question": "Dentro de C++, ¿cómo opera el mecanismo de «Modelo de memoria atómica std» en concurrencia, atomics y coroutines c++20?",
    "options": [
      "Suspende y reanuda funciones sin bloquear hilos mediante promesas y coroutine handles al operar.",
      "Coordina despertar de hilos evitando desperdicio de ciclos mediante predicados seguros.",
      "Atomic::Garantiza visibilidad y orden con memory_order_relaxed, acquire, release y seq_cst.",
      "Usa std::unique_lock, scoped_lock y shared_lock para prevenir bloqueos mutuos en ejecución."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Modelo de memoria atómica std (Concurrencia, atomics y coroutines C++20): atomic::Garantiza visibilidad y orden con memory_order_relaxed, acquire, release y seq_cst.",
    "topic": "Concurrencia, atomics y coroutines C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-48",
    "collectionId": "cpp",
    "question": "Al trabajar con C++, ¿qué responsabilidad define a «Coroutines y co_await»?",
    "options": [
      "Usa std::unique_lock, scoped_lock y shared_lock para prevenir bloqueos mutuos al evaluar.",
      "Produce secuencias infinitas o calculadas bajo demanda de forma asíncrona en el flujo.",
      "Coordina despertar de hilos evitando desperdicio de ciclos mediante predicados seguros.",
      "Suspende y reanuda funciones sin bloquear hilos mediante promesas y coroutine handles."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Coroutines y co_await (Concurrencia, atomics y coroutines C++20): Suspende y reanuda funciones sin bloquear hilos mediante promesas y coroutine handles.",
    "topic": "Concurrencia, atomics y coroutines C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-49",
    "collectionId": "cpp",
    "question": "En la arquitectura de C++, ¿qué caracteriza técnicamente a «Generadores con co_yield»?",
    "options": [
      "Produce secuencias infinitas o calculadas bajo demanda de forma asíncrona dentro del flujo.",
      "Usa std::unique_lock, scoped_lock y shared_lock para prevenir bloqueos mutuos al operar.",
      "Suspende y reanuda funciones sin bloquear hilos mediante promesas y coroutine handles.",
      "Coordina despertar de hilos evitando desperdicio de ciclos mediante predicados seguros."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Generadores con co_yield (Concurrencia, atomics y coroutines C++20): Produce secuencias infinitas o calculadas bajo demanda de forma asíncrona.",
    "topic": "Concurrencia, atomics y coroutines C++20",
    "difficulty": "avanzado"
  },
  {
    "id": "cpp-q-50",
    "collectionId": "cpp",
    "question": "Respecto a programación en compilación, constexpr y consteval en C++, ¿cuál es el propósito de «Funciones constexpr»?",
    "options": [
      "Ranges::Compone transformaciones y filtros perezosos sin alojar buffers intermedios al operar.",
      "Ejecuta algoritmos y genera datos durante la compilación si los argumentos son constantes.",
      "Diferencia referencias de movimiento de universal/forwarding references en templates al operar.",
      "Forward::Preserva la categoría de valor original al reenviar argumentos en plantillas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Funciones constexpr (Programación en compilación, constexpr y consteval): Ejecuta algoritmos y genera datos durante la compilación si los argumentos son constantes.",
    "topic": "Programación en compilación, constexpr y consteval",
    "difficulty": "avanzado"
  }
];
