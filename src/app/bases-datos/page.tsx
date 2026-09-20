import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { collectionNumber } from "@/data/collectionManifest";
import { databaseConcepts } from "@/data/databaseConcepts";

export default function DatabasesPage() {
  return (
    <StudyAtlasCollection
      collectionId="databases"
      collectionNumber={collectionNumber("databases")}
      eyebrow="Del modelo lógico a la recuperación ante desastres"
      title="Bases de datos visualizadas"
      description="Modelado, SQL, integridad, joins, índices, planner, transacciones, MVCC, migraciones, ORM, modelos NoSQL, replicación, sharding, backups, seguridad y operación explicados desde la lógica hasta el almacenamiento físico."
      concepts={databaseConcepts}
      heroClassName="hero--databases"
      accentClassName="eyebrow--databases"
      counterLabel="conceptos de datos, concurrencia y operación"
      footer="Estudiar bases de datos exige unir modelo, consultas, almacenamiento, concurrencia y recuperación: una decisión local puede cambiar consistencia, costo y capacidad del sistema completo."
    />
  );
}
