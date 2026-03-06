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
    "Rêver de caca, uriner ou toilettes en islam : sens",
  description:
    "Signification de rêver de caca, d'uriner ou de toilettes en islam selon Ibn Sirin et An-Nabulsi. Purification, richesse et interprétations détaillées.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-caca-toilettes-islam",
  },
};

const tocItems = [
  { id: "excrements", label: "Rêver d'excréments : significations" },
  { id: "uriner", label: "Uriner en rêve : interprétations" },
  { id: "toilettes", label: "Toilettes en rêve : symbolisme" },
  { id: "marcher", label: "Marcher dans les excréments" },
  { id: "souillure", label: "Se souiller : mises en garde" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "actions", label: "Actions recommandées après ce rêve" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de caca en islam ?",
    answer:
      "En islam, rêver de caca ou d'excréments est souvent lié à la purification de l'âme, à la libération d'un poids émotionnel ou spirituel, et parfois à un gain financier inattendu. Le contexte du rêve (lieu, quantité, propreté) affine considérablement l'interprétation selon les savants comme Ibn Sirin.",
  },
  {
    question: "Rêver d'uriner en islam : est-ce un bon signe ?",
    answer:
      "Selon Ibn Sirin, uriner dans un rêve peut symboliser une dépense d'argent, une aumône ou un soulagement après une période difficile. Uriner dans un endroit convenable est généralement positif, tandis qu'uriner en public peut indiquer une dépense inconsidérée ou une indiscrétion.",
  },
  {
    question: "Que signifie rêver de toilettes sales en islam ?",
    answer:
      "Les toilettes sales dans un rêve islamique peuvent symboliser un malaise spirituel, des secrets mal gardés ou un besoin urgent de purification intérieure. Ce rêve invite à la repentance, au renouvellement des ablutions et à la recherche de la sérénité par la prière.",
  },
  {
    question: "Rêver de marcher dans les excréments : quelle interprétation ?",
    answer:
      "Selon Ibn Sirin, marcher dans les excréments en rêve est paradoxalement un signe positif. Ce rêve annonce souvent une richesse inattendue, une bonne fortune financière ou un gain matériel qui surprendra le rêveur. Il symbolise la transformation du négatif en positif.",
  },
  {
    question: "Rêver de se souiller avec des excréments en islam : que faire ?",
    answer:
      "Se souiller avec des excréments dans un rêve est un avertissement. Ce rêve invite à examiner ses sources de revenus, à vérifier la licéité de ses gains et à se purifier par le repentir sincère (tawba), les ablutions et la multiplication des invocations.",
  },
  {
    question: "Rêver de déféquer dans un lieu public en islam : signification ?",
    answer:
      "Déféquer dans un lieu public en rêve symbolise la honte, la divulgation de secrets ou l'exposition d'affaires privées. Ce rêve met en garde contre l'imprudence dans les paroles et invite à la discrétion et à la pudeur, valeurs chères à la tradition islamique.",
  },
  {
    question: "Quelle différence entre rêver d'urine et d'excréments en islam ?",
    answer:
      "L'urine dans le rêve est davantage liée aux dépenses, à l'aumône et à la subsistance. Les excréments, quant à eux, symbolisent plus souvent la purification de l'âme, la libération d'un fardeau ou un gain matériel. Les deux partagent une dimension de soulagement et de renouveau spirituel.",
  },
  {
    question: "Faut-il s'inquiéter après un rêve de caca ou de toilettes ?",
    answer:
      "Non, il ne faut pas céder à l'inquiétude. La tradition islamique enseigne que tout rêve, même dérangeant, peut porter un message bénéfique. Il convient de réciter les invocations de protection, de faire ses ablutions et de confier l'interprétation à une personne de science si le rêve se répète.",
  },
];

