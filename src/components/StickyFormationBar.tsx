"use client";

import { useState, useEffect } from "react";

export default function StickyFormationBar() {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [hiddenByCta, setHiddenByCta] = useState(false);

  useEffect(() => {
    // Restore collapsed state
    if (sessionStorage.getItem("sticky-bar-collapsed") === "1") {
      setCollapsed(true);
    }

    // Show after 5s
    const timer = setTimeout(() => setVisible(true), 5000);

    const handleScroll = () => {
      // Show after scrolling past 400px
      if (window.scrollY > 400) {
        setVisible(true);
      }

      // Hide when near the final CTA section
      const finalCta = document.querySelector("section.rounded-2xl.bg-primary");
      if (finalCta) {
        const rect = finalCta.getBoundingClientRect();
        setHiddenByCta(rect.top < window.innerHeight + 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCollapse = () => {
    const next = !collapsed;
    setCollapsed(next);
    sessionStorage.setItem("sticky-bar-collapsed", next ? "1" : "0");
  };

  if (!visible || hiddenByCta) return null;

  // Check if CookieBanner might be visible
  const hasCookieConsent = typeof window !== "undefined" && localStorage.getItem("cookie-consent");

  return (
    <div
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        !hasCookieConsent ? "bottom-20 sm:bottom-16" : "bottom-0"
      }`}
    >
      {collapsed ? (
        /* Collapsed: small tab */
        <div className="flex justify-end px-4 pb-3">
          <button
            type="button"
            onClick={toggleCollapse}
            className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-secondary-dark"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            Formations
          </button>
        </div>
      ) : (
        /* Expanded: full bar */
        <div className="border-t border-border bg-white/95 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
            <p className="hidden text-sm font-medium text-foreground sm:block">
              Apprenez à lire l&apos;arabe en moins de 30 jours
            </p>
            <p className="text-sm font-medium text-foreground sm:hidden">
              Formation arabe en ligne
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href="#objectif-lire"
                className="rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
              >
                Découvrir la formation
              </a>
              <button
                type="button"
                onClick={toggleCollapse}
                className="rounded-lg p-2 text-foreground-secondary transition-colors hover:bg-accent"
                aria-label="Réduire"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
