# Radix Sort: Ordenamiento No Comparativo por Dígitos

Este documento describe la teoría no comparativa de Radix Sort, estabilidad mediante Counting Sort y superación de la barrera $\Omega(n \log n)$ en `Dev-Visualizer`.

---

## 1. Superación del Límite Inferior de Comparación

Los algoritmos de ordenamiento basados en comparaciones tienen un límite inferior teórico de $\Omega(n \log n)$ en el modelo de árbol de decisiones.

Radix Sort opera analizando la representación posicional de los números (base $b$, cantidad de dígitos $d$):
- **Estrategia LSD (Least Significant Digit):** Procesa desde el dígito menos significativo hacia el más significativo aplicando un subrutina de ordenamiento estable (generalmente Counting Sort).
- **Estrategia MSD (Most Significant Digit):** Divide recursivamente por los dígitos superiores (útil para cadenas lexicográficas).

---

## 2. Complejidad Temporal y Espacial

- **Complejidad Temporal:** $\mathcal{O}(d \cdot (n + b))$. Para claves acotadas donde $d$ y $b$ son constantes, la ejecución es puramente lineal $\mathcal{O}(n)$.
- **Complejidad Espacial:** $\mathcal{O}(n + b)$ para los contenedores (*buckets*) de conteo y acumulación.
