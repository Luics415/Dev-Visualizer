#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Agente Centinela de GitHub Discussions para Dev Visualizer (@Luics415).
Proporciona soporte autónomo, bilingüe (ES/EN) con respuestas técnicas contextualizadas,
escalamiento de incidentes críticos, 3 niveles de notificación (mención, Step Summary,
Discord DM 1 a 1 vía Bot) y registro en expedientes fechados docs/FechaAgente/.
"""

import os
import sys
import json
import re
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


def log(msg: str):
    print(f"[CENTINELA-DEV-VISUALIZER] {msg}", flush=True)


def run_cmd(cmd: List[str], check: bool = True) -> str:
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8")
    if check and res.returncode != 0:
        raise RuntimeError(f"Comando falló: {' '.join(cmd)}\nError: {res.stderr}")
    return res.stdout.strip()


def gh_graphql(query: str, variables: Dict[str, Any]) -> Dict[str, Any]:
    payload = json.dumps({"query": query, "variables": variables})
    cmd = ["gh", "api", "graphql", "-f", f"query={query}"]
    for k, v in variables.items():
        cmd.extend(["-F", f"{k}={v}"])
    raw = run_cmd(cmd)
    data = json.loads(raw)
    if "errors" in data and data["errors"]:
        raise RuntimeError(f"GraphQL errors: {data['errors']}")
    return data.get("data", {})


def detect_language(text: str) -> str:
    """Detecta si el texto está en inglés o en español."""
    t_lower = text.lower()
    english_markers = [
        " how ", " what ", " why ", " is ", " are ", " can ", " does ", " error ",
        " issue ", " please ", " help ", " thanks ", " thank you ", " problem ",
        " cannot ", " unable ", " where ", " when ", " looking for ", " advice "
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
        # Verificar si ya existe un issue abierto con ese título
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


def send_level_3_notifications(discussion_num: int, title: str, author: str, url: str, category: str, escalation: Optional[str] = None):
    """
    Nivel 3 de Notificación: Mensaje Directo (DM) 1 a 1 en Discord vía Bot Oficial.
    Utiliza DISCORD_BOT_TOKEN y DISCORD_USER_ID directamente contra la API REST v10 de Discord.
    """
    bot_token = os.environ.get("DISCORD_BOT_TOKEN")
    user_id = os.environ.get("DISCORD_USER_ID")

    if not bot_token or not user_id:
        log("Nivel 3: DISCORD_BOT_TOKEN o DISCORD_USER_ID no configurados. Omitiendo DM de Discord.")
        return

    log(f"Nivel 3: Enviando Mensaje Directo 1 a 1 de Discord al usuario ID {user_id}...")

    # 1. Abrir o recuperar canal DM con el usuario
    open_dm_url = "https://discord.com/api/v10/users/@me/channels"
    headers = {
        "Authorization": f"Bot {bot_token}",
        "Content-Type": "application/json",
        "User-Agent": "DevVisualizerCentinel/1.0"
    }
    channel_payload = json.dumps({"recipient_id": str(user_id)}).encode("utf-8")

    channel_id = None
    try:
        req = urllib.request.Request(open_dm_url, data=channel_payload, headers=headers, method="POST")
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            channel_id = data.get("id")
    except Exception as e:
        log(f"Error al abrir canal DM de Discord: {e}")
        return

    if not channel_id:
        log("No se pudo obtener el channel_id para el DM.")
        return

    # 2. Construir embed con diseño profesional y colores distintivos
    color = 0xFF5555 if escalation else 0x5865F2 # Rojo si es crítico, Azul Blurple para interacción normal
    fields = [
        {"name": "💬 Discusión", "value": f"#{discussion_num} - {title}", "inline": False},
        {"name": "👤 Autor", "value": f"@{author}", "inline": True},
        {"name": "🏷️ Categoría", "value": category, "inline": True},
    ]

    if escalation:
        fields.append({"name": "🚨 Escalamiento Crítico", "value": f"**{escalation}**", "inline": False})

    fields.append({"name": "🔗 Enlace Directo", "value": f"[Abrir en GitHub]({url})", "inline": False})

    embed = {
        "title": "🛡️ Agente Centinela — Notificación Dev Visualizer",
        "description": "Se ha procesado una nueva consulta en **Dev Visualizer** y se publicó respuesta autónoma.",
        "color": color,
        "fields": fields,
        "footer": {
            "text": "Sistema Autónomo de Soporte • Dev Visualizer • Luics415",
            "icon_url": "https://github.com/Luics415.png"
        },
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

    message_payload = json.dumps({"embeds": [embed]}).encode("utf-8")
    send_msg_url = f"https://discord.com/api/v10/channels/{channel_id}/messages"

    try:
        req = urllib.request.Request(send_msg_url, data=message_payload, headers=headers, method="POST")
        with urllib.request.urlopen(req, timeout=10) as resp:
            if resp.status in [200, 201]:
                log("Nivel 3: Mensaje Directo enviado exitosamente a Discord.")
            else:
                log(f"Aviso en respuesta Discord DM: HTTP {resp.status}")
    except Exception as e:
        log(f"Error al enviar mensaje DM a Discord: {e}")


def write_step_summary(discussion_num: int, title: str, author: str, lang: str, escalation: Optional[str], reply_preview: str):
    """Nivel 2 de Notificación: Registro en $GITHUB_STEP_SUMMARY de GitHub Actions."""
    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if not summary_path:
        return

    status_icon = "🚨" if escalation else "✅"
    lines = [
        f"### {status_icon} Agente Centinela — Intervención en Discusión #{discussion_num}",
        "",
        "| Parámetro | Detalle |",
        "| :--- | :--- |",
        f"| **Título** | {title} |",
        f"| **Autor** | @{author} |",
        f"| **Idioma detectado** | `{'Inglés' if lang == 'en' else 'Español'}` |",
        f"| **Estado de Escalamiento** | `{escalation or 'Ninguno (Consulta estándar)'}` |",
        "",
        "#### Resumen de Respuesta Emitida",
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
        "stack": "Next.js 16 (App Router) / React 19 / TypeScript / Motion (Framer Motion) / Tailwind CSS",
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
          title
          body
          url
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
            category { name }
            author { login }
            comments(first: 20) {
              nodes {
                id
                body
                author { login }
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
    """Evalúa si la discusión ya fue respondida por el agente o el mantenedor."""
    comments = discussion.get("comments", {}).get("nodes", [])
    if not comments:
        return True

    # Si el último comentario fue hecho por un usuario externo, requiere atención
    last_comment = comments[-1]
    last_author = (last_comment.get("author") or {}).get("login", "")

    if last_author.lower() in [b.lower() for b in bot_logins]:
        return False

    return True


def call_gemini_api(prompt: str, api_key: str) -> Optional[str]:
    """Invoca la API de Gemini para generar una respuesta personalizada y fluida."""
    models = ["gemini-2.5-flash", "gemini-1.5-flash"]
    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.2,
                "maxOutputTokens": 1000,
            }
        }
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
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
    """Motor de síntesis contextual bilingüe anclado en la arquitectura de Dev Visualizer."""
    q_lower = (discussion_title + " " + query_text).lower()

    if lang == "en":
        if escalation:
            return f"""Hello @{author}! Thank you for bringing this to our attention.

