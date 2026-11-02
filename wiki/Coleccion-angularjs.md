# AngularJS (AJS)

> **Mantenimiento de aplicaciones 1.x, digest cycle y migración gradual.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `angularjs` |
| **Grupo Arquitectonico** | [Diseño e interfaces](Grupo-Interfaces) |
| **Ciclo de Vida** | `legado` |
| **Tema Visual** | `angularjs` |
| **Total de Conceptos** | **52 conceptos** |
| **Capitulos / Secciones** | **9 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/angularjs)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/angularjs-en-accion)


## Estudio de Caso Practico: AngularJS en acción

> **Caso integrado · Diagnóstico y frontera de migración:** Un panel heredado duplica peticiones y se congela con listas grandes. La investigación conecta lifecycle, watchers y listeners; después crea una frontera que una interfaz moderna puede reemplazar.  
> El módulo deja de duplicar trabajo, reduce el digest, conserva pruebas y puede sustituirse ruta por ruta sin detener el producto.

### Fases de Ejecucion:
1. **Reproducir el síntoma** (Navegar tres veces): `dashboard → detail → dashboard` -> secuencia mínima. *Una ruta repetible permite contar trabajo y comparar la corrección.*
2. **Perfilar el digest** (Tiempo y cantidad): `$rootScope.$$watchersCount` -> costo localizado. *El perfil distingue render caro de red duplicada.*
3. **Encontrar el listener** (Registro sin retirada): `$rootScope.$on('refresh', load)` -> fuga explicada. *El listener global sobrevive al controller si no se llama a su función de retirada.*
4. **Cerrar el lifecycle** (Destruir libera recursos): `$scope.$on('$destroy', deregister)` -> duplicación eliminada. *Cada adquisición tiene una liberación ligada al lifecycle real.*
5. **Reducir watchers** (Datos estables una vez): `::row.id + pagination` -> digest acotado. *La mejora reduce observadores sin ocultar cambios que sí importan.*
6. **Encapsular componente** (Bindings explícitos): `<legacy-orders items=... on-open=...>` -> frontera creada. *La frontera elimina conocimiento del parent y prepara el reemplazo.*
7. **Proteger con contrato** (Tests antes del cambio): `given orders → render → open(id)` -> conducta congelada. *Los tests describen el comportamiento que el módulo nuevo debe conservar.*
8. **Migrar una ruta** (Strangler verificable): `/orders/new → modern shell` -> retiro gradual. *El sistema migra en unidades observables en vez de apostar a una reescritura total.*


---

## Catalogo Sistematico de Conceptos (52)

### Seccion: Arquitectura 1.x (6 conceptos)

- **Modules**  
  *Familia:* `despacho de runtime`  
  Agrupa configuración, servicios y componentes sin ser un sistema de módulos ESM.

- **Dependency injection**  
  *Familia:* `máquina de estados`  
  Resuelve providers por nombre y exige anotación segura ante minificación.

- **Bootstrap de la app**  
  *Familia:* `ciclo de vida`  
  Crea injector, root scope y compilación inicial desde ng-app o código.

- **Config y run blocks**  
  *Familia:* `despacho de runtime`  
  Separa registro de providers de inicialización con instancias.

- **Strict DI**  
  *Familia:* `máquina de estados`  
  Convierte anotaciones implícitas frágiles en errores detectables.

- **Inyector jerárquico y scopes raíz**  
  *Familia:* `ciclo de vida`  
  Construye la raíz de inyección y asocia $rootScope como ancestro común de toda la aplicación.


### Seccion: Templates y digest (6 conceptos)

- **Scopes y prototipos**  
  *Familia:* `despacho de runtime`  
  Heredan propiedades y pueden ocultarlas al escribir desde un scope hijo.

- **Watchers**  
  *Familia:* `máquina de estados`  
  Comparan valores observados en cada digest y ejecutan listeners al cambiar.

- **Digest cycle**  
  *Familia:* `ciclo de vida`  
  Repite watchers hasta estabilizar o alcanzar el límite de iteraciones.

