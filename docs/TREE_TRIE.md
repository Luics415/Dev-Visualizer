# Árbol de Prefijos (Trie): Estructura y Búsqueda de Cadenas

Este documento describe la arquitectura de almacenamiento de cadenas, autocompletado y complejidad de árboles Trie en `Dev-Visualizer`.

---

## 1. Topología del Nodo Trie

Cada nodo en un Trie representa un prefijo compartido y se estructura comúnmente como:

```typescript
interface TrieNode {
  children: Map<string, TrieNode>; // o arreglo de tamaño alfabeto |Σ|
  isEndOfWord: boolean;
  frequency: number;
}
```

---

## 2. Complejidad de Operaciones

Dado un patrón o palabra de longitud $m$ y un alfabeto de tamaño $|\Sigma|$:

| Operación | Complejidad Temporal | Complejidad Espacial |
|---|---|---|
| **Inserción** | $\mathcal{O}(m)$ | $\mathcal{O}(m \cdot \|\Sigma\|)$ (peor caso nodo nuevo por carácter) |
| **Búsqueda Exacta** | $\mathcal{O}(m)$ | $\mathcal{O}(1)$ |
| **Búsqueda por Prefijo (`startsWith`)** | $\mathcal{O}(m)$ | $\mathcal{O}(1)$ |
| **Autocompletado (Top-$k$)** | $\mathcal{O}(m + k)$ | $\mathcal{O}(k)$ |