export default function ReverCacaToilettes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-caca-toilettes-islam/#article",
        headline:
          "Rêver de caca, uriner ou toilettes en islam : sens",
        description:
          "Signification de rêver de caca, d'uriner ou de toilettes en islam selon Ibn Sirin et An-Nabulsi.",
        image:
          "/images/motifs-geometriques-islam-croissant-etoile.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-caca-toilettes-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-caca-toilettes-islam/#breadcrumb",
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
            name: "Rêver de caca/toilettes",
            item: "https://www.islamreligion.fr/rever-caca-toilettes-islam",
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
          title="Rêver de caca, d'uriner ou de toilettes en islam"
          subtitle="Interprétation selon Ibn Sirin, An-Nabulsi et la tradition islamique : purification, richesse et messages spirituels."
          imageSrc="/images/motifs-geometriques-islam-croissant-etoile.jpg"
          imageAlt="Motifs géométriques islamiques, symbolisant la purification et la spiritualité"
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
                <span className="text-foreground">Rêver de caca/toilettes</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les rêves liés aux excréments, à l&apos;urine ou aux toilettes
                  en islam portent des significations profondes, bien loin du
                  dégoût initial qu&apos;ils peuvent susciter. Selon les grands
                  interprètes comme Ibn Sirin et An-Nabulsi, ces visions
                  oniriques symbolisent souvent la purification de l&apos;âme,
                  la libération d&apos;un fardeau, un gain financier inattendu
                  ou un appel à la repentance. Le contexte, le lieu et les
                  détails du rêve orientent l&apos;interprétation entre bon
                  augure et mise en garde.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Excréments */}
              {/* ============================================ */}
              <section id="excrements" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;excréments en islam : purification et libération
                  de l&apos;âme
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition des{" "}
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves en islam</Link>,
                  les excréments occupent une place singulière. Loin de
                  se limiter à une image repoussante, ce symbole onirique
                  revêt une signification spirituelle riche et nuancée. Les
                  savants musulmans y ont toujours vu un signe à décrypter
                  avec attention et discernement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin, le plus célèbre interprète des rêves en islam,
                  considère que rêver d&apos;excréments renvoie fréquemment
                  à la purification intérieure. Tout comme le corps expulse
                  ce dont il n&apos;a plus besoin, l&apos;âme se débarrasse
                  de ses fardeaux : péchés accumulés, rancunes enfouies,
                  angoisses persistantes. Ce rêve symbolise un processus
                  naturel de nettoyage spirituel que le croyant peut accueillir
                  avec sérénité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi, autre grande figure de l&apos;interprétation
                  onirique islamique, ajoute que la vue d&apos;excréments
                  dans un rêve peut annoncer un soulagement financier ou la
                  résolution d&apos;un problème qui pesait lourdement sur
                  le rêveur. La quantité, l&apos;odeur et le lieu précisent
                  la nature du message.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Déféquer normalement :</strong> libération
                      d&apos;un souci, soulagement émotionnel ou spirituel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Voir des excréments sans se souiller :</strong>{" "}
                      richesse à venir, gain matériel proche.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Excréments en grande quantité :</strong> abondance,
                      période de prospérité et d&apos;accomplissements.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Déféquer avec difficulté :</strong> obstacle
                      persistant, besoin de patience et de persévérance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Excréments d&apos;animal :</strong> subsistance
                      provenant d&apos;une source inattendue.
                    </span>
                  </li>
                </ul>

                {/* Tableau significations excréments */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification selon Ibn Sirin
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Dimension spirituelle
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Déféquer dans un lieu privé
                        </td>
                        <td className="py-3 pr-4">
                          Soulagement, fin d&apos;un souci
                        </td>
                        <td className="py-3">
                          Purification intérieure naturelle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Déféquer en public
                        </td>
                        <td className="py-3 pr-4">
                          Honte, divulgation de secrets
                        </td>
                        <td className="py-3">
                          Appel à la pudeur et à la discrétion
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir des excréments propres
                        </td>
                        <td className="py-3 pr-4">
                          Gain financier, prospérité
                        </td>
                        <td className="py-3">
                          Abondance par la grâce divine
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Excréments à l&apos;odeur forte
                        </td>
                        <td className="py-3 pr-4">
                          Mauvaise réputation, médisance
                        </td>
                        <td className="py-3">
                          Repentance et rectification du comportement
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/motifs-geometriques-islam-croissant-etoile.jpg"
                    alt="Symbolisme des rêves d'excréments en islam, purification spirituelle"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Uriner en rêve */}
              {/* ============================================ */}
              <section id="uriner" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Uriner en rêve en islam : dépense, aumône et soulagement
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le rêve d&apos;uriner fait partie des visions oniriques les
                  plus fréquentes. Ibn Sirin lui accorde une attention
                  particulière, car il touche à des thématiques centrales de
                  la vie du croyant : la subsistance, la générosité et le
                  soulagement des épreuves. L&apos;urine, dans le rêve,
                  représente ce qui sort du patrimoine du rêveur, que ce soit
                  volontairement ou non.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon An-Nabulsi, uriner dans un lieu approprié et propre
                  en rêve est un signe de bénédiction. Cela peut annoncer
                  une aumône acceptée par Allah, une dépense bénéfique pour
                  la famille ou la résolution d&apos;une dette qui pesait
                  sur le cœur. En revanche, uriner dans un lieu inadapté ou
                  devant autrui met en garde contre les dépenses excessives,
                  les indiscrétions ou les gains douteux.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition rapporte également qu&apos;uriner dans un
                  endroit inconnu peut être le signe d&apos;un mariage
                  prochain ou d&apos;un changement de situation. Retenir
                  son urine dans le rêve symbolise, quant à elle, la
                  rétention d&apos;argent ou la difficulté à se libérer
                  d&apos;une charge émotionnelle.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Uriner dans les toilettes :</strong> subsistance
                      abondante, bonne gestion des biens.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Uriner du sang :</strong> dépense liée à une
                      situation douloureuse, source de revenus à vérifier.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Uriner en public :</strong> indiscrétion,
                      exposition d&apos;affaires privées.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Retenir son urine :</strong> perte partielle
                      de biens ou rétention émotionnelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Uriner dans un lieu inconnu :</strong> changement
                      de vie, mariage potentiel selon Ibn Sirin.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir la compréhension des rêves en islam"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Toilettes */}
              {/* ============================================ */}
              <section id="toilettes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de toilettes en islam : intimité, secrets et
                  purification
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les toilettes dans un rêve islamique sont un lieu chargé
                  de symbolisme. Elles représentent l&apos;espace intime où
                  le croyant se débarrasse de ce qui est impur, tant sur le
                  plan physique que spirituel. An-Nabulsi y voit un miroir
                  de l&apos;état intérieur du rêveur : des toilettes propres
                  et isolées indiquent une bonne santé spirituelle, tandis
                  que des toilettes sales ou exposées signalent un malaise
                  profond.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le rêve de toilettes touche également à la notion de
                  secrets. Tout comme on s&apos;isole pour satisfaire un
                  besoin naturel, ce rêve peut évoquer des informations
                  confidentielles, des sentiments cachés ou des situations
                  que le rêveur préfère garder pour lui. Des toilettes sans
                  porte ou exposées avertissent que ces secrets risquent
                  d&apos;être découverts.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette vision onirique invite aussi à réfléchir au besoin
                  de purification rituelle. Comme le rappelle la{" "}
                  <Link href="/rever-mort-islam-messages" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">symbolique des rêves de mort en islam</Link>,
                  certains rêves troublants sont en réalité des appels à la
                  transformation intérieure et au renouveau spirituel.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de toilettes
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification onirique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Message spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Toilettes propres et isolées
                        </td>
                        <td className="py-3 pr-4">
                          Paix intérieure, bonne purification
                        </td>
                        <td className="py-3">
                          Équilibre spirituel maintenu
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Toilettes sales ou bouchées
                        </td>
                        <td className="py-3 pr-4">
                          Blocage, stagnation dans la vie
                        </td>
                        <td className="py-3">
                          Nécessité de repentance et de changement
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Toilettes sans porte
                        </td>
                        <td className="py-3 pr-4">
                          Secrets menacés, vie privée exposée
                        </td>
                        <td className="py-3">
                          Appel à la discrétion et à la pudeur
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nettoyer des toilettes
                        </td>
                        <td className="py-3 pr-4">
                          Effort de purification, richesse possible
                        </td>
                        <td className="py-3">
                          Récompense divine pour les efforts
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Toilettes pleines à déborder
                        </td>
                        <td className="py-3 pr-4">
                          Accumulation de soucis ou de péchés
                        </td>
                        <td className="py-3">
                          Urgence de la purification spirituelle
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Marcher dans les excréments */}
              {/* ============================================ */}
              <section id="marcher" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Marcher dans les excréments en rêve : richesse inattendue
                  selon Ibn Sirin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les interprétations les plus surprenantes de la
                  tradition islamique, celle de marcher dans les excréments
                  en rêve se distingue par son caractère paradoxal. Là où
                  le rêveur ressent du dégoût, Ibn Sirin y lit un signe
                  d&apos;abondance et de bonne fortune. Ce contraste entre
                  la répulsion initiale et la signification positive illustre
                  parfaitement la profondeur de la science onirique en islam.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Marcher involontairement dans les excréments annonce, selon
                  plusieurs interprètes, un revenu inattendu, un héritage
                  surprise ou un retour de fortune après une période de
                  restriction. Cette interprétation rejoint l&apos;idée que
                  les excréments, en tant que matière organique féconde,
                  symbolisent la fertilité et la prospérité dans le langage
                  onirique arabe.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi précise toutefois que le contexte reste
                  déterminant. Si le rêveur marche dans les excréments avec
                  joie ou indifférence, le signe est favorable. S&apos;il
                  ressent un profond dégoût et cherche à se nettoyer
                  frénétiquement, le rêve peut signaler la nécessité de
                  réévaluer certaines sources de revenus qui pourraient
                  manquer de licéité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Marcher sans s&apos;en rendre compte :</strong>{" "}
                      richesse qui arrive sans effort particulier.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Glisser dans les excréments :</strong> gain
                      rapide mais temporaire, vigilance recommandée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Marcher et se nettoyer ensuite :</strong>{" "}
                      obtention d&apos;un bien suivi d&apos;une purification
                      spirituelle nécessaire.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de chat en islam : symbolisme et signification"
                  description="Découvrez ce que symbolise le chat dans un rêve selon la tradition islamique et Ibn Sirin."
                  href="/rever-chat-islam-symbolisme"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Se souiller */}
              {/* ============================================ */}
              <section id="souillure" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se souiller avec des excréments en rêve : mises en garde
                  et repentance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si la plupart des rêves d&apos;excréments portent des
                  significations positives ou neutres, se souiller
                  volontairement ou être recouvert de matières fécales
                  dans un rêve constitue un avertissement sérieux. Ibn Sirin
                  y voit un signe d&apos;argent acquis de manière illicite,
                  de péchés accumulés ou d&apos;une réputation en péril.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette vision onirique interpelle le croyant sur la pureté
                  de ses intentions et la licéité de ses actes. Elle invite
                  à un examen de conscience approfondi, comparable à la
                  démarche du{" "}
                  <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">repentir sincère (tawba) en islam</Link>.
                  Le rêveur est encouragé à revenir vers Allah avec humilité
                  et à rectifier ce qui peut l&apos;être.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi ajoute que manger des excréments dans un rêve
                  peut annoncer une maladie ou un regret profond lié à des
                  paroles ou des actes passés. Il s&apos;agit d&apos;un des
                  rêves les plus explicites dans leur appel à la vigilance
                  spirituelle. La tradition recommande alors de multiplier
                  les istighfar (demandes de pardon) et de se rapprocher
                  des actes de dévotion.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Être couvert d&apos;excréments
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Signe de gains douteux ou de mauvaise réputation.
                        Invitation à vérifier la licéité de ses revenus et
                        à se purifier par l&apos;aumône et la prière.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Souiller ses vêtements
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Symbolise une atteinte à l&apos;honneur ou une
                        situation embarrassante qui pourrait survenir.
                        Conseil : renforcer la pudeur et la droiture dans
                        les affaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se nettoyer après la souillure
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Signe très positif : le repentir sera accepté,
                        la situation se clarifiera et le rêveur retrouvera
                        sa dignité et sa paix intérieure par la miséricorde
                        divine.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Selon le profil du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands interprètes musulmans insistent sur le fait
                  qu&apos;un même rêve ne porte pas la même signification
                  selon le profil du rêveur. L&apos;âge, le sexe, la
                  situation familiale et la condition spirituelle influencent
                  considérablement la lecture du rêve. Voici les principales
                  distinctions rapportées par la tradition.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver d&apos;excréments ou de toilettes peut symboliser
                      la libération d&apos;un poids émotionnel, la fin d&apos;une
                      relation nocive ou l&apos;approche d&apos;un changement
                      positif. Ce rêve invite à la confiance en la destinée
                      et à la patience dans l&apos;attente du meilleur.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut évoquer un soulagement familial, la
                      résolution d&apos;un conflit au foyer ou un gain
                      financier bénéfique au ménage. Des toilettes propres
                      indiquent une harmonie retrouvée, tandis que des
                      toilettes sales invitent au dialogue et à la
                      purification de l&apos;atmosphère conjugale.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve d&apos;excréments pendant la grossesse est
                      souvent lié au processus naturel de transformation
                      et de préparation à la naissance. Il peut signifier
                      que le corps et l&apos;esprit se purifient en prévision
                      de l&apos;arrivée du bébé. Un signe de bonne santé
                      spirituelle.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve touche souvent à la sphère financière et
                      professionnelle. Il peut annoncer un revenu, une
                      transaction bénéfique ou, dans le cas d&apos;une
                      souillure, une mise en garde contre des affaires
                      douteuses. L&apos;homme est invité à la droiture dans
                      ses transactions et à la générosité envers les siens.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Actions recommandées */}
              {/* ============================================ */}
              <section id="actions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Actions recommandées après un rêve d&apos;excréments ou
                  de toilettes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La tradition islamique offre un cadre clair pour réagir
                  après un rêve troublant. Que le rêve soit porteur de bon
                  augure ou de mise en garde, certaines actions permettent
                  au croyant de tirer le meilleur parti de cette expérience
                  nocturne et de renforcer son lien avec Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Effectuer les ablutions et prier
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dès le réveil, accomplir les ablutions (wudhu)
                        purifie le corps et l&apos;esprit. Enchaîner avec
                        deux unités de prière surérogatoire aide à retrouver
                        la sérénité et à confier le rêve à Allah.
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
                        Les sourates Al-Falaq et An-Nas, ainsi que le verset
                        du Trône (Ayat al-Kursi), offrent une protection
                        contre les mauvais rêves et apaisent le cœur du
                        croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire l&apos;aumône (sadaqa)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;aumône après un rêve troublant est une pratique
                        recommandée. Elle purifie les biens, éloigne les
                        malheurs et transforme l&apos;inquiétude en action
                        bienfaisante.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas raconter un mauvais rêve à n&apos;importe qui
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a enseigné
                        de ne partager un mauvais rêve qu&apos;avec une
                        personne de science ou de confiance. Raconter le
                        rêve à tous peut amplifier son effet négatif.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Multiplier l&apos;istighfar (demande de pardon) tout
                      au long de la journée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Consulter un imam ou un savant si le rêve se répète
                      fréquemment.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Vérifier la licéité de ses revenus et corriger ce
                      qui doit l&apos;être.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Pratiquer un jeûne surérogatoire pour apaiser
                      l&apos;âme et se rapprocher d&apos;Allah.
                    </span>
                  </li>
                </ul>

                {/* Tableau actions recommandées */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action après le rêve
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bénéfice spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Ablutions et prière
                        </td>
                        <td className="py-3">
                          Purification immédiate, sérénité retrouvée
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sourates protectrices
                        </td>
                        <td className="py-3">
                          Protection contre les mauvais rêves
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Aumône (sadaqa)
                        </td>
                        <td className="py-3">
                          Purification des biens, éloignement du malheur
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Istighfar et repentance
                        </td>
                        <td className="py-3">
                          Rapprochement d&apos;Allah, apaisement du cœur
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de mort en islam
                  </Link>
                  <Link
                    href="/rever-chat-islam-symbolisme"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de chat en islam
                  </Link>
                  <Link
                    href="/rever-rat-islam-purification"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de rat en islam
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
                    href="/repentir-sincere-islam-tawba"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le repentir sincère (tawba)
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Les rêves en islam
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