- **Apply y evalAsync**  
  *Familia:* `despacho de runtime`  
  Introduce trabajo externo al ciclo sin disparar digest anidados.

- **One-time binding**  
  *Familia:* `máquina de estados`  
  Retira watchers de datos estables después de resolver su primer valor.

- **Deep dirty checking ($watchCollection)**  
  *Familia:* `ciclo de vida`  
  Comprueba mutaciones superficiales en colecciones sin clonar estructuras anidadas.


### Seccion: Directivas y componentes (6 conceptos)

- **Compile y link**  
  *Familia:* `despacho de runtime`  
  Transforma DOM y conecta una instancia de scope a cada elemento.

- **Isolate scope bindings**  
  *Familia:* `máquina de estados`  
  Declara entrada, salida y referencia sin depender de herencia accidental.

- **Controllers y controllerAs**  
  *Familia:* `ciclo de vida`  
  Reduce dependencia de $scope y expone un objeto explícito al template.

- **Components 1.5+**  
  *Familia:* `despacho de runtime`  
  Adopta inputs, outputs y lifecycle hooks como frontera más migrable.

- **Transclusion**  
  *Familia:* `máquina de estados`  
  Proyecta contenido del consumidor conservando el contexto de binding correcto.

- **Directivas de atributos vs elementos**  
  *Familia:* `ciclo de vida`  
  Distingue decoradores de comportamiento en atributos de componentes estructurales en elementos.


### Seccion: Datos y navegación (6 conceptos)

- **Services y factories**  
  *Familia:* `despacho de runtime`  
  Producen singletons compartidos dentro del injector.

- **$http y promises**  
  *Familia:* `máquina de estados`  
  Integra solicitudes al digest y centraliza interceptors de transporte.

- **Routing**  
  *Familia:* `ciclo de vida`  
  Relaciona URL, template, controller y resolución previa de datos.

- **Forms y ngModel**  
  *Familia:* `despacho de runtime`  
  Coordina parsers, formatters, validadores y estados dirty o touched.

- **Filtros**  
  *Familia:* `máquina de estados`  
  Transforma presentación y puede resultar costoso si se recalcula dentro de listas.

- **$resource y APIs REST**  
  *Familia:* `ciclo de vida`  
  Modela entidades remotas con métodos CRUD estandarizados sobre el servicio $http.


### Seccion: Calidad y seguridad (6 conceptos)

- **Unit tests con injector**  
  *Familia:* `despacho de runtime`  
  Sustituye servicios y valida controllers, filters y components aislados.

- **E2E de flujos críticos**  
  *Familia:* `máquina de estados`  
  Protege comportamiento mientras la implementación cambia.

- **Profiling de watchers**  
  *Familia:* `ciclo de vida`  
  Localiza digests largos, listas grandes y funciones inestables.

- **SCE y sanitización**  
  *Familia:* `despacho de runtime`  
  Controla contextos confiables sin desactivar protección global.

- **Dependencias vulnerables**  
  *Familia:* `máquina de estados`  
  Inventaría versiones congeladas y reduce exposición en la frontera.

- **$httpBackend y mocks en pruebas**  
  *Familia:* `ciclo de vida`  
  Intercepta llamadas HTTP simulando respuestas exitosas o errores de red en tests unitarios.


### Seccion: Migración gradual (6 conceptos)

- **Mapa de dependencias**  
  *Familia:* `despacho de runtime`  
  Identifica módulos, rutas, globals y servicios con mayor acoplamiento.

- **Seams por componente**  
  *Familia:* `máquina de estados`  
  Encapsula zonas detrás de entradas y salidas explícitas.

- **Strangler pattern**  
  *Familia:* `ciclo de vida`  
  Dirige rutas nuevas al sistema moderno y mantiene el resto operativo.

- **Puente de servicios**  
  *Familia:* `despacho de runtime`  
  Comparte contratos de datos sin compartir el runtime entero.

- **Criterios de retiro**  
  *Familia:* `máquina de estados`  
  Elimina módulo, tests y dependencias cuando ya no recibe tráfico ni consumidores.

