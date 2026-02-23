import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Les 10 grands signes de la fin du monde selon l'islam authentique",
  description:
    "Découvrez les 10 grands signes de la fin du monde en islam : Dajjal, descente de Issa, Gog et Magog, lever du soleil à l'ouest et préparation spirituelle.",
  alternates: {
    canonical: "https://www.islamreligion.fr/signes-fin-monde-islam",
  },
};

const tocItems = [
  { id: "signes-majeurs-mineurs", label: "Signes majeurs et mineurs" },
  { id: "dajjal-issa", label: "Le Dajjal et la descente de Issa" },
  { id: "gog-magog-bete", label: "Gog et Magog, effondrements et Bête" },
  { id: "soleil-ouest-derniers", label: "Le lever du soleil à l'ouest" },
  { id: "preparation-spirituelle", label: "Préparation spirituelle" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quels sont les 10 grands signes de la fin du monde en islam ?",
    answer:
      "Les 10 grands signes de la fin du monde en islam sont : l'apparition du Dajjal (l'Antéchrist), la descente de Issa (Jésus) fils de Maryam, l'invasion de Gog et Magog (Yajuj et Majuj), trois effondrements terrestres (à l'est, à l'ouest et dans la péninsule arabique), l'apparition de la Bête (Dabbatul Ard), le lever du soleil à l'ouest, la fumée (Ad-Doukhan), et un feu qui rassemblera les gens vers leur lieu de rassemblement. Ces signes sont mentionnés dans le hadith de Hudhayfa ibn Asid rapporté par Muslim.",
  },
  {
    question:
      "Quelle est la différence entre signes mineurs et signes majeurs ?",
    answer:
      "Les signes mineurs apparaissent progressivement au fil des siècles et concernent des changements sociaux, moraux et religieux (multiplication du commerce, perte de confiance, construction en hauteur). Les signes majeurs sont des événements extraordinaires et surnaturels qui surviennent dans une séquence rapprochée juste avant la fin du monde. Le Prophète (paix et salut sur lui) a comparé les signes majeurs à un collier dont le fil se rompt : les perles tombent l'une après l'autre sans interruption.",
  },
  {
    question: "Le Dajjal est-il le premier grand signe à apparaître ?",
    answer:
      "Les savants divergent sur l'ordre précis des signes majeurs. Certains considèrent que le Dajjal sera le premier signe majeur à apparaître, suivi de la descente de Issa (Jésus) qui le combattra. D'autres placent le Mahdi avant le Dajjal. Ce qui fait consensus, c'est que l'apparition du Dajjal et la descente de Issa sont étroitement liées et se succèdent rapidement.",
  },
  {
    question: "Où descendra Jésus (Issa) selon l'islam ?",
    answer:
      "Selon un hadith rapporté par Muslim, Issa (Jésus) fils de Maryam descendra près du minaret blanc à l'est de Damas. Il posera ses mains sur les ailes de deux anges et, lorsqu'il baissera la tête, des gouttes tomberont comme des perles. Il poursuivra le Dajjal jusqu'à la porte de Ludd (en Palestine) où il le tuera. Issa gouvernera ensuite la terre avec justice pendant une période déterminée par Allah.",
  },
  {
    question: "Qui sont Gog et Magog (Yajuj et Majuj) ?",
    answer:
      "Gog et Magog (Yajuj et Majuj) sont deux peuples mentionnés dans le Coran (sourate Al-Kahf, verset 94 et sourate Al-Anbiya, verset 96). Dhul-Qarnayn a érigé une barrière pour les contenir. Avant la fin du monde, cette barrière sera brisée et ils déferleront sur terre en grand nombre, semant la corruption. Seule l'invocation d'Allah par Issa (Jésus) mettra fin à leur invasion par l'envoi d'un fléau divin.",
  },
  {
    question:
      "Que se passe-t-il quand le soleil se lèvera de l'ouest ?",
    answer:
      "Le lever du soleil à l'ouest est un signe majeur après lequel la porte du repentir sera définitivement fermée. Le Prophète (paix et salut sur lui) a dit : 'L'Heure ne viendra pas tant que le soleil ne se sera pas levé de l'ouest, et lorsqu'il se lèvera et que les gens le verront, ils croiront tous, mais ce sera le moment où la foi ne profitera plus à une âme qui n'avait pas cru auparavant' (Bukhari et Muslim).",
  },
  {
    question:
      "Les signes mineurs de la fin du monde se sont-ils déjà réalisés ?",
    answer:
      "Oui, de nombreux signes mineurs se sont déjà réalisés selon les savants musulmans : la construction de bâtiments en hauteur par les bédouins, la multiplication du commerce, la perte de confiance (la trahison des dépôts), la propagation de l'ignorance religieuse, la consommation d'alcool, la multiplication des tremblements de terre et le rapprochement du temps. D'autres signes mineurs sont encore à venir avant l'apparition des signes majeurs.",
  },
  {
    question: "Comment se préparer à la fin des temps en islam ?",
    answer:
      "La préparation en islam ne repose pas sur la peur mais sur le renforcement de la foi et des actes d'adoration. Le Prophète (paix et salut sur lui) a recommandé : maintenir les cinq prières, multiplier l'aumône, lire sourate Al-Kahf chaque vendredi (protection contre le Dajjal), acquérir le savoir religieux, renforcer les liens communautaires et placer sa confiance en Allah (tawakkul). L'objectif est de vivre chaque jour comme si c'était le dernier, tout en planifiant pour l'avenir.",
  },
];

