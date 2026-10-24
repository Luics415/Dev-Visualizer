# Presupuesto de Rendimiento y Límites de Memoria

Este documento formaliza los umbrales máximos de peso de paquete (*bundle size*), límites de consumo de memoria heap y SLAs de renderizado en `Dev-Visualizer`.

---

## 1. Presupuesto de Recursos de Red y JavaScript

| Tipo de Recurso | Límite Máximo (Gzip/Brotli) | Justificación |
|---|---|---|
| **First Load JS (Ruta Raíz)** | $< 95\text{ KB}$ | Tiempo de parseo y compilación JS menor a 100ms en dispositivos móviles 4G. |
| **Página de Escena Algorítmica** | $< 120\text{ KB}$ | Incluye motor de renderizado y metadatos didácticos pre-cargados. |
| **Fuentes Web (WOFF2)** | $< 45\text{ KB}$ | Subconjuntos de glifos latinos pre-cargados con `font-display: swap`. |
| **CSS Crítico Inline** | $< 15\text{ KB}$ | Renderizado inmediato del primer pantallazo sin bloqueos de red. |

---

## 2. Límites de Consumo de Memoria Heap

- **Límite Heap por Simulación:** El buffer inmutable de pasos de simulación no debe exceder los $25\text{ MB}$ en memoria de cliente.
- **Limpieza de Recursos:** En el evento de desmontaje de cada vista, los Canvas Contexts, audio buffers y Web Workers asociados deben liberarse explícitamente (`worker.terminate()`, `audioContext.close()`).
