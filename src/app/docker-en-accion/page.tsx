import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ActionQuizInvite } from "@/components/concepts/ActionQuizInvite";
import { DockerPracticalScene } from "@/components/scenes/docker/DockerPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { dockerDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function DockerActionPage() {
  const presentationTrack = getActionPresentationTrack("docker");
  const practicalTracks = [
    presentationTrack,
    ...dockerDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("docker", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--docker-practical">
        <div>
          <span className="eyebrow eyebrow--docker">Colección {collectionNumber("docker")} · Caso integrado ampliado</span>
          <h1>Docker en acción</h1>
          <p>Jinx empaqueta la API de telemetría de Fishbones. BuildKit recibe un contexto mínimo, reutiliza dependencias, ejecuta pruebas, produce una imagen multi-platform no root, adjunta SBOM y provenance y publica por digest; Compose levanta web y Redis con DNS interno, volumen, secretos, healthcheck y un rollback que no reconstruye el artefacto.</p>
        </div>
        <div className="hero__counter hero__counter--docker"><strong>14</strong><span>etapas de build, distribución y runtime</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["docker"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/docker">Ver conceptos y catálogo de Docker <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--docker practical-stage--card" aria-label="Caso práctico integrado de Docker">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Empaquetado y ejecución de Fishbones API</h2>
              <p>Pipeline de contenedores: BuildKit multi-stage, capas inmutables, seguridad sin root, publicación por digest OCI y orquestación con Docker Compose.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <DockerPracticalScene />
      </section>

      <PracticalDeepDive modules={dockerDeepDive} collectionId="docker" />

      <ActionQuizInvite actionHref="/docker-en-accion" collectionTitle="Docker" />

      <footer className="project-note">El caso distingue el filesystem de build, las capas inmutables, el artefacto publicado y el estado runtime. También muestra por qué un contenedor saludable, no root y observable es una decisión de diseño, no una propiedad automática de Docker.</footer>

      <FloatingAudioBubble collectionName="Docker en acción" tracks={practicalTracks} />
    </main>
  );
}
