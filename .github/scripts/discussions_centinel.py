#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Agente Centinela de GitHub Discussions para Dev Visualizer (@Luics415).
Proporciona soporte autónomo, bilingüe (ES/EN) con respuestas técnicas contextualizadas,
formato prioritario en lista estructurada, prohibición estricta de diagramas simplistas,
ventana de espera humana de 10 minutos con notificación inmediata de borrador al mantenedor,
detección de intervención manual para cancelación automática, escalamiento de incidentes críticos,
3 niveles de notificación (mención, Step Summary, Discord DM 1 a 1 vía Bot) y registro en
expedientes fechados docs/FechaAgente/.
"""

import os
import sys
import json
import re
import time
import argparse
import urllib.request
import urllib.error
import subprocess
from datetime import datetime, timezone
from typing import Dict, Any, List, Optional, Tuple

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

OWNER_DEFAULT = "Luics415"
REPO_DEFAULT = "Luics415/Dev-Visualizer"
MIN_WAIT_MINUTES = 10.0


def log(msg: str):
    print(f"[CENTINELA-DEV-VISUALIZER] {msg}", flush=True)


def run_cmd(cmd: List[str], check: bool = True) -> str:
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8")
    if check and res.returncode != 0:
        raise RuntimeError(f"Comando falló: {' '.join(cmd)}\nError: {res.stderr}")
    return res.stdout.strip()


def gh_graphql(query: str, variables: Dict[str, Any]) -> Dict[str, Any]:
    cmd = ["gh", "api", "graphql", "-f", f"query={query}"]
    for k, v in variables.items():
        cmd.extend(["-F", f"{k}={v}"])
    raw = run_cmd(cmd)
    data = json.loads(raw)
    if "errors" in data and data["errors"]:
        raise RuntimeError(f"GraphQL errors: {data['errors']}")
    return data.get("data", {})


def parse_iso8601_utc(dt_str: Optional[str]) -> datetime:
    """Parsea una cadena ISO 8601 a un datetime timezone-aware en UTC."""
    if not dt_str:
        return datetime.now(timezone.utc)
    clean_str = dt_str.replace("Z", "+00:00")
    try:
        dt = datetime.fromisoformat(clean_str)
        if dt.tzinfo is None:
            return dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(timezone.utc)
    except Exception:
        return datetime.now(timezone.utc)


def detect_language(text: str) -> str:
    """Detecta si el texto está en inglés o en español."""
    t_lower = text.lower()
    english_markers = [
        " how ", " what ", " why ", " is ", " are ", " can ", " does ", " error ",
        " issue ", " please ", " help ", " thanks ", " thank you ", " problem ",
        " cannot ", " unable ", " where ", " when ", " looking for ", " advice ",
        " synchronize ", " synchronization ", " client-side ", " server-side "
    ]
    matches = sum(1 for m in english_markers if m in (" " + t_lower + " "))
    return "en" if matches >= 2 else "es"


def detect_security_or_bug_escalation(title: str, body: str) -> Optional[str]:
    """Detecta palabras clave de seguridad o fallas críticas que requieren escalamiento."""
    combined = (title + " " + body).lower()
    security_patterns = [
        r"\bvulnerabilidad\b", r"\bvulnerability\b", r"\bexploit\b", r"\binyecci[oó]n\b",
        r"\binjection\b", r"\bxss\b", r"\brce\b", r"\btoken\s+filtrado\b", r"\bleaked\s+token\b",
        r"\bkey\s+leak\b", r"\bsecreto\s+expuesto\b", r"\bseguridad\s+cr[ií]tica\b"
    ]
    bug_patterns = [
        r"\bbug\s+cr[ií]tico\b", r"\bcritical\s+bug\b", r"\bca[ií]da\s+del\s+sistema\b",
        r"\bmemoria\s+agotada\b", r"\bmemory\s+leak\b", r"\bfreeze\b", r"\bbucle\s+infinito\b",
        r"\binfinite\s+loop\b", r"\bdata\s+loss\b", r"\bp[eé]rdida\s+de\s+datos\b"
    ]

    for p in security_patterns:
        if re.search(p, combined):
            return "Seguridad / Security Vulnerability"
    for p in bug_patterns:
        if re.search(p, combined):
            return "Falla Crítica / Critical Bug"
    return None


def escalate_issue_to_github(discussion_num: int, discussion_title: str, url: str, reason: str, repo: str) -> Optional[int]:
    """Crea automáticamente un issue de escalamiento en GitHub."""
    title = f"[ESCALADO CENTINELA] {reason}: Discusión #{discussion_num}"
    body = f"""## Alerta de Escalamiento Autónomo — Agente Centinela

- **Origen:** GitHub Discussions #{discussion_num}
- **Título de la Discusión:** {discussion_title}
- **Enlace Directo:** {url}
- **Motivo del Escalamiento:** {reason}
- **Fecha UTC:** {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}
- **Asignado Sugerido:** @{OWNER_DEFAULT}

