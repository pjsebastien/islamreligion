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
    "Hadiths sur la omra et le hajj en islam : guide complet des enseignements proph\u00e9tiques",
  description:
    "D\u00e9couvrez les hadiths authentiques sur la omra et le hajj en islam : hajj mabrur, expiation des p\u00e9ch\u00e9s, talbiya, jour d\u2019Arafat, lapidation des jamarat. Texte arabe, traduction et explication d\u00e9taill\u00e9e.",
  openGraph: {
    title:
      "Hadiths sur la omra et le hajj en islam : guide complet des enseignements proph\u00e9tiques",
    description:
      "Les hadiths authentiques sur la omra et le hajj : m\u00e9rites du p\u00e8lerinage, obligation, rites et invocations selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-omra-hajj-islam",
    images: [
      {
        url: "/images/kaaba-mecque-pelerinage-hajj-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-omra-hajj-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du hajj et de la omra" },
  { id: "merites-hajj", label: "M\u00e9rites du hajj" },
  { id: "merites-omra", label: "M\u00e9rites de la omra" },
  { id: "rites-invocations", label: "Rites et invocations du p\u00e8lerinage" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "Le hajj est-il obligatoire pour tout musulman ?",
    answer:
      "Le hajj est obligatoire une fois dans la vie pour tout musulman adulte, sain d\u2019esprit, libre et qui en a la capacit\u00e9 financi\u00e8re et physique (istita\u2019a). Cette obligation est fond\u00e9e sur le Coran (sourate Al-Imran, 3:97) et confirm\u00e9e par le hadith d\u2019Ibn \u2018Umar sur les cinq piliers de l\u2019islam (Bukhari 8). Celui qui nie l\u2019obligation du hajj sort de l\u2019islam selon le consensus des savants.",
  },
  {
    question:
      "Quelle est la diff\u00e9rence entre le hajj et la omra ?",
    answer:
      "Le hajj est le grand p\u00e8lerinage qui se d\u00e9roule \u00e0 des dates pr\u00e9cises du mois de Dhul-Hijja et inclut la station \u00e0 Arafat, la nuit \u00e0 Muzdalifa et la lapidation des jamarat. La omra est le petit p\u00e8lerinage qui peut s\u2019accomplir \u00e0 tout moment de l\u2019ann\u00e9e et se compose de l\u2019ihram, du tawaf, du sa\u2019y et du rasage ou raccourcissement des cheveux. Le hajj est obligatoire, tandis que la omra est obligatoire selon les shafi\u2019ites et les hanbalites, et sunna mu\u2019akkada selon les hanafites et les malikites.",
  },
  {
    question:
      "Que signifie \u00ab hajj mabrur \u00bb ?",
    answer:
      "Le hajj mabrur d\u00e9signe un p\u00e8lerinage agr\u00e9\u00e9 par Allah. Selon les savants, ses signes sont : l\u2019absence de p\u00e9ch\u00e9s et de disputes pendant le p\u00e8lerinage, la sinc\u00e9rit\u00e9 de l\u2019intention, le financement par des moyens licites (halal), et l\u2019am\u00e9lioration du comportement apr\u00e8s le retour. Le Proph\u00e8te \u2018alayhi salatu wa salam a dit que le hajj mabrur n\u2019a d\u2019autre r\u00e9compense que le Paradis (Bukhari 1773).",
  },
  {
    question:
      "Quelles sont les meilleures invocations \u00e0 faire pendant le hajj ?",
    answer:
      "Le Proph\u00e8te \u2018alayhi salatu wa salam a enseign\u00e9 plusieurs invocations sp\u00e9cifiques au hajj. La talbiya (\u00ab Labbayk Allahumma labbayk \u00bb) se r\u00e9p\u00e8te d\u00e8s l\u2019entr\u00e9e en \u00e9tat d\u2019ihram. Le jour d\u2019Arafat, la meilleure invocation est : \u00ab La ilaha illa Allah, wahdahu la sharika lah, lahul-mulku wa lahul-hamdu, wa huwa \u2018ala kulli shay\u2019in qadir \u00bb (Tirmidhi 3585). Les p\u00e8lerins sont \u00e9galement encourag\u00e9s \u00e0 multiplier les douas personnelles, car le jour d\u2019Arafat est un moment d\u2019exaucement.",
  },
  {
    question:
      "La femme peut-elle accomplir le hajj sans mahram ?",
    answer:
      "La majorit\u00e9 des savants exigent la pr\u00e9sence d\u2019un mahram (tuteur masculin) pour que la femme accomplisse le hajj, conform\u00e9ment au hadith d\u2019Ibn \u2018Abbas : \u00ab Qu\u2019une femme ne voyage pas sans mahram \u00bb (Bukhari 1862). Toutefois, l\u2019imam Ash-Shafi\u2019i et certains savants autorisent la femme \u00e0 voyager avec un groupe de femmes dignes de confiance si elle ne trouve pas de mahram. Chaque cas doit \u00eatre \u00e9valu\u00e9 selon sa situation particuli\u00e8re.",
  },
  {
    question:
      "Quels sont les m\u00e9rites de l\u2019eau de Zamzam selon les hadiths ?",
    answer:
      "Le Proph\u00e8te \u2018alayhi salatu wa salam a dit : \u00ab L\u2019eau de Zamzam est pour ce pourquoi elle est bue \u00bb (Ibn Majah 3062). Ce hadith, jug\u00e9 hasan par certains savants, signifie que celui qui boit l\u2019eau de Zamzam avec une intention pr\u00e9cise (gu\u00e9rison, science, etc.) peut esp\u00e9rer qu\u2019Allah exauce cette intention. Le Proph\u00e8te a \u00e9galement dit que Zamzam est une eau b\u00e9nie et une nourriture qui rassasie (Muslim 2473).",
  },
  {
    question:
      "Peut-on accomplir le hajj ou la omra pour un d\u00e9funt ?",
    answer:
      "Oui, il est permis d\u2019accomplir le hajj ou la omra pour un d\u00e9funt, ou pour une personne vivante incapable de voyager en raison d\u2019une maladie incurable ou de la vieillesse. Cela est fond\u00e9 sur le hadith d\u2019Ibn \u2018Abbas o\u00f9 une femme a demand\u00e9 au Proph\u00e8te si elle pouvait accomplir le hajj pour son p\u00e8re \u00e2g\u00e9, et il a r\u00e9pondu par l\u2019affirmative (Bukhari 1513).",
  },
  {
    question:
      "Combien de fois le Proph\u00e8te Muhammad a-t-il accompli le hajj et la omra ?",
    answer:
      "Le Proph\u00e8te \u2018alayhi salatu wa salam a accompli un seul hajj apr\u00e8s l\u2019H\u00e9gire, appel\u00e9 le \u00ab p\u00e8lerinage d\u2019adieu \u00bb (hajjat al-wada\u2019) en l\u2019an 10 de l\u2019H\u00e9gire. Il a accompli quatre omras au total : celle d\u2019Al-Hudaybiya (o\u00f9 il fut emp\u00each\u00e9), celle de rattrapage (al-qada\u2019), celle de Ji\u2019rana et celle li\u00e9e \u00e0 son hajj (Bukhari 1778).",
  },
];

export default function HadithOmraHajjIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-omra-hajj-islam/#article",
        headline:
          "Hadiths sur la omra et le hajj en islam : guide complet des enseignements proph\u00e9tiques",
        description:
          "D\u00e9couvrez les hadiths authentiques sur la omra et le hajj en islam : hajj mabrur, expiation des p\u00e9ch\u00e9s, talbiya, jour d\u2019Arafat, lapidation des jamarat.",
        image: "/images/kaaba-mecque-pelerinage-hajj-islam.jpg",
        datePublished: "2026-04-27",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-omra-hajj-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-omra-hajj-islam/#breadcrumb",
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
            name: "Hadiths sur la omra et le hajj",
            item: "https://www.islamreligion.fr/hadith-omra-hajj-islam",
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
          title="Hadiths sur la omra et le hajj en islam"
          subtitle="Les enseignements proph\u00e9tiques sur le p\u00e8lerinage \u00e0 La Mecque : m\u00e9rites du hajj et de la omra, rites, invocations et le\u00e7ons spirituelles selon la Sunna authentique."
          imageSrc="/images/kaaba-mecque-pelerinage-hajj-islam.jpg"
          imageAlt="Hadiths sur la omra et le hajj en islam, p\u00e8lerinage \u00e0 La Mecque"
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
                  Hadiths sur la omra et le hajj
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
                    Le hajj mabrur (agr\u00e9\u00e9) n&apos;a d&apos;autre r\u00e9compense que le Paradis, et il efface les p\u00e9ch\u00e9s comme le jour o\u00f9 la m\u00e8re a mis au monde son enfant.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La omra est une expiation des p\u00e9ch\u00e9s commis entre deux omras, ce qui en fait un acte de purification spirituelle r\u00e9p\u00e9t\u00e9.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le jour d&apos;Arafat est le plus grand jour du hajj : Allah y lib\u00e8re le plus grand nombre de Ses serviteurs du Feu.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le hajj est l&apos;un des cinq piliers de l&apos;islam, obligatoire une fois dans la vie pour celui qui en a la capacit\u00e9.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du hajj et de la omra
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que le hajj et la omra sont d&apos;abord des institutions coraniques. Allah a fait de la Kaaba un lieu sacr\u00e9, un refuge pour les hommes, et Il a prescrit le p\u00e8lerinage \u00e0 quiconque en a la capacit\u00e9. Plusieurs versets posent les fondements sur lesquels s&apos;appuient ensuite les hadiths du Proph\u00e8te \ufdfa.
                </p>

                <HadithCard
                  arabic="\u0648\u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0646\u0651\u064e\u0627\u0633\u0650 \u062d\u0650\u062c\u0651\u064f \u0627\u0644\u0628\u064e\u064a\u0652\u062a\u0650 \u0645\u064e\u0646\u0650 \u0627\u0633\u0652\u062a\u064e\u0637\u064e\u0627\u0639\u064e \u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650 \u0633\u064e\u0628\u0650\u064a\u0644\u064b\u0627 \u0648\u064e\u0645\u064e\u0646 \u0643\u064e\u0641\u064e\u0631\u064e \u0641\u064e\u0625\u0650\u0646\u0651\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u063a\u064e\u0646\u0650\u064a\u0651\u064c \u0639\u064e\u0646\u0650 \u0627\u0644\u0639\u064e\u0627\u0644\u064e\u0645\u0650\u064a\u0646\u064e"
                  text="Et c&apos;est un devoir envers Allah pour les gens qui ont les moyens d&apos;aller faire le p\u00e8lerinage de la Maison. Et quiconque m\u00e9croit, Allah Se passe largement des mondes."
                  source="Coran, sourate Al-Imran (3:97)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est le fondement de l&apos;obligation du hajj. L&apos;expression &laquo;&nbsp;c&apos;est un devoir envers Allah&nbsp;&raquo; est la plus forte formulation coranique pour \u00e9tablir une obligation. La condition &laquo;&nbsp;qui ont les moyens&nbsp;&raquo; (<em>istita&apos;a</em>) inclut la capacit\u00e9 financi\u00e8re, physique et la s\u00e9curit\u00e9 du trajet. Les savants soulignent que la gravit\u00e9 de la formule finale (&laquo;&nbsp;quiconque m\u00e9croit&nbsp;&raquo;) montre l&apos;importance capitale de ce pilier.
                </p>

                <HadithCard
                  arabic="\u0648\u064e\u0623\u064e\u062a\u0650\u0645\u0651\u064f\u0648\u0627 \u0627\u0644\u0652\u062d\u064e\u062c\u0651\u064e \u0648\u064e\u0627\u0644\u0652\u0639\u064f\u0645\u0652\u0631\u064e\u0629\u064e \u0644\u0650\u0644\u0651\u064e\u0647\u0650"
                  text="Et accomplissez pour Allah le hajj et la omra."
                  source="Coran, sourate Al-Baqara (2:196)"
                />

                <HadithCard
                  arabic="\u0627\u0644\u0652\u062d\u064e\u062c\u0651\u064f \u0623\u064e\u0634\u0652\u0647\u064f\u0631\u064c \u0645\u0651\u064e\u0639\u0652\u0644\u064f\u0648\u0645\u064e\u0627\u062a\u064c \u0641\u064e\u0645\u064e\u0646 \u0641\u064e\u0631\u064e\u0636\u064e \u0641\u0650\u064a\u0647\u0650\u0646\u0651\u064e \u0627\u0644\u0652\u062d\u064e\u062c\u0651\u064e \u0641\u064e\u0644\u064e\u0627 \u0631\u064e\u0641\u064e\u062b\u064e \u0648\u064e\u0644\u064e\u0627 \u0641\u064f\u0633\u064f\u0648\u0642\u064e \u0648\u064e\u0644\u064e\u0627 \u062c\u0650\u062f\u064e\u0627\u0644\u064e \u0641\u0650\u064a \u0627\u0644\u0652\u062d\u064e\u062c\u0651\u0650"
                  text="Le hajj a lieu en des mois d\u00e9termin\u00e9s. Quiconque s&apos;y engage : point de rapport intime, point de perversit\u00e9 et point de dispute pendant le hajj."
                  source="Coran, sourate Al-Baqara (2:197)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces versets \u00e9tablissent le cadre spirituel et \u00e9thique du p\u00e8lerinage. Le hajj n&apos;est pas un simple voyage : c&apos;est un acte d&apos;adoration qui exige sinc\u00e9rit\u00e9, discipline et \u00e9l\u00e9vation morale. L&apos;interdiction du rafath (rapport intime), du fusuq (perversit\u00e9) et du jidal (dispute) montre que le p\u00e8lerin doit se d\u00e9faire de tout comportement bas pour se consacrer enti\u00e8rement \u00e0 Allah. C&apos;est sur cette base coranique que le Proph\u00e8te \ufdfa a construit ses enseignements pratiques sur le hajj et la omra.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : M\u00e9rites du hajj       */}
              {/* ============================== */}
              <section id="merites-hajj" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  M\u00e9rites du hajj selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le hajj occupe une place centrale dans la vie du musulman. Le Proph\u00e8te \ufdfa en a d\u00e9crit les m\u00e9rites immenses dans de nombreux hadiths. Du pardon total des p\u00e9ch\u00e9s \u00e0 la promesse du Paradis, ces enseignements motivent le croyant \u00e0 accomplir ce pilier avec sinc\u00e9rit\u00e9 et d\u00e9votion.
                </p>

                <HadithBlock
                  number={1}
                  title="Le hajj mabrur m\u00e8ne au Paradis"
                  narrator="Abu Hurayra"
                  arabic="\u0627\u0644\u0639\u064f\u0645\u0652\u0631\u064e\u0629\u064f \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0639\u064f\u0645\u0652\u0631\u064e\u0629\u0650 \u0643\u064e\u0641\u0651\u064e\u0627\u0631\u064e\u0629\u064c \u0644\u0650\u0645\u064e\u0627 \u0628\u064e\u064a\u0652\u0646\u064e\u0647\u064f\u0645\u064e\u0627\u060c \u0648\u064e\u0627\u0644\u0652\u062d\u064e\u062c\u0651\u064f \u0627\u0644\u0652\u0645\u064e\u0628\u0652\u0631\u064f\u0648\u0631\u064f \u0644\u064e\u064a\u0652\u0633\u064e \u0644\u064e\u0647\u064f \u062c\u064e\u0632\u064e\u0627\u0621\u064c \u0625\u0650\u0644\u0651\u064e\u0627 \u0627\u0644\u062c\u064e\u0646\u0651\u064e\u0629\u064f"
                  translation="La omra jusqu&apos;\u00e0 la omra suivante est une expiation de ce qui se trouve entre les deux, et le hajj mabrur n&apos;a d&apos;autre r\u00e9compense que le Paradis."
                  source="Sahih Al-Bukhari, n\u00b01773 \u2014 Sahih Muslim, n\u00b01349"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus c\u00e9l\u00e8bres sur le p\u00e8lerinage. Il associe deux bienfaits majeurs : l&apos;expiation par la omra et la r\u00e9compense supr\u00eame du hajj mabrur. Le terme &laquo;&nbsp;mabrur&nbsp;&raquo; d\u00e9signe un hajj accept\u00e9 par Allah, accompli avec sinc\u00e9rit\u00e9, sans p\u00e9ch\u00e9 ni dispute, et financ\u00e9 par des moyens licites. Les savants expliquent que la promesse du Paradis signifie que le hajj mabrur est l&apos;un des actes les plus m\u00e9ritoires de l&apos;islam, surpassant m\u00eame le jihad dans certaines circonstances."
                />

                <HadithBlock
                  number={2}
                  title="Le hajj efface les p\u00e9ch\u00e9s ant\u00e9rieurs"
                  narrator="Abu Hurayra"
                  arabic="\u0645\u064e\u0646\u0652 \u062d\u064e\u062c\u0651\u064e \u0647\u064e\u0630\u064e\u0627 \u0627\u0644\u0628\u064e\u064a\u0652\u062a\u064e \u0641\u064e\u0644\u064e\u0645\u0652 \u064a\u064e\u0631\u0652\u0641\u064f\u062b\u0652 \u0648\u064e\u0644\u064e\u0645\u0652 \u064a\u064e\u0641\u0652\u0633\u064f\u0642\u0652 \u0631\u064e\u062c\u064e\u0639\u064e \u0643\u064e\u064a\u064e\u0648\u0652\u0645\u0650 \u0648\u064e\u0644\u064e\u062f\u064e\u062a\u0652\u0647\u064f \u0623\u064f\u0645\u0651\u064f\u0647\u064f"
                  translation="Celui qui accomplit le hajj de cette Maison sans commettre de rapport intime ni de perversit\u00e9 en reviendra comme le jour o\u00f9 sa m\u00e8re l&apos;a mis au monde."
                  source="Sahih Al-Bukhari, n\u00b01521 \u2014 Sahih Muslim, n\u00b01350"
                  grade="sahih"
                  explanation="Ce hadith illustre la puissance purificatrice du hajj. L&apos;expression &laquo;&nbsp;comme le jour o\u00f9 sa m\u00e8re l&apos;a mis au monde&nbsp;&raquo; signifie un retour \u00e0 l&apos;\u00e9tat d&apos;innocence totale, d\u00e9barrass\u00e9 de tous les p\u00e9ch\u00e9s. Les conditions mentionn\u00e9es \u2014 pas de rafath ni de fusuq \u2014 reprennent les termes coraniques de la sourate Al-Baqara (2:197). Les savants pr\u00e9cisent que cette expiation concerne les p\u00e9ch\u00e9s mineurs, tandis que les p\u00e9ch\u00e9s majeurs n\u00e9cessitent un repentir sp\u00e9cifique (tawba)."
                />

                <HadithBlock
                  number={3}
                  title="Le hajj est l&apos;un des cinq piliers de l&apos;islam"
                  narrator="Ibn &apos;Umar"
                  arabic="\u0628\u064f\u0646\u0650\u064a\u064e \u0627\u0644\u0625\u0650\u0633\u0652\u0644\u0627\u064e\u0645\u064f \u0639\u064e\u0644\u064e\u0649 \u062e\u064e\u0645\u0652\u0633\u064d: \u0634\u064e\u0647\u064e\u0627\u062f\u064e\u0629\u0650 \u0623\u064e\u0646\u0652 \u0644\u064e\u0627 \u0625\u0650\u0644\u064e\u0647\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0627\u0644\u0644\u064e\u0651\u0647\u064f \u0648\u064e\u0623\u064e\u0646\u0651\u064e \u0645\u064f\u062d\u064e\u0645\u0651\u064e\u062f\u064b\u0627 \u0631\u064e\u0633\u064f\u0648\u0644\u064f \u0627\u0644\u0644\u064e\u0651\u0647\u0650\u060c \u0648\u064e\u0625\u0650\u0642\u064e\u0627\u0645\u0650 \u0627\u0644\u0635\u0651\u064e\u0644\u064e\u0627\u0629\u0650\u060c \u0648\u064e\u0625\u0650\u064a\u062a\u064e\u0627\u0621\u0650 \u0627\u0644\u0632\u0651\u064e\u0643\u064e\u0627\u0629\u0650\u060c \u0648\u064e\u062d\u064e\u062c\u0651\u0650 \u0627\u0644\u0628\u064e\u064a\u0652\u062a\u0650\u060c \u0648\u064e\u0635\u064e\u0648\u0652\u0645\u0650 \u0631\u064e\u0645\u064e\u0636\u064e\u0627\u0646\u064e"
                  translation="L&apos;islam est b\u00e2ti sur cinq piliers : l&apos;attestation qu&apos;il n&apos;y a de divinit\u00e9 qu&apos;Allah et que Muhammad est le Messager d&apos;Allah, l&apos;accomplissement de la pri\u00e8re, l&apos;acquittement de la zakat, le p\u00e8lerinage \u00e0 la Maison et le je\u00fbne du mois de Ramadan."
                  source="Sahih Al-Bukhari, n\u00b08 \u2014 Sahih Muslim, n\u00b016"
                  grade="sahih"
                  explanation="Ce hadith fondamental place le hajj parmi les cinq piliers de l&apos;islam, aux c\u00f4t\u00e9s de la shahada, de la pri\u00e8re, de la zakat et du je\u00fbne. Cela signifie que le hajj n&apos;est pas un acte surr\u00e9rogatoire mais une obligation fondamentale. Les savants pr\u00e9cisent que cette obligation s&apos;applique une seule fois dans la vie, conform\u00e9ment au hadith o\u00f9 le Proph\u00e8te \ufdfa a r\u00e9pondu \u00e0 celui qui demandait si le hajj \u00e9tait obligatoire chaque ann\u00e9e : &laquo;&nbsp;Si j&apos;avais dit oui, cela serait devenu obligatoire&nbsp;&raquo; (Muslim 1337)."
                />

                <HadithBlock
                  number={4}
                  title="Le hajj est le meilleur jihad pour les femmes"
                  narrator="Aisha"
                  arabic="\u064a\u064e\u0627 \u0631\u064e\u0633\u064f\u0648\u0644\u064e \u0627\u0644\u0644\u064e\u0651\u0647\u0650\u060c \u0646\u064e\u0631\u064e\u0649 \u0627\u0644\u0652\u062c\u0650\u0647\u064e\u0627\u062f\u064e \u0623\u064e\u0641\u0652\u0636\u064e\u0644\u064e \u0627\u0644\u0652\u0639\u064e\u0645\u064e\u0644\u0650\u060c \u0623\u064e\u0641\u064e\u0644\u064e\u0627 \u0646\u064f\u062c\u064e\u0627\u0647\u0650\u062f\u064f\u061f \u0642\u064e\u0627\u0644\u064e: \u0644\u064e\u0627\u060c \u0644\u064e\u0643\u0650\u0646\u0651\u064e \u0623\u064e\u0641\u0652\u0636\u064e\u0644\u064f \u0627\u0644\u0652\u062c\u0650\u0647\u064e\u0627\u062f\u0650 \u062d\u064e\u062c\u0651\u064c \u0645\u064e\u0628\u0652\u0631\u064f\u0648\u0631\u064c"
                  translation="J&apos;ai dit : \u00d4 Messager d&apos;Allah, nous voyons que le jihad est la meilleure des \u0153uvres, ne devons-nous pas combattre ? Il a r\u00e9pondu : Non, mais le meilleur jihad (pour vous) est un hajj mabrur."
                  source="Sahih Al-Bukhari, n\u00b01520"
                  grade="sahih"
                  explanation="Ce hadith r\u00e9v\u00e8le que le hajj est l&apos;\u00e9quivalent du jihad pour les femmes. Aisha, en observant la valeur du jihad, a voulu y participer. Le Proph\u00e8te \ufdfa l&apos;a orient\u00e9e vers le hajj mabrur comme \u00e9tant le sommet de l&apos;\u0153uvre pieuse pour elle. Les savants \u00e9largissent ce hadith \u00e0 toute personne incapable de participer au jihad : le hajj constitue alors l&apos;acte le plus m\u00e9ritoire qu&apos;elle puisse accomplir. Ce hadith souligne \u00e9galement que l&apos;islam ouvre aux femmes l&apos;acc\u00e8s aux plus hautes r\u00e9compenses."
                />

                <HadithBlock
                  number={5}
                  title="La vertu de d\u00e9penser pendant le hajj"
                  narrator="Burayda"
                  arabic="\u0627\u0644\u0646\u0651\u064e\u0641\u064e\u0642\u064e\u0629\u064f \u0641\u0650\u064a \u0627\u0644\u0652\u062d\u064e\u062c\u0651\u0650 \u0643\u064e\u0627\u0644\u0646\u0651\u064e\u0641\u064e\u0642\u064e\u0629\u0650 \u0641\u0650\u064a \u0633\u064e\u0628\u0650\u064a\u0644\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650\u060c \u0627\u0644\u062f\u0651\u0650\u0631\u0652\u0647\u064e\u0645\u064f \u0628\u0650\u0633\u064e\u0628\u0652\u0639\u0650\u0645\u0650\u0627\u0626\u064e\u0629\u0650 \u0636\u0650\u0639\u0652\u0641\u064d"
                  translation="La d\u00e9pense pendant le hajj est comme la d\u00e9pense dans le sentier d&apos;Allah : le dirham est multipli\u00e9 par sept cents."
                  source="Musnad Ahmad, n\u00b023000"
                  grade="hasan"
                  explanation="Ce hadith multiplie consid\u00e9rablement la r\u00e9compense des d\u00e9penses li\u00e9es au hajj. Chaque dirham d\u00e9pens\u00e9 pour le voyage, l&apos;h\u00e9bergement, la nourriture ou l&apos;aum\u00f4ne pendant le p\u00e8lerinage est r\u00e9compens\u00e9 comme une d\u00e9pense dans le sentier d&apos;Allah, avec un coefficient de sept cents. Ce hadith encourage le p\u00e8lerin \u00e0 \u00eatre g\u00e9n\u00e9reux pendant son hajj et \u00e0 ne pas l\u00e9siner sur les d\u00e9penses n\u00e9cessaires, tout en \u00e9vitant le gaspillage. Il console aussi celui qui trouve le co\u00fbt du hajj \u00e9lev\u00e9 : chaque centime est une sadaqa multipli\u00e9e."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur les m\u00e9rites du hajj forment un ensemble coh\u00e9rent. Ils montrent que le p\u00e8lerinage est \u00e0 la fois un pilier fondamental, une purification compl\u00e8te et un investissement spirituel dont la r\u00e9compense est le Paradis. Pour approfondir les enseignements proph\u00e9tiques sur la pri\u00e8re, autre pilier de l&apos;islam, consultez notre article sur les{" "}
                  <Link href="/hadith-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la pri\u00e8re en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : M\u00e9rites de la omra   */}
              {/* ============================== */}
              <section id="merites-omra" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  M\u00e9rites de la omra et rites du p\u00e8lerinage
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La omra, souvent appel\u00e9e &laquo;&nbsp;petit p\u00e8lerinage&nbsp;&raquo;, poss\u00e8de ses propres m\u00e9rites. Le Proph\u00e8te \ufdfa a \u00e9galement d\u00e9taill\u00e9 les vertus de certains rites communs au hajj et \u00e0 la omra, comme la talbiya et les invocations sp\u00e9cifiques.
                </p>

                <HadithBlock
                  number={6}
                  title="La omra en Ramadan \u00e9quivaut \u00e0 un hajj"
                  narrator="Ibn &apos;Abbas"
                  arabic="\u0641\u064e\u0625\u0650\u0646\u0651\u064e \u0639\u064f\u0645\u0652\u0631\u064e\u0629\u064b \u0641\u0650\u064a \u0631\u064e\u0645\u064e\u0636\u064e\u0627\u0646\u064e \u062a\u064e\u0639\u0652\u062f\u0650\u0644\u064f \u062d\u064e\u062c\u0651\u064e\u0629\u064b"
                  translation="Une omra en Ramadan \u00e9quivaut \u00e0 un hajj."
                  source="Sahih Al-Bukhari, n\u00b01863 \u2014 Sahih Muslim, n\u00b01256"
                  grade="sahih"
                  explanation="Ce hadith est une bonne nouvelle immense pour ceux qui accomplissent la omra pendant le mois de Ramadan. Dans une autre version, le Proph\u00e8te \ufdfa a m\u00eame dit &laquo;&nbsp;\u00e9quivaut \u00e0 un hajj avec moi&nbsp;&raquo;. Les savants pr\u00e9cisent que cette \u00e9quivalence concerne la r\u00e9compense, et non l&apos;acquittement de l&apos;obligation du hajj. La omra en Ramadan ne dispense donc pas du hajj obligatoire, mais elle offre une r\u00e9compense comparable en termes de m\u00e9rite spirituel."
                />

                <HadithBlock
                  number={7}
                  title="La talbiya du p\u00e8lerin"
                  narrator="Ibn &apos;Umar"
                  arabic="\u0623\u064e\u0646\u0651\u064e \u062a\u064e\u0644\u0652\u0628\u0650\u064a\u064e\u0629\u064e \u0631\u064e\u0633\u064f\u0648\u0644\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e: \u0644\u064e\u0628\u0651\u064e\u064a\u0652\u0643\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0644\u064e\u0628\u0651\u064e\u064a\u0652\u0643\u064e\u060c \u0644\u064e\u0628\u0651\u064e\u064a\u0652\u0643\u064e \u0644\u064e\u0627 \u0634\u064e\u0631\u0650\u064a\u0643\u064e \u0644\u064e\u0643\u064e \u0644\u064e\u0628\u0651\u064e\u064a\u0652\u0643\u064e\u060c \u0625\u0650\u0646\u0651\u064e \u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064e \u0648\u064e\u0627\u0644\u0646\u0651\u0650\u0639\u0652\u0645\u064e\u0629\u064e \u0644\u064e\u0643\u064e \u0648\u064e\u0627\u0644\u0652\u0645\u064f\u0644\u0652\u0643\u064e\u060c \u0644\u064e\u0627 \u0634\u064e\u0631\u0650\u064a\u0643\u064e \u0644\u064e\u0643\u064e"
                  translation="La talbiya du Messager d&apos;Allah \ufdfa \u00e9tait : Me voici, \u00f4 Allah, me voici. Me voici, Tu n&apos;as aucun associ\u00e9, me voici. Certes, la louange, la gr\u00e2ce et la royaut\u00e9 T&apos;appartiennent. Tu n&apos;as aucun associ\u00e9."
                  source="Sahih Al-Bukhari, n\u00b01549 \u2014 Sahih Muslim, n\u00b01184"
                  grade="sahih"
                  explanation="La talbiya est l&apos;invocation embl\u00e9matique du p\u00e8lerinage, r\u00e9p\u00e9t\u00e9e d\u00e8s l&apos;entr\u00e9e en \u00e9tat d&apos;ihram. Elle exprime la soumission totale \u00e0 Allah et l&apos;unicit\u00e9 divine (tawhid). Chaque &laquo;&nbsp;labbayk&nbsp;&raquo; est une r\u00e9ponse \u00e0 l&apos;appel d&apos;Allah lanc\u00e9 par Ibrahim. Les savants recommandent de la r\u00e9p\u00e9ter \u00e0 haute voix (pour les hommes) \u00e0 chaque changement de situation : en montant, en descendant, apr\u00e8s chaque pri\u00e8re. Elle est abandonn\u00e9e au moment de la lapidation de Jamrat al-&apos;Aqaba le jour de l&apos;A\u00efd."
                />

                <HadithBlock
                  number={8}
                  title="La meilleure invocation le jour d&apos;Arafat"
                  narrator="&apos;Amr ibn Shu&apos;ayb, d&apos;apr\u00e8s son p\u00e8re, d&apos;apr\u00e8s son grand-p\u00e8re"
                  arabic="\u062e\u064e\u064a\u0652\u0631\u064f \u0627\u0644\u062f\u0651\u064f\u0639\u064e\u0627\u0621\u0650 \u062f\u064f\u0639\u064e\u0627\u0621\u064f \u064a\u064e\u0648\u0652\u0645\u0650 \u0639\u064e\u0631\u064e\u0641\u064e\u0629\u064e\u060c \u0648\u064e\u062e\u064e\u064a\u0652\u0631\u064f \u0645\u064e\u0627 \u0642\u064f\u0644\u0652\u062a\u064f \u0623\u064e\u0646\u064e\u0627 \u0648\u064e\u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u064f\u0648\u0646\u064e \u0645\u0650\u0646\u0652 \u0642\u064e\u0628\u0652\u0644\u0650\u064a: \u0644\u064e\u0627 \u0625\u0650\u0644\u064e\u0647\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0648\u064e\u062d\u0652\u062f\u064e\u0647\u064f \u0644\u064e\u0627 \u0634\u064e\u0631\u0650\u064a\u0643\u064e \u0644\u064e\u0647\u064f\u060c \u0644\u064e\u0647\u064f \u0627\u0644\u0652\u0645\u064f\u0644\u0652\u0643\u064f \u0648\u064e\u0644\u064e\u0647\u064f \u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f\u060c \u0648\u064e\u0647\u064f\u0648\u064e \u0639\u064e\u0644\u064e\u0649 \u0643\u064f\u0644\u0651\u0650 \u0634\u064e\u064a\u0652\u0621\u064d \u0642\u064e\u062f\u0650\u064a\u0631\u064c"
                  translation="La meilleure invocation est celle du jour d&apos;Arafat, et la meilleure parole que j&apos;ai dite, moi et les proph\u00e8tes avant moi, est : Il n&apos;y a de divinit\u00e9 qu&apos;Allah, Seul, sans associ\u00e9. \u00c0 Lui la royaut\u00e9, \u00e0 Lui la louange, et Il est Omnipotent sur toute chose."
                  source="Jami&apos; at-Tirmidhi, n\u00b03585"
                  grade="hasan"
                  explanation="Le jour d&apos;Arafat est le pilier central du hajj. Le Proph\u00e8te \ufdfa a d\u00e9sign\u00e9 ce jour comme le sommet de l&apos;invocation, et il a choisi le tawhid comme meilleure parole. Ce hadith enseigne que l&apos;invocation d&apos;Arafat n&apos;est pas seulement une demande : c&apos;est d&apos;abord une affirmation de l&apos;unicit\u00e9 divine. Le p\u00e8lerin est invit\u00e9 \u00e0 multiplier cette formule tout au long de l&apos;apr\u00e8s-midi d&apos;Arafat, puis \u00e0 y ajouter ses douas personnelles. C&apos;est un moment o\u00f9 Allah descend au ciel le plus bas et se glorifie aupr\u00e8s des anges de ces p\u00e8lerins."
                />

                <HadithBlock
                  number={9}
                  title="La lapidation des jamarat est un rappel d&apos;Allah"
                  narrator="Aisha"
                  arabic="\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627 \u062c\u064f\u0639\u0650\u0644\u064e \u0627\u0644\u0637\u0651\u064e\u0648\u064e\u0627\u0641\u064f \u0628\u0650\u0627\u0644\u0652\u0628\u064e\u064a\u0652\u062a\u0650 \u0648\u064e\u0628\u064e\u064a\u0652\u0646\u064e \u0627\u0644\u0635\u0651\u064e\u0641\u064e\u0627 \u0648\u064e\u0627\u0644\u0652\u0645\u064e\u0631\u0652\u0648\u064e\u0629\u0650 \u0648\u064e\u0631\u064e\u0645\u0652\u064a\u064f \u0627\u0644\u0652\u062c\u0650\u0645\u064e\u0627\u0631\u0650 \u0644\u0650\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629\u0650 \u0630\u0650\u0643\u0652\u0631\u0650 \u0627\u0644\u0644\u064e\u0651\u0647\u0650"
                  translation="Le tawaf autour de la Maison, la marche entre As-Safa et Al-Marwa et la lapidation des jamarat n&apos;ont \u00e9t\u00e9 institu\u00e9s que pour l&apos;\u00e9tablissement du rappel d&apos;Allah."
                  source="Sunan Abu Dawud, n\u00b01888 \u2014 Jami&apos; at-Tirmidhi, n\u00b0902"
                  grade="sahih"
                  explanation="Ce hadith r\u00e9v\u00e8le la finalit\u00e9 profonde de tous les rites du p\u00e8lerinage : le dhikr d&apos;Allah. Le tawaf, le sa&apos;y et le ramy (lapidation) ne sont pas de simples gestes rituels m\u00e9caniques. Chacun est un vecteur de rappel divin. Les savants insistent sur le fait que le p\u00e8lerin doit rester conscient de cette finalit\u00e9 spirituelle pendant chaque rite, en accompagnant ses gestes d&apos;invocations, de takbir et de m\u00e9ditation. La lapidation des jamarat symbolise le rejet de Satan, \u00e0 l&apos;image d&apos;Ibrahim qui rejeta les tentations d&apos;Iblis."
                />

                <HadithBlock
                  number={10}
                  title="L&apos;eau de Zamzam est pour ce pourquoi elle est bue"
                  narrator="Jabir ibn &apos;Abd Allah"
                  arabic="\u0645\u064e\u0627\u0621\u064f \u0632\u064e\u0645\u0652\u0632\u064e\u0645\u064e \u0644\u0650\u0645\u064e\u0627 \u0634\u064f\u0631\u0650\u0628\u064e \u0644\u064e\u0647\u064f"
                  translation="L&apos;eau de Zamzam est pour ce pourquoi elle est bue."
                  source="Sunan Ibn Majah, n\u00b03062"
                  grade="hasan"
                  explanation="Ce hadith enseigne que l&apos;eau de Zamzam a une b\u00e9n\u00e9diction particuli\u00e8re li\u00e9e \u00e0 l&apos;intention de celui qui la boit. Si le p\u00e8lerin la boit en demandant la gu\u00e9rison, la science, la subsistance ou le pardon, il peut esp\u00e9rer l&apos;exaucement de sa demande par la permission d&apos;Allah. Ibn al-Qayyim rapporte qu&apos;il buvait l&apos;eau de Zamzam en demandant la science utile, et qu&apos;il y trouvait une ouverture. Le Proph\u00e8te \ufdfa a \u00e9galement dit que Zamzam est &laquo;&nbsp;une nourriture qui rassasie et un rem\u00e8de contre la maladie&nbsp;&raquo; (rapporté par al-Bazzar)."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="\u00c9tudiez les rites du hajj et de la omra, le fiqh du p\u00e8lerinage et la jurisprudence islamique avec des professeurs qualifi\u00e9s."
                href="/apprendre-science-religieuse-islam"
                linkText="D\u00e9couvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Rites et invocations */}
              {/* ============================== */}
              <section id="rites-invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hadiths sur les rites et invocations du p\u00e8lerinage
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-del\u00e0 des m\u00e9rites g\u00e9n\u00e9raux, le Proph\u00e8te \ufdfa a d\u00e9taill\u00e9 les rites sp\u00e9cifiques du hajj et de la omra. Les hadiths suivants compl\u00e8tent le tableau en \u00e9clairant la dimension pratique et spirituelle du jour d&apos;Arafat et de l&apos;affranchissement du Feu.
                </p>

                <HadithBlock
                  number={11}
                  title="Le jour d&apos;Arafat : Allah lib\u00e8re du Feu"
                  narrator="Aisha"
                  arabic="\u0645\u064e\u0627 \u0645\u0650\u0646\u0652 \u064a\u064e\u0648\u0652\u0645\u064d \u0623\u064e\u0643\u0652\u062b\u064e\u0631\u064e \u0645\u0650\u0646\u0652 \u0623\u064e\u0646\u0652 \u064a\u064f\u0639\u0652\u062a\u0650\u0642\u064e \u0627\u0644\u0644\u064e\u0651\u0647\u064f \u0641\u0650\u064a\u0647\u0650 \u0639\u064e\u0628\u0652\u062f\u064b\u0627 \u0645\u0650\u0646\u064e \u0627\u0644\u0646\u0651\u064e\u0627\u0631\u0650 \u0645\u0650\u0646\u0652 \u064a\u064e\u0648\u0652\u0645\u0650 \u0639\u064e\u0631\u064e\u0641\u064e\u0629\u064e\u060c \u0648\u064e\u0625\u0650\u0646\u0651\u064e\u0647\u064f \u0644\u064e\u064a\u064e\u062f\u0652\u0646\u064f\u0648 \u062b\u064f\u0645\u0651\u064e \u064a\u064f\u0628\u064e\u0627\u0647\u0650\u064a \u0628\u0650\u0647\u0650\u0645\u064f \u0627\u0644\u0652\u0645\u064e\u0644\u064e\u0627\u0626\u0650\u0643\u064e\u0629\u064e"
                  translation="Il n&apos;y a pas de jour o\u00f9 Allah lib\u00e8re autant de Ses serviteurs du Feu que le jour d&apos;Arafat. Il Se rapproche puis Se glorifie d&apos;eux aupr\u00e8s des anges."
                  source="Sahih Muslim, n\u00b01348"
                  grade="sahih"
                  explanation="Ce hadith souligne la grandeur incomparable du jour d&apos;Arafat. C&apos;est le jour o\u00f9 la mis\u00e9ricorde divine atteint son apog\u00e9e pendant le hajj. Allah Se rapproche de Ses serviteurs et Se glorifie d&apos;eux aupr\u00e8s des anges, ce qui t\u00e9moigne de Sa satisfaction envers ces p\u00e8lerins. Les savants recommandent de multiplier les douas, le dhikr et le repentir pendant l&apos;apr\u00e8s-midi d&apos;Arafat, car c&apos;est un moment d&apos;exaucement privil\u00e9gi\u00e9. Ce hadith s&apos;applique aussi \u00e0 ceux qui je\u00fbnent le jour d&apos;Arafat en dehors du hajj."
                />

                <HadithBlock
                  number={12}
                  title="Les p\u00e8lerins sont les h\u00f4tes d&apos;Allah"
                  narrator="Abu Hurayra"
                  arabic="\u0627\u0644\u0652\u062d\u064f\u062c\u0651\u064e\u0627\u062c\u064f \u0648\u064e\u0627\u0644\u0652\u0639\u064f\u0645\u0651\u064e\u0627\u0631\u064f \u0648\u064e\u0641\u0652\u062f\u064f \u0627\u0644\u0644\u064e\u0651\u0647\u0650\u060c \u0625\u0650\u0646\u0652 \u062f\u064e\u0639\u064e\u0648\u0652\u0647\u064f \u0623\u064e\u062c\u064e\u0627\u0628\u064e\u0647\u064f\u0645\u0652\u060c \u0648\u064e\u0625\u0650\u0646\u0652 \u0627\u0633\u0652\u062a\u064e\u063a\u0652\u0641\u064e\u0631\u064f\u0648\u0647\u064f \u063a\u064e\u0641\u064e\u0631\u064e \u0644\u064e\u0647\u064f\u0645\u0652"
                  translation="Ceux qui accomplissent le hajj et la omra sont les h\u00f4tes d&apos;Allah. S&apos;ils L&apos;invoquent, Il les exauce. Et s&apos;ils Lui demandent pardon, Il leur pardonne."
                  source="Sunan Ibn Majah, n\u00b02893 \u2014 Sunan An-Nasa&apos;i, n\u00b02625"
                  grade="hasan"
                  explanation="Ce hadith conf\u00e8re aux p\u00e8lerins un statut d&apos;honneur : ils sont les invit\u00e9s d&apos;Allah. Comme un h\u00f4te g\u00e9n\u00e9reux accorde \u00e0 ses invit\u00e9s ce qu&apos;ils demandent, Allah exauce les p\u00e8lerins et leur pardonne. Ce hadith encourage les p\u00e8lerins \u00e0 multiplier les invocations et les demandes de pardon pendant tout le voyage, car ils sont dans une position privil\u00e9gi\u00e9e d&apos;exaucement. Il \u00e9tablit \u00e9galement que la omra partage ce statut avec le hajj."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le hajj et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment comment\u00e9 les hadiths sur le hajj et la omra. Leurs explications permettent de mieux saisir la port\u00e9e juridique et spirituelle de ces enseignements proph\u00e9tiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hajj mabrur est celui dans lequel le serviteur ne commet aucun p\u00e9ch\u00e9. Il est dit aussi que c&apos;est celui apr\u00e8s lequel le p\u00e8lerin ne retourne pas aux p\u00e9ch\u00e9s. Le signe du hajj mabrur est que le serviteur revient meilleur qu&apos;il n&apos;\u00e9tait parti, et qu&apos;il d\u00e9laisse les p\u00e9ch\u00e9s qu&apos;il commettait auparavant.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le jour d&apos;Arafat est le jour le plus grand du hajj, c&apos;est le jour du grand rassemblement et de la grande mis\u00e9ricorde. Allah y regarde les gens d&apos;Arafat et pardonne \u00e0 tous ceux qui sont pr\u00e9sents. C&apos;est pour cela que le hajj est Arafat, comme l&apos;a dit le Proph\u00e8te \ufdfa.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hajj contient une sagesse immense : il r\u00e9unit les musulmans de toutes les contr\u00e9es, les rapproche dans la fraternit\u00e9 et les \u00e9galit\u00e9 devant Allah, v\u00eatus du m\u00eame habit, invoquant le m\u00eame Seigneur, accomplissant les m\u00eames rites. C&apos;est la plus grande manifestation de l&apos;unit\u00e9 de la Oumma.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur le hajj et la omra ne sont pas de simples recommandations morales : ils constituent le fondement d&apos;un corpus juridique (<em>fiqh al-manasik</em>) \u00e9labor\u00e9 par les quatre \u00e9coles de jurisprudence. Chaque hadith cit\u00e9 dans cet article est utilis\u00e9 par les fuqaha pour d\u00e9duire des r\u00e8gles pratiques sur les rites du p\u00e8lerinage, ses conditions de validit\u00e9 et ses m\u00e9rites.
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
                  L&apos;ensemble des hadiths pr\u00e9sent\u00e9s dans cet article permet de d\u00e9gager des le\u00e7ons concr\u00e8tes pour le p\u00e8lerin et pour tout musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas retarder le hajj obligatoire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hajj est un pilier de l&apos;islam. Celui qui en a les moyens doit s&apos;empresser de l&apos;accomplir, car nul ne sait ce que demain lui r\u00e9serve en termes de sant\u00e9 ou de moyens financiers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Viser le hajj mabrur par la sinc\u00e9rit\u00e9 et la discipline
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hajj mabrur exige une intention pure, un financement licite, l&apos;absence de p\u00e9ch\u00e9s et de disputes, et un changement de comportement apr\u00e8s le retour. C&apos;est la condition pour obtenir la r\u00e9compense du Paradis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier les omras comme acte de purification
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La omra efface les p\u00e9ch\u00e9s commis entre deux omras. C&apos;est un acte accessible tout au long de l&apos;ann\u00e9e, particuli\u00e8rement m\u00e9ritoire en Ramadan o\u00f9 elle \u00e9quivaut \u00e0 un hajj en r\u00e9compense.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Comprendre la finalit\u00e9 spirituelle de chaque rite
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le tawaf, le sa&apos;y et la lapidation des jamarat n&apos;ont \u00e9t\u00e9 institu\u00e9s que pour l&apos;\u00e9tablissement du rappel d&apos;Allah. Le p\u00e8lerin doit rester conscient de cette finalit\u00e9 et accompagner chaque geste de dhikr et de m\u00e9ditation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Saisir le jour d&apos;Arafat comme un moment de pardon
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le jour d&apos;Arafat est le plus grand jour du hajj. Le p\u00e8lerin doit y multiplier les invocations, le dhikr et le repentir. C&apos;est le jour o\u00f9 Allah lib\u00e8re le plus grand nombre de Ses serviteurs du Feu.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        \u00catre g\u00e9n\u00e9reux dans les d\u00e9penses du hajj
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque d\u00e9pense li\u00e9e au hajj est multipli\u00e9e par sept cents. Le p\u00e8lerin ne doit pas l\u00e9siner sur les d\u00e9penses n\u00e9cessaires ni h\u00e9siter \u00e0 faire l&apos;aum\u00f4ne pendant son voyage.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le hajj et la omra dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la pri\u00e8re en islam"
                  description="D\u00e9couvrez les hadiths authentiques sur la pri\u00e8re, deuxi\u00e8me pilier de l&apos;islam apr\u00e8s la shahada."
                  href="/hadith-priere-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le Ramadan en islam"
                  description="Les enseignements proph\u00e9tiques sur le je\u00fbne, le Ramadan et la omra pendant ce mois b\u00e9ni."
                  href="/hadith-ramadan-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur les ablutions et la puret\u00e9 en islam"
                  description="Les hadiths authentiques sur le wudu, la purification et la puret\u00e9 rituelle, pr\u00e9alable \u00e0 tout acte d&apos;adoration."
                  href="/hadith-ablutions-purete-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
