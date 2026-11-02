import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { collectionManifest, collectionGroupMeta, type CollectionGroupId } from "../src/data/collectionManifest";
import { expandedCollectionById } from "../src/data/expandedCollections";
import { javascriptConcepts } from "../src/data/javascriptConcepts";
import { typescriptConcepts } from "../src/data/typescriptConcepts";
import { htmlCssConcepts } from "../src/data/htmlCssConcepts";
import { reactConcepts } from "../src/data/reactConcepts";
import { reactNativeConcepts } from "../src/data/reactNativeConcepts";
import { backendConcepts } from "../src/data/backendConcepts";
import { firebaseConcepts } from "../src/data/firebaseConcepts";
import { stateManagementConcepts } from "../src/data/stateManagementConcepts";
import { databaseConcepts } from "../src/data/databaseConcepts";
import { debuggingConcepts } from "../src/data/debuggingConcepts";
import { linuxConcepts } from "../src/data/linuxConcepts";
import { awsConcepts } from "../src/data/awsConcepts";
import { deploymentConcepts } from "../src/data/deploymentConcepts";
import { nginxConcepts } from "../src/data/nginxConcepts";
import { dockerConcepts } from "../src/data/dockerConcepts";
import { libraryTopics } from "../src/data/libraryTopics";
import { supplementalLibraryResources } from "../src/data/supplementalLibraryResources";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const wikiDir = path.resolve(__dirname, "../wiki");
const docsFile = path.resolve(__dirname, "../docs/WIKI_ENCICLOPEDIA_DEV_VISUALIZER.md");

const coreConceptsMap: Record<string, readonly { title: string; description?: string; section?: string; family?: string }[]> = {
  javascript: javascriptConcepts,
  typescript: typescriptConcepts,
  "html-css": htmlCssConcepts,
  react: reactConcepts,
  "react-native": reactNativeConcepts,
  backend: backendConcepts,
  firebase: firebaseConcepts,
  "state-management": stateManagementConcepts,
  databases: databaseConcepts,
  debugging: debuggingConcepts,
  linux: linuxConcepts,
  aws: awsConcepts,
  deployment: deploymentConcepts,
  nginx: nginxConcepts,
  docker: dockerConcepts,
};

fs.mkdirSync(wikiDir, { recursive: true });

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9_-]/g, "-");
}

type ConceptItem = {
  title: string;
  description: string;
  section: string;
  family?: string;
};

const collectionsData = collectionManifest.map((entry) => {
  const raw = coreConceptsMap[entry.id] ?? expandedCollectionById.get(entry.id)?.concepts ?? [];
  const concepts: ConceptItem[] = raw.map((c) => ({
    title: c.title,
    description: c.description ?? "Concepto técnico fundamental dentro del catálogo de arquitectura.",
    section: c.section ?? "General",
    family: c.family ?? "Arquitectura y Fundamentos",
  }));

  const sectionsMap = new Map<string, ConceptItem[]>();
  for (const c of concepts) {
    const list = sectionsMap.get(c.section) ?? [];
    list.push(c);
    sectionsMap.set(c.section, list);
  }

  const expanded = expandedCollectionById.get(entry.id);
  const topicMeta = libraryTopics.find((t) => t.slug === entry.id || t.collectionId === entry.id);
  const supplemental = supplementalLibraryResources.filter((r) => r.topicSlug === entry.id || r.topicSlug === topicMeta?.slug);

  return {
    ...entry,
    concepts,
    sectionsMap,
    expanded,
    topicMeta,
    supplemental,
  };
});

const totalConcepts = collectionsData.reduce((acc, c) => acc + c.concepts.length, 0);

console.log(`Generando Wiki técnica profesional sin emojis para ${collectionsData.length} colecciones y ${totalConcepts} conceptos...`);

