import type { Metadata } from "next";
import { LegacyRouteBridge } from "@/components/concepts/LegacyRouteBridge";

export const metadata: Metadata = { title: "APIs REST evolucionó a APIs", alternates: { canonical: "/apis" }, robots: { index: false, follow: true } };

export default function RestApisBridgePage() {
  return <LegacyRouteBridge eyebrow="Ruta anterior conservada" title="APIs REST ahora forma parte de un atlas mayor" description="El contenido REST sigue presente y ahora se compara con GraphQL, gRPC, WebSockets, webhooks y eventos dentro de una sola colección multiparadigma." destinations={[
    { href: "/apis", label: "Estudiar APIs", code: "API", description: "Contratos, HTTP, REST, GraphQL, gRPC, tiempo real, eventos, seguridad y operación." },
  ]} />;
}
