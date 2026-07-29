export type CollectionLink = {
  href: string;
  label: string;
  short: string;
  kind: "colección" | "caso integrado";
};

export type CollectionGroup = {
  name: string;
  description: string;
  links: readonly CollectionLink[];
};

export const collectionGroups: readonly CollectionGroup[] = [
  {
    name: "Lenguajes",
    description: "Fundamentos, tipos y ejecución",
    links: [
      { href: "/", label: "JavaScript ES6+", short: "JS", kind: "colección" },
      { href: "/javascript-en-accion", label: "JavaScript en acción", short: "JS+", kind: "caso integrado" },
      { href: "/typescript", label: "TypeScript", short: "TS", kind: "colección" },
      { href: "/typescript-en-accion", label: "TypeScript en acción", short: "TS+", kind: "caso integrado" },
    ],
  },
  {
    name: "Interfaces",
    description: "Web y aplicaciones móviles",
    links: [
      { href: "/react", label: "React", short: "React", kind: "colección" },
      { href: "/react-en-accion", label: "React en acción", short: "R+", kind: "caso integrado" },
      { href: "/react-native", label: "React Native", short: "RN", kind: "colección" },
      { href: "/react-native-en-accion", label: "React Native en acción", short: "RN+", kind: "caso integrado" },
    ],
  },
  {
    name: "Estado de aplicación",
    description: "Propiedad, stores, caché y sincronización",
    links: [
      { href: "/gestion-estado", label: "Gestión de estado", short: "State", kind: "colección" },
      { href: "/gestion-estado-en-accion", label: "Gestión de estado en acción", short: "State+", kind: "caso integrado" },
    ],
  },
  {
    name: "Integración y servidor",
    description: "Contratos HTTP y lógica de backend",
    links: [
      { href: "/apis-rest", label: "APIs REST", short: "REST", kind: "colección" },
      { href: "/apis-rest-en-accion", label: "APIs REST en acción", short: "REST+", kind: "caso integrado" },
      { href: "/backend", label: "Backend", short: "Back", kind: "colección" },
      { href: "/backend-en-accion", label: "Backend en acción", short: "Back+", kind: "caso integrado" },
      { href: "/firebase", label: "Firebase", short: "Firebase", kind: "colección" },
      { href: "/firebase-en-accion", label: "Firebase en acción", short: "Firebase+", kind: "caso integrado" },
    ],
  },
  {
    name: "Datos",
    description: "Modelado, consultas y operación",
    links: [
      { href: "/bases-datos", label: "Bases de datos", short: "DB", kind: "colección" },
      { href: "/bases-datos-en-accion", label: "Bases de datos en acción", short: "DB+", kind: "caso integrado" },
    ],
  },
  {
    name: "Infraestructura y entrega",
    description: "Hosts, nube y releases operables",
    links: [
      { href: "/linux", label: "Linux", short: "Linux", kind: "colección" },
      { href: "/linux-en-accion", label: "Linux en acción", short: "Linux+", kind: "caso integrado" },
      { href: "/aws", label: "AWS", short: "AWS", kind: "colección" },
      { href: "/aws-en-accion", label: "AWS en acción", short: "AWS+", kind: "caso integrado" },
      { href: "/deployment", label: "Deployment", short: "Deploy", kind: "colección" },
      { href: "/deployment-en-accion", label: "Deployment en acción", short: "Deploy+", kind: "caso integrado" },
      { href: "/nginx", label: "NGINX", short: "NGINX", kind: "colección" },
      { href: "/nginx-en-accion", label: "NGINX en acción", short: "NGINX+", kind: "caso integrado" },
      { href: "/docker", label: "Docker", short: "Docker", kind: "colección" },
      { href: "/docker-en-accion", label: "Docker en acción", short: "Docker+", kind: "caso integrado" },
    ],
  },
  {
    name: "Herramientas y web",
    description: "Flujo de trabajo y plataforma",
    links: [
      { href: "/git-github", label: "Git y GitHub", short: "Git", kind: "colección" },
      { href: "/git-github-en-accion", label: "Git y GitHub en acción", short: "Git+", kind: "caso integrado" },
      { href: "/html-css", label: "HTML y CSS", short: "HTML", kind: "colección" },
      { href: "/html-css-en-accion", label: "HTML y CSS en acción", short: "HTML+", kind: "caso integrado" },
      { href: "/debugging", label: "Debugging", short: "Debug", kind: "colección" },
      { href: "/debugging-en-accion", label: "Debugging en acción", short: "Debug+", kind: "caso integrado" },
    ],
  },
];

export const collectionLinks: readonly CollectionLink[] = collectionGroups.flatMap((group) => [...group.links]);
