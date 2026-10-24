# Tablas Hash: Resolución de Colisiones (Encadenamiento vs Direccionamiento Abierto)

Este documento compara las dos estrategias fundamentales de manejo de colisiones, factor de carga y dispersión en `Dev-Visualizer`.

---

## 1. Métodos de Resolución de Colisiones

| Característica | Separated Chaining (Encadenamiento) | Open Addressing (Direccionamiento Abierto) |
|---|---|---|
| **Estructura** | Arreglo de listas enlazadas o BSTs balanceados. | Todas las entradas residen en el arreglo continuo. |
| **Factor de Carga ($\alpha$)** | Puede ser $\alpha > 1$. | Obligatoriamente $\alpha < 1$ (típicamente rehash al superar 0.7). |
| **Sondeo (*Probing*)** | No aplica. | Lineal ($i$), Cuadrático ($i^2$) o Doble Hashing ($h_2(k)$). |
| **Localidad de Caché** | Pobre (saltos de punteros en memoria). | Excelente (acceso secuencial o en bloques de caché). |

---

## 2. Complejidad Promedio vs Peor Caso

- **Búsqueda / Inserción Promedio:** $\mathcal{O}(1)$ bajo la hipótesis de dispersión uniforme simple (*Simple Uniform Hashing*).
- **Peor Caso Patológico:** $\mathcal{O}(n)$ si todas las claves colisionan en un único bucket (mitigado usando árboles rojo-negro como en Java 8+).
