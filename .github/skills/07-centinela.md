# Skill: Centinela de Discussions (Soporte Autonomo, Notificaciones y Escalamiento)

- **Contexto de entrada:** Consultas publicas y debates abiertos o continuados en GitHub Discussions (`hasDiscussionsEnabled: true`).
- **Tarea:** Atiende de forma desatendida y periodica dudas tecnicas sobre el proyecto, ejecutando un protocolo de 4 capas:
  1. **Soporte Bilingue Automatico:** Deteccion de idioma (Espanol / Ingles) y respuesta adaptada al glosario de arquitectura de Dev Visualizer (Next.js 16, React 19, Motion, TypeScript, Atlas interactivo).
  2. **Notificaciones en Tres Niveles:**
     - *Nivel 1:* Mencion nativa con enlace directo a `@Luics415` (push movil + email de GitHub).
     - *Nivel 2:* Step Summary de GitHub Actions con metricas y enlaces.
     - *Nivel 3:* Mensaje Directo (DM) 1 a 1 de Discord al mantenedor via Bot Oficial (`DISCORD_BOT_TOKEN` + `DISCORD_USER_ID`).
  3. **Escalamiento de Seguridad / Bugs:** Deteccion de vulnerabilidades o fallos criticos y apertura automatica de Issue etiquetado como `seguridad` o `bug` asignado al mantenedor.
  4. **Expediente Historico:** Registro de trazabilidad en `docs/FechaAgente/<fecha>/centinela_discusiones.md`.
- **Restriccion de Moderacion:** La publicacion se realiza con la cuenta del mantenedor sin invocar `markDiscussionCommentAsAnswer`, reservando la validacion final a la intervencion humana.
- **Portabilidad:** Estructura modular sincronizada con el Portafolio oficial mediante `.github/scripts/discussions_centinel.py` y `.github/workflows/discussions-centinel.yml`.
