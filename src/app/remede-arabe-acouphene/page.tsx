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
    "Remède arabe acouphène : soins prophétiques et naturels contre les bourdonnements",
  description:
    "Découvrez les remèdes arabes et prophétiques contre l'acouphène : huile de nigelle, huile d'olive, costus marin, hijama, invocations de guérison et alimentation Sunna pour soulager les bourdonnements d'oreille.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-acouphene",
  },
};

const tocItems = [
  {
    id: "comprendre-acouphene",
    label: "Comprendre l'acouphène : causes et mécanismes",
  },
  {
    id: "remedes-prophetiques",
    label: "Remèdes prophétiques contre les bourdonnements",
  },
  {
    id: "hijama-acouphene",
    label: "Hijama et acouphène : points et bienfaits",
  },
  {
    id: "invocations-guerison",
    label: "Invocations et douas de guérison",
  },
  {
    id: "alimentation-sunna",
    label: "Alimentation Sunna anti-inflammatoire",
  },
  {
    id: "faq",
    label: "Questions fréquentes",
  },
];

const faqItems = [
  {
    question:
      "L'huile de nigelle peut-elle soulager les acouphènes ?",
    answer:
      "L'huile de nigelle (habba sawda) possède des propriétés anti-inflammatoires et antioxydantes reconnues par la recherche scientifique, principalement grâce à la thymoquinone. Elle peut contribuer à réduire l'inflammation de l'oreille interne lorsqu'elle est consommée régulièrement (une cuillère à café par jour, mélangée à du miel). Cependant, elle ne remplace pas un suivi ORL. Son action est complémentaire et s'inscrit dans une approche globale de la santé.",
  },
  {
    question:
      "Peut-on mettre de l'huile d'olive dans les oreilles pour les acouphènes ?",
    answer:
      "L'huile d'olive tiède est traditionnellement utilisée en gouttes auriculaires pour ramollir le cérumen et apaiser les irritations de l'oreille. Quelques gouttes tièdes (jamais chaudes) peuvent être instillées dans le conduit auditif, en penchant la tête, puis laissées agir quelques minutes. Toutefois, il ne faut jamais instiller de liquide dans une oreille perforée. Consultez un ORL si vos acouphènes persistent ou si vous avez un doute sur l'état de votre tympan.",
  },
  {
    question:
      "La hijama est-elle efficace contre les acouphènes ?",
    answer:
      "La hijama (ventouses humides) est recommandée par la Sunna pour de nombreux maux, y compris les douleurs de la tête. Des points spécifiques situés derrière les oreilles (al-akhda'ayn) et au sommet du crâne (al-yafukh) sont traditionnellement utilisés. Certains patients rapportent un soulagement des bourdonnements après une ou plusieurs séances. La hijama doit être pratiquée par un praticien formé, dans des conditions d'hygiène strictes, et ne remplace pas un diagnostic médical.",
  },
  {
    question:
      "Quelles invocations réciter pour les acouphènes en islam ?",
    answer:
      "La doua de guérison la plus connue est celle rapportée par al-Bukhari et Muslim : Adhhib al-ba's, Rabb an-nas, washfi anta ash-Shafi, la shifa'a illa shifa'uka, shifa'an la yughadiru saqaman (Ote le mal, Seigneur des hommes, et guéris. Tu es Celui qui guérit, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie). On peut aussi réciter sourate Al-Fatiha, Ayat al-Kursi et les trois dernières sourates du Coran en posant la main sur l'oreille.",
  },
  {
    question:
      "Le costus marin aide-t-il contre les problèmes ORL ?",
    answer:
      "Le costus marin (al-qist al-hindi) est mentionné dans un hadith authentique comme remède contre les inflammations de la gorge et la pleurésie (rapporté par al-Bukhari). Il possède des propriétés anti-inflammatoires et antimicrobiennes. En fumigation ou en huile, il est traditionnellement utilisé pour les affections ORL. Bien qu'aucune étude clinique ne cible spécifiquement les acouphènes, son action anti-inflammatoire peut contribuer au soulagement des inflammations de la sphère ORL.",
  },
  {
    question:
      "Comment le stress influence-t-il les acouphènes ?",
    answer:
      "Le stress est l'un des facteurs aggravants les plus documentés des acouphènes. L'anxiété contracte les muscles du cou et de la mâchoire, augmente la pression artérielle et amplifie la perception des bourdonnements. Le dhikr (évocation de Dieu), la prière (salat) et la récitation du Coran agissent comme des pratiques d'apaisement profond qui réduisent le cortisol et favorisent la détente. La régularité de ces pratiques est plus bénéfique qu'une séance occasionnelle.",
  },
  {
    question:
      "Quand faut-il consulter un ORL pour des acouphènes ?",
    answer:
      "Consultez un ORL si les bourdonnements apparaissent brutalement, s'ils touchent une seule oreille, s'ils s'accompagnent de vertiges, de perte d'audition, de douleur ou de fièvre. Un acouphène pulsatile (qui bat au rythme du coeur) nécessite également un bilan médical rapide. De manière générale, tout acouphène persistant depuis plus de deux semaines mérite un examen. Les remèdes prophétiques sont un complément, jamais un substitut au diagnostic médical.",
  },
  {
    question:
      "L'alimentation peut-elle réduire les acouphènes ?",
    answer:
      "Oui, une alimentation anti-inflammatoire peut contribuer à atténuer les acouphènes. Les aliments riches en oméga-3 (poisson, huile d'olive), en magnésium (dattes, amandes, épinards) et en antioxydants (miel, fruits frais) soutiennent la santé de l'oreille interne. Il est recommandé de réduire le sel (qui augmente la pression dans l'oreille), la caféine en excès et les aliments ultra-transformés. La Sunna encourage une alimentation modérée et variée.",
  },
];

