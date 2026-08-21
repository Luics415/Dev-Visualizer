import type { Metadata } from "next";
import { LegacyRouteBridge } from "@/components/concepts/LegacyRouteBridge";

export const metadata: Metadata = {
  title: "Nuevos casos de XML, XSD y JSON",
  description: "Puente hacia tres casos técnicos independientes.",
  robots: { index: false, follow: true },
};

export default function StructuredDataActionBridgePage() {
  return (
    <LegacyRouteBridge
      eyebrow="Caso anterior conservado"
      title="Tres tecnologías, tres historias técnicas"
      description="El caso combinado se dividió para que procesamiento documental, schema assessment y actualización de valores JSON no parezcan una sola operación intercambiable."
      destinations={[
        { href: "/xml-en-accion", label: "XML en acción", code: "XML+", description: "Publica un manual multilingüe con resolución controlada, XSLT y firma verificable." },
        { href: "/xsd-en-accion", label: "XSD en acción", code: "XSD+", description: "Valida un certificado con tipos, facets, key/keyref, assertions y compatibilidad 1.0/1.1." },
        { href: "/json-en-accion", label: "JSON en acción", code: "JSON+", description: "Recupera una orden offline, protege precisión y aplica JSON Patch de forma atómica." },
      ]}
    />
  );
}
