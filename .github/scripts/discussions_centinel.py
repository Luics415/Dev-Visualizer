#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Agente Centinela de GitHub Discussions para Dev Visualizer (@Luics415).
Proporciona soporte autónomo, bilingüe (ES/EN) con respuestas técnicas contextualizadas
en párrafos densos, naturales y meticulosos (minimizando listas), prohibición estricta de diagramas,
ventana de espera humana de 10 minutos con notificación inmediata de borrador al mantenedor vía Discord DM,
detección de intervención manual para cancelación automática, diagnóstico detallado de Gemini API,
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
        " synchronize ", " synchronization ", " client-side ", " server-side ",
        " could you ", " would love ", " architected ", " design decision "
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
        "User-Agent": "DevVisualizerCentinel/2.1"
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
        "User-Agent": "DevVisualizerCentinel/2.1"
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

    preview = draft_text.strip()
    if len(preview) > 950:
        preview = preview[:920] + "\n... *(truncado para Discord)*"

    color = 0xFF5555 if escalation else 0xFEE75C
    fields = [
        {"name": "💬 Discusión", "value": f"#{discussion_num} - {title}", "inline": False},
        {"name": "👤 Autor", "value": f"@{author}", "inline": True},
        {"name": "🏷️ Categoría", "value": category, "inline": True},
        {"name": "⏱️ Tiempo Restante de Espera", "value": f"**{wait_minutes_remaining:.1f} minutos** para respuesta manual", "inline": False},
    ]

    if escalation:
        fields.append({"name": "🚨 Escalamiento Crítico", "value": f"**{escalation}**", "inline": False})

    fields.append({"name": "📝 Vista Previa del Borrador (Párrafos Densos)", "value": f"```markdown\n{preview}\n```", "inline": False})
    fields.append({"name": "🔗 Enlace Directo", "value": f"[Abrir Discusión en GitHub para responder tú mismo]({url})", "inline": False})

    embed = {
        "title": "📝 [BORRADOR CENTINELA] Ventana Humana de 10 Minutos Activa",
        "description": (
            f"El usuario **@{author}** abrió la discusión **#{discussion_num}**.\n\n"
            "Se ha generado un borrador técnico meticuloso. Dispones de **10 minutos** para responder "
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
        log("Nivel 3: Notificación de borrador (ventana de 10 min) despachada a Discord DM.")


def send_level_3_published_notification(discussion_num: int, title: str, author: str, url: str, category: str, escalation: Optional[str] = None):
    """Nivel 3: Notificación en Discord de que la respuesta ha sido publicada tras vencer el buffer de 10 min."""
    bot_token = os.environ.get("DISCORD_BOT_TOKEN")
    user_id = os.environ.get("DISCORD_USER_ID")
    if not bot_token or not user_id:
        return

    channel_id = get_or_open_discord_dm_channel(bot_token, user_id)
    if not channel_id:
        return

    color = 0x57F287
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
            "El Agente Centinela ha publicado la respuesta técnica en prosa elaborada."
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

    color = 0x5865F2
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
    """Extrae el estado vivo y meticuloso del repositorio para alimentar el contexto del agente."""
    context: Dict[str, Any] = {
        "stack": "Next.js 16 (App Router) / React 19 / TypeScript / Motion (Framer Motion 14) / Tailwind CSS",
        "arquitectura": "Atlas Visual Educativo con 73 colecciones, 146 rutas técnicas, animaciones interactivas a 60fps, audio narración didáctica en cliente y quizzes técnicos con persistencia local",
        "habilidades": ["01-definir", "02-planificar", "03-construir", "04-verificar", "05-revisar", "06-aprobar", "07-centinela"],
        "seguridad": "Secretos gestionados en GitHub Secrets; gitleaks y orquestador maestro",
        "proposito": "Transformar conceptos complejos de computación, arquitecturas y algoritmos en explicaciones visuales autónomas y accesibles"
    }

    if os.path.isfile("package.json"):
        try:
            with open("package.json", "r", encoding="utf-8") as f:
                pkg = json.load(f)
                context["version"] = pkg.get("version", "1.1.0")
                context["dependencies"] = list(pkg.get("dependencies", {}).keys())
                context["scripts"] = list(pkg.get("scripts", {}).keys())
        except Exception as e:
            log(f"Aviso al leer package.json: {e}")

    docs_to_sample = {
        "audio": "docs/AUDIO_ARCHITECTURE.md",
        "simulation": "docs/SIMULATION_ENGINE.md",
        "canvas": "docs/CANVAS_RENDERER.md",
        "auditoria_visual": "docs/AUDITORIA_VISUAL_EN_ACCION.md",
        "indice_maestro": "docs/INDICE_MAESTRO_ARQUITECTURA.md",
        "security": "docs/SECURITY_GOVERNANCE.md",
        "roadmap": "docs/ROADMAP.md"
    }
    context["docs_extracts"] = {}
    for doc_key, doc_path in docs_to_sample.items():
        if os.path.isfile(doc_path):
            try:
                with open(doc_path, "r", encoding="utf-8") as f:
                    lines = [line.strip() for line in f if line.strip() and not line.startswith("```")][:15]
                    context["docs_extracts"][doc_key] = " ".join(lines)[:600]
            except Exception:
                pass

    key_code_files = [
        "src/lib/audioNarrator.ts",
        "src/components/audio/FloatingAudioBubble.tsx",
        "src/components/quiz/QuizRunner.tsx",
        "scripts/build-concept-search-index.ts"
    ]
    context["existing_components"] = [f for f in key_code_files if os.path.isfile(f)]

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
    if author_login.lower() == OWNER_DEFAULT.lower():
        return False

    comments = discussion.get("comments", {}).get("nodes", [])
    if not comments:
        return True

    for c in comments:
        c_author = (c.get("author") or {}).get("login", "")
        if c_author.lower() in [b.lower() for b in bot_logins]:
            return False

    return True


def call_gemini_api(prompt: str, api_key: str) -> Optional[str]:
    """Invoca la API de Gemini utilizando modelos actualizados y encabezados oficiales con diagnóstico."""
    models = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"]
    endpoints = [
        "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
        "https://generativelanguage.googleapis.com/v1/models/{model}:generateContent"
    ]

    for model in models:
        for ep_template in endpoints:
            url = ep_template.format(model=model) + f"?key={api_key}"
            payload = {
                "contents": [{"parts": [{"text": prompt}]}],
                "generationConfig": {
                    "temperature": 0.25,
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
                                log(f"Gemini API generó respuesta con éxito usando modelo {model}.")
                                return text.strip()
            except urllib.error.HTTPError as he:
                error_body = ""
                try:
                    error_body = he.read().decode("utf-8")
                except Exception:
                    pass
                log(f"Diagnóstico Gemini API ({model} - {he.code} {he.reason}): {error_body[:250]}")
                continue
            except Exception as e:
                log(f"Aviso de conexión con modelo {model} en Gemini API: {e}")
                continue
    return None


def synthesize_project_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], lang: str = "es", escalation: Optional[str] = None) -> str:
    """
    Motor de síntesis contextual de alta fidelidad técnica.
    Cumple con el estándar de prosa densa, meticulosa y natural:
    - Párrafos conectados y sustanciales, minimizando listas a menos que sea estrictamente necesario.
    - Cero diagramas simplistas o artificiales.
    - Profundidad de ingeniería fundamentada en los archivos reales del repositorio.
    """
    q_lower = (discussion_title + " " + query_text).lower()

    if lang == "en":
        if escalation:
            return f"""Hello @{author}! Thank you for bringing this situation to our attention.

We have detected that this inquiry touches on a critical topic ({escalation}). We take repository security, runtime stability, and data integrity with the utmost seriousness. This incident has been immediately logged and escalated to @{OWNER_DEFAULT} through our internal issue tracking pipeline for prioritized technical inspection.

In Dev Visualizer, our automated CI/CD workflows run rigorous static security audits including `gitleaks` and `npm audit` across all pull requests to prevent regressions. To help us accelerate diagnostic review, please feel free to share any reproducible error logs, browser version details, or step-by-step reproduction scenarios directly in this thread. We will provide updates as soon as the team conducts an initial review."""

        # Audiovisual Synchronization & 60fps Animations
        if any(k in q_lower for k in ["synchronize", "synchronization", "speech", "speechsynthesis", "audio", "narrat", "animation", "canvas", "motion", "render", "fps", "performance", "60fps"]):
            return f"""Hello @{author}! Thank you for raising this question about the audiovisual architecture of Dev Visualizer.

When designing the interactive engine across our 73 technical collections, our foremost priority was ensuring that audio narration and visual state transitions never compete for the main thread. To guarantee rock-solid 60fps rendering, we architected a decoupled pipeline where Motion (Framer Motion 14) and SVG/Canvas renderers rely exclusively on GPU-composited properties (`transform` and `opacity`) driven by `requestAnimationFrame`. Meanwhile, auditory playback runs through the browser's native Web Speech API (`SpeechSynthesis`) in a distinct background audio thread managed by our singleton in [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts). Because the animation clock is completely isolated from the speech synthesizer's initialization and utterance queue, complex visual scenes never drop frames during speech transitions.

Under the hood, browser speech engines—particularly on mobile Android devices running Chromium—present severe reliability constraints that we solved through meticulous runtime heuristics. If an utterance exceeds 15 seconds, Chromium frequently pauses playback without emitting an `onend` event, causing the narration to freeze. In [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts), our `splitTextIntoNarrationChunks` utility splits long narratives into natural phonetic units of 140 characters or fewer bounded by punctuation. Furthermore, to prevent V8's garbage collector from prematurely sweeping active `SpeechSynthesisUtterance` instances mid-sentence, the engine maintains an active utterance registry in a module-level `Set<SpeechSynthesisUtterance>` until the native `end` or `error` callback safely disposes of the object.

From a state management perspective, the player exposes an immutable `AudioNarratorSnapshot` consumed by UI components like [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx) via React 19's `useSyncExternalStore`. This eliminates hydration mismatches across our 350+ statically pre-rendered Next.js 16 pages (`output: "export"`). We also listen for `document.visibilitychange` to gracefully pause speech when users switch browser tabs, and strictly adhere to `prefers-reduced-motion: reduce` by replacing kinetic transitions with instantaneous state updates while preserving voice guidance. You can review our full audit protocols in [`docs/AUDITORIA_VISUAL_EN_ACCION.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDITORIA_VISUAL_EN_ACCION.md) and [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md)."""

        # Concept Search Indexer & Client Performance
        if any(k in q_lower for k in ["search", "indexer", "index", "modal", "query", "queries", "filter"]):
            return f"""Hello @{author}! Thank you for inquiring about the concept search architecture in Dev Visualizer.

To achieve instant sub-millisecond search across all 73 collections and 146 routes without incurring runtime network latency or bloating client JavaScript bundles, we built a dedicated pre-compilation step in [`scripts/build-concept-search-index.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/scripts/build-concept-search-index.ts). During the static build phase (`npm run build:search-index`), the script traverses our `collectionManifest` and expanded concept dictionaries, extracting compact tuples representing the concept title, section, and collection identifier. Instead of embedding full theoretical descriptions or heavy metadata into the search bundle, the pipeline emits a pruned, highly optimized static dictionary into `src/data/conceptSearchIndex.ts`.

At runtime, the client modal performs in-memory token matching and prefix filtering directly in the browser. Because the search index is pre-compiled as static JavaScript data rather than fetched via dynamic JSON requests or external search APIs, queries resolve instantaneously even on offline-first environments or low-bandwidth mobile connections. Furthermore, the search modal coordinates with our keyboard navigation system ([`docs/KEYBOARD_SHORTCUTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/KEYBOARD_SHORTCUTS.md)) and triggers subtle target glowing animations when jumping directly to visual sections across the application."""

        # Simulation Engine & Algorithmic Complexity
        if any(k in q_lower for k in ["simulation", "algorithm", "worker", "complex", "playback", "timeline"]):
            return f"""Hello @{author}! Thank you for your question regarding algorithmic simulation in Dev Visualizer.

Our simulation engine, specified in [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md), operates on a strictly decoupled three-phase architecture: computation, temporal playback, and visual projection. Rather than mutating DOM nodes during algorithmic execution, algorithms first run in pure memory to generate an immutable series of timeline snapshots (`SimulationStep[]`). Each step records the exact state of pointers, active array indices, node visits, and data swaps, frozen via `Object.freeze` to allow deterministic bidirectional stepping (`Play`, `StepForward`, `StepBackward`, `Reset`) without recalculating previous iterations.

Visual rendering is subsequently performed at 60fps using Motion (Framer Motion 14) and Canvas/SVG renderers. As outlined in [`docs/CANVAS_RENDERER.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/CANVAS_RENDERER.md), high-frequency simulations automatically adapt to high-density Retina displays (`devicePixelRatio`) and pause when inactive. Every visualizer is accompanied by an accessible DOM fallback table and quantitative Big-O metrics, ensuring seamless screen-reader compatibility and pedagogical clarity across all computational models."""

        # Secrets, Security & Governance
        if any(k in q_lower for k in ["secret", ".env", "gitleaks", "git-secrets", "vault", "token", "leak", "security"]):
            return f"""Hi @{author}! Thank you for reaching out regarding security governance in Dev Visualizer.

Because Dev Visualizer is deployed strictly as a client-side static web application on Next.js 16 and React 19, no private runtime credentials, database keys, or server secrets are ever compiled or bundled into client assets. All automation credentials, bot tokens, and AI keys (`DISCORD_BOT_TOKEN`, `GEMINI_API_KEY`, `LUICS_PAT`) reside exclusively in encrypted GitHub Secrets and are injected only inside ephemeral GitHub Actions runners.

Every pull request and commit must pass through automated security auditing with `gitleaks` and `npm audit` under our governance framework ([`docs/SECURITY_GOVERNANCE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SECURITY_GOVERNANCE.md)). Furthermore, any community discussion referencing potential vulnerabilities triggers an automated escalation issue directly assigned to @{OWNER_DEFAULT} for expedited verification."""

        # Quizzes & Gamification
        if any(k in q_lower for k in ["quiz", "badge", "relic", "score", "trophy", "gamification"]):
            return f"""Hi @{author}! Thank you for your interest in the interactive quiz and badge architecture of Dev Visualizer.

The evaluation subsystem in `src/components/quiz/` is engineered with client-side state persistence in browser `localStorage`, ensuring zero cookies and zero third-party telemetry. Each technical question provides real-time pedagogical explanations reinforcing the underlying engineering concepts as soon as an option is selected. Relic badges unlock dynamically through responsive SVG animations without interrupting user focus."""

        # Default English Architecture Overview
        return f"""Hi @{author}! Thank you for reaching out regarding the engineering foundations of Dev Visualizer.

Dev Visualizer is architected as an educational software engineering atlas delivering 73 specialized collections across 146 interactive routes. The frontend is built on Next.js 16 (App Router) combined with React 19, TypeScript, Tailwind CSS, and Motion (Framer Motion 14). The entire application compiles into a high-performance static distribution (`output: "export"`) containing over 350 pre-rendered pages, which eliminates backend server vulnerabilities, avoids runtime database queries, and enables instant global delivery via GitHub Pages.

To preserve technical excellence across such a vast catalog, development is governed by an automated 7-skill pipeline (`01-definir` through `07-centinela`). Continuous integration workflows enforce strict quality gates including static link validation (`npm run check:links`), educational library catalog validation (`npm run check:library`), WCAG accessibility compliance (`npm run check:a11y`), and zero-leakage security scans with `gitleaks`. You can explore our comprehensive architectural map in [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""

    # Spanish Responses
    if escalation:
        return f"""¡Hola @{author}! Gracias por comunicarnos esta situación.

Hemos detectado que esta consulta refiere a un tema crítico ({escalation}). Tratamos la estabilidad del repositorio, la seguridad en tiempo de ejecución y la integridad de los datos con la máxima prioridad. Este incidente ha sido registrado y escalado inmediatamente a @{OWNER_DEFAULT} mediante nuestro flujo interno de seguimiento de incidencias para su revisión técnica prioritaria.

En Dev Visualizer, nuestros flujos automatizados de CI/CD ejecutan auditorías de seguridad estáticas con `gitleaks` y `npm audit` en cada Pull Request para prevenir cualquier tipo de regresión. Para acelerar el diagnóstico, puedes compartir registros de consola, versión exacta del navegador o pasos detallados de reproducción directamente en este hilo. Compartiremos actualizaciones en cuanto concluya la revisión inicial."""

    # Sincronización Audiovisual y Animaciones
    if any(k in q_lower for k in ["sincroniza", "sincronizar", "speech", "speechsynthesis", "audio", "narrac", "animac", "canvas", "motion", "render", "fps", "rendimiento", "60fps"]):
        return f"""¡Hola @{author}! Gracias por tu consulta sobre la arquitectura audiovisual en Dev Visualizer.

Al diseñar el motor interactivo en las 73 colecciones técnicas del proyecto, nuestra prioridad fundamental fue garantizar que la narración auditiva y las transiciones visuales jamás compitan por el hilo principal de renderizado. Para asegurar una tasa constante de 60 cuadros por segundo, implementamos una arquitectura desacoplada donde Motion (Framer Motion 14) y los renderizadores SVG/Canvas se apoyan exclusivamente en transformaciones aceleradas por hardware en la GPU (`transform` y `opacity`) coordinadas mediante `requestAnimationFrame`. La locución por voz se delega íntegramente a la Web Speech API nativa (`SpeechSynthesis`) en un hilo de audio independiente del sistema operativo, gestionado por el singleton centralizado en [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts).

Bajo el capó, los sintetizadores de voz en navegadores móviles (especialmente motores Chromium en Android) imponen restricciones críticas que resolvimos con heurísticas específicas. Cuando una locución supera los 15 segundos continuos, Chromium suele pausar la reproducción de forma silenciosa sin emitir el evento `onend`, provocando que el audio se congele. Para solucionar esto de raíz, nuestra función `splitTextIntoNarrationChunks` subdivide los textos en unidades fonéticas breves (inferiores o iguales a 140 caracteres) delimitadas por signos de puntuación. Además, para impedir que el recolector de basura de V8 destruya las instancias de `SpeechSynthesisUtterance` a mitad de frase por pérdida de referencia en ámbito local, el motor retiene cada locución activa dentro de un `Set<SpeechSynthesisUtterance>` a nivel de módulo hasta la confirmación formal de sus callbacks nativos `end` o `error`.

Desde la perspectiva de estado, el reproductor expone una instantánea inmutable `AudioNarratorSnapshot` consumida por componentes visuales como [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx) mediante `useSyncExternalStore` de React 19. Esto previene cualquier problema de hidratación durante la exportación estática de más de 350 páginas en Next.js 16 App Router (`output: "export"`). Asimismo, escuchamos `document.visibilitychange` para pausar la locución si el usuario cambia de pestaña y respetamos estrictamente `prefers-reduced-motion: reduce`, sustituyendo las animaciones continuas por cambios inmediatos de estado mientras mantenemos la voz como alternativa accesible. Puedes consultar los protocolos completos en [`docs/AUDITORIA_VISUAL_EN_ACCION.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDITORIA_VISUAL_EN_ACCION.md) y [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md)."""

    # Búsqueda e Indexador
    if any(k in q_lower for k in ["busqueda", "buscar", "indexador", "indice", "modal"]):
        return f"""¡Hola @{author}! Con gusto clarificamos el funcionamiento del indexador de conceptos en Dev Visualizer.

Para lograr una búsqueda instantánea en submilisegundos sobre las 73 colecciones y 146 rutas sin generar peticiones de red en tiempo de ejecución ni sobrecargar el tamaño de los paquetes JavaScript de cliente, creamos un paso de pre-compilación estática en [`scripts/build-concept-search-index.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/scripts/build-concept-search-index.ts). Durante la fase de build (`npm run build:search-index`), el script procesa el `collectionManifest` y los diccionarios de conceptos ampliados, abstrayendo tuplas compactas con el título, sección y clave de colección, emitiendo un diccionario estático ligero en `src/data/conceptSearchIndex.ts`.

En el navegador, el modal ejecuta coincidencia de tokens y filtrado por prefijos en memoria pura. Al residir el índice como código estático pre-compilado en lugar de depender de llamadas a APIs o motores de búsqueda externos, las consultas responden al instante incluso en conexiones intermitentes o dispositivos móviles. El modal se sincroniza además con los atajos de teclado del proyecto ([`docs/KEYBOARD_SHORTCUTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/KEYBOARD_SHORTCUTS.md)) y resalta suavemente las secciones objetivo al navegar directamente hacia ellas."""

    # Motor de Simulación
    if any(k in q_lower for k in ["simulacion", "algoritmo", "worker", "timeline", "fotograma"]):
        return f"""¡Hola @{author}! Te compartimos el diseño del motor de simulación algorítmica de Dev Visualizer.

Tal como describe [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md), el motor opera bajo un ciclo desacoplado de tres etapas: pre-cómputo, secuenciación temporal y renderizado visual. En lugar de manipular el DOM durante la ejecución del algoritmo, este corre en memoria pura generando una serie inmutable de instantáneas (`SimulationStep[]`) congeladas con `Object.freeze`. Cada paso conserva el estado de punteros, índices y comparaciones, permitiendo navegación bidireccional determinista (`Play`, `Pausa`, `Avanzar`, `Retroceder`, `Reiniciar`) sin recalcular los pasos previos.

El renderizado posterior se ejecuta a 60fps con Motion (Framer Motion 14) y Canvas/SVG. Siguiendo las directrices de [`docs/CANVAS_RENDERER.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/CANVAS_RENDERER.md), las simulaciones se adaptan a pantallas de alta densidad (`devicePixelRatio`) y pausan su bucle ante inactividad. Cada visualizador incorpora una tabla semántica en el DOM y métricas de complejidad Big-O, garantizando accesibilidad y valor didáctico."""

    # Secretos y Seguridad
    if any(k in q_lower for k in ["secreto", ".env", "gitleaks", "git-secrets", "vault", "token", "fuga", "seguridad"]):
        return f"""¡Hola @{author}! Con gusto compartimos nuestra política de gobernanza y seguridad en Dev Visualizer.

Al desplegarse Dev Visualizer como una aplicación web puramente estática generada con Next.js 16 y React 19, no se compilan credenciales maestras, conexiones a bases de datos ni tokens privados en los paquetes enviados al cliente. Todas las claves de automatización, tokens de bot y credenciales de inteligencia artificial (`DISCORD_BOT_TOKEN`, `GEMINI_API_KEY`, `LUICS_PAT`) residen de forma segura en GitHub Secrets y se inyectan únicamente en runners efímeros de GitHub Actions.

Cada Pull Request y commit se somete a validaciones automatizadas con `gitleaks` y `npm audit` bajo nuestro protocolo de gobernanza ([`docs/SECURITY_GOVERNANCE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SECURITY_GOVERNANCE.md)). Adicionalmente, cualquier reporte comunitario que mencione riesgos o fallas genera de inmediato un issue de alta prioridad asignado a @{OWNER_DEFAULT} para su atención inmediata."""

    # General en Español
    return f"""¡Hola @{author}! Gracias por tu interés en los fundamentos de ingeniería de Dev Visualizer.

Dev Visualizer está diseñado como un atlas visual interactivo de ingeniería que abarca 73 colecciones técnicas y 146 rutas didácticas. Su arquitectura de frontend se apoya en Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS y Motion (Framer Motion 14), compilándose como una distribución estática de alto rendimiento (`output: "export"`) sobre más de 350 páginas pre-renderizadas, lo que elimina vectores de ataque en el servidor y optimiza los tiempos de carga en GitHub Pages.

Para mantener la robustez en un catálogo tan extenso, el desarrollo sigue un marco de 7 habilidades estandarizadas (`01-definir` a `07-centinela`). Nuestro pipeline de integración continua valida enlaces estáticos (`npm run check:links`), catalogo de librería (`npm run check:library`), accesibilidad WCAG (`npm run check:a11y`) y ausencia de secretos expuestos. Te invitamos a consultar la documentación técnica completa en [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""


def generate_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], escalation: Optional[str] = None) -> Tuple[str, str]:
    """Genera la respuesta contextualizada utilizando Gemini API si está disponible, o el motor de síntesis local."""
    lang = detect_language(discussion_title + " " + query_text)
    api_key = os.environ.get("GEMINI_API_KEY")

    if api_key and not escalation:
        system_instruction = f"""Eres el Agente Centinela de Soporte Técnico y Arquitectura para 'Dev Visualizer' (@{OWNER_DEFAULT}).
Dev Visualizer es un atlas visual educativo de ingeniería de software con 73 colecciones y 146 rutas interactivas, construido sobre Next.js 16 (App Router), React 19, TypeScript, Motion (Framer Motion 14) y Tailwind CSS.

ESTILO EDITORIAL Y REGLAS OBLIGATORIAS:
1. Responde en el idioma de la consulta ({'inglés' if lang == 'en' else 'español'}).
2. FORMATO EN PÁRRAFOS DENSOS Y NATURALES: Estructura la explicación en prosa técnica profunda, cohesiva y fluida (3 o 4 párrafos sustanciales y bien articulados). MINIMIZA LOS ENLISTADOS: usa viñetas únicamente cuando sea estrictamente imprescindible para enumerar 2 o 3 opciones puntuales. Evita a toda costa que la respuesta parezca una lista genérica generada por máquina.
3. TONO DE AUTOR/INGENIERO SENIOR: Utiliza una voz en primera persona del plural ("En Dev Visualizer diseñamos...", "Bajo el capó...", "La razón por la que desacoplamos..."). Conecta el problema de fondo, la decisión de arquitectura, los detalles del código y los trade-offs de rendimiento.
4. PROHIBIDO GENERAR DIAGRAMAS: No uses esquemas ASCII, diagramas de caracteres ni bloques Mermaid. Responde preguntas complejas con rigor conceptual y argumentación técnica en la prosa.
5. CITA ARCHIVOS REALES: Haz referencia directa a componentes existentes en el repositorio (`src/lib/audioNarrator.ts`, `src/components/audio/FloatingAudioBubble.tsx`, `scripts/build-concept-search-index.ts`, `docs/AUDITORIA_VISUAL_EN_ACCION.md`, `docs/AUDIO_ARCHITECTURE.md`, `docs/SIMULATION_ENGINE.md`, `docs/CANVAS_RENDERER.md`, `README.md`). Jamás inventes rutas ficticias.
6. MENCIÓN NIVEL 1: Incluye al final la mención a @{OWNER_DEFAULT} para seguimiento: *(CC: @{OWNER_DEFAULT} para seguimiento)*."""

        prompt = f"{system_instruction}\n\nContexto vivo del repositorio:\n{json.dumps(context, ensure_ascii=False, indent=2)}\n\nTítulo de la discusión: {discussion_title}\nConsulta de @{author}: {query_text}\n\nRespuesta técnica:"
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

        escalation = detect_security_or_bug_escalation(title, body)
        issue_number = None

        if escalation and not args.dry_run:
            log(f"⚠️ Alerta: Escalamiento detectado para #{num}: {escalation}")
            issue_number = escalate_issue_to_github(num, title, url, escalation, repo)

        reply_body, lang = generate_response(title, body, author, context, escalation)

        created_dt = parse_iso8601_utc(created_at_str)
        now_utc = datetime.now(timezone.utc)
        elapsed_seconds = max(0.0, (now_utc - created_dt).total_seconds())
        target_wait_seconds = MIN_WAIT_MINUTES * 60.0

        if args.dry_run:
            log(f"[DRY-RUN] Simulación de respuesta para #{num}:")
            print(reply_body)
            continue

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

        if elapsed_seconds < target_wait_seconds and not args.no_wait:
            wait_time = target_wait_seconds - elapsed_seconds
            log(f"Iniciando ventana de espera de 10 minutos ({wait_time:.1f} segundos restantes) para permitir revisión humana de @{OWNER_DEFAULT}...")
            time.sleep(wait_time)

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

        try:
            comment_url = post_reply(disc_id, reply_body)
            log(f"Respuesta publicada exitosamente en #{num}: {comment_url}")
        except Exception as e:
            log(f"Error al publicar respuesta en #{num}: {e}")
            continue

        write_step_summary(num, title, author, lang, escalation, "Publicado automáticamente tras buffer de 10 minutos", reply_body[:300] + "...")
        send_level_3_published_notification(num, title, author, url, category, escalation)

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