export default function RemedeArabeAcouphene() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-acouphene/#article",
        headline:
          "Remède arabe acouphène : soins prophétiques et naturels contre les bourdonnements",
        description:
          "Découvrez les remèdes arabes et prophétiques contre l'acouphène : huile de nigelle, huile d'olive, costus marin, hijama, invocations de guérison et alimentation Sunna.",
        image:
          "https://www.islamreligion.fr/images/remede-yeux-islam-soins.jpg",
        datePublished: "2025-09-20",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-arabe-acouphene/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-acouphene/#breadcrumb",
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
            name: "Acouphènes",
            item: "https://www.islamreligion.fr/remede-arabe-acouphene",
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
          title="Remède arabe acouphène : soins prophétiques et naturels contre les bourdonnements"
          subtitle="Huile de nigelle, hijama, invocations de guérison et alimentation Sunna pour soulager les acouphènes selon la tradition islamique."
          imageSrc="/images/remede-yeux-islam-soins.jpg"
          imageAlt="Remèdes arabes et prophétiques pour soulager les acouphènes et bourdonnements d'oreille en islam"
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
                <Link href="/remede-arabe" className="hover:text-primary">
                  Remèdes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Acouphènes</span>
              </nav>

              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* SECTION 1 : Comprendre l'acouphène */}
              {/* ============================================ */}
              <section id="comprendre-acouphene" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre l&apos;acouphène : causes et mécanismes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;acouphène est une perception de son en l&apos;absence
                  de toute source sonore extérieure. Ce bourdonnement, ce
                  sifflement ou ce tintement dans l&apos;oreille touche environ
                  10 à 15 % de la population adulte. Il ne s&apos;agit pas
                  d&apos;une maladie à proprement parler, mais d&apos;un
                  symptôme qui peut avoir de multiples origines.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les causes les plus fréquentes incluent l&apos;exposition
                  prolongée au bruit, le vieillissement naturel de l&apos;oreille
                  interne (presbyacousie), un bouchon de cérumen, une otite, ou
                  encore des tensions musculaires au niveau de la mâchoire et du
                  cou. Le stress, la fatigue et certains médicaments
                  (ototoxiques) peuvent également déclencher ou aggraver les
                  bourdonnements.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les deux types d&apos;acouphènes
                </h3>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Type
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Description
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Causes fréquentes
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Proportion
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Acouphène subjectif
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Perçu uniquement par la personne concernée. Aucun son
                          mesurable de l&apos;extérieur.
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Exposition au bruit, presbyacousie, stress, otite,
                          médicaments ototoxiques
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~95 % des cas
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Acouphène objectif
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Son audible par le médecin lors de l&apos;examen.
                          Souvent pulsatile (rythme cardiaque).
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Troubles vasculaires, malformation artério-veineuse,
                          contraction musculaire involontaire
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~5 % des cas
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Sur le plan physiologique, l&apos;acouphène subjectif résulte
                  le plus souvent d&apos;une lésion des cellules ciliées de la
                  cochlée (oreille interne). Lorsque ces cellules sont
                  endommagées, elles envoient des signaux anormaux au cerveau,
                  qui les interprète comme un son. L&apos;inflammation chronique
                  de l&apos;oreille interne, le stress oxydatif et les carences
                  en certains minéraux (magnésium, zinc) sont des facteurs
                  aggravants bien documentés.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  C&apos;est précisément sur ces facteurs que les{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    remèdes arabes et prophétiques
                  </Link>{" "}
                  peuvent agir : réduction de l&apos;inflammation, apport
                  d&apos;antioxydants, amélioration de la circulation sanguine
                  et gestion du stress par les pratiques spirituelles.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/remede-yeux-islam-soins.jpg"
                    alt="Remèdes naturels de la médecine prophétique utilisés pour soulager les acouphènes"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La vision islamique de la maladie et de la guérison
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  En{" "}
                  <Link
                    href="/"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    islam
                  </Link>
                  , la maladie n&apos;est jamais considérée comme un châtiment.
                  Elle est une épreuve qui purifie le croyant de ses péchés et
                  l&apos;invite à renforcer sa confiance en Dieu. Le Prophète
                  Muhammad &#xFE0E;&#xFE0E; a encouragé les musulmans à se
                  soigner tout en s&apos;en remettant à Allah pour la guérison.
                </p>

                <HadithCard
                  arabic="تَدَاوَوْا عِبَادَ اللَّهِ فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً"
                  text="Soignez-vous, serviteurs de Dieu, car Dieu n'a pas créé de maladie sans avoir créé son remède."
                  source="Hadith rapporté par Abu Dawud et at-Tirmidhi"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fonde toute l&apos;approche de la médecine
                  prophétique : le croyant est invité à chercher activement les
                  moyens de guérison, qu&apos;ils soient naturels, médicaux ou
                  spirituels, tout en sachant que le résultat appartient à Dieu
                  seul.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Remèdes prophétiques */}
              {/* ============================================ */}
              <section
                id="remedes-prophetiques"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Remèdes prophétiques contre les bourdonnements d&apos;oreille
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Plusieurs remèdes mentionnés dans la Sunna possèdent des
                  propriétés anti-inflammatoires, antioxydantes et apaisantes
                  qui peuvent contribuer à soulager les acouphènes. Voici les
                  principaux, avec leurs fondements textuels et leurs usages
                  pratiques.
                </p>

                {/* Huile de nigelle */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile de nigelle (<em>habba sawda</em>) : anti-inflammatoire naturel
                  </h3>

                  <HadithCard
                    arabic="عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ"
                    text="Utilisez cette graine noire, car elle contient un remède contre toute maladie, sauf la mort."
                    source="Hadith rapporté par al-Bukhari et Muslim"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    La graine de nigelle (<em>Nigella sativa</em>) est le
                    remède prophétique le plus célèbre. Son composé actif
                    principal, la thymoquinone, a démontré des propriétés
                    anti-inflammatoires, antioxydantes et neuroprotectrices dans
                    de nombreuses études. Ces propriétés sont particulièrement
                    pertinentes pour les acouphènes, car l&apos;inflammation
                    de l&apos;oreille interne et le stress oxydatif des cellules
                    ciliées sont parmi les mécanismes reconnus du trouble.
                  </p>

                  <div className="mt-4 rounded-lg bg-accent p-4">
                    <p className="text-sm font-semibold text-primary">
                      Usage recommandé pour les acouphènes
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          <strong>Voie orale :</strong> une cuillère à café
                          d&apos;huile de nigelle pressée à froid, mélangée à
                          une cuillère de miel, chaque matin à jeun
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          <strong>En massage :</strong> quelques gouttes
                          d&apos;huile de nigelle derrière les oreilles et sur
                          la nuque, en massant doucement, pour favoriser la
                          circulation locale
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          <strong>Durée :</strong> cure de 3 semaines minimum
                          pour évaluer les effets, puis adaptation selon les
                          résultats
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Huile d'olive */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile d&apos;olive en gouttes auriculaires
                  </h3>

                  <HadithCard
                    arabic="كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ مُبَارَكَةٍ"
                    text="Mangez de l'huile d'olive et enduisez-vous-en, car elle provient d'un arbre béni."
                    source="Hadith rapporté par at-Tirmidhi et Ibn Majah"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    L&apos;huile d&apos;olive extra-vierge est riche en
                    polyphénols (oléocanthal, hydroxytyrosol) dont
                    l&apos;action anti-inflammatoire est comparable à celle de
                    l&apos;ibuprofène à faible dose. En usage auriculaire, elle
                    est traditionnellement utilisée pour ramollir le cérumen,
                    lubrifier le conduit auditif et apaiser les irritations.
                  </p>

                  <div className="mt-4 rounded-lg bg-accent p-4">
                    <p className="text-sm font-semibold text-primary">
                      Protocole auriculaire traditionnel
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          Tiédir légèrement l&apos;huile d&apos;olive
                          (température du corps, jamais chaude)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          Instiller 2 à 3 gouttes dans l&apos;oreille en
                          penchant la tête sur le côté
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          Rester allongé 5 à 10 minutes, puis laisser
                          s&apos;écouler naturellement
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          Répéter 2 à 3 fois par semaine pendant un mois
                        </span>
                      </li>
                    </ul>
                    <p className="mt-3 text-xs font-medium text-amber-700">
                      Ne jamais instiller de liquide dans une oreille si le
                      tympan est perforé. Consultez un ORL en cas de doute.
                    </p>
                  </div>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel : antioxydant et apaisant
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le{" "}
                    <Link
                      href="/apprendre-le-coran"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Coran
                    </Link>{" "}
                    présente le miel comme porteur de guérison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    variées, dans laquelle il y a une guérison pour les
                    gens&nbsp;&raquo; (sourate An-Nahl, verset 69). Le miel
                    pur contient plus de 200 composés bioactifs, dont des
                    flavonoïdes et des acides phénoliques aux propriétés
                    antioxydantes. Il contribue à réduire le stress oxydatif
                    cellulaire, un facteur aggravant des acouphènes.
                  </p>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage :</strong> une cuillère à soupe de miel pur
                    (de préférence miel de jujubier ou sidr) à jeun chaque
                    matin, éventuellement mélangé à de la nigelle. Le miel
                    peut aussi être dilué dans de l&apos;eau tiède pour une
                    boisson apaisante avant le coucher.
                  </p>
                </div>

                {/* Costus marin */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le costus marin (<em>al-qist al-hindi</em>)
                  </h3>

                  <HadithCard
                    arabic="عَلَيْكُمْ بِهَذَا الْعُودِ الْهِنْدِيِّ فَإِنَّ فِيهِ سَبْعَةَ أَشْفِيَةٍ"
                    text="Utilisez ce bois indien (costus), car il contient sept remèdes."
                    source="Hadith rapporté par al-Bukhari"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le costus marin (<em>Saussurea costus</em>) est
                    spécifiquement recommandé par le Prophète &#xFE0E;&#xFE0E; pour les
                    inflammations de la gorge et les affections des voies
                    respiratoires supérieures. Sa proximité avec la sphère ORL
                    en fait un remède pertinent pour les troubles auriculaires
                    liés à une inflammation de la trompe d&apos;Eustache ou de
                    l&apos;oreille moyenne.
                  </p>

                  <div className="mt-4 rounded-lg bg-accent p-4">
                    <p className="text-sm font-semibold text-primary">
                      Modes d&apos;utilisation
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          <strong>En fumigation :</strong> brûler un morceau
                          de costus et inhaler légèrement la fumée (nez et
                          gorge)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          <strong>En infusion :</strong> faire infuser une
                          demi-cuillère à café de poudre de costus dans de
                          l&apos;eau chaude pendant 10 minutes
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>
                          <strong>En huile :</strong> quelques gouttes
                          d&apos;huile de costus marin en application derrière
                          les oreilles
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous les remèdes de la médecine prophétique"
                  href="/remede-arabe"
                  linkText="Voir tous les remèdes arabes"
                />

                {/* Tableau comparatif des remèdes */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Tableau comparatif des remèdes prophétiques pour les
                  acouphènes
                </h3>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Remède
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Propriété principale
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Mode d&apos;action sur l&apos;acouphène
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Source prophétique
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Huile de nigelle
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Anti-inflammatoire, antioxydant
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Réduit l&apos;inflammation de l&apos;oreille interne
                          et protège les cellules ciliées
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Al-Bukhari, Muslim
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Huile d&apos;olive
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Anti-inflammatoire, lubrifiant
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Ramollit le cérumen, apaise l&apos;irritation du
                          conduit auditif
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          At-Tirmidhi, Ibn Majah
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Miel
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Antioxydant, antibactérien
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Combat le stress oxydatif cellulaire et renforce
                          l&apos;immunité locale
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Coran (An-Nahl, 69)
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Costus marin
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Anti-inflammatoire ORL
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Soulage l&apos;inflammation de la trompe
                          d&apos;Eustache et de l&apos;oreille moyenne
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Al-Bukhari
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Hijama
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Circulation, détoxification
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Améliore la circulation crânienne et réduit la
                          pression locale
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Al-Bukhari
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Hijama */}
              {/* ============================================ */}
              <section id="hijama-acouphene" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hijama et acouphène : points de la tête et bienfaits
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La hijama (ventouses humides) est l&apos;un des traitements
                  les plus recommandés par le Prophète &#xFE0E;&#xFE0E; pour les maux de
                  tête et les troubles de la région crânienne. Pour les
                  acouphènes, certains points de la tête sont particulièrement
                  ciblés.
                </p>

                <HadithCard
                  arabic="إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ"
                  text="Le meilleur de vos remèdes est la hijama."
                  source="Hadith rapporté par al-Bukhari"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Points de hijama pour les acouphènes
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les praticiens de hijama utilisent traditionnellement
                  plusieurs points pour les troubles auriculaires. Ces points
                  sont tirés de la pratique prophétique et de l&apos;expérience
                  des praticiens spécialisés.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                        1
                      </span>
                      <h4 className="font-semibold text-primary">
                        Al-akhda&apos;ayn (derrière les oreilles)
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      Points situés dans la dépression osseuse derrière chaque
                      oreille (mastoïde). Le Prophète &#xFE0E;&#xFE0E; s&apos;est fait
                      pratiquer la hijama à ces points. Ils favorisent la
                      circulation sanguine vers l&apos;oreille interne et
                      peuvent soulager les bourdonnements.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                        2
                      </span>
                      <h4 className="font-semibold text-primary">
                        Al-yafukh (sommet du crâne)
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      Point situé au sommet de la tête, à la jonction de la
                      fontanelle antérieure. La hijama à ce point est
                      mentionnée dans les hadiths et est utilisée pour les
                      maux de tête, la pression crânienne et les troubles
                      neurologiques.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                        3
                      </span>
                      <h4 className="font-semibold text-primary">
                        Al-kahil (entre les épaules)
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      Point situé à la base de la nuque, entre les deux
                      omoplates. Il est utilisé pour améliorer la circulation
                      générale et soulager les tensions cervicales qui
                      peuvent aggraver les acouphènes.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                        4
                      </span>
                      <h4 className="font-semibold text-primary">
                        Points temporaux (tempes)
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      Les ventouses sèches (sans incision) appliquées sur les
                      tempes peuvent soulager les tensions musculaires de la
                      mâchoire (ATM), un facteur fréquent d&apos;acouphènes.
                      Ce point est utilisé en complément des points humides.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Déroulement d&apos;une séance de hijama pour les acouphènes
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Préparation
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le patient est assis confortablement. Le praticien
                        désinfecte les zones à traiter. Il est recommandé
                        d&apos;être à jeun ou de ne pas avoir mangé depuis au
                        moins 2 heures. La formule &laquo;&nbsp;Bismillah&nbsp;&raquo;
                        est prononcée avant de commencer.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Application des ventouses
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les ventouses sont posées sur les points sélectionnés
                        pendant 3 à 5 minutes pour créer un afflux sanguin.
                        La peau rougit sous l&apos;effet de la succion.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Incisions et extraction
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        De légères incisions superficielles sont pratiquées
                        avec un bistouri stérile. Les ventouses sont
                        replacées pour extraire le sang. Cette étape dure
                        environ 5 à 10 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Désinfection et repos
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les zones traitées sont nettoyées et désinfectées.
                        De l&apos;huile de nigelle ou du miel peut être
                        appliqué pour favoriser la cicatrisation. Un repos de
                        24 heures est conseillé.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
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
                        Précautions importantes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-amber-700">
                        La hijama doit être pratiquée par un professionnel
                        formé avec du matériel stérile à usage unique. Elle
                        est déconseillée aux personnes sous anticoagulants,
                        aux femmes enceintes, aux personnes anémiées ou
                        souffrant de troubles de la coagulation. Elle ne
                        remplace en aucun cas un diagnostic ORL.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Profils de personnes ayant recours à la hijama pour les
                  acouphènes
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les acouphènes touchent des profils variés. Voici les
                  situations les plus courantes dans lesquelles la hijama est
                  recherchée comme soin complémentaire.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="font-semibold text-primary">
                      Profil 1 : personne stressée avec tensions cervicales
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Travail sédentaire, stress chronique, contractures au
                      niveau du cou et de la mâchoire. Les acouphènes
                      apparaissent ou s&apos;aggravent en période de tension. La
                      hijama aux points al-akhda&apos;ayn et al-kahil, combinée
                      à des exercices de relaxation et au dhikr, peut
                      contribuer à relâcher les tensions et atténuer les
                      bourdonnements.
                    </p>
                  </div>
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="font-semibold text-primary">
                      Profil 2 : personne avec sinusite ou problème ORL
                      récurrent
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Sinusites fréquentes, trompe d&apos;Eustache bouchée,
                      otites à répétition. Les acouphènes sont liés à une
                      inflammation chronique de la sphère ORL. Le costus marin
                      en fumigation, l&apos;huile d&apos;olive en gouttes
                      auriculaires et la hijama aux points temporaux et
                      al-akhda&apos;ayn constituent une approche complémentaire
                      au traitement médical.
                    </p>
                  </div>
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="font-semibold text-primary">
                      Profil 3 : personne âgée avec presbyacousie
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Perte auditive progressive liée à l&apos;âge,
                      accompagnée de bourdonnements. L&apos;alimentation
                      anti-inflammatoire riche en oméga-3 et en antioxydants,
                      la prise quotidienne de miel et de nigelle, et les
                      invocations de guérison forment un accompagnement
                      bienveillant. La hijama peut être envisagée avec l&apos;accord
                      du médecin traitant.
                    </p>
                  </div>
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="font-semibold text-primary">
                      Profil 4 : personne exposée au bruit professionnel
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Travail en milieu bruyant (chantier, usine, musique).
                      Les cellules ciliées sont endommagées par l&apos;exposition
                      sonore. La prévention (port de protections auditives)
                      reste la mesure principale. En complément, l&apos;huile
                      de nigelle pour son effet neuroprotecteur, le miel pour
                      ses antioxydants et la gestion du stress par la prière
                      peuvent soutenir la récupération auditive.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Invocations */}
              {/* ============================================ */}
              <section
                id="invocations-guerison"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations et douas de guérison pour les acouphènes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La dimension spirituelle de la guérison occupe une place
                  fondamentale en islam. Le Coran est présenté comme une source
                  de guérison, et le Prophète &#xFE0E;&#xFE0E; a enseigné des
                  invocations spécifiques pour les personnes malades.
                </p>

                <HadithCard
                  text="Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour les croyants."
                  source="Sourate Al-Isra, verset 82"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua de guérison principale
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ الشَّافِي
                    لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا
                  </p>
                  <p className="mt-4 text-foreground italic">
                    &laquo;&nbsp;Ote le mal, Seigneur des hommes, et guéris.
                    Tu es Celui qui guérit, il n&apos;y a de guérison que Ta
                    guérison, une guérison qui ne laisse aucune
                    maladie.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari et Muslim. Le Prophète &#xFE0E;&#xFE0E;
                    récitait cette invocation en posant sa main sur la partie
                    douloureuse du corps.
                  </p>
                  <div className="mt-3 rounded-lg bg-white p-3">
                    <p className="text-xs font-medium text-primary">
                      Application pour les acouphènes :
                    </p>
                    <p className="mt-1 text-xs text-foreground-secondary">
                      Posez votre main droite sur l&apos;oreille concernée et
                      récitez cette invocation 3 fois, avec conviction et
                      confiance en Dieu. Répétez matin et soir.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Roqya pour les oreilles
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ
                    مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ
                    يَشْفِيكَ
                  </p>
                  <p className="mt-4 text-foreground italic">
                    &laquo;&nbsp;Au nom de Dieu, je te fais la roqya contre
                    tout ce qui te nuit, contre le mal de toute âme ou
                    oeil envieux. Que Dieu te guérisse.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporté par Muslim. Cette invocation peut être récitée
                    par la personne elle-même ou par un proche.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sourates et versets recommandés
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter régulièrement les
                  passages suivants du{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>{" "}
                  pour chercher la guérison :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate Al-Fatiha</strong> (l&apos;Ouverture) :
                      considérée comme la plus grande sourate du Coran pour la
                      guérison. Le Prophète &#xFE0E;&#xFE0E; l&apos;a appelée
                      &laquo;&nbsp;ar-Ruqya&nbsp;&raquo; (l&apos;incantation)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ayat al-Kursi</strong> (Al-Baqara, 255) : verset
                      de protection puissant, récité le matin, le soir et
                      avant le coucher
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les trois dernières sourates</strong> (Al-Ikhlas,
                      Al-Falaq, An-Nas) : le Prophète &#xFE0E;&#xFE0E; les récitait
                      3 fois chaque soir en soufflant dans ses mains, puis les
                      passait sur son corps
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate Ash-Shu&apos;ara, verset 80</strong> :
                      &laquo;&nbsp;Et quand je suis malade, c&apos;est Lui
                      qui me guérit&nbsp;&raquo;, parole du prophète Ibrahim
                      (Abraham) que le croyant peut méditer et réciter
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le dhikr comme apaisement des acouphènes
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le dhikr (évocation de Dieu) a un effet profond sur le
                  système nerveux. Le Coran affirme : &laquo;&nbsp;N&apos;est-ce
                  pas par l&apos;évocation de Dieu que les coeurs
                  s&apos;apaisent ?&nbsp;&raquo; (sourate Ar-Ra&apos;d,
                  verset 28). Cette tranquillité intérieure est précieuse
                  pour les personnes souffrant d&apos;acouphènes, car le
                  stress et l&apos;anxiété amplifient considérablement la
                  perception des bourdonnements.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les formules de dhikr les plus apaisantes incluent :
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p
                      className="text-right font-arabic text-lg text-primary"
                      dir="rtl"
                    >
                      سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
                    </p>
                    <p className="mt-2 text-sm text-foreground-secondary italic">
                      Gloire et louange à Dieu
                    </p>
                    <p className="mt-1 text-xs text-foreground-secondary">
                      100 fois matin et soir
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p
                      className="text-right font-arabic text-lg text-primary"
                      dir="rtl"
                    >
                      لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                    </p>
                    <p className="mt-2 text-sm text-foreground-secondary italic">
                      Il n&apos;y a de force ni de puissance qu&apos;en Dieu
                    </p>
                    <p className="mt-1 text-xs text-foreground-secondary">
                      Trésor du Paradis (al-Bukhari)
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p
                      className="text-right font-arabic text-lg text-primary"
                      dir="rtl"
                    >
                      حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ
                    </p>
                    <p className="mt-2 text-sm text-foreground-secondary italic">
                      Dieu me suffit, il n&apos;y a de divinité que Lui
                    </p>
                    <p className="mt-1 text-xs text-foreground-secondary">
                      7 fois matin et soir
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p
                      className="text-right font-arabic text-lg text-primary"
                      dir="rtl"
                    >
                      أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ
                    </p>
                    <p className="mt-2 text-sm text-foreground-secondary italic">
                      Je demande pardon à Dieu et je me repens vers Lui
                    </p>
                    <p className="mt-1 text-xs text-foreground-secondary">
                      100 fois par jour (Muslim)
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La régularité de ces pratiques est plus bénéfique
                  qu&apos;une récitation occasionnelle intense. La
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    {" "}
                    prière avant le coucher
                  </Link>{" "}
                  et les adhkar du soir peuvent également améliorer la
                  qualité du sommeil, souvent perturbée par les acouphènes.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Alimentation */}
              {/* ============================================ */}
              <section
                id="alimentation-sunna"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Alimentation Sunna anti-inflammatoire pour les oreilles
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;alimentation joue un rôle souvent sous-estimé dans la
                  gestion des acouphènes. Une alimentation riche en
                  antioxydants, en oméga-3 et en minéraux favorise la santé de
                  l&apos;oreille interne et réduit l&apos;inflammation
                  systémique. La Sunna offre un cadre alimentaire
                  naturellement anti-inflammatoire.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Aliments de la Sunna bénéfiques pour l&apos;audition
                </h3>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Aliment Sunna
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Nutriments clés
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Bienfait pour l&apos;oreille
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Fréquence recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Dattes (surtout ajwa)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Magnésium, potassium, fibres, fer
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Le magnésium protège les cellules ciliées contre les
                          dommages sonores
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          7 dattes le matin (hadith)
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Huile d&apos;olive
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Oméga-9, polyphénols, vitamine E
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Anti-inflammatoire, protège les vaisseaux sanguins
                          de l&apos;oreille interne
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Quotidiennement (en cuisine ou cru)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Miel pur
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Flavonoïdes, acides phénoliques, enzymes
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Puissant antioxydant qui réduit le stress oxydatif
                          cellulaire
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          1 cuillère à jeun chaque matin
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Poisson (thon, sardine)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Oméga-3 (EPA, DHA), vitamine D
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Réduit l&apos;inflammation et améliore la
                          circulation cochléaire
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          2 à 3 fois par semaine
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Orge (talbina)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Bêta-glucanes, magnésium, vitamines B
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Apaise le système nerveux et soutient la santé
                          cardiovasculaire
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          2 à 3 fois par semaine
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Gingembre
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Gingérols, shogaols
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Stimule la circulation sanguine et possède des
                          vertus anti-inflammatoires
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          En infusion ou râpé (quotidien)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Aliments et habitudes à éviter
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains aliments et comportements sont connus pour aggraver
                  les acouphènes. Les limiter fait partie d&apos;une
                  hygiène de vie conforme à la modération prônée par l&apos;islam.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="font-semibold text-red-800">Sel en excès</p>
                    <p className="mt-1 text-sm text-red-700">
                      Augmente la pression dans l&apos;oreille interne
                      (endolymphe). Favorise la rétention d&apos;eau et peut
                      aggraver la maladie de Ménière.
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="font-semibold text-red-800">
                      Caféine en excès
                    </p>
                    <p className="mt-1 text-sm text-red-700">
                      Stimule le système nerveux et peut augmenter la
                      perception des bourdonnements chez certaines personnes.
                      Limiter à 1-2 tasses par jour.
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="font-semibold text-red-800">
                      Aliments ultra-transformés
                    </p>
                    <p className="mt-1 text-sm text-red-700">
                      Riches en additifs, en sucres raffinés et en graisses
                      trans qui favorisent l&apos;inflammation systémique.
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <p className="font-semibold text-red-800">
                      Exposition au bruit sans protection
                    </p>
                    <p className="mt-1 text-sm text-red-700">
                      Écoute prolongée avec des écouteurs à volume élevé ou
                      travail en milieu bruyant sans protections auditives.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La modération alimentaire selon la Sunna
                </h3>

                <HadithCard
                  arabic="مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ ابْنِ آدَمَ أُكُلَاتٌ يُقِمْنَ صُلْبَهُ"
                  text="L'homme ne remplit pas de récipient pire que son ventre. Il suffit au fils d'Adam de quelques bouchées pour se maintenir."
                  source="Hadith rapporté par at-Tirmidhi et Ibn Majah"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith rappelle que la modération alimentaire est un
                  principe fondamental de la Sunna. Manger avec mesure réduit
                  l&apos;inflammation systémique, favorise un poids sain et
                  protège la santé cardiovasculaire, autant de facteurs qui
                  influencent positivement les acouphènes.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le jeûne intermittent (Sunna) et les acouphènes
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le jeûne des lundis et jeudis, pratique recommandée par le
                  Prophète &#xFE0E;&#xFE0E;, correspond au concept moderne de jeûne
                  intermittent. Les études montrent que le jeûne réduit
                  les marqueurs inflammatoires (CRP, IL-6), améliore la
                  sensibilité à l&apos;insuline et favorise la réparation
                  cellulaire par l&apos;autophagie. Ces effets bénéfiques
                  peuvent contribuer à la protection des cellules auditives.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Gestion du stress par la prière et le dhikr
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le stress est l&apos;un des amplificateurs les plus puissants
                  des acouphènes. La boucle stress-acouphène-stress est un
                  cercle vicieux bien documenté : le bourdonnement provoque de
                  l&apos;anxiété, qui à son tour rend le bourdonnement plus
                  perceptible.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La salat (prière) structure la journée en cinq moments de
                  pause et de recentrage. La prosternation (sujud), en
                  particulier, favorise l&apos;afflux sanguin vers le cerveau
                  et procure un apaisement physique et psychologique mesurable.
                  Le dhikr, par sa répétition rythmée, active le système
                  nerveux parasympathique, réduit le rythme cardiaque et
                  abaisse le taux de cortisol.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en prière et invocation, geste de doua pour la guérison en islam"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Quand consulter un ORL
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les remèdes prophétiques et l&apos;alimentation Sunna sont
                  des approches complémentaires. Ils n&apos;excluent jamais la
                  consultation médicale. Voici les situations qui nécessitent
                  un rendez-vous rapide chez un oto-rhino-laryngologiste :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>
                      Acouphène apparaissant brutalement, sans cause évidente
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>
                      Bourdonnement unilatéral (une seule oreille)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>
                      Acouphène pulsatile (battant au rythme du coeur)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>
                      Perte d&apos;audition soudaine ou progressive
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>
                      Vertiges, nausées ou troubles de l&apos;équilibre
                      associés
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>
                      Douleur ou écoulement de l&apos;oreille
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>
                      Acouphène persistant depuis plus de deux semaines
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;ORL pourra réaliser un audiogramme, un examen du
                  tympan et, si nécessaire, prescrire des examens
                  complémentaires (IRM, scanner). Un bouchon de cérumen, une
                  otite ou un trouble de l&apos;articulation
                  temporo-mandibulaire (ATM) sont des causes traitables qui
                  peuvent faire disparaître les acouphènes.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Sorcellerie en islam : protection et invocations puissantes"
                  description="Les sourates protectrices et la roqya légitime pour se prémunir du mal."
                  href="/sorcellerie-islam-protection"
                />
              </section>

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
                <p className="mt-2 text-sm text-foreground-secondary">
                  Retrouvez tous nos articles sur les soins naturels en islam.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-secondary/30 bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary/5"
                  >
                    Tous les remèdes arabes
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
                    Interprétation des rêves
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Réciter le Coran
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
