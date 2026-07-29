import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { awsConcepts } from "@/data/awsConcepts";

export default function AwsPage() {
  return (
    <StudyAtlasCollection
      collectionNumber="12"
      eyebrow="De una cuenta vacía a una plataforma Well-Architected"
      title="AWS visualizado"
      description="Identidad, redes, compute, contenedores, serverless, storage, bases de datos, mensajería, edge, seguridad, observabilidad, infraestructura como código, gobierno, recuperación y costos dentro de una arquitectura AWS completa."
      concepts={awsConcepts}
      heroClassName="hero--aws"
      accentClassName="eyebrow--aws"
      counterLabel="conceptos de arquitectura AWS"
      footer="Aprender AWS no consiste en coleccionar nombres de servicios: consiste en elegir límites, responsabilidades y mecanismos de fallo que formen una arquitectura segura, operable y económicamente consciente."
    />
  );
}
