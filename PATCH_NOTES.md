# Navigation hotfix

Corrige la navegación anterior/siguiente de la barra superior.

## Cambios

- Normaliza rutas con `basePath` y `/` final antes de buscar la colección activa.
- Mantiene las flechas visibles en pantallas pequeñas.
- Refuerza el área clicable y evita que otro elemento intercepte el puntero.
- Conserva el emblema de ancla y el selector completo de colecciones.

## Archivos

- `src/components/navigation/CollectionNav.tsx`
- `src/app/globals.css`
