import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { linuxConcepts } from "@/data/linuxConcepts";

export default function LinuxPage() {
  return (
    <StudyAtlasCollection
      collectionId="linux"
      collectionNumber="11"
      eyebrow="Del shell al kernel y la operación del host"
      title="Linux visualizado"
      description="Kernel, user space, Bash, archivos, permisos, procesos, systemd, redes, storage, observabilidad, hardening, automatización y aislamiento conectados como un sistema operativo de producción."
      concepts={linuxConcepts}
      heroClassName="hero--linux"
      accentClassName="eyebrow--linux"
      counterLabel="conceptos del sistema Linux"
      footer="Administrar Linux no es memorizar comandos: es seguir procesos, descriptores, rutas, permisos, señales, paquetes y recursos hasta encontrar la capa que explica el comportamiento."
    />
  );
}
