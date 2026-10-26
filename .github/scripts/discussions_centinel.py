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
import urllib.parse
import base64
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


def is_bug_or_error_report(title: str, body: str) -> bool:
    """Evalúa si la consulta describe un error, bug, fallo, rotura o mal funcionamiento."""
    combined = (title + " " + body).lower()
    patterns = [
        r"\b(bug|bugs|error|errores|fallo|fallos|falla|fallas|fallando|crash|crashea|rompe|roto|broken|no funciona|pantalla blanca|white screen|overflow|unhandled|excepci[oó]n|exception|memory leak|freeze|freezea|congelado|se traba|se congela|500|404 persistente|fail|failure|failing)\b"
    ]
    return any(re.search(p, combined) for p in patterns)


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


def send_whatsapp_message(text: str) -> bool:
    """
    Despacha un mensaje de texto formateado a WhatsApp de forma paralela a Discord.
    Soporta múltiples proveedores populares:
    1. CallMeBot (Gratuito, rápido, sin registro ni tarjeta).
       Variables: CALLMEBOT_PHONE, CALLMEBOT_API_KEY
    2. Twilio WhatsApp API (Sandbox o Producción).
       Variables: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, TWILIO_WHATSAPP_TO
    3. Meta WhatsApp Business Cloud API (Oficial).
       Variables: WHATSAPP_CLOUD_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_TO_NUMBER
    4. Webhook Genérico (GreenAPI, Whapi, n8n, etc.).
       Variables: WHATSAPP_WEBHOOK_URL
    """
    # 1. Probar CallMeBot con autointento dual de prefijo (52 y 521)
    cmb_phone = os.environ.get("CALLMEBOT_PHONE", "").strip()
    cmb_key = os.environ.get("CALLMEBOT_API_KEY", "").strip()
    if cmb_phone and cmb_key:
        raw_digits = re.sub(r"\D", "", cmb_phone)
        candidates = [raw_digits]
        # En México (+52), WhatsApp puede requerir o descartar el 1 móvil
        if raw_digits.startswith("52") and not raw_digits.startswith("521") and len(raw_digits) == 12:
            candidates.append("521" + raw_digits[2:])
        elif raw_digits.startswith("521") and len(raw_digits) == 13:
            candidates.append("52" + raw_digits[3:])

        compact_text = text.strip()
        if len(compact_text) > 350:
            compact_text = compact_text[:330] + "... [Ver en GitHub]"
        encoded_text = urllib.parse.quote_plus(compact_text)

        for phone_variant in candidates:
            try:
                url = f"https://api.callmebot.com/whatsapp.php?phone={phone_variant}&text={encoded_text}&apikey={cmb_key}"
                req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
                with urllib.request.urlopen(req, timeout=12) as resp:
                    resp_body = resp.read().decode("utf-8", errors="ignore")
                    clean_body = re.sub(r"<[^>]+>", " ", resp_body).strip()
                    clean_body = " ".join(clean_body.split())
                    
                    is_success = resp.status in [200, 201, 202, 203] and ("queued" in clean_body.lower() or "sent" in clean_body.lower() or "success" in clean_body.lower() or "ok" in clean_body.lower())
                    if is_success:
                        log(f"WhatsApp (CallMeBot): Notificación despachada con éxito a {phone_variant[:4]}**** ({clean_body[-100:]}).")
                        return True
                    else:
                        log(f"CallMeBot intento con {phone_variant[:4]}****: HTTP {resp.status} - {clean_body[-150:]}")
            except Exception as e:
                log(f"Aviso al intentar CallMeBot con {phone_variant[:4]}****: {e}")
    else:
        log(f"WhatsApp diagnóstico: CALLMEBOT_PHONE={'configurado' if cmb_phone else 'vacío'}, CALLMEBOT_API_KEY={'configurado' if cmb_key else 'vacío'}")

    # 2. Probar Twilio WhatsApp
    tw_sid = os.environ.get("TWILIO_ACCOUNT_SID")
    tw_token = os.environ.get("TWILIO_AUTH_TOKEN")
    tw_from = os.environ.get("TWILIO_WHATSAPP_FROM", "whatsapp:+14155238886")
    tw_to = os.environ.get("TWILIO_WHATSAPP_TO")
    if tw_sid and tw_token and tw_to:
        try:
            url = f"https://api.twilio.com/2010-04-01/Accounts/{tw_sid}/Messages.json"
            to_val = tw_to if tw_to.startswith("whatsapp:") else f"whatsapp:{tw_to}"
            from_val = tw_from if tw_from.startswith("whatsapp:") else f"whatsapp:{tw_from}"
            payload = urllib.parse.urlencode({
                "From": from_val,
                "To": to_val,
                "Body": text
            }).encode("utf-8")
            auth_str = f"{tw_sid}:{tw_token}"
            auth_b64 = base64.b64encode(auth_str.encode("utf-8")).decode("utf-8")
            req = urllib.request.Request(url, data=payload, headers={
                "Authorization": f"Basic {auth_b64}",
                "Content-Type": "application/x-www-form-urlencoded"
            }, method="POST")
            with urllib.request.urlopen(req, timeout=12) as resp:
                if resp.status in [200, 201]:
                    log("WhatsApp (Twilio): Notificación despachada con éxito.")
                    return True
        except Exception as e:
            log(f"Aviso al enviar WhatsApp vía Twilio: {e}")

    # 3. Probar Meta WhatsApp Cloud API
    meta_token = os.environ.get("WHATSAPP_CLOUD_TOKEN")
    meta_phone_id = os.environ.get("WHATSAPP_PHONE_NUMBER_ID")
    meta_to = os.environ.get("WHATSAPP_TO_NUMBER")
    if meta_token and meta_phone_id and meta_to:
        try:
            url = f"https://graph.facebook.com/v20.0/{meta_phone_id}/messages"
            clean_to = meta_to.replace("+", "").replace(" ", "").replace("-", "")
            payload = json.dumps({
                "messaging_product": "whatsapp",
                "to": clean_to,
                "type": "text",
                "text": {"body": text}
            }).encode("utf-8")
            req = urllib.request.Request(url, data=payload, headers={
                "Authorization": f"Bearer {meta_token}",
                "Content-Type": "application/json"
            }, method="POST")
            with urllib.request.urlopen(req, timeout=12) as resp:
                if resp.status in [200, 201]:
                    log("WhatsApp (Meta Cloud API): Notificación despachada con éxito.")
                    return True
        except Exception as e:
            log(f"Aviso al enviar WhatsApp vía Meta Cloud API: {e}")

    # 4. Probar Webhook Genérico
    webhook_url = os.environ.get("WHATSAPP_WEBHOOK_URL")
    if webhook_url:
        try:
            payload = json.dumps({"text": text, "source": "dev-visualizer-centinela"}).encode("utf-8")
            req = urllib.request.Request(webhook_url, data=payload, headers={"Content-Type": "application/json"}, method="POST")
            with urllib.request.urlopen(req, timeout=12) as resp:
                if resp.status in [200, 201, 204]:
                    log("WhatsApp (Webhook): Notificación despachada con éxito.")
                    return True
        except Exception as e:
            log(f"Aviso al enviar WhatsApp vía Webhook: {e}")

    log(f"WhatsApp diagnóstico: CALLMEBOT_PHONE={'configurado' if cmb_phone else 'vacío'}, CALLMEBOT_API_KEY={'configurado' if cmb_key else 'vacío'}")
    log("WhatsApp: No se detectaron credenciales válidas configuradas. Omitiendo notificación por WhatsApp.")
    return False


