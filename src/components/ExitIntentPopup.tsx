"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const close = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem("exit-popup-shown", "1");
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
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
        setTimeout(close, 3000);
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
        style={{ background: "linear-gradient(135deg, #1A1A4E 0%, #2D2D7A 100%)" }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-10 rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Fermer"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="px-6 py-12 text-center sm:px-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "#6BCB77" }}>
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">
              Jazak Allah Khayran ! <span className="text-2xl">&#127769;</span>
            </h3>
            <p className="mt-2 text-white/80">
              Vérifie ta boîte mail — le guide arrive dans quelques instants.
            </p>
            <p className="mt-1 text-sm text-white/50">
              Pense à vérifier tes spams ou l&apos;onglet Promotions.
            </p>
          </div>
        ) : (
          <div className="px-6 py-8 sm:px-10">
            {/* Header with book cover */}
            <div className="mb-6 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <div className="relative flex-shrink-0">
                <div
                  className="absolute -inset-2 rounded-xl opacity-40 blur-lg"
                  style={{ background: "#9B59B6" }}
                />
                <Image
                  src="/images/book-pdf-cover.png"
                  alt="Guide des 10 douas essentielles"
                  width={120}
                  height={150}
                  className="relative z-10 rounded-lg drop-shadow-xl"
                />
              </div>
              <div className="text-center sm:text-left">
                <span
                  className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{ background: "#FFD93D", color: "#1A1A4E" }}
                >
                  PDF Gratuit
                </span>
                <h3 className="mt-2 text-xl font-extrabold leading-tight text-white sm:text-2xl">
                  10 douas essentielles pour{" "}
                  <span style={{ color: "#FFD93D" }}>ton enfant</span>
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Douas, histoires, conseils et activités — adapté dès 3 ans.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Ton prénom (optionnel)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              <input
                type="email"
                required
                placeholder="Ton adresse email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              <label className="flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded accent-white"
                />
                <span className="text-xs text-white/50">
                  J&apos;accepte de recevoir le guide et des ressources par email (RGPD).
                </span>
              </label>

              {error && (
                <p className="rounded-lg p-2 text-xs text-white" style={{ background: "#FF6B6B" }}>
                  Une erreur est survenue. Réessayez.
                </p>
              )}

              <div className="flex gap-3 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)" }}
                >
                  {loading ? "Envoi..." : "Recevoir mon guide gratuit"}
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl border border-white/20 px-4 py-3 text-sm font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Non merci
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-xs text-white/30">
              &#128274; Aucun spam — désinscription en 1 clic
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
