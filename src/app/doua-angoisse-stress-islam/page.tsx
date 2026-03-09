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
    "Doua contre l\u2019angoisse et le stress en islam : invocations authentiques",
  description:
    "D\u00e9couvrez les douas contre l\u2019angoisse et le stress en islam : invocations proph\u00e9tiques en arabe avec phon\u00e9tique et traduction, hadiths authentiques, la hawla wa la quwwata, doua de Younous et conseils pratiques pour apaiser l\u2019\u00e2me.",
  openGraph: {
    title:
      "Doua contre l\u2019angoisse et le stress en islam : invocations authentiques",
    description:
      "Les invocations authentiques contre l\u2019angoisse et le stress en islam : textes en arabe, phon\u00e9tique, traduction et hadiths du Proph\u00e8te (paix et salut sur lui).",
    url: "https://www.islamreligion.fr/doua-angoisse-stress-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-angoisse-stress-islam",
  },
};

const tocItems = [
  { id: "angoisse-stress-islam", label: "L\u2019angoisse et le stress dans la vision islamique" },
  { id: "doua-hamm-hazan", label: "Doua contre le souci et la tristesse (al-hamm wal-hazan)" },
  { id: "doua-younous", label: "La doua de Younous : refuge dans la d\u00e9tresse" },
  { id: "la-hawla-wa-la-quwwata", label: "La hawla wa la quwwata illa billah" },
  { id: "douas-apaisement", label: "Douas proph\u00e9tiques pour apaiser l\u2019\u00e2me" },
  { id: "conseils-pratiques", label: "Conseils pratiques face \u00e0 l\u2019anxi\u00e9t\u00e9" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua contre l\u2019angoisse en islam ?",
    answer:
      "La doua la plus compl\u00e8te contre l&apos;angoisse est celle rapport\u00e9e par Ahmad et authentifi\u00e9e par al-Albani : \u00ab Allahumma inni a&apos;udhu bika min al-hammi wal-hazan, wal-&apos;ajzi wal-kasal, wal-bukhli wal-jubn, wa dala&apos;id-dayni wa ghalabatir-rijal \u00bb. Le Proph\u00e8te (paix et salut sur lui) la r\u00e9citait r\u00e9guli\u00e8rement pour se prot\u00e9ger du souci, de la tristesse, de l&apos;incapacit\u00e9 et de la paresse.",
  },
  {
    question: "Est-ce que l\u2019islam reconna\u00eet le stress et l\u2019anxi\u00e9t\u00e9 ?",
    answer:
      "Oui, l&apos;islam reconna\u00eet pleinement que l&apos;\u00eatre humain traverse des p\u00e9riodes d&apos;angoisse et de stress. Le Coran mentionne les \u00e9tats de tristesse (huzn), de souci (hamm) et de d\u00e9tresse (karb). Le Proph\u00e8te (paix et salut sur lui) lui-m\u00eame a v\u00e9cu des moments d&apos;intense affliction, comme l&apos;ann\u00e9e de la tristesse (\u2018am al-huzn). L&apos;islam propose des rem\u00e8des spirituels compl\u00e9mentaires \u00e0 la prise en charge m\u00e9dicale.",
  },
  {
    question: "Peut-on r\u00e9citer les douas contre le stress en fran\u00e7ais ?",
    answer:
      "Oui, les supplications personnelles peuvent \u00eatre faites dans toute langue. Cependant, les invocations proph\u00e9tiques en arabe poss\u00e8dent une puissance spirituelle particuli\u00e8re. Il est recommand\u00e9 d&apos;apprendre au moins les formules courtes comme \u00ab La hawla wa la quwwata illa billah \u00bb et \u00ab La ilaha illa Anta subhanaka \u00bb en arabe, puis de compl\u00e9ter par des supplications en fran\u00e7ais.",
  },
  {
    question: "Combien de fois faut-il r\u00e9citer la doua contre l\u2019angoisse ?",
    answer:
      "Il n&apos;y a pas de nombre fix\u00e9 pour la plupart des douas contre l&apos;angoisse. Cependant, certains adhkar ont des r\u00e9p\u00e9titions recommand\u00e9es : le Proph\u00e8te (paix et salut sur lui) r\u00e9p\u00e9tait certaines formules trois fois, sept fois ou cent fois. L&apos;essentiel est la pr\u00e9sence du c\u0153ur et la sinc\u00e9rit\u00e9 lors de la r\u00e9citation, plut\u00f4t que le nombre m\u00e9canique de r\u00e9p\u00e9titions.",
  },
  {
    question: "Quand r\u00e9citer les douas contre le stress ?",
    answer:
      "Les douas contre le stress peuvent \u00eatre r\u00e9cit\u00e9es \u00e0 tout moment. Cependant, certains instants sont particuli\u00e8rement propices : le dernier tiers de la nuit, lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, apr\u00e8s les pri\u00e8res obligatoires et le matin et le soir lors des adhkar quotidiens. En cas de crise d&apos;angoisse, on peut invoquer imm\u00e9diatement sans attendre un moment particulier.",
  },
  {
    question: "La doua peut-elle remplacer un traitement m\u00e9dical contre l\u2019anxi\u00e9t\u00e9 ?",
    answer:
      "Non, la doua et le traitement m\u00e9dical sont compl\u00e9mentaires et non exclusifs. L&apos;islam encourage la recherche de rem\u00e8des : le Proph\u00e8te (paix et salut sur lui) a dit \u00ab Soignez-vous, car Allah n&apos;a pas cr\u00e9\u00e9 de maladie sans cr\u00e9er de rem\u00e8de \u00bb (Abu Dawud). Consulter un m\u00e9decin ou un psychologue pour l&apos;anxi\u00e9t\u00e9 chronique est tout \u00e0 fait conforme \u00e0 l&apos;enseignement islamique.",
  },
  {
    question: "Que signifie \u00ab La hawla wa la quwwata illa billah \u00bb ?",
    answer:
      "Cette formule signifie \u00ab Il n&apos;y a de force ni de puissance qu&apos;en Allah \u00bb. Le Proph\u00e8te (paix et salut sur lui) l&apos;a qualifi\u00e9e de \u00ab tr\u00e9sor parmi les tr\u00e9sors du Paradis \u00bb (al-Bukhari et Muslim). Elle exprime la remise totale de l&apos;affaire \u00e0 Allah et lib\u00e8re le croyant du poids de l&apos;anxi\u00e9t\u00e9 en reconnaissant que tout est entre les mains d&apos;Allah.",
  },
];

