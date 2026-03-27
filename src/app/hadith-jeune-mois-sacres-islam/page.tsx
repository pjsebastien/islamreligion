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
    "Hadiths sur le jeûne de Rajab, Chaabane et les mois sacrés en islam",
  description:
    "Découvrez les hadiths authentiques sur le jeûne des mois sacrés en islam : Rajab, Chaabane, Muharram, Dhul Qi&apos;da et Dhul Hijja. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur le jeûne de Rajab, Chaabane et les mois sacrés en islam",
    description:
      "Les hadiths authentiques sur le jeûne durant les mois sacrés : Rajab, Chaabane, Muharram et Dhul Hijja selon la Sunna du Prophète Muhammad ﷺ.",
    url: "https://www.islamreligion.fr/hadith-jeune-mois-sacres-islam",
    images: [
      {
        url: "/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-jeune-mois-sacres-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique des mois sacrés" },
  { id: "quatre-mois-sacres", label: "Les quatre mois sacrés" },
  { id: "jeune-chaabane", label: "Le jeûne de Chaabane" },
  { id: "mois-rajab", label: "Le mois de Rajab" },
  { id: "mi-chaabane", label: "La mi-Chaabane et ses hadiths" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les quatre mois sacrés en islam ?",
    answer:
      "Les quatre mois sacrés (al-ashhur al-hurum) mentionnés dans le Coran sont Dhul Qi\u2019da (11e mois), Dhul Hijja (12e mois), Muharram (1er mois) et Rajab (7e mois). Trois d\u2019entre eux se suivent (Dhul Qi\u2019da, Dhul Hijja, Muharram) et Rajab est isolé entre Joumada ath-Thani et Chaabane. Durant ces mois, les péchés sont plus graves et les bonnes \u0153uvres plus récompensées selon les savants.",
  },
  {
    question:
      "Le jeûne du mois de Rajab est-il une sunna confirmée ?",
    answer:
      "Il n\u2019existe aucun hadith authentique qui prescrit spécifiquement le jeûne du mois de Rajab. Les savants comme Ibn Hajar et Ibn Taymiyya ont souligné que tous les hadiths attribuant un mérite particulier au jeûne de Rajab sont faibles ou inventés. Toutefois, le jeûne volontaire reste permis à tout moment de l\u2019année, y compris en Rajab, dans le cadre du jeûne habituel (lundi, jeudi, jours blancs). Ce qui est blâmé, c\u2019est de singulariser Rajab comme si le jeûne y avait un mérite spécial.",
  },
  {
    question:
      "Pourquoi le Prophète jeûnait-il beaucoup pendant Chaabane ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a expliqué que Chaabane est un mois que les gens négligent entre Rajab et Ramadan, et que les actes y sont élevés vers Allah. Il aimait que ses actes soient présentés alors qu\u2019il jeûnait (Nasa\u2019i 2357). Aisha rapporte qu\u2019il jeûnait Chaabane en entier ou presque (Bukhari 1969, Muslim 1156). Ce jeûne sert également de préparation spirituelle au Ramadan.",
  },
  {
    question:
      "Le jeûne de la mi-Chaabane (15 Chaabane) est-il recommandé ?",
    answer:
      "La majorité des savants considèrent que le jeûne spécifique du 15 Chaabane n\u2019est pas une sunna confirmée. Le hadith rapporté par Ibn Majah à ce sujet est jugé faible par les spécialistes du hadith. Toutefois, si le 15 Chaabane tombe un lundi, un jeudi ou un jour blanc, le jeûne est recommandé au titre de ces sunnas générales. Les savants invitent à ne pas singulariser cette date par un jeûne spécial sans preuve solide.",
  },
  {
    question:
      "Quel est le meilleur mois pour jeûner après le Ramadan ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a déclaré que le meilleur jeûne après le Ramadan est celui du mois de Muharram, qu\u2019il a appelé \u00ab le mois d\u2019Allah \u00bb (Muslim 1163). Il a également jeûné abondamment durant Chaabane, au point qu\u2019Aisha pensait qu\u2019il jeûnait le mois entier. Ces deux mois sont donc les plus méritoires pour le jeûne volontaire en dehors du Ramadan.",
  },
  {
    question:
      "Peut-on jeûner la deuxième moitié de Chaabane ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a interdit de jeûner un ou deux jours avant le Ramadan, sauf pour celui qui a l\u2019habitude d\u2019un jeûne régulier (Bukhari 1914). La majorité des savants distinguent entre celui qui commence un jeûne dès le début de Chaabane et le prolonge, ce qui est permis, et celui qui commence à jeûner uniquement dans la deuxième moitié, ce qui est déconseillé sans habitude préalable.",
  },
];

export default function HadithJeuneMoisSacresIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-jeune-mois-sacres-islam/#article",
        headline:
          "Hadiths sur le jeûne de Rajab, Chaabane et les mois sacrés en islam",
        description:
          "Découvrez les hadiths authentiques sur le jeûne des mois sacrés en islam : Rajab, Chaabane, Muharram et les enseignements prophétiques.",
        image: "/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-jeune-mois-sacres-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-jeune-mois-sacres-islam/#breadcrumb",
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
            name: "Jeûne des mois sacrés",
            item: "https://www.islamreligion.fr/hadith-jeune-mois-sacres-islam",
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
          title="Hadiths sur le jeûne de Rajab, Chaabane et les mois sacrés"
          subtitle="Les enseignements prophétiques sur le jeûne durant les mois sacrés du calendrier islamique : Muharram, Rajab, Chaabane et les périodes de dévotion selon la Sunna authentique."
          imageSrc="/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg"
          imageAlt="Hadiths sur le jeûne des mois sacrés en islam, lanternes et croissant de lune"
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
                  Jeûne des mois sacrés
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
                    Le Coran désigne quatre mois sacrés durant lesquels les bonnes oeuvres sont amplifiées et les péchés plus graves.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ jeûnait abondamment durant Chaabane, au point qu&apos;Aisha pensait qu&apos;il jeûnait le mois entier.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Muharram est le meilleur mois pour le jeûne volontaire après le Ramadan, selon la parole prophétique authentique.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Aucun hadith authentique ne prescrit un jeûne spécial pour le mois de Rajab : les savants mettent en garde contre les innovations à ce sujet.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique des mois sacrés en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le calendrier lunaire islamique compte douze mois, parmi lesquels quatre ont reçu un statut sacré (<em>haram</em>) depuis la création des cieux et de la terre. Ce caractère sacré remonte à Ibrahim &apos;alayhi salam et a été confirmé par le Coran et la Sunna. Durant ces mois, les actes d&apos;adoration — dont le jeûne — ont une valeur accrue, et les transgressions sont plus sévèrement considérées.
                </p>

                <HadithCard
                  arabic="إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا فِي كِتَابِ اللَّهِ يَوْمَ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ مِنْهَا أَرْبَعَةٌ حُرُمٌ ۚ ذَٰلِكَ الدِّينُ الْقَيِّمُ ۚ فَلَا تَظْلِمُوا فِيهِنَّ أَنفُسَكُمْ"
                  text="Le nombre de mois, auprès d&apos;Allah, est de douze mois, dans la prescription d&apos;Allah, le jour où Il créa les cieux et la terre. Quatre d&apos;entre eux sont sacrés : telle est la religion droite. Durant ces mois, ne vous faites pas de tort à vous-mêmes."
                  source="Coran, sourate At-Tawba (9:36)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur établit trois réalités majeures. Premièrement, le nombre de mois est fixé par Allah depuis la création, ce qui confère au calendrier lunaire une dimension sacrée. Deuxièmement, quatre de ces mois sont déclarés <em>hurum</em> (sacrés, inviolables), un statut qui existait déjà à l&apos;époque préislamique et que l&apos;islam a confirmé. Troisièmement, l&apos;injonction &laquo;&nbsp;ne vous faites pas de tort à vous-mêmes&nbsp;&raquo; indique que les péchés commis durant ces mois sont plus graves, et — par symétrie — que les bonnes oeuvres y sont plus récompensées. C&apos;est sur cette base que les savants encouragent le jeûne volontaire durant les mois sacrés.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam At-Tabari et Ibn Kathir soulignent que le terme <em>hurum</em> signifie que ces mois sont &laquo;&nbsp;protégés&nbsp;&raquo; : il est interdit d&apos;y combattre (sauf en cas de légitime défense), et le croyant est invité à y redoubler d&apos;efforts dans l&apos;adoration. Le Prophète ﷺ a précisé quels sont ces mois et a donné des enseignements spécifiques sur le jeûne durant certaines de ces périodes.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Les quatre mois sacrés       */}
              {/* ====================================== */}
              <section id="quatre-mois-sacres" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les quatre mois sacrés et le jeûne selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a identifié nommément les quatre mois sacrés lors de son sermon d&apos;adieu et dans d&apos;autres occasions. Il a également désigné le mois de Muharram comme le meilleur mois pour le jeûne volontaire après le Ramadan. Les hadiths suivants détaillent ces enseignements.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;identification des quatre mois sacrés"
                  narrator="Abu Bakra"
                  arabic="إِنَّ الزَّمَانَ قَدِ اسْتَدَارَ كَهَيْئَتِهِ يَوْمَ خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ، السَّنَةُ اثْنَا عَشَرَ شَهْرًا مِنْهَا أَرْبَعَةٌ حُرُمٌ: ثَلَاثٌ مُتَوَالِيَاتٌ ذُو الْقَعْدَةِ وَذُو الْحِجَّةِ وَالْمُحَرَّمُ، وَرَجَبُ مُضَرَ الَّذِي بَيْنَ جُمَادَى وَشَعْبَانَ"
                  translation="Le temps a accompli son cycle comme le jour où Allah a créé les cieux et la terre. L&apos;année compte douze mois, dont quatre sont sacrés : trois se suivent — Dhul Qi&apos;da, Dhul Hijja et Muharram — et Rajab de Mudar, qui se situe entre Joumada et Chaabane."
                  source="Sahih Al-Bukhari, n°3197 — Sahih Muslim, n°1679"
                  grade="sahih"
                  explanation="Ce hadith, prononcé lors du pèlerinage d&apos;adieu, identifie avec précision les quatre mois sacrés. Le Prophète ﷺ précise &laquo; Rajab de Mudar &raquo; pour le distinguer d&apos;un autre mois que certaines tribus arabes appelaient aussi Rajab. Les trois mois consécutifs (Dhul Qi&apos;da, Dhul Hijja, Muharram) encadrent la saison du pèlerinage, garantissant la sécurité des pèlerins. Rajab, isolé au milieu de l&apos;année, était le mois de la &apos;Umra chez les Arabes. Les savants déduisent de ce hadith que toute adoration surérogatoire accomplie durant ces mois a une valeur accrue."
                />

                <HadithBlock
                  number={2}
                  title="Le meilleur jeûne après le Ramadan : Muharram"
                  narrator="Abu Hurayra"
                  arabic="أَفْضَلُ الصِّيَامِ بَعْدَ رَمَضَانَ شَهْرُ اللَّهِ الْمُحَرَّمُ، وَأَفْضَلُ الصَّلَاةِ بَعْدَ الْفَرِيضَةِ صَلَاةُ اللَّيْلِ"
                  translation="Le meilleur jeûne après le Ramadan est le jeûne du mois d&apos;Allah, Muharram. Et la meilleure prière après la prière obligatoire est la prière de la nuit."
                  source="Sahih Muslim, n°1163"
                  grade="sahih"
                  explanation="Ce hadith place Muharram au sommet des mois pour le jeûne volontaire. L&apos;expression &laquo; mois d&apos;Allah &raquo; (<em>shahr Allah</em>) est remarquable : c&apos;est le seul mois que le Prophète ﷺ a attribué directement à Allah, ce qui souligne sa noblesse. Les savants expliquent que ce titre honorifique distingue Muharram des autres mois sacrés. Le hadith associe deux adorations surérogatoires d&apos;excellence : le jeûne de Muharram et la prière nocturne (<em>qiyam al-layl</em>). Ibn Rajab note que si le Prophète ﷺ n&apos;a pas jeûné Muharram en entier, c&apos;est qu&apos;il n&apos;a connu ce mérite qu&apos;à la fin de sa vie."
                />

                <HadithBlock
                  number={3}
                  title="Le jeûne durant les mois sacrés"
                  narrator="Mujiba al-Bahiliyya, d&apos;après son père ou son oncle"
                  arabic="صُمْ مِنَ الْحُرُمِ وَاتْرُكْ، صُمْ مِنَ الْحُرُمِ وَاتْرُكْ، صُمْ مِنَ الْحُرُمِ وَاتْرُكْ"
                  translation="Jeûne durant les mois sacrés puis cesse, jeûne durant les mois sacrés puis cesse, jeûne durant les mois sacrés puis cesse."
                  source="Sunan Abu Dawud, n°2428"
                  grade="hasan"
                  explanation="Ce hadith, répété trois fois pour en souligner l&apos;importance, encourage le jeûne durant les mois sacrés tout en préconisant l&apos;alternance. Le Prophète ﷺ ne demande pas de jeûner les mois sacrés en entier, mais d&apos;y pratiquer le jeûne de manière régulière et mesurée. Les savants y voient un encouragement au jeûne volontaire durant Muharram, Rajab, Dhul Qi&apos;da et Dhul Hijja, en alternant les jours de jeûne et les jours de rupture, conformément au principe de modération qui caractérise la Sunna."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent le cadre général du jeûne durant les mois sacrés. Muharram est le plus méritoire, suivi des autres mois sacrés. La pratique prophétique invite à la régularité et à la mesure, sans excès ni négligence. Pour découvrir les hadiths spécifiques au jeûne hebdomadaire et aux jours blancs, consultez notre article sur les{" "}
                  <Link href="/hadith-jeune-volontaire-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le jeûne volontaire en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Jeûne de Chaabane    */}
              {/* ============================== */}
              <section id="jeune-chaabane" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeûne de Chaabane selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaabane est le huitième mois du calendrier lunaire islamique, situé entre Rajab et Ramadan. Bien qu&apos;il ne fasse pas partie des quatre mois sacrés, il occupe une place particulière dans la Sunna en raison du jeûne abondant qu&apos;y pratiquait le Prophète ﷺ. Les hadiths suivants révèlent pourquoi ce mois mérite une attention spéciale de la part du croyant.
                </p>

                <HadithBlock
                  number={4}
                  title="Le Prophète ﷺ jeûnait Chaabane presque en entier"
                  narrator="Aisha"
                  arabic="لَمْ يَكُنِ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَصُومُ شَهْرًا أَكْثَرَ مِنْ شَعْبَانَ فَإِنَّهُ كَانَ يَصُومُ شَعْبَانَ كُلَّهُ"
                  translation="Le Prophète ﷺ ne jeûnait aucun mois plus que Chaabane, car il jeûnait Chaabane en entier."
                  source="Sahih Al-Bukhari, n°1969 — Sahih Muslim, n°1156"
                  grade="sahih"
                  explanation="Ce hadith rapporté par Aisha établit que Chaabane était le mois de prédilection du Prophète ﷺ pour le jeûne volontaire, après le Ramadan bien sûr. L&apos;expression &laquo; en entier &raquo; est comprise par les savants comme &laquo; la majeure partie &raquo;, car d&apos;autres récits d&apos;Aisha précisent qu&apos;il jeûnait &laquo; Chaabane sauf quelques jours &raquo;. L&apos;imam An-Nawawi explique que l&apos;expression arabe &laquo; kullahu &raquo; peut signifier &laquo; la plus grande partie &raquo; dans l&apos;usage courant. Ce jeûne intensif servait de préparation au Ramadan, habituant le corps et l&apos;esprit à l&apos;abstinence prolongée."
                />

                <HadithBlock
                  number={5}
                  title="Chaabane, un mois que les gens négligent"
                  narrator="Usama ibn Zayd"
                  arabic="قُلْتُ: يَا رَسُولَ اللَّهِ، لَمْ أَرَكَ تَصُومُ مِنَ الشُّهُورِ مَا تَصُومُ مِنْ شَعْبَانَ؟ قَالَ: ذَلِكَ شَهْرٌ يَغْفُلُ النَّاسُ عَنْهُ بَيْنَ رَجَبٍ وَرَمَضَانَ، وَهُوَ شَهْرٌ تُرْفَعُ فِيهِ الْأَعْمَالُ إِلَى رَبِّ الْعَالَمِينَ، فَأُحِبُّ أَنْ يُرْفَعَ عَمَلِي وَأَنَا صَائِمٌ"
                  translation="J&apos;ai dit : Ô Messager d&apos;Allah, je ne t&apos;ai pas vu jeûner un mois autant que Chaabane. Il a répondu : c&apos;est un mois que les gens négligent entre Rajab et Ramadan, et c&apos;est un mois durant lequel les actes sont élevés vers le Seigneur des mondes. J&apos;aime que mes actes soient élevés alors que je suis en état de jeûne."
                  source="Sunan An-Nasa&apos;i, n°2357"
                  grade="hasan"
                  explanation="Ce hadith donne deux raisons au jeûne intensif de Chaabane. La première est que ce mois est négligé par les gens, coincé entre le prestigieux Rajab et le sacré Ramadan. Jeûner dans un moment d&apos;inattention générale est plus méritoire, car cela témoigne d&apos;une sincérité particulière. La seconde raison est la présentation annuelle des actes devant Allah durant ce mois. Le Prophète ﷺ souhaitait être en état d&apos;adoration lors de ce bilan divin. Les savants distinguent cette présentation annuelle de la présentation hebdomadaire (lundi et jeudi) mentionnée dans d&apos;autres hadiths."
                />

                <HadithBlock
                  number={6}
                  title="Ne devancez pas le Ramadan par un ou deux jours de jeûne"
                  narrator="Abu Hurayra"
                  arabic="لَا تَقَدَّمُوا رَمَضَانَ بِصَوْمِ يَوْمٍ وَلَا يَوْمَيْنِ، إِلَّا رَجُلٌ كَانَ يَصُومُ صَوْمًا فَلْيَصُمْهُ"
                  translation="Ne devancez pas le Ramadan par un jeûne d&apos;un jour ou de deux jours, sauf un homme qui avait l&apos;habitude d&apos;un jeûne (régulier) : qu&apos;il le jeûne."
                  source="Sahih Al-Bukhari, n°1914 — Sahih Muslim, n°1082"
                  grade="sahih"
                  explanation="Ce hadith fixe une limite claire : il est interdit de jeûner un ou deux jours juste avant le Ramadan dans l&apos;intention de le &laquo; devancer &raquo;. L&apos;exception concerne celui qui a un jeûne habituel, comme le jeûne du lundi et du jeudi. Les savants expliquent la sagesse de cette interdiction : elle vise à distinguer nettement le jeûne obligatoire du jeûne volontaire, et à permettre au jeûneur d&apos;aborder le Ramadan avec énergie et sans fatigue accumulée. L&apos;imam Ash-Shafi&apos;i a déduit de ce hadith qu&apos;il est recommandé de cesser le jeûne volontaire à partir du 15 Chaabane pour ceux qui n&apos;ont pas de jeûne régulier."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le jeûne de Chaabane occupe une place unique dans la Sunna. Il prépare le corps et l&apos;esprit au Ramadan, tout en étant un acte d&apos;adoration autonome. La Sunna encourage d&apos;y multiplier le jeûne dans sa première moitié, puis de modérer dans la seconde moitié afin d&apos;aborder le Ramadan dans les meilleures conditions. Pour approfondir les mérites du Ramadan lui-même, consultez notre article sur les{" "}
                  <Link href="/hadith-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le Ramadan en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh du jeûne, les mois sacrés et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Le mois de Rajab     */}
              {/* ============================== */}
              <section id="mois-rajab" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mois de Rajab et le jeûne selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Rajab est le septième mois du calendrier lunaire et le seul des quatre mois sacrés à être isolé des trois autres. Il bénéficie d&apos;un statut particulier dans la tradition islamique, mais les hadiths authentiques à son sujet sont moins nombreux que ce que l&apos;on pourrait croire. Le Prophète ﷺ n&apos;a pas prescrit de jeûne spécifique pour Rajab, contrairement à ce que de nombreuses traditions populaires laissent entendre. Les hadiths suivants apportent les éclairages nécessaires.
                </p>

                <HadithBlock
                  number={7}
                  title="Umar frappait les mains de ceux qui singularisaient Rajab"
                  narrator="Kharacha ibn al-Hurr"
                  arabic="رَأَيْتُ عُمَرَ يَضْرِبُ أَكُفَّ النَّاسِ فِي رَجَبٍ حَتَّى يَضَعُوهَا فِي الْجِفَانِ وَيَقُولُ: كُلُوا فَإِنَّمَا هُوَ شَهْرٌ كَانَ يُعَظِّمُهُ أَهْلُ الْجَاهِلِيَّةِ"
                  translation="J&apos;ai vu Umar frapper les mains des gens en Rajab jusqu&apos;à ce qu&apos;ils les posent dans les plats, et il disait : mangez, car ce n&apos;est qu&apos;un mois que les gens de la Jahiliyya (période préislamique) glorifiaient."
                  source="Musannaf Ibn Abi Shayba, n°9854 — rapporté par Al-Bayhaqi"
                  grade="sahih"
                  explanation="Cet athar (récit des compagnons) est fondamental pour comprendre la position de l&apos;islam sur Rajab. Umar ibn al-Khattab, le deuxième calife, combattait activement la sacralisation excessive de Rajab. Il forçait ceux qui refusaient de manger — par jeûne — à rompre leur abstinence, car il considérait que singulariser Rajab par le jeûne est un héritage préislamique. Les savants déduisent de cette position que le jeûne spécifiquement réservé à Rajab, sans être accompagné d&apos;un jeûne régulier les autres mois, est déconseillé."
                />

                <HadithBlock
                  number={8}
                  title="Le Prophète ﷺ n&apos;a pas singularisé Rajab"
                  narrator="Ibn &apos;Abbas"
                  arabic="نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ صِيَامِ رَجَبٍ"
                  translation="Le Messager d&apos;Allah ﷺ a interdit le jeûne (continu) de Rajab."
                  source="Sunan Ibn Majah, n°1743"
                  grade="daif"
                  explanation="Ce hadith, bien que jugé faible par les spécialistes de la science du hadith comme Al-Albani et Ibn Hajar, est mentionné car il est fréquemment cité dans les discussions sur le jeûne de Rajab. Les savants qui l&apos;utilisent le renforcent par l&apos;athar de Umar et par l&apos;absence de hadith authentique prescrivant le jeûne spécifique de Rajab. La conclusion des juristes est nuancée : le jeûne volontaire en Rajab est permis s&apos;il s&apos;inscrit dans un jeûne habituel (lundi, jeudi, jours blancs), mais il est déconseillé de singulariser ce mois comme s&apos;il avait un mérite spécial pour le jeûne."
                />

                <HadithBlock
                  number={9}
                  title="L&apos;invocation en apprenant l&apos;entrée de Rajab"
                  narrator="Anas ibn Malik"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا دَخَلَ رَجَبٌ قَالَ: اللَّهُمَّ بَارِكْ لَنَا فِي رَجَبٍ وَشَعْبَانَ وَبَلِّغْنَا رَمَضَانَ"
                  translation="Lorsque le mois de Rajab arrivait, le Messager d&apos;Allah ﷺ disait : Ô Allah, bénis-nous en Rajab et en Chaabane, et fais-nous parvenir au Ramadan."
                  source="Musnad Ahmad, n°2346 — rapporté par At-Tabarani"
                  grade="daif"
                  explanation="Ce hadith est jugé faible dans sa chaîne de transmission par les muhaddithun, notamment en raison du narrateur Za&apos;ida ibn Abi ar-Ruqad. Cependant, les savants comme An-Nawawi et Ibn Rajab l&apos;ont mentionné dans le cadre des invocations saisonnières. Malgré sa faiblesse, cette invocation reflète un enseignement authentique : le croyant doit souhaiter atteindre le Ramadan et considérer les mois qui le précèdent comme une préparation spirituelle. Plusieurs savants autorisent la pratique de cette invocation au titre des <em>fada&apos;il al-a&apos;mal</em> (mérites des actes), tout en précisant qu&apos;elle n&apos;est pas une sunna confirmée."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La position des savants sur Rajab est claire : c&apos;est un mois sacré dont le statut est confirmé par le Coran et les hadiths, mais il n&apos;existe pas de jeûne spécifique qui lui soit prescrit. Le musulman peut y jeûner dans le cadre de ses pratiques habituelles, mais ne doit pas inventer des adorations sans fondement textuel solide.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : La mi-Chaabane       */}
              {/* ============================== */}
              <section id="mi-chaabane" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La mi-Chaabane et ses hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La nuit du 15 Chaabane (<em>laylat an-nisf min Cha&apos;ban</em>) fait l&apos;objet de nombreuses discussions parmi les savants. Certains hadiths évoquent des mérites pour cette nuit, tandis que d&apos;autres spécialistes contestent leur authenticité. Il est important d&apos;examiner ces textes avec rigueur pour distinguer ce qui relève de la Sunna de ce qui relève de la coutume populaire.
                </p>

                <HadithBlock
                  number={10}
                  title="Allah regarde Sa création la nuit de la mi-Chaabane"
                  narrator="Mu&apos;adh ibn Jabal"
                  arabic="يَطَّلِعُ اللَّهُ إِلَى خَلْقِهِ فِي لَيْلَةِ النِّصْفِ مِنْ شَعْبَانَ فَيَغْفِرُ لِجَمِيعِ خَلْقِهِ إِلَّا لِمُشْرِكٍ أَوْ مُشَاحِنٍ"
                  translation="Allah regarde Sa création la nuit de la mi-Chaabane et pardonne à toutes Ses créatures, sauf à l&apos;associateur (mushrik) et à celui qui nourrit une inimitié (mushâhin)."
                  source="Sahih Ibn Hibban, n°5665 — rapporté par At-Tabarani dans Al-Kabir"
                  grade="hasan"
                  explanation="Ce hadith, dont la chaîne est renforcée par plusieurs voies de transmission, est considéré comme acceptable (hasan li-ghayrihi) par une partie des savants, dont Al-Albani dans Silsilat as-Sahiha (n°1144). Il mentionne un pardon divin général la nuit du 15 Chaabane, avec deux exceptions : celui qui associe à Allah et celui qui est en conflit avec son prochain. Les savants qui l&apos;authentifient en déduisent que cette nuit a un mérite, mais sans prescription d&apos;adoration spéciale. Le pardon est accordé par miséricorde divine, et non en réponse à un rituel particulier."
                />

                <HadithBlock
                  number={11}
                  title="Le hadith sur le jeûne du 15 Chaabane"
                  narrator="Ali ibn Abi Talib"
                  arabic="إِذَا كَانَتْ لَيْلَةُ النِّصْفِ مِنْ شَعْبَانَ فَقُومُوا لَيْلَهَا وَصُومُوا نَهَارَهَا"
                  translation="Lorsque arrive la nuit de la mi-Chaabane, priez durant sa nuit et jeûnez durant son jour."
                  source="Sunan Ibn Majah, n°1388"
                  grade="daif"
                  explanation="Ce hadith, rapporté par Ibn Majah, est jugé faible (<em>da&apos;if</em>) par la majorité des spécialistes du hadith, en raison de la présence d&apos;Ibn Abi Sabra dans la chaîne, que les critiques considèrent comme un narrateur abandonné. L&apos;imam Ibn al-Jawzi l&apos;a même classé parmi les hadiths inventés (<em>mawdu&apos;</em>). De ce fait, les savants ne recommandent pas de singulariser le 15 Chaabane par un jeûne spécial sur la base de ce texte. Toutefois, si cette date coïncide avec un lundi, un jeudi ou un jour blanc (le 15 étant un jour blanc), le jeûne est légitime au titre de ces sunnas générales."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La mi-Chaabane est un sujet qui requiert de la nuance. Si certains hadiths attribuent un mérite à cette nuit, les savants s&apos;accordent sur le fait qu&apos;aucune adoration spécifique (prière particulière, jeûne exclusif) ne lui est prescrite de manière authentique. Le croyant peut profiter de cette nuit pour faire des invocations, se repentir et se réconcilier avec autrui, sans inventer de rituels non fondés. Pour approfondir le thème du pardon divin et des invocations, consultez notre article sur les{" "}
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
                  Ce que disent les savants sur le jeûne des mois sacrés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants de l&apos;islam ont consacré des chapitres entiers au statut des mois sacrés et au jeûne qui s&apos;y rapporte. Leurs commentaires éclairent la portée juridique des hadiths et permettent de distinguer les pratiques fondées de celles qui relèvent de l&apos;innovation.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Quant au jeûne spécifiquement lié au mois de Rajab, tous les hadiths qui y sont rapportés sont faibles, voire inventés. Aucun des spécialistes du hadith ne s&apos;appuie sur quoi que ce soit les concernant. Ce ne sont pas du genre des hadiths faibles que l&apos;on rapporte dans les mérites, mais la plupart d&apos;entre eux sont inventés et mensongers.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Tabyin al-&apos;Ajab bima warada fi fadl Rajab</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le jeûne le plus aimé d&apos;Allah après le Ramadan est le jeûne de Muharram, comme le montre le hadith authentique. Le Prophète ﷺ a nommé ce mois &laquo; le mois d&apos;Allah &raquo;, ce qui indique sa noblesse particulière. Quant à Chaabane, le Prophète ﷺ y jeûnait abondamment en raison de la présentation annuelle des actes devant Allah. Le croyant avisé saisit ces occasions de se rapprocher de son Seigneur.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Rajab al-Hanbali, <em>Lata&apos;if al-Ma&apos;arif</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La nuit de la mi-Chaabane a un mérite selon un groupe de savants du Cham (Levant) et d&apos;autres. La majorité s&apos;accordent sur le fait que prier cette nuit individuellement est recommandé. Mais les prières collectives innovées, les rituels spéciaux et les festins organisés cette nuit-là n&apos;ont aucun fondement dans la Sunna et doivent être abandonnés.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Al-Majmu&apos;</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces paroles illustrent la rigueur méthodologique des savants dans leur approche des mois sacrés. Ils distinguent soigneusement entre ce qui est attesté par des preuves solides et ce qui relève de la tradition populaire non fondée. La position consensuelle est que le jeûne volontaire durant les mois sacrés est recommandé dans le cadre des sunnas générales, mais qu&apos;aucun rituel spécifique n&apos;a été prescrit en dehors du jeûne de Achoura.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques sur le jeûne des mois sacrés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths et paroles de savants présentés permet de dégager des enseignements concrets pour le musulman soucieux de tirer profit des mois sacrés :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier le jeûne durant Muharram
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Muharram est le mois le plus méritoire pour le jeûne volontaire après le Ramadan. Le Prophète ﷺ l&apos;a qualifié de &laquo; mois d&apos;Allah &raquo;, un titre honorifique unique. Jeûnez-y autant que possible, en particulier le jour de Achoura (10 Muharram) avec le 9 ou le 11.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Jeûner abondamment durant Chaabane, surtout la première moitié
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Suivez l&apos;exemple du Prophète ﷺ en multipliant le jeûne durant la première moitié de Chaabane. Ce jeûne prépare le corps au Ramadan et coïncide avec la présentation annuelle des actes devant Allah. Évitez de jeûner dans la deuxième moitié si vous n&apos;avez pas de jeûne régulier.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas singulariser Rajab par un jeûne spécial
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Aucun hadith authentique ne prescrit le jeûne spécifique de Rajab. Continuez vos pratiques habituelles (lundi, jeudi, jours blancs) sans ajouter de rituel innovant. Le mois est sacré, mais son statut n&apos;implique pas une forme de jeûne qui lui soit propre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se réconcilier avant la mi-Chaabane
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith sur la mi-Chaabane mentionne que le pardon divin exclut celui qui nourrit une inimitié. Profitez de cette période pour vous réconcilier avec vos proches et purifier votre coeur de toute rancune. Le pardon entre les êtres précède le pardon divin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Vérifier les hadiths avant de les pratiquer
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les mois sacrés sont entourés de nombreuses traditions faibles ou inventées. Avant d&apos;adopter une pratique liée à Rajab, Chaabane ou la mi-Chaabane, vérifiez son authenticité auprès des sources fiables. L&apos;adoration en islam se fonde sur des preuves, non sur les coutumes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Considérer Rajab et Chaabane comme une préparation au Ramadan
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les pieux prédécesseurs considéraient Rajab comme le mois des semailles, Chaabane comme le mois de l&apos;irrigation et le Ramadan comme le mois de la récolte. Utilisez cette période pour vous préparer spirituellement : augmentez la récitation du Coran, multipliez les invocations et habituez-vous au jeûne.
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
                  description="Comprenez les hadiths sur le jeûne et les mois sacrés dans leur langue originale et approfondissez votre connaissance de la Sunna."
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
                  title="Hadiths sur le jeûne volontaire en islam"
                  description="Les mérites du jeûne en dehors du Ramadan : lundi et jeudi, jours blancs, Achoura et jeûne de Dawud."
                  href="/hadith-jeune-volontaire-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
