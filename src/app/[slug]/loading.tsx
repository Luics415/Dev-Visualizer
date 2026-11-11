import { Skeleton } from "@/components/ui/Skeleton";

/**
 * Esqueleto de carga para Conceptos Pedagógicos y Escenas Interactivas (Next.js 16 App Router).
 * Replica src/app/[slug]/page.tsx (StudyAtlasCollection / ExpandedActionPage):
 * - Nav (.collection-nav)
 * - Hero de colección (.hero)
 * - Acciones y primer (.collection-actions-bar, .collection-primer)
 * - Cuadrícula de 4 conceptos con simulador animado (.concept-grid > .concept-card)
 */
export default function SlugLoading() {
  return (
    <main className="page-shell" role="status" aria-busy="true" aria-label="Cargando concepto visual...">
      <nav className="collection-nav" aria-hidden="true" style={{ opacity: 0.85 }}>
        <Skeleton variant="rectangular" width={34} height={34} style={{ borderRadius: 10 }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Skeleton variant="text" width={140} height={20} />
          <Skeleton variant="rectangular" width={80} height={26} style={{ borderRadius: 8 }} />
        </div>
        <Skeleton variant="rectangular" width={110} height={32} style={{ borderRadius: 10 }} />
      </nav>

      <header className="hero" style={{ minHeight: 220, marginBottom: 36 }}>
        <div>
          <Skeleton variant="text" width={220} height={16} style={{ marginBottom: 10 }} />
          <Skeleton variant="text" width={440} height={48} style={{ marginBottom: 14 }} />
          <Skeleton variant="text" width="92%" height={20} style={{ marginBottom: 6 }} />
          <Skeleton variant="text" width="75%" height={20} />
        </div>
        <div className="hero__counter" style={{ minWidth: 140 }}>
          <Skeleton variant="text" width={50} height={34} />
          <Skeleton variant="text" width={120} height={14} style={{ marginTop: 4 }} />
        </div>
      </header>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, margin: "24px 0" }}>
        <Skeleton variant="rectangular" width={240} height={38} style={{ borderRadius: 10 }} />
        <Skeleton variant="rectangular" width={180} height={38} style={{ borderRadius: 10 }} />
      </div>

      <div style={{ padding: 22, borderRadius: 18, border: "1px solid var(--line-soft, rgba(121,145,180,0.2))", background: "rgba(10,14,24,0.5)", marginBottom: 32 }}>
        <Skeleton variant="text" width={160} height={16} style={{ marginBottom: 10 }} />
        <Skeleton variant="text" width="100%" height={16} style={{ marginBottom: 6 }} />
        <Skeleton variant="text" width="80%" height={16} />
      </div>

      <section className="concept-grid concept-grid--atlas" aria-label="Cargando conceptos interactivos">
        {Array.from({ length: 4 }).map((_, index) => (
          <article className="concept-card skeleton-card" key={`skeleton-concept-${index}`} style={{ minHeight: 360, padding: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <Skeleton variant="rectangular" width={32} height={32} style={{ borderRadius: 8 }} />
              <Skeleton variant="text" width={90} height={14} />
            </div>
            <Skeleton variant="text" width="75%" height={24} style={{ marginBottom: 14 }} />

            <div style={{ width: "100%", height: 180, borderRadius: 12, background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", marginBottom: 14, overflow: "hidden" }}>
              <Skeleton variant="rectangular" width="100%" height="100%" />
            </div>

            <Skeleton variant="text" width="100%" height={16} style={{ marginBottom: 6 }} />
            <Skeleton variant="text" width="85%" height={16} />
          </article>
        ))}
      </section>
    </main>
  );
}
