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
    "Hadiths sur le nationalisme en islam : \u2018asabiyya et fraternit\u00e9",
  description:
    "D\u00e9couvrez les hadiths authentiques sur le nationalisme et le tribalisme en islam : interdiction de la \u2018asabiyya, \u00e9galit\u00e9 entre les races, fraternit\u00e9 islamique et amour du pays. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le nationalisme en islam : \u2018asabiyya et fraternit\u00e9",
    description:
      "Les hadiths authentiques sur le nationalisme en islam : interdiction de la \u2018asabiyya, \u00e9galit\u00e9 entre les peuples, fraternit\u00e9 universelle et rapport \u00e9quilibr\u00e9 au pays.",
    url: "https://www.islamreligion.fr/hadith-nationalisme-islam",
    images: [
      {
        url: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-nationalisme-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "interdiction-asabiyya", label: "L\u2019interdiction de la \u2018asabiyya" },
  { id: "egalite-races", label: "\u00c9galit\u00e9 entre les races et les peuples" },
  { id: "fraternite-islamique", label: "La fraternit\u00e9 islamique" },
  { id: "aimer-son-pays", label: "Aimer son pays sans \u2018asabiyya" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "Qu&apos;est-ce que la \u2018asabiyya en islam ?",
    answer:
      "La \u2018asabiyya d\u00e9signe le fanatisme tribal, ethnique ou national qui pousse une personne \u00e0 soutenir son groupe dans l\u2019injustice, uniquement par solidarit\u00e9 de sang ou d\u2019origine. Le Proph\u00e8te \uFDFA l\u2019a condamn\u00e9e dans plusieurs hadiths authentiques, notamment en disant : \u00ab N\u2019est pas des n\u00f4tres celui qui appelle \u00e0 la \u2018asabiyya \u00bb (Abu Dawud 5121). L\u2019islam distingue cette attitude de l\u2019attachement sain \u00e0 son pays ou \u00e0 sa culture.",
  },
  {
    question:
      "L&apos;islam interdit-il le patriotisme ?",
    answer:
      "Non, l\u2019islam n\u2019interdit pas l\u2019amour de son pays ni l\u2019attachement \u00e0 sa terre natale. Le Proph\u00e8te \uFDFA lui-m\u00eame a exprim\u00e9 son amour pour La Mecque lorsqu\u2019il l\u2019a quitt\u00e9e. Ce qui est interdit est la \u2018asabiyya, c\u2019est-\u00e0-dire le chauvinisme qui conduit \u00e0 m\u00e9priser les autres peuples ou \u00e0 soutenir l\u2019injustice au nom de l\u2019appartenance nationale.",
  },
  {
    question:
      "Que dit le sermon d&apos;adieu sur le racisme ?",
    answer:
      "Dans son sermon d\u2019adieu, le Proph\u00e8te \uFDFA a d\u00e9clar\u00e9 : \u00ab Il n\u2019y a pas de sup\u00e9riorit\u00e9 de l\u2019Arabe sur le non-Arabe, ni du non-Arabe sur l\u2019Arabe, ni du Blanc sur le Noir, ni du Noir sur le Blanc, si ce n\u2019est par la pi\u00e9t\u00e9 \u00bb (Ahmad 23489). Ce discours fondateur \u00e9tablit l\u2019\u00e9galit\u00e9 absolue entre les \u00eatres humains.",
  },
  {
    question:
      "Comment concilier identit\u00e9 culturelle et fraternit\u00e9 islamique ?",
    answer:
      "L\u2019islam reconna\u00eet la diversit\u00e9 des peuples et des cultures comme un signe d\u2019Allah (Coran 49:13). Il est permis d\u2019\u00eatre fier de sa culture et de la pr\u00e9server, tant que cela ne conduit pas au m\u00e9pris des autres ni \u00e0 la rupture de la fraternit\u00e9 islamique. Le crit\u00e8re de valeur en islam est la pi\u00e9t\u00e9 (taqwa), non l\u2019ethnie ou la nationalit\u00e9.",
  },
  {
    question:
      "Quels hadiths parlent de la fraternit\u00e9 entre musulmans ?",
    answer:
      "Parmi les hadiths les plus connus sur la fraternit\u00e9 : \u00ab Le musulman est le fr\u00e8re du musulman \u00bb (Bukhari 2442), \u00ab Les croyants sont comme un seul corps \u00bb (Muslim 2586), et \u00ab Aucun de vous ne croit vraiment tant qu\u2019il n\u2019aime pas pour son fr\u00e8re ce qu\u2019il aime pour lui-m\u00eame \u00bb (Bukhari 13). Ces hadiths transcendent les fronti\u00e8res et les ethnies.",
  },
  {
    question:
      "Le nationalisme est-il consid\u00e9r\u00e9 comme un p\u00e9ch\u00e9 en islam ?",
    answer:
      "Le nationalisme sous sa forme de \u2018asabiyya \u2014 c\u2019est-\u00e0-dire le chauvinisme qui m\u00e8ne \u00e0 l\u2019injustice, au racisme ou \u00e0 la division de la communaut\u00e9 \u2014 est clairement condamn\u00e9 par le Proph\u00e8te \uFDFA. Toutefois, les savants distinguent entre cette forme blam\u00e9e et l\u2019attachement naturel \u00e0 son pays, sa langue et sa culture, qui est permis tant qu\u2019il ne contredit pas les principes islamiques.",
  },
];

