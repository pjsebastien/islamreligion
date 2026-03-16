"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
}

const navItems: NavItem[] = [
  { href: "/", label: "Accueil" },
  {
    label: "Apprendre",
    children: [
      { href: "/apprendre-larabe", label: "Apprendre l'arabe" },
      { href: "/apprendre-le-coran", label: "Apprendre le Coran" },
      { href: "/formation-arabe-en-ligne", label: "Formations arabe en ligne" },
    ],
  },
  {
    label: "Guides",
    children: [
      { href: "/doua-islam", label: "Doua en islam" },
      { href: "/hadith-du-jour", label: "Hadith du jour" },
      { href: "/reves-islam", label: "Rêves en islam" },
      { href: "/quizz-islam-enfant", label: "Quiz islam enfant" },
      { href: "/remede-arabe", label: "Remèdes arabes" },
      { href: "/fin-monde-islam-preparation", label: "Fin des temps" },
    ],
  },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-border bg-white py-2 shadow-lg">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/favicon-islam.ico"
              alt="IslamReligion.fr - Comprendre l'islam"
              width={32}
              height={32}
              className="h-8 w-8 lg:h-9 lg:w-9"
            />
            <span className="text-xl font-bold text-primary lg:text-2xl">
              Islam<span className="text-secondary">Religion</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Bouton mobile */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-accent lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="border-t border-border pb-4 lg:hidden">
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openMobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {openMobileDropdown === item.label && (
                      <div className="ml-4 flex flex-col gap-1 border-l-2 border-secondary/20 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-lg px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
