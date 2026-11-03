# Expediente de Arquitectura: Rediseño de Portada y Experiencia de Usuario Inspirada en DevVizor con Identidad Nativa de Dev Visualizer

**Fecha:** 2026-11-03  
**Rama:** `feat/landing-devvizor-architecture-experience`  
**Issue:** #253  
**Estado:** Verificado y Aprobado (`npm run check` con 0 errores y 0 advertencias)

---

## 1. Contexto y Objetivos de la Transformación

A partir de la referencia de producto visualizada en [DevVizor](https://www.devvizor.online) y las capturas de pantalla suministradas, se rediseñó la experiencia de entrada a la plataforma adaptando las mejores prácticas de UX de la referencia pero preservando rigurosamente el **lenguaje visual nativo, colores, tipografía, branding del ancla y rigor curricular de Dev Visualizer**:

1. **Hero Split de Doble Columna (Alto Impacto):**
   - **Columna Izquierda:** Título contundente (*«Comprende la arquitectura de software viéndola ejecutarse»*), subtítulo didáctico, botones de acción primarios (*Explorar las 73 Colecciones*, *Consola de Simulación*, *Librería Profesional*) y línea de alcance (7,410 conceptos técnicos, 73 colecciones, 146 rutas canónicas).
   - **Columna Derecha:** Workbench interactivo estilo ventana de código (`HeroSimulatorWorkbench.tsx`) con barra de título con puntos macOS, ejecución en vivo de Quicksort con código y líneas resaltadas a la izquierda, y barras visuales reactivas a la derecha con indicadores de punteros `▲ L` y `▼ R` y controles de reproducción (`⏮`, `▶ / ⏸`, `⏭`, `↺`).

2. **Panel Desplegable Lateral de Especialización (`RightSidebarRoadmapDrawer.tsx`):**
   - Pestañas verticales ancladas fijas al borde derecho de la pantalla (*«¿Por dónde empezar?»* y *«Roadmap»*).
   - Al pulsar, despliega un cajón lateral (*slide-over drawer*) con la hoja de ruta secuencial oficial dividida en 4 fases formativas:
     - **Fase 1:** Elige un Lenguaje y su Runtime (JavaScript/TS, Python, Rust/C++, Go).
     - **Fase 2:** Fundamentos y Gestión de Memoria (Stack vs Heap, Event Loop, Complejidad Big-O).
     - **Fase 3:** Algoritmos y Estructuras de Datos (Quicksort, Árboles AVL/B-Tree, Grafos Dijkstra).
     - **Fase 4:** Sistemas Distribuidos y Contenedores (TCP/TLS/QUIC, Docker Namespaces, Circuit Breakers, ACID).
   - Pie fijo con llamado a la acción directo al catálogo de colecciones.

3. **Tarjeta Flotante de Bienvenida / Onboarding Compacto (`FloatingWelcomeCard.tsx`):**
   - Modal flotante en la parte inferior central con diseño translúcido dark glass (`rgba(7, 13, 24, 0.94)` y borde cyan resplandeciente).
   - 4 pasos guiados con botones de avance rápido, omisión y enlace al simulador, permitiendo cerrar y reabrir desde un botón discreto en cualquier momento.

4. **Sección de Tres Herramientas Canónicas (`ThreeToolsSection.tsx`):**
   - Inspirada en la composición *«Three Tools, One Workspace»*:
     - **01. Visualizadores con Controles de Reproducción:** Animaciones paso a paso con retroceso y métricas Big-O.
     - **02. 73 Casos Reales «En Acción»:** Diagnóstico de anomalías en producción y mitigación resiliente.
     - **03. Librería Profesional Preservada:** 266 recursos canónicos y especificaciones oficiales sin alucinaciones.

---

## 2. Archivos Modificados y Creados

- `src/app/page.tsx`: Reestructuración completa con el nuevo Hero Split, ThreeToolsSection, Roadmap Drawer y Floating Welcome Card.
- `src/components/home/HeroSimulatorWorkbench.tsx`: Workbench de simulación en vivo código/barras con controles.
- `src/components/home/RightSidebarRoadmapDrawer.tsx`: Pestañas verticales fijas al borde y cajón lateral con Roadmap formativo.
- `src/components/home/FloatingWelcomeCard.tsx`: Tarjeta flotante de bienvenida con micro-interacciones.
- `src/components/home/ThreeToolsSection.tsx`: Cuadrícula de 3 herramientas canónicas.
- `src/app/globals.css`: Reglas de estilo para el split hero, ventana de código, cajón lateral, tarjeta flotante y media queries responsivas.

---

## 3. Evidencia Verificable de Calidad (*Truthful State*)

```bash
> dev-visualizer@1.1.0 check
> npm run lint && npm run typecheck && npm run check:library && npm run build && npm run check:links && npm run check:a11y

> dev-visualizer@1.1.0 lint
> eslint .
[OK: 0 errores, 0 advertencias]

> dev-visualizer@1.1.0 typecheck
> tsc --noEmit
[OK: 0 errores de tipos en TypeScript estricto]

> dev-visualizer@1.1.0 check:library
> node scripts/validate-library-catalog.mjs
[library-catalog] OK: 42 temas fuente/179 recursos y 31 temas complementarios/93 recursos; IDs, niveles y URLs válidos.

> dev-visualizer@1.1.0 build
> node --max-old-space-size=4096 node_modules/next/dist/bin/next build
▲ Next.js 16.4.2 (Turbopack)
✓ Generating static pages using 1 worker (394/394) in 12.7s
[OK: 394 páginas HTML estáticas exportadas exitosamente]

> dev-visualizer@1.1.0 check:links
> node scripts/validate-static-links.mjs
394 páginas HTML verificadas; 0 enlaces internos rotos.

> dev-visualizer@1.1.0 check:a11y
> node scripts/validate-a11y-standards.mjs
[a11y-audit] OK: 394 páginas HTML auditadas.
[a11y-audit] 393 imágenes con atributo alt y 9793 botones accesibles verificados.
```
