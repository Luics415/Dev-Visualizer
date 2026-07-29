# Dev Visualizer — Visual System V2

Biblioteca de conceptos de programación explicados mediante animaciones autónomas. Cada escena elige la geometría que mejor representa el comportamiento interno del concepto, en lugar de reciclar una sola plantilla.

## Rutas

- `/` — JavaScript ES6+: 14 conceptos con composiciones distintas.
- `/javascript-en-accion` — una compra completa explicada en 6 etapas conectadas.
- `/typescript` — 14 conceptos representados como escáneres, contratos, planos, rutas y árboles.

## Principio de diseño

Toda escena debe responder visualmente:

1. ¿Qué existe al inicio?
2. ¿Qué evento u operación ocurre?
3. ¿Qué cambia internamente?
4. ¿Qué resultado queda disponible?

El movimiento comunica causalidad: entrada, trayectoria, transformación, espera, rechazo, conservación o resultado. No hay botones, pasos manuales ni quizzes.

## Familias utilizadas

### JavaScript

Memoria, entrada/salida, estructura radial, colección ordenada, transformación paralela, decisión, acumulación, máquina de estados, timeline, red de módulos, memoria léxica, jerarquía de scopes, scheduler y bifurcación de errores.

### TypeScript

Escáner de tipos, contrato, puertos tipados, comparación array/tupla, plano estructural, plantilla reutilizable, extensión de interfaces, rutas de unión, lista literal cerrada, conectores opcionales, árbol de narrowing, túnel genérico, taller de utility types y bloqueo readonly.

## JavaScript en acción

El caso práctico sigue el mismo dato por seis contextos visuales:

1. Evento de usuario.
2. Actualización de estado.
3. `filter` → `map` → `reduce`.
4. Petición de red.
5. Espera con `async/await` mientras la UI continúa.
6. Render del total final.

## Tecnologías

- Next.js con App Router
- React
- TypeScript
- Motion for React
- CSS global con lenguaje visual propio

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
