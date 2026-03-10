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
    "Hadiths sur le voisin en islam : droits, devoirs et enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur les droits du voisin en islam : recommandations de Jibril, partage de nourriture, bon comportement, droits des voisins musulmans et non-musulmans.",
  openGraph: {
    title:
      "Hadiths sur le voisin en islam : droits, devoirs et enseignements prophétiques",
    description:
      "Les hadiths authentiques sur le voisin en islam : l&apos;insistance de Jibril, le partage, la bienveillance et les droits du voisinage selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-voisin-islam",
    images: [
      {
        url: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-voisin-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du voisinage" },
  { id: "recommandation-jibril", label: "La recommandation de Jibril" },
  { id: "bon-comportement-voisin", label: "Le bon comportement envers le voisin" },
  { id: "partage-nourriture", label: "Partager la nourriture avec le voisin" },
  { id: "categories-voisins", label: "Les catégories de voisins" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur le voisin en islam ?",
    answer:
      "Les hadiths les plus importants sur le voisin incluent celui rapporté par Aisha et Ibn \u2018Umar sur l\u2019insistance de Jibril (Bukhari 6014, Muslim 2625), celui d\u2019Abu Hurayra sur l\u2019interdiction de nuire au voisin (Bukhari 6018), et celui d\u2019Abu Dharr sur le partage de nourriture (Muslim 2625). Ces hadiths couvrent les trois piliers du voisinage en islam : le respect, la générosité et la protection.",
  },
  {
    question:
      "Pourquoi l\u2019ange Jibril a-t-il autant insisté sur les droits du voisin ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a rapporté que Jibril ne cessait de lui recommander le voisin au point qu\u2019il pensa que le voisin allait hériter de son voisin. Cette insistance montre l\u2019importance capitale du voisinage en islam. Les savants expliquent que le voisin est la personne la plus proche géographiquement, et que la stabilité de la société commence par des relations de voisinage saines.",
  },
  {
    question:
      "Un musulman doit-il bien traiter son voisin non-musulman ?",
    answer:
      "Oui, les droits du voisinage s\u2019appliquent à tout voisin, qu\u2019il soit musulman ou non. Le Prophète \u2018alayhi salatu wa salam a lui-même offert des cadeaux à ses voisins non-musulmans. Ibn \u2018Umar rapporte qu\u2019il ordonna à son serviteur de donner de la viande sacrificielle à son voisin juif (Tirmidhi 1943). Les savants distinguent trois catégories de voisins avec des droits cumulatifs, mais le droit fondamental du voisinage est commun à tous.",
  },
  {
    question:
      "Que dit le Prophète sur celui qui nuit à son voisin ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a lié la foi au bon traitement du voisin en disant : \u00ab Celui qui croit en Allah et au Jour dernier, qu\u2019il ne nuise pas à son voisin \u00bb (Bukhari 6018). Dans un autre hadith, il a affirmé que celui dont le voisin n\u2019est pas à l\u2019abri de ses méfaits n\u2019entre pas au Paradis (Muslim 46). Ces avertissements sévères montrent que nuire au voisin est un péché majeur.",
  },
  {
    question:
      "Comment partager la nourriture avec son voisin selon la Sunna ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a dit : \u00ab Quand tu prépares un bouillon, augmente l\u2019eau et donne-en à tes voisins \u00bb (Muslim 2625). Il a également interdit à quiconque de se coucher rassasié tandis que son voisin a faim (rapporté par Al-Hakim et Al-Bayhaqi). Le partage de nourriture est un acte simple mais fondamental du bon voisinage en islam.",
  },
  {
    question:
      "Quelles sont les trois catégories de voisins en islam ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a distingué trois catégories de voisins : le voisin qui a un seul droit (le droit du voisinage seul, comme le voisin non-musulman non-apparenté), le voisin qui a deux droits (le droit du voisinage et le droit de l\u2019islam, comme le voisin musulman non-apparenté), et le voisin qui a trois droits (le droit du voisinage, le droit de l\u2019islam et le droit de parenté). Ce hadith est rapporté par Al-Bazzar.",
  },
  {
    question:
      "Jusqu\u2019où s\u2019étend le voisinage en islam ?",
    answer:
      "Les savants ont divergé sur la limite du voisinage. Certains, comme Ali ibn Abi Talib, ont défini le voisin comme celui dont on entend l\u2019appel (quarante maisons dans chaque direction). D\u2019autres savants considèrent que c\u2019est une notion relative qui dépend des coutumes locales. L\u2019essentiel est que le voisin le plus proche a le plus de droits, comme le confirme le hadith d\u2019Aisha (Bukhari 2259).",
  },
  {
    question:
      "Quels sont les droits concrets du voisin en islam ?",
    answer:
      "Les droits concrets du voisin incluent : ne pas lui nuire, supporter ses éventuels désagréments avec patience, le saluer, lui rendre visite quand il est malade, le consoler en cas de malheur, partager la nourriture avec lui, ne pas l\u2019espionner, protéger son honneur en son absence et ne pas construire ce qui bloquerait l\u2019aération de sa maison sans sa permission. Les savants ont compilé jusqu\u2019à trente droits du voisin à partir des hadiths.",
  },
];

export default function HadithVoisinIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-voisin-islam/#article",
        headline:
          "Hadiths sur le voisin en islam : droits, devoirs et enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur les droits du voisin en islam : recommandations de Jibril, partage de nourriture, bon comportement.",
        image: "/images/grande-mosquee-blanche-minarets-islam-architecture.jpg",
        datePublished: "2026-05-05",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-voisin-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-voisin-islam/#breadcrumb",
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
            name: "Hadiths sur le voisin",
            item: "https://www.islamreligion.fr/hadith-voisin-islam",
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
          title="Hadiths sur le voisin en islam"
          subtitle="Les enseignements prophétiques sur les droits du voisin, le partage, la bienveillance et le bon comportement envers ses voisins selon la Sunna authentique."
          imageSrc="/images/grande-mosquee-blanche-minarets-islam-architecture.jpg"
          imageAlt="Hadiths sur le voisin en islam, droits et devoirs du voisinage"
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
                  Hadiths sur le voisin
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
                    L&apos;ange Jibril a tellement insisté sur les droits du voisin que le Prophète ﷺ a cru que le voisin allait hériter de son voisin.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Nuire à son voisin est un signe de faiblesse de foi, et celui dont le voisin n&apos;est pas à l&apos;abri de ses méfaits n&apos;entrera pas au Paradis.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le partage de nourriture avec le voisin est une sunna prophétique, même s&apos;il s&apos;agit simplement d&apos;augmenter l&apos;eau du bouillon.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les droits du voisinage s&apos;appliquent à tout voisin, qu&apos;il soit musulman ou non-musulman, apparenté ou non.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du voisinage en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths, il convient de rappeler que le Coran lui-même pose les fondements du bon voisinage. Allah a mentionné les droits du voisin dans un verset qui rassemble les principales obligations sociales du musulman, plaçant le voisin juste après les parents et les proches dans l&apos;ordre des priorités.
                </p>

                <HadithCard
                  arabic="وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا وَبِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَالْجَارِ ذِي الْقُرْبَىٰ وَالْجَارِ الْجُنُبِ"
                  text="Adorez Allah et ne Lui donnez aucun associé. Agissez avec bonté envers vos père et mère, les proches, les orphelins, les pauvres, le proche voisin, le voisin lointain."
                  source="Coran, sourate An-Nisa (4:36)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur est remarquable par sa structure. Il commence par le droit d&apos;Allah (le tawhid), puis enchaîne avec les droits des créatures dans un ordre de proximité : les parents, les proches, puis les voisins. Les exégètes soulignent qu&apos;Allah mentionne deux catégories de voisins : &laquo;&nbsp;le proche voisin&nbsp;&raquo; (<em>al-jar dhi al-qurba</em>) et &laquo;&nbsp;le voisin lointain&nbsp;&raquo; (<em>al-jar al-junub</em>). Selon Ibn Kathir, le premier désigne le voisin apparenté ou proche géographiquement, et le second le voisin éloigné ou étranger. Les deux ont des droits.
                </p>

                <HadithCard
                  arabic="وَالَّذِينَ يُؤْذُونَ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ بِغَيْرِ مَا اكْتَسَبُوا فَقَدِ احْتَمَلُوا بُهْتَانًا وَإِثْمًا مُّبِينًا"
                  text="Et ceux qui offensent les croyants et les croyantes sans qu&apos;ils l&apos;aient mérité se chargent d&apos;une calomnie et d&apos;un péché évident."
                  source="Coran, sourate Al-Ahzab (33:58)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset, bien qu&apos;il concerne l&apos;ensemble des croyants, est particulièrement applicable au voisinage. Les savants l&apos;utilisent pour interdire toute forme de nuisance envers le voisin, qu&apos;elle soit verbale, physique ou morale. C&apos;est sur cette base coranique que le Prophète ﷺ a développé un ensemble d&apos;enseignements détaillés sur les droits du voisin.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Recommandation de Jibril     */}
              {/* ====================================== */}
              <section id="recommandation-jibril" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La recommandation insistante de Jibril sur le voisin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les hadiths les plus marquants sur le voisinage figure celui où le Prophète ﷺ décrit l&apos;insistance extraordinaire de l&apos;ange Jibril (Gabriel) sur les droits du voisin. Cette insistance a frappé le Prophète ﷺ lui-même, ce qui montre l&apos;importance capitale de ce sujet auprès d&apos;Allah.
                </p>

                <HadithBlock
                  number={1}
                  title="Jibril ne cessait de me recommander le voisin"
                  narrator="Aisha"
                  arabic="مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ"
                  translation="Jibril ne cessait de me recommander le voisin au point que j&apos;ai pensé qu&apos;il allait lui accorder une part d&apos;héritage."
                  source="Sahih Al-Bukhari, n°6014 — Sahih Muslim, n°2624"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus célèbres sur le voisinage. L&apos;expression &laquo;&nbsp;j&apos;ai pensé qu&apos;il allait lui accorder une part d&apos;héritage&nbsp;&raquo; illustre l&apos;intensité de la recommandation de Jibril. En islam, l&apos;héritage est un droit fort, réservé aux proches parents. Le fait que le Prophète ﷺ ait imaginé que le voisin puisse y accéder montre que les droits du voisin sont presque aussi importants que ceux de la famille. Les savants s&apos;appuient sur ce hadith pour affirmer que le bon traitement du voisin est une obligation religieuse, pas une simple courtoisie."
                />

                <HadithBlock
                  number={2}
                  title="Celui qui croit en Allah qu&apos;il ne nuise pas à son voisin"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ"
                  translation="Celui qui croit en Allah et au Jour dernier, qu&apos;il ne nuise pas à son voisin."
                  source="Sahih Al-Bukhari, n°6018 — Sahih Muslim, n°47"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre la foi et le respect du voisin. La formule &laquo;&nbsp;celui qui croit en Allah et au Jour dernier&nbsp;&raquo; est utilisée par le Prophète ﷺ pour introduire des obligations fondamentales. Dans ce même hadith, il mentionne aussi l&apos;hospitalité envers l&apos;hôte et la bonne parole. Le fait de nuire au voisin est donc incompatible avec la foi véritable. L&apos;imam An-Nawawi explique que ce hadith englobe toute forme de nuisance : bruit, mauvaises odeurs, espionnage, médisance ou agression."
                />

                <HadithBlock
                  number={3}
                  title="Il n&apos;entrera pas au Paradis"
                  narrator="Abu Hurayra"
                  arabic="وَاللَّهِ لَا يُؤْمِنُ، وَاللَّهِ لَا يُؤْمِنُ، وَاللَّهِ لَا يُؤْمِنُ، قِيلَ: مَنْ يَا رَسُولَ اللَّهِ؟ قَالَ: الَّذِي لَا يَأْمَنُ جَارُهُ بَوَائِقَهُ"
                  translation="Par Allah, il ne croit pas ! Par Allah, il ne croit pas ! Par Allah, il ne croit pas ! On demanda : qui donc, ô Messager d&apos;Allah ? Il dit : celui dont le voisin n&apos;est pas à l&apos;abri de ses méfaits."
                  source="Sahih Al-Bukhari, n°6016"
                  grade="sahih"
                  explanation="La triple répétition du serment &laquo;&nbsp;Par Allah, il ne croit pas&nbsp;&raquo; montre la gravité extrême de la nuisance envers le voisin. Le Prophète ﷺ nie la foi complète à celui dont le voisin craint les méfaits. Le terme &laquo;&nbsp;bawa&apos;iq&nbsp;&raquo; désigne les malheurs et les nuisances. Dans une version rapportée par Muslim (n°46), le Prophète ﷺ ajoute : &laquo;&nbsp;il n&apos;entrera pas au Paradis&nbsp;&raquo;, ce qui renforce encore la mise en garde. Les savants précisent qu&apos;il ne s&apos;agit pas d&apos;une exclusion définitive du Paradis, mais d&apos;un avertissement sévère contre un péché grave."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment le socle de l&apos;éthique du voisinage en islam. Ils montrent que le bon traitement du voisin n&apos;est pas une option, mais un impératif lié à la foi elle-même. Pour approfondir les fondements du bon comportement en islam, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Bon comportement envers le voisin  */}
              {/* ============================================ */}
              <section id="bon-comportement-voisin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le bon comportement envers le voisin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de l&apos;interdiction de nuire, le Prophète ﷺ a encouragé les musulmans à adopter un comportement proactif envers leurs voisins : leur faire du bien, supporter leurs éventuels défauts et faire preuve de générosité à leur égard. Les hadiths suivants illustrent cette éthique positive du voisinage.
                </p>

                <HadithBlock
                  number={4}
                  title="Celui qui croit en Allah qu&apos;il soit bienfaisant envers son voisin"
                  narrator="Abu Hurayra"
                  arabic="مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُحْسِنْ إِلَى جَارِهِ"
                  translation="Celui qui croit en Allah et au Jour dernier, qu&apos;il soit bienfaisant envers son voisin."
                  source="Sahih Muslim, n°48"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent sur l&apos;interdiction de nuire. Il ne suffit pas de ne pas faire de mal au voisin : il faut activement lui faire du bien. L&apos;expression &laquo;&nbsp;qu&apos;il soit bienfaisant&nbsp;&raquo; (<em>falyuhsin</em>) englobe toutes les formes de bonté : le salut, le sourire, l&apos;aide matérielle, la visite en cas de maladie et le réconfort dans les épreuves. Les savants distinguent ainsi deux niveaux de devoir envers le voisin : le niveau minimal (ne pas nuire) et le niveau optimal (faire du bien)."
                />

                <HadithBlock
                  number={5}
                  title="Le meilleur compagnon et le meilleur voisin"
                  narrator="Abdullah ibn &apos;Umar"
                  arabic="خَيْرُ الْأَصْحَابِ عِنْدَ اللَّهِ خَيْرُهُمْ لِصَاحِبِهِ وَخَيْرُ الْجِيرَانِ عِنْدَ اللَّهِ خَيْرُهُمْ لِجَارِهِ"
                  translation="Le meilleur compagnon auprès d&apos;Allah est celui qui est le meilleur envers son compagnon, et le meilleur voisin auprès d&apos;Allah est celui qui est le meilleur envers son voisin."
                  source="Jami&apos; at-Tirmidhi, n°1944"
                  grade="sahih"
                  explanation="Ce hadith établit un critère de valeur auprès d&apos;Allah : la qualité du comportement envers le voisin. Le parallèle entre le compagnon de voyage et le voisin montre que ces deux relations de proximité ont une valeur spirituelle. Le voisin, comme le compagnon, est un témoin quotidien de notre caractère. Le Prophète ﷺ enseigne ici que la bonté envers le voisin est un investissement pour l&apos;au-delà, pas seulement un devoir social."
                />

                <HadithBlock
                  number={6}
                  title="La femme qui priait mais nuisait à ses voisins"
                  narrator="Abu Hurayra"
                  arabic="قِيلَ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ فُلَانَةَ تُصَلِّي اللَّيْلَ وَتَصُومُ النَّهَارَ وَتُؤْذِي جِيرَانَهَا بِلِسَانِهَا. قَالَ: لَا خَيْرَ فِيهَا، هِيَ فِي النَّارِ"
                  translation="On dit au Prophète ﷺ : une telle prie la nuit et jeûne le jour, mais elle nuit à ses voisins par sa langue. Il dit : il n&apos;y a aucun bien en elle, elle sera en Enfer."
                  source="Musnad Ahmad, n°9673"
                  grade="sahih"
                  explanation="Ce hadith est un avertissement saisissant. Il montre que les actes d&apos;adoration, aussi nombreux soient-ils, ne compensent pas la nuisance envers le voisin. La prière nocturne et le jeûne sont des actes surérogatoires de grande valeur, mais ils sont annulés par la méchanceté de la langue. Les savants utilisent ce hadith pour enseigner que l&apos;islam est un équilibre entre les droits d&apos;Allah (<em>huquq Allah</em>) et les droits des créatures (<em>huquq al-&apos;ibad</em>). L&apos;un ne peut se substituer à l&apos;autre."
                />

              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh des relations sociales, les droits du voisinage et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ========================================= */}
              {/* SECTION : Partager la nourriture          */}
              {/* ========================================= */}
              <section id="partage-nourriture" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Partager la nourriture avec le voisin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le partage de nourriture occupe une place centrale dans l&apos;éthique du voisinage en islam. Le Prophète ﷺ a particulièrement insisté sur ce point, montrant qu&apos;il ne s&apos;agit pas de gestes exceptionnels mais d&apos;habitudes quotidiennes accessibles à tous, même aux plus modestes.
                </p>

                <HadithBlock
                  number={7}
                  title="Augmente l&apos;eau de ton bouillon"
                  narrator="Abu Dharr"
                  arabic="إِذَا طَبَخْتَ مَرَقَةً فَأَكْثِرْ مَاءَهَا وَتَعَاهَدْ جِيرَانَكَ"
                  translation="Quand tu prépares un bouillon, augmente l&apos;eau et occupe-toi de tes voisins (en leur en offrant)."
                  source="Sahih Muslim, n°2625"
                  grade="sahih"
                  explanation="Ce hadith illustre la simplicité de la générosité en islam. Le Prophète ﷺ ne demande pas d&apos;acheter de la nourriture supplémentaire, mais simplement d&apos;augmenter la quantité d&apos;eau dans le bouillon pour pouvoir en partager. Ce conseil pratique montre que la pauvreté n&apos;est pas une excuse pour ne pas partager avec son voisin. Le terme &laquo;&nbsp;ta&apos;ahad&nbsp;&raquo; signifie prendre soin régulièrement, ce qui indique que le partage doit être une habitude, pas un geste ponctuel."
                />

                <HadithBlock
                  number={8}
                  title="Ne méprise aucun bienfait envers ta voisine"
                  narrator="Abu Hurayra"
                  arabic="يَا نِسَاءَ الْمُسْلِمَاتِ، لَا تَحْقِرَنَّ جَارَةٌ لِجَارَتِهَا وَلَوْ فِرْسِنَ شَاةٍ"
                  translation="Ô femmes musulmanes, qu&apos;aucune voisine ne méprise le cadeau de sa voisine, même s&apos;il s&apos;agit d&apos;un pied de mouton."
                  source="Sahih Al-Bukhari, n°6017 — Sahih Muslim, n°1030"
                  grade="sahih"
                  explanation="Ce hadith s&apos;adresse spécifiquement aux femmes, car ce sont souvent elles qui gèrent les échanges de nourriture entre voisins. Le pied de mouton (<em>firsin shah</em>) est un morceau de très faible valeur, presque un déchet. Le Prophète ﷺ enseigne deux choses : d&apos;abord, qu&apos;il faut offrir même peu, car l&apos;intention compte plus que la valeur matérielle ; ensuite, qu&apos;il ne faut jamais mépriser un cadeau reçu, si modeste soit-il. Ce hadith combat l&apos;orgueil qui empêche de donner et celui qui empêche de recevoir."
                />

                <HadithBlock
                  number={9}
                  title="Ne te couche pas rassasié tandis que ton voisin a faim"
                  narrator="Ibn &apos;Abbas"
                  arabic="لَيْسَ الْمُؤْمِنُ الَّذِي يَشْبَعُ وَجَارُهُ جَائِعٌ إِلَى جَنْبِهِ"
                  translation="N&apos;est pas croyant celui qui se rassasie tandis que son voisin à ses côtés a faim."
                  source="Al-Adab al-Mufrad d&apos;Al-Bukhari, n°112 — authentifié par Al-Albani"
                  grade="sahih"
                  explanation="Ce hadith est un rappel puissant de la responsabilité sociale du musulman. Il nie la foi complète à celui qui ignore la faim de son voisin. Les savants y voient un fondement de la solidarité de proximité en islam : avant de chercher à aider les lointains, le musulman doit s&apos;assurer que son voisin immédiat ne manque de rien. Ce hadith a été utilisé par les fuqaha pour établir que nourrir le voisin affamé peut devenir une obligation individuelle (<em>fard &apos;ayn</em>) lorsque personne d&apos;autre ne peut le faire."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths sur le partage de nourriture montrent que la générosité envers le voisin est à la portée de tous. Pour découvrir d&apos;autres hadiths sur la générosité et les cadeaux, consultez notre article sur les{" "}
                  <Link href="/hadith-cadeaux-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur les cadeaux en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Catégories de voisins */}
              {/* ============================== */}
              <section id="categories-voisins" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les catégories de voisins et les droits spécifiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a distingué différentes catégories de voisins selon les liens qui les unissent. Cette classification montre que l&apos;islam reconnaît des droits au voisin en tant que voisin, indépendamment de sa religion ou de son lien de parenté, tout en accordant des droits supplémentaires aux voisins musulmans et apparentés.
                </p>

                <HadithBlock
                  number={10}
                  title="Les trois catégories de voisins"
                  narrator="Jabir ibn Abdullah"
                  arabic="الْجِيرَانُ ثَلَاثَةٌ: جَارٌ لَهُ حَقٌّ وَاحِدٌ وَهُوَ أَدْنَى الْجِيرَانِ حَقًّا، وَجَارٌ لَهُ حَقَّانِ، وَجَارٌ لَهُ ثَلَاثَةُ حُقُوقٍ وَهُوَ أَفْضَلُ الْجِيرَانِ حَقًّا. فَأَمَّا الَّذِي لَهُ حَقٌّ وَاحِدٌ فَجَارٌ مُشْرِكٌ لَا رَحِمَ لَهُ، وَأَمَّا الَّذِي لَهُ حَقَّانِ فَجَارٌ مُسْلِمٌ لَا رَحِمَ لَهُ لَهُ حَقُّ الْإِسْلَامِ وَحَقُّ الْجِوَارِ، وَأَمَّا الَّذِي لَهُ ثَلَاثَةُ حُقُوقٍ فَجَارٌ مُسْلِمٌ ذُو رَحِمٍ لَهُ حَقُّ الْإِسْلَامِ وَحَقُّ الْجِوَارِ وَحَقُّ الرَّحِمِ"
                  translation="Les voisins sont de trois catégories : un voisin qui a un seul droit, et c&apos;est celui qui a le moins de droits ; un voisin qui a deux droits ; et un voisin qui a trois droits, et c&apos;est celui qui a le plus de droits. Celui qui a un seul droit est le voisin non-musulman sans lien de parenté : il a le droit du voisinage. Celui qui a deux droits est le voisin musulman sans lien de parenté : il a le droit de l&apos;islam et le droit du voisinage. Et celui qui a trois droits est le voisin musulman apparenté : il a le droit de l&apos;islam, le droit du voisinage et le droit de parenté."
                  source="Al-Bazzar — rapporté également par Al-Bayhaqi dans Shu&apos;ab al-Iman"
                  grade="hasan"
                  explanation="Ce hadith est fondamental pour comprendre la conception islamique du voisinage. Il reconnaît explicitement un droit au voisin non-musulman : le droit du voisinage, qui est le droit de base. Les droits se cumulent ensuite selon les liens. Les savants s&apos;appuient sur ce hadith pour réfuter l&apos;idée que le voisin non-musulman n&apos;aurait aucun droit en islam. Au contraire, le simple fait d&apos;être voisin confère un droit que le musulman doit respecter."
                />

                <HadithBlock
                  number={11}
                  title="Le voisin juif d&apos;Ibn &apos;Umar et la viande sacrificielle"
                  narrator="Mujahid"
                  arabic="ذُبِحَتْ شَاةٌ لِعَبْدِ اللَّهِ بْنِ عُمَرَ فَقَالَ: أَهْدَيْتُمْ لِجَارِي الْيَهُودِيِّ؟ فَإِنِّي سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ"
                  translation="On sacrifia un mouton pour Abdullah ibn &apos;Umar. Il dit : avez-vous offert à mon voisin juif ? Car j&apos;ai entendu le Messager d&apos;Allah ﷺ dire : Jibril ne cessait de me recommander le voisin au point que j&apos;ai pensé qu&apos;il allait lui accorder une part d&apos;héritage."
                  source="Jami&apos; at-Tirmidhi, n°1943"
                  grade="hasan"
                  explanation="Ce hadith montre l&apos;application pratique des droits du voisin non-musulman par les Compagnons. Abdullah ibn &apos;Umar, l&apos;un des plus grands juristes parmi les Compagnons, a immédiatement pensé à son voisin juif lors du sacrifice. Il cite le hadith de Jibril comme justification, montrant que la recommandation du voisinage ne connaît pas de frontière religieuse. Les savants citent cet athar (récit des Compagnons) comme preuve que le voisin non-musulman a pleinement droit au bon traitement."
                />

                <HadithBlock
                  number={12}
                  title="Le voisin le plus proche a le plus de droits"
                  narrator="Aisha"
                  arabic="قُلْتُ: يَا رَسُولَ اللَّهِ، إِنَّ لِي جَارَيْنِ، فَإِلَى أَيِّهِمَا أُهْدِي؟ قَالَ: إِلَى أَقْرَبِهِمَا مِنْكِ بَابًا"
                  translation="J&apos;ai dit : ô Messager d&apos;Allah, j&apos;ai deux voisins, auquel des deux dois-je offrir ? Il dit : à celui dont la porte est la plus proche de toi."
                  source="Sahih Al-Bukhari, n°2259"
                  grade="sahih"
                  explanation="Ce hadith apporte une précision pratique importante : lorsqu&apos;on ne peut pas donner à tous ses voisins, la priorité va au plus proche. Le critère n&apos;est pas le lien de parenté ni la religion, mais la proximité géographique. Aisha, en posant cette question, montre que les Compagnons prenaient très au sérieux le devoir de partage avec les voisins. Ce hadith est utilisé par les savants pour définir les cercles de priorité dans le voisinage."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les droits du voisin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le voisinage. Leurs explications permettent de mieux saisir la portée juridique et spirituelle de ces enseignements prophétiques.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith de Jibril sur le voisin indique que le droit du voisin est proche de celui de l&apos;héritier. Il est du devoir du musulman de prendre soin de son voisin, de le protéger, de veiller sur ses biens en son absence et de ne jamais le trahir. C&apos;est un droit confirmé par le Coran et la Sunna.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les savants ont dénombré plus de trente droits du voisin parmi lesquels : le saluer, lui rendre visite en cas de maladie, le consoler dans le malheur, le féliciter dans le bonheur, supporter ses nuisances, ne pas l&apos;espionner, ne pas chercher à découvrir ses défauts, ne pas le regarder de manière indiscrète depuis le toit de sa maison et ne pas bloquer l&apos;aération de sa demeure.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le droit du voisinage est l&apos;un des droits les plus confirmés en islam. Il est commun au musulman et au non-musulman. Le voisin non-musulman a le droit du voisinage, le voisin musulman a le droit du voisinage et celui de l&apos;islam, et le voisin musulman apparenté cumule trois droits. Mais aucun voisin n&apos;est privé de droits.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qudama, <em>Al-Mughni</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur le voisin ne sont pas de simples recommandations morales : ils constituent le fondement d&apos;un corpus juridique élaboré par les quatre écoles de jurisprudence. Le droit du voisinage (<em>haqq al-jiwar</em>) est un domaine à part entière du fiqh, avec des implications pratiques sur l&apos;urbanisme, la propriété et les relations sociales.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la vie quotidienne du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Le droit du voisin est lié à la foi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a directement lié la foi en Allah et au Jour dernier au bon traitement du voisin. Nuire à son voisin est un signe de faiblesse de foi, et en faire un ennemi est une faute grave.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Partager la nourriture, même modestement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Augmenter l&apos;eau du bouillon, offrir un pied de mouton : le Prophète ﷺ enseigne que la générosité n&apos;a pas besoin d&apos;être coûteuse. L&apos;intention et la régularité comptent plus que la valeur du don.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Respecter tous les voisins sans distinction
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les droits du voisinage s&apos;appliquent à tout voisin, quelle que soit sa religion. L&apos;exemple d&apos;Ibn &apos;Umar offrant de la viande à son voisin juif illustre parfaitement cette universalité du bon voisinage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Les adorations ne compensent pas la nuisance
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hadith de la femme qui priait et jeûnait mais nuisait à ses voisins rappelle que l&apos;islam est un équilibre entre les droits d&apos;Allah et les droits des créatures. La piété sincère se manifeste dans le comportement quotidien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prioriser le voisin le plus proche
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Lorsque les moyens sont limités, la priorité va au voisin dont la porte est la plus proche. Ce principe pratique du Prophète ﷺ évite la paralysie de celui qui ne peut pas aider tout le monde et l&apos;encourage à commencer par le plus proche.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Veiller à ce que le voisin ne manque de rien
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a nié la foi à celui qui se rassasie tandis que son voisin a faim. La solidarité de proximité est un devoir qui peut devenir une obligation individuelle lorsque le voisin est dans le besoin.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le voisinage dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur le bon comportement en islam"
                  description="Découvrez les enseignements prophétiques sur le caractère, la douceur et les bonnes manières en islam."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur les cadeaux en islam"
                  description="Les hadiths authentiques sur l&apos;échange de cadeaux, la générosité et le renforcement des liens entre musulmans."
                  href="/hadith-cadeaux-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la famille et les liens de parenté en islam"
                  description="Les enseignements prophétiques sur les droits de la famille, le maintien des liens de parenté et la piété filiale."
                  href="/hadith-famille-liens-parente-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
