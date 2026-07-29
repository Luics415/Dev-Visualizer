"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "JavaScript ES6+", short: "JS" },
  { href: "/javascript-en-accion", label: "JavaScript en acción", short: "JS+" },
  { href: "/typescript", label: "TypeScript", short: "TS" },
  { href: "/typescript-en-accion", label: "TypeScript en acción", short: "TS+" },
  { href: "/react", label: "React", short: "React" },
  { href: "/react-en-accion", label: "React en acción", short: "R+" },
  { href: "/react-native", label: "React Native", short: "RN" },
  { href: "/react-native-en-accion", label: "React Native en acción", short: "RN+" },
  { href: "/apis-rest", label: "APIs REST", short: "REST" },
] as const;

export function CollectionNav() {
  const pathname = usePathname();

  return (
    <nav className="collection-nav" aria-label="Colecciones del visualizador">
      <span className="collection-nav__brand" aria-hidden="true">DV</span>
      <div className="collection-nav__links">
        {links.map(({ href, label, short }) => {
          const active = pathname === href;

          return (
            <Link
              className={`collection-nav__link${active ? " collection-nav__link--active" : ""}`}
              href={href}
              key={href}
              aria-current={active ? "page" : undefined}
            >
              <span className="collection-nav__long">{label}</span>
              <span className="collection-nav__short">{short}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
