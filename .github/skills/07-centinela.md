# Skill: Centinela de Discussions (Soporte Autónomo, Buffer Humano y Escalamiento)

- **Contexto de entrada:** Consultas públicas y debates abiertos o continuados en GitHub Discussions (`hasDiscussionsEnabled: true`).
- **Tarea:** Atiende de forma desatendida y periódica dudas técnicas sobre el proyecto, ejecutando un protocolo de 5 capas:
  1. **Soporte Bilingüe y Calidad Textual:**
     - Detección de idioma (Español / Inglés).
     - **Formato Estructurado en Listado:** La mayor parte de la respuesta se presenta en una lista técnica detallada y numerada (1, 2, 3...) para maximizar la legibilidad, rigor y confianza.
     - **Prohibición Estricta de Diagramas:** No generar diagramas ASCII ni bloques Mermaid simplistas. Las preguntas complejas se responden con explicaciones técnicas profundas y fundamentadas en el código real (`src/lib/audioNarrator.ts`, `src/components/audio/FloatingAudioBubble.tsx`, `docs/AUDITORIA_VISUAL_EN_ACCION.md`, etc.).
  2. **Ventana de Espera Humana (10 Minutos) y Envío de Borrador Inmediato:**
     - Al detectarse una discusión, el agente genera de inmediato el borrador técnico y despacha una notificación Nivel 3 a Discord DM con vista previa y aviso de ventana de 10 minutos.
     - Aplica un `sleep` de 10 minutos (desde la creación de la discusión) para dar al usuario la percepción natural de que `@Luics415` leyó y redactó la respuesta personalmente.
     - Si el mantenedor responde manualmente durante esos 10 minutos, el agente cancela la publicación automática y descarta el borrador.
     - Si transcurren los 10 minutos sin intervención manual, el agente publica la respuesta de forma autónoma.
  3. **Notificaciones en Tres Niveles:**
     - *Nivel 1:* Mención nativa con enlace directo a `@Luics415` (push móvil + email de GitHub).
     - *Nivel 2:* Step Summary de GitHub Actions con métricas, enlaces y estado operativo.
     - *Nivel 3:* Mensaje Directo (DM) 1 a 1 de Discord al mantenedor vía Bot Oficial (`DISCORD_BOT_TOKEN` + `DISCORD_USER_ID`) en 3 estados: Borrador en espera, Publicado con éxito o Cancelado por intervención manual.
  4. **Escalamiento de Seguridad / Bugs:** Detección de vulnerabilidades o fallos críticos y apertura automática de Issue etiquetado como `seguridad` o `bug` asignado al mantenedor.
  5. **Expediente Histórico:** Registro de trazabilidad en `docs/FechaAgente/<fecha>/centinela_discusiones.md`.
- **Restricción de Moderación:** La publicación se realiza con la cuenta del mantenedor sin invocar `markDiscussionCommentAsAnswer`, reservando la validación final a la intervención humana.
- **Portabilidad:** Estructura modular sincronizada con el Portafolio oficial mediante `.github/scripts/discussions_centinel.py` y `.github/workflows/discussions-centinel.yml`.