### Acción Requerida
Revisión prioritaria por el equipo de arquitectura y mantenimiento de Dev Visualizer.
"""
    labels = ["escalado-centinela", "bug" if "Bug" in reason else "seguridad"]
    log(f"Escalando discusión #{discussion_num} a GitHub Issues...")

    try:
        search_res = run_cmd(["gh", "issue", "list", "--repo", repo, "--search", f"Discusión #{discussion_num}", "--json", "number,title"], check=False)
        if search_res:
            issues = json.loads(search_res)
            if issues:
                log(f"Ya existe un issue de escalamiento abierto: #{issues[0]['number']}")
                return issues[0]["number"]

        cmd = [
            "gh", "issue", "create",
            "--repo", repo,
            "--title", title,
            "--body", body,
            "--label", ",".join(labels)
        ]
        out = run_cmd(cmd, check=False)
        m = re.search(r"/issues/(\d+)", out)
        if m:
            issue_num = int(m.group(1))
            log(f"Issue de escalamiento creado con éxito: #{issue_num}")
            return issue_num
    except Exception as e:
        log(f"Error al crear issue de escalamiento: {e}")
    return None


def get_or_open_discord_dm_channel(bot_token: str, user_id: str) -> Optional[str]:
    """Abre o recupera el canal de DM 1 a 1 de Discord con el usuario."""
    open_dm_url = "https://discord.com/api/v10/users/@me/channels"
    headers = {
        "Authorization": f"Bot {bot_token}",
        "Content-Type": "application/json",
        "User-Agent": "DevVisualizerCentinel/2.0"
    }
    channel_payload = json.dumps({"recipient_id": str(user_id)}).encode("utf-8")

    try:
        req = urllib.request.Request(open_dm_url, data=channel_payload, headers=headers, method="POST")
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data.get("id")
    except Exception as e:
        log(f"Error al abrir canal DM de Discord: {e}")
        return None


def send_discord_embed(bot_token: str, channel_id: str, embed: Dict[str, Any]) -> bool:
    """Envía un embed a un canal de Discord de forma segura respetando límites."""
    headers = {
        "Authorization": f"Bot {bot_token}",
        "Content-Type": "application/json",
        "User-Agent": "DevVisualizerCentinel/2.0"
    }
    send_msg_url = f"https://discord.com/api/v10/channels/{channel_id}/messages"
    message_payload = json.dumps({"embeds": [embed]}).encode("utf-8")

    try:
        req = urllib.request.Request(send_msg_url, data=message_payload, headers=headers, method="POST")
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.status in [200, 201]
    except Exception as e:
        log(f"Error al enviar mensaje a canal Discord {channel_id}: {e}")
        return False


def send_level_3_draft_notification(discussion_num: int, title: str, author: str, url: str, category: str, draft_text: str, wait_minutes_remaining: float, escalation: Optional[str] = None):
    """
    Nivel 3: Envío inmediato de borrador a Discord DM con aviso de la ventana de espera humana de 10 min.
    Permite al mantenedor (@Luics415) leer la propuesta y responder manualmente si así lo decide.
    """
    bot_token = os.environ.get("DISCORD_BOT_TOKEN")
    user_id = os.environ.get("DISCORD_USER_ID")
    if not bot_token or not user_id:
        return

    channel_id = get_or_open_discord_dm_channel(bot_token, user_id)
    if not channel_id:
        return

    # Truncar vista previa si excede el límite del campo en Discord
    preview = draft_text.strip()
    if len(preview) > 950:
        preview = preview[:920] + "\n... *(truncado para Discord)*"

    color = 0xFF5555 if escalation else 0xFEE75C  # Rojo si es crítico, Amarillo/Oro si es borrador en espera
    fields = [
        {"name": "💬 Discusión", "value": f"#{discussion_num} - {title}", "inline": False},
        {"name": "👤 Autor", "value": f"@{author}", "inline": True},
        {"name": "🏷️ Categoría", "value": category, "inline": True},
        {"name": "⏱️ Tiempo de Espera Restante", "value": f"**{wait_minutes_remaining:.1f} minutos** para intervención manual", "inline": False},
    ]

    if escalation:
        fields.append({"name": "🚨 Escalamiento Crítico", "value": f"**{escalation}**", "inline": False})

    fields.append({"name": "📝 Vista Previa del Borrador", "value": f"```markdown\n{preview}\n```", "inline": False})
    fields.append({"name": "🔗 Enlace Directo", "value": f"[Abrir Discusión en GitHub para responder tú mismo]({url})", "inline": False})

    embed = {
        "title": "📝 [BORRADOR CENTINELA] Ventana Humana de 10 Minutos Activa",
        "description": (
            f"El usuario **@{author}** abrió la discusión **#{discussion_num}**.\n\n"
            "Se ha generado un borrador técnico estructurado. Dispones de **10 minutos** para responder "
            "directamente en GitHub si prefieres atender la consulta personalmente. "
            "Si no intervienes antes de que expire la ventana, el Centinela publicará este borrador automáticamente."
        ),
        "color": color,
        "fields": fields,
        "footer": {
            "text": "Control Humano Previo a Publicación • Dev Visualizer • Luics415",
            "icon_url": "https://github.com/Luics415.png"
        },
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

    if send_discord_embed(bot_token, channel_id, embed):
        log(f"Nivel 3: Notificación de borrador (ventana de 10 min) despachada a Discord DM.")


def send_level_3_published_notification(discussion_num: int, title: str, author: str, url: str, category: str, escalation: Optional[str] = None):
    """Nivel 3: Notificación en Discord de que la respuesta ha sido publicada tras vencer el buffer de 10 min."""
    bot_token = os.environ.get("DISCORD_BOT_TOKEN")
    user_id = os.environ.get("DISCORD_USER_ID")
    if not bot_token or not user_id:
        return

    channel_id = get_or_open_discord_dm_channel(bot_token, user_id)
    if not channel_id:
        return

    color = 0x57F287  # Verde de éxito
    fields = [
        {"name": "💬 Discusión", "value": f"#{discussion_num} - {title}", "inline": False},
        {"name": "👤 Autor", "value": f"@{author}", "inline": True},
        {"name": "🏷️ Categoría", "value": category, "inline": True},
        {"name": "🔗 Enlace Directo", "value": f"[Ver Respuesta Publicada en GitHub]({url})", "inline": False}
    ]

    embed = {
        "title": "🚀 [PUBLICADO] Respuesta de Centinela Emitida con Éxito",
        "description": (
            f"Transcurrió la ventana de espera de 10 minutos sin intervención manual en la discusión **#{discussion_num}**.\n"
            "El Agente Centinela ha publicado la respuesta técnica estructurada."
        ),
        "color": color,
        "fields": fields,
        "footer": {
            "text": "Publicación Autónoma Concluida • Dev Visualizer • Luics415",
            "icon_url": "https://github.com/Luics415.png"
        },
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

    send_discord_embed(bot_token, channel_id, embed)


def send_level_3_cancelled_notification(discussion_num: int, title: str, author: str, url: str):
    """Nivel 3: Notificación en Discord de que el mantenedor respondió y se canceló la publicación automática."""
    bot_token = os.environ.get("DISCORD_BOT_TOKEN")
    user_id = os.environ.get("DISCORD_USER_ID")
    if not bot_token or not user_id:
        return

    channel_id = get_or_open_discord_dm_channel(bot_token, user_id)
    if not channel_id:
        return

    color = 0x5865F2  # Azul Discord
    fields = [
        {"name": "💬 Discusión", "value": f"#{discussion_num} - {title}", "inline": False},
        {"name": "👤 Intervención", "value": f"@{OWNER_DEFAULT} (Mantenedor)", "inline": True},
        {"name": "🔗 Enlace Directo", "value": f"[Ver Discusión en GitHub]({url})", "inline": False}
    ]

    embed = {
        "title": "✅ [CANCELADO] Intervención Humana Detectada",
        "description": (
            f"El mantenedor **@{OWNER_DEFAULT}** ha respondido personalmente en la discusión **#{discussion_num}** "
            "durante la ventana de 10 minutos.\n\n"
            "El borrador automático ha sido descartado para no duplicar ni entorpecer la interacción directa."
        ),
        "color": color,
        "fields": fields,
        "footer": {
            "text": "Prioridad Humana Confirmada • Dev Visualizer • Luics415",
            "icon_url": "https://github.com/Luics415.png"
        },
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

    send_discord_embed(bot_token, channel_id, embed)


def write_step_summary(discussion_num: int, title: str, author: str, lang: str, escalation: Optional[str], status_msg: str, reply_preview: str):
    """Nivel 2 de Notificación: Registro en $GITHUB_STEP_SUMMARY de GitHub Actions."""
    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if not summary_path:
        return

    status_icon = "🚨" if escalation else "✅"
    lines = [
        f"### {status_icon} Agente Centinela — Discusión #{discussion_num}",
        "",
        "| Parámetro | Detalle |",
        "| :--- | :--- |",
        f"| **Título** | {title} |",
        f"| **Autor** | @{author} |",
        f"| **Idioma detectado** | `{'Inglés' if lang == 'en' else 'Español'}` |",
        f"| **Estado Operativo** | `{status_msg}` |",
        f"| **Escalamiento** | `{escalation or 'Ninguno (Consulta estándar)'}` |",
        "",
        "#### Detalle del Contenido",
        "> " + reply_preview.replace("\n", "\n> "),
        "",
        "---",
        ""
    ]
    try:
        with open(summary_path, "a", encoding="utf-8") as f:
            f.write("\n".join(lines))
    except Exception as e:
        log(f"Error escribiendo en Step Summary: {e}")


def record_in_expediente(item: Dict[str, Any]):
    """Registra la actividad en el expediente fechado docs/FechaAgente/."""
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    folder = os.path.join("docs", "FechaAgente", today)
    os.makedirs(folder, exist_ok=True)

    expediente_file = os.path.join(folder, "centinela_discusiones.md")
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

    content = f"""
