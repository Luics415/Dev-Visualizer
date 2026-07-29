"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "JavaScript ES6+", short: "JS" },
  { href: "/javascript-en-accion", label: "JavaScript en acción", short: "Caso" },
  { href: "/typescript", label: "TypeScript", short: "TS" },
] as const;

export function CollectionNav() {
  const pathname = usePathname();

  return (
    <nav className="collection-nav" aria-label="Colecciones del visualizador">
      <span className="collection-nav__brand" aria-hidden="true">DV</span>
      <div className="collection-nav__links">
        {links.map(({ href, label, short }) => {
          const active = href === "/" ? pathname === href : pathname.startsWith(href);

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
