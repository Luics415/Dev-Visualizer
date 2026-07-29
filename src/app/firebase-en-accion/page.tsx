import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { FirebasePracticalScene } from "@/components/scenes/firebase/FirebasePracticalScene";
import { firebaseDeepDive } from "@/data/practicalDeepDives";

export default function FirebaseActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--firebase-practical">
        <div>
          <span className="eyebrow eyebrow--firebase">Colección 16 · Caso integrado ampliado</span>
          <h1>Firebase en acción</h1>
          <p>Jinx actualiza desde el móvil la calibración de Fishbones. Auth identifica la sesión, App Check atesta la app, Firestore aplica una escritura local y Rules validan ownership y forma; una Function procesa el evento, Storage conserva el plano, FCM notifica al taller y el flujo sobrevive offline antes de reconciliarse al volver la red.</p>
        </div>
        <div className="hero__counter hero__counter--firebase"><strong>14</strong><span>etapas entre cliente, reglas y servicios cloud</span></div>
      </header>

      <section className="practical-stage practical-stage--firebase" aria-label="Caso práctico integrado de Firebase">
        <FirebasePracticalScene />
      </section>

      <PracticalDeepDive modules={firebaseDeepDive} />
      <footer className="project-note">La app no confía en el cliente por estar instalada: cada operación combina identidad, attestation, autorización declarativa y validación. La caché local mejora la experiencia, mientras el backend administrado conserva el estado confirmado y los side effects.</footer>
    </main>
  );
}
