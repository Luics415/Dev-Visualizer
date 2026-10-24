# Búsqueda A* ($A^\star$): Heurísticas Admisibles y Consistencia

Este documento especifica los fundamentos matemáticos de la función de evaluación $f(n)$, heurísticas euclidianas y de Manhattan en `Dev-Visualizer`.

---

## 1. Función de Evaluación Heurística

$A^\star$ expande nodos según el costo total estimado más bajo:
$$f(n) = g(n) + h(n)$$
donde:
- $g(n)$: Costo exacto acumulado desde el nodo inicio hasta $n$.
- $h(n)$: Estimación heurística del costo desde $n$ hasta el objetivo.

### Condiciones de Optimalidad
1. **Admisibilidad:** $h(n) \le h^\star(n)$ para todo nodo $n$, garantizando que nunca sobreestima el costo real.
2. **Consistencia (Monotonía):** Para toda arista $(n, n')$ con costo $c(n, n')$, $h(n) \le c(n, n') + h(n')$. Garantiza que ningún nodo deba re-evaluarse una vez cerrado.

---

## 2. Métricas de Distancia en Rejillas y Grafos

- **Distancia Manhattan:** $h(n) = |x_n - x_{goal}| + |y_n - y_{goal}|$ para movimiento en 4 direcciones ortogonales.
- **Distancia Euclidiana:** $h(n) = \sqrt{(x_n - x_{goal})^2 + (y_n - y_{goal})^2}$ para movimiento continuo o en cualquier ángulo.
