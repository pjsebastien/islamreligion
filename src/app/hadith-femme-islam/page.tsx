import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur la femme en islam : droits, dignit\u00e9 et enseignements proph\u00e9tiques",
  description:
    "D\u00e9couvrez les hadiths authentiques sur la femme en islam : dignit\u00e9, droits, \u00e9ducation, pi\u00e9t\u00e9 et r\u00f4le spirituel. Texte arabe, traduction fran\u00e7aise et explications d\u00e9taill\u00e9es des enseignements du Proph\u00e8te \uFDFA.",
  openGraph: {
    title:
      "Hadiths sur la femme en islam : droits, dignit\u00e9 et enseignements proph\u00e9tiques",
    description:
      "Les hadiths authentiques sur la femme en islam : dignit\u00e9, respect, droits, pi\u00e9t\u00e9 et enseignements proph\u00e9tiques sur le statut de la femme dans la Sunna.",
    url: "https://www.islamreligion.fr/hadith-femme-islam",
    images: [
      {
        url: "/images/femme-musulmane-hijab-lecture-coran-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-femme-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "dignite-femme", label: "La dignit\u00e9 de la femme" },
  { id: "droits-femme", label: "Droits de la femme" },
  { id: "femme-pieuse", label: "La femme pieuse" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur la femme en islam ?",
    answer:
      "Parmi les hadiths les plus importants, on trouve celui du Proph\u00e8te \uFDFA lors du p\u00e8lerinage d\u2019adieu o\u00f9 il ordonne de bien traiter les femmes (Muslim 1218), celui sur le paradis aux pieds des m\u00e8res (Nasa\u2019i 3104), et celui affirmant que les femmes sont les s\u0153urs jumelles des hommes (Abu Dawud 236). Ces hadiths couvrent la dignit\u00e9, les droits et l\u2019\u00e9galit\u00e9 spirituelle de la femme.",
  },
  {
    question: "L\u2019islam accorde-t-il des droits \u00e0 la femme ?",
    answer:
      "Oui, l\u2019islam a accord\u00e9 \u00e0 la femme des droits fondamentaux bien avant les l\u00e9gislations modernes : le droit \u00e0 l\u2019h\u00e9ritage (Coran 4:7), le droit \u00e0 l\u2019\u00e9ducation (Ibn Majah 224), le droit au consentement dans le mariage (Bukhari 5136), le droit \u00e0 la propri\u00e9t\u00e9 et au commerce. Le Proph\u00e8te \uFDFA a constamment d\u00e9fendu ces droits et a condamn\u00e9 toute forme d\u2019oppression envers les femmes.",
  },
  {
    question:
      "Que dit le Proph\u00e8te Muhammad sur le respect de la femme ?",
    answer:
      "Le Proph\u00e8te \uFDFA a dit : \u00ab Recommandez-vous mutuellement le bien envers les femmes \u00bb (Bukhari 3331). Il a \u00e9galement d\u00e9clar\u00e9 lors de son sermon d\u2019adieu : \u00ab Craignez Allah au sujet des femmes, car vous les avez prises sous la protection d\u2019Allah \u00bb (Muslim 1218). Il interdisait de frapper les femmes au visage et enseignait la douceur et le respect.",
  },
  {
    question: "Quel est le statut de la m\u00e8re en islam ?",
    answer:
      "La m\u00e8re occupe un rang exceptionnel en islam. Le Proph\u00e8te \uFDFA a plac\u00e9 la m\u00e8re trois fois avant le p\u00e8re lorsqu\u2019on lui a demand\u00e9 qui m\u00e9rite le plus la bonne compagnie (Bukhari 5971). Il a \u00e9galement enseign\u00e9 que le paradis se trouve aux pieds des m\u00e8res (Nasa\u2019i 3104). Ce statut \u00e9lev\u00e9 montre la place centrale de la femme en tant que m\u00e8re dans la soci\u00e9t\u00e9 islamique.",
  },
  {
    question: "La femme peut-elle \u00e9tudier et enseigner en islam ?",
    answer:
      "Absolument. Le Proph\u00e8te \uFDFA a dit : \u00ab La qu\u00eate du savoir est une obligation pour chaque musulman \u00bb (Ibn Majah 224), terme qui englobe hommes et femmes. Aisha, l\u2019\u00e9pouse du Proph\u00e8te, \u00e9tait l\u2019une des plus grandes savantes de l\u2019islam, transmettant plus de 2 200 hadiths. De nombreuses femmes ont \u00e9t\u00e9 savantes, enseignantes et juristes tout au long de l\u2019histoire islamique.",
  },
  {
    question:
      "Les femmes et les hommes sont-ils \u00e9gaux devant Allah selon les hadiths ?",
    answer:
      "Oui, les hadiths et le Coran affirment clairement l\u2019\u00e9galit\u00e9 spirituelle. Le Proph\u00e8te \uFDFA a dit : \u00ab Les femmes sont les s\u0153urs jumelles des hommes \u00bb (Abu Dawud 236). Le Coran affirme : \u00ab Quiconque fait une bonne action, homme ou femme, tout en \u00e9tant croyant, Nous lui ferons vivre une bonne vie \u00bb (16:97). La distinction ne se fait que par la pi\u00e9t\u00e9, jamais par le sexe.",
  },
  {
    question: "Le consentement de la femme est-il n\u00e9cessaire pour le mariage en islam ?",
    answer:
      "Oui, le consentement de la femme est une condition de validit\u00e9 du mariage en islam. Le Proph\u00e8te \uFDFA a dit : \u00ab La femme pr\u00e9c\u00e9demment mari\u00e9e ne peut \u00eatre mari\u00e9e qu\u2019avec son ordre, et la vierge ne peut \u00eatre mari\u00e9e qu\u2019avec sa permission \u00bb (Bukhari 5136). Il a m\u00eame annul\u00e9 des mariages o\u00f9 la femme n\u2019avait pas \u00e9t\u00e9 consult\u00e9e.",
  },
];

export default function HadithFemmeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-femme-islam/#article",
        headline:
          "Hadiths sur la femme en islam : droits, dignit\u00e9 et enseignements proph\u00e9tiques",
        description:
          "D\u00e9couvrez les hadiths authentiques sur la femme en islam : dignit\u00e9, droits, \u00e9ducation, pi\u00e9t\u00e9 et r\u00f4le spirituel.",
        image: "/images/femme-musulmane-hijab-lecture-coran-islam.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-femme-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-femme-islam/#breadcrumb",
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
            name: "Hadiths sur la femme",
            item: "https://www.islamreligion.fr/hadith-femme-islam",
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
          title="Hadiths sur la femme en islam"
          subtitle="Les enseignements proph\u00e9tiques sur la dignit\u00e9, les droits, la pi\u00e9t\u00e9 et le r\u00f4le spirituel de la femme selon la Sunna authentique."
          imageSrc="/images/femme-musulmane-hijab-lecture-coran-islam.jpg"
          imageAlt="Hadiths sur la femme en islam, droits et dignit\u00e9"
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
                  Hadiths sur la femme
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
                    Le Proph\u00e8te \uFDFA a \u00e9lev\u00e9 le statut de la femme et ordonn\u00e9 de la traiter avec dignit\u00e9, respect et bienveillance en toute circonstance.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;islam a accord\u00e9 \u00e0 la femme des droits fondamentaux : h\u00e9ritage, \u00e9ducation, consentement au mariage et propri\u00e9t\u00e9.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les hadiths affirment l&apos;\u00e9galit\u00e9 spirituelle entre l&apos;homme et la femme : la pi\u00e9t\u00e9 est le seul crit\u00e8re de sup\u00e9riorit\u00e9 devant Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La m\u00e8re occupe un rang exceptionnel dans la Sunna, le Proph\u00e8te \uFDFA pla\u00e7ant le paradis &laquo;&nbsp;aux pieds des m\u00e8res&nbsp;&raquo;.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : la femme dans le Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il est essentiel de rappeler que le Coran pose les fondements de la dignit\u00e9 et de l&apos;\u00e9galit\u00e9 spirituelle de la femme. Plusieurs versets affirment clairement que l&apos;homme et la femme partagent la m\u00eame origine, la m\u00eame responsabilit\u00e9 devant Allah et la m\u00eame r\u00e9compense pour leurs \u0153uvres. Ces versets constituent la base sur laquelle s&apos;appuient les hadiths du Proph\u00e8te \uFDFA.
                </p>

                <HadithCard
                  arabic="\u064A\u0627 \u0623\u064E\u064A\u0651\u064F\u0647\u064E\u0627 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u064F \u0625\u0650\u0646\u0651\u064E\u0627 \u062E\u064E\u0644\u064E\u0642\u0652\u0646\u064E\u0627\u0643\u064F\u0645 \u0645\u0650\u0646 \u0630\u064E\u0643\u064E\u0631\u064D \u0648\u064E\u0623\u064F\u0646\u062B\u064E\u0649\u0670 \u0648\u064E\u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0627\u0643\u064F\u0645\u0652 \u0634\u064F\u0639\u064F\u0648\u0628\u064B\u0627 \u0648\u064E\u0642\u064E\u0628\u064E\u0627\u0626\u0650\u0644\u064E \u0644\u0650\u062A\u064E\u0639\u064E\u0627\u0631\u064E\u0641\u064F\u0648\u0627 \u0625\u0650\u0646\u0651\u064E \u0623\u064E\u0643\u0652\u0631\u064E\u0645\u064E\u0643\u064F\u0645\u0652 \u0639\u0650\u0646\u062F\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0623\u064E\u062A\u0652\u0642\u064E\u0627\u0643\u064F\u0645\u0652"
                  text="\u00d4 hommes ! Nous vous avons cr\u00e9\u00e9s d&apos;un m\u00e2le et d&apos;une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entreconnaissiez. Le plus noble d&apos;entre vous, aupr\u00e8s d&apos;Allah, est le plus pieux."
                  source="Coran, sourate Al-Hujurat (49:13)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondamental \u00e9tablit l&apos;\u00e9galit\u00e9 de l&apos;homme et de la femme dans leur cr\u00e9ation. Le seul crit\u00e8re de distinction devant Allah est la pi\u00e9t\u00e9 (<em>taqwa</em>), sans aucune consid\u00e9ration de sexe, de race ou d&apos;origine. Les savants soulignent que ce verset r\u00e9fute toute pr\u00e9tention de sup\u00e9riorit\u00e9 inn\u00e9e d&apos;un sexe sur l&apos;autre.
                </p>

                <HadithCard
                  arabic="\u0645\u064E\u0646\u0652 \u0639\u064E\u0645\u0650\u0644\u064E \u0635\u064E\u0627\u0644\u0650\u062D\u064B\u0627 \u0645\u0650\u0646 \u0630\u064E\u0643\u064E\u0631\u064D \u0623\u064E\u0648\u0652 \u0623\u064F\u0646\u062B\u064E\u0649\u0670 \u0648\u064E\u0647\u064F\u0648\u064E \u0645\u064F\u0624\u0652\u0645\u0650\u0646\u064C \u0641\u064E\u0644\u064E\u0646\u064F\u062D\u0652\u064A\u0650\u064A\u064E\u0646\u0651\u064E\u0647\u064F \u062D\u064E\u064A\u064E\u0627\u0629\u064B \u0637\u064E\u064A\u0651\u0650\u0628\u064E\u0629\u064B \u0648\u064E\u0644\u064E\u0646\u064E\u062C\u0652\u0632\u0650\u064A\u064E\u0646\u0651\u064E\u0647\u064F\u0645\u0652 \u0623\u064E\u062C\u0652\u0631\u064E\u0647\u064F\u0645 \u0628\u0650\u0623\u064E\u062D\u0652\u0633\u064E\u0646\u0650 \u0645\u064E\u0627 \u0643\u064E\u0627\u0646\u064F\u0648\u0627 \u064A\u064E\u0639\u0652\u0645\u064E\u0644\u064F\u0648\u0646\u064E"
                  text="Quiconque fait une bonne \u0153uvre, homme ou femme, tout en \u00e9tant croyant, Nous lui ferons vivre une bonne vie, et Nous les r\u00e9compenserons selon les meilleures de leurs actions."
                  source="Coran, sourate An-Nahl (16:97)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset affirme sans ambigu\u00eft\u00e9 que la r\u00e9compense divine est identique pour l&apos;homme et la femme. La mention explicite &laquo;&nbsp;homme ou femme&nbsp;&raquo; t\u00e9moigne de la volont\u00e9 divine de dissiper tout doute sur l&apos;\u00e9galit\u00e9 spirituelle. C&apos;est sur cette base coranique que le Proph\u00e8te \uFDFA a construit ses enseignements sur la dignit\u00e9 et les droits de la femme.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Dignit\u00e9 de la femme  */}
              {/* ============================== */}
              <section id="dignite-femme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La dignit\u00e9 de la femme dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Proph\u00e8te \uFDFA a consacr\u00e9 de nombreux enseignements \u00e0 la dignit\u00e9 de la femme, ordonnant de la respecter, de la prot\u00e9ger et de reconna\u00eetre sa valeur. Ces hadiths s&apos;inscrivent dans un contexte o\u00f9 la soci\u00e9t\u00e9 pr\u00e9islamique m\u00e9prisait largement la femme, allant jusqu&apos;\u00e0 enterrer vivantes les filles nouveau-n\u00e9es. L&apos;islam est venu r\u00e9volutionner cette vision.
                </p>

                <HadithBlock
                  number={1}
                  title="Les femmes sont les s\u0153urs jumelles des hommes"
                  narrator="Aisha"
                  arabic="\u0625\u0650\u0646\u0651\u064E\u0645\u064E\u0627 \u0627\u0644\u0646\u0651\u0650\u0633\u064E\u0627\u0621\u064F \u0634\u064E\u0642\u064E\u0627\u0626\u0650\u0642\u064F \u0627\u0644\u0631\u0651\u0650\u062C\u064E\u0627\u0644\u0650"
                  translation="Les femmes sont les s\u0153urs jumelles des hommes."
                  source="Sunan Abu Dawud, n\u00b0236 \u2014 Jami&apos; at-Tirmidhi, n\u00b0113"
                  grade="sahih"
                  explanation="Ce hadith \u00e9tablit un principe fondamental : l&apos;homme et la femme sont de m\u00eame nature, de m\u00eame essence. Le terme &laquo; shaq\u0101\u2019iq &raquo; (s\u0153urs jumelles) indique la parité et la compl\u00e9mentarit\u00e9. Les savants y voient la preuve que les r\u00e8gles religieuses s&apos;appliquent \u00e9galement aux hommes et aux femmes, sauf mention contraire sp\u00e9cifique. Ce hadith r\u00e9fute toute id\u00e9ologie qui consid\u00e9rerait la femme comme inf\u00e9rieure dans sa nature ou dans sa capacit\u00e9 spirituelle."
                />

                <HadithBlock
                  number={2}
                  title="Recommandation solennelle envers les femmes lors du p\u00e8lerinage d&apos;adieu"
                  narrator="Jabir ibn Abdillah"
                  arabic="\u0627\u062A\u0651\u064E\u0642\u064F\u0648\u0627 \u0627\u0644\u0644\u0651\u064E\u0647\u064E \u0641\u0650\u064A \u0627\u0644\u0646\u0651\u0650\u0633\u064E\u0627\u0621\u0650 \u0641\u064E\u0625\u0650\u0646\u0651\u064E\u0643\u064F\u0645\u0652 \u0623\u064E\u062E\u064E\u0630\u0652\u062A\u064F\u0645\u064F\u0648\u0647\u064F\u0646\u0651\u064E \u0628\u0650\u0623\u064E\u0645\u064E\u0627\u0646\u064E\u0629\u0650 \u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0648\u064E\u0627\u0633\u0652\u062A\u064E\u062D\u0652\u0644\u064E\u0644\u0652\u062A\u064F\u0645\u0652 \u0641\u064F\u0631\u064F\u0648\u062C\u064E\u0647\u064F\u0646\u0651\u064E \u0628\u0650\u0643\u064E\u0644\u0650\u0645\u064E\u0629\u0650 \u0627\u0644\u0644\u0651\u064E\u0647\u0650"
                  translation="Craignez Allah au sujet des femmes, car vous les avez prises sous la protection d&apos;Allah, et c&apos;est par la parole d&apos;Allah que vous avez rendu licite leur intimit\u00e9."
                  source="Sahih Muslim, n\u00b01218"
                  grade="sahih"
                  explanation="Ce hadith est extrait du c\u00e9l\u00e8bre sermon du p\u00e8lerinage d&apos;adieu, le dernier grand discours du Proph\u00e8te \uFDFA devant plus de cent mille compagnons. Le fait qu&apos;il ait choisi d&apos;y inclure la recommandation envers les femmes montre l&apos;importance capitale qu&apos;il y accordait. Le terme &laquo; am\u0101nat Allah &raquo; (protection d&apos;Allah) \u00e9l\u00e8ve le statut de la femme au rang de d\u00e9p\u00f4t sacr\u00e9 confi\u00e9 par Allah. Quiconque trahit ce d\u00e9p\u00f4t r\u00e9pondra devant Allah."
                />

                <HadithBlock
                  number={3}
                  title="Le paradis aux pieds des m\u00e8res"
                  narrator="Mu&apos;awiya ibn Jahima"
                  arabic="\u0627\u0644\u0652\u0632\u064E\u0645\u0652\u0647\u064E\u0627 \u0641\u064E\u0625\u0650\u0646\u0651\u064E \u0627\u0644\u0652\u062C\u064E\u0646\u0651\u064E\u0629\u064E \u0639\u0650\u0646\u0652\u062F\u064E \u0631\u0650\u062C\u0652\u0644\u064E\u064A\u0652\u0647\u064E\u0627"
                  translation="Reste aupr\u00e8s d&apos;elle (ta m\u00e8re), car le paradis se trouve \u00e0 ses pieds."
                  source="Sunan An-Nasa&apos;i, n\u00b03104"
                  grade="sahih"
                  explanation="Un homme vint demander au Proph\u00e8te \uFDFA la permission de participer au jihad. Le Proph\u00e8te lui demanda s&apos;il avait encore sa m\u00e8re, et quand l&apos;homme r\u00e9pondit oui, il lui dit de rester aupr\u00e8s d&apos;elle. Ce hadith \u00e9l\u00e8ve la pi\u00e9t\u00e9 filiale envers la m\u00e8re au-dessus m\u00eame du jihad, qui est pourtant l&apos;un des actes les plus m\u00e9ritoires en islam. L&apos;expression &laquo; le paradis \u00e0 ses pieds &raquo; signifie que la satisfaction de la m\u00e8re est un chemin direct vers le paradis."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un socle solide sur la dignit\u00e9 de la femme en islam. Le Proph\u00e8te \uFDFA a affirm\u00e9 leur \u00e9galit\u00e9 avec les hommes, a plac\u00e9 leur protection sous le sceau d&apos;Allah, et a \u00e9lev\u00e9 la m\u00e8re au plus haut rang. Pour d\u00e9couvrir d&apos;autres hadiths sur les droits des parents, consultez notre article sur les{" "}
                  <Link href="/hadith-parents-mere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur les parents et la m\u00e8re en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Droits de la femme   */}
              {/* ============================== */}
              <section id="droits-femme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Droits de la femme selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam a \u00e9tabli des droits concrets pour la femme bien avant les l\u00e9gislations modernes. Le Proph\u00e8te \uFDFA a d\u00e9fendu le droit de la femme \u00e0 l&apos;\u00e9ducation, au consentement dans le mariage, \u00e0 la propri\u00e9t\u00e9 et \u00e0 la protection contre toute forme d&apos;injustice. Ces droits ne sont pas de simples recommandations morales, mais des obligations juridiques inscrites dans la Shari&apos;a.
                </p>

                <HadithBlock
                  number={4}
                  title="La qu\u00eate du savoir est une obligation pour tous"
                  narrator="Anas ibn Malik"
                  arabic="\u0637\u064E\u0644\u064E\u0628\u064F \u0627\u0644\u0652\u0639\u0650\u0644\u0652\u0645\u0650 \u0641\u064E\u0631\u0650\u064A\u0636\u064E\u0629\u064C \u0639\u064E\u0644\u064E\u0649 \u0643\u064F\u0644\u0651\u0650 \u0645\u064F\u0633\u0652\u0644\u0650\u0645\u064D"
                  translation="La qu\u00eate du savoir est une obligation pour chaque musulman."
                  source="Sunan Ibn Majah, n\u00b0224"
                  grade="sahih"
                  explanation="Le terme &laquo; muslim &raquo; utilis\u00e9 ici est g\u00e9n\u00e9rique et englobe hommes et femmes selon les r\u00e8gles de la langue arabe et le consensus des savants. Ce hadith \u00e9tablit le droit — et m\u00eame l&apos;obligation — de la femme \u00e0 l&apos;\u00e9ducation religieuse. Historiquement, Aisha a transmis plus de 2 200 hadiths, et de nombreuses femmes ont \u00e9t\u00e9 des r\u00e9f\u00e9rences savantes dans l&apos;histoire islamique. L&apos;imam Adh-Dhahabi a consacr\u00e9 un ouvrage entier aux femmes savantes du hadith."
                />

                <HadithBlock
                  number={5}
                  title="Le consentement de la femme dans le mariage"
                  narrator="Abu Hurayra"
                  arabic="\u0644\u064E\u0627 \u062A\u064F\u0646\u0652\u0643\u064E\u062D\u064F \u0627\u0644\u0652\u0623\u064E\u064A\u0651\u0650\u0645\u064F \u062D\u064E\u062A\u0651\u064E\u0649 \u062A\u064F\u0633\u0652\u062A\u064E\u0623\u0652\u0645\u064E\u0631\u064E \u0648\u064E\u0644\u064E\u0627 \u062A\u064F\u0646\u0652\u0643\u064E\u062D\u064F \u0627\u0644\u0652\u0628\u0650\u0643\u0652\u0631\u064F \u062D\u064E\u062A\u0651\u064E\u0649 \u062A\u064F\u0633\u0652\u062A\u064E\u0623\u0652\u0630\u064E\u0646\u064E"
                  translation="La femme pr\u00e9c\u00e9demment mari\u00e9e ne peut \u00eatre mari\u00e9e qu&apos;avec son ordre, et la vierge ne peut \u00eatre mari\u00e9e qu&apos;avec sa permission."
                  source="Sahih Al-Bukhari, n\u00b05136 \u2014 Sahih Muslim, n\u00b01421"
                  grade="sahih"
                  explanation="Ce hadith \u00e9tablit le consentement de la femme comme une condition de validit\u00e9 du mariage. La distinction entre la femme pr\u00e9c\u00e9demment mari\u00e9e (qui doit exprimer son accord verbalement) et la vierge (dont le silence vaut acceptation) tient compte de la pudeur culturelle, mais dans les deux cas, le mariage forc\u00e9 est interdit. Le Proph\u00e8te \uFDFA a m\u00eame annul\u00e9 des mariages contract\u00e9s sans le consentement de la femme, comme dans le cas de Khansa bint Khidham (Bukhari 6945)."
                />

                <HadithBlock
                  number={6}
                  title="Celui qui \u00e9l\u00e8ve deux filles"
                  narrator="Anas ibn Malik"
                  arabic="\u0645\u064E\u0646\u0652 \u0639\u064E\u0627\u0644\u064E \u062C\u064E\u0627\u0631\u0650\u064A\u064E\u062A\u064E\u064A\u0652\u0646\u0650 \u062D\u064E\u062A\u0651\u064E\u0649 \u062A\u064E\u0628\u0652\u0644\u064F\u063A\u064E\u0627 \u062C\u064E\u0627\u0621\u064E \u064A\u064E\u0648\u0652\u0645\u064E \u0627\u0644\u0652\u0642\u0650\u064A\u064E\u0627\u0645\u064E\u0629\u0650 \u0623\u064E\u0646\u064E\u0627 \u0648\u064E\u0647\u064F\u0648\u064E \u0643\u064E\u0647\u064E\u0627\u062A\u064E\u064A\u0652\u0646\u0650"
                  translation="Celui qui \u00e9l\u00e8ve deux filles jusqu&apos;\u00e0 ce qu&apos;elles atteignent la maturit\u00e9 viendra le Jour de la R\u00e9surrection avec moi, comme ceci — et il joignit ses doigts."
                  source="Sahih Muslim, n\u00b02631"
                  grade="sahih"
                  explanation="Ce hadith r\u00e9volutionne la vision pr\u00e9islamique de la fille, consid\u00e9r\u00e9e comme un fardeau. Le Proph\u00e8te \uFDFA promet \u00e0 celui qui \u00e9l\u00e8ve deux filles avec bienveillance d&apos;\u00eatre son voisin au paradis. Le geste de joindre les doigts illustre cette proximit\u00e9. Les savants expliquent que ce hadith vise \u00e0 encourager l&apos;\u00e9ducation des filles et \u00e0 combattre la discrimination li\u00e9e au sexe de l&apos;enfant. Il s&apos;adresse aussi \u00e0 ceux qui pr\u00e9f\u00e8rent les gar\u00e7ons aux filles."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que l&apos;islam n&apos;a pas seulement proclam\u00e9 la dignit\u00e9 de la femme en th\u00e9orie, mais a \u00e9tabli des droits concrets et contraignants. Le droit \u00e0 l&apos;\u00e9ducation, au consentement et \u00e0 l&apos;\u00e9ducation bienveillante des filles sont des piliers de la jurisprudence islamique. Pour en savoir plus sur les enseignements du Proph\u00e8te \uFDFA, consultez notre article sur les{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du Proph\u00e8te Muhammad \uFDFA
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="\u00c9tudiez le statut de la femme en islam, le fiqh et la jurisprudence islamique avec des professeurs qualifi\u00e9s."
                href="/apprendre-science-religieuse-islam"
                linkText="D\u00e9couvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : La femme pieuse      */}
              {/* ============================== */}
              <section id="femme-pieuse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La femme pieuse dans la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Proph\u00e8te \uFDFA a valoris\u00e9 la pi\u00e9t\u00e9 f\u00e9minine et a d\u00e9crit les qualit\u00e9s de la femme vertueuse. Loin de r\u00e9duire la femme \u00e0 un r\u00f4le passif, ces hadiths montrent que la pi\u00e9t\u00e9 est un cheminement actif, une qu\u00eate spirituelle \u00e0 part enti\u00e8re qui conf\u00e8re \u00e0 la femme un rang \u00e9lev\u00e9 aupr\u00e8s d&apos;Allah.
                </p>

                <HadithBlock
                  number={7}
                  title="Les meilleures femmes de Quraysh"
                  narrator="Abu Hurayra"
                  arabic="\u062E\u064E\u064A\u0652\u0631\u064F \u0646\u0650\u0633\u064E\u0627\u0621\u0650 \u0642\u064F\u0631\u064E\u064A\u0652\u0634\u064D \u0623\u064E\u062D\u0652\u0646\u064E\u0627\u0647\u064F \u0639\u064E\u0644\u064E\u0649 \u0648\u064E\u0644\u064E\u062F\u064D \u0641\u0650\u064A \u0635\u0650\u063A\u064E\u0631\u0650\u0647\u0650 \u0648\u064E\u0623\u064E\u0631\u0652\u0639\u064E\u0627\u0647\u064F \u0639\u064E\u0644\u064E\u0649 \u0632\u064E\u0648\u0652\u062C\u064D \u0641\u0650\u064A \u0630\u064E\u0627\u062A\u0650 \u064A\u064E\u062F\u0650\u0647\u0650"
                  translation="Les meilleures femmes de Quraysh sont celles qui sont les plus tendres envers leur enfant en bas \u00e2ge et les plus soucieuses des biens de leur \u00e9poux."
                  source="Sahih Al-Bukhari, n\u00b05365 \u2014 Sahih Muslim, n\u00b02527"
                  grade="sahih"
                  explanation="Ce hadith met en valeur deux qualit\u00e9s essentielles : la tendresse maternelle et la loyaut\u00e9 conjugale. Il ne r\u00e9duit pas la femme \u00e0 ces r\u00f4les, mais souligne que ces qualit\u00e9s sont des marques de noblesse et de vertu. Les savants pr\u00e9cisent que la &laquo; pr\u00e9servation des biens de l&apos;\u00e9poux &raquo; d\u00e9signe la fid\u00e9lit\u00e9, l&apos;honn\u00eatet\u00e9 et la gestion responsable, autant de qualit\u00e9s qui t\u00e9moignent de la confiance accord\u00e9e \u00e0 la femme dans le foyer."
                />

                <HadithBlock
                  number={8}
                  title="La femme qui prie, je\u00fbne, pr\u00e9serve sa chastet\u00e9 et ob\u00e9it \u00e0 son \u00e9poux"
                  narrator="Abu Hurayra"
                  arabic="\u0625\u0650\u0630\u064E\u0627 \u0635\u064E\u0644\u0651\u064E\u062A\u0650 \u0627\u0644\u0652\u0645\u064E\u0631\u0652\u0623\u064E\u0629\u064F \u062E\u064E\u0645\u0652\u0633\u064E\u0647\u064E\u0627 \u0648\u064E\u0635\u064E\u0627\u0645\u064E\u062A\u0652 \u0634\u064E\u0647\u0652\u0631\u064E\u0647\u064E\u0627 \u0648\u064E\u062D\u064E\u0641\u0650\u0638\u064E\u062A\u0652 \u0641\u064E\u0631\u0652\u062C\u064E\u0647\u064E\u0627 \u0648\u064E\u0623\u064E\u0637\u064E\u0627\u0639\u064E\u062A\u0652 \u0632\u064E\u0648\u0652\u062C\u064E\u0647\u064E\u0627 \u0642\u0650\u064A\u0644\u064E \u0644\u064E\u0647\u064E\u0627 \u0627\u062F\u0652\u062E\u064F\u0644\u0650\u064A \u0627\u0644\u0652\u062C\u064E\u0646\u0651\u064E\u0629\u064E \u0645\u0650\u0646\u0652 \u0623\u064E\u064A\u0651\u0650 \u0623\u064E\u0628\u0652\u0648\u064E\u0627\u0628\u0650 \u0627\u0644\u0652\u062C\u064E\u0646\u0651\u064E\u0629\u0650 \u0634\u0650\u0626\u0652\u062A\u0650"
                  translation="Si la femme accomplit ses cinq pri\u00e8res, je\u00fbne son mois (de Ramadan), pr\u00e9serve sa chastet\u00e9 et ob\u00e9it \u00e0 son \u00e9poux, il lui sera dit : entre au paradis par la porte que tu veux."
                  source="Musnad Ahmad, n\u00b01661 \u2014 Sahih Ibn Hibban, n\u00b04163"
                  grade="sahih"
                  explanation="Ce hadith r\u00e9sume les quatre piliers de la pi\u00e9t\u00e9 f\u00e9minine selon la Sunna : la pri\u00e8re, le je\u00fbne, la chastet\u00e9 et la bonne relation conjugale. La r\u00e9compense promise — entrer au paradis par la porte de son choix — est exceptionnelle et t\u00e9moigne du rang \u00e9lev\u00e9 de la femme pieuse aupr\u00e8s d&apos;Allah. Les savants pr\u00e9cisent que l&apos;&laquo; ob\u00e9issance \u00e0 l&apos;\u00e9poux &raquo; s&apos;entend dans le cadre du licite (<em>ma&apos;ruf</em>), et ne saurait justifier une ob\u00e9issance dans la d\u00e9sob\u00e9issance \u00e0 Allah."
                />

                <HadithBlock
                  number={9}
                  title="Qui sont les meilleures parmi les femmes ?"
                  narrator="Abdullah ibn Amr"
                  arabic="\u0627\u0644\u062F\u0651\u064F\u0646\u0652\u064A\u064E\u0627 \u0645\u064E\u062A\u064E\u0627\u0639\u064C \u0648\u064E\u062E\u064E\u064A\u0652\u0631\u064F \u0645\u064E\u062A\u064E\u0627\u0639\u0650 \u0627\u0644\u062F\u0651\u064F\u0646\u0652\u064A\u064E\u0627 \u0627\u0644\u0652\u0645\u064E\u0631\u0652\u0623\u064E\u0629\u064F \u0627\u0644\u0635\u0651\u064E\u0627\u0644\u0650\u062D\u064E\u0629\u064F"
                  translation="Ce bas monde est une jouissance, et la meilleure jouissance de ce bas monde est la femme pieuse."
                  source="Sahih Muslim, n\u00b01467"
                  grade="sahih"
                  explanation="Ce hadith place la femme pieuse au sommet de tous les bienfaits de ce monde. Le terme &laquo; mata&apos; &raquo; d\u00e9signe tout ce qui procure un bienfait et un r\u00e9confort. Le Proph\u00e8te \uFDFA affirme que parmi toutes les choses de cette vie, rien n&apos;\u00e9gale la compagnie d&apos;une femme vertueuse. Les savants expliquent que cela s&apos;applique tant \u00e0 la dimension spirituelle (soutien dans la foi) que pratique (stabilit\u00e9 du foyer et \u00e9ducation des enfants)."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que la pi\u00e9t\u00e9 f\u00e9minine est valoris\u00e9e au plus haut point dans l&apos;islam. La femme pieuse n&apos;est pas seulement respect\u00e9e : elle est pr\u00e9sent\u00e9e comme le plus grand bienfait de ce monde, et le paradis lui est promis par de multiples portes. Pour d\u00e9couvrir d&apos;autres enseignements proph\u00e9tiques, consultez notre page sur le{" "}
                  <Link href="/hadith-du-jour" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadith du jour
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la femme en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont largement comment\u00e9 les hadiths sur la femme. Leurs explications permettent de mieux comprendre la port\u00e9e juridique, spirituelle et sociale de ces enseignements proph\u00e9tiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo; les femmes sont les s\u0153urs jumelles des hommes &raquo; \u00e9tablit que les r\u00e8gles g\u00e9n\u00e9rales de la Shari&apos;a s&apos;appliquent aux femmes comme aux hommes. La femme est soumise aux m\u00eames obligations et jouit des m\u00eames r\u00e9compenses, sauf lorsqu&apos;un texte sp\u00e9cifique \u00e9tablit une distinction.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;injonction &laquo; craignez Allah au sujet des femmes &raquo; prononc\u00e9e lors du p\u00e8lerinage d&apos;adieu a la force d&apos;un testament. Le Proph\u00e8te \uFDFA a choisi ses derniers moments publics pour rappeler les droits des femmes, ce qui t\u00e9moigne de l&apos;importance qu&apos;il accordait \u00e0 cette question.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La qu\u00eate du savoir est une obligation pour la femme comme pour l&apos;homme. Parmi les preuves, le fait que le Proph\u00e8te \uFDFA ait consacr\u00e9 un jour sp\u00e9cifique \u00e0 l&apos;enseignement des femmes, et qu&apos;il n&apos;ait jamais refus\u00e9 de r\u00e9pondre \u00e0 leurs questions, m\u00eame sur les sujets les plus intimes.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que la tradition savante islamique a toujours reconnu les droits et la dignit\u00e9 de la femme. Les grands juristes se sont appuy\u00e9s sur les hadiths pour d\u00e9fendre l&apos;\u00e9galit\u00e9 spirituelle, le droit \u00e0 l&apos;\u00e9ducation et la protection de la femme contre toute forme d&apos;injustice.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le\u00e7ons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et le\u00e7ons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths pr\u00e9sent\u00e9s dans cet article permet de d\u00e9gager des le\u00e7ons concr\u00e8tes sur le statut et les droits de la femme en islam :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Reconna\u00eetre l&apos;\u00e9galit\u00e9 spirituelle de la femme
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;homme et la femme sont \u00e9gaux devant Allah. La pi\u00e9t\u00e9 est le seul crit\u00e8re de distinction. Les femmes sont les s\u0153urs jumelles des hommes en mati\u00e8re de droits et d&apos;obligations religieuses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Traiter la femme avec dignit\u00e9 et respect
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te \uFDFA a fait de la bienveillance envers les femmes un commandement divin. Toute forme de m\u00e9pris ou d&apos;oppression est contraire \u00e0 l&apos;enseignement proph\u00e9tique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Garantir le droit de la femme \u00e0 l&apos;\u00e9ducation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La qu\u00eate du savoir est une obligation pour tous. Emp\u00eacher une femme d&apos;\u00e9tudier va \u00e0 l&apos;encontre de la Sunna. L&apos;histoire islamique regorge de femmes savantes et enseignantes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter le consentement de la femme
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le mariage sans consentement est invalide en islam. La femme a le droit absolu de choisir ou de refuser un pr\u00e9tendant. Ce droit est prot\u00e9g\u00e9 par des hadiths authentiques et le consensus des savants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Honorer les m\u00e8res et \u00e9lever les filles
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le paradis est aux pieds des m\u00e8res, et celui qui \u00e9l\u00e8ve des filles avec bienveillance sera le voisin du Proph\u00e8te \uFDFA au paradis. Ces enseignements r\u00e9volutionnent la vision pr\u00e9islamique de la femme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Valoriser la pi\u00e9t\u00e9 f\u00e9minine
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La femme pieuse est d\u00e9crite comme le meilleur bienfait de ce monde. Sa pi\u00e9t\u00e9, sa pri\u00e8re, son je\u00fbne et son bon comportement lui ouvrent les portes du paradis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <SocialBanner />

              <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la femme en islam dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Les hadiths du Proph\u00e8te Muhammad \uFDFA : fondements et collections"
                  description="D\u00e9couvrez l&apos;histoire des grandes collections de hadiths et les crit\u00e8res d&apos;authenticit\u00e9."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le mariage en islam : guide complet"
                  description="Les enseignements proph\u00e9tiques sur le choix du conjoint, les droits des \u00e9poux et la bienveillance conjugale."
                  href="/hadith-mariage-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur les parents et la m\u00e8re en islam"
                  description="Les enseignements du Proph\u00e8te \uFDFA sur le respect des parents et le rang \u00e9lev\u00e9 de la m\u00e8re."
                  href="/hadith-parents-mere-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
