import type { QuizQuestion } from "@/data/quizTypes";

export const xmlQuestions: QuizQuestion[] = [
  {
    "id": "xml-q-01",
    "collectionId": "xml",
    "question": "En XML (Documento, estructura y significado), ¿qué función técnica cumple «Documento XML»?",
    "options": [
      "Reconoce un artefacto textual ordenado con un único elemento documento y construcciones permitidas alrededor de él al operar.",
      "Conserva jerarquía, orden, atributos y texto porque cada dimensión puede formar parte del dato sin perder estado.",
      "Reconoce la equivalencia informativa habitual entre una forma autocerrada y tags consecutivos sin contenido al operar.",
      "Separa decodificación, well-formedness, validación externa, reglas de negocio y autorización de modo predecible."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Documento XML (Documento, estructura y significado): Reconoce un artefacto textual ordenado con un único elemento documento y construcciones permitidas alrededor de él.",
    "topic": "Documento, estructura y significado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-02",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Instancia y vocabulario» en documento, estructura y significado?",
    "options": [
      "Decodifica octetos con una codificación coherente antes de interpretar markup de forma segura.",
      "Distingue el documento concreto de las reglas semánticas que dan significado a sus nombres.",
      "Separa decodificación, well-formedness, validación externa, reglas de negocio y autorización.",
      "Conserva la secuencia de elementos y texto porque puede formar parte del significado al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Instancia y vocabulario (Documento, estructura y significado): Distingue el documento concreto de las reglas semánticas que dan significado a sus nombres.",
    "topic": "Documento, estructura y significado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-03",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Bytes, Unicode y caracteres»?",
    "options": [
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance al operar.",
      "No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato al operar.",
      "Decodifica octetos con una codificación coherente antes de interpretar markup al operar.",
      "Distingue nombres expandidos equivalentes de serializaciones visualmente distintas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bytes, Unicode y caracteres (Documento, estructura y significado): Decodifica octetos con una codificación coherente antes de interpretar markup.",
    "topic": "Documento, estructura y significado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-04",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Estructura y contenido»?",
    "options": [
      "Distingue el documento concreto de las reglas semánticas que dan significado a sus nombres al operar.",
      "Separa decodificación, well-formedness, validación externa, reglas de negocio y autorización.",
      "Decodifica octetos con una codificación coherente antes de interpretar markup dentro del flujo.",
      "Conserva jerarquía, orden, atributos y texto porque cada dimensión puede formar parte del dato."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Estructura y contenido (Documento, estructura y significado): Conserva jerarquía, orden, atributos y texto porque cada dimensión puede formar parte del dato.",
    "topic": "Documento, estructura y significado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-05",
    "collectionId": "xml",
    "question": "Respecto a documento, estructura y significado en XML, ¿cuál es el propósito de «Capas de validez»?",
    "options": [
      "Separa decodificación, well-formedness, validación externa, reglas de negocio y autorización al operar.",
      "Distingue el documento concreto de las reglas semánticas que dan significado a sus nombres.",
      "Conserva jerarquía, orden, atributos y texto porque cada dimensión puede formar parte del dato.",
      "Decodifica octetos con una codificación coherente antes de interpretar markup en ejecución."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Capas de validez (Documento, estructura y significado): Separa decodificación, well-formedness, validación externa, reglas de negocio y autorización.",
    "topic": "Documento, estructura y significado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-06",
    "collectionId": "xml",
    "question": "En XML (Anatomía de un documento XML), ¿qué función técnica cumple «Declaración XML»?",
    "options": [
      "Decide qué información forma parte de la jerarquía, cuál califica un elemento y cuál aparece como texto al operar.",
      "Indica versión y codificación cuando corresponde, sin confundirla con una processing instruction ordinaria.",
      "Ubica declaración, comentarios, processing instructions y posible DOCTYPE alrededor del elemento documento.",
      "Expresa límites de elementos normales o vacíos conservando coincidencia exacta de nombres dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Declaración XML (Anatomía de un documento XML): Indica versión y codificación cuando corresponde, sin confundirla con una processing instruction ordinaria.",
    "topic": "Anatomía de un documento XML",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-07",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Prólogo y epílogo» en anatomía de un documento xml?",
    "options": [
      "Decide qué información forma parte de la jerarquía, cuál califica un elemento y cuál aparece como texto al operar.",
      "Indica versión y codificación cuando corresponde, sin confundirla con una processing instruction ordinaria.",
      "Ubica declaración, comentarios, processing instructions y posible DOCTYPE alrededor del elemento documento.",
      "Expresa límites de elementos normales o vacíos conservando coincidencia exacta de nombres dentro del flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Prólogo y epílogo (Anatomía de un documento XML): Ubica declaración, comentarios, processing instructions y posible DOCTYPE alrededor del elemento documento.",
    "topic": "Anatomía de un documento XML",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-08",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Elemento documento»?",
    "options": [
      "Recuerda que el namespace predeterminado no se aplica a atributos no prefijados al operar.",
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar al operar.",
      "Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento al operar.",
      "Exige una única raíz que contenga la estructura lógica principal sin degradar el flujo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Elemento documento (Anatomía de un documento XML): Exige una única raíz que contenga la estructura lógica principal.",
    "topic": "Anatomía de un documento XML",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-09",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Start-tag, end-tag»?",
    "options": [
      "Expresa límites de elementos normales o vacíos conservando coincidencia exacta de nombres.",
      "Usa las entidades incorporadas y referencias de código sin inventar escapes propios.",
      "Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests.",
      "Conserva la secuencia de elementos y texto porque puede formar parte del significado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Start-tag, end-tag y empty-element tag (Anatomía de un documento XML): Expresa límites de elementos normales o vacíos conservando coincidencia exacta de nombres.",
    "topic": "Anatomía de un documento XML",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-10",
    "collectionId": "xml",
    "question": "Respecto a anatomía de un documento xml en XML, ¿cuál es el propósito de «Elementos, atributos y contenido»?",
    "options": [
      "Expresa límites de elementos normales o vacíos conservando coincidencia exacta de nombres dentro del flujo.",
      "Decide qué información forma parte de la jerarquía, cuál califica un elemento y cuál aparece como texto.",
      "Produce XML, HTML, texto u otros resultados respetando capacidades y restricciones del procesador al operar.",
      "Comprende qué normaliza el parser y qué espacios siguen siendo datos visibles para la aplicación al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Elementos, atributos y contenido (Anatomía de un documento XML): Decide qué información forma parte de la jerarquía, cuál califica un elemento y cuál aparece como texto.",
    "topic": "Anatomía de un documento XML",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-11",
    "collectionId": "xml",
    "question": "En XML (XML bien formado), ¿qué función técnica cumple «Anidamiento correcto»?",
    "options": [
      "Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento al operar.",
      "Recuerda que el namespace predeterminado no se aplica a atributos no prefijados al operar.",
      "Cierra cada elemento en orden inverso a su apertura y evita estructuras que se cruzan.",
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Anidamiento correcto (XML bien formado): Cierra cada elemento en orden inverso a su apertura y evita estructuras que se cruzan.",
    "topic": "XML bien formado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-12",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Una sola raíz» en xml bien formado?",
    "options": [
      "Cierra cada elemento en orden inverso a su apertura y evita estructuras que se cruzan al operar.",
      "Representa ampersand, menor que, comillas y caracteres mediante las reglas exactas de XML.",
      "Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento en ejecución.",
      "Permite comentarios o instrucciones alrededor, pero exige exactamente un elemento documento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Una sola raíz (XML bien formado): Permite comentarios o instrucciones alrededor, pero exige exactamente un elemento documento.",
    "topic": "XML bien formado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-13",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Atributos citados y únicos»?",
    "options": [
      "Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento con precisión.",
      "Cierra cada elemento en orden inverso a su apertura y evita estructuras que se cruzan.",
      "Representa ampersand, menor que, comillas y caracteres mediante las reglas exactas de XML.",
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Atributos citados y únicos (XML bien formado): Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento.",
    "topic": "XML bien formado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-14",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Escapes»?",
    "options": [
      "Cierra cada elemento en orden inverso a su apertura y evita estructuras que se cruzan al operar.",
      "Representa ampersand, menor que, comillas y caracteres mediante las reglas exactas de XML.",
      "Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento al evaluar.",
      "Permite comentarios o instrucciones alrededor, pero exige exactamente un elemento documento."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Escapes y referencias de caracteres (XML bien formado): Representa ampersand, menor que, comillas y caracteres mediante las reglas exactas de XML.",
    "topic": "XML bien formado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-15",
    "collectionId": "xml",
    "question": "Respecto a xml bien formado en XML, ¿cuál es el propósito de «Nombres y sensibilidad a mayúsculas»?",
    "options": [
      "Cierra cada elemento en orden inverso a su apertura y evita estructuras que se cruzan al operar.",
      "Representa ampersand, menor que, comillas y caracteres mediante las reglas exactas de XML.",
      "Respeta la gramática de nombres y reconoce que Pedido y pedido son identificadores distintos.",
      "Permite comentarios o instrucciones alrededor, pero exige exactamente un elemento documento."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Nombres y sensibilidad a mayúsculas (XML bien formado): Respeta la gramática de nombres y reconoce que Pedido y pedido son identificadores distintos.",
    "topic": "XML bien formado",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-16",
    "collectionId": "xml",
    "question": "En XML (Modelo de información XML), ¿qué función técnica cumple «Infoset y árbol lógico»?",
    "options": [
      "Comprende qué normaliza el parser y qué espacios siguen siendo datos visibles para la aplicación al operar.",
      "Representa contenido donde caracteres y elementos hijos aparecen intercalados sin perder su posición.",
      "Conserva la secuencia de elementos y texto porque puede formar parte del significado de forma segura.",
      "Distingue el documento serializado de los information items que un procesador expone a la aplicación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Infoset y árbol lógico (Modelo de información XML): Distingue el documento serializado de los information items que un procesador expone a la aplicación.",
    "topic": "Modelo de información XML",
    "difficulty": "básico"
  },
  {
    "id": "xml-q-17",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Orden de documento» en modelo de información xml?",
    "options": [
      "Conserva la secuencia de elementos y texto porque puede formar parte del significado al operar.",
      "Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento.",
      "Decodifica octetos con una codificación coherente antes de interpretar markup al operar.",
      "Recuerda que el namespace predeterminado no se aplica a atributos no prefijados."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Orden de documento (Modelo de información XML): Conserva la secuencia de elementos y texto porque puede formar parte del significado.",
    "topic": "Modelo de información XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-18",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Texto»?",
    "options": [
      "Comprende qué normaliza el parser y qué espacios siguen siendo datos visibles para la aplicación al operar.",
      "Representa contenido donde caracteres y elementos hijos aparecen intercalados sin perder su posición.",
      "Distingue el documento serializado de los information items que un procesador expone a la aplicación.",
      "Conserva la secuencia de elementos y texto porque puede formar parte del significado de forma segura."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Texto y contenido mixto (Modelo de información XML): Representa contenido donde caracteres y elementos hijos aparecen intercalados sin perder su posición.",
    "topic": "Modelo de información XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-19",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Whitespace y normalización de fin de línea»?",
    "options": [
      "Conserva la secuencia de elementos y texto porque puede formar parte del significado de forma clara.",
      "Distingue el documento concreto de las reglas semánticas que dan significado a sus nombres al operar.",
      "Comprende qué normaliza el parser y qué espacios siguen siendo datos visibles para la aplicación.",
      "Relaciona una forma escrita como inv:order con el par estable namespace URI más local name al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Whitespace y normalización de fin de línea (Modelo de información XML): Comprende qué normaliza el parser y qué espacios siguen siendo datos visibles para la aplicación.",
    "topic": "Modelo de información XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-20",
    "collectionId": "xml",
    "question": "Respecto a namespaces xml en XML, ¿cuál es el propósito de «URI de namespace»?",
    "options": [
      "Sigue declaraciones heredadas o reemplazadas y compara por nombre expandido, no por el prefijo visible al operar.",
      "Relaciona una forma escrita como inv:order con el par estable namespace URI más local name de forma clara.",
      "Distingue el documento serializado de los information items que un procesador expone a la aplicación al operar.",
      "Usa un identificador estable para distinguir vocabularios sin asumir que debe descargarse como una página."
    ],
    "correctAnswerIndex": 3,
    "explanation": "URI de namespace (Namespaces XML): Usa un identificador estable para distinguir vocabularios sin asumir que debe descargarse como una página.",
    "topic": "Namespaces XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-21",
    "collectionId": "xml",
    "question": "En XML (Namespaces XML), ¿qué función técnica cumple «QName, prefijo»?",
    "options": [
      "Relaciona una forma escrita como inv:order con el par estable namespace URI más local name.",
      "Recuerda que el namespace predeterminado no se aplica a atributos no prefijados al operar.",
      "Conserva la secuencia de elementos y texto porque puede formar parte del significado.",
      "Cierra cada elemento en orden inverso a su apertura y evita estructuras que se cruzan."
    ],
    "correctAnswerIndex": 0,
    "explanation": "QName, prefijo y nombre local (Namespaces XML): Relaciona una forma escrita como inv:order con el par estable namespace URI más local name.",
    "topic": "Namespaces XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-22",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Namespace predeterminado» en namespaces xml?",
    "options": [
      "Recuerda que el namespace predeterminado no se aplica a atributos no prefijados al operar.",
      "Aplica un namespace a elementos sin prefijo dentro de su alcance sin degradar el flujo.",
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar al operar.",
      "Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Namespace predeterminado (Namespaces XML): Aplica un namespace a elementos sin prefijo dentro de su alcance.",
    "topic": "Namespaces XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-23",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Atributos sin prefijo»?",
    "options": [
      "Relaciona una forma escrita como inv:order con el par estable namespace URI más local name.",
      "Usa las entidades incorporadas y referencias de código sin inventar escapes propios al operar.",
      "Recuerda que el namespace predeterminado no se aplica a atributos no prefijados al operar.",
      "Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Atributos sin prefijo (Namespaces XML): Recuerda que el namespace predeterminado no se aplica a atributos no prefijados.",
    "topic": "Namespaces XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-24",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Alcance, rebinding»?",
    "options": [
      "Relaciona una forma escrita como inv:order con el par estable namespace URI más local name de forma clara.",
      "Comprende qué normaliza el parser y qué espacios siguen siendo datos visibles para la aplicación al operar.",
      "No asume que una lectura de red coincide con un tag, carácter Unicode o registro lógico completo al operar.",
      "Sigue declaraciones heredadas o reemplazadas y compara por nombre expandido, no por el prefijo visible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Alcance, rebinding y nombres expandidos (Namespaces XML): Sigue declaraciones heredadas o reemplazadas y compara por nombre expandido, no por el prefijo visible.",
    "topic": "Namespaces XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-25",
    "collectionId": "xml",
    "question": "Respecto a entidades, dtd y estructura física en XML, ¿cuál es el propósito de «Entidades predefinidas»?",
    "options": [
      "Usa las entidades incorporadas y referencias de código sin inventar escapes propios.",
      "Decodifica octetos con una codificación coherente antes de interpretar markup.",
      "Separa recorridos y decide qué template gana cuando más de una regla coincide.",
      "Combina namespaces, atributos y jerarquía para describir gráficos vectoriales."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Entidades predefinidas y referencias numéricas (Entidades, DTD y estructura física): Usa las entidades incorporadas y referencias de código sin inventar escapes propios.",
    "topic": "Entidades, DTD y estructura física",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-26",
    "collectionId": "xml",
    "question": "En XML (Entidades, DTD y estructura física), ¿qué función técnica cumple «Entidades generales internas»?",
    "options": [
      "Distingue declaraciones incluidas en el DOCTYPE de un subconjunto recuperado por identificador de forma clara.",
      "Inserta texto declarado localmente entendiendo que el parser puede expandirlo antes de entregar el Infoset.",
      "Expresa si declaraciones externas pueden modificar información que llega a la aplicación sin perder estado.",
      "Reconoce que SYSTEM o PUBLIC pueden provocar resolución de recursos fuera del documento de modo predecible."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Entidades generales internas (Entidades, DTD y estructura física): Inserta texto declarado localmente entendiendo que el parser puede expandirlo antes de entregar el Infoset.",
    "topic": "Entidades, DTD y estructura física",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-27",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Entidades externas» en entidades, dtd y estructura física?",
    "options": [
      "Usa las entidades incorporadas y referencias de código sin inventar escapes propios al operar.",
      "Expresa si declaraciones externas pueden modificar información que llega a la aplicación.",
      "Reconoce que SYSTEM o PUBLIC pueden provocar resolución de recursos fuera del documento.",
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Entidades externas (Entidades, DTD y estructura física): Reconoce que SYSTEM o PUBLIC pueden provocar resolución de recursos fuera del documento.",
    "topic": "Entidades, DTD y estructura física",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-28",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «DTD interno y externo»?",
    "options": [
      "Expresa si declaraciones externas pueden modificar información que llega a la aplicación al operar.",
      "Reconoce que SYSTEM o PUBLIC pueden provocar resolución de recursos fuera del documento al operar.",
      "Usa las entidades incorporadas y referencias de código sin inventar escapes propios al evaluar.",
      "Distingue declaraciones incluidas en el DOCTYPE de un subconjunto recuperado por identificador."
    ],
    "correctAnswerIndex": 3,
    "explanation": "DTD interno y externo (Entidades, DTD y estructura física): Distingue declaraciones incluidas en el DOCTYPE de un subconjunto recuperado por identificador.",
    "topic": "Entidades, DTD y estructura física",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-29",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Standalone»?",
    "options": [
      "Expresa si declaraciones externas pueden modificar información que llega a la aplicación.",
      "Usa las entidades incorporadas y referencias de código sin inventar escapes propios.",
      "Reconoce que SYSTEM o PUBLIC pueden provocar resolución de recursos fuera del documento.",
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Standalone y dependencias externas (Entidades, DTD y estructura física): Expresa si declaraciones externas pueden modificar información que llega a la aplicación.",
    "topic": "Entidades, DTD y estructura física",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-30",
    "collectionId": "xml",
    "question": "Respecto a modelos de parsing xml en XML, ¿cuál es el propósito de «DOM»?",
    "options": [
      "No asume que una lectura de red coincide con un tag, carácter Unicode o registro lógico completo en el flujo.",
      "Carga el documento completo para navegar y modificar libremente, pagando memoria proporcional a su tamaño.",
      "Conserva línea, columna, byte y contexto seguro para diagnosticar sin registrar todo el documento sensible.",
      "Permite que el consumidor solicite el siguiente evento y coordine mejor su propio estado dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "DOM y árbol en memoria (Modelos de parsing XML): Carga el documento completo para navegar y modificar libremente, pagando memoria proporcional a su tamaño.",
    "topic": "Modelos de parsing XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-31",
    "collectionId": "xml",
    "question": "En XML (Modelos de parsing XML), ¿qué función técnica cumple «SAX y eventos push»?",
    "options": [
      "Decodifica octetos con una codificación coherente antes de interpretar markup al operar.",
      "Separa recorridos y decide qué template gana cuando más de una regla coincide al operar.",
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance.",
      "Combina namespaces, atributos y jerarquía para describir gráficos vectoriales al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "SAX y eventos push (Modelos de parsing XML): Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance.",
    "topic": "Modelos de parsing XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-32",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Pull parsing y cursor» en modelos de parsing xml?",
    "options": [
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance al operar.",
      "No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato al operar.",
      "Distingue nombres expandidos equivalentes de serializaciones visualmente distintas al operar.",
      "Permite que el consumidor solicite el siguiente evento y coordine mejor su propio estado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pull parsing y cursor (Modelos de parsing XML): Permite que el consumidor solicite el siguiente evento y coordine mejor su propio estado.",
    "topic": "Modelos de parsing XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-33",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Streaming y límites de chunks»?",
    "options": [
      "No asume que una lectura de red coincide con un tag, carácter Unicode o registro lógico completo al operar.",
      "Permite que el consumidor solicite el siguiente evento y coordine mejor su propio estado al operar.",
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance en el flujo.",
      "Distingue el documento concreto de las reglas semánticas que dan significado a sus nombres."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Streaming y límites de chunks (Modelos de parsing XML): No asume que una lectura de red coincide con un tag, carácter Unicode o registro lógico completo.",
    "topic": "Modelos de parsing XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-34",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Errores de parseo y ubicación»?",
    "options": [
      "No asume que una lectura de red coincide con un tag, carácter Unicode o registro lógico completo en ejecución.",
      "Conserva línea, columna, byte y contexto seguro para diagnosticar sin registrar todo el documento sensible.",
      "Carga el documento completo para navegar y modificar libremente, pagando memoria proporcional a su tamaño.",
      "Permite que el consumidor solicite el siguiente evento y coordine mejor su propio estado sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Errores de parseo y ubicación (Modelos de parsing XML): Conserva línea, columna, byte y contexto seguro para diagnosticar sin registrar todo el documento sensible.",
    "topic": "Modelos de parsing XML",
    "difficulty": "intermedio"
  },
  {
    "id": "xml-q-35",
    "collectionId": "xml",
    "question": "Respecto a xpath 3.1 en XML, ¿cuál es el propósito de «Context item»?",
    "options": [
      "Selecciona hijos, descendientes, atributos, ancestros u otros nodos por tipo y nombre al operar.",
      "Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests al operar.",
      "Evalúa expresiones desde un nodo o valor actual y obtiene secuencias, no únicamente un nodo.",
      "Filtra por posición, valor o condición usando la semántica efectiva de booleanos y secuencias."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Context item y secuencia (XPath 3.1): Evalúa expresiones desde un nodo o valor actual y obtiene secuencias, no únicamente un nodo.",
    "topic": "XPath 3.1",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-36",
    "collectionId": "xml",
    "question": "En XML (XPath 3.1), ¿qué función técnica cumple «Location paths y steps»?",
    "options": [
      "Selecciona hijos, descendientes, atributos, ancestros u otros nodos por tipo y nombre.",
      "Decodifica octetos con una codificación coherente antes de interpretar markup al operar.",
      "Separa recorridos y decide qué template gana cuando más de una regla coincide al operar.",
      "Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Location paths y steps (XPath 3.1): Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests.",
    "topic": "XPath 3.1",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-37",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Ejes y node tests» en xpath 3.1?",
    "options": [
      "Selecciona hijos, descendientes, atributos, ancestros u otros nodos por tipo y nombre.",
      "Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests.",
      "Recuerda que el namespace predeterminado no se aplica a atributos no prefijados.",
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Ejes y node tests (XPath 3.1): Selecciona hijos, descendientes, atributos, ancestros u otros nodos por tipo y nombre.",
    "topic": "XPath 3.1",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-38",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Predicados y funciones»?",
    "options": [
      "Selecciona hijos, descendientes, atributos, ancestros u otros nodos por tipo y nombre al evaluar.",
      "Filtra por posición, valor o condición usando la semántica efectiva de booleanos y secuencias.",
      "Evalúa expresiones desde un nodo o valor actual y obtiene secuencias, no únicamente un nodo.",
      "Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Predicados y funciones (XPath 3.1): Filtra por posición, valor o condición usando la semántica efectiva de booleanos y secuencias.",
    "topic": "XPath 3.1",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-39",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Namespaces en XPath»?",
    "options": [
      "Filtra por posición, valor o condición usando la semántica efectiva de booleanos y secuencias manteniendo consistencia.",
      "Reconoce la equivalencia informativa habitual entre una forma autocerrada y tags consecutivos sin contenido al operar.",
      "Asocia prefijos de la expresión con URIs porque el namespace del documento no se hereda automáticamente al evaluador.",
      "Reconoce un artefacto textual ordenado con un único elemento documento y construcciones permitidas alrededor de él."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Namespaces en XPath (XPath 3.1): Asocia prefijos de la expresión con URIs porque el namespace del documento no se hereda automáticamente al evaluador.",
    "topic": "XPath 3.1",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-40",
    "collectionId": "xml",
    "question": "Respecto a transformación con xslt en XML, ¿cuál es el propósito de «Templates y match patterns»?",
    "options": [
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar al operar.",
      "Separa recorridos y decide qué template gana cuando más de una regla coincide al operar.",
      "Recuerda que el namespace predeterminado no se aplica a atributos no prefijados al operar.",
      "Declara reglas que responden a nodos del documento fuente bajo condiciones productivas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Templates y match patterns (Transformación con XSLT): Declara reglas que responden a nodos del documento fuente.",
    "topic": "Transformación con XSLT",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-41",
    "collectionId": "xml",
    "question": "En XML (Transformación con XSLT), ¿qué función técnica cumple «apply-templates»?",
    "options": [
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar al operar.",
      "Separa recorridos y decide qué template gana cuando más de una regla coincide al operar.",
      "Usa las entidades incorporadas y referencias de código sin inventar escapes propios.",
      "Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests."
    ],
    "correctAnswerIndex": 0,
    "explanation": "apply-templates y select (Transformación con XSLT): Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar.",
    "topic": "Transformación con XSLT",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-42",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Modes, prioridades y conflicto» en transformación con xslt?",
    "options": [
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar al evaluar.",
      "Separa recorridos y decide qué template gana cuando más de una regla coincide al operar.",
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance al operar.",
      "No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Modes, prioridades y conflicto (Transformación con XSLT): Separa recorridos y decide qué template gana cuando más de una regla coincide.",
    "topic": "Transformación con XSLT",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-43",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Variables, agrupación y orden»?",
    "options": [
      "Produce XML, HTML, texto u otros resultados respetando capacidades y restricciones del procesador al operar.",
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar de modo predecible.",
      "Construye transformaciones declarativas sin ocultar dependencias ni recalcular secuencias costosas.",
      "Separa decodificación, well-formedness, validación externa, reglas de negocio y autorización al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Variables, agrupación y orden (Transformación con XSLT): Construye transformaciones declarativas sin ocultar dependencias ni recalcular secuencias costosas.",
    "topic": "Transformación con XSLT",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-44",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Resultado, serialización y streaming»?",
    "options": [
      "Construye transformaciones declarativas sin ocultar dependencias ni recalcular secuencias costosas.",
      "Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar sin perder estado.",
      "Permite comentarios o instrucciones alrededor, pero exige exactamente un elemento documento al operar.",
      "Produce XML, HTML, texto u otros resultados respetando capacidades y restricciones del procesador."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Resultado, serialización y streaming (Transformación con XSLT): Produce XML, HTML, texto u otros resultados respetando capacidades y restricciones del procesador.",
    "topic": "Transformación con XSLT",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-45",
    "collectionId": "xml",
    "question": "Respecto a serialización y canonicalización xml en XML, ¿cuál es el propósito de «Codificación»?",
    "options": [
      "Alinea bytes reales, declaración XML y media type para evitar texto interpretado con otra codificación.",
      "Comprende qué normaliza el parser y qué espacios siguen siendo datos visibles para la aplicación.",
      "No asume que una lectura de red coincide con un tag, carácter Unicode o registro lógico completo.",
      "No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato sin perder estado."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Codificación y declaración de salida (Serialización y canonicalización XML): Alinea bytes reales, declaración XML y media type para evitar texto interpretado con otra codificación.",
    "topic": "Serialización y canonicalización XML",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-46",
    "collectionId": "xml",
    "question": "En XML (Serialización y canonicalización XML), ¿qué función técnica cumple «Indentación frente a contenido»?",
    "options": [
      "Distingue nombres expandidos equivalentes de serializaciones visualmente distintas.",
      "No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato.",
      "Decodifica octetos con una codificación coherente antes de interpretar markup al operar.",
      "Separa recorridos y decide qué template gana cuando más de una regla coincide al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Indentación frente a contenido (Serialización y canonicalización XML): No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato.",
    "topic": "Serialización y canonicalización XML",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-47",
    "collectionId": "xml",
    "question": "Dentro de XML, ¿cómo opera el mecanismo de «Elementos vacíos equivalentes» en serialización y canonicalización xml?",
    "options": [
      "Alinea bytes reales, declaración XML y media type para evitar texto interpretado con otra codificación al operar.",
      "Distingue el documento serializado de los information items que un procesador expone a la aplicación al operar.",
      "Reconoce la equivalencia informativa habitual entre una forma autocerrada y tags consecutivos sin contenido.",
      "Representa contenido donde caracteres y elementos hijos aparecen intercalados sin perder su posición al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Elementos vacíos equivalentes (Serialización y canonicalización XML): Reconoce la equivalencia informativa habitual entre una forma autocerrada y tags consecutivos sin contenido.",
    "topic": "Serialización y canonicalización XML",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-48",
    "collectionId": "xml",
    "question": "Al trabajar con XML, ¿qué responsabilidad define a «Prefijos y declaraciones redundantes»?",
    "options": [
      "No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato.",
      "Decodifica octetos con una codificación coherente antes de interpretar markup al operar.",
      "Separa recorridos y decide qué template gana cuando más de una regla coincide al operar.",
      "Distingue nombres expandidos equivalentes de serializaciones visualmente distintas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Prefijos y declaraciones redundantes (Serialización y canonicalización XML): Distingue nombres expandidos equivalentes de serializaciones visualmente distintas.",
    "topic": "Serialización y canonicalización XML",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-49",
    "collectionId": "xml",
    "question": "En la arquitectura de XML, ¿qué caracteriza técnicamente a «Canonical XML»?",
    "options": [
      "Normaliza diferencias permitidas cuando una firma, digest o comparación necesita una secuencia de octetos determinista.",
      "Reconoce la equivalencia informativa habitual entre una forma autocerrada y tags consecutivos sin contenido al operar.",
      "Alinea bytes reales, declaración XML y media type para evitar texto interpretado con otra codificación con precisión.",
      "Reconoce un artefacto textual ordenado con un único elemento documento y construcciones permitidas alrededor de él."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Canonical XML (Serialización y canonicalización XML): Normaliza diferencias permitidas cuando una firma, digest o comparación necesita una secuencia de octetos determinista.",
    "topic": "Serialización y canonicalización XML",
    "difficulty": "avanzado"
  },
  {
    "id": "xml-q-50",
    "collectionId": "xml",
    "question": "Respecto a vocabularios y protocolos xml en XML, ¿cuál es el propósito de «SVG como vocabulario XML»?",
    "options": [
      "Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance al operar.",
      "Combina namespaces, atributos y jerarquía para describir gráficos vectoriales al operar.",
      "No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato al operar.",
      "Distingue nombres expandidos equivalentes de serializaciones visualmente distintas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "SVG como vocabulario XML (Vocabularios y protocolos XML): Combina namespaces, atributos y jerarquía para describir gráficos vectoriales.",
    "topic": "Vocabularios y protocolos XML",
    "difficulty": "avanzado"
  }
];
