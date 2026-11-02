# Git (Git)

> **Objetos, referencias, staging, historia, sincronización y rescate.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `git` |
| **Grupo Arquitectonico** | [Control de versiones y calidad](Grupo-Versioning) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `git` |
| **Total de Conceptos** | **60 conceptos** |
| **Capitulos / Secciones** | **10 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/git)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/git-en-accion)


## Estudio de Caso Practico: Git en acción

> **Caso integrado · Hotfix recuperable:** Una regresión de cálculo se aísla, corrige y publica sin perder un experimento local. La historia muestra cada movimiento de HEAD, índice y referencias.  
> El hotfix termina como un tag verificable y el experimento reaparece intacto: cada acción se entiende por el estado que modifica.

### Fases de Ejecucion:
1. **Inspeccionar el síntoma** (Nada cambia antes de mirar): `git status --short && git log --graph` -> estado inicial conocido. *Status y log establecen una línea base antes de elegir cualquier operación.*
2. **Guardar el experimento** (El trabajo incompleto necesita identidad): `git stash push -u -m experiment` -> experimento protegido. *Stash conserva el estado breve mientras el hotfix necesita partir de una base limpia.*
3. **Crear la rama de reparación** (Una referencia nueva aísla el cambio): `git switch -c hotfix/total` -> hotfix aislado. *La rama es un puntero, no una copia de todos los archivos.*
4. **Construir un commit preciso** (Solo entra el hunk correcto): `git add -p && git commit` -> snapshot enfocado. *La selección por hunks evita mezclar una mejora lateral con la reparación urgente.*
5. **Actualizar la base** (Main avanzó en el remoto): `git fetch && git rebase origin/main` -> conflicto contenido. *Fetch separa descargar de integrar y el rebase hace visible la única región incompatible.*
6. **Resolver y verificar** (La intención decide el contenido): `git add total.c && git rebase --continue` -> historia reparada. *Resolver significa escribir el resultado correcto y probarlo, no elegir ours o theirs por reflejo.*
7. **Publicar y etiquetar** (La versión queda identificada): `git push -u origin hotfix/total && git tag -s v2.4.1` -> hotfix trazable. *Push comparte objetos y referencias; el tag identifica el snapshot exacto que puede liberarse.*
8. **Recuperar el experimento** (El contexto anterior regresa): `git switch experiment && git stash pop` -> trabajo completo y recuperable. *El resultado demuestra que la urgencia no exigía destruir el trabajo previo.*


---

## Catalogo Sistematico de Conceptos (60)

### Seccion: Modelo de objetos (6 conceptos)

- **Repositorio y directorio .git**  
  *Familia:* `árbol de recursos`  
  Separa los archivos visibles de la base interna que conserva objetos, referencias, configuración y reflogs.

- **Blobs, trees y commits**  
  *Familia:* `jerarquía y dependencias`  
  Modela contenido, estructura y snapshots sin confundir un commit con un archivo de diferencias.

- **Hashes y direccionamiento por contenido**  
  *Familia:* `tabla de estados`  
  Identifica objetos por su contenido y detecta cuándo dos referencias señalan exactamente el mismo estado.

- **HEAD y referencias simbólicas**  
  *Familia:* `análisis y emisión`  
  Explica desde qué referencia se lee el snapshot y cuál avanzará con el siguiente commit.

- **Índice o staging area**  
  *Familia:* `consulta e índice`  
  Representa la propuesta exacta del próximo snapshot entre el working tree y HEAD.

- **Configuración y alcance**  
  *Familia:* `configuración declarativa`  
  Distingue valores de sistema, usuario, repositorio y worktree antes de diagnosticar un comportamiento inesperado.


### Seccion: Trabajo cotidiano (6 conceptos)

- **git status**  
  *Familia:* `despacho de runtime`  
  Resume archivos tracked, untracked, staged y modificados sin alterar el repositorio.

- **git add y selección por hunks**  
  *Familia:* `análisis y emisión`  
  Construye commits enfocados seleccionando partes coherentes de un mismo archivo.

- **git diff y rangos**  
  *Familia:* `flujo de transformación`  
  Compara working tree, índice, commits o ramas eligiendo correctamente los extremos.

- **git commit y metadatos**  
  *Familia:* `despacho de runtime`  
  Guarda un snapshot con autor, fecha, mensaje y uno o más padres.

- **git restore y git switch**  
  *Familia:* `análisis y emisión`  
  Separa la intención de restaurar contenido de la intención de cambiar la referencia activa.

