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

    canonicalConceptCollections.ts (servidor/build)
      └─ inventario normalizado de 34 colecciones y 2,747 conceptos

    officialReferences.ts (servidor/build)
      ├─ autoridades, estándares, manuales y documentación
      ├─ versión, vigencia y fecha de verificación
      └─ resolución visible de fuentes por concepto

    catalogValidation.ts (servidor/build)
      └─ invariantes de catálogo, escenas, fuentes y casos

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
- sección y escena efectiva para cada concepto, incluida la escena semántica de respaldo;
- fuente oficial o especificación visible para los 2,747 conceptos, sin conceptos sin resolver;
- referencias HTTPS con autoridad, tipo, versión, vigencia y fecha de verificación;
- caso integrado con etapas y profundización;
- todos los enlaces internos de la exportación resuelven a una página o recurso generado.

La exportación produce 77 páginas: 68 canónicas, cuatro puentes heredados y cinco páginas de soporte.
