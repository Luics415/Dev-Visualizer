import type { Metadata } from "next";
import { LegacyRouteBridge } from "@/components/concepts/LegacyRouteBridge";

export const metadata: Metadata = { title: "Nuevos casos de Git y GitHub", robots: { index: false, follow: true } };

export default function GitGithubActionBridgePage() {
  return <LegacyRouteBridge eyebrow="Caso anterior conservado" title="Dos historias, dos fronteras" description="El caso combinado se dividió para que el movimiento local de referencias no se confunda con las políticas y conversaciones de la plataforma." destinations={[
    { href: "/git-en-accion", label: "Git en acción", code: "Git+", description: "Recupera y publica un hotfix sin perder un experimento local." },
    { href: "/github-en-accion", label: "GitHub en acción", code: "GH+", description: "Lleva una contribución externa desde issue hasta una release gobernada." },
  ]} />;
}