export default function SignesFinMonde() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/signes-fin-monde-islam/#article",
        headline:
          "Les 10 grands signes de la fin du monde selon l'islam authentique",
        description:
          "Découvrez les 10 grands signes de la fin du monde en islam : Dajjal, descente de Issa, Gog et Magog, lever du soleil à l'ouest et préparation spirituelle.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Les-10-grands-signes-de-la-fin-du-monde-selon-lislam-authentique-1.jpg",
        datePublished: "2025-08-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/signes-fin-monde-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/signes-fin-monde-islam/#breadcrumb",
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
            name: "Signes de la fin du monde",
            item: "https://www.islamreligion.fr/signes-fin-monde-islam",
          },
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
          title="Les 10 grands signes de la fin du monde selon l'islam authentique"
          subtitle="Comprendre les signes majeurs de la fin des temps à la lumière du Coran et de la Sunna authentique."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Les-10-grands-signes-de-la-fin-du-monde-selon-lislam-authentique-1.jpg"
          imageAlt="Les 10 grands signes de la fin du monde selon l'islam authentique"
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

              <nav
                className="mb-8 text-sm text-foreground-secondary"
                aria-label="Fil d'Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Signes de la fin du monde en islam
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La fin du monde en islam est précédée de dix signes majeurs
                  rapportés dans la Sunna authentique. Le Dajjal, la descente
                  de Issa (Jésus), l&apos;invasion de Gog et Magog, les
                  effondrements terrestres, la Bête, le lever du soleil à
                  l&apos;ouest, la fumée et le feu rassembleur : chaque signe
                  porte un message de rappel pour le croyant. Loin de la peur,
                  cette connaissance invite à renforcer la foi, la prière et
                  la solidarité communautaire.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Signes majeurs et mineurs */}
              {/* ============================================ */}
              <section id="signes-majeurs-mineurs" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes majeurs et mineurs de la fin des temps
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La science de l&apos;eschatologie islamique distingue deux
                  catégories de signes annonciateurs de l&apos;Heure (As-Sa&apos;a) :
                  les signes mineurs, qui se manifestent progressivement au fil
                  des siècles, et les signes majeurs, événements
                  extraordinaires et surnaturels qui se succèdent rapidement
                  juste avant la fin du monde. Le Prophète Muhammad (paix et
                  salut sur lui) a enseigné ces signes pour que les croyants
                  puissent reconnaître les époques et renforcer leur foi.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith de Hudhayfa ibn Asid (rapporté par Muslim) constitue
                  la référence principale pour les dix signes majeurs. Le
                  Prophète (paix et salut sur lui) a dit : &quot;L&apos;Heure ne
                  surviendra pas avant que vous ne voyiez dix signes&quot;, puis
                  il mentionna la fumée, le Dajjal, la Bête, le lever du soleil
                  à l&apos;ouest, la descente de Issa fils de Maryam, Gog et
                  Magog, trois effondrements de terre (à l&apos;est, à
                  l&apos;ouest et dans la péninsule arabique) et un feu qui
                  sortira du Yémen pour rassembler les gens vers leur lieu de
                  rassemblement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Quant aux{" "}
                  <Link href="/signes-mineurs-actuels" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">signes mineurs</Link>,
                  ils sont plus nombreux et
                  s&apos;étalent sur des siècles. Parmi eux, on retrouve la
                  construction de bâtiments en hauteur par ceux qui étaient
                  autrefois des bergers pieds nus, la propagation de
                  l&apos;ignorance religieuse, la multiplication du commerce,
                  la perte de confiance et le rapprochement du temps. Beaucoup
                  de ces signes se sont déjà réalisés, ce qui rappelle aux
                  croyants la proximité relative de l&apos;Heure.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a comparé les signes
                  majeurs à un collier dont le fil se rompt : une fois le
                  premier signe apparu, les suivants se succèdent comme des
                  perles qui tombent l&apos;une après l&apos;autre, sans
                  interruption. Cette image illustre la rapidité et
                  l&apos;enchaînement des événements une fois la séquence
                  amorcée.
                </p>

                {/* Tableau catégories de signes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Catégorie
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Exemples
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Statut d&apos;apparition
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Signes mineurs réalisés
                        </td>
                        <td className="py-3 pr-4">
                          Construction en hauteur, propagation de
                          l&apos;ignorance, multiplication du commerce
                        </td>
                        <td className="py-3">
                          Déjà observés
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Signes mineurs à venir
                        </td>
                        <td className="py-3 pr-4">
                          Apparition du Mahdi, conquête de Constantinople,
                          disparition du savoir
                        </td>
                        <td className="py-3">
                          Non encore réalisés
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Signes majeurs surnaturels
                        </td>
                        <td className="py-3 pr-4">
                          Dajjal, descente de Issa, lever du soleil à
                          l&apos;ouest
                        </td>
                        <td className="py-3">
                          À venir, enchaînement rapide
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Signes majeurs cosmiques
                        </td>
                        <td className="py-3 pr-4">
                          Fumée (Ad-Doukhan), feu du Yémen, effondrements
                          terrestres
                        </td>
                        <td className="py-3">
                          À venir, fins des temps
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Signes majeurs terrestres
                        </td>
                        <td className="py-3 pr-4">
                          Gog et Magog, apparition de la Bête (Dabbatul Ard)
                        </td>
                        <td className="py-3">
                          À venir, enchaînement rapide
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Signes mineurs :</strong> changements graduels
                      dans la société et la morale, observables au fil des
                      générations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Signes majeurs :</strong> événements
                      extraordinaires qui se produisent en séquence rapide
                      juste avant la fin du monde.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Source principale :</strong> hadith de Hudhayfa
                      ibn Asid dans Sahih Muslim, référence pour les 10 signes
                      majeurs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Image du collier :</strong> les signes majeurs
                      s&apos;enchaînent comme des perles tombant d&apos;un
                      collier rompu.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Les-10-grands-signes-de-la-fin-du-monde-selon-lislam-authentique-1.jpg"
                    alt="Les signes majeurs et mineurs de la fin des temps en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le Dajjal et Issa */}
              {/* ============================================ */}
              <section id="dajjal-issa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Dajjal et la descente de Issa (Jésus) : deux signes
                  interconnectés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les dix signes majeurs, l&apos;apparition du Dajjal
                  (l&apos;Antéchrist) et la descente de Issa (Jésus) fils de
                  Maryam occupent une place centrale. Ces deux événements sont
                  indissociables dans les textes prophétiques, car c&apos;est
                  précisément Issa qui mettra fin à l&apos;épreuve du Dajjal.
                  Le Prophète (paix et salut sur lui) a consacré de nombreux
                  hadiths à la description de ces deux signes, soulignant leur
                  importance pour la communauté musulmane.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Dajjal est décrit comme un homme borgne qui prétendra
                  être Dieu et parcourra la terre en accomplissant des
                  prodiges trompeurs. Il séjournera sur terre pendant quarante
                  jours : un jour comme une année, un jour comme un mois, un
                  jour comme une semaine, puis le reste des jours comme les
                  jours ordinaires (Muslim). Sa fitna (épreuve) sera la plus
                  grande qu&apos;ait connue l&apos;humanité depuis la création
                  d&apos;Adam. Le Prophète (paix et salut sur lui) a averti :
                  &quot;Il n&apos;y a pas de prophète qui n&apos;ait mis en
                  garde sa communauté contre le Dajjal&quot; (Bukhari et Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La protection contre le Dajjal passe par des moyens
                  spirituels précis, transmis par le Prophète (paix et salut
                  sur lui). La lecture des dix premiers versets de sourate
                  Al-Kahf constitue un rempart reconnu par les savants.
                  Le hadith rapporté par Muslim indique : &quot;Quiconque
                  mémorise les dix premiers versets de sourate Al-Kahf sera
                  protégé contre le Dajjal.&quot; Cette sourate rappelle
                  l&apos;épreuve de la foi face aux puissances trompeuses et
                  la confiance absolue en Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;épreuve du Dajjal
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Dajjal apparaîtra entre la Syrie et l&apos;Irak,
                        semant la corruption et le trouble. Il aura avec lui
                        ce qui ressemblera à un paradis et un enfer, mais la
                        réalité sera inversée. Il ne pourra pas entrer à
                        La Mecque ni à Médine, car les anges en garderont les
                        entrées (Bukhari). Sa durée sur terre sera de quarante
                        jours aux proportions extraordinaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La descente de Issa près de Damas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        <Link href="/retour-jesus-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Issa (Jésus) descendra</Link>{" "}
                        près du minaret blanc à
                        l&apos;est de Damas, posant ses mains sur les ailes de
                        deux anges. Lorsqu&apos;il baissera la tête, des
                        gouttes tomberont comme des perles, et lorsqu&apos;il
                        la relèvera, des perles en ruisselleront (Muslim). Il
                        n&apos;acceptera rien d&apos;autre que l&apos;islam et
                        brisera la croix, abolira la jizyah et tuera le porc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La défaite du Dajjal par Issa
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Issa poursuivra le Dajjal jusqu&apos;à la porte de
                        Ludd (en Palestine actuelle) où il le tuera. Le Dajjal
                        fondra devant Issa comme le sel fond dans l&apos;eau
                        (Muslim). Après cette victoire, une ère de paix et de
                        justice s&apos;installera sur terre sous la gouvernance
                        de Issa, durant laquelle les richesses abonderont et
                        les inimitiés disparaîtront.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le Dajjal est la plus grande épreuve depuis la création
                      d&apos;Adam selon le hadith rapporté par Muslim.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La lecture de sourate Al-Kahf chaque vendredi est
                      recommandée comme protection contre le Dajjal.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La Mecque et Médine seront préservées de l&apos;entrée
                      du Dajjal grâce à la protection des anges (Bukhari).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Issa gouvernera avec justice et les richesses abonderont
                      au point que personne n&apos;acceptera l&apos;aumône.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;invocation de refuge auprès d&apos;Allah contre
                      l&apos;épreuve du Dajjal fait partie des invocations
                      enseignées dans le tashahhud de la prière.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le Dajjal : signes et protection en islam"
                  description="Approfondissez la connaissance des signes de l'Antéchrist et les moyens de protection transmis par le Prophète."
                  href="/dajjal-signes-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Gog/Magog, effondrements, Bête */}
              {/* ============================================ */}
              <section id="gog-magog-bete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Gog et Magog, les effondrements terrestres et la Bête
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Après la défaite du Dajjal et l&apos;établissement de la
                  justice par Issa, d&apos;autres signes majeurs se
                  manifesteront. L&apos;invasion de Gog et Magog (Yajuj et
                  Majuj), les trois effondrements terrestres et l&apos;apparition
                  de la Bête (Dabbatul Ard) comptent parmi les événements les
                  plus marquants de cette séquence eschatologique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <Link href="/gog-magog-liberation-fin-des-temps" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Gog et Magog</Link>{" "}
                  sont deux peuples mentionnés dans le Coran à
                  deux reprises. Dans sourate Al-Kahf (verset 94), les
                  habitants de la terre se plaignent auprès de Dhul-Qarnayn
                  des ravages de Gog et Magog, et celui-ci érige une barrière
                  de fer et de cuivre fondu pour les contenir. Dans sourate
                  Al-Anbiya (verset 96), Allah annonce que cette barrière sera
                  ouverte et qu&apos;ils déferleront de chaque hauteur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a décrit leur invasion
                  comme dévastatrice. Ils boiront les eaux du lac de Tibériade
                  jusqu&apos;à l&apos;assécher. Issa (Jésus) et les croyants
                  se réfugieront sur le mont Tur et invoqueront Allah, qui
                  enverra contre Gog et Magog des vers (naghaf) dans leurs
                  cous, les faisant périr d&apos;un seul coup (Muslim). Après
                  leur mort, Allah enverra des oiseaux qui transporteront leurs
                  corps, puis une pluie viendra purifier la terre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les trois effondrements terrestres (khasf) constituent un
                  autre signe majeur. Un effondrement se produira à l&apos;est,
                  un autre à l&apos;ouest et un troisième dans la péninsule
                  arabique. Ces événements géologiques d&apos;une ampleur
                  inédite seront des avertissements divins que nul ne pourra
                  ignorer. Le hadith de Hudhayfa ibn Asid les mentionne
                  explicitement parmi les dix signes majeurs (Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Quant à la Bête (Dabbatul Ard), elle est mentionnée dans le
                  Coran, sourate An-Naml, verset 82 : &quot;Et quand la Parole
                  tombera sur eux, Nous leur ferons sortir de terre une bête
                  qui leur parlera.&quot; Cette créature distinguera les
                  croyants des mécréants en les marquant. Selon les exégètes,
                  elle marquera le visage du croyant d&apos;une lumière et
                  celui du mécréant d&apos;une obscurité, de sorte que chacun
                  sera reconnu par son apparence.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Gog et Magog :</strong> peuples contenus derrière
                      la barrière de Dhul-Qarnayn, mentionnés dans sourate
                      Al-Kahf (18:94) et sourate Al-Anbiya (21:96).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Leur fin :</strong> Allah enverra des vers dans
                      leurs cous après l&apos;invocation de Issa sur le mont
                      Tur (Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Trois effondrements :</strong> à l&apos;est, à
                      l&apos;ouest et dans la péninsule arabique, mentionnés
                      dans le hadith de Hudhayfa (Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La Bête (Dabbatul Ard) :</strong> créature qui
                      parlera aux hommes et marquera croyants et mécréants,
                      mentionnée dans sourate An-Naml (27:82).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Purification de la terre :</strong> après Gog et
                      Magog, une pluie divine nettoiera la terre et la rendra
                      fertile comme jamais.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Les-10-grands-signes-de-la-fin-du-monde-selon-lislam-authentique-1.jpg"
                    alt="Gog et Magog, les effondrements terrestres et la Bête en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Lever du soleil et derniers signes */}
              {/* ============================================ */}
              <section id="soleil-ouest-derniers" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le lever du soleil à l&apos;ouest et les derniers signes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le lever du soleil depuis l&apos;ouest représente un
                  basculement cosmique sans précédent. Ce phénomène marquera
                  un point de non-retour dans l&apos;histoire de l&apos;humanité :
                  la porte du repentir (tawba) sera définitivement fermée. Le
                  Prophète (paix et salut sur lui) a dit : &quot;L&apos;Heure
                  ne viendra pas tant que le soleil ne se sera pas levé de
                  l&apos;ouest, et lorsqu&apos;il se lèvera et que les gens le
                  verront, ils croiront tous, mais ce sera le moment où la foi
                  ne profitera plus à une âme qui n&apos;avait pas cru
                  auparavant, ni à celle qui n&apos;avait pas acquis de bien
                  par sa foi&quot; (Bukhari et Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset coranique corrobore cette réalité. Allah dit dans
                  sourate Al-An&apos;am (6:158) : &quot;Le jour où certains
                  signes de ton Seigneur viendront, la foi ne sera d&apos;aucune
                  utilité à une âme qui n&apos;avait pas cru auparavant.&quot;
                  Les exégètes comme Ibn Kathir et At-Tabari identifient ce
                  signe au lever du soleil à l&apos;ouest. Ce moment marque la
                  fin de l&apos;épreuve terrestre et le début de la phase
                  finale de l&apos;existence de ce monde.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La fumée (Ad-Doukhan) est un autre signe majeur mentionné
                  dans le Coran, sourate Ad-Doukhan (44:10-11) : &quot;Guette
                  le jour où le ciel apportera une fumée visible qui couvrira
                  les gens, ce sera un châtiment douloureux.&quot; Les savants
                  divergent sur la nature exacte de cet événement : certains y
                  voient un phénomène déjà survenu du temps du Prophète (la
                  famine des Quraysh), tandis que d&apos;autres, comme Ibn
                  Kathir, le considèrent comme un signe à venir qui couvrira
                  toute la terre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le feu qui sortira du Yémen (ou d&apos;Aden selon certaines
                  versions) rassemblera les gens vers leur lieu de
                  rassemblement (al-mahshar) au Levant (Ash-Sham). Le Prophète
                  (paix et salut sur lui) a dit : &quot;Un feu sortira
                  d&apos;Aden et poussera les gens vers le lieu de
                  rassemblement, il campera avec eux là où ils camperont et
                  s&apos;arrêtera avec eux là où ils s&apos;arrêteront&quot;
                  (Muslim). Ce feu sera le dernier signe avant la destruction
                  finale du monde.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les signes finaux, le Prophète (paix et salut sur lui)
                  a également évoqué la disparition progressive de la foi. Le
                  Coran sera retiré des cœurs et des pages, les mosquées se
                  videront, et les gens oublieront les mots &quot;La ilaha
                  illa Allah&quot;. Un vent doux emportera l&apos;âme de tout
                  croyant, ne laissant sur terre que les pires des créatures
                  sur lesquelles l&apos;Heure se lèvera (Muslim). La
                  multiplication des meurtres et la perte du sens de la vie
                  humaine sont aussi mentionnées comme signes annonciateurs.
                </p>

                {/* Tableau détaillé des signes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signe
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source textuelle
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le Dajjal
                        </td>
                        <td className="py-3 pr-4">
                          Homme borgne accomplissant des prodiges trompeurs,
                          prétendant être Dieu
                        </td>
                        <td className="py-3">
                          Bukhari et Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Descente de Issa
                        </td>
                        <td className="py-3 pr-4">
                          Descente près du minaret blanc à Damas, défaite du
                          Dajjal à Ludd
                        </td>
                        <td className="py-3">
                          Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Gog et Magog
                        </td>
                        <td className="py-3 pr-4">
                          Peuples contenus par la barrière de Dhul-Qarnayn,
                          déferlement massif
                        </td>
                        <td className="py-3">
                          Coran (18:94, 21:96), Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Trois effondrements
                        </td>
                        <td className="py-3 pr-4">
                          Effondrements de terre à l&apos;est, à l&apos;ouest
                          et dans la péninsule arabique
                        </td>
                        <td className="py-3">
                          Muslim (hadith de Hudhayfa)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          La Bête (Dabbatul Ard)
                        </td>
                        <td className="py-3 pr-4">
                          Créature qui parlera et marquera croyants et
                          mécréants
                        </td>
                        <td className="py-3">
                          Coran (27:82), Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lever du soleil à l&apos;ouest
                        </td>
                        <td className="py-3 pr-4">
                          Fermeture de la porte du repentir, tous croiront
                          mais la foi ne sera plus acceptée
                        </td>
                        <td className="py-3">
                          Bukhari et Muslim, Coran (6:158)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          La fumée (Ad-Doukhan)
                        </td>
                        <td className="py-3 pr-4">
                          Fumée visible couvrant la terre, châtiment douloureux
                        </td>
                        <td className="py-3">
                          Coran (44:10-11), Muslim
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le feu du Yémen
                        </td>
                        <td className="py-3 pr-4">
                          Feu rassemblant les gens vers le lieu de
                          rassemblement au Levant
                        </td>
                        <td className="py-3">
                          Muslim (hadith de Hudhayfa)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le lever du soleil à l&apos;ouest marque la fermeture
                      définitive de la porte du repentir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La fumée (Ad-Doukhan) couvrira l&apos;ensemble de
                      l&apos;humanité selon l&apos;interprétation d&apos;Ibn
                      Kathir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le feu du Yémen accompagnera les gens jusqu&apos;au
                      Levant, leur lieu de rassemblement final.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un vent doux emportera l&apos;âme de tout croyant,
                      ne laissant que les pires créatures sur terre.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Les-10-grands-signes-de-la-fin-du-monde-selon-lislam-authentique-1.jpg"
                    alt="Le lever du soleil à l'ouest et les derniers signes en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Préparation spirituelle */}
              {/* ============================================ */}
              <section id="preparation-spirituelle" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se préparer spirituellement face à ces signes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La connaissance des signes de la fin du monde en islam ne
                  vise pas à provoquer la peur ou l&apos;angoisse. L&apos;objectif
                  est tout autre : il s&apos;agit de renforcer la foi, de
                  raviver la conscience de la rencontre avec Allah et de
                  motiver le croyant à améliorer ses actes au quotidien. Le
                  Prophète (paix et salut sur lui) a montré l&apos;exemple
                  lorsqu&apos;on lui a demandé : &quot;Si l&apos;Heure survient
                  et que l&apos;un de vous tient un plant dans sa main, qu&apos;il
                  le plante s&apos;il le peut&quot; (Ahmad). Ce hadith illustre
                  parfaitement l&apos;attitude du musulman : agir positivement
                  jusqu&apos;au dernier souffle. Découvrez aussi{" "}
                  <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les conditions du repentir sincère en islam</Link>{" "}
                  pour concrétiser cette démarche.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">La prière régulière</Link>,
                  maintenue avec constance et
                  concentration (khushu&apos;), constitue le premier pilier de
                  cette préparation. Les cinq prières quotidiennes ne sont pas
                  seulement une obligation, elles représentent un ancrage
                  spirituel qui protège le croyant des épreuves de ce monde et
                  de l&apos;au-delà. Le Prophète (paix et salut sur lui) a
                  rappelé que la prière est la première chose sur laquelle le
                  serviteur sera interrogé le Jour du Jugement (At-Tirmidhi).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;aumône (sadaqa) et la charité occupent une place
                  fondamentale dans la préparation aux temps difficiles. Non
                  seulement elles purifient les biens du croyant, mais elles
                  renforcent la solidarité communautaire. Le Prophète (paix et
                  salut sur lui) a dit : &quot;La sadaqa éteint les péchés
                  comme l&apos;eau éteint le feu&quot; (At-Tirmidhi). Face aux
                  épreuves annoncées, la générosité devient un rempart
                  collectif.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Renforcer la prière et le dhikr quotidien
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Maintenir les cinq prières avec ponctualité, ajouter
                        les prières surérogatoires et multiplier le dhikr
                        (mention d&apos;Allah). La régularité dans
                        l&apos;adoration forge une forteresse spirituelle face
                        aux épreuves. Les invocations du matin et du soir
                        (adhkar) protègent le croyant tout au long de la
                        journée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Transmettre la foi et le savoir aux générations futures
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;enseignement du Coran, de la Sunna et des
                        valeurs islamiques aux enfants et aux jeunes est une
                        responsabilité collective. Le Prophète (paix et salut
                        sur lui) a dit : &quot;Le meilleur d&apos;entre vous est
                        celui qui apprend le Coran et l&apos;enseigne&quot;
                        (Bukhari). Face à la disparition annoncée du savoir,
                        la transmission devient un acte de résistance
                        spirituelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Maintenir la paix et la solidarité communautaire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les épreuves de la fin des temps toucheront
                        l&apos;ensemble de l&apos;humanité. La solidarité entre
                        musulmans, le respect du voisinage, le soutien aux
                        faibles et la réconciliation des cœurs sont des
                        remparts contre les divisions. Le Prophète (paix et
                        salut sur lui) a dit : &quot;Le musulman est le frère
                        du musulman, il ne le trahit pas et ne le livre
                        pas&quot; (Bukhari et Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Pratiquer l&apos;humilité et le tawakkul
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tawakkul (confiance en Allah) ne signifie pas la
                        passivité, mais l&apos;action accompagnée de la
                        certitude que le résultat appartient à Allah. Face aux
                        événements cosmiques annoncés, le croyant garde sa
                        sérénité en sachant que rien n&apos;échappe à la
                        volonté divine. Le Coran rappelle dans sourate
                        At-Talaq (65:3) : &quot;Quiconque place sa confiance
                        en Allah, Il lui suffit.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Lire sourate Al-Kahf chaque vendredi pour la protection
                      contre les épreuves, notamment celle du Dajjal.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Multiplier l&apos;aumône et les actes de bonté pour
                      renforcer les liens sociaux et purifier le cœur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Acquérir le savoir religieux authentique et le
                      transmettre aux générations futures.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Cultiver le tawakkul : agir avec détermination tout en
                      plaçant sa confiance absolue en Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se rappeler le hadith du plant : agir positivement
                      jusqu&apos;au dernier instant, même si l&apos;Heure
                      survient.
                    </span>
                  </li>
                </ul>

                {/* Profils de lecteurs */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le jeune musulman
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La connaissance des signes de la fin du monde renforce
                      la foi naissante et aide à donner un sens profond à la
                      pratique religieuse. Apprendre ces signes, c&apos;est
                      comprendre pourquoi la prière, le Coran et la communauté
                      sont des priorités. Le savoir prophétique donne une
                      vision claire de l&apos;avenir et motive à vivre selon
                      les valeurs de l&apos;islam.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le parent éducateur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Transmettre les signes de la fin du monde aux enfants
                      avec sagesse et mesure est un devoir. Il ne s&apos;agit
                      pas de les effrayer, mais de leur donner les clés pour
                      comprendre le monde à travers le prisme de la foi.
                      L&apos;accent doit être mis sur la confiance en Allah et
                      la beauté de la pratique quotidienne.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le chercheur de vérité
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;eschatologie islamique offre une vision cohérente
                      et détaillée de la fin des temps, fondée sur des sources
                      authentiques. Pour celui qui cherche à comprendre
                      l&apos;avenir de l&apos;humanité, l&apos;étude des
                      signes majeurs et mineurs ouvre des perspectives
                      profondes sur le sens de l&apos;existence et la sagesse
                      divine.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le pratiquant régulier
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Connaître les signes de l&apos;Heure renforce la
                      motivation à persévérer dans l&apos;adoration. Chaque
                      prière, chaque aumône, chaque lecture du Coran prend une
                      dimension nouvelle lorsqu&apos;on sait que le temps est
                      compté. Le pratiquant régulier y trouve une source
                      d&apos;énergie spirituelle pour maintenir sa constance.
                    </p>
                  </div>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir la préparation spirituelle face à la fin des temps"
                  href="/fin-monde-islam-preparation"
                  linkText="Voir le programme de préparation spirituelle"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Mémorisez les sourates qui protègent des épreuves"
                description="La connaissance du Coran est la meilleure préparation face aux épreuves de la fin des temps. Sourate Al-Kahf, les invocations de protection... formez-vous dès maintenant."
                preselect="coran"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sujets liés à l&apos;eschatologie islamique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/fin-monde-islam-preparation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Préparation à la fin des temps
                  </Link>
                  <Link
                    href="/dajjal-signes-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le Dajjal : signes et protection
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection contre la sorcellerie
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Les rêves en islam
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Comprendre l&apos;islam
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
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
