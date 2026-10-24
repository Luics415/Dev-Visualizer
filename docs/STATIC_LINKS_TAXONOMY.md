# Taxonomía de Validación de Enlaces Estáticos

Este documento describe la clasificación de errores verificados por `scripts/validate-static-links.mjs` tras cada compilación del atlas:

| Categoría | Descripción | Acción Correctiva |
| :--- | :--- | :--- |
| `LINK_ROT` | Hipervínculo interno o externo que devuelve error HTTP 404. | Actualizar la ruta canónica o remover la referencia obsoleta. |
| `FRAGMENT_ORPHAN` | Enlace con ancla `#id` cuyo identificador no existe en el DOM destino. | Sincronizar el atributo `id` del componente destino. |
| `BASE_PATH_MISMATCH` | Omisión o duplicación de la subruta de despliegue en entornos estáticos. | Normalizar el enlace mediante la constante de configuración central. |
| `SLASH_INCONSISTENCY` | Falta de barra final (`/`) en rutas que dependen de exportación estática con trailing slash. | Aplicar formato canónico con barra final estandarizada. |
