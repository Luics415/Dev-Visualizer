import type { Metadata } from "next";
import { LegacyRouteBridge } from "@/components/concepts/LegacyRouteBridge";

export const metadata: Metadata = {
  title: "XML, XSD y JSON ahora son tres colecciones",
  description: "Puente hacia las rutas especializadas de XML, XSD y JSON.",
  robots: { index: false, follow: true },
};

export default function StructuredDataBridgePage() {
  return (
    <LegacyRouteBridge
      eyebrow="Ruta anterior conservada"
      title="XML, XSD y JSON ahora se estudian por separado"
      description="La sintaxis documental de XML, el lenguaje de schemas XSD y el modelo de valores JSON tienen especificaciones, herramientas y riesgos distintos. Cada tecnología cuenta ahora con un atlas completo."
      destinations={[
        { href: "/xml", label: "Estudiar XML", code: "XML", description: "Documentos, namespaces, parsing, XPath, XSLT, canonicalización, firma y seguridad." },
        { href: "/xsd", label: "Estudiar XSD", code: "XSD", description: "Tipos, facets, cardinalidad, identidad, composición, assessment y evolución de schemas." },
        { href: "/json", label: "Estudiar JSON", code: "JSON", description: "Valores, JSON Schema, Pointer, Patch, canonicalización, seguridad y contratos operativos." },
      ]}
    />
  );
}
