import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { DebuggingPracticalScene } from "@/components/scenes/debugging/DebuggingPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { debuggingDeepDive } from "@/data/practicalDeepDives";

export default function DebuggingActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--debugging-practical">
        <div>
          <span className="eyebrow eyebrow--debugging">Colección {collectionNumber("debugging")} · Caso integrado ampliado</span>
          <h1>Debugging en acción</h1>
          <p>Caitlyn investiga por qué una sola pulsación de Jinx crea dos órdenes para reparar Fishbones. El caso acota la regresión, reproduce el lifecycle, conecta UI, Network, backend y base de datos con un request ID, pausa en el listener, prueba una hipótesis y termina con cleanup, idempotencia, prueba de regresión y canary.</p>
        </div>
        <div className="hero__counter hero__counter--debugging"><strong>14</strong><span>etapas de una investigación causal</span></div>
      </header>

      <section className="practical-stage practical-stage--debugging" aria-label="Caso práctico integrado de debugging">
        <DebuggingPracticalScene />
      </section>

      <PracticalDeepDive modules={debuggingDeepDive} />
      <footer className="project-note">El caso conserva el estilo de un expediente: cada dato debe apoyar o refutar una hipótesis. El fix del cliente elimina la causa conocida y la idempotencia del servidor evita que otras rutas de duplicación produzcan el mismo daño.</footer>
    </main>
  );
}
