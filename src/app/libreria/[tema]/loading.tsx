import { Skeleton } from "@/components/ui/Skeleton";
import styles from "../library.module.css";

/**
 * Esqueleto de carga para el Detalle de Tema de la Librería Profesional (Next.js 16 App Router).
 * Replica src/app/libreria/[tema]/page.tsx:
 * - Nav (.collection-nav)
 * - Hero temático (styles.topicHero)
 * - Aviso de preservación (styles.preservationNotice)
 * - Cuadrícula de recursos oficiales (styles.resourceGrid)
 */
export default function LibreriaTemaLoading() {
  return (
    <main className="page-shell" role="status" aria-busy="true" aria-label="Cargando recursos del tema...">
      <nav className="collection-nav" aria-hidden="true" style={{ opacity: 0.85 }}>
        <Skeleton variant="rectangular" width={34} height={34} style={{ borderRadius: 10 }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Skeleton variant="text" width={140} height={20} />
          <Skeleton variant="rectangular" width={80} height={26} style={{ borderRadius: 8 }} />
        </div>
        <Skeleton variant="rectangular" width={110} height={32} style={{ borderRadius: 10 }} />
      </nav>

      <header className={styles.topicHero} style={{ minHeight: 250 }}>
        <div>
          <Skeleton variant="text" width={220} height={16} style={{ marginBottom: 12 }} />
          <Skeleton variant="text" width={360} height={48} style={{ marginBottom: 14 }} />
          <Skeleton variant="text" width="90%" height={20} style={{ marginBottom: 20 }} />
          <div style={{ display: "flex", gap: 12 }}>
            <Skeleton variant="rectangular" width={180} height={38} style={{ borderRadius: 10 }} />
            <Skeleton variant="rectangular" width={160} height={38} style={{ borderRadius: 10 }} />
          </div>
        </div>
        <div className={styles.topicCounter} style={{ minWidth: 160 }}>
          <Skeleton variant="text" width={60} height={36} />
          <Skeleton variant="text" width={120} height={16} style={{ margin: "4px 0" }} />
          <Skeleton variant="text" width={140} height={12} />
        </div>
      </header>

      <aside className={styles.preservationNotice} style={{ margin: "24px 0" }}>
        <Skeleton variant="text" width={180} height={18} style={{ marginBottom: 8 }} />
        <Skeleton variant="text" width="100%" height={16} style={{ marginBottom: 4 }} />
        <Skeleton variant="text" width="85%" height={16} />
      </aside>

      <section className={styles.resourceSection}>
        <header style={{ marginBottom: 20 }}>
          <Skeleton variant="text" width={100} height={14} style={{ marginBottom: 6 }} />
          <Skeleton variant="text" width={300} height={28} style={{ marginBottom: 8 }} />
          <Skeleton variant="text" width={400} height={16} />
        </header>
        <div className={styles.resourceGrid}>
          {Array.from({ length: 3 }).map((_, index) => (
            <article className={`${styles.resourceCard} skeleton-card`} key={`skeleton-res-${index}`} style={{ minHeight: 260, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <Skeleton variant="rectangular" width={90} height={22} style={{ borderRadius: 6 }} />
                <Skeleton variant="rectangular" width={80} height={22} style={{ borderRadius: 6 }} />
              </div>
              <Skeleton variant="text" width="80%" height={22} style={{ marginBottom: 10 }} />
              <Skeleton variant="text" width="60%" height={14} style={{ marginBottom: 14 }} />
              <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                <Skeleton variant="rectangular" width={46} height={20} style={{ borderRadius: 4 }} />
                <Skeleton variant="rectangular" width={46} height={20} style={{ borderRadius: 4 }} />
              </div>
              <Skeleton variant="rectangular" width="100%" height={38} style={{ borderRadius: 8, marginTop: "auto" }} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
