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
    "Rêver d'un mort en islam : messages de l'au-delà et invocations conseillées",
  description:
    "Découvrez la signification de rêver d'un mort en islam, les messages de l'au-delà et les invocations à privilégier pour les défunts.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-mort-islam-messages",
  },
};

const tocItems = [
  { id: "significations", label: "Significations spirituelles" },
  { id: "symboles", label: "Paroles, objets et symboles" },
  { id: "invocations", label: "Invocations et prières" },
  { id: "role", label: "Rôle des rêves dans la foi" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Rêver d'un mort en islam est-il un mauvais signe ?",
    answer:
      "Non, rêver d'un mort en islam n'annonce pas forcément un malheur. Ce type de rêve véhicule souvent des messages de l'au-delà et appelle à réfléchir sur sa foi et sa relation avec Allah. Un défunt souriant est même un signe positif, indiquant un bon état spirituel dans l'au-delà.",
  },
  {
    question: "Que signifie rêver d'un mort qui parle en islam ?",
    answer:
      "Selon la tradition islamique, un mort qui parle dans un rêve transmet souvent un message véridique. Le contenu et le ton de ses paroles peuvent révéler une guidance spirituelle, un avertissement ou une demande d'invocations. Les savants recommandent de prêter attention à ce message et d'agir en conséquence.",
  },
  {
    question: "Que faire après avoir rêvé d'un défunt en islam ?",
    answer:
      "Après un rêve de défunt, il est recommandé de réciter la Fatiha pour l'âme du disparu, de faire une aumône en son nom (sadaqah jariyah), de lire le Coran et de multiplier les invocations de pardon. Si le défunt semblait souffrir, cela invite à redoubler de prières et de charité en son nom.",
  },
  {
    question: "Que signifie un mort qui sourit dans un rêve islamique ?",
    answer:
      "Un mort qui sourit dans un rêve est un signe très positif en islam. Il indique généralement que le défunt est dans un bon état spirituel dans l'au-delà, qu'il a trouvé la paix et la miséricorde d'Allah. Ce rêve est une source de réconfort pour le rêveur.",
  },
  {
    question: "Rêver d'un mort qui donne un objet : quelle signification ?",
    answer:
      "Recevoir un objet d'un défunt dans un rêve a une signification particulière selon la nature de l'objet. De l'argent ou un bijou peut signifier un apport matériel ou un conseil de sagesse. Un livre invite à rechercher la connaissance. De la nourriture est souvent un appel à réaliser une aumône continue au nom du défunt.",
  },
  {
    question: "Quelles invocations réciter pour un mort vu en rêve ?",
    answer:
      "Les invocations recommandées incluent la récitation de la Fatiha, la formule \"Allahumma ighfir lahu wa rhamhu\" (Ô Allah, pardonne-lui et fais-lui miséricorde), la sadaqah jariyah (aumône continue) et la lecture du Coran au nom du défunt. Le jeûne du lundi ou du jeudi peut aussi être dédié au défunt.",
  },
  {
    question: "Rêver d'embrasser un mort en islam : que signifie-t-il ?",
    answer:
      "Selon Ibn Sirin, rêver d'embrasser un défunt connu peut indiquer la réception d'un bienfait spirituel ou matériel lié à cette personne. C'est souvent un signe de connexion forte avec le défunt et un rappel de maintenir les liens par la prière et la charité.",
  },
  {
    question: "Pourquoi rêve-t-on souvent d'un parent décédé en islam ?",
    answer:
      "Rêver fréquemment d'un parent décédé peut indiquer que le défunt a besoin d'invocations, d'aumônes ou de prières en son nom. Cela peut aussi refléter le processus de deuil naturel du rêveur. Les savants recommandent de multiplier les actes de bienfaisance pour l'âme du parent et de consulter un imam si les rêves persistent.",
  },
];