⚠️ **Notice:** We have detected that this inquiry touches on a critical topic ({escalation}). This issue has been automatically escalated to @{OWNER_DEFAULT} via our internal security and bug tracking pipeline for priority inspection.

In the meantime, feel free to share any reproducible logs or browser details."""

        if any(k in q_lower for k in ["secret", ".env", "gitleaks", "git-secrets", "vault", "token", "leak"]):
            return f"""Hi @{author}! Happy to clarify secrets governance in Dev Visualizer:

1. **Client-Side Safety**: Dev Visualizer is a client-side visualization application built on **Next.js 16 and React 19**. No private runtime keys are bundled in client assets.
2. **Secrets Governance**: CI/CD deployment credentials and bot tokens live exclusively in **GitHub Secrets** (`DISCORD_BOT_TOKEN`, `GEMINI_API_KEY`, `LUICS_PAT`).
3. **Automated Prevention**: Every commit and pull request is audited via `gitleaks` and our 6-phase master orchestrator to prevent credential leaks."""

        if any(k in q_lower for k in ["animation", "canvas", "motion", "render", "fps", "performance"]):
            return f"""Hi @{author}! Dev Visualizer renders its educational visualizations using:
- **Motion (Framer Motion 14)** for declarative spring physics and state transitions.
- **Canvas / WebGL** renderers with requestAnimationFrame loops bounded by `ResizeObserver`.
- **Audio Narration Engine** synchronized with step-by-step state markers.

