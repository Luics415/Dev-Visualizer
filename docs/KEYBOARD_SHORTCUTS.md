# Taxonomía de Atajos de Teclado y Accesibilidad Operativa

Este documento estandariza la interacción por teclado, navegación accesible (WCAG 2.1 AA) y atajos globales en los visualizadores y lecciones de `Dev-Visualizer`.

---

## 1. Mapa Global de Atajos de Teclado

Para permitir el control total de simulaciones sin ratón, se define la siguiente matriz de teclas globales:

| Atajo | Acción | Contexto Operativo |
|---|---|---|
| `Space` | Reproducir / Pausar simulación | Escena visual o reproductor activo. |
| `ArrowRight` | Avanzar al siguiente paso (`Step Forward`) | Simulación en pausa. |
| `ArrowLeft` | Retroceder al paso anterior (`Step Backward`) | Simulación en pausa. |
| `R` | Reiniciar simulación al estado inicial | Cualquier estado de la escena. |
| `[` / `]` | Reducir / Aumentar velocidad de reproducción | Simulación activa. |
| `M` | Silenciar / Activar narración por audio (`Mute`) | Reproductor de voz/sonido. |
| `Escape` | Cerrar modales, paneles flotantes o diálogos | Vista global. |
| `?` | Abrir modal de ayuda con la lista de atajos | Vista global. |

---

## 2. Gestión del Foco y Trampas de Foco (*Focus Trapping*)

1. **Indicadores de Foco Visibles:** Todo elemento interactivo (`button`, `a`, `input`, sliders) debe poseer un anillo de foco visible de alto contraste (`outline: 2px solid var(--accent)` con desplazamiento `outline-offset: 2px`).
2. **Ciclo de Foco en Modales:** Al abrir un diálogo de confirmación, notas de estudio o configuración, el foco debe transferirse al primer elemento interactivo y quedar contenido (*trapped*) dentro del contenedor hasta su cierre.
3. **Restauración del Foco:** Al descartar un modal o menú emergente, el foco debe regresar exactamente al botón o enlace disparador original.

---

## 3. Anuncios Dinámicos para Lectores de Pantalla (`aria-live`)

- Los cambios de estado críticos de los algoritmos (e.g. *"Elemento 42 encontrado en el índice 5"*, *"Iteración de ordenamiento completada"*) deben emitirse a través de una región en vivo accesible (`aria-live="polite"` y `role="status"`).
- Para evitar sobrecargar la lectura asistida, las actualizaciones continuas de alta frecuencia durante la reproducción automática deben agruparse o sintetizarse únicamente en pausas o eventos clave.
