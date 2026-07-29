# Dev Visualizer — Starter

Biblioteca visual animada de conceptos de programación. Esta primera entrega establece el lenguaje visual y cinco tipos de escena autónoma:

- **Variables:** memoria y cambio de estado.
- **Funciones:** entrada, proceso y salida.
- **Objetos:** propiedades, lectura y actualización de un valor.
- **Arrays:** índices, acceso, `push()` y `pop()`.
- **map:** transformación de una colección.

Las escenas se reproducen solas, terminan, hacen una pausa y reinician en bucle.

## Tecnologías

- Next.js (App Router)
- React
- TypeScript
- Motion for React
- CSS global con componentes visuales reutilizables

## Ejecutar

Necesitas Node.js y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Estructura

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── concepts/
│   ├── providers/
│   ├── scenes/javascript/
│   └── visual/
└── data/
```

## Regla de una escena

Cada escena debe comunicar, sin interacción:

1. Estado inicial.
2. Acción o evento.
3. Proceso interno.
4. Resultado.
5. Pausa y reinicio suave.

## Siguiente sprint

1. Convertir colores, tamaños y duraciones en tokens.
2. Crear primitivas `Arrow`, `DataPacket`, `Queue`, `Stack` y `CodeStep`.
3. Implementar filter y reduce.
4. Validar que cada escena se entienda sin audio.