You can inspect our rendering specifications in [`docs/CANVAS_RENDERER.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/CANVAS_RENDERER.md) and [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md)."""

        return f"""Hi @{author}! Thanks for reaching out.

**Dev Visualizer** is an educational engineering atlas featuring:
- **Core Architecture:** Next.js 16 (App Router), React 19, TypeScript, Motion, and Tailwind CSS.
- **Content:** 73 technical collections and 146 interactive visual routes with audio narration and quizzes.
- **Governance:** 6-phase atomic orchestrator (`01-definir` through `06-aprobar`).

For technical guidelines, please refer to [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`AGENTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/AGENTS.md)."""

    # Spanish response
    if escalation:
        return f"""¡Hola @{author}! Gracias por reportar esta situación.

⚠️ **Aviso de Escalamiento:** Hemos identificado que esta consulta refiere a un tema crítico ({escalation}). El caso ha sido escalado automáticamente a @{OWNER_DEFAULT} mediante nuestro sistema interno de seguimiento para su revisión prioritaria.

Mientras tanto, puedes compartir registros de consola o pasos de reproducción adicionales si dispones de ellos."""

    if any(k in q_lower for k in ["secreto", ".env", "gitleaks", "git-secrets", "vault", "token", "fuga"]):
        return f"""¡Hola @{author}! Con gusto clarificamos la gestión de seguridad y secretos en Dev Visualizer:

1. **Aislamiento en Cliente:** Dev Visualizer es un atlas visual interactivo construido con **Next.js 16 y React 19**. No se compilan credenciales maestras ni tokens de servidor en el bundle web.
2. **Secretos en GitHub:** Las credenciales de automatización, tokens de bot y claves de IA residen exclusivamente en **GitHub Secrets** (`DISCORD_BOT_TOKEN`, `GEMINI_API_KEY`, `LUICS_PAT`).
3. **Compuerta Preventiva:** Todo commit y Pull Request es auditado estáticamente por `gitleaks` y el orquestador maestro para garantizar cero fuga de información."""

    if any(k in q_lower for k in ["animacion", "canvas", "motion", "render", "fps", "rendimiento", "simulacion"]):
        return f"""¡Hola @{author}! Las visualizaciones interactivas de Dev Visualizer operan bajo el siguiente esquema:
- **Motion (Framer Motion 14)** para transiciones fluidas de estado y física de resortes.
- **Canvas / WebGL** con loops desacoplados en `requestAnimationFrame` para visualización algorítmica de alto rendimiento.
- **Motor de Audio-Narración** sincronizado con los hitos de ejecución de cada algoritmo.

Puedes consultar los detalles de arquitectura en [`docs/CANVAS_RENDERER.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/CANVAS_RENDERER.md) y [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md)."""

    return f"""¡Hola @{author}! Gracias por tu consulta sobre Dev Visualizer.

**Dev Visualizer** es un atlas visual educativo de ingeniería que cuenta con:
- **Core de Frontend:** Next.js 16 (App Router), React 19, TypeScript, Motion y Tailwind CSS.
- **Catálogo Técnico:** 73 colecciones interactivas y 146 rutas didácticas con narración por voz y quizzes técnicos.
- **Flujo de Calidad:** Orquestador de 6 fases (`01-definir` a `06-aprobar`).

Para revisar la arquitectura técnica o contribuir, consulta [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`AGENTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/AGENTS.md)."""


def generate_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], escalation: Optional[str] = None) -> Tuple[str, str]:
    """Genera la respuesta contextualizada utilizando Gemini API si está disponible, o el motor local."""
    lang = detect_language(discussion_title + " " + query_text)
    api_key = os.environ.get("GEMINI_API_KEY")

    if api_key and not escalation:
        system_instruction = f"""Eres el Agente Centinela de Soporte Técnico para el proyecto 'Dev Visualizer' de @{OWNER_DEFAULT}.
