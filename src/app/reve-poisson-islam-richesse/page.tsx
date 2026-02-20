import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêve de poisson en islam : richesse spirituelle et bénédictions à venir",
  description:
    "Que signifie rêver de poisson en islam ? Interprétation selon Ibn Sirin et Al-Nabulsi, signification par type, couleur, état et action du poisson dans le rêve.",
  alternates: {
    canonical: "https://www.islamreligion.fr/reve-poisson-islam-richesse",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique du poisson en islam" },
  { id: "ibn-sirin", label: "Selon Ibn Sirin et Al-Nabulsi" },
  { id: "etats", label: "États et contextes du poisson" },
  { id: "actions", label: "Actions et scénarios oniriques" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "conseils", label: "Conseils pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Rêver de poisson en islam est-il un bon signe ?",
    answer:
      "Dans la plupart des cas, oui. Le poisson vivant dans une eau claire est un signe de rizq (subsistance licite), de bénédiction et de prospérité selon Ibn Sirin. Cependant, un poisson mort, pourri ou dans une eau trouble peut indiquer une perte, un projet avorté ou un gain douteux. Le contexte du rêve est déterminant.",
  },
  {
    question: "Que signifie rêver de gros poisson en islam ?",
    answer:
      "Un gros poisson dans un rêve symbolise une fortune inattendue, une grande opportunité ou des responsabilités accrues. Selon la tradition, plus le poisson est grand, plus le gain ou l'événement annoncé est important. Si le rêveur parvient à l'attraper, c'est un signe très favorable.",
  },
  {
    question: "Que dit Ibn Sirin sur le rêve de poisson ?",
    answer:
      "Ibn Sirin considère le poisson vivant dans une eau claire comme un signe de subsistance licite (rizq halal). Le poisson mort représente des espoirs déçus. Pêcher un poisson symbolise un gain après l'effort. Manger du poisson frais annonce la prospérité, tandis que le poisson avarié met en garde contre des gains douteux.",
  },
  {
    question: "Rêver de poisson mort en islam : quelle signification ?",
    answer:
      "Le poisson mort dans un rêve est généralement un signe d'avertissement. Il peut annoncer la perte d'une opportunité, un projet qui échoue ou une phase de repli. Les savants recommandent de prendre ce rêve comme une invitation à revoir ses projets et à demander pardon à Allah.",
  },
  {
    question: "Rêver de manger du poisson en islam : est-ce positif ?",
    answer:
      "Manger du poisson frais ou grillé en rêve est un signe de réjouissance, de stabilité et de bonheur. Selon Ibn Sirin, manger du poisson grillé peut indiquer une invocation exaucée. En revanche, manger du poisson avarié ou qui dégage une mauvaise odeur alerte sur la sincérité de certaines relations ou la pureté des profits.",
  },
  {
    question: "Rêver de pêcher du poisson en islam : que signifie-t-il ?",
    answer:
      "Pêcher un poisson dans un rêve symbolise le gain après l'effort et la réussite professionnelle ou personnelle. Si la pêche se fait dans une eau claire, c'est un signe de subsistance licite. Dans une eau trouble, cela peut indiquer une source de revenus douteuse. Si le poisson s'échappe, c'est une opportunité manquée.",
  },
  {
    question:
      "Rêver de poisson pour une femme enceinte en islam : que signifie-t-il ?",
    answer:
      "Pour une femme enceinte, rêver de poisson est souvent interprété positivement. Un poisson frais et vivant peut annoncer une grossesse qui se déroule bien et un enfant en bonne santé. Un gros poisson peut indiquer un accouchement facile. Les savants recommandent de multiplier les invocations de protection.",
  },
  {
    question: "Quelle est la signification du poisson dans le Coran ?",
    answer:
      "Le poisson apparaît dans plusieurs passages du Coran. Dans la sourate Al-Kahf (18:61-63), le poisson de Moussa et Al-Khidr reprend vie comme signe divin. Dans la sourate As-Saffat (37:142), le prophète Younous est avalé par un grand poisson. La sourate Al-Ma'ida (5:96) déclare licite la nourriture de la mer. Ces récits renforcent la dimension spirituelle du poisson dans les rêves.",
  },
];

