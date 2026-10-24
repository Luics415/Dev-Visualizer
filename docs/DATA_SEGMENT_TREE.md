# Árbol de Segmentos (Segment Tree): Consultas de Rango y Actualización Puntual

Este documento formaliza la estructura de árbol binario para consultas asociativas en rangos (Range Sum, Range Min) en `Dev-Visualizer`.

---

## 1. Topología del Árbol de Segmentos

Para un arreglo de tamaño $n$, el Segment Tree se representa en un vector de tamaño $4n$:
- Cada hoja representa un elemento unitario $A[i]$.
- Cada nodo interno almacena la operación agregada de sus dos hijos (e.g. suma, mínimo, máximo, gcd).

---

## 2. Complejidad de Operaciones

| Operación | Complejidad Temporal | Complejidad Espacial |
|---|---|---|
| **Construcción (`Build`)** | $\mathcal{O}(n)$ | $\mathcal{O}(n)$ (representado en arreglo de tamaño $\le 4n$) |
| **Consulta de Rango (`Query`)** | $\mathcal{O}(\log n)$ | $\mathcal{O}(\log n)$ en la pila de llamadas |
| **Actualización Puntual (`Update`)** | $\mathcal{O}(\log n)$ | $\mathcal{O}(\log n)$ |
| **Propagación Perezosa (*Lazy*)** | $\mathcal{O}(\log n)$ para rangos | $\mathcal{O}(n)$ arreglo auxiliar de pendientes |
