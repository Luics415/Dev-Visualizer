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

STANDARD_LABELS = {
    "enhancement": {"color": "a2eeef", "desc": "Nuevas características o solicitudes de mejora"},
    "idea": {"color": "FEF2C0", "desc": "Propuestas y nuevas ideas de la comunidad"},
    "bug": {"color": "d73a4a", "desc": "Errores o mal funcionamiento reportado"},
    "question": {"color": "d876e3", "desc": "Preguntas técnicas o consultas de arquitectura"},
    "documentation": {"color": "0075ca", "desc": "Documentación, especificaciones y guías"},
    "ui/ux": {"color": "7057ff", "desc": "Interfaz de usuario, diseño visual y experiencia"},
    "audio": {"color": "D4C5F9", "desc": "Locución por voz, Web Speech API y accesibilidad auditiva"},
    "performance": {"color": "0e8a16", "desc": "Rendimiento, optimización y tiempos de carga"},
    "accessibility": {"color": "0052cc", "desc": "Accesibilidad web y cumplimiento WCAG"},
    "security": {"color": "b60205", "desc": "Seguridad, secretos y hardening"},
    "rfc": {"color": "fbca04", "desc": "Petición de comentarios o votación comunitaria"},
    "showcase": {"color": "c2e0c6", "desc": "Proyectos, creaciones y aportaciones de la comunidad"},
    "Data Structures": {"color": "aaaaaa", "desc": "Estructuras de datos y representaciones en memoria"},
    "Educational": {"color": "aaaaaa", "desc": "Contenido didáctico y formativo"},
    "escalado-centinela": {"color": "e99695", "desc": "Escalamiento autónomo gestionado por el Agente Centinela"}
}

PROJECTS_MAPPING = {
    "Dev-Visualizer": {
        "number": 10,
        "name": "Dev-Visualizer Ecosystem",
        "url": "https://github.com/users/Luics415/projects/10"
    },
    "Luics415.github.io": {
        "number": 7,
        "name": "Luics415 Portfolio & Personal Labs",
        "url": "https://github.com/users/Luics415/projects/7"
    },
    "Portafolio": {
        "number": 7,
        "name": "Luics415 Portfolio & Personal Labs",
        "url": "https://github.com/users/Luics415/projects/7"
    },
    "Bio-Gesture-Control-Pro-Eyes": {
        "number": 11,
        "name": "Bio-Gesture Control Pro Eyes",
        "url": "https://github.com/users/Luics415/projects/11"
    },
    "MenuOrders": {
        "number": 9,
        "name": "MenuOrders Suite Roadmap",
        "url": "https://github.com/users/Luics415/projects/9"
    }
}


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


def is_proposal_or_feature_request(title: str, text: str) -> bool:
    """Evalúa si la consulta representa una propuesta, idea, mejora o solicitud de cambio."""
    combined = (title + " " + text).lower()
    patterns = [
        r"\b(propuesta|propongo|proponer|me gustar[ií]a|podr[ií]amos|agregar|a[ñn]adir|implementar|feature|nueva caracter[ií]stica|solicitud|solicito|cambio|incorporar|soporte para|nueva funci[oó]n|sugerencia|sugiero|suggestion|suggest|would like|could we|feature request)\b"
    ]
    return any(re.search(p, combined) for p in patterns)


def should_create_planning_issue(category: str, title: str, text: str) -> bool:
    """Determina si la consulta justifica crear formalmente un Issue de planificación y roadmap."""
    norm_cat = category.strip().lower()
    if norm_cat == "ideas":
        return True
    if is_proposal_or_feature_request(title, text):
        return True
    if is_bug_or_error_report(title, text):
        return True
    return False


def determine_discussion_labels(category: str, title: str, text: str, context: Optional[Dict[str, Any]] = None) -> List[str]:
    """Infiere etiquetas acordes y precisas basadas en la categoría de Discussions y el contenido semántico."""
    labels = set()
    combined = (category + " " + title + " " + text).lower()
    norm_cat = category.strip().lower()

    # 1. Categoría base
    if norm_cat == "ideas":
        labels.add("idea")
        labels.add("enhancement")
    elif norm_cat == "q&a":
        labels.add("question")
    elif norm_cat == "announcements":
        labels.add("documentation")
    elif norm_cat == "polls":
        labels.add("rfc")
    elif norm_cat == "show and tell":
        labels.add("showcase")
    elif norm_cat == "general":
        labels.add("question")

    # 2. Detección de Errores / Bugs
    if is_bug_or_error_report(title, text):
        labels.add("bug")

    # 3. Propuesta o Solicitud en cualquier categoría
    if is_proposal_or_feature_request(title, text):
        labels.add("enhancement")
        labels.add("idea")

    # 4. Áreas Temáticas del Repositorio
    if re.search(r"(audio|auditiv|voz|voces|speech|narrad|narrac|locuci[oó]n|sonido|sound|habla|idioma|idiomas|dialect|accent|es-mx|es-ar|es-co|es-cl|es-es)", combined):
        labels.add("audio")
    if re.search(r"\b(ui|ux|diseño|estilo|css|tailwind|interfaz|componente|visual|layout|canvas)\b", combined):
        labels.add("ui/ux")
    if re.search(r"\b(rendimiento|performance|lcp|speed|fps|lag|render|velocidad|optimiz|60fps)\b", combined):
        labels.add("performance")
    if re.search(r"\b(accesib|a11y|wcag|lector de pantalla|aria|contraste|screen reader)\b", combined):
        labels.add("accessibility")
    if re.search(r"\b(seguridad|token|secret|cve|vulnerab|leak|expuesto|privad|gitleaks)\b", combined):
        labels.add("security")
    if re.search(r"\b(doc|documentac|gu[ií]a|readme|tutorial|explicaci[oó]n)\b", combined):
        labels.add("documentation")
    if re.search(r"\b(algoritmo|estructura de datos|data structure|sorting|binary tree|grafo|hash)\b", combined):
        labels.add("Data Structures")
        labels.add("Educational")

    return sorted(list(labels))


def ensure_labels_exist(repo: str, labels: List[str]) -> None:
    """Garantiza que las etiquetas existan en el repositorio de GitHub con colores estándar."""
    for lab in labels:
        meta = STANDARD_LABELS.get(lab, {"color": "0075ca", "desc": f"Etiqueta de {lab}"})
        cmd = [
            "gh", "label", "create", lab,
            "--repo", repo,
            "--color", meta["color"],
            "--description", meta["desc"]
        ]
        try:
            run_cmd(cmd, check=False)
        except Exception:
            pass


