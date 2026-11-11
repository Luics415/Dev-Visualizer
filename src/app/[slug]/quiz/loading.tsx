import { Skeleton } from "@/components/ui/Skeleton";

/**
 * Esqueleto de carga para la Evaluación Didáctica y Quizzes (Next.js 16 App Router).
 * Replica src/app/[slug]/quiz/page.tsx:
 * - Nav (.collection-nav)
 * - Hero de evaluación técnica (.hero)
 * - Tarjeta del Quiz (.quiz-card) con barra de metadatos, barra de progreso,
 *   enunciado, 4 opciones de respuesta y botón de avance.
 */
export default function QuizLoading() {
  return (
    <main className="page-shell" role="status" aria-busy="true" aria-label="Cargando evaluación interactiva...">
      <nav className="collection-nav" aria-hidden="true" style={{ opacity: 0.85 }}>
        <Skeleton variant="rectangular" width={34} height={34} style={{ borderRadius: 10 }} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Skeleton variant="text" width={140} height={20} />
          <Skeleton variant="rectangular" width={80} height={26} style={{ borderRadius: 8 }} />
        </div>
        <Skeleton variant="rectangular" width={110} height={32} style={{ borderRadius: 10 }} />
      </nav>

      <header className="hero" style={{ minHeight: 200, marginBottom: 32 }}>
        <div>
          <Skeleton variant="text" width={240} height={16} style={{ marginBottom: 10 }} />
          <Skeleton variant="text" width={420} height={46} style={{ marginBottom: 14 }} />
          <Skeleton variant="text" width="90%" height={18} style={{ marginBottom: 6 }} />
          <Skeleton variant="text" width="70%" height={18} />
        </div>
        <div className="hero__counter" style={{ minWidth: 140 }}>
          <Skeleton variant="text" width={45} height={34} />
          <Skeleton variant="text" width={130} height={14} style={{ marginTop: 4 }} />
        </div>
      </header>

      <section className="quiz-section-wrapper" aria-label="Cargando preguntas del cuestionario">
        <div className="quiz-card skeleton-card" style={{ padding: 28, minHeight: 460 }}>
          <div className="quiz-header" style={{ marginBottom: 24 }}>
            <div className="quiz-header__meta" style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <Skeleton variant="text" width={140} height={18} />
              <div style={{ display: "flex", gap: 8 }}>
                <Skeleton variant="rectangular" width={80} height={22} style={{ borderRadius: 6 }} />
                <Skeleton variant="rectangular" width={70} height={22} style={{ borderRadius: 6 }} />
              </div>
            </div>
            <div className="quiz-progress-bar" style={{ height: 6, borderRadius: 999, overflow: "hidden" }}>
              <Skeleton variant="rectangular" width="35%" height="100%" />
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <Skeleton variant="text" width="85%" height={26} style={{ marginBottom: 8 }} />
            <Skeleton variant="text" width="60%" height={26} />
          </div>

          <div className="quiz-options-grid" style={{ display: "grid", gap: 12, marginBottom: 28 }}>
            {["A", "B", "C", "D"].map((letter) => (
              <div
                key={`skeleton-opt-${letter}`}
                className="quiz-option"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  borderRadius: 12,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <Skeleton variant="rectangular" width={28} height={28} style={{ borderRadius: 6 }} />
                <Skeleton variant="text" width={70} height={18} />
              </div>
            ))}
          </div>

          <footer className="quiz-footer" style={{ display: "flex", justifyContent: "flex-end" }}>
            <Skeleton variant="rectangular" width={200} height={44} style={{ borderRadius: 12 }} />
          </footer>
        </div>
      </section>
    </main>
  );
}
