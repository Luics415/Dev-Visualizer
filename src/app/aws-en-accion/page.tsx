import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { AwsPracticalScene } from "@/components/scenes/aws/AwsPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { awsDeepDive } from "@/data/practicalDeepDives";

export default function AwsActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--aws-practical">
        <div>
          <span className="eyebrow eyebrow--aws">Colección {collectionNumber("aws")} · Caso integrado ampliado</span>
          <h1>AWS en acción</h1>
          <p>El portal del Consejo de Piltover debe servir una actualización de seguridad enviada por Caitlyn. La arquitectura recorre Route 53, CloudFront, WAF, ALB, ECS Fargate, Aurora, ElastiCache, SQS y observabilidad multi-AZ sin entregar credenciales permanentes al pipeline.</p>
        </div>
        <div className="hero__counter hero__counter--aws"><strong>14</strong><span>etapas del edge a una plataforma operable</span></div>
      </header>

      <section className="practical-stage practical-stage--aws" aria-label="Caso práctico integrado de AWS">
        <AwsPracticalScene />
      </section>

      <PracticalDeepDive modules={awsDeepDive} />
      <footer className="project-note">El ejemplo une identidad temporal, red por capas, servicios administrados, resiliencia por zona, eventos asíncronos, telemetría y control de costos.</footer>
    </main>
  );
}
