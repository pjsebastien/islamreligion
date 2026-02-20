import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import HadithCard from "@/components/HadithCard";

export const metadata: Metadata = {
  title:
    "Psoriasis remède arabe : soins naturels et médecine prophétique pour la peau",
  description:
    "Découvrez les remèdes arabes contre le psoriasis : huile de nigelle, miel, hijama, huile d'olive, henné et invocations de guérison. Soins naturels issus de la tradition prophétique en complément d'un suivi médical.",
  alternates: {
    canonical: "https://www.islamreligion.fr/psoriasis-remede-arabe",
  },
};

const tocItems = [
  {
    id: "comprendre-psoriasis",
    label: "Comprendre le psoriasis : causes et mécanismes",
  },
  {
    id: "remedes-prophetiques",
    label: "Remèdes prophétiques pour apaiser le psoriasis",
  },
  {
    id: "hijama-peau",
    label: "La hijama et ses bienfaits pour la peau",
  },
  {
    id: "alimentation-sunna",
    label: "Alimentation anti-inflammatoire inspirée de la Sunna",
  },
  {
    id: "dimension-spirituelle",
    label: "Invocations, patience et soutien spirituel",
  },
  {
    id: "consulter-dermatologue",
    label: "Quand consulter un dermatologue",
  },
];

const faqItems = [
  {
    question:
      "L'huile de nigelle peut-elle vraiment soulager le psoriasis ?",
    answer:
      "L'huile de nigelle (Nigella sativa) contient de la thymoquinone, un composé aux propriétés anti-inflammatoires et immunomodulatrices documentées par plusieurs études scientifiques. Appliquée localement sur les plaques de psoriasis, elle peut contribuer à réduire les rougeurs et les démangeaisons. Elle ne remplace cependant pas un traitement dermatologique et doit être utilisée en complément, après avis médical.",
  },
  {
    question:
      "La hijama est-elle recommandée pour le psoriasis en islam ?",
    answer:
      "La hijama (ventouses humides) est une pratique recommandée par le Prophète ﷺ pour divers maux. Certains praticiens rapportent une amélioration des symptômes cutanés après des séances régulières, grâce à la stimulation de la circulation sanguine et à l'élimination de toxines. Elle doit impérativement être pratiquée par un professionnel formé, dans des conditions d'hygiène strictes, et ne remplace pas un suivi dermatologique.",
  },
  {
    question:
      "Le miel peut-il être appliqué directement sur les plaques de psoriasis ?",
    answer:
      "Oui, le miel pur (de préférence miel de manuka, de sidr ou de thym) possède des propriétés antibactériennes, hydratantes et cicatrisantes reconnues. En application locale sur les plaques, il peut apaiser les irritations et favoriser la régénération cutanée. Il est conseillé de faire un test sur une petite zone de peau au préalable et de consulter son dermatologue en cas de doute.",
  },
  {
    question:
      "Quelles invocations réciter pour demander la guérison du psoriasis ?",
    answer:
      "Le Prophète ﷺ a enseigné plusieurs invocations de guérison. La plus connue est : « Adhhib al-ba's, Rabb an-nas, washfi anta ash-Shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqaman » (Ôte le mal, Seigneur des hommes, et guéris. Tu es Celui qui guérit, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie). La récitation régulière, avec conviction et patience, fait partie intégrante de l'approche islamique de la santé.",
  },
  {
    question:
      "Le psoriasis est-il contagieux ?",
    answer:
      "Non, le psoriasis n'est absolument pas contagieux. C'est une maladie auto-immune chronique liée à un dérèglement du système immunitaire. Il ne se transmet ni par contact physique, ni par le partage d'objets. Cette idée reçue contribue malheureusement à l'isolement social des personnes atteintes.",
  },
  {
    question:
      "Peut-on combiner remèdes arabes et traitement médical pour le psoriasis ?",
    answer:
      "Oui, et c'est même la démarche recommandée. Les remèdes arabes et prophétiques (huile de nigelle, miel, huile d'olive, hijama) peuvent compléter un traitement dermatologique, mais ne doivent jamais s'y substituer. Il est important d'informer son médecin de tout produit naturel utilisé en parallèle, car certaines interactions sont possibles.",
  },
  {
    question:
      "L'alimentation a-t-elle un impact sur le psoriasis ?",
    answer:
      "L'alimentation joue un rôle reconnu dans la gestion du psoriasis. Les aliments anti-inflammatoires (poissons gras, huile d'olive, fruits, légumes, curcuma) peuvent aider à réduire les poussées, tandis que les aliments pro-inflammatoires (sucres raffinés, aliments ultra-transformés, excès de viande rouge) peuvent les aggraver. La Sunna encourageait déjà une alimentation équilibrée, riche en produits naturels.",
  },
  {
    question:
      "Le stress aggrave-t-il le psoriasis selon la médecine et l'islam ?",
    answer:
      "Le stress est un facteur déclencheur majeur des poussées de psoriasis, ce que confirment aussi bien la médecine moderne que la sagesse islamique. L'islam offre des outils puissants de gestion du stress : la prière régulière, le dhikr (rappel de Dieu), la récitation du Coran et la patience (sabr) face à l'épreuve. Ces pratiques contribuent à un apaisement global qui peut avoir un effet positif sur les symptômes.",
  },
];

