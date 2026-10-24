# Conjuntos Disjuntos (Disjoint Set Union - DSU): Unión por Rango y Compresión de Caminos

Este documento formaliza la estructura Union-Find y la función inversa de Ackermann $\alpha(n)$ en `Dev-Visualizer`.

---

## 1. Optimizaciones Críticas de DSU

1. **Compresión de Caminos (*Path Compression*):** Durante `find(x)`, cada nodo visitado se reconecta directamente a la raíz representativa del conjunto.
2. **Unión por Rango o Tamaño (*Union by Rank*):** El árbol de menor rango siempre se anexa bajo la raíz del árbol de mayor rango, evitando que la altura crezca linealmente.

---

## 2. Complejidad Casi Lineal

Al combinar ambas optimizaciones, cualquier secuencia de $m$ operaciones `find` y `union` sobre $n$ elementos se ejecuta en:
$$\mathcal{O}(m \cdot \alpha(n))$$
donde $\alpha(n)$ es la **función inversa de Ackermann**. En todos los contextos del universo computable ($n < 10^{80}$), $\alpha(n) \le 4$, lo que equivale a tiempo constante amortizado $\mathcal{O}(1)$ por operación.
