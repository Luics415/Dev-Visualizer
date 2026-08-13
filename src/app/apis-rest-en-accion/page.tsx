import type { Metadata } from "next";
import { LegacyRouteBridge } from "@/components/concepts/LegacyRouteBridge";

export const metadata: Metadata = { title: "APIs en acción", alternates: { canonical: "/apis-en-accion" }, robots: { index: false, follow: true } };

export default function RestApisActionBridgePage() {
  return <LegacyRouteBridge eyebrow="Caso anterior conservado" title="El caso REST creció a una historia multiprotocolo" description="La nueva historia muestra cómo una misma intención cruza REST, GraphQL, gRPC, eventos, WebSocket y webhook sin perder identidad." destinations={[
    { href: "/apis-en-accion", label: "APIs en acción", code: "API+", description: "Sigue una orden multiprotocolo con idempotencia, deadlines, compatibilidad y trazabilidad." },
  ]} />;
}