## [{timestamp}] Discusión #{item.get('number')} — {item.get('title')}
- **Autor:** @{item.get('author')}
- **Idioma:** {item.get('lang')}
- **Estado:** {item.get('status', 'Publicado')}
- **Escalamiento:** {item.get('escalation') or 'No requerido'}
- **Issue Asociado:** {f"#{item.get('issue_number')}" if item.get('issue_number') else 'N/A'}
- **Notificaciones:** Nivel 1 (Mención @{OWNER_DEFAULT}), Nivel 2 (Step Summary), Nivel 3 (Discord DM)

```markdown
{item.get('reply')}
```
---
"""
    try:
        with open(expediente_file, "a", encoding="utf-8") as f:
            f.write(content)
        log(f"Intervención registrada en expediente histórico: {expediente_file}")
    except Exception as e:
        log(f"Error escribiendo expediente: {e}")


def gather_repository_context() -> Dict[str, Any]:
    """Extrae el estado vivo del repositorio para alimentar el contexto del agente."""
    context: Dict[str, Any] = {
        "stack": "Next.js 16 (App Router) / React 19 / TypeScript / Motion (Framer Motion 14) / Tailwind CSS",
        "arquitectura": "Atlas Visual Educativo con 73 colecciones, 146 rutas técnicas, animaciones interactivas, audio narración didáctica y quizzes técnicos",
        "habilidades": ["01-definir", "02-planificar", "03-construir", "04-verificar", "05-revisar", "06-aprobar", "07-centinela"],
        "seguridad": "Secretos gestionados en GitHub Secrets; gitleaks y orquestador maestro",
        "proposito": "Transformar conceptos complejos de computación, arquitecturas y algoritmos en explicaciones visuales autónomas y accesibles"
    }

    if os.path.isfile("package.json"):
        try:
            with open("package.json", "r", encoding="utf-8") as f:
                pkg = json.load(f)
                context["dependencies"] = list(pkg.get("dependencies", {}).keys())
                context["devDependencies"] = list(pkg.get("devDependencies", {}).keys())
        except Exception as e:
            log(f"Aviso al leer package.json: {e}")

    try:
        log_out = run_cmd(["git", "log", "-n", "3", "--oneline"], check=False)
        if log_out:
            context["ultimos_commits"] = log_out.splitlines()
    except Exception:
        pass

    return context


def get_discussion_details(repo_owner: str, repo_name: str, discussion_num: int) -> Dict[str, Any]:
    query = """
    query($owner: String!, $name: String!, $num: Int!) {
      repository(owner: $owner, name: $name) {
        discussion(number: $num) {
          id
          number
          title
          body
          url
          createdAt
          category { name }
          author { login }
          comments(first: 30) {
            nodes {
              id
              body
              author { login }
              createdAt
            }
          }
        }
      }
    }
    """
    res = gh_graphql(query, {"owner": repo_owner, "name": repo_name, "num": str(discussion_num)})
    disc = res.get("repository", {}).get("discussion")
    if not disc:
        raise ValueError(f"No se encontró la discusión #{discussion_num}")
    disc["number"] = discussion_num
    return disc


def get_open_discussions(repo_owner: str, repo_name: str, limit: int = 10) -> List[Dict[str, Any]]:
    query = """
    query($owner: String!, $name: String!, $limit: Int!) {
      repository(owner: $owner, name: $name) {
        discussions(first: $limit, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            number
            title
            body
            url
            createdAt
            category { name }
            author { login }
            comments(first: 20) {
              nodes {
                id
                body
                author { login }
                createdAt
              }
            }
          }
        }
      }
    }
    """
    res = gh_graphql(query, {"owner": repo_owner, "name": repo_name, "limit": str(limit)})
    return res.get("repository", {}).get("discussions", {}).get("nodes", [])


def needs_response(discussion: Dict[str, Any], bot_logins: List[str]) -> bool:
    """Evalúa si la discusión requiere atención o ya fue respondida."""
    author_login = (discussion.get("author") or {}).get("login", "")
    # Si la discusión fue abierta por el mantenedor, no responder de forma autónoma
    if author_login.lower() == OWNER_DEFAULT.lower():
        return False

    comments = discussion.get("comments", {}).get("nodes", [])
    if not comments:
        return True

    # Si algún comentario previo fue hecho por el mantenedor o el bot, no responder de nuevo
    for c in comments:
        c_author = (c.get("author") or {}).get("login", "")
        if c_author.lower() in [b.lower() for b in bot_logins]:
            return False

    return True


def call_gemini_api(prompt: str, api_key: str) -> Optional[str]:
    """Invoca la API de Gemini utilizando modelos actualizados y encabezados oficiales."""
    models = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"]
    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.2,
                "maxOutputTokens": 2048,
            }
        }
        data = json.dumps(payload).encode("utf-8")
        headers = {
            "Content-Type": "application/json",
            "x-goog-api-key": api_key
        }
        req = urllib.request.Request(url, data=data, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                if resp.status == 200:
                    res_body = json.loads(resp.read().decode("utf-8"))
                    candidates = res_body.get("candidates", [])
                    if candidates:
                        text = candidates[0].get("content", {}).get("parts", [{}])[0].get("text", "")
                        if text:
                            return text.strip()
        except Exception as e:
            log(f"Aviso: Fallo con modelo {model} en Gemini API: {e}")
            continue
    return None


def synthesize_project_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], lang: str = "es", escalation: Optional[str] = None) -> str:
    """
    Motor de síntesis contextual de alta fidelidad técnica.
    Cumple los estándares solicitados por el mantenedor:
    1. La mayor parte del texto está estructurada en un listado técnico detallado y numerado.
    2. Cero diagramas simplistas o artificiales; respuesta profunda que honra la complejidad de la pregunta.
    3. Cita exclusivamente archivos, componentes y rutas reales del repositorio.
    """
    q_lower = (discussion_title + " " + query_text).lower()

    if lang == "en":
        if escalation:
            return f"""Hello @{author}! Thank you for bringing this to our attention.

