# Búsqueda en Profundidad (DFS): Retroceso Recursivo y Detección de Ciclos

Este documento describe la arquitectura, pila de llamadas y propiedades topológicas de la Búsqueda en Profundidad (*Depth-First Search*) en `Dev-Visualizer`.

---

## 1. Clasificación de Aristas y Detección de Ciclos

Durante la ejecución de DFS en un grafo dirigido $G = (V, E)$, cada vértice transita por tres estados:
- **`BLANCO` (No descubierto):** El vértice aún no ha sido alcanzado.
- **`GRIS` (En proceso / En la pila):** El vértice ha sido descubierto pero su vecindario sigue bajo exploración.
- **`NEGRO` (Finalizado):** Todos los descendientes del vértice han sido explorados.

### Teorema de Ciclos
Un grafo dirigido contiene un ciclo si y solo si DFS descubre una **arista hacia atrás** (*back-edge*), es decir, una arista $(u, v)$ donde $v$ se encuentra en estado `GRIS`.

---

## 2. Complejidad Temporal y Espacial

| Métrica | Notación Big-O | Justificación |
|---|---|---|
| **Tiempo (Lista de Adyacencia)** | $\mathcal{O}(\|V\| + \|E\|)$ | Cada vértice y arista se visita a lo sumo dos veces (entrada y retroceso). |
| **Espacio (Pila de Recursión)** | $\mathcal{O}(\|V\|)$ | En el peor caso (grafo lineal), la profundidad de recursión alcanza $|V|$. |

---

## 3. Aplicaciones en el Catálogo

- **Ordenamiento Topológico:** Vértices ordenados en orden descendente de su tiempo de finalización.
- **Componentes Fuertemente Conexos (SCC):** Algoritmo de Tarjan o Kosaraju basado en pasadas DFS consecutivas.
