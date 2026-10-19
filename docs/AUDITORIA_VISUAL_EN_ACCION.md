# Auditoría visual de rutas `*-en-accion`

## Alcance

Auditoría documental de **73 apartados** `/#nombre-en-accion/` para proponer mejoras de animación alineadas al tema técnico, **sin realizar cambios directos de implementación**.

## Cobertura auditada (73/73)

- **Fundamentos (5):** `/fundamentos-programacion-en-accion`, `/algoritmos-en-accion`, `/matematicas-programacion-en-accion`, `/metodologias-desarrollo-en-accion`, `/scratch-en-accion`.
- **Lenguajes (27):** `/javascript-en-accion`, `/typescript-en-accion`, `/python-en-accion`, `/prolog-en-accion`, `/c-en-accion`, `/cpp-en-accion`, `/c-sharp-en-accion`, `/objective-c-en-accion`, `/c-star-en-accion`, `/cweb-en-accion`, `/embedded-c-en-accion`, `/visual-basic-en-accion`, `/ruby-en-accion`, `/rust-en-accion`, `/php-en-accion`, `/haskell-en-accion`, `/go-en-accion`, `/kotlin-en-accion`, `/java-en-accion`, `/r-en-accion`, `/ensamblador-en-accion`, `/erlang-en-accion`, `/lisp-en-accion`, `/perl-en-accion`, `/raku-en-accion`, `/scala-en-accion`, `/dart-en-accion`.
- **Diseño e interfaces (9):** `/ux-ui-en-accion`, `/html-css-en-accion`, `/bootstrap-en-accion`, `/angularjs-en-accion`, `/react-en-accion`, `/react-native-en-accion`, `/qwik-en-accion`, `/angular-en-accion`, `/flutter-en-accion`.
- **Plataformas y servidor (10):** `/apis-en-accion`, `/backend-en-accion`, `/nodejs-en-accion`, `/laravel-en-accion`, `/n8n-en-accion`, `/dotnet-en-accion`, `/mediapipe-en-accion`, `/firebase-en-accion`, `/android-en-accion`, `/django-en-accion`.
- **Datos (10):** `/xml-en-accion`, `/xsd-en-accion`, `/json-en-accion`, `/gestion-estado-en-accion`, `/bases-datos-en-accion`, `/sql-server-en-accion`, `/sql-en-accion`, `/nosql-en-accion`, `/blockchain-en-accion`, `/inteligencia-artificial-en-accion`.
- **Versionado y calidad (4):** `/git-en-accion`, `/github-en-accion`, `/debugging-en-accion`, `/subversion-en-accion`.
- **Infraestructura y entrega (8):** `/linux-en-accion`, `/aws-en-accion`, `/ci-cd-en-accion`, `/deployment-en-accion`, `/nginx-en-accion`, `/docker-en-accion`, `/sistemas-operativos-en-accion`, `/latex-en-accion`.

## Propuestas por tipo de animación

### 1) Flujo de runtime y concurrencia
**Rutas:** JavaScript, TypeScript, Python, Ruby, Rust, PHP, Haskell, Go, Kotlin, Java, R, Erlang, Lisp, Perl, Raku, Scala, Node.js, .NET, Dart, Prolog.  
**Mejoras propuestas:**
- Añadir “latido de reloj” discreto por etapa para reforzar causalidad temporal.
- Introducir un carril visual de “backpressure/retry” en ciclos de fallo-recuperación.
- Mostrar mini-resumen persistente de estado (`entrada`, `transformación`, `salida`) en cada loop.

### 2) Memoria, hardware y bajo nivel
**Rutas:** C, C++, Ensamblador, Embedded C, Objective-C, C*, CWEB, Linux, Sistemas operativos, Docker.  
**Mejoras propuestas:**
- Incorporar una capa fija de “mapa de memoria” con cambios incrementales (no flashes globales).
- Diferenciar interrupción/error/timeout con forma + patrón (no solo color).
- Añadir “zoom semántico” opcional por bloque (stack, heap, registros, kernel space).

### 3) UI, render y experiencia de usuario
**Rutas:** UX/UI, HTML/CSS, Bootstrap, AngularJS, React, React Native, Qwik, Angular, Flutter, Android.  
**Mejoras propuestas:**
- Integrar transiciones de foco visibles para teclado durante animación.
- Hacer explícito el ciclo `input → estado → render → feedback` en una banda lateral fija.
- Unificar curvas de easing por familia UI para coherencia perceptual entre colecciones.

### 4) Contratos, APIs y backend transaccional
**Rutas:** APIs, Backend, Laravel, n8n, Django, Firebase, MediaPipe, Inteligencia Artificial.  
**Mejoras propuestas:**
- Añadir “pasaporte de contrato” (schema/version/restricciones) visible durante todo el flujo.
- Mostrar bifurcación clara entre “camino feliz” y “camino de compensación”.
- Incluir marca de evidencia al final de ciclo (log, trace o métrica de verificación).

### 5) Datos, validación y persistencia
**Rutas:** XML, XSD, JSON, Gestión de estado, Bases de datos, SQL Server, SQL, NoSQL, Blockchain.  
**Mejoras propuestas:**
- Añadir overlay de “integridad” (validado, rechazado, pendiente) por entidad.
- Hacer visible el costo/latencia relativa al cambiar entre consulta, índice y escritura.
- Incluir un mini-“before/after” de estructura de datos para reforzar aprendizaje causal.

### 6) Versionado, colaboración y diagnóstico
**Rutas:** Git, GitHub, Debugging, Subversion, Metodologías de desarrollo.  
**Mejoras propuestas:**
- Estandarizar animación de merge/conflicto/resolución con estados intermedios persistentes.
- Añadir timeline compacto de decisión técnica (issue → cambio → validación → cierre).
- En debugging, reforzar contraste entre hipótesis, experimento y evidencia final.

### 7) Entrega, seguridad y operación
**Rutas:** AWS, CI/CD, Deployment, NGINX, LaTeX.  
**Mejoras propuestas:**
- Añadir una pista continua de “riesgo operativo” (build, seguridad, rollout, rollback).
- Marcar explícitamente checkpoints de aprobación/gate antes de promoción.
- Mostrar recuperación automática y manual como rutas separadas para facilitar lectura.

### 8) Fundamentos algorítmicos y pensamiento computacional
**Rutas:** Fundamentos de programación, Algoritmos y estructuras de datos, Matemáticas para programación, Scratch.  
**Mejoras propuestas:**
- Visualizar invariantes de forma constante durante todo el ciclo animado.
- Añadir comparadores de complejidad/costo en momentos clave (sin saturar UI).
- Reforzar progresión didáctica con transiciones de “concepto abstracto → caso aplicado”.

## Priorización sugerida (sin cambios de código en este issue)

1. **Alta:** continuidad causal visible (estado persistente por etapa) en todas las familias.
2. **Alta:** fallback homogéneo para `prefers-reduced-motion` con la misma semántica de evidencia.
3. **Media:** normalización de easing, tiempos base y ritmo entre colecciones hermanas.
4. **Media:** overlays de integridad y riesgos en datos/entrega.
5. **Media:** checklist visual de recuperación en rutas con fallos operativos.
6. **Baja:** zoom semántico opcional en rutas de bajo nivel y sistemas.

## Resultado de la auditoría

- Se confirma cobertura total de rutas `*-en-accion`.
- Se proponen mejoras por gramática visual, alineadas al tema técnico de cada colección.
- Esta entrega cumple la condición de **auditoría escrita sin modificación directa de animaciones**.