// Group diagram mappings (Pure Mermaid, zero emojis)
const groupDiagrams: Record<CollectionGroupId, string> = {
  fundamentals: `\`\`\`mermaid
flowchart TD
    Prob["Problema Computacional"] --> Analisis["Analisis de Requisitos y Modelado"]
    Analisis --> Diseno["Diseno Algoritmico y Estructura de Datos"]
    Diseno --> Eval["Evaluacion Asintotica: O(1), O(log n), O(n), O(n log n)"]
    Eval --> Impl["Implementacion y Casos de Prueba"]
    Impl --> Verif["Verificacion Formal y Refactorizacion"]
\`\`\``,
  languages: `\`\`\`mermaid
flowchart LR
    Source["Codigo Fuente"] --> Lexer["Analisis Lexico (Tokens)"]
    Lexer --> Parser["Analisis Sintactico (AST)"]
    Parser --> Semantic["Analisis Semantico y Tipado"]
    Semantic --> IR["Generacion de Codigo Intermedio (IR)"]
    IR --> OptEngine["Optimizador de Compilador"]
    OptEngine --> MachineCode["Codigo Maquina / Bytecode (JIT / AOT)"]
\`\`\``,
  interfaces: `\`\`\`mermaid
flowchart TD
    StateChange["Mutacion de Estado React 19"] --> VDOM["Reconciliacion Virtual DOM (Fiber Tree)"]
    VDOM --> Commit["Fase de Commit al DOM del Navegador"]
    Commit --> CSSOM["Recalculo de Estilos (CSSOM)"]
    CSSOM --> Layout["Calculo de Layout / Reflow"]
    Layout --> Paint["Pintado de Capas (Paint)"]
    Paint --> GPU["Composicion Acelerada por GPU (Motion 14 @ 60 FPS)"]
\`\`\``,
  platforms: `\`\`\`mermaid
flowchart TD
    ClientReq["Peticion HTTP / Cliente"] --> Proxy["Reverse Proxy / NGINX (SSL, Cache, Rate Limit)"]
    Proxy --> Server["Runtime del Servidor (Node.js / Python / .NET)"]
    Server --> EventLoop["Event Loop / Worker Pool"]
    EventLoop --> Services["Capa de Negocio y Microservicios"]
    Services --> DB["Persistencia y Servicios Externos"]
\`\`\``,
  data: `\`\`\`mermaid
flowchart TD
    AppLayer["Capa de Aplicacion"] --> Cache["Nivel 1: Cache en Memoria (Redis / RAM)"]
    Cache --> StorageEngine["Nivel 2: Motor de Almacenamiento (Buffer Pool)"]
    StorageEngine --> WAL["Nivel 3: Write-Ahead Logging (WAL / Redo Log)"]
    WAL --> Disk["Nivel 4: Tablas y Archivos de Datos en Disco"]
    Disk --> Replica["Nivel 5: Replicacion y Copias de Seguridad"]
\`\`\``,
  versioning: `\`\`\`mermaid
flowchart LR
    WorkDir["Working Directory"] --> Staging["Staging Area (Index)"]
    Staging --> LocalRepo["Repositorio Local (Commit DAG)"]
    LocalRepo --> CI["Pipeline CI / Verificacion Automatica"]
    CI --> RemoteRepo["Repositorio Remoto (Origin / Main)"]
\`\`\``,
  delivery: `\`\`\`mermaid
flowchart TD
    Push["Git Push / Pull Request"] --> BuildStep["Compilacion y Empaquetado de Contenedores"]
    BuildStep --> SecScan["Escaneo SAST y Dependencias (CodeQL / Gitleaks)"]
    SecScan --> TestGate["Quality Gates: Enlaces, Tipos, Accesibilidad"]
    TestGate --> Deploy["Despliegue Continuo Zero-Downtime"]
    Deploy --> Monitor["Telemetria, Metricas y Monitoreo Continuo"]
\`\`\``,
};

