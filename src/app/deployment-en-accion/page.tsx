import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { DistinctActionScene } from "@/components/scenes/DistinctActionScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { deploymentRuntimeCase } from "@/data/phase1Collections";

export default function DeploymentActionPage() {
  const practical = deploymentRuntimeCase;
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--deployment-practical">
        <div><span className="eyebrow">Colección {collectionNumber("deployment")} · {practical.eyebrow}</span><h1>{practical.title}</h1><p>{practical.description}</p></div>
        <div className="hero__counter"><strong>{practical.steps.length}</strong><span>etapas de rollout y recuperación</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["deployment"]}</p>
      </aside>

      <section className="practical-stage practical-stage--expanded" aria-label="Caso práctico integrado de Deployment"><DistinctActionScene id="deployment" /></section>
      <PracticalDeepDive modules={practical.steps} startAt={1} />
      <footer className="project-note">{practical.footer}</footer>
    </main>
  );
}
