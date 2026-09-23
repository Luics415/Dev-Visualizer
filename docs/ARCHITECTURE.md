# Arquitectura

Dev Visualizer usa Next.js App Router, React, TypeScript y Motion con `output: "export"`. Producción no necesita un servidor Node.js: GitHub Pages recibe HTML, CSS, JavaScript e imágenes estáticas.

## Fronteras

```text
collectionManifest.ts (ligero)
  ├─ biblioteca, búsqueda y filtros
  ├─ navegación anterior/siguiente
  ├─ temas, vigencia y rutas heredadas
  └─ sitemap y metadatos de catálogo

libraryTopics.ts (ligero)
  ├─ 71 temas y relación colección ↔ biblioteca
  └─ grupos, descripciones y semillas oficiales

professionalLibrary.ts + libraryResources.snapshot.json (servidor/build)
  ├─ 179 recursos bibliográficos importados
  ├─ 87 recursos complementarios para los otros 29 temas
  ├─ procedencia, formatos, niveles y licencias
  ├─ adjuntos verificables y enlaces externos
  └─ índice y 71 rutas estáticas de librería

expandedCollections.ts (servidor/build)
  ├─ primers y capítulos
  ├─ conceptos y escenas
  ├─ fuentes primarias
  └─ casos integrados y profundización

canonicalConceptCollections.ts (servidor/build)
  └─ inventario normalizado de 71 colecciones y conceptos derivados

officialReferences.ts (servidor/build)
  ├─ autoridades, estándares, manuales y documentación
  ├─ versión, vigencia y fecha de verificación
  └─ resolución visible de fuentes por concepto

catalogValidation.ts (servidor/build)
  └─ invariantes de catálogo, escenas, fuentes y casos
```

`src/app/[slug]/page.tsx` genera estáticamente las colecciones registradas mediante parámetros cerrados. `src/app/libreria/[tema]/page.tsx` hace lo mismo para los 71 temas bibliográficos. Los componentes especializados originales se conservan; la navegación cliente recibe manifiestos ligeros y no importa los módulos educativos grandes.

## Fuente única

`collectionManifest.ts` define:

- identidad estable;
- nombre y abreviatura;
- grupo y orden;
- ruta conceptual y ruta En acción;
- slug obligatorio de Librería profesional;
- tema;
- vigencia actual, legado o histórico;
- rutas heredadas.

Las URLs, no los números visibles, son la identidad. Orden, navegación, tema, catálogo, filtros, cifras y sitemap se derivan del manifiesto.

## Frontera editorial

La ruta de colección contiene primer, capítulos, conceptos y referencias oficiales o especificaciones. Una invitación situada antes del capítulo 1 conduce a su librería. La ruta **En acción** contiene el relato integrado, sus estados, profundización, fallo, recuperación y resultado; no duplica bibliografía ni componentes de librería.

Python y MediaPipe son definiciones diferentes. XML, XSD y JSON también tienen manifiesto, contenido, fuentes, temas y casos independientes. Los puentes `/xml-xsd-json*` explican la división y ofrecen los tres destinos sin declarar una canonical arbitraria.

## Validaciones de build

El código comprueba:

- exactamente 71 colecciones y 71 slugs de librería;
- IDs y rutas canónicas únicos;
- pareja colección/caso para cada identidad;
- rutas heredadas sin colisiones;
- capítulos y conceptos no vacíos;
- sección y escena efectiva para cada concepto;
- al menos dos fuentes oficiales o especificaciones para todos los conceptos;
- al menos 60 conceptos, 12 capítulos, 14 familias visuales y explicaciones extensas en cada una de las 30 colecciones incorporadas;
- referencias HTTPS con autoridad, tipo, versión, vigencia y fecha de verificación;
- caso integrado con etapas y profundización;
- 42 temas y 179 recursos procedentes del catálogo atribuido;
- 29 temas complementarios con tres niveles y 87 recursos sin duplicados;
- adjuntos locales con licencia, evidencia, tamaño y hash;
- enlaces internos resueltos a una página o recurso exportado.
