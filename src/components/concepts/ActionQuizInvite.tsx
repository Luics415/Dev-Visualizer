import Link from "next/link";

export type ActionQuizInviteProps = {
  actionHref: string;
  collectionTitle?: string;
};

export function ActionQuizInvite({ actionHref, collectionTitle }: ActionQuizInviteProps) {
  const quizHref = `${actionHref.replace(/\/+$/, "")}/quiz`;

  return (
    <section className="action-quiz-invite" aria-label="Validación didáctica de conocimientos">
      <div className="action-quiz-invite__content">
        <span className="action-quiz-invite__badge">Modo Quiz Opcional</span>
        <h3>¿Listo para validar tu comprensión técnica{collectionTitle ? ` en ${collectionTitle}` : ""}?</h3>
        <p>
          Pon a prueba lo estudiado con una evaluación rápida de 15 preguntas seleccionadas al azar.
          Sin inicio de sesión y con intentos ilimitados.
        </p>
      </div>
      <Link href={quizHref} className="action-quiz-invite__btn">
        <span>Iniciar Quiz Técnico</span>
      </Link>
    </section>
  );
}
