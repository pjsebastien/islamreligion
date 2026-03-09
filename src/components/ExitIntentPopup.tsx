"use client";

import { useState, useEffect, useCallback } from "react";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [formations, setFormations] = useState({ coran: false, arabe: true });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const atLeastOneSelected = formations.coran || formations.arabe;

  const close = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem("exit-popup-shown", "1");
  }, []);

  useEffect(() => {
    // Skip on mobile (no mouse pointer)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Skip if already shown this session
    if (sessionStorage.getItem("exit-popup-shown")) return;

    let armed = false;
    const armTimer = setTimeout(() => {
      armed = true;
    }, 30000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY < 0) {
        setVisible(true);
        sessionStorage.setItem("exit-popup-shown", "1");
        document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(armTimer);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!atLeastOneSelected) return;
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(close, 2500);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 rounded-lg p-1.5 text-foreground-secondary transition-colors hover:bg-accent hover:text-foreground"
          aria-label="Fermer"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-4 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
              <svg className="h-7 w-7 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary">Demande envoyée</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              Vous recevrez les informations à l&apos;adresse indiquée.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
              <svg className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary">
              Apprenez l&apos;arabe et comprenez le Coran
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
              Des milliers de francophones ont appris à lire l&apos;arabe en moins de
              30 jours. Recevez les détails de nos formations recommandées.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="flex flex-wrap gap-2">
                <label className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${formations.coran ? "border-secondary bg-secondary/5 text-primary" : "border-border text-foreground-secondary hover:border-secondary/40"}`}>
                  <input
                    type="checkbox"
                    checked={formations.coran}
                    onChange={(e) => setFormations((f) => ({ ...f, coran: e.target.checked }))}
                    className="h-4 w-4 rounded accent-secondary"
                  />
                  <span className="font-medium">Coran</span>
                </label>
                <label className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${formations.arabe ? "border-secondary bg-secondary/5 text-primary" : "border-border text-foreground-secondary hover:border-secondary/40"}`}>
                  <input
                    type="checkbox"
                    checked={formations.arabe}
                    onChange={(e) => setFormations((f) => ({ ...f, arabe: e.target.checked }))}
                    className="h-4 w-4 rounded accent-secondary"
                  />
                  <span className="font-medium">Arabe</span>
                </label>
              </div>

              <input
                type="email"
                required
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-secondary/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-secondary"
                />
                <span className="text-xs text-foreground-secondary">
                  J&apos;accepte de recevoir des informations par email (RGPD).
                </span>
              </label>

              {error && (
                <p className="text-xs text-red-600">Une erreur est survenue. Réessayez.</p>
              )}

              {!atLeastOneSelected && (
                <p className="text-xs text-amber-600">Sélectionnez au moins une formation.</p>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading || !atLeastOneSelected}
                  className="flex-1 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark disabled:opacity-60"
                >
                  {loading ? "Envoi..." : "Recevoir les infos"}
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground-secondary transition-colors hover:bg-accent"
                >
                  Non merci
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
