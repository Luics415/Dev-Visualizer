#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Monitor Autónomo de Enlaces y Salud de Documentos (Zero 404) para Dev Visualizer.
Verifica la integridad de archivos esenciales y que los enlaces de navegación interna
y documentación no contengan referencias rotas.
"""

import os
import re
import sys
import json
import urllib.request
import urllib.error
from typing import List, Dict, Tuple

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass


def log(msg: str):
    print(f"[ZERO-404-DEV-VISUALIZER] {msg}", flush=True)


def check_critical_documents() -> List[Dict[str, str]]:
    """Verifica que los documentos esenciales de Dev Visualizer existan."""
    critical_files = [
        "README.md",
        "AGENTS.md",
        "package.json",
        "next.config.ts",
        "docs/ROADMAP.md",
        "docs/INDICE_MAESTRO_ARQUITECTURA.md"
    ]
    results = []
    for cf in critical_files:
        if os.path.isfile(cf):
            size_kb = os.path.getsize(cf) / 1024.0
            results.append({"archivo": cf, "estado": "OK", "detalle": f"{size_kb:.1f} KB"})
        else:
            results.append({"archivo": cf, "estado": "ERROR", "detalle": "Archivo no encontrado"})
    return results


def check_internal_markdown_links() -> Tuple[int, List[Dict[str, str]]]:
    """Escanea archivos markdown buscando enlaces a archivos locales para validar su existencia."""
    md_files = []
    for root, _, files in os.walk("."):
        if any(ign in root for ign in [".git", "node_modules", ".next"]):
            continue
        for f in files:
            if f.endswith(".md"):
                md_files.append(os.path.join(root, f))

    link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
    total_checked = 0
    broken_links = []

    for md in md_files:
        try:
            with open(md, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            matches = link_pattern.findall(content)
            for text, target in matches:
                if target.startswith("http://") or target.startswith("https://") or target.startswith("#") or target.startswith("mailto:"):
                    continue

                total_checked += 1
                clean_target = target.split("#")[0].split("?")[0]
                if not clean_target:
                    continue

                # Resolver ruta relativa
                md_dir = os.path.dirname(md)
                resolved = os.path.normpath(os.path.join(md_dir, clean_target))
                if not os.path.exists(resolved):
                    broken_links.append({
                        "archivo_fuente": md,
                        "enlace_roto": target,
                        "ruta_esperada": resolved
                    })
        except Exception as e:
            log(f"Aviso al revisar {md}: {e}")

    return total_checked, broken_links


def main():
    log("Iniciando auditoría de salud de enlaces y documentos de Dev Visualizer...")

    docs_health = check_critical_documents()
    total_links, broken_links = check_internal_markdown_links()

    log(f"Comprobación completada: {total_links} enlaces internos analizados, {len(broken_links)} rotos.")

    report_lines = [
        "# Auditoría de Enlaces y Documentos (Zero 404) — Dev Visualizer",
        "",
        "## 1. Documentos y Configuración Esencial",
        "| Archivo | Estado | Detalle |",
        "| :--- | :---: | :--- |"
    ]
    for d in docs_health:
        icon = "✅" if d["estado"] == "OK" else "❌"
        report_lines.append(f"| `{d['archivo']}` | {icon} {d['estado']} | {d['detalle']} |")

    report_lines.extend([
        "",
        "## 2. Enlaces Internos de Documentación",
        f"- **Total de enlaces verificados:** {total_links}",
        f"- **Enlaces rotos detectados:** {len(broken_links)}",
        ""
    ])

    if broken_links:
        report_lines.append("| Archivo Fuente | Enlace Roto | Ruta Esperada |")
        report_lines.append("| :--- | :--- | :--- |")
        for b in broken_links[:20]:
            report_lines.append(f"| `{b['archivo_fuente']}` | `{b['enlace_roto']}` | `{b['ruta_esperada']}` |")
    else:
        report_lines.append("✅ **Certificación Zero 404:** No se detectaron enlaces locales rotos en la documentación.")

    # Guardar reporte
    os.makedirs(os.path.join("docs", "FechaAgente"), exist_ok=True)
    report_file = os.path.join("docs", "FechaAgente", "reporte_enlaces.md")
    with open(report_file, "w", encoding="utf-8") as f:
        f.write("\n".join(report_lines) + "\n")
    log(f"Reporte guardado en: {report_file}")

    # Publicar en Step Summary si está en Actions
    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as f:
            f.write("\n".join(report_lines) + "\n")

    # Si hay errores críticos en archivos esenciales, fallar con código 1
    has_crit_error = any(d["estado"] == "ERROR" for d in docs_health)
    if has_crit_error:
        log("ALERTA: Faltan archivos críticos requeridos.")
        sys.exit(1)


if __name__ == "__main__":
    main()
