import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Télécharge ton guide : 10 douas essentielles en famille",
  description:
    "Télécharge gratuitement le guide PDF des 10 douas essentielles pour éduquer ton enfant dans l'islam. Par La Maison d'Adam.",
  robots: { index: false, follow: false },
};

const PDF_URL = "/pdf/guide_douas_premium.pdf.pdf";

export default function TelechargementGuidePage() {
  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(180deg, #1A1A4E 0%, #2D2D7A 40%, #1A1A4E 100%)" }}>
      {/* Decorative */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-10" style={{ background: "#FFD93D" }} />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full opacity-10" style={{ background: "#4ECDC4" }} />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
        {/* Success icon */}
        <div
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-full"
          style={{ background: "#6BCB77" }}
        >
          <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Jazak Allah Khayran ! <span className="text-3xl">&#127769;</span>
        </h1>

        <p className="mt-4 text-lg text-white/80">
          Ton guide est prêt. Clique sur le bouton ci-dessous pour le télécharger.
        </p>

        {/* Book cover */}
        <div className="relative my-8">
          <div
            className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
            style={{ background: "#9B59B6" }}
          />
          <Image
            src="/images/book-pdf-cover.png"
            alt="Couverture du guide : 10 douas essentielles pour éduquer ton enfant dans l'islam"
            width={260}
            height={325}
            className="relative z-10 drop-shadow-2xl"
            priority
          />
        </div>

        {/* Download button */}
        <a
          href={PDF_URL}
          download="Guide-10-Douas-Essentielles-La-Maison-dAdam.pdf"
          className="inline-flex items-center gap-3 rounded-xl px-10 py-5 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)" }}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Télécharger mon guide PDF
        </a>

        <p className="mt-6 text-sm text-white/50">
          Format PDF — compatible tous appareils
        </p>

        {/* Divider */}
        <div className="my-10 h-px w-full max-w-xs" style={{ background: "rgba(255,255,255,0.15)" }} />

        {/* Explore more */}
        <p className="text-white/60">
          Envie d&apos;aller plus loin ?
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="/doua-islam"
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
            style={{ background: "rgba(78, 205, 196, 0.2)", border: "1px solid rgba(78, 205, 196, 0.3)" }}
          >
            Toutes les douas
          </a>
          <a
            href="/hadith-du-jour"
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
            style={{ background: "rgba(155, 89, 182, 0.2)", border: "1px solid rgba(155, 89, 182, 0.3)" }}
          >
            Hadith du jour
          </a>
          <a
            href="/quizz-islam-enfant"
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
            style={{ background: "rgba(255, 217, 61, 0.2)", border: "1px solid rgba(255, 217, 61, 0.3)" }}
          >
            Quiz islam enfant
          </a>
        </div>
      </div>
    </main>
  );
}
