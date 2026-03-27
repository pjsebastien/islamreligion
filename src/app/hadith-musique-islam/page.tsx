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
    "Hadiths sur la musique en islam : statut, instruments et chant",
  description:
    "Que disent les hadiths authentiques sur la musique en islam ? Statut des instruments, duff autoris\u00e9, nashid, chant et divergences des savants. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur la musique en islam : statut, instruments et chant",
    description:
      "Les hadiths sur la musique en islam : interdiction des instruments, permission du duff, chant (nashid) et avis des savants. Texte arabe et traduction fran\u00e7aise.",
    url: "https://www.islamreligion.fr/hadith-musique-islam",
    images: [
      {
        url: "/images/motifs-geometriques-islam-croissant-etoile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-musique-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "interdiction-instruments", label: "L\u2019interdiction des instruments" },
  { id: "duff-autorise", label: "Le duff (tambourin) autoris\u00e9" },
  { id: "chant-nashid", label: "Le chant (nashid) et la belle voix" },
  { id: "divergences", label: "Les divergences savantes" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "La musique est-elle haram en islam ?",
    answer:
      "La majorit\u00e9 des savants des quatre \u00e9coles juridiques (hanafite, malikite, shafi\u2019ite, hanbalite) consid\u00e8rent que les instruments de musique sont interdits (haram), en se fondant sur les hadiths du Prophète \u2018alayhi salatu wa salam, notamment celui de Sahih Al-Bukhari n\u00b05590. Cependant, une minorit\u00e9 de savants, dont Ibn Hazm et certains malikites, consid\u00e8rent que l\u2019interdiction n\u2019est pas \u00e9tablie de mani\u00e8re cat\u00e9gorique.",
  },
  {
    question:
      "Le duff (tambourin) est-il autoris\u00e9 en islam ?",
    answer:
      "Oui, le duff (tambourin \u00e0 une face) est autoris\u00e9 par consensus des savants lors des mariages et des f\u00eates (A\u00efd). Plusieurs hadiths authentiques rapport\u00e9s par Aisha et Anas ibn Malik confirment que le Proph\u00e8te \ufefb a permis et m\u00eame encourag\u00e9 l\u2019usage du duff dans ces occasions. Certains savants \u00e9tendent cette permission \u00e0 d\u2019autres occasions joyeuses.",
  },
  {
    question:
      "Le chant (nashid) sans instrument est-il permis en islam ?",
    answer:
      "Le chant sans instrument de musique (nashid ou anashid) est g\u00e9n\u00e9ralement consid\u00e9r\u00e9 comme permis par les savants, \u00e0 condition que les paroles soient d\u00e9centes et ne contiennent pas de propos ind\u00e9cents, d\u2019appel au p\u00e9ch\u00e9 ou de musique instrumentale. Le Proph\u00e8te \ufefb a lui-m\u00eame \u00e9cout\u00e9 des chants lors de f\u00eates et a encourage la r\u00e9citation m\u00e9lodieuse du Coran.",
  },
  {
    question:
      "Quels sont les hadiths les plus importants sur la musique ?",
    answer:
      "Les hadiths les plus cit\u00e9s sur la musique sont : le hadith de Sahih Al-Bukhari n\u00b05590 sur l\u2019interdiction des instruments de musique (ma\u2019azif), le hadith de Sahih Al-Bukhari n\u00b0952 sur les jeunes filles jouant du duff le jour de l\u2019A\u00efd, et le hadith de Sunan Abu Dawud n\u00b04927 sur l\u2019ordre du Proph\u00e8te \ufefb d\u2019annoncer le mariage avec le duff.",
  },
  {
    question:
      "Peut-on \u00e9couter de la musique pendant le Ramadan ?",
    answer:
      "Les savants qui consid\u00e8rent la musique instrumentale comme interdite (haram) la consid\u00e8rent interdite en tout temps, pas seulement pendant le Ramadan. Ceux qui la permettent sous conditions l\u2019autorisent \u00e9galement pendant le Ramadan. Il n\u2019existe pas de hadith sp\u00e9cifique renfor\u00e7ant l\u2019interdiction pendant ce mois, mais les savants recommandent de consacrer ce mois b\u00e9ni \u00e0 la r\u00e9citation du Coran et au rappel d\u2019Allah.",
  },
  {
    question:
      "Quelle est la diff\u00e9rence entre le duff et le tambour ?",
    answer:
      "Le duff (\u062f\u064f\u0641\u0651) est un tambourin \u00e0 une seule face, sans cymbales ni grelots, utilis\u00e9 dans la tradition arabe pour les c\u00e9l\u00e9brations. Le tambour (tabl, \u0637\u0628\u0644) est un instrument \u00e0 deux faces. Les savants qui autorisent le duff le distinguent des autres instruments de percussion : seul le duff \u00e0 une face est explicitement mentionn\u00e9 dans les hadiths comme permis.",
  },
];

export default function HadithMusiqueIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-musique-islam/#article",
        headline:
          "Hadiths sur la musique en islam : statut, instruments et chant",
        description:
          "Que disent les hadiths authentiques sur la musique en islam ? Statut des instruments, duff autoris\u00e9, nashid, chant et divergences des savants.",
        image: "/images/motifs-geometriques-islam-croissant-etoile.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-musique-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-musique-islam/#breadcrumb",
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
            name: "Musique en islam",
            item: "https://www.islamreligion.fr/hadith-musique-islam",
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
          title="Hadiths sur la musique en islam"
          subtitle="Statut des instruments de musique, permission du duff, chant (nashid) et divergences des savants : les enseignements proph\u00e9tiques authentiques sur la musique."
          imageSrc="/images/motifs-geometriques-islam-croissant-etoile.jpg"
          imageAlt="Hadiths sur la musique en islam, statut des instruments et chant"
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
                  Musique en islam
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
                    La majorit\u00e9 des savants consid\u00e8rent les instruments de musique (<em>ma&apos;azif</em>) comme interdits, en se fondant sur des hadiths authentiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le duff (tambourin \u00e0 une face) est autoris\u00e9 par consensus pour les mariages et les f\u00eates, conform\u00e9ment \u00e0 la Sunna.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le chant (nashid) sans instrument est g\u00e9n\u00e9ralement permis, \u00e0 condition que les paroles soient d\u00e9centes et ne m\u00e8nent pas au p\u00e9ch\u00e9.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Une minorit\u00e9 de savants autorise certaines formes de musique sous conditions. La question fait l&apos;objet d&apos;une divergence l\u00e9gitime (<em>ikhtilaf</em>).
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique sur la musique et le divertissement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;examiner les hadiths sur la musique, il est essentiel de revenir au Coran. Bien que le Livre saint ne mentionne pas le mot &laquo;&nbsp;musique&nbsp;&raquo; (<em>musiqa</em>) explicitement, les exeg\u00e8tes ont identifi\u00e9 un verset central dans ce d\u00e9bat. La majorit\u00e9 des mufassirin (commentateurs du Coran) ont interpr\u00e9t\u00e9 l&apos;expression &laquo;&nbsp;paroles futiles&nbsp;&raquo; (<em>lahw al-hadith</em>) comme incluant le chant accompagn\u00e9 d&apos;instruments de musique, bien que d&apos;autres interpr\u00e9tations existent.
                </p>

                <HadithCard
                  arabic="\u0648\u0645\u0650\u0646\u064e \u0627\u0644\u0646\u0651\u064e\u0627\u0633\u0650 \u0645\u064e\u0646 \u064a\u064e\u0634\u0652\u062a\u064e\u0631\u0650\u064a \u0644\u064e\u0647\u0652\u0648\u064e \u0627\u0644\u0652\u062d\u064e\u062f\u0650\u064a\u062b\u0650 \u0644\u0650\u064a\u064f\u0636\u0650\u0644\u0651\u064e \u0639\u064e\u0646 \u0633\u064e\u0628\u0650\u064a\u0644\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0628\u0650\u063a\u064e\u064a\u0652\u0631\u0650 \u0639\u0650\u0644\u0652\u0645\u064d \u0648\u064e\u064a\u064e\u062a\u0651\u064e\u062e\u0650\u0630\u064e\u0647\u064e\u0627 \u0647\u064f\u0632\u064f\u0648\u064b\u0627 \u0623\u064f\u0648\u0644\u064e\u0640\u0640\u0640\u0670\u0626\u0650\u0643\u064e \u0644\u064e\u0647\u064f\u0645\u0652 \u0639\u064e\u0630\u064e\u0627\u0628\u064c \u0645\u0651\u064f\u0647\u0650\u064a\u0646\u064c"
                  text="Et parmi les hommes, il en est qui ach\u00e8tent des paroles futiles pour \u00e9garer du sentier d&apos;Allah sans science et pour le prendre en raillerie. Ceux-l\u00e0 auront un ch\u00e2timent humiliant."
                  source="Coran, sourate Luqman (31:6)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le compagnon Ibn Mas&apos;ud a jur\u00e9 par Allah que &laquo;&nbsp;les paroles futiles&nbsp;&raquo; d\u00e9signent le chant (<em>al-ghina&apos;</em>). Ibn Abbas, Jabir et Ikrima ont rapport\u00e9 une interpr\u00e9tation similaire. Cependant, d&apos;autres savants, comme Al-Hasan Al-Basri, ont \u00e9largi le sens \u00e0 tout ce qui d\u00e9tourne du rappel d&apos;Allah. Il est important de noter que ce verset ne vise pas le chant en soi, mais le chant utilis\u00e9 pour &laquo;&nbsp;\u00e9garer du sentier d&apos;Allah&nbsp;&raquo;. C&apos;est cette intention d&apos;\u00e9garement qui est bl\u00e2m\u00e9e.
                </p>
              </section>

              {/* ============================================= */}
              {/* SECTION : Interdiction des instruments        */}
              {/* ============================================= */}
              <section id="interdiction-instruments" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les hadiths sur l&apos;interdiction des instruments de musique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Plusieurs hadiths traitent de l&apos;interdiction des instruments de musique (<em>ma&apos;azif</em>). Ces textes constituent le fondement principal de l&apos;avis majoritaire parmi les savants. Le terme <em>ma&apos;azif</em> d\u00e9signe, selon les linguistes arabes, l&apos;ensemble des instruments de musique utilis\u00e9s pour le divertissement.
                </p>

                <HadithBlock
                  number={1}
                  title="Il y aura des gens qui rendront licites les instruments de musique"
                  narrator="Abu Malik al-Ash&apos;ari"
                  arabic="\u0644\u064e\u064a\u064e\u0643\u064f\u0648\u0646\u064e\u0646\u0651\u064e \u0645\u0650\u0646\u0652 \u0623\u064f\u0645\u0651\u064e\u062a\u0650\u064a \u0623\u064e\u0642\u0652\u0648\u064e\u0627\u0645\u064c \u064a\u064e\u0633\u0652\u062a\u064e\u062d\u0650\u0644\u0651\u064f\u0648\u0646\u064e \u0627\u0644\u0652\u062d\u0650\u0631\u064e \u0648\u064e\u0627\u0644\u0652\u062d\u064e\u0631\u0650\u064a\u0631\u064e \u0648\u064e\u0627\u0644\u0652\u062e\u064e\u0645\u0652\u0631\u064e \u0648\u064e\u0627\u0644\u0652\u0645\u064e\u0639\u064e\u0627\u0632\u0650\u0641\u064e"
                  translation="Il y aura parmi ma communaut\u00e9 des gens qui rendront licites la fornication, la soie, le vin et les instruments de musique."
                  source="Sahih Al-Bukhari, n\u00b05590"
                  grade="sahih"
                  explanation="Ce hadith est le plus cit\u00e9 dans le d\u00e9bat sur la musique. Le Proph\u00e8te \ufefb pr\u00e9dit qu&apos;une partie de sa communaut\u00e9 rendra licites des choses interdites, parmi lesquelles les <em>ma&apos;azif</em> (instruments de musique). Le fait de mentionner les instruments aux c\u00f4t\u00e9s de la fornication et du vin indique, selon les savants de la majorit\u00e9, leur caract\u00e8re illicite. L&apos;imam Ibn Hajar al-Asqalani a authentifi\u00e9 ce hadith dans <em>Fath al-Bari</em> et r\u00e9fut\u00e9 ceux qui le contestent."
                />

                <HadithBlock
                  number={2}
                  title="Le Proph\u00e8te \ufefb a interdit le tambour et la fl\u00fbte"
                  narrator="Nafi&apos; ibn al-Harith"
                  arabic="\u0646\u064e\u0647\u064e\u0649 \u0631\u064e\u0633\u064f\u0648\u0644\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0635\u064e\u0644\u0651\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0648\u064e\u0633\u064e\u0644\u0651\u064e\u0645\u064e \u0639\u064e\u0646\u0650 \u0627\u0644\u0643\u064f\u0648\u0628\u064e\u0629\u0650 \u0648\u064e\u0627\u0644\u063a\u064f\u0628\u064e\u064a\u0652\u0631\u064e\u0627\u0621\u0650"
                  translation="Le Messager d&apos;Allah \ufefb a interdit le kouba (tambour \u00e0 deux faces) et la ghubayra&apos; (un type de boisson enivrante)."
                  source="Musnad Ahmad, n\u00b015533 ; An-Nasa&apos;i dans As-Sunan Al-Kubra"
                  grade="sahih"
                  explanation="Ce hadith montre une interdiction sp\u00e9cifique du tambour \u00e0 deux faces (<em>kouba</em>), distinct du duff \u00e0 une face qui est permis. Les savants ont utilis\u00e9 ce hadith pour distinguer les instruments autoris\u00e9s de ceux qui ne le sont pas. L&apos;interdiction du kouba est rapport\u00e9e \u00e9galement par d&apos;autres voies, ce qui renforce son authenticit\u00e9."
                />

                <HadithBlock
                  number={3}
                  title="Allah m&apos;a envoy\u00e9 pour d\u00e9truire les instruments de musique"
                  narrator="Abu Umama al-Bahili"
                  arabic="\u0625\u0650\u0646\u0651\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u0628\u064e\u0639\u064e\u062b\u064e\u0646\u0650\u064a \u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064b \u0644\u0650\u0644\u0652\u0639\u064e\u0627\u0644\u064e\u0645\u0650\u064a\u0646\u064e \u0648\u064e\u0623\u064e\u0645\u064e\u0631\u064e\u0646\u0650\u064a \u0628\u0650\u0645\u064e\u062d\u0652\u0642\u0650 \u0627\u0644\u0652\u0645\u064e\u0639\u064e\u0627\u0632\u0650\u0641\u0650 \u0648\u064e\u0627\u0644\u0652\u0645\u064e\u0632\u064e\u0627\u0645\u0650\u064a\u0631\u0650"
                  translation="Allah m&apos;a envoy\u00e9 comme mis\u00e9ricorde pour les mondes, et m&apos;a ordonn\u00e9 de d\u00e9truire les instruments de musique et les fl\u00fbtes."
                  source="Musnad Ahmad, n\u00b022307"
                  grade="daif"
                  explanation="Ce hadith est rapport\u00e9 avec une cha\u00eene de transmission contenant des rapporteurs contest\u00e9s. Certains savants, dont Al-Albani, l&apos;ont class\u00e9 comme faible (<em>da&apos;if</em>). Cependant, d&apos;autres l&apos;ont renforc\u00e9 par des cha\u00eenes compl\u00e9mentaires. Ind\u00e9pendamment de son grade, les savants qui interdisent la musique s&apos;appuient principalement sur le hadith de Bukhari (n\u00b05590) qui est authentique. Ce hadith est cit\u00e9 ici pour illustrer la diversit\u00e9 des textes sur le sujet."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths constituent le socle de l&apos;avis majoritaire sur l&apos;interdiction des instruments de musique. Toutefois, la question ne se r\u00e9duit pas \u00e0 une interdiction totale : les hadiths suivants montrent que certaines formes de musique sont explicitement permises. Pour d\u00e9couvrir d&apos;autres enseignements proph\u00e9tiques, consultez notre article sur les{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du Proph\u00e8te Muhammad \ufefb
                  </Link>.
                </p>
              </section>

              {/* ============================================= */}
              {/* SECTION : Le duff autoris\u00e9                     */}
              {/* ============================================= */}
              <section id="duff-autorise" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le duff (tambourin) autoris\u00e9 pour les f\u00eates et mariages
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si les instruments de musique sont g\u00e9n\u00e9ralement interdits selon l&apos;avis majoritaire, le duff (tambourin \u00e0 une face, sans grelots) fait exception. De nombreux hadiths authentiques attestent que le Proph\u00e8te \ufefb a non seulement tol\u00e9r\u00e9 mais encourag\u00e9 l&apos;usage du duff lors des mariages et des jours de f\u00eate.
                </p>

                <HadithBlock
                  number={4}
                  title="Les deux jeunes filles chantaient le jour de l&apos;A\u00efd"
                  narrator="Aisha"
                  arabic="\u062f\u064e\u062e\u064e\u0644\u064e \u0639\u064e\u0644\u064e\u064a\u0651\u064e \u0623\u064e\u0628\u064f\u0648 \u0628\u064e\u0643\u0652\u0631\u064d \u0648\u064e\u0639\u0650\u0646\u0652\u062f\u0650\u064a \u062c\u064e\u0627\u0631\u0650\u064a\u064e\u062a\u064e\u0627\u0646\u0650 \u0645\u0650\u0646\u0652 \u062c\u064e\u0648\u064e\u0627\u0631\u0650\u064a \u0627\u0644\u0623\u064e\u0646\u0652\u0635\u064e\u0627\u0631\u0650 \u062a\u064f\u063a\u064e\u0646\u0651\u0650\u064a\u064e\u0627\u0646\u0650 \u0628\u0650\u0645\u064e\u0627 \u062a\u064e\u0642\u064e\u0627\u0648\u064e\u0644\u064e\u062a\u0650 \u0628\u0650\u0647\u0650 \u0627\u0644\u0623\u064e\u0646\u0652\u0635\u064e\u0627\u0631\u064f \u064a\u064e\u0648\u0652\u0645\u064e \u0628\u064f\u0639\u064e\u0627\u062b\u064e \u0641\u064e\u0642\u064e\u0627\u0644\u064e \u0623\u064e\u0628\u064f\u0648 \u0628\u064e\u0643\u0652\u0631\u064d \u0623\u064e\u0645\u064e\u0632\u064e\u0627\u0645\u0650\u064a\u0631\u064f \u0627\u0644\u0634\u0651\u064e\u064a\u0652\u0637\u064e\u0627\u0646\u0650 \u0641\u064e\u0642\u064e\u0627\u0644\u064e \u0627\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u064f \u062f\u064e\u0639\u0652\u0647\u064f\u0645\u064e\u0627 \u064a\u064e\u0627 \u0623\u064e\u0628\u064e\u0627 \u0628\u064e\u0643\u0652\u0631\u064d \u0641\u064e\u0625\u0650\u0646\u0651\u064e \u0644\u0650\u0643\u064f\u0644\u0651\u0650 \u0642\u064e\u0648\u0652\u0645\u064d \u0639\u0650\u064a\u062f\u064b\u0627"
                  translation="Abu Bakr entra chez moi alors que deux jeunes filles des Ansars chantaient des po\u00e8mes que les Ansars avaient r\u00e9cit\u00e9s le jour de Bu&apos;ath. Abu Bakr dit : \u00ab Des fl\u00fbtes de Shaytan ! \u00bb Le Proph\u00e8te \ufefb dit : \u00ab Laisse-les, \u00f4 Abu Bakr, car chaque peuple a son jour de f\u00eate. \u00bb"
                  source="Sahih Al-Bukhari, n\u00b0952 \u2014 Sahih Muslim, n\u00b0892"
                  grade="sahih"
                  explanation="Ce hadith est fondamental pour comprendre la position nuanc\u00e9e de l&apos;islam sur le chant et la musique. Abu Bakr, connu pour sa pi\u00e9t\u00e9 stricte, voulait interdire le chant chez le Proph\u00e8te \ufefb. Mais le Messager d&apos;Allah l&apos;a corrig\u00e9 en expliquant que les jours de f\u00eate sont des occasions o\u00f9 la r\u00e9jouissance est l\u00e9gitime. Dans d&apos;autres versions du hadith, il est pr\u00e9cis\u00e9 que les jeunes filles jouaient du duff. Les savants en d\u00e9duisent la permission du duff et du chant lors des f\u00eates islamiques."
                />

                <HadithBlock
                  number={5}
                  title="Annoncez le mariage et jouez du duff"
                  narrator="Muhammad ibn Hatib"
                  arabic="\u0641\u064e\u0635\u0652\u0644\u064f \u0645\u064e\u0627 \u0628\u064e\u064a\u0652\u0646\u064e \u0627\u0644\u0652\u062d\u064e\u0644\u064e\u0627\u0644\u0650 \u0648\u064e\u0627\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650 \u0627\u0644\u062f\u0651\u064f\u0641\u0651\u064f \u0648\u064e\u0627\u0644\u0635\u0651\u064e\u0648\u0652\u062a\u064f \u0641\u0650\u064a \u0627\u0644\u0646\u0651\u0650\u0643\u064e\u0627\u062d\u0650"
                  translation="Ce qui distingue le licite de l&apos;illicite, c&apos;est le duff et la voix (\u00e9lev\u00e9e) lors du mariage."
                  source="Jami&apos; at-Tirmidhi, n\u00b01088 \u2014 An-Nasa&apos;i, n\u00b03369"
                  grade="hasan"
                  explanation="Ce hadith \u00e9tablit une r\u00e8gle juridique majeure : le duff et l&apos;annonce publique distinguent le mariage licite du mariage secret (qui est r\u00e9prouv\u00e9 en islam). Le Proph\u00e8te \ufefb fait du duff un marqueur de la l\u00e9galit\u00e9 du mariage. Les savants en tirent deux enseignements : premierement, le duff est permis lors des mariages ; deuxiemement, la publicit\u00e9 du mariage est une condition de sa validit\u00e9 ou, a minima, une sunna fortement recommand\u00e9e."
                />

                <HadithBlock
                  number={6}
                  title="Le Proph\u00e8te \ufefb demande s&apos;ils ont envoy\u00e9 une jeune fille avec le duff"
                  narrator="Aisha"
                  arabic="\u0623\u064e\u0647\u0652\u062f\u064e\u064a\u0652\u062a\u064f\u0645\u064f \u0627\u0644\u0652\u062c\u064e\u0627\u0631\u0650\u064a\u064e\u0629\u064e \u0625\u0650\u0644\u064e\u0649 \u0632\u064e\u0648\u0652\u062c\u0650\u0647\u064e\u0627\u061f \u0642\u064e\u0627\u0644\u064f\u0648\u0627 \u0646\u064e\u0639\u064e\u0645\u0652. \u0642\u064e\u0627\u0644\u064e \u0641\u064e\u0647\u064e\u0644\u0652 \u0628\u064e\u0639\u064e\u062b\u0652\u062a\u064f\u0645\u0652 \u0645\u064e\u0639\u064e\u0647\u064e\u0627 \u062c\u064e\u0627\u0631\u0650\u064a\u064e\u0629\u064b \u062a\u064e\u0636\u0652\u0631\u0650\u0628\u064f \u0628\u0650\u0627\u0644\u062f\u0651\u064f\u0641\u0651\u0650 \u0648\u064e\u062a\u064f\u063a\u064e\u0646\u0651\u0650\u064a\u061f"
                  translation="Avez-vous accompagn\u00e9 la mari\u00e9e jusqu&apos;\u00e0 son \u00e9poux ? Ils r\u00e9pondirent : Oui. Il dit : Avez-vous envoy\u00e9 avec elle une jeune fille qui joue du duff et qui chante ?"
                  source="Sunan Ibn Majah, n\u00b01900"
                  grade="hasan"
                  explanation="Ce hadith montre que le Proph\u00e8te \ufefb ne se contentait pas de tol\u00e9rer le duff : il s&apos;\u00e9tonnait de son absence lors des mariages. Cela indique que le duff et le chant lors du mariage ne sont pas simplement permis mais activement recommand\u00e9s. L&apos;objectif est de c\u00e9l\u00e9brer publiquement cette union et de r\u00e9pandre la joie dans la communaut\u00e9. Les savants y voient la preuve que la joie ma\u00eetris\u00e9e a sa place dans la pratique islamique."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="\u00c9tudiez le fiqh, les hadiths et la jurisprudence islamique avec des professeurs qualifi\u00e9s."
                href="/apprendre-science-religieuse-islam"
                linkText="D\u00e9couvrir la formation"
              />

              {/* ============================================= */}
              {/* SECTION : Chant et nashid                     */}
              {/* ============================================= */}
              <section id="chant-nashid" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le chant (nashid) et la belle voix dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-del\u00e0 du d\u00e9bat sur les instruments, les hadiths abordent \u00e9galement la question du chant (<em>ghina&apos;</em>) et de la belle voix. Le Proph\u00e8te \ufefb a valoris\u00e9 la r\u00e9citation m\u00e9lodieuse du Coran et a tol\u00e9r\u00e9 les chants licites. Les <em>anashid</em> (chants islamiques sans instrument) trouvent leur fondement dans cette tradition.
                </p>

                <HadithBlock
                  number={7}
                  title="Embellissez le Coran de vos voix"
                  narrator="Abu Hurayra"
                  arabic="\u0632\u064e\u064a\u0651\u0650\u0646\u064f\u0648\u0627 \u0627\u0644\u0652\u0642\u064f\u0631\u0652\u0622\u0646\u064e \u0628\u0650\u0623\u064e\u0635\u0652\u0648\u064e\u0627\u062a\u0650\u0643\u064f\u0645\u0652"
                  translation="Embellissez le Coran de vos voix."
                  source="Sunan Abu Dawud, n\u00b01468 \u2014 An-Nasa&apos;i, n\u00b01015"
                  grade="sahih"
                  explanation="Ce hadith encourage la r\u00e9citation m\u00e9lodieuse (<em>tartil</em>) du Coran. Il montre que la belle voix est un don d&apos;Allah et que l&apos;utiliser pour le Coran est un acte m\u00e9ritoire. Les savants en d\u00e9duisent que la beaut\u00e9 de la voix n&apos;est pas bl\u00e2mable en soi ; c&apos;est son usage qui d\u00e9termine son statut juridique. La r\u00e9citation m\u00e9lodieuse ne doit cependant pas alt\u00e9rer les lettres ou d\u00e9former le sens des versets."
                />

                <HadithBlock
                  number={8}
                  title="Le Proph\u00e8te \ufefb \u00e9coutait la voix d&apos;Abu Musa al-Ash&apos;ari"
                  narrator="Abu Musa al-Ash&apos;ari"
                  arabic="\u0644\u064e\u0642\u064e\u062f\u0652 \u0623\u064f\u0648\u062a\u0650\u064a\u062a\u064e \u0645\u0650\u0632\u0652\u0645\u064e\u0627\u0631\u064b\u0627 \u0645\u0650\u0646\u0652 \u0645\u064e\u0632\u064e\u0627\u0645\u0650\u064a\u0631\u0650 \u0622\u0644\u0650 \u062f\u064e\u0627\u0648\u064f\u062f\u064e"
                  translation="Tu as re\u00e7u une fl\u00fbte (une belle voix) parmi les fl\u00fbtes de la famille de Dawud."
                  source="Sahih Al-Bukhari, n\u00b05048 \u2014 Sahih Muslim, n\u00b0793"
                  grade="sahih"
                  explanation="Le Proph\u00e8te \ufefb a compar\u00e9 la belle voix d&apos;Abu Musa al-Ash&apos;ari \u00e0 celle du Proph\u00e8te Dawud (\u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645), c\u00e9l\u00e8bre pour ses psaumes. L&apos;utilisation du terme &laquo;&nbsp;fl\u00fbte&nbsp;&raquo; (<em>mizmar</em>) est m\u00e9taphorique et d\u00e9signe la beaut\u00e9 de la voix. Ce hadith confirme que la belle voix est un bienfait divin. Les savants pr\u00e9cisent qu&apos;il ne s&apos;agit pas d&apos;une autorisation de la fl\u00fbte en tant qu&apos;instrument, mais d&apos;un \u00e9loge de la voix m\u00e9lodieuse au service du Coran."
                />

                <HadithBlock
                  number={9}
                  title="Les compagnons r\u00e9citaient des po\u00e8mes en creusant le foss\u00e9"
                  narrator="Anas ibn Malik"
                  arabic="\u062c\u064e\u0639\u064e\u0644\u064e \u0627\u0644\u0652\u0645\u064f\u0647\u064e\u0627\u062c\u0650\u0631\u064f\u0648\u0646\u064e \u0648\u064e\u0627\u0644\u0623\u064e\u0646\u0652\u0635\u064e\u0627\u0631\u064f \u064a\u064e\u062d\u0652\u0641\u0650\u0631\u064f\u0648\u0646\u064e \u0627\u0644\u0652\u062e\u064e\u0646\u0652\u062f\u064e\u0642\u064e \u0648\u064e\u064a\u064e\u0642\u064f\u0648\u0644\u064f\u0648\u0646\u064e \u0646\u064e\u062d\u0652\u0646\u064f \u0627\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u0628\u064e\u0627\u064a\u064e\u0639\u064f\u0648\u0627 \u0645\u064f\u062d\u064e\u0645\u0651\u064e\u062f\u064b\u0627 \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0652\u062c\u0650\u0647\u064e\u0627\u062f\u0650 \u0645\u064e\u0627 \u062d\u064e\u064a\u0650\u064a\u0646\u064e\u0627 \u0623\u064e\u0628\u064e\u062f\u064b\u0627 \u0641\u064e\u0642\u064e\u0627\u0644\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0644\u064e\u0627 \u062e\u064e\u064a\u0652\u0631\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u062e\u064e\u064a\u0652\u0631\u064f \u0627\u0644\u0622\u062e\u0650\u0631\u064e\u0629\u0650 \u0641\u064e\u0628\u064e\u0627\u0631\u0650\u0643\u0652 \u0641\u0650\u064a \u0627\u0644\u0623\u064e\u0646\u0652\u0635\u064e\u0627\u0631\u0650 \u0648\u064e\u0627\u0644\u0652\u0645\u064f\u0647\u064e\u0627\u062c\u0650\u0631\u064e\u0629\u0650"
                  translation="Les Muhajirin et les Ansars creusaient le foss\u00e9 en chantant : \u00ab Nous sommes ceux qui ont pr\u00eat\u00e9 serment d&apos;all\u00e9geance \u00e0 Muhammad pour le jihad tant que nous vivrons. \u00bb Le Proph\u00e8te \ufefb r\u00e9pondit : \u00ab \u00d4 Allah, il n&apos;y a de bien que le bien de l&apos;au-del\u00e0, b\u00e9nis les Ansars et les Muhajirin. \u00bb"
                  source="Sahih Al-Bukhari, n\u00b02835 \u2014 Sahih Muslim, n\u00b01803"
                  grade="sahih"
                  explanation="Ce hadith montre que les compagnons chantaient des po\u00e8mes (<em>rajaz</em>) pendant leurs travaux, et que le Proph\u00e8te \ufefb y participait en r\u00e9pondant. Le rajaz est une forme de po\u00e9sie chant\u00e9e, sans instrument, utilis\u00e9e pour se donner du courage. Ce hadith est une preuve claire que le chant sans instrument, aux paroles licites, est permis. Les savants y voient la l\u00e9gitimit\u00e9 des anashid et des po\u00e8mes islamiques."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths r\u00e9v\u00e8lent que le chant et la belle voix ont leur place dans la vie du musulman. La cl\u00e9 r\u00e9side dans le contenu et l&apos;intention : un chant qui rappelle Allah, qui c\u00e9l\u00e8bre une occasion joyeuse ou qui accompagne un effort est permis. Pour d\u00e9couvrir d&apos;autres valeurs proph\u00e9tiques, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================= */}
              {/* SECTION : Divergences savantes                */}
              {/* ============================================= */}
              <section id="divergences" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les divergences savantes sur la musique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question de la musique en islam fait l&apos;objet d&apos;une divergence (<em>ikhtilaf</em>) parmi les savants depuis les premiers si\u00e8cles. Si la majorit\u00e9 penche vers l&apos;interdiction des instruments, une minorit\u00e9 qualifi\u00e9e a d\u00e9fendu un avis plus nuanc\u00e9. Les deux hadiths suivants illustrent cette complexit\u00e9.
                </p>

                <HadithBlock
                  number={10}
                  title="Les Abyssins jouaient dans la mosqu\u00e9e le jour de l&apos;A\u00efd"
                  narrator="Aisha"
                  arabic="\u0643\u064e\u0627\u0646\u064e \u0627\u0644\u0652\u062d\u064e\u0628\u064e\u0634\u064e\u0629\u064f \u064a\u064e\u0644\u0652\u0639\u064e\u0628\u064f\u0648\u0646\u064e \u0628\u0650\u062d\u0650\u0631\u064e\u0627\u0628\u0650\u0647\u0650\u0645\u0652 \u0641\u0650\u064a \u0627\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u0650 \u0648\u064e\u0631\u064e\u0633\u064f\u0648\u0644\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u064a\u064e\u0633\u0652\u062a\u064f\u0631\u064f\u0646\u0650\u064a \u0628\u0650\u0631\u0650\u062f\u064e\u0627\u0626\u0650\u0647\u0650 \u0648\u064e\u0623\u064e\u0646\u064e\u0627 \u0623\u064e\u0646\u0652\u0638\u064f\u0631\u064f \u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652"
                  translation="Les Abyssins jouaient avec leurs lances dans la mosqu\u00e9e, et le Messager d&apos;Allah me couvrait de son manteau pendant que je les regardais."
                  source="Sahih Al-Bukhari, n\u00b0454 \u2014 Sahih Muslim, n\u00b0892"
                  grade="sahih"
                  explanation="Ce hadith montre que le Proph\u00e8te \ufefb autorisait les d\u00e9monstrations d&apos;adresse et le divertissement dans la mosqu\u00e9e lors des jours de f\u00eate. Il laissait m\u00eame Aisha regarder ce spectacle. Les savants qui d\u00e9fendent une vision plus souple de la musique utilisent ce hadith pour montrer que l&apos;islam ne prohibe pas tout divertissement. Ceux qui maintiennent l&apos;interdiction pr\u00e9cisent qu&apos;il s&apos;agissait d&apos;un jeu d&apos;armes, non de musique instrumentale."
                />

                <HadithBlock
                  number={11}
                  title="Le Proph\u00e8te \ufefb \u00e9couta une chanteuse et ne l&apos;interdit pas"
                  narrator="Aisha"
                  arabic="\u0643\u064e\u0627\u0646\u064e\u062a\u0652 \u0639\u0650\u0646\u0652\u062f\u0650\u064a \u062c\u064e\u0627\u0631\u0650\u064a\u064e\u062a\u064e\u0627\u0646\u0650 \u062a\u064f\u063a\u064e\u0646\u0651\u0650\u064a\u064e\u0627\u0646\u0650 \u0641\u064e\u062f\u064e\u062e\u064e\u0644\u064e \u0631\u064e\u0633\u064f\u0648\u0644\u064f \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0641\u064e\u0627\u0636\u0652\u0637\u064e\u062c\u064e\u0639\u064e \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0652\u0641\u0650\u0631\u064e\u0627\u0634\u0650 \u0648\u064e\u062d\u064e\u0648\u0651\u064e\u0644\u064e \u0648\u064e\u062c\u0652\u0647\u064e\u0647\u064f"
                  translation="Deux jeunes filles chantaient chez moi. Le Messager d&apos;Allah entra, s&apos;allongea sur le lit et d\u00e9tourna son visage."
                  source="Sahih Al-Bukhari, n\u00b0949 \u2014 Sahih Muslim, n\u00b0892"
                  grade="sahih"
                  explanation="Ce hadith compl\u00e8te le hadith n\u00b04 (Bukhari 952). Dans cette version, le d\u00e9tail \u00ab il d\u00e9tourna son visage \u00bb a \u00e9t\u00e9 interpr\u00e9t\u00e9 diff\u00e9remment par les savants. Pour certains, cela montre qu&apos;il n&apos;\u00e9coutait pas avec plaisir mais tol\u00e9rait la chose. Pour d&apos;autres, il d\u00e9tournait simplement son visage par pudeur, sans interdire le chant. L&apos;essentiel est que le Proph\u00e8te \ufefb n&apos;a pas ordonn\u00e9 l&apos;arr\u00eat du chant et a m\u00eame r\u00e9primand\u00e9 Abu Bakr qui voulait les faire taire."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths montrent que la question de la musique n&apos;est pas aussi tranch\u00e9e que certains le pr\u00e9sentent. Il existe un espace de divergence l\u00e9gitime entre savants, fond\u00e9 sur des textes authentiques. Le musulman doit conna\u00eetre les diff\u00e9rents avis et suivre celui qui le convainc le plus, tout en respectant ceux qui adoptent l&apos;autre position.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la musique en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question de la musique a divis\u00e9 les savants depuis les premiers si\u00e8cles de l&apos;islam. Voici un aper\u00e7u des deux positions principales, pr\u00e9sent\u00e9es de mani\u00e8re \u00e9quitable.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;avis majoritaire : l&apos;interdiction des instruments
                </h3>

                <div className="mt-4 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les instruments de musique sont interdits par consensus des compagnons et des suivants. Les quatre imams sont unanimes sur l&apos;interdiction de tous les instruments \u00e0 cordes et \u00e0 vent. Aucun savant dont l&apos;avis fait autorit\u00e9 n&apos;a permis les instruments de musique.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Ighatha al-Lahfan</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith de Bukhari (n\u00b05590) est authentique sans aucun doute. Il constitue la preuve la plus forte de l&apos;interdiction des instruments de musique. L&apos;expression &laquo; yastahillun &raquo; (ils rendront licites) prouve que ces choses \u00e9taient \u00e0 l&apos;origine illicites.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;avis minoritaire : la permission sous conditions
                </h3>

                <div className="mt-4 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Tous les hadiths rapport\u00e9s sur l&apos;interdiction de la musique sont faibles ou fabriqu\u00e9s. Quant au hadith de Bukhari, il est mu&apos;allaq (suspendu) et ne constitue pas une preuve d\u00e9finitive. Le chant est licite tant qu&apos;il ne s&apos;accompagne pas de d\u00e9bauche.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hazm, <em>Al-Muhalla</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;\u00e9coute de la musique n&apos;est pas interdite en soi. Ce qui est interdit, c&apos;est ce qui m\u00e8ne \u00e0 la d\u00e9sob\u00e9issance \u00e0 Allah, qu&apos;il s&apos;agisse de musique, de po\u00e9sie ou m\u00eame de conversations. Le jugement d\u00e9pend du contenu et du contexte, non de la forme.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Abu Hamid al-Ghazali, <em>Ihya Ulum ad-Din</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est important de souligner que m\u00eame les savants qui autorisent certaines formes de musique posent des conditions strictes : les paroles doivent \u00eatre d\u00e9centes, la musique ne doit pas d\u00e9tourner des obligations religieuses, elle ne doit pas s&apos;accompagner de consommation d&apos;alcool ou de mixit\u00e9 ill\u00e9gitime, et elle ne doit pas devenir une obsession. De leur c\u00f4t\u00e9, les savants qui interdisent les instruments reconnaissent la permission du duff lors des mariages et des f\u00eates, ainsi que la l\u00e9gitimit\u00e9 du chant sans instrument.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le\u00e7ons pratiques      */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le\u00e7ons pratiques pour le musulman
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths et avis savants pr\u00e9sent\u00e9s dans cet article permettent de d\u00e9gager des orientations concretes pour la vie quotidienne :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Conna\u00eetre les deux avis et respecter la divergence
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La question de la musique fait l&apos;objet d&apos;un ikhtilaf l\u00e9gitime. Suivez l&apos;avis du savant en qui vous avez confiance, mais ne bl\u00e2mez pas celui qui suit l&apos;autre avis de mani\u00e8re sinc\u00e8re.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Utiliser le duff lors des mariages et des f\u00eates
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le duff est permis par consensus pour les mariages et les jours de l&apos;A\u00efd. C&apos;est une sunna proph\u00e9tique qui distingue le mariage licite du mariage secret.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Veiller au contenu des chants
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Qu&apos;il s&apos;agisse de nashid ou d&apos;autres formes de chant, les paroles doivent \u00eatre d\u00e9centes, ne pas appeler au p\u00e9ch\u00e9 et ne pas contenir de propos ind\u00e9cents ou contraires \u00e0 la morale islamique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas se d\u00e9tourner du rappel d&apos;Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        M\u00eame selon les savants qui autorisent certaines formes de musique, celle-ci ne doit jamais prendre le pas sur la pri\u00e8re, la r\u00e9citation du Coran et le dhikr. Le divertissement excessif est bl\u00e2m\u00e9 dans tous les cas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Embellir sa r\u00e9citation du Coran
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La belle voix est un don d&apos;Allah. Le Proph\u00e8te \ufefb a encourag\u00e9 son usage pour la r\u00e9citation du Coran. Investir dans l&apos;apprentissage du tajwid est une mani\u00e8re de valoriser ce don.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privil\u00e9gier la prudence en cas de doute
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te \ufefb a dit : &laquo;&nbsp;Laisse ce qui te fait douter pour ce qui ne te fait pas douter.&nbsp;&raquo; Si la musique suscite un doute dans votre c\u0153ur, la prudence est une voie sage.
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
                  description="Comprenez les hadiths sur la musique dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Les hadiths du Proph\u00e8te Muhammad \ufefb : fondements et collections"
                  description="D\u00e9couvrez l&apos;histoire des grandes collections de hadiths et les crit\u00e8res d&apos;authenticit\u00e9."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements proph\u00e9tiques sur l&apos;attitude, la patience et les bonnes mani\u00e8res."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le mariage en islam"
                  description="Les hadiths authentiques sur le choix du conjoint, les droits des \u00e9poux et la c\u00e9l\u00e9bration du mariage."
                  href="/hadith-mariage-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
