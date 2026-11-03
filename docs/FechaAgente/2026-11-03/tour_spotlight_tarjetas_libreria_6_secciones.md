# Expediente de Arquitectura: Tour con Spotlight, Tarjetas Estilo /libreria y 6 Secciones Formativas

**Fecha:** 2026-11-03  
**Rama:** `feat/tour-spotlight-library-cards-guide-6-sections`  
**Issue:** #257  
**Autor:** Agente Maestro Dev Visualizer  
**Coautor:** Azlynn17 <Azlynn17@users.noreply.github.com>  

---

## 1. Requerimientos Atendidos

1. **Tour Interactivo con Spotlight y Fondo Oscuro (`SpotlightTour.tsx`)**:
   - Velo de fondo oscuro global (`background: rgba(3, 6, 12, 0.82); backdrop-filter: blur(5px);`).
   - Caja de foco dinámico (`.spotlight-box`): enmarca e ilumina con halo y borde cian la tarjeta/sección correspondiente mientras proyecta una sombra expansiva `box-shadow: 0 0 0 9999px rgba(3, 6, 12, 0.82), 0 0 35px rgba(59, 211, 255, 0.65)` sobre el resto de la interfaz.
   - Desplazamiento automático y sincronización con scroll/redimensionamiento.
   - Navegación frame a frame con indicadores de puntos (dots), botón de omitir, botón anterior y botón siguiente.
2. **Diseño de Tarjetas Fiel a `/libreria` (`.topicCard`)**:
   - Aplicación estricta de las variables y estructura de `.topicCard` en todas las tarjetas de la plataforma:
     - Borde: `1px solid rgba(121, 145, 180, 0.22)`.
     - Radio de esquinas: `20px`.
     - Fondo: `linear-gradient(145deg, color-mix(in srgb, var(--card-accent) 9%, transparent), rgba(11, 17, 30, 0.92) 42%)`.
     - Línea superior de acento neón `::before` de 44% de ancho.
     - Cabecera con categoría y distintivo índice tipo bloque (`min-width: 42px; height: 34px; border-radius: 9px;`).
     - Botón de acción con estilo outline y realce hover.
3. **Secuencia Formativa Sugerida en 6 Secciones (`StartGuideDrawer.tsx`)**:
   - El panel desplegable lateral izquierdo ahora redirige a las 6 secciones solicitadas:
     1. `Colecciones`: `/colecciones`
     2. `Librería`: `/libreria`
     3. `02 · Capacidades Operativas`: `#capacidades-operativas`
     4. `01 · Currículum y Runtimes`: `#que-se-aprende`
     5. `03 · Evidencia y Confianza`: `#puedo-confiar`
     6. `04 · Rutas y Certificación`: `#que-hago-ahora`
4. **Cero Emojis**: Cero emojis presentes en componentes o estilos.

---

## 2. Verificación de Calidad

Ejecución de `npm run check`:
- `ESLint`: 0 errores, 0 advertencias.
- `TypeScript (tsc --noEmit)`: 0 errores de tipado.
- `Catálogo de Librería`: 73 temas / 266 recursos válidos.
- `Next.js SSG`: 394 páginas compiladas en 12.7 segundos.
- `Auditoría de Enlaces`: 394 páginas inspeccionadas, 0 enlaces rotos.
- `Accesibilidad WCAG 2.1 AA`: 394 páginas y 9,794 botones accesibles verificados.
