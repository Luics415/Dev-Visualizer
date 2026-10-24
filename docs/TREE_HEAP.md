# Montículo Binario (Binary Heap): Propiedad de Heap e Indexación en Arreglos

Este documento formaliza la representación en memoria contigua, operaciones de flotado (*sift-up*) y hundimiento (*sift-down*) para Max-Heaps y Min-Heaps en `Dev-Visualizer`.

---

## 1. Indexación Implícita en Arreglos (Base 0)

Para un nodo ubicado en el índice $i$:
- **Padre:** $\lfloor (i - 1) / 2 \rfloor$
- **Hijo Izquierdo:** $2i + 1$
- **Hijo Derecho:** $2i + 2$

Esta propiedad elimina la sobrecarga de punteros de memoria y optimiza el acceso a la caché L1/L2 del procesador.

---

## 2. Invariante de Heap

Para un **Max-Heap**, para todo nodo $i > 0$:
$$A[\text{parent}(i)] \ge A[i]$$

### Operación `Build-Heap`
Convertir un arreglo no ordenado de $n$ elementos en un Max-Heap válido requiere únicamente tiempo lineal $\mathcal{O}(n)$, gracias a la sumatoria de alturas:
$$\sum_{h=0}^{\lfloor \log n \rfloor} \frac{n}{2^{h+1}} \mathcal{O}(h) = \mathcal{O}(n)$$
