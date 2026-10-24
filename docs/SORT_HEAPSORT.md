# Heap Sort: Selección In-Place y Hundimiento de Nodos

Este documento detalla el algoritmo Heap Sort, transformación in-place y garantías de complejidad espacial $\mathcal{O}(1)$ en `Dev-Visualizer`.

---

## 1. Fases del Algoritmo

1. **Construcción del Max-Heap (`Build-Max-Heap`):**
   - Transforma el arreglo desordenado en un Max-Heap en tiempo lineal $\mathcal{O}(n)$.
2. **Extracción y Selección Repetitiva:**
   - Intercambia la raíz $A[0]$ (el elemento mayor) con el último elemento no ordenado $A[i]$.
   - Reduce el tamaño virtual del heap en 1.
   - Aplica `Max-Heapify` en la nueva raíz en tiempo $\mathcal{O}(\log n)$.
   - Repite hasta vaciar el heap.

---

## 2. Características Comparativas

- **Complejidad Temporal:** $\mathcal{O}(n \log n)$ en todos los casos.
- **Complejidad Espacial:** $\mathcal{O}(1)$ memoria auxiliar estricta (completamente in-place).
- **Estabilidad:** No estable (los intercambios a larga distancia pueden alterar el orden relativo de claves idénticas).