Dev Visualizer es un atlas visual interactivo educativo con 73 colecciones y 146 rutas técnicas, desarrollado con Next.js 16, React 19, TypeScript y Motion.
Debes responder de forma empática, técnica y precisa en el idioma de la consulta ({'inglés' if lang == 'en' else 'español'}).
Reglas obligatorias:
- Incluye un saludo directo al usuario @{author}.
- Cita componentes relevantes o archivos de documentación (README.md, docs/).
- Nivel 1 de notificación: Menciona a @{OWNER_DEFAULT} como mantenedor del proyecto para que pueda dar seguimiento.
- Concluye con cordialidad profesional.
- No inventes endpoints inexistentes."""

        prompt = f"{system_instruction}\n\nContexto del proyecto: {json.dumps(context)}\nTítulo de la discusión: {discussion_title}\nConsulta de @{author}: {query_text}\n\nRespuesta:"
        gemini_reply = call_gemini_api(prompt, api_key)
        if gemini_reply:
            # Asegurar mención Nivel 1
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


def main():
    repo = os.environ.get("GITHUB_REPOSITORY", REPO_DEFAULT)
    parts = repo.split("/")
    repo_owner = parts[0] if len(parts) > 0 else OWNER_DEFAULT
    repo_name = parts[1] if len(parts) > 1 else "Dev-Visualizer"

    bot_logins = [OWNER_DEFAULT, "github-actions", "copilot", "bot"]

    event_path = os.environ.get("GITHUB_EVENT_PATH")
    single_num = None

    if event_path and os.path.isfile(event_path):
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
        category = (disc.get("category") or {}).get("name", "General")
        author = (disc.get("author") or {}).get("login", "comunidad")

        if not disc_id:
            # Si vino de listado simple sin id, obtener detalles completos
            try:
                disc = get_discussion_details(repo_owner, repo_name, num)
                disc_id = disc.get("id")
                body = disc.get("body", "")
            except Exception:
                continue

        if not needs_response(disc, bot_logins):
            log(f"Discusión #{num} ya atendida. Omitiendo.")
            continue

        log(f"Procesando discusión #{num}: '{title}' de @{author}")

        # Detectar escalamiento de seguridad o fallas críticas
        escalation = detect_security_or_bug_escalation(title, body)
        issue_number = None

        if escalation:
            log(f"⚠️ Alerta: Escalamiento detectado para #{num}: {escalation}")
            issue_number = escalate_issue_to_github(num, title, url, escalation, repo)

        # Generar respuesta contextualizada
        reply_body, lang = generate_response(title, body, author, context, escalation)

        # Publicar comentario en GitHub Discussions
        try:
            comment_url = post_reply(disc_id, reply_body)
            log(f"Respuesta publicada exitosamente en #{num}: {comment_url}")
        except Exception as e:
            log(f"Error al publicar respuesta en #{num}: {e}")
            continue

        # Nivel 2: Step Summary
        write_step_summary(num, title, author, lang, escalation, reply_body[:300] + "...")

        # Nivel 3: Discord DM 1 a 1 vía Bot
        send_level_3_notifications(num, title, author, url, category, escalation)

        # Registro en expediente histórico
        record_in_expediente({
            "number": num,
            "title": title,
            "author": author,
            "lang": lang,
            "escalation": escalation,
            "issue_number": issue_number,
            "reply": reply_body
        })

    log("Ciclo de Agente Centinela concluido con éxito.")


if __name__ == "__main__":
    main()
