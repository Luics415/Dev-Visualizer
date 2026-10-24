# Árbol Binario de Búsqueda (BST): Propiedades y Rotaciones

Este documento define la propiedad de ordenamiento simétrico, recorridos in-order y rotaciones básicas de árboles binarios en `Dev-Visualizer`.

---

## 1. Propiedad Fundamental de BST

Para cada nodo $x$ en el árbol:
- Si $y$ es un nodo en el subárbol izquierdo de $x$, entonces $\text{key}[y] \le \text{key}[x]$.
- Si $y$ es un nodo en el subárbol derecho de $x$, entonces $\text{key}[y] \ge \text{key}[x]$.

### Consecuencia Directa
Un recorrido **In-Order** (Izquierda $\to$ Raíz $\to$ Derecha) sobre un BST visita las claves en orden estrictamente no decreciente en tiempo $\mathcal{O}(n)$.

---

## 2. Rotaciones Simétricas

Para reestructurar subárboles sin violar la propiedad de BST:

```text
       y                              x
      / \     Rotación Derecha       / \
     x   C   ──────────────────►    A   y
    / \      ◄──────────────────       / \
   A   B      Rotación Izquierda      B   C
```

Ambas rotaciones se ejecutan en tiempo constante $\mathcal{O}(1)$ modificando un número fijo de punteros.