We have detected that this inquiry touches on a critical topic ({escalation}). We take stability and security with the utmost seriousness.

1. **Automatic Triage:** This incident has been logged and escalated to @{OWNER_DEFAULT} via our internal security and bug tracking pipeline for priority inspection.
2. **Repository Safeguards:** Our CI/CD pipelines run automated static audits (`gitleaks`, `npm audit`) and quality gates across all 73 collections before any code reaches production.
3. **Next Steps & Diagnostics:** To accelerate resolution, please share any reproducible console error traces, exact browser version, or step-by-step reproduction scenarios in this thread.

We will provide updates as soon as the initial diagnostic review is completed."""

        # Audiovisual Synchronization & Animations (60fps + Audio Narration)
        if any(k in q_lower for k in ["synchronize", "synchronization", "speech", "speechsynthesis", "audio", "narrat", "animation", "canvas", "motion", "render", "fps", "performance", "60fps"]):
            return f"""Hello @{author}! Thank you for your question regarding audiovisual synchronization in Dev Visualizer.

Dev Visualizer coordinates 60fps real-time visual rendering with client-side SpeechSynthesis narration across all 73 technical collections through a decoupled, state-driven architecture:

1. **Decoupled Render Loop & Thread Isolation:**
   - Visual animations are orchestrated via Motion (Framer Motion 14) and CSS hardware-accelerated transforms (`transform`, `opacity`) running at 60fps via `requestAnimationFrame` on the GPU compositor thread.
   - Voice narration runs entirely through the browser's native Web Speech API (`SpeechSynthesis`) in a separate background audio thread managed by our singleton engine in [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts).
   - Because the audio and visual engines are decoupled, speech synthesis processing never blocks or drops frames in the 60fps visual rendering loop.

