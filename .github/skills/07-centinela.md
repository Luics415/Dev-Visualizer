# Skill: Centinela de Discussions (Soporte Autónomo, Buffer Humano y Escalamiento)

- **Contexto de entrada:** Consultas públicas y debates abiertos o continuados en GitHub Discussions (`hasDiscussionsEnabled: true`).
- **Tarea:** Atiende de forma desatendida y periódica dudas técnicas sobre el proyecto, ejecutando un protocolo de 5 capas:
  1. **Soporte Bilingüe y Calidad Textual (Párrafos Densos y Naturales):**
     - Detección de idioma (Español / Inglés).
     - **Formato en Prosa Técnica Cohesiva:** La respuesta se estructura prioritariamente en **párrafos densos, sustanciales y bien articulados** (3 a 4 párrafos), minimizando el uso de listas y viñetas salvo enumeraciones puntuales de 2 o 3 elementos.
     - **Voz Auténtica de Ingeniería:** Tono en primera persona del plural ("En Dev Visualizer diseñamos...", "Bajo el capó..."), explicando el problema de fondo, la decisión arquitectónica y los trade-offs de rendimiento.
     - **Prohibición Estricta de Diagramas:** No generar diagramas ASCII ni bloques Mermaid simplistas. Las preguntas complejas se responden con explicaciones conceptuales profundas fundamentadas en el código real (`src/lib/audioNarrator.ts`, `src/components/audio/FloatingAudioBubble.tsx`, `scripts/build-concept-search-index.ts`, `docs/AUDITORIA_VISUAL_EN_ACCION.md`, etc.).
  2. **Ventana de Espera Humana (10 Minutos) y Envío de Borrador Inmediato:**
     - Al detectarse una discusión, el agente genera de inmediato el borrador técnico y despacha una notificación Nivel 3 en paralelo (Discord DM y WhatsApp) con vista previa y aviso de ventana de 10 minutos.
     - Aplica un `sleep` de 10 minutos (desde la creación de la discusión) para dar al usuario la percepción natural de que `@Luics415` leyó y redactó la respuesta personalmente.
     - Si el mantenedor responde manualmente durante esos 10 minutos, el agente cancela la publicación automática y descarta el borrador.
     - Si transcurren los 10 minutos sin intervención manual, el agente publica la respuesta de forma autónoma.
  3. **Notificaciones en Tres Niveles:**
     - *Nivel 1:* Mención nativa con enlace directo a `@Luics415` (push móvil + email de GitHub).
     - *Nivel 2:* Step Summary de GitHub Actions con métricas, enlaces y estado operativo.
     - *Nivel 3:* Mensajes Directos en paralelo vía **Discord DM** (`DISCORD_BOT_TOKEN` + `DISCORD_USER_ID`) y **WhatsApp** (CallMeBot / Twilio / Meta Cloud API / Webhook) en 3 estados: Borrador en espera, Publicado con éxito o Cancelado por intervención manual.
  4. **Escalamiento de Seguridad / Bugs:** Detección de vulnerabilidades o fallos críticos y apertura automática de Issue etiquetado como `seguridad` o `bug` asignado al mantenedor.
  5. **Expediente Histórico:** Registro de trazabilidad en `docs/FechaAgente/<fecha>/centinela_discusiones.md`.
- **Restricción de Moderación:** La publicación se realiza con la cuenta del mantenedor sin invocar `markDiscussionCommentAsAnswer`, reservando la validación final a la intervención humana.
- **Portabilidad:** Estructura modular sincronizada con el Portafolio oficial mediante `.github/scripts/discussions_centinel.py` y `.github/workflows/discussions-centinel.yml`.
