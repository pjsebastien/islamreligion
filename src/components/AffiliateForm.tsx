"use client";

import { useState } from "react";

interface AffiliateFormProps {
  title: string;
  description: string;
  buttonText?: string;
}

export default function AffiliateForm({
  title,
  description,
  buttonText = "Recevoir la formation",
}: AffiliateFormProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connecter à un service d'emailing (Mailchimp, Brevo, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="my-10 rounded-xl border border-secondary/30 bg-accent px-6 py-8 text-center lg:px-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
          <svg className="h-7 w-7 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary">Demande envoyée</h3>
        <p className="mt-2 text-foreground-secondary">
          Vous recevrez les informations sur la formation à l&apos;adresse indiquée.
        </p>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-xl border border-border bg-white px-6 py-8 shadow-sm lg:px-10">
      <h3 className="text-xl font-bold text-primary lg:text-2xl">{title}</h3>
      <p className="mt-2 text-foreground-secondary">{description}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground-secondary/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-secondary"
          />
          <span className="text-sm text-foreground-secondary">
            J&apos;accepte de recevoir des informations sur cette formation par email.
            Conformément au RGPD, vous pouvez vous désinscrire à tout moment.
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 sm:w-auto"
        >
          {buttonText}
        </button>

        <p className="text-xs text-foreground-secondary/70">
          Cette formation est une offre payante. En soumettant ce formulaire, vous recevrez
          les détails et les conditions d&apos;inscription.
        </p>
      </form>
    </div>
  );
}