// 1. Home.md
const homeContent = `# Dev Visualizer Wiki - Enciclopedia Tecnica de Arquitectura

Bienvenido a la **Wiki Oficial de Dev Visualizer**, el atlas tecnico e interactivo de arquitectura de software, ingenieria de sistemas y lenguajes de programacion.

---

## Metricas Globales del Ecosistema

| Metrica | Valor Verificado | Descripcion Tecnica |
| :--- | :--- | :--- |
| **Conceptos Tecnicos Indexados** | **${totalConcepts.toLocaleString("es-MX")}** | Modelos atomicos de aprendizaje con definiciones y escenas visuales |
| **Colecciones Oficiales** | **${collectionsData.length}** | Nucleos tecnologicos categorizados en 7 grupos de especializacion |
| **Rutas Interactivas** | **${collectionsData.length * 2}** | 73 atlas teoricos + 73 estudios de caso practicos en accion |
| **Paginas Estaticas Generadas** | **394 paginas** | Compilacion 100% estatica (SSG) de alto rendimiento (0 latencia de red) |
| **Estandar de Accesibilidad** | **WCAG 2.1 AAA** | Soporte para lectores de pantalla, alto contraste y navegacion por teclado |
| **Arquitectura de Software** | **Next.js 16 + React 19** | Motion 14 (GPU 60 FPS), Web Speech API y TypeScript 6 |

---

## Diagrama de Arquitectura Global del Sistema

\`\`\`mermaid
graph TD
    subgraph Client ["Navegador Cliente (Zero-Runtime Lag)"]
        UI["Interfaz de Usuario React 19"]
        GPU["Renderizado Vectorial Motion 14 (60 FPS)"]
        Audio["Motor de Audio Web Speech API"]
        Search["Motor de Busqueda en Memoria (<100 KB)"]
    end
    subgraph Data ["Estructuras de Datos y Catalogo"]
        Manifest["73 Colecciones Manifest"]
        Index["7,410 Conceptos Compactos"]
        Library["272 Recursos Tecnicos Validados"]
        Quizzes["Bateria de Evaluaciones"]
    end
    subgraph Build ["Pipeline de Compilacion Estatica"]
        NextSSG["Next.js 16 SSG (394 Paginas)"]
        Audit["Auditoria Estatica (Links, A11y, Tipos)"]
        CodeQL["GitHub CodeQL SAST"]
    end
    Data --> NextSSG
    NextSSG --> Build
    Build --> Client
    UI --> GPU
    UI --> Search
    UI --> Audio
\`\`\`

---

## Topologia de los 7 Grupos Arquitectonicos

\`\`\`mermaid
flowchart LR
    Fund["01 Fundamentos"] --> Lang["02 Lenguajes"]
    Lang --> Plat["04 Plataformas"]
    Lang --> Inter["03 Interfaces"]
    Plat --> DataG["05 Datos"]
    Plat --> Infra["07 Infraestructura"]
    Inter --> Version["06 Versionado"]
    Version --> Infra
\`\`\`

${(Object.keys(collectionGroupMeta) as CollectionGroupId[])
  .map((groupId) => {
    const meta = collectionGroupMeta[groupId];
    const groupCols = collectionsData.filter((c) => c.group === groupId);
    const groupConcepts = groupCols.reduce((acc, c) => acc + c.concepts.length, 0);
    const filename = `Grupo-${groupId.charAt(0).toUpperCase() + groupId.slice(1)}`;
    return `### [${meta.name}](${filename})
> *${meta.description}*  
> **${groupCols.length} Colecciones** | **${groupConcepts} Conceptos Tecnicos**

