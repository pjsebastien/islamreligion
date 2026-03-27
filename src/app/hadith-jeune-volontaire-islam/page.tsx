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
    "Hadiths sur le jeûne volontaire et le jeûne en islam : enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur le jeûne volontaire et le jeûne en islam : mérites, jeûne du lundi et jeudi, jours blancs, Achoura, jeûne de Dawud. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le jeûne volontaire et le jeûne en islam : enseignements prophétiques",
    description:
      "Les hadiths authentiques sur le jeûne volontaire et le jeûne en islam : mérites du jeûne, lundi et jeudi, Achoura, jours blancs, jeûne de Dawud selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-jeune-volontaire-islam",
    images: [
      {
        url: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-jeune-volontaire-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du jeûne" },
  { id: "merites-jeune", label: "Les mérites du jeûne en général" },
  { id: "lundi-jeudi", label: "Le jeûne du lundi et du jeudi" },
  { id: "achoura-jours-blancs", label: "Achoura et les jours blancs" },
  { id: "jeune-dawud", label: "Le jeûne de Dawud" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les jours recommandés pour le jeûne volontaire en islam ?",
    answer:
      "Les jours recommandés pour le jeûne volontaire sont le lundi et le jeudi de chaque semaine, les trois jours blancs de chaque mois lunaire (13, 14 et 15), le jour de Achoura (10 Muharram, avec le 9 ou le 11), les six jours de Shawwal après le Ramadan, et le jour de Arafa pour les non-pèlerins. Le Prophète \u2018alayhi salatu wa salam pratiquait régulièrement ces jeûnes et encourageait sa communauté à les observer.",
  },
  {
    question:
      "Quel est le meilleur jeûne volontaire selon le Prophète ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a déclaré que le jeûne le plus aimé d\u2019Allah est le jeûne de Dawud (David), qui consiste à jeûner un jour sur deux (Bukhari 1131, Muslim 1159). Ce rythme est considéré comme le sommet du jeûne volontaire car il allie régularité et modération, sans épuiser le corps ni négliger les autres obligations.",
  },
  {
    question:
      "Le jeûne du lundi et du jeudi est-il une sunna confirmée ?",
    answer:
      "Oui, le jeûne du lundi et du jeudi est une sunna confirmée du Prophète \u2018alayhi salatu wa salam. Il a expliqué que les actes sont présentés à Allah ces deux jours et qu\u2019il aimait que ses actes soient présentés alors qu\u2019il jeûne (Tirmidhi 747). Pour le lundi, il a ajouté que c\u2019est le jour de sa naissance et du début de la révélation (Muslim 1162).",
  },
  {
    question:
      "Pourquoi le jeûne est-il décrit comme un bouclier dans les hadiths ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a dit que le jeûne est un bouclier (junna) car il protège le croyant contre les péchés, les passions et le Feu de l\u2019Enfer (Bukhari 1894, Muslim 1151). Les savants expliquent que le jeûne discipline l\u2019âme, affaiblit les désirs charnels et renforce la conscience d\u2019Allah (taqwa), constituant ainsi une protection à la fois spirituelle et morale.",
  },
  {
    question:
      "Qu\u2019est-ce que le jeûne des jours blancs et quelle est sa récompense ?",
    answer:
      "Le jeûne des jours blancs consiste à jeûner les 13, 14 et 15 de chaque mois lunaire. Le Prophète \u2018alayhi salatu wa salam a recommandé à Abu Dharr de jeûner ces trois jours, précisant que jeûner trois jours de chaque mois équivaut à jeûner le mois entier (Nasai 2408). Ces jours sont appelés \u00ab blancs \u00bb car la lune y est pleine et éclaire la nuit.",
  },
  {
    question:
      "Peut-on combiner le jeûne volontaire avec le rattrapage du Ramadan ?",
    answer:
      "Les savants divergent sur cette question. La majorité des hanbalites et certains shafi\u2019ites considèrent qu\u2019il faut d\u2019abord rattraper les jours de Ramadan manqués avant de jeûner des jours volontaires. D\u2019autres savants, comme certains malikites, autorisent le jeûne volontaire même si des jours de rattrapage sont encore dus, tant que le temps le permet. Il est préférable de consulter un savant de confiance.",
  },
];

export default function HadithJeuneVolontaireIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-jeune-volontaire-islam/#article",
        headline:
          "Hadiths sur le jeûne volontaire et le jeûne en islam",
        description:
          "Découvrez les hadiths authentiques sur le jeûne volontaire et le jeûne en islam : mérites, jeûne du lundi et jeudi, jours blancs, Achoura, jeûne de Dawud.",
        image: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-jeune-volontaire-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-jeune-volontaire-islam/#breadcrumb",
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
            name: "Jeûne volontaire",
            item: "https://www.islamreligion.fr/hadith-jeune-volontaire-islam",
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
          title="Hadiths sur le jeûne volontaire et le jeûne en islam"
          subtitle="Les enseignements prophétiques sur les mérites du jeûne, le jeûne du lundi et jeudi, les jours blancs, Achoura et le jeûne de Dawud selon la Sunna authentique."
          imageSrc="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
          imageAlt="Hadiths sur le jeûne volontaire et le jeûne en islam, dattes et chapelet"
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
                  Jeûne volontaire
                </span>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  À retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le jeûne est décrit par le Prophète ﷺ comme un bouclier qui protège le croyant contre les péchés et le Feu de l&apos;Enfer.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le jeûne volontaire du lundi et du jeudi, des jours blancs et de Achoura fait partie des sunnas régulières du Prophète ﷺ.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le jeûne de Dawud (un jour sur deux) est le jeûne le plus aimé d&apos;Allah selon la parole prophétique.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les jeûneurs bénéficient d&apos;une porte réservée au Paradis, appelée Ar-Rayyan, par laquelle aucun autre ne passera.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du jeûne en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le jeûne occupe une place centrale dans la pratique musulmane. Allah l&apos;a prescrit comme un pilier de la foi et un moyen d&apos;atteindre la piété (<em>taqwa</em>). Au-delà du jeûne obligatoire du Ramadan, le Coran et la Sunna encouragent le jeûne volontaire (<em>sawm at-tatawwu&apos;</em>) comme acte de rapprochement vers Allah. Les versets coraniques posent le cadre général sur lequel le Prophète ﷺ a bâti ses enseignements détaillés.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
                  text="Ô vous qui croyez ! Le jeûne vous a été prescrit comme il a été prescrit à ceux qui vous ont précédés, afin que vous atteigniez la piété."
                  source="Coran, sourate Al-Baqara (2:183)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur établit deux réalités : le jeûne est une prescription universelle, pratiquée par toutes les communautés avant l&apos;islam, et sa finalité première est la <em>taqwa</em> — cette conscience permanente d&apos;Allah qui oriente chaque acte du croyant. Les savants soulignent que si le jeûne du Ramadan est obligatoire, le jeûne volontaire prolonge cette quête de piété tout au long de l&apos;année, offrant au musulman un moyen constant de purification spirituelle.
                </p>

                <HadithCard
                  arabic="وَأَن تَصُومُوا خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ"
                  text="Et que vous jeûniez est meilleur pour vous, si vous saviez !"
                  source="Coran, sourate Al-Baqara (2:184)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce fragment coranique, bien qu&apos;il se rapporte au contexte du Ramadan, a été interprété par de nombreux exégètes comme un encouragement général au jeûne. L&apos;imam Al-Qurtubi note que l&apos;expression &laquo;&nbsp;si vous saviez&nbsp;&raquo; indique que les bienfaits du jeûne dépassent ce que l&apos;être humain peut percevoir. C&apos;est sur cette base que le Prophète ﷺ a multiplié les exhortations au jeûne volontaire, détaillant ses mérites dans de nombreux hadiths.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Mérites du jeûne en général  */}
              {/* ====================================== */}
              <section id="merites-jeune" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites du jeûne en général selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Avant d&apos;aborder les formes spécifiques du jeûne volontaire, il convient de comprendre pourquoi le jeûne en général occupe un rang si élevé en islam. Le Prophète ﷺ a décrit le jeûne comme une adoration unique, dont la récompense est directement attribuée par Allah sans intermédiaire. Les hadiths suivants révèlent la grandeur de cet acte de dévotion.
                </p>

                <HadithBlock
                  number={1}
                  title="Le jeûne est un bouclier"
                  narrator="Abu Hurayra"
                  arabic="الصِّيَامُ جُنَّةٌ، فَلَا يَرْفُثْ وَلَا يَجْهَلْ، وَإِنِ امْرُؤٌ قَاتَلَهُ أَوْ شَاتَمَهُ فَلْيَقُلْ: إِنِّي صَائِمٌ مَرَّتَيْنِ"
                  translation="Le jeûne est un bouclier. Que celui qui jeûne ne tienne pas de propos obscènes et ne se comporte pas avec ignorance. Si quelqu&apos;un le combat ou l&apos;insulte, qu&apos;il dise : je suis en état de jeûne, deux fois."
                  source="Sahih Al-Bukhari, n°1894"
                  grade="sahih"
                  explanation="Le terme arabe &laquo; junna &raquo; (bouclier) est lourd de sens. Le bouclier protège le guerrier au combat : de même, le jeûne protège le croyant contre les assauts de son âme et les tentations de ce monde. Le Prophète ﷺ précise que cette protection implique un comportement exemplaire : pas de propos indécents, pas de dispute. Le jeûneur qui se met en colère doit se rappeler son état pour calmer son âme. Les savants expliquent que le jeûne est un bouclier à la fois contre les péchés ici-bas et contre le Feu dans l&apos;au-delà."
                />

                <HadithBlock
                  number={2}
                  title="La porte Ar-Rayyan réservée aux jeûneurs"
                  narrator="Sahl ibn Sa&apos;d"
                  arabic="إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ يَدْخُلُ مِنْهُ الصَّائِمُونَ يَوْمَ الْقِيَامَةِ، لَا يَدْخُلُ مِنْهُ أَحَدٌ غَيْرُهُمْ"
                  translation="Il y a au Paradis une porte appelée Ar-Rayyan par laquelle entreront les jeûneurs le Jour de la Résurrection, et personne d&apos;autre n&apos;y entrera."
                  source="Sahih Al-Bukhari, n°1896 — Sahih Muslim, n°1152"
                  grade="sahih"
                  explanation="Le nom &laquo; Ar-Rayyan &raquo; vient de la racine arabe &laquo; rawa &raquo; qui signifie se désaltérer. C&apos;est un nom particulièrement significatif pour ceux qui ont enduré la soif durant leurs jeûnes. Cette porte est un honneur exclusif réservé aux jeûneurs. Les savants précisent que cela concerne tant le jeûne obligatoire que le jeûne volontaire, et que cette récompense témoigne du rang élevé du jeûne parmi les actes d&apos;adoration."
                />

                <HadithBlock
                  number={3}
                  title="Toute bonne action est multipliée sauf le jeûne"
                  narrator="Abu Hurayra"
                  arabic="كُلُّ عَمَلِ ابْنِ آدَمَ يُضَاعَفُ الْحَسَنَةُ عَشْرُ أَمْثَالِهَا إِلَى سَبْعِمِائَةِ ضِعْفٍ، قَالَ اللَّهُ عَزَّ وَجَلَّ: إِلَّا الصَّوْمَ فَإِنَّهُ لِي وَأَنَا أَجْزِي بِهِ"
                  translation="Toute action du fils d&apos;Adam est multipliée, la bonne action valant de dix à sept cents fois sa valeur. Allah — Exalté soit-Il — a dit : sauf le jeûne, car il est pour Moi et c&apos;est Moi qui en donne la récompense."
                  source="Sahih Muslim, n°1151"
                  grade="sahih"
                  explanation="Ce hadith qudsi (parole divine rapportée par le Prophète ﷺ) place le jeûne au-dessus de toutes les autres adorations en termes de récompense. L&apos;expression &laquo; il est pour Moi &raquo; signifie qu&apos;Allah s&apos;attribue personnellement la récompense du jeûne, sans la limiter à un coefficient multiplicateur. Les savants avancent plusieurs raisons : le jeûne est l&apos;acte le plus sincère car invisible aux yeux des gens, et il représente un abandon total des désirs pour la seule satisfaction d&apos;Allah."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths dressent un portrait saisissant du jeûne : un bouclier contre les péchés, une porte exclusive au Paradis et une récompense sans limite dont Allah se réserve l&apos;attribution. Pour approfondir les hadiths spécifiques au mois de Ramadan, consultez notre article sur les{" "}
                  <Link href="/hadith-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le Ramadan en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lundi et jeudi       */}
              {/* ============================== */}
              <section id="lundi-jeudi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeûne du lundi et du jeudi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les jeûnes volontaires les plus pratiqués se trouve le jeûne hebdomadaire du lundi et du jeudi. Le Prophète ﷺ observait régulièrement ce jeûne et en a expliqué les raisons dans plusieurs hadiths. Ces deux jours ont une signification spirituelle particulière qui motive le croyant à les consacrer à cette adoration.
                </p>

                <HadithBlock
                  number={4}
                  title="Les actes sont présentés le lundi et le jeudi"
                  narrator="Abu Hurayra"
                  arabic="تُعْرَضُ الأَعْمَالُ يَوْمَ الاِثْنَيْنِ وَالْخَمِيسِ فَأُحِبُّ أَنْ يُعْرَضَ عَمَلِي وَأَنَا صَائِمٌ"
                  translation="Les actes sont présentés (à Allah) le lundi et le jeudi, et j&apos;aime que mes actes soient présentés alors que je suis en état de jeûne."
                  source="Jami&apos; at-Tirmidhi, n°747"
                  grade="sahih"
                  explanation="Ce hadith révèle que le lundi et le jeudi sont des jours de présentation des actes devant Allah. Le Prophète ﷺ souhaitait être en état d&apos;adoration au moment où ses actions étaient élevées vers son Seigneur. Cette motivation spirituelle transforme ces deux jours ordinaires en opportunités de rapprochement divin. Les savants y voient un encouragement à multiplier les bonnes actions ces jours-là, et pas seulement le jeûne."
                />

                <HadithBlock
                  number={5}
                  title="Le lundi : jour de naissance et de révélation"
                  narrator="Abu Qatada"
                  arabic="سُئِلَ عَنْ صَوْمِ يَوْمِ الاِثْنَيْنِ فَقَالَ: ذَاكَ يَوْمٌ وُلِدْتُ فِيهِ وَيَوْمٌ بُعِثْتُ أَوْ أُنْزِلَ عَلَيَّ فِيهِ"
                  translation="On l&apos;interrogea sur le jeûne du lundi. Il répondit : c&apos;est le jour où je suis né et le jour où j&apos;ai été envoyé (en tant que prophète) ou le jour où la révélation m&apos;a été descendue."
                  source="Sahih Muslim, n°1162"
                  grade="sahih"
                  explanation="Ce hadith donne une raison supplémentaire au jeûne du lundi : c&apos;est le jour de la naissance du Prophète ﷺ et le jour où la première révélation lui fut descendue. Jeûner le lundi devient ainsi un acte de gratitude envers Allah pour ces deux immenses bienfaits accordés à l&apos;humanité. Les savants notent que cette forme de reconnaissance par le jeûne est conforme à la pratique des prophètes précédents."
                />

                <HadithBlock
                  number={6}
                  title="Allah pardonne à tout musulman sauf à ceux en discorde"
                  narrator="Abu Hurayra"
                  arabic="تُفْتَحُ أَبْوَابُ الْجَنَّةِ يَوْمَ الاِثْنَيْنِ وَيَوْمَ الْخَمِيسِ فَيُغْفَرُ لِكُلِّ عَبْدٍ لَا يُشْرِكُ بِاللَّهِ شَيْئًا إِلَّا رَجُلًا كَانَتْ بَيْنَهُ وَبَيْنَ أَخِيهِ شَحْنَاءُ فَيُقَالُ أَنْظِرُوا هَذَيْنِ حَتَّى يَصْطَلِحَا"
                  translation="Les portes du Paradis sont ouvertes le lundi et le jeudi, et il est pardonné à tout serviteur qui n&apos;associe rien à Allah, sauf un homme entre lequel et son frère il y a une inimitié. On dit alors : attendez que ces deux-là se réconcilient."
                  source="Sahih Muslim, n°2565"
                  grade="sahih"
                  explanation="Ce hadith ajoute une dimension sociale au jeûne du lundi et jeudi. Ces jours sont des moments de pardon divin, mais ce pardon est conditionné par la réconciliation entre les musulmans. L&apos;inimitié entre frères bloque le pardon d&apos;Allah, même le lundi et le jeudi. Les savants en déduisent que le jeûne volontaire doit s&apos;accompagner d&apos;un effort de réconciliation et de purification du coeur envers les autres."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh du jeûne, ses règles et ses mérites avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ======================================== */}
              {/* SECTION : Achoura et jours blancs        */}
              {/* ======================================== */}
              <section id="achoura-jours-blancs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeûne de Achoura et des jours blancs
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les jeûnes volontaires les plus méritoires figurent le jeûne du jour de Achoura (10 Muharram) et le jeûne des trois jours blancs de chaque mois lunaire. Ces pratiques, solidement attestées dans la Sunna, offrent au musulman des occasions régulières de se rapprocher d&apos;Allah en dehors du Ramadan.
                </p>

                <HadithBlock
                  number={7}
                  title="Le jeûne de Achoura expie les péchés d&apos;une année"
                  narrator="Abu Qatada"
                  arabic="صِيَامُ يَوْمِ عَاشُورَاءَ أَحْتَسِبُ عَلَى اللَّهِ أَنْ يُكَفِّرَ السَّنَةَ الَّتِي قَبْلَهُ"
                  translation="Pour le jeûne du jour de Achoura, j&apos;espère d&apos;Allah qu&apos;il expie (les péchés de) l&apos;année qui le précède."
                  source="Sahih Muslim, n°1162"
                  grade="sahih"
                  explanation="Le jour de Achoura, le 10 du mois de Muharram, est un jour de grande bénédiction. Le Prophète ﷺ a affirmé que son jeûne expie les péchés mineurs de l&apos;année précédente. Les savants précisent que cette expiation concerne les péchés mineurs (sagha&apos;ir), les péchés majeurs nécessitant un repentir sincère (tawba). Le Prophète ﷺ a également recommandé de jeûner le 9 avec le 10 pour se distinguer des pratiques d&apos;autres communautés."
                />

                <HadithBlock
                  number={8}
                  title="Se distinguer en jeûnant le neuvième jour avec Achoura"
                  narrator="Ibn &apos;Abbas"
                  arabic="لَئِنْ بَقِيتُ إِلَى قَابِلٍ لَأَصُومَنَّ التَّاسِعَ"
                  translation="Si je vis jusqu&apos;à l&apos;année prochaine, je jeûnerai assurément le neuvième jour (avec Achoura)."
                  source="Sahih Muslim, n°1134"
                  grade="sahih"
                  explanation="Ce hadith montre la volonté du Prophète ﷺ de se distinguer dans sa pratique. Il souhaitait ajouter le 9 Muharram au jeûne de Achoura. Bien qu&apos;il soit décédé avant de pouvoir le mettre en pratique, les savants ont retenu cette intention comme une sunna. L&apos;imam Ibn al-Qayyim explique que le meilleur est de jeûner le 9 et le 10, ou le 10 et le 11, et que jeûner les trois jours (9, 10 et 11) est encore plus méritoire."
                />

                <HadithBlock
                  number={9}
                  title="Les trois jours blancs de chaque mois"
                  narrator="Abu Dharr"
                  arabic="إِذَا صُمْتَ مِنَ الشَّهْرِ ثَلَاثَةَ أَيَّامٍ فَصُمْ ثَلَاثَ عَشْرَةَ وَأَرْبَعَ عَشْرَةَ وَخَمْسَ عَشْرَةَ"
                  translation="Si tu jeûnes trois jours du mois, jeûne le treizième, le quatorzième et le quinzième."
                  source="Sunan An-Nasa&apos;i, n°2408 — Jami&apos; at-Tirmidhi, n°761"
                  grade="sahih"
                  explanation="Le Prophète ﷺ a recommandé de jeûner ces trois jours précis de chaque mois lunaire, appelés &laquo; les jours blancs &raquo; (al-ayyam al-bid) car la lune y est pleine et la nuit est éclairée. Ce jeûne mensuel régulier équivaut, en termes de récompense, au jeûne du mois entier, puisque chaque bonne action est multipliée par dix (3 jours x 10 = 30 jours). C&apos;est une pratique accessible qui permet au musulman de maintenir un lien constant avec le jeûne tout au long de l&apos;année."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Jeûne de Dawud       */}
              {/* ============================== */}
              <section id="jeune-dawud" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeûne de Dawud : alterner un jour sur deux
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le jeûne de Dawud (David) &apos;alayhi salam est considéré par le Prophète ﷺ comme la forme la plus noble de jeûne volontaire. Il consiste à jeûner un jour et à manger le jour suivant, en alternance continue. Cette pratique allie la régularité à la modération, deux principes chers à la Sunna.
                </p>

                <HadithBlock
                  number={10}
                  title="Le jeûne le plus aimé d&apos;Allah"
                  narrator="&apos;Abdullah ibn &apos;Amr"
                  arabic="أَحَبُّ الصِّيَامِ إِلَى اللَّهِ صِيَامُ دَاوُدَ، كَانَ يَصُومُ يَوْمًا وَيُفْطِرُ يَوْمًا"
                  translation="Le jeûne le plus aimé d&apos;Allah est le jeûne de Dawud : il jeûnait un jour et mangeait un jour."
                  source="Sahih Al-Bukhari, n°1131 — Sahih Muslim, n°1159"
                  grade="sahih"
                  explanation="Ce hadith place le jeûne de Dawud au sommet des jeûnes volontaires. Le Prophète ﷺ l&apos;a qualifié de &laquo; plus aimé d&apos;Allah &raquo;, un rang qu&apos;aucun autre jeûne surérogatoire n&apos;atteint. L&apos;alternance un jour sur deux représente un équilibre parfait entre l&apos;effort spirituel et la préservation du corps. Les savants expliquent que ce rythme empêche la routine et maintient le jeûneur dans un état de vigilance permanente, car chaque jour de jeûne est suivi d&apos;un jour de repos qui renouvelle la motivation."
                />

                <HadithBlock
                  number={11}
                  title="Ne jeûne pas tout le temps"
                  narrator="&apos;Abdullah ibn &apos;Amr"
                  arabic="لَا صَامَ مَنْ صَامَ الْأَبَدَ، لَا صَامَ مَنْ صَامَ الْأَبَدَ، لَا صَامَ مَنْ صَامَ الْأَبَدَ"
                  translation="N&apos;a pas (véritablement) jeûné celui qui jeûne tout le temps. N&apos;a pas (véritablement) jeûné celui qui jeûne tout le temps. N&apos;a pas (véritablement) jeûné celui qui jeûne tout le temps."
                  source="Sahih Al-Bukhari, n°1977 — Sahih Muslim, n°1159"
                  grade="sahih"
                  explanation="Le Prophète ﷺ a répété cette phrase trois fois pour en souligner l&apos;importance. Jeûner en permanence (sawm ad-dahr) est déconseillé car il épuise le corps, diminue la qualité de l&apos;adoration et prive le jeûneur de la joie de rompre le jeûne. L&apos;imam An-Nawawi explique que celui qui jeûne sans interruption perd le sens même du jeûne, car le jeûne tire sa valeur du contraste entre privation et jouissance licite. Ce hadith fixe le jeûne de Dawud comme limite maximale du jeûne volontaire."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le jeûne de Dawud illustre un principe fondamental de la Sunna : la modération dans l&apos;adoration. Le Prophète ﷺ a toujours encouragé la régularité plutôt que l&apos;intensité ponctuelle. Un acte modeste mais constant est plus aimé d&apos;Allah qu&apos;un acte intense mais éphémère. Pour découvrir d&apos;autres paroles prophétiques, consultez notre article sur les{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du Prophète Muhammad ﷺ
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le jeûne volontaire
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des chapitres entiers au jeûne volontaire dans leurs ouvrages de jurisprudence et de spiritualité. Leurs commentaires éclairent la portée juridique et spirituelle des hadiths sur le jeûne.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le jeûne volontaire est parmi les actes les plus méritoires. Allah se l&apos;est attribué spécifiquement parce qu&apos;il est l&apos;acte le plus sincère : personne ne peut savoir si un homme jeûne ou non, sauf Allah. C&apos;est pourquoi la récompense du jeûne est sans limite connue.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le jeûne de Dawud est le plus équilibré des jeûnes, car il permet au serviteur de donner à son corps son droit et à son Seigneur son droit. Il ne tombe ni dans l&apos;excès ni dans la négligence. C&apos;est la voie du juste milieu que l&apos;islam prône en toute chose.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le jeûne des jours blancs est une sunna confirmée. Celui qui les observe régulièrement obtient la récompense de celui qui jeûne le mois entier, car chaque jour de jeûne équivaut à dix jours selon le hadith. C&apos;est la porte la plus accessible vers le jeûne volontaire régulier.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces paroles de savants convergent vers un même constat : le jeûne volontaire est une adoration de premier plan, accessible à tous, qui combine purification de l&apos;âme et discipline du corps. Les quatre écoles de jurisprudence (<em>madhahib</em>) s&apos;accordent sur le caractère recommandé (<em>mustahabb</em>) de ces jeûnes, tout en insistant sur la nécessité de ne pas s&apos;imposer un rythme insoutenable.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le jeûne volontaire
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés permet de dégager des enseignements concrets pour intégrer le jeûne volontaire dans sa vie quotidienne :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Commencer par les trois jours blancs
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Pour celui qui débute le jeûne volontaire, les trois jours blancs (13, 14 et 15 du mois lunaire) sont le point de départ idéal. Trois jours par mois suffisent pour obtenir la récompense d&apos;un mois complet de jeûne.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ajouter progressivement le lundi et le jeudi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Une fois les jours blancs maîtrisés, le musulman peut intégrer le jeûne du lundi et du jeudi. Ce rythme hebdomadaire régulier est une sunna prophétique qui transforme la semaine en une alternance de jeûne et de rupture bénéfique pour le corps et l&apos;âme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas négliger les jours méritoires de l&apos;année
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le jour de Achoura (10 Muharram) et le jour de Arafa (9 Dhul Hijja) sont des occasions annuelles d&apos;obtenir l&apos;expiation des péchés. Le musulman vigilant marque ces dates dans son calendrier et s&apos;y prépare spirituellement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilégier la régularité à l&apos;intensité
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a clairement enseigné que jeûner tout le temps n&apos;est pas une vertu. Le meilleur jeûne est celui de Dawud (un jour sur deux), mais même trois jours par mois sont amplement suffisants. L&apos;adoration la plus aimée d&apos;Allah est celle qui dure, même si elle est modeste.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Soigner son comportement durant le jeûne
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le jeûne ne se limite pas à l&apos;abstention de nourriture et de boisson. Le Prophète ﷺ a insisté sur le fait que le jeûneur doit éviter les propos indécents, les disputes et la colère. Un jeûne accompagné d&apos;un mauvais comportement perd une grande partie de sa valeur spirituelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se réconcilier avant de jeûner
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith sur le pardon du lundi et jeudi montre que l&apos;inimitié entre musulmans bloque le pardon divin. Le jeûne volontaire doit s&apos;accompagner d&apos;un effort sincère de réconciliation avec son entourage pour en tirer pleinement les fruits.
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
                  description="Comprenez les hadiths sur le jeûne dans leur langue originale et approfondissez votre connaissance de la Sunna."
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
                  title="Retrouvez tous nos hadiths par thème"
                  href="/hadith-du-jour"
                  linkText="Hadith du jour : paroles authentiques"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Prophète Muhammad ﷺ : fondements et collections"
                  description="Découvrez l&apos;histoire des grandes collections de hadiths et les critères d&apos;authenticité."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le Ramadan en islam"
                  description="Les hadiths authentiques sur le mois de Ramadan, ses mérites et les règles du jeûne obligatoire."
                  href="/hadith-ramadan-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le jeûne des mois sacrés en islam"
                  description="Les enseignements prophétiques sur le jeûne durant les mois sacrés : Muharram, Rajab, Dhul Qi&apos;da et Dhul Hijja."
                  href="/hadith-jeune-mois-sacres-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
