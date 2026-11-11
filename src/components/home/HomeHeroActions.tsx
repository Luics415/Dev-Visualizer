/**
 * Dev Visualizer — Acciones Principales del Hero (Feature F8)
 * src/components/home/HomeHeroActions.tsx
 *
 * Componente interactivo de cliente para registrar clics de telemetría
 * en los tres enlaces de acción principales del Hero sin convertir
 * src/app/page.tsx en Client Component (preservando metadata de Next.js).
 */

"use client";

import Link from "next/link";
import { trackButtonClick } from "@/lib/telemetry";

interface HomeHeroActionsProps {
  totalCollections: number;
}

export function HomeHeroActions({ totalCollections }: HomeHeroActionsProps) {
  return (
    <div className="home-hero__actions">
      <Link
        href="/colecciones"
        className="btn-cyber-primary"
        onClick={() => {
          trackButtonClick("btn_hero_explore", `Explorar las ${totalCollections} Colecciones`, "home_hero");
        }}
      >
        <span>Explorar las {totalCollections} Colecciones</span>
        <span aria-hidden="true">→</span>
      </Link>

      <Link
        href="/docker-en-accion"
        className="btn-cyber-secondary"
        onClick={() => {
          trackButtonClick("btn_hero_production_cases", "Casos de Producción", "home_hero");
        }}
      >
        <span className="btn-cyber-icon" aria-hidden="true">&gt;_</span>
        <span>Casos de Producción</span>
      </Link>

      <Link
        href="/libreria"
        className="btn-cyber-outline"
        onClick={() => {
          trackButtonClick("btn_hero_library", "Librería Profesional", "home_hero");
        }}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <span>Librería Profesional</span>
      </Link>
    </div>
  );
}
