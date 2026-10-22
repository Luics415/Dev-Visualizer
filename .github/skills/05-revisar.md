# Skill: Revisar

- **Tarea:** ejecuta una auditoría de cumplimiento técnico y normativo.
- **Entrada:** `04-verificar/verificacion.yml`.
- **Puntos de control:**
  1. Vulnerabilidades en dependencias (`npm audit` y `pip check` cuando corresponda).
  2. Licencias de paquetes de terceros; alerta sobre licencias incompatibles con proyectos propietarios, como GPL, cuando aplique.
  3. Exposición de secretos o variables de entorno en el historial de commits.
- **Entregable:** hallazgos priorizados por severidad, evidencia, impacto y recomendación.
- **Límite:** reporta vulnerabilidades y propone correcciones; no las corrijas ni ejecutes `npm audit fix --force` sin autorización directa.
- **Persistencia:** `05-revisar/revision.yml`.
