import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { backendConcepts } from "@/data/backendConcepts";
import { collectionNumber } from "@/data/collectionManifest";

export default function BackendPage() {
  return (
    <StudyAtlasCollection
      collectionId="backend"
      collectionNumber={collectionNumber("backend")}
      eyebrow="Del socket a una plataforma operable"
      title="Backend visualizado"
      description="Runtime, HTTP, middleware, validación, dominio, seguridad, persistencia, caché, jobs, mensajería, resiliencia, observabilidad, pruebas, despliegue y escalado conectados como un solo sistema de producción."
      concepts={backendConcepts}
      heroClassName="hero--backend"
      accentClassName="eyebrow--backend"
      counterLabel="conceptos de servidor y producción"
      footer="Un backend completo no termina al devolver JSON: protege invariantes, coordina fallos, conserva datos, explica su comportamiento y puede desplegarse sin perder trabajo."
    />
  );
}
