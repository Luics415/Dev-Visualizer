#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Triage Automático de Issues para Dev Visualizer (@Luics415).
Analiza issues nuevos, clasifica su categoría (bug, enhancement, question, a11y),
asigna etiquetas en GitHub, publica un mensaje de bienvenida y notifica a Discord DM.
"""

import os
import sys
import json
import urllib.request
import subprocess

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass


def log(msg: str):
    print(f"[ISSUE-TRIAGE] {msg}", flush=True)


def run_cmd(cmd):
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8")
    return res.stdout.strip()


def classify_issue(title: str, body: str) -> str:
    """Clasifica el issue según palabras clave o tipo de reporte."""
    combined = (title + " " + body).lower()
    if any(k in combined for k in ["error", "bug", "fallo", "roto", "crash", "broken", "overflow", "freeze"]):
        return "bug"
    if any(k in combined for k in ["accesibilidad", "a11y", "contraste", "aria", "screen reader"]):
        return "accessibility"
    if any(k in combined for k in ["mejora", "feature", "sugerencia", "propuesta", "enhancement", "animacion", "coleccion"]):
        return "enhancement"
    if any(k in combined for k in ["documentacion", "readme", "guia", "docs", "roadmap"]):
        return "documentation"
    return "question"


def send_discord_dm(repo: str, issue_num: int, title: str, author: str, category: str, url: str):
    """Envía notificación directa por DM en Discord al mantenedor si las variables existen."""
    bot_token = os.environ.get("DISCORD_BOT_TOKEN")
    user_id = os.environ.get("DISCORD_USER_ID")
    if not bot_token or not user_id:
        log("DISCORD_BOT_TOKEN o DISCORD_USER_ID no configurados. Omitiendo DM.")
        return

    # Abrir DM
    open_dm_url = "https://discord.com/api/v10/users/@me/channels"
    headers = {
        "Authorization": f"Bot {bot_token}",
        "Content-Type": "application/json",
        "User-Agent": "DevVisualizerIssueTriage/1.0"
    }
    payload = json.dumps({"recipient_id": str(user_id)}).encode("utf-8")
    try:
        req = urllib.request.Request(open_dm_url, data=payload, headers=headers, method="POST")
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            channel_id = data.get("id")
    except Exception as e:
        log(f"Error al abrir DM de Discord: {e}")
        return

    if not channel_id:
        return

    color = 0xFF5555 if category == "bug" else 0x5865F2
    embed = {
        "title": f"📋 Nuevo Issue #{issue_num} en Dev Visualizer",
        "description": f"**{title}**",
        "color": color,
        "fields": [
            {"name": "👤 Autor", "value": f"@{author}", "inline": True},
            {"name": "🏷️ Clasificación", "value": category.capitalize(), "inline": True},
            {"name": "🔗 Enlace", "value": f"[Ver Issue en GitHub]({url})", "inline": False}
        ],
        "footer": {"text": "Triage Autónomo • Dev Visualizer • Luics415"}
    }

    send_url = f"https://discord.com/api/v10/channels/{channel_id}/messages"
    msg_payload = json.dumps({"embeds": [embed]}).encode("utf-8")
    try:
        req = urllib.request.Request(send_url, data=msg_payload, headers=headers, method="POST")
        urllib.request.urlopen(req, timeout=10)
        log("Notificación de issue enviada exitosamente por DM de Discord.")
    except Exception as e:
        log(f"Error enviando DM de Discord: {e}")


def main():
    event_path = os.environ.get("GITHUB_EVENT_PATH")
    if not event_path or not os.path.isfile(event_path):
        log("No se detectó evento de issue. Finalizando.")
        return

    with open(event_path, "r", encoding="utf-8") as f:
        event = json.load(f)

    issue = event.get("issue")
    if not issue:
        log("El evento no contiene información de issue.")
        return

    issue_num = issue.get("number")
    title = issue.get("title", "")
    body = issue.get("body", "") or ""
    author = issue.get("user", {}).get("login", "")
    url = issue.get("html_url", "")
    repo = os.environ.get("GITHUB_REPOSITORY", "Luics415/Dev-Visualizer")

    log(f"Procesando Issue #{issue_num} '{title}' por @{author}")

    category = classify_issue(title, body)
    log(f"Clasificación asignada: {category}")

    # Asignar etiqueta si gh cli está disponible
    run_cmd(["gh", "issue", "edit", str(issue_num), "--repo", repo, "--add-label", category])

    # Dejar comentario de bienvenida estructurado
    welcome_comment = f"""¡Hola @{author}! 👋 Gracias por abrir este reporte en **Dev Visualizer**.

Tu solicitud ha sido clasificada en la categoría: **`{category}`**.
@{OWNER} ha sido notificado para dar seguimiento a este reporte.

- **Stack:** Next.js 16 (App Router), React 19, Motion, TypeScript.
- **Atlas:** 73 colecciones interactivas y 146 rutas técnicas.
- **Guía de Contribución:** Por favor revisa [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`AGENTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/AGENTS.md).

*(Equipo de Mantenedores de Dev Visualizer · @Luics415)*"""

    run_cmd(["gh", "issue", "comment", str(issue_num), "--repo", repo, "--body", welcome_comment])
    log("Comentario de bienvenida publicado.")

    # Notificar a Discord DM
    send_discord_dm(repo, issue_num, title, author, category, url)


if __name__ == "__main__":
    main()
