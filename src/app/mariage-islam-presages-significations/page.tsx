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
    "Rêver de mariage en islam : présages heureux et significations selon la tradition",
  description:
    "Que signifie rêver de mariage en islam ? Interprétation selon Ibn Sirin, présages selon le contexte du rêveur, robe, alliance, lieu, émotions et conseils pratiques.",
  alternates: {
    canonical:
      "https://www.islamreligion.fr/mariage-islam-presages-significations",
  },
};

const tocItems = [
  { id: "signification", label: "Que signifie rêver de mariage en islam ?" },
  { id: "ibn-sirin", label: "Selon Ibn Sirin et les grands savants" },
  { id: "propre-mariage", label: "Rêver de son propre mariage" },
  { id: "mariage-proche", label: "Mariage d'un proche ou d'un inconnu" },
  { id: "details", label: "Les détails qui changent tout" },
  { id: "que-faire", label: "Que faire après un rêve de mariage" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Que signifie rêver de mariage en islam pour une femme célibataire ?",
    answer:
      "Pour une femme célibataire, rêver de mariage en islam est souvent un signe positif. Selon Ibn Sirin, cela peut annoncer un mariage prochain, un changement de situation favorable ou une élévation spirituelle. Si la cérémonie est joyeuse et lumineuse, le présage est d'autant plus heureux. Toutefois, si le rêve provoque de l'angoisse ou si la cérémonie se passe mal, il convient de prier et de demander la guidance d'Allah avant toute interprétation hâtive.",
  },
  {
    question:
      "Que signifie rêver de son propre mariage quand on est déjà marié(e) ?",
    answer:
      "Pour une personne déjà mariée, rêver de son propre mariage peut symboliser un renouveau dans la vie conjugale, un renforcement des liens affectifs ou l'arrivée d'une bénédiction (naissance, réussite, réconciliation). Selon les savants, ce rêve invite à raviver l'amour au sein du foyer et à remercier Allah pour les bienfaits du couple. Il ne signifie pas nécessairement un second mariage.",
  },
  {
    question:
      "Rêver de mariage avec un inconnu en islam, est-ce un bon signe ?",
    answer:
      "Rêver de mariage avec un inconnu en islam peut avoir plusieurs significations. Si l'inconnu est bienveillant et la cérémonie agréable, cela peut annoncer une rencontre favorable, un nouveau départ ou une bénédiction inattendue. Si l'inconnu provoque de la peur ou du malaise, il peut s'agir d'un rêve du Shaytane, et il convient de chercher refuge auprès d'Allah et de ne pas s'y attarder.",
  },
  {
    question:
      "Quelle est la signification de rêver du mariage de son fils ou de sa fille ?",
    answer:
      "Rêver du mariage de son fils ou de sa fille est considéré comme un présage favorable en islam. Ce rêve symbolise souvent la continuité de la lignée, la joie familiale et la bénédiction divine sur la descendance. Il peut aussi refléter les attentes et les espoirs du rêveur pour ses enfants. Les savants recommandent de prier pour leur bien-être et de remercier Allah.",
  },
  {
    question:
      "Que signifie rêver d'un mariage annulé ou raté en islam ?",
    answer:
      "Rêver d'un mariage annulé, raté ou interrompu peut signaler des obstacles à venir, un projet qui tarde à aboutir ou des tensions relationnelles. Ce rêve invite à la patience, à la prière d'istikhara et à l'examen de conscience. Il ne constitue pas forcément un mauvais présage mais un appel à la prudence et à la confiance en le décret d'Allah.",
  },
  {
    question: "Rêver de mariage avec une personne décédée en islam",
    answer:
      "Rêver de mariage avec une personne décédée en islam peut symboliser la miséricorde d'Allah envers le défunt, un lien spirituel fort ou un message de paix. Selon certains savants, si le défunt apparaît heureux et lumineux, c'est un signe que son âme est apaisée. Ce rêve invite le rêveur à multiplier les prières et les aumônes en faveur du défunt.",
  },
  {
    question: "Quelle du'a réciter après un rêve de mariage en islam ?",
    answer:
      "Après un rêve de mariage agréable, il est recommandé de dire : Alhamdulillah (louange à Allah) et de remercier Allah pour ce bon présage. Si le rêve est troublant, il convient de réciter : A'oudhou billahi min ash-shaytanir-rajim (Je cherche refuge auprès d'Allah contre le Shaytane maudit), de souffler trois fois à gauche et de ne pas raconter le rêve. La prière d'istikhara est aussi conseillée si le rêve soulève des questions sur l'avenir.",
  },
  {
    question:
      "Quelle est la différence entre un rêve véridique (ru'ya) et un simple rêve (hulm) ?",
    answer:
      "En islam, le rêve véridique (ru'ya saliha) est une vision envoyée par Allah, souvent claire, cohérente et porteuse d'un message de guidance. Le hulm est un rêve perturbant issu du Shaytane ou de l'âme (nafs), souvent confus ou effrayant. Le Prophète (paix et salut sur lui) a enseigné que le rêve véridique est une des quarante-six parties de la prophétie, tandis que le hulm ne mérite pas d'attention. La troisième catégorie, hadith an-nafs, regroupe les rêves liés aux préoccupations quotidiennes.",
  },
];

