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
    name: "Integración",
    description: "Cliente, servidor y protocolos",
    links: [
      { href: "/apis-rest", label: "APIs REST", short: "REST", kind: "colección" },
      { href: "/apis-rest-en-accion", label: "APIs REST en acción", short: "REST+", kind: "caso integrado" },
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
    ],
  },
];

export const collectionLinks: readonly CollectionLink[] = collectionGroups.flatMap((group) => [...group.links]);