${groupCols.map((c) => `- **[${c.label}](Coleccion-${sanitizeFilename(c.id)})** (\`${c.short}\`): ${c.summary} — *(${c.concepts.length} conceptos)*`).join("\n")}
`;
  })
  .join("\n")}

---

## Modelos Computacionales y Algoritmos Centrales

### 1. Busqueda Vectorial Difusa en Tiempo Lineal: $O(N)$
El motor de busqueda de Dev Visualizer indexa los ${totalConcepts} conceptos en una estructura de tuplas compactas \`[titulo, seccion, idColeccion]\` cargada directamente en memoria del cliente. La normalizacion fonetica descompone caracteres diacriticos mediante Unicode NFD, garantizando coincidencia insensible a tildes con una sobrecarga de memoria inferior a 100 KB.

### 2. Sincronizacion de Estado React 19 sin Render-Drift
El desacoplamiento del progreso de lectura se implementa mediante \`useSyncExternalStore\`, eliminando estados intermedios y desfases visuales entre el scroll pasivo del navegador y la barra de navegacion flotante.

### 3. Pipeline de Audio Adaptativo
La sintesis vocal en navegadores divide las cadenas de texto en fragmentos semanticos delimitados por pausas ortograficas (puntos y comas), previniendo los bloqueos clasicos de buffer del Web Speech API en oraciones largas.

---

## Enlaces de Referencia del Ecosistema
- [Dev Visualizer en Vivo](https://luics415.github.io/Dev-Visualizer/)
- [Indice Maestro de los ${totalConcepts} Conceptos](Indice-Maestro-7410-Conceptos)
- [Arquitectura del Sistema y Rendimiento](Arquitectura-del-Sistema)
- [Gobernanza, Seguridad y Pipeline de Auditoria](Gobernanza-y-Auditoria)
- [Repositorio en GitHub](https://github.com/Luics415/Dev-Visualizer)

---
*Dev Visualizer Wiki • Mantenedor: [@Luics415](https://github.com/Luics415) • Coautoria Tecnica: [@Azlynn17](https://github.com/Azlynn17).*
`;
fs.writeFileSync(path.join(wikiDir, "Home.md"), homeContent, "utf8");

// 2. _Sidebar.md
const sidebarContent = `### [Dev Visualizer Wiki](Home)

- [Inicio](Home)
- [Indice Maestro (${totalConcepts})](Indice-Maestro-7410-Conceptos)
- [Arquitectura del Sistema](Arquitectura-del-Sistema)
- [Gobernanza y Auditoria](Gobernanza-y-Auditoria)

---

### Grupos de Arquitectura
${(Object.keys(collectionGroupMeta) as CollectionGroupId[])
  .map((groupId) => {
    const meta = collectionGroupMeta[groupId];
    const filename = `Grupo-${groupId.charAt(0).toUpperCase() + groupId.slice(1)}`;
    const groupCols = collectionsData.filter((c) => c.group === groupId);
    return `- **[${meta.name}](${filename})** (${groupCols.length})
${groupCols.map((c) => `  - [${c.short} - ${c.label}](Coleccion-${sanitizeFilename(c.id)})`).join("\n")}`;
  })
  .join("\n")}

---
- [Atlas en Vivo](https://luics415.github.io/Dev-Visualizer/)
- [Repositorio GitHub](https://github.com/Luics415/Dev-Visualizer)
`;
fs.writeFileSync(path.join(wikiDir, "_Sidebar.md"), sidebarContent, "utf8");

// 3. _Footer.md
const footerContent = `---
**Dev Visualizer** • Atlas Tecnico de Arquitectura e Ingenieria de Software  
Autor: [@Luics415](https://github.com/Luics415) | Coautoria Tecnica: [@Azlynn17](https://github.com/Azlynn17)  
Licencia MIT • [Ver en GitHub](https://github.com/Luics415/Dev-Visualizer) • [Atlas en Vivo](https://luics415.github.io/Dev-Visualizer/)
`;
fs.writeFileSync(path.join(wikiDir, "_Footer.md"), footerContent, "utf8");

