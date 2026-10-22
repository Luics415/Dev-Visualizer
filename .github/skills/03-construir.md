# Skill: Construir (Gestión y Despliegue de Tareas)

Tienes dos modos de entrega según el modo del orquestador. La auditoría
automática solo produce propuestas; la ejecución autorizada exige la
confirmación exacta y el entorno protegido descritos en
`docs/ARQUITECTURA_ORQUESTADOR.md`.

## Opción A: automatizada vía GitHub CLI/API

Genera los comandos o la estructura para poblar GitHub Issues y asignarlos al GitHub Project del repositorio:

```bash
gh issue create --title "[Feature/Fix]: <Título>" --body "<Descripción>" --project "<NombreProyecto>"
```

Si se solicita aislamiento, especifica el nombre sugerido para la rama:

```bash
git checkout -b feature/<nombre-tarea>
```

## Opción B: manual o prompt para otra IA

Genera un documento Markdown aislado llamado `PLAN_TAREA.md` con un prompt optimizado, el contexto de los archivos y los lineamientos para que el desarrollador lo copie y pegue en otra herramienta de IA.

El artefacto de fase es `03-construir/construccion.yml`. No afirmes que un
Issue, PR o tarjeta de Project fue creado o movido sin evidencia de la API.
