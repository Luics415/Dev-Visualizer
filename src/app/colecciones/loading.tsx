import { Skeleton } from "@/components/ui/Skeleton";

/**
 * Esqueleto de carga para el Catálogo de Colecciones (Next.js 16 App Router).
 * Replica src/app/colecciones/page.tsx:
 * - Nav (.collection-nav)
 * - Hero con velo y contador (.hero .library-hero)
 * - Controles de filtrado (.library-controls)
 * - Cuadrícula de 6 tarjetas de colecciones (.library-grid)
 */
export default function ColeccionesLoading() {
  return (
    <main className="page-shell" role="status" aria-busy="true" aria-label="Cargando catálogo de colecciones...">
      <nav className="collection-nav" aria-hidden="true" style={{ opacity: 0.85 }}>
        <Skeleton variant="rectangular" width={34} height={34} style={{ borderRadius: 10 }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Skeleton variant="text" width={140} height={20} />
          <Skeleton variant="rectangular" width={80} height={26} style={{ borderRadius: 8 }} />
        </div>
        <Skeleton variant="rectangular" width={110} height={32} style={{ borderRadius: 10 }} />
      </nav>

      <header className="hero library-hero" style={{ minHeight: 260 }}>
        <div className="library-hero__veil" aria-hidden="true" />
        <div className="library-hero__content">
          <Skeleton variant="text" width={200} height={16} style={{ marginBottom: 10 }} />
          <Skeleton variant="text" width={380} height={46} style={{ marginBottom: 14 }} />
          <Skeleton variant="text" width="90%" height={20} style={{ marginBottom: 6 }} />
          <Skeleton variant="text" width="70%" height={20} style={{ marginBottom: 20 }} />
          <div className="hero__counter" style={{ width: "fit-content" }}>
            <Skeleton variant="text" width={80} height={32} />
            <Skeleton variant="text" width={180} height={16} />
          </div>
        </div>
      </header>

      <section className="library-controls" aria-hidden="true" style={{ marginBottom: 28 }}>
        <Skeleton variant="rectangular" width="100%" height={44} style={{ borderRadius: 10 }} />
      </section>

      <section className="library-grid" aria-label="Cargando colecciones disponibles">
        {Array.from({ length: 6 }).map((_, index) => (
          <article className="library-card skeleton-card" key={`skeleton-collection-${index}`} style={{ minHeight: 280, padding: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              <Skeleton variant="text" width={100} height={16} />
              <Skeleton variant="rectangular" width={40} height={24} style={{ borderRadius: 6 }} />
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              <Skeleton variant="text" width={110} height={14} />
              <Skeleton variant="text" width={60} height={14} />
            </div>
            <Skeleton variant="text" width="80%" height={24} style={{ marginBottom: 12 }} />
            <Skeleton variant="text" width="100%" height={16} style={{ marginBottom: 6 }} />
            <Skeleton variant="text" width="90%" height={16} style={{ marginBottom: 18 }} />
            <div style={{ display: "flex", gap: 12, marginTop: "auto", marginBottom: 16 }}>
              <Skeleton variant="text" width={70} height={14} />
              <Skeleton variant="text" width={70} height={14} />
              <Skeleton variant="text" width={70} height={14} />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Skeleton variant="rectangular" width="50%" height={38} style={{ borderRadius: 8 }} />
              <Skeleton variant="rectangular" width="50%" height={38} style={{ borderRadius: 8 }} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
