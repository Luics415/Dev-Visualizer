# Skill: Revisar

## Propósito

Auditar seguridad, dependencias, licencias y exposición de secretos sin modificar el sistema auditado.

## Procedimiento

1. Lee `SECURITY.md`, `LICENSE`, `LICENSE-CONTENT.md`, `THIRD_PARTY_NOTICES.md`, `package.json`, lockfiles y el historial reciente.
2. Ejecuta `npm audit --audit-level=high` cuando exista `package.json`.
3. Ejecuta `pip check` o `pip audit` únicamente cuando existan archivos y herramientas de Python aplicables.
4. Revisa licencias declaradas y compatibilidad con el modelo del proyecto.
5. Busca secretos en archivos rastreados y commits recientes sin exponer valores sensibles en el reporte.
6. Clasifica cada hallazgo por severidad, impacto, evidencia, confianza y remediación.

## Entregable

Tabla de hallazgos con:

- Severidad.
- Archivo o dependencia.
- Líneas o versión.
- Vulnerabilidad o incumplimiento.
- Impacto.
- Confianza.
- Recomendación.

## Restricciones

- No ejecutes correcciones automáticas destructivas.
- No publiques secretos ni credenciales.
- No declares ausencia de vulnerabilidades si una herramienta no pudo ejecutarse.
