import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { FirebasePracticalScene } from "@/components/scenes/firebase/FirebasePracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { firebaseDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function FirebaseActionPage() {
  const presentationTrack = getActionPresentationTrack("firebase");
  const practicalTracks = [
    presentationTrack,
    ...firebaseDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("firebase", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--firebase-practical">
        <div>
          <span className="eyebrow eyebrow--firebase">Colección {collectionNumber("firebase")} · Caso integrado ampliado</span>
          <h1>Firebase en acción</h1>
          <p>Jinx actualiza desde el móvil la calibración de Fishbones. Auth identifica la sesión, App Check atesta la app, Firestore aplica una escritura local y Rules validan ownership y forma; una Function procesa el evento, Storage conserva el plano, FCM notifica al taller y el flujo sobrevive offline antes de reconciliarse al volver la red.</p>
        </div>
        <div className="hero__counter hero__counter--firebase"><strong>14</strong><span>etapas entre cliente, reglas y servicios cloud</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["firebase"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/firebase">Ver conceptos y catálogo de Firebase <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--firebase practical-stage--card" aria-label="Caso práctico integrado de Firebase">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Calibración de Fishbones y sincronización offline</h2>
              <p>Ciclo móvil y BaaS: autenticación, App Check, Firestore local, Security Rules, Cloud Functions, Cloud Storage, FCM y sincronización offline.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <FirebasePracticalScene />
      </section>

      <PracticalDeepDive modules={firebaseDeepDive} collectionId="firebase" />
      <footer className="project-note">La app no confía en el cliente por estar instalada: cada operación combina identidad, attestation, autorización declarativa y validación. La caché local mejora la experiencia, mientras el backend administrado conserva el estado confirmado y los side effects.</footer>

      <FloatingAudioBubble collectionName="Firebase en acción" tracks={practicalTracks} />
    </main>
  );
}
