/**
 * Dev Visualizer — Compuerta Accesible de Autenticación para Quizzes (Feature F13)
 * src/components/auth/QuizAuthGate.tsx
 *
 * Intercepta exclusivamente el inicio de cuestionarios para usuarios no autenticados,
 * garantizando navegación 100% libre en todo el resto de la plataforma.
 *
 * Cumplimiento normativo y de accesibilidad:
 * - Semántica accesible dialog (`role="dialog"`, `aria-labelledby`, `aria-describedby`, `aria-modal="true"`).
 * - Soporte bilingüe y visual de alto contraste conforme a WCAG 2.1 AA.
 * - Despacho de telemetría educativa con cero PII (`trackQuizAuthEvent`, `trackButtonClick`).
 * - Dos métodos canónicos visibles: Google y Correo Electrónico.
 * - Soporte de cancelación con tecla Escape.
 */

"use client";

import { useState, useEffect, useRef, useCallback, type FormEvent } from "react";
import Link from "next/link";
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
  const backHref = collectionHref || returnHref || "/colecciones";
  const { signInWithGoogle, signInWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeProvider, setActiveProvider] = useState<"google" | "email" | null>(null);
  const hasPrompted = useRef(false);

  // Registro de telemetría de presentación de la compuerta al montar (una sola vez)
  useEffect(() => {
    if (!hasPrompted.current) {
      trackQuizAuthEvent("prompt");
      hasPrompted.current = true;
    }
  }, []);

  const handleCancelClick = useCallback(() => {
    trackButtonClick("quiz-auth-cancel-btn", "Volver a la colección", "quiz_auth_gate");
    trackQuizAuthEvent("cancel");
    onCancel?.();
  }, [onCancel]);

  // Cierre o cancelación con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCancelClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCancelClick]);

  const handleGoogleSignIn = async () => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      setActiveProvider("google");
      trackButtonClick("quiz-auth-google-btn", "Continuar con Google", "quiz_auth_gate");
      const user = await signInWithGoogle();
      trackQuizAuthEvent("success", "google");
      onSuccess?.(user);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Error al iniciar sesión con Google"
      );
    } finally {
      setIsSubmitting(false);
      setActiveProvider(null);
    }
  };

  const handleEmailSignIn = async (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setErrorMessage("Por favor, ingresa una dirección de correo electrónico válida.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      setActiveProvider("email");
      trackButtonClick("quiz-auth-email-btn", "Continuar con Correo", "quiz_auth_gate");
      const user = await signInWithEmail(cleanEmail);
      trackQuizAuthEvent("success", "email");
      onSuccess?.(user);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Error al procesar el inicio con correo"
      );
    } finally {
      setIsSubmitting(false);
      setActiveProvider(null);
    }
  };

  return (
    <div
      className="quiz-card quiz-card--gate quiz-auth-gate"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-auth-gate-title"
      aria-describedby="quiz-auth-gate-desc"
      style={{
        maxWidth: "580px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <header className="quiz-finished__header">
        <span className="quiz-finished__badge-flag">
          🔒 Acceso a Evaluación Didáctica
        </span>
        <h2 id="quiz-auth-gate-title">Identificación para {collectionTitle}</h2>
        <p id="quiz-auth-gate-desc">
          Para registrar tu progreso pedagógico y desbloquear las insignias de esta colección,
          inicia sesión con tu cuenta de Google o tu correo electrónico profesional.
          El atlas, conceptos y librería continúan siendo 100% libres de exploración.
        </p>
      </header>

      {errorMessage ? (
        <div
          id="quiz-auth-error-msg"
          role="alert"
          aria-live="polite"
          className="quiz-gate__error"
          style={{
            background: "rgba(239, 68, 68, 0.12)",
            border: "1px solid var(--rose, #ef4444)",
            borderRadius: "8px",
            padding: "10px 14px",
            color: "#f87171",
            fontSize: "0.9rem",
            marginBottom: "16px",
            textAlign: "left",
          }}
        >
          {errorMessage}
        </div>
      ) : null}

      <div
        className="quiz-auth-gate__options"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          margin: "24px 0 16px",
        }}
      >
        {/* Opción 1: Google */}
        <button
          type="button"
          className="quiz-btn quiz-btn--primary"
          onClick={handleGoogleSignIn}
          disabled={isSubmitting}
          aria-label="Continuar con Google"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <svg
            className="quiz-auth__google-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
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
            {isSubmitting && activeProvider === "google"
              ? "Conectando..."
              : "Continuar con Google"}
          </span>
        </button>

        {/* Separador */}
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "center",
            margin: "4px 0",
            color: "var(--muted, #8d9bb1)",
            fontSize: "0.82rem",
          }}
        >
          <hr style={{ flex: 1, borderColor: "rgba(255,255,255,0.12)" }} />
          <span style={{ padding: "0 12px" }}>o mediante correo</span>
          <hr style={{ flex: 1, borderColor: "rgba(255,255,255,0.12)" }} />
        </div>

        {/* Opción 2: Formulario Correo Electrónico */}
        <form
          onSubmit={handleEmailSignIn}
          noValidate
          style={{ display: "flex", flexDirection: "column", gap: "10px", textAlign: "left" }}
        >
          <div>
            <label
              htmlFor="quiz-auth-email-input"
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--foreground, #e2e8f0)",
              }}
            >
              Correo Electrónico
            </label>
            <input
              id="quiz-auth-email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu.correo@ejemplo.com"
              required
              aria-required="true"
              aria-invalid={errorMessage ? "true" : "false"}
              aria-describedby={errorMessage ? "quiz-auth-error-msg" : undefined}
              autoComplete="email"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid var(--line, rgba(255,255,255,0.15))",
                background: "rgba(0, 0, 0, 0.45)",
                color: "var(--text, #ffffff)",
                fontSize: "0.95rem",
              }}
            />
          </div>

          <button
            type="submit"
            className="quiz-btn quiz-btn--outline"
            disabled={isSubmitting || !email.trim()}
            aria-label="Continuar con Correo"
            style={{ width: "100%", marginTop: "4px" }}
          >
            <span>
              {isSubmitting && activeProvider === "email"
                ? "Iniciando..."
                : "Continuar con Correo"}
            </span>
          </button>
        </form>
      </div>

      <footer
        className="quiz-finished__actions"
        style={{
          marginTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Link
          href={backHref}
          onClick={handleCancelClick}
          className="quiz-btn quiz-btn--outline"
          aria-label={`Volver a ${collectionTitle} sin iniciar quiz`}
          style={{ fontSize: "0.88rem" }}
        >
          ← Volver a {collectionTitle} sin iniciar quiz
        </Link>

        <p
          className="quiz-helper-text"
          style={{
            margin: 0,
            fontSize: "0.78rem",
            color: "var(--muted, #8d9bb1)",
            textAlign: "center",
          }}
        >
          Navegación 100% libre y anónima en todo el atlas; tu sesión solo asocia tus insignias de evaluación técnica.
        </p>
      </footer>
    </div>
  );
}

export default QuizAuthGate;
