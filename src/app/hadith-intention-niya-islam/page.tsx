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
    "Hadiths sur l'intention (niya) en islam : sinc\u00e9rit\u00e9, ikhlas et r\u00e9compense divine",
  description:
    "D\u00e9couvrez les hadiths authentiques sur l'intention (niya) en islam : innama al-a'mal bi-n-niyyat, sinc\u00e9rit\u00e9, ikhlas, multiplication des r\u00e9compenses. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur l'intention (niya) en islam : sinc\u00e9rit\u00e9, ikhlas et r\u00e9compense divine",
    description:
      "Les hadiths authentiques sur l'intention en islam : les actes sont jug\u00e9s par les intentions, sinc\u00e9rit\u00e9, ostentation et multiplication des r\u00e9compenses selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-intention-niya-islam",
    images: [
      {
        url: "/images/calligraphie-allah-islam-coeur-bois.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-intention-niya-islam",
  },
};

const tocItems = [
  { id: "fondement-niya", label: "Le fondement : les actes selon les intentions" },
  { id: "sincerite-ikhlas", label: "La sinc\u00e9rit\u00e9 (ikhlas) dans les actes" },
  { id: "ostentation-riya", label: "L'ostentation (riya) : le pi\u00e8ge de l'intention" },
  { id: "intention-recompense", label: "L'intention multiplie les r\u00e9compenses" },
  { id: "intention-quotidien", label: "L'intention dans la vie quotidienne" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "Quel est le hadith le plus c\u00e9l\u00e8bre sur l\u2019intention en islam ?",
    answer:
      "Le hadith le plus c\u00e9l\u00e8bre est celui rapport\u00e9 par \u2018Umar ibn al-Khattab : \u00ab Les actes ne valent que par les intentions, et chaque homme n\u2019aura que ce qu\u2019il a eu l\u2019intention de faire \u00bb (Bukhari 1, Muslim 1907). Ce hadith est consid\u00e9r\u00e9 par les savants comme repr\u00e9sentant un tiers de la science islamique, tant son importance est fondamentale.",
  },
  {
    question:
      "Que signifie la niya en islam ?",
    answer:
      "La niya (intention) en islam d\u00e9signe la r\u00e9solution du c\u0153ur \u00e0 accomplir un acte pour plaire \u00e0 Allah. Elle ne se prononce pas \u00e0 voix haute (sauf cas sp\u00e9cifiques comme le hajj). La niya diff\u00e9rencie un acte d\u2019adoration d\u2019un acte ordinaire : manger peut \u00eatre une simple habitude ou une adoration si l\u2019intention est de se renforcer pour ob\u00e9ir \u00e0 Allah.",
  },
  {
    question:
      "Faut-il prononcer l\u2019intention \u00e0 voix haute avant la pri\u00e8re ?",
    answer:
      "Non, la majorit\u00e9 des savants s\u2019accordent \u00e0 dire que l\u2019intention est un acte du c\u0153ur et non de la langue. Le Proph\u00e8te \uFDFA n\u2019a jamais prononc\u00e9 l\u2019intention \u00e0 voix haute avant la pri\u00e8re. L\u2019imam An-Nawawi et Ibn Taymiyya affirment que prononcer la niya \u00e0 voix haute est une innovation (bid\u2019a) qui n\u2019a aucun fondement dans la Sunna.",
  },
  {
    question:
      "Qu\u2019est-ce que le riya (ostentation) et comment l\u2019\u00e9viter ?",
    answer:
      "Le riya est le fait d\u2019accomplir un acte d\u2019adoration pour \u00eatre vu ou lou\u00e9 par les gens plut\u00f4t que pour Allah. Le Proph\u00e8te \uFDFA l\u2019a qualifi\u00e9 de \u00ab petit polyth\u00e9isme \u00bb (shirk asghar). Pour l\u2019\u00e9viter, il faut purifier r\u00e9guli\u00e8rement son intention, multiplier les actes secrets et invoquer Allah pour \u00eatre pr\u00e9serv\u00e9 de l\u2019ostentation.",
  },
  {
    question:
      "L\u2019intention peut-elle transformer un acte ordinaire en adoration ?",
    answer:
      "Oui, c\u2019est l\u2019un des grands enseignements de la Sunna. Le Proph\u00e8te \uFDFA a enseign\u00e9 que m\u00eame la bouch\u00e9e de nourriture mise dans la bouche de son \u00e9pouse est une sadaqa si l\u2019intention est sincère. Dormir, manger, travailler : tout peut devenir adoration si l\u2019intention est de plaire \u00e0 Allah et de se renforcer pour Son ob\u00e9issance.",
  },
  {
    question:
      "Peut-on renouveler son intention en cours d\u2019action ?",
    answer:
      "Oui, les savants encouragent le renouvellement de l\u2019intention. Si une personne commence un acte avec une intention pure puis est tent\u00e9e par l\u2019ostentation, elle doit combattre cette pens\u00e9e et renouveler sa niya. L\u2019imam Ibn al-Qayyim explique que le croyant doit \u00eatre en vigilance constante sur l\u2019\u00e9tat de son c\u0153ur.",
  },
  {
    question:
      "L\u2019intention du croyant est-elle meilleure que son acte ?",
    answer:
      "Le Proph\u00e8te \uFDFA a dit : \u00ab L\u2019intention du croyant est meilleure que son acte \u00bb (Tabarani). Les savants expliquent que l\u2019intention peut englober des projets que la personne ne peut r\u00e9aliser, et Allah la r\u00e9compense pour cette intention sincère. Ainsi, celui qui a l\u2019intention sinc\u00e8re de faire le bien mais en est emp\u00each\u00e9 re\u00e7oit la r\u00e9compense de l\u2019acte.",
  },
  {
    question:
      "Quelle est la diff\u00e9rence entre niya et ikhlas ?",
    answer:
      "La niya est la r\u00e9solution d\u2019accomplir un acte pr\u00e9cis, tandis que l\u2019ikhlas (sinc\u00e9rit\u00e9) est la purification de cette intention pour qu\u2019elle soit exclusivement d\u00e9di\u00e9e \u00e0 Allah. On peut avoir une intention (niya) de prier tout en \u00e9tant touch\u00e9 par l\u2019ostentation. L\u2019ikhlas est donc le degr\u00e9 sup\u00e9rieur : une intention pure, d\u00e9pouill\u00e9e de tout associ\u00e9.",
  },
];

