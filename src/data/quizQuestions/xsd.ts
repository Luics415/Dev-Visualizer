import type { QuizQuestion } from "@/data/quizTypes";

export const xsdQuestions: QuizQuestion[] = [
  {
    "id": "xsd-q-01",
    "collectionId": "xsd",
    "question": "En XSD (Instancia, schema y assessment), ¿qué función técnica cumple «Documento instancia»?",
    "options": [
      "Identifica el XML concreto que será evaluado y conserva su versión, namespace y origen al operar.",
      "Evalúa nodos contra declaraciones, tipos y restricciones después del parseo XML al operar.",
      "Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio.",
      "Reúne includes, imports y recursos autorizados en una unidad compilable y versionada."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Documento instancia (Instancia, schema y assessment): Identifica el XML concreto que será evaluado y conserva su versión, namespace y origen.",
    "topic": "Instancia, schema y assessment",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-02",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «Schema document» en instancia, schema y assessment?",
    "options": [
      "Evalúa nodos contra declaraciones, tipos y restricciones después del parseo XML al operar.",
      "Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio.",
      "Reúne includes, imports y recursos autorizados en una unidad compilable y versionada.",
      "Identifica el XML concreto que será evaluado y conserva su versión, namespace y origen."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Schema document (Instancia, schema y assessment): Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio.",
    "topic": "Instancia, schema y assessment",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-03",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «Schema set»?",
    "options": [
      "Evalúa nodos contra declaraciones, tipos y restricciones después del parseo XML al operar.",
      "Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio.",
      "Reúne includes, imports y recursos autorizados en una unidad compilable y versionada.",
      "Identifica el XML concreto que será evaluado y conserva su versión, namespace y origen."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Schema set (Instancia, schema y assessment): Reúne includes, imports y recursos autorizados en una unidad compilable y versionada.",
    "topic": "Instancia, schema y assessment",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-04",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «Schema-validity assessment»?",
    "options": [
      "Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio al operar.",
      "Reúne includes, imports y recursos autorizados en una unidad compilable y versionada al operar.",
      "Identifica el XML concreto que será evaluado y conserva su versión, namespace y origen.",
      "Evalúa nodos contra declaraciones, tipos y restricciones después del parseo XML al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Schema-validity assessment (Instancia, schema y assessment): Evalúa nodos contra declaraciones, tipos y restricciones después del parseo XML.",
    "topic": "Instancia, schema y assessment",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-05",
    "collectionId": "xsd",
    "question": "Respecto a instancia, schema y assessment en XSD, ¿cuál es el propósito de «Capas restantes»?",
    "options": [
      "Separa resultado XSD de autorización, reglas de negocio, persistencia y efectos externos.",
      "Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio.",
      "Reúne includes, imports y recursos autorizados en una unidad compilable y versionada.",
      "Evalúa nodos contra declaraciones, tipos y restricciones después del parseo XML al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Capas restantes (Instancia, schema y assessment): Separa resultado XSD de autorización, reglas de negocio, persistencia y efectos externos.",
    "topic": "Instancia, schema y assessment",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-06",
    "collectionId": "xsd",
    "question": "En XSD (Propósito y anatomía de XSD), ¿qué función técnica cumple «Instancia, schema y assessment»?",
    "options": [
      "Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación al evaluar.",
      "Envía un XML instance document a un procesador schema-aware para obtener validez y propiedades tipadas.",
      "Trata schemaLocation como una pista y conserva la selección autorizada del schema en la aplicación.",
      "Decide qué nombres pueden iniciar documentos o reutilizarse desde distintos contextos dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Instancia, schema y assessment (Propósito y anatomía de XSD): Envía un XML instance document a un procesador schema-aware para obtener validez y propiedades tipadas.",
    "topic": "Propósito y anatomía de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-07",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «xs:schema» en propósito y anatomía de xsd?",
    "options": [
      "Decide qué nombres pueden iniciar documentos o reutilizarse desde distintos contextos en el flujo.",
      "Distingue elementos y atributos declarados de tipos, grupos y componentes definidos al evaluar.",
      "Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación.",
      "Separa resultado XSD de autorización, reglas de negocio, persistencia y efectos externos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "xs:schema (Propósito y anatomía de XSD): Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación.",
    "topic": "Propósito y anatomía de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-08",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «Declaraciones y definiciones»?",
    "options": [
      "Decide qué nombres pueden iniciar documentos o reutilizarse desde distintos contextos.",
      "Reúne contenido de elementos, atributos y derivación bajo un tipo reutilizable al operar.",
      "Añade atributos a un valor textual o permite texto intercalado con elementos al operar.",
      "Distingue elementos y atributos declarados de tipos, grupos y componentes definidos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Declaraciones y definiciones (Propósito y anatomía de XSD): Distingue elementos y atributos declarados de tipos, grupos y componentes definidos.",
    "topic": "Propósito y anatomía de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-09",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «Elementos globales y locales»?",
    "options": [
      "Decide qué nombres pueden iniciar documentos o reutilizarse desde distintos contextos.",
      "Distingue elementos y atributos declarados de tipos, grupos y componentes definidos.",
      "Evalúa nodos contra declaraciones, tipos y restricciones después del parseo XML.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Elementos globales y locales (Propósito y anatomía de XSD): Decide qué nombres pueden iniciar documentos o reutilizarse desde distintos contextos.",
    "topic": "Propósito y anatomía de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-10",
    "collectionId": "xsd",
    "question": "Respecto a propósito y anatomía de xsd en XSD, ¿cuál es el propósito de «Asociación con schemas»?",
    "options": [
      "Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación al operar.",
      "Trata schemaLocation como una pista y conserva la selección autorizada del schema en la aplicación.",
      "Decide qué nombres pueden iniciar documentos o reutilizarse desde distintos contextos en ejecución.",
      "Distingue elementos y atributos declarados de tipos, grupos y componentes definidos de forma clara."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Asociación con schemas (Propósito y anatomía de XSD): Trata schemaLocation como una pista y conserva la selección autorizada del schema en la aplicación.",
    "topic": "Propósito y anatomía de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-11",
    "collectionId": "xsd",
    "question": "En XSD (Tipos simples de XSD), ¿qué función técnica cumple «string, normalizedString y token»?",
    "options": [
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios al operar.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados al operar.",
      "Diferencia conservación, reemplazo y colapso de whitespace bajo condiciones productivas.",
      "Representa un elemento presente sin valor, distinto de que el elemento no exista al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "string, normalizedString y token (Tipos simples de XSD): Diferencia conservación, reemplazo y colapso de whitespace.",
    "topic": "Tipos simples de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-12",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «boolean, decimal e integer» en tipos simples de xsd?",
    "options": [
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios de forma clara.",
      "Identifica el XML concreto que será evaluado y conserva su versión, namespace y origen al operar.",
      "Decide qué nombres pueden iniciar documentos o reutilizarse desde distintos contextos al operar.",
      "Usa espacios de valores definidos por XSD sin heredar automáticamente límites de un lenguaje."
    ],
    "correctAnswerIndex": 3,
    "explanation": "boolean, decimal e integer (Tipos simples de XSD): Usa espacios de valores definidos por XSD sin heredar automáticamente límites de un lenguaje.",
    "topic": "Tipos simples de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-13",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «date, time, dateTime y duration»?",
    "options": [
      "Modela zonas horarias, ausencia de zona, componentes parciales y duraciones con semántica precisa.",
      "Usa espacios de valores definidos por XSD sin heredar automáticamente límites de un lenguaje.",
      "Relaciona nombres expandidos e identidades entendiendo el contexto de namespaces y del documento.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "date, time, dateTime y duration (Tipos simples de XSD): Modela zonas horarias, ausencia de zona, componentes parciales y duraciones con semántica precisa.",
    "topic": "Tipos simples de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-14",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «hexBinary, base64Binary y anyURI»?",
    "options": [
      "Usa espacios de valores definidos por XSD sin heredar automáticamente límites de un lenguaje.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios al operar.",
      "Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio al operar.",
      "Reúne includes, imports y recursos autorizados en una unidad compilable y versionada al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "hexBinary, base64Binary y anyURI (Tipos simples de XSD): Representa octetos o identificadores mediante tipos con espacios léxicos propios.",
    "topic": "Tipos simples de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-15",
    "collectionId": "xsd",
    "question": "Respecto a tipos simples de xsd en XSD, ¿cuál es el propósito de «QName, ID e IDREF»?",
    "options": [
      "Usa espacios de valores definidos por XSD sin heredar automáticamente límites de un lenguaje al operar.",
      "Modela zonas horarias, ausencia de zona, componentes parciales y duraciones con semántica precisa.",
      "Relaciona nombres expandidos e identidades entendiendo el contexto de namespaces y del documento.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "QName, ID e IDREF (Tipos simples de XSD): Relaciona nombres expandidos e identidades entendiendo el contexto de namespaces y del documento.",
    "topic": "Tipos simples de XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-16",
    "collectionId": "xsd",
    "question": "En XSD (Restricciones y facets XSD), ¿qué función técnica cumple «restriction y base type»?",
    "options": [
      "Aplica el dialecto regex de XSD y evita asumir comportamiento idéntico al de JavaScript, PCRE o .NET.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados sin perder estado.",
      "Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación al operar.",
      "Deriva un tipo reduciendo el espacio de valores aceptado sin cambiar arbitrariamente su significado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "restriction y base type (Restricciones y facets XSD): Deriva un tipo reduciendo el espacio de valores aceptado sin cambiar arbitrariamente su significado.",
    "topic": "Restricciones y facets XSD",
    "difficulty": "básico"
  },
  {
    "id": "xsd-q-17",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «length, minLength y maxLength» en restricciones y facets xsd?",
    "options": [
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados.",
      "Declara conjuntos cerrados y normalización antes de otras restricciones al operar.",
      "Exige hijos en un orden declarado y con las cardinalidades correspondientes.",
      "Evita colapsar cuatro estados que pueden tener reglas de negocio diferentes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "length, minLength y maxLength (Restricciones y facets XSD): Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados.",
    "topic": "Restricciones y facets XSD",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-18",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «pattern»?",
    "options": [
      "Deriva un tipo reduciendo el espacio de valores aceptado sin cambiar arbitrariamente su significado al operar.",
      "Aplica el dialecto regex de XSD y evita asumir comportamiento idéntico al de JavaScript, PCRE o .NET.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados de modo predecible.",
      "Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "pattern (Restricciones y facets XSD): Aplica el dialecto regex de XSD y evita asumir comportamiento idéntico al de JavaScript, PCRE o .NET.",
    "topic": "Restricciones y facets XSD",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-19",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «enumeration y whiteSpace»?",
    "options": [
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados al operar.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios al operar.",
      "Declara conjuntos cerrados y normalización antes de otras restricciones de forma segura.",
      "Representa un elemento presente sin valor, distinto de que el elemento no exista al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "enumeration y whiteSpace (Restricciones y facets XSD): Declara conjuntos cerrados y normalización antes de otras restricciones.",
    "topic": "Restricciones y facets XSD",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-20",
    "collectionId": "xsd",
    "question": "Respecto a restricciones y facets xsd en XSD, ¿cuál es el propósito de «Rangos y dígitos»?",
    "options": [
      "Aplica el dialecto regex de XSD y evita asumir comportamiento idéntico al de JavaScript, PCRE o .NET al operar.",
      "Deriva un tipo reduciendo el espacio de valores aceptado sin cambiar arbitrariamente su significado al operar.",
      "Envía un XML instance document a un procesador schema-aware para obtener validez y propiedades tipadas al operar.",
      "Combina límites inclusivos o exclusivos con totalDigits y fractionDigits cuando el dominio decimal lo exige."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Rangos y dígitos (Restricciones y facets XSD): Combina límites inclusivos o exclusivos con totalDigits y fractionDigits cuando el dominio decimal lo exige.",
    "topic": "Restricciones y facets XSD",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-21",
    "collectionId": "xsd",
    "question": "En XSD (Tipos complejos y modelos de contenido), ¿qué función técnica cumple «complexType»?",
    "options": [
      "Reúne contenido de elementos, atributos y derivación bajo un tipo reutilizable al operar.",
      "Añade atributos a un valor textual o permite texto intercalado con elementos al operar.",
      "Exige hijos en un orden declarado y con las cardinalidades correspondientes al evaluar.",
      "Declara uso opcional, requerido o prohibido y valores default o fixed dentro del flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "complexType (Tipos complejos y modelos de contenido): Reúne contenido de elementos, atributos y derivación bajo un tipo reutilizable.",
    "topic": "Tipos complejos y modelos de contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-22",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «sequence» en tipos complejos y modelos de contenido?",
    "options": [
      "Reúne contenido de elementos, atributos y derivación bajo un tipo reutilizable en el flujo.",
      "Exige hijos en un orden declarado y con las cardinalidades correspondientes en el flujo.",
      "Añade atributos a un valor textual o permite texto intercalado con elementos al evaluar.",
      "Declara uso opcional, requerido o prohibido y valores default o fixed sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "sequence (Tipos complejos y modelos de contenido): Exige hijos en un orden declarado y con las cardinalidades correspondientes.",
    "topic": "Tipos complejos y modelos de contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-23",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «choice y all»?",
    "options": [
      "Envía un XML instance document a un procesador schema-aware para obtener validez y propiedades tipadas al operar.",
      "Aplica el dialecto regex de XSD y evita asumir comportamiento idéntico al de JavaScript, PCRE o .NET al operar.",
      "Modela alternativas o conjuntos limitados cuyo orden no es significativo según las reglas de cada compositor.",
      "Reconoce sus límites de composición y evita convertir ausencia de namespace en una convención global al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "choice y all (Tipos complejos y modelos de contenido): Modela alternativas o conjuntos limitados cuyo orden no es significativo según las reglas de cada compositor.",
    "topic": "Tipos complejos y modelos de contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-24",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «Atributos en tipos complejos»?",
    "options": [
      "Reúne contenido de elementos, atributos y derivación bajo un tipo reutilizable en el flujo.",
      "Añade atributos a un valor textual o permite texto intercalado con elementos al evaluar.",
      "Exige hijos en un orden declarado y con las cardinalidades correspondientes en el flujo.",
      "Declara uso opcional, requerido o prohibido y valores default o fixed sin perder estado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Atributos en tipos complejos (Tipos complejos y modelos de contenido): Declara uso opcional, requerido o prohibido y valores default o fixed.",
    "topic": "Tipos complejos y modelos de contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-25",
    "collectionId": "xsd",
    "question": "Respecto a tipos complejos y modelos de contenido en XSD, ¿cuál es el propósito de «simpleContent y mixed»?",
    "options": [
      "Añade atributos a un valor textual o permite texto intercalado con elementos de forma clara.",
      "Reúne contenido de elementos, atributos y derivación bajo un tipo reutilizable al operar.",
      "Exige hijos en un orden declarado y con las cardinalidades correspondientes al operar.",
      "Declara uso opcional, requerido o prohibido y valores default o fixed de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "simpleContent y mixed (Tipos complejos y modelos de contenido): Añade atributos a un valor textual o permite texto intercalado con elementos.",
    "topic": "Tipos complejos y modelos de contenido",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-26",
    "collectionId": "xsd",
    "question": "En XSD (Cardinalidad, ausencia y nil), ¿qué función técnica cumple «minOccurs y maxOccurs»?",
    "options": [
      "Representa un elemento presente sin valor, distinto de que el elemento no exista al operar.",
      "Distingue elemento opcional, obligatorio, repetible o sin límite declarado en ejecución.",
      "Diferencia valor aportado por el schema de un valor obligatorio cuando aparece al operar.",
      "Evita colapsar cuatro estados que pueden tener reglas de negocio diferentes en el flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "minOccurs y maxOccurs (Cardinalidad, ausencia y nil): Distingue elemento opcional, obligatorio, repetible o sin límite declarado.",
    "topic": "Cardinalidad, ausencia y nil",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-27",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «use required, optional y prohibited» en cardinalidad, ausencia y nil?",
    "options": [
      "Representa un elemento presente sin valor, distinto de que el elemento no exista al operar.",
      "Diferencia valor aportado por el schema de un valor obligatorio cuando aparece al operar.",
      "Controla presencia de atributos independientemente de su tipo manteniendo consistencia.",
      "Evita colapsar cuatro estados que pueden tener reglas de negocio diferentes al evaluar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "use required, optional y prohibited (Cardinalidad, ausencia y nil): Controla presencia de atributos independientemente de su tipo.",
    "topic": "Cardinalidad, ausencia y nil",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-28",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «default y fixed»?",
    "options": [
      "Representa un elemento presente sin valor, distinto de que el elemento no exista al evaluar.",
      "Evita colapsar cuatro estados que pueden tener reglas de negocio diferentes en ejecución.",
      "Distingue elemento opcional, obligatorio, repetible o sin límite declarado con precisión.",
      "Diferencia valor aportado por el schema de un valor obligatorio cuando aparece al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "default y fixed (Cardinalidad, ausencia y nil): Diferencia valor aportado por el schema de un valor obligatorio cuando aparece.",
    "topic": "Cardinalidad, ausencia y nil",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-29",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «nillable y xsi:nil»?",
    "options": [
      "Representa un elemento presente sin valor, distinto de que el elemento no exista al operar.",
      "Diferencia valor aportado por el schema de un valor obligatorio cuando aparece al operar.",
      "Evita colapsar cuatro estados que pueden tener reglas de negocio diferentes en ejecución.",
      "Distingue elemento opcional, obligatorio, repetible o sin límite declarado con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "nillable y xsi:nil (Cardinalidad, ausencia y nil): Representa un elemento presente sin valor, distinto de que el elemento no exista.",
    "topic": "Cardinalidad, ausencia y nil",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-30",
    "collectionId": "xsd",
    "question": "Respecto a cardinalidad, ausencia y nil en XSD, ¿cuál es el propósito de «Vacío, ausente, nil y cadena vacía»?",
    "options": [
      "Representa un elemento presente sin valor, distinto de que el elemento no exista al operar.",
      "Evita colapsar cuatro estados que pueden tener reglas de negocio diferentes en el flujo.",
      "Diferencia valor aportado por el schema de un valor obligatorio cuando aparece al operar.",
      "Distingue elemento opcional, obligatorio, repetible o sin límite declarado en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Vacío, ausente, nil y cadena vacía (Cardinalidad, ausencia y nil): Evita colapsar cuatro estados que pueden tener reglas de negocio diferentes.",
    "topic": "Cardinalidad, ausencia y nil",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-31",
    "collectionId": "xsd",
    "question": "En XSD (Reutilización y composición XSD), ¿qué función técnica cumple «Tipos nombrados y anónimos»?",
    "options": [
      "Hace disponibles componentes de otro namespace mediante una relación explícita al operar.",
      "Compone documentos de schema que pertenecen al mismo target namespace en ejecución.",
      "Elige reutilización global o definición local según la estabilidad del vocabulario.",
      "Añade atributos a un valor textual o permite texto intercalado con elementos al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tipos nombrados y anónimos (Reutilización y composición XSD): Elige reutilización global o definición local según la estabilidad del vocabulario.",
    "topic": "Reutilización y composición XSD",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-32",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «model groups y attributeGroup» en reutilización y composición xsd?",
    "options": [
      "Elige reutilización global o definición local según la estabilidad del vocabulario al operar.",
      "Hace disponibles componentes de otro namespace mediante una relación explícita al operar.",
      "Compone documentos de schema que pertenecen al mismo target namespace sin perder estado.",
      "Reutiliza conjuntos coherentes de partículas o atributos manteniendo el contrato activo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "model groups y attributeGroup (Reutilización y composición XSD): Reutiliza conjuntos coherentes de partículas o atributos.",
    "topic": "Reutilización y composición XSD",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-33",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «include»?",
    "options": [
      "Compone documentos de schema que pertenecen al mismo target namespace sin degradar el flujo.",
      "Elige reutilización global o definición local según la estabilidad del vocabulario.",
      "Hace disponibles componentes de otro namespace mediante una relación explícita al operar.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados."
    ],
    "correctAnswerIndex": 0,
    "explanation": "include (Reutilización y composición XSD): Compone documentos de schema que pertenecen al mismo target namespace.",
    "topic": "Reutilización y composición XSD",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-34",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «import»?",
    "options": [
      "Elige reutilización global o definición local según la estabilidad del vocabulario al operar.",
      "Hace disponibles componentes de otro namespace mediante una relación explícita al operar.",
      "Compone documentos de schema que pertenecen al mismo target namespace de modo predecible.",
      "Distingue elementos y atributos declarados de tipos, grupos y componentes definidos al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "import (Reutilización y composición XSD): Hace disponibles componentes de otro namespace mediante una relación explícita.",
    "topic": "Reutilización y composición XSD",
    "difficulty": "intermedio"
  },
  {
    "id": "xsd-q-35",
    "collectionId": "xsd",
    "question": "Respecto a reutilización y composición xsd en XSD, ¿cuál es el propósito de «override y redefine»?",
    "options": [
      "Elige reutilización global o definición local según la estabilidad del vocabulario de modo predecible.",
      "Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación al operar.",
      "Comprende mecanismos de reemplazo y sus diferencias entre versiones antes de usarlos para evolución.",
      "Usa espacios de valores definidos por XSD sin heredar automáticamente límites de un lenguaje al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "override y redefine (Reutilización y composición XSD): Comprende mecanismos de reemplazo y sus diferencias entre versiones antes de usarlos para evolución.",
    "topic": "Reutilización y composición XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-36",
    "collectionId": "xsd",
    "question": "En XSD (Namespaces y conjuntos de schemas XSD), ¿qué función técnica cumple «targetNamespace»?",
    "options": [
      "Decide si elementos locales de instancias deben aparecer cualificados durante la ejecución.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados al operar.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios al operar.",
      "Asigna los componentes globales del schema a un vocabulario identificable con precisión."
    ],
    "correctAnswerIndex": 3,
    "explanation": "targetNamespace (Namespaces y conjuntos de schemas XSD): Asigna los componentes globales del schema a un vocabulario identificable.",
    "topic": "Namespaces y conjuntos de schemas XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-37",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «elementFormDefault» en namespaces y conjuntos de schemas xsd?",
    "options": [
      "Decide si elementos locales de instancias deben aparecer cualificados dentro de la aplicación.",
      "Asigna los componentes globales del schema a un vocabulario identificable en el flujo.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "elementFormDefault (Namespaces y conjuntos de schemas XSD): Decide si elementos locales de instancias deben aparecer cualificados.",
    "topic": "Namespaces y conjuntos de schemas XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-38",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «attributeFormDefault»?",
    "options": [
      "Asigna los componentes globales del schema a un vocabulario identificable dentro del flujo.",
      "Controla cualificación de atributos locales de forma independiente durante la ejecución.",
      "Decide si elementos locales de instancias deben aparecer cualificados sin perder estado.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "attributeFormDefault (Namespaces y conjuntos de schemas XSD): Controla cualificación de atributos locales de forma independiente.",
    "topic": "Namespaces y conjuntos de schemas XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-39",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «Schemas sin namespace»?",
    "options": [
      "Construye el conjunto de documentos importados mediante catalogs o resolvers deterministas en ejecución.",
      "Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación al operar.",
      "Reconoce sus límites de composición y evita convertir ausencia de namespace en una convención global.",
      "Usa espacios de valores definidos por XSD sin heredar automáticamente límites de un lenguaje al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Schemas sin namespace (Namespaces y conjuntos de schemas XSD): Reconoce sus límites de composición y evita convertir ausencia de namespace en una convención global.",
    "topic": "Namespaces y conjuntos de schemas XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-40",
    "collectionId": "xsd",
    "question": "Respecto a namespaces y conjuntos de schemas xsd en XSD, ¿cuál es el propósito de «Schema set y resolución controlada»?",
    "options": [
      "Asigna los componentes globales del schema a un vocabulario identificable de modo predecible.",
      "Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio al operar.",
      "Reúne includes, imports y recursos autorizados en una unidad compilable y versionada al operar.",
      "Construye el conjunto de documentos importados mediante catalogs o resolvers deterministas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Schema set y resolución controlada (Namespaces y conjuntos de schemas XSD): Construye el conjunto de documentos importados mediante catalogs o resolvers deterministas.",
    "topic": "Namespaces y conjuntos de schemas XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-41",
    "collectionId": "xsd",
    "question": "En XSD (Derivación y polimorfismo XSD), ¿qué función técnica cumple «extension de complexType»?",
    "options": [
      "Añade contenido o atributos respetando el modelo de la base bajo condiciones productivas.",
      "Selecciona dinámicamente un tipo derivado sin cambiar el nombre del elemento al operar.",
      "Permite sustituir un elemento global por miembros declarados de su grupo en el flujo.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios."
    ],
    "correctAnswerIndex": 0,
    "explanation": "extension de complexType (Derivación y polimorfismo XSD): Añade contenido o atributos respetando el modelo de la base.",
    "topic": "Derivación y polimorfismo XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-42",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «restriction de complexType» en derivación y polimorfismo xsd?",
    "options": [
      "Selecciona dinámicamente un tipo derivado sin cambiar el nombre del elemento con precisión.",
      "Reduce formas aceptadas bajo reglas estrictas de derivación válida durante la ejecución.",
      "Permite sustituir un elemento global por miembros declarados de su grupo de forma clara.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "restriction de complexType (Derivación y polimorfismo XSD): Reduce formas aceptadas bajo reglas estrictas de derivación válida.",
    "topic": "Derivación y polimorfismo XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-43",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «Tipos abstractos»?",
    "options": [
      "Selecciona dinámicamente un tipo derivado sin cambiar el nombre del elemento con precisión.",
      "Permite sustituir un elemento global por miembros declarados de su grupo de forma clara.",
      "Obliga a que una instancia utilice un tipo derivado concreto respetando las invariantes.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tipos abstractos (Derivación y polimorfismo XSD): Obliga a que una instancia utilice un tipo derivado concreto.",
    "topic": "Derivación y polimorfismo XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-44",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «xsi:type»?",
    "options": [
      "Permite sustituir un elemento global por miembros declarados de su grupo sin perder estado.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados al operar.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios al operar.",
      "Selecciona dinámicamente un tipo derivado sin cambiar el nombre del elemento al evaluar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "xsi:type (Derivación y polimorfismo XSD): Selecciona dinámicamente un tipo derivado sin cambiar el nombre del elemento.",
    "topic": "Derivación y polimorfismo XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-45",
    "collectionId": "xsd",
    "question": "Respecto a derivación y polimorfismo xsd en XSD, ¿cuál es el propósito de «substitution groups»?",
    "options": [
      "Permite sustituir un elemento global por miembros declarados de su grupo durante la ejecución.",
      "Selecciona dinámicamente un tipo derivado sin cambiar el nombre del elemento al operar.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "substitution groups (Derivación y polimorfismo XSD): Permite sustituir un elemento global por miembros declarados de su grupo.",
    "topic": "Derivación y polimorfismo XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-46",
    "collectionId": "xsd",
    "question": "En XSD (Identidad y relaciones XSD), ¿qué función técnica cumple «xs:unique»?",
    "options": [
      "Usa el subconjunto definido por XSD, no cualquier expresión XPath general dentro del flujo.",
      "Exige combinaciones únicas para nodos seleccionados dentro de un alcance de forma clara.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados al operar.",
      "Relaciona valores con una key declarada dentro del ámbito permitido de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "xs:unique (Identidad y relaciones XSD): Exige combinaciones únicas para nodos seleccionados dentro de un alcance.",
    "topic": "Identidad y relaciones XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-47",
    "collectionId": "xsd",
    "question": "Dentro de XSD, ¿cómo opera el mecanismo de «xs:key» en identidad y relaciones xsd?",
    "options": [
      "Usa el subconjunto definido por XSD, no cualquier expresión XPath general de forma segura.",
      "Exige combinaciones únicas para nodos seleccionados dentro de un alcance con precisión.",
      "Añade presencia obligatoria a una restricción de identidad única sin degradar el flujo.",
      "Relaciona valores con una key declarada dentro del ámbito permitido de modo predecible."
    ],
    "correctAnswerIndex": 2,
    "explanation": "xs:key (Identidad y relaciones XSD): Añade presencia obligatoria a una restricción de identidad única.",
    "topic": "Identidad y relaciones XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-48",
    "collectionId": "xsd",
    "question": "Al trabajar con XSD, ¿qué responsabilidad define a «xs:keyref»?",
    "options": [
      "Usa el subconjunto definido por XSD, no cualquier expresión XPath general de forma segura.",
      "Exige combinaciones únicas para nodos seleccionados dentro de un alcance con precisión.",
      "Representa octetos o identificadores mediante tipos con espacios léxicos propios al operar.",
      "Relaciona valores con una key declarada dentro del ámbito permitido de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "xs:keyref (Identidad y relaciones XSD): Relaciona valores con una key declarada dentro del ámbito permitido.",
    "topic": "Identidad y relaciones XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-49",
    "collectionId": "xsd",
    "question": "En la arquitectura de XSD, ¿qué caracteriza técnicamente a «selector»?",
    "options": [
      "Usa el subconjunto definido por XSD, no cualquier expresión XPath general con precisión.",
      "Exige combinaciones únicas para nodos seleccionados dentro de un alcance en ejecución.",
      "Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados.",
      "Relaciona valores con una key declarada dentro del ámbito permitido sin perder estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "selector y field XPath subset (Identidad y relaciones XSD): Usa el subconjunto definido por XSD, no cualquier expresión XPath general.",
    "topic": "Identidad y relaciones XSD",
    "difficulty": "avanzado"
  },
  {
    "id": "xsd-q-50",
    "collectionId": "xsd",
    "question": "Respecto a identidad y relaciones xsd en XSD, ¿cuál es el propósito de «ID, IDREF»?",
    "options": [
      "Envía un XML instance document a un procesador schema-aware para obtener validez y propiedades tipadas al operar.",
      "Reconoce que restricciones de identidad ordinarias se evalúan sobre el documento validado, no una base global.",
      "Aplica el dialecto regex de XSD y evita asumir comportamiento idéntico al de JavaScript, PCRE o .NET al operar.",
      "Reconoce sus límites de composición y evita convertir ausencia de namespace en una convención global al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "ID, IDREF y relaciones entre documentos (Identidad y relaciones XSD): Reconoce que restricciones de identidad ordinarias se evalúan sobre el documento validado, no una base global.",
    "topic": "Identidad y relaciones XSD",
    "difficulty": "avanzado"
  }
];
