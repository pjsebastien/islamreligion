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
    "Remede arabe constipation : sene, miel, huile d\u2019olive et solutions prophetiques",
  description:
    "Decouvrez les remedes arabes contre la constipation : sene (sana makki), miel, huile d\u2019olive, dattes, talbina et alimentation prophetique. Hadiths, dosages et precautions.",
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
    label: "Le s\u00e9n\u00e9 (sana makki) : remede prophetique laxatif",
  },
  {
    id: "miel-huile-olive-dattes",
    label: "Miel, huile d\u2019olive et dattes : trio naturel anti-constipation",
  },
  {
    id: "talbina-alimentation",
    label: "Talbina et alimentation proph\u00e9tique pour le transit",
  },
  {
    id: "invocations-guerison",
    label: "Invocations de gu\u00e9rison et dimension spirituelle",
  },
  {
    id: "quand-consulter",
    label: "Quand consulter un gastro-ent\u00e9rologue",
  },
];

const faqItems = [
  {
    question:
      "Comment utiliser le s\u00e9n\u00e9 (sana makki) contre la constipation ?",
    answer:
      "Le s\u00e9n\u00e9 s\u2019utilise en infusion : faites infuser une demi-cuill\u00e8re \u00e0 caf\u00e9 de feuilles s\u00e9ch\u00e9es dans une tasse d\u2019eau chaude pendant 10 minutes. Filtrez et buvez le soir avant le coucher. Ne d\u00e9passez pas 7 jours cons\u00e9cutifs d\u2019utilisation pour \u00e9viter toute accoutumance intestinale. Le Proph\u00e8te \uFE0E a recommand\u00e9 cette plante selon le hadith rapport\u00e9 par at-Tirmidhi et Ibn Majah.",
  },
  {
    question:
      "Le miel dans l\u2019eau ti\u00e8de aide-t-il vraiment contre la constipation ?",
    answer:
      "Oui, le miel dilu\u00e9 dans de l\u2019eau ti\u00e8de le matin \u00e0 jeun stimule le p\u00e9ristaltisme intestinal et favorise la digestion. Le Coran mentionne le miel comme porteur de gu\u00e9rison (sourate An-Nahl, verset 69). Privil\u00e9giez un miel pur et non chauff\u00e9 pour pr\u00e9server ses enzymes actives. Une cuill\u00e8re \u00e0 soupe dans un verre d\u2019eau ti\u00e8de (pas bouillante) suffit.",
  },
  {
    question:
      "Quelles sont les pr\u00e9cautions avec l\u2019huile d\u2019olive pour la constipation ?",
    answer:
      "L\u2019huile d\u2019olive extra-vierge agit comme un lubrifiant naturel pour l\u2019intestin. Prenez une cuill\u00e8re \u00e0 soupe \u00e0 jeun le matin. \u00c9vitez les exc\u00e8s si vous souffrez de troubles biliaires ou de calculs v\u00e9siculaires. Chez les personnes diab\u00e9tiques, surveillez l\u2019apport calorique global. L\u2019huile d\u2019olive est mentionn\u00e9e dans le Coran comme provenant d\u2019un arbre b\u00e9ni (sourate An-Nur, verset 35).",
  },
  {
    question:
      "Les dattes peuvent-elles soulager la constipation ?",
    answer:
      "Les dattes sont riches en fibres (environ 7 g pour 100 g) et en sorbitol, un sucre naturel aux propri\u00e9t\u00e9s l\u00e9g\u00e8rement laxatives. Consommez 3 \u00e0 5 dattes par jour, de pr\u00e9f\u00e9rence tremp\u00e9es dans l\u2019eau ou accompagn\u00e9es d\u2019un verre d\u2019eau. Le Proph\u00e8te \uFE0E consommait r\u00e9guli\u00e8rement des dattes et les recommandait pour rompre le je\u00fbne.",
  },
  {
    question:
      "La talbina est-elle efficace pour r\u00e9guler le transit intestinal ?",
    answer:
      "La talbina (bouillie d\u2019orge) est riche en fibres solubles, notamment en b\u00eata-glucanes, qui favorisent le transit et nourrissent la flore intestinale. Le Proph\u00e8te \uFE0E la recommandait pour le malade. Pr\u00e9parez-la en faisant cuire de la farine d\u2019orge dans de l\u2019eau ou du lait, puis ajoutez du miel. Une portion quotidienne aide \u00e0 r\u00e9guler le transit.",
  },
  {
    question:
      "Quelle quantit\u00e9 d\u2019eau faut-il boire pour \u00e9viter la constipation ?",
    answer:
      "Les recommandations g\u00e9n\u00e9rales pr\u00e9conisent 1,5 \u00e0 2 litres d\u2019eau par jour, soit environ 6 \u00e0 8 verres. La Sunna encourage \u00e0 boire assis, en trois gorg\u00e9es, en disant Bismillah. L\u2019hydratation matinale est particuli\u00e8rement b\u00e9n\u00e9fique : un verre d\u2019eau ti\u00e8de au r\u00e9veil stimule le transit intestinal et pr\u00e9pare le syst\u00e8me digestif.",
  },
  {
    question:
      "Les rem\u00e8des arabes contre la constipation conviennent-ils aux femmes enceintes ?",
    answer:
      "Certains rem\u00e8des conviennent aux femmes enceintes : le miel, les dattes, les figues cuites, les pruneaux et l\u2019hydratation renforc\u00e9e sont s\u00fbrs. En revanche, le s\u00e9n\u00e9 (sana makki) est formellement d\u00e9conseill\u00e9 pendant la grossesse car il peut provoquer des contractions. Consultez toujours votre m\u00e9decin ou votre sage-femme avant d\u2019utiliser un rem\u00e8de \u00e0 base de plantes.",
  },
  {
    question:
      "Existe-t-il des invocations sp\u00e9cifiques pour la gu\u00e9rison en cas de constipation ?",
    answer:
      "Il n\u2019existe pas d\u2019invocation sp\u00e9cifique \u00e0 la constipation, mais les invocations g\u00e9n\u00e9rales de gu\u00e9rison s\u2019appliquent \u00e0 tout mal. Le Proph\u00e8te \uFE0E r\u00e9citait notamment : \u00ab \u00d4te le mal, Seigneur des hommes, et gu\u00e9ris. Tu es Celui qui gu\u00e9rit, il n\u2019y a de gu\u00e9rison que Ta gu\u00e9rison, une gu\u00e9rison qui ne laisse aucune maladie \u00bb (al-Bukhari et Muslim). Associez ces invocations aux rem\u00e8des naturels, en sachant que la gu\u00e9rison vient de Dieu seul.",
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
          "Rem\u00e8de arabe pour la constipation : s\u00e9n\u00e9, miel, huile d\u2019olive et solutions proph\u00e9tiques",
        description:
          "D\u00e9couvrez les rem\u00e8des arabes contre la constipation : s\u00e9n\u00e9 (sana makki), miel, huile d\u2019olive, dattes, talbina et alimentation proph\u00e9tique.",
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
            name: "Rem\u00e8des arabes",
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
          title="Rem\u00e8de arabe pour la constipation : solutions naturelles selon la tradition proph\u00e9tique"
          subtitle="S\u00e9n\u00e9, miel, huile d&apos;olive, dattes et talbina : les rem\u00e8des naturels transmis par la Sunna pour retrouver un transit serein."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-la-constipation-solutions-naturelles-selon-la-tradition-islamique-1.jpg"
          imageAlt="Rem\u00e8des arabes naturels pour la constipation : herbes, miel, dattes et huile d&apos;olive selon la tradition islamique"
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
                  Rem\u00e8des arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Constipation</span>
              </nav>

              {/* ============================================ */}
              {/* MEDICAL DISCLAIMER (d\u00e9but) */}
              {/* ============================================ */}
              <MedicalDisclaimer />

              {/* Introduction */}
              <p className="mt-8 text-lg leading-relaxed text-foreground">
                La constipation perturbe le confort de vie et touche toutes les
                g\u00e9n\u00e9rations, des jeunes enfants aux personnes \u00e2g\u00e9es. Loin
                d&apos;\u00eatre un sujet anodin, ce trouble digestif peut affecter le
                bien-\u00eatre physique et moral au quotidien. La tradition arabe et la
                m\u00e9decine proph\u00e9tique offrent des solutions douces, naturelles et
                accessibles, transmises de g\u00e9n\u00e9ration en g\u00e9n\u00e9ration par les
                familles du Maghreb, du Levant et de la p\u00e9ninsule arabique.
              </p>

              <p className="mt-4 leading-relaxed text-foreground">
                Le Proph\u00e8te Muhammad \uFE0E a enseign\u00e9 l&apos;importance de se soigner et de
                prendre soin de son corps, qui constitue un d\u00e9p\u00f4t
                (<em>amana</em>) confi\u00e9 par Dieu. Les rem\u00e8des pr\u00e9sent\u00e9s ici
                reposent sur des ingr\u00e9dients mentionn\u00e9s dans le Coran et la Sunna :
                le s\u00e9n\u00e9 (sana makki), le miel, l&apos;huile d&apos;olive, les dattes
                et l&apos;orge. Chacun poss\u00e8de des propri\u00e9t\u00e9s reconnues par la
                recherche scientifique moderne, ce qui confirme la sagesse de ces
                recommandations ancestrales.
              </p>

              <ArticleCTA
                variant="page-mere"
                title="Cet article fait partie du dossier Rem\u00e8des arabes"
                href="/remede-arabe"
                linkText="D\u00e9couvrir tous les rem\u00e8des proph\u00e9tiques"
              />

              {/* ============================================ */}
              {/* SECTION 1 : CAUSES */}
              {/* ============================================ */}
              <section id="causes-constipation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Causes de la constipation selon la tradition arabe
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La m\u00e9decine arabe traditionnelle, inspir\u00e9e des enseignements
                  d&apos;Ibn Sina (<em>Avicenne</em>) et d&apos;Ibn al-Qayyim, consid\u00e8re
                  la constipation comme le signe d&apos;un d\u00e9s\u00e9quilibre entre
                  l&apos;alimentation, l&apos;hydratation et le mode de vie. Plut\u00f4t que de
                  traiter le sympt\u00f4me isol\u00e9ment, la tradition encourage \u00e0 comprendre
                  les causes profondes pour y rem\u00e9dier durablement.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les facteurs alimentaires
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le manque de fibres est la cause la plus fr\u00e9quente de la
                  constipation. L&apos;alimentation moderne, souvent pauvre en fruits,
                  l\u00e9gumes et c\u00e9r\u00e9ales compl\u00e8tes, prive l&apos;intestin de la mati\u00e8re
                  n\u00e9cessaire \u00e0 la formation d&apos;un bol f\u00e9cal souple et volumineux.
                  La tradition proph\u00e9tique, \u00e0 l&apos;inverse, valorise une alimentation
                  riche en dattes, figues, orge, l\u00e9gumes et huile d&apos;olive.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te \uFE0E rompait son je\u00fbne avec des dattes fra\u00eeches
                  (<em>rutab</em>), ou des dattes s\u00e8ches (<em>tamr</em>), ou de
                  l&apos;eau. Ce geste simple illustre la place centrale des aliments
                  riches en fibres dans la Sunna. Les dattes contiennent environ 7 g
                  de fibres pour 100 g, ce qui en fait un alli\u00e9 pr\u00e9cieux du transit
                  intestinal.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La s\u00e9dentarit\u00e9 et le manque de mouvement
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  La s\u00e9dentarit\u00e9 ralentit le p\u00e9ristaltisme, c&apos;est-\u00e0-dire les
                  contractions naturelles de l&apos;intestin qui poussent les selles vers
                  la sortie. La Sunna encourage la marche, la nage et le tir \u00e0
                  l&apos;arc. Le simple fait de marcher apr\u00e8s le repas du soir, comme le
                  pratiquaient les compagnons du Proph\u00e8te \uFE0E, suffit souvent \u00e0
                  relancer un transit paresseux.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le stress et la dimension \u00e9motionnelle
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le stress chronique perturbe le fonctionnement du syst\u00e8me nerveux
                  ent\u00e9rique, souvent appel\u00e9 &laquo;&nbsp;deuxi\u00e8me cerveau&nbsp;&raquo;. Comprendre{" "}
                  <Link
                    href="/remede-angoisse-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le stress qui perturbe la digestion
                  </Link>{" "}
                  est essentiel pour y rem\u00e9dier.
                  L&apos;islam accorde une place importante \u00e0 la s\u00e9r\u00e9nit\u00e9 int\u00e9rieure :
                  les pri\u00e8res quotidiennes, le dhikr (rappel de Dieu), la r\u00e9citation
                  du Coran et la confiance en Dieu (<em>tawakkul</em>) sont autant
                  de pratiques qui apaisent le corps et l&apos;esprit, favorisant ainsi un
                  transit harmonieux.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;hydratation insuffisante
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Une hydratation insuffisante durcit les selles et rend leur
                  \u00e9vacuation difficile. La Sunna enseigne de boire assis, en trois
                  gorg\u00e9es, en commen\u00e7ant par <em>Bismillah</em>. Le Proph\u00e8te \uFE0E
                  ne buvait jamais debout en situation normale et recommandait de ne
                  pas souffler dans le r\u00e9cipient. Ces r\u00e8gles, au-del\u00e0 de leur
                  dimension spirituelle, favorisent une absorption calme et r\u00e9guli\u00e8re
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
                          Rem\u00e8de naturel arabe
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          R\u00e9f\u00e9rence proph\u00e9tique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          Manque de fibres
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Dattes, figues s\u00e8ches, orge (talbina)
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Sunna de rompre le je\u00fbne avec des dattes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          D\u00e9shydratation
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Eau ti\u00e8de au r\u00e9veil, miel dans l&apos;eau
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Sunna de boire assis, en trois gorg\u00e9es
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          S\u00e9dentarit\u00e9
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Marche apr\u00e8s le repas, mouvement quotidien
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Encouragement du Proph\u00e8te \uFE0E \u00e0 la marche
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          Stress chronique
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Dhikr, pri\u00e8re, talbina, infusions
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Talbina &laquo;&nbsp;r\u00e9conforte le c\u0153ur&nbsp;&raquo; (al-Bukhari)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-foreground">
                          Alimentation raffin\u00e9e
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          C\u00e9r\u00e9ales compl\u00e8tes, l\u00e9gumes, huile d&apos;olive
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Le Proph\u00e8te \uFE0E mangeait du pain d&apos;orge
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-la-constipation-solutions-naturelles-selon-la-tradition-islamique-2.jpg"
                    alt="Rem\u00e8des arabes naturels pour la digestion : herbes, \u00e9pices et ingr\u00e9dients traditionnels pour le transit intestinal"
                    width={800}
                    height={480}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : LE S\u00c9N\u00c9 (SANA MAKKI) */}
              {/* ============================================ */}
              <section id="sene-sana-makki" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le s\u00e9n\u00e9 (sana makki) : rem\u00e8de proph\u00e9tique contre la
                  constipation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le s\u00e9n\u00e9 (<em>Cassia angustifolia</em> ou <em>Senna</em>),
                  appel\u00e9 <em>sana makki</em> en arabe, est l&apos;un des laxatifs
                  naturels les plus puissants de la pharmacop\u00e9e arabe traditionnelle.
                  Mentionn\u00e9 dans plusieurs hadiths, il occupe une place particuli\u00e8re
                  dans la m\u00e9decine proph\u00e9tique pour le traitement de la constipation
                  et la purification du syst\u00e8me digestif.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le hadith du Proph\u00e8te \uFE0E sur le s\u00e9n\u00e9
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
                    &laquo;&nbsp;Utilisez le s\u00e9n\u00e9 et le sannut, car ils contiennent un
                    rem\u00e8de contre toute maladie, sauf la mort.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapport\u00e9 par Ibn Majah et at-Tirmidhi
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de la m\u00e9decine proph\u00e9tique, notamment Ibn al-Qayyim dans
                  son ouvrage <em>Zad al-Ma&apos;ad</em>, expliquent que le s\u00e9n\u00e9 agit
                  comme un purgatif qui nettoie les intestins des mati\u00e8res accumul\u00e9es.
                  Le terme <em>sannut</em> d\u00e9signe, selon les savants, le miel, le
                  cumin ou le beurre, qui adoucissent l&apos;action parfois vigoureuse du
                  s\u00e9n\u00e9.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Mode d&apos;action et principes actifs
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le s\u00e9n\u00e9 contient des sennosides (anthraquin\u00f4nes), des principes
                  actifs qui stimulent les contractions du c\u00f4lon
                  (<em>p\u00e9ristaltisme</em>) et augmentent la s\u00e9cr\u00e9tion d&apos;eau dans
                  la lumi\u00e8re intestinale. Son effet se manifeste g\u00e9n\u00e9ralement 6 \u00e0
                  12 heures apr\u00e8s la prise, ce qui en fait un rem\u00e8de id\u00e9al \u00e0
                  consommer le soir pour un r\u00e9sultat le lendemain matin.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Pr\u00e9paration et dosage
                </h3>

                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <p className="font-semibold text-primary">
                    Recette traditionnelle d&apos;infusion de s\u00e9n\u00e9
                  </p>
                  <ol className="mt-3 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        1
                      </span>
                      <span>
                        Placez une demi-cuill\u00e8re \u00e0 caf\u00e9 de feuilles de s\u00e9n\u00e9
                        s\u00e9ch\u00e9es dans une tasse.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        2
                      </span>
                      <span>
                        Versez de l&apos;eau chaude (non bouillante, environ 80 \u00b0C) sur
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
                        Ajoutez une cuill\u00e8re de miel pour adoucir le go\u00fbt amer.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        5
                      </span>
                      <span>
                        Buvez le soir avant le coucher, 1 \u00e0 2 fois par semaine
                        maximum.
                      </span>
                    </li>
                  </ol>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Pr\u00e9cautions et contre-indications
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
                        Contre-indications du s\u00e9n\u00e9
                      </p>
                      <ul className="mt-2 space-y-1 text-sm leading-relaxed text-red-700">
                        <li>
                          Ne d\u00e9passez jamais 7 jours cons\u00e9cutifs d&apos;utilisation
                        </li>
                        <li>
                          Interdit aux femmes enceintes et allaitantes
                        </li>
                        <li>
                          D\u00e9conseill\u00e9 aux enfants de moins de 12 ans sans avis
                          m\u00e9dical
                        </li>
                        <li>
                          Ne pas utiliser en cas de douleurs abdominales
                          inexpliquées, d&apos;occlusion intestinale ou de maladie
                          inflammatoire de l&apos;intestin
                        </li>
                        <li>
                          Un usage prolong\u00e9 peut entra\u00eener une d\u00e9pendance
                          intestinale et une perte de potassium
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sagesse proph\u00e9tique rejoint ici le principe m\u00e9dical de
                  mod\u00e9ration. Le s\u00e9n\u00e9 est un rem\u00e8de puissant qui doit rester
                  ponctuel. Une constipation n\u00e9glig\u00e9e peut favoriser{" "}
                  <Link
                    href="/remede-arabe-hemorroides"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    les h\u00e9morro\u00efdes, souvent li\u00e9es \u00e0 la constipation
                  </Link>
                  . Pour une constipation l\u00e9g\u00e8re ou r\u00e9currente, les rem\u00e8des
                  plus doux (miel, huile d&apos;olive, dattes) sont \u00e0 privil\u00e9gier au
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
                  Ces trois aliments, fr\u00e9quemment mentionn\u00e9s dans le Coran et la
                  Sunna, forment le socle de l&apos;approche proph\u00e9tique pour un transit
                  sain. Chacun agit diff\u00e9remment sur le syst\u00e8me digestif, et leur
                  combinaison offre une r\u00e9ponse compl\u00e8te \u00e0 la constipation.
                </p>

                {/* Le miel */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le miel \u00e0 jeun dans l&apos;eau ti\u00e8de
                </h3>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    vari\u00e9es, dans laquelle il y a une gu\u00e9rison pour les
                    gens.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Sourate An-Nahl, verset 69
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le miel poss\u00e8de des propri\u00e9t\u00e9s pr\u00e9biotiques naturelles : il
                  nourrit les bonnes bact\u00e9ries de la flore intestinale et favorise la
                  production d&apos;acides gras \u00e0 cha\u00eene courte, b\u00e9n\u00e9fiques pour la
                  muqueuse du c\u00f4lon. Dilu\u00e9 dans de l&apos;eau ti\u00e8de (pas bouillante,
                  pour pr\u00e9server les enzymes), il stimule doucement le p\u00e9ristaltisme
                  intestinal.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un hadith rapport\u00e9 par al-Bukhari et Muslim raconte qu&apos;un homme
                  vint se plaindre au Proph\u00e8te \uFE0E que son fr\u00e8re souffrait de
                  douleurs abdominales. Le Proph\u00e8te \uFE0E lui dit :
                  &laquo;&nbsp;Donne-lui du miel.&nbsp;&raquo; L&apos;homme revint
                  plusieurs fois, et le Proph\u00e8te \uFE0E r\u00e9p\u00e9ta la m\u00eame
                  recommandation. Apr\u00e8s avoir bu du miel, l&apos;homme gu\u00e9rit. Ce hadith
                  illustre la confiance du Proph\u00e8te \uFE0E dans les vertus
                  th\u00e9rapeutiques du miel.
                </p>

                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <p className="font-semibold text-primary">
                    Protocole miel et eau ti\u00e8de contre la constipation
                  </p>
                  <ul className="mt-3 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 mt-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Diluez une cuill\u00e8re \u00e0 soupe de miel pur dans un verre
                        d&apos;eau ti\u00e8de (environ 40 \u00b0C)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 mt-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Buvez chaque matin \u00e0 jeun, 20 \u00e0 30 minutes avant le
                        petit-d\u00e9jeuner
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 mt-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Privil\u00e9giez un miel pur, non chauff\u00e9, de qualit\u00e9 (miel de
                        jujubier, de thym ou de sidr)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 mt-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Pr\u00e9caution : les diab\u00e9tiques doivent surveiller leur
                        glyc\u00e9mie
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
                    b\u00e9ni.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapport\u00e9 par at-Tirmidhi et Ibn Majah
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;huile d&apos;olive extra-vierge agit comme un lubrifiant
                  m\u00e9canique : elle enrobe les selles et facilite leur progression dans
                  le c\u00f4lon. Riche en acides gras mono-insatur\u00e9s (acide ol\u00e9ique) et en
                  polyph\u00e9nols, elle poss\u00e8de \u00e9galement des propri\u00e9t\u00e9s
                  anti-inflammatoires qui prot\u00e8gent la muqueuse intestinale.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La recette traditionnelle la plus r\u00e9pandue dans les familles du
                  Maghreb consiste \u00e0 prendre une cuill\u00e8re \u00e0 soupe d&apos;huile
                  d&apos;olive \u00e0 jeun le matin, seule ou m\u00e9lang\u00e9e \u00e0 quelques gouttes de
                  jus de citron. Cette association stimule la v\u00e9sicule biliaire et
                  favorise la s\u00e9cr\u00e9tion de bile, un laxatif naturel produit par le
                  foie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans les familles arabes, l&apos;huile d&apos;olive est aussi utilis\u00e9e
                  pour pr\u00e9parer les figues s\u00e8ches tremp\u00e9es : on place des figues
                  s\u00e9ch\u00e9es dans un bocal d&apos;huile d&apos;olive pendant 24 \u00e0 48 heures.
                  Consommer 2 \u00e0 3 figues ainsi pr\u00e9par\u00e9es chaque matin apporte \u00e0 la
                  fois des fibres et l&apos;effet lubrifiant de l&apos;huile.
                </p>

                {/* Les dattes */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Les dattes : fibres et \u00e9nergie naturelle
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
                    poison ni la sorcellerie ne lui nuiront ce jour-l\u00e0.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapport\u00e9 par al-Bukhari et Muslim
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les dattes figurent parmi les aliments les plus consomm\u00e9s par le
                  Proph\u00e8te \uFE0E et ses compagnons. Leur richesse en fibres (environ
                  7 g pour 100 g) et en sorbitol, un sucre-alcool aux propri\u00e9t\u00e9s
                  l\u00e9g\u00e8rement laxatives, en fait un alli\u00e9 naturel contre la
                  constipation. Elles contiennent \u00e9galement du potassium, du
                  magn\u00e9sium et des vitamines du groupe B, n\u00e9cessaires au bon
                  fonctionnement musculaire de l&apos;intestin.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour un effet optimal sur le transit, consommez 3 \u00e0 5 dattes le
                  matin, tremp\u00e9es dans l&apos;eau ou accompagn\u00e9es d&apos;un grand verre
                  d&apos;eau. La combinaison fibres et hydratation multiplie l&apos;effet
                  b\u00e9n\u00e9fique sur le bol f\u00e9cal.
                </p>

                {/* TABLEAU 2 : Comparatif miel / huile / dattes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Rem\u00e8de
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Mode d&apos;action
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Dosage recommand\u00e9
                        </th>
                        <th className="border-b border-border px-4 py-3 text-left font-semibold text-primary">
                          Pr\u00e9caution
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          Miel dans l&apos;eau ti\u00e8de
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Pr\u00e9biotique, stimule le p\u00e9ristaltisme
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          1 c.\u00e0.s. dans un verre d&apos;eau, \u00e0 jeun
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Surveiller la glyc\u00e9mie (diab\u00e8te)
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
                          1 c.\u00e0.s. \u00e0 jeun, seule ou + citron
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          \u00c9viter en cas de troubles biliaires
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
                          3 \u00e0 5 dattes le matin + eau
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Mod\u00e9rer si diab\u00e8te (sucres naturels)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          S\u00e9n\u00e9 (sana makki)
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Laxatif stimulant (sennosides)
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          \u00bd c.\u00e0.c. en infusion, max. 7 jours
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Interdit grossesse, allaitement
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">
                          Figues s\u00e8ches dans l&apos;huile d&apos;olive
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Fibres + lubrification
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          2 \u00e0 3 figues tremp\u00e9es 24h, le matin
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
                          1 c.\u00e0.s. + grand verre d&apos;eau
                        </td>
                        <td className="px-4 py-3 text-foreground-secondary">
                          Boire beaucoup pour \u00e9viter les bouchons
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-la-constipation-solutions-naturelles-selon-la-tradition-islamique-3.jpg"
                    alt="Dattes, miel et huile d&apos;olive : rem\u00e8des proph\u00e9tiques naturels pour le transit intestinal"
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
                  Talbina et alimentation proph\u00e9tique pour le transit
                </h2>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La talbina : bouillie d&apos;orge du Proph\u00e8te \uFE0E
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
                    &laquo;&nbsp;La talbina r\u00e9conforte le c\u0153ur du malade et emporte
                    une partie de son chagrin.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapport\u00e9 par al-Bukhari
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  La talbina est une bouillie pr\u00e9par\u00e9e \u00e0 partir de farine d&apos;orge
                  (<em>sha&apos;ir</em>), d&apos;eau ou de lait, et sucr\u00e9e au miel. Son
                  nom vient du mot arabe <em>laban</em> (lait), car sa consistance
                  rappelle celle du lait. L&apos;orge est naturellement riche en fibres
                  solubles, en particulier les b\u00eata-glucanes, qui poss\u00e8dent trois
                  actions compl\u00e9mentaires pour le transit :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet de lest :</strong> les fibres solubles
                      absorbent l&apos;eau et augmentent le volume du bol f\u00e9cal, ce qui
                      stimule les contractions intestinales
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet pr\u00e9biotique :</strong> les b\u00eata-glucanes
                      nourrissent les bifidobact\u00e9ries et les lactobacilles, favorisant
                      un \u00e9cosyst\u00e8me intestinal sain
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet apaisant :</strong> la consistance onctueuse
                      de la talbina calme les irritations de la muqueuse du c\u00f4lon et
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
                        M\u00e9langez 2 cuill\u00e8res \u00e0 soupe de farine d&apos;orge dans 250 ml
                        d&apos;eau ou de lait
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        2
                      </span>
                      <span>
                        Faites cuire \u00e0 feu doux pendant 10 \u00e0 15 minutes en remuant
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        3
                      </span>
                      <span>
                        Ajoutez une cuill\u00e8re de miel une fois la pr\u00e9paration ti\u00e8de
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        4
                      </span>
                      <span>
                        Consommez chaque matin au petit-d\u00e9jeuner ou en
                        collation
                      </span>
                    </li>
                  </ol>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  L&apos;eau en abondance : la Sunna de boire assis
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  L&apos;hydratation est la cl\u00e9 de vo\u00fbte de tout programme
                  anti-constipation. Le Proph\u00e8te \uFE0E enseignait de boire assis, en
                  trois gorg\u00e9es, en commen\u00e7ant par <em>Bismillah</em> et en
                  terminant par <em>Alhamdulillah</em>. Cette mani\u00e8re de boire,
                  au-del\u00e0 de sa dimension spirituelle, pr\u00e9sente des avantages
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
                      Les petites gorg\u00e9es \u00e9vitent la surcharge gastrique et la
                      dilution excessive des sucs digestifs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un verre d&apos;eau ti\u00e8de au r\u00e9veil stimule le r\u00e9flexe
                      gastro-colique, d\u00e9clenchant naturellement l&apos;envie d&apos;aller
                      aux toilettes
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;objectif est de boire 1,5 \u00e0 2 litres d&apos;eau par jour,
                  r\u00e9partis r\u00e9guli\u00e8rement. Les infusions de fenouil, de coriandre ou
                  de camomille, tr\u00e8s pris\u00e9es dans les foyers arabes apr\u00e8s le repas,
                  contribuent \u00e0 cette hydratation tout en apaisant les spasmes
                  digestifs.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  L&apos;alimentation proph\u00e9tique : fibres, fruits et l\u00e9gumes
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le Proph\u00e8te \uFE0E consommait une alimentation simple et \u00e9quilibr\u00e9e :
                  du pain d&apos;orge, des dattes, du miel, de l&apos;huile d&apos;olive, du
                  vinaigre, de la viande en quantit\u00e9 mod\u00e9r\u00e9e et des l\u00e9gumes tels que
                  la courge (<em>dubba&apos;</em>), qu&apos;il appr\u00e9ciait
                  particuli\u00e8rement. Cette alimentation naturellement riche en fibres et
                  pauvre en aliments transform\u00e9s constitue la meilleure pr\u00e9vention
                  contre la constipation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith rapport\u00e9 par at-Tirmidhi enseigne une r\u00e8gle
                  fondamentale pour la sant\u00e9 digestive :
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
                    &laquo;&nbsp;L&apos;homme ne remplit pas de r\u00e9cipient pire que son
                    ventre. Quelques bouch\u00e9es suffisent au fils d&apos;Adam pour se
                    maintenir. S&apos;il doit absolument manger davantage, alors un tiers
                    pour sa nourriture, un tiers pour sa boisson et un tiers pour son
                    souffle.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapport\u00e9 par at-Tirmidhi et Ibn Majah
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith pose le principe de mod\u00e9ration alimentaire, qui
                  b\u00e9n\u00e9ficie directement au transit intestinal. Manger l\u00e9g\u00e8rement
                  permet \u00e0 l&apos;estomac et aux intestins de fonctionner sans surcharge,
                  \u00e9vitant ainsi la lourdeur et la stagnation qui contribuent \u00e0 la
                  constipation. Cette mod\u00e9ration permet \u00e9galement de{" "}
                  <Link
                    href="/remede-arabe-maigrir-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    perdre du poids tout en am\u00e9liorant son transit
                  </Link>
                  .
                </p>

                {/* Profils adapt\u00e9s */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Adapter les rem\u00e8des selon les profils
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Les rem\u00e8des arabes s&apos;adaptent \u00e0 chaque situation, \u00e0 condition de
                  respecter les sp\u00e9cificit\u00e9s de chaque personne. La bienveillance de
                  la tradition proph\u00e9tique s&apos;exprime dans cette personnalisation.
                </p>

                {/* PROFIL 1 : Adulte */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h4 className="text-lg font-semibold text-primary">
                    Profil 1 : Adulte en bonne sant\u00e9
                  </h4>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    L&apos;adulte peut utiliser l&apos;ensemble des rem\u00e8des pr\u00e9sent\u00e9s :
                    miel dans l&apos;eau ti\u00e8de le matin, huile d&apos;olive \u00e0 jeun, dattes au
                    petit-d\u00e9jeuner, talbina r\u00e9guli\u00e8re. Le s\u00e9n\u00e9 peut \u00eatre utilis\u00e9
                    ponctuellement en cas de constipation s\u00e9v\u00e8re. La marche apr\u00e8s le
                    repas et une hydratation de 1,5 \u00e0 2 litres par jour compl\u00e8tent cette
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
                      la constipation fr\u00e9quente durant la grossesse
                    </Link>
                    , il faut savoir que la grossesse favorise ce trouble en raison des changements
                    hormonaux et de la pression de l&apos;ut\u00e9rus sur le c\u00f4lon.
                    Privil\u00e9giez les rem\u00e8des doux : figues cuites, pruneaux, dattes,
                    miel et hydratation renforc\u00e9e. Les massages circulaires du ventre
                    (dans le sens des aiguilles d&apos;une montre) apportent un soulagement
                    suppl\u00e9mentaire. Le s\u00e9n\u00e9 est formellement interdit pendant la
                    grossesse.
                  </p>
                </div>

                {/* PROFIL 3 : Enfant */}
                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <h4 className="text-lg font-semibold text-primary">
                    Profil 3 : Enfant (plus de 3 ans)
                  </h4>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Chez l&apos;enfant, seuls les rem\u00e8des les plus doux sont
                    recommand\u00e9s : compotes de dattes et de pruneaux, eau en
                    quantit\u00e9 suffisante, jeux actifs et gymnastique ludique. La talbina
                    au miel peut \u00eatre propos\u00e9e comme petit-d\u00e9jeuner. Ne donnez jamais
                    de s\u00e9n\u00e9 \u00e0 un enfant de moins de 12 ans sans avis m\u00e9dical.
                    Instaurez une routine r\u00e9guli\u00e8re pour les horaires de repas et le
                    passage aux toilettes.
                  </p>
                </div>

                {/* PROFIL 4 : Senior */}
                <div className="mt-4 rounded-xl border border-border bg-white p-6">
                  <h4 className="text-lg font-semibold text-primary">
                    Profil 4 : Senior
                  </h4>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Les personnes \u00e2g\u00e9es sont particuli\u00e8rement sujettes \u00e0 la
                    constipation en raison du ralentissement du transit et de la
                    s\u00e9dentarit\u00e9. Le psyllium blond et les graines de lin, m\u00e9lang\u00e9s \u00e0
                    de l&apos;eau ou du yaourt, apportent des fibres douces. Les
                    infusions de fenouil apr\u00e8s le repas, l&apos;huile d&apos;olive \u00e0 jeun et les
                    massages abdominaux compl\u00e8tent la prise en charge. Veillez \u00e0 une
                    hydratation r\u00e9guli\u00e8re, car la sensation de soif diminue avec
                    l&apos;\u00e2ge.
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : INVOCATIONS DE GU\u00c9RISON */}
              {/* ============================================ */}
              <section
                id="invocations-guerison"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations de gu\u00e9rison et dimension spirituelle
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  En islam, la gu\u00e9rison n&apos;est pas seulement physique. Le croyant
                  associe les rem\u00e8des mat\u00e9riels aux invocations et \u00e0 la confiance en
                  Dieu (<em>tawakkul</em>). Le Coran lui-m\u00eame est pr\u00e9sent\u00e9 comme
                  porteur de gu\u00e9rison :
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
                    gu\u00e9rison et une mis\u00e9ricorde pour les croyants.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Sourate Al-Isra, verset 82
                  </cite>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te \uFE0E a enseign\u00e9 que tout mal a son rem\u00e8de, et que se
                  soigner fait partie des moyens l\u00e9gitimes :
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
                    cr\u00e9\u00e9 de maladie sans avoir cr\u00e9\u00e9 son rem\u00e8de.&nbsp;&raquo;
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Hadith rapport\u00e9 par Abu Dawud et at-Tirmidhi
                  </cite>
                </blockquote>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Invocations \u00e0 r\u00e9citer pour le malade
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Voici les principales invocations de gu\u00e9rison enseign\u00e9es par le
                  Proph\u00e8te \uFE0E, \u00e0 r\u00e9citer avec sinc\u00e9rit\u00e9 et confiance en Dieu.
                  Elles s&apos;appliquent \u00e0 toute maladie, y compris les troubles
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
                      &laquo;&nbsp;\u00d4te le mal, Seigneur des hommes, et gu\u00e9ris. Tu es
                      Celui qui gu\u00e9rit, il n&apos;y a de gu\u00e9rison que Ta gu\u00e9rison, une
                      gu\u00e9rison qui ne laisse aucune maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapport\u00e9 par al-Bukhari et Muslim
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
                      Rapport\u00e9 par Abu Dawud et at-Tirmidhi (3 fois le matin et le
                      soir)
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La r\u00e9citation des sourates protectrices (Al-Fatiha, Al-Ikhlas,
                  Al-Falaq, An-Nas) et du verset du Tr\u00f4ne (Ayat al-Kursi) avant de
                  dormir compl\u00e8te cette routine spirituelle. L&apos;islam enseigne que les
                  moyens mat\u00e9riels (rem\u00e8des) et spirituels (invocations) se
                  compl\u00e8tent sans s&apos;opposer, car la gu\u00e9rison vient de Dieu seul.
                  Pour{" "}
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    trouver la s\u00e9r\u00e9nit\u00e9 dans la pri\u00e8re
                  </Link>
                  , le croyant associe les moyens physiques \u00e0 l&apos;adoration.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour approfondir la dimension spirituelle de la gu\u00e9rison, la{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    page d\u00e9di\u00e9e aux rem\u00e8des arabes et \u00e0 la m\u00e9decine proph\u00e9tique
                  </Link>{" "}
                  d\u00e9taille les pratiques de roqya l\u00e9gitime et les invocations
                  compl\u00e8tes enseign\u00e9es par le Proph\u00e8te \uFE0E.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : QUAND CONSULTER */}
              {/* ============================================ */}
              <section id="quand-consulter" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand consulter un gastro-ent\u00e9rologue
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les rem\u00e8des arabes et proph\u00e9tiques sont un compl\u00e9ment pr\u00e9cieux, mais
                  ils ne remplacent jamais un avis m\u00e9dical professionnel. L&apos;islam
                  encourage le recours \u00e0 la m\u00e9decine moderne, qui fait partie des
                  moyens que Dieu a mis \u00e0 la disposition de Ses serviteurs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Consultez un gastro-ent\u00e9rologue si vous pr\u00e9sentez l&apos;un des signes
                  suivants :
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Constipation persistante depuis plus de 3 semaines malgr\u00e9 les
                      mesures hygi\u00e9no-di\u00e9t\u00e9tiques
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Pr\u00e9sence de sang dans les selles ou selles noires
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Douleurs abdominales intenses ou crampes s\u00e9v\u00e8res
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
                      Alternance constipation et diarrh\u00e9e (possible syndrome de
                      l&apos;intestin irritable)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Ant\u00e9c\u00e9dents familiaux de cancer colorectal ou polypose
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    <span>
                      Modification r\u00e9cente et inexpliquée du transit, surtout apr\u00e8s
                      50 ans
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Rappel important
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Le Proph\u00e8te \uFE0E a dit : &laquo;&nbsp;Soignez-vous, serviteurs de
                    Dieu&nbsp;&raquo;. Ce hadith ne fait aucune distinction entre les
                    rem\u00e8des naturels et la m\u00e9decine moderne. L&apos;un et l&apos;autre sont des
                    moyens l\u00e9gitimes. N&apos;arr\u00eatez jamais un traitement m\u00e9dical
                    prescrit par votre m\u00e9decin au profit d&apos;un rem\u00e8de naturel.
                    Informez toujours votre praticien des compl\u00e9ments que vous
                    utilisez, car certaines interactions sont possibles (par exemple,
                    le s\u00e9n\u00e9 peut r\u00e9duire l&apos;absorption de certains m\u00e9dicaments).
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sagesse islamique enseigne de prendre les moyens tout en
                  s&apos;en remettant \u00e0 Dieu. Se soigner n&apos;est pas un manque de foi,
                  c&apos;est au contraire un acte d&apos;ob\u00e9issance et de responsabilit\u00e9
                  envers le corps que Dieu nous a confi\u00e9. Qu&apos;Allah accorde la
                  gu\u00e9rison \u00e0 tous ceux qui souffrent et leur facilite le chemin vers
                  le bien-\u00eatre.
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
                  Sur le m\u00eame sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rem\u00e8des arabes et m\u00e9decine proph\u00e9tique
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
                    Interpr\u00e9tation des r\u00eaves
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    R\u00e9citer le Coran
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
