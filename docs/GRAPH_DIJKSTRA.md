# Algoritmo de Dijkstra: Caminos Mínimos y Cola de Prioridad

Este documento define la base matemática, relajación de aristas y estructura de min-heap para el algoritmo de Dijkstra en `Dev-Visualizer`.

---

## 1. Principio de Relajación y Subestructura Óptima

Dijkstra resuelve el problema del camino más corto desde un origen único en grafos con pesos no negativos ($w(u, v) \ge 0$).

### Condición de Relajación
Para cada arista $(u, v) \in E$, si:
$$d[u] + w(u, v) < d[v]$$
entonces se actualiza la distancia estimada $d[v] \leftarrow d[u] + w(u, v)$ y el predecesor $\pi[v] \leftarrow u$.

---

## 2. Complejidad según la Implementación de Cola

| Implementación de Cola | Extracción de Mínimo | Disminución de Clave | Complejidad Total |
|---|---|---|---|
| Arreglo lineal no ordenado | $\mathcal{O}(\|V\|)$ | $\mathcal{O}(1)$ | $\mathcal{O}(\|V\|^2 + \|E\|)$ |
| **Binary Heap (Min-Heap)** | $\mathcal{O}(\log \|V\|)$ | $\mathcal{O}(\log \|V\|)$ | $\mathcal{O}((\|V\| + \|E\|) \log \|V\|)$ |
| Fibonacci Heap | $\mathcal{O}(\log \|V\|)$ amortizado | $\mathcal{O}(1)$ amortizado | $\mathcal{O}(\|E\| + \|V\| \log \|V\|)$ |

`Dev-Visualizer` implementa la variante estándar con Binary Min-Heap por su predictibilidad y bajo consumo de memoria.
