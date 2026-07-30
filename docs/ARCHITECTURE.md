# Arquitectura

Dev Visualizer utiliza Next.js App Router, React, TypeScript y Motion.

- `src/app`: rutas de colecciones, casos integrados, biblioteca y créditos.
- `src/data`: contenido estructurado, primers y navegación.
- `src/components/concepts`: composición de capítulos, tarjetas y profundizaciones.
- `src/components/scenes`: escenas específicas por tecnología.
- `src/components/visual`: motor de metáforas visuales reutilizables.
- `public`: recursos estáticos y manifiesto.

La compilación usa `output: "export"`; no depende de un servidor Node.js en producción. Todas las páginas y recursos se generan como HTML, CSS y JavaScript estáticos.
