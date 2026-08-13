export type CollectionLifecycle = "actual" | "legado" | "histórico";

export type CollectionGroupId =
  | "languages"
  | "interfaces"
  | "platforms"
  | "data"
  | "versioning"
  | "delivery";

export type CollectionManifestEntry = {
  id: string;
  label: string;
  short: string;
  href: string;
  actionHref: string;
  group: CollectionGroupId;
  theme: string;
  lifecycle: CollectionLifecycle;
  summary: string;
  legacyPaths?: readonly string[];
};

export const collectionGroupMeta: Record<CollectionGroupId, { name: string; description: string }> = {
  languages: { name: "Lenguajes", description: "Sintaxis, tipos, memoria y ejecución" },
  interfaces: { name: "Diseño e interfaces", description: "Experiencia, web y aplicaciones móviles" },
  platforms: { name: "Plataformas y servidor", description: "Runtimes, frameworks, contratos y automatización" },
  data: { name: "Datos", description: "Estado, modelado, consultas y persistencia" },
  versioning: { name: "Control de versiones y calidad", description: "Historia, colaboración, diagnóstico y recuperación" },
  delivery: { name: "Infraestructura y entrega", description: "Hosts, nube, pipelines y releases operables" },
};

export const collectionManifest: readonly CollectionManifestEntry[] = [
  { id: "javascript", label: "JavaScript ES6+", short: "JS", href: "/", actionHref: "/javascript-en-accion", group: "languages", theme: "javascript", lifecycle: "actual", summary: "Lenguaje, objetos, asincronía, módulos, protocolos y memoria." },
  { id: "typescript", label: "TypeScript", short: "TS", href: "/typescript", actionHref: "/typescript-en-accion", group: "languages", theme: "typescript", lifecycle: "actual", summary: "Modelado, narrowing, genéricos, compilador y producción." },
  { id: "c", label: "C", short: "C", href: "/c", actionHref: "/c-en-accion", group: "languages", theme: "c", lifecycle: "actual", summary: "Compilación, memoria, punteros, ABI, herramientas y seguridad." },
  { id: "cpp", label: "C++", short: "C++", href: "/cpp", actionHref: "/cpp-en-accion", group: "languages", theme: "cpp", lifecycle: "actual", summary: "RAII, tipos, STL, templates, concurrencia y rendimiento." },
  { id: "c-sharp", label: "C#", short: "C#", href: "/c-sharp", actionHref: "/c-sharp-en-accion", group: "languages", theme: "c-sharp", lifecycle: "actual", summary: "Tipos, patrones, LINQ, asincronía, memoria y concurrencia." },
  { id: "objective-c", label: "Objective-C", short: "Obj-C", href: "/objective-c", actionHref: "/objective-c-en-accion", group: "languages", theme: "objective-c", lifecycle: "legado", summary: "Mensajería, runtime, ARC, Foundation e interoperabilidad con Swift." },
  { id: "c-star", label: "C*", short: "C*", href: "/c-star", actionHref: "/c-star-en-accion", group: "languages", theme: "c-star", lifecycle: "histórico", summary: "Programación data-parallel para sistemas Connection Machine." },
  { id: "cweb", label: "CWEB", short: "CWEB", href: "/cweb", actionHref: "/cweb-en-accion", group: "languages", theme: "cweb", lifecycle: "histórico", summary: "Programación literaria con CTANGLE, CWEAVE, C y TeX." },
  { id: "embedded-c", label: "Embedded C", short: "EC", href: "/embedded-c", actionHref: "/embedded-c-en-accion", group: "languages", theme: "embedded-c", lifecycle: "actual", summary: "Microcontroladores, registros, interrupciones, timing y seguridad." },
  { id: "visual-basic", label: "Visual Basic .NET", short: "VB", href: "/visual-basic", actionHref: "/visual-basic-en-accion", group: "languages", theme: "visual-basic", lifecycle: "actual", summary: "Lenguaje .NET, eventos, LINQ, WinForms e interoperabilidad." },

  { id: "ux-ui", label: "UX/UI", short: "UX", href: "/ux-ui", actionHref: "/ux-ui-en-accion", group: "interfaces", theme: "ux-ui", lifecycle: "actual", summary: "Investigación, flujos, accesibilidad, prototipos y validación." },
  { id: "html-css", label: "HTML y CSS", short: "HTML", href: "/html-css", actionHref: "/html-css-en-accion", group: "interfaces", theme: "html-css", lifecycle: "actual", summary: "Semántica, cascade, layout, responsive y render del navegador." },
  { id: "bootstrap", label: "Bootstrap", short: "BS", href: "/bootstrap", actionHref: "/bootstrap-en-accion", group: "interfaces", theme: "bootstrap", lifecycle: "actual", summary: "Grid, utilidades, componentes, Sass, accesibilidad y personalización." },
  { id: "angularjs", label: "AngularJS", short: "AJS", href: "/angularjs", actionHref: "/angularjs-en-accion", group: "interfaces", theme: "angularjs", lifecycle: "legado", summary: "Mantenimiento de aplicaciones 1.x, digest cycle y migración gradual." },
  { id: "react", label: "React", short: "React", href: "/react", actionHref: "/react-en-accion", group: "interfaces", theme: "react", lifecycle: "actual", summary: "Componentes, estado, reconciliación, efectos y concurrencia." },
  { id: "react-native", label: "React Native", short: "RN", href: "/react-native", actionHref: "/react-native-en-accion", group: "interfaces", theme: "react-native", lifecycle: "actual", summary: "Nueva Arquitectura, dispositivo, offline, performance y releases." },

  { id: "apis", label: "APIs", short: "API", href: "/apis", actionHref: "/apis-en-accion", group: "platforms", theme: "apis", lifecycle: "actual", summary: "REST, GraphQL, gRPC, eventos, tiempo real, contratos y seguridad.", legacyPaths: ["/apis-rest", "/apis-rest-en-accion"] },
  { id: "backend", label: "Backend", short: "Back", href: "/backend", actionHref: "/backend-en-accion", group: "platforms", theme: "backend", lifecycle: "actual", summary: "Arquitectura, seguridad, persistencia, mensajería y confiabilidad." },
  { id: "nodejs", label: "Node.js", short: "Node", href: "/nodejs", actionHref: "/nodejs-en-accion", group: "platforms", theme: "nodejs", lifecycle: "actual", summary: "Runtime, event loop, streams, workers, módulos y operación." },
  { id: "laravel", label: "Laravel", short: "Lv", href: "/laravel", actionHref: "/laravel-en-accion", group: "platforms", theme: "laravel", lifecycle: "actual", summary: "Contenedor, HTTP, Eloquent, políticas, colas, eventos y pruebas." },
  { id: "n8n", label: "n8n", short: "n8n", href: "/n8n", actionHref: "/n8n-en-accion", group: "platforms", theme: "n8n", lifecycle: "actual", summary: "Workflows, credenciales, datos, reintentos, subflujos y operación." },
  { id: "dotnet", label: ".NET", short: ".NET", href: "/dotnet", actionHref: "/dotnet-en-accion", group: "platforms", theme: "dotnet", lifecycle: "actual", summary: "SDK, CLR, IL, JIT/AOT, GC, bibliotecas, hosting y diagnóstico." },
  { id: "firebase", label: "Firebase", short: "FB", href: "/firebase", actionHref: "/firebase-en-accion", group: "platforms", theme: "firebase", lifecycle: "actual", summary: "Auth, datos, Storage, Functions, Hosting, FCM y Rules." },

  { id: "state-management", label: "Gestión de estado", short: "State", href: "/gestion-estado", actionHref: "/gestion-estado-en-accion", group: "data", theme: "state-management", lifecycle: "actual", summary: "Ownership, stores, caché remota, persistencia y offline." },
  { id: "databases", label: "Bases de datos", short: "DB", href: "/bases-datos", actionHref: "/bases-datos-en-accion", group: "data", theme: "databases", lifecycle: "actual", summary: "Modelado, SQL, índices, concurrencia, distribución y backups." },

  { id: "git", label: "Git", short: "Git", href: "/git", actionHref: "/git-en-accion", group: "versioning", theme: "git", lifecycle: "actual", summary: "Objetos, referencias, staging, historia, sincronización y rescate.", legacyPaths: ["/git-github", "/git-github-en-accion"] },
  { id: "github", label: "GitHub", short: "GH", href: "/github", actionHref: "/github-en-accion", group: "versioning", theme: "github", lifecycle: "actual", summary: "Colaboración, PRs, gobierno, seguridad, comunidad y releases." },
  { id: "debugging", label: "Debugging", short: "Debug", href: "/debugging", actionHref: "/debugging-en-accion", group: "versioning", theme: "debugging", lifecycle: "actual", summary: "Reproducción, evidencia, hipótesis, rendimiento e incidentes." },

  { id: "linux", label: "Linux", short: "Linux", href: "/linux", actionHref: "/linux-en-accion", group: "delivery", theme: "linux", lifecycle: "actual", summary: "Kernel, shell, procesos, redes, storage, hardening y contenedores." },
  { id: "aws", label: "AWS", short: "AWS", href: "/aws", actionHref: "/aws-en-accion", group: "delivery", theme: "aws", lifecycle: "actual", summary: "Identidad, VPC, compute, datos, eventos, gobierno y costo." },
  { id: "ci-cd", label: "CI/CD", short: "CI", href: "/ci-cd", actionHref: "/ci-cd-en-accion", group: "delivery", theme: "ci-cd", lifecycle: "actual", summary: "Integración, evidencia, artefactos, supply chain y promoción." },
  { id: "deployment", label: "Deployment", short: "Ship", href: "/deployment", actionHref: "/deployment-en-accion", group: "delivery", theme: "deployment", lifecycle: "actual", summary: "Entornos, configuración, rollouts, tráfico, migraciones y rollback." },
  { id: "nginx", label: "NGINX", short: "NGINX", href: "/nginx", actionHref: "/nginx-en-accion", group: "delivery", theme: "nginx", lifecycle: "actual", summary: "Servidor web, reverse proxy, balanceo, TLS, caché y operación." },
  { id: "docker", label: "Docker", short: "Docker", href: "/docker", actionHref: "/docker-en-accion", group: "delivery", theme: "docker", lifecycle: "actual", summary: "Imágenes, BuildKit, storage, networking, Compose y runtime." },
] as const;

