# Sistema de Diseño, Tokens de Tema y Contrato de Variables CSS

Este documento formaliza la jerarquía de variables CSS semánticas, alternancia de temas Claro/Oscuro y mitigación de destellos de estilo (*Flash of Unstyled Content* o FOUC) en `Dev-Visualizer`.

---

## 1. Jerarquía de Tokens Semánticos

Para evitar colores codificados (*hardcoded hex values*) y mantener un contraste mínimo de $4.5:1$ (WCAG AA), los componentes consumen tokens semánticos definidos en `:root` y `[data-theme="dark"]`:

| Token Semántico | Uso en Interfaz | Rol en Modo Claro | Rol en Modo Oscuro |
|---|---|---|---|
| `--bg-primary` | Fondo base de la aplicación | Blanco o gris neutro cálido | Carbón profundo / Slate 900 |
| `--bg-surface` | Tarjetas, escenas y paneles | Blanco puro con elevación sutil | Gris azulado oscuro / Slate 800 |
| `--text-primary` | Títulos y párrafos principales | Slate 900 / Contraste alto | Slate 100 / Contraste alto |
| `--text-muted` | Subtítulos y metadatos secundarios | Slate 600 / Legible | Slate 400 / Legible |
| `--border-subtle` | Separadores y bordes de tarjetas | Gris claro neutro | Gris oscuro neutro |
| `--accent-primary` | Botones de acción, enlaces y foco | Azul índigo accesible | Azul eléctrico vibrante |
| `--algo-compare` | Elementos de comparación activa | Ámbar / Naranja de alta visibilidad | Amarillo brillante |
| `--algo-swap` | Elementos en fase de intercambio | Rojo carmín / Magenta | Coral vivo |
| `--algo-sorted` | Elementos en estado final ordenado | Verde esmeralda | Verde menta brillante |

---

## 2. Prevención de Flash de Tema (FOUC) en Next.js

Para evitar que una página pre-renderizada en modo oscuro parpadee en blanco al hidratarse:

1. **Script de Bloqueo Temprano:** Se inyecta un script síncrono minificado en el `<head>` del layout raíz antes de cualquier renderizado de componentes.
2. **Detección Dual:**
   - Consulta `localStorage.getItem('theme')`.
   - Si no existe preferencia almacenada, evalúa la preferencia del sistema operativo mediante `window.matchMedia('(prefers-color-scheme: dark)').matches`.
3. **Aplicación Inmediata:** Asigna el atributo `data-theme` directamente a `document.documentElement` antes del primer ciclo de pintado (*paint*).

---

## 3. Compatibilidad con Alto Contraste del Sistema

- Los bordes y separadores deben mantener un grosor mínimo de 1px real para preservarse en modos de accesibilidad forzada (`@media (forced-colors: active)`).
- Ningún estado algorítmico depende exclusivamente del color; cada estado visual se acompaña de iconos o etiquetas de texto legibles.
