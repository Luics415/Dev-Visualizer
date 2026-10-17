import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { LinuxPracticalScene } from "@/components/scenes/linux/LinuxPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { linuxDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function LinuxActionPage() {
  const presentationTrack = getActionPresentationTrack("linux");
  const practicalTracks = [
    presentationTrack,
    ...linuxDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("linux", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--linux-practical">
        <div>
          <span className="eyebrow eyebrow--linux">Colección {collectionNumber("linux")} · Caso integrado ampliado</span>
          <h1>Linux en acción</h1>
          <p>El servicio hexgate-api deja de responder después de un deploy. Seguimos el incidente desde DNS y el puerto público hasta systemd, procesos, logs, permisos, memoria, filesystem y una corrección segura sin reiniciar el servidor a ciegas.</p>
        </div>
        <div className="hero__counter hero__counter--linux"><strong>14</strong><span>etapas de diagnóstico y recuperación</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["linux"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/linux">Ver conceptos y catálogo de Linux <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--linux practical-stage--card" aria-label="Caso práctico integrado de Linux">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Diagnóstico y recuperación del servicio hexgate-api</h2>
              <p>Incidente en producción: socket, procesos, journalctl, cgroups, permisos de archivos, memoria y restauración de servicio sin reinicio destructivo.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <LinuxPracticalScene />
      </section>

      <PracticalDeepDive modules={linuxDeepDive} collectionId="linux" />
      <footer className="project-note">El caso conecta síntomas externos con sockets, units, procesos, permisos y recursos del kernel; cada comando reduce hipótesis antes de cambiar el sistema.</footer>

      <FloatingAudioBubble collectionName="Linux en acción" tracks={practicalTracks} />
    </main>
  );
}
