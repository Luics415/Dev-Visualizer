---
name: dev-visualizer-centinela
description: >-
  Habilidad del Agente Centinela de GitHub Discussions para Dev Visualizer. Gestiona respuestas automaticas contextualizadas en 3 niveles de notificacion, soporte bilingue, escalamiento de incidentes y expediente historico.
---

# Skill: Centinela de GitHub Discussions para Dev Visualizer (Soporte Autonomo y Escalamiento)

Esta habilidad dota a **Dev Visualizer** de un **Agente Centinela Autonomo** para atender preguntas y debates en GitHub Discussions con contexto vivo del proyecto (Next.js 16, React 19, Motion, Atlas de 73 colecciones y 146 rutas tecnicas), soporte bilingue y trazabilidad completa.

---

## Capacidades Operativas

### 1. Soporte Bilingue Automatico (ES / EN)
- Analiza el texto de la duda y detecta si esta formulada en espanol o ingles.
- Responde en el mismo idioma, adaptando el tono tecnico, el glosario de arquitectura y los avisos de moderacion.

### 2. Notificaciones en Tres Niveles
- **Nivel 1 (Mencion Nativa Directa):**
  Inyecta en el pie del comentario una mencion explicita a `@Luics415`:
  > *(CC: @Luics415 para seguimiento)*
  *Efecto:* GitHub despacha de forma nativa notificaciones push al movil y un correo electronico.
- **Nivel 2 (GitHub Actions Step Summary):**
  Genera una tabla ejecutiva en el resumen de ejecucion de GitHub Actions (`$GITHUB_STEP_SUMMARY`) con metricas, enlaces directos y estado de escalamiento.
- **Nivel 3 (Mensaje Directo 1 a 1 en Discord):**
  Utilizando `DISCORD_BOT_TOKEN` y `DISCORD_USER_ID`, envia un DM instantaneo al chat privado de Discord con un embed profesional conteniendo detalles de la discusion, categoria, autor y enlace directo.

### 3. Deteccion y Escalamiento de Seguridad / Bugs
- Escanea patrones de vulnerabilidades (`vulnerability`, `exploit`, `cve`, `inyeccion`, `rce`, `token filtrado`, `compromised`) y fallas criticas (`memory leak`, `infinite loop`, `freeze`).
- Si detecta un riesgo:
  1. Agradece el reporte e informa al usuario que el caso ha sido escalado.
  2. Crea automaticamente un **Issue interno asignado a @Luics415** con etiqueta `escalado-centinela` y `seguridad` o `bug`, enlazando la discusion original.

### 4. Historial en Expediente de Auditoria
- Registra cada intervencion en `docs/FechaAgente/<YYYY-MM-DD>/centinela_discusiones.md` para metricas comunitarias, trazabilidad de soporte y preservacion historica.
