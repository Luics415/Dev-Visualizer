# Changelog — Study Atlas V8

## Objetivo

Convertir las primeras cuatro colecciones en referencias de estudio amplias y corregir la navegación que dejó de escalar cuando el proyecto superó el ancho de la barra superior.

## Cobertura ampliada

- JavaScript ES6+: de 14 a **55 conceptos**, organizados en 12 capítulos.
- TypeScript: de 14 a **64 conceptos**, organizados en 7 capítulos.
- React: de 14 a **62 conceptos**, organizados en 7 capítulos.
- React Native: de 14 a **80 conceptos**, organizados en 7 capítulos.
- Total actual de la biblioteca: **369 conceptos**.

Las escenas especializadas existentes se conservaron. Los conceptos nuevos usan el motor visual reutilizable y variantes adaptadas al mecanismo: pipelines, árboles, capas, comparativas, terminales, timelines, matrices, documentos y grafos.

## Casos integrados ampliados

JavaScript, TypeScript, React y React Native en acción pasan de seis a **14 etapas** cada uno. Las ocho etapas nuevas profundizan en límites reales como cancelación, persistencia, type tests, concurrencia, optimistic UI, offline-first, ciclo de vida móvil, accesibilidad, profiling y releases.

## Navegación V8

- Nueva biblioteca en `/colecciones`.
- El logotipo `DV` funciona como acceso permanente al catálogo.
- Selector desplegable con las 14 rutas agrupadas por tema.
- Búsqueda interna por colección.
- Indicador de colección actual.
- Controles anterior/siguiente.
- Diseño responsive que evita ocultar colecciones por falta de ancho.
- Índices de capítulos dentro de JavaScript, TypeScript, React y React Native.

## Arquitectura incorporada

- `src/data/conceptTypes.ts` — contrato compartido para conceptos.
- `src/data/collectionLinks.ts` — fuente única de navegación.
- `src/data/practicalDeepDives.ts` — etapas adicionales de casos prácticos.
- `src/components/concepts/CollectionChapters.tsx` — organización por capítulos.
- `src/components/concepts/PracticalDeepDive.tsx` — cajas paralelas autónomas.
- `src/lib/slugify.ts` — anclas estables de capítulos.

## Compatibilidad

- No se agregaron dependencias.
- Se conservan la paleta Jinx y los colores semánticos internos.
- Se mantienen las rutas anteriores.
- El parche no contiene `node_modules`, `.git`, `package-lock.json` ni cambios de versiones.
