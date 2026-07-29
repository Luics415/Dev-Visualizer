import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { firebaseConcepts } from "@/data/firebaseConcepts";

export default function FirebasePage() {
  return (
    <StudyAtlasCollection
      collectionNumber="16"
      eyebrow="De un SDK cliente a una plataforma segura, reactiva y observable"
      title="Firebase visualizado"
      description="Proyectos, SDKs, emulators, Authentication, Firestore, Realtime Database, Storage, Cloud Functions, Hosting, App Hosting, FCM, Remote Config, Analytics, Crashlytics, App Check, Security Rules, Admin SDK, costos y operación en una ruta completa."
      concepts={firebaseConcepts}
      heroClassName="hero--firebase"
      accentClassName="eyebrow--firebase"
      counterLabel="conceptos de datos, identidad y servicios administrados"
      footer="Firebase acelera porque permite que el cliente hable con servicios administrados; esa comodidad solo es segura cuando identidad, Rules, App Check, modelado, costes, observabilidad y funciones idempotentes se diseñan como una sola arquitectura."
    />
  );
}
