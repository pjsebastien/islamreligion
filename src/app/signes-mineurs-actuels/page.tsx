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
    "Petits signes de l'Heure : reconnaître les signes mineurs actuels",
  description:
    "Découvrez les petits signes de la fin des temps en islam : signes mineurs déjà réalisés, signes en cours et attitude du croyant face à l'Heure.",
  alternates: {
    canonical: "https://www.islamreligion.fr/signes-mineurs-actuels",
  },
};

const tocItems = [
  { id: "distinction", label: "Distinction entre signes mineurs et majeurs" },
  { id: "realises", label: "Les signes mineurs déjà réalisés" },
  { id: "en-cours", label: "Les signes mineurs en cours de réalisation" },
  { id: "attitude", label: "L'attitude du croyant face à ces signes" },
  { id: "preparation", label: "Se préparer spirituellement au quotidien" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quels sont les petits signes de la fin du monde en islam ?",
    answer:
      "Les petits signes de la fin du monde en islam incluent la rivalité dans les constructions élevées, la généralisation de l'ignorance religieuse, la multiplication des tremblements de terre, la consommation répandue d'alcool et la fornication. Ces signes, mentionnés dans les hadiths de Bukhari et Muslim, se manifestent progressivement avant les signes majeurs comme l'apparition du Dajjal.",
  },
  {
    question: "Combien de signes mineurs existe-t-il en islam ?",
    answer:
      "Les savants ont recensé entre cinquante et soixante-dix signes mineurs de l'Heure, selon les classifications. Certains compilateurs en dénombrent davantage en fonction de leur méthodologie d'extraction des hadiths. La plupart se trouvent dans les recueils de Bukhari, Muslim et les Sunan. Leur nombre exact varie selon les critères retenus par chaque savant.",
  },
  {
    question: "Les signes mineurs se sont-ils tous réalisés ?",
    answer:
      "Non, tous les signes mineurs ne se sont pas encore réalisés. Certains se sont manifestés dès les premiers siècles de l'islam, d'autres sont en cours de réalisation dans notre époque contemporaine, et quelques-uns restent à venir. Les savants distinguent ces trois catégories pour aider les croyants à situer leur époque dans la chronologie eschatologique.",
  },
  {
    question: "Quelle est la différence entre signes mineurs et majeurs ?",
    answer:
      "Les signes mineurs apparaissent de manière progressive et s'étalent sur de longues périodes, tandis que les signes majeurs se succèdent rapidement, comme des perles dont le fil se rompt. Les signes mineurs relèvent souvent de changements sociaux et moraux, alors que les signes majeurs impliquent des phénomènes surnaturels et extraordinaires, tels que la levée du soleil depuis l'ouest ou l'apparition du Dajjal.",
  },
  {
    question: "Le hadith sur les constructions élevées s'est-il réalisé ?",
    answer:
      "Oui, le hadith dans lequel le Prophète (paix et salut sur lui) annonce que les bergers de chameaux rivaliseront dans la construction de bâtiments élevés est considéré comme largement réalisé. Les gratte-ciel de la péninsule arabique, dont le Burj Khalifa et les tours de Djeddah, illustrent cette prédiction prophétique de manière frappante.",
  },
  {
    question: "L'accélération du temps est-elle un signe mineur ?",
    answer:
      "Oui, l'accélération du temps (taqarub az-zaman) est un signe mineur mentionné dans un hadith rapporté par Bukhari. Les savants l'interprètent de deux manières : une diminution de la bénédiction dans le temps, qui semble passer plus vite, ou une perception subjective liée aux préoccupations matérielles qui éloignent le croyant de l'essentiel.",
  },
  {
    question: "Comment réagir face aux signes de la fin des temps ?",
    answer:
      "Le croyant ne doit pas céder à la panique ni à la spéculation excessive. Le Prophète (paix et salut sur lui) a dit : si l'Heure survient et que l'un de vous tient un plant dans sa main, qu'il le plante s'il le peut. L'attitude recommandée consiste à renforcer sa foi, multiplier les bonnes actions, maintenir les liens familiaux et se préparer spirituellement chaque jour.",
  },
  {
    question: "Les signes mineurs apparaissent-ils dans un ordre précis ?",
    answer:
      "Les signes mineurs n'obéissent pas nécessairement à un ordre chronologique strict. Certains apparaissent simultanément, d'autres se chevauchent ou se répètent dans l'histoire. Seuls les signes majeurs, selon la tradition, se succèdent de manière rapide et ordonnée une fois que le premier d'entre eux se manifeste.",
  },
];

