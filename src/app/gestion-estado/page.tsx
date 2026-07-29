import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { stateManagementConcepts } from "@/data/stateManagementConcepts";

export default function StateManagementPage() {
  return (
    <StudyAtlasCollection
      collectionNumber="05"
      eyebrow="Del dato local a la sincronización distribuida"
      title="Gestión de estado visualizada"
      description="Una ruta completa para decidir qué guardar, dónde colocarlo y cómo mantenerlo coherente: estado local, reducers, Context, Redux Toolkit, stores ligeros, caché de servidor, persistencia, offline, pruebas y observabilidad."
      concepts={stateManagementConcepts}
      heroClassName="hero--state-management"
      accentClassName="eyebrow--state-management"
      counterLabel="conceptos de modelado, herramientas y operación"
      footer="Gestionar estado no significa elegir una librería: significa definir autoridad, identidad, transiciones, sincronización y evidencia para cada dato que cambia."
    />
  );
}
