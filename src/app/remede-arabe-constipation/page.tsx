import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title:
    "Remède arabe constipation : séné, miel, huile d'olive et solutions prophétiques",
  description:
    "Découvrez les remèdes arabes contre la constipation : séné (sana makki), miel, huile d'olive, dattes, talbina et alimentation prophétique. Hadiths, dosages et précautions.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-constipation",
  },
};

const tocItems = [
  {
    id: "causes-constipation",
    label: "Causes de la constipation selon la tradition arabe",
  },
  {
    id: "sene-sana-makki",
    label: "Le séné (sana makki) : remède prophétique laxatif",
  },
  {
    id: "miel-huile-olive-dattes",
    label: "Miel, huile d'olive et dattes : trio naturel anti-constipation",
  },
  {
    id: "talbina-alimentation",
    label: "Talbina et alimentation prophétique pour le transit",
  },
  {
    id: "invocations-guerison",
    label: "Invocations de guérison et dimension spirituelle",
  },
  {
    id: "quand-consulter",
    label: "Quand consulter un gastro-entérologue",
  },
];

const faqItems = [
  {
    question:
      "Comment utiliser le séné (sana makki) contre la constipation ?",
    answer:
      "Le séné s'utilise en infusion : faites infuser une demi-cuillère à café de feuilles séchées dans une tasse d'eau chaude pendant 10 minutes. Filtrez et buvez le soir avant le coucher. Ne dépassez pas 7 jours consécutifs d'utilisation pour éviter toute accoutumance intestinale. Le Prophète ﷺ a recommandé cette plante selon le hadith rapporté par at-Tirmidhi et Ibn Majah.",
  },
  {
    question:
      "Le miel dans l'eau tiède aide-t-il vraiment contre la constipation ?",
    answer:
      "Oui, le miel dilué dans de l'eau tiède le matin à jeun stimule le péristaltisme intestinal et favorise la digestion. Le Coran mentionne le miel comme porteur de guérison (sourate An-Nahl, verset 69). Privilégiez un miel pur et non chauffé pour préserver ses enzymes actives. Une cuillère à soupe dans un verre d'eau tiède (pas bouillante) suffit.",
  },
  {
    question:
      "Quelles sont les précautions avec l'huile d'olive pour la constipation ?",
    answer:
      "L'huile d'olive extra-vierge agit comme un lubrifiant naturel pour l'intestin. Prenez une cuillère à soupe à jeun le matin. Évitez les excès si vous souffrez de troubles biliaires ou de calculs vésiculaires. Chez les personnes diabétiques, surveillez l'apport calorique global. L'huile d'olive est mentionnée dans le Coran comme provenant d'un arbre béni (sourate An-Nur, verset 35).",
  },
  {
    question:
      "Les dattes peuvent-elles soulager la constipation ?",
    answer:
      "Les dattes sont riches en fibres (environ 7 g pour 100 g) et en sorbitol, un sucre naturel aux propriétés légèrement laxatives. Consommez 3 à 5 dattes par jour, de préférence trempées dans l'eau ou accompagnées d'un verre d'eau. Le Prophète ﷺ consommait régulièrement des dattes et les recommandait pour rompre le jeûne.",
  },
  {
    question:
      "La talbina est-elle efficace pour réguler le transit intestinal ?",
    answer:
      "La talbina (bouillie d'orge) est riche en fibres solubles, notamment en bêta-glucanes, qui favorisent le transit et nourrissent la flore intestinale. Le Prophète ﷺ la recommandait pour le malade. Préparez-la en faisant cuire de la farine d'orge dans de l'eau ou du lait, puis ajoutez du miel. Une portion quotidienne aide à réguler le transit.",
  },
  {
    question:
      "Quelle quantité d'eau faut-il boire pour éviter la constipation ?",
    answer:
      "Les recommandations générales préconisent 1,5 à 2 litres d'eau par jour, soit environ 6 à 8 verres. La Sunna encourage à boire assis, en trois gorgées, en disant Bismillah. L'hydratation matinale est particulièrement bénéfique : un verre d'eau tiède au réveil stimule le transit intestinal et prépare le système digestif.",
  },
  {
    question:
      "Les remèdes arabes contre la constipation conviennent-ils aux femmes enceintes ?",
    answer:
      "Certains remèdes conviennent aux femmes enceintes : le miel, les dattes, les figues cuites, les pruneaux et l'hydratation renforcée sont sûrs. En revanche, le séné (sana makki) est formellement déconseillé pendant la grossesse car il peut provoquer des contractions. Consultez toujours votre médecin ou votre sage-femme avant d'utiliser un remède à base de plantes.",
  },
  {
    question:
      "Existe-t-il des invocations spécifiques pour la guérison en cas de constipation ?",
    answer:
      "Il n'existe pas d'invocation spécifique à la constipation, mais les invocations générales de guérison s'appliquent à tout mal. Le Prophète ﷺ récitait notamment : « Ôte le mal, Seigneur des hommes, et guéris. Tu es Celui qui guérit, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie » (al-Bukhari et Muslim). Associez ces invocations aux remèdes naturels, en sachant que la guérison vient de Dieu seul.",
  },
];

