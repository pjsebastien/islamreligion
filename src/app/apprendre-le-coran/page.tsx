import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title: "Apprendre le Coran : mémorisation, récitation et tajwid",
  description:
    "Comment apprendre le Coran ? Méthodes de mémorisation, règles de tajwid, planning concret et conseils adaptés à chaque profil (débutant, enfant, adulte, converti).",
  alternates: {
    canonical: "https://www.islamreligion.fr/apprendre-le-coran",
  },
};

const tocItems = [
  { id: "merites", label: "Les mérites de l'apprentissage du Coran" },
  { id: "fondations", label: "Par où commencer ?" },
  { id: "methodes", label: "Les 5 méthodes pour apprendre le Coran" },
  { id: "planning", label: "Planning concret" },
  { id: "memorisation", label: "Techniques de mémorisation" },
  { id: "profils", label: "Selon votre profil" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Combien de temps faut-il pour mémoriser le Coran en entier ?",
    answer:
      "Cela dépend du rythme de chacun. En mémorisant une page par jour avec révision, il faut environ 2 ans pour mémoriser les 604 pages du Coran. À raison d'une demi-page par jour, comptez 3 à 4 ans. La clé réside dans la régularité et la révision constante, pas dans la vitesse.",
  },
  {
    question: "Faut-il savoir lire l'arabe pour apprendre le Coran ?",
    answer:
      "Savoir lire l'arabe facilite grandement l'apprentissage, mais ce n'est pas un prérequis absolu au départ. Certaines méthodes (comme la méthode Nourania) permettent d'apprendre à lire directement à partir du Coran. Toutefois, maîtriser l'alphabet arabe et les voyelles accélère considérablement la progression.",
  },
  {
    question: "Qu'est-ce que le tajwid ?",
    answer:
      "Le tajwid est l'ensemble des règles de prononciation et de récitation du Coran. Il couvre les points d'articulation des lettres (makharij), les caractéristiques des sons (sifat), les règles de nasalisation (ghunna), d'assimilation (idgham) et de prolongation (madd). Son objectif est de réciter le Coran tel qu'il a été révélé.",
  },
  {
    question: "Peut-on apprendre le Coran seul, sans professeur ?",
    answer:
      "Il est possible d'avancer seul, notamment pour la mémorisation. Cependant, un professeur qualifié est fortement recommandé pour le tajwid, car les erreurs de prononciation sont difficiles à corriger sans retour extérieur. Un cours en ligne avec audio peut être un bon compromis.",
  },
  {
    question: "Par quelle sourate commencer la mémorisation ?",
    answer:
      "La plupart des savants recommandent de commencer par le Juz' Amma (la 30e partie), qui contient les sourates les plus courtes. Al-Fatiha est la première à apprendre car elle est récitée dans chaque prière. Ensuite, les sourates An-Nas, Al-Falaq, Al-Ikhlas, puis progressivement les sourates plus longues.",
  },
  {
    question: "Quel est le meilleur moment pour mémoriser le Coran ?",
    answer:
      "Le moment le plus favorable est après la prière de l'aube (fajr). L'esprit est reposé, les distractions sont minimales et la mémoire fonctionne mieux. Mais le plus important reste de choisir un créneau que vous pouvez tenir chaque jour, quel qu'il soit.",
  },
  {
    question: "Comment ne pas oublier ce qu'on a mémorisé ?",
    answer:
      "La révision est aussi importante que la mémorisation elle-même. Le Prophète ﷺ a comparé le Coran mémorisé à un chameau attaché : si on ne le surveille pas, il s'enfuit. Révisez chaque jour une partie de ce que vous connaissez, en plus de la nouvelle mémorisation. La prière est aussi un excellent moment de révision.",
  },
  {
    question: "Les femmes peuvent-elles apprendre le Coran pendant leurs règles ?",
    answer:
      "Les savants divergent sur ce point. La majorité des juristes contemporains autorisent la récitation et la mémorisation du Coran pendant les règles, à condition de ne pas toucher le mushaf (exemplaire physique) directement. L'utilisation d'un support numérique (tablette, téléphone) est généralement autorisée.",
  },
];

