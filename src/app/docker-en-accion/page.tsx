import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { DockerPracticalScene } from "@/components/scenes/docker/DockerPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { dockerDeepDive } from "@/data/practicalDeepDives";

export default function DockerActionPage() {
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

      <section className="practical-stage practical-stage--docker" aria-label="Caso práctico integrado de Docker">
        <DockerPracticalScene />
      </section>

      <PracticalDeepDive modules={dockerDeepDive} />
      <footer className="project-note">El caso distingue el filesystem de build, las capas inmutables, el artefacto publicado y el estado runtime. También muestra por qué un contenedor saludable, no root y observable es una decisión de diseño, no una propiedad automática de Docker.</footer>
    </main>
  );
}
