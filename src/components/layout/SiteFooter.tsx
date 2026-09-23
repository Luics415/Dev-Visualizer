import Link from "next/link";
import { projectCredits } from "@/data/projectCredits";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{projectCredits.project}</strong>
        <span>Proyecto original e independiente con fines educativos.</span>
      </div>
      <nav aria-label="Información legal y créditos">
        <Link href="/acerca">Créditos y licencias</Link>
        <Link href="/colecciones">Colecciones</Link>
        <Link href="/libreria">Librería profesional</Link>
      </nav>
    </footer>
  );
}
