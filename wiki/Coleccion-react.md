# React (React)

> **Componentes, estado, reconciliación, efectos y concurrencia.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `react` |
| **Grupo Arquitectonico** | [Diseño e interfaces](Grupo-Interfaces) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `react` |
| **Total de Conceptos** | **62 conceptos** |
| **Capitulos / Secciones** | **7 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/react)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/react-en-accion)



---

## Catalogo Sistematico de Conceptos (62)

### Seccion: Fundamentos declarativos (5 conceptos)

- **Componentes**  
  *Familia:* `árbol de composición`  
  Dividen la interfaz en funciones independientes que reciben datos y producen elementos de React.

- **JSX**  
  *Familia:* `pipeline de transformación`  
  Describe elementos con una sintaxis que el build transforma en llamadas del runtime de React.

- **Props**  
  *Familia:* `flujo descendente`  
  Transportan datos de forma descendente y son de solo lectura para el componente que las recibe.

- **children y composición**  
  *Familia:* `acumulación de recursos`  
  Permiten envolver, insertar y combinar interfaz sin acoplarla a una estructura rígida.

- **Pureza del render**  
  *Familia:* `topología y tráfico`  
  Exige que el componente calcule el mismo JSX para las mismas props, estado y contexto, sin efectos secundarios.


### Seccion: Estado y eventos (9 conceptos)

- **Estado**  
  *Familia:* `snapshot de estado`  
  Conserva información local y solicita otro render cuando cambia.

- **El estado como snapshot**  
  *Familia:* `máquina de estados`  
  Cada render ve una fotografía fija; actualizar estado prepara otro render sin mutar el que ya corre.

- **Eventos**  
  *Familia:* `señal de interfaz`  
  Conectan interacciones del usuario con handlers que pueden solicitar actualizaciones.

- **Propagación de eventos**  
  *Familia:* `propagación de eventos`  
  Explica captura, target, bubbling y stopPropagation dentro del sistema de eventos de React.

- **Batching de actualizaciones**  
  *Familia:* `planificación de trabajo`  
  Agrupa múltiples setState de una misma interacción antes de renderizar para evitar trabajo intermedio.

- **Updater functions**  
  *Familia:* `ecosistema coordinado`  
  Calculan el siguiente estado desde el estado pendiente anterior y evitan cierres obsoletos.

- **Actualizaciones inmutables**  
  *Familia:* `contratos coordinados`  
  Crean nuevos objetos o arrays para que React pueda detectar qué referencia cambió.

- **Renderizado condicional**  
  *Familia:* `bifurcación`  
  Elige qué árbol producir según props o estado.

- **Listas y keys**  
  *Familia:* `identidad de lista`  
  Usa keys estables para conservar identidad cuando una colección agrega, elimina o reordena elementos.


### Seccion: Formularios y flujo de datos (8 conceptos)

- **Formularios controlados**  
  *Familia:* `flujo de ejecución`  
  Mantienen value o checked en estado y actualizan la interfaz mediante eventos.

- **Formularios no controlados**  
  *Familia:* `anatomía del concepto`  
  Dejan que el DOM conserve el valor y lo leen mediante FormData o refs cuando se necesita.

- **Elevar estado**  
  *Familia:* `secuencia operativa`  
  Mueve una fuente compartida al ancestro común para sincronizar componentes hermanos.

- **Estado derivado**  
  *Familia:* `máquina de estados`  
  Calcula valores desde props y estado durante el render en lugar de duplicarlos y sincronizarlos.

- **useReducer**  
  *Familia:* `ida y vuelta`  
  Centraliza transiciones complejas como acciones puras sobre un estado.

- **Context**  
  *Familia:* `difusión`  
  Distribuye información a descendientes sin pasar props manualmente por cada nivel.

- **Diseño de providers**  
  *Familia:* `superficie de aplicación`  
  Separa contextos por frecuencia de cambio y responsabilidad para evitar dependencias globales difíciles.

- **Custom Hooks**  
  *Familia:* `extracción de lógica`  
  Extraen lógica reutilizable conservando el estado independiente de cada llamada.


### Seccion: Render y reconciliación (6 conceptos)

- **Ciclo de render**  
  *Familia:* `órbita de actualización`  
  Convierte una actualización en render, reconciliación y commit.

- **Render y commit**  
  *Familia:* `tabla de estados`  
  Separa el cálculo puro del árbol siguiente de la aplicación de cambios al host.

- **Reconciliación**  
  *Familia:* `cola y consumidor`  
  Compara elementos anteriores y siguientes usando tipo, posición y key para decidir qué preservar.

- **Preservar y reiniciar estado**  
  *Familia:* `secuencia operativa`  
  La identidad por posición, tipo y key determina si un componente conserva su estado.

- **StrictMode**  
  *Familia:* `capas internas`  
  Ejecuta comprobaciones adicionales en desarrollo para revelar renders impuros y limpiezas incompletas.

- **Portals**  
  *Familia:* `configuración declarativa`  
  Renderizan hijos en otro nodo del DOM sin sacarlos del árbol lógico de React.


### Seccion: Sincronización y efectos (11 conceptos)

- **Refs**  
  *Familia:* `contenedor mutable`  
  Conservan un valor mutable entre renders sin solicitar una actualización.

- **Refs al DOM y ref como prop**  
  *Familia:* `jerarquía y dependencias`  
  Conectan un componente con un nodo host para enfocar, medir o integrar APIs imperativas.

