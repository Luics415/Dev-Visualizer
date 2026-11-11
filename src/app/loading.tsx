import { Skeleton } from "@/components/ui/Skeleton";

/**
 * Esqueleto de carga raíz para Dev Visualizer (Next.js 16 App Router).
 * Replica el layout de src/app/page.tsx:
 * - Barra de navegación sticky (.collection-nav)
 * - Hero split (.home-hero .home-hero--split)
 * - Menú de secciones y panel de búsqueda
 */
export default function RootLoading() {
  return (
    <main className="page-shell" role="status" aria-busy="true" aria-label="Cargando atlas interactivo...">
      <nav className="collection-nav" aria-hidden="true" style={{ opacity: 0.85 }}>
        <Skeleton variant="rectangular" width={34} height={34} style={{ borderRadius: 10 }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Skeleton variant="text" width={140} height={20} />
          <Skeleton variant="rectangular" width={80} height={26} style={{ borderRadius: 8 }} />
        </div>
        <Skeleton variant="rectangular" width={110} height={32} style={{ borderRadius: 10 }} />
      </nav>

      <header className="home-hero home-hero--split" style={{ minHeight: 460 }}>
        <div className="home-hero__content-col">
          <Skeleton variant="rectangular" width={160} height={24} style={{ borderRadius: 999, marginBottom: 16 }} />
          <Skeleton variant="text" width="92%" height={44} style={{ marginBottom: 8 }} />
          <Skeleton variant="text" width="75%" height={44} style={{ marginBottom: 20 }} />

          <Skeleton variant="text" width="100%" height={20} style={{ marginBottom: 6 }} />
          <Skeleton variant="text" width="85%" height={20} style={{ marginBottom: 28 }} />

          <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
            <Skeleton variant="rectangular" width={180} height={46} style={{ borderRadius: 12 }} />
            <Skeleton variant="rectangular" width={150} height={46} style={{ borderRadius: 12 }} />
          </div>

          <Skeleton variant="text" width="60%" height={16} />
        </div>

        <div className="home-hero__visual-col">
          <Skeleton variant="card" width="100%" height={380} style={{ borderRadius: 20 }} />
        </div>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, margin: "40px 0" }}>
        <Skeleton variant="card" height={130} />
        <Skeleton variant="card" height={130} />
        <Skeleton variant="card" height={130} />
      </section>

      <section style={{ padding: 28, borderRadius: 24, border: "1px solid var(--line, rgba(128,151,187,.2))", background: "rgba(10,14,24,0.6)" }}>
        <Skeleton variant="text" width={140} height={16} style={{ marginBottom: 12 }} />
        <Skeleton variant="text" width="50%" height={28} style={{ marginBottom: 16 }} />
        <Skeleton variant="rectangular" width="100%" height={52} style={{ borderRadius: 14 }} />
      </section>
    </main>
  );
}
