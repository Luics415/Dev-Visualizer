# Arquitectura

Dev Visualizer usa Next.js App Router, React, TypeScript y Motion con `output: "export"`. Producción no necesita un servidor Node.js: GitHub Pages recibe HTML, CSS, JavaScript e imágenes estáticas.

## Fronteras

```text
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
  └─ inventario normalizado de 39 colecciones y 3,427 conceptos

officialReferences.ts (servidor/build)
  ├─ autoridades, estándares, manuales y documentación
  ├─ versión, vigencia y fecha de verificación
  └─ resolución visible de fuentes por concepto

catalogValidation.ts (servidor/build)
  └─ invariantes de catálogo, escenas, fuentes y casos
```

`src/app/[slug]/page.tsx` genera estáticamente 48 rutas para las 24 colecciones expandidas a partir de parámetros cerrados. Las 15 colecciones originales conservan 30 rutas y componentes especializados. La biblioteca recibe estadísticas calculadas en servidor; el bundle de navegación no importa los módulos educativos grandes.

## Fuente única

`collectionManifest.ts` define:

- identidad estable;
- nombre y abreviatura;
- grupo y orden;
- ruta conceptual y ruta En acción;
- tema;
- vigencia actual, legado o histórico;
- rutas heredadas.

Las URLs, no los números visibles, son la identidad. Orden, navegación, tema, catálogo, filtros, cifras y sitemap se derivan del manifiesto.

## Frontera editorial

La ruta de colección contiene primer, capítulos, conceptos y referencias oficiales o especificaciones. La ruta **En acción** contiene el relato integrado, sus estados, profundización, fallo, recuperación y resultado; no duplica la bibliografía de conceptos.

Python y MediaPipe son definiciones diferentes. XML, XSD y JSON también tienen manifiesto, contenido, fuentes, temas y casos independientes. Los puentes `/xml-xsd-json*` explican la división y ofrecen los tres destinos sin declarar una canonical arbitraria.

## Validaciones de build

El código comprueba:

- exactamente 39 colecciones;
- IDs y rutas canónicas únicos;
- pareja colección/caso para cada identidad;
- rutas heredadas sin colisiones;
- capítulos y conceptos no vacíos;
- sección y escena efectiva para cada concepto;
- al menos dos fuentes oficiales o especificaciones para los 3,427 conceptos;
- referencias HTTPS con autoridad, tipo, versión, vigencia y fecha de verificación;
- caso integrado con etapas y profundización;
- enlaces internos resueltos a una página o recurso exportado.

La exportación produce 89 páginas: 78 canónicas, seis puentes heredados y cinco páginas de soporte.
