# Dev Visualizer — Jinx Visual System

Biblioteca de programación explicada mediante animaciones autónomas. Cada escena elige la geometría que mejor representa el comportamiento interno del concepto, en lugar de reciclar una sola plantilla.

## Rutas

- `/` — JavaScript ES6+: 14 conceptos.
- `/javascript-en-accion` — una compra explicada en 6 etapas conectadas.
- `/typescript` — 14 conceptos de TypeScript.
- `/typescript-en-accion` — un pedido tipado desde la entrada hasta el JavaScript compilado.
- `/react` — 14 conceptos de React.
- `/react-en-accion` — una búsqueda explicada desde el evento hasta el segundo commit.
- `/react-native` — 14 conceptos de desarrollo móvil con React Native.
- `/react-native-en-accion` — un reporte con foto explicado a través de React, el sistema operativo y una API.
- `/apis-rest` — 14 conceptos de diseño REST y comunicación HTTP.

## Identidad visual

La interfaz exterior usa la paleta **Jinx Arcane**:

- `#835f86` — violeta.
- `#75455d` — vino.
- `#a76486` — rosa.
- `#4d7290` — azul.
- `#4b4754` — pizarra.

Estos colores alimentan el fondo, la navegación, los encabezados y las superficies exteriores. Algunos textos usan mezclas de la misma paleta con blanco para conservar legibilidad. Los colores semánticos de las animaciones internas permanecen intactos para no alterar el significado de dato, proceso, éxito, espera o error.

## Principio de diseño

Toda escena debe responder visualmente:

1. ¿Qué existe al inicio?
2. ¿Qué evento u operación ocurre?
3. ¿Qué cambia internamente?
4. ¿Qué resultado queda disponible?

El movimiento comunica causalidad: entrada, trayectoria, transformación, espera, rechazo, conservación o resultado. No hay controles necesarios para comprender la explicación.

## Colecciones

### JavaScript ES6+

Memoria, entrada/salida, objetos, colecciones, transformaciones, asincronía, módulos, closures, scope, Event Loop y errores.

### TypeScript

Inferencia, contratos, tipos estructurales, uniones, narrowing, genéricos, utility types y readonly.

### React

Composición, JSX, props, snapshots de estado, eventos, keys, efectos, memoización, referencias, Context, custom hooks y reconciliación.

### React Native

Renderizado nativo, componentes base, StyleSheet, Flexbox, entradas, pulsaciones, imágenes, virtualización, navegación, safe areas, diferencias de plataforma, permisos, red y persistencia.

### APIs REST

Recursos, endpoints, métodos HTTP, rutas y query, headers, JSON, status codes, CRUD, statelessness, autenticación, paginación, caché, idempotencia y errores estructurados.

## Casos integrados

### JavaScript en acción

Una compra atraviesa evento, estado, `filter`, `map`, `reduce`, red, `async/await` y render final.

### TypeScript en acción

Un pedido atraviesa entrada tipada, contrato de dominio, cliente genérico, unión discriminada, narrowing y compilación.

### React en acción

Una búsqueda atraviesa evento, actualización en cola, render, reconciliación, efecto asíncrono y commit mínimo de resultados.

### React Native en acción

Un reporte móvil atraviesa pulsación, estado y render, permiso del sistema, cámara nativa, carga HTTP, persistencia y navegación.

## Tecnologías

- Next.js con App Router
- React
- TypeScript
- Motion for React
- CSS global con lenguaje visual propio

El visualizador es una aplicación web; las colecciones de React Native y APIs REST explican conceptos, pero no agregan un runtime móvil ni un backend como dependencias del proyecto.

## Ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Validar

```bash
npm run lint
npm run build
```

Las animaciones respetan la preferencia de movimiento reducido del sistema mediante `MotionConfig`.
