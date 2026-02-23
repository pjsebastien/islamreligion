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
    "Rêver de rat en islam : mise en garde et purification spirituelle",
  description:
    "Découvrez la signification de rêver de rat en islam : symboles d'avertissement, purification spirituelle et conseils pour interpréter ce rêve.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-rat-islam-purification",
  },
};

const tocItems = [
  { id: "interpretations", label: "Interprétations authentiques" },
  { id: "purification", label: "Purification et actions concrètes" },
  { id: "impact", label: "Impact sur la vie quotidienne" },
  { id: "conseils", label: "Conseils pour la paix intérieure" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de rat en islam ?",
    answer:
      "En islam, rêver de rat évoque fréquemment une mise en garde contre les dangers, les manipulations ou les présences malsaines dans l'entourage. La couleur, le comportement et le contexte du rat précisent la nature du message, oscillant entre menace et espoir de transformation spirituelle.",
  },
  {
    question: "Rêver de rat noir en islam : quelle signification ?",
    answer:
      "Le rat noir dans un rêve islamique signale souvent un danger caché, une tromperie ou une baisse de vitalité spirituelle. Ce rêve invite à la protection, au retrait des mauvaises compagnies et au renforcement des invocations protectrices.",
  },
  {
    question: "Rêver de tuer un rat en islam : est-ce positif ?",
    answer:
      "Oui, tuer un rat dans un rêve est généralement interprété comme la victoire sur un ennemi, la purge des mauvaises influences ou le triomphe sur une faiblesse personnelle. Ce rêve symbolise le renforcement de la foi et des protections rituelles.",
  },
  {
    question: "Rêver de rat blanc en islam : quelle signification ?",
    answer:
      "Le rat blanc apparaît parfois comme porteur d'espoir, de paix retrouvée ou de résolution de conflits. Contrairement au rat noir, il peut indiquer une ouverture à la réconciliation et une période de gratitude à venir.",
  },
  {
    question: "Que faire après un rêve de rat en islam ?",
    answer:
      "Après un rêve de rat, il est recommandé de réciter les invocations de protection (sourates Al-Falaq et An-Nas), d'effectuer les ablutions, de faire l'aumône pour apaiser le cœur et de multiplier les demandes de pardon. Un bilan relationnel peut aussi être bénéfique.",
  },
  {
    question: "Rêver d'être mordu par un rat en islam : que signifie-t-il ?",
    answer:
      "La morsure de rat dans un rêve islamique est un avertissement contre les relations toxiques. Ce rêve invite à la vigilance accrue envers les proches ou collègues et à la recherche de la paix intérieure par la prière et l'éloignement des influences négatives.",
  },
  {
    question: "Rêver de rats dans la maison en islam : quelle interprétation ?",
    answer:
      "Des rats dans la maison en rêve symbolisent des problèmes familiaux, des intrusions ou des désaccords au sein du foyer. Ce rêve invite au dialogue, à la recherche de solutions et à la purification de l'environnement par les invocations coraniques.",
  },
  {
    question: "Quelle est la différence entre rêver de souris et de rat en islam ?",
    answer:
      "La souris en rêve évoque souvent des craintes cachées, de petites difficultés ou la méfiance. Le rat, plus imposant, symbolise des menaces plus sérieuses, des ennemis actifs ou des manipulations plus profondes. Les deux invitent à la vigilance et à la purification spirituelle.",
  },
];

