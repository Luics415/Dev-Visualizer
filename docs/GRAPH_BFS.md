# Búsqueda en Anchura (BFS): Invariantes y Estado de Cola FIFO

Este documento formaliza los invariantes de recorrido, estructuras de datos y complejidad de la Búsqueda en Anchura (*Breadth-First Search*) en `Dev-Visualizer`.

---

## 1. Definición Formal e Invariantes

Dado un grafo $G = (V, E)$ y un nodo origen $s \in V$, BFS explora los vértices en orden no decreciente de su distancia en aristas $d(s, v)$.

### Invariantes del Algoritmo
1. **Propiedad de Nivel:** Para todo nodo $v$ descubierto en la iteración $k$, la distancia más corta desde $s$ satisface $d(s, v) = k$.
2. **Monotonía de la Cola:** Los elementos presentes en la cola FIFO pertenecen a lo sumo a dos niveles consecutivos ($k$ y $k+1$).
3. **Completitud y Terminación:** Todo nodo alcanzable desde $s$ se visita exactamente una vez en $\mathcal{O}(|V| + |E|)$ operaciones.

---

## 2. Complejidad Temporal y Espacial

| Métrica | Notación Big-O | Justificación Teórica |
|---|---|---|
| **Tiempo (Lista de Adyacencia)** | $\mathcal{O}(\|V\| + \|E\|)$ | Cada vértice se encola una vez y cada arista se examina una vez (dirigido) o dos (no dirigido). |
| **Tiempo (Matriz de Adyacencia)** | $\mathcal{O}(\|V\|^2)$ | Se examinan todas las celdas de la fila de cada vértice. |
| **Espacio Auxiliar** | $\mathcal{O}(\|V\|)$ | Almacenamiento de la cola FIFO y el conjunto de visitados (`visitedSet`). |

---

## 3. Integración en el Visualizador de Escenas

- **Cola Visible:** El estado de la cola FIFO se renderiza de forma sincronizada con el grafo.
- **Gradiente de Nivel:** Los nodos visitados cambian de color según su profundidad respecto a la raíz para reforzar el concepto de capas de distancia.