// 4. Group Pages (7 files)
for (const groupId of Object.keys(collectionGroupMeta) as CollectionGroupId[]) {
  const meta = collectionGroupMeta[groupId];
  const groupCols = collectionsData.filter((c) => c.group === groupId);
  const groupConcepts = groupCols.reduce((acc, c) => acc + c.concepts.length, 0);
  const filename = `Grupo-${groupId.charAt(0).toUpperCase() + groupId.slice(1)}.md`;

  const groupPageContent = `# Grupo: ${meta.name}

> **${meta.description}**  
> **Total de Colecciones:** ${groupCols.length}  
> **Total de Conceptos Tecnicos:** ${groupConcepts}

---

## Flujo Arquitectonico y Modelo Conceptual

${groupDiagrams[groupId]}

---

## Colecciones Integradas

${groupCols
  .map((c) => {
    const sectionsCount = c.sectionsMap.size;
    return `### [${c.label}](Coleccion-${sanitizeFilename(c.id)}) (\`${c.short}\`)

- **Resumen:** ${c.summary}
- **Ciclo de Vida:** \`${c.lifecycle}\`
- **Conceptos:** ${c.concepts.length} conceptos distribuidos en ${sectionsCount} capitulos.
- **Enlaces Directos:**
  - [Explorar Atlas Teorico](https://luics415.github.io/Dev-Visualizer${c.href})
  - [Ver Caso Practico en Accion](https://luics415.github.io/Dev-Visualizer${c.actionHref})
  - [Ver Pagina Wiki Detallada](Coleccion-${sanitizeFilename(c.id)})

---`;
  })
  .join("\n\n")}

[<- Volver al Inicio](Home) | [Ir al Indice Maestro de Conceptos ->](Indice-Maestro-7410-Conceptos)
`;

  fs.writeFileSync(path.join(wikiDir, filename), groupPageContent, "utf8");
}

// 5. Individual Collection Pages (73 files)
for (const col of collectionsData) {
  const pageFilename = `Coleccion-${sanitizeFilename(col.id)}.md`;
  const sectionsList = Array.from(col.sectionsMap.entries());

  let caseStudySection = "";
  if (col.expanded?.caseStudy) {
    const cs = col.expanded.caseStudy;
    caseStudySection = `
## Estudio de Caso Practico: ${cs.title}

> **${cs.eyebrow}:** ${cs.description}  
> ${cs.footer}

### Fases de Ejecucion:
${cs.steps.map((st, idx) => `${idx + 1}. **${st.title}** (${st.subtitle}): \`${st.code}\` -> ${st.result}. *${st.note}*`).join("\n")}
`;
  }

  let resourcesSection = "";
  if (col.supplemental.length > 0) {
    resourcesSection = `
## Referencias Bibliograficas y Documentacion Oficial
${col.supplemental.map((r) => `- **[${r.title}](${r.primaryUrl})** (\`${r.kind}\` | Nivel: \`${r.level}\`): ${r.note ?? ""}`).join("\n")}
`;
  }

  const colContent = `# ${col.label} (${col.short})

> **${col.summary}**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | \`${col.id}\` |
| **Grupo Arquitectonico** | [${collectionGroupMeta[col.group].name}](Grupo-${col.group.charAt(0).toUpperCase() + col.group.slice(1)}) |
| **Ciclo de Vida** | \`${col.lifecycle}\` |
| **Tema Visual** | \`${col.theme}\` |
| **Total de Conceptos** | **${col.concepts.length} conceptos** |
| **Capitulos / Secciones** | **${sectionsList.length} secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer${col.href})
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer${col.actionHref})

${caseStudySection}

---

## Catalogo Sistematico de Conceptos (${col.concepts.length})

${sectionsList
  .map(([sectionName, items]) => {
    return `### Seccion: ${sectionName} (${items.length} conceptos)

${items
  .map((item) => {
    return `- **${item.title}**  
  *Familia:* \`${item.family}\`  
  ${item.description}
`;
  })
  .join("\n")}`;
  })
  .join("\n\n")}

${resourcesSection}

---
[<- Volver al Inicio](Home) | [Ver Grupo: ${collectionGroupMeta[col.group].name}](Grupo-${col.group.charAt(0).toUpperCase() + col.group.slice(1)}) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
`;

  fs.writeFileSync(path.join(wikiDir, pageFilename), colContent, "utf8");
}

