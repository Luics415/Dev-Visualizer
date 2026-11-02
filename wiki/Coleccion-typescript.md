# 📘 [TS] TypeScript

> **Modelado, narrowing, genéricos, compilador y producción.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `typescript` |
| **Grupo Arquitectónico** | [Lenguajes](Grupo-Languages) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `typescript` |
| **Total de Conceptos** | **64 conceptos** |
| **Capítulos / Secciones** | **7 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/typescript)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/typescript-en-accion)**



---

## 📚 Desglose Exhaustivo de Conceptos (64)

### 📑 Sección: Fundamentos del sistema de tipos (6 conceptos)

- **Inferencia de tipos**  
  *Familia:* `escáner de tipos`  
  Deduce tipos a partir de valores, retornos y contexto para reducir anotaciones redundantes.

- **Anotaciones**  
  *Familia:* `puerta contractual`  
  Declaran explícitamente el tipo esperado cuando la inferencia no expresa por sí sola el contrato.

- **Tipos primitivos**  
  *Familia:* `consulta e índice`  
  Representan string, number, boolean, bigint, symbol, null y undefined dentro del sistema estático.

- **any**  
  *Familia:* `flujo de transformación`  
  Desactiva gran parte de la comprobación y permite que operaciones potencialmente inseguras atraviesen el sistema.

- **unknown**  
  *Familia:* `flujo de ejecución`  
  Acepta cualquier valor en la frontera, pero obliga a comprobarlo antes de usarlo.

- **void y never**  
  *Familia:* `capas internas`  
  Distinguen funciones que no producen un valor útil de rutas que nunca completan normalmente.


### 📑 Sección: Modelado de datos (11 conceptos)

- **Uniones**  
  *Familia:* `rutas válidas`  
  Permiten que un valor pertenezca a varias alternativas explícitas.

- **Tipos literales**  
  *Familia:* `lista cerrada`  
  Restringen un valor a opciones exactas como "idle" | "loading" | "success".

- **null, undefined y strictNullChecks**  
  *Familia:* `ida y vuelta`  
  Obligan a representar ausencia en el tipo y evitar accesos que podrían fallar.

- **Propiedades opcionales**  
  *Familia:* `conectores opcionales`  
  Modelan campos que pueden no existir sin confundir ausencia con un valor undefined explícito.

- **Readonly**  
  *Familia:* `bloqueo`  
  Evita reasignaciones accidentales a propiedades o colecciones vistas como inmutables.

- **Arrays y tuplas**  
  *Familia:* `comparativa flexible y fija`  
  Diferencian colecciones homogéneas de secuencias con longitud y posiciones conocidas.

- **Tipos de objetos**  
  *Familia:* `plano estructural`  
  Describen la forma estructural de propiedades, métodos, índices y llamadas.

- **Alias de tipos**  
  *Familia:* `plantilla reutilizable`  
  Asigna nombres reutilizables a cualquier composición de tipos.

- **Interfaces**  
  *Familia:* `capas extensibles`  
  Declaran contratos extensibles y admiten declaración merging.

- **Intersecciones**  
  *Familia:* `configuración declarativa`  
  Exigen que un valor satisfaga simultáneamente varias estructuras.

- **Uniones discriminadas**  
  *Familia:* `memoria intermedia`  
  Usan una propiedad literal común para representar estados mutuamente excluyentes de forma segura.


### 📑 Sección: Funciones tipadas (5 conceptos)

- **Tipos de funciones**  
  *Familia:* `puertos tipados`  
  Declaran parámetros, retorno, overloads y firmas de callback.

- **Firmas de llamada y constructores**  
  *Familia:* `jerarquía y dependencias`  
  Modelan valores que pueden invocarse con () o construirse mediante new.

- **Sobrecargas**  
  *Familia:* `máquina de estados`  
  Expresan varias formas públicas de invocar una función con una implementación compatible común.

- **Parámetros opcionales y por defecto**  
  *Familia:* `cola y consumidor`  
  Modelan llamadas con argumentos ausentes y preservan una firma clara.

- **this en funciones**  
  *Familia:* `aislamiento sobre host`  
  Declara el tipo del receptor esperado sin convertirse en un argumento real de JavaScript.


### 📑 Sección: Narrowing y seguridad (8 conceptos)

- **Narrowing**  
  *Familia:* `árbol de decisión`  
  Reduce un tipo amplio mediante control de flujo y comprobaciones de runtime.

- **typeof, instanceof e in**  
  *Familia:* `anatomía del concepto`  
  Usa operadores reales de JavaScript como guards que refinan el tipo dentro de cada rama.

- **Predicados de tipo**  
  *Familia:* `topología y tráfico`  
  Permiten encapsular una comprobación personalizada con un retorno value is Type.

- **Funciones de aserción**  
  *Familia:* `validación y decisión`  
  Declaran que una función lanza si una condición no se cumple y refina el tipo después de llamarla.

- **Comprobación exhaustiva**  
  *Familia:* `análisis y emisión`  
  Usa never para detectar variantes nuevas que no fueron atendidas en un switch.

- **Aserciones de tipo**  
  *Familia:* `planificación de trabajo`  
  Indican al compilador que el programador conoce un tipo más específico, sin validar nada en runtime.

- **satisfies**  
  *Familia:* `árbol de recursos`  
  Comprueba que una expresión cumple un contrato sin reemplazar su tipo inferido más específico.

- **Const assertions**  
  *Familia:* `evidencia y latencia`  
  Convierte propiedades y elementos inferidos en readonly y conserva valores literales exactos.


### 📑 Sección: Genéricos y tipos derivados (14 conceptos)

