# Guía de Optimización de Rendimiento y Core Web Vitals

Este documento establece las directrices de arquitectura de rendimiento, presupuestos de cómputo y optimización de renderizado en `Dev-Visualizer`.

---

## 1. Presupuesto de Rendimiento y Métricas Clave

Para garantizar una experiencia interactiva fluida tanto en dispositivos móviles de gama baja como en estaciones de trabajo:

| Métrica | Objetivo | Estrategia de Mitigación |
|---|---|---|
| **LCP** (*Largest Contentful Paint*) | $< 2.0\text{ s}$ | Generación estática SSG de 234 páginas con HTML pre-renderizado e imágenes optimizadas en Next.js. |
| **INP** (*Interaction to Next Paint*) | $< 150\text{ ms}$ | Desacoplamiento de cálculos pesados de algoritmos fuera del hilo de eventos UI. |
| **CLS** (*Cumulative Layout Shift*) | $< 0.05$ | Dimensiones explícitas de contenedores de escenas, gráficos SVG y banners de navegación. |
| **Frame Rate** | $60\text{ FPS}$ sostenidos | Uso de `requestAnimationFrame` y transformaciones GPU-aceleradas (`transform`, `opacity`). |

---

## 2. Delegación a Web Workers

Cuando un algoritmo interactivo sobrepasa una complejidad computacional significativa ($n > 500$ en ordenamientos cuadráticos o grafos con múltiples aristas), el cálculo debe transferirse a un **Web Worker**:

- **Aislamiento de Cómputo:** El Worker calcula la matriz de pasos y retorna buffers estructurados o mensajes JSON serializados.
- **Sin Bloqueo del Hilo Principal:** Las animaciones CSS, sintetizador de audio y eventos de teclado no experimentan caídas de frames (*jank*).
- **Control de Cancelación:** Toda petición computacional debe asociarse a un identificador para cancelar ejecuciones obsoletas si el usuario reinicia la entrada antes de completar el cálculo previo.

---

## 3. Prácticas de Optimización React 19

1. **Evitar Re-renders Innecesarios:** Memoización deliberada (`useMemo`, `React.memo`) únicamente en nodos de visualización de alta frecuencia de actualización.
2. **Virtualización de Listas Extensas:** En el explorador de algoritmos y listas de bibliotecas, limitar los nodos montados concurrentemente en el DOM mediante técnicas de paginación o ventana virtual.
3. **Control de Layout Thrashing:** Prohibir lecturas intercaladas de propiedades del DOM (`offsetTop`, `getBoundingClientRect`) durante los bucles de animación.
