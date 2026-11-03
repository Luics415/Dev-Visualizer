# Expediente de Arquitectura: Tarjetas Nativas, Hero Compacto y Guía Lateral Izquierda

**Fecha:** 2026-11-03  
**Rama:** `feat/home-native-cards-compact-hero-left-nav`  
**Issue:** #255  
**Autor:** Agente Maestro Dev Visualizer  
**Coautor:** Azlynn17 <Azlynn17@users.noreply.github.com>  

---

## 1. Contexto y Objetivos

El usuario solicitó ajustes precisos sobre la portada de **Dev Visualizer**:
1. **Diseño de Tarjetas Nativo**: Integrar rigurosamente el diseño de tarjetas nativo del proyecto (`.concept-card` / `.library-card`) con fondos degradados oscuros, bordes `var(--line-soft)`, resplandores internos radiales (`::after`), cabeceras con badge mono e índices semánticos.
2. **Hero Compacto y Limpio**: Eliminar la etiqueta genérica superior (`ALGORITHM & RUNTIME ARCHITECTURE VISUALIZATION`), compactar la tipografía, espaciados y márgenes del Hero Split, manteniendo un balance visual milimétrico con el simulador interactivo en tiempo real (`HeroSimulatorWorkbench`).
3. **Cero Emojis**: Verificación y erradicación absoluta de cualquier emoji, sustituyéndolos por iconos vectoriales SVG limpios o prefijos formales `[OK]`.
4. **Botón Único «¿Por dónde empezar?» a la Izquierda**:
   - Eliminación definitiva del botón `Roadmap`.
   - Posicionamiento del botón `¿Por dónde empezar?` fijado en el borde izquierdo de la pantalla.
   - Panel lateral desplegable desde la izquierda (`StartGuideDrawer.tsx`), con diseño compacto, cómodo y resumido en 4 fases sin muros de texto.

---

## 2. Archivos Modificados y Creados

1. `src/components/home/StartGuideDrawer.tsx` (Nuevo):
   - Botón lateral izquierdo adherido al borde con indicador de pulso cian.
   - Cajón desplegable lateral izquierdo con 4 fases resumidas y enlace directo a `/colecciones`.
2. `src/components/home/RightSidebarRoadmapDrawer.tsx` (Eliminado):
   - Eliminado para suprimir el botón de Roadmap y la duplicidad de controles.
3. `src/components/home/ThreeToolsSection.tsx` (Modificado):
   - Tarjetas actualizadas con la estructura y variables CSS exactas de `.concept-card`.
   - Textos concisos y directos sobre simulación, casos de producción reales y especificaciones primarias.
4. `src/app/page.tsx` (Modificado):
   - Retiro de la etiqueta genérica del hero.
   - Subtítulo ajustado a una frase precisa.
   - Integración de `StartGuideDrawer`.
5. `src/app/globals.css` (Modificado):
   - Reglas compactas para `.home-hero--split`.
   - Actualización de `.three-tool-card`, `.home-pillar-card`, `.home-action-card`, `.home-trust-card` y `.home-step-card` con el lenguaje de tarjetas nativo del proyecto.
   - Reglas para `.start-edge-bar` y `.start-drawer`.

---

## 3. Verificación de Calidad

Ejecución completa de `npm run check`:
- `ESLint`: 0 errores, 0 advertencias.
- `TypeScript (tsc --noEmit)`: 0 errores de tipado.
- `Validador de Catálogo`: 73 colecciones / 266 recursos válidos.
- `Next.js SSG`: 394 páginas compiladas en 13.0 segundos.
- `Validador de Enlaces`: 394 páginas analizadas, 0 enlaces rotos.
- `Auditoría WCAG 2.1 AA`: 394 páginas y 9,792 botones accesibles verificados.
