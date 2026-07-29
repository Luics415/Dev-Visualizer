"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { collectionGroups, collectionLinks } from "@/data/collectionLinks";


function themeFromPath(pathname: string) {
  if (pathname === "/" || pathname.startsWith("/javascript")) return "javascript";
  if (pathname.startsWith("/typescript")) return "typescript";
  if (pathname.startsWith("/react-native")) return "react-native";
  if (pathname.startsWith("/react")) return "react";
  if (pathname.startsWith("/gestion-estado")) return "state-management";
  if (pathname.startsWith("/apis-rest")) return "rest";
  if (pathname.startsWith("/backend")) return "backend";
  if (pathname.startsWith("/bases-datos")) return "databases";
  if (pathname.startsWith("/git-github")) return "git";
  if (pathname.startsWith("/html-css")) return "html-css";
  if (pathname.startsWith("/linux")) return "linux";
  if (pathname.startsWith("/aws")) return "aws";
  if (pathname.startsWith("/deployment")) return "deployment";
  if (pathname.startsWith("/nginx")) return "nginx";
  if (pathname.startsWith("/docker")) return "docker";
  if (pathname.startsWith("/firebase")) return "firebase";
  if (pathname.startsWith("/debugging")) return "debugging";
  return "library";
}
export function CollectionNav() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [query, setQuery] = useState("");
  const activeIndex = collectionLinks.findIndex((item) => item.href === pathname);
  const active = activeIndex >= 0 ? collectionLinks[activeIndex] : null;
  const previous = activeIndex > 0 ? collectionLinks[activeIndex - 1] : null;
  const next = activeIndex >= 0 && activeIndex < collectionLinks.length - 1 ? collectionLinks[activeIndex + 1] : null;

  const visibleGroups = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    if (!normalized) return collectionGroups;

    return collectionGroups
      .map((group) => ({
        ...group,
        links: group.links.filter((link) =>
          `${link.label} ${link.short} ${link.kind} ${group.name}`.toLocaleLowerCase("es").includes(normalized),
        ),
      }))
      .filter((group) => group.links.length > 0);
  }, [query]);

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
    setQuery("");

    const theme = themeFromPath(pathname);
    document.documentElement.dataset.collectionTheme = theme;
    document.body.dataset.collectionTheme = theme;

    return () => {
      delete document.documentElement.dataset.collectionTheme;
      delete document.body.dataset.collectionTheme;
    };
  }, [pathname]);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (detailsRef.current?.open && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.removeAttribute("open");
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") detailsRef.current?.removeAttribute("open");
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <nav className="collection-nav" aria-label="Navegación de colecciones">
      <Link className="collection-nav__brand" href="/colecciones" aria-label="Abrir biblioteca de colecciones">
        DV
      </Link>

      <div className="collection-nav__current" aria-live="polite">
        <span>{pathname === "/colecciones" ? "Biblioteca" : "Estudiando ahora"}</span>
        <strong>{active?.label ?? "Todas las colecciones"}</strong>
      </div>

      <div className="collection-nav__sequence" aria-label="Colección anterior y siguiente">
        {previous ? <Link href={previous.href} title={`Anterior: ${previous.label}`} aria-label={`Anterior: ${previous.label}`}>←</Link> : <span aria-hidden="true">←</span>}
        <b>{activeIndex >= 0 ? `${activeIndex + 1}/${collectionLinks.length}` : collectionLinks.length}</b>
        {next ? <Link href={next.href} title={`Siguiente: ${next.label}`} aria-label={`Siguiente: ${next.label}`}>→</Link> : <span aria-hidden="true">→</span>}
      </div>

      <details className="collection-picker" ref={detailsRef}>
        <summary>
          <span>Explorar colecciones</span>
          <b>{collectionLinks.length}</b>
        </summary>

        <div className="collection-picker__panel">
          <header>
            <div>
              <span>Dev Visualizer</span>
              <strong>Elige qué quieres estudiar</strong>
            </div>
            <Link href="/colecciones">Ver biblioteca completa</Link>
          </header>

          <label className="collection-picker__search">
            <span>Buscar colección</span>
            <input
              type="search"
              value={query}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
              placeholder="JavaScript, React Native, Git..."
            />
          </label>

          <div className="collection-picker__groups">
            {visibleGroups.map((group) => (
              <section key={group.name}>
                <header>
                  <strong>{group.name}</strong>
                  <span>{group.description}</span>
                </header>
                <div>
                  {group.links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        className={isActive ? "collection-picker__link collection-picker__link--active" : "collection-picker__link"}
                        href={link.href}
                        key={link.href}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{link.short}</span>
                        <div>
                          <strong>{link.label}</strong>
                          <small>{link.kind}</small>
                        </div>
                        <em>↗</em>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {visibleGroups.length === 0 ? (
            <p className="collection-picker__empty">No encontré una colección con ese nombre.</p>
          ) : null}
        </div>
      </details>
    </nav>
  );
}