def send_whatsapp_draft_notification(discussion_num: int, title: str, author: str, url: str, category: str, draft_text: str, wait_minutes_remaining: float, escalation: Optional[str] = None):
    preview = draft_text.strip()
    if len(preview) > 200:
        preview = preview[:180] + "... [continúa en GitHub]"

    alert_tag = "🚨 ALERTA CRÍTICA" if escalation else "🛡️ CENTINELA"
    clean_title = title[:50] + ("..." if len(title) > 50 else "")
    msg = f"""{alert_tag}: #{discussion_num} ({category})
Autor: @{author} - {clean_title}
Ventana: {wait_minutes_remaining:.0f} min para responder en GitHub antes de auto-publicar.

Borrador:
{preview}

Ver en GitHub: {url}"""
    send_whatsapp_message(msg)


def send_whatsapp_published_notification(discussion_num: int, title: str, author: str, url: str):
    msg = f"""🚀 *DEV VISUALIZER — RESPUESTA PUBLICADA*

Se completó la ventana de 10 min sin intervención manual en la discusión *#{discussion_num}*.
La respuesta técnica autónoma fue publicada con éxito.

🔗 *Ver respuesta:* {url}"""
    send_whatsapp_message(msg)


def send_whatsapp_cancelled_notification(discussion_num: int, title: str, author: str, url: str):
    msg = f"""✅ *DEV VISUALIZER — INTERVENCIÓN MANUAL DETECTADA*

El mantenedor @{OWNER_DEFAULT} respondió personalmente a la discusión *#{discussion_num}*.
El borrador automático fue cancelado exitosamente.

🔗 *Ver discusión:* {url}"""
    send_whatsapp_message(msg)


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
    """Invoca la API de Gemini utilizando modelos actualizados y encabezados oficiales con diagnóstico y reintentos ante saturación."""
    models = ["gemini-3.8-flash", "gemini-2.5-flash", "gemini-2.0-flash"]
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
            for attempt in range(2):
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
                    log(f"Diagnóstico Gemini API ({model} intento {attempt+1} - {he.code} {he.reason}): {error_body[:200]}")
                    if he.code in [503, 429] and attempt == 0:
                        time.sleep(2)
                        continue
                    break
                except Exception as e:
                    log(f"Aviso de conexión con modelo {model} en Gemini API: {e}")
                    break
    return None


