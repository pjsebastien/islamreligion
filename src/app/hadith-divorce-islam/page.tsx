import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur le divorce en islam : r\u00e8gles, sagesse et mis\u00e9ricorde",
  description:
    "D\u00e9couvrez les hadiths authentiques sur le divorce en islam : talaq, khula, iddah, droits des \u00e9poux apr\u00e8s la s\u00e9paration. Texte arabe, traduction fran\u00e7aise et explications d\u00e9taill\u00e9es des savants.",
  openGraph: {
    title:
      "Hadiths sur le divorce en islam : r\u00e8gles, sagesse et mis\u00e9ricorde",
    description:
      "Les hadiths authentiques sur le divorce en islam : talaq, khula, p\u00e9riode de vidulit\u00e9 (iddah) et droits des \u00e9poux selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-divorce-islam",
    images: [
      {
        url: "/images/famille-musulmane-lecture-coran-islam-education.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-divorce-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du divorce" },
  { id: "acte-deteste", label: "L\u2019acte licite le plus d\u00e9test\u00e9" },
  { id: "regles-talaq", label: "Les r\u00e8gles du talaq" },
  { id: "khula", label: "Le khula (initiative de la femme)" },
  { id: "iddah-droits", label: "La iddah et les droits apr\u00e8s divorce" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le divorce en islam ?",
    answer:
      "Parmi les hadiths les plus cit\u00e9s sur le divorce figurent celui rapport\u00e9 par Ibn \u2018Umar sur le fait que le divorce est l\u2019acte licite le plus d\u00e9test\u00e9 d\u2019Allah (Abu Dawud 2178), celui d\u2019Ibn \u2018Abbas sur le talaq d\u2019Ibn \u2018Umar pendant les menstrues de son \u00e9pouse (Bukhari 5252) et celui d\u2019Ibn \u2018Abbas sur le khula de l\u2019\u00e9pouse de Thabit ibn Qays (Bukhari 5273). Ces hadiths couvrent les fondements du divorce : sa d\u00e9sapprobation, ses r\u00e8gles et les droits de la femme.",
  },
  {
    question:
      "Le divorce est-il interdit (haram) en islam ?",
    answer:
      "Non, le divorce n\u2019est pas interdit en islam. Il est licite (halal) mais fortement d\u00e9sapprouv\u00e9 (makruh) lorsqu\u2019il n\u2019y a pas de raison valable. Le Proph\u00e8te \ufdf2 a dit que c\u2019est l\u2019acte licite le plus d\u00e9test\u00e9 d\u2019Allah. Toutefois, dans certaines situations (maltraitance, impossibilit\u00e9 de cohabitation), le divorce peut devenir recommand\u00e9, voire obligatoire selon les savants.",
  },
  {
    question:
      "Qu\u2019est-ce que le khula en islam ?",
    answer:
      "Le khula est la proc\u00e9dure par laquelle la femme demande la dissolution du mariage, g\u00e9n\u00e9ralement en restituant la dot (mahr) ou une compensation au mari. Il est fond\u00e9 sur le hadith de l\u2019\u00e9pouse de Thabit ibn Qays qui demanda au Proph\u00e8te \ufdf2 de la s\u00e9parer de son mari en lui rendant son jardin (Bukhari 5273). Le khula garantit que la femme n\u2019est pas prisonni\u00e8re d\u2019un mariage qu\u2019elle ne d\u00e9sire plus.",
  },
  {
    question:
      "Combien de fois un homme peut-il divorcer de sa femme en islam ?",
    answer:
      "Le talaq est limit\u00e9 \u00e0 trois prononciations. Apr\u00e8s le premier et le deuxi\u00e8me talaq, le mari peut reprendre son \u00e9pouse pendant la p\u00e9riode de iddah. Apr\u00e8s le troisi\u00e8me talaq, la s\u00e9paration est d\u00e9finitive et la femme ne peut revenir qu\u2019apr\u00e8s avoir \u00e9pous\u00e9 un autre homme dans un mariage sinc\u00e8re. Le Coran \u00e9tablit cette r\u00e8gle dans sourate Al-Baqara (2:229-230).",
  },
  {
    question:
      "Qu\u2019est-ce que la iddah apr\u00e8s un divorce en islam ?",
    answer:
      "La iddah est la p\u00e9riode d\u2019attente que la femme doit observer apr\u00e8s le divorce avant de pouvoir se remarier. Elle dure g\u00e9n\u00e9ralement trois cycles menstruels pour les femmes qui ont des menstrues, trois mois pour celles qui n\u2019en ont pas, et jusqu\u2019\u00e0 l\u2019accouchement pour les femmes enceintes. Cette p\u00e9riode permet de v\u00e9rifier l\u2019absence de grossesse et offre un d\u00e9lai de r\u00e9conciliation.",
  },
  {
    question:
      "La femme a-t-elle le droit de demander le divorce en islam ?",
    answer:
      "Oui, la femme a le droit de demander la dissolution du mariage par le biais du khula. Elle peut \u00e9galement demander au juge (qadi) de prononcer le divorce pour pr\u00e9judice (darar), absence prolong\u00e9e du mari, d\u00e9faut d\u2019entretien ou d\u2019autres motifs reconnus par le fiqh. L\u2019islam n\u2019enferme pas la femme dans un mariage qu\u2019elle ne peut supporter.",
  },
];

export default function HadithDivorceIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-divorce-islam/#article",
        headline:
          "Hadiths sur le divorce en islam : r\u00e8gles, sagesse et mis\u00e9ricorde",
        description:
          "D\u00e9couvrez les hadiths authentiques sur le divorce en islam : talaq, khula, iddah, droits des \u00e9poux apr\u00e8s la s\u00e9paration.",
        image: "/images/famille-musulmane-lecture-coran-islam-education.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-divorce-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-divorce-islam/#breadcrumb",
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
            name: "Hadith du jour",
            item: "https://www.islamreligion.fr/hadith-du-jour",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Divorce en islam",
            item: "https://www.islamreligion.fr/hadith-divorce-islam",
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
          title="Hadiths sur le divorce en islam"
          subtitle="Les enseignements proph\u00e9tiques sur le divorce : r\u00e8gles du talaq, droit au khula, p\u00e9riode de iddah et droits des \u00e9poux apr\u00e8s la s\u00e9paration, selon la Sunna authentique."
          imageSrc="/images/famille-musulmane-lecture-coran-islam-education.jpg"
          imageAlt="Hadiths sur le divorce en islam, enseignements proph\u00e9tiques"
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
                <Link href="/hadith-du-jour" className="hover:text-primary">
                  Hadith du jour
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Divorce en islam
                </span>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  \u00c0 retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le divorce est licite en islam, mais il reste l&apos;acte permis le plus d\u00e9test\u00e9 d&apos;Allah selon le Proph\u00e8te \ufdf2.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le talaq ob\u00e9it \u00e0 des r\u00e8gles pr\u00e9cises : il doit \u00eatre prononc\u00e9 en dehors des menstrues, sans col\u00e8re excessive, et de mani\u00e8re progressive (trois prononciations maximum).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La femme dispose du droit au khula : elle peut demander la dissolution du mariage en restituant la dot ou une compensation.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La iddah (p\u00e9riode d&apos;attente) prot\u00e8ge les droits de la femme et offre un d\u00e9lai de r\u00e9conciliation avant la s\u00e9paration d\u00e9finitive.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du divorce en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran encadre le divorce avec une pr\u00e9cision remarquable. Loin d&apos;\u00eatre un sujet tabou, la s\u00e9paration conjugale y est trait\u00e9e comme une r\u00e9alit\u00e9 humaine qui n\u00e9cessite des r\u00e8gles justes et une \u00e9thique de mis\u00e9ricorde. Une sourate enti\u00e8re — <em>At-Talaq</em> — est consacr\u00e9e \u00e0 ce sujet, tandis que de nombreux versets de sourate <em>Al-Baqara</em> d\u00e9taillent les proc\u00e9dures et les droits des \u00e9poux.
                </p>

                <HadithCard
                  arabic="\u064a\u0627 \u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627 \u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u064f \u0625\u0650\u0630\u064e\u0627 \u0637\u064e\u0644\u0651\u064e\u0642\u0652\u062a\u064f\u0645\u064f \u0627\u0644\u0646\u0651\u0650\u0633\u064e\u0627\u0621\u064e \u0641\u064e\u0637\u064e\u0644\u0651\u0650\u0642\u064f\u0648\u0647\u064f\u0646\u0651\u064e \u0644\u0650\u0639\u0650\u062f\u0651\u064e\u062a\u0650\u0647\u0650\u0646\u0651\u064e \u0648\u064e\u0623\u064e\u062d\u0652\u0635\u064f\u0648\u0627 \u0627\u0644\u0652\u0639\u0650\u062f\u0651\u064e\u0629\u064e \u0648\u064e\u0627\u062a\u0651\u064e\u0642\u064f\u0648\u0627 \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u0631\u064e\u0628\u0651\u064e\u0643\u064f\u0645\u0652"
                  text="O Proph\u00e8te ! Quand vous r\u00e9pudiez les femmes, r\u00e9pudiez-les conform\u00e9ment \u00e0 leur p\u00e9riode d&apos;attente prescrite, et comptez la p\u00e9riode. Et craignez Allah, votre Seigneur."
                  source="Coran, sourate At-Talaq (65:1)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur \u00e9tablit le cadre juridique du divorce en islam. L&apos;expression &laquo; conform\u00e9ment \u00e0 leur p\u00e9riode d&apos;attente &raquo; signifie que le talaq doit \u00eatre prononc\u00e9 \u00e0 un moment pr\u00e9cis : en dehors des menstrues et dans une p\u00e9riode de puret\u00e9 o\u00f9 il n&apos;y a pas eu de rapport conjugal. Cette exigence temporelle vise \u00e0 \u00e9viter le divorce impulsif et \u00e0 prot\u00e9ger la femme. Le rappel de la crainte d&apos;Allah (<em>taqwa</em>) souligne que m\u00eame dans la s\u00e9paration, le croyant doit agir avec justice.
                </p>

                <HadithCard
                  arabic="\u0627\u0644\u0637\u0651\u064e\u0644\u064e\u0627\u0642\u064f \u0645\u064e\u0631\u0651\u064e\u062a\u064e\u0627\u0646\u0650 \u0641\u064e\u0625\u0650\u0645\u0652\u0633\u064e\u0627\u0643\u064c \u0628\u0650\u0645\u064e\u0639\u0652\u0631\u064f\u0648\u0641\u064d \u0623\u064e\u0648\u0652 \u062a\u064e\u0633\u0652\u0631\u0650\u064a\u062d\u064c \u0628\u0650\u0625\u0650\u062d\u0652\u0633\u064e\u0627\u0646\u064d"
                  text="Le divorce est permis deux fois. Alors, c&apos;est soit la reprise conform\u00e9ment \u00e0 la biens\u00e9ance, soit la lib\u00e9ration avec bont\u00e9."
                  source="Coran, sourate Al-Baqara (2:229)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset pose le principe de la progressivit\u00e9 du divorce. Le talaq r\u00e9vocable est limit\u00e9 \u00e0 deux prononciations, apr\u00e8s lesquelles le mari peut reprendre son \u00e9pouse (&laquo; reprise avec biens\u00e9ance &raquo;) ou la laisser partir (&laquo; lib\u00e9ration avec bont\u00e9 &raquo;). Cette limitation prot\u00e8ge la femme contre un usage abusif du talaq et garantit que la s\u00e9paration, si elle survient, se fasse dans la dignit\u00e9 et la mis\u00e9ricorde.
                </p>
              </section>

              {/* ============================================= */}
              {/* SECTION : L'acte licite le plus d\u00e9test\u00e9   */}
              {/* ============================================= */}
              <section id="acte-deteste" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le divorce : l&apos;acte licite le plus d\u00e9test\u00e9 d&apos;Allah
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne prohibe pas le divorce, mais il le place dans une cat\u00e9gorie particuli\u00e8re : un droit l\u00e9gal entour\u00e9 d&apos;une forte d\u00e9sapprobation divine. Les hadiths suivants refl\u00e8tent cette tension entre la permission juridique et la r\u00e9probation morale, invitant le croyant \u00e0 tout tenter avant d&apos;en arriver \u00e0 la s\u00e9paration.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;acte licite le plus d\u00e9test\u00e9 d&apos;Allah"
                  narrator="Ibn &apos;Umar"
                  arabic="\u0623\u064e\u0628\u0652\u063a\u064e\u0636\u064f \u0627\u0644\u0652\u062d\u064e\u0644\u064e\u0627\u0644\u0650 \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0637\u0651\u064e\u0644\u064e\u0627\u0642\u064f"
                  translation="L&apos;acte licite le plus d\u00e9test\u00e9 d&apos;Allah est le divorce."
                  source="Sunan Abu Dawud, n\u00b02178"
                  grade="hasan"
                  explanation="Ce hadith, bien que certains savants aient discut\u00e9 sa cha\u00eene de transmission, est largement accept\u00e9 pour son sens. Il \u00e9tablit que le divorce, bien que permis, n&apos;est pas un acte neutre : Allah le d\u00e9teste. Les savants en d\u00e9duisent que le divorce sans raison valable est makruh (d\u00e9sapprouv\u00e9). Ce hadith rappelle au musulman qu&apos;il ne doit recourir au divorce qu&apos;apr\u00e8s avoir \u00e9puis\u00e9 toutes les voies de r\u00e9conciliation : dialogue, m\u00e9diation familiale, intervention d&apos;arbitres."
                />

                <HadithBlock
                  number={2}
                  title="La femme qui demande le divorce sans raison grave"
                  narrator="Thawban"
                  arabic="\u0623\u064e\u064a\u0651\u064f\u0645\u064e\u0627 \u0627\u0645\u0652\u0631\u064e\u0623\u064e\u0629\u064d \u0633\u064e\u0623\u064e\u0644\u064e\u062a\u0652 \u0632\u064e\u0648\u0652\u062c\u064e\u0647\u064e\u0627 \u0627\u0644\u0637\u0651\u064e\u0644\u064e\u0627\u0642\u064e \u0641\u0650\u064a \u063a\u064e\u064a\u0652\u0631\u0650 \u0645\u064e\u0627 \u0628\u064e\u0623\u0652\u0633\u064d \u0641\u064e\u062d\u064e\u0631\u064e\u0627\u0645\u064c \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u064e\u0627 \u0631\u064e\u0627\u0626\u0650\u062d\u064e\u0629\u064f \u0627\u0644\u0652\u062c\u064e\u0646\u0651\u064e\u0629\u0650"
                  translation="Toute femme qui demande le divorce \u00e0 son mari sans raison grave, le parfum du Paradis lui sera interdit."
                  source="Sunan Abu Dawud, n\u00b02226 \u2014 Jami&apos; at-Tirmidhi, n\u00b01187"
                  grade="sahih"
                  explanation="Ce hadith s&apos;adresse sp\u00e9cifiquement \u00e0 la demande de divorce sans motif l\u00e9gitime. L&apos;expression &laquo; sans raison grave &raquo; (<em>fi ghayri ma ba&apos;s</em>) est la cl\u00e9 de compr\u00e9hension : lorsqu&apos;il existe un pr\u00e9judice r\u00e9el (maltraitance, abandon, d\u00e9faut d&apos;entretien), la demande de divorce est un droit plein et entier de la femme. Ce hadith ne vise donc pas \u00e0 emp\u00eacher la femme de se lib\u00e9rer d&apos;un mariage nuisible, mais \u00e0 dissuader les s\u00e9parations capricieuses, tout comme le hadith pr\u00e9c\u00e9dent d\u00e9courage le mari de divorcer sans motif."
                />

                <HadithBlock
                  number={3}
                  title="Iblis se r\u00e9jouit du divorce"
                  narrator="Jabir ibn &apos;Abdillah"
                  arabic="\u0625\u0650\u0646\u0651\u064e \u0625\u0650\u0628\u0652\u0644\u0650\u064a\u0633\u064e \u064a\u064e\u0636\u064e\u0639\u064f \u0639\u064e\u0631\u0652\u0634\u064e\u0647\u064f \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0652\u0645\u064e\u0627\u0621\u0650 \u062b\u064f\u0645\u0651\u064e \u064a\u064e\u0628\u0652\u0639\u064e\u062b\u064f \u0633\u064e\u0631\u064e\u0627\u064a\u064e\u0627\u0647\u064f\u060c \u0641\u064e\u0623\u064e\u062f\u0652\u0646\u064e\u0627\u0647\u064f\u0645\u0652 \u0645\u0650\u0646\u0652\u0647\u064f \u0645\u064e\u0646\u0652\u0632\u0650\u0644\u064e\u0629\u064b \u0623\u064e\u0639\u0652\u0638\u064e\u0645\u064f\u0647\u064f\u0645\u0652 \u0641\u0650\u062a\u0652\u0646\u064e\u0629\u064b\u060c \u064a\u064e\u062c\u0650\u064a\u0621\u064f \u0623\u064e\u062d\u064e\u062f\u064f\u0647\u064f\u0645\u0652 \u0641\u064e\u064a\u064e\u0642\u064f\u0648\u0644\u064f: \u0641\u064e\u0639\u064e\u0644\u0652\u062a\u064f \u0643\u064e\u0630\u064e\u0627 \u0648\u064e\u0643\u064e\u0630\u064e\u0627\u060c \u0641\u064e\u064a\u064e\u0642\u064f\u0648\u0644\u064f: \u0645\u064e\u0627 \u0635\u064e\u0646\u064e\u0639\u0652\u062a\u064e \u0634\u064e\u064a\u0652\u0626\u064b\u0627\u060c \u062b\u064f\u0645\u0651\u064e \u064a\u064e\u062c\u0650\u064a\u0621\u064f \u0623\u064e\u062d\u064e\u062f\u064f\u0647\u064f\u0645\u0652 \u0641\u064e\u064a\u064e\u0642\u064f\u0648\u0644\u064f: \u0645\u064e\u0627 \u062a\u064e\u0631\u064e\u0643\u0652\u062a\u064f\u0647\u064f \u062d\u064e\u062a\u0651\u064e\u0649 \u0641\u064e\u0631\u0651\u064e\u0642\u0652\u062a\u064f \u0628\u064e\u064a\u0652\u0646\u064e\u0647\u064f \u0648\u064e\u0628\u064e\u064a\u0652\u0646\u064e \u0627\u0645\u0652\u0631\u064e\u0623\u064e\u062a\u0650\u0647\u0650\u060c \u0641\u064e\u064a\u064f\u062f\u0652\u0646\u0650\u064a\u0647\u0650 \u0645\u0650\u0646\u0652\u0647\u064f \u0648\u064e\u064a\u064e\u0642\u064f\u0648\u0644\u064f: \u0646\u0650\u0639\u0652\u0645\u064e \u0623\u064e\u0646\u0652\u062a\u064e"
                  translation="Iblis place son tr\u00f4ne sur l&apos;eau, puis envoie ses troupes. Le plus proche de lui en rang est celui qui cause la plus grande fitna. L&apos;un d&apos;eux vient et dit : j&apos;ai fait ceci et cela. Il r\u00e9pond : tu n&apos;as rien fait. Puis un autre vient et dit : je ne l&apos;ai pas quitt\u00e9 jusqu&apos;\u00e0 ce que j&apos;aie s\u00e9par\u00e9 l&apos;homme de sa femme. Alors Iblis le rapproche de lui et dit : oui, c&apos;est toi !"
                  source="Sahih Muslim, n\u00b02813"
                  grade="sahih"
                  explanation="Ce hadith saisissant illustre la dimension spirituelle du divorce. Iblis consid\u00e8re la s\u00e9paration d&apos;un couple comme sa plus grande victoire, car elle d\u00e9truit l&apos;unit\u00e9 familiale, affecte les enfants et affaiblit la communaut\u00e9. Cela ne signifie pas que tout divorce est l&apos;\u0153uvre du diable : parfois la s\u00e9paration est n\u00e9cessaire et l\u00e9gitime. Mais le hadith avertit que le Shaytan s&apos;emploie activement \u00e0 semer la discorde entre \u00e9poux, et que le couple doit en \u00eatre conscient pour r\u00e9sister aux provocations et aux malentendus."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths \u00e9tablissent le cadre moral du divorce en islam. Il ne s&apos;agit pas d&apos;une interdiction, mais d&apos;un rappel que la s\u00e9paration doit rester un dernier recours, apr\u00e8s avoir \u00e9puis\u00e9 la patience, le dialogue et la m\u00e9diation. Pour mieux comprendre les fondements de la vie conjugale qui pr\u00e9c\u00e8dent le divorce, consultez notre article sur les{" "}
                  <Link href="/hadith-mariage-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le mariage en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : R\u00e8gles du talaq     */}
              {/* ============================== */}
              <section id="regles-talaq" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les r\u00e8gles du talaq dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le talaq (r\u00e9pudiation) n&apos;est pas un acte arbitraire que le mari peut prononcer \u00e0 sa guise. Le Proph\u00e8te \ufdf2 a \u00e9tabli des conditions strictes qui encadrent sa validit\u00e9. Ces r\u00e8gles visent \u00e0 prot\u00e9ger la femme, \u00e0 pr\u00e9venir les d\u00e9cisions impulsives et \u00e0 garantir une proc\u00e9dure juste.
                </p>

                <HadithBlock
                  number={4}
                  title="Le divorce pendant les menstrues est invalide"
                  narrator="Ibn &apos;Umar"
                  arabic="\u0623\u064e\u0646\u0651\u064e\u0647\u064f \u0637\u064e\u0644\u0651\u064e\u0642\u064e \u0627\u0645\u0652\u0631\u064e\u0623\u064e\u062a\u064e\u0647\u064f \u0648\u064e\u0647\u0650\u064a\u064e \u062d\u064e\u0627\u0626\u0650\u0636\u064c\u060c \u0641\u064e\u0633\u064e\u0623\u064e\u0644\u064e \u0639\u064f\u0645\u064e\u0631\u064f \u0631\u064e\u0633\u064f\u0648\u0644\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e \u0641\u064e\u0642\u064e\u0627\u0644\u064e: \u0645\u064f\u0631\u0652\u0647\u064f \u0641\u064e\u0644\u0652\u064a\u064f\u0631\u064e\u0627\u062c\u0650\u0639\u0652\u0647\u064e\u0627 \u062b\u064f\u0645\u0651\u064e \u0644\u0650\u064a\u064f\u0645\u0652\u0633\u0650\u0643\u0652\u0647\u064e\u0627 \u062d\u064e\u062a\u0651\u064e\u0649 \u062a\u064e\u0637\u0652\u0647\u064f\u0631\u064e \u062b\u064f\u0645\u0651\u064e \u062a\u064e\u062d\u0650\u064a\u0636\u064e \u062b\u064f\u0645\u0651\u064e \u062a\u064e\u0637\u0652\u0647\u064f\u0631\u064e\u060c \u062b\u064f\u0645\u0651\u064e \u0625\u0650\u0646\u0652 \u0634\u064e\u0627\u0621\u064e \u0623\u064e\u0645\u0652\u0633\u064e\u0643\u064e \u0628\u064e\u0639\u0652\u062f\u064f \u0648\u064e\u0625\u0650\u0646\u0652 \u0634\u064e\u0627\u0621\u064e \u0637\u064e\u0644\u0651\u064e\u0642\u064e \u0642\u064e\u0628\u0652\u0644\u064e \u0623\u064e\u0646\u0652 \u064a\u064e\u0645\u064e\u0633\u0651\u064e\u060c \u0641\u064e\u062a\u0650\u0644\u0652\u0643\u064e \u0627\u0644\u0652\u0639\u0650\u062f\u0651\u064e\u0629\u064f \u0627\u0644\u0651\u064e\u062a\u0650\u064a \u0623\u064e\u0645\u064e\u0631\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0623\u064e\u0646\u0652 \u062a\u064f\u0637\u064e\u0644\u0651\u064e\u0642\u064e \u0644\u064e\u0647\u064e\u0627 \u0627\u0644\u0646\u0651\u0650\u0633\u064e\u0627\u0621\u064f"
                  translation="Ibn &apos;Umar a divorc\u00e9 de sa femme alors qu&apos;elle \u00e9tait en p\u00e9riode de menstrues. &apos;Umar interrogea le Messager d&apos;Allah \ufdf2 qui dit : ordonne-lui de la reprendre, puis qu&apos;il la garde jusqu&apos;\u00e0 ce qu&apos;elle soit purifi\u00e9e, puis qu&apos;elle ait ses menstrues, puis qu&apos;elle soit \u00e0 nouveau purifi\u00e9e. Ensuite, s&apos;il le souhaite, qu&apos;il la garde, et s&apos;il le souhaite, qu&apos;il divorce avant de la toucher. Telle est la p\u00e9riode d&apos;attente qu&apos;Allah a ordonn\u00e9 de respecter pour divorcer des femmes."
                  source="Sahih Al-Bukhari, n\u00b05252 \u2014 Sahih Muslim, n\u00b01471"
                  grade="sahih"
                  explanation="Ce hadith est le fondement juridique de la r\u00e8gle du &laquo; talaq sunni &raquo; (divorce conforme \u00e0 la Sunna). Le Proph\u00e8te \ufdf2 a ordonn\u00e9 \u00e0 Ibn &apos;Umar de reprendre sa femme car le divorce prononc\u00e9 pendant les menstrues est consid\u00e9r\u00e9 comme une innovation bl\u00e2mable (<em>bid&apos;i</em>). Les savants des quatre \u00e9coles s&apos;accordent sur le fait que le divorce conforme \u00e0 la Sunna exige une p\u00e9riode de puret\u00e9 sans rapport sexuel pr\u00e9alable. Cette r\u00e8gle offre un d\u00e9lai de r\u00e9flexion au mari et prot\u00e8ge la femme contre une r\u00e9pudiation pr\u00e9cipit\u00e9e."
                />

                <HadithBlock
                  number={5}
                  title="Les trois divorces prononc\u00e9s en une seule fois"
                  narrator="Ibn &apos;Abbas"
                  arabic="\u0643\u064e\u0627\u0646\u064e \u0627\u0644\u0637\u0651\u064e\u0644\u064e\u0627\u0642\u064f \u0639\u064e\u0644\u064e\u0649 \u0639\u064e\u0647\u0652\u062f\u0650 \u0631\u064e\u0633\u064f\u0648\u0644\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e \u0648\u064e\u0623\u064e\u0628\u0650\u064a \u0628\u064e\u0643\u0652\u0631\u064d \u0648\u064e\u0633\u064e\u0646\u064e\u062a\u064e\u064a\u0652\u0646\u0650 \u0645\u0650\u0646\u0652 \u062e\u0650\u0644\u064e\u0627\u0641\u064e\u0629\u0650 \u0639\u064f\u0645\u064e\u0631\u064e: \u0637\u064e\u0644\u064e\u0627\u0642\u064f \u0627\u0644\u062b\u0651\u064e\u0644\u064e\u0627\u062b\u0650 \u0648\u064e\u0627\u062d\u0650\u062f\u064e\u0629\u064b"
                  translation="Du temps du Messager d&apos;Allah \ufdf2, d&apos;Abu Bakr et pendant deux ann\u00e9es du califat de &apos;Umar, les trois divorces (prononc\u00e9s en une seule fois) comptaient comme un seul."
                  source="Sahih Muslim, n\u00b01472"
                  grade="sahih"
                  explanation="Ce hadith rapporte une pratique juridique de l&apos;\u00e9poque proph\u00e9tique : prononcer trois divorces en une seule fois \u00e9tait compt\u00e9 comme un seul talaq r\u00e9vocable. &apos;Umar d\u00e9cida ensuite de les compter comme trois divorces irr\u00e9vocables pour dissuader les abus. Les savants divergent sur cette question : certains, comme Ibn Taymiyya et Ibn al-Qayyim, retiennent l&apos;avis de l&apos;\u00e9poque proph\u00e9tique (un seul divorce), tandis que la majorit\u00e9 des fuqaha suivent la d\u00e9cision de &apos;Umar (trois divorces). Ce hadith montre la richesse du fiqh islamique et la n\u00e9cessit\u00e9 de consulter un savant qualifi\u00e9."
                />

                <HadithBlock
                  number={6}
                  title="Pas de divorce sous la col\u00e8re"
                  narrator="Aisha"
                  arabic="\u0644\u064e\u0627 \u0637\u064e\u0644\u064e\u0627\u0642\u064e \u0648\u064e\u0644\u064e\u0627 \u0639\u064e\u062a\u064e\u0627\u0642\u064e \u0641\u0650\u064a \u0625\u0650\u063a\u0652\u0644\u064e\u0627\u0642\u064d"
                  translation="Pas de divorce et pas d&apos;affranchissement sous la contrainte (ou la col\u00e8re extr\u00eame)."
                  source="Sunan Abu Dawud, n\u00b02193 \u2014 Sunan Ibn Majah, n\u00b02046"
                  grade="hasan"
                  explanation="Le terme &laquo; ighlaq &raquo; d\u00e9signe l&apos;\u00e9tat o\u00f9 l&apos;esprit est &laquo; ferm\u00e9 &raquo;, c&apos;est-\u00e0-dire une col\u00e8re si intense que la personne ne ma\u00eetrise plus ses paroles. Les savants, dont Ibn Taymiyya, en d\u00e9duisent que le divorce prononc\u00e9 dans un \u00e9tat de col\u00e8re extr\u00eame, de folie ou sous contrainte est invalide. Ce hadith prot\u00e8ge les foyers des d\u00e9cisions prises dans l&apos;\u00e9motion. Il est toutefois important de distinguer la col\u00e8re ordinaire (qui n&apos;annule pas le talaq) de la col\u00e8re qui fait perdre la raison."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le talaq conforme \u00e0 la Sunna (\u00ab talaq sunni \u00bb) r\u00e9pond donc \u00e0 des conditions pr\u00e9cises : une p\u00e9riode de puret\u00e9 sans rapport pr\u00e9alable, une prononciation unique (pas trois d&apos;un coup) et un \u00e9tat de lucidit\u00e9. Ces r\u00e8gles t\u00e9moignent du souci de l&apos;islam de prot\u00e9ger l&apos;institution familiale, m\u00eame au moment de sa dissolution. Pour comprendre l&apos;ensemble des proc\u00e9dures l\u00e9gales, consultez notre article d\u00e9di\u00e9 au{" "}
                  <Link href="/divorce-islam-talaq-khula" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    divorce en islam : talaq, khula et proc\u00e9dures
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="\u00c9tudiez le fiqh du divorce, les droits des \u00e9poux et la jurisprudence islamique avec des professeurs qualifi\u00e9s."
                href="/apprendre-science-religieuse-islam"
                linkText="D\u00e9couvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Le khula             */}
              {/* ============================== */}
              <section id="khula" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le khula : le divorce \u00e0 l&apos;initiative de la femme
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne r\u00e9serve pas le droit de dissolution du mariage au seul mari. La femme dispose du khula, une proc\u00e9dure qui lui permet de demander la s\u00e9paration en restituant tout ou partie de la dot (mahr). Les hadiths suivants fondent ce droit et en pr\u00e9cisent les conditions.
                </p>

                <HadithBlock
                  number={7}
                  title="L&apos;\u00e9pouse de Thabit ibn Qays demande le khula"
                  narrator="Ibn &apos;Abbas"
                  arabic="\u062c\u064e\u0627\u0621\u064e\u062a\u0652 \u0627\u0645\u0652\u0631\u064e\u0623\u064e\u0629\u064f \u062b\u064e\u0627\u0628\u0650\u062a\u0650 \u0628\u0652\u0646\u0650 \u0642\u064e\u064a\u0652\u0633\u064d \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u0650 \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e \u0641\u064e\u0642\u064e\u0627\u0644\u064e\u062a\u0652: \u064a\u064e\u0627 \u0631\u064e\u0633\u064f\u0648\u0644\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u0650\u060c \u062b\u064e\u0627\u0628\u0650\u062a\u064f \u0628\u0652\u0646\u064f \u0642\u064e\u064a\u0652\u0633\u064d \u0645\u064e\u0627 \u0623\u064e\u0639\u064e\u062a\u0650\u0628\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0641\u0650\u064a \u062e\u064f\u0644\u064f\u0642\u064d \u0648\u064e\u0644\u064e\u0627 \u062f\u0650\u064a\u0646\u064d\u060c \u0648\u064e\u0644\u064e\u0643\u0650\u0646\u0651\u0650\u064a \u0623\u064e\u0643\u0652\u0631\u064e\u0647\u064f \u0627\u0644\u0652\u0643\u064f\u0641\u0652\u0631\u064e \u0641\u0650\u064a \u0627\u0644\u0652\u0625\u0650\u0633\u0652\u0644\u064e\u0627\u0645\u0650\u060c \u0641\u064e\u0642\u064e\u0627\u0644\u064e \u0631\u064e\u0633\u064f\u0648\u0644\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u0650: \u0623\u064e\u062a\u064e\u0631\u064f\u062f\u0651\u0650\u064a\u0646\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u062d\u064e\u062f\u0650\u064a\u0642\u064e\u062a\u064e\u0647\u064f\u061f \u0642\u064e\u0627\u0644\u064e\u062a\u0652: \u0646\u064e\u0639\u064e\u0645\u0652\u060c \u0641\u064e\u0642\u064e\u0627\u0644\u064e \u0631\u064e\u0633\u064f\u0648\u0644\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u0650: \u0627\u0642\u0652\u0628\u064e\u0644\u0650 \u0627\u0644\u0652\u062d\u064e\u062f\u0650\u064a\u0642\u064e\u0629\u064e \u0648\u064e\u0637\u064e\u0644\u0651\u0650\u0642\u0652\u0647\u064e\u0627 \u062a\u064e\u0637\u0652\u0644\u0650\u064a\u0642\u064e\u0629\u064b"
                  translation="L&apos;\u00e9pouse de Thabit ibn Qays vint au Proph\u00e8te \ufdf2 et dit : \u00f4 Messager d&apos;Allah, je ne reproche rien \u00e0 Thabit quant \u00e0 son caract\u00e8re ou sa religion, mais je d\u00e9teste tomber dans l&apos;impi\u00e9t\u00e9 (en ne remplissant pas ses droits) alors que je suis en islam. Le Messager d&apos;Allah dit : lui rendras-tu son jardin ? Elle r\u00e9pondit : oui. Le Messager d&apos;Allah dit alors (au mari) : accepte le jardin et divorce-la d&apos;un seul divorce."
                  source="Sahih Al-Bukhari, n\u00b05273"
                  grade="sahih"
                  explanation="Ce hadith est le r\u00e9cit fondateur du khula en islam. Plusieurs le\u00e7ons s&apos;en d\u00e9gagent. Premi\u00e8rement, la femme peut demander le divorce m\u00eame si le mari n&apos;a commis aucune faute : l&apos;incompatibilit\u00e9 suffit. Deuxi\u00e8mement, la compensation (ici, la restitution du jardin offert comme mahr) est la contrepartie du khula. Troisi\u00e8mement, le Proph\u00e8te \ufdf2 a ordonn\u00e9 au mari d&apos;accepter : le khula ne d\u00e9pend donc pas du bon vouloir du mari si l&apos;autorit\u00e9 comp\u00e9tente l&apos;ordonne. Ce hadith garantit que la femme n&apos;est jamais prisonni\u00e8re d&apos;un mariage."
                />

                <HadithBlock
                  number={8}
                  title="La compensation du khula ne doit pas exc\u00e9der la dot"
                  narrator="Abu Az-Zubayr"
                  arabic="\u0623\u064e\u0646\u0651\u064e \u062b\u064e\u0627\u0628\u0650\u062a\u064e \u0628\u0652\u0646\u064e \u0642\u064e\u064a\u0652\u0633\u064d \u0636\u064e\u0631\u064e\u0628\u064e \u0627\u0645\u0652\u0631\u064e\u0623\u064e\u062a\u064e\u0647\u064f \u0641\u064e\u0643\u064e\u0633\u064e\u0631\u064e \u064a\u064e\u062f\u064e\u0647\u064e\u0627\u060c \u0641\u064e\u0623\u064e\u062a\u064e\u062a\u0650 \u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u064e \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e \u0641\u064e\u0623\u064e\u0645\u064e\u0631\u064e \u062b\u064e\u0627\u0628\u0650\u062a\u064b\u0627 \u0623\u064e\u0646\u0652 \u064a\u064e\u0623\u0652\u062e\u064f\u0630\u064e \u0645\u0650\u0646\u0652\u0647\u064e\u0627 \u0648\u064e\u064a\u064f\u062e\u064e\u0644\u0651\u0650\u064a\u064e \u0633\u064e\u0628\u0650\u064a\u0644\u064e\u0647\u064e\u0627"
                  translation="Thabit ibn Qays frappa sa femme et lui cassa le bras. Elle se rendit aupr\u00e8s du Proph\u00e8te \ufdf2 qui ordonna \u00e0 Thabit de prendre (la compensation) et de la laisser partir."
                  source="Sunan Ad-Daraqutni, n\u00b03672 \u2014 Sunan Al-Bayhaqi Al-Kubra"
                  grade="hasan"
                  explanation="Cette version compl\u00e8te le r\u00e9cit du khula en montrant un cas o\u00f9 le pr\u00e9judice physique est av\u00e9r\u00e9. Ici, le Proph\u00e8te \ufdf2 n&apos;a pas laiss\u00e9 de choix au mari : il lui a ordonn\u00e9 de la lib\u00e9rer. Les savants utilisent ce hadith pour souligner que le khula en cas de maltraitance est un droit absolu de la femme, et que la compensation peut \u00eatre r\u00e9duite voire supprim\u00e9e si le tort vient du mari. L&apos;imam Malik et d&apos;autres juristes soutiennent que le mari fautif ne peut exiger une compensation sup\u00e9rieure \u00e0 ce qu&apos;il a donn\u00e9 comme dot."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le khula est une preuve que l&apos;islam a garanti \u00e0 la femme le droit de se lib\u00e9rer d&apos;un mariage qui ne lui convient plus, quatorze si\u00e8cles avant que ce droit ne soit reconnu dans de nombreuses l\u00e9gislations modernes. La proc\u00e9dure prot\u00e8ge les deux parties : la femme retrouve sa libert\u00e9, et le mari r\u00e9cup\u00e8re la dot ou une compensation \u00e9quitable.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Iddah et droits      */}
              {/* ============================== */}
              <section id="iddah-droits" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La iddah et les droits apr\u00e8s le divorce
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La p\u00e9riode de iddah (vidulit\u00e9) n&apos;est pas une simple formalit\u00e9 : elle remplit plusieurs fonctions fondamentales. Elle permet de v\u00e9rifier l&apos;absence de grossesse, offre un d\u00e9lai de r\u00e9conciliation et garantit \u00e0 la femme un droit au logement et \u00e0 l&apos;entretien pendant cette p\u00e9riode. Les hadiths suivants \u00e9clairent ces droits.
                </p>

                <HadithBlock
                  number={9}
                  title="La femme divorc\u00e9e reste dans la maison de son mari"
                  narrator="Fatima bint Qays"
                  arabic="\u0623\u064e\u0646\u0651\u064e \u0623\u064e\u0628\u064e\u0627 \u0639\u064e\u0645\u0652\u0631\u0650\u0648 \u0628\u0652\u0646\u064e \u062d\u064e\u0641\u0652\u0635\u064d \u0637\u064e\u0644\u0651\u064e\u0642\u064e\u0647\u064e\u0627 \u0627\u0644\u0652\u0628\u064e\u062a\u0651\u064e\u0629\u064e\u060c \u0641\u064e\u0623\u064e\u0631\u0652\u0633\u064e\u0644\u064e \u0625\u0650\u0644\u064e\u064a\u0652\u0647\u064e\u0627 \u0648\u064e\u0643\u0650\u064a\u0644\u064f\u0647\u064f \u0628\u0650\u0634\u064e\u0639\u0650\u064a\u0631\u064d \u0641\u064e\u0633\u064e\u062e\u0650\u0637\u064e\u062a\u0652\u0647\u064f\u060c \u0641\u064e\u0642\u064e\u0627\u0644\u064e: \u0648\u064e\u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0645\u064e\u0627 \u0644\u064e\u0643\u0650 \u0639\u064e\u0644\u064e\u064a\u0652\u0646\u064e\u0627 \u0645\u0650\u0646\u0652 \u0634\u064e\u064a\u0652\u0621\u064d\u060c \u0641\u064e\u062c\u064e\u0627\u0621\u064e\u062a\u0652 \u0631\u064e\u0633\u064f\u0648\u0644\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0641\u064e\u0630\u064e\u0643\u064e\u0631\u064e\u062a\u0652 \u0630\u064e\u0644\u0650\u0643\u064e \u0644\u064e\u0647\u064f"
                  translation="Abu &apos;Amr ibn Hafs divorc\u00e9 d&apos;elle (du troisi\u00e8me divorce irr\u00e9vocable). Son repr\u00e9sentant lui envoya de l&apos;orge. Elle le m\u00e9prisa. Il dit : par Allah, tu n&apos;as aucun droit sur nous. Elle se rendit aupr\u00e8s du Messager d&apos;Allah \ufdf2 et lui rapporta cela."
                  source="Sahih Muslim, n\u00b01480"
                  grade="sahih"
                  explanation="Le hadith complet de Fatima bint Qays a suscit\u00e9 de nombreux d\u00e9bats parmi les savants. Le Proph\u00e8te \ufdf2 lui dit qu&apos;elle n&apos;avait pas droit \u00e0 la nafaqa (entretien) car le troisi\u00e8me divorce \u00e9tait irr\u00e9vocable. Cependant, la majorit\u00e9 des savants, dont &apos;Umar ibn al-Khattab, ont estim\u00e9 que la femme divorc\u00e9e de mani\u00e8re irr\u00e9vocable conserve au minimum le droit au logement pendant la iddah, conform\u00e9ment au verset de sourate At-Talaq (65:1). Ce hadith illustre la complexit\u00e9 du fiqh et la n\u00e9cessit\u00e9 de croiser les textes."
                />

                <HadithBlock
                  number={10}
                  title="La iddah de la femme enceinte dure jusqu&apos;\u00e0 l&apos;accouchement"
                  narrator="Subay&apos;a al-Aslamiyya"
                  arabic="\u0623\u064e\u0646\u0651\u064e\u0647\u064e\u0627 \u0648\u064e\u0636\u064e\u0639\u064e\u062a\u0652 \u0628\u064e\u0639\u0652\u062f\u064e \u0648\u064e\u0641\u064e\u0627\u0629\u0650 \u0632\u064e\u0648\u0652\u062c\u0650\u0647\u064e\u0627 \u0628\u0650\u0644\u064e\u064a\u064e\u0627\u0644\u064d\u060c \u0641\u064e\u062c\u064e\u0627\u0621\u064e\u062a\u0652 \u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u064e \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e \u0641\u064e\u0627\u0633\u0652\u062a\u064e\u0623\u0652\u0630\u064e\u0646\u064e\u062a\u0652\u0647\u064f \u0623\u064e\u0646\u0652 \u062a\u064e\u0646\u0652\u0643\u0650\u062d\u064e\u060c \u0641\u064e\u0623\u064e\u0630\u0650\u0646\u064e \u0644\u064e\u0647\u064e\u0627"
                  translation="Elle accoucha quelques nuits apr\u00e8s le d\u00e9c\u00e8s de son mari. Elle se rendit aupr\u00e8s du Proph\u00e8te \ufdf2 et lui demanda la permission de se remarier. Il le lui permit."
                  source="Sahih Al-Bukhari, n\u00b05320 \u2014 Sahih Muslim, n\u00b01484"
                  grade="sahih"
                  explanation="Ce hadith \u00e9tablit que la iddah de la femme enceinte se termine \u00e0 l&apos;accouchement, que la s\u00e9paration soit due \u00e0 un divorce ou au d\u00e9c\u00e8s du mari. Cette r\u00e8gle est fond\u00e9e sur le verset coranique : &laquo; Et quant \u00e0 celles qui sont enceintes, leur p\u00e9riode d&apos;attente se terminera \u00e0 leur accouchement &raquo; (At-Talaq, 65:4). Subay&apos;a accoucha tr\u00e8s peu de temps apr\u00e8s le d\u00e9c\u00e8s de son \u00e9poux, et le Proph\u00e8te \ufdf2 lui confirma qu&apos;elle \u00e9tait libre de se remarier. Les savants des quatre \u00e9coles s&apos;accordent sur ce point."
                />

                <HadithBlock
                  number={11}
                  title="Le p\u00e8re n&apos;a pas le droit de s\u00e9parer la m\u00e8re de son enfant"
                  narrator="Abu Ayyub al-Ansari"
                  arabic="\u0645\u064e\u0646\u0652 \u0641\u064e\u0631\u0651\u064e\u0642\u064e \u0628\u064e\u064a\u0652\u0646\u064e \u0648\u064e\u0627\u0644\u0650\u062f\u064e\u0629\u064d \u0648\u064e\u0648\u064e\u0644\u064e\u062f\u0650\u0647\u064e\u0627 \u0641\u064e\u0631\u0651\u064e\u0642\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0628\u064e\u064a\u0652\u0646\u064e\u0647\u064f \u0648\u064e\u0628\u064e\u064a\u0652\u0646\u064e \u0623\u064e\u062d\u0650\u0628\u0651\u064e\u062a\u0650\u0647\u0650 \u064a\u064e\u0648\u0652\u0645\u064e \u0627\u0644\u0652\u0642\u0650\u064a\u064e\u0627\u0645\u064e\u0629\u0650"
                  translation="Quiconque s\u00e9pare une m\u00e8re de son enfant, Allah le s\u00e9parera de ses \u00eatres chers le Jour de la R\u00e9surrection."
                  source="Jami&apos; at-Tirmidhi, n\u00b01566 \u2014 Sunan Abu Dawud, n\u00b02696"
                  grade="hasan"
                  explanation="Bien que ce hadith concerne \u00e0 l&apos;origine les captifs de guerre, les savants l&apos;appliquent \u00e9galement au contexte du divorce. La garde de l&apos;enfant en bas \u00e2ge (hadana) revient \u00e0 la m\u00e8re selon la majorit\u00e9 des fuqaha, tant qu&apos;elle ne se remarie pas ou qu&apos;il n&apos;y a pas de raison l\u00e9gitime de la lui retirer. Ce hadith est un avertissement s\u00e9v\u00e8re contre l&apos;utilisation des enfants comme moyen de pression lors d&apos;un divorce. L&apos;int\u00e9r\u00eat de l&apos;enfant prime sur les conflits parentaux."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le divorce et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont \u00e9labor\u00e9 un corpus juridique d\u00e9taill\u00e9 autour des hadiths sur le divorce. Leurs commentaires permettent de saisir les nuances de ces textes et d&apos;\u00e9viter les interpr\u00e9tations erron\u00e9es.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le divorce est de trois types : sunni (conforme \u00e0 la Sunna), bid&apos;i (innovateur et bl\u00e2mable) et celui qui n&apos;est ni l&apos;un ni l&apos;autre. Le talaq sunni est celui prononc\u00e9 en une seule fois, dans une p\u00e9riode de puret\u00e9 o\u00f9 il n&apos;y a pas eu de rapport. C&apos;est la seule forme recommand\u00e9e par les textes.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le khula est un droit \u00e9tabli par la Sunna. Si la femme \u00e9prouve de l&apos;aversion pour son mari au point de craindre de ne pas respecter les limites d&apos;Allah, il est licite pour elle de se racheter en restituant la dot. Le mari ne peut refuser si l&apos;autorit\u00e9 l&apos;ordonne, car le Proph\u00e8te \ufdf2 a ordonn\u00e9 \u00e0 Thabit ibn Qays d&apos;accepter le jardin et de la lib\u00e9rer.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le divorce prononc\u00e9 dans un \u00e9tat de col\u00e8re intense, o\u00f9 l&apos;homme ne se rend pas compte de ce qu&apos;il dit, est invalide. L&apos;ighlaq mentionn\u00e9 dans le hadith d\u00e9signe la fermeture de l&apos;esprit, que ce soit par la col\u00e8re extr\u00eame, la folie ou la contrainte. Un acte juridique requiert une intention lucide.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Allah a fait du divorce l&apos;acte le plus d\u00e9test\u00e9 parmi les choses permises, car il d\u00e9truit la famille, prive les enfants de la stabilit\u00e9 et rompt les liens de parent\u00e9. Mais Il l&apos;a permis car interdire la s\u00e9paration quand la vie commune est devenue impossible serait une injustice encore plus grande.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces paroles r\u00e9v\u00e8lent la profondeur du fiqh islamique sur le divorce. Les savants ont toujours cherch\u00e9 l&apos;\u00e9quilibre entre la pr\u00e9servation de la famille et la protection des individus. Le divorce n&apos;est ni un tabou ni une banalit\u00e9 : c&apos;est une proc\u00e9dure encadr\u00e9e, pens\u00e9e pour minimiser le pr\u00e9judice et garantir les droits de chacun.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le\u00e7ons pratiques      */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le\u00e7ons pratiques des hadiths sur le divorce
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths pr\u00e9sent\u00e9s permettent de d\u00e9gager des principes concrets pour le musulman confront\u00e9 \u00e0 la question du divorce :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        \u00c9puiser toutes les voies de r\u00e9conciliation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le divorce \u00e9tant l&apos;acte licite le plus d\u00e9test\u00e9 d&apos;Allah, le couple doit d&apos;abord recourir au dialogue, \u00e0 la m\u00e9diation familiale et \u00e0 la nomination d&apos;arbitres avant d&apos;envisager la s\u00e9paration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter la proc\u00e9dure du talaq sunni
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le divorce doit \u00eatre prononc\u00e9 dans une p\u00e9riode de puret\u00e9 sans rapport pr\u00e9alable, de mani\u00e8re individuelle (un talaq \u00e0 la fois) et dans un \u00e9tat de lucidit\u00e9. Prononcer trois divorces d&apos;un coup est contraire \u00e0 la Sunna.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Reconna\u00eetre le droit de la femme au khula
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La femme n&apos;est pas prisonni\u00e8re de son mariage. Le khula lui garantit le droit de demander la dissolution, m\u00eame sans faute du mari, en restituant la dot ou une compensation \u00e9quitable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter la iddah et les droits de la femme
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La p\u00e9riode de iddah n&apos;est pas optionnelle. Elle prot\u00e8ge la femme (logement, entretien) et offre un d\u00e9lai de r\u00e9conciliation. Pendant cette p\u00e9riode, le mari peut revenir sur sa d\u00e9cision apr\u00e8s le premier ou le deuxi\u00e8me talaq.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prot\u00e9ger les enfants des conflits parentaux
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        S\u00e9parer une m\u00e8re de son enfant sans raison l\u00e9gitime est un acte grave. Le Proph\u00e8te \ufdf2 a averti que celui qui le fait sera s\u00e9par\u00e9 de ses \u00eatres chers le Jour de la R\u00e9surrection. L&apos;int\u00e9r\u00eat de l&apos;enfant doit primer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se s\u00e9parer avec bont\u00e9 si le divorce est in\u00e9vitable
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran ordonne soit &laquo; la reprise avec biens\u00e9ance, soit la lib\u00e9ration avec bont\u00e9 &raquo;. Le divorce n&apos;autorise ni la vengeance, ni la spoliation, ni la m\u00e9disance. Le croyant reste juste, m\u00eame dans la s\u00e9paration.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le divorce dans leur langue originale et approfondissez votre connaissance du fiqh islamique."
                  preselect="arabe"
                />
              </div>

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* Maillage interne */}
              <div className="mt-12 space-y-4">
                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous nos hadiths par th\u00e8me"
                  href="/hadith-du-jour"
                  linkText="Hadith du jour : paroles authentiques"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Proph\u00e8te Muhammad \ufdf2 : fondements et collections"
                  description="D\u00e9couvrez l&apos;histoire des grandes collections de hadiths et les crit\u00e8res d&apos;authenticit\u00e9."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le mariage en islam : enseignements proph\u00e9tiques"
                  description="Les hadiths authentiques sur le choix du conjoint, les droits des \u00e9poux et la bienveillance conjugale."
                  href="/hadith-mariage-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le divorce en islam : talaq, khula et proc\u00e9dures"
                  description="Les r\u00e8gles juridiques compl\u00e8tes du divorce, les d\u00e9marches et les droits de chaque \u00e9poux."
                  href="/divorce-islam-talaq-khula"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
