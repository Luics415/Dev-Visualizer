import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { collectionNumber } from "@/data/collectionManifest";
import { deploymentConcepts } from "@/data/deploymentConcepts";

export default function DeploymentPage() {
  return (
    <StudyAtlasCollection
      collectionId="deployment"
      collectionNumber={collectionNumber("deployment")}
      eyebrow="Del artefacto aprobado a una versión operable y reversible"
      title="Deployment visualizado"
      description="Verificación del artefacto aprobado, configuración, entornos, estrategias de rollout, Kubernetes, tráfico, migraciones compatibles, observabilidad, rollback y operación después del release. CI/CD vive ahora en una colección propia."
      concepts={deploymentConcepts}
      heroClassName="hero--deployment"
      accentClassName="eyebrow--deployment"
      counterLabel="conceptos de entrega y operación"
      footer="Deployment comienza con un artefacto aprobado y termina cuando la versión recibe tráfico, conserva compatibilidad, demuestra salud, puede revertirse y el equipo sabe exactamente qué está funcionando en producción."
    />
  );
}
