import type { QuizQuestion } from "@/data/quizTypes";

export const subversionQuestions: QuizQuestion[] = [
  {
    "id": "subversion-q-01",
    "collectionId": "subversion",
    "question": "En Subversion (Working copy profunda), ¿qué función técnica cumple «Mixed-revision working copies»?",
    "options": [
      "Permite que distintos archivos locales estén en revisiones diferentes hasta ejecutar una actualización.",
      "Agrupa archivos modificados localmente bajo etiquetas lógicas para revisarlos o confirmarlos juntos.",
      "Monta subdirectorios provenientes de otra ruta o repositorio fijándolos a una revisión exacta al operar.",
      "Descarga únicamente las subcarpetas necesarias de un árbol gigante ajustando la profundidad al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Mixed-revision working copies (Working copy profunda): Permite que distintos archivos locales estén en revisiones diferentes hasta ejecutar una actualización.",
    "topic": "Working copy profunda",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-02",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «Changelists» en working copy profunda?",
    "options": [
      "Monta subdirectorios provenientes de otra ruta o repositorio fijándolos a una revisión exacta al operar.",
      "Agrupa archivos modificados localmente bajo etiquetas lógicas para revisarlos o confirmarlos juntos.",
      "Descarga únicamente las subcarpetas necesarias de un árbol gigante ajustando la profundidad al operar.",
      "Ejecuta rutinas de limpieza sobre la base local para liberar bloqueos tras una interrupción al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Changelists (Working copy profunda): Agrupa archivos modificados localmente bajo etiquetas lógicas para revisarlos o confirmarlos juntos.",
    "topic": "Working copy profunda",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-03",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Sparse directories»?",
    "options": [
      "Ejecuta rutinas de limpieza sobre la base local para liberar bloqueos tras una interrupción.",
      "Monta subdirectorios provenientes de otra ruta o repositorio fijándolos a una revisión exacta.",
      "Descarga únicamente las subcarpetas necesarias de un árbol gigante ajustando la profundidad.",
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Sparse directories (Working copy profunda): Descarga únicamente las subcarpetas necesarias de un árbol gigante ajustando la profundidad.",
    "topic": "Working copy profunda",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-04",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Externals definitions»?",
    "options": [
      "Descarga únicamente las subcarpetas necesarias de un árbol gigante ajustando la profundidad al operar.",
      "Ejecuta rutinas de limpieza sobre la base local para liberar bloqueos tras una interrupción.",
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino al operar.",
      "Monta subdirectorios provenientes de otra ruta o repositorio fijándolos a una revisión exacta."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Externals definitions (Working copy profunda): Monta subdirectorios provenientes de otra ruta o repositorio fijándolos a una revisión exacta.",
    "topic": "Working copy profunda",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-05",
    "collectionId": "subversion",
    "question": "Respecto a working copy profunda en Subversion, ¿cuál es el propósito de «wc.db schema recovery»?",
    "options": [
      "Ejecuta rutinas de limpieza sobre la base local para liberar bloqueos tras una interrupción al operar.",
      "Descarga únicamente las subcarpetas necesarias de un árbol gigante ajustando la profundidad.",
      "Monta subdirectorios provenientes de otra ruta o repositorio fijándolos a una revisión exacta.",
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla."
    ],
    "correctAnswerIndex": 0,
    "explanation": "wc.db schema recovery (Working copy profunda): Ejecuta rutinas de limpieza sobre la base local para liberar bloqueos tras una interrupción.",
    "topic": "Working copy profunda",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-06",
    "collectionId": "subversion",
    "question": "En Subversion (Integración avanzada), ¿qué función técnica cumple «Three-way merge»?",
    "options": [
      "Aplica una revisión puntual o rango específico desde otra rama registrando su trazabilidad al operar.",
      "Combina cambios comparando un ancestro común contra la rama origen y la copia de trabajo destino.",
      "Evita acumular metadatos de fusión en subdirectorios para mantener el registro en la raíz al operar.",
      "Incorpora el trabajo completo de una rama de funcionalidad de vuelta hacia la línea troncal al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Three-way merge (Integración avanzada): Combina cambios comparando un ancestro común contra la rama origen y la copia de trabajo destino.",
    "topic": "Integración avanzada",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-07",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «Eligible revisions» en integración avanzada?",
    "options": [
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla al operar.",
      "Evita acumular metadatos de fusión en subdirectorios para mantener el registro en la raíz.",
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino.",
      "Aplica una revisión puntual o rango específico desde otra rama registrando su trazabilidad."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Eligible revisions (Integración avanzada): Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino.",
    "topic": "Integración avanzada",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-08",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Subtree mergeinfo»?",
    "options": [
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla al operar.",
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino.",
      "Aplica una revisión puntual o rango específico desde otra rama registrando su trazabilidad.",
      "Evita acumular metadatos de fusión en subdirectorios para mantener el registro en la raíz."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Subtree mergeinfo (Integración avanzada): Evita acumular metadatos de fusión en subdirectorios para mantener el registro en la raíz.",
    "topic": "Integración avanzada",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-09",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Reintegración de ramas»?",
    "options": [
      "Incorpora el trabajo completo de una rama de funcionalidad de vuelta hacia la línea troncal.",
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla.",
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino.",
      "Evita acumular metadatos de fusión en subdirectorios para mantener el registro en la raíz."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reintegración de ramas (Integración avanzada): Incorpora el trabajo completo de una rama de funcionalidad de vuelta hacia la línea troncal.",
    "topic": "Integración avanzada",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-10",
    "collectionId": "subversion",
    "question": "Respecto a integración avanzada en Subversion, ¿cuál es el propósito de «Cherry-pick centralizado»?",
    "options": [
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla al operar.",
      "Aplica una revisión puntual o rango específico desde otra rama registrando su trazabilidad.",
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino.",
      "Evita acumular metadatos de fusión en subdirectorios para mantener el registro en la raíz."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cherry-pick centralizado (Integración avanzada): Aplica una revisión puntual o rango específico desde otra rama registrando su trazabilidad.",
    "topic": "Integración avanzada",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-11",
    "collectionId": "subversion",
    "question": "En Subversion (Integración avanzada), ¿qué función técnica cumple «Mergeinfo elision»?",
    "options": [
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino al operar.",
      "Evita acumular metadatos de fusión en subdirectorios para mantener el registro en la raíz al operar.",
      "Consolida propiedades de fusión redundantes de subcarpetas hacia el directorio raíz de la rama.",
      "Aplica una revisión puntual o rango específico desde otra rama registrando su trazabilidad."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mergeinfo elision (Integración avanzada): Consolida propiedades de fusión redundantes de subcarpetas hacia el directorio raíz de la rama.",
    "topic": "Integración avanzada",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-12",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «Operative revision selection» en integración avanzada?",
    "options": [
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla al operar.",
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino.",
      "Evita acumular metadatos de fusión en subdirectorios para mantener el registro en la raíz.",
      "Distingue entre localizar la ruta en una revisión histórica y consultar su contenido en otra."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Operative revision selection (Integración avanzada): Distingue entre localizar la ruta en una revisión histórica y consultar su contenido en otra.",
    "topic": "Integración avanzada",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-13",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Reintegration eligibility validation»?",
    "options": [
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla al operar.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local.",
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reintegration eligibility validation (Integración avanzada): Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla.",
    "topic": "Integración avanzada",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-14",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Versioned properties»?",
    "options": [
      "Asigna propiedades predeterminadas según la extensión del archivo en el momento de agregarlo al operar.",
      "Adjunta metadatos clave-valor versionados a archivos o carpetas junto con los cambios de contenido.",
      "Controla permisos de ejecución y el tipo binario o textual de cada archivo en el repositorio al operar.",
      "Permite que subdirectorios y archivos consulten propiedades definidas en carpetas superiores al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Versioned properties (Propiedades y metadatos): Adjunta metadatos clave-valor versionados a archivos o carpetas junto con los cambios de contenido.",
    "topic": "Propiedades y metadatos",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-15",
    "collectionId": "subversion",
    "question": "Respecto a propiedades y metadatos en Subversion, ¿cuál es el propósito de «Automatic properties»?",
    "options": [
      "Controla permisos de ejecución y el tipo binario o textual de cada archivo en el repositorio.",
      "Permite que subdirectorios y archivos consulten propiedades definidas en carpetas superiores.",
      "Asigna propiedades predeterminadas según la extensión del archivo en el momento de agregarlo.",
      "Define cómo las reglas locales complementan o reemplazan propiedades heredadas desde la raíz."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Automatic properties (Propiedades y metadatos): Asigna propiedades predeterminadas según la extensión del archivo en el momento de agregarlo.",
    "topic": "Propiedades y metadatos",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-16",
    "collectionId": "subversion",
    "question": "En Subversion (Propiedades y metadatos), ¿qué función técnica cumple «Executable y MIME properties»?",
    "options": [
      "Asigna propiedades predeterminadas según la extensión del archivo en el momento de agregarlo.",
      "Permite que subdirectorios y archivos consulten propiedades definidas en carpetas superiores.",
      "Define cómo las reglas locales complementan o reemplazan propiedades heredadas desde la raíz.",
      "Controla permisos de ejecución y el tipo binario o textual de cada archivo en el repositorio."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Executable y MIME properties (Propiedades y metadatos): Controla permisos de ejecución y el tipo binario o textual de cada archivo en el repositorio.",
    "topic": "Propiedades y metadatos",
    "difficulty": "básico"
  },
  {
    "id": "subversion-q-17",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «Keywords» en propiedades y metadatos?",
    "options": [
      "Expande marcadores de revisión, autor y fecha dentro del archivo al actualizar la copia local.",
      "Asigna propiedades predeterminadas según la extensión del archivo en el momento de agregarlo.",
      "Controla permisos de ejecución y el tipo binario o textual de cada archivo en el repositorio.",
      "Permite que subdirectorios y archivos consulten propiedades definidas en carpetas superiores."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Keywords (Propiedades y metadatos): Expande marcadores de revisión, autor y fecha dentro del archivo al actualizar la copia local.",
    "topic": "Propiedades y metadatos",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-18",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Inheritance de propiedades»?",
    "options": [
      "Asigna propiedades predeterminadas según la extensión del archivo en el momento de agregarlo.",
      "Permite que subdirectorios y archivos consulten propiedades definidas en carpetas superiores.",
      "Controla permisos de ejecución y el tipo binario o textual de cada archivo en el repositorio.",
      "Define cómo las reglas locales complementan o reemplazan propiedades heredadas desde la raíz."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Inheritance de propiedades (Propiedades y metadatos): Permite que subdirectorios y archivos consulten propiedades definidas en carpetas superiores.",
    "topic": "Propiedades y metadatos",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-19",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Inherited-property precedence»?",
    "options": [
      "Asigna propiedades predeterminadas según la extensión del archivo en el momento de agregarlo.",
      "Controla permisos de ejecución y el tipo binario o textual de cada archivo en el repositorio.",
      "Define cómo las reglas locales complementan o reemplazan propiedades heredadas desde la raíz.",
      "Permite que subdirectorios y archivos consulten propiedades definidas en carpetas superiores."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Inherited-property precedence (Propiedades y metadatos): Define cómo las reglas locales complementan o reemplazan propiedades heredadas desde la raíz.",
    "topic": "Propiedades y metadatos",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-20",
    "collectionId": "subversion",
    "question": "Respecto a protocolos y servidores en Subversion, ¿cuál es el propósito de «HTTP con mod_dav_svn»?",
    "options": [
      "Recorre todas las revisiones almacenadas para comprobar sumas de verificación y deltas al operar.",
      "Reduce viajes de red agrupando metadatos y diferencias durante actualizaciones sobre HTTP.",
      "Sirve repositorios mediante un protocolo ligero propio directamente o encapsulado sobre SSH.",
      "Expone repositorios sobre el servidor web integrando cifrado, certificados y autenticación."
    ],
    "correctAnswerIndex": 3,
    "explanation": "HTTP con mod_dav_svn (Protocolos y servidores): Expone repositorios sobre el servidor web integrando cifrado, certificados y autenticación.",
    "topic": "Protocolos y servidores",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-21",
    "collectionId": "subversion",
    "question": "En Subversion (Protocolos y servidores), ¿qué función técnica cumple «svnserve»?",
    "options": [
      "Sirve repositorios mediante un protocolo ligero propio directamente o encapsulado sobre SSH.",
      "Recorre todas las revisiones almacenadas para comprobar sumas de verificación y deltas.",
      "Reduce viajes de red agrupando metadatos y diferencias durante actualizaciones sobre HTTP.",
      "Expone repositorios sobre el servidor web integrando cifrado, certificados y autenticación."
    ],
    "correctAnswerIndex": 0,
    "explanation": "svnserve (Protocolos y servidores): Sirve repositorios mediante un protocolo ligero propio directamente o encapsulado sobre SSH.",
    "topic": "Protocolos y servidores",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-22",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «FSFS backend» en protocolos y servidores?",
    "options": [
      "Sirve repositorios mediante un protocolo ligero propio directamente o encapsulado sobre SSH al evaluar.",
      "Almacena cada revisión confirmada como un archivo inmutable independiente en el sistema de archivos.",
      "Explora formatos experimentales de almacenamiento compacto para repositorios de gran escala al operar.",
      "Crea una copia íntegra y consistente del repositorio en caliente sin detener las confirmaciones."
    ],
    "correctAnswerIndex": 1,
    "explanation": "FSFS backend (Protocolos y servidores): Almacena cada revisión confirmada como un archivo inmutable independiente en el sistema de archivos.",
    "topic": "Protocolos y servidores",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-23",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «FSX backend»?",
    "options": [
      "Recorre todas las revisiones almacenadas para comprobar sumas de verificación y deltas al operar.",
      "Reduce viajes de red agrupando metadatos y diferencias durante actualizaciones sobre HTTP.",
      "Explora formatos experimentales de almacenamiento compacto para repositorios de gran escala.",
      "Expone repositorios sobre el servidor web integrando cifrado, certificados y autenticación."
    ],
    "correctAnswerIndex": 2,
    "explanation": "FSX backend (Protocolos y servidores): Explora formatos experimentales de almacenamiento compacto para repositorios de gran escala.",
    "topic": "Protocolos y servidores",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-24",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Repository hotcopy»?",
    "options": [
      "Reduce viajes de red agrupando metadatos y diferencias durante actualizaciones sobre HTTP al operar.",
      "Expone repositorios sobre el servidor web integrando cifrado, certificados y autenticación al operar.",
      "Sirve repositorios mediante un protocolo ligero propio directamente o encapsulado sobre SSH.",
      "Crea una copia íntegra y consistente del repositorio en caliente sin detener las confirmaciones."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Repository hotcopy (Protocolos y servidores): Crea una copia íntegra y consistente del repositorio en caliente sin detener las confirmaciones.",
    "topic": "Protocolos y servidores",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-25",
    "collectionId": "subversion",
    "question": "Respecto a protocolos y servidores en Subversion, ¿cuál es el propósito de «HTTPv2 bulk updates»?",
    "options": [
      "Reduce viajes de red agrupando metadatos y diferencias durante actualizaciones sobre HTTP al operar.",
      "Recorre todas las revisiones almacenadas para comprobar sumas de verificación y deltas.",
      "Expone repositorios sobre el servidor web integrando cifrado, certificados y autenticación.",
      "Sirve repositorios mediante un protocolo ligero propio directamente o encapsulado sobre SSH."
    ],
    "correctAnswerIndex": 0,
    "explanation": "HTTPv2 bulk updates (Protocolos y servidores): Reduce viajes de red agrupando metadatos y diferencias durante actualizaciones sobre HTTP.",
    "topic": "Protocolos y servidores",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-26",
    "collectionId": "subversion",
    "question": "En Subversion (Protocolos y servidores), ¿qué función técnica cumple «Repository filesystem verification»?",
    "options": [
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados al operar.",
      "Recorre todas las revisiones almacenadas para comprobar sumas de verificación y deltas.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local.",
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Repository filesystem verification (Protocolos y servidores): Recorre todas las revisiones almacenadas para comprobar sumas de verificación y deltas.",
    "topic": "Protocolos y servidores",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-27",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «Path-based authorization» en seguridad y gobierno?",
    "options": [
      "Registra quién leyó o modificó rutas críticas junto con mensajes de cambio estructurados al operar.",
      "Integra el control de acceso con directorios corporativos, tokens o llaves criptográficas.",
      "Restringe lectura y escritura por carpeta o rama dentro del repositorio según usuario o grupo.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Path-based authorization (Seguridad y gobierno): Restringe lectura y escritura por carpeta o rama dentro del repositorio según usuario o grupo.",
    "topic": "Seguridad y gobierno",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-28",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Authentication backends»?",
    "options": [
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados al operar.",
      "Registra quién leyó o modificó rutas críticas junto con mensajes de cambio estructurados.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local al operar.",
      "Integra el control de acceso con directorios corporativos, tokens o llaves criptográficas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Authentication backends (Seguridad y gobierno): Integra el control de acceso con directorios corporativos, tokens o llaves criptográficas.",
    "topic": "Seguridad y gobierno",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-29",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Hook sandboxing»?",
    "options": [
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados al operar.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local.",
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla.",
      "Recorre todas las revisiones almacenadas para comprobar sumas de verificación y deltas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hook sandboxing (Seguridad y gobierno): Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados.",
    "topic": "Seguridad y gobierno",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-30",
    "collectionId": "subversion",
    "question": "Respecto a seguridad y gobierno en Subversion, ¿cuál es el propósito de «Secret detection pre-commit»?",
    "options": [
      "Verifica que reglas permisivas en subcarpetas no anulen por accidente restricciones superiores al evaluar.",
      "Inspecciona el contenido de la transacción entrante para rechazar llaves o contraseñas antes de grabar.",
      "Cancela scripts de validación que excedan su presupuesto de segundos para no bloquear clientes al operar.",
      "Restringe lectura y escritura por carpeta o rama dentro del repositorio según usuario o grupo al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Secret detection pre-commit (Seguridad y gobierno): Inspecciona el contenido de la transacción entrante para rechazar llaves o contraseñas antes de grabar.",
    "topic": "Seguridad y gobierno",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-31",
    "collectionId": "subversion",
    "question": "En Subversion (Seguridad y gobierno), ¿qué función técnica cumple «Audit de revisiones»?",
    "options": [
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados al operar.",
      "Integra el control de acceso con directorios corporativos, tokens o llaves criptográficas.",
      "Registra quién leyó o modificó rutas críticas junto con mensajes de cambio estructurados.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Audit de revisiones (Seguridad y gobierno): Registra quién leyó o modificó rutas críticas junto con mensajes de cambio estructurados.",
    "topic": "Seguridad y gobierno",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-32",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «Authz rule shadowing» en seguridad y gobierno?",
    "options": [
      "Registra quién leyó o modificó rutas críticas junto con mensajes de cambio estructurados al operar.",
      "Integra el control de acceso con directorios corporativos, tokens o llaves criptográficas al operar.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados al operar.",
      "Verifica que reglas permisivas en subcarpetas no anulen por accidente restricciones superiores."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Authz rule shadowing (Seguridad y gobierno): Verifica que reglas permisivas en subcarpetas no anulen por accidente restricciones superiores.",
    "topic": "Seguridad y gobierno",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-33",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Hook execution timeouts»?",
    "options": [
      "Cancela scripts de validación que excedan su presupuesto de segundos para no bloquear clientes.",
      "Registra quién leyó o modificó rutas críticas junto con mensajes de cambio estructurados.",
      "Integra el control de acceso con directorios corporativos, tokens o llaves criptográficas.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hook execution timeouts (Seguridad y gobierno): Cancela scripts de validación que excedan su presupuesto de segundos para no bloquear clientes.",
    "topic": "Seguridad y gobierno",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-34",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Hook contract tests»?",
    "options": [
      "Prueba la interoperabilidad entre distintas versiones de clientes y capacidades del servidor al operar.",
      "Prueba los scripts del servidor con transacciones simuladas válidas e inválidas antes de desplegar.",
      "Valida migraciones y filtros cargando volcados de referencia y comparando el árbol resultante al operar.",
      "Simula fusiones complejas en una copia limpia para detectar conflictos de árbol por adelantado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Hook contract tests (Testing y automatización): Prueba los scripts del servidor con transacciones simuladas válidas e inválidas antes de desplegar.",
    "topic": "Testing y automatización",
    "difficulty": "intermedio"
  },
  {
    "id": "subversion-q-35",
    "collectionId": "subversion",
    "question": "Respecto a testing y automatización en Subversion, ¿cuál es el propósito de «Merge rehearsal»?",
    "options": [
      "Crea repositorios y copias de trabajo efímeras para probar herramientas de automatización al operar.",
      "Dispara compilaciones y pruebas automatizadas por cada confirmación atómica en el servidor.",
      "Simula fusiones complejas en una copia limpia para detectar conflictos de árbol por adelantado.",
      "Prueba la interoperabilidad entre distintas versiones de clientes y capacidades del servidor."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Merge rehearsal (Testing y automatización): Simula fusiones complejas en una copia limpia para detectar conflictos de árbol por adelantado.",
    "topic": "Testing y automatización",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-36",
    "collectionId": "subversion",
    "question": "En Subversion (Testing y automatización), ¿qué función técnica cumple «Working copy fixtures»?",
    "options": [
      "Dispara compilaciones y pruebas automatizadas por cada confirmación atómica en el servidor.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados al operar.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local al operar.",
      "Crea repositorios y copias de trabajo efímeras para probar herramientas de automatización."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Working copy fixtures (Testing y automatización): Crea repositorios y copias de trabajo efímeras para probar herramientas de automatización.",
    "topic": "Testing y automatización",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-37",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «CI por revisión» en testing y automatización?",
    "options": [
      "Dispara compilaciones y pruebas automatizadas por cada confirmación atómica en el servidor al operar.",
      "Crea repositorios y copias de trabajo efímeras para probar herramientas de automatización.",
      "Prueba la interoperabilidad entre distintas versiones de clientes y capacidades del servidor.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados."
    ],
    "correctAnswerIndex": 0,
    "explanation": "CI por revisión (Testing y automatización): Dispara compilaciones y pruebas automatizadas por cada confirmación atómica en el servidor.",
    "topic": "Testing y automatización",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-38",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Validación de svn:externals»?",
    "options": [
      "Crea repositorios y copias de trabajo efímeras para probar herramientas de automatización al operar.",
      "Comprueba en integración continua que todas las referencias externas incluyan una revisión fija.",
      "Dispara compilaciones y pruebas automatizadas por cada confirmación atómica en el servidor al operar.",
      "Prueba la interoperabilidad entre distintas versiones de clientes y capacidades del servidor."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Validación de svn:externals (Testing y automatización): Comprueba en integración continua que todas las referencias externas incluyan una revisión fija.",
    "topic": "Testing y automatización",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-39",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Dump-load golden fixtures»?",
    "options": [
      "Crea repositorios y copias de trabajo efímeras para probar herramientas de automatización al operar.",
      "Dispara compilaciones y pruebas automatizadas por cada confirmación atómica en el servidor.",
      "Valida migraciones y filtros cargando volcados de referencia y comparando el árbol resultante.",
      "Prueba la interoperabilidad entre distintas versiones de clientes y capacidades del servidor."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dump-load golden fixtures (Testing y automatización): Valida migraciones y filtros cargando volcados de referencia y comparando el árbol resultante.",
    "topic": "Testing y automatización",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-40",
    "collectionId": "subversion",
    "question": "Respecto a testing y automatización en Subversion, ¿cuál es el propósito de «Server compatibility matrix»?",
    "options": [
      "Crea repositorios y copias de trabajo efímeras para probar herramientas de automatización al operar.",
      "Dispara compilaciones y pruebas automatizadas por cada confirmación atómica en el servidor.",
      "Valida migraciones y filtros cargando volcados de referencia y comparando el árbol resultante.",
      "Prueba la interoperabilidad entre distintas versiones de clientes y capacidades del servidor."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Server compatibility matrix (Testing y automatización): Prueba la interoperabilidad entre distintas versiones de clientes y capacidades del servidor.",
    "topic": "Testing y automatización",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-41",
    "collectionId": "subversion",
    "question": "En Subversion (Rendimiento y mantenimiento), ¿qué función técnica cumple «Repository packing»?",
    "options": [
      "Agrupa miles de archivos de revisiones antiguas en segmentos compactos para reducir inodos.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local.",
      "Configura cachés en memoria para textos completos, deltas y directorios en el servidor.",
      "Ajusta el nivel de compresión de diferencias en tránsito equilibrando ancho de banda y CPU."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Repository packing (Rendimiento y mantenimiento): Agrupa miles de archivos de revisiones antiguas en segmentos compactos para reducir inodos.",
    "topic": "Rendimiento y mantenimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-42",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «Revision caching» en rendimiento y mantenimiento?",
    "options": [
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local al operar.",
      "Configura cachés en memoria para textos completos, deltas y directorios en el servidor.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados.",
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Revision caching (Rendimiento y mantenimiento): Configura cachés en memoria para textos completos, deltas y directorios en el servidor.",
    "topic": "Rendimiento y mantenimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-43",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Network compression»?",
    "options": [
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local al operar.",
      "Configura cachés en memoria para textos completos, deltas y directorios en el servidor.",
      "Ajusta el nivel de compresión de diferencias en tránsito equilibrando ancho de banda y CPU.",
      "Agrupa miles de archivos de revisiones antiguas en segmentos compactos para reducir inodos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Network compression (Rendimiento y mantenimiento): Ajusta el nivel de compresión de diferencias en tránsito equilibrando ancho de banda y CPU.",
    "topic": "Rendimiento y mantenimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-44",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Working copy cleanup internals»?",
    "options": [
      "Configura cachés en memoria para textos completos, deltas y directorios en el servidor.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados.",
      "Verifica que la rama haya sincronizado todos los cambios del tronco antes de cerrarla.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Working copy cleanup internals (Rendimiento y mantenimiento): Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local.",
    "topic": "Rendimiento y mantenimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-45",
    "collectionId": "subversion",
    "question": "Respecto a rendimiento y mantenimiento en Subversion, ¿cuál es el propósito de «Large repository tuning»?",
    "options": [
      "Optimiza uso compartido de representaciones y tamaño de bloque para árboles con millones de rutas al operar.",
      "Agrupa miles de archivos de revisiones antiguas en segmentos compactos para reducir inodos al operar.",
      "Ajusta el nivel de compresión de diferencias en tránsito equilibrando ancho de banda y CPU al operar.",
      "Empaqueta metadatos no versionados de revisiones cerradas para acelerar consultas de historial."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Large repository tuning (Rendimiento y mantenimiento): Optimiza uso compartido de representaciones y tamaño de bloque para árboles con millones de rutas.",
    "topic": "Rendimiento y mantenimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-46",
    "collectionId": "subversion",
    "question": "En Subversion (Rendimiento y mantenimiento), ¿qué función técnica cumple «Revision-property packing»?",
    "options": [
      "Agrupa miles de archivos de revisiones antiguas en segmentos compactos para reducir inodos al operar.",
      "Empaqueta metadatos no versionados de revisiones cerradas para acelerar consultas de historial.",
      "Configura cachés en memoria para textos completos, deltas y directorios en el servidor al operar.",
      "Ajusta el nivel de compresión de diferencias en tránsito equilibrando ancho de banda y CPU."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Revision-property packing (Rendimiento y mantenimiento): Empaqueta metadatos no versionados de revisiones cerradas para acelerar consultas de historial.",
    "topic": "Rendimiento y mantenimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-47",
    "collectionId": "subversion",
    "question": "Dentro de Subversion, ¿cómo opera el mecanismo de «Cache invalidation» en rendimiento y mantenimiento?",
    "options": [
      "Agrupa miles de archivos de revisiones antiguas en segmentos compactos para reducir inodos al operar.",
      "Ajusta el nivel de compresión de diferencias en tránsito equilibrando ancho de banda y CPU al operar.",
      "Coordina el vaciado de almacén rápidos cuando se modifican propiedades de revisión fuera de banda.",
      "Empaqueta metadatos no versionados de revisiones cerradas para acelerar consultas de historial."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Cache invalidation (Rendimiento y mantenimiento): Coordina el vaciado de cachés cuando se modifican propiedades de revisión fuera de banda.",
    "topic": "Rendimiento y mantenimiento",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-48",
    "collectionId": "subversion",
    "question": "Al trabajar con Subversion, ¿qué responsabilidad define a «Dump y load»?",
    "options": [
      "Respalda únicamente el rango de revisiones nuevas confirmadas desde la última copia segura al operar.",
      "Mantiene un repositorio espejo sincronizado en tiempo casi real listo para asumir el tráfico.",
      "Consulta qué revisiones de una rama aún no han sido integradas sobre la línea de destino al operar.",
      "Exporta e importa el historial completo de revisiones en un formato portable entre servidores."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dump y load (Continuidad y migración): Exporta e importa el historial completo de revisiones en un formato portable entre servidores.",
    "topic": "Continuidad y migración",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-49",
    "collectionId": "subversion",
    "question": "En la arquitectura de Subversion, ¿qué caracteriza técnicamente a «Incremental backups»?",
    "options": [
      "Respalda únicamente el rango de revisiones nuevas confirmadas desde la última copia segura al operar.",
      "Mantiene un repositorio espejo sincronizado en tiempo casi real listo para asumir el tráfico.",
      "Ejecuta scripts del servidor con entorno vacío, permisos mínimos y recursos acotados.",
      "Procesa la cola de trabajo pendiente y elimina prístinos huérfanos en la copia local."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Incremental backups (Continuidad y migración): Respalda únicamente el rango de revisiones nuevas confirmadas desde la última copia segura.",
    "topic": "Continuidad y migración",
    "difficulty": "avanzado"
  },
  {
    "id": "subversion-q-50",
    "collectionId": "subversion",
    "question": "Respecto a continuidad y migración en Subversion, ¿cuál es el propósito de «svnsync failover»?",
    "options": [
      "Respalda únicamente el rango de revisiones nuevas confirmadas desde la última copia segura al operar.",
      "Mantiene un repositorio espejo sincronizado en tiempo casi real listo para asumir el tráfico.",
      "Exporta e importa el historial completo de revisiones en un formato portable entre servidores.",
      "Recorre todas las revisiones almacenadas para comprobar sumas de verificación y deltas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "svnsync failover (Continuidad y migración): Mantiene un repositorio espejo sincronizado en tiempo casi real listo para asumir el tráfico.",
    "topic": "Continuidad y migración",
    "difficulty": "avanzado"
  }
];
