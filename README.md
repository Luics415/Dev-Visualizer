# Dev Visualizer — Study Atlas V8

Enciclopedia visual de programación construida con animaciones autónomas. Cada concepto elige la metáfora que mejor explica su mecanismo: memoria, árboles, timelines, pipelines, grafos, capas, comparativas, terminales, documentos, navegador, sistema operativo o red.

## Filosofía de cobertura

El proyecto no usa una cuota fija de escenas. Cada tecnología crece hasta cubrir:

- Fundamentos y vocabulario.
- Modelo mental e internals.
- Trabajo diario y patrones.
- Diagnóstico, errores y recuperación.
- Performance, seguridad y producción.
- Un caso integrado “en acción”.

La versión V8 reúne **369 conceptos** en siete colecciones y reorganiza las cuatro primeras como rutas de estudio completas por capítulos.

## Biblioteca y navegación

La ruta `/colecciones` es el catálogo principal. Desde cualquier página, la barra superior permite:

- volver a la biblioteca con el botón `DV`;
- ver la colección actual;
- avanzar o retroceder entre las 14 rutas;
- abrir un selector agrupado de colecciones;
- buscar por nombre, tecnología o tipo de contenido;
- acceder correctamente desde móvil sin depender de una fila horizontal interminable.

## Rutas actuales

| Colección | Ruta | Cobertura | Caso integrado |
|---|---|---:|---:|
| JavaScript ES6+ | `/` | 55 conceptos · 12 capítulos | 14 etapas |
| TypeScript | `/typescript` | 64 conceptos · 7 capítulos | 14 etapas |
| React | `/react` | 62 conceptos · 7 capítulos | 14 etapas |
| React Native | `/react-native` | 80 conceptos · 7 capítulos | 14 etapas |
| APIs REST | `/apis-rest` | 34 conceptos | 3 capítulos de traza |
| Git y GitHub | `/git-github` | 32 conceptos | 8 capítulos |
| HTML y CSS | `/html-css` | 42 conceptos | 8 fases |

Las rutas prácticas son:

- `/javascript-en-accion`
- `/typescript-en-accion`
- `/react-en-accion`
- `/react-native-en-accion`
- `/apis-rest-en-accion`
- `/git-github-en-accion`
- `/html-css-en-accion`

## Cobertura V8

### JavaScript ES6+ — 55 conceptos

Incluye valores y coerción, scope y TDZ, funciones y `this`, destructuring, rest/spread, colecciones, objetos y prototipos, clases y campos privados, módulos y `import()`, Promises y combinadores, event loop, cancelación, iteradores y generators, Typed Arrays, expresiones regulares, `Intl`, fechas, `Proxy`/`Reflect`, clonación estructurada, administración explícita de recursos, garbage collection y memory leaks.

### JavaScript en acción — 14 etapas

El flujo práctico conserva la historia original y agrega normalización de entrada, closures, optional chaining, concurrencia con `Promise.all`, cancelación, separación por módulos, persistencia y retry/cleanup. Las cajas paralelas diferencian lo visible para el usuario de lo que ocurre dentro del runtime.

### TypeScript — 64 conceptos

Cubre inferencia, anotaciones, `any`, `unknown`, `never`, `void`, nullabilidad estricta, unions e intersections, discriminated unions, guards, predicates, assertions, `satisfies`, `as const`, genéricos y constraints, `keyof`, `typeof`, indexed access, mapped types, key remapping, conditional types, `infer`, template literal types, recursive y branded types, overloads, clases, decorators, módulos, `.d.ts`, augmentation, `tsconfig`, module resolution, emisión, project references, migración, validación runtime, variance, type tests y rendimiento del checker.

### TypeScript en acción — 14 etapas

El caso integrado ahora muestra también una frontera `unknown`, contratos con `satisfies`, IDs nominales, cliente genérico, estado discriminado, `import type`, pruebas de tipos y compilación con source maps.

### React — 62 conceptos

Incluye composición, pureza, estado como snapshot, batching, updaters, inmutabilidad, formularios, reducers y context; render/commit, reconciliación, identidad, Strict Mode y portals; refs, efectos, cleanup, dependencias y external stores; memoización, React Compiler, profiling, lazy, Suspense, transitions y deferred values; Error Boundaries, Actions, `useActionState`, `useOptimistic`, form actions, `useFormStatus`, `use`, Server Components, Server Functions, SSR, streaming, hydration, testing y Rules of React.

### React en acción — 14 etapas

La búsqueda de campeones mantiene el guiño a Jinx y agrega formulario controlado, estado derivado, transición no urgente, cancelación de efectos, actualización optimista, Suspense y errores, accesibilidad con `useId`, React Compiler y profiling.

### React Native — 80 conceptos

Cubre Nueva Arquitectura, Fabric, TurboModules, JSI, Codegen, Hermes, Metro, threads y React Compiler; componentes nativos, Yoga, densidad, responsive layout, safe areas, teclado, tema, plataforma y tipografía; gestos, Animated, LayoutAnimation, animación en UI thread, media y hápticos; listas virtualizadas, navegación, deep links y restauración; permisos, AppState, notificaciones, background work, geolocalización, sharing, accesibilidad e internacionalización; networking, cancelación, almacenamiento, secure storage, offline-first, cache, estado, seguridad y biometría; DevTools, rendimiento, arranque, memoria, crash reporting, testing, módulos/componentes nativos, Expo vs CLI, builds, firma, OTA, CI/CD y upgrades.

### React Native en acción — 14 etapas

La app de reportes añade layout seguro, cola offline, ciclo de vida con AppState, deep links, push notifications, accesibilidad y hápticos, presupuesto por frame, releases firmadas y OTA.

## Identidad visual

La interfaz exterior usa la paleta Jinx Arcane:

- `#835f86` — violeta.
- `#75455d` — vino.
- `#a76486` — rosa.
- `#4d7290` — azul.
- `#4b4754` — pizarra.

Los colores internos mantienen significado técnico independiente:

- Cian — proceso o transporte.
- Amarillo — dato activo o espera.
- Verde — éxito o resultado válido.
- Rojo — rechazo o error.
- Violeta — abstracción, estructura o tipo.

Los guiños a League of Legends y Arcane se usan como datos de ejemplo —Jinx, Vi, Ekko, Piltover o Zaun— sin sustituir el contenido técnico.

## Tecnologías

- Next.js App Router
- React
- TypeScript
- Motion for React
- CSS global con sistema visual propio

No se agregaron dependencias para V8.

## Ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:3000/colecciones`.

## Validar

```bash
npm run lint
npm run build
```

Las animaciones respetan la preferencia de movimiento reducido mediante `MotionConfig`.