2. **Chunked Sentence Narration (`splitTextIntoNarrationChunks`):**
   - In [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts), all narration text is split into concise phonetic units (<= 140 characters) delimited by punctuation boundaries (`.`, `!`, `?`, `;`, `,`).
   - This prevents the known Chromium/Android Web Speech API buffer freeze bug (where utterances exceeding 15 seconds silently stop speaking) without requiring disruptive pause/resume audio heartbeats.

3. **Garbage Collection Immunity (`activeUtterancesSet`):**
   - Chromium-based engines tend to garbage-collect active `SpeechSynthesisUtterance` instances mid-playback if they are scoped locally.
   - We maintain a module-level `Set<SpeechSynthesisUtterance>` retaining the active utterance until its native `end` or `error` callbacks fire.

4. **SSR-Safe State Machine & React 19 Hydration (`useSyncExternalStore`):**
   - The narrator exposes an immutable `AudioNarratorSnapshot` consumed by UI controls such as [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx).
   - We use React's `useSyncExternalStore` with strict server/client snapshot separation to guarantee safe hydration across 350+ statically pre-rendered pages in Next.js 16 App Router.

5. **Lifecycle Resilience & Tab Visibility:**
   - The engine binds to `document.visibilitychange`. When switching tabs, narration automatically pauses to prevent out-of-sync audio progress and resumes seamlessly when the tab is restored.

