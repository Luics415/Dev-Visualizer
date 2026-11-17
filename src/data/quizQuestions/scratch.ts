import type { QuizQuestion } from "@/data/quizTypes";

export const scratchQuestions: QuizQuestion[] = [
  {
    "id": "scratch-q-01",
    "collectionId": "scratch",
    "question": "En Scratch (Geometría con sprites), ¿qué función técnica cumple «Dirección»?",
    "options": [
      "Relaciona ángulo, estilo de rotación y orientación del disfraz para mover sprites previsiblemente.",
      "Calcula posiciones intermedias durante un tiempo dado y evita saltos visuales entre destinos.",
      "Convierte movimientos repetibles en trazos, polígonos y patrones generados por reglas al operar.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas en el flujo."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dirección y rotación (Geometría con sprites): Relaciona ángulo, estilo de rotación y orientación del disfraz para mover sprites previsiblemente.",
    "topic": "Geometría con sprites",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-02",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Deslizamiento interpolado» en geometría con sprites?",
    "options": [
      "Convierte movimientos repetibles en trazos, polígonos y patrones generados por reglas al operar.",
      "Calcula posiciones intermedias durante un tiempo dado y evita saltos visuales entre destinos.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas al operar.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías al evaluar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Deslizamiento interpolado (Geometría con sprites): Calcula posiciones intermedias durante un tiempo dado y evita saltos visuales entre destinos.",
    "topic": "Geometría con sprites",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-03",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Capas»?",
    "options": [
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías al operar.",
      "Convierte movimientos repetibles en trazos, polígonos y patrones generados por reglas.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Capas y orden visual (Geometría con sprites): Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas.",
    "topic": "Geometría con sprites",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-04",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Lápiz y dibujo procedural»?",
    "options": [
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías al operar.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.",
      "Convierte movimientos repetibles en trazos, polígonos y patrones generados por reglas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Lápiz y dibujo procedural (Geometría con sprites): Convierte movimientos repetibles en trazos, polígonos y patrones generados por reglas.",
    "topic": "Geometría con sprites",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-05",
    "collectionId": "scratch",
    "question": "Respecto a geometría con sprites en Scratch, ¿cuál es el propósito de «Transformaciones con coordenadas»?",
    "options": [
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías al operar.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.",
      "Muestra temporalmente variables y mensajes para localizar qué guion cambió un valor."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Transformaciones con coordenadas (Geometría con sprites): Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.",
    "topic": "Geometría con sprites",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-06",
    "collectionId": "scratch",
    "question": "En Scratch (Modelo de eventos), ¿qué función técnica cumple «Sombreros de evento»?",
    "options": [
      "Producen eventos periódicos sin bloquear otros guiones y mantiene ritmos observables en el flujo.",
      "Inicia pilas independientes cuando ocurre bandera, tecla, clic, mensaje o cambio de condición.",
      "Suspende al emisor hasta que terminan los receptores y permite secuenciar escenas coordinadas.",
      "El caso hace visible el fallo de Scratch; no continúa como si la evidencia fuera válida al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sombreros de evento (Modelo de eventos): Inician pilas independientes cuando ocurre bandera, tecla, clic, mensaje o cambio de condición.",
    "topic": "Modelo de eventos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-07",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Orden no determinista de guiones» en modelo de eventos?",
    "options": [
      "Inicia pilas independientes cuando ocurre bandera, tecla, clic, mensaje o cambio de condición al operar.",
      "Suspende al emisor hasta que terminan los receptores y permite secuenciar escenas coordinadas al operar.",
      "Explica por qué guiones activados juntos pueden intercalarse y compartir estado de forma inesperada.",
      "Producen eventos periódicos sin bloquear otros guiones y mantiene ritmos observables de forma clara."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Orden no determinista de guiones (Modelo de eventos): Explica por qué guiones activados juntos pueden intercalarse y compartir estado de forma inesperada.",
    "topic": "Modelo de eventos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-08",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Broadcast con espera»?",
    "options": [
      "Producen eventos periódicos sin bloquear otros guiones y mantiene ritmos observables en el flujo.",
      "Inicia pilas independientes cuando ocurre bandera, tecla, clic, mensaje o cambio de condición.",
      "El caso hace visible el fallo de Scratch; no continúa como si la evidencia fuera válida al operar.",
      "Suspende al emisor hasta que terminan los receptores y permite secuenciar escenas coordinadas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Broadcast con espera (Modelo de eventos): Suspende al emisor hasta que terminan los receptores y permite secuenciar escenas coordinadas.",
    "topic": "Modelo de eventos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-09",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Temporizadores y latidos»?",
    "options": [
      "Producen eventos periódicos sin bloquear otros guiones y mantiene ritmos observables.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Temporizadores y latidos (Modelo de eventos): Producen eventos periódicos sin bloquear otros guiones y mantienen ritmos observables.",
    "topic": "Modelo de eventos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-10",
    "collectionId": "scratch",
    "question": "Respecto a modelo de eventos en Scratch, ¿cuál es el propósito de «Protocolos entre sprites»?",
    "options": [
      "Inicia pilas independientes cuando ocurre bandera, tecla, clic, mensaje o cambio de condición en el flujo.",
      "Define nombres de mensaje, datos compartidos y respuestas esperadas para evitar coordinación implícita.",
      "Explica por qué guiones activados juntos pueden intercalarse y compartir estado de forma inesperada.",
      "Suspende al emisor hasta que terminan los receptores y permite secuenciar escenas coordinadas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Protocolos entre sprites (Modelo de eventos): Define nombres de mensaje, datos compartidos y respuestas esperadas para evitar coordinación implícita.",
    "topic": "Modelo de eventos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-11",
    "collectionId": "scratch",
    "question": "En Scratch (Datos persistentes y compartidos), ¿qué función técnica cumple «Variables locales del sprite»?",
    "options": [
      "Sincroniza valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación al operar.",
      "Restringe tamaño y confianza para que entradas remotas no rompan lógica ni expongan información.",
      "Conservan estado por instancia y evita que sprites independientes sobrescriban valores globales.",
      "Alinean posiciones entre columnas o agrupan filas serializadas para consultar conjuntos de datos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Variables locales del sprite (Datos persistentes y compartidos): Conservan estado por instancia y evitan que sprites independientes sobrescriban valores globales.",
    "topic": "Datos persistentes y compartidos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-12",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Listas como tablas» en datos persistentes y compartidos?",
    "options": [
      "Sincroniza valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación al operar.",
      "Conservan estado por instancia y evita que sprites independientes sobrescriban valores globales.",
      "Restringe tamaño y confianza para que entradas remotas no rompan lógica ni expongan información.",
      "Alinean posiciones entre columnas o agrupan filas serializadas para consultar conjuntos de datos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Listas como tablas (Datos persistentes y compartidos): Alinean posiciones entre columnas o agrupan filas serializadas para consultar conjuntos de datos.",
    "topic": "Datos persistentes y compartidos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-13",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Codificación de registros en listas»?",
    "options": [
      "Define separadores y escapes para reconstruir campos sin ambigüedad al no existir objetos nativos.",
      "Sincroniza valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación.",
      "Conservan estado por instancia y evita que sprites independientes sobrescriban valores globales.",
      "Restringe tamaño y confianza para que entradas remotas no rompan lógica ni expongan información."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Codificación de registros en listas (Datos persistentes y compartidos): Define separadores y escapes para reconstruir campos sin ambigüedad al no existir objetos nativos.",
    "topic": "Datos persistentes y compartidos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-14",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Variables en la nube»?",
    "options": [
      "Conservan estado por instancia y evita que sprites independientes sobrescriban valores globales.",
      "Sincroniza valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación.",
      "Restringe tamaño y confianza para que entradas remotas no rompan lógica ni expongan información.",
      "Alinean posiciones entre columnas o agrupan filas serializadas para consultar conjuntos de datos."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Variables en la nube (Datos persistentes y compartidos): Sincronizan valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación.",
    "topic": "Datos persistentes y compartidos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-15",
    "collectionId": "scratch",
    "question": "Respecto a datos persistentes y compartidos en Scratch, ¿cuál es el propósito de «Límites de datos compartidos»?",
    "options": [
      "Sincroniza valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación al operar.",
      "Conservan estado por instancia y evita que sprites independientes sobrescriban valores globales.",
      "Restringe tamaño y confianza para que entradas remotas no rompan lógica ni expongan información.",
      "Alinean posiciones entre columnas o agrupan filas serializadas para consultar conjuntos de datos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Límites de datos compartidos (Datos persistentes y compartidos): Restringen tamaño y confianza para que entradas remotas no rompan lógica ni expongan información.",
    "topic": "Datos persistentes y compartidos",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-16",
    "collectionId": "scratch",
    "question": "En Scratch (Patrones con clones), ¿qué función técnica cumple «Fábricas de clones»?",
    "options": [
      "Usa variables locales heredadas al crear para que cada instancia evolucione independientemente al operar.",
      "Distribuye objetivos y actualizaciones para impedir que cientos de clones repitan trabajo global.",
      "Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado con precisión.",
      "Centralizan creación y parámetros iniciales antes de que cada copia ejecute su evento de nacimiento."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Fábricas de clones (Patrones con clones): Centralizan creación y parámetros iniciales antes de que cada copia ejecute su evento de nacimiento.",
    "topic": "Patrones con clones",
    "difficulty": "básico"
  },
  {
    "id": "scratch-q-17",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Estado privado por clon» en patrones con clones?",
    "options": [
      "Usa variables locales heredadas al crear para que cada instancia evolucione independientemente al operar.",
      "Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado al operar.",
      "Elimina clones al salir de su ciclo de vida y libera capacidad para nuevas entidades al operar.",
      "Distribuye objetivos y actualizaciones para impedir que cientos de clones repitan trabajo global."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Estado privado por clon (Patrones con clones): Usa variables locales heredadas al crear para que cada instancia evolucione independientemente.",
    "topic": "Patrones con clones",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-18",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Pooling de objetos»?",
    "options": [
      "Elimina clones al salir de su ciclo de vida y libera capacidad para nuevas entidades al operar.",
      "Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pooling de objetos (Patrones con clones): Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado.",
    "topic": "Patrones con clones",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-19",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Destrucción controlada»?",
    "options": [
      "Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.",
      "Elimina clones al salir de su ciclo de vida y libera capacidad para nuevas entidades.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Destrucción controlada (Patrones con clones): Elimina clones al salir de su ciclo de vida y libera capacidad para nuevas entidades.",
    "topic": "Patrones con clones",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-20",
    "collectionId": "scratch",
    "question": "Respecto a patrones con clones en Scratch, ¿cuál es el propósito de «Coordinación de multitudes»?",
    "options": [
      "Usa variables locales heredadas al crear para que cada instancia evolucione independientemente al operar.",
      "Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado al evaluar.",
      "Elimina clones al salir de su ciclo de vida y libera capacidad para nuevas entidades en el flujo.",
      "Distribuye objetivos y actualizaciones para impedir que cientos de clones repitan trabajo global."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Coordinación de multitudes (Patrones con clones): Distribuye objetivos y actualizaciones para impedir que cientos de clones repitan trabajo global.",
    "topic": "Patrones con clones",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-21",
    "collectionId": "scratch",
    "question": "En Scratch (Animación y audio), ¿qué función técnica cumple «Fotogramas y disfraces»?",
    "options": [
      "Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo al operar.",
      "Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase.",
      "Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases.",
      "Combina tono, duración y efectos para producir señales sin depender solo de audios grabados."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fotogramas y disfraces (Animación y audio): Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo.",
    "topic": "Animación y audio",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-22",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Sincronización por tempo» en animación y audio?",
    "options": [
      "Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase al operar.",
      "Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases.",
      "Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo.",
      "Combina tono, duración y efectos para producir señales sin depender solo de audios grabados."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sincronización por tempo (Animación y audio): Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases.",
    "topic": "Animación y audio",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-23",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Síntesis de sonidos»?",
    "options": [
      "Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase al operar.",
      "Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo.",
      "Combina tono, duración y efectos para producir señales sin depender solo de audios grabados.",
      "Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Síntesis de sonidos (Animación y audio): Combina tono, duración y efectos para producir señales sin depender solo de audios grabados.",
    "topic": "Animación y audio",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-24",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Transiciones de escena»?",
    "options": [
      "Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo.",
      "Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas al operar.",
      "Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Transiciones de escena (Animación y audio): Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase.",
    "topic": "Animación y audio",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-25",
    "collectionId": "scratch",
    "question": "Respecto a animación y audio en Scratch, ¿cuál es el propósito de «Feedback audiovisual»?",
    "options": [
      "Responde inmediatamente a acciones con cambios perceptibles sin depender únicamente del color o sonido.",
      "Combina tono, duración y efectos para producir señales sin depender solo de audios grabados al operar.",
      "Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases al operar.",
      "Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo al evaluar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Feedback audiovisual (Animación y audio): Responde inmediatamente a acciones con cambios perceptibles sin depender únicamente del color o sonido.",
    "topic": "Animación y audio",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-26",
    "collectionId": "scratch",
    "question": "En Scratch (Física para juegos), ¿qué función técnica cumple «Velocidad y aceleración»?",
    "options": [
      "Representa colisión con formas simples independientes del detalle visual del disfraz al evaluar.",
      "Actualiza posición con velocidad y velocidad con fuerza para separar intención de movimiento.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas al operar.",
      "Mueve el mundo respecto al jugador y transforma coordenadas globales en posiciones de pantalla."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Velocidad y aceleración (Física para juegos): Actualiza posición con velocidad y velocidad con fuerza para separar intención de movimiento.",
    "topic": "Física para juegos",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-27",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Gravedad discreta» en física para juegos?",
    "options": [
      "Representa colisión con formas simples independientes del detalle visual del disfraz.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Gravedad discreta (Física para juegos): Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.",
    "topic": "Física para juegos",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-28",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Hitboxes»?",
    "options": [
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas al operar.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas.",
      "Representa colisión con formas simples independientes del detalle visual del disfraz."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Hitboxes (Física para juegos): Representa colisión con formas simples independientes del detalle visual del disfraz.",
    "topic": "Física para juegos",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-29",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Cámara y desplazamiento»?",
    "options": [
      "Mueve el mundo respecto al jugador y transforma coordenadas globales en posiciones de pantalla.",
      "Actualiza posición con velocidad y velocidad con fuerza para separar intención de movimiento.",
      "Representa colisión con formas simples independientes del detalle visual del disfraz al operar.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Cámara y desplazamiento (Física para juegos): Mueve el mundo respecto al jugador y transforma coordenadas globales en posiciones de pantalla.",
    "topic": "Física para juegos",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-30",
    "collectionId": "scratch",
    "question": "Respecto a extensiones y mundo físico en Scratch, ¿cuál es el propósito de «Texto a voz»?",
    "options": [
      "Convierte lecturas ruidosas en umbrales y acciones protegiendo rangos del dispositivo al operar.",
      "Envía frases a un sintetizador y controla idioma, voz y longitud de contenido generado.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías al operar.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Texto a voz (Extensiones y mundo físico): Envía frases a un sintetizador y controla idioma, voz y longitud de contenido generado.",
    "topic": "Extensiones y mundo físico",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-31",
    "collectionId": "scratch",
    "question": "En Scratch (Extensiones y mundo físico), ¿qué función técnica cumple «Detección de video»?",
    "options": [
      "Envía frases a un sintetizador y controla idioma, voz y longitud de contenido generado en el flujo.",
      "Convierte lecturas ruidosas en umbrales y acciones protegiendo rangos del dispositivo al operar.",
      "Extrae movimiento de la cámara como señal interactiva considerando iluminación y consentimiento.",
      "Transforma texto mediante una extensión remota cuya disponibilidad y resultado deben validarse."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Detección de video (Extensiones y mundo físico): Extrae movimiento de la cámara como señal interactiva considerando iluminación y consentimiento.",
    "topic": "Extensiones y mundo físico",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-32",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Motores y sensores» en extensiones y mundo físico?",
    "options": [
      "Envía frases a un sintetizador y controla idioma, voz y longitud de contenido generado.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.",
      "Convierte lecturas ruidosas en umbrales y acciones protegiendo rangos del dispositivo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Motores y sensores (Extensiones y mundo físico): Convierte lecturas ruidosas en umbrales y acciones protegiendo rangos del dispositivo.",
    "topic": "Extensiones y mundo físico",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-33",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Servicios de traducción»?",
    "options": [
      "Transforma texto mediante una extensión remota cuya disponibilidad y resultado deben validarse al operar.",
      "Envía frases a un sintetizador y controla idioma, voz y longitud de contenido generado al operar.",
      "Convierte lecturas ruidosas en umbrales y acciones protegiendo rangos del dispositivo al operar.",
      "Extrae movimiento de la cámara como señal interactiva considerando iluminación y consentimiento."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Servicios de traducción (Extensiones y mundo físico): Transforman texto mediante una extensión remota cuya disponibilidad y resultado deben validarse.",
    "topic": "Extensiones y mundo físico",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-34",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Pruebas por escenarios»?",
    "options": [
      "Ofrecen teclado, puntero y ritmo ajustable sin exigir precisión o una única señal sensorial al operar.",
      "Recorre inicio, victoria, derrota y reinicio comprobando estado visible después de cada acción.",
      "Muestra temporalmente variables y mensajes para localizar qué guion cambió un valor al evaluar.",
      "Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pruebas por escenarios (Calidad y publicación): Recorre inicio, victoria, derrota y reinicio comprobando estado visible después de cada acción.",
    "topic": "Calidad y publicación",
    "difficulty": "intermedio"
  },
  {
    "id": "scratch-q-35",
    "collectionId": "scratch",
    "question": "Respecto a calidad y publicación en Scratch, ¿cuál es el propósito de «Indicadores de estado oculto»?",
    "options": [
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías al operar.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.",
      "Muestra temporalmente variables y mensajes para localizar qué guion cambió un valor.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Indicadores de estado oculto (Calidad y publicación): Muestran temporalmente variables y mensajes para localizar qué guion cambió un valor.",
    "topic": "Calidad y publicación",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-36",
    "collectionId": "scratch",
    "question": "En Scratch (Calidad y publicación), ¿qué función técnica cumple «Controles accesibles»?",
    "options": [
      "Muestra temporalmente variables y mensajes para localizar qué guion cambió un valor al evaluar.",
      "Convierte movimientos repetibles en trazos, polígonos y patrones generados por reglas al operar.",
      "Reutiliza clones inactivos y evita tormentas de creación cuando el límite es ajustado al operar.",
      "Ofrecen teclado, puntero y ritmo ajustable sin exigir precisión o una única señal sensorial."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Controles accesibles (Calidad y publicación): Ofrecen teclado, puntero y ritmo ajustable sin exigir precisión o una única señal sensorial.",
    "topic": "Calidad y publicación",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-37",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Empaquetado para remix» en calidad y publicación?",
    "options": [
      "Nombra sprites, documenta mensajes y limpia estado para que otra persona pueda comprender y extender.",
      "Recorre inicio, victoria, derrota y reinicio comprobando estado visible después de cada acción.",
      "Ofrecen teclado, puntero y ritmo ajustable sin exigir precisión o una única señal sensorial al operar.",
      "Muestra temporalmente variables y mensajes para localizar qué guion cambió un valor de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Empaquetado para remix (Calidad y publicación): Nombra sprites, documenta mensajes y limpia estado para que otra persona pueda comprender y extender.",
    "topic": "Calidad y publicación",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-38",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Broadcast y wait»?",
    "options": [
      "Conservan estado por instancia y evita que sprites independientes sobrescriban valores globales al operar.",
      "Envía un mensaje global a todos los objetos y pausa el guion actual hasta que terminen sus respuestas.",
      "Restringe tamaño y confianza para que entradas remotas no rompan lógica ni expongan información al operar.",
      "Extrae movimiento de la cámara como señal interactiva considerando iluminación y consentimiento al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Broadcast y wait (Eventos y coordinación): Envía un mensaje global a todos los objetos y pausa el guion actual hasta que terminen sus respuestas.",
    "topic": "Eventos y coordinación",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-39",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Variables solo para este objeto»?",
    "options": [
      "Alinean posiciones entre columnas o agrupan filas serializadas para consultar conjuntos de datos al operar.",
      "Distribuye objetivos y actualizaciones para impedir que cientos de clones repitan trabajo global al operar.",
      "Crea una copia independiente de la identificadores en cada clon para aislar su posición, vida o estado.",
      "Elimina explícitamente las instancias efímeras que salen de escena para no agotar el cupo global al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Variables solo para este objeto (Clones y estado local): Crea una copia independiente de la variable en cada clon para aislar su posición, vida o estado.",
    "topic": "Clones y estado local",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-40",
    "collectionId": "scratch",
    "question": "Respecto a bloques personalizados en Scratch, ¿cuál es el propósito de «Ejecutar sin actualizar pantalla»?",
    "options": [
      "Sincroniza valores numéricos entre usuarios con límites de frecuencia, privacidad y moderación al operar.",
      "Usa variables locales heredadas al crear para que cada instancia evolucione independientemente al operar.",
      "Mueve el mundo respecto al jugador y transforma coordenadas globales en posiciones de pantalla al operar.",
      "Agrupa iteraciones y cálculos geométricos en un solo fotograma para dibujar o detectar sin parpadeos."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Ejecutar sin actualizar pantalla (Bloques personalizados): Agrupa iteraciones y cálculos geométricos en un solo fotograma para dibujar o detectar sin parpadeos.",
    "topic": "Bloques personalizados",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-41",
    "collectionId": "scratch",
    "question": "En Scratch (Listas y estructuras), ¿qué función técnica cumple «Indexación basada en uno»?",
    "options": [
      "Accede, reemplaza e inserta elementos dentro de listas dinámicas comenzando desde la posición uno.",
      "Combina tono, duración y efectos para producir señales sin depender solo de audios grabados.",
      "Ofrecen teclado, puntero y ritmo ajustable sin exigir precisión o una única señal sensorial.",
      "Calcula posiciones intermedias durante un tiempo dado y evita saltos visuales entre destinos."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Indexación basada en uno (Listas y estructuras): Accede, reemplaza e inserta elementos dentro de listas dinámicas comenzando desde la posición uno.",
    "topic": "Listas y estructuras",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-42",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Detección por máscara de sprite» en sensores y colisiones?",
    "options": [
      "Calcula posiciones intermedias durante un tiempo dado y evita saltos visuales entre destinos al operar.",
      "Evalúa el solapamiento real de píxeles visibles entre dos disfraces en lugar de usar cajas simples.",
      "Actualiza posición con velocidad y velocidad con fuerza para separar intención de movimiento al operar.",
      "Inicia pilas independientes cuando ocurre bandera, tecla, clic, mensaje o cambio de condición al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Detección por máscara de sprite (Sensores y colisiones): Evalúa el solapamiento real de píxeles visibles entre dos disfraces en lugar de usar cajas simples.",
    "topic": "Sensores y colisiones",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-43",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Detener otros programas en el objeto»?",
    "options": [
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas al operar.",
      "Muestra temporalmente variables y mensajes para localizar qué guion cambió un valor al operar.",
      "Cancela los bucles paralelos del mismo personaje sin detener su animación o rutina actual.",
      "Producen eventos periódicos sin bloquear otros guiones y mantiene ritmos observables al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Detener otros programas en el objeto (Control de flujo): Cancela los bucles paralelos del mismo personaje sin detener su animación o rutina actual.",
    "topic": "Control de flujo",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-44",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Interpolación con deslizar»?",
    "options": [
      "Nombra sprites, documenta mensajes y limpia estado para que otra persona pueda comprender y extender al operar.",
      "Agrupa iteraciones y cálculos geométricos en un solo fotograma para dibujar o detectar sin parpadeos al operar.",
      "Explica por qué guiones activados juntos pueden intercalarse y compartir estado de forma inesperada al operar.",
      "Desplaza suavemente el objeto hacia una coordenada destino repartiendo el movimiento en los segundos dados."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Interpolación con deslizar (Movimiento y escena): Desplaza suavemente el objeto hacia una coordenada destino repartiendo el movimiento en los segundos dados.",
    "topic": "Movimiento y escena",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-45",
    "collectionId": "scratch",
    "question": "Respecto a sonido y sincronización en Scratch, ¿cuál es el propósito de «Tocar sonido hasta que termine»?",
    "options": [
      "Sincroniza secuencias musicales o diálogos esperando a que concluya la pista antes de avanzar al operar.",
      "El caso hace visible el fallo de Scratch; no continúa como si la evidencia fuera válida.",
      "Coordina fondos, sprites y estado mediante mensajes que marcan inicio y fin de cada fase.",
      "Envía frases a un sintetizador y controla idioma, voz y longitud de contenido generado al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tocar sonido hasta que termine (Sonido y sincronización): Sincroniza secuencias musicales o diálogos esperando a que concluya la pista antes de avanzar.",
    "topic": "Sonido y sincronización",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-46",
    "collectionId": "scratch",
    "question": "En Scratch (Clones y memoria), ¿qué función técnica cumple «Límite de trescientos clones»?",
    "options": [
      "Convierte pulsos musicales en esperas calculadas para alinear movimiento, notas y compases al operar.",
      "Elimina explícitamente las instancias efímeras que salen de escena para no agotar el cupo global.",
      "Alterna imágenes a intervalos constantes y desacopla animación de la velocidad del equipo al operar.",
      "Combina tono, duración y efectos para producir señales sin depender solo de audios grabados al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Límite de trescientos clones (Clones y memoria): Elimina explícitamente las instancias efímeras que salen de escena para no agotar el cupo global.",
    "topic": "Clones y memoria",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-47",
    "collectionId": "scratch",
    "question": "Dentro de Scratch, ¿cómo opera el mecanismo de «Composición de texto y longitud» en operadores y cadenas?",
    "options": [
      "Explica por qué guiones activados juntos pueden intercalarse y compartir estado de forma inesperada al operar.",
      "Centralizan creación y parámetros iniciales antes de que cada copia ejecute su evento de nacimiento al operar.",
      "Concatena cadenas e inspecciona caracteres individuales por índice para construir diálogos y analizadores.",
      "Nombra sprites, documenta mensajes y limpia estado para que otra persona pueda comprender y extender al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Composición de texto y longitud (Operadores y cadenas): Concatena cadenas e inspecciona caracteres individuales por índice para construir diálogos y analizadores.",
    "topic": "Operadores y cadenas",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-48",
    "collectionId": "scratch",
    "question": "Al trabajar con Scratch, ¿qué responsabilidad define a «Transiciones por cambio de fondo»?",
    "options": [
      "Combina tono, duración y efectos para producir señales sin depender solo de audios grabados al operar.",
      "Ofrecen teclado, puntero y ritmo ajustable sin exigir precisión o una única señal sensorial al operar.",
      "Calcula posiciones intermedias durante un tiempo dado y evita saltos visuales entre destinos al operar.",
      "Dispara la inicialización o limpieza de personajes al detectar que el escenario conmutó de escena."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Transiciones por cambio de fondo (Escenario y fondos): Dispara la inicialización o limpieza de personajes al detectar que el escenario conmutó de escena.",
    "topic": "Escenario y fondos",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-49",
    "collectionId": "scratch",
    "question": "En la arquitectura de Scratch, ¿qué caracteriza técnicamente a «Descubrir fuga de clones»?",
    "options": [
      "El caso hace visible el fallo de Scratch; no continúa como si la evidencia fuera válida.",
      "Traslada, refleja y escala puntos respecto a un origen para reutilizar geometrías.",
      "Aplica una aceleración por tick y limita el paso para evitar atravesar plataformas.",
      "Controla qué sprite cubre a otro sin confundir profundidad aparente con coordenadas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Descubrir fuga de clones (Caso en acción): El caso hace visible el fallo de Scratch; no continúa como si la evidencia fuera válida.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  },
  {
    "id": "scratch-q-50",
    "collectionId": "scratch",
    "question": "Respecto a caso en acción en Scratch, ¿cuál es el propósito de «Cerrar el ciclo»?",
    "options": [
      "El caso hace visible el fallo de Scratch; no continúa como si la evidencia fuera válida de modo predecible.",
      "La recuperación de Scratch corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.",
      "Evalúa el solapamiento real de píxeles visibles entre dos disfraces en lugar de usar cajas simples al operar.",
      "Relaciona ángulo, estilo de rotación y orientación del disfraz para mover sprites previsiblemente al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Cerrar el ciclo (Caso en acción): La recuperación de Scratch corrige la causa, conserva trazabilidad y vuelve a ejecutar la etapa afectada.",
    "topic": "Caso en acción",
    "difficulty": "avanzado"
  }
];
