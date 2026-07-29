# Visual System V7 — Coverage First

## Cambio de criterio

Las colecciones dejan de estar limitadas a 14 conceptos y los ejemplos prácticos dejan de estar limitados a 6 cajas. La cantidad ahora depende de cubrir fundamentos, uso diario, diagnóstico y producción.

## APIs REST

- Expansión de 14 a 34 conceptos.
- Nuevas escenas: content negotiation, versionado, validación, CORS, rate limiting, timeouts, backoff, cursor pagination, búsqueda/orden, peticiones condicionales, concurrencia optimista, multipart, webhooks, OpenAPI, tracing, autorización, deprecación, contract testing, bulk e hipermedia.
- Se conserva la traza práctica de creación de pedido y retry idempotente.

## Git y GitHub

- Expansión de 14 a 32 conceptos.
- Se agregan status, staging selectivo, diff, log/show, restore/reset/revert, switch, estrategias de merge, rebase interactivo, cherry-pick, stash, tags/releases, tracking branches, branch protection, Issues/Projects, reflog, blame/bisect, hooks y Git LFS.
- Nuevo caso en acción de 8 capítulos: Issue → branch → commits → sync → push → PR → CI → merge/release.
- El ejemplo usa un filtro de campeones y Jinx como guiño temático, manteniendo precisión técnica.

## HTML y CSS

- Nueva colección de 42 conceptos.
- Cubre HTML semántico, formularios, accesibilidad, DOM/parser, cascade, layout, responsive design y composición.
- Nuevo caso integrado de 8 etapas desde HTML/CSS fuente hasta DOM, CSSOM, cascade, layout, paint, composite, responsive y accessibility tree.

## Arquitectura visual

- Nuevo `AnimatedConceptScene` con 14 familias de composición reutilizables.
- Las familias permiten ampliar cobertura sin convertir todas las escenas en la misma caja genérica.
- No se agregan dependencias ni se modifican los colores semánticos internos.