export default function PsoriasisRemedeArabe() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/psoriasis-remede-arabe/#article",
        headline:
          "Psoriasis remède arabe : soins naturels et médecine prophétique pour la peau",
        description:
          "Découvrez les remèdes arabes contre le psoriasis : huile de nigelle, miel, hijama, huile d'olive, henné et invocations de guérison.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Psoriasis-remede-arabe-traitements-naturels-et-invocations-de-protection-1.jpg",
        datePublished: "2025-08-27",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/psoriasis-remede-arabe/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/psoriasis-remede-arabe/#breadcrumb",
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
            name: "Remèdes arabes",
            item: "https://www.islamreligion.fr/remede-arabe",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Psoriasis",
            item: "https://www.islamreligion.fr/psoriasis-remede-arabe",
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
          title="Psoriasis remède arabe : soins naturels et médecine prophétique"
          subtitle="Huile de nigelle, miel, hijama, huile d'olive et invocations de guérison : les soins traditionnels arabes pour apaiser le psoriasis, en complément d'un suivi médical."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Psoriasis-remede-arabe-traitements-naturels-et-invocations-de-protection-1.jpg"
          imageAlt="Remèdes arabes naturels contre le psoriasis, huile de nigelle et plantes médicinales"
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

              {/* Fil d'Ariane */}
              <nav
                className="mb-8 text-sm text-foreground-secondary"
                aria-label="Fil d'Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link href="/remede-arabe" className="hover:text-primary">
                  Remèdes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Psoriasis</span>
              </nav>

              {/* MedicalDisclaimer en début */}
              <MedicalDisclaimer />

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En bref
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le psoriasis est une maladie auto-immune chronique qui touche
                  la peau et affecte la qualité de vie de millions de personnes.
                  La médecine prophétique et les traditions arabes proposent
                  plusieurs soins naturels pour apaiser les symptômes : huile de
                  nigelle, miel, huile d&apos;olive, henné et hijama. Ces
                  approches, toujours utilisées en complément d&apos;un suivi
                  dermatologique, s&apos;accompagnent d&apos;invocations de
                  guérison et d&apos;une patience ancrée dans la foi.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Comprendre le psoriasis */}
              {/* ============================================ */}
              <section id="comprendre-psoriasis" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre le psoriasis : causes, mécanismes et formes
                  cliniques
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le psoriasis est une maladie inflammatoire chronique de la
                  peau, d&apos;origine auto-immune. Le système immunitaire
                  attaque par erreur les cellules cutanées saines, provoquant un
                  renouvellement accéléré de l&apos;épiderme. Là où une cellule
                  cutanée met normalement 28 jours à se renouveler, ce cycle se
                  réduit à 3 ou 4 jours chez une personne atteinte de
                  psoriasis.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce phénomène entraîne l&apos;accumulation de cellules mortes à
                  la surface de la peau, formant des plaques rouges recouvertes
                  de squames blanches ou argentées. Ces lésions s&apos;accompagnent
                  souvent de démangeaisons, de sensations de brûlure et parfois
                  de douleurs. Le psoriasis touche environ 2 à 3 % de la
                  population mondiale, sans distinction d&apos;origine
                  géographique ou ethnique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les facteurs déclencheurs
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs facteurs peuvent déclencher ou aggraver les poussées
                  de psoriasis. Leur connaissance aide à mieux gérer la maladie
                  au quotidien.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prédisposition génétique</strong> : un tiers des
                      personnes atteintes ont un antécédent familial.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Stress et émotions</strong> : le stress est l&apos;un
                      des premiers déclencheurs de poussées, confirmé par la
                      médecine moderne et observé dans la tradition islamique.
                      Découvrez des pistes pour{" "}
                      <Link
                        href="/remede-angoisse-islam"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        apaiser l&apos;angoisse et le stress
                      </Link>{" "}
                      grâce aux enseignements prophétiques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Infections</strong> : les infections
                      streptococciques, notamment les angines, peuvent
                      déclencher un psoriasis en gouttes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Climat</strong> : le froid et la sécheresse
                      aggravent souvent les symptômes, tandis que le soleil
                      modéré peut les améliorer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Alimentation</strong> : certains aliments
                      pro-inflammatoires peuvent amplifier les poussées.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les principales formes de psoriasis
                </h3>

                {/* TABLEAU 1 : Formes de psoriasis */}
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Forme
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aspect des lésions
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Zones touchées
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Fréquence
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Psoriasis en plaques
                        </td>
                        <td className="py-3 pr-4">
                          Plaques rouges, squames épaisses blanches ou argentées
                        </td>
                        <td className="py-3 pr-4">
                          Coudes, genoux, cuir chevelu, bas du dos
                        </td>
                        <td className="py-3">80 % des cas</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Psoriasis en gouttes
                        </td>
                        <td className="py-3 pr-4">
                          Petites lésions en forme de gouttes
                        </td>
                        <td className="py-3 pr-4">
                          Tronc, bras, jambes
                        </td>
                        <td className="py-3">10 % des cas</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Psoriasis inversé
                        </td>
                        <td className="py-3 pr-4">
                          Plaques lisses, rouges, sans squames
                        </td>
                        <td className="py-3 pr-4">
                          Plis cutanés (aisselles, aines)
                        </td>
                        <td className="py-3">3 à 7 % des cas</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Psoriasis du cuir chevelu
                        </td>
                        <td className="py-3 pr-4">
                          Plaques épaisses avec pellicules abondantes.
                          Voir aussi les soins pour{" "}
                          <Link
                            href="/alopecie-remede-islam"
                            className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                          >
                            la chute de cheveux et les soins capillaires
                          </Link>
                        </td>
                        <td className="py-3 pr-4">
                          Cuir chevelu, lisière du front
                        </td>
                        <td className="py-3">50 % des patients</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rhumatisme psoriasique
                        </td>
                        <td className="py-3 pr-4">
                          Douleurs articulaires associées aux lésions cutanées
                        </td>
                        <td className="py-3 pr-4">
                          Articulations des mains, pieds, dos
                        </td>
                        <td className="py-3">20 à 30 % des patients</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le psoriasis n&apos;est ni contagieux ni lié à un manque
                  d&apos;hygiène. Cette précision est importante, car les idées
                  reçues sur cette maladie contribuent à l&apos;isolement social
                  des personnes atteintes. En{" "}
                  <Link
                    href="/"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    islam
                  </Link>
                  , la maladie est considérée comme une épreuve (<em>ibtila</em>)
                  qui, vécue avec patience, purifie le croyant et élève son rang
                  auprès de Dieu.
                </p>

                <HadithCard
                  arabic="مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ"
                  text="Aucun musulman n'est atteint de fatigue, de maladie, de souci, de tristesse, de tort ou d'angoisse, même d'une simple piqûre d'épine, sans que Dieu ne lui efface par cela certains de ses péchés."
                  source="Hadith rapporté par al-Bukhari et Muslim"
                />

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Psoriasis-remede-arabe-traitements-naturels-et-invocations-de-protection-1.jpg"
                    alt="Soins naturels arabes pour apaiser le psoriasis, huiles et plantes médicinales"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Remèdes prophétiques */}
              {/* ============================================ */}
              <section
                id="remedes-prophetiques"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Remèdes prophétiques pour apaiser le psoriasis
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    médecine prophétique
                  </Link>{" "}
                  propose plusieurs soins naturels dont les propriétés
                  bénéfiques pour la peau ont été confirmées par la recherche
                  moderne. Voici les principaux remèdes traditionnels
                  applicables au psoriasis.
                </p>

                {/* Huile de nigelle */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile de nigelle (<em>habba sawda</em>) : la
                    thymoquinone au service de la peau
                  </h3>

                  <HadithCard
                    arabic="عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ"
                    text="Utilisez cette graine noire, car elle contient un remède contre toute maladie, sauf la mort."
                    source="Hadith rapporté par al-Bukhari et Muslim"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    L&apos;huile de nigelle (<em>Nigella sativa</em>) est le
                    remède prophétique le plus documenté pour les affections
                    cutanées. Sa substance active principale, la thymoquinone,
                    possède des propriétés anti-inflammatoires,
                    immunomodulatrices et antioxydantes confirmées par de
                    nombreuses études. On retrouve d&apos;ailleurs{" "}
                    <Link
                      href="/remede-yeux-islam-soins"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      les bienfaits de la nigelle pour d&apos;autres maux
                    </Link>
                    , notamment les affections oculaires. Dans le cadre du psoriasis, elle agit
                    sur plusieurs fronts.
                  </p>

                  <ul className="mt-4 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        <strong>Anti-inflammatoire</strong> : la thymoquinone
                        inhibe les cytokines pro-inflammatoires (TNF-alpha,
                        IL-6) impliquées dans les poussées de psoriasis.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        <strong>Immunomodulateur</strong> : elle contribue à
                        réguler la réponse immunitaire excessive responsable du
                        renouvellement cellulaire accéléré.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        <strong>Hydratant et protecteur</strong> : riche en
                        acides gras, l&apos;huile nourrit la peau sèche et
                        abîmée.
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4 text-sm text-foreground-secondary">
                    <strong>Application :</strong> appliquer quelques gouttes
                    d&apos;huile de nigelle pressée à froid sur les plaques, 2
                    fois par jour, en massant délicatement. Peut être mélangée
                    à de l&apos;huile d&apos;olive pour renforcer
                    l&apos;hydratation. En interne, une cuillère à café par
                    jour dans du miel, à jeun.
                  </p>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel en application locale
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Coran présente le miel comme porteur de guérison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    variées, dans laquelle il y a une guérison pour les
                    gens&nbsp;&raquo; (sourate An-Nahl, verset 69). Ses
                    propriétés sont nombreuses et documentées par la science
                    moderne.
                  </p>

                  <ul className="mt-4 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Propriétés antibactériennes qui préviennent les
                        surinfections sur les zones lésées.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Effet hydratant et cicatrisant qui favorise la
                        régénération cutanée.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Action anti-inflammatoire locale qui apaise les
                        rougeurs et les démangeaisons.
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4 text-sm text-foreground-secondary">
                    <strong>Application :</strong> appliquer une fine couche de
                    miel pur (manuka, sidr ou thym) sur les plaques propres.
                    Laisser poser 20 à 30 minutes, puis rincer à l&apos;eau
                    tiède. Renouveler 2 à 3 fois par semaine. Peut être mélangé
                    à de la poudre de curcuma pour un effet combiné.
                  </p>
                </div>

                {/* Huile d'olive */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile d&apos;olive : l&apos;arbre béni pour la peau
                  </h3>

                  <HadithCard
                    arabic="كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ مُبَارَكَةٍ"
                    text="Mangez de l'huile d'olive et enduisez-vous-en, car elle provient d'un arbre béni."
                    source="Hadith rapporté par at-Tirmidhi et Ibn Majah"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    L&apos;huile d&apos;olive extra-vierge est riche en
                    polyphénols, en vitamine E et en acides gras
                    mono-insaturés. Elle agit comme un émollient naturel
                    puissant pour les peaux fragilisées par le psoriasis. Le
                    Prophète ﷺ recommandait de s&apos;en enduire le corps,
                    une pratique dont la science moderne confirme les bienfaits
                    dermatologiques.
                  </p>

                  <p className="mt-4 text-sm text-foreground-secondary">
                    <strong>Application :</strong> masser les zones sèches et
                    les plaques avec de l&apos;huile d&apos;olive extra-vierge
                    après la douche, sur peau encore légèrement humide. Pour le
                    cuir chevelu, l&apos;appliquer en masque 30 minutes avant
                    le lavage pour ramollir les squames.
                  </p>
                </div>

                {/* Henné */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le henné : un soin cutané ancestral
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le henné (<em>Lawsonia inermis</em>) est utilisé depuis des
                    siècles dans la tradition arabe pour les soins de la peau.
                    Le Prophète ﷺ le recommandait comme teinture et comme
                    remède pour les irritations cutanées. Ses propriétés
                    astringentes, antifongiques et rafraîchissantes en font un
                    soin complémentaire intéressant pour le psoriasis.
                  </p>

                  <ul className="mt-4 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Action rafraîchissante qui soulage les démangeaisons et
                        les sensations de brûlure.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Propriétés antifongiques utiles quand le psoriasis
                        s&apos;accompagne de surinfection.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Effet protecteur sur le cuir chevelu, apaisant les
                        plaques sous les cheveux.
                      </span>
                    </li>
                  </ul>

                  <p className="mt-4 text-sm text-foreground-secondary">
                    <strong>Application :</strong> préparer une pâte de henné
                    naturel (sans additifs chimiques) avec de l&apos;eau tiède.
                    Appliquer sur les zones concernées, laisser sécher puis
                    rincer. Précaution : tester sur une petite zone au préalable
                    pour vérifier l&apos;absence de réaction allergique.
                  </p>
                </div>

                {/* Résumé des remèdes */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Autres soins naturels complémentaires
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">Aloe vera</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Gel apaisant et hydratant, appliqué directement sur les
                      plaques. Aide à réduire les rougeurs et favorise la
                      cicatrisation. Privilégier le gel pur sans additifs.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">Curcuma</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Puissant anti-inflammatoire naturel (curcumine). En pâte
                      locale ou en complément alimentaire. Mélangé au miel, il
                      forme un cataplasme apaisant.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Vinaigre de cidre
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Dilué dans l&apos;eau (1 volume pour 3 volumes d&apos;eau),
                      il peut soulager les démangeaisons du cuir chevelu. Ne
                      jamais appliquer pur sur les lésions.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Bain d&apos;avoine
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Ajouter de la farine d&apos;avoine colloïdale à l&apos;eau
                      du bain pour calmer les démangeaisons et adoucir la peau.
                      Un soin ancestral que pratiquaient les familles du
                      Maghreb.
                    </p>
                  </div>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous les soins naturels de la tradition prophétique"
                  href="/remede-arabe"
                  linkText="Voir les remèdes arabes et la médecine prophétique"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Hijama et peau */}
              {/* ============================================ */}
              <section id="hijama-peau" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La hijama et ses bienfaits pour la peau psoriasique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La hijama (<em>cupping therapy</em>) est l&apos;un des
                  remèdes les plus recommandés par le Prophète ﷺ. Cette
                  technique ancestrale de ventouses, pratiquée dans le monde
                  arabe depuis des millénaires, suscite un intérêt croissant
                  pour la prise en charge des affections cutanées chroniques,
                  y compris le psoriasis.
                </p>

                <HadithCard
                  arabic="إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ"
                  text="Le meilleur de vos remèdes est la hijama."
                  source="Hadith rapporté par al-Bukhari"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Comment la hijama peut aider contre le psoriasis
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La hijama agit selon plusieurs mécanismes qui peuvent
                  contribuer à soulager les symptômes du psoriasis.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Amélioration de la circulation sanguine</strong> :
                      l&apos;aspiration stimule le flux sanguin dans les zones
                      traitées, favorisant l&apos;apport de nutriments et
                      d&apos;oxygène aux cellules cutanées endommagées.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet détoxifiant</strong> : les ventouses
                      humides permettent d&apos;éliminer des substances
                      stagnantes (sang altéré, toxines) qui peuvent contribuer
                      aux inflammations chroniques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Modulation de la réponse immunitaire</strong> :
                      certaines recherches suggèrent que la hijama peut
                      influencer les mécanismes immunitaires impliqués dans les
                      maladies auto-immunes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réduction du stress</strong> : la séance
                      procure un effet relaxant global qui peut contribuer à
                      diminuer les poussées liées au stress.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Précautions pour la hijama en cas de psoriasis
                </h3>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-amber-800">
                        Points de vigilance
                      </p>
                      <ul className="mt-2 space-y-1 text-sm leading-relaxed text-amber-700">
                        <li>
                          Ne jamais pratiquer la hijama directement sur des
                          plaques de psoriasis actives ou des lésions ouvertes.
                        </li>
                        <li>
                          Faire appel uniquement à un praticien formé et
                          expérimenté, utilisant du matériel stérile.
                        </li>
                        <li>
                          Consulter son dermatologue avant de débuter les
                          séances, surtout en cas de traitement
                          immunosuppresseur.
                        </li>
                        <li>
                          Espacer les séances d&apos;au moins 3 à 4 semaines
                          pour permettre à la peau de bien cicatriser.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière, invocation de guérison en islam pour le psoriasis"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Alimentation anti-inflammatoire */}
              {/* ============================================ */}
              <section
                id="alimentation-sunna"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Alimentation anti-inflammatoire inspirée de la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;alimentation joue un rôle reconnu dans la gestion du
                  psoriasis. La recherche scientifique montre qu&apos;un
                  régime anti-inflammatoire peut réduire la fréquence et
                  l&apos;intensité des poussées. Pour aller plus loin,
                  découvrez comment{" "}
                  <Link
                    href="/remede-arabe-maigrir-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    adapter son alimentation selon la Sunna
                  </Link>
                  . Le Prophète ﷺ
                  promouvait déjà, il y a quatorze siècles, les principes
                  d&apos;une alimentation saine, modérée et naturelle.
                </p>

                <HadithCard
                  arabic="مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ ابْنِ آدَمَ أُكُلَاتٌ يُقِمْنَ صُلْبَهُ"
                  text="L'homme n'a jamais rempli un récipient pire que son estomac. Quelques bouchées suffisent à l'être humain pour maintenir son dos droit."
                  source="Hadith rapporté par at-Tirmidhi et Ibn Majah"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les aliments à privilégier
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voici les catégories d&apos;aliments qui peuvent aider à
                  réduire l&apos;inflammation associée au psoriasis, dont
                  beaucoup sont mentionnés dans la tradition prophétique.
                </p>

                {/* TABLEAU 2 : Alimentation */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Catégorie
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aliments recommandés
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bienfaits pour le psoriasis
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Référence Sunna
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huiles saines
                        </td>
                        <td className="py-3 pr-4">
                          Huile d&apos;olive, huile de nigelle
                        </td>
                        <td className="py-3 pr-4">
                          Anti-inflammatoire, riche en antioxydants
                        </td>
                        <td className="py-3">
                          Arbre béni (Coran) et habba sawda
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fruits
                        </td>
                        <td className="py-3 pr-4">
                          Dattes, figues, raisins, grenades
                        </td>
                        <td className="py-3 pr-4">
                          Vitamines, fibres, pouvoir antioxydant
                        </td>
                        <td className="py-3">
                          Mentionnés dans le Coran et la Sunna
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poissons gras
                        </td>
                        <td className="py-3 pr-4">
                          Sardines, maquereaux, saumon
                        </td>
                        <td className="py-3 pr-4">
                          Oméga-3 anti-inflammatoires
                        </td>
                        <td className="py-3">
                          Poisson consommé par le Prophète ﷺ
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Légumineuses
                        </td>
                        <td className="py-3 pr-4">
                          Lentilles, pois chiches, fèves
                        </td>
                        <td className="py-3 pr-4">
                          Protéines végétales, fibres, minéraux
                        </td>
                        <td className="py-3">
                          Consommées à Médine au temps du Prophète ﷺ
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel
                        </td>
                        <td className="py-3 pr-4">
                          Miel pur (sidr, manuka, thym)
                        </td>
                        <td className="py-3 pr-4">
                          Antibactérien, anti-inflammatoire, prébiotique
                        </td>
                        <td className="py-3">
                          &laquo;&nbsp;Guérison pour les gens&nbsp;&raquo; (Coran)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Céréales complètes
                        </td>
                        <td className="py-3 pr-4">
                          Orge (talbina), blé complet
                        </td>
                        <td className="py-3 pr-4">
                          Fibres, vitamines du groupe B, satiété
                        </td>
                        <td className="py-3">
                          Talbina recommandée par le Prophète ﷺ
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Épices
                        </td>
                        <td className="py-3 pr-4">
                          Curcuma, gingembre, cannelle
                        </td>
                        <td className="py-3 pr-4">
                          Puissants anti-inflammatoires naturels
                        </td>
                        <td className="py-3">
                          Utilisées dans la tradition arabe
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les aliments à limiter ou à éviter
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains aliments favorisent l&apos;inflammation et peuvent
                  aggraver les poussées de psoriasis. La modération alimentaire
                  prônée par la Sunna prend ici tout son sens.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      <strong>Sucres raffinés</strong> : sodas, pâtisseries
                      industrielles, confiseries. Ils augmentent
                      l&apos;inflammation systémique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      <strong>Aliments ultra-transformés</strong> : plats
                      préparés, charcuteries industrielles. Riches en additifs
                      et en graisses trans.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      <strong>Excès de viande rouge</strong> : consommée en
                      grande quantité, elle favorise la production de cytokines
                      inflammatoires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      <strong>Alcool</strong> : interdit en islam et reconnu
                      comme facteur aggravant du psoriasis par la dermatologie.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      <strong>Fritures et huiles raffinées</strong> : elles
                      contribuent au déséquilibre entre oméga-6 et oméga-3,
                      amplifiant l&apos;inflammation.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le principe prophétique de ne remplir son estomac qu&apos;au
                  tiers (un tiers pour la nourriture, un tiers pour l&apos;eau,
                  un tiers pour l&apos;air) est particulièrement pertinent.
                  Cette modération alimentaire aide à réguler
                  l&apos;inflammation et à maintenir un poids santé, deux
                  paramètres directement liés à la sévérité du psoriasis.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Sorcellerie en islam : protection et invocations spirituelles"
                  description="Découvrez les protections coraniques et les invocations contre le mal en islam."
                  href="/sorcellerie-islam-protection"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Dimension spirituelle */}
              {/* ============================================ */}
              <section
                id="dimension-spirituelle"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations de guérison, patience face à l&apos;épreuve et
                  soutien spirituel
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le psoriasis ne touche pas que la peau. Son impact
                  psychologique est souvent sous-estimé : honte, isolement
                  social, anxiété, baisse de l&apos;estime de soi. L&apos;islam
                  offre un cadre spirituel rassurant pour traverser cette
                  épreuve avec dignité et confiance.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les invocations de guérison (<em>du&apos;a ash-shifa</em>)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné plusieurs invocations à réciter
                  lorsqu&apos;on est atteint d&apos;une maladie. Ces
                  invocations ne sont pas de simples mots : elles expriment la
                  confiance totale en Dieu comme seul guérisseur (Ash-Shafi)
                  et ancrent le malade dans une relation apaisante avec son
                  Créateur. La roqya légitime constitue un pan essentiel de
                  cette démarche ; consultez notre guide sur{" "}
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    la guérison spirituelle par la roqya
                  </Link>{" "}
                  pour approfondir le sujet.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ
                      الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا
                      يُغَادِرُ سَقَمًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Ôte le mal, Seigneur des hommes, et guéris.
                      Tu es Celui qui guérit, il n&apos;y a de guérison que Ta
                      guérison, une guérison qui ne laisse aucune
                      maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari et Muslim.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      اللَّهُمَّ رَبَّ النَّاسِ مُذْهِبَ الْبَأْسِ اشْفِ
                      أَنْتَ الشَّافِي لَا شَافِيَ إِلَّا أَنْتَ اشْفِ
                      شِفَاءً لَا يُغَادِرُ سَقَمًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Ô Dieu, Seigneur des hommes, Toi qui
                      dissipes le mal, guéris ! Tu es Celui qui guérit, il n&apos;y
                      a de guérisseur que Toi. Accorde une guérison qui ne
                      laisse aucune maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ
                      شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ
                      السَّمِيعُ الْعَلِيمُ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Au nom de Dieu, avec le nom duquel rien ne
                      peut nuire sur terre ni au ciel, et Il est
                      l&apos;Audient, l&apos;Omniscient.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par Abu Dawud et at-Tirmidhi. À réciter 3 fois
                      le matin et 3 fois le soir.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La patience (<em>sabr</em>) face à la maladie chronique
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Vivre avec le psoriasis demande une patience quotidienne.
                  L&apos;islam valorise cette patience comme un acte
                  d&apos;adoration à part entière. Le Coran enseigne :
                </p>

                <HadithCard
                  text="Les patients seront rétribués sans compter."
                  source="Sourate Az-Zumar, verset 10"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La maladie chronique, dans la vision islamique, n&apos;est
                  pas une punition mais une épreuve qui, traversée avec
                  patience, purifie l&apos;âme et rapproche de Dieu. Chaque
                  instant de douleur supporté avec dignité est une occasion
                  d&apos;élévation spirituelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Impact psychologique et soutien communautaire
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le psoriasis affecte profondément le bien-être
                  psychologique. Les études montrent que les personnes
                  atteintes ont un risque accru de dépression et
                  d&apos;anxiété. Voici les approches de soutien que la
                  tradition islamique offre.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne récemment diagnostiquée
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;annonce du diagnostic peut être déstabilisante.
                      La foi apporte un cadre de sens : cette épreuve a une
                      sagesse, même si elle n&apos;est pas immédiatement
                      visible. S&apos;entourer de proches bienveillants,
                      pratiquer le dhikr et confier ses inquiétudes à Dieu
                      aide à traverser cette phase initiale.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour un parent d&apos;enfant atteint
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Voir son enfant souffrir est une épreuve supplémentaire.
                      L&apos;islam encourage à réciter les invocations de
                      protection (sourates Al-Falaq et An-Nas) sur
                      l&apos;enfant, à lui enseigner la patience par
                      l&apos;exemple et à ne pas le surprotéger au point de
                      l&apos;isoler socialement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne qui vit avec la maladie depuis
                      longtemps
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La fatigue émotionnelle liée à la chronicité est réelle.
                      Le renouvellement de l&apos;intention, la diversification
                      des invocations et la participation à des groupes de
                      soutien (en mosquée ou en ligne) peuvent raviver
                      l&apos;énergie spirituelle et rompre l&apos;isolement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour l&apos;entourage du malade
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Visiter le malade est un acte méritoire en islam. Le
                      Prophète ﷺ a dit que celui qui visite un malade se
                      trouve dans les jardins du Paradis jusqu&apos;à ce qu&apos;il
                      revienne. Soutenir sans juger, écouter sans minimiser et
                      accompagner dans les soins sont autant de manifestations
                      concrètes de la fraternité islamique.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La récitation du{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>{" "}
                  au quotidien constitue un soutien psychologique et spirituel
                  puissant. Le Coran lui-même se décrit comme &laquo;&nbsp;une
                  guérison pour ce qui est dans les poitrines&nbsp;&raquo;
                  (sourate Yunus, verset 57), englobant aussi bien les maux
                  physiques que les souffrances de l&apos;âme.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
                    alt="Coran ouvert dans la nature, symbole de guérison spirituelle pour les personnes atteintes de psoriasis"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La prière et le dhikr comme outils de gestion du stress
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Puisque le stress est un facteur déclencheur majeur des
                  poussées de psoriasis, les pratiques spirituelles
                  quotidiennes prennent une dimension thérapeutique
                  complémentaire.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La prière (salat)</strong> : cinq moments par
                      jour de recueillement et de déconnexion du stress
                      quotidien. L&apos;ablution elle-même, avec le contact de
                      l&apos;eau tiède sur la peau, peut apaiser
                      temporairement les démangeaisons.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le dhikr</strong> : la répétition des noms de
                      Dieu et des formules de glorification agit comme une
                      méditation profonde, diminuant le cortisol (hormone du
                      stress) et favorisant un état de calme intérieur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les adhkar du matin et du soir</strong> : une
                      routine protectrice qui structure la journée et ancre le
                      croyant dans la sérénité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La lecture du Coran</strong> : le fait de lire
                      ou d&apos;écouter le{" "}
                      <Link
                        href="/apprendre-larabe"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        Coran en arabe
                      </Link>{" "}
                      produit un effet apaisant documenté, lié à la musicalité
                      de la récitation et à la profondeur du sens.
                    </span>
                  </li>
                </ul>

                <HadithCard
                  text="Certes, c'est par le rappel de Dieu que les cœurs s'apaisent."
                  source="Sourate Ar-Ra'd, verset 28"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Consulter un dermatologue */}
              {/* ============================================ */}
              <section
                id="consulter-dermatologue"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand consulter un dermatologue : l&apos;importance du suivi
                  médical
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les remèdes arabes et prophétiques sont des compléments
                  précieux, mais ils ne dispensent jamais d&apos;un suivi
                  médical. Le Prophète ﷺ a lui-même encouragé le recours aux
                  médecins.
                </p>

                <HadithCard
                  arabic="تَدَاوَوْا عِبَادَ اللَّهِ فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً"
                  text="Soignez-vous, serviteurs de Dieu, car Dieu n'a pas créé de maladie sans avoir créé son remède."
                  source="Hadith rapporté par Abu Dawud et at-Tirmidhi"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Situations qui nécessitent une consultation urgente
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Extension rapide des plaques sur le corps.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Douleurs articulaires associées (suspicion de rhumatisme
                      psoriasique).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Surinfection des lésions (pus, chaleur excessive,
                      fièvre).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Impact psychologique sévère (isolement, dépression,
                      idées sombres).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Inefficacité des traitements locaux après plusieurs
                      semaines.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les traitements médicaux du psoriasis
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le dermatologue dispose de plusieurs lignes de traitement
                  selon la sévérité du psoriasis. Les remèdes arabes peuvent
                  compléter ces traitements, jamais les remplacer.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Traitements topiques (locaux)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Crèmes à base de corticoïdes, dérivés de la vitamine
                        D, émollients. Ils constituent le traitement de
                        première intention pour les formes légères à modérées.
                        Les émollients peuvent être enrichis d&apos;huile
                        d&apos;olive ou de nigelle pour un effet combiné.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Photothérapie
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Exposition contrôlée aux rayons UV en cabine médicale.
                        Elle ralentit le renouvellement cellulaire et réduit
                        l&apos;inflammation. L&apos;exposition modérée au
                        soleil naturel, encouragée dans la tradition
                        prophétique, peut avoir un effet similaire mais doit
                        rester prudente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Traitements systémiques
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Médicaments par voie orale ou injectable
                        (méthotrexate, ciclosporine, biothérapies) pour les
                        formes modérées à sévères. Attention : informez
                        toujours votre médecin si vous prenez des compléments
                        naturels (nigelle, curcuma), car des interactions
                        sont possibles.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Concilier médecine moderne et remèdes prophétiques
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;approche la plus sage consiste à combiner les deux.
                  Le traitement dermatologique agit sur les mécanismes
                  biologiques de la maladie, tandis que les soins naturels
                  et la dimension spirituelle renforcent le bien-être global
                  et aident à gérer les aspects psychologiques.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <p className="leading-relaxed text-foreground">
                        <strong>Suivez le traitement prescrit</strong> par
                        votre dermatologue avec rigueur. Ne modifiez pas les
                        posologies sans avis médical.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <p className="leading-relaxed text-foreground">
                        <strong>Ajoutez les soins naturels</strong> comme
                        compléments : huile de nigelle, miel, huile
                        d&apos;olive. Informez votre médecin de leur
                        utilisation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <p className="leading-relaxed text-foreground">
                        <strong>Adoptez une alimentation</strong>{" "}
                        anti-inflammatoire inspirée de la Sunna.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <p className="leading-relaxed text-foreground">
                        <strong>Pratiquez les invocations</strong> de
                        guérison et la patience avec conviction.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <p className="leading-relaxed text-foreground">
                        <strong>Gérez votre stress</strong> par la prière, le
                        dhikr et un mode de vie équilibré.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/calligraphie-allah-islam-coeur-bois.jpg"
                    alt="Calligraphie du nom d'Allah sur bois, symbole de confiance en Dieu face à la maladie"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* MedicalDisclaimer avant FAQ */}
              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation silo remede-arabe */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Remèdes arabes et médecine prophétique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les remèdes arabes
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection et invocations
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Interprétation des rêves
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
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
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes et médecine prophétique
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La langue arabe
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
