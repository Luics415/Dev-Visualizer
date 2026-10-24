# Subsecuencia Común Más Larga (LCS): Reconstrucción por Backtracking

Este documento detalla la computación de prefijos comunes y retroceso en la matriz de estados de LCS en `Dev-Visualizer`.

---

## 1. Recurrencia de Subestructura Óptima

Dadas dos secuencias $X = \langle x_1, \dots, x_m \rangle$ y $Y = \langle y_1, \dots, y_n \rangle$:
$$LCS[i][j] = \begin{cases} 0 & \text{si } i = 0 \text{ o } j = 0 \\ LCS[i-1][j-1] + 1 & \text{si } x_i = y_j \\ \max(LCS[i-1][j], LCS[i][j-1]) & \text{si } x_i \ne y_j \end{cases}$$

---

## 2. Reconstrucción de la Secuencia Óptima

- Partiendo de $LCS[m][n]$, se retrocede siguiendo las flechas de decisión:
  - Diagonal superior izquierda si $x_i = y_j$ (el carácter pertenece al LCS).
  - Hacia arriba si $LCS[i-1][j] \ge LCS[i][j-1]$.
  - Hacia la izquierda en caso contrario.
- **Complejidad de Reconstrucción:** $\mathcal{O}(m + n)$ pasos directos sin bifurcaciones adicionales.