export default function MariageIslamPresages() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/mariage-islam-presages-significations/#article",
        headline:
          "Rêver de mariage en islam : présages heureux et significations selon la tradition",
        description:
          "Que signifie rêver de mariage en islam ? Interprétation selon Ibn Sirin, présages selon le contexte, robe, alliance, lieu et conseils pratiques.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-mariage-islam-presages-heureux-et-significations-selon-la-tradition.jpg",
        datePublished: "2025-08-27",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/mariage-islam-presages-significations/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/mariage-islam-presages-significations/#breadcrumb",
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
            name: "Rêver de mariage",
            item: "https://www.islamreligion.fr/mariage-islam-presages-significations",
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
          title="Rêver de mariage en islam : présages heureux et significations selon la tradition"
          subtitle="Interprétation du rêve de mariage selon Ibn Sirin, les textes sacrés et la sagesse des savants musulmans."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-mariage-islam-presages-heureux-et-significations-selon-la-tradition.jpg"
          imageAlt="Rêver de mariage en islam, présages heureux et significations selon la tradition"
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
                <span className="text-foreground">Rêver de mariage</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de mariage en islam est un songe fréquent, riche de
                  symboles et de présages. Il peut annoncer une bénédiction
                  divine, un changement de vie, une union à venir ou un
                  renouveau spirituel. L&apos;interprétation varie selon le
                  contexte du rêveur, les détails de la cérémonie et les
                  émotions ressenties. Les savants musulmans, dont Ibn Sirin,
                  accordent au mariage en rêve une place importante dans la
                  science de l&apos;oniromancie islamique.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Que signifie rêver de mariage */}
              {/* ============================================ */}
              <section id="signification" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que signifie rêver de mariage en islam ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mariage occupe une place centrale dans la foi islamique. Le
                  Prophète Muhammad (paix et salut sur lui) a déclaré que le
                  mariage constitue la moitié de la religion. Lorsque ce thème
                  apparait dans un rêve, il ne s&apos;agit jamais d&apos;un
                  simple reflet des désirs du quotidien : le mariage en songe
                  porte souvent un message profond sur la trajectoire
                  spirituelle du rêveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne le{" "}
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    mariage comme un signe parmi les signes d&apos;Allah
                  </Link>
                  {" "}(sourate Ar-Rum, 30:21) : &laquo; Et parmi Ses signes,
                  Il a créé de vous, pour vous, des épouses afin que vous viviez
                  en tranquillité avec elles et Il a mis entre vous de
                  l&apos;affection et de la bonté. &raquo; Cette dimension sacrée
                  explique pourquoi rêver de mariage interpelle si profondément
                  le croyant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour bien interpréter un rêve de mariage, il convient de
                  comprendre les trois catégories de rêves reconnues dans la
                  tradition prophétique. Le Prophète (paix et salut sur lui) a
                  enseigné que les rêves se divisent en trois types distincts,
                  chacun portant une signification et une conduite particulières.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ru&apos;ya saliha (vision véridique) :</strong>{" "}
                      rêve inspiré par Allah, clair et cohérent, souvent porteur
                      d&apos;un message de guidance ou d&apos;annonce. Le
                      Prophète l&apos;a qualifié de &laquo; quarante-sixième
                      partie de la prophétie &raquo;.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Hulm (rêve du Shaytane) :</strong> songe
                      perturbant, confus ou effrayant, destiné à semer la peur
                      dans le coeur du croyant. Il convient de chercher refuge
                      auprès d&apos;Allah et de ne pas s&apos;y attarder.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Hadith an-nafs (rêve de l&apos;âme) :</strong>{" "}
                      reflet des préoccupations, désirs ou tensions du quotidien.
                      Ce type de rêve traduit ce qui habite l&apos;esprit et
                      invite à l&apos;introspection.
                    </span>
                  </li>
                </ul>

                {/* Tableau 3 types de rêves */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Origine
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conduite à tenir
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Ru&apos;ya saliha (vision véridique)
                        </td>
                        <td className="py-3 pr-4">Allah</td>
                        <td className="py-3">
                          Remercier Allah, partager avec une personne de
                          confiance, ne pas en parler à un envieux
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hulm (rêve perturbant)
                        </td>
                        <td className="py-3 pr-4">Shaytane</td>
                        <td className="py-3">
                          Souffler trois fois à gauche, chercher refuge auprès
                          d&apos;Allah, ne pas le raconter
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hadith an-nafs (rêve de l&apos;âme)
                        </td>
                        <td className="py-3 pr-4">
                          Préoccupations personnelles
                        </td>
                        <td className="py-3">
                          Introspection, patience, ne pas chercher
                          d&apos;interprétation forcée
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un rêve de mariage lumineux, empreint de joie et de sérénité,
                  sera plus souvent classé parmi les visions véridiques. En
                  revanche, un mariage angoissant ou chaotique dans le rêve
                  pourrait provenir du Shaytane ou de l&apos;âme. Seul Allah
                  connait la signification ultime de chaque rêve, et la prudence
                  reste de mise avant toute interprétation.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin et les grands savants */}
              {/* ============================================ */}
              <section id="ibn-sirin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation selon Ibn Sirin et les grands savants
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Muhammad ibn Sirin (653-729), considéré comme le père de
                  l&apos;oniromancie islamique, a consacré une attention
                  particulière aux rêves de mariage. Ses interprétations, qui
                  s&apos;appuient sur le Coran et la Sunna, demeurent la
                  référence pour des millions de musulmans, au même titre que
                  ses lectures des{" "}
                  <Link href="/reve-poisson-islam-richesse" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves de poisson annonçant richesse et abondance</Link>.
                  D&apos;autres savants comme Al-Nabulsi (1641-1731) ont affiné
                  ces lectures au fil des siècles.
                </p>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    La vision d&apos;Ibn Sirin sur le mariage en rêve
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Pour Ibn Sirin, le mariage en rêve symbolise avant tout un
                    engagement devant Allah, une alliance bénie. Il peut
                    représenter l&apos;accession à une position d&apos;autorité,
                    la signature d&apos;un accord important ou l&apos;obtention
                    d&apos;une protection divine. Un mariage joyeux annonce la
                    réussite, tandis qu&apos;un mariage troublé met en garde
                    contre des obstacles à venir.
                  </p>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">
                    Les nuances d&apos;Al-Nabulsi
                  </h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Al-Nabulsi précise que le mariage en rêve peut aussi évoquer
                    la mort lorsque le rêveur est malade, car le mariage comme
                    la mort marquent une transition vers un nouvel état. Pour une
                    personne en bonne santé, il s&apos;agit le plus souvent
                    d&apos;une bénédiction, d&apos;un accroissement de richesse
                    ou d&apos;un rapprochement avec Allah.
                  </p>
                </div>

                {/* Tableau scénarios Ibn Sirin */}
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
                          Conseil
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage joyeux avec festivités
                        </td>
                        <td className="py-3 pr-4">
                          Bénédiction, réussite, obtention d&apos;un bien
                        </td>
                        <td className="py-3">
                          Remercier Allah, multiplier les actes de dévotion
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage sans voir le visage de l&apos;époux(se)
                        </td>
                        <td className="py-3 pr-4">
                          Mort possible ou transition majeure
                        </td>
                        <td className="py-3">
                          Prier pour la protection d&apos;Allah, faire
                          l&apos;aumône
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage avec une personne connue
                        </td>
                        <td className="py-3 pr-4">
                          Alliance, accord, rapprochement avec cette personne
                        </td>
                        <td className="py-3">
                          Méditer sur la relation, renforcer les liens
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage avec une personne inconnue
                        </td>
                        <td className="py-3 pr-4">
                          Changement de situation, nouveau départ
                        </td>
                        <td className="py-3">
                          Faire l&apos;istikhara, rester ouvert à la nouveauté
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage interrompu ou annulé
                        </td>
                        <td className="py-3 pr-4">
                          Projet contrarié, obstacles, mise en garde
                        </td>
                        <td className="py-3">
                          Patience, examen de conscience, tawba
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Assister à un mariage sans y participer
                        </td>
                        <td className="py-3 pr-4">
                          Témoin d&apos;un événement heureux, bonne nouvelle
                          pour l&apos;entourage
                        </td>
                        <td className="py-3">
                          Se réjouir pour autrui, pratiquer la gratitude
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ibn Sirin insistait sur un principe fondamental :
                  l&apos;interprétation d&apos;un rêve de mariage ne peut
                  jamais être isolée du contexte du rêveur. Son état de foi, sa
                  situation familiale, ses préoccupations du moment et les
                  détails précis du rêve influencent considérablement la
                  lecture. C&apos;est pourquoi la{" "}
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    science de l&apos;interprétation des rêves en islam
                  </Link>{" "}
                  demande de la prudence et une connaissance approfondie des
                  textes.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-mariage-islam-presages-heureux-et-significations-selon-la-tradition-1.jpg"
                    alt="Interprétation du rêve de mariage en islam selon Ibn Sirin et les grands savants"
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
              {/* SECTION 3 : Rêver de son propre mariage */}
              {/* ============================================ */}
              <section id="propre-mariage" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de son propre mariage en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Rêver de son propre mariage est l&apos;un des rêves les plus
                  fréquents rapportés dans la communauté musulmane. La
                  signification de ce rêve change considérablement selon la
                  situation personnelle du rêveur et les circonstances de la
                  cérémonie onirique.
                </p>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  Pour un homme célibataire
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  L&apos;homme célibataire qui rêve de son mariage reçoit
                  souvent un signe d&apos;espoir. Ce rêve peut annoncer un
                  mariage prochain, l&apos;obtention d&apos;un emploi stable,
                  une promotion ou l&apos;accès à une position d&apos;autorité.
                  Selon Ibn Sirin, si la mariée est belle et lumineuse,
                  l&apos;avenir se présente sous les meilleurs auspices. Si en
                  revanche elle est voilée de noir ou triste, le rêveur doit se
                  préparer à des épreuves et renforcer sa foi.
                </p>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  Pour une femme célibataire
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La femme célibataire qui voit son propre mariage en rêve
                  traverse une période de transformation. Ce songe peut annoncer
                  un mariage à venir, un accomplissement personnel ou une
                  élévation spirituelle. Les savants soulignent l&apos;importance
                  des émotions ressenties : la joie indique un présage heureux,
                  tandis que l&apos;angoisse invite à la patience et à la
                  prière.
                </p>

                {/* Témoignage Samira */}
                <div className="mt-6 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    Témoignage
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground italic">
                    &laquo; Samira, 28 ans, célibataire, faisait un rêve
                    récurrent dans lequel elle se voyait vêtue d&apos;une robe
                    blanche, entourée de lumière, dans une mosquée remplie de
                    proches. Ce rêve revenait à chaque période de doute sur son
                    avenir. Après en avoir parlé à un imam de confiance, elle a
                    compris que ce rêve symbolisait un renouveau spirituel et
                    non nécessairement un mariage imminent. Quelques mois plus
                    tard, elle a entamé une formation en sciences islamiques qui
                    a transformé sa vie. &raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  Pour une personne déjà mariée
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La personne mariée qui rêve de son propre mariage peut y voir
                  le signe d&apos;un renouveau dans sa vie conjugale : une
                  réconciliation après un différend, l&apos;arrivée d&apos;un
                  enfant, un déménagement ou un changement de vie positif. Ce
                  rêve ne signifie pas un deuxième mariage mais invite le
                  rêveur à raviver la flamme de son foyer et à remercier Allah
                  pour les bienfaits du couple. Connaitre les{" "}
                  <Link href="/droits-femme-divorce-islamique" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">droits de la femme dans le cadre conjugal</Link>
                  {" "}renforce cette harmonie.
                </p>

                {/* Témoignage Ahmed */}
                <div className="mt-6 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    Témoignage
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground italic">
                    &laquo; Ahmed, marié depuis dix ans, a rêvé qu&apos;il
                    épousait à nouveau sa femme lors d&apos;une cérémonie
                    magnifique, entourée de lumière dorée. Troublé, il a
                    d&apos;abord craint que ce rêve annonce un bouleversement.
                    En réalité, il a coïncidé avec la naissance de leur
                    troisième enfant, un moment de bonheur intense qui a
                    renforcé les liens du couple. &raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  Cérémonie heureuse ou troublée : que retenir ?
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les détails de la cérémonie apportent des nuances décisives.
                  Une fête joyeuse, lumineuse, avec des invités souriants et de
                  la musique agréable annonce des bénédictions. En revanche, un
                  mariage dans l&apos;obscurité, interrompu par un incident ou
                  marqué par la tristesse, appelle à la vigilance et à la
                  prière d&apos;istikhara.
                </p>

                {/* Tableau contexte propre mariage */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Contexte du rêveur
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Présage
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Action recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Célibataire, cérémonie joyeuse
                        </td>
                        <td className="py-3 pr-4">
                          Mariage proche ou changement positif
                        </td>
                        <td className="py-3">
                          Remercier Allah, se préparer spirituellement
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Célibataire, cérémonie troublée
                        </td>
                        <td className="py-3 pr-4">
                          Obstacles, épreuves à surmonter
                        </td>
                        <td className="py-3">
                          Prière d&apos;istikhara, patience, tawba
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Marié(e), revit son propre mariage
                        </td>
                        <td className="py-3 pr-4">
                          Renouveau conjugal, bénédiction familiale
                        </td>
                        <td className="py-3">
                          Raviver les liens, offrir un cadeau à son époux(se)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Marié(e), mariage avec un(e) autre
                        </td>
                        <td className="py-3 pr-4">
                          Nouvelle alliance, accord professionnel, changement
                        </td>
                        <td className="py-3">
                          Méditer, consulter un imam de confiance
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Personne malade rêvant de mariage
                        </td>
                        <td className="py-3 pr-4">
                          Transition, appel à la tawba (selon Al-Nabulsi)
                        </td>
                        <td className="py-3">
                          Multiplier les prières et les aumônes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver d'être enceinte en islam : significations spirituelles"
                  description="Découvrez ce que symbolise la grossesse dans un rêve selon Ibn Sirin et la tradition islamique."
                  href="/rever-enceinte-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Mariage d'un proche ou inconnu */}
              {/* ============================================ */}
              <section id="mariage-proche" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver du mariage d&apos;un proche ou d&apos;un inconnu
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le rêve ne se limite pas toujours à la personne du rêveur. Il
                  arrive fréquemment de voir le mariage d&apos;un fils,
                  d&apos;une fille, d&apos;un parent, d&apos;un ami ou même
                  d&apos;un parfait inconnu. Chaque figure apporte un éclairage
                  différent sur le message onirique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants musulmans soulignent que rêver du mariage
                  d&apos;un proche reflète souvent les espoirs, les
                  préoccupations ou les prières que le rêveur porte pour cette
                  personne. Un mariage heureux pour un proche dans le rêve est
                  un signe de baraka et de joie partagée. Un mariage troublé
                  invite à prier pour le bien-être de la personne concernée.
                </p>

                {/* Tableau personne / signification */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Personne dans le rêve
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Signification
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fils
                        </td>
                        <td className="py-3">
                          Continuité de la lignée, bénédiction sur la
                          descendance, réussite pour le fils
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fille
                        </td>
                        <td className="py-3">
                          Joie familiale, présage de bonheur, protection divine
                          sur la fille
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mère ou père
                        </td>
                        <td className="py-3">
                          Respect filial récompensé, bénédiction parentale,
                          harmonie familiale
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Frère ou soeur
                        </td>
                        <td className="py-3">
                          Solidarité familiale, alliance, soutien mutuel à venir
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Ami(e) proche
                        </td>
                        <td className="py-3">
                          Renforcement de l&apos;amitié, bonne nouvelle pour
                          l&apos;ami(e), joie partagée
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Inconnu(e) bienveillant(e)
                        </td>
                        <td className="py-3">
                          Nouveau départ, bénédiction inattendue, changement de
                          situation favorable
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Inconnu(e) menaçant(e)
                        </td>
                        <td className="py-3">
                          Avertissement, rêve potentiellement issu du Shaytane,
                          chercher refuge auprès d&apos;Allah
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Rêver du mariage d&apos;une personne décédée porte une
                  signification particulière dans la tradition islamique. Si le
                  défunt apparait heureux et lumineux dans la cérémonie, cela
                  peut indiquer que son âme est apaisée et que la miséricorde
                  d&apos;Allah l&apos;enveloppe. Ce rêve invite le rêveur à
                  multiplier les prières, les invocations et les aumônes en
                  faveur du défunt.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans tous les cas, les savants recommandent de ne pas tirer de
                  conclusions hâtives. Le{" "}
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    cadre de l&apos;interprétation des rêves en islam
                  </Link>{" "}
                  exige toujours de la prudence, de l&apos;humilité et une
                  connaissance solide de la tradition prophétique.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-mariage-islam-presages-heureux-et-significations-selon-la-tradition-2.jpg"
                    alt="Rêver du mariage d'un proche en islam, signification et présages"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Les détails qui changent tout */}
              {/* ============================================ */}
              <section id="details" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les détails qui changent tout : robe, alliances, lieu,
                  émotions
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  En oniromancie islamique, les détails visuels et émotionnels
                  sont déterminants. La couleur de la robe, le lieu de la
                  cérémonie, la présence d&apos;alliances et l&apos;état
                  émotionnel du rêveur modifient considérablement
                  l&apos;interprétation du rêve de mariage. Les savants
                  accordent autant d&apos;importance au contexte qu&apos;au
                  symbole principal.
                </p>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  La robe de mariée et ses couleurs
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La robe blanche symbolise la pureté, la sincérité et la
                  bénédiction divine. Une robe verte évoque le paradis et la
                  piété. Une robe noire peut signaler une épreuve, un deuil
                  symbolique ou une transformation profonde. Une robe rouge
                  est parfois associée à la passion, mais aussi aux tensions
                  ou aux conflits émotionnels.
                </p>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  Le lieu de la cérémonie
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Se marier dans une mosquée en rêve est un signe
                  particulièrement positif : il indique un rapprochement avec
                  Allah, une alliance bénie et un fondement solide pour
                  l&apos;avenir. Un mariage en plein air, dans un jardin
                  fleuri, évoque la sérénité et l&apos;abondance. En revanche,
                  un mariage dans un lieu sombre, inconnu ou abandonné invite à
                  la prudence et à l&apos;examen de conscience.
                </p>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  Les alliances et les cadeaux
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Voir des alliances en or dans le rêve peut symboliser un
                  engagement solide, une promesse tenue ou une récompense
                  divine. Selon certains savants, l&apos;or pour les hommes en
                  rêve peut avoir une connotation négative (l&apos;or étant
                  interdit au port pour les hommes en islam), tandis que pour
                  les femmes il représente la baraka et la prospérité. Recevoir
                  un cadeau lors du mariage onirique renforce le caractère
                  positif du rêve.
                </p>

                <h3 className="mt-8 text-xl font-bold text-primary">
                  Les émotions ressenties
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les émotions sont le fil conducteur de toute interprétation.
                  La joie, la sérénité et le bonheur renforcent le présage
                  positif du mariage. La peur, l&apos;angoisse ou
                  l&apos;indifférence peuvent indiquer un rêve du Shaytane ou
                  un rêve de l&apos;âme qui reflète des tensions intérieures.
                  Si le rêve fait ressurgir un ancien partenaire, la lecture
                  des{" "}
                  <Link href="/reves-ex-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves liés à un ex en islam</Link>
                  {" "}peut éclairer le message. Ibn Sirin accordait une
                  attention majeure aux sentiments éprouvés pendant le rêve,
                  les considérant comme la clé de l&apos;interprétation.
                </p>

                {/* Tableau détails / signification positive / négative */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Détail du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification positive
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Signification négative
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Robe blanche
                        </td>
                        <td className="py-3 pr-4">
                          Pureté, sincérité, bénédiction divine
                        </td>
                        <td className="py-3">
                          Aucune connotation négative en général
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Robe noire
                        </td>
                        <td className="py-3 pr-4">
                          Transformation profonde, renaissance
                        </td>
                        <td className="py-3">
                          Épreuve, deuil symbolique, tristesse
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Robe verte
                        </td>
                        <td className="py-3 pr-4">
                          Piété, paradis, élévation spirituelle
                        </td>
                        <td className="py-3">
                          Rarement négative dans la tradition
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage dans une mosquée
                        </td>
                        <td className="py-3 pr-4">
                          Alliance bénie, rapprochement avec Allah
                        </td>
                        <td className="py-3">
                          Aucune connotation négative
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage en plein air
                        </td>
                        <td className="py-3 pr-4">
                          Sérénité, abondance, ouverture
                        </td>
                        <td className="py-3">
                          Instabilité si le temps est mauvais
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage dans un lieu sombre
                        </td>
                        <td className="py-3 pr-4">
                          Rarement positif
                        </td>
                        <td className="py-3">
                          Épreuve, confusion, besoin d&apos;introspection
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Alliances en or (femme)
                        </td>
                        <td className="py-3 pr-4">
                          Baraka, prospérité, engagement solide
                        </td>
                        <td className="py-3">
                          Rarement négative pour une femme
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Joie et sérénité
                        </td>
                        <td className="py-3 pr-4">
                          Ru&apos;ya véridique, présage heureux
                        </td>
                        <td className="py-3">
                          Aucune
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Peur ou angoisse
                        </td>
                        <td className="py-3 pr-4">
                          Rarement positif
                        </td>
                        <td className="py-3">
                          Hulm possible, chercher refuge auprès d&apos;Allah
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Indifférence
                        </td>
                        <td className="py-3 pr-4">
                          Rarement significatif
                        </td>
                        <td className="py-3">
                          Rêve de l&apos;âme (nafs), pas de message particulier
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque détail enrichit la lecture du rêve. Les savants
                  recommandent de noter au réveil les couleurs, les lieux, les
                  personnes présentes et les émotions ressenties afin de
                  permettre une interprétation plus fine. L&apos;accumulation
                  de signes positifs renforce le caractère véridique du rêve,
                  tandis que la présence d&apos;éléments troublants invite à
                  la prière et à la demande de protection.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Que faire après un rêve de mariage */}
              {/* ============================================ */}
              <section id="que-faire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire après un rêve de mariage en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La conduite à adopter après un rêve de mariage dépend de la
                  nature du songe. La Sunna du Prophète (paix et salut sur lui)
                  offre des recommandations claires qui permettent au croyant
                  d&apos;accueillir son rêve avec sérénité. Tout comme{" "}
                  <Link href="/reve-cheval-islam-bienfaits" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver de cheval annonce des bienfaits</Link>,
                  un mariage onirique heureux est porteur de bonne nouvelle.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Après un rêve de mariage positif
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dire &laquo; Alhamdulillah &raquo; (louange à Allah) et
                        remercier Allah pour ce bon présage. Partager le rêve
                        avec une personne de confiance et de savoir, sans le
                        raconter à un envieux. Multiplier les actes de dévotion
                        et les aumônes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Après un rêve de mariage troublant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter &laquo; A&apos;oudhou billahi min
                        ash-shaytanir-rajim &raquo; trois fois, souffler
                        trois fois à gauche, changer de position dans le lit
                        et ne pas raconter le rêve. Réciter Ayat al-Kursiy et
                        les trois Qul (sourates Al-Ikhlas, Al-Falaq et
                        An-Nas) avant de se rendormir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La prière d&apos;istikhara
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le rêve de mariage soulève des questions sur
                        l&apos;avenir (un projet de mariage en cours, une
                        décision à prendre), la{" "}
                        <Link
                          href="/istikhara-priere-consultation"
                          className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                        >
                          prière d&apos;istikhara
                        </Link>{" "}
                        est fortement recommandée. Elle consiste à demander à
                        Allah la meilleure issue pour sa situation et à
                        s&apos;en remettre pleinement à Sa sagesse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Avec qui partager le rêve ?
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné de ne
                        partager ses rêves qu&apos;avec une personne qui vous
                        aime ou qui possède la science de l&apos;interprétation.
                        Il convient d&apos;éviter de raconter ses rêves à des
                        personnes jalouses ou à des interprètes non qualifiés
                        sur internet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Mise en garde contre les faux interprètes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        De nombreux sites et pages sur les réseaux sociaux
                        proposent des interprétations de rêves sans fondement
                        islamique. Les savants mettent en garde contre ces
                        sources qui peuvent semer la confusion et
                        l&apos;angoisse. Seule une personne formée à la science
                        de l&apos;oniromancie islamique et ancrée dans le Coran
                        et la Sunna est habilitée à proposer une lecture
                        fiable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-mariage-islam-presages-heureux-et-significations-selon-la-tradition-3.jpg"
                    alt="Que faire après un rêve de mariage en islam, prière et istikhara"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-10 text-xl font-bold text-primary">
                  Pratiques recommandées avant le sommeil
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour favoriser des rêves paisibles et véridiques, la
                  tradition prophétique recommande plusieurs pratiques avant de
                  s&apos;endormir :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Faire ses ablutions (wudu) avant de se coucher.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Réciter Ayat al-Kursiy, les sourates Al-Ikhlas, Al-Falaq
                      et An-Nas en soufflant dans ses mains et en passant ses
                      mains sur le corps.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Dormir sur le côté droit en orientant son regard vers la
                      qibla.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Réciter le dhikr et les invocations du sommeil, dont
                      &laquo; Bismika Allahumma amootu wa ahya &raquo;
                      (C&apos;est en Ton Nom, Seigneur, que je meurs et que je
                      vis).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Éviter les écrans, les discussions agitées et les repas
                      lourds avant le coucher.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Pleurer dans un rêve en islam : signification et compassion"
                  description="Découvrez ce que symbolisent les larmes dans un rêve selon la tradition islamique."
                  href="/pleurer-reve-islam-compassion"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon le profil du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de mariage ne porte pas la même signification
                  selon la personne qui le fait. Les grands interprètes
                  tiennent compte de la situation personnelle du rêveur pour
                  affiner leur lecture. Voici les principales distinctions
                  établies par la tradition.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver de mariage annonce un renouveau dans la vie
                      conjugale, une bénédiction familiale ou l&apos;arrivée
                      d&apos;un événement heureux (naissance, réussite,
                      réconciliation). Ce rêve invite à raviver les liens
                      d&apos;amour et à remercier Allah pour les bienfaits du
                      foyer. Si la cérémonie est troublée, il peut refléter
                      des tensions à apaiser par le dialogue et la prière.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve de mariage est souvent un présage heureux pour
                      la femme célibataire. Il peut annoncer un mariage
                      prochain, un changement positif ou une élévation
                      spirituelle. Si l&apos;émotion dominante est la joie, le
                      présage est d&apos;autant plus favorable. La patience et
                      la confiance en le qadar d&apos;Allah sont recommandées.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve de mariage pendant la grossesse symbolise la
                      protection divine sur la mère et l&apos;enfant. Il
                      reflète les espoirs et l&apos;anticipation liés à cette
                      période bénie. Les savants recommandent de multiplier les
                      invocations de protection et de remercier Allah pour le
                      don de la vie. Si le rêve est joyeux, c&apos;est un
                      signe de bon augure pour la{" "}
                      <Link
                        href="/rever-enceinte-islam"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        grossesse et l&apos;accouchement
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;homme qui rêve de mariage peut y voir l&apos;annonce
                      d&apos;un mariage réel, d&apos;une promotion
                      professionnelle, d&apos;un accord commercial ou
                      d&apos;une nouvelle responsabilité. Selon Ibn Sirin, la
                      qualité de la cérémonie et la beauté de l&apos;épouse
                      dans le rêve reflètent l&apos;ampleur de la bénédiction
                      à venir. Ce rêve l&apos;invite à parfaire son adoration
                      et à se préparer à assumer ses engagements.
                    </p>
                  </div>
                </div>

                {/* Éléments du rêve / symbolique / conseil */}
                <h3 className="mt-10 text-xl font-bold text-primary">
                  Tableau récapitulatif : éléments du rêve, symbolique et
                  conseils
                </h3>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Élément du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Symbolique islamique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil pratique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Musique et chants joyeux
                        </td>
                        <td className="py-3 pr-4">
                          Bénédiction, baraka, annonce heureuse
                        </td>
                        <td className="py-3">
                          Remercier Allah, partager la joie
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Pleurs lors du mariage
                        </td>
                        <td className="py-3 pr-4">
                          Parfois signe de joie intense ou de soulagement
                        </td>
                        <td className="py-3">
                          Méditer sur ses émotions, pratiquer la gratitude
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Invités nombreux et souriants
                        </td>
                        <td className="py-3 pr-4">
                          Soutien communautaire, bénédiction collective
                        </td>
                        <td className="py-3">
                          Renforcer les liens avec la oumma
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Absence d&apos;invités
                        </td>
                        <td className="py-3 pr-4">
                          Solitude, besoin de soutien, isolement
                        </td>
                        <td className="py-3">
                          Se rapprocher de la communauté, prier en groupe
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Festin abondant (walima)
                        </td>
                        <td className="py-3 pr-4">
                          Générosité, abondance, rizq à venir
                        </td>
                        <td className="py-3">
                          Pratiquer la sadaqa, partager les bienfaits
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Contrat de mariage (aqd)
                        </td>
                        <td className="py-3 pr-4">
                          Accord important, engagement solennel
                        </td>
                        <td className="py-3">
                          Approfondir sa connaissance de la{" "}
                          <Link
                            href="/mariage-islamique-contrat"
                            className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                          >
                            jurisprudence du mariage
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les critères{" "}
                  <Link
                    href="/halal-haram-criteres"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    halal et haram
                  </Link>{" "}
                  s&apos;appliquent aussi à l&apos;interprétation des rêves :
                  il est interdit de prétendre interpréter un rêve avec
                  certitude absolue, car seul Allah détient la science de
                  l&apos;invisible. La sagesse réside dans l&apos;humilité
                  face aux signes et dans la confiance en la miséricorde
                  divine.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de poisson en islam : richesse et abondance"
                  description="Découvrez ce que symbolise le poisson dans un rêve selon Ibn Sirin et la tradition islamique."
                  href="/reve-poisson-islam-richesse"
                />
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
                    href="/rever-enceinte-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;être enceinte en islam
                  </Link>
                  <Link
                    href="/pleurer-reve-islam-compassion"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Pleurer dans un rêve en islam
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
