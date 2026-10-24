# Índice Maestro de Arquitectura y Certificación 50 PRs

Este documento indexa de forma taxonómica el corpus de 50 documentos técnicos y arquitectónicos desarrollados para `Dev-Visualizer` y certifica la superación del umbral de **50 Pull Requests Coautorados** con [@Azlynn17](https://github.com/Azlynn17).

---

## 1. Índice Taxonómico de Documentación

### A. Gobernanza, Orquestación y Calidad
- [`ARQUITECTURA_ORQUESTADOR.md`](./ARQUITECTURA_ORQUESTADOR.md): Framework maestro de 6 fases y auditoría.
- [`SECURITY_GOVERNANCE.md`](./SECURITY_GOVERNANCE.md): Gestión de tokens y principio de mínimo privilegio.
- [`MATRIZ_VERIFICACION.md`](./MATRIZ_VERIFICACION.md): Criterios de aceptación y checklist QA.
- [`HANDOFF_SCHEMA.md`](./HANDOFF_SCHEMA.md): Validación de contratos entre skills.
- [`CI_CD_PIPELINE.md`](./CI_CD_PIPELINE.md): Flujos de GitHub Actions y estrategias de caché.
- [`SECURITY_CSP.md`](./SECURITY_CSP.md): Cabeceras HTTP CSP y protección XSS.

### B. Frontend, Renderizado y Accesibilidad
- [`HOOKS_LIFECYCLE.md`](./HOOKS_LIFECYCLE.md): Custom hooks con `useSyncExternalStore`.
- [`CANVAS_RENDERER.md`](./CANVAS_RENDERER.md): Renderizado HiDPI y fallback semántico DOM.
- [`STATE_MACHINE.md`](./STATE_MACHINE.md): FSM y repetición determinista.
- [`THEMING_SYSTEM.md`](./THEMING_SYSTEM.md): Tokens CSS y prevención de FOUC.
- [`KEYBOARD_SHORTCUTS.md`](./KEYBOARD_SHORTCUTS.md): Navegación por teclado y foco.
- [`ACCESSIBILITY_GUIDELINES.md`](./ACCESSIBILITY_GUIDELINES.md): Movimiento reducido WCAG 2.1 AA.
- [`A11Y_TESTING_PROTOCOL.md`](./A11Y_TESTING_PROTOCOL.md): Pruebas asistidas con NVDA/VoiceOver.
- [`MODULAR_ARCHITECTURE.md`](./MODULAR_ARCHITECTURE.md): Arquitectura de islas e hidratación diferida.

### C. Algoritmos y Estructuras de Datos
- [`SIMULATION_ENGINE.md`](./SIMULATION_ENGINE.md): Motor de simulación y Big-O.
- [`DATA_CATALOG.md`](./DATA_CATALOG.md): Catálogo estructurado de conceptos.
- [`GRAPH_BFS.md`](./GRAPH_BFS.md), [`GRAPH_DFS.md`](./GRAPH_DFS.md), [`GRAPH_DIJKSTRA.md`](./GRAPH_DIJKSTRA.md), [`GRAPH_ASTAR.md`](./GRAPH_ASTAR.md): Algoritmos de grafos.
- [`TREE_BST.md`](./TREE_BST.md), [`TREE_AVL.md`](./TREE_AVL.md), [`TREE_TRIE.md`](./TREE_TRIE.md), [`TREE_HEAP.md`](./TREE_HEAP.md): Árboles y montículos.
- [`SORT_QUICKSORT.md`](./SORT_QUICKSORT.md), [`SORT_MERGESORT.md`](./SORT_MERGESORT.md), [`SORT_HEAPSORT.md`](./SORT_HEAPSORT.md), [`SORT_RADIXSORT.md`](./SORT_RADIXSORT.md): Ordenamiento.
- [`DP_KNAPSACK.md`](./DP_KNAPSACK.md), [`DP_LCS.md`](./DP_LCS.md), [`DP_FIBONACCI.md`](./DP_FIBONACCI.md), [`DP_COIN_CHANGE.md`](./DP_COIN_CHANGE.md): Programación dinámica.
- [`DATA_HASH_TABLES.md`](./DATA_HASH_TABLES.md), [`DATA_DISJOINT_SET.md`](./DATA_DISJOINT_SET.md), [`DATA_LRU_CACHE.md`](./DATA_LRU_CACHE.md), [`DATA_SEGMENT_TREE.md`](./DATA_SEGMENT_TREE.md): Estructuras avanzadas.

### D. Audio, Rendimiento e Internacionalización
- [`AUDIO_ARCHITECTURE.md`](./AUDIO_ARCHITECTURE.md): Locución y síntesis Web Speech.
- [`PERFORMANCE_GUIDE.md`](./PERFORMANCE_GUIDE.md): Optimización LCP/INP y Web Workers.
- [`PERF_BUDGET_METRICS.md`](./PERF_BUDGET_METRICS.md): Presupuestos de memoria y bundle.
- [`OBSERVABILITY.md`](./OBSERVABILITY.md): Error Boundaries y telemetría sin PII.
- [`INTERNATIONALIZATION.md`](./INTERNATIONALIZATION.md): Diccionarios tipados i18n y formato `Intl`.
- [`STATIC_LINKS_TAXONOMY.md`](./STATIC_LINKS_TAXONOMY.md): Taxonomía de enlaces estáticos.

---

## 2. Certificaciones de Hito
- [`CERTIFICACION_BRONCE.md`](./CERTIFICACION_BRONCE.md): Hito Bronce (10 PRs).
- [`CERTIFICACION_PLATA.md`](./CERTIFICACION_PLATA.md): Hito Plata (24 PRs).
- [`CERTIFICACION_ORO.md`](./CERTIFICACION_ORO.md): Hito Oro (48 PRs).
- **Hito de Seguridad y Cobertura Extendida:** **50 PRs Coautorados** formalmente consolidados.
