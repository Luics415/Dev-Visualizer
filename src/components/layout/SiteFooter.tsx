import Link from "next/link";
import { projectCredits } from "@/data/projectCredits";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <strong>{projectCredits.project}</strong>
        <span>Proyecto original e independiente con fines educativos.</span>
        <span className="site-footer__copyright">
          © 2026 {projectCredits.owner} · Licencia MIT y CC BY-NC-SA 4.0.
        </span>
      </div>
      <div className="site-footer__links">
        <nav aria-label="Navegación del sitio" className="site-footer__nav">
          <Link href="/colecciones">Colecciones</Link>
          <Link href="/libreria">Librería profesional</Link>
          <Link href="/acerca">Créditos y autoría</Link>
        </nav>
        <nav aria-label="Información legal y privacidad" className="site-footer__nav site-footer__nav--legal">
          <Link href="/privacidad">Aviso de Privacidad</Link>
          <Link href="/terminos">Términos y Condiciones</Link>
          <Link href="/cookies">Política de Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
