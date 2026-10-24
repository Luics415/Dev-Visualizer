# Estrategia de Pruebas Unitarias e Integración para Visualizadores

Este documento detalla la taxonomía de pruebas, validación de invariantes algorítmicos y cobertura automatizada implementada en `Dev-Visualizer`.

---

## 1. Pirámide de Pruebas

```text
               ▲
              / \
             /E2E\      -> Validación de enlaces estáticos y a11y (axe-core)
            /─────\
           / Integr\    -> Renderizado de componentes, teclado y FSM (Testing Library)
          /─────────\
         /  Unitarias\  -> Invariantes matemáticos y correctitud algorítmica (Vitest/Jest)
        /─────────────\
```

---

## 2. Verificación de Invariantes Algorítmicos (Unit Testing)

Toda función pura de cálculo algorítmico (`src/lib`) debe someterse a pruebas de invariantes:

1. **Invariante de Ordenación:** Tras el último paso de la simulación, $\forall i \in [0, n-2]: A[i] \le A[i+1]$.
2. **Invariante de Conservación:** La multiconjunto de elementos de entrada debe coincidir exactamente con la de salida (sin pérdida ni duplicación de valores).
3. **Casos Límite Obligatorios (*Edge Cases*):**
   - Arreglo vacío (`[]`).
   - Arreglo unitario (`[42]`).
   - Arreglo con elementos idénticos repetidos (`[7, 7, 7, 7]`).
   - Arreglo inversamente ordenado (`[9, 8, 7, 6, 5]`).

---

## 3. Pruebas de Integración de Componentes UI

Para los componentes interactivos de control y visualización:

- **Simulación de Eventos de Usuario:** Pruebas con `@testing-library/user-event` para verificar clic en reproducir, pausar y avance paso a paso.
- **Transición de Atributos ARIA:** Comprobar que los atributos `aria-valuenow`, `aria-live` y `aria-expanded` se actualizan sincronizadamente con el estado interno.
- **Aislamiento de Entorno:** Mocks declarativos para APIs dependientes del navegador (`SpeechSynthesis`, `AudioContext`, `IntersectionObserver`, `matchMedia`).
