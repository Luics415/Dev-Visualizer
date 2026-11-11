import { Skeleton } from "@/components/ui/Skeleton";
import styles from "./library.module.css";

/**
 * Esqueleto de carga para la Librería Profesional (Next.js 16 App Router).
 * Replica src/app/libreria/page.tsx:
 * - Nav (.collection-nav)
 * - Hero de estadísticas (styles.hero + styles.heroStats)
 * - Controles de búsqueda y filtros (styles.controls)
 * - Cuadrícula de 6 temas (styles.topicGrid)
 */
export default function LibreriaLoading() {
  return (
    <main className="page-shell" role="status" aria-busy="true" aria-label="Cargando librería profesional...">
      <nav className="collection-nav" aria-hidden="true" style={{ opacity: 0.85 }}>
        <Skeleton variant="rectangular" width={34} height={34} style={{ borderRadius: 10 }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Skeleton variant="text" width={140} height={20} />
          <Skeleton variant="rectangular" width={80} height={26} style={{ borderRadius: 8 }} />
        </div>
        <Skeleton variant="rectangular" width={110} height={32} style={{ borderRadius: 10 }} />
      </nav>

      <header className={styles.hero} style={{ minHeight: 280 }}>
        <div>
          <Skeleton variant="text" width={260} height={16} style={{ marginBottom: 12 }} />
          <Skeleton variant="text" width={420} height={52} style={{ marginBottom: 16 }} />
          <Skeleton variant="text" width="95%" height={20} style={{ marginBottom: 8 }} />
          <Skeleton variant="text" width="80%" height={20} />
        </div>
        <div className={styles.heroStats} aria-hidden="true">
          <div><Skeleton variant="text" width={50} height={34} /><Skeleton variant="text" width={100} height={14} style={{ marginTop: 6 }} /></div>
          <div><Skeleton variant="text" width={50} height={34} /><Skeleton variant="text" width={100} height={14} style={{ marginTop: 6 }} /></div>
          <div><Skeleton variant="text" width={50} height={34} /><Skeleton variant="text" width={100} height={14} style={{ marginTop: 6 }} /></div>
          <div><Skeleton variant="text" width={50} height={34} /><Skeleton variant="text" width={100} height={14} style={{ marginTop: 6 }} /></div>
        </div>
      </header>

      <section className={styles.controls} aria-hidden="true">
        <div className={styles.searchHeader}>
          <Skeleton variant="rectangular" width="100%" height={44} style={{ borderRadius: 10 }} />
        </div>
        <div className={styles.filtersBar}>
          <Skeleton variant="rectangular" height={42} style={{ borderRadius: 10 }} />
          <Skeleton variant="rectangular" height={42} style={{ borderRadius: 10 }} />
          <Skeleton variant="rectangular" height={42} style={{ borderRadius: 10 }} />
          <Skeleton variant="rectangular" height={42} style={{ borderRadius: 10 }} />
          <Skeleton variant="rectangular" height={42} style={{ borderRadius: 10 }} />
        </div>
      </section>

      <section className={styles.topicGrid} aria-label="Cargando temas de la librería">
        {Array.from({ length: 6 }).map((_, index) => (
          <article className={`${styles.topicCard} skeleton-card`} key={`skeleton-topic-${index}`} style={{ minHeight: 310 }}>
            <div className={styles.topicCardTop}>
              <Skeleton variant="text" width={90} height={14} />
              <Skeleton variant="rectangular" width={42} height={34} style={{ borderRadius: 9 }} />
            </div>
            <Skeleton variant="text" width="75%" height={26} style={{ margin: "24px 0 10px" }} />
            <Skeleton variant="text" width="100%" height={16} style={{ marginBottom: 6 }} />
            <Skeleton variant="text" width="85%" height={16} />
            <dl className={styles.topicMetrics}>
              <div><Skeleton variant="text" width={40} height={12} /><Skeleton variant="text" width={30} height={20} style={{ marginTop: 4 }} /></div>
              <div><Skeleton variant="text" width={60} height={12} /><Skeleton variant="text" width={30} height={20} style={{ marginTop: 4 }} /></div>
            </dl>
            <Skeleton variant="rectangular" width="100%" height={42} style={{ borderRadius: 11, marginTop: "auto" }} />
          </article>
        ))}
      </section>
    </main>
  );
}
