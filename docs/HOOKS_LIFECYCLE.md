# Ciclo de Vida y Sincronización Reactiva de Custom Hooks

Este documento define el estándar de implementación, suscripción externa y gestión de ciclo de vida para los React Hooks personalizados en `Dev-Visualizer`.

---

## 1. Patrón Canónico con `useSyncExternalStore`

En React 19 y Next.js App Router (SSG), los hooks que consumen estado externo o dependen del entorno del navegador (`window`, `localStorage`, `SpeechSynthesis`, `performance`) deben evitar mutaciones en `useEffect` que provoquen renders en cascada o discrepancias de hidratación (*hydration mismatches*).

Se establece el uso mandatario de `useSyncExternalStore` para:
- Suscribirse a singletons del navegador sin carreras reactivas.
- Garantizar instantáneas (*snapshots*) inmutables consistentes entre el servidor y el cliente.
- Evitar parpadeos o desincronización en renders concurrentes.

---

## 2. Inventario de Hooks y Comportamiento

### `useIsClient`
- **Ubicación:** `src/hooks/useIsClient.ts`
- **Propósito:** Detección precisa de montaje en cliente.
- **Snapshot Servidor:** `false`
- **Snapshot Cliente:** `true`
- **Garantía:** Cero advertencias de hidratación en componentes dinámicos con renderizado condicional.

### `useAudioNarrator`
- **Ubicación:** `src/hooks/useAudioNarrator.ts`
- **Propósito:** Puente reactivo hacia el singleton `audioNarrator` (`SpeechSynthesis`).
- **Snapshot Servidor:** `DEFAULT_SERVER_SNAPSHOT` (estado inactivo, velocidad normal, pista nula).
- **Acciones Provistas:** `speak`, `pause`, `resume`, `stop`, `toggle`, `seekChunk`, `setSpeed`, `cycleSpeed`, `setVoice`.

### `useReadingProgress`
- **Ubicación:** `src/hooks/useReadingProgress.ts`
- **Propósito:** Cálculo del porcentaje de lectura basado en scroll vertical para rutas extensas de guías y algoritmos.
- **Estrategia:** Event listener optimizado con limpieza de suscripción en desmontaje.

---

## 3. Reglas de Contrato para Nuevos Hooks

1. **Inmutabilidad de Snapshots:** Las funciones `getSnapshot` deben retornar la misma referencia de objeto si el estado subyacente no ha variado.
2. **Limpieza Rigurosa:** Toda suscripción a timers, observers (`ResizeObserver`, `IntersectionObserver`) o eventos de ventana debe devolver su función unbind para evitar fugas de memoria.
3. **Aislamiento en SSR:** Ningún hook debe invocar APIs de `window` o `document` en el cuerpo del render antes de confirmar el entorno de cliente.
