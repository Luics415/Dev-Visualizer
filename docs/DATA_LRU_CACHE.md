# Caché LRU (Least Recently Used): Arquitectura Híbrida Hash Map + Lista Doblemente Enlazada

Este documento especifica la combinación de HashMap y lista doblemente enlazada para garantizar tiempo constante $\mathcal{O}(1)$ en operaciones de caché en `Dev-Visualizer`.

---

## 1. Topología de la Estructura Híbrida

- **HashMap:** Mapea `key -> NodePtr` para acceso directo en tiempo $\mathcal{O}(1)$.
- **Lista Doblemente Enlazada:** Mantiene el orden de recencia con nodos centinela `head` (más reciente) y `tail` (menos reciente).

---

## 2. Invariantes de Desalojo

1. **Lectura (`get`):** Si la clave existe, se extrae el nodo de su posición actual y se reinserta inmediatamente detrás de `head`. Retorna el valor en $\mathcal{O}(1)$.
2. **Escritura (`put`):** Si excede la capacidad máxima, se extrae el nodo previo a `tail` (el menos recientemente usado), se elimina del HashMap y se descarta en $\mathcal{O}(1)$.