export default function ReverRat() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-rat-islam-purification/#article",
        headline:
          "Rêver de rat en islam : mise en garde et purification spirituelle",
        description:
          "Découvrez la signification de rêver de rat en islam : symboles d'avertissement, purification spirituelle et conseils.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/10/Rever-de-rat-en-islam-mise-en-garde-et-purification-spirituelle.jpg",
        datePublished: "2025-10-03",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-rat-islam-purification/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-rat-islam-purification/#breadcrumb",
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
            name: "Rêver de rat",
            item: "https://www.islamreligion.fr/rever-rat-islam-purification",
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
          title="Rêver de rat en islam : mise en garde et purification spirituelle"
          subtitle="Signification du rêve de rat selon la tradition islamique, Ibn Sirin et les textes sacrés."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/10/Rever-de-rat-en-islam-mise-en-garde-et-purification-spirituelle.jpg"
          imageAlt="Rêver de rat en islam, mise en garde et purification spirituelle"
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
                <span className="text-foreground">Rêver de rat</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le rêve de rat en islam ne laisse personne indifférent.
                  Souvent porteur de mises en garde, ce symbole onirique
                  interpelle par sa charge négative, mais il ouvre aussi la voie
                  à la purification spirituelle. La couleur, le comportement et
                  le contexte du rat précisent la nature du message, oscillant
                  entre menace et espoir de transformation.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Interprétations authentiques */}
              {/* ============================================ */}
              <section id="interpretations" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de rat en islam : interprétations authentiques selon
                  Ibn Sirin
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans l&apos;univers des{" "}
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves spirituels en islam</Link>,
                  le rat se trouve
                  souvent chargé d&apos;une symbolique puissante dans le
                  contexte islamique. Ce rongeur, qui suscite fréquemment
                  l&apos;aversion, apparaît en rêve comme un messager ambigu.
                  Les savants, tels qu&apos;Ibn Sirin, y voient parfois la
                  représentation d&apos;un ennemi malin ou d&apos;une personne
                  aux intentions troubles.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La couleur du rat dans le rêve est loin d&apos;être un détail
                  anecdotique. Un rat noir signale bien souvent un danger caché,
                  une tromperie ou même une baisse de vitalité spirituelle. Le
                  rat gris, quant à lui, symbolise la méfiance face à une
                  personne apparemment respectable mais en réalité suspecte. À
                  l&apos;inverse, un rat blanc apparaît parfois comme porteur
                  d&apos;espoir, de paix retrouvée ou de résolution de conflits.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rat courant dans le rêve :</strong> menaces
                      cachées ou peurs inconscientes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rat dans la maison :</strong> désaccords
                      familiaux, méfiance envers l&apos;entourage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Morsure de rat :</strong> vigilance accrue envers
                      les proches ou collègues.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Gros rat :</strong> opportunités matérielles,
                      mais risque d&apos;avidité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rat apprivoisé :</strong> maîtrise des peurs
                      personnelles, besoin de plus d&apos;équilibre.
                    </span>
                  </li>
                </ul>

                {/* Tableau éléments du rêve */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Élément du rêve
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
                          Rat noir
                        </td>
                        <td className="py-3 pr-4">
                          Tromperie, danger caché
                        </td>
                        <td className="py-3">
                          Protection, retrait des mauvaises compagnies
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rat blanc
                        </td>
                        <td className="py-3 pr-4">
                          Espoir, résolution de conflits
                        </td>
                        <td className="py-3">
                          Ouverture à la réconciliation, gratitude
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Morsure de rat
                        </td>
                        <td className="py-3 pr-4">
                          Avertissement, relations toxiques
                        </td>
                        <td className="py-3">
                          Vigilance, recherche de paix intérieure
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tuer un rat
                        </td>
                        <td className="py-3 pr-4">
                          Purge des mauvaises influences
                        </td>
                        <td className="py-3">
                          Renforcement de la foi et des protections rituelles
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rat dans la maison
                        </td>
                        <td className="py-3 pr-4">
                          Problèmes familiaux, intrusions
                        </td>
                        <td className="py-3">
                          Dialogue, purification de l&apos;environnement
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/10/Rever-de-rat-en-islam-mise-en-garde-et-purification-spirituelle-1.jpg"
                    alt="Interprétation du rêve de rat en islam selon Ibn Sirin"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Purification et actions */}
              {/* ============================================ */}
              <section id="purification" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Purification et actions concrètes après un rêve de rat
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le message d&apos;un rat qui apparaît en rêve ne devrait
                  jamais être ignoré, car il s&apos;agit d&apos;une véritable
                  veille spirituelle imposée par la sagesse islamique. Certains
                  rêveurs associent cette vision à une forme de{" "}
                  <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">sorcellerie ou de mauvais oeil nécessitant une protection</Link>.
                  Mais comment y réagir concrètement ? Plusieurs pistes peuvent être
                  explorées pour transformer l&apos;inquiétude en croissance
                  intérieure.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Renouer avec la prière et la protection rituelle
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dès le réveil, il est recommandé de réciter les
                        invocations de protection (sourates Al-Falaq et An-Nas)
                        et d&apos;effectuer les ablutions si l&apos;angoisse
                        persiste.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Pratiquer l&apos;autocritique constructive
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le rat peut symboliser une habitude nocive, une
                        jalousie non avouée ou une relation toxique. Il
                        s&apos;agit d&apos;un appel à la remise en question
                        pour progresser dans son harmonie intérieure. Le{" "}
                        <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">repentir sincère (tawba)</Link>
                        {" "}accompagne utilement cette démarche.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Valoriser l&apos;apprentissage progressif
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le rêve de rat prouve parfois que la discipline
                        intérieure doit être ravivée. En faire le ménage dans
                        ses priorités devient un acte de purification
                        spirituelle.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Faire l&apos;aumône pour apaiser le cœur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Multiplier les demandes de pardon dans les
                      prosternations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Prendre le temps d&apos;un bilan relationnel, écarter
                      l&apos;influence néfaste.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Consacrer du temps à l&apos;écoute et à
                      l&apos;accompagnement de personnes fragilisées.
                    </span>
                  </li>
                </ul>

                {/* Tableau gestes positifs */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Gestes positifs après un rêve de rat
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Impact sur l&apos;équilibre spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lecture du Coran à voix haute
                        </td>
                        <td className="py-3">
                          Renouvelle la confiance en Allah, éloigne les
                          tentations
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nettoyage de la maison
                        </td>
                        <td className="py-3">
                          Symbolise la volonté de purifier son environnement
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Recours à un imam pour conseil
                        </td>
                        <td className="py-3">
                          Permet de contextualiser le rêve et d&apos;éviter les
                          fausses pistes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/10/Rever-de-rat-en-islam-mise-en-garde-et-purification-spirituelle-2.jpg"
                    alt="Purification spirituelle après un rêve de rat en islam"
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
              {/* SECTION 3 : Impact vie quotidienne */}
              {/* ============================================ */}
              <section id="impact" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;impact du rêve de rat sur la vie quotidienne :
                  vigilance et confiance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Certains se demandent si faire un rêve de rat en islam est
                  forcément un mauvais présage. D&apos;autres rêves d&apos;animaux
                  nuisibles, comme{" "}
                  <Link href="/rever-poux-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver de poux en islam</Link>,
                  portent également un message de purification. Les traditions et les
                  commentaires contemporains rappellent qu&apos;il s&apos;agit
                  d&apos;abord d&apos;un signe destiné à réveiller une
                  vigilance, mais jamais à enfermer dans la peur ou la
                  culpabilité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réévaluation des fréquentations :</strong> fuir
                      les amitiés sources de rumeurs ou de disputes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ordre domestique :</strong> une maison en paix
                      attire la bénédiction et dissuade les influences
                      négatives.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Entretien du lien conjugal :</strong> faire écho
                      au{" "}
                      <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">contrat du mariage en islam</Link>,
                      fondé sur la confiance et la transparence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dialogue communautaire :</strong> solliciter un
                      imam ou un aîné en cas de rêves récurrents.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Remise en question personnelle :</strong> lutter
                      contre l&apos;envie et renforcer la prière.
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
              {/* SECTION 4 : Conseils paix intérieure */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pour cultiver la paix intérieure et la protection
                  rituelle
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  S&apos;interroger sur la signification profonde d&apos;un
                  rêve de rat, c&apos;est aussi ouvrir la voie à une
                  interprétation pure qui ne se limite pas à la peur ou à la
                  superstition. Tout comme le{" "}
                  <Link href="/reve-arachnide-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêve d&apos;araignée</Link>,
                  chaque expérience nocturne en islam
                  porte un message pour construire ou reconstruire
                  l&apos;harmonie dans la vie du croyant.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Prendre le temps de décrire le rêve par écrit : la
                      mémoire du détail aide à en saisir le message.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Partager avec un proche de confiance, sans crainte
                      d&apos;être jugé.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Éviter toute précipitation dans l&apos;interprétation ou
                      la prise de décisions majeures.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Inclure, si besoin, un jeûne surérogatoire pour apaiser
                      l&apos;âme.
                    </span>
                  </li>
                </ul>

                {/* Tableau surprises oniriques */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Surprise onirique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification islamique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Outil de protection
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir un rat et pleurer
                        </td>
                        <td className="py-3 pr-4">
                          Pardon, soulagement à venir
                        </td>
                        <td className="py-3">
                          Supplication, lecture de la Sourate Al-Baqarah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fuir un rat
                        </td>
                        <td className="py-3 pr-4">
                          Difficulté surmontable sous peu
                        </td>
                        <td className="py-3">
                          Aumône discrète et constante
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir des rats morts
                        </td>
                        <td className="py-3 pr-4">
                          Libération des soucis persistants
                        </td>
                        <td className="py-3">
                          Consultation d&apos;un imam pour interprétation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/10/Rever-de-rat-en-islam-mise-en-garde-et-purification-spirituelle-3.jpg"
                    alt="Conseils pour la paix intérieure après un rêve de rat en islam"
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
                  Un même rêve de rat ne porte pas la même signification selon
                  la personne qui le fait. Les grands interprètes tiennent
                  compte de la situation personnelle du rêveur pour affiner
                  leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rat peut symboliser une personne de l&apos;entourage
                      aux intentions douteuses. Ce rêve invite à la vigilance
                      dans les relations et à se rapprocher des personnes de
                      confiance avant de s&apos;engager.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Des rats dans la maison peuvent symboliser des tensions
                      conjugales ou familiales. Ce rêve encourage le dialogue
                      ouvert avec son époux et la purification de
                      l&apos;environnement par les invocations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut refléter les angoisses naturelles de la
                      grossesse. Il invite à multiplier les invocations de
                      protection et à s&apos;entourer de personnes
                      bienveillantes. Un rat tué dans le rêve est un signe
                      positif de force et de résilience.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rat peut évoquer un concurrent déloyal au travail ou
                      un faux ami dans l&apos;entourage. Ce rêve invite à
                      revoir ses alliances professionnelles et à garder pour
                      soi ses projets face à une atmosphère de jalousie.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
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
                    href="/rever-chien-islam-signification"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de chien en islam
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
