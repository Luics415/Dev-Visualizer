# 🛡️ Gobernanza, Calidad y Pipeline de Auditoría

El repositorio **Dev Visualizer** implementa un modelo de gobernanza estricta asistido por un orquestador de agentes autónomos y CI/CD reproducible.

---

## 🔄 El Pipeline de 7 Habilidades Oficiales

Cada cambio propuesto debe recorrer rigurosamente las 7 fases normativas:

1. **01-Definir:** Especificación de requisitos, criterios de aceptación, contratos de datos y alcance atómico.
2. **02-Planificar:** Desglose secuencial de tareas con dependencias, mitigación de riesgos y puntos de control.
3. **03-Construir:** Creación de ramas Git atómicas (`feat/`, `fix/`, `docs/`) y Pull Requests con plantillas formales y coautoría técnica (`Co-authored-by: Azlynn17`).
4. **04-Verificar:** Ejecución del conjunto exhaustivo de validaciones:
   - `npm run check:library`: Validación de integridad de colecciones y recursos.
   - `npm run check:links`: Auditoría estática de enlaces internos para asegurar 0 enlaces rotos en las 394 páginas.
   - `npm run check:a11y`: Validación estricta de contrastes, atributos ARIA y navegación por teclado.
   - `npm run build` & `npm run typecheck`: Compilación limpia sin errores de tipos.
5. **05-Revisar:** Auditoría de seguridad con `npm audit`, escaneo de credenciales con Gitleaks y análisis SAST con **GitHub CodeQL**.
6. **06-Aprobar:** Emisión del dictamen formal ejecutivo (`Aprobado`, `Requiere Cambios` o `Bloqueado`).
7. **07-Centinela:** Monitoreo y asistencia técnica en GitHub Discussions con ventana de cortesía humana y análisis contextualizado.

---

## 🔒 Postura de Seguridad Activa

- **Dependabot Alerts & Automated Fixes:** Monitoreo continuo de CVEs y apertura automática de PRs de actualización.
- **Private Vulnerability Reporting:** Canal oficial privado para divulgación coordinada y responsable de fallos de seguridad.
- **GitHub CodeQL SAST:** Análisis semántico profundo de seguridad en TypeScript, JavaScript y Python en cada PR.

---
[← Volver al Inicio](Home)