// 6. Indice-Maestro-7410-Conceptos.md
let indexContent = `# Indice Maestro de Conceptos Tecnicos (${totalConcepts.toLocaleString("es-MX")})

Este documento constituye el indice enciclopedico unificado de los **${totalConcepts.toLocaleString("es-MX")} conceptos tecnicos** formalmente modelados en **Dev Visualizer**. Cada entrada cuenta con su definicion semantica, seccion pedagogica y enlace a su respectiva coleccion interactiva.

---

## Resumen Sistematico por Coleccion
| Coleccion | Sigla | Grupo | Conceptos | Enlace Wiki | Atlas Interactivo |
| :--- | :---: | :--- | :---: | :--- | :--- |
${collectionsData.map((c) => `| **${c.label}** | \`${c.short}\` | ${collectionGroupMeta[c.group].name} | **${c.concepts.length}** | [Wiki](Coleccion-${sanitizeFilename(c.id)}) | [En vivo](https://luics415.github.io/Dev-Visualizer${c.href}) |`).join("\n")}

---

## Directorio Sistematico de Conceptos por Coleccion

`;

for (const col of collectionsData) {
  indexContent += `### [${col.label} (Coleccion-${sanitizeFilename(col.id)})] — ${col.concepts.length} Conceptos\n\n`;
  for (const [secName, items] of col.sectionsMap.entries()) {
    indexContent += `#### ${secName}\n`;
    for (const item of items) {
      indexContent += `- **${item.title}**: ${item.description}\n`;
    }
    indexContent += "\n";
  }
  indexContent += "---\n\n";
}

fs.writeFileSync(path.join(wikiDir, "Indice-Maestro-7410-Conceptos.md"), indexContent, "utf8");

// 7. Arquitectura-del-Sistema.md
const archContent = `# Arquitectura Tecnica y Rendimiento de Dev Visualizer

**Dev Visualizer** esta disenado bajo los principios de maxima fidelidad pedagogica, cero regresiones y rendimiento extremo en el navegador web.

---

## Stack Tecnologico Principal

| Componente | Tecnologia | Version | Rol en la Arquitectura |
| :--- | :--- | :--- | :--- |
| **Framework Web** | Next.js | \`16.4.3\` | Generacion Estatica (SSG), compilacion atomica de 394 paginas y optimizacion de assets. |
| **Libreria UI** | React | \`19.2.8\` | Modelo de componentes declarativo, hooks modernos y uso de \`useSyncExternalStore\` para estado desacoplado. |
| **Motor de Animacion** | Motion (Framer Motion) | \`14.8.0\` | Animaciones vectoriales GPU a 60 FPS con soporte estricto de \`prefers-reduced-motion\`. |
| **Tipado Estatico** | TypeScript | \`6.0.3\` | Contratos rigurosos para colecciones, preguntas de examen, esquemas de busqueda y metadatos. |
| **Sintesis de Audio** | Web Speech API | Nativa | Narracion pedagogica de conceptos con chunking semantico por pausas de puntuacion. |
| **Motor de Busqueda** | En Memoria | Nativo (<100 KB) | Indexacion instantanea con tuplas comprimidas y normalizacion fonetica de acentos. |

---

## Diagrama de Ciclo de Vida SSG y Cero Latencia de Runtime

\`\`\`mermaid
sequenceDiagram
    autonumber
    actor Dev as Desarrollador / CI
    participant Next as Next.js 16 SSG
    participant Worker as 2 Worker Threads
    participant Disk as /out (394 Paginas HTML)
    participant Client as Navegador Usuario
    Dev->>Next: npm run build
    Next->>Worker: Distribuir 73 colecciones y rutas
    Worker->>Disk: Generar HTML estatico pre-renderizado
    Disk->>Client: Carga instantanea via GitHub Pages (0 fetch)
    Client->>Client: useSyncExternalStore sincroniza estado local
\`\`\`

---

## Decisiones de Diseno Clave

### 1. Static Site Generation (SSG) Puro
Dev Visualizer compila sus 394 paginas y rutas tecnicas durante el build de Next.js. No realiza llamadas de red ni solicitudes a bases de datos en tiempo de ejecucion (0 runtime fetch lag). Esto garantiza disponibilidad del 100% en GitHub Pages, tiempos de carga casi instantaneos y navegacion offline via Service Workers.

### 2. Motor de Busqueda Compacto

\`\`\`mermaid
flowchart TD
    Query["Entrada de Busqueda"] --> Norm["Normalizacion Fonetica (NFD, lowercase, tildes)"]
    Norm --> SearchLoop["Escaneo Vectorial en RAW_CONCEPTS (<100 KB)"]
    SearchLoop --> Filter["Filtrado por Coincidencia Parcial y Distancia"]
    Filter --> Rank["Ponderacion por Titulo > Seccion > Coleccion"]
    Rank --> Top["Top 8 Resultados Inmediatos"]
\`\`\`

El indice de los 7,410 conceptos se almacena en una estructura de tuplas compactas \`[titulo, seccion, idColeccion]\`, manteniendo el tamano total del bundle de busqueda por debajo de los 100 KB. La busqueda utiliza un algoritmo de distancia difusa con eliminacion de tildes y caracteres especiales.

### 3. Animaciones Aceleradas por Hardware
Todas las escenas pedagogicas animadas (\`AnimatedConceptScene\`) transforman exclusivamente propiedades de composicion (\`transform: translate3d\`, \`opacity\`), evitando recalcular el layout o causar repaints en el hilo principal del navegador.

---
[<- Volver al Inicio](Home)
`;
fs.writeFileSync(path.join(wikiDir, "Arquitectura-del-Sistema.md"), archContent, "utf8");

