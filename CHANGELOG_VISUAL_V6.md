# Visual System V6

## Por qué cambia

Las referencias nuevas mostraron dos riesgos: colecciones con tarjetas demasiado uniformes y casos “en acción” construidos siempre como seis cajas equivalentes. Esta versión conserva la identidad Jinx, pero cambia la gramática de composición.

## APIs REST en acción

- Sustituye la cuadrícula de etapas por una única traza observable.
- El request viaja verticalmente por gateway, autenticación, validación, servicio y base de datos.
- Un inspector lateral separa request line, headers, body y logs internos.
- La respuesta vuelve como `201 Created`, `Location`, JSON y `ETag`.
- El último capítulo repite la solicitud con la misma `Idempotency-Key` y evita una segunda escritura.

La escena se inspira en la claridad narrativa de diagramas de connection pooling: una ruta principal, estados internos visibles y comparación entre el primer recorrido y el siguiente intento.

## Git y GitHub

- Nueva colección de 14 conceptos.
- Introduce un atlas con tarjetas `standard`, `wide` y `compact`.
- Las escenas usan corte transversal, cinta, filmstrip, vías, punteros, grafos, órbitas, radar, editor dividido, filtro y pipeline.
- Git y GitHub se separan conceptualmente: Git controla snapshots y referencias; GitHub agrega revisión, permisos y automatización.

## Compatibilidad

- No se agregan dependencias.
- La paleta Jinx exterior y los colores semánticos internos se mantienen.
- Las páginas anteriores continúan usando `ConceptCard` sin cambios visuales porque el nuevo prop `layout` es opcional.