export function collectionForPath(pathname: string) {
  return collectionManifest.find((collection) =>
    collection.href === pathname || collection.actionHref === pathname || collection.legacyPaths?.includes(pathname),
  );
}

export function collectionNumber(id: string) {
  const index = collectionManifest.findIndex((collection) => collection.id === id);
  return index >= 0 ? String(index + 1).padStart(2, "0") : "--";
}

export function themeForPath(pathname: string) {
  return collectionForPath(pathname)?.theme ?? "library";
}

function validateCollectionManifest() {
  if (collectionManifest.length !== 34) throw new Error(`El manifiesto debe contener 34 colecciones; contiene ${collectionManifest.length}.`);
  const ids = new Set<string>();
  const routes = new Set<string>();
  for (const collection of collectionManifest) {
    if (ids.has(collection.id)) throw new Error(`ID de colección duplicado: ${collection.id}`);
    ids.add(collection.id);
    for (const path of [collection.href, collection.actionHref]) {
      if (routes.has(path)) throw new Error(`Ruta canónica duplicada: ${path}`);
      if (!path.startsWith("/")) throw new Error(`Ruta no absoluta: ${path}`);
      routes.add(path);
    }
    for (const legacyPath of collection.legacyPaths ?? []) {
      if (routes.has(legacyPath)) throw new Error(`Ruta heredada en conflicto: ${legacyPath}`);
      routes.add(legacyPath);
    }
  }
}

validateCollectionManifest();