- **.gitignore y archivos tracked**  
  *Familia:* `flujo de transformación`  
  Evita añadir residuos nuevos sin asumir que una regla deja de seguir archivos ya registrados.


### Seccion: Ramas e integración (6 conceptos)

- **Ramas como punteros móviles**  
  *Familia:* `secuencia operativa`  
  Crea líneas de trabajo baratas que avanzan al producir commits.

- **Fast-forward**  
  *Familia:* `análisis y emisión`  
  Adelanta una referencia cuando no existe divergencia y no requiere un nodo de merge.

- **Merge commits**  
  *Familia:* `jerarquía y dependencias`  
  Une historias divergentes preservando dos padres y el contexto de integración.

- **Conflictos de contenido**  
  *Familia:* `secuencia operativa`  
  Detiene la integración cuando Git no puede decidir una resolución correcta en una región.

- **Rebase**  
  *Familia:* `capas internas`  
  Reproduce cambios sobre una base nueva y genera commits con identificadores diferentes.

- **Rebase interactivo**  
  *Familia:* `diagnóstico operativo`  
  Reordena, combina, edita o descarta commits locales antes de compartirlos.


### Seccion: Repositorios distribuidos (6 conceptos)

- **Clone y repositorios completos**  
  *Familia:* `análisis y emisión`  
  Crea una copia local con objetos, referencias remotas y configuración de conexión.

- **Remotos origin y upstream**  
  *Familia:* `ida y vuelta`  
  Asigna nombres locales a otros repositorios sin convertirlos en autoridades especiales de Git.

- **Fetch**  
  *Familia:* `validación y decisión`  
  Descarga objetos y actualiza referencias remotas de seguimiento sin integrar el working tree.

- **Pull**  
  *Familia:* `flujo de interfaz`  
  Combina fetch con una estrategia explícita de merge, rebase o fast-forward.

- **Push y non-fast-forward**  
  *Familia:* `análisis y emisión`  
  Publica referencias solo cuando la política remota acepta el avance propuesto.

- **Tracking branches**  
  *Familia:* `secuencia operativa`  
  Relaciona una rama local con una referencia remota para medir ahead y behind.


### Seccion: Historia y diagnóstico (6 conceptos)

- **log, show y graph**  
  *Familia:* `evidencia y latencia`  
  Recorre padres, inspecciona snapshots y revela la forma real de la historia.

- **blame como contexto**  
  *Familia:* `tejido literario`  
  Relaciona líneas con commits para investigar decisiones sin reducir el análisis a culpabilidad.

- **bisect**  
  *Familia:* `espectro de verificación`  
  Localiza el primer commit defectuoso mediante búsqueda binaria y una prueba repetible.

- **Reflog**  
  *Familia:* `evidencia y latencia`  
  Registra movimientos locales de referencias y permite reencontrar commits que dejaron de ser visibles.

- **fsck y objetos inalcanzables**  
  *Familia:* `análisis y emisión`  
  Comprueba conectividad e integridad antes de que la recolección elimine objetos recuperables.

- **Hooks locales**  
  *Familia:* `propagación de eventos`  
  Ejecuta verificaciones alrededor de eventos sabiendo que no se distribuyen automáticamente con el clon.


### Seccion: Corrección y producción (6 conceptos)

- **Reset, restore y revert**  
  *Familia:* `secuencia operativa`  
  Elige entre mover referencias, restaurar archivos o publicar un commit inverso según el alcance compartido.

- **Cherry-pick**  
  *Familia:* `pasaporte del artefacto`  
  Reaplica el cambio de un commit puntual sin fusionar toda su rama de origen.

- **Stash**  
  *Familia:* `capas internas`  
  Guarda trabajo breve fuera del índice sin tratarlo como sustituto permanente de commits.

- **Tags anotados y firmas**  
  *Familia:* `flujo de transformación`  
  Marca versiones con identidad, mensaje y verificación criptográfica cuando el flujo lo exige.

- **Git LFS**  
  *Familia:* `análisis y emisión`  
  Versiona punteros mientras almacena binarios grandes fuera del almacén ordinario de objetos.

- **Mantenimiento y garbage collection**  
  *Familia:* `validación y decisión`  
  Empaqueta objetos y limpia estados inalcanzables respetando ventanas de recuperación.


### Seccion: Estructuras internas y plomería de Git (6 conceptos)

- **Comandos de plomería vs porcelana**  
  *Familia:* `comparativa técnica`  
  Distingue utilidades de bajo nivel (hash-object, cat-file, mktree) de la interfaz de usuario.

