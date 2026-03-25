"use client";

import { useState } from "react";

interface LeadFormProps {
  variant?: "dark" | "light";
}

export default function LeadForm({ variant = "dark" }: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const isLight = variant === "light";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          tagName: "pdf",
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
      <div className="rounded-2xl p-8 text-center" style={{ background: isLight ? "#F0FFF4" : "rgba(255,255,255,0.1)" }}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "#6BCB77" }}>
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold" style={{ color: isLight ? "#1A1A4E" : "#FFFFFF" }}>
          Jazak Allah Khayran ! <span className="text-2xl">&#127769;</span>
        </h3>
        <p className="mt-2" style={{ color: isLight ? "#6B7280" : "rgba(255,255,255,0.8)" }}>
          Vérifie ta boîte mail — le guide arrive dans quelques instants.
        </p>
        <p className="mt-1 text-sm" style={{ color: isLight ? "#9CA3AF" : "rgba(255,255,255,0.5)" }}>
          Pense à vérifier tes spams ou l&apos;onglet Promotions si tu ne le trouves pas.
        </p>
      </div>
    );
  }

  const inputClass = isLight
    ? "w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:border-[#4ECDC4] focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/20"
    : "w-full rounded-xl border-2 border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20";

  const checkboxTextClass = isLight ? "text-sm text-gray-500" : "text-sm text-white/60";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="lead-firstname" className="sr-only">Prénom</label>
        <input
          type="text"
          id="lead-firstname"
          placeholder="Ton prénom (optionnel)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="lead-email" className="sr-only">Email</label>
        <input
          type="email"
          id="lead-email"
          required
          placeholder="Ton adresse email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded"
          style={{ accentColor: isLight ? "#4ECDC4" : "#FFFFFF" }}
        />
        <span className={checkboxTextClass}>
          J&apos;accepte de recevoir le guide et des ressources par email.
          Désinscription possible à tout moment (RGPD).
        </span>
      </label>

      {error && (
        <p className="rounded-lg p-3 text-sm text-white" style={{ background: "#FF6B6B" }}>
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/30 disabled:opacity-60"
        style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)" }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </span>
        ) : (
          "Recevoir mon guide gratuit"
        )}
      </button>
    </form>
  );
}