def apply_labels_to_discussion(disc_id: str, labels: List[str], repo: str, dry_run: bool = False) -> bool:
    """Aplica las etiquetas resueltas a la Discusión de GitHub mediante la mutación addLabelsToLabelable."""
    if not disc_id or not labels:
        return False
    if dry_run:
        log(f"[SIMULACIÓN] Se asignarían etiquetas a la Discusión: {labels}")
        return True

    ensure_labels_exist(repo, labels)

    parts = repo.split("/")
    owner = parts[0] if len(parts) > 0 else OWNER_DEFAULT
    repo_name = parts[1] if len(parts) > 1 else repo

    query = """query($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        labels(first: 100) {
          nodes {
            id
            name
          }
        }
      }
    }"""
    try:
        res = run_cmd(["gh", "api", "graphql", "-F", f"owner={owner}", "-F", f"repo={repo_name}", "-f", f"query={query}"])
        data = json.loads(res)
        all_labels = data.get("data", {}).get("repository", {}).get("labels", {}).get("nodes", [])
        label_map = {node["name"].lower(): node["id"] for node in all_labels}

        label_ids = []
        for lab in labels:
            lab_id = label_map.get(lab.lower())
            if lab_id and lab_id not in label_ids:
                label_ids.append(lab_id)

        if not label_ids:
            return False

        mutation = """mutation($labelableId: ID!, $labelIds: [ID!]!) {
          addLabelsToLabelable(input: {labelableId: $labelableId, labelIds: $labelIds}) {
            labelable {
              ... on Discussion {
                id
              }
            }
          }
        }"""
        args = ["gh", "api", "graphql", "-F", f"labelableId={disc_id}"]
        for lid in label_ids:
            args.extend(["-F", f"labelIds[]={lid}"])
        args.extend(["-f", f"query={mutation}"])

        run_cmd(args)
        log(f"Etiquetas asignadas con éxito a la Discusión: {labels}")
        return True
    except Exception as e:
        log(f"Aviso al asignar etiquetas a la discusión: {e}")
        return False


def add_issue_to_project(issue_url: str, project_number: int, owner: str) -> bool:
    """Intenta incorporar el Issue al tablero de GitHub Projects V2 del propietario."""
    try:
        cmd = ["gh", "project", "item-add", str(project_number), "--owner", owner, "--url", issue_url]
        out = run_cmd(cmd, check=False)
        if "error" in out.lower() or "missing required scopes" in out.lower():
            log(f"Aviso: Para incorporar directamente al tablero V2 (#{project_number}), el token requiere el scope 'project'. El Issue fue registrado con enlace directo al tablero.")
            return False
        log(f"Issue incorporado al tablero de GitHub Projects #{project_number}: {out}")
        return True
    except Exception as e:
        log(f"Aviso de vinculación en GitHub Projects: {e}")
        return False


def create_planning_issue(
    owner: str,
    repo: str,
    disc_number: int,
    title: str,
    author: str,
    query_text: str,
    category: str,
    labels: List[str],
    dry_run: bool = False
) -> Optional[Dict[str, Any]]:
    """Crea un Issue formal de planificación y roadmap asignado al mantenedor sin fusionar PRs a main."""
    clean_repo = repo.split("/")[-1] if "/" in repo else repo
    project_info = PROJECTS_MAPPING.get(clean_repo, {
        "number": 10 if "Dev-Visualizer" in clean_repo else 7,
        "name": "Dev-Visualizer Ecosystem" if "Dev-Visualizer" in clean_repo else "Luics415 Portfolio & Personal Labs",
        "url": f"https://github.com/users/{owner}/projects/" + ("10" if "Dev-Visualizer" in clean_repo else "7")
    })

    search_query = f"Discusión #{disc_number}"
    try:
        search_res = run_cmd([
            "gh", "issue", "list",
            "--repo", f"{owner}/{clean_repo}",
            "--search", search_query,
            "--state", "all",
            "--json", "number,title,url"
        ], check=False)
        if search_res:
            issues = json.loads(search_res)
            if issues:
                log(f"Ya existe un Issue asociado a la Discusión #{disc_number}: #{issues[0]['number']}")
                slug = re.sub(r"[^a-zA-Z0-9]+", "-", title.lower()).strip("-")[:35]
                prefix_branch = "fix" if is_bug_or_error_report(title, query_text) else "feat"
                return {
                    "number": issues[0]["number"],
                    "url": issues[0]["url"],
                    "title": issues[0]["title"],
                    "branch": f"{prefix_branch}/{slug}",
                    "project_name": project_info["name"],
                    "project_url": project_info["url"],
                    "project_number": project_info["number"]
                }
    except Exception as e:
        log(f"Aviso al verificar issues existentes: {e}")

    is_bug = is_bug_or_error_report(title, query_text)
    norm_cat = category.strip().lower()

    if is_bug:
        prefix = "[ERROR]"
        prefix_branch = "fix"
    elif norm_cat == "ideas":
        prefix = "[PROPUESTA]"
        prefix_branch = "feat"
    else:
        prefix = "[SOLICITUD]"
        prefix_branch = "feat"

    slug = re.sub(r"[^a-zA-Z0-9]+", "-", title.lower()).strip("-")[:35]
    branch_name = f"{prefix_branch}/{slug}"
    issue_title = f"{prefix} {title[:60]} (#{disc_number})"

    if is_bug:
        plan_section = """### 🛠️ Plan de Solución Técnica Paso a Paso
1. **Reproducción y Aislamiento:** Validar el comportamiento reportado en entorno local (`npm run dev`) emulando resoluciones móviles (360px-430px) y capturando excepciones de consola.
2. **Parche Defensivo de Código:** Aplicar guardas defensivas ante referencias nulas y desacoplamiento de listeners/estados en el ciclo de vida de componentes.
3. **Compuertas de Calidad Automatizadas:**
   - `npm run check:links` (cero enlaces rotos)
   - `npm run check:library` (consistencia documental en atlas)
   - `npm run check:a11y` (cumplimiento WCAG 2.1 AA)
   - `npm run build` (compilación estática limpia)
4. **Verificación de Cero Regresión:** Confirmar ausencia total de desbordamiento horizontal en pantallas móviles."""
    else:
        plan_section = """### 📋 Plan Atómico de Implementación por Fases
- [ ] **Fase 1: Interfaz, Contratos y Especificación:** Definir contratos de datos fuertemente tipados, accesibilidad y componentes visuales en `src/`.
- [ ] **Fase 2: Motor de Lógica y Cascada Defensiva:** Implementación modular con fallbacks seguros sin degradar el rendimiento a 60fps ni el bundle estático.
- [ ] **Fase 3: Pruebas, Accesibilidad y Validación:** Ejecución de `npm run check:a11y`, `npm run build` y pruebas de navegación multiplataforma."""

    body = f"""## 📌 Origen del Requerimiento
- **Tipo:** {"Reporte de Error / Incidente Técnico" if is_bug else "Propuesta / Solicitud de la Comunidad"}
- **Discusión de Origen:** [Discusión #{disc_number}](https://github.com/{owner}/{clean_repo}/discussions/{disc_number})
- **Autor:** @{author}
- **Tablero de Proyecto:** [{project_info['name']} (Project #{project_info['number']})]({project_info['url']})
- **Rama Atómica Sugerida:** `{branch_name}`

---

## 🎯 Alcance y Especificación
{query_text.strip()[:650]}

---

{plan_section}

---

## 🔒 Política de Integración y Gobernanza
> [!IMPORTANT]
> De conformidad con `AGENTS.md`, la rama `{branch_name}` y el Pull Request correspondiente se preparan de forma atómica y **permanecen estrictamente pendientes de revisión y autorización explícita de @{owner}** antes de su fusión a `main`. Queda prohibido el merge automático.
"""

    if dry_run:
        log(f"[SIMULACIÓN] Crearía Issue '{issue_title}' con etiquetas {labels} asignado a @{owner}")
        return {
            "number": 999,
            "url": f"https://github.com/{owner}/{clean_repo}/issues/simulation-{disc_number}",
            "title": issue_title,
            "branch": branch_name,
            "project_name": project_info["name"],
            "project_url": project_info["url"],
            "project_number": project_info["number"]
        }

    ensure_labels_exist(f"{owner}/{clean_repo}", labels)
    cmd = [
        "gh", "issue", "create",
        "--repo", f"{owner}/{clean_repo}",
        "--title", issue_title,
        "--body", body,
        "--label", ",".join(labels),
        "--assignee", owner
    ]
    try:
        out = run_cmd(cmd)
        m = re.search(r"/issues/(\d+)", out)
        if m:
            issue_num = int(m.group(1))
            issue_url = out.strip()
            log(f"Issue de planificación creado con éxito: #{issue_num} ({issue_url})")

            add_issue_to_project(issue_url, project_info["number"], owner)

            return {
                "number": issue_num,
                "url": issue_url,
                "title": issue_title,
                "branch": branch_name,
                "project_name": project_info["name"],
                "project_url": project_info["url"],
                "project_number": project_info["number"]
            }
    except Exception as e:
        log(f"Aviso al crear Issue de planificación: {e}")

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
        if c_author.lower() == OWNER_DEFAULT.lower() or c_author.lower() in [b.lower() for b in bot_logins]:
            return False

    return True