def synthesize_project_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], category: str = "General", lang: str = "es", escalation: Optional[str] = None) -> str:
    """
    Motor de síntesis contextual de alta fidelidad técnica para Dev Visualizer.
    Estructurado específicamente por la categoría de GitHub Discussions y reportes de fallo:
    - Ideas: Validación cálida de la propuesta, análisis de viabilidad técnica, plan atómico por fases y roadmap en GitHub Projects.
    - Q&A: Respuesta técnica directa, concisa y sin relleno innecesario.
    - General: Conversación arquitectónica y fundamentos de diseño con la comunidad.
    - Announcements: Reconocimiento del hito, impacto para usuarios y referencias documentales.
    - Polls: Evaluación técnica objetiva de las opciones y criterios para la votación.
    - Show and tell: Celebración de la contribución, análisis de méritos técnicos y sugerencias de iteración.
    - Reportes de Error/Fallo: Plan completo de resolución técnica en 4 pasos estructurados.
    """
    q_lower = (discussion_title + " " + query_text).lower()
    norm_cat = category.strip().lower()
    is_bug = is_bug_or_error_report(discussion_title, query_text) or (escalation and "Bug" in escalation)

    if lang == "en":
        # 1. Critical Security Escalation
        if escalation and "Seguridad" in escalation:
            return f"""Hello @{author}! Thank you for bringing this situation to our attention.

We have detected that this inquiry touches on a critical topic ({escalation}). We take repository security, runtime stability, and production reliability with the utmost seriousness. This incident has been immediately logged and escalated to @{OWNER_DEFAULT} through our internal issue tracking pipeline for prioritized technical inspection.

In Dev Visualizer, our automated CI/CD workflows run rigorous static security audits including `gitleaks` and `npm audit` across all pull requests before merge to prevent regressions or accidental credential exposure. To help us accelerate diagnostic review, please feel free to share any reproducible error logs, browser version details, or step-by-step reproduction scenarios directly in this thread. We will provide updates as soon as the maintainer conducts an initial review."""

        # 2. Bug / Crash / Error Report -> Complete Step-by-Step Resolution Plan
        if is_bug:
            return f"""Hello @{author}! Thank you for reporting this issue. We take runtime stability, zero-regression builds, and visual rendering integrity in Dev Visualizer with absolute technical priority.

### 🔍 Diagnostic & Probable Root Cause
Based on the symptom described in *"{discussion_title}"*, the failure appears connected to runtime state de-synchronization or browser constraint mismatches during client-side execution. Because Dev Visualizer compiles strictly into a static Single Page Application with Next.js 16 and React 19 (`output: "export"`), visual freezing, missing frames, or runtime exceptions typically stem from race conditions between Motion (Framer Motion 14) hardware-accelerated transitions and background audio events managed by the browser's Web Speech API (`SpeechSynthesis`), or unhandled null references during dynamic route hydration.

### 📁 Affected Modules & Repository Components
- [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts) (singleton state machine, utterance chunking, and event subscriptions).
- [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx) (UI snapshot consumption via React 19's `useSyncExternalStore`).
- Relevant visual collection renderers in `src/components/canvas/` or simulation engines documented in [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md).

### 🛠️ Step-by-Step Technical Resolution Plan
1. **Reproduction & Isolation:** Spin up the local development suite (`npm run dev`) and emulate the reported scenario across mobile Chromium and WebKit viewports, capturing console warnings, boundary catches, and unhandled rejections.
2. **Defensive Code Patch:** Introduce explicit boundary guards, wrap asynchronous speech/animation callbacks in defensive try-catch wrappers, and ensure strict listener cleanup in React 19 effect teardowns to eliminate garbage collection sweeps or memory leaks.
3. **Automated Quality Verification:** Run our mandatory CI verification suite locally:
   - `npm run check:links` (zero 404 links)
   - `npm run check:library` (catalog consistency across all 73 collections)
   - `npm run check:a11y` (WCAG 2.1 AA keyboard and contrast audit)
   - `npm run build` (clean static export compilation without warnings)
4. **Git Workflow & Atomic Merge:** Branch out into an atomic `fix/remediation-discussion` branch, submit a formal Pull Request documenting before/after evidence, and merge to `main`.

An internal tracking issue has been linked to @{OWNER_DEFAULT} to oversee this resolution plan. If you have additional console logs or device details, please share them in this thread!"""

        # 3. Category: Ideas
        if norm_cat == "ideas":
            # Multi-dialect / audio narration proposal
            if any(k in q_lower for k in ["audio", "speech", "narrat", "voice", "idioma", "language", "dialect", "accent", "latam", "spanish", "es-mx", "es-ar", "es-co", "es-cl", "es-es", "lectura"]):
                return f"""Hello @{author}! Thank you very much for submitting this idea. Adapting the audio narration system to support multiple languages and regional Latin American Spanish dialects (such as Mexico, Argentina, Colombia, Chile, and others) is a fantastic proposal that substantially elevates accessibility and cultural empathy across our 73 technical collections.

### 💡 Architectural Feasibility & Technical Fit
This feature fits seamlessly into our decoupled architecture. Currently, [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts) controls vocal synthesis through the browser's native Web Speech API (`window.speechSynthesis`). Native browser synthesis engines already index installed system voices under BCP 47 language tags (e.g. `es-MX`, `es-AR`, `es-CO`, `es-CL`, `es-ES`, and `en-US`) retrieved via `window.speechSynthesis.getVoices()`. Because the speech thread operates independently of our 60fps GPU rendering pipeline and Next.js 16 static export (`output: "export"`), introducing language and dialect selection adds zero bundle bloat and zero runtime latency.

### 📋 3-Phase Implementation Plan
1. **Phase 1: Interface & Preferences Contract:**
   - Define a strongly typed `SupportedDialect` union (`es-MX`, `es-AR`, `es-CO`, `es-CL`, `es-ES`, `en-US`) within `src/lib/audioNarrator.ts`.
   - Add a lightweight, accessible dialect selector dropdown into [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx), persisting user choices in browser `localStorage`.
2. **Phase 2: Engine Resolution & Voice Fallback Strategy:**
   - Extend the singleton to query available system voices and match against the selected dialect.
   - Implement graceful fallbacks: if an end-user's device lacks a specific regional voice (e.g., `es-CO`), seamlessly fallback to a standard Spanish voice (`es-*`) or system default without interrupting playback.
   - Maintain natural sentence chunking via `splitTextIntoNarrationChunks` to preserve smooth phonetic cadence.
3. **Phase 3: Cross-Platform Testing & Accessibility (a11y):**
   - Validate voice rendering across mobile Android Chromium, iOS Safari, and desktop browsers.
   - Ensure the new selector satisfies WCAG 2.1 AA keyboard navigation (Tab/Enter/Escape) and screen reader labels.
   - Execute `npm run check:a11y` and `npm run build`.

### 🚀 Roadmap & GitHub Projects Integration
This proposal has been queued for our **GitHub Projects** roadmap. We will track its development under an atomic feature branch (`feat/audio-narrator-latam-dialects`) following our standard Pull Request pipeline. Thank you for helping make Dev Visualizer more inclusive and engaging for the entire community!"""

            # Search / indexer idea
            if any(k in q_lower for k in ["search", "index", "filter", "busqueda"]):
                return f"""Hello @{author}! Thank you for proposing this improvement for Dev Visualizer's concept search engine.

Expanding our pre-compiled search index in [`scripts/build-concept-search-index.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/scripts/build-concept-search-index.ts) is fully aligned with our static architecture. We will organize this proposal into three phases: (1) schema expansion for tokens and metadata, (2) static index compilation at build time (`npm run build:search-index`), and (3) client modal integration with keyboard navigation shortcuts.

We are indexing this proposal into our **GitHub Projects** backlog to be addressed under an atomic feature branch (`feat/search-index-enhancements`). Thank you for your contribution!"""

            # General feature idea
            return f"""Hello @{author}! Thank you for submitting this creative proposal for Dev Visualizer.

We have reviewed your idea against our Next.js 16 (App Router), React 19, Motion, and Tailwind CSS architecture. The concept is technically sound and enriches our educational catalog without sacrificing our 60fps rendering guarantee or static generation pipeline (`output: "export"`).

### 📋 Atomic Implementation Plan
1. **Phase 1: Interface & Data Contract:** Define TypeScript contracts and necessary UI component wireframes.
2. **Phase 2: Business Logic & State Management:** Implement pure in-memory controllers, preserving deterministic rendering.
3. **Phase 3: Verification & Accessibility:** Run `npm run check:a11y`, `npm run check:links`, and verify mobile responsiveness.

This proposal has been registered for tracking on our **GitHub Projects** board and will be scheduled for implementation via an atomic `feat/` branch. Thank you for helping shape the future of Dev Visualizer!"""

        # 4. Category: Q&A
        if norm_cat in ["q&a", "q and a", "questions"]:
            if any(k in q_lower for k in ["speech", "speechsynthesis", "audio", "narrat", "voice", "sound", "60fps animation", "audiovisual"]):
                return f"""Hello @{author}! In Dev Visualizer, auditory narration and 60fps visual rendering are strictly decoupled to guarantee zero frame drops during playback across all 73 technical collections.

Motion (Framer Motion 14) and Canvas/SVG renderers compute GPU-accelerated transformations (`transform`, `opacity`) via `requestAnimationFrame` on the main thread, while voice playback is delegated to the browser's Web Speech API (`SpeechSynthesis`) in an isolated audio thread managed by [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts). To prevent mobile Chromium from prematurely freezing speech on utterances longer than 15 seconds, our `splitTextIntoNarrationChunks` utility splits narration into punctuation-bounded segments of 140 characters or fewer.

State is exposed as an immutable `AudioNarratorSnapshot` consumed by UI components like [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx) via React 19's `useSyncExternalStore`, preventing hydration mismatches during static Next.js 16 export (`output: "export"`). More details can be found in [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md)."""

            if any(k in q_lower for k in ["search", "indexer", "index", "modal", "query"]):
                return f"""Hello @{author}! The concept search engine in Dev Visualizer operates with zero runtime network requests by pre-compiling search indices during the build phase.

In [`scripts/build-concept-search-index.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/scripts/build-concept-search-index.ts), our build step traverses all 73 collections and maps concepts into compact tuples in `src/data/conceptSearchIndex.ts`. At runtime, the modal performs in-memory token filtering with instant sub-millisecond responsiveness, integrated with our keyboard navigation shortcuts ([`docs/KEYBOARD_SHORTCUTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/KEYBOARD_SHORTCUTS.md))."""

            if any(k in q_lower for k in ["worker", "web worker", "simulation", "algorithm", "timeline"]):
                return f"""Hello @{author}! We intentionally favor main-thread pre-computation over Web Workers for our pedagogical simulation engine.

As documented in [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md), algorithms operate over input spaces of 1,000 elements or fewer, executing in microseconds. Computing the full series of immutable snapshots (`SimulationStep[]`) frozen with `Object.freeze` provides zero-latency random access scrubbing (Play, Pause, StepForward, StepBackward) and avoids the heavy serialization and garbage collection overhead of `postMessage` worker communication."""

            if any(k in q_lower for k in ["secret", ".env", "gitleaks", "git-secrets", "vault", "token", "security"]):
                return f"""Hello @{author}! Dev Visualizer is deployed strictly as a static web application on Next.js 16 and GitHub Pages, meaning no server-side secrets or runtime database credentials ever exist in client bundles.

All automation credentials and API tokens reside exclusively in encrypted **GitHub Secrets**, injected only inside ephemeral GitHub Actions runners. Continuous integration workflows enforce strict automated scanning via `gitleaks` and `npm audit` ([`docs/SECURITY_GOVERNANCE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SECURITY_GOVERNANCE.md))."""

            # Default Q&A
            return f"""Hello @{author}! Dev Visualizer is an educational software engineering atlas delivering 73 specialized collections across 146 routes, built on Next.js 16 (App Router), React 19, TypeScript, Motion (Framer Motion 14), and Tailwind CSS.

The application compiles into a high-performance static distribution (`output: "export"`) containing over 350 pre-rendered pages hosted on GitHub Pages. Our development pipeline follows strict automated quality gates: static link verification (`npm run check:links`), library integrity (`npm run check:library`), and WCAG accessibility compliance (`npm run check:a11y`). Feel free to review [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""

        # 5. Category: General
        if norm_cat == "general":
            return f"""Hello @{author}! Thank you for initiating this discussion in Dev Visualizer's community forum.

