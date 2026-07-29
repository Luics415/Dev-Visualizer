# Roadmap del Dev Visualizer

## Regla principal

- [x] La cobertura decide la cantidad de escenas; no existe un límite artificial de 14.
- [x] Separar fundamentos, internals, trabajo diario, diagnóstico y producción.
- [x] Elegir una metáfora visual específica para cada mecanismo.
- [x] Permitir casos integrados con tantas etapas como necesite la historia.
- [x] Mantener guiños a Arcane/League como contexto, nunca como sustituto de la explicación.

## Navegación y experiencia de estudio

- [x] Biblioteca central en `/colecciones`.
- [x] Selector de colecciones agrupado y buscable.
- [x] Navegación anterior/siguiente entre las 14 rutas.
- [x] Estado visible de la colección actual.
- [x] Diseño responsive sin depender de scroll horizontal para descubrir temas.
- [x] Índice de capítulos con anclas y conteos.
- [x] Colecciones divididas por secciones temáticas.
- [ ] Búsqueda global por concepto, palabra clave y nivel.
- [ ] Filtros por fundamento, internals, producción y familia visual.
- [ ] Historial local y progreso de estudio.
- [ ] Página de enfoque individual por concepto.

## Sistema visual

- [x] Paleta exterior Jinx Arcane.
- [x] Colores semánticos internos independientes.
- [x] Tarjetas compactas, estándar y amplias.
- [x] Familias reutilizables: pipeline, capas, comparativa, timeline, árbol, puerta, stack, órbita, matriz, navegador, flujo, tarjetas, terminal y documento.
- [x] Escenas autónomas con loop.
- [x] Cajas paralelas para separar experiencia visible e internals en casos prácticos.
- [ ] Pausar escenas fuera del viewport.
- [ ] Controles opcionales de velocidad y pausa en vista de enfoque.
- [ ] Exportación vertical con Remotion.

## 01 — JavaScript ES6+

- [x] 55 conceptos en 12 capítulos.
- [x] Valores, coerción, scope, funciones, objetos, colecciones y clases.
- [x] Prototipos, `this`, iterables, generators y módulos dinámicos.
- [x] Promises, combinadores, event loop y cancelación.
- [x] Typed Arrays, RegExp, Intl, fechas, Proxy/Reflect y memoria.
- [x] JavaScript en acción ampliado a 14 etapas.
- [ ] Añadir workers, Atomics/SharedArrayBuffer y estrategias avanzadas de profiling del runtime.

## 02 — TypeScript

- [x] 64 conceptos en 7 capítulos.
- [x] Tipos base, nullabilidad, unions, intersections y narrowing.
- [x] Genéricos, constraints y sistema de tipos derivado.
- [x] Mapped, conditional, template literal, recursive y branded types.
- [x] Declaraciones, módulos, augmentation y configuración del compilador.
- [x] Migración, validación runtime, variance, type tests y performance del checker.
- [x] TypeScript en acción ampliado a 14 etapas.
- [ ] Añadir patrones de tipos para librerías públicas, monorepos y APIs generadas desde schemas.

## 03 — React

- [x] 62 conceptos en 7 capítulos.
- [x] Componentes, props, estado, forms, reducers y context.
- [x] Render, commit, reconciliación, identidad, Strict Mode y portals.
- [x] Effects, refs, external stores y sincronización.
- [x] Memoización, Compiler, profiling, Suspense y concurrencia.
- [x] Actions, optimistic UI, Server Components, SSR, streaming e hydration.
- [x] Testing y Rules of React.
- [x] React en acción ampliado a 14 etapas.
- [ ] Añadir patrones completos de routing, data frameworks y boundaries de caché del servidor.

## 04 — React Native

- [x] 80 conceptos en 7 capítulos.
- [x] New Architecture, Fabric, TurboModules, JSI, Codegen, Hermes y Metro.
- [x] Layout, density, safe areas, teclado, themes, platform code y tipografía.
- [x] Gestos, animaciones, media y feedback nativo.
- [x] Listas, navegación, deep links y restauración de estado.
- [x] Permisos, AppState, notificaciones, background work y accesibilidad.
- [x] Red, persistencia, offline-first, seguridad y biometría.
- [x] Debugging, performance, testing, native modules, builds, firma, OTA y upgrades.
- [x] React Native en acción ampliado a 14 etapas.
- [ ] Añadir stores, App/Play review, observabilidad móvil y estrategias de módulos compartidos multi-app.

## 05 — APIs REST

- [x] 34 conceptos desde fundamentos hasta producción.
- [x] APIs REST en acción con traza, inspección HTTP, persistencia y retry idempotente.
- [ ] Añadir OAuth/OIDC detallado, API gateways, circuit breakers, service discovery y compatibilidad por consumidor.

## 06 — Git y GitHub

- [x] 32 conceptos locales, remotos, colaborativos y de recuperación.
- [x] Git y GitHub en acción con 8 capítulos y paneles paralelos.
- [ ] Añadir signed commits, CODEOWNERS, environments, secrets, deployment approvals y monorepo workflows.

## 07 — HTML y CSS

- [x] 42 conceptos de estructura, semántica, accesibilidad, cascade, layout y rendering.
- [x] HTML y CSS en acción desde source hasta pixels y accessibility tree.
- [ ] Añadir subgrid, anchor positioning, view transitions, print styles, forms avanzados, fuentes y debugging con DevTools.

## Próximas colecciones del roadmap Jr

- [ ] State Management.
- [ ] Backend.
- [ ] Bases de datos.
- [ ] Linux.
- [ ] AWS.
- [ ] Deployment.
- [ ] Nginx.
- [ ] Docker.
- [ ] Firebase.
- [ ] Debugging.
- [ ] Architecture.

## Criterio de terminado por concepto

- La metáfora se entiende sin narración externa.
- El movimiento muestra causalidad y estado, no decoración.
- El código coincide con el proceso representado.
- La escena distingue desarrollo, runtime, navegador, sistema operativo, red o servidor cuando aplica.
- Los casos límite importantes aparecen o quedan registrados para expansión.
- La explicación aclara qué problema resuelve, cómo funciona y dónde puede fallar.
- El loop reinicia sin un corte confuso.
- Funciona en móvil y escritorio.
