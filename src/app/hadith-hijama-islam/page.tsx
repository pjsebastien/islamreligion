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
    "Hadiths sur la hijama en islam : bienfaits et pratique prophétique",
  description:
    "Découvrez les hadiths authentiques sur la hijama (ventousothérapie) en islam : recommandations du Prophète ﷺ, jours propices, bienfaits, rémunération du hijameur. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la hijama en islam : bienfaits et pratique prophétique",
    description:
      "Les hadiths authentiques sur la hijama en islam : pratique prophétique, jours recommandés, bienfaits thérapeutiques et avis des savants selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-hijama-islam",
    images: [
      {
        url: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-hijama-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la guérison" },
  { id: "hijama-recommandee", label: "La hijama recommandée par le Prophète ﷺ" },
  { id: "meilleur-remede", label: "Le meilleur des remèdes" },
  { id: "jours-moments", label: "Les jours et moments de la hijama" },
  { id: "remuneration-hijameur", label: "Rémunération du hijameur" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "La hijama est-elle une sunna du Prophète Muhammad ﷺ ?",
    answer:
      "Oui, la hijama est une sunna confirmée. Le Prophète ﷺ l\u2019a pratiquée à de nombreuses reprises et l\u2019a recommandée à sa communauté. Plusieurs hadiths authentiques rapportés dans les recueils de Bukhari, Muslim et Tirmidhi attestent qu\u2019il s\u2019est fait poser des ventouses sur la tête, entre les épaules et sur le pied. Les savants considèrent la hijama comme une pratique recommandée (mustahabb) dans le cadre de la médecine prophétique.",
  },
  {
    question:
      "Quels sont les jours recommandés pour la hijama en islam ?",
    answer:
      "D\u2019après certains hadiths, les 17e, 19e et 21e jours du mois lunaire sont mentionnés comme étant propices à la hijama. Le hadith d\u2019Anas rapporté par Tirmidhi (2053) mentionne ces jours précis. Toutefois, les savants comme Ibn Hajar et An-Nawawi précisent que la hijama peut être pratiquée à tout moment en cas de besoin médical, sans se limiter à ces jours spécifiques.",
  },
  {
    question:
      "Le salaire du hijameur (al-hajjam) est-il licite en islam ?",
    answer:
      "Le salaire du hijameur est licite selon la majorité des savants. Le Prophète ﷺ a lui-même payé le hijameur qui lui a posé des ventouses (Bukhari 2278). Le hadith qui qualifie le gain du hijameur de \u00ab mauvais \u00bb (khabith) est interprété par les savants comme une marque de dépréciation du métier, non comme une interdiction. L\u2019imam An-Nawawi et Ibn Hajar confirment que la rémunération est permise.",
  },
  {
    question:
      "La hijama annule-t-elle le jeûne du musulman ?",
    answer:
      "Les savants divergent sur cette question. Le hadith \u00ab Le jeûneur et le hijameur ont rompu leur jeûne \u00bb (Abu Dawud 2367) est interprété par certains comme une abrogation (l\u2019interdiction a été levée) et par d\u2019autres comme un simple avertissement. L\u2019avis majoritaire des écoles hanafite, malikite et shafiite est que la hijama ne rompt pas le jeûne. L\u2019école hanbalite considère qu\u2019elle le rompt. La prudence veut de la pratiquer en dehors des heures de jeûne.",
  },
  {
    question:
      "Quels sont les bienfaits de la hijama selon la médecine prophétique ?",
    answer:
      "Le Prophète ﷺ a décrit la hijama comme faisant partie des meilleurs remèdes. Elle vise à extraire le sang vicié, à stimuler la circulation sanguine et à soulager de nombreuses douleurs. Les hadiths mentionnent son utilisation contre les maux de tête, les douleurs dorsales et les troubles sanguins. Les études modernes confirment des effets positifs sur la tension artérielle, les inflammations et certaines douleurs chroniques.",
  },
  {
    question:
      "Le Prophète ﷺ a-t-il pratiqué la hijama pendant l\u2019ihram ?",
    answer:
      "Oui, le Prophète ﷺ s\u2019est fait poser des ventouses alors qu\u2019il était en état d\u2019ihram (sacralisation pour le pèlerinage), comme le rapporte Ibn \u2019Abbas dans Sahih Al-Bukhari (5701). Cela prouve que la hijama est permise même pendant l\u2019ihram en cas de besoin médical, ce que confirment les quatre écoles juridiques.",
  },
];

export default function HadithHijamaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-hijama-islam/#article",
        headline:
          "Hadiths sur la hijama en islam : bienfaits et pratique prophétique",
        description:
          "Découvrez les hadiths authentiques sur la hijama en islam : recommandations du Prophète ﷺ, jours propices, bienfaits et rémunération du hijameur.",
        image: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-hijama-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-hijama-islam/#breadcrumb",
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
            name: "Hijama en islam",
            item: "https://www.islamreligion.fr/hadith-hijama-islam",
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
          title="Hadiths sur la hijama en islam"
          subtitle="Les enseignements prophétiques sur la ventousothérapie (hijama) : recommandations, bienfaits, jours propices et pratique selon la Sunna authentique."
          imageSrc="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
          imageAlt="Hadiths sur la hijama en islam, médecine prophétique et ventousothérapie"
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
                  Hijama en islam
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
                    Le Prophète ﷺ a pratiqué la hijama à de nombreuses reprises et l&apos;a recommandée comme l&apos;un des meilleurs remèdes pour sa communauté.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les hadiths mentionnent des jours spécifiques du mois lunaire (17e, 19e, 21e) comme étant propices à la hijama, tout en la permettant à tout moment en cas de besoin.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La rémunération du hijameur est licite selon la majorité des savants, et le Prophète ﷺ a lui-même payé celui qui lui a posé des ventouses.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La hijama s&apos;inscrit dans la médecine prophétique (<em>at-tibb an-nabawi</em>) aux côtés du miel, de la graine de nigelle et du costus marin.
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
                  Avant d&apos;aborder les hadiths sur la hijama, il est essentiel de rappeler que le Coran pose les fondements de la guérison en islam. Allah se présente comme Celui qui guérit, et la recherche du remède est encouragée. La hijama s&apos;inscrit dans cette vision globale où le soin du corps est un acte d&apos;obéissance à Allah.
                </p>

                <HadithCard
                  arabic="وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ"
                  text="Et quand je suis malade, c&apos;est Lui qui me guérit."
                  source="Coran, sourate Ash-Shu&apos;ara (26:80)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset, prononcé par le prophète Ibrahim (Abraham), attribue la guérison exclusivement à Allah. Le croyant utilise les moyens matériels — médicaments, hijama, alimentation — tout en plaçant sa confiance en Allah comme source ultime de la guérison. Les savants soulignent qu&apos;Ibrahim a dit &laquo;&nbsp;quand je suis malade&nbsp;&raquo; en s&apos;attribuant la maladie, mais &laquo;&nbsp;c&apos;est Lui qui me guérit&nbsp;&raquo; en attribuant la guérison à Allah, par courtoisie envers son Seigneur.
                </p>

                <HadithCard
                  arabic="وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ"
                  text="Et Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour les croyants."
                  source="Coran, sourate Al-Isra (17:82)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit que le Coran lui-même est une source de guérison, à la fois spirituelle et physique. Les savants distinguent la guérison des cœurs (par la foi et la guidance) de la guérison des corps (par la roqya et les invocations). La hijama, en tant que pratique prophétique, s&apos;intègre dans cette approche holistique où le soin physique est indissociable de la dimension spirituelle. Le Prophète ﷺ a prolongé ces enseignements coraniques par des recommandations pratiques précises sur la ventousothérapie.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : La hijama recommandée par le Prophète */}
              {/* ============================================ */}
              <section id="hijama-recommandee" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La hijama recommandée par le Prophète ﷺ
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète Muhammad ﷺ n&apos;a pas simplement mentionné la hijama : il l&apos;a pratiquée personnellement et à de multiples reprises. Les hadiths suivants démontrent que la hijama n&apos;est pas une simple coutume arabe préislamique, mais une pratique validée et encouragée par la révélation prophétique. Le Messager d&apos;Allah ﷺ a même reçu une recommandation angélique à ce sujet.
                </p>

                <HadithBlock
                  number={1}
                  title="L&apos;ordre angélique de pratiquer la hijama"
                  narrator="Ibn &apos;Abbas"
                  arabic="مَا مَرَرْتُ بِمَلَإٍ مِنَ الْمَلَائِكَةِ لَيْلَةَ أُسْرِيَ بِي إِلَّا كُلُّهُمْ يَقُولُ لِي عَلَيْكَ يَا مُحَمَّدُ بِالْحِجَامَةِ"
                  translation="Je ne suis pas passé devant un groupe d&apos;anges, la nuit de mon ascension (al-Isra), sans que chacun d&apos;eux me dise : &laquo; Ô Muhammad, recours à la hijama. &raquo;"
                  source="Jami&apos; at-Tirmidhi, n°2052 — Sunan Ibn Majah, n°3477"
                  grade="sahih"
                  explanation="Ce hadith confère à la hijama une dimension céleste exceptionnelle. Lors de l&apos;ascension nocturne (al-Isra wa al-Mi&apos;raj), les anges eux-mêmes ont recommandé la hijama au Prophète ﷺ. Cela montre que cette pratique n&apos;est pas une simple médecine terrestre, mais un bienfait reconnu dans les sphères célestes. Les savants y voient la preuve de l&apos;importance capitale de la hijama dans la médecine prophétique, au point que les anges y font référence unanimement."
                />

                <HadithBlock
                  number={2}
                  title="La hijama pendant l&apos;ihram"
                  narrator="Ibn &apos;Abbas"
                  arabic="احْتَجَمَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَهُوَ مُحْرِمٌ"
                  translation="Le Prophète ﷺ s&apos;est fait poser des ventouses alors qu&apos;il était en état d&apos;ihram (sacralisation)."
                  source="Sahih Al-Bukhari, n°5701"
                  grade="sahih"
                  explanation="Ce hadith démontre que la hijama est permise même en état d&apos;ihram, c&apos;est-à-dire pendant le pèlerinage ou la &apos;umra. Le fait que le Prophète ﷺ l&apos;ait pratiquée dans cet état de sacralisation prouve qu&apos;elle ne fait pas partie des interdictions de l&apos;ihram. Les quatre écoles juridiques s&apos;accordent sur cette permission. Ce hadith illustre également le pragmatisme de l&apos;islam : la santé du pèlerin prime sur les précautions rituelles non obligatoires."
                />

                <HadithBlock
                  number={3}
                  title="La hijama sur la tête pour une douleur"
                  narrator="Ibn &apos;Abbas"
                  arabic="احْتَجَمَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي رَأْسِهِ وَهُوَ مُحْرِمٌ مِنْ وَجَعٍ كَانَ بِهِ"
                  translation="Le Prophète ﷺ s&apos;est fait poser des ventouses sur la tête alors qu&apos;il était en état d&apos;ihram, en raison d&apos;une douleur qu&apos;il ressentait."
                  source="Sahih Al-Bukhari, n°5700"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en précisant que le Prophète ﷺ a recouru à la hijama sur la tête pour soulager un mal de tête. Cela montre l&apos;utilisation thérapeutique ciblée de la hijama : elle n&apos;est pas appliquée uniformément, mais sur la zone douloureuse. Les praticiens contemporains confirment que la hijama crânienne est particulièrement efficace contre les céphalées, les migraines et les tensions cervicales. Le Prophète ﷺ a ainsi donné l&apos;exemple d&apos;un recours médical raisonné à cette pratique."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths montrent que la hijama était une pratique régulière et assumée du Prophète ﷺ. Il ne s&apos;agit pas d&apos;un remède marginal, mais d&apos;une thérapie centrale dans la médecine prophétique, validée par les anges et pratiquée dans les circonstances les plus sacrées. Pour une vue d&apos;ensemble des remèdes prophétiques, consultez notre article sur{" "}
                  <Link href="/hadith-medecine-prophetique-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    les hadiths sur la médecine prophétique en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le meilleur remède   */}
              {/* ============================== */}
              <section id="meilleur-remede" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le meilleur des remèdes selon le Prophète ﷺ
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ n&apos;a pas simplement recommandé la hijama : il l&apos;a qualifiée comme l&apos;un des meilleurs remèdes à disposition de sa communauté. Les hadiths suivants placent la hijama au sommet de la hiérarchie des soins prophétiques, aux côtés du miel et de la graine de nigelle.
                </p>

                <HadithBlock
                  number={4}
                  title="Le meilleur jour pour la hijama"
                  narrator="Abu Hurayra"
                  arabic="مَنِ احْتَجَمَ لِسَبْعَ عَشْرَةَ وَتِسْعَ عَشْرَةَ وَإِحْدَى وَعِشْرِينَ كَانَ شِفَاءً مِنْ كُلِّ دَاءٍ"
                  translation="Celui qui se fait poser des ventouses le 17e, le 19e et le 21e jour (du mois lunaire), cela sera un remède contre toute maladie."
                  source="Sunan Abu Dawud, n°3861"
                  grade="hasan"
                  explanation="Ce hadith attribue à la hijama pratiquée à des jours précis du calendrier lunaire une efficacité maximale. Les savants expliquent que ces jours correspondent à des phases lunaires où, selon la tradition médicale arabe, le sang connaît une agitation particulière et où l&apos;extraction du sang vicié est la plus bénéfique. Toutefois, les fuqaha précisent que cette recommandation concerne la hijama préventive ; en cas de nécessité médicale, elle peut être pratiquée à tout moment."
                />

                <HadithBlock
                  number={5}
                  title="La hijama à jeun est meilleure"
                  narrator="Ibn &apos;Umar"
                  arabic="الْحِجَامَةُ عَلَى الرِّيقِ أَمْثَلُ وَفِيهَا شِفَاءٌ وَبَرَكَةٌ"
                  translation="La hijama à jeun est meilleure, et elle contient une guérison et une bénédiction (baraka)."
                  source="Sunan Ibn Majah, n°3487"
                  grade="hasan"
                  explanation="Ce hadith ajoute deux dimensions à la hijama : l&apos;aspect médical (le moment optimal étant à jeun, avant que la digestion ne mobilise la circulation sanguine) et l&apos;aspect spirituel (la baraka, bénédiction divine). Pratiquer la hijama à jeun permet une meilleure extraction du sang vicié, car le système digestif n&apos;est pas en activité. Les savants y voient également un parallèle avec d&apos;autres pratiques prophétiques recommandées le matin, avant de manger."
                />

                <HadithBlock
                  number={6}
                  title="La nuit de l&apos;ascension et la hijama"
                  narrator="Anas ibn Malik"
                  arabic="مَا مَرَرْتُ لَيْلَةَ أُسْرِيَ بِي بِمَلَإٍ إِلَّا قَالُوا يَا مُحَمَّدُ مُرْ أُمَّتَكَ بِالْحِجَامَةِ"
                  translation="Je ne suis pas passé, la nuit de mon ascension, devant un groupe (d&apos;anges) sans qu&apos;ils me disent : &laquo; Ô Muhammad, ordonne à ta communauté de recourir à la hijama. &raquo;"
                  source="Sunan Ibn Majah, n°3479"
                  grade="hasan"
                  explanation="Cette variante du hadith d&apos;Ibn &apos;Abbas (rapporté aussi par Anas) insiste sur le fait que les anges ont demandé au Prophète ﷺ de transmettre cette recommandation à toute sa communauté (umma). L&apos;injonction &laquo; ordonne à ta communauté &raquo; confère à la hijama un caractère universel : ce n&apos;est pas un remède réservé au Prophète, mais une recommandation adressée à l&apos;ensemble des musulmans. Les savants en déduisent que la hijama est une sunna à dimension communautaire."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths convergent vers une même conclusion : la hijama occupe une place éminente dans la pharmacopée prophétique. Elle n&apos;est pas un simple soin parmi d&apos;autres, mais un remède béni, recommandé par les anges et qualifié de &laquo;&nbsp;meilleur&nbsp;&raquo; par le Prophète ﷺ lui-même.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez la médecine prophétique, les hadiths et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Jours et moments     */}
              {/* ============================== */}
              <section id="jours-moments" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les jours et moments de la hijama
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a précisé les moments les plus propices pour la pratique de la hijama. Ces recommandations temporelles ne sont pas arbitraires : elles s&apos;inscrivent dans une compréhension des cycles lunaires et de leur influence sur le corps humain, reconnue par la médecine traditionnelle arabe et confirmée par certaines observations contemporaines.
                </p>

                <HadithBlock
                  number={7}
                  title="Les jours impairs du mois lunaire"
                  narrator="Anas ibn Malik"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَحْتَجِمُ فِي الْأَخْدَعَيْنِ وَالْكَاهِلِ وَكَانَ يَحْتَجِمُ لِسَبْعَ عَشْرَةَ وَتِسْعَ عَشْرَةَ وَإِحْدَى وَعِشْرِينَ"
                  translation="Le Messager d&apos;Allah ﷺ se faisait poser des ventouses sur les deux veines jugulaires et entre les épaules, et il se faisait poser des ventouses le 17e, le 19e et le 21e jour (du mois lunaire)."
                  source="Jami&apos; at-Tirmidhi, n°2053"
                  grade="hasan"
                  explanation="Ce hadith combine deux informations : les points anatomiques (jugulaires et kahil) et les jours recommandés. Les 17e, 19e et 21e jours du mois lunaire correspondent à la période qui suit la pleine lune, moment où, selon la médecine traditionnelle, les humeurs corporelles sont les plus agitées. Les savants, dont Ibn al-Qayyim dans Zad al-Ma&apos;ad, expliquent que la hijama en milieu de mois lunaire est plus bénéfique car le sang est alors en pleine effervescence et l&apos;extraction du sang vicié est plus efficace."
                />

                <HadithBlock
                  number={8}
                  title="Le jeûneur et le hijameur"
                  narrator="Thawban"
                  arabic="أَفْطَرَ الْحَاجِمُ وَالْمَحْجُومُ"
                  translation="Le jeûneur et le hijameur ont rompu leur jeûne."
                  source="Sunan Abu Dawud, n°2367 — Musnad Ahmad, n°22287"
                  grade="sahih"
                  explanation="Ce hadith a suscité un débat juridique majeur parmi les savants. L&apos;imam Ahmad ibn Hanbal l&apos;a pris au sens littéral : la hijama rompt le jeûne, tant pour le praticien que pour le patient. En revanche, la majorité des savants (Abu Hanifa, Malik, Ash-Shafi&apos;i) considèrent que ce hadith a été abrogé par le hadith d&apos;Ibn &apos;Abbas attestant que le Prophète ﷺ s&apos;est fait poser des ventouses en état de jeûne (Bukhari 1939). La position majoritaire est que la hijama ne rompt pas le jeûne, mais qu&apos;il est préférable de la pratiquer en dehors des heures de jeûne par précaution."
                />

                <HadithBlock
                  number={9}
                  title="La hijama pendant le jeûne"
                  narrator="Ibn &apos;Abbas"
                  arabic="احْتَجَمَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَهُوَ صَائِمٌ"
                  translation="Le Prophète ﷺ s&apos;est fait poser des ventouses alors qu&apos;il jeûnait."
                  source="Sahih Al-Bukhari, n°1939"
                  grade="sahih"
                  explanation="Ce hadith est la preuve principale utilisée par la majorité des savants pour affirmer que la hijama ne rompt pas le jeûne. Le fait que le Prophète ﷺ l&apos;ait pratiquée en état de jeûne démontre sa licéité. Les savants qui concèdent les deux positions estiment que le hadith de Thawban (&laquo; le jeûneur et le hijameur ont rompu leur jeûne &raquo;) est antérieur et a été abrogé par cette pratique postérieure du Prophète ﷺ. L&apos;imam Ibn Hajar dans le Fath al-Bari analyse en détail cette question et penche vers la permission."
                />
              </section>

              {/* ====================================== */}
              {/* SECTION : Rémunération du hijameur     */}
              {/* ====================================== */}
              <section id="remuneration-hijameur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rémunération du hijameur selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question de la rémunération du hijameur (<em>al-hajjam</em>) a fait l&apos;objet de discussions entre les savants. Certains hadiths semblent déprécier le métier de hijameur, tandis que d&apos;autres montrent que le Prophète ﷺ a payé le sien sans hésitation. L&apos;analyse combinée de ces textes permet de comprendre la position équilibrée de l&apos;islam sur cette profession.
                </p>

                <HadithBlock
                  number={10}
                  title="Le Prophète ﷺ a payé le hijameur"
                  narrator="Anas ibn Malik"
                  arabic="حَجَمَ أَبُو طَيْبَةَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَأَمَرَ لَهُ بِصَاعَيْنِ مِنْ طَعَامٍ وَكَلَّمَ أَهْلَهُ فَخَفَّفُوا عَنْهُ مِنْ خَرَاجِهِ"
                  translation="Abu Tayba a posé des ventouses au Messager d&apos;Allah ﷺ, et le Prophète lui a donné deux sa&apos; de nourriture et a intercédé auprès de ses maîtres pour qu&apos;ils allègent sa charge (impôt)."
                  source="Sahih Al-Bukhari, n°2278 — Sahih Muslim, n°1577"
                  grade="sahih"
                  explanation="Ce hadith est la preuve la plus solide de la licéité du salaire du hijameur. Le Prophète ﷺ n&apos;a pas seulement payé Abu Tayba, il a également intercédé pour améliorer ses conditions de vie. Si le gain du hijameur était interdit (haram), le Prophète ﷺ ne l&apos;aurait jamais payé. Les savants, dont l&apos;imam An-Nawawi et Ibn Hajar, s&apos;appuient sur ce hadith pour affirmer que la rémunération du hijameur est parfaitement licite (halal)."
                />

                <HadithBlock
                  number={11}
                  title="Le gain du hijameur est mauvais"
                  narrator="Rafi&apos; ibn Khadij"
                  arabic="كَسْبُ الْحَجَّامِ خَبِيثٌ"
                  translation="Le gain du hijameur est mauvais (khabith)."
                  source="Sahih Muslim, n°1568"
                  grade="sahih"
                  explanation="Ce hadith semble contredire le précédent, mais les savants ont concilié les deux textes. L&apos;imam An-Nawawi explique que le mot &laquo; khabith &raquo; (mauvais) désigne ici un gain déprécié ou peu noble, et non un gain interdit (haram). C&apos;est une question de rang social et non de licéité juridique. L&apos;imam Ash-Shafi&apos;i a précisé que si le gain était véritablement haram, le Prophète ﷺ n&apos;aurait jamais payé Abu Tayba. La dépréciation vise à encourager les musulmans à ne pas faire de la hijama leur unique source de revenus, tout en reconnaissant que cette profession est utile et permise."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la hijama
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des chapitres entiers à la hijama dans leurs ouvrages. Leurs commentaires permettent de saisir la portée juridique, médicale et spirituelle de cette pratique prophétique.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La hijama est le remède le plus bénéfique pour les gens du Hijaz et des régions chaudes. Elle est plus utile que la saignée veineuse (fasd) car elle extrait le sang des capillaires et des petits vaisseaux, là où se loge le sang vicié. Le Prophète ﷺ l&apos;a pratiquée sur la tête, le dos et le pied, selon le besoin thérapeutique.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith &laquo; le gain du hijameur est khabith &raquo; ne signifie pas que le salaire est haram. Il s&apos;agit d&apos;une dépréciation du métier, comme on dirait d&apos;un travail qu&apos;il est ingrat. La preuve en est que le Prophète ﷺ a payé Abu Tayba et ne lui a pas interdit de prendre ce salaire. S&apos;il était haram, le Prophète l&apos;aurait explicitement interdit.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les hadiths sur les jours recommandés pour la hijama (17e, 19e, 21e) sont une guidance pour la hijama préventive. Quant à la hijama curative, elle se pratique selon le besoin, à tout moment. Le médecin ne doit pas attendre un jour précis si le patient a besoin d&apos;un soin urgent.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires savants montrent que la hijama est abordée avec rigueur et nuance dans la tradition islamique. Les savants concilent les hadiths apparemment contradictoires, distinguent la hijama préventive de la curative, et clarifient la question de la rémunération. La hijama n&apos;est pas une pratique figée dans le passé : elle continue d&apos;être étudiée et recommandée par les savants contemporains dans le cadre de la médecine prophétique.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques sur la hijama en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des enseignements concrets pour le musulman souhaitant intégrer la hijama dans son approche de la santé :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La hijama est une sunna prophétique confirmée
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ l&apos;a pratiquée régulièrement, en voyage, en état d&apos;ihram et pendant le jeûne. La recommandation angélique lors de l&apos;Isra confirme son importance dans la médecine prophétique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Choisir les jours recommandés quand c&apos;est possible
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les 17e, 19e et 21e jours du mois lunaire sont les plus propices pour la hijama préventive. En cas de besoin urgent, elle peut être pratiquée à tout moment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer la hijama à jeun pour plus d&apos;efficacité
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a recommandé la hijama à jeun, car elle contient alors &laquo;&nbsp;une guérison et une baraka&nbsp;&raquo;. Le matin, avant le petit-déjeuner, est le moment idéal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Consulter un praticien qualifié et compétent
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a eu recours à Abu Tayba, un praticien reconnu. La hijama nécessite des conditions d&apos;hygiène strictes et une connaissance des points anatomiques. Ne la confiez qu&apos;à un professionnel formé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas opposer hijama et médecine moderne
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La hijama est un complément, non un substitut à la médecine conventionnelle. Le Prophète ﷺ a ordonné de se soigner, et les savants recommandent de combiner les approches pour optimiser la guérison.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Accompagner la hijama d&apos;invocations
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Comme tout acte du musulman, la hijama gagne à être accompagnée de la mention du nom d&apos;Allah, de la confiance en Lui comme source de la guérison et d&apos;une intention sincère de préserver la santé comme dépôt divin.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la hijama dans leur langue originale et approfondissez votre connaissance de la médecine prophétique."
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
                  title="Hadiths sur la médecine prophétique : plantes, remèdes et guérison"
                  description="Tous les hadiths authentiques sur le miel, la graine de nigelle, la hijama et les remèdes naturels en islam."
                  href="/hadith-medecine-prophetique-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les remèdes arabes et la médecine traditionnelle"
                  description="Découvrez les plantes, huiles et remèdes naturels utilisés dans la tradition arabo-islamique."
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
