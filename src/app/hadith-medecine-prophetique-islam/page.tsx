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
    "Hadiths sur la médecine prophétique : plantes, remèdes et guérison en islam",
  description:
    "Découvrez les hadiths authentiques sur la médecine prophétique (at-tibb an-nabawi) : miel, graine de nigelle, hijama, huile d&apos;olive, dattes, roqya. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la médecine prophétique : plantes, remèdes et guérison en islam",
    description:
      "Les hadiths authentiques sur la médecine prophétique : miel, habba sawda, hijama, alimentation saine et guérison par les invocations selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-medecine-prophetique-islam",
    images: [
      {
        url: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-medecine-prophetique-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la guérison" },
  { id: "miel-nigelle", label: "Le miel et la graine de nigelle" },
  { id: "hijama-remedes", label: "La hijama et les remèdes naturels" },
  { id: "alimentation-prophetique", label: "L&apos;alimentation prophétique" },
  { id: "roqya-invocations", label: "La roqya et les invocations" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Qu&apos;est-ce que la médecine prophétique (at-tibb an-nabawi) ?",
    answer:
      "La médecine prophétique désigne l\u2019ensemble des recommandations du Prophète Muhammad \u2018alayhi salatu wa salam en matière de santé, d\u2019hygiène et de remèdes. Elle inclut l\u2019utilisation du miel, de la graine de nigelle (habba sawda), de la hijama (saignée), de l\u2019huile d\u2019olive, des dattes, de la talbina, ainsi que la guérison spirituelle par la roqya et les invocations. Ces enseignements sont rapportés dans les recueils de Bukhari, Muslim, Tirmidhi et d\u2019autres.",
  },
  {
    question:
      "La graine de nigelle (habba sawda) guérit-elle vraiment toute maladie ?",
    answer:
      "Le hadith authentique (Bukhari 5688) affirme que la graine de nigelle est un remède contre toute maladie sauf la mort. Les savants comme Ibn Hajar et Ibn al-Qayyim expliquent que cette expression est une généralité qui ne signifie pas qu\u2019elle remplace les traitements médicaux modernes. Elle est un complément bénéfique dont les propriétés anti-inflammatoires et immunostimulantes sont confirmées par de nombreuses études scientifiques contemporaines.",
  },
  {
    question: "La hijama est-elle une pratique recommandée en islam ?",
    answer:
      "Oui, la hijama (cupping therapy) est une sunna prophétique confirmée par plusieurs hadiths authentiques. Le Prophète a déclaré que la hijama fait partie des meilleurs remèdes (Bukhari 5696). Il l\u2019a lui-même pratiquée à plusieurs reprises. Les savants recommandent de la faire chez un praticien qualifié et dans le respect des conditions d\u2019hygiène, sans négliger la médecine conventionnelle.",
  },
  {
    question:
      "Quels aliments sont recommandés par le Prophète Muhammad ?",
    answer:
      "Le Prophète a recommandé plusieurs aliments pour leurs bienfaits : les dattes ajwa de Médine pour la protection contre le poison et la sorcellerie (Bukhari 5769), l\u2019huile d\u2019olive comme nourriture et onguent (Tirmidhi 1851), la talbina (bouillie d\u2019orge) pour soulager le chagrin et la maladie (Bukhari 5689), le miel comme remède (Bukhari 5684), ainsi que l\u2019eau de Zamzam. Ces aliments font partie intégrante de la médecine prophétique.",
  },
  {
    question: "Qu&apos;est-ce que la roqya et comment se pratique-t-elle ?",
    answer:
      "La roqya est la guérison par la récitation du Coran et des invocations prophétiques authentiques. Le Prophète a pratiqué la roqya et l\u2019a autorisée à condition qu\u2019elle ne contienne ni shirk (associationnisme) ni paroles incompréhensibles (Muslim 2200). Elle se pratique en récitant les sourates protectrices (Al-Fatiha, Al-Falaq, An-Nas, Ayat al-Kursi) et en soufflant sur le malade ou sur de l\u2019eau. La roqya ne remplace pas la médecine mais la complète.",
  },
  {
    question:
      "La médecine prophétique remplace-t-elle la médecine moderne ?",
    answer:
      "Non, la médecine prophétique ne remplace pas la médecine moderne. Le Prophète a lui-même ordonné de se soigner en disant : \u00ab Ô serviteurs d\u2019Allah, soignez-vous \u00bb (Tirmidhi 2038). Les savants contemporains comme Ibn Baz et Ibn Uthaymin rappellent que recourir aux médecins et aux traitements modernes est parfaitement licite et même recommandé. La médecine prophétique est un complément spirituel et naturel, non un substitut.",
  },
  {
    question: "Le miel est-il mentionné dans le Coran comme remède ?",
    answer:
      "Oui, le Coran mentionne explicitement le miel comme remède dans la sourate An-Nahl (16:69) : \u00ab De leur ventre sort une boisson aux couleurs variées, dans laquelle il y a une guérison pour les gens. \u00bb Le Prophète a confirmé cette vertu en prescrivant le miel à un compagnon souffrant de douleurs abdominales (Bukhari 5684). Le miel est reconnu aujourd\u2019hui pour ses propriétés antibactériennes et cicatrisantes.",
  },
  {
    question:
      "Quels sont les jours recommandés pour la hijama selon la Sunna ?",
    answer:
      "Certains hadiths mentionnent les 17e, 19e et 21e jours du mois lunaire comme étant les meilleurs jours pour la hijama (Tirmidhi 2051). Cependant, les savants précisent que la hijama peut être pratiquée à tout moment en cas de besoin. Le Prophète l\u2019a lui-même pratiquée en différentes occasions sans se limiter à des jours précis. L\u2019essentiel est de la pratiquer dans de bonnes conditions et chez un praticien compétent.",
  },
];

export default function HadithMedecineProphetiqueIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-medecine-prophetique-islam/#article",
        headline:
          "Hadiths sur la médecine prophétique : plantes, remèdes et guérison en islam",
        description:
          "Découvrez les hadiths authentiques sur la médecine prophétique : miel, graine de nigelle, hijama, alimentation saine et guérison par les invocations.",
        image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-medecine-prophetique-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-medecine-prophetique-islam/#breadcrumb",
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
            name: "Médecine prophétique",
            item: "https://www.islamreligion.fr/hadith-medecine-prophetique-islam",
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
          title="Hadiths sur la médecine prophétique en islam"
          subtitle="Les enseignements prophétiques sur le miel, la graine de nigelle, la hijama, l&apos;alimentation saine et la guérison par les invocations selon la Sunna authentique."
          imageSrc="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
          imageAlt="Hadiths sur la médecine prophétique en islam, remèdes naturels et guérison"
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
                  Médecine prophétique
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
                    Le Prophète ﷺ a prescrit des remèdes naturels comme le miel, la graine de nigelle et la hijama, confirmés par la science moderne.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La médecine prophétique allie soin du corps et soin de l&apos;âme, combinant remèdes physiques et guérison spirituelle par la roqya.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;alimentation prophétique (dattes, huile d&apos;olive, talbina) constitue un mode de vie sain fondé sur la modération et les aliments naturels.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a ordonné de se soigner et n&apos;a jamais opposé la médecine aux remèdes spirituels : les deux sont complémentaires.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la guérison en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur la médecine prophétique, il est essentiel de rappeler que le Coran lui-même aborde la guérison. Allah a fait descendre dans Son Livre une guidance et une miséricorde, mais aussi un remède (<em>shifa</em>) pour les croyants. Plusieurs versets fondent la conception islamique de la santé et de la guérison, sur laquelle s&apos;appuient ensuite les enseignements pratiques du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ وَلَا يَزِيدُ الظَّالِمِينَ إِلَّا خَسَارًا"
                  text="Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour les croyants, cependant cela ne fait qu&apos;accroître la perdition des injustes."
                  source="Coran, sourate Al-Isra (17:82)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit que le Coran est en lui-même un remède. Les savants distinguent deux types de guérison coranique : la guérison des cœurs (contre le doute, l&apos;hypocrisie et l&apos;ignorance) et la guérison des corps (par la récitation et l&apos;invocation). Ibn al-Qayyim souligne dans son ouvrage <em>At-Tibb an-Nabawi</em> que cette double dimension fait du Coran le fondement de toute médecine prophétique.
                </p>

                <HadithCard
                  arabic="يَخْرُجُ مِن بُطُونِهَا شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِّلنَّاسِ إِنَّ فِي ذَٰلِكَ لَآيَةً لِّقَوْمٍ يَتَفَكَّرُونَ"
                  text="De leur ventre sort une boisson aux couleurs variées, dans laquelle il y a une guérison pour les gens. Il y a vraiment là un signe pour des gens qui réfléchissent."
                  source="Coran, sourate An-Nahl (16:69)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fait référence au miel produit par les abeilles. Allah qualifie le miel de &laquo;&nbsp;guérison pour les gens&nbsp;&raquo; (<em>shifa lin-nas</em>), une affirmation générale qui englobe de nombreuses maladies. Le Prophète ﷺ a confirmé cette vertu dans ses enseignements pratiques, faisant du miel l&apos;un des piliers de la médecine prophétique. La science moderne a depuis confirmé les propriétés antibactériennes, anti-inflammatoires et cicatrisantes du miel.
                </p>

                <HadithCard
                  arabic="وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ"
                  text="Et quand je suis malade, c&apos;est Lui qui me guérit."
                  source="Coran, sourate Ash-Shu&apos;ara (26:80)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette parole d&apos;Ibrahim (Ibrahim &apos;alayhi salam) rapportée dans le Coran rappelle un principe fondamental : la guérison vient d&apos;Allah seul. Les remèdes, qu&apos;ils soient naturels ou médicaux, ne sont que des causes (<em>asbab</em>) mises à la disposition de l&apos;homme. C&apos;est sur cette conviction que repose la médecine prophétique : utiliser les moyens tout en plaçant sa confiance en Allah.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Miel et nigelle      */}
              {/* ============================== */}
              <section id="miel-nigelle" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le miel et la graine de nigelle (habba sawda)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les remèdes les plus célèbres de la médecine prophétique figurent le miel et la graine de nigelle (<em>habba sawda</em> ou <em>al-habba al-baraka</em>). Le Prophète ﷺ a explicitement recommandé ces deux substances dans des hadiths authentiques. Aujourd&apos;hui, les recherches scientifiques confirment largement leurs bienfaits pour la santé.
                </p>

                <HadithBlock
                  number={1}
                  title="Le miel comme remède"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ أَخِي يَشْتَكِي بَطْنَهُ فَقَالَ اسْقِهِ عَسَلًا ثُمَّ أَتَاهُ الثَّانِيَةَ فَقَالَ اسْقِهِ عَسَلًا ثُمَّ أَتَاهُ الثَّالِثَةَ فَقَالَ اسْقِهِ عَسَلًا ثُمَّ أَتَاهُ فَقَالَ قَدْ فَعَلْتُ فَقَالَ صَدَقَ اللَّهُ وَكَذَبَ بَطْنُ أَخِيكَ اسْقِهِ عَسَلًا فَسَقَاهُ فَبَرَأَ"
                  translation="Un homme vint voir le Prophète ﷺ et dit : mon frère souffre du ventre. Il dit : donne-lui du miel à boire. L&apos;homme revint une deuxième fois et il dit : donne-lui du miel à boire. Puis il revint une troisième fois et il dit : donne-lui du miel à boire. L&apos;homme revint et dit : je l&apos;ai fait (mais il n&apos;est pas guéri). Le Prophète dit : Allah a dit vrai et c&apos;est le ventre de ton frère qui a menti. Donne-lui du miel à boire. Il lui en donna et il fut guéri."
                  source="Sahih Al-Bukhari, n°5684"
                  grade="sahih"
                  explanation="Ce hadith illustre la confiance du Prophète ﷺ dans la parole d&apos;Allah concernant le miel (sourate An-Nahl, 16:69). Malgré l&apos;absence de résultat immédiat, le Prophète a insisté sur la poursuite du traitement, affirmant que la promesse divine de guérison est véridique. Les savants y voient la preuve que les remèdes prophétiques nécessitent parfois de la persévérance. Le miel possède des propriétés laxatives douces, antibactériennes et apaisantes pour le système digestif, ce qui explique son efficacité contre les troubles abdominaux."
                />

                <HadithBlock
                  number={2}
                  title="La graine de nigelle guérit toute maladie"
                  narrator="Abu Hurayra"
                  arabic="عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ"
                  translation="Prenez cette graine de nigelle, car elle contient un remède contre toute maladie, sauf la mort."
                  source="Sahih Al-Bukhari, n°5688 — Sahih Muslim, n°2215"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus célèbres sur la médecine prophétique. L&apos;expression &laquo; toute maladie sauf la mort &raquo; est commentée de deux manières par les savants. Ibn Hajar al-Asqalani dans le Fath al-Bari explique qu&apos;il s&apos;agit d&apos;une généralité qui ne signifie pas que la nigelle se suffit à elle-même pour chaque pathologie, mais qu&apos;elle entre dans la composition de remèdes efficaces contre la plupart des maux. La thymoquinone, principe actif principal de la nigelle, possède des propriétés anti-inflammatoires, antioxydantes et immunostimulantes confirmées par plus de mille études scientifiques."
                />

                <HadithBlock
                  number={3}
                  title="La guérison réside dans trois choses"
                  narrator="Ibn &apos;Abbas"
                  arabic="الشِّفَاءُ فِي ثَلَاثَةٍ: شَرْبَةِ عَسَلٍ، وَشَرْطَةِ مِحْجَمٍ، وَكَيَّةِ نَارٍ، وَأَنْهَى أُمَّتِي عَنِ الْكَيِّ"
                  translation="La guérison réside dans trois choses : une gorgée de miel, une incision de ventouse (hijama) et une cautérisation par le feu. Et j&apos;interdis à ma communauté la cautérisation."
                  source="Sahih Al-Bukhari, n°5681"
                  grade="sahih"
                  explanation="Ce hadith synthétise les trois grands remèdes de la médecine prophétique. Le miel agit sur les maladies internes, la hijama sur les maladies du sang et la cautérisation sur les plaies profondes. Toutefois, le Prophète ﷺ a déconseillé la cautérisation en raison de la douleur qu&apos;elle inflige, préférant les deux premiers remèdes. Les savants expliquent que cette classification couvre les trois voies thérapeutiques principales : le traitement par voie orale, le traitement par extraction et le traitement par chaleur."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths montrent que le Prophète ﷺ a accordé une importance particulière au miel et à la graine de nigelle comme remèdes de première intention. Pour approfondir un autre remède prophétique majeur, consultez notre article sur{" "}
                  <Link href="/hadith-hijama-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur la hijama en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Hijama et remèdes    */}
              {/* ============================== */}
              <section id="hijama-remedes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La hijama (saignée) et les remèdes naturels
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La hijama (ventousothérapie ou <em>cupping therapy</em>) occupe une place centrale dans la médecine prophétique. Le Prophète ﷺ l&apos;a pratiquée à de nombreuses reprises et l&apos;a recommandée à sa communauté. Les hadiths suivants détaillent ses bienfaits et les conditions de sa pratique.
                </p>

                <HadithBlock
                  number={4}
                  title="Les meilleurs remèdes incluent la hijama"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ وَالْقُسْطُ الْبَحْرِيُّ"
                  translation="Les meilleurs remèdes que vous puissiez utiliser sont la hijama (ventouses) et le qust al-bahri (costus marin)."
                  source="Sahih Al-Bukhari, n°5696"
                  grade="sahih"
                  explanation="Ce hadith place la hijama et le costus marin au sommet des remèdes prophétiques. La hijama consiste à appliquer des ventouses sur des points précis du corps, puis à pratiquer de légères incisions pour extraire le sang vicié. Le qust al-bahri (costus marin ou indien) est une plante aux propriétés anti-inflammatoires et antimicrobiennes utilisée en fumigation ou en boisson. Le Prophète ﷺ qualifie ces deux remèdes de &laquo; meilleurs &raquo; (<em>amthal</em>), indiquant leur supériorité thérapeutique parmi les traitements naturels disponibles à son époque."
                />

                <HadithBlock
                  number={5}
                  title="Le Prophète ﷺ s&apos;est fait faire la hijama"
                  narrator="Anas ibn Malik"
                  arabic="أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ احْتَجَمَ ثَلَاثًا فِي الْأَخْدَعَيْنِ وَالْكَاهِلِ"
                  translation="Le Prophète ﷺ s&apos;est fait appliquer des ventouses à trois endroits : sur les deux veines jugulaires (al-akhdaayn) et sur la nuque (al-kahil)."
                  source="Sunan Abu Dawud, n°3860 — Jami&apos; at-Tirmidhi, n°2051"
                  grade="sahih"
                  explanation="Ce hadith précise les points anatomiques où le Prophète ﷺ pratiquait la hijama. Les deux veines jugulaires (al-akhdaayn) se situent de chaque côté du cou, et le kahil désigne la partie supérieure du dos entre les épaules. Ces points correspondent à des zones où la circulation sanguine est dense et où l&apos;extraction du sang vicié est particulièrement bénéfique selon la médecine traditionnelle. Les praticiens contemporains de la hijama continuent d&apos;utiliser ces mêmes points, auxquels s&apos;ajoutent d&apos;autres zones en fonction de la pathologie traitée."
                />

                <HadithBlock
                  number={6}
                  title="Soignez-vous, car Allah n&apos;a pas créé de maladie sans remède"
                  narrator="Usama ibn Sharik"
                  arabic="تَدَاوَوْا عِبَادَ اللَّهِ فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ شِفَاءً إِلَّا دَاءً وَاحِدًا الْهَرَمَ"
                  translation="Soignez-vous, ô serviteurs d&apos;Allah, car Allah n&apos;a pas créé de maladie sans avoir créé son remède, sauf une seule maladie : la vieillesse."
                  source="Jami&apos; at-Tirmidhi, n°2038 — Sunan Abu Dawud, n°3855"
                  grade="sahih"
                  explanation="Ce hadith fondamental établit le principe islamique de la médecine : se soigner est un devoir, car Allah a placé un remède pour chaque maladie. Le Prophète ﷺ utilise la forme impérative &laquo; soignez-vous &raquo; (<em>tadawaw</em>), ce qui indique une obligation ou une forte recommandation. L&apos;exception de la vieillesse montre le réalisme de l&apos;enseignement prophétique : le vieillissement est un processus naturel inéluctable. Ce hadith réfute tout fatalisme face à la maladie et encourage activement la recherche médicale."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la médecine prophétique, les hadiths et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================================ */}
              {/* SECTION : Alimentation prophétique           */}
              {/* ============================================ */}
              <section id="alimentation-prophetique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;alimentation prophétique : dattes, huile d&apos;olive et talbina
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La médecine prophétique ne se limite pas aux traitements curatifs. Elle inclut une dimension préventive fondée sur une alimentation saine et équilibrée. Le Prophète ﷺ a recommandé plusieurs aliments pour leurs vertus nutritionnelles et thérapeutiques, parmi lesquels les dattes, l&apos;huile d&apos;olive et la talbina (bouillie d&apos;orge) occupent une place de choix.
                </p>

                <HadithBlock
                  number={7}
                  title="Les dattes ajwa de Médine"
                  narrator="Sa&apos;d ibn Abi Waqqas"
                  arabic="مَنْ تَصَبَّحَ بِسَبْعِ تَمَرَاتٍ عَجْوَةً لَمْ يَضُرَّهُ ذَلِكَ الْيَوْمَ سُمٌّ وَلَا سِحْرٌ"
                  translation="Celui qui mange chaque matin sept dattes ajwa ne sera atteint ce jour-là ni par le poison ni par la sorcellerie."
                  source="Sahih Al-Bukhari, n°5769 — Sahih Muslim, n°2047"
                  grade="sahih"
                  explanation="Ce hadith confère aux dattes ajwa de Médine une double protection : physique (contre le poison) et spirituelle (contre la sorcellerie). Les savants expliquent que cette vertu est spécifique aux dattes ajwa de Médine, bien que d&apos;autres variétés de dattes possèdent également des bienfaits nutritionnels. Les dattes sont riches en fibres, en potassium, en magnésium et en sucres naturels, ce qui en fait un aliment énergétique complet. Des études récentes ont montré que les dattes ajwa contiennent des composés antioxydants et hépatoprotecteurs supérieurs aux autres variétés."
                />

                <HadithBlock
                  number={8}
                  title="L&apos;huile d&apos;olive : mangez-en et enduisez-vous-en"
                  narrator="Abu Hurayra"
                  arabic="كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ مُبَارَكَةٍ"
                  translation="Mangez de l&apos;huile (d&apos;olive) et enduisez-vous-en, car elle provient d&apos;un arbre béni."
                  source="Jami&apos; at-Tirmidhi, n°1851 — Sunan Ibn Majah, n°3319"
                  grade="hasan"
                  explanation="Ce hadith recommande l&apos;huile d&apos;olive à la fois comme aliment et comme soin corporel. Le Prophète ﷺ la qualifie de produit d&apos;un &laquo; arbre béni &raquo;, en référence à l&apos;olivier mentionné dans le Coran (sourate An-Nur, 24:35). L&apos;huile d&apos;olive est aujourd&apos;hui reconnue comme l&apos;un des piliers du régime méditerranéen, grâce à sa richesse en acides gras monoinsaturés, en polyphénols et en vitamine E. Elle protège contre les maladies cardiovasculaires, réduit l&apos;inflammation et nourrit la peau en application externe."
                />

                <HadithBlock
                  number={9}
                  title="La talbina apaise le cœur du malade"
                  narrator="Aisha"
                  arabic="عَلَيْكُمْ بِالْبَغِيضِ النَّافِعِ التَّلْبِينَةِ، فَوَالَّذِي نَفْسِي بِيَدِهِ إِنَّهَا تَغْسِلُ بَطْنَ أَحَدِكُمْ كَمَا يُغْسَلُ الْوَسَخُ عَنْ وَجْهِ أَحَدِكُمْ بِالْمَاءِ"
                  translation="Prenez la talbina, le remède détesté (pour son goût) mais bénéfique. Par Celui qui détient mon âme dans Sa main, elle nettoie le ventre de l&apos;un d&apos;entre vous comme l&apos;eau nettoie la saleté du visage."
                  source="Sahih Al-Bukhari, n°5689 (sens) — Sunan Ibn Majah, n°3446"
                  grade="sahih"
                  explanation="La talbina est une bouillie préparée à base de farine d&apos;orge mélangée à de l&apos;eau ou du lait. Le Prophète ﷺ et Aisha (qu&apos;Allah l&apos;agrée) l&apos;ont recommandée pour ses vertus digestives et apaisantes. L&apos;expression &laquo; nettoie le ventre &raquo; fait référence à son effet détoxifiant et laxatif doux. L&apos;orge est riche en bêta-glucanes, des fibres solubles qui régulent le cholestérol et la glycémie. La talbina était également prescrite pour soulager le chagrin et la tristesse, ce qui correspond aux découvertes modernes sur le lien entre alimentation et santé mentale."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Roqya et invocations */}
              {/* ============================== */}
              <section id="roqya-invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La guérison par la roqya et les invocations
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La médecine prophétique ne se limite pas aux remèdes matériels. Le Prophète ﷺ a enseigné que la guérison spirituelle par la récitation du Coran et les invocations (<em>roqya shar&apos;iyya</em>) constitue un pilier thérapeutique à part entière. Cette dimension spirituelle distingue la médecine prophétique de toute autre approche médicale.
                </p>

                <HadithBlock
                  number={10}
                  title="La roqya est permise tant qu&apos;elle ne contient pas de shirk"
                  narrator="&apos;Awf ibn Malik"
                  arabic="اعْرِضُوا عَلَيَّ رُقَاكُمْ لَا بَأْسَ بِالرُّقَى مَا لَمْ يَكُنْ فِيهِ شِرْكٌ"
                  translation="Présentez-moi vos roqya (formules de guérison). Il n&apos;y a pas de mal à pratiquer la roqya tant qu&apos;elle ne contient pas de shirk (associationnisme)."
                  source="Sahih Muslim, n°2200"
                  grade="sahih"
                  explanation="Ce hadith établit la règle fondamentale de la roqya en islam : elle est autorisée à condition de ne contenir ni formules de shirk, ni invocations adressées à autre qu&apos;Allah, ni paroles incompréhensibles. Le Prophète ﷺ a demandé aux compagnons de lui soumettre leurs formules de guérison pour vérifier leur conformité. Les savants en déduisent que la roqya légitime se compose de versets coraniques, de noms et attributs d&apos;Allah, et d&apos;invocations prophétiques authentiques. Toute roqya contenant des talismans, des amulettes ou des incantations obscures est interdite."
                />

                <HadithBlock
                  number={11}
                  title="La sourate Al-Fatiha comme guérison"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="وَمَا يُدْرِيكَ أَنَّهَا رُقْيَةٌ"
                  translation="Le Prophète ﷺ dit (après qu&apos;un compagnon eut guéri un homme piqué par un scorpion en récitant Al-Fatiha) : et comment savais-tu qu&apos;elle est une roqya (guérison) ?"
                  source="Sahih Al-Bukhari, n°5749 — Sahih Muslim, n°2201"
                  grade="sahih"
                  explanation="Ce hadith raconte qu&apos;un compagnon a récité la sourate Al-Fatiha sur un chef de tribu piqué par un scorpion, et celui-ci fut guéri. Le Prophète ﷺ a approuvé cet acte et a confirmé que la Fatiha possède une vertu de guérison. Les savants voient dans ce hadith la preuve que la sourate Al-Fatiha — appelée aussi &laquo; la guérisseuse &raquo; (<em>ash-shafiya</em>) — est la plus puissante des sourates en matière de roqya. Elle contient le tawhid, la demande de guidance, la recherche de protection et la soumission à Allah, qui sont les fondements de la guérison spirituelle."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La roqya et les invocations constituent la dimension spirituelle de la médecine prophétique. Elles rappellent que la guérison ultime vient d&apos;Allah, et que les remèdes matériels ne sont que des causes secondaires. Pour découvrir d&apos;autres remèdes naturels mentionnés dans la Sunna, consultez notre article sur{" "}
                  <Link href="/remede-arabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les remèdes arabes traditionnels en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la médecine prophétique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des ouvrages entiers à la médecine prophétique. Leurs commentaires permettent de mieux comprendre la portée de ces enseignements et leur articulation avec la médecine conventionnelle.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La médecine prophétique se divise en trois catégories : les remèdes naturels (miel, nigelle, hijama), les remèdes spirituels (roqya, invocations, Coran) et les remèdes composés des deux. Le Prophète ﷺ utilisait les trois selon la situation et ne négligeait aucune voie de guérison.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim al-Jawziyya, <em>At-Tibb an-Nabawi</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith sur la graine de nigelle ne signifie pas qu&apos;elle se prend seule pour toute maladie. Il signifie qu&apos;elle entre dans la composition de remèdes variés, qu&apos;elle se mélange à d&apos;autres substances selon la pathologie, et qu&apos;elle possède une vertu générale de renforcement du corps et de l&apos;immunité.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Se soigner par les moyens licites ne contredit pas le tawakkul (la confiance en Allah). Au contraire, le tawakkul véritable consiste à prendre les causes tout en sachant que le résultat est entre les mains d&apos;Allah. Délaisser les soins par faux ascétisme est contraire à la Sunna.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Cheikh Ibn Baz, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que la médecine prophétique n&apos;est pas un système figé opposé à la médecine moderne. Les savants insistent sur la complémentarité des approches et sur le devoir du musulman de se soigner par tous les moyens licites à sa disposition. L&apos;ouvrage de référence reste <em>At-Tibb an-Nabawi</em> d&apos;Ibn al-Qayyim, qui recense et commente l&apos;ensemble des hadiths médicaux du Prophète ﷺ.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la santé du musulman :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se soigner est un devoir, non une option
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a ordonné de se soigner et a affirmé qu&apos;Allah a créé un remède pour chaque maladie. Négliger sa santé par fatalisme est contraire à la Sunna.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Intégrer le miel et la nigelle dans son alimentation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Ces deux remèdes prophétiques sont accessibles, naturels et confirmés par la science. Une cuillère de miel le matin et une pincée de nigelle broyée constituent une sunna simple à appliquer au quotidien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer la hijama chez un professionnel qualifié
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La hijama est une sunna bénéfique mais elle doit être pratiquée dans des conditions d&apos;hygiène strictes et par un praticien formé. Elle ne remplace pas les consultations médicales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Adopter une alimentation prophétique équilibrée
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les dattes, l&apos;huile d&apos;olive et la talbina sont des aliments complets recommandés par le Prophète ﷺ. Ils s&apos;intègrent facilement dans une alimentation moderne et contribuent à la prévention de nombreuses maladies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas négliger la dimension spirituelle de la guérison
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La roqya par le Coran et les invocations prophétiques est un remède légitime qui complète les soins médicaux. Le musulman doit placer sa confiance en Allah tout en utilisant les moyens matériels de guérison.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Combiner médecine prophétique et médecine moderne
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les remèdes prophétiques ne s&apos;opposent pas à la médecine conventionnelle. Les savants sont unanimes : consulter un médecin et suivre un traitement médical est parfaitement licite et recommandé en islam.
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
                  description="Comprenez les hadiths sur la médecine prophétique dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la hijama en islam : la saignée prophétique"
                  description="Tous les hadiths authentiques sur la hijama, ses bienfaits et les conditions de sa pratique selon la Sunna."
                  href="/hadith-hijama-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les remèdes arabes traditionnels en islam"
                  description="Découvrez les plantes et remèdes naturels utilisés dans la médecine prophétique et la tradition arabe."
                  href="/remede-arabe"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
