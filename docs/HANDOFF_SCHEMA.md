# Esquema de Handoff y Validación entre Habilidades

Este documento define la estructura contractual inmutable que debe contener todo artefacto intermedio (`definicion.yml`, `plan.yml`, etc.) para permitir la transición de fase:

```yaml
id_de_ejecucion: string       # UUID o timestamp ISO de la sesión
modo: string                  # 'auditoria_automatica' | 'ejecucion_autorizada'
fase_origen: string           # '01-definir' | '02-planificar' | ...
fase_destino: string          # '02-planificar' | '03-construir' | ...
decisiones_adoptadas: list    # Lista de acuerdos de diseño irrevocables
riesgos_mitigados: list       # Hallazgos con probabilidad e impacto
evidencia_reproducible: list  # Comandos ejecutados y sus códigos de salida
bloqueos_pendientes: list     # Permisos o insumos faltantes
autorizaciones_requeridas: list # Menciones de modo autorizado necesarias
```

## Regla de Transición

Ninguna habilidad puede dar por concluida su ejecución ni pasar el control a la siguiente si `bloqueos_pendientes` contiene elementos sin resolver o si falta la evidencia verificable del paso actual.
