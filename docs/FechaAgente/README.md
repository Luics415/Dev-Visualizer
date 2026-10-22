# Expedientes fechados del agente

Cada ejecución automática debe conservar su evidencia en
`docs/FechaAgente/<AAAA-MM-DD>/` durante el procesamiento y publicarla como
artefacto del workflow. La persistencia en la rama principal, un Pull Request o
una actualización del Project solo ocurre con autorización directa.

Use `PLANTILLA_AUDITORIA.md` como contrato. Los nombres de fase son:

```text
01-definir/definicion.yml
02-planificar/plan.yml
03-construir/construccion.yml
04-verificar/verificacion.yml
05-revisar/revision.yml
06-aprobar/aprobacion.yml
```

No incluya secretos, tokens, contenido de variables de entorno ni datos
personales. El resumen del Issue debe indicar qué fue observado, qué se
propone y qué requiere autorización.
