import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { dockerConcepts } from "@/data/dockerConcepts";

export default function DockerPage() {
  return (
    <StudyAtlasCollection
      collectionNumber="15"
      eyebrow="De una imagen reproducible a un runtime aislado y operable"
      title="Docker visualizado"
      description="Contenedores, Engine, OCI, imágenes, capas, Dockerfiles, BuildKit, storage, networking, Compose, seguridad, supply chain, recursos, diagnóstico y operación conectados en una ruta completa."
      concepts={dockerConcepts}
      heroClassName="hero--docker"
      accentClassName="eyebrow--docker"
      counterLabel="conceptos de contenedores, builds y runtime"
      footer="Docker no es solamente ejecutar docker run: dominarlo exige conectar el kernel, la identidad de una imagen, el grafo de build, la topología de red, la persistencia y las garantías de seguridad y operación."
    />
  );
}