6. **Accessibility & WCAG Reduced Motion Compliance:**
   - All visual transitions respect `prefers-reduced-motion: reduce`. When active, animations collapse into instantaneous state updates while speech narration remains available as an accessible alternative.
   - Comprehensive animation auditing guidelines are documented in [`docs/AUDITORIA_VISUAL_EN_ACCION.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDITORIA_VISUAL_EN_ACCION.md)."""

        # Secrets, Security & Governance
        if any(k in q_lower for k in ["secret", ".env", "gitleaks", "git-secrets", "vault", "token", "leak", "security"]):
            return f"""Hi @{author}! Thank you for reaching out regarding security governance in Dev Visualizer:

1. **Zero Client Secrets Policy:** Dev Visualizer is a client-side visualization application built on Next.js 16 and React 19. No private runtime keys, database passwords, or server credentials are ever bundled into client assets.
2. **Isolated GitHub Secrets:** Automated bot tokens and AI credentials (`DISCORD_BOT_TOKEN`, `GEMINI_API_KEY`, `LUICS_PAT`) reside exclusively in encrypted GitHub Secrets and are only injected during ephemeral GitHub Actions runs.
3. **Pre-Commit and CI Audit Gates:** Every pull request is verified via static analysis tools (`gitleaks`, `npm audit`) and governed by our 6-phase master orchestrator to prevent inadvertent credential leakage.
4. **Automated Triage:** Inquiries flagged with security keywords trigger an immediate high-priority issue assigned directly to @{OWNER_DEFAULT}."""

        # Quizzes & Gamification
        if any(k in q_lower for k in ["quiz", "badge", "relic", "score", "trophy", "gamification"]):
            return f"""Hi @{author}! Thank you for your interest in the interactive quiz and badge architecture of Dev Visualizer:

1. **Client-Side Persistence:** Quiz progress, accuracy scores, and unlocked relic badges are stored in browser `localStorage` with zero tracking cookies and zero third-party telemetry.
2. **Contextual Pedagogical Feedback:** Each question provides real-time explanations reinforcing theoretical foundations right after an answer is submitted.
3. **Modular Runner Architecture:** Quizzes are rendered using dedicated runners in `src/components/quiz/` supporting keyboard navigation, a11y labels, and responsive mobile layouts."""

        # Default English Response (Architecture & Catalog)
        return f"""Hi @{author}! Thank you for your interest in Dev Visualizer.

Here is a technical breakdown of how the project is architected:

1. **Frontend Architecture:** Next.js 16 (App Router) with React 19, TypeScript, Tailwind CSS, and Motion (Framer Motion 14) configured for high-performance static export (`output: "export"`).
2. **Educational Scope:** 73 technical collections and 146 interactive visual routes covering computer architecture, systems programming, databases, cloud, and modern languages.
3. **Audiovisual Synchronization:** Decoupled 60fps animations paired with an in-house Web Speech API narration engine (`src/lib/audioNarrator.ts`).
4. **Quality Gates:** Automated verification scripts (`npm run check:links`, `npm run check:library`, `npm run check:a11y`, `npm run build`) ensuring total type safety and zero broken references across 350+ pre-rendered pages.
5. **Technical Guidelines:** Detailed architectural documentation is available in [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""

    # Spanish responses
    if escalation:
        return f"""¡Hola @{author}! Gracias por comunicarnos esta situación.

Hemos detectado que esta consulta refiere a un tema crítico ({escalation}). Tratamos la estabilidad y seguridad con la máxima prioridad.

1. **Triaje y Escalamiento Automático:** El caso ha sido registrado y escalado a @{OWNER_DEFAULT} mediante nuestro flujo interno de seguimiento de incidencias para revisión prioritaria.
2. **Compuertas de Calidad:** Todo cambio en el repositorio es auditado por herramientas estáticas (`gitleaks`, `npm audit`) antes de su integración en producción.
3. **Siguientes Pasos:** Si dispones de detalles adicionales como capturas, versión de navegador o trazas de consola, compártelos en este hilo para acelerar el diagnóstico."""

    # Sincronización Audiovisual, Animaciones y Motor de Audio
    if any(k in q_lower for k in ["sincroniza", "sincronizar", "speech", "speechsynthesis", "audio", "narrac", "animac", "canvas", "motion", "render", "fps", "rendimiento", "60fps"]):
        return f"""¡Hola @{author}! Gracias por tu consulta sobre la sincronización audiovisual en Dev Visualizer.

Dev Visualizer coordina renderizado visual a 60fps con narración por voz cliente (`SpeechSynthesis`) a lo largo de las 73 colecciones mediante la siguiente arquitectura desacoplada:

1. **Desacoplamiento de Hilos y Render a 60fps:**
   - Las animaciones visuales operan mediante Motion (Framer Motion 14) y transformaciones aceleradas por hardware (`transform`, `opacity`) en el compositor de la GPU a través de `requestAnimationFrame`.
   - La narración auditiva corre sobre la Web Speech API nativa del navegador en un hilo de audio independiente, administrada por el singleton [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts).
   - Al estar desacoplados, los tiempos de inicialización del sintetizador de voz jamás bloquean ni provocan caídas de cuadros en las animaciones visuales.

2. **Chunking Fonético Inteligente (`splitTextIntoNarrationChunks`):**
   - El motor [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts) divide el guion en bloques fonéticos breves (<= 140 caracteres) mediante signos de puntuación (`.`, `!`, `?`, `;`, `,`).
   - Esto evita de raíz el congelamiento de buffer en Chromium/Android (donde locuciones mayores a 15 segundos se detienen silenciosamente sin disparar `onend`), eliminando la necesidad de heartbeats de pause/resume.

3. **Inmunidad al Recolector de Basura (`activeUtterancesSet`):**
   - En navegadores Chromium, las instancias de `SpeechSynthesisUtterance` pueden ser recolectadas por el Garbage Collector de V8 en plena reproducción si no tienen una referencia activa en memoria.
   - El sistema almacena cada locución en un `Set<SpeechSynthesisUtterance>` a nivel de módulo hasta la finalización formal de su evento `end` o `error`.

4. **Hidratación Segura en React 19 y Next.js 16 (`useSyncExternalStore`):**
   - El estado de reproducción expone un `AudioNarratorSnapshot` inmutable consumido por componentes como [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx).
   - Empleamos `useSyncExternalStore` para prevenir inconsistencias de hidratación entre el render de servidor estático y el cliente.

5. **Resiliencia al Cambio de Pestaña:**
   - El motor escucha `document.visibilitychange`. Al cambiar de pestaña, la narración se pausa automáticamente para evitar desfasaje con la vista y se reanuda de forma transparente al regresar.

6. **Accesibilidad y Reducción de Movimiento (WCAG):**
   - Se respeta la directiva `prefers-reduced-motion: reduce`. Las animaciones se convierten en saltos de estado inmediatos mientras la locución por voz permanece como soporte accesible.
   - El registro de auditoría visual se encuentra documentado en [`docs/AUDITORIA_VISUAL_EN_ACCION.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDITORIA_VISUAL_EN_ACCION.md)."""

    # Secretos y Seguridad
    if any(k in q_lower for k in ["secreto", ".env", "gitleaks", "git-secrets", "vault", "token", "fuga", "seguridad"]):
        return f"""¡Hola @{author}! Con gusto clarificamos la gestión de seguridad en Dev Visualizer:

1. **Aislamiento en Cliente:** Dev Visualizer es una aplicación estática interactiva construida con Next.js 16 y React 19. No se compilan claves privadas, credenciales maestras ni tokens de backend en el bundle de cliente.
2. **Secretos en GitHub:** Las credenciales de automatización (`DISCORD_BOT_TOKEN`, `GEMINI_API_KEY`, `LUICS_PAT`) residen en GitHub Secrets y se usan exclusivamente en entornos de CI/CD aislados.
3. **Compuerta Preventiva:** Todo commit y Pull Request es auditado estáticamente por `gitleaks` y `npm audit` bajo el orquestador maestro para evitar fugas de información.
4. **Respuesta Inmediata:** Ante cualquier reporte de seguridad, el sistema genera automáticamente un issue prioritario asignado a @{OWNER_DEFAULT}."""

    # Quizzes y Gamificación
    if any(k in q_lower for k in ["quiz", "insignia", "reliquia", "puntaje", "gamificacion"]):
        return f"""¡Hola @{author}! Te compartimos el diseño del sistema de evaluación técnica en Dev Visualizer:

1. **Persistencia Local:** Los puntajes y reliquias desbloqueadas se guardan en el `localStorage` del navegador, sin cookies de rastreo ni telemetría invasiva.
2. **Retroalimentación Didáctica:** Cada reactivo ofrece explicaciones técnicas inmediatas al responder para reforzar conceptos de ingeniería.
3. **Componentes Accesibles:** Los quizzes residen en `src/components/quiz/` y cuentan con navegación por teclado y contraste adecuado."""

    # General en Español
    return f"""¡Hola @{author}! Gracias por tu interés en Dev Visualizer.

A continuación detallamos los pilares arquitectónicos del proyecto:

