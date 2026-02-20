import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêver de poux en islam : purification nécessaire et protection spirituelle",
  description:
    "Découvrez la signification du rêve de poux en islam : purification nécessaire, avertissement et conseils pour renforcer votre protection spirituelle.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-poux-islam-protection",
  },
};

const tocItems = [
  { id: "symbolisme", label: "Symbolisme et avertissement" },
  { id: "purification", label: "Purification et protection" },
  { id: "psychologie", label: "Significations psychologiques" },
  { id: "actions", label: "Actions concrètes" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de poux en islam ?",
    answer:
      "En islam, rêver de poux est souvent interprété comme un signal d'alerte intérieur. Ce rêve peut indiquer la présence d'énergies négatives, un besoin de purification spirituelle ou un avertissement contre des personnes nuisibles dans l'entourage. La signification précise dépend du contexte du rêve, de l'emplacement des poux et du comportement du rêveur.",
  },
  {
    question:
      "Rêver de poux dans les cheveux en islam : quelle signification ?",
    answer:
      "Les poux dans les cheveux symbolisent des remises en question intimes, un nettoyage intérieur nécessaire ou des pensées envahissantes qui perturbent l'esprit. Ce rêve invite le rêveur à intensifier son travail de prière, à pratiquer l'introspection et à se libérer des pensées parasites qui encombrent sa vie spirituelle.",
  },
  {
    question:
      "Rêver de poux sur les vêtements en islam : que faut-il comprendre ?",
    answer:
      "Les poux sur les vêtements représentent un danger extérieur, des propos négatifs tenus à votre sujet ou des influences toxiques venant de l'entourage. Ce rêve est un appel à poser des limites claires, à vous éloigner des personnes malveillantes et à renforcer votre protection spirituelle par les invocations.",
  },
  {
    question: "Rêver de tuer des poux en islam : est-ce positif ?",
    answer:
      "Oui, tuer des poux dans un rêve est généralement interprété de manière positive en islam. Cela symbolise la volonté de purification, la victoire sur les difficultés et la capacité du rêveur à surmonter les obstacles spirituels. Ce rêve encourage à poursuivre ses efforts de progression et de nettoyage intérieur.",
  },
  {
    question: "Rêver de lentes en islam : quelle interprétation ?",
    answer:
      "Voir des lentes (oeufs de poux) dans un rêve islamique indique un problème latent, des angoisses profondes qui n'ont pas encore éclaté au grand jour. Ce rêve invite à traiter les préoccupations sous-jacentes avant qu'elles ne se développent davantage, par la prière, la réflexion et la consultation d'un savant si nécessaire.",
  },
  {
    question: "Rêver de poux blancs en islam : quelle signification ?",
    answer:
      "Les poux blancs dans un rêve peuvent atténuer la connotation négative du symbole. Le blanc étant associé à la pureté en islam, ce rêve peut indiquer une difficulté passagère mais aussi un processus de purification déjà en cours. Il invite à maintenir les efforts spirituels et à garder confiance en la miséricorde divine.",
  },
  {
    question: "Que faire après avoir rêvé de poux en islam ?",
    answer:
      "Après un rêve de poux, il est recommandé de réciter les sourates protectrices (Al-Falaq, An-Nas, Ayat al-Kursi), d'effectuer les ablutions, de pratiquer le repentir sincère (tawba) et d'évaluer ses fréquentations. Le ghusl (grande ablution) est également conseillé pour renforcer la purification spirituelle.",
  },
  {
    question: "Rêver de poux à répétition en islam : faut-il s'inquiéter ?",
    answer:
      "Des rêves récurrents de poux ne doivent pas enfermer dans la peur, mais ils méritent une attention particulière. Ils peuvent signaler un besoin profond de changement, de purification ou de distance avec certaines personnes ou habitudes. Il est conseillé de consulter un imam ou un savant compétent pour une interprétation personnalisée.",
  },
];

