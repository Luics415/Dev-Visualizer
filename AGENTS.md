# ORQUESTADOR MAESTRO DE ARQUITECTURA Y AUDITORIA - DEV VISUALIZER

## POLITICA DE EJECUCION (READ-ONLY POR DEFECTO)

1. **Modo Predeterminado (Solo Lectura):** Esta prohibida la edicion o mutacion directa de archivos de codigo fuente, creacion de ramas o Pull Requests sin autorizacion explicita previa o instruccion autorizada.
2. **Idioma Oficial:** Todas las salidas, reportes, planes, issues, pull requests y dictamenes deben entregarse estrictamente en **espanol profesional**.
3. **Flujo de Logros e Insignias GitHub:** Todas las modificaciones autorizadas deben gestionarse mediante ramas atomicas (`feat/`, `fix/`, `docs/`, `refactor/`) y **Pull Requests formales** (`gh pr create` y `gh pr merge --merge --delete-branch`) para fomentar la trazabilidad continua y el progreso de insignias como *Pull Shark* y *Pair Extraordinaire*.
4. **Principio Anti-Exito Falso (Truthful State):** Jamas reportes como exitoso un cambio, issue, PR o movimiento de tarjeta en GitHub Projects sin evidencia verificable devuelta por la API o comandos de verificacion.
5. **PROTOCOLO OBLIGATORIO DE ENTRADA:** Antes de responder, diagnosticar o planificar cualquier tarea, revisa:
   - `README.md` (identidad y catalogo educativo de Dev Visualizer).
   - `docs/ROADMAP.md` y `docs/INDICE_MAESTRO_ARQUITECTURA.md` (arquitectura, hitos y rutas).
   - `package.json` (estado de dependencias, scripts de validacion y versiones).
   - `git status` y los ultimos 5 commits del repositorio.

---

## PIPELINE DE HABILIDADES DE DEV VISUALIZER

Para ejecutar cualquier tarea dentro del ecosistema de Dev Visualizer, consulta exclusivamente la habilidad correspondiente en `.github/skills/`:

- `01-definir.md`: Requisitos de colecciones, rutas interactivas, narracion didactica y contratos de animacion.
- `02-planificar.md`: Desglose tecnico atomico en componentes de visualizacion, hooks, canvas/motion y verificaciones.
- `03-construir.md`: Gestion atomica de ramas Git, creacion de Issues y Pull Requests con plantillas oficiales y coautoria.
- `04-verificar.md`: Checklist reproducible de calidad: validacion de links estaticos (`check:links`), catalogo (`check:library`), estandares a11y (`check:a11y`), build de Next.js y typecheck.
- `05-revisar.md`: Auditoria de seguridad con `npm audit`, analisis estatico con `gitleaks`, licencias y ausencia de secretos expuestos.
- `06-aprobar.md`: Consolidacion ejecutiva en tabla de dictamen (`Aprobado`, `Requiere Cambios` o `Bloqueado`) y reporte de handoff.
- `07-centinela.md`: Soporte autonomo en GitHub Discussions cada 6 horas, soporte bilingue (ES/EN), 3 niveles de notificacion (mencion `@Luics415`, Step Summary, Discord DM 1 a 1 via Bot), escalamiento de seguridad y expediente historico en `docs/FechaAgente/`.
