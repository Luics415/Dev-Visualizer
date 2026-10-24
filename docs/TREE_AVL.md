# Árbol AVL: Invariante de Altura y Rotaciones Dobles

Este documento formaliza el factor de equilibrio (*balance factor*) y las cuatro transformaciones de rebalanceo en árboles AVL en `Dev-Visualizer`.

---

## 1. Factor de Equilibrio (Balance Factor)

Para cada nodo $v$ en un árbol AVL, su factor de equilibrio $BF(v)$ se define como:
$$BF(v) = \text{height}(\text{left}(v)) - \text{height}(\text{right}(v))$$

### Invariante AVL
En todo momento, para todo nodo $v \in T$:
$$BF(v) \in \{-1, 0, 1\}$$

Si tras una inserción o eliminación $|BF(v)| \ge 2$, se activa un rebalanceo inmediato mediante rotaciones en tiempo $\mathcal{O}(1)$.

---

## 2. Los Cuatro Casos de Rotación

1. **Izquierda-Izquierda (LL):** Resuelto con una rotación simple a la derecha.
2. **Derecha-Derecha (RR):** Resuelto con una rotación simple a la izquierda.
3. **Izquierda-Derecha (LR):** Resuelto con rotación izquierda en el hijo izquierdo seguida de rotación derecha en el padre.
4. **Derecha-Izquierda (RL):** Resuelto con rotación derecha en el hijo derecho seguida de rotación izquierda en el padre.
