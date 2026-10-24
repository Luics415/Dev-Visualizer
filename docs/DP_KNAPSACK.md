# Problema de la Mochila 0/1: Matriz de Estado y Espacio Optimizado

Este documento describe la ecuación de Bellman, tabla bidimensional y compresión espacial para la Mochila 0/1 (*0/1 Knapsack*) en `Dev-Visualizer`.

---

## 1. Relación de Recurrencia de Bellman

Sean $n$ elementos con pesos $w_i$ y valores $v_i$, y una capacidad máxima $W$:
$$dp[i][w] = \begin{cases} dp[i-1][w] & \text{si } w_i > w \\ \max(dp[i-1][w], dp[i-1][w - w_i] + v_i) & \text{si } w_i \le w \end{cases}$$

---

## 2. Optimización de Memoria: Arreglo Unidimensional

Dado que cada fila $i$ solo depende de la fila $i-1$, el espacio puede reducirse de $\mathcal{O}(n \cdot W)$ a **$\mathcal{O}(W)$** recorriendo la capacidad en sentido inverso ($w = W \dots w_i$):
- **Recorrido Inverso Obligatorio:** Evita que un mismo elemento se compute múltiples veces en la misma iteración (garantía de propiedad 0/1).
