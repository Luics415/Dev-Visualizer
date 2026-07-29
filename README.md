# Dev Visualizer — JavaScript completo

Biblioteca visual animada de conceptos de programación. La colección de JavaScript contiene 14 escenas autónomas que se reproducen, hacen una pausa breve y reinician en bucle.

## Conceptos implementados

1. Variables
2. Funciones
3. Objetos
4. Arrays
5. `map()`
6. `filter()`
7. `reduce()`
8. Promesas
9. Async / Await
10. Módulos
11. Closures
12. Scope
13. Event Loop
14. Manejo de errores

## Tecnologías

- Next.js con App Router
- React
- TypeScript
- Motion for React
- CSS global con escenas y primitivas visuales reutilizables

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

## Regla de una escena

Cada escena debe comunicar sin interacción:

1. Estado inicial.
2. Acción o evento.
3. Proceso interno.
4. Resultado.
5. Pausa y reinicio suave.

Las escenas respetan la preferencia de movimiento reducido configurada en el sistema del usuario.
