import type { Metadata } from "next";
import { LegacyRouteBridge } from "@/components/concepts/LegacyRouteBridge";

export const metadata: Metadata = { title: "Git y GitHub ahora son dos colecciones", robots: { index: false, follow: true } };

export default function GitGithubBridgePage() {
  return <LegacyRouteBridge eyebrow="Ruta anterior conservada" title="Git y GitHub ahora se estudian por separado" description="Git explica el modelo distribuido, los objetos y la historia local. GitHub explica colaboración, gobierno, seguridad y publicación alrededor de repositorios Git." destinations={[
    { href: "/git", label: "Estudiar Git", code: "Git", description: "Objetos, staging, commits, ramas, remotos, integración, diagnóstico y recuperación." },
    { href: "/github", label: "Estudiar GitHub", code: "GH", description: "Issues, pull requests, reviews, rulesets, permisos, seguridad, automatización y releases." },
  ]} />;
}
