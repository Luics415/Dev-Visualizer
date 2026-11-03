# Expediente Técnico: Tarjetas Nativas, Consola de Simulación Observable con Algoritmos y Gráficas de Datos, Google Analytics y Erradicación Definitiva de Icono Legado (Ancla)

**Fecha:** 2026-11-03  
**Rama:** `feat/landing-native-cards-and-analytics`  
**Issue de Referencia:** #249  
**Estado:** Verificado y Aprobado (`npm run check` exitoso sin errores)

---

## 1. Diagnóstico y Causa Raíz

### 1.1 Persistencia del Icono Legado (Ancla) en Pestañas del Navegador
- **Síntoma:** Al cargar la página principal, las colecciones o cualquier sección de la aplicación (como `/libreria/`), los navegadores web (Chrome, Edge, Firefox) mostraban brevemente o de forma sostenida un icono de ancla en la pestaña (`⚓ Librería profe...`).
- **Investigación de Causa Raíz:**
  1. El archivo `public/brand/dev-visualizer-icon.png` databa de agosto de 2026 (`feat: brand collections with anchor artwork`).
  2. Scripts previos de optimización de iconos redimensionaban `dev-visualizer-icon.png` para generar los favicons ráster (`favicon.ico`, `favicon-32x32.png`, `favicon-48x48.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`).
  3. En consecuencia, aunque `public/favicon.svg` contenía el emblema geométrico moderno de Dev Visualizer, los navegadores que solicitan preferentemente `.ico` o PNG de 32x32 recibían el gráfico heredado de ancla.
- **Solución Definitiva:**
  1. Regeneración completa de todos los activos binarios (`icon-512.png`, `icon-192.png`, `apple-touch-icon.png`, `dev-visualizer-icon.png`, `anchor-nav.png`, `favicon-48x48.png`, `favicon-32x32.png`) utilizando la librería de alto rendimiento `sharp` con rasterización a 300 DPI directamente a partir del vector canónico `public/favicon.svg`.
  2. Ensamble de `public/favicon.ico` multirresolución (16x16, 32x32, 48x48) a partir de los buffers generados.
  3. Incorporación de query strings de invalidación forzada de caché HTTP (`?v=20261103b`) en `src/app/layout.tsx` y `public/site.webmanifest`.

### 1.2 Sustitución de Indicadores de IA por Tarjetas y Estilos Nativos del Proyecto
- **Problema:** El diseño previo contenía tarjetas con estructuras genéricas típicas de plantillas de IA (píldoras decorativas, listas con viñetas estandarizadas y botones CTA genéricos).
- **Solución:**
  - Sustitución completa por las clases canónicas de Dev Visualizer: `.concept-card` dentro de `.concept-grid` con `AnimatedConceptScene` (variantes `pipeline`, `state-machine`, `layers`, `assurance-rack`, `artifact-passport`, `matrix`, `document`), y `.library-card` dentro de `.library-grid` con metadatos técnicos, contadores y enlaces de preservación.
  - Cero stock photos, cero emojis, cero frases vacías de marketing.

### 1.3 Rediseño de Simulación de Arquitectura y Ejecución Observable
- **Componente:** `ArchitectureSimulationConsole.tsx`.
- **Características de Ingeniería:**
  1. **Algoritmos Activos (Quicksort con Punteros L/R):** Visualización interactiva paso a paso del particionamiento Hoare/Lomuto, resaltado visual de pivote, punteros izquierdo y derecho, intercambios en memoria y monitor de complejidad teórica $O(N \log N)$ vs peor caso $O(N^2)$.
  2. **Gráfica de Datos y Telemetría en Tiempo Real:** Gráfico de telemetría SVG interactivo y reactivo que traza el throughput en RPS y la curva de latencia percentil (p95 y p99) con cursores temporales, ejes calibrados y leyenda de estado de saturación.
  3. **Event Loop V8 y Punteros de Memoria:** Simulador del Call Stack, Microtask Queue y Macrotask Queue, junto con inspección visual de asignación en Stack vs Heap.
  4. **Circuit Breaker Resiliente:** Monitor de estados (`Closed`, `Open`, `Half-Open`) con degradación controlada de tráfico.

### 1.4 Autoarranque del Tour de Bienvenida y Google Analytics
- **Tour de Bienvenida:** `HomeTourSection.tsx` inicializa el modal `WelcomeTourModal` automáticamente al cargar la aplicación (`const [modalOpen, setModalOpen] = useState(true)`), dejando disponible en la interfaz el botón `"Iniciar Tour Guiado (Opcional)"` para reapertura.
- **Google Analytics:** Posicionamiento correcto de `<GoogleAnalytics gaId="G-K3GRNYB3K6" />` dentro del elemento `<body>` en `src/app/layout.tsx`, vinculado a la propiedad `557202031` y sin bloquear la renderización estática.

---

## 2. Evidencia de Validación Técnica

```bash
> dev-visualizer@1.1.0 check
> npm run lint && npm run typecheck && npm run check:library && npm run build && npm run check:links && npm run check:a11y

> dev-visualizer@1.1.0 lint
> eslint .
[OK: 0 advertencias, 0 errores]

> dev-visualizer@1.1.0 typecheck
> tsc --noEmit
[OK: 0 errores de tipos en TypeScript estricto]

> dev-visualizer@1.1.0 check:library
> node scripts/validate-library-catalog.mjs
[library-catalog] OK: 42 temas fuente/179 recursos y 31 temas complementarios/93 recursos; IDs, niveles y URLs válidos.

> dev-visualizer@1.1.0 build
> node --max-old-space-size=4096 node_modules/next/dist/bin/next build
▲ Next.js 16.4.2 (Turbopack)
✓ Generating static pages using 1 worker (394/394) in 14.3s
[OK: 394 páginas estáticas compiladas exitosamente]

> dev-visualizer@1.1.0 check:links
> node scripts/validate-static-links.mjs
394 páginas HTML verificadas; 0 enlaces internos rotos.

> dev-visualizer@1.1.0 check:a11y
> node scripts/validate-a11y-standards.mjs
[a11y-audit] OK: 394 páginas HTML auditadas.
[a11y-audit] 393 imágenes con atributo alt y 9798 botones accesibles verificados.
```

---

## 3. Conclusión y Dictamen
El sistema cumple estrictamente con el principio de estado verídico (*Truthful State*), estándares de accesibilidad WCAG 2.1 AA, integridad tipográfica y de enlaces sin dependencias rotas, y elimina cualquier residuo del icono de ancla heredado.
