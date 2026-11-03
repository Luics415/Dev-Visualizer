# Expediente de Implementación: Nueva Página Principal y Tour "Welcome to Dev Visualizer"

**Fecha:** 2026-11-03  
**Ecosistema:** Dev Visualizer  
**Responsable:** Agente Centinela de Arquitectura y Auditoría & @Luics415  
**Coautoría:** Azlynn17 <Azlynn17@users.noreply.github.com>  
**Issue:** #245  

---

## 1. Justificación y Objetivos de Arquitectura

Previamente, la ruta raíz (`/`) de la aplicación alojaba directamente la colección monográfica de JavaScript ES6+, obligando a utilizar `/colecciones/` como un índice sustitutivo y careciendo de una página de aterrizaje institucional que introdujera al usuario a la magnitud y filosofía del atlas (7,410 conceptos, 394 colecciones, 7 áreas arquitectónicas y biblioteca de preservación).

Se ejecutó la reestructuración canónica de rutas:
1. **Migración de JavaScript a `/javascript`:**
   - La colección canónica de JavaScript ES6+, sus 14 escenas interactivas personalizadas, su *primer* conceptual y sus pistas de audio se trasladaron íntegramente a `src/app/javascript/page.tsx`.
   - Se actualizó `src/data/collectionManifest.ts` fijando `href: "/javascript"`.
   - Se regeneró el índice de búsqueda en memoria `src/data/conceptSearchIndex.ts` (470 KB) reflejando los anclajes bajo `/javascript/#concepto-...`.

2. **Nueva Página Principal (`/`):**
   - Implementada en `src/app/page.tsx` como el portal central de Dev Visualizer.
   - **Hero Estratégico:** Título institucional, resumen de alcance, contador global de métricas y botones de acceso rápido (Iniciar Tour, Explorar Colecciones, Ruta JavaScript y Librería Técnica).
   - **Tour Interactivo "Welcome to Dev Visualizer":** Sistema de inducción pedagógica de 6 pasos (`src/components/home/WelcomeTourModal.tsx` y `HomeTourSection.tsx`), disponible tanto en tarjeta interactiva en página como en diálogo modal accesible (`role="dialog"`, soporte de teclado ESC y flechas).
   - **Buscador Rápido Integrado (`HomeConceptSearch.tsx`):** Motor de búsqueda difusa $O(N)$ en memoria con chips de términos frecuentes y visualización inmediata de resultados.
   - **Taxonomía de las 7 Áreas Maestras:** Desglose interactivo de Fundamentos, Lenguajes, Diseño e interfaces, Plataformas y servidor, Datos, Control de versiones y calidad, e Infraestructura y entrega.
   - **Pilares Metodológicos:** Modelos deterministas observables, dualidad teórico-práctica, accesibilidad multimodal (Web Speech API) y rigor documental (RFCs, W3C, ECMA, hashes SHA-256).
   - **Rutas Canónicas de Inicio Rápido:** Acceso directo a JavaScript, TypeScript, Python, Algoritmos, Git, Docker y Librería.

3. **Navegación Unificada (`CollectionNav.tsx`):**
   - El icono de marca (`dev-visualizer-icon.png`) ahora enlaza a la raíz (`/`) con etiqueta accesible.
   - En la ruta principal, el indicador contextual refleja "Plataforma educativa · Dev Visualizer".

---

## 2. Verificaciones y Calidad

- **Compilación Estática (Next.js 16 SSG):** 394 páginas generadas exitosamente en 12.6s (incluyendo `/` y `/javascript`).
- **Comprobación de Enlaces (`scripts/validate-static-links.mjs`):** 394 archivos HTML analizados, 0 enlaces internos rotos.
- **Auditoría de Accesibilidad (`scripts/validate-a11y-standards.mjs`):** 394 páginas auditadas, 393 imágenes con atributo `alt` y 9,781 botones accesibles verificados sin violaciones WCAG.
- **Tipado TypeScript y Linter ESLint:** 0 errores de tipado (`tsc --noEmit`), 0 advertencias de linter (`eslint .`).