1. **Core de Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS y Motion (Framer Motion 14) con exportación estática de alto rendimiento (`output: "export"`).
2. **Catálogo Educativo:** 73 colecciones interactivas y 146 rutas técnicas cubriendo fundamentos, arquitecturas de sistemas, bases de datos y lenguajes modernos.
3. **Experiencia Audiovisual:** Animaciones interactivas a 60fps sincronizadas con motor de narración auditiva en cliente (`src/lib/audioNarrator.ts`).
4. **Aseguramiento de Calidad:** Pipeline automatizado de verificación (`npm run check:links`, `npm run check:library`, `npm run check:a11y`, `npm run build`) sobre más de 350 páginas estáticas.
5. **Documentación:** Puedes explorar la arquitectura completa en [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""


def generate_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], escalation: Optional[str] = None) -> Tuple[str, str]:
    """Genera la respuesta contextualizada utilizando Gemini API si está disponible, o el motor de síntesis local."""
    lang = detect_language(discussion_title + " " + query_text)
    api_key = os.environ.get("GEMINI_API_KEY")

    if api_key and not escalation:
        system_instruction = f"""Eres el Agente Centinela de Soporte Técnico para el proyecto 'Dev Visualizer' de @{OWNER_DEFAULT}.
Dev Visualizer es un atlas visual interactivo educativo con 73 colecciones y 146 rutas técnicas, desarrollado con Next.js 16 (App Router), React 19, TypeScript y Motion.
Debes responder de forma técnica, empática, rigurosa y en el idioma de la consulta ({'inglés' if lang == 'en' else 'español'}).

REGLAS OBLIGATORIAS:
1. Saludo cordial y directo a @{author}.
2. FORMATO OBLIGATORIO: Estructura la mayor parte de la respuesta en una LISTA NUMERADA o de viñetas técnicas detalladas (evita párrafos largos y genéricos).
3. PROHIBIDO GENERAR DIAGRAMAS: No incluyas diagramas ASCII, esquemas de caracteres ni bloques Mermaid. Responde preguntas complejas con profundidad técnica explicativa rigurosa en el listado.
4. Cita componentes, archivos reales o rutas de documentación existentes en el repositorio (ej. `src/lib/audioNarrator.ts`, `src/components/audio/FloatingAudioBubble.tsx`, `docs/AUDITORIA_VISUAL_EN_ACCION.md`, `README.md`, `package.json`). Jamás inventes archivos inexistentes.
5. Explica con precisión los mecanismos reales del proyecto (Next.js 16 App Router, React 19, Motion para render a 60fps con transform/opacity en GPU, AudioNarrator con Web Speech API, chunking de frases <=140 caracteres para estabilidad en Android/Chromium, useSyncExternalStore para hidratación SSR).
6. Nivel 1 de notificación: Menciona a @{OWNER_DEFAULT} para seguimiento al final.
7. Concluye con cordialidad profesional."""

        prompt = f"{system_instruction}\n\nContexto del proyecto: {json.dumps(context)}\nTítulo de la discusión: {discussion_title}\nConsulta de @{author}: {query_text}\n\nRespuesta:"
        gemini_reply = call_gemini_api(prompt, api_key)
        if gemini_reply:
            if f"@{OWNER_DEFAULT}" not in gemini_reply:
                gemini_reply += f"\n\n*(CC: @{OWNER_DEFAULT} para seguimiento)*"
            return gemini_reply, lang

    reply = synthesize_project_response(discussion_title, query_text, author, context, lang, escalation)
    if f"@{OWNER_DEFAULT}" not in reply:
        reply += f"\n\n*(CC: @{OWNER_DEFAULT} para seguimiento)*"
    return reply, lang


def post_reply(discussion_id: str, body: str) -> str:
    """Publica un comentario en la discusión mediante GraphQL."""
    mutation = """
    mutation($discussionId: ID!, $body: String!) {
      addDiscussionComment(input: {discussionId: $discussionId, body: $body}) {
        comment {
          id
          url
        }
      }
    }
    """
    res = gh_graphql(mutation, {"discussionId": discussion_id, "body": body})
    return res.get("addDiscussionComment", {}).get("comment", {}).get("url", "")


def parse_arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Agente Centinela de GitHub Discussions para Dev Visualizer")
    parser.add_argument("--discussion-number", type=int, default=None, help="Número específico de discusión a procesar")
    parser.add_argument("--dry-run", action="store_true", help="Modo simulación (sin publicar en GitHub ni enviar notificaciones de mutación)")
    parser.add_argument("--force", action="store_true", help="Forzar respuesta aunque ya esté contestada")
    parser.add_argument("--no-wait", action="store_true", help="Omitir ventana de espera de 10 minutos (útil para pruebas o ejecuciones de emergencia)")
    return parser.parse_args()


