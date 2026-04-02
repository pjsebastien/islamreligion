import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import { SocialBanner } from "@/components/SocialLinks";
import QuizAnimaux from "@/components/QuizAnimaux";
import { chapters } from "@/data/quizAnimauxCoran";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Quiz animaux du Coran : 30 questions pour enfants (6-12 ans)",
  description:
    "Quiz interactif sur les animaux mentionnés dans le Coran pour les enfants de 6 à 12 ans. 30 questions avec explications, inspirées du livre Le Grand Voyage d'Adam. Gratuit !",
  openGraph: {
    title:
      "Quiz animaux du Coran : 30 questions pour enfants (6-12 ans)",
    description:
      "Découvre les 10 animaux du Coran à travers 30 questions amusantes avec explications. L'abeille, la fourmi, le loup, le chameau, la baleine et bien d'autres !",
    url: "https://www.islamreligion.fr/quizz-animaux-coran",
    images: [
      {
        url: "/images/coran-ouvert-chapelet-bois-islam-versets.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/quizz-animaux-coran",
  },
};

const faqItems = [
  {
    question: "À quel âge un enfant peut-il faire ce quiz ?",
    answer:
      "Ce quiz est conçu pour les enfants de 6 à 12 ans. Les plus jeunes (6-8 ans) peuvent le faire avec l'aide d'un parent qui lit les questions, tandis que les plus grands (9-12 ans) peuvent jouer en autonomie. Chaque réponse est accompagnée d'une explication simple et enrichissante.",
  },
  {
    question: "Combien de questions contient le quiz ?",
    answer:
      "Le quiz contient 30 questions réparties en 10 chapitres, un par animal. Chaque chapitre comporte 3 questions avec 3 choix de réponse et une explication après chaque réponse pour apprendre en s'amusant.",
  },
  {
    question: "Quels animaux sont mentionnés dans le Coran ?",
    answer:
      "Le Coran mentionne de nombreux animaux. Ce quiz couvre 10 d'entre eux : l'abeille (An-Nahl), la fourmi (An-Naml), le loup (histoire de Youssouf), le chameau, la huppe (Hudhud), la baleine (histoire de Younous), la vache (Al-Baqara), l'éléphant (Al-Fil), le serpent (histoire de Moussa) et le chien (Ashab al-Kahf).",
  },
  {
    question: "Le quiz est-il gratuit ?",
    answer:
      "Oui, le quiz est entièrement gratuit. Il suffit de renseigner une adresse email pour y accéder. Cette adresse permet de recevoir des ressources éducatives islamiques pour vos enfants.",
  },
  {
    question:
      "Ce quiz est-il lié au livre Le Grand Voyage d'Adam ?",
    answer:
      "Oui, les questions sont inspirées du livre « Le Grand Voyage d'Adam et les Animaux du Coran » de La Maison d'Adam. Le quiz permet de réviser les leçons du livre de manière ludique et interactive.",
  },
];

export default function QuizAnimauxCoranPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.islamreligion.fr/quizz-animaux-coran/#webpage",
        url: "https://www.islamreligion.fr/quizz-animaux-coran",
        name: "Quiz animaux du Coran : 30 questions pour enfants",
        description:
          "Quiz interactif sur les animaux mentionnés dans le Coran pour les enfants de 6 à 12 ans.",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/quizz-animaux-coran/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.islamreligion.fr",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Quiz animaux du Coran",
            item: "https://www.islamreligion.fr/quizz-animaux-coran",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero
          title="Quiz : Les Animaux du Coran"
          subtitle="30 questions amusantes pour découvrir les animaux mentionnés dans le Coran et les belles leçons qu'ils nous enseignent. Adapté aux enfants de 6 à 12 ans !"
          imageSrc="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
          imageAlt="Coran ouvert — quiz animaux du Coran pour enfants"
          compact
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Breadcrumb */}
          <nav
            className="mb-8 text-sm text-foreground-secondary"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-primary">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">
              Quiz animaux du Coran
            </span>
          </nav>

          {/* Intro */}
          <div className="mb-10 max-w-3xl">
            <div className="rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/5 to-accent p-6 lg:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary">
                <svg
                  className="h-5 w-5 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                À propos de ce quiz
              </h2>
              <ul className="ml-5 space-y-2 text-base leading-relaxed text-foreground list-disc marker:text-secondary">
                <li>
                  <strong>30 questions</strong> réparties en 10
                  chapitres — un par animal du Coran
                </li>
                <li>
                  Chaque réponse est accompagnée d&apos;une{" "}
                  <strong>explication</strong> pour apprendre en
                  s&apos;amusant
                </li>
                <li>
                  Inspiré du livre{" "}
                  <em>
                    Le Grand Voyage d&apos;Adam et les Animaux du
                    Coran
                  </em>{" "}
                  de La Maison d&apos;Adam
                </li>
                <li>
                  Adapté aux enfants de{" "}
                  <strong>6 à 12 ans</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Quiz component */}
          <section id="quiz" className="mb-16 scroll-mt-24">
            <QuizAnimaux />
          </section>

          {/* Les 10 animaux */}
          <section className="mb-16 max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
              Les 10 animaux du Coran
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-foreground">
              Le Coran mentionne de nombreux animaux pour nous
              transmettre des leçons de vie. Chaque animal a une
              histoire unique et un enseignement précieux. Voici les 10
              animaux abordés dans ce quiz :
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {chapters.map((ch) => (
                <div
                  key={ch.animal}
                  className="flex items-start gap-3 rounded-xl border border-border bg-accent p-4"
                >
                  <span className="text-3xl">{ch.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-primary">
                      {ch.animal}
                    </h3>
                    <p className="text-sm text-foreground-secondary">
                      {ch.theme}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SocialBanner />

          {/* SEO — All questions and answers in static HTML */}
          <section className="mb-16 max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
              Toutes les questions et réponses
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-foreground">
              Retrouvez ci-dessous l&apos;ensemble des 30 questions du
              quiz avec les bonnes réponses et les explications pour
              chaque animal du Coran.
            </p>

            <div className="space-y-8">
              {chapters.map((ch) => (
                <div key={ch.animal}>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                    <span className="text-2xl">{ch.emoji}</span>
                    {ch.animal} — {ch.theme}
                  </h3>
                  <div className="space-y-4 pl-2">
                    {ch.questions.map((q, qi) => (
                      <div
                        key={qi}
                        className="rounded-xl border border-border bg-accent p-4"
                      >
                        <p className="font-medium text-foreground">
                          {qi + 1}. {q.question}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-green-700">
                          Réponse : {q.options[q.correctIndex]}
                        </p>
                        <p className="mt-1 text-sm text-foreground-secondary">
                          {q.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 max-w-3xl scroll-mt-24">
            <FaqSection items={faqItems} />
          </section>

          {/* Internal links */}
          <section className="max-w-3xl">
            <h2 className="mb-4 text-xl font-bold text-primary">
              Découvrir aussi
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/quizz-islam-enfant"
                className="rounded-xl border border-border bg-accent p-4 text-sm font-medium text-foreground transition-colors hover:border-secondary hover:text-primary"
              >
                Quiz islam enfant (3 niveaux)
              </Link>
              <Link
                href="/guide-douas-famille"
                className="rounded-xl border border-border bg-accent p-4 text-sm font-medium text-foreground transition-colors hover:border-secondary hover:text-primary"
              >
                Guide des 10 douas en famille
              </Link>
              <Link
                href="/doua-islam"
                className="rounded-xl border border-border bg-accent p-4 text-sm font-medium text-foreground transition-colors hover:border-secondary hover:text-primary"
              >
                Doua en islam
              </Link>
              <Link
                href="/hadith-du-jour"
                className="rounded-xl border border-border bg-accent p-4 text-sm font-medium text-foreground transition-colors hover:border-secondary hover:text-primary"
              >
                Hadith du jour
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
