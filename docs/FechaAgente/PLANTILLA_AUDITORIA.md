# Contrato de artefacto de auditoría

Cada artefacto YAML debe conservar esta estructura:

```yaml
id_de_ejecucion: "YYYYMMDD-HHMMSS-<run>"
fecha_utc: "YYYY-MM-DD"
modo: auditoria_automatica
fase: 01-definir
entrada:
  instruccion: "<orden recibida, sin secretos>"
  artefacto_anterior: null
decisiones:
  adoptadas: []
  pendientes: []
riesgos:
  - id: R-001
    severidad: baja
    probabilidad: posible
    impacto: "<impacto>"
    mitigacion: "<mitigación>"
evidencia:
  - comando: "<comando reproducible>"
    resultado: "<resumen verificable>"
    estado: pass
autorizaciones_requeridas:
  - operacion: "<mutación>"
    motivo: "<por qué requiere instrucción directa>"
siguiente_fase: 02-planificar
handoff:
  responsable: maestro-orquestador
  fecha_utc: "YYYY-MM-DD"
  bloqueado: false
```

Los valores `estado` permitidos son `pass`, `fail`, `warn` y `not_run`. Una
fase bloqueada debe explicar el motivo en `riesgos` y establecer
`handoff.bloqueado: true`.
