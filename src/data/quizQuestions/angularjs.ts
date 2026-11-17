import type { QuizQuestion } from "@/data/quizTypes";

export const angularjsQuestions: QuizQuestion[] = [
  {
    "id": "angularjs-q-01",
    "collectionId": "angularjs",
    "question": "En AngularJS (Arquitectura 1.x), ¿qué función técnica cumple «Modules»?",
    "options": [
      "Agrupa configuración, servicios y componentes sin ser un sistema de módulos ESM de forma clara.",
      "Resuelve providers por nombre y exige anotación segura ante minificación de forma clara.",
      "Crea injector, root scope y compilación inicial desde ng-app o código sin perder estado.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Modules (Arquitectura 1.x): Agrupa configuración, servicios y componentes sin ser un sistema de módulos ESM.",
    "topic": "Arquitectura 1.x",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-02",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Dependency injection» en arquitectura 1.x?",
    "options": [
      "Agrupa configuración, servicios y componentes sin ser un sistema de módulos ESM al evaluar.",
      "Resuelve providers por nombre y exige anotación segura ante minificación de forma clara.",
      "Crea injector, root scope y compilación inicial desde ng-app o código sin perder estado.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dependency injection (Arquitectura 1.x): Resuelve providers por nombre y exige anotación segura ante minificación.",
    "topic": "Arquitectura 1.x",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-03",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Bootstrap de la app»?",
    "options": [
      "Agrupa configuración, servicios y componentes sin ser un sistema de módulos ESM al evaluar.",
      "Resuelve providers por nombre y exige anotación segura ante minificación de forma clara.",
      "Crea injector, root scope y compilación inicial desde ng-app o código sin perder estado.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bootstrap de la app (Arquitectura 1.x): Crea injector, root scope y compilación inicial desde ng-app o código.",
    "topic": "Arquitectura 1.x",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-04",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «Config y run blocks»?",
    "options": [
      "Agrupa configuración, servicios y componentes sin ser un sistema de módulos ESM al operar.",
      "Resuelve providers por nombre y exige anotación segura ante minificación con precisión.",
      "Crea injector, root scope y compilación inicial desde ng-app o código dentro del flujo.",
      "Separa registro de providers de inicialización con instancias manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Config y run blocks (Arquitectura 1.x): Separa registro de providers de inicialización con instancias.",
    "topic": "Arquitectura 1.x",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-05",
    "collectionId": "angularjs",
    "question": "Respecto a arquitectura 1.x en AngularJS, ¿cuál es el propósito de «Strict DI»?",
    "options": [
      "Convierte anotaciones implícitas frágiles en errores detectables respetando las invariantes.",
      "Agrupa configuración, servicios y componentes sin ser un sistema de módulos ESM al operar.",
      "Resuelve providers por nombre y exige anotación segura ante minificación en el flujo.",
      "Crea injector, root scope y compilación inicial desde ng-app o código de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Strict DI (Arquitectura 1.x): Convierte anotaciones implícitas frágiles en errores detectables.",
    "topic": "Arquitectura 1.x",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-06",
    "collectionId": "angularjs",
    "question": "En AngularJS (Arquitectura 1.x), ¿qué función técnica cumple «Inyector jerárquico»?",
    "options": [
      "Agrupa configuración, servicios y componentes sin ser un sistema de módulos ESM de forma segura.",
      "Construye la raíz de inyección y asocia $rootScope como ancestro común de toda la aplicación.",
      "Resuelve providers por nombre y exige anotación segura ante minificación de modo predecible.",
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Inyector jerárquico y scopes raíz (Arquitectura 1.x): Construye la raíz de inyección y asocia $rootScope como ancestro común de toda la aplicación.",
    "topic": "Arquitectura 1.x",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-07",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Scopes y prototipos» en templates y digest?",
    "options": [
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar.",
      "Comparan valores observados en cada digest y ejecutan listeners al cambiar en ejecución.",
      "Heredan propiedades y pueden ocultarlas al escribir desde un scope hijo de forma segura.",
      "Repite watchers hasta estabilizar o alcanzar el límite de iteraciones sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Scopes y prototipos (Templates y digest): Heredan propiedades y pueden ocultarlas al escribir desde un scope hijo.",
    "topic": "Templates y digest",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-08",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Watchers»?",
    "options": [
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar.",
      "Heredan propiedades y pueden ocultarlas al escribir desde un scope hijo de forma segura.",
      "Repite watchers hasta estabilizar o alcanzar el límite de iteraciones sin perder estado.",
      "Comparan valores observados en cada digest y ejecutan listeners al cambiar en ejecución."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Watchers (Templates y digest): Comparan valores observados en cada digest y ejecutan listeners al cambiar.",
    "topic": "Templates y digest",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-09",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «Digest cycle»?",
    "options": [
      "Repite watchers hasta estabilizar o alcanzar el límite de iteraciones sin perder estado.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas.",
      "Comparan valores observados en cada digest y ejecutan listeners al cambiar al evaluar.",
      "Heredan propiedades y pueden ocultarlas al escribir desde un scope hijo con precisión."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Digest cycle (Templates y digest): Repite watchers hasta estabilizar o alcanzar el límite de iteraciones.",
    "topic": "Templates y digest",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-10",
    "collectionId": "angularjs",
    "question": "Respecto a templates y digest en AngularJS, ¿cuál es el propósito de «Apply y evalAsync»?",
    "options": [
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar.",
      "Introduce trabajo externo al ciclo sin disparar digest anidados dentro de la aplicación.",
      "Comparan valores observados en cada digest y ejecutan listeners al cambiar en ejecución.",
      "Heredan propiedades y pueden ocultarlas al escribir desde un scope hijo de forma segura."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Apply y evalAsync (Templates y digest): Introduce trabajo externo al ciclo sin disparar digest anidados.",
    "topic": "Templates y digest",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-11",
    "collectionId": "angularjs",
    "question": "En AngularJS (Templates y digest), ¿qué función técnica cumple «One-time binding»?",
    "options": [
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar.",
      "Comparan valores observados en cada digest y ejecutan listeners al cambiar en ejecución.",
      "Retira watchers de datos estables después de resolver su primer valor sin perder estado.",
      "Heredan propiedades y pueden ocultarlas al escribir desde un scope hijo de forma segura."
    ],
    "correctAnswerIndex": 2,
    "explanation": "One-time binding (Templates y digest): Retira watchers de datos estables después de resolver su primer valor.",
    "topic": "Templates y digest",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-12",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Deep dirty checking ($watchCollection)» en templates y digest?",
    "options": [
      "Comparan valores observados en cada digest y ejecutan listeners al cambiar al operar.",
      "Heredan propiedades y pueden ocultarlas al escribir desde un scope hijo al operar.",
      "Repite watchers hasta estabilizar o alcanzar el límite de iteraciones en el flujo.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Deep dirty checking ($watchCollection) (Templates y digest): Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas.",
    "topic": "Templates y digest",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-13",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Compile y link»?",
    "options": [
      "Transforma DOM y conecta una instancia de scope a cada elemento respetando las invariantes.",
      "Proyecta contenido del consumidor conservando el contexto de binding correcto al operar.",
      "Declara entrada, salida y referencia sin depender de herencia accidental en ejecución.",
      "Reduce dependencia de $scope y expone un objeto explícito al template de forma segura."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Compile y link (Directivas y componentes): Transforma DOM y conecta una instancia de scope a cada elemento.",
    "topic": "Directivas y componentes",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-14",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «Isolate scope bindings»?",
    "options": [
      "Proyecta contenido del consumidor conservando el contexto de binding correcto en ejecución.",
      "Declara entrada, salida y referencia sin depender de herencia accidental de forma clara.",
      "Reduce dependencia de $scope y expone un objeto explícito al template sin perder estado.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Isolate scope bindings (Directivas y componentes): Declara entrada, salida y referencia sin depender de herencia accidental.",
    "topic": "Directivas y componentes",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-15",
    "collectionId": "angularjs",
    "question": "Respecto a directivas y componentes en AngularJS, ¿cuál es el propósito de «Controllers y controllerAs»?",
    "options": [
      "Proyecta contenido del consumidor conservando el contexto de binding correcto en ejecución.",
      "Declara entrada, salida y referencia sin depender de herencia accidental de forma clara.",
      "Reduce dependencia de $scope y expone un objeto explícito al template sin perder estado.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Controllers y controllerAs (Directivas y componentes): Reduce dependencia de $scope y expone un objeto explícito al template.",
    "topic": "Directivas y componentes",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-16",
    "collectionId": "angularjs",
    "question": "En AngularJS (Directivas y componentes), ¿qué función técnica cumple «Components 1.5+»?",
    "options": [
      "Proyecta contenido del consumidor conservando el contexto de binding correcto en el flujo.",
      "Declara entrada, salida y referencia sin depender de herencia accidental con precisión.",
      "Reduce dependencia de $scope y expone un objeto explícito al template dentro del flujo.",
      "Adopta inputs, outputs y lifecycle hooks como frontera más migrable de modo predecible."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Components 1.5+ (Directivas y componentes): Adopta inputs, outputs y lifecycle hooks como frontera más migrable.",
    "topic": "Directivas y componentes",
    "difficulty": "básico"
  },
  {
    "id": "angularjs-q-17",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Transclusion» en directivas y componentes?",
    "options": [
      "Proyecta contenido del consumidor conservando el contexto de binding correcto al operar.",
      "Declara entrada, salida y referencia sin depender de herencia accidental en ejecución.",
      "Reduce dependencia de $scope y expone un objeto explícito al template de forma segura.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Transclusion (Directivas y componentes): Proyecta contenido del consumidor conservando el contexto de binding correcto.",
    "topic": "Directivas y componentes",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-18",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Directivas de atributos vs elementos»?",
    "options": [
      "Proyecta contenido del consumidor conservando el contexto de binding correcto de modo predecible.",
      "Distingue decoradores de comportamiento en atributos de componentes estructurales en elementos.",
      "Declara entrada, salida y referencia sin depender de herencia accidental sin degradar el flujo.",
      "Intercepta llamadas HTTP simulando respuestas exitosas o errores de red en tests unitarios."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Directivas de atributos vs elementos (Directivas y componentes): Distingue decoradores de comportamiento en atributos de componentes estructurales en elementos.",
    "topic": "Directivas y componentes",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-19",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «Services y factories»?",
    "options": [
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas al operar.",
      "Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http al operar.",
      "Producen singletons compartidos dentro del injector manteniendo la trazabilidad técnica.",
      "Integra solicitudes al digest y centraliza interceptors de transporte sin perder estado."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Services y factories (Datos y navegación): Producen singletons compartidos dentro del injector.",
    "topic": "Datos y navegación",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-20",
    "collectionId": "angularjs",
    "question": "Respecto a datos y navegación en AngularJS, ¿cuál es el propósito de «$http y promises»?",
    "options": [
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas al operar.",
      "Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http al operar.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar.",
      "Integra solicitudes al digest y centraliza interceptors de transporte sin perder estado."
    ],
    "correctAnswerIndex": 3,
    "explanation": "$http y promises (Datos y navegación): Integra solicitudes al digest y centraliza interceptors de transporte.",
    "topic": "Datos y navegación",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-21",
    "collectionId": "angularjs",
    "question": "En AngularJS (Datos y navegación), ¿qué función técnica cumple «Routing»?",
    "options": [
      "Relaciona URL, template, controller y resolución previa de datos sin degradar el flujo.",
      "Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http.",
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas.",
      "Integra solicitudes al digest y centraliza interceptors de transporte de forma clara."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Routing (Datos y navegación): Relaciona URL, template, controller y resolución previa de datos.",
    "topic": "Datos y navegación",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-22",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Forms y ngModel» en datos y navegación?",
    "options": [
      "Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http al operar.",
      "Coordina parsers, formatters, validadores y estados dirty o touched de modo predecible.",
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas al operar.",
      "Integra solicitudes al digest y centraliza interceptors de transporte dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Forms y ngModel (Datos y navegación): Coordina parsers, formatters, validadores y estados dirty o touched.",
    "topic": "Datos y navegación",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-23",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Filtros»?",
    "options": [
      "Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http al operar.",
      "Integra solicitudes al digest y centraliza interceptors de transporte en el flujo.",
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas.",
      "Coordina parsers, formatters, validadores y estados dirty o touched con precisión."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Filtros (Datos y navegación): Transforma presentación y puede resultar costoso si se recalcula dentro de listas.",
    "topic": "Datos y navegación",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-24",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «$resource y APIs REST»?",
    "options": [
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas en el flujo.",
      "Integra solicitudes al digest y centraliza interceptors de transporte durante la ejecución.",
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación.",
      "Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http al operar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "$resource y APIs REST (Datos y navegación): Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http.",
    "topic": "Datos y navegación",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-25",
    "collectionId": "angularjs",
    "question": "Respecto a calidad y seguridad en AngularJS, ¿cuál es el propósito de «Unit tests con injector»?",
    "options": [
      "Sustituye servicios y valida controllers, filters y components aislados de forma segura.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas.",
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas.",
      "Limita el número de elementos vivos en memoria para listas con miles de registros."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Unit tests con injector (Calidad y seguridad): Sustituye servicios y valida controllers, filters y components aislados.",
    "topic": "Calidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-26",
    "collectionId": "angularjs",
    "question": "En AngularJS (Calidad y seguridad), ¿qué función técnica cumple «E2E de flujos críticos»?",
    "options": [
      "Sustituye servicios y valida controllers, filters y components aislados de modo predecible.",
      "Protege comportamiento mientras la implementación cambia manteniendo el contrato activo.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar.",
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "E2E de flujos críticos (Calidad y seguridad): Protege comportamiento mientras la implementación cambia.",
    "topic": "Calidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-27",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Profiling de watchers» en calidad y seguridad?",
    "options": [
      "Sustituye servicios y valida controllers, filters y components aislados de modo predecible.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar.",
      "Localiza digests largos, listas grandes y funciones inestables manteniendo consistencia.",
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Profiling de watchers (Calidad y seguridad): Localiza digests largos, listas grandes y funciones inestables.",
    "topic": "Calidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-28",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «SCE y sanitización»?",
    "options": [
      "Sustituye servicios y valida controllers, filters y components aislados de modo predecible.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar.",
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas al operar.",
      "Controla contextos confiables sin desactivar protección global manteniendo consistencia."
    ],
    "correctAnswerIndex": 3,
    "explanation": "SCE y sanitización (Calidad y seguridad): Controla contextos confiables sin desactivar protección global.",
    "topic": "Calidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-29",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «Dependencias vulnerables»?",
    "options": [
      "Inventaría versiones congeladas y reduce exposición en la frontera durante la ejecución.",
      "Sustituye servicios y valida controllers, filters y components aislados con precisión.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas.",
      "Transforma presentación y puede resultar costoso si se recalcula dentro de listas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dependencias vulnerables (Calidad y seguridad): Inventaría versiones congeladas y reduce exposición en la frontera.",
    "topic": "Calidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-30",
    "collectionId": "angularjs",
    "question": "Respecto a calidad y seguridad en AngularJS, ¿cuál es el propósito de «$httpBackend y mocks en pruebas»?",
    "options": [
      "Sustituye servicios y valida controllers, filters y components aislados sin degradar el flujo.",
      "Intercepta llamadas HTTP simulando respuestas exitosas o errores de red en tests unitarios.",
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación.",
      "Reemplaza eventos globales incontrolados por servicios singleton con estado observable."
    ],
    "correctAnswerIndex": 1,
    "explanation": "$httpBackend y mocks en pruebas (Calidad y seguridad): Intercepta llamadas HTTP simulando respuestas exitosas o errores de red en tests unitarios.",
    "topic": "Calidad y seguridad",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-31",
    "collectionId": "angularjs",
    "question": "En AngularJS (Migración gradual), ¿qué función técnica cumple «Mapa de dependencias»?",
    "options": [
      "Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores al operar.",
      "Dirige rutas nuevas al sistema moderno y mantiene el resto operativo de modo predecible.",
      "Identifica módulos, rutas, globals y servicios con mayor acoplamiento sin perder estado.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mapa de dependencias (Migración gradual): Identifica módulos, rutas, globals y servicios con mayor acoplamiento.",
    "topic": "Migración gradual",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-32",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Seams por componente» en migración gradual?",
    "options": [
      "Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores al operar.",
      "Identifica módulos, rutas, globals y servicios con mayor acoplamiento sin perder estado.",
      "Dirige rutas nuevas al sistema moderno y mantiene el resto operativo de modo predecible.",
      "Encapsula zonas detrás de entradas y salidas explícitas durante la ejecución del módulo."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Seams por componente (Migración gradual): Encapsula zonas detrás de entradas y salidas explícitas.",
    "topic": "Migración gradual",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-33",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Strangler pattern»?",
    "options": [
      "Dirige rutas nuevas al sistema moderno y mantiene el resto operativo manteniendo consistencia.",
      "Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores al operar.",
      "Identifica módulos, rutas, globals y servicios con mayor acoplamiento de forma segura.",
      "Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Strangler pattern (Migración gradual): Dirige rutas nuevas al sistema moderno y mantiene el resto operativo.",
    "topic": "Migración gradual",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-34",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «Puente de servicios»?",
    "options": [
      "Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores al operar.",
      "Comparte contratos de datos sin compartir el runtime entero respetando las invariantes.",
      "Identifica módulos, rutas, globals y servicios con mayor acoplamiento dentro del flujo.",
      "Dirige rutas nuevas al sistema moderno y mantiene el resto operativo sin perder estado."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Puente de servicios (Migración gradual): Comparte contratos de datos sin compartir el runtime entero.",
    "topic": "Migración gradual",
    "difficulty": "intermedio"
  },
  {
    "id": "angularjs-q-35",
    "collectionId": "angularjs",
    "question": "Respecto a migración gradual en AngularJS, ¿cuál es el propósito de «Criterios de retiro»?",
    "options": [
      "Introduce interfaces y tipos graduales sobre controladores heredados antes de refactorizar.",
      "Identifica módulos, rutas, globals y servicios con mayor acoplamiento durante la ejecución.",
      "Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores al operar.",
      "Dirige rutas nuevas al sistema moderno y mantiene el resto operativo sin degradar el flujo."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Criterios de retiro (Migración gradual): Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores.",
    "topic": "Migración gradual",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-36",
    "collectionId": "angularjs",
    "question": "En AngularJS (Migración gradual), ¿qué función técnica cumple «Tipado estático con TypeScript en 1.x»?",
    "options": [
      "Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores en ejecución.",
      "Identifica módulos, rutas, globals y servicios con mayor acoplamiento durante la ejecución.",
      "Dirige rutas nuevas al sistema moderno y mantiene el resto operativo sin degradar el flujo.",
      "Introduce interfaces y tipos graduales sobre controladores heredados antes de refactorizar."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Tipado estático con TypeScript en 1.x (Migración gradual): Introduce interfaces y tipos graduales sobre controladores heredados antes de refactorizar.",
    "topic": "Migración gradual",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-37",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Debounce en ng-model-options» en rendimiento y optimización del digest?",
    "options": [
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación al operar.",
      "Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes.",
      "Deriva cálculos matemáticos o análisis de cadenas fuera del hilo principal de UI.",
      "Elimina clases y comentarios de depuración para acelerar la compilación del DOM al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Debounce en ng-model-options (Rendimiento y optimización del digest): Retrasa la sincronización del input con el scope para evitar digests en cada pulsación.",
    "topic": "Rendimiento y optimización del digest",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-38",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Track by en ng-repeat»?",
    "options": [
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación con precisión.",
      "Reutiliza elementos del DOM existentes mediante identificadores únicos en lugar de destruir nodos.",
      "Limita el número de elementos vivos en memoria para listas con miles de registros de forma segura.",
      "Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes dentro del flujo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Track by en ng-repeat (Rendimiento y optimización del digest): Reutiliza elementos del DOM existentes mediante identificadores únicos en lugar de destruir nodos.",
    "topic": "Rendimiento y optimización del digest",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-39",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «Desactivación de debug info ($compileProvider)»?",
    "options": [
      "Limita el número de elementos vivos en memoria para listas con miles de registros al evaluar.",
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación.",
      "Elimina clases y comentarios de depuración para acelerar la compilación del DOM al operar.",
      "Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes al operar."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Desactivación de debug info ($compileProvider) (Rendimiento y optimización del digest): Elimina clases y comentarios de depuración para acelerar la compilación del DOM.",
    "topic": "Rendimiento y optimización del digest",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-40",
    "collectionId": "angularjs",
    "question": "Respecto a rendimiento y optimización del digest en AngularJS, ¿cuál es el propósito de «Paginación virtual y scroll infinito»?",
    "options": [
      "Elimina clases y comentarios de depuración para acelerar la compilación del DOM al operar.",
      "Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes.",
      "Deriva cálculos matemáticos o análisis de cadenas fuera del hilo principal de UI.",
      "Limita el número de elementos vivos en memoria para listas con miles de registros."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Paginación virtual y scroll infinito (Rendimiento y optimización del digest): Limita el número de elementos vivos en memoria para listas con miles de registros.",
    "topic": "Rendimiento y optimización del digest",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-41",
    "collectionId": "angularjs",
    "question": "En AngularJS (Rendimiento y optimización del digest), ¿qué función técnica cumple «Digest selectivo»?",
    "options": [
      "Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes con precisión.",
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación.",
      "Limita el número de elementos vivos en memoria para listas con miles de registros al operar.",
      "Deriva cálculos matemáticos o análisis de cadenas fuera del hilo principal de UI al operar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Digest selectivo y scope aislados (Rendimiento y optimización del digest): Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes.",
    "topic": "Rendimiento y optimización del digest",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-42",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Web Workers para procesamiento pesado» en rendimiento y optimización del digest?",
    "options": [
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación al operar.",
      "Deriva cálculos matemáticos o análisis de cadenas fuera del hilo principal de UI al operar.",
      "Limita el número de elementos vivos en memoria para listas con miles de registros al operar.",
      "Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes al operar."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Web Workers para procesamiento pesado (Rendimiento y optimización del digest): Deriva cálculos matemáticos o análisis de cadenas fuera del hilo principal de UI.",
    "topic": "Rendimiento y optimización del digest",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-43",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Service vs Factory vs Provider»?",
    "options": [
      "Reemplaza eventos globales incontrolados por servicios singleton con estado observable al evaluar.",
      "Interpreta y extiende comportamiento de servicios de terceros sin editar código fuente al operar.",
      "Distingue constructores con new, funciones factoría y proveedores configurables en fase config.",
      "Gestiona scopes hermanos y clones de transclusión sin perder bindings del contexto original."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Service vs Factory vs Provider (Patrones de diseño heredados y anti-patrones): Distingue constructores con new, funciones factoría y proveedores configurables en fase config.",
    "topic": "Patrones de diseño heredados y anti-patrones",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-44",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «Evitar $rootScope como bus global»?",
    "options": [
      "Migra del patrón deferred arcaico a la sintaxis estándar de Promesas ECMAScript al operar.",
      "Interpreta y extiende comportamiento de servicios de terceros sin editar código fuente.",
      "Evita fugas reteniendo referencias a elementos DOM en variables de cierre en ejecución.",
      "Reemplaza eventos globales incontrolados por servicios singleton con estado observable."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Evitar $rootScope como bus global (Patrones de diseño heredados y anti-patrones): Reemplaza eventos globales incontrolados por servicios singleton con estado observable.",
    "topic": "Patrones de diseño heredados y anti-patrones",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-45",
    "collectionId": "angularjs",
    "question": "Respecto a patrones de diseño heredados y anti-patrones en AngularJS, ¿cuál es el propósito de «Promesas diferidas ($q.defer vs $q constructor)»?",
    "options": [
      "Migra del patrón deferred arcaico a la sintaxis estándar de Promesas ECMAScript de forma clara.",
      "Reemplaza eventos globales incontrolados por servicios singleton con estado observable.",
      "Interpreta y extiende comportamiento de servicios de terceros sin editar código fuente.",
      "Gestiona scopes hermanos y clones de transclusión sin perder bindings del contexto original."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Promesas diferidas ($q.defer vs $q constructor) (Patrones de diseño heredados y anti-patrones): Migra del patrón deferred arcaico a la sintaxis estándar de Promesas ECMAScript.",
    "topic": "Patrones de diseño heredados y anti-patrones",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-46",
    "collectionId": "angularjs",
    "question": "En AngularJS (Patrones de diseño heredados y anti-patrones), ¿qué función técnica cumple «Decoradores de servicios ($provide.decorator)»?",
    "options": [
      "Migra del patrón deferred arcaico a la sintaxis estándar de Promesas ECMAScript al operar.",
      "Interpreta y extiende comportamiento de servicios de terceros sin editar código fuente.",
      "Reemplaza eventos globales incontrolados por servicios singleton con estado observable.",
      "Evita fugas reteniendo referencias a elementos DOM en variables de cierre en ejecución."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Decoradores de servicios ($provide.decorator) (Patrones de diseño heredados y anti-patrones): Interpreta y extiende comportamiento de servicios de terceros sin editar código fuente.",
    "topic": "Patrones de diseño heredados y anti-patrones",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-47",
    "collectionId": "angularjs",
    "question": "Dentro de AngularJS, ¿cómo opera el mecanismo de «Gestión de memoria y closures en controladores» en patrones de diseño heredados y anti-patrones?",
    "options": [
      "Migra del patrón deferred arcaico a la sintaxis estándar de Promesas ECMAScript al evaluar.",
      "Reemplaza eventos globales incontrolados por servicios singleton con estado observable.",
      "Evita fugas reteniendo referencias a elementos DOM en variables de cierre con precisión.",
      "Interpreta y extiende comportamiento de servicios de terceros sin editar código fuente."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Gestión de memoria y closures en controladores (Patrones de diseño heredados y anti-patrones): Evita fugas reteniendo referencias a elementos DOM en variables de cierre.",
    "topic": "Patrones de diseño heredados y anti-patrones",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-48",
    "collectionId": "angularjs",
    "question": "Al trabajar con AngularJS, ¿qué responsabilidad define a «Directivas transclusivas complejas»?",
    "options": [
      "Reemplaza eventos globales incontrolados por servicios singleton con estado observable al operar.",
      "Interpreta y extiende comportamiento de servicios de terceros sin editar código fuente al operar.",
      "Migra del patrón deferred arcaico a la sintaxis estándar de Promesas ECMAScript en el flujo.",
      "Gestiona scopes hermanos y clones de transclusión sin perder bindings del contexto original."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Directivas transclusivas complejas (Patrones de diseño heredados y anti-patrones): Gestiona scopes hermanos y clones de transclusión sin perder bindings del contexto original.",
    "topic": "Patrones de diseño heredados y anti-patrones",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-49",
    "collectionId": "angularjs",
    "question": "En la arquitectura de AngularJS, ¿qué caracteriza técnicamente a «UpgradeModule y bootstrapping híbrido»?",
    "options": [
      "Inicializa AngularJS 1.x y Angular moderno en paralelo compartiendo el mismo documento.",
      "Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http.",
      "Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores.",
      "Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes."
    ],
    "correctAnswerIndex": 0,
    "explanation": "UpgradeModule y bootstrapping híbrido (Coexistencia y ngUpgrade): Inicializa AngularJS 1.x y Angular moderno en paralelo compartiendo el mismo documento.",
    "topic": "Coexistencia y ngUpgrade",
    "difficulty": "avanzado"
  },
  {
    "id": "angularjs-q-50",
    "collectionId": "angularjs",
    "question": "Respecto a coexistencia y ngupgrade en AngularJS, ¿cuál es el propósito de «Downgrade de componentes modernos»?",
    "options": [
      "Inicializa AngularJS 1.x y Angular moderno en paralelo compartiendo el mismo documento al operar.",
      "Empaqueta componentes basados en Standalone para usarlos en plantillas AngularJS heredadas.",
      "Retrasa la sincronización del input con el scope para evitar digests en cada pulsación.",
      "Reemplaza eventos globales incontrolados por servicios singleton con estado observable."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Downgrade de componentes modernos (Coexistencia y ngUpgrade): Empaqueta componentes basados en Standalone para usarlos en plantillas AngularJS heredadas.",
    "topic": "Coexistencia y ngUpgrade",
    "difficulty": "avanzado"
  }
];
