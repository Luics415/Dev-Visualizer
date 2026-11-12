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
          trackButtonClick(
            "btn_hero_explore",
            `Explorar ${totalCollections} Colecciones`,
            "home_hero"
          );
        }}
      >
        <span>Explorar Colecciones</span>
        <span aria-hidden="true">→</span>
      </Link>

      <Link
        href="/docker-en-accion"
        className="btn-cyber-secondary"
        onClick={() => {
          trackButtonClick(
            "btn_hero_production_cases",
            "Casos en Acción",
            "home_hero"
          );
        }}
      >
        <span className="btn-cyber-icon" aria-hidden="true">&gt;_</span>
        <span>Casos «En Acción»</span>
      </Link>

      <Link
        href="/libreria"
        className="btn-cyber-outline"
        onClick={() => {
          trackButtonClick(
            "btn_hero_library",
            "Librería Profesional",
            "home_hero"
          );
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <span>Librería Profesional</span>
      </Link>

      <a
        href="#trofeos-areas"
        className="btn-cyber-trophies"
        onClick={() => {
          trackButtonClick(
            "btn_hero_trophies",
            "Trofeos por Área",
            "home_hero"
          );
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
          <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
        <span>Trofeos por Área</span>
      </a>
    </div>
  );
}