Our platform was architected with a singular technical mission: to demystify complex software engineering algorithms and distributed systems paradigms through rigorous, accessible visual and auditory simulations. By adhering to Next.js 16 static site generation (`output: "export"`), we eliminate backend infrastructure vulnerabilities and hosting overhead while guaranteeing instant global delivery on GitHub Pages.

We actively encourage architectural discussions around UI performance, accessibility, and modern frontend design. What specific engineering perspectives or trade-offs would you like to explore together?"""

        # 6. Category: Announcements
        if norm_cat == "announcements":
            return f"""Hello @{author}! Thank you for following Dev Visualizer's official updates and milestones.

Every update in this repository is delivered through atomic pull requests and validated across our 7-skill governance pipeline. Our static pre-rendering architecture ensures that all new visualizers and collections maintain 60fps rendering fidelity and full keyboard accessibility.

You can inspect the detailed changelogs, architecture indices, and roadmap progress in [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`docs/ROADMAP.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/ROADMAP.md)."""

        # 7. Category: Polls
        if norm_cat == "polls":
            return f"""Hello @{author}! Thank you for launching this community poll. Decision-making driven by informed community perspective is fundamental to our open-source evolution.

From an engineering standpoint, evaluating architectural choices requires balancing rendering performance (maintaining 60fps with Motion and Web Speech API), bundle size constraints under Next.js 16 static export (`output: "export"`), and long-term maintainability across 73 collections.

We encourage everyone to vote and share their technical rationale in the comments to help guide our project roadmap!"""

        # 8. Category: Show and tell
        if norm_cat in ["show and tell", "show & tell"]:
            return f"""Hello @{author}! Congratulations on sharing this project showcase with the Dev Visualizer community!

It is inspiring to see how engineers leverage visual metaphors, interactive simulations, and accessible design to communicate complex technical concepts. Your implementation demonstrates strong attention to engineering detail and user experience.

If you are interested in exploring further synergies or adapting complementary visual patterns, feel free to review our simulation engine design in [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md) and our audio architecture in [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md). Great work!"""

        # Fallback English
        return f"""Hello @{author}! Thank you for participating in Dev Visualizer discussions.

Dev Visualizer is an educational software engineering atlas delivering 73 specialized collections across 146 interactive routes, powered by Next.js 16, React 19, Motion, and Tailwind CSS. The entire application compiles into a static distribution (`output: "export"`) hosted on GitHub Pages.

For detailed documentation, please consult [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""

    # =========================================================================
    # ESPAÑOL
    # =========================================================================

    # 1. Escalamiento de Seguridad Crítica
    if escalation and "Seguridad" in escalation:
        return f"""¡Hola @{author}! Gracias por comunicarnos esta situación con prontitud.

Hemos detectado que esta consulta refiere a un tema clasificado como crítico ({escalation}). Tratamos la estabilidad del repositorio, la seguridad en tiempo de ejecución y la integridad de los datos con la máxima prioridad técnica. Este incidente ha sido registrado y escalado inmediatamente a @{OWNER_DEFAULT} mediante nuestro flujo interno de seguimiento de incidencias para su inspección prioritaria.

En Dev Visualizer, nuestros flujos automatizados de CI/CD ejecutan auditorías de seguridad estáticas con `gitleaks` y `npm audit` en cada Pull Request antes de su integración a `main`. Para acelerar el diagnóstico, puedes compartir registros de consola, versión exacta del navegador o pasos detallados de reproducción directamente en este hilo. Compartiremos actualizaciones en cuanto concluya la revisión inicial."""

    # 2. Reporte de Error / Fallo / Bug -> Plan Completo de Resolución Técnica
    if is_bug:
        return f"""¡Hola @{author}! Gracias por reportar este comportamiento anómalo. En Dev Visualizer nos tomamos la estabilidad en runtime, la ausencia total de regresiones y la integridad del renderizado con la más estricta prioridad técnica.

### 🔍 Diagnóstico Preliminar y Causa Raíz Probable
Analizando el síntoma reportado en *"{discussion_title}"*, la anomalía apunta a una desincronización de eventos en el cliente o una incompatibilidad de constraints en tiempo de ejecución. Al compilarse Dev Visualizer como una Single Page Application estática sobre Next.js 16 y React 19 (`output: "export"`), los bloqueos de renderizado o congelamientos de estado suelen deberse a una carrera de eventos entre el bucle de animación de Motion (Framer Motion 14) en GPU y el hilo de audio de la Web Speech API (`SpeechSynthesis`) en navegadores específicos (como Chromium móvil o WebKit), o referencias nulas no capturadas durante la hidratación de rutas.

### 📁 Módulos y Archivos Afectados en el Repositorio
- [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts) (máquina de estados del singleton, segmentación de fragmentos fonéticos y suscripciones de eventos).
- [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx) (suscripción al snapshot mediante `useSyncExternalStore` de React 19).
- Componentes de simulación visual en `src/components/canvas/` o controladores descritos en [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md).

### 🛠️ Plan de Solución Técnica Paso a Paso
1. **Reproducción y Aislamiento:** Iniciar el entorno local con `npm run dev` y reproducir la secuencia de navegación en perfiles emulados (Chromium y Safari móvil), capturando excepciones no controladas y advertencias de hidratación en consola.
2. **Parche Defensivo de Código:** Implementar guardas defensivas ante referencias nulas, encapsular llamadas asíncronas en bloques `try/catch` y garantizar la desususcripción estricta de listeners en el desmontaje de React 19 para erradicar llamadas sobre instancias de audio desechadas o fugas de memoria.
3. **Verificación Automatizada de Calidad:** Ejecutar la batería de compuertas de calidad del repositorio:
   - `npm run check:links` (cero enlaces rotos o 404)
   - `npm run check:library` (consistencia documental en las 73 colecciones)
   - `npm run check:a11y` (auditoría WCAG 2.1 AA de teclado y contrastes)
   - `npm run build` (compilación estática limpia sin advertencias)
4. **Flujo Git y Despliegue Atómico:** Crear rama atómica `fix/remediacion-fallo-discusion`, abrir Pull Request formal con evidencias antes/después y fusionar a `main`.

Se ha creado un issue interno de seguimiento asignado a @{OWNER_DEFAULT} para auditar la remediación de este fallo. Si cuentas con capturas o trazas de error adicionales, no dudes en adjuntarlas en este hilo."""

    # 3. Categoría: Ideas (Propuestas de mejora o nuevas funciones)
    if norm_cat == "ideas":
        # Propuesta de lectura auditiva, multi-idioma o variantes de Latinoamérica
        if any(k in q_lower for k in ["audio", "speech", "narrac", "voz", "voces", "idioma", "idiomas", "dialect", "acento", "acentos", "latam", "español", "es-mx", "es-ar", "es-co", "es-cl", "es-es", "lectura", "auditi"]):
            return f"""¡Hola @{author}! Muchas gracias por plantear esta excelente propuesta. Incorporar soporte para distintos idiomas en la lectura auditiva y adaptarlo específicamente a variantes regionales de Latinoamérica (como México, Argentina, Colombia, Chile, entre otros) es una idea formidable que enriquece enormemente la accesibilidad y la empatía formativa en las 73 colecciones del atlas.

### 💡 Viabilidad Técnica y Acoplamiento Arquitectónico
La propuesta es 100% viable y encaja de manera óptima en nuestro diseño desacoplado. En Dev Visualizer, el motor de locución en [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts) opera mediante la Web Speech API nativa del navegador (`window.speechSynthesis`). Esta API expone a través de `window.speechSynthesis.getVoices()` el catálogo de voces instaladas en el sistema operativo del usuario, identificadas por códigos estándar BCP 47 (por ejemplo, `es-MX` para México, `es-AR` para Argentina, `es-CO` para Colombia, `es-CL` para Chile, `es-ES` para España y `en-US` para inglés).

Al ejecutarse la síntesis en un hilo de audio independiente del hilo principal de animación a 60fps de Motion (Framer Motion 14), la selección de idioma y dialecto añade cero sobrecarga al bundle estático de Next.js 16 (`output: "export"`), preservando la velocidad instantánea de carga en GitHub Pages.

### 📋 Plan Atómico de Implementación por Fases
1. **Fase 1: Interfaz y Contrato de Preferencias:**
   - Extender la interfaz `AudioNarratorState` en [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts) con la propiedad tipada `preferredLocale` (`es-MX`, `es-AR`, `es-CO`, `es-CL`, `es-ES`, `en-US`).
   - Diseñar un selector desplegable accesible y compacto en [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx), persistiendo la preferencia en `localStorage`.
2. **Fase 2: Motor de Resolución y Cascada Defensiva (Fallback):**
   - Filtrar las voces del sistema según el código BCP 47 seleccionado.
   - Implementar fallback seguro: si el dispositivo o navegador móvil del usuario no tiene instalada la variante específica (por ejemplo, `es-AR`), retroceder a la voz genérica en español (`es-*`) o predeterminada del sistema sin interrumpir la reproducción.
   - Mantener la partición fonética en `splitTextIntoNarrationChunks` para asegurar que cada fragmento respete la cadencia del dialecto sin superar los 140 caracteres.
3. **Fase 3: Verificación Multiplataforma y Accesibilidad (a11y):**
   - Validar compatibilidad en Chromium (Android/Desktop), Safari (iOS/macOS) y Firefox.
   - Garantizar control total por teclado (Tab / Enter / Escape) y atributos `aria-label` según WCAG 2.1 AA.
   - Ejecutar `npm run check:a11y` y `npm run build`.

### 🚀 Integración en GitHub Projects y Roadmap
Esta iniciativa ha sido registrada para incorporarse al tablero de **GitHub Projects** de Dev Visualizer. Se abordará técnicamente mediante la rama atómica `feat/audio-narrator-latam-dialects` siguiendo nuestro flujo de Pull Request con evidencias. ¡Muchísimas gracias por ayudarnos a construir una experiencia mucho más inclusiva y cercana para toda la comunidad hispanohablante de Latinoamérica!"""

        # Propuesta sobre Búsqueda o Indexador
        if any(k in q_lower for k in ["busqueda", "buscar", "indexador", "indice", "filtro", "modal"]):
            return f"""¡Hola @{author}! Gracias por aportar esta propuesta para enriquecer el sistema de búsqueda de Dev Visualizer.

La idea de extender las capacidades de nuestro indexador estático en [`scripts/build-concept-search-index.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/scripts/build-concept-search-index.ts) se alinea perfectamente con la filosofía de cero peticiones de red en runtime. Estructuramos su implementación en tres etapas: (1) definición de nuevos metadatos en los diccionarios de conceptos, (2) pre-compilación durante el build (`npm run build:search-index`), y (3) presentación en el modal con atajos de teclado accesibles ([`docs/KEYBOARD_SHORTCUTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/KEYBOARD_SHORTCUTS.md)).

Hemos añadido esta propuesta al backlog de **GitHub Projects** para su desarrollo mediante la rama `feat/mejora-indexador-busqueda`. ¡Gracias por tu visión técnica!"""

        # Propuesta General de Funcionalidad
        return f"""¡Hola @{author}! Muchas gracias por compartir esta propuesta de mejora para Dev Visualizer.

Hemos evaluado el encaje técnico de tu idea frente a nuestra arquitectura en Next.js 16 (App Router), React 19, Motion y Tailwind CSS. La propuesta aporta valor didáctico y resulta factible de integrar sin comprometer el renderizado a 60fps ni el despliegue estático pre-renderizado (`output: "export"`).

### 📋 Plan Atómico de Implementación
1. **Fase 1: Interfaz y Contratos de Datos:** Definición de contratos TypeScript y boceto de componentes de UI.
2. **Fase 2: Lógica y Motor de Ejecución:** Implementación de controladores en memoria desacoplados del DOM.
3. **Fase 3: Verificación y Accesibilidad:** Pruebas con `npm run check:a11y`, `npm run check:links` y build estático.

Esta propuesta queda indexada en nuestro tablero de **GitHub Projects** para abordarse a través de una rama atómica `feat/` con su Pull Request formal correspondiente. ¡Gracias por participar activamente en la evolución del atlas!"""

    # 4. Categoría: Q&A (Preguntas y Respuestas Técnicas)
    if norm_cat in ["q&a", "q and a", "questions"]:
        if any(k in q_lower for k in ["speech", "speechsynthesis", "audio", "narrac", "voz", "voces", "sonido", "audiovisual", "locucion"]):
            return f"""¡Hola @{author}! En Dev Visualizer, la locución por voz y la animación a 60fps están estrictamente desacopladas para impedir que compitan por el hilo principal de renderizado en las 73 colecciones del proyecto.

Motion (Framer Motion 14) y los renderizadores SVG/Canvas se apoyan exclusivamente en transformaciones de GPU (`transform`, `opacity`) sincronizadas con `requestAnimationFrame`. La voz se ejecuta en un hilo de audio independiente del sistema operativo a través de la Web Speech API nativa (`SpeechSynthesis`), orquestada por el singleton centralizado en [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts). Para evitar que navegadores móviles (especialmente Chromium en Android) congelen la locución en frases mayores a 15 segundos, la utilidad `splitTextIntoNarrationChunks` divide el contenido en bloques breves delimitados por puntuación (máximo 140 caracteres).

El estado se consume mediante el hook reactivo `useSyncExternalStore` de React 19 en [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx), evitando discrepancias de hidratación durante la exportación estática de más de 350 páginas en Next.js 16 (`output: "export"`). Consulta la arquitectura completa en [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md)."""

        if any(k in q_lower for k in ["busqueda", "buscar", "indexador", "indice", "modal"]):
            return f"""¡Hola @{author}! El indexador de conceptos de Dev Visualizer opera sin peticiones de red en tiempo de ejecución gracias a una fase de pre-compilación durante el build.

El script en [`scripts/build-concept-search-index.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/scripts/build-concept-search-index.ts) recorre las 73 colecciones y emite un índice estático ultra-liviano en `src/data/conceptSearchIndex.ts`. En el navegador, el modal ejecuta coincidencia de tokens en memoria en submilisegundos, enlazado directamente con el sistema de atajos de teclado ([`docs/KEYBOARD_SHORTCUTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/KEYBOARD_SHORTCUTS.md))."""

        if any(k in q_lower for k in ["simulacion", "algoritmo", "worker", "web worker", "timeline"]):
            return f"""¡Hola @{author}! En Dev Visualizer optamos deliberadamente por pre-cálculo síncrono en memoria pura en el hilo principal antes que Web Workers para las simulaciones didácticas.

Tal como documenta [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md), los algoritmos se calibran para espacios de entrada pedagógicos (<= 1,000 elementos), ejecutándose en microsegundos. Al generar una serie inmutable de instantáneas (`SimulationStep[]`) congeladas con `Object.freeze`, logramos navegación bidireccional inmediata (Play, Pausa, Retroceder, Avanzar) sin el costo de serialización y clonación estructurada que impondría `postMessage` en un worker."""

        if any(k in q_lower for k in ["secreto", ".env", "gitleaks", "git-secrets", "vault", "token", "seguridad"]):
            return f"""¡Hola @{author}! Dev Visualizer se distribuye como una aplicación web puramente estática generada con Next.js 16 y servida en GitHub Pages, por lo que ninguna clave privada ni credencial de base de datos forma parte jamás de los archivos enviados al cliente.

Todas las credenciales de automatización residen cifradas en **GitHub Secrets** y se inyectan únicamente en runners efímeros de GitHub Actions. Los flujos de CI auditan cada cambio con `gitleaks` y `npm audit` ([`docs/SECURITY_GOVERNANCE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SECURITY_GOVERNANCE.md))."""

        # Q&A General
        return f"""¡Hola @{author}! Dev Visualizer está estructurado como un atlas interactivo de ingeniería con 73 colecciones y 146 rutas didácticas, desarrollado sobre Next.js 16 (App Router), React 19, TypeScript, Motion y Tailwind CSS.

La plataforma compila como una distribución estática de alto rendimiento (`output: "export"`) sobre más de 350 páginas en GitHub Pages. Nuestro ciclo de entrega ejecuta verificaciones automatizadas de enlaces (`npm run check:links`), integridad de librería (`npm run check:library`) y accesibilidad WCAG (`npm run check:a11y`). Puedes consultar más detalles en [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""

    # 5. Categoría: General
    if norm_cat == "general":
        return f"""¡Hola @{author}! Bienvenido a las discusiones generales de Dev Visualizer.

La misión del proyecto es ofrecer un atlas exhaustivo de ingeniería de software que haga tangibles los conceptos algorítmicos complejos mediante simulaciones interactivas, renderizado a 60fps y narración accesible. Elegir Next.js 16 con exportación estática nos permite eliminar vulnerabilidades de backend y costes de servidor, entregando una experiencia fluida e instantánea en GitHub Pages.

Nos entusiasma mantener este canal abierto para reflexionar sobre diseño de software, patrones de UI y arquitectura web moderna. ¿Qué aspectos técnicos o decisiones de diseño te gustaría profundizar con la comunidad?"""

    # 6. Categoría: Announcements
    if norm_cat == "announcements":
        return f"""¡Hola @{author}! Gracias por seguir los anuncios oficiales de Dev Visualizer.

Cada actualización lanzada en el repositorio atraviesa nuestro pipeline de 7 habilidades de calidad, asegurando que cada nueva colección visual y optimización de código preserve la estabilidad en producción, la accesibilidad WCAG y la velocidad de carga.

Te invitamos a explorar los detalles de arquitectura y el progreso del roadmap en [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`docs/ROADMAP.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/ROADMAP.md)."""

    # 7. Categoría: Polls
    if norm_cat == "polls":
        return f"""¡Hola @{author}! Gracias por convocar esta votación comunitaria en Dev Visualizer.

Desde la perspectiva técnica, evaluar decisiones de arquitectura exige ponderar el impacto en la tasa de renderizado a 60 cuadros por segundo, el tamaño final del paquete estático y la mantenibilidad a largo plazo a través de las 73 colecciones del atlas.

Invitamos a toda la comunidad a participar con su voto y justificar su perspectiva técnica en las respuestas del hilo para enriquecer las futuras decisiones del proyecto."""

    # 8. Categoría: Show and tell
    if norm_cat in ["show and tell", "show & tell"]:
        return f"""¡Hola @{author}! Muchas felicidades por compartir esta demostración con la comunidad de Dev Visualizer.

Resulta muy gratificante comprobar cómo se aplican las simulaciones interactivas y la narrativa audiovisual para comunicar principios de ingeniería de software. Tu trabajo evidencia rigor conceptual y un excelente cuidado en los detalles de interacción.

Te animamos a contrastar patrones de diseño con nuestro motor en [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md) y nuestro sistema de voz en [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md). ¡Gran aportación!"""

    # Fallback por defecto en Español
    return f"""¡Hola @{author}! Gracias por participar en los foros de discusión de Dev Visualizer.

Dev Visualizer es un atlas de ingeniería de software con 73 colecciones y 146 rutas didácticas, desarrollado con Next.js 16, React 19, Motion y Tailwind CSS, compilado íntegramente de forma estática en GitHub Pages.

Para explorar a fondo la arquitectura del sistema, te recomendamos revisar [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""


def generate_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], category: str = "General", escalation: Optional[str] = None) -> Tuple[str, str]:
    """Genera la respuesta contextualizada utilizando Gemini API si está disponible, o el motor de síntesis local."""
    lang = detect_language(discussion_title + " " + query_text)
    api_key = os.environ.get("GEMINI_API_KEY")
    is_bug = is_bug_or_error_report(discussion_title, query_text) or (escalation and "Bug" in escalation)

    if api_key and not (escalation and "Seguridad" in escalation):
        target_lang = "English" if lang == "en" else "Spanish"
        system_instruction = f"""Eres el Agente Centinela de Soporte Técnico y Arquitectura para 'Dev Visualizer' (@{OWNER_DEFAULT}).
Dev Visualizer es un atlas visual educativo de ingeniería de software con 73 colecciones y 146 rutas interactivas, construido sobre Next.js 16 (App Router, export estático), React 19, TypeScript, Motion (Framer Motion 14), Web Speech API y Tailwind CSS.

ESTILO EDITORIAL Y REGLAS OBLIGATORIAS:
1. Responde estrictamente en {target_lang}.
2. FORMATO EN PÁRRAFOS DENSOS Y NATURALES: Estructura la explicación en prosa técnica profunda, cohesiva y fluida (3 o 4 párrafos sustanciales y bien articulados). MINIMIZA LOS ENLISTADOS: usa viñetas únicamente cuando sea estrictamente imprescindible para enumerar fases o checklists breves. Evita a toda costa que la respuesta parezca una lista genérica generada por máquina.
3. TONO DE AUTOR/INGENIERO SENIOR: Utiliza una voz en primera persona del plural ("En Dev Visualizer diseñamos...", "Bajo el capó...", "La razón por la que desacoplamos..."). Conecta el problema de fondo, la decisión de arquitectura, los detalles del código y los trade-offs de rendimiento.
4. PROHIBIDO GENERAR DIAGRAMAS: No uses esquemas ASCII, diagramas de caracteres ni bloques Mermaid. Responde con rigor conceptual y argumentación técnica en la prosa.
5. CITA ARCHIVOS REALES: Haz referencia directa a componentes existentes en el repositorio (`src/lib/audioNarrator.ts`, `src/components/audio/FloatingAudioBubble.tsx`, `scripts/build-concept-search-index.ts`, `docs/AUDITORIA_VISUAL_EN_ACCION.md`, `docs/AUDIO_ARCHITECTURE.md`, `docs/SIMULATION_ENGINE.md`, `docs/CANVAS_RENDERER.md`, `README.md`). Jamás inventes rutas ficticias.

INSTRUCCIONES ESPECÍFICAS SEGÚN LA CATEGORÍA DE DISCUSSIONS: '{category.upper()}':
- Si la categoría es 'IDEAS':
  * Valida y reconoce con calidez y entusiasmo la propuesta de @{author}.
  * Evalúa la viabilidad técnica frente a la arquitectura de Dev Visualizer (ej. para audio/idiomas/dialectos LATAM: Web Speech API BCP 47 como es-MX, es-AR, es-CO, es-CL, es-ES, persistencia en localStorage, desacoplamiento a 60fps de Motion).
  * Estructura un Plan Atómico de Implementación en 3 Fases:
    - Fase 1: Interfaz y Contratos de Preferencia (tipos y selector en FloatingAudioBubble.tsx).
    - Fase 2: Motor de Resolución y Cascada Defensiva (filtrado en window.speechSynthesis.getVoices() y fallback si falta la voz en el sistema operativo).
    - Fase 3: Pruebas y Accesibilidad WCAG (teclado, aria-label, npm run check:a11y y npm run build).
  * Propón incorporar la propuesta al roadmap de GitHub Projects mediante rama atómica 'feat/'.
- Si la categoría es 'Q&A':
  * Responde de forma directa, certera y concisa en el primer párrafo. Cita código o archivos exactos y evita desvíos promocionales.
- Si la categoría es 'GENERAL':
  * Tono conversacional de autor, compartiendo filosofía de diseño, decisiones técnicas y abriendo debate constructivo.
- Si la categoría es 'ANNOUNCEMENTS':
  * Celebra el hito, resume el impacto para los desarrolladores y orienta a la documentación.
- Si la categoría es 'POLLS':
  * Aporta criterios técnicos objetivos con pros y contras para empoderar la votación informada de la comunidad.
- Si la categoría es 'SHOW AND TELL':
  * Felicita al autor, elogia los aciertos de implementación técnica y sugiere constructivamente próximos pasos.

REGLA CRÍTICA ANTE REPORTES DE FALLO O BUG (Activo: {is_bug}):
Si la consulta reporta un error, rotura, freeze, crash o bug, DEBES estructurar un PLAN COMPLETO DE RESOLUCIÓN TÉCNICA:
1. Diagnóstico Preliminar y Causa Raíz Probable.
2. Módulos y Archivos Afectados en el Repositorio.
3. Plan de Solución Técnica Paso a Paso (Reproducción, Parche defensivo, Verificación con comandos).
4. Criterios de Verificación y Mitigación (npm run check:links, npm run check:a11y, npm run build).
5. Trazabilidad y Asignación de Issue interno a @{OWNER_DEFAULT}.

MENCIÓN NIVEL 1: Incluye al final la mención a @{OWNER_DEFAULT} para seguimiento: *(CC: @{OWNER_DEFAULT} para seguimiento)*."""

        prompt = f"{system_instruction}\n\nContexto vivo del repositorio:\n{json.dumps(context, ensure_ascii=False, indent=2)}\n\nCategoría de la discusión: {category}\nTítulo de la discusión: {discussion_title}\nConsulta de @{author}:\n{query_text}\n\nRespuesta técnica:"
        gemini_reply = call_gemini_api(prompt, api_key)
        if gemini_reply:
            if f"@{OWNER_DEFAULT}" not in gemini_reply:
                gemini_reply += f"\n\n*(CC: @{OWNER_DEFAULT} para seguimiento)*"
            return gemini_reply, lang

    reply = synthesize_project_response(discussion_title, query_text, author, context, category=category, lang=lang, escalation=escalation)
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

        reply_body, lang = generate_response(title, body, author, context, category=category, escalation=escalation)

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
        send_whatsapp_draft_notification(
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
                    send_whatsapp_cancelled_notification(num, title, author, url)
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
        send_whatsapp_published_notification(num, title, author, url)

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