export default function HadithIntentionNiyaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-intention-niya-islam/#article",
        headline:
          "Hadiths sur l'intention (niya) en islam : sinc\u00e9rit\u00e9, ikhlas et r\u00e9compense divine",
        description:
          "D\u00e9couvrez les hadiths authentiques sur l'intention (niya) en islam : sinc\u00e9rit\u00e9, ikhlas, multiplication des r\u00e9compenses.",
        image: "/images/calligraphie-allah-islam-coeur-bois.jpg",
        datePublished: "2026-04-22",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-intention-niya-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-intention-niya-islam/#breadcrumb",
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
            name: "Hadiths sur l'intention (niya)",
            item: "https://www.islamreligion.fr/hadith-intention-niya-islam",
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
          title="Hadiths sur l'intention (niya) en islam"
          subtitle="Les enseignements proph\u00e9tiques sur la sinc\u00e9rit\u00e9, l'ikhlas, l'ostentation et la puissance de l'intention dans chaque acte du croyant selon la Sunna authentique."
          imageSrc="/images/calligraphie-allah-islam-coeur-bois.jpg"
          imageAlt="Hadiths sur l'intention niya en islam, sinc\u00e9rit\u00e9 et ikhlas"
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
                  Hadiths sur l&apos;intention (niya)
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
                    Le hadith &laquo;&nbsp;les actes ne valent que par les intentions&nbsp;&raquo; est consid\u00e9r\u00e9 par les savants comme un tiers de la science islamique.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La sinc\u00e9rit\u00e9 (ikhlas) distingue l&apos;adoration v\u00e9ritable de l&apos;ostentation (riya), qualifi\u00e9e de &laquo;&nbsp;petit polyth\u00e9isme&nbsp;&raquo; par le Proph\u00e8te \uFDFA.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;intention sincère peut transformer tout acte ordinaire (manger, dormir, travailler) en acte d&apos;adoration r\u00e9compens\u00e9 par Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Allah r\u00e9compense le croyant pour sa bonne intention m\u00eame s&apos;il ne peut accomplir l&apos;acte, tandis que la mauvaise intention non suivie d&apos;acte n&apos;est pas inscrite.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Fondement de la niya */}
              {/* ============================== */}
              <section id="fondement-niya" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le fondement : les actes ne valent que par les intentions
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;intention (niya) est le pilier invisible de toute action en islam. Sans elle, l&apos;acte le plus pieux perd sa valeur ; avec elle, le geste le plus anodin devient une adoration. Le Proph\u00e8te \uFDFA a pos\u00e9 ce principe fondateur dans un hadith que les savants consid\u00e8rent comme l&apos;un des plus importants de toute la Sunna. L&apos;imam Al-Bukhari a choisi de l&apos;ouvrir son recueil avec ce hadith, soulignant que toute qu\u00eate de science doit commencer par la purification de l&apos;intention.
                </p>

                <HadithBlock
                  number={1}
                  title="Les actes ne valent que par les intentions (innama al-a&apos;mal bi-n-niyyat)"
                  narrator="&apos;Umar ibn al-Khattab"
                  arabic="\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627 \u0627\u0644\u0623\u064e\u0639\u0652\u0645\u064e\u0627\u0644\u064f \u0628\u0650\u0627\u0644\u0646\u0651\u0650\u064a\u0651\u064e\u0627\u062a\u0650 \u0648\u064e\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627 \u0644\u0650\u0643\u064f\u0644\u0651\u0650 \u0627\u0645\u0652\u0631\u0650\u0626\u064d \u0645\u064e\u0627 \u0646\u064e\u0648\u064e\u0649 \u0641\u064e\u0645\u064e\u0646\u0652 \u0643\u064e\u0627\u0646\u064e\u062a\u0652 \u0647\u0650\u062c\u0652\u0631\u064e\u062a\u064f\u0647\u064f \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0648\u064e\u0631\u064e\u0633\u064f\u0648\u0644\u0650\u0647\u0650 \u0641\u064e\u0647\u0650\u062c\u0652\u0631\u064e\u062a\u064f\u0647\u064f \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0648\u064e\u0631\u064e\u0633\u064f\u0648\u0644\u0650\u0647\u0650 \u0648\u064e\u0645\u064e\u0646\u0652 \u0643\u064e\u0627\u0646\u064e\u062a\u0652 \u0647\u0650\u062c\u0652\u0631\u064e\u062a\u064f\u0647\u064f \u0644\u0650\u062f\u064f\u0646\u0652\u064a\u064e\u0627 \u064a\u064f\u0635\u0650\u064a\u0628\u064f\u0647\u064e\u0627 \u0623\u064e\u0648\u0652 \u0627\u0645\u0652\u0631\u064e\u0623\u064e\u0629\u064d \u064a\u064e\u0646\u0652\u0643\u0650\u062d\u064f\u0647\u064e\u0627 \u0641\u064e\u0647\u0650\u062c\u0652\u0631\u064e\u062a\u064f\u0647\u064f \u0625\u0650\u0644\u064e\u0649 \u0645\u064e\u0627 \u0647\u064e\u0627\u062c\u064e\u0631\u064e \u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650"
                  translation="Les actes ne valent que par les intentions, et chaque homme n&apos;aura que ce qu&apos;il a eu l&apos;intention de faire. Celui dont l&apos;\u00e9migration a \u00e9t\u00e9 pour Allah et Son Messager, son \u00e9migration sera pour Allah et Son Messager. Et celui dont l&apos;\u00e9migration a \u00e9t\u00e9 pour un bien de ce monde ou pour une femme qu&apos;il voulait \u00e9pouser, son \u00e9migration sera vers ce pour quoi il a \u00e9migr\u00e9."
                  source="Sahih Al-Bukhari, n\u00b01 \u2014 Sahih Muslim, n\u00b01907"
                  grade="sahih"
                  explanation="Ce hadith est le premier du Sahih Al-Bukhari et l&apos;un des hadiths les plus comment\u00e9s de toute la tradition islamique. L&apos;imam Ahmad ibn Hanbal a dit que l&apos;islam repose sur trois hadiths, et celui-ci en est le premier. Il \u00e9tablit que la valeur d&apos;un acte aupr\u00e8s d&apos;Allah d\u00e9pend enti\u00e8rement de l&apos;intention qui le motive. Deux personnes peuvent accomplir exactement le m\u00eame acte ext\u00e9rieur \u2014 l&apos;une sera r\u00e9compens\u00e9e et l&apos;autre non, selon leur niya. L&apos;exemple de l&apos;\u00e9migration (hijra) illustre concr\u00e8tement ce principe."
                />

                <HadithBlock
                  number={2}
                  title="Allah ne regarde ni vos corps ni vos apparences"
                  narrator="Abu Hurayra"
                  arabic="\u0625\u0650\u0646\u0651\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u0644\u064e\u0627 \u064a\u064e\u0646\u0652\u0638\u064f\u0631\u064f \u0625\u0650\u0644\u064e\u0649 \u0635\u064f\u0648\u064e\u0631\u0650\u0643\u064f\u0645\u0652 \u0648\u064e\u0623\u064e\u0645\u0652\u0648\u064e\u0627\u0644\u0650\u0643\u064f\u0645\u0652 \u0648\u064e\u0644\u064e\u0643\u0650\u0646\u0652 \u064a\u064e\u0646\u0652\u0638\u064f\u0631\u064f \u0625\u0650\u0644\u064e\u0649 \u0642\u064f\u0644\u064f\u0648\u0628\u0650\u0643\u064f\u0645\u0652 \u0648\u064e\u0623\u064e\u0639\u0652\u0645\u064e\u0627\u0644\u0650\u0643\u064f\u0645\u0652"
                  translation="Certes, Allah ne regarde ni vos apparences ni vos biens, mais Il regarde vos c\u0153urs et vos actes."
                  source="Sahih Muslim, n\u00b02564"
                  grade="sahih"
                  explanation="Ce hadith compl\u00e8te le pr\u00e9c\u00e9dent en pr\u00e9cisant o\u00f9 se situe le regard divin. Allah ne juge pas selon les crit\u00e8res humains \u2014 apparence physique, richesse, statut social \u2014 mais selon l&apos;\u00e9tat du c\u0153ur et la qualit\u00e9 des actes. Le c\u0153ur est le si\u00e8ge de l&apos;intention : c&apos;est l\u00e0 que se d\u00e9cide la sinc\u00e9rit\u00e9 ou l&apos;hypocrisie. Ce hadith lib\u00e8re le croyant de la course aux apparences et le ram\u00e8ne \u00e0 l&apos;essentiel : la puret\u00e9 de la niya."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux hadiths constituent le socle de la doctrine islamique sur l&apos;intention. Ils enseignent que l&apos;islam n&apos;est pas une religion de formes ext\u00e9rieures, mais une voie qui exige la coh\u00e9rence entre l&apos;apparent et le cach\u00e9, entre le geste et le c\u0153ur.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Sinc\u00e9rit\u00e9 (ikhlas) */}
              {/* ============================== */}
              <section id="sincerite-ikhlas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sinc\u00e9rit\u00e9 (ikhlas) dans les actes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ikhlas est le degr\u00e9 le plus \u00e9lev\u00e9 de l&apos;intention : c&apos;est la purification totale du c\u0153ur pour qu&apos;il ne vise que le Visage d&apos;Allah. Le Coran ordonne cette sinc\u00e9rit\u00e9 absolue, et les hadiths en pr\u00e9cisent les manifestations concr\u00e8tes. L&apos;ikhlas transforme l&apos;acte en lumi\u00e8re ; son absence le transforme en cendres.
                </p>

                <HadithCard
                  arabic="\u0648\u064e\u0645\u064e\u0627 \u0623\u064f\u0645\u0650\u0631\u064f\u0648\u0627 \u0625\u0650\u0644\u0651\u064e\u0627 \u0644\u0650\u064a\u064e\u0639\u0652\u0628\u064f\u062f\u064f\u0648\u0627 \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u0645\u064f\u062e\u0652\u0644\u0650\u0635\u0650\u064a\u0646\u064e \u0644\u064e\u0647\u064f \u0627\u0644\u062f\u0651\u0650\u064a\u0646\u064e \u062d\u064f\u0646\u064e\u0641\u064e\u0627\u0621\u064e"
                  text="Il ne leur a \u00e9t\u00e9 command\u00e9 que d&apos;adorer Allah, Lui vouant un culte exclusif (mukhlisina), en \u00e9tant hanifs."
                  source="Coran, sourate Al-Bayyina (98:5)"
                />

                <HadithBlock
                  number={3}
                  title="Allah n&apos;accepte que ce qui est fait avec sinc\u00e9rit\u00e9"
                  narrator="Abu Umama al-Bahili"
                  arabic="\u0625\u0650\u0646\u0651\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u0644\u064e\u0627 \u064a\u064e\u0642\u0652\u0628\u064e\u0644\u064f \u0645\u0650\u0646\u064e \u0627\u0644\u0652\u0639\u064e\u0645\u064e\u0644\u0650 \u0625\u0650\u0644\u0651\u064e\u0627 \u0645\u064e\u0627 \u0643\u064e\u0627\u0646\u064e \u0644\u064e\u0647\u064f \u062e\u064e\u0627\u0644\u0650\u0635\u064b\u0627 \u0648\u064e\u0627\u0628\u0652\u062a\u064f\u063a\u0650\u064a\u064e \u0628\u0650\u0647\u0650 \u0648\u064e\u062c\u0652\u0647\u064f\u0647\u064f"
                  translation="Certes, Allah n&apos;accepte des actes que ceux qui sont accomplis avec sinc\u00e9rit\u00e9 pour Lui et par lesquels on recherche Son Visage."
                  source="Sunan An-Nasa&apos;i, n\u00b03140"
                  grade="sahih"
                  explanation="Ce hadith \u00e9tablit la condition sine qua non de l&apos;acceptation divine : l&apos;ikhlas. Un acte peut \u00eatre conforme ext\u00e9rieurement \u00e0 la Sunna, mais s&apos;il est accompli pour la r\u00e9putation, la louange des gens ou tout autre motif que la satisfaction d&apos;Allah, il est rejet\u00e9. Les savants expliquent que deux conditions doivent \u00eatre r\u00e9unies pour qu&apos;un acte soit accept\u00e9 : la sinc\u00e9rit\u00e9 (ikhlas) et la conformit\u00e9 \u00e0 la Sunna (mutaba&apos;a)."
                />

                <HadithBlock
                  number={4}
                  title="Les trois premiers jet\u00e9s en Enfer"
                  narrator="Abu Hurayra"
                  arabic="\u0625\u0650\u0646\u0651\u064e \u0623\u064e\u0648\u0651\u064e\u0644\u064e \u0627\u0644\u0646\u0651\u064e\u0627\u0633\u0650 \u064a\u064f\u0642\u0652\u0636\u064e\u0649 \u064a\u064e\u0648\u0652\u0645\u064e \u0627\u0644\u0652\u0642\u0650\u064a\u064e\u0627\u0645\u064e\u0629\u0650 \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0631\u064e\u062c\u064f\u0644\u064c \u0627\u0633\u0652\u062a\u064f\u0634\u0652\u0647\u0650\u062f\u064e ... \u0641\u064e\u0642\u064e\u0627\u0644\u064e \u0643\u064e\u0630\u064e\u0628\u0652\u062a\u064e \u0648\u064e\u0644\u064e\u0643\u0650\u0646\u0651\u064e\u0643\u064e \u0642\u064e\u0627\u062a\u064e\u0644\u0652\u062a\u064e \u0644\u0650\u064a\u064f\u0642\u064e\u0627\u0644\u064e \u062c\u064e\u0631\u0650\u064a\u0621\u064c"
                  translation="Les premiers hommes sur lesquels le jugement sera prononc\u00e9 au Jour de la R\u00e9surrection seront : un homme mort en martyr... Allah lui dira : tu as menti, tu as combattu pour qu&apos;on dise que tu es courageux. Puis un homme qui a \u00e9tudi\u00e9 la science et enseign\u00e9 le Coran... Allah lui dira : tu as menti, tu as appris pour qu&apos;on dise que tu es savant. Puis un homme \u00e0 qui Allah a accord\u00e9 l&apos;abondance... Allah lui dira : tu as menti, tu as d\u00e9pens\u00e9 pour qu&apos;on dise que tu es g\u00e9n\u00e9reux."
                  source="Sahih Muslim, n\u00b01905"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus redoutables de la Sunna. Trois actes parmi les plus nobles \u2014 le martyre, l&apos;\u00e9tude de la science et la charit\u00e9 \u2014 sont rejet\u00e9s et m\u00e8nent en Enfer parce que l&apos;intention \u00e9tait corrompue. Le combattant voulait \u00eatre appel\u00e9 &laquo;&nbsp;courageux&nbsp;&raquo;, le savant &laquo;&nbsp;savant&nbsp;&raquo;, le g\u00e9n\u00e9reux &laquo;&nbsp;g\u00e9n\u00e9reux&nbsp;&raquo;. Chacun a re\u00e7u sa r\u00e9compense dans ce monde (la r\u00e9putation) et n&apos;a plus rien aupr\u00e8s d&apos;Allah. Ce hadith illustre le danger mortel de l&apos;ostentation."
                />

                <HadithBlock
                  number={5}
                  title="Celui qui apprend la science pour autre qu&apos;Allah"
                  narrator="Abu Hurayra"
                  arabic="\u0645\u064e\u0646\u0652 \u062a\u064e\u0639\u064e\u0644\u0651\u064e\u0645\u064e \u0639\u0650\u0644\u0652\u0645\u064b\u0627 \u0645\u0650\u0645\u0651\u064e\u0627 \u064a\u064f\u0628\u0652\u062a\u064e\u063a\u064e\u0649 \u0628\u0650\u0647\u0650 \u0648\u064e\u062c\u0652\u0647\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0644\u064e\u0627 \u064a\u064e\u062a\u064e\u0639\u064e\u0644\u0651\u064e\u0645\u064f\u0647\u064f \u0625\u0650\u0644\u0651\u064e\u0627 \u0644\u0650\u064a\u064f\u0635\u0650\u064a\u0628\u064e \u0628\u0650\u0647\u0650 \u0639\u064e\u0631\u064e\u0636\u064b\u0627 \u0645\u0650\u0646\u064e \u0627\u0644\u062f\u0651\u064f\u0646\u0652\u064a\u064e\u0627 \u0644\u064e\u0645\u0652 \u064a\u064e\u062c\u0650\u062f\u0652 \u0639\u064e\u0631\u0652\u0641\u064e \u0627\u0644\u0652\u062c\u064e\u0646\u0651\u064e\u0629\u0650 \u064a\u064e\u0648\u0652\u0645\u064e \u0627\u0644\u0652\u0642\u0650\u064a\u064e\u0627\u0645\u064e\u0629\u0650"
                  translation="Celui qui apprend une science par laquelle on recherche le Visage d&apos;Allah, mais ne l&apos;apprend que pour obtenir un bien de ce monde, ne sentira pas le parfum du Paradis au Jour de la R\u00e9surrection."
                  source="Sunan Abu Dawud, n\u00b03664"
                  grade="sahih"
                  explanation="Ce hadith s&apos;adresse sp\u00e9cifiquement \u00e0 l&apos;\u00e9tudiant en sciences religieuses. La qu\u00eate du savoir islamique est l&apos;une des plus nobles formes d&apos;adoration, mais elle exige une intention pure. Celui qui \u00e9tudie la religion pour obtenir un poste, un salaire ou la c\u00e9l\u00e9brit\u00e9 corrompt la finalit\u00e9 m\u00eame de cette science. Les savants pr\u00e9cisent que ce hadith ne concerne pas celui qui tire un b\u00e9n\u00e9fice l\u00e9gitime de sa science tout en ayant une intention premi\u00e8re sincère, mais celui dont la motivation premi\u00e8re est mondaine."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Ostentation (riya)   */}
              {/* ============================== */}
              <section id="ostentation-riya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;ostentation (riya) : le pi\u00e8ge de l&apos;intention
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si l&apos;ikhlas est la lumi\u00e8re de l&apos;intention, le riya (ostentation) en est l&apos;ombre. Le Proph\u00e8te \uFDFA a mis en garde sa communaut\u00e9 contre ce danger subtil qui ronge les bonnes \u0153uvres de l&apos;int\u00e9rieur. L&apos;ostentation est d&apos;autant plus redoutable qu&apos;elle peut s&apos;infiltrer dans les actes les plus pieux sans que la personne en ait pleinement conscience.
                </p>

                <HadithBlock
                  number={6}
                  title="Le petit polyth\u00e9isme (shirk asghar)"
                  narrator="Mahmud ibn Labid"
                  arabic="\u0625\u0650\u0646\u0651\u064e \u0623\u064e\u062e\u0652\u0648\u064e\u0641\u064e \u0645\u064e\u0627 \u0623\u064e\u062e\u064e\u0627\u0641\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u0627\u0644\u0634\u0651\u0650\u0631\u0652\u0643\u064f \u0627\u0644\u0623\u064e\u0635\u0652\u063a\u064e\u0631\u064f \u0642\u064e\u0627\u0644\u064f\u0648\u0627 \u0648\u064e\u0645\u064e\u0627 \u0627\u0644\u0634\u0651\u0650\u0631\u0652\u0643\u064f \u0627\u0644\u0623\u064e\u0635\u0652\u063a\u064e\u0631\u064f \u064a\u064e\u0627 \u0631\u064e\u0633\u064f\u0648\u0644\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0642\u064e\u0627\u0644\u064e \u0627\u0644\u0631\u0651\u0650\u064a\u064e\u0627\u0621\u064f"
                  translation="Ce que je crains le plus pour vous, c&apos;est le petit polyth\u00e9isme. Ils dirent : qu&apos;est-ce que le petit polyth\u00e9isme, \u00f4 Messager d&apos;Allah ? Il r\u00e9pondit : l&apos;ostentation (riya)."
                  source="Musnad Ahmad, n\u00b023630"
                  grade="sahih"
                  explanation="Ce hadith r\u00e9v\u00e8le la gravit\u00e9 de l&apos;ostentation : le Proph\u00e8te \uFDFA la qualifie de &laquo;&nbsp;petit polyth\u00e9isme&nbsp;&raquo; (shirk asghar), c&apos;est-\u00e0-dire une forme de shirk qui ne fait pas sortir de l&apos;islam mais qui d\u00e9truit la r\u00e9compense des actes. L&apos;ostentateur associe \u00e0 Allah un autre objectif dans son adoration : le regard des gens. Le fait que le Proph\u00e8te \uFDFA dise &laquo;&nbsp;ce que je crains le plus pour vous&nbsp;&raquo; montre que m\u00eame les Compagnons n&apos;\u00e9taient pas \u00e0 l&apos;abri de ce danger."
                />

                <HadithBlock
                  number={7}
                  title="L&apos;acte cach\u00e9 vaut soixante-dix fois l&apos;acte public"
                  narrator="Abu Hurayra"
                  arabic="\u0635\u064e\u0644\u064e\u0627\u0629\u064f \u0627\u0644\u0631\u0651\u064e\u062c\u064f\u0644\u0650 \u0641\u0650\u064a \u062c\u064e\u0645\u064e\u0627\u0639\u064e\u0629\u064d \u062a\u064e\u0632\u0650\u064a\u062f\u064f \u0639\u064e\u0644\u064e\u0649 \u0635\u064e\u0644\u064e\u0627\u062a\u0650\u0647\u0650 \u0641\u0650\u064a \u0628\u064e\u064a\u0652\u062a\u0650\u0647\u0650 \u0648\u064e\u0635\u064e\u0644\u064e\u0627\u062a\u0650\u0647\u0650 \u0641\u0650\u064a \u0633\u064f\u0648\u0642\u0650\u0647\u0650 \u062e\u064e\u0645\u0652\u0633\u064b\u0627 \u0648\u064e\u0639\u0650\u0634\u0652\u0631\u0650\u064a\u0646\u064e \u062f\u064e\u0631\u064e\u062c\u064e\u0629\u064b"
                  translation="La pri\u00e8re de l&apos;homme en cong\u00e9gation surpasse sa pri\u00e8re chez lui et sa pri\u00e8re au march\u00e9 de vingt-cinq degr\u00e9s."
                  source="Sahih Al-Bukhari, n\u00b0647 \u2014 Sahih Muslim, n\u00b0650"
                  grade="sahih"
                  explanation="Ce hadith, bien qu&apos;il traite de la pri\u00e8re en congr\u00e9gation, est utilis\u00e9 par les savants dans le chapitre de l&apos;intention. Si la pri\u00e8re obligatoire en congr\u00e9gation est sup\u00e9rieure, les savants comme Ibn al-Mubarak et d&apos;autres ont soulign\u00e9 que les pri\u00e8res surr\u00e9rogatoires et les aum\u00f4nes accomplies en secret sont meilleures, car elles sont plus \u00e0 l&apos;abri de l&apos;ostentation. Le Proph\u00e8te \uFDFA a lui-m\u00eame mentionn\u00e9 parmi les sept personnes prot\u00e9g\u00e9es par l&apos;ombre d&apos;Allah &laquo;&nbsp;un homme qui donne en charit\u00e9 si secr\u00e8tement que sa main gauche ne sait pas ce que sa main droite a donn\u00e9&nbsp;&raquo;."
                />

                <HadithBlock
                  number={8}
                  title="Celui qui donne en charit\u00e9 en secret"
                  narrator="Abu Hurayra"
                  arabic="\u0633\u064e\u0628\u0652\u0639\u064e\u0629\u064c \u064a\u064f\u0638\u0650\u0644\u0651\u064f\u0647\u064f\u0645\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0641\u0650\u064a \u0638\u0650\u0644\u0651\u0650\u0647\u0650 \u064a\u064e\u0648\u0652\u0645\u064e \u0644\u064e\u0627 \u0638\u0650\u0644\u0651\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0638\u0650\u0644\u0651\u064f\u0647\u064f ... \u0648\u064e\u0631\u064e\u062c\u064f\u0644\u064c \u062a\u064e\u0635\u064e\u062f\u0651\u064e\u0642\u064e \u0628\u0650\u0635\u064e\u062f\u064e\u0642\u064e\u0629\u064d \u0641\u064e\u0623\u064e\u062e\u0652\u0641\u064e\u0627\u0647\u064e\u0627 \u062d\u064e\u062a\u0651\u064e\u0649 \u0644\u064e\u0627 \u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064e \u0634\u0650\u0645\u064e\u0627\u0644\u064f\u0647\u064f \u0645\u064e\u0627 \u062a\u064f\u0646\u0652\u0641\u0650\u0642\u064f \u064a\u064e\u0645\u0650\u064a\u0646\u064f\u0647\u064f"
                  translation="Sept personnes seront prot\u00e9g\u00e9es par l&apos;ombre d&apos;Allah le Jour o\u00f9 il n&apos;y aura pas d&apos;autre ombre que la Sienne... et un homme qui a donn\u00e9 en charit\u00e9 si secr\u00e8tement que sa main gauche ne sait pas ce que sa main droite a d\u00e9pens\u00e9."
                  source="Sahih Al-Bukhari, n\u00b01423 \u2014 Sahih Muslim, n\u00b01031"
                  grade="sahih"
                  explanation="Ce hadith met en lumi\u00e8re la valeur de l&apos;acte secret aupr\u00e8s d&apos;Allah. L&apos;aum\u00f4ne donn\u00e9e en cachette est l&apos;un des actes les plus purs car elle est pr\u00e9serv\u00e9e de l&apos;ostentation. L&apos;expression &laquo;&nbsp;sa main gauche ne sait pas ce que sa main droite a d\u00e9pens\u00e9&nbsp;&raquo; est une hyperbole soulignant le degr\u00e9 extr\u00eame de discrection recherch\u00e9. La r\u00e9compense est \u00e0 la mesure de cette sinc\u00e9rit\u00e9 : \u00eatre sous l&apos;ombre d&apos;Allah le Jour o\u00f9 il n&apos;y aura aucune autre ombre."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="\u00c9tudiez la purification du c\u0153ur, l&apos;ikhlas et les fondements de la spiritualit\u00e9 islamique avec des professeurs qualifi\u00e9s."
                href="/apprendre-science-religieuse-islam"
                linkText="D\u00e9couvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Intention et r\u00e9compense */}
              {/* ============================== */}
              <section id="intention-recompense" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;intention multiplie les r\u00e9compenses
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des aspects les plus encourageants de la doctrine de l&apos;intention en islam est la mani\u00e8re dont Allah multiplie les r\u00e9compenses selon la niya. Le croyant est r\u00e9compens\u00e9 pour sa bonne intention m\u00eame s&apos;il ne peut accomplir l&apos;acte, et la mauvaise intention non suivie d&apos;effet n&apos;est pas compt\u00e9e contre lui. Cette asym\u00e9trie est un signe de la mis\u00e9ricorde divine.
                </p>

                <HadithBlock
                  number={9}
                  title="La bonne intention non r\u00e9alis\u00e9e est r\u00e9compens\u00e9e"
                  narrator="Ibn &apos;Abbas"
                  arabic="\u0625\u0650\u0646\u0651\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u0643\u064e\u062a\u064e\u0628\u064e \u0627\u0644\u0652\u062d\u064e\u0633\u064e\u0646\u064e\u0627\u062a\u0650 \u0648\u064e\u0627\u0644\u0633\u0651\u064e\u064a\u0651\u0650\u0626\u064e\u0627\u062a\u0650 ... \u0641\u064e\u0645\u064e\u0646\u0652 \u0647\u064e\u0645\u0651\u064e \u0628\u0650\u062d\u064e\u0633\u064e\u0646\u064e\u0629\u064d \u0641\u064e\u0644\u064e\u0645\u0652 \u064a\u064e\u0639\u0652\u0645\u064e\u0644\u0652\u0647\u064e\u0627 \u0643\u064e\u062a\u064e\u0628\u064e\u0647\u064e\u0627 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0644\u064e\u0647\u064f \u0639\u0650\u0646\u0652\u062f\u064e\u0647\u064f \u062d\u064e\u0633\u064e\u0646\u064e\u0629\u064b \u0643\u064e\u0627\u0645\u0650\u0644\u064e\u0629\u064b \u0641\u064e\u0625\u0650\u0646\u0652 \u0647\u064e\u0645\u0651\u064e \u0628\u0650\u0647\u064e\u0627 \u0641\u064e\u0639\u064e\u0645\u0650\u0644\u064e\u0647\u064e\u0627 \u0643\u064e\u062a\u064e\u0628\u064e\u0647\u064e\u0627 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0644\u064e\u0647\u064f \u0639\u0650\u0646\u0652\u062f\u064e\u0647\u064f \u0639\u064e\u0634\u0652\u0631\u064e \u062d\u064e\u0633\u064e\u0646\u064e\u0627\u062a\u064d \u0625\u0650\u0644\u064e\u0649 \u0633\u064e\u0628\u0652\u0639\u0650\u0645\u0650\u0627\u0626\u064e\u0629\u0650 \u0636\u0650\u0639\u0652\u0641\u064d"
                  translation="Certes, Allah a inscrit les bonnes actions et les mauvaises actions... Celui qui a eu l&apos;intention de faire une bonne action mais ne l&apos;a pas faite, Allah la lui inscrit comme une bonne action compl\u00e8te. S&apos;il l&apos;a voulu puis l&apos;a accomplie, Allah la lui inscrit de dix \u00e0 sept cents fois."
                  source="Sahih Al-Bukhari, n\u00b06491 \u2014 Sahih Muslim, n\u00b0131"
                  grade="sahih"
                  explanation="Ce hadith qudsi (parole divine rapport\u00e9e par le Proph\u00e8te \uFDFA) r\u00e9v\u00e8le l&apos;immense mis\u00e9ricorde d&apos;Allah. La bonne intention seule, m\u00eame non concr\u00e9tis\u00e9e, est r\u00e9compens\u00e9e. Et si l&apos;acte est accompli, la r\u00e9compense est multipli\u00e9e de 10 \u00e0 700 fois, voire davantage. En revanche, la mauvaise intention non suivie d&apos;acte est soit non compt\u00e9e, soit inscrite comme une bonne action (pour avoir r\u00e9sist\u00e9). Cette asym\u00e9trie montre que la balance divine penche du c\u00f4t\u00e9 de la mis\u00e9ricorde."
                />

                <HadithBlock
                  number={10}
                  title="L&apos;intention du croyant est meilleure que son acte"
                  narrator="Anas ibn Malik"
                  arabic="\u0646\u0650\u064a\u0651\u064e\u0629\u064f \u0627\u0644\u0652\u0645\u064f\u0624\u0652\u0645\u0650\u0646\u0650 \u062e\u064e\u064a\u0652\u0631\u064c \u0645\u0650\u0646\u0652 \u0639\u064e\u0645\u064e\u0644\u0650\u0647\u0650"
                  translation="L&apos;intention du croyant est meilleure que son acte."
                  source="Al-Mu&apos;jam al-Kabir, At-Tabarani"
                  grade="hasan"
                  explanation="Ce hadith, bien que court, porte un enseignement profond. L&apos;intention peut \u00eatre plus vaste que l&apos;acte : le croyant peut avoir dans son c\u0153ur le d\u00e9sir d&apos;accomplir des \u0153uvres immenses qu&apos;il ne peut r\u00e9aliser faute de moyens ou de capacit\u00e9. Allah le r\u00e9compense pour cette intention sincère. De plus, l&apos;intention pr\u00e9c\u00e8de l&apos;acte et lui donne sa direction : un acte sans intention n&apos;est qu&apos;un mouvement vide. Les savants y voient aussi le fait que l&apos;intention pure perdure alors que l&apos;acte est limit\u00e9 dans le temps."
                />

                <HadithBlock
                  number={11}
                  title="Celui qui demande sinc\u00e8rement le martyre"
                  narrator="Sahl ibn Hunayf"
                  arabic="\u0645\u064e\u0646\u0652 \u0633\u064e\u0623\u064e\u0644\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u0627\u0644\u0634\u0651\u064e\u0647\u064e\u0627\u062f\u064e\u0629\u064e \u0628\u0650\u0635\u0650\u062f\u0652\u0642\u064d \u0628\u064e\u0644\u0651\u064e\u063a\u064e\u0647\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0645\u064e\u0646\u064e\u0627\u0632\u0650\u0644\u064e \u0627\u0644\u0634\u0651\u064f\u0647\u064e\u062f\u064e\u0627\u0621\u0650 \u0648\u064e\u0625\u0650\u0646\u0652 \u0645\u064e\u0627\u062a\u064e \u0639\u064e\u0644\u064e\u0649 \u0641\u0650\u0631\u064e\u0627\u0634\u0650\u0647\u0650"
                  translation="Celui qui demande sinc\u00e8rement \u00e0 Allah le martyre, Allah lui accordera le rang des martyrs, m\u00eame s&apos;il meurt dans son lit."
                  source="Sahih Muslim, n\u00b01909"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;une des plus belles illustrations de la puissance de l&apos;intention. Un croyant qui aspire sinc\u00e8rement au martyre mais meurt paisiblement dans son lit obtient la r\u00e9compense des martyrs aupr\u00e8s d&apos;Allah. La condition est la sinc\u00e9rit\u00e9 (bi-sidq) : ce n&apos;est pas un v\u0153u superficiel, mais une aspiration profonde du c\u0153ur. Ce hadith console tous ceux qui ont de grandes aspirations mais des moyens limit\u00e9s : Allah juge les c\u0153urs, pas les circonstances."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Intention quotidien  */}
              {/* ============================== */}
              <section id="intention-quotidien" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;intention dans la vie quotidienne
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus lib\u00e9rateurs de la doctrine de l&apos;intention est qu&apos;elle ne se limite pas aux actes d&apos;adoration rituels. Manger, dormir, travailler, \u00e9tudier : tout peut devenir une adoration si l&apos;intention est correctement orient\u00e9e. Le croyant qui purifie sa niya dans ses actes quotidiens transforme l&apos;int\u00e9gralit\u00e9 de sa vie en acte d&apos;ob\u00e9issance \u00e0 Allah.
                </p>

                <HadithBlock
                  number={12}
                  title="La bouch\u00e9e mise dans la bouche de son \u00e9pouse"
                  narrator="Sa&apos;d ibn Abi Waqqas"
                  arabic="\u0625\u0650\u0646\u0651\u064e\u0643\u064e \u0644\u064e\u0646\u0652 \u062a\u064f\u0646\u0652\u0641\u0650\u0642\u064e \u0646\u064e\u0641\u064e\u0642\u064e\u0629\u064b \u062a\u064e\u0628\u0652\u062a\u064e\u063a\u0650\u064a \u0628\u0650\u0647\u064e\u0627 \u0648\u064e\u062c\u0652\u0647\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0625\u0650\u0644\u0651\u064e\u0627 \u0623\u064f\u062c\u0650\u0631\u0652\u062a\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u064e\u0627 \u062d\u064e\u062a\u0651\u064e\u0649 \u0645\u064e\u0627 \u062a\u064e\u062c\u0652\u0639\u064e\u0644\u064f \u0641\u0650\u064a \u0641\u0650\u064a \u0627\u0645\u0652\u0631\u064e\u0623\u064e\u062a\u0650\u0643\u064e"
                  translation="Tu ne d\u00e9penseras aucune d\u00e9pense en recherchant le Visage d&apos;Allah sans en \u00eatre r\u00e9compens\u00e9, m\u00eame la bouch\u00e9e de nourriture que tu mets dans la bouche de ton \u00e9pouse."
                  source="Sahih Al-Bukhari, n\u00b056 \u2014 Sahih Muslim, n\u00b01628"
                  grade="sahih"
                  explanation="Ce hadith illustre comment l&apos;intention transforme le quotidien en adoration. Nourrir sa famille est un acte ordinaire, mais avec l&apos;intention de plaire \u00e0 Allah, il devient une sadaqa r\u00e9compens\u00e9e. Le Proph\u00e8te \uFDFA a choisi l&apos;exemple le plus intime \u2014 mettre une bouch\u00e9e dans la bouche de son \u00e9pouse \u2014 pour montrer qu&apos;aucun geste n&apos;est trop petit pour \u00eatre r\u00e9compens\u00e9. La cl\u00e9 est dans les mots &laquo;&nbsp;en recherchant le Visage d&apos;Allah&nbsp;&raquo; : c&apos;est l&apos;intention qui fait la diff\u00e9rence."
                />

                <HadithBlock
                  number={13}
                  title="Chaque bonne parole est une aum\u00f4ne"
                  narrator="Abu Hurayra"
                  arabic="\u0643\u064f\u0644\u0651\u064f \u0633\u064f\u0644\u064e\u0627\u0645\u064e\u0649 \u0645\u0650\u0646\u064e \u0627\u0644\u0646\u0651\u064e\u0627\u0633\u0650 \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0635\u064e\u062f\u064e\u0642\u064e\u0629\u064c \u0643\u064f\u0644\u0651\u064e \u064a\u064e\u0648\u0652\u0645\u064d \u062a\u064e\u0637\u0652\u0644\u064f\u0639\u064f \u0641\u0650\u064a\u0647\u0650 \u0627\u0644\u0634\u0651\u064e\u0645\u0652\u0633\u064f \u062a\u064e\u0639\u0652\u062f\u0650\u0644\u064f \u0628\u064e\u064a\u0652\u0646\u064e \u0627\u062b\u0652\u0646\u064e\u064a\u0652\u0646\u0650 \u0635\u064e\u062f\u064e\u0642\u064e\u0629\u064c \u0648\u064e\u062a\u064f\u0639\u0650\u064a\u0646\u064f \u0627\u0644\u0631\u0651\u064e\u062c\u064f\u0644\u064e \u0641\u0650\u064a \u062f\u064e\u0627\u0628\u0651\u064e\u062a\u0650\u0647\u0650 \u0635\u064e\u062f\u064e\u0642\u064e\u0629\u064c ... \u0648\u064e\u0627\u0644\u0652\u0643\u064e\u0644\u0650\u0645\u064e\u0629\u064f \u0627\u0644\u0637\u0651\u064e\u064a\u0651\u0650\u0628\u064e\u0629\u064f \u0635\u064e\u062f\u064e\u0642\u064e\u0629\u064c"
                  translation="Chaque articulation du corps humain doit s&apos;acquitter d&apos;une aum\u00f4ne chaque jour o\u00f9 le soleil se l\u00e8ve : r\u00e9concilier deux personnes est une aum\u00f4ne, aider un homme \u00e0 monter sur sa monture est une aum\u00f4ne... et la bonne parole est une aum\u00f4ne."
                  source="Sahih Al-Bukhari, n\u00b02989 \u2014 Sahih Muslim, n\u00b01009"
                  grade="sahih"
                  explanation="Ce hadith \u00e9largit consid\u00e9rablement la notion de sadaqa (aum\u00f4ne) au-del\u00e0 de l&apos;aspect financier. Chaque geste de bont\u00e9, chaque parole bienveillante, chaque aide apport\u00e9e est une aum\u00f4ne si l&apos;intention est sincère. Le Proph\u00e8te \uFDFA enseigne que le croyant peut accumuler des r\u00e9compenses \u00e0 chaque instant de la journ\u00e9e, dans ses interactions les plus banales. C&apos;est la niya qui transforme le sourire en sadaqa, le salut en adoration et l&apos;entraide en acte m\u00e9ritoire."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur l&apos;intention
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont accord\u00e9 \u00e0 la question de l&apos;intention une place centrale dans leurs \u0153uvres. Leurs commentaires \u00e9clairent la port\u00e9e th\u00e9ologique et pratique des hadiths sur la niya.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Ce hadith (innama al-a&apos;mal bi-n-niyyat) est l&apos;un des fondements de l&apos;islam. L&apos;imam Ash-Shafi&apos;i a dit qu&apos;il entre dans soixante-dix chapitres de la jurisprudence. Certains savants ont dit qu&apos;il repr\u00e9sente le tiers de la science, car l&apos;acquisition par le serviteur se fait par le c\u0153ur, la langue et les membres, et l&apos;intention est l&apos;acte du c\u0153ur.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      \u2014 Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;intention est l&apos;\u00e2me de l&apos;acte, son esprit et son noyau. L&apos;acte sans intention est comme un corps sans \u00e2me. La science de l&apos;intention est plus importante que la science de l&apos;acte, car combien d&apos;actes qui ont l&apos;apparence du bien mais dont l&apos;intention les transforme en mal.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      \u2014 Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La niya est la r\u00e9solution ferme du c\u0153ur \u00e0 accomplir l&apos;acte. Elle n&apos;a pas besoin d&apos;\u00eatre prononc\u00e9e \u00e0 voix haute, car Allah conna\u00eet ce que renferment les c\u0153urs. Prononcer l&apos;intention avant la pri\u00e8re est une innovation (bid&apos;a) que le Proph\u00e8te \uFDFA n&apos;a jamais pratiqu\u00e9e ni ordonn\u00e9e.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      \u2014 Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires r\u00e9v\u00e8lent que l&apos;intention n&apos;est pas un simple pr\u00e9liminaire \u00e0 l&apos;acte, mais la composante la plus d\u00e9cisive de toute \u0153uvre. Les savants s&apos;accordent \u00e0 dire que la purification de la niya est un travail permanent du c\u0153ur, jamais d\u00e9finitivement acquis.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le\u00e7ons pratiques */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et le\u00e7ons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths pr\u00e9sent\u00e9s dans cet article permet de d\u00e9gager des le\u00e7ons concr\u00e8tes pour la vie spirituelle du croyant :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        V\u00e9rifier son intention avant chaque acte
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Avant de prier, de jeuner, d&apos;\u00e9tudier ou de donner en charit\u00e9, se poser la question : est-ce que je fais cela pour Allah ou pour les gens ? Cette introspection r\u00e9guli\u00e8re est le fondement de l&apos;ikhlas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier les actes secrets
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les pri\u00e8res surr\u00e9rogatoires \u00e0 la maison, l&apos;aum\u00f4ne discr\u00e8te, les invocations priv\u00e9es : ces actes cach\u00e9s sont les mieux pr\u00e9serv\u00e9s de l&apos;ostentation et les plus chers \u00e0 Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Transformer le quotidien en adoration
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Manger pour se renforcer dans l&apos;ob\u00e9issance, dormir pour recharger ses forces pour la pri\u00e8re, travailler pour subvenir aux besoins de sa famille : tout devient adoration avec la bonne intention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se m\u00e9fier du riya dans les actes pieux
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;ostentation est un pi\u00e8ge subtil qui s&apos;infiltre sp\u00e9cialement dans les actes les plus nobles. Le croyant doit \u00eatre particuli\u00e8rement vigilant lorsqu&apos;il accomplit des actes visibles par les gens.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Renouveler fr\u00e9quemment sa niya
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;intention n&apos;est pas un \u00e9tat fig\u00e9. Le croyant doit renouveler et purifier sa niya r\u00e9guli\u00e8rement, en cours d&apos;action et apr\u00e8s l&apos;acte, pour \u00e9viter que l&apos;ego ne s&apos;y glisse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas abandonner le bien par peur de l&apos;ostentation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les savants mettent en garde : abandonner une bonne action par crainte du riya est aussi une ruse de Shaytan. Le croyant doit accomplir le bien tout en combattant l&apos;ostentation dans son c\u0153ur.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur l&apos;intention dans leur langue originale et approfondissez votre connaissance de la Sunna."
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
                  title="Hadiths sur le bon comportement en islam"
                  description="D\u00e9couvrez les enseignements proph\u00e9tiques sur le caract\u00e8re, la douceur, la patience et les bonnes mani\u00e8res."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la pri\u00e8re en islam"
                  description="Les hadiths authentiques sur la salat, ses m\u00e9rites, ses conditions et la concentration dans la pri\u00e8re."
                  href="/hadith-priere-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la sadaqa et la charit\u00e9 en islam"
                  description="Les enseignements proph\u00e9tiques sur l&apos;aum\u00f4ne, la g\u00e9n\u00e9rosit\u00e9 et les m\u00e9rites de la sadaqa."
                  href="/hadith-sadaqa-charite-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
