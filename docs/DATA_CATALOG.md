# Catálogo de Datos Algorítmicos y Esquema de Complejidad Big-O

Este documento formaliza el esquema de datos tipados, taxonomía de colecciones y catálogo unificado de complejidad computacional en `Dev-Visualizer`.

---

## 1. Esquema Canónico de Conceptos (`ConceptItem`)

Cada entrada pedagógica y algorítmica del catálogo en `src/data` implementa la interfaz estructurada `ConceptItem`:

```typescript
export interface ConceptComplexity {
  timeBest: string;     // e.g. "O(n)"
  timeAverage: string;  // e.g. "O(n log n)"
  timeWorst: string;    // e.g. "O(n^2)"
  spaceWorst: string;   // e.g. "O(1)" o "O(n)"
}

export interface ConceptItem {
  id: string;
  slug: string;
  title: string;
  category: 'sorting' | 'searching' | 'graphs' | 'trees' | 'dp' | 'foundations';
  complexity: ConceptComplexity;
  prerequisites: string[];
  interactiveSceneId?: string;
  audioTrackId?: string;
}
```

---

## 2. Taxonomía de Complejidad Comparativa

El motor de visualización categoriza visualmente las curvas asintóticas para guiar al estudiante:

| Orden Asintótico | Clasificación Visual | Código de Color UI | Ejemplos Representativos |
|---|---|---|---|
| $\mathcal{O}(1)$ | Excelente / Constante | Verde Menta | Búsqueda Hash, Acceso a Array |
| $\mathcal{O}(\log n)$ | Óptimo / Logarítmico | Verde Esmeralda | Búsqueda Binaria, Heap Extract |
| $\mathcal{O}(n)$ | Lineal / Justo | Azul Cian | Búsqueda Lineal, Conteo |
| $\mathcal{O}(n \log n)$ | Cuasilineal / Aceptable | Violeta Índigo | Merge Sort, Quick Sort (Promedio) |
| $\mathcal{O}(n^2)$ | Cuadrático / Crítico | Ámbar Naranja | Bubble Sort, Insertion Sort (Peor caso) |
| $\mathcal{O}(2^n)$ / $\mathcal{O}(n!)$ | Intratable / Exponencial | Rojo Carmín | Problema del Viajante (Fuerza Bruta) |

---

## 3. Validación Automatizada del Catálogo

El script de validación en tiempo de compilación (`catalogValidation.ts`) asegura que:
1. **Unicidad de Identificadores:** No existan slugs o IDs duplicados en el árbol de colecciones.
2. **Integridad Referencial:** Cada prerrequisito o enlace de escena referenciado apunte a una lección existente en el manifiesto.
3. **Cero Rupturas en Rutas Estáticas:** Cada concepto genere una ruta estática HTML válida verificada por `npm run check:links`.
