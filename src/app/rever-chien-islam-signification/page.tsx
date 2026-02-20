import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêver de chien islam : signification spirituelle selon l'interprétation islamique",
  description:
    "Découvrez la signification spirituelle des rêves de chien en islam et leur interprétation selon la tradition islamique.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-chien-islam-signification",
  },
};

const tocItems = [
  { id: "ibn-sirin", label: "Selon Ibn Sirin" },
  { id: "coran-sunna", label: "Le chien dans le Coran et la Sunna" },
  { id: "soufisme", label: "Approche soufie et nafs" },
  { id: "couleurs", label: "Couleur et comportement du chien" },
  { id: "scenarios", label: "Scénarios fréquents" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de chien en islam ?",
    answer:
      "En islam, rêver de chien peut avoir plusieurs significations selon le contexte. Un chien protecteur symbolise la protection divine et la loyauté. Un chien agressif représente un obstacle spirituel ou un conflit intérieur. Un chien blanc évoque la pureté et la guidance, tandis qu'un chien noir peut annoncer des épreuves à surmonter. Le comportement du chien et les émotions ressenties dans le rêve sont déterminants pour l'interprétation.",
  },
  {
    question: "Rêver d'un chien qui mord en islam : quelle signification ?",
    answer:
      "Selon Ibn Sirin, un chien qui mord en rêve indique une hostilité réelle ou figurée autour du rêveur. Cela peut signaler un conflit latent, une blessure morale ou une agression subie dans la vie réelle. Les savants recommandent de prendre du recul, de prier pour la paix et de se rapprocher d'Allah pour identifier les failles dans son entourage.",
  },
  {
    question: "Que dit Ibn Sirin sur le rêve de chien en islam ?",
    answer:
      "Ibn Sirin, grand exégète onirique du VIIIe siècle, enseigne que la nature de l'interaction entre le rêveur et le chien est la clé de l'interprétation. Un chien protecteur évoque une protection divine, un chien agressif un obstacle spirituel, et un chien compagnon fidèle reflète la loyauté dans une relation. Il insiste sur l'importance du vécu personnel du rêveur dans l'analyse.",
  },
  {
    question: "Rêver d'un chien noir en islam est-il un mauvais signe ?",
    answer:
      "Un chien noir en rêve est souvent porteur d'épreuves à venir, d'ennemis cachés ou de défis spirituels. Cependant, ce n'est pas une condamnation. Les savants invitent à la vigilance et au repentir, rappelant que chaque épreuve est une opportunité de croissance spirituelle. La miséricorde d'Allah peut transformer toute difficulté en bénédiction.",
  },
  {
    question: "Rêver d'un chien blanc en islam : quelle interprétation ?",
    answer:
      "Le chien blanc en rêve est un signe de pureté spirituelle, d'innocence et de paix. Il peut annoncer l'arrivée d'un ami sincère ou une période apaisée. Les savants considèrent ce rêve comme un encouragement à poursuivre la droiture et à valoriser l'honnêteté dans ses relations.",
  },
  {
    question: "Que signifie rêver d'un chien qui aboie en islam ?",
    answer:
      "Les aboiements d'un chien en rêve sont un signe d'avertissement ou d'urgence. Ils peuvent indiquer un besoin d'être entendu, un danger imminent ou une alerte sur une situation dans la vie éveillée. Les savants recommandent de prêter attention aux signes et de renforcer ses invocations de protection.",
  },
  {
    question: "Le chien est-il toujours négatif dans les rêves en islam ?",
    answer:
      "Non. Le Coran mentionne le chien des Compagnons de la Caverne (Ahl Al-Kahf) comme un animal fidèle et protecteur. Les hadiths valorisent aussi le chien de garde et de chasse. Un chien amical ou protecteur en rêve peut symboliser la protection divine, la loyauté ou la bénédiction. L'interprétation dépend du contexte, pas d'un jugement uniforme.",
  },
  {
    question: "Comment réagir après un rêve de chien en islam ?",
    answer:
      "Après un rêve de chien, les savants recommandent de noter chaque détail au réveil (couleur, émotions, actions), de demander conseil à un aîné de confiance, de remercier Allah même pour un rêve perturbant et d'éviter les jugements hâtifs. Si le rêve est troublant, réciter les sourates protectrices et chercher refuge auprès d'Allah.",
  },
];

