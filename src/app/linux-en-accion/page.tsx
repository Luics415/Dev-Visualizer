import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { LinuxPracticalScene } from "@/components/scenes/linux/LinuxPracticalScene";
import { linuxDeepDive } from "@/data/practicalDeepDives";

export default function LinuxActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--linux-practical">
        <div>
          <span className="eyebrow eyebrow--linux">Colección 11 · Caso integrado ampliado</span>
          <h1>Linux en acción</h1>
          <p>El servicio hexgate-api deja de responder después de un deploy. Seguimos el incidente desde DNS y el puerto público hasta systemd, procesos, logs, permisos, memoria, filesystem y una corrección segura sin reiniciar el servidor a ciegas.</p>
        </div>
        <div className="hero__counter hero__counter--linux"><strong>14</strong><span>etapas de diagnóstico y recuperación</span></div>
      </header>

      <section className="practical-stage practical-stage--linux" aria-label="Caso práctico integrado de Linux">
        <LinuxPracticalScene />
      </section>

      <PracticalDeepDive modules={linuxDeepDive} />
      <footer className="project-note">El caso conecta síntomas externos con sockets, units, procesos, permisos y recursos del kernel; cada comando reduce hipótesis antes de cambiar el sistema.</footer>
    </main>
  );
}
