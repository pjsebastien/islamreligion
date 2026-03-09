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
    "Rêver de perdre ses cheveux en islam : signification",
  description:
    "Signification de rêver de perdre ses cheveux ou de se les couper en islam selon Ibn Sirin et An-Nabulsi. Interprétations homme et femme.",
  openGraph: {
    title:
      "Rêver de perdre ses cheveux en islam : signification",
    description:
      "Signification de rêver de perdre ses cheveux ou de se les couper en islam selon Ibn Sirin et An-Nabulsi. Interprétations homme et femme.",
    url: "https://www.islamreligion.fr/rever-perdre-cheveux-islam",
    images: [{ url: "/images/dome-mosquee-croissant-lune-islam-architecture.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-perdre-cheveux-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique des cheveux en islam" },
  { id: "chute", label: "Rêver de perdre ses cheveux" },
  { id: "couper", label: "Se couper ou se raser les cheveux" },
  { id: "variantes", label: "Cheveux blancs, longs et autres variantes" },
  { id: "homme-femme", label: "Interprétation homme vs femme" },
  { id: "sources", label: "Sources : Ibn Sirin et An-Nabulsi" },
  { id: "conseils", label: "Conseils après ce rêve" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de perdre ses cheveux en islam ?",
    answer:
      "Selon la tradition islamique, rêver de perdre ses cheveux peut symboliser une perte de prestige, une inquiétude financière ou un changement de situation. Pour Ibn Sirin, la chute de cheveux peut indiquer une dette à rembourser ou une charge mentale lourde. Le contexte du rêve et la situation du rêveur modifient profondément l'interprétation.",
  },
  {
    question: "Rêver de se couper les cheveux en islam : est-ce positif ?",
    answer:
      "Se couper les cheveux dans un rêve est souvent interprété positivement. Cela peut symboliser un renouveau, la libération d'un fardeau ou l'accomplissement d'un voeu. Dans le contexte du hajj ou de la omra, ce geste représente la purification et la soumission à Allah.",
  },
  {
    question: "Que signifie rêver de se raser la tête en islam ?",
    answer:
      "Se raser la tête dans un rêve évoque l'humilité, la soumission totale à Dieu et le détachement des biens matériels. Si le rêve se situe pendant le pèlerinage, c'est un signe de sécurité, de victoire et d'acquittement des dettes selon Ibn Sirin.",
  },
  {
    question: "Rêver de cheveux blancs en islam : quelle signification ?",
    answer:
      "Les cheveux blancs dans un rêve symbolisent la sagesse, la longévité et le respect. Pour An-Nabulsi, voir ses cheveux blanchir annonce une élévation spirituelle ou une période de maturité. Si les cheveux blancs apparaissent chez un jeune, cela peut indiquer des soucis précoces ou une épreuve passagère.",
  },
  {
    question: "Y a-t-il une différence entre homme et femme pour ce rêve ?",
    answer:
      "Oui, les interprétations diffèrent. Pour un homme, la chute de cheveux symbolise souvent une perte de pouvoir, de richesse ou de statut social. Pour une femme, ce rêve est davantage lié à l'honneur, à la pudeur (hijab) ou à des préoccupations affectives et familiales.",
  },
  {
    question: "Que faire après un rêve de chute de cheveux en islam ?",
    answer:
      "La tradition recommande de chercher refuge auprès d'Allah en récitant les invocations de protection, de faire la sadaqa (aumône), de renforcer la prière et de ne pas raconter le rêve à n'importe qui. Si le rêve suscite de l'inquiétude, le partager avec une personne pieuse et de confiance est conseillé.",
  },
  {
    question: "Rêver que les cheveux d'une autre personne tombent : que signifie-t-il ?",
    answer:
      "Voir les cheveux d'autrui tomber dans un rêve peut annoncer une épreuve pour cette personne ou une perte de lien avec elle. Si c'est un proche, cela invite à renforcer le dialogue et à prier pour lui. Si c'est un inconnu, cela reflète parfois une préoccupation personnelle projetée sur autrui.",
  },
  {
    question: "Rêver de cheveux longs en islam : est-ce un bon signe ?",
    answer:
      "Des cheveux longs et beaux dans un rêve sont généralement un signe positif. Ils symbolisent la prospérité, l'honneur, la richesse et une longue vie. Pour une femme, des cheveux longs et soignés représentent la beauté intérieure et la bénédiction divine sur son foyer.",
  },
];

export default function ReverPerdreCheveux() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-perdre-cheveux-islam/#article",
        headline:
          "Rêver de perdre ses cheveux ou de se les couper en islam : signification",
        description:
          "Signification de rêver de perdre ses cheveux ou de se les couper en islam selon Ibn Sirin et An-Nabulsi.",
        image:
          "/images/dome-mosquee-croissant-lune-islam-architecture.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-perdre-cheveux-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-perdre-cheveux-islam/#breadcrumb",
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
            name: "Perdre ses cheveux",
            item: "https://www.islamreligion.fr/rever-perdre-cheveux-islam",
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
          title="Rêver de perdre ses cheveux en islam : signification et interprétation"
          subtitle="Comprendre la symbolique des cheveux dans les rêves selon Ibn Sirin, An-Nabulsi et la tradition islamique."
          imageSrc="/images/dome-mosquee-croissant-lune-islam-architecture.jpg"
          imageAlt="Rêver de perdre ses cheveux en islam, signification et interprétation spirituelle"
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
                <span className="text-foreground">Perdre ses cheveux</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de perdre ses cheveux en islam est un songe riche en
                  significations. Les cheveux symbolisent la force, le prestige,
                  la richesse et l&apos;honneur. Leur chute dans un rêve peut
                  annoncer une perte de statut, une inquiétude financière ou un
                  changement profond dans la vie du rêveur. Se couper les
                  cheveux, en revanche, évoque le renouveau et la purification,
                  notamment dans le contexte du pèlerinage. L&apos;interprétation
                  varie selon que le rêveur est un homme ou une femme, et selon
                  les circonstances précises du rêve.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique des cheveux */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique des cheveux dans les rêves en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition islamique, les cheveux occupent une place
                  symbolique forte. Ils représentent la beauté, la vitalité, la
                  richesse et le rang social. L&apos;
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">interprétation des
                  rêves en islam</Link>
                  {" "}accorde une attention particulière à la chevelure, car
                  elle reflète l&apos;état intérieur du croyant et sa relation
                  avec le monde.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les grands savants de l&apos;onirologie islamique, comme Ibn
                  Sirin et An-Nabulsi, ont consacré des chapitres entiers aux
                  rêves liés aux cheveux. Selon eux, une belle chevelure
                  abondante est signe de prospérité, tandis que des cheveux
                  abîmés ou qui tombent peuvent traduire des difficultés à
                  venir. Le Prophète Muhammad (paix et salut sur lui) a lui-même
                  accordé de l&apos;importance au soin des cheveux, ce qui
                  renforce leur valeur symbolique dans les songes.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cheveux abondants :</strong> richesse, honneur,
                      prospérité et bénédiction divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cheveux qui tombent :</strong> perte de prestige,
                      inquiétude ou transition de vie.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cheveux coupés volontairement :</strong> renouveau
                      spirituel, purification ou accomplissement d&apos;un voeu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cheveux blancs :</strong> sagesse, maturité et
                      élévation spirituelle.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Symbolisme principal
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Connotation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Cheveux qui tombent
                        </td>
                        <td className="py-3 pr-4">Perte, déclin, changement</td>
                        <td className="py-3">Avertissement</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se couper les cheveux
                        </td>
                        <td className="py-3 pr-4">Renouveau, libération</td>
                        <td className="py-3">Positif</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se raser la tête
                        </td>
                        <td className="py-3 pr-4">Humilité, soumission à Dieu</td>
                        <td className="py-3">Spirituel</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Cheveux longs et beaux
                        </td>
                        <td className="py-3 pr-4">Prospérité, honneur</td>
                        <td className="py-3">Positif</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/dome-mosquee-croissant-lune-islam-architecture.jpg"
                    alt="Symbolique des cheveux dans les rêves en islam, interprétation spirituelle"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Chute de cheveux */}
              {/* ============================================ */}
              <section id="chute" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de perdre ses cheveux : perte de prestige et changement
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La chute de cheveux dans un rêve est l&apos;un des songes les
                  plus fréquemment rapportés. Selon Ibn Sirin, voir ses cheveux
                  tomber annonce une diminution des bienfaits, qu&apos;il
                  s&apos;agisse de richesse, de prestige ou de santé. Ce rêve
                  peut aussi refléter une dette non remboursée, un engagement
                  non tenu ou une négligence dans la pratique religieuse.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi précise que la gravité de l&apos;interprétation
                  dépend de la quantité de cheveux perdus. Quelques cheveux qui
                  tombent signalent un souci passager, tandis qu&apos;une
                  calvitie complète dans le rêve peut annoncer une perte
                  importante de réputation ou de biens. Ce songe rappelle au
                  croyant l&apos;importance de la gratitude envers les
                  bienfaits d&apos;Allah, tout comme{" "}
                  <Link href="/rever-perdre-dents-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver de perdre ses dents en islam</Link>
                  {" "}invite à prendre soin de ses liens familiaux.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Quelques cheveux qui tombent
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un souci mineur ou une perte financière passagère. Ce
                        rêve invite à la vigilance sans pour autant susciter
                        d&apos;alarme excessive. Il peut aussi refléter un
                        stress temporaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chute massive de cheveux
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Annonce une épreuve plus conséquente : perte de
                        réputation, difficultés financières majeures ou
                        éloignement d&apos;un être cher. Ibn Sirin recommande
                        dans ce cas de multiplier les aumônes et les prières.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Calvitie complète dans le rêve
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Symbolise une remise à zéro, un dépouillement total.
                        Selon le contexte, cela peut être un avertissement
                        sérieux ou, paradoxalement, le début d&apos;un
                        renouveau si le rêveur ressent de la paix.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Cheveux qui tombent avec douleur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La douleur ressentie pendant le rêve aggrave
                        l&apos;interprétation. Elle peut indiquer une souffrance
                        morale liée à une perte imminente ou un deuil
                        symbolique. Le ressenti émotionnel du rêveur est
                        toujours pris en compte par les interprètes.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée, symbolisant la réflexion spirituelle après un rêve de perte de cheveux"
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
              {/* SECTION 3 : Couper / raser */}
              {/* ============================================ */}
              <section id="couper" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se couper ou se raser les cheveux dans un rêve : renouveau et
                  purification
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Contrairement à la chute involontaire, se couper les cheveux
                  volontairement dans un rêve porte une connotation souvent
                  positive. Ibn Sirin considère que couper sa chevelure pour
                  l&apos;embellir est un signe de bonheur, de bonté abondante
                  et parfois d&apos;un mariage prochain ou d&apos;une
                  augmentation de revenus.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le geste de se raser la tête revêt une dimension
                  particulièrement spirituelle en islam. Lors du hajj et de la
                  omra, le rasage ou la coupe des cheveux marque
                  l&apos;accomplissement du pèlerinage et symbolise la
                  purification de l&apos;âme. Voir ce geste dans un rêve est
                  donc associé à la sécurité, à la victoire sur les
                  difficultés et à l&apos;acquittement des dettes, comme le
                  rappelle la tradition prophétique.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Interprétation
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Référence
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se couper les cheveux soi-même
                        </td>
                        <td className="py-3 pr-4">
                          Libération d&apos;un fardeau, décision courageuse
                        </td>
                        <td className="py-3">Ibn Sirin</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se faire couper les cheveux par autrui
                        </td>
                        <td className="py-3 pr-4">
                          Aide extérieure, conseil bénéfique
                        </td>
                        <td className="py-3">An-Nabulsi</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se raser la tête pendant le hajj
                        </td>
                        <td className="py-3 pr-4">
                          Purification, acquittement des dettes
                        </td>
                        <td className="py-3">Ibn Sirin</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se raser la tête hors pèlerinage
                        </td>
                        <td className="py-3 pr-4">
                          Humilité, détachement des biens matériels
                        </td>
                        <td className="py-3">An-Nabulsi</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Couper les cheveux d&apos;un enfant
                        </td>
                        <td className="py-3 pr-4">
                          Protection, aqiqa, bénédiction pour l&apos;enfant
                        </td>
                        <td className="py-3">Tradition prophétique</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sacrifice des cheveux, qu&apos;il soit lié au pèlerinage
                  ou à un voeu personnel, est profondément ancré dans la
                  pratique islamique. Ce geste transcende l&apos;apparence
                  physique pour toucher à la dimension spirituelle du croyant.
                  Si votre rêve s&apos;accompagne d&apos;une sensation
                  d&apos;apaisement, les savants y voient un signe favorable de
                  renouveau intérieur, comparable à la symbolique de{" "}
                  <Link href="/rever-mort-islam-messages" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver d&apos;un mort en islam</Link>
                  {" "}qui annonce souvent une transformation profonde.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de perdre ses dents en islam : interprétation"
                  description="La perte de dents dans un rêve partage des symboliques proches avec la chute de cheveux. Découvrez les parallèles."
                  href="/rever-perdre-dents-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Cheveux blancs, longs, etc. */}
              {/* ============================================ */}
              <section id="variantes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Cheveux blancs, cheveux longs et autres variantes oniriques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de la simple chute ou coupe, d&apos;autres scénarios
                  liés aux cheveux méritent une attention particulière. La
                  couleur, la longueur et l&apos;état des cheveux dans le rêve
                  apportent chacun une nuance différente à l&apos;interprétation.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Cheveux blancs ou grisonnants
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les cheveux blancs symbolisent la sagesse, la dignité et
                      la longévité. An-Nabulsi précise que si une personne
                      jeune voit ses cheveux blanchir, cela peut indiquer des
                      soucis ou une responsabilité précoce. Pour une personne
                      âgée, c&apos;est un signe de noblesse et de lumière
                      spirituelle (nour).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Cheveux longs et abondants
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Des cheveux longs et sains annoncent la prospérité,
                      l&apos;honneur et la réussite. Pour un homme, cela
                      indique un accroissement de prestige. Pour une femme,
                      c&apos;est un signe de beauté intérieure, de pudeur et
                      de bénédiction sur sa famille.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Cheveux emmêlés ou sales
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Des cheveux en désordre reflètent une confusion
                      intérieure, des difficultés non résolues ou un
                      éloignement de la pratique religieuse. Ce rêve est une
                      invitation à remettre de l&apos;ordre dans sa vie
                      spirituelle et ses relations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Cheveux d&apos;autrui qui tombent
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Voir les cheveux d&apos;une autre personne tomber peut
                      annoncer une épreuve pour cette personne ou signaler un
                      affaiblissement du lien avec elle. C&apos;est un appel à
                      la solidarité, à la prière pour autrui et au
                      renforcement des liens fraternels.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les rêves liés aux cheveux partagent une symbolique commune
                  avec d&apos;autres songes corporels en islam. Comme pour{" "}
                  <Link href="/reve-erotique-islam-purification" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les rêves liés au corps et à la purification en islam</Link>,
                  {" "}le corps dans le rêve sert de miroir à l&apos;état
                  spirituel du croyant.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Homme vs femme */}
              {/* ============================================ */}
              <section id="homme-femme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation différente pour l&apos;homme et la femme
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les interprètes classiques distinguent clairement les
                  significations selon le sexe du rêveur. Les cheveux ne portent
                  pas la même valeur symbolique pour un homme et pour une femme
                  dans la tradition islamique, ce qui modifie profondément la
                  lecture du rêve.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Pour un homme
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Pour une femme
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Perte de cheveux
                        </td>
                        <td className="py-3 pr-4">
                          Perte de pouvoir, déclin financier, souci professionnel
                        </td>
                        <td className="py-3">
                          Atteinte à l&apos;honneur, inquiétude familiale, crainte affective
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se couper les cheveux
                        </td>
                        <td className="py-3 pr-4">
                          Nouveau départ, remboursement de dettes
                        </td>
                        <td className="py-3">
                          Provision abondante, bonne nouvelle (mariage, enfant)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se raser la tête
                        </td>
                        <td className="py-3 pr-4">
                          Accomplissement du hajj, soumission à Allah
                        </td>
                        <td className="py-3">
                          Épreuve ou sacrifice, contexte à analyser
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Cheveux longs
                        </td>
                        <td className="py-3 pr-4">
                          Richesse, force, longévité
                        </td>
                        <td className="py-3">
                          Beauté, pudeur, bénédiction sur le foyer
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour une femme mariée en particulier, Ibn Sirin considère que
                  se couper les cheveux dans un rêve annonce une provision
                  bonne et abondante. Pour une femme célibataire, ce même rêve
                  peut présager un mariage ou un changement de vie positif.
                  Pour un homme, la coupe volontaire des cheveux est souvent
                  liée au remboursement de dettes et à la levée d&apos;un
                  poids qui pesait sur ses épaules.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette distinction homme-femme se retrouve dans d&apos;autres
                  rêves corporels. Le{" "}
                  <Link href="/rever-chat-islam-symbolisme" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêve de chat en islam</Link>
                  {" "}par exemple porte aussi des interprétations nuancées
                  selon la situation personnelle du rêveur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Sources */}
              {/* ============================================ */}
              <section id="sources" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent Ibn Sirin et An-Nabulsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux références majeures de l&apos;interprétation des
                  rêves en islam apportent chacune un éclairage complémentaire
                  sur les songes liés aux cheveux. Leurs enseignements, bien
                  que rédigés à des époques différentes, convergent sur
                  l&apos;importance de la chevelure comme miroir de la
                  condition spirituelle et matérielle du rêveur.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Ibn Sirin (VIIIe siècle)
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Considéré comme le père de l&apos;onirologie islamique,
                      Ibn Sirin enseigne que les cheveux représentent la
                      richesse et la longévité. Leur chute annonce une
                      diminution des bienfaits, souvent causée par des
                      négligences spirituelles. En revanche, la coupe
                      volontaire, surtout dans un contexte de pèlerinage,
                      symbolise la délivrance et la sécurité. Il insiste sur
                      le fait que le ressenti du rêveur (peur, sérénité,
                      indifférence) modifie radicalement la signification.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      An-Nabulsi (XVIIe siècle)
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      An-Nabulsi complète les enseignements d&apos;Ibn Sirin en
                      ajoutant des nuances liées au contexte social et familial
                      du rêveur. Pour lui, les cheveux blancs sont un signe de
                      dignité, la chevelure désordonnée reflète un coeur
                      troublé, et la perte totale des cheveux peut indiquer
                      un besoin urgent de retour vers Allah. Il accorde aussi
                      une place à l&apos;environnement du rêve : un lieu
                      sacré, la présence de proches ou d&apos;inconnus
                      modifient l&apos;interprétation.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux savants rappellent que l&apos;interprétation des
                  rêves n&apos;est pas une science exacte mais un art qui
                  demande piété, connaissance et discernement. Il est toujours
                  recommandé de consulter une personne compétente plutôt que de
                  s&apos;alarmer seul face à un rêve troublant.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire après un rêve de perte de cheveux
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si vous avez rêvé de perdre vos cheveux ou de vous les
                  couper, plusieurs actions sont recommandées par la tradition
                  islamique pour apaiser l&apos;inquiétude et tirer profit du
                  message onirique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Chercher refuge auprès d&apos;Allah en récitant les
                      sourates protectrices (Al-Falaq et An-Nas) et les
                      invocations du matin.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ne pas raconter le rêve à n&apos;importe qui. La Sunna
                      recommande de ne partager un mauvais rêve qu&apos;avec
                      une personne de confiance ou un savant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Faire la sadaqa (aumône) pour repousser le mal éventuel
                      annoncé par le rêve, conformément au hadith du Prophète
                      (paix et salut sur lui).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Renforcer la prière du Fajr et les invocations nocturnes,
                      car c&apos;est durant ces moments que la connexion
                      spirituelle est la plus forte.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Tenir un journal de rêves pour repérer les récurrences
                      et comprendre les cycles émotionnels et spirituels.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action recommandée
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bienfait attendu
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Réciter les sourates protectrices
                        </td>
                        <td className="py-3">
                          Protection spirituelle et apaisement du coeur
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Faire la sadaqa
                        </td>
                        <td className="py-3">
                          Repousser le mal et attirer la baraka
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Consulter un savant
                        </td>
                        <td className="py-3">
                          Interprétation fiable et sérénité d&apos;esprit
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Noter le rêve dans un carnet
                        </td>
                        <td className="py-3">
                          Meilleure compréhension de soi sur le long terme
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en doua et invocation, conseils pratiques après un rêve de perte de cheveux en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
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
                    href="/rever-perdre-dents-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de perdre ses dents
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;un mort en islam
                  </Link>
                  <Link
                    href="/rever-chat-islam-symbolisme"
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
                    href="/reve-erotique-islam-purification"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêve et purification en islam
                  </Link>
                  <Link
                    href="/rever-chat-islam-symbolisme"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de chat en islam
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
