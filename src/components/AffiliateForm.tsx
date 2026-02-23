"use client";

import { useState } from "react";

interface AffiliateFormProps {
  title: string;
  description: string;
  buttonText?: string;
  preselect?: "coran" | "arabe";
}

export default function AffiliateForm({
  title,
  description,
  buttonText = "Recevoir les informations",
  preselect,
}: AffiliateFormProps) {
  const [email, setEmail] = useState("");
  const [formations, setFormations] = useState({
    coran: preselect === "coran" || false,
    arabe: preselect === "arabe" || false,
  });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const atLeastOneSelected = formations.coran || formations.arabe;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!atLeastOneSelected) return;
    setLoading(true);
    setError(false);

    const selected = [
      formations.coran && "Coran",
      formations.arabe && "Arabe",
    ]
      .filter(Boolean)
      .join(" + ");

    try {
      const res = await fetch("https://formspree.io/f/xeelparo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          formations: selected,
          _subject: `Demande formation ${selected}`,
          type: "formation",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
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
        {/* Sélection de la formation */}
        <fieldset>
          <legend className="text-sm font-semibold text-foreground">
            Quelle formation vous intéresse ?
          </legend>
          <div className="mt-2 flex flex-wrap gap-3">
            <label className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm transition-colors ${formations.coran ? "border-secondary bg-secondary/5 text-primary" : "border-border text-foreground-secondary hover:border-secondary/40"}`}>
              <input
                type="checkbox"
                checked={formations.coran}
                onChange={(e) => setFormations((f) => ({ ...f, coran: e.target.checked }))}
                className="h-4 w-4 rounded accent-secondary"
              />
              <span>
                <span className="font-medium">Apprendre le Coran</span>
                <span className="ml-1 text-foreground-secondary/70">— récitation, tajwid, mémorisation</span>
              </span>
            </label>
            <label className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm transition-colors ${formations.arabe ? "border-secondary bg-secondary/5 text-primary" : "border-border text-foreground-secondary hover:border-secondary/40"}`}>
              <input
                type="checkbox"
                checked={formations.arabe}
                onChange={(e) => setFormations((f) => ({ ...f, arabe: e.target.checked }))}
                className="h-4 w-4 rounded accent-secondary"
              />
              <span>
                <span className="font-medium">Apprendre l&apos;arabe</span>
                <span className="ml-1 text-foreground-secondary/70">— lecture, écriture, compréhension</span>
              </span>
            </label>
          </div>
        </fieldset>

        <div>
          <label htmlFor="affiliate-email" className="sr-only">
            Adresse email
          </label>
          <input
            type="email"
            id="affiliate-email"
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
            J&apos;accepte de recevoir des informations par email.
            Conformément au RGPD, vous pouvez vous désinscrire à tout moment.
          </span>
        </label>

        {error && (
          <p className="text-sm text-red-600">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        )}

        {!atLeastOneSelected && (
          <p className="text-sm text-amber-600">
            Veuillez sélectionner au moins une formation.
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !atLeastOneSelected}
          className="w-full rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 disabled:opacity-60 sm:w-auto"
        >
          {loading ? "Envoi en cours..." : buttonText}
        </button>

        <p className="text-xs text-foreground-secondary/70">
          En soumettant ce formulaire, vous recevrez les détails et conditions
          d&apos;inscription pour la ou les formations sélectionnées.
        </p>
      </form>
    </div>
  );
}