export default function ReverPouxIslamProtection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-poux-islam-protection/#article",
        headline:
          "Rêver de poux en islam : purification nécessaire et protection spirituelle",
        description:
          "Découvrez la signification du rêve de poux en islam : purification nécessaire, avertissement et conseils pour renforcer votre protection spirituelle.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-poux-en-islam-purification-necessaire-et-protection-spirituelle.jpg",
        datePublished: "2025-09-11",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-poux-islam-protection/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-poux-islam-protection/#breadcrumb",
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
            name: "Rêves en islam",
            item: "https://www.islamreligion.fr/reves-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Rêver de poux",
            item: "https://www.islamreligion.fr/rever-poux-islam-protection",
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
          title="Rêver de poux en islam : purification nécessaire et protection spirituelle"
          subtitle="Ce que symbolisent les poux dans un rêve selon la tradition islamique, les savants et les conseils de purification."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-poux-en-islam-purification-necessaire-et-protection-spirituelle.jpg"
          imageAlt="Rêver de poux en islam, purification nécessaire et protection spirituelle"
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
                <Link href="/reves-islam" className="hover:text-primary">
                  Rêves en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Rêver de poux</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de poux en islam constitue un signal d&apos;alerte
                  intérieur. Ce rêve peut indiquer la présence d&apos;énergies
                  négatives, un besoin de purification spirituelle ou un
                  avertissement contre des personnes nuisibles dans
                  l&apos;entourage. Il appelle à la purification morale et
                  physique, à la vigilance relationnelle et à la réévaluation
                  des influences extérieures. La prière, le repentir et
                  l&apos;écoute de la conscience constituent les clés
                  essentielles.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolisme et avertissement */}
              {/* ============================================ */}
              <section id="symbolisme" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolisme du rêve de poux : purification, maladie et
                  avertissement spirituel
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition islamique de l&apos;
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    interprétation des rêves
                  </Link>
                  , le pou dépasse la simple association culturelle avec la
                  saleté ou la maladie. Il fonctionne comme une allégorie de
                  l&apos;état de l&apos;âme lorsqu&apos;elle est chargée de
                  pensées ou de comportements toxiques. C&apos;est un symbole
                  riche qui demande une lecture nuancée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad ﷺ insistait sur la distinction entre les
                  trois types de rêves : le rêve véridique (<em>ru&apos;ya</em>
                  ), venu d&apos;Allah, le rêve de l&apos;âme (
                  <em>nafsani</em>), produit par les préoccupations du rêveur,
                  et le rêve du diable (<em>shaytani</em>), destiné à troubler
                  ou effrayer. Le rêve de poux peut relever de chacune de ces
                  catégories selon le contexte.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poux sur les vêtements :</strong> danger
                      extérieur, propos négatifs tenus à votre sujet,
                      influences toxiques de l&apos;entourage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poux dans les cheveux :</strong> remises en
                      question intimes, nettoyage intérieur nécessaire,
                      pensées envahissantes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Voir des lentes :</strong> problème latent,
                      angoisses profondes qui n&apos;ont pas encore éclaté au
                      grand jour
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tuer des poux :</strong> volonté de purification,
                      victoire sur les difficultés, progression spirituelle
                    </span>
                  </li>
                </ul>

                {/* Tableau symbolisme */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification spirituelle
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Action recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poux sur les vêtements
                        </td>
                        <td className="py-3 pr-4">
                          Danger extérieur, propos négatifs
                        </td>
                        <td className="py-3">
                          Poser des limites claires
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poux dans les cheveux
                        </td>
                        <td className="py-3 pr-4">
                          Remises en question, nettoyage intérieur
                        </td>
                        <td className="py-3">
                          Intensifier le travail de prière
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir des lentes
                        </td>
                        <td className="py-3 pr-4">
                          Problème latent, angoisses persistantes
                        </td>
                        <td className="py-3">
                          Traiter les préoccupations profondes
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tuer des poux
                        </td>
                        <td className="py-3 pr-4">
                          Volonté de purification, victoire
                        </td>
                        <td className="py-3">
                          Poursuivre la progression spirituelle
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il serait réducteur de s&apos;arrêter à une lecture
                  uniformément négative du rêve de poux. Tuer des poux dans
                  un rêve, par exemple, symbolise la capacité du rêveur à
                  surmonter les obstacles et à se libérer de ce qui le
                  parasite. L&apos;analyse demande de la nuance, du
                  discernement et une prise en compte du contexte personnel
                  du rêveur.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-poux-en-islam-purification-necessaire-et-protection-spirituelle-1.jpg"
                    alt="Symbolisme du rêve de poux en islam et interprétation spirituelle"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Purification et protection */}
              {/* ============================================ */}
              <section id="purification" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Purification et protection spirituelle face au rêve de poux
                  en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La purification (<em>tahara</em>) occupe une place centrale
                  dans la foi islamique. Elle ne se limite pas à la propreté
                  physique : elle englobe la pureté de l&apos;intention, du
                  coeur et de la pensée. Un rêve de poux invite précisément à
                  cette démarche globale de nettoyage, tant extérieur
                  qu&apos;intérieur.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Amplifier la prière et les invocations
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Multiplier les invocations protectrices, réciter les
                        sourates Al-Falaq, An-Nas et le verset du Trône (Ayat
                        al-Kursi). Demander à Allah la protection contre le
                        mal visible et invisible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Pratiquer le repentir sincère (tawba)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Reconnaître ses manquements et demander le pardon
                        divin. Le repentir allège le coeur et dissipe les
                        énergies négatives qui peuvent se manifester dans les
                        rêves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Effectuer le ghusl et les ablutions
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La grande ablution (<em>ghusl</em>) et les ablutions
                        rituelles (<em>wudu</em>) sensibilisent à la pureté
                        et réactivent la bonne intention. Cette purification
                        physique accompagne la purification de l&apos;âme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Éviter les fréquentations toxiques
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        S&apos;éloigner des personnes ou des contextes qui
                        provoquent du malaise. Le rêve de poux peut être un
                        appel à réévaluer ses relations et à poser des
                        limites saines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau purification */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action de purification
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Effet spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Prière sincère et invocations
                        </td>
                        <td className="py-3">
                          Apaise l&apos;angoisse, renforce la protection
                          spirituelle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Repentir régulier (tawba)
                        </td>
                        <td className="py-3">
                          Allège le coeur, dissipe les énergies négatives
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Ablution méthodique (ghusl/wudu)
                        </td>
                        <td className="py-3">
                          Sensibilise à la pureté, réactive la bonne
                          intention
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Distance avec les influences négatives
                        </td>
                        <td className="py-3">
                          Protège l&apos;environnement spirituel, favorise
                          la sérénité
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-poux-en-islam-purification-necessaire-et-protection-spirituelle-2.jpg"
                    alt="Purification spirituelle après un rêve de poux en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Significations psychologiques */}
              {/* ============================================ */}
              <section id="psychologie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Significations psychologiques et témoignages
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de la dimension spirituelle, le rêve de poux porte
                  aussi une charge psychologique importante. Les poux dans un
                  rêve symbolisent souvent des pensées obsédantes, un
                  sentiment d&apos;impuissance ou une honte non exprimée. Ils
                  traduisent ce qui parasite l&apos;esprit et empêche la
                  sérénité.
                </p>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    Témoignage : le parcours de Sami
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Sami, un jeune croyant, a rêvé d&apos;une infestation de
                    poux à plusieurs reprises. Ce rêve récurrent l&apos;a
                    reconnecté avec une honte liée à des difficultés scolaires
                    et un rejet social vécu durant l&apos;enfance. En prenant
                    conscience de cette blessure, Sami a entamé un travail
                    d&apos;acceptation de soi, accompagné de la prière et du
                    soutien de son imam. Les rêves de poux ont cessé
                    progressivement.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce témoignage illustre un point essentiel : le rêve de poux
                  n&apos;est pas une punition divine, mais une opportunité de
                  prise de conscience et d&apos;avancement spirituel. Les
                  savants encouragent à considérer ces rêves comme des
                  invitations à la réflexion plutôt que comme des motifs de
                  peur.
                </p>

                {/* Tableau psychologique */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Élément du rêve
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Symbole psychologique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Cheveux infestés de poux
                        </td>
                        <td className="py-3">
                          Surcharge mentale, difficulté à lâcher prise
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nombreux poux immobiles
                        </td>
                        <td className="py-3">
                          Anxiété diffuse, énergie vitale bloquée
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Impossibilité de retirer les poux
                        </td>
                        <td className="py-3">
                          Sentiment d&apos;impuissance face aux obstacles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réévaluation des fréquentations :</strong> fuir
                      les amitiés sources de rumeurs ou de disputes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ordre intérieur :</strong> un esprit en paix
                      attire la bénédiction et dissuade les influences
                      négatives
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dialogue communautaire :</strong> solliciter un
                      imam ou un aîné en cas de rêves récurrents
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Remise en question personnelle :</strong> lutter
                      contre l&apos;envie et renforcer la prière
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de souris en islam : signification et interprétation"
                  description="Découvrez ce que symbolise la souris dans un rêve selon Ibn Sirin et la tradition islamique."
                  href="/rever-souris-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Actions concrètes */}
              {/* ============================================ */}
              <section id="actions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Perspectives et actions concrètes après un rêve de poux
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les rêves récurrents de poux peuvent être perçus comme une
                  opportunité de fermer des cycles, de libérer des schémas de
                  pensée obsolètes et d&apos;ouvrir les portes du
                  renouvellement intérieur. Voici les démarches concrètes
                  recommandées par les savants et la tradition.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Tirer les leçons du passé
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dresser la liste des relations parasites ou des
                        situations à abandonner. Le rêve de poux peut signaler
                        des habitudes ou des liens qui consomment votre énergie
                        sans rien apporter de positif.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Établir un plan d&apos;action spirituel
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Planifier des consultations avec un imam, s&apos;engager
                        dans des oeuvres de charité, apprendre à gérer ses
                        émotions par la méditation et la lecture du Coran. Pour
                        approfondir votre récitation,{" "}
                        <Link
                          href="/apprendre-le-coran"
                          className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                        >
                          apprendre le Coran
                        </Link>{" "}
                        est un pas bénéfique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Instaurer des routines de purification
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Maintenir l&apos;hygiène physique et spirituelle au
                        quotidien. S&apos;assurer que les intentions de prière
                        restent pures et que l&apos;environnement est nettoyé
                        régulièrement en récitant les versets protecteurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas tirer de conclusions hâtives
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un rêve de poux n&apos;est jamais un présage définitif.
                        Les savants insistent : aucune décision importante ne
                        devrait reposer uniquement sur un rêve. La réflexion,
                        la patience et la confiance en la miséricorde de Dieu
                        sont les meilleures réponses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau actions concrètes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action concrète
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bénéfice spirituel
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Fréquence recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nettoyage du foyer avec récitation
                        </td>
                        <td className="py-3 pr-4">
                          Soulagement, paix durable
                        </td>
                        <td className="py-3">Hebdomadaire</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Étude de la vie du Prophète ﷺ
                        </td>
                        <td className="py-3 pr-4">
                          Sagesse accrue, résistance aux tentations
                        </td>
                        <td className="py-3">Quotidienne</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Échanges avec des pairs bienveillants
                        </td>
                        <td className="py-3 pr-4">
                          Combat la honte, éveil spirituel collectif
                        </td>
                        <td className="py-3">Selon le besoin</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Aumône discrète et constante
                        </td>
                        <td className="py-3 pr-4">
                          Apaise le coeur, attire la bénédiction
                        </td>
                        <td className="py-3">Régulière</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-poux-en-islam-purification-necessaire-et-protection-spirituelle-3.jpg"
                    alt="Actions concrètes et protection spirituelle après un rêve de poux en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Selon le profil du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de poux ne porte pas la même signification
                  selon la personne qui le fait. Les grands interprètes
                  tiennent compte de la situation personnelle du rêveur pour
                  affiner leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les poux peuvent symboliser des fréquentations
                      nuisibles ou des personnes de l&apos;entourage qui
                      propagent des rumeurs. Ce rêve invite à la vigilance
                      dans les relations et à s&apos;entourer de personnes
                      de confiance avant de s&apos;engager dans une nouvelle
                      relation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve de poux peut refléter des tensions au sein du
                      foyer, des interférences de la belle-famille ou des
                      propos malveillants dans l&apos;entourage conjugal. Il
                      encourage le dialogue ouvert avec son époux et la
                      purification de l&apos;environnement familial par les
                      invocations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut traduire les angoisses naturelles de la
                      grossesse, la peur pour la santé du bébé ou un besoin
                      de protection renforcée. Il invite à multiplier les
                      invocations de protection et à s&apos;entourer de
                      personnes bienveillantes. Tuer des poux dans le rêve
                      est un signe positif de force et de résilience.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les poux peuvent évoquer un concurrent déloyal au
                      travail, un faux ami dans l&apos;entourage ou des
                      soucis financiers liés à des personnes profiteuses. Ce
                      rêve invite à revoir ses alliances professionnelles, à
                      garder pour soi ses projets et à renforcer sa
                      protection spirituelle.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Interprétations de rêves similaires
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les rêves en islam
                  </Link>
                  <Link
                    href="/rever-souris-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de souris en islam
                  </Link>
                  <Link
                    href="/rever-rat-islam-purification"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de rat en islam
                  </Link>
                  <Link
                    href="/reve-arachnide-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;araignée en islam
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
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
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
