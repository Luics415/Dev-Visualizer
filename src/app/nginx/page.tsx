import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { nginxConcepts } from "@/data/nginxConcepts";

export default function NginxPage() {
  return (
    <StudyAtlasCollection
      collectionNumber="14"
      eyebrow="De una conexión entrante a un gateway operable"
      title="NGINX visualizado"
      description="Arquitectura event-driven, procesos, configuración, selección de server y location, contenido estático, reverse proxy, upstreams, balanceo, TLS, HTTP/2, HTTP/3, caché, límites, stream, observabilidad, contenedores, Kubernetes y operación conectados en una sola ruta de estudio."
      concepts={nginxConcepts}
      heroClassName="hero--nginx"
      accentClassName="eyebrow--nginx"
      counterLabel="conceptos de tráfico, proxy y operación"
      footer="NGINX parece simple porque su configuración es declarativa; dominarlo exige seguir una petición por sockets, selección de virtual host, locations, fases, buffers, upstreams, filtros, logs y señales de operación."
    />
  );
}
