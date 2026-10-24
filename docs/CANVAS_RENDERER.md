# Arquitectura del Renderizador Canvas y Fallback Semántico DOM

Este documento establece las especificaciones técnicas para componentes interactivos de alta frecuencia basados en HTML5 Canvas y su integración con tecnologías de asistencia.

---

## 1. Manejo de Densidad de Píxeles (HiDPI / Retina)

Para evitar distorsiones o renderizado borroso en pantallas de alta densidad (`window.devicePixelRatio > 1`):

1. **Ajuste de Dimensiones del Buffer:** El tamaño interno del canvas (`canvas.width` y `canvas.height`) se multiplica por el factor de escala:
   $$\text{canvas.width} = \text{cssWidth} \times \text{devicePixelRatio}$$
   $$\text{canvas.height} = \text{cssHeight} \times \text{devicePixelRatio}$$
2. **Escalado del Contexto:** Se aplica una transformación lineal inicial `ctx.scale(ratio, ratio)`.
3. **Dimensiones CSS Estables:** El elemento visual conserva sus dimensiones lógicas a través de estilos CSS inline o clases Tailwind (`style.width = cssWidth + 'px'`).

---

## 2. Bucle de Animación y Sincronización de Tiempos

- Se utiliza `requestAnimationFrame` acoplado al cálculo de tiempo delta (`deltaTime = currentTimestamp - lastTimestamp`).
- Si la pestaña pasa a segundo plano o se detecta inactividad, el bucle se detiene automáticamente para ahorrar ciclos de CPU y batería en dispositivos móviles.

---

## 3. Patrón de Fallback Accesible en el DOM

Los elementos dibujados en un lienzo Canvas son transparentes para los lectores de pantalla. Por lo tanto, cada componente Canvas debe incluir:

- **Estructura Interna Accesible:** Dentro de la etiqueta `<canvas>`, debe existir una representación textual alternativa (tabla, lista semántica `<ol>` o resumen de estado algorítmico).
- **Atributos de Rol y Descripción:** El canvas debe incluir `role="img"` o `role="application"`, acompañado de `aria-label` descriptivo y un enlace a la tabla textual correspondiente.
- **Modo Alto Contraste:** Si el sistema operativo activa el modo de alto contraste (`forced-colors: active`), los colores del canvas deben ajustarse dinámicamente a la paleta del sistema (`CanvasText`, `Highlight`).
