import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title:
    "Rêver d\u2019asticots ou de vers en islam : signification et interprétation complète",
  description:
    "Que signifie rêver d\u2019asticots ou de vers en islam ? Découvrez les interprétations d\u2019Ibn Sirin et An-Nabulsi, les variantes du rêve et les conseils spirituels adaptés.",
  openGraph: {
    title:
      "Rêver d\u2019asticots ou de vers en islam : signification et interprétation complète",
    description:
      "Que signifie rêver d\u2019asticots ou de vers en islam ? Découvrez les interprétations d\u2019Ibn Sirin et An-Nabulsi, les variantes du rêve et les conseils spirituels adaptés.",
    url: "https://www.islamreligion.fr/rever-asticot-ver-islam",
    images: [{ url: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-asticot-ver-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique des asticots et des vers" },
  { id: "ibn-sirin", label: "Selon Ibn Sirin et An-Nabulsi" },
  { id: "vers-corps", label: "Vers sortant du corps" },
  { id: "vers-nourriture", label: "Vers dans la nourriture" },
  { id: "types-vers", label: "Vers de terre et asticots blancs" },
  { id: "ecraser-tuer", label: "Écraser ou tuer des vers" },
  { id: "situation-reveur", label: "Selon la situation du rêveur" },
  { id: "conseils", label: "Conseils islamiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver d\u2019asticots en islam ?",
    answer:
      "En islam, rêver d\u2019asticots peut symboliser des soucis financiers, des personnes profiteuses dans l\u2019entourage ou un besoin de purification intérieure. Selon le contexte du rêve, les asticots représentent ce qui ronge le rêveur de l\u2019intérieur : remords, dettes, relations toxiques ou négligence spirituelle. L\u2019interprétation précise dépend de l\u2019emplacement des asticots, de leur couleur et de l\u2019action du rêveur.",
  },
  {
    question:
      "Rêver de vers qui sortent du corps en islam : quelle signification ?",
    answer:
      "Des vers qui sortent du corps dans un rêve islamique symbolisent une libération en cours. Le rêveur se débarrasse de ce qui le rongeait intérieurement : péchés, mauvaises habitudes ou influences nocives. Si les vers sortent de la bouche, cela peut indiquer des paroles regrettées ou une médisance dont le rêveur prend conscience. Ibn Sirin considérait ce type de rêve comme un signe de repentir sincère.",
  },
  {
    question: "Rêver de vers dans la nourriture en islam : bon ou mauvais signe ?",
    answer:
      "Rêver de vers dans la nourriture est généralement un avertissement en islam. Ce rêve peut signaler un revenu douteux (haram), une tromperie dans les affaires ou une situation apparemment saine qui cache des vices. Il invite le rêveur à vérifier la licéité de ses sources de revenus et à purifier son alimentation spirituelle par la lecture du Coran et les invocations.",
  },
  {
    question: "Rêver d\u2019asticots blancs en islam : est-ce différent ?",
    answer:
      "Les asticots blancs dans un rêve islamique peuvent atténuer la connotation négative du symbole. Le blanc étant associé à la pureté, ce rêve peut indiquer des enfants, une descendance ou des personnes dépendantes du rêveur. Selon An-Nabulsi, les vers blancs sortant du ventre peuvent symboliser les enfants ou petits-enfants du rêveur.",
  },
  {
    question: "Rêver de tuer des vers en islam : est-ce positif ?",
    answer:
      "Oui, écraser ou tuer des vers dans un rêve est généralement interprété positivement en islam. Cela symbolise la victoire sur les ennemis cachés, la résolution de problèmes persistants et la capacité du rêveur à reprendre le contrôle de sa vie. Ce rêve encourage à poursuivre les efforts de purification et à ne pas céder face aux difficultés.",
  },
  {
    question: "Rêver de vers de terre en islam : quelle interprétation ?",
    answer:
      "Les vers de terre dans un rêve islamique symbolisent souvent des personnes humbles ou des revenus modestes mais licites. Contrairement aux asticots associés à la décomposition, le ver de terre travaille la terre et la fertilise. Ce rêve peut indiquer un travail discret mais bénéfique, ou des personnes modestes qui apportent du bien dans la vie du rêveur.",
  },
  {
    question: "Que faire après avoir rêvé d\u2019asticots ou de vers en islam ?",
    answer:
      "Après un rêve de vers ou d\u2019asticots, il est recommandé de cracher trois fois à gauche sans émettre de salive, de chercher refuge auprès d\u2019Allah contre le mal de ce rêve, de réciter les sourates protectrices (Al-Falaq, An-Nas, Ayat al-Kursi) et de ne pas raconter le rêve s\u2019il a provoqué de la peur. Le repentir sincère et l\u2019aumône sont également conseillés.",
  },
  {
    question: "Rêver d\u2019asticots à répétition en islam : faut-il s\u2019inquiéter ?",
    answer:
      "Des rêves récurrents d\u2019asticots ne doivent pas enfermer dans la peur mais méritent une attention sérieuse. Ils peuvent signaler un problème non résolu, une dette morale ou financière, ou une situation toxique qui persiste. Il est conseillé de faire une introspection approfondie, de multiplier les invocations et de consulter un savant compétent pour une interprétation personnalisée.",
  },
];

export default function ReverAsticotVerIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-asticot-ver-islam/#article",
        headline:
          "Rêver d\u2019asticots ou de vers en islam : signification et interprétation complète",
        description:
          "Que signifie rêver d\u2019asticots ou de vers en islam ? Découvrez les interprétations d\u2019Ibn Sirin et An-Nabulsi, les variantes du rêve et les conseils spirituels adaptés.",
        image:
          "https://www.islamreligion.fr/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-asticot-ver-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-asticot-ver-islam/#breadcrumb",
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
            name: "Rêver d\u2019asticots ou de vers",
            item: "https://www.islamreligion.fr/rever-asticot-ver-islam",
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
          title="Rêver d&apos;asticots ou de vers en islam : signification et interprétation complète"
          subtitle="Ce que symbolisent les asticots et les vers dans un rêve selon la tradition islamique, les savants Ibn Sirin et An-Nabulsi, et les conseils spirituels adaptés."
          imageSrc="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
          imageAlt="Rêver d&apos;asticots ou de vers en islam, signification et interprétation complète"
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
                <span className="text-foreground">Rêver d&apos;asticots ou de vers</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver d&apos;asticots ou de vers en islam renvoie souvent à ce
                  qui ronge le rêveur de l&apos;intérieur : remords enfouis,
                  relations toxiques, revenus douteux ou négligence spirituelle.
                  Selon les savants comme Ibn Sirin et An-Nabulsi,
                  l&apos;interprétation varie considérablement en fonction du
                  contexte du rêve, de l&apos;emplacement des vers et de
                  l&apos;action du rêveur. Ce rêve appelle à l&apos;introspection,
                  au repentir sincère et à la purification du coeur et des actes.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique des asticots et des vers */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique des asticots et des vers dans les rêves en islam
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition islamique de l&apos;
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    interprétation des rêves
                  </Link>
                  , les asticots et les vers occupent une place particulière parmi
                  les symboles oniriques. Ces créatures, associées à la
                  décomposition dans le monde éveillé, portent dans le rêve un
                  message bien plus nuancé qu&apos;une simple connotation
                  négative.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad &#xFE0E; a enseigné la distinction entre
                  trois types de rêves : le rêve véridique (<em>ru&apos;ya</em>),
                  venu d&apos;Allah, le rêve de l&apos;âme (<em>nafsani</em>),
                  produit par les préoccupations du rêveur, et le rêve du diable
                  (<em>shaytani</em>), destiné à troubler ou effrayer. Un rêve
                  d&apos;asticots peut appartenir à chacune de ces catégories
                  selon les circonstances.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sur le plan symbolique, les vers et les asticots représentent
                  ce qui se nourrit de ce qui est mort ou corrompu. Dans le rêve,
                  ils symbolisent fréquemment les éléments de la vie du rêveur
                  qui sont en train de se détériorer : une relation qui pourrit,
                  un bien acquis de manière illicite, des remords qui rongent la
                  conscience ou des personnes qui profitent du rêveur sans
                  qu&apos;il s&apos;en aperçoive.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cependant, il serait réducteur de considérer ce rêve comme
                  uniquement négatif. Les savants musulmans rappellent que les
                  vers participent au cycle naturel de la vie. De la
                  décomposition naît la fertilité. Ainsi, rêver de vers peut
                  aussi signaler le début d&apos;un processus de renouveau
                  intérieur, un nettoyage profond de l&apos;âme qui prépare le
                  terrain à une renaissance spirituelle.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Asticots sur le corps :</strong> éléments parasites
                      dans la vie du rêveur, personnes profiteuses ou pensées
                      destructrices qui s&apos;accrochent
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Vers dans la nourriture :</strong> revenu illicite,
                      tromperie dans les affaires, situation qui semble saine
                      mais cache un vice
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Vers qui sortent du corps :</strong> libération en
                      cours, le rêveur se débarrasse de ce qui le rongeait
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tuer des vers :</strong> victoire sur les ennemis
                      cachés, résolution de problèmes persistants
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
                          Asticots sur le corps
                        </td>
                        <td className="py-3 pr-4">
                          Parasites relationnels, pensées destructrices
                        </td>
                        <td className="py-3">
                          Évaluer son entourage
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vers dans la nourriture
                        </td>
                        <td className="py-3 pr-4">
                          Revenu douteux, tromperie
                        </td>
                        <td className="py-3">
                          Vérifier la licéité des revenus
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vers sortant du corps
                        </td>
                        <td className="py-3 pr-4">
                          Libération, purification en cours
                        </td>
                        <td className="py-3">
                          Poursuivre le repentir
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tuer ou écraser des vers
                        </td>
                        <td className="py-3 pr-4">
                          Victoire sur les ennemis, résolution
                        </td>
                        <td className="py-3">
                          Maintenir les efforts spirituels
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vers de terre
                        </td>
                        <td className="py-3 pr-4">
                          Travail humble, revenus modestes mais licites
                        </td>
                        <td className="py-3">
                          Persévérer dans le bien
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Comme pour{" "}
                  <Link
                    href="/rever-rat-islam-purification"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le rêve de rat en islam
                  </Link>
                  , l&apos;interprétation des vers et asticots exige de la
                  nuance et une prise en compte du contexte personnel du rêveur.
                  Un même symbole peut porter des significations très
                  différentes selon la situation de celui qui rêve.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
                    alt="Symbolique des asticots et des vers dans les rêves en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Interprétation selon Ibn Sirin et An-Nabulsi */}
              {/* ============================================ */}
              <section id="ibn-sirin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation selon Ibn Sirin et An-Nabulsi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les deux plus grands interprètes de rêves en islam ont chacun
                  apporté un éclairage distinct sur la signification des vers et
                  des asticots dans les songes. Leurs enseignements restent la
                  référence pour les musulmans qui cherchent à comprendre ce
                  type de rêve.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;interprétation d&apos;Ibn Sirin (VIIIe siècle)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Muhammad ibn Sirin, considéré comme le père de
                  l&apos;onirologie islamique, voyait dans les vers un symbole
                  directement lié aux enfants, aux proches dépendants ou aux
                  personnes qui vivent aux dépens du rêveur. Selon ses
                  enseignements, les vers qui sortent du ventre représentent
                  les enfants du rêveur ou ceux qu&apos;il nourrit. Les vers
                  qui sortent de la bouche symbolisent des propos que le rêveur
                  regrette ou des paroles nuisibles qu&apos;il a prononcées.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin précisait également que voir des vers sur ses
                  vêtements peut indiquer des ennemis dissimulés parmi les
                  proches, tandis que des vers sur le lit conjugal peuvent
                  évoquer des enfants indisciplinés ou des tensions familiales
                  latentes. Pour lui, l&apos;abondance de vers signalait une
                  accumulation de biens acquis de manière douteuse.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;interprétation d&apos;An-Nabulsi (XVIIe siècle)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam An-Nabulsi, dans son ouvrage de référence
                  <em> Ta&apos;tir al-Anam fi Tafsir al-Manam</em>, a
                  approfondi l&apos;analyse en distinguant clairement les
                  différents types de vers. Pour An-Nabulsi, les vers blancs
                  sortant du corps symbolisent la descendance et les enfants.
                  Les vers noirs ou sombres renvoient aux ennemis, aux jaloux
                  et aux personnes malveillantes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi ajoutait que les vers dans la nourriture
                  représentent la jalousie et l&apos;envie (<em>hasad</em>) qui
                  contaminent les bienfaits du rêveur. Il considérait que manger
                  de la nourriture infestée de vers dans un rêve pouvait
                  indiquer que le rêveur consomme un bien qui ne lui appartient
                  pas ou qui a été acquis par des moyens illicites.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les deux savants s&apos;accordaient sur un point : le
                  contexte global du rêve, l&apos;état émotionnel du rêveur au
                  réveil et sa situation de vie personnelle sont déterminants
                  pour affiner l&apos;interprétation. Un rêve qui provoque de
                  la sérénité au réveil n&apos;a pas la même portée qu&apos;un
                  rêve qui laisse un sentiment de malaise profond.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Élément du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Selon Ibn Sirin
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Selon An-Nabulsi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vers sortant du ventre
                        </td>
                        <td className="py-3 pr-4">
                          Enfants, personnes à charge
                        </td>
                        <td className="py-3">
                          Descendance, progéniture
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vers sortant de la bouche
                        </td>
                        <td className="py-3 pr-4">
                          Paroles regrettées, médisance
                        </td>
                        <td className="py-3">
                          Secret dévoilé, complot
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vers blancs
                        </td>
                        <td className="py-3 pr-4">
                          Proches vulnérables
                        </td>
                        <td className="py-3">
                          Enfants, pureté partielle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vers noirs
                        </td>
                        <td className="py-3 pr-4">
                          Ennemis dissimulés
                        </td>
                        <td className="py-3">
                          Jaloux, personnes malveillantes
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vers dans la nourriture
                        </td>
                        <td className="py-3 pr-4">
                          Biens acquis de manière douteuse
                        </td>
                        <td className="py-3">
                          Jalousie contaminant les bienfaits
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
                    alt="Coran ouvert avec chapelet en bois, symbolisant la sagesse des savants dans l'interpretation des reves d'asticots"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos rêves en lisant le Coran en arabe"
                description="Apprenez à lire l'arabe et à comprendre le Coran grâce à des formations en ligne adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Vers sortant du corps */}
              {/* ============================================ */}
              <section id="vers-corps" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Vers sortant du corps : bouche, peau, ventre et autres parties
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les rêves où des vers ou des asticots sortent du corps du
                  rêveur figurent parmi les plus fréquents et les plus
                  marquants. Chaque partie du corps d&apos;où émergent les vers
                  porte une signification spécifique dans la tradition
                  islamique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Vers sortant de la bouche
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La bouche est le siège de la parole. Des vers qui en sortent
                  indiquent des propos nuisibles que le rêveur a tenus ou
                  qu&apos;il s&apos;apprête à tenir. Ce rêve peut aussi
                  signaler une médisance (<em>ghiba</em>) ou une calomnie
                  (<em>buhtan</em>) dont le rêveur est coupable sans en avoir
                  pleinement conscience. Il constitue un appel fort à surveiller
                  sa langue et à pratiquer le repentir pour les paroles
                  passées.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Vers sortant de la peau
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque des vers percent la peau dans un rêve, cela
                  symbolise des blessures émotionnelles non traitées, des
                  rancunes enfouies ou des secrets qui cherchent à remonter à
                  la surface. La peau représente la barrière entre
                  l&apos;intérieur et l&apos;extérieur. Ce rêve invite le
                  rêveur à traiter ses blessures intérieures plutôt que de les
                  dissimuler.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Vers sortant du ventre
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le ventre symbolise la subsistance et la famille. Des vers
                  qui en sortent peuvent représenter les enfants du rêveur,
                  selon Ibn Sirin, ou les biens que le rêveur redistribue.
                  Dans un contexte négatif, ce rêve peut indiquer que le
                  rêveur se libère d&apos;une nourriture spirituelle
                  corrompue ou d&apos;habitudes alimentaires contraires aux
                  préceptes islamiques.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Vers sortant des yeux ou des oreilles
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les vers qui sortent des yeux symbolisent un refus de voir
                  la vérité ou une prise de conscience forcée concernant une
                  situation que le rêveur ignorait volontairement. Les vers
                  sortant des oreilles indiquent des paroles nocives entendues
                  ou des rumeurs qui ont contaminé le jugement du rêveur. Ce
                  rêve rappelle l&apos;importance de préserver ses sens des
                  influences néfastes, comme le souligne également
                  l&apos;interprétation du{" "}
                  <Link
                    href="/rever-poux-islam-protection"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêve de poux en islam
                  </Link>
                  .
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Quel que soit l&apos;endroit du corps, la sortie des vers est
                  généralement considérée comme un signe positif de libération.
                  Le corps se débarrasse de ce qui le rongeait. Le rêveur est
                  encouragé à accompagner ce processus par le repentir, la
                  prière et l&apos;aumône pour purifier complètement son être
                  intérieur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Vers dans la nourriture */}
              {/* ============================================ */}
              <section id="vers-nourriture" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Vers dans la nourriture : avertissement sur les moyens de
                  subsistance
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La nourriture dans les rêves islamiques représente la
                  subsistance (<em>rizq</em>) au sens large : revenus, travail,
                  connaissances acquises et relations qui nourrissent le
                  rêveur. Des vers dans la nourriture constituent un
                  avertissement qu&apos;il convient de prendre au sérieux.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Trouver des asticots dans un plat que l&apos;on s&apos;apprête
                  à manger peut indiquer que la source de revenus du rêveur
                  comporte une part d&apos;illicite (<em>haram</em>). Cela peut
                  concerner un intérêt bancaire (<em>riba</em>), une transaction
                  malhonnête, un salaire obtenu par la tromperie ou même des
                  connaissances religieuses transmises de manière déformée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voir des vers dans de la viande renvoie souvent à la
                  médisance. Le Coran compare la médisance au fait de manger
                  la chair de son frère mort (sourate Al-Hujurat, verset 12).
                  Les vers dans la viande rêvée amplifient cette image en
                  montrant que la médisance a déjà commencé son oeuvre de
                  décomposition dans les relations du rêveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Des vers dans le pain symbolisent des soucis liés au
                  quotidien et aux besoins fondamentaux. Le pain représente la
                  subsistance de base. Ce rêve peut alerter sur une
                  instabilité financière à venir ou sur le fait que les
                  fondations de la vie matérielle du rêveur sont fragilisées
                  par des pratiques contestables.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Refuser de manger la nourriture infestée dans le rêve est
                  un signe très positif. Cela indique que le rêveur a la
                  lucidité et la force morale de rejeter ce qui est corrompu.
                  C&apos;est un encouragement à maintenir cette vigilance dans
                  la vie éveillée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  On retrouve cette dimension de vigilance alimentaire et
                  spirituelle dans{" "}
                  <Link
                    href="/rever-caca-toilettes-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le rêve de selles et toilettes en islam
                  </Link>
                  , où le corps rejette ce qui lui est nuisible.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Vers de terre et asticots blancs */}
              {/* ============================================ */}
              <section id="types-vers" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Vers de terre, asticots blancs et autres variantes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Tous les vers ne portent pas la même symbolique dans les
                  rêves islamiques. La couleur, la taille et le type de ver
                  modifient considérablement la lecture du songe. Les savants
                  accordent une attention particulière à ces distinctions.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les asticots blancs
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les asticots blancs sont parmi les plus fréquemment rapportés.
                  La couleur blanche atténue la charge négative du symbole.
                  Selon An-Nabulsi, les vers blancs peuvent représenter les
                  enfants, la descendance ou des personnes innocentes qui
                  dépendent du rêveur. Voir de nombreux asticots blancs peut
                  symboliser une famille nombreuse ou des responsabilités
                  familiales croissantes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cependant, si les asticots blancs provoquent du dégoût dans
                  le rêve, ils peuvent indiquer une charge familiale ressentie
                  comme pesante ou des responsabilités que le rêveur peine à
                  assumer. Le sentiment ressenti dans le rêve est toujours un
                  indicateur précieux pour affiner l&apos;interprétation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les vers de terre
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le ver de terre se distingue des asticots par sa fonction
                  naturelle : il aère la terre et la rend fertile. Dans un
                  rêve islamique, le ver de terre symbolise souvent un
                  travail humble mais bénéfique, des revenus modestes mais
                  licites (<em>halal</em>), ou des personnes discrètes qui
                  oeuvrent dans l&apos;ombre pour le bien du rêveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voir des vers de terre dans un jardin ou un champ dans
                  un rêve est généralement interprété comme un bon signe :
                  la terre de la vie du rêveur est travaillée et préparée
                  pour porter du fruit. C&apos;est une invitation à la
                  patience et à la persévérance dans les efforts.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les vers noirs ou sombres
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les vers noirs dans un rêve portent une connotation plus
                  lourde. Ils symbolisent les ennemis cachés, les personnes
                  jalouses qui agissent dans l&apos;ombre ou les péchés graves
                  que le rêveur n&apos;a pas encore confessés. An-Nabulsi les
                  associait aux gens de mauvaise intention qui se cachent
                  derrière une apparence de bienveillance.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les gros vers ou vers en grand nombre
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La taille et le nombre des vers amplifient la signification.
                  Un seul petit ver peut indiquer un souci mineur ou une
                  personne nuisible isolée. Des vers en très grand nombre
                  signalent un problème systémique : un entourage largement
                  toxique, des dettes accumulées ou une situation de vie
                  globalement corrompue qui nécessite une remise en question
                  profonde.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Écraser ou tuer des vers */}
              {/* ============================================ */}
              <section id="ecraser-tuer" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Écraser ou tuer des vers dans un rêve : victoire et
                  purification
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les variantes les plus positives de ce type de rêve,
                  le fait d&apos;écraser, tuer ou éliminer des vers dans un
                  songe est largement interprété comme un signe favorable
                  par les savants musulmans.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Tuer des vers dans un rêve symbolise la capacité du rêveur
                  à prendre le dessus sur ses problèmes. C&apos;est la
                  manifestation d&apos;une volonté forte de purification et
                  de changement. Le rêveur ne subit plus passivement les
                  difficultés mais agit pour s&apos;en libérer. Cette
                  symbolique rejoint celle que l&apos;on retrouve dans le{" "}
                  <Link
                    href="/rever-mort-islam-messages"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêve de mort en islam
                  </Link>
                  , où la fin d&apos;une chose annonce le début d&apos;une
                  autre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Écraser des asticots peut indiquer la résolution imminente
                  d&apos;un conflit, la victoire sur un ennemi caché ou la fin
                  d&apos;une période de doute et de tourments intérieurs.
                  Si le rêveur éprouve un sentiment de soulagement après avoir
                  tué les vers, c&apos;est un signe très positif de libération
                  spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Retirer des vers de son corps avec ses mains dans un rêve
                  signifie que le rêveur prend activement en charge sa
                  purification. Il ne compte pas uniquement sur les
                  circonstances mais agit concrètement pour améliorer sa
                  situation spirituelle. Les savants encouragent dans ce cas
                  à accompagner cette bonne disposition par des actions
                  concrètes : aumône, prière nocturne (<em>qiyam al-layl</em>)
                  et lecture régulière du Coran.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En revanche, si le rêveur tente de tuer les vers sans y
                  parvenir, cela peut indiquer que le problème persiste et
                  que des efforts supplémentaires sont nécessaires. Ce
                  n&apos;est pas un signe de désespoir mais un appel à
                  redoubler de patience et de persévérance dans la voie du
                  bien.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon la situation du rêveur */}
              {/* ============================================ */}
              <section id="situation-reveur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve d&apos;asticots ou de vers ne porte pas la même
                  signification selon la personne qui le fait. Les grands
                  interprètes tiennent toujours compte de la situation
                  personnelle du rêveur pour affiner leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les vers peuvent symboliser des prétendants malhonnêtes
                      ou des personnes de l&apos;entourage qui agissent par
                      jalousie. Des asticots blancs peuvent annoncer une
                      grossesse future ou des responsabilités familiales à
                      venir. Ce rêve invite à la prudence dans les relations
                      et à demander la guidance d&apos;Allah avant tout
                      engagement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve de vers peut refléter des tensions conjugales
                      non exprimées, des interférences familiales ou des
                      soucis liés aux enfants. Les vers sortant du corps
                      peuvent symboliser un accouchement ou une période de
                      renouveau dans le couple. Il encourage le dialogue
                      sincère avec l&apos;époux et la purification de
                      l&apos;environnement familial.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut traduire les angoisses naturelles liées à
                      la grossesse et à la santé du bébé. Les vers blancs
                      sortant du ventre sont souvent interprétés positivement
                      comme le symbole de l&apos;enfant à naître. Il invite à
                      multiplier les invocations de protection et à garder
                      confiance en la bienveillance divine.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les asticots peuvent évoquer des collaborateurs
                      malhonnêtes, des associés profiteurs ou des dettes
                      morales non réglées. Les vers dans la nourriture
                      alertent sur la licéité des revenus. Tuer des vers
                      symbolise la reprise en main des affaires et la
                      résolution des conflits professionnels. Ce rêve invite
                      à la transparence dans les transactions.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Conseils islamiques */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils islamiques après un rêve d&apos;asticots ou de vers
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La tradition prophétique offre des recommandations précises
                  pour réagir à ce type de rêve. Ces conseils visent à protéger
                  le rêveur et à transformer l&apos;avertissement du songe en
                  une occasion de rapprochement avec Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chercher refuge auprès d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Au réveil, cracher légèrement trois fois à gauche sans
                        émettre de salive, puis dire : <em>&laquo; A&apos;udhu
                        billahi min ash-shaytani ar-rajim &raquo;</em> (Je
                        cherche refuge auprès d&apos;Allah contre Satan le
                        lapidé). Ne pas raconter le rêve s&apos;il a provoqué
                        de l&apos;angoisse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter les sourates protectrices
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lire Ayat al-Kursi (verset du Trône), sourate Al-Falaq
                        et sourate An-Nas. Ces récitations constituent un
                        bouclier spirituel reconnu par la Sunna. La lecture
                        régulière de sourate Al-Baqara dans le foyer éloigne
                        également les influences négatives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Pratiquer le repentir sincère (tawba)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le rêve évoque des revenus douteux, de la médisance
                        ou des péchés non confessés, le repentir sincère est la
                        réponse la plus adaptée. La tawba implique le regret
                        sincère, l&apos;arrêt immédiat du péché et la ferme
                        intention de ne pas y revenir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Donner l&apos;aumône (sadaqa)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;aumône est considérée comme un moyen de repousser
                        le mal et d&apos;attirer la bénédiction divine. Le
                        Prophète ﷺ a dit que l&apos;aumône éteint le péché
                        comme l&apos;eau éteint le feu. Donner discrètement et
                        régulièrement renforce la protection spirituelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Évaluer son entourage et ses revenus
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le rêve de vers invite à un examen honnête de ses
                        fréquentations et de ses sources de revenus. Identifier
                        les personnes qui profitent sans contrepartie, les
                        relations toxiques et les pratiques financières
                        douteuses est un pas concret vers la purification.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      6
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas tirer de conclusions hâtives
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un rêve de vers n&apos;est jamais un présage définitif.
                        Les savants insistent : aucune décision importante ne
                        devrait reposer uniquement sur un rêve. La réflexion,
                        la patience et la confiance en la miséricorde d&apos;Allah
                        sont les meilleures réponses face à un rêve troublant.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau conseils */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action recommandée
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bénéfice spirituel
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Fréquence
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Récitation des sourates protectrices
                        </td>
                        <td className="py-3 pr-4">
                          Bouclier spirituel, sérénité
                        </td>
                        <td className="py-3">Matin et soir</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Repentir sincère (tawba)
                        </td>
                        <td className="py-3 pr-4">
                          Purification du coeur, pardon divin
                        </td>
                        <td className="py-3">Immédiatement</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Aumône discrète
                        </td>
                        <td className="py-3 pr-4">
                          Repousse le mal, attire la bénédiction
                        </td>
                        <td className="py-3">Régulière</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Évaluation de l&apos;entourage
                        </td>
                        <td className="py-3 pr-4">
                          Relations assainies, protection
                        </td>
                        <td className="py-3">Selon le besoin</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Prière nocturne (qiyam al-layl)
                        </td>
                        <td className="py-3 pr-4">
                          Proximité avec Allah, apaisement
                        </td>
                        <td className="py-3">Aussi souvent que possible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en priere devant une mosquee, illustrant les conseils spirituels apres un reve d'asticots en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* Affiliate + FAQ + Navigation */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Comprenez les symboles coraniques de vos rêves"
                description="La compréhension des rêves en islam passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation pour approfondir vos connaissances."
                preselect="coran"
              />

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
                    href="/rever-poux-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de poux en islam
                  </Link>
                  <Link
                    href="/rever-rat-islam-purification"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de rat en islam
                  </Link>
                  <Link
                    href="/rever-caca-toilettes-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de selles en islam
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de mort en islam
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
