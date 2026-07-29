# Cambios del sistema visual V2

## Rediseño general

- Navegación más compacta y adaptable.
- Tarjetas con familia visual visible.
- Mayor espacio útil para la animación.
- Jerarquía, contraste y código mínimo unificados.

## JavaScript ES6+

Se reemplazaron las 14 escenas para que cada concepto tenga una composición propia: memoria, puertos, red radial, cinta, carriles, puerta de decisión, órbita, estados, timeline, grafo, cápsula léxica, jerarquía, scheduler y bifurcación.

## JavaScript en acción

El antiguo pipeline único se convirtió en una historia de seis escenas:

1. Evento.
2. Estado.
3. Transformación.
4. Red.
5. Asincronía.
6. Render.

## TypeScript

Las 14 escenas se rediseñaron con metáforas específicas: escáner, contrato, sockets, comparativa, blueprint, sello, capas, rutas, whitelist, conectores, árbol, túnel, taller y bloqueo.

## Validación realizada

- Comprobación sintáctica de todos los archivos TypeScript y TSX.
- Comprobación estructural de TypeScript con módulos simulados.
- Verificación de balance de llaves en CSS.
- Verificación de correspondencia entre keyframes y tiempos de Motion.

La validación definitiva del entorno Next.js se realiza localmente con:

```bash
npm run lint
npm run build
```