- **Genéricos**  
  *Familia:* `túnel que preserva tipo`  
  Relacionan entrada y salida mediante parámetros de tipo reutilizables.

- **Restricciones genéricas**  
  *Familia:* `ciclo de vida`  
  Limitan los tipos aceptados sin perder la información específica del argumento.

- **Parámetros genéricos por defecto**  
  *Familia:* `cola y consumidor`  
  Proporcionan un tipo de respaldo cuando el consumidor no especifica uno.

- **keyof**  
  *Familia:* `propagación de eventos`  
  Produce una unión con las claves conocidas de un tipo.

- **typeof en posiciones de tipo**  
  *Familia:* `secuencia operativa`  
  Deriva un tipo desde la forma estática de un valor ya declarado.

- **Indexed access types**  
  *Familia:* `consulta e índice`  
  Selecciona el tipo de una propiedad o conjunto de propiedades con T[K].

- **Mapped types**  
  *Familia:* `memoria intermedia`  
  Recorren claves para transformar sistemáticamente modificadores y valores.

- **Remapeo de claves**  
  *Familia:* `análisis y emisión`  
  Cambia nombres de propiedades dentro de un mapped type mediante as.

- **Tipos condicionales**  
  *Familia:* `tabla de estados`  
  Seleccionan un tipo según una relación de asignabilidad.

- **infer**  
  *Familia:* `acumulación de recursos`  
  Extrae una parte de un tipo dentro de la rama verdadera de un condicional.

- **Template literal types**  
  *Familia:* `máquina de estados`  
  Construyen uniones de strings combinando literales y otras uniones.

- **Utility Types**  
  *Familia:* `taller de tipos`  
  Ofrecen transformaciones estándar como Partial, Required, Pick, Omit, Record y Awaited.

- **Tipos recursivos**  
  *Familia:* `planificación de trabajo`  
  Describen estructuras que se contienen a sí mismas como árboles, JSON o rutas anidadas.

- **Tipos nominales con branding**  
  *Familia:* `anatomía del concepto`  
  Añaden una marca estática para evitar mezclar valores estructuralmente idénticos con significados diferentes.


### 📑 Sección: Clases y módulos (9 conceptos)

- **Clases y modificadores**  
  *Familia:* `ecosistema coordinado`  
  Tipan propiedades, constructores y métodos con public, protected, private y readonly.

- **Clases abstractas**  
  *Familia:* `evidencia y latencia`  
  Definen comportamiento compartido y miembros que las subclases deben implementar.

- **Polimorfismo de this**  
  *Familia:* `comparativa técnica`  
  Permite que métodos fluent devuelvan el subtipo concreto mediante el tipo especial this.

- **Decoradores**  
  *Familia:* `diagnóstico operativo`  
  Añaden metadatos o transformaciones declarativas a clases y miembros mediante la propuesta estándar soportada por TypeScript.

- **Módulos y exports**  
  *Familia:* `superficie de aplicación`  
  Usan el sistema de módulos de JavaScript y añaden comprobación estática entre archivos.

- **Imports y exports solo de tipos**  
  *Familia:* `secuencia operativa`  
  Marcan dependencias que deben desaparecer al emitir JavaScript.

- **Declaraciones .d.ts**  
  *Familia:* `contratos coordinados`  
  Describen el tipo de código JavaScript existente sin generar implementación.

- **Declaraciones ambientales**  
  *Familia:* `configuración declarativa`  
  Informan sobre variables, módulos o APIs disponibles externamente mediante declare.

- **Module augmentation y declaration merging**  
  *Familia:* `validación y decisión`  
  Extienden contratos existentes de forma controlada cuando una librería soporta plugins.


### 📑 Sección: Compilador y producción (11 conceptos)

- **tsconfig**  
  *Familia:* `contratos coordinados`  
  Centraliza target, módulos, librerías, strictness, paths, inclusión y salida del compilador.

- **Modo strict**  
  *Familia:* `flujo de ejecución`  
  Activa un conjunto coordinado de comprobaciones que vuelve explícitas ausencias y relaciones inseguras.

- **Opciones de precisión adicional**  
  *Familia:* `propagación de eventos`  
  noUncheckedIndexedAccess y exactOptionalPropertyTypes modelan con más fidelidad accesos e inexistencia.

- **Resolución de módulos**  
  *Familia:* `jerarquía y dependencias`  
  Determina cómo un specifier se conecta con archivos, package exports y tipos según el entorno.

- **Emisión, source maps y declarations**  
  *Familia:* `flujo de transformación`  
  Controla qué JavaScript, mapas y archivos .d.ts produce el compilador.

- **Project references**  
  *Familia:* `tabla de estados`  
  Divide repositorios grandes en proyectos compilables con dependencias y caché incremental.

- **Migración desde JavaScript**  
  *Familia:* `acumulación de recursos`  
  Permite avanzar gradualmente con allowJs, checkJs, JSDoc y archivos convertidos por frontera.

- **Validación de runtime**  
  *Familia:* `comparativa técnica`  
  Separa el contrato estático de la comprobación real de JSON, formularios y datos externos.

- **Compatibilidad estructural y varianza**  
  *Familia:* `ecosistema coordinado`  
  Explica por qué valores con la misma forma pueden asignarse y cómo cambian relaciones en callbacks y genéricos.

- **Pruebas de tipos**  
  *Familia:* `validación y decisión`  
  Verifican inferencias y errores esperados para impedir regresiones en APIs genéricas o librerías.

- **Rendimiento del checker**  
  *Familia:* `análisis y emisión`  
  Controla complejidad de uniones, recursión y tipos distribuidos para mantener builds y editor responsivos.




---
[← Volver al Inicio](Home) | [Ver Grupo: Lenguajes](Grupo-Languages) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
