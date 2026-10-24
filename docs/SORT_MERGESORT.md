# Merge Sort: Divide y Vencerás y Modelos de Memoria Auxiliar

Este documento formaliza la recurrencia matemática de Merge Sort, estabilidad de ordenamiento y gestión de buffers auxiliares en `Dev-Visualizer`.

---

## 1. Relación de Recurrencia y Teorema Maestro

Merge Sort divide el vector en dos mitades simétricas y las fusiona en tiempo lineal:
$$T(n) = 2T(n/2) + \Theta(n)$$

Aplicando el Teorema Maestro (Caso 2 con $a=2, b=2, d=1$):
$$T(n) = \Theta(n \log n)$$
en el mejor, promedio y peor caso, garantizando rendimiento predecible y estabilidad (*stable sort*).

---

## 2. Estrategias de Memoria Auxiliar ($\mathcal{O}(n)$)

- **Asignación Local Recurrente:** Crea nuevos sub-arreglos en cada llamada recursiva (alto costo de garbage collection).
- **Buffer Único Reutilizable (Estándar Dev-Visualizer):** Asigna un único arreglo auxiliar de tamaño $n$ al inicio y alterna roles entre origen y destino para minimizar la presión sobre el recolector de basura de JavaScript.