export default function SignesMineurs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/signes-mineurs-actuels/#article",
        headline:
          "Petits signes de l'Heure : reconnaître les signes mineurs actuels",
        description:
          "Découvrez les petits signes de la fin des temps en islam : signes mineurs déjà réalisés, signes en cours et attitude du croyant face à l'Heure.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Petits-signes-de-lHeure-reconnaitre-les-signes-mineurs-actuels-1.jpg",
        datePublished: "2025-08-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/signes-mineurs-actuels/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/signes-mineurs-actuels/#breadcrumb",
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
            name: "Signes mineurs de la fin des temps",
            item: "https://www.islamreligion.fr/signes-mineurs-actuels",
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
          title="Petits signes de l'Heure : reconnaître les signes mineurs actuels"
          subtitle="Comprendre les signes mineurs de la fin des temps en islam selon le Coran et les hadiths authentiques."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Petits-signes-de-lHeure-reconnaitre-les-signes-mineurs-actuels-1.jpg"
          imageAlt="Petits signes de l'Heure, reconnaître les signes mineurs actuels en islam"
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
                <span className="text-foreground">Signes mineurs de la fin des temps</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les signes mineurs de l&apos;Heure jalonnent l&apos;histoire
                  de l&apos;humanité comme autant d&apos;avertissements
                  bienveillants. Loin d&apos;inspirer la peur, ils invitent le
                  croyant à renforcer sa foi, à observer les transformations du
                  monde avec lucidité et à se préparer spirituellement au
                  quotidien. Cet article distingue les signes déjà réalisés de
                  ceux en cours, tout en proposant une attitude sereine et
                  constructive.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Distinction signes mineurs / majeurs */}
              {/* ============================================ */}
              <section id="distinction" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Distinction entre signes mineurs et signes majeurs
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;eschatologie islamique distingue clairement deux
                  catégories de signes annonciateurs de l&apos;Heure. Les
                  signes mineurs (as-sughra) précèdent les signes majeurs
                  (al-kubra) et s&apos;étalent sur de longues périodes, parfois
                  des siècles entiers. Comprendre cette distinction permet de
                  situer notre époque dans le récit prophétique sans tomber dans
                  l&apos;alarmisme ni la spéculation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a décrit{" "}
                  <Link href="/signes-fin-monde-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les signes majeurs de la fin du monde</Link>{" "}
                  comme des perles dont le fil se rompt : une
                  fois que le premier se manifeste, les autres se succèdent
                  rapidement. Les signes mineurs, au contraire, se manifestent
                  de manière progressive, parfois subtile, et touchent
                  principalement les transformations sociales, morales et
                  spirituelles de la société.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran rappelle que la connaissance exacte de l&apos;Heure
                  appartient à Allah seul. Dans la sourate Al-A&apos;raf
                  (verset 187), il est dit : &laquo; Ils t&apos;interrogent sur
                  l&apos;Heure. Dis : sa connaissance est auprès de mon
                  Seigneur. Nul autre que Lui ne la dévoilera en son temps.
                  &raquo; Cette perspective invite à la vigilance sans obsession.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Signes mineurs :</strong> changements graduels
                      dans les moeurs, la foi, les structures familiales et les
                      rapports sociaux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Signes majeurs :</strong> phénomènes surnaturels
                      et extraordinaires, tels que{" "}
                      <Link href="/dajjal-signes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">l&apos;apparition du Dajjal</Link>,{" "}
                      <Link href="/retour-jesus-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la descente de &apos;Issa (Jésus)</Link>{" "}
                      ou le lever du soleil
                      depuis l&apos;ouest.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chronologie :</strong> les signes mineurs
                      apparaissent en premier et peuvent se chevaucher, tandis
                      que les signes majeurs se succèdent de manière rapide et
                      irréversible.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Classification savante :</strong> les oulémas
                      distinguent les signes réalisés, ceux en cours et ceux à
                      venir, selon les recueils de hadiths authentiques.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Hudhayfa ibn al-Yaman rapporte que le Prophète (paix et salut
                  sur lui) s&apos;est levé parmi eux et n&apos;a rien omis de
                  ce qui surviendrait jusqu&apos;à l&apos;Heure (rapporté par
                  Muslim). Cette exhaustivité prophétique constitue la base sur
                  laquelle les savants ont bâti la classification des signes de
                  la fin des temps.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Petits-signes-de-lHeure-reconnaitre-les-signes-mineurs-actuels-1.jpg"
                    alt="Distinction entre signes mineurs et signes majeurs de la fin des temps en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Les signes mineurs déjà réalisés */}
              {/* ============================================ */}
              <section id="realises" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes mineurs déjà réalisés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Plusieurs signes mineurs annoncés par le Prophète Muhammad
                  (paix et salut sur lui) se sont déjà manifestés au fil des
                  siècles. Les observer avec recul permet de constater la
                  véracité des prédictions prophétiques sans céder à la panique.
                  Chaque signe réalisé renforce la conviction du croyant et
                  l&apos;invite à redoubler de vigilance spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition prophétique regorge de descriptions précises qui
                  trouvent un écho saisissant dans notre monde contemporain. Les
                  hadiths de Bukhari et Muslim constituent les sources les plus
                  fiables pour identifier ces signes. Le tableau ci-dessous
                  recense les principaux signes mineurs déjà réalisés, leur
                  description et la source prophétique correspondante.
                </p>

                {/* Tableau des signes réalisés */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signe
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Hadith source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Bergers rivalisant dans les constructions
                        </td>
                        <td className="py-3 pr-4">
                          Les gardiens de troupeaux, autrefois nomades et
                          modestes, rivalisent dans l&apos;élévation de
                          bâtiments imposants
                        </td>
                        <td className="py-3">
                          Rapporté par Muslim (hadith de Jibril)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Ignorance religieuse répandue
                        </td>
                        <td className="py-3 pr-4">
                          La science religieuse diminue, l&apos;ignorance se
                          généralise et les savants se raréfient
                        </td>
                        <td className="py-3">
                          Rapporté par Bukhari et Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Multiplication des tremblements de terre
                        </td>
                        <td className="py-3 pr-4">
                          Les séismes se multiplient à travers le monde, en
                          fréquence et en intensité
                        </td>
                        <td className="py-3">
                          Rapporté par Bukhari
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Consommation répandue d&apos;alcool
                        </td>
                        <td className="py-3 pr-4">
                          L&apos;alcool est consommé en abondance et les gens
                          le rendent licite sous d&apos;autres appellations
                        </td>
                        <td className="py-3">
                          Rapporté par Bukhari
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Généralisation de la fornication
                        </td>
                        <td className="py-3 pr-4">
                          Les relations illicites se banalisent et deviennent
                          visibles dans la société
                        </td>
                        <td className="py-3">
                          Rapporté par Bukhari et Muslim
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces signes, bien que constatés depuis des siècles pour
                  certains, continuent de s&apos;amplifier à notre époque. La
                  rivalité dans les constructions, par exemple, trouve une
                  illustration saisissante dans les gratte-ciel de la péninsule
                  arabique. Les tours de Dubaï, de Riyad et de Djeddah
                  témoignent de cette course à l&apos;élévation annoncée il y a
                  plus de quatorze siècles.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La disparition de la science religieuse, quant à elle, ne
                  signifie pas que les livres disparaissent, mais que la
                  compréhension profonde et la pratique sincère se raréfient.
                  Le Prophète (paix et salut sur lui) a dit : &laquo; Allah ne
                  retire pas la science en l&apos;arrachant aux gens, mais Il
                  la retire en reprenant les savants, jusqu&apos;à ce
                  qu&apos;il ne reste plus de savant et que les gens prennent
                  des ignorants pour guides &raquo; (rapporté par Bukhari et
                  Muslim).
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les signes de la fin du monde en islam"
                  description="Vue d'ensemble des signes majeurs et mineurs de la fin des temps selon le Coran et la Sunna."
                  href="/signes-fin-monde-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Les signes mineurs en cours */}
              {/* ============================================ */}
              <section id="en-cours" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes mineurs en cours de réalisation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Certains signes mineurs ne relèvent ni du passé lointain ni
                  d&apos;un futur hypothétique : ils se manifestent sous nos
                  yeux, dans les transformations profondes de notre époque. Les
                  reconnaître n&apos;a rien d&apos;angoissant en soi. Il
                  s&apos;agit plutôt d&apos;une invitation à la lucidité et au
                  retour vers l&apos;essentiel.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;accélération du temps
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a annoncé que le
                        temps se rapprochera (taqarub az-zaman), au point que
                        l&apos;année passera comme un mois et le mois comme
                        une semaine (rapporté par Bukhari). Beaucoup ressentent
                        aujourd&apos;hui cette impression que les journées
                        filent, que la baraka du temps diminue. Les savants y
                        voient un signe lié à l&apos;éloignement de
                        l&apos;adoration et à la course aux préoccupations
                        matérielles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;inversion des valeurs
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a décrit une
                        époque où le traître sera considéré comme digne de
                        confiance et le digne de confiance sera traité de
                        traître (rapporté par Ahmad). L&apos;inversion morale
                        se traduit aujourd&apos;hui par la valorisation de
                        comportements autrefois réprouvés et la marginalisation
                        de la pudeur, de la modestie et de la piété. Yassin,
                        un jeune père de famille, confie sa difficulté à
                        transmettre des repères à ses enfants dans un
                        environnement où les valeurs semblent constamment
                        redéfinies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;omniprésence du commerce
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a annoncé que le
                        commerce se répandrait au point que la femme aidera son
                        mari dans son négoce (rapporté par Ahmad). Le commerce
                        en ligne, les réseaux sociaux marchands et la
                        monétisation de chaque aspect de la vie quotidienne
                        illustrent cette prédiction. L&apos;activité
                        commerciale envahit les espaces privés et brouille la
                        frontière entre vie personnelle et transactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La rupture des liens familiaux
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La rupture des liens de parenté (qat&apos; ar-rahim)
                        figure parmi les signes les plus préoccupants. Sara, mère
                        de trois enfants, observe avec inquiétude
                        l&apos;éloignement progressif entre les générations dans
                        sa propre famille. Les disputes successorales, les
                        rancunes anciennes et l&apos;individualisme croissant
                        fragilisent le tissu familial que l&apos;islam place
                        au coeur de la société.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La technologie et la fitna
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si la technologie n&apos;est pas un mal en soi, son
                        usage peut devenir source de fitna (épreuve). La
                        diffusion instantanée de contenus nuisibles,
                        l&apos;exposition permanente aux écrans et la
                        désinformation contribuent à un climat de confusion
                        spirituelle. Le Prophète (paix et salut sur lui) a
                        averti de la multiplication des fitan, si nombreuses
                        qu&apos;elles s&apos;enchaîneront comme les ténèbres
                        d&apos;une nuit sombre (rapporté par Muslim).
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le temps semble passer plus vite, la baraka diminue dans
                      les journées et les activités.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les valeurs s&apos;inversent : le blâmable est glorifié,
                      le louable est moqué.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le commerce envahit chaque sphère de la vie, y compris
                      les espaces de repos et de recueillement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les liens familiaux s&apos;affaiblissent sous la
                      pression de l&apos;individualisme et des conflits
                      matériels.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les épreuves numériques se multiplient, brouillant la
                      frontière entre vrai et faux.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Petits-signes-de-lHeure-reconnaitre-les-signes-mineurs-actuels-1.jpg"
                    alt="Les signes mineurs en cours de réalisation dans le monde contemporain"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : L'attitude du croyant */}
              {/* ============================================ */}
              <section id="attitude" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;attitude du croyant face à ces signes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La connaissance des signes de l&apos;Heure n&apos;a jamais
                  eu pour vocation d&apos;effrayer les croyants. Le Prophète
                  (paix et salut sur lui) a transmis ces enseignements pour
                  éveiller la conscience, renforcer la foi et inciter à
                  l&apos;action vertueuse. Observer les signes mineurs, c&apos;est
                  reconnaître la véracité du message prophétique et en tirer
                  une motivation pour améliorer sa pratique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith qui résume le mieux cette attitude est celui rapporté
                  par Anas ibn Malik (qu&apos;Allah l&apos;agrée) : le Prophète
                  (paix et salut sur lui) a dit : &laquo; Si l&apos;Heure
                  survient et que l&apos;un de vous tient un plant dans sa main,
                  s&apos;il peut le planter avant qu&apos;elle ne se lève,
                  qu&apos;il le plante &raquo; (rapporté par Ahmad, authentifié
                  par Al-Albani). Ce hadith illustre une philosophie de vie :
                  continuer à agir, à construire et à semer le bien, quelle
                  que soit la proximité de la fin.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Renforcer sa foi par la connaissance
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Étudier les signes de l&apos;Heure dans les sources
                        authentiques permet de distinguer le vrai du faux et
                        d&apos;éviter les interprétations fantaisistes qui
                        circulent sur les réseaux sociaux. Les recueils de
                        Bukhari, Muslim et les ouvrages des savants
                        reconnus restent les références incontournables.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier les bonnes actions
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a encouragé les
                        croyants à se hâter vers les bonnes oeuvres avant
                        l&apos;arrivée des épreuves. L&apos;aumône, la prière
                        nocturne, le jeûne surérogatoire et l&apos;aide aux
                        proches constituent des remparts spirituels solides.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Maintenir les liens de parenté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Face à la rupture des liens familiaux, le croyant est
                        appelé à redoubler d&apos;efforts pour préserver ses
                        relations avec ses proches. Rendre visite aux parents,
                        pardonner les offenses et entretenir la fraternité
                        contribuent à contrer ce signe mineur par l&apos;action
                        positive.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ne pas céder à la panique ni à la spéculation excessive
                      sur les dates et les événements.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se concentrer sur l&apos;amélioration personnelle plutôt
                      que sur la critique des autres.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Transmettre les enseignements prophétiques avec sagesse
                      et pédagogie, sans dramatisation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Garder confiance en la miséricorde d&apos;Allah et en Sa
                      promesse envers les croyants sincères.
                    </span>
                  </li>
                </ul>

                {/* Tableau : attitudes face aux signes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Attitude à éviter
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Attitude recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Panique et alarmisme
                        </td>
                        <td className="py-3">
                          Vigilance sereine et confiance en Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Spéculation sur les dates
                        </td>
                        <td className="py-3">
                          Étude des sources authentiques avec humilité
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Passivité et résignation
                        </td>
                        <td className="py-3">
                          Multiplication des bonnes actions et de la da&apos;wa
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Diffusion de rumeurs infondées
                        </td>
                        <td className="py-3">
                          Vérification des sources et transmission responsable
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Petits-signes-de-lHeure-reconnaitre-les-signes-mineurs-actuels-1.jpg"
                    alt="L'attitude du croyant face aux signes mineurs de la fin des temps"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Se préparer à la fin des temps en islam"
                  description="Guide pratique pour renforcer sa foi et se préparer spirituellement face aux épreuves de la fin des temps."
                  href="/fin-monde-islam-preparation"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Se préparer spirituellement */}
              {/* ============================================ */}
              <section id="preparation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Se préparer spirituellement au quotidien
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  <Link href="/fin-monde-islam-preparation" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">La préparation spirituelle</Link>{" "}
                  ne se résume pas à un exercice
                  intellectuel sur les signes de la fin des temps. Elle se vit
                  au quotidien, dans les gestes simples et les habitudes
                  régulières qui ancrent le croyant dans sa foi. Chaque prière
                  accomplie, chaque aumône versée et chaque parole bienveillante
                  constituent des actes de préparation authentiques.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La prière régulière
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les cinq prières quotidiennes constituent le pilier
                      fondamental de la préparation spirituelle. Le Prophète
                      (paix et salut sur lui) a dit que la prière est le
                      premier acte sur lequel le serviteur sera interrogé le
                      Jour du Jugement. Y ajouter les prières surérogatoires
                      renforce la connexion avec Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;aumône et la générosité
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;aumône (sadaqa) purifie les biens et protège le
                      croyant des épreuves. Face à la multiplication des
                      épreuves annoncées par le Prophète (paix et salut sur
                      lui), la générosité constitue un bouclier spirituel
                      puissant et une source de bénédiction pour la communauté.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;engagement familial
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Renforcer les liens avec ses parents, son conjoint et
                      ses enfants contrecarre directement le signe de la
                      rupture des liens de parenté. Le temps passé en famille,
                      les repas partagés et les moments de rappel collectif
                      nourrissent l&apos;âme et la cohésion du foyer.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La communauté et l&apos;entraide
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Fréquenter la mosquée, participer aux cercles de science
                      et s&apos;entraider dans les difficultés renforcent le
                      tissu communautaire. Le Prophète (paix et salut sur lui)
                      a comparé les croyants à un seul corps dont les membres
                      se soutiennent mutuellement (rapporté par Bukhari et
                      Muslim).
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Consacrer du temps à l&apos;apprentissage du Coran et des
                      hadiths authentiques pour nourrir sa foi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Pratiquer le dhikr (rappel d&apos;Allah) matin et soir
                      pour maintenir la sérénité intérieure.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Éviter la spéculation excessive sur les signes et se
                      concentrer sur sa propre préparation spirituelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se rappeler que chaque individu a sa propre &laquo; fin
                      des temps &raquo; : la mort, qui peut survenir à tout
                      moment.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a rappelé que la mort
                  de chacun constitue sa propre Heure. Ce rappel personnel
                  invite le croyant à ne pas reporter{" "}
                  <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">sa repentance</Link>{" "}
                  ni ses bonnes actions. Chaque jour vécu dans la conscience
                  d&apos;Allah est un jour de préparation. L&apos;observation
                  des signes mineurs ne fait que renforcer cette urgence
                  bienveillante de vivre pleinement sa foi.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Petits-signes-de-lHeure-reconnaitre-les-signes-mineurs-actuels-1.jpg"
                    alt="Se préparer spirituellement face aux signes de la fin des temps en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Mémorisez les sourates qui protègent des épreuves"
                description="La connaissance du Coran est la meilleure préparation face aux épreuves de la fin des temps. Sourate Al-Kahf, les invocations de protection... formez-vous dès maintenant."
                preselect="coran"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur la fin des temps en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/signes-fin-monde-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Les signes de la fin du monde en islam
                  </Link>
                  <Link
                    href="/fin-monde-islam-preparation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Se préparer à la fin des temps
                  </Link>
                  <Link
                    href="/dajjal-signes-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le Dajjal et ses signes en islam
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
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection contre la sorcellerie
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
