# Arquitectura del orquestador maestro

## Propósito

Esta arquitectura coordina las seis habilidades del repositorio sin conceder
permisos implícitos. El modo predeterminado es una auditoría completa,
reproducible y de solo lectura. El modo autorizado solo se activa por una
instrucción directa del usuario y por la aprobación del entorno protegido de
GitHub Actions.

La configuración canónica está en
[`.github/maestro-orquestador.yml`](../.github/maestro-orquestador.yml).

## Modos y límites

| Modo | Activación | Permitido | Prohibido |
| --- | --- | --- | --- |
| Auditoría automática | `schedule` o `workflow_dispatch` con `audit` | Leer el repositorio, ejecutar comprobaciones, generar artefactos, crear o actualizar el Issue de auditoría | Código, PR, subtareas, Projects, `npm audit fix --force` y correcciones de vulnerabilidades |
| Ejecución autorizada | `workflow_dispatch`, confirmación exacta y entorno `orchestrator-authorized` | Solo las operaciones enumeradas explícitamente en la instrucción | Cualquier operación no incluida en la autorización |

La confirmación exacta no sustituye la revisión del entorno. El entorno debe
tener aprobadores configurados en GitHub; sin esa protección, el workflow debe
detenerse antes de una mutación.

## Cadena de seis fases

```text
01 Definir -> 02 Planificar -> 03 Construir -> 04 Verificar -> 05 Revisar -> 06 Aprobar
```

Cada fase recibe el artefacto anterior y produce un artefacto propio. Todas las
fases deben conservar:

- decisiones adoptadas y decisiones pendientes;
- riesgos con severidad, probabilidad, impacto y mitigación;
- evidencia reproducible (comando, resultado, fecha y responsable);
- autorizaciones necesarias antes de una mutación;
- handoff hacia la fase siguiente.

El formato de persistencia y la nomenclatura están en
[`docs/FechaAgente/PLANTILLA_AUDITORIA.md`](FechaAgente/PLANTILLA_AUDITORIA.md).
El workflow publica el expediente como artefacto descargable y copia su
resumen al Issue. La auditoría automática no crea una rama ni un Pull Request
para evitar convertir una propuesta en cambio ejecutado.

## Issues y Project 10

Cada auditoría automática crea un Issue fechado o actualiza el Issue abierto
correspondiente. El Issue debe enlazar el artefacto del workflow y separar:

1. hallazgos confirmados;
2. propuestas de mejora;
3. operaciones bloqueadas por autorización.

El Project **Dev-Visualizer Ecosystem (#10)** es el destino documentado para
seguimiento. La API de Projects no se ejecuta automáticamente: los cambios de
estado, campos, subtareas o asociaciones requieren una instrucción directa y
el modo autorizado. Nunca se debe publicar un mensaje que sugiera que una
tarjeta cambió si el comando de Projects no devolvió evidencia verificable.

Comandos sugeridos, únicamente en modo autorizado:

```bash
gh project item-list 10 --owner Luics415 --format json
gh project item-edit --id <ITEM_ID> --field-id <FIELD_ID> --single-select-option-id <OPTION_ID>
gh issue create --title "<título>" --body-file "<expediente>"
gh pr create --title "<título>" --body-file "<expediente>"
```

Antes de ejecutar comandos de Projects se deben confirmar el propietario, el
ID de tarjeta, el ID del campo y la opción destino. Si `gh project` no está
disponible o la respuesta no es verificable, se genera una propuesta manual y
se deja el estado como pendiente; no se simula éxito.

## Protocolo de autorización

La instrucción autorizante debe identificar la operación y su alcance. Ejemplos
válidos:

```text
AUTORIZO EJECUCIÓN DIRECTA: corregir los hallazgos H-01 y H-02; no ejecutar npm audit fix --force.
AUTORIZO EJECUCIÓN DIRECTA: ejecutar npm audit fix --force y abrir un PR con la evidencia.
AUTORIZO EJECUCIÓN DIRECTA: mover el Issue #123 a In Progress en Project 10.
```

Una autorización no se hereda entre ejecuciones ni habilita operaciones no
mencionadas. `npm audit fix --force`, correcciones de seguridad, código fuente,
PRs, subtareas y Project requieren mención explícita. La auditoría automática
solo recomienda esas acciones.

## Seguridad, licencias y notificaciones

- No se almacenan tokens ni secretos en el repositorio, los artefactos o los
  Issues. `GITHUB_TOKEN` se limita por job.
- Los workflows de auditoría tienen permisos de lectura y solo `issues: write`
  para registrar resultados.
- Las comprobaciones de licencias y dependencias deben reportar evidencia, no
  modificar lockfiles.
- WhatsApp y correo quedan como puntos de extensión documentados, sin secretos,
  proveedores ni envíos configurados.