export default function RemedeArabeConstipation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-constipation/#article",
        headline:
          "Remède arabe pour la constipation : séné, miel, huile d'olive et solutions prophétiques",
        description:
          "Découvrez les remèdes arabes contre la constipation : séné (sana makki), miel, huile d'olive, dattes, talbina et alimentation prophétique.",
        url: "https://www.islamreligion.fr/remede-arabe-constipation",
        inLanguage: "fr-FR",
        datePublished: "2025-08-20",
        dateModified: "2025-08-20",
        author: {
          "@type": "Organization",
          name: "Islam Religion",
          url: "https://www.islamreligion.fr",
        },
        publisher: {
          "@type": "Organization",
          name: "Islam Religion",
          url: "https://www.islamreligion.fr",
          logo: {
            "@type": "ImageObject",
            url: "https://www.islamreligion.fr/favicon-islam.ico",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://www.islamreligion.fr/remede-arabe-constipation/#webpage",
        },
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-la-constipation-solutions-naturelles-selon-la-tradition-islamique-1.jpg",
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-constipation/#breadcrumb",
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
            name: "Constipation",
            item: "https://www.islamreligion.fr/remede-arabe-constipation",
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
        {/* ============================================ */}
        {/* HERO COMPACT */}
        {/* ============================================ */}
        <Hero
          title="Remède arabe pour la constipation : solutions naturelles selon la tradition prophétique"
          subtitle="Séné, miel, huile d&apos;olive, dattes et talbina : les remèdes naturels transmis par la Sunna pour retrouver un transit serein."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-la-constipation-solutions-naturelles-selon-la-tradition-islamique-1.jpg"
          imageAlt="Remèdes arabes naturels pour la constipation : herbes, miel, dattes et huile d&apos;olive selon la tradition islamique"
          compact
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            {/* ============================================ */}
            {/* SIDEBAR TOC */}
            {/* ============================================ */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article className="max-w-3xl">
              {/* TOC mobile */}
              <div className="lg:hidden">
                <TableOfContents items={tocItems} />
              </div>

              {/* ============================================ */}
              {/* FIL D&apos;ARIANE */}
              {/* ============================================ */}
              <nav
                className="mb-8 text-sm text-foreground-secondary"
                aria-label="Fil d&apos;Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link href="/remede-arabe" className="hover:text-primary">
                  Remèdes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Constipation</span>
              </nav>

              {/* ============================================ */}
              {/* MEDICAL DISCLAIMER (début) */}
              {/* ============================================ */}
              <MedicalDisclaimer />

              {/* Introduction */}
              <p className="mt-8 text-lg leading-relaxed text-foreground">
                La constipation perturbe le confort de vie et touche toutes les
                générations, des jeunes enfants aux personnes âgées. Loin
                d&apos;être un sujet anodin, ce trouble digestif peut affecter le
                bien-être physique et moral au quotidien. La tradition arabe et la
                médecine prophétique offrent des solutions douces, naturelles et
                accessibles, transmises de génération en génération par les
                familles du Maghreb, du Levant et de la péninsule arabique.
              </p>

              <p className="mt-4 leading-relaxed text-foreground">
                Le Prophète Muhammad &#xFDFA; a enseigné l&apos;importance de se soigner et de
                prendre soin de son corps, qui constitue un dépôt
                (<em>amana</em>) confié par Dieu. Les remèdes présentés ici
                reposent sur des ingrédients mentionnés dans le Coran et la Sunna :
                le séné (sana makki), le miel, l&apos;huile d&apos;olive, les dattes
                et l&apos;orge. Chacun possède des propriétés reconnues par la
                recherche scientifique moderne, ce qui confirme la sagesse de ces
                recommandations ancestrales.
              </p>

              <ArticleCTA
                variant="page-mere"
                title="Cet article fait partie du dossier Remèdes arabes"
                href="/remede-arabe"
                linkText="Découvrir tous les remèdes prophétiques"
              />

              {/* ============================================ */}
              {/* SECTION 1 : CAUSES */}
              {/* ============================================ */}
              <section id="causes-constipation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Causes de la constipation selon la tradition arabe
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La médecine arabe traditionnelle, inspirée des enseignements
                  d&apos;Ibn Sina (<em>Avicenne</em>) et d&apos;Ibn al-Qayyim, considère
                  la constipation comme le signe d&apos;un déséquilibre entre
                  l&apos;alimentation, l&apos;hydratation et le mode de vie. Plutôt que de
                  traiter le symptôme isolément, la tradition encourage à comprendre
                  les causes profondes pour y remédier durablement.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les facteurs alimentaires
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le manque de fibres est la cause la plus fréquente de la
                  constipation. L&apos;alimentation moderne, souvent pauvre en fruits,
                  légumes et céréales complètes, prive l&apos;intestin de la matière
                  nécessaire à la formation d&apos;un bol fécal souple et volumineux.
                  La tradition prophétique, à l&apos;inverse, valorise une alimentation
                  riche en dattes, figues, orge, légumes et huile d&apos;olive.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète &#xFDFA; rompait son jeûne avec des dattes fraîches
                  (<em>rutab</em>), ou des dattes sèches (<em>tamr</em>), ou de
                  l&apos;eau. Ce geste simple illustre la place centrale des aliments
                  riches en fibres dans la Sunna. Les dattes contiennent environ 7 g
                  de fibres pour 100 g, ce qui en fait un allié précieux du transit
                  intestinal.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La sédentarité et le manque de mouvement
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  La sédentarité ralentit le péristaltisme, c&apos;est-à-dire les
                  contractions naturelles de l&apos;intestin qui poussent les selles vers
                  la sortie. La Sunna encourage la marche, la nage et le tir à
                  l&apos;arc. Le simple fait de marcher après le repas du soir, comme le
                  pratiquaient les compagnons du Prophète &#xFDFA;, suffit souvent à
                  relancer un transit paresseux.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le stress et la dimension émotionnelle
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le stress chronique perturbe le fonctionnement du système nerveux
                  entérique, souvent appelé &laquo;&nbsp;deuxième cerveau&nbsp;&raquo;. Comprendre{" "}
                  <Link
                    href="/remede-angoisse-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le stress qui perturbe la digestion
                  </Link>{" "}
                  est essentiel pour y remédier.
                  L&apos;islam accorde une place importante à la sérénité intérieure :
                  les prières quotidiennes, le dhikr (rappel de Dieu), la récitation
                  du Coran et la confiance en Dieu (<em>tawakkul</em>) sont autant
                  de pratiques qui apaisent le corps et l&apos;esprit, favorisant ainsi un
                  transit harmonieux.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;hydratation insuffisante
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Une hydratation insuffisante durcit les selles et rend leur
                  évacuation difficile. La Sunna enseigne de boire assis, en trois
                  gorgées, en commençant par <em>Bismillah</em>. Le Prophète &#xFDFA;
                  ne buvait jamais debout en situation normale et recommandait de ne
                  pas souffler dans le récipient. Ces règles, au-delà de leur
                  dimension spirituelle, favorisent une absorption calme et régulière
                  de l&apos;eau.
                </p>

                {/* TABLEAU 1 : Causes et solutions */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Cause de la constipation
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Remède naturel arabe
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Référence prophétique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          Manque de fibres
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Dattes, figues sèches, orge (talbina)
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Sunna de rompre le jeûne avec des dattes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          Déshydratation
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Eau tiède au réveil, miel dans l&apos;eau
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Sunna de boire assis, en trois gorgées
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          Sédentarité
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Marche après le repas, mouvement quotidien
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Encouragement du Prophète &#xFDFA; à la marche
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          Stress chronique
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Dhikr, prière, talbina, infusions
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Talbina &laquo;&nbsp;réconforte le cœur&nbsp;&raquo; (al-Bukhari)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          Alimentation raffinée
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Céréales complètes, légumes, huile d&apos;olive
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Le Prophète &#xFDFA; mangeait du pain d&apos;orge
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-la-constipation-solutions-naturelles-selon-la-tradition-islamique-2.jpg"
                    alt="Remèdes arabes naturels pour la digestion : herbes, épices et ingrédients traditionnels pour le transit intestinal"
                    width={800}
                    height={480}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : LE SÉNÉ (SANA MAKKI) */}
              {/* ============================================ */}
              <section id="sene-sana-makki" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le séné (sana makki) : remède prophétique contre la
                  constipation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le séné (<em>Cassia angustifolia</em> ou <em>Senna</em>),
                  appelé <em>sana makki</em> en arabe, est l&apos;un des laxatifs
                  naturels les plus puissants de la pharmacopée arabe traditionnelle.
                  Mentionné dans plusieurs hadiths, il occupe une place particulière
                  dans la médecine prophétique pour le traitement de la constipation
                  et la purification du système digestif.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le hadith du Prophète &#xFDFA; sur le séné
                </h3>

                <blockquote className="my-8 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p
                    className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                    dir="rtl"
                  >
                    عَلَيْكُمْ بِالسَّنَا وَالسَّنُّوتِ فَإِنَّ فِيهِمَا شِفَاءً
                    مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;Utilisez le séné et le sannut, car ils contiennent un
                    remède contre toute maladie, sauf la mort.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapporté par Ibn Majah et at-Tirmidhi
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de la médecine prophétique, notamment Ibn al-Qayyim dans
                  son ouvrage <em>Zad al-Ma&apos;ad</em>, expliquent que le séné agit
                  comme un purgatif qui nettoie les intestins des matières accumulées.
                  Le terme <em>sannut</em> désigne, selon les savants, le miel, le
                  cumin ou le beurre, qui adoucissent l&apos;action parfois vigoureuse du
                  séné.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Mode d&apos;action et principes actifs
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le séné contient des sennosides (anthraquinônes), des principes
                  actifs qui stimulent les contractions du côlon
                  (<em>péristaltisme</em>) et augmentent la sécrétion d&apos;eau dans
                  la lumière intestinale. Son effet se manifeste généralement 6 à
                  12 heures après la prise, ce qui en fait un remède idéal à
                  consommer le soir pour un résultat le lendemain matin.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Préparation et dosage
                </h3>

                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <p className="font-semibold text-primary">
                    Recette traditionnelle d&apos;infusion de séné
                  </p>
                  <ol className="mt-3 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        1
                      </span>
                      <span>
                        Placez une demi-cuillère à café de feuilles de séné
                        séchées dans une tasse.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        2
                      </span>
                      <span>
                        Versez de l&apos;eau chaude (non bouillante, environ 80 °C) sur
                        les feuilles.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        3
                      </span>
                      <span>
                        Laissez infuser 10 minutes, puis filtrez.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        4
                      </span>
                      <span>
                        Ajoutez une cuillère de miel pour adoucir le goût amer.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        5
                      </span>
                      <span>
                        Buvez le soir avant le coucher, 1 à 2 fois par semaine
                        maximum.
                      </span>
                    </li>
                  </ol>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Précautions et contre-indications
                </h3>

                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
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
                      <p className="text-sm font-semibold text-red-800">
                        Contre-indications du séné
                      </p>
                      <ul className="mt-2 space-y-1 text-sm leading-relaxed text-red-700">
                        <li>
                          Ne dépassez jamais 7 jours consécutifs d&apos;utilisation
                        </li>
                        <li>
                          Interdit aux femmes enceintes et allaitantes
                        </li>
                        <li>
                          Déconseillé aux enfants de moins de 12 ans sans avis
                          médical
                        </li>
                        <li>
                          Ne pas utiliser en cas de douleurs abdominales
                          inexpliquées, d&apos;occlusion intestinale ou de maladie
                          inflammatoire de l&apos;intestin
                        </li>
                        <li>
                          Un usage prolongé peut entraîner une dépendance
                          intestinale et une perte de potassium
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sagesse prophétique rejoint ici le principe médical de
                  modération. Le séné est un remède puissant qui doit rester
                  ponctuel. Une constipation négligée peut favoriser{" "}
                  <Link
                    href="/remede-arabe-hemorroides"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    les hémorroïdes, souvent liées à la constipation
                  </Link>
                  . Pour une constipation légère ou récurrente, les remèdes
                  plus doux (miel, huile d&apos;olive, dattes) sont à privilégier au
                  quotidien.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : MIEL, HUILE D&apos;OLIVE, DATTES */}
              {/* ============================================ */}
              <section
                id="miel-huile-olive-dattes"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Miel, huile d&apos;olive et dattes : trio naturel
                  anti-constipation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois aliments, fréquemment mentionnés dans le Coran et la
                  Sunna, forment le socle de l&apos;approche prophétique pour un transit
                  sain. Chacun agit différemment sur le système digestif, et leur
                  combinaison offre une réponse complète à la constipation.
                </p>

                {/* Le miel */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le miel à jeun dans l&apos;eau tiède
                </h3>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    variées, dans laquelle il y a une guérison pour les
                    gens.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Sourate An-Nahl, verset 69
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le miel possède des propriétés prébiotiques naturelles : il
                  nourrit les bonnes bactéries de la flore intestinale et favorise la
                  production d&apos;acides gras à chaîne courte, bénéfiques pour la
                  muqueuse du côlon. Dilué dans de l&apos;eau tiède (pas bouillante,
                  pour préserver les enzymes), il stimule doucement le péristaltisme
                  intestinal.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un hadith rapporté par al-Bukhari et Muslim raconte qu&apos;un homme
                  vint se plaindre au Prophète &#xFDFA; que son frère souffrait de
                  douleurs abdominales. Le Prophète &#xFDFA; lui dit :
                  &laquo;&nbsp;Donne-lui du miel.&nbsp;&raquo; L&apos;homme revint
                  plusieurs fois, et le Prophète &#xFDFA; répéta la même
                  recommandation. Après avoir bu du miel, l&apos;homme guérit. Ce hadith
                  illustre la confiance du Prophète &#xFDFA; dans les vertus
                  thérapeutiques du miel.
                </p>

                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <p className="font-semibold text-primary">
                    Protocole miel et eau tiède contre la constipation
                  </p>
                  <ul className="mt-3 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 mt-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Diluez une cuillère à soupe de miel pur dans un verre
                        d&apos;eau tiède (environ 40 °C)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 mt-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Buvez chaque matin à jeun, 20 à 30 minutes avant le
                        petit-déjeuner
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 mt-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Privilégiez un miel pur, non chauffé, de qualité (miel de
                        jujubier, de thym ou de sidr)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 mt-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Précaution : les diabétiques doivent surveiller leur
                        glycémie
                      </span>
                    </li>
                  </ul>
                </div>

                {/* L&apos;huile d&apos;olive */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  L&apos;huile d&apos;olive : lubrifiant naturel de l&apos;intestin
                </h3>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p
                    className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                    dir="rtl"
                  >
                    كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ
                    مُبَارَكَةٍ
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;Mangez de l&apos;huile d&apos;olive et
                    enduisez-vous-en, car elle provient d&apos;un arbre
                    béni.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapporté par at-Tirmidhi et Ibn Majah
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;huile d&apos;olive extra-vierge agit comme un lubrifiant
                  mécanique : elle enrobe les selles et facilite leur progression dans
                  le côlon. Riche en acides gras mono-insaturés (acide oléique) et en
                  polyphénols, elle possède également des propriétés
                  anti-inflammatoires qui protègent la muqueuse intestinale.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La recette traditionnelle la plus répandue dans les familles du
                  Maghreb consiste à prendre une cuillère à soupe d&apos;huile
                  d&apos;olive à jeun le matin, seule ou mélangée à quelques gouttes de
                  jus de citron. Cette association stimule la vésicule biliaire et
                  favorise la sécrétion de bile, un laxatif naturel produit par le
                  foie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans les familles arabes, l&apos;huile d&apos;olive est aussi utilisée
                  pour préparer les figues sèches trempées : on place des figues
                  séchées dans un bocal d&apos;huile d&apos;olive pendant 24 à 48 heures.
                  Consommer 2 à 3 figues ainsi préparées chaque matin apporte à la
                  fois des fibres et l&apos;effet lubrifiant de l&apos;huile.
                </p>

                {/* Les dattes */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Les dattes : fibres et énergie naturelle
                </h3>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p
                    className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                    dir="rtl"
                  >
                    مَنْ تَصَبَّحَ بِسَبْعِ تَمَرَاتٍ عَجْوَةٍ لَمْ يَضُرَّهُ
                    ذَلِكَ الْيَوْمَ سُمٌّ وَلَا سِحْرٌ
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;Celui qui mange le matin sept dattes ajwa, ni le
                    poison ni la sorcellerie ne lui nuiront ce jour-là.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapporté par al-Bukhari et Muslim
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les dattes figurent parmi les aliments les plus consommés par le
                  Prophète &#xFDFA; et ses compagnons. Leur richesse en fibres (environ
                  7 g pour 100 g) et en sorbitol, un sucre-alcool aux propriétés
                  légèrement laxatives, en fait un allié naturel contre la
                  constipation. Elles contiennent également du potassium, du
                  magnésium et des vitamines du groupe B, nécessaires au bon
                  fonctionnement musculaire de l&apos;intestin.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour un effet optimal sur le transit, consommez 3 à 5 dattes le
                  matin, trempées dans l&apos;eau ou accompagnées d&apos;un grand verre
                  d&apos;eau. La combinaison fibres et hydratation multiplie l&apos;effet
                  bénéfique sur le bol fécal.
                </p>

                {/* TABLEAU 2 : Comparatif miel / huile / dattes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Remède
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Mode d&apos;action
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Dosage recommandé
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Précaution
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          Miel dans l&apos;eau tiède
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Prébiotique, stimule le péristaltisme
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          1 c.à.s. dans un verre d&apos;eau, à jeun
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Surveiller la glycémie (diabète)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          Huile d&apos;olive extra-vierge
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Lubrifie l&apos;intestin, stimule la bile
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          1 c.à.s. à jeun, seule ou + citron
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Éviter en cas de troubles biliaires
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          Dattes (ajwa, medjool)
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Fibres + sorbitol (effet osmotique)
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          3 à 5 dattes le matin + eau
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Modérer si diabète (sucres naturels)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          Séné (sana makki)
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Laxatif stimulant (sennosides)
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          ½ c.à.c. en infusion, max. 7 jours
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Interdit grossesse, allaitement
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          Figues sèches dans l&apos;huile d&apos;olive
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Fibres + lubrification
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          2 à 3 figues trempées 24h, le matin
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Bon pour la plupart des profils
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          Psyllium blond
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Mucilage, forme un gel dans l&apos;intestin
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          1 c.à.s. + grand verre d&apos;eau
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Boire beaucoup pour éviter les bouchons
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-la-constipation-solutions-naturelles-selon-la-tradition-islamique-3.jpg"
                    alt="Dattes, miel et huile d&apos;olive : remèdes prophétiques naturels pour le transit intestinal"
                    width={800}
                    height={480}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : TALBINA ET ALIMENTATION */}
              {/* ============================================ */}
              <section
                id="talbina-alimentation"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Talbina et alimentation prophétique pour le transit
                </h2>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La talbina : bouillie d&apos;orge du Prophète &#xFDFA;
                </h3>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p
                    className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                    dir="rtl"
                  >
                    التَّلْبِينَةُ مُجِمَّةٌ لِفُؤَادِ الْمَرِيضِ تَذْهَبُ
                    بِبَعْضِ الْحُزْنِ
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;La talbina réconforte le cœur du malade et emporte
                    une partie de son chagrin.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapporté par al-Bukhari
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  La talbina est une bouillie préparée à partir de farine d&apos;orge
                  (<em>sha&apos;ir</em>), d&apos;eau ou de lait, et sucrée au miel. Son
                  nom vient du mot arabe <em>laban</em> (lait), car sa consistance
                  rappelle celle du lait. L&apos;orge est naturellement riche en fibres
                  solubles, en particulier les bêta-glucanes, qui possèdent trois
                  actions complémentaires pour le transit :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet de lest :</strong> les fibres solubles
                      absorbent l&apos;eau et augmentent le volume du bol fécal, ce qui
                      stimule les contractions intestinales
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet prébiotique :</strong> les bêta-glucanes
                      nourrissent les bifidobactéries et les lactobacilles, favorisant
                      un écosystème intestinal sain
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet apaisant :</strong> la consistance onctueuse
                      de la talbina calme les irritations de la muqueuse du côlon et
                      facilite le passage des selles
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <p className="font-semibold text-primary">
                    Recette traditionnelle de la talbina
                  </p>
                  <ol className="mt-3 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        1
                      </span>
                      <span>
                        Mélangez 2 cuillères à soupe de farine d&apos;orge dans 250 ml
                        d&apos;eau ou de lait
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        2
                      </span>
                      <span>
                        Faites cuire à feu doux pendant 10 à 15 minutes en remuant
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        3
                      </span>
                      <span>
                        Ajoutez une cuillère de miel une fois la préparation tiède
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        4
                      </span>
                      <span>
                        Consommez chaque matin au petit-déjeuner ou en
                        collation
                      </span>
                    </li>
                  </ol>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  L&apos;eau en abondance : la Sunna de boire assis
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  L&apos;hydratation est la clé de voûte de tout programme
                  anti-constipation. Le Prophète &#xFDFA; enseignait de boire assis, en
                  trois gorgées, en commençant par <em>Bismillah</em> et en
                  terminant par <em>Alhamdulillah</em>. Cette manière de boire,
                  au-delà de sa dimension spirituelle, présente des avantages
                  physiologiques :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Boire assis permet une meilleure absorption de l&apos;eau par
                      l&apos;estomac et les intestins
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les petites gorgées évitent la surcharge gastrique et la
                      dilution excessive des sucs digestifs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un verre d&apos;eau tiède au réveil stimule le réflexe
                      gastro-colique, déclenchant naturellement l&apos;envie d&apos;aller
                      aux toilettes
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;objectif est de boire 1,5 à 2 litres d&apos;eau par jour,
                  répartis régulièrement. Les infusions de fenouil, de coriandre ou
                  de camomille, très prisées dans les foyers arabes après le repas,
                  contribuent à cette hydratation tout en apaisant les spasmes
                  digestifs.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  L&apos;alimentation prophétique : fibres, fruits et légumes
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète &#xFDFA; consommait une alimentation simple et équilibrée :
                  du pain d&apos;orge, des dattes, du miel, de l&apos;huile d&apos;olive, du
                  vinaigre, de la viande en quantité modérée et des légumes tels que
                  la courge (<em>dubba&apos;</em>), qu&apos;il appréciait
                  particulièrement. Cette alimentation naturellement riche en fibres et
                  pauvre en aliments transformés constitue la meilleure prévention
                  contre la constipation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith rapporté par at-Tirmidhi enseigne une règle
                  fondamentale pour la santé digestive :
                </p>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p
                    className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                    dir="rtl"
                  >
                    مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ
                    ابْنِ آدَمَ أُكُلَاتٌ يُقِمْنَ صُلْبَهُ فَإِنْ كَانَ لَا
                    مَحَالَةَ فَثُلُثٌ لِطَعَامِهِ وَثُلُثٌ لِشَرَابِهِ وَثُلُثٌ
                    لِنَفَسِهِ
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;L&apos;homme ne remplit pas de récipient pire que son
                    ventre. Quelques bouchées suffisent au fils d&apos;Adam pour se
                    maintenir. S&apos;il doit absolument manger davantage, alors un tiers
                    pour sa nourriture, un tiers pour sa boisson et un tiers pour son
                    souffle.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapporté par at-Tirmidhi et Ibn Majah
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith pose le principe de modération alimentaire, qui
                  bénéficie directement au transit intestinal. Manger légèrement
                  permet à l&apos;estomac et aux intestins de fonctionner sans surcharge,
                  évitant ainsi la lourdeur et la stagnation qui contribuent à la
                  constipation. Cette modération permet également de{" "}
                  <Link
                    href="/remede-arabe-maigrir-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    perdre du poids tout en améliorant son transit
                  </Link>
                  .
                </p>

                {/* Profils adaptés */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Adapter les remèdes selon les profils
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Les remèdes arabes s&apos;adaptent à chaque situation, à condition de
                  respecter les spécificités de chaque personne. La bienveillance de
                  la tradition prophétique s&apos;exprime dans cette personnalisation.
                </p>

                {/* PROFIL 1 : Adulte */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h4 className="text-lg font-semibold text-primary">
                    Profil 1 : Adulte en bonne santé
                  </h4>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    L&apos;adulte peut utiliser l&apos;ensemble des remèdes présentés :
                    miel dans l&apos;eau tiède le matin, huile d&apos;olive à jeun, dattes au
                    petit-déjeuner, talbina régulière. Le séné peut être utilisé
                    ponctuellement en cas de constipation sévère. La marche après le
                    repas et une hydratation de 1,5 à 2 litres par jour complètent cette
                    approche.
                  </p>
                </div>

                {/* PROFIL 2 : Femme enceinte */}
                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <h4 className="text-lg font-semibold text-primary">
                    Profil 2 : Femme enceinte
                  </h4>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Pour en savoir plus sur{" "}
                    <Link
                      href="/remede-arabe-grossesse"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      la constipation fréquente durant la grossesse
                    </Link>
                    , il faut savoir que la grossesse favorise ce trouble en raison des changements
                    hormonaux et de la pression de l&apos;utérus sur le côlon.
                    Privilégiez les remèdes doux : figues cuites, pruneaux, dattes,
                    miel et hydratation renforcée. Les massages circulaires du ventre
                    (dans le sens des aiguilles d&apos;une montre) apportent un soulagement
                    supplémentaire. Le séné est formellement interdit pendant la
                    grossesse.
                  </p>
                </div>

                {/* PROFIL 3 : Enfant */}
                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <h4 className="text-lg font-semibold text-primary">
                    Profil 3 : Enfant (plus de 3 ans)
                  </h4>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Chez l&apos;enfant, seuls les remèdes les plus doux sont
                    recommandés : compotes de dattes et de pruneaux, eau en
                    quantité suffisante, jeux actifs et gymnastique ludique. La talbina
                    au miel peut être proposée comme petit-déjeuner. Ne donnez jamais
                    de séné à un enfant de moins de 12 ans sans avis médical.
                    Instaurez une routine régulière pour les horaires de repas et le
                    passage aux toilettes.
                  </p>
                </div>

                {/* PROFIL 4 : Senior */}
                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <h4 className="text-lg font-semibold text-primary">
                    Profil 4 : Senior
                  </h4>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Les personnes âgées sont particulièrement sujettes à la
                    constipation en raison du ralentissement du transit et de la
                    sédentarité. Le psyllium blond et les graines de lin, mélangés à
                    de l&apos;eau ou du yaourt, apportent des fibres douces. Les
                    infusions de fenouil après le repas, l&apos;huile d&apos;olive à jeun et les
                    massages abdominaux complètent la prise en charge. Veillez à une
                    hydratation régulière, car la sensation de soif diminue avec
                    l&apos;âge.
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : INVOCATIONS DE GUÉRISON */}
              {/* ============================================ */}
              <section
                id="invocations-guerison"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations de guérison et dimension spirituelle
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  En islam, la guérison n&apos;est pas seulement physique. Le croyant
                  associe les remèdes matériels aux invocations et à la confiance en
                  Dieu (<em>tawakkul</em>). Le Coran lui-même est présenté comme
                  porteur de guérison :
                </p>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p
                    className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                    dir="rtl"
                  >
                    وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ
                    لِلْمُؤْمِنِينَ
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;Nous faisons descendre du Coran ce qui est une
                    guérison et une miséricorde pour les croyants.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Sourate Al-Isra, verset 82
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète &#xFDFA; a enseigné que tout mal a son remède, et que se
                  soigner fait partie des moyens légitimes :
                </p>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p
                    className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                    dir="rtl"
                  >
                    تَدَاوَوْا عِبَادَ اللَّهِ فَإِنَّ اللَّهَ لَمْ يَضَعْ
                    دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;Soignez-vous, serviteurs de Dieu, car Dieu n&apos;a pas
                    créé de maladie sans avoir créé son remède.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapporté par Abu Dawud et at-Tirmidhi
                  </cite>
                </blockquote>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Invocations à réciter pour le malade
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Voici les principales invocations de guérison enseignées par le
                  Prophète &#xFDFA;, à réciter avec sincérité et confiance en Dieu.
                  Elles s&apos;appliquent à toute maladie, y compris les troubles
                  digestifs :
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
                      &laquo;&nbsp;Ôte le mal, Seigneur des hommes, et guéris. Tu es
                      Celui qui guérit, il n&apos;y a de guérison que Ta guérison, une
                      guérison qui ne laisse aucune maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari et Muslim
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ
                      فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ
                      الْعَلِيمُ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Au nom de Dieu, avec le nom Duquel rien ne peut
                      nuire sur terre ni dans le ciel, et Il est l&apos;Audient, le
                      Savant.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par Abu Dawud et at-Tirmidhi (3 fois le matin et le
                      soir)
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La récitation des sourates protectrices (Al-Fatiha, Al-Ikhlas,
                  Al-Falaq, An-Nas) et du verset du Trône (Ayat al-Kursi) avant de
                  dormir complète cette routine spirituelle. L&apos;islam enseigne que les
                  moyens matériels (remèdes) et spirituels (invocations) se
                  complètent sans s&apos;opposer, car la guérison vient de Dieu seul.
                  Pour{" "}
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    trouver la sérénité dans la prière
                  </Link>
                  , le croyant associe les moyens physiques à l&apos;adoration.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour approfondir la dimension spirituelle de la guérison, la{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    page dédiée aux remèdes arabes et à la médecine prophétique
                  </Link>{" "}
                  détaille les pratiques de roqya légitime et les invocations
                  complètes enseignées par le Prophète &#xFDFA;.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : QUAND CONSULTER */}
              {/* ============================================ */}
              <section id="quand-consulter" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand consulter un gastro-entérologue
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les remèdes arabes et prophétiques sont un complément précieux, mais
                  ils ne remplacent jamais un avis médical professionnel. L&apos;islam
                  encourage le recours à la médecine moderne, qui fait partie des
                  moyens que Dieu a mis à la disposition de Ses serviteurs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Consultez un gastro-entérologue si vous présentez l&apos;un des signes
                  suivants :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Constipation persistante depuis plus de 3 semaines malgré les
                      mesures hygiéno-diététiques
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Présence de sang dans les selles ou selles noires
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Douleurs abdominales intenses ou crampes sévères
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Perte de poids inexpliquée ou fatigue persistante
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Alternance constipation et diarrhée (possible syndrome de
                      l&apos;intestin irritable)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Antécédents familiaux de cancer colorectal ou polypose
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Modification récente et inexpliquée du transit, surtout après
                      50 ans
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Rappel important
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Le Prophète &#xFDFA; a dit : &laquo;&nbsp;Soignez-vous, serviteurs de
                    Dieu&nbsp;&raquo;. Ce hadith ne fait aucune distinction entre les
                    remèdes naturels et la médecine moderne. L&apos;un et l&apos;autre sont des
                    moyens légitimes. N&apos;arrêtez jamais un traitement médical
                    prescrit par votre médecin au profit d&apos;un remède naturel.
                    Informez toujours votre praticien des compléments que vous
                    utilisez, car certaines interactions sont possibles (par exemple,
                    le séné peut réduire l&apos;absorption de certains médicaments).
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sagesse islamique enseigne de prendre les moyens tout en
                  s&apos;en remettant à Dieu. Se soigner n&apos;est pas un manque de foi,
                  c&apos;est au contraire un acte d&apos;obéissance et de responsabilité
                  envers le corps que Dieu nous a confié. Qu&apos;Allah accorde la
                  guérison à tous ceux qui souffrent et leur facilite le chemin vers
                  le bien-être.
                </p>
              </section>

              {/* ============================================ */}
              {/* MEDICAL DISCLAIMER (avant FAQ) */}
              {/* ============================================ */}
              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* ============================================ */}
              {/* NAVIGATION SILO remede-arabe */}
              {/* ============================================ */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes arabes et médecine prophétique
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
