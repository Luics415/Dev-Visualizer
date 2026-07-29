import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { debuggingConcepts } from "@/data/debuggingConcepts";

export default function DebuggingPage() {
  return (
    <StudyAtlasCollection
      collectionNumber="17"
      eyebrow="Del síntoma ambiguo a una causa demostrada y una regresión imposible"
      title="Debugging visualizado"
      description="Mentalidad, reproducción, evidencia, logs, breakpoints, call stacks, asincronía, DOM, CSS, red, backend, trazas, rendimiento, memoria, mobile, pruebas, incidentes y prevención conectados como un método sistemático."
      concepts={debuggingConcepts}
      heroClassName="hero--debugging"
      accentClassName="eyebrow--debugging"
      counterLabel="conceptos de investigación, herramientas y prevención"
      footer="Depurar no es probar cambios hasta que el síntoma desaparece: es formular una hipótesis, preservar evidencia, aislar variables, demostrar causalidad y convertir el hallazgo en pruebas, señales y decisiones operativas."
    />
  );
}
