# Directrices de Accesibilidad y Movimiento Reducido (WCAG 2.1 AA)

Este documento especifica los requisitos de accesibilidad obligatorios para todas las escenas animadas y componentes interactivos del atlas técnico:

## Principios Obligatorios

1. **Movimiento Reducido (`prefers-reduced-motion`):**
   - Cuando el usuario o sistema operativo activa la reducción de movimiento, las transformaciones cinéticas (`translate3d`, `rotate`, `scale`) deben suspenderse automáticamente.
   - Las transiciones de estado deben recurrir a fundidos directos de opacidad (`opacity`) no invasivos.
2. **Navegabilidad por Teclado:**
   - Todos los controles interactivos (botones de play/pause, selector de capítulos, botones de quiz) deben ser accesibles mediante `Tab` y accionables con `Enter` y `Espacio`.
   - Se debe mantener un indicador de foco visible con contraste adecuado (`ring-2 ring-primary`).
3. **Anuncios para Lectores de Pantalla:**
   - Los cambios de estado dinámicos deben informarse mediante regiones en vivo con `aria-live="polite"` sin interrumpir la lectura del usuario.
