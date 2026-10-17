import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { AwsPracticalScene } from "@/components/scenes/aws/AwsPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { awsDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function AwsActionPage() {
  const presentationTrack = getActionPresentationTrack("aws");
  const practicalTracks = [
    presentationTrack,
    ...awsDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("aws", module, 7 + i)
    ),
  ];

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

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["aws"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/aws">Ver conceptos y catálogo de AWS <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--aws practical-stage--card" aria-label="Caso práctico integrado de AWS">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Arquitectura Well-Architected en AWS</h2>
              <p>Entrega segura edge-to-core: DNS Route 53, CDN CloudFront con WAF, balanceo ALB, contenedores ECS Fargate, base Aurora y colas SQS.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <AwsPracticalScene />
      </section>

      <PracticalDeepDive modules={awsDeepDive} collectionId="aws" />
      <footer className="project-note">El ejemplo une identidad temporal, red por capas, servicios administrados, resiliencia por zona, eventos asíncronos, telemetría y control de costos.</footer>

      <FloatingAudioBubble collectionName="AWS en acción" tracks={practicalTracks} />
    </main>
  );
}