export default function HadithNationalismeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-nationalisme-islam/#article",
        headline:
          "Hadiths sur le nationalisme en islam : \u2018asabiyya et fraternit\u00e9",
        description:
          "D\u00e9couvrez les hadiths authentiques sur le nationalisme et le tribalisme en islam : interdiction de la \u2018asabiyya, \u00e9galit\u00e9 entre les races, fraternit\u00e9 islamique.",
        image: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-nationalisme-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-nationalisme-islam/#breadcrumb",
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
            name: "Nationalisme en islam",
            item: "https://www.islamreligion.fr/hadith-nationalisme-islam",
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
          title="Hadiths sur le nationalisme en islam"
          subtitle="Les enseignements proph\u00e9tiques sur la \u2018asabiyya, l&apos;\u00e9galit\u00e9 entre les peuples, la fraternit\u00e9 islamique et le rapport \u00e9quilibr\u00e9 \u00e0 l&apos;amour du pays selon la Sunna authentique."
          imageSrc="/images/grande-mosquee-blanche-minarets-islam-architecture.jpg"
          imageAlt="Hadiths sur le nationalisme en islam, fraternit\u00e9 et \u00e9galit\u00e9 entre les peuples"
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
                  Nationalisme en islam
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
                    Le Proph\u00e8te \uFDFA a condamn\u00e9 la \u2018asabiyya (fanatisme tribal et national) et a averti que celui qui meurt en la portant meurt d&apos;une mort de la jahiliyya.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le sermon d&apos;adieu \u00e9tablit l&apos;\u00e9galit\u00e9 absolue entre les races et les peuples : seule la pi\u00e9t\u00e9 (taqwa) distingue les \u00eatres humains.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La fraternit\u00e9 islamique transcende les fronti\u00e8res : les croyants sont compar\u00e9s \u00e0 un seul corps dont les membres souffrent ensemble.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;amour de son pays est naturel et permis, tant qu&apos;il ne conduit pas au m\u00e9pris des autres ni au soutien de l&apos;injustice.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : la diversit\u00e9 des peuples comme signe divin
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur le nationalisme et la \u2018asabiyya, il convient de rappeler le cadre coranique. Le Coran pr\u00e9sente la diversit\u00e9 des peuples et des langues comme un signe parmi les signes d&apos;Allah, destin\u00e9 \u00e0 l&apos;entraide et \u00e0 la connaissance mutuelle. Le seul crit\u00e8re de distinction l\u00e9gitime aux yeux d&apos;Allah est la pi\u00e9t\u00e9 (<em>taqwa</em>), non l&apos;origine ethnique ni la nationalit\u00e9.
                </p>

                <HadithCard
                  arabic="\u064a\u0627 \u0623\u064e\u064a\u064f\u0651\u0647\u064e\u0627 \u0627\u0644\u0646\u064e\u0651\u0627\u0633\u064f \u0625\u0650\u0646\u064e\u0651\u0627 \u062e\u064e\u0644\u064e\u0642\u0652\u0646\u064e\u0627\u0643\u064f\u0645 \u0645\u0650\u0646 \u0630\u064e\u0643\u064e\u0631\u064d \u0648\u064e\u0623\u064f\u0646\u0652\u062b\u064e\u0649\u0670 \u0648\u064e\u062c\u064e\u0639\u064e\u0644\u0652\u0646\u064e\u0627\u0643\u064f\u0645\u0652 \u0634\u064f\u0639\u064f\u0648\u0628\u064b\u0627 \u0648\u064e\u0642\u064e\u0628\u064e\u0627\u0626\u0650\u0644\u064e \u0644\u0650\u062a\u064e\u0639\u064e\u0627\u0631\u064e\u0641\u064f\u0648\u0627 \u0625\u0650\u0646\u064e\u0651 \u0623\u064e\u0643\u0652\u0631\u064e\u0645\u064e\u0643\u064f\u0645\u0652 \u0639\u0650\u0646\u0652\u062f\u064e \u0627\u0644\u0644\u064e\u0651\u0647\u0650 \u0623\u064e\u062a\u0652\u0642\u064e\u0627\u0643\u064f\u0645\u0652"
                  text="\u00d4 hommes ! Nous vous avons cr\u00e9\u00e9s d&apos;un m\u00e2le et d&apos;une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entreconnaissiez. Le plus noble d&apos;entre vous, aupr\u00e8s d&apos;Allah, est le plus pieux."
                  source="Coran, sourate Al-Hujurat (49:13)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur adresse l&apos;humanit\u00e9 enti\u00e8re, sans distinction. Le terme <em>li-ta\u2018arafu</em> (\u00ab pour que vous vous entreconnaissiez \u00bb) indique que la diversit\u00e9 a une finalit\u00e9 positive : la connaissance mutuelle, l&apos;\u00e9change et l&apos;enrichissement culturel. En revanche, la hi\u00e9rarchisation des peuples par la race ou la nationalit\u00e9 est rejet\u00e9e. Les savants du tafsir, dont l&apos;imam At-Tabari et Ibn Kathir, soulignent que ce verset a \u00e9t\u00e9 r\u00e9v\u00e9l\u00e9 pour abolir l&apos;orgueil tribal des Arabes de la jahiliyya. C&apos;est sur cette base coranique que le Proph\u00e8te \uFDFA a construit ses enseignements contre la \u2018asabiyya.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : L&apos;interdiction de la asabiyya */}
              {/* ============================================ */}
              <section id="interdiction-asabiyya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interdiction de la \u2018asabiyya dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La \u2018asabiyya d\u00e9signe, dans le vocabulaire proph\u00e9tique, toute forme de fanatisme fond\u00e9 sur l&apos;appartenance tribale, ethnique ou nationale, qui pousse \u00e0 soutenir son groupe dans l&apos;injustice. Le Proph\u00e8te \uFDFA l&apos;a condamn\u00e9e avec une fermet\u00e9 remarquable, allant jusqu&apos;\u00e0 la qualifier de cause de mort sur la jahiliyya. Les hadiths suivants illustrent cette interdiction sans \u00e9quivoque.
                </p>

                <HadithBlock
                  number={1}
                  title="N&apos;est pas des n\u00f4tres celui qui appelle \u00e0 la \u2018asabiyya"
                  narrator="Jubayr ibn Mut&apos;im"
                  arabic="\u0644\u064e\u064a\u0652\u0633\u064e \u0645\u0650\u0646\u064e\u0651\u0627 \u0645\u064e\u0646\u0652 \u062f\u064e\u0639\u064e\u0627 \u0625\u0650\u0644\u064e\u0649 \u0639\u064e\u0635\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064d\u060c \u0648\u064e\u0644\u064e\u064a\u0652\u0633\u064e \u0645\u0650\u0646\u064e\u0651\u0627 \u0645\u064e\u0646\u0652 \u0642\u064e\u0627\u062a\u064e\u0644\u064e \u0639\u064e\u0644\u064e\u0649 \u0639\u064e\u0635\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064d\u060c \u0648\u064e\u0644\u064e\u064a\u0652\u0633\u064e \u0645\u0650\u0646\u064e\u0651\u0627 \u0645\u064e\u0646\u0652 \u0645\u064e\u0627\u062a\u064e \u0639\u064e\u0644\u064e\u0649 \u0639\u064e\u0635\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064d"
                  translation="N&apos;est pas des n\u00f4tres celui qui appelle \u00e0 la \u2018asabiyya, n&apos;est pas des n\u00f4tres celui qui combat pour la \u2018asabiyya, et n&apos;est pas des n\u00f4tres celui qui meurt sur la \u2018asabiyya."
                  source="Sunan Abu Dawud, n\u00b05121"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus s\u00e9v\u00e8res sur le sujet. L&apos;expression \u00ab n&apos;est pas des n\u00f4tres \u00bb est une formule de d\u00e9saveu proph\u00e9tique qui marque la gravit\u00e9 de l&apos;acte. Le Proph\u00e8te \uFDFA condamne trois niveaux de \u2018asabiyya : l&apos;appel (la propagande), le combat (la violence) et la mort (l&apos;enracinement total). Cela couvre aussi bien le discours que l&apos;action. Les savants expliquent que cette condamnation vise toute forme de solidarit\u00e9 injuste fond\u00e9e sur l&apos;ethnie, la tribu ou la nationalit\u00e9."
                />

                <HadithBlock
                  number={2}
                  title="Celui qui meurt sous la banni\u00e8re de la \u2018asabiyya"
                  narrator="Abu Hurayra"
                  arabic="\u0645\u064e\u0646\u0652 \u062e\u064e\u0631\u064e\u062c\u064e \u0645\u0650\u0646\u064e \u0627\u0644\u0637\u064e\u0651\u0627\u0639\u064e\u0629\u0650 \u0648\u064e\u0641\u064e\u0627\u0631\u064e\u0642\u064e \u0627\u0644\u0652\u062c\u064e\u0645\u064e\u0627\u0639\u064e\u0629\u064e \u0641\u064e\u0645\u064e\u0627\u062a\u064e\u060c \u0641\u064e\u0645\u0650\u064a\u062a\u064e\u062a\u064f\u0647\u064f \u0645\u0650\u064a\u062a\u064e\u0629\u064c \u062c\u064e\u0627\u0647\u0650\u0644\u0650\u064a\u064e\u0651\u0629\u064c\u060c \u0648\u064e\u0645\u064e\u0646\u0652 \u0642\u064e\u0627\u062a\u064e\u0644\u064e \u062a\u064e\u062d\u0652\u062a\u064e \u0631\u064e\u0627\u064a\u064e\u0629\u064d \u0639\u064f\u0645\u064e\u0651\u064a\u064e\u0651\u0629\u064d \u064a\u064e\u063a\u0652\u0636\u064e\u0628\u064f \u0644\u0650\u0639\u064e\u0635\u064e\u0628\u064e\u0629\u064d \u0623\u064e\u0648\u0652 \u064a\u064e\u062f\u0652\u0639\u064f\u0648 \u0625\u0650\u0644\u064e\u0649 \u0639\u064e\u0635\u064e\u0628\u064e\u0629\u064d \u0623\u064e\u0648\u0652 \u064a\u064e\u0646\u0652\u0635\u064f\u0631\u064f \u0639\u064e\u0635\u064e\u0628\u064e\u0629\u064b \u0641\u064e\u0642\u064f\u062a\u0650\u0644\u064e\u060c \u0641\u064e\u0642\u0650\u062a\u0652\u0644\u064e\u0629\u064c \u062c\u064e\u0627\u0647\u0650\u0644\u0650\u064a\u064e\u0651\u0629\u064c"
                  translation="Celui qui sort de l&apos;ob\u00e9issance et se s\u00e9pare du groupe puis meurt, sa mort est une mort de la jahiliyya. Et celui qui combat sous une banni\u00e8re aveugle, se mettant en col\u00e8re pour une \u2018asabiyya, ou appelant \u00e0 une \u2018asabiyya, ou soutenant une \u2018asabiyya, puis est tu\u00e9, sa mort est une mort de la jahiliyya."
                  source="Sahih Muslim, n\u00b01848"
                  grade="sahih"
                  explanation="Ce hadith \u00e9tablit un lien direct entre la \u2018asabiyya et la jahiliyya (la p\u00e9riode pr\u00e9islamique d&apos;ignorance). Mourir sur la \u2018asabiyya \u00e9quivaut \u00e0 mourir hors de la guidance proph\u00e9tique. La \u00ab banni\u00e8re aveugle \u00bb (\u2018ummiyya) d\u00e9signe toute cause o\u00f9 la justice et la v\u00e9rit\u00e9 ne sont pas le moteur, mais uniquement l&apos;esprit de clan. L&apos;imam An-Nawawi commente que ce hadith s&apos;applique \u00e0 quiconque se bat non pour la v\u00e9rit\u00e9 mais par fanatisme de groupe, quelle que soit la forme de ce groupe."
                />

                <HadithBlock
                  number={3}
                  title="Laissez-la, elle est infecte"
                  narrator="Jabir ibn &apos;Abdillah"
                  arabic="\u062f\u064e\u0639\u064f\u0648\u0647\u064e\u0627 \u0641\u064e\u0625\u0650\u0646\u064e\u0651\u0647\u064e\u0627 \u0645\u064f\u0646\u0652\u062a\u0650\u0646\u064e\u0629\u064c"
                  translation="Laissez-la (la \u2018asabiyya), car elle est infecte."
                  source="Sahih Al-Bukhari, n\u00b04905 \u2014 Sahih Muslim, n\u00b02584"
                  grade="sahih"
                  explanation="Ce hadith a \u00e9t\u00e9 prononc\u00e9 lorsqu&apos;une dispute \u00e9clata entre les Muhajirin (Emigr\u00e9s) et les Ansar (Auxiliaires) \u00e0 M\u00e9dine. Chaque camp commen\u00e7a \u00e0 appeler les siens au secours par esprit tribal. Le Proph\u00e8te \uFDFA intervint et qualifia cette attitude de \u00ab muntina \u00bb (puante, infecte), une image saisissante qui marque les esprits. Malgr\u00e9 la l\u00e9gitimit\u00e9 des deux groupes dans l&apos;islam, le Proph\u00e8te \uFDFA refusa cat\u00e9goriquement la solidarit\u00e9 fond\u00e9e sur l&apos;origine plut\u00f4t que sur la justice."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un ensemble coh\u00e9rent : la \u2018asabiyya est condamn\u00e9e dans ses causes (l&apos;appel tribal), ses manifestations (le combat injuste) et ses cons\u00e9quences (la mort hors de la guidance). Pour approfondir les fondements du bon comportement en islam, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ================================================== */}
              {/* SECTION : Egalite entre les races et les peuples    */}
              {/* ================================================== */}
              <section id="egalite-races" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;\u00e9galit\u00e9 entre les races et les peuples : le sermon d&apos;adieu
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sermon d&apos;adieu (<em>Khutbat al-Wada\u2018</em>), prononc\u00e9 par le Proph\u00e8te \uFDFA lors du p\u00e8lerinage de l&apos;an 10 de l&apos;h\u00e9gire devant plus de cent mille compagnons, constitue l&apos;un des plus grands discours de l&apos;histoire sur l&apos;\u00e9galit\u00e9 humaine. Il y a aboli d\u00e9finitivement les privil\u00e8ges de race, de couleur et de lign\u00e9e.
                </p>

                <HadithBlock
                  number={4}
                  title="Pas de sup\u00e9riorit\u00e9 de l&apos;Arabe sur le non-Arabe"
                  narrator="Abu Nadra"
                  arabic="\u064a\u064e\u0627 \u0623\u064e\u064a\u064f\u0651\u0647\u064e\u0627 \u0627\u0644\u0646\u064e\u0651\u0627\u0633\u064f\u060c \u0623\u064e\u0644\u064e\u0627 \u0625\u0650\u0646\u064e\u0651 \u0631\u064e\u0628\u064e\u0651\u0643\u064f\u0645\u0652 \u0648\u064e\u0627\u062d\u0650\u062f\u064c\u060c \u0648\u064e\u0625\u0650\u0646\u064e\u0651 \u0623\u064e\u0628\u064e\u0627\u0643\u064f\u0645\u0652 \u0648\u064e\u0627\u062d\u0650\u062f\u064c\u060c \u0623\u064e\u0644\u064e\u0627 \u0644\u064e\u0627 \u0641\u064e\u0636\u0652\u0644\u064e \u0644\u0650\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064d\u0651 \u0639\u064e\u0644\u064e\u0649 \u0623\u064e\u0639\u0652\u062c\u064e\u0645\u0650\u064a\u064d\u0651\u060c \u0648\u064e\u0644\u064e\u0627 \u0644\u0650\u0623\u064e\u0639\u0652\u062c\u064e\u0645\u0650\u064a\u064d\u0651 \u0639\u064e\u0644\u064e\u0649 \u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064d\u0651\u060c \u0648\u064e\u0644\u064e\u0627 \u0644\u0650\u0623\u064e\u062d\u0652\u0645\u064e\u0631\u064e \u0639\u064e\u0644\u064e\u0649 \u0623\u064e\u0633\u0652\u0648\u064e\u062f\u064e\u060c \u0648\u064e\u0644\u064e\u0627 \u0623\u064e\u0633\u0652\u0648\u064e\u062f\u064e \u0639\u064e\u0644\u064e\u0649 \u0623\u064e\u062d\u0652\u0645\u064e\u0631\u064e \u0625\u0650\u0644\u064e\u0651\u0627 \u0628\u0650\u0627\u0644\u062a\u064e\u0651\u0642\u0652\u0648\u064e\u0649"
                  translation="\u00d4 gens ! Certes, votre Seigneur est Un et votre p\u00e8re est un. Certes, il n&apos;y a pas de sup\u00e9riorit\u00e9 de l&apos;Arabe sur le non-Arabe, ni du non-Arabe sur l&apos;Arabe, ni du rouge (blanc) sur le noir, ni du noir sur le rouge, si ce n&apos;est par la pi\u00e9t\u00e9."
                  source="Musnad Ahmad, n\u00b023489"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des textes les plus puissants de l&apos;islam sur l&apos;\u00e9galit\u00e9 humaine. Le Proph\u00e8te \uFDFA \u00e9tablit d&apos;abord l&apos;unit\u00e9 de l&apos;humanit\u00e9 par deux fondements : un Seigneur unique et un p\u00e8re commun (Adam). Puis il d\u00e9truit toute hi\u00e9rarchie ethnique en encha\u00eenant les n\u00e9gations. Le terme \u00ab taqwa \u00bb (pi\u00e9t\u00e9) est pr\u00e9sent\u00e9 comme le seul crit\u00e8re de distinction aux yeux d&apos;Allah, confirmant le verset d&apos;Al-Hujurat (49:13). Ce discours, prononc\u00e9 au XIV\u00e8me si\u00e8cle avant les d\u00e9clarations modernes des droits de l&apos;homme, reste d&apos;une actualit\u00e9 saisissante."
                />

                <HadithBlock
                  number={5}
                  title="Vous \u00eates tous les enfants d&apos;Adam"
                  narrator="Abu Hurayra"
                  arabic="\u0625\u0650\u0646\u064e\u0651 \u0627\u0644\u0644\u064e\u0651\u0647\u064e \u0642\u064e\u062f\u0652 \u0623\u064e\u0630\u0652\u0647\u064e\u0628\u064e \u0639\u064e\u0646\u0652\u0643\u064f\u0645\u0652 \u0639\u064f\u0628\u064e\u0651\u064a\u064e\u0651\u0629\u064e \u0627\u0644\u0652\u062c\u064e\u0627\u0647\u0650\u0644\u0650\u064a\u064e\u0651\u0629\u0650 \u0648\u064e\u0641\u064e\u062e\u0652\u0631\u064e\u0647\u064e\u0627 \u0628\u0650\u0627\u0644\u0622\u0628\u064e\u0627\u0621\u0650\u060c \u0627\u0644\u0646\u064e\u0651\u0627\u0633\u064f \u0631\u064e\u062c\u064f\u0644\u064e\u0627\u0646\u0650: \u0645\u064f\u0624\u0652\u0645\u0650\u0646\u064c \u062a\u064e\u0642\u0650\u064a\u064c\u0651 \u0648\u064e\u0641\u064e\u0627\u062c\u0650\u0631\u064c \u0634\u064e\u0642\u0650\u064a\u064c\u0651\u060c \u0623\u064e\u0646\u0652\u062a\u064f\u0645\u0652 \u0628\u064e\u0646\u064f\u0648 \u0622\u062f\u064e\u0645\u064e \u0648\u064e\u0622\u062f\u064e\u0645\u064f \u0645\u0650\u0646\u0652 \u062a\u064f\u0631\u064e\u0627\u0628\u064d"
                  translation="Certes, Allah a retir\u00e9 de vous l&apos;orgueil de la jahiliyya et sa vantardise par les anc\u00eatres. Les gens sont de deux cat\u00e9gories : un croyant pieux et un p\u00e9cheur malheureux. Vous \u00eates tous les enfants d&apos;Adam, et Adam a \u00e9t\u00e9 cr\u00e9\u00e9 de terre."
                  source="Jami&apos; at-Tirmidhi, n\u00b03955"
                  grade="hasan"
                  explanation="Ce hadith ram\u00e8ne l&apos;humanit\u00e9 \u00e0 son origine commune : la terre. Le Proph\u00e8te \uFDFA d\u00e9construit la fiert\u00e9 g\u00e9n\u00e9alogique (<em>fakhr bi-l-aba\u2019</em>) en rappelant que tous les hommes descendent d&apos;Adam, lui-m\u00eame cr\u00e9\u00e9 de poussi\u00e8re. La seule distinction qui subsiste est morale et spirituelle : croyant pieux ou p\u00e9cheur malheureux. Ce hadith complète le sermon d&apos;adieu en insistant sur l&apos;abolition d\u00e9finitive de l&apos;orgueil tribal."
                />

                <HadithBlock
                  number={6}
                  title="Bilal, la voix de l&apos;\u00e9galit\u00e9"
                  narrator="Abu Dharr"
                  arabic="\u0625\u0650\u0646\u064e\u0651\u0643\u064e \u0627\u0645\u0652\u0631\u064f\u0624\u064c \u0641\u0650\u064a\u0643\u064e \u062c\u064e\u0627\u0647\u0650\u0644\u0650\u064a\u064e\u0651\u0629\u064c\u060c \u0625\u0650\u062e\u0652\u0648\u064e\u0627\u0646\u064f\u0643\u064f\u0645\u0652 \u062e\u064e\u0648\u064e\u0644\u064f\u0643\u064f\u0645\u0652\u060c \u062c\u064e\u0639\u064e\u0644\u064e\u0647\u064f\u0645\u064f \u0627\u0644\u0644\u064e\u0651\u0647\u064f \u062a\u064e\u062d\u0652\u062a\u064e \u0623\u064e\u064a\u0652\u062f\u0650\u064a\u0643\u064f\u0645\u0652\u060c \u0641\u064e\u0645\u064e\u0646\u0652 \u0643\u064e\u0627\u0646\u064e \u0623\u064e\u062e\u064f\u0648\u0647\u064f \u062a\u064e\u062d\u0652\u062a\u064e \u064a\u064e\u062f\u0650\u0647\u0650 \u0641\u064e\u0644\u0652\u064a\u064f\u0637\u0652\u0639\u0650\u0645\u0652\u0647\u064f \u0645\u0650\u0645\u064e\u0651\u0627 \u064a\u064e\u0623\u0652\u0643\u064f\u0644\u064f \u0648\u064e\u0644\u0652\u064a\u064f\u0644\u0652\u0628\u0650\u0633\u0652\u0647\u064f \u0645\u0650\u0645\u064e\u0651\u0627 \u064a\u064e\u0644\u0652\u0628\u064e\u0633\u064f"
                  translation="Tu es un homme en qui il reste de la jahiliyya. Vos serviteurs sont vos fr\u00e8res. Allah les a plac\u00e9s sous votre autorit\u00e9. Celui dont le fr\u00e8re est sous son autorit\u00e9, qu&apos;il le nourrisse de ce qu&apos;il mange et qu&apos;il le v\u00eate de ce qu&apos;il porte."
                  source="Sahih Al-Bukhari, n\u00b030 \u2014 Sahih Muslim, n\u00b01661"
                  grade="sahih"
                  explanation="Ce hadith a \u00e9t\u00e9 adress\u00e9 \u00e0 Abu Dharr apr\u00e8s qu&apos;il eut insult\u00e9 Bilal en le traitant de \u00ab fils de noire \u00bb. Le Proph\u00e8te \uFDFA le r\u00e9primanda s\u00e9v\u00e8rement en qualifiant cette attitude de \u00ab jahiliyya \u00bb. Ce r\u00e9cit montre que m\u00eame les compagnons les plus vertueux pouvaient glisser dans le racisme, et que le Proph\u00e8te \uFDFA ne tol\u00e9rait aucun compromis sur ce point. Abu Dharr, touch\u00e9, posa sa joue au sol pour que Bilal marche dessus en signe de repentir, selon certains r\u00e9cits."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sermon d&apos;adieu et les hadiths sur l&apos;\u00e9galit\u00e9 raciale constituent le fondement de la position islamique contre le racisme. Ils ne laissent aucune place \u00e0 la sup\u00e9riorit\u00e9 ethnique et \u00e9tablissent la taqwa comme seul crit\u00e8re de noblesse. Pour d\u00e9couvrir d&apos;autres enseignements du Proph\u00e8te \uFDFA, consultez notre page sur les{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du Proph\u00e8te en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="\u00c9tudiez la \u2018aqida, le fiqh et les fondements de la fraternit\u00e9 islamique avec des professeurs qualifi\u00e9s."
                href="/apprendre-science-religieuse-islam"
                linkText="D\u00e9couvrir la formation"
              />

              {/* ============================================ */}
              {/* SECTION : Fraternite islamique               */}
              {/* ============================================ */}
              <section id="fraternite-islamique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La fraternit\u00e9 islamique au-del\u00e0 des fronti\u00e8res
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Face \u00e0 la \u2018asabiyya, l&apos;islam propose un lien sup\u00e9rieur : la fraternit\u00e9 de foi (<em>ukhuwwa</em>). Cette fraternit\u00e9 transcende les fronti\u00e8res g\u00e9ographiques, les diff\u00e9rences linguistiques et les appartenances ethniques. Le Proph\u00e8te \uFDFA l&apos;a d\u00e9crite avec des m\u00e9taphores saisissantes qui illustrent l&apos;interd\u00e9pendance des croyants.
                </p>

                <HadithBlock
                  number={7}
                  title="Les croyants sont comme un seul corps"
                  narrator="An-Nu&apos;man ibn Bashir"
                  arabic="\u0645\u064e\u062b\u064e\u0644\u064f \u0627\u0644\u0652\u0645\u064f\u0624\u0652\u0645\u0650\u0646\u0650\u064a\u0646\u064e \u0641\u0650\u064a \u062a\u064e\u0648\u064e\u0627\u062f\u064f\u0651\u0647\u0650\u0645\u0652 \u0648\u064e\u062a\u064e\u0631\u064e\u0627\u062d\u064f\u0645\u0650\u0647\u0650\u0645\u0652 \u0648\u064e\u062a\u064e\u0639\u064e\u0627\u0637\u064f\u0641\u0650\u0647\u0650\u0645\u0652 \u0645\u064e\u062b\u064e\u0644\u064f \u0627\u0644\u0652\u062c\u064e\u0633\u064e\u062f\u0650\u060c \u0625\u0650\u0630\u064e\u0627 \u0627\u0634\u0652\u062a\u064e\u0643\u064e\u0649 \u0645\u0650\u0646\u0652\u0647\u064f \u0639\u064f\u0636\u0652\u0648\u064c \u062a\u064e\u062f\u064e\u0627\u0639\u064e\u0649 \u0644\u064e\u0647\u064f \u0633\u064e\u0627\u0626\u0650\u0631\u064f \u0627\u0644\u0652\u062c\u064e\u0633\u064e\u062f\u0650 \u0628\u0650\u0627\u0644\u0633\u064e\u0651\u0647\u064e\u0631\u0650 \u0648\u064e\u0627\u0644\u0652\u062d\u064f\u0645\u064e\u0651\u0649"
                  translation="L&apos;exemple des croyants dans leur amour mutuel, leur mis\u00e9ricorde et leur compassion est comme celui d&apos;un seul corps : lorsqu&apos;un membre souffre, tout le reste du corps r\u00e9pond par l&apos;insomnie et la fi\u00e8vre."
                  source="Sahih Muslim, n\u00b02586"
                  grade="sahih"
                  explanation="Cette m\u00e9taphore du corps unique est l&apos;une des plus c\u00e9l\u00e8bres de la Sunna. Elle illustre trois dimensions de la fraternit\u00e9 : l&apos;amour mutuel (<em>tawaddud</em>), la mis\u00e9ricorde (<em>tarahum</em>) et la compassion (<em>ta\u2018atuf</em>). Le Proph\u00e8te \uFDFA ne parle pas d&apos;un groupe ethnique ou d&apos;une nation, mais des \u00ab croyants \u00bb sans restriction g\u00e9ographique ni raciale. Quand un musulman souffre \u00e0 l&apos;autre bout du monde, l&apos;ensemble de la communaut\u00e9 doit ressentir cette souffrance et agir en cons\u00e9quence."
                />

                <HadithBlock
                  number={8}
                  title="Le musulman est le fr\u00e8re du musulman"
                  narrator="Ibn &apos;Umar"
                  arabic="\u0627\u0644\u0652\u0645\u064f\u0633\u0652\u0644\u0650\u0645\u064f \u0623\u064e\u062e\u064f\u0648 \u0627\u0644\u0652\u0645\u064f\u0633\u0652\u0644\u0650\u0645\u0650\u060c \u0644\u064e\u0627 \u064a\u064e\u0638\u0652\u0644\u0650\u0645\u064f\u0647\u064f \u0648\u064e\u0644\u064e\u0627 \u064a\u064f\u0633\u0652\u0644\u0650\u0645\u064f\u0647\u064f"
                  translation="Le musulman est le fr\u00e8re du musulman : il ne l&apos;opprime pas et ne le livre pas."
                  source="Sahih Al-Bukhari, n\u00b02442 \u2014 Sahih Muslim, n\u00b02580"
                  grade="sahih"
                  explanation="Ce hadith fondamental d\u00e9finit les obligations de la fraternit\u00e9 islamique. Le verbe \u00ab ne l&apos;opprime pas \u00bb (\u2018la yazlimuhu\u2019) interdit toute injustice entre musulmans, et \u00ab ne le livre pas \u00bb (\u2018la yuslimuhu\u2019) impose de ne pas l&apos;abandonner en situation de vuln\u00e9rabilit\u00e9. Cette fraternit\u00e9 est inconditionnelle : elle ne d\u00e9pend ni de la nationalit\u00e9, ni de la couleur de peau, ni de la langue. Un musulman fran\u00e7ais, un musulman nig\u00e9rian et un musulman indon\u00e9sien sont fr\u00e8res au m\u00eame titre."
                />

                <HadithBlock
                  number={9}
                  title="Les croyants sont comme un \u00e9difice"
                  narrator="Abu Musa Al-Ash&apos;ari"
                  arabic="\u0627\u0644\u0652\u0645\u064f\u0624\u0652\u0645\u0650\u0646\u064f \u0644\u0650\u0644\u0652\u0645\u064f\u0624\u0652\u0645\u0650\u0646\u0650 \u0643\u064e\u0627\u0644\u0652\u0628\u064f\u0646\u0652\u064a\u064e\u0627\u0646\u0650 \u064a\u064e\u0634\u064f\u062f\u064f\u0651 \u0628\u064e\u0639\u0652\u0636\u064f\u0647\u064f \u0628\u064e\u0639\u0652\u0636\u064b\u0627"
                  translation="Le croyant pour le croyant est comme un \u00e9difice dont les parties se soutiennent mutuellement."
                  source="Sahih Al-Bukhari, n\u00b06026 \u2014 Sahih Muslim, n\u00b02585"
                  grade="sahih"
                  explanation="Le Proph\u00e8te \uFDFA entrecroisa ses doigts en pronon\u00e7ant ces paroles, illustrant visuellement l&apos;interd\u00e9pendance des croyants. La m\u00e9taphore de l&apos;\u00e9difice compl\u00e8te celle du corps : si le corps repr\u00e9sente la solidarit\u00e9 dans la souffrance, l&apos;\u00e9difice repr\u00e9sente la solidarit\u00e9 dans la construction. Chaque croyant est une brique qui soutient les autres. Sans cette coh\u00e9sion, l&apos;\u00e9difice s&apos;\u00e9croule. Cette image est un antidote direct \u00e0 la \u2018asabiyya, qui fragmente la communaut\u00e9 en clans rivaux."
                />
              </section>

              {/* ====================================== */}
              {/* SECTION : Aimer son pays               */}
              {/* ====================================== */}
              <section id="aimer-son-pays" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Aimer son pays sans \u2018asabiyya
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La condamnation de la \u2018asabiyya ne signifie pas que l&apos;islam rejette tout attachement au pays natal ou \u00e0 la terre d&apos;origine. Le Proph\u00e8te \uFDFA lui-m\u00eame a exprim\u00e9 son amour pour La Mecque, et la Sunna reconna\u00eet le lien naturel entre l&apos;homme et sa terre. La cl\u00e9 est de distinguer l&apos;amour sain du pays et le chauvinisme qui m\u00e8ne \u00e0 l&apos;injustice.
                </p>

                <HadithBlock
                  number={10}
                  title="L&apos;amour du Proph\u00e8te \uFDFA pour La Mecque"
                  narrator="Ibn &apos;Abbas"
                  arabic="\u0645\u064e\u0627 \u0623\u064e\u0637\u0652\u064a\u064e\u0628\u064e\u0643\u0650 \u0645\u0650\u0646\u0652 \u0628\u064e\u0644\u064e\u062f\u064d \u0648\u064e\u0623\u064e\u062d\u064e\u0628\u064e\u0651\u0643\u0650 \u0625\u0650\u0644\u064e\u064a\u064e\u0651\u060c \u0648\u064e\u0644\u064e\u0648\u0652\u0644\u064e\u0627 \u0623\u064e\u0646\u064e\u0651 \u0623\u064e\u0647\u0652\u0644\u064e\u0643\u0650 \u0623\u064e\u062e\u0652\u0631\u064e\u062c\u064f\u0648\u0646\u0650\u064a \u0645\u0650\u0646\u0652\u0643\u0650 \u0645\u064e\u0627 \u062e\u064e\u0631\u064e\u062c\u0652\u062a\u064f"
                  translation="Que tu es bonne comme terre et que tu m&apos;es ch\u00e8re ! Si ton peuple ne m&apos;avait pas chass\u00e9 de toi, je ne serais jamais parti."
                  source="Jami&apos; at-Tirmidhi, n\u00b03926"
                  grade="sahih"
                  explanation="Ce hadith, prononc\u00e9 par le Proph\u00e8te \uFDFA en quittant La Mecque, t\u00e9moigne d&apos;un attachement profond \u00e0 sa ville natale. Il montre que l&apos;amour du pays est un sentiment naturel reconnu par l&apos;islam. Le Proph\u00e8te \uFDFA ne cache pas son \u00e9motion ni sa nostalgie. Toutefois, cet amour ne l&apos;a jamais conduit \u00e0 la \u2018asabiyya : il a quitt\u00e9 La Mecque par ob\u00e9issance \u00e0 Allah et a accueilli \u00e0 M\u00e9dine des compagnons de toutes origines. Les savants en d\u00e9duisent que l&apos;amour du pays est l\u00e9gitime tant qu&apos;il reste subordonn\u00e9 \u00e0 la volont\u00e9 divine."
                />

                <HadithBlock
                  number={11}
                  title="L&apos;invocation pour M\u00e9dine"
                  narrator="Aisha"
                  arabic="\u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u062d\u064e\u0628\u064e\u0651\u0628\u0652 \u0625\u0650\u0644\u064e\u064a\u0652\u0646\u064e\u0627 \u0627\u0644\u0652\u0645\u064e\u062f\u0650\u064a\u0646\u064e\u0629\u064e \u0643\u064e\u062d\u064f\u0628\u064e\u0651\u0646\u064e\u0627 \u0645\u064e\u0643\u064e\u0651\u0629\u064e \u0623\u064e\u0648\u0652 \u0623\u064e\u0634\u064e\u062f\u064e\u0651"
                  translation="\u00d4 Allah, fais-nous aimer M\u00e9dine comme nous aimons La Mecque, ou plus encore."
                  source="Sahih Al-Bukhari, n\u00b01889"
                  grade="sahih"
                  explanation="Cette invocation r\u00e9v\u00e8le que le Proph\u00e8te \uFDFA a demand\u00e9 \u00e0 Allah de placer dans le c\u0153ur des croyants l&apos;amour de leur nouvelle terre d&apos;accueil. Cela montre que l&apos;attachement \u00e0 un lieu peut \u00eatre cultiv\u00e9 et demand\u00e9 \u00e0 Allah. Pour les musulmans vivant en dehors de leurs pays d&apos;origine, ce hadith enseigne qu&apos;il est permis \u2014 et m\u00eame recommand\u00e9 \u2014 d&apos;aimer sa terre d&apos;accueil, de s&apos;y int\u00e9grer et de contribuer \u00e0 son bien-\u00eatre, sans renier ses racines ni sa foi."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le nationalisme et la \u2018asabiyya
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment comment\u00e9 les hadiths sur la \u2018asabiyya et la fraternit\u00e9 islamique. Leurs explications permettent de mieux saisir la nuance entre l&apos;attachement l\u00e9gitime et le fanatisme condamn\u00e9.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La \u2018asabiyya condamn\u00e9e est celle o\u00f9 l&apos;homme soutient son clan dans l&apos;injustice. Quant \u00e0 celui qui aime son peuple, aide les siens dans le bien et s&apos;efforce pour leur int\u00e9r\u00eat sans nuire aux autres ni commettre d&apos;injustice, cela n&apos;entre pas dans la \u2018asabiyya interdite.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith \u00ab laissez-la, elle est infecte \u00bb montre que la \u2018asabiyya est en elle-m\u00eame une corruption, m\u00eame entre des groupes l\u00e9gitimes comme les Muhajirin et les Ansar. Si elle est interdite entre les meilleurs des hommes, elle l&apos;est \u00e0 plus forte raison entre les gens ordinaires.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;islam a \u00e9tabli un lien qui d\u00e9passe les liens du sang et de la terre : le lien de la foi. Ce lien ne supprime pas les identit\u00e9s naturelles, mais les place sous l&apos;autorit\u00e9 d&apos;une r\u00e9f\u00e9rence sup\u00e9rieure. Le musulman peut \u00eatre fier de sa langue, de sa culture et de son pays, \u00e0 condition de ne pas en faire un instrument de division ou de sup\u00e9riorit\u00e9.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Cheikh Yusuf al-Qaradawi, <em>Al-Halal wa-l-Haram fi-l-Islam</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires savants \u00e9clairent une position nuanc\u00e9e et \u00e9quilibr\u00e9e. L&apos;islam ne demande pas aux musulmans de renier leur identit\u00e9 culturelle ou nationale, mais il refuse que cette identit\u00e9 devienne un facteur de division, de m\u00e9pris ou d&apos;injustice. La fraternit\u00e9 de foi doit toujours primer sur la solidarit\u00e9 de sang ou de terre.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le\u00e7ons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths pr\u00e9sent\u00e9s dans cet article permet de d\u00e9gager des le\u00e7ons concr\u00e8tes pour le musulman d&apos;aujourd&apos;hui :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Rejeter toute forme de racisme et de sup\u00e9riorit\u00e9 ethnique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le sermon d&apos;adieu ne laisse aucune ambigu\u00eft\u00e9 : aucune race, aucune ethnie, aucune nationalit\u00e9 ne conf\u00e8re de sup\u00e9riorit\u00e9. Seule la pi\u00e9t\u00e9 distingue les \u00eatres humains aux yeux d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Refuser la \u2018asabiyya sous toutes ses formes
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Qu&apos;il s&apos;agisse de tribalisme, de nationalisme chauvin ou de racisme communautaire, la \u2018asabiyya est condamn\u00e9e. Soutenir l&apos;injustice de son groupe par solidarit\u00e9 aveugle est contraire \u00e0 l&apos;enseignement proph\u00e9tique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Cultiver la fraternit\u00e9 islamique au-del\u00e0 des fronti\u00e8res
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les croyants sont un seul corps et un seul \u00e9difice. La solidarit\u00e9 avec les musulmans du monde entier est une obligation de foi, ind\u00e9pendamment des fronti\u00e8res et des nationalit\u00e9s.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Aimer son pays sans tomber dans le chauvinisme
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te \uFDFA a aim\u00e9 La Mecque et demand\u00e9 \u00e0 Allah d&apos;aimer M\u00e9dine. L&apos;attachement \u00e0 sa terre est naturel et permis, tant qu&apos;il n&apos;engendre ni m\u00e9pris pour les autres ni soutien de l&apos;injustice.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privil\u00e9gier la diversit\u00e9 comme enrichissement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Coran pr\u00e9sente la diversit\u00e9 des peuples comme un signe d&apos;Allah destin\u00e9 \u00e0 la connaissance mutuelle. Le musulman doit voir dans les diff\u00e9rences culturelles une richesse, non une menace.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Lutter contre le racisme dans nos communaut\u00e9s
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Proph\u00e8te \uFDFA a r\u00e9primand\u00e9 Abu Dharr pour une remarque raciste. Chaque musulman a le devoir de combattre le racisme, y compris au sein de sa propre communaut\u00e9, en rappelant les enseignements proph\u00e9tiques.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la fraternit\u00e9 et l&apos;\u00e9galit\u00e9 dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur le bon comportement en islam"
                  description="Les enseignements proph\u00e9tiques sur la bienveillance, la patience et les bonnes mani\u00e8res."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les 73 sectes en islam : le hadith de la division"
                  description="Analyse compl\u00e8te du hadith sur la division de la communaut\u00e9 et l&apos;unit\u00e9 islamique."
                  href="/hadith-sectes-73-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
