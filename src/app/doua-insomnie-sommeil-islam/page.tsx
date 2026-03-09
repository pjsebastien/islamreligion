import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua contre l\u2019insomnie et pour le sommeil en islam : invocations authentiques",
  description:
    "D\u00e9couvrez les douas contre l\u2019insomnie en islam : invocations avant de dormir en arabe avec phon\u00e9tique et traduction, Ayat al-Kursi, sourate al-Baqarah, hadiths sur le sommeil et conseils proph\u00e9tiques.",
  openGraph: {
    title:
      "Doua contre l\u2019insomnie et pour le sommeil en islam : invocations authentiques",
    description:
      "Les invocations authentiques pour trouver le sommeil en islam : douas avant de dormir, Ayat al-Kursi, derniers versets d\u2019al-Baqarah, hadiths et conseils proph\u00e9tiques.",
    url: "https://www.islamreligion.fr/doua-insomnie-sommeil-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-insomnie-sommeil-islam",
  },
};

const tocItems = [
  { id: "sommeil-islam", label: "Le sommeil en islam : une b\u00e9n\u00e9diction divine" },
  { id: "doua-avant-dormir", label: "Doua avant de dormir : Bismika Allahumma" },
  { id: "ayat-al-kursi", label: "Ayat al-Kursi : protection la nuit" },
  { id: "derniers-versets-baqarah", label: "Les derniers versets d\u2019al-Baqarah" },
  { id: "doua-insomnie", label: "Doua quand on n\u2019arrive pas \u00e0 dormir" },
  { id: "reveil-nuit", label: "Doua en cas de r\u00e9veil nocturne" },
  { id: "conseils-prophetiques", label: "Conseils proph\u00e9tiques pour le sommeil" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua \u00e0 r\u00e9citer avant de dormir en islam ?",
    answer:
      "La doua principale avant de dormir est : \u00ab Bismika Allahumma amutu wa ahya \u00bb (C&apos;est en Ton nom, \u00f4 Allah, que je meurs et que je vis). Le Proph\u00e8te (paix et salut sur lui) r\u00e9citait cette invocation chaque soir en se couchant. Il est \u00e9galement recommand\u00e9 de r\u00e9citer Ayat al-Kursi, les trois derni\u00e8res sourates du Coran et les derniers versets de sourate al-Baqarah.",
  },
  {
    question: "Quelle sourate lire contre l\u2019insomnie en islam ?",
    answer:
      "Plusieurs sourates sont recommand\u00e9es contre l&apos;insomnie : Ayat al-Kursi (verset 255 de sourate al-Baqarah) pour la protection nocturne, les deux derniers versets de sourate al-Baqarah qui suffisent pour toute la nuit, et les trois sourates protectrices (al-Ikhlas, al-Falaq, an-Nas) que le Proph\u00e8te (paix et salut sur lui) soufflait dans ses mains avant de les passer sur son corps.",
  },
  {
    question: "Que faire quand on n\u2019arrive pas \u00e0 dormir en islam ?",
    answer:
      "Le Proph\u00e8te (paix et salut sur lui) a recommand\u00e9 \u00e0 celui qui ne trouve pas le sommeil de se lever pour prier (qiyam al-layl) ou de faire des invocations. Il est aussi recommand\u00e9 de r\u00e9citer les adhkar du soir, de faire ses ablutions et de changer de position. L&apos;imam an-Nawawi mentionne \u00e9galement la r\u00e9citation du dhikr et de l&apos;istighfar comme remedes contre l&apos;insomnie.",
  },
  {
    question: "Quelle est la doua quand on se r\u00e9veille la nuit ?",
    answer:
      "Lorsqu&apos;on se r\u00e9veille la nuit, le Proph\u00e8te (paix et salut sur lui) recommandait de dire : \u00ab La ilaha illAllahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir \u00bb. Il a \u00e9galement enseign\u00e9 que celui qui se r\u00e9veille la nuit et prononce cette invocation puis fait une doua, elle sera exauc\u00e9e.",
  },
  {
    question: "Est-il permis de prendre des somnif\u00e8res en islam ?",
    answer:
      "Les savants autorisent le recours aux somnif\u00e8res sous prescription m\u00e9dicale lorsqu&apos;il y a un v\u00e9ritable besoin de sant\u00e9. Cependant, il est recommand\u00e9 de privil\u00e9gier d&apos;abord les moyens naturels et spirituels : les adhkar du soir, les invocations proph\u00e9tiques, une bonne hygi\u00e8ne de sommeil et la consultation m\u00e9dicale. Se soigner fait partie de la Sunna.",
  },
  {
    question: "Pourquoi le Proph\u00e8te dormait-il sur le c\u00f4t\u00e9 droit ?",
    answer:
      "Le Proph\u00e8te (paix et salut sur lui) recommandait de dormir sur le c\u00f4t\u00e9 droit car cela fait partie de la Sunna et poss\u00e8de des bienfaits m\u00e9dicaux reconnus (meilleure digestion, soulagement du c\u0153ur). Il pla\u00e7ait sa main droite sous sa joue et r\u00e9citait les invocations du coucher. Cette position est un adab (bonne mani\u00e8re) du sommeil en islam.",
  },
  {
    question: "Combien de fois r\u00e9citer Ayat al-Kursi avant de dormir ?",
    answer:
      "Il suffit de r\u00e9citer Ayat al-Kursi une seule fois avant de dormir pour b\u00e9n\u00e9ficier de la protection d&apos;Allah toute la nuit. Le Proph\u00e8te (paix et salut sur lui) a dit que celui qui la r\u00e9cite en se couchant aura un gardien d&apos;Allah aupr\u00e8s de lui et aucun d\u00e9mon ne pourra l&apos;approcher jusqu&apos;au matin (al-Bukhari).",
  },
  {
    question: "Le dernier tiers de la nuit est-il li\u00e9 au sommeil en islam ?",
    answer:
      "Oui, le dernier tiers de la nuit est un moment b\u00e9ni o\u00f9 Allah descend au ciel le plus bas et dit : \u00ab Qui M&apos;invoque pour que Je lui r\u00e9ponde ? \u00bb (al-Bukhari et Muslim). Le croyant qui se r\u00e9veille \u00e0 ce moment est encourag\u00e9 \u00e0 prier et invoquer plut\u00f4t qu&apos;\u00e0 chercher \u00e0 se rendormir imm\u00e9diatement, car c&apos;est l&apos;un des meilleurs moments pour la doua.",
  },
];

export default function DouaInsomnieSommeilIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-insomnie-sommeil-islam/#article",
        headline:
          "Doua contre l\u2019insomnie et pour le sommeil en islam : invocations authentiques",
        description:
          "D\u00e9couvrez les douas contre l\u2019insomnie en islam : invocations avant de dormir, Ayat al-Kursi, derniers versets d\u2019al-Baqarah, hadiths et conseils proph\u00e9tiques.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-04-05",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-insomnie-sommeil-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-insomnie-sommeil-islam/#breadcrumb",
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
            name: "Doua en islam",
            item: "https://www.islamreligion.fr/doua-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Doua contre l\u2019insomnie",
            item: "https://www.islamreligion.fr/doua-insomnie-sommeil-islam",
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
          title="Doua contre l&apos;insomnie et pour le sommeil en islam"
          subtitle="Les invocations authentiques pour trouver le sommeil, tir\u00e9es du Coran et de la Sunna. Textes en arabe, phon\u00e9tique et traduction fran\u00e7aise."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains en invocation avec lumi\u00e8re subtile illustrant la doua contre l\u2019insomnie et pour le sommeil en islam"
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
                aria-label="Fil d&apos;Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua contre l&apos;insomnie</span>
              </nav>

              {/* R\u00e9sum\u00e9 rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r\u00e9sum\u00e9
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le sommeil est une b\u00e9n\u00e9diction d&apos;Allah et un signe de Sa
                  puissance. L&apos;islam offre un ensemble complet d&apos;invocations
                  pour pr\u00e9parer le coucher, trouver le sommeil et se prot\u00e9ger
                  durant la nuit. De la doua &laquo;&nbsp;Bismika Allahumma amutu wa
                  ahya&nbsp;&raquo; \u00e0 la r\u00e9citation d&apos;Ayat al-Kursi et des
                  derniers versets de sourate al-Baqarah, le croyant dispose de
                  moyens spirituels puissants pour vaincre l&apos;insomnie et
                  b\u00e9n\u00e9ficier d&apos;un sommeil paisible et protecteur.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le sommeil en islam */}
              {/* ============================================ */}
              <section id="sommeil-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le sommeil en islam : une b\u00e9n\u00e9diction et un signe divin
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le sommeil occupe une place fondamentale dans la conception
                  islamique de la vie. Allah le mentionne dans le Coran comme
                  l&apos;un de Ses signes les plus manifestes, une
                  manifestation de Sa mis\u00e9ricorde envers Ses cr\u00e9atures. Le
                  terme arabe <strong>nawm</strong> (نوم) d\u00e9signe le sommeil,
                  tandis que <strong>subat</strong> (سبات) \u00e9voque le repos
                  profond et r\u00e9parateur qu&apos;Allah a institu\u00e9 pour l&apos;homme.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Et parmi Ses signes,
                  votre sommeil la nuit et le jour, et votre qu\u00eate de Sa
                  gr\u00e2ce. Il y a en cela des signes pour des gens qui
                  entendent&nbsp;&raquo; (Ar-Rum, 30:23). Ce verset place le
                  sommeil au rang des preuves de l&apos;existence et de la
                  bienveillance d&apos;Allah. Le sommeil est un rappel quotidien
                  de notre vuln\u00e9rabilit\u00e9 : chaque nuit, nous perdons
                  conscience de ce monde, et chaque matin, Allah nous ressuscite.
                  C&apos;est pourquoi le Proph\u00e8te (paix et salut sur lui)
                  comparait le sommeil \u00e0 une petite mort.
                </p>

                <HadithCard
                  arabic="\u0627\u0644\u0646\u0651\u064e\u0648\u0652\u0645\u064f \u0623\u064e\u062e\u0648 \u0627\u0644\u0652\u0645\u064e\u0648\u0652\u062a\u0650"
                  text="Le sommeil est le fr\u00e8re de la mort."
                  source="Rapport\u00e9 par at-Tabarani, authentifi\u00e9 par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette comparaison n&apos;est pas anodine. Elle rappelle au
                  croyant que s&apos;endormir sans se pr\u00e9parer
                  spirituellement \u00e9quivaut \u00e0 mourir sans se repentir.
                  C&apos;est pourquoi l&apos;islam a \u00e9tabli tout un ensemble
                  de rites et d&apos;invocations li\u00e9s au coucher, formant ce que
                  les savants appellent les <strong>adab an-nawm</strong> (les
                  bonnes mani\u00e8res du sommeil). Ces adab englobent les
                  ablutions avant le coucher, le choix de la position (sur le
                  c\u00f4t\u00e9 droit), la r\u00e9citation des invocations et la
                  purification de l&apos;intention.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le sommeil comme signe divin :</strong>{" "}
                      Allah mentionne le sommeil parmi Ses signes dans
                      plusieurs versets du Coran, au m\u00eame titre que la
                      cr\u00e9ation des cieux et de la terre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un bienfait \u00e0 prot\u00e9ger :</strong>{" "}
                      l&apos;insomnie est consid\u00e9r\u00e9e comme une \u00e9preuve dont
                      le croyant peut se pr\u00e9munir par les invocations
                      proph\u00e9tiques et le rappel d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une pr\u00e9paration \u00e0 la mort :</strong>{" "}
                      chaque endormissement est un rappel de la mort, et chaque
                      r\u00e9veil une r\u00e9surrection, comme l&apos;enseigne la{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">tradition des invocations en islam</Link>.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en pri\u00e8re dans une mosqu\u00e9e illustrant les invocations du soir avant le sommeil en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua avant de dormir */}
              {/* ============================================ */}
              <section id="doua-avant-dormir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua avant de dormir : &laquo;&nbsp;Bismika Allahumma amutu wa ahya&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua la plus embl\u00e9matique du coucher en islam est celle
                  que le Proph\u00e8te (paix et salut sur lui) r\u00e9citait chaque
                  soir en posant sa t\u00eate sur l&apos;oreiller. Cette invocation
                  courte mais profonde r\u00e9sume toute la philosophie islamique
                  du sommeil : un abandon confiant entre les mains d&apos;Allah,
                  une remise totale de son \u00e2me \u00e0 son Cr\u00e9ateur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0628\u0650\u0627\u0633\u0652\u0645\u0650\u0643\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0623\u064e\u0645\u064f\u0648\u062a\u064f \u0648\u064e\u0623\u064e\u062d\u0652\u064a\u064e\u0627
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Bismika Allahumma amutu wa ahya
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;C&apos;est en Ton nom, \u00f4 Allah, que je meurs et que je vis&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (6324) et Muslim (2710)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mot &laquo;&nbsp;amutu&nbsp;&raquo; (je meurs) fait
                  r\u00e9f\u00e9rence au sommeil, et &laquo;&nbsp;ahya&nbsp;&raquo; (je
                  vis) au r\u00e9veil. En pronon\u00e7ant cette doua, le croyant
                  reconna\u00eet que son \u00e2me est entre les mains d&apos;Allah et
                  que seul Lui d\u00e9cide de la lui rendre au matin ou de la
                  garder d\u00e9finitivement. Cette conscience transforme
                  l&apos;acte quotidien de s&apos;endormir en un acte d&apos;adoration
                  et de confiance en Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La doua compl\u00e8te du coucher inclut \u00e9galement une
                  invocation plus longue que le Proph\u00e8te (paix et salut sur
                  lui) r\u00e9citait r\u00e9guli\u00e8rement :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0623\u064e\u0633\u0652\u0644\u064e\u0645\u0652\u062a\u064f \u0646\u064e\u0641\u0652\u0633\u0650\u064a \u0625\u0650\u0644\u064e\u064a\u0652\u0643\u064e\u060c \u0648\u064e\u0641\u064e\u0648\u0651\u064e\u0636\u0652\u062a\u064f \u0623\u064e\u0645\u0652\u0631\u0650\u064a \u0625\u0650\u0644\u064e\u064a\u0652\u0643\u064e\u060c \u0648\u064e\u0648\u064e\u062c\u0651\u064e\u0647\u0652\u062a\u064f \u0648\u064e\u062c\u0652\u0647\u0650\u064a \u0625\u0650\u0644\u064e\u064a\u0652\u0643\u064e\u060c \u0648\u064e\u0623\u064e\u0644\u0652\u062c\u064e\u0623\u0652\u062a\u064f \u0638\u064e\u0647\u0652\u0631\u0650\u064a \u0625\u0650\u0644\u064e\u064a\u0652\u0643\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma aslamtu nafsi ilayka, wa fawwadtu amri ilayka, wa wajjahtu wajhi ilayka, wa alja&apos;tu dhahri ilayka
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;\u00d4 Allah, je Te remets mon \u00e2me, je Te confie mon affaire, je tourne mon visage vers Toi, et je cherche refuge aupr\u00e8s de Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (6313) et Muslim (2710)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces invocations du coucher ne sont pas de simples formules
                  rituelles. Elles \u00e9tablissent un lien spirituel entre le
                  croyant et son Seigneur au moment o\u00f9 il est le plus
                  vuln\u00e9rable. Le Proph\u00e8te (paix et salut sur lui) ne
                  s&apos;endormait jamais sans cette pr\u00e9paration spirituelle,
                  et il recommandait \u00e0 sa communaut\u00e9 d&apos;en faire de
                  m\u00eame. Pour d\u00e9couvrir l&apos;ensemble des invocations du coucher,
                  consultez notre article d\u00e9taill\u00e9 sur la{" "}
                  <Link href="/doua-avant-dormir-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua avant de dormir en islam</Link>.
                </p>

                <HadithCard
                  arabic="\u0643\u0627\u0646\u064e \u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u064f \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 \u0625\u0650\u0630\u064e\u0627 \u0623\u064e\u0648\u064e\u0649 \u0625\u0650\u0644\u064e\u0649 \u0641\u0650\u0631\u064e\u0627\u0634\u0650\u0647\u0650 \u0643\u064f\u0644\u0651\u064e \u0644\u064e\u064a\u0652\u0644\u064e\u0629\u064d \u062c\u064e\u0645\u064e\u0639\u064e \u0643\u064e\u0641\u0651\u064e\u064a\u0652\u0647\u0650 \u0641\u064e\u0646\u064e\u0641\u064e\u062e\u064e \u0641\u0650\u064a\u0647\u0650\u0645\u064e\u0627 \u0641\u064e\u0642\u064e\u0631\u064e\u0623\u064e \u0641\u0650\u064a\u0647\u0650\u0645\u064e\u0627: \u0642\u064f\u0644\u0652 \u0647\u064f\u0648\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0623\u064e\u062d\u064e\u062f\u060c \u0648\u0642\u064f\u0644\u0652 \u0623\u064e\u0639\u064f\u0648\u0630\u064f \u0628\u0650\u0631\u064e\u0628\u0651\u0650 \u0627\u0644\u0652\u0641\u064e\u0644\u064e\u0642\u0650\u060c \u0648\u0642\u064f\u0644\u0652 \u0623\u064e\u0639\u064f\u0648\u0630\u064f \u0628\u0650\u0631\u064e\u0628\u0651\u0650 \u0627\u0644\u0646\u0651\u064e\u0627\u0633\u0650"
                  text="Le Proph\u00e8te (paix et salut sur lui), chaque nuit, lorsqu&apos;il se couchait, r\u00e9unissait ses paumes, soufflait dedans et y r\u00e9citait sourate al-Ikhlas, sourate al-Falaq et sourate an-Nas."
                  source="Rapport\u00e9 par al-Bukhari (5017)"
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations proph\u00e9tiques dans leur langue originale. D\u00e9couvrez des formations adapt\u00e9es aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommand\u00e9es"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Ayat al-Kursi */}
              {/* ============================================ */}
              <section id="ayat-al-kursi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ayat al-Kursi : la protection divine pendant la nuit
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Ayat al-Kursi (le verset du Tr\u00f4ne, verset 255 de sourate
                  al-Baqarah) est consid\u00e9r\u00e9 comme le plus grand verset du
                  Coran. Sa r\u00e9citation avant le sommeil constitue l&apos;une
                  des protections les plus puissantes que le croyant puisse
                  solliciter pour sa nuit. Le Proph\u00e8te (paix et salut sur
                  lui) a explicitement enseign\u00e9 son effet protecteur nocturne
                  dans un hadith c\u00e9l\u00e8bre.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0644\u064e\u0627 \u0625\u0650\u0644\u064e\u0647\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0647\u064f\u0648\u064e \u0627\u0644\u0652\u062d\u064e\u064a\u0651\u064f \u0627\u0644\u0652\u0642\u064e\u064a\u0651\u064f\u0648\u0645\u064f \u060c \u0644\u064e\u0627 \u062a\u064e\u0623\u0652\u062e\u064f\u0630\u064f\u0647\u064f \u0633\u0650\u0646\u064e\u0629\u064c \u0648\u064e\u0644\u064e\u0627 \u0646\u064e\u0648\u0652\u0645\u064c
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta&apos;khudhuhu sinatun wa la nawm
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah, il n&apos;y a de divinit\u00e9 que Lui, le Vivant, Celui qui subsiste par Lui-m\u00eame. Ni somnolence ni sommeil ne Le saisissent&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqarah (2:255)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le lien entre Ayat al-Kursi et le sommeil est particuli\u00e8rement
                  profond. Le verset lui-m\u00eame mentionne que ni la somnolence
                  (sina) ni le sommeil (nawm) ne saisissent Allah. Tandis que
                  le croyant s&apos;abandonne au sommeil, il confie sa protection
                  \u00e0 Celui qui ne dort jamais. C&apos;est cette r\u00e9alit\u00e9
                  th\u00e9ologique qui conf\u00e8re \u00e0 ce verset sa puissance
                  protectrice nocturne.
                </p>

                <HadithCard
                  arabic="\u0645\u064e\u0646\u0652 \u0642\u064e\u0631\u064e\u0623\u064e \u0622\u064a\u064e\u0629\u064e \u0627\u0644\u0652\u0643\u064f\u0631\u0652\u0633\u0650\u064a\u0651\u0650 \u062d\u0650\u064a\u0646\u064e \u064a\u064e\u0623\u0652\u0648\u0650\u064a \u0625\u0650\u0644\u064e\u0649 \u0641\u0650\u0631\u064e\u0627\u0634\u0650\u0647\u0650 \u0644\u064e\u0645\u0652 \u064a\u064e\u0632\u064e\u0644\u0652 \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0645\u0650\u0646\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u062d\u064e\u0627\u0641\u0650\u0638\u064c \u0648\u064e\u0644\u064e\u0627 \u064a\u064e\u0642\u0652\u0631\u064e\u0628\u064f\u0647\u064f \u0634\u064e\u064a\u0652\u0637\u064e\u0627\u0646\u064c \u062d\u064e\u062a\u0651\u064e\u0649 \u064a\u064f\u0635\u0652\u0628\u0650\u062d\u064e"
                  text="Celui qui r\u00e9cite Ayat al-Kursi en se couchant, un gardien d&apos;Allah reste aupr\u00e8s de lui et aucun d\u00e9mon ne peut l&apos;approcher jusqu&apos;au matin."
                  source="Rapport\u00e9 par al-Bukhari (2311)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une clart\u00e9 remarquable : la simple
                  r\u00e9citation d&apos;Ayat al-Kursi au moment du coucher
                  garantit une protection ang\u00e9lique tout au long de la nuit.
                  Le gardien (hafidh) envoy\u00e9 par Allah veille sur le dormeur
                  et emp\u00eache les d\u00e9mons de l&apos;approcher. Pour ceux qui
                  souffrent de cauchemars ou de troubles du sommeil li\u00e9s \u00e0
                  l&apos;angoisse, cette protection est un rempart spirituel
                  in\u00e9galable. D\u00e9couvrez \u00e9galement les invocations contre les{" "}
                  <Link href="/doua-cauchemar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">cauchemars en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Derniers versets al-Baqarah */}
              {/* ============================================ */}
              <section id="derniers-versets-baqarah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les derniers versets de sourate al-Baqarah avant le sommeil
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les deux derniers versets de sourate al-Baqarah (versets 285
                  et 286) occupent une place privil\u00e9gi\u00e9e dans les pratiques
                  nocturnes du musulman. Le Proph\u00e8te (paix et salut sur lui)
                  a enseign\u00e9 que leur r\u00e9citation avant le sommeil suffit au
                  croyant pour toute la nuit, lui assurant protection et
                  tranquillit\u00e9 jusqu&apos;au matin.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0622\u0645\u064e\u0646\u064e \u0627\u0644\u0631\u0651\u064e\u0633\u064f\u0648\u0644\u064f \u0628\u0650\u0645\u064e\u0627 \u0623\u064f\u0646\u0632\u0650\u0644\u064e \u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650 \u0645\u0650\u0646 \u0631\u0651\u064e\u0628\u0651\u0650\u0647\u0650 \u0648\u064e\u0627\u0644\u0652\u0645\u064f\u0624\u0652\u0645\u0650\u0646\u064f\u0648\u0646\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Amanar-Rasulu bima unzila ilayhi mir-Rabbihi wal-mu&apos;minun
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Le Messager a cru en ce qui lui a \u00e9t\u00e9 descendu de la part de son Seigneur, ainsi que les croyants...&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqarah (2:285-286)
                  </p>
                </div>

                <HadithCard
                  arabic="\u0645\u064e\u0646\u0652 \u0642\u064e\u0631\u064e\u0623\u064e \u0628\u0650\u0627\u0644\u0622\u064a\u064e\u062a\u064e\u064a\u0652\u0646\u0650 \u0645\u0650\u0646\u0652 \u0622\u062e\u0650\u0631\u0650 \u0633\u064f\u0648\u0631\u064e\u0629\u0650 \u0627\u0644\u0652\u0628\u064e\u0642\u064e\u0631\u064e\u0629\u0650 \u0641\u0650\u064a \u0644\u064e\u064a\u0652\u0644\u064e\u0629\u064d \u0643\u064e\u0641\u064e\u062a\u064e\u0627\u0647\u064f"
                  text="Celui qui r\u00e9cite les deux derniers versets de sourate al-Baqarah dans la nuit, ils lui suffisent."
                  source="Rapport\u00e9 par al-Bukhari (5009) et Muslim (807)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;expression &laquo;&nbsp;ils lui suffisent&nbsp;&raquo;
                  (kafatahu) a \u00e9t\u00e9 interpr\u00e9t\u00e9e de plusieurs mani\u00e8res
                  par les savants. Certains consid\u00e8rent qu&apos;ils suffisent
                  comme protection contre le mal et les d\u00e9mons. D&apos;autres
                  estiment qu&apos;ils suffisent comme pri\u00e8re nocturne (qiyam
                  al-layl) pour celui qui ne peut la faire. D&apos;autres encore
                  combinent les deux avis : ces versets offrent \u00e0 la fois
                  protection et r\u00e9compense spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces versets contiennent en eux-m\u00eames une doua puissante.
                  Le dernier verset (286) se termine par l&apos;invocation :
                  &laquo;&nbsp;Rabbana la tu&apos;akhidhna in nasina aw
                  akhta&apos;na&nbsp;&raquo; (Seigneur, ne nous ch\u00e2tie pas si
                  nous oublions ou si nous commettons une erreur). Cette
                  supplication, prononc\u00e9e avant le sommeil, couvre le croyant
                  d&apos;une protection compl\u00e8te contre les erreurs et les
                  oublis, y compris ceux commis durant le sommeil.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dor\u00e9e illustrant les versets de sourate al-Baqarah pour le sommeil"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua quand on n'arrive pas \u00e0 dormir */}
              {/* ============================================ */}
              <section id="doua-insomnie" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua quand on n&apos;arrive pas \u00e0 dormir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;insomnie touche de nombreuses personnes, y compris
                  parmi les croyants. L&apos;islam ne laisse pas le musulman
                  d\u00e9muni face \u00e0 cette \u00e9preuve. Le Proph\u00e8te (paix et salut
                  sur lui) et ses compagnons ont transmis des invocations
                  sp\u00e9cifiques pour celui qui se tourne et se retourne dans
                  son lit sans trouver le repos. Au-del\u00e0 des douas,
                  l&apos;approche proph\u00e9tique de l&apos;insomnie est
                  remarquablement \u00e9quilibr\u00e9e : elle allie le spirituel
                  au pratique.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0644\u064e\u0627 \u0625\u0650\u0644\u064e\u0647\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0648\u064e\u062d\u0652\u062f\u064e\u0647\u064f \u0644\u064e\u0627 \u0634\u064e\u0631\u0650\u064a\u0643\u064e \u0644\u064e\u0647\u064f\u060c \u0644\u064e\u0647\u064f \u0627\u0644\u0652\u0645\u064f\u0644\u0652\u0643\u064f \u0648\u064e\u0644\u064e\u0647\u064f \u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f\u060c \u0648\u064e\u0647\u064f\u0648\u064e \u0639\u064e\u0644\u064e\u0649 \u0643\u064f\u0644\u0651\u0650 \u0634\u064e\u064a\u0652\u0621\u064d \u0642\u064e\u062f\u0650\u064a\u0631\u060c \u0633\u064f\u0628\u0652\u062d\u064e\u0627\u0646\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u0650\u060c \u0648\u064e\u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u064e\u0647\u0650\u060c \u0648\u064e\u0644\u064e\u0627 \u0625\u0650\u0644\u064e\u0647\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u060c \u0648\u064e\u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0623\u064e\u0643\u0652\u0628\u064e\u0631\u064f\u060c \u0648\u064e\u0644\u064e\u0627 \u062d\u064e\u0648\u0652\u0644\u064e \u0648\u064e\u0644\u064e\u0627 \u0642\u064f\u0648\u0651\u064e\u0629\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0628\u0650\u0627\u0644\u0644\u0651\u064e\u0647\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> La ilaha illAllahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir. SubhanAllah, wal-hamdu lillah, wa la ilaha illAllah, wAllahu akbar, wa la hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinit\u00e9 qu&apos;Allah, Unique, sans associ\u00e9. \u00c0 Lui la royaut\u00e9 et la louange, et Il est capable de toute chose. Gloire \u00e0 Allah, louange \u00e0 Allah, il n&apos;y a de divinit\u00e9 qu&apos;Allah, Allah est le plus Grand, et il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (1154)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) a enseign\u00e9 que celui
                  qui se r\u00e9veille la nuit et prononce cette invocation, puis
                  dit &laquo;&nbsp;Allahumma ighfir li&nbsp;&raquo; (Seigneur,
                  pardonne-moi) ou fait toute autre doua, elle sera exauc\u00e9e.
                  Et s&apos;il fait ses ablutions et prie, sa pri\u00e8re sera
                  accept\u00e9e. Ce hadith offre une perspective compl\u00e8tement
                  diff\u00e9rente sur l&apos;insomnie : plut\u00f4t qu&apos;une
                  source de frustration, elle peut devenir une occasion en or
                  pour le croyant de multiplier les invocations exauc\u00e9es.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent \u00e9galement le dhikr r\u00e9p\u00e9titif
                  comme moyen de trouver le sommeil. R\u00e9p\u00e9ter
                  &laquo;&nbsp;SubhanAllah&nbsp;&raquo;,
                  &laquo;&nbsp;Al-hamdu lillah&nbsp;&raquo; et
                  &laquo;&nbsp;Allahu akbar&nbsp;&raquo; apaise le c\u0153ur et
                  d\u00e9tourne l&apos;esprit des pens\u00e9es anxieuses qui
                  emp\u00eachent le sommeil. Ali ibn Abi Talib (qu&apos;Allah soit
                  satisfait de lui) rapporte que Fatima (qu&apos;Allah soit
                  satisfait d&apos;elle) demanda un serviteur au Proph\u00e8te, qui
                  lui r\u00e9pondit : &laquo;&nbsp;Ne vous indiquerai-je pas
                  quelque chose de meilleur ? Dites 33 fois SubhanAllah, 33 fois
                  Al-hamdu lillah et 34 fois Allahu akbar avant de
                  dormir&nbsp;&raquo; (al-Bukhari et Muslim). Pour ceux qui
                  souffrent aussi d&apos;angoisse nocturne, la{" "}
                  <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre l&apos;angoisse et le stress</Link>{" "}
                  peut \u00eatre un compl\u00e9ment pr\u00e9cieux.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : R\u00e9veil la nuit */}
              {/* ============================================ */}
              <section id="reveil-nuit" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en cas de r\u00e9veil nocturne et cauchemar
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Se r\u00e9veiller au milieu de la nuit est une exp\u00e9rience
                  fr\u00e9quente qui peut g\u00e9n\u00e9rer de l&apos;angoisse et de la
                  frustration. L&apos;islam transforme ce moment en une
                  opportunit\u00e9 spirituelle exceptionnelle. Le Proph\u00e8te (paix
                  et salut sur lui) a enseign\u00e9 que le r\u00e9veil nocturne peut
                  \u00eatre un don d&apos;Allah, une invitation \u00e0 le rencontrer
                  dans l&apos;intimit\u00e9 de la nuit, \u00e0 un moment o\u00f9 les
                  invocations sont particuli\u00e8rement exauc\u00e9es.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0651\u064e\u0630\u0650\u064a \u0623\u064e\u062d\u0652\u064a\u064e\u0627\u0646\u064e\u0627 \u0628\u064e\u0639\u0652\u062f\u064e \u0645\u064e\u0627 \u0623\u064e\u0645\u064e\u0627\u062a\u064e\u0646\u064e\u0627 \u0648\u064e\u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650 \u0627\u0644\u0646\u0651\u064f\u0634\u064f\u0648\u0631\u064f
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Al-hamdu lillahil-ladhi ahyana ba&apos;da ma amatana wa ilayhin-nushur
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange \u00e0 Allah qui nous a redonn\u00e9 la vie apr\u00e8s nous avoir fait mourir, et c&apos;est vers Lui la r\u00e9surrection&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (6324)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation du r\u00e9veil est le pendant exact de la doua
                  du coucher. Si l&apos;on dit &laquo;&nbsp;Bismika Allahumma
                  amutu&nbsp;&raquo; en s&apos;endormant, on dit
                  &laquo;&nbsp;Al-hamdu lillahil-ladhi ahyana&nbsp;&raquo; en
                  se r\u00e9veillant. Ce cycle complet (mort-r\u00e9surrection)
                  v\u00e9cu chaque nuit pr\u00e9pare le croyant au grand r\u00e9veil
                  du Jour Dernier.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En cas de cauchemar, le Proph\u00e8te (paix et salut sur lui) a
                  enseign\u00e9 un protocole pr\u00e9cis : cracher l\u00e9g\u00e8rement trois
                  fois sur le c\u00f4t\u00e9 gauche, chercher refuge aupr\u00e8s d&apos;Allah
                  contre le d\u00e9mon et contre le mal de ce que l&apos;on a vu,
                  changer de c\u00f4t\u00e9 et ne raconter le mauvais r\u00eave \u00e0
                  personne. Ce protocole spirituel et pratique permet de
                  retrouver rapidement la s\u00e9r\u00e9nit\u00e9 et de se rendormir en
                  paix.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0623\u064e\u0639\u064f\u0648\u0630\u064f \u0628\u0650\u0643\u064e\u0644\u0650\u0645\u064e\u0627\u062a\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u062a\u0651\u064e\u0627\u0645\u0651\u064e\u0627\u062a\u0650 \u0645\u0650\u0646\u0652 \u063a\u064e\u0636\u064e\u0628\u0650\u0647\u0650 \u0648\u064e\u0639\u0650\u0642\u064e\u0627\u0628\u0650\u0647\u0650 \u0648\u064e\u0634\u064e\u0631\u0651\u0650 \u0639\u0650\u0628\u064e\u0627\u062f\u0650\u0647\u0650 \u0648\u064e\u0645\u0650\u0646\u0652 \u0647\u064e\u0645\u064e\u0632\u064e\u0627\u062a\u0650 \u0627\u0644\u0634\u0651\u064e\u064a\u064e\u0627\u0637\u0650\u064a\u0646\u0650 \u0648\u064e\u0623\u064e\u0646\u0652 \u064a\u064e\u062d\u0652\u0636\u064f\u0631\u064f\u0648\u0646\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> A&apos;udhu bi kalimatillahit-tammati min ghadabihi wa &apos;iqabihi wa sharri &apos;ibadihi wa min hamazatish-shayatini wa an yahduruni
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre Sa col\u00e8re, Son ch\u00e2timent, le mal de Ses serviteurs et contre les suggestions des d\u00e9mons et leur pr\u00e9sence&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Abu Dawud (3893), authentifi\u00e9 par al-Albani
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>R\u00e9veil au dernier tiers de la nuit :</strong>{" "}
                      c&apos;est le moment o\u00f9 Allah descend au ciel le plus
                      bas. Profitez-en pour prier et invoquer plut\u00f4t que de
                      chercher imm\u00e9diatement \u00e0 vous rendormir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cauchemar :</strong> ne le racontez \u00e0 personne,
                      crachez l\u00e9g\u00e8rement trois fois \u00e0 gauche, changez de
                      c\u00f4t\u00e9 et cherchez refuge aupr\u00e8s d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Bon r\u00eave :</strong> remerciez Allah, partagez-le
                      uniquement avec une personne de confiance, et ne
                      l&apos;interpr\u00e9tez pas vous-m\u00eame sans connaissance.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils proph\u00e9tiques */}
              {/* ============================================ */}
              <section id="conseils-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils proph\u00e9tiques pour un sommeil paisible
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-del\u00e0 des invocations, le Proph\u00e8te (paix et salut sur
                  lui) a transmis un ensemble de recommandations pratiques
                  qui forment une v\u00e9ritable hygi\u00e8ne de sommeil en islam.
                  Ces conseils, pratiqu\u00e9s il y a quatorze si\u00e8cles,
                  rejoignent remarquablement les d\u00e9couvertes de la
                  m\u00e9decine moderne sur le sommeil et ses m\u00e9canismes.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Dormir sur le c\u00f4t\u00e9 droit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) recommandait de
                      s&apos;allonger sur le c\u00f4t\u00e9 droit et de placer la main
                      droite sous la joue. Cette position favorise la
                      digestion, soulage le c\u0153ur et constitue une Sunna
                      du coucher. La m\u00e9decine moderne confirme les bienfaits
                      de cette position.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Faire ses ablutions
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) recommandait
                      de faire ses ablutions avant de se coucher, m\u00eame si
                      l&apos;on n&apos;est pas en \u00e9tat d&apos;impuret\u00e9 majeure.
                      Les ablutions purifient le corps et l&apos;\u00e2me,
                      pr\u00e9parant le croyant \u00e0 la rencontre avec Allah
                      durant le sommeil.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      \u00c9teindre les lumi\u00e8res
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) ordonnait
                      d&apos;\u00e9teindre les lampes la nuit et de fermer les
                      portes (al-Bukhari et Muslim). La m\u00e9decine moderne
                      confirme que l&apos;obscurit\u00e9 favorise la production
                      de m\u00e9latonine, l&apos;hormone du sommeil, et am\u00e9liore
                      la qualit\u00e9 du repos.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      \u00c9viter de dormir sur le ventre
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) a d\u00e9conseill\u00e9
                      de dormir sur le ventre, qualifiant cette position de
                      &laquo;&nbsp;position des gens de l&apos;Enfer&nbsp;&raquo;
                      (at-Tirmidhi). Les \u00e9tudes m\u00e9dicales confirment
                      qu&apos;elle peut causer des douleurs dorsales et des
                      troubles respiratoires nocturnes.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;approche proph\u00e9tique du sommeil est donc holistique :
                  elle int\u00e8gre la dimension spirituelle (douas, dhikr,
                  ablutions), la dimension physique (position, environnement)
                  et la dimension psychologique (confiance en Allah, s\u00e9r\u00e9nit\u00e9
                  int\u00e9rieure). Le croyant qui suit cet ensemble de
                  recommandations se donne les meilleures chances de vaincre
                  l&apos;insomnie et de b\u00e9n\u00e9ficier d&apos;un sommeil r\u00e9parateur
                  et protecteur. Pour approfondir les invocations du
                  soir, consultez notre guide sur la{" "}
                  <Link href="/doua-avant-dormir-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua avant de dormir</Link>{" "}
                  ainsi que l&apos;article d\u00e9di\u00e9 \u00e0 la{" "}
                  <Link href="/doua-cauchemar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre les cauchemars</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua avant de dormir en islam"
                  description="D\u00e9couvrez toutes les invocations proph\u00e9tiques du coucher : adhkar du soir, sourates protectrices et rituels du sommeil."
                  href="/doua-avant-dormir-islam"
                />
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Ma\u00eetrisez la langue du Coran pour r\u00e9citer les douas avec compr\u00e9hension et profondeur spirituelle. D\u00e9couvrez nos formations en ligne adapt\u00e9es \u00e0 tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur les invocations en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam (guide complet)
                  </Link>
                  <Link
                    href="/doua-avant-dormir-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua avant de dormir
                  </Link>
                  <Link
                    href="/doua-cauchemar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre les cauchemars
                  </Link>
                  <Link
                    href="/doua-angoisse-stress-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;angoisse
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages m\u00e8res */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le m\u00eame sujet
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
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
