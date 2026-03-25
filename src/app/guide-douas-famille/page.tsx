import type { Metadata } from "next";
import LeadForm from "./LeadForm";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Guide gratuit : 10 douas essentielles pour éduquer ton enfant dans l'islam",
  description:
    "Télécharge gratuitement le guide PDF des 10 douas essentielles pour éduquer ton enfant dans l'islam. Douas, histoires, conseils et activités pour toute la famille.",
  openGraph: {
    title: "Guide gratuit : 10 douas essentielles pour ton enfant",
    description:
      "Un guide simple et ludique pour apprendre les douas en famille dès 3 ans. Téléchargement immédiat et gratuit.",
    url: "https://www.islamreligion.fr/guide-douas-famille",
    images: [
      {
        url: "/images/book-pdf-cover.png",
        width: 800,
        height: 1000,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/guide-douas-famille",
  },
};

const benefits = [
  {
    icon: "📖",
    title: "10 douas essentielles",
    desc: "Les invocations les plus importantes à enseigner à ton enfant, avec texte arabe et traduction",
  },
  {
    icon: "📚",
    title: "Histoires illustrées",
    desc: "Des récits captivants pour donner vie à chaque doua et marquer la mémoire de ton enfant",
  },
  {
    icon: "💡",
    title: "Conseils pratiques",
    desc: "Des astuces testées par des parents pour intégrer les douas au quotidien familial",
  },
  {
    icon: "🎨",
    title: "Activités ludiques",
    desc: "Coloriages, jeux et exercices pour apprendre en s'amusant, dès 3 ans",
  },
];

const douas = [
  "Doua avant de manger",
  "Doua avant de dormir",
  "Doua en entrant aux toilettes",
  "Doua en sortant de la maison",
  "Doua pour les parents",
  "Doua en montant en voiture",
  "Doua avant d'étudier",
  "Doua de protection (Al-Mu'awwidhat)",
  "Doua en se réveillant",
  "Doua en entrant à la mosquée",
];

const testimonials = [
  {
    name: "Fatima, maman de 3 enfants",
    text: "Mes enfants adorent les histoires du guide ! Maintenant ils récitent les douas tout seuls avant de manger.",
  },
  {
    name: "Youssef, papa de 2 enfants",
    text: "Enfin un support adapté aux petits. Les activités sont très bien pensées et mes enfants en redemandent.",
  },
  {
    name: "Aisha, maman de 4 enfants",
    text: "Le guide est devenu notre rituel du soir. On lit une doua par semaine et toute la famille participe.",
  },
];

export default function GuideDouasFamillePage() {
  return (
    <main className="min-h-screen">
      {/* ============================================ */}
      {/* HERO — Couverture + texte */}
      {/* ============================================ */}
      <section
        className="relative overflow-hidden py-16 lg:py-24"
        style={{ background: "linear-gradient(135deg, #1A1A4E 0%, #2D2D7A 50%, #1A1A4E 100%)" }}
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-10" style={{ background: "#FFD93D" }} />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full opacity-10" style={{ background: "#4ECDC4" }} />
          <div className="absolute left-1/2 top-10 h-40 w-40 rounded-full opacity-5" style={{ background: "#FF6B6B" }} />
          <div className="absolute left-[15%] top-[20%] text-2xl opacity-30">&#9734;</div>
          <div className="absolute right-[20%] top-[15%] text-lg opacity-20">&#9734;</div>
          <div className="absolute left-[70%] top-[70%] text-xl opacity-25">&#9734;</div>
          <div className="absolute right-[8%] top-[8%] text-4xl opacity-20">&#9790;</div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">
              <span
                className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider"
                style={{ background: "#FFD93D", color: "#1A1A4E" }}
              >
                Gratuit — Téléchargement immédiat
              </span>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                10 douas essentielles pour{" "}
                <span style={{ color: "#FFD93D" }}>éduquer ton enfant</span>{" "}
                dans l&apos;islam
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-white/80 lg:text-xl">
                Un guide <strong className="text-white">simple et ludique</strong> pour apprendre
                les invocations en famille.{" "}
                <span style={{ color: "#4ECDC4" }}>Douas, histoires, conseils et activités</span> —
                adapté dès 3 ans.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "#6BCB77" }}>&#10003;</span> Texte arabe + traduction
                </span>
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "#6BCB77" }}>&#10003;</span> Méthode testée par des parents
                </span>
                <span className="flex items-center gap-1.5">
                  <span style={{ color: "#6BCB77" }}>&#10003;</span> 100% gratuit
                </span>
              </div>
            </div>

            {/* Right: Book cover */}
            <div className="relative flex-shrink-0">
              <div
                className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl"
                style={{ background: "#9B59B6" }}
              />
              <Image
                src="/images/book-pdf-cover.png"
                alt="Couverture du guide : 10 douas essentielles pour éduquer ton enfant dans l'islam — La Maison d'Adam"
                width={380}
                height={475}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FORMULAIRE — juste sous le hero */}
      {/* ============================================ */}
      <section
        id="formulaire"
        className="scroll-mt-20 border-b py-12"
        style={{ background: "#FFFBF5", borderColor: "#FFD93D40" }}
      >
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <h2
            className="mb-2 text-center text-2xl font-extrabold sm:text-3xl"
            style={{ color: "#1A1A4E" }}
          >
            Reçois ton guide{" "}
            <span style={{ color: "#FF6B6B" }}>gratuitement</span>
          </h2>
          <p className="mb-6 text-center text-sm text-foreground-secondary">
            Entre ton email et reçois le PDF dans ta boîte mail en quelques secondes.
          </p>

          <div className="rounded-2xl border-2 bg-white p-6 shadow-lg sm:p-8" style={{ borderColor: "#4ECDC440" }}>
            <LeadForm variant="light" />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-foreground-secondary">
            <span>&#128274; Données protégées</span>
            <span>&#10005; Aucun spam</span>
            <span>&#128231; Désinscription en 1 clic</span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOCIAL PROOF BAR */}
      {/* ============================================ */}
      <section
        className="border-b py-4"
        style={{ background: "#FFFBF5", borderColor: "#FFD93D40" }}
      >
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 px-4 text-sm font-medium sm:gap-10"
          style={{ color: "#1A1A4E" }}
        >
          <span className="flex items-center gap-2">
            <span className="text-xl">&#11088;</span> Par La Maison d&apos;Adam
          </span>
          <span className="flex items-center gap-2">
            <span className="text-xl">&#128106;</span> +500 familles
          </span>
          <span className="flex items-center gap-2">
            <span className="text-xl">&#128214;</span> Format PDF
          </span>
          <span className="flex items-center gap-2">
            <span className="text-xl">&#127775;</span> Dès 3 ans
          </span>
        </div>
      </section>

      {/* ============================================ */}
      {/* BENEFITS */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20" style={{ background: "#FFFBF5" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2
            className="mb-4 text-center text-2xl font-extrabold sm:text-3xl lg:text-4xl"
            style={{ color: "#1A1A4E" }}
          >
            Ce que contient le guide
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-foreground-secondary">
            Tout ce dont ta famille a besoin pour apprendre les douas ensemble, de manière joyeuse et mémorable.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border-2 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "#4ECDC440" }}
              >
                <div className="mb-3 text-4xl">{b.icon}</div>
                <h3
                  className="mb-2 text-lg font-bold"
                  style={{ color: "#1A1A4E" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DOUAS LIST */}
      {/* ============================================ */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "linear-gradient(180deg, #FFFBF5 0%, #F0F7FF 100%)" }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-4 text-center text-2xl font-extrabold sm:text-3xl"
            style={{ color: "#1A1A4E" }}
          >
            Les 10 douas du guide
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-foreground-secondary">
            Des invocations du quotidien que chaque enfant musulman devrait connaître.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {douas.map((d, i) => (
              <div
                key={d}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                style={{ borderLeft: "4px solid", borderColor: i % 2 === 0 ? "#4ECDC4" : "#9B59B6" }}
              >
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: i % 2 === 0 ? "#4ECDC4" : "#9B59B6" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm font-medium" style={{ color: "#1A1A4E" }}>
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA INTERMÉDIAIRE */}
      {/* ============================================ */}
      <section
        className="py-12 text-center"
        style={{ background: "linear-gradient(135deg, #1A1A4E 0%, #2D2D7A 100%)" }}
      >
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl">
            Convaincu(e) ?
          </h2>
          <p className="mb-6 text-white/70">
            Reçois le guide gratuitement dans ta boîte mail.
          </p>
          <a
            href="#formulaire"
            className="inline-block rounded-xl px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)" }}
          >
            Recevoir mon guide gratuit &#8593;
          </a>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20" style={{ background: "#FFFBF5" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2
            className="mb-10 text-center text-2xl font-extrabold sm:text-3xl"
            style={{ color: "#1A1A4E" }}
          >
            Ce que disent les parents
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white p-6 shadow-sm"
                style={{ borderTop: "4px solid #FFD93D" }}
              >
                <div className="mb-3 flex gap-1 text-lg" style={{ color: "#FFD93D" }}>
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="mb-4 text-sm leading-relaxed text-foreground-secondary italic">
                  &laquo;&nbsp;{t.text}&nbsp;&raquo;
                </p>
                <p className="text-sm font-semibold" style={{ color: "#1A1A4E" }}>
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section
        className="py-12 text-center"
        style={{ background: "linear-gradient(135deg, #4ECDC4, #3DBDB5)" }}
      >
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl">
            Prêt(e) à commencer ?
          </h2>
          <p className="mb-6 text-white/80">
            Rejoins +500 familles qui utilisent déjà le guide au quotidien.
          </p>
          <a
            href="#formulaire"
            className="inline-block rounded-xl px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E8E)" }}
          >
            Télécharger le guide gratuit
          </a>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEO CONTENT */}
      {/* ============================================ */}
      <section className="py-12" style={{ background: "#FFFBF5" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            className="mb-4 text-xl font-bold"
            style={{ color: "#1A1A4E" }}
          >
            Pourquoi enseigner les douas à ses enfants ?
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary">
            <p>
              Les douas (invocations) font partie intégrante de la vie du musulman. Enseigner les douas du quotidien à ses enfants dès le plus jeune âge, c&apos;est leur transmettre un lien direct avec Allah et leur donner des repères spirituels solides pour toute la vie.
            </p>
            <p>
              Le Prophète Muhammad &#xFDFA; encourageait les parents à éduquer leurs enfants dans la foi. Apprendre une doua avant de manger, avant de dormir ou en sortant de la maison devient un réflexe naturel qui ancre la conscience d&apos;Allah dans chaque moment du quotidien.
            </p>
            <p>
              Ce guide a été conçu par <strong>La Maison d&apos;Adam</strong> pour accompagner les familles musulmanes francophones dans cette belle mission éducative. Chaque doua est présentée avec le texte arabe, la translittération et la traduction française, accompagnée d&apos;une histoire et d&apos;une activité adaptée aux enfants dès 3 ans.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
