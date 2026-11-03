# Expediente de Auditoría: Restauración Incondicional del Icono de Ancla, Rediseño Profundo de «¿Qué se aprende?» y Aplicación del Lenguaje de Diseño de Tarjetas

**Fecha:** 2026-11-03  
**Rama:** `feat/redesign-learning-and-restore-anchor-icon`  
**Issue:** #251  
**Estado:** Verificado y Aprobado (`npm run check` con 0 errores y 0 advertencias)

---

## 1. Restauración Incondicional del Icono de Marca (Ancla)

1. **Restauración de Activos:**
   - Se restauraron de inmediato todos los activos binarios originales de la marca a su estado auténtico previo:
     - `public/favicon.ico`
     - `public/favicon-32x32.png`
     - `public/favicon-48x48.png`
     - `public/apple-touch-icon.png`
     - `public/icon-192.png`
     - `public/icon-512.png`
     - `public/brand/anchor-nav.png`
     - `public/brand/dev-visualizer-icon.png`
2. **Priorización en el Encabezado HTML (`src/app/layout.tsx`):**
   - Se configuró `favicon.ico` como la entrada prioritaria en la propiedad `icons.icon`, eliminando cualquier conflicto de precedencia con vectores SVG para garantizar que las pestañas de los navegadores muestren de forma inmediata y estable el ancla de Dev Visualizer.

---

## 2. Rediseño Profundo: «¿Qué se aprende en Dev Visualizer?»

Se sustituyó la presentación superficial por una deconstrucción curricular de alta densidad y rigor de ingeniería en 6 grandes dominios:

1. **Arquitectura de Runtimes & Gestión de Memoria:**
   - Asignación de memoria física Stack vs Heap, punteros, fragmentación.
   - Sincronización del Event Loop de V8: Call Stack, Microtasks Queue (Promises) y Macrotasks (Timers/IO).
   - Recolección de basura generacional (Mark-Sweep-Compact).
   - Concurrencia real: Hilos del SO vs Goroutines en Go vs Modelo de Actores en Erlang.

2. **Algoritmos y Estructuras de Datos Observables:**
   - Particionamiento Hoare vs Lomuto en Quicksort y estabilidad en Mergesort.
   - Estructuras jerárquicas: rebalanceo en Árboles AVL y B-Trees para índices en bases de datos.
   - Recorridos de grafos: camino más corto con Dijkstra SPF y ordenación topológica.
   - Análisis asintótico demostrado en tiempo real ($O(1)$, $O(\log N)$, $O(N)$, $O(N \log N)$).

3. **Sistemas Distribuidos, Redes y Resiliencia:**
   - Pila de red: TCP Handshake, cifrado TLS 1.3, frames HTTP/2 y streams QUIC sobre HTTP/3.
   - Consistencia eventual vs fuerte, Teorema CAP y particionamiento de datos.
   - Patrones de resiliencia: Circuit Breakers (Closed, Open, Half-Open), Token Bucket Rate Limiting y Retry con Jitter.
   - Protocolos modernos: REST semántico vs gRPC con Protocol Buffers y WebSockets.

4. **Frontend de Alto Rendimiento y Motor DOM:**
   - Critical Rendering Path completo: DOM, CSSOM, Render Tree, Layout (reflow) y Compositing acelerado por GPU.
   - Reactividad profunda: Signals reactivas con grafos acíclicos dirigidos (DAG) vs reconciliación Virtual DOM.
   - Estrategias de hidratación: SSR, SSG, Server Components (RSC) y Resumability.
   - Core Web Vitals en producción (LCP, INP, CLS).

5. **Bases de Datos y Motores de Almacenamiento:**
   - Mecánica en disco: Índices B+Tree vs Log-Structured Merge-Trees (LSM-Trees y WAL).
   - Transacciones ACID: niveles de aislamiento (Read Committed, Repeatable Read, Serializable) y MVCC.
   - Optimización de consultas SQL leyendo árboles de planes `EXPLAIN ANALYZE`.

6. **Infraestructura, Linux Internals y DevOps:**
   - Jaulas de aislamiento del Kernel Linux: Namespaces (PID, NET, MNT, IPC), cgroups v2 (CPU/RAM) y OverlayFS.
   - Ciclo de vida de contenedores Docker y orquestación.
   - Despliegues Zero-Downtime: Blue/Green y Canary releases.

---

## 3. Rediseño de la Consola de Simulación Observable

Se transformó `ArchitectureSimulationConsole.tsx` en una estación de ingeniería interactiva de alta fidelidad con 4 simuladores funcionales:
1. **Algoritmo Quicksort:** Barras verticales dinámicas con altura proporcional a los valores, resaltado visual del Pivote activo, punteros móviles `▲ L` y `▼ R`, intercambios observables y cálculo de comparaciones e invariantes.
2. **Telemetría de Tráfico en Tiempo Real:** Curva SVG suave de Throughput (RPS) con degradado de área y línea discontinua de latencia p95/p99, con cursor de tiempo reactivo y tarjetas de métricas en vivo.
3. **Event Loop V8:** Diagrama interactivo de 3 columnas (Call Stack, Microtasks Queue, Macrotasks Queue) demostrando que las microtareas siempre drenan antes del siguiente ciclo.
4. **Circuit Breaker Resiliente:** Máquina de estados con transiciones visuales entre `CLOSED`, `OPEN` y `HALF-OPEN` ante inyección de anomalías.

---

## 4. Aplicación del Lenguaje de Diseño de Tarjetas

En lugar de incrustar componentes de catálogo de forma literal, todas las secciones (`¿Qué se aprende?`, `¿Qué puedo hacer?`, `¿Puedo confiar?`, `¿Qué hago ahora?`) adoptan las propiedades visuales canónicas del proyecto:
- Fondos en paneles oscuros profundos (`var(--panel-2)`).
- Bordes con resplandor sutil cyan/púrpura (`1px solid var(--line)` y glow en hover).
- Badges numéricos y de categoría en tipografía monospace (`var(--mono)`).
- Tipografía limpia con contraste estricto y listas estructuradas de capacidades.
- Enlaces de acción directa con flechas responsivas.

---

## 5. Verificación Técnica Integral (*Truthful State*)

```bash
> dev-visualizer@1.1.0 check
> npm run lint && npm run typecheck && npm run check:library && npm run build && npm run check:links && npm run check:a11y

> dev-visualizer@1.1.0 lint
> eslint .
[OK: 0 errores, 0 advertencias]

> dev-visualizer@1.1.0 typecheck
> tsc --noEmit
[OK: 0 errores de tipos en TypeScript estricto]

> dev-visualizer@1.1.0 check:library
> node scripts/validate-library-catalog.mjs
[library-catalog] OK: 42 temas fuente/179 recursos y 31 temas complementarios/93 recursos; IDs, niveles y URLs válidos.

> dev-visualizer@1.1.0 build
> node --max-old-space-size=4096 node_modules/next/dist/bin/next build
▲ Next.js 16.4.2 (Turbopack)
✓ Generating static pages using 1 worker (394/394) in 12.5s
[OK: 394 páginas HTML estáticas generadas]

> dev-visualizer@1.1.0 check:links
> node scripts/validate-static-links.mjs
394 páginas HTML verificadas; 0 enlaces internos rotos.

> dev-visualizer@1.1.0 check:a11y
> node scripts/validate-a11y-standards.mjs
[a11y-audit] OK: 394 páginas HTML auditadas.
[a11y-audit] 393 imágenes con atributo alt y 9797 botones accesibles verificados.
```