def main():
    args = parse_arguments()
    repo = os.environ.get("GITHUB_REPOSITORY", REPO_DEFAULT)
    parts = repo.split("/")
    repo_owner = parts[0] if len(parts) > 0 else OWNER_DEFAULT
    repo_name = parts[1] if len(parts) > 1 else "Dev-Visualizer"

    bot_logins = [OWNER_DEFAULT, "github-actions", "copilot", "bot"]

    event_path = os.environ.get("GITHUB_EVENT_PATH")
    single_num = args.discussion_number

    if not single_num and event_path and os.path.isfile(event_path):
        try:
            with open(event_path, "r", encoding="utf-8") as f:
                event_data = json.load(f)
                if "discussion" in event_data:
                    single_num = event_data["discussion"].get("number")
                    log(f"Disparado por evento de discusión #{single_num}")
        except Exception as e:
            log(f"Aviso al parsear GITHUB_EVENT_PATH: {e}")

    context = gather_repository_context()
    discussions_to_check = []

    if single_num:
        try:
            d = get_discussion_details(repo_owner, repo_name, single_num)
            discussions_to_check.append(d)
        except Exception as e:
            log(f"Error al obtener detalles de #{single_num}: {e}")
    else:
        log("Ejecución programada o manual: Consultando últimas discusiones abiertas...")
        discussions_to_check = get_open_discussions(repo_owner, repo_name, limit=10)

    log(f"Total de discusiones evaluadas: {len(discussions_to_check)}")

    for disc in discussions_to_check:
        num = disc.get("number")
        title = disc.get("title", "")
        body = disc.get("body", "")
        disc_id = disc.get("id")
        url = disc.get("url", "")
        created_at_str = disc.get("createdAt")
        category = (disc.get("category") or {}).get("name", "General")
        author = (disc.get("author") or {}).get("login", "comunidad")

        if not disc_id:
            try:
                disc = get_discussion_details(repo_owner, repo_name, num)
                disc_id = disc.get("id")
                body = disc.get("body", "")
                created_at_str = disc.get("createdAt")
            except Exception:
                continue

        if not args.force and not needs_response(disc, bot_logins):
            log(f"Discusión #{num} ya atendida o creada por mantenedor. Omitiendo.")
            continue

        log(f"Procesando discusión #{num}: '{title}' de @{author}")

        # Detectar escalamiento de seguridad o fallas críticas
        escalation = detect_security_or_bug_escalation(title, body)
        issue_number = None

        if escalation and not args.dry_run:
            log(f"⚠️ Alerta: Escalamiento detectado para #{num}: {escalation}")
            issue_number = escalate_issue_to_github(num, title, url, escalation, repo)

        # Generar respuesta técnica estructurada
        reply_body, lang = generate_response(title, body, author, context, escalation)

        # Cálculo de la ventana de espera humana (10 minutos desde la creación de la discusión)
        created_dt = parse_iso8601_utc(created_at_str)
        now_utc = datetime.now(timezone.utc)
        elapsed_seconds = max(0.0, (now_utc - created_dt).total_seconds())
        target_wait_seconds = MIN_WAIT_MINUTES * 60.0

        if args.dry_run:
            log(f"[DRY-RUN] Simulación de respuesta para #{num}:")
            print(reply_body)
            continue

        # Envío inmediato del borrador a Discord DM (Nivel 3)
        remaining_wait_minutes = max(0.0, (target_wait_seconds - elapsed_seconds) / 60.0)
        send_level_3_draft_notification(
            discussion_num=num,
            title=title,
            author=author,
            url=url,
            category=category,
            draft_text=reply_body,
            wait_minutes_remaining=remaining_wait_minutes,
            escalation=escalation
        )

        # Aplicar el buffer de espera si aún no han pasado 10 minutos
        if elapsed_seconds < target_wait_seconds and not args.no_wait:
            wait_time = target_wait_seconds - elapsed_seconds
            log(f"Iniciando ventana de espera de 10 minutos ({wait_time:.1f} segundos restantes) para permitir revisión humana de @{OWNER_DEFAULT}...")
            time.sleep(wait_time)

            # Tras la espera, verificar si el mantenedor respondió en persona
            log(f"Ventana de espera concluida. Verificando si @{OWNER_DEFAULT} intervino manualmente...")
            try:
                disc_fresh = get_discussion_details(repo_owner, repo_name, num)
                fresh_comments = disc_fresh.get("comments", {}).get("nodes", [])
                maintainer_replied = any(
                    (c.get("author") or {}).get("login", "").lower() == OWNER_DEFAULT.lower()
                    for c in fresh_comments
                )
                if maintainer_replied:
                    log(f"Intervención manual de @{OWNER_DEFAULT} detectada en #{num}. Cancelando publicación automática.")
                    send_level_3_cancelled_notification(num, title, author, url)
                    write_step_summary(num, title, author, lang, escalation, "Cancelado por intervención manual del mantenedor", reply_body[:300] + "...")
                    record_in_expediente({
                        "number": num,
                        "title": title,
                        "author": author,
                        "lang": lang,
                        "status": "Cancelado por intervención manual de @Luics415",
                        "escalation": escalation,
                        "issue_number": issue_number,
                        "reply": reply_body
                    })
                    continue
            except Exception as e:
                log(f"Aviso al verificar intervención manual tras la espera: {e}")

        # Publicar comentario en GitHub Discussions tras la ventana de 10 minutos
        try:
            comment_url = post_reply(disc_id, reply_body)
            log(f"Respuesta publicada exitosamente en #{num}: {comment_url}")
        except Exception as e:
            log(f"Error al publicar respuesta en #{num}: {e}")
            continue

        # Nivel 2: Step Summary
        write_step_summary(num, title, author, lang, escalation, "Publicado automáticamente tras buffer de 10 minutos", reply_body[:300] + "...")

        # Nivel 3: Discord DM de confirmación de publicación
        send_level_3_published_notification(num, title, author, url, category, escalation)

        # Registro en expediente histórico
        record_in_expediente({
            "number": num,
            "title": title,
            "author": author,
            "lang": lang,
            "status": "Publicado tras ventana de 10 minutos",
            "escalation": escalation,
            "issue_number": issue_number,
            "reply": reply_body
        })

    log("Ciclo de Agente Centinela concluido con éxito.")


if __name__ == "__main__":
    main()