- **useImperativeHandle**  
  *Familia:* `superficie de aplicación`  
  Expone una API imperativa pequeña en lugar de entregar todo el nodo o implementación interna.

- **useEffect**  
  *Familia:* `timeline de efecto`  
  Sincroniza el componente con sistemas externos después del commit.

- **Cleanup de efectos**  
  *Familia:* `anatomía del concepto`  
  Deshace suscripciones, timers, conexiones o solicitudes antes de repetir o desmontar.

- **Dependencias de efectos**  
  *Familia:* `capas internas`  
  Declaran valores reactivos usados por el setup para mantener la sincronización correcta.

- **Separar eventos de efectos**  
  *Familia:* `propagación de eventos`  
  Distingue lógica causada por una interacción puntual de sincronización causada por estar visible.

- **useLayoutEffect**  
  *Familia:* `ciclo de vida`  
  Ejecuta sincronización después de mutar el DOM pero antes de que el navegador pinte.

- **useInsertionEffect**  
  *Familia:* `comparativa técnica`  
  Permite a librerías CSS-in-JS insertar estilos antes de los layout effects.

- **useSyncExternalStore**  
  *Familia:* `topología y tráfico`  
  Suscribe React a un store externo con snapshots consistentes y soporte de render concurrente.

- **useDebugValue**  
  *Familia:* `evidencia y latencia`  
  Muestra una etiqueta útil para un custom Hook dentro de React DevTools.


### Seccion: Rendimiento y concurrencia (10 conceptos)

- **memo**  
  *Familia:* `memoria intermedia`  
  Permite omitir un render cuando props permanecen iguales, siempre que el componente sea puro.

- **useMemo**  
  *Familia:* `caché de cálculo`  
  Conserva el resultado de un cálculo mientras sus dependencias no cambian.

- **useCallback**  
  *Familia:* `referencia estable`  
  Conserva una referencia de función mientras sus dependencias no cambian.

- **React Compiler**  
  *Familia:* `análisis y emisión`  
  Optimiza automáticamente componentes y hooks en build mediante memoización derivada del flujo de datos.

- **Profiling**  
  *Familia:* `diagnóstico operativo`  
  Mide commits, renders y rutas lentas antes de aplicar optimizaciones.

- **lazy y code splitting**  
  *Familia:* `evidencia y latencia`  
  Carga un componente bajo demanda como módulo dinámico y difiere su código inicial.

- **Suspense**  
  *Familia:* `planificación de trabajo`  
  Muestra un fallback mientras un hijo suspende por código o datos integrados con el framework.

- **useTransition**  
  *Familia:* `máquina de estados`  
  Marca actualizaciones no urgentes como interrumpibles y expone un estado pending.

- **useDeferredValue**  
  *Familia:* `ida y vuelta`  
  Permite que una parte costosa de la interfaz quede temporalmente detrás de un valor urgente.

- **useId**  
  *Familia:* `superficie de aplicación`  
  Genera identificadores estables y coordinados entre servidor y cliente para relaciones de accesibilidad.


### Seccion: Datos, Actions y arquitectura (13 conceptos)

- **Error Boundaries**  
  *Familia:* `diagnóstico operativo`  
  Capturan errores de render en descendientes y muestran una interfaz de recuperación.

- **Actions**  
  *Familia:* `consulta e índice`  
  Representan transiciones que pueden incluir trabajo asíncrono y coordinan pending, errores y formularios.

- **useActionState**  
  *Familia:* `tabla de estados`  
  Ordena Actions basadas en el estado anterior y devuelve estado, dispatcher y pending.

- **useOptimistic**  
  *Familia:* `comparativa técnica`  
  Muestra un estado provisional inmediatamente mientras una Action confirma o revierte el resultado.

- **Form Actions y useFormStatus**  
  *Familia:* `secuencia operativa`  
  Permiten enviar funciones desde form action y leer pending, data, method y action en descendientes.

- **use**  
  *Familia:* `cola y consumidor`  
  Lee una promesa o contexto durante el render y suspende o propaga errores a fronteras cercanas.

- **Server Components**  
  *Familia:* `jerarquía y dependencias`  
  Renderizan componentes en un entorno separado antes de enviar el resultado al cliente y no agregan su código al bundle cliente.

- **Server Functions**  
  *Familia:* `flujo de transformación`  
  Permiten invocar funciones marcadas para el servidor desde Actions mediante infraestructura del framework.

- **SSR y streaming**  
  *Familia:* `planificación de trabajo`  
  Generan HTML en servidor y pueden enviar segmentos progresivamente alrededor de Suspense.

- **Hidratación**  
  *Familia:* `topología y tráfico`  
  Conecta lógica de React con HTML existente y espera que el primer render cliente coincida.

- **Arquitectura por fronteras**  
  *Familia:* `anatomía del concepto`  
  Organiza estado local, contexto, servidor, caché y rutas según propiedad y ciclo de vida de cada dato.

- **Testing de componentes**  
  *Familia:* `acumulación de recursos`  
  Comprueba comportamiento observable mediante render, interacción y aserciones accesibles.

- **Rules of React y lint**  
  *Familia:* `validación y decisión`  
  Mantienen componentes y Hooks analizables al exigir pureza y llamadas consistentes.




---
[<- Volver al Inicio](Home) | [Ver Grupo: Diseño e interfaces](Grupo-Interfaces) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