export default function DouaAngoisseStressIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-angoisse-stress-islam/#article",
        headline:
          "Doua contre l\u2019angoisse et le stress en islam : invocations authentiques",
        description:
          "D\u00e9couvrez les douas contre l\u2019angoisse et le stress en islam : invocations proph\u00e9tiques en arabe, hadiths authentiques et conseils pratiques pour apaiser l\u2019\u00e2me.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-03-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-angoisse-stress-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-angoisse-stress-islam/#breadcrumb",
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
            name: "Doua contre l\u2019angoisse",
            item: "https://www.islamreligion.fr/doua-angoisse-stress-islam",
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
          title="Doua contre l&apos;angoisse et le stress en islam"
          subtitle="Invocations authentiques du Proph\u00e8te (paix et salut sur lui) pour apaiser l&apos;\u00e2me, combattre l&apos;anxi\u00e9t\u00e9 et retrouver la s\u00e9r\u00e9nit\u00e9. Textes en arabe, phon\u00e9tique et traduction fran\u00e7aise."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains lev\u00e9es en invocation doua contre l&apos;angoisse et le stress avec lumi\u00e8re subtile symbolisant l&apos;apaisement en islam"
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
                <span className="text-foreground">Doua contre l&apos;angoisse</span>
              </nav>

              {/* R\u00e9sum\u00e9 rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r\u00e9sum\u00e9
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;angoisse et le stress font partie des \u00e9preuves que
                  tout croyant peut traverser. Le Proph\u00e8te (paix et salut
                  sur lui) a enseign\u00e9 des invocations sp\u00e9cifiques pour
                  combattre le souci (hamm), la tristesse (hazan) et
                  l&apos;anxi\u00e9t\u00e9. Parmi les plus puissantes : la doua
                  &laquo;&nbsp;Allahumma inni a&apos;udhu bika min
                  al-hamm&nbsp;&raquo;, la formule de Younous &laquo;&nbsp;La
                  ilaha illa Anta subhanaka&nbsp;&raquo; et le tr\u00e9sor du
                  Paradis &laquo;&nbsp;La hawla wa la quwwata illa
                  billah&nbsp;&raquo;. Ces rem\u00e8des spirituels, associ\u00e9s
                  \u00e0 la confiance en Allah, constituent un refuge pour
                  l&apos;\u00e2me en d\u00e9tresse.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L&apos;angoisse et le stress en islam */}
              {/* ============================================ */}
              <section id="angoisse-stress-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;angoisse et le stress dans la vision islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam reconna\u00eet pleinement que l&apos;\u00eatre
                  humain est sujet \u00e0 l&apos;angoisse, au stress et \u00e0
                  l&apos;anxi\u00e9t\u00e9. Le Coran d\u00e9crit l&apos;homme
                  comme ayant \u00e9t\u00e9 cr\u00e9\u00e9 dans la p\u00e9nibilit\u00e9
                  et l&apos;\u00e9preuve : &laquo;&nbsp;Nous avons certes
                  cr\u00e9\u00e9 l&apos;homme pour une vie de
                  lutte&nbsp;&raquo; (sourate Al-Balad, 90:4). Cette
                  r\u00e9alit\u00e9 n&apos;est ni une punition ni un signe de
                  faiblesse de foi, mais une composante naturelle de
                  l&apos;existence terrestre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te Muhammad (paix et salut sur lui) a lui-m\u00eame
                  travers\u00e9 des p\u00e9riodes d&apos;intense affliction.
                  L&apos;ann\u00e9e de la tristesse (&apos;am al-huzn), marqu\u00e9e
                  par la perte de son \u00e9pouse Khadija et de son oncle Abu
                  Talib, illustre que m\u00eame le meilleur des hommes
                  n&apos;\u00e9tait pas \u00e0 l&apos;abri de la souffrance
                  \u00e9motionnelle. Cette r\u00e9alit\u00e9 proph\u00e9tique
                  enseigne au croyant qu&apos;il n&apos;y a aucune honte \u00e0
                  ressentir de l&apos;angoisse, et que la r\u00e9ponse islamique
                  ne consiste pas \u00e0 nier cette souffrance mais \u00e0 la
                  canaliser vers Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le vocabulaire coranique est riche en termes d\u00e9signant les
                  diff\u00e9rentes formes de d\u00e9tresse \u00e9motionnelle. Le
                  <strong> hamm</strong> d\u00e9signe le souci li\u00e9 \u00e0
                  l&apos;avenir, le <strong>hazan</strong> la tristesse
                  caus\u00e9e par le pass\u00e9, le <strong>karb</strong> la
                  d\u00e9tresse aig\u00fce et l&apos;angoisse profonde, et le
                  <strong> diq</strong> l&apos;oppression de la poitrine
                  (constriction). Le Coran mentionne \u00e9galement la
                  <strong> waswasa</strong>, les chuchotements de Shaytan qui
                  alimentent l&apos;anxi\u00e9t\u00e9 et les pens\u00e9es
                  obsessionnelles. Allah offre pour chacun de ces \u00e9tats des
                  rem\u00e8des sp\u00e9cifiques \u00e0 travers le Coran et la
                  Sunna.
                </p>

                <HadithCard
                  arabic="\u0645\u0627 \u0623\u0635\u0627\u0628\u064e \u0639\u0628\u062f\u064b\u0627 \u0647\u0645\u0651\u064c \u0648\u0644\u0627 \u062d\u064f\u0632\u0646\u064c \u0641\u0642\u0627\u0644\u064e: \u0627\u0644\u0644\u0651\u0647\u0645\u0651 \u0625\u0646\u0651\u064a \u0639\u0628\u062f\u064f\u0643\u064e\u060c \u0627\u0628\u0646\u064f \u0639\u0628\u062f\u0650\u0643\u064e\u060c \u0627\u0628\u0646\u064f \u0623\u064e\u0645\u064e\u062a\u0650\u0643\u064e\u060c \u0646\u0627\u0635\u0650\u064a\u062a\u064a \u0628\u064a\u062f\u0650\u0643\u064e\u060c \u0645\u0627\u0636\u064d \u0641\u064a\u0651\u064e \u062d\u064f\u0643\u0645\u064f\u0643\u064e\u060c \u0639\u064e\u062f\u0644\u064c \u0641\u064a\u0651\u064e \u0642\u064e\u0636\u0627\u0624\u064f\u0643\u064e\u060c \u0623\u0633\u0623\u0644\u064f\u0643\u064e \u0628\u0643\u0644\u0651\u0650 \u0627\u0633\u0645\u064d \u0647\u0648\u064e \u0644\u0643\u064e... \u0625\u0644\u0627\u0651 \u0623\u0630\u0647\u064e\u0628\u064e \u0627\u0644\u0644\u0647\u064f \u0647\u064e\u0645\u0651\u064e\u0647\u064f \u0648\u062d\u064f\u0632\u0646\u064e\u0647\u064f \u0648\u0623\u0628\u062f\u064e\u0644\u064e\u0647\u064f \u0645\u0643\u0627\u0646\u064e\u0647\u064f \u0641\u064e\u0631\u064e\u062d\u064b\u0627"
                  text="Aucun serviteur n&apos;est touch\u00e9 par le souci ou la tristesse et dit : \u00ab \u00d4 Allah, je suis Ton serviteur, fils de Ton serviteur... \u00bb sans qu&apos;Allah ne dissipe son souci et sa tristesse et ne les remplace par de la joie."
                  source="Rapport\u00e9 par Ahmad (3712), authentifi\u00e9 par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondateur \u00e9tablit un principe essentiel : Allah
                  a pr\u00e9vu des rem\u00e8des spirituels sp\u00e9cifiques pour
                  chaque forme de souffrance \u00e9motionnelle. Le croyant
                  n&apos;est pas abandonn\u00e9 face \u00e0 son angoisse. Au
                  contraire, l&apos;islam lui offre des outils concrets \u2014
                  les invocations proph\u00e9tiques \u2014 pour transformer sa
                  d\u00e9tresse en un lien renforc\u00e9 avec son Cr\u00e9ateur.
                  L&apos;\u00e9preuve de l&apos;angoisse devient alors une porte
                  vers le rapprochement d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie illustrant les versets sur l&apos;apaisement de l&apos;\u00e2me en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua al-hamm wal-hazan */}
              {/* ============================================ */}
              <section id="doua-hamm-hazan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua contre le souci et la tristesse (al-hamm wal-hazan)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus compl\u00e8tes que le
                  Proph\u00e8te (paix et salut sur lui) ait enseign\u00e9es
                  contre l&apos;angoisse, celle-ci occupe une place centrale.
                  Elle couvre l&apos;ensemble des maux \u00e9motionnels qui
                  peuvent toucher le croyant et constitue un v\u00e9ritable
                  bouclier spirituel contre toutes les formes de d\u00e9tresse
                  psychologique.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u0647\u0645\u0651\u064e \u0625\u0646\u0651\u064a \u0623\u0639\u0648\u0630\u064f \u0628\u0650\u0643\u064e \u0645\u0650\u0646\u064e \u0627\u0644\u0647\u064e\u0645\u0651\u0650 \u0648\u0627\u0644\u062d\u064e\u0632\u064e\u0646\u0650\u060c \u0648\u0627\u0644\u0639\u064e\u062c\u0652\u0632\u0650 \u0648\u0627\u0644\u0643\u064e\u0633\u064e\u0644\u0650\u060c \u0648\u0627\u0644\u0628\u064f\u062e\u0652\u0644\u0650 \u0648\u0627\u0644\u062c\u064f\u0628\u0652\u0646\u0650\u060c \u0648\u0636\u064e\u0644\u064e\u0639\u0650 \u0627\u0644\u062f\u0651\u064e\u064a\u0652\u0646\u0650 \u0648\u063a\u064e\u0644\u064e\u0628\u064e\u0629\u0650 \u0627\u0644\u0631\u0651\u0650\u062c\u0627\u0644\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma inni a&apos;udhu bika min al-hammi wal-hazan, wal-&apos;ajzi wal-kasal, wal-bukhli wal-jubn, wa dala&apos;id-dayni wa ghalabatir-rijal
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;\u00d4 Allah, je cherche refuge aupr\u00e8s de Toi contre le souci et la tristesse, contre l&apos;incapacit\u00e9 et la paresse, contre l&apos;avarice et la l\u00e2chet\u00e9, et contre le poids des dettes et la domination des hommes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (6369)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est remarquable par sa structure en paires
                  oppos\u00e9es. Le <strong>hamm</strong> (souci de l&apos;avenir)
                  est associ\u00e9 au <strong>hazan</strong> (tristesse du
                  pass\u00e9), couvrant ainsi les deux dimensions temporelles de
                  l&apos;angoisse. L&apos;<strong>&apos;ajz</strong>
                  (incapacit\u00e9) est pair\u00e9 avec le <strong>kasal</strong>
                  (paresse), distinguant l&apos;impossibilit\u00e9 r\u00e9elle du
                  manque de volont\u00e9. Le <strong>bukhl</strong> (avarice) est
                  oppos\u00e9 au <strong>jubn</strong> (l\u00e2chet\u00e9),
                  d\u00e9signant les maladies du c\u0153ur qui paralysent
                  l&apos;action. Enfin, le poids des <strong>dettes</strong> et la
                  <strong> domination des hommes</strong> repr\u00e9sentent les
                  causes sociales du stress.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) r\u00e9citait cette
                  invocation quotidiennement, ce qui montre qu&apos;elle
                  n&apos;est pas r\u00e9serv\u00e9e aux moments de crise mais
                  constitue une protection pr\u00e9ventive contre l&apos;ensemble
                  des facteurs d&apos;angoisse. Int\u00e9grer cette doua dans ses
                  adhkar du matin et du soir permet de se prot\u00e9ger
                  spirituellement tout au long de la journ\u00e9e. Pour
                  approfondir l&apos;ensemble des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u0647\u0645\u0651\u064e \u0625\u0646\u0651\u064a \u0639\u0628\u062f\u064f\u0643\u064e\u060c \u0627\u0628\u0646\u064f \u0639\u0628\u062f\u0650\u0643\u064e\u060c \u0627\u0628\u0646\u064f \u0623\u064e\u0645\u064e\u062a\u0650\u0643\u064e\u060c \u0646\u0627\u0635\u0650\u064a\u062a\u064a \u0628\u064a\u062f\u0650\u0643\u064e\u060c \u0645\u0627\u0636\u064d \u0641\u064a\u0651\u064e \u062d\u064f\u0643\u0645\u064f\u0643\u064e\u060c \u0639\u064e\u062f\u0644\u064c \u0641\u064a\u0651\u064e \u0642\u064e\u0636\u0627\u0624\u064f\u0643\u064e\u060c \u0623\u0633\u0623\u0644\u064f\u0643\u064e \u0628\u0643\u0644\u0651\u0650 \u0627\u0633\u0645\u064d \u0647\u0648\u064e \u0644\u0643\u064e\u060c \u0633\u064e\u0645\u0651\u064e\u064a\u0652\u062a\u064e \u0628\u0650\u0647\u0650 \u0646\u064e\u0641\u0652\u0633\u064e\u0643\u064e\u060c \u0623\u0648 \u0623\u0646\u0632\u064e\u0644\u0652\u062a\u064e\u0647\u064f \u0641\u064a \u0643\u0650\u062a\u0627\u0628\u0650\u0643\u064e\u060c \u0623\u0648 \u0639\u064e\u0644\u0651\u064e\u0645\u0652\u062a\u064e\u0647\u064f \u0623\u062d\u062f\u064b\u0627 \u0645\u0650\u0646 \u062e\u064e\u0644\u0652\u0642\u0650\u0643\u064e\u060c \u0623\u0648 \u0627\u0633\u0652\u062a\u064e\u0623\u0652\u062b\u064e\u0631\u0652\u062a\u064e \u0628\u0650\u0647\u0650 \u0641\u064a \u0639\u0650\u0644\u0652\u0645\u0650 \u0627\u0644\u063a\u064e\u064a\u0652\u0628\u0650 \u0639\u0650\u0646\u062f\u064e\u0643\u064e\u060c \u0623\u0646 \u062a\u064e\u062c\u0652\u0639\u064e\u0644\u064e \u0627\u0644\u0642\u064f\u0631\u0622\u0646\u064e \u0631\u064e\u0628\u064a\u0639\u064e \u0642\u064e\u0644\u0628\u064a\u060c \u0648\u0646\u0648\u0631\u064e \u0635\u064e\u062f\u0631\u064a\u060c \u0648\u062c\u0650\u0644\u0627\u0621\u064e \u062d\u064f\u0632\u0646\u064a\u060c \u0648\u0630\u064e\u0647\u0627\u0628\u064e \u0647\u064e\u0645\u0651\u064a
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma inni &apos;abduk, ibnu &apos;abdik, ibnu amatik, nasiyati biyadik, madin fiyya hukmuk, &apos;adlun fiyya qada&apos;uk, as&apos;aluka bi kulli ismin huwa lak, sammayta bihi nafsak, aw anzaltahu fi kitabik, aw &apos;allamtahu ahadan min khalqik, aw ista&apos;tharta bihi fi &apos;ilmil-ghaybi &apos;indak, an taj&apos;alal-Qur&apos;ana rabi&apos;a qalbi, wa nura sadri, wa jala&apos;a huzni, wa dhahaba hammi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;\u00d4 Allah, je suis Ton serviteur, fils de Ton serviteur, fils de Ta servante. Mon toupet est dans Ta main. Ton jugement s&apos;applique sur moi. Ton d\u00e9cret me concernant est juste. Je Te demande par chaque nom qui T&apos;appartient, par lequel Tu T&apos;es nomm\u00e9, ou que Tu as r\u00e9v\u00e9l\u00e9 dans Ton Livre, ou que Tu as enseign\u00e9 \u00e0 l&apos;une de Tes cr\u00e9atures, ou que Tu as gard\u00e9 dans la science de l&apos;invisible aupr\u00e8s de Toi, de faire du Coran le printemps de mon c\u0153ur, la lumi\u00e8re de ma poitrine, la dissipation de ma tristesse et la disparition de mon souci&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Ahmad (3712), authentifi\u00e9 par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette longue invocation est consid\u00e9r\u00e9e par les savants
                  comme l&apos;une des plus puissantes contre la d\u00e9tresse
                  \u00e9motionnelle. Sa force r\u00e9side dans la reconnaissance
                  totale de la servitude envers Allah, l&apos;acceptation de Son
                  d\u00e9cret et la demande que le Coran devienne source de
                  gu\u00e9rison int\u00e9rieure. Le Proph\u00e8te (paix et salut
                  sur lui) a garanti que quiconque prononce cette doua verra son
                  souci et sa tristesse remplac\u00e9s par de la joie.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations proph\u00e9tiques dans leur langue originale. D\u00e9couvrez des formations adapt\u00e9es aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommand\u00e9es"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua de Younous */}
              {/* ============================================ */}
              <section id="doua-younous" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Younous : refuge supr\u00eame dans la d\u00e9tresse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua de Younous (Jonas, paix sur lui) est consid\u00e9r\u00e9e
                  par les savants comme l&apos;une des invocations les plus
                  efficaces en cas d&apos;angoisse et de d\u00e9tresse. Englouti
                  par un poisson g\u00e9ant dans les profondeurs de
                  l&apos;oc\u00e9an, plong\u00e9 dans trois couches de
                  t\u00e9n\u00e8bres \u2014 la nuit, la mer et le ventre du
                  poisson \u2014 Younous adressa \u00e0 Allah cette invocation
                  d&apos;une sinc\u00e9rit\u00e9 absolue.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0644\u0627\u064e \u0625\u0650\u0644\u0670\u0647\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0623\u064e\u0646\u062a\u064e \u0633\u064f\u0628\u0652\u062d\u064e\u0627\u0646\u064e\u0643\u064e \u0625\u0650\u0646\u0651\u064a \u0643\u064f\u0646\u062a\u064f \u0645\u0650\u0646\u064e \u0627\u0644\u0638\u0651\u064e\u0627\u0644\u0650\u0645\u064a\u0646\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinit\u00e9 que Toi, gloire \u00e0 Toi, j&apos;\u00e9tais certes parmi les injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <HadithCard
                  arabic="\u062f\u0639\u0648\u0629 \u0630\u064a \u0627\u0644\u0646\u0648\u0646 \u0625\u0630 \u062f\u0639\u0627 \u0648\u0647\u0648 \u0641\u064a \u0628\u0637\u0646 \u0627\u0644\u062d\u0648\u062a: \u0644\u0627 \u0625\u0644\u0647 \u0625\u0644\u0627 \u0623\u0646\u062a \u0633\u0628\u062d\u0627\u0646\u0643 \u0625\u0646\u064a \u0643\u0646\u062a \u0645\u0646 \u0627\u0644\u0638\u0627\u0644\u0645\u064a\u0646\u060c \u0641\u0625\u0646\u0647 \u0644\u0645 \u064a\u062f\u0639 \u0628\u0647\u0627 \u0631\u062c\u0644 \u0645\u0633\u0644\u0645 \u0641\u064a \u0634\u064a\u0621 \u0642\u0637 \u0625\u0644\u0627 \u0627\u0633\u062a\u062c\u0627\u0628 \u0627\u0644\u0644\u0647 \u0644\u0647"
                  text="L&apos;invocation de Dhoun-Noun (Younous) lorsqu&apos;il invoqua dans le ventre du poisson : &apos;Il n&apos;y a de divinit\u00e9 que Toi, gloire \u00e0 Toi, j&apos;\u00e9tais certes parmi les injustes.&apos; Aucun musulman n&apos;invoque par cette formule pour quoi que ce soit sans qu&apos;Allah ne l&apos;exauce."
                  source="Rapport\u00e9 par at-Tirmidhi (3505), authentifi\u00e9 par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua est particuli\u00e8rement adapt\u00e9e \u00e0 celui
                  qui souffre d&apos;angoisse car elle combine trois
                  \u00e9l\u00e9ments th\u00e9rapeutiques. Premi\u00e8rement, le
                  <strong> tawhid</strong> (&laquo;&nbsp;La ilaha illa
                  Anta&nbsp;&raquo;) recentre le c\u0153ur sur Allah seul,
                  \u00e9cartant toutes les sources d&apos;anxi\u00e9t\u00e9
                  li\u00e9es \u00e0 la d\u00e9pendance aux cr\u00e9atures.
                  Deuxi\u00e8mement, la <strong>glorification</strong>
                  (&laquo;&nbsp;Subhanaka&nbsp;&raquo;) purifie le c\u0153ur de
                  tout reproche envers le d\u00e9cret divin. Troisi\u00e8mement,
                  la <strong>reconnaissance des fautes</strong> (&laquo;&nbsp;Inni
                  kuntu min adh-dhalimin&nbsp;&raquo;) lib\u00e8re de la
                  culpabilit\u00e9 en ouvrant la porte du repentir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de r\u00e9citer cette doua avec
                  abondance lors des moments d&apos;angoisse intense. Sa
                  bri\u00e8vet\u00e9 la rend facile \u00e0 m\u00e9moriser et \u00e0
                  r\u00e9p\u00e9ter, m\u00eame dans les \u00e9tats de grande
                  d\u00e9tresse o\u00f9 la concentration est difficile. Que
                  l&apos;on traverse une crise d&apos;angoisse, une{" "}
                  <Link href="/doua-tristesse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">p\u00e9riode de tristesse</Link>{" "}
                  ou un{" "}
                  <Link href="/doua-moment-difficile-epreuve-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">moment difficile</Link>,
                  cette invocation reste le refuge supr\u00eame du croyant.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : La hawla wa la quwwata */}
              {/* ============================================ */}
              <section id="la-hawla-wa-la-quwwata" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La hawla wa la quwwata illa billah : le tr\u00e9sor du Paradis
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les formules les plus efficaces contre l&apos;angoisse et
                  le stress figure cette expression que le Proph\u00e8te (paix et
                  salut sur lui) a qualifi\u00e9e de &laquo;&nbsp;tr\u00e9sor
                  parmi les tr\u00e9sors du Paradis&nbsp;&raquo;. Sa puissance
                  r\u00e9side dans la remise totale de l&apos;affaire \u00e0
                  Allah, lib\u00e9rant le croyant du fardeau insoutenable de
                  vouloir tout contr\u00f4ler.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0644\u0627\u064e \u062d\u064e\u0648\u0652\u0644\u064e \u0648\u064e\u0644\u0627\u064e \u0642\u064f\u0648\u0651\u064e\u0629\u064e \u0625\u0650\u0644\u0651\u0627 \u0628\u0650\u0627\u0644\u0644\u0651\u064e\u0647\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> La hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (4205) et Muslim (2704)
                  </p>
                </div>

                <HadithCard
                  arabic="\u0623\u064e\u0644\u0627 \u0623\u062f\u0644\u0651\u064f\u0643\u064e \u0639\u0644\u0649 \u0643\u064e\u0644\u0650\u0645\u0629\u064d \u0647\u064a\u064e \u0643\u064e\u0646\u0652\u0632\u064c \u0645\u0650\u0646 \u0643\u064f\u0646\u0648\u0632\u0650 \u0627\u0644\u062c\u064e\u0646\u0651\u0629\u0650: \u0644\u0627 \u062d\u064e\u0648\u0652\u0644\u064e \u0648\u064e\u0644\u0627 \u0642\u064f\u0648\u0651\u064e\u0629\u064e \u0625\u0650\u0644\u0651\u0627 \u0628\u0650\u0627\u0644\u0644\u0651\u0647\u0650"
                  text="Ne veux-tu pas que je t&apos;indique une parole qui est un tr\u00e9sor parmi les tr\u00e9sors du Paradis : La hawla wa la quwwata illa billah (Il n&apos;y a de force ni de puissance qu&apos;en Allah)."
                  source="Rapport\u00e9 par al-Bukhari (4205) et Muslim (2704)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette formule agit comme un antidote spirituel contre
                  l&apos;angoisse pour plusieurs raisons. Tout d&apos;abord, elle
                  lib\u00e8re le croyant de l&apos;illusion du contr\u00f4le
                  absolu. Une grande partie du stress provient de la volont\u00e9
                  de ma\u00eetriser ce qui \u00e9chappe \u00e0 notre pouvoir.
                  En reconnaissant que toute force et toute puissance
                  appartiennent \u00e0 Allah, le c\u0153ur se lib\u00e8re de
                  cette pression insoutenable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ensuite, elle \u00e9tablit le <strong>tawakkul</strong>
                  (confiance en Allah) comme fondement de la s\u00e9r\u00e9nit\u00e9.
                  Le Coran affirme : &laquo;&nbsp;Et quiconque place sa confiance
                  en Allah, Il lui suffit&nbsp;&raquo; (sourate At-Talaq, 65:3).
                  Le croyant qui int\u00e8gre cette formule dans son quotidien
                  d\u00e9veloppe progressivement une attitude de remise confiante
                  \u00e0 Allah qui dissout les sources m\u00eames de
                  l&apos;anxi\u00e9t\u00e9.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de r\u00e9citer cette formule
                  fr\u00e9quemment tout au long de la journ\u00e9e, en particulier
                  lorsque l&apos;on fait face \u00e0 une situation stressante,
                  avant une d\u00e9cision importante, ou quand les pens\u00e9es
                  anxieuses deviennent envahissantes. Sa bri\u00e8vet\u00e9 permet
                  de la r\u00e9p\u00e9ter ais\u00e9ment, et sa profondeur
                  th\u00e9ologique la rend d&apos;une efficacit\u00e9 spirituelle
                  remarquable.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en pri\u00e8re dans une mosqu\u00e9e illustrant la doua contre l&apos;angoisse et le stress en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas proph\u00e9tiques pour apaiser l&apos;\u00e2me */}
              {/* ============================================ */}
              <section id="douas-apaisement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Autres douas proph\u00e9tiques pour apaiser l&apos;\u00e2me
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-del\u00e0 des invocations majeures d\u00e9j\u00e0
                  mentionn\u00e9es, la Sunna propose d&apos;autres formules
                  sp\u00e9cifiques pour le croyant en proie \u00e0 l&apos;angoisse
                  et au stress. Chacune apporte une dimension compl\u00e9mentaire
                  dans la gu\u00e9rison spirituelle de l&apos;\u00e2me.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de remise confiante \u00e0 Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation enseigne au croyant \u00e0 remettre
                  enti\u00e8rement ses affaires entre les mains d&apos;Allah,
                  source de toute s\u00e9curit\u00e9 et de toute paix
                  int\u00e9rieure.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0631\u064e\u062d\u0652\u0645\u064e\u062a\u064e\u0643\u064e \u0623\u064e\u0631\u0652\u062c\u064f\u0648\u060c \u0641\u064e\u0644\u0627\u064e \u062a\u064e\u0643\u0650\u0644\u0652\u0646\u064a \u0625\u0650\u0644\u0649\u0670 \u0646\u064e\u0641\u0652\u0633\u064a \u0637\u064e\u0631\u0652\u0641\u064e\u0629\u064e \u0639\u064e\u064a\u0652\u0646\u064d\u060c \u0648\u064e\u0623\u064e\u0635\u0652\u0644\u0650\u062d\u0652 \u0644\u064a \u0634\u064e\u0623\u0652\u0646\u064a \u0643\u064f\u0644\u0651\u064e\u0647\u064f\u060c \u0644\u0627\u064e \u0625\u0650\u0644\u0670\u0647\u064e \u0625\u0650\u0644\u0651\u0627\u064e \u0623\u064e\u0646\u062a\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma rahmataka arju, fala takilni ila nafsi tarfata &apos;ayn, wa aslih li sha&apos;ni kullahu, la ilaha illa Ant
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;\u00d4 Allah, c&apos;est Ta mis\u00e9ricorde que j&apos;esp\u00e8re. Ne me laisse pas \u00e0 moi-m\u00eame le temps d&apos;un clin d&apos;\u0153il, et r\u00e9forme pour moi toutes mes affaires. Il n&apos;y a de divinit\u00e9 que Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Abu Dawud (5090), authentifi\u00e9 par al-Albani
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua en cas de d\u00e9tresse subite
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsqu&apos;une crise d&apos;angoisse survient brutalement, le
                  Proph\u00e8te (paix et salut sur lui) enseignait cette
                  invocation courte et imm\u00e9diatement applicable.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0631\u064e\u0628\u0651\u064a \u0644\u0627\u064e \u0623\u064f\u0634\u0652\u0631\u0650\u0643\u064f \u0628\u0650\u0647\u0650 \u0634\u064e\u064a\u0652\u0626\u064b\u0627
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahu Allahu Rabbi la ushriku bihi shay&apos;an
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah, Allah est mon Seigneur, je ne Lui associe rien&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Abu Dawud (1525), authentifi\u00e9 par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces formules compl\u00e9mentaires permettent au croyant de
                  disposer d&apos;un arsenal spirituel vari\u00e9 face \u00e0
                  l&apos;angoisse. Certaines sont longues et d\u00e9taill\u00e9es,
                  id\u00e9ales pour les moments de recueillement calme.
                  D&apos;autres sont br\u00e8ves et percutantes, parfaites pour
                  les crises aig\u00fces. L&apos;essentiel est de les m\u00e9moriser
                  progressivement et de les int\u00e9grer dans son quotidien,
                  afin qu&apos;elles deviennent des r\u00e9flexes spirituels en
                  temps de d\u00e9tresse. Si vous traversez une{" "}
                  <Link href="/doua-douleur-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">p\u00e9riode de douleur</Link>,
                  ces invocations sont \u00e9galement un soutien pr\u00e9cieux.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour combattre l&apos;anxi\u00e9t\u00e9 en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-del\u00e0 des invocations, l&apos;islam propose une approche
                  globale pour faire face \u00e0 l&apos;angoisse et au stress.
                  Cette d\u00e9marche combine la dimension spirituelle avec des
                  actions concr\u00e8tes, offrant au croyant un cadre complet
                  pour retrouver la s\u00e9r\u00e9nit\u00e9.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La r\u00e9citation r\u00e9guli\u00e8re du Coran
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran est d\u00e9crit comme une gu\u00e9rison pour ce qui
                        est dans les poitrines (Coran, 10:57). La r\u00e9citation
                        quotidienne, m\u00eame de quelques versets, apaise
                        l&apos;\u00e2me et \u00e9loigne l&apos;angoisse. La sourate
                        Al-Fatiha, Ayat al-Kursi et les trois derni\u00e8res sourates
                        sont particuli\u00e8rement recommand\u00e9es.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La pri\u00e8re (salat) comme apaisement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te (paix et salut sur lui) disait :
                        &laquo;&nbsp;La fra\u00eecheur de mes yeux est dans la
                        pri\u00e8re&nbsp;&raquo; (an-Nasa&apos;i). La salat
                        constitue un moment de d\u00e9connexion totale des sources
                        de stress. La prosternation (sujud) est le moment o\u00f9 le
                        serviteur est le plus proche d&apos;Allah, et donc le plus
                        apais\u00e9.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les adhkar du matin et du soir
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les invocations quotidiennes du matin et du soir forment un
                        bouclier protecteur contre l&apos;anxi\u00e9t\u00e9. Elles
                        incluent des formules de protection (ta&apos;awwudh),
                        des demandes de s\u00e9r\u00e9nit\u00e9 et des
                        glorifications qui \u00e9l\u00e8vent l&apos;\u00e2me
                        au-dessus des pr\u00e9occupations terrestres.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le tawakkul : la confiance en Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le tawakkul ne signifie pas la passivit\u00e9, mais la
                        combinaison de l&apos;effort et de la remise confiante
                        \u00e0 Allah. &laquo;&nbsp;Attache ta chamelle et place
                        ta confiance en Allah&nbsp;&raquo; (at-Tirmidhi).
                        Cet \u00e9quilibre entre action et confiance est la cl\u00e9
                        pour r\u00e9duire l&apos;anxi\u00e9t\u00e9 au quotidien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Consulter un professionnel de sant\u00e9
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;islam encourage la recherche de rem\u00e8des. Le
                        Proph\u00e8te (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Soignez-vous, car Allah n&apos;a pas
                        cr\u00e9\u00e9 de maladie sans cr\u00e9er de
                        rem\u00e8de&nbsp;&raquo; (Abu Dawud). L&apos;anxi\u00e9t\u00e9
                        chronique n\u00e9cessite parfois un suivi m\u00e9dical ou
                        psychologique, compl\u00e9mentaire aux rem\u00e8des
                        spirituels.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le dhikr abondant
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      &laquo;&nbsp;N&apos;est-ce point par le dhikr d&apos;Allah
                      que se tranquillisent les c\u0153urs&nbsp;?&nbsp;&raquo;
                      (Coran, 13:28). Le rappel constant d&apos;Allah \u00e0
                      travers le SubhanAllah, Alhamdulillah, Allahu Akbar et
                      l&apos;istighfar apaise les pens\u00e9es anxieuses.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La compagnie des pieux
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      S&apos;entourer de personnes vertueuses et fr\u00e9quenter
                      les assembl\u00e9es de science apaise l&apos;\u00e2me et
                      dissipe l&apos;angoisse. Le Proph\u00e8te (paix et salut
                      sur lui) a compar\u00e9 le bon compagnon au porteur de musc
                      qui r\u00e9pand son parfum autour de lui.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>\u00c9viter l&apos;isolement :</strong> l&apos;angoisse
                      s&apos;aggrave dans la solitude. Maintenir des liens sociaux
                      sains et participer \u00e0 la vie communautaire sont des
                      facteurs protecteurs reconnus.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prendre soin de son corps :</strong> le
                      Proph\u00e8te (paix et salut sur lui) encourageait
                      l&apos;activit\u00e9 physique. La marche, le sport et une
                      alimentation saine contribuent \u00e0 r\u00e9duire le
                      stress de mani\u00e8re significative.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pratiquer la gratitude (shukr) :</strong> se
                      concentrer sur les bienfaits d&apos;Allah plut\u00f4t que
                      sur les sources d&apos;angoisse transforme la perspective
                      et all\u00e8ge le c\u0153ur. &laquo;&nbsp;Si vous \u00eates
                      reconnaissants, J&apos;augmenterai [Mes bienfaits] pour
                      vous&nbsp;&raquo; (Coran, 14:7).
                    </span>
                  </li>
                </ul>
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
                    href="/doua-tristesse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre la tristesse
                  </Link>
                  <Link
                    href="/doua-moment-difficile-epreuve-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les moments difficiles
                  </Link>
                  <Link
                    href="/doua-douleur-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre la douleur
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
