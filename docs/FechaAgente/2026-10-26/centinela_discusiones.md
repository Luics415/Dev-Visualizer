
## [2026-10-26 08:25:49 UTC] Discusión #192 — Architectural Vision: Why choose Next.js static export over Web Workers for running algorithmic simulations across 73 collections?
- **Autor:** @Ancla5786
- **Idioma:** en
- **Estado:** Publicado tras ventana de 10 minutos
- **Escalamiento:** No requerido
- **Issue Asociado:** N/A
- **Notificaciones:** Nivel 1 (Mención @Luics415), Nivel 2 (Step Summary), Nivel 3 (Discord DM)

```markdown
Hello @Ancla5786! Thank you for your thoughtful architectural question regarding our decision to favor Next.js static export and main-thread time-slicing over Web Workers in Dev Visualizer.

When architecting the simulation foundation across our 73 technical collections, our design was guided by three foundational engineering principles: bundle portability, zero-copy bidirectional state synchronization, and deterministic frame stepping. As documented in [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md), our educational simulations are calibrated for pedagogical input spaces (<= 1,000 elements). Within this threshold, pure JavaScript execution of sorting algorithms, tree rebalancing, or graph traversals requires mere microseconds to compute the entire series of immutable timeline snapshots (`SimulationStep[]`).

While Web Workers are often touted as a silver bullet for offloading computation, in interactive pedagogical visualizers they introduce significant trade-offs. Transferring dozens or hundreds of state snapshots between a background worker and the main thread requires serialization and structured cloning over `postMessage`, which incurs noticeable memory churn and garbage collection pauses on mobile devices. More critically, bidirectional user scrubbing—such as clicking `StepBackward` or dragging the timeline scrubber—requires instant, zero-latency access to pre-computed state. By executing the calculation phase synchronously in memory during component mount and freezing the array with `Object.freeze`, we achieve instantaneous random-access scrubbing and effortless integration with React 19 and Motion (Framer Motion 14) without asynchronous messaging overhead.

Furthermore, committing to Next.js static site generation (`output: "export"`) was a deliberate choice to ensure total hosting portability and zero backend attack surface. The entire platform compiles into over 350 pre-rendered HTML/JS assets served globally via GitHub Pages with no servers, no database latency, and no operational hosting costs. For future extreme workloads (such as million-element spatial simulations or real-time WebAssembly ray-tracers), Web Workers and WebGPU pipelines remain on our long-term roadmap as documented in [`docs/ROADMAP.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/ROADMAP.md), but for deterministic algorithmic visualization, our decoupled in-memory snapshot architecture offers the optimal balance of 60fps responsiveness, accessibility, and simplicity.

*(CC: @Luics415 para seguimiento)*
```
---
