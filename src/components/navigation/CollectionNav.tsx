"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import { collectionGroups, collectionLinks } from "@/data/collectionLinks";
import { themeForPath } from "@/data/collectionManifest";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function normalizePathname(pathname: string) {
  let normalized = pathname || "/";

  if (basePath && normalized.startsWith(basePath)) {
    normalized = normalized.slice(basePath.length) || "/";
  }

  normalized = normalized.split("?")[0]?.split("#")[0] ?? "/";

  if (normalized.length > 1) {
    normalized = normalized.replace(/\/+$/, "");
  }

  return normalized || "/";
}

type PickerContentProps = {
  children: ReactNode;
  mobile?: boolean;
  onClose?: () => void;
};

function PickerShell({ children, mobile = false, onClose }: PickerContentProps) {
  return (
    <div
      className={mobile ? "collection-picker__panel collection-picker__panel--mobile" : "collection-picker__panel"}
      id={mobile ? "mobile-collection-menu" : undefined}
      role={mobile ? "dialog" : undefined}
      aria-modal={mobile ? "true" : undefined}
      aria-label={mobile ? "Explorar colecciones" : undefined}
    >
      {mobile ? (
        <div className="collection-picker__mobile-heading">
          <div>
            <span>Dev Visualizer</span>
            <strong>Explorar colecciones</strong>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar menú de colecciones">
            ×
          </button>
        </div>
      ) : null}
      {children}
    </div>
  );
}

export function CollectionNav() {
  const pathname = usePathname();
  const normalizedPathname = normalizePathname(pathname);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeIndex = collectionLinks.findIndex((item) => normalizePathname(item.href) === normalizedPathname);
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
          `${link.label} ${link.short} ${link.kind} ${link.lifecycle} ${group.name}`.toLocaleLowerCase("es").includes(normalized),
        ),
      }))
      .filter((group) => group.links.length > 0);
  }, [query]);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setQuery("");
  }

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
    const theme = themeForPath(normalizedPathname);
    document.documentElement.dataset.collectionTheme = theme;
    document.body.dataset.collectionTheme = theme;

    return () => {
      delete document.documentElement.dataset.collectionTheme;
      delete document.body.dataset.collectionTheme;
    };
  }, [normalizedPathname]);

  useEffect(() => {
    document.body.classList.toggle("collection-menu-open", mobileMenuOpen);

    return () => {
      document.body.classList.remove("collection-menu-open");
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function closeDesktopPickerOnOutsideClick(event: MouseEvent) {
      if (detailsRef.current?.open && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.removeAttribute("open");
      }
    }

    function closeMenusOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      detailsRef.current?.removeAttribute("open");
      setMobileMenuOpen(false);
      setQuery("");
    }

    function closeMobileMenuOnHistoryChange() {
      setMobileMenuOpen(false);
      setQuery("");
    }

    function closeMobileMenuOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        setMobileMenuOpen(false);
        setQuery("");
      }
    }

    const desktopQuery = window.matchMedia("(min-width: 761px)");

    document.addEventListener("mousedown", closeDesktopPickerOnOutsideClick);
    document.addEventListener("keydown", closeMenusOnEscape);
    window.addEventListener("popstate", closeMobileMenuOnHistoryChange);
    desktopQuery.addEventListener("change", closeMobileMenuOnDesktop);

    return () => {
      document.removeEventListener("mousedown", closeDesktopPickerOnOutsideClick);
      document.removeEventListener("keydown", closeMenusOnEscape);
      window.removeEventListener("popstate", closeMobileMenuOnHistoryChange);
      desktopQuery.removeEventListener("change", closeMobileMenuOnDesktop);
    };
  }, []);

  const pickerContents = (
    <>
      <header className="collection-picker__desktop-heading">
        <div>
          <span>Dev Visualizer</span>
          <strong>Elige qué quieres estudiar</strong>
        </div>
        <div className="collection-picker__header-links">
          <Link href="/colecciones" onClick={closeMobileMenu}>Ver biblioteca completa</Link>
          <Link href="/acerca" onClick={closeMobileMenu}>Créditos y licencias</Link>
        </div>
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
                const isActive = normalizedPathname === normalizePathname(link.href);
                return (
                  <Link
                    className={isActive ? "collection-picker__link collection-picker__link--active" : "collection-picker__link"}
                    href={link.href}
                    key={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMobileMenu}
                  >
                    <span>{link.short}</span>
                    <div>
                      <strong>{link.label}</strong>
                      <small>{link.kind}{link.lifecycle !== "actual" ? ` · ${link.lifecycle}` : ""}</small>
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
    </>
  );

  return (
    <nav className="collection-nav" aria-label="Navegación de colecciones">
      <Link
        className="collection-nav__brand"
        href="/colecciones"
        aria-label="Abrir biblioteca de colecciones"
        onClick={closeMobileMenu}
      >
        <Image src={`${basePath}/brand/anchor-nav.png`} alt="" width={128} height={128} />
      </Link>

      <div className="collection-nav__current" aria-live="polite">
        <span>{normalizedPathname === "/colecciones" ? "Biblioteca" : "Estudiando ahora"}</span>
        <strong>{active?.label ?? "Todas las colecciones"}</strong>
      </div>

      <div className="collection-nav__sequence" aria-label="Colección anterior y siguiente">
        {previous ? (
          <Link
            className="collection-nav__arrow"
            href={previous.href}
            scroll
            title={`Anterior: ${previous.label}`}
            aria-label={`Anterior: ${previous.label}`}
            onClick={closeMobileMenu}
          >
            ←
          </Link>
        ) : (
          <span className="collection-nav__arrow collection-nav__arrow--disabled" aria-hidden="true">←</span>
        )}
        <b>{activeIndex >= 0 ? `${activeIndex + 1}/${collectionLinks.length}` : collectionLinks.length}</b>
        {next ? (
          <Link
            className="collection-nav__arrow"
            href={next.href}
            scroll
            title={`Siguiente: ${next.label}`}
            aria-label={`Siguiente: ${next.label}`}
            onClick={closeMobileMenu}
          >
            →
          </Link>
        ) : (
          <span className="collection-nav__arrow collection-nav__arrow--disabled" aria-hidden="true">→</span>
        )}
      </div>

      <details
        className="collection-picker collection-picker--desktop"
        ref={detailsRef}
        onToggle={(event) => {
          if (!event.currentTarget.open) setQuery("");
        }}
      >
        <summary>
          <span>Explorar colecciones</span>
          <b>{collectionLinks.length}</b>
        </summary>
        <PickerShell>{pickerContents}</PickerShell>
      </details>

      <div className="collection-picker--mobile">
        <button
          className="collection-picker__mobile-trigger"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-collection-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span>Temas</span>
          <b>{collectionLinks.length}</b>
          <em aria-hidden="true">{mobileMenuOpen ? "×" : "⌄"}</em>
        </button>
      </div>

      {mobileMenuOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="collection-mobile-menu">
              <button
                className="collection-mobile-menu__backdrop"
                type="button"
                aria-label="Cerrar menú de colecciones"
                onClick={closeMobileMenu}
              />
              <PickerShell mobile onClose={closeMobileMenu}>{pickerContents}</PickerShell>
            </div>,
            document.body,
          )
        : null}
    </nav>
  );
}
