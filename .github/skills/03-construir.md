# Skill: Construir (Gestión y Despliegue de Tareas)

## Propósito

Convertir un plan aprobado en Issues, Projects, ramas o un paquete de ejecución reproducible.

## Reglas de ejecución

- Confirma que existe una especificación o plan aprobado antes de construir.
- No modifiques código fuente si la instrucción de la fase no autoriza implementación.
- Conserva trazabilidad entre cada tarea, Issue, rama y evidencia.
- Usa español profesional en títulos, cuerpos, etiquetas y reportes.

## Opción A: automatizada vía GitHub CLI/API

Genera y ejecuta, cuando se haya autorizado, los comandos para poblar GitHub Issues y asignarlos al GitHub Project del repositorio:

```bash
gh issue create --title "[Feature/Fix]: <Título>" --body "<Descripción>" --project "<NombreProyecto>"
```

Cada Issue debe incluir objetivo, contexto, alcance, criterios de aceptación, riesgos y validación.

Si se solicita aislamiento, especifica el nombre sugerido para la rama:

```bash
git checkout -b feature/<nombre-tarea>
```

## Opción B: manual o prompt para otra IA

Genera `PLAN_TAREA.md` fuera del código fuente, con prompt optimizado, contexto de archivos, restricciones, criterios de aceptación y comandos de validación.

## Verificación

Comprueba que las Issues, enlaces, etiquetas, rama y archivos de planificación existan antes de informar éxito. Si una operación remota falla, informa el error exacto y no presentes un resultado exitoso.
