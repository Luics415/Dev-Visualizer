# Fibonacci: Tabulación Bottom-Up vs Memoización Top-Down

Este documento analiza el espectro de optimización desde recursión ingenua hasta exponenciación matricial rápida en `Dev-Visualizer`.

---

## 1. Espectro de Enfoques Computacionales

| Paradigma | Complejidad Temporal | Complejidad Espacial | Desbordamiento de Pila |
|---|---|---|---|
| **Recursión Ingenua** | $\mathcal{O}(2^n)$ | $\mathcal{O}(n)$ | Alto riesgo de Call Stack Overflow para $n > 40$. |
| **Memoización Top-Down** | $\mathcal{O}(n)$ | $\mathcal{O}(n)$ | Seguro hasta el límite de llamadas del motor V8 ($n \approx 10,000$). |
| **Tabulación Bottom-Up (Iterativa)** | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | Cero riesgo de desbordamiento (solo dos variables temporales). |
| **Exponenciación Matricial $\begin{pmatrix}1 & 1 \\ 1 & 0\end{pmatrix}^n$** | $\mathcal{O}(\log n)$ | $\mathcal{O}(1)$ | Óptimo para valores masivos de $n$ con aritmética BigInt. |
