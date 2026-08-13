# Arquitectura

Dev Visualizer usa Next.js App Router, React, TypeScript y Motion, con output: "export". Producción no necesita un servidor Node.js.

## Fronteras

    collectionManifest.ts (ligero)
      ├─ biblioteca, búsqueda y filtros
      ├─ navegación anterior/siguiente
      ├─ temas, vigencia y rutas heredadas
      └─ sitemap y metadatos de catálogo

    expandedCollections.ts (servidor/build)
      ├─ primers y capítulos
      ├─ conceptos y escenas
      ├─ fuentes primarias
      └─ casos integrados y profundización

src/app/[slug]/page.tsx genera estáticamente las rutas de las colecciones expandidas a partir de parámetros cerrados. Las colecciones originales conservan sus rutas y escenas especializadas. La biblioteca recibe estadísticas calculadas en servidor; el bundle de navegación no importa los módulos educativos grandes.

## Fuente única

collectionManifest.ts define:

- identidad estable;
- nombre y abreviatura;
- grupo y orden;
- ruta conceptual y ruta En acción;
- tema;
- vigencia actual, legado o histórico;
- rutas heredadas.

Las URLs, no los números visibles, son la identidad. Los números se derivan del orden actual.

## Validaciones de build

El código comprueba:

- exactamente 34 colecciones;
- IDs y rutas únicos;
- pareja colección/caso para cada identidad;
- rutas heredadas apuntando a una colección existente;
- capítulos y conceptos no vacíos;
- escena y sección para cada concepto;
- caso integrado con etapas y profundización.

La exportación produce 77 páginas: 68 canónicas, cuatro puentes heredados y cinco páginas de soporte.