def call_gemini_api(prompt: str, api_key: str) -> Optional[str]:
    """Invoca la API de Gemini utilizando modelos actualizados y encabezados oficiales con diagnóstico y reintentos ante saturación."""
    models = [
        "gemini-3.8-flash",
        "gemini-3.5-flash-lite",
        "gemini-2.5-flash-lite",
        "gemini-1.5-flash",
        "gemini-1.5-pro"
    ]
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
                    with urllib.request.urlopen(req, timeout=65) as resp:
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


def synthesize_project_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], category: str = "General", lang: str = "es", escalation: Optional[str] = None, planning_issue: Optional[Dict[str, Any]] = None) -> str:
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

        # 4. Category: Announcements
        if norm_cat == "announcements":
            return f"""Hello @{author}! Thank you for following Dev Visualizer's official updates and milestones.

Every update in this repository is delivered through atomic pull requests and validated across our 7-skill governance pipeline. Our static pre-rendering architecture ensures that all new visualizers and collections maintain 60fps rendering fidelity and full keyboard accessibility.

You can inspect the detailed changelogs, architecture indices, and roadmap progress in [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`docs/ROADMAP.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/ROADMAP.md)."""

        # 5. Category: Polls
        if norm_cat == "polls":
            return f"""Hello @{author}! Thank you for launching this community poll. Decision-making driven by informed community perspective is fundamental to our open-source evolution.

From an engineering standpoint, evaluating architectural choices requires balancing rendering performance (maintaining 60fps with Motion and Web Speech API), bundle size constraints under Next.js 16 static export (`output: "export"`), and long-term maintainability across 73 collections.

We encourage everyone to vote and share their technical rationale in the comments to help guide our project roadmap!"""

        # 6. Category: Show and tell
        if norm_cat in ["show and tell", "show & tell"]:
            return f"""Hello @{author}! Congratulations on sharing this project showcase with the Dev Visualizer community!

It is inspiring to see how engineers leverage visual metaphors, interactive simulations, and accessible design to communicate complex technical concepts. Your implementation demonstrates strong attention to engineering detail and user experience.

If you are interested in exploring further synergies or adapting complementary visual patterns, feel free to review our simulation engine design in [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md) and our audio architecture in [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md). Great work!"""

        # 7. Specific Technical Inquiries (Audio/Speech, Bundle/Code-splitting, Technologies, Quizzes, Search, Simulation, Secrets, Accessibility, Canvas/60fps)
        if any(k in q_lower for k in ["bundle", "bundle size", "code split", "code-split", "splitting", "chunk", "lazy", "dynamic import", "payload", "weight", "initial load"]):
            return f"""Hello @{author}! In Dev Visualizer, preventing large educational modules and interactive visualizers from bloating the initial client bundle is achieved by strictly decoupling content discovery metadata from runtime interactive code.

The root client entry point only downloads a compact, pre-compiled concept manifest (`src/data/conceptsManifest.ts`, ~12KB) and pre-calculated statistical indices rather than full visualizer payloads. Heavy educational visualizers, Canvas/SVG simulators, and interactive labs are dynamically imported on-demand via Next.js 16 dynamic imports (`next/dynamic` with `ssr: false`). When a user accesses an individual route (such as `/coleccion-en-accion/[id]`), the browser requests only the isolated chunk corresponding to that specific collection.

Furthermore, static pre-rendering under Next.js 16 (`output: "export"`) compiles over 350 static HTML shells at build time. This ensures that initial page navigation remains instantaneous and sub-millisecond on GitHub Pages, without carrying the weight of unvisited simulation engines in the initial JavaScript bundle."""

        if any(k in q_lower for k in ["technolog", "tech stack", "stack", "framework", "library", "libraries", "dependency", "dependencies", "built with"]):
            return f"""Hello @{author}! Dev Visualizer is architected upon a modern, zero-compromise frontend engineering stack designed for 60fps interactive pedagogical simulations and static edge delivery on GitHub Pages.

Under the hood, the foundation is built on:
- **Next.js 16 (App Router):** Compiles into a completely static export distribution (`output: "export"`) across more than 350 pages, eliminating backend server overhead and runtime vulnerabilities.
- **React 19:** Leverages concurrent features and `useSyncExternalStore` for atomic, flicker-free audio state subscriptions without hydration mismatches.
- **TypeScript 6:** Enforces end-to-end type safety across concept manifests, simulation snapshots (`SimulationStep[]`), and interactive canvas renderers.
- **Motion 14 (Framer Motion):** Orchestrates GPU-accelerated hardware transforms (`transform`, `opacity`) guaranteed at 60 frames per second.
- **Web Speech API (`SpeechSynthesis`):** Provides client-side speech narration managed by [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts), running on a dedicated audio thread completely isolated from the UI rendering loop.
- **Tailwind CSS v4:** Delivers zero-runtime utility styles with comprehensive dark and light theme adaptability.
- **Automated 7-Skill Quality Pipeline:** Enforces continuous CI gates: link integrity (`npm run check:links`), catalog consistency (`npm run check:library`), and WCAG accessibility standards (`npm run check:a11y`). Consult [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md) for full architecture blueprints."""

        if any(k in q_lower for k in ["quiz", "quizzes", "evaluat", "question", "questions", "trivia", "score", "badge", "badges"]):
            return f"""Hello @{author}! The quiz and evaluation architecture in Dev Visualizer is powered by [`src/components/quiz/QuizRunner.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/quiz/QuizRunner.tsx), designed to assess conceptual mastery across all 73 collections.

To guarantee unbiased educational evaluation, question options are dynamically shuffled per session using randomized indexing, preventing positional bias (such as the correct answer always resting in the second option). The state machine calculates real-time feedback, displays immediate conceptual explanations, and persists earned topic badges directly in browser `localStorage`.

This decoupled client-first design allows interactive evaluation and badge retention to operate seamlessly within our static Next.js 16 distribution without requiring external databases or user authentication."""

        if any(k in q_lower for k in ["speech", "speechsynthesis", "audio", "narrat", "voice", "sound", "audiovisual"]):
            return f"""Hello @{author}! In Dev Visualizer, auditory narration and 60fps visual rendering are strictly decoupled to guarantee zero frame drops during playback across all 73 technical collections.

Motion (Framer Motion 14) and Canvas/SVG renderers compute GPU-accelerated transformations (`transform`, `opacity`) via `requestAnimationFrame` on the main thread, while voice playback is delegated to the browser's Web Speech API (`SpeechSynthesis`) in an isolated audio thread managed by [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts). To prevent mobile Chromium from prematurely freezing speech on utterances longer than 15 seconds, our `splitTextIntoNarrationChunks` utility splits narration into punctuation-bounded segments of 140 characters or fewer.

State is exposed as an immutable `AudioNarratorSnapshot` consumed by UI components like [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx) via React 19's `useSyncExternalStore`, preventing hydration mismatches during static Next.js 16 export (`output: "export"`). More details can be found in [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md)."""

        if any(k in q_lower for k in ["accessib", "a11y", "wcag", "aria", "keyboard", "screen reader", "contrast"]):
            return f"""Hello @{author}! Accessibility in Dev Visualizer is treated as a first-class engineering contract conforming strictly to WCAG 2.1 AA specifications.

All interactive visualizers incorporate full keyboard navigation (Tab, Shift+Tab, Enter, Escape, Arrow keys) with visible focus rings and focus trapping inside modal dialogs. Auditory narration driven by [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts) dispatches announcements through `aria-live="polite"` regions so assistive screen readers remain synchronized with animated step transitions.

Every pull request must pass our automated static audit suite (`npm run check:a11y` via `scripts/validate-a11y-standards.mjs`), validating color contrast ratios, explicit form labels, and semantic landmark roles."""

        if any(k in q_lower for k in ["search", "indexer", "index", "modal", "query"]):
            return f"""Hello @{author}! The concept search engine in Dev Visualizer operates with zero runtime network requests by pre-compiling search indices during the build phase.

In [`scripts/build-concept-search-index.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/scripts/build-concept-search-index.ts), our build step traverses all 73 collections and maps concepts into compact tuples in `src/data/conceptSearchIndex.ts`. At runtime, the modal performs in-memory token filtering with instant sub-millisecond responsiveness, integrated with our keyboard navigation shortcuts ([`docs/KEYBOARD_SHORTCUTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/KEYBOARD_SHORTCUTS.md))."""

        if any(k in q_lower for k in ["worker", "web worker", "simulation", "algorithm", "timeline"]):
            return f"""Hello @{author}! We intentionally favor main-thread pre-computation over Web Workers for our pedagogical simulation engine.

As documented in [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md), algorithms operate over input spaces of 1,000 elements or fewer, executing in microseconds. Computing the full series of immutable snapshots (`SimulationStep[]`) frozen with `Object.freeze` provides zero-latency random access scrubbing (Play, Pause, StepForward, StepBackward) and avoids the heavy serialization and garbage collection overhead of `postMessage` worker communication."""

        if any(k in q_lower for k in ["60fps", "fps", "canvas", "webgl", "gpu", "animation", "frame rate", "smoothness"]):
            return f"""Hello @{author}! Maintaining a constant 60 frames per second during complex algorithm visualizations is achieved by strictly offloading animations to GPU-composited layers.

Motion (Framer Motion 14) and our specialized Canvas/SVG renderers mutate only GPU-accelerated CSS properties (`transform`, `opacity`), avoiding costly layout recalculations (`reflow`) and paint bottlenecks. As documented in [`docs/CANVAS_RENDERER.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/CANVAS_RENDERER.md), simulation logic computes immutable snapshot arrays upfront, allowing `requestAnimationFrame` loops to render state transitions without competing for CPU cycles."""

        if any(k in q_lower for k in ["secret", ".env", "gitleaks", "git-secrets", "vault", "token", "security"]):
            return f"""Hello @{author}! Dev Visualizer is deployed strictly as a static web application on Next.js 16 and GitHub Pages, meaning no server-side secrets or runtime database credentials ever exist in client bundles.

All automation credentials and API tokens reside exclusively in encrypted **GitHub Secrets**, injected only inside ephemeral GitHub Actions runners. Continuous integration workflows enforce strict automated scanning via `gitleaks` and `npm audit` ([`docs/SECURITY_GOVERNANCE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SECURITY_GOVERNANCE.md))."""

        # 8. General Open Discussion
        if norm_cat == "general":
            return f"""Hello @{author}! Thank you for initiating this discussion in Dev Visualizer's community forum.

Our platform was architected with a singular technical mission: to demystify complex software engineering algorithms and distributed systems paradigms through rigorous, accessible visual and auditory simulations. By adhering to Next.js 16 static site generation (`output: "export"`), we eliminate backend infrastructure vulnerabilities and hosting overhead while guaranteeing instant global delivery on GitHub Pages.

We actively encourage architectural discussions around UI performance, accessibility, and modern frontend design. What specific engineering perspectives or trade-offs would you like to explore together?"""

        # Differentiated Q&A / Inquiry Synthesis in English
        query_excerpt = query_text.strip().replace("\r", " ").replace("\n", " ")[:160]
        return f"""Hello @{author}! Regarding your question on *"{discussion_title}"* in Dev Visualizer:

Dev Visualizer is architected as an interactive educational software engineering atlas delivering 73 collections across 146 routes, built on Next.js 16 (App Router), React 19, TypeScript, Motion, and Tailwind CSS. In reference to "{query_excerpt}...", our architecture addresses this through decoupled state machines, in-memory compute models, and static pre-rendering (`output: "export"`) hosted on GitHub Pages.

Each educational domain operates under strict quality checks, ensuring that visual simulations, audio narration, and interactive quizzes function with zero server dependencies and instantaneous response times.

You can inspect the relevant technical blueprints and implementation details directly in [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) and [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md). Feel free to share any follow-up questions to explore this further!"""

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

    # 4. Categoría: Announcements
    if norm_cat == "announcements":
        return f"""¡Hola @{author}! Gracias por seguir los anuncios oficiales de Dev Visualizer.

Cada actualización lanzada en el repositorio atraviesa nuestro pipeline de 7 habilidades de calidad, asegurando que cada nueva colección visual y optimización de código preserve la estabilidad en producción, la accesibilidad WCAG y la velocidad de carga.

Te invitamos a explorar los detalles de arquitectura y el progreso del roadmap en [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`docs/ROADMAP.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/ROADMAP.md)."""

    # 5. Categoría: Polls
    if norm_cat == "polls":
        return f"""¡Hola @{author}! Gracias por convocar esta votación comunitaria en Dev Visualizer.

Desde la perspectiva técnica, evaluar decisiones de arquitectura exige ponderar el impacto en la tasa de renderizado a 60 cuadros por segundo, el tamaño final del paquete estático y la mantenibilidad a largo plazo a través de las 73 colecciones del atlas.

Invitamos a toda la comunidad a participar con su voto y justificar su perspectiva técnica en las respuestas del hilo para enriquecer las futuras decisiones del proyecto."""

    # 6. Categoría: Show and tell
    if norm_cat in ["show and tell", "show & tell"]:
        return f"""¡Hola @{author}! Muchas felicidades por compartir esta demostración con la comunidad de Dev Visualizer.

Resulta muy gratificante comprobar cómo se aplican las simulaciones interactivas y la narrativa audiovisual para comunicar principios de ingeniería de software. Tu trabajo evidencia rigor conceptual y un excelente cuidado en los detalles de interacción.

Te animamos a contrastar patrones de diseño con nuestro motor en [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md) y nuestro sistema de voz en [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md). ¡Gran aportación!"""

    # 7. Consultas Técnicas Específicas (Bundle/Code-splitting, Tecnologías, Quizzes, Audio/Locución, Accesibilidad, Búsqueda, Simulación, 60fps/Canvas, Secretos)
    if any(k in q_lower for k in ["bundle", "peso", "carga", "chunk", "split", "code-splitting", "lazy", "dynamic", "tamano", "tamaño", "peso inicial", "payload", "manifiesto", "manifest"]):
        return f"""¡Hola @{author}! En Dev Visualizer, evitar que los módulos educativos amplios y las simulaciones interactivas sobrecarguen el bundle inicial del cliente es un principio central de diseño arquitectónico.

La plataforma resuelve este reto desacoplando estrictamente el estado de descubrimiento del contenido educativo respecto a su ejecución en tiempo de runtime. El punto de entrada del cliente descarga únicamente un manifiesto ultraligero y precompilado (`src/data/conceptsManifest.ts`, ~12KB) junto con índices estadísticos precalculados, en lugar de importar todos los módulos pedagógicos por adelantado.

Las simulaciones visuales densas, los renderizadores SVG/Canvas y los componentes de laboratorio se cargan de forma diferida bajo demanda utilizando importaciones dinámicas de Next.js 16 (`next/dynamic` con `ssr: false`). Cuando un usuario accede a una ruta específica (`/coleccion-en-accion/[id]`), el navegador descarga exclusivamente el chunk JavaScript correspondiente a esa colección. Este enfoque, sumado a la exportación estática de más de 350 páginas (`output: "export"`), garantiza que la carga inicial en GitHub Pages se mantenga en submilisegundos sin pagar el costo de módulos no visitados."""

    if any(k in q_lower for k in ["tecnolog", "stack", "framework", "libreria", "librerias", "herramientas", "dependencia", "dependencias", "construido con"]):
        return f"""¡Hola @{author}! Dev Visualizer está construido sobre un stack técnico moderno y riguroso, optimizado para ofrecer simulaciones didácticas interactivas a 60 cuadros por segundo y distribución estática de alto rendimiento en GitHub Pages.

Los pilares tecnológicos más puntuales del proyecto son:
- **Next.js 16 (App Router):** Compilado con exportación puramente estática (`output: "export"`), generando más de 350 páginas HTML/JS pre-renderizadas sin depender de servidores activos ni bases de datos en runtime.
- **React 19:** Base de la reactividad de componentes, aprovechando `useSyncExternalStore` para sincronizar el estado fonético del narrador de voz sin saltos de hidratación ni parpadeos.
- **TypeScript 6:** Garantiza tipado estático estricto en manifiestos de conceptos, contratos de simulación (`SimulationStep[]`) y utilidades matemáticas.
- **Motion 14 (Framer Motion):** Orquestación de animaciones aceleradas por hardware GPU (`transform`, `opacity`) que sostienen 60fps continuos sin recalcular el layout del DOM.
- **Web Speech API (`SpeechSynthesis`):** Locución de audio nativa desacoplada del hilo de renderizado visual a través de [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts), permitiendo lectura auditiva accesible sin paquetes pesados de terceros.
- **Tailwind CSS v4:** Motor de estilos utility-first sin tiempo de ejecución (zero-runtime overhead) con soporte completo para temas oscuro y claro.
- **Pipeline de 7 Habilidades y CI/CD:** Verificaciones automatizadas en GitHub Actions que auditan enlaces (`npm run check:links`), integridad del catálogo (`npm run check:library`), accesibilidad WCAG (`npm run check:a11y`), `gitleaks` y `npm audit`. Puedes revisar los detalles completos en [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md)."""

    if any(k in q_lower for k in ["quiz", "quizzes", "evaluac", "pregunta", "preguntas", "trivia", "examen", "puntuacion", "puntaje", "badge", "insignia", "insignias"]):
        return f"""¡Hola @{author}! El sistema de evaluación y quizzes de Dev Visualizer está centralizado en [`src/components/quiz/QuizRunner.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/quiz/QuizRunner.tsx), integrando cuestionarios técnicos para las 73 colecciones del atlas.

Para asegurar un aprendizaje riguroso, las opciones de respuesta se desordenan dinámicamente en cada sesión mediante aleatorización determinista, eliminando cualquier sesgo posicional (evitando que la respuesta correcta recaiga repetidamente en una opción fija). El motor evalúa aciertos en el cliente al instante, ofreciendo retroalimentación conceptual detallada y registrando las insignias obtenidas en `localStorage`.

Esto permite validar el dominio técnico y preservar los logros del estudiante de forma privada y sin necesidad de bases de datos remotas dentro de nuestra exportación estática de Next.js 16."""

    if any(k in q_lower for k in ["speech", "speechsynthesis", "audio", "narrac", "voz", "voces", "sonido", "audiovisual", "locucion"]):
        return f"""¡Hola @{author}! En Dev Visualizer, la locución por voz y la animación a 60fps están estrictamente desacopladas para impedir que compitan por el hilo principal de renderizado en las 73 colecciones del proyecto.

Motion (Framer Motion 14) y los renderizadores SVG/Canvas se apoyan exclusivamente en transformaciones de GPU (`transform`, `opacity`) sincronizadas con `requestAnimationFrame`. La voz se ejecuta en un hilo de audio independiente del sistema operativo a través de la Web Speech API nativa (`SpeechSynthesis`), orquestada por el singleton centralizado en [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts). Para evitar que navegadores móviles (especialmente Chromium en Android) congelen la locución en frases mayores a 15 segundos, la utilidad `splitTextIntoNarrationChunks` divide el contenido en bloques breves delimitados por puntuación (máximo 140 caracteres).

El estado se consume mediante el hook reactivo `useSyncExternalStore` de React 19 en [`src/components/audio/FloatingAudioBubble.tsx`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/components/audio/FloatingAudioBubble.tsx), evitando discrepancias de hidratación durante la exportación estática de más de 350 páginas en Next.js 16 (`output: "export"`). Consulta la arquitectura completa en [`docs/AUDIO_ARCHITECTURE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/AUDIO_ARCHITECTURE.md)."""

    if any(k in q_lower for k in ["accesib", "a11y", "wcag", "aria", "teclado", "screen reader", "lector de pantalla", "contraste"]):
        return f"""¡Hola @{author}! En Dev Visualizer la accesibilidad es un compromiso de ingeniería innegociable bajo los lineamientos WCAG 2.1 AA.

Todos los componentes interactivos cuentan con soporte integral para navegación por teclado (Tab, Shift+Tab, Enter, Escape y flechas), indicadores visibles de foco y confinamiento de foco en ventanas modales. El sistema de audio narración coordinado por [`src/lib/audioNarrator.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/src/lib/audioNarrator.ts) expone regiones `aria-live="polite"` para que los lectores de pantalla anuncien el avance de cada paso didáctico en tiempo real.

Adicionalmente, nuestro pipeline de CI valida automáticamente los estándares a11y en cada Pull Request mediante el script `scripts/validate-a11y-standards.mjs` (`npm run check:a11y`), garantizando contrastes cromáticos y etiquetas semánticas válidas."""

    if any(k in q_lower for k in ["busqueda", "buscar", "indexador", "indice", "modal"]):
        return f"""¡Hola @{author}! El indexador de conceptos de Dev Visualizer opera sin peticiones de red en tiempo de ejecución gracias a una fase de pre-compilación durante el build.

El script en [`scripts/build-concept-search-index.ts`](https://github.com/Luics415/Dev-Visualizer/blob/main/scripts/build-concept-search-index.ts) recorre las 73 colecciones y emite un índice estático ultra-liviano en `src/data/conceptSearchIndex.ts`. En el navegador, el modal ejecuta coincidencia de tokens en memoria en submilisegundos, enlazado directamente con el sistema de atajos de teclado ([`docs/KEYBOARD_SHORTCUTS.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/KEYBOARD_SHORTCUTS.md))."""

    if any(k in q_lower for k in ["simulacion", "algoritmo", "worker", "web worker", "timeline"]):
        return f"""¡Hola @{author}! En Dev Visualizer optamos deliberadamente por pre-cálculo síncrono en memoria pura en el hilo principal antes que Web Workers para las simulaciones didácticas.

Tal como documenta [`docs/SIMULATION_ENGINE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SIMULATION_ENGINE.md), los algoritmos se calibran para espacios de entrada pedagógicos (<= 1,000 elementos), ejecutándose en microsegundos. Al generar una serie inmutable de instantáneas (`SimulationStep[]`) congeladas con `Object.freeze`, logramos navegación bidireccional inmediata (Play, Pausa, Retroceder, Avanzar) sin el costo de serialización y clonación estructurada que impondría `postMessage` en un worker."""

    if any(k in q_lower for k in ["60fps", "fps", "canvas", "webgl", "gpu", "animac", "cuadros", "rendimiento", "fluidez"]):
        return f"""¡Hola @{author}! Alcanzar y mantener 60 cuadros por segundo en simulaciones visuales interactivas depende de aislar la computación algorítmica del árbol de renderizado del navegador.

Motion (Framer Motion 14) y nuestros renderizadores SVG/Canvas aplican transformaciones aceleradas por hardware en la GPU (`transform`, `opacity`), evitando recálculos de flujo (reflows) y repintados costosos en el hilo principal. Como se describe en [`docs/CANVAS_RENDERER.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/CANVAS_RENDERER.md), las simulaciones calculan las instantáneas de antemano (`SimulationStep[]`), permitiendo que el bucle de `requestAnimationFrame` recorra los estados con fluidez absoluta."""

    if any(k in q_lower for k in ["secreto", ".env", "gitleaks", "git-secrets", "vault", "token", "seguridad"]):
        return f"""¡Hola @{author}! Dev Visualizer se distribuye como una aplicación web puramente estática generada con Next.js 16 y servida en GitHub Pages, por lo que ninguna clave privada ni credencial de base de datos forma parte jamás de los archivos enviados al cliente.

Todas las credenciales de automatización residen cifradas en **GitHub Secrets** y se inyectan únicamente en runners efímeros de GitHub Actions. Los flujos de CI auditan cada cambio con `gitleaks` y `npm audit` ([`docs/SECURITY_GOVERNANCE.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/SECURITY_GOVERNANCE.md))."""

    # 8. Conversación General
    if norm_cat == "general":
        return f"""¡Hola @{author}! Bienvenido a las discusiones generales de Dev Visualizer.

La misión del proyecto es ofrecer un atlas exhaustivo de ingeniería de software que haga tangibles los conceptos algorítmicos complejos mediante simulaciones interactivas, renderizado a 60fps y narración accesible. Elegir Next.js 16 con exportación estática nos permite eliminar vulnerabilidades de backend y costes de servidor, entregando una experiencia fluida e instantánea en GitHub Pages.

Nos entusiasma mantener este canal abierto para reflexionar sobre diseño de software, patrones de UI y arquitectura web moderna. ¿Qué aspectos técnicos o decisiones de diseño te gustaría profundizar con la comunidad?"""

    # Síntesis Dinámica Contextualizada en Español para consultas no cubiertas por tópicos previos
    query_excerpt = query_text.strip().replace("\r", " ").replace("\n", " ")[:160]
    return f"""¡Hola @{author}! Respecto a tu consulta sobre *"{discussion_title}"* en Dev Visualizer:

Dev Visualizer está diseñado como un atlas interactivo de ingeniería de software con 73 colecciones y 146 rutas didácticas, desarrollado sobre Next.js 16 (App Router), React 19, TypeScript, Motion y Tailwind CSS. En relación con tu planteamiento sobre "{query_excerpt}...", la arquitectura aborda este ámbito mediante modelos de ejecución en memoria, desacoplamiento estricto de componentes y exportación estática de alto rendimiento (`output: "export"`) en GitHub Pages.

Cada módulo educativo y motor interactivo se implementa bajo rigurosas verificaciones de calidad, garantizando que el renderizado visual a 60fps, la narración auditiva y las evaluaciones didácticas operen de forma fluida y sin dependencias de servidor.

Puedes profundizar en los fundamentos de diseño y la estructura técnica en [`README.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/README.md) y [`docs/INDICE_MAESTRO_ARQUITECTURA.md`](https://github.com/Luics415/Dev-Visualizer/blob/main/docs/INDICE_MAESTRO_ARQUITECTURA.md). ¡Cualquier aspecto específico que desees explorar, estamos a tu disposición en este hilo!"""


