import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua nouvelle voiture et nouvel achat en islam : invocations authentiques",
  description:
    "Découvrez la doua pour une nouvelle voiture et tout nouvel achat en islam : invocations en arabe avec phonétique et traduction, hadith de la monture, istikhara avant un achat, baraka et gratitude envers Allah.",
  openGraph: {
    title:
      "Doua nouvelle voiture et nouvel achat en islam : invocations authentiques",
    description:
      "Les invocations authentiques pour une nouvelle voiture ou un nouvel achat en islam : textes en arabe, phonétique, traduction et hadiths sur la baraka dans les biens.",
    url: "https://www.islamreligion.fr/doua-nouvelle-voiture-achat-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-nouvelle-voiture-achat-islam",
  },
};

const tocItems = [
  { id: "doua-monture-voiture", label: "Doua de la monture et du v\u00e9hicule" },
  { id: "douas-nouvel-achat", label: "Douas pour un nouvel achat" },
  { id: "baraka-achats", label: "La baraka dans les achats" },
  { id: "istikhara-achat", label: "Istikhara avant un achat important" },
  { id: "gratitude-bienfaits", label: "La gratitude pour les bienfaits d\u2019Allah" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour le musulman" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua \u00e0 dire quand on ach\u00e8te une nouvelle voiture en islam ?",
    answer:
      "Lorsqu&apos;on ach\u00e8te une nouvelle voiture en islam, on r\u00e9cite la doua de la monture : \u00ab Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun \u00bb (Gloire \u00e0 Celui qui a mis cela \u00e0 notre service, car nous n&apos;aurions pas pu le faire par nous-m\u00eames, et c&apos;est vers notre Seigneur que nous retournerons). Cette invocation est tir\u00e9e de la sourate Az-Zukhruf (43:13-14) et s&apos;applique \u00e0 tout moyen de transport.",
  },
  {
    question: "Faut-il faire une doua sp\u00e9cifique pour chaque nouvel achat ?",
    answer:
      "Il n&apos;existe pas une doua sp\u00e9cifique pour chaque type d&apos;achat. Cependant, le Proph\u00e8te (paix et salut sur lui) encourageait \u00e0 invoquer Allah et \u00e0 Le remercier pour chaque bienfait. Pour un nouvel objet, on peut dire : \u00ab Allahumma barik lana fihi \u00bb (\u00d4 Allah, b\u00e9nis-le nous). Pour un v\u00e9hicule ou une monture, la doua sp\u00e9cifique de la monture est recommand\u00e9e.",
  },
  {
    question: "Qu\u2019est-ce que la baraka dans un achat en islam ?",
    answer:
      "La baraka dans un achat d\u00e9signe la b\u00e9n\u00e9diction divine qui rend ce bien profitable, durable et source de bien. Un achat avec baraka apporte satisfaction et utilit\u00e9 au-del\u00e0 de sa valeur mat\u00e9rielle. Pour obtenir la baraka, il faut que l&apos;achat soit licite (halal), que l&apos;argent utilis\u00e9 soit pur, et que l&apos;on invoque Allah en mentionnant Son nom (bismillah).",
  },
  {
    question: "Doit-on faire la pri\u00e8re de consultation (istikhara) avant d\u2019acheter une voiture ?",
    answer:
      "Oui, il est fortement recommand\u00e9 (mustahabb) de faire la pri\u00e8re de consultation (salat al-istikhara) avant tout achat important comme une voiture, une maison ou un investissement cons\u00e9quent. Le Proph\u00e8te (paix et salut sur lui) a enseign\u00e9 \u00e0 ses compagnons de faire l&apos;istikhara pour toutes leurs affaires, grandes ou petites.",
  },
  {
    question: "Peut-on dire la doua de la monture dans un avion ou un bateau ?",
    answer:
      "Oui, la doua de la monture s&apos;applique \u00e0 tout moyen de transport : voiture, avion, bateau, train, bus ou m\u00eame un animal. Le verset coranique parle de mani\u00e8re g\u00e9n\u00e9rale de ce qu&apos;Allah a mis \u00e0 notre service pour nous d\u00e9placer. Les savants sont unanimes sur le fait que cette invocation couvre tous les modes de transport.",
  },
  {
    question: "Comment remercier Allah pour un nouveau bienfait mat\u00e9riel ?",
    answer:
      "Pour remercier Allah pour un nouveau bienfait mat\u00e9riel, on peut : dire \u00ab Alhamdulillah \u00bb (louange \u00e0 Allah), accomplir deux rak&apos;at de pri\u00e8re de remerciement (salat ash-shukr), faire une aum\u00f4ne (sadaqa) en gratitude, et utiliser ce bien dans l&apos;ob\u00e9issance \u00e0 Allah. Le Coran rappelle : \u00ab Si vous \u00eates reconnaissants, J&apos;augmenterai Mes bienfaits \u00bb (Ibrahim, 14:7).",
  },
  {
    question: "Est-il permis d\u2019acheter une voiture \u00e0 cr\u00e9dit en islam ?",
    answer:
      "L&apos;achat d&apos;une voiture \u00e0 cr\u00e9dit est permis en islam \u00e0 condition que le financement ne comporte pas de riba (int\u00e9r\u00eat usuraire). Le paiement \u00e9chelonn\u00e9 avec un prix major\u00e9 fix\u00e9 \u00e0 l&apos;avance (mourabaha) est licite selon la majorit\u00e9 des savants. Il est recommand\u00e9 de consulter un sp\u00e9cialiste en finance islamique pour s&apos;assurer de la conformit\u00e9 du contrat.",
  },
];

export default function DouaNouvelleVoitureAchatIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-nouvelle-voiture-achat-islam/#article",
        headline:
          "Doua nouvelle voiture et nouvel achat en islam : invocations authentiques",
        description:
          "D\u00e9couvrez la doua pour une nouvelle voiture et tout nouvel achat en islam : invocations en arabe, hadiths, istikhara, baraka et gratitude.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-04-04",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-nouvelle-voiture-achat-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-nouvelle-voiture-achat-islam/#breadcrumb",
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
            name: "Doua pour un nouvel achat",
            item: "https://www.islamreligion.fr/doua-nouvelle-voiture-achat-islam",
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
          title="Doua nouvelle voiture et nouvel achat en islam : invocations authentiques"
          subtitle="Les invocations tir\u00e9es du Coran et de la Sunna pour b\u00e9nir un nouveau v\u00e9hicule ou toute nouvelle acquisition. Textes en arabe, phon\u00e9tique et traduction fran\u00e7aise."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains ouvertes en invocation avec rayons de lumi\u00e8re et motifs islamiques pour doua nouvelle voiture et nouvel achat"
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
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua pour un nouvel achat</span>
              </nav>

              {/* R\u00e9sum\u00e9 rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r\u00e9sum\u00e9
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;islam enseigne au musulman d&apos;invoquer Allah \u00e0
                  chaque \u00e9tape de sa vie, y compris lors de l&apos;acquisition
                  d&apos;un nouveau bien. Qu&apos;il s&apos;agisse d&apos;une
                  nouvelle voiture, d&apos;une maison ou d&apos;un objet du quotidien,
                  des invocations authentiques permettent de placer la baraka dans
                  cet achat et de remercier Allah pour Ses bienfaits. La doua de la
                  monture (subhanalladhi sakhkhara lana hadha) est l&apos;invocation
                  la plus connue pour un nouveau v\u00e9hicule.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Doua de la monture et du v\u00e9hicule */}
              {/* ============================================ */}
              <section id="doua-monture-voiture" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de la monture : l&apos;invocation pour un nouveau v\u00e9hicule
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua la plus authentique \u00e0 r\u00e9citer lors de
                  l&apos;acquisition d&apos;une nouvelle voiture est celle de la
                  monture, tir\u00e9e directement du Coran. Allah nous enseigne dans
                  la sourate Az-Zukhruf les paroles exactes \u00e0 prononcer
                  lorsqu&apos;on s&apos;installe sur un moyen de transport. Cette
                  invocation est un rappel puissant que tout d\u00e9placement
                  d\u00e9pend de la volont\u00e9 d&apos;Allah et que le serviteur
                  est incapable de ma\u00eetriser quoi que ce soit sans Son aide.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua de la monture (subhanalladhi sakhkhara lana hadha)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ
                  </p>
                  <p className="mt-3 text-sm font-medium italic text-foreground-secondary">
                    Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground">
                    &laquo;&nbsp;Gloire \u00e0 Celui qui a mis cela \u00e0 notre service,
                    alors que nous n&apos;\u00e9tions pas capables de le faire par
                    nous-m\u00eames. Et c&apos;est vers notre Seigneur que nous
                    retournerons.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Sourate Az-Zukhruf, 43:13-14
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation coranique est rapport\u00e9e dans la pratique
                  proph\u00e9tique. Le Proph\u00e8te (paix et salut sur lui)
                  la r\u00e9citait chaque fois qu&apos;il montait sur sa monture.
                  Ali ibn Rabi&apos;a rapporte qu&apos;il a vu Ali ibn Abi Talib
                  (qu&apos;Allah l&apos;agr\u00e9e) prononcer cette doua en montant
                  sur un animal, puis ajouter &laquo;&nbsp;Alhamdulillah&nbsp;&raquo;
                  trois fois et &laquo;&nbsp;Allahu akbar&nbsp;&raquo; trois fois.
                </p>

                <HadithCard
                  arabic="\u0645\u0627 \u0645\u0646 \u0631\u0627\u0643\u0628 \u064a\u0631\u0643\u0628 \u062f\u0627\u0628\u0629 \u0641\u064a\u0642\u0648\u0644: \u0633\u0628\u062d\u0627\u0646 \u0627\u0644\u0630\u064a \u0633\u062e\u0631 \u0644\u0646\u0627 \u0647\u0630\u0627 \u0648\u0645\u0627 \u0643\u0646\u0627 \u0644\u0647 \u0645\u0642\u0631\u0646\u064a\u0646... \u0625\u0644\u0627 \u0642\u0627\u0644 \u0627\u0644\u0644\u0647 \u062a\u0639\u0627\u0644\u0649: \u0639\u0628\u062f\u064a \u0627\u0633\u062a\u063a\u0641\u0631\u0646\u064a \u0641\u063a\u0641\u0631\u062a \u0644\u0647"
                  text="Aucun cavalier ne monte sur sa monture en disant : Subhanalladhi sakhkhara lana hadha... sans qu&apos;Allah dise : Mon serviteur M&apos;a demand\u00e9 pardon, et Je lui ai pardonn\u00e9."
                  source="Rapport\u00e9 par Abu Dawud (2602) et at-Tirmidhi (3446)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith r\u00e9v\u00e8le la puissance de cette doua : non
                  seulement elle b\u00e9nit le voyage et le moyen de transport, mais
                  elle entra\u00eene \u00e9galement le pardon d&apos;Allah. Chaque
                  fois que le musulman monte dans sa voiture et prononce cette
                  invocation, il obtient une r\u00e9compense immense. C&apos;est
                  pourquoi les savants insistent sur l&apos;importance de ne jamais
                  n\u00e9gliger cette doua, que ce soit pour un court trajet ou un
                  long voyage.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dor\u00e9s symbolisant la doua pour un nouvel achat en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas pour un nouvel achat */}
              {/* ============================================ */}
              <section id="douas-nouvel-achat" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas pour un nouvel achat en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-del\u00e0 de la doua sp\u00e9cifique \u00e0 la monture,
                  l&apos;islam propose plusieurs invocations pour tout nouvel achat
                  ou nouvelle acquisition. Ces douas visent \u00e0 placer la
                  b\u00e9n\u00e9diction (baraka) d&apos;Allah dans le bien acquis
                  et \u00e0 exprimer la gratitude du serviteur envers son Cr\u00e9ateur
                  pour ce bienfait.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander la baraka dans un bien
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    \u0627\u0644\u0644\u0647\u0645 \u0628\u0627\u0631\u0643 \u0644\u0646\u0627 \u0641\u064a\u0647
                  </p>
                  <p className="mt-3 text-sm font-medium italic text-foreground-secondary">
                    Allahumma barik lana fih.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground">
                    &laquo;&nbsp;\u00d4 Allah, b\u00e9nis-le nous.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Invocation g\u00e9n\u00e9rale rapport\u00e9e par les savants pour tout nouveau bien
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de protection pour un nouveau bien
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    \u0623\u0639\u0648\u0630\u0628\u0627\u0644\u0644\u0647 \u0648\u0628\u0643\u0644\u0645\u0627\u062a\u0647 \u0627\u0644\u062a\u0627\u0645\u0627\u062a \u0645\u0646 \u0634\u0631 \u0645\u0627 \u062e\u0644\u0642
                  </p>
                  <p className="mt-3 text-sm font-medium italic text-foreground-secondary">
                    A&apos;udhu billahi wa bi kalimatihi at-tammati min sharri ma khalaq.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground">
                    &laquo;&nbsp;Je cherche protection aupr\u00e8s d&apos;Allah et de
                    Ses paroles parfaites contre le mal de ce qu&apos;Il a
                    cr\u00e9\u00e9.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Rapport\u00e9 par Muslim (2708)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de reconnaissance pour un bienfait
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    \u0627\u0644\u062d\u0645\u062f \u0644\u0644\u0647 \u0627\u0644\u0630\u064a \u0628\u0646\u0639\u0645\u062a\u0647 \u062a\u062a\u0645 \u0627\u0644\u0635\u0627\u0644\u062d\u0627\u062a
                  </p>
                  <p className="mt-3 text-sm font-medium italic text-foreground-secondary">
                    Alhamdulillahilladhi bi ni&apos;matihi tatimmu as-salihat.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground">
                    &laquo;&nbsp;Louange \u00e0 Allah par la gr\u00e2ce duquel les
                    bonnes choses se r\u00e9alisent.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Rapport\u00e9 par Ibn Majah (3803) et al-Hakim
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) r\u00e9citait cette
                  derni\u00e8re invocation chaque fois qu&apos;un bien lui parvenait
                  ou qu&apos;une situation favorable se pr\u00e9sentait. Elle est
                  particuli\u00e8rement adapt\u00e9e au moment de r\u00e9ceptionner
                  un nouvel achat, car elle combine la louange d&apos;Allah et la
                  reconnaissance que tout bienfait provient de Lui seul. Pour
                  compl\u00e9ter cette pratique avec la doua \u00e0 r\u00e9citer pour{" "}
                  <Link href="/doua-nouveau-vetement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">un nouveau v\u00eatement</Link>,
                  consultez notre article d\u00e9di\u00e9.
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
              {/* SECTION 3 : La baraka dans les achats */}
              {/* ============================================ */}
              <section id="baraka-achats" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La baraka dans les achats : comment l&apos;obtenir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La notion de baraka est centrale dans la vision islamique des
                  biens mat\u00e9riels. Un achat b\u00e9ni par Allah est un achat
                  qui apporte satisfaction, dur\u00e9e de vie prolong\u00e9e et
                  b\u00e9n\u00e9fice r\u00e9el \u00e0 son propri\u00e9taire. \u00c0
                  l&apos;inverse, un bien d\u00e9pourvu de baraka peut se d\u00e9t\u00e9riorer
                  rapidement, causer des soucis ou ne jamais satisfaire son
                  propri\u00e9taire, m\u00eame s&apos;il \u00e9tait co\u00fbteux.
                </p>

                <HadithCard
                  arabic="\u0627\u0644\u0628\u064e\u064a\u0651\u0639\u0627\u0646\u0650 \u0628\u0627\u0644\u062e\u064a\u0627\u0631\u0650 \u0645\u0627 \u0644\u0645 \u064a\u062a\u0641\u0631\u0642\u0627\u060c \u0641\u0625\u0646 \u0635\u062f\u0642\u0627 \u0648\u0628\u064a\u0651\u0646\u0627 \u0628\u0648\u0631\u0643 \u0644\u0647\u0645\u0627 \u0641\u064a \u0628\u064a\u0639\u0647\u0645\u0627\u060c \u0648\u0625\u0646 \u0643\u0630\u0628\u0627 \u0648\u0643\u062a\u0645\u0627 \u0645\u064f\u062d\u0650\u0642\u062a \u0628\u0631\u0643\u0629\u064f \u0628\u064a\u0639\u0647\u0645\u0627"
                  text="Les deux parties d&apos;une transaction ont le choix tant qu&apos;elles ne se sont pas s\u00e9par\u00e9es. Si elles sont sinc\u00e8res et transparentes, leur transaction sera b\u00e9nie (baraka). Mais si elles mentent et cachent (des d\u00e9fauts), la baraka de leur transaction sera effac\u00e9e."
                  source="Rapport\u00e9 par al-Bukhari (2079) et Muslim (1532)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental \u00e9tablit un lien direct entre
                  l&apos;honn\u00eat\u00e9 dans la transaction et la baraka du bien
                  acquis. Les savants en tirent plusieurs enseignements pratiques
                  pour le musulman qui effectue un achat important.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dire bismillah :</strong> mentionner le nom d&apos;Allah
                      avant et pendant la transaction attire Sa b\u00e9n\u00e9diction
                      sur l&apos;achat.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>V\u00e9rifier la licitation du bien :</strong> un achat
                      halal est une condition pr\u00e9alable \u00e0 la baraka. Le bien
                      lui-m\u00eame et l&apos;argent utilis\u00e9 doivent \u00eatre
                      licites.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>\u00c9viter l&apos;ostentation :</strong> acheter pour
                      montrer sa richesse aux gens (riya) prive le bien de toute
                      baraka. L&apos;intention doit \u00eatre sinc\u00e8re et utile.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire une sadaqa :</strong> donner une aum\u00f4ne lors
                      d&apos;un achat important est une pratique recommand\u00e9e qui
                      attire la baraka et purifie le bien acquis.
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le concept de baraka s&apos;\u00e9tend \u00e9galement \u00e0
                  l&apos;utilisation du bien apr\u00e8s l&apos;achat. Une voiture
                  utilis\u00e9e pour rendre visite aux proches, se rendre \u00e0 la
                  mosqu\u00e9e ou accomplir des bonnes actions sera davantage
                  b\u00e9nie qu&apos;un v\u00e9hicule utilis\u00e9 uniquement pour
                  des divertissements illicites. Pour approfondir la notion de
                  baraka dans la vie quotidienne, d\u00e9couvrez notre{" "}
                  <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour sortir de la maison</Link>,
                  une invocation qui attire la protection et la b\u00e9n\u00e9diction
                  sur chaque d\u00e9placement.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Istikhara avant un achat */}
              {/* ============================================ */}
              <section id="istikhara-achat" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La pri\u00e8re de consultation (istikhara) avant un achat important
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant tout achat important comme une voiture, une maison ou un
                  investissement, le musulman est fortement encourag\u00e9 \u00e0
                  accomplir la pri\u00e8re de consultation (salat al-istikhara).
                  Cette pri\u00e8re consiste \u00e0 demander \u00e0 Allah de guider
                  le serviteur vers le meilleur choix, en s&apos;en remettant
                  enti\u00e8rement \u00e0 Sa science et Sa sagesse infinies.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua de l&apos;istikhara
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    \u0627\u0644\u0644\u0647\u0645 \u0625\u0646\u064a \u0623\u0633\u062a\u062e\u064a\u0631\u0643 \u0628\u0639\u0644\u0645\u0643 \u0648\u0623\u0633\u062a\u0642\u062f\u0631\u0643 \u0628\u0642\u062f\u0631\u062a\u0643 \u0648\u0623\u0633\u0623\u0644\u0643 \u0645\u0646 \u0641\u0636\u0644\u0643 \u0627\u0644\u0639\u0638\u064a\u0645
                  </p>
                  <p className="mt-3 text-sm font-medium italic text-foreground-secondary">
                    Allahumma inni astakhiruka bi &apos;ilmika wa astaqdiruka bi qudratika wa as&apos;aluka min fadlika al-&apos;adhim.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground">
                    &laquo;&nbsp;\u00d4 Allah, je Te consulte par Ta science, je Te
                    demande la capacit\u00e9 par Ta puissance et je Te demande de Ta
                    gr\u00e2ce immense.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (1162)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Jabir ibn Abdillah (qu&apos;Allah l&apos;agr\u00e9e) a rapport\u00e9
                  que le Proph\u00e8te (paix et salut sur lui) enseignait
                  l&apos;istikhara pour toutes les affaires, comme il enseignait une
                  sourate du Coran. Le compagnon pr\u00e9cise que le Proph\u00e8te
                  disait : &laquo;&nbsp;Lorsque l&apos;un de vous envisage une
                  affaire, qu&apos;il accomplisse deux rak&apos;at en dehors de la
                  pri\u00e8re obligatoire, puis qu&apos;il dise cette
                  invocation.&nbsp;&raquo;
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en pri\u00e8re dans une mosqu\u00e9e illustrant l\u2019istikhara avant un achat important en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Accomplir deux rak&apos;at surr\u00e9rogatoires
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant de r\u00e9citer la doua de l&apos;istikhara, il faut
                        accomplir deux unit\u00e9s de pri\u00e8re (rak&apos;at) en
                        dehors des pri\u00e8res obligatoires. On peut r\u00e9citer les
                        sourates que l&apos;on souhaite apr\u00e8s al-Fatiha.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        R\u00e9citer la doua avec sinc\u00e9rit\u00e9
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Apr\u00e8s le salam, r\u00e9citer la doua de l&apos;istikhara
                        en mentionnant pr\u00e9cis\u00e9ment l&apos;objet de la
                        consultation (par exemple : &laquo;&nbsp;cette
                        voiture&nbsp;&raquo; ou &laquo;&nbsp;cet achat&nbsp;&raquo;).
                        Le coeur doit \u00eatre d\u00e9tach\u00e9 de toute pr\u00e9f\u00e9rence
                        personnelle et enti\u00e8rement soumis \u00e0 la d\u00e9cision
                        d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Observer les signes et agir
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Apr\u00e8s l&apos;istikhara, le musulman agit selon ce
                        qu&apos;Allah facilite. Si l&apos;achat se d\u00e9roule
                        facilement, c&apos;est un signe de bien. Si des obstacles
                        surgissent, c&apos;est qu&apos;Allah \u00e9carte le serviteur
                        de ce qui pourrait lui nuire. Il ne faut pas n\u00e9cessairement
                        attendre un r\u00eave, contrairement \u00e0 une id\u00e9e
                        r\u00e9pandue.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : La gratitude pour les bienfaits */}
              {/* ============================================ */}
              <section id="gratitude-bienfaits" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La gratitude (shukr) pour les bienfaits d&apos;Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;acquisition d&apos;un nouveau bien est avant tout un
                  bienfait d&apos;Allah qui m\u00e9rite reconnaissance et
                  gratitude. Le Coran \u00e9tablit un lien direct entre la
                  reconnaissance du serviteur et l&apos;augmentation des
                  bienfaits. Cette r\u00e9alit\u00e9 spirituelle doit accompagner
                  chaque achat, qu&apos;il soit petit ou grand.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    \u0644\u0626\u0646 \u0634\u0643\u0631\u062a\u0645 \u0644\u0623\u0632\u064a\u062f\u0646\u0643\u0645 \u0648\u0644\u0626\u0646 \u0643\u0641\u0631\u062a\u0645 \u0625\u0646 \u0639\u0630\u0627\u0628\u064a \u0644\u0634\u062f\u064a\u062f
                  </p>
                  <p className="mt-3 text-sm font-medium italic text-foreground-secondary">
                    La in shakartum la azidannakum, wa la in kafartum inna &apos;adhabi lashadid.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground">
                    &laquo;&nbsp;Si vous \u00eates reconnaissants, J&apos;augmenterai
                    Mes bienfaits pour vous. Mais si vous \u00eates ingrats, Mon
                    ch\u00e2timent est certes
                    s\u00e9v\u00e8re.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Sourate Ibrahim, 14:7
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  La gratitude en islam ne se limite pas aux paroles. Les savants
                  d\u00e9crivent trois dimensions du shukr : la gratitude du coeur
                  (reconna\u00eetre int\u00e9rieurement le bienfait), la gratitude
                  de la langue (prononcer alhamdulillah et les invocations
                  ad\u00e9quates) et la gratitude des membres (utiliser le bien dans
                  l&apos;ob\u00e9issance \u00e0 Allah). Lorsque ces trois dimensions
                  sont r\u00e9unies, la baraka dans le bien acquis est compl\u00e8te.
                </p>

                <HadithCard
                  arabic="\u0645\u0646 \u0644\u0645 \u064a\u0634\u0643\u0631 \u0627\u0644\u0646\u0627\u0633 \u0644\u0645 \u064a\u0634\u0643\u0631 \u0627\u0644\u0644\u0647"
                  text="Celui qui ne remercie pas les gens ne remercie pas Allah."
                  source="Rapport\u00e9 par at-Tirmidhi (1954) et Abu Dawud (4811)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith rappelle que la gratitude envers Allah passe
                  \u00e9galement par la reconnaissance envers ceux qui nous
                  ont aid\u00e9s dans notre acquisition : le vendeur honn\u00eate, la
                  famille qui a contribu\u00e9 financi\u00e8rement, ou toute
                  personne ayant facilit\u00e9 l&apos;achat. Le musulman qui
                  acquiert une nouvelle voiture ou un nouveau bien devrait
                  exprimer sa gratitude \u00e0 toutes les personnes concern\u00e9es,
                  en plus de remercier Allah, Qui est la source de tout bienfait.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dire alhamdulillah :</strong> la formule la plus simple
                      et la plus compl\u00e8te de gratitude. \u00c0 prononcer
                      syst\u00e9matiquement en recevant un nouveau bien.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Accomplir une sadaqa :</strong> donner une aum\u00f4ne
                      proportionnelle \u00e0 la valeur du bien acquis est une sunna
                      qui attire la b\u00e9n\u00e9diction et purifie la richesse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Partager le bienfait :</strong> proposer \u00e0 ses
                      proches, voisins ou personnes dans le besoin de profiter du
                      nouveau bien (par exemple, proposer de transporter quelqu&apos;un
                      avec sa nouvelle voiture).
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour le musulman lors d&apos;un achat
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam propose un cadre complet qui accompagne le musulman
                  dans ses d\u00e9cisions d&apos;achat, de la r\u00e9flexion
                  initiale \u00e0 l&apos;utilisation du bien acquis. Voici une
                  synth\u00e8se des recommandations proph\u00e9tiques et des
                  enseignements des savants pour que chaque acquisition soit source
                  de baraka et de satisfaction.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Avant l&apos;achat
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Accomplir la salat al-istikhara, consulter des personnes de
                      confiance (shura), v\u00e9rifier la licitation de la
                      transaction et s&apos;assurer que l&apos;argent utilis\u00e9 est
                      halal. Ne pas se pr\u00e9cipiter dans les grandes d\u00e9cisions
                      financi\u00e8res.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pendant la transaction
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Dire bismillah, \u00eatre honn\u00eate et transparent dans la
                      n\u00e9gociation, ne pas tromper ni cacher les d\u00e9fauts.
                      Le Proph\u00e8te (paix et salut sur lui) a maudit celui qui
                      trompe dans une transaction commerciale.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      \u00c0 la r\u00e9ception du bien
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      R\u00e9citer les douas mentionn\u00e9es dans cet article, dire
                      alhamdulillah, faire une sadaqa en signe de gratitude et
                      partager sa joie avec ses proches sans ostentation ni excès.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;utilisation du bien
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Utiliser le bien dans l&apos;ob\u00e9issance \u00e0 Allah,
                      \u00e9viter le gaspillage (israf), entretenir le bien avec soin
                      et continuer \u00e0 r\u00e9citer la doua de la monture \u00e0
                      chaque d\u00e9placement en voiture.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En adoptant cette approche globale, le musulman transforme un
                  simple achat en un acte d&apos;adoration. Chaque \u00e9tape est
                  une occasion de se rapprocher d&apos;Allah, de renforcer sa foi
                  et de placer la baraka dans ses biens. Cette vision spirituelle
                  de la consommation distingue le croyant de celui qui ach\u00e8te
                  sans conscience ni gratitude. Pour approfondir la pratique des
                  invocations quotidiennes, consultez notre guide complet sur{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la doua en islam</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour sortir de la maison"
                  description="D\u00e9couvrez l&apos;invocation \u00e0 r\u00e9citer chaque fois que vous quittez votre domicile pour b\u00e9n\u00e9ficier de la protection et de la baraka d&apos;Allah."
                  href="/doua-sortir-maison-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

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
                    href="/doua-nouveau-vetement-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua nouveau v\u00eatement
                  </Link>
                  <Link
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour sortir de la maison
                  </Link>
                  <Link
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Pri\u00e8re de consultation (istikhara)
                  </Link>
                  <Link
                    href="/doua-voyageur-safar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du voyageur
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
