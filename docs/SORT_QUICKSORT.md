# Quick Sort: Esquemas de Partición (Lomuto vs Hoare)

Este documento compara los dos esquemas canónicos de particionamiento, selección de pivote y mitigación de peor caso en `Dev-Visualizer`.

---

## 1. Comparación de Esquemas de Partición

| Característica | Partición de Lomuto | Partición de Hoare |
|---|---|---|
| **Punteros** | Un puntero lento $i$ y un puntero explorador $j$. | Dos punteros que convergen desde los extremos ($i$ y $j$). |
| **Intercambios Promedio** | Aproximadamente $3\times$ más intercambios. | Menor cantidad de intercambios en arreglos aleatorios. |
| **Elementos Duplicados** | Se degrada a $\mathcal{O}(n^2)$ con valores idénticos. | Divide eficientemente en partes iguales ante duplicados. |
| **Simplicidad Didáctica** | Alta; ideal para visualización inicial. | Mayor complejidad de índices de corte. |

---

## 2. Mitigación del Peor Caso ($\mathcal{O}(n^2)$)

Para evitar el caso patológico con arreglos ya ordenados:
1. **Mediana de Tres:** Seleccionar como pivote la mediana entre $A[\text{low}]$, $A[\text{mid}]$ y $A[\text{high}]$.
2. **Pivote Aleatorio:** Intercambiar $A[\text{high}]$ con un elemento en un índice pseudoaleatorio antes de particionar.
3. **IntroSort Fallback:** Conmutar a Heap Sort si la profundidad de recursión excede $2 \lfloor \log_2 n \rfloor$.