- **Tipado estático con TypeScript en 1.x**  
  *Familia:* `ciclo de vida`  
  Introduce interfaces y tipos graduales sobre controladores heredados antes de refactorizar.


### Seccion: Rendimiento y optimización del digest (6 conceptos)

- **Debounce en ng-model-options**  
  *Familia:* `planificación de trabajo`  
  Retrasa la sincronización del input con el scope para evitar digests en cada pulsación.

- **Track by en ng-repeat**  
  *Familia:* `ida y vuelta`  
  Reutiliza elementos del DOM existentes mediante identificadores únicos en lugar de destruir nodos.

- **Desactivación de debug info ($compileProvider)**  
  *Familia:* `análisis y emisión`  
  Elimina clases y comentarios de depuración para acelerar la compilación del DOM.

- **Paginación virtual y scroll infinito**  
  *Familia:* `mapa de memoria`  
  Limita el número de elementos vivos en memoria para listas con miles de registros.

- **Digest selectivo y scope aislados**  
  *Familia:* `telar relacional`  
  Minimiza la propagación vertical de comprobaciones dividiendo el árbol de scopes.

- **Web Workers para procesamiento pesado**  
  *Familia:* `cola y consumidor`  
  Deriva cálculos matemáticos o análisis de cadenas fuera del hilo principal de UI.


### Seccion: Patrones de diseño heredados y anti-patrones (6 conceptos)

- **Service vs Factory vs Provider**  
  *Familia:* `tejido de eventos`  
  Distingue constructores con new, funciones factoría y proveedores configurables en fase config.

- **Evitar $rootScope como bus global**  
  *Familia:* `topología y tráfico`  
  Reemplaza eventos globales incontrolados por servicios singleton con estado observable.

- **Promesas diferidas ($q.defer vs $q constructor)**  
  *Familia:* `comparativa técnica`  
  Migra del patrón deferred arcaico a la sintaxis estándar de Promesas ECMAScript.

- **Decoradores de servicios ($provide.decorator)**  
  *Familia:* `tejido de eventos`  
  Interpreta y extiende comportamiento de servicios de terceros sin editar código fuente.

- **Gestión de memoria y closures en controladores**  
  *Familia:* `memoria intermedia`  
  Evita fugas reteniendo referencias a elementos DOM en variables de cierre.

- **Directivas transclusivas complejas**  
  *Familia:* `topología y tráfico`  
  Gestiona scopes hermanos y clones de transclusión sin perder bindings del contexto original.


### Seccion: Coexistencia y ngUpgrade (4 conceptos)

- **UpgradeModule y bootstrapping híbrido**  
  *Familia:* `configuración declarativa`  
  Inicializa AngularJS 1.x y Angular moderno en paralelo compartiendo el mismo documento.

- **Downgrade de componentes modernos**  
  *Familia:* `constelación de mecanismos`  
  Empaqueta componentes basados en Standalone para usarlos en plantillas AngularJS heredadas.

- **Upgrade de servicios heredados**  
  *Familia:* `topología y tráfico`  
  Inyecta servicios $http o de negocio de AngularJS directamente en código TypeScript moderno.

- **Estrategia de desconexión final**  
  *Familia:* `pasaporte del artefacto`  
  Apaga el módulo de actualización y retira scripts legados una vez convertida la última vista.



## Referencias Bibliograficas y Documentacion Oficial
- **[Official AngularJS Tutorial](https://docs.angularjs.org/tutorial)** (`tutorial` | Nivel: `beginner`): Recurso histórico; el soporte oficial de AngularJS terminó en enero de 2022.
- **[AngularJS Conceptual Overview](https://docs.angularjs.org/guide/concepts)** (`official-docs` | Nivel: `intermediate`): Documentación congelada de la rama 1.x.
- **[AngularJS HTML Compiler](https://docs.angularjs.org/guide/compiler)** (`reference` | Nivel: `advanced`): Documentación congelada de la rama 1.x.


---
[<- Volver al Inicio](Home) | [Ver Grupo: Diseño e interfaces](Grupo-Interfaces) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
