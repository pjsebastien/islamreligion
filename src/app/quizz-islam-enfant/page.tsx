import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";
import QuizGame from "@/components/QuizGame";
import { levels } from "@/data/quizQuestions";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Quiz islam enfant : teste tes connaissances en t'amusant",
  description:
    "Quiz islamique interactif pour enfants avec 3 niveaux de difficulté. 22 questions avec explications, score et récompenses. Apprends l'islam en t'amusant !",
  openGraph: {
    title: "Quiz islam enfant : teste tes connaissances en t'amusant",
    description:
      "Quiz islamique interactif pour enfants : 3 niveaux, 22 questions avec explications détaillées, score et certificat. Gratuit et ludique.",
    url: "https://www.islamreligion.fr/quizz-islam-enfant",
    images: [
      {
        url: "/images/quizz-islam/enfants-quizz-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/quizz-islam-enfant",
  },
};

const tocItems = [
  { id: "quiz", label: "Jouer au quiz" },
  { id: "pourquoi", label: "Pourquoi un quiz islamique ?" },
  { id: "niveaux", label: "Les 3 niveaux" },
  { id: "conseils", label: "Conseils pour les parents" },
  { id: "toutes-les-questions", label: "Questions et réponses" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "À partir de quel âge un enfant peut-il faire ce quiz ?",
    answer:
      "Le niveau 1 (Petit musulman) est adapté dès 6 ans avec l'aide d'un parent. Le niveau 2 convient aux enfants de 9-12 ans et le niveau 3 aux adolescents de 13 ans et plus. Chaque réponse est accompagnée d'une explication pédagogique pour apprendre en jouant.",
  },
  {
    question: "Combien de questions contient le quiz ?",
    answer:
      "Le quiz contient 22 questions réparties en 3 niveaux : 6 questions pour le niveau Débutant, 8 pour le niveau Intermédiaire et 8 pour le niveau Avancé. Chaque question propose 4 choix et une explication après la réponse.",
  },
  {
    question: "Le quiz est-il gratuit ?",
    answer:
      "Oui, le quiz est entièrement gratuit. Le niveau 1 est accessible directement. Pour débloquer les niveaux 2 et 3, il suffit de renseigner une adresse email après avoir terminé le premier niveau.",
  },
  {
    question: "Les questions sont-elles basées sur le Coran et la Sunna ?",
    answer:
      "Toutes les questions et explications s'appuient sur des sources authentiques : le Coran, les hadiths du Prophète Muhammad ﷺ (Sahih Al-Bukhari, Sahih Muslim) et les enseignements reconnus par les savants musulmans.",
  },
  {
    question: "Peut-on refaire le quiz plusieurs fois ?",
    answer:
      "Bien sûr ! Vous pouvez refaire chaque niveau autant de fois que vous le souhaitez pour améliorer votre score. C'est d'ailleurs recommandé : la répétition est l'une des meilleures méthodes d'apprentissage.",
  },
  {
    question:
      "Comment utiliser ce quiz pour enseigner l'islam aux enfants ?",
    answer:
      "Faites le quiz avec votre enfant en lisant les questions ensemble. Après chaque réponse, prenez le temps de discuter de l'explication. Vous pouvez aussi utiliser les thèmes abordés (piliers de l'islam, prophètes, Coran) comme point de départ pour des discussions plus approfondies.",
  },
];

export default function QuizIslamEnfantPage() {
  /* JSON-LD */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Quiz islam enfant : teste tes connaissances en t'amusant",
        description:
          "Quiz islamique interactif pour enfants avec 3 niveaux de difficulté, explications et score.",
        url: "https://www.islamreligion.fr/quizz-islam-enfant",
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Quiz islam enfant",
            item: "https://www.islamreligion.fr/quizz-islam-enfant",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
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

      <Hero
        title="Quiz islam pour enfant"
        subtitle="Teste tes connaissances sur l'islam avec notre quiz interactif. 3 niveaux de difficulté, des explications après chaque réponse et des récompenses à débloquer."
        imageSrc="/images/quizz-islam/enfants-quizz-islam.jpg"
        imageAlt="Deux enfants qui répondent à un quiz sur l'islam"
        compact
      />

      {/* Fil d'Ariane */}
      <div className="border-b border-border bg-accent/50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-foreground-secondary">
            <Link href="/" className="hover:text-primary">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-foreground">Quiz islam enfant</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10 xl:grid-cols-[300px_1fr] xl:gap-14">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />

              <div className="mt-8 rounded-xl border border-border bg-accent p-5">
                <p className="text-sm font-semibold text-primary">
                  Le savais-tu ?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  Le Prophète Muhammad ﷺ a dit : <em>&laquo;&nbsp;Celui qui emprunte un chemin à la recherche de la science, Allah lui facilite un chemin vers le Paradis&nbsp;&raquo;</em> (Sahih Muslim).
                </p>
              </div>
            </div>
          </aside>

          {/* Contenu principal */}
          <article className="min-w-0">
            {/* Résumé */}
            <div className="mb-10 rounded-xl border-l-4 border-secondary bg-secondary/5 p-6">
              <h2 className="text-lg font-bold text-primary">
                En résumé
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground">
                <li>
                  <strong>22 questions</strong> réparties en 3 niveaux de difficulté
                </li>
                <li>
                  <strong>Explications détaillées</strong> après chaque réponse avec sources
                </li>
                <li>
                  <strong>Adapté de 6 à 16 ans</strong> — jouable seul ou en famille
                </li>
                <li>
                  <strong>Gratuit et sans pub</strong> — concentrez-vous sur l&apos;apprentissage
                </li>
              </ul>
            </div>

            {/* ============================================ */}
            {/* QUIZ INTERACTIF */}
            {/* ============================================ */}
            <section id="quiz" className="scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                Jouer au quiz islamique
              </h2>
              <p className="mb-6 text-base leading-relaxed text-foreground">
                Choisis ton niveau et réponds aux questions. Chaque bonne réponse te rapporte un point. À la fin, tu découvriras ton score et pourras débloquer les niveaux suivants.
              </p>

              <QuizGame />
            </section>

            {/* Image illustrative */}
            <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/images/quizz-islam/exemple-question-quizz-islam.jpg"
                alt="Exemple de question du quiz sur l'islam pour les enfants"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
            </div>

            {/* ============================================ */}
            {/* POURQUOI CE QUIZ */}
            {/* ============================================ */}
            <section id="pourquoi" className="mt-14 scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                Pourquoi un quiz sur l&apos;islam pour les enfants ?
              </h2>

              <div className="prose prose-lg prose-green max-w-none">
                <p>
                  Apprendre sa religion dès le plus jeune âge est une responsabilité que chaque parent musulman prend au sérieux. Mais comment transmettre des connaissances parfois complexes à un enfant de 6, 8 ou 12 ans ? Le jeu est l&apos;un des meilleurs vecteurs d&apos;apprentissage.
                </p>

                <p>
                  Ce quiz islamique a été conçu pour rendre l&apos;apprentissage ludique et progressif. Plutôt que de simplement lire un livre ou écouter un cours, l&apos;enfant participe activement : il réfléchit, choisit une réponse, puis découvre l&apos;explication avec la source (Coran ou hadith). Cette approche active favorise la mémorisation à long terme.
                </p>

                <p>
                  Allah dit dans le Coran : <em>&laquo;&nbsp;Ô vous qui avez cru, préservez vos personnes et vos familles d&apos;un Feu&nbsp;&raquo;</em> (sourate At-Tahrim, verset 6). Les savants ont expliqué que &laquo;&nbsp;préserver sa famille&nbsp;&raquo; passe notamment par l&apos;éducation religieuse des enfants.
                </p>
              </div>
            </section>

            {/* Image règles */}
            <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/images/quizz-islam/regles-quizz-islam-enfant.jpg"
                alt="Règles du quiz sur l'islam pour les enfants"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
            </div>

            {/* ============================================ */}
            {/* LES 3 NIVEAUX */}
            {/* ============================================ */}
            <section id="niveaux" className="mt-14 scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                Les 3 niveaux du quiz
              </h2>

              <div className="space-y-6">
                {/* Niveau 1 */}
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-xl">⭐</span>
                    <h3 className="text-lg font-bold text-primary">
                      Niveau 1 — Petit musulman (dès 6 ans)
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    Six questions sur les fondamentaux : les piliers de l&apos;islam, le Coran, les formules quotidiennes (Bismillah, Alhamdoulillah), les prières et le Prophète Muhammad ﷺ. Un bon point de départ pour les plus jeunes qui découvrent leur religion.
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Thèmes : piliers de l&apos;islam, Coran, prière, Ramadan, Prophète ﷺ
                  </p>
                </div>

                {/* Niveau 2 */}
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-xl">🌙</span>
                    <h3 className="text-lg font-bold text-primary">
                      Niveau 2 — Apprenti savant (9-12 ans)
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    Huit questions plus poussées : le nombre de sourates, les détails de la prière (rak&apos;at, qibla), la shahada, le Hajj et les piliers de la foi. Pour ceux qui veulent aller au-delà des bases et approfondir leurs connaissances.
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Thèmes : sourates du Coran, salat, shahada, Hajj, piliers de la foi
                  </p>
                </div>

                {/* Niveau 3 */}
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-xl">🏆</span>
                    <h3 className="text-lg font-bold text-primary">
                      Niveau 3 — Graine de savant (13 ans et +)
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    Huit questions avancées : la biographie du Prophète ﷺ, les anges, les sourates du Coran, la zakat, les sciences du hadith (isnad), le calendrier hégirien, Laylat al-Qadr et les prophètes mentionnés dans le Coran. Le vrai test pour les connaisseurs.
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Thèmes : sira, anges, zakat, sciences du hadith, calendrier islamique, prophètes
                  </p>
                </div>
              </div>
            </section>

            <ArticleCTA
              variant="lire-aussi"
              title="Hadith du jour : les paroles du Prophète ﷺ"
              description="Découvre chaque jour un hadith authentique avec texte arabe, traduction et explication."
              href="/hadith-du-jour"
              linkText="Lire les hadiths"
            />

            {/* ============================================ */}
            {/* CONSEILS PARENTS */}
            {/* ============================================ */}
            <section id="conseils" className="mt-14 scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                Conseils pour les parents
              </h2>

              <div className="prose prose-lg prose-green max-w-none">
                <p>
                  Voici quelques recommandations pour tirer le meilleur parti de ce quiz avec vos enfants :
                </p>

                <ul>
                  <li>
                    <strong>Faites le quiz ensemble.</strong> Asseyez-vous avec votre enfant et lisez les questions à voix haute. Discutez de chaque réponse, même si elle est correcte. L&apos;échange est aussi important que le score.
                  </li>
                  <li>
                    <strong>Ne mettez pas la pression.</strong> L&apos;objectif est d&apos;apprendre, pas d&apos;avoir un score parfait. Si votre enfant se trompe, c&apos;est une occasion d&apos;apprendre quelque chose de nouveau. Valorisez l&apos;effort plutôt que le résultat.
                  </li>
                  <li>
                    <strong>Approfondissez les sujets.</strong> Chaque question aborde un thème (prière, Coran, prophètes...). Utilisez-les comme point de départ pour des discussions plus riches. Par exemple, après une question sur le Ramadan, racontez vos propres souvenirs de ce mois béni.
                  </li>
                  <li>
                    <strong>Refaites le quiz régulièrement.</strong> La répétition espacée est l&apos;une des techniques d&apos;apprentissage les plus efficaces. Refaire le quiz une semaine plus tard aide à ancrer les connaissances dans la mémoire à long terme.
                  </li>
                  <li>
                    <strong>Adaptez à l&apos;âge.</strong> Pour un enfant de 6-7 ans, le niveau 1 suffit amplement. Ne forcez pas les niveaux supérieurs : chaque enfant progresse à son rythme. Le Prophète ﷺ a dit : <em>&laquo;&nbsp;Facilitez et ne rendez pas les choses difficiles&nbsp;&raquo;</em> (Sahih Al-Bukhari).
                  </li>
                </ul>
              </div>
            </section>

            <AffiliateForm
              title="Apprenez l'arabe et le Coran en ligne"
              description="Rejoignez des milliers d'étudiants qui apprennent l'arabe classique et la lecture du Coran avec des professeurs qualifiés."
              preselect="coran"
            />

            <FaqSection items={faqItems} id="faq" />

            {/* ============================================ */}
            {/* QUESTIONS ET RÉPONSES (HTML STATIQUE POUR SEO) */}
            {/* ============================================ */}
            <section id="toutes-les-questions" className="mt-14 scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
                Toutes les questions et réponses du quiz
              </h2>
              <p className="mb-8 text-base leading-relaxed text-foreground">
                Retrouvez ci-dessous l&apos;ensemble des 22 questions de notre quiz islamique avec les réponses correctes et les explications détaillées. Idéal pour réviser ou préparer votre enfant avant de jouer.
              </p>

              {levels.map((lvl) => (
                <div key={lvl.id} className="mb-10">
                  <h3 className="mb-4 text-xl font-bold text-primary">
                    {lvl.emoji} Niveau {lvl.id} — {lvl.title}
                  </h3>
                  <div className="space-y-4">
                    {lvl.questions.map((q, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-border bg-white p-5"
                      >
                        <p className="font-semibold text-foreground">
                          {i + 1}. {q.question}
                        </p>
                        <p className="mt-2 text-sm text-secondary font-medium">
                          Réponse : {q.options[q.correctIndex]}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                          {q.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* ============================================ */}
            {/* MAILLAGE INTERNE */}
            {/* ============================================ */}
            <section className="mt-16 rounded-xl bg-accent p-6 lg:p-8">
              <h2 className="mb-4 text-xl font-bold text-primary">
                Sur le même sujet
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hadith-du-jour"
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                >
                  Hadith du jour
                </Link>
                <Link
                  href="/doua-islam"
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                >
                  Doua en islam
                </Link>
                <Link
                  href="/apprendre-le-coran"
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                >
                  Apprendre le Coran
                </Link>
                <Link
                  href="/apprendre-larabe"
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                >
                  Apprendre l&apos;arabe
                </Link>
                <Link
                  href="/reves-islam"
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                >
                  Rêves en islam
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