export default function ReverChien() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-chien-islam-signification/#article",
        headline:
          "Rêver de chien islam : signification spirituelle selon l'interprétation islamique",
        description:
          "Découvrez la signification spirituelle des rêves de chien en islam et leur interprétation selon la tradition islamique.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-chien-islam-signification-spirituelle-selon-linterpretation-islamique.jpg",
        datePublished: "2025-08-25",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-chien-islam-signification/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-chien-islam-signification/#breadcrumb",
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
            name: "Rêver de chien",
            item: "https://www.islamreligion.fr/rever-chien-islam-signification",
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
          title="Rêver de chien islam : signification spirituelle selon l'interprétation islamique"
          subtitle="Interprétation du rêve de chien selon Ibn Sirin, le Coran et la tradition soufie."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-chien-islam-signification-spirituelle-selon-linterpretation-islamique.jpg"
          imageAlt="Rêver de chien en islam, signification spirituelle et interprétation islamique"
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
                <span className="text-foreground">Rêver de chien</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Dans la tradition islamique, rêver de chien intrigue et
                  fascine, révélant souvent des messages subtils sur la
                  spiritualité, la protection ou les défis intérieurs du
                  rêveur. Le contexte du rêve est primordial : émotions
                  ressenties, couleur et comportement du chien influencent
                  profondément l&apos;interprétation.
                </p>
              </div>

              {/* Tableau synthese */}
              <div className="mb-10 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-primary/10">
                      <th className="py-3 pr-4 font-semibold text-primary">
                        Grande thématique
                      </th>
                      <th className="py-3 pr-4 font-semibold text-primary">
                        Signification spirituelle
                      </th>
                      <th className="py-3 font-semibold text-primary">
                        Conseil islamique
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground-secondary">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">
                        Chien protecteur
                      </td>
                      <td className="py-3 pr-4">
                        Protection divine, loyauté, allié sincère
                      </td>
                      <td className="py-3">
                        Renforcer la gratitude
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">
                        Chien agressif
                      </td>
                      <td className="py-3 pr-4">
                        Obstacle spirituel, conflit interne
                      </td>
                      <td className="py-3">
                        Rechercher le repentir
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">
                        Chien blanc
                      </td>
                      <td className="py-3 pr-4">
                        Pureté, guidance, bénédiction
                      </td>
                      <td className="py-3">
                        Poursuivre la droiture
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">
                        Chien noir
                      </td>
                      <td className="py-3 pr-4">
                        Difficulté, force obscure, épreuve
                      </td>
                      <td className="py-3">
                        Redoubler de vigilance
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-foreground">
                        Chien qui mord
                      </td>
                      <td className="py-3 pr-4">
                        Hostilité, agression, blessures morales
                      </td>
                      <td className="py-3">
                        Rechercher la paix intérieure
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Ibn Sirin */}
              {/* ============================================ */}
              <section id="ibn-sirin" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ibn Sirin et les fondements de l&apos;interprétation des rêves
                  de chien en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au sein de la tradition du rêve en islam, l&apos;approche
                  d&apos;Ibn Sirin reste centrale pour l&apos;explication des
                  messages oniriques intégrant le symbolisme du chien. Ibn
                  Sirin, grand exégète onirique du VIIIe siècle, a posé des
                  bases durables sur la signification spirituelle des chiens
                  perçus lors du sommeil.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Si le chien <strong>protège le rêveur</strong>, cela
                      évoque la présence d&apos;une protection divine contre
                      des malveillances apparentes ou invisibles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un chien <strong>agressif ou hostile</strong> peut
                      représenter un obstacle spirituel ou une épreuve
                      intérieure, suggérant au rêveur de renforcer sa foi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un chien <strong>paisible, compagnon fidèle</strong>,
                      reflète souvent la fidélité d&apos;un ami ou la stabilité
                      d&apos;une relation sincère.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ibn Sirin enseignait qu&apos;il ne fallait jamais détacher
                  ces images du vécu individuel du rêveur. L&apos;explication
                  d&apos;un rêve de chien, selon les règles transmises par les
                  savants classiques, met l&apos;accent sur les émotions
                  ressenties dans le rêve. Une peur profonde, un sentiment de
                  sécurité ou encore la joie éprouvée en présence du chien
                  affinent l&apos;interprétation.
                </p>

                {/* Tableau Ibn Sirin */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de chien dans le rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Interprétation selon Ibn Sirin
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien protecteur
                        </td>
                        <td className="py-3 pr-4">
                          Allié, soutien contre un mal, stabilité
                        </td>
                        <td className="py-3">
                          Renforcer les du&apos;as pour la protection
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien qui mord
                        </td>
                        <td className="py-3 pr-4">
                          Hostilité réelle ou figurée autour du rêveur
                        </td>
                        <td className="py-3">
                          Identifier les failles, se rapprocher d&apos;Allah
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien compagnon
                        </td>
                        <td className="py-3 pr-4">
                          Loyauté, fidélité dans une relation
                        </td>
                        <td className="py-3">
                          Exprimer sa reconnaissance, renforcer les liens
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-chien-islam-signification-spirituelle-selon-linterpretation-islamique-1.jpg"
                    alt="Interprétation du rêve de chien en islam selon Ibn Sirin"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Coran et Sunna */}
              {/* ============================================ */}
              <section id="coran-sunna" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le chien dans le Coran, la Sunna et l&apos;interprétation des
                  rêves
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La signification spirituelle du chien en rêve prend sa source
                  dans le Coran et la Sunna. L&apos;histoire des Compagnons de
                  la Caverne (Ahl Al-Kahf), relatée dans le Coran, présente un
                  chien fidèle veillant sur les jeunes croyants alors
                  qu&apos;ils recherchent la protection d&apos;Allah. Ce récit
                  instille la vision d&apos;un animal loyal et protecteur, loin
                  de la simple image négative trop souvent véhiculée.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un chien <strong>amical ou protecteur</strong> en rêve
                      peut se référer à cette bénédiction de protection divine,
                      une présence réconfortante dans la tempête.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le chien <strong>errant, souffrant ou malade</strong> peut
                      rappeler une nécessité de purification spirituelle ou
                      d&apos;acte de miséricorde envers ses semblables.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le chien <strong>gardien ou de chasse</strong> constitue
                      une exception positive, mentionnée dans des hadiths,
                      valorisant leur utilité dans la vie du croyant.
                    </span>
                  </li>
                </ul>

                {/* Tableau references */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Référence coranique ou hadith
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Élément onirique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Signification potentielle
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Coran (Ahl Al-Kahf)
                        </td>
                        <td className="py-3 pr-4">
                          Chien fidèle / protecteur
                        </td>
                        <td className="py-3">
                          Protection divine, foi renforcée
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hadiths sur la miséricorde animale
                        </td>
                        <td className="py-3 pr-4">
                          Nourrir ou abreuver un chien
                        </td>
                        <td className="py-3">
                          Miséricorde, charité, purification
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hadiths de mise en garde
                        </td>
                        <td className="py-3 pr-4">
                          Chien errant ou agressif
                        </td>
                        <td className="py-3">
                          Avertissement d&apos;un danger ou péché latent
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interprétation du rêve de chien en islam se veut donc
                  un terrain d&apos;équilibre entre espoir et vigilance, chaque
                  détail devenant une source de réflexion sérieuse mais jamais
                  une condamnation.
                </p>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Approche soufie */}
              {/* ============================================ */}
              <section id="soufisme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Approche soufie : chien, nafs et transformation intérieure
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Dans l&apos;islam, le soufisme invite à une expérience
                  intérieure profonde du rêve, où le chien devient le miroir de
                  l&apos;âme : le nafs, cette partie charnelle et impulsive de
                  l&apos;être humain. Le chien indiscipliné rêvé incarne alors
                  un nafs en quête d&apos;assagissement, nécessitant
                  purification et maîtrise personnelle.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un chien <strong>lumineux ou guide</strong> peut être vu
                      comme un ange protecteur ou une intuition éclairée venue
                      d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un chien <strong>docile et paisible</strong> traduit
                      souvent l&apos;apaisement du nafs, atteint après des
                      efforts sincères sur le chemin spirituel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un chien qui <strong>attaque ou poursuit</strong> signale
                      une lutte interne contre ses défauts ou passions.
                    </span>
                  </li>
                </ul>

                {/* Tableau nafs */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Niveau du nafs (métaphore canine)
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Traduction spirituelle soufie
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseils de progression
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien sauvage ou enragé
                        </td>
                        <td className="py-3 pr-4">
                          Nafs indompté, passions fortes
                        </td>
                        <td className="py-3">
                          Redoubler d&apos;efforts de maîtrise (prière, jeûne)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien apaisé
                        </td>
                        <td className="py-3 pr-4">
                          Harmonie du nafs avec l&apos;âme spirituelle
                        </td>
                        <td className="py-3">
                          Consolider la paix intérieure par des actes de bien
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien de lumière
                        </td>
                        <td className="py-3 pr-4">
                          Présence d&apos;une guidance ou inspiration divine
                        </td>
                        <td className="py-3">
                          Écouter son intuition, renforcer la gratitude
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-chien-islam-signification-spirituelle-selon-linterpretation-islamique-2.jpg"
                    alt="Approche soufie du rêve de chien en islam, nafs et transformation intérieure"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Couleur et comportement */}
              {/* ============================================ */}
              <section id="couleurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La couleur, le comportement et l&apos;explication détaillée
                  des rêves de chien
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants et maîtres spirituels soulignent que chaque
                  apparence particulière du chien (couleur, attitude, action)
                  modifie profondément le sens à donner au rêve.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rêver d&apos;un chien blanc</strong> : signe de
                      pureté spirituelle, d&apos;innocence, de paix. Annonce
                      parfois l&apos;arrivée d&apos;un ami sincère ou une
                      période apaisée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chien noir</strong> : porteur d&apos;épreuves à
                      venir, d&apos;ennemis cachés ou de défis spirituels.
                      Invite à la vigilance et au repentir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chien brun ou multicolore</strong> : complexité
                      de la situation du rêveur, nécessité de discernement.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le comportement du chien a aussi son importance :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Aboiements</strong> : signe d&apos;avertissement,
                      urgence ou besoin d&apos;être entendu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chien qui joue</strong> : joyeux présage, période
                      heureuse possible.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Morsures</strong> : indiquent des conflits
                      intérieurs ou des agressions subies dans la vie réelle.
                    </span>
                  </li>
                </ul>

                {/* Tableau aspects */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aspect du rêve de chien
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Message onirique possible
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Aptitude à développer
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien qui vous suit
                        </td>
                        <td className="py-3 pr-4">
                          Soutien moral, fidélité, accompagnement
                        </td>
                        <td className="py-3">
                          Reconnaître la valeur du soutien
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien qui pleure
                        </td>
                        <td className="py-3 pr-4">
                          Détresse émotionnelle, tristesse à adresser
                        </td>
                        <td className="py-3">
                          Prendre soin de son bien-être
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien enragé
                        </td>
                        <td className="py-3 pr-4">
                          Colère ou passion nuisible
                        </td>
                        <td className="py-3">
                          Maîtriser ses émotions, pratiquer la patience
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-chien-islam-signification-spirituelle-selon-linterpretation-islamique-3.jpg"
                    alt="Couleur et comportement du chien dans les rêves en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de souris en islam : signification et interprétation"
                  description="Découvrez ce que symbolise la souris dans un rêve selon Ibn Sirin et la tradition islamique."
                  href="/rever-souris-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Scenarios frequents */}
              {/* ============================================ */}
              <section id="scenarios" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Divers cas de rêve de chien en islam : anecdotes, symbolisme
                  et conseils
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au fil des récits et consultations, plusieurs cas typiques se
                  détachent dans l&apos;interprétation coranique et spirituelle
                  des chiens en rêve. Chaque situation ouvre sur un horizon de
                  réflexion pouvant transformer concrètement la vie du croyant.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rêver de chien mort
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Parfois la fin d&apos;une amitié, parfois la clôture
                        d&apos;une période difficile. Peut aussi marquer un
                        soulagement après une longue épreuve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chien qui parle
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Symbole d&apos;un message divin, incite à prêter
                        attention aux signes subtils qu&apos;Allah place sur le
                        chemin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chien qui protège
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Rassure le rêveur sur la présence d&apos;une force
                        bienveillante, ou lui rappelle l&apos;importance de la
                        confiance en la miséricorde divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chien perdu
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Évoque la possible perte de repères, appel à retrouver
                        ses bases religieuses et émotionnelles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau scenarios */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario de rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Interprétation dominante
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Action recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien qui mord
                        </td>
                        <td className="py-3 pr-4">
                          Conflit latent, inimitié, blessure morale
                        </td>
                        <td className="py-3">
                          Prendre du recul, prier pour la paix
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien joueur
                        </td>
                        <td className="py-3 pr-4">
                          Joie retrouvée, détente
                        </td>
                        <td className="py-3">
                          Apprécier l&apos;instant présent
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chien errant
                        </td>
                        <td className="py-3 pr-4">
                          Besoin d&apos;ancrage et de guidance
                        </td>
                        <td className="py-3">
                          Renouveler son intention, revenir à ses fondamentaux
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Selon le profil du reveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de chien ne porte pas la même signification
                  selon la personne qui le fait. Les interprètes musulmans
                  tiennent compte de la situation personnelle du rêveur.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un chien protecteur peut annoncer un prétendant loyal ou
                      un soutien inattendu. Un chien agressif invite à la
                      prudence dans ses relations et à renforcer sa confiance en
                      Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le chien fidèle symbolise la loyauté et la stabilité du
                      foyer. Un chien qui aboie peut signaler des tensions
                      conjugales à désamorcer par le dialogue et la prière
                      commune.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un chien protecteur rassure sur la protection du bébé. Un
                      chien agressif reflète souvent les inquiétudes naturelles
                      de la grossesse. Les savants recommandent les invocations
                      de protection.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le chien compagnon reflète la fidélité dans les amitiés ou
                      les affaires. Un chien qui mord alerte sur des rivalités
                      professionnelles ou des trahisons possibles dans
                      l&apos;entourage.
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
                    href="/reve-arachnide-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;araignée en islam
                  </Link>
                  <Link
                    href="/reve-poisson-islam-richesse"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de poisson en islam
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
