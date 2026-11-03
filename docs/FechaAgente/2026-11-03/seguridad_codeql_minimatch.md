# Expediente de Auditoría y Remediación de Seguridad

- **Fecha:** 2026-11-03
- **Identificador de Tarea:** Resolucion de Code Scanning #26 y Dependabot #1 (minimatch)
- **Mantenedor Principal:** [@Luics415](https://github.com/Luics415)
- **Coautora Técnica:** [@Azlynn17](https://github.com/Azlynn17)
- **Dictamen:** Aprobado

---

## 1. Hallazgos Auditados

### Alerta A: Code Scanning #26 (CodeQL)
- **Regla:** `js/indirect-command-line-injection`
- **Ubicación:** `scripts/push-wiki.mjs:44` y `scripts/push-wiki.mjs:47`
- **Diagnóstico:** Uso de `child_process.execSync` con interpolación de cadenas (`${remoteUrl}`) ejecutable bajo shell, lo que introducía riesgo de inyección indirecta de comandos en entornos CI/CD.
- **Remediación:** Migración a `child_process.execFileSync` con arreglos de argumentos discretos sin invocación a shell.

### Alerta B: Dependabot #1 / npm audit
- **Identificador:** GHSA-g3hv-75wg-m249 / CVE-2026-118764
- **Severidad:** Moderada
- **Vulnerabilidad:** Posible denegación de servicio (DoS) por amplificación de globparts en versiones `< 11.0.1`.
- **Afectación:** Dependencias transitivas de `@typescript-eslint/typescript-estree` y `eslint`.
- **Remediación:** Configuración de `overrides` en `package.json` para fijar `minimatch: "^11.0.4"` y regeneración de `package-lock.json`.

---

## 2. Evidencia de Validación

```text
> npm audit
found 0 vulnerabilities

> npm run check
- eslint: 0 errores
- typecheck (tsc --noEmit): 0 errores
- check:library: 42 temas fuente / 179 recursos, 31 temas complementarios / 93 recursos validos
- build: 394 paginas estaticas compiladas en 8.8s
- check:links: 394 paginas HTML verificadas, 0 enlaces internos rotos
- check:a11y: 394 paginas auditadas, 9770 botones accesibles
```