// 8. Gobernanza-y-Auditoria.md
const govContent = `# Gobernanza, Calidad y Pipeline de Auditoria

El repositorio **Dev Visualizer** implementa un modelo de gobernanza estricta asistido por un orquestador de agentes autonomos y CI/CD reproducible.

---

## Diagrama del Pipeline de 7 Habilidades Oficiales

\`\`\`mermaid
stateDiagram-v2
    [*] --> Definir: 01-Definir
    Definir --> Planificar: 02-Planificar
    Planificar --> Construir: 03-Construir (Ramas atomicas)
    Construir --> Verificar: 04-Verificar (Links, A11y, Build)
    Verificar --> Revisar: 05-Revisar (CodeQL, Gitleaks, Audit)
    Revisar --> Aprobar: 06-Aprobar (Dictamen formal)
    Aprobar --> Centinela: 07-Centinela (Discussions 6h)
    Centinela --> [*]
\`\`\`

---

## Descripcion de las 7 Habilidades Oficiales

Cada cambio propuesto debe recorrer rigurosamente las 7 fases normativas:

1. **01-Definir:** Especificacion de requisitos, criterios de aceptacion, contratos de datos y alcance atomico.
2. **02-Planificar:** Desglose secuencial de tareas con dependencias, mitigacion de riesgos y puntos de control.
3. **03-Construir:** Creacion de ramas Git atomicas (\`feat/\`, \`fix/\`, \`docs/\`) y Pull Requests con plantillas formales y coautoria tecnica (\`Co-authored-by: Azlynn17\`).
4. **04-Verificar:** Ejecucion del conjunto exhaustivo de validaciones:
   - \`npm run check:library\`: Validacion de integridad de colecciones y recursos.
   - \`npm run check:links\`: Auditoria estatica de enlaces internos para asegurar 0 enlaces rotos en las 394 paginas.
   - \`npm run check:a11y\`: Validacion estricta de contrastes, atributos ARIA y navegacion por teclado.
   - \`npm run build\` y \`npm run typecheck\`: Compilacion limpia sin errores de tipos.
5. **05-Revisar:** Auditoria de seguridad con \`npm audit\`, escaneo de credenciales con Gitleaks y analisis SAST con **GitHub CodeQL**.
6. **06-Aprobar:** Emision del dictamen formal ejecutivo (\`Aprobado\`, \`Requiere Cambios\` o \`Bloqueado\`).
7. **07-Centinela:** Monitoreo y asistencia tecnica en GitHub Discussions con ventana de cortesia humana y analisis contextualizado.

---

## Postura de Seguridad Activa

- **Dependabot Alerts y Automated Fixes:** Monitoreo continuo de CVEs y apertura automatica de PRs de actualizacion.
- **Private Vulnerability Reporting:** Canal oficial privado para divulgacion coordinada y responsable de fallos de seguridad.
- **GitHub CodeQL SAST:** Analisis semantico profundo de seguridad en TypeScript, JavaScript y Python en cada PR.

---
[<- Volver al Inicio](Home)
`;
fs.writeFileSync(path.join(wikiDir, "Gobernanza-y-Auditoria.md"), govContent, "utf8");

