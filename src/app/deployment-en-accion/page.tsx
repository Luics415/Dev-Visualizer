import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { DeploymentPracticalScene } from "@/components/scenes/deployment/DeploymentPracticalScene";
import { deploymentDeepDive } from "@/data/practicalDeepDives";

export default function DeploymentActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--deployment-practical">
        <div>
          <span className="eyebrow eyebrow--deployment">Colección 13 · Caso integrado ampliado</span>
          <h1>Deployment en acción</h1>
          <p>Ekko prepara la versión 2.4.0 del mapa de anomalías temporales. El commit pasa por pruebas, imagen firmada, OIDC, migración expand-contract y un canary 5→25→100%; cuando la latencia sube, el rollout se detiene y el tráfico vuelve a la versión estable sin perder datos.</p>
        </div>
        <div className="hero__counter hero__counter--deployment"><strong>14</strong><span>etapas de entrega progresiva</span></div>
      </header>

      <section className="practical-stage practical-stage--deployment" aria-label="Caso práctico integrado de deployment">
        <DeploymentPracticalScene />
      </section>

      <PracticalDeepDive modules={deploymentDeepDive} />
      <footer className="project-note">La historia separa build, deploy y release; usa evidencia para promover, abortar y aprender, manteniendo artefacto, configuración y datos compatibles.</footer>
    </main>
  );
}
