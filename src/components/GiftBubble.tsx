"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function GiftBubble() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Don't show on the guide page itself
    if (window.location.pathname === "/guide-douas-famille") return;
    if (window.location.pathname === "/telechargement-guide") return;

    setReady(true);

    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded bubble */}
      {showBubble && !dismissed && (
        <div
          className="animate-in slide-in-from-bottom-4 fade-in relative w-72 rounded-2xl p-4 shadow-2xl sm:w-80"
          style={{
            background: "linear-gradient(135deg, #1A1A4E, #2D2D7A)",
            animation: "slideUp 0.4s ease-out",
          }}
        >
          {/* Close */}
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-2 top-2 rounded-lg p-1 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Fermer"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-start gap-3">
            <span className="text-3xl">&#127873;</span>
            <div>
              <p className="text-sm font-bold text-white">
                PDF gratuit pour ta famille !
              </p>
              <p className="mt-1 text-xs text-white/60">
                10 douas essentielles à apprendre avec tes enfants dès 3 ans.
              </p>
              <Link
                href="/guide-douas-famille"
                className="mt-3 inline-block rounded-lg px-4 py-2 text-xs font-bold text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)" }}
              >
                Télécharger gratuitement
              </Link>
            </div>
          </div>

          {/* Arrow pointing to icon */}
          <div
            className="absolute -bottom-2 right-6 h-4 w-4 rotate-45"
            style={{ background: "#2D2D7A" }}
          />
        </div>
      )}

      {/* Gift icon — always visible once ready */}
      <button
        onClick={() => {
          if (dismissed) {
            setDismissed(false);
            setShowBubble(true);
          }
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
          boxShadow: "0 4px 20px rgba(255, 107, 107, 0.4)",
        }}
        aria-label="Guide PDF gratuit"
      >
        <span className="text-2xl">&#127873;</span>
      </button>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