- **Objetos empaquetados y archivos .pack/.idx**  
  *Familia:* `árbol de recursos`  
  Comprime millones de objetos delta en archivos compactos indexados para lectura veloz.

- **Packed-refs y desfragmentación de referencias**  
  *Familia:* `ciclo de vida`  
  Agrupa punteros de ramas y tags en un solo archivo para acelerar búsquedas.

- **El índice binario (.git/index) al microscopio**  
  *Familia:* `consulta e índice`  
  Examina campos de timestamps, tamaño, SHA-1 y rutas ordenadas en el staging.

- **Commit-graph e indexación de ancestros**  
  *Familia:* `jerarquía y dependencias`  
  Acelera recorridos de historia con tablas de búsqueda precalculadas en disco.

- **Multi-pack index (MIDX)**  
  *Familia:* `tabla de estados`  
  Unifica índices de múltiples packfiles para optimizar operaciones de lectura sin reempaquetar todo.


### Seccion: Flujos de trabajo avanzados y múltiples árboles de trabajo (6 conceptos)

- **git worktree y desarrollo en paralelo**  
  *Familia:* `cuadrícula paralela`  
  Trabaja en múltiples ramas simultáneamente sin necesidad de clonar de nuevo el repositorio.

- **git sparse-checkout y repositorios gigantes**  
  *Familia:* `secuencia operativa`  
  Descarga y muestra únicamente las carpetas del proyecto en las que trabajas.

- **git submodules y repositorios anidados**  
  *Familia:* `capas internas`  
  Enlaza commits exactos de otros proyectos manteniendo árboles de trabajo independientes.

- **git subtrees y fusión sin submódulos**  
  *Familia:* `constelación de mecanismos`  
  Integra código de repositorios externos en ramas propias simplificando el clonado.

- **Estrategias de ramificación (Trunk-based vs Gitflow)**  
  *Familia:* `comparativa técnica`  
  Elige entre integración continua en ramas cortas o ciclos de releases estructurados.

- **Monorepos y escalado de Git**  
  *Familia:* `consulta e índice`  
  Configura índices virtuales, fsmonitor y prefetching para proyectos con millones de archivos.


### Seccion: Reescritura de historia y saneamiento forense (6 conceptos)

- **git filter-repo vs filter-branch**  
  *Familia:* `secuencia operativa`  
  Reescribe árboles enteros para purgar secretos o binarios pesados de forma rápida y segura.

- **git replace y costuras de historia**  
  *Familia:* `evidencia y latencia`  
  Cose ramas o acorta historias profundas creando referencias de sustitución transparentes.

- **Firma criptográfica GPG y SSH**  
  *Familia:* `matriz de señales`  
  Firma commits y tags con claves personales para verificar autenticidad e inmutabilidad.

- **Detección de identidades y .mailmap**  
  *Familia:* `configuración declarativa`  
  Unifica nombres y correos de autores dispersos a lo largo de años de desarrollo.

- **Reparación de repositorios corruptos**  
  *Familia:* `análisis y emisión`  
  Recupera commits huérfanos y objetos dañados inspeccionando directorios sueltos y reflogs.

- **Pruning agresivo y git gc --prune=now**  
  *Familia:* `validación y decisión`  
  Elimina de forma irreversible objetos inalcanzables cuando se requiere liberar espacio físico.


### Seccion: Mecanismos de fusión avanzada y resolución (6 conceptos)

- **Estrategia ortogonal (Ort merge strategy)**  
  *Familia:* `secuencia operativa`  
  Aprovecha el motor de merge moderno de Git con renombrado inteligente y menos conflictos.

- **git rerere (Reuse Recorded Resolution)**  
  *Familia:* `análisis y emisión`  
  Registra cómo resolviste un conflicto y lo reaplica automáticamente en futuros rebases.

- **Diff de tres vías y bases comunes (merge-base)**  
  *Familia:* `jerarquía y dependencias`  
  Localiza el ancestro común más cercano para entender exactamente qué cambió cada rama.

- **Controladores de diferencias personalizados (.gitattributes)**  
  *Familia:* `despacho de runtime`  
  Define comparadores semánticos para JSON, imágenes o archivos binarios.

- **Checkout interactivo de conflictos (--ours vs --theirs)**  
  *Familia:* `secuencia operativa`  
  Elige versiones completas de archivos en disputa durante un merge o rebase.

- **Merge octopus y uniones multidireccionales**  
  *Familia:* `jerarquía y dependencias`  
  Combina tres o más ramas simultáneamente cuando comparten una base limpia.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Control de versiones y calidad](Grupo-Versioning) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