export default function ReverMort() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-mort-islam-messages/#article",
        headline:
          "Rêver d'un mort en islam : messages de l'au-delà et invocations conseillées",
        description:
          "Découvrez la signification de rêver d'un mort en islam, les messages de l'au-delà et les invocations à privilégier pour les défunts.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-dun-mort-en-islam-messages-de-lau-dela-et-invocations-conseillees.jpg",
        datePublished: "2025-09-03",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-mort-islam-messages/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-mort-islam-messages/#breadcrumb",
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
            name: "Rêver d'un mort",
            item: "https://www.islamreligion.fr/rever-mort-islam-messages",
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
          title="Rêver d'un mort en islam : messages de l'au-delà et invocations conseillées"
          subtitle="Signification du rêve de défunt selon la tradition islamique, invocations et prières recommandées."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-dun-mort-en-islam-messages-de-lau-dela-et-invocations-conseillees.jpg"
          imageAlt="Rêver d'un mort en islam, messages de l'au-delà et invocations conseillées"
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
                <span className="text-foreground">Rêver d&apos;un mort</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver d&apos;un mort en islam bouleverse et intrigue, mais
                  suscite aussi un désir de compréhension profonde. Ce type de
                  rêve n&apos;annonce pas forcément un malheur : il véhicule
                  souvent des messages de l&apos;au-delà et appelle à réfléchir
                  sur sa foi, sur l&apos;importance des invocations pour les
                  défunts et des actes de charité en leur nom.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Significations spirituelles */}
              {/* ============================================ */}
              <section id="significations" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Significations spirituelles du rêve de défunt : les
                  enseignements profonds en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition islamique, le rêve de défunt occupe une
                  place majeure parmi les expériences oniriques. Contrairement à
                  certaines préoccupations populaires, rêver d&apos;un mort en
                  islam ne doit pas être perçu systématiquement comme une
                  annonce tragique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La signification est largement spirituelle : il s&apos;agit
                  souvent d&apos;un appel à l&apos;introspection, à la
                  réévaluation de son rapport à Allah et à la vie éternelle,
                  mais aussi d&apos;un rappel affectueux de la valeur du{" "}
                  <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">repentir sincère</Link>{" "}
                  et de la prière pour les défunts. Beaucoup de frères
                  et sœurs interrogent ces songes, spécialement lorsqu&apos;ils
                  concernent un parent proche ou une personne disparue
                  récemment.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Messages des morts : que veulent-ils transmettre ?
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Souvent, le défunt se manifeste dans un état apaisé ou
                  souriant, suggérant une paix dans l&apos;au-delà et rassurant
                  sur son sort. Il arrive cependant qu&apos;il formule une
                  requête précise, comme demander des invocations, des aumônes
                  en son nom ou inviter à réparer un tort passé. Il est
                  recommandé d&apos;accueillir ces messages sans panique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un mort souriant</strong> : signe positif, évoque
                      une condition apaisée du défunt.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un mort triste ou silencieux</strong> : peut
                      indiquer un besoin de supplications après décès ou de
                      réparation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un mort qui parle</strong> : le contenu et le ton
                      du message peuvent révéler une guidance spirituelle ou un
                      avertissement du monde invisible.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La répétition d&apos;un rêve</strong> : incite à
                      la vigilance quant à sa propre pratique religieuse.
                    </span>
                  </li>
                </ul>

                {/* Tableau situations */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Situation dans le rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Interprétation courante
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Actions recommandées
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le défunt sourit
                        </td>
                        <td className="py-3 pr-4">
                          Bon état spirituel du défunt, apaisement
                        </td>
                        <td className="py-3">
                          Prier, remercier Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le défunt demande une faveur
                        </td>
                        <td className="py-3 pr-4">
                          Besoin d&apos;invocations / sadaqa
                        </td>
                        <td className="py-3">
                          Invocation, aumône au nom du défunt
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le défunt est muet
                        </td>
                        <td className="py-3 pr-4">
                          Message subtil, appel au repentir
                        </td>
                        <td className="py-3">
                          Réflexion sur sa pratique religieuse
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le défunt paraît souffrir
                        </td>
                        <td className="py-3 pr-4">
                          Regrets, besoin de prières supplémentaires
                        </td>
                        <td className="py-3">
                          Prière et charité abondantes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Toute interprétation spirituelle exige prudence et humilité.
                  C&apos;est une approche de miséricorde qu&apos;enseigne
                  l&apos;islam, particulièrement face à l&apos;inconnu de
                  l&apos;au-delà. Pour mieux comprendre les fondements de cette science onirique, consultez notre{" "}
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet sur les rêves en islam</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-dun-mort-en-islam-messages-de-lau-dela-et-invocations-conseillees-1.jpg"
                    alt="Signification spirituelle du rêve de défunt en islam, messages de l'au-delà"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Paroles, objets et symboles */}
              {/* ============================================ */}
              <section id="symboles" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétations islamiques des visions oniriques : paroles,
                  objets et symboles dans le rêve de défunt
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque détail d&apos;un rêve impliquant un défunt revêt une
                  dimension singulière en islam. D&apos;après les enseignements
                  d&apos;Ibn Sirin, pionnier dans l&apos;interprétation
                  islamique, il existe plusieurs clés de lecture selon la nature
                  des échanges et les objets, paroles ou gestes survenus dans
                  cet espace onirique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Par exemple, rêver d&apos;embrasser un défunt connu peut
                  indiquer la réception d&apos;un bienfait spirituel, alors que
                  voir un défunt offrir un objet a potentiellement une
                  signification plus spécifique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Symbolique des objets donnés par un mort
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Argent ou bijou</strong> : peut signifier apport
                      matériel ou conseil de sagesse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Livre ou lettre</strong> : invitation à rechercher
                      la connaissance ou à transmettre un message important.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Nourriture</strong> : parfois, appel à réaliser
                      une <em>sadaqah jariyah</em> (aumône continue) au nom du
                      défunt.
                    </span>
                  </li>
                </ul>

                {/* Tableau objets */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Objet donné par le défunt
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification possible
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Actions suggérées
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Livre
                        </td>
                        <td className="py-3 pr-4">
                          Sagesse transmise, message d&apos;apprentissage
                        </td>
                        <td className="py-3">
                          Lire le Coran, augmenter la science
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Argent / marchandise
                        </td>
                        <td className="py-3 pr-4">
                          Bénéfice matériel ou conseil sur la gestion personnelle
                        </td>
                        <td className="py-3">
                          Aumône pour le défunt ou pour soi
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nourriture
                        </td>
                        <td className="py-3 pr-4">
                          Soulagement du défunt par la charité
                        </td>
                        <td className="py-3">
                          Repas ou don pour les nécessiteux
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si le rêveur reçoit un objet précieux d&apos;un proche
                  disparu, cela peut indiquer que le défunt souhaite que
                  l&apos;on perpétue l&apos;héritage de son caractère ou de ses
                  valeurs religieuses. Ainsi, le rêve de défunt agit comme un
                  révélateur de liens intergénérationnels et de la permanence de
                  l&apos;influence spirituelle même après la mort.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;écoute des messages des morts doit toujours inviter à
                  renforcer les prières pour le défunt et à multiplier les
                  invocations, offrant ainsi paix et élévation à l&apos;âme du
                  défunt, et consolation au rêveur. Ces visions rappellent parfois les{" "}
                  <Link href="/rever-tirer-dessus-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves d&apos;épreuves violentes</Link>{" "}
                  où le message spirituel prime sur la peur immédiate. La sagesse islamique
                  rappelle que chaque rêve recèle une opportunité
                  d&apos;approfondir la foi et de raffermir sa connexion au
                  Créateur.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-dun-mort-en-islam-messages-de-lau-dela-et-invocations-conseillees-2.jpg"
                    alt="Symboles et objets dans le rêve de défunt en islam, interprétation spirituelle"
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
              {/* SECTION 3 : Invocations et prieres */}
              {/* ============================================ */}
              <section id="invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations et prières recommandées après un rêve de défunt
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Après avoir reçu un message des morts à travers un rêve,
                  nombreux sont ceux qui s&apos;interrogent sur les actions
                  justes à entreprendre. L&apos;islam éclaire le fidèle avec
                  des invocations authentiques, des supplications après décès et
                  des pratiques recommandées pour apporter apaisement au défunt
                  et consentement au rêveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition prophétique met en avant la recommandation de
                  réciter des prières pour le défunt immédiatement à
                  l&apos;issue d&apos;un rêve marquant. Ces actes
                  s&apos;inscrivent dans la continuité de la miséricorde divine,
                  clé de voûte de la spiritualité musulmane.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Principales invocations pour les morts
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Récitation de la Fatiha
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Pour l&apos;âme du défunt, à réciter après chaque prière
                      ou au réveil.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Invocation de pardon
                    </p>
                    <p className="mt-1 text-sm italic text-foreground-secondary">
                      &quot;Allahumma ighfir lahu, wa rhamhu, wa &apos;afihi wa
                      &apos;fu &apos;anhu&quot;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      (Ô Allah, pardonne-lui, fais-lui miséricorde, accorde-lui
                      le pardon et le repos.)
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Sadaqah jariyah
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Offrir une aumône continue au nom du défunt, dont la
                      récompense lui parvient dans l&apos;au-delà.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Du&apos;a de la sourate Ibrahim (verset 41)
                    </p>
                    <p className="mt-1 text-sm italic text-foreground-secondary">
                      &quot;Rabbi ighfirli wa li-walidayya wa lil-mu&apos;minina
                      yawma yaqum al-hisab&quot;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      (Seigneur, pardonne-moi, à mes parents et aux croyants le
                      Jour du Jugement.)
                    </p>
                  </div>
                </div>

                {/* Tableau invocations */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type d&apos;invocation ou acte
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bénéfice spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lecture du Coran
                        </td>
                        <td className="py-3">
                          Élévation de l&apos;âme du défunt
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sadaqah (aumône)
                        </td>
                        <td className="py-3">
                          Récompense continue dans l&apos;au-delà
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Prière de janazah (funéraire)
                        </td>
                        <td className="py-3">
                          Effacement des péchés du défunt
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Pèlerinage ou omra au nom du défunt
                        </td>
                        <td className="py-3">
                          Délivrance et prestige spirituel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque prière offerte, chaque invocation récitée compte
                  énormément aux yeux d&apos;Allah. Qu&apos;Il vous facilite ce
                  cheminement de piété et de miséricorde. Les supplications
                  après décès devraient s&apos;accompagner d&apos;actes de
                  charité et de réflexion sur sa propre destinée.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Pleurer en rêve en islam : compassion divine et intercession"
                  description="Découvrez la signification des larmes dans un rêve selon la tradition islamique."
                  href="/pleurer-reve-islam-compassion"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Role des reves dans la foi */}
              {/* ============================================ */}
              <section id="role" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le rôle des rêves dans la foi islamique : sens, réflexions et
                  bénéfices spirituels
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Dans le cheminement du croyant, le rêve de défunt
                  s&apos;inscrit dans une dynamique de croissance spirituelle et
                  de prise de conscience. L&apos;islam enseigne que les rêves
                  sont l&apos;un des moyens par lesquels Allah peut avertir,
                  orienter ou réconforter Ses serviteurs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un rêve marqué par la présence d&apos;un défunt, par des
                  messages des morts ou par des échanges remplis de symbolisme,
                  interroge le croyant sur le sens de la vie mortelle et sur la{" "}
                  <Link href="/fin-monde-islam-preparation" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">préparation de l&apos;au-delà</Link>. La plupart des guides
                  spirituels encouragent à lire ces expériences comme des appels
                  à plus de recul, de purification intérieure et de renforcement
                  de la relation à Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Avantages spirituels des visions de morts en rêve
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prise de conscience de l&apos;impermanence</strong> :
                      invitation à vivre dans la gratitude et la piété.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Stimulation du repentir</strong> : les rappels de
                      la mort poussent à renouveler ses actes de piété, à l&apos;image de ce que provoque{" "}
                      <Link href="/signification-reve-tuer-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver de tuer en islam</Link>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Renforcement des liens familiaux</strong> :
                      prolongement de la relation par la prière et la charité
                      posthume.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Capacité à surmonter le deuil grâce à la spiritualité.
                    </span>
                  </li>
                </ul>

                {/* Tableau benefices */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bénéfice du rêve de défunt
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Réflexion à mener
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Changement concret
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Éveil du cœur
                        </td>
                        <td className="py-3 pr-4">
                          Se rappeler que la vie est éphémère
                        </td>
                        <td className="py-3">
                          Renouveler sa foi, prier davantage
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Appel au don ou à l&apos;aumône
                        </td>
                        <td className="py-3 pr-4">
                          Valoriser la charité pour les vivants comme pour les
                          morts
                        </td>
                        <td className="py-3">
                          Répartir ses biens, faire des dons réguliers
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Favoriser la paix intérieure
                        </td>
                        <td className="py-3 pr-4">
                          Guérir un deuil, accepter la volonté divine
                        </td>
                        <td className="py-3">
                          Aider d&apos;autres personnes endeuillées
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est fréquent d&apos;entendre la célèbre phrase : &quot;Celui
                  qui se souvient de la mort, son cœur s&apos;adoucit et il
                  s&apos;élève.&quot; À chaque rêve de mort, l&apos;opportunité
                  de grandir et de se recentrer sur l&apos;essentiel se
                  présente. Les musulmans sont invités à chérir ces songes et à
                  les transformer en semences fécondes de foi, de paix et de
                  pardon.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Selon le profil du reveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de défunt ne porte pas la même signification
                  selon la personne qui le fait. Les interprètes musulmans
                  tiennent compte du contexte personnel du rêveur pour affiner
                  leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver d&apos;un défunt peut refléter une quête de
                      guidance, un besoin de réconfort face à l&apos;avenir ou
                      un rappel de la valeur des liens familiaux. Si le défunt
                      sourit, c&apos;est un signe de protection.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut traduire le besoin de renforcer les liens
                      familiaux ou de perpétuer les valeurs transmises par le
                      défunt. Il invite à multiplier les invocations et les
                      actes de charité en son nom.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver d&apos;un défunt pendant la grossesse peut
                      symboliser la continuité de la vie et le passage des
                      générations. C&apos;est souvent un rappel de la
                      miséricorde divine et un encouragement à prier pour le
                      bébé à naître.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut refléter un processus de deuil, une
                      responsabilité héritée ou un appel à perpétuer les bonnes
                      actions du défunt. Il invite à multiplier la charité et
                      la lecture du Coran en son nom.
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
                    href="/pleurer-reve-islam-compassion"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Pleurer en rêve en islam
                  </Link>
                  <Link
                    href="/rever-tirer-dessus-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Se faire tirer dessus en islam
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie en islam
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
