export const gitGithubConcepts = [
  { title: "Repositorio", description: "Conserva el proyecto y una base interna con objetos, referencias, historial y configuración.", family: "contratos coordinados", layout: "wide" },
  { title: "Working tree, staging y commit", description: "Separa lo que editas, lo que seleccionas y el snapshot que finalmente guardas.", family: "cinta de estados", layout: "standard" },
  { title: "Commits", description: "Forman una historia enlazada de snapshots identificados por hashes.", family: "filmstrip", layout: "standard" },
  { title: "Ramas", description: "Son referencias móviles que permiten desarrollar líneas de trabajo independientes.", family: "vías", layout: "wide" },
  { title: "HEAD", description: "Indica la rama o el commit actualmente seleccionado por Git.", family: "puntero", layout: "compact" },
  { title: "Merge", description: "Conecta historias divergentes y conserva sus relaciones como padres.", family: "grafo convergente", layout: "standard" },
  { title: "Rebase", description: "Reproduce commits sobre una base nueva para construir una historia lineal.", family: "reproducción", layout: "standard" },
  { title: "Remotos", description: "Registran otros repositorios mediante nombres como origin y upstream.", family: "órbita", layout: "compact" },
  { title: "Fetch, pull y push", description: "Sincronizan conocimiento e historial entre repositorios locales y remotos de formas distintas.", family: "radar de sincronización", layout: "wide" },
  { title: "Fork y clone", description: "Crean respectivamente una copia remota en otra cuenta y una copia de trabajo local.", family: "mapa de copias", layout: "standard" },
  { title: "Pull Requests", description: "Añaden revisión, conversación, checks y permisos alrededor de una propuesta de integración.", family: "tablero de revisión", layout: "wide" },
  { title: "Conflictos", description: "Aparecen cuando Git no puede decidir cómo combinar cambios incompatibles en la misma región.", family: "editor dividido", layout: "standard" },
  { title: ".gitignore", description: "Excluye archivos generados, dependencias y secretos antes de que entren al seguimiento.", family: "filtro", layout: "compact" },
  { title: "GitHub Actions", description: "Ejecuta pipelines automáticos de validación, construcción y despliegue a partir de eventos.", family: "pipeline", layout: "wide" },
  {
    title: "git status", description: "Resume la relación entre el working tree, el staging area y el último commit sin cambiar nada.", family: "panel de diagnóstico", layout: "standard",
    scene: { variant: "cards", code: "git status --short", nodes: ["M  src/app.ts|staged", " M src/theme.css|modified", "?? notes.md|untracked", "branch main|ahead 1"], outcome: "estado visible", caption: "Status es el mapa antes de actuar: distingue qué cambió y dónde se encuentra cada cambio." }
  },
  {
    title: "git add y unstage", description: "Selecciona hunks o archivos para el próximo commit y permite retirar la selección sin borrar el trabajo.", family: "flujo de ejecución", layout: "wide",
    scene: { variant: "flow", code: "git add -p  ·  git restore --staged", nodes: ["hunk A|sí", "hunk B|no", "hunk C|sí", "stage"], outcome: "commit enfocado", caption: "El staging area no es una carpeta temporal: es la propuesta exacta del próximo snapshot." }
  },
  {
    title: "git diff", description: "Compara contenido entre working tree, staging, commits o ramas para revelar líneas añadidas, eliminadas y modificadas.", family: "ida y vuelta", layout: "wide",
    scene: { variant: "request", code: "git diff --staged", nodes: ["antes|- total", "después|+ subtotal", "- línea eliminada|rojo", "+ línea añadida|verde"], outcome: "cambio explicado", caption: "Diff responde qué cambió; el rango elegido determina entre qué estados se hace la comparación." }
  },
  {
    title: "log y show", description: "Recorren la historia y permiten inspeccionar metadatos, padres y contenido de un commit concreto.", family: "evidencia y latencia", layout: "standard",
    scene: { variant: "trace", code: "git log --graph  ·  git show c4a92f", nodes: ["a1f0|init", "b72c|add cart", "c4a9|fix total", "d91e|release"], outcome: "snapshot inspeccionado", caption: "Log ubica un cambio en la historia; show abre el commit y su diff asociado." }
  },
  {
    title: "restore, reset y revert", description: "Deshacen cosas distintas: archivos, referencias locales o cambios publicados mediante un commit inverso.", family: "árbol de recursos", layout: "wide",
    scene: { variant: "filesystem", code: "restore ≠ reset ≠ revert", nodes: ["restore|archivo o stage", "reset|mueve rama local", "revert|nuevo commit inverso", "publicado|prefiere revert"], outcome: "deshacer sin perder contexto", caption: "Elegir el comando correcto depende de qué estado deseas cambiar y si la historia ya se compartió." }
  },
  {
    title: "switch y checkout", description: "Cambian la referencia activa; switch separa la intención de cambiar ramas de restaurar archivos.", family: "memoria intermedia", layout: "standard",
    scene: { variant: "cache", code: "git switch feature/jinx-filter", nodes: ["main|HEAD", "feature|seleccionar", "working tree|actualizar", "HEAD|feature"], outcome: "contexto cambiado", caption: "Cambiar de rama actualiza HEAD y materializa en el working tree el snapshot de esa referencia." }
  },
  {
    title: "Fast-forward y merge commit", description: "Git puede adelantar una referencia sin crear nodo nuevo o registrar explícitamente una convergencia de historias.", family: "análisis y emisión", layout: "wide",
    scene: { variant: "compiler", code: "git merge --ff-only  ·  --no-ff", nodes: ["base|A", "fast-forward|A—B—C", "merge commit|M con dos padres", "política|elige historia"], outcome: "integración consciente", caption: "El contenido final puede coincidir, pero la forma del grafo comunica cómo se desarrolló el trabajo." }
  },
  {
    title: "Rebase interactivo", description: "Reordena, combina, edita o elimina commits locales antes de compartir una historia limpia.", family: "ciclo de vida", layout: "wide",
    scene: { variant: "lifecycle", code: "git rebase -i HEAD~4", nodes: ["pick a1|feature", "squash b2|typo", "reword c3|mensaje", "drop d4|debug", "result|2 commits"], outcome: "historia curada", caption: "Reescribe hashes; úsalo sobre trabajo local o coordinado, no sobre historia compartida sin acuerdo." }
  },
  {
    title: "Cherry-pick", description: "Aplica el cambio introducido por un commit específico sobre la rama actual creando un commit nuevo.", family: "secuencia operativa", layout: "standard",
    scene: { variant: "timeline", code: "git cherry-pick c4a92f", nodes: ["hotfix branch|c4a9", "seleccionar|patch", "release branch|aplicar", "new hash|e82b"], outcome: "cambio puntual transferido", caption: "Cherry-pick copia el efecto, no mueve el commit original ni fusiona toda la rama." }
  },
  {
    title: "Stash", description: "Guarda temporalmente modificaciones no confirmadas para limpiar el working tree y recuperarlas después.", family: "máquina de estados", layout: "standard",
    scene: { variant: "state-machine", code: "git stash push -m \"wip\"", nodes: ["modified|app.ts", "untracked|notes.md", "stash@{0}|WIP", "switch|hotfix", "stash pop|restaurar"], outcome: "trabajo pausado", caption: "Stash es útil para cambios breves; no reemplaza commits pequeños cuando el trabajo merece historia." }
  },
  {
    title: "Tags y Releases", description: "Marcan commits importantes y GitHub puede adjuntar notas y artefactos a una versión publicada.", family: "ciclo de vida", layout: "wide",
    scene: { variant: "lifecycle", code: "git tag -a v1.4.0  ·  gh release create", nodes: ["commit|d91e", "tag|v1.4.0", "notes|cambios", "assets|builds"], outcome: "versión reproducible", caption: "El tag identifica el código exacto; la release comunica y distribuye ese hito." }
  },
  {
    title: "Tracking branches", description: "Vinculan una rama local con su contraparte remota para comparar ahead, behind y sincronizar por defecto.", family: "tabla de estados", layout: "standard",
    scene: { variant: "matrix", code: "git branch --set-upstream-to=origin/main", nodes: ["main|local ahead 2", "origin/main|remote behind 2", "pull|trae y integra", "push|publica commits"], outcome: "upstream configurado", caption: "La rama remota de seguimiento es una referencia local que recuerda el último estado conocido del remoto." }
  },
  {
    title: "Reviews y ramas protegidas", description: "Aplican reglas para que cambios sensibles requieran aprobación, checks exitosos y una historia aceptable.", family: "propagación de eventos", layout: "wide",
    scene: { variant: "signal", code: "required reviews + status checks", nodes: ["2 approvals", "tests passed", "no unresolved", "merge policy"], outcome: "merge habilitado", caption: "La protección convierte prácticas de equipo en reglas ejecutables antes de modificar la rama principal." }
  },
  {
    title: "Issues y Projects", description: "Conectan problemas, decisiones, responsables y progreso con ramas, commits y pull requests.", family: "aislamiento sobre host", layout: "wide",
    scene: { variant: "container", code: "Issue #42 → branch → PR", nodes: ["Backlog|Jinx filter", "In progress|branch", "Review|PR #58", "Done|merged"], outcome: "trazabilidad del trabajo", caption: "El código gana contexto cuando cada cambio puede rastrearse hasta una necesidad y una conversación." }
  },
  {
    title: "Reflog y recuperación", description: "Registra movimientos recientes de referencias locales y permite reencontrar commits que parecen perdidos.", family: "diagnóstico operativo", layout: "standard",
    scene: { variant: "terminal", code: "git reflog", nodes: ["HEAD@{0}|reset --hard", "HEAD@{1}|commit d91e", "HEAD@{2}|rebase finish", "git switch -c rescue d91e|recover"], outcome: "commit recuperado", caption: "Reflog no es un backup remoto, pero suele rescatar cambios mientras los objetos sigan en la base local." }
  },
  {
    title: "Blame y bisect", description: "Blame aporta contexto línea por línea; bisect busca el primer commit defectuoso mediante búsqueda binaria.", family: "comparativa técnica", layout: "wide",
    scene: { variant: "compare", code: "git blame  ·  git bisect", nodes: ["blame|quién y cuándo", "bisect|dónde comenzó", "contexto|no culpabilidad", "good / bad|mitad de historia"], outcome: "origen del problema", caption: "Son herramientas de diagnóstico: la meta es entender el cambio y encontrar una regresión con menos pruebas." }
  },
  {
    title: "Git hooks", description: "Ejecutan scripts locales alrededor de eventos como commit, push o recepción para automatizar comprobaciones.", family: "ecosistema coordinado", layout: "standard",
    scene: { variant: "orbit", code: ".git/hooks/pre-commit", nodes: ["git commit|evento", "lint|hook", "tests|hook", "exit 0|crear commit"], outcome: "regla local ejecutada", caption: "Los hooks no se comparten automáticamente; herramientas del proyecto pueden instalarlos de forma reproducible." }
  },
  {
    title: "Git LFS", description: "Guarda punteros pequeños en Git y mueve archivos binarios grandes a un almacenamiento especializado.", family: "jerarquía y dependencias", layout: "wide",
    scene: { variant: "tree", code: "git lfs track \"*.psd\"", nodes: ["repo Git|pointer 130 B", "LFS store|artwork.psd 420 MB", "clone|descarga bajo demanda", "history|sin binario repetido"], outcome: "repositorio manejable", caption: "Git está optimizado para texto; LFS evita que cada versión binaria infle todo el historial." }
  },
] as const;