export default function ApprendreLeCoran() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.islamreligion.fr/apprendre-le-coran/#webpage",
        url: "https://www.islamreligion.fr/apprendre-le-coran",
        name: "Apprendre le Coran : mémorisation, récitation et tajwid",
        description:
          "Comment apprendre le Coran ? Méthodes de mémorisation, règles de tajwid, planning concret et conseils adaptés à chaque profil.",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        inLanguage: "fr-FR",
        breadcrumb: { "@id": "https://www.islamreligion.fr/apprendre-le-coran/#breadcrumb" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/apprendre-le-coran/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.islamreligion.fr" },
          { "@type": "ListItem", position: 2, name: "Apprendre le Coran", item: "https://www.islamreligion.fr/apprendre-le-coran" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
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
          title="Apprendre le Coran : mémorisation, récitation et tajwid"
          subtitle="Méthodes éprouvées, planning concret et conseils pratiques pour mémoriser et réciter le Coran à votre rythme."
          imageSrc="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
          imageAlt="Coran ouvert avec un chapelet en bois posé sur les versets"
          compact
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article className="max-w-3xl">
              <div className="lg:hidden">
                <TableOfContents items={tocItems} />
              </div>

              <nav className="mb-8 text-sm text-foreground-secondary" aria-label="Fil d'Ariane">
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Apprendre le Coran</span>
              </nav>

              {/* ============================================ */}
              {/* SECTION 1 : Les mérites */}
              {/* ============================================ */}
              <section id="merites" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites de l&apos;apprentissage du Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran occupe une place unique dans la vie du musulman. C&apos;est la parole
                  de Dieu, révélée au Prophète Muhammad ﷺ, et sa récitation est en elle-même
                  un acte d&apos;adoration. L&apos;apprendre — que ce soit la lecture, la
                  mémorisation ou la compréhension — est l&apos;une des démarches les plus
                  valorisées en{" "}
                  <Link href="/" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    islam
                  </Link>.
                </p>

                <HadithCard
                  arabic="خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
                  text="Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne."
                  source="Hadith rapporté par al-Bukhari"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les textes de la Sunna mentionnent de nombreuses récompenses pour celui
                  qui s&apos;engage dans cet apprentissage. Chaque lettre récitée est
                  récompensée, et cette récompense est multipliée. Le Prophète ﷺ a
                  également enseigné que le Coran intercédera pour ceux qui le récitaient
                  régulièrement.
                </p>

                <HadithCard
                  arabic="اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ"
                  text="Lisez le Coran, car il viendra le Jour de la Résurrection comme intercesseur pour ceux qui le récitaient."
                  source="Hadith rapporté par Muslim"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Au-delà des récompenses spirituelles, l&apos;apprentissage du Coran apporte
                  une paix intérieure, renforce la mémoire, développe la discipline et
                  crée un lien profond avec le texte sacré. Pour ceux qui ne maîtrisent pas
                  encore la lecture,{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    apprendre les bases de l&apos;arabe
                  </Link>{" "}
                  est un premier pas précieux.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Par où commencer */}
              {/* ============================================ */}
              <section id="fondations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Par où commencer ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Avant de se lancer dans la mémorisation, certaines fondations sont
                  nécessaires. Elles permettent d&apos;avancer sur des bases solides et
                  d&apos;éviter de prendre de mauvaises habitudes difficiles à corriger
                  par la suite.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h3 className="font-semibold text-primary">Purifier son intention (niyyah)</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;intention est le moteur de tout acte en islam. Apprendre
                        le Coran pour plaire à Dieu, pour se rapprocher de Lui et pour
                        mettre en pratique Ses enseignements donne un sens profond à
                        chaque session d&apos;apprentissage. Cette sincérité est ce qui
                        transforme un exercice de mémoire en acte spirituel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h3 className="font-semibold text-primary">Savoir lire l&apos;arabe</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Maîtriser{" "}
                        <Link href="/apprendre-larabe#alphabet" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                          l&apos;alphabet arabe et les voyelles
                        </Link>{" "}
                        est un prérequis qui facilite tout le parcours. Sans cette base,
                        on est contraint de mémoriser par l&apos;écoute seule, ce qui est
                        plus lent et moins fiable. Deux à quatre semaines suffisent pour
                        apprendre à lire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">3</span>
                    <div>
                      <h3 className="font-semibold text-primary">Apprendre les bases du tajwid</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tajwid regroupe les règles de prononciation correcte du Coran.
                        Connaître les bases — points d&apos;articulation des lettres,
                        prolongations (<em>madd</em>), nasalisation (<em>ghunna</em>),
                        assimilation (<em>idgham</em>) — évite d&apos;ancrer des erreurs
                        dans sa récitation. Mieux vaut avancer lentement mais correctement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">4</span>
                    <div>
                      <h3 className="font-semibold text-primary">Choisir son objectif</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Tous les musulmans n&apos;ont pas le même objectif avec le Coran.
                        Certains veulent mémoriser le Coran en entier (<em>hifz</em>),
                        d&apos;autres souhaitent réciter correctement pour la prière,
                        d&apos;autres encore veulent comprendre le sens des versets.
                        Clarifier son objectif permet de choisir la bonne méthode.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Les 5 méthodes */}
              {/* ============================================ */}
              <section id="methodes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les 5 méthodes pour apprendre le Coran
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il n&apos;existe pas de méthode unique. Chacune a ses avantages et ses
                  limites. L&apos;idéal est souvent de combiner plusieurs approches.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      1. Avec un professeur qualifié (ijaza)
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      La voie traditionnelle et la plus fiable. Un enseignant titulaire
                      d&apos;une <em>ijaza</em> (chaîne de transmission ininterrompue
                      jusqu&apos;au Prophète ﷺ) corrige votre récitation en temps réel.
                      Il détecte les erreurs que vous ne percevez pas et vous guide dans
                      la progression. C&apos;est la méthode recommandée pour le tajwid
                      et la mémorisation avancée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      2. En ligne via des cours en direct
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Les plateformes de cours en ligne permettent d&apos;accéder à des
                      professeurs qualifiés depuis chez soi, par visioconférence. On
                      retrouve les avantages du professeur particulier avec la flexibilité
                      des horaires. C&apos;est souvent la solution la plus adaptée pour
                      les francophones qui n&apos;ont pas accès à un enseignant local.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      3. En autodidacte avec des applications
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Des applications comme Quran Companion, Tarteel ou Memorize Quran
                      proposent des outils de mémorisation avec répétition, suivi de
                      progression et récitation audio. Cette méthode convient pour la
                      mémorisation mais reste limitée pour le tajwid, où un retour humain
                      est difficile à remplacer.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      4. La méthode Nourania
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Conçue par le cheikh Nour Muhammad Haqqani, cette méthode progressive
                      enseigne la lecture du Coran à travers des tableaux de syllabes et
                      de mots. Elle est particulièrement adaptée aux enfants et aux
                      débutants qui ne savent pas encore lire l&apos;arabe. En quelques
                      semaines, l&apos;élève peut lire des versets complets.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      5. En groupe (halqa de mémorisation)
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Les cercles de mémorisation (<em>halqa</em>) sont une tradition
                      ancienne. Les élèves se retrouvent régulièrement pour réciter
                      devant le groupe et un enseignant. L&apos;émulation collective,
                      la motivation du groupe et la régularité imposée par les rendez-vous
                      font de cette méthode l&apos;une des plus efficaces.
                    </p>
                  </div>
                </div>

                {/* Tableau comparatif */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Méthode</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Tajwid</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Mémorisation</th>
                        <th className="py-3 font-semibold text-primary">Flexibilité</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Professeur (ijaza)</td>
                        <td className="py-3 pr-4">Excellent</td>
                        <td className="py-3 pr-4">Excellent</td>
                        <td className="py-3">Faible</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Cours en ligne</td>
                        <td className="py-3 pr-4">Très bon</td>
                        <td className="py-3 pr-4">Très bon</td>
                        <td className="py-3">Bonne</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Applications</td>
                        <td className="py-3 pr-4">Limité</td>
                        <td className="py-3 pr-4">Bon</td>
                        <td className="py-3">Totale</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Méthode Nourania</td>
                        <td className="py-3 pr-4">Bon (lecture)</td>
                        <td className="py-3 pr-4">Moyen</td>
                        <td className="py-3">Moyenne</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Halqa (groupe)</td>
                        <td className="py-3 pr-4">Très bon</td>
                        <td className="py-3 pr-4">Excellent</td>
                        <td className="py-3">Faible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <AffiliateForm
                  title="Accédez à un cours de Coran en ligne"
                  description="Un programme structuré avec des enseignants qualifiés, adapté à votre niveau et à vos disponibilités. Laissez votre email pour recevoir les détails du programme."
                  buttonText="Recevoir les informations"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Planning concret */}
              {/* ============================================ */}
              <section id="planning" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Planning concret : organiser ses sessions
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La régularité est le facteur déterminant. Mieux vaut 15 minutes chaque jour
                  que deux heures le week-end. Voici un planning type qui a fait ses preuves.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La règle des 15 minutes par jour
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Divisez votre session quotidienne en trois blocs. Cinq minutes pour
                  la <strong>nouvelle mémorisation</strong> : lisez le passage 5 fois en
                  regardant le mushaf, puis essayez de le réciter de mémoire. Cinq minutes
                  pour la <strong>révision récente</strong> : reprenez ce que vous avez
                  mémorisé cette semaine. Cinq minutes pour la <strong>révision ancienne</strong> :
                  récitez une partie de ce que vous connaissez déjà.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Exemple de planning hebdomadaire
                </h3>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Jour</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Nouveau</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Révision récente</th>
                        <th className="py-3 font-semibold text-primary">Révision ancienne</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Lundi</td>
                        <td className="py-3 pr-4">5 versets nouveaux</td>
                        <td className="py-3 pr-4">Versets du week-end</td>
                        <td className="py-3">1 page ancienne</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Mardi</td>
                        <td className="py-3 pr-4">5 versets nouveaux</td>
                        <td className="py-3 pr-4">Versets du lundi</td>
                        <td className="py-3">1 page ancienne</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Mercredi</td>
                        <td className="py-3 pr-4">5 versets nouveaux</td>
                        <td className="py-3 pr-4">Versets lundi-mardi</td>
                        <td className="py-3">1 page ancienne</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Jeudi</td>
                        <td className="py-3 pr-4">5 versets nouveaux</td>
                        <td className="py-3 pr-4">Versets de la semaine</td>
                        <td className="py-3">1 page ancienne</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Vendredi</td>
                        <td className="py-3 pr-4">Pas de nouveau</td>
                        <td className="py-3 pr-4">Toute la semaine</td>
                        <td className="py-3">2 pages anciennes</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Sam-Dim</td>
                        <td className="py-3 pr-4">Pas de nouveau</td>
                        <td className="py-3 pr-4">Consolidation semaine</td>
                        <td className="py-3">Révision libre</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Combien de temps pour mémoriser le Coran entier ?
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Coran compte 604 pages et 6 236 versets. À raison de 5 versets par
                  jour (4 jours par semaine), il faut environ 6 ans pour le mémoriser en
                  entier. En doublant le rythme (une demi-page par jour), comptez 3 ans.
                  Les plus assidus, qui mémorisent une page par jour, peuvent y parvenir
                  en 2 ans. Mais la vitesse ne doit jamais se faire au détriment de la
                  qualité de la récitation et de la solidité de la mémorisation.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/musulman-tenant-coran-chapelet-islam-foi.jpg"
                    alt="Musulman tenant le Coran et un chapelet, symbole de foi et d'apprentissage"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Techniques de mémorisation */}
              {/* ============================================ */}
              <section id="memorisation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Techniques de mémorisation efficaces
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La mémorisation du Coran (<em>hifz</em>) repose sur des techniques
                  éprouvées depuis des siècles. Voici les plus efficaces.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-primary">La répétition concentrée</h3>
                    <p className="mt-3 leading-relaxed text-foreground">
                      Lisez le passage à mémoriser en regardant le mushaf au moins 10 fois.
                      Concentrez-vous sur la prononciation, le rythme et la mélodie.
                      Puis fermez le mushaf et essayez de réciter. Reprenez les passages
                      où vous bloquez. Répétez jusqu&apos;à pouvoir réciter sans hésitation.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-primary">L&apos;écoute active</h3>
                    <p className="mt-3 leading-relaxed text-foreground">
                      Écoutez un récitateur reconnu pour sa clarté (Husary, Minshawi,
                      Afasy) en suivant le texte. Répétez verset par verset après lui.
                      L&apos;écoute régulière, même passive (en voiture, en marchant),
                      ancre les sonorités et facilite le rappel. Choisissez un seul
                      récitateur pour chaque sourate afin que la mélodie reste constante.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-primary">L&apos;écriture</h3>
                    <p className="mt-3 leading-relaxed text-foreground">
                      Écrire les versets à la main mobilise la mémoire visuelle et
                      kinesthésique. Cette technique, utilisée dans les écoles coraniques
                      traditionnelles d&apos;Afrique de l&apos;Ouest, reste l&apos;une
                      des plus puissantes. Écrivez le passage de mémoire après l&apos;avoir
                      mémorisé, puis vérifiez.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-primary">La récitation dans la prière</h3>
                    <p className="mt-3 leading-relaxed text-foreground">
                      Réciter les nouveaux passages mémorisés dans les prières
                      surérogatoires (<em>nawafil</em>) est un double bénéfice :
                      consolidation de la mémoire et adoration. Le contexte de la prière
                      — concentration, recueillement — favorise l&apos;ancrage profond.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-primary">La révision espacée</h3>
                    <p className="mt-3 leading-relaxed text-foreground">
                      Le Coran mémorisé s&apos;oublie si on ne le révise pas. Mettez en
                      place un système de révision par cycles : ce qui a été appris cette
                      semaine est revu chaque jour, ce qui date d&apos;un mois est revu
                      chaque semaine, ce qui date de plus longtemps est revu chaque mois.
                      Le Prophète ﷺ a insisté sur l&apos;importance de la révision.
                    </p>
                  </div>
                </div>

                <HadithCard
                  arabic="تَعَاهَدُوا هَذَا الْقُرْآنَ فَوَالَّذِي نَفْسُ مُحَمَّدٍ بِيَدِهِ لَهُوَ أَشَدُّ تَفَلُّتًا مِنَ الْإِبِلِ فِي عُقُلِهَا"
                  text="Entretenez votre connaissance du Coran, car par Celui qui détient l'âme de Muhammad en Sa main, il s'échappe plus vite que les chameaux de leurs liens."
                  source="Hadith rapporté par al-Bukhari et Muslim"
                />

                <AffiliateForm
                  title="Apprenez le Coran avec un suivi personnalisé"
                  description="Un programme en ligne avec des enseignants diplômés qui corrigent votre récitation et vous accompagnent dans votre progression. Laissez votre email pour en savoir plus."
                  buttonText="Recevoir les informations"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Selon votre profil */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Apprendre le Coran selon votre profil
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque apprenant a des besoins et des contraintes différents. Voici des
                  conseils adaptés à chaque situation.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour les enfants</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les enfants mémorisent naturellement plus vite que les adultes.
                      Commencez tôt (dès 4-5 ans) avec des séances courtes de 10-15
                      minutes. La méthode Nourania est particulièrement adaptée. Rendez
                      l&apos;apprentissage ludique : récompenses, jeux de récitation,
                      compétitions amicales. L&apos;écoute régulière en fond sonore
                      aide l&apos;enfant à s&apos;imprégner des sonorités.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour les adultes débutants</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ne vous découragez pas face à la quantité. Fixez-vous des
                      objectifs modestes et atteignables : commencez par les sourates
                      courtes du Juz&apos; Amma, puis progressez graduellement. La
                      compréhension du sens aide la mémoire adulte, contrairement aux
                      enfants qui retiennent sans comprendre. Associez la mémorisation
                      à l&apos;étude du <em>tafsir</em> (exégèse).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour les convertis</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Si vous ne lisez pas encore l&apos;arabe, commencez par{" "}
                      <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        l&apos;apprentissage de l&apos;alphabet
                      </Link>.
                      En parallèle, mémorisez Al-Fatiha et les sourates courtes par
                      l&apos;écoute et la translittération. Un cours en ligne avec un
                      professeur patient, habitué aux non-arabophones, peut faire toute
                      la différence. Prenez votre temps : chaque verset appris est une
                      victoire.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour les femmes</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      De nombreuses plateformes proposent des cours avec des enseignantes
                      qualifiées, en individuel ou en petit groupe. Les halaqat féminines
                      en ligne offrent un cadre bienveillant et motivant. Adaptez votre
                      planning aux contraintes familiales en privilégiant les moments
                      calmes (tôt le matin, pendant la sieste des enfants).
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/famille-musulmane-lecture-coran-islam-education.jpg"
                    alt="Famille musulmane lisant le Coran ensemble, éducation islamique"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    L&apos;apprentissage du Coran en famille renforce les liens et la motivation
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* ============================================ */}
              {/* CTA final */}
              {/* ============================================ */}
              <AffiliateForm
                title="Commencez votre parcours avec le Coran"
                description="Accédez à un programme d'apprentissage du Coran en ligne, avec des enseignants qualifiés et un suivi adapté à votre niveau. Laissez votre email pour recevoir toutes les informations sur le programme et les conditions d'inscription."
                buttonText="Recevoir les détails"
              />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Sur le même sujet</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
                  </Link>
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Comprendre l&apos;islam
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Les rêves en islam
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes et médecine prophétique
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