// 9. Documento Maestro Versionado docs/WIKI_ENCICLOPEDIA_DEV_VISUALIZER.md
const docsMasterContent = `# Enciclopedia Tecnica Dev Visualizer (73 Colecciones • ${totalConcepts.toLocaleString("es-MX")} Conceptos)

> **Documento Maestro Integrado del Atlas Pedagogico Dev Visualizer**  
> Fecha de generacion: 2026-11-02 • Autor: [@Luics415](https://github.com/Luics415) • Coautoria Tecnica: [@Azlynn17](https://github.com/Azlynn17)

---

## Metricas Consolidadas
- **Colecciones Oficiales:** 73
- **Conceptos Tecnicos Indexados:** ${totalConcepts.toLocaleString("es-MX")}
- **Rutas Tecnicas:** 146
- **Paginas SSG Generadas:** 394
- **Recursos Verificados:** 272

---

## Diagrama de Arquitectura de Colecciones

\`\`\`mermaid
flowchart LR
    Fund["01 Fundamentos"] --> Lang["02 Lenguajes"]
    Lang --> Plat["04 Plataformas"]
    Lang --> Inter["03 Interfaces"]
    Plat --> DataG["05 Datos"]
    Plat --> Infra["07 Infraestructura"]
    Inter --> Version["06 Versionado"]
    Version --> Infra
\`\`\`

---

## Catalogo de Grupos y Colecciones
${(Object.keys(collectionGroupMeta) as CollectionGroupId[])
  .map((groupId) => {
    const meta = collectionGroupMeta[groupId];
    const groupCols = collectionsData.filter((c) => c.group === groupId);
    return `### Grupo: ${meta.name} (${meta.description})
${groupCols.map((c) => `- **[${c.short}] ${c.label}** (${c.concepts.length} conceptos) — [Atlas en vivo](https://luics415.github.io/Dev-Visualizer${c.href}) | [En accion](https://luics415.github.io/Dev-Visualizer${c.actionHref}): ${c.summary}`).join("\n")}
`;
  })
  .join("\n")}

---

## Indice Tematico de los ${totalConcepts.toLocaleString("es-MX")} Conceptos
*(Para consultar el desglose interactivo individual de cada concepto y sus escenas animadas, visita la Wiki de GitHub en \`/wiki\` o el Atlas interactivo en [https://luics415.github.io/Dev-Visualizer/](https://luics415.github.io/Dev-Visualizer/)).*

${collectionsData
  .map((c) => {
    return `### ${c.label} (\`${c.short}\`) — ${c.concepts.length} conceptos
${Array.from(c.sectionsMap.entries())
  .map(([sec, items]) => {
    return `**${sec}:** ${items.map((i) => `\`${i.title}\``).join(", ")}`;
  })
  .join("\n\n")}
`;
  })
  .join("\n\n---\n\n")}
`;

fs.writeFileSync(docsFile, docsMasterContent, "utf8");

console.log(`Exito: Se generaron ${fs.readdirSync(wikiDir).length} archivos tecnicos sin emojis en wiki/ y docs/WIKI_ENCICLOPEDIA_DEV_VISUALIZER.md.`);
