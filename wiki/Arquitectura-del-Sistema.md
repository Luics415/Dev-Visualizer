# 🏗️ Arquitectura Técnica y Rendimiento de Dev Visualizer

**Dev Visualizer** está diseñado bajo los principios de máxima fidelidad pedagógica, cero regresiones y rendimiento extremo en el navegador web.

---

## ⚙️ Stack Tecnológico Principal

| Componente | Tecnología | Versión | Rol en la Arquitectura |
| :--- | :--- | :--- | :--- |
| **Framework Web** | Next.js | `16.4.3` | Generación Estática (SSG), compilación atómica de 394 páginas y optimización de assets. |
| **Librería UI** | React | `19.2.8` | Modelo de componentes declarativo, hooks modernos y uso de `useSyncExternalStore` para estado desacoplado. |
| **Motor de Animación** | Motion (Framer Motion) | `14.8.0` | Animaciones vectoriales GPU a 60 FPS con soporte estricto de `prefers-reduced-motion`. |
| **Tipado Estático** | TypeScript | `6.0.3` | Contratos rigurosos para colecciones, preguntas de examen, esquemas de búsqueda y metadatos. |
| **Síntesis de Audio** | Web Speech API | Nativa | Narración pedagógica de conceptos con chunking semántico por pausas de puntuación. |
| **Motor de Búsqueda** | En Memoria | Nativo (<100 KB) | Indexación instantánea con tuplas comprimidas y normalización fonética de acentos. |

---

## 🚀 Decisiones de Diseño Clave

### 1. Static Site Generation (SSG) Puro
Dev Visualizer compila sus 394 páginas y rutas técnicas durante el build de Next.js. No realiza llamadas de red ni solicitudes a bases de datos en tiempo de ejecución (0 runtime fetch lag). Esto garantiza disponibilidad del 100% en GitHub Pages, tiempos de carga casi instantáneos y navegación offline vía Service Workers.

### 2. Motor de Búsqueda Compacto
El índice de los 7,410 conceptos se almacena en una estructura de tuplas compactas `[título, sección, idColección]`, manteniendo el tamaño total del bundle de búsqueda por debajo de los 100 KB. La búsqueda utiliza un algoritmo de distancia difusa con eliminación de tildes y caracteres especiales.

### 3. Animaciones Aceleradas por Hardware
Todas las escenas pedagógicas animadas (`AnimatedConceptScene`) transforman exclusivamente propiedades de composición (`transform: translate3d`, `opacity`), evitando recalcular el layout o causar repaints en el hilo principal del navegador.

---
[← Volver al Inicio](Home)
