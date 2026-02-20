"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Petit délai pour ne pas bloquer le rendu initial
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white px-5 py-4 shadow-lg sm:flex sm:items-center sm:gap-4">
        <p className="text-sm leading-relaxed text-foreground-secondary">
          Ce site utilise des cookies pour améliorer votre expérience et
          analyser le trafic.{" "}
          <Link
            href="/mentions-legales"
            className="font-medium text-primary underline decoration-secondary/40 underline-offset-2 hover:decoration-secondary"
          >
            En savoir plus
          </Link>
        </p>
        <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
          <button
            onClick={refuse}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground-secondary transition-colors hover:bg-background-alt"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-light"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
