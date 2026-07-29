import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { deploymentConcepts } from "@/data/deploymentConcepts";

export default function DeploymentPage() {
  return (
    <StudyAtlasCollection
      collectionNumber="13"
      eyebrow="Del commit a una versión operable y reversible"
      title="Deployment visualizado"
      description="Builds reproducibles, artefactos, contenedores, configuración, CI/CD, estrategias de rollout, Kubernetes, tráfico, migraciones, observabilidad, rollback, seguridad de supply chain y operación después del release."
      concepts={deploymentConcepts}
      heroClassName="hero--deployment"
      accentClassName="eyebrow--deployment"
      counterLabel="conceptos de entrega y operación"
      footer="Un deployment termina cuando la nueva versión recibe tráfico, conserva compatibilidad, demuestra salud, puede revertirse y el equipo sabe exactamente qué está funcionando en producción."
    />
  );
}
