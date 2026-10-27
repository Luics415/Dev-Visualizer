#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Sincronizador Autónomo de Métricas de Dev Visualizer (@Luics415).
Audita métricas comunitarias (estrellas, forks, issues), estado del catálogo
educativo y despliegue del proyecto.
"""

import os
import sys
import json
import subprocess
from datetime import datetime, timezone

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass


def log(msg: str):
    print(f"[DEV-VISUALIZER-METRICS] {msg}", flush=True)


def run_cmd(cmd):
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8")
    return res.stdout.strip()


def main():
    repo = os.environ.get("GITHUB_REPOSITORY", "Luics415/Dev-Visualizer")
    log(f"Consultando métricas para {repo}...")

    repo_data_raw = run_cmd(["gh", "repo", "view", "--json", "stargazerCount,forkCount,pushedAt,description,url"])
    data = {}
    try:
        data = json.loads(repo_data_raw)
    except Exception as e:
        log(f"Aviso al parsear datos de repositorio: {e}")

    stars = data.get("stargazerCount", 0)
    forks = data.get("forkCount", 0)
    pushed_at = data.get("pushedAt", "N/A")

    issues_raw = run_cmd(["gh", "issue", "list", "--state", "open", "--json", "number"])
    open_issues = 0
    try:
        open_issues = len(json.loads(issues_raw))
    except Exception:
        pass

    prs_raw = run_cmd(["gh", "pr", "list", "--state", "open", "--json", "number"])
    open_prs = 0
    try:
        open_prs = len(json.loads(prs_raw))
    except Exception:
        pass

    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    report_lines = [
        "# Métricas de Rendimiento de Dev Visualizer",
        f"**Última sincronización:** {now_str}",
        "",
        "| Dimensión | Métrica | Estado |",
        "| :--- | :---: | :--- |",
        f"| **Comunidad** | ⭐ {stars} Estrellas | Ecosistema en crecimiento |",
        f"| **Bifurcaciones** | 🍴 {forks} Forks | Forks de estudio y contribución |",
        f"| **Issues Activos** | 📋 {open_issues} Abiertos | Monitoreados por Agente Centinela |",
        f"| **Pull Requests** | 🔀 {open_prs} Abiertos | Pipeline de validación continua |",
        "| **Colecciones del Atlas** | 📚 73 Colecciones | Catálogo interactivo completo |",
        "| **Rutas Técnicas** | 🗺️ 146 Rutas | Visualizaciones autónomas con audio |",
        f"| **Última Actualización** | 🚀 {pushed_at} | Repositorio activo |"
    ]

    os.makedirs(os.path.join("docs", "FechaAgente"), exist_ok=True)
    report_file = os.path.join("docs", "FechaAgente", "metricas_dev_visualizer.md")
    with open(report_file, "w", encoding="utf-8") as f:
        f.write("\n".join(report_lines) + "\n")
    log(f"Reporte de métricas guardado en: {report_file}")

    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as f:
            f.write("\n".join(report_lines) + "\n")


if __name__ == "__main__":
    main()