export default function RevePoisson() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/reve-poisson-islam-richesse/#article",
        headline:
          "Rêve de poisson en islam : richesse spirituelle et bénédictions à venir",
        description:
          "Que signifie rêver de poisson en islam ? Interprétation selon Ibn Sirin et Al-Nabulsi, signification par type, couleur et action du poisson.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Reve-de-poisson-en-islam-richesse-spirituelle-et-benedictions-a-venir.jpg",
        datePublished: "2025-09-17",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/reve-poisson-islam-richesse/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/reve-poisson-islam-richesse/#breadcrumb",
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
            name: "Rêve de poisson",
            item: "https://www.islamreligion.fr/reve-poisson-islam-richesse",
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
          title="Rêve de poisson en islam : richesse spirituelle et bénédictions à venir"
          subtitle="Signification du rêve de poisson selon la tradition islamique, Ibn Sirin et les textes sacrés."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Reve-de-poisson-en-islam-richesse-spirituelle-et-benedictions-a-venir.jpg"
          imageAlt="Rêve de poisson en islam, signification spirituelle de richesse et bénédictions"
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
                <span className="text-foreground">Rêve de poisson</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de poisson en islam est généralement un signe positif,
                  associé à la prospérité, à la subsistance licite et aux
                  bénédictions à venir. Selon Ibn Sirin, le poisson vivant dans
                  une eau claire symbolise le <em>rizq halal</em>. La
                  signification varie selon le type de poisson, son état (vivant,
                  mort, grillé), l&apos;action du rêveur (pêcher, manger,
                  attraper) et sa situation personnelle.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique du poisson */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique du rêve de poisson en islam : entre bénédictions et
                  épreuves
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition musulmane, le rêve de poisson n&apos;est
                  jamais anodin. Il traduit la relation intime entre le croyant
                  et son Créateur, tout en reflétant son cheminement personnel à
                  travers la vie. Chaque variété de poisson, chaque contexte de
                  rêve détient une signification particulière qu&apos;il convient
                  d&apos;interroger avec douceur et discernement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon les anciens récits, croiser un poisson doré en rêve
                  évoque la perspective d&apos;une richesse non seulement
                  matérielle mais aussi spirituelle, une bénédiction qui éclaire
                  l&apos;existence du croyant. L&apos;apparition d&apos;un
                  poisson vivant symbolise une croissance personnelle, alors
                  qu&apos;un poisson mort met en garde contre des projets avortés
                  ou une phase de repli sur soi.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La diversité des poissons et la façon dont ils se présentent
                  dans votre songe apportent des nuances. Par exemple, voir un
                  poisson dans une rivière claire renvoie à des aptitudes solides
                  et fiables, une force intérieure capable d&apos;affronter les
                  obstacles. À l&apos;inverse, un poisson hors de l&apos;eau
                  traduit souvent une situation inconfortable, où le rêveur se
                  sent en décalage ou confronté à des défis exigeant une
                  adaptation.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poisson frais et brillant :</strong> promesse
                      d&apos;opportunités nouvelles, bonne santé et vitalité
                      spirituelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poisson rouge ou coloré :</strong> signe de
                      chance, de don inattendu ou de relations florissantes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poisson noir :</strong> période d&apos;épreuve et
                      invitation à persévérer avant de recueillir les fruits
                      espérés.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poisson volant :</strong> chance extraordinaire,
                      capacité à surmonter les difficultés futures.
                    </span>
                  </li>
                </ul>

                {/* Tableau types de poisson */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de poisson
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification islamique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Symbole associé
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poisson vivant
                        </td>
                        <td className="py-3 pr-4">
                          Abondance et bénédiction
                        </td>
                        <td className="py-3">Bien-être, fertilité</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poisson mort
                        </td>
                        <td className="py-3 pr-4">
                          Perte, projet avorté
                        </td>
                        <td className="py-3">Leçon de résilience</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poisson coloré
                        </td>
                        <td className="py-3 pr-4">
                          Joie, nouveautés heureuses
                        </td>
                        <td className="py-3">Ouverture aux autres</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Gros poisson
                        </td>
                        <td className="py-3 pr-4">Fortune inattendue</td>
                        <td className="py-3">Responsabilités accrues</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poisson blessé
                        </td>
                        <td className="py-3 pr-4">
                          Alerte sur des troubles
                        </td>
                        <td className="py-3">Prévention et réflexion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il importe d&apos;aborder chaque rêve avec bienveillance,
                  qu&apos;il porte un message de réussite ou
                  d&apos;introspection. Les avis des savants musulmans, tout
                  comme l&apos;héritage du grand Ibn Sirin, encouragent à voir
                  dans chaque poisson un signe de la Main divine, posée sur
                  notre destinée quotidienne et spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plus qu&apos;un simple symbole de bien matériel, le poisson
                  apparaît fréquemment comme gardien d&apos;un océan de
                  bénédictions. Les savants rappellent que rêver de poisson frais
                  ou de nager parmi les poissons renforce l&apos;idée d&apos;un
                  cœur apaisé, d&apos;une foi solide et d&apos;un avenir ouvert
                  à la prospérité.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Reve-de-poisson-en-islam-richesse-spirituelle-et-benedictions-a-venir-1.jpg"
                    alt="Interprétation spirituelle du rêve de poisson en islam, symbole de richesse et bénédictions"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin et Al-Nabulsi */}
              {/* ============================================ */}
              <section id="ibn-sirin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interprétation selon Ibn Sirin et Al-Nabulsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Muhammad ibn Sirin (653-729) et Abd al-Ghani al-Nabulsi
                  (1641-1731) sont les deux références majeures en matière
                  d&apos;interprétation des rêves dans la tradition musulmane.
                  Leurs analyses du rêve de poisson sont complémentaires et
                  permettent une lecture plus fine.
                </p>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    Ce que dit Ibn Sirin
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Pour Ibn Sirin, le poisson vivant dans une eau claire est un
                    signe de <em>rizq halal</em> (subsistance licite). Le
                    poisson mort représente des espoirs déçus ou des projets qui
                    n&apos;aboutiront pas. Un gros poisson symbolise une fortune
                    importante ou un changement majeur. Pêcher un poisson dans
                    une eau limpide, c&apos;est chercher sa subsistance par des
                    moyens licites, tandis que pêcher dans une eau trouble peut
                    indiquer une source de revenus douteuse.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-foreground-secondary">
                    <li>
                      Manger du poisson frais : chance en amour et dans les
                      relations
                    </li>
                    <li>
                      Manger du poisson grillé : invocation exaucée, prière
                      acceptée
                    </li>
                    <li>
                      Manger du poisson frit : voyage pour chercher sa
                      subsistance
                    </li>
                    <li>
                      Poisson pourri : gain illicite ou tromperie
                    </li>
                    <li>
                      Beaucoup de poissons : richesse proportionnelle au nombre
                    </li>
                  </ul>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    L&apos;avis d&apos;Al-Nabulsi
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Al-Nabulsi apporte une lecture complémentaire. Pour lui, le
                    poisson peut symboliser les soucis enfouis, les biens cachés
                    ou les paroles non dites. Plusieurs poissons en désordre
                    indiquent une accumulation sans bénédiction. Un poisson sur
                    la terre ferme peut évoquer un péché ou le fait de quitter
                    sa voie naturelle. Al-Nabulsi insiste sur l&apos;importance
                    du contexte : le lieu, l&apos;émotion ressentie et la
                    chronologie du rêve comptent autant que le symbole
                    lui-même.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux savants s&apos;accordent sur un point :
                  l&apos;interprétation ne peut jamais être mécanique. Un même
                  symbole change de sens selon l&apos;état de foi du rêveur, ses
                  préoccupations et les autres éléments du rêve. C&apos;est
                  pourquoi la{" "}
                  <Link
                    href="/reves-islam#regles"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    science de l&apos;interprétation des rêves
                  </Link>{" "}
                  demande de la prudence et de la compétence.
                </p>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Etats et contextes */}
              {/* ============================================ */}
              <section id="etats" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  États et contextes du poisson en rêve : analyse détaillée
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;état dans lequel apparaît le poisson donne de
                  précieuses indications. Un poisson frais, brillant et vivant
                  augure quasiment toujours la bénédiction sous toutes ses
                  formes : santé du corps et de l&apos;âme, stabilité familiale,
                  réussite matérielle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  À l&apos;opposé, un poisson mort, blessé ou pourri fait figure
                  d&apos;avertissement. Il peut annoncer des soucis, des retards
                  ou, dans certains cas, une invitation à la remise en question.
                  Rêver de poisson séché ou congelé met en lumière des obstacles
                  dans les affaires en cours ou révèle une stagnation, sur le
                  plan professionnel comme sur le plan intime.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poisson grillé :</strong> témoignage d&apos;un
                      besoin de plaisir ou d&apos;une aspiration à sortir de la
                      routine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poisson congelé :</strong> message sur un accès
                      retardé à ses biens ou talents, nécessité de patience.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Poisson fumé :</strong> annonce d&apos;une épreuve
                      à surmonter, mais issue favorable si détermination.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Manger du poisson :</strong> prospérité en vue,
                      satisfaction prochaine, à condition de vigilance sur les
                      relations.
                    </span>
                  </li>
                </ul>

                {/* Tableau etats du poisson */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          État du poisson
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Sens spirituel
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil associé
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Frais et vivant
                        </td>
                        <td className="py-3 pr-4">
                          Annonciateur de bénédiction, énergie renouvelée
                        </td>
                        <td className="py-3">
                          Reconnaître et remercier la grâce d&apos;Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mort ou blessé
                        </td>
                        <td className="py-3 pr-4">
                          Mise en garde contre des erreurs ou négligences
                        </td>
                        <td className="py-3">
                          Réviser ses projets, demander pardon
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Séché ou congelé
                        </td>
                        <td className="py-3 pr-4">Blocage temporaire</td>
                        <td className="py-3">
                          Faire preuve de patience, ne pas perdre espoir
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Aquarium
                        </td>
                        <td className="py-3 pr-4">
                          Stabilité émotionnelle, parfois besoin de
                          s&apos;ouvrir
                        </td>
                        <td className="py-3">
                          Oser communiquer, accepter la nouveauté
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un point précieux : la nature du poisson (blanc, rouge, noir,
                  doré) colore elle aussi l&apos;interprétation. Des poissons
                  blancs sont signe de pureté et de santé, les rouges invitent à
                  l&apos;audace dans les affaires amoureuses ou matérielles,
                  tandis qu&apos;un poisson noir accompagne souvent les périodes
                  de difficulté, en rappelant que la miséricorde d&apos;Allah
                  peut transformer une situation sombre en richesse insoupçonnée.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Reve-de-poisson-en-islam-richesse-spirituelle-et-benedictions-a-venir-2.jpg"
                    alt="Interprétation des différents états du poisson dans les rêves en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Actions et scenarios */}
              {/* ============================================ */}
              <section id="actions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Actions et scénarios oniriques : attraper, manger, voir ou
                  perdre un poisson
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Dans la littérature classique et contemporaine, les actes liés
                  au poisson dans les rêves sont parmi les aspects les plus
                  étudiés. Rêver d&apos;attraper un poisson incarne la réussite,
                  surtout lorsque cela se fait avec aisance : le rêveur
                  recueille la bénédiction promise après des efforts constants.
                  Si, au contraire, le poisson s&apos;échappe, c&apos;est une
                  invitation à redoubler de vigilance et à ne pas se satisfaire
                  d&apos;un succès trop rapide.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Manger du poisson, surtout bien frais ou grillé, est signe de
                  réjouissance, de stabilité et de bonheur en islam. Cependant,
                  si le poisson est avarié ou dégage une mauvaise odeur, ce rêve
                  sonne comme une alerte quant à la sincérité de certaines
                  relations ou la pureté des profits réalisés.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Pêcher un poisson
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Gain après l&apos;effort, réussite professionnelle ou
                        personnelle. Si le poisson meurt ou s&apos;échappe, le
                        bénéfice risque d&apos;être annulé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Manger du poisson
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Prospérité prochaine, santé. Mais méfiance si le goût
                        est désagréable : cela peut alerter sur un gain non
                        licite ou une relation malsaine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Nettoyer le poisson
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Purification de ses erreurs passées, volonté
                        d&apos;avancer sur une voie authentique. C&apos;est un
                        signe de renouveau spirituel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Être attaqué par un poisson
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Conflit interne ou menace extérieure inattendue à gérer.
                        Ce rêve invite à revoir ses fréquentations ou ses
                        alliances.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Voir un poisson s&apos;enfuir
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Opportunité manquée ou négligée. Ce rêve est une
                        invitation à être plus attentif aux signes d&apos;Allah
                        dans sa vie quotidienne.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      6
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Acheter du poisson
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Investissement dans son avenir, acte réfléchi qui portera
                        ses fruits. Si le poisson acheté est frais, c&apos;est
                        un signe très favorable pour les affaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      7
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Donner du poisson à quelqu&apos;un
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Générosité qui sera récompensée. Al-Nabulsi interprète
                        ce geste comme un acte de sadaqa dont le rêveur
                        récoltera les fruits en ce monde et dans
                        l&apos;au-delà.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      8
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Voir des poissons tomber du ciel
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Événement inattendu et favorable, signe d&apos;une
                        bénédiction soudaine. Ce type de rêve est à traiter avec
                        humilité et reconnaissance envers Allah.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau actions */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action dans le rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Conséquence spirituelle
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil pour le quotidien
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Attraper un poisson
                        </td>
                        <td className="py-3 pr-4">
                          Récolter les fruits de ses efforts
                        </td>
                        <td className="py-3">
                          Poursuivre dans la voie de la constance
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Manger du poisson
                        </td>
                        <td className="py-3 pr-4">
                          Paix intérieure, réussites à venir
                        </td>
                        <td className="py-3">
                          Partager sa réussite pour plus de baraka
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir un poisson s&apos;enfuir
                        </td>
                        <td className="py-3 pr-4">
                          Opportunité manquée ou négligée
                        </td>
                        <td className="py-3">
                          Être attentif aux signes d&apos;Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nettoyer le poisson
                        </td>
                        <td className="py-3 pr-4">
                          Pardon, mise à jour spirituelle
                        </td>
                        <td className="py-3">
                          Accepter les retours à soi et progresser
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Être attaqué
                        </td>
                        <td className="py-3 pr-4">
                          Conflit émotionnel, besoin de se protéger
                        </td>
                        <td className="py-3">
                          Revoir ses fréquentations ou ses alliances
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les scénarios plus rares, comme le fait de voir tomber des
                  poissons du ciel ou d&apos;en rêver dans des situations
                  insolites (poisson volant, poissons dans une rivière trouble),
                  peuvent annoncer des événements inattendus. Ils sont à traiter
                  avec humilité et réflexion, car les signes d&apos;Allah sont
                  multiples, dans le but de tester notre patience autant que
                  notre sincérité.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Reve-de-poisson-en-islam-richesse-spirituelle-et-benedictions-a-venir-3.jpg"
                    alt="Scénarios oniriques de poisson en islam, pêcher, manger, attraper un poisson dans un rêve"
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
              {/* SECTION 5 : Selon le profil du reveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de poisson ne porte pas la même signification
                  selon la personne qui le fait. Les grands interprètes tiennent
                  compte de la situation personnelle du rêveur pour affiner leur
                  lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver de poisson frais peut annoncer un mariage proche ou
                      une rencontre favorable. Un gros poisson symbolise un
                      prétendant de qualité. Si le poisson s&apos;échappe, cela
                      peut indiquer une hésitation face à un engagement ou une
                      opportunité ratée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le poisson vivant symbolise l&apos;harmonie au sein du
                      foyer et l&apos;abondance dans le ménage. Manger du
                      poisson avec son époux est un signe de complicité et de
                      bonheur conjugal. Un poisson mort peut alerter sur des
                      tensions ou un manque de communication.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve de poisson est souvent interprété comme un signe
                      positif pour la grossesse. Un poisson frais et vivant peut
                      annoncer un enfant en bonne santé. Un gros poisson peut
                      indiquer un accouchement facile. Les savants recommandent
                      de multiplier les invocations de protection.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le poisson représente souvent la subsistance et les
                      affaires. Un poisson vivant dans une eau claire annonce un
                      gain licite. Pêcher un gros poisson symbolise une
                      promotion, un contrat ou une réussite professionnelle.
                      Un poisson avarié met en garde contre des transactions
                      douteuses.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Des rêves de poisson à la réalité : conseils pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Intégrer la richesse des rêves de poisson dans son cheminement
                  spirituel n&apos;est pas un simple exercice de réflexion mais
                  un engagement quotidien. L&apos;interprétation n&apos;est pas
                  figée : chaque croyant trouve dans son rêve un message qui
                  s&apos;accorde à sa situation unique, que ce soit en période de
                  doute ou lors d&apos;une phase d&apos;élévation personnelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains rêves, comme recevoir du poisson, acheter un poisson
                  doré ou observer un immense banc de poissons lumineux, marquent
                  une période charnière où la bénédiction se manifeste avec
                  éclat. À l&apos;inverse, voir des poissons flotter à la
                  surface ou assister à la mort d&apos;un poisson appelle à la
                  précaution, à l&apos;autoréflexion et à l&apos;affermissement
                  du lien avec son Créateur.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Consigner régulièrement ses rêves dans un carnet aide à
                      percevoir une évolution et à capter la cohérence des
                      messages reçus.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se rappeler qu&apos;aucun rêve n&apos;est insignifiant :
                      même une vision négative peut permettre un redressement
                      sain et porteur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Accompagner sa réflexion d&apos;actes concrets de charité
                      (sadaqa), de lecture du{" "}
                      <Link
                        href="/apprendre-le-coran"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        Coran
                      </Link>{" "}
                      et d&apos;invocation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se rapprocher des connaisseurs ou imams locaux pour les
                      rêves complexes, sans jamais hésiter à demander conseil.
                    </span>
                  </li>
                </ul>

                {/* Tableau inspiration onirique */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de rêve
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Application dans la vie réelle
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poisson attrapé dans l&apos;eau limpide
                        </td>
                        <td className="py-3">
                          Saisir une opportunité professionnelle ou familiale
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poisson blessé ou malade
                        </td>
                        <td className="py-3">
                          S&apos;interroger sur un projet risqué ou une relation
                          fragile
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Gros poisson doré
                        </td>
                        <td className="py-3">
                          Lancer un nouveau projet lié à l&apos;entrepreneuriat
                          ou à la formation
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poisson dans un aquarium
                        </td>
                        <td className="py-3">
                          Prendre du recul avant une décision importante
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Manger du poisson en rêve
                        </td>
                        <td className="py-3">
                          Partager le bien autour de soi et remercier
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  À la lumière des enseignements du Coran, il est permis
                  d&apos;espérer toujours un retour positif, même lors de songes
                  difficiles. Chaque bénédiction capturée dans le rêve trouve,
                  tôt ou tard, son prolongement dans l&apos;existence réelle, à
                  condition de la vivre avec gratitude et confiance en la sagesse
                  divine.
                </p>
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
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de serpent en islam
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de chat en islam
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
