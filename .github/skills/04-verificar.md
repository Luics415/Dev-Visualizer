# Skill: Verificar

## Propósito

Definir y ejecutar la evidencia de que una tarea cumple sus contratos sin degradar UX, accesibilidad ni exportación estática.

## Procedimiento

1. Lee `README.md`, `docs/`, el plan aprobado y los scripts disponibles en `package.json`.
2. Ejecuta la prueba mínima que cubra el cambio; usa `npm run check` cuando el alcance sea transversal.
3. Define casos happy path, edge cases, regresión visual, responsive, teclado, tacto y movimiento reducido cuando correspondan.
4. Inspecciona consola, red, rutas, payloads y errores visibles en DevTools.
5. Registra comando exacto, resultado, evidencia y cualquier limitación.

## Entregable

Checklist reproducible con:

- Caso y precondiciones.
- Pasos.
- Resultado esperado.
- Resultado observado.
- Evidencia.
- Estado: `Pasó`, `Falló`, `Bloqueado` o `No aplica`.

## Restricciones

- No edites código fuente durante la verificación.
- No declares aprobado un caso que no se haya ejecutado o cuya evidencia falte.
