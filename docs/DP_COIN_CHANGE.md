# Problema del Cambio de Monedas (Coin Change): Mínimo Número de Monedas

Este documento formaliza la recurrencia unbounded knapsack para encontrar el menor número de monedas para un importe dado en `Dev-Visualizer`.

---

## 1. Recurrencia Dinámica Unbounded

Dado un conjunto de denominaciones $C = \{c_1, c_2, \dots, c_k\}$ y un monto objetivo $A$:
$$dp[a] = \begin{cases} 0 & \text{si } a = 0 \\ \min_{c \in C, c \le a} (dp[a - c] + 1) & \text{si } a > 0 \end{cases}$$
con valor base $dp[a] = \infty$ si ningún subconjunto puede formar el importe exacto.

---

## 2. Complejidad Temporal y Espacial

- **Complejidad Temporal:** $\mathcal{O}(k \cdot A)$, donde $k$ es el número de monedas y $A$ es el monto objetivo.
- **Complejidad Espacial:** $\mathcal{O}(A)$ mediante un vector unidimensional de tamaño $A+1$.
