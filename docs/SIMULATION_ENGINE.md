# Arquitectura del Motor de Simulación y Modelos de Complejidad

Este documento describe la arquitectura de simulación paso a paso, generación de fotogramas (*timeline frames*) y evaluación de complejidad Big-O utilizada en los visualizadores interactivos de `Dev-Visualizer`.

---

## 1. Pipeline de Simulación Desacoplado

Para mantener una tasa de cuadros estable de 60 FPS en el hilo principal (*main thread*), las simulaciones algorítmicas se desacoplan en tres fases diferenciadas:

1. **Fase de Cómputo (Pre-cálculo):**
   - El algoritmo recibe el conjunto de datos de entrada (e.g. array desordenado, grafo, árbol binario).
   - Ejecuta la lógica sin efectos secundarios en el DOM y genera una lista inmutable de instantáneas (`SimulationStep[]`).
   - Cada paso encapsula el estado de punteros, índices activos, intercambios, comparaciones y nodos visitados.

2. **Fase de Secuenciación Temporal (Playback Engine):**
   - Un controlador de tiempo gestiona el índice del paso actual (`currentStepIndex`), velocidad de reproducción (`stepDelayMs`) y modo de ejecución (`Play`, `Pause`, `StepForward`, `StepBackward`, `Reset`).
   - Soporta navegación bidireccional determinista sin necesidad de recalcular los pasos anteriores.

3. **Fase de Renderizado Visual:**
   - La vista (`Scene` / `Visualizer`) mapea el estado del fotograma actual a elementos visuales accesibles (SVG, Canvas o HTML estructurado con atributos ARIA).

---

## 2. Modelos de Complejidad Temporal y Espacial

Cada simulación expone metadatos cuantitativos para fines pedagógicos y analíticos:

| Notación Big-O | Caso Típico | Comportamiento en Simulación |
|---|---|---|
| $\mathcal{O}(1)$ | Acceso a arreglos, operaciones hash | Paso único con retroalimentación instantánea. |
| $\mathcal{O}(\log n)$ | Búsqueda binaria, árboles balanceados | Partición logarítmica visible en el árbol o vector. |
| $\mathcal{O}(n)$ | Recorrido lineal, conteos | Progresión secuencial constante paso a paso. |
| $\mathcal{O}(n \log n)$ | Merge Sort, Quick Sort | Fases recursivas de división y fusión intercaladas. |
| $\mathcal{O}(n^2)$ | Bubble Sort, Selection Sort | Bucles anidados con contador acumulado de comparaciones e intercambios. |

---

## 3. Garantías de Rendimiento y Memoria

- **Límites de Entrada:** Para evitar saturar la memoria del navegador, las simulaciones imponen un umbral máximo de elementos en entornos cliente sin Web Workers ($n \le 1,000$).
- **Inmutabilidad:** Cada `SimulationStep` utiliza estructuras de datos inmutables congeladas (`Object.freeze`) para evitar mutaciones accidentales durante el rebobinado de pasos.
