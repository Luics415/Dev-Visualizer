import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";

type BridgeDestination = {
  href: string;
  label: string;
  description: string;
  code: string;
};

type LegacyRouteBridgeProps = {
  eyebrow: string;
  title: string;
  description: string;
  destinations: readonly BridgeDestination[];
};

export function LegacyRouteBridge({ eyebrow, title, description, destinations }: LegacyRouteBridgeProps) {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero bridge-hero">
        <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
        <div className="hero__counter"><strong>{destinations.length}</strong><span>{destinations.length === 1 ? "ruta canónica" : "rutas especializadas"}</span></div>
      </header>
      <section className="bridge-grid" aria-label="Nuevos destinos de estudio">
        {destinations.map((destination) => (
          <article key={destination.href}>
            <span>{destination.code}</span>
            <h2>{destination.label}</h2>
            <p>{destination.description}</p>
            <Link href={destination.href}>Abrir ruta <b>→</b></Link>
          </article>
        ))}
      </section>
      <footer className="project-note">Este puente conserva enlaces anteriores sin duplicar contenido. Guarda la nueva URL cuando abras la ruta elegida.</footer>
    </main>
  );
}
