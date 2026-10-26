---
name: dev-visualizer-centinela
description: >-
  Habilidad del Agente Centinela de GitHub Discussions para Dev Visualizer. Gestiona respuestas automáticas contextualizadas en 3 niveles de notificación, soporte bilingüe, formato estructurado en listado, ventana humana de 10 minutos con borrador previo, escalamiento de incidentes y expediente histórico.
---

# Skill: Centinela de GitHub Discussions para Dev Visualizer (Soporte Autónomo y Escalamiento)

Esta habilidad dota a **Dev Visualizer** de un **Agente Centinela Autónomo** para atender preguntas y debates en GitHub Discussions con contexto vivo del proyecto (Next.js 16, React 19, Motion, Atlas de 73 colecciones y 146 rutas técnicas), soporte bilingüe, excelencia textual y trazabilidad completa.

---

## Capacidades Operativas

### 1. Soporte Bilingüe y Calidad de Respuesta
- Analiza el texto de la duda y detecta si está formulada en español o inglés.
- **Estructura en Listado:** La mayor parte del contenido se entrega en una lista numerada o con viñetas técnicas detalladas, facilitando la asimilación conceptual.
- **Sin Diagramas Simplistas:** No se generan diagramas ASCII ni bloques Mermaid artificiales. Las cuestiones complejas se responden con profundidad técnica y rigor fundamentado en componentes reales (`src/lib/audioNarrator.ts`, `src/components/audio/FloatingAudioBubble.tsx`, `docs/AUDITORIA_VISUAL_EN_ACCION.md`, etc.).

### 2. Ventana de Espera Humana de 10 Minutos y Borrador Inmediato
- Al registrarse una consulta, el agente genera de inmediato la respuesta en formato de borrador.
- **Aviso Inmediato al Mantenedor:** Despacha un DM a Discord con el borrador y una cuenta regresiva de 10 minutos.
- **Percepción Humana Real:** El agente espera un mínimo de 10 minutos antes de publicar en Discussions para transmitir la confianza de que el mantenedor (`@Luics415`) se tomó el tiempo de leer, reflexionar y redactar la respuesta.
- **Cancelación por Intervención Humana:** Si `@Luics415` responde personalmente en la discusión durante esos 10 minutos, el agente detecta el comentario, cancela la publicación autónoma y descarta el borrador.
- **Publicación Autónoma:** Si el mantenedor no responde tras los 10 minutos, el agente publica la respuesta de inmediato.

### 3. Notificaciones en Tres Niveles
- **Nivel 1 (Mención Nativa Directa):**
  Inyecta en el pie del comentario una mención explícita a `@Luics415`:
  > *(CC: @Luics415 para seguimiento)*
  *Efecto:* GitHub despacha notificaciones push al móvil y correo electrónico.
- **Nivel 2 (GitHub Actions Step Summary):**
  Genera una tabla ejecutiva en el resumen de ejecución de GitHub Actions (`$GITHUB_STEP_SUMMARY`) con métricas, enlaces directos y estado operativo.
- **Nivel 3 (Mensaje Directo 1 a 1 en Discord):**
  Utilizando `DISCORD_BOT_TOKEN` y `DISCORD_USER_ID`, envía un DM instantáneo al chat privado de Discord con un embed profesional conteniendo detalles de la discusión, categoría, autor, enlace directo y estado de la ventana de espera (Borrador, Publicado o Cancelado).

### 4. Detección y Escalamiento de Seguridad / Bugs
- Escanea patrones de vulnerabilidades (`vulnerability`, `exploit`, `cve`, `inyección`, `rce`, `token filtrado`) y fallas críticas (`memory leak`, `infinite loop`, `freeze`).
- Si detecta un riesgo:
  1. Agradece el reporte e informa al usuario que el caso ha sido escalado.
  2. Crea automáticamente un **Issue interno asignado a @Luics415** con etiqueta `escalado-centinela` y `seguridad` o `bug`, enlazando la discusión original.

### 5. Historial en Expediente de Auditoría
- Registra cada intervención en `docs/FechaAgente/<YYYY-MM-DD>/centinela_discusiones.md` para métricas comunitarias, trazabilidad de soporte y preservación histórica.
