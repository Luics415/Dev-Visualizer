"use client";

import { useState, useEffect, useRef, useCallback, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { trackQuizAuthEvent, trackButtonClick } from "@/lib/telemetry";
import type { AuthUser } from "@/lib/auth";

export interface QuizAuthGateProps {
  collectionTitle: string;
  collectionHref?: string;
  returnHref?: string;
  onSuccess?: (user: AuthUser) => void;
  onCancel?: () => void;
}

export function QuizAuthGate({
  collectionTitle,
  collectionHref,
  returnHref,
  onSuccess,
  onCancel,
}: QuizAuthGateProps) {
  const router = useRouter();
  const backHref = collectionHref || returnHref || "/colecciones";
  const { signInWithGoogle } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasPrompted = useRef(false);
  const googleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!hasPrompted.current) {
      trackQuizAuthEvent("prompt");
      hasPrompted.current = true;
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    googleButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleDismiss = useCallback(() => {
    trackButtonClick("quiz-auth-cancel-btn", "Tal vez después", "quiz_auth_gate");
    trackQuizAuthEvent("cancel");
    if (onCancel) {
      onCancel();
      return;
    }
    router.push(backHref);
  }, [backHref, onCancel, router]);

  const handleLaterClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      trackButtonClick("quiz-auth-cancel-btn", "Tal vez después", "quiz_auth_gate");
      trackQuizAuthEvent("cancel");
      if (onCancel) {
        event.preventDefault();
        onCancel();
      }
    },
    [onCancel]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleDismiss]);

  const handleGoogleSignIn = async () => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      trackButtonClick("quiz-auth-google-btn", "Continuar con Google", "quiz_auth_gate");
      const user = await signInWithGoogle();
      trackQuizAuthEvent("success", "google");
      onSuccess?.(user);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "No se pudo completar el inicio de sesión con Google."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quiz-auth-overlay">
      <div className="spotlight-full-backdrop" aria-hidden="true" />

      <div
        className="quiz-auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-auth-gate-title"
        aria-describedby="quiz-auth-gate-desc"
      >
        <button
          type="button"
          className="quiz-auth-modal__close"
          onClick={handleDismiss}
          aria-label="Cerrar aviso"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="quiz-auth-modal__icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M16.5 21V15.5C16.5 11.358 19.858 8 24 8C28.142 8 31.5 11.358 31.5 15.5V21"
              stroke="#CBD5E1"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <rect x="10" y="20" width="28" height="21" rx="5.5" fill="#F59E0B" />
            <rect x="10" y="20" width="28" height="10" rx="5.5" fill="#FBBF24" opacity="0.55" />
          </svg>
        </div>

        <h2 id="quiz-auth-gate-title" className="quiz-auth-modal__title">
          Acción necesaria para registrar progreso
        </h2>

        <p id="quiz-auth-gate-desc" className="quiz-auth-modal__desc">
          Para realizar preguntas de evaluación sobre el tema{" "}
          <strong>{collectionTitle}</strong> debes iniciar sesión, así se te otorgarán logros.
        </p>

        {errorMessage ? (
          <div
            id="quiz-auth-error-msg"
            role="alert"
            aria-live="polite"
            className="quiz-auth-modal__error"
          >
            {errorMessage}
          </div>
        ) : null}

        <div className="quiz-auth-modal__actions">
          <button
            ref={googleButtonRef}
            type="button"
            className="quiz-auth-modal__google-btn"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>
              {isSubmitting ? "Conectando con Google..." : "Continuar con Google"}
            </span>
          </button>

          <Link
            href={backHref}
            onClick={handleLaterClick}
            className="quiz-auth-modal__later-btn"
          >
            Tal vez después
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizAuthGate;