def generate_response(discussion_title: str, query_text: str, author: str, context: Dict[str, Any], category: str = "General", escalation: Optional[str] = None, planning_issue: Optional[Dict[str, Any]] = None) -> Tuple[str, str]:
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

        if planning_issue:
            system_instruction += f"""

INFORMACIÓN DEL ISSUE Y TABLERO CREADO:
Se ha registrado exitosamente el Issue de seguimiento y planificación #{planning_issue['number']}: {planning_issue['title']}.
- URL del Issue: {planning_issue['url']}
- Tablero en GitHub Projects: {planning_issue['project_name']} ({planning_issue['project_url']})
- Rama atómica asignada: `{planning_issue['branch']}`
- Asignado a: @{OWNER_DEFAULT}
DEBES incorporar esta información oficial al cierre de tu respuesta en la sección de 'Integración en GitHub Projects y Roadmap', destacando que de conformidad con las políticas de gobernanza en AGENTS.md, el Pull Request requiere autorización explícita de @{OWNER_DEFAULT} antes de fusionarse a main."""

        prompt = f"{system_instruction}\n\nContexto vivo del repositorio:\n{json.dumps(context, ensure_ascii=False, indent=2)}\n\nCategoría de la discusión: {category}\nTítulo de la discusión: {discussion_title}\nConsulta de @{author}:\n{query_text}\n\nRespuesta técnica:"
        gemini_reply = call_gemini_api(prompt, api_key)
        if gemini_reply:
            if f"@{OWNER_DEFAULT}" not in gemini_reply:
                gemini_reply += f"\n\n*(CC: @{OWNER_DEFAULT} para seguimiento)*"
            return gemini_reply, lang

    reply = synthesize_project_response(discussion_title, query_text, author, context, category=category, lang=lang, escalation=escalation, planning_issue=planning_issue)
    if planning_issue:
        p_num = planning_issue.get("number")
        p_url = planning_issue.get("url")
        p_proj_name = planning_issue.get("project_name", "Dev-Visualizer Ecosystem")
        p_proj_url = planning_issue.get("project_url", "https://github.com/users/Luics415/projects/10")
        p_proj_num = planning_issue.get("project_number", 10)
        p_branch = planning_issue.get("branch", "feat/propuesta")

        tracking_es = f"""\n\n### 🚀 Integración en GitHub Projects y Roadmap\nEsta iniciativa ha sido registrada formalmente en el tablero de proyectos **[{p_proj_name} (Project #{p_proj_num})]({p_proj_url})** a través del **[Issue #{p_num}: {discussion_title}]({p_url})** asignado a @{OWNER_DEFAULT}.\n\nSe canalizará técnicamente mediante la rama atómica `{p_branch}`. De acuerdo con nuestras políticas de gobernanza en `AGENTS.md`, el Pull Request asociado requerirá revisión y autorización explícita de @{OWNER_DEFAULT} antes de su fusión a `main`. ¡Muchísimas gracias por ayudarnos a enriquecer este ecosistema formativo!"""
        tracking_en = f"""\n\n### 🚀 Official Roadmap & GitHub Projects Tracking\nThis initiative has been formally registered on the **[{p_proj_name} (Project #{p_proj_num})]({p_proj_url})** board via **[Issue #{p_num}: {discussion_title}]({p_url})** assigned to @{OWNER_DEFAULT}.\n\nIt will be developed under the atomic branch `{p_branch}`. In accordance with our governance policies in `AGENTS.md`, the corresponding Pull Request will remain strictly subject to explicit review and authorization from @{OWNER_DEFAULT} prior to merging into `main`."""

        if "### 🚀 Integración en GitHub Projects y Roadmap" in reply:
            reply = reply.split("### 🚀 Integración en GitHub Projects y Roadmap")[0].rstrip() + tracking_es
        elif "### 🚀 Official Roadmap & GitHub Projects Tracking" in reply:
            reply = reply.split("### 🚀 Official Roadmap & GitHub Projects Tracking")[0].rstrip() + tracking_en
        elif str(p_num) not in reply:
            reply += tracking_en if lang == "en" else tracking_es

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

        # 1. Determinar y aplicar etiquetas dinámicas acordes
        labels = determine_discussion_labels(category, title, body, context)
        log(f"Etiquetas inferidas para #{num}: {labels}")
        if disc_id:
            apply_labels_to_discussion(disc_id, labels, repo, dry_run=args.dry_run)

        # 2. Detección de escalamiento de seguridad o falla crítica
        escalation = detect_security_or_bug_escalation(title, body)

        # 3. Planificación e incorporación REAL en GitHub Issues y Projects
        planning_issue = None
        if should_create_planning_issue(category, title, body) or escalation:
            planning_issue = create_planning_issue(
                owner=repo_owner,
                repo=repo_name,
                disc_number=num,
                title=title,
                author=author,
                query_text=body,
                category=category,
                labels=labels,
                dry_run=args.dry_run
            )

        planning_issue_number = planning_issue.get("number") if planning_issue else None

        # 4. Generar respuesta contextualizada con referencias al Issue y Proyecto real
        reply_body, lang = generate_response(
            discussion_title=title,
            query_text=body,
            author=author,
            context=context,
            category=category,
            escalation=escalation,
            planning_issue=planning_issue
        )

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
            time_left = wait_time
            while time_left > 0:
                step = min(60.0, time_left)
                time.sleep(step)
                time_left -= step
                if time_left > 0:
                    log(f"Ventana humana activa para #{num}: {time_left/60.0:.1f} minutos restantes...")

        log(f"Verificando si @{OWNER_DEFAULT} intervino manualmente en #{num} antes de publicar...")
        maintainer_replied = False
        try:
            disc_fresh = get_discussion_details(repo_owner, repo_name, num)
            fresh_comments = disc_fresh.get("comments", {}).get("nodes", [])
            maintainer_replied = any(
                (c.get("author") or {}).get("login", "").lower() == OWNER_DEFAULT.lower()
                for c in fresh_comments
            )
        except Exception as e:
            log(f"Aviso al verificar comentarios de @{OWNER_DEFAULT} para #{num}: {e}")

        if maintainer_replied:
            log(f"Intervención manual de @{OWNER_DEFAULT} detectada en #{num}. Cancelando publicación automática de forma definitiva.")
            try:
                send_level_3_cancelled_notification(num, title, author, url)
            except Exception as e:
                log(f"Aviso al enviar notificación de cancelación a Discord: {e}")
            try:
                send_whatsapp_cancelled_notification(num, title, author, url)
            except Exception as e:
                log(f"Aviso al enviar notificación de cancelación a WhatsApp: {e}")
            try:
                write_step_summary(num, title, author, lang, escalation, "Cancelado por intervención manual del mantenedor", reply_body[:300] + "...")
            except Exception as e:
                log(f"Aviso al escribir step summary de cancelación: {e}")
            try:
                record_in_expediente({
                    "number": num,
                    "title": title,
                    "author": author,
                    "lang": lang,
                    "status": f"Cancelado por intervención manual de @{OWNER_DEFAULT}",
                    "escalation": escalation,
                    "issue_number": planning_issue_number,
                    "reply": reply_body
                })
            except Exception as e:
                log(f"Aviso al registrar cancelación en expediente: {e}")

            # GARANTÍA ABSOLUTA: JAMÁS caer en post_reply tras detectar intervención del mantenedor
            continue

        try:
            comment_url = post_reply(disc_id, reply_body)
            log(f"Respuesta publicada exitosamente en #{num}: {comment_url}")
        except Exception as e:
            log(f"Error al publicar respuesta en #{num}: {e}")
            continue

        try:
            write_step_summary(num, title, author, lang, escalation, "Publicado automáticamente tras buffer de 10 minutos", reply_body[:300] + "...")
        except Exception as e:
            log(f"Aviso al escribir step summary: {e}")
        try:
            send_level_3_published_notification(num, title, author, url, category, escalation)
        except Exception as e:
            log(f"Aviso al enviar notificación publicada a Discord: {e}")
        try:
            send_whatsapp_published_notification(num, title, author, url)
        except Exception as e:
            log(f"Aviso al enviar notificación publicada a WhatsApp: {e}")

        try:
            record_in_expediente({
                "number": num,
                "title": title,
                "author": author,
                "lang": lang,
                "status": "Publicado tras ventana de 10 minutos",
                "escalation": escalation,
                "issue_number": planning_issue_number,
                "reply": reply_body
            })
        except Exception as e:
            log(f"Aviso al registrar en expediente: {e}")

    log("Ciclo de Agente Centinela concluido con éxito.")


if __name__ == "__main__":
    main()
